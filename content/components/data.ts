// app/components/[slug]/page.tsx
import type { ComponentEntry } from "@/lib/types";
export const ComponentsData: ComponentEntry[] = [
  // add to content/components/data.ts
  {
    type: "component",
    slug: "sign-in-form",
    status: "stable",
    title: "Sign-in Form",
    description:
      "Native form semantics, password managers actually work with it.",
    tags: ["forms", "accessibility", "auth"],
    aiGenerated: true,
    aiPrompt: `Build a sign-in form (login form) with native form semantics: a real <form> containing a labeled email field (<input type="email" autocomplete="username">), a labeled password field (<input type="password" autocomplete="current-password">), and a <button type="submit"> labeled "Sign in" so Enter submits. Add the password visibility toggle as a <button type="button"> with accessible name "Show password"; put the federated sign-in buttons ("Continue with Google" / "Continue with Apple") above a sign-in method divider — the thin rule with "or" in the middle. The autocomplete tokens are load-bearing: they are what makes password managers recognize and fill the fields.`,
    code: `<form class="signin-card">
  <button type="button" class="oauth-btn">Continue with Google</button>
  <div class="divider"><span>or</span></div>
  <input type="email" placeholder="you@studio.com" autocomplete="off" aria-label="Email">
  <input type="password" placeholder="Password" autocomplete="off" aria-label="Password">
  <button type="button" class="submit-btn">Sign in</button>
</form>`,

    cssCode: `.signin-card {
  display: flex;
  flex-direction: column;
  gap: 14px;
  width: 280px;
  padding: 20px;
  border-radius: 12px;
  border: 1px solid #2A2D33;
  background: #1A1C21;
  font-family: system-ui, sans-serif;
}
.oauth-btn, .submit-btn, input {
  height: 40px;
  border-radius: 8px;
  font-size: 14px;
}
.oauth-btn {
  border: 1px solid #2A2D33;
  background: #121316;
  color: #F2F0EB;
  cursor: pointer;
}
.divider {
  display: flex;
  align-items: center;
  gap: 10px;
  color: #9E9C96;
  font-size: 12px;
}
.divider::before, .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #2A2D33;
}
input {
  padding: 0 12px;
  border: 1px solid #2A2D33;
  background: #121316;
  color: #F2F0EB;
  outline: none;
}
input:focus { border-color: #E2823C; }
.submit-btn {
  border: none;
  background: #E2823C;
  color: #1a0f06;
  font-weight: 600;
  cursor: pointer;
}`,

    cardCssCode: `.signin-card {
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: 208px;
  padding: 12px;
  border-radius: 12px;
  border: 1px solid #2A2D33;
  background: #1A1C21;
  font-family: system-ui, sans-serif;
}
.oauth-btn, .submit-btn, input {
  height: 24px;
  border-radius: 7px;
  font-size: 10.5px;
}
.oauth-btn {
  border: 1px solid #2A2D33;
  background: #121316;
  color: #F2F0EB;
  cursor: pointer;
}
.divider {
  display: flex;
  align-items: center;
  gap: 8px;
  color: #9E9C96;
  font-size: 10px;
}
.divider::before, .divider::after {
  content: "";
  flex: 1;
  height: 1px;
  background: #2A2D33;
}
input {
  padding: 0 8px;
  border: 1px solid #2A2D33;
  background: #121316;
  color: #F2F0EB;
  outline: none;
}
input:focus { border-color: #E2823C; }
.submit-btn {
  border: none;
  background: #E2823C;
  color: #1a0f06;
  font-weight: 600;
  cursor: pointer;
}`,
    history: [
      {
        version: "2026.03",
        label: "current",
        changeSummary:
          "Used real autocomplete tokens instead of generic input types",
        codeAfter: `<input type="email" autocomplete="username">\n<input type="password" autocomplete="current-password">`,
        explanation:
          "The autocomplete tokens aren't decoration — they're what actually makes password managers (1Password, Chrome's built-in one) recognize these specific fields and offer to fill them. Skip these and autofill either doesn't work or fills the wrong field.",
        whyNot: {
          question:
            'why not just autocomplete="email" and autocomplete="password"?',
          answer:
            'Those aren\'t real values the spec defines for this purpose. "username" and "current-password" are the actual tokens browsers and password managers look for — using the wrong string silently breaks autofill with no error anywhere.',
        },
      },
    ],
    cardPreviewMode: "icon",
    previewIcon: "⚿",
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
