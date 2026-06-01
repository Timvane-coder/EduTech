import {
  Color,
  OrthographicCamera,
  PerspectiveCamera,
  Scene,
  Vector3,
  WebGLRenderer,
  ColorManagement,
} from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import Stats from 'three/addons/libs/stats.module.js'
import GUI from 'https://unpkg.com/lil-gui@0.19.2/dist/lil-gui.esm.js'

export default class WebGLApp {
  #width
  #height
  isRunning = false
  time = 0
  dt = 0
  #lastTime = performance.now()
  #updateListeners = []
  #pointerdownListeners = []
  #pointermoveListeners = []
  #pointerupListeners = []
  #startX
  #startY

  get background() {
    return this.renderer.getClearColor(new Color())
  }

  get backgroundAlpha() {
    return this.renderer.getClearAlpha()
  }

  set background(background) {
    this.renderer.setClearColor(background, this.backgroundAlpha)
  }

  set backgroundAlpha(backgroundAlpha) {
    this.renderer.setClearColor(this.background, backgroundAlpha)
  }

  constructor({
    canvas,
    background = '#111',
    backgroundAlpha = 1,
    fov = 45,
    frustumSize = 3,
    near = 0.01,
    far = 100,
    ...options
  } = {}) {
    // enable gamma correction
    ColorManagement.enabled = true

    this.renderer = new WebGLRenderer({
      canvas,                                    // bind to the existing DOM canvas
      antialias: !options.postprocessing,
      alpha: backgroundAlpha !== 1,
      preserveDrawingBuffer: true,
    })

    this.renderer.useLegacyLights = false

    if (options.sortObjects !== undefined) {
      this.renderer.sortObjects = options.sortObjects
    }
    if (options.xr) {
      this.renderer.xr.enabled = true
    }

    // renderer.domElement IS the canvas we passed in
    this.canvas = this.renderer.domElement

    this.renderer.setClearColor(background, backgroundAlpha)

    this.#width = options.width
    this.#height = options.height

    this.maxPixelRatio = options.maxPixelRatio || 1.5
    this.maxDeltaTime = options.maxDeltaTime || 1 / 30

    // setup the camera
    const aspect = this.width / this.height
    if (!options.orthographic) {
      this.camera = new PerspectiveCamera(fov, aspect, near, far)
    } else {
      this.camera = new OrthographicCamera(
        -(frustumSize * aspect) / 2,
        (frustumSize * aspect) / 2,
        frustumSize / 2,
        -frustumSize / 2,
        near,
        far
      )
      this.camera.frustumSize = frustumSize
    }
    this.camera.position.copy(options.cameraPosition || new Vector3(0, 0, 4))
    this.camera.lookAt(options.cameraTarget || new Vector3())

    this.scene = new Scene()
    this.gl = this.renderer.getContext()

    // resize listeners
    window.addEventListener('resize', this.resize)
    window.addEventListener('orientationchange', this.resize)

    // force initial resize
    this.resize()

    // pointer events
    this.isDragging = false
    this.canvas.addEventListener('pointerdown', (event) => {
      if (!event.isPrimary) return
      this.isDragging = true
      this.#startX = event.offsetX
      this.#startY = event.offsetY
      this.scene.traverse((child) => {
        if (typeof child.onPointerDown === 'function') {
          child.onPointerDown(event, { x: event.offsetX, y: event.offsetY })
        }
      })
      this.#pointerdownListeners.forEach((fn) => fn(event, { x: event.offsetX, y: event.offsetY }))
    })

    this.canvas.addEventListener('pointermove', (event) => {
      if (!event.isPrimary) return
      const position = {
        x: event.offsetX,
        y: event.offsetY,
        ...(this.#startX !== undefined && { dragX: event.offsetX - this.#startX }),
        ...(this.#startY !== undefined && { dragY: event.offsetY - this.#startY }),
      }
      this.scene.traverse((child) => {
        if (typeof child.onPointerMove === 'function') {
          child.onPointerMove(event, position)
        }
      })
      this.#pointermoveListeners.forEach((fn) => fn(event, position))
    })

    this.canvas.addEventListener('pointerup', (event) => {
      if (!event.isPrimary) return
      this.isDragging = false
      const position = {
        x: event.offsetX,
        y: event.offsetY,
        ...(this.#startX !== undefined && { dragX: event.offsetX - this.#startX }),
        ...(this.#startY !== undefined && { dragY: event.offsetY - this.#startY }),
      }
      this.scene.traverse((child) => {
        if (typeof child.onPointerUp === 'function') {
          child.onPointerUp(event, position)
        }
      })
      this.#pointerupListeners.forEach((fn) => fn(event, position))
      this.#startX = undefined
      this.#startY = undefined
    })

    // orbit controls
    if (options.orbitControls) {
      this.orbitControls = new OrbitControls(this.camera, this.canvas)
      this.orbitControls.enableDamping = true
      this.orbitControls.dampingFactor = 0.15
      this.orbitControls.enablePan = false

      if (options.orbitControls instanceof Object) {
        Object.keys(options.orbitControls).forEach((key) => {
          this.orbitControls[key] = options.orbitControls[key]
        })
      }
    }

    // fps stats
    if (options.showFps) {
      this.stats = new Stats()
      this.stats.showPanel(0)
      document.body.appendChild(this.stats.dom)
    }

    // lil-gui
    if (options.gui) {
      this.gui = new GUI()
      if (options.guiClosed) {
        this.gui.close()
      }
    }
  }

  get width() {
    return this.#width || window.innerWidth
  }

  get height() {
    return this.#height || window.innerHeight
  }

  get pixelRatio() {
    return Math.min(this.maxPixelRatio, window.devicePixelRatio)
  }

  resize = ({ width = this.width, height = this.height, pixelRatio = this.pixelRatio } = {}) => {
    if (this.renderer.getPixelRatio() !== pixelRatio) {
      this.renderer.setPixelRatio(pixelRatio)
    }

    this.renderer.setSize(width, height)

    if (this.camera.isPerspectiveCamera) {
      this.camera.aspect = width / height
    } else {
      const aspect = width / height
      this.camera.left = -(this.camera.frustumSize * aspect) / 2
      this.camera.right = (this.camera.frustumSize * aspect) / 2
      this.camera.top = this.camera.frustumSize / 2
      this.camera.bottom = -this.camera.frustumSize / 2
    }
    this.camera.updateProjectionMatrix()

    if (this.composer) {
      this.composer.setSize()
    }

    this.scene.traverse((obj) => {
      if (typeof obj.resize === 'function') {
        obj.resize({ width, height, pixelRatio })
      }
    })

    this.draw()
    return this
  }

  update = (dt, time, xrframe) => {
    if (this.orbitControls) {
      this.orbitControls.update()
    }

    this.scene.traverse((obj) => {
      if (typeof obj.update === 'function' && !obj.isTransformControls) {
        obj.update(dt, time, xrframe)
      }
    })

    this.#updateListeners.forEach((fn) => fn(dt, time, xrframe))
    return this
  }

  onUpdate(fn) { this.#updateListeners.push(fn) }
  onPointerDown(fn) { this.#pointerdownListeners.push(fn) }
  onPointerMove(fn) { this.#pointermoveListeners.push(fn) }
  onPointerUp(fn) { this.#pointerupListeners.push(fn) }

  offUpdate(fn) {
    const i = this.#updateListeners.indexOf(fn)
    if (i !== -1) this.#updateListeners.splice(i, 1)
  }
  offPointerDown(fn) {
    const i = this.#pointerdownListeners.indexOf(fn)
    if (i !== -1) this.#pointerdownListeners.splice(i, 1)
  }
  offPointerMove(fn) {
    const i = this.#pointermoveListeners.indexOf(fn)
    if (i !== -1) this.#pointermoveListeners.splice(i, 1)
  }
  offPointerUp(fn) {
    const i = this.#pointerupListeners.indexOf(fn)
    if (i !== -1) this.#pointerupListeners.splice(i, 1)
  }

  draw = () => {
    const isXR = this.renderer.xr.enabled && this.renderer.xr.isPresenting
    if (this.composer && !isXR) {
      this.composer.render(this.dt)
    } else {
      this.renderer.render(this.scene, this.camera)
    }
    return this
  }

  start = () => {
    if (this.isRunning) return
    this.isRunning = true
    this.draw()
    this.renderer.setAnimationLoop(this.animate)
    return this
  }

  stop = () => {
    if (!this.isRunning) return
    this.renderer.setAnimationLoop(null)
    this.isRunning = false
    return this
  }

  animate = (now, xrframe) => {
    if (!this.isRunning) return
    if (this.stats) this.stats.begin()
    this.dt = Math.min(this.maxDeltaTime, (now - this.#lastTime) / 1000)
    this.time += this.dt
    this.#lastTime = now
    this.update(this.dt, this.time, xrframe)
    this.draw()
    if (this.stats) this.stats.end()
  }

  get cursor() {
    return this.canvas.style.cursor
  }

  set cursor(cursor) {
    this.canvas.style.cursor = cursor || null
  }
}
