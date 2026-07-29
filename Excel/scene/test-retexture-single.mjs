/**
 * test-retexture-single.mjs
 *
 * Isolated test: retextures ONLY "rgb-hdd-cover-aorus-v1" with
 * Material.074_30_baseColor.png, extracts nothing else extra beyond
 * what extract-textured.mjs already keeps, and writes to a clean,
 * dedicated output folder so there's zero chance of stale leftover
 * files from previous runs interfering.
 *
 * Usage:
 *   node test-retexture-single.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT        = './models/scene.gltf';
const OUTDIR       = './models/parts-test';
const TEXTURES_DIR = './models/textures';

const TARGET_NODE_NAME = 'rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0';
const NEW_TEXTURE_FILE = 'Material.074_30_baseColor.png';

function normalise(name) {
  return name.toLowerCase().replace(/[\s_\-.]+/g, '');
}

// Same extraction target list as the main script, so this test glTF
// is a faithful (if smaller-scope) sanity check.
const TARGET_PATTERNS = [
  /^aoruscasefans0*\d*$/,
  /^rgbhddcoveraorusv1/,
  /^maxresdefault\(?1\)?/,
  /^nvidialogo/,
  /^torus0*\d*$/,
  /^geforcertx/,
  /^text0*\d*$/,
  /^aoruslogotranspa/,
  /^colorpewdiepielogo/,
  /^myscreen/,
  /^gigabytelogo0*\d*$/,
  /^testaorusm2sourisaorusrgb2/,
  /^gallerymodel/,
  /^onthefly-?bg/,
  /^bg2$/,
];

const SCENE_ROOTS = new Set([
  'Sketchfab_model', 'RootNode', 'Sketchfab_Scene',
  'dd12f1d0399348aab05d4e554860e7c0.fbx',
  'dd12f1d0399348aab05d4e554860e7c0fbx',
]);

function matchesAnyPattern(rawName) {
  const n = normalise(rawName);
  return TARGET_PATTERNS.some(re => re.test(n));
}

function isTarget(node) {
  const name   = node.getName();
  const parent = node.getParentNode ? node.getParentNode() : null;
  const pName  = parent ? parent.getName() : null;
  if (matchesAnyPattern(name)) return true;
  if (pName && !SCENE_ROOTS.has(pName) && matchesAnyPattern(pName)) return true;
  return false;
}

function mimeTypeFor(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.jpeg' || ext === '.jpg') return 'image/jpeg';
  if (ext === '.png') return 'image/png';
  throw new Error(`Unrecognised image extension: ${ext}`);
}

async function main() {
  console.log(`\n🧹  Wiping ${OUTDIR} for a clean test run …`);
  await fs.rm(OUTDIR, { recursive: true, force: true });
  await fs.mkdir(OUTDIR, { recursive: true });

  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
  console.log(`\n📂  Reading ${INPUT} …`);
  const doc  = await io.read(INPUT);
  const root = doc.getRoot();

  // Extract (same keep/strip logic as main script)
  const keepNodes = new Set();
  const skipNodes = new Set();
  for (const node of root.listNodes()) {
    if (!node.getMesh()) continue;
    if (isTarget(node)) keepNodes.add(node);
    else skipNodes.add(node);
  }
  console.log(`✅  KEEP: ${keepNodes.size}   ⬛  STRIP: ${skipNodes.size}`);

  for (const node of skipNodes) node.setMesh(null);
  pruneEmptyNodes(root);

  // Locate the HDD cover node specifically
  const node = root.listNodes().find(n => n.getName() === TARGET_NODE_NAME);
  if (!node) {
    console.error(`\n❌  "${TARGET_NODE_NAME}" not found after extraction — aborting`);
    process.exit(1);
  }

  const mesh = node.getMesh();
  const prim = mesh.listPrimitives()[0];
  const origMat = prim.getMaterial();

  console.log(`\n🎯  Target: "${TARGET_NODE_NAME}"`);
  console.log(`   Original material: "${origMat.getName()}"`);
  const origTex = origMat.getBaseColorTexture();
  console.log(`   Original texture URI: "${origTex?.getURI()}"`);
  console.log(`   Original texture bytes: ${origTex?.getImage()?.byteLength}`);

  const newMat = origMat.clone();
  const matTex = newMat.getBaseColorTexture();

  const imgPath = path.join(TEXTURES_DIR, NEW_TEXTURE_FILE);
  const imageData = await fs.readFile(imgPath);
  console.log(`\n   Loaded new image: ${imageData.byteLength} bytes from ${imgPath}`);

  const newTex = matTex.clone();
  newTex.setImage(imageData);
  newTex.setMimeType(mimeTypeFor(NEW_TEXTURE_FILE));
  newTex.setName(NEW_TEXTURE_FILE.replace(/\.(png|jpe?g)$/i, ''));
  newTex.setURI('');

  newMat.setBaseColorTexture(newTex);
  prim.setMaterial(newMat);

  // Verify
  const verifyMat = root.listNodes().find(n => n.getName() === TARGET_NODE_NAME).getMesh().listPrimitives()[0].getMaterial();
  const verifyTex = verifyMat.getBaseColorTexture();
  console.log(`\n✅  VERIFY material: "${verifyMat.getName()}"`);
  console.log(`✅  VERIFY texture bytes: ${verifyTex.getImage()?.byteLength}`);
  console.log(`✅  VERIFY texture URI: "${verifyTex.getURI()}"`);

  const outPath = path.join(OUTDIR, 'test-hdd.gltf');
  console.log(`\n💾  Writing → ${outPath} …`);
  await io.write(outPath, doc);
  console.log(`✅  Saved`);

  console.log(`\n📁  Files written:`);
  const files = await fs.readdir(OUTDIR);
  for (const f of files) {
    const stat = await fs.stat(path.join(OUTDIR, f));
    console.log(`   ${f}  (${stat.size} bytes)`);
  }
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

