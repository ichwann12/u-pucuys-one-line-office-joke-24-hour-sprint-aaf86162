import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Office Joke: 24-Hour Sprint
// Reads the single joke line from entry.txt at the repo root (the bot dir)
// and writes it, exactly and nothing else, to entry.txt in the output dir.

const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// Strip any trailing line break(s) the source file may carry so the output
// is exactly the joke line and nothing else — no trailing newline.
const line = readFileSync(join(botDir, "entry.txt"), "utf8").replace(/(\r?\n)+$/, "");

mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line, "utf8");
