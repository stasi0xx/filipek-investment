"use client";

import { useState } from "react";
import Reveal from "./Reveal";
import RevealImage from "./RevealImage";

const pillars = [
  {
    eye: "Lokalizacja",
    title: "1 km do miasta Biała Podlaska",
    body: "Spokój podmiejskiej natury i autostradowy węzeł Cicibór w zasięgu kilku minut.",
    img: "/assets/exterior-1.jpeg",
  },
  {
    eye: "Architektura",
    title: "Ponadczasowe szarości",
    body: "Szary kolor elewacji i dachu w zestawieniu z białą fasadą. Jasne barwy odbijają światło i dodają elegancji całemu osiedlu.",
    img: "/assets/facade-grey.jpeg",
  },
  {
    eye: "Przestrzeń",
    title: "Każdy m² na wagę złota",
    body: "Zero zmarnowanej przestrzeni. 122 m² domu i 590 m² działki na Twoją rodzinę.",
    img: "/assets/interior-1.jpeg",
  },
];

export default function About() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section
      id="about"
      className="about-section"
      style={{ padding: "160px 48px", background: "var(--surface-canvas)" }}
    >
      <div style={{ maxWidth: 1440, margin: "0 auto" }}>
        <div className="about-grid">
          {pillars.map((p, i) => (
            <Reveal key={i} delay={i * 0.12}>
              <article
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  transform: hovered === i ? "translateY(-8px)" : "translateY(0)",
                  transition: "transform 0.35s ease",
                }}
              >
                <RevealImage direction={i === 0 ? "left" : i === 1 ? "bottom" : "right"} delay={i * 0.1}>
                  <div
                    style={{
                      aspectRatio: "4/5",
                      borderRadius: "var(--radius-lg)",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: "100%",
                        height: "100%",
                        backgroundImage: `url(${p.img})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        transform: hovered === i ? "scale(1.06)" : "scale(1)",
                        transition: "transform 0.5s ease",
                      }}
                    />
                  </div>
                </RevealImage>
                <div
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 12,
                    fontWeight: 500,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: "var(--brand-oak)",
                  }}
                >
                  {p.eye}
                </div>
                <h3
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(1.8rem, 2.5vw, 2.4rem)",
                    lineHeight: 1.1,
                    letterSpacing: "-0.02em",
                    fontWeight: 400,
                    color: "var(--ink-primary)",
                  }}
                >
                  {p.title}
                </h3>
                <p
                  style={{
                    fontFamily: "var(--font-sans)",
                    fontSize: 16,
                    lineHeight: 1.65,
                    color: "var(--ink-secondary)",
                    maxWidth: "36ch",
                  }}
                >
                  {p.body}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
