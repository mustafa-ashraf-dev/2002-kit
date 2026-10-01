"use client";

import { useRef } from "react";
import { useLenis } from "lenis/react";
  
export default function ScrollProgressBar() {
  const barRef = useRef<HTMLDivElement>(null);

  useLenis((lenis) => {
    if (barRef.current) {
      barRef.current.style.transform = `scaleX(${lenis.progress})`;
    }
  });

  return <div ref={barRef} className="progressBar" aria-hidden="true" />;
}
