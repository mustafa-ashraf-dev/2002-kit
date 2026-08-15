import styles from "./about.module.css";

export default function AboutPage() {
  return (
    <section className={styles.aboutWrap}>
      <span className={styles.aboutSpan}>// About</span>
      <h1 className={styles.aboutHeader}>Built for the copy-paste workflow.</h1>
      <p className={styles.aboutDesc}>
        Bastion is a growing library of hardened, accessible React components —
        each one shown live, with its source explained line by line. Replace
        this page with your own story.
      </p>
    </section>
  );
}
