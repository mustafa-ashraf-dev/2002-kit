// app/components/page.tsx
import Link from "next/link";
import { getFilteredComponents } from "@/lib/fetchdata"; // see note below
import styles from "./page.module.css";
import { Badge } from "@/design/ui/Badge";
import Search from "@/design/ui/search";
import { LivePreview } from "@/design/ui/LivePreview";

export default async function ComponentsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; tag?: string }>;
}) {
  const { query, tag } = await searchParams; // same async-params rule as before
  const components = getFilteredComponents({ query, tag });
  return (
    <main className={`wrap wrapper`}>
      <div className="pageHeading">
        <h1 className="heading">Components</h1>
        <p>
          {components.length || 0} pieces of real UI, each with its own history.
          Browse or search.
        </p>
      </div>
      {/* Start Controls Search */}
      <div className="controls">
        <div className="search">
          <span className="searchIcon">⌕</span>
          <Search placeholder="Search Components…" />
        </div>
        <div className="tagFilters" id="tagFilters">
          <button
            className={styles.tagChip + " " + styles.selected}
            data-tag="all"
          >
            all
          </button>
          <button className={styles.tagChip} data-tag="accessibility">
            accessibility
          </button>
          <button className={styles.tagChip} data-tag="performance">
            performance
          </button>
          <button className={styles.tagChip} data-tag="forms">
            forms
          </button>
          <button className={styles.tagChip} data-tag="layout">
            layout
          </button>
          <button className={styles.tagChip} data-tag="security">
            security
          </button>
        </div>
      </div>
      {/* End Controls Search */}

      <div className="resultCount" id="resultCount">
        {components.length || 0} components
      </div>
      {/* Start Components Grid */}
      <div className={styles.grid} id="componentGrid">
        {" "}
        {components.map((c) => {
          return (
            <Link
              key={c.slug}
              className={styles.card}
              href={`/components/${c.slug}`}
              data-name="button"
              data-tags="accessibility,forms"
            >
              {/* Preview if there is a preview show for the component */}
              {/* Preview CSS need to get fixed */}
              <LivePreview code={c.code} cssCode={c.cssCode} />

              <div className={styles.cardBody}>
                <div className={styles.cardTitle}>{c.title}</div>
                <div className={styles.cardDesc}>{c.description}</div>
                <div className={styles.cardFooter}>
                  <div>
                    {c.tags?.[0] && (
                      <span className={styles.cardTag}> {c.tags[0]}</span>
                    )}
                    <Badge status={c.status} />
                  </div>
                  <span className={styles.cardVersions}>
                    {c.history?.length || "0"} versions
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
