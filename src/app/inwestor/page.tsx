"use client";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Cursor from "@/components/Cursor";

// ─── Data ─────────────────────────────────────────────────────────────────────

const pillars = [
  {
    n: "01",
    title: "Wygodny garaż",
    body: "Przestronne i funkcjonalne miejsce parkingowe zaplanowane jako integralna część domu, nie dodatek.",
  },
  {
    n: "02",
    title: "Dobrze zaplanowana kuchnia",
    body: "Układ kuchni przemyślany pod kątem codziennego użytkowania, z miejscem na sprzęt, spiżarnią i wygodnym dostępem do jadalni.",
  },
  {
    n: "03",
    title: "Miejsce do przechowywania",
    body: "Wystarczająca ilość miejsca na przechowywanie w każdej strefie domu. Bez kompromisów w przestrzeni życiowej.",
  },
  {
    n: "04",
    title: "Czytelny podział stref",
    body: "Wyraźna granica między strefą dzienną a prywatną, co zapewnia większą prywatność i komfort dla całej rodziny.",
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function InwestorPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="inv-hero-section"
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
            .inv-hero-inner {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              padding: 0 48px;
              display: grid;
              grid-template-columns: 1fr 400px;
              gap: 56px;
              align-items: flex-end;
            }
            @media (max-width: 1100px) {
              .inv-hero-section { padding-top: 88px; }
              .inv-hero-inner {
                grid-template-columns: 1fr;
                gap: 40px;
                padding: 0 24px;
              }
            }
            @media (max-width: 600px) {
              .inv-hero-section { padding-top: 80px; }
              .inv-hero-inner { padding: 0 20px; gap: 28px; }
              .inv-stats-card { padding: 28px 24px !important; }
            }
          `}</style>

          {/* Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/render-ciemny-front-zachmurzenie.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,19,15,0.96) 0%, rgba(20,19,15,0.55) 45%, rgba(20,19,15,0.25) 100%)",
            }}
          />

          <div className="inv-hero-inner">
            {/* Left: copy */}
            <div>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    opacity: 0.72,
                    marginBottom: 28,
                  }}
                >
                  O inwestorze · Filipek Investment
                </div>
              </Reveal>

              <Reveal delay={0.07}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(3.6rem, 8vw, 7.8rem)",
                    fontWeight: 400,
                    lineHeight: 0.97,
                    letterSpacing: "-0.03em",
                    color: "var(--ink-inverse)",
                    margin: "0 0 36px",
                  }}
                >
                  Lokalny{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                    inwestor
                  </em>
                  <br />
                  mieszkaniowy
                </h1>
              </Reveal>

              <Reveal delay={0.13}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "rgba(250,247,242,0.72)",
                    maxWidth: "48ch",
                    margin: "0 0 44px",
                  }}
                >
                  Tworzymy projekty oparte na funkcjonalnych układach,
                  rozsądnych metrażach, sprawdzonych lokalizacjach
                  i&nbsp;przejrzystym procesie zakupu.
                </p>
              </Reveal>

              <Reveal delay={0.19}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button as="a" href="#kontakt" variant="primary-inverse" size="lg">
                    Zapytaj o dostępność domu
                  </Button>
                  <Button as="a" href="#filozofia" variant="outline-inverse" size="lg">
                    Nasze podejście
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Right: stats card */}
            <Reveal delay={0.22}>
              <div
                className="inv-stats-card"
                style={{
                  background: "rgba(250,247,242,0.07)",
                  backdropFilter: "blur(24px) saturate(130%)",
                  WebkitBackdropFilter: "blur(24px) saturate(130%)",
                  border: "1px solid rgba(250,247,242,0.13)",
                  borderRadius: "var(--radius-xl)",
                  padding: "44px 48px",
                  display: "flex",
                  flexDirection: "column",
                  gap: 0,
                }}
              >
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    opacity: 0.6,
                    marginBottom: 36,
                  }}
                >
                  Doświadczenie
                </div>

                {[
                  { num: "23", label: "domy i lokale", sub: "zrealizowane i oddane" },
                  { num: "4", label: "lokale", sub: "aktualnie w realizacji" },
                ].map((s, i) => (
                  <div
                    key={s.num}
                    style={{
                      paddingTop: i === 0 ? 0 : 28,
                      marginTop: i === 0 ? 0 : 28,
                      borderTop:
                        i === 0 ? "none" : "1px solid rgba(250,247,242,0.12)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-serif)",
                        fontSize: "clamp(3.2rem, 5vw, 5.6rem)",
                        fontWeight: 400,
                        lineHeight: 1,
                        letterSpacing: "-0.04em",
                        color: "#FFFFFF",
                        marginBottom: 12,
                      }}
                    >
                      {s.num}
                    </div>
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        lineHeight: 1.5,
                        color: "rgba(250,247,242,0.5)",
                      }}
                    >
                      {s.label}
                      <br />
                      <span style={{ color: "var(--brand-sand)" }}>
                        {s.sub}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. KIM JESTEŚMY ─────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-canvas)",
            padding: "160px 48px",
          }}
        >
          <style>{`
            .inv-about-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 100px;
              align-items: start;
            }
            @media (max-width: 900px) {
              .inv-about-inner {
                grid-template-columns: 1fr;
                gap: 56px;
              }
            }
            @media (max-width: 600px) {
              .inv-about-inner {
                padding: 0;
              }
            }
          `}</style>

          <div className="inv-about-inner">
            {/* Left: heading */}
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
                    marginBottom: 32,
                  }}
                >
                  Filipek Investment Sp. z o.o.
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.4rem, 4vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-primary)",
                    margin: "0 0 40px",
                  }}
                >
                  Budujemy{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-oak)" }}>
                    lokalnie
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.12}>
                <div
                  style={{
                    width: 48,
                    height: 1,
                    background: "var(--brand-oak)",
                    opacity: 0.4,
                    marginBottom: 40,
                  }}
                />
              </Reveal>

              <Reveal delay={0.16}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: 0,
                    maxWidth: "44ch",
                  }}
                >
                  Filipek Investment Sp. z&nbsp;o.o. to lokalny inwestor
                  mieszkaniowy realizujący kameralne inwestycje domów i&nbsp;lokali
                  w zabudowie jednorodzinnej.
                </p>
              </Reveal>
            </div>

            {/* Right: body copy */}
            <Reveal delay={0.1}>
              <div
                style={{
                  paddingTop: 88,
                }}
              >
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 28px",
                  }}
                >
                  Nasze inwestycje powstają w kameralnej skali, która pozwala
                  zachować większą kontrolę nad jakością i lepiej odpowiadać na
                  realne potrzeby klientów.
                </p>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 48px",
                  }}
                >
                  Do tej pory zrealizowaliśmy i oddaliśmy{" "}
                  <strong style={{ fontWeight: 500, color: "var(--ink-primary)" }}>
                    23 domy i lokale
                  </strong>
                  , a kolejne{" "}
                  <strong style={{ fontWeight: 500, color: "var(--ink-primary)" }}>
                    4 lokale
                  </strong>{" "}
                  są aktualnie w realizacji.
                </p>

                {/* Mini stat row */}
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 1,
                    background: "var(--line-hair)",
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                  }}
                >
                  {[
                    { num: "23", label: "Zrealizowane i oddane domy" },
                    { num: "4", label: "Lokale aktualnie w realizacji" },
                  ].map((s) => (
                    <div
                      key={s.num}
                      style={{
                        background: "var(--surface-canvas)",
                        padding: "36px 32px",
                      }}
                    >
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "clamp(2.8rem, 4vw, 4.2rem)",
                          fontWeight: 400,
                          lineHeight: 1,
                          letterSpacing: "-0.03em",
                          color: "var(--ink-primary)",
                          marginBottom: 12,
                        }}
                      >
                        {s.num}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 13,
                          lineHeight: 1.5,
                          color: "var(--ink-tertiary)",
                        }}
                      >
                        {s.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 3. FILOZOFIA ────────────────────────────────────────────────── */}
        <section
          id="filozofia"
          style={{
            background: "var(--surface-ink)",
            padding: "160px 48px",
          }}
        >
          <style>{`
            .inv-pillars-header {
              max-width: 1440px;
              margin: 0 auto 72px;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 80px;
              align-items: end;
            }
            .inv-pillars-grid {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 1px;
              background: rgba(255,255,255,0.08);
              border-radius: var(--radius-lg);
              overflow: hidden;
            }
            .inv-pillars-grid > * { height: 100%; }
            .inv-pillar {
              background: var(--surface-ink);
              padding: 44px 36px 48px;
              display: flex;
              flex-direction: column;
              gap: 20px;
              height: 100%;
              box-sizing: border-box;
            }
            @media (max-width: 1100px) {
              .inv-pillars-header {
                grid-template-columns: 1fr;
                gap: 32px;
              }
              .inv-pillars-grid {
                grid-template-columns: repeat(2, 1fr);
              }
            }
            @media (max-width: 600px) {
              .inv-pillars-header { margin-bottom: 48px; }
              .inv-pillars-grid {
                grid-template-columns: 1fr;
              }
            }
          `}</style>

          <div className="inv-pillars-header">
            <div>
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    opacity: 0.6,
                    marginBottom: 28,
                  }}
                >
                  Nasze podejście
                </div>
              </Reveal>
              <Reveal delay={0.07}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.4rem, 4vw, 4rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-inverse)",
                    margin: 0,
                  }}
                >
                  Dom ma być wygodny{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                    na co dzień
                  </em>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(250,247,242,0.65)",
                  margin: 0,
                  maxWidth: "46ch",
                }}
              >
                W naszych projektach zwracamy uwagę na praktyczne rozwiązania
                widoczne m.in. w funkcjonalnym układzie Nowego Relaxu,
                standardzie deweloperskim+ i kameralnym charakterze inwestycji.
              </p>
            </Reveal>
          </div>

          <div className="inv-pillars-grid">
            {pillars.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.07}>
                <div className="inv-pillar">
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: 48,
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "rgba(250,247,242,0.12)",
                    }}
                  >
                    {p.n}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      fontWeight: 500,
                      lineHeight: 1.3,
                      color: "#FFFFFF",
                    }}
                  >
                    {p.title}
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 14,
                      lineHeight: 1.7,
                      color: "rgba(250,247,242,0.55)",
                    }}
                  >
                    {p.body}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 4. ZIELONY GRABANÓW ─────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-canvas)",
            padding: "160px 48px",
          }}
        >
          <style>{`
            .inv-zg-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 100px;
              align-items: center;
            }
            .inv-zg-image {
              border-radius: var(--radius-lg);
              overflow: hidden;
              aspect-ratio: 4 / 3;
              background: var(--surface-ink);
              position: relative;
            }
            .inv-zg-img-inner {
              position: absolute;
              inset: 0;
              background-image: url(/assets/render-ciemny-front-prawy-zmierzch.jpeg);
              background-size: cover;
              background-position: center;
              transition: transform 0.55s ease;
            }
            .inv-zg-image:hover .inv-zg-img-inner {
              transform: scale(1.04);
            }
            @media (max-width: 900px) {
              .inv-zg-inner {
                grid-template-columns: 1fr;
                gap: 56px;
              }
            }
            @media (max-width: 600px) {
              .inv-zg-inner { gap: 44px; }
            }
          `}</style>

          <div className="inv-zg-inner">
            {/* Left: image */}
            <Reveal>
              <div className="inv-zg-image">
                <div className="inv-zg-img-inner" />
                <div
                  style={{
                    position: "absolute",
                    bottom: 28,
                    left: 28,
                    background: "rgba(20,19,15,0.72)",
                    backdropFilter: "blur(16px)",
                    WebkitBackdropFilter: "blur(16px)",
                    borderRadius: "var(--radius-pill)",
                    padding: "10px 20px",
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                  }}
                >
                  Poprzednia realizacja
                </div>
              </div>
            </Reveal>

            {/* Right: copy */}
            <div>
              <Reveal delay={0.06}>
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
                  Wcześniejsza realizacja
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.2rem, 3.5vw, 3.6rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-primary)",
                    margin: "0 0 32px",
                  }}
                >
                  Zielony{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-oak)" }}>
                    Grabanów
                  </em>
                </h2>
              </Reveal>

              <Reveal delay={0.14}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 20px",
                    maxWidth: "46ch",
                  }}
                >
                  Jedna z wcześniejszych realizacji Filipek Investment to projekt,
                  który pokazuje nasze podejście do kameralnej zabudowy
                  mieszkaniowej.
                </p>
              </Reveal>

              <Reveal delay={0.18}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 48px",
                    maxWidth: "46ch",
                  }}
                >
                  Lokalnie, funkcjonalnie i&nbsp;z&nbsp;myślą o klientach
                  szukających domu w spokojniejszym otoczeniu.
                </p>
              </Reveal>

              <Reveal delay={0.22}>
                <Button
                  as="a"
                  href="https://www.zielonygrabanow.pl/"
                  target="_blank"
                  rel="noopener noreferrer"
                  variant="outline"
                  size="lg"
                >
                  Zobacz Zielony Grabanów ↗
                </Button>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5. FINAL CTA ────────────────────────────────────────────────── */}
        <section
          id="kontakt"
          style={{
            background: "var(--surface-ink)",
            padding: "160px 48px",
            textAlign: "center",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            .inv-cta-bg {
              position: absolute;
              inset: 0;
              background-image: url(/assets/hero-nowy-relax.jpeg);
              background-size: cover;
              background-position: center 55%;
              opacity: 0.35;
            }
            .inv-cta-inner {
              position: relative;
              z-index: 1;
              max-width: 780px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .inv-cta-rule {
              width: 1px;
              height: 56px;
              background: linear-gradient(to bottom, transparent, rgba(201,184,150,0.4), transparent);
              margin: 0 auto 52px;
            }
            .inv-cta-actions {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 16px;
              flex-wrap: wrap;
            }
            @media (max-width: 600px) {
              .inv-cta-inner { padding: 0; }
              .inv-cta-actions {
                flex-direction: column;
                width: 100%;
              }
              .inv-cta-actions > * {
                width: 100%;
                justify-content: center;
              }
            }
          `}</style>

          <div className="inv-cta-bg" />

          <div className="inv-cta-inner">
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
                Nowy Relax · Cicibór Duży
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
                Porozmawiaj z nami{" "}
                <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                  o Nowym Relaxie
                </em>
              </h2>
            </Reveal>

            <Reveal delay={0.13}>
              <div className="inv-cta-rule" />
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
                Jeśli chcesz poznać szczegóły inwestycji, dostępność domów,
                standard lub proces rezerwacji skontaktuj się z nami.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="inv-cta-actions">
                <Button as="a" href="tel:+48000000000" variant="primary-inverse" size="lg">
                  Zapytaj o dostępność domu
                </Button>
                <Button as="a" href="mailto:kontakt@filipek-investment.pl" variant="outline-inverse" size="lg">
                  Napisz do nas
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
