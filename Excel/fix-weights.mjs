import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const inputFile = process.argv[2];
const outputFile = process.argv[3] || 'human-with-visemes-fixed.glb';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read(inputFile);
const root = doc.getRoot();

let fixedCount = 0;

for (const node of root.listNodes()) {
  const mesh = node.getMesh();
  if (mesh === null) continue;

  let targetCount = 0;
  for (const prim of mesh.listPrimitives()) {
    targetCount = Math.max(targetCount, prim.listTargets().length);
  }

  if (targetCount === 0) continue;

  const currentWeights = node.getWeights();
  if (currentWeights.length !== targetCount) {
    const newWeights = new Array(targetCount).fill(0);
    node.setWeights(newWeights);
    console.log(`Fixed node "${node.getName()}": weights ${currentWeights.length} -> ${targetCount}`);
    fixedCount++;
  }
}

console.log(`\nTotal nodes fixed: ${fixedCount}`);

await io.write(outputFile, doc);
console.log(`Written: ${outputFile}`);
