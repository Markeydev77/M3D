/**
 * Scene data for the scroll-scrub journey.
 *
 * Single-shot: ONE entry in `scenes`, whose `clip` is the single continuous
 * film (a 4s push-in on the printer). Chapter copy is rendered as semantic
 * sections over that one clip; scroll distance per chapter is controlled by
 * `scroll` (viewport-heights), not by clip length.
 */
import { HeroActions } from "@/components/site/hero-actions";
import type {
  ScrollScrubScene,
  ScrollScrubTheme,
} from "@/components/scroll-scrub/scroll-scrub";

export const scrollScrubTheme: ScrollScrubTheme = {
  accent: "#8b5cf6",
  background: "#050505",
  ink: "#f4f2f7",
  muted: "#9a97a3",
};

export const scrollScrubScenes: ScrollScrubScene[] = [
  {
    id: "scene-01",
    label: "Úvod",
    poster: "/assets/world/scene-01-poster.png",
    mobilePoster: "/assets/world/scene-01-mobile-poster.png",
    clip: "/assets/world/scene-01.mp4",
    mobileClip: "/assets/world/scene-01-mobile.mp4",
    kicker: "MARKEY 3D",
    title: "Z nápadu až po tlač.",
    body: "Navrhnem alebo vytlačím produkt presne podľa toho, čo potrebuješ.",
    scroll: 1.4,
    linger: 0.15,
    actions: HeroActions(),
  },
];
