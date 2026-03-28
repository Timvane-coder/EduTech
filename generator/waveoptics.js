Here are all the updated generators with async diagram generation:
// ==================== WAVES AND SOUND GENERATORS WITH DIAGRAMS ====================

generateRelatedWavePropertiesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_wave_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_wave_interference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_sound_pressure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_doppler_effect_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_standing_waves_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_wavefront_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

// ==================== OPTICS GENERATORS WITH DIAGRAMS ====================

generateRelatedReflectionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Plane Mirror Image Formation',
        problem: 'Object 10 cm tall is placed 15 cm in front of plane mirror. Draw ray diagram and describe image characteristics.',
        parameters: {
            mirrorType: 'plane',
            objectDistance: 100,
            objectHeight: 50
        },
        type: 'reflection',
        subparts: [
            'Plane mirror produces virtual image',
            'Image distance = Object distance (15 cm behind mirror)',
            'Image height = Object height (10 cm)',
            'Image is upright (not inverted)',
            'Magnification: m = 1 (same size)',
            'Image appears to be behind mirror (virtual)'
        ],
        helper: 'Plane mirror: d_image = d_object, m = 1, virtual, upright',
        realWorldContext: 'Bathroom mirrors, reflection',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'planeMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'plane',
                objectDistance: 100,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showNormals: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_plane_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRefractionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Snell\'s Law Application',
        problem: 'Light travels from air (n=1.0) into glass (n=1.5) at 30° incident angle. Draw refraction and find refracted angle.',
        parameters: {
            n1: 1.0,
            n2: 1.5,
            incidentAngle: 30
        },
        type: 'refraction',
        subparts: [
            'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
            '1.0 × sin(30°) = 1.5 × sin(θ₂)',
            '0.5 = 1.5 × sin(θ₂)',
            'sin(θ₂) = 0.5/1.5 = 0.333',
            'θ₂ = sin⁻¹(0.333) = 19.5°',
            'Light bends toward normal (entering denser medium)'
        ],
        helper: 'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂); Toward normal if n₂ > n₁',
        realWorldContext: 'Light bending in water, lenses',
        diagramInfo: {
            type: 'snells_law',
            registryKey: 'snellsLawRefraction',
            renderOptions: {
                n1: 1.0,
                n2: 1.5,
                incidentAngle: 30,
                showAngles: true,
                showNormals: true,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_snells_law_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Total Internal Reflection',
        problem: 'Light travels from glass (n=1.5) to air (n=1.0). Draw the critical angle and explain total internal reflection.',
        parameters: {
            n1: 1.5,
            n2: 1.0,
            angle: 50
        },
        type: 'refraction',
        subparts: [
            'Critical angle: sin(θc) = n₂/n₁',
            'sin(θc) = 1.0/1.5 = 0.667',
            'θc = sin⁻¹(0.667) = 41.8°',
            'If θ > θc: Total internal reflection occurs',
            'No refracted ray, all light reflects back',
            'Used in optical fibers'
        ],
        helper: 'TIR occurs when: θ > θc and n₁ > n₂; θc = sin⁻¹(n₂/n₁)',
        realWorldContext: 'Fiber optics, prisms, diamonds',
        diagramInfo: {
            type: 'total_internal_reflection',
            registryKey: 'totalInternalReflection',
            renderOptions: {
                n1: 1.5,
                n2: 1.0,
                angle: 50,
                showCriticalAngle: true,
                showMultipleAngles: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_total_internal_reflection_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedLensesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Convex Lens Image Formation',
        problem: 'Object 5 cm tall placed 15 cm from convex lens (f = 10 cm). Draw ray diagram and find image position and size.',
        parameters: {
            lensType: 'convex',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'lenses',
        subparts: [
            'Lens equation: 1/f = 1/d_o + 1/d_i',
            '1/10 = 1/15 + 1/d_i',
            '1/d_i = 1/10 - 1/15 = 3/30 - 2/30 = 1/30',
            'd_i = 30 cm (real image, opposite side)',
            'Magnification: m = -d_i/d_o = -30/15 = -2',
            'Image height: h_i = m × h_o = -2 × 5 = -10 cm (inverted, magnified)'
        ],
        helper: 'Lens equation: 1/f = 1/d_o + 1/d_i; m = -d_i/d_o = h_i/h_o',
        realWorldContext: 'Cameras, projectors, magnifying glasses',
        diagramInfo: {
            type: 'lens_ray_diagram',
            registryKey: 'convexLensRayDiagram',
            renderOptions: {
                lensType: 'convex',
                focalLength: 100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_convex_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Concave Lens Image Formation',
        problem: 'Object 5 cm tall placed 15 cm from concave lens (f = -10 cm). Draw ray diagram and describe image.',
        parameters: {
            lensType: 'concave',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'lenses',
        subparts: [
            'Lens equation: 1/f = 1/d_o + 1/d_i',
            '1/(-10) = 1/15 + 1/d_i',
            '1/d_i = -1/10 - 1/15 = -3/30 - 2/30 = -5/30',
            'd_i = -6 cm (virtual image, same side as object)',
            'Magnification: m = -d_i/d_o = -(-6)/15 = 0.4',
            'Image: virtual, upright, smaller (4 cm × 0.4 = 2 cm tall)'
        ],
        helper: 'Concave lens: always produces virtual, upright, diminished image',
        realWorldContext: 'Correcting nearsightedness, peepholes',
        diagramInfo: {
            type: 'lens_ray_diagram',
            registryKey: 'concaveLensRayDiagram',
            renderOptions: {
                lensType: 'concave',
                focalLength: -100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_concave_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMirrorsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Concave Mirror Image Formation',
        problem: 'Object 5 cm tall at 15 cm from concave mirror (f = 10 cm). Draw ray diagram and locate image.',
        parameters: {
            mirrorType: 'concave',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'mirrors',
        subparts: [
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            '1/10 = 1/15 + 1/d_i',
            '1/d_i = 1/10 - 1/15 = 1/30',
            'd_i = 30 cm (real image, in front of mirror)',
            'Magnification: m = -d_i/d_o = -30/15 = -2',
            'Image: real, inverted, magnified (10 cm tall)'
        ],
        helper: 'Concave mirror can form real or virtual images depending on object position',
        realWorldContext: 'Telescopes, makeup mirrors, shaving mirrors',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'concaveMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'concave',
                focalLength: 100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                showCenter: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_concave_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Convex Mirror Image Formation',
        problem: 'Object 5 cm tall at 15 cm from convex mirror (f = -10 cm). Draw ray diagram and describe image.',
        parameters: {
            mirrorType: 'convex',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'mirrors',
        subparts: [
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            '1/(-10) = 1/15 + 1/d_i',
            '1/d_i = -1/10 - 1/15 = -5/30',
            'd_i = -6 cm (virtual image, behind mirror)',
            'Magnification: m = -d_i/d_o = 6/15 = 0.4',
            'Image: virtual, upright, smaller (2 cm tall)'
        ],
        helper: 'Convex mirror always produces virtual, upright, diminished image',
        realWorldContext: 'Car side mirrors, security mirrors',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'convexMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'convex',
                focalLength: -100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_convex_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedOpticalInstrumentsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Prism Dispersion',
        problem: 'White light passes through a 60° prism. Draw the dispersion pattern and explain why colors separate.',
        parameters: {
            prismAngle: 60
        },
        type: 'optical_instruments',
        subparts: [
            'White light contains all visible wavelengths',
            'Different wavelengths refract by different amounts',
            'Refractive index varies with wavelength (dispersion)',
            'Violet light: highest n, bends most',
            'Red light: lowest n, bends least',
            'Result: spectrum from red to violet'
        ],
        helper: 'Dispersion: n varies with λ; Short λ (violet) bends more than long λ (red)',
        realWorldContext: 'Rainbows, spectroscopy',
        diagramInfo: {
            type: 'prism_dispersion',
            registryKey: 'prismDispersion',
            renderOptions: {
                prismAngle: 60,
                showSpectrum: true,
                showAngles: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_prism_dispersion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Optical Fiber Total Internal Reflection',
        problem: 'Draw light propagation through a 30 cm optical fiber showing multiple total internal reflections.',
        parameters: {
            fiberLength: 300,
            numReflections: 5
        },
        type: 'optical_instruments',
        subparts: [
            'Fiber has high refractive index core',
            'Low refractive index cladding',
            'Light enters at shallow angle',
            'Repeatedly reflects at core-cladding boundary',
            'Total internal reflection keeps light inside',
            'Allows long-distance light transmission'
        ],
        helper: 'Optical fibers use TIR; n_core > n_cladding',
        realWorldContext: 'Internet fiber optics, medical endoscopes',
        diagramInfo: {
            type: 'optical_fiber',
            registryKey: 'opticalFiber',
            renderOptions: {
                fiberLength: 300,
                numReflections: 5,
                showCore: true,
                showCladding: true,
                showReflections: true
            },
            canvasSize: { width: 900, height: 400 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_optical_fiber_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveOpticsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Light Polarization',
        problem: 'Unpolarized light passes through a polarizer. Draw the setup and explain how intensity changes.',
        parameters: {
            polarizationType: 'linear'
        },
        type: 'wave_optics',
        subparts: [
            'Unpolarized light: electric field vibrates in all directions',
            'Polarizer allows only one orientation to pass',
            'Intensity after polarizer: I = I₀/2',
            'Light is now linearly polarized',
            'Second polarizer at angle θ: I = I₀ cos²(θ) (Malus\'s Law)',
            'Crossed polarizers (90°): no light passes'
        ],
        helper: 'Malus\'s Law: I = I₀ cos²(θ); Polarization proves light is transverse wave',
        realWorldContext: 'Sunglasses, LCD screens, photography filters',
        diagramInfo: {
            type: 'polarization',
            registryKey: 'polarizationDiagram',
            renderOptions: {
                polarizationType: 'linear',
                showUnpolarized: true,
                showPolarizer: true,
                showPolarized: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_polarization_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDiffractionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Double Slit Interference Pattern',
        problem: 'Light (λ = 600 nm) passes through double slit with separation 0.5 mm. Screen is 1 m away. Draw interference pattern and find fringe spacing.',
        parameters: {
            slitType: 'double',
            slitSeparation: 0.5,
            wavelength: 600,
            screenDistance: 1000
        },
        type: 'diffraction',
        subparts: [
            'Double slit creates interference pattern',
            'Bright fringes: d sin(θ) = mλ (m = 0, 1, 2...)',
            'For small angles: sin(θ) ≈ tan(θ) = y/L',
            'Fringe spacing: Δy = λL/d',
            'Δy = (600×10⁻⁹)(1)/(0.5×10⁻³)',
            'Δy = 1.2×10⁻³ m = 1.2 mm'
        ],
        helper: 'Double slit: Bright at d sin(θ) = mλ; Dark at d sin(θ) = (m+½)λ',
        realWorldContext: 'Wave nature of light, diffraction gratings',
        diagramInfo: {
            type: 'diffraction',
            registryKey: 'diffractionPattern',
            renderOptions: {
                slitType: 'double',
                slitWidth: 20,
                slitSeparation: 80,
                wavelength: 10,
                showIntensity: true,
                showPattern: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_diffraction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}


