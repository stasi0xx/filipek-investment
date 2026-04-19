"use client";

const sections = [
  ["Inwestycja", ["Nowy Relax", "Dom 122 m²", "Dostępność", "Lokalizacja"]],
  ["Firma",      ["O nas", "Realizacje", "Kontakt"]],
  ["Socials",    ["Instagram", "Facebook"]],
] as const;

export default function Footer() {
  return (
    <footer
      style={{
        background: "var(--surface-ink)",
        color: "var(--ink-inverse)",
        padding: "96px 48px 48px",
      }}
    >
      <div
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr 1fr",
          gap: 64,
          marginBottom: 72,
        }}
      >
        {/* Brand */}
        <div>
          <div
            style={{
              display: "flex",
              alignItems: "baseline",
              gap: 10,
              marginBottom: 24,
            }}
          >
            <span
              style={{
                fontFamily: "var(--font-serif)",
                fontSize: 36,
                letterSpacing: "-0.01em",
              }}
            >
              Filipek
            </span>
            <span
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.18em",
                textTransform: "uppercase",
              }}
            >
              INVESTMENT
            </span>
          </div>
          <p
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 15,
              lineHeight: 1.65,
              color: "var(--ink-inverse-secondary)",
              maxWidth: "38ch",
            }}
          >
            Budujemy domy, w których zaczynają się historie rodzin. Cicibór Duży, woj. lubelskie.
          </p>
        </div>

        {/* Link columns */}
        {sections.map(([title, links]) => (
          <div key={title}>
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
              {title}
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: 12,
              }}
            >
              {links.map((l) => (
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
        ))}
      </div>

      <div
        style={{
          borderTop: "1px solid var(--line-dark)",
          paddingTop: 32,
          display: "flex",
          justifyContent: "space-between",
          fontFamily: "var(--font-sans)",
          fontSize: 12,
          color: "var(--ink-tertiary)",
          flexWrap: "wrap",
          gap: 16,
        }}
      >
        <div>© 2026 Filipek Investment. Wszystkie prawa zastrzeżone.</div>
        <div style={{ display: "flex", gap: 24 }}>
          <a
            href="#"
            style={{
              color: "var(--ink-tertiary)",
              textDecoration: "none",
              transition: "color var(--dur-base)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink-tertiary)")
            }
          >
            Polityka prywatności
          </a>
          <a
            href="#"
            style={{
              color: "var(--ink-tertiary)",
              textDecoration: "none",
              transition: "color var(--dur-base)",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.color = "var(--ink-tertiary)")
            }
          >
            Regulamin
          </a>
        </div>
      </div>
    </footer>
  );
}
