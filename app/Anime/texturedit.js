import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'
import fs from 'fs'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc = await io.read('house-water-transformed.glb')
const root = doc.getRoot()

const node   = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh   = node.getMesh()
const tvPrim = mesh.listPrimitives()[62]

const tvMat = tvPrim.getMaterial().clone()
tvMat.setName('tv_screen_material')
tvPrim.setMaterial(tvMat)

// Detach old texture first
tvMat.setBaseColorTexture(null)
console.log('Texture after null:', tvMat.getBaseColorTexture()) // must be null

// ── Option B: replace with your new image ──────────────────────────────────
const newImageData = fs.readFileSync('./house_water-2_carpet_627.jpg')  // ← put your image path here
const newTex = doc.createTexture('tv_screen_new')
  .setImage(new Uint8Array(newImageData))
  .setMimeType('image/jpeg')
tvMat.setBaseColorTexture(newTex)
tvMat.setBaseColorFactor([1.0, 1.0, 1.0, 1.0])

// Confirm
console.log('Final material :', tvMat.getName())
console.log('Final color    :', tvMat.getBaseColorFactor())
console.log('Final texture  :', tvMat.getBaseColorTexture()?.getName())

await io.write('house-modified.glb', doc)
console.log('Done — house-modified.glb written')
