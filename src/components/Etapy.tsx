"use client";

import { useState } from "react";
import Reveal from "./Reveal";

type Status = "available" | "reserved" | "sold";

const lots: { n: string; s: Status }[] = [
  { n: "A1", s: "sold" },      { n: "A2", s: "sold" },
  { n: "A3", s: "reserved" },  { n: "A4", s: "available" },
  { n: "B1", s: "sold" },      { n: "B2", s: "reserved" },
  { n: "B3", s: "available" }, { n: "B4", s: "available" },
  { n: "C1", s: "reserved" },  { n: "C2", s: "available" },
  { n: "C3", s: "available" }, { n: "C4", s: "available" },
];

const status: Record<Status, { bg: string; fg: string; dot: string; label: string }> = {
  available: { bg: "#FFFFFF",  fg: "var(--ink-primary)", dot: "var(--brand-moss)", label: "Dostępny" },
  reserved:  { bg: "#F6E4D0",  fg: "var(--warn)",        dot: "var(--warn)",       label: "Rezerwacja" },
  sold:      { bg: "var(--line-soft)", fg: "var(--ink-secondary)", dot: "var(--ink-tertiary)", label: "Sprzedany" },
};

export default function Etapy() {
  const [selected, setSelected] = useState<string | null>(null);

  return (
    <section
      id="etapy"
      style={{ padding: "160px 48px", background: "var(--surface-canvas)" }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            marginBottom: 72,
            flexWrap: "wrap",
            gap: 32,
          }}
        >
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
                  marginBottom: 20,
                }}
              >
                Dostępność
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
                }}
              >
                12 domów,<br />7 jeszcze czeka.
              </h2>
            </Reveal>
          </div>

          {/* Legend */}
          <Reveal delay={0.15}>
            <div
              style={{
                display: "flex",
                gap: 24,
                fontFamily: "var(--font-sans)",
                fontSize: 13,
                color: "var(--ink-secondary)",
              }}
            >
              {(Object.entries(status) as [Status, typeof status[Status]][]).map(
                ([k, v]) => (
                  <span
                    key={k}
                    style={{ display: "flex", alignItems: "center", gap: 8 }}
                  >
                    <span
                      style={{
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: v.dot,
                        flexShrink: 0,
                      }}
                    />
                    {v.label}
                  </span>
                )
              )}
            </div>
          </Reveal>
        </div>

        {/* Grid */}
        <Reveal delay={0.2}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(4, 1fr)",
              gap: 16,
            }}
          >
            {lots.map((lot) => {
              const st = status[lot.s];
              const isSelected = selected === lot.n;
              const clickable = lot.s === "available";

              return (
                <button
                  key={lot.n}
                  onClick={() => clickable && setSelected(lot.n === selected ? null : lot.n)}
                  disabled={!clickable}
                  style={{
                    aspectRatio: "1/1",
                    background: st.bg,
                    border: isSelected
                      ? "2px solid var(--ink-primary)"
                      : "1px solid var(--line-hair)",
                    borderRadius: "var(--radius-lg)",
                    padding: 24,
                    cursor: clickable ? "pointer" : "default",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between",
                    alignItems: "flex-start",
                    textAlign: "left",
                    transition: "all var(--dur-base)",
                    opacity: lot.s === "sold" ? 0.75 : 1,
                    fontFamily: "var(--font-sans)",
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 44,
                      color: st.fg,
                      fontWeight: 400,
                      lineHeight: 1,
                    }}
                  >
                    {lot.n}
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 6,
                      width: "100%",
                    }}
                  >
                    <div
                      style={{
                        fontSize: 12,
                        color: st.fg,
                        display: "flex",
                        alignItems: "center",
                        gap: 6,
                      }}
                    >
                      <span
                        style={{
                          width: 6,
                          height: 6,
                          borderRadius: "50%",
                          background: st.dot,
                          flexShrink: 0,
                        }}
                      />
                      {st.label}
                    </div>
                    {clickable && (
                      <div
                        style={{
                          fontFamily: "var(--font-mono)",
                          fontSize: 13,
                          color: "var(--ink-primary)",
                        }}
                      >
                        122 m² · 590 m²
                      </div>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </Reveal>

        {/* Selected panel */}
        {selected && (
          <div
            style={{
              marginTop: 32,
              padding: "24px 32px",
              background: "var(--surface-ink)",
              color: "var(--ink-inverse)",
              borderRadius: "var(--radius-lg)",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              flexWrap: "wrap",
              gap: 16,
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 11,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  opacity: 0.6,
                  marginBottom: 6,
                }}
              >
                Zaznaczony dom
              </div>
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: 28,
                }}
              >
                Dom {selected} · 122 m²
              </div>
            </div>
            <a
              href="#kontakt"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                background: "var(--ink-inverse)",
                color: "var(--ink-primary)",
                padding: "14px 28px",
                borderRadius: "var(--radius-pill)",
                textDecoration: "none",
                transition: "opacity var(--dur-base)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "0.88")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.opacity = "1")
              }
            >
              Zarezerwuj prezentację
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
