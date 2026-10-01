import { getConceptBySlug, getRandomConcept } from "@/lib/fetchdata";
import styles from "./page.module.css";
import Link from "next/link";
import ScrollProgressBar from "@/design/ui/ScrollProgressBar";
const ConceptsSlugPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  const concept = getConceptBySlug(slug);
  const nextUpConcept = getRandomConcept();
  return (
    <>
      <ScrollProgressBar />
      <main className={styles.wrap}>
        <div className={styles.articleHead}>
          <span className={styles.kindTag}>{concept?.kind || "process"}</span>
          <h1>
            {concept?.title || "What's actually inside that 6-digit code?"}
          </h1>
          <div className={styles.readMeta}>
            {concept?.readTime || "0"} min read · updated{" "}
            {concept?.updatedTime || "2026-02-01"}
          </div>
        </div>

        {/* Start Concepts Content */}
        <div className={styles.content}>
          {/* Description */}
          {concept?.description && <p>{concept.description}</p>}

          {/* Body blocks */}
          {concept?.body.map((block, i) => {
            switch (block.type) {
              case "paragraph":
                return <p key={i}>{block.text}</p>;

              case "note":
                return (
                  <div key={i} className={styles.marginNote}>
                    <span className={styles.label}>
                      {block.label ?? "Note"}
                    </span>
                    <p>{block.text}</p>
                  </div>
                );

              case "pullQuote":
                return (
                  <div key={i} className={styles.pullQuote}>
                    {block.text}
                  </div>
                );

              case "heading":
                return <h2 key={i}>{block.text}</h2>;

              case "code":
                return (
                  <pre key={i}>
                    <code>{block.code}</code>
                  </pre>
                );

              default:
                return null;
            }
          })}
        </div>
        {/* End Concepts Content */}

        {/* Next Concepts */}
        <div className={styles.nextUp}>
          <div className={styles.nextUpLabel}>next up</div>

          <Link
            className={styles.nextCard}
            key={nextUpConcept.slug}
            data-name={nextUpConcept.title.toLowerCase()}
            data-tags={nextUpConcept.kind}
            href={`/concepts/${nextUpConcept.slug}`}
          >
            <div className={styles.nextCardKind}>{nextUpConcept.kind}</div>
            <div className={styles.nextCardTitle}>{nextUpConcept.title}</div>
            <span className={styles.nextCardArrow}>continue reading →</span>
          </Link>
        </div>
      </main>
    </>
  );
};

export default ConceptsSlugPage;
// body = [
// {
// bodyDesc:s
//
// }
// ]
