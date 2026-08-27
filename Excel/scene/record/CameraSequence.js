import * as THREE from 'three';

import { CameraTransition } from './CameraTransition.js';


export class CameraSequence {

    constructor({

        camera,

        cinematicCamera = null,

        orbitShot = null,

        controls = null

    } = {}) {

        this.camera = camera;

        this.cinematicCamera =
            cinematicCamera;

        this.orbitShot =
            orbitShot;

        this.controls =
            controls;


        // =================================================
        // SEQUENCE
        // =================================================

        this.shots = [];

        this.currentIndex = -1;

        this.playing = false;

        this.paused = false;


        // =================================================
        // TRANSITION
        // =================================================

        this.transition =
            new CameraTransition(
                camera
            );

        this.transitioning = false;

        this.transitionDuration = 1;

        this.transitionEasing =
            'easeInOutCubic';


        // =================================================
        // EVENTS
        // =================================================

        this.onStart = null;

        this.onShotStart = null;

        this.onShotComplete = null;

        this.onTransitionStart = null;

        this.onTransitionComplete = null;

        this.onComplete = null;

        this.onStop = null;

        this.onPause = null;

        this.onResume = null;

    }


    // =====================================================
    // ADD SHOT
    // =====================================================

    addShot(
        type,
        shot,
        options = {}
    ) {

        if (
            type !== 'cinematic' &&
            type !== 'orbit'
        ) {

            console.warn(
                `CameraSequence: Unknown shot type "${type}".`
            );

            return this;

        }


        this.shots.push({

            type,

            shot,

            transition:
                options.transition ??
                'blend',

            transitionDuration:
                options.duration ??
                this.transitionDuration,

            transitionEasing:
                options.easing ??
                this.transitionEasing

        });


        return this;

    }


    // =====================================================
    // SET SHOTS
    // =====================================================

    setShots(shots) {

        this.stop();


        this.shots =
            shots.map(item => ({

                type: item.type,

                shot: item.shot,

                transition:
                    item.transition ??
                    'blend',

                transitionDuration:
                    item.transitionDuration ??
                    1,

                transitionEasing:
                    item.transitionEasing ??
                    'easeInOutCubic'

            }));


        return this;

    }


    // =====================================================
    // CLEAR
    // =====================================================

    clear() {

        this.stop();

        this.shots = [];

        this.currentIndex = -1;

        return this;

    }


    // =====================================================
    // START
    // =====================================================

    start() {

        if (
            this.shots.length === 0
        ) {

            console.warn(
                'CameraSequence: No shots available.'
            );

            return;

        }


        this.stopCurrentShot();

        this.transition.stop();


        this.currentIndex = 0;

        this.playing = true;

        this.paused = false;


        if (this.controls) {

            this.controls.enabled = false;

        }


        if (this.onStart) {

            this.onStart();

        }


        /*
         * First shot also gets a transition.
         *
         * This creates a cinematic opening
         * instead of immediately jumping to
         * the first camera position.
         */

        this.startShotWithTransition(
            this.currentIndex
        );

    }


    // =====================================================
    // START SHOT WITH TRANSITION
    // =====================================================

    startShotWithTransition(index) {

        if (
            !this.playing
        ) {

            return;

        }


        const item =
            this.shots[index];


        if (!item) {

            this.complete();

            return;

        }


        const targetState =
            this.getShotStartState(
                item
            );


        if (!targetState) {

            console.warn(
                'CameraSequence: Could not determine shot start state.'
            );

            this.playShot(
                index
            );

            return;

        }


        // -----------------------------------------------
        // First camera state
        // -----------------------------------------------

        const currentState = {

            position:
                this.camera.position.clone(),

            quaternion:
                this.camera.quaternion.clone(),

            target:
                this.getCurrentTarget(),

            fov:
                this.camera.fov

        };


        // -----------------------------------------------
        // No transition
        // -----------------------------------------------

        if (
            item.transition === 'cut' ||
            item.transitionDuration <= 0
        ) {

            this.camera.position.copy(
                targetState.position
            );

            this.camera.quaternion.copy(
                targetState.quaternion
            );

            this.camera.fov =
                targetState.fov;

            this.camera.updateProjectionMatrix();


            this.playShot(index);

            return;

        }


        // -----------------------------------------------
        // Transition
        // -----------------------------------------------

        this.transitioning = true;


        if (this.onTransitionStart) {

            this.onTransitionStart(
                index,
                item.transition,
                item.transitionDuration
            );

        }


        console.log(
            `CameraSequence: Transition → shot ${
                index + 1
            } (${item.transitionDuration}s)`
        );


        this.transition.start({

            from:
                currentState,

            to:
                targetState,

            duration:
                item.transitionDuration,

            type:
                item.transition,

            easing:
                item.transitionEasing,

            onComplete:
                () => {

                    this.transitioning = false;


                    if (
                        this.onTransitionComplete
                    ) {

                        this.onTransitionComplete(
                            index
                        );

                    }


                    this.playShot(
                        index
                    );

                }

        });

    }


    // =====================================================
    // PLAY SHOT
    // =====================================================

    playShot(index) {

        if (
            !this.playing
        ) {

            return;

        }


        const item =
            this.shots[index];


        if (!item) {

            this.complete();

            return;

        }


        console.log(
            `CameraSequence: Starting shot ${
                index + 1
            }/${this.shots.length} (${item.type})`
        );


        if (this.onShotStart) {

            this.onShotStart(
                index,
                item.type,
                item.shot
            );

        }


        if (
            item.type === 'cinematic'
        ) {

            this.playCinematicShot(
                item.shot
            );

            return;

        }


        if (
            item.type === 'orbit'
        ) {

            this.playOrbitShot(
                item.shot
            );

        }

    }


    // =====================================================
    // CINEMATIC SHOT
    // =====================================================

    playCinematicShot(shot) {

        if (
            !this.cinematicCamera
        ) {

            console.error(
                'CameraSequence: CinematicCamera unavailable.'
            );

            this.next();

            return;

        }


        if (
            this.orbitShot
        ) {

            this.orbitShot.stop();

        }


        this.cinematicCamera.onSequenceComplete =
            () => {

                this.shotComplete();

            };


        this.cinematicCamera.reset();


        this.cinematicCamera.playSequence([
            shot
        ]);

    }


    // =====================================================
    // ORBIT SHOT
    // =====================================================

    playOrbitShot(shot) {

        if (
            !this.orbitShot
        ) {

            console.error(
                'CameraSequence: OrbitShot unavailable.'
            );

            this.next();

            return;

        }


        if (
            this.cinematicCamera
        ) {

            this.cinematicCamera.stop();

        }


        this.orbitShot.onComplete =
            () => {

                this.shotComplete();

            };


        this.orbitShot.reset();

        this.orbitShot.start();

    }


    // =====================================================
    // GET SHOT START STATE
    // =====================================================

    getShotStartState(item) {

        const shot =
            item.shot;


        // -----------------------------------------------
        // CinematicCamera shot
        // -----------------------------------------------

        if (
            item.type === 'cinematic'
        ) {

            if (
                !shot.positions ||
                shot.positions.length === 0
            ) {

                return null;

            }


            const position =
                shot.positions[0].clone();


            let target =
                new THREE.Vector3();


            if (
                shot.targets &&
                shot.targets.length > 0
            ) {

                target =
                    shot.targets[0].clone();

            }


            const quaternion =
                new THREE.Quaternion();


            this.calculateQuaternion(
                position,
                target,
                quaternion
            );


            let fov =
                this.camera.fov;


            if (
                Array.isArray(shot.fov) &&
                shot.fov.length > 0
            ) {

                fov =
                    shot.fov[0];

            }


            return {

                position,

                quaternion,

                target,

                fov

            };

        }


        // -----------------------------------------------
        // OrbitShot
        // -----------------------------------------------

        if (
            item.type === 'orbit'
        ) {

            /*
             * These names correspond to the orbit
             * configuration used by our OrbitShot.
             */

            const radius =
                shot.radius ??
                shot.startRadius ??
                5;


            const height =
                shot.height ??
                shot.startHeight ??
                2;


            const startAngle =
                shot.startAngle ??
                0;


            const target =
                shot.target
                    ? shot.target.clone()
                    : new THREE.Vector3(
                        0,
                        0,
                        0
                    );


            const position =
                new THREE.Vector3(

                    Math.sin(startAngle) *
                        radius,

                    height,

                    Math.cos(startAngle) *
                        radius

                );


            const quaternion =
                new THREE.Quaternion();


            this.calculateQuaternion(
                position,
                target,
                quaternion
            );


            const fov =
                shot.startFov ??
                this.camera.fov;


            return {

                position,

                quaternion,

                target,

                fov

            };

        }


        return null;

    }


    // =====================================================
    // CURRENT TARGET
    // =====================================================

    getCurrentTarget() {

        const direction =
            new THREE.Vector3(
                0,
                0,
                -1
            );


        direction.applyQuaternion(
            this.camera.quaternion
        );


        return new THREE.Vector3()
            .copy(
                this.camera.position
            )
            .add(
                direction.multiplyScalar(10)
            );

    }


    // =====================================================
    // CALCULATE QUATERNION
    // =====================================================

    calculateQuaternion(
        position,
        target,
        output
    ) {

        const object =
            new THREE.Object3D();


        object.position.copy(
            position
        );


        object.lookAt(
            target
        );


        output.copy(
            object.quaternion
        );

    }


    // =====================================================
    // SHOT COMPLETE
    // =====================================================

    shotComplete() {

        if (
            !this.playing
        ) {

            return;

        }


        const item =
            this.shots[
                this.currentIndex
            ];


        console.log(
            `CameraSequence: Shot ${
                this.currentIndex + 1
            } complete`
        );


        if (this.onShotComplete) {

            this.onShotComplete(
                this.currentIndex,
                item.type,
                item.shot
            );

        }


        this.next();

    }


    // =====================================================
    // NEXT
    // =====================================================

    next() {

        if (
            !this.playing
        ) {

            return;

        }


        this.currentIndex++;


        if (
            this.currentIndex >=
            this.shots.length
        ) {

            this.complete();

            return;

        }


        /*
         * The important part:
         *
         * We don't jump directly into the
         * next shot anymore.
         *
         * CameraTransition first moves
         * the camera into the next shot.
         */

        this.startShotWithTransition(
            this.currentIndex
        );

    }


    // =====================================================
    // PREVIOUS
    // =====================================================

    previous() {

        if (
            this.shots.length === 0
        ) {

            return;

        }


        this.stopCurrentShot();

        this.transition.stop();


        this.currentIndex =
            Math.max(
                this.currentIndex - 1,
                0
            );


        this.playing = true;

        this.paused = false;


        this.startShotWithTransition(
            this.currentIndex
        );

    }


    // =====================================================
    // PAUSE
    // =====================================================

    pause() {

        if (
            !this.playing ||
            this.paused
        ) {

            return;

        }


        this.paused = true;


        this.transitionPaused =
            this.transitioning;


        /*
         * CameraTransition currently doesn't
         * expose pause/resume, so we don't
         * advance it while the sequence is
         * paused.
         */


        if (
            this.cinematicCamera &&
            this.cinematicCamera.pause
        ) {

            this.cinematicCamera.pause();

        }


        if (
            this.orbitShot &&
            this.orbitShot.pause
        ) {

            this.orbitShot.pause();

        }


        if (this.onPause) {

            this.onPause(
                this.currentIndex
            );

        }


        console.log(
            'CameraSequence: Paused'
        );

    }


    // =====================================================
    // RESUME
    // =====================================================

    resume() {

        if (
            !this.playing ||
            !this.paused
        ) {

            return;

        }


        this.paused = false;


        if (
            this.cinematicCamera &&
            this.cinematicCamera.resume
        ) {

            this.cinematicCamera.resume();

        }


        if (
            this.orbitShot &&
            this.orbitShot.resume
        ) {

            this.orbitShot.resume();

        }


        if (this.onResume) {

            this.onResume(
                this.currentIndex
            );

        }


        console.log(
            'CameraSequence: Resumed'
        );

    }


    // =====================================================
    // UPDATE
    // =====================================================

    update(delta) {

        if (
            !this.playing ||
            this.paused
        ) {

            return;

        }


        if (
            this.transitioning
        ) {

            this.transition.update(
                delta
            );

        }

    }


    // =====================================================
    // STOP
    // =====================================================

    stop() {

        const wasPlaying =
            this.playing;


        this.stopCurrentShot();

        this.transition.stop();


        this.transitioning =
            false;

        this.playing =
            false;

        this.paused =
            false;

        this.currentIndex =
            -1;


        if (this.controls) {

            this.controls.enabled =
                true;

        }


        if (
            wasPlaying &&
            this.onStop
        ) {

            this.onStop();

        }


        console.log(
            'CameraSequence: Stopped'
        );

    }


    // =====================================================
    // STOP CURRENT SHOT
    // =====================================================

    stopCurrentShot() {

        if (
            this.cinematicCamera
        ) {

            this.cinematicCamera.stop();

        }


        if (
            this.orbitShot
        ) {

            this.orbitShot.stop();

        }

    }


    // =====================================================
    // COMPLETE
    // =====================================================

    complete() {

        this.stopCurrentShot();

        this.transition.stop();


        this.transitioning =
            false;

        this.playing =
            false;

        this.paused =
            false;


        if (this.controls) {

            this.controls.enabled =
                true;

        }


        console.log(
            'CameraSequence: Sequence complete'
        );


        if (this.onComplete) {

            this.onComplete();

        }

    }


    // =====================================================
    // STATE
    // =====================================================

    isPlaying() {

        return this.playing;

    }


    isPaused() {

        return this.paused;

    }


    isTransitioning() {

        return this.transitioning;

    }


    getCurrentIndex() {

        return this.currentIndex;

    }


    getShotCount() {

        return this.shots.length;

    }


    getProgress() {

        if (
            this.shots.length === 0
        ) {

            return 0;

        }


        return THREE.MathUtils.clamp(

            (
                this.currentIndex + 1
            ) /
            this.shots.length,

            0,

            1

        );

    }

}
