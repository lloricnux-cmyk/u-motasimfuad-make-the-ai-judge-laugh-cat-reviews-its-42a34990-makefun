import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny single-line one-star review from a house cat about its human.
// Written to $MAKEFUN_OUTPUT_DIR/entry.txt (default /output).
// Deterministic: constant text, no randomness, no time, no network.
const line =
  "One star. Fills my bowl at 6am like it's doing me a favour, then sleeps straight through my 3am door-scratching recital. No respect for the arts.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
