import { Reveal } from "./reveal";

export function About() {
  return (
    <section className="m3d-section" id="o-mne">
      <div className="m3d-section-inner m3d-about">
        <Reveal>
          <div className="m3d-about__media">
            <img alt="Tri 3D tlačiarne bežiace vo večernej dielni" src="/assets/gallery/three-printers.webp" />
          </div>
        </Reveal>
        <Reveal>
          <div className="m3d-about__text">
            <p className="m3d-kicker">O mne</p>
            <p>Som Markey a venujem sa 3D tlači a navrhovaniu vlastných produktov.</p>
            <p>
              Baví ma, keď niekto príde s pokazeným dielom alebo len s nápadom a ja mu z toho
              spravím niečo reálne, čo mu naozaj sadne a funguje. Nemusíš rozumieť tlači ani
              modelovaniu, stačí povedať, čo potrebuješ.
            </p>
            <div className="m3d-about__proof">
              <span className="m3d-about__proof-dot" />
              3 tlačiarne. Reálna výroba.
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
