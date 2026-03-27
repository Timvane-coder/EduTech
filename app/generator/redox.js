

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

const EndSection9 = "close";