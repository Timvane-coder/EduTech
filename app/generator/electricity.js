
// ==================== ELECTRICITY AND MAGNETISM GENERATORS WITH DIAGRAMS ====================

generateRelatedElectrostaticsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // Original problem without diagram
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coulomb\'s Law',
        problem: 'Two charges +3 μC and -5 μC separated by 0.2 m. Find force between them. (k = 9×10⁹ N·m²/C²)',
        parameters: { q1: 3e-6, q2: -5e-6, distance: 0.2, k: 9e9, findForce: true },
        type: 'electrostatics',
        subparts: [
            'Coulomb\'s Law: F = k|q₁q₂|/r²',
            'Calculate: F = 9×10⁹ × |3×10⁻⁶ × (-5×10⁻⁶)| / (0.2)²',
            'F = 9×10⁹ × 15×10⁻¹² / 0.04',
            'F = 135×10⁻³ / 0.04 = 3.375 N',
            'Force is attractive (opposite charges)'
        ],
        helper: 'Coulomb\'s Law: F = k|q₁q₂|/r², k = 8.99×10⁹ N·m²/C²',
        realWorldContext: 'Electrostatic forces between charges'
    });

    // NEW: Electric field lines with diagram
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Field Line Pattern',
        problem: 'Draw electric field lines for a +Q and -Q charge separated by distance d. Describe the field pattern.',
        parameters: {
            charges: [
                { x: -100, y: 0, charge: 1, label: '+Q' },
                { x: 100, y: 0, charge: -1, label: '-Q' }
            ]
        },
        type: 'electrostatics',
        subparts: [
            'Field lines start on positive charge, end on negative charge',
            'Lines never cross each other',
            'Density of lines indicates field strength',
            'Strong field between charges',
            'Field pattern shows dipole configuration',
            'Electric field points from + to -'
        ],
        helper: 'Field lines show direction of force on positive test charge',
        realWorldContext: 'Understanding electric fields, dipoles',
        diagramInfo: {
            type: 'electric_field',
            registryKey: 'electricFieldLines',
            renderOptions: {
                charges: [
                    { x: -100, y: 0, charge: 1, label: '+Q' },
                    { x: 100, y: 0, charge: -1, label: '-Q' }
                ],
                showCharges: true,
                showFieldLines: true,
                numLines: 16
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
                const filename = `physics_electric_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricFieldsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential vs Distance',
        problem: 'A point charge Q = 10 μC creates an electric potential. Draw V vs r graph and find potential at r = 2 m.',
        parameters: {
            chargeQ: 10
        },
        type: 'electric_fields',
        subparts: [
            'Electric potential: V = kQ/r',
            'At r = 2 m: V = (9×10⁹)(10×10⁻⁶)/2',
            'V = 90,000/2 = 45,000 V',
            'Potential decreases as 1/r (inverse relationship)',
            'Potential is scalar (no direction)',
            'V → 0 as r → ∞'
        ],
        helper: 'Electric potential: V = kQ/r; Electric field: E = kQ/r²',
        realWorldContext: 'Voltage around charged objects',
        diagramInfo: {
            type: 'potential_distance',
            registryKey: 'potentialDistanceGraph',
            renderOptions: {
                chargeQ: 10,
                showFieldStrength: false,
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
                const filename = `physics_potential_distance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedACCircuitsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'AC Voltage and Current',
        problem: 'Draw AC voltage waveform with Vₘₐₓ = 170 V, f = 60 Hz. Calculate RMS voltage and period.',
        parameters: {
            vMax: 170,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'AC voltage: V(t) = Vₘₐₓ sin(2πft)',
            'Peak voltage: Vₘₐₓ = 170 V',
            'RMS voltage: Vᵣₘₛ = Vₘₐₓ/√2 = 170/1.414 = 120 V',
            'Period: T = 1/f = 1/60 = 0.0167 s = 16.7 ms',
            'Angular frequency: ω = 2πf = 377 rad/s',
            'RMS value is effective DC equivalent'
        ],
        helper: 'AC: Vᵣₘₛ = Vₘₐₓ/√2, Iᵣₘₛ = Iₘₐₓ/√2; Period T = 1/f',
        realWorldContext: 'Household electricity (120V RMS, 60 Hz)',
        diagramInfo: {
            type: 'ac_waveform',
            registryKey: 'acVoltageWaveform',
            renderOptions: {
                vMax: 170,
                frequency: 60,
                showRMS: true,
                showPeriod: true,
                showPhase: true
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
                const filename = `physics_ac_waveform_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'RLC Circuit Impedance',
        problem: 'AC circuit with R=100Ω, L=0.5H, C=10μF at f=60Hz. Draw phasor diagram and find impedance.',
        parameters: {
            resistance: 100,
            inductance: 0.5,
            capacitance: 10e-6,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'Angular frequency: ω = 2πf = 2π(60) = 377 rad/s',
            'Inductive reactance: Xₗ = ωL = 377 × 0.5 = 188.5 Ω',
            'Capacitive reactance: Xᴄ = 1/(ωC) = 1/(377×10×10⁻⁶) = 265 Ω',
            'Net reactance: X = Xₗ - Xᴄ = 188.5 - 265 = -76.5 Ω',
            'Impedance: Z = √(R² + X²) = √(100² + 76.5²) = 126 Ω',
            'Phase angle: φ = tan⁻¹(X/R) = tan⁻¹(-76.5/100) = -37.4°',
            'Current leads voltage (capacitive circuit)'
        ],
        helper: 'Impedance: Z = √(R² + (Xₗ - Xᴄ)²); Xₗ = ωL, Xᴄ = 1/(ωC)',
        realWorldContext: 'AC power systems, filters, resonance',
        diagramInfo: {
            type: 'rlc_circuit',
            registryKey: 'rlcCircuitDiagram',
            renderOptions: {
                resistance: 100,
                inductance: 0.5,
                capacitance: 10e-6,
                frequency: 60,
                showPhasorDiagram: true,
                showImpedance: true,
                showPhase: true
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
                const filename = `physics_rlc_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Resonance in AC Circuits',
        problem: 'LC circuit with L=0.1H, C=100μF. Draw resonance curve and find resonant frequency.',
        parameters: {
            inductance: 0.1,
            capacitance: 100e-6
        },
        type: 'ac_circuits',
        subparts: [
            'Resonance occurs when Xₗ = Xᴄ',
            'At resonance: ωL = 1/(ωC)',
            'ω² = 1/(LC)',
            'ω = 1/√(LC) = 1/√(0.1 × 100×10⁻⁶)',
            'ω = 1/√(10⁻⁵) = 316.2 rad/s',
            'Resonant frequency: f₀ = ω/(2π) = 316.2/(2π) = 50.3 Hz',
            'At resonance: Z = R (minimum), maximum current'
        ],
        helper: 'Resonance: f₀ = 1/(2π√LC); Z minimum, current maximum',
        realWorldContext: 'Radio tuning, filters, oscillators',
        diagramInfo: {
            type: 'resonance_curve',
            registryKey: 'acResonanceCurve',
            renderOptions: {
                inductance: 0.1,
                capacitance: 100e-6,
                showResonantFrequency: true,
                showBandwidth: true,
                showQFactor: true
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
                const filename = `physics_ac_resonance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricPotentialDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Equipotential Lines',
        problem: 'Draw equipotential lines around +Q and -Q charges separated by distance d. Show relationship to electric field.',
        parameters: {
            charges: [
                { q: 1, x: -50, y: 0, label: '+Q' },
                { q: -1, x: 50, y: 0, label: '-Q' }
            ]
        },
        type: 'electric_potential',
        subparts: [
            'Equipotential lines: surfaces of constant potential',
            'Electric field perpendicular to equipotential lines',
            'Lines closer together → stronger field',
            'Potential: V = kQ/r (point charge)',
            'Between charges: potential varies continuously',
            'No work done moving charge along equipotential',
            'Field points from high to low potential'
        ],
        helper: 'Equipotentials: ⊥ to E field; E = -∇V (field = negative gradient of potential)',
        realWorldContext: 'Understanding electric fields and potential energy',
        diagramInfo: {
            type: 'equipotential_lines',
            registryKey: 'equipotentialLinesDiagram',
            renderOptions: {
                charges: [
                    { q: 1, x: -50, y: 0, label: '+Q' },
                    { q: -1, x: 50, y: 0, label: '-Q' }
                ],
                showEquipotentials: true,
                showFieldLines: true,
                showValues: true,
                numEquipotentials: 10
            },
            canvasSize: { width: 900, height: 700 }
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
                const filename = `physics_equipotential_lines_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential Energy',
        problem: 'Two charges +2μC and +3μC are 0.5 m apart. Find potential energy of the system and work to bring them to 0.2 m apart.',
        parameters: {
            q1: 2e-6,
            q2: 3e-6,
            r1: 0.5,
            r2: 0.2,
            k: 9e9
        },
        type: 'electric_potential',
        subparts: [
            'Electric potential energy: U = kq₁q₂/r',
            'Initial: U₁ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.5',
            'U₁ = 54×10⁻³/0.5 = 0.108 J',
            'Final: U₂ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.2',
            'U₂ = 54×10⁻³/0.2 = 0.270 J',
            'Work done: W = ΔU = U₂ - U₁ = 0.270 - 0.108 = 0.162 J',
            'Positive work (both charges positive, repel)'
        ],
        helper: 'Potential energy: U = kq₁q₂/r; Work = ΔU; Same sign → repel (U > 0)',
        realWorldContext: 'Electrostatic energy, ion interactions'
    });

    return relatedProblems;
}


generateRelatedCapacitanceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Capacitor Charging Curve',
        problem: 'A 100 μF capacitor charges through 1 kΩ resistor to 12 V. Draw charging curve and find time to reach 63% of max voltage.',
        parameters: {
            capacitance: 100,
            resistance: 1000,
            voltage: 12,
            curveType: 'charging'
        },
        type: 'capacitance',
        subparts: [
            'Time constant: τ = RC = (1000)(100×10⁻⁶) = 0.1 s',
            'Charging equation: V(t) = V₀(1 - e^(-t/τ))',
            'At t = τ: V(τ) = V₀(1 - e⁻¹) = V₀(0.632) = 63.2% of V₀',
            'Time to reach 63%: t = τ = 0.1 s',
            'After 5τ: capacitor ~99% charged',
            'Exponential approach to final voltage'
        ],
        helper: 'Time constant τ = RC; V(t) = V₀(1 - e^(-t/τ)) for charging',
        realWorldContext: 'Camera flash circuits, timing circuits',
        diagramInfo: {
            type: 'capacitor_curve',
            registryKey: 'capacitorChargeCurve',
            renderOptions: {
                capacitance: 100,
                resistance: 1000,
                voltage: 12,
                curveType: 'charging',
                showTimeConstant: true,
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
                const filename = `physics_capacitor_curve_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCurrentResistanceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Basic Circuit Analysis',
        problem: 'Draw a circuit with 12V battery, 100Ω resistor, 200Ω resistor, 10μF capacitor, and closed switch. Analyze the circuit.',
        parameters: {
            components: [
                { type: 'battery', voltage: 12 },
                { type: 'resistor', resistance: 100 },
                { type: 'capacitor', capacitance: 10 },
                { type: 'switch', state: 'closed' }
            ],
            configuration: 'series'
        },
        type: 'current_resistance',
        subparts: [
            'Total resistance (series): R = 100 + 200 = 300 Ω',
            'Current (Ohm\'s Law): I = V/R = 12/300 = 0.04 A = 40 mA',
            'Voltage across 100Ω: V₁ = IR = 0.04 × 100 = 4 V',
            'Voltage across 200Ω: V₂ = IR = 0.04 × 200 = 8 V',
            'Total voltage: 4 + 8 = 12 V (check)',
            'Capacitor will charge to 12 V'
        ],
        helper: 'Ohm\'s Law: V = IR; Series: same current, voltages add',
        realWorldContext: 'Basic electrical circuits',
        diagramInfo: {
            type: 'circuit_diagram',
            registryKey: 'circuitDiagram',
            renderOptions: {
                components: [
                    { type: 'battery', voltage: 12 },
                    { type: 'resistor', resistance: 100 },
                    { type: 'capacitor', capacitance: 10 },
                    { type: 'switch', state: 'closed' }
                ],
                configuration: 'series',
                showValues: true,
                showCurrent: true,
                showSymbols: true
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
                const filename = `physics_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDCCircuitsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Series vs Parallel Circuit Comparison',
        problem: 'Compare circuits with three resistors (100Ω, 200Ω, 150Ω) connected to 12V battery in series vs parallel configurations.',
        parameters: {
            voltage: 12,
            resistors: [100, 200, 150],
            compareCircuits: true
        },
        type: 'dc_circuits',
        subparts: [
            'Series: R_total = 100 + 200 + 150 = 450 Ω',
            'Series current: I = 12/450 = 0.027 A (same through all)',
            'Parallel: 1/R_total = 1/100 + 1/200 + 1/150 = 0.0233',
            'R_total = 42.9 Ω',
            'Parallel current: I = 12/42.9 = 0.28 A',
            'Parallel has lower resistance, higher current'
        ],
        helper: 'Series: R_total = ΣR, same I; Parallel: 1/R_total = Σ(1/R), same V',
        realWorldContext: 'Household circuits, Christmas lights',
        diagramInfo: {
            type: 'series_parallel',
            registryKey: 'seriesParallelCircuits',
            renderOptions: {
                voltage: 12,
                resistors: [100, 200, 150],
                showBoth: true,
                showCalculations: true,
                showCurrent: true
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
                const filename = `physics_series_parallel_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMagneticFieldsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Magnetic Field Lines of Bar Magnet',
        problem: 'Draw the magnetic field line pattern around a bar magnet. Explain the field direction and where field is strongest.',
        parameters: {
            sourceType: 'bar_magnet'
        },
        type: 'magnetic_fields',
        subparts: [
            'Field lines emerge from North pole',
            'Field lines enter South pole',
            'Lines form closed loops',
            'Never cross each other',
            'Strongest field near poles (lines closest together)',
            'Field direction: North to South outside magnet'
        ],
        helper: 'Magnetic field lines show direction of force on North pole',
        realWorldContext: 'Permanent magnets, compass behavior',
        diagramInfo: {
            type: 'magnetic_field',
            registryKey: 'magneticFieldLines',
            renderOptions: {
                sourceType: 'bar_magnet',
                showPoles: true,
                showFieldLines: true,
                showCompass: true
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
                const filename = `physics_magnetic_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Lorentz Force on Moving Charge',
        problem: 'An electron (q = -e) moves at 50 m/s eastward through a magnetic field of 1 T pointing into the page. Find force magnitude and direction.',
        parameters: {
            charge: -1,
            velocity: { x: 50, y: 0 },
            magneticField: { direction: 'into_page', magnitude: 1 }
        },
        type: 'magnetic_fields',
        subparts: [
            'Lorentz force: F = qvB sin(θ)',
            'Angle between v and B: θ = 90° (perpendicular)',
            'F = (1.6×10⁻¹⁹)(50)(1) sin(90°)',
            'F = 8×10⁻¹⁸ N',
            'Direction: Use right-hand rule (for positive charge)',
            'For electron (negative): force is southward (opposite)',
            'Force perpendicular to both v and B'
        ],
        helper: 'Lorentz force: F = qvB sin(θ); Use right-hand rule for direction',
        realWorldContext: 'Particle accelerators, mass spectrometers',
        diagramInfo: {
            type: 'lorentz_force',
            registryKey: 'lorentzForce',
            renderOptions: {
                velocity: { x: 50, y: 0 },
                magneticField: { direction: 'into_page', magnitude: 1 },
                charge: 1,
                showVelocity: true,
                showField: true,
                showForce: true,
                showRightHandRule: true
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
                const filename = `physics_lorentz_force_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedEMInductionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electromagnetic Induction',
        problem: 'A magnet moves toward a 5-turn coil. Draw the setup and explain how current is induced. What determines current direction?',
        parameters: {
            coilTurns: 5,
            magnetMoving: true
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Moving magnet changes magnetic flux through coil',
            'Faraday\'s Law: ε = -N(ΔΦ/Δt)',
            'Changing flux induces EMF',
            'Induced current creates its own magnetic field',
            'Lenz\'s Law: Induced current opposes the change',
            'If magnet approaches: induced field repels magnet',
            'Current direction: use right-hand rule'
        ],
        helper: 'Faraday: ε = -N(ΔΦ/Δt); Lenz: induced effect opposes cause',
        realWorldContext: 'Generators, transformers, induction cooktops',
        diagramInfo: {
            type: 'em_induction',
            registryKey: 'electromagneticInduction',
            renderOptions: {
                coilTurns: 5,
                magnetMoving: true,
                showMagnet: true,
                showCoil: true,
                showCurrent: true,
                showFlux: true
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
                const filename = `physics_em_induction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Transformer Operation',
        problem: 'A transformer has 100 turns on primary and 500 turns on secondary. Input voltage is 120 V. Draw transformer and find output voltage.',
        parameters: {
            primaryTurns: 100,
            secondaryTurns: 500,
            inputVoltage: 120
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Transformer ratio: Vₛ/Vₚ = Nₛ/Nₚ',
            'Vₛ/120 = 500/100',
            'Vₛ = 120 × 5 = 600 V',
            'Step-up transformer (increases voltage)',
            'Power conservation: VₚIₚ = VₛIₛ (ideal)',
            'Current decreases as voltage increases'
        ],
        helper: 'Transformer: Vₛ/Vₚ = Nₛ/Nₚ; Iₛ/Iₚ = Nₚ/Nₛ',
        realWorldContext: 'Power distribution, voltage conversion',
        diagramInfo: {
            type: 'transformer',
            registryKey: 'transformer',
            renderOptions: {
                primaryTurns: 100,
                secondaryTurns: 500,
                inputVoltage: 120,
                showCore: true,
                showTurns: true,
                showVoltages: true
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
                const filename = `physics_transformer_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection4 = "close";