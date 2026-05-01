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

const node = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh = node.getMesh()

// All materials that have textures
const texturedMats = [
  '396',
  'Oriental_rug',
  'carpet_627',
  'Bathmat',
  'Material_LakeMoraine',
  '640',
  '643',
  'Picture_1',
  'Picture_5',
  '651',             // TV — already done
  'Aluminium_652',
  'Material_Etretat',
  'black_656',
  'cueEnd',
  'cueFront',
  'ballN1','ballN2','ballN3','ballN4','ballN5','ballN6','ballN7',
  'ballN8','ballN9','ballN10','ballN11','ballN12','ballN13','ballN14','ballN15',
  'BoisClair',
  'sweethome3d_window_mirror_902',
]

console.log('\n====== TEXTURED PRIMITIVES MAP ======\n')

mesh.listPrimitives().forEach((prim, i) => {
  const mat = prim.getMaterial()
  if (!mat) return
  const name = mat.getName()
  if (!texturedMats.includes(name)) return

  const pos = prim.getAttribute('POSITION')
  let cx = 'n/a', cy = 'n/a', cz = 'n/a'
  if (pos) {
    let minX = Infinity, minY = Infinity, minZ = Infinity
    let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity
    for (let v = 0; v < pos.getCount(); v++) {
      const val = pos.getElement(v, [])
      if (val[0] < minX) minX = val[0]
      if (val[0] > maxX) maxX = val[0]
      if (val[1] < minY) minY = val[1]
      if (val[1] > maxY) maxY = val[1]
      if (val[2] < minZ) minZ = val[2]
      if (val[2] > maxZ) maxZ = val[2]
    }
    cx = ((minX + maxX) / 2 * 0.01).toFixed(2)
    cy = ((minY + maxY) / 2 * 0.01).toFixed(2)
    cz = ((minZ + maxZ) / 2 * 0.01).toFixed(2)
  }

  const tex = mat.getBaseColorTexture()
  console.log(`Primitive[${i}]`)
  console.log(`  Material : "${name}"`)
  console.log(`  Texture  : "${tex?.getName() ?? 'none'}"`)
  console.log(`  Center   : [${cx}, ${cy}, ${cz}]  (real world coords)`)
  console.log(`  Vertices : ${pos?.getCount() ?? 0}`)
  console.log()
})
