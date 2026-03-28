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
                const filename = `equilibrium_kc_calculation_${Date.now()}.png`;
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
                const filename = `kc_expression_${Date.now()}.png`;
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
                const filename = `ice_table_kc_${Date.now()}.png`;
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
                const filename = `kp_calculation_${Date.now()}.png`;
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
                const filename = `concentration_vs_time_equilibrium_${Date.now()}.png`;
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
                const filename = `le_chatelier_concentration_${Date.now()}.png`;
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
                const filename = `le_chatelier_removal_${Date.now()}.png`;
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
                const filename = `le_chatelier_temperature_${Date.now()}.png`;
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
                const filename = `le_chatelier_pressure_${Date.now()}.png`;
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
                const filename = `catalyst_equilibrium_effect_${Date.now()}.png`;
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
                const filename = `ksp_calculation_${Date.now()}.png`;
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
                const filename = `solubility_from_ksp_${Date.now()}.png`;
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
                const filename = `common_ion_effect_${Date.now()}.png`;
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
                const filename = `precipitation_prediction_${Date.now()}.png`;
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
                const filename = `solubility_curve_KNO3_${Date.now()}.png`;
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
                const filename = `complex_ion_formation_${Date.now()}.png`;
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
                const filename = `complex_ion_structure_${Date.now()}.png`;
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
                const filename = `complex_ion_equilibrium_${Date.now()}.png`;
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
                const filename = `edta_complex_${Date.now()}.png`;
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
                const filename = `stepwise_complex_formation_${Date.now()}.png`;
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
                const filename = `kp_calculation_gas_${Date.now()}.png`;
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
                const filename = `kp_kc_relationship_${Date.now()}.png`;
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
                const filename = `total_pressure_equilibrium_${Date.now()}.png`;
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
                const filename = `heterogeneous_equilibrium_${Date.now()}.png`;
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
                const filename = `inert_gas_equilibrium_${Date.now()}.png`;
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
                const filename = `acid_base_neutralization_${Date.now()}.png`;
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
                const filename = `strong_acid_base_${Date.now()}.png`;
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
                const filename = `diprotic_acid_neutralization_${Date.now()}.png`;
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
                const filename = `salt_formation_${Date.now()}.png`;
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
                const filename = `excess_reagent_neutralization_${Date.now()}.png`;
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

generateRelatedpHCalculationsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

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
                const filename = `ph_scale_calculation_${Date.now()}.png`;
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
                const filename = `concentration_from_ph_${Date.now()}.png`;
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
                const filename = `ph_poh_relationship_${Date.now()}.png`;
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
                const filename = `strong_acid_ph_${Date.now()}.png`;
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
                const filename = `dilution_ph_effect_${Date.now()}.png`;
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
                const filename = `buffer_mechanism_${Date.now()}.png`;
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
                const filename = `henderson_hasselbalch_${Date.now()}.png`;
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
                const filename = `buffer_ph_change_${Date.now()}.png`;
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
                const filename = `choosing_buffer_system_${Date.now()}.png`;
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
                const filename = `preparing_buffer_${Date.now()}.png`;
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
                const filename = `titration_strong_strong_${Date.now()}.png`;
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
                const filename = `titration_unknown_concentration_${Date.now()}.png`;
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
                const filename = `titration_weak_acid_${Date.now()}.png`;
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
        realWorldContext: 'Choosing titration indicators',
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
                const filename = `indicator_selection_${Date.now()}.png`;
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
                const filename = `diprotic_acid_titration_${Date.now()}.png`;
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
