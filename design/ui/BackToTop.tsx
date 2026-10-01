"use client";

import { useState } from "react";
import { useLenis } from "lenis/react";
import styles from "./BackToTop.module.css";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  // Runs on every scroll event; show the button after 400px
  const lenis = useLenis((l) => {
    setVisible(l.scroll > 400);
  });

  return (
    <button
      type="button"
      aria-label="Back to top"
      className={`${styles.backToTop} ${visible ? styles.visible : ""}`}
      onClick={() => lenis?.scrollTo(0, { duration: 1.2 })}
      tabIndex={visible ? 0 : -1}
    >
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M12 19V5" />
        <path d="M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
