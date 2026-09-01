#!/usr/bin/env node
// Generates responsive WebP variants (640/1280/1920) for hero/fleet/excursions
// images under public/images. Originals are never modified. A manifest of
// available widths per original is written to src/data/imageManifest.json so
// the ResponsiveImage component can build accurate srcSets.
//
// Idempotent: a variant is skipped when it already exists and is newer than
// the source image.

import { promises as fs } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ROOT = path.resolve(__dirname, '..');
const PUBLIC_DIR = path.join(ROOT, 'public');
const FOLDERS = ['hero', 'fleet', 'excursions'].map((f) =>
  path.join(PUBLIC_DIR, 'images', f)
);
const MANIFEST_PATH = path.join(ROOT, 'src', 'data', 'imageManifest.json');
const WIDTHS = [640, 1280, 1920];
const QUALITY = 78;
const SRC_EXT = /\.(jpe?g|png|webp)$/i;
const VARIANT_SUFFIX = /-(640|1280|1920)$/;

async function listImages(dir) {
  let entries;
  try {
    entries = await fs.readdir(dir, { withFileTypes: true });
  } catch (err) {
    if (err.code === 'ENOENT') return [];
    throw err;
  }
  return entries
    .filter((e) => e.isFile() && SRC_EXT.test(e.name))
    .map((e) => path.join(dir, e.name))
    .filter((p) => {
      const base = path.basename(p, path.extname(p));
      return !VARIANT_SUFFIX.test(base);
    });
}

function fmtBytes(n) {
  if (n < 1024) return `${n} B`;
  if (n < 1024 * 1024) return `${(n / 1024).toFixed(1)} KB`;
  return `${(n / (1024 * 1024)).toFixed(2)} MB`;
}

function toPublicUrl(absPath) {
  const rel = path.relative(PUBLIC_DIR, absPath).split(path.sep).join('/');
  return '/' + rel;
}

async function ensureVariant(srcPath, width, srcStat, srcWidth) {
  const dir = path.dirname(srcPath);
  const base = path.basename(srcPath, path.extname(srcPath));
  const outPath = path.join(dir, `${base}-${width}.webp`);

  if (width > srcWidth) return { outPath, width, skipped: 'too-large', size: 0 };

  try {
    const outStat = await fs.stat(outPath);
    if (outStat.mtimeMs >= srcStat.mtimeMs) {
      return { outPath, width, skipped: 'up-to-date', size: outStat.size };
    }
  } catch (err) {
    if (err.code !== 'ENOENT') throw err;
  }

  await sharp(srcPath)
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(outPath);
  const outStat = await fs.stat(outPath);
  return { outPath, width, size: outStat.size };
}

async function main() {
  const rows = [];
  const manifest = {};
  let totalOriginal = 0;
  let totalVariants = 0;

  for (const folder of FOLDERS) {
    const files = await listImages(folder);
    for (const file of files) {
      const srcStat = await fs.stat(file);
      const meta = await sharp(file).metadata();
      const srcWidth = meta.width ?? 0;
      totalOriginal += srcStat.size;

      const widthsAvailable = [];
      const variantSizes = {};
      for (const w of WIDTHS) {
        const res = await ensureVariant(file, w, srcStat, srcWidth);
        if (res.skipped === 'too-large') continue;
        widthsAvailable.push(w);
        variantSizes[w] = res.size;
        totalVariants += res.size;
      }
      manifest[toPublicUrl(file)] = widthsAvailable;
      rows.push({
        file: path.relative(ROOT, file).split(path.sep).join('/'),
        original: srcStat.size,
        srcWidth,
        variants: variantSizes,
      });
    }
  }

  await fs.mkdir(path.dirname(MANIFEST_PATH), { recursive: true });
  await fs.writeFile(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n');

  // Summary table
  console.log('\nImage optimisation summary');
  console.log('='.repeat(96));
  const header = ['file', 'orig', 'w', '640', '1280', '1920'];
  const pad = (s, n) => String(s).padEnd(n);
  console.log(
    pad(header[0], 52) +
      pad(header[1], 10) +
      pad(header[2], 6) +
      pad(header[3], 10) +
      pad(header[4], 10) +
      pad(header[5], 10)
  );
  console.log('-'.repeat(96));
  for (const r of rows) {
    console.log(
      pad(r.file, 52) +
        pad(fmtBytes(r.original), 10) +
        pad(r.srcWidth, 6) +
        pad(r.variants[640] ? fmtBytes(r.variants[640]) : '-', 10) +
        pad(r.variants[1280] ? fmtBytes(r.variants[1280]) : '-', 10) +
        pad(r.variants[1920] ? fmtBytes(r.variants[1920]) : '-', 10)
    );
  }
  console.log('-'.repeat(96));
  console.log(
    `Totals: originals ${fmtBytes(totalOriginal)}   ` +
      `variants ${fmtBytes(totalVariants)}   ` +
      `files ${rows.length}   ` +
      `manifest ${path.relative(ROOT, MANIFEST_PATH).split(path.sep).join('/')}`
  );
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
