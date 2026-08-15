"use client";
import Link from "next/link";
import { categories, components } from "@/lib/registry";
import styles from "./page.module.css";
import LibraryPage from "./library/page";

export default function HomePage() {
  return (
    <>
      <section className={styles.hero}>
        <p className={styles.eyebrow}>
          $ bastion Built for the copy-paste workflow.
        </p>
        <h1 className={styles.title}>
          Components that survive contact
          <br />
          with real users.
        </h1>
        <p className={styles.subtitle}>
          Copy-paste forms, accessible UI, and security utilities — each shown
          as a pure implementation and a library implementation, code explained
          line by line.
        </p>
      </section>
      <LibraryPage />
      {/* Categories Section 
      <section>
        <h2 className={styles.sectionTitle}>Categories</h2>
        <div className={styles.grid}>
          {categories.map((cat) => (
            <Link
              key={cat.slug.join("-")}
              href={`/library/${cat.slug.join("-")}`}
              className={styles.card}
            >
              <h3 className={styles.cardTitle}>{cat.title}</h3>
              <p className={styles.cardDesc}>{cat.description}</p>
              <span className={styles.cardCount}>
                {
                  components.filter(
                    (c) => c.category.join("-") === cat.slug.join("-"),
                  ).length
                }{" "}
                component(s)
              </span>
            </Link>
          ))}
        </div>
      </section> */}
    </>
  );
}
