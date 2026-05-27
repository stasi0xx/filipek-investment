"use client";

import Reveal from "./Reveal";

export default function About() {
  return (
    <section
      id="about"
      className="about-stats-section"
      style={{ background: "var(--surface-canvas)" }}
    >
      <style>{`
        .about-stats-section {
          padding: 160px 48px;
        }
        .about-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 14px;
        }
        .about-stats-wide {
          grid-column: span 2;
        }
        @media (max-width: 900px) {
          .about-stats-grid {
            grid-template-columns: repeat(2, 1fr);
          }
          .about-stats-wide {
            grid-column: span 2;
          }
        }
        @media (max-width: 540px) {
          .about-stats-section {
            padding: 80px 20px;
          }
          .about-stats-grid {
            grid-template-columns: 1fr 1fr;
            gap: 10px;
          }
          .about-stats-wide {
            grid-column: span 2;
          }
        }
      `}</style>

      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-oak)",
              marginBottom: 40,
            }}
          >
            Najważniejsze informacje
          </div>
        </Reveal>

        <div className="about-stats-grid">
          {/* Row 1 — 4 equal cards */}
          <Reveal delay={0}>
            <StatCard value="121,87 m²" label="powierzchnia domu" />
          </Reveal>
          <Reveal delay={0.07}>
            <StatCard value="ok. 450 m²" label="działka przy domu" />
          </Reveal>
          <Reveal delay={0.14}>
            <StatCard value="4 domy" label="dostępne w Etapie 1" />
          </Reveal>
          <Reveal delay={0.21}>
            <StatCard value="garaż" label="w bryle budynku" sub="w każdym domu" />
          </Reveal>

          {/* Row 2 — wide price card + 2 */}
          <div className="about-stats-wide">
            <Reveal delay={0.28}>
              <StatCard
                value="650 000 zł"
                label="cena domu w Etapie 1"
                sub="brutto"
                fill
              />
            </Reveal>
          </div>
          <Reveal delay={0.35}>
            <StatCard
              value="0 zł PCC"
              label="oszczędność ok. 13 000 zł"
              sub="względem zakupu z rynku wtórnego"
              dark
            />
          </Reveal>
          <Reveal delay={0.42}>
            <StatCard value="czerwiec 2027" label="planowane zakończenie robót" />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function StatCard({
  value,
  label,
  sub,
  dark,
  fill,
}: {
  value: string;
  label: string;
  sub?: string;
  dark?: boolean;
  fill?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "var(--surface-ink)" : "#FFFFFF",
        border: dark ? "none" : "1px solid rgba(15,15,13,0.09)",
        borderRadius: "var(--radius-lg)",
        padding: fill ? "52px 48px" : "44px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 14,
        minHeight: 200,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: fill
            ? "clamp(2.4rem, 3.5vw, 4rem)"
            : "clamp(1.8rem, 2.4vw, 3rem)",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          fontWeight: 400,
          color: dark ? "#FFFFFF" : "var(--ink-primary)",
        }}
      >
        {value}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.5,
            color: dark ? "rgba(255,255,255,0.55)" : "var(--ink-secondary)",
          }}
        >
          {label}
        </div>
        {sub && (
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              marginTop: 4,
              color: dark ? "rgba(255,255,255,0.35)" : "var(--brand-oak)",
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}
