// Core data shapes for the Bastion component registry.
// Mostafa: this is the schema every component entry follows.
// Add new entries in registry.ts using this shape.

export type Category =
  | "forms"
  | "accessibility"
  | "performance"
  | "state-management"
  | "security"
  | "ui";

export type Difficulty = "beginner" | "intermediate" | "advanced";

// A single "badge" shown on a component card / detail page,
// e.g. "XSS-safe", "ARIA-compliant", "Rate-limited".
export interface SecurityBadge {
  label: string;
  description: string;
}

// Each component can ship a "pure" implementation (no external
// libraries) and/or a "library" implementation (using a well-known
// package). At least one must be present.
export interface CodeVariant {
  label: string;
  language: string;
  code: string;
  css?: string; // companion CSS Module, optional
  cssFilename?: string; // defaults to "Component.module.css"
  notes?: string;
}

export interface ComponentMeta {
  slug: string[]; // used in the URL: /library/forms/secure-contact-form
  title: string;
  category: Category[];
  description: string;
  tags: string[];
  difficulty: Difficulty;
  badges: SecurityBadge[];
  variants: CodeVariant[];
  // Longer-form line-by-line explanation, rendered as markdown-ish text.
  explanation?: string;
}

export interface CategoryMeta {
  slug: Category[]; // used in the URL: /library/accessibility
  title: string;
  description: string;
}
