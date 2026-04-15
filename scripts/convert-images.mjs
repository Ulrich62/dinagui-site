#!/usr/bin/env node
/**
 * In-place JPG compression with sharp (mozjpeg).
 * Resizes > 1920px wide, re-encodes at quality 82, strips metadata.
 * Leaves originals intact if final is larger.
 */
import { readdir, stat, rename, unlink } from "node:fs/promises";
import { join, relative } from "node:path";
import sharp from "sharp";

const ROOTS = ["public/images"];
const MAX_WIDTH = 1920;
const JPG_QUALITY = 82;

async function* walk(dir) {
  const entries = await readdir(dir, { withFileTypes: true });
  for (const e of entries) {
    const p = join(dir, e.name);
    if (e.isDirectory()) {
      yield* walk(p);
    } else if (e.isFile() && /\.(jpe?g)$/i.test(e.name)) {
      yield p;
    }
  }
}

async function compress(src) {
  const original = (await stat(src)).size;
  const tmp = `${src}.tmp`;

  const img = sharp(src, { failOn: "none" });
  const meta = await img.metadata();
  const pipeline =
    meta.width && meta.width > MAX_WIDTH
      ? img.resize({ width: MAX_WIDTH, withoutEnlargement: true })
      : img;
  await pipeline.jpeg({ quality: JPG_QUALITY, mozjpeg: true, progressive: true }).toFile(tmp);

  const newSize = (await stat(tmp)).size;
  if (newSize >= original) {
    await unlink(tmp);
    return { src, original, final: original, skipped: true };
  }
  await rename(tmp, src);
  return { src, original, final: newSize, skipped: false };
}

const started = Date.now();
let totalBefore = 0, totalAfter = 0, converted = 0, skipped = 0;

for (const root of ROOTS) {
  try {
    await stat(root);
  } catch {
    continue;
  }
  for await (const f of walk(root)) {
    try {
      const r = await compress(f);
      totalBefore += r.original;
      totalAfter += r.final;
      const rel = relative(process.cwd(), f);
      const kb = (n) => (n / 1024).toFixed(0);
      if (r.skipped) {
        skipped++;
        process.stdout.write(`  skip ${rel}  ${kb(r.original)}K (already optimal)\n`);
      } else {
        converted++;
        const pct = ((1 - r.final / r.original) * 100).toFixed(0);
        process.stdout.write(`  ✓    ${rel}  ${kb(r.original)}K → ${kb(r.final)}K (−${pct}%)\n`);
      }
    } catch (err) {
      console.error(`  ! ${f} — ${err.message}`);
    }
  }
}

const mb = (n) => (n / 1024 / 1024).toFixed(2);
const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(0);
console.log(`\n────────────────────────`);
console.log(`Compressed: ${converted} files (${skipped} skipped)`);
console.log(`Before:     ${mb(totalBefore)} MB`);
console.log(`After:      ${mb(totalAfter)} MB  (−${pct}%)`);
console.log(`Took ${((Date.now() - started) / 1000).toFixed(1)}s`);
