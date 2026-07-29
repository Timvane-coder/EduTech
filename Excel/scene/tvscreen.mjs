import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const ORIGINAL = './models/ramen.glb'
const MODIFIED = './models/ramenShop-uvRestored-screens.glb'
const TARGET   = 'tvScreen'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

console.log(`\nLoading original: ${ORIGINAL}`)
const origDoc  = await io.read(ORIGINAL)
const origRoot = origDoc.getRoot()

console.log(`Loading modified: ${MODIFIED}`)
const modDoc  = await io.read(MODIFIED)
const modRoot = modDoc.getRoot()

const NEARBY_THRESH = 0.05

const origNode = origRoot.listNodes().find(n => n.getName() === TARGET)
const modNode  = modRoot.listNodes().find(n => n.getName() === TARGET)

if (!origNode) { console.error(`❌ "${TARGET}" not found in original`); process.exit(1) }
if (!modNode)  { console.error(`❌ "${TARGET}" not found in modified`); process.exit(1) }

const origPrim = origNode.getMesh().listPrimitives()[0]
const modPrim  = modNode.getMesh().listPrimitives()[0]

const origPos = origPrim.getAttribute('POSITION')
const origUV  = origPrim.getAttribute('TEXCOORD_0')
const modPos  = modPrim.getAttribute('POSITION')

if (!origUV)  { console.error(`❌ Original has no TEXCOORD_0`); process.exit(1) }

const origCount = origPos.getCount()
const modCount  = modPos.getCount()

console.log(`\n"${TARGET}"`)
console.log(`  Original vertices : ${origCount}`)
console.log(`  Modified vertices : ${modCount}`)

// ── Build spatial lookup ──────────────────────────────────────────────────────
const origLookup = new Map()
for (let i = 0; i < origCount; i++) {
  const p   = origPos.getElement(i, [])
  const uv  = origUV.getElement(i, [])
  const key = `${p[0].toFixed(4)},${p[1].toFixed(4)},${p[2].toFixed(4)}`
  if (!origLookup.has(key)) origLookup.set(key, [])
  origLookup.get(key).push(uv)
}

// ── Match by position ─────────────────────────────────────────────────────────
const newUVArray = new Float32Array(modCount * 2)
let exactMatches  = 0
let nearbyMatches = 0
let failedMatches = 0

for (let i = 0; i < modCount; i++) {
  const mp  = modPos.getElement(i, [])
  const key = `${mp[0].toFixed(4)},${mp[1].toFixed(4)},${mp[2].toFixed(4)}`

  if (origLookup.has(key)) {
    const uv = origLookup.get(key)[0]
    newUVArray[i * 2 + 0] = uv[0]
    newUVArray[i * 2 + 1] = uv[1]
    exactMatches++
    continue
  }

  let bestDist = Infinity
  let bestUV   = null

  for (let j = 0; j < origCount; j++) {
    const op   = origPos.getElement(j, [])
    const dx   = mp[0] - op[0]
    const dy   = mp[1] - op[1]
    const dz   = mp[2] - op[2]
    const dist = Math.sqrt(dx*dx + dy*dy + dz*dz)
    if (dist < bestDist) {
      bestDist = dist
      bestUV   = origUV.getElement(j, [])
    }
  }

  if (bestDist <= NEARBY_THRESH) {
    newUVArray[i * 2 + 0] = bestUV[0]
    newUVArray[i * 2 + 1] = bestUV[1]
    nearbyMatches++
  } else {
    newUVArray[i * 2 + 0] = 0
    newUVArray[i * 2 + 1] = 0
    failedMatches++
    console.warn(`  ⚠️  vert[${i}] no match — nearest dist: ${bestDist.toFixed(4)}`)
  }
}

console.log(`  Exact matches   : ${exactMatches}`)
console.log(`  Nearby matches  : ${nearbyMatches}  (within ${NEARBY_THRESH}m)`)
console.log(`  Failed matches  : ${failedMatches}`)

modPrim.setAttribute('TEXCOORD_0', modDoc.createAccessor()
  .setType('VEC2')
  .setArray(newUVArray))

console.log(`  ✅ TEXCOORD_0 restored — ${modCount} UVs written`)

const outFile = './models/ramenShop-uvRestored-tvScreen.glb'
await io.write(outFile, modDoc)
console.log(`✅ Written: ${outFile}`)
