import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { prune } from '@gltf-transform/functions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc   = await io.read('ramenShop-rebuilt.glb')
const root  = doc.getRoot()
const scene = root.listScenes()[0]

// ── Shop bounds ───────────────────────────────────────────────────────────────
const GX0 = -2.000
const GX1 =  2.050
const GY0 =  0.104
const GY1 =  3.400
const Z_FRONT =  1.500
const Z_BACK  = -3.850

// ── Materials ─────────────────────────────────────────────────────────────────
const mat = doc.createMaterial('gate_bronze')
mat.setBaseColorFactor([0.18, 0.12, 0.08, 1.0])
mat.setMetallicFactor(0.85)
mat.setRoughnessFactor(0.25)
mat.setDoubleSided(true)

// ── Geometry helpers (all work in a local 2D space then transform) ────────────
// We build each gate in "canonical" space:
//   u axis = gate width (left→right)
//   v axis = gate height (bottom→top)
//   w axis = gate depth (thin extrusion)
// Then transform into world XYZ per wall.

function buildGateGeometry(GW, GH, BT, BT2, BT3) {
  const pos = [], idx = []
  const MID = GW / 2

  function addBox(x0,y0,z0,x1,y1,z1) {
    const b = pos.length/3
    pos.push(
      x0,y0,z0, x1,y0,z0, x1,y1,z0, x0,y1,z0,
      x0,y0,z1, x1,y0,z1, x1,y1,z1, x0,y1,z1,
    )
    ;[0,1,2,0,2,3, 5,4,7,5,7,6, 4,0,3,4,3,7, 1,5,6,1,6,2, 3,2,6,3,6,7, 4,5,1,4,1,0]
      .forEach(i => idx.push(b+i))
  }

  function vBar(cx,y0,y1,t=BT) { addBox(cx-t/2,y0,-t/2,cx+t/2,y1,t/2) }
  function hBar(x0,x1,cy,t=BT) { addBox(x0,cy-t/2,-t/2,x1,cy+t/2,t/2) }

  function ring(cx,cy,rO,rI,segs=24) {
    for (let i=0;i<segs;i++) {
      const a0=(i/segs)*Math.PI*2, a1=((i+1)/segs)*Math.PI*2
      const d=0.020
      const b=pos.length/3
      pos.push(
        cx+Math.cos(a0)*rI, cy+Math.sin(a0)*rI, d/2,
        cx+Math.cos(a0)*rO, cy+Math.sin(a0)*rO, d/2,
        cx+Math.cos(a1)*rO, cy+Math.sin(a1)*rO, d/2,
        cx+Math.cos(a1)*rI, cy+Math.sin(a1)*rI, d/2,
        cx+Math.cos(a0)*rI, cy+Math.sin(a0)*rI,-d/2,
        cx+Math.cos(a0)*rO, cy+Math.sin(a0)*rO,-d/2,
        cx+Math.cos(a1)*rO, cy+Math.sin(a1)*rO,-d/2,
        cx+Math.cos(a1)*rI, cy+Math.sin(a1)*rI,-d/2,
      )
      ;[0,1,2,0,2,3, 7,6,5,7,5,4, 0,4,5,0,5,1, 2,6,7,2,7,3, 3,7,4,3,4,0, 1,5,6,1,6,2]
        .forEach(i=>idx.push(b+i))
    }
  }

  function spoke(cx,cy,r,angle,t=BT*0.6) {
    const ex=cx+Math.cos(angle)*r, ey=cy+Math.sin(angle)*r
    const dx=ex-cx, dy=ey-cy, len=Math.sqrt(dx*dx+dy*dy)
    const nx=-dy/len*t/2, ny=dx/len*t/2
    const b=pos.length/3
    pos.push(
      cx+nx,cy+ny,-t/2, cx-nx,cy-ny,-t/2, ex-nx,ey-ny,-t/2, ex+nx,ey+ny,-t/2,
      cx+nx,cy+ny, t/2, cx-nx,cy-ny, t/2, ex-nx,ey-ny, t/2, ex+nx,ey+ny, t/2,
    )
    ;[0,1,2,0,2,3, 7,6,5,7,5,4, 0,4,5,0,5,1, 2,6,7,2,7,3, 3,7,4,3,4,0, 1,5,6,1,6,2]
      .forEach(i=>idx.push(b+i))
  }

  function scroll(cx,cy,maxR,turns=1.5,segs=48,t=BT) {
    for (let i=0;i<segs;i++) {
      const t0=(i/segs)*turns*Math.PI*2, t1=((i+1)/segs)*turns*Math.PI*2
      const r0=maxR*(i/segs), r1=maxR*((i+1)/segs)
      const px0=cx+Math.cos(t0)*r0, py0=cy+Math.sin(t0)*r0
      const px1=cx+Math.cos(t1)*r1, py1=cy+Math.sin(t1)*r1
      addBox(Math.min(px0,px1)-t/2,Math.min(py0,py1)-t/2,-t/2,
             Math.max(px0,px1)+t/2,Math.max(py0,py1)+t/2, t/2)
    }
  }

  function arch(x0,x1,yBase,yPeak,segs=32,t=BT2) {
    const cx=(x0+x1)/2, rx=(x1-x0)/2, ry=yPeak-yBase
    for (let i=0;i<segs;i++) {
      const a0=Math.PI+(i/segs)*Math.PI, a1=Math.PI+((i+1)/segs)*Math.PI
      const px0=cx+Math.cos(a0)*rx, py0=yBase+(1+Math.sin(a0))*ry
      const px1=cx+Math.cos(a1)*rx, py1=yBase+(1+Math.sin(a1))*ry
      addBox(Math.min(px0,px1)-t/2,Math.min(py0,py1)-t/2,-t/2,
             Math.max(px0,px1)+t/2,Math.max(py0,py1)+t/2, t/2)
    }
  }

  function lattice(x0,y0,x1,y1,spacing=0.12) {
    const bt=BT*0.5
    for (let x=x0;x<=x1;x+=spacing) addBox(x-bt/2,y0,-bt/2,x+bt/2,y1,bt/2)
    for (let y=y0;y<=y1;y+=spacing) addBox(x0,y-bt/2,-bt/2,x1,y+bt/2,bt/2)
  }

  function finial(cx,baseY) {
    const r=BT2
    for (let s=0;s<8;s++) {
      const a0=(s/8)*Math.PI*2, a1=((s+1)/8)*Math.PI*2
      const b=pos.length/3
      pos.push(
        cx,baseY,0,
        cx+Math.cos(a0)*r,baseY,Math.sin(a0)*r,
        cx+Math.cos(a1)*r,baseY,Math.sin(a1)*r,
        cx,baseY+r*3,0,
        cx+Math.cos(a0)*r*0.3,baseY+r*3,Math.sin(a0)*r*0.3,
        cx+Math.cos(a1)*r*0.3,baseY+r*3,Math.sin(a1)*r*0.3,
      )
      ;[0,1,2, 3,5,4, 0,2,5,0,5,3, 0,4,1,0,3,4].forEach(i=>idx.push(b+i))
    }
    addBox(cx-BT/2,baseY+r*3,-BT/2,cx+BT/2,baseY+r*3+0.15,BT/2)
  }

  function greekKey(x0,x1,cy,unit=0.09) {
    const bt=BT*0.6
    let x=x0, right=true
    while(x<x1-unit) {
      hBar(x,x+unit,cy,bt)
      vBar(right?x+unit:x, cy, cy+unit*(right?1:-1), bt)
      x+=unit; right=!right
    }
  }

  // ── Proportions ─────────────────────────────────────────────────────────────
  const MID_RAIL_Y = GH * 0.45
  const LOW_RAIL_Y = GH * 0.18
  const friezeY0   = GH * 0.80
  const medalR     = GH * 0.13
  const scrollH    = friezeY0 - MID_RAIL_Y
  const scrollCY   = MID_RAIL_Y + scrollH/2
  const knotW      = 0.18
  const barSpacing = 0.22

  // Outer frame
  addBox(0,        0,-BT3/2, BT3,   GH, BT3/2)   // left post
  addBox(GW-BT3,   0,-BT3/2, GW,    GH, BT3/2)   // right post
  addBox(MID-BT2/2,0,-BT2/2, MID+BT2/2, GH, BT2/2) // centre post
  addBox(0,        0,-BT3/2, GW, BT3,   BT3/2)   // base rail
  hBar(0,GW, GH-BT2, BT2)                         // top rail
  hBar(0,GW, MID_RAIL_Y, BT2)                     // mid rail
  hBar(0,GW, LOW_RAIL_Y, BT2)                     // low rail

  // Arch
  arch(BT3, MID-BT2/2, GH-BT2-GH*0.05, GH+GH*0.07)
  arch(MID+BT2/2, GW-BT3, GH-BT2-GH*0.05, GH+GH*0.07)

  // Frieze lattice
  lattice(BT3, friezeY0, MID-BT2/2, GH-BT2, 0.10)
  lattice(MID+BT2/2, friezeY0, GW-BT3, GH-BT2, 0.10)

  // Vertical bars
  for (let x=BT3+barSpacing; x<MID-BT2; x+=barSpacing) vBar(x,BT3,GH-BT2)
  for (let x=MID+BT2+barSpacing; x<GW-BT3; x+=barSpacing) vBar(x,BT3,GH-BT2)

  // Scrolls — left panel
  const lCX = (BT3 + MID-BT2/2)/2
  scroll(lCX, scrollCY+scrollH*0.05, scrollH*0.32,  1.8, 64, BT)
  scroll(lCX+scrollH*0.25, scrollCY-scrollH*0.15, scrollH*0.18, 1.4, 48, BT)
  // Scrolls — right panel
  const rCX = (MID+BT2/2 + GW-BT3)/2
  scroll(rCX, scrollCY+scrollH*0.05, scrollH*0.32, -1.8, 64, BT)
  scroll(rCX-scrollH*0.25, scrollCY-scrollH*0.15, scrollH*0.18, -1.4, 48, BT)

  // Medallions — left
  const lMedX = BT3 + medalR + 0.05
  const medalY = GH * 0.30
  ring(lMedX, medalY, medalR, medalR*0.75)
  ring(lMedX, medalY, medalR*0.70, medalR*0.55)
  ring(lMedX, medalY, medalR*0.30, medalR*0.15)
  for (let s=0;s<8;s++) spoke(lMedX,medalY,medalR*0.72,(s/8)*Math.PI*2)
  for (let s=0;s<6;s++) spoke(lMedX,medalY,medalR*0.52,(s/6)*Math.PI*2+Math.PI/6)
  // Medallions — right
  const rMedX = GW-BT3-medalR-0.05
  ring(rMedX, medalY, medalR, medalR*0.75)
  ring(rMedX, medalY, medalR*0.70, medalR*0.55)
  ring(rMedX, medalY, medalR*0.30, medalR*0.15)
  for (let s=0;s<8;s++) spoke(rMedX,medalY,medalR*0.72,(s/8)*Math.PI*2)
  for (let s=0;s<6;s++) spoke(rMedX,medalY,medalR*0.52,(s/6)*Math.PI*2+Math.PI/6)

  // Small scroll accents
  const accentR = GH*0.07
  scroll(lMedX+medalR*1.6, medalY, accentR,  1.2, 32, BT*0.7)
  scroll(lMedX-medalR*1.6+0.1, medalY, accentR, -1.2, 32, BT*0.7)
  scroll(rMedX+medalR*1.6-0.1, medalY, accentR,  1.2, 32, BT*0.7)
  scroll(rMedX-medalR*1.6, medalY, accentR, -1.2, 32, BT*0.7)

  // Lower lattice
  lattice(BT3, BT3, MID-BT2/2, LOW_RAIL_Y-BT2/2, 0.08)
  lattice(MID+BT2/2, BT3, GW-BT3, LOW_RAIL_Y-BT2/2, 0.08)

  // Greek key
  greekKey(BT3, MID-BT2/2, BT3+0.04)
  greekKey(MID+BT2/2, GW-BT3, BT3+0.04)

  // Knotwork side strips
  lattice(BT3, LOW_RAIL_Y+BT2, BT3+knotW, MID_RAIL_Y-BT2, 0.06)
  lattice(GW-BT3-knotW, LOW_RAIL_Y+BT2, GW-BT3, MID_RAIL_Y-BT2, 0.06)

  // Finials
  for (let x=BT3+0.05; x<MID-BT2; x+=0.35) finial(x, GH-BT2)
  for (let x=MID+BT2+0.05; x<GW-BT3; x+=0.35) finial(x, GH-BT2)
  finial(MID, GH-BT2+0.05)

  return { pos, idx }
}

// ── Transform canonical gate into world space per wall ────────────────────────
// canonical: u=width, v=height, w=thin depth
// transform(u,v,w) → world(x,y,z)

function placeGate(name, GW, GH, BT, transformFn) {
  const BT2 = BT*2, BT3 = BT*3
  const { pos, idx } = buildGateGeometry(GW, GH, BT, BT2, BT3)

  // Apply transform to every vertex
  const worldPos = []
  for (let i=0; i<pos.length; i+=3) {
    const [x,y,z] = transformFn(pos[i], pos[i+1], pos[i+2])
    worldPos.push(x,y,z)
  }

  const posAcc = doc.createAccessor().setType('VEC3').setArray(new Float32Array(worldPos))
  const idxAcc = doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(idx))
  const prim   = doc.createPrimitive().setAttribute('POSITION',posAcc).setIndices(idxAcc).setMaterial(mat)
  const mesh   = doc.createMesh(name).addPrimitive(prim)
  const node   = doc.createNode(name).setMesh(mesh)
  scene.addChild(node)

  console.log(`✅ "${name}"  verts:${worldPos.length/3}  tris:${idx.length/3}`)
}

const GH   = GY1 - GY0
const BT   = 0.035

// ── FRONT WALL  (faces -Z, u=X left→right, v=Y, w=Z) ────────────────────────
placeGate('gate_front',
  GX1-GX0, GH, BT,
  (u,v,w) => [GX0+u, GY0+v, Z_FRONT+w]
)

// ── BACK WALL  (faces +Z, u=X right→left so it faces outward) ───────────────
placeGate('gate_back',
  GX1-GX0, GH, BT,
  (u,v,w) => [GX1-u, GY0+v, Z_BACK+w]
)

// ── LEFT WALL  (faces -X, u=Z front→back, v=Y) ───────────────────────────────
placeGate('gate_left',
  Z_FRONT-Z_BACK, GH, BT,
  (u,v,w) => [GX0+w, GY0+v, Z_FRONT-u]
)

// ── RIGHT WALL  (faces +X, u=Z back→front, v=Y) ──────────────────────────────
placeGate('gate_right',
  Z_FRONT-Z_BACK, GH, BT,
  (u,v,w) => [GX1+w, GY0+v, Z_BACK+u]
)

// ── ROOF — keep as solid slab ─────────────────────────────────────────────────
const roofMat = doc.createMaterial('roof_material')
roofMat.setBaseColorFactor([0.12, 0.08, 0.05, 1.0])
roofMat.setMetallicFactor(0.80)
roofMat.setRoughnessFactor(0.30)
roofMat.setDoubleSided(true)

const overhang = 0.5
const rPos = [
  GX0-0.1, GY1,      Z_FRONT+overhang,
  GX1+0.1, GY1,      Z_FRONT+overhang,
  GX1+0.1, GY1,      Z_BACK,
  GX0-0.1, GY1,      Z_BACK,
  GX0-0.1, GY1-0.12, Z_FRONT+overhang,
  GX1+0.1, GY1-0.12, Z_FRONT+overhang,
  GX1+0.1, GY1-0.12, Z_BACK,
  GX0-0.1, GY1-0.12, Z_BACK,
]
const rIdx = [0,1,2,0,2,3, 7,6,5,7,5,4, 0,4,5,0,5,1, 3,2,6,3,6,7, 1,5,6,1,6,2, 4,0,3,4,3,7]
const rPosAcc = doc.createAccessor().setType('VEC3').setArray(new Float32Array(rPos))
const rIdxAcc = doc.createAccessor().setType('SCALAR').setArray(new Uint32Array(rIdx))
const rPrim   = doc.createPrimitive().setAttribute('POSITION',rPosAcc).setIndices(rIdxAcc).setMaterial(roofMat)
const rMesh   = doc.createMesh('roof').addPrimitive(rPrim)
const rNode   = doc.createNode('roof').setMesh(rMesh)
scene.addChild(rNode)
console.log('✅ "roof" slab added')

// ── Keep only these nodes, dispose everything else ────────────────────────────
const keepNames = new Set([
  'graphicsJoined',
  'miscJoined',
  'floor',
  'gate_front',
  'gate_back',
  'gate_left',
  'gate_right',
  'roof',
  'poleLight',
  'vendingMachineScreen',
  'vendingMachineLight',
  'arcadeRim',
  'arcadeToken',
  'arcadeScreen',
  'blueLights',
  'redLED',
  'yellowRightLight',
  'creditsOrange',
  'greenLED',
  'greenSignSquare',
  'jZhouPink',
  'poleLight',
  'easelFrontGraphic',
  'whiteButton',
  'projectsRed',
  'aboutMeBlack',
  'aboutMeBlue',
  'articlesWhite',
  'articlesRed',
  'creditsBlack',
  'projectsWhite',
  'jZhouBlack',



])

root.listNodes().forEach(n => {
  const name = n.getName()
  if (!keepNames.has(name)) {
    n.setMesh(null)
    n.dispose()
    console.log(` ✅ Removed "${name || '(unnamed)'}"`)
  } else {
    console.log(` ⏭️  Kept "${name}"`)
  }
})

// ── Prune orphaned meshes/materials/accessors left behind by disposed nodes ───
await doc.transform(prune())
console.log('✅ Pruned unused resources')

await io.write('ramenShop-allgates.glb', doc)
console.log('\n✅ Written: ramenShop-allgates.glb')
