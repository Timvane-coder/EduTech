/**
 * bake-transforms.mjs
 *
 * Permanently bakes scale/offset/rotation values (captured from the live
 * scene editor) into each named node's actual transform inside
 * textured-parts-retextured-2.glb.
 *
 * Values are RELATIVE, matching how the viewer applies them:
 *   - SCALE_* is a multiplier on the node's existing scale
 *   - OFFSET_* is an additive delta on the node's existing position
 *   - ROT_* (degrees) is an additive delta on the node's existing rotation
 *
 * To update in the future: edit the TRANSFORMS object below with new
 * values copied from the live editor, then re-run this script against
 * the SAME input file each time — it always applies on top of whatever
 * the file's current baked state is, exactly like the live viewer does
 * relative to the loaded scene.
 *
 * Usage:
 *   node bake-transforms.mjs
 */

import { NodeIO }         from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { promises as fs } from 'fs';
import path from 'path';

const INPUT  = './models/parts/textured-parts-retextured-2.glb';
const OUTPUT = './models/parts/textured-parts-retextured-2.glb'; // overwrite in place

// ─── TRANSFORMS ──────────────────────────────────────────────────────────────
// Keyed by the REAL glTF node name (not the Three.js-mangled name shown in
// the browser viewer). Mapping confirmed against the raw scene.gltf names
// used throughout this project.

const TRANSFORMS = {
  'aorus case fans_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 5.6500, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.001_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 5.1000, y: 2.7500, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.002_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 6.9500, y: 0.0500, z: -4.9500 },
    rotDeg: { x: 0.0,    y: -90.0,  z: 0.0 },
  },
  'aorus case fans.003_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 4.3000, y: 0.3500, z: 1.4000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.004_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 0.0000, y: 1.6500, z: 3.4000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.005_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 3.8000, y: 1.9500, z: 2.4500 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.006_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 3.8000, y: 0.0000, z: 0.0000 },
    rotDeg: { x: -90.0,  y: 90.0,   z: 0.0 },
  },
  'aorus case fans.007_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -1.0000, y: -1.8000, z: 0.0500 },
    rotDeg: { x: 0.0,    y: -90.0,  z: 90.0 },
  },
  'aorus case fans.008_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 7.7500, y: -2.0500, z: 0.6000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'aorus case fans.009_aorus case fans_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 1.4000, y: -1.2500, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'rgb-hdd-cover-aorus-v1_rgb-hdd-cover-aorus-v1_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 10.1500, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'maxresdefault (1)_maxresdefault (1)_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -7.1000, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'NVIDIA LOGO_NVIDIA LOGO_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -4.9500, y: 3.5000, z: 7.2500 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'geforcertx_Material.056_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 20.5000, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'Torus_Material.013_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 1.9500, y: -2.0500, z: -21.4000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'Torus.001_Material.032_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 0.0000, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'aorus logotranspa_aorus logotranspa_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -2.8500, y: 0.0000, z: 9.9000 },
    rotDeg: { x: 0.0,    y: 45.0,   z: 0.0 },
  },
  'Color-PewDiePie-Logo_Color-PewDiePie-Logo_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 7.2500, y: 1.9500, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'Text.001_Material.097_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 11.2000, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'gigabyte-logo_gigabyte-logo_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -1.2500, y: 0.3500, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'gigabyte-logo.001_gigabyte-logo_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 15.2000, y: 11.2000, z: -12.9500 },
    rotDeg: { x: 0.0,    y: 90.0,   z: 0.0 },
  },
  'test-aorus-m2-souris-aorus-rgb2_test-aorus-m2-souris-aorus-rgb2_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: 10.1500, y: 0.0000, z: 0.0000 },
    rotDeg: { x: 0.0,    y: 0.0,    z: 0.0 },
  },
  'gallerymodel_gallerymodel_0': {
    scale:  { x: 1.0000, y: 1.0000, z: 1.0000 },
    offset: { x: -16.4000, y: 2.4500, z: -1.8000 },
    rotDeg: { x: 90.0,   y: -90.0,  z: 0.0 },
  },
};

// ─── HELPERS ─────────────────────────────────────────────────────────────────

const DEG2RAD = Math.PI / 180;

// Convert Euler XYZ (radians) to a quaternion (x,y,z,w) — matches
// Three.js's default 'XYZ' Euler order, which the live editor uses.
function eulerXYZToQuat(ex, ey, ez) {
  const cx = Math.cos(ex / 2), sx = Math.sin(ex / 2);
  const cy = Math.cos(ey / 2), sy = Math.sin(ey / 2);
  const cz = Math.cos(ez / 2), sz = Math.sin(ez / 2);

  // XYZ order composition (matches THREE.Euler default 'XYZ')
  return [
    sx * cy * cz + cx * sy * sz,
    cx * sy * cz - sx * cy * sz,
    cx * cy * sz + sx * sy * cz,
    cx * cy * cz - sx * sy * sz,
  ];
}

function quatToEulerXYZ(q) {
  const [x, y, z, w] = q;
  // Standard XYZ Euler extraction from quaternion
  const sinp = 2 * (w * y - z * x);
  let ex, ey, ez;

  ey = Math.asin(Math.max(-1, Math.min(1, sinp)));

  if (Math.abs(sinp) < 0.9999) {
    ex = Math.atan2(2 * (w * x + y * z), 1 - 2 * (x * x + y * y));
    ez = Math.atan2(2 * (w * z + x * y), 1 - 2 * (y * y + z * z));
  } else {
    // Gimbal lock fallback
    ex = Math.atan2(2 * (w * x - y * z), 1 - 2 * (x * x + z * z));
    ez = 0;
  }
  return [ex, ey, ez];
}

function multiplyQuat(a, b) {
  const [ax, ay, az, aw] = a;
  const [bx, by, bz, bw] = b;
  return [
    aw * bx + ax * bw + ay * bz - az * by,
    aw * by - ax * bz + ay * bw + az * bx,
    aw * bz + ax * by - ay * bx + az * bw,
    aw * bw - ax * bx - ay * by - az * bz,
  ];
}

// ─── MAIN ─────────────────────────────────────────────────────────────────────

async function main() {
  const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

  console.log(`\n📂  Reading ${INPUT} …`);
  const doc  = await io.read(INPUT);
  const root = doc.getRoot();

  let baked = 0;
  let missing = 0;

  for (const [nodeName, t] of Object.entries(TRANSFORMS)) {
    const node = root.listNodes().find(n => n.getName() === nodeName);
    if (!node) {
      console.error(`❌  Node "${nodeName}" not found — skipping`);
      missing++;
      continue;
    }

    // ── SCALE: multiply existing scale by the given multiplier ──
    const curScale = node.getScale(); // [x, y, z]
    node.setScale([
      curScale[0] * t.scale.x,
      curScale[1] * t.scale.y,
      curScale[2] * t.scale.z,
    ]);

    // ── POSITION: add the offset to existing position ──
    const curPos = node.getTranslation(); // [x, y, z]
    node.setTranslation([
      curPos[0] + t.offset.x,
      curPos[1] + t.offset.y,
      curPos[2] + t.offset.z,
    ]);

    // ── ROTATION: add the rotation delta (as Euler XYZ) to existing rotation ──
    const curQuat = node.getRotation(); // [x, y, z, w]
    const curEuler = quatToEulerXYZ(curQuat);
    const deltaQuat = eulerXYZToQuat(
      t.rotDeg.x * DEG2RAD,
      t.rotDeg.y * DEG2RAD,
      t.rotDeg.z * DEG2RAD,
    );
    // Compose: new = delta * current (apply delta on top of existing,
    // matching THREE.Object3D.rotation.set(base + delta) behavior when
    // base and delta share the same XYZ order)
    const newQuat = multiplyQuat(deltaQuat, curQuat);
    node.setRotation(newQuat);

    console.log(`✅  ${nodeName}`);
    console.log(`     scale  → [${node.getScale().map(v => v.toFixed(4)).join(', ')}]`);
    console.log(`     pos    → [${node.getTranslation().map(v => v.toFixed(4)).join(', ')}]`);
    console.log(`     rotQ   → [${node.getRotation().map(v => v.toFixed(4)).join(', ')}]`);
    baked++;
  }

  console.log(`\n📋  Baked: ${baked}  Missing: ${missing}`);

  if (baked === 0) {
    console.error('\n❌  Nothing was baked — check node names above');
    process.exit(1);
  }

  await fs.mkdir(path.dirname(OUTPUT), { recursive: true });
  await io.write(OUTPUT, doc);
  console.log(`\n✅  Saved → ${OUTPUT}`);
  console.log('\n🎉  Done!');
}

main().catch(err => { console.error('❌', err); process.exit(1); });
