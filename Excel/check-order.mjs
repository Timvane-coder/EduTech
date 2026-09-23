// check-order.mjs
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';
const doc = await new NodeIO().registerExtensions(ALL_EXTENSIONS).read(process.argv[2]);
doc.getRoot().listAnimations().forEach((a, i) =>
  console.log(`${i + 1}. "${a.getName() || '(unnamed)'}"`)
);

