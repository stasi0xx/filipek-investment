"use client";

import { useEffect, useRef } from "react";

type Direction = "left" | "right" | "bottom";

interface RevealImageProps {
  children: React.ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}

const initialTransform: Record<Direction, string> = {
  left: "translateX(-48px)",
  right: "translateX(48px)",
  bottom: "translateY(48px)",
};

export default function RevealImage({
  children,
  direction = "bottom",
  delay = 0,
  className,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.opacity = "1";
          el.style.transform = "translate(0, 0)";
          obs.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: 0,
        transform: initialTransform[direction],
        transition: `opacity 800ms cubic-bezier(0.22,1,0.36,1) ${delay}s, transform 800ms cubic-bezier(0.22,1,0.36,1) ${delay}s`,
      }}
    >
      {children}
    </div>
  );
}
