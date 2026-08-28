// src/components/site/LazyPreview.tsx
"use client";
import { componentPreviews } from "@/lib/componentPreviews";
import listStyles from "../../../app/library/library.module.css";

export default function LazyPreview({
  slug,
  fallbackTitle,
}: {
  slug: string;
  fallbackTitle: string;
}) {
  const DynamicComponent = componentPreviews[slug];
  if (!DynamicComponent)
    return <span className={listStyles.cardPreviewInner}>{fallbackTitle}</span>;
  return <DynamicComponent />;
}
