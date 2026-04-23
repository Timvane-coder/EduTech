/**
 * resequenceSections.js
 *
 * Rewrites sectionNumber values in your sections file so they run
 * sequentially starting from a given base number (default: 131).
 *
 * Usage:
 *   node resequenceSections.js
 *
 * Or with custom paths / start number:
 *   node resequenceSections.js --input=./sections.js --output=./sections.js --start=131
 */

import fs   from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname  = path.dirname(__filename);

// ── Config ────────────────────────────────────────────────────────────────────
const args = Object.fromEntries(
  process.argv.slice(2)
    .filter(a => a.startsWith('--'))
    .map(a => a.slice(2).split('='))
);

const INPUT_FILE  = args.input  ?? './physicsdocx.js';   // path to your sections file
const OUTPUT_FILE = args.output ?? './physicsdocx.js';   // overwrite in place by default
const START_NUM   = parseInt(args.start ?? '1', 10); // first sectionNumber to assign
// ─────────────────────────────────────────────────────────────────────────────

function resequence(source, startNum) {
  let counter = startNum;

  // Matches:  sectionNumber: <any integer>,
  // and replaces the integer with the next counter value.
  const result = source.replace(
    /(\bsectionNumber\s*:\s*)(\d+)/g,
    (match, prefix) => {
      const replacement = `${prefix}${counter}`;
      counter++;
      return replacement;
    }
  );

  const totalReplaced = counter - startNum;
  return { result, totalReplaced };
}

// ── Main ──────────────────────────────────────────────────────────────────────
const inputPath  = path.resolve(INPUT_FILE);
const outputPath = path.resolve(OUTPUT_FILE);

if (!fs.existsSync(inputPath)) {
  console.error(`❌  File not found: ${inputPath}`);
  console.error(`    Make sure --input points to your sections file.`);
  process.exit(1);
}

const source = fs.readFileSync(inputPath, 'utf8');
const { result, totalReplaced } = resequence(source, START_NUM);

if (totalReplaced === 0) {
  console.warn('⚠️  No sectionNumber fields found. Nothing was changed.');
  process.exit(0);
}

fs.writeFileSync(outputPath, result, 'utf8');

console.log(`✅  Done! Renumbered ${totalReplaced} section(s).`);
console.log(`   Range : ${START_NUM} → ${START_NUM + totalReplaced - 1}`);
console.log(`   Output: ${outputPath}`);
