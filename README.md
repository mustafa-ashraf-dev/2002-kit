# 2002 devs

## version 1.0

Open source. Built for anyone learning to build for the web, not just
frontend engineers, but anyone curious how the pieces actually fit together.

Live: [(https://2002-kit.vercel.app/)]

## What is this website

A working notebook for web development. It documents real UI components,
the concepts behind them, the patterns used to solve common problems, and
articles about what working as a frontend developer actually looks like.

Each page is written to answer two questions: how does this work, and why
was it built this way and not another way.

## Who it is for

- People learning frontend who want the reasoning, not only the code to copy.
- Junior developers trying to understand what the job involves day to day.
- Anyone who wants to see a project built, broken and improved step by step.

## What is inside

| Section    | What it contains                                                         |
| ---------- | ------------------------------------------------------------------------ |
| Components | A live preview, the HTML and CSS code, and the prompt if AI generated it |
| Concepts   | Explanations of how things work: the event loop, JWT, SSR vs SSG         |
| Patterns   | Reusable solutions to recurring problems: debounce vs throttle, hooks    |
| Articles   | Opinions and lessons from building this project and learning in public   |

## Why it exists

The motto of this project: build the first version, then improve it.
Do not wait for it to be perfect.

It is built in the age of AI, where the fundamentals matter more, not less.
The site covers real components with real trade-offs, and the parts of the
job that were never explained to me when I started: how the job market
works, what a developer is expected to do, and what the daily tasks look like.

## Stack

- Next.js (App Router)
- TypeScript
- Plain CSS (global design tokens + CSS Modules)

## How it is built

All pages are statically generated (SSG) except Concept and Article pages. The content lives in code and
changes only when I edit it and redeploy, so there is nothing to compute per
visitor. Search runs through the URL (`?query=`) with a debounce, so a
search can be shared and survives a refresh.

Folder structure:

    design/    UI components only (layout, ui, previews)
    content/   typed data for components, concepts, articles, patterns
    lib/       the functions pages use to read content
    app/       routes, kept thin: call lib/, render design/

Pages never read from `content/` directly. They call functions in `lib/`,
so moving the data to a CMS or database later changes `lib/` only.

## Status

Done:

- Header, hero, footer, responsive layout
- Components list with search, and component detail pages with live preview
- Typed content model (discriminated union for the four content types)

In progress:

- Real content for concepts, patterns and articles
- More real components

Planned:

- Arabic and English versions (routing by locale, RTL layout)
- Version history per component (what changed and why)
- Interview questions linked to each component

## Run locally

    git clone https://github.com/mustafa-ashraf-dev/2002-kit.git
    cd 2002-kit
    npm install
    npm run dev

Open http://localhost:3000

## About this project

AI helped me write a lot of this code. The ideas, the decisions, the
architecture are all mine. I was in control of every choice; AI made writing
the code faster, not writing itself.

That doesn't mean I skipped writing code by hand, or skipped research.
I did both, constantly. Using AI well means pairing it with real research
and real explanations from real engineers, not replacing either one.

## Contributing

Open source. Issues and suggestions are welcome. [Add a license, for example MIT.]

## Author

Mustafa Ashraf, frontend engineer.
[GitHub](https://github.com/mustafa-ashraf-dev) · [Résumé](https://drive.google.com/file/d/1l7WE8lqD1thkd_DAHz6NHRvmiPF61EIE/view?usp=sharing)
