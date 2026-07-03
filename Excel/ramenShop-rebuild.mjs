import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc  = await io.read('ramenShop.glb')
const root = doc.getRoot()
const scene = root.listScenes()[0]

// ── 1. Dispose ramenShopJoined ────────────────────────────────────────────────
const shopNode = root.listNodes().find(n => n.getName() === 'ramenShopJoined')
shopNode.setMesh(null)
shopNode.dispose()
console.log('✅ ramenShopJoined disposed')

// ── 2. World-space shop box (from ycheck output) ──────────────────────────────
// ramenShopJoined world extent:
//   X: translation[-2.66] + local[-1.224 → 4.989] = -3.884 → 2.329
//   Y: -0.016 → 7.202  (floor ~0.104, roof ~7.2)
//   Z: translation[-3.23] + local[-0.820 → 5.249] = -4.050 → 2.019


const X1 =  2.050   // was  2.329
const Y0 =  0.104   // unchanged
const Y1 =  3.400   // unchanged
const Z1 = -3.850   // back
const Z0 =  1.500   // was 0.800 — push front wall just beyond sign front face
const X0 = -2.000   // was -3.100 — pull left wall in, neonBlue/Pink are outside shop

// Entrance opening — centred in front wall, ground to ~2.5m high
// Chinese chars are at Z ~-2.41 world, so front wall at Z0=-4.05 is behind them
// Door: leave opening where the original entrance was
const doorX0 = -1.200   // was -1.500
const doorX1 =  0.800   // unchanged
const doorY1 =  2.800   // unchanged
// Roof overhang beyond front wall
const overhang = 0.5

// Wall and roof colours
const WALL_COLOR = [0.88, 0.84, 0.76, 1.0]   // warm cream
const ROOF_COLOR = [0.45, 0.40, 0.35, 1.0]   // dark grey-brown

// ── 3. Material factory ───────────────────────────────────────────────────────
function makeMat(name, color) {
  const mat = doc.createMaterial(name)
  mat.setBaseColorFactor(color)
  mat.setMetallicFactor(0.0)
  mat.setRoughnessFactor(0.85)
  mat.setDoubleSided(true)
  return mat
}

const wallMat = makeMat('wall_material', WALL_COLOR)
const roofMat = makeMat('roof_material', ROOF_COLOR)

// ── 4. Node builder ───────────────────────────────────────────────────────────
function buildNode(name, positions, indices, mat) {
  // Auto-compute flat normals per quad (every 4 verts)
  const normals = new Array(positions.length).fill(0)
  for (let i = 0; i < positions.length; i += 12) {
    const ax = positions[i],   ay = positions[i+1],  az = positions[i+2]
    const bx = positions[i+3], by = positions[i+4],  bz = positions[i+5]
    const cx = positions[i+6], cy = positions[i+7],  cz = positions[i+8]
    const ux = bx-ax, uy = by-ay, uz = bz-az
    const vx = cx-ax, vy = cy-ay, vz = cz-az
    const nx = uy*vz-uz*vy, ny = uz*vx-ux*vz, nz = ux*vy-uy*vx
    const len = Math.sqrt(nx*nx+ny*ny+nz*nz) || 1
    for (let j = 0; j < 4; j++) {
      normals[i+j*3]   = nx/len
      normals[i+j*3+1] = ny/len
      normals[i+j*3+2] = nz/len
    }
  }

  const posAcc = doc.createAccessor()
    .setType('VEC3').setArray(new Float32Array(positions))
  const nrmAcc = doc.createAccessor()
    .setType('VEC3').setArray(new Float32Array(normals))
  const idxAcc = doc.createAccessor()
    .setType('SCALAR').setArray(new Uint16Array(indices))

  const prim = doc.createPrimitive()
    .setAttribute('POSITION', posAcc)
    .setAttribute('NORMAL', nrmAcc)
    .setIndices(idxAcc)
    .setMaterial(mat)

  const mesh = doc.createMesh(name).addPrimitive(prim)
  const node = doc.createNode(name).setMesh(mesh)
  // No translation — built directly in world space
  scene.addChild(node)

  console.log(`✅ "${name}"  verts:${positions.length/3}  tris:${indices.length/3}`)
  return node
}

// ── 5. Front wall with entrance hole ─────────────────────────────────────────
// Decomposed into 4 quads around the hole: bottom, left, right, top
{
  const z = Z0
  const pos = [
    // Bottom strip (Y0 → doorY1, full width) — below door, no hole here
    // Actually entrance goes from floor to doorY1, so:
    // Left strip: X0 → doorX0, Y0 → doorY1
    X0,Y0,z,   doorX0,Y0,z,   doorX0,doorY1,z,   X0,doorY1,z,
    // Right strip: doorX1 → X1, Y0 → doorY1
    doorX1,Y0,z,   X1,Y0,z,   X1,doorY1,z,   doorX1,doorY1,z,
    // Top strip: X0 → X1, doorY1 → Y1
    X0,doorY1,z,   X1,doorY1,z,   X1,Y1,z,   X0,Y1,z,
  ]
  const idx = [
    0,1,2, 0,2,3,       // left strip
    4,5,6, 4,6,7,       // right strip
    8,9,10, 8,10,11,    // top strip
  ]
  buildNode('wall_front', pos, idx, wallMat)
}

// ── 6. Back wall ──────────────────────────────────────────────────────────────
{
  const z = Z1
  const pos = [X0,Y0,z, X1,Y0,z, X1,Y1,z, X0,Y1,z]
  const idx = [0,1,2, 0,2,3]
  buildNode('wall_back', pos, idx, wallMat)
}

// ── 7. Left wall ──────────────────────────────────────────────────────────────
{
  const x = X0
  const pos = [x,Y0,Z1, x,Y0,Z0, x,Y1,Z0, x,Y1,Z1]
  const idx = [0,1,2, 0,2,3]
  buildNode('wall_left', pos, idx, wallMat)
}

// ── 8. Right wall ─────────────────────────────────────────────────────────────
{
  const x = X1
  const pos = [x,Y0,Z0, x,Y0,Z1, x,Y1,Z1, x,Y1,Z0]
  const idx = [0,1,2, 0,2,3]
  buildNode('wall_right', pos, idx, wallMat)
}

// ── 9. Roof (top face + underside) ───────────────────────────────────────────
{
  const y  = Y1
  const y2 = Y1 - 0.15   // ceiling underside thickness
  const xA = X0 - 0.1, xB = X1 + 0.1
  const zA = Z0 - overhang, zB = Z1

  // Top face
  buildNode('roof_top', [
    xA,y,zA,  xB,y,zA,  xB,y,zB,  xA,y,zB
  ], [0,1,2, 0,2,3], roofMat)

  // Underside (flipped winding)
  buildNode('roof_underside', [
    xA,y2,zA,  xB,y2,zA,  xB,y2,zB,  xA,y2,zB
  ], [0,2,1, 0,3,2], roofMat)

  // Front fascia (the vertical face of roof overhang)
  buildNode('roof_fascia', [
    xA,y2,zA,  xB,y2,zA,  xB,y,zA,  xA,y,zA
  ], [0,1,2, 0,2,3], roofMat)
}

// ── 10. Write ─────────────────────────────────────────────────────────────────
await io.write('ramenShop-rebuilt.glb', doc)

console.log('\n✅ Written: ramenShop-rebuilt.glb')
console.log('\n── Wall box (world space) ──')
console.log(`X: ${X0} → ${X1}  (${(X1-X0).toFixed(2)}m wide)`)
console.log(`Y: ${Y0} → ${Y1}  (${(Y1-Y0).toFixed(2)}m tall)`)
console.log(`Z: ${Z0} → ${Z1}  (${(Z1-Z0).toFixed(2)}m deep)`)
console.log(`\nEntrance opening: X[${doorX0} → ${doorX1}]  height: ${(doorY1-Y0).toFixed(2)}m`)
console.log('\nIf walls are off, adjust X0/X1/Y0/Y1/Z0/Z1 and doorX0/doorX1/doorY1')
