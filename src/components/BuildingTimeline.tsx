"use client";

import Reveal from "./Reveal";

const steps = [
  {
    status: "done",
    label: "Pozwolenie na budowę",
    note: "Uzyskane",
    quarter: null,
  },
  {
    status: "done",
    label: "Prace fundamentowe",
    note: "Zakończone",
    quarter: null,
  },
  {
    status: "active",
    label: "Stan surowy otwarty",
    note: "W trakcie",
    quarter: "Q2 2026",
  },
  {
    status: "pending",
    label: "Stan deweloperski+",
    note: null,
    quarter: "Q3 2026",
  },
  {
    status: "pending",
    label: "Odbiory i przekazanie",
    note: null,
    quarter: "Q4 2026",
  },
];

export default function BuildingTimeline() {
  return (
    <section className="bt-section">
      <style>{`
        .bt-section {
          background: #1a1a1a;
          padding: 120px 48px;
        }
        .bt-inner {
          max-width: 1440px;
          margin: 0 auto;
        }
        .bt-header {
          margin-bottom: 72px;
        }
        .bt-track {
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          position: relative;
        }
        .bt-track::before {
          content: "";
          position: absolute;
          top: 14px;
          left: calc(10% + 14px);
          right: calc(10% + 14px);
          height: 1px;
          background: rgba(255,255,255,0.12);
          z-index: 0;
        }
        .bt-step {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 20px;
          padding: 0 16px;
          position: relative;
          z-index: 1;
        }
        .bt-dot-wrap {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 28px;
          height: 28px;
          position: relative;
        }
        .bt-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .bt-dot-done {
          background: #C9A96E;
          border: none;
        }
        .bt-dot-active {
          background: #C9A96E;
          border: none;
        }
        .bt-dot-pending {
          background: transparent;
          border: 1.5px solid rgba(255,255,255,0.25);
        }
        .bt-pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: 50%;
          border: 1.5px solid #C9A96E;
          animation: bt-pulse 2s ease-out infinite;
          opacity: 0;
        }
        @keyframes bt-pulse {
          0%   { transform: scale(1);   opacity: 0.7; }
          100% { transform: scale(2.4); opacity: 0; }
        }
        .bt-text {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 6px;
          text-align: center;
        }
        .bt-step-label {
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          line-height: 1.45;
          color: rgba(255,255,255,0.85);
          max-width: 120px;
        }
        .bt-step-label-muted {
          color: rgba(255,255,255,0.38);
        }
        .bt-step-label-active {
          color: #C9A96E;
        }
        .bt-step-note {
          font-family: var(--font-sans);
          font-size: 11px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
        }
        .bt-step-note-done {
          color: rgba(201,169,110,0.65);
        }
        .bt-step-note-active {
          color: #C9A96E;
        }
        .bt-step-quarter {
          font-family: var(--font-sans);
          font-size: 11px;
          color: rgba(255,255,255,0.3);
          letter-spacing: 0.06em;
        }
        /* Mobile — vertical layout */
        @media (max-width: 768px) {
          .bt-section {
            padding: 88px 24px;
          }
          .bt-track {
            grid-template-columns: 1fr;
            gap: 0;
          }
          .bt-track::before {
            top: calc(14px + 20px);
            left: 13px;
            right: auto;
            bottom: calc(14px + 20px);
            width: 1px;
            height: auto;
          }
          .bt-step {
            flex-direction: row;
            align-items: flex-start;
            gap: 20px;
            padding: 20px 0;
          }
          .bt-step + .bt-step {
            border-top: none;
          }
          .bt-dot-wrap {
            flex-shrink: 0;
            margin-top: 2px;
          }
          .bt-text {
            align-items: flex-start;
            text-align: left;
          }
          .bt-step-label {
            max-width: none;
          }
        }
      `}</style>

      <div className="bt-inner">
        <div className="bt-header">
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 12,
                fontWeight: 500,
                letterSpacing: "0.14em",
                textTransform: "uppercase",
                color: "var(--brand-sand)",
                opacity: 0.7,
                marginBottom: 24,
              }}
            >
              Postęp realizacji
            </div>
          </Reveal>
          <Reveal delay={0.06}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                fontWeight: 400,
                lineHeight: 1.1,
                letterSpacing: "-0.025em",
                color: "#FFFFFF",
                margin: 0,
              }}
            >
              Harmonogram realizacji
            </h2>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <div className="bt-track">
            {steps.map((step, i) => (
              <div key={i} className="bt-step">
                <div className="bt-dot-wrap">
                  <div
                    className={`bt-dot ${
                      step.status === "done"
                        ? "bt-dot-done"
                        : step.status === "active"
                        ? "bt-dot-active"
                        : "bt-dot-pending"
                    }`}
                  />
                  {step.status === "active" && (
                    <div className="bt-pulse-ring" />
                  )}
                </div>

                <div className="bt-text">
                  <div
                    className={`bt-step-label ${
                      step.status === "active"
                        ? "bt-step-label-active"
                        : step.status === "pending"
                        ? "bt-step-label-muted"
                        : ""
                    }`}
                  >
                    {step.label}
                  </div>
                  {step.note && (
                    <div
                      className={`bt-step-note ${
                        step.status === "active"
                          ? "bt-step-note-active"
                          : "bt-step-note-done"
                      }`}
                    >
                      {step.note}
                    </div>
                  )}
                  {step.quarter && (
                    <div className="bt-step-quarter">{step.quarter}</div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
