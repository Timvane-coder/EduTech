import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import { prune, unpartition } from '@gltf-transform/functions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

// ── Load the current final file (has exhibitStand_root + all original nodes) ──
const doc = await io.read('ramenShop-final.glb')
const root = doc.getRoot()
const scene = root.listScenes()[0]

// ── Movement offsets — adjust these until the shop settles in the right place ──
//    X: left(-) / right(+)
//    Y: down(-)  / up(+)      (leave at 0 unless you also need vertical nudging)
//    Z: back(-)  / forward(+)
const MOVE_X = 0
const MOVE_Y = 0
const MOVE_Z = 1.15

// ── Separate exhibitStand_root from everything else ────────────────────────────
const allChildren = [...scene.listChildren()]
const exhibitNode = allChildren.find(n => n.getName() === 'exhibitStand_root')
const shopNodes = allChildren.filter(n => n.getName() !== 'exhibitStand_root' && n.getName() !== 'ramenShop_root')

console.log(`Found ${shopNodes.length} shop nodes to group, and ${exhibitNode ? 1 : 0} exhibitStand_root node to leave untouched.`)

if (!exhibitNode) {
  console.log('⚠️  WARNING: "exhibitStand_root" not found — check the node name before proceeding.')
}

// ── Create (or reuse) a single wrapper group for all non-exhibit nodes ─────────
let shopGroup = scene.listChildren().find(n => n.getName() === 'ramenShop_root')

if (!shopGroup) {
  shopGroup = doc.createNode('ramenShop_root')
  scene.addChild(shopGroup)
  shopNodes.forEach(node => {
    shopGroup.addChild(node)
  })
  console.log(`✅ Created "ramenShop_root" wrapper and reparented ${shopNodes.length} nodes into it.`)
} else {
  console.log(`ℹ️  "ramenShop_root" wrapper already exists — reusing it, applying new offset on top of existing translation.`)
}

// ── Apply the movement offset to the wrapper's translation ────────────────────
const currentT = shopGroup.getTranslation()
shopGroup.setTranslation([
  currentT[0] + MOVE_X,
  currentT[1] + MOVE_Y,
  currentT[2] + MOVE_Z,
])

console.log('── ramenShop_root translation ──')
console.log('New translation:', shopGroup.getTranslation().map(v => v.toFixed(3)))

// ── Prune + consolidate ──────────────────────────────────────────────────────────
await doc.transform(prune())
console.log('✅ Pruned unused resources')

await doc.transform(unpartition())
console.log('✅ Consolidated into single buffer')

await io.write('ramenShop-final.glb', doc)
console.log('\n✅ Written: ramenShop-final.glb')
