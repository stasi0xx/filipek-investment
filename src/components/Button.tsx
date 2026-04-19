"use client";

import { ButtonHTMLAttributes, AnchorHTMLAttributes, useRef } from "react";

type BaseProps = {
  variant?: "primary" | "primary-inverse" | "outline" | "outline-inverse" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
};

type ButtonAsButton = BaseProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button"; href?: never };

type ButtonAsAnchor = BaseProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & { as: "a"; href: string };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const SIZES = {
  sm: { fontSize: 13, padding: "10px 22px" },
  md: { fontSize: 15, padding: "16px 32px" },
  lg: { fontSize: 17, padding: "20px 44px" },
};

const RIPPLE_COLORS: Record<string, string> = {
  primary:          "rgba(255,255,255,0.22)",
  "primary-inverse":"rgba(15,15,13,0.12)",
  outline:          "rgba(139,107,68,0.18)",
  "outline-inverse":"rgba(255,255,255,0.15)",
  ghost:            "rgba(139,107,68,0.14)",
};

export default function Button({
  variant = "primary",
  size = "md",
  children,
  as,
  style,
  ...rest
}: ButtonProps) {
  const containerRef = useRef<HTMLElement>(null);

  function spawnRipple(x: number, y: number) {
    const el = containerRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;
    const diameter = Math.max(rect.width, rect.height) * 2;

    const ripple = document.createElement("span");
    ripple.style.cssText = `
      position: absolute;
      border-radius: 50%;
      width: ${diameter}px;
      height: ${diameter}px;
      left: ${cx - diameter / 2}px;
      top:  ${cy - diameter / 2}px;
      background: ${RIPPLE_COLORS[variant]};
      transform: scale(0);
      animation: btnRipple 550ms cubic-bezier(0.22,1,0.36,1) forwards;
      pointer-events: none;
    `;
    el.appendChild(ripple);
    ripple.addEventListener("animationend", () => ripple.remove());
  }

  const baseStyle: React.CSSProperties = {
    position: "relative",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-sans)",
    fontWeight: 500,
    fontSize: SIZES[size].fontSize,
    padding: SIZES[size].padding,
    borderRadius: "var(--radius-pill)",
    border: "none",
    cursor: "pointer",
    overflow: "hidden",
    userSelect: "none",
    textDecoration: "none",
    letterSpacing: "0.01em",
    transition:
      "transform 120ms cubic-bezier(0.22,1,0.36,1), box-shadow 200ms ease, background-color 200ms ease, color 200ms ease, border-color 200ms ease",
    ...(variant === "primary" && {
      background: "var(--ink-primary)",
      color: "var(--ink-inverse)",
      boxShadow: "0 2px 8px rgba(15,15,13,0.18)",
    }),
    ...(variant === "primary-inverse" && {
      background: "var(--ink-inverse)",
      color: "var(--ink-primary)",
      boxShadow: "0 2px 12px rgba(0,0,0,0.25)",
    }),
    ...(variant === "outline" && {
      background: "transparent",
      color: "var(--ink-primary)",
      border: "1.5px solid var(--line-soft)",
      boxShadow: "none",
    }),
    ...(variant === "outline-inverse" && {
      background: "transparent",
      color: "var(--ink-inverse)",
      border: "1.5px solid rgba(255,255,255,0.35)",
      boxShadow: "none",
    }),
    ...(variant === "ghost" && {
      background: "transparent",
      color: "var(--brand-oak)",
      boxShadow: "none",
    }),
    ...style,
  };

  const handlers = {
    onMouseEnter(e: React.MouseEvent<HTMLElement>) {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "scale(1.035)";
      if (variant === "primary")
        el.style.boxShadow = "0 6px 22px rgba(15,15,13,0.28)";
      if (variant === "primary-inverse")
        el.style.boxShadow = "0 6px 24px rgba(0,0,0,0.35)";
      if (variant === "outline") el.style.borderColor = "var(--brand-oak)";
      if (variant === "outline-inverse") el.style.borderColor = "rgba(255,255,255,0.75)";
      if (variant === "ghost")   el.style.opacity = "0.75";
    },
    onMouseLeave(e: React.MouseEvent<HTMLElement>) {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "scale(1)";
      if (variant === "primary")
        el.style.boxShadow = "0 2px 8px rgba(15,15,13,0.18)";
      if (variant === "primary-inverse")
        el.style.boxShadow = "0 2px 12px rgba(0,0,0,0.25)";
      if (variant === "outline") el.style.borderColor = "var(--line-soft)";
      if (variant === "outline-inverse") el.style.borderColor = "rgba(255,255,255,0.35)";
      if (variant === "ghost")   el.style.opacity = "1";
    },
    onMouseDown(e: React.MouseEvent<HTMLElement>) {
      const el = e.currentTarget as HTMLElement;
      el.style.transform = "scale(0.965)";
      el.style.transition =
        "transform 80ms cubic-bezier(0.22,1,0.36,1), box-shadow 80ms ease";
      spawnRipple(e.clientX, e.clientY);
    },
    onMouseUp(e: React.MouseEvent<HTMLElement>) {
      const el = e.currentTarget as HTMLElement;
      el.style.transition =
        "transform 120ms cubic-bezier(0.22,1,0.36,1), box-shadow 200ms ease";
      el.style.transform = "scale(1.035)";
    },
  };

  if (as === "a") {
    const { href, ...anchorRest } = rest as ButtonAsAnchor;
    return (
      <>
        <style>{`
          @keyframes btnRipple {
            to { transform: scale(1); opacity: 0; }
          }
        `}</style>
        <a
          ref={containerRef as React.Ref<HTMLAnchorElement>}
          href={href}
          style={baseStyle}
          {...handlers}
          {...(anchorRest as AnchorHTMLAttributes<HTMLAnchorElement>)}
        >
          {children}
        </a>
      </>
    );
  }

  return (
    <>
      <style>{`
        @keyframes btnRipple {
          to { transform: scale(1); opacity: 0; }
        }
      `}</style>
      <button
        ref={containerRef as React.Ref<HTMLButtonElement>}
        style={baseStyle}
        {...handlers}
        {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
      >
        {children}
      </button>
    </>
  );
}
