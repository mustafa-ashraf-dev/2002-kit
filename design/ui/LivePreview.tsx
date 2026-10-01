// design/ui/LivePreview.tsx
"use client";

export interface LivePreviewProps {
  code: string;
  cssCode?: string;
}

export function LivePreview({ code, cssCode }: LivePreviewProps) {
  const doc = `
    <!DOCTYPE html>
    <html>
      <head>
        <style>
          * { box-sizing: border-box; margin: 0; }
          body {
            display: flex;
            align-items: center;
            justify-content: center;
            min-height: 100vh;
            font-family: system-ui, sans-serif;
            background: transparent;
            color: #F2F0EB;
          }
          ${cssCode ?? ""}
        </style>
      </head>
      <body>${code}</body>
    </html>
  `;

  return (
    <iframe
      srcDoc={doc}
      title="Live component preview"
      style={{
        width: "100%",
        height: "100%",
        border: "none",
        background: "transparent",
      }}
      sandbox="allow-same-origin"
    />
  );
}
