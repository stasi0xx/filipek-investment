"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const CONTACTS = [
  { label: "Adres", value: "Cicibór Duży,\nwoj. lubelskie" },
  { label: "Telefon", value: "+48 500 000 000" },
  { label: "E-mail", value: "biuro@filipek-investment.pl" },
];

export default function Kontakt() {
  const [state, setState] = useState({ name: "", phone: "", message: "", sent: false });

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    padding: "14px 16px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--line-soft)",
    background: "var(--surface-canvas)",
    outline: "none",
    width: "100%",
    color: "var(--ink-primary)",
    transition: "border-color var(--dur-base)",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    color: "var(--ink-secondary)",
    marginBottom: 6,
    display: "block",
    letterSpacing: "0.02em",
  };

  return (
    <section
      id="kontakt"
      className=" py-24 md:py-40 rounded-2xl md:rounded-none"
      style={{ background: "var(--surface-canvas)", marginTop: 100 }}
    >
      <div
        className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-24 px-6 sm:px-10 md:px-12"
        style={{ maxWidth: 1200, margin: "0 auto" }}
      >
        {/* Left */}
        <div>
          <Reveal>
            <div
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--brand-oak)",
                marginBottom: 16,
                marginTop: 50,
                marginLeft: 10,
              }}
            >
              Kontakt
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2rem, 8vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                color: "var(--ink-primary)",
                marginBottom: 20,
                marginLeft: 10
              }}
            >
              Zapytaj<br />o swój dom.
            </h2>
          </Reveal>

          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 16,
                lineHeight: 1.6,
                color: "var(--ink-secondary)",
                marginBottom: 32,
                marginLeft: 10,
                marginRight: 10
              }}
            >
              Oddzwonimy w ciągu 24 godzin. Zaproponujemy spokojną prezentację na miejscu — bez pośpiechu i bez zobowiązań.
            </p>
          </Reveal>

          {/* Contact info — 3-col compact grid */}
          <Reveal delay={0.2}>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(3, 1fr)",
                gap: 1,
                borderRadius: "var(--radius-md)",
                overflow: "hidden",
                border: "1px solid var(--line-soft)",
                marginRight: 10,
                marginLeft: 10,
              }}
            >
              {CONTACTS.map((c) => (
                <div
                  key={c.label}
                  style={{
                    background: "var(--surface-raised)",
                    padding: "14px 12px",
                  }}
                >
                  <span
                    style={{
                      color: "var(--ink-tertiary)",
                      fontSize: 10,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 6,
                      fontFamily: "var(--font-sans)",
                    }}
                  >
                    {c.label}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-sans)",
                      fontSize: 13,
                      color: "var(--ink-primary)",
                      lineHeight: 1.4,
                      whiteSpace: "pre-line",
                    }}
                  >
                    {c.value}
                  </span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Form card */}
        <Reveal delay={0.15}>
          <div
            style={{
              background: "var(--surface-raised)",
              borderRadius: "var(--radius-lg)",
              padding: "clamp(20px, 6vw, 48px)",
              boxShadow: "var(--shadow-lift)",
              marginTop: 50,
              marginBottom: 50,
              marginRight: 10,
              marginLeft: 10,
            }}
          >
            {state.sent ? (
              <div style={{ padding: "60px 0", textAlign: "center" }}>
                <div
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: 42,
                    color: "var(--ink-primary)",
                    marginBottom: 12,
                    letterSpacing: "-0.02em",
                  }}
                >
                  Dziękujemy.
                </div>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    color: "var(--ink-secondary)",
                  }}
                >
                  Oddzwonimy w ciągu 24 godzin.
                </p>
              </div>
            ) : (
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setState({ ...state, sent: true });
                }}
                style={{ display: "flex", flexDirection: "column", gap: 16 }}
              >
                <label style={{ display: "flex", flexDirection: "column" }}>
                  <span style={labelStyle}>Imię</span>
                  <input
                    type="text"
                    required
                    placeholder="Anna Kowalska"
                    value={state.name}
                    onChange={(e) => setState({ ...state, name: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--brand-oak)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--line-soft)")}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column" }}>
                  <span style={labelStyle}>Telefon</span>
                  <input
                    type="tel"
                    required
                    placeholder="+48 500 000 000"
                    value={state.phone}
                    onChange={(e) => setState({ ...state, phone: e.target.value })}
                    style={inputStyle}
                    onFocus={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--brand-oak)")}
                    onBlur={(e) => ((e.target as HTMLInputElement).style.borderColor = "var(--line-soft)")}
                  />
                </label>

                <label style={{ display: "flex", flexDirection: "column" }}>
                  <span style={labelStyle}>Wiadomość (opcjonalnie)</span>
                  <textarea
                    placeholder="Chciałabym zobaczyć dom A4…"
                    rows={3}
                    value={state.message}
                    onChange={(e) => setState({ ...state, message: e.target.value })}
                    style={{ ...inputStyle, resize: "vertical" }}
                    onFocus={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--brand-oak)")}
                    onBlur={(e) => ((e.target as HTMLTextAreaElement).style.borderColor = "var(--line-soft)")}
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: 4,
                    background: "var(--surface-ink)",
                    color: "var(--ink-inverse)",
                    border: "none",
                    padding: "16px 28px",
                    borderRadius: "var(--radius-pill)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: "pointer",
                    width: "100%",
                    transition: "background var(--dur-base)",
                  }}
                  onMouseEnter={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--ink-primary)")}
                  onMouseLeave={(e) => ((e.currentTarget as HTMLElement).style.background = "var(--surface-ink)")}
                >
                  Wyślij zapytanie
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 11,
                    color: "var(--ink-tertiary)",
                    lineHeight: 1.5,
                    textAlign: "center",
                  }}
                >
                  Wysyłając formularz zgadzasz się na kontakt w sprawie inwestycji Nowy Relax.
                </p>
              </form>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
