"use client";

import { useEffect, useRef, useState } from "react";
import ScrollArrow from "./ScrollArrow";
import Button from "./Button";

const FRAME_COUNT = 151;
const FRAME_PATH = (n: number) =>
  `/assets/hero-frames/frame_${String(n).padStart(4, "0")}.jpg`;

function drawCover(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
) {
  const scale = Math.max(cw / img.naturalWidth, ch / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
}

export default function Hero() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const sync = () => {
      const { width, height } = sticky.getBoundingClientRect();
      const w = Math.round(width);
      const h = Math.round(height);
      if (canvas.width !== w || canvas.height !== h) {
        canvas.width = w;
        canvas.height = h;
        const img = frames.current[Math.max(0, lastFrameRef.current)];
        if (img?.complete) {
          const ctx = canvas.getContext("2d");
          if (ctx) drawCover(ctx, img, w, h);
        }
      }
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(sticky);
    return () => ro.disconnect();
  }, []);

  useEffect(() => {
    let done = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        done++;
        if (done === 1) {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            if (ctx) drawCover(ctx, img, canvas.width, canvas.height);
          }
        }
        if (done === FRAME_COUNT) setLoaded(true);
      };
      imgs.push(img);
    }
    frames.current = imgs;
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    const canvas = canvasRef.current;
    if (!track || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const onScroll = () => {
      const rect = track.getBoundingClientRect();
      const vh = stickyRef.current?.offsetHeight ?? window.innerHeight;
      const total = track.offsetHeight - vh;
      const progress = Math.max(0, Math.min(1, -rect.top / total));

      const frameIdx = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT),
      );

      if (frameIdx !== lastFrameRef.current) {
        lastFrameRef.current = frameIdx;
        const img = frames.current[frameIdx];
        if (img?.complete) drawCover(ctx, img, canvas.width, canvas.height);
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={trackRef} style={{ height: "500vh", position: "relative" }}>
      <section
        id="hero"
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          minHeight: 720,
          overflow: "hidden",
          background: "var(--surface-ink)",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to top, rgba(20,19,15,0.65) 0%, rgba(20,19,15,0.1) 45%, rgba(20,19,15,0.3) 100%)",
          }}
        />

        {!loaded && (
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "var(--brand-sand)",
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
            }}
          >
            Ładowanie…
          </div>
        )}

        <div className="hero-content">
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

          <div className="hero-buttons">
            <Button as="a" href="#about" variant="primary-inverse">
              Poznaj dom
            </Button>
            <Button as="a" href="#etapy" variant="outline-inverse">
              Zobacz dostępność
            </Button>
          </div>
        </div>

        <ScrollArrow />

        <div className="hero-location-label">
          CICIBÓR DUŻY · WOJ. LUBELSKIE
        </div>
      </section>
    </div>
  );
}
