import Link from "next/link";
import { components } from "@/lib/registry";
import { SecurityBadge } from "@/components/site/SecurityBadge";
import listStyles from "./library.module.css";
import LazyPreview from "@/components/site/LazyPreview";

export default function LibraryPage() {
  console.log(components);
  return (
    <section className={listStyles.libraryPageSection}>
      <div className={listStyles.headerRow}>
        <h1>All components</h1>
        <span className={listStyles.countBadge}>{components.length} total</span>
      </div>

      <div className={listStyles.grid}>
        {components.map((c) => (
          <div
            key={`${c.category.join("-")}-${c.slug.join("-")}`}
            className={`${listStyles.card} glassEffect`}
          >
            <div className={listStyles.cardTagRow}>
              <span className={listStyles.cardTag}>
                {c.tags[0] ?? c.difficulty}({c.variants.length})
              </span>
            </div>
            {/* Card preview component */}
            <div className={listStyles.cardPreview}>
              <LazyPreview slug={c.slug.join("-")} fallbackTitle={c.title} />
            </div>{" "}
            <Link href={`/library/${c.category.join("-")}/${c.slug.join("-")}`}>
              {/* Card divider */}
              <div className={listStyles.cardDivider} />
              <div className={listStyles.cardFooter}>
                <div className={listStyles.cardTitleRow}>
                  <h3 className={listStyles.rowTitle}>{c.title}</h3>
                  <span className={listStyles.viewCode}>View code →</span>
                </div>
                {/* Card description */}
                <p className={listStyles.rowDesc}>{c.description}</p>
                {/* Security badges */}
                <div className={listStyles.badges}>
                  {c.badges.slice(0, 2).map((b) => (
                    <SecurityBadge key={b.label} badge={b} />
                  ))}
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
