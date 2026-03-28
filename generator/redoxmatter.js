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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `redox_titration_stoich_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `simple_redox_stoich_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `dichromate_titration_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `iodine_thiosulfate_titration_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `percent_purity_redox_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `oxidation_states_H2SO4_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `oxidation_state_dichromate_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `redox_changes_identification_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `oxidation_state_organic_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `disproportionation_chlorine_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `half_reactions_ZnCu_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `balancing_electrons_AlO_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `half_reaction_acidic_MnO4_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `half_reaction_basic_Cr_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `combining_half_reactions_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `standard_cell_potential_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `identifying_electrodes_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `nernst_equation_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `electrochemical_series_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `delta_g_ecell_relationship_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `chemistry_concentration_cell_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `chemistry_electrolysis_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `chemistry_molten_electrolysis_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `particle_states_three_states_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `particle_motion_states_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `diffusion_diagram_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `brownian_motion_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `compressibility_states_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `heating_curve_water_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `phase_changes_six_types_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `cooling_curve_water_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `sublimation_dry_ice_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `heat_fusion_vaporization_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `boyles_law_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `charles_law_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `combined_gas_law_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `gas_stoichiometry_${Date.now()}.png`;
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

// ============================================================================

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `kmt_postulates_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `temperature_kinetic_energy_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `real_vs_ideal_gases_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `grahams_law_effusion_${Date.now()}.png`;
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new BiologyDiagramsRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `pressure_from_collisions_${Date.now()}.png`;
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
