import * as THREE from 'three/webgpu';

// --- TSL imports needed by both scenes ---
import {
        color, vec2, pass, linearDepth, normalWorld,
        triplanarTexture, texture, objectPosition, screenUV,
        viewportLinearDepth, viewportDepthTexture, viewportSharedTexture,
        mx_worley_noise_float, positionWorld, time,
        parallaxUV, blendOverlay, uv, normalMap, uniform
} from 'three/tsl';

import { gaussianBlur } from 'three/addons/tsl/display/GaussianBlurNode.js';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { HDRLoader } from 'three/addons/loaders/HDRLoader.js';

// ─── Shared renderer ────────────────────────────────────────────────────────

const renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

// ─── Transition state ───────────────────────────────────────────────────────

const SCENE1_DURATION   = 8;   // seconds to show parallax scene
const FADE_DURATION     = 2;   // seconds for each fade (out + in)

let activeScene = 'parallax';  // 'parallax' | 'fading' | 'water'
let elapsed1    = 0;
let fadeOverlay = document.getElementById( 'fade-overlay' );
let sceneTitle  = document.getElementById( 'scene-title' );

// ─── SCENE 1 — UV Parallax ──────────────────────────────────────────────────

let scene1, camera1, controls1;

async function initParallax() {

        scene1 = new THREE.Scene();

        camera1 = new THREE.PerspectiveCamera( 45, window.innerWidth / window.innerHeight, .1, 100 );
        camera1.position.set( 15, 7, 15 );

        // environment

        const environmentTexture = await new HDRLoader()
                .loadAsync( './textures/equirectangular/752-hdri-skies-com_1k.hdr' );

        environmentTexture.mapping = THREE.EquirectangularReflectionMapping;

        scene1.environment   = environmentTexture;
        scene1.background    = environmentTexture;
        scene1.backgroundBlurriness = 0.4;

        // textures

        const loader = new THREE.TextureLoader();

        const topTexture = await loader.loadAsync( 'textures/ambientcg/Ice002_1K-JPG_Color.jpg' );
        topTexture.colorSpace = THREE.SRGBColorSpace;
        topTexture.wrapS = THREE.RepeatWrapping;
        topTexture.wrapT = THREE.RepeatWrapping;

        const roughnessTexture = await loader.loadAsync( 'textures/ambientcg/Ice002_1K-JPG_Roughness.jpg' );
        roughnessTexture.colorSpace = THREE.NoColorSpace;
        roughnessTexture.wrapS = THREE.RepeatWrapping;
        roughnessTexture.wrapT = THREE.RepeatWrapping;

        const normalTexture = await loader.loadAsync( 'textures/ambientcg/Ice002_1K-JPG_NormalGL.jpg' );
        normalTexture.colorSpace = THREE.NoColorSpace;
        normalTexture.wrapS = THREE.RepeatWrapping;
        normalTexture.wrapT = THREE.RepeatWrapping;

        const displaceTexture = await loader.loadAsync( 'textures/ambientcg/Ice002_1K-JPG_Displacement.jpg' );
        displaceTexture.colorSpace = THREE.NoColorSpace;
        displaceTexture.wrapS = THREE.RepeatWrapping;
        displaceTexture.wrapT = THREE.RepeatWrapping;

        const bottomTexture = await loader.loadAsync( 'textures/ambientcg/Ice003_1K-JPG_Color.jpg' );
        bottomTexture.colorSpace = THREE.SRGBColorSpace;
        bottomTexture.wrapS = THREE.RepeatWrapping;
        bottomTexture.wrapT = THREE.RepeatWrapping;

        // parallax effect

        const scaleUV     = uniform( 3 );
        const scaledUV    = uv().mul( scaleUV );
        const parallaxScale = uniform( 0.5 );
        const offsetUV    = texture( displaceTexture, scaledUV ).mul( parallaxScale );
        const parallaxUVOffset = parallaxUV( scaledUV, offsetUV );
        const parallaxResult   = texture( bottomTexture, parallaxUVOffset );
        const iceNode          = blendOverlay( texture( topTexture, scaledUV ), parallaxResult );

        // material

        const material = new THREE.MeshStandardNodeMaterial();
        material.colorNode    = iceNode.mul( 5 );
        material.roughnessNode = texture( roughnessTexture, scaledUV );
        material.normalNode   = normalMap( texture( normalTexture, scaledUV ) );
        material.metalness    = 0;

        const ground = new THREE.Mesh( new THREE.CircleGeometry( 25, 64 ), material );
        ground.rotateX( - Math.PI / 2 );
        scene1.add( ground );

        // renderer settings for scene 1

        renderer.toneMapping         = THREE.ReinhardToneMapping;
        renderer.toneMappingExposure = 6;

        // controls

        controls1 = new OrbitControls( camera1, renderer.domElement );
        controls1.target.set( 0, 0, 0 );
        controls1.maxDistance    = 40;
        controls1.minDistance    = 10;
        controls1.autoRotate     = true;
        controls1.autoRotateSpeed = - 1;
        controls1.update();

}

// ─── SCENE 2 — Backdrop Water ───────────────────────────────────────────────

let scene2, camera2, controls2;
let mixer, objects, timer, model, floor, floorPosition, renderPipeline;

function initWater() {

        camera2 = new THREE.PerspectiveCamera( 50, window.innerWidth / window.innerHeight, 0.25, 30 );
        camera2.position.set( 3, 2, 4 );

        scene2 = new THREE.Scene();
        scene2.fog            = new THREE.Fog( 0x0487e2, 7, 25 );
        scene2.backgroundNode = normalWorld.y.mix( color( 0x0487e2 ), color( 0x0066ff ) );
        camera2.lookAt( 0, 1, 0 );

        const sunLight = new THREE.DirectionalLight( 0xFFE499, 5 );
        sunLight.position.set( .5, 3, .5 );

        const waterAmbientLight = new THREE.HemisphereLight( 0x333366, 0x74ccf4, 5 );
        const skyAmbientLight   = new THREE.HemisphereLight( 0x74ccf4, 0, 1 );

        scene2.add( sunLight );
        scene2.add( skyAmbientLight );
        scene2.add( waterAmbientLight );

        timer = new THREE.Timer();
        timer.connect( document );

        // animated model

        const gltfLoader = new GLTFLoader();
        gltfLoader.load( 'models/gltf/Michele.glb', function ( gltf ) {

                model = gltf.scene;
                mixer = new THREE.AnimationMixer( model );
                const action = mixer.clipAction( gltf.animations[ 0 ] );
                action.play();
                scene2.add( model );

        } );

        // icebergs

        const textureLoader = new THREE.TextureLoader();
        const iceDiffuse = textureLoader.load( './textures/water.jpg' );
        iceDiffuse.wrapS      = THREE.RepeatWrapping;
        iceDiffuse.wrapT      = THREE.RepeatWrapping;
        iceDiffuse.colorSpace = THREE.NoColorSpace;

        const iceColorNode = triplanarTexture( texture( iceDiffuse ) ).add( color( 0x0066ff ) ).mul( .8 );

        const icoGeo  = new THREE.IcosahedronGeometry( 1, 3 );
        const icoMat  = new THREE.MeshStandardNodeMaterial( { colorNode: iceColorNode } );

        const count = 100, scale = 3.5, column = 10;
        objects = new THREE.Group();

        for ( let i = 0; i < count; i ++ ) {

                const x = i % column;
                const y = i / column;
                const mesh = new THREE.Mesh( icoGeo, icoMat );
                mesh.position.set( x * scale, 0, y * scale );
                mesh.rotation.set( Math.random(), Math.random(), Math.random() );
                objects.add( mesh );

        }

        objects.position.set(
                ( ( column - 1 ) * scale ) * - .5,
                - 1,
                ( ( count / column ) * scale ) * - .5
        );

        scene2.add( objects );

        // water surface

        const t         = time.mul( .8 );
        const floorUV   = positionWorld.xzy;

        const waterLayer0   = mx_worley_noise_float( floorUV.mul( 4 ).add( t ) );
        const waterLayer1   = mx_worley_noise_float( floorUV.mul( 2 ).add( t ) );
        const waterIntensity = waterLayer0.mul( waterLayer1 );
        const waterColor    = waterIntensity.mul( 1.4 ).mix( color( 0x0487e2 ), color( 0x74ccf4 ) );

        const depth              = linearDepth();
        const depthWater         = viewportLinearDepth.sub( depth );
        const depthEffect        = depthWater.remapClamp( - .002, .04 );
        const refractionUV       = screenUV.add( vec2( 0, waterIntensity.mul( .1 ) ) );
        const depthTestForRefraction = linearDepth( viewportDepthTexture( refractionUV ) ).sub( depth );
        const depthRefraction    = depthTestForRefraction.remapClamp( 0, .1 );
        const finalUV            = depthTestForRefraction.lessThan( 0 ).select( screenUV, refractionUV );
        const viewportTexture    = viewportSharedTexture( finalUV );

        const waterMaterial = new THREE.MeshBasicNodeMaterial();
        waterMaterial.colorNode       = waterColor;
        waterMaterial.backdropNode    = depthEffect.mix( viewportSharedTexture(), viewportTexture.mul( depthRefraction.mix( 1, waterColor ) ) );
        waterMaterial.backdropAlphaNode = depthRefraction.oneMinus();
        waterMaterial.transparent     = true;

        const water = new THREE.Mesh( new THREE.BoxGeometry( 50, .001, 50 ), waterMaterial );
        water.position.set( 0, 0, 0 );
        scene2.add( water );

        // floor cylinder

        floor = new THREE.Mesh(
                new THREE.CylinderGeometry( 1.1, 1.1, 10 ),
                new THREE.MeshStandardNodeMaterial( { colorNode: iceColorNode } )
        );
        floor.position.set( 0, - 5, 0 );
        scene2.add( floor );

        // caustics

        const waterPosY = positionWorld.y.sub( water.position.y );
        let causticsTransition = waterPosY.add( .1 ).saturate().oneMinus();
        causticsTransition = waterPosY.lessThan( 0 ).select( causticsTransition, normalWorld.y.mix( causticsTransition, 0 ) ).toVar();
        floor.material.colorNode = causticsTransition.mix( icoMat.colorNode, icoMat.colorNode.add( waterLayer0 ) );

        floorPosition = new THREE.Vector3( 0, .2, 0 );

        // post processing pipeline

        const scenePass           = pass( scene2, camera2 );
        const scenePassColor      = scenePass.getTextureNode();
        const scenePassDepth      = scenePass.getLinearDepthNode().remapClamp( .3, .5 );
        const waterMask           = objectPosition( camera2 ).y.greaterThan( screenUV.y.sub( .5 ).mul( camera2.near ) );
        const scenePassColorBlurred = gaussianBlur( scenePassColor );
        scenePassColorBlurred.directionNode = waterMask.select( scenePassDepth, scenePass.getLinearDepthNode().mul( 5 ) );
        const vignette = screenUV.distance( .5 ).mul( 1.35 ).clamp().oneMinus();

        renderPipeline = new THREE.RenderPipeline( renderer );
        renderPipeline.outputNode = waterMask.select(
                scenePassColorBlurred,
                scenePassColorBlurred.mul( color( 0x74ccf4 ) ).mul( vignette )
        );

        // controls

        controls2 = new OrbitControls( camera2, renderer.domElement );
        controls2.minDistance    = 1;
        controls2.maxDistance    = 10;
        controls2.maxPolarAngle  = Math.PI * 0.9;
        controls2.autoRotate     = true;
        controls2.autoRotateSpeed = 1;
        controls2.target.set( 0, .2, 0 );
        controls2.update();

}

// ─── Transition logic ───────────────────────────────────────────────────────

function startTransition() {

        activeScene = 'fading';

        // fade to black
        fadeOverlay.style.opacity = '1';

        setTimeout( () => {

                // switch renderer settings for water scene
                renderer.toneMapping         = THREE.NoToneMapping;
                renderer.toneMappingExposure = 1;

                // disable parallax controls, enable water controls
                controls1.dispose();

                activeScene = 'water';
                sceneTitle.textContent = 'Backdrop Water';

                // fade back in
                fadeOverlay.style.opacity = '0';

        }, FADE_DURATION * 1000 );

}

// ─── Unified animate loop ───────────────────────────────────────────────────

const clock = new THREE.Clock();

function animate() {

        const delta = clock.getDelta();

        if ( activeScene === 'parallax' ) {

                elapsed1 += delta;
                controls1.update();
                renderer.render( scene1, camera1 );

                if ( elapsed1 >= SCENE1_DURATION ) startTransition();

        } else if ( activeScene === 'fading' ) {

                // keep rendering parallax during fade-out, then water during fade-in
                const halfFade = FADE_DURATION * 1000 / 2;
                const timeSinceFadeStart = ( elapsed1 - SCENE1_DURATION ) * 1000;

                if ( timeSinceFadeStart < halfFade ) {
                        renderer.render( scene1, camera1 );
                } else {
                        tickWater( delta );
                        renderPipeline.render();
                }

                elapsed1 += delta;

        } else {

                tickWater( delta );
                renderPipeline.render();

        }

}

function tickWater( delta ) {

        timer.update();
        controls2.update();

        const t = timer.getDelta();

        floor.position.y = floorPosition.y - 5;

        if ( model ) {

                mixer.update( t );
                model.position.y = floorPosition.y;

        }

        for ( const object of objects.children ) {

                object.position.y  = Math.sin( timer.getElapsed() + object.id ) * .3;
                object.rotation.y += delta * .3;

        }

}

// ─── Resize handler ─────────────────────────────────────────────────────────

function onWindowResize() {

        renderer.setSize( window.innerWidth, window.innerHeight );

        camera1.aspect = window.innerWidth / window.innerHeight;
        camera1.updateProjectionMatrix();

        camera2.aspect = window.innerWidth / window.innerHeight;
        camera2.updateProjectionMatrix();

}

window.addEventListener( 'resize', onWindowResize );

// ─── Boot ────────────────────────────────────────────────────────────────────

async function boot() {

        // Build both scenes before starting — water scene needs to be ready
        // before the transition fires so there's no blank frame on switch
        await initParallax();
        initWater();

        renderer.setAnimationLoop( animate );

}

boot();
