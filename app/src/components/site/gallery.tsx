import { Reveal } from "./reveal";

const ITEMS = [
  {
    src: "/assets/gallery/wall-bracket.webp",
    alt: "Držiak na náradie namontovaný na stene dielne",
    caption: "Držiak na náradie na mieru",
    variant: "wide",
  },
  {
    src: "/assets/gallery/fresh-part.webp",
    alt: "Čerstvo vytlačený diel na podložke tlačiarne",
    caption: "Náhradný diel priamo z tlačiarne",
    variant: "tall",
  },
  {
    src: "/assets/gallery/decor-vessel.webp",
    alt: "Dekoratívna vytlačená váza na poličke",
    caption: "Dekorácia podľa vlastného návrhu",
    variant: "normal",
  },
  {
    src: "/assets/gallery/hero-wide.webp",
    alt: "Enclosed 3D tlačiareň v tmavej dielni",
    caption: "Vlastná dielňa, reálna výroba",
    variant: "normal",
  },
] as const;

export function Gallery() {
  return (
    <section className="m3d-section" id="ukazky">
      <div className="m3d-section-inner">
        <Reveal>
          <p className="m3d-kicker">Ukážky práce</p>
        </Reveal>
        <div className="m3d-gallery">
          {ITEMS.map((item) => (
            <Reveal className={`m3d-gallery__item m3d-gallery__item--${item.variant}`} key={item.src}>
              <img alt={item.alt} loading="lazy" src={item.src} />
              <span className="m3d-gallery__caption">{item.caption}</span>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
