
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

const EndSection11 = "close";