import Link from "next/link";
import { components } from "@/lib/registry";
import { SecurityBadge } from "@/components/site/SecurityBadge";
import listStyles from "./library.module.css";

export default function LibraryPage() {
  return (
    <>
      <div className={listStyles.headerRow}>
        <h1>All components</h1>
        <span className={listStyles.countBadge}>{components.length} total</span>
      </div>

      <div className={listStyles.grid}>
        {components.map((c) => (
          <Link
            key={`${c.category.join("-")}-${c.slug.join("-")}`}
            href={`/library/${c.category.join("-")}/${c.slug.join("-")}`}
            className={listStyles.card}
          >
            <div className={listStyles.cardTagRow}>
              <span className={listStyles.cardTag}>
                {c.tags[0] ?? c.difficulty}({c.variants.length})
              </span>
            </div>
            <div className={listStyles.cardPreview}>
              <span className={listStyles.cardPreviewInner}>{c.title}</span>
            </div>
            <div className={listStyles.cardDivider} />
            <div className={listStyles.cardFooter}>
              <div className={listStyles.cardTitleRow}>
                <h3 className={listStyles.rowTitle}>{c.title}</h3>
                <span className={listStyles.viewCode}>View code →</span>
              </div>
              <p className={listStyles.rowDesc}>{c.description}</p>
              <div className={listStyles.badges}>
                {c.badges.slice(0, 2).map((b) => (
                  <SecurityBadge key={b.label} badge={b} />
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
