// export async function getComponentBySlug(slug: string) {
//   return await db.components.findOne({ slug });

import { ArticlesData } from "@/content/articles/data";
import { ComponentsData } from "@/content/components/data";
import { ConceptsData } from "@/content/concepts/data";
import { ComponentEntry } from "./types";

// }

// Get All components by slug
// .find() walks through the array one item at a time,
// running your function (c.slug === slug) on each. The moment it hits an item
// where that function returns true, it stops immediately and returns that item
// When it reaches the end of the array without finding a match, it returns undefined.
//  not an error, not null, just undefined
export function getComponentBySlug(slug: string): ComponentEntry | undefined {
  return ComponentsData.find((c) => c.slug === slug);
}
// Get all Component Slugs for SSG
export function getAllComponentSlugs() {
  return ComponentsData.map((c) => c.slug);
}
export function getAllComponents() {
  return ComponentsData;
}
// filter for components search input
export function getFilteredComponents({
  query,
  tag,
}: {
  query?: string;
  tag?: string;
}) {
  const q = (query ?? "").toLowerCase();
  return ComponentsData.filter((c) => {
    const matchesQuery = !q || c.title.toLowerCase().includes(q);
    const matchesTag = !tag || tag === "all" || c.tags?.includes(tag);
    return matchesQuery && matchesTag;
  });
}

// Get all articles
// Explain
export function getFilteredArticles({
  query,
  tag,
}: {
  query?: string;
  tag?: string;
}) {
  const q = (query ?? "").toLowerCase();
  return ArticlesData.filter((a) => {
    const matchesQuery = !q || a.title.toLowerCase().includes(q);
    const matchesTag = !tag || tag === "all" || a.tags?.includes(tag);
    return matchesQuery && matchesTag;
  });
}

// Get all patterns

// Get all concepts by slug
export const getConceptBySlug = (slug: string) => {
  return ConceptsData.find((c) => c.slug === slug);
};
// Get random concept for the next up section
export const getRandomConcept = () => {
  const randomIndex = Math.floor(Math.random() * ConceptsData.length);
  return ConceptsData[randomIndex];
};
// Get all concepts Filtered
export function getFilteredConcepts({
  query,
  tag,
}: {
  query?: string;
  tag?: string;
}) {
  const q = (query ?? "").toLowerCase();
  return ConceptsData.filter((c) => {
    const matchesQuery = !q || c.title.toLowerCase().includes(q);
    const matchesTag = !tag || tag === "all" || c.tags?.includes(tag);
    return matchesQuery && matchesTag;
  });
}
