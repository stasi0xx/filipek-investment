"use client";

import Reveal from "./Reveal";

const stats = [
  { number: "122", unit: "m²", label: "powierzchni domu" },
  { number: "590", unit: "m²", label: "powierzchni działki" },
  { number: "3",   unit: "",   label: "sypialnie" },
  { number: "1",   unit: "km", label: "od Białej Podlaskiej" },
];

export default function StatsBar() {
  return (
    <div
      style={{
        background: "var(--surface-ink)",
        padding: "40px 48px",
        display: "grid",
        gridTemplateColumns: "repeat(4, 1fr)",
      }}
    >
      {stats.map((s, i) => (
        <Reveal key={s.label} delay={i * 0.08}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 6,
              padding: "0 40px",
              borderRight:
                i < stats.length - 1
                  ? "1px solid var(--line-dark)"
                  : "none",
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "2.5rem",
                fontWeight: 400,
                color: "var(--brand-sand)",
                lineHeight: 1,
              }}
            >
              {s.number}
              {s.unit && (
                <span style={{ fontSize: "1.1rem", marginLeft: 3 }}>
                  {s.unit}
                </span>
              )}
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: "0.68rem",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--ink-inverse-secondary)",
                fontWeight: 500,
              }}
            >
              {s.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
