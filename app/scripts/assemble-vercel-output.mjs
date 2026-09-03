// Assembles Vercel's Build Output API v3 structure from the already-built
// dist/client (static assets) and dist/server/server.js (the Web-standard
// `{ fetch(request, env, ctx) }` SSR handler emitted by our own vite.config.ts).
//
// This project is NOT a Vercel-recognized framework (it hand-rolls a Workers-
// shaped SSR bundle via @tanstack/react-start's raw server entry, not Nitro),
// so Vercel's normal framework auto-detection cannot build it. Build Output
// API v3 sidesteps that: once `.vercel/output` exists after the build command,
// Vercel deploys it directly instead of guessing.
//
// Runtime choice: Node.js, not Edge. The bundle pulls in `node:stream` and
// `node:stream/web` (from @tanstack/router-core's SSR streaming) — Vercel's
// Edge Runtime supports only a small allowlist (async_hooks, events, buffer,
// assert, util) and does NOT include `stream`, so this would crash there.
// A Node.js Serverless Function has the full Node runtime, so it just works.
//
// Run AFTER `vite build` (see package.json's "vercel-build" script / vercel.json).
import { cpSync, mkdirSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";

const root = dirname(dirname(fileURLToPath(import.meta.url)));
const dist = join(root, "dist");
const output = join(root, ".vercel", "output");
const functionDir = join(output, "functions", "index.func");

rmSync(output, { recursive: true, force: true });
mkdirSync(join(output, "static"), { recursive: true });
mkdirSync(functionDir, { recursive: true });

// Static assets: dist/client already contains everything from public/ plus
// the hashed JS/CSS bundles, and (per wrangler.jsonc's own note) no index.html
// — so "/" never accidentally matches a static file and always reaches SSR.
cpSync(join(dist, "client"), join(output, "static"), { recursive: true });

// The SSR bundle: vite.config.ts's `ssr.noExternal: true` (build-only) already
// bundles every npm dependency into this one file, and `cloudflare:workers` is
// never actually referenced in the compiled output (it's only imported by the
// unused bindings.server.ts, tree-shaken away since nothing in this site opts
// into D1/R2/KV). Confirmed by grepping the built file below.
cpSync(join(dist, "server", "server.js"), join(functionDir, "server.mjs"));

// Node.js Serverless Functions in Build Output API v3 receive classic Node
// `(req: IncomingMessage, res: ServerResponse)`, not a Web Request/Response —
// so this adapter builds a Web Request from `req` (Node's global `Request`,
// undici-backed since Node 18, accepts a Readable body directly with
// `duplex: "half"`), calls our handler, then streams the Web Response back
// onto `res` via `Readable.fromWeb`.
writeFileSync(
  join(functionDir, "index.mjs"),
  `import { Readable } from "node:stream";
import handler from "./server.mjs";

export default async function (req, res) {
  const host = req.headers.host ?? "localhost";
  const protocol = req.headers["x-forwarded-proto"] ?? "https";
  const url = new URL(req.url, \`\${protocol}://\${host}\`);

  const headers = new Headers();
  for (const [key, value] of Object.entries(req.headers)) {
    if (value === undefined) continue;
    if (Array.isArray(value)) {
      for (const v of value) headers.append(key, v);
    } else {
      headers.set(key, value);
    }
  }

  const hasBody = req.method !== "GET" && req.method !== "HEAD";
  const request = new Request(url, {
    method: req.method,
    headers,
    body: hasBody ? req : undefined,
    duplex: hasBody ? "half" : undefined,
  });

  const response = await handler.fetch(request, {}, {});

  res.statusCode = response.status;
  res.statusMessage = response.statusText;
  for (const [key, value] of response.headers) {
    res.setHeader(key, value);
  }

  if (!response.body) {
    res.end();
    return;
  }
  Readable.fromWeb(response.body).pipe(res);
}
`,
);

writeFileSync(
  join(functionDir, ".vc-config.json"),
  JSON.stringify(
    {
      runtime: "nodejs22.x",
      handler: "index.mjs",
      launcherType: "Nodejs",
      shouldAddHelpers: false,
    },
    null,
    2,
  ),
);

writeFileSync(
  join(output, "config.json"),
  JSON.stringify(
    {
      version: 3,
      routes: [
        // Serve an exact static file (hashed assets, favicons, images, the
        // scroll-scrub clips) when one exists; only requests with no static
        // match (every page route, robots.txt, sitemap.xml) fall through.
        { handle: "filesystem" },
        { src: "/(.*)", dest: "/index" },
      ],
    },
    null,
    2,
  ),
);

console.log(`Vercel Build Output API v3 assembled at ${output}`);
// Sanity: confirm the bundled server never references the Cloudflare-only
// runtime module, which would throw at request time.
const serverSource = readFileSync(join(functionDir, "server.mjs"), "utf8");
if (serverSource.includes("cloudflare:workers")) {
  throw new Error(
    "dist/server/server.js references cloudflare:workers — something now imports " +
      "src/lib/bindings.server.ts. Remove that usage before deploying to Vercel.",
  );
}
