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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `bohr_model_carbon_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `nuclear_structure_carbon_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `orbital_shapes_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `periodic_trends_radius_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `quantum_numbers_2p_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `principal_quantum_number_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `quantum_numbers_validation_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `electron_config_iron_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `noble_gas_config_calcium_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `electron_config_fe3_ion_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `periodic_trends_ionization_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `periodic_trends_electronegativity_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `periodic_trends_group1_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `periodic_trends_atomic_radius_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ionization_energy_trend_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `electronegativity_trend_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ionic_radius_comparison_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `multiple_trends_fluorine_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_water_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ionic_bond_nacl_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `resonance_carbonate_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_methane_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_water_bent_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_sf6_octahedral_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `hybridization_sp3_carbon_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `hybridization_sp2_ethene_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `hybridization_sp_ethyne_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `bond_polarity_hcl_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `bond_polarity_cl2_nonpolar_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `molecular_polarity_comparison_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `molecular_polarity_nh3_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `intermolecular_forces_types_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `london_dispersion_forces_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `hydrogen_bonding_comparison_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `imf_strength_comparison_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ion_dipole_forces_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_ammonia_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_cl2_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_co2_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_formal_charge_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `lewis_structure_ammonium_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_ammonia_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_co2_linear_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_clf3_tshaped_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `vsepr_bf3_trigonal_${Date.now()}.png`;
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

