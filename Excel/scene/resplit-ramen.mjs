/**
 * resplit-ramen.mjs
 *
 * Re-splits ramenShop_split_chunked.glb correctly.
 * 
 * The previous split kept all 226 meshes in every output because
 * the other nodes were never removed from the scene graph before
 * prune() ran — so prune() correctly saw them as "referenced" and
 * kept everything.
 *
 * This version works at the raw JSON + binary level (same approach
 * as merge.mjs) so there is no ambiguity about what gets removed:
 *
 *   1. Parse the GLB manually (JSON + BIN chunks)
 *   2. Find the target node by name anywhere in the hierarchy
 *   3. Compute its world matrix (bake parent transforms)
 *   4. Collect ONLY the mesh indices reachable from that node
 *      (the node itself + all its descendants)
 *   5. Walk those meshes → accessors → bufferViews → binary segments
 *   6. Rebuild a minimal GLB containing only that data
 *
 * Usage:
 *   node resplit-ramen.mjs
 *
 * Input:  ./models/ramenShop_split_chunked.glb
 * Output: ./models/ramen-parts/<name>.glb  (overwrites previous)
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT    = './models/ramenShop_split_chunked.glb';
const OUT_DIR  = './models/ramen-parts';

const PART_NAMES = [
  'chunk_1','chunk_2','chunk_3','chunk_4','chunk_5','chunk_6',
  'chunk_7','chunk_8','chunk_9','chunk_10','chunk_11','chunk_12',
  'chunk_13','chunk_14','chunk_15','chunk_16','chunk_17','chunk_18',
  'chunk_19',
  'chunk_20','chunk_21','chunk_22','chunk_23','chunk_24','chunk_25',
  'chunk_26','chunk_27','chunk_28','chunk_29','chunk_30',
  'aboutMeBlack','aboutMeBlue','arcadeRim','arcadeScreen','arcadeToken',
  'articlesRed','articlesWhite','bigScreen','blueLights','chinese',
  'creditsBlack','creditsOrange','dish','dishStand','easelFrontGraphic',
  'fan1','fan2','floor','graphicsJoined','greenLED','greenSignSquare',
  'jesseZhouJoined','jZhouBlack','jZhouPink','lampLights',
  'littleTVScreen','miscJoined','neonBlue','neonGreen','neonPink',
  'neonYellow','poleLight','portalLight','projectsRed','projectsWhite',
  'redLED','roof','sideScreen','smallScreen1','smallScreen2',
  'smallScreen3','smallScreen4','smallScreen5','storageLight',
  'tallScreen','tvScreen','vendingMachineLight','vendingMachineScreen',
  'whiteButton','yellowRightLight',
];

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
  const jsonStr    = JSON.stringify(jsonObj);
  const jsonPadded = jsonStr + ' '.repeat((4 - (jsonStr.length % 4)) % 4);
  const jsonBytes  = Buffer.from(jsonPadded, 'utf8');

  const binPad = binBuffer
    ? Buffer.alloc((4 - (binBuffer.byteLength % 4)) % 4, 0)
    : Buffer.alloc(0);

  const jsonChunkLen = jsonBytes.length;
  const binChunkLen  = binBuffer ? binBuffer.byteLength + binPad.length : 0;

  const totalLen = 12 + 8 + jsonChunkLen + (binBuffer ? 8 + binChunkLen : 0);
  const out      = Buffer.alloc(totalLen);
  let   off      = 0;

  // GLB header
  out.writeUInt32LE(0x46546C67, off); off += 4; // magic
  out.writeUInt32LE(2,          off); off += 4; // version
  out.writeUInt32LE(totalLen,   off); off += 4; // total length

  // JSON chunk
  out.writeUInt32LE(jsonChunkLen, off); off += 4;
  out.writeUInt32LE(0x4E4F534A,  off); off += 4;
  jsonBytes.copy(out, off); off += jsonChunkLen;

  // BIN chunk
  if (binBuffer) {
    out.writeUInt32LE(binChunkLen,  off); off += 4;
    out.writeUInt32LE(0x004E4942,  off); off += 4;
    binBuffer.copy(out, off);            off += binBuffer.byteLength;
    binPad.copy(out, off);
  }

  return out;
}

// ── MATRIX MATH ───────────────────────────────────────────────────────────────
function identity() { return [1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1]; }

function multiplyM4(a, b) {
  const o = new Array(16).fill(0);
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++)
      for (let k = 0; k < 4; k++)
        o[c*4+r] += a[k*4+r] * b[c*4+k];
  return o;
}

function TRStoMatrix(T, R, S) {
  const [qx,qy,qz,qw] = R ?? [0,0,0,1];
  const [sx,sy,sz]     = S ?? [1,1,1];
  const [tx,ty,tz]     = T ?? [0,0,0];
  return [
    (1-2*(qy*qy+qz*qz))*sx, (2*(qx*qy+qz*qw))*sx, (2*(qx*qz-qy*qw))*sx, 0,
    (2*(qx*qy-qz*qw))*sy, (1-2*(qx*qx+qz*qz))*sy, (2*(qy*qz+qx*qw))*sy, 0,
    (2*(qx*qz+qy*qw))*sz, (2*(qy*qz-qx*qw))*sz, (1-2*(qx*qx+qy*qy))*sz, 0,
    tx, ty, tz, 1,
  ];
}

function nodeLocalMatrix(n) {
  if (n.matrix) return [...n.matrix];
  return TRStoMatrix(n.translation, n.rotation, n.scale);
}

function isIdentity(m) {
  const id = identity();
  return m.every((v, i) => Math.abs(v - id[i]) < 1e-6);
}

// ── COLLECT / REMAP texture refs (iterative) ──────────────────────────────────
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

// ── EXTRACT ONE PART ──────────────────────────────────────────────────────────
function extractPart(json, bin, targetName) {
  const nodes       = json.nodes       || [];
  const meshes      = json.meshes      || [];
  const accessors   = json.accessors   || [];
  const bufferViews = json.bufferViews || [];
  const materials   = json.materials   || [];
  const textures    = json.textures    || [];
  const images      = json.images      || [];
  const samplers    = json.samplers    || [];

  // Build parent map
  const parentOf = new Array(nodes.length).fill(-1);
  for (let i = 0; i < nodes.length; i++)
    for (const c of (nodes[i].children || [])) parentOf[c] = i;

  // Find target node index by name (search entire tree)
  const targetIdx = nodes.findIndex(n => n.name === targetName);
  if (targetIdx === -1) return null;

  // Collect all descendant node indices (target + all children recursively)
  const subtreeIndices = new Set();
  const queue = [targetIdx];
  while (queue.length) {
    const idx = queue.shift();
    subtreeIndices.add(idx);
    for (const c of (nodes[idx].children || [])) queue.push(c);
  }

  // Compute world matrix of target by walking up the ancestor chain
  function worldMatrix(idx) {
    const chain = [];
    let cur = idx;
    while (cur !== -1) { chain.unshift(cur); cur = parentOf[cur]; }
    let m = identity();
    for (const i of chain) m = multiplyM4(m, nodeLocalMatrix(nodes[i]));
    return m;
  }

  // Build flat node list — only nodes in the subtree that have meshes,
  // with world-baked transforms
  const usedMeshIdx = new Set();
  const usedAccIdx  = new Set();
  const usedMatIdx  = new Set();
  const usedTexIdx  = new Set();
  const usedImgIdx  = new Set();
  const usedSmpIdx  = new Set();
  const usedBVIdx   = new Set();

  const flatNodes = [];
  for (const idx of subtreeIndices) {
    const n = nodes[idx];
    if (n.mesh == null) continue;
    flatNodes.push({
      name:   n.name || `node_${idx}`,
      matrix: worldMatrix(idx),
      mesh:   n.mesh,
    });
    usedMeshIdx.add(n.mesh);
  }

  if (flatNodes.length === 0) {
    // Node exists but has no mesh and no mesh-bearing descendants
    return null;
  }

  // Remap meshes
  const meshRemap = {};
  const prunedMeshes = [];
  for (const [oi, mesh] of meshes.entries()) {
    if (!usedMeshIdx.has(oi)) continue;
    meshRemap[oi] = prunedMeshes.length;
    for (const prim of mesh.primitives) {
      for (const v of Object.values(prim.attributes || {})) usedAccIdx.add(v);
      if (prim.indices  != null) usedAccIdx.add(prim.indices);
      if (prim.material != null) usedMatIdx.add(prim.material);
    }
    prunedMeshes.push(JSON.parse(JSON.stringify(mesh)));
  }

  // Remap materials
  const matRemap = {};
  const prunedMats = [];
  for (const [oi, mat] of materials.entries()) {
    if (!usedMatIdx.has(oi)) continue;
    matRemap[oi] = prunedMats.length;
    collectTexRefs(mat, usedTexIdx);
    prunedMats.push(JSON.parse(JSON.stringify(mat)));
  }

  // Remap textures
  const texRemap = {};
  const prunedTexs = [];
  for (const [oi, tex] of textures.entries()) {
    if (!usedTexIdx.has(oi)) continue;
    texRemap[oi] = prunedTexs.length;
    if (tex.source  != null) usedImgIdx.add(tex.source);
    if (tex.sampler != null) usedSmpIdx.add(tex.sampler);
    prunedTexs.push({ ...tex });
  }

  // Remap images
  const imgRemap = {};
  const prunedImgs = [];
  for (const [oi, img] of images.entries()) {
    if (!usedImgIdx.has(oi)) continue;
    imgRemap[oi] = prunedImgs.length;
    if (img.bufferView != null) usedBVIdx.add(img.bufferView);
    prunedImgs.push({ ...img });
  }

  // Remap samplers
  const smpRemap = {};
  const prunedSmps = [];
  for (const [oi, smp] of samplers.entries()) {
    if (!usedSmpIdx.has(oi)) continue;
    smpRemap[oi] = prunedSmps.length;
    prunedSmps.push({ ...smp });
  }

  // Remap accessors
  const accRemap = {};
  const prunedAccs = [];
  for (const [oi, acc] of accessors.entries()) {
    if (!usedAccIdx.has(oi)) continue;
    accRemap[oi] = prunedAccs.length;
    if (acc.bufferView != null) usedBVIdx.add(acc.bufferView);
    prunedAccs.push({ ...acc });
  }

  // Remap bufferViews + rebuild binary from only used segments
  const bvRemap = {};
  const prunedBVs = [];
  const binSegs = [];
  for (const [oi, bv] of bufferViews.entries()) {
    if (!usedBVIdx.has(oi)) continue;
    bvRemap[oi] = prunedBVs.length;
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

  // Apply all remaps
  for (const acc of prunedAccs)
    if (acc.bufferView != null) acc.bufferView = bvRemap[acc.bufferView] ?? acc.bufferView;

  for (const img of prunedImgs)
    if (img.bufferView != null) img.bufferView = bvRemap[img.bufferView] ?? img.bufferView;

  for (const tex of prunedTexs) {
    if (tex.source  != null) tex.source  = imgRemap[tex.source]  ?? tex.source;
    if (tex.sampler != null) tex.sampler = smpRemap[tex.sampler] ?? tex.sampler;
  }

  for (const mat of prunedMats) remapTexRefs(mat, texRemap);

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

  // Build output nodes (flat — world transforms baked)
  const outNodes = flatNodes.map(fn => {
    const n = { name: fn.name, mesh: meshRemap[fn.mesh] };
    if (!isIdentity(fn.matrix)) n.matrix = fn.matrix;
    return n;
  });

  // Wrapper group node named after the part
  const wrapperNode = {
    name:     targetName,
    children: outNodes.map((_, i) => i),
  };
  const allNodes = [...outNodes, wrapperNode];

  const outJson = {
    asset:  { version: '2.0', generator: 'resplit-ramen.mjs' },
    scene:  0,
    scenes: [{ name: 'Scene', nodes: [outNodes.length] }], // scene root = wrapper
    nodes:       allNodes,
    meshes:      prunedMeshes,
    materials:   prunedMats.length   ? prunedMats  : undefined,
    textures:    prunedTexs.length   ? prunedTexs  : undefined,
    images:      prunedImgs.length   ? prunedImgs  : undefined,
    samplers:    prunedSmps.length   ? prunedSmps  : undefined,
    accessors:   prunedAccs,
    bufferViews: prunedBVs,
    buffers:     newBin ? [{ byteLength: newBin.byteLength }] : [],
  };

  // Remove undefined keys
  Object.keys(outJson).forEach(k => { if (outJson[k] === undefined) delete outJson[k]; });

  return {
    glb:       writeGLB(outJson, newBin),
    meshCount: prunedMeshes.length,
    binKB:     newBin ? (newBin.byteLength / 1024).toFixed(1) : '0',
  };
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  await fs.mkdir(OUT_DIR, { recursive: true });

  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuffer = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuffer);
  console.log(`    Nodes: ${json.nodes?.length}  Meshes: ${json.meshes?.length}  ` +
              `BV: ${json.bufferViews?.length}  Bin: ${(srcBuffer.byteLength/1024/1024).toFixed(1)} MB\n`);

  let ok = 0, notFound = 0, noMesh = 0;

  for (const name of PART_NAMES) {
    const result = extractPart(json, bin, name);

    if (!result) {
      const exists = (json.nodes || []).some(n => n.name === name);
      if (exists) {
        console.log(`⚠️   ${name.padEnd(26)} — node found but no meshes in subtree`);
        noMesh++;
      } else {
        console.log(`❌  ${name.padEnd(26)} — NOT FOUND in source`);
        notFound++;
      }
      continue;
    }

    const outPath = path.join(OUT_DIR, `${name}.glb`);
    await fs.writeFile(outPath, result.glb);
    console.log(`✅  ${name.padEnd(26)} ${String(result.meshCount).padStart(3)} meshes  ${result.binKB.padStart(8)} KB`);
    ok++;
  }

  console.log(`\n🎉  Done: ${ok} extracted, ${notFound} not found, ${noMesh} no-mesh`);
  console.log(`    Output: ${path.resolve(OUT_DIR)}\n`);
  console.log(`    Next: node merge-ramen-exhibit.mjs\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });

