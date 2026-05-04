import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc  = await io.read('house-modified.glb')
const root = doc.getRoot()
const node = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh = node.getMesh()
const scale = node.getScale()
const RAW   = 1 / scale[0]

// ── Exact footprint from scan ─────────────────────────────────────────────────



const xMin    =  0.646
const xMax    = 14.709
const zMin    =  2.500
const zMax    =  5.000
const yBottom = -6.23
const yTop    =  6.25


function makeQuad(doc, mesh, verts, material) {
  const raw = verts.map(v => v.map(c => c * RAW))

  const positions = new Float32Array([
    ...raw[0], ...raw[1], ...raw[2],
    ...raw[0], ...raw[2], ...raw[3],
  ])

  const e1 = [raw[1][0]-raw[0][0], raw[1][1]-raw[0][1], raw[1][2]-raw[0][2]]
  const e2 = [raw[3][0]-raw[0][0], raw[3][1]-raw[0][1], raw[3][2]-raw[0][2]]
  const nx  = e1[1]*e2[2] - e1[2]*e2[1]
  const ny  = e1[2]*e2[0] - e1[0]*e2[2]
  const nz  = e1[0]*e2[1] - e1[1]*e2[0]
  const len = Math.sqrt(nx*nx + ny*ny + nz*nz) || 1
  const n   = [nx/len, ny/len, nz/len]

  const normals = new Float32Array([...n,...n,...n,...n,...n,...n])
  const uvs     = new Float32Array([0,1, 1,1, 1,0, 0,1, 1,0, 0,0])

  const prim = doc.createPrimitive()
    .setAttribute('POSITION',   doc.createAccessor().setType('VEC3').setArray(positions))
    .setAttribute('NORMAL',     doc.createAccessor().setType('VEC3').setArray(normals))
    .setAttribute('TEXCOORD_0', doc.createAccessor().setType('VEC2').setArray(uvs))

  if (material) prim.setMaterial(material)
  mesh.addPrimitive(prim)
  return prim
}

const allMats   = root.listMaterials()
const findMat   = name => allMats.find(m => m.getName() === name) ?? allMats[0]
const matGlass  = findMat('glassblutint')
const matGround = findMat('ground_1')

console.log(`Building single tall box:`)
console.log(`  X: ${xMin} → ${xMax}`)
console.log(`  Y: ${yBottom} → ${yTop}`)
console.log(`  Z: ${zMin} → ${zMax}`)

// Floor slab (bottom)
makeQuad(doc, mesh, [
  [xMin, yBottom, zMin],
  [xMax, yBottom, zMin],
  [xMax, yBottom, zMax],
  [xMin, yBottom, zMax],
], matGround)

// Ceiling slab (top) — flush with underside of original basement
makeQuad(doc, mesh, [
  [xMin, yTop, zMax],
  [xMax, yTop, zMax],
  [xMax, yTop, zMin],
  [xMin, yTop, zMin],
], matGround)

// Front wall (Z = zMin)
makeQuad(doc, mesh, [
  [xMin, yTop,    zMin],
  [xMax, yTop,    zMin],
  [xMax, yBottom, zMin],
  [xMin, yBottom, zMin],
], matGlass)

// Back wall (Z = zMax)
makeQuad(doc, mesh, [
  [xMax, yTop,    zMax],
  [xMin, yTop,    zMax],
  [xMin, yBottom, zMax],
  [xMax, yBottom, zMax],
], matGlass)

// Left wall (X = xMin)
makeQuad(doc, mesh, [
  [xMin, yTop,    zMax],
  [xMin, yTop,    zMin],
  [xMin, yBottom, zMin],
  [xMin, yBottom, zMax],
], matGlass)

// Right wall (X = xMax)
makeQuad(doc, mesh, [
  [xMax, yTop,    zMin],
  [xMax, yTop,    zMax],
  [xMax, yBottom, zMax],
  [xMax, yBottom, zMin],
], matGlass)

console.log(`\n✅  6 faces built`)
console.log(`Total primitives now : ${mesh.listPrimitives().length}`)

await io.write('house-modified-2.glb', doc)
console.log('\nDone — house-modified-2.glb written')
