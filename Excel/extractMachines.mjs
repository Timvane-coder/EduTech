/**
 * extractMachines.mjs
 * Extracts each k-means cluster from machinesJoined into its own GLB.
 * Preserves exact world-space vertex positions.
 *
 * Usage:
 *   node extractMachines.mjs
 */

import { NodeIO, Document, Primitive } from '@gltf-transform/core';
import { ALL_EXTENSIONS }              from '@gltf-transform/extensions';
import draco3d                         from 'draco3d';
import { promises as fs }              from 'fs';
import path                            from 'path';

const INPUT  = './models/ramen-parts/machines.glb';
const OUTDIR = './models/ramen-parts/machines-split';

// K-means config — must match what clusterMachines.mjs used
const K        = 12;
const MAX_ITER = 50;

// ── Human-readable names for each cluster k index ────────────────────────────
// Map from k= value (as reported) to a descriptive filename.
// Based on the cluster report:
//   k=8  → box/wall unit,  centroid [0.335, -3.165,  0.212]  → wall_box_center
//   k=6  → complex/hub,    centroid [0.887, -4.295, -1.817]  → distributor_hub
//   k=3  → box/wall unit,  centroid [-1.581,-4.283,  0.268]  → wall_box_left
//   k=2  → box/wall unit,  centroid [-1.903,-3.439, -2.141]  → wall_box_rear_left
//   k=9  → box/wall unit,  centroid [-0.021,-3.087, -1.256]  → wall_box_mid
//   k=0  → complex/dish,   centroid [-1.088, 0.290,  0.632]  → dish_solar_panel
//   k=5  → box/wall unit,  centroid [-0.310,-1.563, -3.161]  → wall_box_rear
//   k=4  → box/wall unit,  centroid [-2.254,-2.915,  0.267]  → wall_box_far_left
//   k=11 → box/wall unit,  centroid [0.424, -3.468, -2.316]  → wall_box_right
//   k=7  → pipes/cables,   centroid [1.161, -7.166, -0.292]  → pipes_cables_a
//   k=10 → complex/hub,    centroid [-2.012,-0.971, -2.215]  → rotating_hub
//   k=1  → column/pole,    centroid [1.162, -7.159, -1.881]  → pipes_cables_b

const CLUSTER_NAMES = {
  8:  'wall_box_center',
  6:  'distributor_hub',
  3:  'wall_box_left',
  2:  'wall_box_rear_left',
  9:  'wall_box_mid',
  0:  'dish_solar_panel',
  5:  'wall_box_rear',
  4:  'wall_box_far_left',
  11: 'wall_box_right',
  7:  'pipes_cables_a',
  10: 'rotating_hub',
  1:  'pipes_cables_b',
};

// ── Union-Find ────────────────────────────────────────────────────────────────
function makeUF(n) {
  const p = new Int32Array(n);
  for (let i = 0; i < n; i++) p[i] = i;
  function find(x) {
    while (p[x] !== x) { p[x] = p[p[x]]; x = p[x]; } return x;
  }
  function union(a, b) { a=find(a); b=find(b); if(a!==b) p[a]=b; }
  return { find, union };
}

// ── K-Means (same seed as clusterMachines.mjs) ────────────────────────────────
function kmeans(points, k, maxIter) {
  const step = Math.floor(points.length / k);
  let centroids = Array.from({length: k}, (_, i) => [...points[i * step]]);
  const assignments = new Int32Array(points.length);

  for (let iter = 0; iter < maxIter; iter++) {
    let changed = false;
    for (let i = 0; i < points.length; i++) {
      const [px, py, pz] = points[i];
      let best = 0, bestD = Infinity;
      for (let c = 0; c < k; c++) {
        const dx = px-centroids[c][0], dy = py-centroids[c][1], dz = pz-centroids[c][2];
        const d = dx*dx + dy*dy + dz*dz;
        if (d < bestD) { bestD = d; best = c; }
      }
      if (assignments[i] !== best) { assignments[i] = best; changed = true; }
    }
    if (!changed) break;

    const sums = Array.from({length: k}, () => [0,0,0,0]);
    for (let i = 0; i < points.length; i++) {
      const s = sums[assignments[i]];
      s[0]+=points[i][0]; s[1]+=points[i][1]; s[2]+=points[i][2]; s[3]++;
    }
    centroids = sums.map((s,ci) =>
      s[3] > 0 ? [s[0]/s[3], s[1]/s[3], s[2]/s[3]] : centroids[ci]
    );
  }
  return assignments;
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  await fs.mkdir(OUTDIR, { recursive: true });

  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  console.log(`\n📂  Reading ${INPUT} …`);
  const srcDoc = await io.read(INPUT);
  const srcRoot = srcDoc.getRoot();

  const srcNode = srcRoot.listNodes().find(n => n.getMesh());
  const srcPrim = srcNode.getMesh().listPrimitives()[0];
  const srcMat  = srcPrim.getMaterial();

  const posAcc = srcPrim.getAttribute('POSITION');
  const nrmAcc = srcPrim.getAttribute('NORMAL');
  const uvAcc  = srcPrim.getAttribute('TEXCOORD_0');
  const indAcc = srcPrim.getIndices();

  const positions = posAcc.getArray();
  const normals   = nrmAcc ? nrmAcc.getArray() : null;
  const uvs       = uvAcc  ? uvAcc.getArray()  : null;
  const indices   = indAcc ? indAcc.getArray()  : null;
  const vertCount = posAcc.getCount();

  // ── Step 1: find islands via union-find ──────────────────────────────────
  console.log(`🔗  Building connectivity …`);
  const uf = makeUF(vertCount);
  if (indices) {
    for (let i = 0; i < indices.length; i += 3) {
      uf.union(indices[i], indices[i+1]);
      uf.union(indices[i+1], indices[i+2]);
    }
  }

  // Map each vertex to its island root
  const vertToIsland = new Int32Array(vertCount);
  for (let v = 0; v < vertCount; v++) vertToIsland[v] = uf.find(v);

  // Compute island centroids
  const islandMap = new Map();
  for (let v = 0; v < vertCount; v++) {
    const r = vertToIsland[v];
    if (!islandMap.has(r)) islandMap.set(r, {n:0, sx:0, sy:0, sz:0});
    const d = islandMap.get(r);
    d.n++; d.sx+=positions[v*3]; d.sy+=positions[v*3+1]; d.sz+=positions[v*3+2];
  }

  const islandRoots = [...islandMap.keys()];
  const islandCentroids = islandRoots.map(r => {
    const d = islandMap.get(r);
    return [d.sx/d.n, d.sy/d.n, d.sz/d.n];
  });

  console.log(`🏝   Islands: ${islandRoots.length}`);

  // ── Step 2: k-means on island centroids ──────────────────────────────────
  console.log(`🔀  K-means clustering  K=${K} …`);
  const islandAssignments = kmeans(islandCentroids, K, MAX_ITER);

  // Map each island root → cluster k
  const rootToCluster = new Map();
  islandRoots.forEach((r, i) => rootToCluster.set(r, islandAssignments[i]));

  // Map each vertex → cluster k
  const vertToCluster = new Int32Array(vertCount);
  for (let v = 0; v < vertCount; v++) {
    vertToCluster[v] = rootToCluster.get(vertToIsland[v]);
  }

  // ── Step 3: for each cluster, collect its triangles ──────────────────────
  console.log(`✂️   Extracting clusters into GLBs …\n`);

  // Group triangle indices by cluster
  const clusterTris = Array.from({length: K}, () => []);

  if (indices) {
    for (let i = 0; i < indices.length; i += 3) {
      const k = vertToCluster[indices[i]]; // all 3 verts of a tri share same island
      clusterTris[k].push(indices[i], indices[i+1], indices[i+2]);
    }
  } else {
    for (let i = 0; i < vertCount; i += 3) {
      const k = vertToCluster[i];
      clusterTris[k].push(i, i+1, i+2);
    }
  }

  // ── Step 4: write each cluster as a GLB ──────────────────────────────────
  for (let k = 0; k < K; k++) {
    const tris = clusterTris[k];
    if (tris.length === 0) continue;

    const name = CLUSTER_NAMES[k] || `cluster_${k}`;
    const outPath = path.join(OUTDIR, `${name}.glb`);

    // Remap: collect unique old vertex indices used by this cluster's tris
    const oldToNew = new Map();
    const newVerts = [];
    const newIndices = [];

    for (let i = 0; i < tris.length; i++) {
      const oldIdx = tris[i];
      if (!oldToNew.has(oldIdx)) {
        oldToNew.set(oldIdx, newVerts.length);
        newVerts.push(oldIdx);
      }
      newIndices.push(oldToNew.get(oldIdx));
    }

    const newVertCount = newVerts.length;
    const newTriCount  = newIndices.length / 3;

    // Build typed arrays for new geometry
    const newPos = new Float32Array(newVertCount * 3);
    const newNrm = normals ? new Float32Array(newVertCount * 3) : null;
    const newUV  = uvs     ? new Float32Array(newVertCount * 2) : null;

    for (let i = 0; i < newVertCount; i++) {
      const ov = newVerts[i];
      newPos[i*3]   = positions[ov*3];
      newPos[i*3+1] = positions[ov*3+1];
      newPos[i*3+2] = positions[ov*3+2];
      if (newNrm) {
        newNrm[i*3]   = normals[ov*3];
        newNrm[i*3+1] = normals[ov*3+1];
        newNrm[i*3+2] = normals[ov*3+2];
      }
      if (newUV) {
        newUV[i*2]   = uvs[ov*2];
        newUV[i*2+1] = uvs[ov*2+1];
      }
    }

    // Use Uint32 indices to be safe
    const newIdxArr = new Uint32Array(newIndices);

    // Build new gltf-transform Document
    const outDoc  = new Document();
    const outBuf  = outDoc.createBuffer();
    const outScene = outDoc.createScene(name);
    const outNode  = outDoc.createNode(name);
    const outMesh  = outDoc.createMesh(name);
    const outPrim  = outDoc.createPrimitive();

    // Position accessor
    const posOut = outDoc.createAccessor()
      .setType('VEC3').setArray(newPos).setBuffer(outBuf);
    outPrim.setAttribute('POSITION', posOut);

    // Normal accessor
    if (newNrm) {
      const nrmOut = outDoc.createAccessor()
        .setType('VEC3').setArray(newNrm).setBuffer(outBuf);
      outPrim.setAttribute('NORMAL', nrmOut);
    }

    // UV accessor
    if (newUV) {
      const uvOut = outDoc.createAccessor()
        .setType('VEC2').setArray(newUV).setBuffer(outBuf);
      outPrim.setAttribute('TEXCOORD_0', uvOut);
    }

    // Index accessor
    const idxOut = outDoc.createAccessor()
      .setType('SCALAR').setArray(newIdxArr).setBuffer(outBuf);
    outPrim.setIndices(idxOut);

    // Wire up
    outMesh.addPrimitive(outPrim);
    outNode.setMesh(outMesh);
    outScene.addChild(outNode);
    outDoc.getRoot().setDefaultScene(outScene);

    await io.write(outPath, outDoc);
    console.log(`✅  ${name}.glb  —  ${newVertCount} verts, ${newTriCount} tris`);
  }

  console.log(`\n🎉  All done! Parts in ${OUTDIR}`);
  console.log(`\n💡  Next: load all GLBs in viewer to verify, then rename/merge as needed`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
