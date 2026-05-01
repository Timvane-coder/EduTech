import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc = await io.read('house-water-transformed.glb')
const root = doc.getRoot()

const node  = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh  = node.getMesh()
const scale = node.getScale()

console.log(`Node scale: [${scale.join(', ')}]`)
console.log(`Total primitives: ${mesh.listPrimitives().length}`)
console.log('\n====== ALL PRIMITIVES ======')

mesh.listPrimitives().forEach((prim, i) => {
  const mat     = prim.getMaterial()
  const matName = mat?.getName() ?? '(none)'
  const pos     = prim.getAttribute('POSITION')
  const count   = pos?.getCount() ?? 0

  let minX = Infinity,  minY = Infinity,  minZ = Infinity
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity

  if (pos) {
    for (let v = 0; v < count; v++) {
      const val = pos.getElement(v, [])
      if (val[0] < minX) minX = val[0]
      if (val[0] > maxX) maxX = val[0]
      if (val[1] < minY) minY = val[1]
      if (val[1] > maxY) maxY = val[1]
      if (val[2] < minZ) minZ = val[2]
      if (val[2] > maxZ) maxZ = val[2]
    }
  }

  const cx = ((minX + maxX) / 2 * scale[0]).toFixed(2)
  const cy = ((minY + maxY) / 2 * scale[1]).toFixed(2)
  const cz = ((minZ + maxZ) / 2 * scale[2]).toFixed(2)

  console.log(`Primitive[${i}]  mat: "${matName}"  verts: ${count}  center: [${cx}, ${cy}, ${cz}]`)
})
