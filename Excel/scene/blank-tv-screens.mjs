/**
 * blank-tv-screens.mjs
 *
 * Finds the TV screen mesh primitives in the GLB and replaces their
 * material's baseColorTexture with a solid colour (no texture).
 * The resulting material is clean, emissive-ready, and safe for
 * runtime KTX2 swapping or Three.js texture projection.
 *
 * Works at raw JSON + binary level.
 *
 * Input:  ./models/ramenShop_uvrestored_v2_baked.glb
 * Output: ./models/ramenShop_uvrestored_v2_tv.glb
 *
 * Usage:
 *   node blank-tv-screens.mjs
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/ramenShop_uvrestored_v2_cleaned.glb';
const OUTPUT = './models/ramenShop_uvrestored_v2_cleaned.glb';

// ── CONFIG ────────────────────────────────────────────────────────────────────
// Which node names contain the TV screen primitives.
// The script will find any primitive whose material name matches
// SCREEN_MATERIAL_NAMES on these nodes and blank it.

const TV_SCREEN_NODES = new Set([
  'Mesh_56',  // TV 60    — screen prim (Material 10)
  'Mesh_60',  // TV 60.001 — screen prim (Material 10)
]);

// The material name used by the screen prims
const SCREEN_MATERIAL_NAME = 'Material 10';

// What the blank screen material should look like.
// baseColorFactor: [R, G, B, A] — dark grey, nearly black
// emissiveFactor:  [R, G, B]   — zero emissive (off by default)
// No textures embedded — ready for runtime swapping.

const BLANK_SCREEN_MATERIAL = {
  name:            'screen_blank',
  pbrMetallicRoughness: {
    baseColorFactor: [0.02, 0.02, 0.02, 1.0],  // very dark, no texture
    metallicFactor:  0.0,
    roughnessFactor: 1.0,
    // no baseColorTexture
    // no metallicRoughnessTexture
  },
  emissiveFactor:  [0.0, 0.0, 0.0],             // off — enable at runtime
  doubleSided:     true,
  alphaMode:       'OPAQUE',
  // extras: store a hint for the runtime loader
  extras: {
    screenReady: true,
    hint: 'blank_screen — safe for KTX2 swap or projection',
  },
};

// ── GLB PARSE / WRITE ─────────────────────────────────────────────────────────
function parseGLB(buffer) {
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  if (view.getUint32(0, true) !== 0x46546C67) throw new Error('Not a GLB');
  let offset = 12, json = null, bin = null;
  while (offset < buffer.byteLength) {
    const chunkLen  = view.getUint32(offset, true);
    const chunkType = view.getUint32(offset + 4, true);
    offset += 8;
    if (chunkType === 0x4E4F534A)
      json = JSON.parse(new TextDecoder().decode(buffer.slice(offset, offset + chunkLen)));
    else if (chunkType === 0x004E4942)
      bin = buffer.slice(offset, offset + chunkLen);
    offset += chunkLen;
  }
  return { json, bin };
}

function writeGLB(jsonObj, binBuffer) {
  const jsonRaw   = Buffer.from(JSON.stringify(jsonObj), 'utf8');
  const jsonPad   = (4 - (jsonRaw.length % 4)) % 4;
  const jsonBytes = Buffer.concat([jsonRaw, Buffer.alloc(jsonPad, 0x20)]);

  const binPad      = binBuffer
    ? Buffer.alloc((4 - (binBuffer.byteLength % 4)) % 4, 0x00)
    : Buffer.alloc(0);
  const binChunkLen = binBuffer ? binBuffer.byteLength + binPad.length : 0;
  const totalLen    = 12 + 8 + jsonBytes.length + (binBuffer ? 8 + binChunkLen : 0);

  const out = Buffer.alloc(totalLen);
  let off = 0;
  out.writeUInt32LE(0x46546C67, off); off += 4;
  out.writeUInt32LE(2,          off); off += 4;
  out.writeUInt32LE(totalLen,   off); off += 4;
  out.writeUInt32LE(jsonBytes.length, off); off += 4;
  out.writeUInt32LE(0x4E4F534A,      off); off += 4;
  jsonBytes.copy(out, off); off += jsonBytes.length;
  if (binBuffer && binBuffer.byteLength > 0) {
    out.writeUInt32LE(binChunkLen, off); off += 4;
    out.writeUInt32LE(0x004E4942, off); off += 4;
    binBuffer.copy(out, off);           off += binBuffer.byteLength;
    binPad.copy(out, off);
  }
  return out;
}

// ── PRUNE UNREFERENCED RESOURCES ──────────────────────────────────────────────
// After replacing the material we may leave orphaned textures/images/
// bufferViews behind. This removes them.

function collectTexRefs(obj, set) {
  const stack = [obj];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur || typeof cur !== 'object') continue;
    if ('index' in cur && typeof cur.index === 'number') set.add(cur.index);
    for (const v of Object.values(cur)) if (v && typeof v === 'object') stack.push(v);
  }
}

function remapTexRefs(obj, remap) {
  const stack = [obj];
  while (stack.length) {
    const cur = stack.pop();
    if (!cur || typeof cur !== 'object') continue;
    if ('index' in cur && typeof cur.index === 'number')
      cur.index = remap[cur.index] ?? cur.index;
    for (const v of Object.values(cur)) if (v && typeof v === 'object') stack.push(v);
  }
}

function pruneOrphanedResources(json, bin) {
  const nodes       = json.nodes       || [];
  const meshes      = json.meshes      || [];
  const accessors   = json.accessors   || [];
  const bufferViews = json.bufferViews || [];
  const materials   = json.materials   || [];
  const textures    = json.textures    || [];
  const images      = json.images      || [];
  const samplers    = json.samplers    || [];

  // Collect used meshes from nodes
  const usedMeshIdx = new Set();
  for (const n of nodes) if (n.mesh != null) usedMeshIdx.add(n.mesh);

  // Collect used accessors + materials from meshes
  const usedAccIdx = new Set();
  const usedMatIdx = new Set();
  for (const [oi, mesh] of meshes.entries()) {
    if (!usedMeshIdx.has(oi)) continue;
    for (const prim of mesh.primitives || []) {
      for (const v of Object.values(prim.attributes || {})) usedAccIdx.add(v);
      if (prim.indices  != null) usedAccIdx.add(prim.indices);
      if (prim.material != null) usedMatIdx.add(prim.material);
    }
  }

  // Collect used textures from materials
  const usedTexIdx = new Set();
  for (const [oi, mat] of materials.entries()) {
    if (!usedMatIdx.has(oi)) continue;
    collectTexRefs(mat, usedTexIdx);
  }

  // Collect used images + samplers from textures
  const usedImgIdx = new Set();
  const usedSmpIdx = new Set();
  for (const [oi, tex] of textures.entries()) {
    if (!usedTexIdx.has(oi)) continue;
    if (tex.source  != null) usedImgIdx.add(tex.source);
    if (tex.sampler != null) usedSmpIdx.add(tex.sampler);
  }

  // Collect used bufferViews from accessors and images
  const usedBVIdx = new Set();
  for (const [oi, acc] of accessors.entries()) {
    if (!usedAccIdx.has(oi)) continue;
    if (acc.bufferView != null) usedBVIdx.add(acc.bufferView);
  }
  for (const [oi, img] of images.entries()) {
    if (!usedImgIdx.has(oi)) continue;
    if (img.bufferView != null) usedBVIdx.add(img.bufferView);
  }

  // Build remapped arrays
  const matRemap = {};
  const newMats = [];
  for (const [oi, mat] of materials.entries()) {
    if (!usedMatIdx.has(oi)) continue;
    matRemap[oi] = newMats.length;
    newMats.push(JSON.parse(JSON.stringify(mat)));
  }

  const texRemap = {};
  const newTexs = [];
  for (const [oi, tex] of textures.entries()) {
    if (!usedTexIdx.has(oi)) continue;
    texRemap[oi] = newTexs.length;
    newTexs.push({ ...tex });
  }

  const imgRemap = {};
  const newImgs = [];
  for (const [oi, img] of images.entries()) {
    if (!usedImgIdx.has(oi)) continue;
    imgRemap[oi] = newImgs.length;
    newImgs.push({ ...img });
  }

  const smpRemap = {};
  const newSmps = [];
  for (const [oi, smp] of samplers.entries()) {
    if (!usedSmpIdx.has(oi)) continue;
    smpRemap[oi] = newSmps.length;
    newSmps.push({ ...smp });
  }

  const accRemap = {};
  const newAccs = [];
  for (const [oi, acc] of accessors.entries()) {
    if (!usedAccIdx.has(oi)) continue;
    accRemap[oi] = newAccs.length;
    newAccs.push({ ...acc });
  }

  // Rebuild binary from only referenced bufferViews
  const bvRemap = {};
  const newBVs  = [];
  const binSegs = [];
  for (const [oi, bv] of bufferViews.entries()) {
    if (!usedBVIdx.has(oi)) continue;
    bvRemap[oi] = newBVs.length;
    binSegs.push({ srcOffset: bv.byteOffset || 0, length: bv.byteLength });
    newBVs.push({ ...bv });
  }

  let newBinLen = 0;
  const segNewOffsets = [];
  for (const seg of binSegs) {
    segNewOffsets.push(newBinLen);
    newBinLen = Math.ceil((newBinLen + seg.length) / 4) * 4;
  }

  let newBin = null;
  if (bin && binSegs.length > 0) {
    newBin = Buffer.alloc(newBinLen, 0);
    for (let i = 0; i < binSegs.length; i++) {
      const seg = binSegs[i];
      Buffer.from(bin.buffer, bin.byteOffset + seg.srcOffset, seg.length)
            .copy(newBin, segNewOffsets[i]);
    }
  }

  // Update offsets
  for (let i = 0; i < newBVs.length; i++) {
    newBVs[i].byteOffset = segNewOffsets[i];
    newBVs[i].buffer     = 0;
  }

  // Apply remaps
  for (const acc of newAccs)
    if (acc.bufferView != null) acc.bufferView = bvRemap[acc.bufferView] ?? acc.bufferView;
  for (const img of newImgs)
    if (img.bufferView != null) img.bufferView = bvRemap[img.bufferView] ?? img.bufferView;
  for (const tex of newTexs) {
    if (tex.source  != null) tex.source  = imgRemap[tex.source]  ?? tex.source;
    if (tex.sampler != null) tex.sampler = smpRemap[tex.sampler] ?? tex.sampler;
  }
  for (const mat of newMats) remapTexRefs(mat, texRemap);

  // Remap mesh → accessor + material
  const newMeshes = meshes.map(mesh => ({
    ...mesh,
    primitives: mesh.primitives.map(prim => {
      const p = { ...prim };
      const attrs = {};
      for (const [k, v] of Object.entries(p.attributes || {})) attrs[k] = accRemap[v] ?? v;
      p.attributes = attrs;
      if (p.indices  != null) p.indices  = accRemap[p.indices]  ?? p.indices;
      if (p.material != null) p.material = matRemap[p.material] ?? p.material;
      return p;
    }),
  }));

  // Remap node → mesh (mesh indices unchanged since we kept all meshes)
  const newNodes = nodes.map(n => {
    const out = { ...n };
    if (out.mesh != null) out.mesh = out.mesh; // mesh array unchanged
    return out;
  });

  return {
    json: {
      ...json,
      nodes:       newNodes,
      meshes:      newMeshes,
      materials:   newMats,
      textures:    newTexs.length   ? newTexs  : undefined,
      images:      newImgs.length   ? newImgs  : undefined,
      samplers:    newSmps.length   ? newSmps  : undefined,
      accessors:   newAccs,
      bufferViews: newBVs,
      buffers:     newBin ? [{ byteLength: newBin.byteLength }] : [],
    },
    bin: newBin,
    removed: {
      textures: textures.length   - newTexs.length,
      images:   images.length     - newImgs.length,
      bvs:      bufferViews.length - newBVs.length,
    },
  };
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuf = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuf);

  const nodes     = json.nodes     || [];
  const meshes    = json.meshes    || [];
  const materials = json.materials || [];

  console.log(`    Nodes: ${nodes.length}  Meshes: ${meshes.length}  ` +
    `Materials: ${materials.length}  Size: ${(srcBuf.byteLength/1024/1024).toFixed(2)} MB\n`);

  // ── Step 1: Find which material index is "Material 10" ───────────────────
  const screenMatIdx = materials.findIndex(m => m.name === SCREEN_MATERIAL_NAME);
  if (screenMatIdx === -1) {
    console.error(`❌  Material "${SCREEN_MATERIAL_NAME}" not found in file.`);
    console.log('    Available materials:');
    materials.forEach((m, i) => console.log(`      [${i}] ${m.name}`));
    process.exit(1);
  }
  console.log(`🔍  Found "${SCREEN_MATERIAL_NAME}" at material index ${screenMatIdx}`);

  // ── Step 2: Confirm the target nodes reference this material ─────────────
  for (const [ni, node] of nodes.entries()) {
    if (!TV_SCREEN_NODES.has(node.name)) continue;
    const mesh = node.mesh != null ? meshes[node.mesh] : null;
    if (!mesh) continue;
    mesh.primitives.forEach((prim, pi) => {
      const matName = prim.material != null
        ? materials[prim.material]?.name : '(none)';
      const isScreen = prim.material === screenMatIdx;
      console.log(`    Node "${node.name}" [${ni}]  prim[${pi}]  mat:"${matName}"` +
        (isScreen ? '  ← SCREEN' : ''));
    });
  }

  // ── Step 3: Add the blank screen material ─────────────────────────────────
  const blankMatIdx = materials.length;
  materials.push(JSON.parse(JSON.stringify(BLANK_SCREEN_MATERIAL)));
  console.log(`\n✅  Added blank material "screen_blank" at index ${blankMatIdx}`);

  // ── Step 4: Reroute screen primitives to the blank material ──────────────
  let swapped = 0;
  for (const [ni, node] of nodes.entries()) {
    if (!TV_SCREEN_NODES.has(node.name)) continue;
    const mesh = node.mesh != null ? meshes[node.mesh] : null;
    if (!mesh) continue;

    for (const [pi, prim] of mesh.primitives.entries()) {
      if (prim.material === screenMatIdx) {
        console.log(`🔄  "${node.name}" prim[${pi}]: mat[${screenMatIdx}] "${SCREEN_MATERIAL_NAME}" → mat[${blankMatIdx}] "screen_blank"`);
        prim.material = blankMatIdx;
        swapped++;
      }
    }
  }

  if (swapped === 0) {
    console.warn(`\n⚠️  No primitives were swapped. Check node names and material name.`);
  }

  // ── Step 5: Check if old "Material 10" is still used anywhere else ────────
  const stillUsed = meshes.some(mesh =>
    mesh.primitives.some(prim => prim.material === screenMatIdx)
  );

  if (!stillUsed) {
    console.log(`\n🗑️   "${SCREEN_MATERIAL_NAME}" is no longer used by any primitive.`);
    console.log(`    It will be pruned along with its orphaned textures/images.`);
  } else {
    console.log(`\n⚠️   "${SCREEN_MATERIAL_NAME}" is still used by other primitives — kept.`);
  }

  // ── Step 6: Prune orphaned textures, images, bufferViews ─────────────────
  json.materials = materials;
  json.meshes    = meshes;

  const pruned = pruneOrphanedResources(json, bin);

  // Clean undefined keys
  Object.keys(pruned.json).forEach(k => {
    if (pruned.json[k] === undefined) delete pruned.json[k];
  });

  // ── Step 7: Write output ──────────────────────────────────────────────────
  const outBuf = writeGLB(pruned.json, pruned.bin);
  await fs.mkdir(path.dirname(path.resolve(OUTPUT)), { recursive: true });
  await fs.writeFile(OUTPUT, outBuf);

  console.log(`\n📊  Summary:`);
  console.log(`    Primitives swapped to blank screen: ${swapped}`);
  console.log(`    Textures pruned:    ${pruned.removed.textures}`);
  console.log(`    Images pruned:      ${pruned.removed.images}`);
  console.log(`    BufferViews pruned: ${pruned.removed.bvs}`);
  console.log(`    Size: ${(srcBuf.byteLength/1024/1024).toFixed(2)} MB` +
    ` → ${(outBuf.byteLength/1024/1024).toFixed(2)} MB`);
  console.log(`\n✅  Written: ${OUTPUT}`);
  console.log(`\n    Runtime KTX2 swap — Three.js example:`);
  console.log(`    const mat = scene.getObjectByName('Mesh_56').material;`);
  console.log(`    mat.map = await new KTX2Loader().loadAsync('./screen.ktx2');`);
  console.log(`    mat.needsUpdate = true;\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
