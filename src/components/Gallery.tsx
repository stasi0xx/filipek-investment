"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";

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
      <style>{`
        .gallery-desktop { display: contents; }
        .gallery-mobile { display: none; }
        @media (max-width: 767px) {
          .gallery-desktop { display: none; }
          .gallery-mobile { display: flex; flex-direction: column; gap: 4px; padding: 0 4px; }
          .gallery-mobile-img { width: 100%; aspect-ratio: 4/3; overflow: hidden; }
        }
      `}</style>

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

      {/* Desktop layout */}
      <div className="gallery-desktop">
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr",
            gap: 4,
            padding: "0 4px",
          }}
        >
          <RevealImage direction="left" delay={0.15}>
            <div
              style={{ aspectRatio: "16/10", overflow: "hidden" }}
              onMouseEnter={() => setHovered(0)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={imgStyle(imgs[0], hovered === 0)} />
            </div>
          </RevealImage>
          <div style={{ display: "grid", gridTemplateRows: "1fr 1fr", gap: 4 }}>
            <RevealImage direction="right" delay={0.2}>
              <div
                style={{ overflow: "hidden", height: "100%" }}
                onMouseEnter={() => setHovered(1)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle(imgs[1], hovered === 1)} />
              </div>
            </RevealImage>
            <RevealImage direction="right" delay={0.28}>
              <div
                style={{ overflow: "hidden", height: "100%" }}
                onMouseEnter={() => setHovered(2)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle(imgs[2], hovered === 2)} />
              </div>
            </RevealImage>
          </div>
        </div>

        <RevealImage direction="bottom" delay={0.2}>
          <div style={{ padding: "0 4px", marginTop: 4 }}>
            <div
              style={{ aspectRatio: "21/9", overflow: "hidden" }}
              onMouseEnter={() => setHovered(3)}
              onMouseLeave={() => setHovered(null)}
            >
              <div style={imgStyle(imgs[3], hovered === 3)} />
            </div>
          </div>
        </RevealImage>
      </div>

      {/* Mobile layout – each image stacked with individual reveal */}
      <div className="gallery-mobile">
        {imgs.map((src, i) => {
          const dirs = ["left", "right", "left", "right"] as const;
          return (
            <RevealImage key={src} direction={dirs[i]} delay={i * 0.1}>
              <div
                className="gallery-mobile-img"
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
              >
                <div style={imgStyle(src, hovered === i)} />
              </div>
            </RevealImage>
          );
        })}
      </div>
    </section>
  );
}
