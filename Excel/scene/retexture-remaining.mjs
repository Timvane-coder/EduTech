/**
 * retexture-remaining.mjs
 *
 * Assigns a unique baseColor texture to each of the 14 remaining
 * branded/decal objects, in the given order. Follows the same
 * createTexture()/createMaterial() pattern as retexture-fans.mjs —
 * no .clone(), to avoid texture aliasing across nodes.
 *
 * Usage:
 *   node retexture-remaining.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/parts/textured-parts-retextured.glb'; // chain off the fan-retextured output
const OUTPUT = './models/parts/textured-parts-retextured-2.glb';
const TEX_DIR = './models/textures';

const TARGET_NODE_NAMES = [
  'rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0',
  'maxresdefault (1)_maxresdefault (1)_0',
  'NVIDIA LOGO_NVIDIA LOGO_0',
  'Torus_Material.013_0',
  'Torus.001_Material.032_0',
  'Text_Material.046_0',
  'test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0',
  'geforcertx_Material.056_0',
  'aorus logotranspa_aorus logotranspa_0',
  'Color-PewDiePie-Logo_Color-PewDiePie-Logo_0',
  'Text.001_Material.097_0',
  'gallerymodel_gallerymodel_0',
  'gigabyte-logo_gigabyte-logo_0',
  'gigabyte-logo.001_gigabyte-logo_0',
];

const TARGET_TEXTURES = [
  'Material.023_baseColor.jpeg',
  'Material.074_11_baseColor.png',
  'Material.074_13_baseColor.png',
  'Material.074_1_baseColor.jpeg',
  'Material.074_21_baseColor.png',
  'Material.074_22_baseColor.png',
  'Material.074_25_baseColor.jpeg',
  'Material.074_26_baseColor.png',
  'Material.074_27_baseColor.png',
  'Material.074_28_baseColor.png',
  'Material.074_2_baseColor.jpeg',
  'Material.074_3_baseColor.png',
  'Material.074_8_baseColor.png',
  'Material.074_6_baseColor.png',
];

function mimeForFile(filename) {
  const ext = path.extname(filename).toLowerCase();
  if (ext === '.jpg' || ext === '.jpeg') return 'image/jpeg';
  return 'image/png';
}

async function main() {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

  console.log(`\n📂  Reading ${INPUT} …`);
  const doc  = await io.read(INPUT);
  const root = doc.getRoot();

  if (TARGET_NODE_NAMES.length !== TARGET_TEXTURES.length) {
    console.error(`❌  Mismatched list lengths: ${TARGET_NODE_NAMES.length} nodes vs ${TARGET_TEXTURES.length} textures`);
    process.exit(1);
  }

  for (let i = 0; i < TARGET_NODE_NAMES.length; i++) {
    const nodeName = TARGET_NODE_NAMES[i];
    const texFile  = TARGET_TEXTURES[i];
    const texPath  = path.join(TEX_DIR, texFile);

    const node = root.listNodes().find(n => n.getName() === nodeName);
    if (!node) {
      console.error(`❌  Node "${nodeName}" not found — skipping`);
      continue;
    }

    const mesh = node.getMesh();
    if (!mesh) {
      console.error(`❌  Node "${nodeName}" has no mesh — skipping`);
      continue;
    }

    console.log(`\n🎯  ${nodeName}`);

    for (const prim of mesh.listPrimitives()) {
      const origMaterial = prim.getMaterial();
      if (!origMaterial) {
        console.warn(`    ⚠️  No material on primitive — skipping`);
        continue;
      }

      let newImageBuffer;
      try {
        newImageBuffer = await fs.readFile(texPath);
      } catch (err) {
        console.error(`    ❌  Could not read ${texPath}: ${err.message}`);
        continue;
      }

      const texture = doc.createTexture(`${texFile}_${i}`)
        .setImage(new Uint8Array(newImageBuffer))
        .setMimeType(mimeForFile(texFile))
        .setURI(texFile);

      const material = doc.createMaterial(`${origMaterial.getName() || 'Material'}_retex${i}`)
        .setBaseColorFactor(origMaterial.getBaseColorFactor())
        .setMetallicFactor(origMaterial.getMetallicFactor())
        .setRoughnessFactor(origMaterial.getRoughnessFactor())
        .setDoubleSided(origMaterial.getDoubleSided())
        .setAlphaMode(origMaterial.getAlphaMode())
        .setBaseColorTexture(texture);

      const origInfo = origMaterial.getBaseColorTextureInfo();
      const newInfo  = material.getBaseColorTextureInfo();
      if (origInfo && newInfo) {
        newInfo.setTexCoord(origInfo.getTexCoord());
      }

      prim.setMaterial(material);

      console.log(`    ✅  ${texFile} (${newImageBuffer.byteLength} bytes) → material "${material.getName()}"`);
    }
  }

  // Verification pass
  console.log(`\n📋  Verification:`);
  for (const nodeName of TARGET_NODE_NAMES) {
    const node = root.listNodes().find(n => n.getName() === nodeName);
    const mesh = node?.getMesh();
    if (!mesh) continue;
    for (const prim of mesh.listPrimitives()) {
      const mat = prim.getMaterial();
      const tex = mat?.getBaseColorTexture();
      console.log(`   ${nodeName} → material "${mat?.getName()}" → texture "${tex?.getURI()}"`);
    }
  }

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await io.write(OUTPUT, doc);
  console.log(`\n✅  Saved → ${OUTPUT}`);
  console.log('\n🎉  Done!');
}

main().catch(err => { console.error('❌', err); process.exit(1); });
