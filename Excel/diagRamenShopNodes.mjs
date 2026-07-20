// diagRamenShopNodes.mjs — lists all target part nodes (any depth)
// PLUS a full listing of exhibitStand_root's subtree, so we can
// confirm exhibitStand geometry is correctly excluded from every
// extracted part file.

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d            from 'draco3d';

const INPUT = './models/ramenShop_split_chunked.glb';

const PART_NAMES = [
  'chunk_1', 'chunk_2', 'chunk_3', 'chunk_4', 'chunk_5', 'chunk_6',
  'chunk_7', 'chunk_8', 'chunk_9', 'chunk_10', 'chunk_11', 'chunk_12',
  'chunk_13', 'chunk_14', 'chunk_15', 'chunk_16', 'chunk_17', 'chunk_18',
  'aboutMeBlack', 'aboutMeBlue', 'arcadeRim', 'arcadeScreen', 'arcadeToken',
  'articlesRed', 'articlesWhite', 'bigScreen', 'blueLights', 'chinese',
  'creditsBlack', 'creditsOrange', 'dish', 'dishStand', 'easelFrontGraphic',
  'fan1', 'fan2', 'floor', 'graphicsJoined', 'greenLED', 'greenSignSquare',
  'jesseZhouJoined', 'jZhouBlack', 'jZhouPink', 'lampLights',
  'littleTVScreen', 'miscJoined', 'neonBlue', 'neonGreen', 'neonPink',
  'neonYellow', 'poleLight', 'portalLight', 'projectsRed', 'projectsWhite',
  'redLED', 'roof', 'sideScreen', 'smallScreen1', 'smallScreen2',
  'smallScreen3', 'smallScreen4', 'smallScreen5', 'storageLight',
  'tallScreen', 'tvScreen', 'vendingMachineLight', 'vendingMachineScreen',
  'whiteButton', 'yellowRightLight',
];

async function main() {
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  const doc  = await io.read(INPUT);
  const root = doc.getRoot();
  const allNodes = root.listNodes();

  console.log(`Total nodes: ${allNodes.length}\n`);

  console.log('── TARGET PART NODES (matched by name, any depth) ──');
  const found = new Set();
  allNodes.forEach((node, i) => {
    const name = node.getName();
    if (!PART_NAMES.includes(name)) return;

    found.add(name);
    const mesh   = node.getMesh();
    const pName  = node.getParentNode?.()?.getName() ?? 'ROOT';
    const prims  = mesh ? mesh.listPrimitives().length : 0;
    const mats   = mesh
      ? mesh.listPrimitives().map(p => `"${p.getMaterial()?.getName() ?? '?'}"`).join('+')
      : '(no mesh)';
    console.log(`[${String(i).padStart(3)}] "${name}"  parent:"${pName}"  prims:${prims}  mats:${mats}`);
  });

  const missing = PART_NAMES.filter(n => !found.has(n));
  console.log(`\nMatched ${found.size} / ${PART_NAMES.length} target names.`);
  if (missing.length) {
    console.log(`\n⚠️  NOT FOUND (${missing.length}):`);
    missing.forEach(n => console.log(`     - ${n}`));
  }

  const nameCounts = {};
  allNodes.forEach(node => {
    const name = node.getName();
    if (PART_NAMES.includes(name)) {
      nameCounts[name] = (nameCounts[name] || 0) + 1;
    }
  });
  const dupes = Object.entries(nameCounts).filter(([, count]) => count > 1);
  if (dupes.length) {
    console.log(`\n⚠️  DUPLICATE NAMES (appear more than once in file):`);
    dupes.forEach(([name, count]) => console.log(`     - ${name} (${count}x)`));
  }

  // ── EXHIBITSTAND SUBTREE ──────────────────────────────────────────────
  // Full listing so we can confirm this entire branch is excluded from
  // every extracted part file (it should NEVER show up in a part export).
  console.log('\n\n── exhibitStand_root SUBTREE (full listing) ──');

  function isUnderExhibit(node) {
    let cur = node;
    while (cur) {
      if (cur.getName() === 'exhibitStand_root') return true;
      cur = cur.getParentNode?.();
    }
    return false;
  }

  let exhibitMeshNodeCount = 0;
  let exhibitGroupNodeCount = 0;
  let exhibitPrimCount = 0;
  const exhibitMaterials = new Set();
  const exhibitTextures = new Set();

  console.log('\n  Mesh nodes:');
  allNodes.forEach((node, i) => {
    if (!isUnderExhibit(node)) return;
    const mesh = node.getMesh();
    if (!mesh) return;
    exhibitMeshNodeCount++;
    const prims = mesh.listPrimitives();
    exhibitPrimCount += prims.length;
    const pName = node.getParentNode?.()?.getName() ?? 'ROOT';
    const mats = prims.map(p => {
      const mat = p.getMaterial();
      if (mat) exhibitMaterials.add(mat.getName() || '(unnamed)');
      return `"${mat?.getName() ?? '?'}"`;
    }).join('+');
    console.log(`    [${String(i).padStart(3)}] "${node.getName()}"  parent:"${pName}"  prims:${prims.length}  mats:${mats}`);
  });

  console.log('\n  Group nodes (no mesh):');
  allNodes.forEach((node, i) => {
    if (!isUnderExhibit(node)) return;
    if (node.getMesh()) return;
    exhibitGroupNodeCount++;
    const pName = node.getParentNode?.()?.getName() ?? 'ROOT';
    const kids = node.listChildren().length;
    console.log(`    [${String(i).padStart(3)}] "${node.getName()}"  parent:"${pName}"  children:${kids}`);
  });

  // Collect texture usage across exhibit materials, to size-check.
  root.listMaterials().forEach(mat => {
    if (!exhibitMaterials.has(mat.getName() || '(unnamed)')) return;
    const tex = mat.getBaseColorTexture();
    if (tex) exhibitTextures.add(tex.getName() || '(unnamed)');
  });

  console.log(`\n  Summary:`);
  console.log(`    Mesh nodes:  ${exhibitMeshNodeCount}`);
  console.log(`    Group nodes: ${exhibitGroupNodeCount}`);
  console.log(`    Primitives:  ${exhibitPrimCount}`);
  console.log(`    Distinct materials referenced: ${exhibitMaterials.size}`);
  console.log(`    Distinct base-color textures referenced: ${exhibitTextures.size}`);

  console.log(`\n  ⚠️  If any part_*.glb file contains nodes matching the above,`);
  console.log(`      the extraction script's exhibitStand exclusion has failed.`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
