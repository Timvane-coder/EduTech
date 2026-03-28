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
                const filename = `mole_triangle_mass_to_moles_${Date.now()}.png`;
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
                const filename = `mole_triangle_moles_to_mass_${Date.now()}.png`;
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
                const filename = `particle_triangle_moles_to_particles_${Date.now()}.png`;
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
                const filename = `molar_mass_calcium_hydroxide_${Date.now()}.png`;
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
                const filename = `unit_conversion_map_${Date.now()}.png`;
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
                const filename = `balancing_combustion_${Date.now()}.png`;
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
                const filename = `balancing_synthesis_${Date.now()}.png`;
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
                const filename = `balancing_double_displacement_${Date.now()}.png`;
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
                const filename = `balancing_decomposition_${Date.now()}.png`;
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
                const filename = `balancing_glucose_combustion_${Date.now()}.png`;
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
                const filename = `stoichiometry_roadmap_${Date.now()}.png`;
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
                const filename = `stoichiometric_ratio_${Date.now()}.png`;
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
                const filename = `conversion_map_multistep_${Date.now()}.png`;
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
                const filename = `stoichiometry_ethanol_combustion_${Date.now()}.png`;
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
                const filename = `molar_mass_comparison_${Date.now()}.png`;
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
                const filename = `limiting_reagent_visual_${Date.now()}.png`;
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
                const filename = `limiting_reagent_bar_model_${Date.now()}.png`;
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
                const filename = `limiting_reagent_mass_based_${Date.now()}.png`;
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
                const filename = `excess_reagent_calculation_${Date.now()}.png`;
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
                const filename = `limiting_reagent_sandwich_analogy_${Date.now()}.png`;
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
                const filename = `percent_yield_visual_${Date.now()}.png`;
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
                const filename = `finding_actual_yield_${Date.now()}.png`;
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
                const filename = `complete_yield_problem_${Date.now()}.png`;
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
                const filename = `finding_theoretical_yield_${Date.now()}.png`;
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
                const filename = `yield_with_limiting_reagent_${Date.now()}.png`;
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
                const filename = `gas_triangle_stp_${Date.now()}.png`;
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
                const filename = `gas_triangle_volume_to_moles_${Date.now()}.png`;
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
                const filename = `ideal_gas_law_${Date.now()}.png`;
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
                const filename = `gas_stoichiometry_volume_ratio_${Date.now()}.png`;
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
                const filename = `mass_to_gas_volume_${Date.now()}.png`;
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
                const filename = `molarity_calculation_${Date.now()}.png`;
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
                const filename = `moles_from_molarity_${Date.now()}.png`;
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
                const filename = `dilution_calculation_${Date.now()}.png`;
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
                const filename = `mass_to_molarity_${Date.now()}.png`;
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
                const filename = `solution_stoichiometry_reaction_${Date.now()}.png`;
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
                const filename = `energy_profile_thermochemical_${Date.now()}.png`;
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
                const filename = `enthalpy_change_mass_${Date.now()}.png`;
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
                const filename = `hess_law_cycle_${Date.now()}.png`;
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
                const filename = `energy_profile_endothermic_${Date.now()}.png`;
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
                const filename = `calorimeter_calculation_${Date.now()}.png`;
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
                const filename = `empirical_formula_percent_${Date.now()}.png`;
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
                const filename = `empirical_formula_simple_${Date.now()}.png`;
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
                const filename = `molecular_from_empirical_${Date.now()}.png`;
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
                const filename = `empirical_formula_fractions_${Date.now()}.png`;
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
                const filename = `percent_composition_pie_${Date.now()}.png`;
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

