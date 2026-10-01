// app/components/[slug]/page.tsx
import type { ComponentEntry } from "@/lib/types";
export const ComponentsData: ComponentEntry[] = [
  {
    type: "component",
    slug: "button",
    status: "stable",
    code: `<button class="btn">Save changes</button>`,
    cssCode: `.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
  background-color: green;
  padding: 0.5rem 1rem;
}`,
    title: "Button",
    description: "Focus-visible states, no invisible focus rings.",
    tags: ["accessibility", "forms"],
    history: [
      {
        version: "2026.02",
        label: "current",
        changeSummary:
          "Added focus-visible instead of removing the outline entirely",
        codeBefore: `.btn:focus { outline: none; }`,
        codeAfter: `.btn:focus-visible {
  outline: 2px solid var(--accent);
  outline-offset: 2px;
}`,
        explanation:
          "The first version deleted the focus outline because it clashed with the design. It worked fine using a mouse — it did not work for anyone navigating by keyboard, since the button became invisible the moment it was focused.",
        whyNot: {
          question: "why not just style :focus?",
          answer:
            ':focus fires on every interaction, including mouse clicks — exactly the "ugly ring on click" issue the outline was originally removed to avoid.',
        },
      },
      {
        version: "2024.06",
        label: "deprecated",
        changeSummary: "First version — outline removed for visual polish",
        codeAfter: `.btn:focus { outline: none; }`,
        explanation:
          "First pass. Removed the default focus outline because it looked inconsistent across browsers. Didn't test with a keyboard — didn't know to.",
      },
    ],
  },
];
// 1 Core Foundation Components
// Button: The fundamental interactive element used for actions, forms, and triggers, heavily customized with variants.
// Dialog / Sheet / Drawer: Essential modal and overlay components for popups, mobile-friendly menus, and side panels.
// Form / Input / Label: Wrappers integrating tightly with form libraries like React Hook Form for robust validation and data entry.
// Dropdown Menu / Popover: Contextual floating menus used heavily in navigation bars, user profiles, and action lists.
// Card: A layout container used to group related content, statistics, or form sections.
// 2 Data Display & Navigation
// Data Table: Built on TanStack Table primitives to handle sorting, filtering, and pagination cleanly.
// Tabs: Organizes content into easily switchable views within the same interface.
// Avatar: Displays user profile images or fallback initials cleanly.
// Badge: Highlights statuses, counts, or tags with minimal styling.
// Toast: Lightweight notification popups for alerts and feedback messages.
