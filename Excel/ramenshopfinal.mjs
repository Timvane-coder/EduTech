import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { prune, mergeDocuments, unpartition } from '@gltf-transform/functions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

// ── Known values from diagnostics (world-space) ────────────────────────────────
const gatesMin = [-2.208, 0.104, -4.058]
const gatesMax = [2.258, 3.740, 1.708]
const gatesCenter = gatesMin.map((v, i) => (v + gatesMax[i]) / 2)

const kaslikyMin = [-0.000, -0.160, -5.400]
const kaslikyMax = [13.800, 7.000, 8.500]
const kaslikySize = kaslikyMin.map((v, i) => kaslikyMax[i] - v)
const gatesSize = gatesMin.map((v, i) => gatesMax[i] - v)

// ── Scale factors: fit Kaslíky's box to the gates' box ─────────────────────────
const scale = [
  gatesSize[0] / kaslikySize[0],
  gatesSize[1] / kaslikySize[1],
  gatesSize[2] / kaslikySize[2],
]
console.log('Scale factors:', scale.map(v => v.toFixed(5)))

// ── Compute Kaslíky bounds AFTER scaling (still centered on exhibitStand's own origin) ──
const scaledKaslikyMin = kaslikyMin.map((v, i) => v * scale[i])
const scaledKaslikyMax = kaslikyMax.map((v, i) => v * scale[i])
const scaledKaslikyCenterXZ = [
  (scaledKaslikyMin[0] + scaledKaslikyMax[0]) / 2,
  0, // unused
  (scaledKaslikyMin[2] + scaledKaslikyMax[2]) / 2,
]

// ── Translation: align scaled-Kaslíky max-Y to gates max-Y (roof line), ────────
//    and align X/Z centers to the gates' X/Z center
const translation = [
  gatesCenter[0] - scaledKaslikyCenterXZ[0],
  gatesMax[1] - scaledKaslikyMax[1],
  gatesCenter[2] - scaledKaslikyCenterXZ[2],
]
console.log('Translation:', translation.map(v => v.toFixed(5)))

// ── Load both documents ─────────────────────────────────────────────────────────
const baseDoc = await io.read('ramenShop-combined.glb')
const baseRoot = baseDoc.getRoot()
const baseScene = baseRoot.listScenes()[0]

const exhibitDoc = await io.read('HB17_housing.glb')

// ── Remove the four gate nodes from baseDoc ─────────────────────────────────────
const gateNames = ['gate_front', 'gate_back', 'gate_left', 'gate_right']

function findNodeByName(nodes, name) {
  for (const n of nodes) {
    if (n.getName() === name) return n
    const found = findNodeByName(n.listChildren(), name)
    if (found) return found
  }
  return null
}

gateNames.forEach(name => {
  const node = findNodeByName(baseScene.listChildren(), name)
  if (node) {
    node.setMesh(null)
    node.dispose()
    console.log(`🗑️  Removed "${name}"`)
  } else {
    console.log(`⚠️  "${name}" not found — nothing removed`)
  }
})

// ── Merge exhibitStand.glb into baseDoc ──────────────────────────────────────────
const scenesBeforeMerge = baseRoot.listScenes().length
await mergeDocuments(baseDoc, exhibitDoc)
const scenesAfterMerge = baseRoot.listScenes()
const newScenes = scenesAfterMerge.slice(scenesBeforeMerge)

console.log(`New scenes from merge: ${newScenes.length}`)

// ── Wrap all merged top-level nodes under a single new group node, ─────────────
//    so we can apply one scale + translation to the whole exhibit stand at once
//    without having to touch every individual node's transform separately.
const exhibitGroup = baseDoc.createNode('exhibitStand_root')
exhibitGroup.setScale(scale)
exhibitGroup.setTranslation(translation)

let movedCount = 0
newScenes.forEach(scene => {
  const children = [...scene.listChildren()]
  children.forEach(node => {
    exhibitGroup.addChild(node)
    movedCount++
  })
  scene.dispose()
})

baseScene.addChild(exhibitGroup)
console.log(`✅ Wrapped ${movedCount} exhibitStand nodes under "exhibitStand_root" with scale/translation applied`)

// ── Prune + consolidate ──────────────────────────────────────────────────────────
await baseDoc.transform(prune())
console.log('✅ Pruned unused resources')

await baseDoc.transform(unpartition())
console.log('✅ Consolidated into single buffer')

await io.write('ramenShop-final.glb', baseDoc)
console.log('\n✅ Written: ramenShop-final.glb')
