

// ============================================================================
// ATOMIC STRUCTURE GENERATORS (7 generators)
// ============================================================================

generateRelatedAtomicStructureDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bohr Model - Carbon Atom',
        problem: 'Examine the Bohr model for carbon. How many electrons are in the outermost shell?',
        parameters: {
            element: 'Carbon',
            symbol: 'C',
            atomicNumber: 6,
            electrons: 6,
            shells: [2, 4]
        },
        type: 'atomic_structure',
        subparts: [
            'Identify total electrons: 6 (atomic number = 6)',
            'First shell holds maximum 2 electrons',
            'Second shell: 6 - 2 = 4 electrons',
            'Answer: 4 electrons in outermost shell',
            'Carbon has 2 complete shells'
        ],
        helper: 'Electron shell filling: 1st shell = 2, 2nd shell = 8, 3rd shell = 18 (2n²)',
        realWorldContext: 'Understanding carbon bonding capacity',
        diagramInfo: {
            type: 'bohrModel',
            registryKey: 'bohrModelCarbon',
            renderOptions: {
                title: 'Bohr Model - Carbon (C)',
                showLabels: true,
                showElectrons: true,
                showNucleus: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `bohr_model_carbon_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Nuclear Structure - Protons and Neutrons',
        problem: 'Using the nuclear structure diagram, calculate the mass number of Carbon-12.',
        parameters: {
            element: 'Carbon',
            protons: 6,
            neutrons: 6,
            massNumber: 12
        },
        type: 'atomic_structure',
        subparts: [
            'Count protons in nucleus: 6 protons (red)',
            'Count neutrons in nucleus: 6 neutrons (blue)',
            'Mass number = protons + neutrons',
            'Mass number = 6 + 6 = 12',
            'Isotope notation: ¹²C or Carbon-12'
        ],
        helper: 'Mass number (A) = protons (Z) + neutrons (N)',
        realWorldContext: 'Carbon-12 is the standard for atomic mass units',
        diagramInfo: {
            type: 'nuclearStructure',
            registryKey: 'nuclearStructure',
            renderOptions: {
                title: 'Nuclear Structure - Carbon-12',
                showLabels: true,
                showLegend: true,
                protons: 6,
                neutrons: 6
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nuclear_structure_carbon_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Orbital Shapes - Electron Cloud',
        problem: 'Identify the orbital shapes shown in the diagram and explain which holds more electrons.',
        parameters: {
            orbitals: ['s', 'px', 'py', 'pz'],
            maxElectrons: { s: 2, p: 6 }
        },
        type: 'atomic_structure',
        subparts: [
            's orbital: spherical shape, max 2 electrons',
            'p orbitals: dumbbell shape, 3 orientations (px, py, pz)',
            'Each p orbital holds 2 electrons',
            'Total p sublevel: 3 × 2 = 6 electrons',
            'p sublevel holds more electrons than s'
        ],
        helper: 's=2e⁻, p=6e⁻, d=10e⁻, f=14e⁻ maximum electrons',
        realWorldContext: 'Quantum mechanical model of atoms',
        diagramInfo: {
            type: 'orbitalShapes',
            registryKey: 'orbitalShapes',
            renderOptions: {
                title: 'Electron Orbital Shapes',
                show3D: true,
                showAxes: true,
                orbitals: ['s', 'px', 'py', 'pz']
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `orbital_shapes_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Periodic Trends - Atomic Radius',
        problem: 'Using the periodic trends diagram, explain why atomic radius decreases across a period.',
        parameters: {
            trend: 'atomicRadius',
            direction: 'decreases left to right'
        },
        type: 'atomic_structure',
        subparts: [
            'Across period: protons increase, same shell',
            'More protons = stronger nuclear attraction',
            'Electrons pulled closer to nucleus',
            'Result: atomic radius decreases →',
            'Example: Na (186 pm) > Mg (160 pm) > Al (143 pm)'
        ],
        helper: 'Nuclear charge increases → stronger pull → smaller radius',
        realWorldContext: 'Predicting chemical properties from position',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                title: 'Periodic Trends - Atomic Radius',
                showArrows: true,
                showGradient: true,
                trends: ['atomicRadius']
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `periodic_trends_radius_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedQuantumNumbersDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Quantum Numbers - 2p Electron',
        problem: 'Write the set of quantum numbers for an electron in a 2p orbital.',
        parameters: {
            shell: 2,
            subshell: 'p',
            orbital: 'px'
        },
        type: 'quantum_numbers',
        subparts: [
            'n (principal) = 2 (second shell)',
            'l (angular momentum) = 1 (p orbital)',
            'mₗ (magnetic) = -1, 0, or +1',
            'mₛ (spin) = +½ or -½',
            'Valid set: n=2, l=1, mₗ=0, mₛ=+½'
        ],
        helper: 'n: shell; l: 0(s), 1(p), 2(d), 3(f); mₗ: -l to +l; mₛ: ±½',
        realWorldContext: 'Describing electron address in atom',
        diagramInfo: {
            type: 'electronConfiguration',
            registryKey: 'electronConfiguration',
            renderOptions: {
                title: 'Quantum Numbers for 2p Electron',
                showArrows: true,
                showLabels: true,
                highlightOrbital: '2p'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `quantum_numbers_2p_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Principal Quantum Number',
        problem: 'What does the principal quantum number (n) tell us about an electron?',
        parameters: {
            quantumNumber: 'n',
            values: [1, 2, 3, 4]
        },
        type: 'quantum_numbers',
        subparts: [
            'n = energy level (shell number)',
            'n = 1: first shell (closest to nucleus)',
            'n = 2: second shell',
            'Higher n = higher energy, farther from nucleus',
            'n determines shell capacity: 2n² electrons'
        ],
        helper: 'n: 1, 2, 3... (positive integers only)',
        realWorldContext: 'Electron energy levels in atoms',
        diagramInfo: {
            type: 'bohrModel',
            registryKey: 'bohrModelCarbon',
            renderOptions: {
                title: 'Principal Quantum Number (n)',
                showLabels: true,
                highlightShells: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `principal_quantum_number_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Quantum Number Set',
        problem: 'Identify which quantum number set is INVALID: (a) n=3, l=2, mₗ=0, mₛ=+½ (b) n=2, l=2, mₗ=1, mₛ=-½',
        parameters: {
            sets: [
                { n: 3, l: 2, ml: 0, ms: 0.5, valid: true },
                { n: 2, l: 2, ml: 1, ms: -0.5, valid: false }
            ]
        },
        type: 'quantum_numbers',
        subparts: [
            'Check set (a): n=3, l must be 0 to 2 ✓',
            'l=2 (d orbital) is valid for n=3 ✓',
            'mₗ=0 is within -2 to +2 ✓, mₛ=+½ ✓',
            'Check set (b): n=2, l must be 0 to 1',
            'l=2 is INVALID for n=2 ✗ (l < n)',
            'Answer: Set (b) is invalid'
        ],
        helper: 'Rules: l < n; mₗ: -l to +l; mₛ: only ±½',
        realWorldContext: 'Validating electron configurations',
        diagramInfo: {
            type: 'electronConfiguration',
            registryKey: 'electronConfiguration',
            renderOptions: {
                title: 'Valid vs Invalid Quantum Numbers',
                showArrows: true,
                showLabels: true,
                showValidation: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `quantum_numbers_validation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedElectronConfigurationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron Configuration - Iron',
        problem: 'Write the complete electron configuration for Iron (Fe, Z=26) using the diagram.',
        parameters: {
            element: 'Iron',
            symbol: 'Fe',
            atomicNumber: 26,
            configuration: '1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶'
        },
        type: 'electron_configuration',
        subparts: [
            'Follow Aufbau principle: 1s→2s→2p→3s→3p→4s→3d',
            '1s²: 2 electrons (total: 2)',
            '2s² 2p⁶: 8 electrons (total: 10)',
            '3s² 3p⁶: 8 electrons (total: 18)',
            '4s² 3d⁶: 8 electrons (total: 26)',
            'Full notation: 1s² 2s² 2p⁶ 3s² 3p⁶ 4s² 3d⁶'
        ],
        helper: 'Aufbau order: 1s 2s 2p 3s 3p 4s 3d 4p 5s...',
        realWorldContext: 'Iron electron structure determines magnetic properties',
        diagramInfo: {
            type: 'electronConfiguration',
            registryKey: 'electronConfiguration',
            renderOptions: {
                title: 'Electron Configuration - Iron (Fe)',
                showArrows: true,
                showLabels: true,
                element: 'Fe',
                atomicNumber: 26
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `electron_config_iron_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Noble Gas Configuration',
        problem: 'Write the noble gas (shorthand) configuration for Calcium (Ca, Z=20).',
        parameters: {
            element: 'Calcium',
            symbol: 'Ca',
            atomicNumber: 20,
            nobleGas: '[Ar] 4s²'
        },
        type: 'electron_configuration',
        subparts: [
            'Find noble gas before Ca: Argon (Ar, Z=18)',
            'Argon configuration: 1s² 2s² 2p⁶ 3s² 3p⁶',
            'Remaining electrons: 20 - 18 = 2',
            'Add 2 electrons to next orbital: 4s²',
            'Shorthand: [Ar] 4s²'
        ],
        helper: 'Noble gas shorthand saves writing inner electrons',
        realWorldContext: 'Calcium has 2 valence electrons',
        diagramInfo: {
            type: 'electronConfiguration',
            registryKey: 'electronConfiguration',
            renderOptions: {
                title: 'Noble Gas Configuration - Calcium',
                showArrows: true,
                showLabels: true,
                showNobleGasCore: true,
                element: 'Ca',
                atomicNumber: 20
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `noble_gas_config_calcium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ion Configuration',
        problem: 'Write the electron configuration for Fe³⁺ ion. How does it differ from neutral Fe?',
        parameters: {
            element: 'Iron',
            ion: 'Fe³⁺',
            atomicNumber: 26,
            electrons: 23,
            configuration: '1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵'
        },
        type: 'electron_configuration',
        subparts: [
            'Neutral Fe: [Ar] 4s² 3d⁶ (26 electrons)',
            'Fe³⁺: lost 3 electrons (26 - 3 = 23)',
            'Remove from highest energy: 4s² first, then 3d',
            'Remove 4s² (2e⁻) + 3d¹ (1e⁻) = 3e⁻ total',
            'Fe³⁺: [Ar] 3d⁵ or 1s² 2s² 2p⁶ 3s² 3p⁶ 3d⁵'
        ],
        helper: 'Cations: remove electrons from highest n first (4s before 3d)',
        realWorldContext: 'Fe³⁺ is common in rust and biological systems',
        diagramInfo: {
            type: 'electronConfiguration',
            registryKey: 'electronConfiguration',
            renderOptions: {
                title: 'Electron Configuration - Fe³⁺ Ion',
                showArrows: true,
                showLabels: true,
                showIonization: true,
                element: 'Fe',
                ion: 'Fe3+'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `electron_config_fe3_ion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedPeriodicTrendsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ionization Energy Trend',
        problem: 'Using the diagram, explain why ionization energy increases across Period 3 (Na→Ar).',
        parameters: {
            trend: 'ionizationEnergy',
            period: 3,
            elements: ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl', 'Ar']
        },
        type: 'periodic_trends',
        subparts: [
            'Ionization energy = energy to remove an electron',
            'Across period: nuclear charge increases',
            'Electrons in same shell, no extra shielding',
            'Stronger attraction → harder to remove electron',
            'Result: Na (496 kJ/mol) < Ar (1520 kJ/mol)',
            'IE increases left to right →'
        ],
        helper: 'Higher Z_eff (effective nuclear charge) → higher IE',
        realWorldContext: 'Predicting reactivity of elements',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                title: 'Periodic Trends - Ionization Energy',
                showArrows: true,
                showGradient: true,
                trends: ['ionizationEnergy']
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `periodic_trends_ionization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electronegativity Comparison',
        problem: 'Which element is more electronegative: Carbon (C) or Oxygen (O)? Use the diagram.',
        parameters: {
            element1: 'C',
            element2: 'O',
            values: { C: 2.55, O: 3.44 }
        },
        type: 'periodic_trends',
        subparts: [
            'Electronegativity = attraction for bonding electrons',
            'Both in Period 2: C (group 14), O (group 16)',
            'Electronegativity increases left to right',
            'O is farther right than C',
            'Answer: Oxygen (3.44) > Carbon (2.55)',
            'O attracts electrons more strongly'
        ],
        helper: 'EN increases: ← → and ↓ ↑ (except noble gases)',
        realWorldContext: 'Predicting bond polarity',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                title: 'Periodic Trends - Electronegativity',
                showArrows: true,
                showGradient: true,
                trends: ['electronegativity'],
                highlightElements: ['C', 'O']
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `periodic_trends_electronegativity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Trend Analysis',
        problem: 'Rank Li, Na, K in order of: (a) atomic radius (b) ionization energy. Explain using trends.',
        parameters: {
            elements: ['Li', 'Na', 'K'],
            group: 1,
            properties: ['atomicRadius', 'ionizationEnergy']
        },
        type: 'periodic_trends',
        subparts: [
            'All in Group 1 (alkali metals), different periods',
            '(a) Atomic radius DOWN group: shells added',
            'Radius: Li < Na < K (smallest to largest)',
            '(b) Ionization energy DOWN group: decreases',
            'Outer electrons farther, easier to remove',
            'IE: K < Na < Li (lowest to highest)',
            'Inverse relationship between radius and IE'
        ],
        helper: 'Down group: radius ↑, IE ↓, EN ↓',
        realWorldContext: 'Group trends in alkali metal reactivity',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                title: 'Periodic Trends - Group 1 Comparison',
                showArrows: true,
                showGradient: true,
                trends: ['atomicRadius', 'ionizationEnergy'],
                highlightElements: ['Li', 'Na', 'K']
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `periodic_trends_group1_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedBondingDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Water',
        problem: 'Draw the Lewis structure for H₂O. How many lone pairs are on oxygen?',
        parameters: {
            molecule: 'H2O',
            centralAtom: 'O',
            valenceElectrons: 8,
            lonePairs: 2
        },
        type: 'bonding',
        subparts: [
            'Count valence electrons: H(1×2) + O(6) = 8',
            'O is central atom (less electronegative than F)',
            'Form 2 O-H single bonds: uses 4 electrons',
            'Remaining: 8 - 4 = 4 electrons',
            'Place as lone pairs on O: 2 lone pairs',
            'Each H has 2e⁻ (full), O has 8e⁻ (octet)'
        ],
        helper: 'Octet rule: atoms want 8 valence electrons (except H wants 2)',
        realWorldContext: 'Water bent shape due to lone pairs',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - H₂O',
                showLonePairs: true,
                showFormalCharges: false
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `lewis_structure_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Bond Types - NaCl',
        problem: 'What type of bond forms between sodium and chlorine? Explain using electronegativity.',
        parameters: {
            compound: 'NaCl',
            atom1: 'Na',
            atom2: 'Cl',
            bondType: 'ionic',
            enDifference: 2.23
        },
        type: 'bonding',
        subparts: [
            'Na electronegativity: 0.93',
            'Cl electronegativity: 3.16',
            'Difference: 3.16 - 0.93 = 2.23',
            'ΔEN > 1.7 → ionic bond',
            'Na loses 1e⁻ → Na⁺, Cl gains 1e⁻ → Cl⁻',
            'Electrostatic attraction forms ionic bond'
        ],
        helper: 'ΔEN: <0.5 nonpolar, 0.5-1.7 polar covalent, >1.7 ionic',
        realWorldContext: 'Table salt crystal structure',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Ionic Bond - NaCl',
                showDipole: false,
                showIonicTransfer: true,
                molecule: 'NaCl'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ionic_bond_nacl_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resonance Structures - Carbonate',
        problem: 'Draw the resonance structures for carbonate ion (CO₃²⁻). How many are there?',
        parameters: {
            molecule: 'CO3^2-',
            charge: -2,
            resonanceStructures: 3,
            bondOrder: 1.33
        },
        type: 'bonding',
        subparts: [
            'Count valence: C(4) + O(6×3) + 2(charge) = 24e⁻',
            'C is central, 3 O atoms around it',
            'Structure 1: C=O double, 2 C-O single bonds',
            'Structure 2: double bond on different O',
            'Structure 3: double bond on third O',
            'Total: 3 equivalent resonance structures',
            'Actual: hybrid with bond order 1.33'
        ],
        helper: 'Resonance: molecule is average of all structures',
        realWorldContext: 'Carbonate in limestone and shells',
        diagramInfo: {
            type: 'resonance',
            registryKey: 'resonanceStructures',
            renderOptions: {
                title: 'Resonance - Carbonate Ion (CO₃²⁻)',
                showArrows: true,
                showHybrid: true,
                molecule: 'CO3^2-'
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `resonance_carbonate_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedMolecularGeometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR - Methane',
        problem: 'Using VSEPR theory, determine the molecular geometry of CH₄.',
        parameters: {
            molecule: 'CH4',
            centralAtom: 'C',
            electronPairs: 4,
            bondingPairs: 4,
            lonePairs: 0,
            geometry: 'tetrahedral'
        },
        type: 'molecular_geometry',
        subparts: [
            'C has 4 valence electrons',
            '4 H atoms → 4 bonding pairs',
            'No lone pairs on C',
            'Electron geometry: tetrahedral',
            'Molecular geometry: tetrahedral',
            'Bond angle: 109.5°'
        ],
        helper: 'VSEPR: electron pairs repel to maximize distance',
        realWorldContext: 'Natural gas main component',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Tetrahedral (CH₄)',
                show3D: true,
                showBondAngles: true,
                molecule: 'CH4',
                geometry: 'tetrahedral'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `vsepr_methane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Bond Angles',
        problem: 'Why is the H-O-H bond angle in water (104.5°) less than the tetrahedral angle (109.5°)?',
        parameters: {
            molecule: 'H2O',
            electronGeometry: 'tetrahedral',
            molecularGeometry: 'bent',
            bondAngle: 104.5,
            idealAngle: 109.5
        },
        type: 'molecular_geometry',
        subparts: [
            'Water has 4 electron pairs (tetrahedral arrangement)',
            '2 bonding pairs + 2 lone pairs',
            'Lone pairs repel more than bonding pairs',
            'LP-BP repulsion > BP-BP repulsion',
            'Lone pairs compress H-O-H angle',
            'Result: 104.5° instead of 109.5°'
        ],
        helper: 'Repulsion strength: LP-LP > LP-BP > BP-BP',
        realWorldContext: 'Water bent shape causes polarity',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Bent (H₂O)',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                molecule: 'H2O',
                geometry: 'bent'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `vsepr_water_bent_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Geometry - SF₆',
        problem: 'Determine the molecular geometry of SF₆. Does it follow the octet rule?',
        parameters: {
            molecule: 'SF6',
            centralAtom: 'S',
            electronPairs: 6,
            bondingPairs: 6,
            lonePairs: 0,
            geometry: 'octahedral',
            expandedOctet: true
        },
        type: 'molecular_geometry',
        subparts: [
            'S (period 3) can expand octet',
            '6 F atoms → 6 bonding pairs',
            'No lone pairs on S',
            'Electron geometry: octahedral',
            'Molecular geometry: octahedral',
            'Bond angle: 90°',
            'S has 12 electrons (expanded octet)'
        ],
        helper: 'Period 3+ elements can have >8 electrons (d orbitals available)',
        realWorldContext: 'SF₆ used as electrical insulator',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Octahedral (SF₆)',
                show3D: true,
                showBondAngles: true,
                molecule: 'SF6',
                geometry: 'octahedral'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `vsepr_sf6_octahedral_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedHybridizationDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'sp³ Hybridization - Carbon',
        problem: 'Explain the hybridization of carbon in CH₄ using the diagram.',
        parameters: {
            atom: 'C',
            hybridization: 'sp3',
            orbitals: ['2s', '2p'],
            hybridOrbitals: 4,
            geometry: 'tetrahedral'
        },
        type: 'hybridization',
        subparts: [
            'Ground state C: 1s² 2s² 2p²',
            'Mix 1 s + 3 p orbitals → 4 sp³ hybrids',
            'Each sp³ orbital: 25% s, 75% p character',
            '4 equivalent sp³ orbitals',
            'Each forms σ bond with H',
            'Result: tetrahedral geometry, 109.5°'
        ],
        helper: 'sp³: 4 orbitals, tetrahedral; sp²: 3 orbitals, trigonal planar; sp: 2 orbitals, linear',
        realWorldContext: 'Carbon bonding in saturated hydrocarbons',
        diagramInfo: {
            type: 'hybridization',
            registryKey: 'hybridization',
            renderOptions: {
                title: 'sp³ Hybridization - Carbon',
                showOrbitals: true,
                showEnergy: true,
                hybridType: 'sp3',
                atom: 'C'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hybridization_sp3_carbon_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'sp² Hybridization - Ethene',
        problem: 'What is the hybridization of carbon in C₂H₄ (ethene)?',
        parameters: {
            molecule: 'C2H4',
            hybridization: 'sp2',
            bonds: ['3 sigma', '1 pi'],
            geometry: 'trigonal planar'
        },
        type: 'hybridization',
        subparts: [
            'Each C forms: 2 C-H + 1 C=C',
            'Double bond: 1 σ + 1 π',
            'Mix 1 s + 2 p → 3 sp² hybrids',
            '1 unhybridized p orbital remains',
            'sp² forms 3 σ bonds (trigonal planar)',
            'p orbital forms π bond (sideways overlap)'
        ],
        helper: 'Double bond = sp² (1σ + 1π); Triple bond = sp (1σ + 2π)',
        realWorldContext: 'Ethene used to make polyethylene plastic',
        diagramInfo: {
            type: 'hybridization',
            registryKey: 'hybridization',
            renderOptions: {
                title: 'sp² Hybridization - Ethene',
                showOrbitals: true,
                showEnergy: true,
                showPiOrbital: true,
                hybridType: 'sp2',
                atom: 'C'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hybridization_sp2_ethene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'sp Hybridization - Ethyne',
        problem: 'Describe the hybridization and bonding in C₂H₂ (ethyne/acetylene).',
        parameters: {
            molecule: 'C2H2',
            hybridization: 'sp',
            bonds: ['2 sigma', '2 pi'],
            geometry: 'linear'
        },
        type: 'hybridization',
        subparts: [
            'Each C forms: 1 C-H + 1 C≡C',
            'Triple bond: 1 σ + 2 π',
            'Mix 1 s + 1 p → 2 sp hybrids',
            '2 unhybridized p orbitals remain',
            'sp forms 2 σ bonds (linear, 180°)',
            'Two p orbitals form two π bonds',
            'Result: linear molecule'
        ],
        helper: 'Hybridization determines by counting electron groups',
        realWorldContext: 'Acetylene used in welding torches',
        diagramInfo: {
            type: 'hybridization',
            registryKey: 'hybridization',
            renderOptions: {
                title: 'sp Hybridization - Ethyne',
                showOrbitals: true,
                showEnergy: true,
                showPiOrbitals: true,
                hybridType: 'sp',
                atom: 'C'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hybridization_sp_ethyne_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


