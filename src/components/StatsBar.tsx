"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Reveal from "./Reveal";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "122", unit: "m²", label: "powierzchni domu" },
  { number: "590", unit: "m²", label: "powierzchni działki" },
  { number: "3", unit: "", label: "sypialnie" },
  { number: "1", unit: "km", label: "od Białej Podlaskiej" },
];

export default function StatsBar() {
  const barRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const bar = barRef.current;
    const track = trackRef.current;
    if (!bar || !track) return;

    const mm = gsap.matchMedia();

    mm.add("(max-width: 768px)", () => {
      const distance = track.scrollWidth - bar.clientWidth;
      gsap.to(track, {
        x: -distance,
        ease: "none",
        scrollTrigger: {
          trigger: bar,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <>
      <style>{`
        .stats-bar {
          background: var(--surface-ink);
          padding: 40px 48px;
        }
        .stats-track {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
        }
        .stats-item {
          display: flex;
          flex-direction: column;
          gap: 6px;
          padding: 0 40px;
        }
        @media (max-width: 768px) {
          .stats-bar {
            overflow: hidden;
            padding: 36px 0;
          }
          .stats-track {
            display: flex;
            will-change: transform;
          }
          .stats-item {
            flex: 0 0 72vw;
            padding: 0 32px;
          }
          .stats-item:first-child {
            padding-left: 28px;
          }
          .stats-item:last-child {
            padding-right: 28px;
          }
        }
      `}</style>
      <div className="stats-bar" ref={barRef}>
        <div className="stats-track" ref={trackRef}>
        {stats.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.08}>
            <div
              className="stats-item"
              style={{
                borderRight:
                  i < stats.length - 1
                    ? "1px solid var(--line-dark)"
                    : "none",
              }}
            >
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "2.5rem",
                  fontWeight: 400,
                  color: "var(--brand-sand)",
                  lineHeight: 1,
                }}
              >
                {s.number}
                {s.unit && (
                  <span style={{ fontSize: "1.1rem", marginLeft: 3 }}>
                    {s.unit}
                  </span>
                )}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-sans)",
                  fontSize: "0.68rem",
                  letterSpacing: "0.14em",
                  textTransform: "uppercase",
                  color: "var(--ink-inverse-secondary)",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </span>
            </div>
          </Reveal>
        ))}
        </div>
      </div>
    </>
  );
}
