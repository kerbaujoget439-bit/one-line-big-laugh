import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — draft entry.
// Writes exactly one funny line to /output/entry.txt.
const LINE =
  "My gym texts me 'we miss you' at 2 a.m. like an ex who still has my direct debit.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
