/**
 * bake-transforms.mjs
 *
 * Permanently bakes position offsets, scale, and rotation into
 * specific nodes (and their subtrees) in a GLB file.
 *
 * Works at raw JSON + binary level — no gltf-transform dependency.
 *
 * The transform is applied as follows:
 *   - Find the target node by name anywhere in the tree
 *   - Compute the node's current local TRS
 *   - Combine with the desired override (scale → rotate → translate)
 *   - Write back as a matrix on the node (or as TRS if identity rotation)
 *   - All descendant nodes are untouched — they move with the parent
 *     because we only modify the parent's transform, not the geometry
 *
 * Usage:
 *   node bake-transforms.mjs
 *
 * Input:  ./models/ramenShop_uvrestored_v2_cleaned.glb
 * Output: ./models/ramenShop_uvrestored_v2_baked.glb
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/ramenShop_uvrestored_v2_cleaned.glb';
const OUTPUT = './models/ramenShop_uvrestored_v2_cleaned.glb';

const DEG2RAD = Math.PI / 180;

// ── TRANSFORM OVERRIDES ───────────────────────────────────────────────────────
// Each entry targets a node by name.
// The override is applied ON TOP of the node's existing transform.
//
// target:   node name to find (searched anywhere in the tree)
// scale:    [x, y, z]  multiplied with existing scale
// offset:   [x, y, z]  added to existing translation
// rotation: [x, y, z]  degrees, Euler XYZ, added to existing rotation
//
// To add more transforms in future: just append another entry.

const TRANSFORMS = [

 // ── TV 60.001 ─────────────────────────────────────────────────────────────
  // Target: the "TV 60.001" group node (parent of Mesh_59 and Mesh_60)
  {
    target:   'TV 60.001',
    scale:    [1.0, 1.9, 1.0],
    offset:   [0.0, -0.65, 0.0],
    rotation: [0, 0, 0],
  },
];

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
  const jsonRaw  = Buffer.from(JSON.stringify(jsonObj), 'utf8');
  const jsonPad  = (4 - (jsonRaw.length % 4)) % 4;
  const jsonBytes = Buffer.concat([jsonRaw, Buffer.alloc(jsonPad, 0x20)]);

  const binPad      = binBuffer ? Buffer.alloc((4 - (binBuffer.byteLength % 4)) % 4, 0x00) : Buffer.alloc(0);
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

// ── MATRIX MATH ───────────────────────────────────────────────────────────────
function identity() {
  return [1,0,0,0, 0,1,0,0, 0,0,1,0, 0,0,0,1];
}

function multiplyM4(a, b) {
  const o = new Array(16).fill(0);
  for (let r = 0; r < 4; r++)
    for (let c = 0; c < 4; c++)
      for (let k = 0; k < 4; k++)
        o[c*4+r] += a[k*4+r] * b[c*4+k];
  return o;
}

// TRS → 4×4 column-major matrix
function TRStoMatrix(T, R, S) {
  const [qx,qy,qz,qw] = R;
  const [sx,sy,sz]     = S;
  const [tx,ty,tz]     = T;
  return [
    (1-2*(qy*qy+qz*qz))*sx, (2*(qx*qy+qz*qw))*sx, (2*(qx*qz-qy*qw))*sx, 0,
    (2*(qx*qy-qz*qw))*sy,   (1-2*(qx*qx+qz*qz))*sy, (2*(qy*qz+qx*qw))*sy, 0,
    (2*(qx*qz+qy*qw))*sz,   (2*(qy*qz-qx*qw))*sz, (1-2*(qx*qx+qy*qy))*sz, 0,
    tx, ty, tz, 1,
  ];
}

// Euler XYZ degrees → quaternion
function eulerToQuat(rx, ry, rz) {
  const cx = Math.cos(rx*DEG2RAD/2), sx = Math.sin(rx*DEG2RAD/2);
  const cy = Math.cos(ry*DEG2RAD/2), sy = Math.sin(ry*DEG2RAD/2);
  const cz = Math.cos(rz*DEG2RAD/2), sz = Math.sin(rz*DEG2RAD/2);
  return [
     sx*cy*cz + cx*sy*sz,
    -sx*cy*sz + cx*sy*cz,
     cx*cy*sz + sx*sy*cz,
     cx*cy*cz - sx*sy*sz,
  ];
}

// Extract TRS from a node (handles both matrix and TRS forms)
function nodeToTRS(n) {
  if (n.matrix) {
    // Decompose column-major 4×4 into T, R, S
    const m = n.matrix;
    const tx = m[12], ty = m[13], tz = m[14];

    const sx = Math.sqrt(m[0]*m[0] + m[1]*m[1] + m[2]*m[2]);
    const sy = Math.sqrt(m[4]*m[4] + m[5]*m[5] + m[6]*m[6]);
    const sz = Math.sqrt(m[8]*m[8] + m[9]*m[9] + m[10]*m[10]);

    // Normalise rotation columns
    const r = [
      m[0]/sx, m[1]/sx, m[2]/sx, 0,
      m[4]/sy, m[5]/sy, m[6]/sy, 0,
      m[8]/sz, m[9]/sz, m[10]/sz, 0,
      0, 0, 0, 1,
    ];

    // Rotation matrix → quaternion
    const trace = r[0] + r[5] + r[10];
    let qx, qy, qz, qw;
    if (trace > 0) {
      const s = 0.5 / Math.sqrt(trace + 1);
      qw = 0.25 / s;
      qx = (r[6] - r[9]) * s;
      qy = (r[8] - r[2]) * s;
      qz = (r[1] - r[4]) * s;
    } else if (r[0] > r[5] && r[0] > r[10]) {
      const s = 2 * Math.sqrt(1 + r[0] - r[5] - r[10]);
      qw = (r[6] - r[9]) / s;
      qx = 0.25 * s;
      qy = (r[1] + r[4]) / s;
      qz = (r[8] + r[2]) / s;
    } else if (r[5] > r[10]) {
      const s = 2 * Math.sqrt(1 + r[5] - r[0] - r[10]);
      qw = (r[8] - r[2]) / s;
      qx = (r[1] + r[4]) / s;
      qy = 0.25 * s;
      qz = (r[6] + r[9]) / s;
    } else {
      const s = 2 * Math.sqrt(1 + r[10] - r[0] - r[5]);
      qw = (r[1] - r[4]) / s;
      qx = (r[8] + r[2]) / s;
      qy = (r[6] + r[9]) / s;
      qz = 0.25 * s;
    }

    return {
      T: [tx, ty, tz],
      R: [qx, qy, qz, qw],
      S: [sx, sy, sz],
    };
  }

  return {
    T: n.translation ? [...n.translation] : [0, 0, 0],
    R: n.rotation    ? [...n.rotation]    : [0, 0, 0, 1],
    S: n.scale       ? [...n.scale]       : [1, 1, 1],
  };
}

// Multiply two quaternions
function quatMultiply(a, b) {
  const [ax,ay,az,aw] = a;
  const [bx,by,bz,bw] = b;
  return [
    aw*bx + ax*bw + ay*bz - az*by,
    aw*by - ax*bz + ay*bw + az*bx,
    aw*bz + ax*by - ay*bx + az*bw,
    aw*bw - ax*bx - ay*by - az*bz,
  ];
}

// ── APPLY OVERRIDE TO A NODE ──────────────────────────────────────────────────
// Combines the override with the node's existing transform and
// writes back as TRS properties (removes matrix if present).
function applyOverride(node, override) {
  const existing = nodeToTRS(node);

  // New scale = existing scale * override scale (component-wise)
  const [osx, osy, osz] = override.scale ?? [1,1,1];
  const newS = [
    existing.S[0] * osx,
    existing.S[1] * osy,
    existing.S[2] * osz,
  ];

  // New translation = existing translation + override offset
  const [ox, oy, oz] = override.offset ?? [0,0,0];
  const newT = [
    existing.T[0] + ox,
    existing.T[1] + oy,
    existing.T[2] + oz,
  ];

  // New rotation = existing rotation * override rotation
  const [rdx, rdy, rdz] = override.rotation ?? [0,0,0];
  const ovQuat  = eulerToQuat(rdx, rdy, rdz);
  const newR    = quatMultiply(existing.R, ovQuat);

  // Remove matrix, write TRS
  delete node.matrix;
  node.translation = newT;
  node.rotation    = newR;
  node.scale       = newS;

  return { newT, newR, newS };
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuf = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuf);

  const nodes = json.nodes || [];
  console.log(`    Total nodes: ${nodes.length}\n`);

  // Index nodes by name for fast lookup
  // If duplicate names exist, we process all of them
  const byName = new Map(); // name → [idx, ...]
  for (let i = 0; i < nodes.length; i++) {
    const name = nodes[i].name ?? '';
    if (!byName.has(name)) byName.set(name, []);
    byName.get(name).push(i);
  }

  let appliedCount = 0;
  let notFoundCount = 0;

  for (const override of TRANSFORMS) {
    const indices = byName.get(override.target);

    if (!indices || indices.length === 0) {
      console.log(`⚠️   NOT FOUND: "${override.target}"`);
      notFoundCount++;
      continue;
    }

    for (const idx of indices) {
      const node   = nodes[idx];
      const before = nodeToTRS(node);
      const result = applyOverride(node, override);

      console.log(`✅  "${override.target}"  [node ${idx}]`);
      console.log(`    T: [${before.T.map(v=>v.toFixed(4)).join(', ')}]  →  [${result.newT.map(v=>v.toFixed(4)).join(', ')}]`);
      console.log(`    S: [${before.S.map(v=>v.toFixed(4)).join(', ')}]  →  [${result.newS.map(v=>v.toFixed(4)).join(', ')}]`);
      if (override.rotation?.some(v => v !== 0)) {
        console.log(`    R: [${result.newR.map(v=>v.toFixed(4)).join(', ')}]  (quaternion)`);
      }
      appliedCount++;
    }
  }

  // ── Write output (binary is unchanged — only node JSON is modified) ────────
  const outJson = { ...json, nodes };
  const outBuf  = writeGLB(outJson, bin);

  await fs.mkdir(path.dirname(path.resolve(OUTPUT)), { recursive: true });
  await fs.writeFile(OUTPUT, outBuf);

  console.log(`\n📊  Applied ${appliedCount} transform(s)  (${notFoundCount} not found)`);
  console.log(`    Size: ${(srcBuf.byteLength/1024/1024).toFixed(2)} MB → ${(outBuf.byteLength/1024/1024).toFixed(2)} MB`);
  console.log(`✅  Written: ${OUTPUT}\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
