
// ==================== RELATIVITY GENERATORS WITH DIAGRAMS ====================

generateRelatedTimeDilationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Time Dilation Calculation',
        problem: 'Spacecraft travels at 0.8c. Draw time dilation graph and find time dilation factor. If 10 years pass on Earth, how much time passes on spacecraft?',
        parameters: {
            velocity: 0.8
        },
        type: 'time_dilation',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²)',
            'γ = 1/√(1 - 0.8²) = 1/√(1 - 0.64) = 1/√0.36',
            'γ = 1/0.6 = 1.667',
            'Time dilation: Δt = γΔt₀',
            'If Δt = 10 years (Earth), then Δt₀ = 10/1.667 = 6 years',
            'Only 6 years pass on spacecraft (moving clock runs slower)'
        ],
        helper: 'Time dilation: Δt = γΔt₀, where γ = 1/√(1 - v²/c²)',
        realWorldContext: 'GPS satellites, particle accelerators, twin paradox',
        diagramInfo: {
            type: 'time_dilation',
            registryKey: 'timeDilation',
            renderOptions: {
                showLorentzFactor: true,
                showEquation: true,
                showExample: true
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
                const filename = `physics_time_dilation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedLengthContractionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Length Contraction Analysis',
        problem: 'Spaceship 100 m long (at rest) travels at 0.8c. Draw length contraction diagram and find observed length from Earth.',
        parameters: {
            properLength: 100,
            velocity: 0.8
        },
        type: 'length_contraction',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²) = 1.667 (from previous calculation)',
            'Length contraction: L = L₀/γ',
            'L = 100/1.667 = 60 m',
            'Spaceship appears 60 m long to Earth observer',
            'Contraction occurs only in direction of motion',
            'Perpendicular dimensions unchanged'
        ],
        helper: 'Length contraction: L = L₀/γ = L₀√(1 - v²/c²)',
        realWorldContext: 'High-speed particles, cosmic ray muons reaching Earth',
        diagramInfo: {
            type: 'length_contraction',
            registryKey: 'lengthContraction',
            renderOptions: {
                properLength: 100,
                velocity: 0.8,
                showRestFrame: true,
                showMovingFrame: true,
                showEquation: true
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
                const filename = `physics_length_contraction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRelativisticMomentumDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Spacetime Diagram',
        problem: 'Draw a spacetime diagram showing three events. Event A at (t=0, x=0), Event B at (t=100s, x=50ls), Event C at (t=80s, x=-30ls). Show worldlines.',
        parameters: {
            events: [
                { x: 0, t: 0, label: 'A' },
                { x: 50, t: 100, label: 'B' },
                { x: -30, t: 80, label: 'C' }
            ]
        },
        type: 'relativistic_momentum',
        subparts: [
            'Spacetime diagram: time on vertical axis, space on horizontal',
            'Event A at origin',
            'Event B: 50 light-seconds away, 100 seconds later',
            'Light cone: events within can be causally connected',
            'Worldline: path of object through spacetime',
            'Timelike separation: can be causally connected',
            'Spacelike separation: cannot be causally connected'
        ],
        helper: 'Spacetime diagrams show events in 4D spacetime; Light travels at 45° on diagram',
        realWorldContext: 'Understanding causality and relativity',
        diagramInfo: {
            type: 'spacetime_diagram',
            registryKey: 'spacetimeDiagram',
            renderOptions: {
                events: [
                    { x: 0, t: 0, label: 'A' },
                    { x: 50, t: 100, label: 'B' },
                    { x: -30, t: 80, label: 'C' }
                ],
                showLightCones: true,
                showWorldlines: true,
                showAxes: true
            },
            canvasSize: { width: 800, height: 800 }
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
                const filename = `physics_spacetime_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}


generateRelatedMassEnergyEquivalenceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Mass-Energy Conversion',
        problem: 'Calculate energy released when 0.1 g of matter is completely converted to energy. Compare to TNT explosion (4.6 MJ/kg).',
        parameters: {
            mass: 0.0001,
            c: 3e8
        },
        type: 'mass_energy_equivalence',
        subparts: [
            'Einstein\'s equation: E = mc²',
            'mass: m = 0.1 g = 0.0001 kg',
            'E = 0.0001 × (3×10⁸)²',
            'E = 0.0001 × 9×10¹⁶ = 9×10¹² J = 9 TJ',
            'TNT comparison: 9×10¹² J / (4.6×10⁶ J/kg) = 1,957,000 kg',
            'Equivalent to ~2 million kg of TNT!',
            'Demonstrates enormous energy in small mass'
        ],
        helper: 'E = mc²; 1 kg of matter = 9×10¹⁶ J; c = 3×10⁸ m/s',
        realWorldContext: 'Nuclear reactions, particle-antiparticle annihilation',
        diagramInfo: {
            type: 'mass_energy',
            registryKey: 'massEnergyEquivalence',
            renderOptions: {
                showEquation: true,
                showConversion: true,
                showComparison: true,
                showApplications: true
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
                const filename = `physics_mass_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Binding Energy',
        problem: 'Helium-4 nucleus has mass 4.0015 u. Calculate mass defect and binding energy. (1 u = 931.5 MeV/c²)',
        parameters: {
            protons: 2,
            neutrons: 2,
            nuclearMass: 4.0015,
            protonMass: 1.00728,
            neutronMass: 1.00867
        },
        type: 'mass_energy_equivalence',
        subparts: [
            'Expected mass: 2(1.00728) + 2(1.00867) = 4.0319 u',
            'Actual mass: 4.0015 u',
            'Mass defect: Δm = 4.0319 - 4.0015 = 0.0304 u',
            'Binding energy: BE = Δm × c² = 0.0304 × 931.5 MeV',
            'BE = 28.3 MeV',
            'Binding energy per nucleon: 28.3/4 = 7.08 MeV/nucleon',
            'Mass defect converted to binding energy holds nucleus together'
        ],
        helper: 'BE = Δmc²; Higher BE/nucleon = more stable nucleus',
        realWorldContext: 'Nuclear stability, fusion and fission energy'
    });

    return relatedProblems;
}

generateRelatedLorentzTransformationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Lorentz Transformation Application',
        problem: 'Two events in frame S: Event A at (x=0, t=0) and Event B at (x=300 m, t=1 μs). Frame S\' moves at 0.6c. Find coordinates in S\'.',
        parameters: {
            eventA: { x: 0, t: 0 },
            eventB: { x: 300, t: 1e-6 },
            velocity: 0.6
        },
        type: 'lorentz_transformations',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²) = 1/√(1 - 0.36) = 1.25',
            'Lorentz transformations:',
            'x\' = γ(x - vt), t\' = γ(t - vx/c²)',
            'Event A: x\'ₐ = 0, t\'ₐ = 0 (both frames agree on origin)',
            'Event B: x\'ᵦ = 1.25(300 - 0.6×3×10⁸×10⁻⁶)',
            'x\'ᵦ = 1.25(300 - 180) = 150 m',
            't\'ᵦ = 1.25(10⁻⁶ - 0.6×300/(9×10¹⁶))',
            't\'ᵦ = 1.25(10⁻⁶ - 2×10⁻⁷) = 1.0×10⁻⁶ s'
        ],
        helper: 'Lorentz: x\' = γ(x - vt), t\' = γ(t - vx/c²); Simultaneity is relative',
        realWorldContext: 'Particle physics, relativity experiments',
        diagramInfo: {
            type: 'lorentz_transformation',
            registryKey: 'lorentzTransformationDiagram',
            renderOptions: {
                velocity: 0.6,
                showBothFrames: true,
                showEvents: true,
                showTransformations: true,
                showEquations: true
            },
            canvasSize: { width: 1000, height: 700 }
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
                const filename = `physics_lorentz_transformation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Relativistic Velocity Addition',
        problem: 'Spaceship moves at 0.8c relative to Earth. It fires missile at 0.6c relative to ship. Find missile speed relative to Earth. Draw velocity addition diagram.',
        parameters: {
            shipVelocity: 0.8,
            missileVelocity: 0.6
        },
        type: 'lorentz_transformations',
        subparts: [
            'Relativistic velocity addition: u = (v + u\')/(1 + vu\'/c²)',
            'v = 0.8c (ship), u\' = 0.6c (missile in ship frame)',
            'u = (0.8c + 0.6c)/(1 + 0.8×0.6)',
            'u = 1.4c/(1 + 0.48) = 1.4c/1.48',
            'u = 0.946c',
            'Note: u < c (never exceeds light speed)',
            'Classical: would be 0.8c + 0.6c = 1.4c (wrong!)'
        ],
        helper: 'Relativistic addition: u = (v + u\')/(1 + vu\'/c²); Result always < c',
        realWorldContext: 'Particle accelerators, cosmic ray velocities',
        diagramInfo: {
            type: 'velocity_addition',
            registryKey: 'velocityAddition',
            renderOptions: {
                v1: 0.8,
                v2: 0.6,
                showClassical: true,
                showRelativistic: true,
                showComparison: true
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
                const filename = `physics_velocity_addition_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection7 = "close";