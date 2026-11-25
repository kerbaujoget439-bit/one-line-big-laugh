import { mkdirSync, writeFileSync } from "node:fs";

// One Line, Big Laugh — make.fun entry (program/v1, Node 22, stdlib only).
//
// The entry is a single funny line, written by this program to
// /output/entry.txt. It is deterministic: the same line every run, no
// network, no randomness, no input files.
//
// The line: a hitman hired to kill procrastination turns out to share the
// victim's flaw — and the narrator, who hired him, never followed up
// either. The joke's turn lands on the last words, so the strongest
// element closes the line.
const LINE =
  "I hired a hitman to kill my procrastination; three years later he still hasn't got round to it — and neither have I.";

// Count Unicode code points (not bytes): the gate allows 1–200.
const length = [...LINE].length;
if (length < 1 || length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-200 characters, got ${length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
