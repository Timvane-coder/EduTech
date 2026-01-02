import { EnhancedAcidBaseMathematicalWorkbook } from './acidbaseworkbook.js';
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

// ============== ACID-BASE RELATED PROBLEMS GENERATORS ==============

// Generator 1: General Acid-Base Problems
function generateRelatedAcidBase() {
    const relatedProblems = [];

    // Problem 1: pH from Strong Acid
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'pH of Strong Acid',
        problem: 'Calculate the pH of 0.01 M HCl solution',
        parameters: { 
            concentration: 0.01, 
            acid: 'HCl',
            acidOrBase: 'acid'
        },
        type: 'strong_acid',
        context: { difficulty: 'beginner', topic: 'Strong Acid pH Calculation' },
        subparts: [
            'Given: [HCl] = 0.01 M',
            'HCl is a strong acid (100% dissociation)',
            'HCl → H⁺ + Cl⁻',
            '[H⁺] = 0.01 M',
            'pH = -log[H⁺]',
            'pH = -log(0.01)',
            'pH = -log(10⁻²)',
            'pH = 2.00',
            'Solution is strongly acidic'
        ],
        helper: 'For strong acids: [H⁺] equals initial concentration',
        solution: 'pH = 2.00',
        realWorldContext: 'Stomach acid has pH around 1.5-2.0'
    });

    // Problem 2: pH from Strong Base
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'pH of Strong Base',
        problem: 'Calculate the pH of 0.05 M NaOH solution',
        parameters: { 
            concentration: 0.05, 
            base: 'NaOH',
            acidOrBase: 'base'
        },
        type: 'strong_base',
        context: { difficulty: 'beginner', topic: 'Strong Base pH Calculation' },
        subparts: [
            'Given: [NaOH] = 0.05 M',
            'NaOH is a strong base (100% dissociation)',
            'NaOH → Na⁺ + OH⁻',
            '[OH⁻] = 0.05 M',
            'pOH = -log[OH⁻]',
            'pOH = -log(0.05) = 1.30',
            'pH + pOH = 14',
            'pH = 14 - 1.30 = 12.70',
            'Solution is strongly basic'
        ],
        helper: 'For strong bases: [OH⁻] equals initial concentration, then pH = 14 - pOH',
        solution: 'pH = 12.70',
        realWorldContext: 'Household bleach has pH around 12-13'
    });

    // Problem 3: [H⁺] from pH
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Concentration from pH',
        problem: 'Calculate [H⁺] for a solution with pH = 3.5',
        parameters: { 
            pH: 3.5
        },
        type: 'concentration_from_ph',
        context: { difficulty: 'beginner', topic: 'Reverse pH Calculation' },
        subparts: [
            'Given: pH = 3.5',
            'pH = -log[H⁺]',
            '[H⁺] = 10⁻ᵖᴴ',
            '[H⁺] = 10⁻³·⁵',
            '[H⁺] = 3.16 × 10⁻⁴ M',
            'Also calculate pOH and [OH⁻]:',
            'pOH = 14 - 3.5 = 10.5',
            '[OH⁻] = 10⁻¹⁰·⁵ = 3.16 × 10⁻¹¹ M'
        ],
        helper: 'Use antilog: [H⁺] = 10⁻ᵖᴴ',
        solution: '[H⁺] = 3.16 × 10⁻⁴ M',
        realWorldContext: 'Wine typically has pH 3-4'
    });

    // Problem 4: Dilution Effect
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'pH Change Upon Dilution',
        problem: 'Calculate pH change when 10 mL of 0.1 M HCl is diluted to 100 mL',
        parameters: { 
            initialConcentration: 0.1,
            initialVolume: 0.01,
            finalVolume: 0.1,
            acidOrBase: 'acid'
        },
        type: 'dilution',
        context: { difficulty: 'intermediate', topic: 'Dilution and pH' },
        subparts: [
            'Given: C₁ = 0.1 M, V₁ = 10 mL, V₂ = 100 mL',
            'Initial pH: pH₁ = -log(0.1) = 1.00',
            'Use dilution formula: C₁V₁ = C₂V₂',
            'C₂ = (0.1 M × 10 mL) / 100 mL',
            'C₂ = 0.01 M',
            'Final pH: pH₂ = -log(0.01) = 2.00',
            'ΔpH = pH₂ - pH₁ = 2.00 - 1.00 = 1.00',
            '10-fold dilution increases pH by 1 unit'
        ],
        helper: 'Dilution formula: M₁V₁ = M₂V₂, then calculate new pH',
        solution: 'pH changes from 1.00 to 2.00 (increase of 1.00)',
        realWorldContext: 'Important in laboratory preparation and safety'
    });

    // Problem 5: Mixing Acids
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mixing Strong Acid Solutions',
        problem: 'Mix 50 mL of 0.1 M HCl with 50 mL of 0.2 M HNO₃. Find final pH',
        parameters: { 
            concentration1: 0.1,
            volume1: 0.05,
            concentration2: 0.2,
            volume2: 0.05,
            acid1: 'HCl',
            acid2: 'HNO₃'
        },
        type: 'mixing_solutions',
        context: { difficulty: 'intermediate', topic: 'Mixing Strong Acids' },
        subparts: [
            'Given: 50 mL of 0.1 M HCl + 50 mL of 0.2 M HNO₃',
            'Moles HCl: 0.1 M × 0.05 L = 0.005 mol H⁺',
            'Moles HNO₃: 0.2 M × 0.05 L = 0.010 mol H⁺',
            'Total moles H⁺: 0.005 + 0.010 = 0.015 mol',
            'Total volume: 50 + 50 = 100 mL = 0.1 L',
            '[H⁺]final = 0.015 mol / 0.1 L = 0.15 M',
            'pH = -log(0.15) = 0.82',
            'Solution is very acidic'
        ],
        helper: 'Add moles of H⁺ from each acid, divide by total volume',
        solution: 'pH = 0.82',
        realWorldContext: 'Mixing cleaning solutions or industrial acids'
    });

    // Problem 6: Ka-Kb Relationship
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ka-Kb Conjugate Relationship',
        problem: 'If Ka of acetic acid is 1.8 × 10⁻⁵, find Kb of acetate ion',
        parameters: { 
            Ka: 1.8e-5,
            acid: 'CH₃COOH'
        },
        type: 'ka_kb_relationship',
        context: { difficulty: 'intermediate', topic: 'Conjugate Acid-Base Pairs' },
        subparts: [
            'Given: Ka(CH₃COOH) = 1.8 × 10⁻⁵',
            'For conjugate pair: Ka × Kb = Kw',
            'Kw = 1.0 × 10⁻¹⁴ at 25°C',
            'Kb = Kw / Ka',
            'Kb = (1.0 × 10⁻¹⁴) / (1.8 × 10⁻⁵)',
            'Kb = 5.56 × 10⁻¹⁰',
            'pKa = -log(1.8 × 10⁻⁵) = 4.74',
            'pKb = -log(5.56 × 10⁻¹⁰) = 9.26',
            'Verify: pKa + pKb = 4.74 + 9.26 = 14.00 ✓'
        ],
        helper: 'Use Ka × Kb = Kw = 1.0 × 10⁻¹⁴',
        solution: 'Kb = 5.56 × 10⁻¹⁰',
        realWorldContext: 'Understanding conjugate acid-base behavior'
    });

    return relatedProblems;
}

// Generator 2: pH Calculations
function generateRelatedpHCalculations() {
    const relatedProblems = [];

    // Problem 1: Weak Acid pH
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weak Acid pH Calculation',
        problem: 'Calculate pH of 0.1 M acetic acid (Ka = 1.8 × 10⁻⁵)',
        parameters: { 
            concentration: 0.1, 
            Ka: 1.8e-5,
            acid: 'CH₃COOH'
        },
        type: 'weak_acid',
        context: { difficulty: 'intermediate', topic: 'Weak Acid Equilibrium' },
        subparts: [
            'Given: [CH₃COOH] = 0.1 M, Ka = 1.8 × 10⁻⁵',
            'CH₃COOH ⇌ H⁺ + CH₃COO⁻',
            'Check approximation: Ka/C = 1.8×10⁻⁵/0.1 = 1.8×10⁻⁴ < 0.05 ✓',
            'Approximation valid: [H⁺] ≈ √(Ka × C)',
            '[H⁺] = √(1.8 × 10⁻⁵ × 0.1)',
            '[H⁺] = √(1.8 × 10⁻⁶)',
            '[H⁺] = 1.34 × 10⁻³ M',
            'pH = -log(1.34 × 10⁻³) = 2.87',
            'Percent dissociation = (1.34×10⁻³/0.1) × 100% = 1.34%'
        ],
        helper: 'Use approximation [H⁺] ≈ √(Ka × C) if Ka/C < 0.05',
        solution: 'pH = 2.87',
        realWorldContext: 'Vinegar is ~5% acetic acid'
    });

    // Problem 2: Weak Base pH
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weak Base pH Calculation',
        problem: 'Calculate pH of 0.15 M ammonia (Kb = 1.8 × 10⁻⁵)',
        parameters: { 
            concentration: 0.15, 
            Kb: 1.8e-5,
            base: 'NH₃'
        },
        type: 'weak_base',
        context: { difficulty: 'intermediate', topic: 'Weak Base Equilibrium' },
        subparts: [
            'Given: [NH₃] = 0.15 M, Kb = 1.8 × 10⁻⁵',
            'NH₃ + H₂O ⇌ NH₄⁺ + OH⁻',
            'Check approximation: Kb/C = 1.8×10⁻⁵/0.15 = 1.2×10⁻⁴ < 0.05 ✓',
            '[OH⁻] ≈ √(Kb × C)',
            '[OH⁻] = √(1.8 × 10⁻⁵ × 0.15)',
            '[OH⁻] = √(2.7 × 10⁻⁶)',
            '[OH⁻] = 1.64 × 10⁻³ M',
            'pOH = -log(1.64 × 10⁻³) = 2.78',
            'pH = 14 - 2.78 = 11.22'
        ],
        helper: 'Calculate [OH⁻], then pOH, then pH = 14 - pOH',
        solution: 'pH = 11.22',
        realWorldContext: 'Household ammonia cleaner'
    });

    // Problem 3: Salt Hydrolysis - Acidic
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Acidic Salt Solution',
        problem: 'Calculate pH of 0.2 M NH₄Cl (Kb of NH₃ = 1.8 × 10⁻⁵)',
        parameters: { 
            concentration: 0.2,
            cation: 'NH₄⁺',
            anion: 'Cl⁻',
            Kb: 1.8e-5
        },
        type: 'salt_hydrolysis',
        context: { difficulty: 'intermediate', topic: 'Salt Hydrolysis - Acidic' },
        subparts: [
            'Given: [NH₄Cl] = 0.2 M, Kb(NH₃) = 1.8 × 10⁻⁵',
            'NH₄⁺ is conjugate acid of weak base NH₃',
            'Cl⁻ is from strong acid HCl (no hydrolysis)',
            'NH₄⁺ + H₂O ⇌ NH₃ + H₃O⁺',
            'Ka(NH₄⁺) = Kw/Kb = 1.0×10⁻¹⁴/1.8×10⁻⁵ = 5.56 × 10⁻¹⁰',
            '[H⁺] = √(Ka × C) = √(5.56×10⁻¹⁰ × 0.2)',
            '[H⁺] = √(1.11 × 10⁻¹⁰) = 1.05 × 10⁻⁵ M',
            'pH = -log(1.05 × 10⁻⁵) = 4.98',
            'Solution is slightly acidic'
        ],
        helper: 'Find Ka from Kw/Kb, then treat as weak acid',
        solution: 'pH = 4.98',
        realWorldContext: 'Fertilizers often contain ammonium salts'
    });

    // Problem 4: Salt Hydrolysis - Basic
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Basic Salt Solution',
        problem: 'Calculate pH of 0.1 M sodium acetate (Ka of acetic acid = 1.8 × 10⁻⁵)',
        parameters: { 
            concentration: 0.1,
            cation: 'Na⁺',
            anion: 'CH₃COO⁻',
            Ka: 1.8e-5
        },
        type: 'salt_hydrolysis',
        context: { difficulty: 'intermediate', topic: 'Salt Hydrolysis - Basic' },
        subparts: [
            'Given: [NaCH₃COO] = 0.1 M, Ka(CH₃COOH) = 1.8 × 10⁻⁵',
            'CH₃COO⁻ is conjugate base of weak acid',
            'Na⁺ is from strong base NaOH (no hydrolysis)',
            'CH₃COO⁻ + H₂O ⇌ CH₃COOH + OH⁻',
            'Kb(CH₃COO⁻) = Kw/Ka = 1.0×10⁻¹⁴/1.8×10⁻⁵ = 5.56 × 10⁻¹⁰',
            '[OH⁻] = √(Kb × C) = √(5.56×10⁻¹⁰ × 0.1)',
            '[OH⁻] = √(5.56 × 10⁻¹¹) = 7.45 × 10⁻⁶ M',
            'pOH = -log(7.45 × 10⁻⁶) = 5.13',
            'pH = 14 - 5.13 = 8.87'
        ],
        helper: 'Find Kb from Kw/Ka, then treat as weak base',
        solution: 'pH = 8.87',
        realWorldContext: 'Sodium acetate used in food preservation'
    });

    // Problem 5: Very Dilute Strong Acid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Very Dilute Strong Acid',
        problem: 'Calculate pH of 1.0 × 10⁻⁸ M HCl',
        parameters: { 
            concentration: 1.0e-8,
            acid: 'HCl'
        },
        type: 'strong_acid',
        context: { difficulty: 'advanced', topic: 'Autoionization Effect' },
        subparts: [
            'Given: [HCl] = 1.0 × 10⁻⁸ M',
            'At this dilution, water autoionization matters!',
            'Cannot ignore [H⁺] from water (10⁻⁷ M)',
            '[H⁺]total = [H⁺]acid + [H⁺]water',
            '[H⁺]total ≈ 1.0×10⁻⁸ + 1.0×10⁻⁷',
            '[H⁺]total = 1.1 × 10⁻⁷ M',
            'pH = -log(1.1 × 10⁻⁷) = 6.96',
            'pH is close to 7 (nearly neutral)',
            'Never less than 7 for acids!'
        ],
        helper: 'For very dilute acids, consider water autoionization',
        solution: 'pH = 6.96',
        realWorldContext: 'Understanding pH limits in dilute solutions'
    });

    // Problem 6: Percent Dissociation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Percent Dissociation Calculation',
        problem: 'Calculate percent dissociation of 0.05 M HF (Ka = 6.8 × 10⁻⁴)',
        parameters: { 
            concentration: 0.05,
            Ka: 6.8e-4,
            acid: 'HF'
        },
        type: 'percent_dissociation',
        context: { difficulty: 'intermediate', topic: 'Percent Dissociation' },
        subparts: [
            'Given: [HF] = 0.05 M, Ka = 6.8 × 10⁻⁴',
            'Check approximation: Ka/C = 6.8×10⁻⁴/0.05 = 0.0136 < 0.05 ✓',
            '[H⁺] = √(Ka × C) = √(6.8×10⁻⁴ × 0.05)',
            '[H⁺] = √(3.4 × 10⁻⁵) = 5.83 × 10⁻³ M',
            'Percent dissociation = ([H⁺]/C) × 100%',
            '= (5.83×10⁻³/0.05) × 100%',
            '= 11.7%',
            'pH = -log(5.83 × 10⁻³) = 2.23',
            'Relatively strong weak acid (Ka > 10⁻⁵)'
        ],
        helper: 'Percent dissociation = ([H⁺]/initial concentration) × 100%',
        solution: '11.7% dissociation, pH = 2.23',
        realWorldContext: 'HF is used in glass etching'
    });

    return relatedProblems;
}

// Generator 3: Buffer Solutions
function generateRelatedBuffers() {
    const relatedProblems = [];

    // Problem 1: Basic Buffer pH
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Buffer pH Calculation',
        problem: 'Calculate pH of buffer: 0.1 M acetic acid + 0.15 M sodium acetate (Ka = 1.8 × 10⁻⁵)',
        parameters: { 
            acidConcentration: 0.1,
            baseConcentration: 0.15,
            Ka: 1.8e-5,
            acid: 'CH₃COOH',
            base: 'CH₃COO⁻'
        },
        type: 'buffer_ph',
        context: { difficulty: 'intermediate', topic: 'Henderson-Hasselbalch Equation' },
        subparts: [
            'Given: [CH₃COOH] = 0.1 M, [CH₃COO⁻] = 0.15 M',
            'Ka = 1.8 × 10⁻⁵',
            'pKa = -log(1.8 × 10⁻⁵) = 4.74',
            'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            'pH = 4.74 + log(0.15/0.1)',
            'pH = 4.74 + log(1.5)',
            'pH = 4.74 + 0.18',
            'pH = 4.92',
            'Check: |pH - pKa| = |4.92 - 4.74| = 0.18 < 1 ✓ Effective buffer'
        ],
        helper: 'Use Henderson-Hasselbalch: pH = pKa + log([base]/[acid])',
        solution: 'pH = 4.92',
        realWorldContext: 'Acetate buffers used in biochemistry'
    });

    // Problem 2: Buffer Preparation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Preparation',
        problem: 'Prepare 1.0 L of pH 5.0 buffer using 0.2 M acetic acid/acetate (pKa = 4.74)',
        parameters: { 
            targetPH: 5.0,
            pKa: 4.74,
            totalVolume: 1.0,
            totalConcentration: 0.2,
            acid: 'CH₃COOH',
            base: 'CH₃COO⁻'
        },
        type: 'buffer_preparation',
        context: { difficulty: 'intermediate', topic: 'Buffer Preparation' },
        subparts: [
            'Given: pH = 5.0, pKa = 4.74, total concentration = 0.2 M',
            'Henderson-Hasselbalch: 5.0 = 4.74 + log([A⁻]/[HA])',
            'log([A⁻]/[HA]) = 5.0 - 4.74 = 0.26',
            '[A⁻]/[HA] = 10⁰·²⁶ = 1.82',
            'Let [HA] = x and [A⁻] = 1.82x',
            'x + 1.82x = 0.2 M',
            '2.82x = 0.2',
            'x = 0.071 M = [HA]',
            '[A⁻] = 0.129 M',
            'For 1.0 L: 0.071 mol acetic acid + 0.129 mol sodium acetate'
        ],
        helper: 'Find ratio from Henderson-Hasselbalch, then calculate amounts',
        solution: '0.071 mol CH₃COOH + 0.129 mol NaCH₃COO',
        realWorldContext: 'Laboratory buffer preparation'
    });

    // Problem 3: Buffer After Adding Acid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Response to Acid',
        problem: 'Buffer contains 0.10 M HA and 0.10 M A⁻ (pKa = 4.5). Add 0.01 mol HCl to 1.0 L. Find new pH',
        parameters: { 
            acidConcentration: 0.10,
            baseConcentration: 0.10,
            pKa: 4.5,
            addedAcid: 0.01,
            volume: 1.0
        },
        type: 'buffer_ph',
        context: { difficulty: 'advanced', topic: 'Buffer Action' },
        subparts: [
            'Initial: [HA] = 0.10 M, [A⁻] = 0.10 M, pKa = 4.5',
            'Initial pH = 4.5 + log(0.10/0.10) = 4.5 + 0 = 4.5',
            'Add 0.01 mol HCl to 1.0 L',
            'HCl + A⁻ → HA (acid consumes conjugate base)',
            'New [HA] = 0.10 + 0.01 = 0.11 M',
            'New [A⁻] = 0.10 - 0.01 = 0.09 M',
            'New pH = 4.5 + log(0.09/0.11)',
            'pH = 4.5 + log(0.818)',
            'pH = 4.5 - 0.09 = 4.41',
            'ΔpH = 4.41 - 4.5 = -0.09 (small change!)'
        ],
        helper: 'Added acid converts A⁻ to HA, recalculate pH',
        solution: 'New pH = 4.41 (change of only 0.09)',
        realWorldContext: 'Buffer resists pH change'
    });

    // Problem 4: Buffer After Adding Base
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Response to Base',
        problem: 'Same buffer as Problem 3. Add 0.01 mol NaOH instead. Find new pH',
        parameters: { 
            acidConcentration: 0.10,
            baseConcentration: 0.10,
            pKa: 4.5,
            addedBase: 0.01,
            volume: 1.0
        },
        type: 'buffer_ph',
        context: { difficulty: 'advanced', topic: 'Buffer Action' },
        subparts: [
            'Initial: [HA] = 0.10 M, [A⁻] = 0.10 M, pH = 4.5',
            'Add 0.01 mol NaOH to 1.0 L',
            'NaOH + HA → A⁻ + H₂O (base consumes acid)',
            'New [HA] = 0.10 - 0.01 = 0.09 M',
            'New [A⁻] = 0.10 + 0.01 = 0.11 M',
            'New pH = 4.5 + log(0.11/0.09)',
            'pH = 4.5 + log(1.222)',
            'pH = 4.5 + 0.09 = 4.59',
            'ΔpH = 4.59 - 4.5 = +0.09 (small change!)'
        ],
        helper: 'Added base converts HA to A⁻, recalculate pH',
        solution: 'New pH = 4.59 (change of only 0.09)',
        realWorldContext: 'Buffer resists pH change in both directions'
    });

    // Problem 5: Buffer Capacity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Buffer Capacity Calculation',
        problem: 'Calculate buffer capacity for 0.2 M acetic acid/acetate buffer at pH = pKa',
        parameters: { 
            acidConcentration: 0.2,
            baseConcentration: 0.2,
            Ka: 1.8e-5,
            pH: 4.74
        },
        type: 'buffer_capacity',
        context: { difficulty: 'advanced', topic: 'Buffer Capacity' },
        subparts: [
            'Given: [HA] = [A⁻] = 0.2 M, pH = pKa = 4.74',
            'Total buffer concentration = 0.4 M',
            '[H⁺] = 10⁻⁴·⁷⁴ = 1.82 × 10⁻⁵ M',
            'Ka = 1.8 × 10⁻⁵',
            'Buffer capacity: β = 2.303 × C × Ka × [H⁺]/(Ka + [H⁺])²',
            'β = 2.303 × 0.4 × 1.8×10⁻⁵ × 1.82×10⁻⁵ / (1.8×10⁻⁵ + 1.82×10⁻⁵)²',
            'β = 2.303 × 0.4 × 1.8×10⁻⁵ × 1.82×10⁻⁵ / (3.62×10⁻⁵)²',
            'β ≈ 0.023 mol/(L·pH unit)',
            'Maximum capacity at pH = pKa'
        ],
        helper: 'Buffer capacity is maximum when pH = pKa',
        solution: 'β = 0.023 mol/(L·pH unit)',
        realWorldContext: 'Determines how much acid/base buffer can neutralize'
    });

    // Problem 6: Buffer Range
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Effective Buffer Range',
        problem: 'Determine effective pH range for phosphate buffer (pKa₂ = 7.2)',
        parameters: { 
            pKa: 7.2,
            acid: 'H₂PO₄⁻',
            base: 'HPO₄²⁻'
        },
        type: 'buffer_ph',
        context: { difficulty: 'intermediate', topic: 'Buffer Range' },
        subparts: [
            'Given: pKa = 7.2 for H₂PO₄⁻/HPO₄²⁻',
            'Effective buffer range: pKa ± 1',
            'Lower limit: 7.2 - 1 = 6.2',
            'Upper limit: 7.2 + 1 = 8.2',
            'Effective range: pH 6.2 to 8.2',
            'At pH = pKa: [H₂PO₄⁻] = [HPO₄²⁻] (optimal)',
            'At pH = 6.2: ratio = 10⁻¹ = 0.1 (10:1 acid:base)',
            'At pH = 8.2: ratio = 10¹ = 10 (1:10 acid:base)',
            'Outside this range, buffering is poor'
        ],
        helper: 'Buffers work best within pKa ± 1 pH unit',
        solution: 'Effective range: pH 6.2 - 8.2',
        realWorldContext: 'Phosphate buffer used for biological pH 7.4'
    });

    // Problem 7: Choosing Buffer System
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Buffer Selection',
        problem: 'Choose best buffer for pH 9.0 from: NH₃/NH₄⁺ (pKa=9.25), CH₃COOH/CH₃COO⁻ (pKa=4.74)',
        parameters: { 
            targetPH: 9.0,
            buffer1pKa: 9.25,
            buffer2pKa: 4.74
        },
        type: 'buffer_ph',
        context: { difficulty: 'intermediate', topic: 'Buffer Selection' },
        subparts: [
            'Target pH = 9.0',
            'Buffer 1: NH₃/NH₄⁺, pKa = 9.25',
            '  |9.0 - 9.25| = 0.25 ✓ Excellent (< 1)',
            'Buffer 2: CH₃COOH/CH₃COO⁻, pKa = 4.74',
            '  |9.0 - 4.74| = 4.26 ✗ Poor (> 1)',
            'Choose NH₃/NH₄⁺ buffer',
            'Calculate ratio: 9.0 = 9.25 + log([NH₃]/[NH₄⁺])',
            'log([NH₃]/[NH₄⁺]) = -0.25',
            '[NH₃]/[NH₄⁺] = 10⁻⁰·²⁵ = 0.56',
            'Need more NH₄⁺ than NH₃ (ratio 1:1.78)'
        ],
        helper: 'Choose buffer with pKa closest to target pH',
        solution: 'NH₃/NH₄⁺ buffer with [NH₃]:[NH₄⁺] = 0.56:1',
        realWorldContext: 'Buffer selection in lab procedures'
    });

    return relatedProblems;
}

// Generator 4: Titration Problems
function generateRelatedTitrations() {
    const relatedProblems = [];

    // Problem 1: Strong Acid-Strong Base Titration
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Strong Acid-Strong Base Titration',
        problem: '25.0 mL of 0.1 M HCl titrated with 0.1 M NaOH. Find volume at equivalence',
        parameters: { 
            acidConcentration: 0.1,
            acidVolume: 0.025,
            baseConcentration: 0.1,
            acidType: 'strong',
            baseType: 'strong'
        },
        type: 'titration_endpoint',
        context: { difficulty: 'beginner', topic: 'Strong-Strong Titration' },
        subparts: [
            'Given: 25.0 mL of 0.1 M HCl, titrant: 0.1 M NaOH',
            'At equivalence: moles acid = moles base',
            'Moles HCl = 0.1 M × 0.025 L = 0.0025 mol',
            'Moles NaOH needed = 0.0025 mol',
            'Volume NaOH = 0.0025 mol / 0.1 M = 0.025 L = 25.0 mL',
            'pH at equivalence = 7.00 (strong acid-strong base)',
            'Indicator: phenolphthalein or bromothymol blue',
            'Total volume at equivalence = 25.0 + 25.0 = 50.0 mL'
        ],
        helper: 'Use stoichiometry: M₁V₁ = M₂V₂ for monoprotic acids/bases',
        solution: 'Volume = 25.0 mL, pH at equivalence = 7.00',
        realWorldContext: 'Basic titration in analytical chemistry'
    });

    // Problem 2: Weak Acid-Strong Base Titration
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weak Acid-Strong Base Titration',
        problem: '50.0 mL of 0.1 M acetic acid (Ka=1.8×10⁻⁵) titrated with 0.1 M NaOH',
        parameters: { 
            acidConcentration: 0.1,
            acidVolume: 0.050,
            baseConcentration: 0.1,
            Ka: 1.8e-5,
            acidType: 'weak',
            baseType: 'strong'
        },
        type: 'titration_endpoint',
        context: { difficulty: 'intermediate', topic: 'Weak Acid-Strong Base Titration' },
        subparts: [
            'Given: 50.0 mL of 0.1 M CH₃COOH, titrant: 0.1 M NaOH',
            'Moles acid = 0.1 × 0.05 = 0.005 mol',
            'Volume NaOH at equivalence = 0.005 / 0.1 = 0.05 L = 50.0 mL',
            'At equivalence: all CH₃COOH → CH₃COO⁻',
            '[CH₃COO⁻] = 0.005 mol / 0.100 L = 0.05 M',
            'Kb = Kw/Ka = 1.0×10⁻¹⁴/1.8×10⁻⁵ = 5.56×10⁻¹⁰',
            '[OH⁻] = √(Kb × C) = √(5.56×10⁻¹⁰ × 0.05) = 5.27×10⁻⁶',
            'pOH = 5.28, pH = 14 - 5.28 = 8.72',
            'pH > 7 at equivalence (basic due to acetate hydrolysis)',
            'Indicator: phenolphthalein (range 8.3-10.0)'
        ],
        helper: 'At equivalence, weak acid converted to conjugate base',
        solution: 'Volume = 50.0 mL, pH at equivalence = 8.72',
        realWorldContext: 'Vinegar analysis'
    });

    // Problem 3: pH at Half-Equivalence Point
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Half-Equivalence Point',
        problem: 'For titration in Problem 2, find pH when 25.0 mL NaOH added',
        parameters: { 
            acidConcentration: 0.1,
            acidVolume: 0.050,
            baseVolume: 0.025,
            Ka: 1.8e-5
        },
        type: 'titration_curve',
        context: { difficulty: 'intermediate', topic: 'Half-Equivalence Point' },
        subparts: [
            'Initial moles CH₃COOH = 0.1 × 0.05 = 0.005 mol',
            'Moles NaOH added = 0.1 × 0.025 = 0.0025 mol',
            'This is half-equivalence point!',
            'Moles CH₃COOH remaining = 0.005 - 0.0025 = 0.0025 mol',
            'Moles CH₃COO⁻ formed = 0.0025 mol',
            'At half-equivalence: [HA] = [A⁻]',
            'Henderson-Hasselbalch: pH = pKa + log([A⁻]/[HA])',
            'pH = pKa + log(1) = pKa + 0',
            'pH = pKa = -log(1.8×10⁻⁵) = 4.74',
            'Key point: pH = pKa at half-equivalence'
        ],
        helper: 'At half-equivalence, pH = pKa',
        solution: 'pH = 4.74 = pKa',
        realWorldContext: 'Used to determine Ka of unknown acids'
    });

    // Problem 4: Titration Curve Points
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Titration Curve',
        problem: 'Calculate pH at 0, 10, 25, 40, 50, and 60 mL NaOH for Problem 2',
        parameters: { 
            acidConcentration: 0.1,
            acidVolume: 0.050,
            baseConcentration: 0.1,
            Ka: 1.8e-5
        },
        type: 'titration_curve',
        context: { difficulty: 'advanced', topic: 'Titration Curve Construction' },
        subparts: [
            '0 mL: weak acid, [H⁺]=√(Ka×C)=√(1.8×10⁻⁵×0.1)=1.34×10⁻³, pH=2.87',
            '10 mL: buffer region',
            '  moles HA = 0.005-0.001 = 0.004',
            '  moles A⁻ = 0.001',
            '  pH = 4.74 + log(0.001/0.004) = 4.74 - 0.60 = 4.14',
            '25 mL: half-equivalence, pH = pKa = 4.74',
            '40 mL: buffer region',
            '  moles HA = 0.005-0.004 = 0.001',
            '  moles A⁻ = 0.004',
            '  pH = 4.74 + log(0.004/0.001) = 4.74 + 0.60 = 5.34',
            '50 mL: equivalence, pH = 8.72 (from Problem 2)',
            '60 mL: excess base',
            '  excess OH⁻ = 0.006 - 0.005 = 0.001 mol',
            '  [OH⁻] = 0.001/0.110 = 0.00909 M',
            '  pOH = 2.04, pH = 11.96'
        ],
        helper: 'Different calculations for each region of titration',
        solution: 'pH values: 2.87, 4.14, 4.74, 5.34, 8.72, 11.96',
        realWorldContext: 'Understanding titration curve shape'
    });

    // Problem 5: Diprotic Acid Titration
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diprotic Acid Titration',
        problem: '40.0 mL of 0.1 M H₂SO₃ (pKa₁=1.9, pKa₂=7.2) with 0.1 M NaOH',
        parameters: { 
            acidConcentration: 0.1,
            acidVolume: 0.040,
            baseConcentration: 0.1,
            Ka1: 1.26e-2,
            Ka2: 6.31e-8
        },
        type: 'titration_endpoint',
        context: { difficulty: 'advanced', topic: 'Polyprotic Acid Titration' },
        subparts: [
            'Diprotic acid: H₂SO₃ has two equivalence points',
            'Moles H₂SO₃ = 0.1 × 0.040 = 0.004 mol',
            'First equivalence: H₂SO₃ → HSO₃⁻',
            '  Volume₁ = 0.004/0.1 = 0.04 L = 40.0 mL',
            '  pH ≈ (pKa₁ + pKa₂)/2 = (1.9 + 7.2)/2 = 4.55',
            'Second equivalence: HSO₃⁻ → SO₃²⁻',
            '  Volume₂ = 2 × 40.0 = 80.0 mL total',
            '  pH calculated from SO₃²⁻ hydrolysis',
            'Titration curve shows two distinct equivalence points',
            'Two buffer regions between equivalence points'
        ],
        helper: 'Diprotic acids have two equivalence points',
        solution: 'V₁ = 40.0 mL (pH≈4.55), V₂ = 80.0 mL',
        realWorldContext: 'Carbonic acid, amino acids'
    });

    // Problem 6: Unknown Concentration
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Unknown Concentration Determination',
        problem: '25.00 mL unknown HCl requires 32.45 mL of 0.100 M NaOH. Find [HCl]',
        parameters: { 
            unknownVolume: 0.02500,
            knownConcentration: 0.100,
            knownVolume: 0.03245,
            knownType: 'base'
        },
        type: 'unknown_concentration',
        context: { difficulty: 'beginner', topic: 'Concentration Determination' },
        subparts: [
            'Given: 25.00 mL HCl, 32.45 mL of 0.100 M NaOH',
            'At equivalence: moles HCl = moles NaOH',
            'Moles NaOH = 0.100 M × 0.03245 L = 0.003245 mol',
            'Moles HCl = 0.003245 mol',
            '[HCl] = 0.003245 mol / 0.02500 L',
            '[HCl] = 0.1298 M',
            'Significant figures: 0.130 M (3 sig figs)',
            'Check: 0.130 × 25.00 = 3.25 mmol',
            '        0.100 × 32.45 = 3.245 mmol ✓'
        ],
        helper: 'M₁V₁ = M₂V₂ at equivalence point',
        solution: '[HCl] = 0.130 M',
        realWorldContext: 'Standard analytical procedure'
    });

    // Problem 7: Indicator Selection
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Indicator Selection for Titration',
        problem: 'Choose indicator for titration of weak acid (pKa=5.0) with strong base',
        parameters: { 
            equivalencePH: 8.5,
            pKa: 5.0
        },
        type: 'indicator_selection',
        context: { difficulty: 'intermediate', topic: 'Indicator Selection' },
        subparts: [
            'Weak acid-strong base: pH > 7 at equivalence',
            'Estimate pH at equivalence ≈ 8-9',
            'Available indicators:',
            '  Methyl orange: pH 3.1-4.4 ✗ Too acidic',
            '  Bromothymol blue: pH 6.0-7.6 ✗ Too low',
            '  Phenolphthalein: pH 8.3-10.0 ✓ Good match',
            '  Thymolphthalein: pH 9.3-10.5 ~ Acceptable',
            'Best choice: Phenolphthalein',
            'Colorless → pink transition near equivalence',
            'Indicator pKa should be close to equivalence pH'
        ],
        helper: 'Choose indicator with range matching equivalence pH',
        solution: 'Phenolphthalein (pH range 8.3-10.0)',
        realWorldContext: 'Proper indicator selection ensures accurate endpoint'
    });

    return relatedProblems;
}

// Generator 5: Polyprotic Acids
function generateRelatedPolyproticAcids() {
    const relatedProblems = [];

    // Problem 1: Diprotic Acid pH
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Diprotic Acid pH Calculation',
        problem: 'Calculate pH of 0.1 M H₂CO₃ (Ka₁=4.3×10⁻⁷, Ka₂=5.6×10⁻¹¹)',
        parameters: { 
            concentration: 0.1,
            Ka1: 4.3e-7,
            Ka2: 5.6e-11,
            acid: 'H₂CO₃'
        },
        type: 'polyprotic_acid',
        context: { difficulty: 'intermediate', topic: 'Diprotic Acid Equilibrium' },
        subparts: [
            'Given: [H₂CO₃] = 0.1 M, Ka₁ = 4.3×10⁻⁷, Ka₂ = 5.6×10⁻¹¹',
            'Ka₁ >> Ka₂, so first dissociation dominates',
            'H₂CO₃ ⇌ H⁺ + HCO₃⁻',
            'Treat as monoprotic with Ka = Ka₁',
            '[H⁺] ≈ √(Ka₁ × C) = √(4.3×10⁻⁷ × 0.1)',
            '[H⁺] = √(4.3 × 10⁻⁸) = 2.07 × 10⁻⁴ M',
            'pH = -log(2.07 × 10⁻⁴) = 3.68',
            'Second dissociation contributes negligibly',
            'Check: Ka₁/Ka₂ = 4.3×10⁻⁷/5.6×10⁻¹¹ = 7679 >> 1 ✓'
        ],
        helper: 'For polyprotic acids, first dissociation usually dominates',
        solution: 'pH = 3.68',
        realWorldContext: 'Carbonic acid in carbonated beverages and blood'
    });

    // Problem 2: Species Distribution
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Species Distribution in Diprotic System',
        problem: 'For H₂CO₃ system at pH 7.0, find fractions of H₂CO₃, HCO₃⁻, CO₃²⁻',
        parameters: { 
            pH: 7.0,
            Ka1: 4.3e-7,
            Ka2: 5.6e-11,
            acid: 'H₂CO₃'
        },
        type: 'species_distribution',
        context: { difficulty: 'advanced', topic: 'Species Distribution Diagrams' },
        subparts: [
            'Given: pH = 7.0, Ka₁ = 4.3×10⁻⁷, Ka₂ = 5.6×10⁻¹¹',
            '[H⁺] = 10⁻⁷ M',
            'For diprotic: α₀ = [H⁺]²/(D)',
            '             α₁ = [H⁺]Ka₁/(D)',
            '             α₂ = Ka₁Ka₂/(D)',
            'D = [H⁺]² + [H⁺]Ka₁ + Ka₁Ka₂',
            'D = (10⁻⁷)² + (10⁻⁷)(4.3×10⁻⁷) + (4.3×10⁻⁷)(5.6×10⁻¹¹)',
            'D = 10⁻¹⁴ + 4.3×10⁻¹⁴ + 2.41×10⁻¹⁷ ≈ 5.3×10⁻¹⁴',
            'α₀(H₂CO₃) = 10⁻¹⁴/5.3×10⁻¹⁴ = 0.189 (18.9%)',
            'α₁(HCO₃⁻) = 4.3×10⁻¹⁴/5.3×10⁻¹⁴ = 0.811 (81.1%)',
            'α₂(CO₃²⁻) ≈ 0.0004 (0.04%)',
            'At pH 7, HCO₃⁻ dominates'
        ],
        helper: 'Calculate distribution using alpha fractions',
        solution: 'H₂CO₃: 18.9%, HCO₃⁻: 81.1%, CO₃²⁻: 0.04%',
        realWorldContext: 'Blood pH buffering by bicarbonate system'
    });

    // Problem 3: Phosphoric Acid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triprotic Acid pH',
        problem: 'Calculate pH of 0.1 M H₃PO₄ (pKa₁=2.15, pKa₂=7.20, pKa₃=12.35)',
        parameters: { 
            concentration: 0.1,
            Ka1: 7.08e-3,
            Ka2: 6.31e-8,
            Ka3: 4.47e-13,
            acid: 'H₃PO₄'
        },
        type: 'polyprotic_acid',
        context: { difficulty: 'advanced', topic: 'Triprotic Acid Equilibrium' },
        subparts: [
            'Given: [H₃PO₄] = 0.1 M',
            'Ka₁ = 7.08×10⁻³, Ka₂ = 6.31×10⁻⁸, Ka₃ = 4.47×10⁻¹³',
            'Ka₁ >> Ka₂ >> Ka₃',
            'First dissociation dominates: H₃PO₄ ⇌ H⁺ + H₂PO₄⁻',
            'Check approximation: Ka₁/C = 7.08×10⁻³/0.1 = 0.0708 > 0.05',
            'Must use quadratic: Ka₁ = x²/(C-x)',
            '7.08×10⁻³ = x²/(0.1-x)',
            'x² + 7.08×10⁻³x - 7.08×10⁻⁴ = 0',
            'x = 2.34×10⁻² M',
            'pH = -log(2.34×10⁻²) = 1.63',
            'Quite acidic for a weak acid!'
        ],
        helper: 'Phosphoric acid is relatively strong for first dissociation',
        solution: 'pH = 1.63',
        realWorldContext: 'Phosphoric acid in soft drinks (pH 2-3)'
    });

    // Problem 4: Intermediate Species pH
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Amphiprotic Species pH',
        problem: 'Calculate pH of 0.1 M NaHCO₃ (Ka₁=4.3×10⁻⁷, Ka₂=5.6×10⁻¹¹)',
        parameters: { 
            concentration: 0.1,
            Ka1: 4.3e-7,
            Ka2: 5.6e-11,
            species: 'HCO₃⁻'
        },
        type: 'salt_hydrolysis',
        context: { difficulty: 'advanced', topic: 'Amphiprotic Species' },
        subparts: [
            'Given: [NaHCO₃] = 0.1 M, Ka₁ = 4.3×10⁻⁷, Ka₂ = 5.6×10⁻¹¹',
            'HCO₃⁻ is amphiprotic (can act as acid or base)',
            'HCO₃⁻ ⇌ H⁺ + CO₃²⁻ (Ka₂)',
            'HCO₃⁻ + H₂O ⇌ H₂CO₃ + OH⁻ (Kb)',
            'For amphiprotic species: pH ≈ (pKa₁ + pKa₂)/2',
            'pKa₁ = -log(4.3×10⁻⁷) = 6.37',
            'pKa₂ = -log(5.6×10⁻¹¹) = 10.25',
            'pH ≈ (6.37 + 10.25)/2 = 8.31',
            'Solution is basic'
        ],
        helper: 'Amphiprotic: pH = (pKa₁ + pKa₂)/2',
        solution: 'pH = 8.31',
        realWorldContext: 'Baking soda (sodium bicarbonate) solutions'
    });

    // Problem 5: Sulfuric Acid
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Strong-Weak Diprotic Acid',
        problem: 'Calculate pH of 0.01 M H₂SO₄ (Ka₁>>1, Ka₂=1.2×10⁻²)',
        parameters: { 
            concentration: 0.01,
            Ka1: 1000,
            Ka2: 1.2e-2,
            acid: 'H₂SO₄'
        },
        type: 'polyprotic_acid',
        context: { difficulty: 'intermediate', topic: 'Strong First Dissociation' },
        subparts: [
            'Given: [H₂SO₄] = 0.01 M, Ka₁ >> 1, Ka₂ = 1.2×10⁻²',
            'First dissociation complete: H₂SO₄ → H⁺ + HSO₄⁻',
            'Gives 0.01 M H⁺ and 0.01 M HSO₄⁻',
            'Second dissociation: HSO₄⁻ ⇌ H⁺ + SO₄²⁻',
            'Ka₂ is not negligible, use ICE table:',
            'Initial: [H⁺]=0.01, [HSO₄⁻]=0.01, [SO₄²⁻]=0',
            'Change: +x, -x, +x',
            'Ka₂ = (0.01+x)(x)/(0.01-x) = 1.2×10⁻²',
            'Solving: x ≈ 0.0055 M',
            '[H⁺]total = 0.01 + 0.0055 = 0.0155 M',
            'pH = -log(0.0155) = 1.81',
            'Second dissociation contributes significantly'
        ],
        helper: 'H₂SO₄: first step complete, second step partial',
        solution: 'pH = 1.81',
        realWorldContext: 'Car battery acid, strong industrial acid'
    });

    // Problem 6: Oxalic Acid
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Diprotic Organic Acid',
        problem: 'Calculate pH of 0.05 M oxalic acid (pKa₁=1.23, pKa₂=4.19)',
        parameters: { 
            concentration: 0.05,
            Ka1: 5.89e-2,
            Ka2: 6.46e-5,
            acid: 'H₂C₂O₄'
        },
        type: 'polyprotic_acid',
        context: { difficulty: 'intermediate', topic: 'Diprotic Organic Acid' },
        subparts: [
            'Given: [H₂C₂O₄] = 0.05 M, Ka₁ = 5.89×10⁻², Ka₂ = 6.46×10⁻⁵',
            'H₂C₂O₄ ⇌ H⁺ + HC₂O₄⁻',
            'Ka₁ is relatively large (not << C)',
            'Check: Ka₁/C = 5.89×10⁻²/0.05 = 1.18 > 0.05',
            'Must use quadratic equation',
            '5.89×10⁻² = x²/(0.05-x)',
            'x² + 5.89×10⁻²x - 2.945×10⁻³ = 0',
            'x = 0.0286 M',
            'pH = -log(0.0286) = 1.54',
            'Check second dissociation: contributes ~0.00006 M (negligible)'
        ],
        helper: 'Oxalic acid has relatively strong first dissociation',
        solution: 'pH = 1.54',
        realWorldContext: 'Found in rhubarb, spinach; used in rust removal'
    });

    // Problem 7: Buffer from Polyprotic Acid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polyprotic Acid Buffer',
        problem: 'Mix 0.1 M H₃PO₄ with 0.1 M NaH₂PO₄. Calculate pH (pKa₁=2.15)',
        parameters: { 
            acidConcentration: 0.1,
            baseConcentration: 0.1,
            pKa: 2.15,
            Ka1: 7.08e-3,
            acid: 'H₃PO₄',
            base: 'H₂PO₄⁻'
        },
        type: 'buffer_ph',
        context: { difficulty: 'advanced', topic: 'Polyprotic Buffer System' },
        subparts: [
            'Given: [H₃PO₄] = 0.1 M, [H₂PO₄⁻] = 0.1 M',
            'This is H₃PO₄/H₂PO₄⁻ buffer (first buffer region)',
            'pKa₁ = 2.15',
            'Henderson-Hasselbalch: pH = pKa₁ + log([H₂PO₄⁻]/[H₃PO₄])',
            'pH = 2.15 + log(0.1/0.1)',
            'pH = 2.15 + log(1)',
            'pH = 2.15 + 0 = 2.15',
            'Effective buffer range: pH 1.15 - 3.15',
            'Phosphoric acid has 3 buffer regions:',
            '  Region 1: H₃PO₄/H₂PO₄⁻ (pH ~2)',
            '  Region 2: H₂PO₄⁻/HPO₄²⁻ (pH ~7)',
            '  Region 3: HPO₄²⁻/PO₄³⁻ (pH ~12)'
        ],
        helper: 'Polyprotic acids create multiple buffer regions',
        solution: 'pH = 2.15',
        realWorldContext: 'Phosphate buffers important in biology'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveAcidBaseRelatedProblems() {
    const problems = generateRelatedAcidBase();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving General Acid-Base Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAcidBaseMathematicalWorkbook({
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

        workbook.solveAcidBaseProblem({
            problem: problem.problem,
            problemType: problem.type,
            ...problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solvepHCalculationsRelatedProblems() {
    const problems = generateRelatedpHCalculations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving pH Calculation Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAcidBaseMathematicalWorkbook({
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

        workbook.solveAcidBaseProblem({
            problem: problem.problem,
            problemType: problem.type,
            ...problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveBuffersRelatedProblems() {
    const problems = generateRelatedBuffers();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Buffer Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAcidBaseMathematicalWorkbook({
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

        workbook.solveAcidBaseProblem({
            problem: problem.problem,
            problemType: problem.type,
            ...problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveTitrationsRelatedProblems() {
    const problems = generateRelatedTitrations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Titration Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAcidBaseMathematicalWorkbook({
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

        workbook.solveAcidBaseProblem({
            problem: problem.problem,
            problemType: problem.type,
            ...problem.parameters,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solvePolyproticAcidsRelatedProblems() {
    const problems = generateRelatedPolyproticAcids();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polyprotic Acid Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAcidBaseMathematicalWorkbook({
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

        workbook.solveAcidBaseProblem({
            problem: problem.problem,
            problemType: problem.type,
            ...problem.parameters,
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

async function generateComprehensiveAcidBaseDocument() {
    console.log('Generating Comprehensive Acid-Base Chemistry Workbook...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Acid-Base Chemistry Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Enhanced Explanations',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'pH Calculations, Buffers, Titrations, and Polyprotic Acids',
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

    // Part I: General Acid-Base
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: General Acid-Base Chemistry (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const acidBaseProblems = generateRelatedAcidBase();
    acidBaseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: pH Calculations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: pH Calculations (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const pHProblems = generateRelatedpHCalculations();
    pHProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 7}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Buffer Solutions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Buffer Solutions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bufferProblems = generateRelatedBuffers();
    bufferProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 13}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Titrations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Acid-Base Titrations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const titrationProblems = generateRelatedTitrations();
    titrationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Polyprotic Acids
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Polyprotic Acids (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polyproticProblems = generateRelatedPolyproticAcids();
    polyproticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: GENERAL ACID-BASE ==============
    console.log('\nProcessing Part I: General Acid-Base Chemistry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: General Acid-Base Chemistry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const acidBaseSolved = solveAcidBaseRelatedProblems();
    acidBaseSolved.forEach((solved, index) => {
        console.log(`  Adding General Acid-Base Problem ${index + 1} to document...`);

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

    // ============== PART II: pH CALCULATIONS ==============
    console.log('\nProcessing Part II: pH Calculations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: pH Calculations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const pHSolved = solvepHCalculationsRelatedProblems();
    pHSolved.forEach((solved, index) => {
        console.log(`  Adding pH Calculation Problem ${index + 1} to document...`);

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

    // ============== PART III: BUFFER SOLUTIONS ==============
    console.log('\nProcessing Part III: Buffer Solutions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Buffer Solutions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bufferSolved = solveBuffersRelatedProblems();
    bufferSolved.forEach((solved, index) => {
        console.log(`  Adding Buffer Problem ${index + 1} to document...`);

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

    // ============== PART IV: TITRATIONS ==============
    console.log('\nProcessing Part IV: Acid-Base Titrations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Acid-Base Titrations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const titrationSolved = solveTitrationsRelatedProblems();
    titrationSolved.forEach((solved, index) => {
        console.log(`  Adding Titration Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 20}: ${solved.problem.scenario}`,
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

    // ============== PART V: POLYPROTIC ACIDS ==============
    console.log('\nProcessing Part V: Polyprotic Acids...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Polyprotic Acids',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polyproticSolved = solvePolyproticAcidsRelatedProblems();
    polyproticSolved.forEach((solved, index) => {
        console.log(`  Adding Polyprotic Acid Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 27}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_acid_base_chemistry_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE ACID-BASE DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 33');
        console.log('    - General Acid-Base: 6 problems');
        console.log('    - pH Calculations: 6 problems');
        console.log('    - Buffer Solutions: 7 problems');
        console.log('    - Titrations: 7 problems');
        console.log('    - Polyprotic Acids: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: General Acid-Base (Problems 1-6)');
        console.log('  • Part II: pH Calculations (Problems 7-12)');
        console.log('  • Part III: Buffer Solutions (Problems 13-19)');
        console.log('  • Part IV: Titrations (Problems 20-26)');
        console.log('  • Part V: Polyprotic Acids (Problems 27-33)');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution with chemical equations');
        console.log('  • Enhanced explanations with multiple perspectives');
        console.log('  • Chemical context and molecular understanding');
        console.log('  • Equilibrium calculations and ICE tables');
        console.log('  • Solution verification with concentration checks');
        console.log('  • Key chemistry concepts and theory');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world applications and context');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Henderson-Hasselbalch applications');
        console.log('  • Titration curves and indicator selection');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveAcidBaseDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});

