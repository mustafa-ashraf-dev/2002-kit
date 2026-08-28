import Link from "next/link";
import { categories } from "@/lib/registry";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      {/* Hidden SVG filter powering the glass distortion on .header below.
          Needs to exist in the DOM for backdrop-filter: url(#glass-distortion)
          to find it — kept at 0×0 so it renders nothing itself. Scoped to
          this component since it's the only thing using it right now; move
          it to layout.tsx if you reuse the effect elsewhere later. */}
      <svg aria-hidden="true" focusable="false" className={styles.filterDef}>
        <filter
          id="glass-distortion"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="0.012 0.02"
            numOctaves="2"
            seed="7"
            result="noise"
          />
          <feGaussianBlur in="noise" stdDeviation="1.5" result="softNoise" />
          <feDisplacementMap
            in="SourceGraphic"
            in2="softNoise"
            scale="90"
            xChannelSelector="R"
            yChannelSelector="G"
          />
        </filter>
      </svg>

      <header className={styles.header}>
        <div className={styles.bar}>
          <Link href="/" className={styles.logo}>
            2002KIT
          </Link>

          <nav className={styles.nav} aria-label="Primary">
            <div className={styles.dropdown}>
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
            href="https://github.com/mustafa-ashraf-dev"
            className={styles.ghLink}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
      </header>
    </>
  );
}
