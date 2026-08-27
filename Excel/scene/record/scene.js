import {
	PerspectiveCamera,
	Scene,
	WebGLRenderer,
	SphereGeometry,
	PointLight,
	MeshStandardMaterial,
	Mesh,
	HemisphereLight,
	TextureLoader,
	RepeatWrapping,
	SRGBColorSpace,
	PlaneGeometry,
	ReinhardToneMapping,
	AnimationMixer,
	SkeletonHelper,
	Timer
} from 'three';

import Stats from 'three/addons/libs/stats.module.js';
import { GUI } from 'three/addons/libs/lil-gui.module.min.js';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js';

let camera, scene, renderer, bulbLight, bulbMat, hemiLight, stats;
let floorMat;

let previousShadowMap = false;

// --- Skinning animation state (Soldier.glb, replacing bar.glb) ---
let soldierModel, soldierSkeleton, mixer, timer;
const crossFadeControls = [];
let idleAction, walkAction, runAction;
let idleWeight, walkWeight, runWeight;
let soldierActions, soldierSettings;
let singleStepMode = false;
let sizeOfNextStep = 0;
let guiPanel;

// All exhibit-stand parts, split into individually-loadable GLBs so
// each can be swapped/edited at runtime independently. Every file
// was exported keeping the same scale/position/rotation it had as
// a node inside the original exhibit-stand-stripped.glb, so each
// part is added to the scene as-is — no per-part transform offsets
// are applied here.
// NOTE: 'bar.glb' has been removed from this list — it is replaced by
// the animated Soldier.glb, loaded separately below via
// loadSoldierInPlaceOfBar() so its skeleton/mixer can be set up.
const EXHIBIT_PART_FILES = [
	'balloons.glb',
	'carpet.glb',
	'circular_box.glb',
	'flower.glb',
	'main_housing.glb',
	'mesh_1.glb',
	'mesh_11.glb',
	'mesh_14.glb',
	'mesh_1_1.glb',
	'mesh_23.glb',
	'mesh_24.glb',
	'mesh_25.glb',
	'mesh_26.glb',
	'mesh_27.glb',
	'ram1.glb',
	'ram2.glb',
	'ram3.glb',
	'skyla.glb',
	'stolek_bar.glb',
	'stolek_bar_1.glb',
	'stolek_bar_2.glb',
	'stolek_bar_3.glb',
	'stolek_bar_4.glb',
	'stul.glb',
	'tv_60.glb',
	'tv_60_1.glb',
	'tv_stand.glb',
	'wallboard.glb'
];

// Keyed by filename (without extension) so individual parts can be
// found/replaced/edited later — e.g. exhibitParts['bar'].scene
const exhibitParts = {};


// ref for lumens: http://www.power-sure.com/lumens.htm
const bulbLuminousPowers = {
	'110000 lm (1000W)': 110000,
	'3500 lm (300W)': 3500,
	'1700 lm (100W)': 1700,
	'800 lm (60W)': 800,
	'400 lm (40W)': 400,
	'180 lm (25W)': 180,
	'20 lm (4W)': 20,
	'Off': 0
};

// ref for solar irradiances: https://en.wikipedia.org/wiki/Lux
const hemiLuminousIrradiances = {
	'0.0001 lx (Moonless Night)': 0.0001,
	'0.002 lx (Night Airglow)': 0.002,
	'0.5 lx (Full Moon)': 0.5,
	'3.4 lx (City Twilight)': 3.4,
	'50 lx (Living Room)': 50,
	'100 lx (Very Overcast)': 100,
	'350 lx (Office Room)': 350,
	'400 lx (Sunrise/Sunset)': 400,
	'1000 lx (Overcast)': 1000,
	'18000 lx (Daylight)': 18000,
	'50000 lx (Direct Sun)': 50000
};

const params = {
	shadows: true,
	exposure: 0.68,
	bulbPower: Object.keys( bulbLuminousPowers )[ 4 ],
	hemiIrradiance: Object.keys( hemiLuminousIrradiances )[ 0 ],
	bulbMoving: true
};

// Bulb vertical motion is driven by cos(time), where time is a running
// phase value (not the raw clock) so pausing/resuming never jumps: on
// pause we stop advancing the phase and keep whatever position it was
// at; on resume we continue advancing from that same phase using a
// fresh delta-time base, instead of re-reading Date.now() directly.
let bulbPhase = 0;
let lastFrameTime = Date.now();

init();

function init() {

	const container = document.getElementById( 'container' );

	stats = new Stats();
	container.appendChild( stats.dom );

	timer = new Timer();
	timer.connect( document );


	camera = new PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.1, 100 );
	camera.position.x = - 4;
	camera.position.z = 4;
	camera.position.y = 2;

	scene = new Scene();

	const bulbGeometry = new SphereGeometry( 0.02, 16, 8 );
	bulbLight = new PointLight( 0xffee88, 1, 100, 2 );

	bulbMat = new MeshStandardMaterial( {
		emissive: 0xffffee,
		emissiveIntensity: 1,
		color: 0x000000
	} );
	bulbLight.add( new Mesh( bulbGeometry, bulbMat ) );
	bulbLight.position.set( 0, 2, 0 );
	bulbLight.castShadow = true;
	scene.add( bulbLight );

	hemiLight = new HemisphereLight( 0xddeeff, 0x0f0e0d, 0.02 );
	scene.add( hemiLight );

	floorMat = new MeshStandardMaterial( {
		roughness: 0.8,
		color: 0xffffff,
		metalness: 0.2,
		bumpScale: 1
	} );
	const textureLoader = new TextureLoader();
	textureLoader.load( 'textures/hardwood2_diffuse.jpg', function ( map ) {

		map.wrapS = RepeatWrapping;
		map.wrapT = RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		map.colorSpace = SRGBColorSpace;
		floorMat.map = map;
		floorMat.needsUpdate = true;

	} );
	textureLoader.load( 'textures/hardwood2_bump.jpg', function ( map ) {

		map.wrapS = RepeatWrapping;
		map.wrapT = RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.bumpMap = map;
		floorMat.needsUpdate = true;

	} );
	textureLoader.load( 'textures/hardwood2_roughness.jpg', function ( map ) {

		map.wrapS = RepeatWrapping;
		map.wrapT = RepeatWrapping;
		map.anisotropy = 4;
		map.repeat.set( 10, 24 );
		floorMat.roughnessMap = map;
		floorMat.needsUpdate = true;

	} );

	// NOTE: cubeMat / ballMat and their texture loads (brick + earth) have been
	// removed along with the box/ball meshes they were assigned to, per the
	// request to replace all non-bulb scene objects with the GLB exhibit stand.

	const floorGeometry = new PlaneGeometry( 20, 20 );
	const floorMesh = new Mesh( floorGeometry, floorMat );
	floorMesh.receiveShadow = true;
	floorMesh.rotation.x = - Math.PI / 2.0;
	scene.add( floorMesh );

	// --- Load all split exhibit-stand parts in place of the globe/bricks ---
	loadExhibitParts();

	// --- Load the animated Soldier model where bar.glb used to sit ---
	loadSoldierInPlaceOfBar();


	renderer = new WebGLRenderer();
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.setAnimationLoop( animate );
	renderer.shadowMap.enabled = true;
	renderer.toneMapping = ReinhardToneMapping;
	container.appendChild( renderer.domElement );


	const controls = new OrbitControls( camera, renderer.domElement );
	controls.minDistance = 1;
	controls.maxDistance = 20;

	window.addEventListener( 'resize', onWindowResize );


	const gui = new GUI();

	gui.add( params, 'hemiIrradiance', Object.keys( hemiLuminousIrradiances ) );
	gui.add( params, 'bulbPower', Object.keys( bulbLuminousPowers ) );
	gui.add( params, 'exposure', 0, 1 );
	gui.add( params, 'shadows' );
	gui.add( params, 'bulbMoving' ).name( 'bulb moving' );
	gui.open();

	// Skinning-animation folders (Visibility / Activation / Pausing / Crossfading /
	// Blend Weights / General Speed) are added into this same panel once
	// Soldier.glb has finished loading — see createSoldierPanel(), called from
	// loadSoldierInPlaceOfBar()'s onLoad callback. Stashing the panel reference
	// on the module scope so that callback can reach it.
	guiPanel = gui;

}

function loadExhibitParts() {

	let gltfLoader;

	try {

		const dracoLoader = new DRACOLoader();
		dracoLoader.setDecoderPath( 'jsm/libs/draco/gltf/' );

		gltfLoader = new GLTFLoader();
		gltfLoader.setDRACOLoader( dracoLoader );

	} catch ( setupError ) {

		console.error( 'Failed to set up GLTFLoader/DRACOLoader — exhibit parts will not load:', setupError );
		return;

	}

	// Load every part in parallel — each is its own GLTFLoader.load()
	// call with its own success/error handling, so one missing or
	// broken file doesn't block the rest from appearing.
	EXHIBIT_PART_FILES.forEach( function ( filename ) {

		const partKey = filename.replace( /\.glb$/, '' );

		gltfLoader.load(
			'models/exhibit-parts/' + filename,
			function ( gltf ) {

				const partRoot = gltf.scene;

				// No position/rotation/scale is set here — each part
				// GLB already carries the original mesh's transform
				// from when it was split out of
				// exhibit-stand-stripped.glb, so adding it as-is
				// reproduces the original layout.
				partRoot.traverse( function ( node ) {

					if ( node.isMesh ) {

						node.castShadow = true;
						node.receiveShadow = true;

					}

				} );

				scene.add( partRoot );
				exhibitParts[ partKey ] = gltf;

			},
			undefined,
			function ( error ) {

				console.error( 'Failed to load exhibit part "' + filename + '":', error );

			}
		);

	} );

}

function loadSoldierInPlaceOfBar() {

	const loader = new GLTFLoader();

	loader.load( 'models/exhibit-parts/Soldier.glb', function ( gltf ) {

		soldierModel = gltf.scene;

		// No transform override — same convention as every other split
		// part: Soldier.glb is added as-is, occupying the position
		// bar.glb previously held in the scene.
		scene.add( soldierModel );

		soldierModel.traverse( function ( object ) {

			if ( object.isMesh ) object.castShadow = true;

		} );

		soldierSkeleton = new SkeletonHelper( soldierModel );
		soldierSkeleton.visible = false;
		scene.add( soldierSkeleton );

		const animations = gltf.animations;

		mixer = new AnimationMixer( soldierModel );

		idleAction = mixer.clipAction( animations[ 0 ] );
		walkAction = mixer.clipAction( animations[ 3 ] );
		runAction = mixer.clipAction( animations[ 1 ] );

		soldierActions = [ idleAction, walkAction, runAction ];

		activateAllSoldierActions();

		createSoldierPanel();

	}, undefined, function ( error ) {

		console.error( 'Failed to load Soldier.glb (replacing bar.glb):', error );

	} );

}

function createSoldierPanel() {

	if ( ! guiPanel ) return;

	const folder1 = guiPanel.addFolder( 'Visibility' );
	const folder2 = guiPanel.addFolder( 'Activation/Deactivation' );
	const folder3 = guiPanel.addFolder( 'Pausing/Stepping' );
	const folder4 = guiPanel.addFolder( 'Crossfading' );
	const folder5 = guiPanel.addFolder( 'Blend Weights' );
	const folder6 = guiPanel.addFolder( 'General Speed' );

	soldierSettings = {
		'show model': true,
		'show skeleton': false,
		'deactivate all': deactivateAllSoldierActions,
		'activate all': activateAllSoldierActions,
		'pause/continue': pauseContinueSoldier,
		'make single step': toSingleStepMode,
		'modify step size': 0.05,
		'from walk to idle': function () {

			prepareCrossFade( walkAction, idleAction, 1.0 );

		},
		'from idle to walk': function () {

			prepareCrossFade( idleAction, walkAction, 0.5 );

		},
		'from walk to run': function () {

			prepareCrossFade( walkAction, runAction, 2.5 );

		},
		'from run to walk': function () {

			prepareCrossFade( runAction, walkAction, 5.0 );

		},
		'use default duration': true,
		'set custom duration': 3.5,
		'modify idle weight': 0.0,
		'modify walk weight': 1.0,
		'modify run weight': 0.0,
		'modify time scale': 1.0
	};

	folder1.add( soldierSettings, 'show model' ).onChange( showSoldierModel );
	folder1.add( soldierSettings, 'show skeleton' ).onChange( showSoldierSkeleton );
	folder2.add( soldierSettings, 'deactivate all' );
	folder2.add( soldierSettings, 'activate all' );
	folder3.add( soldierSettings, 'pause/continue' );
	folder3.add( soldierSettings, 'make single step' );
	folder3.add( soldierSettings, 'modify step size', 0.01, 0.1, 0.001 );
	crossFadeControls.push( folder4.add( soldierSettings, 'from walk to idle' ) );
	crossFadeControls.push( folder4.add( soldierSettings, 'from idle to walk' ) );
	crossFadeControls.push( folder4.add( soldierSettings, 'from walk to run' ) );
	crossFadeControls.push( folder4.add( soldierSettings, 'from run to walk' ) );
	folder4.add( soldierSettings, 'use default duration' );
	folder4.add( soldierSettings, 'set custom duration', 0, 10, 0.01 );
	folder5.add( soldierSettings, 'modify idle weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

		setActionWeight( idleAction, weight );

	} );
	folder5.add( soldierSettings, 'modify walk weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

		setActionWeight( walkAction, weight );

	} );
	folder5.add( soldierSettings, 'modify run weight', 0.0, 1.0, 0.01 ).listen().onChange( function ( weight ) {

		setActionWeight( runAction, weight );

	} );
	folder6.add( soldierSettings, 'modify time scale', 0.0, 1.5, 0.01 ).onChange( modifySoldierTimeScale );

	folder1.open();
	folder2.open();
	folder3.open();
	folder4.open();
	folder5.open();
	folder6.open();

}

function showSoldierModel( visibility ) {

	soldierModel.visible = visibility;

}

function showSoldierSkeleton( visibility ) {

	soldierSkeleton.visible = visibility;

}

function modifySoldierTimeScale( speed ) {

	mixer.timeScale = speed;

}

function deactivateAllSoldierActions() {

	soldierActions.forEach( function ( action ) {

		action.stop();

	} );

}

function activateAllSoldierActions() {

	setActionWeight( idleAction, soldierSettings ? soldierSettings[ 'modify idle weight' ] : 0.0 );
	setActionWeight( walkAction, soldierSettings ? soldierSettings[ 'modify walk weight' ] : 1.0 );
	setActionWeight( runAction, soldierSettings ? soldierSettings[ 'modify run weight' ] : 0.0 );

	soldierActions.forEach( function ( action ) {

		action.play();

	} );

}

function pauseContinueSoldier() {

	if ( singleStepMode ) {

		singleStepMode = false;
		unPauseAllSoldierActions();

	} else {

		if ( idleAction.paused ) {

			unPauseAllSoldierActions();

		} else {

			pauseAllSoldierActions();

		}

	}

}

function pauseAllSoldierActions() {

	soldierActions.forEach( function ( action ) {

		action.paused = true;

	} );

}

function unPauseAllSoldierActions() {

	soldierActions.forEach( function ( action ) {

		action.paused = false;

	} );

}

function toSingleStepMode() {

	unPauseAllSoldierActions();

	singleStepMode = true;
	sizeOfNextStep = soldierSettings[ 'modify step size' ];

}

function prepareCrossFade( startAction, endAction, defaultDuration ) {

	// Switch default / custom crossfade duration (according to the user's choice)

	const duration = setCrossFadeDuration( defaultDuration );

	// Make sure that we don't go on in singleStepMode, and that all actions are unpaused

	singleStepMode = false;
	unPauseAllSoldierActions();

	// If the current action is 'idle' (duration 4 sec), execute the crossfade immediately;
	// else wait until the current action has finished its current loop

	if ( startAction === idleAction ) {

		executeCrossFade( startAction, endAction, duration );

	} else {

		synchronizeCrossFade( startAction, endAction, duration );

	}

}

function setCrossFadeDuration( defaultDuration ) {

	// Switch default crossfade duration <-> custom crossfade duration

	if ( soldierSettings[ 'use default duration' ] ) {

		return defaultDuration;

	} else {

		return soldierSettings[ 'set custom duration' ];

	}

}

function synchronizeCrossFade( startAction, endAction, duration ) {

	mixer.addEventListener( 'loop', onLoopFinished );

	function onLoopFinished( event ) {

		if ( event.action === startAction ) {

			mixer.removeEventListener( 'loop', onLoopFinished );

			executeCrossFade( startAction, endAction, duration );

		}

	}

}

function executeCrossFade( startAction, endAction, duration ) {

	// Not only the start action, but also the end action must get a weight of 1 before fading
	// (concerning the start action this is already guaranteed in this place)

	setActionWeight( endAction, 1 );
	endAction.time = 0;

	// Crossfade with warping - you can also try without warping by setting the third parameter to false

	startAction.crossFadeTo( endAction, duration, true );

}

// This function is needed, since animationAction.crossFadeTo() disables its start action and sets
// the start action's timeScale to ((start animation's duration) / (end animation's duration))

function setActionWeight( action, weight ) {

	action.enabled = true;
	action.setEffectiveTimeScale( 1 );
	action.setEffectiveWeight( weight );

}

// Called by the render loop

function updateSoldierWeightSliders() {

	soldierSettings[ 'modify idle weight' ] = idleWeight;
	soldierSettings[ 'modify walk weight' ] = walkWeight;
	soldierSettings[ 'modify run weight' ] = runWeight;

}

// Called by the render loop

function updateSoldierCrossFadeControls() {

	if ( idleWeight === 1 && walkWeight === 0 && runWeight === 0 ) {

		crossFadeControls[ 0 ].disable();
		crossFadeControls[ 1 ].enable();
		crossFadeControls[ 2 ].disable();
		crossFadeControls[ 3 ].disable();

	}

	if ( idleWeight === 0 && walkWeight === 1 && runWeight === 0 ) {

		crossFadeControls[ 0 ].enable();
		crossFadeControls[ 1 ].disable();
		crossFadeControls[ 2 ].enable();
		crossFadeControls[ 3 ].disable();

	}

	if ( idleWeight === 0 && walkWeight === 0 && runWeight === 1 ) {

		crossFadeControls[ 0 ].disable();
		crossFadeControls[ 1 ].disable();
		crossFadeControls[ 2 ].disable();
		crossFadeControls[ 3 ].enable();

	}

}

function onWindowResize() {

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	renderer.setSize( window.innerWidth, window.innerHeight );

}

//

function animate() {

	renderer.toneMappingExposure = Math.pow( params.exposure, 5.0 ); // to allow for very bright scenes.
	renderer.shadowMap.enabled = params.shadows;
	bulbLight.castShadow = params.shadows;

	if ( params.shadows !== previousShadowMap ) {

		floorMat.needsUpdate = true;
		previousShadowMap = params.shadows;

	}

	bulbLight.power = bulbLuminousPowers[ params.bulbPower ];
	bulbMat.emissiveIntensity = bulbLight.intensity / Math.pow( 0.02, 2.0 ); // convert from intensity to irradiance at bulb surface

	hemiLight.intensity = hemiLuminousIrradiances[ params.hemiIrradiance ];

	// Advance the phase only while moving is enabled, using the real
	// elapsed time since the previous frame. Pausing simply stops the
	// phase from advancing — bulbLight.position.y keeps whatever value
	// Math.cos( bulbPhase ) produced last, so illumination stays exactly
	// where it was. Resuming continues from that same phase, so there's
	// no jump back to a "clock time" position.
	const now = Date.now();
	const deltaSeconds = ( now - lastFrameTime ) / 1000;
	lastFrameTime = now;

	if ( params.bulbMoving ) {

		bulbPhase += deltaSeconds * 0.5; // matches the original 0.0005-per-ms rate

	}

	bulbLight.position.y = Math.cos( bulbPhase ) * 0.75 + 1.25;

	// --- Skinning animation update (Soldier.glb, replacing bar.glb) ---
	if ( mixer ) {

		timer.update();

		idleWeight = idleAction.getEffectiveWeight();
		walkWeight = walkAction.getEffectiveWeight();
		runWeight = runAction.getEffectiveWeight();

		// Update the panel values if weights are modified from "outside" (by crossfadings)

		updateSoldierWeightSliders();

		// Enable/disable crossfade controls according to current weight values

		updateSoldierCrossFadeControls();

		// Get the time elapsed since the last frame, used for mixer update (if not in single step mode)

		let mixerUpdateDelta = timer.getDelta();

		// If in single step mode, make one step and then do nothing (until the user clicks again)

		if ( singleStepMode ) {

			mixerUpdateDelta = sizeOfNextStep;
			sizeOfNextStep = 0;

		}

		mixer.update( mixerUpdateDelta );

	}

	renderer.render( scene, camera );

	stats.update();

}
