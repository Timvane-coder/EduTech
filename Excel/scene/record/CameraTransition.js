import * as THREE from 'three';


export class CameraTransition {

    constructor(camera) {

        this.camera = camera;

        this.active = false;

        this.elapsed = 0;

        this.duration = 1;

        this.type = 'blend';

        this.easing = 'easeInOutCubic';


        // Starting camera state

        this.startPosition =
            new THREE.Vector3();

        this.startQuaternion =
            new THREE.Quaternion();

        this.startTarget =
            new THREE.Vector3();

        this.startFov = 45;


        // Ending camera state

        this.endPosition =
            new THREE.Vector3();

        this.endQuaternion =
            new THREE.Quaternion();

        this.endTarget =
            new THREE.Vector3();

        this.endFov = 45;


        // Temporary values

        this.currentPosition =
            new THREE.Vector3();

        this.currentQuaternion =
            new THREE.Quaternion();

        this.currentTarget =
            new THREE.Vector3();


        // Callback

        this.onComplete = null;

    }


    // =================================================
    // START TRANSITION
    // =================================================

    start({

        from = null,

        to = null,

        duration = 1,

        type = 'blend',

        easing = 'easeInOutCubic',

        onComplete = null

    } = {}) {

        if (!from || !to) {

            console.warn(
                'CameraTransition: from and to states are required.'
            );

            return;

        }


        this.duration =
            Math.max(
                duration,
                0.001
            );


        this.type =
            type;


        this.easing =
            easing;


        this.onComplete =
            onComplete;


        this.elapsed = 0;

        this.active = true;


        // ---------------------------------------------
        // Starting state
        // ---------------------------------------------

        this.startPosition.copy(
            from.position
        );


        if (from.quaternion) {

            this.startQuaternion.copy(
                from.quaternion
            );

        }
        else {

            this.startQuaternion.set(
                0,
                0,
                0,
                1
            );

        }


        if (from.target) {

            this.startTarget.copy(
                from.target
            );

        }


        this.startFov =
            from.fov ??
            this.camera.fov;


        // ---------------------------------------------
        // Ending state
        // ---------------------------------------------

        this.endPosition.copy(
            to.position
        );


        if (to.quaternion) {

            this.endQuaternion.copy(
                to.quaternion
            );

        }
        else if (to.target) {

            this.calculateQuaternion(

                to.position,

                to.target,

                this.endQuaternion

            );

        }
        else {

            this.endQuaternion.copy(
                this.startQuaternion
            );

        }


        if (to.target) {

            this.endTarget.copy(
                to.target
            );

        }
        else {

            this.endTarget.copy(
                this.startTarget
            );

        }


        this.endFov =
            to.fov ??
            this.startFov;


        // Make sure the shortest rotation is used

        if (
            this.startQuaternion.dot(
                this.endQuaternion
            ) < 0
        ) {

            this.endQuaternion.x *= -1;

            this.endQuaternion.y *= -1;

            this.endQuaternion.z *= -1;

            this.endQuaternion.w *= -1;

        }


        console.log(
            `CameraTransition: ${type} started (${duration}s)`
        );

    }


    // =================================================
    // UPDATE
    // =================================================

    update(delta) {

        if (!this.active) {

            return false;

        }


        this.elapsed += delta;


        let progress =
            THREE.MathUtils.clamp(

                this.elapsed /
                this.duration,

                0,

                1

            );


        progress =
            this.applyEasing(
                progress
            );


        // ---------------------------------------------
        // Position
        // ---------------------------------------------

        this.currentPosition.lerpVectors(

            this.startPosition,

            this.endPosition,

            progress

        );


        this.camera.position.copy(
            this.currentPosition
        );


        // ---------------------------------------------
        // Rotation
        // ---------------------------------------------

        this.currentQuaternion.slerpQuaternions(

            this.startQuaternion,

            this.endQuaternion,

            progress

        );


        this.camera.quaternion.copy(
            this.currentQuaternion
        );


        // ---------------------------------------------
        // Target
        // ---------------------------------------------

        this.currentTarget.lerpVectors(

            this.startTarget,

            this.endTarget,

            progress

        );


        // ---------------------------------------------
        // FOV
        // ---------------------------------------------

        this.camera.fov =
            THREE.MathUtils.lerp(

                this.startFov,

                this.endFov,

                progress

            );


        this.camera.updateProjectionMatrix();


        // ---------------------------------------------
        // Complete
        // ---------------------------------------------

        if (
            this.elapsed >=
            this.duration
        ) {

            this.active = false;


            // Ensure exact final state

            this.camera.position.copy(
                this.endPosition
            );


            this.camera.quaternion.copy(
                this.endQuaternion
            );


            this.camera.fov =
                this.endFov;


            this.camera.updateProjectionMatrix();


            console.log(
                'CameraTransition: complete'
            );


            if (
                this.onComplete
            ) {

                this.onComplete();

            }

        }


        return true;

    }


    // =================================================
    // CALCULATE QUATERNION
    // =================================================

    calculateQuaternion(
        position,
        target,
        output
    ) {

        const direction =
            new THREE.Vector3()
                .subVectors(
                    target,
                    position
                )
                .normalize();


        const tempCamera =
            new THREE.Object3D();


        tempCamera.position.copy(
            position
        );


        tempCamera.lookAt(
            target
        );


        output.copy(
            tempCamera.quaternion
        );

    }


    // =================================================
    // EASING
    // =================================================

    applyEasing(t) {

        switch (
            this.easing
        ) {

            case 'linear':

                return t;


            case 'easeIn':

                return t * t;


            case 'easeOut':

                return 1 -
                    Math.pow(
                        1 - t,
                        2
                    );


            case 'easeInOut':

                return (
                    t < 0.5
                        ? 2 * t * t
                        : 1 -
                          Math.pow(
                              -2 * t + 2,
                              2
                          ) / 2
                );


            case 'easeInCubic':

                return t * t * t;


            case 'easeOutCubic':

                return 1 -
                    Math.pow(
                        1 - t,
                        3
                    );


            case 'easeInOutCubic':

                return (
                    t < 0.5
                        ? 4 * t * t * t
                        : 1 -
                          Math.pow(
                              -2 * t + 2,
                              3
                          ) / 2
                );


            case 'easeInOutQuart':

                return (
                    t < 0.5
                        ? 8 * t * t * t * t
                        : 1 -
                          Math.pow(
                              -2 * t + 2,
                              4
                          ) / 2
                );


            default:

                return t;

        }

    }


    // =================================================
    // STOP
    // =================================================

    stop() {

        this.active = false;

        this.elapsed = 0;

    }


    // =================================================
    // RESET
    // =================================================

    reset() {

        this.stop();

        this.elapsed = 0;

        this.onComplete = null;

    }


    // =================================================
    // STATE
    // =================================================

    isActive() {

        return this.active;

    }


    getProgress() {

        if (
            this.duration <= 0
        ) {

            return 1;

        }


        return THREE.MathUtils.clamp(

            this.elapsed /
            this.duration,

            0,

            1

        );

    }

}
