"use client";

import { Highlight, themes } from "prism-react-renderer";

export interface DiffCodeProps {
  code: string;
  language?: string; // "tsx" | "css" | "html" ...
  className?: string; // your styles["diff-line"] + rm/add classes
}

export function DiffCode({ code, language = "tsx", className }: DiffCodeProps) {
  return (
    <Highlight theme={themes.vsDark} code={code.trim()} language={language}>
      {({ tokens, getLineProps, getTokenProps }) => (
        <div className={className}>
          {tokens.map((line, i) => (
            <div
              key={i}
              {...getLineProps({ line })}
              style={{ whiteSpace: "pre" }}
            >
              {line.map((token, key) => (
                <span key={key} {...getTokenProps({ token })} />
              ))}
            </div>
          ))}
        </div>
      )}
    </Highlight>
  );
}
