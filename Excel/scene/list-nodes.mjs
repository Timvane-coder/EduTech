// list-nodes.mjs
import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);
const doc = await io.read('./models/parts/textured-parts.glb');

for (const n of doc.getRoot().listNodes()) {
  console.log(n.getName(), n.getMesh() ? '(has mesh)' : '');
}
