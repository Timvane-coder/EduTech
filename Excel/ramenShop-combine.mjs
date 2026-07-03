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

// ── Load the base file (already pruned to gates/roof allowlist) ───────────────
const baseDoc   = await io.read('ramenShop-allgates.glb')
const baseRoot  = baseDoc.getRoot()
const baseScene = baseRoot.listScenes()[0]

// ── Load the incoming file (full original shop, walls, machines, etc.) ────────
const incomingDoc = await io.read('ramenShop.glb')

// ── Nodes already present/kept in ramenShop-allgates.glb — do NOT duplicate ───
const alreadyKept = new Set([
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

// ── Strip already-kept nodes OUT of the incoming doc before merging ───────────
const incomingRoot = incomingDoc.getRoot()
incomingRoot.listNodes().forEach(n => {
  const name = n.getName()
  if (alreadyKept.has(name)) {
    n.setMesh(null)
    n.dispose()
    console.log(` ⏭️  Dropped duplicate "${name}" from incoming doc (already in allgates.glb)`)
  }
})

// ── DEBUG: snapshot state before merge ─────────────────────────────────────────
const scenesBeforeMerge = baseRoot.listScenes().length
const nodesBeforeMerge = baseRoot.listNodes().length
console.log('\n── PRE-MERGE STATE ──')
console.log('baseDoc scenes:', scenesBeforeMerge)
console.log('baseDoc nodes:', nodesBeforeMerge)

// ── Merge incoming doc into base doc ───────────────────────────────────────────
await mergeDocuments(baseDoc, incomingDoc)

// ── DEBUG: inspect what merge actually did ─────────────────────────────────────
const scenesAfterMerge = baseRoot.listScenes()
const nodesAfterMerge = baseRoot.listNodes()
console.log('\n── POST-MERGE STATE ──')
console.log('baseDoc scenes:', scenesAfterMerge.length, '(was', scenesBeforeMerge, ')')
console.log('baseDoc nodes:', nodesAfterMerge.length, '(was', nodesBeforeMerge, ')')
scenesAfterMerge.forEach((s, i) => {
  console.log(`  Scene ${i} ("${s.getName()}") — ${s.listChildren().length} children:`,
    s.listChildren().map(c => c.getName()))
})

// ── Grab whatever new scene(s) mergeDocuments appended ─────────────────────────
const newScenes = scenesAfterMerge.slice(scenesBeforeMerge)
console.log('\nNew scenes detected from merge:', newScenes.length)

if (newScenes.length === 0) {
  console.log('⚠️  WARNING: No new scenes were added by mergeDocuments.')
  console.log('   Merged nodes may have been added directly into baseScene,')
  console.log('   or something else went wrong. Check the node list above.')
}

// ── Confirmed via diagnostic script: global min Y across surviving nodes ──────
//    was -0.016 (from ramenShopJoined), global max Y was 10.078 (machinesJoined).
//    roofTopY = 3.400 → Y_OFFSET = 3.400 - (-0.016) = 3.416
const Y_OFFSET = 3.416

let movedCount = 0

newScenes.forEach(scene => {
  // copy children array first since addChild() will mutate scene membership
  const children = [...scene.listChildren()]
  children.forEach(node => {
    const t = node.getTranslation()
    node.setTranslation([t[0], t[1] + Y_OFFSET, t[2]])
    baseScene.addChild(node)
    movedCount++
    console.log(`  ➕ Moved "${node.getName()}" into baseScene, new Y = ${(t[1] + Y_OFFSET).toFixed(3)}`)
  })
  scene.dispose()
})

console.log(`\n✅ Reparented ${movedCount} merged nodes into base scene at Y offset ${Y_OFFSET.toFixed(3)}`)

// ── DEBUG: confirm final scene state before prune/write ───────────────────────
console.log('\n── FINAL baseScene CHILDREN ──')
console.log(baseScene.listChildren().map(c => c.getName()))
console.log('Total children in baseScene:', baseScene.listChildren().length)

if (movedCount === 0) {
  console.log('\n🛑 STOPPING: movedCount is 0 — nothing was added to baseScene.')
  console.log('   Skipping prune/write since output would be unchanged from allgates.glb.')
  console.log('   Review the POST-MERGE STATE log above to see where the merged')
  console.log('   nodes actually ended up.')
  process.exit(1)
}

// ── Prune unused resources ─────────────────────────────────────────────────────
await baseDoc.transform(prune())
console.log('\n✅ Pruned unused resources')

// ── Consolidate all data into a single buffer (required for GLB) ──────────────
await baseDoc.transform(unpartition())
console.log('✅ Consolidated into single buffer')

await io.write('ramenShop-combined.glb', baseDoc)
console.log('\n✅ Written: ramenShop-combined.glb')
