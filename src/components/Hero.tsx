"use client";

import { useEffect, useRef } from "react";
import ScrollArrow from "./ScrollArrow";
import Button from "./Button";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const bg = heroRef.current.querySelector(".hero-bg-img") as HTMLElement;
      if (bg) bg.style.transform = `translateY(${window.scrollY * 0.2}px)`;
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      id="hero"
      ref={heroRef}
      style={{
        position: "relative",
        height: "100vh",
        minHeight: 720,
        overflow: "hidden",
        background: "var(--surface-ink)",
      }}
    >
      {/* Background image */}
      <div
        className="hero-bg-img"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: "url('/assets/hero-nowy-relax.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          willChange: "transform",
        }}
      />

      {/* Protection gradient */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to top, rgba(20,19,15,0.65) 0%, rgba(20,19,15,0.1) 45%, rgba(20,19,15,0.3) 100%)",
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "absolute",
          left: 48,
          right: 48,
          bottom: 80,
          color: "var(--ink-inverse)",
          display: "flex",
          flexDirection: "column",
          gap: 28,
          maxWidth: 1200,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-sans)",
            fontSize: 12,
            fontWeight: 500,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: "var(--ink-inverse)",
            opacity: 0.8,
            animation: "heroFadeUp 0.9s var(--ease-out-quart) 0.2s both",
          }}
        >
          Filipek Investment · Inwestycja 2026
        </div>

        <h1
          style={{
            fontFamily: "var(--font-serif)",
            fontSize: "clamp(56px, 9vw, 120px)",
            lineHeight: 0.98,
            letterSpacing: "-0.03em",
            fontWeight: 400,
            maxWidth: "12ch",
            animation: "heroFadeUp 0.9s var(--ease-out-quart) 0.35s both",
          }}
        >
          Nowy Relax.
        </h1>

        <p
          style={{
            fontFamily: "var(--font-serif)",
            fontStyle: "italic",
            fontSize: "clamp(20px, 2.5vw, 32px)",
            lineHeight: 1.3,
            fontWeight: 400,
            color: "var(--ink-inverse)",
            opacity: 0.9,
            maxWidth: "26ch",
            animation: "heroFadeUp 0.9s var(--ease-out-quart) 0.5s both",
          }}
        >
          Dom to więcej niż adres.<br />To początek historii.
        </p>

        <div
          style={{
            display: "flex",
            gap: 12,
            marginTop: 8,
            animation: "heroFadeUp 0.9s var(--ease-out-quart) 0.65s both",
          }}
        >
          <Button as="a" href="#about" variant="primary-inverse">
            Poznaj dom
          </Button>
          <Button as="a" href="#etapy" variant="outline-inverse">
            Zobacz dostępność
          </Button>
        </div>
      </div>

      <ScrollArrow />

      {/* Vertical label */}
      <div
        style={{
          position: "absolute",
          top: 120,
          right: 48,
          color: "var(--ink-inverse)",
          opacity: 0.6,
          fontSize: 11,
          fontFamily: "var(--font-sans)",
          letterSpacing: "0.14em",
          textTransform: "uppercase",
          writingMode: "vertical-rl",
          textOrientation: "mixed",
          animation: "heroFadeUp 0.9s var(--ease-out-quart) 0.8s both",
        }}
      >
        CICIBÓR DUŻY · WOJ. LUBELSKIE
      </div>
    </section>
  );
}
