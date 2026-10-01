// app/page.tsx
import { Hero } from "@/design/layout/Hero";
import { getFilteredComponents, getFilteredConcepts } from "@/lib/fetchdata";
import Link from "next/link";
import { ComingSoon } from "@/design/ui/ComingSoon";
import { LivePreview } from "@/design/ui/LivePreview";
import { Badge } from "@/design/ui/Badge";
import styles from "@/app/components/page.module.css";
const HOMEPAGE_LIMIT = 3; // homepage only ever teases a handful — full lists live on their own pages

export default function HomePage() {
  const components = getFilteredComponents({}).slice(0, HOMEPAGE_LIMIT);
  const concepts = getFilteredConcepts({}).slice(0, HOMEPAGE_LIMIT);
  // const articles = getFilteredArticles({}).slice(0, HOMEPAGE_LIMIT);
  // const patterns = getFilteredPatterns({}).slice(0, HOMEPAGE_LIMIT);

  return (
    <>
      <Hero />

      <main className="wrap">
        {/* Component Section */}
        <section>
          <div className="section-head">
            <span className="section-title">components</span>
            <Link className="view-all" href="/components">
              view all →
            </Link>
          </div>
          <div className="grid">
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
        </section>
        {/* Concepts Section */}
        <section>
          <div className="section-head">
            <span className="section-title">concepts</span>
            <Link className="view-all" href="/concepts">
              view all →
            </Link>
          </div>
          {concepts.map((c) => (
            <Link
              key={c.slug}
              className="concept-item"
              href={`/concepts/${c.slug}`}
            >
              <span className="c-kind">{c.kind}</span>
              <div>
                <div className="c-title">{c.title}</div>
                <div className="c-desc">{c.description}</div>
              </div>
            </Link>
          ))}
        </section>
        {/*  articles Section Coming soon*/}
        <section>
          <ComingSoon
            title="articles"
            items={["How ai works?", "Juniors Positions in era of ai"]}
          />
          {/* <div className="section-head"> */}
          {/* <span className="section-title">articles</span> */}
          {/* <span className="coming-soon-title">Coming soon...</span> */}

          {/* <Link className="view-all" href="/articles">
              view all →
            </Link> */}
          {/* </div> */}
          {/* {articles.map((a) => (
            <Link
              key={a.slug}
              className="article-list-item"
              href={`/articles/${a.slug}`}
            >
              <span className="a-date">{a.date}</span>
              <div>
                <div className="a-title">{a.title}</div>
                <div className="a-excerpt">{a.excerpt}</div>
              </div>
            </Link>
          ))} */}
        </section>

        {/* Patterns Section Coming soon */}
        <section>
          <ComingSoon
            title="patterns"
            items={[
              "debounce vs throttle",
              "optimistic UI updates",
              "custom hooks",
            ]}
          />
          {/* <div className="section-head"> */}
          {/* <span className="section-title">patterns</span> */}
          {/* <Link className="view-all" href="/patterns">
              view all →
            </Link> */}
          {/* </div> */}
          {/* {patterns.map((p) => (
            <Link
              key={p.slug}
              className="concept-item"
              href={`/patterns/${p.slug}`}
            >
              <span className="c-kind">{p.category}</span>
              <div>
                <div className="c-title">{p.title}</div>
                <div className="c-desc">{p.description}</div>
              </div>
            </Link>
          ))} */}
        </section>
      </main>
    </>
  );
}
