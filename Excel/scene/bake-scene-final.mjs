// bake-scene-final.mjs
//
// Permanently bakes a scale/rotation/position transform onto the node
// named "scene-final" inside scene-optimized.glb.
//
// Usage:
//   node bake-scene-final.mjs ./models/scene-optimized.glb ./models/scene-optimized.baked.glb
//
// Values below come from the reference viewer output:
//   SCALE_X=0.530 SCALE_Y=0.460 SCALE_Z=0.320
//   OFFSET_X=-1.740 OFFSET_Y=-0.400 OFFSET_Z=0.500
//   ROT_X=0.0°   ROT_Y=0.0°   ROT_Z=0.0°

import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
import { prune } from '@gltf-transform/functions';
import draco3d from 'draco3dgltf';
import * as fs from 'fs';

const [, , inPathArg, outPathArg] = process.argv;

const inPath  = inPathArg  || './models/scene-optimized.glb';
const outPath = outPathArg || './models/scene-optimized.baked.glb';

const TARGET_NODE_NAME = 'scene-final';

// ── Transform values (edit here if you re-run with new numbers) ─────────────
const SCALE = { x: 0.530, y: 0.460, z: 0.320 };
const OFFSET = { x: 2.000, y: 1.000, z: 2.000 };
const ROT_DEG = { x: 0.0, y: 0.0, z: 0.0 };

function degToRad(d) { return (d * Math.PI) / 180; }

// Build a quaternion from XYZ Euler degrees (order: X then Y then Z)
function eulerToQuat({ x, y, z }) {
  const cx = Math.cos(degToRad(x) / 2), sx = Math.sin(degToRad(x) / 2);
  const cy = Math.cos(degToRad(y) / 2), sy = Math.sin(degToRad(y) / 2);
  const cz = Math.cos(degToRad(z) / 2), sz = Math.sin(degToRad(z) / 2);

  // XYZ order combination
  const qx = sx * cy * cz + cx * sy * sz;
  const qy = cx * sy * cz - sx * cy * sz;
  const qz = cx * cy * sz + sx * sy * cz;
  const qw = cx * cy * cz - sx * sy * sz;
  return [qx, qy, qz, qw];
}

async function main() {
  if (!fs.existsSync(inPath)) {
    console.error(`❌ Input file not found: ${inPath}`);
    console.error(`   Place scene-optimized.glb there, or pass a path as the first argument.`);
    process.exit(1);
  }

  const io = new NodeIO()
    .registerExtensions(ALL_EXTENSIONS)
    .registerDependencies({
      'draco3d.decoder': await draco3d.createDecoderModule(),
      'draco3d.encoder': await draco3d.createEncoderModule(),
    });

  const document = await io.read(inPath);
  const root = document.getRoot();

  // Find the target node by name (search all nodes in the document, not just scene roots)
  const allNodes = root.listNodes();
  const target = allNodes.find(n => n.getName() === TARGET_NODE_NAME);

  if (!target) {
    console.error(`❌ Could not find a node named "${TARGET_NODE_NAME}".`);
    console.error(`   Available node names in this file:`);
    allNodes.forEach(n => console.error(`     - ${n.getName() || '(unnamed)'}`));
    process.exit(1);
  }

  console.log(`✅ Found node "${TARGET_NODE_NAME}"`);
  console.log(`   current translation: ${target.getTranslation()}`);
  console.log(`   current scale:       ${target.getScale()}`);
  console.log(`   current rotation:    ${target.getRotation()}`);

  // Apply new transform directly onto this node's local TRS.
  // This REPLACES whatever transform it had — matching what you'd do by
  // setting sliders to these exact absolute values (not adding an offset
  // on top of the current one).
  target.setTranslation([OFFSET.x, OFFSET.y, OFFSET.z]);
  target.setScale([SCALE.x, SCALE.y, SCALE.z]);
  target.setRotation(eulerToQuat(ROT_DEG));

  console.log(`\n🔧 Applied new transform:`);
  console.log(`   translation: ${target.getTranslation()}`);
  console.log(`   scale:       ${target.getScale()}`);
  console.log(`   rotation:    ${target.getRotation()}`);

  // Clean up any now-unused resources (safe no-op if nothing changed)
  await document.transform(prune());

  await io.write(outPath, document);
  console.log(`\n✅ Baked GLB written to: ${outPath}`);
}

main().catch(err => {
  console.error('❌ Bake failed:', err);
  process.exit(1);
});
