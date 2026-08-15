import { notFound } from "next/navigation";
import Link from "next/link";
import {
  categories,
  components,
  getComponentsByCategory,
} from "@/lib/registry";
import { SecurityBadge } from "@/components/site/SecurityBadge";
import listStyles from "../library.module.css";

export default async function CategoryPage({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;

  const categoryData = categories.find((c) => c.slug.join("-") === category);

  if (!categoryData) notFound();

  const items = getComponentsByCategory(categoryData.slug.join("-"));

  return (
    <>
      {/* Category Header */}
      <div className={listStyles.headerRow}>
        <div>
          <h1>{categoryData.title}</h1>
          <p className={listStyles.headerDesc}>{categoryData.description}</p>
        </div>
        <span className={listStyles.countBadge}>
          {items.length} / {components.length}
        </span>
      </div>
      {/* Checking if there is no components  */}
      {items.length === 0 ? (
        <p className={listStyles.empty}>No components here yet.</p>
      ) : (
        // Component Cards Grid
        <div className={listStyles.grid}>
          {items.map((c) => (
            <Link
              key={c.slug.join("-")}
              href={`/library/${c.category.join("-")}/${c.slug.join("-")}`}
              className={listStyles.card}
            >
              <div className={listStyles.cardTagRow}>
                {/* Component Tag top left the Card */}
                <span className={listStyles.cardTag}>
                  {c.tags[0] ?? c.difficulty}({c.variants.length})
                </span>
              </div>
              {/* Card preview the component */}
              <div className={listStyles.cardPreview}>
                <span className={listStyles.cardPreviewInner}>{c.title}</span>
              </div>

              {/* Card Divider */}
              <div className={listStyles.cardDivider} />
              {/* Card Footer */}
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
      )}
    </>
  );
}
