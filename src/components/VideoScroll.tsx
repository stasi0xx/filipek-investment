"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 67;
const FRAME_PATH = (n: number) =>
  `/assets/frames/frame_${String(n).padStart(4, "0")}.jpg`;

const captions = [
  { tag: "Odkryj przestrzeń", text: "Każdy metr kwadratowy\nzaprojektowany z myślą o Tobie" },
  { tag: "Nowoczesna architektura", text: "Ponadczasowe szarości\ni precyzja w każdym detalu" },
  { tag: "Twoje miejsce", text: "Dom to więcej niż adres.\nTo początek historii." },
];

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

function drawContain(
  ctx: CanvasRenderingContext2D,
  img: HTMLImageElement,
  cw: number,
  ch: number,
) {
  ctx.clearRect(0, 0, cw, ch);
  const scale = Math.min(cw / img.naturalWidth, ch / img.naturalHeight);
  const sw = img.naturalWidth * scale;
  const sh = img.naturalHeight * scale;
  ctx.drawImage(img, (cw - sw) / 2, (ch - sh) / 2, sw, sh);
}

export default function VideoScroll() {
  const trackRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames = useRef<HTMLImageElement[]>([]);
  const lastFrameRef = useRef(-1);
  const [capIdx, setCapIdx] = useState(0);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const isMobileRef = useRef(false);
  const draw = (ctx: CanvasRenderingContext2D, img: HTMLImageElement, cw: number, ch: number) =>
    isMobileRef.current ? drawContain(ctx, img, cw, ch) : drawCover(ctx, img, cw, ch);

  useEffect(() => {
    const check = () => { isMobileRef.current = window.innerWidth < 768; };
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  // Sync canvas intrinsic size to its display size so drawCover fills correctly
  useEffect(() => {
    const canvas = canvasRef.current;
    const sticky = stickyRef.current;
    if (!canvas || !sticky) return;

    const sync = () => {
      const { width, height } = sticky.getBoundingClientRect();
      if (canvas.width !== Math.round(width) || canvas.height !== Math.round(height)) {
        canvas.width = Math.round(width);
        canvas.height = Math.round(height);
        // Redraw current frame after resize
        const img = frames.current[Math.max(0, lastFrameRef.current)];
        if (img?.complete) {
          const ctx = canvas.getContext("2d");
          if (ctx) draw(ctx, img, canvas.width, canvas.height);
        }
      }
    };

    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(sticky);
    return () => ro.disconnect();
  }, []);

  // Preload all frames
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
            if (ctx) draw(ctx, img, canvas.width, canvas.height);
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
      // Use offsetHeight of sticky (real px) instead of window.innerHeight to
      // avoid jumps caused by mobile browser chrome appearing/disappearing
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
        if (img?.complete) draw(ctx, img, canvas.width, canvas.height);
      }

      const idx = Math.min(captions.length - 1, Math.floor(progress * captions.length));
      setCapIdx(prev => (prev !== idx ? idx : prev));
      setVisible(progress > 0.02 && progress < 0.98);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    // 100svh = small viewport height — stała wartość, nie skacze gdy chowa się pasek adresu
    <div ref={trackRef} style={{ height: "400vh", position: "relative" }}>
      <div
        ref={stickyRef}
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "var(--surface-white)",
        }}
      >
        <canvas
          ref={canvasRef}
          style={{
            width: "100%",
            height: "auto",
            opacity: 1,
            display: "block",
          }}
        />



        {/* Loading indicator */}
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

        <div
          style={{
            position: "absolute",
            bottom: "clamp(48px, 8vh, 80px)",
            left: "clamp(20px, 5vw, 48px)",
            right: "clamp(20px, 5vw, 48px)",
            maxWidth: 560,
            transition: "opacity 0.5s ease",
            opacity: visible ? 1 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 12,
              fontWeight: 500,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              color: "var(--brand-oak)",
              marginBottom: 16,
              textShadow: "0 1px 8px rgba(0,0,0,0.8), 0 0px 2px rgba(0,0,0,0.9)",
            }}
          >
            {captions[capIdx].tag}
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: "clamp(1.4rem, 5vw, 2.8rem)",
              fontWeight: 400,
              color: "#fff",
              lineHeight: 1.15,
              whiteSpace: "pre-line",
              textShadow: "0 2px 12px rgba(0,0,0,0.85), 0 1px 3px rgba(0,0,0,0.9)",
            }}
          >
            {captions[capIdx].text}
          </div>
        </div>

        {/* Progress dots */}
        <div
          style={{
            position: "absolute",
            right: "clamp(16px, 4vw, 48px)",
            top: "50%",
            transform: "translateY(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: 10,
          }}
        >
          {captions.map((_, i) => (
            <div
              key={i}
              style={{
                width: i === capIdx ? 6 : 4,
                height: i === capIdx ? 6 : 4,
                borderRadius: "50%",
                background:
                  i === capIdx
                    ? "var(--brand-sand)"
                    : "rgba(250,247,242,0.3)",
                transition: "all 0.3s",
                alignSelf: "center",
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
