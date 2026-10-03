// design/ui/CodeTabs.tsx
"use client";

import { useRef, useState } from "react";
import { Highlight, themes } from "prism-react-renderer";

export interface CodeTabsProps {
  code: string;
  cssCode?: string;
  prompt?: string; // only shown if aiGenerated
}

type Tab = { id: string; label: string; content: string; language: string };

export function CodeTabs({ code, cssCode, prompt }: CodeTabsProps) {
  const tabs: Tab[] = [
    { id: "code", label: "Component", content: code, language: "tsx" },
    ...(cssCode
      ? [{ id: "css", label: "CSS", content: cssCode, language: "css" }]
      : []),
    ...(prompt
      ? [{ id: "prompt", label: "prompt", content: prompt, language: "text" }]
      : []),
  ];
  const [active, setActive] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);
  // inside the component
  const scrollRef = useRef<HTMLDivElement>(null);
  const [unlocked, setUnlocked] = useState(false);
  const activeTab = tabs.find((t) => t.id === active) ?? tabs[0];
  const activeContent = activeTab.content;

  function handleCopy() {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  const preStyle = {
    margin: 0,
    padding: 16,
    fontSize: 13,
    overflowX: "auto" as const,
    background: "transparent",
  };

  return (
    <div
      ref={scrollRef}
      tabIndex={0}
      data-lenis-prevent={unlocked ? "" : undefined}
      onClick={() => scrollRef.current?.focus({ preventScroll: true })}
      onFocus={() => setUnlocked(true)}
      onBlur={() => setUnlocked(false)}
      onKeyDown={(e) => {
        if (e.key === "Escape") scrollRef.current?.blur();
      }}
      style={{
        maxHeight: 350,
        overflowY: unlocked ? "auto" : "auto",
        overscrollBehavior: "contain",
        outline: unlocked ? "#e2813c5b 1px solid" : "none",
        cursor: unlocked ? "auto" : "pointer",
      }}
      className="demo-widget"
    >
      <div className="demo-topbar">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            type="button"
            onClick={() => setActive(tab.id)}
            className="mono"
            style={{
              background: "none",
              border: "none",
              color: active === tab.id ? "var(--paper)" : "var(--paper-dim)",
              fontSize: 12.5,
              padding: "6px 12px",
              cursor: "pointer",
              borderBottom:
                active === tab.id
                  ? "2px solid var(--accent)"
                  : "2px solid transparent",
            }}
          >
            {tab.label}
          </button>
        ))}
        <button
          type="button"
          onClick={handleCopy}
          className="mono"
          style={{
            marginLeft: "auto",
            background: "var(--surface-2)",
            border: "1px solid var(--line)",
            color: copied ? "var(--accent)" : "var(--paper-dim)",
            fontSize: 11,
            padding: "4px 10px",
            borderRadius: 4,
            cursor: "pointer",
          }}
        >
          {copied ? "copied" : "copy"}
        </button>
      </div>

      {/* Only this area scrolls. Click it to focus, Esc to release. */}
      <div>
        {activeTab.language === "text" ? (
          <pre
            style={{
              ...preStyle,
              whiteSpace: "pre-wrap",
              textWrap: "pretty",
              color: "var(--paper)",
            }}
          >
            <code>{activeContent}</code>
          </pre>
        ) : (
          <Highlight
            theme={themes.vsDark}
            code={activeContent.trim()}
            language={activeTab.language}
          >
            {({ style, tokens, getLineProps, getTokenProps }) => (
              <pre style={{ ...style, ...preStyle }}>
                {tokens.map((line, i) => (
                  <div key={i} {...getLineProps({ line })}>
                    {line.map((token, key) => (
                      <span key={key} {...getTokenProps({ token })} />
                    ))}
                  </div>
                ))}
              </pre>
            )}
          </Highlight>
        )}
      </div>
    </div>
  );
}
