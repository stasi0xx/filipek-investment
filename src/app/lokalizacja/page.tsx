"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Cursor from "@/components/Cursor";

// ─── Data ─────────────────────────────────────────────────────────────────────

const advantages = [
  {
    n: "01",
    title: "ok. 1 km od granicy Białej Podlaskiej",
    body: "Szybki dostęp do miejskiej infrastruktury — sklepów, szkół, przychodni i usług. Biała Podlaska z całym swoim zapleczem jest dosłownie za rogiem.",
  },
  {
    n: "02",
    title: "Cicibór Duży — podmiejska lokalizacja",
    body: "Spokojniejsza, zieleńsza i z większą przestrzenią niż w centrum. Lokalizacja dla osób, które chcą mieszkać bez miejskiego tempa, nie rezygnując z bliskości miasta.",
  },
  {
    n: "03",
    title: "Bliskość węzła Cicibór",
    body: "Wygodny wyjazd w dalsze trasy. Autostrada A2 zapewnia szybkie połączenie z Warszawą, Lublinem i resztą kraju.",
  },
  {
    n: "04",
    title: "Własna działka przy domu",
    body: "Ok. 450 m² gruntu wyłącznie do dyspozycji właściciela. Ogród, taras, podjazd — bez wspólnych przestrzeni i sąsiadów za ścianą.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function LokalizacjaPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="lok-hero-section"
          style={{
            position: "relative",
            background: "var(--surface-ink)",
            minHeight: "100vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: 96,
            overflow: "hidden",
          }}
        >
          <style>{`
            .lok-hero-inner {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              padding: 0 48px;
              display: flex;
              align-items: flex-end;
              justify-content: space-between;
              gap: 48px;
              flex-wrap: wrap;
            }
            @media (max-width: 900px) {
              .lok-hero-section { padding-top: 88px; }
              .lok-hero-inner {
                padding: 0 24px;
                flex-direction: column;
                align-items: stretch;
              }
            }
            @media (max-width: 600px) {
              .lok-hero-section { padding-top: 80px; }
              .lok-hero-inner { padding: 0 20px; gap: 28px; }
              .lok-badge-card { padding: 28px 24px !important; min-width: 0 !important; }
            }
          `}</style>

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/facade-grey.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 35%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,19,15,0.94) 0%, rgba(20,19,15,0.42) 50%, rgba(20,19,15,0.58) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(20,19,15,0.85) 0%, rgba(20,19,15,0.28) 55%, transparent 100%)",
            }}
          />

          <div className="lok-hero-inner">
            {/* Left */}
            <div style={{ maxWidth: 620 }}>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.18em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    opacity: 0.7,
                    marginBottom: 28,
                  }}
                >
                  Nowy Relax · Cicibór Duży · woj. lubelskie
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(4rem, 9vw, 8.5rem)",
                    fontWeight: 400,
                    lineHeight: 0.95,
                    letterSpacing: "-0.03em",
                    color: "var(--ink-inverse)",
                    margin: "0 0 40px",
                  }}
                >
                  Lokalizacja
                </h1>
              </Reveal>
              <Reveal delay={0.12}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: "clamp(15px, 1.3vw, 17px)",
                    lineHeight: 1.75,
                    color: "rgba(250,247,242,0.72)",
                    maxWidth: "46ch",
                    margin: "0 0 44px",
                  }}
                >
                  Nowy Relax powstaje w Ciciborze Dużym, zaledwie ok. 1 km od
                  granicy Białej Podlaskiej. Lokalizacja dla osób, które chcą
                  mieć szybki dostęp do miasta, ale na co dzień mieszkać
                  spokojniej — z własnym ogrodem, garażem i większą przestrzenią.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button as="a" href="/#kontakt" variant="primary-inverse" size="lg">
                    Umów prezentację inwestycji
                  </Button>
                  <Button as="a" href="#mapa" variant="outline-inverse" size="lg">
                    Zobacz na mapie
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right — location badge */}
            <Reveal delay={0.22}>
              <div
                className="lok-badge-card"
                style={{
                  background: "rgba(250,247,242,0.07)",
                  backdropFilter: "blur(24px) saturate(130%)",
                  WebkitBackdropFilter: "blur(24px) saturate(130%)",
                  border: "1px solid rgba(250,247,242,0.13)",
                  borderRadius: "var(--radius-xl)",
                  padding: "44px 48px",
                  minWidth: 260,
                  display: "flex",
                  flexDirection: "column",
                  gap: 28,
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 500,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--brand-sand)",
                      marginBottom: 12,
                    }}
                  >
                    Odległości od inwestycji
                  </div>
                  {(
                    [
                      ["ok. 1 km", "do granicy Białej Podlaskiej"],
                      ["kilka km", "do węzła autostradowego Cicibór"],
                      ["ok. 170 km", "do Warszawy (A2)"],
                    ] as [string, string][]
                  ).map(([val, lab]) => (
                    <div
                      key={val}
                      style={{
                        display: "flex",
                        alignItems: "baseline",
                        gap: 10,
                        padding: "11px 0",
                        borderBottom: "1px solid rgba(250,247,242,0.08)",
                      }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.1rem",
                          color: "var(--ink-inverse)",
                          letterSpacing: "-0.01em",
                          flexShrink: 0,
                        }}
                      >
                        {val}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 13,
                          color: "rgba(250,247,242,0.45)",
                        }}
                      >
                        {lab}
                      </span>
                    </div>
                  ))}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "rgba(250,247,242,0.28)",
                  }}
                >
                  Cicibór Duży · woj. lubelskie
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. BLISKO MIASTA ─────────────────────────────────────────────── */}
        <section style={{ background: "var(--surface-canvas)", padding: "120px 48px" }}>
          <style>{`
            .blisko-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1.1fr;
              gap: 80px;
              align-items: center;
            }
            @media (max-width: 1000px) {
              .blisko-inner { grid-template-columns: 1fr; gap: 56px; }
            }
            @media (max-width: 600px) {
              .blisko-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="blisko-inner">
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
                    marginBottom: 28,
                  }}
                >
                  Blisko miasta, poza jego tempem
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    color: "var(--ink-primary)",
                    margin: "0 0 28px",
                  }}
                >
                  Wszystko co ważne,{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-oak)" }}>
                    kilka minut dalej
                  </em>
                </h2>
              </Reveal>
              <Reveal delay={0.1}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 20px",
                  }}
                >
                  Cicibór Duży daje wygodny dostęp do Białej Podlaskiej i
                  miejskiej infrastruktury, a jednocześnie pozwala mieszkać
                  w spokojniejszym, podmiejskim otoczeniu.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 40px",
                  }}
                >
                  To dobre rozwiązanie dla osób, które porównują zakup
                  mieszkania w mieście z możliwością zamieszkania w domu
                  z działką i garażem — bez konieczności rezygnowania z
                  wygody codziennego dojazdu.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <Button as="a" href="/#kontakt" variant="primary" size="lg">
                  Umów prezentację inwestycji
                </Button>
              </Reveal>
            </div>

            {/* Exterior photo */}
            <Reveal delay={0.08}>
              <div
                style={{
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    width: "100%",
                    aspectRatio: "4/3",
                    backgroundImage: "url(/assets/render-jasny-front-zloty.jpeg)",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    transition: "transform 0.55s ease",
                  }}
                  className="lok-photo"
                />
                <style>{`
                  .lok-photo-wrap:hover .lok-photo { transform: scale(1.04); }
                `}</style>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3. MAPA ─────────────────────────────────────────────────────── */}
        <section id="mapa" style={{ background: "#FFFFFF", padding: "120px 48px" }}>
          <style>{`
            .mapa-inner { max-width: 1440px; margin: 0 auto; }
            .mapa-wrap {
              position: relative;
              border-radius: var(--radius-xl);
              overflow: hidden;
              border: 1px solid rgba(15,15,13,0.08);
              box-shadow: var(--shadow-float);
            }
            .mapa-iframe {
              width: 100%;
              height: 560px;
              border: none;
              display: block;
              filter: grayscale(15%) contrast(0.95);
              transition: filter 400ms;
            }
            .mapa-wrap:hover .mapa-iframe { filter: grayscale(0%) contrast(1); }
            .mapa-label {
              position: absolute;
              bottom: 28px;
              left: 28px;
              background: var(--surface-ink);
              border-radius: var(--radius-lg);
              padding: 18px 24px;
              display: flex;
              flex-direction: column;
              gap: 4px;
            }
            @media (max-width: 600px) {
              .mapa-section { padding: 80px 20px !important; }
              .mapa-iframe { height: 380px; }
              .mapa-label { bottom: 16px; left: 16px; padding: 14px 18px; }
            }
          `}</style>

          <div className="mapa-inner">
            <div style={{ marginBottom: 48 }}>
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
                  Zobacz lokalizację inwestycji
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-end",
                    justifyContent: "space-between",
                    gap: 24,
                    flexWrap: "wrap",
                  }}
                >
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2rem, 3vw, 3rem)",
                      fontWeight: 400,
                      lineHeight: 1.12,
                      letterSpacing: "-0.02em",
                      color: "var(--ink-primary)",
                      margin: 0,
                      maxWidth: "28ch",
                    }}
                  >
                    Nowy Relax w Ciciborze Dużym, w pobliżu Białej Podlaskiej
                  </h2>
                  <a
                    href="https://maps.app.goo.gl/QisDZdJrT2Ux6EWa8"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      fontWeight: 500,
                      color: "var(--brand-oak)",
                      textDecoration: "none",
                      display: "flex",
                      alignItems: "center",
                      gap: 6,
                      whiteSpace: "nowrap",
                      flexShrink: 0,
                      paddingBottom: 2,
                      borderBottom: "1px solid var(--brand-sand)",
                    }}
                    onMouseEnter={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "0.7")
                    }
                    onMouseLeave={(e) =>
                      ((e.currentTarget as HTMLElement).style.opacity = "1")
                    }
                  >
                    Otwórz w Google Maps →
                  </a>
                </div>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="mapa-wrap">
                <iframe
                  className="mapa-iframe"
                  src="https://maps.google.com/maps?q=Cicib%C3%B3r+Du%C5%BCy,+Bia%C5%82a+Podlaska&hl=pl&z=14&output=embed"
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lokalizacja inwestycji Nowy Relax"
                />
                <div className="mapa-label">
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.15rem",
                      color: "var(--ink-inverse)",
                      letterSpacing: "-0.01em",
                    }}
                  >
                    Nowy Relax
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      color: "rgba(250,247,242,0.48)",
                      letterSpacing: "0.04em",
                    }}
                  >
                    Cicibór Duży · woj. lubelskie
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 4. ATUTY LOKALIZACJI ─────────────────────────────────────────── */}
        <section style={{ background: "var(--surface-canvas)", padding: "120px 48px" }}>
          <style>{`
            .atuty-inner { max-width: 1440px; margin: 0 auto; }
            .atuty-header { max-width: 640px; margin: 0 auto 72px; text-align: center; }
            .atuty-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2px;
              background: var(--line-soft);
              border: 1px solid var(--line-soft);
              border-radius: var(--radius-xl);
              overflow: hidden;
            }
            .atuty-card {
              background: #fff;
              padding: 52px 48px;
              display: flex;
              flex-direction: column;
              gap: 18px;
              transition: background 220ms;
            }
            .atuty-card:hover { background: var(--surface-canvas); }
            @media (max-width: 768px) {
              .atuty-grid { grid-template-columns: 1fr; }
              .atuty-card { padding: 40px 28px; }
              .atuty-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="atuty-inner">
            <div className="atuty-header">
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
                  Najważniejsze atuty lokalizacji
                </div>
              </Reveal>
              <Reveal delay={0.06}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                    fontWeight: 400,
                    lineHeight: 1.12,
                    letterSpacing: "-0.02em",
                    color: "var(--ink-primary)",
                    margin: 0,
                  }}
                >
                  Dlaczego Cicibór Duży?
                </h2>
              </Reveal>
            </div>

            <div className="atuty-grid">
              {advantages.map((a, i) => (
                <Reveal key={a.n} delay={i * 0.07}>
                  <div className="atuty-card">
                    <span
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(2rem, 2.5vw, 2.8rem)",
                        fontWeight: 400,
                        color: "var(--brand-oak)",
                        letterSpacing: "-0.03em",
                        lineHeight: 1,
                      }}
                    >
                      {a.n}
                    </span>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 600,
                        letterSpacing: "0.14em",
                        textTransform: "uppercase",
                        color: "var(--ink-primary)",
                      }}
                    >
                      {a.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 15,
                        lineHeight: 1.7,
                        color: "var(--ink-secondary)",
                        margin: 0,
                      }}
                    >
                      {a.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ─────────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-ink)",
            padding: "160px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            .lok-cta-bg {
              position: absolute;
              inset: 0;
              background-image: url(/assets/hero-nowy-relax.jpeg);
              background-size: cover;
              background-position: center 55%;
              opacity: 0.45;
            }
            .lok-cta-inner {
              position: relative;
              z-index: 1;
              max-width: 780px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .lok-cta-rule {
              width: 1px;
              height: 56px;
              background: linear-gradient(to bottom, transparent, rgba(201,184,150,0.4), transparent);
              margin: 0 auto 52px;
            }
            .lok-cta-actions {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 16px;
              flex-wrap: wrap;
            }
            @media (max-width: 600px) {
              .lok-cta-section { padding: 100px 24px !important; }
              .lok-cta-actions { flex-direction: column; width: 100%; }
              .lok-cta-actions > * { width: 100%; justify-content: center; }
            }
          `}</style>

          <div className="lok-cta-bg" />

          <div className="lok-cta-inner">
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
                Cicibór Duży · ok. 1 km od Białej Podlaskiej
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
                Chcesz zobaczyć{" "}
                <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                  miejsce inwestycji?
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.13}>
              <div className="lok-cta-rule" />
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
                Umów prezentację i poznaj lokalizację Nowego Relaxu na żywo.
                Pokażemy położenie działek, układ inwestycji i odpowiemy na
                pytania dotyczące dojazdu oraz otoczenia.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="lok-cta-actions">
                <Button as="a" href="/#kontakt" variant="primary-inverse" size="lg">
                  Umów prezentację inwestycji
                </Button>
                <Button as="a" href="/oferta" variant="outline-inverse" size="lg">
                  Zobacz ofertę
                </Button>
              </div>
            </Reveal>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
