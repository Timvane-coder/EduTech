import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import Stats from 'three/addons/libs/stats.module.js'
import JEASINGS, { JEasing, Cubic } from 'jeasings'
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js'

interface Annotation {
  title: string
  description: string
  position: THREE.Vector3
  lookAt: THREE.Vector3
  descriptionDomElement?: HTMLElement
}

let annotations: { [key: string]: Annotation }
const annotationMarkers: THREE.Sprite[] = []

const scene = new THREE.Scene()

var light = new THREE.DirectionalLight()
light.position.set(-30, 30, 30)
scene.add(light)

var light2 = new THREE.DirectionalLight()
light2.position.set(30, 30, -30)
scene.add(light2)

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
camera.position.x = 10
camera.position.y = 5
camera.position.z = 8

const renderer = new THREE.WebGLRenderer({ antialias: true })
renderer.setSize(window.innerWidth, window.innerHeight)
renderer.setAnimationLoop(animate)
document.body.appendChild(renderer.domElement)

const labelRenderer = new CSS2DRenderer()
labelRenderer.setSize(window.innerWidth, window.innerHeight)
labelRenderer.domElement.style.position = 'absolute'
labelRenderer.domElement.style.top = '0px'
labelRenderer.domElement.style.pointerEvents = 'none'
document.body.appendChild(labelRenderer.domElement)

const controls = new OrbitControls(camera, renderer.domElement)
controls.dampingFactor = 0.2
controls.enableDamping = true
controls.target.set(8, 3, 4)

const raycaster = new THREE.Raycaster()
const sceneMeshes = new Array()

const circleTexture = new THREE.TextureLoader().load('img/circle.png')

const progressBar = document.getElementById('progressBar') as HTMLProgressElement

const dracoLoader = new DRACOLoader()
dracoLoader.setDecoderPath('./js/libs/draco/')

// ── TOAST ─────────────────────────────────────────────────────────────────────
// pointer-events: auto so it's tappable on mobile
// Tapping the toast copies the full annotation JSON to clipboard
const toast = document.createElement('div')
toast.style.cssText = `
  position: fixed;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%) translateY(20px);
  background: rgba(10, 10, 10, 0.95);
  color: #a3e635;
  font-family: 'Courier New', monospace;
  font-size: 12px;
  padding: 12px 18px;
  border-radius: 6px;
  border: 1px solid #a3e635;
  pointer-events: auto;
  opacity: 0;
  transition: opacity 0.2s ease, transform 0.2s ease;
  z-index: 9999;
  white-space: pre;
  line-height: 1.7;
  cursor: pointer;
  -webkit-user-select: none;
  user-select: none;
`
document.body.appendChild(toast)

let toastTimeout: ReturnType<typeof setTimeout>
let lastAnnotationJson = ''

function showToast(lines: string[], json: string) {
  clearTimeout(toastTimeout)
  lastAnnotationJson = json
  toast.innerHTML =
    lines.join('<br>') +
    '<br><span style="color:#facc15;font-size:11px">👆 Tap here to copy JSON</span>'
  toast.style.opacity = '1'
  toast.style.transform = 'translateX(-50%) translateY(0)'
  // Stay visible for 8s on mobile — enough time to read and tap
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translateX(-50%) translateY(20px)'
  }, 8000)
}

function showCopiedConfirm() {
  clearTimeout(toastTimeout)
  toast.innerHTML = '✅ Copied to clipboard!'
  toastTimeout = setTimeout(() => {
    toast.style.opacity = '0'
    toast.style.transform = 'translateX(-50%) translateY(20px)'
  }, 2000)
}

// Tap the toast to copy — uses modern API with textarea fallback for Android
toast.addEventListener('pointerup', (e) => {
  e.stopPropagation()
  if (!lastAnnotationJson) return

  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard
      .writeText(lastAnnotationJson)
      .then(() => showCopiedConfirm())
      .catch(() => fallbackCopy())
  } else {
    fallbackCopy()
  }
})

function fallbackCopy() {
  const ta = document.createElement('textarea')
  ta.value = lastAnnotationJson
  ta.style.cssText = 'position:fixed;top:0;left:0;opacity:0.01;font-size:16px'
  document.body.appendChild(ta)
  ta.focus()
  ta.select()
  try {
    document.execCommand('copy')
    showCopiedConfirm()
  } catch {
    // Last resort — show the raw JSON in an alert so it can be long-pressed & copied
    alert(lastAnnotationJson)
  }
  document.body.removeChild(ta)
}

// ── POST TO SERVER (terminal logging) ─────────────────────────────────────────
function postPositionToServer(
  camPos: { x: number; y: number; z: number },
  lookAt: { x: number; y: number; z: number }
) {
  fetch('/log-position', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ camPos, lookAt }),
  })
    .then((res) => {
      if (!res.ok) console.error('[log-position] server responded', res.status)
      else console.log('[log-position] ✅ logged to terminal')
    })
    .catch((err) => console.error('[log-position] fetch failed — is the server running?', err))
}

// ── LOADER ────────────────────────────────────────────────────────────────────
const loader = new GLTFLoader()
loader.setDRACOLoader(dracoLoader)

loader.load(
  './models/house-water-transformed.glb',
  (gltf) => {
    gltf.scene.traverse((c) => {
      if ((c as THREE.Mesh).isMesh) {
        const mesh = c as THREE.Mesh
        const material = mesh.material as THREE.MeshStandardMaterial

        if (!['sink_faiance', 'white_409', 'Ceramic'].includes(material.name)) {
          material.flatShading = true
        }

        if (
          [
            'ground_1',
            'wall_1_2',
            'room_58_344',
            'grey',
            'flltgrey',
            'flltgrey_sweethome3d_window_pane_420',
            'default',
            'Glass',
            'Glass_458',
            'flltgrey_sweethome3d_window_pane_479',
            'white_Fenetre_480',
            'white_13_526',
            'flltgrey_14_527',
            'wall_1_4',
            'glassblutint',
            'Aluminium_652',
            'Default_Texture',
            'GLASS',
            'Glass_sweethome3d_window_mirror_985',
            'cylinder_cylinder_1302',
          ].includes(material.name)
        ) {
          material.transparent = true
          material.opacity = 0.2
          material.depthWrite = false
        }
      }
    })

    scene.add(gltf.scene)
    sceneMeshes.push(gltf.scene)

    const annotationsDownload = new XMLHttpRequest()
    annotationsDownload.open('GET', '/data/annotations.json')
    annotationsDownload.onreadystatechange = function () {
      if (annotationsDownload.readyState === 4) {
        annotations = JSON.parse(annotationsDownload.responseText)

        const annotationsPanel = document.getElementById('annotationsPanel') as HTMLDivElement
        const ul = document.createElement('ul') as HTMLUListElement
        const ulElem = annotationsPanel.appendChild(ul)

        Object.keys(annotations).forEach((a) => {
          const li = document.createElement('li') as HTMLLIElement
          const liElem = ulElem.appendChild(li)
          const button = document.createElement('button') as HTMLButtonElement
          button.innerHTML = a + ' : ' + annotations[a].title
          button.className = 'annotationButton'
          button.addEventListener('click', function () {
            gotoAnnotation(annotations[a])
          })
          liElem.appendChild(button)

          const annotationSpriteMaterial = new THREE.SpriteMaterial({
            map: circleTexture,
            depthTest: false,
            depthWrite: false,
            sizeAttenuation: false,
          })
          const annotationSprite = new THREE.Sprite(annotationSpriteMaterial)
          annotationSprite.scale.set(0.066, 0.066, 0.066)
          annotationSprite.position.copy(annotations[a].lookAt)
          annotationSprite.userData.id = a
          annotationSprite.renderOrder = 1
          scene.add(annotationSprite)
          annotationMarkers.push(annotationSprite)

          const annotationDiv = document.createElement('div')
          annotationDiv.className = 'annotationLabel'
          annotationDiv.innerHTML = a
          const annotationLabel = new CSS2DObject(annotationDiv)
          annotationLabel.position.copy(annotations[a].lookAt)
          scene.add(annotationLabel)

          if (annotations[a].description) {
            const annotationDescriptionDiv = document.createElement('div')
            annotationDescriptionDiv.className = 'annotationDescription'
            annotationDescriptionDiv.innerHTML = annotations[a].description
            annotationDiv.appendChild(annotationDescriptionDiv)
            annotations[a].descriptionDomElement = annotationDescriptionDiv
          }
        })

        progressBar.style.display = 'none'
      }
    }
    annotationsDownload.send()
  },
  (xhr) => {
    if (xhr.lengthComputable) {
      let percentComplete = (xhr.loaded / xhr.total) * 100
      progressBar.value = percentComplete
      progressBar.style.display = 'block'
    }
  }
)

window.addEventListener('resize', onWindowResize, false)
function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight
  camera.updateProjectionMatrix()
  renderer.setSize(window.innerWidth, window.innerHeight)
  labelRenderer.setSize(window.innerWidth, window.innerHeight)
}

const v = new THREE.Vector2()

// ── SINGLE CLICK ──────────────────────────────────────────────────────────────
function onClick(event: MouseEvent) {
  v.set(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
  )
  raycaster.setFromCamera(v, camera)

  const intersects = raycaster.intersectObjects(annotationMarkers, true)
  if (intersects.length > 0) {
    if (intersects[0].object.userData && intersects[0].object.userData.id) {
      gotoAnnotation(annotations[intersects[0].object.userData.id])
    }
  }
}
renderer.domElement.addEventListener('click', onClick, false)

// ── DOUBLE CLICK ──────────────────────────────────────────────────────────────
function onDoubleClick(event: MouseEvent) {
  v.set(
    (event.clientX / renderer.domElement.clientWidth) * 2 - 1,
    -(event.clientY / renderer.domElement.clientHeight) * 2 + 1
  )
  raycaster.setFromCamera(v, camera)

  const intersects = raycaster.intersectObjects(sceneMeshes, true)

  if (intersects.length > 0) {
    const p = intersects[0].point

    new JEasing(controls.target)
      .to({ x: p.x, y: p.y, z: p.z }, 500)
      .easing(Cubic.Out)
      .start()

    // Wait for easing to finish before snapping values
    setTimeout(() => {
      const cp = camera.position
      const la = controls.target

      const camPos = { x: +cp.x.toFixed(2), y: +cp.y.toFixed(2), z: +cp.z.toFixed(2) }
      const lookAt = { x: +la.x.toFixed(2), y: +la.y.toFixed(2), z: +la.z.toFixed(2) }

      const json = JSON.stringify(
        { title: 'NEW ANNOTATION', description: '', camPos, lookAt },
        null,
        2
      )

      showToast(
        [
          '📍 Double-click registered',
          `camPos  x:${camPos.x}  y:${camPos.y}  z:${camPos.z}`,
          `lookAt  x:${lookAt.x}  y:${lookAt.y}  z:${lookAt.z}`,
        ],
        json
      )

      postPositionToServer(camPos, lookAt)
    }, 520)
  } else {
    showToast(['⚠️ Double-click fired — no mesh hit', 'Try tapping directly on the model'], '')
  }
}
renderer.domElement.addEventListener('dblclick', onDoubleClick, false)

// ── GOTO ANNOTATION ───────────────────────────────────────────────────────────
function gotoAnnotation(a: any): void {
  new JEasing(camera.position)
    .to({ x: a.camPos.x, y: a.camPos.y, z: a.camPos.z }, 500)
    .easing(Cubic.Out)
    .start()

  new JEasing(controls.target)
    .to({ x: a.lookAt.x, y: a.lookAt.y, z: a.lookAt.z }, 500)
    .easing(Cubic.Out)
    .start()

  Object.keys(annotations).forEach((annotation) => {
    if (annotations[annotation].descriptionDomElement) {
      ;(annotations[annotation].descriptionDomElement as HTMLElement).style.display = 'none'
    }
  })

  if (a.descriptionDomElement) {
    a.descriptionDomElement.style.display = 'block'
  }
}

// ── STATS & RENDER LOOP ───────────────────────────────────────────────────────
const stats = new Stats()
document.body.appendChild(stats.dom)

function animate() {
  controls.update()
  JEASINGS.update()
  renderer.render(scene, camera)
  labelRenderer.render(scene, camera)
  stats.update()
}
