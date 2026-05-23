"use client";

import Reveal from "./Reveal";
import Button from "./Button";

export default function PoznajInwestora() {
  return (
    <section className="pi-section">
      <style>{`
        .pi-section {
          background: var(--surface-canvas);
          padding: 160px 48px;
        }
        .pi-inner {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 420px;
          gap: 80px;
          align-items: center;
        }
        .pi-left {
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pi-right {
          background: var(--surface-ink);
          border-radius: var(--radius-lg);
          padding: 52px 48px;
          display: flex;
          flex-direction: column;
          gap: 0;
        }
        .pi-stat {
          padding: 36px 0;
        }
        .pi-stat + .pi-stat {
          border-top: 1px solid rgba(255,255,255,0.1);
        }
        @media (max-width: 1100px) {
          .pi-inner {
            grid-template-columns: 1fr;
            gap: 56px;
          }
          .pi-right {
            flex-direction: row;
            gap: 0;
            padding: 40px 40px;
          }
          .pi-stat {
            flex: 1;
            padding: 0 32px;
          }
          .pi-stat + .pi-stat {
            border-top: none;
            border-left: 1px solid rgba(255,255,255,0.1);
          }
        }
        @media (max-width: 600px) {
          .pi-section {
            padding: 100px 24px;
          }
          .pi-inner {
            gap: 48px;
          }
          .pi-right {
            flex-direction: column;
            padding: 36px 28px;
          }
          .pi-stat {
            padding: 28px 0;
          }
          .pi-stat + .pi-stat {
            border-left: none;
            border-top: 1px solid rgba(255,255,255,0.1);
          }
        }
      `}</style>

      <div className="pi-inner">
        {/* Left: editorial copy */}
        <div className="pi-left">
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brand-oak)",
                marginBottom: 32,
              }}
            >
              Inwestycja lokalnego dewelopera
            </div>
          </Reveal>

          <Reveal delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.4rem, 4vw, 4.2rem)",
                fontWeight: 400,
                lineHeight: 1.08,
                letterSpacing: "-0.025em",
                color: "var(--ink-primary)",
                margin: "0 0 32px",
              }}
            >
              Poznaj{" "}
              <em style={{ fontStyle: "italic", color: "var(--brand-oak)" }}>
                inwestora
              </em>
            </h2>
          </Reveal>

          <Reveal delay={0.12}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.75,
                color: "var(--ink-secondary)",
                margin: "0 0 48px",
                maxWidth: "52ch",
              }}
            >
              Za inwestycją Nowy Relax stoi{" "}
              <strong
                style={{ fontWeight: 500, color: "var(--ink-primary)" }}
              >
                Filipek Investment Sp. z&nbsp;o.o.
              </strong>{" "}
              — lokalny inwestor mieszkaniowy realizujący kameralne inwestycje
              domów i&nbsp;lokali w zabudowie jednorodzinnej.
            </p>
          </Reveal>

          <Reveal delay={0.18}>
            <Button as="a" href="/inwestor" variant="primary" size="lg">
              Poznaj inwestora
            </Button>
          </Reveal>
        </div>

        {/* Right: stats card */}
        <div className="pi-right">
          <Reveal delay={0.1}>
            <div className="pi-stat">
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(4rem, 6vw, 6.4rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                23
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "rgba(250,247,242,0.5)",
                }}
              >
                domy i lokale
                <br />
                <span style={{ color: "var(--brand-sand)" }}>
                  zrealizowane i oddane
                </span>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.18}>
            <div className="pi-stat">
              <div
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(4rem, 6vw, 6.4rem)",
                  fontWeight: 400,
                  lineHeight: 1,
                  letterSpacing: "-0.04em",
                  color: "#FFFFFF",
                  marginBottom: 16,
                }}
              >
                4
              </div>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  lineHeight: 1.5,
                  color: "rgba(250,247,242,0.5)",
                }}
              >
                lokale
                <br />
                <span style={{ color: "var(--brand-sand)" }}>
                  aktualnie w realizacji
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
