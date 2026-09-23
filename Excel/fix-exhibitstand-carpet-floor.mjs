// fix-exhibitstand-carpet-floor.mjs
//
// Corrects exhibitStand_root's vertical position so specifically its
// CARPET mesh's lowest point touches the floor's top surface exactly (no
// gap, no submersion) — rather than the combined lowest point of the
// whole exhibitStand+hallway assembly used previously, which may not have
// been the carpet. Hallway moves together with exhibitStand_root by the
// same correction, keeping it seated on Kaslíky. ramenShop_root and
// chunk_* nodes are untouched.
//
// Usage: node fix-exhibitstand-carpet-floor.mjs

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';

const IN_PATH = './models/ramenShopExhibtStand_with_hallway.glb';
const OUT_PATH = './models/ramenShopExhibtStand_with_hallway.glb'; // overwrite — refinement pass

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

async function main() {
  console.log('Loading ramenShopExhibtStand_with_hallway.glb ...');
  const doc = await io.read(IN_PATH);
  const root = doc.getRoot();

  const floorNode = root.listNodes().find(n => n.getName() === 'floor');
  const exhibitRoot = root.listNodes().find(n => n.getName() === 'exhibitStand_root');
  const hallwayGroup = root.listNodes().find(n => n.getName() === 'SpaceshipHallway_OnKasliky');

  if (!floorNode) throw new Error('"floor" node not found.');
  if (!exhibitRoot) throw new Error('"exhibitStand_root" node not found.');
  if (!hallwayGroup) throw new Error('"SpaceshipHallway_OnKasliky" node not found.');

  const floorBounds = getBounds(floorNode);
  const floorTopY = floorBounds.max[1];
  console.log(`Floor top Y: ${floorTopY.toFixed(3)}`);

  // ── 1. Locate the carpet mesh inside exhibitStand_root. Your earlier
  //      node listing doesn't show an exact "carpet" name, so search
  //      case-insensitively across all descendants of exhibitStand_root
  //      for anything matching, rather than assume a specific name. ──
  function collectDescendants(node, out = []) {
    out.push(node);
    for (const child of node.listChildren()) collectDescendants(child, out);
    return out;
  }
  const exhibitDescendants = collectDescendants(exhibitRoot);
  const carpetCandidates = exhibitDescendants.filter(n =>
    n.getName().toLowerCase().includes('carpet')
  );

  console.log(`\nSearching for carpet mesh inside exhibitStand_root...`);
  console.log(`Found ${carpetCandidates.length} candidate node(s) matching "carpet":`);
  carpetCandidates.forEach(n => console.log(`  "${n.getName()}"`));

  if (carpetCandidates.length === 0) {
    console.error('\n❌ No node with "carpet" in its name found under exhibitStand_root.');
    console.log('\nAll exhibitStand_root descendant names, for manual identification:');
    exhibitDescendants.forEach(n => console.log(`  "${n.getName()}"`));
    throw new Error('Cannot proceed without identifying the carpet node — check the list above and tell me the exact name.');
  }

  // If multiple matches, use the one with the lowest Y (most likely the
  // actual floor covering, not e.g. a "carpet_trim" or similar).
  let carpetNode = carpetCandidates[0];
  let carpetBounds = getBounds(carpetNode);
  for (const candidate of carpetCandidates.slice(1)) {
    const b = getBounds(candidate);
    if (b.min[1] < carpetBounds.min[1]) {
      carpetNode = candidate;
      carpetBounds = b;
    }
  }
  console.log(`\nUsing "${carpetNode.getName()}" as the carpet reference (lowest Y among matches).`);
  console.log(`Carpet current underside Y: ${carpetBounds.min[1].toFixed(3)}`);
  console.log(`Gap from floor: ${(carpetBounds.min[1] - floorTopY).toFixed(3)} ${carpetBounds.min[1] < floorTopY ? '(SUBMERGED)' : '(floating)'}`);

  // ── 2. Compute correction based on carpet specifically ──
  const yCorrection = floorTopY - carpetBounds.min[1];
  console.log(`\nY correction needed: ${yCorrection.toFixed(3)}`);

  // ── 3. Apply to exhibitStand_root AND hallway together (same amount),
  //      since hallway must move with exhibitStand to stay seated on
  //      Kaslíky's top. ──
  const exhibitTranslation = exhibitRoot.getTranslation();
  exhibitRoot.setTranslation([
    exhibitTranslation[0],
    exhibitTranslation[1] + yCorrection,
    exhibitTranslation[2],
  ]);
  console.log(`exhibitStand_root translation: [${exhibitTranslation.map(v=>v.toFixed(3)).join(', ')}] → [${exhibitRoot.getTranslation().map(v=>v.toFixed(3)).join(', ')}]`);

  const hallwayTranslation = hallwayGroup.getTranslation();
  hallwayGroup.setTranslation([
    hallwayTranslation[0],
    hallwayTranslation[1] + yCorrection,
    hallwayTranslation[2],
  ]);
  console.log(`Hallway translation: [${hallwayTranslation.map(v=>v.toFixed(3)).join(', ')}] → [${hallwayGroup.getTranslation().map(v=>v.toFixed(3)).join(', ')}]`);

  // ── 4. Write output ──
  console.log(`\nWriting ${OUT_PATH} ...`);
  await io.write(OUT_PATH, doc);

  // ── 5. Verify carpet specifically, plus overall exhibitStand lowest
  //      point (to flag if something now dips below carpet/floor). ──
  const finalCarpetBounds = getBounds(carpetNode);
  const carpetGap = finalCarpetBounds.min[1] - floorTopY;
  console.log('\n── Verification ──');
  console.log(`Carpet underside Y: ${finalCarpetBounds.min[1].toFixed(3)}  |  Floor top Y: ${floorTopY.toFixed(3)}  |  Gap: ${carpetGap.toFixed(4)} ${Math.abs(carpetGap) < 0.001 ? '✅' : '⚠️'}`);

  const finalExhibitBounds = getBounds(exhibitRoot);
  console.log(`\nexhibitStand_root overall lowest Y: ${finalExhibitBounds.min[1].toFixed(3)}`);
  if (finalExhibitBounds.min[1] < floorTopY - 0.001) {
    console.warn(`⚠️  Something in exhibitStand_root dips BELOW the carpet/floor (${finalExhibitBounds.min[1].toFixed(3)} < ${floorTopY.toFixed(3)}) — likely furniture legs, Kaslíky base, or similar. This may still show as submerged in the viewer even though the carpet itself is correctly placed.`);
  } else {
    console.log(`✅ Nothing in exhibitStand_root dips below the carpet/floor line.`);
  }
}

main().catch(err => {
  console.error('FIX FAILED:', err);
  process.exit(1);
});
