"use client";

import Reveal from "./Reveal";

const advantages = [
  {
    title: "1 km od Białej Podlaskiej",
    desc: "Granica miasta w zasięgu krótkiego spaceru",
  },
  {
    title: "Węzeł Cicibór — autostrada A2",
    desc: "Doskonały dostęp do trasy ekspresowej",
  },
  {
    title: "Cicha, zielona okolica",
    desc: "Osiedle z dala od miejskiego hałasu",
  },
  {
    title: "Pełna infrastruktura w pobliżu",
    desc: "Sklepy, szkoły, przedszkola, usługi",
  },
];

export default function Lokalizacja() {
  return (
    <section
      id="lokalizacja"
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        background: "var(--surface-canvas)",
        minHeight: "80vh",
      }}
    >
      {/* Content */}
      <div style={{ padding: "120px 48px" }}>
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
            Lokalizacja
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.5rem, 4vw, 3.8rem)",
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              fontWeight: 400,
              color: "var(--ink-primary)",
              marginBottom: 32,
            }}
          >
            Dosłownie<br />
            <em style={{ fontStyle: "italic" }}>&bdquo;pod miastem&rdquo;</em>
          </h2>
        </Reveal>

        <Reveal delay={0.15}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.65,
              color: "var(--ink-secondary)",
              maxWidth: "44ch",
              marginBottom: 48,
            }}
          >
            Cicibór Duży — miejsce, które mieszkańcy nazywają „Relaksem". Spokój natury przy doskonałej komunikacji z miastem i autostradą A2.
          </p>
        </Reveal>

        {advantages.map((a, i) => (
          <Reveal key={a.title} delay={0.1 * (i + 1)}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "20px 0",
                borderBottom: "1px solid var(--line-hair)",
                borderTop: i === 0 ? "1px solid var(--line-hair)" : "none",
              }}
            >
              <h4
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 15,
                  fontWeight: 600,
                  color: "var(--ink-primary)",
                  marginBottom: 4,
                }}
              >
                {a.title}
              </h4>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--ink-tertiary)",
                }}
              >
                {a.desc}
              </p>
            </div>
          </Reveal>
        ))}
      </div>

      {/* Map */}
      <div style={{ position: "relative", minHeight: 600 }}>
        <iframe
          src="https://www.openstreetmap.org/export/embed.html?bbox=23.03%2C51.99%2C23.14%2C52.05&layer=mapnik&marker=52.025%2C23.095"
          title="Lokalizacja Nowy Relax — Cicibór Duży"
          style={{
            width: "100%",
            height: "100%",
            border: "none",
            filter: "sepia(15%) contrast(1.05) brightness(0.97)",
          }}
          allowFullScreen
        />
        <div
          style={{
            position: "absolute",
            bottom: 32,
            left: 32,
            background: "var(--surface-ink)",
            color: "var(--ink-inverse)",
            padding: "12px 22px",
            borderRadius: "var(--radius-pill)",
            fontFamily: "var(--font-sans)",
            fontSize: "0.72rem",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          Cicibór Duży, Biała Podlaska
        </div>
      </div>
    </section>
  );
}
