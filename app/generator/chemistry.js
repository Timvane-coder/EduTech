

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


// ============================================================================
// CHEMICAL BONDING GENERATORS (4 generators)
// ============================================================================

generateRelatedLewisStructuresDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Ammonia',
        problem: 'Draw the Lewis structure for NH₃. How many bonding and lone pairs does nitrogen have?',
        parameters: {
            molecule: 'NH3',
            centralAtom: 'N',
            valenceElectrons: 8,
            bondingPairs: 3,
            lonePairs: 1
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence electrons: N(5) + H(1×3) = 8',
            'N is central atom',
            'Form 3 N-H single bonds: uses 6 electrons',
            'Remaining: 8 - 6 = 2 electrons',
            'Place as lone pair on N: 1 lone pair',
            'Answer: 3 bonding pairs, 1 lone pair',
            'N has complete octet (8e⁻)'
        ],
        helper: 'Steps: 1) Count valence e⁻, 2) Draw skeleton, 3) Distribute e⁻, 4) Check octets',
        realWorldContext: 'Ammonia structure affects its basicity',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - NH₃',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'NH3'
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
            const filename = `lewis_structure_ammonia_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Lewis Structure - Simple Molecule',
        problem: 'Draw the Lewis structure for Cl₂. What type of bond is present?',
        parameters: {
            molecule: 'Cl2',
            valenceElectrons: 14,
            bondType: 'single covalent',
            lonePairsPerAtom: 3
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: Cl(7) + Cl(7) = 14 electrons',
            'Each Cl needs 8 electrons (octet)',
            'Share 2 electrons: Cl-Cl single bond',
            'Remaining: 14 - 2 = 12 electrons',
            'Distribute as lone pairs: 3 on each Cl',
            'Bond type: single covalent bond',
            'Each Cl: 2(bond) + 6(lone) = 8e⁻ ✓'
        ],
        helper: 'Diatomic molecules: share electrons to complete octets',
        realWorldContext: 'Chlorine gas molecule',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - Cl₂',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'Cl2'
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
            const filename = `lewis_structure_cl2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lewis Structure - CO₂',
        problem: 'Draw the Lewis structure for CO₂. Explain why carbon forms double bonds with oxygen.',
        parameters: {
            molecule: 'CO2',
            centralAtom: 'C',
            valenceElectrons: 16,
            bondType: 'double bonds',
            geometry: 'linear'
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: C(4) + O(6×2) = 16 electrons',
            'C is central (less electronegative)',
            'Try single bonds: O-C-O uses 4 electrons',
            'Distribute remaining 12: fills O octets',
            'C only has 4 electrons (incomplete octet)',
            'Form double bonds: O=C=O',
            'Now all atoms have octets',
            'Structure: O=C=O (linear)'
        ],
        helper: 'If central atom lacks octet, try multiple bonds',
        realWorldContext: 'CO₂ linear structure makes it nonpolar',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - CO₂',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'CO2',
                showMultipleBonds: true
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `lewis_structure_co2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Formal Charge Calculation',
        problem: 'For CO₂, calculate the formal charge on each atom. Is the structure stable?',
        parameters: {
            molecule: 'CO2',
            formalCharges: { C: 0, O1: 0, O2: 0 },
            stable: true
        },
        type: 'lewis_structures',
        subparts: [
            'Formal charge = V - (L + ½B)',
            'V=valence, L=lone pairs, B=bonding electrons',
            'Carbon: FC = 4 - (0 + ½×8) = 4 - 4 = 0',
            'Each Oxygen: FC = 6 - (4 + ½×4) = 6 - 6 = 0',
            'All formal charges = 0',
            'Result: stable structure ✓',
            'Best structure has FC closest to zero'
        ],
        helper: 'FC = valence e⁻ - lone e⁻ - ½(bonding e⁻)',
        realWorldContext: 'Formal charges predict most stable resonance form',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - CO₂ with Formal Charges',
                showLonePairs: true,
                showFormalCharges: true,
                molecule: 'CO2'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `lewis_structure_formal_charge_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Polyatomic Ion',
        problem: 'Draw the Lewis structure for NH₄⁺ (ammonium ion). Where is the positive charge?',
        parameters: {
            molecule: 'NH4+',
            centralAtom: 'N',
            valenceElectrons: 8,
            charge: 1,
            coordinateBond: true
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: N(5) + H(1×4) - 1(charge) = 8',
            'N is central, 4 H atoms around it',
            'Form 4 N-H single bonds: uses 8 electrons',
            'All electrons used, no lone pairs',
            'N has 8 electrons (4 bonds × 2)',
            'Positive charge is on entire ion',
            'One bond is coordinate (N donated both e⁻)'
        ],
        helper: 'For cations: subtract charge from valence electrons',
        realWorldContext: 'Ammonium ion in fertilizers',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - NH₄⁺',
                showLonePairs: false,
                showFormalCharges: true,
                molecule: 'NH4+',
                showCharge: true
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
            const filename = `lewis_structure_ammonium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}



generateRelatedVSEPRDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR - Ammonia Geometry',
        problem: 'Using VSEPR theory, predict the molecular geometry of NH₃.',
        parameters: {
            molecule: 'NH3',
            centralAtom: 'N',
            electronPairs: 4,
            bondingPairs: 3,
            lonePairs: 1,
            electronGeometry: 'tetrahedral',
            molecularGeometry: 'trigonal pyramidal'
        },
        type: 'vsepr_theory',
        subparts: [
            'Count electron pairs on N: 3 bonds + 1 lone = 4',
            'Electron geometry: tetrahedral (4 pairs)',
            'Molecular geometry: ignore lone pairs',
            'With 1 lone pair: trigonal pyramidal',
            'Bond angle: ~107° (less than 109.5°)',
            'Lone pair pushes bonds closer together'
        ],
        helper: 'Molecular shape = electron geometry minus lone pairs',
        realWorldContext: 'NH₃ pyramidal shape makes it polar',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Trigonal Pyramidal (NH₃)',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                molecule: 'NH3',
                geometry: 'trigonal_pyramidal'
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
            const filename = `vsepr_ammonia_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'VSEPR - Linear Molecule',
        problem: 'Why is CO₂ linear? Use VSEPR theory to explain.',
        parameters: {
            molecule: 'CO2',
            centralAtom: 'C',
            electronPairs: 2,
            bondingPairs: 2,
            lonePairs: 0,
            geometry: 'linear',
            bondAngle: 180
        },
        type: 'vsepr_theory',
        subparts: [
            'Carbon has 2 double bonds (2 electron groups)',
            'Double bond counts as 1 electron group',
            'Total: 2 electron groups',
            'No lone pairs on C',
            'Electron geometry: linear',
            'Molecular geometry: linear',
            'Bond angle: 180° (maximum separation)'
        ],
        helper: 'Multiple bonds count as ONE electron group',
        realWorldContext: 'CO₂ linear → nonpolar despite polar bonds',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Linear (CO₂)',
                show3D: true,
                showBondAngles: true,
                molecule: 'CO2',
                geometry: 'linear'
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
            const filename = `vsepr_co2_linear_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'VSEPR - T-Shaped Molecule',
        problem: 'Predict the molecular geometry of ClF₃. Explain why it is T-shaped.',
        parameters: {
            molecule: 'ClF3',
            centralAtom: 'Cl',
            electronPairs: 5,
            bondingPairs: 3,
            lonePairs: 2,
            electronGeometry: 'trigonal bipyramidal',
            molecularGeometry: 'T-shaped'
        },
        type: 'vsepr_theory',
        subparts: [
            'Cl has 7 valence, 3 bonds to F',
            'Electron pairs: 3 bonds + 2 lone = 5 total',
            'Electron geometry: trigonal bipyramidal',
            'Lone pairs prefer equatorial positions',
            '2 lone pairs (equatorial) + 3 bonds',
            'Molecular geometry: T-shaped',
            'Bond angles: ~87.5° (less than 90°)'
        ],
        helper: '5 pairs: lone pairs occupy equatorial first (more room)',
        realWorldContext: 'ClF₃ is a powerful fluorinating agent',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - T-Shaped (ClF₃)',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                molecule: 'ClF3',
                geometry: 't_shaped'
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
            const filename = `vsepr_clf3_tshaped_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR - Trigonal Planar',
        problem: 'Determine the molecular geometry of BF₃ using VSEPR theory.',
        parameters: {
            molecule: 'BF3',
            centralAtom: 'B',
            electronPairs: 3,
            bondingPairs: 3,
            lonePairs: 0,
            geometry: 'trigonal planar',
            bondAngle: 120
        },
        type: 'vsepr_theory',
        subparts: [
            'B has 3 valence electrons',
            '3 bonds to F atoms',
            'Total electron groups: 3',
            'No lone pairs on B',
            'Electron geometry: trigonal planar',
            'Molecular geometry: trigonal planar',
            'Bond angle: 120° (equal separation)',
            'Note: B has incomplete octet (6e⁻)'
        ],
        helper: 'B and Be are exceptions to octet rule',
        realWorldContext: 'BF₃ is a Lewis acid (electron acceptor)',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Trigonal Planar (BF₃)',
                show3D: true,
                showBondAngles: true,
                molecule: 'BF3',
                geometry: 'trigonal_planar'
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
            const filename = `vsepr_bf3_trigonal_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedBondPolarityDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bond Polarity - HCl',
        problem: 'Determine if the H-Cl bond is polar or nonpolar. Show the dipole moment.',
        parameters: {
            molecule: 'HCl',
            atom1: { element: 'H', en: 2.20 },
            atom2: { element: 'Cl', en: 3.16 },
            enDifference: 0.96,
            bondType: 'polar covalent'
        },
        type: 'bond_polarity',
        subparts: [
            'Electronegativity: H = 2.20, Cl = 3.16',
            'Calculate difference: |3.16 - 2.20| = 0.96',
            '0.5 < ΔEN < 1.7 → polar covalent',
            'Cl is more electronegative',
            'Cl end is δ⁻ (partial negative)',
            'H end is δ⁺ (partial positive)',
            'Dipole moment: H→Cl (arrow toward Cl)'
        ],
        helper: 'Nonpolar: ΔEN < 0.5; Polar: 0.5-1.7; Ionic: > 1.7',
        realWorldContext: 'HCl polarity makes it dissolve in water',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Polar Bond - HCl',
                showDipole: true,
                showDelta: true,
                showElectronegativity: true,
                molecule: 'HCl'
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
            const filename = `bond_polarity_hcl_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Nonpolar Bond - Cl₂',
        problem: 'Explain why the Cl-Cl bond in Cl₂ is nonpolar.',
        parameters: {
            molecule: 'Cl2',
            atom1: { element: 'Cl', en: 3.16 },
            atom2: { element: 'Cl', en: 3.16 },
            enDifference: 0,
            bondType: 'nonpolar covalent'
        },
        type: 'bond_polarity',
        subparts: [
            'Both atoms are chlorine',
            'Same electronegativity: 3.16 = 3.16',
            'ΔEN = 0',
            'Electrons shared equally',
            'No partial charges (no δ⁺ or δ⁻)',
            'Result: nonpolar covalent bond',
            'No dipole moment'
        ],
        helper: 'Diatomic molecules of same element are always nonpolar',
        realWorldContext: 'All diatomic elements (H₂, O₂, N₂) are nonpolar',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Nonpolar Bond - Cl₂',
                showDipole: false,
                showDelta: false,
                showElectronegativity: true,
                molecule: 'Cl2',
                showEqualSharing: true
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
            const filename = `bond_polarity_cl2_nonpolar_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Polarity - CO₂ vs H₂O',
        problem: 'Both CO₂ and H₂O have polar bonds. Explain why CO₂ is nonpolar but H₂O is polar.',
        parameters: {
            molecule1: 'CO2',
            molecule2: 'H2O',
            geometry1: 'linear',
            geometry2: 'bent'
        },
        type: 'bond_polarity',
        subparts: [
            'CO₂: Two C=O polar bonds',
            'Geometry: linear (180°)',
            'Dipoles equal and opposite → cancel out',
            'Net dipole = 0 → nonpolar molecule',
            'H₂O: Two O-H polar bonds',
            'Geometry: bent (~104.5°)',
            'Dipoles do NOT cancel → add up',
            'Net dipole ≠ 0 → polar molecule',
            'Shape determines molecular polarity'
        ],
        helper: 'Molecular polarity = vector sum of bond dipoles',
        realWorldContext: 'Water polarity is why it is universal solvent',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Molecular Polarity - CO₂ vs H₂O',
                showDipole: true,
                showNetDipole: true,
                showComparison: true,
                molecules: ['CO2', 'H2O']
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `molecular_polarity_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Predicting Polarity',
        problem: 'Predict whether NH₃ is polar or nonpolar. Explain your reasoning.',
        parameters: {
            molecule: 'NH3',
            geometry: 'trigonal pyramidal',
            symmetrical: false,
            polar: true
        },
        type: 'bond_polarity',
        subparts: [
            'NH₃ has 3 N-H polar bonds',
            'N (EN=3.04) > H (EN=2.20)',
            'Each bond is polar (ΔEN = 0.84)',
            'Geometry: trigonal pyramidal (asymmetrical)',
            'Lone pair on top creates asymmetry',
            'Bond dipoles do NOT cancel',
            'Net dipole points toward N',
            'Result: NH₃ is polar'
        ],
        helper: 'Asymmetrical molecules with polar bonds → polar',
        realWorldContext: 'NH₃ polarity allows it to dissolve in water',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Molecular Polarity - NH₃',
                showDipole: true,
                showNetDipole: true,
                showGeometry: true,
                molecule: 'NH3'
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
            const filename = `molecular_polarity_nh3_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedIntermolecularForcesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Intermolecular Forces - Types',
        problem: 'Identify the strongest intermolecular force in: (a) CH₄ (b) HCl (c) H₂O',
        parameters: {
            molecules: [
                { formula: 'CH4', force: 'London dispersion' },
                { formula: 'HCl', force: 'Dipole-dipole' },
                { formula: 'H2O', force: 'Hydrogen bonding' }
            ]
        },
        type: 'intermolecular_forces',
        subparts: [
            '(a) CH₄: nonpolar molecule',
            'Only London dispersion forces',
            '(b) HCl: polar molecule',
            'Dipole-dipole forces (stronger than London)',
            '(c) H₂O: H bonded to O (very electronegative)',
            'Hydrogen bonding (strongest IMF)',
            'Strength order: H-bond > dipole > London',
            'H₂O has highest boiling point'
        ],
        helper: 'H-bonding: H attached to N, O, or F',
        realWorldContext: 'IMF strength determines boiling points',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Types of Intermolecular Forces',
                showStrength: true,
                showExamples: true,
                forces: ['london', 'dipole', 'hydrogen']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `intermolecular_forces_types_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'London Dispersion Forces',
        problem: 'Explain why all molecules have London dispersion forces.',
        parameters: {
            force: 'London dispersion',
            molecules: 'all',
            cause: 'temporary dipoles'
        },
        type: 'intermolecular_forces',
        subparts: [
            'Electrons are constantly moving',
            'Temporary uneven distribution creates instant dipole',
            'Induces dipole in neighboring molecule',
            'Weak attraction between temporary dipoles',
            'Present in ALL molecules (even nonpolar)',
            'Strength increases with molecular size',
            'More electrons → stronger London forces',
            'Example: I₂ (solid) vs Cl₂ (gas) at room temp'
        ],
        helper: 'London forces ↑ with molar mass and surface area',
        realWorldContext: 'Geckos use London forces to stick to walls',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'London Dispersion Forces',
                showStrength: true,
                showExamples: true,
                highlightForce: 'london',
                showElectronCloud: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `london_dispersion_forces_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hydrogen Bonding - Boiling Points',
        problem: 'Explain why H₂O (bp 100°C) has a much higher boiling point than H₂S (bp -60°C).',
        parameters: {
            molecule1: { formula: 'H2O', bp: 100, imf: 'hydrogen bonding' },
            molecule2: { formula: 'H2S', bp: -60, imf: 'dipole-dipole' }
        },
        type: 'intermolecular_forces',
        subparts: [
            'H₂O: H bonded to O (highly electronegative)',
            'Strong hydrogen bonding between molecules',
            'H-bonds are strongest IMF (~20 kJ/mol)',
            'H₂S: H bonded to S (less electronegative)',
            'S is Period 3, not in N-O-F group',
            'Only dipole-dipole forces (~5 kJ/mol)',
            'Stronger IMF → more energy to break',
            'Result: H₂O bp >> H₂S bp'
        ],
        helper: 'H-bonding only with N, O, F (small, highly electronegative)',
        realWorldContext: 'H-bonding makes water liquid at room temperature',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Hydrogen Bonding vs Dipole-Dipole',
                showStrength: true,
                showExamples: true,
                highlightForce: 'hydrogen',
                showComparison: true,
                molecules: ['H2O', 'H2S']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hydrogen_bonding_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'IMF Strength Comparison',
        problem: 'Rank these molecules by increasing boiling point: Ne, HF, CH₄, NH₃',
        parameters: {
            molecules: [
                { formula: 'Ne', imf: 'London', size: 'small', bp: -246 },
                { formula: 'CH4', imf: 'London', size: 'small', bp: -162 },
                { formula: 'NH3', imf: 'H-bonding', bp: -33 },
                { formula: 'HF', imf: 'H-bonding', bp: 20 }
            ]
        },
        type: 'intermolecular_forces',
        subparts: [
            'Ne: only London forces (single atom)',
            'CH₄: only London forces (nonpolar)',
            'NH₃: hydrogen bonding (H-N)',
            'HF: hydrogen bonding (H-F, strongest)',
            'London < H-bonding',
            'Among London: larger molecule → higher bp',
            'Among H-bonds: stronger polarity → higher bp',
            'Order: Ne < CH₄ < NH₃ < HF'
        ],
        helper: 'bp ∝ IMF strength: H-bond > dipole > London',
        realWorldContext: 'Predicting physical properties from structure',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'IMF Strength and Boiling Points',
                showStrength: true,
                showExamples: true,
                showBoilingPoints: true,
                molecules: ['Ne', 'CH4', 'NH3', 'HF']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `imf_strength_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ion-Dipole Forces',
        problem: 'Explain the ion-dipole interactions when NaCl dissolves in water. Why is this force strong?',
        parameters: {
            solute: 'NaCl',
            solvent: 'H2O',
            force: 'ion-dipole',
            process: 'dissolution'
        },
        type: 'intermolecular_forces',
        subparts: [
            'NaCl dissociates: Na⁺ + Cl⁻ ions',
            'Water is polar (δ⁺ on H, δ⁻ on O)',
            'Na⁺ attracts δ⁻ oxygen ends of water',
            'Cl⁻ attracts δ⁺ hydrogen ends of water',
            'Ion-dipole: full charge ↔ partial charge',
            'Stronger than dipole-dipole forces',
            'Hydration releases energy',
            'Result: NaCl dissolves readily in water'
        ],
        helper: 'Ion-dipole is strongest IMF (but not a bond)',
        realWorldContext: 'Why ionic compounds dissolve in polar solvents',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Ion-Dipole Forces - NaCl in Water',
                showStrength: true,
                showExamples: true,
                highlightForce: 'ion-dipole',
                showHydration: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ion_dipole_forces_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}



// ============================================================================
// STATES OF MATTER GENERATORS (4 generators)
// ============================================================================

generateRelatedStatesOfMatterDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Particle Arrangement - Three States',
        problem: 'Using the particle diagram, describe how particle arrangement differs in solid, liquid, and gas.',
        parameters: {
            states: ['solid', 'liquid', 'gas'],
            showParticles: true
        },
        type: 'states_of_matter',
        subparts: [
            'SOLID: particles tightly packed in fixed positions',
            'Regular pattern, vibrate in place',
            'Fixed shape and volume',
            'LIQUID: particles close but can slide past each other',
            'No fixed pattern, can move freely',
            'Fixed volume, takes shape of container',
            'GAS: particles far apart, move rapidly',
            'Random motion, fills entire container',
            'No fixed shape or volume'
        ],
        helper: 'Solid: fixed shape/volume; Liquid: fixed volume only; Gas: neither fixed',
        realWorldContext: 'Ice, water, steam show all three states',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'States of Matter - Particle View',
                showMotion: false,
                showLabels: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `particle_states_three_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Particle Motion and Energy',
        problem: 'Explain how particle motion differs between solids, liquids, and gases.',
        parameters: {
            property: 'particle motion',
            energyOrder: 'solid < liquid < gas'
        },
        type: 'states_of_matter',
        subparts: [
            'SOLID: particles vibrate around fixed positions',
            'Lowest kinetic energy',
            'Strong attractive forces hold particles',
            'LIQUID: particles slide and rotate',
            'Medium kinetic energy',
            'Weaker forces allow movement',
            'GAS: particles move rapidly in all directions',
            'Highest kinetic energy',
            'Very weak/no attractive forces',
            'KE order: gas > liquid > solid'
        ],
        helper: 'Higher temperature → more kinetic energy → more motion',
        realWorldContext: 'Temperature measures average kinetic energy',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Particle Motion in States of Matter',
                showMotion: true,
                showLabels: true,
                showEnergy: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `particle_motion_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diffusion in Different States',
        problem: 'Using the diffusion diagram, explain why gases diffuse faster than liquids.',
        parameters: {
            process: 'diffusion',
            rates: { gas: 'fastest', liquid: 'medium', solid: 'slowest' }
        },
        type: 'states_of_matter',
        subparts: [
            'Diffusion: movement of particles from high to low concentration',
            'GASES: particles far apart, fast moving',
            'Lots of space between particles',
            'Little/no attraction between particles',
            'Can move freely → fastest diffusion',
            'LIQUIDS: particles closer, slower moving',
            'Less space, more collisions',
            'Moderate attraction → slower diffusion',
            'SOLIDS: particles fixed, only vibrate',
            'No movement through structure → slowest/no diffusion'
        ],
        helper: 'Diffusion rate ∝ particle speed and space available',
        realWorldContext: 'Perfume smell spreads quickly (gas diffusion)',
        diagramInfo: {
            type: 'diffusion',
            registryKey: 'diffusion',
            renderOptions: {
                title: 'Diffusion of Particles',
                showTime: true,
                animate: false,
                particles: 50,
                showConcentrationGradient: true
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
            const filename = `diffusion_diagram_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Brownian Motion',
        problem: 'Describe Brownian motion using the particle diagram. What causes this random movement?',
        parameters: {
            process: 'brownian motion',
            particles: 30,
            cause: 'collisions with smaller particles'
        },
        type: 'states_of_matter',
        subparts: [
            'Brownian motion: random zigzag movement of particles',
            'Observed in liquids and gases',
            'Caused by collisions with smaller, invisible particles',
            'Large particle surrounded by fast-moving molecules',
            'Molecules hit from all directions randomly',
            'Uneven collisions cause zigzag path',
            'Evidence for kinetic molecular theory',
            'Proof that particles are always moving'
        ],
        helper: 'Brownian motion shows particles never stop moving',
        realWorldContext: 'Dust particles in sunlight show Brownian motion',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Brownian Motion',
                showPaths: true,
                showCollisions: true,
                particleCount: 30
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
            const filename = `brownian_motion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Compressibility of States',
        problem: 'Explain why gases are compressible but solids and liquids are not.',
        parameters: {
            property: 'compressibility',
            compressible: ['gas'],
            incompressible: ['solid', 'liquid']
        },
        type: 'states_of_matter',
        subparts: [
            'GASES: large spaces between particles',
            'Particles far apart (low density)',
            'Applying pressure pushes particles closer',
            'Can compress significantly',
            'LIQUIDS: particles close together',
            'Little space between particles',
            'Cannot push particles much closer',
            'Nearly incompressible',
            'SOLIDS: particles tightly packed',
            'No space between particles',
            'Cannot compress at all'
        ],
        helper: 'Compressibility depends on space between particles',
        realWorldContext: 'Air can be compressed in bicycle pump',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Compressibility of States',
                showMotion: false,
                showLabels: true,
                showCompression: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `compressibility_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedPhaseChangesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heating Curve - Water',
        problem: 'Using the heating curve, identify the phase changes and explain the flat regions.',
        parameters: {
            substance: 'water',
            phaseChanges: ['melting', 'vaporization'],
            plateaus: [0, 100]
        },
        type: 'phase_changes',
        subparts: [
            'Heating curve shows temperature vs time as heat added',
            'Sloped regions: temperature increases (single phase)',
            'Flat region 1 (0°C): melting (solid → liquid)',
            'Temperature constant during phase change',
            'Energy breaks bonds, not increasing KE',
            'Flat region 2 (100°C): vaporization (liquid → gas)',
            'Again, temperature constant',
            'Energy used to overcome IMF completely',
            'After phase change: temperature rises again'
        ],
        helper: 'Phase changes occur at constant temperature',
        realWorldContext: 'Ice water stays at 0°C until all ice melts',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Heating Curve - Water',
                showPhases: true,
                showPlateaus: true,
                substance: 'water'
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
            const filename = `heating_curve_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Six Phase Changes',
        problem: 'Name and classify all six phase changes as endothermic or exothermic.',
        parameters: {
            phaseChanges: [
                { name: 'melting', from: 'solid', to: 'liquid', type: 'endothermic' },
                { name: 'freezing', from: 'liquid', to: 'solid', type: 'exothermic' },
                { name: 'vaporization', from: 'liquid', to: 'gas', type: 'endothermic' },
                { name: 'condensation', from: 'gas', to: 'liquid', type: 'exothermic' },
                { name: 'sublimation', from: 'solid', to: 'gas', type: 'endothermic' },
                { name: 'deposition', from: 'gas', to: 'solid', type: 'exothermic' }
            ]
        },
        type: 'phase_changes',
        subparts: [
            'ENDOTHERMIC (absorb energy):',
            '1. Melting: solid → liquid (ice → water)',
            '2. Vaporization: liquid → gas (water → steam)',
            '3. Sublimation: solid → gas (dry ice → CO₂ gas)',
            'EXOTHERMIC (release energy):',
            '4. Freezing: liquid → solid (water → ice)',
            '5. Condensation: gas → liquid (steam → water)',
            '6. Deposition: gas → solid (water vapor → frost)',
            'Endo: breaking IMF (requires energy)',
            'Exo: forming IMF (releases energy)'
        ],
        helper: 'Moving UP in states requires energy (endo); moving DOWN releases energy (exo)',
        realWorldContext: 'Sweating cools you (vaporization = endothermic)',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Phase Changes - Endothermic vs Exothermic',
                showPhases: true,
                showAllTransitions: true,
                showEnergyFlow: true
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
            const filename = `phase_changes_six_types_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cooling Curve Analysis',
        problem: 'Analyze the cooling curve for a substance. Why does the freezing plateau last longer than expected?',
        parameters: {
            substance: 'water',
            curve: 'cooling',
            anomaly: 'supercooling'
        },
        type: 'phase_changes',
        subparts: [
            'Cooling curve: temperature vs time as heat removed',
            'Gas cools down (temperature drops)',
            'Condensation: gas → liquid (100°C plateau)',
            'Liquid cools down',
            'Freezing: liquid → solid (0°C plateau)',
            'If plateau is longer: more mass present',
            'Or: heat of fusion released slows cooling',
            'Freezing releases energy (exothermic)',
            'Released heat must be removed to continue cooling',
            'Longer plateau = larger heat of fusion'
        ],
        helper: 'Cooling curve is reverse of heating curve',
        realWorldContext: 'Lakes freeze slowly (large heat capacity)',
        diagramInfo: {
            type: 'coolingCurve',
            registryKey: 'coolingCurve',
            renderOptions: {
                title: 'Cooling Curve - Water',
                showPhases: true,
                showPlateaus: true,
                substance: 'water',
                showHeatRelease: true
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
            const filename = `cooling_curve_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sublimation - Dry Ice',
        problem: 'Explain why dry ice (solid CO₂) sublimates at room temperature instead of melting.',
        parameters: {
            substance: 'CO2',
            phaseChange: 'sublimation',
            pressure: 1,
            temperature: 'room temp'
        },
        type: 'phase_changes',
        subparts: [
            'Sublimation: solid → gas (skips liquid phase)',
            'Dry ice: solid CO₂ at -78°C',
            'At normal pressure (1 atm), CO₂ cannot exist as liquid',
            'Triple point of CO₂ is at high pressure (5.1 atm)',
            'At 1 atm: heating solid CO₂ → directly to gas',
            'No melting occurs',
            'Sublimation requires energy (endothermic)',
            'Creates fog effect (cold gas condenses water vapor)'
        ],
        helper: 'Sublimation bypasses liquid phase',
        realWorldContext: 'Dry ice used for special effects and cooling',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Sublimation - Dry Ice (CO₂)',
                showPhases: true,
                showSublimation: true,
                substance: 'CO2',
                highlightTransition: 'sublimation'
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
            const filename = `sublimation_dry_ice_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat of Vaporization vs Fusion',
        problem: 'Why is the heat of vaporization for water (2260 J/g) much larger than heat of fusion (334 J/g)?',
        parameters: {
            substance: 'water',
            heatOfFusion: 334,
            heatOfVaporization: 2260,
            units: 'J/g'
        },
        type: 'phase_changes',
        subparts: [
            'Heat of fusion: energy to melt (solid → liquid)',
            'Breaks some IMF, particles stay close',
            'Water: 334 J/g needed',
            'Heat of vaporization: energy to boil (liquid → gas)',
            'Breaks ALL IMF, particles separate completely',
            'Much more energy required',
            'Water: 2260 J/g needed (6.8× larger)',
            'Vaporization plateau longer on heating curve',
            'Stronger IMF → larger heats of phase change'
        ],
        helper: 'ΔH_vap > ΔH_fus always (complete vs partial IMF breaking)',
        realWorldContext: 'Burns from steam worse than boiling water',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Heat of Fusion vs Vaporization - Water',
                showPhases: true,
                showPlateaus: true,
                showEnergyValues: true,
                substance: 'water',
                highlightEnergy: true
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
            const filename = `heat_fusion_vaporization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedGasLawsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Boyle\'s Law - Pressure and Volume',
        problem: 'A gas occupies 2.0 L at 1.0 atm. What is the volume at 4.0 atm (constant T)?',
        parameters: {
            law: 'Boyles',
            P1: 1.0,
            V1: 2.0,
            P2: 4.0,
            V2: 0.5,
            constant: 'T, n'
        },
        type: 'gas_laws',
        subparts: [
            'Boyle\'s Law: P₁V₁ = P₂V₂ (at constant T, n)',
            'Given: P₁ = 1.0 atm, V₁ = 2.0 L',
            'P₂ = 4.0 atm, V₂ = ?',
            'Substitute: (1.0)(2.0) = (4.0)(V₂)',
            '2.0 = 4.0 × V₂',
            'V₂ = 2.0/4.0 = 0.5 L',
            'Pressure increased 4×, volume decreased to ¼',
            'Inverse relationship: P ↑ → V ↓'
        ],
        helper: 'Boyle\'s Law: P and V are inversely proportional',
        realWorldContext: 'Syringe: push plunger → volume ↓, pressure ↑',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Boyle\'s Law - P₁V₁ = P₂V₂',
                law: 'Boyle',
                showVariables: true,
                showContainer: true,
                showGraph: true
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
            const filename = `boyles_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Charles\' Law - Volume and Temperature',
        problem: 'A balloon has volume 1.5 L at 27°C. What is the volume at 127°C (constant P)?',
        parameters: {
            law: 'Charles',
            V1: 1.5,
            T1: 300,
            T2: 400,
            V2: 2.0,
            constant: 'P, n'
        },
        type: 'gas_laws',
        subparts: [
            'Charles\' Law: V₁/T₁ = V₂/T₂ (at constant P, n)',
            'Convert to Kelvin: T₁ = 27 + 273 = 300 K',
            'T₂ = 127 + 273 = 400 K',
            'Given: V₁ = 1.5 L, T₁ = 300 K, T₂ = 400 K',
            'Substitute: 1.5/300 = V₂/400',
            'V₂ = (1.5 × 400)/300',
            'V₂ = 600/300 = 2.0 L',
            'Temperature increased 1.33×, volume increased 1.33×',
            'Direct relationship: T ↑ → V ↑'
        ],
        helper: 'Charles\' Law: V and T are directly proportional (use Kelvin!)',
        realWorldContext: 'Hot air balloon: heat air → volume expands → rises',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Charles\' Law - V₁/T₁ = V₂/T₂',
                law: 'Charles',
                showVariables: true,
                showContainer: true,
                showTemperature: true
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
            const filename = `charles_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Gas Law',
        problem: 'A gas at 2.0 atm, 3.0 L, and 300 K is changed to 1.0 atm and 400 K. Find the new volume.',
        parameters: {
            law: 'Combined',
            P1: 2.0,
            V1: 3.0,
            T1: 300,
            P2: 1.0,
            T2: 400,
            V2: 8.0,
            constant: 'n'
        },
        type: 'gas_laws',
        subparts: [
            'Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂',
            'Given: P₁=2.0 atm, V₁=3.0 L, T₁=300 K',
            'P₂=1.0 atm, T₂=400 K, V₂=?',
            'Substitute: (2.0)(3.0)/300 = (1.0)(V₂)/400',
            '6.0/300 = V₂/400',
            '0.02 = V₂/400',
            'V₂ = 0.02 × 400 = 8.0 L',
            'Check: P↓ (2→1) and T↑ (300→400) both increase V',
            'Result makes sense'
        ],
        helper: 'Combined law: use when 3 variables change',
        realWorldContext: 'Weather balloons expand as they rise (P↓, T↓)',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Combined Gas Law - P₁V₁/T₁ = P₂V₂/T₂',
                law: 'Combined',
                showVariables: true,
                showContainer: true,
                showAllChanges: true
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
            const filename = `combined_gas_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ideal Gas Law - Moles Calculation',
        problem: 'How many moles of gas are in a 5.0 L container at 2.0 atm and 300 K? (R = 0.0821 L·atm/mol·K)',
        parameters: {
            law: 'Ideal',
            P: 2.0,
            V: 5.0,
            T: 300,
            R: 0.0821,
            n: 0.406
        },
        type: 'gas_laws',
        subparts: [
            'Ideal Gas Law: PV = nRT',
            'Given: P = 2.0 atm, V = 5.0 L, T = 300 K',
            'R = 0.0821 L·atm/(mol·K)',
            'Solve for n: n = PV/RT',
            'n = (2.0)(5.0)/(0.0821)(300)',
            'n = 10.0/24.63',
            'n = 0.406 mol',
            'Always use Kelvin for temperature'
        ],
        helper: 'PV = nRT; R value depends on units!',
        realWorldContext: 'Calculate amount of gas in tire',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Ideal Gas Law - PV = nRT',
                law: 'ideal',
                showVariables: true,
                showContainer: true,
                showFormula: true
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
            const filename = `ideal_gas_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Stoichiometry with Ideal Gas Law',
        problem: 'What volume of O₂ gas at STP is needed to completely burn 2.0 moles of CH₄? CH₄ + 2O₂ → CO₂ + 2H₂O',
        parameters: {
            reaction: 'CH4 + 2O2 → CO2 + 2H2O',
            molesReactant: 2.0,
            stoichiometricRatio: 2,
            STP: { T: 273, P: 1.0 },
            volume: 89.6
        },
        type: 'gas_laws',
        subparts: [
            'Balanced equation: CH₄ + 2O₂ → CO₂ + 2H₂O',
            'Mole ratio: 1 mol CH₄ : 2 mol O₂',
            'Given: 2.0 mol CH₄',
            'Moles O₂ needed: 2.0 mol × (2 mol O₂/1 mol CH₄) = 4.0 mol',
            'At STP: T = 273 K, P = 1.0 atm',
            'Use PV = nRT: V = nRT/P',
            'V = (4.0)(0.0821)(273)/1.0',
            'V = 89.6 L of O₂',
            'Alternative: at STP, 1 mol gas = 22.4 L',
            'V = 4.0 mol × 22.4 L/mol = 89.6 L'
        ],
        helper: 'At STP: 1 mole gas = 22.4 L (molar volume)',
        realWorldContext: 'Calculating oxygen needs for combustion',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Gas Stoichiometry - Ideal Gas Law',
                law: 'ideal',
                showVariables: true,
                showContainer: true,
                showStoichiometry: true
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
            const filename = `gas_stoichiometry_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedKineticMolecularTheoryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'KMT Postulates - Gas Behavior',
        problem: 'State the five postulates of Kinetic Molecular Theory and explain how they relate to gas behavior.',
        parameters: {
            postulates: 5,
            theory: 'KMT'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            '1. Gas particles are in constant, random motion',
            'Explains diffusion and pressure',
            '2. Gas particles are negligibly small',
            'Volume of particles << volume of container',
            'Explains compressibility',
            '3. No attractive/repulsive forces between particles',
            'Explains ideal gas behavior',
            '4. Collisions are perfectly elastic',
            'No energy lost; temperature constant without heating',
            '5. Average KE proportional to absolute temperature',
            'KE_avg = (3/2)kT; higher T → faster particles'
        ],
        helper: 'KMT explains macroscopic gas properties from particle behavior',
        realWorldContext: 'KMT is foundation for understanding gas laws',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Kinetic Molecular Theory - Gas Particles',
                showMotion: true,
                showLabels: true,
                showCollisions: true,
                states: ['gas']
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
            const filename = `kmt_postulates_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature and Kinetic Energy',
        problem: 'Explain the relationship between temperature and average kinetic energy of gas particles.',
        parameters: {
            relationship: 'direct proportional',
            equation: 'KE_avg = (3/2)kT'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Temperature measures average kinetic energy',
            'KE_avg = (3/2)kT (k = Boltzmann constant)',
            'Higher temperature → higher average KE',
            'Higher KE → faster particle motion',
            'At same T: all gases have same average KE',
            'But lighter gases move faster',
            'Example: H₂ moves faster than O₂ at same T',
            'Root mean square velocity: v_rms = √(3RT/M)',
            'M is molar mass; lighter M → faster v'
        ],
        helper: 'T ∝ KE_avg; at constant T, KE is constant',
        realWorldContext: 'Absolute zero (0 K): all molecular motion stops',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Temperature and Kinetic Energy',
                showPaths: true,
                showCollisions: true,
                showSpeed: true,
                particleCount: 30
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
            const filename = `temperature_kinetic_energy_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Real vs Ideal Gases',
        problem: 'Explain why real gases deviate from ideal behavior at high pressure and low temperature.',
        parameters: {
            deviations: ['high pressure', 'low temperature'],
            idealConditions: ['low pressure', 'high temperature']
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Ideal gas assumptions: no volume, no IMF',
            'HIGH PRESSURE: gas compressed',
            'Particle volume becomes significant',
            'Less free space than expected',
            'Actual volume < ideal volume',
            'LOW TEMPERATURE: particles slow down',
            'Intermolecular forces become significant',
            'Attraction reduces pressure on walls',
            'Actual pressure < ideal pressure',
            'Van der Waals equation corrects for these:',
            '(P + an²/V²)(V - nb) = nRT',
            'Best ideal behavior: high T, low P'
        ],
        helper: 'Real gases approach ideal at high T and low P',
        realWorldContext: 'He and H₂ most ideal (small, weak IMF)',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Real vs Ideal Gas Behavior',
                showMotion: true,
                showLabels: true,
                showIMF: true,
                showComparison: true,
                states: ['gas']
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
            const filename = `real_vs_ideal_gases_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Effusion and Graham\'s Law',
        problem: 'Compare the rate of effusion of H₂ (M=2) and O₂ (M=32). Which is faster and by how much?',
        parameters: {
            gas1: { formula: 'H2', M: 2 },
            gas2: { formula: 'O2', M: 32 },
            law: 'Graham'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Graham\'s Law: rate₁/rate₂ = √(M₂/M₁)',
            'Effusion: gas escaping through tiny hole',
            'Lighter gases effuse faster',
            'Given: M(H₂) = 2 g/mol, M(O₂) = 32 g/mol',
            'rate(H₂)/rate(O₂) = √(32/2)',
            '= √16 = 4',
            'H₂ effuses 4 times faster than O₂',
            'Lighter molecules have higher average speed'
        ],
        helper: 'Graham\'s Law: rate ∝ 1/√M (inverse of square root)',
        realWorldContext: 'Helium balloons deflate faster than air balloons',
        diagramInfo: {
            type: 'diffusion',
            registryKey: 'diffusion',
            renderOptions: {
                title: 'Graham\'s Law - Effusion Rates',
                showTime: true,
                animate: false,
                particles: 50,
                showRateComparison: true,
                gases: ['H2', 'O2']
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
            const filename = `grahams_law_effusion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pressure from Particle Collisions',
        problem: 'Using KMT, explain how gas particles create pressure on container walls.',
        parameters: {
            concept: 'pressure from collisions',
            factors: ['particle speed', 'collision frequency']
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Gas particles move randomly in all directions',
            'Particles collide with container walls',
            'Each collision exerts force on wall',
            'Pressure = total force / area',
            'More collisions → higher pressure',
            'Factors increasing pressure:',
            '1. More particles (higher n)',
            '2. Faster particles (higher T)',
            '3. Smaller volume (more frequent collisions)',
            'Explains why: P ∝ nT/V (ideal gas law)',
            'Elastic collisions: no energy lost'
        ],
        helper: 'Pressure is result of billions of particle impacts per second',
        realWorldContext: 'Tire pressure from air molecules hitting inside',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Gas Pressure from Collisions',
                showPaths: true,
                showCollisions: true,
                showWalls: true,
                highlightWallCollisions: true,
                particleCount: 30
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
            const filename = `pressure_from_collisions_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// ============================================================================
// NUCLEAR CHEMISTRY GENERATORS (4 generators)
// ============================================================================

generateRelatedRadioactiveDecayDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alpha Decay - Radium-226',
        problem: 'Write the nuclear equation for alpha decay of Radium-226. What is the daughter nucleus?',
        parameters: {
            parentNucleus: 'Ra-226',
            decayType: 'alpha',
            alphaParticle: '⁴₂He',
            daughterNucleus: 'Rn-222'
        },
        type: 'radioactive_decay',
        subparts: [
            'Alpha decay: nucleus emits ⁴₂He (α particle)',
            'Parent: ²²⁶₈₈Ra (mass = 226, atomic # = 88)',
            'Alpha particle: ⁴₂He (mass = 4, atomic # = 2)',
            'Mass number: 226 - 4 = 222',
            'Atomic number: 88 - 2 = 86',
            'Element with Z=86: Radon (Rn)',
            'Nuclear equation: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He',
            'Daughter nucleus: Radon-222'
        ],
        helper: 'Alpha decay: mass -4, atomic number -2',
        realWorldContext: 'Radon-222 in basements from radium decay',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Alpha Decay - Radium-226',
                showParticle: true,
                showEquation: true,
                decayType: 'alpha',
                nucleus: 'Ra-226'
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
            const filename = `alpha_decay_radium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Beta Decay - Carbon-14',
        problem: 'Write the nuclear equation for beta decay of Carbon-14. Identify the daughter nucleus.',
        parameters: {
            parentNucleus: 'C-14',
            decayType: 'beta-minus',
            betaParticle: '⁰₋₁e',
            daughterNucleus: 'N-14'
        },
        type: 'radioactive_decay',
        subparts: [
            'Beta-minus decay: neutron → proton + electron',
            'Nucleus emits ⁰₋₁e (β⁻ particle)',
            'Parent: ¹⁴₆C (mass = 14, atomic # = 6)',
            'Beta particle: ⁰₋₁e (mass = 0, atomic # = -1)',
            'Mass number: 14 - 0 = 14 (unchanged)',
            'Atomic number: 6 - (-1) = 6 + 1 = 7',
            'Element with Z=7: Nitrogen (N)',
            'Nuclear equation: ¹⁴₆C → ¹⁴₇N + ⁰₋₁e',
            'Daughter nucleus: Nitrogen-14'
        ],
        helper: 'Beta-minus decay: mass unchanged, atomic number +1',
        realWorldContext: 'Carbon-14 dating uses this decay',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'betaDecay',
            renderOptions: {
                title: 'Beta Decay - Carbon-14',
                showParticle: true,
                showEquation: true,
                decayType: 'beta',
                nucleus: 'C-14'
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
            const filename = `beta_decay_carbon14_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Decay Series - Multiple Steps',
        problem: 'Uranium-238 undergoes alpha decay, then beta decay. Write both equations and identify the final product.',
        parameters: {
            parentNucleus: 'U-238',
            step1: 'alpha',
            step2: 'beta',
            intermediate: 'Th-234',
            finalProduct: 'Pa-234'
        },
        type: 'radioactive_decay',
        subparts: [
            'Step 1: Alpha decay of U-238',
            '²³⁸₉₂U → ? + ⁴₂He',
            'Mass: 238 - 4 = 234',
            'Atomic #: 92 - 2 = 90 (Thorium)',
            'First equation: ²³⁸₉₂U → ²³⁴₉₀Th + ⁴₂He',
            'Step 2: Beta decay of Th-234',
            '²³⁴₉₀Th → ? + ⁰₋₁e',
            'Mass: 234 - 0 = 234',
            'Atomic #: 90 + 1 = 91 (Protactinium)',
            'Second equation: ²³⁴₉₀Th → ²³⁴₉₁Pa + ⁰₋₁e',
            'Final product: Protactinium-234'
        ],
        helper: 'Decay series: track mass and atomic numbers through each step',
        realWorldContext: 'U-238 decay chain leads eventually to stable Pb-206',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Decay Series - U-238 → Th-234 → Pa-234',
                showParticle: true,
                showEquation: true,
                showSeries: true,
                decayType: 'series',
                nucleus: 'U-238'
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
            const filename = `decay_series_uranium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gamma Decay - Cobalt-60',
        problem: 'Explain what happens during gamma decay of Cobalt-60. Does the nucleus change identity?',
        parameters: {
            nucleus: 'Co-60',
            decayType: 'gamma',
            gammaRay: '⁰₀γ',
            identityChange: false
        },
        type: 'radioactive_decay',
        subparts: [
            'Gamma decay: emission of high-energy photon',
            'Nucleus in excited state releases energy',
            'Gamma ray: ⁰₀γ (no mass, no charge)',
            'Parent: ⁶⁰₂₇Co (excited state)',
            'Mass number: 60 - 0 = 60 (unchanged)',
            'Atomic number: 27 - 0 = 27 (unchanged)',
            'Nuclear equation: ⁶⁰₂₇Co* → ⁶⁰₂₇Co + ⁰₀γ',
            'Identity unchanged: still Cobalt-60',
            'Only energy state changes (excited → ground)',
            'Often follows alpha or beta decay'
        ],
        helper: 'Gamma decay: no change in mass or atomic number',
        realWorldContext: 'Co-60 gamma rays used in cancer radiation therapy',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'gammaDecay',
            renderOptions: {
                title: 'Gamma Decay - Cobalt-60',
                showWave: true,
                showEquation: true,
                decayType: 'gamma',
                nucleus: 'Co-60'
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
            const filename = `gamma_decay_cobalt_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Penetration Power Comparison',
        problem: 'Using the diagram, rank alpha, beta, and gamma radiation by penetration power. Explain the differences.',
        parameters: {
            radiations: ['alpha', 'beta', 'gamma'],
            penetrationOrder: 'alpha < beta < gamma',
            shielding: { alpha: 'paper', beta: 'aluminum', gamma: 'lead/concrete' }
        },
        type: 'radioactive_decay',
        subparts: [
            'ALPHA (α): ⁴₂He nucleus (2 protons + 2 neutrons)',
            'Large mass, +2 charge',
            'Strong interaction with matter',
            'Stopped by: paper, skin, few cm of air',
            'Least penetrating, most ionizing',
            'BETA (β⁻): electron (⁰₋₁e)',
            'Small mass, -1 charge',
            'Moderate interaction',
            'Stopped by: aluminum foil, plastic',
            'Medium penetration and ionization',
            'GAMMA (γ): high-energy photon (⁰₀γ)',
            'No mass, no charge',
            'Weak interaction with matter',
            'Stopped by: thick lead, concrete',
            'Most penetrating, least ionizing',
            'Penetration: γ > β > α'
        ],
        helper: 'Penetration ∝ 1/(mass × charge); ionizing power is inverse',
        realWorldContext: 'X-ray technicians use lead aprons (gamma shielding)',
        diagramInfo: {
            type: 'penetration',
            registryKey: 'penetrationPower',
            renderOptions: {
                title: 'Radiation Penetration Power',
                showBarriers: true,
                showLabels: true,
                radiations: ['alpha', 'beta', 'gamma']
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
            const filename = `penetration_power_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedNuclearEquationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Balancing Nuclear Equations - Alpha',
        problem: 'Complete the nuclear equation: ²³⁹₉₄Pu → ? + ⁴₂He',
        parameters: {
            reactant: 'Pu-239',
            particle: 'alpha',
            product: 'U-235'
        },
        type: 'nuclear_equations',
        subparts: [
            'Nuclear equations must balance mass and atomic numbers',
            'Reactant: ²³⁹₉₄Pu (mass=239, Z=94)',
            'Alpha particle: ⁴₂He (mass=4, Z=2)',
            'Mass number: 239 = ? + 4',
            '? = 239 - 4 = 235',
            'Atomic number: 94 = ? + 2',
            '? = 94 - 2 = 92',
            'Element with Z=92: Uranium (U)',
            'Complete equation: ²³⁹₉₄Pu → ²³⁵₉₂U + ⁴₂He'
        ],
        helper: 'Check: sum of mass numbers equal, sum of atomic numbers equal',
        realWorldContext: 'Plutonium-239 used in nuclear weapons',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Nuclear Equation - Pu-239 Alpha Decay',
                showParticle: true,
                showEquation: true,
                showBalancing: true,
                decayType: 'alpha',
                nucleus: 'Pu-239'
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
            const filename = `nuclear_equation_pu239_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Positron Emission',
        problem: 'Complete: ²²₁₁Na → ²²₁₀Ne + ?. What particle is emitted?',
        parameters: {
            reactant: 'Na-22',
            product: 'Ne-22',
            particle: 'positron'
        },
        type: 'nuclear_equations',
        subparts: [
            'Given: ²²₁₁Na → ²²₁₀Ne + ?',
            'Mass numbers: 22 = 22 + ?',
            '? has mass number 0',
            'Atomic numbers: 11 = 10 + ?',
            '? has atomic number +1',
            'Particle: ⁰₊₁e (positron, β⁺)',
            'Complete: ²²₁₁Na → ²²₁₀Ne + ⁰₊₁e',
            'Positron emission: proton → neutron + positron',
            'Atomic number decreases by 1'
        ],
        helper: 'Positron (β⁺): antiparticle of electron, charge +1',
        realWorldContext: 'Positron emission used in PET scans',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'betaDecay',
            renderOptions: {
                title: 'Positron Emission - Na-22',
                showParticle: true,
                showEquation: true,
                decayType: 'positron',
                nucleus: 'Na-22'
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
            const filename = `positron_emission_na22_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Fission Equation',
        problem: 'Complete the fission equation: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ? + 3¹₀n',
        parameters: {
            reactant: 'U-235',
            trigger: 'neutron',
            product1: 'Ba-141',
            product2: 'Kr-92',
            neutronsReleased: 3
        },
        type: 'nuclear_equations',
        subparts: [
            'Fission: heavy nucleus splits into two smaller nuclei',
            'Reactants: ²³⁵₉₂U + ¹₀n',
            'Total mass: 235 + 1 = 236',
            'Total atomic number: 92 + 0 = 92',
            'Products: ¹⁴¹₅₆Ba + ? + 3¹₀n',
            'Known mass: 141 + 3(1) = 144',
            'Unknown mass: 236 - 144 = 92',
            'Known atomic: 56 + 0 = 56',
            'Unknown atomic: 92 - 56 = 36',
            'Element Z=36: Krypton (Kr)',
            'Complete: ²³⁵₉₂U + ¹₀n → ¹⁴¹₅₆Ba + ⁹²₃₆Kr + 3¹₀n'
        ],
        helper: 'Fission releases 2-3 neutrons → chain reaction possible',
        realWorldContext: 'U-235 fission powers nuclear reactors',
        diagramInfo: {
            type: 'fission',
            registryKey: 'nuclearFission',
            renderOptions: {
                title: 'Nuclear Fission - U-235',
                showNeutrons: true,
                showProducts: true,
                showEnergy: true,
                nucleus: 'U-235'
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
            const filename = `nuclear_fission_u235_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nuclear Fusion Equation',
        problem: 'Complete the fusion equation: ²₁H + ³₁H → ? + ¹₀n',
        parameters: {
            reactant1: 'H-2 (deuterium)',
            reactant2: 'H-3 (tritium)',
            product: 'He-4',
            neutron: true
        },
        type: 'nuclear_equations',
        subparts: [
            'Fusion: light nuclei combine to form heavier nucleus',
            'Reactants: ²₁H + ³₁H (deuterium + tritium)',
            'Total mass: 2 + 3 = 5',
            'Total atomic number: 1 + 1 = 2',
            'Products: ? + ¹₀n',
            'Neutron mass: 1',
            'Unknown mass: 5 - 1 = 4',
            'Unknown atomic: 2 - 0 = 2',
            'Element Z=2: Helium (He)',
            'Complete: ²₁H + ³₁H → ⁴₂He + ¹₀n',
            'Releases enormous energy (17.6 MeV)'
        ],
        helper: 'Fusion requires very high temperature (millions of K)',
        realWorldContext: 'Fusion powers the sun and stars',
        diagramInfo: {
            type: 'fusion',
            registryKey: 'nuclearFusion',
            renderOptions: {
                title: 'Nuclear Fusion - Deuterium + Tritium',
                showReactants: true,
                showProduct: true,
                showEnergy: true,
                reactants: ['H-2', 'H-3']
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
            const filename = `nuclear_fusion_deuterium_tritium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transmutation - Artificial Element',
        problem: 'Complete the transmutation: ²³⁸₉₂U + ⁴₂He → ? + ¹₀n. What element is produced?',
        parameters: {
            target: 'U-238',
            projectile: 'alpha',
            product: 'Pu-241',
            process: 'transmutation'
        },
        type: 'nuclear_equations',
        subparts: [
            'Transmutation: converting one element to another',
            'Bombardment with particles',
            'Reactants: ²³⁸₉₂U + ⁴₂He',
            'Total mass: 238 + 4 = 242',
            'Total atomic: 92 + 2 = 94',
            'Products: ? + ¹₀n',
            'Neutron: mass=1, atomic=0',
            'Unknown mass: 242 - 1 = 241',
            'Unknown atomic: 94 - 0 = 94',
            'Element Z=94: Plutonium (Pu)',
            'Complete: ²³⁸₉₂U + ⁴₂He → ²⁴¹₉₄Pu + ¹₀n',
            'Plutonium is artificial (not found in nature)'
        ],
        helper: 'Transmutation creates elements beyond uranium',
        realWorldContext: 'How synthetic elements are created in labs',
        diagramInfo: {
            type: 'nuclearDecay',
            registryKey: 'alphaDecay',
            renderOptions: {
                title: 'Transmutation - Creating Plutonium',
                showParticle: true,
                showEquation: true,
                showBombardment: true,
                decayType: 'transmutation',
                nucleus: 'U-238'
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
            const filename = `transmutation_plutonium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedHalfLifeDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Life Calculation - Iodine-131',
        problem: 'Iodine-131 has a half-life of 8 days. How much of a 40 g sample remains after 24 days?',
        parameters: {
            isotope: 'I-131',
            halfLife: 8,
            initialAmount: 40,
            time: 24,
            finalAmount: 5
        },
        type: 'half_life',
        subparts: [
            'Half-life: time for half of sample to decay',
            'Given: t₁/₂ = 8 days, initial = 40 g, time = 24 days',
            'Number of half-lives: 24 ÷ 8 = 3 half-lives',
            'After 1st half-life (8 days): 40 → 20 g',
            'After 2nd half-life (16 days): 20 → 10 g',
            'After 3rd half-life (24 days): 10 → 5 g',
            'Formula: N = N₀ × (1/2)ⁿ',
            'N = 40 × (1/2)³ = 40 × 1/8 = 5 g',
            'Answer: 5 g remains'
        ],
        helper: 'n = time elapsed / half-life; remaining = initial × (1/2)ⁿ',
        realWorldContext: 'I-131 used in thyroid cancer treatment',
        diagramInfo: {
            type: 'halfLife',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                title: 'Half-Life - Iodine-131',
                showPeriods: true,
                showPercentages: true,
                halfLife: 8,
                isotope: 'I-131'
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
            const filename = `half_life_iodine131_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Decay Curve - Visual Analysis',
        problem: 'Using the decay curve, determine what fraction of the original sample remains after 3 half-lives.',
        parameters: {
            halfLives: 3,
            fraction: '1/8',
            percentage: 12.5
        },
        type: 'half_life',
        subparts: [
            'Decay curve shows exponential decrease',
            'After each half-life: amount halved',
            'After 1 half-life: 1/2 remains (50%)',
            'After 2 half-lives: 1/4 remains (25%)',
            'After 3 half-lives: 1/8 remains (12.5%)',
            'Pattern: (1/2)ⁿ where n = number of half-lives',
            '(1/2)³ = 1/8',
            'Answer: 1/8 or 12.5% remains',
            '87.5% has decayed'
        ],
        helper: 'Each half-life: multiply remaining amount by 1/2',
        realWorldContext: 'Predicting radioactive decay over time',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Radioactive Decay Curve',
                showHalfLives: true,
                showExponential: true,
                halfLife: 10,
                showFractions: true
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
            const filename = `decay_curve_analysis_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Carbon-14 Dating',
        problem: 'A fossil contains 25% of the original C-14. If t₁/₂ = 5730 years, how old is the fossil?',
        parameters: {
            isotope: 'C-14',
            halfLife: 5730,
            remainingPercent: 25,
            age: 11460
        },
        type: 'half_life',
        subparts: [
            'Given: 25% remains, t₁/₂ = 5730 years',
            '25% = 1/4 of original',
            'After 1 half-life: 100% → 50%',
            'After 2 half-lives: 50% → 25%',
            'Therefore: n = 2 half-lives',
            'Age = n × t₁/₂',
            'Age = 2 × 5730 years',
            'Age = 11,460 years',
            'Alternative: use (1/2)ⁿ = 0.25',
            'Solve: n = log(0.25)/log(0.5) = 2'
        ],
        helper: 'For fractions: 1/2 = 1 HL, 1/4 = 2 HL, 1/8 = 3 HL, 1/16 = 4 HL',
        realWorldContext: 'C-14 dating determines age of organic materials',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Carbon-14 Dating Curve',
                showHalfLives: true,
                showExponential: true,
                isotope: 'C-14',
                halfLife: 5730,
                highlightPercent: 25
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
            const filename = `carbon14_dating_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Half-Life from Data',
        problem: 'A 100 g sample decays to 25 g in 20 days. What is the half-life?',
        parameters: {
            initialAmount: 100,
            finalAmount: 25,
            time: 20,
            halfLife: 10
        },
        type: 'half_life',
        subparts: [
            'Given: N₀ = 100 g, N = 25 g, time = 20 days',
            'Find: t₁/₂ = ?',
            '25 g is what fraction of 100 g?',
            '25/100 = 1/4',
            '1/4 = (1/2)² → 2 half-lives elapsed',
            'Number of half-lives: n = 2',
            'Time = n × t₁/₂',
            '20 days = 2 × t₁/₂',
            't₁/₂ = 20/2 = 10 days',
            'Answer: Half-life is 10 days'
        ],
        helper: 'Find fraction remaining → determine n → divide time by n',
        realWorldContext: 'Determining half-life from experimental data',
        diagramInfo: {
            type: 'halfLife',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                title: 'Determining Half-Life from Data',
                showPeriods: true,
                showPercentages: true,
                halfLife: 10,
                showCalculation: true
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
            const filename = `finding_half_life_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Non-Integer Half-Lives',
        problem: 'A 80 g sample of isotope X (t₁/₂ = 6 hours) decays for 15 hours. How much remains?',
        parameters: {
            initialAmount: 80,
            halfLife: 6,
            time: 15,
            finalAmount: 14.14
        },
        type: 'half_life',
        subparts: [
            'Given: N₀ = 80 g, t₁/₂ = 6 hours, time = 15 hours',
            'Number of half-lives: n = 15/6 = 2.5 half-lives',
            'Use formula: N = N₀ × (1/2)ⁿ',
            'N = 80 × (1/2)^2.5',
            'N = 80 × (1/2)^2 × (1/2)^0.5',
            'N = 80 × (1/4) × √(1/2)',
            'N = 20 × 0.707',
            'N = 14.14 g',
            'Or use calculator: 80 × 0.5^2.5 = 14.14 g',
            'Answer: 14.14 g remains'
        ],
        helper: 'For non-integer n: use (1/2)ⁿ with calculator or N = N₀e^(-0.693t/t₁/₂)',
        realWorldContext: 'Real decay doesnt stop at exact half-life intervals',
        diagramInfo: {
            type: 'decayCurve',
            registryKey: 'radioactiveDecayCurve',
            renderOptions: {
                title: 'Non-Integer Half-Lives',
                showHalfLives: true,
                showExponential: true,
                halfLife: 6,
                highlightTime: 15,
                showContinuous: true
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
            const filename = `non_integer_half_lives_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedNuclearReactionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nuclear Fission - Energy Release',
        problem: 'Explain why nuclear fission of U-235 releases enormous energy. Use the binding energy curve.',
        parameters: {
            reaction: 'fission',
            nucleus: 'U-235',
            products: ['medium-mass nuclei', 'neutrons'],
            energyRelease: 'large'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fission: heavy nucleus splits into two medium nuclei',
            'U-235 → Ba-141 + Kr-92 + 3 neutrons',
            'Binding energy per nucleon vs mass number curve',
            'U-235 (A=235): BE/nucleon ≈ 7.6 MeV',
            'Products (A≈90-140): BE/nucleon ≈ 8.5 MeV',
            'Products more stable (higher BE/nucleon)',
            'Mass defect converted to energy (E=mc²)',
            'Energy released ≈ 200 MeV per fission',
            'Millions of times more than chemical reactions'
        ],
        helper: 'Fission moves toward peak of BE curve → energy released',
        realWorldContext: 'Nuclear power plants use controlled fission',
        diagramInfo: {
            type: 'bindingEnergy',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                title: 'Binding Energy Curve - Fission',
                showPeak: true,
                showFissionFusion: true,
                highlightFission: true
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
            const filename = `fission_energy_release_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Chain Reaction Mechanism',
        problem: 'Using the diagram, explain how a nuclear chain reaction becomes self-sustaining.',
        parameters: {
            trigger: 'neutron',
            neutronsReleased: '2-3 per fission',
            condition: 'critical mass'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Chain reaction: one fission triggers more fissions',
            'Step 1: neutron hits U-235 nucleus',
            'Step 2: U-235 undergoes fission',
            'Step 3: releases 2-3 neutrons + energy',
            'Step 4: each neutron can cause another fission',
            'Generation 1: 1 fission → 3 neutrons',
            'Generation 2: 3 fissions → 9 neutrons',
            'Generation 3: 9 fissions → 27 neutrons',
            'Exponential growth if uncontrolled',
            'Critical mass: enough material for self-sustaining reaction',
            'Control rods absorb excess neutrons in reactor'
        ],
        helper: 'Controlled: steady rate; Uncontrolled: explosive (bomb)',
        realWorldContext: 'Nuclear reactors maintain controlled chain reactions',
        diagramInfo: {
            type: 'chainReaction',
            registryKey: 'chainReaction',
            renderOptions: {
                title: 'Nuclear Chain Reaction',
                showGenerations: true,
                showNeutrons: true,
                generations: 3
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `chain_reaction_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Fusion in Stars',
        problem: 'Explain why fusion is the energy source of stars. Why does it require such high temperatures?',
        parameters: {
            reaction: 'fusion',
            temperature: '15 million K',
            fuel: 'hydrogen',
            product: 'helium'
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fusion: light nuclei combine to form heavier nucleus',
            'Sun: 4 ¹H → ⁴He + 2 positrons + energy',
            'Simplified: ²H + ³H → ⁴He + neutron',
            'Binding energy curve: fusion moves toward peak',
            'Products have higher BE/nucleon → energy released',
            'PROBLEM: protons repel (both positive)',
            'Need extremely high temperature (15 million K)',
            'High T → high kinetic energy',
            'Overcome electrostatic repulsion',
            'Nuclei get close enough for strong force',
            'Strong force >> electromagnetic force at close range',
            'Fusion occurs, releases 17.6 MeV',
            'Challenge on Earth: contain 100+ million K plasma'
        ],
        helper: 'Fusion requires high T to overcome electrostatic repulsion',
        realWorldContext: 'Sun fuses 600 million tons H/second',
        diagramInfo: {
            type: 'bindingEnergy',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                title: 'Binding Energy Curve - Fusion',
                showPeak: true,
                showFissionFusion: true,
                highlightFusion: true
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
            const filename = `fusion_in_stars_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fission vs Fusion Comparison',
        problem: 'Compare nuclear fission and fusion. Which releases more energy per unit mass?',
        parameters: {
            fission: { fuel: 'U-235', energy: '200 MeV', temp: 'room' },
            fusion: { fuel: 'H-2/H-3', energy: '17.6 MeV', temp: '100 million K' }
        },
        type: 'nuclear_reactions',
        subparts: [
            'FISSION:',
            '- Heavy nucleus → two lighter nuclei',
            '- Fuel: U-235, Pu-239',
            '- Energy: ~200 MeV per reaction',
            '- Releases 2-3 neutrons (chain reaction)',
            '- Occurs at room temperature',
            '- Produces radioactive waste',
            'FUSION:',
            '- Light nuclei → heavier nucleus',
            '- Fuel: H-2 (deuterium), H-3 (tritium)',
            '- Energy: ~17.6 MeV per D-T reaction',
            '- Requires 100+ million K temperature',
            '- Less radioactive waste',
            'Energy per unit mass: fusion > fission',
            'Fusion: 4× more energy per kg than fission',
            'But fusion much harder to achieve on Earth'
        ],
        helper: 'Both convert mass to energy (E=mc²)',
        realWorldContext: 'Fission: current tech; Fusion: future goal',
        diagramInfo: {
            type: 'fission',
            registryKey: 'nuclearFission',
            renderOptions: {
                title: 'Fission vs Fusion Comparison',
                showComparison: true,
                showEnergy: true,
                showBoth: true
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
            const filename = `fission_vs_fusion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass-Energy Equivalence',
        problem: 'In D-T fusion, the mass defect is 0.0189 u. Calculate the energy released (1 u = 931.5 MeV/c²).',
        parameters: {
            massDefect: 0.0189,
            conversionFactor: 931.5,
            energyReleased: 17.6
        },
        type: 'nuclear_reactions',
        subparts: [
            'Fusion: ²H + ³H → ⁴He + neutron',
            'Reactant masses: ²H = 2.0141 u, ³H = 3.0161 u',
            'Product masses: ⁴He = 4.0026 u, neutron = 1.0087 u',
            'Total reactant mass: 2.0141 + 3.0161 = 5.0302 u',
            'Total product mass: 4.0026 + 1.0087 = 5.0113 u',
            'Mass defect: Δm = 5.0302 - 5.0113 = 0.0189 u',
            'Einstein: E = mc² or E = Δm × c²',
            'Conversion: 1 u = 931.5 MeV/c²',
            'E = 0.0189 u × 931.5 MeV/u',
            'E = 17.6 MeV',
            'Missing mass converted to energy'
        ],
        helper: 'Mass defect × 931.5 = energy in MeV',
        realWorldContext: 'E=mc² explains nuclear energy release',
        diagramInfo: {
            type: 'fusion',
            registryKey: 'nuclearFusion',
            renderOptions: {
                title: 'Mass-Energy Equivalence in Fusion',
                showReactants: true,
                showProduct: true,
                showEnergy: true,
                showMassDefect: true,
                reactants: ['H-2', 'H-3']
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
            const filename = `mass_energy_equivalence_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// ============================================================================
// LABORATORY CHEMISTRY GENERATORS (4 generators)
// ============================================================================

generateRelatedLabSafetyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hazard Symbol Identification',
        problem: 'Identify the hazard symbols shown and explain the precautions needed for each chemical type.',
        parameters: {
            symbols: ['flammable', 'corrosive', 'toxic', 'oxidizing'],
            precautions: 'safety equipment and handling'
        },
        type: 'lab_safety',
        subparts: [
            'FLAMMABLE (flame symbol):',
            '- Catches fire easily',
            '- Keep away from heat, sparks, open flames',
            '- Store in cool, ventilated area',
            'CORROSIVE (hand/material damage):',
            '- Burns skin, damages materials',
            '- Wear gloves, goggles, lab coat',
            '- Use fume hood if vapors present',
            'TOXIC (skull and crossbones):',
            '- Poisonous if inhaled, ingested, or absorbed',
            '- Avoid contact, use fume hood',
            '- Know antidote and first aid',
            'OXIDIZING (flame over circle):',
            '- Provides oxygen, intensifies fires',
            '- Keep away from flammable materials',
            '- Store separately from organic compounds'
        ],
        helper: 'Always read MSDS (Material Safety Data Sheet) before use',
        realWorldContext: 'GHS (Globally Harmonized System) standardizes hazard symbols worldwide',
        diagramInfo: {
            type: 'hazardSymbols',
            registryKey: 'hazardSymbols',
            renderOptions: {
                title: 'Chemical Hazard Symbols',
                showDescriptions: true,
                showGrid: true,
                symbols: ['flammable', 'corrosive', 'toxic', 'oxidizing', 'explosive', 'harmful']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hazard_symbols_identification_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Personal Protective Equipment (PPE)',
        problem: 'List and explain the purpose of essential safety equipment in a chemistry laboratory.',
        parameters: {
            equipment: ['goggles', 'gloves', 'lab_coat', 'fume_hood'],
            purpose: 'protection'
        },
        type: 'lab_safety',
        subparts: [
            'SAFETY GOGGLES:',
            '- Protect eyes from splashes, fumes, flying debris',
            '- Must be worn at ALL times in lab',
            '- Regular glasses NOT sufficient',
            'LAB COAT:',
            '- Protects skin and clothing from chemicals',
            '- Should be buttoned/fastened',
            '- Made of flame-resistant material',
            'GLOVES:',
            '- Protect hands from chemicals, heat, sharp objects',
            '- Type depends on chemical (nitrile, latex, heat-resistant)',
            '- Remove before touching face or leaving lab',
            'FUME HOOD:',
            '- Ventilated enclosure for toxic/flammable vapors',
            '- Work inside with sash lowered',
            '- Do NOT block airflow',
            'OTHER: Fire extinguisher, eye wash station, safety shower, first aid kit'
        ],
        helper: 'PPE is your first line of defense against laboratory hazards',
        realWorldContext: 'Many lab accidents preventable with proper PPE',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Laboratory Safety Equipment',
                showLabels: true,
                showUsage: true,
                items: ['goggles', 'gloves', 'lab_coat', 'fire_extinguisher', 'eye_wash', 'fume_hood']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `safety_equipment_ppe_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Emergency Response Procedures',
        problem: 'Describe the proper response to: (a) acid spill on skin, (b) fire in beaker, (c) chemical in eyes.',
        parameters: {
            emergencies: ['acid_spill', 'fire', 'eye_contact'],
            responses: ['first_aid', 'containment', 'evacuation']
        },
        type: 'lab_safety',
        subparts: [
            '(a) ACID SPILL ON SKIN:',
            '1. Immediately rinse with water for 15-20 minutes',
            '2. Remove contaminated clothing while rinsing',
            '3. Use safety shower if large area affected',
            '4. Do NOT use neutralizers (generates heat)',
            '5. Seek medical attention',
            '6. Report incident to instructor',
            '(b) FIRE IN BEAKER:',
            '1. If small: cover with watch glass to cut oxygen',
            '2. Turn off gas/heat sources nearby',
            '3. Do NOT use water on organic solvent fires',
            '4. If spreads: evacuate and pull fire alarm',
            '5. Use fire extinguisher: PASS method',
            '   Pull pin, Aim at base, Squeeze, Sweep',
            '(c) CHEMICAL IN EYES:',
            '1. Immediately go to eye wash station',
            '2. Hold eyelids open, flush 15-20 minutes',
            '3. Remove contact lenses if present',
            '4. Continue flushing even if painful',
            '5. Seek medical attention immediately',
            '6. Bring chemical MSDS to medical facility'
        ],
        helper: 'Know locations: eye wash, safety shower, fire extinguisher, exits',
        realWorldContext: 'Quick response critical - permanent damage can occur in seconds',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Emergency Response Equipment',
                showLabels: true,
                showUsage: true,
                highlightEmergency: true,
                items: ['eye_wash', 'safety_shower', 'fire_extinguisher', 'first_aid']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `emergency_response_procedures_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Chemical Storage and Compatibility',
        problem: 'Explain why acids and bases should be stored separately. What other incompatible pairs exist?',
        parameters: {
            incompatible: ['acids_bases', 'oxidizers_flammables', 'water_reactive'],
            storage: 'segregation'
        },
        type: 'lab_safety',
        subparts: [
            'ACIDS & BASES - SEPARATE:',
            '- Mixing causes violent exothermic reaction',
            '- Generates heat, can boil/splatter',
            '- Example: HCl + NaOH → heat + steam',
            '- Store in different cabinets',
            'OXIDIZERS & FLAMMABLES - SEPARATE:',
            '- Oxidizers provide O₂, intensify fires',
            '- Flammables easily ignited',
            '- Together: fire/explosion risk',
            '- Example: Keep HNO₃ away from ethanol',
            'WATER-REACTIVE - SEPARATE:',
            '- Some chemicals react violently with water',
            '- Example: alkali metals (Na, K), metal hydrides',
            '- Store in dry location, use inert atmosphere',
            'GENERAL RULES:',
            '- Alphabetical storage can be dangerous!',
            '- Store by compatibility class',
            '- Keep flammables in flammable cabinet',
            '- Corrosives in corrosion-resistant cabinet',
            '- Check MSDS for storage requirements'
        ],
        helper: 'Incompatible chemicals: never store together or on same shelf',
        realWorldContext: 'Improper storage has caused lab explosions and fires',
        diagramInfo: {
            type: 'hazardSymbols',
            registryKey: 'hazardSymbols',
            renderOptions: {
                title: 'Chemical Storage and Compatibility',
                showDescriptions: true,
                showGrid: true,
                showIncompatibilities: true,
                symbols: ['flammable', 'corrosive', 'oxidizing', 'water_reactive']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `chemical_storage_compatibility_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'General Lab Safety Rules',
        problem: 'List 10 essential safety rules that must be followed in a chemistry laboratory.',
        parameters: {
            category: 'general_safety',
            rules: 10
        },
        type: 'lab_safety',
        subparts: [
            '1. Always wear safety goggles (no exceptions)',
            '2. No food, drinks, or gum in lab',
            '3. Tie back long hair, secure loose clothing',
            '4. Know locations: exits, fire extinguisher, eye wash',
            '5. Never work alone in laboratory',
            '6. Read all labels before using chemicals',
            '7. Never pipette by mouth - use pipette bulb',
            '8. Add acid to water (not water to acid)',
            '   "Do as you oughta, add acid to water"',
            '9. Dispose of chemicals properly - not down sink',
            '10. Wash hands before leaving lab',
            'ADDITIONAL:',
            '- Report all accidents/spills immediately',
            '- Never smell chemicals directly (waft)',
            '- Point test tubes away from people when heating',
            '- Clean up spills immediately',
            '- Follow all written and verbal instructions'
        ],
        helper: 'When in doubt: ASK! Never guess with safety',
        realWorldContext: 'Most lab accidents are preventable with proper procedures',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Laboratory Safety Rules',
                showLabels: true,
                showUsage: true,
                showRules: true,
                items: ['goggles', 'gloves', 'lab_coat', 'fume_hood', 'eye_wash', 'fire_extinguisher']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `general_lab_safety_rules_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedLabApparatusDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Glassware Identification and Uses',
        problem: 'Identify each piece of glassware shown and state its primary use in the laboratory.',
        parameters: {
            glassware: ['beaker', 'flask', 'cylinder', 'burette', 'pipette', 'test_tube'],
            purposes: 'measurement and reactions'
        },
        type: 'lab_apparatus',
        subparts: [
            'BEAKER (cylindrical, flat bottom, spout):',
            '- Holding, mixing, heating liquids',
            '- NOT for accurate measurement',
            '- Graduations are approximate (±5%)',
            'ERLENMEYER FLASK (conical):',
            '- Mixing, heating, titrations',
            '- Narrow top reduces splashing',
            '- Can be swirled without spilling',
            'GRADUATED CYLINDER (tall, narrow):',
            '- Measuring liquid volumes',
            '- More accurate than beaker (±1%)',
            '- Read at meniscus (bottom of curve)',
            'BURETTE (long tube with stopcock):',
            '- Dispensing precise volumes in titrations',
            '- Very accurate (±0.05 mL)',
            '- Read from top down',
            'PIPETTE (narrow tube with bulb):',
            '- Transferring precise volumes',
            '- Volumetric pipette: one volume only',
            '- Very accurate (±0.02 mL)',
            'TEST TUBE:',
            '- Small-scale reactions and tests',
            '- Heating small samples',
            '- Qualitative analysis'
        ],
        helper: 'Accuracy: Volumetric flask = Pipette = Burette > Graduated cylinder > Beaker',
        realWorldContext: 'Choosing correct glassware ensures accurate results',
        diagramInfo: {
            type: 'glasswareCollection',
            registryKey: 'laboratoryGlassware',
            renderOptions: {
                title: 'Common Laboratory Glassware',
                showLabels: true,
                showVolumes: true,
                items: ['beaker', 'flask', 'cylinder', 'burette', 'pipette', 'test_tube']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `glassware_identification_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Titration Setup',
        problem: 'Using the diagram, identify each component of a titration setup and explain its role.',
        parameters: {
            apparatus: 'titration',
            components: ['burette', 'flask', 'clamp', 'indicator']
        },
        type: 'lab_apparatus',
        subparts: [
            'TITRATION SETUP COMPONENTS:',
            '1. BURETTE (vertical tube with stopcock):',
            '   - Holds titrant (known concentration)',
            '   - Allows precise drop-by-drop addition',
            '   - Read volume before and after',
            '2. RING STAND & CLAMP:',
            '   - Holds burette vertically',
            '   - Keeps setup stable and secure',
            '3. ERLENMEYER FLASK:',
            '   - Contains analyte (unknown concentration)',
            '   - Conical shape allows swirling',
            '   - White paper underneath shows color change',
            '4. INDICATOR (in flask):',
            '   - Phenolphthalein, methyl orange, etc.',
            '   - Changes color at equivalence point',
            '   - Signals when to stop adding titrant',
            'PROCEDURE:',
            '- Record initial burette reading',
            '- Add titrant dropwise while swirling',
            '- Stop at color change (endpoint)',
            '- Record final burette reading',
            '- Volume used = final - initial'
        ],
        helper: 'Endpoint should match equivalence point (where moles equal)',
        realWorldContext: 'Titrations determine unknown concentrations precisely',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'titrationSetup',
            renderOptions: {
                title: 'Titration Setup',
                showBurette: true,
                showFlask: true,
                showLabels: true,
                apparatus: 'titration'
            },
            canvasSize: { width: 700, height: 900 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `titration_setup_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Distillation Apparatus Setup',
        problem: 'Identify all components of the distillation setup shown and explain the purpose of each.',
        parameters: {
            apparatus: 'distillation',
            type: 'simple',
            components: 7
        },
        type: 'lab_apparatus',
        subparts: [
            'SIMPLE DISTILLATION COMPONENTS:',
            '1. ROUND-BOTTOM FLASK:',
            '   - Contains liquid mixture to be separated',
            '   - Round shape distributes heat evenly',
            '   - Prevents superheating/bumping',
            '2. HEATING MANTLE/BUNSEN BURNER:',
            '   - Heat source to boil liquid',
            '   - Controlled temperature increase',
            '3. THERMOMETER:',
            '   - Measures vapor temperature',
            '   - Bulb at top of distillation flask',
            '   - Indicates which component is distilling',
            '4. DISTILLATION HEAD/ADAPTER:',
            '   - Connects flask to condenser',
            '   - Has thermometer port',
            '5. CONDENSER (Liebig condenser):',
            '   - Cold water jacket cools vapor to liquid',
            '   - Water IN at bottom, OUT at top',
            '   - Vapor travels through inner tube',
            '6. RECEIVING FLASK:',
            '   - Collects purified distillate',
            '   - Distillate = lower boiling point component',
            '7. CLAMPS & STANDS:',
            '   - Support apparatus securely',
            'PRINCIPLE:',
            '- Separates by boiling point difference',
            '- Lower bp component vaporizes first',
            '- Vapor cools in condenser → liquid',
            '- Collects in receiving flask'
        ],
        helper: 'Simple distillation: bp difference >25°C; Fractional: bp difference <25°C',
        realWorldContext: 'Distillation purifies liquids and separates mixtures',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'distillationApparatus',
            renderOptions: {
                title: 'Simple Distillation Apparatus',
                showLabels: true,
                showHeatSource: true,
                apparatus: 'distillation'
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `distillation_apparatus_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Filtration Apparatus',
        problem: 'Describe the setup and procedure for gravity filtration. What is each component\'s role?',
        parameters: {
            apparatus: 'filtration',
            type: 'gravity',
            purpose: 'separate solid from liquid'
        },
        type: 'lab_apparatus',
        subparts: [
            'GRAVITY FILTRATION SETUP:',
            '1. FILTER PAPER (circular):',
            '   - Folded into cone shape',
            '   - Porous - allows liquid through, traps solid',
            '   - Choose appropriate pore size',
            '2. FUNNEL (conical glass):',
            '   - Holds filter paper',
            '   - Filter paper should fit snugly',
            '   - Stem touches beaker side',
            '3. RING STAND & RING:',
            '   - Supports funnel above beaker',
            '   - Adjustable height',
            '4. BEAKER (receiving vessel):',
            '   - Collects filtrate (liquid that passes through)',
            '   - Must be large enough for volume',
            'FOLDING FILTER PAPER:',
            '- Fold circle in half',
            '- Fold in half again (quarter)',
            '- Tear small corner off one layer',
            '- Open to form cone',
            '- Fit in funnel, moisten with solvent',
            'PROCEDURE:',
            '- Pour mixture slowly down glass rod',
            '- Rod directs flow to paper, prevents splashing',
            '- Residue (solid) stays on paper',
            '- Filtrate (liquid) collects in beaker'
        ],
        helper: 'Vacuum filtration faster than gravity for fine precipitates',
        realWorldContext: 'Filtration isolates precipitates from reactions',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'filtrationSetup',
            renderOptions: {
                title: 'Filtration Setup',
                showLabels: true,
                showProcess: true,
                apparatus: 'filtration'
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `filtration_apparatus_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Collection Over Water',
        problem: 'Explain the setup for collecting gas over water. Why must vapor pressure be considered?',
        parameters: {
            apparatus: 'gas_collection',
            method: 'water_displacement',
            correction: 'vapor_pressure'
        },
        type: 'lab_apparatus',
        subparts: [
            'GAS COLLECTION OVER WATER SETUP:',
            '1. REACTION VESSEL:',
            '   - Where gas is generated',
            '   - Example: Zn + HCl → H₂ + ZnCl₂',
            '2. DELIVERY TUBE:',
            '   - Carries gas from reaction to collection',
            '   - Rubber tubing or glass tube',
            '3. PNEUMATIC TROUGH:',
            '   - Container filled with water',
            '4. COLLECTION TUBE (inverted):',
            '   - Initially filled with water',
            '   - Inverted over water',
            '   - Gas rises, displaces water',
            '5. WATER:',
            '   - Seals system, prevents gas escape',
            '   - Gas collected is saturated with water vapor',
            'VAPOR PRESSURE CORRECTION:',
            '- Collected gas contains water vapor',
            '- Total pressure: P_total = P_gas + P_H₂O',
            '- Must subtract water vapor pressure',
            '- P_gas = P_total - P_H₂O(vapor)',
            '- Vapor pressure depends on temperature',
            '- Example at 25°C: P_H₂O = 23.8 mmHg',
            'ADVANTAGES:',
            '- Simple, inexpensive setup',
            '- Good for insoluble gases (H₂, O₂, N₂)',
            'LIMITATIONS:',
            '- Cannot use for water-soluble gases (HCl, NH₃)',
            '- Cannot use for gases that react with water'
        ],
        helper: 'Gas must be insoluble in water for this method',
        realWorldContext: 'Lavoisier used this to discover oxygen\'s role in combustion',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'gasCollection',
            renderOptions: {
                title: 'Gas Collection Over Water',
                showWater: true,
                showGas: true,
                showLabels: true,
                apparatus: 'gas_collection'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `gas_collection_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


// ============================================================================
// STOICHIOMETRY GENERATORS (9 generators)
// ============================================================================

generateRelatedMoleCalculationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Moles from Mass - Water',
        problem: 'Calculate the number of moles in 36.0 g of water (H₂O). Show using the mole triangle.',
        parameters: {
            mass: 36.0,
            compound: 'H2O',
            molarMass: 18.02,
            findMoles: true
        },
        type: 'mole_calculations',
        subparts: [
            'Calculate molar mass: H₂O = 2(1.01) + 16.00 = 18.02 g/mol',
            'Use mole triangle: moles = mass / Mr',
            'moles = 36.0 g ÷ 18.02 g/mol',
            'Answer: 2.00 moles of H₂O'
        ],
        helper: 'formula: n = m/M where n=moles, m=mass(g), M=molar mass(g/mol)',
        realWorldContext: 'Calculating water molecules in a sample',
        diagramInfo: {
            type: 'moleTriangle',
            registryKey: 'moleTriangle',
            renderOptions: {
                showFormulas: true,
                showUnits: true,
                highlightMassToMoles: true
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
            const filename = `mole_triangle_mass_to_moles_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Mass from Moles - Sodium Chloride',
        problem: 'What is the mass of 0.5 moles of NaCl? Use the mole triangle to solve.',
        parameters: {
            moles: 0.5,
            compound: 'NaCl',
            molarMass: 58.44,
            findMass: true
        },
        type: 'mole_calculations',
        subparts: [
            'Molar mass of NaCl: Na(22.99) + Cl(35.45) = 58.44 g/mol',
            'Use mole triangle: mass = moles × Mr',
            'mass = 0.5 mol × 58.44 g/mol',
            'Answer: 29.22 g of NaCl'
        ],
        helper: 'formula: m = n × M (cover up what you want to find in triangle)',
        realWorldContext: 'Measuring salt for laboratory preparation',
        diagramInfo: {
            type: 'moleTriangle',
            registryKey: 'moleTriangle',
            renderOptions: {
                showFormulas: true,
                showUnits: true,
                highlightMolesToMass: true
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
            const filename = `mole_triangle_moles_to_mass_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Avogadro\'s Number - Particle Count',
        problem: 'How many molecules are in 2.5 moles of CO₂? Show conversion using particle triangle.',
        parameters: {
            moles: 2.5,
            compound: 'CO2',
            findParticles: true,
            avogadroNumber: 6.022e23
        },
        type: 'mole_calculations',
        subparts: [
            'Use Avogadro\'s number: Nₐ = 6.022 × 10²³ particles/mol',
            'Particles = moles × Nₐ',
            'Particles = 2.5 mol × 6.022 × 10²³',
            'Answer: 1.51 × 10²⁴ molecules of CO₂'
        ],
        helper: 'formula: Number of particles = n × Nₐ where Nₐ = 6.022 × 10²³',
        realWorldContext: 'Counting molecules at atomic scale',
        diagramInfo: {
            type: 'particleTriangle',
            registryKey: 'particleTriangle',
            renderOptions: {
                showFormulas: true,
                showUnits: true,
                highlightMolesToParticles: true
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
            const filename = `particle_triangle_moles_to_particles_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Molar Mass Calculation',
        problem: 'Calculate the molar mass of Ca(OH)₂ and show the breakdown.',
        parameters: {
            compound: 'Ca(OH)2',
            calculateMolarMass: true,
            showBreakdown: true
        },
        type: 'mole_calculations',
        subparts: [
            'Identify atoms: 1 Ca, 2 O, 2 H',
            'Ca: 1 × 40.08 = 40.08 g/mol',
            'O: 2 × 16.00 = 32.00 g/mol',
            'H: 2 × 1.01 = 2.02 g/mol',
            'Total: 40.08 + 32.00 + 2.02 = 74.10 g/mol'
        ],
        helper: 'Molar mass = sum of (count × atomic mass) for each element',
        realWorldContext: 'Calcium hydroxide (slaked lime) molar mass',
        diagramInfo: {
            type: 'molarMass',
            registryKey: 'molarMass',
            renderOptions: {
                showBreakdown: true,
                showCalculation: true,
                compound: 'Ca(OH)2'
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
            const filename = `molar_mass_calcium_hydroxide_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Unit Conversion Map',
        problem: 'Convert 44 g of CO₂ to molecules. Show all conversion steps using the roadmap.',
        parameters: {
            mass: 44,
            compound: 'CO2',
            molarMass: 44.01,
            findParticles: true,
            showAllSteps: true
        },
        type: 'mole_calculations',
        subparts: [
            'Step 1: Mass → Moles: 44 g ÷ 44.01 g/mol = 1.00 mol',
            'Step 2: Moles → Particles: 1.00 mol × 6.022 × 10²³',
            'Answer: 6.022 × 10²³ molecules',
            'Conversion pathway: g → mol → molecules'
        ],
        helper: 'Always convert to moles first, then to desired unit',
        realWorldContext: 'Multi-step stoichiometry conversions',
        diagramInfo: {
            type: 'unitConversionMap',
            registryKey: 'unitConversionMap',
            renderOptions: {
                showArrows: true,
                showFormulas: true,
                highlightPath: ['mass', 'moles', 'particles']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `unit_conversion_map_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


generateRelatedEquationBalancingDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion Equation',
        problem: 'Balance: C₃H₈ + O₂ → CO₂ + H₂O. Show particle representation.',
        parameters: {
            equation: 'C3H8 + O2 → CO2 + H2O',
            reactionType: 'combustion',
            showParticles: true
        },
        type: 'equation_balancing',
        subparts: [
            'Count atoms: Reactants: C=3, H=8, O=2; Products: C=1, H=2, O=3',
            'Balance C: 1 C₃H₈ → 3 CO₂',
            'Balance H: 1 C₃H₈ → 4 H₂O',
            'Balance O: Need 10 O atoms → 5 O₂',
            'Final: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O'
        ],
        helper: 'Balance order: metals, non-metals, H and O last; Check all atoms equal',
        realWorldContext: 'Propane combustion in gas stoves',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'C3H8 + O2 → CO2 + H2O'
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
            const filename = `balancing_combustion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Synthesis',
        problem: 'Balance: N₂ + H₂ → NH₃. Show molecular representation.',
        parameters: {
            equation: 'N2 + H2 → NH3',
            reactionType: 'synthesis',
            showMolecules: true
        },
        type: 'equation_balancing',
        subparts: [
            'Count atoms: Reactants: N=2, H=2; Products: N=1, H=3',
            'Balance N: Need 2 NH₃',
            'Balance H: Need 3 H₂',
            'Final: N₂ + 3H₂ → 2NH₃',
            'Verify: N: 2=2 ✓, H: 6=6 ✓'
        ],
        helper: 'Haber process: industrial ammonia synthesis',
        realWorldContext: 'Ammonia production for fertilizers',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'N2 + H2 → NH3'
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
            const filename = `balancing_synthesis_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Double Displacement',
        problem: 'Balance: AgNO₃ + CaCl₂ → AgCl + Ca(NO₃)₂. Show ionic exchange.',
        parameters: {
            equation: 'AgNO3 + CaCl2 → AgCl + Ca(NO3)2',
            reactionType: 'double_displacement',
            showIons: true
        },
        type: 'equation_balancing',
        subparts: [
            'Identify polyatomic: NO₃⁻ stays together',
            'Count: Ag=1, NO₃=1, Ca=1, Cl=2',
            'Balance Ag and Cl: 2AgNO₃ + CaCl₂',
            'Products: 2AgCl + Ca(NO₃)₂',
            'Final: 2AgNO₃ + CaCl₂ → 2AgCl + Ca(NO₃)₂'
        ],
        helper: 'Treat polyatomic ions (NO₃⁻, SO₄²⁻) as single units',
        realWorldContext: 'Silver chloride precipitation',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                showIons: true,
                equation: 'AgNO3 + CaCl2 → AgCl + Ca(NO3)2'
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `balancing_double_displacement_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Decomposition Reaction',
        problem: 'Balance: Al₂O₃ → Al + O₂. Show atoms before and after.',
        parameters: {
            equation: 'Al2O3 → Al + O2',
            reactionType: 'decomposition',
            showAtoms: true
        },
        type: 'equation_balancing',
        subparts: [
            'Reactant: Al=2, O=3',
            'Balance Al: Need 2 Al',
            'Balance O: Need ³⁄₂ O₂ or multiply all by 2',
            'Multiply by 2: 2Al₂O₃ → 4Al + 3O₂',
            'Verify: Al: 4=4 ✓, O: 6=6 ✓'
        ],
        helper: 'Use fractions first, then multiply to get whole numbers',
        realWorldContext: 'Aluminum extraction from bauxite',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'Al2O3 → Al + O2'
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
            const filename = `balancing_decomposition_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Combustion',
        problem: 'Balance: C₆H₁₂O₆ + O₂ → CO₂ + H₂O (glucose combustion). Show step-by-step.',
        parameters: {
            equation: 'C6H12O6 + O2 → CO2 + H2O',
            reactionType: 'combustion',
            showSteps: true
        },
        type: 'equation_balancing',
        subparts: [
            'Balance C: 1 C₆H₁₂O₆ → 6 CO₂',
            'Balance H: 1 C₆H₁₂O₆ → 6 H₂O',
            'Count O needed: (6×2) + (6×1) = 18 O atoms',
            'Reactant O: 6 in glucose, need 12 more from O₂ → 6 O₂',
            'Final: C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O'
        ],
        helper: 'For complex molecules, balance C, then H, then O last',
        realWorldContext: 'Cellular respiration - glucose metabolism',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                showStepByStep: true,
                equation: 'C6H12O6 + O2 → CO2 + H2O'
            },
            canvasSize: { width: 1200, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `balancing_glucose_combustion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedMassMassStoichiometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mass-Mass Calculation',
        problem: 'How many grams of CO₂ are produced from 10 g of CH₄? CH₄ + 2O₂ → CO₂ + 2H₂O',
        parameters: {
            equation: 'CH4 + 2O2 → CO2 + 2H2O',
            givenMass: 10,
            givenCompound: 'CH4',
            findMass: 'CO2'
        },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'Step 1: Convert g CH₄ to mol: 10 g ÷ 16.04 g/mol = 0.623 mol CH₄',
            'Step 2: Mole ratio CH₄:CO₂ = 1:1',
            'Step 3: mol CO₂ = 0.623 mol',
            'Step 4: Convert to g: 0.623 mol × 44.01 g/mol = 27.4 g CO₂'
        ],
        helper: 'Stoichiometry roadmap: g → mol → mol → g (use mole ratios from balanced equation)',
        realWorldContext: 'Methane combustion CO₂ emissions',
        diagramInfo: {
            type: 'stoichiometryRoadmap',
            registryKey: 'stoichiometryRoadmap',
            renderOptions: {
                showSteps: true,
                showArrows: true,
                highlightPath: true
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
            const filename = `stoichiometry_roadmap_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Mass-Mass',
        problem: 'Find mass of H₂O from 4 g H₂: 2H₂ + O₂ → 2H₂O. Show mole ratio.',
        parameters: {
            equation: '2H2 + O2 → 2H2O',
            givenMass: 4,
            givenCompound: 'H2',
            findMass: 'H2O'
        },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'mol H₂: 4 g ÷ 2.02 g/mol = 1.98 mol',
            'Mole ratio H₂:H₂O = 2:2 = 1:1',
            'mol H₂O = 1.98 mol',
            'mass H₂O: 1.98 mol × 18.02 g/mol = 35.7 g'
        ],
        helper: 'When mole ratio is 1:1, moles of product = moles of reactant',
        realWorldContext: 'Water formation from hydrogen combustion',
        diagramInfo: {
            type: 'stoichiometricRatio',
            registryKey: 'stoichiometricRatio',
            renderOptions: {
                showMoleRatios: true,
                showTable: true,
                equation: '2H2 + O2 → 2H2O'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `stoichiometric_ratio_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multi-Step Stoichiometry',
        problem: 'In 2Al + 3Cl₂ → 2AlCl₃, find g AlCl₃ from 50 g Al. Show conversion pathway.',
        parameters: {
            equation: '2Al + 3Cl2 → 2AlCl3',
            givenMass: 50,
            givenCompound: 'Al',
            findMass: 'AlCl3'
        },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'mol Al: 50 g ÷ 26.98 g/mol = 1.853 mol',
            'Mole ratio Al:AlCl₃ = 2:2 = 1:1',
            'mol AlCl₃ = 1.853 mol',
            'M(AlCl₃) = 26.98 + 3(35.45) = 133.33 g/mol',
            'mass AlCl₃: 1.853 mol × 133.33 g/mol = 247 g'
        ],
        helper: 'Always convert to moles, use mole ratio, convert to desired unit',
        realWorldContext: 'Aluminum chloride synthesis',
        diagramInfo: {
            type: 'unitConversionMap',
            registryKey: 'unitConversionMap',
            renderOptions: {
                showArrows: true,
                showFormulas: true,
                highlightPath: ['mass', 'moles', 'moles', 'mass']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `conversion_map_multistep_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion Stoichiometry',
        problem: 'C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O. Find g CO₂ from 46 g ethanol.',
        parameters: {
            equation: 'C2H5OH + 3O2 → 2CO2 + 3H2O',
            givenMass: 46,
            givenCompound: 'C2H5OH',
            findMass: 'CO2'
        },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'M(C₂H₅OH) = 2(12.01) + 6(1.01) + 16.00 = 46.08 g/mol',
            'mol ethanol: 46 g ÷ 46.08 g/mol = 0.998 mol',
            'Mole ratio C₂H₅OH:CO₂ = 1:2',
            'mol CO₂ = 0.998 × 2 = 1.996 mol',
            'mass CO₂: 1.996 mol × 44.01 g/mol = 87.9 g'
        ],
        helper: 'Mole ratio 1:2 means product moles = 2 × reactant moles',
        realWorldContext: 'Ethanol fuel combustion emissions',
        diagramInfo: {
            type: 'stoichiometryRoadmap',
            registryKey: 'stoichiometryRoadmap',
            renderOptions: {
                showSteps: true,
                showArrows: true,
                highlightMoleRatio: true
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
            const filename = `stoichiometry_ethanol_combustion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molar Mass Calculation Required',
        problem: 'Find g NH₃ from 28 g N₂: N₂ + 3H₂ → 2NH₃. Calculate molar masses first.',
        parameters: {
            equation: 'N2 + 3H2 → 2NH3',
            givenMass: 28,
            givenCompound: 'N2',
            findMass: 'NH3',
            calculateMolarMasses: true
        },
        type: 'mass_mass_stoichiometry',
        subparts: [
            'M(N₂) = 2(14.01) = 28.02 g/mol',
            'M(NH₃) = 14.01 + 3(1.01) = 17.04 g/mol',
            'mol N₂: 28 g ÷ 28.02 g/mol = 0.999 mol',
            'Mole ratio N₂:NH₃ = 1:2, so mol NH₃ = 0.999 × 2 = 1.998 mol',
            'mass NH₃: 1.998 mol × 17.04 g/mol = 34.0 g'
        ],
        helper: 'Always calculate molar masses before starting stoichiometry',
        realWorldContext: 'Haber process ammonia production',
        diagramInfo: {
            type: 'molarMass',
            registryKey: 'molarMass',
            renderOptions: {
                showBreakdown: true,
                showCalculation: true,
                compareCompounds: true,
                compounds: ['N2', 'NH3']
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
            const filename = `molar_mass_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedLimitingReagentDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Limiting Reagent - Visual',
        problem: '2H₂ + O₂ → 2H₂O. Given 4 mol H₂ and 3 mol O₂, identify limiting reagent with diagram.',
        parameters: {
            equation: '2H2 + O2 → 2H2O',
            amounts: { H2: 4, O2: 3 },
            findLimitingReagent: true,
            visualize: true
        },
        type: 'limiting_reagent',
        subparts: [
            'Mole ratio H₂:O₂ = 2:1',
            'Check H₂: 4 mol H₂ needs 4÷2 = 2 mol O₂ (have 3 mol ✓)',
            'Check O₂: 3 mol O₂ needs 3×2 = 6 mol H₂ (only have 4 mol ✗)',
            'H₂ is limiting reagent (runs out first)',
            'Excess O₂ = 3 - 2 = 1 mol remaining'
        ],
        helper: 'Limiting reagent: the reactant that runs out first; determines product amount',
        realWorldContext: 'Hydrogen fuel cells',
        diagramInfo: {
            type: 'limitingReagent',
            registryKey: 'limitingReagent',
            renderOptions: {
                showParticles: true,
                showExcess: true,
                showCalculations: true,
                reaction: 'H2 + Cl2 → 2HCl',
                H2_amount: 4,
                Cl2_amount: 3
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
            const filename = `limiting_reagent_visual_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Limiting Reagent',
        problem: 'N₂ + 3H₂ → 2NH₃. With 1 mol N₂ and 2 mol H₂, which is limiting? Use bar model.',
        parameters: {
            equation: 'N2 + 3H2 → 2NH3',
            amounts: { N2: 1, H2: 2 },
            findLimitingReagent: true,
            useBarModel: true
        },
        type: 'limiting_reagent',
        subparts: [
            'Mole ratio N₂:H₂ = 1:3',
            'Check N₂: 1 mol N₂ needs 1×3 = 3 mol H₂ (only have 2 mol ✗)',
            'Check H₂: 2 mol H₂ needs 2÷3 = 0.67 mol N₂ (have 1 mol ✓)',
            'H₂ is limiting reagent',
            'Product: 2 mol H₂ makes (2÷3)×2 = 1.33 mol NH₃'
        ],
        helper: 'Method: Divide available by coefficient; smallest value = limiting',
        realWorldContext: 'Industrial ammonia synthesis',
        diagramInfo: {
            type: 'limitingBar',
            registryKey: 'limitingReagentBar',
            renderOptions: {
                showRequired: true,
                showAvailable: true,
                reactants: ['N2', 'H2'],
                amounts: [1, 2],
                ratio: [1, 3]
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
            const filename = `limiting_reagent_bar_model_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass-Based Limiting Reagent',
        problem: 'Fe₂O₃ + 3C → 2Fe + 3CO. Given 50g Fe₂O₃ and 20g C, find limiting reagent and g Fe produced.',
        parameters: {
            equation: 'Fe2O3 + 3C → 2Fe + 3CO',
            masses: { Fe2O3: 50, C: 20 },
            findLimitingReagent: true,
            calculateProduct: true
        },
        type: 'limiting_reagent',
        subparts: [
            'mol Fe₂O₃: 50 g ÷ 159.69 g/mol = 0.313 mol',
            'mol C: 20 g ÷ 12.01 g/mol = 1.665 mol',
            'Check Fe₂O₃: 0.313 mol needs 0.313×3 = 0.939 mol C ✓',
            'Check C: 1.665 mol needs 1.665÷3 = 0.555 mol Fe₂O₃ (only 0.313 ✗)',
            'Fe₂O₃ is limiting; makes 0.313×2 = 0.626 mol Fe = 35.0 g Fe'
        ],
        helper: 'Convert masses to moles first, then find limiting reagent',
        realWorldContext: 'Iron smelting in blast furnace',
        diagramInfo: {
            type: 'limitingReagent',
            registryKey: 'limitingReagent',
            renderOptions: {
                showParticles: true,
                showExcess: true,
                showCalculations: true,
                showMassConversion: true
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `limiting_reagent_mass_based_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Excess Reagent Calculation',
        problem: '2Al + 3Cl₂ → 2AlCl₃. With 5 mol Al and 9 mol Cl₂, find excess reagent amount remaining.',
        parameters: {
            equation: '2Al + 3Cl2 → 2AlCl3',
            amounts: { Al: 5, Cl2: 9 },
            findExcess: true
        },
        type: 'limiting_reagent',
        subparts: [
            'Check Al: 5 mol Al needs 5×(3/2) = 7.5 mol Cl₂ ✓',
            'Check Cl₂: 9 mol Cl₂ needs 9×(2/3) = 6 mol Al (only 5 ✗)',
            'Al is limiting',
            'Cl₂ used: 5 mol Al × (3/2) = 7.5 mol',
            'Excess Cl₂: 9 - 7.5 = 1.5 mol remaining'
        ],
        helper: 'Excess = Available - Used (calculate used from limiting reagent)',
        realWorldContext: 'Chemical manufacturing efficiency',
        diagramInfo: {
            type: 'limitingBar',
            registryKey: 'limitingReagentBar',
            renderOptions: {
                showRequired: true,
                showAvailable: true,
                showExcess: true,
                highlightExcess: true,
                reactants: ['Al', 'Cl2'],
                amounts: [5, 9],
                ratio: [2, 3]
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `excess_reagent_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Real-World Limiting Reagent',
        problem: 'Sandwich analogy: 2 slices bread + 1 slice cheese = 1 sandwich. With 10 bread, 7 cheese, how many sandwiches? What\'s left over?',
        parameters: {
            items: { bread: 10, cheese: 7 },
            ratio: { bread: 2, cheese: 1 },
            findLimiting: true,
            realWorldAnalogy: true
        },
        type: 'limiting_reagent',
        subparts: [
            'Ratio: 2 bread : 1 cheese per sandwich',
            'Check bread: 10 bread makes 10÷2 = 5 sandwiches ✓',
            'Check cheese: 7 cheese makes 7÷1 = 7 sandwiches (need 14 bread ✗)',
            'Bread is limiting: make 5 sandwiches',
            'Leftover: 7-5 = 2 slices cheese remain'
        ],
        helper: 'Limiting reagent concept applies to everyday recipes and ratios',
        realWorldContext: 'Recipe scaling and ingredient planning',
        diagramInfo: {
            type: 'limitingReagent',
            registryKey: 'limitingReagent',
            renderOptions: {
                showParticles: true,
                showExcess: true,
                showCalculations: true,
                realWorldMode: true
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
            const filename = `limiting_reagent_sandwich_analogy_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedPercentYieldDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Percent Yield Calculation',
        problem: 'Theoretical yield: 50 g, Actual yield: 42 g. Calculate percent yield with visual comparison.',
        parameters: {
            theoretical: 50,
            actual: 42,
            calculatePercentYield: true
        },
        type: 'percent_yield',
        subparts: [
            'Percent Yield = (Actual / Theoretical) × 100%',
            'Percent Yield = (42 g / 50 g) × 100%',
            'Percent Yield = 0.84 × 100%',
            'Answer: 84% yield'
        ],
        helper: '% Yield = (Actual ÷ Theoretical) × 100%; Perfect yield = 100%, typical 70-90%',
        realWorldContext: 'Measuring reaction efficiency in lab',
        diagramInfo: {
            type: 'yieldDiagram',
            registryKey: 'yieldDiagram',
            renderOptions: {
                showPercentage: true,
                showBars: true,
                theoretical: 50,
                actual: 42
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
            const filename = `percent_yield_visual_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Finding Actual Yield',
        problem: 'Theoretical yield = 100 g, Percent yield = 75%. Find actual yield.',
        parameters: {
            theoretical: 100,
            percentYield: 75,
            findActual: true
        },
        type: 'percent_yield',
        subparts: [
            'Rearrange: Actual = (% Yield / 100) × Theoretical',
            'Actual = (75 / 100) × 100 g',
            'Actual = 0.75 × 100 g',
            'Answer: 75 g actual yield'
        ],
        helper: 'Actual yield = (% yield ÷ 100) × theoretical yield',
        realWorldContext: 'Predicting product amount from efficiency',
        diagramInfo: {
            type: 'yieldDiagram',
            registryKey: 'yieldDiagram',
            renderOptions: {
                showPercentage: true,
                showBars: true,
                theoretical: 100,
                actual: 75,
                highlightActual: true
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
            const filename = `finding_actual_yield_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Yield Problem',
        problem: '2H₂ + O₂ → 2H₂O. 10g H₂ reacts, produces 85g H₂O. Calculate theoretical yield and % yield.',
        parameters: {
            equation: '2H2 + O2 → 2H2O',
            givenMass: 10,
            givenCompound: 'H2',
            actualYield: 85,
            calculateBoth: true
        },
        type: 'percent_yield',
        subparts: [
            'Step 1: Find theoretical yield',
            'mol H₂: 10 g ÷ 2.02 g/mol = 4.95 mol',
            'Ratio H₂:H₂O = 2:2 = 1:1, so mol H₂O = 4.95 mol',
            'Theoretical: 4.95 mol × 18.02 g/mol = 89.2 g',
            'Step 2: % Yield = (85 / 89.2) × 100% = 95.3%'
        ],
        helper: 'Find theoretical yield from stoichiometry, then calculate % yield',
        realWorldContext: 'Water production efficiency',
        diagramInfo: {
            type: 'stoichiometryRoadmap',
            registryKey: 'stoichiometryRoadmap',
            renderOptions: {
                showSteps: true,
                showArrows: true,
                includeYieldCalculation: true
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `complete_yield_problem_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Theoretical Yield',
        problem: 'Actual yield = 65 g, Percent yield = 80%. Calculate theoretical yield.',
        parameters: {
            actual: 65,
            percentYield: 80,
            findTheoretical: true
        },
        type: 'percent_yield',
        subparts: [
            'Rearrange: Theoretical = Actual / (% Yield / 100)',
            'Theoretical = 65 g / (80 / 100)',
            'Theoretical = 65 g / 0.80',
            'Answer: 81.25 g theoretical yield'
        ],
        helper: 'Theoretical yield = actual yield ÷ (% yield ÷ 100)',
        realWorldContext: 'Determining maximum possible product',
        diagramInfo: {
            type: 'yieldDiagram',
            registryKey: 'yieldDiagram',
            renderOptions: {
                showPercentage: true,
                showBars: true,
                theoretical: 81.25,
                actual: 65,
                highlightTheoretical: true
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
            const filename = `finding_theoretical_yield_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Yield with Limiting Reagent',
        problem: 'N₂ + 3H₂ → 2NH₃. Given 5 mol N₂, 10 mol H₂. Theoretical = 13.3 mol NH₃, Actual = 11 mol. Find % yield.',
        parameters: {
            equation: 'N2 + 3H2 → 2NH3',
            amounts: { N2: 5, H2: 10 },
            theoretical: 13.3,
            actual: 11,
            hasLimitingReagent: true
        },
        type: 'percent_yield',
        subparts: [
            'Step 1: Identify limiting reagent',
            'H₂ is limiting (10 mol H₂ needs only 3.33 mol N₂)',
            'Theoretical yield given: 13.3 mol NH₃',
            'Step 2: Calculate % yield',
            '% Yield = (11 / 13.3) × 100% = 82.7%'
        ],
        helper: 'With limiting reagent, use it to find theoretical yield first',
        realWorldContext: 'Industrial ammonia synthesis efficiency',
        diagramInfo: {
            type: 'yieldDiagram',
            registryKey: 'yieldDiagram',
            renderOptions: {
                showPercentage: true,
                showBars: true,
                theoretical: 13.3,
                actual: 11,
                showLimitingReagent: true
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
            const filename = `yield_with_limiting_reagent_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedGasStoichiometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gas Volume at STP',
        problem: 'Calculate volume of 2.5 moles of N₂ at STP. Show gas triangle.',
        parameters: {
            moles: 2.5,
            compound: 'N2',
            temperature: 273.15,
            pressure: 1.0,
            findVolume: true
        },
        type: 'gas_stoichiometry',
        subparts: [
            'At STP: 1 mole of any gas = 22.4 L (molar volume)',
            'Volume = moles × 22.4 L/mol',
            'Volume = 2.5 mol × 22.4 L/mol',
            'Answer: 56.0 L of N₂'
        ],
        helper: 'STP conditions: 273.15 K (0°C), 1 atm; Molar volume = 22.4 L/mol',
        realWorldContext: 'Standard gas volume calculations',
        diagramInfo: {
            type: 'gasTriangle',
            registryKey: 'gasTriangle',
            renderOptions: {
                showFormulas: true,
                showUnits: true,
                highlightMolesToVolume: true
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
            const filename = `gas_triangle_stp_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Moles from Gas Volume',
        problem: 'Find moles in 44.8 L of O₂ at STP. Use gas triangle.',
        parameters: {
            volume: 44.8,
            compound: 'O2',
            temperature: 273.15,
            pressure: 1.0,
            findMoles: true
        },
        type: 'gas_stoichiometry',
        subparts: [
            'Use gas triangle: moles = volume / 22.4',
            'moles = 44.8 L ÷ 22.4 L/mol',
            'moles = 2.00 mol',
            'Answer: 2.00 moles of O₂'
        ],
        helper: 'At STP: n = V ÷ 22.4 (where V in liters)',
        realWorldContext: 'Converting gas volumes to moles',
        diagramInfo: {
            type: 'gasTriangle',
            registryKey: 'gasTriangle',
            renderOptions: {
                showFormulas: true,
                showUnits: true,
                highlightVolumeToMoles: true
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
            const filename = `gas_triangle_volume_to_moles_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ideal Gas Law Calculation',
        problem: 'Find moles in 25.0 L gas at 300 K and 2.0 atm. Use PV=nRT diagram.',
        parameters: {
            volume: 25.0,
            temperature: 300,
            pressure: 2.0,
            findMoles: true,
            useIdealGasLaw: true
        },
        type: 'gas_stoichiometry',
        subparts: [
            'Use Ideal Gas Law: PV = nRT',
            'R = 0.0821 L·atm/(mol·K)',
            'Rearrange: n = PV / RT',
            'n = (2.0 atm × 25.0 L) / (0.0821 × 300 K)',
            'Answer: n = 2.03 mol'
        ],
        helper: 'PV = nRT where R = 0.0821 L·atm/(mol·K); Always use Kelvin for T',
        realWorldContext: 'Non-STP gas calculations',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                showVariables: true,
                showContainer: true,
                law: 'ideal',
                highlightPVnRT: true
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
            const filename = `ideal_gas_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gas Stoichiometry from Reaction',
        problem: '2H₂ + O₂ → 2H₂O. If 10 L H₂ reacts at STP, find volume O₂ needed.',
        parameters: {
            equation: '2H2 + O2 → 2H2O',
            volume: 10,
            compound: 'H2',
            findVolume: 'O2',
            atSTP: true
        },
        type: 'gas_stoichiometry',
        subparts: [
            'Gay-Lussac\'s Law: Volume ratios = mole ratios for gases',
            'From equation: H₂:O₂ = 2:1 (volume ratio)',
            'Volume O₂ = 10 L H₂ × (1/2)',
            'Answer: 5.0 L of O₂ needed'
        ],
        helper: 'For gases at same T and P: volume ratios = coefficient ratios',
        realWorldContext: 'Hydrogen combustion volume calculations',
        diagramInfo: {
            type: 'stoichiometricRatio',
            registryKey: 'stoichiometricRatio',
            renderOptions: {
                showMoleRatios: true,
                showTable: true,
                showVolumeRatios: true,
                equation: '2H2 + O2 → 2H2O'
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
            const filename = `gas_stoichiometry_volume_ratio_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass to Gas Volume',
        problem: 'CaCO₃ → CaO + CO₂. How many liters CO₂ (at STP) from 50 g CaCO₃?',
        parameters: {
            equation: 'CaCO3 → CaO + CO2',
            givenMass: 50,
            compound: 'CaCO3',
            findVolume: 'CO2',
            atSTP: true
        },
        type: 'gas_stoichiometry',
        subparts: [
            'Step 1: g CaCO₃ → mol CaCO₃',
            'mol CaCO₃ = 50 g ÷ 100.09 g/mol = 0.499 mol',
            'Step 2: Ratio CaCO₃:CO₂ = 1:1, so mol CO₂ = 0.499 mol',
            'Step 3: mol → volume at STP',
            'Volume = 0.499 mol × 22.4 L/mol = 11.2 L CO₂'
        ],
        helper: 'Pathway: mass → moles → moles → volume (use 22.4 L/mol at STP)',
        realWorldContext: 'Limestone decomposition',
        diagramInfo: {
            type: 'unitConversionMap',
            registryKey: 'unitConversionMap',
            renderOptions: {
                showArrows: true,
                showFormulas: true,
                highlightPath: ['mass', 'moles', 'moles', 'volume']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `mass_to_gas_volume_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedSolutionStoichiometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Molarity Calculation',
        problem: 'Calculate molarity: 2.0 moles NaCl dissolved in 500 mL solution. Show molarity diagram.',
        parameters: {
            moles: 2.0,
            volume: 0.5,
            compound: 'NaCl',
            findMolarity: true
        },
        type: 'solution_stoichiometry',
        subparts: [
            'Molarity (M) = moles / liters',
            'Volume in L: 500 mL = 0.500 L',
            'M = 2.0 mol / 0.500 L',
            'Answer: 4.0 M NaCl solution'
        ],
        helper: 'M = mol/L; Always convert mL to L first (divide by 1000)',
        realWorldContext: 'Preparing salt solutions',
        diagramInfo: {
            type: 'molarity',
            registryKey: 'molarity',
            renderOptions: {
                showBeaker: true,
                showFormula: true,
                showParticles: true,
                moles: 2,
                volume: 0.5
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `molarity_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Moles from Molarity',
        problem: 'Find moles in 250 mL of 0.5 M glucose solution.',
        parameters: {
            molarity: 0.5,
            volume: 0.25,
            compound: 'glucose',
            findMoles: true
        },
        type: 'solution_stoichiometry',
        subparts: [
            'Rearrange M = n/V to get n = M × V',
            'Volume in L: 250 mL = 0.250 L',
            'n = 0.5 M × 0.250 L',
            'Answer: 0.125 mol glucose'
        ],
        helper: 'moles = Molarity × Volume (in L)',
        realWorldContext: 'Calculating moles in solution samples',
        diagramInfo: {
            type: 'molarity',
            registryKey: 'molarity',
            renderOptions: {
                showBeaker: true,
                showFormula: true,
                showParticles: true,
                highlightMoles: true,
                molarity: 0.5,
                volume: 0.25
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `moles_from_molarity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dilution Problem',
        problem: 'Dilute 100 mL of 6.0 M HCl to 0.5 M. Find final volume using M₁V₁ = M₂V₂ diagram.',
        parameters: {
            M1: 6.0,
            V1: 100,
            M2: 0.5,
            findV2: true
        },
        type: 'solution_stoichiometry',
        subparts: [
            'Use dilution equation: M₁V₁ = M₂V₂',
            'M₁ = 6.0 M, V₁ = 100 mL, M₂ = 0.5 M',
            'V₂ = (M₁V₁) / M₂ = (6.0 × 100) / 0.5',
            'V₂ = 1200 mL',
            'Water added: 1200 - 100 = 1100 mL'
        ],
        helper: 'M₁V₁ = M₂V₂; Moles before = moles after (just more dilute)',
        realWorldContext: 'Diluting concentrated acids safely',
        diagramInfo: {
            type: 'dilution',
            registryKey: 'dilution',
            renderOptions: {
                showBefore: true,
                showAfter: true,
                showFormula: true,
                M1: 6.0,
                V1: 100,
                M2: 0.5,
                V2: 1200
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
            const filename = `dilution_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mass to Molarity',
        problem: 'Dissolve 58.5 g NaCl in water to make 1.0 L solution. Find molarity.',
        parameters: {
            mass: 58.5,
            compound: 'NaCl',
            volume: 1.0,
            findMolarity: true
        },
        type: 'solution_stoichiometry',
        subparts: [
            'Step 1: Convert mass to moles',
            'M(NaCl) = 58.44 g/mol',
            'n = 58.5 g ÷ 58.44 g/mol = 1.001 mol',
            'Step 2: Calculate molarity',
            'M = 1.001 mol / 1.0 L = 1.0 M'
        ],
        helper: 'Pathway: mass → moles → molarity (divide by volume in L)',
        realWorldContext: 'Preparing standard solutions from solids',
        diagramInfo: {
            type: 'molarity',
            registryKey: 'molarity',
            renderOptions: {
                showBeaker: true,
                showFormula: true,
                showParticles: true,
                showMassConversion: true,
                mass: 58.5,
                volume: 1.0
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
            const filename = `mass_to_molarity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solution Stoichiometry Reaction',
        problem: 'AgNO₃ + NaCl → AgCl + NaNO₃. Mix 50 mL 0.2 M AgNO₃ with excess NaCl. Find g AgCl precipitated.',
        parameters: {
            equation: 'AgNO3 + NaCl → AgCl + NaNO3',
            volume: 0.05,
            molarity: 0.2,
            reactant: 'AgNO3',
            findMass: 'AgCl'
        },
        type: 'solution_stoichiometry',
        subparts: [
            'Step 1: Find mol AgNO₃',
            'n = M × V = 0.2 M × 0.050 L = 0.01 mol',
            'Step 2: Ratio AgNO₃:AgCl = 1:1',
            'mol AgCl = 0.01 mol',
            'Step 3: Convert to mass',
            'M(AgCl) = 143.32 g/mol; mass = 0.01 × 143.32 = 1.43 g'
        ],
        helper: 'Solution stoichiometry: M×V → moles → ratio → moles → mass',
        realWorldContext: 'Silver chloride precipitation in analysis',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: true,
                showPrecipitate: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `solution_stoichiometry_reaction_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedThermochemicalDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Enthalpy Stoichiometry',
        problem: '2H₂ + O₂ → 2H₂O, ΔH = -572 kJ. Find energy from 4 mol H₂. Show energy profile.',
        parameters: {
            equation: '2H2 + O2 → 2H2O',
            deltaH: -572,
            moles: 4,
            compound: 'H2',
            findEnergy: true
        },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Given ΔH for 2 mol H₂ = -572 kJ',
            'Set up ratio: -572 kJ / 2 mol H₂',
            'For 4 mol H₂: Energy = 4 × (-572/2)',
            'Answer: -1144 kJ released (exothermic)'
        ],
        helper: 'Scale ΔH by mole ratio; Negative ΔH = exothermic (releases energy)',
        realWorldContext: 'Energy from hydrogen fuel combustion',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: true,
                showDeltaH: true,
                reactionType: 'exothermic',
                deltaH: -572
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
            const filename = `energy_profile_thermochemical_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Energy from Mass',
        problem: 'CH₄ + 2O₂ → CO₂ + 2H₂O, ΔH = -890 kJ/mol. Energy from 32 g CH₄?',
        parameters: {
            equation: 'CH4 + 2O2 → CO2 + 2H2O',
            deltaH: -890,
            mass: 32,
            compound: 'CH4',
            findEnergy: true
        },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Step 1: Convert mass to moles',
            'M(CH₄) = 16.04 g/mol',
            'n = 32 g ÷ 16.04 g/mol = 1.995 mol',
            'Step 2: Calculate energy',
            'Energy = 1.995 mol × (-890 kJ/mol) = -1776 kJ'
        ],
        helper: 'Pathway: mass → moles → energy (multiply by ΔH)',
        realWorldContext: 'Methane combustion energy output',
        diagramInfo: {
            type: 'enthalpyChange',
            registryKey: 'enthalpyChange',
            renderOptions: {
                showArrow: true,
                showValues: true,
                deltaH: -890,
                reaction: 'CH4 + 2O2 → CO2 + 2H2O'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `enthalpy_change_mass_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hess\'s Law Application',
        problem: 'Find ΔH for C + O₂ → CO₂ using: (1) C + ½O₂ → CO, ΔH₁ = -110 kJ; (2) CO + ½O₂ → CO₂, ΔH₂ = -283 kJ',
        parameters: {
            targetEquation: 'C + O2 → CO2',
            givenEquations: [
                { equation: 'C + 0.5O2 → CO', deltaH: -110 },
                { equation: 'CO + 0.5O2 → CO2', deltaH: -283 }
            ],
            useHessLaw: true
        },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Hess\'s Law: ΔH_total = sum of ΔH steps',
            'Add equations (1) + (2):',
            'C + ½O₂ → CO',
            'CO + ½O₂ → CO₂',
            'Result: C + O₂ → CO₂, ΔH = -110 + (-283) = -393 kJ'
        ],
        helper: 'Hess\'s Law: Total ΔH = sum of steps; Reverse equation = reverse sign',
        realWorldContext: 'Calculating unmeasurable enthalpy changes',
        diagramInfo: {
            type: 'hessLawCycle',
            registryKey: 'hessLawCycle',
            renderOptions: {
                showArrows: true,
                showEnthalpies: true,
                reaction: 'formation_CO2'
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
            const filename = `hess_law_cycle_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Endothermic Reaction Energy',
        problem: 'N₂ + O₂ → 2NO, ΔH = +180 kJ. How much energy needed for 5 mol N₂?',
        parameters: {
            equation: 'N2 + O2 → 2NO',
            deltaH: 180,
            moles: 5,
            compound: 'N2',
            findEnergy: true,
            endothermic: true
        },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'Positive ΔH = endothermic (absorbs energy)',
            'ΔH for 1 mol N₂ = +180 kJ',
            'Energy for 5 mol N₂ = 5 × 180 kJ',
            'Answer: +900 kJ absorbed'
        ],
        helper: 'Positive ΔH: endothermic (needs energy); Negative ΔH: exothermic (releases energy)',
        realWorldContext: 'Nitrogen oxide formation requires energy',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: true,
                showDeltaH: true,
                reactionType: 'endothermic',
                deltaH: 180
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
            const filename = `energy_profile_endothermic_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Calorimetry Calculation',
        problem: 'Burning 1 g glucose releases 15.6 kJ. If ΔH_comb = -2808 kJ/mol, verify experimentally.',
        parameters: {
            mass: 1,
            compound: 'glucose',
            energyMeasured: 15.6,
            deltaHLiterature: -2808,
            verifyCalorimetry: true
        },
        type: 'thermochemical_stoichiometry',
        subparts: [
            'M(C₆H₁₂O₆) = 180.16 g/mol',
            'mol glucose = 1 g ÷ 180.16 g/mol = 0.00555 mol',
            'Expected energy = 0.00555 mol × 2808 kJ/mol = 15.6 kJ ✓',
            'Experimental matches theoretical (good agreement)'
        ],
        helper: 'Calorimetry measures heat released; Compare to theoretical ΔH',
        realWorldContext: 'Bomb calorimeter measurements',
        diagramInfo: {
            type: 'calorimeter',
            registryKey: 'calorimeter',
            renderOptions: {
                showLabels: true,
                showThermometer: true,
                calorimeterType: 'coffee_cup'
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `calorimeter_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedEmpiricalFormulaDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Empirical Formula from Percent',
        problem: 'Find empirical formula: 40.0% C, 6.7% H, 53.3% O by mass. Show ratio diagram.',
        parameters: {
            percentComposition: { C: 40.0, H: 6.7, O: 53.3 },
            findEmpiricalFormula: true
        },
        type: 'empirical_formula',
        subparts: [
            'Step 1: Assume 100 g sample → 40.0 g C, 6.7 g H, 53.3 g O',
            'Step 2: Convert to moles: C: 40.0/12.01 = 3.33 mol; H: 6.7/1.01 = 6.63 mol; O: 53.3/16.00 = 3.33 mol',
            'Step 3: Divide by smallest (3.33): C: 1, H: 2, O: 1',
            'Empirical formula: CH₂O'
        ],
        helper: 'Steps: % → grams → moles → simplest ratio (divide by smallest)',
        realWorldContext: 'Determining formulas from combustion analysis',
        diagramInfo: {
            type: 'empiricalFormula',
            registryKey: 'empiricalFormula',
            renderOptions: {
                showCalculations: true,
                showRatios: true,
                elements: { C: 40.0, H: 6.7, O: 53.3 }
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
            const filename = `empirical_formula_percent_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Empirical Formula',
        problem: 'Compound has 75% C and 25% H. Find empirical formula.',
        parameters: {
            percentComposition: { C: 75, H: 25 },
            findEmpiricalFormula: true
        },
        type: 'empirical_formula',
        subparts: [
            'Assume 100 g: 75 g C, 25 g H',
            'Moles: C: 75/12.01 = 6.24 mol; H: 25/1.01 = 24.75 mol',
            'Ratio: C: 6.24/6.24 = 1; H: 24.75/6.24 = 3.97 ≈ 4',
            'Empirical formula: CH₄'
        ],
        helper: 'Round to nearest whole number if very close (e.g., 3.97 → 4)',
        realWorldContext: 'Methane composition',
        diagramInfo: {
            type: 'empiricalFormula',
            registryKey: 'empiricalFormula',
            renderOptions: {
                showCalculations: true,
                showRatios: true,
                elements: { C: 75, H: 25 }
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
            const filename = `empirical_formula_simple_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Formula from Empirical',
        problem: 'Empirical formula: CH₂O, Molar mass: 180 g/mol. Find molecular formula.',
        parameters: {
            empiricalFormula: 'CH2O',
            molarMass: 180,
            findMolecularFormula: true
        },
        type: 'empirical_formula',
        subparts: [
            'Step 1: Find empirical formula mass',
            'CH₂O mass = 12.01 + 2(1.01) + 16.00 = 30.03 g/mol',
            'Step 2: Find multiplier: n = 180 / 30.03 = 6',
            'Step 3: Multiply empirical formula by 6',
            'Molecular formula: C₆H₁₂O₆ (glucose)'
        ],
        helper: 'Molecular formula = n × empirical formula; n = molar mass / empirical mass',
        realWorldContext: 'Glucose molecular structure determination',
        diagramInfo: {
            type: 'empiricalFormula',
            registryKey: 'empiricalFormula',
            renderOptions: {
                showCalculations: true,
                showRatios: true,
                showMolecularFormula: true,
                empiricalFormula: 'CH2O',
                molecularFormula: 'C6H12O6'
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
            const filename = `molecular_from_empirical_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Empirical Formula with Fractions',
        problem: 'Compound: 43.64% P, 56.36% O. Find empirical formula (requires multiplying).',
        parameters: {
            percentComposition: { P: 43.64, O: 56.36 },
            findEmpiricalFormula: true,
            requiresMultiplying: true
        },
        type: 'empirical_formula',
        subparts: [
            'Assume 100 g: 43.64 g P, 56.36 g O',
            'Moles: P: 43.64/30.97 = 1.41 mol; O: 56.36/16.00 = 3.52 mol',
            'Ratio: P: 1.41/1.41 = 1; O: 3.52/1.41 = 2.50',
            'Multiply by 2 to get whole numbers: P₂O₅',
            'Empirical formula: P₂O₅'
        ],
        helper: 'If ratio has .5, multiply all by 2; If .33 or .67, multiply by 3',
        realWorldContext: 'Phosphorus pentoxide formula',
        diagramInfo: {
            type: 'empiricalFormula',
            registryKey: 'empiricalFormula',
            renderOptions: {
                showCalculations: true,
                showRatios: true,
                showMultiplying: true,
                elements: { P: 43.64, O: 56.36 }
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
            const filename = `empirical_formula_fractions_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Percent Composition from Formula',
        problem: 'Calculate % composition of each element in H₂SO₄. Show pie chart.',
        parameters: {
            formula: 'H2SO4',
            findPercentComposition: true,
            showPieChart: true
        },
        type: 'empirical_formula',
        subparts: [
            'Step 1: Find molar mass',
            'H₂SO₄ = 2(1.01) + 32.07 + 4(16.00) = 98.09 g/mol',
            'Step 2: Calculate % for each element',
            '% H = (2.02 / 98.09) × 100% = 2.06%',
            '% S = (32.07 / 98.09) × 100% = 32.69%',
            '% O = (64.00 / 98.09) × 100% = 65.25%'
        ],
        helper: '% element = (element mass / total mass) × 100%; Sum should = 100%',
        realWorldContext: 'Sulfuric acid composition',
        diagramInfo: {
            type: 'compositionPie',
            registryKey: 'compositionPieChart',
            renderOptions: {
                showPercentages: true,
                showLegend: true,
                compound: 'H2SO4',
                composition: { H: 2.06, S: 32.69, O: 65.25 }
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
            const filename = `percent_composition_pie_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// ============================================================================
// ORGANIC CHEMISTRY GENERATORS (10 generators)
// ============================================================================

generateRelatedAlkanesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkane Structure - Butane',
        problem: 'Draw the structural formula and skeletal formula for butane (C₄H₁₀).',
        parameters: {
            alkane: 'butane',
            carbons: 4,
            drawStructural: true,
            drawSkeletal: true
        },
        type: 'alkanes',
        subparts: [
            'Butane: straight chain of 4 carbon atoms',
            'General formula: CₙH₂ₙ₊₂, so C₄H₁₀',
            'Structural: CH₃-CH₂-CH₂-CH₃',
            'Skeletal: zigzag line with 4 vertices (carbons implied)'
        ],
        helper: 'Alkanes: single bonds only (saturated); CₙH₂ₙ₊₂ formula',
        realWorldContext: 'Butane lighter fuel',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'butane',
                formula: 'C4H10'
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
            const filename = `butane_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Alkane Naming',
        problem: 'Name the alkane C₆H₁₄ and draw its skeletal formula.',
        parameters: {
            formula: 'C6H14',
            nameAlkane: true,
            drawSkeletal: true
        },
        type: 'alkanes',
        subparts: [
            'Count carbons: 6 carbons = hexane',
            'Verify formula: C₆H₂₍₆₎₊₂ = C₆H₁₄ ✓',
            'Name: hexane',
            'Draw: zigzag chain with 6 vertices'
        ],
        helper: 'Alkane prefixes: meth(1), eth(2), prop(3), but(4), pent(5), hex(6), hept(7), oct(8)',
        realWorldContext: 'Hexane in gasoline',
        diagramInfo: {
            type: 'skeletalFormula',
            registryKey: 'skeletalFormula',
            renderOptions: {
                showLabels: false,
                zigzag: true,
                molecule: 'hexane',
                carbons: 6
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hexane_skeletal_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Branched Alkane',
        problem: 'Draw 2-methylpentane showing structural and skeletal formulas.',
        parameters: {
            alkane: '2-methylpentane',
            branched: true,
            drawBoth: true
        },
        type: 'alkanes',
        subparts: [
            'Parent chain: pentane (5 carbons)',
            'Branch: methyl group (CH₃) on carbon 2',
            'Structural: CH₃-CH(CH₃)-CH₂-CH₂-CH₃',
            'Skeletal: 5-carbon chain with branch at 2nd carbon'
        ],
        helper: 'IUPAC naming: number + branch name + parent alkane',
        realWorldContext: 'Branched alkanes in petrol octane rating',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showBranch: true,
                molecule: '2-methylpentane'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `methylpentane_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkane Combustion',
        problem: 'Write balanced equation for complete combustion of propane (C₃H₈).',
        parameters: {
            alkane: 'propane',
            formula: 'C3H8',
            combustion: true,
            balanceEquation: true
        },
        type: 'alkanes',
        subparts: [
            'Complete combustion: alkane + O₂ → CO₂ + H₂O',
            'C₃H₈ + O₂ → CO₂ + H₂O (unbalanced)',
            'Balance C: → 3CO₂',
            'Balance H: → 4H₂O',
            'Balance O: 5O₂ →',
            'Final: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O'
        ],
        helper: 'Combustion products: CO₂ and H₂O; Balance C, then H, then O',
        realWorldContext: 'Propane gas combustion',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'C3H8 + O2 → CO2 + H2O'
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
            const filename = `propane_combustion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Structural Isomers',
        problem: 'Draw all structural isomers of C₅H₁₂ (pentane). Show differences.',
        parameters: {
            formula: 'C5H12',
            drawIsomers: true,
            compareStructures: true
        },
        type: 'alkanes',
        subparts: [
            'Isomer 1: n-pentane (straight chain)',
            'Isomer 2: 2-methylbutane (one branch)',
            'Isomer 3: 2,2-dimethylpropane (two branches)',
            'All have same formula C₅H₁₂ but different structures'
        ],
        helper: 'Structural isomers: same formula, different connectivity',
        realWorldContext: 'Isomers have different physical properties',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C5H12',
                isomerType: 'structural'
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
            const filename = `pentane_isomers_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedAlkenesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkene Structure - Propene',
        problem: 'Draw structural formula for propene (C₃H₆) showing the double bond.',
        parameters: {
            alkene: 'propene',
            carbons: 3,
            drawStructural: true,
            showDoubleBond: true
        },
        type: 'alkenes',
        subparts: [
            'Alkenes: contain C=C double bond',
            'General formula: CₙH₂ₙ',
            'Propene: 3 carbons, 6 hydrogens',
            'Structure: CH₂=CH-CH₃',
            'Double bond between C1 and C2'
        ],
        helper: 'Alkenes: CₙH₂ₙ; unsaturated (can add more H); named with -ene suffix',
        realWorldContext: 'Propene for polypropylene plastic',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightDoubleBond: true,
                molecule: 'propene',
                formula: 'C3H6'
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
            const filename = `propene_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Alkene Identification',
        problem: 'Identify the alkene with formula C₄H₈ and draw its structure.',
        parameters: {
            formula: 'C4H8',
            identifyAlkene: true,
            drawStructure: true
        },
        type: 'alkenes',
        subparts: [
            'Formula CₙH₂ₙ confirms it\'s an alkene',
            '4 carbons = butene',
            'Main isomer: but-1-ene CH₂=CH-CH₂-CH₃',
            'Double bond between C1 and C2'
        ],
        helper: 'Alkene naming: but-1-ene (number shows where double bond starts)',
        realWorldContext: 'Butene in chemical synthesis',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'but-1-ene',
                formula: 'C4H8'
            },
            canvasSize: { width: 850, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `butene_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Addition Reaction',
        problem: 'Show addition of HBr to ethene (C₂H₄). Draw mechanism with curved arrows.',
        parameters: {
            alkene: 'ethene',
            reagent: 'HBr',
            reactionType: 'addition',
            showMechanism: true
        },
        type: 'alkenes',
        subparts: [
            'Ethene: CH₂=CH₂',
            'HBr adds across double bond',
            'π bond breaks, forms σ bonds to H and Br',
            'Product: CH₃-CH₂Br (bromoethane)',
            'Mechanism: electrophilic addition'
        ],
        helper: 'Addition reactions: double bond opens to add atoms across it',
        realWorldContext: 'Halogenation of alkenes',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'addition',
                reactants: ['C2H4', 'HBr'],
                product: 'C2H5Br'
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
            const filename = `alkene_addition_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkene Polymerization',
        problem: 'Show polymerization of ethene to polyethylene. Draw repeating unit.',
        parameters: {
            monomer: 'ethene',
            polymer: 'polyethylene',
            showPolymerization: true
        },
        type: 'alkenes',
        subparts: [
            'Monomer: CH₂=CH₂ (ethene)',
            'Double bond opens: -CH₂-CH₂-',
            'Repeating unit: [-CH₂-CH₂-]ₙ',
            'n = large number (thousands)',
            'Polymer: polyethylene (plastic)'
        ],
        helper: 'Polymerization: many small molecules (monomers) → large molecule (polymer)',
        realWorldContext: 'Plastic bag production',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'ethene',
                polymer: 'polyethylene'
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
            const filename = `ethene_polymerization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Geometric Isomers',
        problem: 'Draw cis and trans isomers of but-2-ene. Explain difference.',
        parameters: {
            alkene: 'but-2-ene',
            showGeometricIsomers: true,
            explainDifference: true
        },
        type: 'alkenes',
        subparts: [
            'But-2-ene: CH₃-CH=CH-CH₃',
            'cis isomer: both CH₃ groups on same side',
            'trans isomer: CH₃ groups on opposite sides',
            'Double bond prevents rotation',
            'Geometric isomers have different physical properties'
        ],
        helper: 'cis = same side; trans = opposite sides; Double bond rigid (no rotation)',
        realWorldContext: 'Geometric isomers in vision (retinal)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                isomerType: 'geometric',
                molecule: 'but-2-ene'
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
            const filename = `geometric_isomers_butene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedAlkynesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkyne Structure - Propyne',
        problem: 'Draw structural formula for propyne (C₃H₄) showing the triple bond.',
        parameters: {
            alkyne: 'propyne',
            carbons: 3,
            drawStructural: true,
            showTripleBond: true
        },
        type: 'alkynes',
        subparts: [
            'Alkynes: contain C≡C triple bond',
            'General formula: CₙH₂ₙ₋₂',
            'Propyne: 3 carbons, 4 hydrogens',
            'Structure: HC≡C-CH₃',
            'Triple bond between C1 and C2'
        ],
        helper: 'Alkynes: CₙH₂ₙ₋₂; most unsaturated; named with -yne suffix',
        realWorldContext: 'Propyne in organic synthesis',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightTripleBond: true,
                molecule: 'propyne',
                formula: 'C3H4'
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
            const filename = `propyne_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Ethyne (Acetylene)',
        problem: 'Draw ethyne (C₂H₂) and explain why it\'s the simplest alkyne.',
        parameters: {
            alkyne: 'ethyne',
            carbons: 2,
            simplestAlkyne: true
        },
        type: 'alkynes',
        subparts: [
            'Ethyne (acetylene): HC≡CH',
            'Only 2 carbons possible with triple bond',
            'Formula: C₂H₂',
            'Linear geometry (180° bond angle)',
            'Common name: acetylene'
        ],
        helper: 'Ethyne is simplest alkyne; used in welding torches',
        realWorldContext: 'Acetylene welding and cutting',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showLinearGeometry: true,
                molecule: 'ethyne',
                formula: 'C2H2'
            },
            canvasSize: { width: 700, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ethyne_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alkyne Bonding',
        problem: 'Explain bonding in ethyne: σ and π bonds. Show orbital overlap.',
        parameters: {
            alkyne: 'ethyne',
            explainBonding: true,
            showOrbitals: true
        },
        type: 'alkynes',
        subparts: [
            'Triple bond = 1 σ bond + 2 π bonds',
            'σ bond: sp-sp overlap (head-on)',
            'Two π bonds: p-p overlap (sideways)',
            'sp hybridization: linear geometry (180°)',
            'Very strong bond (bond energy ~839 kJ/mol)'
        ],
        helper: 'Triple bond: strongest C-C bond; 1 sigma + 2 pi bonds',
        realWorldContext: 'Understanding alkyne reactivity',
        diagramInfo: {
            type: 'sigmaPiBonds',
            registryKey: 'sigmaPiBonds',
            renderOptions: {
                show3D: true,
                showOverlap: true,
                molecule: 'C2H2',
                bondTypes: ['sigma', 'pi', 'pi']
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
            const filename = `alkyne_bonding_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Comparing Hydrocarbons',
        problem: 'Compare formulas: ethane, ethene, ethyne. Show saturation differences.',
        parameters: {
            compareHydrocarbons: true,
            molecules: ['ethane', 'ethene', 'ethyne'],
            showSaturation: true
        },
        type: 'alkynes',
        subparts: [
            'Ethane (C₂H₆): single bond, saturated',
            'Ethene (C₂H₄): double bond, unsaturated',
            'Ethyne (C₂H₂): triple bond, most unsaturated',
            'As unsaturation increases, H count decreases',
            'Formula pattern: C₂H₆ → C₂H₄ → C₂H₂'
        ],
        helper: 'Saturation: alkane > alkene > alkyne; More bonds = fewer H atoms',
        realWorldContext: 'Understanding hydrocarbon types',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                compareMultiple: true,
                molecules: ['ethane', 'ethene', 'ethyne']
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
            const filename = `comparing_hydrocarbons_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alkyne Hydrogenation',
        problem: 'Show stepwise addition of H₂ to ethyne: ethyne → ethene → ethane.',
        parameters: {
            alkyne: 'ethyne',
            reaction: 'hydrogenation',
            showSteps: true
        },
        type: 'alkynes',
        subparts: [
            'Step 1: HC≡CH + H₂ → CH₂=CH₂ (ethene)',
            'Adds across triple bond first',
            'Step 2: CH₂=CH₂ + H₂ → CH₃-CH₃ (ethane)',
            'Adds across double bond',
            'Full hydrogenation: HC≡CH + 2H₂ → CH₃-CH₃'
        ],
        helper: 'Hydrogenation: addition of H₂; Requires catalyst (Pt, Pd, or Ni)',
        realWorldContext: 'Alkyne reduction in synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                showStepwise: true,
                mechanism: 'hydrogenation'
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alkyne_hydrogenation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedAromaticDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Benzene Structure',
        problem: 'Draw benzene (C₆H₆) showing resonance structures and delocalized electrons.',
        parameters: {
            molecule: 'benzene',
            showResonance: true,
            showDelocalization: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Benzene: hexagonal ring of 6 carbons',
            'Alternating double bonds (Kekulé structure)',
            'Two resonance forms ↔',
            'Reality: delocalized π electron cloud',
            'Symbol: hexagon with circle inside'
        ],
        helper: 'Aromatic: planar, cyclic, conjugated π system; 4n+2 π electrons (Hückel\'s rule)',
        realWorldContext: 'Benzene in petrochemicals',
        diagramInfo: {
            type: 'aromaticRing',
            registryKey: 'aromaticRing',
            renderOptions: {
                showResonance: true,
                showElectronCloud: true,
                molecule: 'benzene'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `benzene_resonance_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Naming Aromatic Compounds',
        problem: 'Draw toluene (methylbenzene, C₇H₈). Show methyl group attachment.',
        parameters: {
            molecule: 'toluene',
            formula: 'C7H8',
            showSubstituent: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Toluene = benzene + methyl group (CH₃)',
            'Methyl attached to benzene ring',
            'Also called methylbenzene',
            'Formula: C₆H₅-CH₃',
            'Common solvent in chemistry'
        ],
        helper: 'Substituted benzenes: named as benzene derivatives or common names',
        realWorldContext: 'Toluene as industrial solvent',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'toluene',
                showAromaticRing: true
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
            const filename = `toluene_structure_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Aromatic Stability',
        problem: 'Explain why benzene is more stable than expected. Compare energies.',
        parameters: {
            molecule: 'benzene',
            explainStability: true,
            compareEnergies: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Expected: 3 isolated double bonds',
            'Actual: resonance stabilization',
            'Delocalization energy ≈ 150 kJ/mol',
            'Benzene more stable than predicted',
            'Result: less reactive than alkenes'
        ],
        helper: 'Aromatic stability: resonance energy makes benzene unreactive',
        realWorldContext: 'Why benzene doesn\'t undergo addition easily',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: false,
                showDeltaH: true,
                showStabilization: true,
                molecule: 'benzene'
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
            const filename = `benzene_stability_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electrophilic Substitution',
        problem: 'Show nitration of benzene: C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O.',
        parameters: {
            reaction: 'nitration',
            substrate: 'benzene',
            product: 'nitrobenzene'
        },
        type: 'aromatic_compounds',
        subparts: [
            'Benzene undergoes substitution (not addition)',
            'Reagents: HNO₃ + H₂SO₄ (catalyst)',
            'Electrophile: NO₂⁺ (nitronium ion)',
            'Product: nitrobenzene (C₆H₅NO₂)',
            'Aromatic ring preserved'
        ],
        helper: 'Aromatic substitution: replaces H but keeps ring intact',
        realWorldContext: 'Nitrobenzene synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'electrophilic_substitution',
                substrate: 'benzene'
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
            const filename = `benzene_nitration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hückel\'s Rule',
        problem: 'Apply Hückel\'s rule: Which is aromatic - C₄H₄²⁻ or C₈H₈? Explain.',
        parameters: {
            applyHuckelsRule: true,
            molecules: ['C4H4_2minus', 'C8H8'],
            determineAromaticity: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Hückel\'s rule: 4n+2 π electrons (aromatic)',
            'C₄H₄²⁻: 4+2 = 6 π electrons → aromatic ✓',
            'C₈H₈: 8 π electrons (4n, not 4n+2) → antiaromatic ✗',
            'Must be cyclic, planar, fully conjugated',
            'C₄H₄²⁻ is aromatic despite small ring'
        ],
        helper: 'Aromatic: 4n+2 π electrons; Antiaromatic: 4n π electrons; n = 0,1,2...',
        realWorldContext: 'Predicting aromatic stability',
        diagramInfo: {
            type: 'aromaticRing',
            registryKey: 'aromaticRing',
            renderOptions: {
                showResonance: false,
                showElectronCloud: true,
                compareAromaticity: true,
                molecules: ['C4H4_2minus', 'C8H8']
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
            const filename = `huckels_rule_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedFunctionalGroupsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identifying Functional Groups',
        problem: 'Identify all functional groups in CH₃CH₂OH (ethanol).',
        parameters: {
            molecule: 'ethanol',
            formula: 'CH3CH2OH',
            identifyGroups: true
        },
        type: 'functional_groups',
        subparts: [
            'Structure: CH₃-CH₂-OH',
            'Functional group: hydroxyl (-OH)',
            'Class: alcohol',
            'Primary alcohol (OH on terminal carbon)',
            'Suffix: -ol (ethanol)'
        ],
        helper: 'Alcohol: -OH group; Primary (1°), Secondary (2°), or Tertiary (3°)',
        realWorldContext: 'Ethanol in alcoholic beverages',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                highlightGroup: 'alcohol',
                molecule: 'ethanol'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_groups_ethanol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Functional Group Table',
        problem: 'Draw structures for: alcohol, aldehyde, ketone, carboxylic acid.',
        parameters: {
            groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylicAcid'],
            drawStructures: true,
            showTable: true
        },
        type: 'functional_groups',
        subparts: [
            'Alcohol: R-OH (hydroxyl)',
            'Aldehyde: R-CHO (carbonyl at end)',
            'Ketone: R-CO-R (carbonyl in middle)',
            'Carboxylic acid: R-COOH (carboxyl)'
        ],
        helper: 'Carbonyl group (C=O) in aldehydes, ketones, acids',
        realWorldContext: 'Common organic functional groups',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylicAcid']
            },
            canvasSize: { width: 1100, height: 900 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_groups_table_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Functional Groups',
        problem: 'Identify all functional groups in CH₃COCH₂CH₂COOH.',
        parameters: {
            molecule: 'levulinic_acid',
            formula: 'CH3COCH2CH2COOH',
            multipleGroups: true
        },
        type: 'functional_groups',
        subparts: [
            'Structure analysis from left to right:',
            'CH₃-CO- : ketone group (carbonyl)',
            '-CH₂-CH₂- : alkyl chain',
            '-COOH : carboxylic acid group',
            'Two functional groups: ketone + carboxylic acid'
        ],
        helper: 'Molecules can have multiple functional groups; Priority: acid > ketone',
        realWorldContext: 'Levulinic acid in biomass conversion',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightMultipleGroups: true,
                molecule: 'CH3COCH2CH2COOH'
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `multiple_functional_groups_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ester Functional Group',
        problem: 'Draw ethyl acetate (CH₃COOCH₂CH₃). Identify ester group.',
        parameters: {
            molecule: 'ethyl_acetate',
            formula: 'CH3COOCH2CH3',
            functionalGroup: 'ester'
        },
        type: 'functional_groups',
        subparts: [
            'Ester functional group: -COO-',
            'Structure: CH₃-CO-O-CH₂-CH₃',
            'Formed from acid + alcohol',
            'Characteristic sweet smell',
            'Named: alkyl alkanoate'
        ],
        helper: 'Ester: -COOR; Formed by condensation of acid + alcohol',
        realWorldContext: 'Ethyl acetate as solvent (nail polish remover)',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightGroup: 'ester',
                molecule: 'ethyl_acetate'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ester_functional_group_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Functional Group Priority',
        problem: 'Name: HOCH₂CH₂CHO (has both alcohol and aldehyde). Which takes priority?',
        parameters: {
            molecule: '3-hydroxypropanal',
            hasMultipleGroups: true,
            determinePriority:
            true
        },
        type: 'functional_groups',
        subparts: [
            'Two groups: -OH (alcohol) and -CHO (aldehyde)',
            'Priority order: aldehyde > alcohol',
            'Name as aldehyde with alcohol as substituent',
            'Correct name: 3-hydroxypropan-1-al',
            'Aldehyde determines suffix (-al)'
        ],
        helper: 'Priority: acid > ester > amide > aldehyde > ketone > alcohol > amine',
        realWorldContext: 'IUPAC nomenclature rules',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                showPriority: true,
                molecule: 'HOCH2CH2CHO'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_group_priority_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// Due to length constraints, I'll provide the structure for the remaining generators.
// Continue this pattern for:
// - generateRelatedIsomerism
// - generateRelatedOrganicReactions
// - generateRelatedNomenclature
// - generateRelatedMechanisms
// - generateRelatedPolymers

// Then move to ATOMIC STRUCTURE generators (7 total):
// You already have generateRelatedAtomicStructure, generateRelatedQuantumNumbers, generateRelatedElectronConfiguration
// Still need:
// - generateRelatedPeriodicTrends
// - generateRelatedBonding
// - generateRelatedMolecularGeometry
// - generateRelatedHybridization

generateRelatedPeriodicTrendsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Atomic Radius Trend',
        problem: 'Explain atomic radius trend across Period 3 (Na to Cl). Show diagram.',
        parameters: {
            trend: 'atomic_radius',
            period: 3,
            elements: ['Na', 'Mg', 'Al', 'Si', 'P', 'S', 'Cl'],
            direction: 'across'
        },
        type: 'periodic_trends',
        subparts: [
            'Across period: atomic radius decreases',
            'Reason: increasing nuclear charge',
            'Same number of shells (n=3)',
            'More protons pull electrons closer',
            'Na (largest) → Cl (smallest)'
        ],
        helper: 'Atomic radius: decreases across period, increases down group',
        realWorldContext: 'Predicting element size',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                showArrows: true,
                showGradient: true,
                trends: ['atomicRadius'],
                highlightPeriod: 3
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
            const filename = `periodic_trends_atomic_radius_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Ionization Energy',
        problem: 'Compare first ionization energies: Na vs Mg vs Al. Explain trend.',
        parameters: {
            trend: 'ionization_energy',
            elements: ['Na', 'Mg', 'Al'],
            compareValues: true
        },
        type: 'periodic_trends',
        subparts: [
            'First I.E. = energy to remove 1 electron',
            'Na: 496 kJ/mol; Mg: 738 kJ/mol; Al: 578 kJ/mol',
            'Generally increases across period',
            'Al drops due to new subshell (3p¹)',
            'Trend: Na < Al < Mg'
        ],
        helper: 'Ionization energy: increases across period (harder to remove e⁻)',
        realWorldContext: 'Predicting reactivity',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                showArrows: true,
                showGradient: true,
                trends: ['ionizationEnergy'],
                highlightElements: ['Na', 'Mg', 'Al']
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
            const filename = `ionization_energy_trend_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electronegativity Trend',
        problem: 'Rank electronegativity: F, O, N, C. Explain using periodic trends.',
        parameters: {
            trend: 'electronegativity',
            elements: ['F', 'O', 'N', 'C'],
            rankElements: true,
            explainTrend: true
        },
        type: 'periodic_trends',
        subparts: [
            'Electronegativity = attraction for bonding electrons',
            'Increases across period (left to right)',
            'Increases up group (bottom to top)',
            'F is most electronegative (4.0)',
            'Ranking: F > O > N > C'
        ],
        helper: 'Electronegativity: increases to top-right of periodic table (F highest)',
        realWorldContext: 'Predicting bond polarity',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                showArrows: true,
                showGradient: true,
                trends: ['electronegativity'],
                highlightElements: ['F', 'O', 'N', 'C']
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
            const filename = `electronegativity_trend_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ionic Radius Comparison',
        problem: 'Compare sizes: Na atom vs Na⁺ ion, Cl atom vs Cl⁻ ion.',
        parameters: {
            compareIons: true,
            elements: ['Na', 'Cl'],
            showSizeChange: true
        },
        type: 'periodic_trends',
        subparts: [
            'Na → Na⁺: loses electron, radius decreases',
            'Na⁺ smaller than Na (lost outer shell)',
            'Cl → Cl⁻: gains electron, radius increases',
            'Cl⁻ larger than Cl (electron repulsion)',
            'Cations < parent atom < anions'
        ],
        helper: 'Cations smaller (lost e⁻); Anions larger (gained e⁻)',
        realWorldContext: 'Ion size in crystals',
        diagramInfo: {
            type: 'bohrModel',
            registryKey: 'bohrModelCarbon',
            renderOptions: {
                showLabels: true,
                showElectrons: true,
                showNucleus: true,
                compareIon: true,
                elements: ['Na', 'Cl']
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ionic_radius_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Trends Analysis',
        problem: 'Explain why F is highly reactive: consider atomic radius, electronegativity, and electron affinity.',
        parameters: {
            element: 'F',
            analyzeTrends: ['radius', 'electronegativity', 'electronAffinity'],
            explainReactivity: true
        },
        type: 'periodic_trends',
        subparts: [
            'Small atomic radius: electrons close to nucleus',
            'Highest electronegativity (4.0): attracts electrons strongly',
            'High electron affinity: releases energy gaining e⁻',
            'Only needs 1 electron to complete octet',
            'Result: F is most reactive non-metal'
        ],
        helper: 'Multiple trends combine to determine reactivity',
        realWorldContext: 'Fluorine extreme reactivity',
        diagramInfo: {
            type: 'periodicTrends',
            registryKey: 'periodicTrends',
            renderOptions: {
                showArrows: true,
                showGradient: true,
                trends: ['atomicRadius', 'electronegativity', 'ionizationEnergy'],
                highlightElements: ['F']
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
            const filename = `multiple_trends_fluorine_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


// ============================================================================
// ORGANIC CHEMISTRY GENERATORS (Continued)
// ============================================================================

generateRelatedIsomerismDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Structural Isomers - C₄H₁₀',
        problem: 'Draw all structural isomers of butane (C₄H₁₀). Show differences in connectivity.',
        parameters: {
            formula: 'C4H10',
            isomerType: 'structural',
            drawAll: true
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: n-butane (straight chain) CH₃-CH₂-CH₂-CH₃',
            'Isomer 2: 2-methylpropane (branched) CH₃-CH(CH₃)-CH₃',
            'Both have same formula C₄H₁₀',
            'Different connectivity = structural isomers',
            'Different physical properties (bp, mp)'
        ],
        helper: 'Structural isomers: same formula, different atom connectivity',
        realWorldContext: 'Butane isomers in lighter fuel',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C4H10',
                isomerType: 'structural'
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
            const filename = `structural_isomers_butane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Position Isomers',
        problem: 'Draw position isomers of propanol (C₃H₈O). Show difference in -OH location.',
        parameters: {
            formula: 'C3H8O',
            isomerType: 'positional',
            functionalGroup: 'alcohol'
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: propan-1-ol CH₃-CH₂-CH₂-OH',
            'OH on carbon 1 (primary alcohol)',
            'Isomer 2: propan-2-ol CH₃-CH(OH)-CH₃',
            'OH on carbon 2 (secondary alcohol)',
            'Same functional group, different position'
        ],
        helper: 'Position isomers: functional group in different positions',
        realWorldContext: 'Isopropyl alcohol (propan-2-ol) as rubbing alcohol',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C3H8O',
                isomerType: 'positional',
                highlightFunctionalGroup: true
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
            const filename = `positional_isomers_propanol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Functional Group Isomers',
        problem: 'Draw functional group isomers of C₂H₆O. Show alcohol vs ether.',
        parameters: {
            formula: 'C2H6O',
            isomerType: 'functional',
            groups: ['alcohol', 'ether']
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: ethanol CH₃-CH₂-OH (alcohol)',
            'Contains -OH functional group',
            'Isomer 2: dimethyl ether CH₃-O-CH₃ (ether)',
            'Contains C-O-C functional group',
            'Different functional groups = functional isomers'
        ],
        helper: 'Functional isomers: same formula, different functional groups',
        realWorldContext: 'Ethanol (drinking) vs dimethyl ether (propellant)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C2H6O',
                isomerType: 'functional',
                showFunctionalGroups: true
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
            const filename = `functional_isomers_C2H6O_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Geometric Isomers - But-2-ene',
        problem: 'Draw cis and trans isomers of but-2-ene. Explain stereochemistry.',
        parameters: {
            molecule: 'but-2-ene',
            isomerType: 'geometric',
            showStereochemistry: true
        },
        type: 'isomerism',
        subparts: [
            'But-2-ene: CH₃-CH=CH-CH₃',
            'cis-but-2-ene: both CH₃ on same side of double bond',
            'trans-but-2-ene: CH₃ on opposite sides',
            'Double bond prevents rotation',
            'Geometric isomers (also called E/Z isomers)'
        ],
        helper: 'Geometric isomers: cis (same side) vs trans (opposite); requires restricted rotation',
        realWorldContext: 'Cis/trans isomers have different melting points',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                molecule: 'but-2-ene',
                isomerType: 'geometric',
                show3D: true
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
            const filename = `geometric_isomers_but2ene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Optical Isomers (Enantiomers)',
        problem: 'Draw mirror image isomers of CHFClBr (chiral carbon). Show non-superimposability.',
        parameters: {
            molecule: 'CHFClBr',
            isomerType: 'optical',
            showChirality: true,
            showMirrorImages: true
        },
        type: 'isomerism',
        subparts: [
            'Chiral carbon: 4 different groups attached',
            'Groups: H, F, Cl, Br (all different)',
            'Two non-superimposable mirror images',
            'Called enantiomers (optical isomers)',
            'Rotate plane-polarized light in opposite directions'
        ],
        helper: 'Optical isomers: mirror images, non-superimposable; require chiral center',
        realWorldContext: 'Drug enantiomers can have different effects (thalidomide)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                molecule: 'CHFClBr',
                isomerType: 'optical',
                show3D: true,
                showMirrorPlane: true
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `optical_isomers_CHFClBr_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedOrganicReactionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Substitution Reaction',
        problem: 'Show substitution: CH₃Br + OH⁻ → CH₃OH + Br⁻. Draw mechanism.',
        parameters: {
            reactionType: 'substitution',
            substrate: 'CH3Br',
            nucleophile: 'OH-',
            mechanism: 'SN2'
        },
        type: 'organic_reactions',
        subparts: [
            'SN2 mechanism: nucleophilic substitution, bimolecular',
            'OH⁻ attacks carbon from backside',
            'Br⁻ leaves as leaving group',
            'Product: CH₃OH (methanol)',
            'One-step concerted mechanism'
        ],
        helper: 'SN2: backside attack, inversion of configuration, 1° substrates best',
        realWorldContext: 'Williamson ether synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'SN2',
                reactants: ['CH3Br', 'OH-'],
                product: 'CH3OH'
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
            const filename = `substitution_mechanism_SN2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Addition to Alkene',
        problem: 'Add HBr to propene: CH₃CH=CH₂ + HBr → ?. Show product.',
        parameters: {
            reactionType: 'addition',
            substrate: 'propene',
            reagent: 'HBr',
            applyMarkovnikov: true
        },
        type: 'organic_reactions',
        subparts: [
            'Propene: CH₃-CH=CH₂',
            'HBr adds across double bond',
            'Markovnikov\'s rule: H to carbon with more H',
            'H adds to CH₂, Br to CH',
            'Product: CH₃-CHBr-CH₃ (2-bromopropane)'
        ],
        helper: 'Markovnikov: H adds to less substituted carbon, X to more substituted',
        realWorldContext: 'Halogenation of alkenes',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'addition',
                reactants: ['propene', 'HBr'],
                product: '2-bromopropane',
                showMarkovnikov: true
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
            const filename = `addition_markovnikov_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Elimination Reaction',
        problem: 'Show E2 elimination: CH₃CH₂Br + OH⁻ → CH₂=CH₂. Draw mechanism with curved arrows.',
        parameters: {
            reactionType: 'elimination',
            substrate: 'CH3CH2Br',
            base: 'OH-',
            mechanism: 'E2'
        },
        type: 'organic_reactions',
        subparts: [
            'E2: elimination, bimolecular, one-step',
            'OH⁻ abstracts H from β-carbon',
            'C-H and C-Br bonds break simultaneously',
            'Double bond forms: C=C',
            'Product: ethene CH₂=CH₂'
        ],
        helper: 'E2: anti-periplanar geometry, strong base, forms alkene',
        realWorldContext: 'Alkene synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'E2',
                reactants: ['CH3CH2Br', 'OH-'],
                product: 'CH2=CH2'
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
            const filename = `elimination_E2_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Esterification',
        problem: 'Show ester formation: CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O.',
        parameters: {
            reactionType: 'esterification',
            acid: 'CH3COOH',
            alcohol: 'CH3OH',
            catalyst: 'H+'
        },
        type: 'organic_reactions',
        subparts: [
            'Condensation reaction: acid + alcohol',
            'Requires acid catalyst (H₂SO₄)',
            'Water eliminated',
            'Product: ester CH₃COOCH₃ (methyl acetate)',
            'Equilibrium reaction (reversible)'
        ],
        helper: 'Esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyst)',
        realWorldContext: 'Ester synthesis for fragrances',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'esterification',
                reactants: ['CH3COOH', 'CH3OH'],
                product: 'CH3COOCH3',
                showWaterElimination: true
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
            const filename = `esterification_reaction_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Oxidation of Alcohols',
        problem: 'Show oxidation: CH₃CH₂OH → CH₃CHO → CH₃COOH. Identify reagents.',
        parameters: {
            reactionType: 'oxidation',
            substrate: 'ethanol',
            products: ['ethanal', 'ethanoic acid'],
            reagent: 'K2Cr2O7/H+'
        },
        type: 'organic_reactions',
        subparts: [
            '1° alcohol → aldehyde → carboxylic acid',
            'Reagent: K₂Cr₂O₇/H⁺ or KMnO₄',
            'Step 1: CH₃CH₂OH → CH₃CHO (partial oxidation)',
            'Step 2: CH₃CHO → CH₃COOH (full oxidation)',
            'Color change: orange Cr₂O₇²⁻ → green Cr³⁺'
        ],
        helper: '1° alcohol → aldehyde → acid; 2° alcohol → ketone; 3° alcohol → no oxidation',
        realWorldContext: 'Alcohol metabolism in liver',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'oxidation',
                showStepwise: true,
                reactants: ['CH3CH2OH'],
                products: ['CH3CHO', 'CH3COOH']
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alcohol_oxidation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedNomenclatureDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'IUPAC Naming - Alkane',
        problem: 'Name: CH₃-CH₂-CH(CH₃)-CH₂-CH₃. Show systematic approach.',
        parameters: {
            structure: 'CH3-CH2-CH(CH3)-CH2-CH3',
            compoundType: 'alkane',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Find longest carbon chain (5 carbons = pentane)',
            'Step 2: Number from end nearest branch (1,2,3,4,5)',
            'Step 3: Identify substituent: methyl at position 3',
            'Step 4: Name: 3-methylpentane',
            'Check: lowest number for substituent'
        ],
        helper: 'IUPAC: longest chain + position-substituent + parent name',
        realWorldContext: 'Systematic organic nomenclature',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '3-methylpentane',
                highlightLongestChain: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `iupac_naming_alkane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Naming Alkenes',
        problem: 'Name: CH₃-CH=CH-CH₃. Specify double bond position.',
        parameters: {
            structure: 'CH3-CH=CH-CH3',
            compoundType: 'alkene',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Identify 4 carbons with double bond (butene)',
            'Step 2: Number chain to give lowest number to C=C',
            'Step 3: Double bond between C2 and C3',
            'Step 4: Name: but-2-ene',
            'Suffix: -ene for alkene'
        ],
        helper: 'Alkene naming: but-2-ene (number shows first carbon of double bond)',
        realWorldContext: 'Naming unsaturated hydrocarbons',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: 'but-2-ene',
                highlightDoubleBond: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `naming_alkene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Branched Alkane',
        problem: 'Name: CH₃-CH(CH₃)-CH₂-C(CH₃)₂-CH₃. Multiple substituents.',
        parameters: {
            structure: 'CH3-CH(CH3)-CH2-C(CH3)2-CH3',
            compoundType: 'alkane',
            multipleBranches: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Longest chain = 5 carbons (pentane)',
            'Step 2: Number 1,2,3,4,5',
            'Step 3: Methyl at C2 and two methyls at C4',
            'Step 4: Use di- for two identical groups',
            'Name: 2,4,4-trimethylpentane'
        ],
        helper: 'Multiple substituents: use di-, tri-, tetra-; list alphabetically; use commas between numbers',
        realWorldContext: 'Complex organic molecule naming',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '2,4,4-trimethylpentane',
                highlightSubstituents: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `complex_branched_alkane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Naming Alcohols',
        problem: 'Name: CH₃-CH₂-CH(OH)-CH₃. Specify OH position.',
        parameters: {
            structure: 'CH3-CH2-CH(OH)-CH3',
            functionalGroup: 'alcohol',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Longest chain = 4 carbons (butane → butanol)',
            'Step 2: Number to give OH lowest number',
            'Step 3: OH on carbon 2',
            'Step 4: Name: butan-2-ol',
            'Suffix: -ol for alcohol'
        ],
        helper: 'Alcohol naming: number-parent-ol (OH gets priority in numbering)',
        realWorldContext: 'Naming alcohols systematically',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: 'butan-2-ol',
                highlightFunctionalGroup: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `naming_alcohol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Naming with Multiple Functional Groups',
        problem: 'Name: HOCH₂CH₂CHO (contains alcohol and aldehyde). Apply priority rules.',
        parameters: {
            structure: 'HOCH2CH2CHO',
            functionalGroups: ['alcohol', 'aldehyde'],
            applyPriority: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Identify groups: -OH (alcohol) and -CHO (aldehyde)',
            'Step 2: Priority: aldehyde > alcohol',
            'Step 3: Name as aldehyde with alcohol as prefix',
            'Step 4: 3 carbons with aldehyde = propanal',
            'Name: 3-hydroxypropanal'
        ],
        helper: 'Priority order: COOH > aldehyde > ketone > alcohol > amine; Highest priority = suffix',
        realWorldContext: 'Complex molecule nomenclature',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '3-hydroxypropanal',
                highlightMultipleFunctionalGroups: true,
                showPriority: true
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
            const filename = `naming_multiple_groups_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedMechanismsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nucleophilic Attack Mechanism',
        problem: 'Draw mechanism for OH⁻ attacking CH₃Br. Show curved arrows for electron flow.',
        parameters: {
            mechanism: 'nucleophilic_attack',
            nucleophile: 'OH-',
            electrophile: 'CH3Br',
            showElectronFlow: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: OH⁻ has lone pair (nucleophile)',
            'Step 2: Curved arrow from OH⁻ lone pair to C',
            'Step 3: Curved arrow from C-Br bond to Br',
            'Step 4: Forms CH₃-OH and Br⁻',
            'Concerted SN2 mechanism (one step)'
        ],
        helper: 'Curved arrow: shows movement of electron pair; Start at electron source, end at electron sink',
        realWorldContext: 'Nucleophilic substitution mechanism',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'SN2',
                reactants: ['CH3Br', 'OH-'],
                product: 'CH3OH',
                showElectronPairs: true
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
            const filename = `nucleophilic_attack_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Carbocation Formation',
        problem: 'Show (CH₃)₃CBr ionization to form carbocation. Draw mechanism.',
        parameters: {
            mechanism: 'carbocation_formation',
            substrate: '(CH3)3CBr',
            showIonization: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: C-Br bond breaks heterolytically',
            'Step 2: Both electrons go to Br (becomes Br⁻)',
            'Step 3: Carbon becomes positively charged',
            'Step 4: Forms (CH₃)₃C⁺ carbocation',
            'Tertiary carbocation (most stable)'
        ],
        helper: 'Carbocation stability: 3° > 2° > 1° > methyl (due to hyperconjugation)',
        realWorldContext: 'SN1 and E1 reaction intermediates',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'ionization',
                substrate: '(CH3)3CBr',
                intermediate: '(CH3)3C+',
                showStability: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `carbocation_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electrophilic Addition Mechanism',
        problem: 'Draw complete mechanism: CH₂=CH₂ + HBr → CH₃CH₂Br. Show all intermediates.',
        parameters: {
            mechanism: 'electrophilic_addition',
            alkene: 'CH2=CH2',
            reagent: 'HBr',
            showIntermediates: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: π electrons attack H of HBr',
            'Step 2: Forms carbocation CH₃CH₂⁺ and Br⁻',
            'Step 3: Br⁻ attacks carbocation',
            'Step 4: Product: CH₃CH₂Br',
            'Two-step mechanism with carbocation intermediate'
        ],
        helper: 'Electrophilic addition: π bond attacks electrophile → carbocation → nucleophile attacks',
        realWorldContext: 'Alkene halogenation mechanism',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'electrophilic_addition',
                reactants: ['CH2=CH2', 'HBr'],
                intermediate: 'CH3CH2+',
                product: 'CH3CH2Br',
                showSteps: true
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `electrophilic_addition_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Resonance Stabilization',
        problem: 'Draw resonance structures for allyl carbocation CH₂=CH-CH₂⁺. Show electron delocalization.',
        parameters: {
            molecule: 'allyl_carbocation',
            showResonance: true,
            showDelocalization: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Structure 1: CH₂=CH-CH₂⁺ (+ on C3)',
            'Move π electrons toward positive charge',
            'Structure 2: ⁺CH₂-CH=CH₂ (+ on C1)',
            'Resonance hybrid: positive charge delocalized',
            'Stabilized carbocation due to resonance'
        ],
        helper: 'Resonance: delocalization of electrons increases stability',
        realWorldContext: 'Understanding carbocation stability',
        diagramInfo: {
            type: 'resonance',
            registryKey: 'resonanceStructures',
            renderOptions: {
                showArrows: true,
                showHybrid: true,
                molecule: 'allyl_carbocation',
                structures: 2
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `resonance_allyl_carbocation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Free Radical Mechanism',
        problem: 'Show free radical chlorination: CH₄ + Cl₂ → CH₃Cl + HCl. Draw initiation, propagation, termination.',
        parameters: {
            mechanism: 'free_radical',
            substrate: 'CH4',
            reagent: 'Cl2',
            showAllSteps: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Initiation: Cl₂ → 2Cl· (homolytic cleavage by UV light)',
            'Propagation 1: Cl· + CH₄ → HCl + CH₃·',
            'Propagation 2: CH₃· + Cl₂ → CH₃Cl + Cl·',
            'Termination: Cl· + Cl· → Cl₂ (or other radical combinations)',
            'Chain reaction mechanism'
        ],
        helper: 'Free radical: single electron shown with dot (·); homolytic cleavage',
        realWorldContext: 'Industrial chlorination of methane',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'free_radical',
                reactants: ['CH4', 'Cl2'],
                product: 'CH3Cl',
                showAllPhases: true
            },
            canvasSize: { width: 1200, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `free_radical_chlorination_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedPolymersDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Addition Polymerization - Ethene',
        problem: 'Show polymerization of ethene to polyethylene. Draw repeating unit.',
        parameters: {
            monomer: 'ethene',
            polymer: 'polyethylene',
            polymerizationType: 'addition'
        },
        type: 'polymers',
        subparts: [
            'Monomer: CH₂=CH₂ (ethene)',
            'Double bond opens under heat/pressure/catalyst',
            'Forms -CH₂-CH₂- repeating unit',
            'Polymer: [-CH₂-CH₂-]ₙ where n = thousands',
            'Addition polymerization (no small molecule lost)'
        ],
        helper: 'Addition polymer: double bond opens, monomers link; formula: [-monomer-]ₙ',
        realWorldContext: 'Plastic bags and bottles',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'ethene',
                polymer: 'polyethylene'
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
            const filename = `polyethylene_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Naming Polymers',
        problem: 'Name the polymer formed from propene (CH₃CH=CH₂). Draw structure.',
        parameters: {
            monomer: 'propene',
            namePolymer: true,
            drawStructure: true
        },
        type: 'polymers',
        subparts: [
            'Monomer: propene CH₃-CH=CH₂',
            'Polymer name: poly(propene) or polypropylene',
            'Repeating unit: [-CH₂-CH(CH₃)-]ₙ',
            'Systematic naming: poly + (monomer name)',
            'Common name: polypropylene (PP)'
        ],
        helper: 'Polymer naming: poly(monomer name) in parentheses',
        realWorldContext: 'Polypropylene in food containers',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'propene',
                polymer: 'polypropylene',
                showNaming: true
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
            const filename = `polypropylene_naming_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Condensation Polymerization',
        problem: 'Show polyester formation from HOOC-COOH + HO-CH₂-CH₂-OH. Identify eliminated molecule.',
        parameters: {
            monomer1: 'dicarboxylic_acid',
            monomer2: 'diol',
            polymerizationType: 'condensation',
            identifyByproduct: true
        },
        type: 'polymers',
        subparts: [
            'Monomers: diacid + diol',
            'Ester linkage forms: -COO-',
            'Water eliminated at each linkage',
            'Repeating unit: [-OC-CO-O-CH₂-CH₂-]ₙ',
            'Condensation polymer: small molecule (H₂O) eliminated'
        ],
        helper: 'Condensation: two different monomers react, eliminating H₂O (or HCl, NH₃)',
        realWorldContext: 'Polyester (PET) in clothing and bottles',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                polymerizationType: 'condensation',
                showByproduct: true,
                showEsterLinkage: true
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `condensation_polyester_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'PVC Formation',
        problem: 'Show formation of PVC from vinyl chloride (CH₂=CHCl). Draw repeating unit.',
        parameters: {
            monomer: 'vinyl_chloride',
            polymer: 'PVC',
            drawRepeatingUnit: true
        },
        type: 'polymers',
        subparts: [
            'Monomer: vinyl chloride CH₂=CHCl',
            'Addition polymerization',
            'Repeating unit: [-CH₂-CHCl-]ₙ',
            'Polymer: poly(vinyl chloride) = PVC',
            'Used in pipes and insulation'
        ],
        helper: 'PVC: common polymer for construction materials',
        realWorldContext: 'PVC pipes and vinyl records',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'vinyl_chloride',
                polymer: 'PVC'
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
            const filename = `pvc_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nylon Formation',
        problem: 'Show nylon-6,6 synthesis from hexanedioic acid + hexane-1,6-diamine. Identify linkage type.',
        parameters: {
            monomer1: 'hexanedioic_acid',
            monomer2: 'hexanediamine',
            polymer: 'nylon-6,6',
            identifyLinkage: true
        },
        type: 'polymers',
        subparts: [
            'Monomers: 6-carbon diacid + 6-carbon diamine',
            'Amide linkage forms: -CONH-',
            'Water eliminated at each linkage',
            'Repeating unit: [-OC-(CH₂)₄-CO-NH-(CH₂)₆-NH-]ₙ',
            'Polyamide: contains amide groups'
        ],
        helper: 'Nylon: condensation polymer with amide linkages; strong fibers',
        realWorldContext: 'Nylon in clothing, ropes, parachutes',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                polymerizationType: 'condensation',
                showByproduct: true,
                showAmideLinkage: true,
                polymer: 'nylon-6,6'
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nylon_66_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// ============================================================================
// REDOX CHEMISTRY GENERATORS (6 generators)
// ============================================================================

generateRelatedRedoxStoichiometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Redox Titration Calculation',
        problem: '25.0 mL of 0.02 M KMnO₄ reacts with Fe²⁺ solution. MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O. Find moles Fe²⁺.',
        parameters: {
            volume: 0.025,
            molarity: 0.02,
            equation: 'MnO4- + 5Fe2+ + 8H+ → Mn2+ + 5Fe3+ + 4H2O',
            findMoles: 'Fe2+'
        },
        type: 'redox_stoichiometry',
        subparts: [
            'Step 1: mol MnO₄⁻ = M × V = 0.02 × 0.025 = 0.0005 mol',
            'Step 2: Mole ratio MnO₄⁻:Fe²⁺ = 1:5',
            'Step 3: mol Fe²⁺ = 0.0005 × 5 = 0.0025 mol',
            'Answer: 0.0025 mol Fe²⁺ reacted'
        ],
        helper: 'Redox stoichiometry: balance equation first, then use mole ratios',
        realWorldContext: 'Iron analysis in ores',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: true,
                showColorChange: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `redox_titration_stoich_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Redox Reaction',
        problem: 'Zn + Cu²⁺ → Zn²⁺ + Cu. If 1 mol Zn reacts, how many moles Cu produced?',
        parameters: {
            equation: 'Zn + Cu2+ → Zn2+ + Cu',
            givenMoles: 1,
            findMoles: 'Cu'
        },
        type: 'redox_stoichiometry',
        subparts: [
            'Balanced equation: 1 Zn : 1 Cu²⁺ : 1 Zn²⁺ : 1 Cu',
            'Mole ratio Zn:Cu = 1:1',
            '1 mol Zn produces 1 mol Cu',
            'Answer: 1 mol Cu'
        ],
        helper: '1:1 mole ratio simplifies calculations',
        realWorldContext: 'Displacement reactions',
        diagramInfo: {
            type: 'stoichiometricRatio',
            registryKey: 'stoichiometricRatio',
            renderOptions: {
                showMoleRatios: true,
                showTable: true,
                equation: 'Zn + Cu2+ → Zn2+ + Cu',
                highlightRedox: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `simple_redox_stoich_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dichromate Titration',
        problem: 'Cr₂O₇²⁻ + 14H⁺ + 6Fe²⁺ → 2Cr³⁺ + 6Fe³⁺ + 7H₂O. 20 mL of 0.01 M K₂Cr₂O₇ used. Find mass Fe²⁺ reacted.',
        parameters: {
            volume: 0.020,
            molarity: 0.01,
            equation: 'Cr2O7_2- + 14H+ + 6Fe2+ → 2Cr3+ + 6Fe3+ + 7H2O',
            findMass: 'Fe2+'
        },
        type: 'redox_stoichiometry',
        subparts: [
            'mol Cr₂O₇²⁻ = 0.01 × 0.020 = 0.0002 mol',
            'Ratio Cr₂O₇²⁻:Fe²⁺ = 1:6',
            'mol Fe²⁺ = 0.0002 × 6 = 0.0012 mol',
            'M(Fe) = 55.85 g/mol',
            'mass = 0.0012 × 55.85 = 0.067 g Fe²⁺'
        ],
        helper: 'Pathway: volume → moles Cr₂O₇²⁻ → moles Fe²⁺ → mass Fe²⁺',
        realWorldContext: 'Iron content determination',
        diagramInfo: {
            type: 'stoichiometryRoadmap',
            registryKey: 'stoichiometryRoadmap',
            renderOptions: {
                showSteps: true,
                showArrows: true,
                highlightRedox: true,
                includeColorChange: true
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
            const filename = `dichromate_titration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Iodine-Thiosulfate Titration',
        problem: 'I₂ + 2S₂O₃²⁻ → 2I⁻ + S₄O₆²⁻. 15 mL of 0.1 M Na₂S₂O₃ reacts. Find moles I₂.',
        parameters: {
            volume: 0.015,
            molarity: 0.1,
            equation: 'I2 + 2S2O3_2- → 2I- + S4O6_2-',
            findMoles: 'I2'
        },
        type: 'redox_stoichiometry',
        subparts: [
            'mol S₂O₃²⁻ = 0.1 × 0.015 = 0.0015 mol',
            'Ratio I₂:S₂O₃²⁻ = 1:2',
            'mol I₂ = 0.0015 ÷ 2 = 0.00075 mol',
            'Answer: 0.00075 mol I₂'
        ],
        helper: 'Iodometric titration: common for oxidizing agent analysis',
        realWorldContext: 'Vitamin C determination',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: true,
                showStarchIndicator: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `iodine_thiosulfate_titration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Percentage Purity Calculation',
        problem: 'Impure Fe sample (2.5 g) needs 30 mL of 0.02 M MnO₄⁻. Find % purity Fe. (MnO₄⁻ + 5Fe²⁺ → Mn²⁺ + 5Fe³⁺)',
        parameters: {
            sampleMass: 2.5,
            volume: 0.030,
            molarity: 0.02,
            equation: 'MnO4- + 5Fe2+ → Mn2+ + 5Fe3+',
            findPercentPurity: true
        },
        type: 'redox_stoichiometry',
        subparts: [
            'mol MnO₄⁻ = 0.02 × 0.030 = 0.0006 mol',
            'mol Fe²⁺ = 0.0006 × 5 = 0.003 mol',
            'mass pure Fe = 0.003 × 55.85 = 0.1676 g',
            '% purity = (0.1676 / 2.5) × 100%',
            'Answer: 6.7% Fe purity'
        ],
        helper: '% purity = (actual mass / total mass) × 100%',
        realWorldContext: 'Ore purity analysis',
        diagramInfo: {
            type: 'yieldDiagram',
            registryKey: 'yieldDiagram',
            renderOptions: {
                showPercentage: true,
                showBars: true,
                theoretical: 2.5,
                actual: 0.1676,
                showPurityCalculation: true
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
            const filename = `percent_purity_redox_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedOxidationStatesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Assigning Oxidation States',
        problem: 'Determine oxidation states of all atoms in H₂SO₄.',
        parameters: {
            compound: 'H2SO4',
            assignAllOxidationStates: true
        },
        type: 'oxidation_states',
        subparts: [
            'Rule 1: H is usually +1',
            'Rule 2: O is usually -2',
            'H₂SO₄: 2(+1) + S + 4(-2) = 0 (neutral)',
            'Solve: 2 + S - 8 = 0, S = +6',
            'H: +1, S: +6, O: -2'
        ],
        helper: 'Rules: H=+1, O=-2, sum = charge on species; Most electronegative gets negative',
        realWorldContext: 'Determining oxidation states in compounds',
        diagramInfo: {
            type: 'molarMass',
            registryKey: 'molarMass',
            renderOptions: {
                showBreakdown: true,
                showCalculation: true,
                compound: 'H2SO4',
                showOxidationStates: true
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
            const filename = `oxidation_states_H2SO4_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Oxidation State in Ions',
        problem: 'Find oxidation state of Cr in Cr₂O₇²⁻ (dichromate ion).',
        parameters: {
            ion: 'Cr2O7_2-',
            charge: -2,
            findOxidationState: 'Cr'
        },
        type: 'oxidation_states',
        subparts: [
            'O is -2 (7 oxygen atoms)',
            'Ion charge = -2',
            '2(Cr) + 7(-2) = -2',
            '2Cr - 14 = -2',
            'Cr = +6'
        ],
        helper: 'For ions: sum of oxidation states = ion charge',
        realWorldContext: 'Dichromate as oxidizing agent',
        diagramInfo: {
            type: 'molarMass',
            registryKey: 'molarMass',
            renderOptions: {
                showBreakdown: true,
                showCalculation: true,
                compound: 'Cr2O7_2-',
                showOxidationStates: true,
                highlightIonCharge: true
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
            const filename = `oxidation_state_dichromate_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Identifying Redox Changes',
        problem: 'In Zn + Cu²⁺ → Zn²⁺ + Cu, identify what is oxidized and reduced. Show oxidation state changes.',
        parameters: {
            equation: 'Zn + Cu2+ → Zn2+ + Cu',
            identifyRedox: true,
            showChanges: true
        },
        type: 'oxidation_states',
        subparts: [
            'Zn: 0 → +2 (increases, oxidized, loses electrons)',
            'Cu: +2 → 0 (decreases, reduced, gains electrons)',
            'Zn is reducing agent (causes reduction of Cu)',
            'Cu²⁺ is oxidizing agent (causes oxidation of Zn)',
            'Electrons transferred: 2e⁻'
        ],
        helper: 'Oxidation = loss of e⁻ (increase in ox. state); Reduction = gain of e⁻ (decrease)',
        realWorldContext: 'Metal displacement reactions',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'Zn + Cu2+ → Zn2+ + Cu',
                showOxidationStates: true,
                highlightRedox: true
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
            const filename = `redox_changes_identification_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Oxidation States in Organic Compounds',
        problem: 'Find average oxidation state of C in CH₃OH (methanol).',
        parameters: {
            compound: 'CH3OH',
            element: 'C',
            organicCompound: true
        },
        type: 'oxidation_states',
        subparts: [
            'H is +1, O is -2',
            'CH₃OH: C + 4(+1) + (-2) = 0',
            'C + 4 - 2 = 0',
            'C = -2',
            'Carbon oxidation state: -2'
        ],
        helper: 'Organic compounds: assign H=+1, O=-2, then solve for C',
        realWorldContext: 'Oxidation states in organic chemistry',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'ethanol',
                showOxidationStates: true
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
            const filename = `oxidation_state_organic_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Disproportionation Reaction',
        problem: 'In 3Cl₂ + 6OH⁻ → 5Cl⁻ + ClO₃⁻ + 3H₂O, show Cl₂ is both oxidized and reduced.',
        parameters: {
            equation: '3Cl2 + 6OH- → 5Cl- + ClO3- + 3H2O',
            disproportionation: true,
            showBothChanges: true
        },
        type: 'oxidation_states',
        subparts: [
            'Cl₂: 0 (elemental)',
            'Cl⁻: -1 (reduced from 0)',
            'ClO₃⁻: Cl is +5 (oxidized from 0)',
            'Same element both oxidized AND reduced',
            'Disproportionation: one species → two oxidation states'
        ],
        helper: 'Disproportionation: element simultaneously oxidized and reduced',
        realWorldContext: 'Chlorine reaction in base',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: '3Cl2 + 6OH- → 5Cl- + ClO3- + 3H2O',
                showOxidationStates: true,
                highlightDisproportionation: true
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `disproportionation_chlorine_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedHalfReactionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Writing Half-Reactions',
        problem: 'Zn + Cu²⁺ → Zn²⁺ + Cu. Write oxidation and reduction half-reactions.',
        parameters: {
            equation: 'Zn + Cu2+ → Zn2+ + Cu',
            writeHalfReactions: true
        },
        type: 'half_reactions',
        subparts: [
            'Identify changes: Zn → Zn²⁺ (oxidation), Cu²⁺ → Cu (reduction)',
            'Oxidation half: Zn → Zn²⁺ + 2e⁻',
            'Reduction half: Cu²⁺ + 2e⁻ → Cu',
            'Check: electrons balance (2e⁻ each)',
            'Add half-reactions to get overall equation'
        ],
        helper: 'Oxidation half: species → ion + e⁻; Reduction half: ion + e⁻ → species',
        realWorldContext: 'Galvanic cell half-reactions',
        diagramInfo: {
            type: 'electrodeProcesses',
            registryKey: 'electrodeProcesses',
            renderOptions: {
                showHalfReactions: true,
                showElectrons: true,
                reactions: ['oxidation', 'reduction'],
                equation: 'Zn + Cu2+ → Zn2+ + Cu'
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
            const filename = `half_reactions_ZnCu_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Balancing Electrons',
        problem: 'Balance electrons: Al → Al³⁺ and O₂ → O²⁻. Find electron transfer.',
        parameters: {
            oxidation: 'Al → Al3+',
            reduction: 'O2 → O2-',
            balanceElectrons: true
        },
        type: 'half_reactions',
        subparts: [
            'Oxidation: Al → Al³⁺ + 3e⁻',
            'Reduction: O₂ + 4e⁻ → 2O²⁻',
            'LCM of 3 and 4 = 12',
            'Multiply oxidation by 4: 4Al → 4Al³⁺ + 12e⁻',
            'Multiply reduction by 3: 3O₂ + 12e⁻ → 6O²⁻'
        ],
        helper: 'Electrons lost = electrons gained; Use LCM to balance',
        realWorldContext: 'Aluminum oxidation',
        diagramInfo: {
            type: 'electrodeProcesses',
            registryKey: 'electrodeProcesses',
            renderOptions: {
                showHalfReactions: true,
                showElectrons: true,
                showBalancing: true,
                reactions: ['oxidation', 'reduction']
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
            const filename = `balancing_electrons_AlO_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Half-Reactions in Acidic Solution',
        problem: 'Balance MnO₄⁻ → Mn²⁺ in acidic solution. Show all steps.',
        parameters: {
            halfReaction: 'MnO4- → Mn2+',
            medium: 'acidic',
            balanceCompletely: true
        },
        type: 'half_reactions',
        subparts: [
            'Step 1: Balance Mn (already balanced)',
            'Step 2: Balance O by adding H₂O: MnO₄⁻ → Mn²⁺ + 4H₂O',
            'Step 3: Balance H by adding H⁺: MnO₄⁻ + 8H⁺ → Mn²⁺ + 4H₂O',
            'Step 4: Balance charge with e⁻: MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
            'Check: atoms and charges balanced'
        ],
        helper: 'Acidic: use H₂O for O, H⁺ for H, then e⁻ for charge',
        realWorldContext: 'Permanganate titrations',
        diagramInfo: {
            type: 'electrodeProcesses',
            registryKey: 'electrodeProcesses',
            renderOptions: {
                showHalfReactions: true,
                showElectrons: true,
                showStepByStep: true,
                medium: 'acidic',
                reaction: 'MnO4- → Mn2+'
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `half_reaction_acidic_MnO4_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Reactions in Basic Solution',
        problem: 'Balance Cr(OH)₃ → CrO₄²⁻ in basic solution.',
        parameters: {
            halfReaction: 'Cr(OH)3 → CrO4_2-',
            medium: 'basic',
            balanceCompletely: true
        },
        type: 'half_reactions',
        subparts: [
            'Step 1: Balance Cr (already balanced)',
            'Step 2: Balance O: Cr(OH)₃ + H₂O → CrO₄²⁻',
            'Step 3: Balance H with OH⁻: Cr(OH)₃ + 5OH⁻ → CrO₄²⁻ + 4H₂O',
            'Step 4: Balance charge: Cr(OH)₃ + 5OH⁻ → CrO₄²⁻ + 4H₂O + 3e⁻',
            'Check: atoms and charges balanced'
        ],
        helper: 'Basic: use H₂O and OH⁻; or balance in acid then add OH⁻',
        realWorldContext: 'Chromate formation in base',
        diagramInfo: {
            type: 'electrodeProcesses',
            registryKey: 'electrodeProcesses',
            renderOptions: {
                showHalfReactions: true,
                showElectrons: true,
                showStepByStep: true,
                medium: 'basic',
                reaction: 'Cr(OH)3 → CrO4_2-'
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `half_reaction_basic_Cr_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combining Half-Reactions',
        problem: 'Combine: Fe²⁺ → Fe³⁺ + e⁻ and MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O to get overall equation.',
        parameters: {
            oxidation: 'Fe2+ → Fe3+ + e-',
            reduction: 'MnO4- + 8H+ + 5e- → Mn2+ + 4H2O',
            combineHalfReactions: true
        },
        type: 'half_reactions',
        subparts: [
            'Balance electrons: multiply oxidation by 5',
            '5Fe²⁺ → 5Fe³⁺ + 5e⁻',
            'MnO₄⁻ + 8H⁺ + 5e⁻ → Mn²⁺ + 4H₂O',
            'Add and cancel electrons:',
            'MnO₄⁻ + 5Fe²⁺ + 8H⁺ → Mn²⁺ + 5Fe³⁺ + 4H₂O'
        ],
        helper: 'Balance electrons, add half-reactions, cancel common terms',
        realWorldContext: 'Redox titration equation',
        diagramInfo: {
            type: 'electrodeProcesses',
            registryKey: 'electrodeProcesses',
            renderOptions: {
                showHalfReactions: true,
                showElectrons: true,
                showCombining: true,
                showOverallEquation: true
            },
            canvasSize: { width: 1200, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `combining_half_reactions_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// Continue with remaining generators...
// Due to length, I'll provide the structure for the remaining generators

generateRelatedElectrochemistryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Standard Cell Potential',
        problem: 'Zn|Zn²⁺||Cu²⁺|Cu cell. E°(Zn²⁺/Zn) = -0.76 V, E°(Cu²⁺/Cu) = +0.34 V. Calculate E°_cell.',
        parameters: {
            anode: 'Zn',
            cathode: 'Cu',
            E_anode: -0.76,
            E_cathode: 0.34,
            calculateE_cell: true
        },
        type: 'electrochemistry',
        subparts: [
            'E°_cell = E°_cathode - E°_anode',
            'Cathode (reduction): Cu²⁺ + 2e⁻ → Cu, E° = +0.34 V',
            'Anode (oxidation): Zn → Zn²⁺ + 2e⁻, E° = -0.76 V',
            'E°_cell = 0.34 - (-0.76)',
            'E°_cell = 1.10 V (spontaneous, positive)'
        ],
        helper: 'E°_cell = E°_cathode - E°_anode; Positive E°_cell = spontaneous',
        realWorldContext: 'Galvanic cell voltage',
        diagramInfo: {
            type: 'galvanicCell',
            registryKey: 'galvanicCell',
            renderOptions: {
                showElectronFlow: true,
                showIonFlow: true,
                showSaltBridge: true,
                anode: 'Zn',
                cathode: 'Cu'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `standard_cell_potential_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identifying Anode and Cathode',
        problem: 'In Zn-Cu cell, which is anode? Which is cathode? Explain electron flow.',
        parameters: {
            cell: 'Zn-Cu',
            identifyElectrodes: true,
            explainFlow: true
        },
        type: 'electrochemistry',
        subparts: [
            'Anode: oxidation occurs (Zn → Zn²⁺ + 2e⁻)',
            'Cathode: reduction occurs (Cu²⁺ + 2e⁻ → Cu)',
            'Electrons flow from anode (Zn) to cathode (Cu) through wire',
            'Mnemonic: AN OX (anode oxidation), RED CAT (reduction cathode)',
            'Zn has lower (more negative) E°, so it oxidizes'
        ],
        helper: 'Anode = oxidation (loses e⁻); Cathode = reduction (gains e⁻); Electrons flow anode → cathode',
        realWorldContext: 'Battery electrode identification',
        diagramInfo: {
            type: 'galvanicCell',
            registryKey: 'galvanicCell',
            renderOptions: {
                showElectronFlow: true,
                showIonFlow: false,
                showSaltBridge: true,
                anode: 'Zn',
                cathode: 'Cu',
                highlightElectrodes: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `identifying_electrodes_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nernst Equation Application',
        problem: 'Zn|Zn²⁺(0.01 M)||Cu²⁺(1.0 M)|Cu. E°_cell = 1.10 V. Calculate E_cell at 25°C using Nernst equation.',
        parameters: {
            E_cell_standard: 1.10,
            concentration_Zn: 0.01,
            concentration_Cu: 1.0,
            temperature: 298,
            useNernst: true
        },
        type: 'electrochemistry',
        subparts: [
            'Nernst: E = E° - (RT/nF) ln Q or E = E° - (0.0592/n) log Q at 25°C',
            'Zn + Cu²⁺ → Zn²⁺ + Cu; n = 2 electrons',
            'Q = [Zn²⁺]/[Cu²⁺] = 0.01/1.0 = 0.01',
            'E = 1.10 - (0.0592/2) log(0.01)',
            'E = 1.10 - 0.0296(-2) = 1.10 + 0.059 = 1.16 V'
        ],
        helper: 'Nernst: E = E° - (0.0592/n) log Q at 25°C; Dilute anode → higher voltage',
        realWorldContext: 'Non-standard condition cell voltage',
        diagramInfo: {
            type: 'galvanicCell',
            registryKey: 'galvanicCell',
            renderOptions: {
                showElectronFlow: true,
                showIonFlow: true,
                showSaltBridge: true,
                anode: 'Zn',
                cathode: 'Cu',
                showNernst: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nernst_equation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electrochemical Series',
        problem: 'Using E° values: Mg²⁺/Mg (-2.37 V), Zn²⁺/Zn (-0.76 V), Cu²⁺/Cu (+0.34 V). Rank oxidizing strength.',
        parameters: {
            reductionPotentials: [
                { species: 'Mg2+/Mg', E: -2.37 },
                { species: 'Zn2+/Zn', E: -0.76 },
                { species: 'Cu2+/Cu', E: 0.34 }
            ],
            rankOxidizingStrength: true
        },
        type: 'electrochemistry',
        subparts: [
            'Higher (more positive) E° = stronger oxidizing agent',
            'Oxidizing agents gain electrons (reduction)',
            'Ranking oxidizing agents: Cu²⁺ > Zn²⁺ > Mg²⁺',
            'Reducing agents (opposite): Mg > Zn > Cu',
            'Most negative E° = strongest reducing agent'
        ],
        helper: 'Oxidizing agent strength: more positive E°; Reducing agent: more negative E°',
        realWorldContext: 'Predicting spontaneous redox reactions',
        diagramInfo: {
            type: 'electrochemicalSeries',
            registryKey: 'electrochemicalSeries',
            renderOptions: {
                showPotentials: true,
                showArrow: true,
                elements: ['Cu', 'Zn', 'Mg'],
                highlightOxidizingStrength: true
            },
            canvasSize: { width: 700, height: 900 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `electrochemical_series_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relationship Between ΔG° and E°',
        problem: 'Show that E°_cell = 1.10 V corresponds to ΔG° = -212 kJ for Zn-Cu cell (n=2).',
        parameters: {
            E_cell: 1.10,
            n: 2,
            relateDeltaG: true,
            verifyRelationship: true
        },
        type: 'electrochemistry',
        subparts: [
            'ΔG° = -nFE°',
            'n = 2 moles electrons, F = 96,485 C/mol (Faraday constant)',
            'ΔG° = -(2)(96485)(1.10)',
            'ΔG° = -212,267 J = -212 kJ',
            'Negative ΔG° confirms spontaneous (as expected from positive E°)'
        ],
        helper: 'ΔG° = -nFE°; Positive E° → negative ΔG° → spontaneous',
        realWorldContext: 'Connecting electrochemistry and thermodynamics',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [1.10, -212],
                labels: ['E°_cell (V)', 'ΔG° (kJ)'],
                showRelationship: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `delta_g_ecell_relationship_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}



generateRelatedGalvaniCellsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Concentration Cell',
        problem: 'Two Cu electrodes: one in 1.0 M Cu²⁺, other in 0.01 M Cu²⁺. Draw the concentration cell and calculate voltage using Nernst equation.',
        parameters: {
            electrode: 'Cu',
            concentration1: 1.0,
            concentration2: 0.01,
            temperature: 298
        },
        type: 'galvanic_cells',
        subparts: [
            'Concentration cell: same electrode, different concentrations',
            'Higher concentration → cathode (reduction)',
            'Lower concentration → anode (oxidation)',
            'Nernst equation: E = E° - (0.0592/n) log(Q)',
            'For concentration cell: E° = 0',
            'E = -(0.0592/2) log(0.01/1.0) = -(0.0296) log(0.01)',
            'E = -(0.0296)(-2) = 0.0592 V'
        ],
        helper: 'Nernst equation: E = E° - (RT/nF)lnQ = E° - (0.0592/n)logQ at 25°C',
        realWorldContext: 'pH meters, biological membranes',
        diagramInfo: {
            type: 'concentration_cell',
            registryKey: 'concentrationCellDiagram',
            renderOptions: {
                electrode: 'Cu',
                concentration1: 1.0,
                concentration2: 0.01,
                showConcentrations: true,
                showElectronFlow: true,
                showNernstEquation: true
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
                const filename = `chemistry_concentration_cell_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Daniell Cell Analysis',
        problem: 'Standard Daniell cell (Zn|Zn²⁺||Cu²⁺|Cu). If [Zn²⁺] = 0.1 M and [Cu²⁺] = 2.0 M, find actual cell potential at 25°C.',
        parameters: {
            E0cell: 1.10,
            znConcentration: 0.1,
            cuConcentration: 2.0,
            n: 2
        },
        type: 'galvanic_cells',
        subparts: [
            'Standard cell potential: E°cell = 1.10 V',
            'Reaction: Zn + Cu²⁺ → Zn²⁺ + Cu',
            'Reaction quotient: Q = [Zn²⁺]/[Cu²⁺] = 0.1/2.0 = 0.05',
            'Nernst equation: E = E° - (0.0592/n) log(Q)',
            'E = 1.10 - (0.0592/2) log(0.05)',
            'E = 1.10 - (0.0296)(-1.30) = 1.10 + 0.038',
            'E = 1.138 V (higher than standard due to favorable Q)'
        ],
        helper: 'Lower [products]/[reactants] → higher voltage; Q < 1 increases E',
        realWorldContext: 'Understanding battery voltage under operating conditions'
    });

    return relatedProblems;
}

generateRelatedElectrolysisDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electrolysis of Water',
        problem: 'Draw electrolysis setup for water with inert electrodes. Calculate volume of gases produced when 2 A current runs for 1 hour.',
        parameters: {
            substance: 'water',
            current: 2,
            time: 3600,
            electrodes: 'inert'
        },
        type: 'electrolysis',
        subparts: [
            'Cathode (negative): 2H₂O + 2e⁻ → H₂ + 2OH⁻ (H₂ produced)',
            'Anode (positive): 2H₂O → O₂ + 4H⁺ + 4e⁻ (O₂ produced)',
            'Overall: 2H₂O → 2H₂ + O₂',
            'Charge: Q = It = 2 A × 3600 s = 7200 C',
            'Moles of electrons: n = Q/F = 7200/96,485 = 0.0746 mol e⁻',
            'Moles H₂: 0.0746/2 = 0.0373 mol → 0.836 L at STP',
            'Moles O₂: 0.0746/4 = 0.0187 mol → 0.418 L at STP',
            'H₂:O₂ ratio = 2:1'
        ],
        helper: 'Faraday\'s laws: Q = It, n(e⁻) = Q/F, F = 96,485 C/mol',
        realWorldContext: 'Hydrogen production, chlor-alkali process',
        diagramInfo: {
            type: 'electrolysis_cell',
            registryKey: 'electrolysisSetup',
            renderOptions: {
                substance: 'water',
                showElectrodes: true,
                showBattery: true,
                showGasCollection: true,
                showReactions: true,
                showElectronFlow: true
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
                const filename = `chemistry_electrolysis_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electroplating Calculation',
        problem: 'Silver is electroplated onto a spoon using 0.5 A current for 30 minutes. Calculate mass of silver deposited. (Ag⁺ + e⁻ → Ag)',
        parameters: {
            metal: 'Ag',
            current: 0.5,
            timeMinutes: 30,
            molarMass: 107.87
        },
        type: 'electrolysis',
        subparts: [
            'Time: t = 30 min × 60 s/min = 1800 s',
            'Charge: Q = It = 0.5 × 1800 = 900 C',
            'Moles of electrons: n(e⁻) = Q/F = 900/96,485 = 0.00933 mol',
            'Half-reaction: Ag⁺ + e⁻ → Ag (1:1 ratio)',
            'Moles of Ag: n(Ag) = 0.00933 mol',
            'Mass: m = n × M = 0.00933 × 107.87 = 1.006 g',
            'About 1 gram of silver deposited'
        ],
        helper: 'Electroplating: m = (Q × M)/(n × F) where n = electrons per ion',
        realWorldContext: 'Jewelry plating, corrosion protection'
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Electrolysis of Molten NaCl',
        problem: 'Draw electrolysis of molten NaCl. Calculate masses of Na and Cl₂ produced when 5 A runs for 2 hours.',
        parameters: {
            compound: 'NaCl',
            state: 'molten',
            current: 5,
            timeHours: 2
        },
        type: 'electrolysis',
        subparts: [
            'Cathode: Na⁺ + e⁻ → Na (reduction)',
            'Anode: 2Cl⁻ → Cl₂ + 2e⁻ (oxidation)',
            'Time: t = 2 h × 3600 s/h = 7200 s',
            'Charge: Q = 5 × 7200 = 36,000 C',
            'Moles e⁻: n = 36,000/96,485 = 0.373 mol',
            'Na: 0.373 mol → mass = 0.373 × 23 = 8.58 g',
            'Cl₂: 0.373/2 = 0.187 mol → mass = 0.187 × 71 = 13.3 g'
        ],
        helper: 'Molten electrolysis: cations → cathode, anions → anode',
        realWorldContext: 'Industrial sodium and chlorine production',
        diagramInfo: {
            type: 'molten_electrolysis',
            registryKey: 'moltenElectrolysis',
            renderOptions: {
                compound: 'NaCl',
                showMoltenState: true,
                showProducts: true,
                showReactions: true,
                showElectronFlow: true
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
                const filename = `chemistry_molten_electrolysis_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}


// ============================================================================
// ACID-BASE CHEMISTRY GENERATORS (5 generators)
// ============================================================================

generateRelatedAcidBaseDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Acid-Base Neutralization Stoichiometry',
        problem: 'HCl + NaOH → NaCl + H₂O. 50 mL of 0.2 M HCl neutralizes how many mL of 0.1 M NaOH?',
        parameters: {
            equation: 'HCl + NaOH → NaCl + H2O',
            acidVolume: 0.05,
            acidMolarity: 0.2,
            baseMolarity: 0.1,
            findBaseVolume: true
        },
        type: 'acid_base_neutralization',
        subparts: [
            'Neutralization: acid + base → salt + water',
            'mol HCl = M × V = 0.2 × 0.05 = 0.01 mol',
            'Ratio HCl:NaOH = 1:1',
            'mol NaOH needed = 0.01 mol',
            'V = n/M = 0.01 / 0.1 = 0.1 L = 100 mL'
        ],
        helper: 'Neutralization: n(H⁺) = n(OH⁻); Use M₁V₁ = M₂V₂ for monoprotic',
        realWorldContext: 'Antacid neutralizing stomach acid',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: true,
                showNeutralization: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `acid_base_neutralization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Strong Acid-Strong Base',
        problem: 'Classify HCl and NaOH. Why is their neutralization complete?',
        parameters: {
            acid: 'HCl',
            base: 'NaOH',
            classifyStrength: true,
            explainComplete: true
        },
        type: 'acid_base_neutralization',
        subparts: [
            'HCl: strong acid (100% ionization)',
            'NaOH: strong base (100% dissociation)',
            'HCl → H⁺ + Cl⁻ (complete)',
            'NaOH → Na⁺ + OH⁻ (complete)',
            'H⁺ + OH⁻ → H₂O (goes to completion)'
        ],
        helper: 'Strong acids/bases: completely ionize; Weak: partially ionize',
        realWorldContext: 'Complete neutralization reactions',
        diagramInfo: {
            type: 'dissociation',
            registryKey: 'dissociationDiagram',
            renderOptions: {
                showWater: true,
                showIons: true,
                compound: 'HCl',
                showComplete: true
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
            const filename = `strong_acid_base_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diprotic Acid Neutralization',
        problem: 'H₂SO₄ + 2NaOH → Na₂SO₄ + 2H₂O. Calculate mL of 0.5 M NaOH to neutralize 25 mL of 0.2 M H₂SO₄.',
        parameters: {
            equation: 'H2SO4 + 2NaOH → Na2SO4 + 2H2O',
            acidVolume: 0.025,
            acidMolarity: 0.2,
            baseMolarity: 0.5,
            diprotic: true,
            findBaseVolume: true
        },
        type: 'acid_base_neutralization',
        subparts: [
            'H₂SO₄ is diprotic (2 H⁺ per molecule)',
            'mol H₂SO₄ = 0.2 × 0.025 = 0.005 mol',
            'mol H⁺ = 2 × 0.005 = 0.01 mol',
            'Ratio H⁺:OH⁻ = 1:1, so mol NaOH = 0.01 mol',
            'V = 0.01 / 0.5 = 0.02 L = 20 mL'
        ],
        helper: 'Diprotic acid: provides 2 H⁺; Triprotic: 3 H⁺; Calculate total H⁺',
        realWorldContext: 'Sulfuric acid neutralization',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: true,
                showDiprotic: true
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `diprotic_acid_neutralization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Salt Formation',
        problem: 'Identify salt formed when: (a) HNO₃ + KOH, (b) H₂SO₄ + Ca(OH)₂.',
        parameters: {
            reactions: [
                { acid: 'HNO3', base: 'KOH' },
                { acid: 'H2SO4', base: 'Ca(OH)2' }
            ],
            identifySalts: true
        },
        type: 'acid_base_neutralization',
        subparts: [
            '(a) HNO₃ + KOH → KNO₃ + H₂O',
            'Salt: potassium nitrate (KNO₃)',
            '(b) H₂SO₄ + Ca(OH)₂ → CaSO₄ + 2H₂O',
            'Salt: calcium sulfate (CaSO₄)',
            'Salt = cation from base + anion from acid'
        ],
        helper: 'Neutralization product: salt + water; Salt from base cation + acid anion',
        realWorldContext: 'Salt formation in neutralization',
        diagramInfo: {
            type: 'titrationStoichiometry',
            registryKey: 'titrationStoichiometry',
            renderOptions: {
                showEquation: true,
                showCalculations: false,
                showSaltFormation: true
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
            const filename = `salt_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Excess Reagent in Neutralization',
        problem: '30 mL of 0.3 M HCl + 20 mL of 0.3 M NaOH. What is pH of resulting solution?',
        parameters: {
            acidVolume: 0.03,
            acidMolarity: 0.3,
            baseVolume: 0.02,
            baseMolarity: 0.3,
            findpH: true,
            hasExcess: true
        },
        type: 'acid_base_neutralization',
        subparts: [
            'mol HCl = 0.3 × 0.03 = 0.009 mol',
            'mol NaOH = 0.3 × 0.02 = 0.006 mol',
            'HCl in excess: 0.009 - 0.006 = 0.003 mol H⁺ remaining',
            'Total volume = 50 mL = 0.05 L',
            '[H⁺] = 0.003 / 0.05 = 0.06 M; pH = -log(0.06) = 1.22'
        ],
        helper: 'Excess reagent: subtract neutralized amount, calculate [H⁺] or [OH⁻] in total volume',
        realWorldContext: 'Incomplete neutralization',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: true,
                showBuffer: false,
                titration: 'strong_acid_strong_base',
                showExcessReagent: true
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
            const filename = `excess_reagent_neutralization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedpHCalculationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    
    // 5+ problems with pH, pOH, [H+], [OH-] calculations



// Using 'phScale', 'titrationCurve' registry keys
    
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'pH from [H⁺]',
        problem: 'Calculate pH if [H⁺] = 1.0 × 10⁻³ M. Show on pH scale.',
        parameters: {
            concentration_H: 1.0e-3,
            findpH: true
        },
        type: 'ph_calculations',
        subparts: [
            'pH = -log[H⁺]',
            'pH = -log(1.0 × 10⁻³)',
            'pH = -(-3)',
            'pH = 3',
            'Acidic solution (pH < 7)'
        ],
        helper: 'pH = -log[H⁺]; pH < 7 acidic, pH = 7 neutral, pH > 7 basic',
        realWorldContext: 'Acid strength measurement',
        diagramInfo: {
            type: 'phScale',
            registryKey: 'phScale',
            renderOptions: {
                showColors: true,
                showExamples: true,
                highlightpH: 3,
                range: [0, 14]
            },
            canvasSize: { width: 1100, height: 400 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ph_scale_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: '[H⁺] from pH',
        problem: 'Find [H⁺] if pH = 5. Show calculation.',
        parameters: {
            pH: 5,
            findConcentration: true
        },
        type: 'ph_calculations',
        subparts: [
            'pH = -log[H⁺], so [H⁺] = 10⁻ᵖᴴ',
            '[H⁺] = 10⁻⁵',
            '[H⁺] = 1.0 × 10⁻⁵ M',
            'Acidic solution'
        ],
        helper: '[H⁺] = 10⁻ᵖᴴ or [H⁺] = antilog(-pH)',
        realWorldContext: 'Finding hydrogen ion concentration',
        diagramInfo: {
            type: 'phScale',
            registryKey: 'phScale',
            renderOptions: {
                showColors: true,
                showExamples: true,
                highlightpH: 5,
                showConcentration: true
            },
            canvasSize: { width: 1100, height: 400 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `concentration_from_ph_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'pH and pOH Relationship',
        problem: 'If [OH⁻] = 1.0 × 10⁻⁴ M, find pH. Use pH + pOH = 14.',
        parameters: {
            concentration_OH: 1.0e-4,
            findpH: true,
            usepOH: true
        },
        type: 'ph_calculations',
        subparts: [
            'Step 1: Find pOH = -log[OH⁻]',
            'pOH = -log(1.0 × 10⁻⁴) = 4',
            'Step 2: Use pH + pOH = 14',
            'pH = 14 - 4 = 10',
            'Basic solution (pH > 7)'
        ],
        helper: 'pH + pOH = 14 at 25°C; pOH = -log[OH⁻]',
        realWorldContext: 'Base concentration to pH',
        diagramInfo: {
            type: 'phScale',
            registryKey: 'phScale',
            renderOptions: {
                showColors: true,
                showExamples: true,
                highlightpH: 10,
                showpOH: true
            },
            canvasSize: { width: 1100, height: 400 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ph_poh_relationship_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Strong Acid pH',
        problem: 'Calculate pH of 0.01 M HCl solution.',
        parameters: {
            acid: 'HCl',
            concentration: 0.01,
            strongAcid: true,
            findpH: true
        },
        type: 'ph_calculations',
        subparts: [
            'HCl is strong acid (100% dissociation)',
            '[H⁺] = [HCl] = 0.01 M = 1.0 × 10⁻² M',
            'pH = -log(1.0 × 10⁻²)',
            'pH = 2',
            'Strong acid: pH calculated directly from concentration'
        ],
        helper: 'Strong acids: complete dissociation, [H⁺] = [acid]',
        realWorldContext: 'Hydrochloric acid solution pH',
        diagramInfo: {
            type: 'phScale',
            registryKey: 'phScale',
            renderOptions: {
                showColors: true,
                showExamples: true,
                highlightpH: 2,
                showStrongAcid: true
            },
            canvasSize: { width: 1100, height: 400 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `strong_acid_ph_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dilution Effect on pH',
        problem: 'pH 2 solution diluted 100-fold. What is new pH?',
        parameters: {
            initialpH: 2,
            dilutionFactor: 100,
            findNewpH: true
        },
        type: 'ph_calculations',
        subparts: [
            'Initial [H⁺] = 10⁻² = 0.01 M',
            'Dilution by 100: new [H⁺] = 0.01 / 100 = 1.0 × 10⁻⁴ M',
            'New pH = -log(1.0 × 10⁻⁴)',
            'New pH = 4',
            'pH increased by 2 units (100-fold dilution)'
        ],
        helper: 'Dilution by 10 increases pH by 1 unit (for acids)',
        realWorldContext: 'Dilution calculations',
        diagramInfo: {
            type: 'dilution',
            registryKey: 'dilution',
            renderOptions: {
                showBefore: true,
                showAfter: true,
                showFormula: true,
                showpHChange: true
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
            const filename = `dilution_ph_effect_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedBuffersDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Buffer Solution Concept',
        problem: 'Explain how CH₃COOH/CH₃COO⁻ buffer resists pH change when small amount of acid added.',
        parameters: {
            buffer: 'acetate',
            weakAcid: 'CH3COOH',
            conjugateBase: 'CH3COO-',
            explainMechanism: true
        },
        type: 'buffers',
        subparts: [
            'Buffer contains weak acid (CH₃COOH) and conjugate base (CH₃COO⁻)',
            'When H⁺ added: CH₃COO⁻ + H⁺ → CH₃COOH',
            'Conjugate base neutralizes added acid',
            'pH changes minimally',
            'Buffer capacity depends on concentrations'
        ],
        helper: 'Buffer: weak acid + conjugate base resist pH change',
        realWorldContext: 'Blood pH buffering',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: false,
                showBuffer: true,
                titration: 'weak_acid_strong_base',
                highlightBufferRegion: true
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
            const filename = `buffer_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Henderson-Hasselbalch Equation',
        problem: 'Buffer: 0.1 M CH₃COOH (Ka = 1.8 × 10⁻⁵) and 0.1 M CH₃COO⁻. Calculate pH.',
        parameters: {
            weakAcid: 'CH3COOH',
            Ka: 1.8e-5,
            acidConc: 0.1,
            baseConc: 0.1,
            findpH: true
        },
        type: 'buffers',
        subparts: [
            'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            'pKa = -log(1.8 × 10⁻⁵) = 4.74',
            'pH = 4.74 + log(0.1/0.1)',
            'pH = 4.74 + log(1) = 4.74 + 0',
            'pH = 4.74'
        ],
        helper: 'pH = pKa + log([base]/[acid]); When equal concentrations, pH = pKa',
        realWorldContext: 'Buffer pH calculation',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: false,
                showBuffer: true,
                showpKa: true,
                highlightHalfwayPoint: true
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
            const filename = `henderson_hasselbalch_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer pH Change Calculation',
        problem: 'Buffer: 0.5 M NH₃/0.5 M NH₄⁺ (Kb = 1.8 × 10⁻⁵). Add 0.01 mol HCl to 1 L. Find new pH.',
        parameters: {
            weakBase: 'NH3',
            Kb: 1.8e-5,
            baseConc: 0.5,
            acidConc: 0.5,
            addedAcid: 0.01,
            volume: 1.0,
            findNewpH: true
        },
        type: 'buffers',
        subparts: [
            'Initial: NH₃ = 0.5 M, NH₄⁺ = 0.5 M',
            'HCl reacts: NH₃ + H⁺ → NH₄⁺',
            'After reaction: NH₃ = 0.49 M, NH₄⁺ = 0.51 M',
            'pKa = 14 - pKb = 14 - 4.74 = 9.26',
            'pH = 9.26 + log(0.49/0.51) = 9.24'
        ],
        helper: 'Buffer reaction: base consumes added acid; Use H-H equation with new concentrations',
        realWorldContext: 'Buffer capacity in practice',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: false,
                showBuffer: true,
                showpHChange: true,
                highlightAddition: true
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
            const filename = `buffer_ph_change_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Choosing Buffer System',
        problem: 'Need buffer at pH 5. Choose best: (a) CH₃COOH/CH₃COO⁻ (pKa=4.74) or (b) NH₃/NH₄⁺ (pKa=9.26)?',
        parameters: {
            targetpH: 5,
            options: [
                { name: 'acetate', pKa: 4.74 },
                { name: 'ammonia', pKa: 9.26 }
            ],
            selectBest: true
        },
        type: 'buffers',
        subparts: [
            'Best buffer: pKa within ±1 of target pH',
            'Option (a): pKa = 4.74, close to pH 5 ✓',
            'Option (b): pKa = 9.26, too high ✗',
            'Choose acetate buffer',
            'Rule: pH = pKa ± 1 for effective buffering'
        ],
        helper: 'Buffer most effective when pH ≈ pKa (within ±1)',
        realWorldContext: 'Selecting appropriate buffer system',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: false,
                showBuffer: true,
                compareSystems: true,
                highlightEffectiveRange: true
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
            const filename = `choosing_buffer_system_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Preparing Buffer Solution',
        problem: 'Prepare 1 L of pH 4.5 buffer using CH₃COOH (pKa=4.74). Find ratio [CH₃COO⁻]/[CH₃COOH].',
        parameters: {
            volume: 1.0,
            targetpH: 4.5,
            weakAcid: 'CH3COOH',
            pKa: 4.74,
            findRatio: true
        },
        type: 'buffers',
        subparts: [
            'Use Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            '4.5 = 4.74 + log([CH₃COO⁻]/[CH₃COOH])',
            'log([CH₃COO⁻]/[CH₃COOH]) = -0.24',
            '[CH₃COO⁻]/[CH₃COOH] = 10⁻⁰·²⁴ = 0.58',
            'Ratio needed: 0.58:1 or approximately 3:5'
        ],
        helper: 'Rearrange H-H to solve for concentration ratio',
        realWorldContext: 'Laboratory buffer preparation',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: false,
                showBuffer: true,
                showPreparation: true,
                highlightTargetpH: 4.5
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
            const filename = `preparing_buffer_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedTitrationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Strong Acid-Strong Base Titration',
        problem: '25.0 mL of 0.1 M HCl titrated with 0.1 M NaOH. Find volume NaOH at equivalence point. Show titration curve.',
        parameters: {
            acidVolume: 0.025,
            acidMolarity: 0.1,
            baseMolarity: 0.1,
            titration: 'strong_acid_strong_base',
            findVolume: true
        },
        type: 'titrations',
        subparts: [
            'At equivalence: moles acid = moles base',
            'mol HCl = 0.1 × 0.025 = 0.0025 mol',
            'mol NaOH needed = 0.0025 mol',
            'Volume NaOH = 0.0025 / 0.1 = 0.025 L = 25.0 mL',
            'Equivalence point: pH = 7 (neutral)'
        ],
        helper: 'M₁V₁ = M₂V₂ for monoprotic acids/bases; Equivalence point pH = 7',
        realWorldContext: 'Standardization titrations',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: true,
                showBuffer: false,
                titration: 'strong_acid_strong_base'
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
            const filename = `titration_strong_strong_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Finding Unknown Concentration',
        problem: '20.0 mL unknown HCl neutralized by 30.0 mL of 0.05 M NaOH. Find [HCl].',
        parameters: {
            acidVolume: 0.020,
            baseVolume: 0.030,
            baseMolarity: 0.05,
            findAcidMolarity: true
        },
        type: 'titrations',
        subparts: [
            'moles NaOH = 0.05 × 0.030 = 0.0015 mol',
            'HCl + NaOH → NaCl + H₂O (1:1 ratio)',
            'moles HCl = 0.0015 mol',
            'M(HCl) = 0.0015 / 0.020',
            '[HCl] = 0.075 M'
        ],
        helper: 'Use moles from titrant to find moles of unknown',
        realWorldContext: 'Determining acid concentration',
        diagramInfo: {
            type: 'titrationSetup',
            registryKey: 'titrationSetup',
            renderOptions: {
                showBurette: true,
                showFlask: true,
                showLabels: true,
                showCalculations: true
            },
            canvasSize: { width: 700, height: 900 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `titration_unknown_concentration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Weak Acid-Strong Base Titration',
        problem: '25.0 mL of 0.1 M CH₃COOH (Ka=1.8×10⁻⁵) titrated with 0.1 M NaOH. Find pH at equivalence point.',
        parameters: {
            acidVolume: 0.025,
            acidMolarity: 0.1,
            weakAcid: 'CH3COOH',
            Ka: 1.8e-5,
            baseMolarity: 0.1,
            findpHAtEquivalence: true
        },
        type: 'titrations',
        subparts: [
            'At equivalence: CH₃COOH converted to CH₃COO⁻',
            'mol CH₃COO⁻ = 0.0025 mol in total volume 50 mL',
            '[CH₃COO⁻] = 0.0025 / 0.050 = 0.05 M',
            'Kb = Kw/Ka = 1.0×10⁻¹⁴ / 1.8×10⁻⁵ = 5.6×10⁻¹⁰',
            'pH at equivalence > 7 (basic due to hydrolysis)'
        ],
        helper: 'Weak acid titration: equivalence point pH > 7; Calculate from conjugate base',
        realWorldContext: 'Weak acid analysis',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: true,
                showBuffer: true,
                titration: 'weak_acid_strong_base',
                highlightEquivalencepH: true
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
            const filename = `titration_weak_acid_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Indicator Selection',
        problem: 'For titration of HCl with NaOH (equivalence pH=7), choose best indicator: (a) methyl orange (pH 3-4.5), (b) bromothymol blue (pH 6-7.5), (c) phenolphthalein (pH 8-10)?',
        parameters: {
            equivalencepH: 7,
            indicators: [
                { name: 'methyl orange', range: [3, 4.5] },
                { name: 'bromothymol blue', range: [6, 7.5] },
                { name: 'phenolphthalein', range: [8, 10] }
            ],
            selectBest: true
        },
        type: 'titrations',
        subparts: [
            'Equivalence point: pH = 7',
            'Indicator range should include equivalence pH',
            'Methyl orange: 3-4.5 (too low) ✗',
            'Bromothymol blue: 6-7.5 (includes pH 7) ✓',
            'Phenolphthalein: 8-10 (too high) ✗',
            'Best choice: bromothymol blue'
        ],
        helper: 'Indicator pKa should be close to equivalence pH',
        realWorldContext: 'Choosing titration indicators ',
        diagramInfo: {
            type: 'indicatorChart',
            registryKey: 'indicatorChart',
            renderOptions: {
                showColorChange: true,
                showpHRange: true,
                indicators: ['phenolphthalein', 'methylOrange', 'bromothymolBlue'],
                highlightEquivalencepH: 7
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `indicator_selection_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diprotic Acid Titration',
        problem: 'H₂SO₄ titrated with NaOH has two equivalence points. Explain why and sketch curve.',
        parameters: {
            acid: 'H2SO4',
            diprotic: true,
            explainEquivalencePoints: true
        },
        type: 'titrations',
        subparts: [
            'H₂SO₄ has two acidic protons',
            'First equivalence: H₂SO₄ → HSO₄⁻ (first proton neutralized)',
            'Second equivalence: HSO₄⁻ → SO₄²⁻ (second proton neutralized)',
            'Two distinct pH jumps on titration curve',
            'First EP at lower pH, second EP at higher pH'
        ],
        helper: 'Diprotic acids: 2 equivalence points, 2 pH jumps; Polyprotic = multiple steps',
        realWorldContext: 'Sulfuric acid analysis',
        diagramInfo: {
            type: 'titrationCurve',
            registryKey: 'titrationCurve',
            renderOptions: {
                showEquivalencePoint: true,
                showBuffer: true,
                titration: 'diprotic_acid',
                showBothEquivalencePoints: true
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
            const filename = `diprotic_acid_titration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


// ============================================================================
// EQUILIBRIUM CHEMISTRY GENERATORS (5 generators)
// ============================================================================

generateRelatedEquilibriumConstantsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculating Kc from Concentrations',
        problem: 'At equilibrium: [N₂]=0.5 M, [H₂]=0.8 M, [NH₃]=0.3 M. Calculate Kc for N₂ + 3H₂ ⇌ 2NH₃.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            equilibriumConcentrations: { N2: 0.5, H2: 0.8, NH3: 0.3 },
            findKc: true
        },
        type: 'equilibrium_constants',
        subparts: [
            'Write equilibrium expression: Kc = [NH₃]² / ([N₂][H₂]³)',
            'Substitute equilibrium concentrations',
            'Kc = (0.3)² / [(0.5)(0.8)³]',
            'Kc = 0.09 / (0.5 × 0.512)',
            'Kc = 0.09 / 0.256 = 0.35'
        ],
        helper: 'Kc = [products]^coefficients / [reactants]^coefficients; Pure solids/liquids omitted',
        realWorldContext: 'Haber process equilibrium constant',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'N2 + 3H2 ⇌ 2NH3',
                showKcCalculation: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `equilibrium_kc_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Kc Expression',
        problem: 'Write the equilibrium constant expression for 2SO₂ + O₂ ⇌ 2SO₃.',
        parameters: {
            equation: '2SO2 + O2 ⇌ 2SO3',
            writeExpression: true
        },
        type: 'equilibrium_constants',
        subparts: [
            'Identify products and reactants',
            'Products: SO₃ (coefficient 2)',
            'Reactants: SO₂ (coefficient 2), O₂ (coefficient 1)',
            'Kc = [SO₃]² / ([SO₂]²[O₂])',
            'Coefficients become exponents'
        ],
        helper: 'Kc = [products] / [reactants] with coefficients as powers',
        realWorldContext: 'Contact process equilibrium',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: true,
                showIntersection: true,
                reaction: '2SO2 + O2 ⇌ 2SO3',
                showExpression: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `kc_expression_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'ICE Table Calculation',
        problem: 'H₂ + I₂ ⇌ 2HI. Initial: [H₂]=1.0 M, [I₂]=1.0 M, [HI]=0. At equilibrium [HI]=1.6 M. Find Kc.',
        parameters: {
            equation: 'H2 + I2 ⇌ 2HI',
            initial: { H2: 1.0, I2: 1.0, HI: 0 },
            equilibrium: { HI: 1.6 },
            useICETable: true,
            findKc: true
        },
        type: 'equilibrium_constants',
        subparts: [
            'ICE Table: I=Initial, C=Change, E=Equilibrium',
            'HI increases by +1.6 M, so H₂ and I₂ decrease by -0.8 M each',
            'At equilibrium: [H₂]=0.2 M, [I₂]=0.2 M, [HI]=1.6 M',
            'Kc = [HI]² / ([H₂][I₂])',
            'Kc = (1.6)² / (0.2 × 0.2) = 2.56 / 0.04 = 64'
        ],
        helper: 'ICE table: track concentration changes; Use stoichiometry for change row',
        realWorldContext: 'Hydrogen iodide equilibrium',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'H2 + I2 ⇌ 2HI',
                showAllRows: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ice_table_kc_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp from Partial Pressures',
        problem: 'N₂O₄ ⇌ 2NO₂. At equilibrium: P(N₂O₄)=0.5 atm, P(NO₂)=0.8 atm. Calculate Kp.',
        parameters: {
            equation: 'N2O4 ⇌ 2NO2',
            partialPressures: { N2O4: 0.5, NO2: 0.8 },
            findKp: true
        },
        type: 'equilibrium_constants',
        subparts: [
            'For gas equilibria: Kp uses partial pressures',
            'Kp = (P_NO₂)² / P_N₂O₄',
            'Kp = (0.8)² / 0.5',
            'Kp = 0.64 / 0.5',
            'Kp = 1.28 atm'
        ],
        helper: 'Kp for gases: use partial pressures instead of concentrations',
        realWorldContext: 'Nitrogen dioxide equilibrium',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: true,
                showIntersection: true,
                reaction: 'N2O4 ⇌ 2NO2',
                showKpCalculation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `kp_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Concentration vs Time to Equilibrium',
        problem: 'Show how [reactants] and [products] change over time until equilibrium is reached. Sketch graph.',
        parameters: {
            equation: 'A ⇌ B',
            showConcentrationChanges: true,
            plotGraph: true
        },
        type: 'equilibrium_constants',
        subparts: [
            'Initially: [A] high, [B] low (or zero)',
            'As reaction proceeds: [A] decreases, [B] increases',
            'Forward rate decreases as [A] drops',
            'Reverse rate increases as [B] increases',
            'Equilibrium: when forward rate = reverse rate (plateau)'
        ],
        helper: 'At equilibrium: concentrations constant (not zero), rates equal',
        realWorldContext: 'Reaching dynamic equilibrium',
        diagramInfo: {
            type: 'concentrationVsTime',
            registryKey: 'concentrationVsTime',
            renderOptions: {
                showPlateau: true,
                showForwardReverse: true,
                reaction: 'A ⇌ B'
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
            const filename = `concentration_vs_time_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedLeChatelirDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Concentration Change Effect',
        problem: 'N₂ + 3H₂ ⇌ 2NH₃. What happens to equilibrium if more N₂ is added? Show shift diagram.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            stress: 'concentration',
            addedSpecies: 'N2',
            predictShift: true
        },
        type: 'le_chatelier',
        subparts: [
            'Le Chatelier: system shifts to counteract stress',
            'Adding N₂ increases reactant concentration',
            'System shifts RIGHT (forward) to consume excess N₂',
            'More NH₃ produced, [H₂] decreases',
            'New equilibrium position (K unchanged)'
        ],
        helper: 'Add reactant → shift to products; Add product → shift to reactants',
        realWorldContext: 'Optimizing ammonia production',
        diagramInfo: {
            type: 'leChatelierShift',
            registryKey: 'leChatelierShift',
            renderOptions: {
                showArrows: true,
                showChange: true,
                stress: 'concentration',
                direction: 'forward',
                reaction: 'N2 + 3H2 ⇌ 2NH3'
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
            const filename = `le_chatelier_concentration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Removing Product Effect',
        problem: 'H₂ + I₂ ⇌ 2HI. Predict shift if HI is continuously removed.',
        parameters: {
            equation: 'H2 + I2 ⇌ 2HI',
            stress: 'concentration',
            removedSpecies: 'HI',
            predictShift: true
        },
        type: 'le_chatelier',
        subparts: [
            'Removing HI decreases product concentration',
            'System shifts RIGHT (forward) to replace HI',
            'More H₂ and I₂ consumed',
            'Continuous removal drives reaction to completion',
            'Increases yield of HI'
        ],
        helper: 'Remove product → shift forward to make more product',
        realWorldContext: 'Continuous product removal in industry',
        diagramInfo: {
            type: 'leChatelierShift',
            registryKey: 'leChatelierShift',
            renderOptions: {
                showArrows: true,
                showChange: true,
                stress: 'concentration',
                direction: 'forward',
                showRemoval: true
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
            const filename = `le_chatelier_removal_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Effect - Exothermic',
        problem: 'N₂ + 3H₂ ⇌ 2NH₃, ΔH = -92 kJ. Predict effect of increasing temperature. Explain using energy.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            deltaH: -92,
            stress: 'temperature',
            temperatureChange: 'increase',
            exothermic: true
        },
        type: 'le_chatelier',
        subparts: [
            'Exothermic: releases heat (ΔH < 0)',
            'Can write: N₂ + 3H₂ ⇌ 2NH₃ + heat',
            'Increasing T = adding heat (product)',
            'System shifts LEFT (reverse) to consume heat',
            'K decreases with temperature (less NH₃ at equilibrium)'
        ],
        helper: 'Exothermic: heat = product; Endothermic: heat = reactant; ΔT changes K value',
        realWorldContext: 'Temperature control in Haber process',
        diagramInfo: {
            type: 'leChatelierShift',
            registryKey: 'leChatelierShift',
            renderOptions: {
                showArrows: true,
                showChange: true,
                stress: 'temperature',
                direction: 'reverse',
                showEnergy: true,
                exothermic: true
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
            const filename = `le_chatelier_temperature_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pressure Change Effect',
        problem: 'N₂ + 3H₂ ⇌ 2NH₃. Predict effect of increasing pressure.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            stress: 'pressure',
            pressureChange: 'increase',
            predictShift: true
        },
        type: 'le_chatelier',
        subparts: [
            'Count gas moles: Reactants = 4 moles, Products = 2 moles',
            'Increasing pressure favors side with fewer moles',
            'System shifts RIGHT to reduce pressure',
            'More NH₃ produced (2 moles < 4 moles)',
            'High pressure increases yield'
        ],
        helper: 'Pressure: shift to side with fewer gas moles; No effect if equal moles',
        realWorldContext: 'High pressure in ammonia synthesis',
        diagramInfo: {
            type: 'leChatelierShift',
            registryKey: 'leChatelierShift',
            renderOptions: {
                showArrows: true,
                showChange: true,
                stress: 'pressure',
                direction: 'forward',
                showMoleCount: true
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
            const filename = `le_chatelier_pressure_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Catalyst Effect on Equilibrium',
        problem: 'Does adding a catalyst shift equilibrium position for N₂ + 3H₂ ⇌ 2NH₃? Explain.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            addCatalyst: true,
            explainEffect: true
        },
        type: 'le_chatelier',
        subparts: [
            'Catalyst speeds up BOTH forward and reverse reactions equally',
            'Equilibrium reached faster',
            'Equilibrium position unchanged (same K)',
            'Same final concentrations',
            'Catalyst only affects RATE, not POSITION'
        ],
        helper: 'Catalyst: increases rate to reach equilibrium faster; Does NOT change K or position',
        realWorldContext: 'Iron catalyst in Haber process',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: true,
                showIntersection: true,
                showCatalystEffect: true,
                compareTimes: true
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
            const filename = `catalyst_equilibrium_effect_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedSolubilityEquilibriaDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ksp Calculation from Solubility',
        problem: 'AgCl has solubility of 1.3 × 10⁻⁵ M. Calculate Ksp.',
        parameters: {
            compound: 'AgCl',
            solubility: 1.3e-5,
            findKsp: true
        },
        type: 'solubility_equilibria',
        subparts: [
            'Dissolution: AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)',
            'From stoichiometry: [Ag⁺] = [Cl⁻] = 1.3 × 10⁻⁵ M',
            'Ksp = [Ag⁺][Cl⁻]',
            'Ksp = (1.3 × 10⁻⁵)(1.3 × 10⁻⁵)',
            'Ksp = 1.7 × 10⁻¹⁰'
        ],
        helper: 'Ksp = solubility product; For AB: Ksp = [A⁺][B⁻] where [A⁺] = [B⁻] = solubility',
        realWorldContext: 'Silver chloride precipitation',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'AgCl(s) ⇌ Ag+ + Cl-',
                showKspCalculation: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ksp_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Solubility from Ksp',
        problem: 'PbCl₂ has Ksp = 1.7 × 10⁻⁵. Calculate molar solubility.',
        parameters: {
            compound: 'PbCl2',
            Ksp: 1.7e-5,
            findSolubility: true
        },
        type: 'solubility_equilibria',
        subparts: [
            'PbCl₂(s) ⇌ Pb²⁺(aq) + 2Cl⁻(aq)',
            'If solubility = s, then [Pb²⁺] = s, [Cl⁻] = 2s',
            'Ksp = [Pb²⁺][Cl⁻]² = s(2s)² = 4s³',
            '1.7 × 10⁻⁵ = 4s³',
            's = ∛(1.7 × 10⁻⁵ / 4) = 1.6 × 10⁻² M'
        ],
        helper: 'For AB₂: Ksp = s(2s)² = 4s³; Solve for s',
        realWorldContext: 'Lead chloride solubility',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'PbCl2(s) ⇌ Pb2+ + 2Cl-',
                showSolubilityCalculation: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `solubility_from_ksp_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Common Ion Effect',
        problem: 'AgCl (Ksp = 1.7 × 10⁻¹⁰) in 0.10 M NaCl solution. Find solubility. Compare to pure water.',
        parameters: {
            compound: 'AgCl',
            Ksp: 1.7e-10,
            commonIon: 'Cl-',
            commonIonConcentration: 0.10,
            compareSolubility: true
        },
        type: 'solubility_equilibria',
        subparts: [
            'AgCl ⇌ Ag⁺ + Cl⁻; NaCl provides Cl⁻ = 0.10 M',
            'Let solubility = s, then [Ag⁺] = s, [Cl⁻] = 0.10 + s ≈ 0.10',
            'Ksp = s(0.10) = 1.7 × 10⁻¹⁰',
            's = 1.7 × 10⁻⁹ M (in NaCl)',
            'In pure water: s = 1.3 × 10⁻⁵ M (much higher)'
        ],
        helper: 'Common ion effect: decreases solubility; Le Chatelier: added ion shifts left',
        realWorldContext: 'Precipitation control',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'AgCl(s) ⇌ Ag+ + Cl-',
                showCommonIon: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `common_ion_effect_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Precipitation Prediction',
        problem: 'Mix 100 mL of 0.001 M Ag⁺ with 100 mL of 0.001 M Cl⁻. Will AgCl precipitate? (Ksp = 1.7 × 10⁻¹⁰)',
        parameters: {
            compound: 'AgCl',
            Ksp: 1.7e-10,
            volume1: 0.1,
            concentration1: 0.001,
            ion1: 'Ag+',
            volume2: 0.1,
            concentration2: 0.001,
            ion2: 'Cl-',
            predictPrecipitation: true
        },
        type: 'solubility_equilibria',
        subparts: [
            'After mixing: total volume = 200 mL',
            '[Ag⁺] = (0.001 × 100) / 200 = 5 × 10⁻⁴ M',
            '[Cl⁻] = (0.001 × 100) / 200 = 5 × 10⁻⁴ M',
            'Q = [Ag⁺][Cl⁻] = (5 × 10⁻⁴)(5 × 10⁻⁴) = 2.5 × 10⁻⁷',
            'Q (2.5 × 10⁻⁷) > Ksp (1.7 × 10⁻¹⁰) → Precipitation occurs'
        ],
        helper: 'Q = ion product; If Q > Ksp → precipitate; Q < Ksp → dissolve; Q = Ksp → equilibrium',
        realWorldContext: 'Predicting precipitate formation',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'AgCl(s) ⇌ Ag+ + Cl-',
                showQvsKsp: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `precipitation_prediction_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solubility Curve',
        problem: 'Plot solubility of KNO₃ vs temperature. Explain why solubility increases with T.',
        parameters: {
            compound: 'KNO3',
            plotSolubilityCurve: true,
            explainTrend: true
        },
        type: 'solubility_equilibria',
        subparts: [
            'KNO₃ dissolution is endothermic (ΔH > 0)',
            'KNO₃(s) + heat ⇌ K⁺(aq) + NO₃⁻(aq)',
            'Increasing T adds heat (reactant side)',
            'Le Chatelier: shifts right (more dissolution)',
            'Solubility increases with temperature'
        ],
        helper: 'Endothermic dissolution: solubility ↑ with T; Exothermic: solubility ↓ with T',
        realWorldContext: 'Temperature-dependent solubility',
        diagramInfo: {
            type: 'solubilityCurve',
            registryKey: 'solubilityCurve',
            renderOptions: {
                showMultiple: false,
                showLabels: true,
                compounds: ['KNO3'],
                highlightTrend: true
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
            const filename = `solubility_curve_KNO3_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedComplexIonsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Ion Formation',
        problem: 'Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺. If Kf = 1.6 × 10⁷, calculate equilibrium constant expression.',
        parameters: {
            complexIon: '[Ag(NH3)2]+',
            centralIon: 'Ag+',
            ligand: 'NH3',
            Kf: 1.6e7,
            writeExpression: true
        },
        type: 'complex_ions',
        subparts: [
            'Complex ion: metal ion + ligands',
            'Formation constant: Kf (or βₙ)',
            'Kf = [[Ag(NH₃)₂]⁺] / ([Ag⁺][NH₃]²)',
            'Large Kf → stable complex',
            'Kf = 1.6 × 10⁷ indicates very stable complex'
        ],
        helper: 'Kf = formation constant; Large Kf = stable complex; Ligands = electron donors',
        realWorldContext: 'Silver-ammonia complex in qualitative analysis',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'Ag+ + 2NH3 ⇌ [Ag(NH3)2]+',
                showKfExpression: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `complex_ion_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identifying Complex Ions',
        problem: 'Identify central metal and ligands in [Cu(H₂O)₆]²⁺.',
        parameters: {
            complexIon: '[Cu(H2O)6]2+',
            identifyComponents: true
        },
        type: 'complex_ions',
        subparts: [
            'Central metal ion: Cu²⁺',
            'Ligands: 6 H₂O molecules',
            'Coordination number: 6',
            'Charge: +2 (from Cu²⁺)',
            'Geometry: octahedral (6 ligands)'
        ],
        helper: 'Complex ion: [metal(ligand)ₙ]^charge; Coordination number = number of ligands',
        realWorldContext: 'Copper(II) aqua complex (blue color)',
        diagramInfo: {
            type: 'vsepGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                show3D: true,
                showBondAngles: false,
                geometry: 'octahedral',
                molecule: '[Cu(H2O)6]2+',
                showComplexIon: true
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
            const filename = `complex_ion_structure_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Ion Equilibrium Calculation',
        problem: 'AgCl(s) dissolves in NH₃ to form [Ag(NH₃)₂]⁺. Ksp(AgCl) = 1.7 × 10⁻¹⁰, Kf = 1.6 × 10⁷. Find overall K.',
        parameters: {
            solidCompound: 'AgCl',
            complexIon: '[Ag(NH3)2]+',
            Ksp: 1.7e-10,
            Kf: 1.6e7,
            findOverallK: true
        },
        type: 'complex_ions',
        subparts: [
            'Reaction 1: AgCl(s) ⇌ Ag⁺ + Cl⁻, K₁ = Ksp = 1.7 × 10⁻¹⁰',
            'Reaction 2: Ag⁺ + 2NH₃ ⇌ [Ag(NH₃)₂]⁺, K₂ = Kf = 1.6 × 10⁷',
            'Overall: AgCl(s) + 2NH₃ ⇌ [Ag(NH₃)₂]⁺ + Cl⁻',
            'K_overall = K₁ × K₂ = (1.7 × 10⁻¹⁰)(1.6 × 10⁷)',
            'K_overall = 2.7 × 10⁻³'
        ],
        helper: 'Coupled equilibria: K_overall = K₁ × K₂; Complex formation increases solubility',
        realWorldContext: 'Dissolving AgCl in ammonia',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'AgCl(s) + 2NH3 ⇌ [Ag(NH3)2]+ + Cl-',
                showCoupledEquilibria: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `complex_ion_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'EDTA Complex Formation',
        problem: 'EDTA⁴⁻ forms 1:1 complexes with metal ions. Write formation equation for Ca²⁺-EDTA complex.',
        parameters: {
            ligand: 'EDTA4-',
            metal: 'Ca2+',
            writeEquation: true
        },
        type: 'complex_ions',
        subparts: [
            'EDTA is hexadentate ligand (6 binding sites)',
            'Ca²⁺ + EDTA⁴⁻ ⇌ [Ca(EDTA)]²⁻',
            '1:1 stoichiometry',
            'Very stable complex (high Kf)',
            'Used in water softening and chelation therapy'
        ],
        helper: 'EDTA: multidentate ligand, forms very stable 1:1 complexes',
        realWorldContext: 'EDTA in water treatment',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: false,
                showLabels: true,
                reaction: 'Ca2+ + EDTA4- ⇌ [Ca(EDTA)]2-',
                showComplexStructure: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `edta_complex_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stepwise Complex Formation',
        problem: 'Cu²⁺ + NH₃ forms complexes stepwise. Write equations for [Cu(NH₃)]²⁺ through [Cu(NH₃)₄]²⁺.',
        parameters: {
            metal: 'Cu2+',
            ligand: 'NH3',
            maxCoordination: 4,
            showStepwise: true
        },
        type: 'complex_ions',
        subparts: [
            'Step 1: Cu²⁺ + NH₃ ⇌ [Cu(NH₃)]²⁺, K₁',
            'Step 2: [Cu(NH₃)]²⁺ + NH₃ ⇌ [Cu(NH₃)₂]²⁺, K₂',
            'Step 3: [Cu(NH₃)₂]²⁺ + NH₃ ⇌ [Cu(NH₃)₃]²⁺, K₃',
            'Step 4: [Cu(NH₃)₃]²⁺ + NH₃ ⇌ [Cu(NH₃)₄]²⁺, K₄',
            'Overall Kf = K₁ × K₂ × K₃ × K₄ = β₄'
        ],
        helper: 'Stepwise formation: ligands add one at a time; β_n = product of all K values',
        realWorldContext: 'Copper-ammonia complex (deep blue)',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'Cu2+ + 4NH3 ⇌ [Cu(NH3)4]2+',
                showStepwiseFormation: true
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
            const filename = `stepwise_complex_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedGasEquilibriumDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kp Calculation',
        problem: 'N₂O₄ ⇌ 2NO₂. At equilibrium at 100°C: P(N₂O₄) = 0.28 atm, P(NO₂) = 1.1 atm. Find Kp.',
        parameters: {
            equation: 'N2O4 ⇌ 2NO2',
            temperature: 373,
            partialPressures: { N2O4: 0.28, NO2: 1.1 },
            findKp: true
        },
        type: 'gas_equilibrium',
        subparts: [
            'For gas equilibria: use Kp (partial pressures)',
            'Kp = (P_NO₂)² / P_N₂O₄',
            'Kp = (1.1)² / 0.28',
            'Kp = 1.21 / 0.28',
            'Kp = 4.3 atm'
        ],
        helper: 'Kp: like Kc but uses partial pressures (atm or bar)',
        realWorldContext: 'Nitrogen dioxide equilibrium',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                showVariables: true,
                showContainer: true,
                law: 'equilibrium',
                showKpCalculation: true
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
            const filename = `kp_calculation_gas_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Kp and Kc Relationship',
        problem: 'For N₂ + 3H₂ ⇌ 2NH₃, relate Kp to Kc. Use Kp = Kc(RT)^Δn.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            relateKpKc: true,
            findDeltaN: true
        },
        type: 'gas_equilibrium',
        subparts: [
            'Δn = moles products - moles reactants (gas only)',
            'Δn = 2 - (1 + 3) = 2 - 4 = -2',
            'Kp = Kc(RT)^Δn = Kc(RT)^(-2)',
            'Kp = Kc / (RT)²',
            'If Δn = 0, then Kp = Kc'
        ],
        helper: 'Kp = Kc(RT)^Δn where R = 0.0821 L·atm/(mol·K), T in Kelvin',
        realWorldContext: 'Converting between Kp and Kc',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: false,
                showIntersection: false,
                showKpKcRelationship: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `kp_kc_relationship_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Total Pressure Calculation',
        problem: 'PCl₅ ⇌ PCl₃ + Cl₂. Initial P(PCl₅) = 1.0 atm. At equilibrium, 50% dissociated. Find total pressure.',
        parameters: {
            equation: 'PCl5 ⇌ PCl3 + Cl2',
            initialPressure: 1.0,
            percentDissociation: 50,
            findTotalPressure: true
        },
        type: 'gas_equilibrium',
        subparts: [
            'Initial: P(PCl₅) = 1.0 atm, P(PCl₃) = 0, P(Cl₂) = 0',
            '50% dissociation: 0.5 atm PCl₅ reacts',
            'At equilibrium: P(PCl₅) = 0.5 atm',
            'P(PCl₃) = 0.5 atm, P(Cl₂) = 0.5 atm',
            'P_total = 0.5 + 0.5 + 0.5 = 1.5 atm'
        ],
        helper: 'Total pressure = sum of all partial pressures; Moles gas ∝ pressure',
        realWorldContext: 'Gas dissociation equilibrium',
        diagramInfo: {
            type: 'iceTable',
            registryKey: 'iceTable',
            renderOptions: {
                showCalculations: true,
                showLabels: true,
                reaction: 'PCl5 ⇌ PCl3 + Cl2',
                showPressures: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `total_pressure_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heterogeneous Equilibrium',
        problem: 'CaCO₃(s) ⇌ CaO(s) + CO₂(g). Write Kp expression. Why are solids omitted?',
        parameters: {
            equation: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
            writeKp: true,
            explainSolids: true
        },
        type: 'gas_equilibrium',
        subparts: [
            'Heterogeneous equilibrium: multiple phases',
            'Pure solids have constant concentration',
            'Omit solids and pure liquids from K expression',
            'Kp = P_CO₂',
            'Equilibrium depends only on CO₂ pressure'
        ],
        helper: 'Heterogeneous: omit pure solids/liquids; Include gases and aqueous solutions',
        realWorldContext: 'Limestone decomposition',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: true,
                showIntersection: true,
                reaction: 'CaCO3(s) ⇌ CaO(s) + CO2(g)',
                showHeterogeneous: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `heterogeneous_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equilibrium with Inert Gas',
        problem: 'N₂ + 3H₂ ⇌ 2NH₃ at equilibrium. Add He gas at constant volume. Predict effect on equilibrium.',
        parameters: {
            equation: 'N2 + 3H2 ⇌ 2NH3',
            addInertGas: 'He',
            constantVolume: true,
            predictEffect: true
        },
        type: 'gas_equilibrium',
        subparts: [
            'Adding inert gas at constant V increases total pressure',
            'But partial pressures of N₂, H₂, NH₃ unchanged',
            'Concentrations unchanged',
            'NO shift in equilibrium position',
            'Note: At constant P, adding inert gas WOULD shift (volume increases)'
        ],
        helper: 'Inert gas at constant V: no effect; At constant P: dilutes all species',
        realWorldContext: 'Effect of inert gases on equilibria',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                showVariables: true,
                showContainer: true,
                law: 'equilibrium',
                showInertGasEffect: true
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
            const filename = `inert_gas_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

// ============================================================================
// KINETICS & THERMODYNAMICS GENERATORS (6 generators)
// ============================================================================

generateRelatedReactionKineticsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Average Rate Calculation',
        problem: '[A] decreases from 0.5 M to 0.3 M in 20 seconds. Calculate average rate of reaction.',
        parameters: {
            initialConcentration: 0.5,
            finalConcentration: 0.3,
            timeInterval: 20,
            findAverageRate: true
        },
        type: 'reaction_kinetics',
        subparts: [
            'Average rate = -Δ[A] / Δt',
            'Δ[A] = 0.3 - 0.5 = -0.2 M',
            'Δt = 20 s',
            'Rate = -(-0.2) / 20',
            'Rate = 0.01 M/s'
        ],
        helper: 'Rate = -Δ[reactant]/Δt = +Δ[product]/Δt; Negative sign for reactants (decreasing)',
        realWorldContext: 'Measuring reaction speed',
        diagramInfo: {
            type: 'concentrationVsRate',
            registryKey: 'concentrationVsRate',
            renderOptions: {
                showTrendline: true,
                showEquation: true,
                order: 1,
                highlightAverageRate: true
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
            const filename = `average_rate_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Instantaneous Rate',
        problem: 'What is instantaneous rate? How does it differ from average rate?',
        parameters: {
            explainInstantaneous: true,
            compareToAverage: true
        },
        type: 'reaction_kinetics',
        subparts: [
            'Instantaneous rate: rate at specific moment',
            'Found by slope of tangent to concentration-time curve',
            'Average rate: over time interval (slope of secant)',
            'Instantaneous rate changes during reaction',
            'As [reactant] decreases, rate typically decreases'
        ],
        helper: 'Instantaneous = tangent slope at point; Average = secant slope over interval',
        realWorldContext: 'Precise rate measurement at specific time',
        diagramInfo: {
            type: 'concentrationVsTime',
            registryKey: 'concentrationVsTime',
            renderOptions: {
                showPlateau: false,
                showForwardReverse: false,
                showInstantaneousRate: true,
                showTangent: true
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
            const filename = `instantaneous_rate_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Factors Affecting Rate',
        problem: 'List and explain 5 factors that affect reaction rate. Provide examples for each.',
        parameters: {
            listFactors: true,
            explainEach: true,
            giveExamples: true
        },
        type: 'reaction_kinetics',
        subparts: [
            '1. Concentration: Higher [reactant] → more collisions → faster rate',
            '2. Temperature: Higher T → more kinetic energy → faster rate',
            '3. Surface area: Larger surface → more sites → faster rate (solids)',
            '4. Catalyst: Lowers activation energy → faster rate',
            '5. Nature of reactants: Some substances react faster than others'
        ],
        helper: 'Rate factors: concentration, temperature, surface area, catalyst, nature of reactants',
        realWorldContext: 'Controlling reaction speed in industry',
        diagramInfo: {
            type: 'surfaceAreaEffect',
            registryKey: 'surfaceAreaEffect',
            renderOptions: {
                showComparison: true,
                showLabels: true,
                particleSizes: ['large', 'medium', 'small']
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `factors_affecting_rate_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Collision Theory',
        problem: 'Explain collision theory. Why don\'t all collisions lead to reaction? Show diagram.',
        parameters: {
            explainCollisionTheory: true,
            explainEffectiveCollisions: true
        },
        type: 'reaction_kinetics',
        subparts: [
            'Collision theory: molecules must collide to react',
            'Requirements: (1) Sufficient energy (≥ Ea)',
            '(2) Proper orientation',
            'Only effective collisions lead to products',
            'Higher T → more molecules with E ≥ Ea → faster rate'
        ],
        helper: 'Effective collision: correct orientation + sufficient energy (E ≥ Ea)',
        realWorldContext: 'Understanding molecular-level reactions',
        diagramInfo: {
            type: 'collisionTheory',
            registryKey: 'collisionTheory',
            renderOptions: {
                showOrientation: true,
                showEnergy: true,
                particles: 20
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
            const filename = `collision_theory_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Maxwell-Boltzmann Distribution',
        problem: 'Sketch Maxwell-Boltzmann distribution at two temperatures. Show how it relates to reaction rate.',
        parameters: {
            showDistribution: true,
            compareTemperatures: true,
            relateToRate: true
        },
        type: 'reaction_kinetics',
        subparts: [
            'M-B distribution: shows fraction of molecules at each energy',
            'At higher T: curve shifts right and flattens',
            'More molecules have E ≥ Ea at higher T',
            'Shaded area beyond Ea = molecules that can react',
            'Larger shaded area at higher T → faster rate'
        ],
        helper: 'M-B: energy distribution of molecules; Area beyond Ea = fraction that can react',
        realWorldContext: 'Statistical explanation of temperature effect',
        diagramInfo: {
            type: 'maxwellBoltzmann',
            registryKey: 'maxwellBoltzmann',
            renderOptions: {
                showActivationEnergy: true,
                showArea: true,
                temperature: 298,
                compareTemperatures: true
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
            const filename = `maxwell_boltzmann_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedRateLawsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rate Law Expression',
        problem: 'For reaction A + 2B → C, rate = k[A]²[B]. What is order with respect to A, B, and overall?',
        parameters: {
            equation: 'A + 2B → C',
            rateLaw: 'rate = k[A]²[B]',
            findOrders: true
        },
        type: 'rate_laws',
        subparts: [
            'Order with respect to A: exponent of [A] = 2 (second order)',
            'Order with respect to B: exponent of [B] = 1 (first order)',
            'Overall order: sum of exponents = 2 + 1 = 3',
            'Third order overall',
            'Note: orders NOT related to stoichiometric coefficients'
        ],
        helper: 'Order = exponent in rate law; Overall order = sum of all exponents',
        realWorldContext: 'Determining reaction order experimentally',
        diagramInfo: {
            type: 'concentrationVsRate',
            registryKey: 'concentrationVsRate',
            renderOptions: {
                showTrendline: true,
                showEquation: true,
                order: 2,
                showRateLaw: true
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
            const filename = `rate_law_order_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Units of Rate Constant',
        problem: 'Find units of k for: (a) first-order, (b) second-order reactions.',
        parameters: {
            findUnits: true,
            orders: [1, 2]
        },
        type: 'rate_laws',
        subparts: [
            'General: rate has units M/s or M·s⁻¹',
            'First order: rate = k[A], so k = rate/[A]',
            'k units: (M/s) / M = s⁻¹',
            'Second order: rate = k[A]², so k = rate/[A]²',
            'k units: (M/s) / M² = M⁻¹·s⁻¹'
        ],
        helper: 'k units depend on overall order: 0th: M/s, 1st: s⁻¹, 2nd: M⁻¹s⁻¹, 3rd: M⁻²s⁻¹',
        realWorldContext: 'Dimensional analysis of rate constants',
        diagramInfo: {
            type: 'concentrationVsRate',
            registryKey: 'concentrationVsRate',
            renderOptions: {
                showTrendline: true,
                showEquation: true,
                showUnits: true,
                compareOrders: true
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
            const filename = `rate_constant_units_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Method of Initial Rates',
        problem: 'A + B → C. Exp 1: [A]=0.1, [B]=0.1, rate=0.01. Exp 2: [A]=0.2, [B]=0.1, rate=0.04. Exp 3: [A]=0.1, [B]=0.2, rate=0.02. Find rate law.',
        parameters: {
            equation: 'A + B → C',
            experiments: [
                { A: 0.1, B: 0.1, rate: 0.01 },
                { A: 0.2, B: 0.1, rate: 0.04 },
                { A: 0.1, B: 0.2, rate: 0.02 }
            ],
            findRateLaw: true,
            useInitialRates: true
        },
        type: 'rate_laws',
        subparts: [
            'Compare Exp 1 and 2 (B constant): [A] doubles, rate quadruples',
            'Order in A = 2 (rate ∝ [A]²)',
            'Compare Exp 1 and 3 (A constant): [B] doubles, rate doubles',
            'Order in B = 1 (rate ∝ [B])',
            'Rate law: rate = k[A]²[B]'
        ],
        helper: 'Method of initial rates: vary one concentration, hold others constant',
        realWorldContext: 'Experimental determination of rate law',
        diagramInfo: {
            type: 'concentrationVsRate',
            registryKey: 'concentrationVsRate',
            renderOptions: {
                showTrendline: true,
                showEquation: true,
                showDataPoints: true,
                showMethodOfInitialRates: true
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
            const filename = `method_initial_rates_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Life for First Order',
        problem: 'First-order reaction with k = 0.0693 min⁻¹. Calculate half-life.',
        parameters: {
            order: 1,
            rateConstant: 0.0693,
            findHalfLife: true
        },
        type: 'rate_laws',
        subparts: [
            'First order half-life: t₁/₂ = 0.693 / k',
            'Independent of initial concentration',
            't₁/₂ = 0.693 / 0.0693',
            't₁/₂ = 10 minutes',
            'Constant half-life is characteristic of first order'
        ],
        helper: '1st order: t₁/₂ = 0.693/k (constant); 0th order: t₁/₂ = [A]₀/2k; 2nd order: t₁/₂ = 1/(k[A]₀)',
        realWorldContext: 'Radioactive decay, drug metabolism',
        diagramInfo: {
            type: 'concentrationVsTime',
            registryKey: 'concentrationVsTime',
            renderOptions: {
                showPlateau: false,
                showForwardReverse: false,
                showHalfLife: true,
                order: 1
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
            const filename = `first_order_half_life_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Integrated Rate Law',
        problem: 'First-order: [A]₀ = 1.0 M, k = 0.05 s⁻¹. Find [A] after 20 seconds. Use ln[A] = ln[A]₀ - kt.',
        parameters: {
            order: 1,
            initialConcentration: 1.0,
            rateConstant: 0.05,
            time: 20,
            findConcentration: true
        },
        type: 'rate_laws',
        subparts: [
            'First-order integrated: ln[A] = ln[A]₀ - kt',
            'ln[A] = ln(1.0) - (0.05)(20)',
            'ln[A] = 0 - 1.0 = -1.0',
            '[A] = e⁻¹·⁰ = 0.368 M',
            'Or [A] = [A]₀ e⁻ᵏᵗ = 1.0 × e⁻¹·⁰ = 0.368 M'
        ],
        helper: '1st order: ln[A] = ln[A]₀ - kt or [A] = [A]₀e⁻ᵏᵗ; Plot ln[A] vs t gives straight line',
        realWorldContext: 'Predicting concentration at future time',
        diagramInfo: {
            type: 'concentrationVsTime',
            registryKey: 'concentrationVsTime',
            renderOptions: {
                showPlateau: false,
                showForwardReverse: false,
                showExponentialDecay: true,
                order: 1,
                highlightTime: 20
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
            const filename = `integrated_rate_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedActivationEnergyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Activation Energy Concept',
        problem: 'Define activation energy (Ea). Show on energy profile diagram.',
        parameters: {
            defineEa: true,
            showDiagram: true
        },
        type: 'activation_energy',
        subparts: [
            'Ea = minimum energy needed for reaction',
            'Energy barrier between reactants and products',
            'Must be overcome for reaction to occur',
            'On diagram: height from reactants to transition state',
            'Higher Ea → slower reaction'
        ],
        helper: 'Ea = activation energy = energy barrier; Transition state = highest energy point',
        realWorldContext: 'Energy requirements for reactions',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: true,
                showDeltaH: false,
                reactionType: 'exothermic',
                highlightEa: true
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
            const filename = `activation_energy_concept_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Catalyst Effect on Ea',
        problem: 'How does a catalyst affect activation energy? Show both pathways on one diagram.',
        parameters: {
            showCatalystEffect: true,
            comparePaths: true
        },
        type: 'activation_energy',
        subparts: [
            'Catalyst lowers activation energy',
            'Provides alternative reaction pathway',
            'Lower Ea → more molecules can react',
            'Speeds up both forward AND reverse reactions',
            'Does NOT change ΔH or equilibrium position'
        ],
        helper: 'Catalyst: lowers Ea, increases rate, unchanged at end; Does not affect ΔH or K',
        realWorldContext: 'Industrial catalysts speed reactions',
        diagramInfo: {
            type: 'catalystEffect',
            registryKey: 'catalystEffect',
            renderOptions: {
                showBothPaths: true,
                showLabels: true,
                activationEnergyNoCat: 100,
                activationEnergyCat: 60
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
            const filename = `catalyst_effect_ea_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Arrhenius Equation',
        problem: 'k = Ae^(-Ea/RT). At 300 K, k = 0.01 s⁻¹. At 350 K, k = 0.10 s⁻¹. Calculate Ea.',
        parameters: {
            T1: 300,
            k1: 0.01,
            T2: 350,
            k2: 0.10,
            findEa: true,
            useArrhenius: true
        },
        type: 'activation_energy',
        subparts: [
            'Two-point Arrhenius: ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)',
            'ln(0.10/0.01) = (Ea/8.314)(1/300 - 1/350)',
            'ln(10) = (Ea/8.314)(0.003333 - 0.002857)',
            '2.303 = (Ea/8.314)(0.000476)',
            'Ea = 40,200 J/mol = 40.2 kJ/mol'
        ],
        helper: 'Arrhenius: k = Ae^(-Ea/RT); ln k vs 1/T gives straight line with slope = -Ea/R',
        realWorldContext: 'Determining activation energy experimentally',
        diagramInfo: {
            type: 'temperatureVsRate',
            registryKey: 'temperatureVsRate',
            renderOptions: {
                showExponential: true,
                showLabels: true,
                showArrheniusPlot: true
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
            const filename = `arrhenius_equation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Temperature Effect on Rate',
        problem: 'Explain why increasing temperature increases reaction rate. Use Maxwell-Boltzmann distribution.',
        parameters: {
            explainTemperatureEffect: true,
            useMBDistribution: true
        },
        type: 'activation_energy',
        subparts: [
            'Higher T → molecules have more kinetic energy',
            'M-B curve shifts right at higher T',
            'More molecules have E ≥ Ea',
            'More effective collisions per unit time',
            'Rule of thumb: rate doubles for every 10°C increase'
        ],
        helper: 'Temperature ↑ → more molecules exceed Ea → rate ↑',
        realWorldContext: 'Why reactions faster at high temperature',
        diagramInfo: {
            type: 'maxwellBoltzmann',
            registryKey: 'maxwellBoltzmann',
            renderOptions: {
                showActivationEnergy: true,
                showArea: true,
                temperature: 298,
                compareTemperatures: true,
                highlightAreaBeyondEa: true
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
            const filename = `temperature_effect_mb_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Comparing Ea Values',
        problem: 'Reaction A: Ea = 50 kJ/mol. Reaction B: Ea = 100 kJ/mol. Which is faster at same T? Explain using energy profiles.',
        parameters: {
            reactionA_Ea: 50,
            reactionB_Ea: 100,
            compareRates: true,
            showBothProfiles: true
        },
        type: 'activation_energy',
        subparts: [
            'Lower Ea → easier to overcome barrier',
            'Reaction A has lower Ea (50 kJ/mol)',
            'More molecules have E ≥ 50 kJ than E ≥ 100 kJ',
            'Reaction A is faster',
            'Ea is key factor determining rate (at constant T)'
        ],
        helper: 'Lower Ea = faster reaction; Ea determines how many molecules can react',
        realWorldContext: 'Predicting relative reaction speeds',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: true,
                showDeltaH: false,
                compareTwoReactions: true,
                Ea1: 50,
                Ea2: 100
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
            const filename = `comparing_ea_values_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedEntropyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Entropy Concept',
        problem: 'Define entropy (S). Predict sign of ΔS for: (a) H₂O(l) → H₂O(g), (b) 2NO₂(g) → N₂O₄(g).',
        parameters: {
            defineEntropy: true,
            predictDeltaS: true,
            processes: [
                { equation: 'H2O(l) → H2O(g)', type: 'phase_change' },
                { equation: '2NO2(g) → N2O4(g)', type: 'gas_reaction' }
            ]
        },
        type: 'entropy',
        subparts: [
            'Entropy (S): measure of disorder/randomness',
            '(a) Liquid → gas: disorder increases, ΔS > 0 (positive)',
            'Gas molecules more random than liquid',
            '(b) 2 moles gas → 1 mole gas: fewer particles, ΔS < 0 (negative)',
            'Fewer independent particles = less disorder'
        ],
        helper: 'ΔS > 0: increasing disorder; ΔS < 0: decreasing disorder; Gases > liquids > solids',
        realWorldContext: 'Predicting entropy changes',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                showMotion: false,
                showLabels: true,
                states: ['solid', 'liquid', 'gas'],
                showEntropyComparison: true
            },
            canvasSize: { width: 1100, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `entropy_concept_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Predicting Entropy Sign',
        problem: 'Predict sign of ΔS: CaCO₃(s) → CaO(s) + CO₂(g).',
        parameters: {
            equation: 'CaCO3(s) → CaO(s) + CO2(g)',
            predictDeltaS: true
        },
        type: 'entropy',
        subparts: [
            'Reactants: 1 solid (low entropy)',
            'Products: 1 solid + 1 gas (higher entropy)',
            'Gas produced increases disorder greatly',
            'ΔS > 0 (positive)',
            'Entropy increases when gas is produced'
        ],
        helper: 'Gas formation: ΔS > 0; Dissolving solid: ΔS > 0; More particles: ΔS > 0',
        realWorldContext: 'Limestone decomposition entropy',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                showMotion: false,
                showLabels: true,
                showReaction: true,
                highlightGasFormation: true
            },
            canvasSize: { width: 1100, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `predicting_entropy_sign_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Calculating ΔS°',
        problem: 'Calculate ΔS° for 2H₂(g) + O₂(g) → 2H₂O(l). S°(H₂)=131, S°(O₂)=205, S°(H₂O)=70 J/(mol·K).',
        parameters: {
            equation: '2H2(g) + O2(g) → 2H2O(l)',
            entropyValues: { H2: 131, O2: 205, H2O: 70 },
            calculateDeltaS: true
        },
        type: 'entropy',
        subparts: [
            'ΔS° = ΣS°(products) - ΣS°(reactants)',
            'Products: 2 mol H₂O = 2(70) = 140 J/K',
            'Reactants: 2 mol H₂ + 1 mol O₂ = 2(131) + 205 = 467 J/K',
            'ΔS° = 140 - 467 = -327 J/K',
            'Negative: gases → liquid, disorder decreases'
        ],
        helper: 'ΔS° = Σnproducts·S° - Σnreactants·S°; Units: J/(mol·K)',
        realWorldContext: 'Water formation entropy change',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [467, 140],
                labels: ['Reactants', 'Products'],
                showDifference: true,
                chartType: 'entropy'
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
            const filename = `calculating_delta_s_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Second Law of Thermodynamics',
        problem: 'State the Second Law. Why do spontaneous processes increase universe entropy?',
        parameters: {
            stateSecondLaw: true,
            explainSpontaneity: true
        },
        type: 'entropy',
        subparts: [
            'Second Law: ΔS_universe > 0 for spontaneous process',
            'ΔS_universe = ΔS_system + ΔS_surroundings',
            'Universe naturally moves toward maximum disorder',
            'Even if ΔS_system < 0, can be spontaneous if ΔS_surroundings > 0 enough',
            'Overall entropy of universe always increases'
        ],
        helper: 'Spontaneous: ΔS_universe > 0; Total entropy always increasing',
        realWorldContext: 'Fundamental law of nature',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [100, 50, 150],
                labels: ['ΔS_system', 'ΔS_surroundings', 'ΔS_universe'],
                showSum: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `second_law_thermodynamics_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Entropy and Temperature',
        problem: 'Explain why S increases with temperature. Use molecular interpretation.',
        parameters: {
            explainTemperatureDependence: true,
            molecularInterpretation: true
        },
        type: 'entropy',
        subparts: [
            'Higher T → more kinetic energy',
            'More possible energy distributions among molecules',
            'More ways to arrange molecular motions',
            'Third Law: S = 0 at 0 K (perfect crystal)',
            'As T increases, S increases continuously'
        ],
        helper: 'S increases with T; At 0 K, S = 0 (Third Law); More T = more disorder',
        realWorldContext: 'Temperature effect on molecular disorder',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                showMotion: true,
                showLabels: true,
                compareTemperatures: true,
                showEntropyVsTemperature: true
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
            const filename = `entropy_temperature_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedGibbsEnergyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gibbs Free Energy Equation',
        problem: 'Calculate ΔG° for reaction with ΔH° = -100 kJ and ΔS° = -200 J/K at 298 K.',
        parameters: {
            deltaH: -100,
            deltaS: -200,
            temperature: 298,
            calculateDeltaG: true
        },
        type: 'gibbs_energy',
        subparts: [
            'ΔG° = ΔH° - TΔS°',
            'Convert ΔS to kJ: -200 J/K = -0.200 kJ/K',
            'ΔG° = -100 - (298)(-0.200)',
            'ΔG° = -100 + 59.6',
            'ΔG° = -40.4 kJ (spontaneous)'
        ],
        helper: 'ΔG = ΔH - TΔS; Match units (kJ or J); ΔG < 0 = spontaneous',
        realWorldContext: 'Determining spontaneity',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [-100, 59.6, -40.4],
                labels: ['ΔH°', 'TΔS°', 'ΔG°'],
                showCalculation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `gibbs_energy_calculation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'ΔG and Spontaneity',
        problem: 'What does sign of ΔG tell us? Classify: (a) ΔG < 0, (b) ΔG = 0, (c) ΔG > 0.',
        parameters: {
            explainDeltaG: true,
            classifySpontaneity: true
        },
        type: 'gibbs_energy',
        subparts: [
            '(a) ΔG < 0: spontaneous (forward direction)',
            '(b) ΔG = 0: at equilibrium (no net change)',
            '(c) ΔG > 0: non-spontaneous (reverse direction spontaneous)',
            'ΔG predicts direction, not rate',
            'Spontaneous ≠ fast (e.g., diamond → graphite)'
        ],
        helper: 'ΔG < 0: spontaneous; ΔG = 0: equilibrium; ΔG > 0: non-spontaneous',
        realWorldContext: 'Predicting reaction direction',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [-50, 0, 50],
                labels: ['Spontaneous', 'Equilibrium', 'Non-spontaneous'],
                showSpontaneityRegions: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `delta_g_spontaneity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Dependence of ΔG',
        problem: 'ΔH° = +50 kJ, ΔS° = +200 J/K. At what temperature does reaction become spontaneous?',
        parameters: {
            deltaH: 50,
            deltaS: 200,
            findTemperature: true,
            findSpontaneityTransition: true
        },
        type: 'gibbs_energy',
        subparts: [
            'At transition: ΔG = 0',
            '0 = ΔH - TΔS',
            'T = ΔH / ΔS',
            'T = 50 kJ / 0.200 kJ/K',
            'T = 250 K; Spontaneous above 250 K'
        ],
        helper: 'Transition T: set ΔG = 0, solve for T = ΔH/ΔS',
        realWorldContext: 'Temperature for spontaneous reaction',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                showTemperatureDependence: true,
                showTransitionPoint: true
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
            const filename = `temperature_dependence_delta_g_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'ΔG° and K Relationship',
        problem: 'Relate ΔG° to equilibrium constant K using ΔG° = -RT ln K.',
        parameters: {
            relateToK: true,
            explainRelationship: true
        },
        type: 'gibbs_energy',
        subparts: [
            'ΔG° = -RT ln K (at standard conditions)',
            'If K > 1: ln K > 0, so ΔG° < 0 (products favored)',
            'If K < 1: ln K < 0, so ΔG° > 0 (reactants favored)',
            'If K = 1: ln K = 0, so ΔG° = 0',
            'Large K (>>1) corresponds to large negative ΔG°'
        ],
        helper: 'ΔG° = -RT ln K; K > 1: ΔG° < 0; K < 1: ΔG° > 0',
        realWorldContext: 'Connecting thermodynamics and equilibrium',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: false,
                showIntersection: false,
                showDeltaGvsK: true
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
            const filename = `delta_g_k_relationship_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Four Cases of ΔG',
        problem: 'Analyze all four combinations: (a) ΔH<0, ΔS>0; (b) ΔH>0, ΔS<0; (c) ΔH<0, ΔS<0; (d) ΔH>0, ΔS>0.',
        parameters: {
            analyzeFourCases: true,
            predictSpontaneity: true
        },
        type: 'gibbs_energy',
        subparts: [
            '(a) ΔH<0, ΔS>0: ΔG always negative (spontaneous at all T)',
            '(b) ΔH>0, ΔS<0: ΔG always positive (never spontaneous)',
            '(c) ΔH<0, ΔS<0: Spontaneous at low T (|ΔH| > TΔS)',
            '(d) ΔH>0, ΔS>0: Spontaneous at high T (TΔS > ΔH)',
            'Temperature determines spontaneity for cases (c) and (d)'
        ],
        helper: 'Best case: exothermic + entropy increase; Worst: endothermic + entropy decrease',
        realWorldContext: 'Predicting spontaneity from ΔH and ΔS',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                showFourCases: true,
                compareCases: true
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `four_cases_delta_g_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}



generateRelatedSpontaneityDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Spontaneous vs Non-Spontaneous',
        problem: 'Define spontaneous process. Give 3 examples of spontaneous and 3 non-spontaneous processes.',
        parameters: {
            defineSpontaneous: true,
            giveExamples: true
        },
        type: 'spontaneity',
        subparts: [
            'Spontaneous: occurs naturally without continuous external input',
            'Spontaneous examples: ice melting at 25°C, iron rusting, water flowing downhill',
            'Non-spontaneous examples: water flowing uphill, charging battery, photosynthesis',
            'Spontaneous ≠ fast (diamond → graphite is spontaneous but very slow)',
            'Determined by ΔG_universe > 0 (or ΔG_system < 0 at constant T, P)'
        ],
        helper: 'Spontaneous: thermodynamically favorable; May need activation energy to start',
        realWorldContext: 'Natural vs forced processes',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                compareProcesses: true,
                showSpontaneousVsNon: true
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
            const filename = `spontaneous_vs_nonspontaneous_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Predicting Spontaneity',
        problem: 'Predict if spontaneous at 298 K: ΔH° = -50 kJ, ΔS° = +100 J/K.',
        parameters: {
            deltaH: -50,
            deltaS: 100,
            temperature: 298,
            predictSpontaneity: true
        },
        type: 'spontaneity',
        subparts: [
            'ΔH < 0 (exothermic, favorable)',
            'ΔS > 0 (entropy increases, favorable)',
            'Both factors favor spontaneity',
            'Calculate: ΔG° = -50 - (298)(0.100) = -50 - 29.8 = -79.8 kJ',
            'ΔG° < 0 → Spontaneous at all temperatures'
        ],
        helper: 'Both ΔH < 0 and ΔS > 0 → always spontaneous',
        realWorldContext: 'Favorable thermodynamics',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [-50, -29.8, -79.8],
                labels: ['ΔH°', 'TΔS°', 'ΔG°'],
                highlightSpontaneous: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `predicting_spontaneity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coupled Reactions',
        problem: 'Non-spontaneous: A → B, ΔG° = +30 kJ. Coupled with: C → D, ΔG° = -50 kJ. Is overall spontaneous?',
        parameters: {
            reaction1: { equation: 'A → B', deltaG: 30 },
            reaction2: { equation: 'C → D', deltaG: -50 },
            coupled: true,
            findOverallSpontaneity: true
        },
        type: 'spontaneity',
        subparts: [
            'Coupling: combine non-spontaneous with spontaneous reaction',
            'Overall: A + C → B + D',
            'ΔG°_overall = ΔG°₁ + ΔG°₂',
            'ΔG°_overall = (+30) + (-50) = -20 kJ',
            'ΔG° < 0 → Overall process is spontaneous'
        ],
        helper: 'Coupled reactions: ΔG_total = ΔG₁ + ΔG₂; Used in biological systems (ATP)',
        realWorldContext: 'ATP hydrolysis drives non-spontaneous reactions',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                values: [30, -50, -20],
                labels: ['Reaction 1', 'Reaction 2', 'Coupled'],
                showCoupling: true
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
            const filename = `coupled_reactions_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Reversibility and Spontaneity',
        problem: 'If forward reaction is spontaneous (ΔG < 0), what about reverse reaction?',
        parameters: {
            explainReversibility: true,
            relateForwardReverse: true
        },
        type: 'spontaneity',
        subparts: [
            'If forward: ΔG_f < 0 (spontaneous)',
            'Then reverse: ΔG_r = -ΔG_f > 0 (non-spontaneous)',
            'Forward and reverse cannot both be spontaneous',
            'At equilibrium: ΔG = 0 (neither direction favored)',
            'ΔG determines which direction is spontaneous'
        ],
        helper: 'ΔG_reverse = -ΔG_forward; Only one direction spontaneous (except at equilibrium)',
        realWorldContext: 'Reaction direction',
        diagramInfo: {
            type: 'energyBarChart',
            registryKey: 'energyBarChart',
            renderOptions: {
                showValues: true,
                showGrid: true,
                showForwardReverse: true,
                values: [-40, 40],
                labels: ['Forward', 'Reverse']
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `reversibility_spontaneity_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Spontaneity and Equilibrium',
        problem: 'Explain relationship between ΔG, ΔG°, Q, and K. When does spontaneity change?',
        parameters: {
            explainRelationships: true,
            relateQandK: true
        },
        type: 'spontaneity',
        subparts: [
            'ΔG = ΔG° + RT ln Q (general equation)',
            'At equilibrium: Q = K and ΔG = 0',
            'Therefore: ΔG° = -RT ln K',
            'If Q < K: ΔG < 0, forward spontaneous',
            'If Q > K: ΔG > 0, reverse spontaneous'
        ],
        helper: 'ΔG = ΔG° + RT ln Q; At equilibrium: Q = K, ΔG = 0',
        realWorldContext: 'Predicting reaction direction from Q',
        diagramInfo: {
            type: 'equilibriumGraph',
            registryKey: 'equilibriumGraph',
            renderOptions: {
                showRates: true,
                showIntersection: true,
                showDeltaGvsQ: true,
                showEquilibriumPoint: true
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
            const filename = `spontaneity_equilibrium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}   

const EndSection12 = "close";