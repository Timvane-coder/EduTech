// ramenShop-cleanup.mjs
// Removes stray Cube/Cube.001 nodes and diagnoses miscJoined UV quality

import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc  = await io.read('./models/ramenShop_uvrestored_v2.glb')
const root = doc.getRoot()

// ── 1. Remove stray cubes ─────────────────────────────────────────────────────
const STRAY = ['Cube', 'Cube.001']
let removed = 0
root.listNodes().forEach(node => {
  if (STRAY.includes(node.getName())) {
    node.setMesh(null)
    node.dispose()
    console.log(`🗑️  Removed stray node: "${node.getName()}"`)
    removed++
  }
})
console.log(`\n✅ Removed ${removed} stray node(s)`)

// ── 2. Report chunk UV status ─────────────────────────────────────────────────
console.log('\n── Chunk UV status ──')
root.listNodes()
  .filter(n => n.getMesh() && /^chunk_\d+$/.test(n.getName()))
  .forEach(node => {
    const prim = node.getMesh().listPrimitives()[0]
    const hasUV = !!prim.getAttribute('TEXCOORD_0')
    const verts = prim.getAttribute('POSITION')?.getCount() ?? 0
    console.log(`  "${node.getName()}"  verts:${verts}  UV:${hasUV ? '✅' : '❌ MISSING'}`)
  })

// ── 3. Report miscJoined UV range ─────────────────────────────────────────────
console.log('\n── miscJoined UV sample ──')
const miscNode = root.listNodes().find(n => n.getName() === 'miscJoined')
if (miscNode) {
  const prim = miscNode.getMesh().listPrimitives()[0]
  const uv   = prim.getAttribute('TEXCOORD_0')
  if (uv) {
    let minU=Infinity, maxU=-Infinity, minV=Infinity, maxV=-Infinity
    let zeroCount = 0
    for (let i = 0; i < uv.getCount(); i++) {
      const [u,v] = uv.getElement(i,[])
      if (u<minU) minU=u; if (u>maxU) maxU=u
      if (v<minV) minV=v; if (v>maxV) maxV=v
      if (u===0 && v===0) zeroCount++
    }
    console.log(`  verts      : ${uv.getCount()}`)
    console.log(`  U range    : ${minU.toFixed(4)} → ${maxU.toFixed(4)}`)
    console.log(`  V range    : ${minV.toFixed(4)} → ${maxV.toFixed(4)}`)
    console.log(`  zero UVs   : ${zeroCount} / ${uv.getCount()}`)
    console.log(`  assessment : ${zeroCount > uv.getCount() * 0.1 ? '⚠️  HIGH zero count — UV transfer likely failed for these verts' : '✅ UV spread looks reasonable'}`)
  } else {
    console.log('  ❌ No TEXCOORD_0 found')
  }
}

await io.write('./models/ramenShop_clean.glb', doc)
console.log('\n📦 Written: ramenShop_clean.glb')
