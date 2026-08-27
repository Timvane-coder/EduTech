import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

// -----------------------------
// Scene
// -----------------------------

const scene = new THREE.Scene();

scene.background = new THREE.Color(0x101018);


// -----------------------------
// Camera
// -----------------------------

const camera = new THREE.PerspectiveCamera(
    45,
    window.innerWidth / window.innerHeight,
    0.1,
    100
);

camera.position.set(5, 3, 7);


// -----------------------------
// Renderer
// -----------------------------

const renderer = new THREE.WebGLRenderer({
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);

renderer.shadowMap.enabled = true;

document.body.appendChild(
    renderer.domElement
);


// -----------------------------
// OrbitControls
// -----------------------------

const controls = new OrbitControls(
    camera,
    renderer.domElement
);

controls.enableDamping = true;

controls.target.set(
    0,
    1,
    0
);


// -----------------------------
// Lights
// -----------------------------

const ambientLight =
    new THREE.AmbientLight(
        0xffffff,
        1
    );

scene.add(ambientLight);


const keyLight =
    new THREE.DirectionalLight(
        0xffffff,
        4
    );

keyLight.position.set(
    5,
    8,
    5
);

keyLight.castShadow = true;

scene.add(keyLight);


const rimLight =
    new THREE.PointLight(
        0x4488ff,
        30,
        20
    );

rimLight.position.set(
    -4,
    3,
    -4
);

scene.add(rimLight);


// -----------------------------
// Objects
// -----------------------------

const geometry =
    new THREE.TorusKnotGeometry(
        1.2,
        0.35,
        128,
        32
    );

const material =
    new THREE.MeshStandardMaterial({
        color: 0x55aaff,
        metalness: 0.7,
        roughness: 0.2
    });

const object =
    new THREE.Mesh(
        geometry,
        material
    );

object.position.y = 1;

object.castShadow = true;

scene.add(object);


// Floor

const floor =
    new THREE.Mesh(

        new THREE.PlaneGeometry(
            30,
            30
        ),

        new THREE.MeshStandardMaterial({
            color: 0x222222,
            roughness: 0.8
        })

    );

floor.rotation.x =
    -Math.PI / 2;

floor.receiveShadow = true;

scene.add(floor);


// -----------------------------
// Recording
// -----------------------------

let mediaRecorder = null;

let recordedChunks = [];

let recording = false;

let recordingStartTime = 0;


// Find a supported WebM format

function getRecordingMimeType() {

    const types = [

        'video/webm;codecs=vp9',

        'video/webm;codecs=vp8',

        'video/webm'

    ];

    for (const type of types) {

        if (
            MediaRecorder.isTypeSupported(type)
        ) {

            return type;

        }

    }

    return '';

}


// Start recording

function startRecording() {

    if (recording) {

        console.log(
            'Already recording.'
        );

        return;

    }


    recordedChunks = [];


    const stream =
        renderer.domElement.captureStream(60);


    const mimeType =
        getRecordingMimeType();


    console.log(
        'Recording format:',
        mimeType
    );


    mediaRecorder =
        new MediaRecorder(
            stream,
            mimeType
                ? {
                    mimeType,
                    videoBitsPerSecond:
                        12_000_000
                }
                : undefined
        );


    mediaRecorder.ondataavailable =
        event => {

            if (
                event.data &&
                event.data.size > 0
            ) {

                recordedChunks.push(
                    event.data
                );

            }

        };


    mediaRecorder.onstop =
        saveRecording;


    mediaRecorder.start(
        1000
    );


    recording = true;

    recordingStartTime =
        performance.now();


    console.log(
        'Recording started.'
    );

}


// Stop recording

function stopRecording() {

    if (
        !mediaRecorder ||
        mediaRecorder.state === 'inactive'
    ) {

        console.log(
            'No active recording.'
        );

        return;

    }


    mediaRecorder.stop();

    recording = false;


    console.log(
        'Stopping recording...'
    );

}


// Save WebM

function saveRecording() {

    const blob =
        new Blob(
            recordedChunks,
            {
                type: 'video/webm'
            }
        );


    const url =
        URL.createObjectURL(blob);


    const link =
        document.createElement('a');

    link.href = url;

    link.download =
        `threejs-${Date.now()}.webm`;


    document.body.appendChild(link);

    link.click();

    link.remove();


    setTimeout(() => {

        URL.revokeObjectURL(url);

    }, 1000);


    console.log(
        'WebM saved:',
        blob.size,
        'bytes'
    );

}


// -----------------------------
// Camera cinematic orbit
// -----------------------------

let cinematicOrbit = false;

let orbitStartTime = 0;

const orbitDuration = 15000;

const orbitRadius = 7;


function startOrbit() {

    cinematicOrbit = true;

    orbitStartTime =
        performance.now();


    console.log(
        'Cinematic orbit started.'
    );

}


// -----------------------------
// UI
// -----------------------------

const ui =
    document.createElement('div');

ui.style.position =
    'fixed';

ui.style.left =
    '20px';

ui.style.bottom =
    '20px';

ui.style.zIndex =
    '100';

ui.style.display =
    'flex';

ui.style.flexDirection =
    'column';

ui.style.gap =
    '8px';


function createButton(text) {

    const button =
        document.createElement('button');

    button.textContent =
        text;

    button.style.padding =
        '10px 16px';

    button.style.cursor =
        'pointer';

    button.style.fontSize =
        '15px';

    return button;

}


const recordButton =
    createButton(
        'Start Recording'
    );

const orbitButton =
    createButton(
        'Start Orbit'
    );

const stopButton =
    createButton(
        'Stop & Save'
    );


const status =
    document.createElement('div');

status.style.color =
    'white';

status.style.fontFamily =
    'monospace';

status.textContent =
    'Ready';


ui.append(
    recordButton,
    orbitButton,
    stopButton,
    status
);

document.body.appendChild(ui);


recordButton.onclick =
    startRecording;

orbitButton.onclick =
    startOrbit;

stopButton.onclick =
    stopRecording;


// -----------------------------
// Animation
// -----------------------------

function animate() {

    requestAnimationFrame(
        animate
    );


    // Normal controls

    controls.update();


    // Object animation

    object.rotation.x +=
        0.003;

    object.rotation.y +=
        0.006;


    // Cinematic camera orbit

    if (cinematicOrbit) {

        const elapsed =
            performance.now() -
            orbitStartTime;


        const progress =
            Math.min(
                elapsed /
                orbitDuration,
                1
            );


        const angle =
            progress *
            Math.PI *
            2;


        camera.position.x =
            Math.sin(angle) *
            orbitRadius;


        camera.position.z =
            Math.cos(angle) *
            orbitRadius;


        camera.position.y =
            3 +
            Math.sin(
                progress *
                Math.PI *
                2
            ) *
            0.5;


        camera.lookAt(
            controls.target
        );


        if (progress >= 1) {

            cinematicOrbit =
                false;

            console.log(
                'Cinematic orbit finished.'
            );

        }

    }


    // Recording status

    if (recording) {

        const seconds =
            (
                performance.now() -
                recordingStartTime
            ) / 1000;


        status.textContent =
            `● Recording ${seconds.toFixed(1)}s`;

    }


    renderer.render(
        scene,
        camera
    );

}


// -----------------------------
// Resize
// -----------------------------

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


animate();
