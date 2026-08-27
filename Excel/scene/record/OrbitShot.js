import * as THREE from 'three';


export class OrbitShot {

    constructor(camera) {

        this.camera = camera;

        this.active = false;

        this.elapsed = 0;

        this.duration = 5;

        this.startAngle = 0;

        this.endAngle = Math.PI * 2;

        this.radius = 7;

        this.height = 3;

        this.target = new THREE.Vector3(
            0,
            1,
            0
        );

        this.lookAtTarget = true;

        this.easing = 'easeInOutCubic';

        this.startRadius = null;

        this.endRadius = null;

        this.startHeight = null;

        this.endHeight = null;

        this.startFov = null;

        this.endFov = null;


        this.onStart = null;

        this.onComplete = null;

    }


    // =================================================
    // EASING
    // =================================================

    static linear(t) {

        return t;

    }


    static easeIn(t) {

        return t * t;

    }


    static easeOut(t) {

        return 1 -
            Math.pow(
                1 - t,
                2
            );

    }


    static easeInOut(t) {

        return (
            t < 0.5

                ? 2 * t * t

                : 1 -
                  Math.pow(
                      -2 * t + 2,
                      2
                  ) / 2
        );

    }


    static easeInOutCubic(t) {

        return (
            t < 0.5

                ? 4 * t * t * t

                : 1 -
                  Math.pow(
                      -2 * t + 2,
                      3
                  ) / 2
        );

    }


    getEasingFunction() {

        switch (this.easing) {

            case 'linear':

                return OrbitShot.linear;


            case 'easeIn':

                return OrbitShot.easeIn;


            case 'easeOut':

                return OrbitShot.easeOut;


            case 'easeInOut':

                return OrbitShot.easeInOut;


            case 'easeInOutCubic':

                return OrbitShot.easeInOutCubic;


            default:

                return OrbitShot.easeInOutCubic;

        }

    }


    // =================================================
    // CONFIGURE
    // =================================================

    configure({

        duration = 5,

        radius = 7,

        height = 3,

        target = new THREE.Vector3(
            0,
            1,
            0
        ),

        startAngle = 0,

        endAngle = Math.PI * 2,

        easing = 'easeInOutCubic',

        startRadius = null,

        endRadius = null,

        startHeight = null,

        endHeight = null,

        startFov = null,

        endFov = null,

        lookAtTarget = true

    } = {}) {

        this.duration = duration;

        this.radius = radius;

        this.height = height;

        this.target.copy(
            target
        );

        this.startAngle =
            startAngle;

        this.endAngle =
            endAngle;

        this.easing =
            easing;

        this.startRadius =
            startRadius;

        this.endRadius =
            endRadius;

        this.startHeight =
            startHeight;

        this.endHeight =
            endHeight;

        this.startFov =
            startFov;

        this.endFov =
            endFov;

        this.lookAtTarget =
            lookAtTarget;


        return this;

    }


    // =================================================
    // START
    // =================================================

    start() {

        this.elapsed = 0;

        this.active = true;


        if (this.onStart) {

            this.onStart();

        }

    }


    // =================================================
    // STOP
    // =================================================

    stop() {

        this.active = false;

    }


    // =================================================
    // RESET
    // =================================================

    reset() {

        this.elapsed = 0;

        this.active = false;

    }


    // =================================================
    // UPDATE
    // =================================================

    update(delta) {

        if (!this.active) {

            return;

        }


        this.elapsed += delta;


        let t =
            this.elapsed /
            this.duration;


        t =
            THREE.MathUtils.clamp(
                t,
                0,
                1
            );


        const easingFunction =
            this.getEasingFunction();


        const easedT =
            easingFunction(t);


        // ---------------------------------------------
        // Angle
        // ---------------------------------------------

        const angle =
            THREE.MathUtils.lerp(
                this.startAngle,
                this.endAngle,
                easedT
            );


        // ---------------------------------------------
        // Radius
        // ---------------------------------------------

        let radius =
            this.radius;


        if (
            this.startRadius !== null &&
            this.endRadius !== null
        ) {

            radius =
                THREE.MathUtils.lerp(
                    this.startRadius,
                    this.endRadius,
                    easedT
                );

        }


        // ---------------------------------------------
        // Height
        // ---------------------------------------------

        let height =
            this.height;


        if (
            this.startHeight !== null &&
            this.endHeight !== null
        ) {

            height =
                THREE.MathUtils.lerp(
                    this.startHeight,
                    this.endHeight,
                    easedT
                );

        }


        // ---------------------------------------------
        // Camera position
        // ---------------------------------------------

        this.camera.position.x =
            this.target.x +
            Math.sin(angle) *
            radius;


        this.camera.position.y =
            this.target.y +
            height;


        this.camera.position.z =
            this.target.z +
            Math.cos(angle) *
            radius;


        // ---------------------------------------------
        // Camera target
        // ---------------------------------------------

        if (
            this.lookAtTarget
        ) {

            this.camera.lookAt(
                this.target
            );

        }


        // ---------------------------------------------
        // FOV
        // ---------------------------------------------

        if (
            this.startFov !== null &&
            this.endFov !== null
        ) {

            this.camera.fov =
                THREE.MathUtils.lerp(
                    this.startFov,
                    this.endFov,
                    easedT
                );


            this.camera.updateProjectionMatrix();

        }


        // ---------------------------------------------
        // Complete
        // ---------------------------------------------

        if (t >= 1) {

            this.active = false;


            if (this.onComplete) {

                this.onComplete();

            }

        }

    }


    // =================================================
    // PROGRESS
    // =================================================

    getProgress() {

        return THREE.MathUtils.clamp(

            this.elapsed /
            this.duration,

            0,
            1

        );

    }


    // =================================================
    // ACTIVE
    // =================================================

    isActive() {

        return this.active;

    }

}
