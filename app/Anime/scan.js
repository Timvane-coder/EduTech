import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc  = await io.read('house-water-transformed.glb')
const root = doc.getRoot()
const node  = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh  = node.getMesh()
const scale = node.getScale()

// ── Floor definitions by Y CENTER (real world metres) ───────────────────────
const FLOORS = [
  { name: 'BASEMENT / LOWER',  minY: -Infinity, maxY:  1.99 },
  { name: 'FIRST FLOOR',       minY:  2.00,     maxY:  4.49 },
  { name: 'SECOND FLOOR',      minY:  4.50,     maxY:  6.99 },
  { name: 'ROOF / ATTIC',      minY:  7.00,     maxY:  Infinity },
]

// Bucket to hold results per floor
const floorBuckets = FLOORS.map(f => ({ ...f, primitives: [] }))
const spanMultiple  = []  // primitives whose Y span crosses floor boundaries

mesh.listPrimitives().forEach((prim, i) => {
  const pos = prim.getAttribute('POSITION')
  if (!pos) return

  let minY =  Infinity
  let maxY = -Infinity
  let minX =  Infinity, maxX = -Infinity
  let minZ =  Infinity, maxZ = -Infinity

  for (let v = 0; v < pos.getCount(); v++) {
    const val = pos.getElement(v, [])
    if (val[0] < minX) minX = val[0]
    if (val[0] > maxX) maxX = val[0]
    if (val[1] < minY) minY = val[1]
    if (val[1] > maxY) maxY = val[1]
    if (val[2] < minZ) minZ = val[2]
    if (val[2] > maxZ) maxZ = val[2]
  }

  const cx    = ((minX + maxX) / 2 * scale[0])
  const cy    = ((minY + maxY) / 2 * scale[1])
  const cz    = ((minZ + maxZ) / 2 * scale[2])
  const sX    = ((maxX - minX) * scale[0]).toFixed(2)
  const sY    = ((maxY - minY) * scale[1]).toFixed(2)
  const sZ    = ((maxZ - minZ) * scale[2]).toFixed(2)
  const realMinY = minY * scale[1]
  const realMaxY = maxY * scale[1]
  const mat   = prim.getMaterial()
  const verts = pos.getCount()

  const entry = {
    index:    i,
    mat:      mat?.getName() ?? '(none)',
    cx:       cx.toFixed(2),
    cy:       cy.toFixed(2),
    cz:       cz.toFixed(2),
    sX, sY, sZ,
    realMinY: realMinY.toFixed(2),
    realMaxY: realMaxY.toFixed(2),
    verts,
  }

  // Classify by Y CENTER
  const matchedFloor = floorBuckets.find(f => cy >= f.minY && cy < f.maxY)
  if (matchedFloor) {
    matchedFloor.primitives.push(entry)
  }

  // Flag if Y SPAN crosses more than one floor boundary
  const floorsSpanned = FLOORS.filter(f =>
    realMaxY >= f.minY && realMinY < f.maxY
  )
  if (floorsSpanned.length > 1) {
    spanMultiple.push({ ...entry, floors: floorsSpanned.map(f => f.name) })
  }
})

// ── Print report ─────────────────────────────────────────────────────────────
floorBuckets.forEach(floor => {
  console.log(`\n${'='.repeat(60)}`)
  console.log(`  ${floor.name}  (Y center: ${floor.minY === -Infinity ? '-∞' : floor.minY} → ${floor.maxY === Infinity ? '+∞' : floor.maxY}m)`)
  console.log(`  ${floor.primitives.length} primitives`)
  console.log('='.repeat(60))

  floor.primitives.forEach(p => {
    console.log(`  Primitive[${p.index}]`)
    console.log(`    Material : "${p.mat}"`)
    console.log(`    Center   : [${p.cx}, ${p.cy}, ${p.cz}]`)
    console.log(`    Size     : ${p.sX}W x ${p.sY}H x ${p.sZ}D`)
    console.log(`    Y span   : ${p.realMinY} → ${p.realMaxY}`)
    console.log(`    Vertices : ${p.verts}`)
  })

  // Print indices summary for easy copy-paste
  const indices = floor.primitives.map(p => p.index)
  console.log(`\n  ── Indices ──`)
  console.log(`  [${indices.join(', ')}]`)
})

// ── Multi-floor spanning primitives ──────────────────────────────────────────
console.log(`\n${'='.repeat(60)}`)
console.log(`  SPANS MULTIPLE FLOORS (structural — walls/columns/stairs)`)
console.log(`  ${spanMultiple.length} primitives`)
console.log('='.repeat(60))

spanMultiple.forEach(p => {
  console.log(`  Primitive[${p.index}]  mat: "${p.mat}"  Y: ${p.realMinY} → ${p.realMaxY}  floors: ${p.floors.join(' + ')}`)
})

const spanIndices = spanMultiple.map(p => p.index)
console.log(`\n  ── Indices ──`)
console.log(`  [${spanIndices.join(', ')}]`)

// ── Grand summary ─────────────────────────────────────────────────────────────
console.log(`\n${'='.repeat(60)}`)
console.log('  GRAND SUMMARY')
console.log('='.repeat(60))
floorBuckets.forEach(f => {
  console.log(`  ${f.name.padEnd(25)} : ${f.primitives.length} primitives`)
})
console.log(`  ${'MULTI-FLOOR STRUCTURAL'.padEnd(25)} : ${spanMultiple.length} primitives`)
console.log(`  ${'TOTAL'.padEnd(25)} : ${mesh.listPrimitives().length} primitives`)
