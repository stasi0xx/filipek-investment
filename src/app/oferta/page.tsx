"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Cursor from "@/components/Cursor";

// ─── Data ─────────────────────────────────────────────────────────────────────

const groundFloor = [
  { name: "Przedsionek", area: "4,26 m²" },
  { name: "Łazienka", area: "3,47 m²" },
  { name: "Spiżarka", area: "1,67 m²" },
  { name: "Kuchnia", area: "12,09 m²" },
  { name: "Salon + jadalnia", area: "24,00 m²" },
  { name: "Garaż", area: "21,97 m²" },
];

const firstFloor = [
  { name: "Komunikacja", area: "3,70 m²" },
  { name: "Sypialnia (główna)", area: "14,80 m²" },
  { name: "Garderoba", area: "2,48 m²" },
  { name: "Łazienka", area: "4,66 m²" },
  { name: "Łazienka", area: "6,23 m²" },
  { name: "Pokój", area: "10,62 m²" },
  { name: "Pokój", area: "11,92 m²" },
];

const standardCategories = [
  {
    id: "konstrukcja",
    label: "Konstrukcja i budynek",
    items: [
      "Ławy i fundamenty żelbetowe",
      "Mury nośne Solbet 24 cm",
      "Dach pokryty blachodachówką",
      "Ocieplenie dachu wraz z pokryciem płytami GK",
      "Elewacja z ociepleniem styropianem grafitowym",
      "Stolarka okienna PCV trzyszybowa",
      "Drzwi zewnętrzne",
      "Brama garażowa",
    ],
  },
  {
    id: "instalacje",
    label: "Instalacje i komfort",
    items: [
      "Instalacja elektryczna",
      "Instalacja multimedialna / IT",
      "Instalacje sanitarne wodno-kanalizacyjne",
      "Powietrzna pompa ciepła",
      "Rekuperacja",
      "Ogrzewanie podłogowe",
      "Woda z sieci gminnej",
      "Odprowadzenie ścieków do kanalizacji",
    ],
  },
  {
    id: "wewnatrz",
    label: "Wykończenie wewnętrzne",
    items: [
      "Tynki wewnętrzne gipsowe",
      "Posadzki betonowe",
      "Przygotowanie pomieszczeń do dalszych prac wykończeniowych",
    ],
  },
  {
    id: "teren",
    label: "Teren wokół domu",
    items: [
      "Ogrodzenie panelowe działki",
      "Podjazd utwardzony kostką brukową",
      "Opaska wokół budynku",
      "Taras utwardzony kostką brukową",
      "Teren uporządkowany i obsiany trawą",
    ],
  },
];

const processSteps = [
  {
    n: "01",
    title: "Kontakt i rozmowa",
    body: "Odpowiadamy na pytania dotyczące inwestycji, dostępnych domów, standardu, terminu realizacji i możliwości finansowania.",
  },
  {
    n: "02",
    title: "Rezerwacja domu",
    body: "Wybrany dom można zarezerwować na podstawie umowy rezerwacyjnej i wpłaty zaliczki.",
  },
  {
    n: "03",
    title: "Umowa i rachunek powierniczy",
    body: "Sprzedaż prowadzona z wykorzystaniem mieszkaniowego rachunku powierniczego dla bezpieczeństwa transakcji.",
  },
  {
    n: "04",
    title: "Finansowanie",
    body: "Zakup można finansować kredytem hipotecznym. Na życzenie pomagamy w kontakcie ze sprawdzonymi partnerami kredytowymi.",
  },
  {
    n: "05",
    title: "Realizacja i odbiór",
    body: "Planowany termin zakończenia robót to marzec 2027.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function ParamCard({
  value,
  label,
  sub,
  dark,
  fill,
}: {
  value: string;
  label: string;
  sub?: string;
  dark?: boolean;
  fill?: boolean;
}) {
  return (
    <div
      style={{
        background: dark ? "var(--surface-ink)" : "#FFFFFF",
        border: dark ? "none" : "1px solid rgba(15,15,13,0.09)",
        borderRadius: "var(--radius-lg)",
        padding: fill ? "52px 48px" : "44px 40px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end",
        gap: 14,
        minHeight: 200,
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          fontFamily: "var(--font-serif)",
          fontSize: fill
            ? "clamp(2.4rem, 3.5vw, 4rem)"
            : "clamp(1.8rem, 2.4vw, 3rem)",
          lineHeight: 1,
          letterSpacing: "-0.025em",
          fontWeight: 400,
          color: dark ? "#FFFFFF" : "var(--ink-primary)",
        }}
      >
        {value}
      </div>
      <div>
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 14,
            lineHeight: 1.5,
            color: dark ? "rgba(255,255,255,0.55)" : "var(--ink-secondary)",
          }}
        >
          {label}
        </div>
        {sub && (
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              marginTop: 4,
              color: dark ? "rgba(255,255,255,0.35)" : "var(--brand-oak)",
            }}
          >
            {sub}
          </div>
        )}
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function OfertaPage() {
  const [activeFloor, setActiveFloor] = useState<"parter" | "pietro">("parter");
  const [openCategory, setOpenCategory] = useState<string | null>("instalacje");

  const rooms = activeFloor === "parter" ? groundFloor : firstFloor;
  const total = activeFloor === "parter" ? "67,46 m²" : "54,41 m²";
  const totalLabel =
    activeFloor === "parter"
      ? "Razem parter (bez garażu: 45,49 m²)"
      : "Razem 1. piętro";

  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="oferta-hero-section"
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
            .oferta-hero-inner {
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
              .oferta-hero-section { padding-top: 88px; }
              .oferta-hero-inner {
                padding: 0 24px;
                flex-direction: column;
                align-items: stretch;
              }
            }
            @media (max-width: 600px) {
              .oferta-hero-section { padding-top: 80px; }
              .oferta-hero-inner { padding: 0 20px; gap: 28px; }
              .oferta-price-card { padding: 28px 24px !important; min-width: 0 !important; }
            }
          `}</style>

          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/render-jasny-front-zmierzch.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 40%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,19,15,0.93) 0%, rgba(20,19,15,0.45) 50%, rgba(20,19,15,0.6) 100%)",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to right, rgba(20,19,15,0.82) 0%, rgba(20,19,15,0.3) 55%, transparent 100%)",
            }}
          />

          <div className="oferta-hero-inner">
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
                  Nowy Relax · Etap 1 · Cicibór Duży
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
                  Oferta
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
                  Nowy Relax to kameralna inwestycja — 8 domów w zabudowie
                  bliźniaczej w Ciciborze Dużym. Etap 1 obejmuje 4 domy,
                  każdy z garażem w bryle budynku, własnym ogrodem i przemyślanym
                  układem dla rodziny.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <Button as="a" href="/#kontakt" variant="primary-inverse" size="lg">
                    Zapytaj o dostępność domu
                  </Button>
                  <Button as="a" href="#układ" variant="outline-inverse" size="lg">
                    Układ i standard
                  </Button>
                </div>
              </Reveal>
            </div>

            {/* Frosted price card */}
            <Reveal delay={0.22}>
              <div
                className="oferta-price-card"
                style={{
                  background: "rgba(250,247,242,0.07)",
                  backdropFilter: "blur(24px) saturate(130%)",
                  WebkitBackdropFilter: "blur(24px) saturate(130%)",
                  border: "1px solid rgba(250,247,242,0.13)",
                  borderRadius: "var(--radius-xl)",
                  padding: "44px 48px",
                  minWidth: 280,
                }}
              >
                {/* Status badge */}
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    marginBottom: 20,
                  }}
                >
                  <span
                    style={{
                      position: "relative",
                      display: "inline-flex",
                      width: 8,
                      height: 8,
                      flexShrink: 0,
                    }}
                  >
                    <span
                      style={{
                        position: "absolute",
                        inset: 0,
                        borderRadius: "50%",
                        background: "#C9A96E",
                        animation: "statusPulse 2s ease-out infinite",
                        opacity: 0,
                      }}
                    />
                    <span
                      style={{
                        position: "relative",
                        display: "block",
                        width: 8,
                        height: 8,
                        borderRadius: "50%",
                        background: "#C9A96E",
                      }}
                    />
                    <style>{`
                      @keyframes statusPulse {
                        0%   { transform: scale(1);   opacity: 0.7; }
                        100% { transform: scale(2.8); opacity: 0; }
                      }
                    `}</style>
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 10,
                      fontWeight: 600,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: "#C9A96E",
                    }}
                  >
                    Etap 1 · W trakcie budowy
                  </span>
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    fontWeight: 500,
                    letterSpacing: "0.16em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    marginBottom: 14,
                  }}
                >
                  Cena domu · Etap 1
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.4rem, 3vw, 3.4rem)",
                    fontWeight: 400,
                    color: "var(--ink-inverse)",
                    letterSpacing: "-0.03em",
                    lineHeight: 1,
                    marginBottom: 6,
                  }}
                >
                  630 000 zł
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 13,
                    color: "rgba(250,247,242,0.4)",
                    marginBottom: 32,
                  }}
                >
                  brutto · standard deweloperski+
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 11 }}>
                  {(
                    [
                      ["121,87 m²", "powierzchni domu"],
                      ["ok. 450 m²", "działka przy domu"],
                      ["garaż", "w bryle budynku"],
                      ["0 zł PCC", "oszczędność ok. 12 600 zł"],
                    ] as [string, string][]
                  ).map(([val, lab]) => (
                    <div
                      key={val}
                      style={{ display: "flex", alignItems: "baseline", gap: 10 }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.05rem",
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
                          color: "rgba(250,247,242,0.48)",
                        }}
                      >
                        {lab}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. PARAMETRY DOMU ────────────────────────────────────────────── */}
        <section className="params-section" style={{ background: "var(--surface-canvas)", padding: "120px 48px" }}>
          <style>{`
            .params-inner { max-width: 1440px; margin: 0 auto; }
            .params-grid {
              display: grid;
              grid-template-columns: repeat(4, 1fr);
              gap: 14px;
            }
            .params-wide { grid-column: span 2; }
            @media (max-width: 1100px) {
              .params-grid { grid-template-columns: repeat(2, 1fr); }
              .params-wide { grid-column: span 2; }
            }
            @media (max-width: 540px) {
              .params-grid { grid-template-columns: 1fr 1fr; gap: 10px; }
              .params-section { padding: 80px 20px !important; }
            }
          `}</style>
          <div className="params-inner">
            <Reveal>
              <div
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 12,
                  fontWeight: 500,
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--brand-oak)",
                  marginBottom: 48,
                }}
              >
                Parametry domu
              </div>
            </Reveal>
            <div className="params-grid">
              <Reveal delay={0}>
                <ParamCard value="121,87 m²" label="powierzchnia domu" />
              </Reveal>
              <Reveal delay={0.06}>
                <ParamCard value="ok. 450 m²" label="działka przy domu" />
              </Reveal>
              <Reveal delay={0.12}>
                <ParamCard
                  value="3 pokoje"
                  label="na 1. piętrze"
                  sub="w tym sypialnia z garderobą"
                />
              </Reveal>
              <Reveal delay={0.18}>
                <ParamCard
                  value="3 łazienki"
                  label="w domu"
                  sub="2 na piętrze + 1 na parterze"
                />
              </Reveal>
              <div className="params-wide">
                <Reveal delay={0.24}>
                  <ParamCard
                    value="garaż 21,97 m²"
                    label="w bryle budynku"
                    sub="wejście bezpośrednio z domu"
                    fill
                  />
                </Reveal>
              </div>
              <Reveal delay={0.3}>
                <ParamCard
                  value="0 zł PCC"
                  label="podatku do zapłaty"
                  sub="oszczędność ok. 12 600 zł"
                  dark
                />
              </Reveal>
              <Reveal delay={0.36}>
                <ParamCard value="marzec 2027" label="planowane zakończenie robót" />
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3. CO KUPUJESZ ───────────────────────────────────────────────── */}
        <section style={{ background: "#FFFFFF", padding: "120px 48px" }}>
          <style>{`
            .cokup-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 80px;
              align-items: center;
            }
            .cokup-photos {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 14px;
            }
            .cokup-photo {
              border-radius: var(--radius-lg);
              overflow: hidden;
              aspect-ratio: 3 / 4;
              background-size: cover;
              background-position: center;
              transition: transform 0.55s ease;
            }
            .cokup-photo-wrap { overflow: hidden; border-radius: var(--radius-lg); }
            .cokup-photo-wrap:hover .cokup-photo { transform: scale(1.04); }
            @media (max-width: 900px) {
              .cokup-inner { grid-template-columns: 1fr; gap: 48px; }
            }
            @media (max-width: 600px) {
              .cokup-section { padding: 80px 20px !important; }
            }
          `}</style>
          <div className="cokup-inner">
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
                  Co kupujesz?
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
                  Dom z własnym ogrodem i garażem
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
                  W Etapie 1 dostępne są 4 domy w zabudowie bliźniaczej, każdy
                  o powierzchni 121,87 m², z garażem w bryle budynku oraz działką
                  ok. 450 m². Każdy dom ma ten sam, funkcjonalny układ: część dzienną
                  na parterze oraz prywatną strefę sypialni na 1. piętrze.
                </p>
              </Reveal>
              <Reveal delay={0.14}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-secondary)",
                    margin: "0 0 20px",
                  }}
                >
                  W zależności od położenia w budynku układ domu występuje
                  w odbiciu lustrzanym. Dodatkowym atutem jest przestrzeń strychowa —
                  praktyczne miejsce na rzeczy sezonowe, walizki czy sprzęt sportowy.
                </p>
              </Reveal>
              <Reveal delay={0.18}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 14,
                    lineHeight: 1.7,
                    color: "var(--ink-tertiary)",
                    borderLeft: "2px solid var(--brand-sand)",
                    paddingLeft: 20,
                    margin: "32px 0 0",
                  }}
                >
                  Formalnie przedmiotem sprzedaży jest lokal mieszkalny w zabudowie
                  bliźniaczej wraz z przynależną działką.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.08}>
              <div className="cokup-photos">
                <div className="cokup-photo-wrap" style={{ marginTop: 40 }}>
                  <div
                    className="cokup-photo"
                    style={{ backgroundImage: "url(/assets/facade-grey.jpeg)" }}
                  />
                </div>
                <div className="cokup-photo-wrap">
                  <div
                    className="cokup-photo"
                    style={{ backgroundImage: "url(/assets/interior-1.jpeg)" }}
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 4. UKŁAD DOMU (INTERACTIVE TABS) ────────────────────────────── */}
        <section
          id="układ"
          style={{ background: "var(--surface-canvas)", padding: "120px 48px" }}
        >
          <style>{`
            .uklad-inner { max-width: 1440px; margin: 0 auto; }
            .uklad-layout {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 80px;
              align-items: start;
            }
            .uklad-tabs {
              display: flex;
              width: fit-content;
              border: 1.5px solid var(--line-soft);
              border-radius: var(--radius-pill);
              overflow: hidden;
              margin-bottom: 32px;
            }
            .uklad-tab {
              padding: 13px 32px;
              font-family: var(--font-sans);
              font-size: 14px;
              font-weight: 500;
              cursor: pointer;
              border: none;
              background: transparent;
              transition: background 220ms, color 220ms;
            }
            .uklad-tab-active {
              background: var(--surface-ink);
              color: var(--ink-inverse);
            }
            .uklad-tab-inactive {
              color: var(--ink-secondary);
            }
            .uklad-tab-inactive:hover { background: var(--surface-warm); }
            .uklad-room {
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              padding: 15px 0;
              border-bottom: 1px solid var(--line-hair);
              animation: roomFade 320ms var(--ease-out-quart) both;
            }
            @keyframes roomFade {
              from { opacity: 0; transform: translateX(-10px); }
              to   { opacity: 1; transform: translateX(0); }
            }
            .uklad-total {
              display: flex;
              align-items: baseline;
              justify-content: space-between;
              padding: 20px 0 0;
            }
            .uklad-floorplan {
              border-radius: var(--radius-xl);
              overflow: hidden;
              position: sticky;
              top: 100px;
            }
            .uklad-floorplan img {
              width: 100%;
              display: block;
              transition: transform 0.55s ease;
            }
            .uklad-floorplan:hover img { transform: scale(1.025); }
            @media (max-width: 900px) {
              .uklad-layout { grid-template-columns: 1fr; gap: 48px; }
              .uklad-floorplan { position: static; }
              .uklad-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="uklad-inner">
            <div style={{ marginBottom: 64 }}>
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
                  Układ domu
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
                    margin: 0,
                  }}
                >
                  Dwie strefy — codzienna i prywatna
                </h2>
              </Reveal>
            </div>

            <div className="uklad-layout">
              {/* Left: tabs + room list */}
              <div>
                <div className="uklad-tabs">
                  <button
                    className={`uklad-tab ${
                      activeFloor === "parter"
                        ? "uklad-tab-active"
                        : "uklad-tab-inactive"
                    }`}
                    onClick={() => setActiveFloor("parter")}
                  >
                    Parter
                  </button>
                  <button
                    className={`uklad-tab ${
                      activeFloor === "pietro"
                        ? "uklad-tab-active"
                        : "uklad-tab-inactive"
                    }`}
                    onClick={() => setActiveFloor("pietro")}
                  >
                    1. piętro
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    lineHeight: 1.7,
                    color: "var(--ink-secondary)",
                    marginBottom: 32,
                    maxWidth: "42ch",
                  }}
                >
                  {activeFloor === "parter"
                    ? "Wygodna strefa dzienna z salonem, jadalnią, kuchnią, łazienką, spiżarką, przedsionkiem i garażem w bryle budynku."
                    : "Spokojna, prywatna część domu. Trzy pokoje, dwie łazienki i garderoba przy głównej sypialni."}
                </p>

                <div>
                  {rooms.map((room, i) => (
                    <div
                      key={`${activeFloor}-${i}`}
                      className="uklad-room"
                      style={{ animationDelay: `${i * 35}ms` }}
                    >
                      <span
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 15,
                          color: "var(--ink-primary)",
                        }}
                      >
                        {room.name}
                      </span>
                      <span
                        style={{
                          fontFamily: "var(--font-serif)",
                          fontSize: "1.15rem",
                          letterSpacing: "-0.01em",
                          color: "var(--brand-oak)",
                        }}
                      >
                        {room.area}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="uklad-total">
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 12,
                      fontWeight: 600,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      color: "var(--ink-tertiary)",
                    }}
                  >
                    {totalLabel}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "1.5rem",
                      letterSpacing: "-0.02em",
                      color: "var(--ink-primary)",
                    }}
                  >
                    {total}
                  </span>
                </div>
              </div>

              {/* Right: floor plan */}
              <Reveal delay={0.1}>
                <div className="uklad-floorplan">
                  <img src="/assets/floor-plans.jpg" alt="Rzut kondygnacji" />
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 5. STANDARD DEWELOPERSKI+ ─────────────────────────────────────── */}
        <section style={{ background: "var(--surface-ink)", padding: "120px 48px" }}>
          <style>{`
            .std-inner { max-width: 1440px; margin: 0 auto; }
            .std-header { max-width: 720px; margin: 0 auto 64px; text-align: center; }
            .std-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 2px;
              background: var(--line-dark);
              border: 1px solid var(--line-dark);
              border-radius: var(--radius-lg);
              overflow: hidden;
            }
            .std-cat { background: var(--surface-ink-warm); }
            .std-cat-btn {
              display: flex;
              align-items: center;
              justify-content: space-between;
              width: 100%;
              padding: 32px 40px;
              border: none;
              background: transparent;
              text-align: left;
              cursor: pointer;
              transition: background 200ms;
            }
            .std-cat-btn:hover { background: rgba(255,255,255,0.025); }
            .std-body {
              overflow: hidden;
              transition: max-height 420ms var(--ease-out-quart);
            }
            .std-items { padding: 0 40px 32px; display: flex; flex-direction: column; gap: 11px; }
            .std-plus {
              width: 30px; height: 30px;
              border: 1px solid rgba(255,255,255,0.14);
              border-radius: 50%;
              display: flex; align-items: center; justify-content: center;
              font-size: 18px; line-height: 1;
              color: rgba(255,255,255,0.45);
              flex-shrink: 0;
              transition: transform 320ms var(--ease-out-quart), border-color 220ms, color 220ms;
            }
            .std-plus-open {
              transform: rotate(45deg);
              border-color: var(--brand-sand);
              color: var(--brand-sand);
            }
            @media (max-width: 768px) {
              .std-grid { grid-template-columns: 1fr; }
              .std-section { padding: 80px 20px !important; }
              .std-cat-btn { padding: 28px 24px; }
              .std-items { padding: 0 24px 28px; }
            }
          `}</style>

          <div className="std-inner">
            <div className="std-header">
              <Reveal>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--brand-sand)",
                    marginBottom: 24,
                  }}
                >
                  Standard deweloperski+
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
                    color: "var(--ink-inverse)",
                    margin: "0 0 24px",
                  }}
                >
                  Więcej niż podstawowy stan deweloperski
                </h2>
              </Reveal>
              <Reveal delay={0.12}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.75,
                    color: "var(--ink-inverse-secondary)",
                    margin: 0,
                  }}
                >
                  Po odbiorze nie zaczynasz od porządkowania placu budowy.
                  Otrzymujesz dom z gotową elewacją, ogrodzeniem, podjazdem,
                  tarasem i uporządkowanym terenem wokół budynku.
                </p>
              </Reveal>
            </div>

            <Reveal delay={0.1}>
              <div className="std-grid">
                {standardCategories.map((cat) => {
                  const isOpen = openCategory === cat.id;
                  return (
                    <div key={cat.id} className="std-cat">
                      <button
                        className="std-cat-btn"
                        onClick={() =>
                          setOpenCategory(isOpen ? null : cat.id)
                        }
                        aria-expanded={isOpen}
                      >
                        <div>
                          <div
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 11,
                              fontWeight: 600,
                              letterSpacing: "0.14em",
                              textTransform: "uppercase",
                              color: "var(--brand-sand)",
                              marginBottom: 6,
                            }}
                          >
                            {cat.items.length} elementów
                          </div>
                          <div
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 16,
                              fontWeight: 500,
                              color: "var(--ink-inverse)",
                            }}
                          >
                            {cat.label}
                          </div>
                        </div>
                        <span
                          className={`std-plus ${isOpen ? "std-plus-open" : ""}`}
                        >
                          +
                        </span>
                      </button>
                      <div
                        className="std-body"
                        style={{ maxHeight: isOpen ? "600px" : "0px" }}
                      >
                        <div className="std-items">
                          {cat.items.map((item, i) => (
                            <div
                              key={i}
                              style={{
                                display: "flex",
                                alignItems: "flex-start",
                                gap: 12,
                                fontFamily: "var(--font-sans)",
                                fontSize: 14,
                                lineHeight: 1.55,
                                color: "var(--ink-inverse-secondary)",
                              }}
                            >
                              <span
                                style={{
                                  width: 4,
                                  height: 4,
                                  borderRadius: "50%",
                                  background: "var(--brand-sand)",
                                  flexShrink: 0,
                                  marginTop: 7,
                                }}
                              />
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 6. CENA ──────────────────────────────────────────────────────── */}
        <section style={{ background: "var(--surface-canvas)", padding: "120px 48px" }}>
          <style>{`
            .cena-inner { max-width: 1440px; margin: 0 auto; }
            .cena-grid {
              display: grid;
              grid-template-columns: 1.2fr 1fr;
              gap: 60px;
              align-items: center;
            }
            @media (max-width: 900px) {
              .cena-grid { grid-template-columns: 1fr; gap: 48px; }
              .cena-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="cena-inner">
            <div className="cena-grid">
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
                    Cena
                  </div>
                </Reveal>
                <Reveal delay={0.06}>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(3.5rem, 7vw, 7rem)",
                      fontWeight: 400,
                      lineHeight: 1,
                      letterSpacing: "-0.04em",
                      color: "var(--ink-primary)",
                      margin: "0 0 8px",
                    }}
                  >
                    630 000 zł
                  </div>
                </Reveal>
                <Reveal delay={0.1}>
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      color: "var(--ink-secondary)",
                      marginBottom: 40,
                    }}
                  >
                    brutto · cena obowiązuje w Etapie 1
                  </div>
                </Reveal>
                <Reveal delay={0.14}>
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
                    Cena obejmuje dom o powierzchni 121,87 m², garaż w bryle
                    budynku, działkę ok. 450 m² oraz pełny standard
                    deweloperski+ opisany w ofercie.
                  </p>
                </Reveal>
                <Reveal delay={0.18}>
                  <Button as="a" href="/#kontakt" variant="primary" size="lg">
                    Zapytaj o aktualną dostępność
                  </Button>
                </Reveal>
              </div>

              {/* PCC savings card */}
              <Reveal delay={0.12}>
                <div
                  style={{
                    background: "var(--surface-ink)",
                    borderRadius: "var(--radius-xl)",
                    padding: "52px 48px",
                    display: "flex",
                    flexDirection: "column",
                    gap: 24,
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.16em",
                      textTransform: "uppercase",
                      color: "var(--brand-sand)",
                    }}
                  >
                    Oszczędność na podatku PCC
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(2rem, 3.5vw, 3.2rem)",
                      fontWeight: 400,
                      color: "#fff",
                      letterSpacing: "-0.03em",
                      lineHeight: 1,
                    }}
                  >
                    0 zł PCC
                  </div>
                  <p
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 15,
                      lineHeight: 1.7,
                      color: "var(--ink-inverse-secondary)",
                      margin: 0,
                    }}
                  >
                    Kupujący nie płaci podatku PCC — zakup odbywa się od
                    dewelopera. Przy cenie 630 000 zł to oszczędność{" "}
                    <strong
                      style={{ color: "var(--brand-sand)", fontWeight: 600 }}
                    >
                      ok. 12 600 zł
                    </strong>{" "}
                    względem zakupu z rynku wtórnego.
                  </p>
                  <div
                    style={{
                      paddingTop: 20,
                      borderTop: "1px solid var(--line-dark)",
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      lineHeight: 1.65,
                      color: "rgba(250,247,242,0.38)",
                    }}
                  >
                    Sprzedaż z wykorzystaniem mieszkaniowego rachunku
                    powierniczego. Możliwość finansowania kredytem hipotecznym.
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 7. PROCES ZAKUPU ─────────────────────────────────────────────── */}
        <section style={{ background: "#FFFFFF", padding: "120px 48px" }}>
          <style>{`
            .proces-inner { max-width: 1440px; margin: 0 auto; }
            .proces-header { max-width: 560px; margin: 0 auto 72px; text-align: center; }
            .proces-steps {
              display: grid;
              grid-template-columns: repeat(5, 1fr);
            }
            .proces-step {
              display: flex;
              flex-direction: column;
              gap: 16px;
              padding: 36px 28px;
              border-left: 1px solid var(--line-hair);
              transition: background 220ms;
              cursor: default;
            }
            .proces-step:hover { background: var(--surface-canvas); }
            .proces-step:first-child { border-left: none; padding-left: 0; }
            @media (max-width: 1100px) {
              .proces-steps { grid-template-columns: 1fr 1fr; }
              .proces-step { border-left: none; border-top: 1px solid var(--line-hair); }
              .proces-step:first-child { border-top: none; padding-left: 28px; }
            }
            @media (max-width: 600px) {
              .proces-steps { grid-template-columns: 1fr; }
              .proces-step { padding: 28px 0; }
              .proces-step:first-child { padding-left: 0; }
              .proces-section { padding: 80px 20px !important; }
            }
          `}</style>

          <div className="proces-inner">
            <div className="proces-header">
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
                  Rezerwacja i zakup
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
                  Jak wygląda proces zakupu?
                </h2>
              </Reveal>
            </div>

            <div className="proces-steps">
              {processSteps.map((step, i) => (
                <Reveal key={step.n} delay={i * 0.08}>
                  <div className="proces-step">
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
                      {step.n}
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
                      {step.title}
                    </div>
                    <p
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 14,
                        lineHeight: 1.7,
                        color: "var(--ink-secondary)",
                        margin: 0,
                      }}
                    >
                      {step.body}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ── 8. KARTA DOMU + FINAL CTA ────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-ink)",
            padding: "120px 48px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <style>{`
            .karta-inner { max-width: 1440px; margin: 0 auto; }
            .karta-grid {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 24px;
            }
            .karta-card {
              border: 1px solid var(--line-dark);
              border-radius: var(--radius-xl);
              padding: 56px 52px;
              display: flex;
              flex-direction: column;
              gap: 24px;
            }
            @media (max-width: 900px) {
              .karta-grid { grid-template-columns: 1fr; }
              .karta-section { padding: 80px 20px !important; }
              .karta-card { padding: 40px 32px; }
            }
          `}</style>

          <div className="karta-inner">
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

            <div className="karta-grid">
              <Reveal delay={0}>
                <div className="karta-card">
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
                    Chcesz zobaczyć dokładny układ domu?
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
                    Poproś o kartę domu z rzutami, tabelą pomieszczeń,
                    standardem i podstawowymi informacjami o ofercie.
                  </p>
                  <div>
                    <Button
                      as="a"
                      href="/#kontakt"
                      variant="outline-inverse"
                      size="md"
                    >
                      Poproś o kartę domu
                    </Button>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div
                  className="karta-card"
                  style={{ background: "rgba(250,247,242,0.05)" }}
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
                    Zapytaj o dom w Etapie 1
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
                    Skontaktuj się, aby sprawdzić aktualną dostępność, poznać
                    szczegóły rezerwacji i umówić prezentację inwestycji.
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    <Button
                      as="a"
                      href="/#kontakt"
                      variant="primary-inverse"
                      size="md"
                    >
                      Zapytaj o dostępność domu
                    </Button>
                    <Button
                      as="a"
                      href="/#kontakt"
                      variant="ghost"
                      size="md"
                    >
                      Umów prezentację inwestycji →
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
