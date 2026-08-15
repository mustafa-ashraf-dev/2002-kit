import Link from "next/link";
import { categories } from "@/lib/registry";
import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.bar}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoDot} aria-hidden="true" />
          BASTION
        </Link>

        <nav className={styles.nav} aria-label="Primary">
          <div className={styles.dropdown}>
            {/* popoverTarget wires this button to the menu below by id.
                The browser handles opening, closing on outside click,
                closing on Escape, and returning focus — all natively,
                no useState/useEffect/click-outside listener needed. */}
            <button
              type="button"
              popoverTarget="categories-menu"
              className={styles.navLink}
            >
              Categories
              <span className={styles.chevron} aria-hidden="true">
                ▾
              </span>
            </button>

            <div
              id="categories-menu"
              popover="auto"
              className={styles.dropdownMenu}
            >
              {categories.map((cat) => (
                <Link
                  key={cat.slug.join("-")}
                  href={`/library/${cat.slug.join("-")}`}
                  className={styles.dropdownItem}
                >
                  {cat.title}
                </Link>
              ))}
            </div>
          </div>

          <Link href="/about" className={styles.navLink}>
            About
          </Link>
        </nav>

        <div className={styles.spacer} />

        <a
          href="https://github.com"
          className={styles.ghLink}
          target="_blank"
          rel="noreferrer"
        >
          GitHub ↗
        </a>
      </div>
    </header>
  );
}
