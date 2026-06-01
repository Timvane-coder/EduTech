import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';

// Scene
const scene = new THREE.Scene();

// Camera
const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.set(0, 1, 8);

// Renderer
const renderer = new THREE.WebGLRenderer({
    antialias: true,
    alpha: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    window.devicePixelRatio
);

renderer.setClearColor(0x000000, 0);

document.body.appendChild(
    renderer.domElement
);

// Lights
const ambientLight = new THREE.AmbientLight(
    0xffffff,
    2
);
scene.add(ambientLight);

const directionalLight = new THREE.DirectionalLight(
    0xffffff,
    3
);

directionalLight.position.set(
    5,
    10,
    5
);

scene.add(directionalLight);

// Optional fill light
const fillLight = new THREE.DirectionalLight(
    0xffffff,
    1
);

fillLight.position.set(
    -5,
    5,
    -5
);

scene.add(fillLight);

// Ground shadow circle
const ground = new THREE.Mesh(
    new THREE.CircleGeometry(5, 64),
    new THREE.MeshBasicMaterial({
        color: 0x000000,
        transparent: true,
        opacity: 0.15
    })
);

ground.rotation.x = -Math.PI / 2;
ground.position.y = -2;

scene.add(ground);

// Loader
const loader = new GLTFLoader();

let microscope = null;

loader.load(

    './model/microscope.glb',

    (gltf) => {

        microscope = gltf.scene;

        // Extremely small scale
        microscope.scale.set(
           0.1,
            0.1,
            0.1
        );

        microscope.position.set(
            0,
            -2,
            0
        );

        scene.add(microscope);

        console.log('Microscope loaded');

        // Debug size
        const box = new THREE.Box3()
            .setFromObject(microscope);

        console.log('Bounding Box:', box);

    },

    (xhr) => {

        if (xhr.total) {

            console.log(
                ((xhr.loaded / xhr.total) * 100)
                .toFixed(0) + '% loaded'
            );

        }

    },

    (error) => {

        console.error(
            'Error loading microscope:',
            error
        );

    }

);

// Resize
window.addEventListener(
    'resize',
    () => {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

    }
);

// Animation loop
function animate() {

    requestAnimationFrame(
        animate
    );

    const t =
        performance.now() * 0.001;

    if (microscope) {

        microscope.position.y =
            -2 +
            Math.sin(t * 1.5) * 0.1;

        microscope.rotation.y =
            Math.sin(t * 0.5) * 0.3;

    }

    renderer.render(
        scene,
        camera
    );

}

animate();
