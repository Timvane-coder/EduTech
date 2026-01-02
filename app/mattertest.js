import { EnhancedMatterParticleTheoryWorkbook } from './matterparticles.js';
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

// ============== STATES OF MATTER - RELATED PROBLEMS GENERATOR ==============

function generateRelatedStatesOfMatter() {
    const relatedProblems = [];

    // Problem 1: Basic State Identification
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'State Identification at Room Temperature',
        problem: 'Identify the state of matter for water at 25°C and 1 atm pressure',
        parameters: { substance: 'water', T: 25, P: 1, T_melt: 0, T_boil: 100 },
        type: 'state_identification',
        context: { difficulty: 'beginner', topic: 'States of Matter', temperatureUnit: 'C' },
        subparts: [
            'Given: Water at T = 25°C and P = 1 atm',
            'Known: Water melts at 0°C, boils at 100°C (at 1 atm)',
            'Analysis: T_melt < T < T_boil',
            '0°C < 25°C < 100°C',
            'Conclusion: Water is in liquid state',
            'Physical properties: Definite volume, takes shape of container',
            'Molecular behavior: Particles can slide past each other'
        ],
        helper: 'Compare temperature to melting and boiling points',
        solution: 'Liquid state',
        realWorldContext: 'Understanding everyday states of common substances'
    });

    // Problem 2: Temperature Conversion and State
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'State at Different Temperature Scales',
        problem: 'What is the state of oxygen at 100 K? (O₂ melts at 54.8 K, boils at 90.2 K)',
        parameters: { substance: 'oxygen', T: 100, T_melt: 54.8, T_boil: 90.2 },
        type: 'state_identification',
        context: { difficulty: 'beginner', topic: 'States of Matter', temperatureUnit: 'K' },
        subparts: [
            'Given: Oxygen at T = 100 K',
            'Known: O₂ melts at 54.8 K, boils at 90.2 K',
            'Analysis: Compare temperature to phase transition points',
            'T > T_boil: 100 K > 90.2 K',
            'Conclusion: Oxygen is in gas state',
            'Note: Already above boiling point',
            'Molecular behavior: Particles move freely, far apart'
        ],
        helper: 'Temperature above boiling point means gas',
        solution: 'Gas state',
        realWorldContext: 'Understanding cryogenic conditions'
    });

    // Problem 3: Particle Arrangement Comparison
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Particle Arrangement in Different States',
        problem: 'Compare particle arrangement in solid ice, liquid water, and water vapor',
        parameters: { substance: 'water', states: ['solid', 'liquid', 'gas'] },
        type: 'particle_comparison',
        context: { difficulty: 'beginner', topic: 'Particle Theory' },
        subparts: [
            'Solid Ice:',
            '  • Particles: Tightly packed in fixed positions',
            '  • Motion: Vibrate in place',
            '  • Shape: Fixed, definite shape and volume',
            '  • Energy: Lowest kinetic energy',
            '',
            'Liquid Water:',
            '  • Particles: Close together but can move',
            '  • Motion: Slide past each other',
            '  • Shape: Definite volume, takes container shape',
            '  • Energy: Moderate kinetic energy',
            '',
            'Water Vapor (Gas):',
            '  • Particles: Far apart, widely separated',
            '  • Motion: Move freely and rapidly',
            '  • Shape: No fixed shape or volume, fills container',
            '  • Energy: Highest kinetic energy'
        ],
        helper: 'Remember: solid=fixed, liquid=flows, gas=fills container',
        solution: 'Solid: fixed arrangement; Liquid: mobile arrangement; Gas: dispersed arrangement',
        realWorldContext: 'Explaining why ice floats and steam expands'
    });

    // Problem 4: Density Changes Across States
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Density Comparison of States',
        problem: 'Explain why gases are much less dense than liquids and solids',
        parameters: { concept: 'density_comparison' },
        type: 'conceptual_explanation',
        context: { difficulty: 'intermediate', topic: 'Particle Theory' },
        subparts: [
            'Density Definition: ρ = mass/volume',
            '',
            'Solids and Liquids:',
            '  • Particles closely packed',
            '  • Small volume for given mass',
            '  • High density (typically 0.5-20 g/cm³)',
            '',
            'Gases:',
            '  • Particles widely separated',
            '  • Large volume for same mass',
            '  • Low density (typically 0.001-0.01 g/cm³)',
            '',
            'Example: Water',
            '  • Ice: ~0.92 g/cm³',
            '  • Liquid water: 1.00 g/cm³',
            '  • Water vapor: ~0.0006 g/cm³ at 100°C, 1 atm',
            '',
            'Reason: Gas particles have ~1000× more space between them'
        ],
        helper: 'Gases have huge spaces between particles',
        solution: 'Gases are less dense due to large particle separation',
        realWorldContext: 'Why balloons float and steam rises'
    });

    // Problem 5: Compressibility of States
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Compressibility of Different States',
        problem: 'Why are gases easily compressed but liquids and solids are not?',
        parameters: { property: 'compressibility' },
        type: 'conceptual_explanation',
        context: { difficulty: 'intermediate', topic: 'States of Matter' },
        subparts: [
            'Gases (Highly Compressible):',
            '  • Large spaces between particles',
            '  • Pressure pushes particles closer together',
            '  • Volume decreases significantly',
            '  • Example: Air in a bicycle pump',
            '',
            'Liquids (Nearly Incompressible):',
            '  • Particles already close together',
            '  • Very little space to compress',
            '  • Volume stays nearly constant',
            '  • Example: Hydraulic systems',
            '',
            'Solids (Incompressible):',
            '  • Particles in contact, fixed positions',
            '  • No room for compression',
            '  • Volume essentially constant',
            '  • Example: Pressing on a metal block',
            '',
            'Key Principle: Compression requires available space'
        ],
        helper: 'Gases compress because particles have room to get closer',
        solution: 'Gases compress easily due to particle spacing; liquids/solids cannot',
        realWorldContext: 'Pneumatic vs hydraulic systems'
    });

    // Problem 6: Phase Diagram Reading
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase Diagram Interpretation',
        problem: 'Using a phase diagram, determine the state of CO₂ at 5 atm and -50°C',
        parameters: { 
            substance: 'CO₂', 
            P: 5, 
            T: -50,
            triple_point_P: 5.11,
            triple_point_T: -56.6,
            critical_P: 73,
            critical_T: 31
        },
        type: 'phase_diagram',
        context: { difficulty: 'advanced', topic: 'Phase Diagrams', temperatureUnit: 'C' },
        subparts: [
            'Given: CO₂ at P = 5 atm, T = -50°C',
            'Known Phase Boundaries:',
            '  • Triple point: 5.11 atm, -56.6°C',
            '  • Critical point: 73 atm, 31°C',
            '',
            'Analysis:',
            '  • P = 5 atm < 5.11 atm (below triple point pressure)',
            '  • T = -50°C > -56.6°C (above triple point temp)',
            '  • At P < 5.11 atm, CO₂ sublimes (no liquid phase)',
            '',
            'Determination:',
            '  • Below triple point pressure',
            '  • Above sublimation temperature',
            '  • State: GAS',
            '',
            'Note: CO₂ cannot exist as liquid below 5.11 atm'
        ],
        helper: 'Check position relative to triple point on phase diagram',
        solution: 'Gas (below triple point pressure)',
        realWorldContext: 'Why dry ice sublimes at atmospheric pressure'
    });

    // Problem 7: Intermolecular Forces and States
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Intermolecular Forces Effect on States',
        problem: 'Explain why substances with stronger intermolecular forces have higher boiling points',
        parameters: { concept: 'IMF_effect' },
        type: 'conceptual_explanation',
        context: { difficulty: 'advanced', topic: 'Intermolecular Forces' },
        subparts: [
            'Intermolecular Forces (IMF):',
            '  • Attractions between molecules',
            '  • Types: London dispersion, dipole-dipole, hydrogen bonding',
            '  • Stronger IMF = molecules held more tightly',
            '',
            'Boiling Point Connection:',
            '  • Boiling = overcoming IMF to separate molecules',
            '  • Stronger IMF requires more energy (heat)',
            '  • More energy = higher temperature needed',
            '',
            'Examples:',
            '  • He (weak London forces): BP = -269°C',
            '  • H₂O (strong H-bonds): BP = 100°C',
            '  • More IMF energy → higher boiling point',
            '',
            'Energy Perspective:',
            '  • ΔH_vap is energy to overcome IMF',
            '  • Stronger IMF → larger ΔH_vap → higher BP'
        ],
        helper: 'Stronger forces need more energy (higher temp) to break',
        solution: 'Stronger IMF requires higher temperature to overcome during boiling',
        realWorldContext: 'Why water boils at higher temp than alcohol'
    });

    // Problem 8: State Changes and Energy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Energy During State Changes',
        problem: 'Does temperature change during melting? Explain using particle theory.',
        parameters: { phase_change: 'melting', energy_type: 'potential' },
        type: 'conceptual_explanation',
        context: { difficulty: 'intermediate', topic: 'Phase Changes' },
        subparts: [
            'Observation: Temperature stays constant during melting',
            '',
            'Particle Theory Explanation:',
            '  1. In solid: Particles vibrate in fixed positions',
            '  2. Add heat energy: Energy goes to breaking IMF',
            '  3. During melting: Energy breaks bonds, not increase motion',
            '  4. Temperature = average kinetic energy',
            '  5. KE not increasing → Temperature constant',
            '',
            'Energy Distribution:',
            '  • Heat added = q = mΔH_fus',
            '  • Goes to potential energy (breaking forces)',
            '  • Does NOT go to kinetic energy (motion/temp)',
            '',
            'After Melting:',
            '  • All solid converted to liquid',
            '  • Further heating increases temperature again',
            '  • Now energy goes to kinetic energy'
        ],
        helper: 'Energy breaks bonds (potential), not speed up particles (kinetic)',
        solution: 'Temperature constant because energy breaks IMF, not increase particle motion',
        realWorldContext: 'Ice-water mixture stays at 0°C until all ice melts'
    });

    return relatedProblems;
}

// ============== PHASE CHANGES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPhaseChanges() {
    const relatedProblems = [];

    // Problem 1: Melting Energy Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Energy to Melt Ice',
        problem: 'Calculate energy required to melt 50.0 g of ice at 0°C (ΔH_fus = 334 J/g)',
        parameters: { 
            mass: 50.0, 
            deltaH_fus: 334, 
            transitionType: 'melting',
            molarMass: 18.015
        },
        type: 'phase_transition',
        context: { difficulty: 'beginner', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass of ice: m = 50.0 g',
            '  • ΔH_fus (heat of fusion) = 334 J/g',
            '  • Temperature: 0°C (at melting point)',
            '',
            'Formula: q = m × ΔH_fus',
            '',
            'Calculation:',
            '  q = 50.0 g × 334 J/g',
            '  q = 16,700 J',
            '  q = 16.7 kJ',
            '',
            'Physical Meaning:',
            '  • 16.7 kJ needed to break hydrogen bonds',
            '  • Temperature stays at 0°C during melting',
            '  • Energy converts solid → liquid',
            '',
            'Check: Positive value (endothermic - absorbs heat) ✓'
        ],
        helper: 'Multiply mass by heat of fusion',
        solution: 'q = 16.7 kJ (endothermic)',
        realWorldContext: 'Energy needed to melt ice for cooling drinks'
    });

    // Problem 2: Vaporization Energy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Energy to Boil Water',
        problem: 'How much energy is needed to vaporize 25.0 g of water at 100°C? (ΔH_vap = 2260 J/g)',
        parameters: { 
            mass: 25.0, 
            deltaH_vap: 2260, 
            transitionType: 'vaporization',
            molarMass: 18.015
        },
        type: 'phase_transition',
        context: { difficulty: 'beginner', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass of water: m = 25.0 g',
            '  • ΔH_vap (heat of vaporization) = 2260 J/g',
            '  • Temperature: 100°C (at boiling point)',
            '',
            'Formula: q = m × ΔH_vap',
            '',
            'Calculation:',
            '  q = 25.0 g × 2260 J/g',
            '  q = 56,500 J',
            '  q = 56.5 kJ',
            '',
            'Physical Meaning:',
            '  • 56.5 kJ needed to completely overcome IMF',
            '  • Temperature stays at 100°C during boiling',
            '  • Energy converts liquid → gas',
            '',
            'Comparison:',
            '  • ΔH_vap > ΔH_fus (2260 > 334)',
            '  • Boiling requires more energy than melting'
        ],
        helper: 'Multiply mass by heat of vaporization',
        solution: 'q = 56.5 kJ (endothermic)',
        realWorldContext: 'Energy to boil water in a kettle'
    });

    // Problem 3: Condensation Energy Release
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Energy Released During Condensation',
        problem: 'Calculate energy released when 100.0 g of steam condenses at 100°C (ΔH_vap = 2260 J/g)',
        parameters: { 
            mass: 100.0, 
            deltaH_vap: 2260, 
            transitionType: 'condensation',
            molarMass: 18.015
        },
        type: 'phase_transition',
        context: { difficulty: 'intermediate', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass of steam: m = 100.0 g',
            '  • ΔH_vap = 2260 J/g',
            '  • Process: Condensation (gas → liquid)',
            '',
            'Formula: q = m × ΔH_vap (with negative sign)',
            '',
            'Calculation:',
            '  q = -100.0 g × 2260 J/g',
            '  q = -226,000 J',
            '  q = -226 kJ',
            '',
            'Sign Convention:',
            '  • Negative value = exothermic (releases heat)',
            '  • Opposite of vaporization',
            '  • Forms IMF, releases energy',
            '',
            'Physical Meaning:',
            '  • 226 kJ released to surroundings',
            '  • This energy warms nearby objects',
            '  • Why steam burns are severe'
        ],
        helper: 'Condensation releases energy (negative q)',
        solution: 'q = -226 kJ (exothermic)',
        realWorldContext: 'Why steam heating is efficient'
    });

    // Problem 4: Complete Heating Curve
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Heating Curve Calculation',
        problem: 'Calculate total energy to heat 10.0 g ice from -20°C to steam at 120°C',
        parameters: { 
            mass: 10.0,
            c_solid: 2.09,
            c_liquid: 4.18,
            c_gas: 2.01,
            deltaH_fus: 334,
            deltaH_vap: 2260,
            T_initial: -20,
            T_final: 120,
            T_melt: 0,
            T_boil: 100
        },
        type: 'heating_curve',
        context: { difficulty: 'advanced', topic: 'Heating Curves' },
        subparts: [
            'Given: 10.0 g H₂O from -20°C to 120°C',
            'Specific heats: c_ice=2.09, c_water=4.18, c_steam=2.01 J/(g·°C)',
            'ΔH_fus = 334 J/g, ΔH_vap = 2260 J/g',
            '',
            'Stage 1: Heat ice -20°C → 0°C',
            '  q₁ = mcΔT = 10.0 × 2.09 × 20 = 418 J',
            '',
            'Stage 2: Melt ice at 0°C',
            '  q₂ = mΔH_fus = 10.0 × 334 = 3,340 J',
            '',
            'Stage 3: Heat water 0°C → 100°C',
            '  q₃ = mcΔT = 10.0 × 4.18 × 100 = 4,180 J',
            '',
            'Stage 4: Boil water at 100°C',
            '  q₄ = mΔH_vap = 10.0 × 2260 = 22,600 J',
            '',
            'Stage 5: Heat steam 100°C → 120°C',
            '  q₅ = mcΔT = 10.0 × 2.01 × 20 = 402 J',
            '',
            'Total: q_total = 418 + 3340 + 4180 + 22600 + 402',
            '       q_total = 30,940 J = 30.9 kJ'
        ],
        helper: 'Add energy for each heating and phase change segment',
        solution: 'q_total = 30.9 kJ',
        realWorldContext: 'Total energy to convert ice to steam'
    });

    // Problem 5: Freezing Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Energy Released During Freezing',
        problem: 'How much energy is released when 75.0 g of water freezes at 0°C? (ΔH_fus = 334 J/g)',
        parameters: { 
            mass: 75.0, 
            deltaH_fus: 334, 
            transitionType: 'freezing',
            molarMass: 18.015
        },
        type: 'phase_transition',
        context: { difficulty: 'beginner', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass: m = 75.0 g',
            '  • ΔH_fus = 334 J/g',
            '  • Process: Freezing (liquid → solid)',
            '',
            'Formula: q = -m × ΔH_fus',
            '',
            'Calculation:',
            '  q = -75.0 g × 334 J/g',
            '  q = -25,050 J',
            '  q = -25.1 kJ',
            '',
            'Sign: Negative (exothermic)',
            '  • Freezing releases energy',
            '  • Forms hydrogen bonds',
            '  • Opposite of melting',
            '',
            'Application: This energy must be removed to freeze water'
        ],
        helper: 'Freezing is exothermic (negative energy)',
        solution: 'q = -25.1 kJ (exothermic)',
        realWorldContext: 'Energy released when making ice cubes'
    });

    // Problem 6: Sublimation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sublimation Energy',
        problem: 'Calculate energy for 20.0 g dry ice (CO₂) to sublime. (ΔH_sub = 571 J/g)',
        parameters: { 
            mass: 20.0,
            substance: 'CO₂',
            deltaH_sub: 571,
            transitionType: 'sublimation'
        },
        type: 'phase_transition',
        context: { difficulty: 'intermediate', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass of dry ice: m = 20.0 g',
            '  • ΔH_sub (heat of sublimation) = 571 J/g',
            '  • Process: Sublimation (solid → gas directly)',
            '',
            'Formula: q = m × ΔH_sub',
            '',
            'Calculation:',
            '  q = 20.0 g × 571 J/g',
            '  q = 11,420 J',
            '  q = 11.4 kJ',
            '',
            'Note on Sublimation:',
            '  • Skips liquid phase',
            '  • ΔH_sub = ΔH_fus + ΔH_vap (approximately)',
            '  • Requires more energy than just melting',
            '',
            'Why CO₂ Sublimes:',
            '  • At 1 atm, liquid phase doesn\'t exist',
            '  • Goes directly from solid to gas at -78.5°C'
        ],
        helper: 'Sublimation goes directly from solid to gas',
        solution: 'q = 11.4 kJ (endothermic)',
        realWorldContext: 'How dry ice "evaporates" without melting'
    });

    // Problem 7: Deposition
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Deposition Energy Release',
        problem: 'Calculate energy released when 5.0 g water vapor deposits as frost at -10°C',
        parameters: { 
            mass: 5.0,
            deltaH_sub: 2838,
            transitionType: 'deposition'
        },
        type: 'phase_transition',
        context: { difficulty: 'intermediate', topic: 'Phase Transitions' },
        subparts: [
            'Given:',
            '  • Mass: m = 5.0 g',
            '  • ΔH_sub for water = 2838 J/g (approximate)',
            '  • Process: Deposition (gas → solid)',
            '',
            'Formula: q = -m × ΔH_sub',
            '',
            'Calculation:',
            '  q = -5.0 g × 2838 J/g',
            '  q = -14,190 J',
            '  q = -14.2 kJ',
            '',
            'Deposition Explained:',
            '  • Opposite of sublimation',
            '  • Skips liquid phase (gas → solid)',
            '  • Releases large amount of energy',
            '  • Creates frost directly from water vapor',
            '',
            'Sign: Negative (exothermic)'
        ],
        helper: 'Deposition is reverse of sublimation (exothermic)',
        solution: 'q = -14.2 kJ (exothermic)',
        realWorldContext: 'Formation of frost on cold surfaces'
    });

    // Problem 8: Clausius-Clapeyron Application
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Vapor Pressure Calculation',
        problem: 'Water has vapor pressure 23.8 torr at 25°C. Find vapor pressure at 50°C. (ΔH_vap = 40.7 kJ/mol)',
        parameters: { 
            P1: 23.8,
            T1: 25,
            T2: 50,
            deltaH_vap: 40700,
            R: 8.314
        },
        type: 'vapor_pressure',
        context: { difficulty: 'advanced', topic: 'Clausius-Clapeyron', temperatureUnit: 'C' },
        subparts: [
            'Given:',
            '  • P₁ = 23.8 torr at T₁ = 25°C = 298.15 K',
            '  • T₂ = 50°C = 323.15 K',
            '  • ΔH_vap = 40.7 kJ/mol = 40,700 J/mol',
            '  • R = 8.314 J/(mol·K)',
            '',
            'Clausius-Clapeyron Equation:',
            '  ln(P₂/P₁) = -(ΔH_vap/R)(1/T₂ - 1/T₁)',
            '',
            'Calculate:',
            '  1/T₂ - 1/T₁ = 1/323.15 - 1/298.15',
            '             = 0.003095 - 0.003354',
            '             = -0.000259 K⁻¹',
            '',
            '  ln(P₂/P₁) = -(40700/8.314)(-0.000259)',
            '           = (4894)(0.000259)',
            '           = 1.268',
            '',
            '  P₂/P₁ = e^1.268 = 3.55',
            '  P₂ = 3.55 × 23.8 torr',
            '  P₂ = 84.5 torr'
        ],
        helper: 'Use Clausius-Clapeyron to relate vapor pressure and temperature',
        solution: 'P₂ = 84.5 torr at 50°C',
        realWorldContext: 'Predicting vapor pressure at different temperatures'
    });

    return relatedProblems;
}

// ============== GAS LAWS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedGasLaws() {
    const relatedProblems = [];

    // Problem 1: Ideal Gas Law - Solve for Pressure
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculate Pressure Using Ideal Gas Law',
        problem: 'Find pressure of 2.0 mol gas in 10.0 L container at 25°C',
        parameters: { 
            n: 2.0,
            V: 10.0,
            T: 25,
            R: 0.0821
},
type: 'ideal_gas_law',
context: { difficulty: 'beginner', topic: 'Ideal Gas Law', temperatureUnit: 'C' },
subparts: [
'Given:',
'  • n = 2.0 mol',
'  • V = 10.0 L',
'  • T = 25°C',
'  • R = 0.0821 L·atm/(mol·K)',
'',
'Step 1: Convert temperature to Kelvin',
'  T = 25 + 273.15 = 298.15 K',
'',
'Step 2: Use PV = nRT, solve for P',
'  P = nRT/V',
'',
'Step 3: Substitute values',
'  P = (2.0 mol)(0.0821 L·atm/(mol·K))(298.15 K) / 10.0 L',
'  P = 48.96 / 10.0',
'  P = 4.90 atm',
'',
'Check: Units cancel correctly ✓',
'Physical meaning: ~5 atm is reasonable for confined gas'
],
helper: 'Remember to convert °C to K first!',
solution: 'P = 4.90 atm',
realWorldContext: 'Calculating pressure in gas cylinders'
});
// Problem 2: Ideal Gas Law - Solve for Volume
relatedProblems.push({
    difficulty: 'easier',
    scenario: 'Calculate Volume Using Ideal Gas Law',
    problem: 'What volume does 0.500 mol of gas occupy at STP?',
    parameters: { 
        n: 0.500,
        P: 1.0,
        T: 273.15,
        R: 0.0821
    },
    type: 'ideal_gas_law',
    context: { difficulty: 'beginner', topic: 'Ideal Gas Law', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • n = 0.500 mol',
        '  • STP conditions: P = 1.0 atm, T = 273.15 K',
        '  • R = 0.0821 L·atm/(mol·K)',
        '',
        'Step 1: Use PV = nRT, solve for V',
        '  V = nRT/P',
        '',
        'Step 2: Substitute values',
        '  V = (0.500 mol)(0.0821)(273.15 K) / 1.0 atm',
        '  V = 11.22 / 1.0',
        '  V = 11.2 L',
        '',
        'Note: At STP, 1 mol of any ideal gas = 22.4 L',
        'Check: 0.500 mol × 22.4 L/mol = 11.2 L ✓',
        '',
        'Physical meaning: Half a mole occupies half the molar volume'
    ],
    helper: 'At STP, use molar volume shortcut: 22.4 L/mol',
    solution: 'V = 11.2 L',
    realWorldContext: 'Standard conditions for comparing gases'
});

// Problem 3: Combined Gas Law
relatedProblems.push({
    difficulty: 'similar',
    scenario: 'Combined Gas Law Application',
    problem: 'Gas at 2.0 atm, 300 K, 5.0 L. Find new volume at 1.5 atm, 350 K',
    parameters: { 
        P1: 2.0,
        V1: 5.0,
        T1: 300,
        P2: 1.5,
        T2: 350
    },
    type: 'combined_gas_law',
    context: { difficulty: 'intermediate', topic: 'Combined Gas Law', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • Initial: P₁ = 2.0 atm, V₁ = 5.0 L, T₁ = 300 K',
        '  • Final: P₂ = 1.5 atm, T₂ = 350 K',
        '  • Find: V₂',
        '',
        'Step 1: Combined Gas Law',
        '  P₁V₁/T₁ = P₂V₂/T₂',
        '',
        'Step 2: Solve for V₂',
        '  V₂ = (P₁V₁T₂)/(T₁P₂)',
        '',
        'Step 3: Substitute values',
        '  V₂ = (2.0 atm × 5.0 L × 350 K) / (300 K × 1.5 atm)',
        '  V₂ = 3500 / 450',
        '  V₂ = 7.78 L',
        '',
        'Analysis:',
        '  • P decreased → V increases ✓',
        '  • T increased → V increases ✓',
        '  • Both factors increase volume ✓'
    ],
    helper: 'Use P₁V₁/T₁ = P₂V₂/T₂ when amount (n) is constant',
    solution: 'V₂ = 7.78 L',
    realWorldContext: 'Gas behavior when conditions change'
});

// Problem 4: Boyle's Law
relatedProblems.push({
    difficulty: 'easier',
    scenario: 'Boyle\'s Law (Constant Temperature)',
    problem: 'A gas occupies 4.0 L at 3.0 atm. What volume at 2.0 atm (constant T)?',
    parameters: { 
        P1: 3.0,
        V1: 4.0,
        P2: 2.0
    },
    type: 'combined_gas_law',
    context: { difficulty: 'beginner', topic: 'Boyle\'s Law' },
    subparts: [
        'Given:',
        '  • V₁ = 4.0 L at P₁ = 3.0 atm',
        '  • P₂ = 2.0 atm',
        '  • Temperature constant',
        '',
        'Boyle\'s Law: P₁V₁ = P₂V₂',
        '',
        'Step 1: Solve for V₂',
        '  V₂ = P₁V₁/P₂',
        '',
        'Step 2: Substitute',
        '  V₂ = (3.0 atm × 4.0 L) / 2.0 atm',
        '  V₂ = 12.0 / 2.0',
        '  V₂ = 6.0 L',
        '',
        'Check: Pressure decreased, so volume increased ✓',
        'Inverse relationship: P ↓ means V ↑',
        '',
        'Physical meaning: Lower pressure allows gas to expand'
    ],
    helper: 'Boyle\'s Law: pressure and volume are inversely related',
    solution: 'V₂ = 6.0 L',
    realWorldContext: 'How syringes and breathing work'
});

// Problem 5: Charles's Law
relatedProblems.push({
    difficulty: 'easier',
    scenario: 'Charles\'s Law (Constant Pressure)',
    problem: 'Gas volume is 2.0 L at 300 K. What volume at 450 K (constant P)?',
    parameters: { 
        V1: 2.0,
        T1: 300,
        T2: 450
    },
    type: 'combined_gas_law',
    context: { difficulty: 'beginner', topic: 'Charles\'s Law', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • V₁ = 2.0 L at T₁ = 300 K',
        '  • T₂ = 450 K',
        '  • Pressure constant',
        '',
        'Charles\'s Law: V₁/T₁ = V₂/T₂',
        '',
        'Step 1: Solve for V₂',
        '  V₂ = V₁T₂/T₁',
        '',
        'Step 2: Substitute',
        '  V₂ = (2.0 L × 450 K) / 300 K',
        '  V₂ = 900 / 300',
        '  V₂ = 3.0 L',
        '',
        'Check: Temperature increased, so volume increased ✓',
        'Direct relationship: T ↑ means V ↑',
        '',
        'Physical meaning: Hotter gas expands (particles move faster)'
    ],
    helper: 'Charles\'s Law: volume and temperature are directly related',
    solution: 'V₂ = 3.0 L',
    realWorldContext: 'Why hot air balloons rise'
});

// Problem 6: Dalton's Law of Partial Pressures
relatedProblems.push({
    difficulty: 'similar',
    scenario: 'Dalton\'s Law Application',
    problem: 'Container has 1.5 atm N₂, 0.8 atm O₂, 0.2 atm CO₂. Find total pressure.',
    parameters: { 
        pressures: [1.5, 0.8, 0.2]
    },
    type: 'daltons_law',
    context: { difficulty: 'intermediate', topic: 'Dalton\'s Law' },
    subparts: [
        'Given:',
        '  • P(N₂) = 1.5 atm',
        '  • P(O₂) = 0.8 atm',
        '  • P(CO₂) = 0.2 atm',
        '',
        'Dalton\'s Law: P_total = P₁ + P₂ + P₃ + ...',
        '',
        'Step 1: Add all partial pressures',
        '  P_total = P(N₂) + P(O₂) + P(CO₂)',
        '',
        'Step 2: Calculate',
        '  P_total = 1.5 + 0.8 + 0.2',
        '  P_total = 2.5 atm',
        '',
        'Physical meaning:',
        '  • Each gas contributes independently',
        '  • Total pressure = sum of contributions',
        '  • Gases don\'t interact (ideal behavior)',
        '',
        'Check: Total > any individual partial pressure ✓'
    ],
    helper: 'Simply add all the partial pressures together',
    solution: 'P_total = 2.5 atm',
    realWorldContext: 'Atmospheric pressure from gas mixture'
});

// Problem 7: Mole Fraction and Partial Pressure
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Calculate Partial Pressures from Moles',
    problem: 'Container has 2.0 mol He, 3.0 mol Ne, P_total = 5.0 atm. Find each partial pressure.',
    parameters: { 
        moles: [2.0, 3.0],
        P_total: 5.0
    },
    type: 'daltons_law',
    context: { difficulty: 'intermediate', topic: 'Dalton\'s Law with Mole Fractions' },
    subparts: [
        'Given:',
        '  • n(He) = 2.0 mol',
        '  • n(Ne) = 3.0 mol',
        '  • P_total = 5.0 atm',
        '',
        'Step 1: Calculate total moles',
        '  n_total = 2.0 + 3.0 = 5.0 mol',
        '',
        'Step 2: Calculate mole fractions',
        '  X(He) = n(He)/n_total = 2.0/5.0 = 0.40',
        '  X(Ne) = n(Ne)/n_total = 3.0/5.0 = 0.60',
        '',
        'Step 3: Calculate partial pressures',
        '  P(He) = X(He) × P_total = 0.40 × 5.0 = 2.0 atm',
        '  P(Ne) = X(Ne) × P_total = 0.60 × 5.0 = 3.0 atm',
        '',
        'Check: 2.0 + 3.0 = 5.0 atm ✓',
        '',
        'Physical meaning: Partial pressure proportional to mole fraction'
    ],
    helper: 'Use mole fractions: P_i = X_i × P_total',
    solution: 'P(He) = 2.0 atm, P(Ne) = 3.0 atm',
    realWorldContext: 'Calculating individual gas pressures in mixtures'
});

// Problem 8: Gas Density Calculation
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Gas Density from Ideal Gas Law',
    problem: 'Calculate density of CO₂ at 25°C and 1.0 atm (M = 44.0 g/mol)',
    parameters: { 
        P: 1.0,
        T: 25,
        R: 0.0821,
        M: 44.0
    },
    type: 'density_calc',
    context: { difficulty: 'advanced', topic: 'Gas Density', temperatureUnit: 'C' },
    subparts: [
        'Given:',
        '  • P = 1.0 atm',
        '  • T = 25°C = 298.15 K',
        '  • M = 44.0 g/mol (CO₂)',
        '  • R = 0.0821 L·atm/(mol·K)',
        '',
        'Formula: d = PM/RT',
        '',
        'Step 1: Substitute values',
        '  d = (1.0 atm × 44.0 g/mol) / (0.0821 L·atm/(mol·K) × 298.15 K)',
        '',
        'Step 2: Calculate',
        '  d = 44.0 / 24.47',
        '  d = 1.80 g/L',
        '',
        'Physical meaning:',
        '  • CO₂ is denser than air (~1.2 g/L)',
        '  • This is why CO₂ sinks',
        '',
        'Check: Units work out to g/L ✓'
    ],
    helper: 'Use modified ideal gas law: d = PM/RT',
    solution: 'd = 1.80 g/L',
    realWorldContext: 'Why CO₂ settles in low areas'
});

// Problem 9: Molar Mass from Gas Density
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Determine Molar Mass from Density',
    problem: 'Unknown gas has density 1.43 g/L at STP. Find molar mass.',
    parameters: { 
        density: 1.43,
        P: 1.0,
        T: 273.15,
        R: 0.0821
    },
    type: 'density_calc',
    context: { difficulty: 'advanced', topic: 'Molar Mass Determination', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • d = 1.43 g/L',
        '  • STP: P = 1.0 atm, T = 273.15 K',
        '  • R = 0.0821 L·atm/(mol·K)',
        '',
        'Formula: M = dRT/P',
        '',
        'Step 1: Rearrange d = PM/RT to solve for M',
        '  M = dRT/P',
        '',
        'Step 2: Substitute values',
        '  M = (1.43 g/L × 0.0821 L·atm/(mol·K) × 273.15 K) / 1.0 atm',
        '',
        'Step 3: Calculate',
        '  M = 32.1 / 1.0',
        '  M = 32.1 g/mol',
        '',
        'Identification: Likely O₂ (M = 32.0 g/mol) ✓',
        '',
        'Physical meaning: Can identify unknown gases by density'
    ],
    helper: 'Rearrange density formula to solve for M',
    solution: 'M = 32.1 g/mol (likely O₂)',
    realWorldContext: 'Identifying unknown gases experimentally'
});

return relatedProblems;
}
// ============== KINETIC MOLECULAR THEORY - RELATED PROBLEMS GENERATOR ==============
function generateRelatedKineticMolecularTheory() {
const relatedProblems = [];
// Problem 1: Average Kinetic Energy per Molecule
relatedProblems.push({
    difficulty: 'easier',
    scenario: 'Average Kinetic Energy Calculation',
    problem: 'Calculate average KE per molecule at 300 K (k = 1.381×10⁻²³ J/K)',
    parameters: { 
        T: 300,
        k: 1.381e-23
    },
    type: 'kinetic_energy',
    context: { difficulty: 'beginner', topic: 'Kinetic Molecular Theory', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • T = 300 K',
        '  • k = 1.381×10⁻²³ J/K (Boltzmann constant)',
        '',
        'Formula: KE_avg = (3/2)kT',
        '',
        'Step 1: Substitute values',
        '  KE_avg = (3/2) × 1.381×10⁻²³ J/K × 300 K',
        '',
        'Step 2: Calculate',
        '  KE_avg = 1.5 × 1.381×10⁻²³ × 300',
        '  KE_avg = 6.21×10⁻²¹ J',
        '',
        'Physical meaning:',
        '  • This is energy per molecule',
        '  • Very small because molecules are tiny',
        '  • Directly proportional to temperature',
        '',
        'Note: Higher T → Higher KE → Faster particles'
    ],
    helper: 'Use KE = (3/2)kT for individual molecules',
    solution: 'KE_avg = 6.21×10⁻²¹ J per molecule',
    realWorldContext: 'Molecular energy scale'
});

// Problem 2: RMS Speed Calculation
relatedProblems.push({
    difficulty: 'similar',
    scenario: 'Root-Mean-Square Speed',
    problem: 'Calculate u_rms for N₂ at 25°C (M = 28.0 g/mol, R = 8.314 J/(mol·K))',
    parameters: { 
        T: 25,
        M: 28.0,
        R: 8.314
    },
    type: 'rms_speed',
    context: { difficulty: 'intermediate', topic: 'Molecular Speeds', temperatureUnit: 'C' },
    subparts: [
        'Given:',
        '  • T = 25°C = 298.15 K',
        '  • M = 28.0 g/mol = 0.0280 kg/mol',
        '  • R = 8.314 J/(mol·K)',
        '',
        'Formula: u_rms = √(3RT/M)',
        '',
        'Step 1: Convert M to kg/mol',
        '  M = 28.0 g/mol ÷ 1000 = 0.0280 kg/mol',
        '',
        'Step 2: Substitute into formula',
        '  u_rms = √(3 × 8.314 × 298.15 / 0.0280)',
        '',
        'Step 3: Calculate inside square root',
        '  u_rms = √(7433.1 / 0.0280)',
        '  u_rms = √265,468',
        '',
        'Step 4: Take square root',
        '  u_rms = 515 m/s',
        '',
        'Physical meaning: N₂ molecules move at ~515 m/s at room temp!'
    ],
    helper: 'Must convert molar mass to kg/mol for SI units',
    solution: 'u_rms = 515 m/s',
    realWorldContext: 'Speed of air molecules at room temperature'
});

// Problem 3: Comparing Molecular Speeds
relatedProblems.push({
    difficulty: 'similar',
    scenario: 'Speed Comparison of Different Gases',
    problem: 'At same T, which is faster: He (4.0 g/mol) or Xe (131.3 g/mol)?',
    parameters: { 
        M_He: 4.0,
        M_Xe: 131.3,
        T: 298
    },
    type: 'rms_speed',
    context: { difficulty: 'intermediate', topic: 'Molecular Speed Comparison', temperatureUnit: 'K' },
    subparts: [
        'Given:',
        '  • He: M = 4.0 g/mol',
        '  • Xe: M = 131.3 g/mol',
        '  • Same temperature T',
        '',
        'Formula: u_rms = √(3RT/M)',
        '',
        'Analysis:',
        '  • At same T and R, u_rms ∝ 1/√M',
        '  • Lighter molecule → Faster speed',
        '  • Speed ratio: u(He)/u(Xe) = √(M_Xe/M_He)',
        '',
        'Calculate ratio:',
        '  u(He)/u(Xe) = √(131.3/4.0)',
        '  u(He)/u(Xe) = √32.8',
        '  u(He)/u(Xe) = 5.73',
        '',
        'Conclusion: He moves 5.73 times faster than Xe',
        '',
        'Physical meaning: Light atoms move much faster to have same KE'
    ],
    helper: 'Lighter molecules always move faster at same temperature',
    solution: 'He is 5.73× faster than Xe',
    realWorldContext: 'Why helium escapes from balloons faster'
});

// Problem 4: Graham's Law of Effusion
relatedProblems.push({
    difficulty: 'similar',
    scenario: 'Graham\'s Law Application',
    problem: 'H₂ effuses at 5.0 L/min. Find effusion rate of O₂ (M_H₂=2.0, M_O₂=32.0 g/mol)',
    parameters: { 
        M1: 2.0,
        M2: 32.0,
        rate1: 5.0
    },
    type: 'grahams_law',
    context: { difficulty: 'intermediate', topic: 'Graham\'s Law' },
    subparts: [
        'Given:',
        '  • rate(H₂) = 5.0 L/min',
        '  • M(H₂) = 2.0 g/mol',
        '  • M(O₂) = 32.0 g/mol',
        '',
        'Graham\'s Law: rate₁/rate₂ = √(M₂/M₁)',
        '',
        'Step 1: Set up ratio',
        '  rate(H₂)/rate(O₂) = √(M(O₂)/M(H₂))',
        '',
        'Step 2: Substitute',
        '  5.0/rate(O₂) = √(32.0/2.0)',
        '  5.0/rate(O₂) = √16',
        '  5.0/rate(O₂) = 4.0',
        '',
        'Step 3: Solve for rate(O₂)',
        '  rate(O₂) = 5.0/4.0',
        '  rate(O₂) = 1.25 L/min',
        '',
        'Physical meaning: Lighter H₂ effuses 4× faster than O₂'
    ],
    helper: 'Graham\'s Law: lighter gases effuse faster',
    solution: 'rate(O₂) = 1.25 L/min',
    realWorldContext: 'Gas separation and diffusion rates'
});

// Problem 5: Time for Effusion
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Effusion Time Comparison',
    problem: 'If 1.0 L of Ne effuses in 60 s, how long for 1.0 L of Ar? (M_Ne=20.2, M_Ar=39.9)',
    parameters: { 
        M1: 20.2,
        M2: 39.9,
        time1: 60
    },
    type: 'grahams_law',
    context: { difficulty: 'intermediate', topic: 'Graham\'s Law with Time' },
    subparts: [
        'Given:',
        '  • t(Ne) = 60 s for 1.0 L',
        '  • M(Ne) = 20.2 g/mol',
        '  • M(Ar) = 39.9 g/mol',
        '',
        'Graham\'s Law (time form): t₁/t₂ = √(M₁/M₂)',
        '',
        'Note: Time is inverse of rate',
        '',
        'Step 1: Set up ratio',
        '  t(Ne)/t(Ar) = √(M(Ne)/M(Ar))',
        '',
        'Step 2: Substitute',
        '  60/t(Ar) = √(20.2/39.9)',
        '  60/t(Ar) = √0.506',
        '  60/t(Ar) = 0.711',
        '',
        'Step 3: Solve for t(Ar)',
        '  t(Ar) = 60/0.711',
        '  t(Ar) = 84.4 s',
        '',
        'Check: Heavier Ar takes longer ✓'
    ],
    helper: 'For time: heavier gas takes longer',
    solution: 't(Ar) = 84.4 s',
    realWorldContext: 'Predicting effusion times in experiments'
});

// Problem 6: Temperature Effect on Speed
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Temperature Effect on Molecular Speed',
    problem: 'O₂ has u_rms = 482 m/s at 25°C. Find u_rms at 100°C.',
    parameters: { 
        u_rms1: 482,
        T1: 25,
        T2: 100
    },
    type: 'rms_speed',
    context: { difficulty: 'advanced', topic: 'Temperature Dependence', temperatureUnit: 'C' },
    subparts: [
        'Given:',
        '  • u_rms(25°C) = 482 m/s',
        '  • T₁ = 25°C = 298.15 K',
        '  • T₂ = 100°C = 373.15 K',
        '',
        'Relationship: u_rms ∝ √T',
        '',
        'Step 1: Set up ratio',
        '  u_rms(T₂)/u_rms(T₁) = √(T₂/T₁)',
        '',
        'Step 2: Substitute',
        '  u_rms(100°C)/482 = √(373.15/298.15)',
        '  u_rms(100°C)/482 = √1.251',
        '  u_rms(100°C)/482 = 1.119',
        '',
        'Step 3: Solve',
        '  u_rms(100°C) = 482 × 1.119',
        '  u_rms(100°C) = 539 m/s',
        '',
        'Physical meaning: Higher T → faster molecular motion',
        'Check: Speed increased as expected ✓'
    ],
    helper: 'Speed increases with square root of temperature',
    solution: 'u_rms(100°C) = 539 m/s',
    realWorldContext: 'How heating affects molecular motion'
});

// Problem 7: Maxwell-Boltzmann Distribution
relatedProblems.push({
    difficulty: 'harder',
    scenario: 'Speed Distribution Analysis',
    problem: 'For N₂ at 300 K, calculate u_mp, u_avg, and u_rms. Compare them.',
    parameters: { 
        T: 300,
        M: 28.0,
        R: 8.314
    },
    type: 'rms_speed',
    context: { difficulty: 'advanced', topic: 'Maxwell-Boltzmann Distribution', temperatureUnit: 'K' },
    subparts: [
        'Given: N₂ at T = 300 K, M = 0.0280 kg/mol',
        '',
        'Most Probable Speed: u_mp = √(2RT/M)',
        '  u_mp = √(2 × 8.314 × 300 / 0.0280)',
        '  u_mp = √(177,514)',
        '  u_mp = 421 m/s',
        '',
        'Average Speed: u_avg = √(8RT/πM)',
        '  u_avg = √(8 × 8.314 × 300 / (π × 0.0280))',
        '  u_avg = √(226,512)',
        '  u_avg = 476 m/s',
        '',
        'RMS Speed: u_rms = √(3RT/M)',
        '  u_rms = √(3 × 8.314 × 300 / 0.0280)',
        '  u_rms = √(266,271)',
        '  u_rms = 516 m/s',
        '',
        'Relationship: u_mp < u_avg < u_rms ✓',
        '421 < 476 < 516 ✓'
    ],
    helper: 'Three different types of average speeds',
    solution: 'u_mp=421, u_avg=476, u_rms=516 m/s',
    realWorldContext: 'Understanding molecular speed distributions'
});

// Problem 8: Kinetic Energy and Temperature
relatedProblems.push({
    difficulty: 'easier',
    scenario: 'Temperature Doubling Effect',
    problem: 'If temperature doubles from 300 K to 600 K, how does average KE change?',
    parameters: { 
        T1: 300,
        T2: 600
},
type: 'kinetic_energy',
context: { difficulty: 'beginner', topic: 'KE-Temperature Relationship', temperatureUnit: 'K' },
subparts: [
'Given:',
'  • T₁ = 300 K',
'  • T₂ = 600 K (doubled)',
'',
'Formula: KE_avg = (3/2)kT',
'',
'Analysis:',
'  • KE is directly proportional to T',
'  • If T doubles, KE doubles',
'',
'Calculation:',
'  KE₁ = (3/2)k(300)',
'  KE₂ = (3/2)k(600)',
'  KE₂/KE₁ = 600/300 = 2',
'',
'Conclusion: Average KE doubles',
'',
'Physical meaning:',
'  • Temperature IS a measure of average kinetic energy',
'  • Direct proportionality: T ↑ → KE ↑ by same factor',
'  • This is why temperature is in Kelvin (absolute scale)'
],
helper: 'KE is directly proportional to absolute temperature',
solution: 'Average KE doubles (increases by factor of 2)',
realWorldContext: 'Fundamental relationship between heat and motion'
});
return relatedProblems;
}
// ============== SOLVER FUNCTIONS ==============
function solveStatesOfMatterRelatedProblems() {
const problems = generateRelatedStatesOfMatter();
const solvedProblems = [];
problems.forEach((problem, index) => {
    console.log(`  Solving States of Matter Problem ${index + 1}: ${problem.scenario}`);

    const workbook = new EnhancedMatterParticleTheoryWorkbook({
        theme: 'chemistry',
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includeCommonMistakes: true,
        includePedagogicalNotes: true,
        verificationDetail: 'detailed'
    });

    let equation = problem.problem.split(': ')[1] || problem.problem;

    workbook.solveMatterProblem({
        equation: equation,
        scenario: problem.problem,
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
function solvePhaseChangesRelatedProblems() {
const problems = generateRelatedPhaseChanges();
const solvedProblems = [];
problems.forEach((problem, index) => {
    console.log(`  Solving Phase Changes Problem ${index + 1}: ${problem.scenario}`);

    const workbook = new EnhancedMatterParticleTheoryWorkbook({
        theme: 'chemistry',
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includeCommonMistakes: true,
        includePedagogicalNotes: true,
        verificationDetail: 'detailed'
    });

    let equation = problem.problem.split(': ')[1] || problem.problem;

    workbook.solveMatterProblem({
        equation: equation,
        scenario: problem.problem,
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
function solveGasLawsRelatedProblems() {
const problems = generateRelatedGasLaws();
const solvedProblems = [];
problems.forEach((problem, index) => {
    console.log(`  Solving Gas Laws Problem ${index + 1}: ${problem.scenario}`);

    const workbook = new EnhancedMatterParticleTheoryWorkbook({
        theme: 'chemistry',
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includeCommonMistakes: true,
        includePedagogicalNotes: true,
        verificationDetail: 'detailed'
    });

    let equation = problem.problem.split(': ')[1] || problem.problem;

    workbook.solveMatterProblem({
        equation: equation,
        scenario: problem.problem,
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
function solveKineticMolecularTheoryRelatedProblems() {
const problems = generateRelatedKineticMolecularTheory();
const solvedProblems = [];
problems.forEach((problem, index) => {
    console.log(`  Solving Kinetic Molecular Theory Problem ${index + 1}: ${problem.scenario}`);

    const workbook = new EnhancedMatterParticleTheoryWorkbook({
        theme: 'chemistry',
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includeCommonMistakes: true,
        includePedagogicalNotes: true,
        verificationDetail: 'detailed'
    });

    let equation = problem.problem.split(': ')[1] || problem.problem;

    workbook.solveMatterProblem({
        equation: equation,
        scenario: problem.problem,
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
async function generateComprehensiveChemistryDocument() {
console.log('Generating Comprehensive States of Matter & Particle Theory Workbook...');
console.log('='.repeat(80));
const documentChildren = [];

// ============== DOCUMENT HEADER ==============
documentChildren.push(
    new docx.Paragraph({
        text: 'Comprehensive States of Matter & Particle Theory Workbook',
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
        text: 'States of Matter, Phase Changes, Gas Laws, and Kinetic Molecular Theory',
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

// Part I: States of Matter
documentChildren.push(
    new docx.Paragraph({
        text: 'Part I: States of Matter (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const statesProblems = generateRelatedStatesOfMatter();
statesProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part II: Phase Changes
documentChildren.push(
    new docx.Paragraph({
        text: 'Part II: Phase Changes and Energy (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const phaseProblems = generateRelatedPhaseChanges();
phaseProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 9}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part III: Gas Laws
documentChildren.push(
    new docx.Paragraph({
        text: 'Part III: Gas Laws (9 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const gasProblems = generateRelatedGasLaws();
gasProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
            spacing: { after: 100 }
        })
    );
});

// Part IV: Kinetic Molecular Theory
documentChildren.push(
    new docx.Paragraph({
        text: 'Part IV: Kinetic Molecular Theory (8 Problems)',
        heading: docx.HeadingLevel.HEADING_3,
        spacing: { before: 200, after: 100 }
    })
);

const kineticProblems = generateRelatedKineticMolecularTheory();
kineticProblems.forEach((problem, index) => {
    documentChildren.push(
        new docx.Paragraph({
            text: `${index + 26}. ${problem.scenario}: ${problem.problem}`,
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

// ============== PART I: STATES OF MATTER ==============
console.log('\nProcessing Part I: States of Matter...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part I: States of Matter',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const statesSolved = solveStatesOfMatterRelatedProblems();
statesSolved.forEach((solved, index) => {
    console.log(`  Adding States of Matter Problem ${index + 1} to document...`);

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

// ============== PART II: PHASE CHANGES ==============
console.log('\nProcessing Part II: Phase Changes...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part II: Phase Changes and Energy',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const phaseSolved = solvePhaseChangesRelatedProblems();
phaseSolved.forEach((solved, index) => {
    console.log(`  Adding Phase Changes Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 9}: ${solved.problem.scenario}`,
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

// ============== PART III: GAS LAWS ==============
console.log('\nProcessing Part III: Gas Laws...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part III: Gas Laws',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const gasSolved = solveGasLawsRelatedProblems();
gasSolved.forEach((solved, index) => {
    console.log(`  Adding Gas Laws Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 17}: ${solved.problem.scenario}`,
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

// ============== PART IV: KINETIC MOLECULAR THEORY ==============
console.log('\nProcessing Part IV: Kinetic Molecular Theory...');
documentChildren.push(
    new docx.Paragraph({
        text: 'Part IV: Kinetic Molecular Theory',
        heading: docx.HeadingLevel.HEADING_1,
        spacing: { before: 400, after: 300 },
        pageBreakBefore: true
    })
);

const kineticSolved = solveKineticMolecularTheoryRelatedProblems();
kineticSolved.forEach((solved, index) => {
    console.log(`  Adding Kinetic Molecular Theory Problem ${index + 1} to document...`);

    documentChildren.push(
        new docx.Paragraph({
            text: `Problem ${index + 26}: ${solved.problem.scenario}`,
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
    const filename = 'comprehensive_states_of_matter_particle_theory_workbook.docx';
    const outputPath = path.join(process.cwd(), filename);
    fs.writeFileSync(outputPath, buffer);

    console.log('\n' + '='.repeat(80));
    console.log('✓ COMPREHENSIVE CHEMISTRY DOCUMENT GENERATION COMPLETE');
    console.log('='.repeat(80));
    console.log(`\n✓ Document saved as: ${outputPath}`);
    console.log('\n📊 DOCUMENT STATISTICS:');
    console.log('  • Total Problems: 33');
    console.log('    - States of Matter: 8 problems');
    console.log('    - Phase Changes: 8 problems');
    console.log('    - Gas Laws: 9 problems');
    console.log('    - Kinetic Molecular Theory: 8 problems');
    console.log('\n📖 CONTENT BREAKDOWN:');
    console.log('  • Part I: States of Matter (Problems 1-8)');
    console.log('  • Part II: Phase Changes and Energy (Problems 9-16)');
    console.log('  • Part III: Gas Laws (Problems 17-25)');
    console.log('  • Part IV: Kinetic Molecular Theory (Problems 26-33)');
    console.log('\n📄 EXPECTED PAGES: 120+ pages');
    console.log('\n✨ Each problem includes:');
    console.log('  • Problem statement with difficulty level');
    console.log('  • Helper tips for quick guidance');
    console.log('  • Complete step-by-step solution');
    console.log('  • Enhanced chemistry explanations');
    console.log('  • Molecular perspective and particle theory');
    console.log('  • Key concepts and pedagogical notes');
    console.log('  • Alternative solution methods');
    console.log('  • Real-world context and applications');
    console.log('  • Common mistakes and error prevention');
    console.log('  • Verification with physical reasoning');
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
