import { codeToHtml } from "shiki";
import type { CodeVariant } from "./types";

export interface HighlightedVariant extends CodeVariant {
  html: string;
  cssHtml?: string;
}

export async function highlightVariants(
  variants: CodeVariant[],
): Promise<HighlightedVariant[]> {
  return Promise.all(
    variants.map(async (variant) => {
      const html = await codeToHtml(variant.code, {
        lang: variant.language,
        theme: "github-dark-default",
      });
      const cssHtml = variant.css
        ? await codeToHtml(variant.css, {
            lang: "css",
            theme: "github-dark-default",
          })
        : undefined;
      return { ...variant, html, cssHtml };
    }),
  );
}
