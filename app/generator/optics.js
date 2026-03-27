

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
                const filename = `physics_plane_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_snells_law_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_total_internal_reflection_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_convex_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_concave_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_concave_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_convex_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_prism_dispersion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_optical_fiber_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_polarization_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
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
                const filename = `physics_diffraction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection5 = "close";