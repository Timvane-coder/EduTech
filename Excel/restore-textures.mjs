import { NodeIO } from '@gltf-transform/core';
import { ALL_EXTENSIONS } from '@gltf-transform/extensions';

const sourceFile = process.argv[2];      // avaturn.glb
const targetFile = process.argv[3];      // avatar_with_walk_fixed.glb
const outputFile = process.argv[4] || 'avatar_with_walk_textured.glb';

const io = new NodeIO().registerExtensions(ALL_EXTENSIONS);

const sourceDoc = await io.read(sourceFile);
const targetDoc = await io.read(targetFile);

const sourceRoot = sourceDoc.getRoot();
const targetRoot = targetDoc.getRoot();

const sourceMaterialsByName = new Map();
for (const mat of sourceRoot.listMaterials()) {
  sourceMaterialsByName.set(mat.getName(), mat);
}

// Special-case name corrections where Blender's FBX round-trip
// auto-renamed a duplicate material (e.g. "Teeth.001" instead of "Teeth")
const NAME_OVERRIDES = {
  'Teeth.001': 'Teeth',
};

const meshesToFix = ['Eye_Mesh', 'EyeAO_Mesh', 'Eyelash_Mesh', 'Teeth_Mesh', 'Tongue_Mesh', 'avaturn_hair_0', 'avaturn_hair_1'];

// gltf-transform can copy a material from one Document into another
// using Document.merge or by cloning the material's full node graph.
// The cleanest supported way is to use the `copy` utility on the
// target document, pulling in the material (and its texture
// dependencies) from the source document.
let replacedCount = 0;

for (const mesh of targetRoot.listMeshes()) {
  if (!meshesToFix.includes(mesh.getName())) continue;

  for (const prim of mesh.listPrimitives()) {
    const currentMat = prim.getMaterial();
    const currentName = currentMat ? currentMat.getName() : null;
    const lookupName = NAME_OVERRIDES[currentName] || currentName;

    const sourceMat = sourceMaterialsByName.get(lookupName);
    if (!sourceMat) {
      console.warn(`No source material found for "${lookupName}" (mesh: ${mesh.getName()}) — skipping`);
      continue;
    }

    // Copy the source material into the target document. gltf-transform's
    // Document has a built-in `.clone()`-style copy via the transfer
    // utility - simplest reliable approach: use targetDoc's own
    // createMaterial and copy properties + textures manually, since a
    // direct cross-document reference isn't valid (materials must
    // belong to the document they're attached in).
    const newMat = targetDoc.createMaterial(sourceMat.getName());

    newMat.setBaseColorFactor(sourceMat.getBaseColorFactor());
    newMat.setMetallicFactor(sourceMat.getMetallicFactor());
    newMat.setRoughnessFactor(sourceMat.getRoughnessFactor());
    newMat.setAlphaMode(sourceMat.getAlphaMode());
    newMat.setAlphaCutoff(sourceMat.getAlphaCutoff());
    newMat.setDoubleSided(sourceMat.getDoubleSided());

    // Copy textures (base color, normal, etc.) - these need their
    // image data copied into the target document too, not just
    // referenced, since textures belong to a specific Document.
    const texSlots = [
      ['baseColorTexture', sourceMat.getBaseColorTexture(), newMat.setBaseColorTexture.bind(newMat)],
      ['normalTexture', sourceMat.getNormalTexture(), newMat.setNormalTexture.bind(newMat)],
      ['metallicRoughnessTexture', sourceMat.getMetallicRoughnessTexture(), newMat.setMetallicRoughnessTexture.bind(newMat)],
      ['emissiveTexture', sourceMat.getEmissiveTexture(), newMat.setEmissiveTexture.bind(newMat)],
    ];

    for (const [slotName, sourceTex, setter] of texSlots) {
      if (!sourceTex) continue;
      const newTex = targetDoc.createTexture(sourceTex.getName());
      newTex.setImage(sourceTex.getImage());
      newTex.setMimeType(sourceTex.getMimeType());
      setter(newTex);
      console.log(`  Copied ${slotName} for material "${sourceMat.getName()}"`);
    }

    prim.setMaterial(newMat);
    replacedCount++;
    console.log(`Replaced material on mesh "${mesh.getName()}": ${currentName} -> ${sourceMat.getName()} (from source)`);
  }
}

console.log(`\nTotal materials replaced: ${replacedCount}`);

await io.write(outputFile, targetDoc);
console.log(`Written: ${outputFile}`);
