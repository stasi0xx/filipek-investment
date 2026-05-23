"use client";

import { useState } from "react";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import Reveal from "@/components/Reveal";
import Button from "@/components/Button";
import Cursor from "@/components/Cursor";

// ─── Data ─────────────────────────────────────────────────────────────────────

const topics = [
  "Dostępność domów w Etapie 1",
  "Układ domu i powierzchnie pomieszczeń",
  "Standard deweloperski+",
  "Proces rezerwacji",
  "Finansowanie kredytem hipotecznym",
  "Planowany termin realizacji",
  "Możliwość prezentacji lokalizacji",
];

// ─── Form ─────────────────────────────────────────────────────────────────────

function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    message:
      "Dzień dobry, proszę o kontakt w sprawie dostępności domów w inwestycji Nowy Relax.",
    consent: false,
  });
  const [sent, setSent] = useState(false);
  const [focused, setFocused] = useState<string | null>(null);

  const field = (name: string): React.CSSProperties => ({
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    lineHeight: 1.5,
    padding: "14px 18px",
    borderRadius: "var(--radius-md)",
    border: `1px solid ${focused === name ? "var(--brand-oak)" : "var(--line-soft)"}`,
    background: "#FFFFFF",
    outline: "none",
    width: "100%",
    color: "var(--ink-primary)",
    transition: "border-color 200ms",
    boxSizing: "border-box",
  });

  const label: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    letterSpacing: "0.04em",
    color: "var(--ink-secondary)",
    marginBottom: 7,
    display: "block",
  };

  if (sent) {
    return (
      <div
        style={{
          padding: "80px 0",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            width: 56,
            height: 56,
            borderRadius: "50%",
            background: "var(--surface-canvas)",
            border: "1px solid var(--line-soft)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 28,
            fontSize: 22,
          }}
        >
          ✓
        </div>
        <div
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(2rem, 4vw, 3rem)",
            fontWeight: 400,
            lineHeight: 1.1,
            letterSpacing: "-0.02em",
            color: "var(--ink-primary)",
            marginBottom: 16,
          }}
        >
          Dziękujemy.
        </div>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 16,
            lineHeight: 1.7,
            color: "var(--ink-secondary)",
            maxWidth: "36ch",
          }}
        >
          Odezwiemy się tak szybko, jak to możliwe — zwykle w ciągu
          kilku godzin.
        </p>
      </div>
    );
  }

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      style={{ display: "flex", flexDirection: "column", gap: 20 }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 16,
        }}
        className="form-row"
      >
        <label style={{ display: "flex", flexDirection: "column" }}>
          <span style={label}>Imię i nazwisko</span>
          <input
            type="text"
            required
            placeholder="Anna Kowalska"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            onFocus={() => setFocused("name")}
            onBlur={() => setFocused(null)}
            style={field("name")}
          />
        </label>

        <label style={{ display: "flex", flexDirection: "column" }}>
          <span style={label}>Numer telefonu</span>
          <input
            type="tel"
            required
            placeholder="+48 500 000 000"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            onFocus={() => setFocused("phone")}
            onBlur={() => setFocused(null)}
            style={field("phone")}
          />
        </label>
      </div>

      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={label}>Adres e-mail</span>
        <input
          type="email"
          required
          placeholder="anna@example.com"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          onFocus={() => setFocused("email")}
          onBlur={() => setFocused(null)}
          style={field("email")}
        />
      </label>

      <label style={{ display: "flex", flexDirection: "column" }}>
        <span style={label}>Wiadomość</span>
        <textarea
          rows={4}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          onFocus={() => setFocused("message")}
          onBlur={() => setFocused(null)}
          style={{ ...field("message"), resize: "vertical" }}
        />
      </label>

      {/* Consent */}
      <label
        style={{
          display: "flex",
          alignItems: "flex-start",
          gap: 12,
          cursor: "pointer",
        }}
      >
        <div
          style={{
            width: 18,
            height: 18,
            minWidth: 18,
            borderRadius: 4,
            border: `1.5px solid ${form.consent ? "var(--brand-oak)" : "var(--line-soft)"}`,
            background: form.consent ? "var(--brand-oak)" : "#FFFFFF",
            marginTop: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            transition: "border-color 180ms, background 180ms",
            cursor: "pointer",
          }}
          onClick={() => setForm({ ...form, consent: !form.consent })}
        >
          {form.consent && (
            <svg
              width="10"
              height="8"
              viewBox="0 0 10 8"
              fill="none"
            >
              <path
                d="M1 4L3.8 7L9 1"
                stroke="#FAF7F2"
                strokeWidth="1.6"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </div>
        <input
          type="checkbox"
          required
          checked={form.consent}
          onChange={(e) => setForm({ ...form, consent: e.target.checked })}
          style={{ display: "none" }}
        />
        <span
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 13,
            lineHeight: 1.6,
            color: "var(--ink-tertiary)",
          }}
        >
          Wyrażam zgodę na kontakt w celu obsługi zapytania dotyczącego
          inwestycji Nowy Relax.
        </span>
      </label>

      <button
        type="submit"
        style={{
          marginTop: 4,
          background: "var(--surface-ink)",
          color: "var(--ink-inverse)",
          border: "none",
          padding: "18px 36px",
          borderRadius: "var(--radius-pill)",
          fontFamily: "var(--font-sans)",
          fontSize: 15,
          fontWeight: 500,
          cursor: "pointer",
          width: "100%",
          letterSpacing: "0.01em",
          transition: "opacity 180ms, transform 120ms",
        }}
        onMouseEnter={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "0.88";
        }}
        onMouseLeave={(e) => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
        }}
      >
        Wyślij zapytanie
      </button>
    </form>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function KontaktPage() {
  return (
    <>
      <Cursor />
      <Nav />
      <main>

        {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
        <section
          className="ktk-hero-section"
          style={{
            position: "relative",
            background: "var(--surface-ink)",
            minHeight: "72vh",
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-end",
            paddingBottom: 96,
            overflow: "hidden",
          }}
        >
          <style>{`
            .ktk-hero-inner {
              position: relative;
              z-index: 1;
              width: 100%;
              max-width: 1440px;
              margin: 0 auto;
              padding: 0 48px;
              display: grid;
              grid-template-columns: 1fr 380px;
              gap: 56px;
              align-items: flex-end;
            }
            @media (max-width: 1100px) {
              .ktk-hero-section { padding-top: 88px; }
              .ktk-hero-inner {
                grid-template-columns: 1fr;
                gap: 40px;
                padding: 0 24px;
              }
            }
            @media (max-width: 600px) {
              .ktk-hero-section { padding-top: 80px; }
              .ktk-hero-inner { padding: 0 20px; gap: 28px; }
              .ktk-contact-card { padding: 28px 24px !important; }
            }
          `}</style>

          {/* Background */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              backgroundImage: "url(/assets/hero-nowy-relax.jpeg)",
              backgroundSize: "cover",
              backgroundPosition: "center 45%",
            }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background:
                "linear-gradient(to top, rgba(20,19,15,0.97) 0%, rgba(20,19,15,0.6) 50%, rgba(20,19,15,0.3) 100%)",
            }}
          />

          <div className="ktk-hero-inner">
            {/* Left */}
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
                  Kontakt · Nowy Relax
                </div>
              </Reveal>

              <Reveal delay={0.07}>
                <h1
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(3.2rem, 7vw, 7rem)",
                    fontWeight: 400,
                    lineHeight: 0.97,
                    letterSpacing: "-0.03em",
                    color: "var(--ink-inverse)",
                    margin: "0 0 36px",
                  }}
                >
                  Skontaktuj się{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                    z nami
                  </em>
                </h1>
              </Reveal>

              <Reveal delay={0.13}>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 17,
                    lineHeight: 1.75,
                    color: "rgba(250,247,242,0.72)",
                    maxWidth: "50ch",
                    margin: 0,
                  }}
                >
                  Napisz lub zadzwoń. Odpowiemy na pytania i pomożemy przejść
                  przez kolejne kroki.
                </p>
              </Reveal>
            </div>

            {/* Right: contact card */}
            <Reveal delay={0.18}>
              <div
                className="ktk-contact-card"
                style={{
                  background: "rgba(250,247,242,0.07)",
                  backdropFilter: "blur(24px) saturate(130%)",
                  WebkitBackdropFilter: "blur(24px) saturate(130%)",
                  border: "1px solid rgba(250,247,242,0.13)",
                  borderRadius: "var(--radius-xl)",
                  padding: "40px 44px",
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
                    marginBottom: 32,
                  }}
                >
                  Dane kontaktowe
                </div>

                {[
                  { label: "Telefon", value: "+48 692 404 796", href: "tel:+48692404796" },
                  { label: "E-mail", value: "nowyrelax@fi-invest.pl", href: "mailto:nowyrelax@fi-invest.pl" },
                  { label: "Inwestor", value: "Filipek Investment\nSp. z o.o.", href: null },
                ].map((c, i) => (
                  <div
                    key={c.label}
                    style={{
                      paddingTop: i === 0 ? 0 : 24,
                      marginTop: i === 0 ? 0 : 24,
                      borderTop:
                        i === 0 ? "none" : "1px solid rgba(250,247,242,0.1)",
                    }}
                  >
                    <div
                      style={{
                        fontFamily: "var(--font-sans)",
                        fontSize: 11,
                        fontWeight: 500,
                        letterSpacing: "0.1em",
                        textTransform: "uppercase",
                        color: "rgba(250,247,242,0.4)",
                        marginBottom: 6,
                      }}
                    >
                      {c.label}
                    </div>
                    {c.href ? (
                      <a
                        href={c.href}
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 15,
                          color: "#FFFFFF",
                          textDecoration: "none",
                          lineHeight: 1.5,
                          whiteSpace: "pre-line",
                          transition: "color 180ms",
                        }}
                        onMouseEnter={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "var(--brand-sand)")
                        }
                        onMouseLeave={(e) =>
                          ((e.currentTarget as HTMLElement).style.color =
                            "#FFFFFF")
                        }
                      >
                        {c.value}
                      </a>
                    ) : (
                      <div
                        style={{
                          fontFamily: "var(--font-sans)",
                          fontSize: 15,
                          color: "#FFFFFF",
                          lineHeight: 1.5,
                          whiteSpace: "pre-line",
                        }}
                      >
                        {c.value}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        {/* ── 2. FORM + TOPICS ────────────────────────────────────────────── */}
        <section
          style={{
            background: "var(--surface-canvas)",
            padding: "120px 48px",
          }}
        >
          <style>{`
            .ktk-main-inner {
              max-width: 1440px;
              margin: 0 auto;
              display: grid;
              grid-template-columns: 1fr 440px;
              gap: 80px;
              align-items: start;
            }
            .ktk-form-card {
              background: #FFFFFF;
              border: 1px solid var(--line-hair);
              border-radius: var(--radius-xl);
              padding: 56px 52px;
            }
            .form-row {
              grid-template-columns: 1fr 1fr;
            }
            @media (max-width: 1100px) {
              .ktk-main-inner {
                grid-template-columns: 1fr;
                gap: 64px;
              }
            }
            @media (max-width: 600px) {
              .ktk-main-inner { gap: 52px; }
              .ktk-form-card {
                padding: 36px 28px;
              }
              .form-row {
                grid-template-columns: 1fr !important;
              }
            }
          `}</style>

          <div className="ktk-main-inner">
            {/* Left: form */}
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
                  Zapytaj o Nowy Relax
                </div>
              </Reveal>

              <Reveal delay={0.06}>
                <h2
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(2.2rem, 3.5vw, 3.4rem)",
                    fontWeight: 400,
                    lineHeight: 1.08,
                    letterSpacing: "-0.025em",
                    color: "var(--ink-primary)",
                    margin: "0 0 20px",
                  }}
                >
                  Chcesz zapytać{" "}
                  <em style={{ fontStyle: "italic", color: "var(--brand-oak)" }}>
                    o dostępność?
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
                    margin: "0 0 48px",
                    maxWidth: "48ch",
                  }}
                >
                  Chcesz zapytać o dostępność domów, standard deweloperski+,
                  rezerwację albo możliwość finansowania zakupu? Odpowiemy na
                  pytania i pomożemy przejść przez kolejne kroki.
                </p>
              </Reveal>

              <Reveal delay={0.14}>
                <div className="ktk-form-card">
                  <ContactForm />
                </div>
              </Reveal>
            </div>

            {/* Right: contact details + topics */}
            <div style={{ paddingTop: 88 }}>
              {/* Contact data */}
              <Reveal delay={0.08}>
                <div
                  style={{
                    marginBottom: 56,
                  }}
                >
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
                    Dane kontaktowe
                  </div>

                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 1,
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      border: "1px solid var(--line-hair)",
                    }}
                  >
                    {[
                      {
                        label: "Telefon",
                        value: "+48 692 404 796",
                        href: "tel:+48692404796",
                      },
                      {
                        label: "E-mail",
                        value: "nowyrelax@fi-invest.pl",
                        href: "mailto:nowyrelax@fi-invest.pl",
                      },
                      {
                        label: "Inwestor",
                        value: "Filipek Investment Sp. z o.o.",
                        href: null,
                      },
                    ].map((c) => (
                      <div
                        key={c.label}
                        style={{
                          background: "#FFFFFF",
                          padding: "18px 24px",
                          display: "flex",
                          flexDirection: "column",
                          gap: 5,
                        }}
                      >
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: 11,
                            fontWeight: 500,
                            letterSpacing: "0.1em",
                            textTransform: "uppercase",
                            color: "var(--ink-tertiary)",
                          }}
                        >
                          {c.label}
                        </span>
                        {c.href ? (
                          <a
                            href={c.href}
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 15,
                              fontWeight: 500,
                              color: "var(--ink-primary)",
                              textDecoration: "none",
                              transition: "color 180ms",
                            }}
                            onMouseEnter={(e) =>
                              ((
                                e.currentTarget as HTMLElement
                              ).style.color = "var(--brand-oak)")
                            }
                            onMouseLeave={(e) =>
                              ((
                                e.currentTarget as HTMLElement
                              ).style.color = "var(--ink-primary)")
                            }
                          >
                            {c.value}
                          </a>
                        ) : (
                          <span
                            style={{
                              fontFamily: "var(--font-sans)",
                              fontSize: 15,
                              fontWeight: 500,
                              color: "var(--ink-primary)",
                            }}
                          >
                            {c.value}
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>

              {/* Topics list */}
              <Reveal delay={0.14}>
                <div>
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
                    Co możemy omówić?
                  </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      gap: 0,
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                      border: "1px solid var(--line-hair)",
                    }}
                  >
                    {topics.map((t, i) => (
                      <div
                        key={t}
                        style={{
                          background: i % 2 === 0 ? "#FFFFFF" : "var(--surface-canvas)",
                          padding: "16px 24px",
                          display: "flex",
                          alignItems: "center",
                          gap: 14,
                          borderTop:
                            i === 0 ? "none" : "1px solid var(--line-hair)",
                        }}
                      >
                        <div
                          style={{
                            width: 6,
                            height: 6,
                            borderRadius: "50%",
                            background: "var(--brand-oak)",
                            opacity: 0.5,
                            flexShrink: 0,
                          }}
                        />
                        <span
                          style={{
                            fontFamily: "var(--font-sans)",
                            fontSize: 14,
                            lineHeight: 1.5,
                            color: "var(--ink-secondary)",
                          }}
                        >
                          {t}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* ── 3. PRESENTATION CTA ─────────────────────────────────────────── */}
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
            .ktk-cta-bg {
              position: absolute;
              inset: 0;
              background-image: url(/assets/exterior-1.jpeg);
              background-size: cover;
              background-position: center 40%;
              opacity: 0.3;
            }
            .ktk-cta-inner {
              position: relative;
              z-index: 1;
              max-width: 720px;
              margin: 0 auto;
              display: flex;
              flex-direction: column;
              align-items: center;
            }
            .ktk-cta-rule {
              width: 1px;
              height: 56px;
              background: linear-gradient(to bottom, transparent, rgba(201,184,150,0.4), transparent);
              margin: 0 auto 52px;
            }
            .ktk-cta-actions {
              display: flex;
              align-items: center;
              justify-content: center;
              gap: 16px;
              flex-wrap: wrap;
            }
            @media (max-width: 600px) {
              .ktk-cta-actions {
                flex-direction: column;
                width: 100%;
              }
              .ktk-cta-actions > * {
                width: 100%;
                justify-content: center;
              }
            }
          `}</style>

          <div className="ktk-cta-bg" />

          <div className="ktk-cta-inner">
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
                  fontSize: "clamp(2.6rem, 5.5vw, 5rem)",
                  fontWeight: 400,
                  lineHeight: 1.06,
                  letterSpacing: "-0.03em",
                  color: "#FAF7F2",
                  margin: "0 0 32px",
                }}
              >
                Umów{" "}
                <em style={{ fontStyle: "italic", color: "var(--brand-sand)" }}>
                  prezentację
                </em>{" "}
                inwestycji
              </h2>
            </Reveal>

            <Reveal delay={0.13}>
              <div className="ktk-cta-rule" />
            </Reveal>

            <Reveal delay={0.18}>
              <p
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 17,
                  lineHeight: 1.75,
                  color: "rgba(250,247,242,0.8)",
                  maxWidth: "46ch",
                  margin: "0 0 52px",
                }}
              >
                Najlepiej poznać lokalizację i układ inwestycji w rozmowie.
                Skontaktuj się z nami, a odpowiemy na pytania i pokażemy, które
                domy są aktualnie dostępne.
              </p>
            </Reveal>

            <Reveal delay={0.24}>
              <div className="ktk-cta-actions">
                <Button as="a" href="tel:+48692404796" variant="primary-inverse" size="lg">
                  Umów prezentację inwestycji
                </Button>
                <Button as="a" href="mailto:nowyrelax@fi-invest.pl" variant="outline-inverse" size="lg">
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
