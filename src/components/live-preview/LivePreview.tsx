"use client";

import {
  SandpackProvider,
  SandpackPreview,
  SandpackLayout,
} from "@codesandbox/sandpack-react";
import type { CodeVariant } from "@/lib/types";
import styles from "./LivePreview.module.css";

// This wrapper file imports whatever the variant exports — default export
// preferred, first named export as a fallback — and mounts it. That's what
// lets a variant's code use either `export default function X()` or
// `export function X()` without LivePreview needing to know the name.
const ENTRY_CODE = `import * as ComponentModule from "./Component";

const Component =
  (ComponentModule as any).default ?? Object.values(ComponentModule)[0];

export default function App() {
  return (
    <div style={{ padding: 24, fontFamily: "sans-serif" }}>
      <Component />
    </div>
  );
}`;

/**
 * Runs the given variant's code in a real, isolated Sandpack iframe — the
 * exact code shown in the CodeBlock panel, actually executing, not a
 * separately hand-built preview component standing in for it.
 *
 * Convention: exactly one component export per variant's code string.
 */

export function LivePreview({ variant }: { variant: CodeVariant }) {
  const files: Record<string, string> = {
    "/App.tsx": ENTRY_CODE,
    "/Component.tsx": variant.code,
  };

  if (variant.css) {
    files[`/${variant.cssFilename ?? "Component.module.css"}`] = variant.css;
  }
  return (
    <div className={styles.wrap}>
      <SandpackProvider
        template="react-ts"
        theme="dark"
        files={files}
        options={{ activeFile: "/Component.tsx" }}
      >
        <SandpackLayout>
          <SandpackPreview
            showOpenInCodeSandbox={false}
            showRefreshButton
            style={{ height: 280 }}
          />
        </SandpackLayout>
      </SandpackProvider>
    </div>
  );
}
