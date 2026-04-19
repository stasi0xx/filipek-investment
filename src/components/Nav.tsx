"use client";

import { useEffect, useState } from "react";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        height: 72,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        padding: "0 48px",
        background: scrolled ? "rgba(250,247,242,0.78)" : "transparent",
        backdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(20px) saturate(140%)" : "none",
        boxShadow: scrolled ? "inset 0 -1px 0 var(--line-hair)" : "none",
        transition: "all 300ms var(--ease-out-quart)",
      }}
    >
      {/* Wordmark */}
      <a
        href="#hero"
        style={{
          display: "flex",
          alignItems: "baseline",
          gap: 10,
          textDecoration: "none",
        }}
      >
        <span
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: 28,
            fontWeight: 400,
            color: scrolled ? "var(--ink-primary)" : "var(--ink-inverse)",
            letterSpacing: "-0.01em",
            transition: "color 300ms",
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
            color: scrolled ? "var(--ink-primary)" : "var(--ink-inverse)",
            transition: "color 300ms",
          }}
        >
          INVESTMENT
        </span>
      </a>

      {/* Links */}
      <ul
        style={{ display: "flex", gap: 36, listStyle: "none" }}
        className="hidden md:flex"
      >
        {[
          { href: "#about", label: "Inwestycja" },
          { href: "#dom", label: "Dom" },
          { href: "#etapy", label: "Dostępność" },
          { href: "#lokalizacja", label: "Lokalizacja" },
        ].map(({ href, label }) => (
          <li key={href}>
            <a
              href={href}
              style={{
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: scrolled ? "var(--ink-primary)" : "rgba(250,247,242,0.85)",
                textDecoration: "none",
                transition: "color var(--dur-base)",
              }}
              onMouseEnter={(e) =>
                ((e.target as HTMLElement).style.color = "var(--brand-oak)")
              }
              onMouseLeave={(e) =>
                ((e.target as HTMLElement).style.color = scrolled
                  ? "var(--ink-primary)"
                  : "rgba(250,247,242,0.85)")
              }
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <a
        href="#kontakt"
        style={{
          fontFamily: "var(--font-sans)",
          fontSize: 13,
          fontWeight: 500,
          color: "var(--ink-inverse)",
          background: "var(--surface-ink)",
          padding: "10px 22px",
          borderRadius: "var(--radius-pill)",
          textDecoration: "none",
          transition: "background var(--dur-base)",
        }}
        onMouseEnter={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "var(--ink-primary)")
        }
        onMouseLeave={(e) =>
          ((e.currentTarget as HTMLElement).style.background = "var(--surface-ink)")
        }
      >
        Umów wizytę
      </a>
    </nav>
  );
}
