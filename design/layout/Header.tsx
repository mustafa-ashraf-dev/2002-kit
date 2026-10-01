"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LanguageSwitcher } from "../ui/LanguageSwitcher";

export interface HeaderProps {
  activePath?: string;
}

const NAV_ITEMS = [
  { label: "components", href: "/components" },
  { label: "concepts", href: "/concepts" },
  { label: "patterns", href: "/patterns" },
  { label: "articles", href: "/articles" },
  { label: "about", href: "/about" },
];

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname(); // the current path, e.g. "/components"

  // const isActive = (href: string) => pathname === href;
  const isActive = (href: string) => pathname?.startsWith(href);
  return (
    <header className="site-header">
      <div className="wrap header-inner">
        <Link className="brand" href="/" onClick={() => setOpen(false)}>
          <span className="brand-mark">02</span>
          <span className="brand-name">2002 devs</span>
        </Link>

        <button
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="main-nav-list"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span
            className={`menu-icon ${open ? "open" : ""}`}
            aria-hidden="true"
          >
            <span />
            <span />
            <span />
          </span>
        </button>

        <nav className={`main-nav ${open ? "open" : ""}`} aria-label="Main">
          <ul id="main-nav-list">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className={isActive(item.href) ? "active" : ""}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <LanguageSwitcher />
      </div>
    </header>
  );
}
