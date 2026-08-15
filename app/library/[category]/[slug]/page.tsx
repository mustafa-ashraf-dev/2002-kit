import { notFound } from "next/navigation";
import { components, getComponent } from "@/lib/registry";
import { SecurityBadge } from "@/components/site/SecurityBadge";
import { CodeBlock } from "@/components/code-block/CodeBlock";
import { LivePreview } from "@/components/live-preview/LivePreview";
import { highlightVariants } from "@/lib/highlight";
import styles from "./detail.module.css";

export async function generateStaticParams() {
  return components.map((c) => ({
    category: c.category.join("-"),
    slug: c.slug.join("-"),
  }));
}

export default async function ComponentDetailPage({
  params,
}: {
  params: Promise<{ category: string; slug: string }>;
}) {
  const { category, slug } = await params;
  const component = getComponent(category, slug);
  if (!component) notFound();

  // Highlighting happens here, server-side, once per request — see
  // src/lib/highlight.ts. CodeBlock receives ready-to-render HTML, not
  // raw code it has to highlight itself in the browser.
  const highlighted = await highlightVariants(component.variants);

  // The live preview always runs the first variant (conventionally the
  // dependency-free "pure" implementation) — the code tabs below let you
  // read alternate implementations without the preview re-mounting on
  // every tab click.
  const primaryVariant = component.variants[0];

  return (
    <article>
      <header className={styles.header}>
        <h1 className={styles.title}>{component.title}</h1>
        <p className={styles.description}>{component.description}</p>
        <div className={styles.badges}>
          {component.badges.map((b) => (
            <SecurityBadge key={b.label} badge={b} />
          ))}
        </div>
      </header>

      {primaryVariant ? (
        <div className={styles.previewBlock}>
          <LivePreview variant={primaryVariant} />
        </div>
      ) : (
        <section className={styles.previewPlaceholder}>
          <p>No implementation yet — nothing to preview.</p>
        </section>
      )}

      <section>
        <h2 className={styles.sectionLabel}>Code</h2>
        <CodeBlock variants={highlighted} />
      </section>

      {component.explanation && (
        <section>
          <h2 className={styles.sectionLabel}>Line by line</h2>
          <p className={styles.explanation}>{component.explanation}</p>
        </section>
      )}
    </article>
  );
}
