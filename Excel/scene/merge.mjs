/**
 * merge.mjs — merges split GLBs into one scene-final.gltf
 *
 * Each GLB is fully flattened before merging so that parts originally
 * split from the same parent (fan_left, fan_right, speakers) become
 * independent top-level groups, not children of pc_case.
 *
 * Usage:
 *   node merge.mjs
 */

import { promises as fs } from 'fs';
import path from 'path';

const PARTSDIR = './models/parts';
const OUTPUT   = './models/scene-final.gltf';

const PARTS = [
  { file: 'table.glb',      name: 'table'      },
  { file: 'pc_housing.glb',    name: 'pc_case' },
  { file: 'keyboard.glb',   name: 'keyboard'   },
  { file: 'monitor.glb',    name: 'monitor'    },
  { file: 'floor_wall.glb', name: 'floor_wall' },
  { file: 'mousepad.glb',   name: 'mousepad'   },
  { file: 'fan_left.glb',   name: 'fan_left'   },
  { file: 'fan_right.glb',  name: 'fan_right'  },
];

// ── GLB PARSER ───────────────────────────────────────────────────────────────
function parseGLB(buffer) {
  const view = new DataView(buffer.buffer, buffer.byteOffset, buffer.byteLength);
  if (view.getUint32(0, true) !== 0x46546C67) throw new Error('Not a GLB');
  let offset = 12;
  let json = null, bin = null;
  while (offset < buffer.byteLength) {
    const chunkLength = view.getUint32(offset, true);
    const chunkType   = view.getUint32(offset + 4, true);
    offset += 8;
    if (chunkType === 0x4E4F534A)
      json = JSON.parse(new TextDecoder().decode(buffer.slice(offset, offset + chunkLength)));
    else if (chunkType === 0x004E4942)
      bin = buffer.slice(offset, offset + chunkLength);
    offset += chunkLength;
  }
  return { json, bin };
}

// ── FLATTEN + PRUNE ──────────────────────────────────────────────────────────
// Resolves each mesh node's world transform by multiplying down the hierarchy,
// then returns a new json where every mesh node sits at root level with a
// baked world matrix — no intermediate parent nodes, no shared ancestry.
function flattenAndPrune(json, bin) {

  const nodes    = json.nodes    || [];
  const meshes   = json.meshes   || [];
  const accessors   = json.accessors   || [];
  const bufferViews = json.bufferViews || [];
  const materials   = json.materials   || [];
  const textures    = json.textures    || [];
  const images      = json.images      || [];
  const samplers    = json.samplers    || [];

  // ── Build parent map and world matrices ──────────────────────────────────
  const parentOf = new Array(nodes.length).fill(-1);
  for (let i = 0; i < nodes.length; i++) {
    for (const child of (nodes[i].children || [])) {
      parentOf[child] = i;
    }
  }

  function nodeMatrix(n) {
    // Returns a 4x4 column-major array
    if (n.matrix) return [...n.matrix];
    const T = n.translation || [0,0,0];
    const R = n.rotation    || [0,0,0,1];
    const S = n.scale       || [1,1,1];
    return TRStoMatrix(T, R, S);
  }

  function worldMatrix(idx) {
    const chain = [];
    let cur = idx;
    while (cur !== -1) { chain.unshift(cur); cur = parentOf[cur]; }
    let m = identity();
    for (const i of chain) m = multiplyM4(m, nodeMatrix(nodes[i]));
    return m;
  }

  // ── Collect only mesh-bearing nodes ──────────────────────────────────────
  const usedMeshIdx  = new Set();
  const usedAccIdx   = new Set();
  const usedMatIdx   = new Set();
  const usedTexIdx   = new Set();
  const usedImgIdx   = new Set();
  const usedSmpIdx   = new Set();
  const usedBVIdx    = new Set();

  const flatNodes = []; // {name, matrix, mesh}

  for (let i = 0; i < nodes.length; i++) {
    const n = nodes[i];
    if (n.mesh == null) continue;
    flatNodes.push({
      name:   n.name || `node_${i}`,
      matrix: worldMatrix(i),
      mesh:   n.mesh,
    });
    usedMeshIdx.add(n.mesh);
  }

  // ── Remap meshes ──────────────────────────────────────────────────────────
  const meshRemap = {};
  const prunedMeshes = [];
  for (const [oldIdx, mesh] of meshes.entries()) {
    if (!usedMeshIdx.has(oldIdx)) continue;
    meshRemap[oldIdx] = prunedMeshes.length;
    for (const prim of mesh.primitives) {
      for (const v of Object.values(prim.attributes || {})) usedAccIdx.add(v);
      if (prim.indices  != null) usedAccIdx.add(prim.indices);
      if (prim.material != null) usedMatIdx.add(prim.material);
    }
    prunedMeshes.push(JSON.parse(JSON.stringify(mesh)));
  }

  // ── Remap materials ───────────────────────────────────────────────────────
  const matRemap = {};
  const prunedMats = [];
  for (const [oldIdx, mat] of materials.entries()) {
    if (!usedMatIdx.has(oldIdx)) continue;
    matRemap[oldIdx] = prunedMats.length;
    collectTexRefs(mat, usedTexIdx);
    prunedMats.push(JSON.parse(JSON.stringify(mat)));
  }

  // ── Remap textures ────────────────────────────────────────────────────────
  const texRemap = {};
  const prunedTexs = [];
  for (const [oldIdx, tex] of textures.entries()) {
    if (!usedTexIdx.has(oldIdx)) continue;
    texRemap[oldIdx] = prunedTexs.length;
    if (tex.source  != null) usedImgIdx.add(tex.source);
    if (tex.sampler != null) usedSmpIdx.add(tex.sampler);
    prunedTexs.push({ ...tex });
  }

  // ── Remap images ──────────────────────────────────────────────────────────
  const imgRemap = {};
  const prunedImgs = [];
  for (const [oldIdx, img] of images.entries()) {
    if (!usedImgIdx.has(oldIdx)) continue;
    imgRemap[oldIdx] = prunedImgs.length;
    if (img.bufferView != null) usedBVIdx.add(img.bufferView);
    prunedImgs.push({ ...img });
  }

  // ── Remap samplers ────────────────────────────────────────────────────────
  const smpRemap = {};
  const prunedSmps = [];
  for (const [oldIdx, smp] of samplers.entries()) {
    if (!usedSmpIdx.has(oldIdx)) continue;
    smpRemap[oldIdx] = prunedSmps.length;
    prunedSmps.push({ ...smp });
  }

  // ── Remap accessors ───────────────────────────────────────────────────────
  const accRemap = {};
  const prunedAccs = [];
  for (const [oldIdx, acc] of accessors.entries()) {
    if (!usedAccIdx.has(oldIdx)) continue;
    accRemap[oldIdx] = prunedAccs.length;
    if (acc.bufferView != null) usedBVIdx.add(acc.bufferView);
    prunedAccs.push({ ...acc });
  }

  // ── Remap bufferViews + rebuild binary ────────────────────────────────────
  const bvRemap = {};
  const prunedBVs = [];
  const binSegs   = [];

  for (const [oldIdx, bv] of bufferViews.entries()) {
    if (!usedBVIdx.has(oldIdx)) continue;
    bvRemap[oldIdx] = prunedBVs.length;
    binSegs.push({ srcOffset: bv.byteOffset || 0, length: bv.byteLength });
    prunedBVs.push({ ...bv });
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

  // Update bufferView offsets
  for (let i = 0; i < prunedBVs.length; i++) {
    prunedBVs[i].byteOffset = segNewOffsets[i];
    prunedBVs[i].buffer = 0;
  }

  // ── Apply all remaps ──────────────────────────────────────────────────────

  // Accessors → bufferViews
  for (const acc of prunedAccs) {
    if (acc.bufferView != null) acc.bufferView = bvRemap[acc.bufferView] ?? acc.bufferView;
  }

  // Images → bufferViews
  for (const img of prunedImgs) {
    if (img.bufferView != null) img.bufferView = bvRemap[img.bufferView] ?? img.bufferView;
  }

  // Textures → images + samplers
  for (const tex of prunedTexs) {
    if (tex.source  != null) tex.source  = imgRemap[tex.source]  ?? tex.source;
    if (tex.sampler != null) tex.sampler = smpRemap[tex.sampler] ?? tex.sampler;
  }

  // Materials → textures (iterative)
  for (const mat of prunedMats) remapTexRefs(mat, texRemap);

  // Meshes → accessors + materials
  for (const mesh of prunedMeshes) {
    for (const prim of mesh.primitives) {
      const attrs = {};
      for (const [k, v] of Object.entries(prim.attributes || {}))
        attrs[k] = accRemap[v] ?? v;
      prim.attributes = attrs;
      if (prim.indices  != null) prim.indices  = accRemap[prim.indices]  ?? prim.indices;
      if (prim.material != null) prim.material = matRemap[prim.material] ?? prim.material;
    }
  }

  // Flat nodes → remapped mesh index
  const outNodes = flatNodes.map(fn => {
    const n = { name: fn.name, mesh: meshRemap[fn.mesh] };
    // Only write matrix if not identity (saves space)
    if (!isIdentity(fn.matrix)) n.matrix = fn.matrix;
    return n;
  });

  const outJson = {
    asset: { version: '2.0' },
    scene: 0,
    scenes:      [{ nodes: outNodes.map((_, i) => i) }],
    nodes:       outNodes,
    meshes:      prunedMeshes,
    materials:   prunedMats,
    textures:    prunedTexs,
    images:      prunedImgs,
    samplers:    prunedSmps,
    accessors:   prunedAccs,
    bufferViews: prunedBVs,
    buffers:     newBin ? [{ byteLength: newBin.byteLength }] : [],
  };

  return {
    json: outJson,
    bin:  newBin,
    meshCount: prunedMeshes.length,
  };
}

// ── COLLECT / REMAP texture index refs (iterative) ───────────────────────────
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

// ── MATRIX MATH ──────────────────────────────────────────────────────────────
function identity() {
  return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
}
function isIdentity(m) {
  const id = identity();
  return m.every((v, i) => Math.abs(v - id[i]) < 1e-6);
}
function multiplyM4(a, b) {
  const out = new Array(16).fill(0);
  for (let row = 0; row < 4; row++) {
    for (let col = 0; col < 4; col++) {
      for (let k = 0; k < 4; k++) {
        out[col * 4 + row] += a[k * 4 + row] * b[col * 4 + k];
      }
    }
  }
  return out;
}
function TRStoMatrix(T, R, S) {
  // Quaternion to rotation matrix, then apply scale + translation
  const [qx, qy, qz, qw] = R;
  const [sx, sy, sz]      = S;
  const [tx, ty, tz]      = T;
  return [
    (1 - 2*(qy*qy + qz*qz)) * sx,
    (2*(qx*qy + qz*qw))     * sx,
    (2*(qx*qz - qy*qw))     * sx,
    0,
    (2*(qx*qy - qz*qw))     * sy,
    (1 - 2*(qx*qx + qz*qz)) * sy,
    (2*(qy*qz + qx*qw))     * sy,
    0,
    (2*(qx*qz + qy*qw))     * sz,
    (2*(qy*qz - qx*qw))     * sz,
    (1 - 2*(qx*qx + qy*qy)) * sz,
    0,
    tx, ty, tz, 1,
  ];
}

// ── MAIN ─────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📦  Merging ${PARTS.length} parts into ${OUTPUT} …\n`);

  const merged = {
    asset: { version: '2.0', generator: 'merge.mjs' },
    scene: 0,
    scenes:      [{ name: 'Scene', nodes: [] }],
    nodes:       [],
    meshes:      [],
    materials:   [],
    textures:    [],
    images:      [],
    samplers:    [],
    accessors:   [],
    bufferViews: [],
    buffers:     [],
  };

  const binaryChunks  = [];
  let   totalByteLength = 0;

  for (const part of PARTS) {
    const filePath = path.join(PARTSDIR, part.file);
    try { await fs.access(filePath); }
    catch { console.log(`⚠️   Skipping ${part.file} — not found`); continue; }

    console.log(`⏳  Reading ${part.file} …`);
    const glbBuffer = await fs.readFile(filePath);
    const { json: rawJson, bin: rawBin } = parseGLB(glbBuffer);
    if (!rawJson) { console.log(`⚠️   No JSON in ${part.file}`); continue; }

    // Flatten: bake world transforms, strip all parent hierarchy,
    // prune to only used resources
    const { json, bin, meshCount } = flattenAndPrune(rawJson, rawBin);

    // Current merge offsets
    const nodOff = merged.nodes.length;
    const mshOff = merged.meshes.length;
    const matOff = merged.materials.length;
    const texOff = merged.textures.length;
    const imgOff = merged.images.length;
    const smpOff = merged.samplers.length;
    const accOff = merged.accessors.length;
    const bvOff  = merged.bufferViews.length;
    const binOff = totalByteLength;

    // Patch flat nodes
    const patchedNodes = (json.nodes || []).map(n => {
      const out = { ...n, mesh: n.mesh + mshOff };
      // children: flat nodes have none, but keep defensively
      if (n.children) out.children = n.children.map(i => i + nodOff);
      return out;
    });

    // Patch meshes → accessors + materials
    const patchedMeshes = (json.meshes || []).map(mesh => ({
      ...mesh,
      primitives: mesh.primitives.map(prim => {
        const p = { ...prim };
        const attrs = {};
        for (const [k, v] of Object.entries(p.attributes || {})) attrs[k] = v + accOff;
        p.attributes = attrs;
        if (p.indices  != null) p.indices  = p.indices  + accOff;
        if (p.material != null) p.material = p.material + matOff;
        return p;
      })
    }));

    // Patch materials → textures
    const patchedMats = (json.materials || []).map(mat => {
      const m = JSON.parse(JSON.stringify(mat));
      remapTexRefs(m, Object.fromEntries(
        (json.textures || []).map((_, i) => [i, i + texOff])
      ));
      return m;
    });

    // Patch textures → images + samplers
    const patchedTexs = (json.textures || []).map(tex => {
      const t = { ...tex };
      if (t.source  != null) t.source  = t.source  + imgOff;
      if (t.sampler != null) t.sampler = t.sampler + smpOff;
      return t;
    });

    // Patch images → bufferViews
    const patchedImgs = (json.images || []).map(img => {
      const i = { ...img };
      if (i.bufferView != null) i.bufferView = i.bufferView + bvOff;
      return i;
    });

    // Patch accessors → bufferViews
    const patchedAccs = (json.accessors || []).map(acc => {
      const a = { ...acc };
      if (a.bufferView != null) a.bufferView = a.bufferView + bvOff;
      return a;
    });

    // Patch bufferViews → single merged buffer, shift byteOffset
    const patchedBVs = (json.bufferViews || []).map(bv => ({
      ...bv,
      buffer:     0,
      byteOffset: (bv.byteOffset || 0) + binOff,
    }));

    const patchedSmps = (json.samplers || []).map(s => ({ ...s }));

    // Wrapper group node — children are all the flat mesh nodes for this part
    const childIndices = patchedNodes.map((_, i) => nodOff + i);
    const wrapperNode  = { name: part.name, children: childIndices };

    // Push everything
    merged.nodes.push(...patchedNodes);
    const wrapperIdx = merged.nodes.length;
    merged.nodes.push(wrapperNode);
    merged.scenes[0].nodes.push(wrapperIdx);

    merged.meshes.push(...patchedMeshes);
    merged.materials.push(...patchedMats);
    merged.textures.push(...patchedTexs);
    merged.images.push(...patchedImgs);
    merged.samplers.push(...patchedSmps);
    merged.accessors.push(...patchedAccs);
    merged.bufferViews.push(...patchedBVs);

    // Binary
    if (bin && bin.byteLength > 0) {
      binaryChunks.push(bin);
      totalByteLength += bin.byteLength;
      const pad = (4 - (bin.byteLength % 4)) % 4;
      if (pad > 0) {
        binaryChunks.push(Buffer.alloc(pad, 0));
        totalByteLength += pad;
      }
    }

    console.log(`✅  ${part.name}  (${meshCount} meshes)`);
  }

  // Clean empty arrays
  if (!merged.samplers.length)  delete merged.samplers;
  if (!merged.textures.length)  delete merged.textures;
  if (!merged.images.length)    delete merged.images;
  if (!merged.materials.length) delete merged.materials;

  // Single merged binary
  const mergedBin   = Buffer.concat(binaryChunks);
  const binFilename = 'scene-final.bin';
  merged.buffers    = [{ uri: binFilename, byteLength: mergedBin.byteLength }];

  const outDir = path.dirname(path.resolve(OUTPUT));
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(OUTPUT, JSON.stringify(merged, null, 2));
  await fs.writeFile(path.join(outDir, binFilename), mergedBin);

  const sizeMB = (mergedBin.byteLength / 1024 / 1024).toFixed(2);
  console.log(`\n💾  Written:`);
  console.log(`    ${OUTPUT}  +  ${binFilename}  (${sizeMB} MB)`);
  console.log(`\n⚠️   Ensure ./models/textures/ sits beside scene-final.gltf`);
  console.log(`    Then run: node optimize.mjs\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
