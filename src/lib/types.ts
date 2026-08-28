// Core data shapes for the Bastion component registry.
// Mostafa: this is the schema every component entry follows.
// Add new entries in registry.ts using this shape.

import { NextComponentType } from "next";

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
  /** Explicit, not inferred from whether `prompt` happens to be set. */
  source: "human" | "ai";
  /** Only meaningful when source === "ai" — the actual prompt used. */
  prompt?: string;
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
  /** A real component, rendered directly in list/grid thumbnails — no
   * Sandpack, since sandboxing every card would mean dozens of bundler
   * instances on one page. This is a SEPARATE source from
   * variants[].code — the two can drift if you edit one and forget the
   * other. The detail page's Sandpack preview stays the "guaranteed
   * accurate" one, since it literally runs variants[0].code. */
  preview?: NextComponentType;
}

export interface CategoryMeta {
  slug: Category[]; // used in the URL: /library/accessibility
  title: string;
  description: string;
}
