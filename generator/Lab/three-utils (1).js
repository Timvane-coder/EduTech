import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'

export function visibleHeightAtZDepth(depth, camera) {
  if (camera.isOrthographicCamera) {
    return Math.abs(camera.top - camera.bottom)
  }
  const cameraOffset = camera.position.z
  if (depth < cameraOffset) depth -= cameraOffset
  else depth += cameraOffset

  const vFOV = (camera.fov * Math.PI) / 180
  return 2 * Math.tan(vFOV / 2) * Math.abs(depth)
}

export function visibleWidthAtZDepth(depth, camera) {
  if (camera.isOrthographicCamera) {
    return Math.abs(camera.right - camera.left)
  }
  const height = visibleHeightAtZDepth(depth, camera)
  return height * camera.aspect
}

export function extractGeometry(gltf) {
  const geometries = []
  gltf.traverse((child) => {
    if (child.isMesh) geometries.push(child.geometry)
  })
  return mergeGeometries(geometries)
}

export function loadGltf(url) {
  return new Promise((resolve, reject) => {
    new GLTFLoader().load(url, resolve, null, reject)
  })
}

export function monkeyPatch(shader, { defines = '', header = '', main = '', ...replaces }) {
  let patchedShader = shader

  const replaceAll = (str, find, rep) => str.split(find).join(rep)
  Object.keys(replaces).forEach((key) => {
    patchedShader = replaceAll(patchedShader, key, replaces[key])
  })

  patchedShader = patchedShader.replace(
    'void main() {',
    `
    ${header}
    void main() {
      ${main}
    `
  )

  const stringDefines = Object.keys(defines)
    .map((d) => `#define ${d} ${defines[d]}`)
    .join('\n')

  return `
    ${stringDefines}
    ${patchedShader}
  `
}

export function addLoadListener(texture, callback) {
  // already loaded static image
  if (texture.image && !('videoWidth' in texture.image) && texture.image.complete) {
    return callback(texture)
  }
  // already loaded video
  if (texture.image && texture.image.videoWidth && texture.image.videoWidth !== 0) {
    return callback(texture)
  }

  const interval = setInterval(() => {
    // static image finished loading
    if (texture.image && !('videoWidth' in texture.image) && texture.image.complete) {
      clearInterval(interval)
      return callback(texture)
    }
    // video has its dimensions
    if (texture.image && texture.image.videoWidth !== 0 && texture.image.videoHeight !== 0) {
      clearInterval(interval)
      return callback(texture)
    }
  }, 16)
}


