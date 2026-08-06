/**
 * lift-nodes.mjs
 *
 * Moves a specific set of nodes upward by adding a Y offset to their
 * existing translation. All other nodes in the GLB are untouched.
 *
 * Works at raw JSON level — binary is passed through unchanged.
 *
 * Usage:
 *   node lift-nodes.mjs
 *
 * Input:  ./models/ramenShop_uvrestored_v2_tv.glb
 * Output: ./models/ramenShop_uvrestored_v2_lifted.glb
 */

import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/ramenShop_uvrestored_v2_cleaned.glb';
const OUTPUT = './models/ramenShop_uvrestored_v2_lifted.glb';

// ── LIFT CONFIG ───────────────────────────────────────────────────────────────
// Each group can have a different Y lift amount.
// Add more groups or change amounts freely.
// Only nodes whose name is in this list will be moved.

const LIFT_GROUPS = [

  // Ramen shop main structure chunks
  {
    yOffset: 2.5,   // ← adjust this value to taste
    nodes: new Set([
      'chunk_4',
      'chunk_6',
      'chunk_10',
      'chunk_11',
      'chunk_12',
      'chunk_22',
      'chunk_28',
      'chunk_29',
      'chunk_30',
    ]),
  },

  // Screens
  {
    yOffset: 2.5,   // ← same lift or change independently
    nodes: new Set([
      'bigScreen',
      'sideScreen',
      'smallScreen3',
      'tallScreen',
      'tvScreen',
      'smallScreen1',
      'smallScreen2',
      'smallScreen4',
    ]),
  },

  // Decor
  {
    yOffset: 2.5,
    nodes: new Set([
      'fan1',
      'fan2',
      'dish',
      'dishStand',
    ]),
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

// ── MATRIX DECOMPOSE (for nodes that store a matrix instead of TRS) ───────────
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

// ── APPLY Y LIFT TO ONE NODE ──────────────────────────────────────────────────
function liftNode(node, yOffset) {
  const before = node.translation
    ? node.translation[1]
    : node.matrix
    ? node.matrix[13]
    : 0;

  if (node.matrix) {
    // Decompose → modify T → rewrite as TRS
    const { T, R, S } = decomposeMatrix(node.matrix);
    delete node.matrix;
    node.translation = [T[0], T[1] + yOffset, T[2]];
    node.rotation    = R;
    node.scale       = S;
  } else {
    // Already TRS
    const t = node.translation ? [...node.translation] : [0, 0, 0];
    t[1] += yOffset;
    node.translation = t;
    // rotation and scale stay as-is
  }

  const after = node.translation[1];
  return { before, after };
}

// ── MAIN ──────────────────────────────────────────────────────────────────────
async function main() {
  console.log(`\n📂  Reading ${INPUT} …`);
  const srcBuf = await fs.readFile(INPUT);
  const { json, bin } = parseGLB(srcBuf);

  const nodes = json.nodes || [];
  console.log(`    Total nodes: ${nodes.length}\n`);

  // Build a name → [indices] map
  const byName = new Map();
  for (let i = 0; i < nodes.length; i++) {
    const name = nodes[i].name ?? '';
    if (!byName.has(name)) byName.set(name, []);
    byName.get(name).push(i);
  }

  // Build a flat lookup: nodeName → yOffset
  const liftMap = new Map();
  for (const group of LIFT_GROUPS) {
    for (const name of group.nodes) {
      liftMap.set(name, group.yOffset);
    }
  }

  let moved = 0;
  let notFound = 0;

  // Process each group separately so output is grouped nicely
  for (const group of LIFT_GROUPS) {
    console.log(`── Y +${group.yOffset} ─────────────────────────────────`);

    for (const targetName of group.nodes) {
      const indices = byName.get(targetName);

      if (!indices || indices.length === 0) {
        console.log(`  ⚠️   NOT FOUND: "${targetName}"`);
        notFound++;
        continue;
      }

      for (const idx of indices) {
        const node   = nodes[idx];
        const result = liftNode(node, group.yOffset);
        console.log(`  ✅  "${targetName}"  [${idx}]` +
          `  Y: ${result.before.toFixed(4)} → ${result.after.toFixed(4)}`);
        moved++;
      }
    }
    console.log('');
  }

  // Write output — binary passes through unchanged
  const outJson = { ...json, nodes };
  const outBuf  = writeGLB(outJson, bin);

  await fs.mkdir(path.dirname(path.resolve(OUTPUT)), { recursive: true });
  await fs.writeFile(OUTPUT, outBuf);

  console.log(`📊  Moved ${moved} node(s)  (${notFound} not found)`);
  console.log(`    Size: ${(srcBuf.byteLength/1024/1024).toFixed(2)} MB` +
    ` → ${(outBuf.byteLength/1024/1024).toFixed(2)} MB  (binary unchanged)`);
  console.log(`\n✅  Written: ${OUTPUT}\n`);
}

main().catch(err => { console.error('❌', err); process.exit(1); });
