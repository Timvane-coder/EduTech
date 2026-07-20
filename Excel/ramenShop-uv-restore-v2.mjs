import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const ORIGINAL_FILE = './models/ramen.glb'
const MODIFIED_FILE = './models/ramenShop_split_chunked.glb'
const OUTPUT_FILE   = './models/ramenShop_uvrestored_v2.glb'

// Only the 28 mismatched nodes — already-injected ones are fine
const MISMATCH_NAMES = new Set([
  'aboutMeBlack', 'aboutMeBlue', 'articlesRed', 'articlesWhite', 'miscJoined',
  'blueLights', 'chinese', 'creditsBlack', 'creditsOrange',
  'dish', 'dishStand', 'fan1', 'fan2', 'graphicsJoined',
  'jesseZhouJoined', 'jZhouBlack', 'jZhouPink', 'lampLights',
  'neonBlue', 'neonGreen', 'neonPink', 'neonYellow',
  'poleLight', 'portalLight', 'projectsRed', 'projectsWhite',
  'storageLight', 'yellowRightLight',
])

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

// ── Simple KD-tree bucket for nearest neighbour search ───────────────────────
// Divides space into grid cells for fast lookup instead of brute O(n²) search
function buildSpatialIndex(positions) {
  const cellSize = 0.01  // 1cm buckets — tight enough for mesh verts
  const cells = new Map()

  const key = (x, y, z) => {
    const cx = Math.floor(x / cellSize)
    const cy = Math.floor(y / cellSize)
    const cz = Math.floor(z / cellSize)
    return `${cx},${cy},${cz}`
  }

  positions.forEach(([x, y, z], i) => {
    const k = key(x, y, z)
    if (!cells.has(k)) cells.set(k, [])
    cells.get(k).push(i)
  })

  function nearest(qx, qy, qz) {
    // Search expanding shells of cells until we find a candidate
    let bestDist = Infinity
    let bestIdx  = 0

    for (let r = 0; r <= 3; r++) {
      const cx0 = Math.floor(qx / cellSize)
      const cy0 = Math.floor(qy / cellSize)
      const cz0 = Math.floor(qz / cellSize)

      for (let dx = -r; dx <= r; dx++) {
        for (let dy = -r; dy <= r; dy++) {
          for (let dz = -r; dz <= r; dz++) {
            // Only check shell (outermost cells) for r > 0
            if (r > 0 && Math.abs(dx) < r && Math.abs(dy) < r && Math.abs(dz) < r) continue
            const k = `${cx0+dx},${cy0+dy},${cz0+dz}`
            const bucket = cells.get(k)
            if (!bucket) continue
            for (const idx of bucket) {
              const [px, py, pz] = positions[idx]
              const d = (px-qx)**2 + (py-qy)**2 + (pz-qz)**2
              if (d < bestDist) { bestDist = d; bestIdx = idx }
            }
          }
        }
      }
      // If we found something in this shell, no need to expand further
      // (a closer match in a wider shell is impossible if shell distance > bestDist)
      if (bestDist < (r * cellSize) ** 2) break
    }

    return { idx: bestIdx, dist: Math.sqrt(bestDist) }
  }

  return { nearest }
}

console.log(`\n📂 Loading original : ${ORIGINAL_FILE}`)
const originalDoc  = await io.read(ORIGINAL_FILE)
const originalRoot = originalDoc.getRoot()

// Use the already-restored file as base so the 21 injected nodes are preserved
console.log(`📂 Loading modified : ramenShop_uvrestored.glb  (preserving already-injected UVs)`)
const modifiedDoc  = await io.read('./models/ramenShop_uvrestored.glb')
const modifiedRoot = modifiedDoc.getRoot()

// Build original node map
const originalNodes = new Map()
originalRoot.listNodes().forEach(n => {
  if (n.getMesh()) originalNodes.set(n.getName(), n)
})

// Build modified node map
const modifiedNodes = new Map()
modifiedRoot.listNodes().forEach(n => {
  if (n.getMesh() && MISMATCH_NAMES.has(n.getName())) {
    modifiedNodes.set(n.getName(), n)
  }
})

console.log(`\n✅ Mismatch nodes to process: ${modifiedNodes.size}`)
console.log('\n====== NEAREST-NEIGHBOUR UV TRANSFER ======\n')

const stats = { ok: [], warn: [], fail: [] }

for (const [name, modNode] of modifiedNodes) {
  const origNode = originalNodes.get(name)
  if (!origNode) {
    stats.fail.push({ name, reason: 'not in original' })
    console.log(`❌ [FAIL]  "${name}"  — not in original`)
    continue
  }

  const origPrim = origNode.getMesh().listPrimitives()[0]
  const modPrim  = modNode.getMesh().listPrimitives()[0]

  const origPos = origPrim.getAttribute('POSITION')
  const origUV  = origPrim.getAttribute('TEXCOORD_0')
  const modPos  = modPrim.getAttribute('POSITION')

  if (!origUV) {
    stats.fail.push({ name, reason: 'no UV in original' })
    console.log(`❌ [FAIL]  "${name}"  — original has no TEXCOORD_0`)
    continue
  }

  const origCount = origPos.getCount()
  const modCount  = modPos.getCount()

  // Read original positions and UVs
  const origPositions = []
  const origUVs = []
  for (let i = 0; i < origCount; i++) {
    origPositions.push(origPos.getElement(i, []))
    origUVs.push(origUV.getElement(i, []))
  }

  // Build spatial index on original positions
  const index = buildSpatialIndex(origPositions)

  // For each modified vertex, find nearest original vertex and take its UV
  const newUVData = new Float32Array(modCount * 2)
  let maxDist = 0
  let warnCount = 0
  const WARN_THRESHOLD = 0.05  // 5cm — flag if nearest match is far away

  for (let i = 0; i < modCount; i++) {
    const [qx, qy, qz] = modPos.getElement(i, [])
    const { idx, dist } = index.nearest(qx, qy, qz)
    const [u, v] = origUVs[idx]
    newUVData[i * 2]     = u
    newUVData[i * 2 + 1] = v
    if (dist > maxDist) maxDist = dist
    if (dist > WARN_THRESHOLD) warnCount++
  }

  // Inject new UV accessor into modified doc
  const newAcc = modifiedDoc.createAccessor()
    .setType('VEC2')
    .setArray(newUVData)
  modPrim.setAttribute('TEXCOORD_0', newAcc)

  if (warnCount > 0) {
    stats.warn.push({ name, modCount, origCount, maxDist: maxDist.toFixed(4), warnCount })
    console.log(`⚠️  [WARN]  "${name}"  mod:${modCount}  orig:${origCount}  maxDist:${maxDist.toFixed(4)}m  (${warnCount} verts > ${WARN_THRESHOLD}m from nearest match)`)
  } else {
    stats.ok.push(name)
    console.log(`✅ [OK]    "${name}"  mod:${modCount}  orig:${origCount}  maxDist:${maxDist.toFixed(4)}m`)
  }
}

// ── Summary ───────────────────────────────────────────────────────────────────
console.log('\n====== SUMMARY ======\n')
console.log(`✅ Clean transfer : ${stats.ok.length}`)
console.log(`⚠️  Transferred with warnings : ${stats.warn.length}`)
console.log(`❌ Failed : ${stats.fail.length}`)

if (stats.warn.length > 0) {
  console.log('\nWarned nodes — UVs transferred but check visually:')
  stats.warn.forEach(w => {
    console.log(`   "${w.name}"  maxDist:${w.maxDist}m  ${w.warnCount} suspicious verts`)
  })
}

await io.write(OUTPUT_FILE, modifiedDoc)
console.log(`\n📦 Written: ${OUTPUT_FILE}\n`)
