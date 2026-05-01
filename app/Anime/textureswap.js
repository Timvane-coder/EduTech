import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'
import fs from 'fs'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const doc = await io.read('house-water-transformed.glb')
const root = doc.getRoot()
const node = root.listNodes().find(n => n.getName() === 'house_water-2')
const mesh = node.getMesh()

// ── TEXTURE REPLACEMENT MAP ──────────────────────────────────────────────────
// Key   = primitive index
// value = { file, mime, name }
// Set file to null to skip (keep original)
// ─────────────────────────────────────────────────────────────────────────────
const replacements = {

  // ── WALL ART / PICTURES ───────────────────────────────────────────────────
  60: { file: './textures/picture_1.jpg',       mime: 'image/jpeg', name: 'picture_1_new'       },  // Picture_1 (large frame)
  61: { file: './textures/picture_5.jpg',       mime: 'image/jpeg', name: 'picture_5_new'       },  // Picture_5 (small frame)

  // ── LANDSCAPE PAINTINGS / WINDOW VIEWS ───────────────────────────────────
  56: { file: './textures/lake_moraine.jpg',    mime: 'image/jpeg', name: 'lake_moraine_new'    },  // Material_LakeMoraine  center:[2.73, 0.17, 0.76]
  64: { file: './textures/etretat.jpg',         mime: 'image/jpeg', name: 'etretat_new'         },  // Material_Etretat      center:[6.62, 5.87, 1.00]

  // ── NUMBERED PAINTINGS (lower floor, likely more wall art) ────────────────
  58: { file: './textures/art_640.jpg',         mime: 'image/jpeg', name: 'art_640_new'         },  // 640  center:[6.66, 0.17, 0.76]
  59: { file: './textures/art_643.jpg',         mime: 'image/jpeg', name: 'art_643_new'         },  // 643  center:[10.64, 0.20, 0.76]

  // ── TV SCREEN ─────────────────────────────────────────────────────────────
  62: { file: './textures/tv_screen.jpg',       mime: 'image/jpeg', name: 'tv_screen_new'       },  // 651

  // ── RUGS / FLOOR COVERINGS ────────────────────────────────────────────────
  49: { file: './textures/oriental_rug.jpg',    mime: 'image/jpeg', name: 'oriental_rug_new'    },  // Oriental_rug  center:[6.67, 3.12, 2.49]
  50: { file: './textures/carpet.jpg',          mime: 'image/jpeg', name: 'carpet_new'          },  // carpet_627    center:[10.77, 3.37, 2.49]
  52: { file: './textures/bathmat.jpg',         mime: 'image/jpeg', name: 'bathmat_new'         },  // Bathmat       center:[2.86, 2.71, 2.49]

  // ── MIRROR ────────────────────────────────────────────────────────────────
  121: { file: './textures/mirror.jpg',         mime: 'image/jpeg', name: 'mirror_new'          },  // sweethome3d_window_mirror_902

  // ── BILLIARD TABLE WOOD ───────────────────────────────────────────────────
  93: { file: './textures/wood.jpg',            mime: 'image/jpeg', name: 'bois_clair_new'      },  // BoisClair (table wood)

  // ── BILLIARD CUE ──────────────────────────────────────────────────────────
  66: { file: './textures/cue_end.jpg',         mime: 'image/jpeg', name: 'cue_end_new'         },  // cueEnd
  68: { file: './textures/cue_front.jpg',       mime: 'image/jpeg', name: 'cue_front_new'       },  // cueFront

  // ── BILLIARD BALLS (replace all 15) ──────────────────────────────────────
  74: { file: './textures/ball_1.jpg',          mime: 'image/jpeg', name: 'ball_1_new'          },
  75: { file: './textures/ball_2.jpg',          mime: 'image/jpeg', name: 'ball_2_new'          },
  76: { file: './textures/ball_3.jpg',          mime: 'image/jpeg', name: 'ball_3_new'          },
  77: { file: './textures/ball_4.jpg',          mime: 'image/jpeg', name: 'ball_4_new'          },
  78: { file: './textures/ball_5.jpg',          mime: 'image/jpeg', name: 'ball_5_new'          },
  79: { file: './textures/ball_6.jpg',          mime: 'image/jpeg', name: 'ball_6_new'          },
  80: { file: './textures/ball_7.jpg',          mime: 'image/jpeg', name: 'ball_7_new'          },
  81: { file: './textures/ball_8.jpg',          mime: 'image/jpeg', name: 'ball_8_new'          },
  82: { file: './textures/ball_9.jpg',          mime: 'image/jpeg', name: 'ball_9_new'          },
  83: { file: './textures/ball_10.jpg',         mime: 'image/jpeg', name: 'ball_10_new'         },
  84: { file: './textures/ball_11.jpg',         mime: 'image/jpeg', name: 'ball_11_new'         },
  85: { file: './textures/ball_15.jpg',         mime: 'image/jpeg', name: 'ball_15_new'         },
  86: { file: './textures/ball_14.jpg',         mime: 'image/jpeg', name: 'ball_14_new'         },
  87: { file: './textures/ball_13.jpg',         mime: 'image/jpeg', name: 'ball_13_new'         },
  89: { file: './textures/ball_12.jpg',         mime: 'image/jpeg', name: 'ball_12_new'         },

  // ── APPLIANCE (396 — appears 5x, likely a washing machine or boiler) ─────
  // All 5 primitives share the same material so cloning one affects all
  // Just replace primitive[7] — the others share the same mat reference
   7: { file: './textures/appliance.jpg',       mime: 'image/jpeg', name: 'appliance_new'       },
}

// ── BATCH PROCESSOR ──────────────────────────────────────────────────────────
let replaced = 0
let skipped  = 0

const primitives = mesh.listPrimitives()

for (const [indexStr, config] of Object.entries(replacements)) {
  const index = parseInt(indexStr)
  const prim  = primitives[index]

  if (!prim) {
    console.warn(`⚠️  Primitive[${index}] not found — skipping`)
    skipped++
    continue
  }

  if (!config.file || !fs.existsSync(config.file)) {
    console.log(`⏭️  Primitive[${index}] "${prim.getMaterial()?.getName()}" — no file, skipping`)
    skipped++
    continue
  }

  const originalMat = prim.getMaterial()
  const newMat      = originalMat.clone()
  newMat.setName(config.name + '_mat')
  prim.setMaterial(newMat)

  newMat.setBaseColorTexture(null)

  const imageData = fs.readFileSync(config.file)
  const newTex    = doc.createTexture(config.name)
    .setImage(new Uint8Array(imageData))
    .setMimeType(config.mime)

  newMat.setBaseColorTexture(newTex)
  newMat.setBaseColorFactor([1.0, 1.0, 1.0, 1.0])

  console.log(`✅  Primitive[${index}] "${originalMat?.getName()}" → "${config.file}"`)
  replaced++
}

console.log(`\n── Summary ──────────────────────────`)
console.log(`Replaced : ${replaced}`)
console.log(`Skipped  : ${skipped}`)
console.log(`─────────────────────────────────────`)

await io.write('house-modified.glb', doc)
console.log('\nDone — house-modified.glb written')
