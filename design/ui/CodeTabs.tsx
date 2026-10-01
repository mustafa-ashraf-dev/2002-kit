// design/ui/CodeTabs.tsx
"use client";

import { useState } from "react";

export interface CodeTabsProps {
  code: string;
  cssCode?: string;
  prompt?: string; // only shown if aiGenerated
}

export function CodeTabs({ code, cssCode, prompt }: CodeTabsProps) {
  const tabs = [
    { id: "code", label: "Component", content: code },
    ...(cssCode ? [{ id: "css", label: "CSS", content: cssCode }] : []),
    ...(prompt ? [{ id: "prompt", label: "prompt", content: prompt }] : []),
  ];
  const [active, setActive] = useState(tabs[0].id);
  const [copied, setCopied] = useState(false);

  const activeContent = tabs.find((t) => t.id === active)?.content ?? "";

  function handleCopy() {
    navigator.clipboard.writeText(activeContent);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <div className="demo-widget" style={{ marginBottom: 24 }}>
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
      <pre style={{ margin: 0, padding: 16, fontSize: 13, overflowX: "auto" }}>
        <code>{activeContent}</code>
      </pre>
    </div>
  );
}
