/**
 * scale-exhibit.mjs
 *
 * Scales the entire exhibitStand_root subtree by applying a transform
 * to the exhibitStand_root node itself. Because all exhibit meshes are
 * children (or descendants) of this node, scaling the root moves and
 * scales everything inside it together — no individual node needs to
 * be touched.
 *
 * Width  = X axis
 * Height = Y axis
 * Depth  = Z axis
 *
 * Works at raw JSON level — binary is passed through unchanged.
 *
 * Usage:
 *   node scale-exhibit.mjs
 *
 * Input:  ./models/ramenShop_uvrestored_v2_lifted.glb
 * Output: ./models/ramenShop_uvrestored_v2_scaled.glb
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/ramenShop_uvrestored_v2_lifted.glb';
const OUTPUT = './models/ramenShop_uvrestored_v2_scaled.glb';

// ── SCALE CONFIG ──────────────────────────────────────────────────────────────
//
// TARGET: the node whose entire subtree will be scaled.
// Usually 'exhibitStand_root' but can be changed to any group node.
//
// SCALE: non-uniform scale applied to the target node.
//   X = Width   (left ↔ right)
//   Y = Height  (up ↕ down)
//   Z = Depth   (front ↔ back)
//
// UNIFORM: if true, applies UNIFORM_SCALE to all three axes equally,
//   ignoring SCALE.X/Y/Z. Useful for simple resize-everything.
//
// POSITION_OFFSET: optionally shift the whole stand after scaling
//   to reposition it if it drifts from where you want it.
//   Leave as [0,0,0] if no repositioning needed.
//
// ROTATION_DEG: optionally rotate the stand (Euler XYZ degrees).
//   Leave as [0,0,0] for no rotation.

const CONFIG = {
  target: 'exhibitStand_root',

  uniform:       false,       // true = use UNIFORM_SCALE for all axes
  uniformScale:  1.0,         // used only when uniform = true

  scale: {
    x: 1.2,   // Width  — increase >1 to widen, decrease <1 to narrow
    y: 1.2,   // Height — increase >1 to grow taller, decrease <1 shorter
    z: 1.0,   // Depth  — increase >1 to deepen, decrease <1 shallower
  },

  positionOffset: [0, 0, 0],  // [x, y, z] — shift after scaling if needed
  rotationDeg:    [0, 0, 0],  // [x, y, z] degrees Euler XYZ
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

// ── MATRIX DECOMPOSE ──────────────────────────────────────────────────────────
function decomposeMatrix(m) {
  const tx = m[12], ty = m[13], tz = m[14];
  const sx = Math.sqrt(m[0]*m[0] + m[1]*m[1] + m[2]*m[2]);
  const sy = Math.sqrt(m[4]*m[4] + m[5]*m[5] + m[6]*m[6]);
  const sz = Math.sqrt(m[8]*m[8] + m[9]*m[9] + m[10]*m[10]);

  const r = [
    m[0]/sx, m[1]/sx, m[2]/sx, 0,
    m[4]/sy, m[5]/sy, m[6]/sy, 0,
    m[8]/sz, m[9]/sz, m[10]/sz, 0,
    0, 0, 0, 1,
  ];

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

// ── EULER → QUATERNION ────────────────────────────────────────────────────────
const DEG2RAD = Math.PI / 180;

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

// ── COUNT SUBTREE ─────────────────────────────────────────────────────────────
function countSubtree(nodeIdx, nodes) {
  let count = 1;
  for (const child of (nodes[nodeIdx]?.children || []))
    count += countSubtree(child, nodes);
  return count;
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuf = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuf);

  const nodes = json.nodes || [];
  console.log(`    Total nodes: ${nodes.length}\n`);

  // Find the target node
  const targetIdx = nodes.findIndex(n => n.name === CONFIG.target);
  if (targetIdx === -1) {
    console.error(`❌  Node "${CONFIG.target}" not found.`);
    console.log('    Available top-level names:');
    nodes.slice(0, 20).forEach((n, i) => console.log(`      [${i}] ${n.name}`));
    process.exit(1);
  }

  const node       = nodes[targetIdx];
  const subtreeSize = countSubtree(targetIdx, nodes);

  console.log(`🎯  Found "${CONFIG.target}" at node[${targetIdx}]`);
  console.log(`    Subtree: ${subtreeSize} nodes (all will scale together)\n`);

  // Determine final scale values
  const finalScale = CONFIG.uniform
    ? [CONFIG.uniformScale, CONFIG.uniformScale, CONFIG.uniformScale]
    : [CONFIG.scale.x, CONFIG.scale.y, CONFIG.scale.z];

  // Get existing TRS
  let existing;
  if (node.matrix) {
    existing = decomposeMatrix(node.matrix);
    console.log(`    Node uses matrix — decomposing to TRS`);
    delete node.matrix;
  } else {
    existing = {
      T: node.translation ? [...node.translation] : [0, 0, 0],
      R: node.rotation    ? [...node.rotation]    : [0, 0, 0, 1],
      S: node.scale       ? [...node.scale]       : [1, 1, 1],
    };
  }

  // Combine scale: new = existing * config
  const newScale = [
    existing.S[0] * finalScale[0],
    existing.S[1] * finalScale[1],
    existing.S[2] * finalScale[2],
  ];

  // Combine translation: new = existing + offset
  const [ox, oy, oz] = CONFIG.positionOffset;
  const newTranslation = [
    existing.T[0] + ox,
    existing.T[1] + oy,
    existing.T[2] + oz,
  ];

  // Combine rotation: new = existing * override
  const [rdx, rdy, rdz] = CONFIG.rotationDeg;
  const ovQuat  = eulerToQuat(rdx, rdy, rdz);
  const newRotation = quatMultiply(existing.R, ovQuat);

  // Apply
  node.scale       = newScale;
  node.translation = newTranslation;
  node.rotation    = newRotation;

  // ── Report ────────────────────────────────────────────────────────────────
  console.log(`📐  Scale:`);
  if (CONFIG.uniform) {
    console.log(`    Uniform ×${CONFIG.uniformScale}`);
    console.log(`    [${existing.S.map(v=>v.toFixed(4)).join(', ')}]` +
      ` → [${newScale.map(v=>v.toFixed(4)).join(', ')}]`);
  } else {
    console.log(`    Width  (X): ${existing.S[0].toFixed(4)} × ${finalScale[0]} = ${newScale[0].toFixed(4)}`);
    console.log(`    Height (Y): ${existing.S[1].toFixed(4)} × ${finalScale[1]} = ${newScale[1].toFixed(4)}`);
    console.log(`    Depth  (Z): ${existing.S[2].toFixed(4)} × ${finalScale[2]} = ${newScale[2].toFixed(4)}`);
  }

  console.log(`\n📍  Translation:`);
  console.log(`    [${existing.T.map(v=>v.toFixed(4)).join(', ')}]` +
    ` → [${newTranslation.map(v=>v.toFixed(4)).join(', ')}]`);

  if (CONFIG.rotationDeg.some(v => v !== 0)) {
    console.log(`\n🔄  Rotation (${CONFIG.rotationDeg.join('°, ')}°):`);
    console.log(`    Q: [${newRotation.map(v=>v.toFixed(4)).join(', ')}]`);
  }

  // Write output
  const outJson = { ...json, nodes };
  const outBuf  = writeGLB(outJson, bin);

  await fs.mkdir(path.dirname(path.resolve(OUTPUT)), { recursive: true });
  await fs.writeFile(OUTPUT, outBuf);

  const sizeMB = (outBuf.byteLength / 1024 / 1024).toFixed(2);
  console.log(`\n✅  Written: ${OUTPUT}  (${sizeMB} MB)`);
  console.log(`    Binary unchanged — only exhibitStand_root transform baked.\n`);

  // ── Quick-reference for next iteration ───────────────────────────────────
  console.log(`    To iterate, update CONFIG in scale-exhibit.mjs:`);
  console.log(`    Current baked scale: [${newScale.map(v=>v.toFixed(4)).join(', ')}]`);
  console.log(`    Next run will multiply ON TOP of these values.`);
  console.log(`    To set absolute values, set existing.S to [1,1,1] manually.\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
