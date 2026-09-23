// fix-exhibitstand-floor-only.mjs
//
// Corrects the previous mis-fire: undoes the uniform +7.000 Y shift
// applied to ALL root nodes (which wrongly lifted ramenShop_root off the
// floor), then applies a targeted Y correction to ONLY exhibitStand_root
// and SpaceshipHallway_OnKasliky, so exhibitStand_root's lowest point
// meets the floor while ramenShop_root and all chunk_* nodes return to
// their original, already-correct positions.
//
// Usage: node fix-exhibitstand-floor-only.mjs

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';

const IN_PATH = './models/ramenShopExhibtStand_with_hallway.glb';
const OUT_PATH = './models/ramenShopExhibtStand_with_hallway.glb'; // overwrite — refinement pass

// The uniform shift mistakenly applied last time — reverting this first.
const PREVIOUS_BAD_SHIFT = 7.000;

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

async function main() {
  console.log('Loading ramenShopExhibtStand_with_hallway.glb ...');
  const doc = await io.read(IN_PATH);
  const root = doc.getRoot();
  const scene = root.listScenes()[0];

  const floorNode = root.listNodes().find(n => n.getName() === 'floor');
  const exhibitRoot = root.listNodes().find(n => n.getName() === 'exhibitStand_root');
  const hallwayGroup = root.listNodes().find(n => n.getName() === 'SpaceshipHallway_OnKasliky');
  const ramenShopRoot = root.listNodes().find(n => n.getName() === 'ramenShop_root');

  if (!floorNode) throw new Error('"floor" node not found.');
  if (!exhibitRoot) throw new Error('"exhibitStand_root" node not found.');
  if (!hallwayGroup) throw new Error('"SpaceshipHallway_OnKasliky" node not found.');

  const floorBounds = getBounds(floorNode);
  const floorTopY = floorBounds.max[1];
  console.log(`Floor top Y: ${floorTopY.toFixed(3)}`);

  // ── 1. Revert the previous uniform +7.000 shift on ALL root nodes
  //      EXCEPT floor (which was never touched, per last script's logic). ──
  const rootLevelNodes = scene.listChildren();
  console.log(`\nReverting previous uniform shift of ${PREVIOUS_BAD_SHIFT} on ${rootLevelNodes.length} root node(s)...`);

  for (const node of rootLevelNodes) {
    if (node === floorNode) continue;
    const t = node.getTranslation();
    node.setTranslation([t[0], t[1] - PREVIOUS_BAD_SHIFT, t[2]]);
  }

  // Sanity check: ramenShop_root should now be back near its original
  // (correct) position.
  if (ramenShopRoot) {
    const rsBounds = getBounds(ramenShopRoot);
    console.log(`ramenShop_root underside Y after revert: ${rsBounds.min[1].toFixed(3)} (should be back near original correct position)`);
  }

  // ── 2. Now compute the correction needed for ONLY exhibitStand_root's
  //      lowest point (across itself + hallway, since hallway sits on
  //      Kaslíky which is inside exhibitStand_root) to meet the floor. ──
  const exhibitBounds = getBounds(exhibitRoot);
  const hallwayBounds = getBounds(hallwayGroup);
  const combinedMinY = Math.min(exhibitBounds.min[1], hallwayBounds.min[1]);

  console.log(`\nexhibitStand_root underside Y (after revert): ${exhibitBounds.min[1].toFixed(3)}`);
  console.log(`Hallway underside Y (after revert): ${hallwayBounds.min[1].toFixed(3)}`);
  console.log(`Combined lowest point: ${combinedMinY.toFixed(3)}`);

  const yCorrection = floorTopY - combinedMinY;
  console.log(`Y correction needed: ${yCorrection.toFixed(3)}`);

  // ── 3. Apply this correction to exhibitStand_root only. Hallway is a
  //      SEPARATE root node (sibling, not child, per earlier structural
  //      finding) so it needs the same correction applied independently
  //      to stay seated on Kaslíky's top as exhibitStand_root moves. ──
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

  // ── 5. Verify: exhibitStand + hallway should now touch floor; ramenShop
  //      should be back at its original (untouched) position. ──
  const finalExhibitBounds = getBounds(exhibitRoot);
  const finalHallwayBounds = getBounds(hallwayGroup);
  const finalCombinedMinY = Math.min(finalExhibitBounds.min[1], finalHallwayBounds.min[1]);
  const gap = finalCombinedMinY - floorTopY;

  console.log('\n── Verification ──');
  console.log(`exhibitStand_root + hallway combined lowest Y: ${finalCombinedMinY.toFixed(3)}  |  Floor top Y: ${floorTopY.toFixed(3)}  |  Gap: ${gap.toFixed(4)} ${Math.abs(gap) < 0.001 ? '✅' : '⚠️'}`);

  if (ramenShopRoot) {
    const finalRamenBounds = getBounds(ramenShopRoot);
    console.log(`ramenShop_root underside Y: ${finalRamenBounds.min[1].toFixed(3)} (should match its pre-mistake original position, NOT floor-adjusted)`);
  }

  console.log('\nAll root-level node underside Y (final state):');
  for (const node of rootLevelNodes) {
    if (node === floorNode) continue;
    const bounds = getBounds(node);
    if (!isFinite(bounds.min[1])) continue;
    console.log(`  ${node.getName().padEnd(28)} underside Y: ${bounds.min[1].toFixed(3)}`);
  }
}

main().catch(err => {
  console.error('FIX FAILED:', err);
  process.exit(1);
});
