
import { EnhancedEquilibriumChemistryWorkbook } from './equilibriumworkbook.js';
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

// ============== EQUILIBRIUM CONSTANTS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedEquilibriumConstants() {
    const relatedProblems = [];

    // Problem 1: Simple K Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Equilibrium Constant',
        problem: 'Calculate K for: N₂ + 3H₂ ⇌ 2NH₃ with [N₂]=0.50 M, [H₂]=0.20 M, [NH₃]=0.40 M at equilibrium',
        parameters: {
            products: { 'NH3': 0.40 },
            reactants: { 'N2': 0.50, 'H2': 0.20 },
            coefficients: { 'N2': 1, 'H2': 3, 'NH3': 2 },
            equation: 'N₂ + 3H₂ ⇌ 2NH₃'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'beginner', topic: 'Equilibrium Constants' },
        subparts: [
            'Given: N₂ + 3H₂ ⇌ 2NH₃',
            'Equilibrium concentrations:',
            '[N₂] = 0.50 M, [H₂] = 0.20 M, [NH₃] = 0.40 M',
            'Step 1: Write K expression',
            'K = [NH₃]² / ([N₂][H₂]³)',
            'Step 2: Substitute values',
            'K = (0.40)² / ((0.50)(0.20)³)',
            'K = 0.16 / (0.50 × 0.008)',
            'K = 0.16 / 0.004',
            'K = 40',
            'Interpretation: K > 1, products favored'
        ],
        helper: 'Products on top, reactants on bottom with stoichiometric exponents',
        solution: 'K = 40',
        realWorldContext: 'Haber process for ammonia synthesis'
    });

    // Problem 2: K from Initial and Equilibrium Concentrations
   /*" relatedProblems.push({
        difficulty: 'similar',
        scenario: 'K from ICE Table Data',
        problem: 'For H₂ + I₂ ⇌ 2HI, initial [H₂]=1.0 M, [I₂]=1.0 M, equilibrium [HI]=1.6 M. Find K.',
        parameters: {
            initial: { 'H2': 1.0, 'I2': 1.0, 'HI': 0 },
            K: null,
            reactant: 'H2',
            product: 'HI',
            equation: 'H₂ + I₂ ⇌ 2HI'
        },
        type: 'ice_table',
        context: { difficulty: 'intermediate', topic: 'ICE Tables and K' },
        subparts: [
            'Given: H₂ + I₂ ⇌ 2HI',
            'Initial: [H₂] = 1.0 M, [I₂] = 1.0 M, [HI] = 0',
            'Equilibrium: [HI] = 1.6 M',
            'Step 1: Set up ICE table',
            '        H₂    I₂    HI',
            'I:      1.0   1.0   0',
            'C:      -x    -x    +2x',
            'E:      1.0-x 1.0-x 2x',
            'Step 2: From [HI] = 1.6 M, 2x = 1.6, so x = 0.8',
            'Step 3: Calculate equilibrium concentrations',
            '[H₂] = 1.0 - 0.8 = 0.2 M',
            '[I₂] = 1.0 - 0.8 = 0.2 M',
            '[HI] = 1.6 M',
            'Step 4: Calculate K',
            'K = [HI]² / ([H₂][I₂])',
            'K = (1.6)² / (0.2 × 0.2)',
            'K = 2.56 / 0.04',
            'K = 64'
        ],
        helper: 'Use ICE table to find all equilibrium concentrations, then calculate K',
        solution: 'K = 64',
        realWorldContext: 'Understanding reaction extent from initial conditions'
    });
    */


    // Problem 3: Kp to Kc Conversion
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Kp to Kc Conversion',
        problem: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g), Kp = 3.0 × 10⁴ at 700 K. Find Kc.',
        parameters: {
            Kp: 3.0e4,
            temperature: 700,
            delta_n: -1,
            R: 0.0821,
            equation: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)'
        },
        type: 'gas_equilibrium',
        context: { difficulty: 'intermediate', topic: 'Kp and Kc Relationships' },
        subparts: [
            'Given: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
            'Kp = 3.0 × 10⁴ at T = 700 K',
            'Step 1: Calculate Δn (change in moles of gas)',
            'Δn = (moles gas products) - (moles gas reactants)',
            'Δn = 2 - (2 + 1) = -1',
            'Step 2: Use relationship Kp = Kc(RT)^Δn',
            'Kc = Kp / (RT)^Δn',
            'Step 3: Calculate RT',
            'RT = 0.0821 × 700 = 57.47',
            'Step 4: Calculate Kc',
            'Kc = 3.0 × 10⁴ / (57.47)^(-1)',
            'Kc = 3.0 × 10⁴ × 57.47',
            'Kc = 1.72 × 10⁶'
        ],
        helper: 'Kp = Kc(RT)^Δn where Δn = change in moles of gas',
        solution: 'Kc = 1.72 × 10⁶',
        realWorldContext: 'Contact process for sulfuric acid production'
    });

    // Problem 4: Finding Equilibrium Concentrations
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Calculate Equilibrium Concentrations',
        problem: 'For A ⇌ B, K = 4.0. If initial [A] = 2.0 M, find equilibrium concentrations.',
        parameters: {
            initial: { 'A': 2.0, 'B': 0 },
            K: 4.0,
            reactant: 'A',
            product: 'B'
        },
        type: 'ice_table',
        context: { difficulty: 'intermediate', topic: 'ICE Table Calculations' },
        subparts: [
            'Given: A ⇌ B, K = 4.0',
            'Initial: [A] = 2.0 M, [B] = 0',
            'Step 1: Set up ICE table',
            '        A      B',
            'I:      2.0    0',
            'C:      -x     +x',
            'E:      2.0-x  x',
            'Step 2: Write K expression',
            'K = [B] / [A] = x / (2.0 - x) = 4.0',
            'Step 3: Solve for x',
            'x = 4.0(2.0 - x)',
            'x = 8.0 - 4.0x',
            '5.0x = 8.0',
            'x = 1.6 M',
            'Step 4: Calculate equilibrium concentrations',
            '[A] = 2.0 - 1.6 = 0.4 M',
            '[B] = 1.6 M',
            'Check: K = 1.6/0.4 = 4.0 ✓'
        ],
        helper: 'Set up ICE table, write K expression, solve for x',
        solution: '[A] = 0.4 M, [B] = 1.6 M',
        realWorldContext: 'Predicting final concentrations in equilibrium systems'
    });

    // Problem 5: Heterogeneous Equilibrium
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heterogeneous Equilibrium',
        problem: 'For CaCO₃(s) ⇌ CaO(s) + CO₂(g), at equilibrium [CO₂] = 0.105 M. Find K.',
        parameters: {
            products: { 'CO2': 0.105 },
            reactants: {},
            coefficients: { 'CaCO3': 1, 'CaO': 1, 'CO2': 1 },
            equation: 'CaCO₃(s) ⇌ CaO(s) + CO₂(g)'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'beginner', topic: 'Heterogeneous Equilibria' },
        subparts: [
            'Given: CaCO₃(s) ⇌ CaO(s) + CO₂(g)',
            '[CO₂] = 0.105 M at equilibrium',
            'Step 1: Write K expression',
            'Note: Solids are NOT included in K expression',
            'K = [CO₂]',
            'Step 2: Substitute equilibrium concentration',
            'K = 0.105',
            'Interpretation: Only gaseous/aqueous species in K',
            'The solid reactant and product do not appear'
        ],
        helper: 'Exclude pure solids and liquids from K expression',
        solution: 'K = 0.105',
        realWorldContext: 'Limestone decomposition in lime production'
    });

    // Problem 6: Large K Interpretation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Interpreting Large K',
        problem: 'For 2H₂ + O₂ ⇌ 2H₂O, K = 3.2 × 10⁸¹. What does this tell us?',
        parameters: {
            products: { 'H2O': 1 },
            reactants: { 'H2': 1, 'O2': 1 },
            coefficients: { 'H2': 2, 'O2': 1, 'H2O': 2 },
            equation: '2H₂ + O₂ ⇌ 2H₂O'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'beginner', topic: 'K Value Interpretation' },
        subparts: [
            'Given: 2H₂ + O₂ ⇌ 2H₂O',
            'K = 3.2 × 10⁸¹',
            'Step 1: Analyze K magnitude',
            'K >> 1 (much greater than 1)',
            'Step 2: Interpretation',
            'Very large K means products strongly favored',
            'At equilibrium, nearly all reactants converted to products',
            'The reaction goes essentially to completion',
            'Step 3: Practical meaning',
            'Water formation is highly favorable',
            'Very little H₂ and O₂ remain at equilibrium',
            'This is why water is so stable'
        ],
        helper: 'K >> 1 means products favored; K << 1 means reactants favored',
        solution: 'Products strongly favored, reaction essentially complete',
        realWorldContext: 'Understanding why water formation is thermodynamically favorable'
    });

    // Problem 7: Small K Interpretation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Interpreting Small K',
        problem: 'For N₂ + O₂ ⇌ 2NO, K = 4.8 × 10⁻³¹ at 298 K. Interpret this value.',
        parameters: {
            products: { 'NO': 1 },
            reactants: { 'N2': 1, 'O2': 1 },
            coefficients: { 'N2': 1, 'O2': 1, 'NO': 2 },
            equation: 'N₂ + O₂ ⇌ 2NO'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'beginner', topic: 'K Value Interpretation' },
        subparts: [
            'Given: N₂ + O₂ ⇌ 2NO',
            'K = 4.8 × 10⁻³¹ at 298 K',
            'Step 1: Analyze K magnitude',
            'K << 1 (much less than 1)',
            'Step 2: Interpretation',
            'Very small K means reactants strongly favored',
            'At equilibrium, very little product (NO) forms',
            'Reaction barely proceeds forward',
            'Step 3: Practical meaning',
            'NO formation from N₂ and O₂ is unfavorable at room temp',
            'This is why our atmosphere is stable',
            'High temperatures (lightning, engines) needed for NO formation'
        ],
        helper: 'K << 1 means reactants favored, little product forms',
        solution: 'Reactants strongly favored, minimal NO formation at room temperature',
        realWorldContext: 'Why nitrogen and oxygen coexist in atmosphere without reacting'
    });

    return relatedProblems;
}

// ============== LE CHATELIER'S PRINCIPLE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLeChatelier() {
    const relatedProblems = [];

    // Problem 1: Adding Reactant
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Adding a Reactant',
        problem: 'For N₂ + 3H₂ ⇌ 2NH₃, predict the shift if more N₂ is added.',
        parameters: {
            stress: 'N₂',
            stressType: 'addReactant',
            reaction: 'N₂ + 3H₂ ⇌ 2NH₃',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'beginner', topic: "Le Chatelier's Principle - Concentration" },
        subparts: [
            'Given: N₂ + 3H₂ ⇌ 2NH₃ at equilibrium',
            'Stress: Add more N₂',
            'Step 1: Identify the stress',
            'Increasing [N₂] (a reactant)',
            'Step 2: Apply Le Chatelier\'s Principle',
            'System will shift to consume the added N₂',
            'Step 3: Determine shift direction',
            'Shift RIGHT (toward products)',
            'Step 4: Predict concentration changes',
            '[N₂] increases initially, then decreases slightly',
            '[H₂] decreases',
            '[NH₃] increases',
            'Note: K remains constant (temperature unchanged)'
        ],
        helper: 'Adding reactant shifts equilibrium toward products',
        solution: 'Shifts RIGHT (→ products)',
        realWorldContext: 'Industrial ammonia synthesis optimization'
    });

    // Problem 2: Removing Product
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Removing a Product',
        problem: 'For 2SO₂ + O₂ ⇌ 2SO₃, predict the shift if SO₃ is continuously removed.',
        parameters: {
            stress: 'SO₃',
            stressType: 'removeProduct',
            reaction: '2SO₂ + O₂ ⇌ 2SO₃',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'beginner', topic: "Le Chatelier's Principle - Concentration" },
        subparts: [
            'Given: 2SO₂ + O₂ ⇌ 2SO₃ at equilibrium',
            'Stress: Remove SO₃ continuously',
            'Step 1: Identify the stress',
            'Decreasing [SO₃] (a product)',
            'Step 2: Apply Le Chatelier\'s Principle',
            'System shifts to produce more SO₃',
            'Step 3: Determine shift direction',
            'Shift RIGHT (toward products)',
            'Step 4: Result',
            'More SO₂ and O₂ are consumed',
            'More SO₃ is produced',
            'Continuous removal drives reaction to completion',
            'Industrial strategy: remove product to maximize yield'
        ],
        helper: 'Removing product shifts equilibrium toward products',
        solution: 'Shifts RIGHT (→ products)',
        realWorldContext: 'Contact process for sulfuric acid - maximize SO₃ production'
    });

    // Problem 3: Temperature Increase (Exothermic)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Change - Exothermic',
        problem: 'For N₂ + 3H₂ ⇌ 2NH₃ + heat, predict shift when temperature increases.',
        parameters: {
            stress: 'temperature increase',
            stressType: 'increaseTemp',
            reaction: 'N₂ + 3H₂ ⇌ 2NH₃ + heat (ΔH < 0)',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: "Le Chatelier's Principle - Temperature" },
        subparts: [
            'Given: N₂ + 3H₂ ⇌ 2NH₃ (exothermic, ΔH < 0)',
            'Can be written: N₂ + 3H₂ ⇌ 2NH₃ + heat',
            'Stress: Increase temperature (add heat)',
            'Step 1: Treat heat as a product',
            'Adding heat is like adding a product',
            'Step 2: Apply Le Chatelier\'s Principle',
            'System shifts to consume added heat',
            'Step 3: Determine shift direction',
            'Shift LEFT (toward reactants, endothermic direction)',
            'Step 4: Effects',
            '[NH₃] decreases',
            '[N₂] and [H₂] increase',
            'K decreases (temperature affects K!)',
            'Higher temp → less product → lower yield'
        ],
        helper: 'For exothermic reactions, increasing T shifts toward reactants',
        solution: 'Shifts LEFT (← reactants), K decreases',
        realWorldContext: 'Why Haber process uses compromise temperature (400-500°C)'
    });

    // Problem 4: Temperature Decrease (Endothermic)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Change - Endothermic',
        problem: 'For N₂O₄ ⇌ 2NO₂ - heat, predict shift when temperature decreases.',
        parameters: {
            stress: 'temperature decrease',
            stressType: 'decreaseTemp',
            reaction: 'N₂O₄ ⇌ 2NO₂ (ΔH > 0)',
            exothermic: false
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: "Le Chatelier's Principle - Temperature" },
        subparts: [
            'Given: N₂O₄ ⇌ 2NO₂ (endothermic, ΔH > 0)',
            'Can be written: N₂O₄ + heat ⇌ 2NO₂',
            'Stress: Decrease temperature (remove heat)',
            'Step 1: Treat heat as a reactant',
            'Removing heat is like removing a reactant',
            'Step 2: Apply Le Chatelier\'s Principle',
            'System shifts to produce heat',
            'Step 3: Determine shift direction',
            'Shift LEFT (toward reactants, exothermic direction)',
            'Step 4: Effects',
            '[NO₂] decreases',
            '[N₂O₄] increases',
            'Gas becomes less brown (NO₂ is brown)',
            'K decreases at lower temperature'
        ],
        helper: 'For endothermic reactions, decreasing T shifts toward reactants',
        solution: 'Shifts LEFT (← reactants), produces heat, K decreases',
        realWorldContext: 'Observable color change in NO₂/N₂O₄ equilibrium'
    });

    // Problem 5: Pressure Increase
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Pressure Change',
        problem: 'For N₂ + 3H₂ ⇌ 2NH₃, predict shift when pressure increases by decreasing volume.',
        parameters: {
            stress: 'pressure increase',
            stressType: 'increasePressure',
            reaction: 'N₂ + 3H₂ ⇌ 2NH₃',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: "Le Chatelier's Principle - Pressure" },
        subparts: [
            'Given: N₂ + 3H₂ ⇌ 2NH₃',
            'Stress: Increase pressure (decrease volume)',
            'Step 1: Count gas moles',
            'Reactants: 1 + 3 = 4 moles gas',
            'Products: 2 moles gas',
            'Step 2: Apply Le Chatelier\'s Principle',
            'System shifts to reduce pressure',
            'Shifts toward fewer moles of gas',
            'Step 3: Determine shift direction',
            'Shift RIGHT (toward products)',
            '4 moles → 2 moles',
            'Step 4: Result',
            'Higher pressure favors NH₃ formation',
            'Industrial process uses 200-300 atm',
            'K unchanged (only T affects K)'
        ],
        helper: 'Increasing pressure shifts toward side with fewer gas moles',
        solution: 'Shifts RIGHT (→ products, fewer moles)',
        realWorldContext: 'High pressure in Haber process increases ammonia yield'
    });

    // Problem 6: Adding Inert Gas
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Inert Gas',
        problem: 'For H₂ + I₂ ⇌ 2HI, predict effect of adding He gas at constant volume.',
        parameters: {
            stress: 'inert gas (He)',
            stressType: 'addCatalyst',
            reaction: 'H₂ + I₂ ⇌ 2HI',
            exothermic: false
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: "Le Chatelier's Principle - Inert Gas" },
        subparts: [
            'Given: H₂ + I₂ ⇌ 2HI at equilibrium',
            'Stress: Add He gas at constant volume',
            'Step 1: Analyze the change',
            'Total pressure increases',
            'BUT: Partial pressures unchanged',
            'Volume is constant',
            'Step 2: Effect on equilibrium',
            'Partial pressures determine equilibrium',
            '[H₂], [I₂], [HI] unchanged',
            'Step 3: Conclusion',
            'NO SHIFT in equilibrium position',
            'Adding inert gas at constant V has no effect',
            'Note: At constant P (variable V), would shift toward more moles'
        ],
        helper: 'Inert gas at constant volume: no effect on equilibrium',
        solution: 'NO SHIFT - equilibrium unchanged',
        realWorldContext: 'Understanding when pressure changes affect equilibrium'
    });

    // Problem 7: Catalyst Addition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Adding a Catalyst',
        problem: 'For 2SO₂ + O₂ ⇌ 2SO₃, predict effect of adding V₂O₅ catalyst.',
        parameters: {
            stress: 'catalyst (V₂O₅)',
            stressType: 'addCatalyst',
            reaction: '2SO₂ + O₂ ⇌ 2SO₃',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'beginner', topic: "Le Chatelier's Principle - Catalyst" },
        subparts: [
            'Given: 2SO₂ + O₂ ⇌ 2SO₃',
            'Add: V₂O₅ catalyst',
            'Step 1: Understand catalyst function',
            'Catalyst speeds up BOTH forward and reverse reactions equally',
            'Lowers activation energy for both directions',
            'Step 2: Effect on equilibrium position',
            'NO SHIFT in equilibrium',
            'Same final concentrations reached',
            'Same K value',
            'Step 3: Effect on rate',
            'Equilibrium reached FASTER',
            'Important for industrial processes',
            'Step 4: Why use catalysts?',
            'Faster production',
            'Lower temperature possible',
            'Economic advantage'
        ],
        helper: 'Catalysts speed up approach to equilibrium but don\'t shift it',
        solution: 'NO SHIFT - reaches equilibrium faster',
        realWorldContext: 'V₂O₅ catalyst in contact process speeds up SO₃ production'
    });

    return relatedProblems;
}

// ============== SOLUBILITY EQUILIBRIA - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSolubilityEquilibria() {
    const relatedProblems = [];

    // Problem 1: Basic Ksp Calculation
    /**relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculate Ksp from Solubility',
        problem: 'AgCl has molar solubility of 1.3 × 10⁻⁵ M. Calculate Ksp.',
        parameters: {
            Ksp: null,
            formula: 'AgCl',
            ions: { cation_coeff: 1, anion_coeff: 1 },
            molarSolubility: 1.3e-5
        },
        type: 'solubility',
        context: { difficulty: 'beginner', topic: 'Solubility Product Constant' },
        subparts: [
            'Given: AgCl, molar solubility s = 1.3 × 10⁻⁵ M',
            'Step 1: Write dissolution equation',
            'AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)',
            'Step 2: Write Ksp expression',
            'Ksp = [Ag⁺][Cl⁻]',
            'Step 3: Relate concentrations to solubility',
            '[Ag⁺] = s = 1.3 × 10⁻⁵ M',
            '[Cl⁻] = s = 1.3 × 10⁻⁵ M',
            'Step 4: Calculate Ksp',
            'Ksp = (1.3 × 10⁻⁵)(1.3 × 10⁻⁵)',
            'Ksp = 1.69 × 10⁻¹⁰',
            'Ksp ≈ 1.7 × 10⁻¹⁰'
        ],
        helper: 'For MX: Ksp = s², where s is molar solubility',
        solution: 'Ksp = 1.7 × 10⁻¹⁰',
        realWorldContext: 'Predicting silver halide solubility in photography'
    });
    */


    // Problem 2: Calculate Solubility from Ksp
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Calculate Solubility from Ksp',
        problem: 'For PbI₂, Ksp = 7.9 × 10⁻⁹. Calculate molar solubility.',
        parameters: {
            Ksp: 7.9e-9,
            formula: 'PbI₂',
            ions: { cation_coeff: 1, anion_coeff: 2 }
        },
        type: 'solubility',
        context: { difficulty: 'intermediate', topic: 'Calculating Solubility from Ksp' },
        subparts: [
            'Given: PbI₂, Ksp = 7.9 × 10⁻⁹',
            'Step 1: Write dissolution equation',
            'PbI₂(s) ⇌ Pb²⁺(aq) + 2I⁻(aq)',
            'Step 2: Write Ksp expression',
            'Ksp = [Pb²⁺][I⁻]²',
            'Step 3: Express in terms of solubility s',
            '[Pb²⁺] = s',
            '[I⁻] = 2s',
            'Step 4: Substitute into Ksp',
            'Ksp = (s)(2s)²',
            'Ksp = 4s³',
            'Step 5: Solve for s',
            '7.9 × 10⁻⁹ = 4s³',
            's³ = 1.975 × 10⁻⁹',
            's = ∛(1.975 × 10⁻⁹)',
            's = 1.25 × 10⁻³ M',
            'Molar solubility = 1.25 × 10⁻³ M'
        ],
        helper: 'For MX₂: Ksp = 4s³, solve for s',
        solution: 's = 1.25 × 10⁻³ M',
        realWorldContext: 'Lead iodide solubility in aqueous solutions'
    });

    // Problem 3: Common Ion Effect
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Common Ion Effect',
        problem: 'Calculate solubility of AgCl (Ksp = 1.7 × 10⁻¹⁰) in 0.10 M NaCl.',
        parameters: {
            Ksp: 1.7e-10,
            formula: 'AgCl',
            common_ion: 'Cl⁻',
            common_ion_concentration: 0.10
        },
        type: 'common_ion',
        context: { difficulty: 'intermediate', topic: 'Common Ion Effect' },
        subparts: [
            'Given: AgCl in 0.10 M NaCl',
            'Ksp(AgCl) = 1.7 × 10⁻¹⁰',
            'Step 1: Identify common ion',
            'Common ion is Cl⁻ from NaCl',
            '[Cl⁻] from NaCl = 0.10 M',
            'Step 2: Write dissolution equation',
            'AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)',
            'Step 3: Set up ICE-like table',
            'Initial Cl⁻ = 0.10 M (from NaCl)',
            'Let s = molar solubility of AgCl',
            '[Ag⁺] = s',
            '[Cl⁻] = 0.10 + s ≈ 0.10 M (s << 0.10)',
            'Step 4: Apply Ksp',
            'Ksp = [Ag⁺][Cl⁻]',
            '1.7 × 10⁻¹⁰ = (s)(0.10)',
            's = 1.7 × 10⁻⁹ M',
            'Step 5: Compare to pure water',
            'In pure water: s = 1.3 × 10⁻⁵ M',
            'In 0.10 M NaCl: s = 1.7 × 10⁻⁹ M',
            'Solubility decreased by factor of ~7600!'
        ],
        helper: 'Common ion suppresses solubility dramatically',
        solution: 's = 1.7 × 10⁻⁹ M (much less than in pure water)',
        realWorldContext: 'Precipitation in presence of excess ions'
    });

    // Problem 4: Predicting Precipitation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Predicting Precipitation',
        problem: 'Will BaSO₄ precipitate if 50 mL of 0.0010 M Ba²⁺ is mixed with 50 mL of 0.0020 M SO₄²⁻? Ksp = 1.1 × 10⁻¹⁰',
        parameters: {
            Ksp: 1.1e-10,
            formula: 'BaSO₄',
            products: { 'Ba2+': 0.0010, 'SO42-': 0.0020 },
            reactants: {},
            coefficients: { 'Ba2+': 1, 'SO42-': 1 }
        },
        type: 'reaction_quotient',
        context: { difficulty: 'intermediate', topic: 'Precipitation Reactions' },
        subparts: [
            'Given: Mix 50 mL of 0.0010 M Ba²⁺ with 50 mL of 0.0020 M SO₄²⁻',
            'Ksp(BaSO₄) = 1.1 × 10⁻¹⁰',
            'Step 1: Calculate diluted concentrations',
            'Total volume = 50 + 50 = 100 mL',
            '[Ba²⁺] = (0.0010)(50/100) = 5.0 × 10⁻⁴ M',
            '[SO₄²⁻] = (0.0020)(50/100) = 1.0 × 10⁻³ M',
            'Step 2: Calculate reaction quotient Q',
            'Q = [Ba²⁺][SO₄²⁻]',
            'Q = (5.0 × 10⁻⁴)(1.0 × 10⁻³)',
            'Q = 5.0 × 10⁻⁷',
            'Step 3: Compare Q to Ksp',
            'Q = 5.0 × 10⁻⁷',
            'Ksp = 1.1 × 10⁻¹⁰',
            'Q > Ksp',
            'Step 4: Conclusion',
            'Since Q > Ksp, precipitation WILL occur',
            'BaSO₄(s) will form until Q = Ksp'
        ],
        helper: 'If Q > Ksp, precipitation occurs; if Q < Ksp, no precipitation',
        solution: 'Yes, BaSO₄ will precipitate (Q > Ksp)',
        realWorldContext: 'Predicting precipitate formation in analytical chemistry'
    });

    // Problem 5: Solubility with pH Dependence
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'pH-Dependent Solubility',
        problem: 'Explain why Mg(OH)₂ solubility increases in acidic solution.',
        parameters: {
            Ksp: 1.8e-11,
            formula: 'Mg(OH)₂',
            ions: { cation_coeff: 1, anion_coeff: 2 }
        },
        type: 'solubility',
        context: { difficulty: 'advanced', topic: 'pH Effects on Solubility' },
        subparts: [
            'Given: Mg(OH)₂, Ksp = 1.8 × 10⁻¹¹',
            'Step 1: Write dissolution equation',
            'Mg(OH)₂(s) ⇌ Mg²⁺(aq) + 2OH⁻(aq)',
            'Step 2: In acidic solution',
            'H⁺ ions react with OH⁻:',
            'H⁺(aq) + OH⁻(aq) → H₂O(l)',
            'Step 3: Apply Le Chatelier\'s Principle',
            'H⁺ removes OH⁻ from solution',
            'System shifts right to replace OH⁻',
            'More Mg(OH)₂ dissolves',
            'Step 4: Net effect',
            '[OH⁻] decreases in acidic solution',
            'To maintain Ksp, more solid dissolves',
            '[Mg²⁺] increases',
            'Solubility increases',
            'Step 5: Practical consequence',
            'Mg(OH)₂ (milk of magnesia) more soluble in stomach acid',
            'This aids in neutralization'
        ],
        helper: 'Acid removes OH⁻, shifting equilibrium toward dissolution',
        solution: 'Solubility increases in acidic solution due to OH⁻ consumption',
        realWorldContext: 'Antacid effectiveness - Mg(OH)₂ in stomach acid'
    });

    // Problem 6: Selective Precipitation
    /**relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Selective Precipitation',
        problem: 'Solution contains 0.10 M Cl⁻ and 0.10 M CrO₄²⁻. Add Ag⁺ slowly. Which precipitates first? Ksp(AgCl) = 1.7 × 10⁻¹⁰, Ksp(Ag₂CrO₄) = 1.2 × 10⁻¹²',
        parameters: {
            Ksp: null,
            ions: { 'Cl-': 0.10, 'CrO42-': 0.10 }
        },
        type: 'solubility',
        context: { difficulty: 'advanced', topic: 'Selective Precipitation' },
        subparts: [
            'Given: [Cl⁻] = [CrO₄²⁻] = 0.10 M',
            'Ksp(AgCl) = 1.7 × 10⁻¹⁰',
            'Ksp(Ag₂CrO₄) = 1.2 × 10⁻¹²',
            'Step 1: Find [Ag⁺] needed to start AgCl precipitation',
            'AgCl(s) ⇌ Ag⁺ + Cl⁻',
            'Ksp = [Ag⁺][Cl⁻]',
            '1.7 × 10⁻¹⁰ = [Ag⁺](0.10)',
            '[Ag⁺] = 1.7 × 10⁻⁹ M',
            'Step 2: Find [Ag⁺] needed to start Ag₂CrO₄ precipitation',
            'Ag₂CrO₄(s) ⇌ 2Ag⁺ + CrO₄²⁻',
            'Ksp = [Ag⁺]²[CrO₄²⁻]',
            '1.2 × 10⁻¹² = [Ag⁺]²(0.10)',
            '[Ag⁺]² = 1.2 × 10⁻¹¹',
            '[Ag⁺] = 3.5 × 10⁻⁶ M',
            'Step 3: Compare required [Ag⁺]',
            'AgCl needs: 1.7 × 10⁻⁹ M (lower)',
            'Ag₂CrO₄ needs: 3.5 × 10⁻⁶ M (higher)',
            'Step 4: Conclusion',
            'AgCl precipitates FIRST',
            'AgCl forms at lower [Ag⁺]',
            'Can separate Cl⁻ from CrO₄²⁻'
        ],
        helper: 'Calculate [Ag⁺] needed for each; lower concentration precipitates first',
        solution: 'AgCl precipitates first',
        realWorldContext: 'Qualitative analysis - separating ions by selective precipitation'
    });
    */


    // Problem 7: Solubility of Salts of Weak Acids
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Salt of Weak Acid Solubility',
        problem: 'Compare solubility of CaF₂ in pure water vs acidic solution. Ksp = 3.9 × 10⁻¹¹',
        parameters: {
            Ksp: 3.9e-11,
            formula: 'CaF₂',
            ions: { cation_coeff: 1, anion_coeff: 2 }
        },
        type: 'solubility',
        context: { difficulty: 'advanced', topic: 'Solubility and Weak Acid Anions' },
        subparts: [
            'Given: CaF₂, Ksp = 3.9 × 10⁻¹¹',
            'Step 1: Write dissolution',
            'CaF₂(s) ⇌ Ca²⁺(aq) + 2F⁻(aq)',
            'Step 2: Recognize F⁻ is weak base',
            'F⁻ is conjugate base of HF (weak acid)',
            'F⁻ + H₂O ⇌ HF + OH⁻',
            'Step 3: In acidic solution',
            'H⁺ reacts with F⁻:',
            'H⁺(aq) + F⁻(aq) → HF(aq)',
            'Step 4: Effect on solubility',
            'H⁺ removes F⁻ from solution',
            'Equilibrium shifts right',
            'More CaF₂ dissolves',
            'Step 5: Calculate solubility in pure water',
            'Ksp = [Ca²⁺][F⁻]² = 4s³',
            's = ∛(3.9 × 10⁻¹¹/4)',
            's = 2.1 × 10⁻⁴ M',
            'In acid: solubility MUCH higher',
            'F⁻ converted to HF, shifting equilibrium'
        ],
        helper: 'Weak acid anions increase solubility in acidic solution',
        solution: 'Solubility much higher in acidic solution',
        realWorldContext: 'Fluoride solubility in dental applications'
    });

    return relatedProblems;
}

// ============== COMPLEX IONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedComplexIons() {
    const relatedProblems = [];

    // Problem 1: Basic Complex Formation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Complex Ion Formation',
        problem: 'Write the formation equation and Kf expression for [Ag(NH₃)₂]⁺ complex.',
        parameters: {
            metal_ion: 'Ag⁺',
            ligand: 'NH₃',
            Kf: 1.6e7,
            n: 2
        },
        type: 'complex_ion',
        context: { difficulty: 'beginner', topic: 'Complex Ion Formation' },
        subparts: [
            'Given: Silver-ammonia complex [Ag(NH₃)₂]⁺',
            'Step 1: Write formation equation',
            'Ag⁺(aq) + 2NH₃(aq) ⇌ [Ag(NH₃)₂]⁺(aq)',
            'Step 2: Write Kf expression',
            'Kf = [[Ag(NH₃)₂]⁺] / ([Ag⁺][NH₃]²)',
            'Step 3: Interpret Kf',
            'Kf = 1.6 × 10⁷ (very large)',
            'Large Kf means complex is very stable',
            'Nearly all Ag⁺ converts to complex',
            'Step 4: Practical significance',
            'Ammonia dissolves AgCl by forming complex:',
            'AgCl(s) + 2NH₃(aq) → [Ag(NH₃)₂]⁺(aq) + Cl⁻(aq)',
            'Used in silver recovery and photography'
        ],
        helper: 'Large Kf means stable complex forms readily',
        solution: 'Kf = [[Ag(NH₃)₂]⁺] / ([Ag⁺][NH₃]²) = 1.6 × 10⁷',
        realWorldContext: 'Silver recovery from photographic waste'
    });

    // Problem 2: Effect on Solubility
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Formation Increases Solubility',
        problem: 'Explain why AgCl dissolves in NH₃ solution. Ksp(AgCl) = 1.7 × 10⁻¹⁰, Kf([Ag(NH₃)₂]⁺) = 1.6 × 10⁷',
        parameters: {
            Ksp: 1.7e-10,
            Kf: 1.6e7,
            metal_ion: 'Ag⁺',
            ligand: 'NH₃'
        },
        type: 'complex_ion',
        context: { difficulty: 'intermediate', topic: 'Complex Ions and Solubility' },
        subparts: [
            'Given: AgCl(s) in NH₃ solution',
            'Ksp(AgCl) = 1.7 × 10⁻¹⁰',
            'Kf([Ag(NH₃)₂]⁺) = 1.6 × 10⁷',
            'Step 1: Write dissolution equilibrium',
            'AgCl(s) ⇌ Ag⁺(aq) + Cl⁻(aq)',
            'Step 2: Write complex formation',
            'Ag⁺(aq) + 2NH₃(aq) ⇌ [Ag(NH₃)₂]⁺(aq)',
            'Step 3: Add equations (coupled equilibria)',
            'AgCl(s) + 2NH₃(aq) ⇌ [Ag(NH₃)₂]⁺(aq) + Cl⁻(aq)',
            'Step 4: Calculate overall K',
            'K_overall = Ksp × Kf',
            'K = (1.7 × 10⁻¹⁰)(1.6 × 10⁷)',
            'K = 2.7 × 10⁻³',
            'Step 5: Interpretation',
            'K_overall >> Ksp',
            'Complex formation removes Ag⁺',
            'AgCl dissolution shifts right',
            'AgCl becomes soluble in NH₃'
        ],
        helper: 'Complex formation removes free metal ions, increasing solubility',
        solution: 'K_overall = 2.7 × 10⁻³, AgCl dissolves in NH₃',
        realWorldContext: 'Cleaning silver - ammonia dissolves tarnish (AgCl, Ag₂S)'
    });

    // Problem 3: Stepwise Complex Formation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stepwise Formation Constants',
        problem: 'For Cu²⁺ + NH₃, K₁ = 1.9 × 10⁴, K₂ = 3.9 × 10³. Calculate overall Kf for [Cu(NH₃)₂]²⁺.',
        parameters: {
            metal_ion: 'Cu²⁺',
            ligand: 'NH₃',
            K1: 1.9e4,
            K2: 3.9e3
        },
        type: 'complex_ion',
        context: { difficulty: 'intermediate', topic: 'Stepwise Formation Constants' },
        subparts: [
            'Given: Cu²⁺ + NH₃ system',
            'K₁ = 1.9 × 10⁴, K₂ = 3.9 × 10³',
            'Step 1: Write stepwise equations',
            'Step 1: Cu²⁺ + NH₃ ⇌ [Cu(NH₃)]²⁺, K₁ = 1.9 × 10⁴',
            'Step 2: [Cu(NH₃)]²⁺ + NH₃ ⇌ [Cu(NH₃)₂]²⁺, K₂ = 3.9 × 10³',
            'Step 2: Add equations',
            'Cu²⁺ + 2NH₃ ⇌ [Cu(NH₃)₂]²⁺',
            'Step 3: Calculate overall Kf',
            'K_f = K₁ × K₂',
            'K_f = (1.9 × 10⁴)(3.9 × 10³)',
            'K_f = 7.4 × 10⁷',
            'Step 4: Interpretation',
            'Very large K_f indicates very stable complex',
            'First ligand binding strongest (K₁ > K₂)',
            'Each successive ligand binds less strongly',
            'This is typical pattern for stepwise formation'
        ],
        helper: 'Overall Kf = K₁ × K₂ × K₃ × ... (product of stepwise constants)',
        solution: 'K_f = 7.4 × 10⁷',
        realWorldContext: 'Understanding metal-ligand binding in biochemistry'
    });

    // Problem 4: EDTA Complexation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'EDTA Complex Formation',
        problem: 'EDTA forms 1:1 complexes with metal ions. For Ca²⁺-EDTA, Kf = 5.0 × 10¹⁰. Why is EDTA used in water softening?',
        parameters: {
            metal_ion: 'Ca²⁺',
            ligand: 'EDTA',
            Kf: 5.0e10,
            n: 1
        },
        type: 'complex_ion',
        context: { difficulty: 'advanced', topic: 'Chelating Agents' },
        subparts: [
            'Given: Ca²⁺ + EDTA system',
            'Kf = 5.0 × 10¹⁰',
            'Step 1: Write formation equation',
            'Ca²⁺(aq) + EDTA⁴⁻(aq) ⇌ [Ca(EDTA)]²⁻(aq)',
            'Step 2: Analyze Kf magnitude',
            'Kf = 5.0 × 10¹⁰ (extremely large)',
            'Essentially complete complex formation',
            'Step 3: EDTA structure',
            'EDTA is hexadentate ligand',
            'Binds through 6 donor atoms',
            'Forms very stable ring structures (chelate effect)',
            'Step 4: Water softening application',
            'Hard water contains Ca²⁺, Mg²⁺',
            'EDTA binds these ions tightly',
            'Prevents soap scum formation',
            'Prevents scale in pipes',
            'Step 5: Chelate effect',
            'Multiple binding sites = very stable',
            'Entropy-favored (1 + 1 → 1 molecule)',
            'Much more stable than monodentate ligands'
        ],
        helper: 'Chelating agents form multiple bonds, creating very stable complexes',
        solution: 'EDTA binds Ca²⁺/Mg²⁺ strongly (Kf = 5 × 10¹⁰), softening water',
        realWorldContext: 'Water softening, metal ion sequestration in detergents'
    });

    // Problem 5: Amphoteric Hydroxide
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Amphoteric Behavior',
        problem: 'Al(OH)₃ dissolves in both acid and base. Explain using complex ion formation.',
        parameters: {
            metal_ion: 'Al³⁺',
            ligand: 'OH⁻',
            Ksp: 1.3e-33
        },
        type: 'complex_ion',
        context: { difficulty: 'advanced', topic: 'Amphoteric Hydroxides' },
        subparts: [
            'Given: Al(OH)₃ is amphoteric',
            'Ksp = 1.3 × 10⁻³³',
            'Step 1: Behavior in acid',
            'Al(OH)₃(s) + 3H⁺(aq) → Al³⁺(aq) + 3H₂O(l)',
            'H⁺ neutralizes OH⁻',
            'Acts as BASE',
            'Step 2: Behavior in base',
            'Al(OH)₃(s) + OH⁻(aq) → [Al(OH)₄]⁻(aq)',
            'Forms aluminate complex ion',
            'Acts as ACID',
            'Step 3: Molecular explanation',
            'Al³⁺ is small, highly charged',
            'Polarizing power → accepts electron pairs',
            'Can act as Lewis acid',
            'Step 4: Le Chatelier explanation',
            'In acid: removes OH⁻, shifts dissolution right',
            'In base: forms complex, removes Al³⁺, shifts right',
            'Both increase solubility',
            'Step 5: Other amphoteric hydroxides',
            'Zn(OH)₂, Cr(OH)₃, Sn(OH)₂',
            'All form in moderately charged cations'
        ],
        helper: 'Amphoteric: dissolves in both acid (as base) and base (as acid)',
        solution: 'Dissolves in acid as base, in base by forming [Al(OH)₄]⁻ complex',
        realWorldContext: 'Aluminum processing, qualitative analysis separations'
    });

    // Problem 6: Color of Complex Ions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Ion Colors',
        problem: 'Explain why [Cu(H₂O)₆]²⁺ is blue but [Cu(NH₃)₄]²⁺ is deep blue/violet.',
        parameters: {
            metal_ion: 'Cu²⁺',
            ligand: 'NH₃',
            Kf: 1.1e13,
            n: 4
        },
        type: 'complex_ion',
        context: { difficulty: 'intermediate', topic: 'Complex Ion Properties' },
        subparts: [
            'Given: Two Cu²⁺ complexes with different colors',
            '[Cu(H₂O)₆]²⁺ - light blue',
            '[Cu(NH₃)₄]²⁺ - deep blue/violet',
            'Step 1: Ligand field theory basics',
            'Ligands split d-orbital energies',
            'Different ligands cause different splitting',
            'Step 2: Water vs ammonia',
            'NH₃ is stronger field ligand than H₂O',
            'Causes larger d-orbital splitting',
            'Step 3: Color and light absorption',
            'Color = complementary to absorbed light',
            'Larger splitting → higher energy absorbed',
            'Higher energy = shorter wavelength',
            'Step 4: Color change explanation',
            'NH₃ causes larger splitting',
            'Absorbs higher energy (yellow-orange)',
            'Appears deep blue/violet',
            'H₂O causes smaller splitting',
            'Absorbs lower energy (orange-red)',
            'Appears light blue',
            'Step 5: Visible observation',
            'Add NH₃ to Cu²⁺(aq): color darkens',
            'Demonstrates ligand exchange and field strength'
        ],
        helper: 'Stronger field ligands cause larger d-orbital splitting, changing color',
        solution: 'NH₃ causes larger splitting than H₂O, resulting in color change',
        realWorldContext: 'Colorimetric analysis, gemstone colors, transition metal chemistry'
    });

    return relatedProblems;
}

// ============== GAS EQUILIBRIUM - RELATED PROBLEMS GENERATOR ==============

function generateRelatedGasEquilibrium() {
    const relatedProblems = [];

    // Problem 1: Basic Kp Calculation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Calculate Kp from Partial Pressures',
        problem: 'For N₂O₄(g) ⇌ 2NO₂(g), at equilibrium P(N₂O₄) = 0.28 atm, P(NO₂) = 1.1 atm. Find Kp.',
        parameters: {
            products: { 'NO2': 1.1 },
            reactants: { 'N2O4': 0.28 },
            coefficients: { 'N2O4': 1, 'NO2': 2 },
            equation: 'N₂O₄(g) ⇌ 2NO₂(g)'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'beginner', topic: 'Gas Phase Equilibrium' },
        subparts: [
            'Given: N₂O₄(g) ⇌ 2NO₂(g)',
            'P(N₂O₄) = 0.28 atm, P(NO₂) = 1.1 atm',
            'Step 1: Write Kp expression',
            'Kp = P(NO₂)² / P(N₂O₄)',
            'Step 2: Substitute partial pressures',
            'Kp = (1.1)² / 0.28',
            'Kp = 1.21 / 0.28',
            'Kp = 4.32',
            'Step 3: Interpretation',
            'Kp > 1: products somewhat favored',
            'Moderate equilibrium constant',
            'Both species present in significant amounts',
            'Step 4: Temperature dependence',
            'At higher T: more brown NO₂ (endothermic)',
            'At lower T: less brown, more N₂O₄ (exothermic)'
        ],
        helper: 'For gas equilibria, use partial pressures in Kp expression',
        solution: 'Kp = 4.32',
        realWorldContext: 'Observable color change with temperature in NO₂/N₂O₄ system'
    });

    // Problem 2: Kc to Kp Conversion
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Convert Kc to Kp',
        problem: 'For H₂(g) + I₂(g) ⇌ 2HI(g), Kc = 54.3 at 430°C. Calculate Kp.',
        parameters: {
            Kc: 54.3,
            temperature: 703,
            delta_n: 0,
            R: 0.0821,
            equation: 'H₂(g) + I₂(g) ⇌ 2HI(g)'
        },
        type: 'gas_equilibrium',
        context: { difficulty: 'intermediate', topic: 'Kc and Kp Conversion' },
        subparts: [
            'Given: H₂(g) + I₂(g) ⇌ 2HI(g)',
            'Kc = 54.3 at T = 430°C = 703 K',
            'Step 1: Calculate Δn',
            'Δn = (moles gas products) - (moles gas reactants)',
            'Δn = 2 - (1 + 1) = 0',
            'Step 2: Apply relationship',
            'Kp = Kc(RT)^Δn',
            'Kp = Kc(RT)⁰',
            'Kp = Kc × 1',
            'Step 3: Calculate Kp',
            'Kp = 54.3',
            'Step 4: Important conclusion',
            'When Δn = 0, Kp = Kc',
            'Same number of gas moles on each side',
            'Pressure and concentration equilibria identical',
            'Step 5: General rule',
            'Always calculate Δn first',
            'If Δn = 0, no conversion needed'
        ],
        helper: 'When Δn = 0, Kp = Kc (no conversion needed)',
        solution: 'Kp = 54.3 (same as Kc because Δn = 0)',
        realWorldContext: 'Understanding when pressure units matter in equilibrium'
    });

    // Problem 3: ICE Table with Gases
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'ICE Table for Gas Equilibrium',
        problem: 'For PCl₅(g) ⇌ PCl₃(g) + Cl₂(g), Kp = 1.80 at 250°C. Initial P(PCl₅) = 0.500 atm. Find equilibrium pressures.',
        parameters: {
            initial: { 'PCl5': 0.500, 'PCl3': 0, 'Cl2': 0 },
            K: 1.80,
            reactant: 'PCl5',
            product: 'PCl3',
            equation: 'PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)'
        },
        type: 'ice_table',
        context: { difficulty: 'intermediate', topic: 'Gas Equilibrium Calculations' },
        subparts: [
            'Given: PCl₅(g) ⇌ PCl₃(g) + Cl₂(g)',
            'Kp = 1.80, Initial P(PCl₅) = 0.500 atm',
            'Step 1: Set up ICE table (in atm)',
            '        PCl₅   PCl₃   Cl₂',
            'I:      0.500  0      0',
            'C:      -x     +x     +x',
            'E:      0.500-x  x    x',
            'Step 2: Write Kp expression',
            'Kp = P(PCl₃) × P(Cl₂) / P(PCl₅)',
            'Kp = (x)(x) / (0.500 - x) = 1.80',
            'Step 3: Solve for x',
            'x² = 1.80(0.500 - x)',
            'x² = 0.900 - 1.80x',
            'x² + 1.80x - 0.900 = 0',
            'Step 4: Use quadratic formula',
            'x = [-1.80 ± √(3.24 + 3.60)] / 2',
            'x = [-1.80 ± √6.84] / 2',
            'x = [-1.80 ± 2.615] / 2',
            'x = 0.408 atm (positive root)',
            'Step 5: Calculate equilibrium pressures',
            'P(PCl₅) = 0.500 - 0.408 = 0.092 atm',
            'P(PCl₃) = 0.408 atm',
            'P(Cl₂) = 0.408 atm',
            'Check: Kp = (0.408)(0.408)/0.092 = 1.81 ≈ 1.80 ✓'
        ],
        helper: 'ICE tables work same way for gases using partial pressures',
        solution: 'P(PCl₅) = 0.092 atm, P(PCl₃) = P(Cl₂) = 0.408 atm',
        realWorldContext: 'PCl₅ decomposition in industrial chlorination processes'
    });

    // Problem 4: Pressure Effect on Equilibrium
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Effect of Pressure Change',
        problem: 'For N₂(g) + 3H₂(g) ⇌ 2NH₃(g), system is at equilibrium. If volume is halved, predict the shift.',
        parameters: {
            stress: 'volume halved (pressure doubled)',
            stressType: 'increasePressure',
            reaction: 'N₂(g) + 3H₂(g) ⇌ 2NH₃(g)',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: 'Pressure Effects on Gas Equilibria' },
        subparts: [
            'Given: N₂(g) + 3H₂(g) ⇌ 2NH₃(g) at equilibrium',
            'Change: Volume halved (pressure doubled)',
            'Step 1: Count moles of gas',
            'Reactants: 1 + 3 = 4 moles gas',
            'Products: 2 moles gas',
            'Δn = 2 - 4 = -2 (decrease in moles)',
            'Step 2: Apply Le Chatelier\'s Principle',
            'Halving volume doubles all partial pressures',
            'System responds to reduce pressure',
            'Shifts toward fewer moles of gas',
            'Step 3: Predict shift',
            'Shift RIGHT (toward products)',
            '4 moles → 2 moles',
            'Step 4: Effect on concentrations',
            '[N₂] decreases',
            '[H₂] decreases',
            '[NH₃] increases',
            'Step 5: Effect on K',
            'Kp unchanged (temperature constant)',
            'Kc changes because concentrations change',
            'New equilibrium position, same K'
        ],
        helper: 'Decreasing volume (increasing pressure) favors fewer gas moles',
        solution: 'Shifts RIGHT toward NH₃ (fewer moles of gas)',
        realWorldContext: 'High pressure (200-300 atm) used in Haber process'
    });

    // Problem 5: Temperature Effect on Gas Equilibrium
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Effect on Kp',
        problem: 'For N₂(g) + O₂(g) ⇌ 2NO(g), ΔH° = +180 kJ. At 2000 K, Kp = 4.0 × 10⁻⁴. At 2500 K, Kp = 0.10. Explain.',
        parameters: {
            K1: 4.0e-4,
            T1: 2000,
            K2: 0.10,
            T2: 2500,
            delta_H: 180,
            equation: 'N₂(g) + O₂(g) ⇌ 2NO(g)'
        },
        type: 'temperature_effect',
        context: { difficulty: 'advanced', topic: 'Temperature Dependence of K' },
        subparts: [
            'Given: N₂(g) + O₂(g) ⇌ 2NO(g)',
            'ΔH° = +180 kJ (endothermic)',
            'At 2000 K: Kp = 4.0 × 10⁻⁴',
            'At 2500 K: Kp = 0.10',
            'Step 1: Identify reaction type',
            'ΔH° > 0: endothermic',
            'Can write: N₂ + O₂ + heat ⇌ 2NO',
            'Step 2: Apply van\'t Hoff principle',
            'For endothermic: K increases with T',
            'Higher T favors products',
            'Step 3: Verify trend',
            'T increases: 2000 K → 2500 K',
            'Kp increases: 4.0 × 10⁻⁴ → 0.10',
            'Increase by factor of 250!',
            'Step 4: Molecular explanation',
            'Higher T provides energy for bond breaking',
            'Overcomes activation barrier',
            'More NO forms',
            'Step 5: Practical significance',
            'NO forms in high-T combustion (engines, lightning)',
            'Environmental concern (NOₓ pollution)',
            'This is why hot engines produce NO'
        ],
        helper: 'Endothermic reactions: K increases with temperature',
        solution: 'Kp increases dramatically with T (endothermic reaction)',
        realWorldContext: 'NOₓ formation in automobile engines and power plants'
    });

    // Problem 6: Equilibrium with Inert Gas
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Inert Gas at Constant Pressure',
        problem: 'For 2SO₂(g) + O₂(g) ⇌ 2SO₃(g) at equilibrium, Ar is added at constant pressure. Predict the shift.',
        parameters: {
            stress: 'Ar added at constant P',
            stressType: 'addInertGas',
            reaction: '2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
            exothermic: true
        },
        type: 'le_chatelier',
        context: { difficulty: 'intermediate', topic: 'Inert Gas Effects' },
        subparts: [
            'Given: 2SO₂(g) + O₂(g) ⇌ 2SO₃(g)',
            'Change: Add Ar at constant pressure',
            'Step 1: Understand constant pressure condition',
            'Adding Ar at constant P means volume increases',
            'Volume must increase to keep P constant',
            'Step 2: Effect on partial pressures',
            'Volume increases',
            'All partial pressures decrease',
            'Dilution effect',
            'Step 3: Count moles',
            'Reactants: 2 + 1 = 3 moles',
            'Products: 2 moles',
            'Δn = -1',
            'Step 4: Apply Le Chatelier',
            'Partial pressures decreased (like decreasing P)',
            'System shifts toward more moles',
            'Shift LEFT (toward reactants)',
            'Step 5: Contrast with constant V',
            'At constant V: no effect',
            'At constant P: shifts toward more moles',
            'Important distinction!'
        ],
        helper: 'Inert gas at constant P causes dilution, shifts toward more moles',
        solution: 'Shifts LEFT toward reactants (more moles)',
        realWorldContext: 'Understanding dilution effects in gas-phase reactions'
    });

    // Problem 7: Heterogeneous Gas Equilibrium
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heterogeneous Equilibrium with Gas',
        problem: 'For CaCO₃(s) ⇌ CaO(s) + CO₂(g), at 800°C, P(CO₂) = 0.236 atm. Find Kp. What happens if CaCO₃ amount doubles?',
        parameters: {
            products: { 'CO2': 0.236 },
            reactants: {},
            coefficients: { 'CaCO3': 1, 'CaO': 1, 'CO2': 1 },
            equation: 'CaCO₃(s) ⇌ CaO(s) + CO₂(g)'
        },
        type: 'equilibrium_constant',
        context: { difficulty: 'intermediate', topic: 'Heterogeneous Gas Equilibria' },
        subparts: [
            'Given: CaCO₃(s) ⇌ CaO(s) + CO₂(g)',
            'At 800°C: P(CO₂) = 0.236 atm',
            'Step 1: Write Kp expression',
            'Kp = P(CO₂)',
            'Note: Solids not included',
            'Step 2: Calculate Kp',
            'Kp = 0.236 atm',
            'Step 3: Effect of doubling CaCO₃',
            'Amount of solid does NOT affect equilibrium',
            'As long as SOME solid present',
            'P(CO₂) remains 0.236 atm',
            'Kp unchanged',
            'Step 4: Explanation',
            'Activity of pure solid = 1 (constant)',
            'Concentration doesn\'t change',
            'Only presence/absence matters',
            'Step 5: Practical significance',
            'More CaCO₃ means reaction runs longer',
            'But equilibrium pressure same',
            'Used in lime kilns for CaO production'
        ],
        helper: 'For heterogeneous equilibria, only gases/solutions in K expression',
        solution: 'Kp = 0.236 atm; doubling CaCO₃ has no effect',
        realWorldContext: 'Lime production from limestone decomposition'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING EQUILIBRIUM WORKBOOKS ==============

function solveEquilibriumConstantsProblems() {
    const problems = generateRelatedEquilibriumConstants();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Equilibrium Constant Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedEquilibriumChemistryWorkbook({
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

        workbook.solveEquilibriumProblem({
            equation: problem.parameters.equation || problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context,
            scenario: problem.scenario
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveLeChatelierProblems() {
    const problems = generateRelatedLeChatelier();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Le Chatelier Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedEquilibriumChemistryWorkbook({
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

        workbook.solveEquilibriumProblem({
            equation: problem.parameters.reaction || problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context,
            scenario: problem.scenario
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveSolubilityProblems() {
    const problems = generateRelatedSolubilityEquilibria();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Solubility Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedEquilibriumChemistryWorkbook({
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

        workbook.solveEquilibriumProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context,
            scenario: problem.scenario
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveComplexIonProblems() {
    const problems = generateRelatedComplexIons();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Complex Ion Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedEquilibriumChemistryWorkbook({
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

        workbook.solveEquilibriumProblem({
            equation: problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context,
            scenario: problem.scenario
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveGasEquilibriumProblems() {
    const problems = generateRelatedGasEquilibrium();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Gas Equilibrium Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedEquilibriumChemistryWorkbook({
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

        workbook.solveEquilibriumProblem({
            equation: problem.parameters.equation || problem.problem,
            problemType: problem.type,
            parameters: problem.parameters,
            context: problem.context,
            scenario: problem.scenario
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveEquilibriumDocument() {
    console.log('Generating Comprehensive Equilibrium Chemistry Workbook...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Equilibrium Chemistry Workbook',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { after: 200 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Complete Guide with Enhanced Multi-Layer Explanations',
            spacing: { after: 150 },
            alignment: docx.AlignmentType.CENTER
        })
    );

    documentChildren.push(
        new docx.Paragraph({
            text: 'Equilibrium Constants, Le Chatelier, Solubility, Complex Ions, and Gas Equilibria',
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

    // Part I: Equilibrium Constants
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Equilibrium Constants (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const equilibriumConstantsProblems = generateRelatedEquilibriumConstants();
    equilibriumConstantsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Le Chatelier's Principle
    documentChildren.push(
        new docx.Paragraph({
            text: "Part II: Le Chatelier's Principle (7 Problems)",
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const leChatelierProblems = generateRelatedLeChatelier();
    leChatelierProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Solubility Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Solubility Equilibria (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const solubilityProblems = generateRelatedSolubilityEquilibria();
    solubilityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Complex Ion Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Complex Ion Equilibria (6 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const complexIonProblems = generateRelatedComplexIons();
    complexIonProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Gas Phase Equilibria
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gas Phase Equilibria (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const gasEquilibriumProblems = generateRelatedGasEquilibrium();
    gasEquilibriumProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 28}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: EQUILIBRIUM CONSTANTS ==============
    console.log('\nProcessing Part I: Equilibrium Constants...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Equilibrium Constants',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const equilibriumConstantsSolved = solveEquilibriumConstantsProblems();
    equilibriumConstantsSolved.forEach((solved, index) => {
        console.log(`  Adding Equilibrium Constant Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: LE CHATELIER'S PRINCIPLE ==============
    console.log('\nProcessing Part II: Le Chatelier\'s Principle...');
    documentChildren.push(
        new docx.Paragraph({
            text: "Part II: Le Chatelier's Principle",
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const leChatelierSolved = solveLeChatelierProblems();
    leChatelierSolved.forEach((solved, index) => {
        console.log(`  Adding Le Chatelier Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: SOLUBILITY EQUILIBRIA ==============
    console.log('\nProcessing Part III: Solubility Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Solubility Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const solubilitySolved = solveSolubilityProblems();
    solubilitySolved.forEach((solved, index) => {
        console.log(`  Adding Solubility Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: COMPLEX ION EQUILIBRIA ==============
    console.log('\nProcessing Part IV: Complex Ion Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Complex Ion Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const complexIonSolved = solveComplexIonProblems();
    complexIonSolved.forEach((solved, index) => {
        console.log(`  Adding Complex Ion Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: GAS PHASE EQUILIBRIA ==============
    console.log('\nProcessing Part V: Gas Phase Equilibria...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Gas Phase Equilibria',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const gasEquilibriumSolved = solveGasEquilibriumProblems();
    gasEquilibriumSolved.forEach((solved, index) => {
        console.log(`  Adding Gas Equilibrium Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
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
        const filename = 'comprehensive_equilibrium_chemistry_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE EQUILIBRIUM CHEMISTRY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 34');
        console.log('    - Equilibrium Constants: 7 problems');
        console.log('    - Le Chatelier\'s Principle: 7 problems');
        console.log('    - Solubility Equilibria: 7 problems');
        console.log('    - Complex Ion Equilibria: 6 problems');
        console.log('    - Gas Phase Equilibria: 7 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Equilibrium Constants (Problems 1-7)');
        console.log('  • Part II: Le Chatelier\'s Principle (Problems 8-14)');
        console.log('  • Part III: Solubility Equilibria (Problems 15-21)');
        console.log('  • Part IV: Complex Ion Equilibria (Problems 22-27)');
        console.log('  • Part V: Gas Phase Equilibria (Problems 28-34)');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Real-world context and applications');
        console.log('  • Complete step-by-step solution with:');
        console.log('    - Enhanced multi-layer explanations');
        console.log('    - Conceptual, procedural, visual perspectives');
        console.log('    - Error prevention and common mistakes');
        console.log('    - Verification with detailed checks');
        console.log('    - Key concepts and theory');
        console.log('    - Pedagogical notes for teaching');
        console.log('    - Alternative solution methods');
        console.log('    - Scaffolded learning support');
        console.log('\n🎓 FEATURES:');
        console.log('  • Progressive difficulty levels (easier → similar → harder)');
        console.log('  • Chemical equations with proper notation');
        console.log('  • ICE tables and equilibrium calculations');
        console.log('  • Industrial and environmental applications');
        console.log('  • Connections between related concepts');
        console.log('  • Temperature, pressure, and concentration effects');
        console.log('  • Solubility product and precipitation predictions');
        console.log('  • Complex ion formation and stability');
        console.log('  • Gas phase equilibria with Kp and Kc');
        console.log('\n🔬 TOPICS COVERED:');
        console.log('  • K calculation and interpretation');
        console.log('  • ICE table methodology');
        console.log('  • Le Chatelier\'s Principle applications');
        console.log('  • Ksp and solubility calculations');
        console.log('  • Common ion effect');
        console.log('  • Selective precipitation');
        console.log('  • pH-dependent solubility');
        console.log('  • Complex ion formation constants (Kf)');
        console.log('  • Chelating agents (EDTA)');
        console.log('  • Amphoteric hydroxides');
        console.log('  • Kp and Kc relationships');
        console.log('  • Pressure and volume effects');
        console.log('  • Temperature dependence (van\'t Hoff)');
        console.log('  • Heterogeneous equilibria');
        console.log('\n🌍 REAL-WORLD APPLICATIONS:');
        console.log('  • Haber process (ammonia synthesis)');
        console.log('  • Contact process (sulfuric acid)');
        console.log('  • Water softening and treatment');
        console.log('  • Antacid chemistry');
        console.log('  • Photography (silver halides)');
        console.log('  • Environmental chemistry (NOx formation)');
        console.log('  • Qualitative analysis');
        console.log('  • Industrial process optimization');
        console.log('  • Biochemical equilibria');
        console.log('  • Metal ion separations');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE EQUILIBRIUM DOCUMENT GENERATION ==============

generateComprehensiveEquilibriumDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
