export class CanvasRecorder {

    constructor(
        canvas,
        {
            fps = 60,
            bitrate = 12_000_000,
            filename = 'threejs-recording'
        } = {}
    ) {

        this.canvas = canvas;

        this.fps = fps;

        this.bitrate = bitrate;

        this.filename = filename;


        // MediaRecorder

        this.mediaRecorder = null;

        this.recordedChunks = [];


        // State

        this.recording = false;

        this.startTime = 0;

        this.stream = null;


        // Callbacks

        this.onStart = null;

        this.onStop = null;

        this.onData = null;

    }


    // =================================================
    // FIND SUPPORTED FORMAT
    // =================================================

    getMimeType() {

        const types = [

            'video/webm;codecs=vp9',

            'video/webm;codecs=vp8',

            'video/webm'

        ];


        for (const type of types) {

            if (
                MediaRecorder.isTypeSupported(
                    type
                )
            ) {

                return type;

            }

        }


        return '';

    }


    // =================================================
    // START
    // =================================================

    start() {

        if (this.recording) {

            console.warn(
                'CanvasRecorder: Already recording.'
            );

            return;

        }


        this.recordedChunks = [];


        // Capture the Three.js canvas

        this.stream =
            this.canvas.captureStream(
                this.fps
            );


        const mimeType =
            this.getMimeType();


        console.log(
            'Recording MIME type:',
            mimeType || 'browser default'
        );


        const options = {

            videoBitsPerSecond:
                this.bitrate

        };


        if (mimeType) {

            options.mimeType =
                mimeType;

        }


        this.mediaRecorder =
            new MediaRecorder(
                this.stream,
                options
            );


        // ---------------------------------------------
        // Data
        // ---------------------------------------------

        this.mediaRecorder.ondataavailable =
            event => {

                if (
                    event.data &&
                    event.data.size > 0
                ) {

                    this.recordedChunks.push(
                        event.data
                    );


                    if (this.onData) {

                        this.onData(
                            event.data
                        );

                    }

                }

            };


        // ---------------------------------------------
        // Stop
        // ---------------------------------------------

        this.mediaRecorder.onstop =
            () => {

                this.finishRecording();

            };


        // ---------------------------------------------
        // Start
        // ---------------------------------------------

        this.mediaRecorder.start(
            1000
        );


        this.recording = true;

        this.startTime =
            performance.now();


        console.log(
            'Recording started.'
        );


        if (this.onStart) {

            this.onStart();

        }

    }


    // =================================================
    // STOP
    // =================================================

    stop() {

        if (
            !this.mediaRecorder ||
            this.mediaRecorder.state ===
            'inactive'
        ) {

            console.warn(
                'CanvasRecorder: No active recording.'
            );

            return;

        }


        console.log(
            'Stopping recording...'
        );


        this.mediaRecorder.stop();

    }


    // =================================================
    // FINISH
    // =================================================

    finishRecording() {

        this.recording = false;


        const blob =
            new Blob(
                this.recordedChunks,
                {
                    type:
                        'video/webm'
                }
            );


        console.log(
            'Recording finished.'
        );


        console.log(
            'WebM size:',
            (
                blob.size /
                1024 /
                1024
            ).toFixed(2),
            'MB'
        );


        if (this.onStop) {

            this.onStop(
                blob
            );

        }


        this.download(
            blob
        );


        // Stop the captured stream

        if (this.stream) {

            this.stream
                .getTracks()
                .forEach(
                    track =>
                        track.stop()
                );

        }


        this.stream = null;

        this.mediaRecorder = null;

        this.recordedChunks = [];

    }


    // =================================================
    // DOWNLOAD
    // =================================================

    download(blob) {

        const url =
            URL.createObjectURL(
                blob
            );


        const link =
            document.createElement(
                'a'
            );


        link.href = url;


        link.download =
            `${this.filename}-${Date.now()}.webm`;


        document.body.appendChild(
            link
        );


        link.click();


        link.remove();


        setTimeout(() => {

            URL.revokeObjectURL(
                url
            );

        }, 1000);


        console.log(
            'WebM downloaded.'
        );

    }


    // =================================================
    // IS RECORDING
    // =================================================

    isRecording() {

        return this.recording;

    }


    // =================================================
    // GET ELAPSED TIME
    // =================================================

    getElapsedTime() {

        if (!this.recording) {

            return 0;

        }


        return (
            performance.now() -
            this.startTime
        ) / 1000;

    }

}
