"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 90;
const FRAME_PATH = (n: number) =>
  `/assets/frames/frame_${String(n).padStart(4, "0")}.webp`;

const captions = [
  {
    tag: "Filipek Investment",
    text: "Dom to więcej niż adres.\nTo początek historii.",
    type: "headline" as const,
  },
  {
    tag: "Nasza filozofia",
    text: "Wierzymy, że dom nie zaczyna się od metrażu, rzutu ani numeru działki. Zaczyna się od codzienności, którą można w nim zbudować: spokojnych poranków, rodzinnych spotkań, własnej przestrzeni i miejsca, do którego naprawdę chce się wracać.",
    type: "body" as const,
  },
  {
    tag: "Nowy Relax",
    text: "Projektujemy coś więcej niż kolejny adres pod Białą Podlaską — dom, który ma dobrze działać na co dzień i stać się początkiem nowej historii.",
    type: "body" as const,
  },
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

        {/* Bottom gradient for text legibility */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            height: "52%",
            background: "linear-gradient(to top, rgba(15,15,13,0.82) 0%, rgba(15,15,13,0.38) 50%, transparent 100%)",
            pointerEvents: "none",
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
            left: "clamp(20px, 5vw, 56px)",
            right: "clamp(20px, 5vw, 56px)",
            maxWidth: captions[capIdx].type === "headline" ? 520 : 620,
            transition: "opacity 0.5s ease",
            opacity: visible ? 1 : 0,
          }}
        >
          <div
            style={{
              fontFamily: "var(--font-sans)",
              fontSize: 11,
              fontWeight: 500,
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              color: "var(--brand-sand)",
              marginBottom: captions[capIdx].type === "headline" ? 20 : 14,
            }}
          >
            {captions[capIdx].tag}
          </div>
          <div
            style={{
              fontFamily: "var(--font-serif)",
              fontSize: captions[capIdx].type === "headline"
                ? "clamp(1.8rem, 5.5vw, 3.4rem)"
                : "clamp(1rem, 1.9vw, 1.3rem)",
              fontWeight: 400,
              color: "#FAF7F2",
              lineHeight: captions[capIdx].type === "headline" ? 1.15 : 1.7,
              whiteSpace: captions[capIdx].type === "headline" ? "pre-line" : "normal",
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
                    : "rgba(250,247,242,0.45)",
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
