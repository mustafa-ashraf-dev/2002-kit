// src/lib/components.ts
import type { ComponentMeta } from "./types";

const buttonCss = `.btn {
  background-color: #0070f3;
  color: white;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}`;

export const SimpleButton: ComponentMeta = {
  slug: ["simple-button"],
  title: "Simple Button",
  category: ["ui"],
  description: "A basic button, used to test the code + css file split.",
  tags: ["ui", "button"],
  difficulty: "beginner",
  badges: [],
  variants: [
    {
      label: "Pure CSS/TSX",
      language: "tsx",
      cssFilename: "Button.module.css",
      code: `import styles from "./Button.module.css";

export default function Button() {
  return <button className={styles.btn}>Click me</button>;
}`,
      css: buttonCss,
      notes: "Just for testing the css file wiring — nothing fancy.",
    },
  ],
};
