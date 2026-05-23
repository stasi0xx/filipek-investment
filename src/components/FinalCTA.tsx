"use client";

import Reveal from "./Reveal";
import Button from "./Button";

export default function FinalCTA() {
  return (
    <section className="fcta-section">
      <style>{`
        .fcta-section {
          background: var(--surface-ink);
          padding: 160px 48px;
          text-align: center;
          position: relative;
          overflow: hidden;
        }
        .fcta-bg {
          position: absolute;
          inset: 0;
          background-image: url(/assets/render-ciemny-front-burza-noc.jpeg);
          background-size: cover;
          background-position: center 60%;
          opacity: 0.5;
        }
        .fcta-inner {
          position: relative;
          z-index: 1;
          max-width: 780px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          align-items: center;
        }
        .fcta-rule {
          width: 1px;
          height: 56px;
          background: linear-gradient(to bottom, transparent, rgba(201,184,150,0.4), transparent);
          margin: 0 auto 52px;
        }
        .fcta-actions {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 16px;
          flex-wrap: wrap;
        }
        @media (max-width: 600px) {
          .fcta-section {
            padding: 100px 24px;
          }
          .fcta-actions {
            flex-direction: column;
            width: 100%;
          }
          .fcta-actions > * {
            width: 100%;
            justify-content: center;
          }
        }
      `}</style>

      <div className="fcta-bg" />

      <div className="fcta-inner">
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              opacity: 0.6,
              marginBottom: 36,
            }}
          >
            Etap 1 · 4 domy dostępne
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.8rem, 6vw, 5.6rem)",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#FAF7F2",
              margin: "0 0 32px",
            }}
          >
            Szukasz domu{" "}
            <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
              pod Białą Podlaską?
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="fcta-rule" />
        </Reveal>

        <Reveal delay={0.18}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.75,
              color: "rgba(250,247,242,0.8)",
              maxWidth: "48ch",
              margin: "0 0 52px",
            }}
          >
            Zapytaj o dostępność domów w Etapie 1 inwestycji Nowy Relax.
            Odpowiemy na pytania dotyczące układu domu, standardu,
            rezerwacji, finansowania i planowanego terminu realizacji.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <div className="fcta-actions">
            <Button as="a" href="/kontakt" variant="primary-inverse" size="lg">
              Zapytaj o dostępność domu
            </Button>
            <Button as="a" href="/kontakt" variant="outline-inverse" size="lg">
              Umów prezentację inwestycji
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
