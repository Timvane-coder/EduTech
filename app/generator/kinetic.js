
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