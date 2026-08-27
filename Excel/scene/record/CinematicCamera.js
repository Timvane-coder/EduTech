import * as THREE from 'three';

export class CinematicCamera {

    constructor(camera) {

        this.camera = camera;

        this.playing = false;
        this.paused = false;
        this.finished = false;

        this.elapsed = 0;
        this.duration = 1;

        this.currentShot = null;

        this.sequence = [];
        this.sequenceIndex = 0;

        this.loop = false;

        this.onShotStart = null;
        this.onShotComplete = null;
        this.onSequenceComplete = null;
    }


    // -------------------------------------------------
    // EASING
    // -------------------------------------------------

    static easeLinear(t) {
        return t;
    }


    static easeIn(t) {
        return t * t;
    }


    static easeOut(t) {
        return 1 - Math.pow(1 - t, 2);
    }


    static easeInOut(t) {

        return (
            t < 0.5
                ? 2 * t * t
                : 1 - Math.pow(-2 * t + 2, 2) / 2
        );

    }


    static easeInOutCubic(t) {

        return (
            t < 0.5
                ? 4 * t * t * t
                : 1 - Math.pow(-2 * t + 2, 3) / 2
        );

    }


    // -------------------------------------------------
    // CURVE
    // -------------------------------------------------

    createCurve(points) {

        return new THREE.CatmullRomCurve3(
            points,
            false,
            'centripetal',
            0.5
        );

    }


    // -------------------------------------------------
    // CREATE SHOT
    // -------------------------------------------------

    createShot({

        duration = 5,

        positions = [],

        targets = [],

        easing = 'easeInOutCubic',

        fov = null,

        loop = false

    }) {

        if (positions.length < 2) {

            throw new Error(
                'CinematicCamera: A shot requires at least two camera positions.'
            );

        }


        if (targets.length < 1) {

            throw new Error(
                'CinematicCamera: A shot requires at least one target.'
            );

        }


        const positionCurve =
            this.createCurve(positions);


        let targetCurve = null;


        if (targets.length >= 2) {

            targetCurve =
                this.createCurve(targets);

        }


        return {

            duration,

            positionCurve,

            targetCurve,

            staticTarget:
                targets[0].clone(),

            easing,

            fov,

            loop

        };

    }


    // -------------------------------------------------
    // PLAY SINGLE SHOT
    // -------------------------------------------------

    play(shot) {

        this.currentShot = shot;

        this.elapsed = 0;

        this.duration =
            shot.duration * 1000;

        this.playing = true;

        this.paused = false;

        this.finished = false;


        if (
            shot.fov !== null &&
            !Array.isArray(shot.fov)
        ) {

            this.camera.fov =
                shot.fov;

            this.camera.updateProjectionMatrix();

        }


        if (this.onShotStart) {

            this.onShotStart(
                shot,
                this.sequenceIndex
            );

        }

    }


    // -------------------------------------------------
    // PLAY SEQUENCE
    // -------------------------------------------------

    playSequence(
        shots,
        {
            loop = false
        } = {}
    ) {

        if (
            !shots ||
            shots.length === 0
        ) {

            console.warn(
                'CinematicCamera: Empty sequence.'
            );

            return;

        }


        this.sequence =
            shots;

        this.sequenceIndex = 0;

        this.loop = loop;


        this.play(
            this.sequence[0]
        );

    }


    // -------------------------------------------------
    // PAUSE
    // -------------------------------------------------

    pause() {

        if (!this.playing) return;

        this.paused = true;

    }


    // -------------------------------------------------
    // RESUME
    // -------------------------------------------------

    resume() {

        if (!this.playing) return;

        this.paused = false;

    }


    // -------------------------------------------------
    // STOP
    // -------------------------------------------------

    stop() {

        this.playing = false;

        this.paused = false;

        this.finished = true;

    }


    // -------------------------------------------------
    // UPDATE
    // -------------------------------------------------

    update(delta) {

        if (
            !this.playing ||
            this.paused ||
            !this.currentShot
        ) {

            return;

        }


        this.elapsed +=
            delta * 1000;


        let t =
            this.elapsed /
            this.duration;


        t = THREE.MathUtils.clamp(
            t,
            0,
            1
        );


        const easingFunction =
            this.getEasingFunction(
                this.currentShot.easing
            );


        const easedT =
            easingFunction(t);


        // Camera position

        const position =
            this.currentShot.positionCurve
                .getPointAt(easedT);


        this.camera.position.copy(
            position
        );


        // Camera target

        if (
            this.currentShot.targetCurve
        ) {

            const target =
                this.currentShot.targetCurve
                    .getPointAt(easedT);


            this.camera.lookAt(
                target
            );

        } else {

            this.camera.lookAt(
                this.currentShot.staticTarget
            );

        }


        // FOV animation

        if (
            Array.isArray(
                this.currentShot.fov
            )
        ) {

            const startFov =
                this.currentShot.fov[0];

            const endFov =
                this.currentShot.fov[1];


            this.camera.fov =
                THREE.MathUtils.lerp(
                    startFov,
                    endFov,
                    easedT
                );


            this.camera.updateProjectionMatrix();

        }


        // Shot finished

        if (t >= 1) {

            this.completeShot();

        }

    }


    // -------------------------------------------------
    // COMPLETE SHOT
    // -------------------------------------------------

    completeShot() {

        if (this.onShotComplete) {

            this.onShotComplete(
                this.currentShot,
                this.sequenceIndex
            );

        }


        // Sequence

        if (
            this.sequence.length > 0
        ) {

            this.sequenceIndex++;


            // Entire sequence finished

            if (
                this.sequenceIndex >=
                this.sequence.length
            ) {

                if (this.loop) {

                    this.sequenceIndex = 0;

                    this.play(
                        this.sequence[0]
                    );

                    return;

                }


                this.playing = false;

                this.finished = true;


                if (
                    this.onSequenceComplete
                ) {

                    this.onSequenceComplete();

                }


                return;

            }


            // Next shot

            this.play(
                this.sequence[
                    this.sequenceIndex
                ]
            );


            return;

        }


        // Single shot

        if (
            this.currentShot.loop
        ) {

            this.elapsed = 0;

            return;

        }


        this.playing = false;

        this.finished = true;

    }


    // -------------------------------------------------
    // EASING FUNCTION
    // -------------------------------------------------

    getEasingFunction(name) {

        switch (name) {

            case 'linear':
                return CinematicCamera.easeLinear;

            case 'easeIn':
                return CinematicCamera.easeIn;

            case 'easeOut':
                return CinematicCamera.easeOut;

            case 'easeInOut':
                return CinematicCamera.easeInOut;

            case 'easeInOutCubic':
                return CinematicCamera.easeInOutCubic;

            default:
                return CinematicCamera.easeInOutCubic;

        }

    }


    // -------------------------------------------------
    // INFORMATION
    // -------------------------------------------------

    getProgress() {

        if (!this.currentShot) {

            return 0;

        }


        return THREE.MathUtils.clamp(
            this.elapsed / this.duration,
            0,
            1
        );

    }


    getTime() {

        return this.elapsed / 1000;

    }


    isPlaying() {

        return this.playing;

    }


    isFinished() {

        return this.finished;

    }


    // -------------------------------------------------
    // RESET
    // -------------------------------------------------

    reset() {

        this.elapsed = 0;

        this.sequenceIndex = 0;

        this.playing = false;

        this.paused = false;

        this.finished = false;

        this.currentShot = null;

        this.sequence = [];

    }

}
