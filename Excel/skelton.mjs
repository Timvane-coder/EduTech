import { NodeIO } from '@gltf-transform/core';

async function checkSkeleton(path) {
  const io = new NodeIO();
  const document = await io.read(path);
  const root = document.getRoot();

  const skins = root.listSkins();

  if (skins.length === 0) {
    console.log('❌ No skeleton found (no skins in file).');
    return;
  }

  console.log(`✅ Found ${skins.length} skin(s)/skeleton(s).\n`);

  skins.forEach((skin, i) => {
    const joints = skin.listJoints();
    console.log(`Skin ${i} — "${skin.getName() || 'unnamed'}" — ${joints.length} bones:`);
    joints.forEach((joint, idx) => {
      console.log(`  ${idx}: ${joint.getName() || '(unnamed)'}`);
    });
    console.log('');
  });

  // Also list any nodes that look like bones but aren't in a skin (rare, but useful)
  const skinnedMeshes = root.listMeshes().filter(mesh =>
    root.listNodes().some(n => n.getMesh() === mesh && n.getSkin())
  );
  console.log(`Skinned meshes: ${skinnedMeshes.length}`);
}

checkSkeleton('avaturn_look_final.glb').catch(console.error);
