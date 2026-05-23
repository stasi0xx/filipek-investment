"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Cursor from "@/components/Cursor";
import Reveal from "@/components/Reveal";
import RevealImage from "@/components/RevealImage";
import Button from "@/components/Button";

const imgStyle = (src: string, hovered: boolean): React.CSSProperties => ({
  width: "100%",
  height: "100%",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: hovered ? "scale(1.06)" : "scale(1)",
  transition: "transform 0.55s ease",
});

const NAV_CHIPS = [
  { href: "#wizualizacje", label: "Wizualizacje zewnętrzne" },
  { href: "#rzuty", label: "Rzuty domu" },
  { href: "#zagospodarowanie", label: "Zagospodarowanie terenu" },
];

export default function GaleriaPage() {
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ── 1. HERO ───────────────────────────────────────────────────── */}
        <section
          className="gh-hero-section"
          style={{
            position: "relative",
            background: "var(--surface-ink)",
            minHeight: "80vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: 96,
            overflow: "hidden",
          }}
        >
          <style>{`
            .gh-inner {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              padding: 0 48px;
            }
            .gh-chips { display: flex; gap: 10px; flex-wrap: wrap; }
            .gh-chip {
              font-family: var(--font-sans);
              font-size: 13px;
              font-weight: 500;
              color: rgba(250,247,242,0.72);
              border: 1px solid rgba(250,247,242,0.2);
              border-radius: var(--radius-pill);
              padding: 9px 20px;
              text-decoration: none;
              transition: background 200ms, border-color 200ms, color 200ms;
              background: rgba(250,247,242,0.05);
            }
            .gh-chip:hover {
              background: rgba(250,247,242,0.11);
              border-color: rgba(250,247,242,0.42);
              color: rgba(250,247,242,0.95);
            }
            @media (max-width: 900px) {
              .gh-hero-section { padding-top: 88px; }
              .gh-inner { padding: 0 24px; }
            }
            @media (max-width: 600px) {
              .gh-hero-section { padding-top: 80px; }
              .gh-inner { padding: 0 20px; }
            }
          `}</style>

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/hero-nowy-relax.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,19,15,0.92) 0%, rgba(20,19,15,0.38) 55%, rgba(20,19,15,0.52) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(20,19,15,0.78) 0%, rgba(20,19,15,0.18) 60%, transparent 100%)",
            }}
          />

          <div className="gh-inner">
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
                Nowy Relax · Cicibór Duży
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
                Galeria
              </h1>
            </Reveal>
            <Reveal delay={0.12}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "clamp(15px, 1.3vw, 17px)",
                  lineHeight: 1.75,
                  color: "rgba(250,247,242,0.7)",
                  maxWidth: "52ch",
                  margin: "0 0 44px",
                }}
              >
                W galerii znajdziesz wizualizacje inwestycji, rzuty domów oraz materiały
                pokazujące układ i charakter planowanej zabudowy. Po rozpoczęciu prac
                galeria będzie uzupełniana o zdjęcia z budowy.
              </p>
            </Reveal>
            <Reveal delay={0.18}>
              <div className="gh-chips">
                {NAV_CHIPS.map(({ href, label }) => (
                  <a key={href} href={href} className="gh-chip">{label}</a>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. WIZUALIZACJE ZEWNĘTRZNE ──────────────────────────────────── */}
        <section
          id="wizualizacje"
          style={{ background: "var(--surface-canvas)", padding: "120px 0" }}
        >
          <style>{`
            .wiz-header { max-width: 1440px; margin: 0 auto 64px; padding: 0 48px; }
            .wiz-top {
              display: grid;
              grid-template-columns: 2fr 1fr;
              gap: 4px;
              padding: 0 4px;
            }
            .wiz-bottom { padding: 4px 4px 0; }
            @media (max-width: 767px) {
              .wiz-header { padding: 0 20px; margin-bottom: 40px; }
              .wiz-top { grid-template-columns: 1fr; }
              .wiz-top > :last-child { display: none; }
            }
          `}</style>

          <div className="wiz-header">
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
                Wizualizacje zewnętrzne
              </div>
            </Reveal>
            <Reveal delay={0.08}>
              <h2
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(2.2rem, 4vw, 3.6rem)",
                  fontWeight: 400,
                  lineHeight: 1.08,
                  letterSpacing: "-0.025em",
                  color: "var(--ink-primary)",
                  maxWidth: "26ch",
                }}
              >
                Nowoczesna, spokojna architektura domów w zabudowie bliźniaczej.
              </h2>
            </Reveal>
          </div>

          <div className="wiz-top">
            <RevealImage direction="left" delay={0.1}>
              <div
                style={{ aspectRatio: "16/10", overflow: "hidden" }}
                onMouseEnter={() => setHovered("w0")}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle("/assets/render-jasny-front-zmierzch-rozowy.jpeg", hovered === "w0")} />
              </div>
            </RevealImage>
            <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 4 }}>
              <RevealImage direction="right" delay={0.16}>
                <div
                  style={{ overflow: "hidden", height: "100%" }}
                  onMouseEnter={() => setHovered("w1")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={imgStyle("/assets/render-ciemny-front-dzien.jpeg", hovered === "w1")} />
                </div>
              </RevealImage>
              <RevealImage direction="right" delay={0.22}>
                <div
                  style={{ overflow: "hidden", height: "100%" }}
                  onMouseEnter={() => setHovered("w2")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={imgStyle("/assets/render-jasny-ogrod-balkon.jpeg", hovered === "w2")} />
                </div>
              </RevealImage>
            </div>
          </div>

          <RevealImage direction="bottom" delay={0.2}>
            <div className="wiz-bottom">
              <div
                style={{ aspectRatio: "21/7", overflow: "hidden" }}
                onMouseEnter={() => setHovered("w3")}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle("/assets/render-ciemny-front-prawy-zloty.jpeg", hovered === "w3")} />
              </div>
            </div>
          </RevealImage>
        </section>

        {/* ── 3. RZUTY DOMU ────────────────────────────────────────────────── */}
        <section
          id="rzuty"
          style={{ background: "#FFFFFF", padding: "120px 48px" }}
        >
          <style>{`
            .rzuty-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1.1fr;
              gap: 80px;
              align-items: center;
            }
            .rzuty-wrap {
              border-radius: var(--radius-xl);
              overflow: hidden;
              background: var(--surface-canvas);
              padding: 40px;
              position: sticky;
              top: 100px;
            }
            .rzuty-wrap img {
              width: 100%;
              display: block;
              transition: transform 0.55s ease;
            }
            .rzuty-wrap:hover img { transform: scale(1.025); }
            .rzuty-stat {
              background: var(--surface-canvas);
              border-radius: var(--radius-lg);
              padding: 24px 28px;
              border: 1px solid var(--line-hair);
            }
            @media (max-width: 900px) {
              .rzuty-inner { grid-template-columns: 1fr; gap: 48px; }
              .rzuty-wrap { position: static; padding: 28px; }
              .rzuty-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="rzuty-inner">
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
                  Rzuty domu
                </div>
              </Reveal>
              <Reveal delay={0.07}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.1,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-primary)",
                    margin: "0 0 28px",
                  }}
                >
                  Rzuty parteru i 1 piętra pokazujące funkcjonalny układ domu.
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 16px",
                    maxWidth: "44ch",
                  }}
                >
                  Parter to otwarta strefa dzienna — salon z jadalnią, kuchnia,
                  łazienka, spiżarnia, przedsionek i garaż w bryle budynku.
                </p>
              </Reveal>
              <Reveal delay={0.16}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 40px",
                    maxWidth: "44ch",
                  }}
                >
                  Piętro to prywatna strefa nocna — trzy sypialnie, dwie łazienki
                  i garderoba przy głównej sypialni.
                </p>
              </Reveal>

              <Reveal delay={0.2}>
                <div
                  style={{
                    display: "grid",
                    gridTemplateColumns: "1fr 1fr",
                    gap: 12,
                    marginBottom: 40,
                  }}
                >
                  {[
                    { label: "Parter", value: "67,46 m²", note: "salon, kuchnia, garaż, łazienka" },
                    { label: "1. Piętro", value: "54,41 m²", note: "3 pokoje, 2 łazienki, garderoba" },
                  ].map(({ label, value, note }) => (
                    <div key={label} className="rzuty-stat">
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 11,
                          fontWeight: 500,
                          letterSpacing: "0.12em",
                          textTransform: "uppercase",
                          color: "var(--ink-tertiary)",
                          marginBottom: 8,
                        }}
                      >
                        {label}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.7rem",
                          fontWeight: 400,
                          letterSpacing: "-0.02em",
                          color: "var(--ink-primary)",
                          marginBottom: 4,
                        }}
                      >
                        {value}
                      </div>
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 12,
                          color: "var(--ink-tertiary)",
                        }}
                      >
                        {note}
                      </div>
                    </div>
                  ))}
                </div>
              </Reveal>

              <Reveal delay={0.24}>
                <Button as="a" href="/#kontakt" variant="outline" size="md">
                  Poproś o szczegółową kartę domu →
                </Button>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="rzuty-wrap">
                <img src="/assets/floor-plans.jpg" alt="Rzut kondygnacji — Nowy Relax" />
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 4. ZAGOSPODAROWANIE TERENU ─────────────────────────────────── */}
        <section
          id="zagospodarowanie"
          style={{ background: "var(--surface-warm)", padding: "120px 48px" }}
        >
          <style>{`
            .zag-inner { max-width: 1440px; margin: 0 auto; }
            .zag-header {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 64px;
              align-items: end;
              margin-bottom: 60px;
            }
            .zag-img-pair {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 14px;
              margin-top: 14px;
            }
            @media (max-width: 900px) {
              .zag-header { grid-template-columns: 1fr; gap: 28px; }
              .zag-section { padding: 80px 20px !important; }
            }
            @media (max-width: 600px) {
              .zag-img-pair { grid-template-columns: 1fr; }
            }
          `}</style>

          <div className="zag-inner">
            <div className="zag-header">
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
                    Zagospodarowanie terenu
                  </div>
                </Reveal>
                <Reveal delay={0.07}>
                  <h2
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                      fontWeight: 400,
                      lineHeight: 1.1,
                      letterSpacing: "-0.025em",
                      color: "var(--ink-primary)",
                      margin: 0,
                    }}
                  >
                    Układ budynków, działek i przestrzeni wokół domów.
                  </h2>
                </Reveal>
              </div>
              <Reveal delay={0.12}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: 0,
                    maxWidth: "42ch",
                  }}
                >
                  8 domów w zabudowie bliźniaczej, każdy z własną działką ok. 450 m²,
                  podjazdem, tarasem i ogrodzeniem panelowym. Osiedle jest kameralne —
                  bez przelotowych ulic, z zielenią wokół każdego domu.
                </p>
              </Reveal>
            </div>

            <RevealImage direction="bottom" delay={0.1}>
              <div
                style={{
                  borderRadius: "var(--radius-xl)",
                  overflow: "hidden",
                  aspectRatio: "21/8",
                }}
                onMouseEnter={() => setHovered("z0")}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle("/assets/render-jasny-ogrod-tyl.jpeg", hovered === "z0")} />
              </div>
            </RevealImage>

            <div className="zag-img-pair">
              <RevealImage direction="left" delay={0.18}>
                <div
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                  onMouseEnter={() => setHovered("z1")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={imgStyle("/assets/render-jasny-ogrod-blisko.jpeg", hovered === "z1")} />
                </div>
              </RevealImage>
              <RevealImage direction="right" delay={0.24}>
                <div
                  style={{
                    borderRadius: "var(--radius-lg)",
                    overflow: "hidden",
                    aspectRatio: "4/3",
                  }}
                  onMouseEnter={() => setHovered("z2")}
                  onMouseLeave={() => setHovered(null)}
                >
                  <div style={imgStyle("/assets/render-ciemny-front-prawy-noc.jpeg", hovered === "z2")} />
                </div>
              </RevealImage>
            </div>
          </div>
        </section>

        {/* ── 5. CTA ───────────────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-ink)",
            padding: "120px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            .gcta-inner { max-width: 1440px; margin: 0 auto; }
            .gcta-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 24px;
            }
            .gcta-card {
              border: 1px solid var(--line-dark);
              border-radius: var(--radius-xl);
              padding: 56px 52px;
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            @media (max-width: 900px) {
              .gcta-grid { grid-template-columns: 1fr; }
              .gcta-section { padding: 80px 20px !important; }
              .gcta-card { padding: 40px 32px; }
            }
          `}</style>

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/facade-grey.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.07,
            }}
          />
          <div className="gcta-inner" style={{ position: "relative", zIndex: 1 }}>
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
                  marginBottom: 64,
                }}
              >
                Etap 1 · 4 domy dostępne
              </div>
            </Reveal>

            <div className="gcta-grid">
              <Reveal delay={0}>
                <div className="gcta-card">
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                      fontWeight: 400,
                      color: "var(--ink-inverse)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Chcesz otrzymać szczegółowe materiały?
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "var(--ink-inverse-secondary)",
                      margin: 0,
                    }}
                  >
                    Poproś o kartę domu z rzutami, tabelą pomieszczeń
                    i szczegółami oferty. Wyślemy ją na wskazany adres e-mail.
                  </p>
                  <div>
                    <Button as="a" href="/#kontakt" variant="primary-inverse" size="md">
                      Poproś o kartę domu
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  className="gcta-card"
                  style={{ background: "rgba(250,247,242,0.04)" }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                      fontWeight: 400,
                      color: "var(--ink-inverse)",
                      lineHeight: 1.2,
                      letterSpacing: "-0.02em",
                    }}
                  >
                    Umów wizytę na osiedlu
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.75,
                      color: "var(--ink-inverse-secondary)",
                      margin: 0,
                    }}
                  >
                    Chętnie pokażemy teren inwestycji i odpowiemy na pytania
                    dotyczące dostępności, standardu i harmonogramu realizacji.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <Button as="a" href="/#kontakt" variant="outline-inverse" size="md">
                      Zapytaj o dostępność
                    </Button>
                    <Button as="a" href="tel:+48692404796" variant="ghost" size="md">
                      +48 692 404 796 →
                    </Button>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
