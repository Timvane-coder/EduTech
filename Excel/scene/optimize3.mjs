/**
 * optimize.mjs — post-merge optimization pass
 *
 * Run after merge.mjs:
 *   node optimize.mjs [input] [output]
 *   SKIP_DRACO=1 node optimize.mjs [input] [output]
 *
 * Defaults:
 *   input  = ./scene.gltf
 *   output = ./scene-optimize.glb
 *
 * Examples:
 *   node optimize.mjs
 *   SKIP_DRACO=1 node optimize.mjs output_clustered.glb scene-reoptimized.glb
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import {
  prune,
  dedup,
  quantize,
  draco,
} from '@gltf-transform/functions';
import draco3d from 'draco3d';

const INPUT  = process.argv[2] || './scene.gltf';
const OUTPUT = process.argv[3] || './scene-optimize.glb';

const SKIP_DRACO = process.env.SKIP_DRACO === '1';

async function main() {

  // ── Create encoder/decoder modules first ──
  const dracoEncoder = await draco3d.createEncoderModule();
  const dracoDecoder = await draco3d.createDecoderModule();

  // ── Register Draco with the IO instance ──
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.encoder': dracoEncoder,
      'draco3d.decoder': dracoDecoder,
    });

  console.log(`\n📂  Reading ${INPUT} …`);
  const doc = await io.read(INPUT);

  const before = (await io.writeBinary(doc)).byteLength;
  console.log(`📏  Size before: ${(before / 1024 / 1024).toFixed(2)} MB`);

  if (SKIP_DRACO) {
    console.log(`\n⚠️   SKIP_DRACO=1 — output will NOT be Draco-compressed (Blender-safe mode)`);
  }

  console.log(`\n⚙️   Running optimization passes …`);

  // Pass 1 — remove duplicate and unused data
  console.log(`    [1/3]  dedup + prune …`);
  await doc.transform(
    dedup(),
    prune(),
  );

  // Pass 2 — quantize vertex data
  console.log(`    [2/3]  quantize …`);
  await doc.transform(
    quantize({
      quantizePosition: 14,
      quantizeNormal:   10,
      quantizeTexcoord: 12,
      quantizeColor:    8,
    })
  );

  // Pass 3 — Draco compress geometry only (textures untouched)
  // Skipped when SKIP_DRACO=1, e.g. for a file headed into Blender without
  // Draco decode support (missing libextern_draco.so).
  if (!SKIP_DRACO) {
    console.log(`    [3/3]  draco compress …`);
    await doc.transform(
      draco({ encoder: dracoEncoder })
    );
  } else {
    console.log(`    [3/3]  draco compress … skipped (SKIP_DRACO=1)`);
  }

  // Write as single self-contained GLB
  console.log(`\n💾  Writing ${OUTPUT} …`);
  await io.write(OUTPUT, doc);

  const { size: after } = await import('fs').then(m => m.promises.stat(OUTPUT));
  const ratio = ((1 - after / before) * 100).toFixed(1);
  console.log(`📏  Size after:  ${(after  / 1024 / 1024).toFixed(2)} MB`);
  console.log(`🎉  Reduced by ${ratio}%\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
