"use client";

const navSections = [
  ["Inwestycja", ["Nowy Relax", "Dom 122 m²", "Dostępność", "Lokalizacja"]],
  ["Firma",      ["O nas", "Realizacje", "Kontakt"]],
] as const;

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
        <circle cx="12" cy="12" r="4"/>
        <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none"/>
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "#",
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
      </svg>
    ),
  },
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
          grid-template-columns: 2fr 1fr 1fr 1fr;
          gap: 64px;
          margin-bottom: 72px;
        }
        .footer-bottom {
          border-top: 1px solid var(--line-dark);
          padding-top: 32px;
          display: flex;
          justify-content: space-between;
          font-family: var(--font-sans);
          font-size: 12px;
          color: var(--ink-tertiary);
          flex-wrap: wrap;
          gap: 16px;
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
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
            gap: 12px;
          }
        }
      `}</style>
      <div className="footer-grid">
        {/* Brand */}
        <div className="footer-brand">
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
        {navSections.map(([title, links]) => (
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
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {links.map((l: string) => (
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

        {/* Socials column */}
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
            Socials
          </div>
          <div style={{ display: "flex", flexDirection: "row", gap: 16 }}>
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                aria-label={s.label}
                style={{
                  color: "var(--ink-inverse)",
                  textDecoration: "none",
                  transition: "color var(--dur-base)",
                  display: "flex",
                }}
                onMouseEnter={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--brand-sand)")
                }
                onMouseLeave={(e) =>
                  ((e.currentTarget as HTMLElement).style.color = "var(--ink-inverse)")
                }
              >
                {s.icon}
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom">
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
