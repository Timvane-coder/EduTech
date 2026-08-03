/**
 * remove-nodes.mjs
 *
 * Surgically removes specified nodes (and their entire subtrees) from
 * ramenShop_uvrestored_v2.glb, then prunes all orphaned resources
 * (meshes, accessors, bufferViews, materials, textures, images, samplers)
 * and rebuilds a clean binary.
 *
 * Works at raw JSON + binary level — no gltf-transform dependency.
 *
 * Usage:
 *   node remove-nodes.mjs
 *
 * Input:  ./models/ramenShop_uvrestored_v2.glb
 * Output: ./models/ramenShop_uvrestored_v2_cleaned.glb
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/ramenShop_uvrestored_v2.glb';
const OUTPUT = './models/ramenShop_uvrestored_v2_cleaned.glb';

// ── NODES TO REMOVE ───────────────────────────────────────────────────────────
// The script will find each name anywhere in the node tree,
// collect its full subtree (all descendants), and remove all of them.
// Mesh-only nodes AND group nodes (like Bar) are both handled correctly.

const REMOVE_NAMES = new Set([
  // Ramen chunks
  'chunk_1', 'chunk_2', 'chunk_3', 'chunk_5', 'chunk_7', 'chunk_8',
  'chunk_9', 'chunk_13', 'chunk_14', 'chunk_15', 'chunk_16', 'chunk_17',
  'chunk_18', 'chunk_19', 'chunk_20', 'chunk_21', 'chunk_23', 'chunk_24',
  'chunk_25', 'chunk_26', 'chunk_27', 'Cube', 'Cube.001',

  // Exhibit stand — group node (removes Bar + all 9 i1/i2 children)
  'Bar',

  // Exhibit stand — table and seating
  'stul',
  'Stolek bar',
  'Stolek bar.001',
  'Stolek bar.002',
  'Stolek bar.003',
  'Stolek bar.004',

  // Exhibit stand — plant/decoration
  'Line168',
]);

// ── GLB PARSE ─────────────────────────────────────────────────────────────────
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

// ── GLB WRITE ─────────────────────────────────────────────────────────────────

function writeGLB(jsonObj, binBuffer) {
  // Encode JSON to bytes FIRST, then pad based on byte length
  const jsonRaw   = Buffer.from(JSON.stringify(jsonObj), 'utf8');
  const jsonPad   = (4 - (jsonRaw.length % 4)) % 4;
  const jsonBytes = Buffer.concat([jsonRaw, Buffer.alloc(jsonPad, 0x20)]); // pad with spaces (0x20)

  // BIN chunk: pad with zeros to 4-byte boundary
  const binPad      = binBuffer ? Buffer.alloc((4 - (binBuffer.byteLength % 4)) % 4, 0x00) : Buffer.alloc(0);
  const binChunkLen = binBuffer ? binBuffer.byteLength + binPad.length : 0;

  const totalLen = 12                          // GLB header
                 + 8 + jsonBytes.length        // JSON chunk header + data
                 + (binBuffer ? 8 + binChunkLen : 0); // BIN chunk header + data

  const out = Buffer.alloc(totalLen);
  let off = 0;

  // GLB header
  out.writeUInt32LE(0x46546C67, off); off += 4; // magic "glTF"
  out.writeUInt32LE(2,          off); off += 4; // version
  out.writeUInt32LE(totalLen,   off); off += 4; // total byte length

  // JSON chunk
  out.writeUInt32LE(jsonBytes.length, off); off += 4; // chunk length
  out.writeUInt32LE(0x4E4F534A,      off); off += 4; // chunk type "JSON"
  jsonBytes.copy(out, off);                    off += jsonBytes.length;

  // BIN chunk (only if there is binary data)
  if (binBuffer && binBuffer.byteLength > 0) {
    out.writeUInt32LE(binChunkLen, off); off += 4; // chunk length
    out.writeUInt32LE(0x004E4942, off); off += 4;  // chunk type "BIN\0"
    binBuffer.copy(out, off);           off += binBuffer.byteLength;
    binPad.copy(out, off);
  }

  return out;
}

// ── COLLECT SUBTREE ───────────────────────────────────────────────────────────
// Given a node index, return the set of all indices in its subtree
// (the node itself + all descendants recursively).
function collectSubtree(nodeIdx, nodes) {
  const result = new Set();
  const queue  = [nodeIdx];
  while (queue.length) {
    const idx = queue.shift();
    result.add(idx);
    for (const child of (nodes[idx]?.children || [])) queue.push(child);
  }
  return result;
}

// ── COLLECT TEXTURE REFS (iterative) ─────────────────────────────────────────
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

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuf = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuf);

  const nodes       = json.nodes       || [];
  const meshes      = json.meshes      || [];
  const accessors   = json.accessors   || [];
  const bufferViews = json.bufferViews || [];
  const materials   = json.materials   || [];
  const textures    = json.textures    || [];
  const images      = json.images      || [];
  const samplers    = json.samplers    || [];

  console.log(`    Total nodes: ${nodes.length}  Meshes: ${meshes.length}  ` +
    `BV: ${bufferViews.length}  Bin: ${(srcBuf.byteLength/1024/1024).toFixed(1)} MB\n`);

  // ── Step 1: Find all node indices to remove ──────────────────────────────
  // Search by name across the entire node tree
  const toRemove = new Set();
  const foundNames = new Set();

  for (let i = 0; i < nodes.length; i++) {
    const name = nodes[i].name;
    if (REMOVE_NAMES.has(name) && !foundNames.has(name)) {
      foundNames.add(name);
      const subtree = collectSubtree(i, nodes);
      for (const idx of subtree) toRemove.add(idx);
      const childCount = subtree.size - 1;
      console.log(`🗑️   ${name.padEnd(24)}  node[${i}]  subtree: ${subtree.size} nodes` +
        (childCount > 0 ? ` (${childCount} descendants)` : ''));
    }
  }

  // Report any names not found
  for (const name of REMOVE_NAMES) {
    if (!foundNames.has(name)) {
      console.log(`⚠️   NOT FOUND: ${name}`);
    }
  }

  console.log(`\n    Removing ${toRemove.size} nodes total (including subtrees)\n`);

  // ── Step 2: Build new node index remap ───────────────────────────────────
  // Surviving nodes get new consecutive indices
  const nodeRemap = {}; // oldIdx → newIdx
  const keptNodes = [];
  for (let i = 0; i < nodes.length; i++) {
    if (toRemove.has(i)) continue;
    nodeRemap[i] = keptNodes.length;
    keptNodes.push({ ...nodes[i] });
  }

  // ── Step 3: Update children arrays and scene root lists ──────────────────
  // Remove references to deleted nodes, remap surviving ones
  for (const n of keptNodes) {
    if (n.children) {
      n.children = n.children
        .filter(ci => !toRemove.has(ci))
        .map(ci => nodeRemap[ci] ?? ci);
      if (n.children.length === 0) delete n.children;
    }
  }

  const newScenes = (json.scenes || []).map(scene => ({
    ...scene,
    nodes: (scene.nodes || [])
      .filter(ni => !toRemove.has(ni))
      .map(ni => nodeRemap[ni] ?? ni),
  }));

  // ── Step 4: Collect which meshes are still referenced ────────────────────
  const usedMeshIdx = new Set();
  for (const n of keptNodes) {
    if (n.mesh != null) usedMeshIdx.add(n.mesh);
  }

  // ── Step 5: Collect resources reachable from surviving meshes ────────────
  const usedAccIdx  = new Set();
  const usedMatIdx  = new Set();
  const usedTexIdx  = new Set();
  const usedImgIdx  = new Set();
  const usedSmpIdx  = new Set();
  const usedBVIdx   = new Set();

  for (const [oi, mesh] of meshes.entries()) {
    if (!usedMeshIdx.has(oi)) continue;
    for (const prim of mesh.primitives || []) {
      for (const v of Object.values(prim.attributes || {})) usedAccIdx.add(v);
      if (prim.indices  != null) usedAccIdx.add(prim.indices);
      if (prim.material != null) usedMatIdx.add(prim.material);
    }
  }

  for (const [oi, mat] of materials.entries()) {
    if (!usedMatIdx.has(oi)) continue;
    collectTexRefs(mat, usedTexIdx);
  }

  for (const [oi, tex] of textures.entries()) {
    if (!usedTexIdx.has(oi)) continue;
    if (tex.source  != null) usedImgIdx.add(tex.source);
    if (tex.sampler != null) usedSmpIdx.add(tex.sampler);
  }

  for (const [oi, acc] of accessors.entries()) {
    if (!usedAccIdx.has(oi)) continue;
    if (acc.bufferView != null) usedBVIdx.add(acc.bufferView);
  }

  for (const [oi, img] of images.entries()) {
    if (!usedImgIdx.has(oi)) continue;
    if (img.bufferView != null) usedBVIdx.add(img.bufferView);
  }

  // ── Step 6: Build remapped arrays ────────────────────────────────────────
  const meshRemap = {};
  const newMeshes = [];
  for (const [oi, mesh] of meshes.entries()) {
    if (!usedMeshIdx.has(oi)) continue;
    meshRemap[oi] = newMeshes.length;
    newMeshes.push(JSON.parse(JSON.stringify(mesh)));
  }

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

  // ── Step 7: Rebuild binary — only used bufferView segments ───────────────
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

  // Update bufferView offsets to new positions
  for (let i = 0; i < newBVs.length; i++) {
    newBVs[i].byteOffset = segNewOffsets[i];
    newBVs[i].buffer     = 0;
  }

  // ── Step 8: Apply all remaps to surviving structures ─────────────────────

  // Nodes: remap mesh index
  for (const n of keptNodes) {
    if (n.mesh != null) n.mesh = meshRemap[n.mesh] ?? n.mesh;
  }

  // Accessors → bufferViews
  for (const acc of newAccs)
    if (acc.bufferView != null) acc.bufferView = bvRemap[acc.bufferView] ?? acc.bufferView;

  // Images → bufferViews
  for (const img of newImgs)
    if (img.bufferView != null) img.bufferView = bvRemap[img.bufferView] ?? img.bufferView;

  // Textures → images + samplers
  for (const tex of newTexs) {
    if (tex.source  != null) tex.source  = imgRemap[tex.source]  ?? tex.source;
    if (tex.sampler != null) tex.sampler = smpRemap[tex.sampler] ?? tex.sampler;
  }

  // Materials → textures
  for (const mat of newMats) remapTexRefs(mat, texRemap);

  // Meshes → accessors + materials
  for (const mesh of newMeshes) {
    for (const prim of mesh.primitives) {
      const attrs = {};
      for (const [k, v] of Object.entries(prim.attributes || {}))
        attrs[k] = accRemap[v] ?? v;
      prim.attributes = attrs;
      if (prim.indices  != null) prim.indices  = accRemap[prim.indices]  ?? prim.indices;
      if (prim.material != null) prim.material = matRemap[prim.material] ?? prim.material;
    }
  }

  // ── Step 9: Assemble output JSON ─────────────────────────────────────────
  const outJson = {
    asset:  json.asset,
    scene:  json.scene ?? 0,
    scenes: newScenes,
    nodes:  keptNodes,
    meshes: newMeshes,
  };

  if (newMats.length)  outJson.materials   = newMats;
  if (newTexs.length)  outJson.textures    = newTexs;
  if (newImgs.length)  outJson.images      = newImgs;
  if (newSmps.length)  outJson.samplers    = newSmps;
  if (newAccs.length)  outJson.accessors   = newAccs;
  if (newBVs.length)   outJson.bufferViews = newBVs;
  if (newBin)          outJson.buffers     = [{ byteLength: newBin.byteLength }];
  if (json.extensionsUsed)      outJson.extensionsUsed      = json.extensionsUsed;
  if (json.extensionsRequired)  outJson.extensionsRequired  = json.extensionsRequired;

  // ── Step 10: Write output ────────────────────────────────────────────────
  const outBuf = writeGLB(outJson, newBin);
  await fs.mkdir(path.dirname(path.resolve(OUTPUT)), { recursive: true });
  await fs.writeFile(OUTPUT, outBuf);

  // ── Summary ──────────────────────────────────────────────────────────────
  const removedNodes    = nodes.length       - keptNodes.length;
  const removedMeshes   = meshes.length      - newMeshes.length;
  const removedMats     = materials.length   - newMats.length;
  const removedTexs     = textures.length    - newTexs.length;
  const removedImgs     = images.length      - newImgs.length;
  const removedAccs     = accessors.length   - newAccs.length;
  const removedBVs      = bufferViews.length - newBVs.length;
  const sizeBefore      = srcBuf.byteLength;
  const sizeAfter       = outBuf.byteLength;

  console.log('📊  Results:');
  console.log(`    Nodes:       ${nodes.length} → ${keptNodes.length}  (-${removedNodes})`);
  console.log(`    Meshes:      ${meshes.length} → ${newMeshes.length}  (-${removedMeshes})`);
  console.log(`    Materials:   ${materials.length} → ${newMats.length}  (-${removedMats})`);
  console.log(`    Textures:    ${textures.length} → ${newTexs.length}  (-${removedTexs})`);
  console.log(`    Images:      ${images.length} → ${newImgs.length}  (-${removedImgs})`);
  console.log(`    Accessors:   ${accessors.length} → ${newAccs.length}  (-${removedAccs})`);
  console.log(`    BufferViews: ${bufferViews.length} → ${newBVs.length}  (-${removedBVs})`);
  console.log(`    Size:        ${(sizeBefore/1024/1024).toFixed(1)} MB → ${(sizeAfter/1024/1024).toFixed(1)} MB`);
  console.log(`\n✅  Written: ${OUTPUT}\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
