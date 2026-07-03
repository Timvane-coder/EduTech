/**
 * clusterMachines.mjs
 * Groups the 3279 islands by spatial proximity using k-means clustering
 * to identify which islands belong to the same physical object.
 *
 * Usage:
 *   node clusterMachines.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import draco3d            from 'draco3d';

const INPUT = './models/ramen-parts/machines.glb';

// ── K-MEANS CONFIG ────────────────────────────────────────────────────────────
// Tweak K to match the number of distinct objects you see in the screenshot
const K = 12;
const MAX_ITER = 50;

async function main() {
  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  console.log(`\n📂  Reading ${INPUT} …`);
  const doc  = await io.read(INPUT);
  const root = doc.getRoot();

  const node = root.listNodes().find(n => n.getMesh());
  const prim = node.getMesh().listPrimitives()[0];

  const posAcc  = prim.getAttribute('POSITION');
  const indAcc  = prim.getIndices();
  const positions = posAcc.getArray();
  const indices   = indAcc ? indAcc.getArray() : null;
  const vertCount = posAcc.getCount();

  // ── Union-Find ─────────────────────────────────────────────────────────────
  const parent = new Int32Array(vertCount);
  for (let i = 0; i < vertCount; i++) parent[i] = i;

  function find(x) {
    while (parent[x] !== x) { parent[x] = parent[parent[x]]; x = parent[x]; }
    return x;
  }
  function union(a, b) {
    a = find(a); b = find(b);
    if (a !== b) parent[a] = b;
  }

  if (indices) {
    for (let i = 0; i < indices.length; i += 3) {
      union(indices[i], indices[i+1]);
      union(indices[i+1], indices[i+2]);
    }
  }

  // ── Compute island centroids ───────────────────────────────────────────────
  const islandData = new Map();
  for (let v = 0; v < vertCount; v++) {
    const r = find(v);
    if (!islandData.has(r)) islandData.set(r, { n:0, sx:0, sy:0, sz:0,
      minX:Infinity, maxX:-Infinity, minY:Infinity, maxY:-Infinity,
      minZ:Infinity, maxZ:-Infinity });
    const d = islandData.get(r);
    const x = positions[v*3], y = positions[v*3+1], z = positions[v*3+2];
    d.n++; d.sx+=x; d.sy+=y; d.sz+=z;
    if(x<d.minX)d.minX=x; if(x>d.maxX)d.maxX=x;
    if(y<d.minY)d.minY=y; if(y>d.maxY)d.maxY=y;
    if(z<d.minZ)d.minZ=z; if(z>d.maxZ)d.maxZ=z;
  }

  const islands = [...islandData.values()].map(d => ({
    cx: d.sx/d.n, cy: d.sy/d.n, cz: d.sz/d.n,
    n: d.n,
    sizeX: d.maxX-d.minX, sizeY: d.maxY-d.minY, sizeZ: d.maxZ-d.minZ,
  }));

  console.log(`🏝   Islands found: ${islands.length}`);

  // ── K-Means clustering on centroids ───────────────────────────────────────
  console.log(`🔀  Running k-means  K=${K}  max_iter=${MAX_ITER} …\n`);

  // Init: pick K islands spread across the range as starting centroids
  const step = Math.floor(islands.length / K);
  let centroids = Array.from({length: K}, (_, i) => ({
    x: islands[i*step].cx,
    y: islands[i*step].cy,
    z: islands[i*step].cz,
  }));

  let assignments = new Int32Array(islands.length);

  for (let iter = 0; iter < MAX_ITER; iter++) {
    // Assign each island to nearest centroid
    let changed = false;
    for (let i = 0; i < islands.length; i++) {
      const isl = islands[i];
      let best = 0, bestDist = Infinity;
      for (let k = 0; k < K; k++) {
        const dx = isl.cx - centroids[k].x;
        const dy = isl.cy - centroids[k].y;
        const dz = isl.cz - centroids[k].z;
        const d = dx*dx + dy*dy + dz*dz;
        if (d < bestDist) { bestDist = d; best = k; }
      }
      if (assignments[i] !== best) { assignments[i] = best; changed = true; }
    }
    if (!changed) { console.log(`  Converged at iteration ${iter}`); break; }

    // Recompute centroids
    const sums = Array.from({length: K}, () => ({x:0,y:0,z:0,n:0}));
    for (let i = 0; i < islands.length; i++) {
      const s = sums[assignments[i]];
      s.x += islands[i].cx; s.y += islands[i].cy; s.z += islands[i].cz; s.n++;
    }
    centroids = sums.map(s => s.n > 0
      ? {x: s.x/s.n, y: s.y/s.n, z: s.z/s.n}
      : centroids[0]
    );
  }

  // ── Report clusters ────────────────────────────────────────────────────────
  const clusters = Array.from({length: K}, () => ({
    islands: [], totalVerts: 0,
    minX:Infinity, maxX:-Infinity,
    minY:Infinity, maxY:-Infinity,
    minZ:Infinity, maxZ:-Infinity,
  }));

  for (let i = 0; i < islands.length; i++) {
    const k = assignments[i];
    const isl = islands[i];
    const c = clusters[k];
    c.islands.push(i);
    c.totalVerts += isl.n;
    if(isl.cx < c.minX) c.minX = isl.cx;
    if(isl.cx > c.maxX) c.maxX = isl.cx;
    if(isl.cy < c.minY) c.minY = isl.cy;
    if(isl.cy > c.maxY) c.maxY = isl.cy;
    if(isl.cz < c.minZ) c.minZ = isl.cz;
    if(isl.cz > c.maxZ) c.maxZ = isl.cz;
  }

  // Sort clusters by total vertex count descending
  const sorted = clusters
    .map((c, k) => ({...c, k}))
    .sort((a,b) => b.totalVerts - a.totalVerts);

  console.log('═'.repeat(70));
  sorted.forEach((c, rank) => {
    const spanX = (c.maxX - c.minX).toFixed(3);
    const spanY = (c.maxY - c.minY).toFixed(3);
    const spanZ = (c.maxZ - c.minZ).toFixed(3);
    const centX = ((c.minX+c.maxX)/2).toFixed(3);
    const centY = ((c.minY+c.maxY)/2).toFixed(3);
    const centZ = ((c.minZ+c.maxZ)/2).toFixed(3);

    // Guess object type from shape
    const dims = [parseFloat(spanX), parseFloat(spanY), parseFloat(spanZ)].sort((a,b)=>a-b);
    let hint = '❓ unknown';
    if (dims[2] < 0.1)                               hint = '📄 flat panel / screen face';
    else if (dims[2]/Math.max(dims[0],0.001) > 10)   hint = '🪱 pipes / cables';
    else if (dims[0]/Math.max(dims[2],0.001) < 0.15) hint = '📏 vertical column / pole';
    else if (dims[2]/Math.max(dims[0],0.001) < 2)    hint = '📦 box / wall unit';
    else                                              hint = '🔮 complex / dish / hub';

    console.log(`Cluster ${String(rank+1).padStart(2,'0')}  (k=${c.k})  ${hint}`);
    console.log(`  Islands    : ${c.islands.length}`);
    console.log(`  Vertices   : ${c.totalVerts}`);
    console.log(`  Centroid   : [${centX}, ${centY}, ${centZ}]`);
    console.log(`  Span       : ${spanX}W × ${spanY}H × ${spanZ}D`);
    console.log('─'.repeat(70));
  });

  console.log(`\n💡  Suggested rebuild parts  (adjust K=${K} if clusters look wrong):`);
  console.log(`    Pipes/cables  → long thin clusters`);
  console.log(`    Wall boxes    → cubic clusters near walls`);
  console.log(`    Dish/hub      → large complex cluster near floor`);
  console.log(`    Screen frames → flat clusters`);
  console.log(`    Solar panels  → flat clusters at height`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
