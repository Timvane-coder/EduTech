import { EnhancedAtomicChemicalWorkbook } from './atomicbonding.js';
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

// ============== ATOMIC STRUCTURE RELATED PROBLEMS GENERATORS ==============

function generateRelatedAtomicStructure() {
    const relatedProblems = [];

    // Problem 1: Basic Isotope Notation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Isotope Notation',
        problem: 'Write the isotope notation and find all subatomic particles for Carbon-14',
        parameters: { 
            element: 'C', 
            atomicNumber: 6, 
            massNumber: 14, 
            charge: 0 
        },
        type: 'subatomic_particles',
        context: { difficulty: 'beginner', topic: 'Atomic Structure - Isotope Notation' },
        subparts: [
            'Given: Carbon-14 (C-14)',
            'Atomic number (Z) = 6 (from periodic table)',
            'Mass number (A) = 14 (given)',
            'Step 1: Find protons',
            'Protons = Atomic number = 6',
            'Step 2: Find neutrons',
            'Neutrons = Mass number - Atomic number',
            'Neutrons = 14 - 6 = 8',
            'Step 3: Find electrons (neutral atom)',
            'Electrons = Protons = 6',
            'Step 4: Write isotope notation',
            'Notation: ¹⁴₆C or Carbon-14',
            'Result: 6 protons, 8 neutrons, 6 electrons'
        ],
        helper: 'Protons = Z, Neutrons = A - Z, Electrons = Z (for neutral atoms)',
        solution: '6 protons, 8 neutrons, 6 electrons',
        realWorldContext: 'Carbon-14 is used in radiocarbon dating of ancient artifacts'
    });

    // Problem 2: Ion Particle Composition
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ion Particle Composition',
        problem: 'Find the subatomic particle composition of Al³⁺ (Aluminum ion, mass number 27)',
        parameters: { 
            element: 'Al', 
            atomicNumber: 13, 
            massNumber: 27, 
            charge: 3 
        },
        type: 'subatomic_particles',
        context: { difficulty: 'intermediate', topic: 'Atomic Structure - Ions' },
        subparts: [
            'Given: Al³⁺, mass number = 27',
            'Atomic number (Z) = 13',
            'Charge = +3',
            'Step 1: Protons',
            'Protons = Z = 13 (never changes)',
            'Step 2: Neutrons',
            'Neutrons = A - Z = 27 - 13 = 14',
            'Step 3: Electrons (ion)',
            'Electrons = Protons - Charge',
            'Electrons = 13 - 3 = 10',
            'The +3 charge means 3 electrons lost',
            'Result: 13 protons, 14 neutrons, 10 electrons'
        ],
        helper: 'For ions: electrons = protons - charge',
        solution: '13 protons, 14 neutrons, 10 electrons',
        realWorldContext: 'Aluminum ions are important in aluminum production and batteries'
    });

    // Problem 3: Relative Atomic Mass Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relative Atomic Mass from Isotopes',
        problem: 'Calculate the relative atomic mass of Chlorine given: Cl-35 (75.77%) and Cl-37 (24.23%)',
        parameters: { 
            isotopes: [
                { mass: 35, abundance: 75.77 },
                { mass: 37, abundance: 24.23 }
            ]
        },
        type: 'relative_atomic_mass',
        context: { difficulty: 'intermediate', topic: 'Atomic Structure - Relative Atomic Mass' },
        subparts: [
            'Given: Cl-35 (75.77%), Cl-37 (24.23%)',
            'Step 1: Verify abundances sum to 100%',
            '75.77 + 24.23 = 100.00% ✓',
            'Step 2: Convert percentages to decimals',
            '75.77% = 0.7577, 24.23% = 0.2423',
            'Step 3: Calculate weighted average',
            'Ar = (mass₁ × abundance₁) + (mass₂ × abundance₂)',
            'Ar = (35 × 0.7577) + (37 × 0.2423)',
            'Ar = 26.5195 + 8.9651',
            'Ar = 35.4846 u',
            'Result: Relative atomic mass = 35.48 u'
        ],
        helper: 'Ar = Σ(mass × abundance as decimal)',
        solution: 'Ar = 35.48 u',
        realWorldContext: 'Explains why chlorine has atomic mass ~35.5 on periodic table'
    });

    // Problem 4: Electron Configuration
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron Configuration',
        problem: 'Write the electron configuration for Sodium (Na, Z=11)',
        parameters: { 
            element: 'Na', 
            atomicNumber: 11 
        },
        type: 'electron_configuration',
        context: { difficulty: 'beginner', topic: 'Atomic Structure - Electron Configuration' },
        subparts: [
            'Given: Sodium (Na), Z = 11',
            'Total electrons = 11',
            'Step 1: Fill shells using 2, 8, 8, 18 rule',
            'Shell 1: max 2 electrons → fill with 2',
            'Remaining: 11 - 2 = 9',
            'Shell 2: max 8 electrons → fill with 8',
            'Remaining: 9 - 8 = 1',
            'Shell 3: place remaining 1 electron',
            'Configuration: 2, 8, 1',
            'Valence electrons = 1 (outermost shell)',
            'Result: Electronic structure = 2, 8, 1'
        ],
        helper: 'Fill shells: 2, 8, 8, 18... starting from innermost',
        solution: '2, 8, 1',
        realWorldContext: 'The 1 valence electron makes sodium highly reactive'
    });

    // Problem 5: Relative Molecular Mass
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Relative Molecular Mass',
        problem: 'Calculate the relative molecular mass (Mr) of water (H₂O)',
        parameters: { 
            formula: 'H₂O',
            elements: [
                { symbol: 'H', count: 2 },
                { symbol: 'O', count: 1 }
            ]
        },
        type: 'relative_molecular_mass',
        context: { difficulty: 'beginner', topic: 'Atomic Structure - Molecular Mass' },
        subparts: [
            'Given: H₂O',
            'Step 1: Identify elements and counts',
            'H: 2 atoms, O: 1 atom',
            'Step 2: Look up atomic masses',
            'H: 1.008 u, O: 15.999 u',
            'Step 3: Calculate contributions',
            'H contribution: 2 × 1.008 = 2.016 u',
            'O contribution: 1 × 15.999 = 15.999 u',
            'Step 4: Sum all contributions',
            'Mr = 2.016 + 15.999 = 18.015 u',
            'Result: Mr(H₂O) = 18.02 u'
        ],
        helper: 'Mr = Σ(atomic mass × count for each element)',
        solution: 'Mr = 18.02 u',
        realWorldContext: 'Used to calculate amounts in chemical reactions'
    });

    // Problem 6: Complex Molecular Mass
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Molecular Mass',
        problem: 'Calculate Mr of sulfuric acid (H₂SO₄)',
        parameters: { 
            formula: 'H₂SO₄',
            elements: [
                { symbol: 'H', count: 2 },
                { symbol: 'S', count: 1 },
                { symbol: 'O', count: 4 }
            ]
        },
        type: 'relative_molecular_mass',
        context: { difficulty: 'intermediate', topic: 'Atomic Structure - Complex Formulas' },
        subparts: [
            'Given: H₂SO₄',
            'Step 1: Identify all elements',
            'H: 2, S: 1, O: 4',
            'Step 2: Atomic masses',
            'H: 1.008 u, S: 32.06 u, O: 15.999 u',
            'Step 3: Calculate each contribution',
            'H: 2 × 1.008 = 2.016 u',
            'S: 1 × 32.06 = 32.06 u',
            'O: 4 × 15.999 = 63.996 u',
            'Step 4: Sum',
            'Mr = 2.016 + 32.06 + 63.996',
            'Mr = 98.072 u',
            'Result: Mr(H₂SO₄) = 98.07 u'
        ],
        helper: 'Count each atom type carefully, especially subscripts',
        solution: 'Mr = 98.07 u',
        realWorldContext: 'Sulfuric acid is one of the most important industrial chemicals'
    });

    // Problem 7: Avogadro Conversion
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Avogadro\'s Number Conversion',
        problem: 'How many molecules are in 0.5 moles of CO₂?',
        parameters: { 
            moles: 0.5, 
            direction: 'moles_to_particles' 
        },
        type: 'avogadro_conversion',
        context: { difficulty: 'intermediate', topic: 'Atomic Structure - Mole Concept' },
        subparts: [
            'Given: n = 0.5 moles of CO₂',
            'Avogadro\'s constant: Nₐ = 6.022 × 10²³',
            'Step 1: Use formula',
            'Number of particles = n × Nₐ',
            'Step 2: Substitute values',
            'N = 0.5 × 6.022 × 10²³',
            'Step 3: Calculate',
            'N = 3.011 × 10²³ molecules',
            'Result: 3.011 × 10²³ molecules of CO₂'
        ],
        helper: 'N = n × Avogadro\'s constant',
        solution: '3.011 × 10²³ molecules',
        realWorldContext: 'Links macroscopic amounts to microscopic particle counts'
    });

    return relatedProblems;
}

function generateRelatedQuantumNumbers() {
    const relatedProblems = [];

    // Problem 1: Principal Quantum Number
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Principal Quantum Number',
        problem: 'Identify the shell (principal quantum number n) for an electron in the 3rd energy level',
        parameters: { 
            shell: 3,
            energyLevel: 3
        },
        type: 'electron_configuration',
        context: { difficulty: 'beginner', topic: 'Quantum Numbers - Principal' },
        subparts: [
            'Given: 3rd energy level',
            'Principal quantum number n = 3',
            'This represents the 3rd shell (M shell)',
            'Maximum electrons in shell = 2n²',
            'Maximum = 2(3)² = 2(9) = 18 electrons',
            'Energy increases with n',
            'Shell 3 has higher energy than shells 1 and 2'
        ],
        helper: 'n = energy level number, determines shell size',
        solution: 'n = 3, max 18 electrons',
        realWorldContext: 'Quantum numbers describe electron properties in atoms'
    });

    // Problem 2: Shell Capacity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Maximum Shell Capacity',
        problem: 'Calculate the maximum number of electrons in the 4th shell',
        parameters: { 
            shell: 4
        },
        type: 'electron_configuration',
        context: { difficulty: 'intermediate', topic: 'Quantum Numbers - Shell Capacity' },
        subparts: [
            'Given: n = 4 (4th shell)',
            'Formula: Maximum electrons = 2n²',
            'Step 1: Substitute n = 4',
            'Max = 2(4)²',
            'Step 2: Calculate',
            'Max = 2(16) = 32 electrons',
            'Simplified MSCE rule: 2, 8, 8, 18, 18...',
            'For n=4: 18 electrons (simplified)',
            'Result: 32 (theoretical) or 18 (MSCE level)'
        ],
        helper: 'Max electrons = 2n² (or use 2, 8, 8, 18 pattern)',
        solution: 'Max = 18 electrons (MSCE level)',
        realWorldContext: 'Explains periodic table structure and electron arrangement'
    });

    // Problem 3: Valence Electrons
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Valence Electrons Identification',
        problem: 'How many valence electrons does Chlorine (2, 8, 7) have?',
        parameters: { 
            element: 'Cl',
            electronConfig: '2,8,7'
        },
        type: 'electron_configuration',
        context: { difficulty: 'beginner', topic: 'Quantum Numbers - Valence Electrons' },
        subparts: [
            'Given: Cl electron configuration = 2, 8, 7',
            'Step 1: Identify outermost shell',
            'Outermost shell is shell 3',
            'Step 2: Count electrons in outermost shell',
            'Shell 3 has 7 electrons',
            'These are valence electrons',
            'Step 3: Significance',
            '7 valence electrons → Group 7 (halogens)',
            'Needs 1 more electron for stable octet',
            'Result: 7 valence electrons'
        ],
        helper: 'Valence electrons = electrons in outermost shell',
        solution: '7 valence electrons',
        realWorldContext: 'Valence electrons determine chemical reactivity and bonding'
    });

    return relatedProblems;
}

function generateRelatedElectronConfiguration() {
    const relatedProblems = [];

    // Problem 1: Simple Configuration
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Electron Configuration',
        problem: 'Write the electron configuration for Oxygen (O, Z=8)',
        parameters: { 
            element: 'O', 
            atomicNumber: 8 
        },
        type: 'electron_configuration',
        context: { difficulty: 'beginner', topic: 'Electron Configuration - Simple' },
        subparts: [
            'Given: Oxygen, Z = 8',
            'Total electrons = 8',
            'Step 1: Fill shell 1 (max 2)',
            'Shell 1: 2 electrons, remaining = 6',
            'Step 2: Fill shell 2 (max 8)',
            'Shell 2: 6 electrons, remaining = 0',
            'Configuration: 2, 6',
            'Valence electrons = 6',
            'Group = 6 (Group 16 modern)',
            'Result: 2, 6'
        ],
        helper: 'Fill shells in order: 2, 8, 8, 18...',
        solution: '2, 6',
        realWorldContext: '6 valence electrons make oxygen highly reactive'
    });

    // Problem 2: Ion Configuration
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ion Electron Configuration',
        problem: 'Write electron configuration for O²⁻ ion',
        parameters: { 
            element: 'O', 
            atomicNumber: 8,
            electrons: 10,
            charge: -2
        },
        type: 'electron_configuration',
        context: { difficulty: 'intermediate', topic: 'Electron Configuration - Ions' },
        subparts: [
            'Given: O²⁻ (oxide ion)',
            'Neutral O has 8 electrons',
            '−2 charge means gained 2 electrons',
            'Total electrons = 8 + 2 = 10',
            'Step 1: Fill shell 1',
            'Shell 1: 2 electrons',
            'Step 2: Fill shell 2',
            'Shell 2: 8 electrons',
            'Configuration: 2, 8',
            'Same as Neon (noble gas)',
            'Result: 2, 8 (stable octet)'
        ],
        helper: 'Negative ions gain electrons, positive ions lose electrons',
        solution: '2, 8',
        realWorldContext: 'Ions achieve stable noble gas configurations'
    });

    // Problem 3: Transition Element
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transition Element Configuration',
        problem: 'Write electron configuration for Iron (Fe, Z=26)',
        parameters: { 
            element: 'Fe', 
            atomicNumber: 26 
        },
        type: 'electron_configuration',
        context: { difficulty: 'advanced', topic: 'Electron Configuration - Transition Metals' },
        subparts: [
            'Given: Iron, Z = 26',
            'Total electrons = 26',
            'Step 1: Shell 1 (max 2)',
            'Shell 1: 2 electrons, remaining = 24',
            'Step 2: Shell 2 (max 8)',
            'Shell 2: 8 electrons, remaining = 16',
            'Step 3: Shell 3 (max 8 for MSCE)',
            'Shell 3: 8 electrons, remaining = 8',
            'Step 4: Shell 4',
            'Shell 4: 8 electrons',
            'Configuration: 2, 8, 8, 8',
            'Note: Transition metal, d-orbitals involved',
            'Result: 2, 8, 14, 2 (detailed) or 2, 8, 8, 8 (simplified)'
        ],
        helper: 'For transition metals, inner shells may not be complete',
        solution: '2, 8, 14, 2 or 2, 8, 8, 8',
        realWorldContext: 'Iron\'s configuration explains its variable oxidation states'
    });

    return relatedProblems;
}

function generateRelatedPeriodicTrends() {
    const relatedProblems = [];

    // Problem 1: Atomic Radius Trend
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Atomic Radius Comparison',
        problem: 'Compare atomic radii: Which is larger, Na or Cl? Explain using electron configuration.',
        parameters: { 
            element1: 'Na',
            element2: 'Cl',
            property: 'atomic_radius'
        },
        type: 'electron_configuration',
        context: { difficulty: 'intermediate', topic: 'Periodic Trends - Atomic Radius' },
        subparts: [
            'Given: Na vs Cl (same period)',
            'Na configuration: 2, 8, 1',
            'Cl configuration: 2, 8, 7',
            'Both in period 3',
            'Step 1: Understand trend',
            'Across a period: atomic radius decreases',
            'Reason: more protons → stronger nuclear pull',
            'Same number of shells',
            'Step 2: Apply to Na and Cl',
            'Na has fewer protons (11) than Cl (17)',
            'Cl has stronger nuclear attraction',
            'Result: Na has larger atomic radius'
        ],
        helper: 'Atomic radius decreases across a period (left to right)',
        solution: 'Na is larger than Cl',
        realWorldContext: 'Explains why elements get smaller across periods'
    });

    // Problem 2: Ionization Energy
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ionization Energy Trend',
        problem: 'Explain why fluorine has higher ionization energy than sodium',
        parameters: { 
            element1: 'F',
            element2: 'Na',
            property: 'ionization_energy'
        },
        type: 'electron_configuration',
        context: { difficulty: 'intermediate', topic: 'Periodic Trends - Ionization Energy' },
        subparts: [
            'Given: F vs Na',
            'F configuration: 2, 7',
            'Na configuration: 2, 8, 1',
            'Step 1: Define ionization energy',
            'Energy needed to remove an electron',
            'Step 2: Consider F',
            'F has 7 valence electrons',
            'Small atomic radius',
            'Strong nuclear attraction',
            'Hard to remove electron',
            'Step 3: Consider Na',
            'Na has 1 valence electron',
            'Larger atomic radius',
            'Weaker nuclear attraction',
            'Easy to remove electron',
            'Result: F has higher ionization energy'
        ],
        helper: 'Ionization energy increases across period, decreases down group',
        solution: 'F > Na in ionization energy',
        realWorldContext: 'Explains reactivity patterns in periodic table'
    });

    return relatedProblems;
}

function generateRelatedBonding() {
    const relatedProblems = [];

    // Problem 1: Simple Ionic Formula
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Ionic Formula',
        problem: 'Write the formula for the ionic compound formed between Na⁺ and Cl⁻',
        parameters: { 
            cation: 'Na',
            anion: 'Cl',
            cationCharge: 1,
            anionCharge: -1
        },
        type: 'ionic_formula',
        context: { difficulty: 'beginner', topic: 'Chemical Bonding - Simple Ionic' },
        subparts: [
            'Given: Na⁺ (charge +1) and Cl⁻ (charge −1)',
            'Step 1: Write charges',
            'Na: +1, Cl: −1',
            'Step 2: Cross-over method',
            'Na gets subscript 1, Cl gets subscript 1',
            'Step 3: Simplify',
            'Na₁Cl₁ → NaCl',
            'Step 4: Verify charge balance',
            'Total positive: +1',
            'Total negative: −1',
            'Net charge: 0 ✓',
            'Result: NaCl (sodium chloride)'
        ],
        helper: 'Cross charges and simplify, total charge must be zero',
        solution: 'NaCl',
        realWorldContext: 'Table salt (sodium chloride) formula'
    });

    // Problem 2: Complex Ionic Formula
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Complex Ionic Formula',
        problem: 'Write the formula for aluminum oxide (Al³⁺ and O²⁻)',
        parameters: { 
            cation: 'Al',
            anion: 'O',
            cationCharge: 3,
            anionCharge: -2
        },
        type: 'ionic_formula',
        context: { difficulty: 'intermediate', topic: 'Chemical Bonding - Complex Ionic' },
        subparts: [
            'Given: Al³⁺ and O²⁻',
            'Step 1: Identify charges',
            'Al: +3, O: −2',
            'Step 2: Cross-over',
            'Al gets subscript 2',
            'O gets subscript 3',
            'Al₂O₃',
            'Step 3: Check if simplification needed',
            'GCD(2, 3) = 1, already simplest',
            'Step 4: Verify',
            'Total positive: 2 × (+3) = +6',
            'Total negative: 3 × (−2) = −6',
            'Net: 0 ✓',
            'Result: Al₂O₃'
        ],
        helper: 'Cross charges, simplify ratio, verify neutrality',
        solution: 'Al₂O₃',
        realWorldContext: 'Aluminum oxide (alumina) used in ceramics and abrasives'
    });

    // Problem 3: Valency Determination
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Valency from Configuration',
        problem: 'Determine the valency of Magnesium (Mg, 2, 8, 2)',
        parameters: { 
            element: 'Mg',
            electronConfig: '2,8,2'
        },
        type: 'valency_oxidation',
        context: { difficulty: 'beginner', topic: 'Chemical Bonding - Valency' },
        subparts: [
            'Given: Mg configuration = 2, 8, 2',
            'Step 1: Count valence electrons',
            'Valence electrons = 2 (outermost shell)',
            'Step 2: Determine valency',
            'Easier to lose 2 than gain 6',
            'Valency = 2 (loses 2 electrons)',
            'Forms Mg²⁺ ion',
            'Step 3: Verify with group',
            'Mg in Group 2 → valency 2 ✓',
            'Result: Valency = 2'
        ],
        helper: 'Valency = electrons lost/gained to achieve stable octet',
        solution: 'Valency = 2',
        realWorldContext: 'Valency determines combining capacity in compounds'
    });

    // Problem 4: Oxidation Number
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Oxidation Number in Compound',
        problem: 'Find the oxidation number of S in H₂SO₄',
        parameters: { 
            compound: 'H₂SO₄',
            element: 'S'
        },
        type: 'valency_oxidation',
        context: { difficulty: 'intermediate', topic: 'Chemical Bonding - Oxidation Numbers' },
        subparts: [
            'Given: H₂SO₄, find oxidation number of S',
            'Step 1: Assign known oxidation numbers',
            'H: +1 (rule: H is usually +1)',
            'O: −2 (rule: O is usually −2)',
            'Step 2: Set up equation',
            'Sum of oxidation numbers = 0 (neutral molecule)',
            '2(+1) + 1(S) + 4(−2) = 0',
            'Step 3: Solve for S',
            '2 + S − 8 = 0',
            'S = +6',
            'Result: Oxidation number of S = +6'
        ],
        helper: 'Sum of oxidation numbers = overall charge',
        solution: 'Oxidation number of S = +6',
        realWorldContext: 'Oxidation numbers help track electron transfer in reactions'
    });

    return relatedProblems;
}

function generateRelatedMolecularGeometry() {
    const relatedProblems = [];

    // Problem 1: Linear Geometry
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Linear Molecular Geometry',
        problem: 'Determine the molecular shape of CO₂ (2 bonding pairs, 0 lone pairs on C)',
        parameters: { 
            molecule: 'CO₂',
            centralAtom: 'C',
            bondingPairs: 2,
            lonePairs: 0
        },
        type: 'molecular_shape',
        context: { difficulty: 'beginner', topic: 'Molecular Geometry - Linear' },
        subparts: [
            'Given: CO₂, 2 bonding pairs, 0 lone pairs',
            'Step 1: Count electron pairs',
            'Total electron pairs = 2 + 0 = 2',
            'Step 2: Determine electron geometry',
            '2 electron pairs → Linear',
            'Step 3: Determine molecular shape',
            'No lone pairs → same as electron geometry',
            'Molecular shape = Linear',
            'Step 4: Bond angle',
            'Bond angle = 180°',
            'Step 5: Example structure',
            'O=C=O (straight line)',
            'Result: Linear, 180°'
        ],
        helper: 'VSEPR: 2 electron pairs → linear geometry',
        solution: 'Linear, 180°',
        realWorldContext: 'CO₂ linear shape explains its nonpolar nature despite polar bonds'
    });

    // Problem 2: Bent Geometry
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bent Molecular Geometry',
        problem: 'Determine the shape of H₂O (2 bonding pairs, 2 lone pairs on O)',
        parameters: { 
            molecule: 'H₂O',
            centralAtom: 'O',
            bondingPairs: 2,
            lonePairs: 2
        },
        type: 'molecular_shape',
        context: { difficulty: 'intermediate', topic: 'Molecular Geometry - Bent' },
        subparts: [
            'Given: H₂O, 2 bonding pairs, 2 lone pairs',
            'Step 1: Total electron pairs',
            'Total = 2 + 2 = 4 pairs',
            'Step 2: Electron geometry',
            '4 pairs → Tetrahedral electron geometry',
            'Step 3: Molecular shape',
            '2 lone pairs push bonds closer',
            'Molecular shape = Bent (V-shaped)',
            'Step 4: Bond angle',
            'Ideal tetrahedral = 109.5°',
            'Lone pairs compress → ~104.5°',
            'Result: Bent, ~104.5°'
        ],
        helper: 'Lone pairs occupy more space, reducing bond angles',
        solution: 'Bent, 104.5°',
        realWorldContext: 'Water\'s bent shape makes it a polar molecule'
    });

    // Problem 3: Tetrahedral Geometry
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Tetrahedral Molecular Geometry',
        problem: 'Determine shape of CH₄ (4 bonding pairs, 0 lone pairs on C)',
        parameters: { 
            molecule: 'CH₄',
            centralAtom: 'C',
            bondingPairs: 4,
            lonePairs: 0
        },
        type: 'molecular_shape',
        context: { difficulty: 'beginner', topic: 'Molecular Geometry - Tetrahedral' },
        subparts: [
            'Given: CH₄, 4 bonding pairs, 0 lone pairs',
            'Step 1: Total pairs',
            'Total = 4 + 0 = 4',
            'Step 2: Electron geometry',
            '4 pairs → Tetrahedral',
            'Step 3: Molecular shape',
            'No lone pairs → Tetrahedral',
            'Step 4: Bond angle',
            'Bond angle = 109.5°',
            'All H-C-H angles equal',
            'Result: Tetrahedral, 109.5°'
        ],
        helper: '4 bonding pairs, no lone pairs → tetrahedral',
        solution: 'Tetrahedral, 109.5°',
        realWorldContext: 'Methane\'s tetrahedral shape is fundamental in organic chemistry'
    });

    // Problem 4: Trigonal Pyramidal
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Trigonal Pyramidal Geometry',
        problem: 'Determine shape of NH₃ (3 bonding pairs, 1 lone pair on N)',
        parameters: { 
            molecule: 'NH₃',
            centralAtom: 'N',
            bondingPairs: 3,
            lonePairs: 1
        },
        type: 'molecular_shape',
        context: { difficulty: 'intermediate', topic: 'Molecular Geometry - Pyramidal' },
        subparts: [
            'Given: NH₃, 3 bonding pairs, 1 lone pair',
            'Step 1: Total pairs',
            'Total = 3 + 1 = 4',
            'Step 2: Electron geometry',
            '4 pairs → Tetrahedral electron geometry',
            'Step 3: Molecular shape',
            '1 lone pair at top',
            'Molecular shape = Trigonal pyramidal',
            'Step 4: Bond angle',
            'Ideal = 109.5°',
            'Lone pair compresses → ~107°',
            'Result: Trigonal pyramidal, ~107°'
        ],
        helper: '3 bonds + 1 lone pair → trigonal pyramidal',
        solution: 'Trigonal pyramidal, 107°',
        realWorldContext: 'Ammonia\'s pyramidal shape explains its polarity and basicity'
    });

    return relatedProblems;
}

function generateRelatedHybridization() {
    const relatedProblems = [];

    // Problem 1: sp Hybridization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'sp Hybridization',
        problem: 'Identify the hybridization of carbon in CO₂',
        parameters: { 
            molecule: 'CO₂',
            centralAtom: 'C',
            bondingRegions: 2
        },
        type: 'molecular_shape',
        context: { difficulty: 'advanced', topic: 'Hybridization - sp' },
        subparts: [
            'Given: CO₂, carbon is central',
            'Step 1: Determine bonding regions',
            'C forms 2 double bonds with O',
            '2 bonding regions (each double bond counts as 1)',
            'Step 2: Apply hybridization rule',
            '2 regions → sp hybridization',
            'Step 3: Geometry',
            'sp → Linear geometry',
            'Bond angle = 180°',
            'Step 4: Orbital mixing',
            '1 s orbital + 1 p orbital = 2 sp orbitals',
            'Result: sp hybridization, linear'
        ],
        helper: '2 bonding regions → sp hybridization → linear',
        solution: 'sp hybridization',
        realWorldContext: 'sp hybridization explains linear molecules like CO₂ and alkynes'
    });

    // Problem 2: sp² Hybridization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'sp² Hybridization',
        problem: 'Identify hybridization of carbon in formaldehyde (CH₂O)',
        parameters: { 
            molecule: 'CH₂O',
            centralAtom: 'C',
            bondingRegions: 3
        },
        type: 'molecular_shape',
        context: { difficulty: 'advanced', topic: 'Hybridization - sp²' },
        subparts: [
            'Given: CH₂O (formaldehyde)',
            'Step 1: Identify bonding regions on C',
            '2 single bonds (to H)',
            '1 double bond (to O)',
            'Total: 3 bonding regions',
            'Step 2: Hybridization',
            '3 regions → sp² hybridization',
            'Step 3: Geometry',
            'sp² → Trigonal planar',
            'Bond angle = 120°',
            'Result: sp² hybridization, trigonal planar'
        ],
        helper: '3 bonding regions → sp² → trigonal planar',
        solution: 'sp² hybridization',
        realWorldContext: 'sp² hybridization found in alkenes and carbonyl compounds'
    });

    // Problem 3: sp³ Hybridization
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'sp³ Hybridization',
        problem: 'Identify hybridization of carbon in CH₄',
        parameters: { 
            molecule: 'CH₄',
            centralAtom: 'C',
            bondingRegions: 4
        },
        type: 'molecular_shape',
        context: { difficulty: 'intermediate', topic: 'Hybridization - sp³' },
        subparts: [
            'Given: CH₄ (methane)',
            'Step 1: Count bonding regions',
            '4 C-H single bonds',
            '4 bonding regions',
            'Step 2: Hybridization',
            '4 regions → sp³ hybridization',
            'Step 3: Geometry',
            'sp³ → Tetrahedral',
            'Bond angle = 109.5°',
            'Step 4: Orbitals',
            '1 s + 3 p = 4 sp³ hybrid orbitals',
            'Result: sp³ hybridization, tetrahedral'
        ],
        helper: '4 bonding regions → sp³ → tetrahedral',
        solution: 'sp³ hybridization',
        realWorldContext: 'sp³ hybridization is most common in organic molecules'
    });

    return relatedProblems;
}

function generateRelatedLewisStructures() {
    const relatedProblems = [];

    // Problem 1: Simple Lewis Structure
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Lewis Structure',
        problem: 'Draw the Lewis structure for H₂O',
        parameters: { 
            molecule: 'H₂O',
            atoms: [
                { element: 'H', count: 2 },
                { element: 'O', count: 1 }
            ]
        },
        type: 'lewis_structure',
        context: { difficulty: 'beginner', topic: 'Lewis Structures - Simple' },
        subparts: [
            'Given: H₂O',
            'Step 1: Count valence electrons',
            'H: 1 × 2 = 2 electrons',
            'O: 6 × 1 = 6 electrons',
            'Total: 2 + 6 = 8 valence electrons',
            'Step 2: Arrange atoms',
            'O is central (less electronegative than F)',
            'H-O-H',
            'Step 3: Place bonding pairs',
            'Each H-O bond uses 2 electrons',
            '2 bonds × 2 = 4 electrons used',
            'Step 4: Place remaining as lone pairs',
            'Remaining: 8 - 4 = 4 electrons',
            'Place as 2 lone pairs on O',
            'Step 5: Check octet',
            'H: 2 electrons ✓ (duet)',
            'O: 4 (bonds) + 4 (lone) = 8 ✓ (octet)',
            'Result: H-O-H with 2 lone pairs on O'
        ],
        helper: 'Central atom (O) forms bonds, remaining electrons become lone pairs',
        solution: 'H-O-H with 2 lone pairs on O',
        realWorldContext: 'Lewis structure shows why water is bent and polar'
    });

    // Problem 2: Multiple Bonds
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure with Double Bond',
        problem: 'Draw Lewis structure for CO₂',
        parameters: { 
            molecule: 'CO₂',
            atoms: [
                { element: 'C', count: 1 },
                { element: 'O', count: 2 }
            ]
        },
        type: 'lewis_structure',
        context: { difficulty: 'intermediate', topic: 'Lewis Structures - Multiple Bonds' },
        subparts: [
            'Given: CO₂',
            'Step 1: Valence electrons',
            'C: 4 × 1 = 4',
            'O: 6 × 2 = 12',
            'Total: 16 valence electrons',
            'Step 2: Arrange atoms',
            'O-C-O (C is central)',
            'Step 3: Single bonds first',
            'O-C-O uses 4 electrons',
            'Remaining: 12 electrons',
            'Step 4: Complete octets',
            'Each O needs 6 more → 12 electrons',
            'But C only has 4 electrons!',
            'Step 5: Form double bonds',
            'O=C=O (2 double bonds)',
            'Now C has 8 electrons ✓',
            'Each O has 8 electrons ✓',
            'Result: O=C=O'
        ],
        helper: 'If octet not satisfied, form multiple bonds',
        solution: 'O=C=O',
        realWorldContext: 'Double bonds make CO₂ linear and nonpolar'
    });

    // Problem 3: Lewis Structure with Lone Pairs
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Ammonia',
        problem: 'Draw Lewis structure for NH₃',
        parameters: { 
            molecule: 'NH₃',
            atoms: [
                { element: 'N', count: 1 },
                { element: 'H', count: 3 }
            ]
        },
        type: 'lewis_structure',
        context: { difficulty: 'beginner', topic: 'Lewis Structures - Lone Pairs' },
        subparts: [
            'Given: NH₃',
            'Step 1: Valence electrons',
            'N: 5 × 1 = 5',
            'H: 1 × 3 = 3',
            'Total: 8 valence electrons',
            'Step 2: Arrange',
            'N is central, 3 H around it',
            'Step 3: Bonding pairs',
            'N-H (3 bonds) = 6 electrons',
            'Step 4: Remaining electrons',
            '8 - 6 = 2 electrons',
            'Place as 1 lone pair on N',
            'Step 5: Check octets',
            'H: 2 each ✓',
            'N: 6 (bonds) + 2 (lone) = 8 ✓',
            'Result: NH₃ with 1 lone pair on N'
        ],
        helper: 'N has 5 valence electrons, forms 3 bonds, 1 lone pair remains',
        solution: 'NH₃ with 1 lone pair on N',
        realWorldContext: 'Lone pair makes ammonia pyramidal and a good base'
    });

    // Problem 4: Expanded Octet
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lewis Structure - Expanded Octet',
        problem: 'Draw Lewis structure for SF₆',
        parameters: { 
            molecule: 'SF₆',
            atoms: [
                { element: 'S', count: 1 },
                { element: 'F', count: 6 }
            ]
        },
        type: 'lewis_structure',
        context: { difficulty: 'advanced', topic: 'Lewis Structures - Expanded Octet' },
        subparts: [
            'Given: SF₆',
            'Step 1: Valence electrons',
            'S: 6 × 1 = 6',
            'F: 7 × 6 = 42',
            'Total: 48 valence electrons',
            'Step 2: Arrange',
            'S central, 6 F around it',
            'Step 3: Bonding',
            '6 S-F bonds = 12 electrons',
            'Step 4: Complete F octets',
            'Each F needs 6 more electrons',
            '6 × 6 = 36 electrons',
            'Step 5: Total check',
            '12 + 36 = 48 ✓',
            'S has 12 electrons (expanded octet)',
            'Possible for period 3+ elements',
            'Result: S surrounded by 6 F atoms'
        ],
        helper: 'Period 3+ elements can exceed octet',
        solution: 'SF₆ with S having 12 electrons',
        realWorldContext: 'Sulfur can expand octet using d-orbitals'
    });

    return relatedProblems;
}

function generateRelatedVSEPR() {
    const relatedProblems = [];

    // Problem 1: VSEPR Prediction
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'VSEPR Theory Application',
        problem: 'Use VSEPR to predict shape of BF₃ (3 bonding, 0 lone pairs)',
        parameters: { 
            molecule: 'BF₃',
            centralAtom: 'B',
            bondingPairs: 3,
            lonePairs: 0
        },
        type: 'molecular_shape',
        context: { difficulty: 'intermediate', topic: 'VSEPR Theory - Application' },
        subparts: [
            'Given: BF₃, 3 bonding pairs, 0 lone pairs',
            'Step 1: Total electron pairs',
            'Total = 3 + 0 = 3',
            'Step 2: Electron geometry',
            '3 pairs → Trigonal planar',
            'Step 3: Molecular shape',
            'No lone pairs → Trigonal planar',
            'Step 4: Bond angle',
            'Angle = 120°',
            'Step 5: VSEPR principle',
            'Electron pairs repel equally',
            '3 regions arrange in plane',
            'Result: Trigonal planar, 120°'
        ],
        helper: 'VSEPR: electron pairs arrange to minimize repulsion',
        solution: 'Trigonal planar, 120°',
        realWorldContext: 'BF₃ is a Lewis acid due to planar structure'
    });

    // Problem 2: Lone Pair Effect
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR Lone Pair Repulsion',
        problem: 'Explain why H₂O bond angle (104.5°) is less than tetrahedral (109.5°)',
        parameters: { 
            molecule: 'H₂O',
            bondingPairs: 2,
            lonePairs: 2,
            actualAngle: 104.5,
            idealAngle: 109.5
        },
        type: 'molecular_shape',
        context: { difficulty: 'intermediate', topic: 'VSEPR - Lone Pair Effects' },
        subparts: [
            'Given: H₂O, 2 bonds + 2 lone pairs',
            'Step 1: Electron geometry',
            '4 pairs → Tetrahedral (ideal 109.5°)',
            'Step 2: Lone pair repulsion',
            'Repulsion strength:',
            'lone-lone > lone-bond > bond-bond',
            'Step 3: Effect on bond angle',
            'Lone pairs occupy more space',
            'Push bonding pairs closer together',
            'Step 4: Result',
            'H-O-H angle compressed',
            'From 109.5° → 104.5°',
            'Result: Lone pairs reduce bond angles'
        ],
        helper: 'Lone pairs repel more strongly than bonding pairs',
        solution: 'Lone pairs compress bond angle to 104.5°',
        realWorldContext: 'VSEPR explains deviations from ideal angles'
    });

    // Problem 3: Multiple Central Atoms
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'VSEPR for Multiple Centers',
        problem: 'Predict geometry around each carbon in C₂H₆ (ethane)',
        parameters: { 
            molecule: 'C₂H₆',
            centralAtoms: ['C', 'C']
        },
        type: 'molecular_shape',
        context: { difficulty: 'advanced', topic: 'VSEPR - Multiple Centers' },
        subparts: [
            'Given: C₂H₆ (H₃C-CH₃)',
            'Step 1: Analyze each carbon',
            'Each C has 4 bonding regions',
            '(3 C-H + 1 C-C)',
            'Step 2: Geometry per carbon',
            '4 regions → sp³ tetrahedral',
            'Step 3: Bond angles',
            'Each carbon: 109.5° angles',
            'Step 4: Overall shape',
            'Two tetrahedra joined',
            'Can rotate around C-C bond',
            'Result: Each C is tetrahedral'
        ],
        helper: 'Analyze VSEPR at each central atom separately',
        solution: 'Tetrahedral at each carbon',
        realWorldContext: 'Explains 3D structure of organic molecules'
    });

    return relatedProblems;
}

function generateRelatedBondPolarity() {
    const relatedProblems = [];

    // Problem 1: Electronegativity Difference
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Bond Polarity from Electronegativity',
        problem: 'Determine bond type: H-Cl (H: 2.1, Cl: 3.0)',
        parameters: { 
            atom1: 'H',
            atom2: 'Cl',
            enValue1: 2.1,
            enValue2: 3.0
        },
        type: 'electronegativity',
        context: { difficulty: 'beginner', topic: 'Bond Polarity - Electronegativity' },
        subparts: [
            'Given: H-Cl bond',
            'Electronegativity: H = 2.1, Cl = 3.0',
            'Step 1: Calculate difference',
            'ΔEN = |3.0 - 2.1| = 0.9',
            'Step 2: Apply guidelines',
            'ΔEN < 0.5: nonpolar covalent',
            '0.5 ≤ ΔEN < 1.7: polar covalent',
            'ΔEN ≥ 1.7: ionic',
            'Step 3: Classify',
            'ΔEN = 0.9 → Polar covalent',
            'Step 4: Polarity',
            'Cl is more electronegative',
            'δ⁻ on Cl, δ⁺ on H',
            'Result: Polar covalent, H^(δ+)-Cl^(δ-)'
        ],
        helper: 'ΔEN determines bond type: <0.5 nonpolar, 0.5-1.7 polar, >1.7 ionic',
        solution: 'Polar covalent bond',
        realWorldContext: 'HCl is polar, dissolves in water to form acid'
    });

    // Problem 2: Molecular Polarity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Molecular Polarity',
        problem: 'Is CO₂ polar or nonpolar? (O=C=O, linear)',
        parameters: { 
            molecule: 'CO₂',
            shape: 'linear',
            bondPolarity: 'polar'
        },
        type: 'electronegativity',
        context: { difficulty: 'intermediate', topic: 'Bond Polarity - Molecular' },
        subparts: [
            'Given: CO₂, linear shape',
            'Step 1: Check bond polarity',
            'C-O bonds are polar (ΔEN ≈ 1.0)',
            'O is more electronegative',
            'Step 2: Consider shape',
            'Linear: O=C=O',
            'Step 3: Analyze dipoles',
            'Two C=O dipoles',
            'Point in opposite directions',
            'Equal magnitude',
            'Step 4: Net dipole',
            'Dipoles cancel out',
            'Net dipole = 0',
            'Result: Nonpolar molecule'
        ],
        helper: 'Molecular polarity depends on bond polarity AND shape',
        solution: 'Nonpolar (dipoles cancel)',
        realWorldContext: 'CO₂ nonpolar despite polar bonds - symmetry matters'
    });

    // Problem 3: Polar Molecule
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Polar Molecule Analysis',
        problem: 'Explain why H₂O is polar (bent, 104.5°)',
        parameters: { 
            molecule: 'H₂O',
            shape: 'bent',
            bondPolarity: 'polar'
        },
        type: 'electronegativity',
        context: { difficulty: 'intermediate', topic: 'Bond Polarity - Polar Molecules' },
        subparts: [
            'Given: H₂O, bent shape, 104.5°',
            'Step 1: Bond polarity',
            'O-H bonds polar',
            'O more electronegative than H',
            'Step 2: Molecular geometry',
            'Bent shape (2 bonds, 2 lone pairs)',
            'Not symmetrical',
            'Step 3: Dipole vectors',
            'Two O-H dipoles point toward O',
            'Angle between them: 104.5°',
            'Step 4: Net dipole',
            'Dipoles do NOT cancel',
            'Net dipole points toward O',
            'Result: Polar molecule'
        ],
        helper: 'Asymmetric shape → dipoles don\'t cancel → polar',
        solution: 'Polar molecule',
        realWorldContext: 'Water\'s polarity is key to its unique properties'
    });

    // Problem 4: Dipole Moment
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dipole Moment Comparison',
        problem: 'Compare polarity: CCl₄ (tetrahedral) vs CHCl₃ (tetrahedral)',
        parameters: { 
            molecule1: 'CCl₄',
            molecule2: 'CHCl₃',
            shape: 'tetrahedral'
        },
        type: 'electronegativity',
        context: { difficulty: 'advanced', topic: 'Bond Polarity - Dipole Moments' },
        subparts: [
            'Given: CCl₄ and CHCl₃, both tetrahedral',
            'Step 1: CCl₄ analysis',
            'Four C-Cl bonds, all polar',
            'Perfectly symmetric',
            'All dipoles cancel',
            'CCl₄ is nonpolar',
            'Step 2: CHCl₃ analysis',
            'Three C-Cl + one C-H',
            'Not symmetric',
            'C-H less polar than C-Cl',
            'Step 3: Net dipole',
            'CHCl₃ has net dipole',
            'CHCl₃ is polar',
            'Result: CCl₄ nonpolar, CHCl₃ polar'
        ],
        helper: 'Symmetry determines if dipoles cancel',
        solution: 'CCl₄ nonpolar, CHCl₃ polar',
        realWorldContext: 'Polarity affects solubility and intermolecular forces'
    });

    return relatedProblems;
}

function generateRelatedIntermolecularForces() {
    const relatedProblems = [];

    // Problem 1: London Dispersion Forces
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'London Dispersion Forces',
        problem: 'Identify IMF in Cl₂ (nonpolar molecule)',
        parameters: { 
            molecule: 'Cl₂',
            moleculeType: 'nonpolar',
            polarity: 'nonpolar'
        },
        type: 'intermolecular_forces',
        context: { difficulty: 'beginner', topic: 'Intermolecular Forces - Dispersion' },
        subparts: [
            'Given: Cl₂, nonpolar molecule',
            'Step 1: Check molecule type',
            'Cl₂ is nonpolar (symmetric)',
            'No permanent dipole',
            'Step 2: Available IMF',
            'All molecules have dispersion forces',
            'Temporary dipoles from electron movement',
            'Step 3: Identify forces',
            'Only London dispersion forces',
            'Step 4: Strength',
            'Weak forces',
            'Increase with molecular size',
            'Result: London dispersion only'
        ],
        helper: 'All molecules have London dispersion forces',
        solution: 'London dispersion forces',
        realWorldContext: 'Explains why Cl₂ is gas at room temperature (weak IMF)'
    });

    // Problem 2: Dipole-Dipole Forces
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Dipole-Dipole Forces',
        problem: 'Identify IMF in HCl (polar molecule)',
        parameters: { 
            molecule: 'HCl',
            moleculeType: 'polar',
            polarity: 'polar'
        },
        type: 'intermolecular_forces',
        context: { difficulty: 'intermediate', topic: 'Intermolecular Forces - Dipole-Dipole' },
        subparts: [
            'Given: HCl, polar molecule',
            'Step 1: Check polarity',
            'HCl is polar',
            'Permanent dipole: H^(δ+)-Cl^(δ-)',
            'Step 2: Identify IMF',
            '1. London dispersion (all molecules)',
            '2. Dipole-dipole (polar molecules)',
            'Step 3: Strength comparison',
            'Dipole-dipole > dispersion',
            'Moderate strength',
            'Step 4: Arrangement',
            'δ+ attracts δ- of neighbor',
            'Result: Dispersion + dipole-dipole'
        ],
        helper: 'Polar molecules have both dispersion and dipole-dipole',
        solution: 'London dispersion + dipole-dipole',
        realWorldContext: 'HCl\'s polarity makes it soluble in water'
    });

    // Problem 3: Hydrogen Bonding
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hydrogen Bonding',
        problem: 'Explain why water has unusually high boiling point',
        parameters: { 
            molecule: 'H₂O',
            moleculeType: 'hydrogen_bonding',
            polarity: 'polar'
        },
        type: 'intermolecular_forces',
        context: { difficulty: 'intermediate', topic: 'Intermolecular Forces - Hydrogen Bonding' },
        subparts: [
            'Given: H₂O (water)',
            'Step 1: Identify H-bonding',
            'H bonded to O (highly electronegative)',
            'Condition for H-bonding met',
            'Step 2: H-bond formation',
            'H^(δ+) attracts lone pair on O of neighbor',
            'O-H···O interaction',
            'Step 3: Identify all IMF',
            '1. London dispersion',
            '2. Dipole-dipole',
            '3. Hydrogen bonding (strongest)',
            'Step 4: Effect',
            'H-bonds are strong',
            'High boiling point (100°C)',
            'Much higher than expected for MW 18',
            'Result: Hydrogen bonding dominates'
        ],
        helper: 'H-bonding: H attached to N, O, or F',
        solution: 'Strong hydrogen bonding',
        realWorldContext: 'H-bonding explains water\'s unique properties (high bp, ice floats)'
    });

    // Problem 4: IMF Strength Comparison
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'IMF Strength Ranking',
        problem: 'Rank boiling points: CH₄, NH₃, H₂O',
        parameters: { 
            molecules: ['CH₄', 'NH₃', 'H₂O']
        },
        type: 'intermolecular_forces',
        context: { difficulty: 'advanced', topic: 'Intermolecular Forces - Comparison' },
        subparts: [
            'Given: CH₄, NH₃, H₂O',
            'Step 1: Analyze CH₄',
            'Nonpolar molecule',
            'Only London dispersion',
            'Small molecule → weak forces',
            'Step 2: Analyze NH₃',
            'Polar molecule',
            'H-bonding (H-N)',
            'Moderate H-bonding',
            'Step 3: Analyze H₂O',
            'Polar molecule',
            'H-bonding (H-O)',
            'Strong H-bonding (2 H, 2 lone pairs)',
            'Each water forms 4 H-bonds',
            'Step 4: Rank IMF strength',
            'H₂O > NH₃ > CH₄',
            'Step 5: Boiling points',
            'Stronger IMF → higher bp',
            'Result: bp: H₂O (100°C) > NH₃ (-33°C) > CH₄ (-161°C)'
        ],
        helper: 'Stronger IMF → higher boiling point',
        solution: 'H₂O > NH₃ > CH₄',
        realWorldContext: 'IMF strength predicts physical properties'
    });

    // Problem 5: IMF and Solubility
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'IMF and Solubility',
        problem: 'Explain why ethanol (C₂H₅OH) dissolves in water but hexane (C₆H₁₄) doesn\'t',
        parameters: { 
            solute1: 'C₂H₅OH',
            solute2: 'C₆H₁₄',
            solvent: 'H₂O'
        },
        type: 'intermolecular_forces',
        context: { difficulty: 'advanced', topic: 'Intermolecular Forces - Solubility' },
        subparts: [
            'Given: Ethanol vs hexane in water',
            'Principle: "Like dissolves like"',
            'Step 1: Analyze ethanol',
            'Contains -OH group',
            'Can form H-bonds with water',
            'Polar molecule',
            'Step 2: Ethanol-water interaction',
            'Strong H-bonding between them',
            'Similar IMF → miscible',
            'Step 3: Analyze hexane',
            'Nonpolar hydrocarbon',
            'Only London dispersion',
            'Step 4: Hexane-water interaction',
            'No H-bonding possible',
            'Incompatible IMF',
            'Step 5: Result',
            'Ethanol dissolves (polar, H-bonding)',
            'Hexane doesn\'t (nonpolar)',
            'Result: Similar IMF → soluble'
        ],
        helper: '"Like dissolves like" - similar IMF needed',
        solution: 'Ethanol soluble (H-bonds), hexane insoluble (no H-bonds)',
        realWorldContext: 'Explains why oil and water don\'t mix'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solveAtomicStructureProblems() {
    const problems = generateRelatedAtomicStructure();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Atomic Structure Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveQuantumNumbersProblems() {
    const problems = generateRelatedQuantumNumbers();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quantum Numbers Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveElectronConfigurationProblems() {
    const problems = generateRelatedElectronConfiguration();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Electron Configuration Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solvePeriodicTrendsProblems() {
    const problems = generateRelatedPeriodicTrends();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Periodic Trends Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveBondingProblems() {
    const problems = generateRelatedBonding();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Bonding Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveMolecularGeometryProblems() {
    const problems = generateRelatedMolecularGeometry();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Molecular Geometry Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveHybridizationProblems() {
    const problems = generateRelatedHybridization();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Hybridization Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveLewisStructuresProblems() {
    const problems = generateRelatedLewisStructures();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Lewis Structures Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveVSEPRProblems() {
    const problems = generateRelatedVSEPR();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving VSEPR Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveBondPolarityProblems() {
    const problems = generateRelatedBondPolarity();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Bond Polarity Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

function solveIntermolecularForcesProblems() {
    const problems = generateRelatedIntermolecularForces();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Intermolecular Forces Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAtomicChemicalWorkbook({
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

        workbook.solveAtomicProblem({
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

async function generateComprehensiveChemistryDocument() {
    console.log('Generating Comprehensive Atomic Structure & Chemical Bonding Workbook...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Atomic Structure & Chemical Bonding Workbook',
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
            text: 'MSCE Level Chemistry - Atoms, Bonding, and Molecular Structure',
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

    // Part I: Atomic Structure
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Atomic Structure (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const atomicProblems = generateRelatedAtomicStructure();
    atomicProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Quantum Numbers
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quantum Numbers & Shell Structure (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quantumProblems = generateRelatedQuantumNumbers();
    quantumProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Electron Configuration
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electron Configuration (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const configProblems = generateRelatedElectronConfiguration();
    configProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 11}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Periodic Trends
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Periodic Trends (2 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trendsProblems = generateRelatedPeriodicTrends();
    trendsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 14}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Chemical Bonding
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Chemical Bonding & Valency (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const bondingProblems = generateRelatedBonding();
    bondingProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 16}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Molecular Geometry
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Molecular Geometry (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const geometryProblems = generateRelatedMolecularGeometry();
    geometryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 20}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Hybridization
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Hybridization Theory (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const hybridProblems = generateRelatedHybridization();
    hybridProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 24}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Lewis Structures
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Lewis Structures (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const lewisProblems = generateRelatedLewisStructures();
    lewisProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 27}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IX: VSEPR Theory
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: VSEPR Theory (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vseprProblems = generateRelatedVSEPR();
    vseprProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 31}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part X: Bond Polarity
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Bond Polarity & Electronegativity (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polarityProblems = generateRelatedBondPolarity();
    polarityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 34}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part XI: Intermolecular Forces
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Intermolecular Forces (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const imfProblems = generateRelatedIntermolecularForces();
    imfProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 38}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: ATOMIC STRUCTURE ==============
    console.log('\nProcessing Part I: Atomic Structure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Atomic Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const atomicSolved = solveAtomicStructureProblems();
    atomicSolved.forEach((solved, index) => {
        console.log(`  Adding Atomic Structure Problem ${index + 1} to document...`);

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

    // ============== PART II: QUANTUM NUMBERS ==============
    console.log('\nProcessing Part II: Quantum Numbers...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quantum Numbers & Shell Structure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quantumSolved = solveQuantumNumbersProblems();
    quantumSolved.forEach((solved, index) => {
        console.log(`  Adding Quantum Numbers Problem ${index + 1} to document...`);

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

    // ============== PART III: ELECTRON CONFIGURATION ==============
    console.log('\nProcessing Part III: Electron Configuration...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electron Configuration',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const configSolved = solveElectronConfigurationProblems();
    configSolved.forEach((solved, index) => {
        console.log(`  Adding Electron Configuration Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 11}: ${solved.problem.scenario}`,
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

    // ============== PART IV: PERIODIC TRENDS ==============
    console.log('\nProcessing Part IV: Periodic Trends...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Periodic Trends',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trendsSolved = solvePeriodicTrendsProblems();
    trendsSolved.forEach((solved, index) => {
        console.log(`  Adding Periodic Trends Problem ${index + 1} to document...`);

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

    // ============== PART V: CHEMICAL BONDING ==============
    console.log('\nProcessing Part V: Chemical Bonding...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Chemical Bonding & Valency',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const bondingSolved = solveBondingProblems();
    bondingSolved.forEach((solved, index) => {
        console.log(`  Adding Bonding Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 16}: ${solved.problem.scenario}`,
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

    // ============== PART VI: MOLECULAR GEOMETRY ==============
    console.log('\nProcessing Part VI: Molecular Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Molecular Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geometrySolved = solveMolecularGeometryProblems();
    geometrySolved.forEach((solved, index) => {
        console.log(`  Adding Molecular Geometry Problem ${index + 1} to document...`);

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

    // ============== PART VII: HYBRIDIZATION ==============
    console.log('\nProcessing Part VII: Hybridization...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Hybridization Theory',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const hybridSolved = solveHybridizationProblems();
    hybridSolved.forEach((solved, index) => {
        console.log(`  Adding Hybridization Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 24}: ${solved.problem.scenario}`,
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

    // ============== PART VIII: LEWIS STRUCTURES ==============
    console.log('\nProcessing Part VIII: Lewis Structures...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Lewis Structures',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const lewisSolved = solveLewisStructuresProblems();
    lewisSolved.forEach((solved, index) => {
        console.log(`  Adding Lewis Structures Problem ${index + 1} to document...`);

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

    // ============== PART IX: VSEPR THEORY ==============
    console.log('\nProcessing Part IX: VSEPR Theory...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: VSEPR Theory',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vseprSolved = solveVSEPRProblems();
    vseprSolved.forEach((solved, index) => {
        console.log(`  Adding VSEPR Problem ${index + 1} to document...`);

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

    // ============== PART X: BOND POLARITY ==============
    console.log('\nProcessing Part X: Bond Polarity...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part X: Bond Polarity & Electronegativity',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polaritySolved = solveBondPolarityProblems();
    polaritySolved.forEach((solved, index) => {
        console.log(`  Adding Bond Polarity Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 34}: ${solved.problem.scenario}`,
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

    // ============== PART XI: INTERMOLECULAR FORCES ==============
    console.log('\nProcessing Part XI: Intermolecular Forces...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part XI: Intermolecular Forces',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const imfSolved = solveIntermolecularForcesProblems();
    imfSolved.forEach((solved, index) => {
        console.log(`  Adding Intermolecular Forces Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 38}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_atomic_chemical_bonding_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE CHEMISTRY DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 42');
        console.log('    - Atomic Structure: 7 problems');
        console.log('    - Quantum Numbers: 3 problems');
        console.log('    - Electron Configuration: 3 problems');
        console.log('    - Periodic Trends: 2 problems');
        console.log('    - Chemical Bonding: 4 problems');
        console.log('    - Molecular Geometry: 4 problems');
        console.log('    - Hybridization: 3 problems');
        console.log('    - Lewis Structures: 4 problems');
        console.log('    - VSEPR Theory: 3 problems');
        console.log('    - Bond Polarity: 4 problems');
        console.log('    - Intermolecular Forces: 5 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Atomic Structure (Problems 1-7)');
        console.log('  • Part II: Quantum Numbers (Problems 8-10)');
        console.log('  • Part III: Electron Configuration (Problems 11-13)');
        console.log('  • Part IV: Periodic Trends (Problems 14-15)');
        console.log('  • Part V: Chemical Bonding (Problems 16-19)');
        console.log('  • Part VI: Molecular Geometry (Problems 20-23)');
        console.log('  • Part VII: Hybridization (Problems 24-26)');
        console.log('  • Part VIII: Lewis Structures (Problems 27-30)');
        console.log('  • Part IX: VSEPR Theory (Problems 31-33)');
        console.log('  • Part X: Bond Polarity (Problems 34-37)');
        console.log('  • Part XI: Intermolecular Forces (Problems 38-42)');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced explanations and verification');
        console.log('  • Key chemistry concepts and theory');
        console.log('  • Pedagogical notes for teachers');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Conceptual connections between topics');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveChemistryDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
