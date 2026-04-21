"use client";

import Reveal from "./Reveal";
import Image from "next/image";

const specs = [
  ["Powierzchnia", "122 m²"],
  ["Działka",      "590 m²"],
  ["Sypialnie",    "3"],
  ["Łazienki",     "2"],
  ["Garaż",        "2-stan."],
  ["Piętra",       "2"],
];

export default function Dom() {
  return (
    <section
      id="dom"
      style={{ padding: "clamp(60px, 10vw, 160px) clamp(24px, 6vw, 48px)", background: "var(--surface-warm)" }}
    >
      <style>{`
        .dom-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1.1fr 1fr;
          gap: 96px;
          align-items: center;
        }
        @media (max-width: 768px) {
          .dom-inner {
            grid-template-columns: 1fr;
            gap: 48px;
          }
        }
      `}</style>
      <div className="dom-inner">
        {/* Copy */}
        <div>
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
              Dopracowany każdy m²
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                color: "var(--ink-primary)",
                marginBottom: 32,
              }}
            >
              122 m² dla<br />Twojej rodziny.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 18,
                lineHeight: 1.6,
                color: "var(--ink-primary)",
                maxWidth: "48ch",
                marginBottom: 20,
              }}
            >
              Otwarta kuchnia z miejscem na wyspę oraz doświetlona ogromnymi przeszkleniami część dzienna. Do tego 3 sypialnie na piętrze — jedna z prywatną łazienką i garderobą.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.65,
                color: "var(--ink-secondary)",
                maxWidth: "48ch",
              }}
            >
              Garaż o ponadprzeciętnej szerokości i spiżarnia na słoiczki od rodziców —{" "}
              <em
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                  color: "var(--ink-primary)",
                }}
              >
                gamechanger
              </em>
              .
            </p>
          </Reveal>

          {/* Spec grid */}
          <Reveal delay={0.25}>
            <div
              style={{
                marginTop: 48,
                display: "grid",
                gridTemplateColumns: "1fr 1fr 1fr",
                gap: 0,
                borderTop: "1px solid rgba(26,26,23,0.15)",
              }}
            >
              {specs.map(([k, v], i) => (
                <div
                  key={k}
                  style={{
                    padding: "20px 0",
                    borderBottom:
                      i < 3 ? "1px solid rgba(26,26,23,0.15)" : "none",
                    borderRight:
                      i % 3 < 2 ? "1px solid rgba(26,26,23,0.15)" : "none",
                    paddingRight: i % 3 < 2 ? 24 : 0,
                    paddingLeft: i % 3 > 0 ? 24 : 0,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      letterSpacing: "0.12em",
                      textTransform: "uppercase",
                      color: "var(--ink-tertiary)",
                      marginBottom: 6,
                    }}
                  >
                    {k}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-mono)",
                      fontSize: 20,
                      color: "var(--ink-primary)",
                      fontWeight: 500,
                    }}
                  >
                    {v}
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Floor plan */}
        <Reveal delay={0.1}>
          <div
            style={{
              borderRadius: "var(--radius-lg)",
              overflow: "hidden",
              background: "var(--surface-raised)",
              aspectRatio: "4/5",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              src="/assets/floor-plan.png"
              alt="Rzut domu Nowy Relax"
              width={600}
              height={750}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                padding: "40px",
              }}
            />
          </div>
        </Reveal>
      </div>
    </section>
  );
}
