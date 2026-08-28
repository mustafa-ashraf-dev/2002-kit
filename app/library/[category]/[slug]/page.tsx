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
    <>
      <article className={styles.slugPage}>
        <section className={styles.codeBlockSection}>
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
            <div className={styles.previewPlaceholder}>
              <p>No implementation yet — nothing to preview.</p>
            </div>
          )}
        </section>

        <section>
          <h2 className={styles.sectionLabel}>Code</h2>
          <CodeBlock variants={highlighted} />
        </section>

        {/* Understanding of the Code
      <section>
        <h2 className={styles.sectionLabel}>Simple Button</h2>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quis
          similique deserunt atque! Maxime placeat architecto harum dolorem nemo
          provident, illum earum quis debitis soluta beatae repudiandae numquam
          aliquam reprehenderit, hic nobis id rem! Quae voluptate minus
          inventore omnis at. Quas ex reprehenderit explicabo blanditiis ipsam
          nisi. Nesciunt quia, soluta aspernatur, nisi incidunt ipsum non
          voluptatum illum facere repudiandae, dicta rem inventore. Quasi sint,
          animi tempore nam suscipit vel similique maxime ipsa, eum maiores
          molestiae amet sequi possimus cupiditate at ratione explicabo
          provident distinctio! Temporibus excepturi porro laborum quam, tempora
          distinctio repellendus dignissimos eligendi nisi repellat quidem
          facilis nobis in velit maiores, cupiditate voluptatum corrupti odio
          culpa reprehenderit ipsum cumque. Libero cupiditate consectetur
          corrupti facilis fuga non voluptatum ab, voluptate quod nemo eveniet
          quasi dolorum maxime autem quaerat dolore aliquam nesciunt excepturi
          velit veritatis nisi dolor ut debitis alias? Officia quos voluptatum
          reiciendis quis repellat ullam in sed numquam saepe aspernatur! Omnis
          laborum hic blanditiis labore.
        </p>
      </section> */}
      </article>

      {component.explanation && (
        <section className={styles.explanations}>
          <h2 className={styles.sectionLabel}>Line by line</h2>
          <p className={styles.explanation}>{component.explanation}</p>
        </section>
      )}
    </>
  );
}
