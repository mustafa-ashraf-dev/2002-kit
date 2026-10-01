"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export interface FooterLink {
  label: string;
  href: string;
}

export interface FooterProps {
  tagline?: string;
  exploreLinks?: FooterLink[];
  connectLinks?: FooterLink[];
  copyright?: string;
}

export function Footer({
  tagline = "A working notebook of real UI, broken and fixed in public, plus the concepts behind it.",
  exploreLinks = [
    { label: "components", href: "/components" },
    { label: "concepts", href: "/concepts" },
    { label: "patterns", href: "/patterns" },
    { label: "articles", href: "/articles" },
  ],
  connectLinks = [
    {
      label: "résumé",
      href: "https://drive.google.com/file/d/1l7WE8lqD1thkd_DAHz6NHRvmiPF61EIE/view?usp=sharing",
    },
    { label: "github", href: "https://github.com/mustafa-ashraf-dev" },
    { label: "email", href: "mailto:mostafa.ashraf.dev@gmail.com" },
  ],
  copyright = "© 2026 2002 devs — built and broken in public",
}: FooterProps) {
  const pathname = usePathname(); // the current path, e.g. "/components"

  const isActive = (href: string) => pathname?.startsWith(href);

  return (
    <footer className="site-footer">
      <div className="footer-grid">
        <div className="footer-brand">
          <Link className="brand" href="/">
            <span className="brand-mark">02</span>
            <span className="brand-name">2002 devs</span>
          </Link>
          <p>{tagline}</p>
        </div>
        <div className="footer-col">
          <h4>explore</h4>
          {exploreLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
            >
              {l.label}
            </Link>
          ))}
        </div>
        <div className="footer-col">
          <h4>connect</h4>
          {connectLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className={isActive(l.href) ? "active" : ""}
              target="_blank"
              rel="noreferrer"
            >
              {l.label}
            </Link>
          ))}
        </div>
      </div>
      <div className="footer-bottom">
        <span>{copyright}</span>
        <Link href="#top">back to top ↑</Link>
      </div>
    </footer>
  );
}
