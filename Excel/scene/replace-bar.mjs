/**
 * replace-bar.mjs
 *
 * Surgically replaces the "Bar" group (and all its mesh children)
 * inside ramenShop_uvrestored_v2.glb with the full hierarchy from
 * scene-final.glb, baking scale/offset/rotation permanently.
 *
 * The "Barové sezení" parent node keeps its place in the scene.
 * "Bar"'s 9 mesh children (i1, i1.001 … i2.004) are removed.
 * scene-final.glb's scene roots (monitor, keyboard, pc_case, etc.)
 * become children of a new "scene-final" group node that sits where
 * "Bar" used to be under "Barové sezení".
 *
 * Usage:
 *   node replace-bar.mjs
 *
 * Input:
 *   ./models/ramenShop_uvrestored_v2.glb
 *   ./models/scene-final.glb
 *
 * Output:
 *   ./models/ramenShop-final.gltf  +  ramenShop-final.bin
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT_SCENE  = './models/ramenShop_uvrestored_v2.glb';
const INPUT_REPLACEMENT = './models/scene-final.glb';
const OUTPUT       = './models/ramenShop-final.gltf';

// ── TRANSFORM TO BAKE ON THE REPLACEMENT ──────────────────────────────────────
const REPLACEMENT_OVERRIDE = {
  name:     'scene-final',           // name of the new group node
  scale:    [0.530, 0.460, 0.320],
  offset:   [-1.900, -0.400,  0.500],
  rotation: [0, 0, 0],              // degrees XYZ
};

// ── GLB PARSER ────────────────────────────────────────────────────────────────
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

// ── MATRIX MATH ───────────────────────────────────────────────────────────────
const DEG2RAD = Math.PI / 180;

function TRStoMatrix(T, R, S) {
  const [qx,qy,qz,qw] = R ?? [0,0,0,1];
  const [sx,sy,sz]     = S ?? [1,1,1];
  const [tx,ty,tz]     = T ?? [0,0,0];
  return [
    (1-2*(qy*qy+qz*qz))*sx, (2*(qx*qy+qz*qw))*sx, (2*(qx*qz-qy*qw))*sx, 0,
    (2*(qx*qy-qz*qw))*sy,   (1-2*(qx*qx+qz*qz))*sy, (2*(qy*qz+qx*qw))*sy, 0,
    (2*(qx*qz+qy*qw))*sz,   (2*(qy*qz-qx*qw))*sz, (1-2*(qx*qx+qy*qy))*sz, 0,
    tx, ty, tz, 1,
  ];
}

function eulerToQuat(rdx, rdy, rdz) {
  const rx = rdx*DEG2RAD, ry = rdy*DEG2RAD, rz = rdz*DEG2RAD;
  const cx=Math.cos(rx/2), sx=Math.sin(rx/2);
  const cy=Math.cos(ry/2), sy=Math.sin(ry/2);
  const cz=Math.cos(rz/2), sz=Math.sin(rz/2);
  return [
     sx*cy*cz + cx*sy*sz,
    -sx*cy*sz + cx*sy*cz,
     cx*cy*sz + sx*sy*cz,
     cx*cy*cz - sx*sy*sz,
  ];
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

// ── COLLECT SUBTREE NODE INDICES ──────────────────────────────────────────────
function collectSubtree(nodes, rootIdx) {
  const result = new Set();
  const queue  = [rootIdx];
  while (queue.length) {
    const idx = queue.shift();
    result.add(idx);
    for (const c of (nodes[idx]?.children ?? [])) queue.push(c);
  }
  return result;
}

// ── COLLECT USED RESOURCES FROM A SET OF NODE INDICES ─────────────────────────
function collectUsedResources(nodeIndices, nodes, meshes) {
  const usedMesh = new Set();
  const usedAcc  = new Set();
  const usedMat  = new Set();
  const usedTex  = new Set();
  const usedImg  = new Set();
  const usedSmp  = new Set();
  const usedBV   = new Set();

  for (const idx of nodeIndices) {
    const n = nodes[idx];
    if (!n || n.mesh == null) continue;
    usedMesh.add(n.mesh);
    for (const prim of (meshes[n.mesh]?.primitives ?? [])) {
      for (const v of Object.values(prim.attributes ?? {})) usedAcc.add(v);
      if (prim.indices  != null) usedAcc.add(prim.indices);
      if (prim.material != null) usedMat.add(prim.material);
    }
  }
  return { usedMesh, usedAcc, usedMat, usedTex, usedImg, usedSmp, usedBV };
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log('\n📂  Reading source scene …');
  const sceneBuf = await fs.readFile(INPUT_SCENE);
  const { json: sj, bin: sb } = parseGLB(sceneBuf);
  console.log(`    Nodes: ${sj.nodes.length}  Meshes: ${sj.meshes?.length}  ` +
              `BVs: ${sj.bufferViews?.length}  Bin: ${(sb?.byteLength/1024/1024).toFixed(1)} MB`);

  console.log('📂  Reading replacement GLB (scene-final.glb) …');
  const replBuf = await fs.readFile(INPUT_REPLACEMENT);
  const { json: rj, bin: rb } = parseGLB(replBuf);
  console.log(`    Nodes: ${rj.nodes.length}  Meshes: ${rj.meshes?.length}  ` +
              `BVs: ${rj.bufferViews?.length}  Bin: ${(rb?.byteLength/1024/1024).toFixed(1)} MB`);

  // ── 1. Find "Bar" node index in scene ──────────────────────────────────────
  const barIdx = sj.nodes.findIndex(n => n.name === 'Bar');
  if (barIdx === -1) throw new Error('"Bar" node not found in scene');
  console.log(`\n🎯  Found "Bar" at node index ${barIdx}`);

  // Find "Barové sezení" — the parent of Bar
  const baroveIdx = sj.nodes.findIndex(n => n.name === 'Barové sezení');
  if (baroveIdx === -1) throw new Error('"Barové sezení" not found');
  console.log(`    Parent "Barové sezení" at index ${baroveIdx}`);

  // ── 2. Collect Bar subtree (Bar + all its mesh children) ───────────────────
  const barSubtree = collectSubtree(sj.nodes, barIdx);
  console.log(`    Bar subtree: ${barSubtree.size} nodes (Bar + ${barSubtree.size - 1} children)`);

  // ── 3. Identify which resources ARE used by the Bar subtree ────────────────
  //    We will remove these from the scene (they belong to Bar).
  //    But first check if any non-Bar node also uses them (shared resources).
  const nonBarNodeIndices = new Set(
    sj.nodes.map((_, i) => i).filter(i => !barSubtree.has(i))
  );

  const barResources = collectUsedResources(barSubtree, sj.nodes, sj.meshes ?? []);
  const nonBarResources = collectUsedResources(nonBarNodeIndices, sj.nodes, sj.meshes ?? []);

  // Meshes exclusively used by Bar (safe to remove)
  const exclusiveBarMeshes = new Set(
    [...barResources.usedMesh].filter(i => !nonBarResources.usedMesh.has(i))
  );
  console.log(`    Bar uses ${barResources.usedMesh.size} meshes, ` +
              `${exclusiveBarMeshes.size} exclusive (others shared with scene)`);

  // ── 4. Build new node + resource arrays for the scene ─────────────────────
  //
  //  Strategy: rebuild the scene JSON from scratch:
  //    - Keep all scene nodes EXCEPT the Bar subtree
  //    - Remap node indices (Bar subtree removed, indices shift)
  //    - In "Barové sezení".children, replace barIdx with newBarIdx
  //      (the index of the new scene-final wrapper node)
  //    - Append replacement nodes at the end
  //
  //  For resources (meshes/materials/textures/etc):
  //    - Keep all scene resources (removing only exclusively-Bar meshes
  //      risks breaking if any material is shared — safer to keep them,
  //      optimizer will prune later)
  //    - Append all replacement resources with offset indices

  // Build node index remap: old scene index → new index (Bar subtree removed)
  const nodeRemap = new Map();   // oldIdx → newIdx
  let   newNodeCount = 0;
  const keptSceneNodes = [];

  for (let i = 0; i < sj.nodes.length; i++) {
    if (barSubtree.has(i)) continue;        // drop Bar subtree nodes
    nodeRemap.set(i, newNodeCount++);
    keptSceneNodes.push(JSON.parse(JSON.stringify(sj.nodes[i])));
  }

  // Patch children in kept nodes (remap indices, drop any that pointed into Bar)
  for (const node of keptSceneNodes) {
    if (!node.children) continue;
    node.children = node.children
      .filter(ci => !barSubtree.has(ci))  // drop Bar from children list
      .map(ci => nodeRemap.get(ci) ?? ci);
  }

  // ── 5. Build replacement node block ────────────────────────────────────────
  //
  //  scene-final.glb scene root nodes are the named groups:
  //    monitor, keyboard, pc_case, table, floor_wall, fan_left, fan_right…
  //  We keep them exactly as-is, appended after the scene nodes.
  //  A new "scene-final" wrapper node sits on top of them with the
  //  baked override transform.

  const replSceneRoots = rj.scenes?.[0]?.nodes ?? [];
  const replNodeOffset = keptSceneNodes.length; // replacement nodes start here

  // All replacement nodes (index offset by replNodeOffset)
  const replNodes = rj.nodes.map(n => {
    const out = { name: n.name };
    if (n.children?.length)
      out.children = n.children.map(ci => ci + replNodeOffset);
    if (n.mesh != null) out.mesh = n.mesh; // patched later with mesh offset
    if (n.matrix)           out.matrix      = [...n.matrix];
    else {
      if (n.translation) out.translation = [...n.translation];
      if (n.rotation)    out.rotation    = [...n.rotation];
      if (n.scale)       out.scale       = [...n.scale];
    }
    return out;
  });

  // Wrapper "scene-final" node with baked transform
  const ov = REPLACEMENT_OVERRIDE;
  const [rdx,rdy,rdz] = ov.rotation;
  const quat = (rdx||rdy||rdz) ? eulerToQuat(rdx,rdy,rdz) : [0,0,0,1];

  const wrapperNode = {
    name:        ov.name,
    translation: [...ov.offset],
    scale:       [...ov.scale],
    rotation:    quat,
    children:    replSceneRoots.map(ri => ri + replNodeOffset),
  };
  const wrapperIdx = replNodeOffset + replNodes.length; // sits after all repl nodes

  // ── 6. Wire wrapper into "Barové sezení".children ──────────────────────────
  const baroveNewIdx = nodeRemap.get(baroveIdx);
  const baroveNode   = keptSceneNodes[baroveNewIdx];
  // "Barové sezení" already had Bar removed from children (step 4).
  // Now add the wrapper as its child.
  if (!baroveNode.children) baroveNode.children = [];
  baroveNode.children.push(wrapperIdx);

  console.log(`\n🔧  Wired "scene-final" wrapper (idx ${wrapperIdx}) ` +
              `→ "Barové sezení" (idx ${baroveNewIdx})`);
  console.log(`    Replacement scene roots (${replSceneRoots.length}): ` +
    replSceneRoots.map(ri => rj.nodes[ri]?.name ?? ri).join(', '));

  // ── 7. Merge resources ─────────────────────────────────────────────────────
  //
  //  We keep ALL scene resources (safe — optimizer can prune later).
  //  Replacement resources are appended with index offsets.

  const sMeshes = JSON.parse(JSON.stringify(sj.meshes      ?? []));
  const sMats   = JSON.parse(JSON.stringify(sj.materials   ?? []));
  const sTexs   = JSON.parse(JSON.stringify(sj.textures    ?? []));
  const sImgs   = JSON.parse(JSON.stringify(sj.images      ?? []));
  const sSmps   = JSON.parse(JSON.stringify(sj.samplers    ?? []));
  const sAccs   = JSON.parse(JSON.stringify(sj.accessors   ?? []));
  const sBVs    = JSON.parse(JSON.stringify(sj.bufferViews ?? []));

  const mshOff = sMeshes.length;
  const matOff = sMats.length;
  const texOff = sTexs.length;
  const imgOff = sImgs.length;
  const smpOff = sSmps.length;
  const accOff = sAccs.length;
  const bvOff  = sBVs.length;
  const binOff = sb ? sb.byteLength : 0;
  // pad binOff to 4-byte boundary
  const binOffPadded = Math.ceil(binOff / 4) * 4;

  // Patch replacement meshes (acc + mat offsets)
  const replMeshes = (rj.meshes ?? []).map(mesh => ({
    ...mesh,
    primitives: mesh.primitives.map(prim => {
      const p = JSON.parse(JSON.stringify(prim));
      const attrs = {};
      for (const [k,v] of Object.entries(p.attributes ?? {})) attrs[k] = v + accOff;
      p.attributes = attrs;
      if (p.indices  != null) p.indices  = p.indices  + accOff;
      if (p.material != null) p.material = p.material + matOff;
      return p;
    })
  }));

  // Patch replacement materials (texture refs)
  const replMats = (rj.materials ?? []).map(mat => {
    const m = JSON.parse(JSON.stringify(mat));
    remapTexRefs(m, Object.fromEntries(
      (rj.textures ?? []).map((_, i) => [i, i + texOff])
    ));
    return m;
  });

  // Patch replacement textures (image + sampler refs)
  const replTexs = (rj.textures ?? []).map(tex => {
    const t = { ...tex };
    if (t.source  != null) t.source  = t.source  + imgOff;
    if (t.sampler != null) t.sampler = t.sampler + smpOff;
    return t;
  });

  // Patch replacement images (bufferView refs)
  const replImgs = (rj.images ?? []).map(img => {
    const i = { ...img };
    if (i.bufferView != null) i.bufferView = i.bufferView + bvOff;
    return i;
  });

  // Patch replacement accessors (bufferView refs)
  const replAccs = (rj.accessors ?? []).map(acc => {
    const a = { ...acc };
    if (a.bufferView != null) a.bufferView = a.bufferView + bvOff;
    return a;
  });

  // Patch replacement bufferViews (byteOffset + buffer=0)
  const replBVs = (rj.bufferViews ?? []).map(bv => ({
    ...bv,
    buffer:     0,
    byteOffset: (bv.byteOffset ?? 0) + binOffPadded,
  }));

  const replSmps = (rj.samplers ?? []).map(s => ({ ...s }));

  // Patch replacement nodes: mesh indices
  for (const rn of replNodes) {
    if (rn.mesh != null) rn.mesh = rn.mesh + mshOff;
  }

  // ── 8. Patch scene mesh/accessor/etc. refs ─────────────────────────────────
  //  The kept scene nodes already have correct mesh indices (scene resources
  //  not renumbered). But scene bufferViews reference buffer 0 — keep as-is.

  // ── 9. Build final allNodes array ──────────────────────────────────────────
  const allNodes = [...keptSceneNodes, ...replNodes, wrapperNode];

  // ── 10. Patch scene root node list ─────────────────────────────────────────
  const origSceneRoots = sj.scenes?.[0]?.nodes ?? [];
  const newSceneRoots  = origSceneRoots
    .filter(i => !barSubtree.has(i))
    .map(i => nodeRemap.get(i) ?? i);
  // (wrapperIdx is not a scene root — it's parented under Barové sezení)

  // ── 11. Build binary ───────────────────────────────────────────────────────
  let combinedBin;
  if (sb && rb) {
    const pad  = Buffer.alloc(binOffPadded - binOff, 0); // align scene bin to 4
    combinedBin = Buffer.concat([Buffer.from(sb), pad, Buffer.from(rb)]);
  } else if (sb) {
    combinedBin = Buffer.from(sb);
  } else if (rb) {
    combinedBin = Buffer.from(rb);
  } else {
    combinedBin = Buffer.alloc(0);
  }

  // ── 12. Assemble final GLTF JSON ───────────────────────────────────────────
  const merged = {
    asset:  { version: '2.0', generator: 'replace-bar.mjs' },
    scene:  0,
    scenes: [{ name: 'Scene', nodes: newSceneRoots }],
    nodes:  allNodes,
    meshes: [...sMeshes, ...replMeshes],
  };

  const allMats = [...sMats, ...replMats];
  const allTexs = [...sTexs, ...replTexs];
  const allImgs = [...sImgs, ...replImgs];
  const allSmps = [...sSmps, ...replSmps];
  const allAccs = [...sAccs, ...replAccs];
  const allBVs  = [...sBVs,  ...replBVs];

  if (allMats.length) merged.materials   = allMats;
  if (allTexs.length) merged.textures    = allTexs;
  if (allImgs.length) merged.images      = allImgs;
  if (allSmps.length) merged.samplers    = allSmps;
  merged.accessors   = allAccs;
  merged.bufferViews = allBVs;

  const binFilename  = 'ramenShop-final.bin';
  merged.buffers     = [{ uri: binFilename, byteLength: combinedBin.byteLength }];

  // ── 13. Write output ───────────────────────────────────────────────────────
  const outDir = path.dirname(path.resolve(OUTPUT));
  await fs.mkdir(outDir, { recursive: true });
  await fs.writeFile(OUTPUT, JSON.stringify(merged, null, 2));
  await fs.writeFile(path.join(outDir, binFilename), combinedBin);

  const sizeMB = (combinedBin.byteLength / 1024 / 1024).toFixed(2);
  console.log(`\n💾  Written:`);
  console.log(`    ${OUTPUT}`);
  console.log(`    ${path.join(outDir, binFilename)}  (${sizeMB} MB)`);
  console.log(`\n✅  Structure in ramenShop-final.gltf:`);
  console.log(`    ROOT`);
  console.log(`     └─ exhibitStand_root`);
  console.log(`         └─ root`);
  console.log(`             └─ Barové sezení`);
  console.log(`                 └─ scene-final  ← new wrapper (scale/offset baked)`);
  console.log(`                     ├─ monitor`);
  console.log(`                     ├─ keyboard`);
  console.log(`                     ├─ pc_case`);
  console.log(`                     ├─ fan_left`);
  console.log(`                     ├─ fan_right`);
  console.log(`                     ├─ table`);
  console.log(`                     ├─ floor_wall`);
  console.log(`                     └─ … (all scene-final.glb groups)\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
