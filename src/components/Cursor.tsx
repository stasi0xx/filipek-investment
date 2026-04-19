"use client";

import { useEffect, useRef } from "react";

export default function Cursor() {
  const dotRef  = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const mx = useRef(0);
  const my = useRef(0);
  const rx = useRef(0);
  const ry = useRef(0);

  useEffect(() => {
    const onMove = (e: MouseEvent) => { mx.current = e.clientX; my.current = e.clientY; };
    window.addEventListener("mousemove", onMove);

    let raf: number;
    const animate = () => {
      rx.current += (mx.current - rx.current) * 0.11;
      ry.current += (my.current - ry.current) * 0.11;
      if (dotRef.current) {
        dotRef.current.style.left = mx.current + "px";
        dotRef.current.style.top  = my.current + "px";
      }
      if (ringRef.current) {
        ringRef.current.style.left = rx.current + "px";
        ringRef.current.style.top  = ry.current + "px";
      }
      raf = requestAnimationFrame(animate);
    };
    raf = requestAnimationFrame(animate);

    const onEnter = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width  = "56px";
      ringRef.current.style.height = "56px";
      ringRef.current.style.borderColor = "var(--gold)";
    };
    const onLeave = () => {
      if (!ringRef.current) return;
      ringRef.current.style.width  = "36px";
      ringRef.current.style.height = "36px";
      ringRef.current.style.borderColor = "rgba(250,248,245,0.35)";
    };

    const interactives = document.querySelectorAll("a, button");
    interactives.forEach((el) => {
      el.addEventListener("mouseenter", onEnter);
      el.addEventListener("mouseleave", onLeave);
    });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      interactives.forEach((el) => {
        el.removeEventListener("mouseenter", onEnter);
        el.removeEventListener("mouseleave", onLeave);
      });
    };
  }, []);

  return (
    <>
      <div
        ref={dotRef}
        style={{
          position: "fixed",
          width: 6,
          height: 6,
          background: "var(--cream)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9999,
          mixBlendMode: "difference",
        }}
      />
      <div
        ref={ringRef}
        style={{
          position: "fixed",
          width: 36,
          height: 36,
          border: "1px solid rgba(250,248,245,0.35)",
          borderRadius: "50%",
          transform: "translate(-50%, -50%)",
          pointerEvents: "none",
          zIndex: 9998,
          transition: "width 0.3s, height 0.3s, border-color 0.3s",
          mixBlendMode: "difference",
        }}
      />
    </>
  );
}
