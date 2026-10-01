// content/articles/data.ts

export const ArticlesData: ArticleEntry[] = [
  {
    type: "article",
    slug: "why-i-picked-ssg",
    date: "Sep 28",
    title: "Why I picked SSG for this site, and when I'd change my mind",
    excerpt:
      "I almost reached for SSR out of habit. Here's the actual test I used instead.",
    readTime: "3 min",
    tags: ["nextjs", "architecture"],
    description:
      "I almost reached for SSR out of habit. Here's the actual test I used instead.",
    body: `I nearly defaulted to SSR because it felt "safer" — always fresh, no stale data. Then I asked myself the actual test: does any page's content depend on who's viewing it, or when?

>> No. Every visitor sees the same Button page today or in six months, unless I personally edit the code and redeploy.

That's the whole decision. SSG builds once, serves from a CDN, costs nothing per visit. SSR would've re-run the same unchanging lookup on every single request for no benefit.

## what would actually change my mind
The day content moves to a live CMS someone else can edit without a code change — that's when ISR earns its place, not before.`,
  },
  {
    type: "article",
    slug: "ai-portfolio-tell",
    date: "Sep 20",
    title:
      "What an AI-generated portfolio actually looks like to a hiring manager",
    excerpt: "The tell isn't the code quality. It's what's missing.",
    readTime: "4 min",
    tags: ["career", "portfolio"],
    description: "The tell isn't the code quality. It's what's missing.",
    body: `Every junior portfolio I looked at had a clean, working to-do app. Same stack, same structure, same polish. None of that is the problem.

>> The tell isn't bad code. It's the complete absence of a wrong turn anywhere.

A project built end-to-end by an AI agent has no scars — no abandoned approach, no "I tried X, it broke, here's why." Real projects have those by default, because reality pushes back.

## so what should replace the to-do app?
Not a fancier project. The same project, documented honestly — including the version that didn't work.`,
  },
  {
    type: "article",
    slug: "extracting-my-first-hook",
    date: "Sep 15",
    title: "The moment I noticed I'd copy-pasted the same 8 lines three times",
    excerpt:
      "Components, concepts, and patterns index pages all had identical filter logic. Here's what I did about it.",
    readTime: "3 min",
    tags: ["react", "refactoring"],
    description:
      "Components, concepts, and patterns index pages all had identical filter logic. Here's what I did about it.",
    body: `Three index pages, three nearly identical useState + useMemo filter blocks. I only noticed because I was staring at the third one, mid-copy-paste.

>> If you're about to paste the same logic a third time, that's the actual signal to extract it — not a rule of thumb, a thing you can feel.

Pulled it into one useFilteredList hook, took the query and a matcher function as arguments. Three pages got shorter. One bug fix now covers all three instead of needing to remember all the copies.`,
  },
];
