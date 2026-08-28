// src/components/previews/MagneticGlassButton.tsx
"use client";

import React, { useRef, useEffect, useCallback } from "react";
import styles from "./MagneticGlassButton.module.css";

interface MagneticGlassButtonProps extends React.ComponentProps<"button"> {
  glowColor?: string;
}

export default function MagneticGlassButton({
  children,
  glowColor = "rgba(59, 130, 246, 0.4)",
  className = "",
  ...props
}: MagneticGlassButtonProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const boundsRef = useRef<DOMRect | null>(null);
  const rafRef = useRef<number>(0);

  // Current animated position
  const posRef = useRef({ x: 0, y: 0 });
  // Target position
  const targetRef = useRef({ x: 0, y: 0 });

  const lerp = (start: number, end: number, factor: number) =>
    start + (end - start) * factor;

  const animate = useCallback(() => {
    const pos = posRef.current;
    const target = targetRef.current;

    // Spring-like lerp: 0.12 gives a nice weighty feel
    pos.x = lerp(pos.x, target.x, 0.12);
    pos.y = lerp(pos.y, target.y, 0.12);

    // Stop animation when close enough to save frames
    const dist = Math.hypot(target.x - pos.x, target.y - pos.y);
    if (dist > 0.01 && btnRef.current) {
      btnRef.current.style.transform = `translate(${pos.x.toFixed(2)}px, ${pos.y.toFixed(2)}px) scale(${props.disabled ? 1 : 1 + (1 - Math.min(dist / 12, 1)) * 0.03})`;
    }

    rafRef.current = requestAnimationFrame(animate);
  }, [props.disabled]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!btnRef.current) return;
      const rect = boundsRef.current;
      if (!rect) return;

      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const distX = e.clientX - centerX;
      const distY = e.clientY - centerY;
      const distance = Math.hypot(distX, distY);
      const magneticRadius = 120;

      if (distance < magneticRadius) {
        // Stronger pull when closer
        const pull = 1 - distance / magneticRadius;
        const maxTranslate = 14;
        targetRef.current = {
          x: distX * pull * (maxTranslate / magneticRadius),
          y: distY * pull * (maxTranslate / magneticRadius),
        };
      } else {
        targetRef.current = { x: 0, y: 0 };
      }
    };

    const handleMouseLeave = () => {
      targetRef.current = { x: 0, y: 0 };
    };

    const updateBounds = () => {
      if (btnRef.current) {
        boundsRef.current = btnRef.current.getBoundingClientRect();
      }
    };

    // Initial bounds
    updateBounds();

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("scroll", updateBounds, true);
    window.addEventListener("resize", updateBounds);

    rafRef.current = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("scroll", updateBounds, true);
      window.removeEventListener("resize", updateBounds);
    };
  }, [animate]);

  return (
    <button
      ref={btnRef}
      className={`${styles.magneticBtn} ${className}`}
      style={{ "--glow-color": glowColor } as React.CSSProperties}
      {...props}
    >
      <span className={styles.btnGlow} aria-hidden="true" />
      <span className={styles.btnContent}>{children}</span>
      Click Me
    </button>
  );
}
