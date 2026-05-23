"use client";

import Reveal from "./Reveal";

const reasons = [
  {
    n: "01",
    img: "/assets/render-jasny-front-dzien.jpeg",
    title: "Blisko miasta, spokojniej na co dzień",
    body: "Cicibór Duży daje szybki dostęp do Białej Podlaskiej, a jednocześnie pozwala mieszkać w spokojniejszym, podmiejskim otoczeniu. To dobre rozwiązanie dla osób, które chcą mieć miasto blisko, ale niekoniecznie za oknem.",
  },
  {
    n: "02",
    img: "/assets/floor-plans.jpg",
    title: "Przemyślany układ domu",
    body: "Na parterze: salon z jadalnią, kuchnia, łazienka, spiżarka, przedsionek i garaż. Na piętrze: trzy pokoje, dwie łazienki i garderoba przy głównej sypialni — prywatna strefa oddzielona od dziennej.",
  },
  {
    n: "03",
    img: "/assets/render-jasny-ogrod-zloty.jpeg",
    title: "Standard deweloperski+",
    body: "Domy oddawane z pompą ciepła, rekuperacją, ogrzewaniem podłogowym, instalacjami, elewacją, ogrodzeniem, podjazdem, tarasem i uporządkowanym terenem wokół budynku.",
  },
  {
    n: "04",
    img: "/assets/render-ciemny-front-prawy-zloty.jpeg",
    title: "Mniej kosztów na starcie",
    body: "Kupując dom od dewelopera, nie płacisz podatku PCC. Przy cenie 630 000 zł oznacza to oszczędność ok. 12 600 zł w porównaniu z zakupem nieruchomości z rynku wtórnego.",
  },
];

export default function DlaczegoNowyRelax() {
  return (
    <section
      className="dlaczego-section"
      style={{ background: "var(--surface-canvas)", padding: "160px 48px" }}
    >
      <style>{`
        .dlaczego-inner {
          max-width: 1440px;
          margin: 0 auto;
        }
        .dlaczego-header {
          max-width: 720px;
          margin: 0 auto 80px;
          text-align: center;
        }
        .dlaczego-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 20px;
        }
        .dlaczego-card {
          background: #fff;
          border: 1px solid rgba(15,15,13,0.09);
          border-radius: var(--radius-lg);
          overflow: hidden;
          display: flex;
          flex-direction: column;
        }
        .dlaczego-card-img {
          width: 100%;
          aspect-ratio: 16 / 9;
          background-size: cover;
          background-position: center;
          flex-shrink: 0;
          transition: transform 0.55s ease;
        }
        .dlaczego-card:hover .dlaczego-card-img {
          transform: scale(1.04);
        }
        .dlaczego-card-img-wrap {
          overflow: hidden;
          flex-shrink: 0;
        }
        .dlaczego-card-body {
          padding: 36px 36px 40px;
          display: flex;
          flex-direction: column;
          gap: 14px;
        }
        @media (max-width: 900px) {
          .dlaczego-grid {
            grid-template-columns: 1fr;
            gap: 16px;
          }
        }
        @media (max-width: 600px) {
          .dlaczego-section {
            padding: 100px 20px;
          }
          .dlaczego-header {
            margin-bottom: 56px;
          }
          .dlaczego-card-body {
            padding: 28px 24px 32px;
          }
        }
      `}</style>

      <div className="dlaczego-inner">
        <div className="dlaczego-header">
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brand-oak)",
                marginBottom: 24,
              }}
            >
              Dlaczego Nowy Relax?
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                fontWeight: 400,
                lineHeight: 1.12,
                letterSpacing: "-0.02em",
                color: "var(--ink-primary)",
                margin: "0 0 24px",
              }}
            >
              Cztery argumenty, które robią różnicę
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-secondary)",
                margin: 0,
              }}
            >
              Nowy Relax to nie tylko adres — to przemyślana odpowiedź na
              potrzeby osób, które cenią spokój, komfort i niezależność,
              bez rezygnowania z bliskości miasta.
            </p>
          </Reveal>
        </div>

        <div className="dlaczego-grid">
          {reasons.map((r, i) => (
            <Reveal key={r.n} delay={i * 0.08}>
              <div className="dlaczego-card">
                <div className="dlaczego-card-img-wrap">
                  <div
                    className="dlaczego-card-img"
                    style={{ backgroundImage: `url(${r.img})` }}
                    role="img"
                    aria-label={r.title}
                  />
                </div>
                <div className="dlaczego-card-body">
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "2rem",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.03em",
                      color: "var(--brand-oak)",
                    }}
                  >
                    {r.n}
                  </span>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--ink-primary)",
                    }}
                  >
                    {r.title}
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink-secondary)",
                      margin: 0,
                    }}
                  >
                    {r.body}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
