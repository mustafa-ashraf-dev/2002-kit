// app/about/page.tsx
export default function AboutPage() {
  return (
    <main className={`wrap about-wrap`}>
      <h1 className="about-title">About this site</h1>

      <p className="about-text">
        2002 devs is a library of real UI components, concepts, and patterns —
        documented the way I wish someone had shown them to me. Not a tutorial
        rewrite: every component here has a real version history, with the
        actual bugs, trade-offs, and reasons behind each change explained.
      </p>

      <p className="about-text">
        The idea is simple: build something, then make it better — in public,
        mistakes included. A component&apos;s first version is never the final
        one, and the site shows that instead of hiding it.
      </p>

      <p className="about-text">
        This site is built in the age of AI, when the fundamentals matter more,
        not less. AI helped write a lot of the code here faster — every decision
        about what to build, how, and why one approach over another, stayed mine
        throughout.
      </p>

      <div className="about-credit">
        <div className="about-credit-label">built by</div>
        <a
          href="https://github.com/mustafa-ashraf-dev"
          target="_blank"
          rel="noreferrer"
          className="about-credit-link"
        >
          Mustafa Ashraf →
        </a>
      </div>
    </main>
  );
}
