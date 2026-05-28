"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface LensProps {
  children: React.ReactNode;
  zoomFactor?: number;
  lensSize?: number;
}

export default function Lens({ children, zoomFactor = 1.75, lensSize = 180 }: LensProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [containerSize, setContainerSize] = useState({ w: 400, h: 400 });

  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const springX = useSpring(rawX, { stiffness: 260, damping: 26 });
  const springY = useSpring(rawY, { stiffness: 260, damping: 26 });

  // Lens circle position: centered on cursor
  const lensLeft = useTransform(springX, x => x - lensSize / 2);
  const lensTop = useTransform(springY, y => y - lensSize / 2);

  // Zoomed content offset: maps cursor point to lens center
  // Math: innerX + cursorX * zoomFactor = lensSize/2  →  innerX = lensSize/2 - cursorX * zoomFactor
  const innerX = useTransform(springX, x => lensSize / 2 - x * zoomFactor);
  const innerY = useTransform(springY, y => lensSize / 2 - y * zoomFactor);

  return (
    <div
      ref={containerRef}
      style={{ position: "relative", cursor: "zoom-in" }}
      onMouseMove={(e) => {
        const rect = containerRef.current!.getBoundingClientRect();
        rawX.set(e.clientX - rect.left);
        rawY.set(e.clientY - rect.top);
      }}
      onMouseEnter={() => {
        const rect = containerRef.current!.getBoundingClientRect();
        setContainerSize({ w: rect.width, h: rect.height });
        setHovering(true);
      }}
      onMouseLeave={() => setHovering(false)}
    >
      {children}

      <AnimatePresence>
        {hovering && (
          <motion.div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              x: lensLeft,
              y: lensTop,
              width: lensSize,
              height: lensSize,
              borderRadius: "50%",
              overflow: "hidden",
              pointerEvents: "none",
              border: "1.5px solid rgba(255,255,255,0.3)",
              boxShadow:
                "0 0 0 1px rgba(0,0,0,0.06), 0 12px 48px rgba(0,0,0,0.22), inset 0 0 0 1px rgba(255,255,255,0.08)",
              zIndex: 20,
            }}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1, transition: { duration: 0.18, ease: "easeOut" } }}
            exit={{ opacity: 0, scale: 0.5, transition: { duration: 0.12 } }}
          >
            <motion.div
              style={{
                position: "absolute",
                width: containerSize.w,
                height: containerSize.h,
                x: innerX,
                y: innerY,
                scale: zoomFactor,
                transformOrigin: "top left",
              }}
            >
              {children}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
