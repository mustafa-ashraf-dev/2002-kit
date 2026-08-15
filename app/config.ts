export const siteName = process.env.NEXT_PUBLIC_SITE_NAME || "Bastion";

export const title =
  process.env.NEXT_PUBLIC_TITLE ||
  "Bastion — Hardened, accessible React components";

export const description =
  process.env.NEXT_PUBLIC_DESCRIPTION ||
  "Copy-paste forms, accessible UI, and security utilities — each shown in a pure and a library version, explained line by line.";

const defaultBaseURL = "https://bastion.vercel.app";

// Vercel sets VERCEL_PROJECT_PRODUCTION_URL automatically at build time —
// nothing to configure by hand for a standard Vercel deploy. (Previously
// this checked NEXT_PUBLIC_VERCEL_URL but built the value from a
// different variable, so it always evaluated to undefined.)
const vercelURL =
  process.env.VERCEL_PROJECT_PRODUCTION_URL &&
  `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

export const baseURL =
  process.env.NEXT_PUBLIC_URL || vercelURL || defaultBaseURL;
