/**
 * bakeSceneScale.mjs
 *
 * Permanently bakes scale X:1.400  Y:1.800  Z:1.840 into every
 * primitive's POSITION accessor in HB17_cleaned8.glb.
 *
 * Each vertex is multiplied: x *= 1.400, y *= 1.800, z *= 1.840
 *
 * Because all 744 primitives share only 2 position accessors we
 * deep-copy each shared accessor ONCE and patch it in — exactly the
 * same deep-copy strategy used in bakeCircularBoxPosition.mjs.
 *
 * Reads:  ./models/HB17_cleaned8.glb
 * Writes: ./models/HB17_final.glb
 *
 * Usage:
 *   node bakeSceneScale.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const INPUT  = './models/HB17_cleaned8.glb';
const OUTPUT = './models/HB17_housing.glb';

// ── Confirmed scale values from runtime scaler ────────────────────────────────
const SCALE_X = 1.500;
const SCALE_Y = 1.600;
const SCALE_Z = 1.800;

async function main() {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

  console.log(`\n📂  Reading ${INPUT} …`);
  const doc  = await io.read(INPUT);
  const root = doc.getRoot();

  const allMeshes = root.listMeshes();
  const allPrims  = allMeshes.flatMap(m => m.listPrimitives());

  console.log(`🔎  Meshes:     ${allMeshes.length}`);
  console.log(`🔎  Primitives: ${allPrims.length}`);
  console.log(`\n🔧  Scale  X:${SCALE_X}  Y:${SCALE_Y}  Z:${SCALE_Z}`);

  // ── Collect unique POSITION accessors ────────────────────────────────────
  // All 744 primitives share only 2 position accessors (79247 and 118192 verts).
  // We deep-copy each unique accessor once, apply the scale, then re-wire
  // every primitive that referenced the original to use the new one.

  const accessorMap = new Map(); // original accessor → new scaled accessor

  let primsPatched   = 0;
  let accessorsBaked = 0;

  for (const prim of allPrims) {
    const origPos = prim.getAttribute('POSITION');
    if (!origPos) continue;

    if (!accessorMap.has(origPos)) {
      // First time we see this accessor — deep copy and scale it
      const origArr = origPos.getArray();
      const count   = origPos.getCount();
      const type    = origPos.getType();

      const newArr  = origArr.slice();   // deep copy

      for (let v = 0; v < count; v++) {
        newArr[v * 3 + 0] *= SCALE_X;
        newArr[v * 3 + 1] *= SCALE_Y;
        newArr[v * 3 + 2] *= SCALE_Z;
      }

      const newPos = doc.createAccessor()
        .setType(type)
        .setArray(newArr);

      accessorMap.set(origPos, newPos);
      accessorsBaked++;

      // Sample log
      const bx = origArr[0], by = origArr[1], bz = origArr[2];
      const ax  = newArr[0],  ay  = newArr[1],  az  = newArr[2];
      console.log(`\n  ✅  Accessor baked  (${count} verts)`);
      console.log(`       vertex[0] before: (${bx.toFixed(4)}, ${by.toFixed(4)}, ${bz.toFixed(4)})`);
      console.log(`       vertex[0] after:  (${ax.toFixed(4)}, ${ay.toFixed(4)}, ${az.toFixed(4)})`);
    }

    // Wire the scaled accessor into this primitive
    prim.setAttribute('POSITION', accessorMap.get(origPos));
    primsPatched++;
  }

  // ── Also scale node translations ──────────────────────────────────────────
  // Any node with a non-zero translation also needs its offset scaled
  // so positioned objects (like the circular box we baked earlier) don't
  // end up at wrong world positions.

  let nodesPatchedCount = 0;
  for (const node of root.listNodes()) {
    const t = node.getTranslation();
    if (t[0] === 0 && t[1] === 0 && t[2] === 0) continue;
    node.setTranslation([t[0] * SCALE_X, t[1] * SCALE_Y, t[2] * SCALE_Z]);
    nodesPatchedCount++;
    console.log(`\n  📌  Node "${node.getName() || '(unnamed)'}"`);
    console.log(`       translation before: (${t[0].toFixed(3)}, ${t[1].toFixed(3)}, ${t[2].toFixed(3)})`);
    const nt = node.getTranslation();
    console.log(`       translation after:  (${nt[0].toFixed(3)}, ${nt[1].toFixed(3)}, ${nt[2].toFixed(3)})`);
  }

  // ── Summary ───────────────────────────────────────────────────────────────
  console.log(`\n📊  Unique accessors baked: ${accessorsBaked}`);
  console.log(`📊  Primitives re-wired:    ${primsPatched}`);
  console.log(`📊  Node translations scaled: ${nodesPatchedCount}`);

  // Sanity check — original scene was 15.00W × 10.26H × 15.45D
  // Expected after bake:
  console.log(`\n📐  Expected output size:`);
  console.log(`    W: 15.00 × ${SCALE_X} = ${(15.00 * SCALE_X).toFixed(2)}`);
  console.log(`    H: 10.26 × ${SCALE_Y} = ${(10.26 * SCALE_Y).toFixed(2)}`);
  console.log(`    D: 15.45 × ${SCALE_Z} = ${(15.45 * SCALE_Z).toFixed(2)}`);

  console.log(`\n💾  Writing ${OUTPUT} …`);
  await io.write(OUTPUT, doc);
  console.log(`✅  Done → ${OUTPUT}`);
  console.log(`\n🔍  Load HB17_housing.glb to confirm dimensions.`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
