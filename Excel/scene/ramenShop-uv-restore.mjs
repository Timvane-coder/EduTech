import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

// ── Config ────────────────────────────────────────────────────────────────────
const ORIGINAL_FILE = './models/ramen.glb'   // original with good UV
const MODIFIED_FILE = './models/ramenShop-uvRestored-tvScreen.glb'   // merged file with lost UVs
const OUTPUT_FILE   = './models/ramenShop_uvrestored.glb'

// All ramenShop_root nodes whose UVs need restoring
const TARGET_NAMES = new Set([
  'aboutMeBlack', 'aboutMeBlue', 'arcadeRim', 'arcadeToken',
  'articlesRed', 'articlesWhite',  'blueLights', 'chinese',
  'creditsBlack', 'creditsOrange', 'dish', 'dishStand', 
  'fan1', 'fan2', 'floor', 'graphicsJoined', 'greenLED', 'greenSignSquare',
  'jesseZhouJoined', 'jZhouBlack', 'jZhouPink', 'lampLights', 'littleTVScreen',
  'miscJoined', 'neonBlue', 'neonGreen', 'neonPink', 'neonYellow', 'poleLight',
  'portalLight', 'projectsRed', 'projectsWhite', 'redLED', 'roof',
  'smallScreen1', 'smallScreen2', 'smallScreen3', 'smallScreen4', 'smallScreen5',
  'storageLight', 'tallScreen','vendingMachineLight',
  'whiteButton', 'yellowRightLight', 'Cube001',
])

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

console.log(`\n📂 Loading original : ${ORIGINAL_FILE}`)
const originalDoc = await io.read(ORIGINAL_FILE)
const originalRoot = originalDoc.getRoot()

console.log(`📂 Loading modified : ${MODIFIED_FILE}`)
const modifiedDoc = await io.read(MODIFIED_FILE)
const modifiedRoot = modifiedDoc.getRoot()

// ── Build name → node map for original ───────────────────────────────────────
const originalNodes = new Map()
originalRoot.listNodes().forEach(node => {
  if (node.getMesh()) originalNodes.set(node.getName(), node)
})

// ── Build name → node map for modified (ramenShop_root children only) ────────
const modifiedNodes = new Map()
modifiedRoot.listNodes().forEach(node => {
  if (node.getMesh() && TARGET_NAMES.has(node.getName())) {
    modifiedNodes.set(node.getName(), node)
  }
})

console.log(`\n✅ Original mesh nodes found : ${originalNodes.size}`)
console.log(`✅ Modified target nodes found: ${modifiedNodes.size}`)

// ── UV transplant ─────────────────────────────────────────────────────────────
console.log('\n====== UV RESTORATION REPORT ======\n')

const results = { ok: [], mismatch: [], noOriginal: [], noUV: [], alreadyOk: [] }

for (const [name, modNode] of modifiedNodes) {
  const origNode = originalNodes.get(name)

  if (!origNode) {
    results.noOriginal.push(name)
    console.log(`⚠️  [SKIP]    "${name}"  — not found in original`)
    continue
  }

  const origPrim = origNode.getMesh().listPrimitives()[0]
  const modPrim  = modNode.getMesh().listPrimitives()[0]

  const origUV = origPrim.getAttribute('TEXCOORD_0')
  const modUV  = modPrim.getAttribute('TEXCOORD_0')

  if (!origUV) {
    results.noUV.push(name)
    console.log(`⚠️  [SKIP]    "${name}"  — original has no TEXCOORD_0`)
    continue
  }

  const origPos = origPrim.getAttribute('POSITION')
  const modPos  = modPrim.getAttribute('POSITION')
  const origCount = origPos?.getCount() ?? 0
  const modCount  = modPos?.getCount() ?? 0

  if (origCount !== modCount) {
    results.mismatch.push({ name, origCount, modCount })
    console.log(`❌ [MISMATCH] "${name}"  — orig verts:${origCount}  mod verts:${modCount}  — cannot transplant`)
    continue
  }

  // Check if UV is already valid (non-zero variance) — skip if already good
  const uvSample = []
  for (let i = 0; i < Math.min(origUV.getCount(), 8); i++) {
    uvSample.push(origUV.getElement(i, []))
  }
  const allZero = uvSample.every(([u, v]) => u === 0 && v === 0)

  // Read all UV data from original
  const uvData = []
  for (let i = 0; i < origUV.getCount(); i++) {
    uvData.push(origUV.getElement(i, []))
  }

  // Write into modified prim's TEXCOORD_0
  // If modUV exists reuse it, otherwise we need to clone origUV accessor into modifiedDoc
  if (modUV && modUV.getCount() === origUV.getCount()) {
    // Overwrite existing UV accessor element by element
    for (let i = 0; i < uvData.length; i++) {
      modUV.setElement(i, uvData[i])
    }
    results.ok.push(name)
    console.log(`✅ [RESTORED] "${name}"  verts:${modCount}  UV samples:[${uvData[0]?.map(v=>v.toFixed(3)).join(',')}]`)
  } else {
    // modUV missing or wrong count — clone accessor from original into modified doc
    // We do this by creating a new accessor in modifiedDoc with the same data
    const graph    = modifiedDoc.getGraph()
    const newUV    = modifiedDoc.createAccessor()
      .setType('VEC2')
      .setArray(new Float32Array(uvData.flat()))
    modPrim.setAttribute('TEXCOORD_0', newUV)
    results.ok.push(name)
    console.log(`✅ [INJECTED] "${name}"  verts:${modCount}  (new accessor created)`)
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n====== SUMMARY ======\n')
console.log(`✅ Restored / Injected : ${results.ok.length}`)
console.log(`❌ Vertex mismatch     : ${results.mismatch.length}`)
console.log(`⚠️  Not in original    : ${results.noOriginal.length}`)
console.log(`⚠️  No UV in original  : ${results.noUV.length}`)

if (results.mismatch.length > 0) {
  console.log('\nMismatched nodes (need manual fix in Blender):')
  results.mismatch.forEach(({ name, origCount, modCount }) => {
    console.log(`   "${name}"  orig:${origCount}  mod:${modCount}`)
  })
}

if (results.noOriginal.length > 0) {
  console.log('\nNot found in original:')
  results.noOriginal.forEach(n => console.log(`   "${n}"`))
}

await io.write(OUTPUT_FILE, modifiedDoc)
console.log(`\n📦 Written: ${OUTPUT_FILE}\n`)
