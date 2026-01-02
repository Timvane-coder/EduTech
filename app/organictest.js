import { EnhancedOrganicChemistryWorkbook } from './organicchemistryworkbook.js';
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

// ============== EMPIRICAL & MOLECULAR FORMULA - RELATED PROBLEMS GENERATOR ==============

function generateRelatedEmpiricalMolecular() {
    const relatedProblems = [];

    // Problem 1: Simple Empirical Formula from Percentages
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Empirical Formula',
        problem: 'A compound contains 40.0% carbon, 6.7% hydrogen, and 53.3% oxygen by mass. Determine its empirical formula.',
        parameters: {
            percentages: {
                'C': 40.0,
                'H': 6.7,
                'O': 53.3
            }
        },
        type: 'empirical_formula',
        context: { difficulty: 'beginner', topic: 'Empirical Formula Determination' },
        subparts: [
            'Given: C = 40.0%, H = 6.7%, O = 53.3%',
            'Assume 100g sample: C = 40.0g, H = 6.7g, O = 53.3g',
            'Convert to moles:',
            'C: 40.0/12.01 = 3.33 mol',
            'H: 6.7/1.008 = 6.65 mol',
            'O: 53.3/16.00 = 3.33 mol',
            'Divide by smallest (3.33):',
            'C: 3.33/3.33 = 1',
            'H: 6.65/3.33 = 2',
            'O: 3.33/3.33 = 1',
            'Empirical formula: CH₂O'
        ],
        helper: 'Convert percentages to moles, then find simplest ratio',
        solution: 'CH₂O',
        realWorldContext: 'Identifying unknown compounds in laboratory analysis'
    });

    // Problem 2: Empirical Formula with Three Elements
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Three-Element Empirical Formula',
        problem: 'A compound contains 52.2% carbon, 13.0% hydrogen, and 34.8% oxygen. Find the empirical formula.',
        parameters: {
            percentages: {
                'C': 52.2,
                'H': 13.0,
                'O': 34.8
            }
        },
        type: 'empirical_formula',
        context: { difficulty: 'intermediate', topic: 'Multi-Element Empirical Formulas' },
        subparts: [
            'Given: C = 52.2%, H = 13.0%, O = 34.8%',
            'Moles: C = 52.2/12.01 = 4.35 mol',
            'H = 13.0/1.008 = 12.90 mol',
            'O = 34.8/16.00 = 2.175 mol',
            'Divide by smallest (2.175):',
            'C: 4.35/2.175 = 2',
            'H: 12.90/2.175 = 6',
            'O: 2.175/2.175 = 1',
            'Empirical formula: C₂H₆O'
        ],
        helper: 'Always divide by the smallest mole value first',
        solution: 'C₂H₆O',
        realWorldContext: 'Ethanol structure determination'
    });

    // Problem 3: Molecular Formula from Empirical and Mr
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Molecular Formula Determination',
        problem: 'A compound has empirical formula CH₂O and molecular mass 180. Find the molecular formula.',
        parameters: {
            empiricalFormula: 'CH2O',
            Mr: 180
        },
        type: 'molecular_formula',
        context: { difficulty: 'intermediate', topic: 'Molecular Formula Calculation' },
        subparts: [
            'Given: Empirical formula = CH₂O, Mr = 180',
            'Calculate empirical formula mass:',
            'CH₂O = 12.01 + 2(1.008) + 16.00 = 30.03',
            'Find multiplier n:',
            'n = Mr / Empirical mass = 180 / 30.03 = 6',
            'Molecular formula = (CH₂O)₆',
            'Molecular formula = C₆H₁₂O₆'
        ],
        helper: 'Molecular formula = (Empirical formula)ₙ where n = Mr/empirical mass',
        solution: 'C₆H₁₂O₆',
        realWorldContext: 'Glucose structure determination'
    });

    // Problem 4: Empirical Formula Requiring Ratio Simplification
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Ratio Simplification',
        problem: 'A compound contains 85.7% carbon and 14.3% hydrogen by mass. Find its empirical formula.',
        parameters: {
            percentages: {
                'C': 85.7,
                'H': 14.3
            }
        },
        type: 'empirical_formula',
        context: { difficulty: 'intermediate', topic: 'Ratio Simplification Techniques' },
        subparts: [
            'Given: C = 85.7%, H = 14.3%',
            'Moles: C = 85.7/12.01 = 7.14 mol',
            'H = 14.3/1.008 = 14.19 mol',
            'Divide by smallest (7.14):',
            'C: 7.14/7.14 = 1.00',
            'H: 14.19/7.14 = 1.99 ≈ 2',
            'Empirical formula: CH₂'
        ],
        helper: 'Round ratios to nearest whole number if very close (within 0.1)',
        solution: 'CH₂',
        realWorldContext: 'Alkene homologous series base unit'
    });

    // Problem 5: Molecular Formula with Larger Multiplier
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Large Multiplier Molecular Formula',
        problem: 'A compound has empirical formula CH and Mr = 78. Determine the molecular formula.',
        parameters: {
            empiricalFormula: 'CH',
            Mr: 78
        },
        type: 'molecular_formula',
        context: { difficulty: 'intermediate', topic: 'Benzene-Type Compounds' },
        subparts: [
            'Given: Empirical formula = CH, Mr = 78',
            'Empirical mass = 12.01 + 1.008 = 13.02',
            'Multiplier n = 78 / 13.02 = 6',
            'Molecular formula = (CH)₆ = C₆H₆'
        ],
        helper: 'Higher multipliers often indicate aromatic compounds',
        solution: 'C₆H₆',
        realWorldContext: 'Benzene structure'
    });

    // Problem 6: Empirical Formula from Mass Data
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Empirical Formula from Masses',
        problem: 'A 10.0g sample contains 4.00g carbon, 0.67g hydrogen, and 5.33g oxygen. Find the empirical formula.',
        parameters: {
            masses: {
                'C': 4.00,
                'H': 0.67,
                'O': 5.33
            }
        },
        type: 'empirical_formula',
        context: { difficulty: 'beginner', topic: 'Mass-Based Empirical Formula' },
        subparts: [
            'Given masses: C = 4.00g, H = 0.67g, O = 5.33g',
            'Convert to moles:',
            'C: 4.00/12.01 = 0.333 mol',
            'H: 0.67/1.008 = 0.665 mol',
            'O: 5.33/16.00 = 0.333 mol',
            'Divide by smallest (0.333):',
            'C: 1, H: 2, O: 1',
            'Empirical formula: CH₂O'
        ],
        helper: 'Use actual masses directly in n = m/Ar formula',
        solution: 'CH₂O',
        realWorldContext: 'Laboratory analysis from combustion data'
    });

    // Problem 7: Hydrocarbon Molecular Formula
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Hydrocarbon Molecular Formula',
        problem: 'A hydrocarbon has empirical formula C₂H₅ and Mr = 58. Find the molecular formula.',
        parameters: {
            empiricalFormula: 'C2H5',
            Mr: 58
        },
        type: 'molecular_formula',
        context: { difficulty: 'beginner', topic: 'Hydrocarbon Structure' },
        subparts: [
            'Given: C₂H₅, Mr = 58',
            'Empirical mass = 2(12.01) + 5(1.008) = 29.06',
            'n = 58 / 29.06 = 2',
            'Molecular formula = (C₂H₅)₂ = C₄H₁₀'
        ],
        helper: 'Hydrocarbons contain only C and H',
        solution: 'C₄H₁₀',
        realWorldContext: 'Butane gas structure'
    });

    return relatedProblems;
}

// ============== COMBUSTION ANALYSIS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCombustion() {
    const relatedProblems = [];

    // Problem 1: Simple Hydrocarbon Combustion
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Hydrocarbon Combustion',
        problem: 'When 0.300g of a hydrocarbon is burned, 0.880g CO₂ and 0.540g H₂O are produced. Find the empirical formula.',
        parameters: {
            compoundMass: 0.300,
            CO2mass: 0.880,
            H2Omass: 0.540,
            containsOxygen: false
        },
        type: 'combustion_analysis',
        context: { difficulty: 'beginner', topic: 'Hydrocarbon Combustion Analysis' },
        subparts: [
            'Given: 0.300g compound → 0.880g CO₂ + 0.540g H₂O',
            'Moles CO₂ = 0.880/44.01 = 0.0200 mol',
            'Moles C = 0.0200 mol (1:1 ratio)',
            'Moles H₂O = 0.540/18.02 = 0.0300 mol',
            'Moles H = 2 × 0.0300 = 0.0600 mol',
            'Ratio C:H = 0.0200:0.0600 = 1:3',
            'Empirical formula: CH₃'
        ],
        helper: 'For hydrocarbons: all C → CO₂, all H → H₂O',
        solution: 'CH₃',
        realWorldContext: 'Methane gas analysis'
    });

    // Problem 2: Combustion with Oxygen in Compound
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Combustion with Oxygen',
        problem: 'Burning 0.500g of an organic compound produces 1.100g CO₂ and 0.450g H₂O. Find the empirical formula.',
        parameters: {
            compoundMass: 0.500,
            CO2mass: 1.100,
            H2Omass: 0.450,
            containsOxygen: true
        },
        type: 'combustion_analysis',
        context: { difficulty: 'intermediate', topic: 'Oxygenated Compound Combustion' },
        subparts: [
            'Moles CO₂ = 1.100/44.01 = 0.0250 mol → C = 0.0250 mol',
            'Mass C = 0.0250 × 12.01 = 0.300g',
            'Moles H₂O = 0.450/18.02 = 0.0250 mol → H = 0.0500 mol',
            'Mass H = 0.0500 × 1.008 = 0.0504g',
            'Mass O = 0.500 - 0.300 - 0.0504 = 0.150g',
            'Moles O = 0.150/16.00 = 0.00938 mol',
            'Ratio C:H:O = 0.0250:0.0500:0.00938',
            'Divide by smallest: 2.67:5.33:1 ≈ 8:16:3',
            'Empirical formula: C₈H₁₆O₃'
        ],
        helper: 'Find oxygen by subtracting C and H masses from compound mass',
        solution: 'C₈H₁₆O₃',
        realWorldContext: 'Organic acid or ester analysis'
    });

    // Problem 3: Complete Combustion of Alcohol
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alcohol Combustion',
        problem: '0.920g of an alcohol produces 1.760g CO₂ and 1.080g H₂O upon combustion. Determine the empirical formula.',
        parameters: {
            compoundMass: 0.920,
            CO2mass: 1.760,
            H2Omass: 1.080,
            containsOxygen: true
        },
        type: 'combustion_analysis',
        context: { difficulty: 'intermediate', topic: 'Alcohol Structure Determination' },
        subparts: [
            'Moles C from CO₂: 1.760/44.01 = 0.0400 mol',
            'Moles H from H₂O: 2 × (1.080/18.02) = 0.120 mol',
            'Mass C = 0.0400 × 12.01 = 0.480g',
            'Mass H = 0.120 × 1.008 = 0.121g',
            'Mass O = 0.920 - 0.480 - 0.121 = 0.319g',
            'Moles O = 0.319/16.00 = 0.0199 mol',
            'Ratio: C:H:O = 0.0400:0.120:0.0199 = 2:6:1',
            'Empirical formula: C₂H₆O'
        ],
        helper: 'Alcohols always contain oxygen - calculate by difference',
        solution: 'C₂H₆O',
        realWorldContext: 'Ethanol identification'
    });

    // Problem 4: Larger Hydrocarbon Analysis
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Hydrocarbon',
        problem: 'Combustion of 1.200g hydrocarbon yields 3.960g CO₂ and 1.620g H₂O. Find the empirical formula.',
        parameters: {
            compoundMass: 1.200,
            CO2mass: 3.960,
            H2Omass: 1.620,
            containsOxygen: false
        },
        type: 'combustion_analysis',
        context: { difficulty: 'intermediate', topic: 'Large Molecule Combustion' },
        subparts: [
            'Moles C = 3.960/44.01 = 0.0900 mol',
            'Moles H = 2 × (1.620/18.02) = 0.180 mol',
            'Ratio C:H = 0.0900:0.180 = 1:2',
            'Empirical formula: CH₂'
        ],
        helper: 'CH₂ is common for alkenes and cycloalkanes',
        solution: 'CH₂',
        realWorldContext: 'Alkene series identification'
    });

    // Problem 5: Nitrogen-Containing Compound
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Nitrogen Compound Combustion',
        problem: '0.750g of a compound produces 1.650g CO₂, 0.675g H₂O. The compound contains C, H, O, and N. If nitrogen is 18.7% by mass, find the empirical formula.',
        parameters: {
            compoundMass: 0.750,
            CO2mass: 1.650,
            H2Omass: 0.675,
            containsOxygen: true,
            nitrogenPercent: 18.7
        },
        type: 'combustion_analysis',
        context: { difficulty: 'advanced', topic: 'Nitrogen-Containing Organic Compounds' },
        subparts: [
            'Moles C = 1.650/44.01 = 0.0375 mol',
            'Mass C = 0.0375 × 12.01 = 0.450g',
            'Moles H = 2 × (0.675/18.02) = 0.0750 mol',
            'Mass H = 0.0750 × 1.008 = 0.0756g',
            'Mass N = 0.750 × 0.187 = 0.140g',
            'Moles N = 0.140/14.01 = 0.00999 mol',
            'Mass O = 0.750 - 0.450 - 0.0756 - 0.140 = 0.0844g',
            'Moles O = 0.0844/16.00 = 0.00528 mol',
            'Ratio C:H:N:O = 0.0375:0.0750:0.00999:0.00528',
            'Simplify: ≈ 7:14:2:1',
            'Empirical formula: C₇H₁₄N₂O'
        ],
        helper: 'For N-containing compounds, use given % or separate N analysis',
        solution: 'C₇H₁₄N₂O',
        realWorldContext: 'Amino acid or protein fragment analysis'
    });

    // Problem 6: Small Molecule Complete Analysis
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Organic Acid',
        problem: '0.600g of a compound gives 0.880g CO₂ and 0.360g H₂O. Find the empirical formula.',
        parameters: {
            compoundMass: 0.600,
            CO2mass: 0.880,
            H2Omass: 0.360,
            containsOxygen: true
        },
        type: 'combustion_analysis',
        context: { difficulty: 'beginner', topic: 'Carboxylic Acid Analysis' },
        subparts: [
            'Moles C = 0.880/44.01 = 0.0200 mol',
            'Moles H = 2 × (0.360/18.02) = 0.0400 mol',
            'Mass C = 0.240g, Mass H = 0.0403g',
            'Mass O = 0.600 - 0.240 - 0.0403 = 0.320g',
            'Moles O = 0.320/16.00 = 0.0200 mol',
            'Ratio C:H:O = 1:2:1',
            'Empirical formula: CH₂O'
        ],
        helper: 'CH₂O often indicates aldehydes, acids, or sugars',
        solution: 'CH₂O',
        realWorldContext: 'Formaldehyde or formic acid structure'
    });

    return relatedProblems;
}

// ============== STOICHIOMETRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedStoichiometry() {
    const relatedProblems = [];

    // Problem 1: Simple Combustion Stoichiometry
    /**relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Ethanol Combustion Mass',
        problem: 'Calculate the mass of CO₂ produced when 23g of ethanol (C₂H₅OH) undergoes complete combustion.',
        parameters: {
            equation: 'C2H5OH + 3O2 -> 2CO2 + 3H2O',
            givenSubstance: 'C2H5OH',
            givenAmount: 23,
            givenUnit: 'g',
            findSubstance: 'CO2'
        },
        type: 'stoichiometry',
        context: { difficulty: 'beginner', topic: 'Combustion Stoichiometry' },
        subparts: [
            'Given: 23g C₂H₅OH',
            'Equation: C₂H₅OH + 3O₂ → 2CO₂ + 3H₂O',
            'Mr(C₂H₅OH) = 2(12) + 6(1) + 16 = 46',
            'Moles ethanol = 23/46 = 0.50 mol',
            'Mole ratio: 1 C₂H₅OH : 2 CO₂',
            'Moles CO₂ = 0.50 × 2 = 1.0 mol',
            'Mr(CO₂) = 12 + 2(16) = 44',
            'Mass CO₂ = 1.0 × 44 = 44g'
        ],
        helper: 'Use mole ratios from balanced equation coefficients',
        solution: '44g CO₂',
        realWorldContext: 'Calculating carbon emissions from fuel burning'
    });

    // Problem 2: Esterification Reaction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ester Formation',
        problem: 'What mass of ethyl ethanoate (C₄H₈O₂) can be formed from 60g of ethanoic acid (CH₃COOH)?',
        parameters: {
            equation: 'CH3COOH + C2H5OH -> C4H8O2 + H2O',
            givenSubstance: 'CH3COOH',
            givenAmount: 60,
            givenUnit: 'g',
            findSubstance: 'C4H8O2'
        },
        type: 'stoichiometry',
        context: { difficulty: 'intermediate', topic: 'Esterification Stoichiometry' },
        subparts: [
            'Given: 60g CH₃COOH',
            'Equation: CH₃COOH + C₂H₅OH → C₄H₈O₂ + H₂O',
            'Mr(CH₃COOH) = 12 + 3 + 12 + 16 + 16 + 1 = 60',
            'Moles acid = 60/60 = 1.0 mol',
            'Mole ratio 1:1',
            'Moles ester = 1.0 mol',
            'Mr(C₄H₈O₂) = 4(12) + 8(1) + 2(16) = 88',
            'Mass ester = 1.0 × 88 = 88g'
        ],
        helper: '1:1 mole ratio simplifies calculation',
        solution: '88g C₄H₈O₂',
        realWorldContext: 'Perfume and flavor compound synthesis'
    });

    // Problem 3: Dehydration Reaction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alcohol Dehydration',
        problem: 'Calculate the mass of ethene (C₂H₄) produced from the dehydration of 92g of ethanol (C₂H₅OH).',
        parameters: {
            equation: 'C2H5OH -> C2H4 + H2O',
            givenSubstance: 'C2H5OH',
            givenAmount: 92,
            givenUnit: 'g',
            findSubstance: 'C2H4'
        },
        type: 'stoichiometry',
        context: { difficulty: 'intermediate', topic: 'Dehydration Reactions' },
        subparts: [
            'Given: 92g C₂H₅OH',
            'Equation: C₂H₅OH → C₂H₄ + H₂O',
            'Mr(C₂H₅OH) = 46',
            'Moles ethanol = 92/46 = 2.0 mol',
            'Mole ratio 1:1',
            'Moles ethene = 2.0 mol',
            'Mr(C₂H₄) = 2(12) + 4(1) = 28',
            'Mass ethene = 2.0 × 28 = 56g'
        ],
        helper: 'Dehydration means removing water',
        solution: '56g C₂H₄',
        realWorldContext: 'Industrial ethene production for plastics'
    });

    // Problem 4: Hydrogenation Reaction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alkene Hydrogenation',
        problem: 'How many grams of ethane (C₂H₆) are produced when 56g of ethene (C₂H₄) is completely hydrogenated?',
        parameters: {
            equation: 'C2H4 + H2 -> C2H6',
            givenSubstance: 'C2H4',
            givenAmount: 56,
            givenUnit: 'g',
            findSubstance: 'C2H6'
        },
        type: 'stoichiometry',
        context: { difficulty: 'intermediate', topic: 'Hydrogenation Stoichiometry' },
        subparts: [
            'Given: 56g C₂H₄',
            'Equation: C₂H₄ + H₂ → C₂H₆',
            'Mr(C₂H₄) = 28',
            'Moles ethene = 56/28 = 2.0 mol',
            'Mole ratio 1:1',
            'Moles ethane = 2.0 mol',
            'Mr(C₂H₆) = 2(12) + 6(1) = 30',
            'Mass ethane = 2.0 × 30 = 60g'
        ],
        helper: 'Hydrogenation adds H₂ across double bond',
        solution: '60g C₂H₆',
        realWorldContext: 'Margarine production (vegetable oil hydrogenation)'
    });

    // Problem 5: Halogenation Reaction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Halogenation of Alkane',
        problem: 'Calculate the mass of chloromethane (CH₃Cl) produced when 16g of methane reacts with excess chlorine.',
        parameters: {
            equation: 'CH4 + Cl2 -> CH3Cl + HCl',
            givenSubstance: 'CH4',
            givenAmount: 16,
            givenUnit: 'g',
            findSubstance: 'CH3Cl'
        },
        type: 'stoichiometry',
        context: { difficulty: 'advanced', topic: 'Substitution Reaction Stoichiometry' },
        subparts: [
            'Given: 16g CH₄',
            'Equation: CH₄ + Cl₂ → CH₃Cl + HCl',
            'Mr(CH₄) = 12 + 4(1) = 16',
            'Moles methane = 16/16 = 1.0 mol',
            'Mole ratio 1:1',
            'Moles CH₃Cl = 1.0 mol',
            'Mr(CH₃Cl) = 12 + 3(1) + 35.5 = 50.5',
            'Mass CH₃Cl = 1.0 × 50.5 = 50.5g'
        ],
        helper: 'Free radical substitution replaces H with Cl',
        solution: '50.5g CH₃Cl',
        realWorldContext:'Chlorinated solvent production'
    });

    // Problem 6: Neutralization Reaction
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Acid-Base Neutralization',
        problem: 'What mass of sodium ethanoate (CH₃COONa) forms when 60g of ethanoic acid reacts with excess sodium hydroxide?',
        parameters: {
            equation: 'CH3COOH + NaOH -> CH3COONa + H2O',
            givenSubstance: 'CH3COOH',
            givenAmount: 60,
            givenUnit: 'g',
            findSubstance: 'CH3COONa'
        },
        type: 'stoichiometry',
        context: { difficulty: 'beginner', topic: 'Neutralization Stoichiometry' },
        subparts: [
            'Given: 60g CH₃COOH',
            'Equation: CH₃COOH + NaOH → CH₃COONa + H₂O',
            'Mr(CH₃COOH) = 60',
            'Moles acid = 60/60 = 1.0 mol',
            'Mole ratio 1:1',
            'Moles CH₃COONa = 1.0 mol',
            'Mr(CH₃COONa) = 60 + 23 = 83',
            'Mass = 1.0 × 83 = 83g'
        ],
        helper: 'Neutralization is 1:1 for monobasic acids',
        solution: '83g CH₃COONa',
        realWorldContext: 'Food preservative production'
    });

    // Problem 7: Polymerization Stoichiometry
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Addition Polymerization',
        problem: 'How many moles of ethene are needed to produce 1.4kg of polyethene, assuming 100% conversion?',
        parameters: {
            equation: 'n(C2H4) -> (C2H4)n',
            givenSubstance: '(C2H4)n',
            givenAmount: 1400,
            givenUnit: 'g',
            findSubstance: 'C2H4'
        },
        type: 'stoichiometry',
        context: { difficulty: 'advanced', topic: 'Polymerization Stoichiometry' },
        subparts: [
            'Given: 1400g polyethene',
            'Each monomer unit = C₂H₄ = 28g/mol',
            'Polyethene mass = n × 28 (where n = number of monomers)',
            'n = 1400/28 = 50 mol',
            'Therefore 50 moles of ethene are needed'
        ],
        helper: 'Each polymer unit mass equals monomer mass in addition polymers',
        solution: '50 mol C₂H₄',
        realWorldContext: 'Industrial plastic production calculations'
    });
    */


    return relatedProblems;
}

// ============== PERCENTAGE YIELD - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPercentageYield() {
    const relatedProblems = [];

    // Problem 1: Simple Percentage Yield
    /**relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Percentage Yield',
        problem: 'In an esterification, the theoretical yield is 88g but only 70.4g is obtained. Calculate the percentage yield.',
        parameters: {
            actualYield: 70.4,
            theoreticalYield: 88,
            calculate: 'percentage'
        },
        type: 'percentage_yield',
        context: { difficulty: 'beginner', topic: 'Percentage Yield Calculation' },
        subparts: [
            'Given: Actual yield = 70.4g, Theoretical yield = 88g',
            'Formula: % yield = (actual/theoretical) × 100',
            '% yield = (70.4/88) × 100',
            '% yield = 0.80 × 100',
            '% yield = 80%'
        ],
        helper: 'Percentage yield = (actual ÷ theoretical) × 100',
        solution: '80%',
        realWorldContext: 'Measuring reaction efficiency in synthesis'
    });

    // Problem 2: Finding Actual Yield
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Actual Yield',
        problem: 'A reaction has a theoretical yield of 120g and a percentage yield of 75%. Calculate the actual yield.',
        parameters: {
            actualYield: null,
            theoreticalYield: 120,
            percentageYield: 75,
            calculate: 'actual'
        },
        type: 'percentage_yield',
        context: { difficulty: 'intermediate', topic: 'Actual Yield Determination' },
        subparts: [
            'Given: Theoretical = 120g, % yield = 75%',
            'Formula: Actual = (% yield/100) × theoretical',
            'Actual = (75/100) × 120',
            'Actual = 0.75 × 120',
            'Actual = 90g'
        ],
        helper: 'Actual yield = (percentage yield ÷ 100) × theoretical yield',
        solution: '90g',
        realWorldContext: 'Predicting realistic product amounts'
    });

    // Problem 3: Finding Theoretical Yield
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Theoretical Yield',
        problem: 'A reaction gave 45g of product with a 60% yield. What was the theoretical yield?',
        parameters: {
            actualYield: 45,
            theoreticalYield: null,
            percentageYield: 60,
            calculate: 'theoretical'
        },
        type: 'percentage_yield',
        context: { difficulty: 'intermediate', topic: 'Theoretical Yield Calculation' },
        subparts: [
            'Given: Actual = 45g, % yield = 60%',
            'Formula: Theoretical = (actual × 100)/% yield',
            'Theoretical = (45 × 100)/60',
            'Theoretical = 4500/60',
            'Theoretical = 75g'
        ],
        helper: 'Theoretical yield = (actual yield × 100) ÷ percentage yield',
        solution: '75g',
        realWorldContext: 'Determining maximum possible product from reaction data'
    });

    // Problem 4: Multi-Step Yield Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multi-Step Synthesis Yield',
        problem: 'A two-step synthesis has yields of 80% and 75%. If starting with 100g, what is the final actual yield?',
        parameters: {
            startingMass: 100,
            step1Yield: 80,
            step2Yield: 75,
            calculate: 'overall'
        },
        type: 'percentage_yield',
        context: { difficulty: 'advanced', topic: 'Multi-Step Yield Calculations' },
        subparts: [
            'Given: Starting mass = 100g, Step 1 = 80%, Step 2 = 75%',
            'After step 1: 100 × 0.80 = 80g',
            'After step 2: 80 × 0.75 = 60g',
            'Overall yield = (60/100) × 100 = 60%',
            'Or: Overall = 0.80 × 0.75 = 0.60 = 60%'
        ],
        helper: 'Multiply yields as decimals for multi-step reactions',
        solution: '60g (60% overall yield)',
        realWorldContext: 'Complex pharmaceutical synthesis efficiency'
    });

    // Problem 5: Yield with Stoichiometry
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Yield from Stoichiometry',
        problem: 'Burning 46g ethanol should produce 88g CO₂. If only 70.4g is obtained, what is the percentage yield?',
        parameters: {
            reactantMass: 46,
            theoreticalYield: 88,
            actualYield: 70.4,
            calculate: 'percentage'
        },
        type: 'percentage_yield',
        context: { difficulty: 'intermediate', topic: 'Combined Stoichiometry and Yield' },
        subparts: [
            'Theoretical yield from stoichiometry = 88g CO₂',
            'Actual yield obtained = 70.4g',
            '% yield = (70.4/88) × 100',
            '% yield = 80%'
        ],
        helper: 'First calculate theoretical from stoichiometry, then find % yield',
        solution: '80%',
        realWorldContext: 'Real-world combustion efficiency'
    });

    // Problem 6: Excellent Yield Analysis
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'High Yield Reaction',
        problem: 'A reaction produced 94g of product from a theoretical 100g. Calculate and interpret the percentage yield.',
        parameters: {
            actualYield: 94,
            theoreticalYield: 100,
            calculate: 'percentage'
        },
        type: 'percentage_yield',
        context: { difficulty: 'beginner', topic: 'Yield Interpretation' },
        subparts: [
            'Given: Actual = 94g, Theoretical = 100g',
            '% yield = (94/100) × 100 = 94%',
            'This is an excellent yield (>90%)',
            'Indicates efficient reaction conditions'
        ],
        helper: 'Yields > 90% are considered excellent',
        solution: '94% (Excellent)',
        realWorldContext: 'Optimized industrial process efficiency'
    });

    // Problem 7: Poor Yield Investigation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Low Yield Problem',
        problem: 'An esterification produced 35g from a theoretical 100g. Calculate the yield and suggest reasons for the low value.',
        parameters: {
            actualYield: 35,
            theoreticalYield: 100,
            calculate: 'percentage'
        },
        type: 'percentage_yield',
        context: { difficulty: 'intermediate', topic: 'Yield Analysis and Improvement' },
        subparts: [
            'Given: Actual = 35g, Theoretical = 100g',
            '% yield = (35/100) × 100 = 35%',
            'This is poor yield (<50%)',
            'Possible reasons:',
            '- Incomplete reaction (equilibrium)',
            '- Side reactions',
            '- Product loss during purification',
            '- Reversible reaction not driven to completion'
        ],
        helper: 'Low yields indicate need for optimization',
        solution: '35% (Poor - needs optimization)',
        realWorldContext: 'Identifying reaction problems in lab'
    });
    */

    return relatedProblems;
}

// ============== HOMOLOGOUS SERIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedHomologousSeries() {
    const relatedProblems = [];

    // Problem 1: Alkane Series
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Alkane Molecular Formula',
        problem: 'Find the molecular formula and Mr of the alkane with n = 5.',
        parameters: {
            series: 'alkane',
            n: 5,
            property: 'molecular_formula'
        },
        type: 'homologous_series',
        context: { difficulty: 'beginner', topic: 'Alkane Series' },
        subparts: [
            'Given: Alkane, n = 5',
            'General formula: CₙH₂ₙ₊₂',
            'Substitute n = 5:',
            'C = 5',
            'H = 2(5) + 2 = 12',
            'Molecular formula: C₅H₁₂',
            'Mr = 5(12) + 12(1) = 60 + 12 = 72'
        ],
        helper: 'Alkanes: CₙH₂ₙ₊₂',
        solution: 'C₅H₁₂, Mr = 72',
        realWorldContext: 'Pentane in petroleum products'
    });

    // Problem 2: Alkene Series
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Alkene Molecular Formula',
        problem: 'Determine the molecular formula and Mr of the alkene with n = 4.',
        parameters: {
            series: 'alkene',
            n: 4,
            property: 'molecular_formula'
        },
        type: 'homologous_series',
        context: { difficulty: 'beginner', topic: 'Alkene Series' },
        subparts: [
            'Given: Alkene, n = 4',
            'General formula: CₙH₂ₙ',
            'C = 4, H = 2(4) = 8',
            'Molecular formula: C₄H₈',
            'Mr = 4(12) + 8(1) = 48 + 8 = 56'
        ],
        helper: 'Alkenes: CₙH₂ₙ',
        solution: 'C₄H₈, Mr = 56',
        realWorldContext: 'Butene used in polymer production'
    });

    // Problem 3: Alcohol Series
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alcohol Molecular Formula',
        problem: 'Find the molecular formula and Mr of the alcohol with n = 3.',
        parameters: {
            series: 'alcohol',
            n: 3,
            property: 'molecular_formula'
        },
        type: 'homologous_series',
        context: { difficulty: 'intermediate', topic: 'Alcohol Series' },
        subparts: [
            'Given: Alcohol, n = 3',
            'General formula: CₙH₂ₙ₊₁OH',
            'C = 3, H = 2(3) + 1 + 1 = 8, O = 1',
            'Molecular formula: C₃H₈O or C₃H₇OH',
            'Mr = 3(12) + 8(1) + 16 = 36 + 8 + 16 = 60'
        ],
        helper: 'Alcohols: CₙH₂ₙ₊₁OH',
        solution: 'C₃H₈O, Mr = 60',
        realWorldContext: 'Propanol as solvent'
    });

    // Problem 4: Carboxylic Acid Series
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Carboxylic Acid Formula',
        problem: 'Determine the molecular formula and Mr of the carboxylic acid with n = 2.',
        parameters: {
            series: 'carboxylic_acid',
            n: 2,
            property: 'molecular_formula'
        },
        type: 'homologous_series',
        context: { difficulty: 'intermediate', topic: 'Carboxylic Acid Series' },
        subparts: [
            'Given: Carboxylic acid, n = 2',
            'General formula: CₙH₂ₙO₂',
            'C = 2, H = 2(2) = 4, O = 2',
            'Molecular formula: C₂H₄O₂',
            'Mr = 2(12) + 4(1) + 2(16) = 24 + 4 + 32 = 60'
        ],
        helper: 'Carboxylic acids: CₙH₂ₙO₂',
        solution: 'C₂H₄O₂, Mr = 60',
        realWorldContext: 'Ethanoic acid (vinegar)'
    });

    // Problem 5: Mass Difference Pattern
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Mass Difference in Series',
        problem: 'Calculate the Mr difference between consecutive alkanes (n and n+1). Verify with n=3 and n=4.',
        parameters: {
            series: 'alkane',
            n: 3,
            property: 'mass_difference'
        },
        type: 'homologous_series',
        context: { difficulty: 'intermediate', topic: 'Homologous Series Patterns' },
        subparts: [
            'For n=3: C₃H₈, Mr = 3(12) + 8(1) = 44',
            'For n=4: C₄H₁₀, Mr = 4(12) + 10(1) = 58',
            'Difference: 58 - 44 = 14',
            'This equals CH₂ = 12 + 2(1) = 14',
            'Each member differs by CH₂ unit'
        ],
        helper: 'Each member in series differs by CH₂ (14 mass units)',
        solution: 'Difference = 14 (CH₂ unit)',
        realWorldContext: 'Pattern recognition in mass spectrometry'
    });

    // Problem 6: Identifying Series Member
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Identify Series Member',
        problem: 'An alkene has Mr = 70. What is the value of n and its molecular formula?',
        parameters: {
            series: 'alkene',
            Mr: 70,
            property: 'find_n'
        },
        type: 'homologous_series',
        context: { difficulty: 'advanced', topic: 'Reverse Calculation' },
        subparts: [
            'Given: Alkene, Mr = 70',
            'Formula: CₙH₂ₙ',
            'Mr = n(12) + 2n(1) = 12n + 2n = 14n',
            '14n = 70',
            'n = 70/14 = 5',
            'Molecular formula: C₅H₁₀'
        ],
        helper: 'Set up equation: Mr = formula in terms of n',
        solution: 'n = 5, C₅H₁₀',
        realWorldContext: 'Pentene identification from mass spectrum'
    });

    // Problem 7: Comparing Series
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Compare Alkane and Alkene',
        problem: 'Compare the Mr of the alkane and alkene both with n = 6. Explain the difference.',
        parameters: {
            series: 'compare',
            n: 6,
            property: 'comparison'
        },
        type: 'homologous_series',
        context: { difficulty: 'intermediate', topic: 'Series Comparison' },
        subparts: [
            'Alkane (n=6): C₆H₁₄',
            'Mr = 6(12) + 14(1) = 72 + 14 = 86',
            'Alkene (n=6): C₆H₁₂',
            'Mr = 6(12) + 12(1) = 72 + 12 = 84',
            'Difference: 86 - 84 = 2',
            'Alkene has 2 fewer H (double bond replaces 2 H)'
        ],
        helper: 'Double bond means 2 fewer hydrogen atoms',
        solution: 'Alkane: 86, Alkene: 84, Difference: 2',
        realWorldContext: 'Understanding saturation vs unsaturation'
    });

    return relatedProblems;
}

// ============== POLYMER CHEMISTRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolymers() {
    const relatedProblems = [];

    // Problem 1: Simple Polymer Mass
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Polyethene Mass Calculation',
        problem: 'Calculate the Mr of polyethene with degree of polymerization n = 1000.',
        parameters: {
            monomer: 'C2H4',
            repeatUnit: 'C2H4',
            degreeOfPolymerization: 1000,
            calculate: 'polymerMass'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'beginner', topic: 'Addition Polymer Mass' },
        subparts: [
            'Given: Monomer = C₂H₄, n = 1000',
            'For addition polymers: repeat unit = monomer',
            'Mr(C₂H₄) = 2(12) + 4(1) = 28',
            'Mr(polymer) = n × Mr(repeat unit)',
            'Mr(polymer) = 1000 × 28 = 28,000'
        ],
        helper: 'For addition polymers: polymer Mr = n × monomer Mr',
        solution: 'Mr = 28,000',
        realWorldContext: 'Plastic bag molecular weight'
    });

    // Problem 2: Degree of Polymerization
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Find Degree of Polymerization',
        problem: 'A sample of polypropene has Mr = 42,000. Calculate the degree of polymerization.',
        parameters: {
            monomer: 'C3H6',
            repeatUnit: 'C3H6',
            polymerMass: 42000,
            calculate: 'degreeOfPolymerization'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'intermediate', topic: 'Calculating Polymerization Degree' },
        subparts: [
            'Given: Polypropene, Mr = 42,000',
            'Monomer: C₃H₆',
            'Mr(C₃H₆) = 3(12) + 6(1) = 42',
            'n = Mr(polymer) / Mr(monomer)',
            'n = 42,000 / 42 = 1,000'
        ],
        helper: 'n = polymer Mr ÷ repeat unit Mr',
        solution: 'n = 1,000',
        realWorldContext: 'Determining polymer chain length'
    });

    // Problem 3: PVC Polymer Analysis
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'PVC Polymer Mass',
        problem: 'Calculate the Mr of PVC (polyvinyl chloride) with n = 800. Monomer is C₂H₃Cl.',
        parameters: {
            monomer: 'C2H3Cl',
            repeatUnit: 'C2H3Cl',
            degreeOfPolymerization: 800,
            calculate: 'polymerMass'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'intermediate', topic: 'Chlorinated Polymer' },
        subparts: [
            'Given: Monomer = C₂H₃Cl, n = 800',
            'Mr(C₂H₃Cl) = 2(12) + 3(1) + 35.5',
            '= 24 + 3 + 35.5 = 62.5',
            'Mr(polymer) = 800 × 62.5 = 50,000'
        ],
        helper: 'Remember to include halogen atomic mass',
        solution: 'Mr = 50,000',
        realWorldContext: 'PVC pipe molecular weight'
    });

    // Problem 4: Polystyrene Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polystyrene Analysis',
        problem: 'Polystyrene (C₈H₈)ₙ has Mr = 104,000. Find n and the number of hydrogen atoms in the polymer.',
        parameters: {
            monomer: 'C8H8',
            repeatUnit: 'C8H8',
            polymerMass: 104000,
            calculate: 'degreeOfPolymerization'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'advanced', topic: 'Aromatic Polymer Analysis' },
        subparts: [
            'Given: (C₈H₈)ₙ, Mr = 104,000',
            'Mr(C₈H₈) = 8(12) + 8(1) = 104',
            'n = 104,000 / 104 = 1,000',
            'Number of H atoms = 8 × 1,000 = 8,000'
        ],
        helper: 'Multiply atoms per unit by n for total count',
        solution: 'n = 1,000, H atoms = 8,000',
        realWorldContext: 'Styrofoam cup molecular structure'
    });

    // Problem 5: Condensation Polymer
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Condensation Polymer Mass',
        problem: 'Nylon-6,6 forms from hexanedioic acid (C₆H₁₀O₄) and hexane-1,6-diamine (C₆H₁₆N₂). If n = 500, find polymer Mr. (Each link loses H₂O)',
        parameters: {
            monomer1: 'C6H10O4',
            monomer2: 'C6H16N2',
            degreeOfPolymerization: 500,
            calculate: 'condensationPolymer'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'advanced', topic: 'Condensation Polymerization' },
        subparts: [
            'Monomers: C₆H₁₀O₄ + C₆H₁₆N₂',
            'Combined: C₁₂H₂₆N₂O₄',
            'Lose H₂O per link: -18',
            'Repeat unit: C₁₂H₂₄N₂O₃',
            'Mr(repeat unit) = 12(12) + 24(1) + 2(14) + 3(16)',
            '= 144 + 24 + 28 + 48 = 244',
            'Mr(polymer) = 500 × 244 = 122,000'
        ],
        helper: 'Condensation polymers lose small molecule (usually H₂O)',
        solution: 'Mr = 122,000',
        realWorldContext: 'Nylon clothing and ropes'
    });

    // Problem 6: PTFE Polymer
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'PTFE (Teflon) Calculation',
        problem: 'Calculate the Mr of PTFE (polytetrafluoroethene) with n = 2000. Monomer is C₂F₄.',
        parameters: {
            monomer: 'C2F4',
            repeatUnit: 'C2F4',
            degreeOfPolymerization: 2000,
            calculate: 'polymerMass'
        },
        type: 'polymer_calculation',
        context: { difficulty: 'intermediate', topic: 'Fluoropolymer' },
        subparts: [
            'Given: C₂F₄, n = 2000',
            'Mr(C₂F₄) = 2(12) + 4(19) = 24 + 76 = 100',
            'Mr(polymer) = 2000 × 100 = 200,000'
        ],
        helper: 'Fluorine has Mr = 19',
        solution: 'Mr = 200,000',
        realWorldContext: 'Non-stick cooking pan coating'
    });

    // Problem 7: Comparing Polymer Sizes
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Compare Polymer Molecular Weights',
        problem: 'Compare the Mr of polyethene and polypropene, both with n = 500.',
        parameters: {
            series: 'compare_polymers',
            n: 500,
            monomers: ['C2H4', 'C3H6']
        },
        type: 'polymer_calculation',
        context: { difficulty: 'beginner', topic: 'Polymer Comparison' },
        subparts: [
            'Polyethene: (C₂H₄)₅₀₀',
            'Mr = 500 × 28 = 14,000',
            'Polypropene: (C₃H₆)₅₀₀',
            'Mr = 500 × 42 = 21,000',
            'Difference = 21,000 - 14,000 = 7,000',
            'Or 500 × (42-28) = 500 × 14 = 7,000'
        ],
        helper: 'Each CH₂ unit adds 14 to Mr',
        solution: 'Polyethene: 14,000; Polypropene: 21,000',
        realWorldContext: 'Different plastic types have different properties'
    });

    return relatedProblems;
}

// ============== GAS VOLUME & CONCENTRATION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedGasVolumeConcentration() {
    const relatedProblems = [];

    // Problem 1: Simple Gas Volume
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'CO₂ Volume at r.t.p.',
        problem: 'Calculate the volume of 88g of CO₂ at room temperature and pressure (r.t.p.).',
        parameters: {
            substance: 'CO2',
            amount: 88,
            unit: 'g',
            calculate: 'volume',
            temperature: 'rtp'
        },
        type: 'gas_volume',
        context: { difficulty: 'beginner', topic: 'Gas Volume Calculations' },
        subparts: [
            'Given: 88g CO₂ at r.t.p.',
            'Mr(CO₂) = 12 + 2(16) = 44',
            'Moles = 88/44 = 2.0 mol',
            'At r.t.p.: 1 mol = 24 dm³',
            'Volume = 2.0 × 24 = 48 dm³'
        ],
        helper: 'At r.t.p., 1 mole of gas = 24 dm³',
        solution: '48 dm³',
        realWorldContext: 'Carbon dioxide storage and transport'
    });

    // Problem 2: Mass from Volume
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mass from Gas Volume',
        problem: 'What mass of methane (CH₄) occupies 120 dm³ at r.t.p.?',
        parameters: {
            substance: 'CH4',
            amount: 120,
            unit: 'dm3',
            calculate: 'mass',
            temperature: 'rtp'
        },
        type: 'gas_volume',
        context: { difficulty: 'intermediate', topic: 'Mass from Volume' },
        subparts: [
            'Given: 120 dm³ CH₄ at r.t.p.',
            'Moles = 120/24 = 5.0 mol',
            'Mr(CH₄) = 12 + 4(1) = 16',
            'Mass = 5.0 × 16 = 80g'
        ],
        helper: 'Moles = volume (dm³) ÷ 24 at r.t.p.',
        solution: '80g',
        realWorldContext: 'Natural gas quantity calculations'
    });

    // Problem 3: Volume from Moles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Volume from Moles',
        problem: 'Calculate the volume of 0.5 mol of oxygen gas at r.t.p.',
        parameters: {
            substance: 'O2',
            amount: 0.5,
            unit: 'mol',
            calculate: 'volume',
            temperature: 'rtp'
        },
        type: 'gas_volume',
        context: { difficulty: 'beginner', topic: 'Moles to Volume Conversion' },
        subparts: [
            'Given: 0.5 mol O₂ at r.t.p.',
            'Volume = moles × 24 dm³',
            'Volume = 0.5 × 24 = 12 dm³'
        ],
        helper: 'Volume (dm³) = moles × 24 at r.t.p.',
        solution: '12 dm³',
        realWorldContext: 'Oxygen tank capacity planning'
    });

    // Problem 4: Concentration Calculation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Concentration',
        problem: 'Find the concentration of a solution containing 40g of NaOH in 500 cm³ of solution.',
        parameters: {
            substance: 'NaOH',
            mass: 40,
            volume: 0.5,
            calculate: 'concentration'
        },
        type: 'concentration',
        context: { difficulty: 'intermediate', topic: 'Concentration Calculations' },
        subparts: [
            'Given: 40g NaOH in 500 cm³ (0.5 dm³)',
            'Mr(NaOH) = 23 + 16 + 1 = 40',
            'Moles = 40/40 = 1.0 mol',
            'Concentration = moles/volume',
            'Concentration = 1.0/0.5 = 2.0 mol/dm³'
        ],
        helper: 'Concentration (mol/dm³) = moles ÷ volume (dm³)',
        solution: '2.0 mol/dm³',
        realWorldContext: 'Laboratory solution preparation'
    });

    // Problem 5: Dilution Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dilution Problem',
        problem: '100 cm³ of 2.0 mol/dm³ HCl is diluted to 500 cm³. Find the new concentration.',
        parameters: {
            substance: 'HCl',
            initialConcentration: 2.0,
            initialVolume: 0.1,
            finalVolume: 0.5,
            calculate: 'dilution'
        },
        type: 'concentration',
        context: { difficulty: 'advanced', topic: 'Dilution Calculations' },
        subparts: [
            'Given: C₁ = 2.0 mol/dm³, V₁ = 100 cm³ = 0.1 dm³',
            'V₂ = 500 cm³ = 0.5 dm³',
            'C₁V₁ = C₂V₂',
            '2.0 × 0.1 = C₂ × 0.5',
            '0.2 = C₂ × 0.5',
            'C₂ = 0.2/0.5 = 0.4 mol/dm³'
        ],
        helper: 'Use dilution formula: C₁V₁ = C₂V₂',
        solution: '0.4 mol/dm³',
        realWorldContext: 'Preparing safe acid concentrations'
    });

    // Problem 6: Gas from Reaction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Volume from Reaction',
        problem: 'What volume of CO₂ is produced at r.t.p. when 6.0g of carbon is completely burned?',
        parameters: {
            substance: 'C',
            amount: 6.0,
            unit: 'g',
            productGas: 'CO2',
            calculate: 'productVolume'
        },
        type: 'gas_volume',
        context: { difficulty: 'intermediate', topic: 'Gas Volume from Stoichiometry' },
        subparts: [
            'Equation: C + O₂ → CO₂',
            'Given: 6.0g C',
            'Ar(C) = 12',
            'Moles C = 6.0/12 = 0.5 mol',
            'Mole ratio C:CO₂ = 1:1',
            'Moles CO₂ = 0.5 mol',
            'Volume = 0.5 × 24 = 12 dm³'
        ],
        helper: 'Combine stoichiometry with molar volume',
        solution: '12 dm³',
        realWorldContext: 'Carbon emission calculations'
    });

    // Problem 7: Concentration from Mass and Volume
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Solution Preparation',
        problem: 'What concentration is produced when 58.5g of NaCl is dissolved in 2.0 dm³ of water?',
        parameters: {
            substance: 'NaCl',
            mass: 58.5,
            volume: 2.0,
            calculate: 'concentration'
        },
        type: 'concentration',
        context: { difficulty: 'intermediate', topic: 'Concentration from Mass' },
        subparts: [
            'Given: 58.5g NaCl in 2.0 dm³',
            'Mr(NaCl) = 23 + 35.5 = 58.5',
            'Moles = 58.5/58.5 = 1.0 mol',
            'Concentration = 1.0/2.0 = 0.5 mol/dm³'
        ],
        helper: 'First find moles, then divide by volume',
        solution: '0.5 mol/dm³',
        realWorldContext: 'Saline solution for medical use'
    });

    return relatedProblems;
}

// ============== ISOMER ANALYSIS (DBE) - RELATED PROBLEMS GENERATOR ==============

function generateRelatedIsomerAnalysis() {
    const relatedProblems = [];

    // Problem 1: Simple DBE Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic DBE Calculation',
        problem: 'Calculate the degree of unsaturation (DBE) for C₄H₈.',
        parameters: {
            molecularFormula: 'C4H8',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'beginner', topic: 'Degree of Unsaturation' },
        subparts: [
            'Given: C₄H₈',
            'Formula: DBE = (2C + 2 - H)/2',
            'C = 4, H = 8',
            'DBE = (2(4) + 2 - 8)/2',
            'DBE = (8 + 2 - 8)/2 = 2/2 = 1',
            'One degree of unsaturation',
            'Could be: one C=C or one ring'
        ],
        helper: 'DBE = (2C + 2 - H - X + N)/2',
        solution: 'DBE = 1',
        realWorldContext: 'Identifying structural features from molecular formula'
    });

    // Problem 2: Benzene Ring Detection
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Benzene Ring Identification',
        problem: 'Calculate DBE for C₆H₆ and interpret the result.',
        parameters: {
            molecularFormula: 'C6H6',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'intermediate', topic: 'Aromatic Compound Detection' },
        subparts: [
            'Given: C₆H₆',
            'DBE = (2(6) + 2 - 6)/2',
            'DBE = (12 + 2 - 6)/2 = 8/2 = 4',
            'Four degrees of unsaturation',
            'This strongly suggests benzene ring',
            'Benzene has 3 double bonds + 1 ring = 4 DBE'
        ],
        helper: 'DBE = 4 typically indicates benzene ring',
        solution: 'DBE = 4 (benzene ring)',
        realWorldContext: 'Benzene structure determination'
    });

    // Problem 3: Saturated Compound
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Saturated Hydrocarbon',
        problem: 'Calculate DBE for C₅H₁₂ and explain what it means.',
        parameters: {
            molecularFormula: 'C5H12',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'beginner', topic: 'Saturation Analysis' },
        subparts: [
            'Given: C₅H₁₂',
            'DBE = (2(5) + 2 - 12)/2',
            'DBE = (10 + 2 - 12)/2 = 0/2 = 0',
            'Zero degrees of unsaturation',
            'Compound is fully saturated',
            'No double bonds or rings',
            'This is an alkane'
        ],
        helper: 'DBE = 0 means saturated (alkane)',
        solution: 'DBE = 0 (saturated alkane)',
        realWorldContext: 'Pentane isomers identification'
    });

    // Problem 4: Oxygen-Containing Compound
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'DBE with Oxygen',
        problem: 'Calculate DBE for C₃H₆O and suggest possible structures.',
        parameters: {
            molecularFormula: 'C3H6O',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'intermediate', topic: 'Functional Group Prediction' },
        subparts: [
            'Given: C₃H₆O',
            'Note: Oxygen doesn\'t affect DBE',
            'DBE = (2(3) + 2 - 6)/2',
            'DBE = (6 + 2 - 6)/2 = 2/2 = 1',
            'One degree of unsaturation',
            'Possible structures:',
            '- Propanal (C=O)',
            '- Propanone (C=O)',
            '- Cyclopropanol (ring)',
            '- Prop-2-en-1-ol (C=C)'
        ],
        helper: 'Oxygen doesn\'t change DBE calculation',
        solution: 'DBE = 1 (aldehyde, ketone, or cyclic alcohol)',
        realWorldContext: 'Identifying carbonyl compounds'
    });

    // Problem 5: Nitrogen-Containing Compound
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'DBE with Nitrogen',
        problem: 'Calculate DBE for C₄H₉N and interpret the result.',
        parameters: {
            molecularFormula: 'C4H9N',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'advanced', topic: 'Nitrogen Compound Analysis' },
        subparts: [
            'Given: C₄H₉N',
            'Formula: DBE = (2C + 2 - H + N)/2',
            'Note: Add N to formula (N adds to unsaturation)',
            'DBE = (2(4) + 2 - 9 + 1)/2',
            'DBE = (8 + 2 - 9 + 1)/2 = 2/2 = 1',
            'One degree of unsaturation',
            'Possible: C=N or C=C with amine, or ring'
        ],
        helper: 'For nitrogen: add N to numerator in DBE formula',
        solution: 'DBE = 1',
        realWorldContext: 'Amine and imine structure prediction'
    });

    // Problem 6: Halogenated Compound
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'DBE with Halogen',
        problem: 'Calculate DBE for C₂H₃Cl and suggest structures.',
        parameters: {
            molecularFormula: 'C2H3Cl',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'intermediate', topic: 'Halogen Compound Analysis' },
        subparts: [
            'Given: C₂H₃Cl',
            'Formula: DBE = (2C + 2 - H - X)/2',
            'Note: Subtract halogens (X)',
            'DBE = (2(2) + 2 - 3 - 1)/2',
            'DBE = (4 + 2 - 3 - 1)/2 = 2/2 = 1',
            'One degree of unsaturation',
            'This is vinyl chloride: CH₂=CHCl',
            'Contains C=C double bond'
        ],
        helper: 'For halogens (X): subtract X in DBE formula',
        solution: 'DBE = 1 (vinyl chloride)',
        realWorldContext: 'PVC monomer identification'
    });

    // Problem 7: Complex Aromatic Compound
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Aromatic Analysis',
        problem: 'Calculate DBE for C₇H₈O and determine if it could be aromatic.',
        parameters: {
            molecularFormula: 'C7H8O',
            type: 'structural'
        },
        type: 'isomer_analysis',
        context: { difficulty: 'advanced', topic: 'Aromatic Compound Identification' },
        subparts: [
            'Given: C₇H₈O',
            'DBE = (2(7) + 2 - 8)/2',
            'DBE = (14 + 2 - 8)/2 = 8/2 = 4',
            'Four degrees of unsaturation',
            'DBE = 4 suggests aromatic ring',
            'Could be: benzyl alcohol, anisole, cresol',
            'All contain benzene ring (accounts for 4 DBE)'
        ],
        helper: 'DBE = 4 strongly indicates benzene ring',
        solution: 'DBE = 4 (aromatic compound)',
        realWorldContext: 'Phenolic compound identification'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solveEmpiricalMolecularProblems() {
    const problems = generateRelatedEmpiricalMolecular();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Empirical/Molecular Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveCombustionProblems() {
    const problems = generateRelatedCombustion();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Combustion Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveStoichiometryProblems() {
    const problems = generateRelatedStoichiometry();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Stoichiometry Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solvePercentageYieldProblems() {
    const problems = generateRelatedPercentageYield();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Percentage Yield Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveHomologousSeriesProblems() {
    const problems = generateRelatedHomologousSeries();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Homologous Series Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solvePolymerProblems() {
    const problems = generateRelatedPolymers();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polymer Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveGasVolumeConcentrationProblems() {
    const problems = generateRelatedGasVolumeConcentration();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Gas/Concentration Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveIsomerAnalysisProblems() {
    const problems = generateRelatedIsomerAnalysis();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Isomer Analysis Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedOrganicChemistryWorkbook({
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

        workbook.solveOrganicProblem({
            problemType: problem.type,
            data: problem.parameters,
            scenario: problem.problem,
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

async function generateComprehensiveOrganicChemistryDocument() {
    console.log('Generating Comprehensive Organic Chemistry Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Organic Chemistry Mathematical Workbook',
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
            text: 'Formulae, Combustion, Stoichiometry, Yield, Series, Polymers, and Analysis',
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

    // Part I: Empirical & Molecular Formulae
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Empirical & Molecular Formulae (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const empiricalProblems = generateRelatedEmpiricalMolecular();
    empiricalProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Combustion Analysis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Combustion Analysis (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const combustionProblems = generateRelatedCombustion();
    combustionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Stoichiometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Organic Reaction Stoichiometry (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const stoichiometryProblems = generateRelatedStoichiometry();
    stoichiometryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 14}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Percentage Yield
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Percentage Yield (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const yieldProblems = generateRelatedPercentageYield();
    yieldProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 21}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Homologous Series
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Homologous Series (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const seriesProblems = generateRelatedHomologousSeries();
    seriesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 28}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Polymer Chemistry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Polymer Chemistry (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polymerProblems = generateRelatedPolymers();
    polymerProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 35}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Gas Volume & Concentration
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Gas Volume & Concentration (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gasProblems = generateRelatedGasVolumeConcentration();
    gasProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 42}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Isomer Analysis
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Isomer Analysis (DBE) (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const isomerProblems = generateRelatedIsomerAnalysis();
    isomerProblems.forEach((problem,index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 49}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: EMPIRICAL & MOLECULAR FORMULAE ==============
    console.log('\nProcessing Part I: Empirical & Molecular Formulae...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Empirical & Molecular Formulae',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const empiricalSolved = solveEmpiricalMolecularProblems();
    empiricalSolved.forEach((solved, index) => {
        console.log(`  Adding Empirical/Molecular Problem ${index + 1} to document...`);

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

    // ============== PART II: COMBUSTION ANALYSIS ==============
    console.log('\nProcessing Part II: Combustion Analysis...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Combustion Analysis',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const combustionSolved = solveCombustionProblems();
    combustionSolved.forEach((solved, index) => {
        console.log(`  Adding Combustion Problem ${index + 1} to document...`);

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

    // ============== PART III: STOICHIOMETRY ==============
    console.log('\nProcessing Part III: Organic Reaction Stoichiometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Organic Reaction Stoichiometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const stoichiometrySolved = solveStoichiometryProblems();
    stoichiometrySolved.forEach((solved, index) => {
        console.log(`  Adding Stoichiometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 14}: ${solved.problem.scenario}`,
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

    // ============== PART IV: PERCENTAGE YIELD ==============
    console.log('\nProcessing Part IV: Percentage Yield...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Percentage Yield',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const yieldSolved = solvePercentageYieldProblems();
    yieldSolved.forEach((solved, index) => {
        console.log(`  Adding Percentage Yield Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 21}: ${solved.problem.scenario}`,
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

    // ============== PART V: HOMOLOGOUS SERIES ==============
    console.log('\nProcessing Part V: Homologous Series...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Homologous Series',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const seriesSolved = solveHomologousSeriesProblems();
    seriesSolved.forEach((solved, index) => {
        console.log(`  Adding Homologous Series Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 28}: ${solved.problem.scenario}`,
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

    // ============== PART VI: POLYMER CHEMISTRY ==============
    console.log('\nProcessing Part VI: Polymer Chemistry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Polymer Chemistry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polymerSolved = solvePolymerProblems();
    polymerSolved.forEach((solved, index) => {
        console.log(`  Adding Polymer Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 35}: ${solved.problem.scenario}`,
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

    // ============== PART VII: GAS VOLUME & CONCENTRATION ==============
    console.log('\nProcessing Part VII: Gas Volume & Concentration...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Gas Volume & Concentration',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gasSolved = solveGasVolumeConcentrationProblems();
    gasSolved.forEach((solved, index) => {
        console.log(`  Adding Gas/Concentration Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 42}: ${solved.problem.scenario}`,
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

    // ============== PART VIII: ISOMER ANALYSIS ==============
    console.log('\nProcessing Part VIII: Isomer Analysis (DBE)...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Isomer Analysis (Degree of Unsaturation)',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const isomerSolved = solveIsomerAnalysisProblems();
    isomerSolved.forEach((solved, index) => {
        console.log(`  Adding Isomer Analysis Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 49}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_organic_chemistry_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE ORGANIC CHEMISTRY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 56');
        console.log('    - Empirical & Molecular Formulae: 7 problems');
        console.log('    - Combustion Analysis: 6 problems');
        console.log('    - Organic Reaction Stoichiometry: 7 problems');
        console.log('    - Percentage Yield: 7 problems');
        console.log('    - Homologous Series: 7 problems');
        console.log('    - Polymer Chemistry: 7 problems');
        console.log('    - Gas Volume & Concentration: 7 problems');
        console.log('    - Isomer Analysis (DBE): 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Empirical & Molecular Formulae (Problems 1-7)');
        console.log('  • Part II: Combustion Analysis (Problems 8-13)');
        console.log('  • Part III: Organic Reaction Stoichiometry (Problems 14-20)');
        console.log('  • Part IV: Percentage Yield (Problems 21-27)');
        console.log('  • Part V: Homologous Series (Problems 28-34)');
        console.log('  • Part VI: Polymer Chemistry (Problems 35-41)');
        console.log('  • Part VII: Gas Volume & Concentration (Problems 42-48)');
        console.log('  • Part VIII: Isomer Analysis (Problems 49-55)');
        console.log('\n📄 EXPECTED PAGES: 150+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced multi-layer explanations');
        console.log('  • Solution verification with detailed checks');
        console.log('  • Key concepts and theory');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Conceptual, procedural, visual, and chemical explanations');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE ORGANIC CHEMISTRY DOCUMENT GENERATION ==============

generateComprehensiveOrganicChemistryDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
