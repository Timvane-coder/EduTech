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

// ── Floor offset ─────────────────────────────────────────────────────────────
// First floor Y span is 0.0 → 6.22m, so shift down by 6.22m
const OFFSET_Y_METRES = -6.22
const OFFSET_Y_RAW    = OFFSET_Y_METRES * RAW  // -622 raw units

// ── Primitives to duplicate ──────────────────────────────────────────────────
// Excludes full-building-height structural primitives
const SKIP = new Set([
   0,   // ground_1        Y span: -0.02 → 6.22  (full building)
   1,   // wall_1_2        Y span:  0.01 → 6.15  (full building)
   // flltgrey_window Y span:  1.21 → 5.22  (full building)
     // default         Y span:  0.33 → 5.14  (full building)
  34,   // wall_1_2        Y span:  0.00 → 6.22  (full building)
     // ballCue         Y span:  0.33 → 4.91  (large structural)
])

const FIRST_FLOOR = [

   //1,   // wall_1_2        Y span:  0.01 → 6.15  (full buil>
   2,   // room_58_344     Y span:  0.20 → 5.90  (full buil>
  14,   // flltgrey        Y span:  0.77 → 5.80  (full buil>
  16,   // white_409       Y span:  0.21 → 5.30  (full buil>
  18,   // flltgrey_window Y span:  1.21 → 5.22  (full buil>
  19,   // default         Y span:  0.33 → 5.14  (full buil>
 // 34,   // wall_1_2        Y span:  0.00 → 6.22  (full buil>
  36,   // white_409       Y span:  0.18 → 6.06  (full buil>
  37,   // white_409       Y span:  0.18 → 6.06  (full buil>
  38,   // white_409       Y span:  0.18 → 6.06  (full buil>
  39,   // white_409       Y span:  0.18 → 6.06  (full buil>
  43,   // black           Y span:  0.30 → 5.59  (full buil>
  55,   // 636             Y span:  0.16 → 5.97  (full buil>
 144,   // ballCue         Y span:  0.33 → 4.91  (large str>
  17,   // yellowbrt       small fitting
  //2,
  //0,   // lighttan        door frame
  21,   // white_Cube_2_1  window element
  22,   // Glass           window glass
  23,   // flltgrey_window window pane
  24,   // Lock            door lock
  25,   // Frame_in        door frame inner
  26,   // Frame_in        door frame inner
  27,   // wall_1_2        small wall section
  28,   // wall_1_2        small wall section
  29,   // flltgrey_window window pane
  30,   // white_Fenetre   window frame
  31,   // None            wall panel
  32,   // white_13_526    window frame upper
  33,   // flltgrey_window window pane
  42,   // glassblutint    glass panel
  44,
  46,   // brown           furniture
  47,   // black_615       furniture
  48,   // white_618       furniture detail
  49,   // Oriental_rug
  50,   // carpet_627
  51,   // gray            carpet backing
  52,   // Bathmat
  60,   // Picture_1
  61,   // Picture_5
  62,   // 651             TV screen
  63,   // Aluminium_652   TV frame/stand
  65,   // black_656       billiard table body
  66,   // cueEnd
  67,   // 658             cue part
  68,   // cueFront
  69,   // cueBrass
  70,   // cueBrass
  71,   // cueRubber
  72,   // cueTip
  73,   // ballCue
  74,   // ballN1
  75,   // ballN2
  76,   // ballN3
  77,   // ballN4
  78,   // ballN5
  79,   // ballN6
  80,   // ballN7
  81,   // ballN8
  82,   // ballN9
  83,   // ballN10
  84,   // ballN11
  85,   // ballN15
  86,   // ballN14
  87,   // ballN13
  88,   // Material.001    billiard table surface
  89,   // ballN12
  90,   // Material.001    billiard table frame
  91,   // felt            billiard table felt
  92,   // GrisClair       bookshelf/cabinet
  93,   // BoisClair       wood furniture
  94,   // wall_1_2        small wall section
  102,  // Feet            furniture feet
  103,  // Material_Cube   furniture block
  104,  // sofa
  105,  // negrepotes      sofa detail
  106,  // metall          sofa metal
  121,  // mirror
  124,  // black_910       sink area
  125,  // sink_chrome
  126,  // sink_faiance
  127,  // chrome_dark
  131,
  132,  // 941             tap/fixture
  133,  // sink_chrome     tap
  134,  // None_943        fitting
  135,  // 941             fitting
  136,  // sink_chrome     tap detail
  137,  // sink_faiance    sink basin
  139,  // Glass_mirror    mirror glass
  140,  // Frame_out       mirror frame
  141,  // wall_1_2        mirror backing
  147,  // bottom_bottom_1059  pool/water feature
  148,  // bottom_bottom_1059
  149,  // bottom_bottom_1059
  150,  // bottom_bottom_1059
  151,  // bottom_bottom_1059
  152,  // bottom_bottom_1059
  154,  // bottom_bottom_1152  pool wall
  155,  // bottom_bottom_1152
  156,  // bottom_bottom_1152
  157,  // bottom_bottom_1152
  158,  // bottom_bottom_1152
  159,  // bottom_bottom_1152
  160,  // bottom_bottom_1182  pool feature
  161,  // bottom_bottom_1182
  162,  // bottom_bottom_1182
  163,  // bottom_bottom_1182
  164,  // bottom_bottom_1182
  165,  // bottom_bottom_1182
  166,  // bottom_bottom_1212  pool feature
  167,  // bottom_bottom_1212
  168,  // bottom_bottom_1212
  169,  // bottom_bottom_1212
  170,  // bottom_bottom_1212
  171,  // bottom_bottom_1212
]

// ── Duplicate each primitive ─────────────────────────────────────────────────
const primitives = mesh.listPrimitives()
let cloned = 0

for (const idx of FIRST_FLOOR) {
  const prim = primitives[idx]
  if (!prim) {
    console.warn(`⚠️  Primitive[${idx}] not found — skipping`)
    continue
  }

  const clone = prim.clone()

  // Clone material so it's independent
  const mat = prim.getMaterial()
  if (mat) {
    const clonedMat = mat.clone()
    clonedMat.setName(`${mat.getName()}_floor_copy`)
    clone.setMaterial(clonedMat)
  }

  // Shift all vertices down by OFFSET_Y_RAW
  const pos = clone.getAttribute('POSITION')
  if (pos) {
    for (let v = 0; v < pos.getCount(); v++) {
      const val = pos.getElement(v, [])
      val[1] += OFFSET_Y_RAW
      pos.setElement(v, val)
    }
  }

  // Also shift normals-dependent attributes if any UVs need updating
  // (UVs stay the same — textures map correctly without changes)

  mesh.addPrimitive(clone)
  console.log(`✅  Cloned Primitive[${idx}]  mat: "${mat?.getName()}"  → shifted Y by ${OFFSET_Y_METRES}m`)
  cloned++
}

console.log(`\n── Summary ──────────────────────────────────────`)
console.log(`Primitives duplicated : ${cloned}`)
console.log(`Total primitives now  : ${mesh.listPrimitives().length}`)
console.log(`New floor Y range     : ${OFFSET_Y_METRES.toFixed(2)}m → ${(6.22 + OFFSET_Y_METRES).toFixed(2)}m`)
console.log(`─────────────────────────────────────────────────`)

await io.write('house-modified.glb', doc)
console.log('\nDone — house-modified.glb written')
