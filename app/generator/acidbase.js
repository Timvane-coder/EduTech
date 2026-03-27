


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


const EndSection10 = "close";