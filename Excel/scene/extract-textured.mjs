/**
 * extract-textured.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { cloneDocument }  from '@gltf-transform/functions';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/scene.gltf';
const OUTDIR = './models/parts';

// ─── TARGET MATCHING ─────────────────────────────────────────────────────────
// Instead of enumerating every dot/underscore/zero-pad variant, match by
// prefix against the base semantic name. This covers "aorus case fans",
// "aorus case fans.001" ... "aorus case fans.009", and their underscore
// equivalents, in one rule.

const TARGET_PREFIXES = [
  'aorus case fans',
  'aorus_case_fans',
  'rgb-hdd-cover-aorus-v1',
  'maxresdefault (1)',
  'maxresdefault_(1)',
  'NVIDIA LOGO',
  'NVIDIA_LOGO',
  'Torus',            // covers Torus and Torus.001
  'geforcertx',
  'Text',             // covers Text and Text.001
  'aorus logotranspa',
  'aorus_logotranspa',
  'Color-PewDiePie-Logo',
  'MY_SCREEN',
  'gigabyte-logo',
  'test-aorus-m2-souris-aorus-rgb2',
  'gallerymodel',
  'OnTheFly-bg',
];

const SCENE_ROOTS = new Set([
  'Sketchfab_model', 'RootNode', 'Sketchfab_Scene',
  'dd12f1d0399348aab05d4e554860e7c0.fbx',
  'dd12f1d0399348aab05d4e554860e7c0fbx',
]);

// ─── MATCH LOGIC ─────────────────────────────────────────────────────────────

function matchesPrefix(name) {
  return TARGET_PREFIXES.some(p => name.startsWith(p));
}

function isTarget(node) {
  const name   = node.getName();
  const parent = node.getParentNode ? node.getParentNode() : null;
  const pName  = parent ? parent.getName() : null;

  // Direct name match (leaf node itself starts with a target prefix)
  if (matchesPrefix(name)) return true;

  // Parent name match (leaf's parent is the semantic target node)
  if (pName && !SCENE_ROOTS.has(pName) && matchesPrefix(pName)) return true;

  return false;
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  await fs.mkdir(OUTDIR, { recursive: true });

  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcDoc  = await io.read(INPUT);
  const srcRoot = srcDoc.getRoot();

  const allNodes = srcRoot.listNodes();
  console.log(`🔎  Total nodes: ${allNodes.length}`);

  const keepNames = new Set();
  const skipNames = new Set();

  for (const node of allNodes) {
    if (!node.getMesh()) continue;
    if (isTarget(node)) {
      keepNames.add(node.getName());
    } else {
      skipNames.add(node.getName());
    }
  }

  console.log(`\n✅  Nodes to KEEP : ${keepNames.size}`);
  console.log([...keepNames].map(n => `     • ${n}`).join('\n'));
  console.log(`\n⬛  Nodes to STRIP: ${skipNames.size}`);

  if (keepNames.size === 0) {
    console.error('\n❌  Nothing matched — check node names above');
    process.exit(1);
  }

  console.log('\n🔁  Cloning document (deep copy — textures included) …');
  const clone     = cloneDocument(srcDoc);
  const cloneRoot = clone.getRoot();

  for (const node of cloneRoot.listNodes()) {
    if (!node.getMesh()) continue;
    if (!keepNames.has(node.getName())) {
      node.setMesh(null);
    }
  }

  pruneEmptyNodes(cloneRoot);

  const mats  = cloneRoot.listMaterials();
  const texs  = cloneRoot.listTextures();
  console.log(`\n📦  Surviving in clone:`);
  console.log(`     Materials : ${mats.length}`);
  console.log(`     Textures  : ${texs.length}`);
  texs.forEach(t => console.log(`       🖼  ${t.getName() || '(unnamed)'} — ${t.getMimeType()}`));

  const outPath = path.join(OUTDIR, 'textured-parts.glb');
  await io.write(outPath, clone);
  console.log(`\n✅  Saved → ${outPath}`);
  console.log('\n🎉  Done!');
}

function pruneEmptyNodes(root) {
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
