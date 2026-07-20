/**
 * splitExhibitStand.mjs
 *
 * Splits the exhibitStand_root subtree from ramenShop-final.glb
 * into 30 separate GLB files.
 *
 * Usage:
 *   npm install draco3d   (if not already installed)
 *   node splitExhibitStand.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { cloneDocument }  from '@gltf-transform/functions';
import { promises as fs } from 'fs';
import path               from 'path';
import draco3d            from 'draco3d';

const INPUT  = './models/ramenShop-final.glb';
const OUTDIR = './models/exhibit-parts';

// ── HELPERS ───────────────────────────────────────────────────────────────────
function getMats(node) {
  const mesh = node.getMesh();
  if (!mesh) return [];
  return mesh.listPrimitives().map(p => p.getMaterial()?.getName() ?? '');
}

function hasAll(mats, sig) {
  return sig.every(m => mats.includes(m));
}

function parentName(node) {
  return node.getParentNode?.()?.getName() ?? '';
}

function isUnderExhibit(node) {
  let cur = node;
  while (cur) {
    if (cur.getName() === 'exhibitStand_root') return true;
    cur = cur.getParentNode?.();
  }
  return false;
}

// ── CLASSIFIER ────────────────────────────────────────────────────────────────
function classify(node, tv60Map, sezeniMap) {
  const pName = parentName(node);
  const mats  = getMats(node);
  const self  = node.getName();

  if (pName === 'Rám1')            return 'ram1.glb';
  if (pName === 'Rám2')            return 'ram2.glb';
  if (pName === 'Rám3')            return 'ram3.glb';
  if (pName === 'Kaslíky')         return 'main_housing.glb';
  if (pName === 'Bar')             return 'bar.glb';
  if (pName === 'Skla')            return 'skyla.glb';
  if (pName === 'stul')            return 'stul.glb';
  if (pName === 'Sezení jednačka') return 'stul.glb';
  if (pName === 'Barové sezení')   return 'bar.glb';
  if (pName === 'skpE9')           return 'flower.glb';

  if (pName === 'TV 60') {
    const p = node.getParentNode?.();
    return p ? (tv60Map.get(p) ?? 'tv_60.glb') : 'tv_60.glb';
  }

  if (pName === 'Sezení') {
    const p = node.getParentNode?.();
    return p ? (sezeniMap.get(p) ?? 'stolek_bar.glb') : 'stolek_bar.glb';
  }

  if (self === 'Component#6')       return 'skyla.glb';
  if (self === 'akvarko')           return 'tv_stand.glb';
  if (self === 'mesh_145_restored') return 'main_housing.glb';

  // Unnamed nodes under root — classify by material signature
  if ((pName === 'root' || pName === 'exhibitStand_root') && self === '') {
    if (hasAll(mats, ['Material 9','Material 8','Lamino']))        return 'circular_box.glb';
    if (mats.includes('Carpet_A02_100cm#1'))                       return 'carpet.glb';
    if (mats.includes('Grass_D_200cm'))                            return 'carpet.glb';
    if (mats.includes('Carpet_A02_100cm')
      && !mats.includes('Carpet_A02_100cm#1'))                     return 'carpet.glb';
    if (mats.includes('Flooring_Parquet_Parallel_I01_120cm'))      return 'carpet.glb';
    if (hasAll(mats, ['default material','Lamino','Material 12'])) return 'wallboard.glb';
    if (mats.includes('bílá koule'))                               return 'balloons.glb';
    if (mats.length === 1 && mats[0] === 'Material 1')             return 'mesh_11.glb';
    if (mats.length === 1 && mats[0] === 'Material 2')             return 'main_housing.glb';
    if (mats.length === 1 && mats[0] === 'Material 4')             return 'main_housing.glb';
    if (mats.length === 1 && mats[0] === 'Material 5')             return 'mesh_14.glb';
    if (mats.length === 1 && mats[0] === 'Material 6')             return 'mesh_23.glb';
    if (hasAll(mats, ['Material 7','default material','Nátěr bílá'])) return 'main_housing.glb';
    if (mats[0] === 'Color M05'  && mats[1] === 'Nátěr bílá') return 'mesh_1.glb';
    if (mats[0] === 'Nátěr bílá' && mats[1] === 'Color M05')  return 'mesh_24.glb';
    if (hasAll(mats, ['Nátěr bílá','Material 3']))                 return 'mesh_1_1.glb';
    if (mats.length === 1 && mats[0] === 'Lamino')                 return '__LAMINO_ROOT__';
  }

  // Balloons: unnamed under unnamed parent
  if (pName === '' && self === '') {
    if (mats.includes('white'))    return 'balloons.glb';
    if (mats.includes('Titanium')) return 'balloons.glb';
  }

  return null;
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  await fs.mkdir(OUTDIR, { recursive: true });

  // ── Draco-aware IO ────────────────────────────────────────────────────────
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  console.log(`\n📂  Reading ${INPUT} …`);
  const srcDoc  = await io.read(INPUT);
  const srcRoot = srcDoc.getRoot();

  const allNodes = srcRoot.listNodes();
  console.log(`🔎  Total nodes: ${allNodes.length}`);

  const exhibitNodes = allNodes.filter(n => isUnderExhibit(n));
  const meshNodes    = exhibitNodes.filter(n => n.getMesh());
  console.log(`🔎  Exhibit nodes: ${exhibitNodes.length}  Mesh nodes: ${meshNodes.length}`);

  // ── Pre-scan: TV 60 and Sezení disambiguation ─────────────────────────────
  const tv60Parents   = [];
  const sezeniParents = [];

  for (const node of exhibitNodes) {
    if (node.getMesh()) continue;
    if (node.getName() === 'TV 60')  tv60Parents.push(node);
    if (node.getName() === 'Sezení') sezeniParents.push(node);
  }

  const tv60Map = new Map();
  ['tv_60.glb','tv_60_1.glb'].forEach((f, i) => {
    if (tv60Parents[i]) tv60Map.set(tv60Parents[i], f);
  });

  const sezeniMap = new Map();
  ['stolek_bar.glb','stolek_bar_1.glb','stolek_bar_2.glb',
   'stolek_bar_3.glb','stolek_bar_4.glb'].forEach((f, i) => {
    if (sezeniParents[i]) sezeniMap.set(sezeniParents[i], f);
  });

  // ── Lamino singles under root → first 3 = signages, rest = main_housing ──
  const laminoRootNodes = meshNodes.filter(n =>
    getMats(n).length === 1 &&
    getMats(n)[0] === 'Lamino' &&
    parentName(n) === 'root'
  );
  console.log(`🔎  Lamino singles under root: ${laminoRootNodes.length}`);

  const signageFiles  = ['mesh_25.glb','mesh_26.glb','mesh_27.glb'];
  const laminoSignage = new Map();
  const laminoHousing = new Set();

  laminoRootNodes.forEach((node, i) => {
    if (i < 3) laminoSignage.set(node, signageFiles[i]);
    else        laminoHousing.add(node);
  });

  // ── Classify ─────────────────────────────────────────────────────────────
  const buckets = new Map();
  const miscSet = new Set();

  function addToBucket(file, node) {
    if (!buckets.has(file)) buckets.set(file, new Set());
    buckets.get(file).add(node);
  }

  for (const node of meshNodes) {
    if (laminoSignage.has(node)) { addToBucket(laminoSignage.get(node), node); continue; }
    if (laminoHousing.has(node)) { addToBucket('main_housing.glb', node);      continue; }

    const file = classify(node, tv60Map, sezeniMap);

    if (!file || file === '__LAMINO_ROOT__') {
      addToBucket('main_housing.glb', node); // safe fallback
    } else {
      addToBucket(file, node);
    }
  }

  // ── Print summary ─────────────────────────────────────────────────────────
  const allFiles = [
    'circular_box.glb','tv_60.glb','tv_60_1.glb',
    'stolek_bar.glb','stolek_bar_1.glb','stolek_bar_2.glb',
    'stul.glb','stolek_bar_3.glb','stolek_bar_4.glb',
    'bar.glb','main_housing.glb','carpet.glb',
    'mesh_11.glb','mesh_14.glb','mesh_23.glb',
    'mesh_1.glb','mesh_1_1.glb','mesh_24.glb',
    'mesh_25.glb','mesh_26.glb','mesh_27.glb',
    'wallboard.glb','skyla.glb','balloons.glb',
    'flower.glb','tv_stand.glb',
    'ram1.glb','ram2.glb','ram3.glb',
  ];

  console.log('\n📋  Classification summary:');
  allFiles.forEach(f => {
    const cnt  = buckets.get(f)?.size ?? 0;
    const mark = cnt === 0 ? '⚠️ ' : '✅ ';
    console.log(`  ${mark} [${f}]  →  ${cnt} nodes`);
  });
  if (miscSet.size > 0) {
    console.log(`  ⚠️  [misc.glb]  →  ${miscSet.size} nodes`);
    console.log('  Sample:', [...miscSet].slice(0,5).map(n =>
      `"${n.getName()}"/p:"${parentName(n)}"`).join(' | '));
  }

  // ── Write each bucket ─────────────────────────────────────────────────────
  for (const [file, nodeSet] of buckets.entries()) {
    if (nodeSet.size === 0) continue;
    console.log(`\n✂️   Writing ${file}  (${nodeSet.size} nodes) …`);

    const keepIdx   = new Set([...nodeSet].map(n => allNodes.indexOf(n)));
    const clone     = cloneDocument(srcDoc);
    const cloneList = clone.getRoot().listNodes();

    for (let i = 0; i < cloneList.length; i++) {
      const cn = cloneList[i];
      if (!cn.getMesh()) continue;
      if (!keepIdx.has(i)) cn.setMesh(null);
    }
    pruneEmpty(clone.getRoot());

    const remaining = clone.getRoot().listNodes().filter(n => n.getMesh()).length;
    await io.write(path.join(OUTDIR, file), clone);
    console.log(`   ✅  ${path.join(OUTDIR, file)}  (${remaining} mesh nodes)`);
  }

  if (miscSet.size > 0) {
    console.log(`\n✂️   Writing misc.glb …`);
    const keepIdx   = new Set([...miscSet].map(n => allNodes.indexOf(n)));
    const clone     = cloneDocument(srcDoc);
    const cloneList = clone.getRoot().listNodes();
    for (let i = 0; i < cloneList.length; i++) {
      const cn = cloneList[i];
      if (!cn.getMesh()) continue;
      if (!keepIdx.has(i)) cn.setMesh(null);
    }
    pruneEmpty(clone.getRoot());
    await io.write(path.join(OUTDIR, 'misc.glb'), clone);
    console.log(`   ✅  misc.glb`);
  }

  console.log('\n🎉  All done! Parts in', OUTDIR);
}

function pruneEmpty(root) {
  let changed = true;
  while (changed) {
    changed = false;
    for (const node of root.listNodes()) {
      if (!node.getMesh() && node.listChildren().length === 0) {
        node.dispose();
        changed = true;
      }
    }
  }
}

main().catch(err => { console.error('❌', err); process.exit(1); });

