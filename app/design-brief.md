# Markey 3D — design brief

- **Design read:** a solo maker who does personal-service 3D printing and product design for regular people. Register: quietly confident and technical, not corporate, not flashy.
- **Concept spine:** the site is a workbench under a single work-light — one machine, one hand, one part at a time. Every section reads like a station on that bench.
- **Delivery tier:** cinema — Lenis+GSAP, single-shot scroll-scrub hero, scroll chapters.
- **Locked palette (user's own brand, overrides bans):** near-black ground `#050505` / `#0b0b0d`, matte surfaces `#141417`, hairline borders `#232328`, ink `#f4f2f7`, muted ink `#9a97a3`, accent electric violet `#8b5cf6` used sparingly (thin rim lines, one CTA, hover), secondary deep violet `#4c2f8a` for gradients only. Defense: matches the existing Markey 3D logo mark; kept restrained per explicit "not extreme/overanimated" direction — accent never fills a whole section.
- **Locked type:** `Geist` (display + body) + `Geist Mono` (kicker/meta/tags). Neutral, technical, no serif.
- **Animation mode:** animated-website — single-shot scroll-scrub, 4s film (user-capped), restrained motion (no aggressive parallax, no heavy glow, scroll-driven only).
  - **Journey (4 chapters over the one clip):**
    1. `hero` — wide shot of the enclosed printer alone in the dark. Kicker "MARKEY 3D". Title "Z nápadu až po tlač." Body: one line on the service.
    2. `print` — camera closer on the glass, part forming layer by layer. Title "Máš model? Vytlačíme ho." CTA: Chcem vytlačiť produkt.
    3. `design` — same push continues toward the nozzle detail. Title "Máš nápad? Navrhneme ho." CTA: Chcem navrhnúť produkt.
    4. `result` — closing beauty frame, finished part. Title "Skutočný diel. Nie len render." Proof tag: "3 tlačiarne. Reálna výroba."
  - **Camera architecture:** A (single continuous push-in, no seams — single-shot).
  - **Mobile framing:** center-safe, same clip, mobile encode.
- **Section plan (after the journey):**
  1. Journey (scroll-scrub, hero + 3 chapters as above)
  2. Services — two-card split (3D tlač / 3D návrh + tlač), asymmetric, generated imagery
  3. Ukážky práce — asymmetric dynamic gallery (varied sizes), generated product photography
  4. Fusion 360 / návrh — three-step visual (fyzický diel → model → diel), horizontal flow
  5. O mne — split text/portrait-style layout, personal register, 3 tlačiarne line
  6. Kontakt / final CTA — centered, stronger violet glow, Gmail + Instagram
  - 6 sections total, families used: scroll journey, split-cards, asymmetric gallery, horizontal flow, split text/image, centered CTA — no consecutive repeats, ≥4 families. Eyebrow budget: ceil(6/3) = 2 max.
- **Asset plan:**
  - Hero: single-shot scroll-scrub clip (Kling 3.0, 4s, push-in on printer) + posters, desktop + mobile encode.
  - Content imagery (nano_banana_pro, locked violet-on-black grade): printer wide shot, printed part on real Babetta engine casing, wall-mounted tool bracket, broken part next to calipers, part on build plate, three printers together, decorative printed vessel.
  - CAD/Fusion 360 visual: floating wireframe/solid hybrid render (gpt_image_2).
  - Custom icon set: one 2x2 grid sheet (nozzle, wireframe cube, calipers, layer stack) — sliced into 4 icons.
  - Logo: user-supplied (purple/white M3D mark) — used as-is, no regeneration.
  - OG image: composed from hero still + logo mark, 1200x630.
  - Head kit: favicon + apple-touch-icon + manifest icons derived from the user's logo.
- **CTA inventory:**
  - `Chcem vytlačiť produkt` — primary, filled violet, own hover (brightness lift + 1px lift).
  - `Chcem navrhnúť produkt` — secondary, outline violet, own hover (border glow).
  - `Napísať na Gmail` — text-link style with underline-draw hover, in contact/final CTA only.
  - `Instagram @m.3d.prints` — icon+text chip, own hover (background tint).
- **Contact:** m3d.prints.ofc@gmail.com · Instagram @m.3d.prints. No pricing calculator, no checkout — every path ends in contact.
