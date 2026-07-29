/**
 * retexture-fans.mjs
 *
 * Assigns a unique baseColor texture to each of the 10 "aorus case fans"
 * variants. Uses document.createTexture()/createMaterial() explicitly —
 * Property.clone() is unreliable for guaranteeing independent copies in
 * glTF-Transform, which caused all fans to collapse onto one texture.
 *
 * Usage:
 *   node retexture-fans.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/parts/textured-parts.glb';
const OUTPUT = './models/parts/textured-parts-retextured.glb';
const TEX_DIR = './models/textures';

const FAN_NODE_NAMES = [
  'aorus case fans_aorus case fans_0',
  'aorus case fans.001_aorus case fans_0',
  'aorus case fans.002_aorus case fans_0',
  'aorus case fans.003_aorus case fans_0',
  'aorus case fans.004_aorus case fans_0',
  'aorus case fans.005_aorus case fans_0',
  'aorus case fans.006_aorus case fans_0',
  'aorus case fans.007_aorus case fans_0',
  'aorus case fans.008_aorus case fans_0',
  'aorus case fans.009_aorus case fans_0',
];

const FAN_TEXTURES = [
  'Material.074_30_baseColor.png',
  'Material.074_20_baseColor.png',
  'Material.074_4_baseColor.png',
  'Material.074_21_baseColor.png',
  'Material.074_17_baseColor.png',
  'Material.074_10_baseColor.jpeg',
  'Material.074_12_baseColor.jpeg',
  'Material.074_31_baseColor.png',
  'Material.074_15_baseColor.png',
  'Material.074_17_baseColor.png',
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

  for (let i = 0; i < FAN_NODE_NAMES.length; i++) {
    const nodeName = FAN_NODE_NAMES[i];
    const texFile  = FAN_TEXTURES[i];
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

    console.log(`\n🌀  Fan ${i}: ${nodeName}`);

    for (const prim of mesh.listPrimitives()) {
      const origMaterial = prim.getMaterial();
      if (!origMaterial) {
        console.warn(`    ⚠️  No material on primitive — skipping`);
        continue;
      }

      // Read the new image bytes up front
      let newImageBuffer;
      try {
        newImageBuffer = await fs.readFile(texPath);
      } catch (err) {
        console.error(`    ❌  Could not read ${texPath}: ${err.message}`);
        continue;
      }

      // Create a brand-new Texture explicitly (no clone() aliasing risk)
      const texture = doc.createTexture(`${texFile}_fan${i}`)
        .setImage(new Uint8Array(newImageBuffer))
        .setMimeType(mimeForFile(texFile))
        .setURI(texFile);

      // Create a brand-new Material, copying scalar properties from the
      // original so lighting/roughness/etc. stay consistent, then attach
      // the new unique texture.
      const material = doc.createMaterial(`${origMaterial.getName() || 'Material'}_fan${i}`)
        .setBaseColorFactor(origMaterial.getBaseColorFactor())
        .setMetallicFactor(origMaterial.getMetallicFactor())
        .setRoughnessFactor(origMaterial.getRoughnessFactor())
        .setDoubleSided(origMaterial.getDoubleSided())
        .setAlphaMode(origMaterial.getAlphaMode())
        .setBaseColorTexture(texture);

      // Preserve UV texCoord index if the original used a non-default one
      const origInfo = origMaterial.getBaseColorTextureInfo();
      const newInfo  = material.getBaseColorTextureInfo();
      if (origInfo && newInfo) {
        newInfo.setTexCoord(origInfo.getTexCoord());
      }

      prim.setMaterial(material);

      console.log(`    ✅  ${texFile} (${newImageBuffer.byteLength} bytes) → material "${material.getName()}"`);
    }
  }

  // Verify: print each fan's resolved material + texture name
  console.log(`\n📋  Verification:`);
  for (const nodeName of FAN_NODE_NAMES) {
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
