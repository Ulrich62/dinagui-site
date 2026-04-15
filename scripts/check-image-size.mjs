#!/usr/bin/env node
/**
 * Pre-commit guard: block any staged image file larger than MAX_KB.
 * Run via husky pre-commit hook.
 */
import { execFileSync } from "node:child_process";
import { statSync } from "node:fs";
import { extname } from "node:path";

const MAX_KB = 200;
const IMAGE_EXT = new Set([".jpg", ".jpeg", ".png", ".gif", ".bmp", ".tiff"]);

function stagedFiles() {
  const out = execFileSync(
    "git",
    ["diff", "--cached", "--name-only", "--diff-filter=ACMR"],
    { encoding: "utf8" }
  );
  return out.split("\n").filter(Boolean);
}

const offenders = [];
for (const f of stagedFiles()) {
  if (!IMAGE_EXT.has(extname(f).toLowerCase())) continue;
  let size;
  try {
    size = statSync(f).size;
  } catch {
    continue;
  }
  const kb = size / 1024;
  if (kb > MAX_KB) {
    offenders.push({ file: f, kb: kb.toFixed(0) });
  }
}

if (offenders.length) {
  console.error("");
  console.error("\x1b[31m✖ Image size guard failed\x1b[0m");
  console.error(`  Max allowed: ${MAX_KB} KB`);
  console.error("");
  for (const o of offenders) {
    console.error(`  \x1b[33m${o.file}\x1b[0m  →  ${o.kb} KB`);
  }
  console.error("");
  console.error("  Compress before committing:");
  console.error("    node scripts/convert-images.mjs");
  console.error("");
  process.exit(1);
}
