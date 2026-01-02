import { EnhancedNuclearPhysicsMathematicalWorkbook } from './nuclearphysicsworkbook.js';
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

// ============== RADIOACTIVE DECAY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadioactiveDecayPhysics() {
    const relatedProblems = [];

    // Problem 1: Simple Half-Life Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Half-Life Decay',
        problem: 'Calculate the remaining amount of Carbon-14 after 11,460 years if initially there were 100 grams. Half-life of C-14 is 5,730 years.',
        parameters: { 
            N0: 100, 
            halfLife: 5730, 
            halfLifeUnit: 'y',
            t: 11460,
            timeUnit: 'y'
        },
        type: 'radioactive_decay',
        context: { difficulty: 'beginner', topic: 'Radioactive Decay - Half-Life' },
        subparts: [
            'Given: N₀ = 100 g, t₁/₂ = 5,730 years, t = 11,460 years',
            'Step 1: Calculate number of half-lives',
            'n = t/t₁/₂ = 11,460/5,730 = 2 half-lives',
            'Step 2: Apply decay formula',
            'N(t) = N₀ × (1/2)ⁿ = 100 × (1/2)² = 100 × 0.25',
            'N(t) = 25 grams',
            'After 2 half-lives, 25% remains'
        ],
        helper: 'After each half-life, half of the material decays',
        solution: 'N(t) = 25 grams',
        realWorldContext: 'Carbon-14 dating of archaeological artifacts'
    });

    // Problem 2: Activity Calculation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Activity and Decay Constant',
        problem: 'A radioactive sample has a half-life of 8 days. If the initial activity is 5.0 × 10⁶ Bq, what is the activity after 24 days?',
        parameters: { 
            A0: 5.0e6, 
            halfLife: 8, 
            halfLifeUnit: 'd',
            t: 24,
            timeUnit: 'd'
        },
        type: 'radioactive_decay',
        context: { difficulty: 'intermediate', topic: 'Activity and Decay' },
        subparts: [
            'Given: A₀ = 5.0 × 10⁶ Bq, t₁/₂ = 8 days, t = 24 days',
            'Step 1: Calculate decay constant',
            'λ = ln(2)/t₁/₂ = 0.693/8 = 0.0866 day⁻¹',
            'Step 2: Apply activity decay formula',
            'A(t) = A₀ × e^(-λt)',
            'A(24) = 5.0 × 10⁶ × e^(-0.0866 × 24)',
            'A(24) = 5.0 × 10⁶ × e^(-2.078)',
            'A(24) = 5.0 × 10⁶ × 0.125',
            'A(24) = 6.25 × 10⁵ Bq',
            'After 3 half-lives (24/8 = 3), activity is (1/2)³ = 1/8 of original'
        ],
        helper: 'Activity decreases exponentially with same half-life as nuclei count',
        solution: 'A(t) = 6.25 × 10⁵ Bq',
        realWorldContext: 'Medical radioisotope dosage calculations'
    });

    // Problem 3: Decay Constant Determination
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Finding Decay Constant from Half-Life',
        problem: 'Uranium-238 has a half-life of 4.468 × 10⁹ years. Calculate its decay constant and the mean lifetime.',
        parameters: { 
            halfLife: 4.468e9, 
            halfLifeUnit: 'y'
        },
        type: 'radioactive_decay',
        context: { difficulty: 'intermediate', topic: 'Decay Constant and Mean Lifetime' },
        subparts: [
            'Given: t₁/₂ = 4.468 × 10⁹ years',
            'Step 1: Calculate decay constant',
            'λ = ln(2)/t₁/₂',
            'λ = 0.693147/(4.468 × 10⁹ years)',
            'λ = 1.551 × 10⁻¹⁰ year⁻¹',
            'Step 2: Calculate mean lifetime',
            'τ = 1/λ = 1/(1.551 × 10⁻¹⁰)',
            'τ = 6.447 × 10⁹ years',
            'Note: τ = t₁/₂/ln(2) ≈ 1.443 × t₁/₂'
        ],
        helper: 'Mean lifetime is always ln(2) times the half-life',
        solution: 'λ = 1.551 × 10⁻¹⁰ year⁻¹, τ = 6.447 × 10⁹ years',
        realWorldContext: 'Geological dating and uranium decay series'
    });

    // Problem 4: Fraction Remaining
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Fraction Remaining After Time',
        problem: 'What fraction of a radioactive sample remains after 3 half-lives?',
        parameters: { 
            N0: 1, 
            halfLife: 1, 
            halfLifeUnit: 's',
            t: 3,
            timeUnit: 's'
        },
        type: 'radioactive_decay',
        context: { difficulty: 'beginner', topic: 'Exponential Decay' },
        subparts: [
            'Given: Time elapsed = 3 half-lives',
            'After 1 half-life: 1/2 remains',
            'After 2 half-lives: (1/2)² = 1/4 remains',
            'After 3 half-lives: (1/2)³ = 1/8 remains',
            'Fraction remaining = 1/8 = 0.125 = 12.5%',
            'Fraction decayed = 1 - 1/8 = 7/8 = 0.875 = 87.5%'
        ],
        helper: 'After n half-lives, fraction remaining = (1/2)ⁿ',
        solution: 'Fraction remaining = 1/8 or 12.5%',
        realWorldContext: 'Predicting radioactive sample depletion'
    });

    // Problem 5: Time to Decay to Specific Amount
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Time Required for Decay',
        problem: 'A sample initially contains 200 mg of Iodine-131 (t₁/₂ = 8.02 days). How long will it take for the sample to decay to 25 mg?',
        parameters: { 
            N0: 200, 
            halfLife: 8.02, 
            halfLifeUnit: 'd',
            N_target: 25
        },
        type: 'radioactive_decay',
        context: { difficulty: 'intermediate', topic: 'Decay Time Calculation' },
        subparts: [
            'Given: N₀ = 200 mg, N(t) = 25 mg, t₁/₂ = 8.02 days',
            'Step 1: Use decay equation',
            'N(t) = N₀ × (1/2)^(t/t₁/₂)',
            '25 = 200 × (1/2)^(t/8.02)',
            'Step 2: Solve for t',
            '25/200 = (1/2)^(t/8.02)',
            '0.125 = (1/2)^(t/8.02)',
            '(1/2)³ = (1/2)^(t/8.02)',
            'Therefore: t/8.02 = 3',
            't = 3 × 8.02 = 24.06 days',
            'Verification: 200 × (1/2)³ = 200 × 0.125 = 25 mg ✓'
        ],
        helper: 'Use logarithms to solve exponential decay equations',
        solution: 't = 24.06 days (3 half-lives)',
        realWorldContext: 'Medical treatment planning with radioactive iodine'
    });

    // Problem 6: Decay Chain Introduction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Simple Decay Chain',
        problem: 'Radon-222 (t₁/₂ = 3.82 days) decays to Polonium-218 (t₁/₂ = 3.1 min). If we start with pure Rn-222, describe the behavior of Po-218.',
        parameters: { 
            parent_lambda: 0.693 / (3.82 * 86400),
            daughter_lambda: 0.693 / (3.1 * 60),
            N0_parent: 1e10,
            t: 86400 // 1 day
        },
        type: 'decay_chain',
        context: { difficulty: 'advanced', topic: 'Radioactive Decay Chains' },
        subparts: [
            'Given: Rn-222 (parent): t₁/₂ = 3.82 days',
            '       Po-218 (daughter): t₁/₂ = 3.1 min',
            'Step 1: Calculate decay constants',
            'λ_parent = ln(2)/(3.82 days) = 2.099 × 10⁻⁶ s⁻¹',
            'λ_daughter = ln(2)/(3.1 min) = 3.727 × 10⁻³ s⁻¹',
            'Step 2: Analyze relationship',
            'λ_daughter >> λ_parent (daughter decays much faster)',
            'This leads to secular equilibrium',
            'Step 3: Equilibrium condition',
            'After several daughter half-lives:',
            'Activity_daughter ≈ Activity_parent',
            'Po-218 builds up then maintains equilibrium with Rn-222'
        ],
        helper: 'When daughter decays much faster, secular equilibrium occurs',
        solution: 'Po-218 reaches secular equilibrium with Rn-222',
        realWorldContext: 'Radon gas buildup in homes and uranium decay series'
    });

    // Problem 7: Age Determination
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Radiometric Dating',
        problem: 'A fossil contains 15% of its original Carbon-14. Given t₁/₂ = 5,730 years for C-14, estimate the age of the fossil.',
        parameters: { 
            N0: 100, 
            N_current: 15,
            halfLife: 5730, 
            halfLifeUnit: 'y'
        },
        type: 'radioactive_decay',
        context: { difficulty: 'intermediate', topic: 'Radiometric Dating' },
        subparts: [
            'Given: N(t)/N₀ = 0.15 (15% remains), t₁/₂ = 5,730 years',
            'Step 1: Use decay formula',
            'N(t)/N₀ = e^(-λt) = 0.15',
            'Step 2: Calculate decay constant',
            'λ = ln(2)/t₁/₂ = 0.693/5,730 = 1.209 × 10⁻⁴ year⁻¹',
            'Step 3: Solve for t',
            'e^(-λt) = 0.15',
            '-λt = ln(0.15)',
            't = -ln(0.15)/λ',
            't = -(-1.897)/(1.209 × 10⁻⁴)',
            't = 15,690 years',
            'Alternative: Using half-lives',
            '0.15 ≈ (1/2)^2.74, so t ≈ 2.74 × 5,730 = 15,700 years'
        ],
        helper: 'Use natural logarithm to find time from remaining fraction',
        solution: 'Age ≈ 15,690 years',
        realWorldContext: 'Archaeological and paleontological dating'
    });

    return relatedProblems;
}

// ============== NUCLEAR REACTIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedNuclearReactionsPhysics() {
    const relatedProblems = [];

    // Problem 1: Alpha Decay Energy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Alpha Decay Q-value',
        problem: 'Calculate the Q-value for the alpha decay of Po-210. Given: M(Po-210) = 209.9829 u, M(Pb-206) = 205.9745 u, M(He-4) = 4.0026 u.',
        parameters: { 
            A: 210,
            Z: 84,
            parentMass: 209.9829,
            daughterMass: 205.9745,
            alphaMass: 4.0026
        },
        type: 'alpha_decay',
        context: { difficulty: 'beginner', topic: 'Alpha Decay Energy' },
        subparts: [
            'Given: ²¹⁰₈₄Po → ²⁰⁶₈₂Pb + ⁴₂He',
            'M(Po-210) = 209.9829 u',
            'M(Pb-206) = 205.9745 u',
            'M(He-4) = 4.0026 u',
            'Step 1: Calculate mass defect',
            'Δm = M(parent) - [M(daughter) + M(alpha)]',
            'Δm = 209.9829 - (205.9745 + 4.0026)',
            'Δm = 209.9829 - 209.9771 = 0.0058 u',
            'Step 2: Convert to energy',
            'Q = Δm × c² = 0.0058 u × 931.494 MeV/u',
            'Q = 5.40 MeV',
            'Since Q > 0, decay is spontaneous'
        ],
        helper: 'Q-value is the energy released in the decay',
        solution: 'Q = 5.40 MeV',
        realWorldContext: 'Smoke detector alpha sources and radiotherapy'
    });

    // Problem 2: Beta Decay Types
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Beta-Minus Decay',
        problem: 'Calculate the Q-value for β⁻ decay of C-14 to N-14. M(C-14) = 14.003241 u, M(N-14) = 14.003074 u.',
        parameters: { 
            A: 14,
            Z: 6,
            parentMass: 14.003241,
            daughterMass: 14.003074,
            decayType: 'beta-minus'
        },
        type: 'beta_decay',
        context: { difficulty: 'intermediate', topic: 'Beta Decay Energy' },
        subparts: [
            'Given: ¹⁴₆C → ¹⁴₇N + e⁻ + ν̄ₑ',
            'M(C-14) = 14.003241 u',
            'M(N-14) = 14.003074 u',
            'Step 1: Calculate Q-value',
            'For β⁻ decay: Q = [M(parent) - M(daughter)] × c²',
            'Δm = 14.003241 - 14.003074 = 0.000167 u',
            'Q = 0.000167 × 931.494 MeV/u',
            'Q = 0.156 MeV = 156 keV',
            'Step 2: Maximum beta energy',
            'E_max ≈ Q = 156 keV',
            '(Exact value accounts for recoil and neutrino)',
            'Average beta energy ≈ Q/3 ≈ 52 keV'
        ],
        helper: 'In β⁻ decay, neutron converts to proton + electron + antineutrino',
        solution: 'Q = 156 keV, E_beta_max ≈ 156 keV',
        realWorldContext: 'Carbon-14 dating beta emissions'
    });

    // Problem 3: Gamma Ray Transition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Gamma Decay Energy',
        problem: 'A nucleus transitions from an excited state at 1.368 MeV to ground state (0 MeV). Calculate the gamma ray photon wavelength.',
        parameters: { 
            E_initial: 1.368,
            E_final: 0,
            A: 60
        },
        type: 'gamma_decay',
        context: { difficulty: 'beginner', topic: 'Gamma Ray Emission' },
        subparts: [
            'Given: E_initial = 1.368 MeV, E_final = 0 MeV',
            'Step 1: Calculate photon energy',
            'E_γ = E_initial - E_final = 1.368 MeV',
            'Step 2: Convert to Joules',
            'E_γ = 1.368 × 10⁶ eV × 1.602 × 10⁻¹⁹ J/eV',
            'E_γ = 2.191 × 10⁻¹³ J',
            'Step 3: Calculate wavelength',
            'λ = hc/E = (6.626 × 10⁻³⁴)(3 × 10⁸)/(2.191 × 10⁻¹³)',
            'λ = 9.07 × 10⁻¹³ m = 0.907 pm',
            'Step 4: Calculate frequency',
            'f = c/λ = 3.31 × 10²⁰ Hz'
        ],
        helper: 'Use E = hf = hc/λ for photon energy',
        solution: 'E_γ = 1.368 MeV, λ = 0.907 pm',
        realWorldContext: 'Medical gamma imaging (Tc-99m)'
    });

    // Problem 4: Nuclear Reaction Q-value
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nuclear Reaction Energy',
        problem: 'Calculate Q-value for: ¹⁴₇N + ⁴₂He → ¹⁷₈O + ¹₁H. Masses: N-14 = 14.003074 u, He-4 = 4.002603 u, O-17 = 16.999132 u, H-1 = 1.007825 u.',
        parameters: { 
            reactants: ['N-14', 'He-4'],
            products: ['O-17', 'H-1'],
            masses: {
                'N-14': 14.003074,
                'He-4': 4.002603,
                'O-17': 16.999132,
                'H-1': 1.007825
            }
        },
        type: 'nuclear_reaction',
        context: { difficulty: 'advanced', topic: 'Nuclear Reaction Energetics' },
        subparts: [
            'Given: ¹⁴N + ⁴He → ¹⁷O + ¹H',
            'Masses: N-14 = 14.003074 u, He-4 = 4.002603 u',
            '        O-17 = 16.999132 u, H-1 = 1.007825 u',
            'Step 1: Calculate initial mass',
            'M_initial = 14.003074 + 4.002603 = 18.005677 u',
            'Step 2: Calculate final mass',
            'M_final = 16.999132 + 1.007825 = 18.006957 u',
            'Step 3: Calculate Q-value',
            'Q = (M_initial - M_final) × c²',
            'Q = (18.005677 - 18.006957) × 931.494 MeV/u',
            'Q = -0.001280 × 931.494',
            'Q = -1.192 MeV',
            'Since Q < 0, reaction is endothermic (requires energy input)'
        ],
        helper: 'Q < 0 means endothermic; Q > 0 means exothermic',
        solution: 'Q = -1.192 MeV (endothermic)',
        realWorldContext: 'First artificial nuclear reaction (Rutherford, 1919)'
    });

    // Problem 5: Neutron Capture
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Neutron Activation',
        problem: 'Calculate energy released when Al-27 captures a neutron to form Al-28. M(Al-27) = 26.981539 u, M(n) = 1.008665 u, M(Al-28) = 27.981910 u.',
        parameters: { 
            reactants: ['Al-27', 'neutron'],
            products: ['Al-28'],
            masses: {
                'Al-27': 26.981539,
                'neutron': 1.008665,
                'Al-28': 27.981910
            }
        },
        type: 'nuclear_reaction',
        context: { difficulty: 'intermediate', topic: 'Neutron Capture Reactions' },
        subparts: [
            'Given: ²⁷Al + n → ²⁸Al + γ',
            'M(Al-27) = 26.981539 u',
            'M(n) = 1.008665 u',
            'M(Al-28) = 27.981910 u',
            'Step 1: Calculate mass defect',
            'Δm = (26.981539 + 1.008665) - 27.981910',
            'Δm = 27.990204 - 27.981910 = 0.008294 u',
            'Step 2: Calculate energy released',
            'Q = Δm × 931.494 MeV/u',
            'Q = 0.008294 × 931.494',
            'Q = 7.73 MeV',
            'This energy appears as gamma rays (binding energy of captured neutron)'
        ],
        helper: 'Neutron capture releases binding energy as gamma rays',
        solution: 'Q = 7.73 MeV',
        realWorldContext: 'Neutron activation analysis and isotope production'
    });

    // Problem 6: Threshold Energy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reaction Threshold',
        problem: 'For the endothermic reaction ¹²C + ¹H → ¹³N + γ with Q = -3.00 MeV, calculate the threshold kinetic energy for the proton.',
        parameters: { 
            Q: -3.00,
            projectile_mass: 1.007825,
            target_mass: 12.000000,
            product_masses: [13.005739]
        },
        type: 'nuclear_reaction',
        context: { difficulty: 'advanced', topic: 'Threshold Energy Calculation' },
        subparts: [
            'Given: ¹²C + ¹H → ¹³N, Q = -3.00 MeV',
            'Target at rest (lab frame)',
            'Step 1: Apply threshold energy formula',
            'E_th = -Q[1 + m_products/m_target + |Q|/(2m_target×c²)]',
            'Step 2: Identify masses',
            'm_target = 12 u × 931.494 MeV/u = 11,178 MeV/c²',
            'm_products ≈ 13 u × 931.494 = 12,109 MeV/c²',
            'Step 3: Calculate',
            'E_th = 3.00[1 + 12,109/11,178 + 3.00/(2 × 11,178)]',
            'E_th = 3.00[1 + 1.083 + 0.000134]',
            'E_th = 3.00 × 2.083',
            'E_th = 6.25 MeV',
            'Proton must have at least 6.25 MeV kinetic energy'
        ],
        helper: 'Threshold energy exceeds |Q| due to momentum conservation',
        solution: 'E_th = 6.25 MeV',
        realWorldContext: 'Particle accelerator beam energy requirements'
    });

    // Problem 7: Kinetic Energy Distribution
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alpha Particle Kinetic Energy',
        problem: 'In Po-210 alpha decay with Q = 5.40 MeV, calculate the kinetic energies of the alpha particle and recoiling Pb-206 nucleus.',
        parameters: { 
            A: 210,
            Z: 84,
            Qvalue: 5.40,
            M_parent: 210,
            M_daughter: 206,
            M_alpha: 4
        },
        type: 'alpha_decay',
        context: { difficulty: 'advanced', topic: 'Decay Kinematics' },
        subparts: [
            'Given: ²¹⁰Po → ²⁰⁶Pb + ⁴He, Q = 5.40 MeV',
            'Step 1: Apply momentum conservation',
            'p_alpha = p_Pb (equal and opposite)',
            'Step 2: Use KE = p²/(2m)',
            'KE_alpha/KE_Pb = m_Pb/m_alpha = 206/4 = 51.5',
            'Step 3: Energy conservation',
            'KE_alpha + KE_Pb = Q = 5.40 MeV',
            'KE_alpha + KE_alpha/51.5 = 5.40',
            'KE_alpha(1 + 1/51.5) = 5.40',
            'KE_alpha × 1.0194 = 5.40',
            'KE_alpha = 5.30 MeV',
            'Step 4: Calculate recoil energy',
            'KE_Pb = 5.40 - 5.30 = 0.10 MeV = 100 keV',
            'Verification: KE_Pb/KE_alpha = 0.10/5.30 = 1/53 ≈ 1/51.5 ✓'
        ],
        helper: 'Light particle carries most kinetic energy',
        solution: 'KE_alpha = 5.30 MeV, KE_Pb = 0.10 MeV',
        realWorldContext: 'Alpha spectroscopy for isotope identification'
    });

    return relatedProblems;
}

// ============== BINDING ENERGY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedBindingEnergyPhysics() {
    const relatedProblems = [];

    // Problem 1: Simple Binding Energy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Helium-4 Binding Energy',
        problem: 'Calculate the binding energy of He-4. M(He-4) = 4.002603 u, m_proton = 1.007276 u, m_neutron = 1.008665 u.',
        parameters: { 
            A: 4,
            Z: 2,
            atomicMass: 4.002603
        },
        type: 'binding_energy',
        context: { difficulty:
        'beginner', topic: 'Nuclear Binding Energy' },
        subparts: [
            'Given: He-4 has 2 protons, 2 neutrons',
            'M(He-4) = 4.002603 u',
            'm_p = 1.007276 u, m_n = 1.008665 u',
            'Step 1: Calculate mass of separated nucleons',
            'M_separated = 2(1.007276) + 2(1.008665)',
            'M_separated = 2.014552 + 2.017330 = 4.031882 u',
            'Step 2: Calculate mass defect',
            'Δm = M_separated - M_nucleus',
            'Δm = 4.031882 - 4.002603 = 0.029279 u',
            'Step 3: Convert to binding energy',
            'BE = Δm × 931.494 MeV/u',
            'BE = 0.029279 × 931.494 = 27.28 MeV',
            'Step 4: Binding energy per nucleon',
            'BE/A = 27.28/4 = 6.82 MeV/nucleon',
            'He-4 is exceptionally stable with high BE/A'
        ],
        helper: 'Mass defect converts to binding energy via E = mc²',
        solution: 'BE = 27.28 MeV, BE/A = 6.82 MeV/nucleon',
        realWorldContext: 'Alpha particle stability in nuclear reactions'
    });

    // Problem 2: Binding Energy Comparison
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Comparing Nuclear Stability',
        problem: 'Calculate BE/A for O-16: M(O-16) = 15.994915 u. Compare with He-4 (BE/A = 6.82 MeV/nucleon). Which is more stable?',
        parameters: { 
            A: 16,
            Z: 8,
            atomicMass: 15.994915
        },
        type: 'binding_energy',
        context: { difficulty: 'intermediate', topic: 'Nuclear Stability Comparison' },
        subparts: [
            'Given: O-16 has 8 protons, 8 neutrons',
            'M(O-16) = 15.994915 u',
            'Step 1: Calculate separated mass',
            'M_separated = 8(1.007276) + 8(1.008665)',
            'M_separated = 8.058208 + 8.069320 = 16.127528 u',
            'Step 2: Calculate mass defect',
            'Δm = 16.127528 - 15.994915 = 0.132613 u',
            'Step 3: Calculate binding energy',
            'BE = 0.132613 × 931.494 = 123.52 MeV',
            'Step 4: Calculate BE per nucleon',
            'BE/A = 123.52/16 = 7.72 MeV/nucleon',
            'Step 5: Compare with He-4',
            'O-16: BE/A = 7.72 MeV/nucleon',
            'He-4: BE/A = 6.82 MeV/nucleon',
            'O-16 is more tightly bound per nucleon',
            'Higher BE/A means greater stability'
        ],
        helper: 'Higher BE/A indicates more stable nucleus',
        solution: 'BE/A(O-16) = 7.72 MeV/nucleon, more stable than He-4',
        realWorldContext: 'Understanding nuclear stability trends'
    });

    // Problem 3: Iron-56 Peak Stability
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Maximum Stability at Fe-56',
        problem: 'Calculate BE/A for Fe-56: M(Fe-56) = 55.934937 u. Explain why this represents peak nuclear stability.',
        parameters: { 
            A: 56,
            Z: 26,
            atomicMass: 55.934937
        },
        type: 'binding_energy',
        context: { difficulty: 'intermediate', topic: 'Peak of Binding Energy Curve' },
        subparts: [
            'Given: Fe-56 has 26 protons, 30 neutrons',
            'M(Fe-56) = 55.934937 u',
            'Step 1: Calculate separated mass',
            'M_sep = 26(1.007276) + 30(1.008665)',
            'M_sep = 26.189176 + 30.259950 = 56.449126 u',
            'Step 2: Calculate mass defect',
            'Δm = 56.449126 - 55.934937 = 0.514189 u',
            'Step 3: Calculate BE',
            'BE = 0.514189 × 931.494 = 478.99 MeV',
            'Step 4: Calculate BE/A',
            'BE/A = 478.99/56 = 8.55 MeV/nucleon',
            'Step 5: Physical significance',
            'This is near the maximum BE/A (~8.8 MeV for Ni-62)',
            'Nuclei lighter than Fe can release energy through fusion',
            'Nuclei heavier than Fe can release energy through fission',
            'Fe-56 represents the end point of stellar nucleosynthesis'
        ],
        helper: 'Fe-56 is at the peak of the binding energy curve',
        solution: 'BE/A = 8.55 MeV/nucleon (near maximum stability)',
        realWorldContext: 'Stellar fusion stops at iron; supernova nucleosynthesis'
    });

    // Problem 4: Deuteron Binding Energy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Deuteron Formation',
        problem: 'Calculate the binding energy of deuterium (²H). M(²H) = 2.014102 u.',
        parameters: { 
            A: 2,
            Z: 1,
            atomicMass: 2.014102
        },
        type: 'binding_energy',
        context: { difficulty: 'beginner', topic: 'Simplest Bound Nuclear System' },
        subparts: [
            'Given: Deuteron (²H) has 1 proton, 1 neutron',
            'M(²H) = 2.014102 u',
            'Step 1: Calculate separated mass',
            'M_sep = m_p + m_n = 1.007276 + 1.008665',
            'M_sep = 2.015941 u',
            'Step 2: Calculate mass defect',
            'Δm = 2.015941 - 2.014102 = 0.001839 u',
            'Step 3: Calculate BE',
            'BE = 0.001839 × 931.494 = 1.71 MeV',
            'Step 4: Interpret result',
            'BE/A = 1.71/2 = 0.86 MeV/nucleon (very low)',
            'Deuteron is loosely bound',
            'Only one bound state exists for the p-n system',
            'This low BE explains deuteron fragility'
        ],
        helper: 'Deuteron has the lowest BE/A of any stable nucleus',
        solution: 'BE = 1.71 MeV (deuteron is weakly bound)',
        realWorldContext: 'D-T fusion fuel and heavy water moderators'
    });

    // Problem 5: SEMF Prediction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Semi-Empirical Mass Formula',
        problem: 'Use SEMF to estimate BE for C-12 (A=12, Z=6). Compare with experimental value of 92.16 MeV.',
        parameters: { 
            A: 12,
            Z: 6
        },
        type: 'nuclear_model',
        context: { difficulty: 'advanced', topic: 'Nuclear Models - SEMF' },
        subparts: [
            'Given: C-12, A = 12, Z = 6, N = 6',
            'SEMF: BE = a_v A - a_s A^(2/3) - a_c Z²/A^(1/3) - a_a(N-Z)²/A + δ',
            'Coefficients: a_v = 15.75, a_s = 17.8, a_c = 0.711, a_a = 23.7',
            'Step 1: Volume term',
            'E_v = 15.75 × 12 = 189.00 MeV',
            'Step 2: Surface term',
            'E_s = -17.8 × 12^(2/3) = -17.8 × 5.24 = -93.27 MeV',
            'Step 3: Coulomb term',
            'E_c = -0.711 × 36/12^(1/3) = -0.711 × 36/2.29 = -11.18 MeV',
            'Step 4: Asymmetry term',
            'E_a = -23.7 × (6-6)²/12 = 0 MeV (N = Z)',
            'Step 5: Pairing term',
            'Even-even nucleus: δ = +12/√12 = +3.46 MeV',
            'Step 6: Total BE',
            'BE = 189.00 - 93.27 - 11.18 + 0 + 3.46 = 88.01 MeV',
            'Experimental: 92.16 MeV',
            'Error: (92.16 - 88.01)/92.16 = 4.5% (typical SEMF accuracy)'
        ],
        helper: 'SEMF provides good estimates for medium-heavy nuclei',
        solution: 'BE(SEMF) = 88.01 MeV vs. 92.16 MeV experimental',
        realWorldContext: 'Predicting masses of unknown nuclei'
    });

    // Problem 6: Mass-Energy Equivalence
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mass Defect to Energy',
        problem: 'If a nucleus has a mass defect of 0.1 u, how much energy is this equivalent to in MeV and Joules?',
        parameters: { 
            mass_defect: 0.1
        },
        type: 'binding_energy',
        context: { difficulty: 'beginner', topic: 'Mass-Energy Equivalence' },
        subparts: [
            'Given: Δm = 0.1 u',
            'Step 1: Convert to MeV',
            'E = Δm × c² = 0.1 u × 931.494 MeV/u',
            'E = 93.1494 MeV',
            'Step 2: Convert to Joules',
            '1 MeV = 1.602 × 10⁻¹³ J',
            'E = 93.1494 × 1.602 × 10⁻¹³ J',
            'E = 1.492 × 10⁻¹¹ J',
            'Step 3: Alternative calculation',
            '1 u = 1.66054 × 10⁻²⁷ kg',
            'Δm = 0.1 × 1.66054 × 10⁻²⁷ = 1.66054 × 10⁻²⁸ kg',
            'E = mc² = 1.66054 × 10⁻²⁸ × (3 × 10⁸)²',
            'E = 1.494 × 10⁻¹¹ J ✓',
            'Conversion factor: 1 u = 931.494 MeV/c²'
        ],
        helper: 'Use standard conversion: 1 u = 931.494 MeV/c²',
        solution: 'E = 93.15 MeV = 1.49 × 10⁻¹¹ J',
        realWorldContext: 'Fundamental to all nuclear energy calculations'
    });

    // Problem 7: Binding Energy and Stability
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stability Valley',
        problem: 'Calculate BE/A for three isobars: ⁴⁰Ar (39.962383 u), ⁴⁰K (39.963998 u), ⁴⁰Ca (39.962591 u). Which is most stable?',
        parameters: { 
            nuclei: [
                { A: 40, Z: 18, mass: 39.962383, name: 'Ar-40' },
                { A: 40, Z: 19, mass: 39.963998, name: 'K-40' },
                { A: 40, Z: 20, mass: 39.962591, name: 'Ca-40' }
            ]
        },
        type: 'binding_energy',
        context: { difficulty: 'advanced', topic: 'Isobaric Stability' },
        subparts: [
            'Given: Three isobars with A = 40',
            'Ar-40: Z=18, N=22, M = 39.962383 u',
            'K-40:  Z=19, N=21, M = 39.963998 u',
            'Ca-40: Z=20, N=20, M = 39.962591 u',
            'For each, calculate BE/A:',
            'Ar-40:',
            'M_sep = 18(1.007276) + 22(1.008665) = 40.321600 u',
            'Δm = 40.321600 - 39.962383 = 0.359217 u',
            'BE = 334.55 MeV, BE/A = 8.36 MeV/nucleon',
            'K-40:',
            'M_sep = 19(1.007276) + 21(1.008665) = 40.320209 u',
            'Δm = 40.320209 - 39.963998 = 0.356211 u',
            'BE = 331.75 MeV, BE/A = 8.29 MeV/nucleon',
            'Ca-40:',
            'M_sep = 20(1.007276) + 20(1.008665) = 40.318820 u',
            'Δm = 40.318820 - 39.962591 = 0.356229 u',
            'BE = 331.77 MeV, BE/A = 8.29 MeV/nucleon',
            'Ranking: Ar-40 > Ca-40 ≈ K-40',
            'But Ca-40 is even-even (more stable structurally)',
            'K-40 is odd-odd (least stable, radioactive)'
        ],
        helper: 'Even-even nuclei generally more stable than odd-odd',
        solution: 'Ca-40 most stable (even-even, high BE/A)',
        realWorldContext: 'K-40 radioactivity used in geochronology'
    });

    return relatedProblems;
}

// ============== FISSION AND FUSION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedFissionFusionPhysics() {
    const relatedProblems = [];

    // Problem 1: Simple Fission Energy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'U-235 Fission Energy',
        problem: 'A typical U-235 fission releases 200 MeV. How many fissions per second are needed to produce 1 MW of thermal power?',
        parameters: { 
            energyPerFission: 200,
            power_MW: 1
        },
        type: 'fission',
        context: { difficulty: 'beginner', topic: 'Fission Power Calculation' },
        subparts: [
            'Given: E per fission = 200 MeV, P = 1 MW',
            'Step 1: Convert power to energy per second',
            'P = 1 MW = 1 × 10⁶ W = 1 × 10⁶ J/s',
            'Step 2: Convert fission energy to Joules',
            'E = 200 MeV × 1.602 × 10⁻¹³ J/MeV',
            'E = 3.204 × 10⁻¹¹ J per fission',
            'Step 3: Calculate fission rate',
            'Rate = P/E = (1 × 10⁶ J/s)/(3.204 × 10⁻¹¹ J)',
            'Rate = 3.12 × 10¹⁶ fissions/second',
            'Step 4: Scale understanding',
            'This is about 31 trillion trillion fissions per second',
            'Yet represents only ~1 microgram of U-235 consumed per second'
        ],
        helper: 'Use conversion: 1 fission/s = 3.2 × 10⁻¹¹ W',
        solution: 'Rate = 3.12 × 10¹⁶ fissions/s',
        realWorldContext: 'Nuclear reactor power generation'
    });

    // Problem 2: Fuel Consumption
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Reactor Fuel Consumption',
        problem: 'A 1000 MW nuclear reactor operates at 33% efficiency. How much U-235 is consumed per day? (200 MeV per fission)',
        parameters: { 
            power_MW: 1000,
            efficiency: 0.33,
            energyPerFission: 200
        },
        type: 'fission',
        context: { difficulty: 'intermediate', topic: 'Nuclear Fuel Consumption' },
        subparts: [
            'Given: P_electric = 1000 MW, η = 33%, E_fission = 200 MeV',
            'Step 1: Calculate thermal power',
            'P_thermal = P_electric/η = 1000/0.33 = 3030 MW',
            'Step 2: Energy per day',
            'E_day = 3030 × 10⁶ W × 86400 s',
            'E_day = 2.618 × 10¹⁴ J/day',
            'Step 3: Fissions per day',
            'E_fission = 200 MeV = 3.204 × 10⁻¹¹ J',
            'N_fissions = 2.618 × 10¹⁴ / 3.204 × 10⁻¹¹',
            'N_fissions = 8.17 × 10²⁴ fissions/day',
            'Step 4: Mass of U-235',
            'Avogadro: 6.022 × 10²³ atoms/mol',
            'Moles = 8.17 × 10²⁴ / 6.022 × 10²³ = 13.56 mol',
            'Mass = 13.56 mol × 235 g/mol = 3186 g',
            'Mass ≈ 3.2 kg U-235 per day',
            'For comparison: equivalent to ~10,000 tonnes of coal'
        ],
        helper: 'Nuclear fuel is incredibly energy-dense',
        solution: 'Mass consumed = 3.2 kg U-235/day',
        realWorldContext: 'Commercial nuclear reactor fuel requirements'
    });

    // Problem 3: Chain Reaction Criticality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Critical Mass Concept',
        problem: 'A reactor has k_eff = 1.0050. If the neutron generation time is 0.0001 s, estimate the power doubling time.',
        parameters: { 
            k_eff: 1.0050,
            generation_time: 0.0001
        },
        type: 'reactor_physics',
        context: { difficulty: 'advanced', topic: 'Reactor Kinetics' },
        subparts: [
            'Given: k_eff = 1.0050 (slightly supercritical)',
            'Generation time τ = 0.0001 s',
            'Step 1: Calculate reactivity',
            'ρ = (k_eff - 1)/k_eff',
            'ρ = (1.0050 - 1)/1.0050 = 0.00498 ≈ 0.5%',
            'Step 2: Estimate reactor period',
            'T ≈ τ/ρ = 0.0001/0.00498',
            'T ≈ 0.0201 s (reactor period)',
            'Step 3: Calculate doubling time',
            't_double = T × ln(2) = 0.0201 × 0.693',
            't_double ≈ 0.0139 s ≈ 14 milliseconds',
            'Step 4: Safety implications',
            'Power doubles every 14 ms - extremely fast!',
            'This demonstrates need for control rods',
            'Delayed neutrons slow actual response to ~seconds',
            'Prompt criticality (k > 1 on prompt neutrons alone) is dangerous'
        ],
        helper: 'Small excess reactivity can lead to rapid power changes',
        solution: 'Doubling time ≈ 14 ms (without delayed neutrons)',
        realWorldContext: 'Nuclear reactor control and safety systems'
    });

    // Problem 4: D-T Fusion Energy
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Deuterium-Tritium Fusion',
        problem: 'Calculate energy per fusion for: ²H + ³H → ⁴He + n. Given: M(²H) = 2.014102 u, M(³H) = 3.016049 u, M(⁴He) = 4.002603 u, M(n) = 1.008665 u.',
        parameters: { 
            reactionType: 'D-T',
            masses: {
                'D': 2.014102,
                'T': 3.016049,
                'He-4': 4.002603,
                'n': 1.008665
            }
        },
        type: 'fusion',
        context: { difficulty: 'beginner', topic: 'Fusion Energy Release' },
        subparts: [
            'Given: ²H + ³H → ⁴He + n',
            'M(²H) = 2.014102 u, M(³H) = 3.016049 u',
            'M(⁴He) = 4.002603 u, M(n) = 1.008665 u',
            'Step 1: Calculate initial mass',
            'M_initial = 2.014102 + 3.016049 = 5.030151 u',
            'Step 2: Calculate final mass',
            'M_final = 4.002603 + 1.008665 = 5.011268 u',
            'Step 3: Calculate mass defect',
            'Δm = 5.030151 - 5.011268 = 0.018883 u',
            'Step 4: Calculate Q-value',
            'Q = Δm × 931.494 MeV/u',
            'Q = 0.018883 × 931.494 = 17.59 MeV',
            'Step 5: Energy distribution',
            'Neutron: ~14.1 MeV (80% of energy)',
            'Alpha particle: ~3.5 MeV (20% of energy)',
            'Energy partitioned by momentum conservation'
        ],
        helper: 'D-T fusion is most favorable fusion reaction',
        solution: 'Q = 17.59 MeV per fusion',
        realWorldContext: 'ITER and fusion reactor research'
    });

    // Problem 5: Lawson Criterion
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Fusion Ignition Condition',
        problem: 'For D-T fusion, check Lawson criterion: n = 2 × 10²⁰ m⁻³, τ_E = 0.5 s, T = 100 million K. Is ignition achieved?',
        parameters: { 
            reactionType: 'D-T',
            density: 2e20,
            confinementTime: 0.5,
            temperature: 1e8
        },
        type: 'fusion',
        context: { difficulty: 'advanced', topic: 'Fusion Ignition Criteria' },
        subparts: [
            'Given: n = 2 × 10²⁰ m⁻³, τ_E = 0.5 s, T = 10⁸ K',
            'D-T Lawson criterion: nτ_E ≥ 10²⁰ s⋅m⁻³',
            'Step 1: Calculate triple product',
            'nτ_E = (2 × 10²⁰) × 0.5 = 1 × 10²⁰ s⋅m⁻³',
            'Step 2: Compare to criterion',
            'nτ_E = 1 × 10²⁰ s⋅m⁻³',
            'Required: nτ_E ≥ 1 × 10²⁰ s⋅m⁻³',
            'Criterion is barely met',
            'Step 3: Check temperature',
            'T = 10⁸ K ≈ 8.6 keV (kT ≈ 8.6 keV)',
            'Optimal D-T fusion: T ≈ 10-20 keV',
            'Temperature is sufficient',
            'Step 4: Full triple product',
            'nτ_E T = 1 × 10²⁰ × 10⁸ = 10²⁸ K⋅s⋅m⁻³',
            'Required: ~3 × 10²¹ K⋅s⋅m⁻³ for ignition',
            'Actually need nτ_E ≈ 3 × 10²⁰ at this T',
            'Conclusion: Close but not quite ignition'
        ],
        helper: 'Lawson criterion ensures fusion power exceeds losses',
        solution: 'nτ_E = 1 × 10²⁰ (marginally meets criterion)',
        realWorldContext: 'Plasma confinement in tokamaks and ICF'
    });

    // Problem 6: Coulomb Barrier
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fusion Coulomb Barrier',
        problem: 'Estimate the Coulomb barrier height for D-D fusion. Nuclear radius ~2 fm, both nuclei have Z = 1.',
        parameters: { 
            Z1: 1,
            Z2: 1,
            separation: 2e-15
        },
        type: 'fusion',
        context: { difficulty: 'intermediate', topic: 'Coulomb Barrier in Fusion' },
        subparts: [
            'Given: D + D fusion, Z₁ = Z₂ = 1, r ≈ 2 fm',
            'Step 1: Calculate Coulomb potential',
            'V_C = (Z₁Z₂e²)/(4πε₀r)',
            'V_C = (1 × 1 × (1.602 × 10⁻¹⁹)²)/(4π × 8.854 × 10⁻¹² × 2 × 10⁻¹⁵)',
            'Step 2: Simplify calculation',
            'Use: k = 1/(4πε₀) = 8.988 × 10⁹ N⋅m²/C²',
            'V_C = ke²/r = (8.988 × 10⁹)(1.602 × 10⁻¹⁹)²/(2 × 10⁻¹⁵)',
            'V_C = 1.152 × 10⁻¹³ J',
            'Step 3: Convert to eV',
            'V_C = 1.152 × 10⁻¹³ / 1.602 × 10⁻¹⁹',
            'V_C = 720 keV ≈ 0.72 MeV',
            'Step 4: Physical interpretation',
            'Classical barrier: ~720 keV',
            'Quantum tunneling allows fusion at kT ~ 10 keV',
            'Tunneling probability ∝ exp(-E_G/kT)',
            'Gamow energy E_G ≈ 500 keV for D-D'
        ],
        helper: 'Quantum tunneling allows fusion below classical barrier',
        solution: 'Coulomb barrier ≈ 720 keV',
        realWorldContext: 'Understanding fusion temperature requirements'
    });

    // Problem 7: Fusion vs Fission Energy Density
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Energy Density Comparison',
        problem: 'Compare energy per nucleon: U-235 fission (200 MeV) vs. D-T fusion (17.6 MeV). Which releases more energy per unit mass?',
        parameters: { 
            fission_energy: 200,
            fission_nucleons: 235,
            fusion_energy: 17.6,
            fusion_nucleons: 5
        },
        type: 'fission',
        context: { difficulty: 'advanced', topic: 'Energy Density Comparison' },
        subparts: [
            'Given: U-235 fission: 200 MeV, A = 235',
            '       D-T fusion: 17.6 MeV, A = 5 total',
            'Step 1: Energy per nucleon (fission)',
            'E/A (fission) = 200 MeV / 235 nucleons',
            'E/A (fission) = 0.85 MeV/nucleon',
            'Step 2: Energy per nucleon (fusion)',
            'E/A (fusion) = 17.6 MeV / 5 nucleons',
            'E/A (fusion) = 3.52 MeV/nucleon',
            'Step 3: Comparison',
            'Fusion: 3.52 MeV/nucleon',
            'Fission: 0.85 MeV/nucleon',
            'Ratio: 3.52/0.85 = 4.1',
            'Fusion releases ~4 times more energy per nucleon',
            'Step 4: Practical considerations',
            'Fusion fuel (deuterium) abundant in seawater',
            'Fission: proven technology, established infrastructure',
            'Fusion: still under development, challenging confinement',
            'Both far exceed chemical energy (~few eV per atom)'
        ],
        helper: 'Fusion has higher energy density but is harder to achieve',
        solution: 'Fusion: 3.52 MeV/nucleon vs Fission: 0.85 MeV/nucleon',
        realWorldContext: 'Future energy sources and fuel availability'
    });

    return relatedProblems;
}

// ============== RADIATION DETECTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadiationDetectionPhysics() {
    const relatedProblems = [];

    // Problem 1: Simple Dose Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Absorbed Dose Calculation',
        problem: 'A person absorbs 0.005 J of radiation energy. If their mass is 70 kg, calculate the absorbed dose in Gray.',
        parameters: { 
            energy: 0.005,
            mass: 70
        },
        type: 'dosimetry',
        context: { difficulty: 'beginner', topic: 'Absorbed Dose' },
        subparts: [
            'Given: E = 0.005 J, m = 70 kg',
            'Step 1: Define absorbed dose',
            'Absorbed dose D = Energy deposited / Mass',
            'D = E/m (units: Gray = J/kg)',
            'Step 2: Calculate',
            'D = 0.005 J / 70 kg',
            'D = 7.14 × 10⁻⁵ Gy',
            'D = 0.0714 mGy',
            'Step 3: Convert to older unit (rad)',
            '1 Gy = 100 rad',
            'D = 0.0714 mGy × 100 rad/Gy',
            'D = 7.14 mrad',
            'Step 4: Context',
            'Natural background: ~2-3 mGy/year',
            'This dose: ~2% of annual background',
            'Considered negligible'
        ],
        helper: 'Absorbed dose measures energy deposited per unit mass',
        solution: 'D = 0.0714 mGy or 7.14 mrad',
        realWorldContext: 'Radiation exposure from medical X-rays'
    });

    // Problem 2: Equivalent Dose
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equivalent Dose with Weighting',
        problem: 'A worker receives 0.02 Gy of neutron radiation (w_R = 5). Calculate the equivalent dose in Sieverts.',
        parameters: { 
            energy: 1.4,
            mass: 70,
            radiationType: 'neutron',
            tissueType: 'whole-body'
        },
        type: 'dosimetry',
        context: { difficulty: 'intermediate', topic: 'Equivalent Dose' },
        subparts: [
            'Given: D = 0.02 Gy (neutron), w_R = 5',
            'Step 1: Define equivalent dose',
            'H = D × w_R (units: Sievert)',
            'w_R accounts for biological effectiveness',
            'Step 2: Calculate',
            'H = 0.02 Gy × 5',
            'H = 0.10 Sv = 100 mSv',
            'Step 3: Convert to rem (old unit)',
            '1 Sv = 100 rem',
            'H = 100 mSv = 10 rem',
            'Step 4: Compare to limits',
            'Public annual limit: 1 mSv',
            'Occupational annual limit: 50 mSv',
            'This dose: 100 mSv (exceeds both limits)',
            'Medical attention recommended',
            'Step 5: Why weighting?',
            'Neutrons cause ~5× more biological damage per Gy',
            'Due to high LET (Linear Energy Transfer)'
        ],
        helper: 'Equivalent dose accounts for radiation type effectiveness',
        solution: 'H = 100 mSv (exceeds occupational limit)',
        realWorldContext: 'Nuclear facility worker safety monitoring'
    });

    // Problem 3: Effective Dose
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Effective Dose Calculation',
        problem: 'Calculate effective dose: 50 mGy gamma to lungs (w_R = 1, w_T = 0.12), 30 mGy gamma to bone marrow (w_T = 0.12).',
        parameters: { 
            exposures: [
                { dose: 0.05, radiationType: 'gamma', tissue: 'lung' },
                { dose: 0.03, radiationType: 'gamma', tissue: 'bone-marrow' }
            ]
        },
        type: 'dosimetry',
        context: { difficulty: 'advanced', topic: 'Effective Dose' },
        subparts: [
            'Given: Lungs: D = 50 mGy, w_R = 1, w_T = 0.12',
            '       Bone marrow: D = 30 mGy, w_R = 1, w_T = 0.12',
            'Step 1: Calculate equivalent doses',
            'H_lungs = 50 × 1 = 50 mSv',
            'H_marrow = 30 × 1 = 30 mSv',
            'Step 2: Apply tissue weighting',
            'E_lungs = H_lungs × w_T = 50 × 0.12 = 6.0 mSv',
            'E_marrow = H_marrow × w_T = 30 × 0.12 = 3.6 mSv',
            'Step 3: Calculate total effective dose',
            'E_total = E_lungs + E_marrow',
            'E_total = 6.0 + 3.6 = 9.6 mSv',
            'Step 4: Interpret result',
            'Public limit: 1 mSv/year',
            'This dose: 9.6 mSv (about 10× public limit)',
            'Occupational limit: 50 mSv/year (within limit)',
            'Step 5: Tissue weighting significance',
            'Lungs and bone marrow: w_T = 0.12 (high sensitivity)',
            'Compared to skin: w_T = 0.01 (low sensitivity)',
            'Reflects cancer risk and organ sensitivity'
        ],
        helper: 'Effective dose accounts for both radiation type and tissue sensitivity',
        solution: 'E = 9.6 mSv',
        realWorldContext: 'Medical radiation therapy planning and protection'
    });

    // Problem 4: Activity and Dose Rate
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Dose Rate from Point Source',
        problem: 'A 5 GBq Cs-137 source (γ constant = 0.3 mSv⋅m²/GBq⋅h) is 2 meters away. Calculate dose rate.',
        parameters: { 
            activity: 5e9,
            distance: 2,
            gamma_constant: 0.3
        },
        type: 'dosimetry',
        context: { difficulty: 'intermediate', topic: 'External Dose Rate' },
        subparts: [
            'Given: A = 5 GBq, d = 2 m, Γ = 0.3 mSv⋅m²/GBq⋅h',
            'Step 1: Apply dose rate formula',
            'Ḋ = (A × Γ) / d²',
            'Ḋ = (5 GBq × 0.3 mSv⋅m²/GBq⋅h) / (2 m)²',
            'Ḋ = 1.5 / 4 = 0.375 mSv/h',
            'Step 2: Calculate daily exposure',
            'D_day = 0.375 mSv/h × 24 h = 9.0 mSv/day',
            'Step 3: Time to reach limit',
            'Public annual limit: 1 mSv',
            't = 1 mSv / 0.375 mSv/h = 2.67 hours',
            'Occupational limit: 50 mSv',
            't = 50 / 0.375 = 133 hours',
            'Step 4: Inverse square law',
            'At 4 m: Ḋ = 0.375/4 = 0.094 mSv/h',
            'At 1 m: Ḋ = 0.375 × 4 = 1.5 mSv/h',
            'Doubling distance reduces dose rate by factor of 4',
            'Step 5: ALARA principle',
            'Time: minimize exposure time',
            'Distance: maximize distance from source',
            'Shielding: use appropriate barriers'
        ],
        helper: 'Dose rate decreases with square of distance',
        solution: 'Ḋ = 0.375 mSv/h at 2 meters',
        realWorldContext: 'Radiation safety around sealed sources'
    });

    // Problem 5: Cross Section and Reaction Rate
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Neutron Activation',
        problem: 'Calculate reaction rate: neutron flux = 10¹³ n/cm²⋅s, target density = 5 × 10²² nuclei/cm³, σ = 4 barns.',
        parameters: { 
            crossSection: 4,
            neutronFlux: 1e13,
            targetDensity: 5e22
        },
        type: 'cross_section',
        context: { difficulty: 'advanced', topic: 'Reaction Rate Calculation' },
        subparts: [
            'Given: Φ = 10¹³ n/cm²⋅s, N = 5 × 10²² nuclei/cm³, σ = 4 barns',
            'Step 1: Convert cross section to cm²',
            '1 barn = 10⁻²⁴ cm²',
            'σ = 4 × 10⁻²⁴ cm²',
            'Step 2: Apply reaction rate formula',
            'R = Φ × N × σ',
            'R = (10¹³) × (5 × 10²²) × (4 × 10⁻²⁴)',
            'R = 2 × 10¹² reactions/cm³⋅s',
            'Step 3: Calculate mean free path',
            'λ = 1/(N × σ)',
            'λ = 1/[(5 × 10²²)(4 × 10⁻²⁴)]',
            'λ = 1/(2 × 10⁻¹) = 5 cm',
            'Neutrons travel average 5 cm before interaction',
            'Step 4: Macroscopic cross section',
            'Σ = N × σ = (5 × 10²²)(4 × 10⁻²⁴)',
            'Σ = 0.2 cm⁻¹',
            'Step 5: Practical application',
            'High reaction rate good for isotope production',
            'For 1 cm³ sample: 2 × 10¹² activations/s',
            'Activity builds up over time: A(t) = R(1 - e⁻λt)'
        ],
        helper: 'Reaction rate = flux × density × cross section',
        solution: 'R = 2 × 10¹² reactions/cm³⋅s',
        realWorldContext: 'Neutron activation analysis and isotope production'
    });

    // Problem 6: Detector Efficiency
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Detector Counting Efficiency',
        problem: 'A detector registers 800 counts/s from a 1 kBq source. Calculate detector efficiency and explain factors affecting it.',
        parameters: { 
            count_rate: 800,
            source_activity: 1000
        },
        type: 'cross_section',
        context: { difficulty: 'intermediate', topic: 'Radiation Detection Efficiency' },
        subparts: [
            'Given: Count rate = 800 cps, Activity = 1000 Bq',
            'Step 1: Define efficiency',
            'ε = (Counts detected) / (Emissions from source)',
            'ε = 800 / 1000 = 0.80 = 80%',
            'Step 2: Components of efficiency',
            'Geometric efficiency: solid angle coverage',
            'Intrinsic efficiency: detection probability',
            'Total efficiency: ε = ε_geom × ε_intrinsic',
            'Step 3: Factors affecting efficiency',
            'Source-detector distance (inverse square)',
            'Detector size and type',
            'Radiation energy',
            'Shielding and absorption',
            'Dead time at high count rates',
            'Step 4: Typical efficiencies',
            'Geiger counter: ~1-10% for gamma',
            'NaI scintillator: ~50% for gamma at optimal energy',
            'HPGe detector: ~20-30% (better resolution)',
            'Proportional counter: ~90% for alpha/beta',
            'Step 5: Improving efficiency',
            'Decrease source-detector distance',
            'Use larger detector',
            'Optimize for specific energy',
            'Minimize dead time'
        ],
        helper: 'Efficiency = detected counts / actual emissions',
        solution: 'ε = 80% (unusually high; check geometry)',
        realWorldContext: 'Calibrating radiation detection systems'
    });

    // Problem 7: Shielding Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gamma Ray Attenuation',
        problem: 'Cs-137 gamma rays (662 keV) pass through 5 cm of lead. If μ = 1.2 cm⁻¹, calculate transmission fraction.',
        parameters: { 
            thickness: 5,
            attenuation_coefficient: 1.2
        },
        type: 'cross_section',
        context: { difficulty: 'advanced', topic: 'Radiation Shielding' },
        subparts: [
            'Given: x = 5 cm lead, μ = 1.2 cm⁻¹, E_γ = 662 keV',
            'Step 1: Apply Beer-Lambert law',
            'I = I₀ × e⁻μx',
            'I/I₀ = e⁻μx',
            'Step 2: Calculate',
            'I/I₀ = e⁻(1.2)(5)',
            'I/I₀ = e⁻⁶·⁰',
            'I/I₀ = 0.00248 = 0.248%',
            'Step 3: Reduction factor',
            'Reduction = 1 / 0.00248 = 403',
            'Intensity reduced by factor of ~400',
            'Step 4: Half-Value Layer (HVL)',
            'HVL = ln(2)/μ = 0.693/1.2 = 0.58 cm',
            'Number of HVLs = 5/0.58 = 8.6 HVLs',
            '(1/2)^8.6 = 0.0026 ≈ 0.248% ✓',
            'Step 5: Practical shielding',
            'Lead effective for gamma rays',
            'Thickness required depends on:',
            '  - Gamma energy',
            '  - Desired attenuation',
            '  - Source strength',
            'For Cs-137: ~6 cm lead reduces to 0.1%',
            'Step 6: Alternative materials',
            'Concrete: HVL ~ 6 cm (need more thickness)',
            'Steel: HVL ~ 2 cm',
            'Water: HVL ~ 20 cm (good for neutrons too)'
        ],
        helper: 'Exponential attenuation: I = I₀ e⁻μx',
        solution: 'Transmission = 0.248% (99.75% blocked)',
        realWorldContext: 'Designing radiation shielding for facilities'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveRadioactiveDecayRelatedProblems() {
    const problems = generateRelatedRadioactiveDecayPhysics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radioactive Decay Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNuclearPhysicsMathematicalWorkbook({
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

        workbook.solveNuclearProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveNuclearReactionsRelatedProblems() {
    const problems = generateRelatedNuclearReactionsPhysics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Nuclear Reactions Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNuclearPhysicsMathematicalWorkbook({
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

        workbook.solveNuclearProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveBindingEnergyRelatedProblems() {
    const problems = generateRelatedBindingEnergyPhysics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Binding Energy Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNuclearPhysicsMathematicalWorkbook({
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

        workbook.solveNuclearProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveFissionFusionRelatedProblems() {
    const problems = generateRelatedFissionFusionPhysics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Fission/Fusion Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNuclearPhysicsMathematicalWorkbook({
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

        workbook.solveNuclearProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveRadiationDetectionRelatedProblems() {
    const problems = generateRelatedRadiationDetectionPhysics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radiation Detection Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNuclearPhysicsMathematicalWorkbook({
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

        workbook.solveNuclearProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
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

async function generateComprehensiveNuclearPhysicsDocument() {
    console.log('Generating Comprehensive Nuclear Physics Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Nuclear Physics Workbook',
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
            text: 'Radioactive Decay, Nuclear Reactions, Binding Energy, Fission/Fusion, and Radiation Detection',
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

    // Part I: Radioactive Decay
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Radioactive Decay Physics (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const decayProblems = generateRelatedRadioactiveDecayPhysics();
    decayProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Nuclear Reactions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Nuclear Reactions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const reactionProblems = generateRelatedNuclearReactionsPhysics();
    reactionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Binding Energy
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Nuclear Binding Energy (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bindingProblems = generateRelatedBindingEnergyPhysics();
    bindingProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Fission and Fusion
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Nuclear Fission and Fusion (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const fissionFusionProblems = generateRelatedFissionFusionPhysics();
    fissionFusionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Radiation Detection
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Radiation Detection and Dosimetry (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const detectionProblems = generateRelatedRadiationDetectionPhysics();
    detectionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: RADIOACTIVE DECAY ==============
    console.log('\nProcessing Part I: Radioactive Decay Physics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Radioactive Decay Physics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const decaySolved = solveRadioactiveDecayRelatedProblems();
    decaySolved.forEach((solved, index) => {
        console.log(`  Adding Radioactive Decay Problem ${index + 1} to document...`);

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

    // ============== PART II: NUCLEAR REACTIONS ==============
    console.log('\nProcessing Part II: Nuclear Reactions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Nuclear Reactions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const reactionsSolved = solveNuclearReactionsRelatedProblems();
    reactionsSolved.forEach((solved, index) => {
        console.log(`  Adding Nuclear Reactions Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 8}: ${solved.problem.scenario}`,
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

    // ============== PART III: BINDING ENERGY ==============
    console.log('\nProcessing Part III: Nuclear Binding Energy...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Nuclear Binding Energy',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bindingSolved = solveBindingEnergyRelatedProblems();
    bindingSolved.forEach((solved, index) => {
        console.log(`  Adding Binding Energy Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 15}: ${solved.problem.scenario}`,
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

    // ============== PART IV: FISSION AND FUSION ==============
    console.log('\nProcessing Part IV: Nuclear Fission and Fusion...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Nuclear Fission and Fusion',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const fissionFusionSolved = solveFissionFusionRelatedProblems();
    fissionFusionSolved.forEach((solved, index) => {
        console.log(`  Adding Fission/Fusion Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 22}: ${solved.problem.scenario}`,
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

    // ============== PART V: RADIATION DETECTION ==============
    console.log('\nProcessing Part V: Radiation Detection and Dosimetry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Radiation Detection and Dosimetry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const detectionSolved = solveRadiationDetectionRelatedProblems();
    detectionSolved.forEach((solved, index) => {
        console.log(`  Adding Radiation Detection Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 29}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_nuclear_physics_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE NUCLEAR PHYSICS DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 35');
        console.log('    - Radioactive Decay: 7 problems');
        console.log('    - Nuclear Reactions: 7 problems');
        console.log('    - Binding Energy: 7 problems');
        console.log('    - Fission and Fusion: 7 problems');
        console.log('    - Radiation Detection: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Radioactive Decay Physics (Problems 1-7)');
        console.log('    - Half-life calculations');
        console.log('    - Activity and decay constants');
        console.log('    - Decay chains and equilibrium');
        console.log('    - Radiometric dating');
        console.log('  • Part II: Nuclear Reactions (Problems 8-14)');
        console.log('    - Alpha, beta, and gamma decay');
        console.log('    - Q-value calculations');
        console.log('    - Reaction energetics');
        console.log('    - Threshold energy');
        console.log('  • Part III: Nuclear Binding Energy (Problems 15-21)');
        console.log('    - Mass defect calculations');
        console.log('    - Binding energy per nucleon');
        console.log('    - Nuclear stability analysis');
        console.log('    - Semi-empirical mass formula');
        console.log('  • Part IV: Nuclear Fission and Fusion (Problems 22-28)');
        console.log('    - Fission energy and power');
        console.log('    - Chain reactions and criticality');
        console.log('    - Fusion reactions and Q-values');
        console.log('    - Lawson criterion and Coulomb barrier');
        console.log('  • Part V: Radiation Detection (Problems 29-35)');
        console.log('    - Absorbed dose and equivalent dose');
        console.log('    - Effective dose calculations');
        console.log('    - Cross sections and reaction rates');
        console.log('    - Shielding and attenuation');
        console.log('\n📄 EXPECTED PAGES: 150+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution with nuclear physics principles');
        console.log('  • Enhanced explanations covering:');
        console.log('    - Physical interpretation of results');
        console.log('    - Conservation law verification');
        console.log('    - Unit consistency checks');
        console.log('    - Safety considerations (where applicable)');
        console.log('  • Key concepts and pedagogical notes');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Historical context and physics laws');
        console.log('\n🔬 NUCLEAR PHYSICS TOPICS COVERED:');
        console.log('  • Exponential decay and activity');
        console.log('  • Alpha, beta, and gamma emission');
        console.log('  • Mass-energy equivalence (E = mc²)');
        console.log('  • Nuclear binding energy and stability');
        console.log('  • Q-values and reaction energetics');
        console.log('  • Fission chain reactions and power generation');
        console.log('  • Fusion conditions and Lawson criterion');
        console.log('  • Radiation dosimetry (Gray, Sievert)');
        console.log('  • Cross sections and interaction rates');
        console.log('  • Shielding and radiation protection');
        console.log('\n📚 EDUCATIONAL FEATURES:');
        console.log('  • Progressive difficulty (easier → similar → harder)');
        console.log('  • Conceptual, procedural, physical, and mathematical explanations');
        console.log('  • Error prevention with common mistake warnings');
        console.log('  • Scaffolded learning with guiding questions');
        console.log('  • Connection to real-world applications');
        console.log('  • Historical context for major discoveries');
        console.log('  • Safety considerations for radiation work');
        console.log('  • Complete verification of solutions');
        console.log('\n🎯 IDEAL FOR:');
        console.log('  • University nuclear physics courses');
        console.log('  • Medical physics and health physics students');
        console.log('  • Nuclear engineering programs');
        console.log('  • Radiation safety officer training');
        console.log('  • Self-study and exam preparation');
        console.log('  • Reference for working professionals');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveNuclearPhysicsDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
