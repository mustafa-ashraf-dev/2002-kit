"use client";

export interface LivePreviewProps {
  code: string;
  cssCode?: string;
  variant?: "full" | "card";
}

export function LivePreview({
  code,
  cssCode,
  variant = "full",
}: LivePreviewProps) {
  const isCard = variant === "card";

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
            /* transparent in the card so the dot grid shows through */
            background: ${isCard ? "#2a2d33" : "#2a2d33"};
            color: #F2F0EB;
          }
          ${cssCode ?? ""}
        </style>
      </head>
      <body>${code}</body>
    </html>
  `;

  if (isCard) {
    return (
      <div className="card-preview-box">
        <iframe
          className="card-preview-frame"
          srcDoc={doc}
          title="Component card preview"
          sandbox="allow-same-origin"
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <iframe
      className="mini-live-preview"
      srcDoc={doc}
      title="Live component preview"
      sandbox="allow-same-origin"
    />
  );
}
