import { createFileRoute } from "@tanstack/react-router";

import { About } from "@/components/site/about";
import { ContactCta } from "@/components/site/contact-cta";
import { Footer } from "@/components/site/footer";
import { Gallery } from "@/components/site/gallery";
import { Nav } from "@/components/site/nav";
import { Process } from "@/components/site/process";
import { Services } from "@/components/site/services";
import { ScrollScrub } from "@/components/scroll-scrub/scroll-scrub";
import { scrollScrubScenes, scrollScrubTheme } from "@/scroll-scrub-scenes";

export const Route = createFileRoute("/")({
  component: Index,
});

function Index() {
  return (
    <main className="m3d-root">
      <Nav />
      <ScrollScrub scenes={scrollScrubScenes} theme={scrollScrubTheme} />
      <Services />
      <Gallery />
      <Process />
      <About />
      <ContactCta />
      <Footer />
    </main>
  );
}
