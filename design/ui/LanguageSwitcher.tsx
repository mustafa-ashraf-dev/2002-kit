// design/ui/LanguageSwitcher.tsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function LanguageSwitcher() {
  const pathname = usePathname(); // e.g. "/ar/components/button"

  // the first path segment is the locale, once [locale] routing exists
  const segments = pathname.split("/").filter(Boolean);
  const currentLocale = segments[0] === "ar" ? "ar" : "en";
  const restOfPath = segments.slice(1).join("/"); // everything after the locale

  const enHref = `/en${restOfPath ? `/${restOfPath}` : ""}`;
  const arHref = `/ar${restOfPath ? `/${restOfPath}` : ""}`;

  return (
    <div className="lang-switch">
      <Link
        href={enHref}
        className={`lang-option${currentLocale === "en" ? " active" : ""}`}
      >
        EN
      </Link>
      <Link
        href={arHref}
        className={`lang-option${currentLocale === "ar" ? " active" : ""}`}
      >
        AR
      </Link>
    </div>
  );
}
