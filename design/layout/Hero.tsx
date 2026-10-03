export function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <div className="eyebrow">build it. then make it better.</div>
        <h1>
          Ship the <span className="ugly">ugly</span> version first.{" "}
          <span className="accent">Improve it in public.</span>
        </h1>
        <p>
          A real library of UI components, concepts, and patterns — documented
          the way I wish someone had shown me, with the actual decisions and
          trade-offs behind each one. Built in the age of AI, when the
          fundamentals matter more, not less.
        </p>
        <p className="eyebrow">Note: A human idea, written with AI.</p>{" "}
        <div className="actions">
          <a
            href="https://drive.google.com/file/d/1l7WE8lqD1thkd_DAHz6NHRvmiPF61EIE/view?usp=sharing"
            target="_blank"
            rel="noreferrer"
            className="primary"
          >
            résumé
          </a>
          <a
            href="https://github.com/mustafa-ashraf-dev"
            target="_blank"
            rel="noreferrer"
            className="secondary"
          >
            github
          </a>
        </div>
      </div>
    </section>
  );
}
