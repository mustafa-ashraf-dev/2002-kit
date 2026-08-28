"use client";

import { useState } from "react";
import type { HighlightedVariant } from "@/lib/highlight";
import styles from "./CodeBlock.module.css";

export function CodeBlock({ variants }: { variants: HighlightedVariant[] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeFile, setActiveFile] = useState<"code" | "css" | "prompt">(
    "code",
  );
  const [copied, setCopied] = useState(false);
  const active = variants[activeIndex];
  const showingCss = activeFile === "css" && !!active.css;
  const showingPrompt = activeFile === "prompt" && !!active.prompt;

  const displayHtml = showingCss
    ? active.cssHtml!
    : showingPrompt
      ? active.prompt!
      : active.html;

  const displayRaw = showingCss
    ? active.css!
    : showingPrompt
      ? active.prompt!
      : active.code;

  function selectVariant(i: number) {
    setActiveIndex(i);
    setActiveFile("code"); // reset to the main file when the variant changes
  }

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(displayRaw);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      // fail silently — code is still visible for manual copy
    }
  }

  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <div
          className={styles.tabs}
          role="tablist"
          aria-label="Implementation variant"
        >
          {variants.map((variant, i) => (
            <button
              key={variant.label}
              role="tab"
              aria-selected={i === activeIndex}
              className={i === activeIndex ? styles.tabActive : styles.tab}
              onClick={() => selectVariant(i)}
            >
              {variant.label}
            </button>
          ))}
        </div>
        <button className={styles.copyBtn} onClick={handleCopy}>
          {copied ? "copied" : "$ copy"}
        </button>
      </div>

      {active.css && (
        <div className={styles.fileTabs} role="tablist" aria-label="File">
          <button
            role="tab"
            aria-selected={activeFile === "code"}
            className={
              activeFile === "code" ? styles.fileTabActive : styles.fileTab
            }
            onClick={() => setActiveFile("code")}
          >
            Component.tsx
          </button>
          <button
            role="tab"
            aria-selected={activeFile === "css"}
            className={
              activeFile === "css" ? styles.fileTabActive : styles.fileTab
            }
            onClick={() => setActiveFile("css")}
          >
            {active.cssFilename ?? "styles.module.css"}
          </button>
          <button
            role="tab"
            aria-selected={activeFile === "prompt"}
            className={
              activeFile === "prompt" ? styles.fileTabActive : styles.fileTab
            }
            onClick={() => setActiveFile("prompt")}
          >
            Prompt
          </button>
        </div>
      )}

      <div
        className={styles.code}
        dangerouslySetInnerHTML={{ __html: displayHtml }}
      />

      {active.notes && <p className={styles.notes}>{active.notes}</p>}
    </div>
  );
}
