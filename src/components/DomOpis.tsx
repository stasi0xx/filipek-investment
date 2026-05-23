"use client";

import Reveal from "./Reveal";
import Button from "./Button";

const pillars = [
  {
    n: "01",
    title: "Parter",
    body: "Przestronna część dzienna otwarta na ogród, praktyczna spiżarka i garaż bezpośrednio w bryle budynku — wszystko pod ręką bez zbędnych kroków.",
  },
  {
    n: "02",
    title: "Pierwsze piętro",
    body: "Prywatna strefa sypialni oddzielona od dziennej — spokój i cisza wtedy, gdy tego potrzebujesz. Dodatkowa przestrzeń strychowa na rzeczy sezonowe.",
  },
  {
    n: "03",
    title: "Na zewnątrz",
    body: "Działka ok. 450 m² tylko do Twojej dyspozycji. Własny ogród, własne podwórko — bez wspólnych klatek i sąsiadów za ścianą.",
  },
];

export default function DomOpis() {
  return (
    <section className="domopis-section" style={{ background: "var(--surface-ink)", padding: "160px 48px" }}>
      <style>{`
        .domopis-inner {
          max-width: 1440px;
          margin: 0 auto;
        }
        .domopis-header {
          text-align: center;
          max-width: 760px;
          margin: 0 auto 80px;
        }
        .domopis-pillars {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 1px;
          background: var(--line-dark);
          border-top: 1px solid var(--line-dark);
          border-bottom: 1px solid var(--line-dark);
          margin-bottom: 80px;
        }
        .domopis-pillar {
          background: var(--surface-ink);
          padding: 48px 40px;
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        .domopis-footer {
          text-align: center;
          max-width: 640px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 40px;
        }
        @media (max-width: 900px) {
          .domopis-pillars {
            grid-template-columns: 1fr;
          }
        }
        @media (max-width: 600px) {
          .domopis-section {
            padding: 100px 24px;
          }
          .domopis-header {
            margin-bottom: 56px;
          }
          .domopis-pillar {
            padding: 40px 24px;
          }
          .domopis-footer {
            gap: 32px;
          }
        }
      `}</style>

      <div className="domopis-inner">
        {/* Header */}
        <div className="domopis-header">
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brand-sand)",
                marginBottom: 28,
              }}
            >
              Układ i przestrzeń
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "var(--ink-inverse)",
                margin: 0,
                marginBottom: 28,
              }}
            >
              Dom, który dobrze działa na co dzień
            </h2>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.7,
                color: "var(--ink-inverse-secondary)",
                margin: 0,
              }}
            >
              Nowy Relax obejmuje docelowo 8 domów w zabudowie bliźniaczej.
              Etap 1 to 4 domy w dwóch budynkach bliźniaczych — każdy o
              powierzchni 121,87 m² z garażem i własną działką.
            </p>
          </Reveal>
        </div>

        {/* 3 pillars */}
        <div className="domopis-pillars">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <div className="domopis-pillar">
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "2.8rem",
                    fontWeight: 400,
                    lineHeight: 1,
                    color: "rgba(255,255,255,0.8)",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {p.n}
                </span>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 600,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                  }}
                >
                  {p.title}
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--ink-inverse-secondary)",
                    margin: 0,
                  }}
                >
                  {p.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Closing + CTA */}
        <div className="domopis-footer">
          <Reveal>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.75,
                color: "var(--ink-inverse-secondary)",
                margin: 0,
                textAlign: "center",
              }}
            >
              To propozycja dla osób, które szukają czegoś więcej niż
              mieszkania — własnego ogrodu, większej prywatności i spokojniejszego
              rytmu dnia, bez rezygnowania z bliskości miasta.
            </p>
          </Reveal>
          <Reveal delay={0.08}>
            <Button as="a" href="#kontakt" variant="primary-inverse" size="lg">
              Poznaj szczegóły oferty
            </Button>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
