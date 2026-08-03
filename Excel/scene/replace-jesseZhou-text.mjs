// replace-jesseZhou-text.mjs
//
// Replaces the geometry of the "jesseZhouJoined" node/mesh in ramenShop-final.gltf
// with new flat-extruded 3D text, keeping the same node/transform/material slot.
//
// Requires:
//   npm install @gltf-transform/core @gltf-transform/extensions @gltf-transform/functions three
//
// You also need a JSON typeface font for three.js TextGeometry. Bold sans-serif:
// download "helvetiker_bold.typeface.json" from three.js examples/fonts, e.g.:
//   https://raw.githubusercontent.com/mrdoob/three.js/dev/examples/fonts/helvetiker_bold.typeface.json
// Save it next to this script as ./helvetiker_bold.typeface.json

import { NodeIO, Document } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import * as THREE from 'three';
import { FontLoader } from 'three/examples/jsm/loaders/FontLoader.js';
import { TextGeometry } from 'three/examples/jsm/geometries/TextGeometry.js';
import fs from 'fs';

const INPUT_PATH = './models/ramenShop-final.gltf';
const OUTPUT_PATH = './models/ramenShop-final-updated.gltf';
const FONT_PATH = './helvetiker_bold.typeface.json';
const TARGET_NODE_NAME = 'jesseZhouJoined';

// --- 1. Define the new text lines ---
// title line is bigger/bolder, subsequent lines are the "role" list

const TITLE_LINE = { text: 'Claude AI', size: 1.4, height: 0.0007 };
const SUB_LINES = [
  { text: 'Mythos', size: 0.9, height: 0.0007 },
  { text: 'Opus', size: 0.9, height: 0.0007 },
  { text: 'Fable', size: 0.9, height: 0.0007 },
  { text: 'Sonnet', size: 0.9, height: 0.0007 },
  { text: 'Haiku', size: 0.9, height: 0.0007 },
];

const LINE_SPACING = 1.15; // vertical gap between lines, in local units (Z axis, since text lies flat in XZ)

// --- 2. Load font ---
const fontJson = JSON.parse(fs.readFileSync(FONT_PATH, 'utf-8'));
const font = new FontLoader().parse(fontJson);

// --- 3. Helper: build a flat three.js BufferGeometry for one line of text ---
function buildLineGeometry(line, zOffset) {
  const geo = new TextGeometry(line.text, {
    font,
    size: line.size,
    height: line.height,
    curveSegments: 4,
    bevelEnabled: false,
  });

  geo.rotateX(Math.PI / 2);

  // Fix mirroring: flip horizontally by negating X scale
  geo.scale(-1, 1, 1);

  // Fix upside-down: rotate 180° around the now-vertical axis (Y, since text lies flat in XZ)
  geo.rotateY(Math.PI);

  geo.computeVertexNormals();
  geo.translate(0, 0, zOffset);
  geo.computeBoundingBox();
  return geo;
}

// --- 4. Build all lines and merge into one geometry ---
const allLines = [TITLE_LINE, ...SUB_LINES];
const geometries = [];
let zCursor = 0;

for (const line of allLines) {
  const geo = buildLineGeometry(line, -zCursor);
  geometries.push(geo);
  zCursor += LINE_SPACING;
}

// Manual merge (avoids needing BufferGeometryUtils): concatenate positions/normals/uvs/indices
function mergeGeometries(geoList) {
  let posArr = [];
  let normArr = [];
  let uvArr = [];
  let idxArr = [];
  let vertexOffset = 0;

  for (const geo of geoList) {
    const pos = geo.getAttribute('position');
    const norm = geo.getAttribute('normal');
    const uv = geo.getAttribute('uv');
    const idx = geo.getIndex();

    for (let i = 0; i < pos.count; i++) {
      posArr.push(pos.getX(i), pos.getY(i), pos.getZ(i));
      if (norm) normArr.push(norm.getX(i), norm.getY(i), norm.getZ(i));
      if (uv) uvArr.push(uv.getX(i), uv.getY(i));
    }

    if (idx) {
      for (let i = 0; i < idx.count; i++) {
        idxArr.push(idx.getX(i) + vertexOffset);
      }
    } else {
      for (let i = 0; i < pos.count; i++) idxArr.push(i + vertexOffset);
    }

    vertexOffset += pos.count;
  }

  return {
    positions: new Float32Array(posArr),
    normals: normArr.length ? new Float32Array(normArr) : null,
    uvs: uvArr.length ? new Float32Array(uvArr) : null,
    indices: idxArr.every(v => v < 65536) ? new Uint16Array(idxArr) : new Uint32Array(idxArr),
  };
}

const merged = mergeGeometries(geometries);

console.log(`Built merged text geometry: ${merged.positions.length / 3} vertices, ${merged.indices.length / 3} triangles`);

// --- 5. Load the glTF, find the target node/mesh/primitive, swap its accessors ---
const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(INPUT_PATH);
const root = doc.getRoot();

const node = root.listNodes().find(n => n.getName() === TARGET_NODE_NAME);
if (!node) {
  throw new Error(`Node "${TARGET_NODE_NAME}" not found in ${INPUT_PATH}`);
}

const mesh = node.getMesh();
if (!mesh) {
  throw new Error(`Node "${TARGET_NODE_NAME}" has no mesh.`);
}

const prim = mesh.listPrimitives()[0];
if (!prim) {
  throw new Error(`Mesh on "${TARGET_NODE_NAME}" has no primitives.`);
}

console.log('Existing material on primitive:', prim.getMaterial()?.getName());

// Create new accessors for the merged geometry
const buffer = root.listBuffers()[0]; // reuse existing buffer

const posAccessor = doc.createAccessor('jesseZhouReplacement_POSITION')
  .setType('VEC3')
  .setArray(merged.positions)
  .setBuffer(buffer);

prim.setAttribute('POSITION', posAccessor);

if (merged.normals) {
  const normAccessor = doc.createAccessor('jesseZhouReplacement_NORMAL')
    .setType('VEC3')
    .setArray(merged.normals)
    .setBuffer(buffer);
  prim.setAttribute('NORMAL', normAccessor);
} else {
  prim.setAttribute('NORMAL', null);
}

if (merged.uvs) {
  const uvAccessor = doc.createAccessor('jesseZhouReplacement_TEXCOORD_0')
    .setType('VEC2')
    .setArray(merged.uvs)
    .setBuffer(buffer);
  prim.setAttribute('TEXCOORD_0', uvAccessor);
}

const idxAccessor = doc.createAccessor('jesseZhouReplacement_INDICES')
  .setType('SCALAR')
  .setArray(merged.indices)
  .setBuffer(buffer);
prim.setIndices(idxAccessor);

// Material stays as-is (default.026, flat white) — no changes needed there,
// since baseColorFactor [1,1,1,1] already gives plain white text.

// --- 6. Write output ---
await io.write(OUTPUT_PATH, doc);
console.log(`Done. Wrote ${OUTPUT_PATH}`);
