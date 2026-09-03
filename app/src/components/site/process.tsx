import { Reveal } from "./reveal";

const STEPS = [
  {
    title: "Fyzický diel alebo nápad",
    body: "Pošleš mi poškodený diel, fotku alebo len opíšeš, čo potrebuješ vyrobiť.",
  },
  {
    title: "Model vo Fusion 360",
    body: "Presne zmeriam a vymodelujem tvoj diel tak, aby sadol na milimeter.",
  },
  {
    title: "Vytlačený diel",
    body: "Model vytlačím na jednej z mojich tlačiarní a doručím hotový výsledok.",
  },
] as const;

export function Process() {
  return (
    <section className="m3d-section" id="navrh">
      <div className="m3d-section-inner m3d-process">
        <Reveal>
          <div className="m3d-process__media">
            <img alt="Digitálny model dielu vo Fusion 360" src="/assets/gallery/cad-fusion.webp" />
          </div>
        </Reveal>
        <div>
          <p className="m3d-kicker">
            <img
              alt=""
              className="m3d-kicker__icon"
              height={16}
              src="/assets/icons/icon-wireframe.png"
              width={16}
            />
            Návrh na mieru
          </p>
          <div className="m3d-process__steps">
            {STEPS.map((step, index) => (
              <Reveal key={step.title}>
                <div className="m3d-process__step">
                  <span className="m3d-process__step-index">0{index + 1}</span>
                  <div>
                    <h3>{step.title}</h3>
                    <p>{step.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
          <div className="m3d-process__badge">
            <img alt="" height={22} src="/assets/icons/icon-layers.png" width={22} />
            <span>Vrstva po vrstve, presne podľa modelu.</span>
          </div>
        </div>
      </div>
    </section>
  );
}
