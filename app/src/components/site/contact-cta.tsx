import { Reveal } from "./reveal";

export function ContactCta() {
  return (
    <section className="m3d-section m3d-final" id="kontakt">
      <div className="m3d-final__glow" />
      <div className="m3d-section-inner m3d-final__inner">
        <Reveal>
          <p className="m3d-kicker">Kontakt</p>
        </Reveal>
        <Reveal>
          <h2 className="m3d-final__title">Máš nápad? Poďme ho vytlačiť.</h2>
        </Reveal>
        <Reveal>
          <p className="m3d-final__subtext">Napíš mi na email alebo Instagram.</p>
        </Reveal>
        <Reveal>
          <div className="m3d-final__contacts">
            <a className="m3d-link-gmail" href="mailto:m3d.prints.ofc@gmail.com">
              m3d.prints.ofc@gmail.com
            </a>
            <a
              className="m3d-chip-ig"
              href="https://instagram.com/m.3d.prints"
              rel="noreferrer"
              target="_blank"
            >
              Instagram · @m.3d.prints
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
