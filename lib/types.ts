interface BaseEntry {
  slug: string;
  title: string;
  description: string;
  tags?: string[];
}

export interface ComponentVersion {
  version: string;
  label: "current" | "deprecated";
  changeSummary: string;
  codeBefore?: string; // shown as plain text in a diff block, never executed
  codeAfter: string;
  explanation: string;
  whyNot?: { question: string; answer: string };
}

export interface ComponentEntry extends BaseEntry {
  type: "component";
  status: "stable" | "draft" | "deprecated";
  history?: ComponentVersion[] | undefined;
  code: string; // one HTML, used by both card and slug page
  cssCode: string; // full-size CSS (slug page)
  cardCssCode?: string; // small CSS (card), falls back to cssCode
  aiGenerated?: boolean;
  aiPrompt?: string;
  cardPreviewMode: "icon" | "scaled";
  previewIcon?: string;
}
type Block =
  | { type: "paragraph"; text: string }
  | { type: "note"; label?: string; text: string }
  | { type: "pullQuote"; text: string }
  | { type: "code"; lang: string; code: string }
  | { type: "heading"; text: string };

export interface ConceptEntry extends BaseEntry {
  type: "concept";
  slug: string;
  title: string;
  description: string;
  kind: "fundamentals" | "process" | "comparison";
  readTime: string;
  tags?: string[];
  updatedTime?: string;
  note?: string; // a short standalone callout — separate from body, always visible, not tucked into a margin-note
  noteLabel?: string;
  pullQuote: string;
  body: Block[];
}

export interface ArticleEntry extends BaseEntry {
  type: "article";
  readTime: string;
  body: string;
  date: string;
  excerpt: string;
}

export interface PatternEntry extends BaseEntry {
  type: "pattern";
  kind: "fundamentals" | "process" | "comparison";
  readTime: string;
  body: string;
}
// ArticleEntry, PatternEntry follow the same shape

type ContentEntry = ComponentEntry | ConceptEntry | ArticleEntry | PatternEntry;
