import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const inputFile = process.argv[2];
if (!inputFile) {
  console.error('Usage: node check-weights.mjs <file.glb>');
  process.exit(1);
}

const doc = await new NodeIO().registerExtensions(ALL_EXTENSIONS).read(inputFile);
const root = doc.getRoot();

for (const node of root.listNodes()) {
  const mesh = node.getMesh();
  if (mesh === null) continue;
  const weights = node.getWeights ? node.getWeights() : null;
  const weightCount = weights ? weights.length : 0;
  let targetCount = 0;
  for (const prim of mesh.listPrimitives()) {
    targetCount = Math.max(targetCount, prim.listTargets().length);
  }
  console.log('Node:', node.getName(), '| mesh:', mesh.getName(), '| targets:', targetCount, '| weights:', weightCount, '| match:', targetCount === weightCount);
}
