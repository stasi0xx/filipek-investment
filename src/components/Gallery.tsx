"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const imgs = [
  "/assets/hero-nowy-relax.jpeg",
  "/assets/exterior-1.jpeg",
  "/assets/interior-1.jpeg",
  "/assets/facade-grey.jpeg",
];

const imgStyle = (src: string, hovered: boolean) => ({
  width: "100%",
  height: "100%",
  backgroundImage: `url(${src})`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  transform: hovered ? "scale(1.06)" : "scale(1)",
  transition: "transform 0.5s ease",
});

export default function Gallery() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      style={{ padding: "160px 0", background: "var(--surface-canvas)", color: "var(--ink-primary)" }}
    >
      <div style={{ padding: "0 48px", maxWidth: 1440, margin: "0 auto 64px" }}>
        <Reveal>
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              marginBottom: 20,
            }}
          >
            Osiedle
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
              maxWidth: "18ch",
            }}
          >
            Zobacz jak Nowy Relax wygląda z każdej strony.
          </h2>
        </Reveal>
      </div>

      <Reveal delay={0.15}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 4,
            padding: "0 4px",
          }}
        >
          <div
            style={{ aspectRatio: "16/10", overflow: "hidden" }}
            onMouseEnter={() => setHovered(0)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={imgStyle(imgs[0], hovered === 0)} />
          </div>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 4 }}>
            <div
              style={{ overflow: "hidden" }}
              onMouseEnter={() => setHovered(1)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={imgStyle(imgs[1], hovered === 1)} />
            </div>
            <div
              style={{ overflow: "hidden" }}
              onMouseEnter={() => setHovered(2)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={imgStyle(imgs[2], hovered === 2)} />
            </div>
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div style={{ padding: "0 4px", marginTop: 4 }}>
          <div
            style={{ aspectRatio: "21/9", overflow: "hidden" }}
            onMouseEnter={() => setHovered(3)}
            onMouseLeave={() => setHovered(null)}
          >
            <div style={imgStyle(imgs[3], hovered === 3)} />
          </div>
        </div>
      </Reveal>
    </section>
  );
}
