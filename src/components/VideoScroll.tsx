"use client";

import { useEffect, useRef, useState } from "react";

const FRAME_COUNT = 77;
const FRAME_PATH  = (n: number) =>
  `/assets/frames/frame_${String(n).padStart(4, "0")}.jpg`;

const captions = [
  { tag: "Odkryj przestrzeń",      text: "Każdy metr kwadratowy\nzaprojektowany z myślą o Tobie" },
  { tag: "Nowoczesna architektura", text: "Ponadczasowe szarości\ni precyzja w każdym detalu" },
  { tag: "Twoje miejsce",          text: "Dom to więcej niż adres.\nTo początek historii." },
];

export default function VideoScroll() {
  const trackRef  = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frames    = useRef<HTMLImageElement[]>([]);
  const [capIdx, setCapIdx]   = useState(0);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded]   = useState(false);

  // Preload all frames
  useEffect(() => {
    let done = 0;
    const imgs: HTMLImageElement[] = [];

    for (let i = 1; i <= FRAME_COUNT; i++) {
      const img = new Image();
      img.src = FRAME_PATH(i);
      img.onload = () => {
        done++;
        // Draw first frame as soon as it's ready
        if (done === 1) {
          const canvas = canvasRef.current;
          if (canvas) {
            const ctx = canvas.getContext("2d");
            ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);
          }
        }
        if (done === FRAME_COUNT) setLoaded(true);
      };
      imgs.push(img);
    }
    frames.current = imgs;
  }, []);

  useEffect(() => {
    const track  = trackRef.current;
    const canvas = canvasRef.current;
    if (!track || !canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let lastFrame = -1;

    const onScroll = () => {
      const rect     = track.getBoundingClientRect();
      const total    = track.offsetHeight - window.innerHeight;
      const progress = Math.max(0, Math.min(1, -rect.top / total));

      const frameIdx = Math.min(
        FRAME_COUNT - 1,
        Math.floor(progress * FRAME_COUNT),
      );

      if (frameIdx !== lastFrame) {
        lastFrame = frameIdx;
        const img = frames.current[frameIdx];
        if (img?.complete) ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      }

      const idx = Math.min(captions.length - 1, Math.floor(progress * captions.length));
      setCapIdx(prev => (prev !== idx ? idx : prev));
      setVisible(progress > 0.02 && progress < 0.98);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={trackRef} style={{ height: "400vh", position: "relative" }}>
      <div
        style={{
          position: "sticky",
          top: 0,
          height: "100vh",
          overflow: "hidden",
          background: "var(--surface-ink)",
        }}
      >
        <canvas
          ref={canvasRef}
          width={1280}
          height={720}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.85,
            display: "block",
          }}
        />

        <div
          style={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(to bottom, rgba(20,19,15,0.5) 0%, transparent 30%, transparent 65%, rgba(20,19,15,0.5) 100%)",
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
            bottom: 80,
            left: 48,
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
              fontSize: "clamp(1.8rem, 3vw, 2.8rem)",
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
            right: 48,
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
