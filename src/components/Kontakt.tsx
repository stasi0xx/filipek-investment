"use client";

import { useState } from "react";
import Reveal from "./Reveal";

export default function Kontakt() {
  const [state, setState] = useState({ name: "", phone: "", message: "", sent: false });

  const inputStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 15,
    padding: "14px 16px",
    borderRadius: "var(--radius-md)",
    border: "1px solid var(--line-soft)",
    background: "var(--surface-raised)",
    outline: "none",
    width: "100%",
    color: "var(--ink-primary)",
    transition: "border-color var(--dur-base)",
  };

  const labelStyle: React.CSSProperties = {
    fontFamily: "var(--font-sans)",
    fontSize: 12,
    fontWeight: 500,
    color: "var(--ink-primary)",
    marginBottom: 8,
    display: "block",
  };

  return (
    <section
      id="kontakt"
      style={{ padding: "160px 48px", background: "var(--surface-canvas)" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1fr 1.1fr",
          gap: 96,
        }}
      >
        {/* Left */}
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
              Kontakt
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
                fontWeight: 400,
                color: "var(--ink-primary)",
                marginBottom: 32,
              }}
            >
              Zapytaj<br />o swój dom.
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 17,
                lineHeight: 1.6,
                color: "var(--ink-secondary)",
                maxWidth: "40ch",
                marginBottom: 48,
              }}
            >
              Oddzwonimy w ciągu 24 godzin. Zaproponujemy spokojną prezentację na miejscu — bez pośpiechu i bez zobowiązań.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 18,
                fontSize: 15,
                color: "var(--ink-primary)",
                fontFamily: "var(--font-sans)",
              }}
            >
              {[
                { label: "Adres",   value: "Cicibór Duży, woj. lubelskie" },
                { label: "Telefon", value: "+48 500 000 000" },
                { label: "E-mail",  value: "biuro@filipek-investment.pl" },
              ].map((c) => (
                <div key={c.label}>
                  <span
                    style={{
                      color: "var(--ink-tertiary)",
                      fontSize: 11,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      display: "block",
                      marginBottom: 4,
                    }}
                  >
                    {c.label}
                  </span>
                  {c.value}
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
              padding: "48px",
              boxShadow: "var(--shadow-lift)",
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
                style={{ display: "flex", flexDirection: "column", gap: 20 }}
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
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = "var(--brand-oak)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = "var(--line-soft)")
                    }
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
                    onFocus={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = "var(--brand-oak)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLInputElement).style.borderColor = "var(--line-soft)")
                    }
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
                    onFocus={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--brand-oak)")
                    }
                    onBlur={(e) =>
                      ((e.target as HTMLTextAreaElement).style.borderColor = "var(--line-soft)")
                    }
                  />
                </label>

                <button
                  type="submit"
                  style={{
                    marginTop: 8,
                    background: "var(--surface-ink)",
                    color: "var(--ink-inverse)",
                    border: "none",
                    padding: "16px 28px",
                    borderRadius: "var(--radius-pill)",
                    fontFamily: "var(--font-sans)",
                    fontSize: 15,
                    fontWeight: 500,
                    cursor: "pointer",
                    transition: "background var(--dur-base)",
                  }}
                  onMouseEnter={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--ink-primary)")
                  }
                  onMouseLeave={(e) =>
                    ((e.currentTarget as HTMLElement).style.background = "var(--surface-ink)")
                  }
                >
                  Wyślij zapytanie
                </button>

                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    color: "var(--ink-tertiary)",
                    lineHeight: 1.5,
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
