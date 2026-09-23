// fix-exhibitstand-carpet-floor-v2.mjs
//
// Corrects exhibitStand_root's vertical position so the CARPET meshes
// (Mesh_57 material "Carpet_A02_100cm#1" and Mesh_61 material
// "Carpet_A02_100cm") have their lowest point touch the floor's top
// surface exactly — no gap, no submersion. Hallway moves with
// exhibitStand_root by the same correction to stay seated on Kaslíky.
// ramenShop_root and chunk_* nodes are untouched.
//
// Usage: node fix-exhibitstand-carpet-floor-v2.mjs

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { getBounds } from '@gltf-transform/functions';

const IN_PATH = './models/ramenShopExhibtStand_with_hallway.glb';
const OUT_PATH = './models/ramenShopExhibtStand_with_hallway.glb'; // overwrite — refinement pass

const CARPET_NODE_NAMES = ['Mesh_57', 'Mesh_61']; // identified by carpet material, per your node listing

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

  // ── 1. Locate the carpet nodes by name, confirm their materials match
  //      expectation as a sanity check. ──
  const allNodes = root.listNodes();
  const carpetNodes = [];

  for (const name of CARPET_NODE_NAMES) {
    const node = allNodes.find(n => n.getName() === name);
    if (!node) {
      console.warn(`⚠️  Carpet node "${name}" not found — skipping.`);
      continue;
    }
    const mesh = node.getMesh();
    const matNames = mesh ? mesh.listPrimitives().map(p => p.getMaterial()?.getName() || '(none)') : [];
    console.log(`Found "${name}" — materials: [${matNames.join(', ')}]`);
    carpetNodes.push(node);
  }

  if (carpetNodes.length === 0) {
    throw new Error('No carpet nodes found by name — check CARPET_NODE_NAMES against current file.');
  }

  // ── 2. Find the lowest Y point among the carpet nodes specifically ──
  let carpetMinY = Infinity;
  for (const node of carpetNodes) {
    const bounds = getBounds(node);
    console.log(`  "${node.getName()}" underside Y: ${bounds.min[1].toFixed(3)}`);
    if (bounds.min[1] < carpetMinY) carpetMinY = bounds.min[1];
  }
  console.log(`\nCarpet combined lowest Y: ${carpetMinY.toFixed(3)}`);
  console.log(`Gap from floor: ${(carpetMinY - floorTopY).toFixed(3)} ${carpetMinY < floorTopY ? '(SUBMERGED)' : '(floating)'}`);

  // ── 3. Compute correction ──
  const yCorrection = floorTopY - carpetMinY;
  console.log(`\nY correction needed: ${yCorrection.toFixed(3)}`);

  // ── 4. Apply to exhibitStand_root AND hallway together ──
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

  // ── 5. Write output ──
  console.log(`\nWriting ${OUT_PATH} ...`);
  await io.write(OUT_PATH, doc);

  // ── 6. Verify ──
  console.log('\n── Verification ──');
  let finalCarpetMinY = Infinity;
  for (const node of carpetNodes) {
    const bounds = getBounds(node);
    console.log(`  "${node.getName()}" underside Y (final): ${bounds.min[1].toFixed(3)}`);
    if (bounds.min[1] < finalCarpetMinY) finalCarpetMinY = bounds.min[1];
  }
  const finalGap = finalCarpetMinY - floorTopY;
  console.log(`\nCarpet combined lowest Y: ${finalCarpetMinY.toFixed(3)}  |  Floor top Y: ${floorTopY.toFixed(3)}  |  Gap: ${finalGap.toFixed(4)} ${Math.abs(finalGap) < 0.001 ? '✅' : '⚠️'}`);

  const finalExhibitBounds = getBounds(exhibitRoot);
  console.log(`\nexhibitStand_root overall lowest Y: ${finalExhibitBounds.min[1].toFixed(3)}`);
  if (finalExhibitBounds.min[1] < floorTopY - 0.001) {
    console.warn(`⚠️  Something else in exhibitStand_root dips BELOW the carpet/floor line (${finalExhibitBounds.min[1].toFixed(3)} < ${floorTopY.toFixed(3)}) — likely furniture legs or Kaslíky's base. Carpet itself is correctly placed, but another part may still visually clip through the floor.`);
  } else {
    console.log(`✅ Nothing in exhibitStand_root dips below the carpet/floor line.`);
  }
}

main().catch(err => {
  console.error('FIX FAILED:', err);
  process.exit(1);
});
