// merge-hallway-onto-exhibitstand.mjs
//
// Merges space_ship_hallway.glb into ramenShopExhibtStand.glb, placed
// directly on top of Kaslíky (exhibitStand root's bounding group) with no
// gap, at hallway's NATURAL size (scale 1.0, no distortion). Preserves all
// of space_ship_hallway.glb's original node names (no renaming).
//
// Usage: node merge-hallway-onto-exhibitstand.mjs

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune, dedup, mergeDocuments, getBounds } from '@gltf-transform/functions';

const EXHIBIT_PATH = './models/ramenShop_uvrestored_v2_lifted.glb';
const HALLWAY_PATH = './models/space_ship_hallway.glb';
const OUT_PATH = './models/ramenShopExhibtStand_with_hallway.glb';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

async function main() {
  console.log('Loading ramenShopExhibtStand.glb (target) ...');
  const targetDoc = await io.read(EXHIBIT_PATH);
  const targetRoot = targetDoc.getRoot();
  const targetScene = targetRoot.listScenes()[0];

  console.log('Loading space_ship_hallway.glb (source) ...');
  const hallwayDoc = await io.read(HALLWAY_PATH);

  // ── 1. Locate Kaslíky and capture its world bbox ──
  const kasliky = targetRoot.listNodes().find(n => n.getName() === 'Kaslíky');
  if (!kasliky) throw new Error('Kaslíky node not found.');

  const kaslikyBounds = getBounds(kasliky);
  const kaslikyCenterXZ = [
    (kaslikyBounds.min[0] + kaslikyBounds.max[0]) / 2,
    (kaslikyBounds.min[2] + kaslikyBounds.max[2]) / 2,
  ];
  const kaslikyTopY = kaslikyBounds.max[1];

  console.log(`Kaslíky bbox: min[${kaslikyBounds.min.map(v=>v.toFixed(3))}] max[${kaslikyBounds.max.map(v=>v.toFixed(3))}]`);
  console.log(`Kaslíky top Y: ${kaslikyTopY.toFixed(3)}`);
  console.log(`Kaslíky X/Z center: [${kaslikyCenterXZ.map(v=>v.toFixed(3)).join(', ')}]`);

  // ── 2. No renaming — preserve all hallway node names exactly as-is ──
  console.log('\nPreserving all space_ship_hallway.glb node names (no renaming).');

  // ── 3. Merge hallwayDoc into targetDoc ──
  console.log('Merging hallway document into exhibitStand document ...');
  mergeDocuments(targetDoc, hallwayDoc);

  const mergedScenes = targetRoot.listScenes();
  const importedScene = mergedScenes[mergedScenes.length - 1];
  const importedRootNodes = importedScene.listChildren();
  console.log(`Imported ${importedRootNodes.length} root-level node(s) (expect 1, per report's root-level:1).`);

  if (importedRootNodes.length !== 1) {
    console.warn(`⚠️  Expected exactly 1 imported root node. Got ${importedRootNodes.length}.`);
  }

  // ── 4. Wrapper group for positioning only — NO scale applied, stays at
  //      identity [1,1,1], so hallway renders at its natural authored size. ──
  const hallwayGroup = targetDoc.createNode('SpaceshipHallway_OnKasliky');
  for (const node of importedRootNodes) {
    importedScene.removeChild(node);
    hallwayGroup.addChild(node);
  }
  targetScene.addChild(hallwayGroup);
  importedScene.dispose();

  const naturalBounds = getBounds(hallwayGroup);
  const naturalSize = [
    naturalBounds.max[0] - naturalBounds.min[0],
    naturalBounds.max[1] - naturalBounds.min[1],
    naturalBounds.max[2] - naturalBounds.min[2],
  ];
  console.log(`Hallway natural size (scale 1.0, unchanged): ${naturalSize.map(v=>v.toFixed(3)).join(' x ')}`);

  // ── 5. Position only: centered on Kaslíky's X/Z footprint, resting
  //      exactly on Kaslíky's top surface (no gap). No scale set — group
  //      stays at default [1,1,1]. ──
  const targetX = kaslikyCenterXZ[0] - (naturalBounds.min[0] + naturalBounds.max[0]) / 2;
  const targetZ = kaslikyCenterXZ[1] - (naturalBounds.min[2] + naturalBounds.max[2]) / 2;
  const targetY = kaslikyTopY - naturalBounds.min[1]; // underside sits exactly on Kaslíky's top, zero gap

  hallwayGroup.setTranslation([targetX, targetY, targetZ]);
  console.log(`Placed hallway wrapper at [${hallwayGroup.getTranslation().map(v=>v.toFixed(3)).join(', ')}]`);
  console.log(`Hallway scale: [${hallwayGroup.getScale().map(v=>v.toFixed(3)).join(', ')}] (identity — natural size preserved)`);

  // ── 6. Cleanup ──
  await targetDoc.transform(dedup(), prune());

  const buffers = targetRoot.listBuffers();
  console.log(`Buffers before consolidation: ${buffers.length}`);
  if (buffers.length > 1) {
    const mainBuffer = buffers[0];
    for (const accessor of targetRoot.listAccessors()) {
      accessor.setBuffer(mainBuffer);
    }
    for (let i = buffers.length - 1; i > 0; i--) {
      buffers[i].dispose();
    }
    await targetDoc.transform(prune());
    console.log(`Buffers after consolidation: ${targetRoot.listBuffers().length}`);
  }

  // ── 7. Write output ──
  console.log(`Writing ${OUT_PATH} ...`);
  await io.write(OUT_PATH, targetDoc);

  // ── 8. Verify ──
  const finalBounds = getBounds(hallwayGroup);
  const finalSize = [
    finalBounds.max[0] - finalBounds.min[0],
    finalBounds.max[1] - finalBounds.min[1],
    finalBounds.max[2] - finalBounds.min[2],
  ];
  console.log('\n── Verification ──');
  console.log(`Hallway final size: ${finalSize.map(v=>v.toFixed(3)).join(' x ')}  (should match natural size — no scaling applied)`);
  console.log(`Hallway underside Y: ${finalBounds.min[1].toFixed(3)}  |  Kaslíky top Y: ${kaslikyTopY.toFixed(3)}  |  Gap: ${(finalBounds.min[1]-kaslikyTopY).toFixed(4)}`);

  console.log('\nHallway node names in final document (should be unmodified):');
  hallwayGroup.listChildren().forEach(n => {
    console.log(`  "${n.getName()}"`);
    n.listChildren().forEach(c => console.log(`    "${c.getName()}"`));
  });
}

main().catch(err => {
  console.error('MERGE FAILED:', err);
  process.exit(1);
});

