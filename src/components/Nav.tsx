"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { href: "#about", label: "Inwestycja" },
  { href: "#dom", label: "Dom" },
  { href: "#etapy", label: "Dostępność" },
  { href: "#lokalizacja", label: "Lokalizacja" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 64);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  const navBg = scrolled || open ? "rgba(250,247,242,0.96)" : "transparent";
  const inkColor = scrolled || open ? "var(--ink-primary)" : "var(--ink-inverse)";

  return (
    <>
      <nav
        className="px-7 md:px-12"
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
          background: navBg,
          backdropFilter: scrolled || open ? "blur(20px) saturate(140%)" : "none",
          WebkitBackdropFilter: scrolled || open ? "blur(20px) saturate(140%)" : "none",
          boxShadow: scrolled || open ? "inset 0 -1px 0 var(--line-hair)" : "none",
          transition: "all 300ms var(--ease-out-quart)",
        }}
      >
        {/* Wordmark */}
        <a
          href="#hero"
          onClick={() => setOpen(false)}
          style={{ display: "flex", alignItems: "baseline", gap: 10, textDecoration: "none", marginLeft: "10px" }}
        >
          <span
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: 28,
              fontWeight: 400,
              color: inkColor,
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
              color: inkColor,
              transition: "color 300ms",
            }}
          >
            INVESTMENT
          </span>
        </a>

        {/* Desktop links */}
        <ul className="hidden md:flex" style={{ gap: 36, listStyle: "none" }}>
          {NAV_LINKS.map(({ href, label }) => (
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
                onMouseEnter={(e) => ((e.target as HTMLElement).style.color = "var(--brand-oak)")}
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

        {/* Desktop CTA */}
        <a
          href="#kontakt"
          className="hidden md:inline-block"
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
            marginRight: "10px",
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

        {/* Hamburger button — mobile only */}
        <button
          className="flex md:hidden"
          aria-label={open ? "Zamknij menu" : "Otwórz menu"}
          onClick={() => setOpen((v) => !v)}
          style={{
            background: scrolled || open ? "transparent" : "rgba(0,0,0,0.28)",
            border: "none",
            cursor: "pointer",
            padding: 8,
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 5,
            width: 40,
            height: 40,
            borderRadius: 8,
            transition: "background 300ms",
            marginRight: "10px",
          }}
        >
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: inkColor,
              borderRadius: 2,
              transformOrigin: "center",
              transition: "transform 300ms var(--ease-out-quart), opacity 300ms, background 300ms",
              transform: open ? "translateY(7px) rotate(45deg)" : "none",
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: inkColor,
              borderRadius: 2,
              transition: "opacity 300ms, background 300ms",
              opacity: open ? 0 : 1,
            }}
          />
          <span
            style={{
              display: "block",
              width: 24,
              height: 2,
              background: inkColor,
              borderRadius: 2,
              transformOrigin: "center",
              transition: "transform 300ms var(--ease-out-quart), opacity 300ms, background 300ms",
              transform: open ? "translateY(-7px) rotate(-45deg)" : "none",
            }}
          />
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div
        className="block md:hidden"
        style={{
          position: "fixed",
          top: 72,
          left: 0,
          right: 0,
          zIndex: 99,
          background: "rgba(250,247,242,0.97)",
          backdropFilter: "blur(20px) saturate(140%)",
          WebkitBackdropFilter: "blur(20px) saturate(140%)",
          boxShadow: open ? "0 8px 32px rgba(0,0,0,0.10)" : "none",
          overflow: "hidden",
          maxHeight: open ? "400px" : "0px",
          transition: "max-height 400ms var(--ease-out-quart), box-shadow 400ms",
        }}
      >
        <ul style={{ listStyle: "none", padding: "16px 0 8px" }}>
          {NAV_LINKS.map(({ href, label }, i) => (
            <li
              key={href}
              style={{
                opacity: open ? 1 : 0,
                transform: open ? "translateY(0)" : "translateY(-12px)",
                transition: `opacity 350ms ${80 + i * 50}ms, transform 350ms ${80 + i * 50}ms var(--ease-out-quart)`,
              }}
            >
              <a
                href={href}
                onClick={() => setOpen(false)}
                style={{
                  display: "block",
                  fontFamily: "var(--font-sans)",
                  fontSize: 18,
                  fontWeight: 500,
                  color: "var(--ink-primary)",
                  textDecoration: "none",
                  padding: "14px 20px",
                  borderBottom: "1px solid var(--line-hair)",
                }}
              >
                {label}
              </a>
            </li>
          ))}
          <li
            style={{
              opacity: open ? 1 : 0,
              transform: open ? "translateY(0)" : "translateY(-12px)",
              transition: `opacity 350ms ${80 + NAV_LINKS.length * 50}ms, transform 350ms ${80 + NAV_LINKS.length * 50}ms var(--ease-out-quart)`,
              padding: "20px 20px 24px",
            }}
          >
            <a
              href="#kontakt"
              onClick={() => setOpen(false)}
              style={{
                display: "inline-block",
                fontFamily: "var(--font-sans)",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--ink-inverse)",
                background: "var(--surface-ink)",
                padding: "12px 28px",
                borderRadius: "var(--radius-pill)",
                textDecoration: "none",
              }}
            >
              Umów wizytę
            </a>
          </li>
        </ul>
      </div>

      {/* Backdrop */}
      {open && (
        <div
          className="block md:hidden"
          onClick={() => setOpen(false)}
          style={{
            position: "fixed",
            inset: 0,
            zIndex: 98,
            background: "rgba(0,0,0,0.25)",
            animation: "fadeIn 300ms",
          }}
        />
      )}
    </>
  );
}
