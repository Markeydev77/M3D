import { Reveal } from "./reveal";

export function Services() {
  return (
    <section className="m3d-section" id="sluzby">
      <div className="m3d-section-inner">
        <Reveal>
          <p className="m3d-kicker">Služby</p>
        </Reveal>
        <div className="m3d-services">
          <Reveal>
            <article className="m3d-service-card" id="sluzby-tlac">
              <div className="m3d-service-card__media">
                <img alt="Vytlačený diel priamo na reálnom stroji" src="/assets/gallery/babetta-cover.webp" />
              </div>
              <div className="m3d-service-card__body">
                <p className="m3d-service-card__label">
                  <img
                    alt=""
                    className="m3d-service-card__icon"
                    height={20}
                    src="/assets/icons/icon-nozzle.png"
                    width={20}
                  />
                  Service 01 · 3D tlač
                </p>
                <h3 className="m3d-service-card__title">Máš model? Vytlačíme ho.</h3>
                <p>
                  Pošli mi hotový súbor, dohodneme materiál, farbu a termín, ja vytlačím a
                  doručím hotový diel.
                </p>
                <ol className="m3d-service-steps">
                  <li>Napíš mi na Gmail alebo Instagram</li>
                  <li>Pošli STL súbor</li>
                  <li>Dohodneme detaily a cenu</li>
                </ol>
                <div className="m3d-service-card__foot">
                  <a className="m3d-btn-primary" href="#kontakt">
                    Chcem vytlačiť produkt
                  </a>
                </div>
              </div>
            </article>
          </Reveal>

          <Reveal>
            <article className="m3d-service-card" id="sluzby-navrh">
              <div className="m3d-service-card__media">
                <img alt="Poškodený diel pripravený na zmeranie a návrh" src="/assets/gallery/broken-part.webp" />
              </div>
              <div className="m3d-service-card__body">
                <p className="m3d-service-card__label">
                  <img
                    alt=""
                    className="m3d-service-card__icon"
                    height={20}
                    src="/assets/icons/icon-calipers.png"
                    width={20}
                  />
                  Service 02 · 3D návrh + tlač
                </p>
                <h3 className="m3d-service-card__title">Máš nápad? Navrhneme ho.</h3>
                <p>
                  Napíš, čo potrebuješ vyrobiť a na čo to má slúžiť, ja to navrhnem vo
                  Fusion 360 a vytlačím.
                </p>
                <ol className="m3d-service-steps">
                  <li>Popíš čo potrebuješ</li>
                  <li>Pridaj fotky, ak sú k dispozícii</li>
                  <li>Dohodneme návrh a tlač</li>
                </ol>
                <div className="m3d-service-card__foot">
                  <a className="m3d-btn-secondary" href="#kontakt">
                    Chcem navrhnúť produkt
                  </a>
                </div>
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
