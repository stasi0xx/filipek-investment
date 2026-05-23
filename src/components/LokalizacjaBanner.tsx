"use client";

import Reveal from "./Reveal";

export default function LokalizacjaBanner() {
  return (
    <section className="lok-banner-section">
      <style>{`
        .lok-banner-section {
          position: relative;
          background-color: var(--surface-ink);
          background-image: url(/assets/facade-grey.jpeg);
          background-size: cover;
          background-position: center 30%;
          background-attachment: fixed;
          padding: 160px 48px;
          text-align: center;
        }
        .lok-banner-bg {
          position: absolute;
          inset: 0;
          background: var(--surface-ink);
          opacity: 0.86;
        }
        .lok-banner-inner {
          position: relative;
          z-index: 1;
          max-width: 860px;
          margin: 0 auto;
        }
        .lok-banner-cta {
          display: inline-block;
          padding: 17px 40px;
          border-radius: 999px;
          background: var(--brand-oak);
          color: #FAF7F2;
          font-family: var(--font-sans);
          font-size: 13px;
          font-weight: 500;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          text-decoration: none;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .lok-banner-cta:hover {
          background: #7a5d38;
          transform: translateY(-2px);
        }
        .lok-banner-rule {
          width: 40px;
          height: 1px;
          background: var(--brand-sand);
          margin: 0 auto 36px;
          opacity: 0.5;
        }
        @media (max-width: 600px) {
          .lok-banner-section {
            padding: 100px 24px;
            background-attachment: scroll;
          }
        }
      `}</style>

      <div className="lok-banner-bg" />

      <div className="lok-banner-inner">
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              opacity: 0.7,
              marginBottom: 28,
            }}
          >
            Lokalizacja
          </div>
        </Reveal>

        <Reveal delay={0.07}>
          <h2
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(2.6rem, 5.5vw, 5.4rem)",
              fontWeight: 400,
              lineHeight: 1.06,
              letterSpacing: "-0.03em",
              color: "#FAF7F2",
              margin: "0 0 28px",
            }}
          >
            Cicibór Duży,{" "}
            <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
              ok. 1 km od&nbsp;Białej Podlaskiej
            </em>
          </h2>
        </Reveal>

        <Reveal delay={0.13}>
          <div className="lok-banner-rule" />
        </Reveal>

        <Reveal delay={0.18}>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 17,
              lineHeight: 1.7,
              color: "rgba(250,247,242,0.58)",
              maxWidth: "50ch",
              margin: "0 auto 52px",
            }}
          >
            To lokalizacja dla osób, które chcą mieć blisko do miasta, ale na
            co dzień korzystać z większej przestrzeni, własnego ogrodu
            i&nbsp;spokojniejszego otoczenia.
          </p>
        </Reveal>

        <Reveal delay={0.24}>
          <a href="/lokalizacja" className="lok-banner-cta">
            Zobacz lokalizację
          </a>
        </Reveal>
      </div>
    </section>
  );
}
