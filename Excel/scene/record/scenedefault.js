import * as THREE from 'three';

import {
    OrbitControls
} from 'three/addons/controls/OrbitControls.js';

import {
    CinematicCamera
} from './CinematicCamera.js';

import {
    OrbitShot
} from './OrbitShot.js';

import {
    CameraSequence
} from './CameraSequence.js';

import {
    CanvasRecorder
} from './Recording.js';


// =====================================================
// SCENE
// =====================================================

const scene =
    new THREE.Scene();

scene.background =
    new THREE.Color(
        0x101018
    );


// =====================================================
// CAMERA
// =====================================================

const camera =
    new THREE.PerspectiveCamera(

        45,

        window.innerWidth /
            window.innerHeight,

        0.1,

        100

    );


camera.position.set(
    5,
    3,
    7
);


// =====================================================
// RENDERER
// =====================================================

const renderer =
    new THREE.WebGLRenderer({

        antialias: true

    });


renderer.setSize(

    window.innerWidth,

    window.innerHeight

);


renderer.setPixelRatio(

    Math.min(
        window.devicePixelRatio,
        2
    )

);


renderer.shadowMap.enabled =
    true;


renderer.shadowMap.type =
    THREE.PCFSoftShadowMap;


document.body.appendChild(
    renderer.domElement
);


// =====================================================
// ORBIT CONTROLS
// =====================================================

const controls =
    new OrbitControls(

        camera,

        renderer.domElement

    );


controls.enableDamping =
    true;


controls.dampingFactor =
    0.05;


controls.target.set(
    0,
    1,
    0
);


// =====================================================
// LIGHTING
// =====================================================

const ambientLight =
    new THREE.AmbientLight(

        0xffffff,

        1

    );

scene.add(
    ambientLight
);


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


keyLight.castShadow =
    true;


keyLight.shadow.mapSize.set(

    2048,
    2048

);


scene.add(
    keyLight
);


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


scene.add(
    rimLight
);


// =====================================================
// OBJECT
// =====================================================

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


object.position.y =
    1;


object.castShadow =
    true;


object.receiveShadow =
    true;


scene.add(
    object
);


// =====================================================
// FLOOR
// =====================================================

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


floor.receiveShadow =
    true;


scene.add(
    floor
);


// =====================================================
// CINEMATIC CAMERA
// =====================================================

const cinematicCamera =
    new CinematicCamera(
        camera
    );


// =====================================================
// ESTABLISHING SHOT
// =====================================================

const establishingShot =
    cinematicCamera.createShot({

        duration: 5,

        positions: [

            new THREE.Vector3(
                10,
                6,
                12
            ),

            new THREE.Vector3(
                7,
                4,
                9
            ),

            new THREE.Vector3(
                4,
                2.5,
                6
            )

        ],

        targets: [

            new THREE.Vector3(
                0,
                1,
                0
            ),

            new THREE.Vector3(
                0,
                1.2,
                0
            )

        ],

        easing:
            'easeInOutCubic',

        fov: [
            45,
            38
        ]

    });


// =====================================================
// CINEMATIC ORBIT
// =====================================================

const cinematicOrbitPositions = [];

const cinematicOrbitTargets = [];

const cinematicOrbitRadius =
    7;

const cinematicOrbitHeight =
    3;

const cinematicOrbitPoints =
    9;


for (
    let i = 0;
    i < cinematicOrbitPoints;
    i++
) {

    const angle =
        (
            i /
            (cinematicOrbitPoints - 1)
        ) *
        Math.PI *
        2;


    cinematicOrbitPositions.push(

        new THREE.Vector3(

            Math.sin(angle) *
                cinematicOrbitRadius,

            cinematicOrbitHeight,

            Math.cos(angle) *
                cinematicOrbitRadius

        )

    );


    cinematicOrbitTargets.push(

        new THREE.Vector3(
            0,
            1,
            0
        )

    );

}


const cinematicOrbitShot =
    cinematicCamera.createShot({

        duration: 8,

        positions:
            cinematicOrbitPositions,

        targets:
            cinematicOrbitTargets,

        easing:
            'easeInOutCubic',

        fov: [
            38,
            42
        ]

    });


// =====================================================
// CLOSE UP
// =====================================================

const closeUpShot =
    cinematicCamera.createShot({

        duration: 4,

        positions: [

            new THREE.Vector3(
                5,
                2.5,
                6
            ),

            new THREE.Vector3(
                3.5,
                2,
                4
            ),

            new THREE.Vector3(
                2,
                1.8,
                3
            )

        ],

        targets: [

            new THREE.Vector3(
                0,
                1,
                0
            ),

            new THREE.Vector3(
                0.5,
                1.2,
                0
            ),

            new THREE.Vector3(
                0.8,
                1.4,
                0
            )

        ],

        easing:
            'easeInOutCubic',

        fov: [
            42,
            28
        ]

    });


// =====================================================
// ORBIT SHOT
// =====================================================

const orbitShot =
    new OrbitShot(
        camera
    );


orbitShot.configure({

    duration: 8,

    radius: 7,

    height: 3,

    target:
        new THREE.Vector3(
            0,
            1,
            0
        ),

    startAngle: 0,

    endAngle:
        Math.PI * 2,

    easing:
        'easeInOutCubic',

    startFov: 42,

    endFov: 36,

    lookAtTarget: true

});


// =====================================================
// SECOND ORBIT
// =====================================================

const secondOrbitShot =
    new OrbitShot(
        camera
    );


secondOrbitShot.configure({

    duration: 6,

    radius: 5,

    height: 2,

    target:
        new THREE.Vector3(
            0,
            1.2,
            0
        ),

    startAngle:
        Math.PI,

    endAngle:
        Math.PI * 3,

    easing:
        'easeInOutCubic',

    startRadius: 5,

    endRadius: 3,

    startHeight: 2,

    endHeight: 4,

    startFov: 36,

    endFov: 30,

    lookAtTarget: true

});


// =====================================================
// CAMERA SEQUENCE
// =====================================================

const cameraSequence =
    new CameraSequence({

        camera,

        cinematicCamera,

        orbitShot,

        controls

    });


// =====================================================
// PORTFOLIO CHOREOGRAPHY
// =====================================================

// -----------------------------------------------------
// SHOT 1
// -----------------------------------------------------

cameraSequence.addShot(

    'cinematic',

    establishingShot,

    {

        transition:
            'blend',

        duration:
            1.5,

        easing:
            'easeInOutCubic'

    }

);


// -----------------------------------------------------
// SHOT 2
// -----------------------------------------------------

cameraSequence.addShot(

    'orbit',

    orbitShot,

    {

        transition:
            'blend',

        duration:
            1.2,

        easing:
            'easeInOutCubic'

    }

);


// -----------------------------------------------------
// SHOT 3
// -----------------------------------------------------

cameraSequence.addShot(

    'cinematic',

    closeUpShot,

    {

        transition:
            'blend',

        duration:
            1.5,

        easing:
            'easeInOutCubic'

    }

);


// =====================================================
// RECORDER
// =====================================================

const recorder =
    new CanvasRecorder(

        renderer.domElement,

        {

            fps: 60,

            bitrate: 12_000_000,

            filename:
                'portfolio-scene'

        }

    );


// =====================================================
// UI
// =====================================================

const ui =
    document.createElement(
        'div'
    );


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

ui.style.fontFamily =
    'Arial, sans-serif';


function createButton(
    text
) {

    const button =
        document.createElement(
            'button'
        );


    button.textContent =
        text;


    button.style.padding =
        '10px 16px';


    button.style.cursor =
        'pointer';


    button.style.fontSize =
        '14px';


    return button;

}


const recordButton =
    createButton(
        'Start Recording'
    );


const saveButton =
    createButton(
        'Stop & Save Recording'
    );


const sequenceButton =
    createButton(
        'Play Camera Sequence'
    );


const orbitButton =
    createButton(
        'Play Orbit Shot'
    );


const cinematicButton =
    createButton(
        'Play Cinematic'
    );


const pauseButton =
    createButton(
        'Pause Sequence'
    );


const resumeButton =
    createButton(
        'Resume Sequence'
    );


const stopButton =
    createButton(
        'Stop Camera'
    );


const status =
    document.createElement(
        'div'
    );


status.style.color =
    'white';


status.style.background =
    'rgba(0,0,0,0.6)';


status.style.padding =
    '8px';


status.style.fontFamily =
    'monospace';


status.textContent =
    'Ready';


ui.append(

    recordButton,

    saveButton,

    sequenceButton,

    orbitButton,

    cinematicButton,

    pauseButton,

    resumeButton,

    stopButton,

    status

);


document.body.appendChild(
    ui
);


// =====================================================
// RECORDING
// =====================================================

recordButton.onclick =
    () => {

        recorder.start();

        status.textContent =
            'Recording...';

    };


saveButton.onclick =
    () => {

        recorder.stop();

        status.textContent =
            'Recording saved';

    };


// =====================================================
// FULL CAMERA SEQUENCE
// =====================================================

sequenceButton.onclick =
    () => {

        cameraSequence.start();

        status.textContent =
            'Camera sequence running';

    };


// =====================================================
// INDIVIDUAL ORBIT
// =====================================================

orbitButton.onclick =
    () => {

        cameraSequence.stop();

        cinematicCamera.stop();


        orbitShot.reset();

        orbitShot.start();


        controls.enabled =
            false;


        status.textContent =
            'Controlled orbit';

    };


// =====================================================
// CINEMATIC ONLY
// =====================================================

cinematicButton.onclick =
    () => {

        cameraSequence.stop();

        orbitShot.stop();


        cinematicCamera.reset();


        cinematicCamera.playSequence([

            establishingShot,

            cinematicOrbitShot,

            closeUpShot

        ]);


        controls.enabled =
            false;


        status.textContent =
            'Cinematic sequence';

    };


// =====================================================
// PAUSE
// =====================================================

pauseButton.onclick =
    () => {

        cameraSequence.pause();

        status.textContent =
            'Sequence paused';

    };


// =====================================================
// RESUME
// =====================================================

resumeButton.onclick =
    () => {

        cameraSequence.resume();

        status.textContent =
            'Sequence resumed';

    };


// =====================================================
// STOP
// =====================================================

stopButton.onclick =
    () => {

        cameraSequence.stop();

        cinematicCamera.stop();

        orbitShot.stop();


        controls.enabled =
            true;


        status.textContent =
            'Manual OrbitControls';

    };


// =====================================================
// SEQUENCE EVENTS
// =====================================================

cameraSequence.onStart =
    () => {

        console.log(
            'CameraSequence started.'
        );

    };


cameraSequence.onShotStart =
    (
        index,
        type
    ) => {

        console.log(

            `Shot ${
                index + 1
            }/${cameraSequence.getShotCount()} → ${type}`

        );


        status.textContent =

            `Shot ${
                index + 1
            }/${cameraSequence.getShotCount()} — ${type}`;

    };


cameraSequence.onShotComplete =
    (
        index,
        type
    ) => {

        console.log(

            `Shot ${
                index + 1
            } complete → ${type}`

        );

    };


cameraSequence.onTransitionStart =
    (
        index,
        type,
        duration
    ) => {

        console.log(

            `Transition → Shot ${
                index + 1
            } | ${type} | ${duration}s`

        );


        status.textContent =

            `Transition → Shot ${
                index + 1
            }`;

    };


cameraSequence.onTransitionComplete =
    (
        index
    ) => {

        console.log(

            `Transition ${
                index + 1
            } complete`

        );

    };


cameraSequence.onPause =
    () => {

        console.log(
            'CameraSequence paused.'
        );

    };


cameraSequence.onResume =
    () => {

        console.log(
            'CameraSequence resumed.'
        );

    };


cameraSequence.onStop =
    () => {

        console.log(
            'CameraSequence stopped.'
        );

    };


cameraSequence.onComplete =
    () => {

        controls.enabled =
            true;


        status.textContent =
            'Camera sequence complete';


        console.log(
            'CameraSequence complete.'
        );

    };


// =====================================================
// ORBIT EVENTS
// =====================================================

orbitShot.onStart =
    () => {

        console.log(
            'OrbitShot started.'
        );

    };


orbitShot.onComplete =
    () => {

        /*
         * When OrbitShot is being controlled
         * by CameraSequence, the sequence
         * handles the next shot.
         */

        if (
            !cameraSequence.isPlaying()
        ) {

            controls.enabled =
                true;

            status.textContent =
                'Orbit complete';

        }

    };


// =====================================================
// CLOCK
// =====================================================

const clock =
    new THREE.Clock();


// =====================================================
// ANIMATION LOOP
// =====================================================

function animate() {

    requestAnimationFrame(
        animate
    );


    const delta =
        clock.getDelta();


    // -------------------------------------------------
    // Object animation
    // -------------------------------------------------

    object.rotation.x +=
        delta * 0.25;


    object.rotation.y +=
        delta * 0.5;


    // -------------------------------------------------
    // Camera systems
    // -------------------------------------------------

    cinematicCamera.update(
        delta
    );


    orbitShot.update(
        delta
    );


    cameraSequence.update(
        delta
    );


    // -------------------------------------------------
    // Manual controls
    // -------------------------------------------------

    if (

        !cameraSequence.isPlaying() &&

        !cinematicCamera.isPlaying() &&

        !orbitShot.isActive()

    ) {

        controls.update();

    }


    // -------------------------------------------------
    // Recording status
    // -------------------------------------------------

    if (
        recorder.isRecording()
    ) {

        const seconds =
            recorder.getElapsedTime();


        status.textContent =

            `● Recording ${
                seconds.toFixed(1)
            }s`;

    }


    // -------------------------------------------------
    // Render
    // -------------------------------------------------

    renderer.render(
        scene,
        camera
    );

}


animate();


// =====================================================
// RESIZE
// =====================================================

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
