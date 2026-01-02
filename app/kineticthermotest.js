
import { EnhancedKineticsThermodynamicsWorkbook } from './kineticthermodynamic.js';
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';

// ============== UTILITY FUNCTION ==============

// Generate all workbook sections for a problem
function generateProblemSections(workbookInstance) {
    const workbook = workbookInstance.currentWorkbook;
    if (!workbook) {
        console.error('No workbook generated');
        return [];
    }

    const sections = [];

    // Process each section
    workbook.sections.forEach((section, sectionIndex) => {
        // Section title
        sections.push(
            new docx.Paragraph({
                text: section.title,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 200 }
            })
        );

        // Section content
        if (section.data && Array.isArray(section.data)) {
            section.data.forEach(row => {
                if (Array.isArray(row)) {
                    // Handle table-like data
                    if (row.length === 2 && row[0] && row[1]) {
                        // Key-value pair
                        sections.push(
                            new docx.Paragraph({
                                children: [
                                    new docx.TextRun({
                                        text: `${row[0]}: `,
                                        bold: true
                                    }),
                                    new docx.TextRun({
                                        text: String(row[1])
                                    })
                                ],
                                spacing: { after: 100 }
                            })
                        );
                    } else if (row[0] === '' && row[1] === '') {
                        // Spacing row
                        sections.push(
                            new docx.Paragraph({
                                text: '',
                                spacing: { after: 200 }
                            })
                        );
                    } else if (row.length > 2) {
                        // Multi-column row (like verification tables)
                        sections.push(
                            new docx.Paragraph({
                                text: row.join(' | '),
                                spacing: { after: 100 }
                            })
                        );
                    }
                }
            });
        }

        // Add extra spacing after section
        sections.push(
            new docx.Paragraph({
                text: '',
                spacing: { after: 300 }
            })
        );
    });

    return sections;
}

// ============== KINETICS AND THERMODYNAMICS - RELATED PROBLEMS GENERATORS ==============

function generateRelatedReactionKinetics() {
    const relatedProblems = [];

    // Problem 1: Average Rate Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Average Reaction Rate',
        problem: 'Calculate the average rate: [A] changes from 0.80 M to 0.20 M in 60 seconds',
        parameters: { 
            concentration_initial: 0.80, 
            concentration_final: 0.20, 
            time_initial: 0,
            time_final: 60,
            species: 'A'
        },
        type: 'average_rate',
        context: { difficulty: 'beginner', topic: 'Reaction Rates' },
        subparts: [
            'Given: [A]₀ = 0.80 M, [A]f = 0.20 M, Δt = 60 s',
            'Formula: rate = -Δ[A]/Δt',
            'Calculate Δ[A]: 0.20 - 0.80 = -0.60 M',
            'Calculate Δt: 60 - 0 = 60 s',
            'rate = -(-0.60)/60 = 0.60/60',
            'rate = 0.010 M/s',
            'Interpretation: Reactant A is consumed at 0.010 M per second'
        ],
        helper: 'Average rate = change in concentration / change in time',
        solution: 'rate = 0.010 M/s',
        realWorldContext: 'Measuring how fast a drug is metabolized in the body'
    });

    // Problem 2: First-Order Integrated Rate Law
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'First-Order Kinetics',
        problem: 'For first-order: [A]₀ = 0.500 M, k = 0.0231 s⁻¹, find [A] at t = 30.0 s',
        parameters: { 
            order: 1, 
            initial_concentration: 0.500, 
            rate_constant: 0.0231,
            time: 30.0
        },
        type: 'integrated_rate_law',
        context: { difficulty: 'intermediate', topic: 'Integrated Rate Laws' },
        subparts: [
            'Given: [A]₀ = 0.500 M, k = 0.0231 s⁻¹, t = 30.0 s',
            'First-order integrated rate law: ln[A]t = ln[A]₀ - kt',
            'Or: [A]t = [A]₀ × e^(-kt)',
            'Substitute values:',
            '[A]t = 0.500 × e^(-0.0231 × 30.0)',
            '[A]t = 0.500 × e^(-0.693)',
            '[A]t = 0.500 × 0.500',
            '[A]t = 0.250 M',
            'Check: 50% remains after one half-life (t₁/₂ = 0.693/k = 30 s)'
        ],
        helper: 'Use [A]t = [A]₀ × e^(-kt) for first-order reactions',
        solution: '[A]t = 0.250 M',
        realWorldContext: 'Radioactive decay and drug elimination follow first-order kinetics'
    });

    // Problem 3: Second-Order Kinetics
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Second-Order Kinetics',
        problem: 'For second-order: [A]₀ = 0.100 M, k = 0.54 M⁻¹s⁻¹, find [A] at t = 10.0 s',
        parameters: { 
            order: 2, 
            initial_concentration: 0.100, 
            rate_constant: 0.54,
            time: 10.0
        },
        type: 'integrated_rate_law',
        context: { difficulty: 'intermediate', topic: 'Second-Order Kinetics' },
        subparts: [
            'Given: [A]₀ = 0.100 M, k = 0.54 M⁻¹s⁻¹, t = 10.0 s',
            'Second-order integrated rate law: 1/[A]t = 1/[A]₀ + kt',
            'Substitute values:',
            '1/[A]t = 1/0.100 + (0.54)(10.0)',
            '1/[A]t = 10.0 + 5.4',
            '1/[A]t = 15.4 M⁻¹',
            '[A]t = 1/15.4',
            '[A]t = 0.0649 M',
            'Percent remaining: (0.0649/0.100) × 100% = 64.9%'
        ],
        helper: 'For second-order: 1/[A]t = 1/[A]₀ + kt',
        solution: '[A]t = 0.0649 M (64.9% remains)',
        realWorldContext: 'Gas phase reactions and some decomposition reactions'
    });

    // Problem 4: Half-Life Calculation (First-Order)
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Half-Life of First-Order Reaction',
        problem: 'Calculate half-life for first-order reaction with k = 0.0462 min⁻¹',
        parameters: { 
            order: 1, 
            rate_constant: 0.0462
        },
        type: 'half_life',
        context: { difficulty: 'beginner', topic: 'Half-Life Calculations' },
        subparts: [
            'Given: k = 0.0462 min⁻¹ (first-order)',
            'First-order half-life formula: t₁/₂ = 0.693/k',
            'Substitute:',
            't₁/₂ = 0.693/0.0462',
            't₁/₂ = 15.0 min',
            'Key feature: Half-life is independent of initial concentration',
            'After 15 min: 50% remains',
            'After 30 min: 25% remains',
            'After 45 min: 12.5% remains'
        ],
        helper: 'For first-order: t₁/₂ = 0.693/k (constant, independent of [A]₀)',
        solution: 't₁/₂ = 15.0 min',
        realWorldContext: 'Carbon-14 dating uses first-order half-life (5,730 years)'
    });

    // Problem 5: Rate Law Determination
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Determining Rate Law from Data',
        problem: 'Given experimental data, determine rate law: rate = k[A]^m[B]^n',
        parameters: { 
            initial_rates: [0.010, 0.020, 0.040, 0.010],
            concentrations: [
                [0.10, 0.10],
                [0.20, 0.10],
                [0.20, 0.20],
                [0.10, 0.20]
            ],
            orders: [1, 1],
            rate_constant: 1.0
        },
        type: 'rate_law',
        context: { difficulty: 'intermediate', topic: 'Rate Law Determination' },
        subparts: [
            'Given experimental data for A + B → products:',
            'Exp 1: [A]=0.10, [B]=0.10, rate=0.010 M/s',
            'Exp 2: [A]=0.20, [B]=0.10, rate=0.020 M/s',
            'Exp 3: [A]=0.20, [B]=0.20, rate=0.040 M/s',
            'Compare Exp 1 & 2: [A] doubles, rate doubles → order in A = 1',
            'Compare Exp 2 & 3: [B] doubles, rate doubles → order in B = 1',
            'Rate law: rate = k[A][B]',
            'Find k from Exp 1: 0.010 = k(0.10)(0.10)',
            'k = 0.010/0.010 = 1.0 M⁻¹s⁻¹',
            'Complete rate law: rate = 1.0[A][B] M⁻¹s⁻¹'
        ],
        helper: 'Compare experiments where only one concentration changes',
        solution: 'rate = 1.0[A][B], overall order = 2',
        realWorldContext: 'Determining mechanism of chemical reactions experimentally'
    });

    // Problem 6: Zero-Order Kinetics
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Zero-Order Kinetics',
        problem: 'For zero-order: [A]₀ = 1.00 M, k = 0.0500 M/s, find time to reach [A] = 0.25 M',
        parameters: { 
            order: 0, 
            initial_concentration: 1.00, 
            rate_constant: 0.0500,
            target_concentration: 0.25
        },
        type: 'integrated_rate_law',
        context: { difficulty: 'intermediate', topic: 'Zero-Order Kinetics' },
        subparts: [
            'Given: [A]₀ = 1.00 M, k = 0.0500 M/s, [A]t = 0.25 M',
            'Zero-order integrated rate law: [A]t = [A]₀ - kt',
            'Rearrange to solve for t: t = ([A]₀ - [A]t)/k',
            'Substitute:',
            't = (1.00 - 0.25)/0.0500',
            't = 0.75/0.0500',
            't = 15.0 s',
            'Characteristic: Constant rate regardless of [A]',
            'Often seen in enzyme-catalyzed reactions at high substrate'
        ],
        helper: 'Zero-order: concentration decreases linearly with time',
        solution: 't = 15.0 s',
        realWorldContext: 'Enzyme kinetics at saturating substrate concentrations'
    });

    return relatedProblems;
}

function generateRelatedRateLaws() {
    const relatedProblems = [];

    // Problem 1: Simple Rate Law
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Writing Rate Law',
        problem: 'Write the rate law for: 2A + B → C, if reaction is first-order in A and B',
        parameters: { 
            orders: [1, 1],
            rate_constant: 0.25
        },
        type: 'rate_law',
        context: { difficulty: 'beginner', topic: 'Rate Law Expression' },
        subparts: [
            'Given: Reaction is first-order in A and first-order in B',
            'General rate law: rate = k[A]^m[B]^n',
            'Where m and n are experimental orders (not stoichiometric coefficients)',
            'Given: m = 1, n = 1',
            'Rate law: rate = k[A][B]',
            'Overall order = m + n = 1 + 1 = 2',
            'Units of k: M⁻¹s⁻¹ (for overall second-order)',
            'Note: Stoichiometric coefficient (2 for A) does NOT appear in rate law'
        ],
        helper: 'Rate law exponents come from experiment, not balanced equation',
        solution: 'rate = k[A][B], overall order = 2',
        realWorldContext: 'Rate laws must be determined experimentally'
    });

    // Problem 2: Determining Order from Initial Rates
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Order Determination',
        problem: 'Determine order in A: When [A] triples, rate increases 9-fold',
        parameters: { 
            concentration_ratio: 3,
            rate_ratio: 9
        },
        type: 'rate_law',
        context: { difficulty: 'intermediate', topic: 'Reaction Order Determination' },
        subparts: [
            'Given: [A] triples (×3), rate increases 9-fold (×9)',
            'Rate law: rate = k[A]^m',
            'Initial: rate₁ = k[A]₁^m',
            'After tripling: rate₂ = k(3[A]₁)^m = k[A]₁^m × 3^m',
            'Ratio: rate₂/rate₁ = 3^m',
            'Given: rate₂/rate₁ = 9',
            'Therefore: 3^m = 9',
            '3^m = 3²',
            'm = 2',
            'Reaction is second-order in A'
        ],
        helper: 'Use ratio method: (concentration ratio)^m = rate ratio',
        solution: 'Order in A = 2 (second-order)',
        realWorldContext: 'Initial rate method for determining mechanism'
    });

    // Problem 3: Complex Rate Law
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multi-Reactant Rate Law',
        problem: 'For 2NO + O₂ → 2NO₂: rate = k[NO]²[O₂], find rate when [NO] doubles',
        parameters: { 
            orders: [2, 1],
            rate_constant: 7.1e3,
            concentration_change: { NO: 2, O2: 1 }
        },
        type: 'rate_law',
        context: { difficulty: 'intermediate', topic: 'Rate Law Calculations' },
        subparts: [
            'Given: rate = k[NO]²[O₂]',
            'Initial rate: rate₁ = k[NO]₁²[O₂]₁',
            'When [NO] doubles: [NO]₂ = 2[NO]₁',
            '[O₂] stays constant: [O₂]₂ = [O₂]₁',
            'New rate: rate₂ = k(2[NO]₁)²[O₂]₁',
            'rate₂ = k × 4[NO]₁² × [O₂]₁',
            'rate₂ = 4 × (k[NO]₁²[O₂]₁)',
            'rate₂ = 4 × rate₁',
            'Conclusion: Rate increases by factor of 4',
            'Because NO has order 2: (2)² = 4'
        ],
        helper: 'When concentration changes, raise to power of its order',
        solution: 'Rate increases by factor of 4',
        realWorldContext: 'NO₂ formation in atmospheric chemistry'
    });

    // Problem 4: Rate Constant Units
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Units of Rate Constant',
        problem: 'Determine units of k for: rate = k[A]²[B]',
        parameters: { 
            orders: [2, 1],
            overall_order: 3
        },
        type: 'rate_law',
        context: { difficulty: 'beginner', topic: 'Rate Constant Units' },
        subparts: [
            'Given: rate = k[A]²[B]',
            'Overall order = 2 + 1 = 3',
            'Rate always has units: M/s or M·s⁻¹',
            'Concentrations have units: M',
            'Set up dimensional analysis:',
            'M/s = k × M² × M',
            'M/s = k × M³',
            'k = (M/s)/M³',
            'k = M⁻²s⁻¹',
            'General formula: k units = M^(1-n)s⁻¹, where n = overall order'
        ],
        helper: 'Units of k depend on overall reaction order',
        solution: 'k has units of M⁻²s⁻¹',
        realWorldContext: 'Proper units essential for comparing rate constants'
    });

    // Problem 5: Rate Law from Mechanism
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rate Law from Mechanism',
        problem: 'Derive rate law for: Fast: A + B ⇌ C (fast equilibrium), Slow: C + D → E',
        parameters: { 
            mechanism: [
                { step: 'A + B ⇌ C', type: 'fast_equilibrium' },
                { step: 'C + D → E', type: 'slow' }
            ]
        },
        type: 'rate_law',
        context: { difficulty: 'advanced', topic: 'Mechanism and Rate Laws' },
        subparts: [
            'Given mechanism:',
            'Step 1 (fast equilibrium): A + B ⇌ C',
            'Step 2 (slow, rate-determining): C + D → E',
            'Rate law determined by slow step:',
            'rate = k₂[C][D]',
            'But C is intermediate - eliminate using equilibrium:',
            'For Step 1 at equilibrium: K = [C]/([A][B])',
            '[C] = K[A][B]',
            'Substitute into rate law:',
            'rate = k₂(K[A][B])[D]',
            'rate = k₂K[A][B][D]',
            'Define k = k₂K:',
            'rate = k[A][B][D]'
        ],
        helper: 'Rate-determining step controls rate; eliminate intermediates',
        solution: 'rate = k[A][B][D]',
        realWorldContext: 'Understanding reaction mechanisms from kinetic data'
    });

    // Problem 6: Temperature Effect on Rate
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Temperature and Rate',
        problem: 'If rate doubles when T increases 10°C, estimate activation energy',
        parameters: { 
            temperature_change: 10,
            rate_ratio: 2,
            T1: 298
        },
        type: 'rate_law',
        context: { difficulty: 'intermediate', topic: 'Temperature Effects' },
        subparts: [
            'Given: Rate doubles for 10°C increase (rough rule of thumb)',
            'T₁ = 298 K (25°C), T₂ = 308 K (35°C)',
            'Use Arrhenius: k₂/k₁ = e^((Ea/R)(1/T₁ - 1/T₂))',
            'Given k₂/k₁ = 2',
            'ln(2) = (Ea/8.314)(1/298 - 1/308)',
            '0.693 = (Ea/8.314)(0.003356 - 0.003247)',
            '0.693 = (Ea/8.314)(0.000109)',
            'Ea = 0.693 × 8.314/0.000109',
            'Ea ≈ 52,800 J/mol = 52.8 kJ/mol',
            'Typical Ea for many reactions: 50-100 kJ/mol'
        ],
        helper: '"Rule of thumb": rate doubles per 10°C → Ea ≈ 50 kJ/mol',
        solution: 'Ea ≈ 52.8 kJ/mol',
        realWorldContext: 'Why refrigeration slows food spoilage'
    });

    return relatedProblems;
}

function generateRelatedActivationEnergy() {
    const relatedProblems = [];

    // Problem 1: Basic Arrhenius Equation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculating Activation Energy',
        problem: 'Given: k₁ = 0.0150 s⁻¹ at 25°C, k₂ = 0.0855 s⁻¹ at 50°C. Find Ea.',
        parameters: { 
            k1: 0.0150,
            k2: 0.0855,
            temperature1: 25,
            temperature2: 50,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'intermediate', topic: 'Arrhenius Equation' },
        subparts: [
            'Given: k₁ = 0.0150 s⁻¹ at T₁ = 25°C',
            '       k₂ = 0.0855 s⁻¹ at T₂ = 50°C',
            'Step 1: Convert to Kelvin',
            'T₁ = 25 + 273.15 = 298.15 K',
            'T₂ = 50 + 273.15 = 323.15 K',
            'Step 2: Use two-point Arrhenius equation',
            'ln(k₂/k₁) = (Ea/R)(1/T₁ - 1/T₂)',
            'Step 3: Calculate ln(k₂/k₁)',
            'ln(0.0855/0.0150) = ln(5.70) = 1.740',
            'Step 4: Calculate (1/T₁ - 1/T₂)',
            '1/298.15 - 1/323.15 = 0.003353 - 0.003095 = 0.000258 K⁻¹',
            'Step 5: Solve for Ea',
            'Ea = R × ln(k₂/k₁) / (1/T₁ - 1/T₂)',
            'Ea = 8.314 × 1.740 / 0.000258',
            'Ea = 56,100 J/mol = 56.1 kJ/mol',
            'Interpretation: Moderate activation energy'
        ],
        helper: 'Always convert temperatures to Kelvin first!',
        solution: 'Ea = 56.1 kJ/mol',
        realWorldContext: 'Understanding temperature sensitivity of reactions'
    });

    // Problem 2: Predicting Rate Constant
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Predicting k at New Temperature',
        problem: 'Given: k = 3.46×10⁻⁵ s⁻¹ at 298 K, Ea = 103 kJ/mol. Find k at 398 K.',
        parameters: { 
            k1: 3.46e-5,
            temperature1: 298,
            temperature2: 398,
            activation_energy: 103000,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'intermediate', topic: 'Temperature Effect on k' },
        subparts: [
            'Given: k₁ = 3.46×10⁻⁵ s⁻¹ at T₁ = 298 K',
            '       Ea = 103 kJ/mol = 103,000 J/mol',
            '       T₂ = 398 K',
            'Use: ln(k₂/k₁) = -(Ea/R)(1/T₂ - 1/T₁)',
            'Note sign: rearranged to have positive temperature term',
            'Calculate 1/T₂ - 1/T₁:',
            '1/398 - 1/298 = 0.002513 - 0.003356 = -0.000843 K⁻¹',
            'Calculate -(Ea/R)(1/T₂ - 1/T₁):',
            '-(103,000/8.314)(-0.000843) = 10.44',
            'ln(k₂/k₁) = 10.44',
            'k₂/k₁ = e^10.44 = 34,100',
            'k₂ = 34,100 × 3.46×10⁻⁵',
            'k₂ = 1.18 s⁻¹',
            'Rate increased ~34,000 times for 100 K increase!'
        ],
        helper: 'Higher Ea means stronger temperature dependence',
        solution: 'k₂ = 1.18 s⁻¹ (34,000× faster)',
        realWorldContext: 'Why cooking at higher temperature speeds reactions dramatically'
    });

    // Problem 3: Graphical Method
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Arrhenius Plot',
        problem: 'Graphical determination: plot ln(k) vs 1/T has slope = -6250 K. Find Ea.',
        parameters: { 
            slope: -6250,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'intermediate', topic: 'Arrhenius Plot' },
        subparts: [
            'Arrhenius equation: k = Ae^(-Ea/RT)',
            'Take natural log: ln(k) = ln(A) - Ea/RT',
            'Rearrange: ln(k) = -(Ea/R)(1/T) + ln(A)',
            'This is y = mx + b form:',
            '  y = ln(k)',
            '  x = 1/T',
            '  slope m = -Ea/R',
            '  intercept b = ln(A)',
            'Given: slope = -6250 K',
            'Therefore: -Ea/R = -6250',
            'Ea = 6250 × R',
            'Ea = 6250 × 8.314 J/(mol·K)',
            'Ea = 51,960 J/mol = 52.0 kJ/mol',
            'Graphical method good for multiple data points'
        ],
        helper: 'Slope of ln(k) vs 1/T plot gives -Ea/R',
        solution: 'Ea = 52.0 kJ/mol',
        realWorldContext: 'Standard method for determining Ea from multiple measurements'
    });

    // Problem 4: Fraction of Molecules with Ea
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Energy Distribution',
        problem: 'What fraction of molecules have E ≥ Ea at 298 K if Ea = 50.0 kJ/mol?',
        parameters: { 
            activation_energy: 50000,
            temperature: 298,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'advanced', topic: 'Boltzmann Distribution' },
        subparts: [
            'Given: Ea = 50.0 kJ/mol = 50,000 J/mol, T = 298 K',
            'Fraction with E ≥ Ea: f = e^(-Ea/RT)',
            'This comes from Boltzmann distribution',
            'Calculate Ea/RT:',
            'Ea/RT = 50,000/(8.314 × 298)',
            'Ea/RT = 50,000/2,478 = 20.18',
            'Calculate fraction:',
            'f = e^(-20.18)',
            'f = 1.73 × 10⁻⁹',
            'f = 0.00000000173',
            'Interpretation: Only ~2 in a billion molecules',
            'have sufficient energy to react at 298 K',
            'This explains why reaction is slow despite many collisions'
        ],
        helper: 'Boltzmann factor e^(-Ea/RT) gives fraction with E ≥ Ea',
        solution: 'f = 1.73 × 10⁻⁹ (0.000000173%)',
        realWorldContext: 'Why reactions need activation - very few molecules have enough energy'
    });

    // Problem 5: Comparing Activation Energies
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Comparing Reactions',
        problem: 'Reaction A: Ea = 75 kJ/mol, Reaction B: Ea = 25 kJ/mol. Which is faster at 298 K?',
        parameters: { 
            Ea_A: 75000,
            Ea_B: 25000,
            temperature: 298,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'intermediate', topic: 'Activation Energy Comparison' },
        subparts: [
            'Given: Reaction A: Ea = 75 kJ/mol',
            '       Reaction B: Ea = 25 kJ/mol',
            '       T = 298 K',
            'Both reactions: k = Ae^(-Ea/RT)',
            'Assume same A factor for comparison',
            'Reaction A: k_A ∝ e^(-75,000/(8.314×298))',
            'k_A ∝ e^(-30.28) = 8.61 × 10⁻¹⁴',
            'Reaction B: k_B ∝ e^(-25,000/(8.314×298))',
            'k_B ∝ e^(-10.09) = 4.14 × 10⁻⁵',
            'Ratio: k_B/k_A = 4.14×10⁻⁵ / 8.61×10⁻¹⁴',
            'k_B/k_A ≈ 4.8 × 10⁸',
            'Reaction B is ~480 million times faster!',
            'Lower Ea means exponentially faster reaction',
            'Catalysts work by lowering Ea'
        ],
        helper: 'Lower activation energy = exponentially faster reaction',
        solution: 'Reaction B is ~480 million times faster',
        realWorldContext: 'Catalysts accelerate reactions by providing lower Ea pathway'
    });

    // Problem 6: Temperature for Target Rate
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Finding Required Temperature',
        problem: 'k = 0.001 s⁻¹ at 300 K. At what T will k = 0.100 s⁻¹? (Ea = 85 kJ/mol)',
        parameters: { 
            k1: 0.001,
            k2: 0.100,
            temperature1: 300,
            activation_energy: 85000,
            gas_constant: 8.314
        },
        type: 'arrhenius',
        context: { difficulty: 'advanced', topic: 'Solving for Temperature' },
        subparts: [
            'Given: k₁ = 0.001 s⁻¹ at T₁ = 300 K',
            '       k₂ = 0.100 s⁻¹ at T₂ = ?',
            '       Ea = 85 kJ/mol = 85,000 J/mol',
            'Use: ln(k₂/k₁) = -(Ea/R)(1/T₂ - 1/T₁)',
            'Calculate ln(k₂/k₁):',
            'ln(0.100/0.001) = ln(100) = 4.605',
            'Rearrange for 1/T₂:',
            '1/T₂ = 1/T₁ - (R/Ea)ln(k₂/k₁)',
            'Substitute:',
            '1/T₂ = 1/300 - (8.314/85,000)(4.605)',
            '1/T₂ = 0.003333 - 0.000450',
            '1/T₂ = 0.002883 K⁻¹',
            'T₂ = 1/0.002883 = 347 K',
            'T₂ = 347 - 273 = 74°C',
            'Need to increase temperature by 47°C for 100× rate increase'
        ],
        helper: 'Rearrange Arrhenius equation to solve for T₂',
        solution: 'T₂ = 347 K (74°C)',
        realWorldContext: 'Process optimization - finding temperature for desired reaction rate'
    });

    return relatedProblems;
}

function generateRelatedEntropy() {
    const relatedProblems = [];

    // Problem 1: Entropy Change from Standard Values
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculating ΔS° for Reaction',
        problem: 'Calculate ΔS° for: 2H₂(g) + O₂(g) → 2H₂O(l)',
        parameters: { 
            products_S: [69.9],
            reactants_S: [130.7, 205.2],
            products_coeffs: [2],
            reactants_coeffs: [2, 1]
        },
        type: 'entropy_change',
        context: { difficulty: 'intermediate', topic: 'Entropy Calculations' },
        subparts: [
            'Given: S°[H₂(g)] = 130.7 J/(mol·K)',
            '       S°[O₂(g)] = 205.2 J/(mol·K)',
            '       S°[H₂O(l)] = 69.9 J/(mol·K)',
            'Formula: ΔS°rxn = ΣnS°(products) - ΣnS°(reactants)',
            'Calculate products sum:',
            'ΣnS°(products) = 2 × 69.9 = 139.8 J/(mol·K)',
            'Calculate reactants sum:',
            'ΣnS°(reactants) = 2(130.7) + 1(205.2)',
            '                = 261.4 + 205.2 = 466.6 J/(mol·K)',
            'Calculate ΔS°:',
            'ΔS° = 139.8 - 466.6 = -326.8 J/(mol·K)',
            'Interpretation: Large entropy decrease',
            '3 moles gas → 2 moles liquid = much less disorder',
            'Negative ΔS opposes spontaneity'
        ],
        helper: 'ΔS° = Σ(products) - Σ(reactants), watch signs!',
        solution: 'ΔS° = -326.8 J/(mol·K) (entropy decreases)',
        realWorldContext: 'Gases have much higher entropy than liquids or solids'
    });

    // Problem 2: Phase Transition Entropy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Entropy of Vaporization',
        problem: 'Water vaporization: ΔH_vap = 40.7 kJ/mol at 373 K. Calculate ΔS_vap.',
        parameters: { 
            heat_transfer: 40700,
            temperature: 373
        },
        type: 'entropy_change',
        context: { difficulty: 'intermediate', topic: 'Phase Transition Entropy' },
        subparts: [
            'Given: ΔH_vap = 40.7 kJ/mol = 40,700 J/mol',
            '       T = 373 K (boiling point at 1 atm)',
            'For reversible phase transition at constant T:',
            'ΔS = q_rev/T = ΔH/T',
            'Vaporization is reversible at boiling point',
            'Calculate:',
            'ΔS_vap = 40,700 J/mol / 373 K',
            'ΔS_vap = 109.1 J/(mol·K)',
            'Interpretation: Large positive entropy change',
            'Liquid → gas: molecules gain freedom of movement',
            'Disorder increases significantly',
            'Trouton\'s Rule: ΔS_vap ≈ 85-95 J/(mol·K) for non-H-bonding',
            'Water is higher due to H-bonding in liquid state'
        ],
        helper: 'At phase transition: ΔS = ΔH/T (reversible process)',
        solution: 'ΔS_vap = 109.1 J/(mol·K)',
        realWorldContext: 'Why boiling increases disorder - molecules escape liquid organization'
    });

    // Problem 3: Entropy Change for Surroundings
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Surroundings Entropy',
        problem: 'Reaction releases 150 kJ at 298 K. Calculate ΔS_surr.',
        parameters: { 
            heat_released: -150000,
            temperature: 298
        },
        type: 'entropy_change',
        context: { difficulty: 'beginner', topic: 'Surroundings Entropy' },
        subparts: [
            'Given: Reaction releases 150 kJ (exothermic)',
            '       T = 298 K',
            'For surroundings: ΔS_surr = -ΔH_sys/T',
            'Sign convention: heat released by system absorbed by surroundings',
            'ΔH_sys = -150 kJ = -150,000 J (negative for exothermic)',
            'Calculate:',
            'ΔS_surr = -(-150,000)/298',
            'ΔS_surr = +150,000/298',
            'ΔS_surr = +503 J/K',
            'Interpretation: Surroundings entropy increases',
            'Heat disperses into surroundings',
            'Positive ΔS_surr favors spontaneity'
        ],
        helper: 'Exothermic reactions increase surroundings entropy',
        solution: 'ΔS_surr = +503 J/K',
        realWorldContext: 'Why exothermic reactions are often spontaneous'
    });

    // Problem 4: Universe Entropy and Spontaneity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Second Law Check',
        problem: 'ΔS_sys = -42.0 J/K, ΔH = -125 kJ at 298 K. Is reaction spontaneous?',
        parameters: { 
            delta_S_system: -42.0,
            delta_H: -125,
            temperature: 298
        },
        type: 'entropy_change',
        context: { difficulty: 'intermediate', topic: 'Second Law of Thermodynamics' },
        subparts: [
            'Given: ΔS_sys = -42.0 J/K',
            '       ΔH_sys = -125 kJ = -125,000 J',
            '       T = 298 K',
            'Calculate ΔS_surr:',
            'ΔS_surr = -ΔH_sys/T = -(-125,000)/298',
            'ΔS_surr = +419.5 J/K',
            'Calculate ΔS_univ:',
            'ΔS_univ = ΔS_sys + ΔS_surr',
            'ΔS_univ = -42.0 + 419.5',
            'ΔS_univ = +377.5 J/K',
            'Second Law: ΔS_univ > 0 for spontaneous',
            'Since ΔS_univ = +377.5 > 0:',
            'Reaction IS spontaneous',
            'Large exothermic ΔH overcomes negative ΔS_sys'
        ],
        helper: 'ΔS_univ = ΔS_sys + ΔS_surr; spontaneous if ΔS_univ > 0',
        solution: 'ΔS_univ = +377.5 J/K; SPONTANEOUS',
        realWorldContext: 'Second Law determines if reaction can occur naturally'
    });

    // Problem 5: Mixing Entropy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Entropy of Mixing',
        problem: 'Why does ΔS > 0 when two gases mix?',
        parameters: { 
            process: 'mixing',
            gases: 2
        },
        type: 'entropy_change',
        context: { difficulty: 'beginner', topic: 'Entropy and Mixing' },
        subparts: [
            'Consider mixing two ideal gases A and B',
            'Initially: Gas A in left half, Gas B in right half',
            'Remove partition: gases spontaneously mix',
            'Why does entropy increase?',
            '1. Positional entropy increases:',
            '   A molecules can now be anywhere in full volume',
            '   B molecules can now be anywhere in full volume',
            '2. More microstates available:',
            '   Initially: W = W_A × W_B (separate)',
            '   Finally: W = (W_A + W_B)^total (mixed)',
            '3. S = k ln(W), so more W → larger S',
            'For 1 mole mixing into double volume:',
            'ΔS_mix = R ln(2) = 8.314 × 0.693 = 5.76 J/(mol·K)',
            'Mixing is irreversible: never spontaneously unmixes!',
            'This is statistical: not impossible, just astronomically unlikely'
        ],
        helper: 'Mixing increases positional entropy (more arrangements)',
        solution: 'ΔS_mix = +5.76 J/(mol·K) per mole per doubling',
        realWorldContext: 'Why gases mix spontaneously and never unmix'
    });

    // Problem 6: Temperature Dependence of Entropy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Entropy vs Temperature',
        problem: 'Why does entropy increase with temperature?',
        parameters: { 
            heat_capacity: 75.3,
            T1: 298,
            T2: 373
        },
        type: 'entropy_change',
        context: { difficulty: 'intermediate', topic: 'Temperature and Entropy' },
        subparts: [
            'Entropy change with temperature (constant P):',
            'ΔS = ∫(Cp/T)dT from T₁ to T₂',
            'For constant Cp: ΔS = Cp ln(T₂/T₁)',
            'Example: Heat 1 mol water from 25°C to 100°C',
            'Given: Cp = 75.3 J/(mol·K)',
            '       T₁ = 298 K, T₂ = 373 K',
            'Calculate:',
            'ΔS = 75.3 × ln(373/298)',
            'ΔS = 75.3 × ln(1.252)',
            'ΔS = 75.3 × 0.2244',
            'ΔS = 16.9 J/(mol·K)',
            'Physical meaning:',
            'Higher T → faster molecular motion → more kinetic energy states',
            'More ways to distribute energy → higher entropy',
            'Third Law: S → 0 as T → 0 K (perfect crystal)'
        ],
        helper: 'Higher temperature means more accessible energy states',
        solution: 'ΔS = +16.9 J/(mol·K)',
        realWorldContext: 'Entropy increases with temperature - more molecular motion'
    });

    return relatedProblems;
}

function generateRelatedGibbsEnergy() {
    const relatedProblems = [];

    // Problem 1: Basic Gibbs Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculating Gibbs Free Energy',
        problem: 'Calculate ΔG° at 298 K: ΔH° = -92.2 kJ/mol, ΔS° = -198.8 J/(mol·K)',
        parameters: { 
            delta_H: -92.2,
            delta_S: -198.8,
            temperature: 298
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Gibbs Free Energy' },
        subparts: [
            'Given: ΔH° = -92.2 kJ/mol',
            '       ΔS° = -198.8 J/(mol·K)',
            '       T = 298 K',
            'Formula: ΔG° = ΔH° - TΔS°',
            'Step 1: Convert ΔS to kJ/(mol·K)',
            'ΔS° = -198.8 J/(mol·K) = -0.1988 kJ/(mol·K)',
            'Step 2: Calculate TΔS°',
            'TΔS° = 298 × (-0.1988) = -59.24 kJ/mol',
            'Step 3: Calculate ΔG°',
            'ΔG° = -92.2 - (-59.24)',
            'ΔG° = -92.2 + 59.24',
            'ΔG° = -32.96 kJ/mol',
            'Since ΔG° < 0: Reaction is spontaneous',
            'Both ΔH and ΔS favor forward reaction at low T'
        ],
        helper: 'CRITICAL: Convert ΔS from J to kJ before calculating!',
        solution: 'ΔG° = -33.0 kJ/mol (spontaneous)',
        realWorldContext: 'Determining if reaction will proceed under standard conditions'
    });

    // Problem 2: Temperature Crossover
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Finding Temperature Crossover',
        problem: 'At what temperature does reaction become spontaneous? ΔH° = +178 kJ, ΔS° = +161 J/K',
        parameters: { 
            delta_H: 178,
            delta_S: 161
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Temperature Effects on Spontaneity' },
        subparts: [
            'Given: ΔH° = +178 kJ/mol (endothermic)',
            '       ΔS° = +161 J/(mol·K) (entropy increases)',
            'At equilibrium/crossover: ΔG° = 0',
            'ΔG° = ΔH° - TΔS° = 0',
            'Solve for T:',
            'TΔS° = ΔH°',
            'T = ΔH°/ΔS°',
            'Convert ΔS° to kJ/(mol·K):',
            'ΔS° = 161 J/(mol·K) = 0.161 kJ/(mol·K)',
            'Calculate:',
            'T = 178/0.161',
            'T = 1,106 K = 833°C',
            'Interpretation:',
            'T < 1,106 K: ΔG° > 0 (non-spontaneous)',
            'T > 1,106 K: ΔG° < 0 (spontaneous)',
            'High temperature needed to overcome positive ΔH°'
        ],
        helper: 'At crossover: T = ΔH°/ΔS° (with matching units)',
        solution: 'T = 1,106 K (833°C)',
        realWorldContext: 'Why some reactions only occur at high temperatures'
    });

    // Problem 3: Gibbs from Formation Values
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Using Formation Free Energies',
        problem: 'Calculate ΔG° for: 2NO(g) + O₂(g) → 2NO₂(g)',
        parameters: { 
            products_Gf: [51.3],
            reactants_Gf: [87.6, 0],
            products_coeffs: [2],
            reactants_coeffs: [2, 1]
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Standard Free Energy of Formation' },
        subparts: [
            'Given: ΔG°f[NO(g)] = 87.6 kJ/mol',
            '       ΔG°f[O₂(g)] = 0 kJ/mol (element)',
            '       ΔG°f[NO₂(g)] = 51.3 kJ/mol',
            'Formula: ΔG°rxn = ΣnΔG°f(products) - ΣnΔG°f(reactants)',
            'Calculate products sum:',
            'ΣnΔG°f(products) = 2 × 51.3 = 102.6 kJ/mol',
            'Calculate reactants sum:',
            'ΣnΔG°f(reactants) = 2(87.6) + 1(0)',
            '                  = 175.2 kJ/mol',
            'Calculate ΔG°:',
            'ΔG°rxn = 102.6 - 175.2',
            'ΔG°rxn = -72.6 kJ/mol',
            'Since ΔG° < 0: Reaction is spontaneous',
            'Products are more stable than reactants'
        ],
        helper: 'Elements in standard state have ΔG°f = 0',
        solution: 'ΔG°rxn = -72.6 kJ/mol',
        realWorldContext: 'Formation of nitrogen dioxide in air pollution'
    });

    // Problem 4: Four Cases of Spontaneity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Analyzing Spontaneity Cases',
        problem: 'Predict spontaneity: Case 1: ΔH < 0, ΔS > 0',
        parameters: { 
            delta_H_sign: 'negative',
            delta_S_sign: 'positive'
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'beginner', topic: 'Predicting Spontaneity' },
        subparts: [
            'Four possible cases:',
            '',
            'Case 1: ΔH < 0, ΔS > 0 (given)',
            'ΔG = ΔH - TΔS = (negative) - T(positive)',
            'ΔG = negative - positive = NEGATIVE',
            'Spontaneous at ALL temperatures',
            'Both factors favor forward reaction',
            '',
            'Case 2: ΔH > 0, ΔS < 0',
            'ΔG = positive - T(negative) = POSITIVE',
            'Non-spontaneous at ALL temperatures',
            'Both factors oppose forward reaction',
            '',
            'Case 3: ΔH < 0, ΔS < 0',
            'ΔG = negative - T(negative)',
            'Low T: ΔH dominates, ΔG < 0 (spontaneous)',
            'High T: TΔS dominates, ΔG > 0 (non-spontaneous)',
            '',
            'Case 4: ΔH > 0, ΔS > 0',
            'ΔG = positive - T(positive)',
            'Low T: ΔH dominates, ΔG > 0 (non-spontaneous)',
            'High T: TΔS dominates, ΔG < 0 (spontaneous)'
        ],
        helper: 'ΔH and ΔS compete; temperature determines winner',
        solution: 'Case 1: Spontaneous at all T',
        realWorldContext: 'Understanding thermodynamic favorability'
    });

    // Problem 5: Non-Standard Conditions
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gibbs at Non-Standard Conditions',
        problem: 'ΔG° = -33.3 kJ/mol, Q = 0.010 at 298 K. Calculate ΔG.',
        parameters: { 
            delta_G_standard: -33.3,
            Q: 0.010,
            temperature: 298,
            gas_constant: 8.314
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'advanced', topic: 'Non-Standard Free Energy' },
        subparts: [
            'Given: ΔG° = -33.3 kJ/mol',
            '       Q = 0.010 (reaction quotient)',
            '       T = 298 K',
            'Formula: ΔG = ΔG° + RT ln(Q)',
            'Calculate RT:',
            'RT = 8.314 J/(mol·K) × 298 K',
            'RT = 2,478 J/mol = 2.478 kJ/mol',
            'Calculate RT ln(Q):',
            'ln(0.010) = -4.605',
            'RT ln(Q) = 2.478 × (-4.605)',
            'RT ln(Q) = -11.41 kJ/mol',
            'Calculate ΔG:',
            'ΔG = -33.3 + (-11.41)',
            'ΔG = -44.7 kJ/mol',
            'Since Q < 1: reactants predominate',
            'ΔG more negative than ΔG°: even more favorable'
        ],
        helper: 'ΔG = ΔG° + RT ln(Q) accounts for actual concentrations',
        solution: 'ΔG = -44.7 kJ/mol',
        realWorldContext: 'Adjusting for real reaction conditions vs standard state'
    });

    // Problem 6: Maximum Work
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gibbs and Maximum Work',
        problem: 'ΔG = -120 kJ for a reaction. What is maximum useful work?',
        parameters: { 
            delta_G: -120
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Free Energy and Work' },
        subparts: [
            'Given: ΔG = -120 kJ',
            'Gibbs free energy represents:',
            'Maximum useful (non-expansion) work available',
            'At constant T and P:',
            'w_max = ΔG',
            'For our reaction:',
            'w_max = -120 kJ',
            'Negative ΔG → system can do work on surroundings',
            'Maximum work available = 120 kJ per mole',
            '',
            'Important distinctions:',
            '- ΔG: maximum useful work (excluding PΔV)',
            '- ΔH: total energy change (includes all work)',
            '- TΔS: energy "wasted" increasing disorder',
            '',
            'Efficiency: w_max/ΔH = ΔG/ΔH',
            'Some energy always lost to entropy',
            'This is why perpetual motion impossible'
        ],
        helper: 'ΔG = maximum useful work at constant T and P',
        solution: 'w_max = 120 kJ available per mole',
        realWorldContext: 'Batteries convert chemical ΔG to electrical work'
    });

    return relatedProblems;
}

function generateRelatedSpontaneity() {
    const relatedProblems = [];

    // Problem 1: Equilibrium Constant from ΔG°
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculating K from ΔG°',
        problem: 'ΔG° = -5.40 kJ/mol at 298 K. Calculate equilibrium constant K.',
        parameters: { 
            delta_G_standard: -5.40,
            temperature: 298,
            gas_constant: 8.314
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'intermediate', topic: 'Equilibrium and Free Energy' },
        subparts: [
            'Given: ΔG° = -5.40 kJ/mol = -5,400 J/mol',
            '       T = 298 K',
            'Formula: ΔG° = -RT ln(K)',
            'Rearrange: ln(K) = -ΔG°/(RT)',
            'Calculate RT:',
            'RT = 8.314 × 298 = 2,478 J/mol',
            'Calculate ln(K):',
            'ln(K) = -(-5,400)/2,478',
            'ln(K) = 5,400/2,478',
            'ln(K) = 2.179',
            'Solve for K:',
            'K = e^2.179',
            'K = 8.84',
            'Interpretation: K > 1, so products favored',
            'At equilibrium: [products]/[reactants] = 8.84'
        ],
        helper: 'ΔG° < 0 means K > 1 (products favored)',
        solution: 'K = 8.84',
        realWorldContext: 'Connecting thermodynamics to equilibrium position'
    });

    // Problem 2: Van't Hoff Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Effect on K',
        problem: 'K = 1.8×10⁻⁵ at 298 K, ΔH° = 92.2 kJ/mol. Find K at 500 K.',
        parameters: { 
            K1: 1.8e-5,
            temperature1: 298,
            temperature2: 500,
            delta_H_standard: 92200,
            gas_constant: 8.314
        },
        type: 'vant_hoff',
        context: { difficulty: 'advanced', topic: 'Van\'t Hoff Equation' },
        subparts: [
            'Given: K₁ = 1.8×10⁻⁵ at T₁ = 298 K',
            '       T₂ = 500 K',
            '       ΔH° = 92.2 kJ/mol = 92,200 J/mol',
            'Van\'t Hoff equation:',
            'ln(K₂/K₁) = -(ΔH°/R)(1/T₂ - 1/T₁)',
            'Calculate (1/T₂ - 1/T₁):',
            '1/500 - 1/298 = 0.00200 - 0.00336',
            '               = -0.00136 K⁻¹',
            'Calculate -(ΔH°/R)(1/T₂ - 1/T₁):',
            '-(92,200/8.314)(-0.00136) = 15.07',
            'ln(K₂/K₁) = 15.07',
            'K₂/K₁ = e^15.07 = 3.49 × 10⁶',
            'K₂ = (1.8×10⁻⁵)(3.49×10⁶)',
            'K₂ = 62.8',
            'Endothermic: K increases with T (Le Chatelier)'
        ],
        helper: 'Endothermic: K increases with T; Exothermic: K decreases with T',
        solution: 'K₂ = 62.8 (3.5 million times larger)',
        realWorldContext: 'Why some reactions need high temperature to proceed'
    });

    // Problem 3: Reaction Quotient vs K
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Predicting Reaction Direction',
        problem: 'K = 100, current Q = 0.50. Which direction does reaction proceed?',
        parameters: { 
            K_equilibrium: 100,
            Q_current: 0.50,
            temperature: 298
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'intermediate', topic: 'Reaction Quotient and Direction' },
        subparts: [
            'Given: K = 100 (equilibrium constant)',
            '       Q = 0.50 (current reaction quotient)',
            'Compare Q to K:',
            'Q < K: 0.50 < 100',
            '',
            'Decision rules:',
            'If Q < K: Reaction proceeds FORWARD →',
            '         (to make more products, increase Q)',
            'If Q > K: Reaction proceeds REVERSE ←',
            '         (to make more reactants, decrease Q)',
            'If Q = K: System at equilibrium (no net change)',
            '',
            'Calculate ΔG:',
            'ΔG = RT ln(Q/K)',
            'ΔG = RT ln(0.50/100)',
            'ΔG = RT ln(0.005)',
            'ΔG = 8.314 × 298 × (-5.298)',
            'ΔG = -13,130 J/mol = -13.1 kJ/mol',
            'Negative ΔG confirms forward spontaneous'
        ],
        helper: 'Q < K: forward; Q > K: reverse; Q = K: equilibrium',
        solution: 'Reaction proceeds FORWARD to reach equilibrium',
        realWorldContext: 'Predicting which way reaction will shift'
    });

    // Problem 4: Coupling Reactions
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coupled Reactions',
        problem: 'Can ATP hydrolysis (ΔG° = -30.5 kJ) drive reaction with ΔG° = +15 kJ?',
        parameters: { 
            delta_G1: 15,
            delta_G2: -30.5
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'advanced', topic: 'Thermodynamic Coupling' },
        subparts: [
            'Given: Unfavorable reaction: ΔG°₁ = +15 kJ/mol',
            '       ATP hydrolysis: ΔG°₂ = -30.5 kJ/mol',
            'Question: Can ATP drive unfavorable reaction?',
            '',
            'When reactions are coupled:',
            'ΔG°_total = ΔG°₁ + ΔG°₂',
            'Calculate:',
            'ΔG°_total = (+15) + (-30.5)',
            'ΔG°_total = -15.5 kJ/mol',
            '',
            'Since ΔG°_total < 0:',
            'YES, coupled reaction is spontaneous!',
            '',
            'This is how biological systems work:',
            '- Unfavorable biosynthesis reactions',
            '- Coupled to ATP hydrolysis',
            '- Net process becomes favorable',
            '',
            'Example: Glucose phosphorylation',
            'Glucose + Pi → Glucose-6-P: ΔG° = +13.8 kJ',
            'ATP → ADP + Pi: ΔG° = -30.5 kJ',
            'Net: Glucose + ATP → Glucose-6-P + ADP',
            '     ΔG° = -16.7 kJ (spontaneous!)'
        ],
        helper: 'Couple unfavorable reaction to favorable one',
        solution: 'YES, ΔG°_total = -15.5 kJ/mol (spontaneous)',
        realWorldContext: 'How ATP powers biochemical reactions in cells'
    });

    // Problem 5: Standard State vs Real Conditions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Standard vs Actual Conditions',
        problem: 'ΔG° = +7.3 kJ/mol. Can reaction be spontaneous under any conditions?',
        parameters: { 
            delta_G_standard: 7.3
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Standard State Limitations' },
        subparts: [
            'Given: ΔG° = +7.3 kJ/mol (non-spontaneous at standard state)',
            '',
            'Key insight: ΔG° is only for standard conditions',
            '- All concentrations = 1 M',
            '- All gases at 1 atm',
            '- Temperature = 298 K',
            '',
            'Under non-standard conditions:',
            'ΔG = ΔG° + RT ln(Q)',
            '',
            'If Q is very small (reactants >> products):',
            'ln(Q) is very negative',
            'RT ln(Q) can overcome positive ΔG°',
            'ΔG can become negative!',
            '',
            'Example: If Q = 0.001',
            'ΔG = 7.3 + (8.314×298/1000) × ln(0.001)',
            'ΔG = 7.3 + 2.478 × (-6.908)',
            'ΔG = 7.3 + (-17.1)',
            'ΔG = -9.8 kJ/mol (NOW spontaneous!)',
            '',
            'Le Chatelier: Excess reactants drive reaction forward',
            'Removing products also favors forward direction'
        ],
        helper: 'ΔG° ≠ ΔG; manipulate Q to change spontaneity',
        solution: 'YES, spontaneous if Q << 1 (excess reactants)',
        realWorldContext: 'Why controlling concentrations affects reaction feasibility'
    });

    // Problem 6: Temperature and Spontaneity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature Effect on Spontaneity',
        problem: 'ΔH° = -176 kJ, ΔS° = -284 J/K. At what T does reaction become non-spontaneous?',
        parameters: { 
            delta_H: -176,
            delta_S: -284
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'intermediate', topic: 'Temperature Crossover' },
        subparts: [
            'Given: ΔH° = -176 kJ/mol (exothermic)',
            '       ΔS° = -284 J/(mol·K) (entropy decreases)',
            'This is Case 3: ΔH < 0, ΔS < 0',
            'Spontaneous at low T, non-spontaneous at high T',
            '',
            'Find crossover temperature:',
            'At crossover: ΔG° = 0',
            'ΔG° = ΔH° - TΔS° = 0',
            'TΔS° = ΔH°',
            'T = ΔH°/ΔS°',
            '',
            'Convert ΔS to kJ/(mol·K):',
            'ΔS° = -284 J/(mol·K) = -0.284 kJ/(mol·K)',
            '',
            'Calculate:',
            'T = -176/(-0.284)',
            'T = 620 K = 347°C',
            '',
            'Interpretation:',
            'T < 620 K: ΔG° < 0 (spontaneous)',
            'T > 620 K: ΔG° > 0 (non-spontaneous)',
            '',
            'At low T: ΔH term dominates (exothermic favors)',
            'At high T: TΔS term dominates (negative ΔS opposes)'
        ],
        helper: 'Crossover at T = ΔH°/ΔS°',
        solution: 'T_crossover = 620 K (347°C)',
        realWorldContext: 'Why some exothermic reactions stop at high temperature'
    });

    // Problem 7: Entropy-Driven Reactions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Entropy-Driven Process',
        problem: 'Ice melting: ΔH = +6.01 kJ/mol at 273 K. Why spontaneous?',
        parameters: { 
            delta_H: 6.01,
            temperature: 273,
            process: 'melting'
        },
        type: 'gibbs_free_energy',
        context: { difficulty: 'beginner', topic: 'Entropy-Driven Spontaneity' },
        subparts: [
            'Given: Ice → Water at 0°C (273 K)',
            '       ΔH = +6.01 kJ/mol (endothermic!)',
            'Puzzle: Why does ice melt spontaneously if endothermic?',
            '',
            'Calculate ΔS at melting point:',
            'At phase transition: ΔS = ΔH/T',
            'ΔS = 6,010 J/mol / 273 K',
            'ΔS = 22.0 J/(mol·K)',
            '',
            'Calculate ΔG at 273 K:',
            'ΔG = ΔH - TΔS',
            'ΔG = 6.01 - (273)(0.0220)',
            'ΔG = 6.01 - 6.01',
            'ΔG = 0 kJ/mol',
            '',
            'At melting point: ΔG = 0 (equilibrium)',
            'Solid and liquid coexist',
            '',
            'Above 273 K (room temperature):',
            'TΔS term larger: ΔG < 0',
            'Entropy increase drives melting',
            '',
            'This is entropy-driven spontaneity:',
            'Positive ΔH opposed by larger positive TΔS'
        ],
        helper: 'Entropy can overcome unfavorable enthalpy at high T',
        solution: 'ΔG = 0 at melting point; ΔS drives process',
        realWorldContext: 'Why ice melts at room temperature despite absorbing heat'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveReactionKineticsProblems() {
    const problems = generateRelatedReactionKinetics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Reaction Kinetics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveRateLawsProblems() {
    const problems = generateRelatedRateLaws();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rate Laws Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveActivationEnergyProblems() {
    const problems = generateRelatedActivationEnergy();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Activation Energy Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveEntropyProblems() {
    const problems = generateRelatedEntropy();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Entropy Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveGibbsEnergyProblems() {
    const problems = generateRelatedGibbsEnergy();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Gibbs Energy Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveSpontaneityProblems() {
    const problems = generateRelatedSpontaneity();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Spontaneity Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedKineticsThermodynamicsWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed'
        });

        workbook.solveChemistryProblem({
            equation: problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveChemistryDocument() {
    console.log('Generating Comprehensive Kinetics & Thermodynamics Chemistry Workbook...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Kinetics & Thermodynamics Chemistry Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Related Problems',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Chemical Kinetics, Activation Energy, Entropy, Gibbs Energy, and Spontaneity',
            spacing: { after: 300 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: `Generated: ${new Date().toLocaleString()}`,
            spacing: { after: 600 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    // ============== TABLE OF CONTENTS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Table of Contents',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { after: 200 }
        })
    );

    // Part I: Reaction Kinetics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reaction Kinetics (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const kineticsProblems = generateRelatedReactionKinetics();
    kineticsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Rate Laws
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Rate Laws and Mechanisms (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rateLawsProblems = generateRelatedRateLaws();
    rateLawsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 7}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Activation Energy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Activation Energy and Arrhenius Equation (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const activationProblems = generateRelatedActivationEnergy();
    activationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 13}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Entropy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Entropy and Second Law (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const entropyProblems = generateRelatedEntropy();
    entropyProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 19}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Gibbs Free Energy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gibbs Free Energy (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gibbsProblems = generateRelatedGibbsEnergy();
    gibbsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 25}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Spontaneity and Equilibrium
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Spontaneity and Equilibrium (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const spontaneityProblems = generateRelatedSpontaneity();
    spontaneityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 31}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: REACTION KINETICS ==============
    console.log('\nProcessing Part I: Reaction Kinetics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Reaction Kinetics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const kineticsSolved = solveReactionKineticsProblems();
    kineticsSolved.forEach((solved, index) => {
        console.log(`  Adding Reaction Kinetics Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 1}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: RATE LAWS ==============
    console.log('\nProcessing Part II: Rate Laws...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Rate Laws and Mechanisms',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rateLawsSolved = solveRateLawsProblems();
    rateLawsSolved.forEach((solved, index) => {
        console.log(`  Adding Rate Laws Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 7}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: ACTIVATION ENERGY ==============
    console.log('\nProcessing Part III: Activation Energy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Activation Energy and Arrhenius Equation',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const activationSolved = solveActivationEnergyProblems();
    activationSolved.forEach((solved, index) => {
        console.log(`  Adding Activation Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 13}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: ENTROPY ==============
    console.log('\nProcessing Part IV: Entropy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Entropy and Second Law',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const entropySolved = solveEntropyProblems();
    entropySolved.forEach((solved, index) => {
        console.log(`  Adding Entropy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 19}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: GIBBS FREE ENERGY ==============
    console.log('\nProcessing Part V: Gibbs Free Energy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gibbs Free Energy',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gibbsSolved = solveGibbsEnergyProblems();
    gibbsSolved.forEach((solved, index) => {
        console.log(`  Adding Gibbs Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 25}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: SPONTANEITY AND EQUILIBRIUM ==============
    console.log('\nProcessing Part VI: Spontaneity and Equilibrium...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Spontaneity and Equilibrium',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const spontaneitySolved = solveSpontaneityProblems();
    spontaneitySolved.forEach((solved, index) => {
        console.log(`  Adding Spontaneity Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 31}: ${solved.problem.scenario}`,
                heading: docx.HeadingLevel.HEADING_2,
                spacing: { before: 400, after: 300 },
                pageBreakBefore: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `${solved.problem.problem}`,
                spacing: { after: 200 },
                bold: true
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Difficulty: ${solved.problem.difficulty}`,
                spacing: { after: 100 }
            })
        );

        documentChildren.push(
            new docx.Paragraph({
                text: `Helper Tip: ${solved.problem.helper}`,
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== CREATE AND SAVE DOCUMENT ==============
    const doc = new docx.Document({
        sections: [{
            properties: {
                page: {
                    margin: {
                        top: 720,    // 0.5 inch
                        right: 720,
                        bottom: 720,
                        left: 720
                    }
                }
            },
            children: documentChildren
        }]
    });

    // Save the document
    try {
        const buffer = await docx.Packer.toBuffer(doc);
        const filename = 'comprehensive_kinetics_thermodynamics_chemistry_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE CHEMISTRY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 37');
        console.log('    - Reaction Kinetics: 6 problems');
        console.log('    - Rate Laws and Mechanisms: 6 problems');
        console.log('    - Activation Energy (Arrhenius): 6 problems');
        console.log('    - Entropy and Second Law: 6 problems');
        console.log('    - Gibbs Free Energy: 6 problems');
        console.log('    - Spontaneity and Equilibrium: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Reaction Kinetics (Problems 1-6)');
        console.log('    - Average rate, integrated rate laws, half-life');
        console.log('    - Zero, first, and second-order reactions');
        console.log('  • Part II: Rate Laws and Mechanisms (Problems 7-12)');
        console.log('    - Rate law determination, reaction order');
        console.log('    - Mechanism analysis, temperature effects');
        console.log('  • Part III: Activation Energy (Problems 13-18)');
        console.log('    - Arrhenius equation calculations');
        console.log('    - Temperature dependence of rate constants');
        console.log('    - Molecular energy distributions');
        console.log('  • Part IV: Entropy (Problems 19-24)');
        console.log('    - Entropy calculations from standard values');
        console.log('    - Phase transitions, surroundings entropy');
        console.log('    - Second Law applications');
        console.log('  • Part V: Gibbs Free Energy (Problems 25-30)');
        console.log('    - ΔG calculations and spontaneity');
        console.log('    - Temperature crossover points');
        console.log('    - Formation free energies, coupled reactions');
        console.log('  • Part VI: Spontaneity (Problems 31-37)');
        console.log('    - Equilibrium constants from ΔG°');
        console.log('    - Van\'t Hoff equation');
        console.log('    - Reaction direction prediction');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution with chemical reasoning');
        console.log('  • Enhanced explanations (conceptual, procedural, visual, mathematical)');
        console.log('  • Molecular perspective and physical interpretation');
        console.log('  • Temperature and unit conversions with warnings');
        console.log('  • Verification and reasonability checks');
        console.log('  • Key concepts and pedagogical notes');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Sign convention reminders');
        console.log('\n🔬 SPECIAL CHEMISTRY FEATURES:');
        console.log('  • Automatic Kelvin temperature conversion');
        console.log('  • Unit consistency checking (J/kJ)');
        console.log('  • Sign convention verification (thermodynamics)');
        console.log('  • Molecular-level explanations');
        console.log('  • Boltzmann distribution insights');
        console.log('  • Le Chatelier principle connections');
        console.log('  • Thermodynamic favorability analysis');
        console.log('  • Chemical equilibrium relationships');
        console.log('\n🎯 LEARNING OBJECTIVES COVERED:');
        console.log('  ✓ Chemical Kinetics:');
        console.log('    - Reaction rates and rate laws');
        console.log('    - Integrated rate laws (0th, 1st, 2nd order)');
        console.log('    - Half-life calculations');
        console.log('    - Reaction mechanisms and rate-determining steps');
        console.log('  ✓ Activation Energy:');
        console.log('    - Arrhenius equation applications');
        console.log('    - Temperature effects on reaction rates');
        console.log('    - Energy barriers and molecular collisions');
        console.log('    - Catalyst effects (lowering Ea)');
        console.log('  ✓ Thermodynamics:');
        console.log('    - First and Second Laws');
        console.log('    - Entropy calculations and interpretations');
        console.log('    - Gibbs free energy and spontaneity');
        console.log('    - Temperature dependence of thermodynamic quantities');
        console.log('  ✓ Chemical Equilibrium:');
        console.log('    - Equilibrium constants from thermodynamics');
        console.log('    - Van\'t Hoff equation');
        console.log('    - Reaction quotient vs equilibrium constant');
        console.log('    - Le Chatelier\'s principle applications');
        console.log('\n💡 PEDAGOGICAL APPROACH:');
        console.log('  • Progressive difficulty (easier → similar → harder)');
        console.log('  • Multiple explanation layers (4 styles)');
        console.log('  • Scaffolded learning with guiding questions');
        console.log('  • Error prevention database');
        console.log('  • Common mistakes highlighted');
        console.log('  • Real-world applications emphasized');
        console.log('  • Molecular perspective integrated throughout');
        console.log('  • Conceptual connections between topics');
        console.log('\n🔗 KEY CHEMICAL CONCEPTS INTEGRATED:');
        console.log('  • Collision theory and molecular kinetics');
        console.log('  • Energy diagrams and reaction coordinates');
        console.log('  • Statistical thermodynamics (Boltzmann distribution)');
        console.log('  • Entropy as disorder and energy dispersal');
        console.log('  • Enthalpy vs entropy competition');
        console.log('  • Free energy as spontaneity criterion');
        console.log('  • Phase transitions and their thermodynamics');
        console.log('  • Biochemical applications (ATP coupling)');
        console.log('  • Industrial process optimization');
        console.log('  • Environmental chemistry connections');
        console.log('\n📚 RECOMMENDED USE:');
        console.log('  • Self-study guide for chemistry students');
        console.log('  • Comprehensive exam preparation');
        console.log('  • Reference for kinetics and thermodynamics');
        console.log('  • Teaching resource for instructors');
        console.log('  • Problem-solving practice with full solutions');
        console.log('  • Review of fundamental chemistry principles');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE CHEMISTRY DOCUMENT GENERATION ==============

generateComprehensiveChemistryDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
