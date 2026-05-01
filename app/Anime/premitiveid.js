import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'
import fs from 'fs'
import path from 'path'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc = await io.read('house-water-transformed.glb')
const root = doc.getRoot()
const node  = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh  = node.getMesh()
const scale = node.getScale()

// ── Extract all textures as images ──────────────────────────────────────────
const textureDir = './identified_textures'
fs.mkdirSync(textureDir, { recursive: true })

const textureFileMap = new Map() // textureName → saved filename

root.listTextures().forEach(tex => {
  const name  = tex.getName() || 'unnamed'
  const mime  = tex.getMimeType()
  const ext   = mime === 'image/png' ? 'png' : 'jpg'
  const image = tex.getImage()

  if (image) {
    const filename = `${name}.${ext}`
    const filepath = path.join(textureDir, filename)
    fs.writeFileSync(filepath, Buffer.from(image))
    textureFileMap.set(name, filename)
  }
})

console.log(`\n✅ Extracted ${textureFileMap.size} textures → ./${textureDir}/`)
console.log([...textureFileMap.values()].map(f => `   ${f}`).join('\n'))

// ── Shape classifier based on bounding box ───────────────────────────────────
function classifyShape(sX, sY, sZ, verts) {
  const sorted = [sX, sY, sZ].sort((a, b) => a - b)
  const [small, mid, large] = sorted
  const flatRatio   = small / large  // close to 0 = very flat
  const squareRatio = mid / large    // close to 1 = square/cube

  if (verts === 4)                          return '🖼️  Flat quad       (screen / painting / window / rug)'
  if (verts <= 8  && flatRatio < 0.1)       return '📄  Thin slab       (panel / wall section)'
  if (verts <= 24 && squareRatio > 0.8)     return '📦  Box / Cube      (furniture block / storage)'
  if (verts > 400 && squareRatio > 0.8)     return '⚽  Sphere-like     (ball / rounded object)'
  if (small < 0.05 && large > 0.5)         return '🪵  Pole / Rod      (leg / pipe / cue stick)'
  if (flatRatio < 0.15 && large > 0.8)     return '🪟  Large flat      (wall / floor / ceiling)'
  if (flatRatio < 0.15 && large < 0.5)     return '🖼️  Small flat      (small picture / tile)'
  if (squareRatio > 0.7 && large < 0.3)    return '🔩  Small cube      (knob / handle / fitting)'
  if (large > 1.5 && mid > 0.8)            return '🛋️  Large object    (sofa / bath / table)'
  return '❓  Unknown shape'
}

// ── Colour descriptor ────────────────────────────────────────────────────────
function describeColor(f) {
  const [r, g, b, a] = f
  const transparent = a < 0.8 ? ` transparent(α=${a.toFixed(2)})` : ''
  const hex = '#' + [r, g, b].map(v => Math.round(v * 255).toString(16).padStart(2, '0')).join('')

  if (r < 0.05 && g < 0.05 && b < 0.05) return `⬛ Black${transparent}  ${hex}`
  if (r > 0.95 && g > 0.95 && b > 0.95) return `⬜ White${transparent}  ${hex}`
  if (r > 0.6  && g > 0.6  && b > 0.6)  return `🔘 Light grey${transparent}  ${hex}`
  if (r < 0.3  && g < 0.3  && b < 0.3)  return `⚫ Dark grey${transparent}  ${hex}`
  if (r > 0.6  && g < 0.3  && b < 0.3)  return `🔴 Red${transparent}  ${hex}`
  if (r < 0.3  && g > 0.5  && b < 0.3)  return `🟢 Green${transparent}  ${hex}`
  if (r < 0.3  && g < 0.3  && b > 0.6)  return `🔵 Blue${transparent}  ${hex}`
  if (r > 0.6  && g > 0.5  && b < 0.3)  return `🟡 Yellow${transparent}  ${hex}`
  if (r > 0.6  && g > 0.3  && b < 0.2)  return `🟠 Orange${transparent}  ${hex}`
  if (r > 0.4  && g < 0.3  && b > 0.4)  return `🟣 Purple${transparent}  ${hex}`
  if (r < 0.4  && g > 0.5  && b > 0.5)  return `🩵 Cyan${transparent}  ${hex}`
  if (r > 0.5  && g > 0.35 && b < 0.2)  return `🟤 Brown${transparent}  ${hex}`
  return `🎨 Mixed [${r.toFixed(2)},${g.toFixed(2)},${b.toFixed(2)}]${transparent}  ${hex}`
}

// ── Floor guesser based on Y center ─────────────────────────────────────────
function guessFloor(cy) {
  if (cy < -0.5)        return '🔽 Below ground (basement / lower floor)'
  if (cy < 0.5)         return '🟫 Ground level'
  if (cy < 1.5)         return '🪑 Low level     (floor furniture / rugs)'
  if (cy < 2.5)         return '🚪 Mid level     (worktops / doors / windows)'
  if (cy < 3.5)         return '👤 Standing height (shelves / mirrors / art)'
  if (cy < 5.0)         return '🔼 High level    (top cabinets / ceiling lights)'
  return                       '☁️  Ceiling / Roof'
}

// ── Main primitive report ────────────────────────────────────────────────────
console.log('\n\n====== PRIMITIVE IDENTIFIER REPORT ======\n')

mesh.listPrimitives().forEach((prim, i) => {
  const mat     = prim.getMaterial()
  const matName = mat?.getName() ?? '(none)'
  const pos     = prim.getAttribute('POSITION')
  const verts   = pos?.getCount() ?? 0

  let minX = Infinity,  minY = Infinity,  minZ = Infinity
  let maxX = -Infinity, maxY = -Infinity, maxZ = -Infinity

  if (pos) {
    for (let v = 0; v < verts; v++) {
      const val = pos.getElement(v, [])
      if (val[0] < minX) minX = val[0]
      if (val[0] > maxX) maxX = val[0]
      if (val[1] < minY) minY = val[1]
      if (val[1] > maxY) maxY = val[1]
      if (val[2] < minZ) minZ = val[2]
      if (val[2] > maxZ) maxZ = val[2]
    }
  }

  // Real world values
  const cx   = ((minX + maxX) / 2 * scale[0])
  const cy   = ((minY + maxY) / 2 * scale[1])
  const cz   = ((minZ + maxZ) / 2 * scale[2])
  const sX   = (maxX - minX) * scale[0]
  const sY   = (maxY - minY) * scale[1]
  const sZ   = (maxZ - minZ) * scale[2]

  // Material info
  const colorFactor   = mat?.getBaseColorFactor() ?? [0,0,0,1]
  const tex           = mat?.getBaseColorTexture()
  const texName       = tex?.getName() ?? null
  const texFile       = texName ? textureFileMap.get(texName) ?? 'not extracted' : null
  const alphaMode     = mat?.getAlphaMode() ?? 'n/a'
  const metallic      = mat?.getMetallicFactor()?.toFixed(2) ?? 'n/a'
  const roughness     = mat?.getRoughnessFactor()?.toFixed(2) ?? 'n/a'

  console.log(`┌─ Primitive[${i}] ─────────────────────────────────`)
  console.log(`│  Material    : "${matName}"`)
  console.log(`│  Vertices    : ${verts}`)
  console.log(`│  Position    : [${cx.toFixed(2)}, ${cy.toFixed(2)}, ${cz.toFixed(2)}]`)
  console.log(`│  Size        : ${sX.toFixed(2)}W x ${sY.toFixed(2)}H x ${sZ.toFixed(2)}D`)
  console.log(`│  Shape guess : ${classifyShape(sX, sY, sZ, verts)}`)
  console.log(`│  Floor       : ${guessFloor(cy)}`)
  console.log(`│  Colour      : ${describeColor(colorFactor)}`)
  console.log(`│  Alpha mode  : ${alphaMode}`)
  console.log(`│  Metallic    : ${metallic}  Roughness: ${roughness}`)
  if (texFile) {
    console.log(`│  Texture     : ✅ ${texFile}  → open ./identified_textures/${texFile}`)
  } else {
    console.log(`│  Texture     : none (solid colour only)`)
  }
  console.log(`└──────────────────────────────────────────────────`)
})
