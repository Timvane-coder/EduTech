import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc  = await io.read('house-water-transformed.glb')
const root = doc.getRoot()
const node  = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh  = node.getMesh()
const scale = node.getScale()
const RAW   = 1 / scale[0]  // 100

const OFFSET_Y_METRES = -6.22
const OFFSET_Y_RAW    = OFFSET_Y_METRES * RAW

const FIRST_FLOOR = [
  0,   // ground_1        — floor/ground plane
  1,   // wall_1_2        — main walls
  2,   // room_58_344
  14,  // flltgrey
  16,  // white_409
  17,  // yellowbrt
  18,  // flltgrey_window
  19,  // default
  20,  // lighttan         — door frame
  21,  // white_Cube_2_1
  22,  // Glass
  23,  // flltgrey_window
  24,  // Lock
  25,  // Frame_in
  26,  // Frame_in
  27,  // wall_1_2
  28,  // wall_1_2
  29,  // flltgrey_window
  30,  // white_Fenetre
  31,  // None
  32,  // white_13_526
  33,  // flltgrey_window
  34,  // wall_1_2        — back wall
  36,  // white_409
  37,  // white_409
  38,  // white_409
  39,  // white_409
  42,  // glassblutint    — glass panel (the enclosure glass!)
  43,  // black
  44,  // chair
  46,  // brown
  47,  // black_615
  48,  // white_618
  49,  // Oriental_rug
  50,  // carpet_627
  51,  // gray
  52,  // Bathmat
  55,  // 636
  60,  // Picture_1
  61,  // Picture_5
  62,  // 651
  63,  // Aluminium_652
  65,  // black_656
  66,  // cueEnd
  67,  // 658
  68,  // cueFront
  69,  // cueBrass
  70,  // cueBrass
  71,  // cueRubber
  72,  // cueTip
  73,  // ballCue
  74,  // ballN1
  75,  // ballN2
  76,  // ballN3
  77,  // ballN4
  78,  // ballN5
  79,  // ballN6
  80,  // ballN7
  81,  // ballN8
  82,  // ballN9
  83,  // ballN10
  84,  // ballN11
  85,  // ballN15
  86,  // ballN14
  87,  // ballN13
  88,  // Material.001
  89,  // ballN12
  90,  // Material.001
  91,  // felt
  92,  // GrisClair
  93,  // BoisClair
  94,  // wall_1_2
  102, // Feet
  103, // Material_Cube
  104, // sofa
  105, // negrepotes
  106, // metall
  121, // mirror
  124, // black_910
  125, // sink_chrome
  126, // sink_faiance
  127, // chrome_dark
  131, // Cardboard
  132, // 941
  133, // sink_chrome
  134, // None_943
  135, // 941
  136, // sink_chrome
  137, // sink_faiance
  139, // Glass_mirror
  140, // Frame_out
  141, // wall_1_2
  144, // ballCue
  147, // bottom_bottom_1059
  148, // bottom_bottom_1059
  149, // bottom_bottom_1059
  150, // bottom_bottom_1059
  151, // bottom_bottom_1059
  152, // bottom_bottom_1059
  154, // bottom_bottom_1152
  155, // bottom_bottom_1152
  156, // bottom_bottom_1152
  157, // bottom_bottom_1152
  158, // bottom_bottom_1152
  159, // bottom_bottom_1152
  160, // bottom_bottom_1182
  161, // bottom_bottom_1182
  162, // bottom_bottom_1182
  163, // bottom_bottom_1182
  164, // bottom_bottom_1182
  165, // bottom_bottom_1182
  166, // bottom_bottom_1212
  167, // bottom_bottom_1212
  168, // bottom_bottom_1212
  169, // bottom_bottom_1212
  170, // bottom_bottom_1212
  171, // bottom_bottom_1212
]

const primitives = mesh.listPrimitives()
let cloned = 0

for (const idx of FIRST_FLOOR) {
  const prim = primitives[idx]
  if (!prim) {
    console.warn(`⚠️  Primitive[${idx}] not found — skipping`)
    continue
  }

  // Clone the primitive shell (shares accessors by reference initially)
  const clone = prim.clone()

  // Deep-copy POSITION so we don't mutate the original's vertices
  const origPos = prim.getAttribute('POSITION')
  if (origPos) {
    const count = origPos.getCount()
    const type  = origPos.getType()  // 'VEC3'
    const arr   = origPos.getArray()

    // Independent copy of the vertex data
    const newArray = arr.slice()

    // Shift Y in the new array (VEC3 → stride 3)
    for (let v = 0; v < count; v++) {
      newArray[v * 3 + 1] += OFFSET_Y_RAW
    }

    // Attach as a fresh accessor — bounds computed automatically in v4
    const newPos = doc.createAccessor()
      .setType(type)
      .setArray(newArray)

    clone.setAttribute('POSITION', newPos)
  }

  // Share the original material — same textures/colours, no duplication
  clone.setMaterial(prim.getMaterial())

  mesh.addPrimitive(clone)
  console.log(`✅  Cloned Primitive[${idx}]  mat: "${prim.getMaterial()?.getName()}"  → Y shifted ${OFFSET_Y_METRES}m`)
  cloned++
}

console.log(`\n── Summary ──────────────────────────────────────`)
console.log(`Primitives duplicated : ${cloned}`)
console.log(`Total primitives now  : ${mesh.listPrimitives().length}`)
console.log(`─────────────────────────────────────────────────`)

await io.write('house-modified.glb', doc)
console.log('\nDone — house-modified.glb written')
