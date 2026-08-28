"use client";
import styles from "./ScrollToTopButton.module.css";
import { useEffect, useState } from "react";

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 1);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={scrollToTop}
      aria-label="Scroll to top"
      className={
        (styles.ScrollToTopButtonBTN,
        isVisible
          ? styles.ScrollToTopButtonBTNVisible
          : styles.ScrollToTopButtonBTN)
      }
    >
      ↑
    </button>
  );
}
