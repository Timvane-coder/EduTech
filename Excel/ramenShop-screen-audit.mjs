import { NodeIO } from '@gltf-transform/core'
import { ALL_EXTENSIONS } from '@gltf-transform/extensions'
import draco3d from 'draco3d'

const io = new NodeIO()
  .registerExtensions(ALL_EXTENSIONS)
  .registerDependencies({
    'draco3d.decoder': await draco3d.createDecoderModule(),
    'draco3d.encoder': await draco3d.createEncoderModule(),
  })

const origDoc = await io.read('./models/ramen.glb')
const modDoc  = await io.read('./models/ramenShop_uvrestored_v2.glb')

const names = ['vendingMachineScreen', 'arcadeScreen', 'bigScreen',
  'smallScreen1','smallScreen2','smallScreen3','smallScreen4','smallScreen5',
  'tallScreen','sideScreen','tvScreen','littleTVScreen']

function getBounds(doc, name) {
  const node = doc.getRoot().listNodes().find(n => n.getName() === name)
  if (!node) return null
  const prim = node.getMesh().listPrimitives()[0]
  const pos  = prim.getAttribute('POSITION')
  const uv   = prim.getAttribute('TEXCOORD_0')
  if (!pos) return null

  let minX=Infinity, maxX=-Infinity, minY=Infinity, maxY=-Infinity,
      minZ=Infinity, maxZ=-Infinity
  let minU=Infinity, maxU=-Infinity, minV=Infinity, maxV=-Infinity

  for (let i = 0; i < pos.getCount(); i++) {
    const [x,y,z] = pos.getElement(i,[])
    if (x<minX) minX=x; if (x>maxX) maxX=x
    if (y<minY) minY=y; if (y>maxY) maxY=y
    if (z<minZ) minZ=z; if (z>maxZ) maxZ=z
    if (uv) {
      const [u,v] = uv.getElement(i,[])
      if (u<minU) minU=u; if (u>maxU) maxU=u
      if (v<minV) minV=v; if (v>maxV) maxV=v
    }
  }
  const sX=(maxX-minX), sY=(maxY-minY), sZ=(maxZ-minZ)
  const W = Math.max(sX,sY,sZ)
  const H = [sX,sY,sZ].filter(v=>v>0.001).sort((a,b)=>a-b)[1] ?? W
  return {
    verts: pos.getCount(),
    sX:sX.toFixed(4), sY:sY.toFixed(4), sZ:sZ.toFixed(4),
    uvSpan: uv ? `U:${minU.toFixed(3)}→${maxU.toFixed(3)}  V:${minV.toFixed(3)}→${maxV.toFixed(3)}` : 'no UV',
    aspect: (W/H).toFixed(4)
  }
}

console.log('\n====== SCREEN UV + DIMENSION AUDIT ======\n')
console.log('Name'.padEnd(26), 'Orig verts', 'Mod verts', 'Orig UV span', 'Mod UV span', 'Orig aspect', 'Mod aspect')
console.log('─'.repeat(120))

for (const name of names) {
  const o = getBounds(origDoc, name)
  const m = getBounds(modDoc,  name)
  if (!o && !m) { console.log(`${name.padEnd(26)}  not found in either`); continue }
  console.log(`${name.padEnd(26)}  orig:${String(o?.verts??'—').padStart(5)}  mod:${String(m?.verts??'—').padStart(5)}`)
  console.log(`${''.padEnd(26)}  orig: ${o?.uvSpan??'—'}  aspect:${o?.aspect??'—'}`)
  console.log(`${''.padEnd(26)}  mod:  ${m?.uvSpan??'—'}  aspect:${m?.aspect??'—'}`)
  console.log()
}
