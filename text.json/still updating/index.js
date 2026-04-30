import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc = await io.read('house-water-transformed.glb')
const root = doc.getRoot()

// ── 1. SCENE GRAPH ──────────────────────────────────────────────────────────
console.log('\n====== SCENE GRAPH ======')

function printNode(node, depth = 0) {
  const indent = '  '.repeat(depth)
  const mesh = node.getMesh()
  const meshInfo = mesh ? ` [Mesh: "${mesh.getName()}"]` : ''
  console.log(`${indent}Node: "${node.getName()}"${meshInfo}`)

  if (mesh) {
    mesh.listPrimitives().forEach((prim, i) => {
      const mat = prim.getMaterial()
      const attrs = prim.listSemantics()
      console.log(`${indent}    Primitive[${i}]:`)
      console.log(`${indent}      Material  : ${mat ? `"${mat.getName()}"` : 'none'}`)
      console.log(`${indent}      Attributes: ${attrs.join(', ')}`)

      const pos = prim.getAttribute('POSITION')
      if (pos) console.log(`${indent}      Vertices  : ${pos.getCount()}`)

      const indices = prim.getIndices()
      if (indices) console.log(`${indent}      Indices   : ${indices.getCount()}`)
    })
  }

  node.listChildren().forEach(child => printNode(child, depth + 1))
}

root.listScenes().forEach(scene => {
  console.log(`Scene: "${scene.getName()}"`)
  scene.listChildren().forEach(node => printNode(node, 1))
})

// ── 2. MATERIALS ────────────────────────────────────────────────────────────
console.log('\n====== MATERIALS ======')
root.listMaterials().forEach(mat => {
  const base = mat.getBaseColorFactor()
  const tex  = mat.getBaseColorTexture()
  console.log(`Material: "${mat.getName()}"`)
  console.log(`  BaseColorFactor : [${base.map(v => v.toFixed(2)).join(', ')}]`)
  console.log(`  BaseColorTexture: ${tex ? tex.getName() || '(unnamed)' : 'none'}`)
  console.log(`  AlphaMode       : ${mat.getAlphaMode()}`)
  console.log(`  DoubleSided     : ${mat.getDoubleSided()}`)
  console.log(`  Metallic        : ${mat.getMetallicFactor().toFixed(2)}`)
  console.log(`  Roughness       : ${mat.getRoughnessFactor().toFixed(2)}`)
})

// ── 3. TEXTURES ─────────────────────────────────────────────────────────────
console.log('\n====== TEXTURES ======')
root.listTextures().forEach(tex => {
  console.log(`Texture: "${tex.getName()}"  mimeType: ${tex.getMimeType()}  size: ${tex.getImage()?.byteLength ?? 0} bytes`)
})

// ── 4. SUMMARY ──────────────────────────────────────────────────────────────
console.log('\n====== SUMMARY ======')
console.log(`Scenes    : ${root.listScenes().length}`)
console.log(`Nodes     : ${root.listNodes().length}`)
console.log(`Meshes    : ${root.listMeshes().length}`)
console.log(`Materials : ${root.listMaterials().length}`)
console.log(`Textures  : ${root.listTextures().length}`)
console.log(`Animations: ${root.listAnimations().length}`)
