import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc   = await io.read('ramenShop-allgates.glb')
const root  = doc.getRoot()
const scene = root.listScenes()[0]

// ── Scale factor ──────────────────────────────────────────────────────────────
const SCALE = 2.0   // double everything — change this to any value e.g. 1.5, 3.0

// ── Wrap all current scene root nodes under one parent ────────────────────────
const sceneChildren = scene.listChildren()

const pivot = doc.createNode('scale_root')
pivot.setScale([SCALE, SCALE, SCALE])

scene.addChild(pivot)

sceneChildren.forEach(child => {
  scene.removeChild(child)
  pivot.addChild(child)
})

await io.write('ramenShop-scaled.glb', doc)

console.log(`✅ Written: ramenShop-scaled.glb`)
console.log(`   Scale factor: ${SCALE}x on all axes`)
console.log(`   Everything doubled — walls, gates, roof, all other nodes`)
