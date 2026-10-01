// content/concepts/data.ts

import { ConceptEntry } from "@/lib/types";

export const ConceptsData: ConceptEntry[] = [
  {
    type: "concept",
    slug: "event-loop",
    title: "Why does console.log lie about the order things happen?",
    description:
      "The event loop, explained through the bug that confuses everyone once.",
    kind: "fundamentals",
    readTime: "3 min",
    tags: ["javascript", "async"],
    updatedTime: "2026-02-01",
    noteLabel: "Note",
    note: "This is a common interview question, and a common source of confusion for new JavaScript developers.",
    pullQuote: "JavaScript doesn't execute everything immediately.",
    body: [
      {
        type: "paragraph",
        text: "JavaScript runs synchronous code first before handling asynchronous callbacks.",
      },
      {
        type: "pullQuote",
        text: "JavaScript doesn't execute everything immediately.",
      },
      {
        type: "paragraph",
        text: "When an asynchronous operation finishes, its callback waits until the call stack is empty.",
      },
      {
        type: "note",
        label: "Note",
        text: "The callback does not interrupt currently running synchronous code.",
      },
    ],
  },
];
