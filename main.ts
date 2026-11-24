// One Line of Earned Pride.
// main.ts writes exactly one line — a quiet, earned moment of pride —
// to /output/entry.txt.
//
// The line: a boy who stutters reads his poem aloud at the school
// assembly, and by the last line the hall is so quiet he can hear his
// own shoes on the stage. One line, 150 characters. The effort is felt
// inside the line (the stutter, the assembly, the poem read aloud); the
// pride is never asserted or explained — it arrives with the last word,
// in the sound of his own shoes. No trophy, no podium, no graduation.
// Chosen by a 10-candidate duel bracket under the kit judge brief
// verbatim (see duel-test.md): winner, mean game score 0.694.

import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "The boy who stuttered read his poem aloud at the school assembly, and by the last line the hall was so quiet he could hear his own shoes on the stage.";

// The gate only accepts one line of 1–240 characters: refuse to write
// anything that would fail it, instead of shipping a bad entry.
if (LINE.length < 1 || LINE.length > 240 || LINE.includes("\n")) {
  throw new Error(`line must be one line of 1-240 characters, got ${LINE.length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
