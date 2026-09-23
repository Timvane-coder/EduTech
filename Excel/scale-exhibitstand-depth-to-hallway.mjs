// scale-exhibitstand-depth-to-hallway.mjs
//
// Scales the exhibitStand_root group's depth (Z) to match
// SpaceshipHallway_OnKasliky's natural depth. Uniform scale applied to
// exhibitStand_root as a whole (so Kaslíky, the ramen shop furniture
// group, and everything else under it stays proportional — only Z is
// targeted, X/Y scale along with it uniformly unless told otherwise).
// Hallway itself is left untouched.
//
// Usage: node scale-exhibitstand-depth-to-hallway.mjs

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

  const exhibitRoot = root.listNodes().find(n => n.getName() === 'exhibitStand_root');
  const hallwayGroup = root.listNodes().find(n => n.getName() === 'SpaceshipHallway_OnKasliky');
  if (!exhibitRoot) throw new Error('"exhibitStand_root" node not found.');
  if (!hallwayGroup) throw new Error('"SpaceshipHallway_OnKasliky" node not found.');

  const hallwayBounds = getBounds(hallwayGroup);
  const hallwayDepthZ = hallwayBounds.max[2] - hallwayBounds.min[2];
  console.log(`Hallway depth (Z): ${hallwayDepthZ.toFixed(3)} (target — unchanged)`);

  const exhibitBoundsBefore = getBounds(exhibitRoot);
  const exhibitSizeBefore = [
    exhibitBoundsBefore.max[0] - exhibitBoundsBefore.min[0],
    exhibitBoundsBefore.max[1] - exhibitBoundsBefore.min[1],
    exhibitBoundsBefore.max[2] - exhibitBoundsBefore.min[2],
  ];
  console.log(`exhibitStand_root size (before): ${exhibitSizeBefore.map(v=>v.toFixed(3)).join(' x ')}`);

  const centerBefore = [
    (exhibitBoundsBefore.min[0] + exhibitBoundsBefore.max[0]) / 2,
    (exhibitBoundsBefore.min[1] + exhibitBoundsBefore.max[1]) / 2,
    (exhibitBoundsBefore.min[2] + exhibitBoundsBefore.max[2]) / 2,
  ];

  // ── Compute uniform scale factor so exhibitStand_root's Z matches
  //      hallway's Z exactly. ──
  const scaleFactor = hallwayDepthZ / exhibitSizeBefore[2];
  console.log(`Scale factor needed: ${scaleFactor.toFixed(4)}`);

  const currentScale = exhibitRoot.getScale();
  const currentTranslation = exhibitRoot.getTranslation();
  const newScale = [
    currentScale[0] * scaleFactor,
    currentScale[1] * scaleFactor,
    currentScale[2] * scaleFactor,
  ];
  exhibitRoot.setScale(newScale);
  console.log(`exhibitStand_root scale: [${currentScale.map(v=>v.toFixed(3)).join(', ')}] → [${newScale.map(v=>v.toFixed(3)).join(', ')}]`);

  // ── Re-anchor: scaling around local origin shifts world bbox — keep the
  //      same center point as before, so the whole group grows/shrinks
  //      evenly instead of drifting. This also keeps Kaslíky (and thus
  //      the hallway sitting on it, since hallway is a SIBLING, not a
  //      child of exhibitStand_root) roughly where it was, though note:
  //      hallway itself is NOT parented under exhibitStand_root, so it
  //      will NOT move or rescale with this operation — only exhibitStand
  //      shrinks/grows around its own center. ──
  const boundsAfterScale = getBounds(exhibitRoot);
  const centerAfter = [
    (boundsAfterScale.min[0] + boundsAfterScale.max[0]) / 2,
    (boundsAfterScale.min[1] + boundsAfterScale.max[1]) / 2,
    (boundsAfterScale.min[2] + boundsAfterScale.max[2]) / 2,
  ];
  const drift = [
    centerAfter[0] - centerBefore[0],
    centerAfter[1] - centerBefore[1],
    centerAfter[2] - centerBefore[2],
  ];

  exhibitRoot.setTranslation([
    currentTranslation[0] - drift[0],
    currentTranslation[1] - drift[1],
    currentTranslation[2] - drift[2],
  ]);

  console.log(`exhibitStand_root translation: [${currentTranslation.map(v=>v.toFixed(3)).join(', ')}] → [${exhibitRoot.getTranslation().map(v=>v.toFixed(3)).join(', ')}]`);

  // ── Write output ──
  console.log(`Writing ${OUT_PATH} ...`);
  await io.write(OUT_PATH, doc);

  // ── Verify ──
  const finalBounds = getBounds(exhibitRoot);
  const finalSize = [
    finalBounds.max[0] - finalBounds.min[0],
    finalBounds.max[1] - finalBounds.min[1],
    finalBounds.max[2] - finalBounds.min[2],
  ];
  console.log('\n── Verification ──');
  console.log(`exhibitStand_root size (final): ${finalSize.map(v=>v.toFixed(3)).join(' x ')}`);
  console.log(`exhibitStand_root depth (Z): ${finalSize[2].toFixed(3)}  |  Hallway depth (Z): ${hallwayDepthZ.toFixed(3)}  |  Match: ${Math.abs(finalSize[2]-hallwayDepthZ) < 0.001 ? '✅' : '⚠️'}`);
}

main().catch(err => {
  console.error('SCALE FAILED:', err);
  process.exit(1);
});
