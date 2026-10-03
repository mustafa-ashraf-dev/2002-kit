// app/components/[slug]/page.tsx
import { getAllComponentSlugs, getComponentBySlug } from "@/lib/fetchdata";
import { LivePreview } from "@/design/ui/LivePreview";
import { CodeTabs } from "@/design/ui/CodeTabs";
import Link from "next/link";
import { Badge } from "@/design/ui/Badge";
import styles from "./page.module.css";
import { Metadata } from "next";
import { DiffCode } from "@/design/ui/DiffCode";
export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) return { title: "Component not found" };

  return {
    title: component.title,
    description: component.description,
    openGraph: {
      title: component.title,
      description: component.description,
    },
  };
}
export function generateStaticParams() {
  return getAllComponentSlugs().map((slug) => ({ slug }));
}

export default async function ComponentsPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const component = getComponentBySlug(slug);

  if (!component) return <>Not found</>;

  return (
    <main className={styles.wrapper}>
      <Link className={styles.backLink} href="/components">
        ← components
      </Link>

      <h1 className={styles.title}>{component.title}</h1>
      <p className={styles.description}>{component.description}</p>

      <div className={styles.metaRow}>
        <Badge status={component.status} />
        {component.aiGenerated && <Badge status="draft" label="ai-generated" />}
        {component.tags?.map((tag: string) => (
          <span key={tag} className={styles.tagChip}>
            {tag}
          </span>
        ))}
      </div>

      <div className={styles.previewFrame}>
        <LivePreview code={component.code} cssCode={component.cssCode} />{" "}
      </div>

      <div className={styles.sectionLabel}>implementation</div>
      <CodeTabs
        code={component.code}
        cssCode={component.cssCode}
        prompt={component.aiGenerated ? component.aiPrompt : undefined}
      />
      {component.history && component.history.length > 0 && (
        <>
          <div className={styles.sectionLabel}>
            history — {component.history.length} version
            {component.history.length !== 1 ? "s" : ""}
          </div>
          {/* Version History */}
          {component.history.map((v, i) => (
            <div key={v.version} className={styles.versionBlock}>
              <div className={styles.versionHead}>
                <span className={styles.versionDate}>{v.version}</span>
                <Badge status={v.label} />
              </div>
              <h3 className={styles.versionSummary}>{v.changeSummary}</h3>
              {/* Code Before and After */}

              {(v.codeBefore || v.codeAfter) && (
                <div className={styles.diff}>
                  {v.codeBefore && (
                    <DiffCode
                      code={v.codeBefore}
                      className={styles["diff-line"] + " " + styles.rm}
                    />
                  )}
                  {v.codeAfter && (
                    <DiffCode
                      code={v.codeAfter}
                      className={styles["diff-line"] + " " + styles.add}
                    />
                  )}
                </div>
              )}

              {/* Explanation code */}
              <p className={styles.versionExplanation}>{v.explanation}</p>
              {v.whyNot && (
                <div className={styles.marginNote}>
                  <span className={styles.label}>{v.whyNot.question}</span>
                  <p>{v.whyNot.answer}</p>
                </div>
              )}
              {i < component.history!.length - 1 && (
                <div className={styles.versionDivider} />
              )}
            </div>
          ))}
        </>
      )}
    </main>
  );
}
