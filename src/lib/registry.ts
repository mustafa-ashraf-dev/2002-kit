// Central registry. Mustafa: this is where every component you build
// gets registered so it shows up in the sidebar, search, and category
// pages automatically. The site reads from this file only — no other
// place needs to change when you add a component.

import { MagneticGlassButton } from "./components";
import { Category, CategoryMeta, ComponentMeta } from "./types";

// Hero section, shown on the home page Category list. Each category has a slug (used in the URL), a title, and a description.
export const categories: CategoryMeta[] = [
  {
    slug: ["forms"],
    title: "Forms & Validation",
    description:
      "Production-ready forms hardened against XSS, injection, and abuse — not just validated for shape.",
  },
  {
    slug: ["accessibility", "performance"],
    title: "Accessibility & Performance",
    description: `Components built for screen readers, keyboard-only use, and color-blind users from the first line of code.
     Performance Lazy loading, virtualization, and memoization patterns with measured impact.`,
  },
  {
    slug: ["state-management"],
    title: "State Management",
    description: "Context API and Redux patterns for real, non-trivial state.",
  },
  {
    slug: ["security"],
    title: "Security Utilities",
    description:
      "Rate limiting, sanitization, and abuse-prevention hooks and helpers.",
  },
  {
    slug: ["ui"],
    title: "UI Components",
    description:
      "Reusable UI elements for building modern, accessible interfaces.",
  },
];

// Sample entry — placeholder so the templates render. Replace with your
// real components; keep the same shape.
export const components: ComponentMeta[] = [MagneticGlassButton];

export function getComponentsByCategory(categorySlug: string) {
  return components.filter((c) => c.category.join("-") === categorySlug);
}

export function getComponent(categorySlug: string, slug: string) {
  return components.find(
    (c) => c.category.join("-") === categorySlug && c.slug.join("-") === slug,
  );
}
