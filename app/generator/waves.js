
// ==================== WAVES AND SOUND GENERATORS WITH DIAGRAMS ====================

generateRelatedWavePropertiesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // Original problem without diagram
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Wave Speed Calculation',
        problem: 'Wave has frequency 50 Hz and wavelength 4 m. Find wave speed.',
        parameters: { frequency: 50, wavelength: 4, findSpeed: true },
        type: 'wave_properties',
        subparts: [
            'Wave equation: v = fλ',
            'Identify: f = 50 Hz, λ = 4 m',
            'Calculate: v = 50 × 4 = 200 m/s',
            'Wave speed depends on medium properties'
        ],
        helper: 'formula: v = fλ (wave speed = frequency × wavelength)',
        realWorldContext: 'All wave motion'
    });

    // NEW: Transverse vs Longitudinal waves with diagram
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Comparing Wave Types',
        problem: 'Compare transverse and longitudinal waves. A transverse wave has wavelength 2 m and a longitudinal sound wave has the same wavelength. If both travel at same speed 340 m/s, find their frequencies.',
        parameters: {
            wavelength: 2,
            speed: 340,
            showParticleMotion: true
        },
        type: 'wave_properties',
        subparts: [
            'Transverse: particle motion perpendicular to wave direction',
            'Longitudinal: particle motion parallel to wave direction',
            'For both waves: v = fλ',
            'Frequency: f = v/λ = 340/2 = 170 Hz',
            'Same frequency despite different particle motion'
        ],
        helper: 'Transverse: e.g. light, water waves; Longitudinal: e.g. sound waves',
        realWorldContext: 'Understanding different wave types in nature',
        diagramInfo: {
            type: 'wave_types',
            registryKey: 'transverseLongitudinalWaves',
            renderOptions: {
                wavelength: 100,
                amplitude: 30,
                showParticles: true,
                showLabels: true,
                animate: false
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wave_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveInterferenceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two-Source Wave Interference',
        problem: 'Two coherent sources 10 cm apart produce waves of wavelength 3 cm. Find positions of first three nodes and antinodes.',
        parameters: {
            separation: 100,
            wavelength: 30
        },
        type: 'wave_interference',
        subparts: [
            'Constructive interference (antinodes): path difference = nλ',
            'First antinode: Δd = 0 (center line)',
            'Second antinode: Δd = λ = 3 cm',
            'Third antinode: Δd = 2λ = 6 cm',
            'Destructive interference (nodes): path difference = (n + ½)λ',
            'First node: Δd = λ/2 = 1.5 cm',
            'Second node: Δd = 3λ/2 = 4.5 cm'
        ],
        helper: 'Constructive: Δd = nλ; Destructive: Δd = (n + ½)λ',
        realWorldContext: 'Sound interference, water wave patterns',
        diagramInfo: {
            type: 'wave_interference',
            registryKey: 'waveInterference',
            renderOptions: {
                separation: 100,
                wavelength: 30,
                showSources: true,
                showNodes: true,
                showAntinodes: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wave_interference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedSoundWavesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sound Wave Pressure Variations',
        problem: 'A sound wave with frequency 440 Hz (musical note A) travels through air at 343 m/s. Draw the pressure variation and find wavelength.',
        parameters: {
            frequency: 440,
            speed: 343,
            amplitude: 50
        },
        type: 'sound_waves',
        subparts: [
            'Sound is longitudinal wave with compressions and rarefactions',
            'Wavelength: λ = v/f = 343/440 = 0.78 m',
            'Period: T = 1/f = 1/440 = 0.00227 s = 2.27 ms',
            'Compressions: regions of high pressure',
            'Rarefactions: regions of low pressure'
        ],
        helper: 'Sound speed in air ≈ 343 m/s at 20°C; v = fλ',
        realWorldContext: 'Musical notes, acoustic waves',
        diagramInfo: {
            type: 'sound_pressure',
            registryKey: 'soundWavePressure',
            renderOptions: {
                frequency: 440,
                amplitude: 50,
                showCompressions: true,
                showRarefactions: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_sound_pressure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDopplerEffectDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Doppler Effect Analysis',
        problem: 'A sound source emitting 500 Hz moves toward a stationary observer at 0.1c (speed of sound). Draw wavefront compression and find observed frequency.',
        parameters: {
            sourceFrequency: 500,
            sourceVelocity: 0.5,
            direction: 'right'
        },
        type: 'doppler_effect',
        subparts: [
            'Source moving toward observer: wavefronts compressed',
            'Observed frequency: f\' = f × [v/(v - vₛ)]',
            'Where v = speed of sound, vₛ = source velocity',
            'f\' = 500 × [343/(343 - 34.3)]',
            'f\' = 500 × [343/308.7] = 555.6 Hz',
            'Higher frequency (higher pitch) when approaching'
        ],
        helper: 'Approaching: f\' = f[v/(v-vₛ)]; Receding: f\' = f[v/(v+vₛ)]',
        realWorldContext: 'Ambulance sirens, train whistles',
        diagramInfo: {
            type: 'doppler_effect',
            registryKey: 'dopplerEffect',
            renderOptions: {
                sourceVelocity: 0.5,
                direction: 'right',
                showWavefronts: true,
                showVelocity: true,
                showFrequencyChange: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_doppler_effect_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedStandingWavesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Standing Waves on String',
        problem: 'A 3 m string vibrates in 3rd harmonic. Wave speed is 60 m/s. Draw standing wave pattern and find frequency.',
        parameters: {
            harmonic: 3,
            length: 300,
            amplitude: 40,
            waveSpeed: 60
        },
        type: 'standing_waves',
        subparts: [
            'For string fixed at both ends: L = nλ/2',
            '3rd harmonic: n = 3',
            '3 = 3λ/2 → λ = 2 m',
            'Frequency: f = v/λ = 60/2 = 30 Hz',
            'Number of nodes: n + 1 = 4',
            'Number of antinodes: n = 3'
        ],
        helper: 'String fixed both ends: L = nλ/2, f = nv/(2L)',
        realWorldContext: 'Guitar strings, violin strings',
        diagramInfo: {
            type: 'standing_waves',
            registryKey: 'standingWaves',
            renderOptions: {
                harmonic: 3,
                length: 300,
                amplitude: 40,
                showNodes: true,
                showAntinodes: true,
                animate: false
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_standing_waves_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedResonanceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Wavefront Propagation',
        problem: 'A point source produces circular wavefronts with wavelength 4 cm. Draw the wavefront pattern showing 5 wavefronts.',
        parameters: {
            wavelength: 40,
            numWavefronts: 5
        },
        type: 'resonance',
        subparts: [
            'Wavefronts are surfaces of constant phase',
            'For point source: circular wavefronts',
            'Spacing between wavefronts = wavelength = 4 cm',
            'Wave rays perpendicular to wavefronts',
            'Energy propagates along rays'
        ],
        helper: 'Wavefronts show wave propagation; spacing = wavelength',
        realWorldContext: 'Water ripples, sound propagation',
        diagramInfo: {
            type: 'wavefront',
            registryKey: 'wavefrontDiagram',
            renderOptions: {
                wavelength: 40,
                numWavefronts: 5,
                showSource: true,
                showRays: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wavefront_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection2 = "close";