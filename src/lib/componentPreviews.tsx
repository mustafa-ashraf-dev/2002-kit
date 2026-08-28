// src/lib/componentPreviews.tsx
import dynamic from "next/dynamic";
import type { ComponentType } from "react";

// dynamic() called once here, at module scope — not inside a component's
// render — so the reference stays stable across re-renders.
export const componentPreviews: Record<string, ComponentType> = {
  "magnetic-glass-button": dynamic(
    () =>
      import("@/components/previews/MagneticGlassButton/MagneticGlassButton"),
  )

};
