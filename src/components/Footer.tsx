"use client";

const navLinks = [
  "Strona główna",
  "Oferta",
  "Lokalizacja",
  "Galeria",
  "O inwestorze",
  "Kontakt",
];

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface-ink)",
        color: "var(--ink-inverse)",
        padding: "clamp(64px, 8vw, 96px) clamp(20px, 6vw, 48px) 48px",
      }}
    >
      <style>{`
        .footer-grid {
          max-width: 1440px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 64px;
          margin-bottom: 72px;
        }
        .footer-bottom {
          max-width: 1440px;
          margin: 0 auto;
          border-top: 1px solid var(--line-dark);
          padding-top: 32px;
        }
        @media (max-width: 768px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr;
            gap: 40px;
            margin-bottom: 48px;
          }
          .footer-brand {
            grid-column: 1 / -1;
          }
        }
        @media (max-width: 480px) {
          .footer-grid {
            grid-template-columns: 1fr;
            gap: 36px;
          }
          .footer-brand {
            grid-column: auto;
          }
        }
      `}</style>

      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
          <div style={{ marginBottom: 8 }}>
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: "clamp(28px, 4vw, 40px)",
                letterSpacing: "-0.01em",
                display: "block",
                lineHeight: 1.1,
              }}
            >
              Nowy Relax
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.16em",
                textTransform: "uppercase",
                color: "var(--brand-sand)",
              }}
            >
              Inwestycja Filipek Investment Sp. z o.o.
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.65,
              color: "var(--ink-inverse-secondary)",
              maxWidth: "36ch",
              marginTop: 20,
            }}
          >
            Dom to więcej niż adres. To początek historii.
          </p>
        </div>

        {/* Nav */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              marginBottom: 20,
            }}
          >
            Nawigacja
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {navLinks.map((l) => (
              <a
                key={l}
                href="#"
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: 14,
                  color: "var(--ink-inverse)",
                  textDecoration: "none",
                  transition: "color var(--dur-base)",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--brand-sand)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
                }
              >
                {l}
              </a>
            ))}
          </div>
        </div>

        {/* Contact */}
        <div>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              marginBottom: 20,
            }}
          >
            Kontakt
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            <a
              href="tel:+48692404796"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--ink-inverse)",
                textDecoration: "none",
                transition: "color var(--dur-base)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--brand-sand)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
              }
            >
              +48 692 404 796
            </a>
            <a
              href="mailto:nowyrelax@fi-invest.pl"
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                color: "var(--ink-inverse)",
                textDecoration: "none",
                transition: "color var(--dur-base)",
              }}
              onMouseEnter={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--brand-sand)")
              }
              onMouseLeave={(e) =>
                ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
              }
            >
              nowyrelax@fi-invest.pl
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            lineHeight: 1.7,
            color: "var(--ink-tertiary)",
            maxWidth: "90ch",
          }}
        >
          Materiały zamieszczone na stronie mają charakter informacyjny i nie stanowią oferty w
          rozumieniu Kodeksu cywilnego. Szczegółowe warunki sprzedaży, standard wykonania oraz
          aktualna dostępność domów są potwierdzane indywidualnie z zainteresowanymi klientami.
        </p>
        <p
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            color: "var(--ink-tertiary)",
            marginTop: 16,
          }}
        >
          © 2026 Filipek Investment Sp. z o.o. Wszystkie prawa zastrzeżone.
        </p>
      </div>
    </footer>
  );
}
