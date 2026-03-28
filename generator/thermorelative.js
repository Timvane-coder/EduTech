Here are all the updated generators with async diagram generation:
// ==================== THERMODYNAMICS GENERATORS WITH DIAGRAMS ====================

generateRelatedTemperatureHeatDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Temperature Conversion',
        problem: 'Convert 77°F to Celsius and Kelvin.',
        parameters: { fahrenheit: 77, convertToCelsiusKelvin: true },
        type: 'temperature_heat',
        subparts: [
            'Fahrenheit to Celsius: C = (F - 32) × 5/9',
            'Calculate: C = (77 - 32) × 5/9 = 45 × 5/9 = 25°C',
            'Celsius to Kelvin: K = C + 273.15',
            'K = 25 + 273.15 = 298.15 K',
            'Room temperature is about 25°C or 298 K'
        ],
        helper: 'C = (F-32)×5/9, K = C + 273.15',
        realWorldContext: 'International temperature scales'
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heating Curve Analysis',
        problem: 'Ice at -20°C is heated to steam at 120°C. Draw heating curve and identify phase changes. What happens during plateaus?',
        parameters: {
            substance: 'water',
            initialTemp: -20,
            finalTemp: 120
        },
        type: 'temperature_heat',
        subparts: [
            'Segment 1: Heating ice from -20°C to 0°C',
            'Plateau 1: Melting (ice → water) at 0°C, temperature constant',
            'Segment 2: Heating water from 0°C to 100°C',
            'Plateau 2: Boiling (water → steam) at 100°C, temperature constant',
            'Segment 3: Heating steam from 100°C to 120°C',
            'During plateaus: energy goes into phase change, not temperature increase'
        ],
        helper: 'Phase changes occur at constant temperature; Heat of fusion and vaporization',
        realWorldContext: 'Boiling water, melting ice',
        diagramInfo: {
            type: 'heating_curve_physics',
            registryKey: 'heatingCurvePhysics',
            renderOptions: {
                substance: 'water',
                showPhases: true,
                showPlateaus: true,
                showLabels: true
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
                const filename = `physics_heating_curve_${Date.now()}.png`;
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
},

generateRelatedThermalExpansionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heat Transfer Modes',
        problem: 'Compare the three modes of heat transfer: conduction, convection, and radiation. Give examples of each.',
        parameters: {
            modes: ['conduction', 'convection', 'radiation']
        },
        type: 'thermal_expansion',
        subparts: [
            'Conduction: Heat transfer through direct contact (solid)',
            'Example: Metal spoon in hot coffee',
            'Convection: Heat transfer by fluid motion (liquid/gas)',
            'Example: Boiling water, air circulation',
            'Radiation: Heat transfer by electromagnetic waves (no medium needed)',
            'Example: Sun warming Earth, microwave oven'
        ],
        helper: 'Conduction: Q/t = kAΔT/d; Convection: fluid circulation; Radiation: all objects emit EM waves',
        realWorldContext: 'Cooking, heating systems, solar energy',
        diagramInfo: {
            type: 'heat_transfer',
            registryKey: 'heatTransferModes',
            renderOptions: {
                modes: ['conduction', 'convection', 'radiation'],
                showParticles: true,
                showArrows: true,
                showLabels: true
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
                const filename = `physics_heat_transfer_${Date.now()}.png`;
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
},

generateRelatedCalorimetryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Phase Diagram Analysis',
        problem: 'Examine the phase diagram for water. Identify the triple point, critical point, and explain phase transitions.',
        parameters: {
            substance: 'water'
        },
        type: 'calorimetry',
        subparts: [
            'Triple point: All three phases coexist (0.01°C, 611.657 Pa)',
            'Critical point: Above this, no distinct liquid-gas phase (374°C, 22.064 MPa)',
            'Solid-liquid line: Melting/freezing boundary',
            'Liquid-gas line: Boiling/condensation boundary',
            'Solid-gas line: Sublimation/deposition boundary',
            'Water\'s unusual property: solid-liquid line has negative slope'
        ],
        helper: 'Phase diagrams show P-T relationships and phase boundaries',
        realWorldContext: 'Understanding phase changes, pressure cookers',
        diagramInfo: {
            type: 'phase_diagram_physics',
            registryKey: 'phaseDiagramPhysics',
            renderOptions: {
                substance: 'water',
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseRegions: true
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
                const filename = `physics_phase_diagram_${Date.now()}.png`;
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
},

generateRelatedHeatTransferDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Kinetic Theory of Gases',
        problem: 'Draw gas particles in a container showing random motion. If temperature doubles, how does average kinetic energy change?',
        parameters: {
            numParticles: 50,
            temperature: 300
        },
        type: 'heat_transfer',
        subparts: [
            'Gas particles in random motion, colliding elastically',
            'Average kinetic energy: KE_avg = (3/2)kT',
            'If temperature doubles: T_new = 2T',
            'KE_new = (3/2)k(2T) = 2 × (3/2)kT',
            'Average kinetic energy doubles when temperature doubles',
            'Particle speed increases by factor of √2'
        ],
        helper: 'KE_avg ∝ T; Root-mean-square speed: v_rms = √(3kT/m)',
        realWorldContext: 'Understanding gas behavior, temperature meaning',
        diagramInfo: {
            type: 'kinetic_theory',
            registryKey: 'kineticTheoryParticles',
            renderOptions: {
                numParticles: 50,
                temperature: 300,
                showVelocityVectors: true,
                showCollisions: false,
                animate: false
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
                const filename = `physics_kinetic_theory_${Date.now()}.png`;
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
},

generateRelatedGasLawsPhysicsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'P-V Diagram for Gas Process',
        problem: 'Gas undergoes isothermal expansion from 50 L at 100 kPa to 150 L. Draw P-V diagram and find final pressure.',
        parameters: {
            processType: 'isothermal',
            initialP: 100,
            initialV: 50,
            finalV: 150
        },
        type: 'gas_laws_physics',
        subparts: [
            'Isothermal process: Temperature constant, PV = constant',
            'Initial state: P₁ = 100 kPa, V₁ = 50 L',
            'Final state: V₂ = 150 L, P₂ = ?',
            'Using P₁V₁ = P₂V₂',
            '100 × 50 = P₂ × 150',
            'P₂ = 5000/150 = 33.3 kPa',
            'Curve on P-V diagram is hyperbola'
        ],
        helper: 'Isothermal: PV = const; Isobaric: P = const; Isochoric: V = const',
        realWorldContext: 'Gas processes in engines, thermodynamics',
        diagramInfo: {
            type: 'pv_diagram',
            registryKey: 'pvDiagram',
            renderOptions: {
                processType: 'isothermal',
                initialP: 100,
                initialV: 50,
                finalV: 150,
                showWork: true,
                showCurve: true,
                showLabels: true
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
                const filename = `physics_pv_diagram_${Date.now()}.png`;
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
},

generateRelatedThermodynamicProcessesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Carnot Cycle Analysis',
        problem: 'Carnot engine operates between 500 K hot reservoir and 300 K cold reservoir. Draw the cycle and find efficiency.',
        parameters: {
            Th: 500,
            Tc: 300
        },
        type: 'thermodynamic_processes',
        subparts: [
            'Carnot cycle: Most efficient heat engine',
            '4 stages: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression',
            'Efficiency: η = 1 - (Tc/Th)',
            'η = 1 - (300/500) = 1 - 0.6 = 0.4 = 40%',
            'Maximum possible efficiency between these temperatures',
            'Real engines have lower efficiency'
        ],
        helper: 'Carnot efficiency: η = 1 - (Tc/Th); Uses absolute temperatures (Kelvin)',
        realWorldContext: 'Ideal heat engines, thermodynamic limits',
        diagramInfo: {
            type: 'carnot_cycle',
            registryKey: 'carnotCycle',
            renderOptions: {
                Th: 500,
                Tc: 300,
                showStages: true,
                showEfficiency: true,
                showPVDiagram: true
            },
            canvasSize: { width: 900, height: 700 }
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
                const filename = `physics_carnot_cycle_${Date.now()}.png`;
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
},

generateRelatedHeatEnginesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heat Engine Efficiency',
        problem: 'Heat engine absorbs 1000 J from hot reservoir at 600 K, rejects 600 J to cold reservoir at 300 K. Draw energy flow and find efficiency.',
        parameters: {
            Qh: 1000,
            Qc: 600,
            Th: 600,
            Tc: 300
        },
        type: 'heat_engines',
        subparts: [
            'Heat absorbed: Qₕ = 1000 J',
            'Heat rejected: Qᴄ = 600 J',
            'Work done: W = Qₕ - Qᴄ = 1000 - 600 = 400 J',
            'Actual efficiency: η = W/Qₕ = 400/1000 = 0.40 = 40%',
            'Carnot efficiency: ηᴄ = 1 - Tᴄ/Tₕ = 1 - 300/600 = 0.50 = 50%',
            'Actual < Carnot (real engines have irreversibilities)',
            'Cannot convert all heat to work (2nd law)'
        ],
        helper: 'Efficiency: η = W/Qₕ = 1 - Qᴄ/Qₕ; Max: ηᴄ = 1 - Tᴄ/Tₕ',
        realWorldContext: 'Car engines, power plants, refrigerators',
        diagramInfo: {
            type: 'heat_engine',
            registryKey: 'heatEngineDiagram',
            renderOptions: {
                Qh: 1000,
                Qc: 600,
                Th: 600,
                Tc: 300,
                showWork: true,
                showEfficiency: true,
                showReservoirs: true,
                showEnergyFlow: true
            },
            canvasSize: { width: 900, height: 700 }
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
                const filename = `physics_heat_engine_${Date.now()}.png`;
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
        scenario: 'Refrigerator Coefficient of Performance',
        problem: 'Refrigerator removes 800 J from cold space at 250 K, rejects heat to room at 300 K. If work input is 200 J, find COP. Compare to ideal.',
        parameters: {
            Qc: 800,
            W: 200,
            Tc: 250,
            Th: 300
        },
        type: 'heat_engines',
        subparts: [
            'Heat removed from cold: Qᴄ = 800 J',
            'Work input: W = 200 J',
            'Heat rejected to hot: Qₕ = Qᴄ + W = 800 + 200 = 1000 J',
            'Coefficient of Performance: COP = Qᴄ/W = 800/200 = 4',
            'Ideal COP: COPᴄ = Tᴄ/(Tₕ - Tᴄ) = 250/(300 - 250) = 5',
            'Actual COP < ideal (irreversibilities)',
            'Higher COP = more efficient refrigerator'
        ],
        helper: 'Refrigerator: COP = Qᴄ/W; Ideal: COPᴄ = Tᴄ/(Tₕ - Tᴄ)',
        realWorldContext: 'Refrigerators, air conditioners, heat pumps',
        diagramInfo: {
            type: 'refrigerator',
            registryKey: 'refrigeratorDiagram',
            renderOptions: {
                Qc: 800,
                Qh: 1000,
                W: 200,
                Tc: 250,
                Th: 300,
                showCOP: true,
                showEnergyFlow: true,
                showComparison: true
            },
            canvasSize: { width: 900, height: 700 }
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
                const filename = `physics_refrigerator_${Date.now()}.png`;
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
},

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
                const filename = `physics_time_dilation_${Date.now()}.png`;
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
},

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
                const filename = `physics_length_contraction_${Date.now()}.png`;
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
},

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
                const filename = `physics_spacetime_${Date.now()}.png`;
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
},

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
                const filename = `physics_mass_energy_${Date.now()}.png`;
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
},

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
                const filename = `physics_lorentz_transformation_${Date.now()}.png`;
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
                const filename = `physics_velocity_addition_${Date.now()}.png`;
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

