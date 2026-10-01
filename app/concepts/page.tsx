import { getFilteredConcepts } from "@/lib/fetchdata";
import styles from "./page.module.css";
import Search from "@/design/ui/search";
import Link from "next/link";

export default async function ConceptsPage({
  searchParams,
}: {
  searchParams: Promise<{ query?: string; tag?: string }>;
}) {
  const { query, tag } = await searchParams; // same async-params rule as before
  const concepts = getFilteredConcepts({ query, tag });
  return (
    <main className={`wrap wrapper`}>
      <div className="pageHeading">
        <h1 className="heading">Concepts</h1>
        <p>
          {concepts.length || 0} pieces of real UI, each with its own history.
          Browse or search.
        </p>
      </div>
      {/* Start Controls Search */}
      <div className="controls">
        <div className="search">
          <span className="searchIcon">⌕</span>
          <Search placeholder="Search Concepts" />
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
        {concepts.length || 0} concepts
      </div>
      {/* Start Concepts Grid */}
      <div className={styles.grid} id="conceptGrid">
        {concepts.map((c) => {
          return (
            <Link
              key={c.slug}
              className={styles.conceptCard}
              data-name={c.title.toLowerCase()}
              data-tags={c.kind}
              href={`/concepts/${c.slug}`}
            >
              <span className={styles.conceptKind}>{c.kind}</span>
              <div className={styles.conceptBody}>
                <div className={styles.conceptTitle}>{c.title}</div>
                <div className={styles.conceptDesc}>{c.description}</div>
              </div>
            </Link>
          );
        })}
      </div>
      {/* End Concepts Grid */}
    </main>
  );
}
