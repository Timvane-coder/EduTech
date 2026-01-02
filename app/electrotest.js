
import { EnhancedElectricityMagnetismWorkbook } from './electroworkbook.js';
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

// ============== ELECTROSTATICS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedElectrostatics() {
    const relatedProblems = [];

    // Problem 1: Coulomb's Law - Basic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: "Coulomb's Law - Two Point Charges",
        problem: 'Two charges, q₁ = 3.0 × 10⁻⁶ C and q₂ = -2.0 × 10⁻⁶ C, are separated by 0.5 m. Calculate the electrostatic force between them.',
        parameters: { q1: 3.0e-6, q2: -2.0e-6, r: 0.5 },
        type: 'coulombs_law',
        context: { difficulty: 'beginner', topic: "Coulomb's Law" },
        subparts: [
            'Given: q₁ = 3.0 × 10⁻⁶ C, q₂ = -2.0 × 10⁻⁶ C, r = 0.5 m',
            'Coulomb constant: k = 8.99 × 10⁹ N⋅m²/C²',
            'Apply Coulomb\'s law: F = k|q₁q₂|/r²',
            'F = (8.99 × 10⁹) × |3.0 × 10⁻⁶ × (-2.0 × 10⁻⁶)| / (0.5)²',
            'F = (8.99 × 10⁹) × (6.0 × 10⁻¹²) / 0.25',
            'F = 0.216 N',
            'Since charges have opposite signs: Force is attractive'
        ],
        helper: 'Use F = k|q₁q₂|/r² and check signs for direction',
        solution: 'F = 0.216 N (attractive)',
        realWorldContext: 'Understanding atomic bonding and molecular forces'
    });

    // Problem 2: Coulomb's Law - Three Charges
    relatedProblems.push({
        difficulty: 'harder',
        scenario: "Coulomb's Law - Three Charges",
        problem: 'Three charges are arranged in a line: q₁ = 2.0 μC at x = 0, q₂ = -3.0 μC at x = 2 m, and q₃ = 1.0 μC at x = 4 m. Find the net force on q₂.',
        parameters: { q1: 2.0e-6, q2: -3.0e-6, q3: 1.0e-6, r12: 2, r23: 2 },
        type: 'coulombs_law',
        context: { difficulty: 'intermediate', topic: 'Superposition of Forces' },
        subparts: [
            'Force on q₂ from q₁: F₁₂ = k|q₁q₂|/r₁₂²',
            'F₁₂ = (8.99×10⁹) × (2.0×10⁻⁶) × (3.0×10⁻⁶) / 4',
            'F₁₂ = 0.0135 N (attractive, pointing left)',
            'Force on q₂ from q₃: F₃₂ = k|q₃q₂|/r₂₃²',
            'F₃₂ = (8.99×10⁹) × (1.0×10⁻⁶) × (3.0×10⁻⁶) / 4',
            'F₃₂ = 0.0067 N (attractive, pointing right)',
            'Net force: F_net = 0.0135 - 0.0067 = 0.0068 N (to the left)'
        ],
        helper: 'Calculate each force separately, then add vectorially',
        solution: 'F_net = 0.0068 N to the left',
        realWorldContext: 'Multiple charge systems in plasma physics'
    });

    // Problem 3: Electric Force vs Gravitational Force
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electric vs Gravitational Force',
        problem: 'Compare the electric force to the gravitational force between two electrons separated by 1.0 × 10⁻¹⁰ m.',
        parameters: { q1: -1.602e-19, q2: -1.602e-19, r: 1.0e-10, m1: 9.109e-31, m2: 9.109e-31 },
        type: 'coulombs_law',
        context: { difficulty: 'intermediate', topic: 'Force Comparison' },
        subparts: [
            'Electric force: F_e = ke²/r²',
            'F_e = (8.99×10⁹) × (1.602×10⁻¹⁹)² / (1.0×10⁻¹⁰)²',
            'F_e = 2.31 × 10⁻⁸ N (repulsive)',
            'Gravitational force: F_g = Gm²/r²',
            'F_g = (6.67×10⁻¹¹) × (9.109×10⁻³¹)² / (1.0×10⁻¹⁰)²',
            'F_g = 5.54 × 10⁻⁵¹ N',
            'Ratio: F_e/F_g = 4.17 × 10⁴²',
            'Electric force dominates at atomic scales!'
        ],
        helper: 'Calculate both forces and compare their magnitudes',
        solution: 'F_e = 2.31 × 10⁻⁸ N, F_e/F_g ≈ 10⁴²',
        realWorldContext: 'Why electric forces dominate in atomic structure'
    });

    return relatedProblems;
}

// ============== ELECTRIC FIELDS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedElectricFields() {
    const relatedProblems = [];

    // Problem 1: Electric Field from Point Charge
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electric Field from Point Charge',
        problem: 'Calculate the electric field at a distance of 0.3 m from a charge q = 5.0 × 10⁻⁶ C.',
        parameters: { q: 5.0e-6, r: 0.3 },
        type: 'electric_field',
        context: { difficulty: 'beginner', topic: 'Electric Field' },
        subparts: [
            'Given: q = 5.0 × 10⁻⁶ C, r = 0.3 m',
            'Electric field formula: E = kq/r²',
            'E = (8.99 × 10⁹) × (5.0 × 10⁻⁶) / (0.3)²',
            'E = (8.99 × 10⁹) × (5.0 × 10⁻⁶) / 0.09',
            'E = 4.99 × 10⁵ N/C',
            'Direction: Points away from positive charge'
        ],
        helper: 'Use E = kq/r² for point charges',
        solution: 'E = 4.99 × 10⁵ N/C radially outward',
        realWorldContext: 'Field around charged objects in electrostatics'
    });

    // Problem 2: Electric Field Superposition
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electric Field from Two Charges',
        problem: 'Two charges, +4.0 μC and -4.0 μC, are placed 6.0 cm apart. Find the electric field at the midpoint.',
        parameters: { q1: 4.0e-6, q2: -4.0e-6, r: 0.03 },
        type: 'electric_field',
        context: { difficulty: 'intermediate', topic: 'Field Superposition' },
        subparts: [
            'Midpoint distance from each charge: r = 3.0 cm = 0.03 m',
            'Field from +4.0 μC: E₁ = kq₁/r² pointing away (right)',
            'E₁ = (8.99×10⁹) × (4.0×10⁻⁶) / (0.03)²',
            'E₁ = 4.0 × 10⁷ N/C (to the right)',
            'Field from -4.0 μC: E₂ = kq₂/r² pointing toward (also right)',
            'E₂ = 4.0 × 10⁷ N/C (to the right)',
            'Total field: E_total = E₁ + E₂ = 8.0 × 10⁷ N/C',
            'Direction: From positive toward negative charge'
        ],
        helper: 'Both fields point in same direction at midpoint',
        solution: 'E = 8.0 × 10⁷ N/C from + to - charge',
        realWorldContext: 'Electric dipole fields in molecules'
    });

    // Problem 3: Electric Field and Force
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Force on Charge in Electric Field',
        problem: 'An electric field of 2.0 × 10⁴ N/C exists in a region. What force acts on a -3.0 nC charge placed in this field?',
        parameters: { q: -3.0e-9, E: 2.0e4 },
        type: 'electric_field',
        context: { difficulty: 'beginner', topic: 'Force in Electric Field' },
        subparts: [
            'Given: E = 2.0 × 10⁴ N/C, q = -3.0 × 10⁻⁹ C',
            'Force formula: F = qE',
            'F = (-3.0 × 10⁻⁹) × (2.0 × 10⁴)',
            'F = -6.0 × 10⁻⁵ N',
            'Magnitude: |F| = 6.0 × 10⁻⁵ N',
            'Direction: Opposite to field (negative charge)'
        ],
        helper: 'F = qE; negative charge experiences force opposite to field',
        solution: 'F = 6.0 × 10⁻⁵ N opposite to field direction',
        realWorldContext: 'Particle acceleration in electric fields'
    });

    return relatedProblems;
}

// ============== ELECTRIC POTENTIAL - RELATED PROBLEMS GENERATOR ==============

function generateRelatedElectricPotential() {
    const relatedProblems = [];

    // Problem 1: Electric Potential from Point Charge
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electric Potential from Point Charge',
        problem: 'Calculate the electric potential at 0.25 m from a +6.0 μC charge.',
        parameters: { q: 6.0e-6, r: 0.25 },
        type: 'electric_potential',
        context: { difficulty: 'beginner', topic: 'Electric Potential' },
        subparts: [
            'Given: q = 6.0 × 10⁻⁶ C, r = 0.25 m',
            'Electric potential: V = kq/r',
            'V = (8.99 × 10⁹) × (6.0 × 10⁻⁶) / 0.25',
            'V = 2.16 × 10⁵ V',
            'Positive charge creates positive potential'
        ],
        helper: 'Use V = kq/r for point charges',
        solution: 'V = 2.16 × 10⁵ V = 216 kV',
        realWorldContext: 'Voltage around charged conductors'
    });

    // Problem 2: Potential Energy
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electric Potential Energy',
        problem: 'Two charges, q₁ = 3.0 μC and q₂ = -2.0 μC, are 0.4 m apart. Calculate their potential energy.',
        parameters: { q: 3.0e-6, q2: -2.0e-6, r: 0.4, calculateEnergy: true },
        type: 'electric_potential',
        context: { difficulty: 'intermediate', topic: 'Potential Energy' },
        subparts: [
            'Given: q₁ = 3.0 × 10⁻⁶ C, q₂ = -2.0 × 10⁻⁶ C, r = 0.4 m',
            'Potential energy: U = kq₁q₂/r',
            'U = (8.99×10⁹) × (3.0×10⁻⁶) × (-2.0×10⁻⁶) / 0.4',
            'U = -0.135 J',
            'Negative energy: System is bound (attractive)'
        ],
        helper: 'U = kq₁q₂/r; negative means attractive interaction',
        solution: 'U = -0.135 J (bound system)',
        realWorldContext: 'Energy in ionic bonds and molecules'
    });

    // Problem 3: Work Done by Electric Field
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Work Done Moving Charge',
        problem: 'How much work is required to move a +2.0 μC charge from 0.5 m to 0.2 m away from a +5.0 μC charge?',
        parameters: { q: 5.0e-6, q2: 2.0e-6, r: 0.5, r2: 0.2 },
        type: 'electric_potential',
        context: { difficulty: 'intermediate', topic: 'Work and Energy' },
        subparts: [
            'Initial potential: V₁ = kq/r₁ = (8.99×10⁹)×(5.0×10⁻⁶)/0.5',
            'V₁ = 8.99 × 10⁴ V',
            'Final potential: V₂ = kq/r₂ = (8.99×10⁹)×(5.0×10⁻⁶)/0.2',
            'V₂ = 2.25 × 10⁵ V',
            'Work done: W = q₂ΔV = q₂(V₂ - V₁)',
            'W = (2.0×10⁻⁶) × (2.25×10⁵ - 8.99×10⁴)',
            'W = 0.270 J',
            'Positive work: Energy must be supplied'
        ],
        helper: 'W = qΔV; moving like charges closer requires work',
        solution: 'W = 0.270 J (work done against field)',
        realWorldContext: 'Energy considerations in particle accelerators'
    });

    return relatedProblems;
}

// ============== CAPACITANCE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCapacitance() {
    const relatedProblems = [];

    // Problem 1: Parallel Plate Capacitor
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Parallel Plate Capacitor',
        problem: 'A parallel plate capacitor has plates of area 0.05 m² separated by 2.0 mm. Calculate its capacitance.',
        parameters: { area: 0.05, distance: 0.002 },
        type: 'capacitance',
        context: { difficulty: 'beginner', topic: 'Capacitance' },
        subparts: [
            'Given: A = 0.05 m², d = 2.0 mm = 0.002 m',
            'Permittivity: ε₀ = 8.854 × 10⁻¹² F/m',
            'Capacitance: C = ε₀A/d',
            'C = (8.854 × 10⁻¹²) × 0.05 / 0.002',
            'C = 2.21 × 10⁻¹⁰ F',
            'C = 221 pF'
        ],
        helper: 'C = ε₀A/d for parallel plate capacitors',
        solution: 'C = 221 pF',
        realWorldContext: 'Capacitors in electronic circuits'
    });

    // Problem 2: Charge and Energy Storage
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Capacitor Charge and Energy',
        problem: 'A 10 μF capacitor is charged to 12 V. Calculate (a) the charge stored and (b) the energy stored.',
        parameters: { C: 10e-6, V: 12, findEnergy: true },
        type: 'capacitance',
        context: { difficulty: 'intermediate', topic: 'Capacitor Energy' },
        subparts: [
            'Given: C = 10 μF = 10 × 10⁻⁶ F, V = 12 V',
            '(a) Charge: Q = CV',
            'Q = (10 × 10⁻⁶) × 12',
            'Q = 1.2 × 10⁻⁴ C = 120 μC',
            '(b) Energy: U = ½CV²',
            'U = 0.5 × (10 × 10⁻⁶) × (12)²',
            'U = 0.5 × (10 × 10⁻⁶) × 144',
            'U = 7.2 × 10⁻⁴ J = 0.72 mJ'
        ],
        helper: 'Q = CV for charge; U = ½CV² for energy',
        solution: 'Q = 120 μC, U = 0.72 mJ',
        realWorldContext: 'Energy storage in camera flashes'
    });

    // Problem 3: Capacitors in Series
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Capacitors in Series',
        problem: 'Three capacitors (4 μF, 6 μF, and 12 μF) are connected in series. Find the equivalent capacitance.',
        parameters: { capacitors: [4e-6, 6e-6, 12e-6], configuration: 'series' },
        type: 'capacitor_combinations',
        context: { difficulty: 'intermediate', topic: 'Series Capacitors' },
        subparts: [
            'Given: C₁ = 4 μF, C₂ = 6 μF, C₃ = 12 μF (series)',
            'Series formula: 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃',
            '1/C_eq = 1/4 + 1/6 + 1/12',
            '1/C_eq = 3/12 + 2/12 + 1/12 = 6/12',
            'C_eq = 12/6 = 2 μF'
        ],
        helper: 'Series: 1/C_eq = Σ(1/Cᵢ); result is less than smallest',
        solution: 'C_eq = 2 μF',
        realWorldContext: 'Voltage dividers and filter circuits'
    });

    // Problem 4: Capacitors in Parallel
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Capacitors in Parallel',
        problem: 'Two capacitors (8 μF and 12 μF) are connected in parallel. Find the equivalent capacitance.',
        parameters: { capacitors: [8e-6, 12e-6], configuration: 'parallel' },
        type: 'capacitor_combinations',
        context: { difficulty: 'beginner', topic: 'Parallel Capacitors' },
        subparts: [
            'Given: C₁ = 8 μF, C₂ = 12 μF (parallel)',
            'Parallel formula: C_eq = C₁ + C₂',
            'C_eq = 8 + 12 = 20 μF'
        ],
        helper: 'Parallel: C_eq = ΣCᵢ; capacitances add directly',
        solution: 'C_eq = 20 μF',
        realWorldContext: 'Increasing total capacitance for energy storage'
    });

    return relatedProblems;
}

// ============== CURRENT AND RESISTANCE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCurrentResistance() {
    const relatedProblems = [];

    // Problem 1: Ohm's Law - Basic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: "Ohm's Law Application",
        problem: 'A 12 V battery is connected to a 4 Ω resistor. Calculate the current flowing through the resistor.',
        parameters: { V: 12, R: 4 },
        type: 'ohms_law',
        context: { difficulty: 'beginner', topic: "Ohm's Law" },
        subparts: [
            'Given: V = 12 V, R = 4 Ω',
            "Ohm's law: V = IR",
            'Solve for current: I = V/R',
            'I = 12 / 4',
            'I = 3 A'
        ],
        helper: "Use Ohm's law: V = IR",
        solution: 'I = 3 A',
        realWorldContext: 'Basic circuit analysis'
    });

    // Problem 2: Power Dissipation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Power Dissipation in Resistor',
        problem: 'A 6 Ω resistor carries a current of 2 A. Calculate the power dissipated.',
        parameters: { I: 2, R: 6 },
        type: 'power_dissipation',
        context: { difficulty: 'intermediate', topic: 'Electrical Power' },
        subparts: [
            'Given: I = 2 A, R = 6 Ω',
            'Power formula: P = I²R',
            'P = (2)² × 6',
            'P = 4 × 6',
            'P = 24 W',
            'Alternative: V = IR = 2 × 6 = 12 V',
            'P = IV = 2 × 12 = 24 W ✓'
        ],
        helper: 'P = I²R = IV = V²/R (use what you know)',
        solution: 'P = 24 W',
        realWorldContext: 'Heat generation in electrical devices'
    });

    // Problem 3: Resistors in Series
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Resistors in Series',
        problem: 'Three resistors (5 Ω, 10 Ω, and 15 Ω) are connected in series. Find the equivalent resistance.',
        parameters: { resistors: [5, 10, 15], configuration: 'series' },
        type: 'resistor_combinations',
        context: { difficulty: 'beginner', topic: 'Series Resistors' },
        subparts: [
            'Given: R₁ = 5 Ω, R₂ = 10 Ω, R₃ = 15 Ω (series)',
            'Series formula: R_eq = R₁ + R₂ + R₃',
            'R_eq = 5 + 10 + 15',
            'R_eq = 30 Ω'
        ],
        helper: 'Series: R_eq = ΣRᵢ; resistances add directly',
        solution: 'R_eq = 30 Ω',
        realWorldContext: 'Voltage dividers and current limiting'
    });

    // Problem 4: Resistors in Parallel
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Resistors in Parallel',
        problem: 'Two resistors (6 Ω and 3 Ω) are connected in parallel. Find the equivalent resistance.',
        parameters: { resistors: [6, 3], configuration: 'parallel' },
        type: 'resistor_combinations',
        context: { difficulty: 'intermediate', topic: 'Parallel Resistors' },
        subparts: [
            'Given: R₁ = 6 Ω, R₂ = 3 Ω (parallel)',
            'Parallel formula: 1/R_eq = 1/R₁ + 1/R₂',
            '1/R_eq = 1/6 + 1/3',
            '1/R_eq = 1/6 + 2/6 = 3/6',
            'R_eq = 6/3 = 2 Ω'
        ],
        helper: 'Parallel: 1/R_eq = Σ(1/Rᵢ); result is less than smallest',
        solution: 'R_eq = 2 Ω',
        realWorldContext: 'Current dividers and reducing total resistance'
    });

    return relatedProblems;
}

// ============== DC CIRCUITS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedDCCircuits() {
    const relatedProblems = [];

    // Problem 1: Kirchhoff's Voltage Law
    relatedProblems.push({
        difficulty: 'easier',
        scenario: "Kirchhoff's Voltage Law (KVL)",
        problem: 'In a series circuit, a 12 V battery is connected to resistors of 3 Ω, 4 Ω, and 5 Ω. Find the current and voltage across each resistor.',
        parameters: { V: 12, R1: 3, R2: 4, R3: 5 },
        type: 'kirchhoff_voltage',
        context: { difficulty: 'intermediate', topic: 'KVL Application' },
        subparts: [
            'Total resistance: R_total = 3 + 4 + 5 = 12 Ω',
            'Current (same in series): I = V/R_total = 12/12 = 1 A',
            'Voltage across 3 Ω: V₁ = IR₁ = 1 × 3 = 3 V',
            'Voltage across 4 Ω: V₂ = IR₂ = 1 × 4 = 4 V',
            'Voltage across 5 Ω: V₃ = IR₃ = 1 × 5 = 5 V',
            'Check KVL: V₁ + V₂ + V₃ = 3 + 4 + 5 = 12 V ✓'
        ],
        helper: 'KVL: Sum of voltages around loop = 0',
        solution: 'I = 1 A; V₁ = 3 V, V₂ = 4 V, V₃ = 5 V',
        realWorldContext: 'Analyzing series circuits'
    });

    // Problem 2: Kirchhoff's Current Law
    relatedProblems.push({
        difficulty: 'similar',
        scenario: "Kirchhoff's Current Law (KCL)",
        problem: 'At a junction, currents of 2 A and 3 A enter, and one current exits. Find the exiting current.',
        parameters: { currentsIn: [2, 3], currentsOut: [] },
        type: 'kirchhoff_current',
        context: { difficulty: 'beginner', topic: 'KCL Application' },
        subparts: [
            'Given: I₁ = 2 A (in), I₂ = 3 A (in)',
            'KCL: Sum of currents in = Sum of currents out',
            'I₁ + I₂ = I_out',
            '2 + 3 = I_out',
            'I_out = 5 A'
        ],
        helper: 'KCL: Current in = Current out at junctions',
        solution: 'I_out =5 A',
        realWorldContext: 'Current distribution in parallel circuits'
    });

    // Problem 3: Voltage Divider
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Voltage Divider Circuit',
        problem: 'A 15 V source is connected to resistors R₁ = 4 kΩ and R₂ = 6 kΩ in series. Find the voltage across R₂.',
        parameters: { Vin: 15, R1: 4000, R2: 6000 },
        type: 'voltage_divider',
        context: { difficulty: 'intermediate', topic: 'Voltage Divider' },
        subparts: [
            'Given: Vin = 15 V, R₁ = 4 kΩ, R₂ = 6 kΩ',
            'Voltage divider formula: V_out = V_in × R₂/(R₁ + R₂)',
            'V_out = 15 × 6000/(4000 + 6000)',
            'V_out = 15 × 6000/10000',
            'V_out = 15 × 0.6',
            'V_out = 9 V'
        ],
        helper: 'Voltage divider: V_out = V_in × R₂/(R₁ + R₂)',
        solution: 'V_R₂ = 9 V',
        realWorldContext: 'Sensor circuits and signal conditioning'
    });

    // Problem 4: Current Divider
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Current Divider Circuit',
        problem: 'A 6 A current splits between two parallel resistors: R₁ = 8 Ω and R₂ = 4 Ω. Find the current through each.',
        parameters: { Itotal: 6, R1: 8, R2: 4 },
        type: 'current_divider',
        context: { difficulty: 'intermediate', topic: 'Current Divider' },
        subparts: [
            'Given: I_total = 6 A, R₁ = 8 Ω, R₂ = 4 Ω',
            'Current through R₁: I₁ = I_total × R₂/(R₁ + R₂)',
            'I₁ = 6 × 4/(8 + 4) = 6 × 4/12 = 2 A',
            'Current through R₂: I₂ = I_total × R₁/(R₁ + R₂)',
            'I₂ = 6 × 8/(8 + 4) = 6 × 8/12 = 4 A',
            'Check: I₁ + I₂ = 2 + 4 = 6 A ✓',
            'Note: Smaller resistance carries more current'
        ],
        helper: 'Current divider: larger current through smaller resistance',
        solution: 'I₁ = 2 A, I₂ = 4 A',
        realWorldContext: 'Parallel branch analysis in power distribution'
    });

    // Problem 5: RC Circuit Charging
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'RC Circuit Charging',
        problem: 'A 100 μF capacitor is charged through a 5 kΩ resistor from a 12 V source. Find (a) time constant, (b) voltage at t = 0.5 s.',
        parameters: { R: 5000, C: 100e-6, V0: 12, t: 0.5, findWhat: 'all' },
        type: 'rc_charging',
        context: { difficulty: 'advanced', topic: 'RC Transient Response' },
        subparts: [
            'Given: R = 5 kΩ, C = 100 μF, V₀ = 12 V, t = 0.5 s',
            '(a) Time constant: τ = RC',
            'τ = 5000 × 100×10⁻⁶ = 0.5 s',
            '(b) Voltage at t = 0.5 s: V_C(t) = V₀(1 - e^(-t/τ))',
            'V_C(0.5) = 12(1 - e^(-0.5/0.5))',
            'V_C(0.5) = 12(1 - e^(-1))',
            'V_C(0.5) = 12(1 - 0.368)',
            'V_C(0.5) = 12 × 0.632 = 7.58 V',
            'At t = τ, capacitor is 63.2% charged'
        ],
        helper: 'τ = RC; V_C(t) = V₀(1 - e^(-t/τ)) for charging',
        solution: 'τ = 0.5 s, V_C(0.5s) = 7.58 V',
        realWorldContext: 'Timing circuits and signal delays'
    });

    return relatedProblems;
}

// ============== MAGNETIC FIELDS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedMagneticFields() {
    const relatedProblems = [];

    // Problem 1: Magnetic Force on Moving Charge
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Magnetic Force on Moving Charge',
        problem: 'An electron moves at 2.0 × 10⁶ m/s perpendicular to a 0.5 T magnetic field. Calculate the magnetic force on it.',
        parameters: { q: -1.602e-19, v: 2.0e6, B: 0.5, angle: 90 },
        type: 'magnetic_force_charge',
        context: { difficulty: 'intermediate', topic: 'Lorentz Force' },
        subparts: [
            'Given: v = 2.0 × 10⁶ m/s, B = 0.5 T, θ = 90°',
            'Electron charge: q = 1.602 × 10⁻¹⁹ C',
            'Magnetic force: F = qvB sin θ',
            'F = (1.602 × 10⁻¹⁹) × (2.0 × 10⁶) × 0.5 × sin(90°)',
            'F = (1.602 × 10⁻¹⁹) × (2.0 × 10⁶) × 0.5 × 1',
            'F = 1.60 × 10⁻¹³ N',
            'Direction: Use right-hand rule (reverse for electron)'
        ],
        helper: 'F = qvB sin θ; maximum when perpendicular',
        solution: 'F = 1.60 × 10⁻¹³ N',
        realWorldContext: 'Particle deflection in mass spectrometers'
    });

    // Problem 2: Circular Motion in Magnetic Field
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circular Motion in Magnetic Field',
        problem: 'A proton moves in a circle of radius 0.5 m in a 0.2 T magnetic field. Find (a) its speed and (b) period.',
        parameters: { q: 1.602e-19, m: 1.673e-27, B: 0.2, findRadius: true },
        type: 'circular_motion_magnetic',
        context: { difficulty: 'advanced', topic: 'Cyclotron Motion' },
        subparts: [
            'Given: r = 0.5 m, B = 0.2 T',
            'Proton: q = 1.602 × 10⁻¹⁹ C, m = 1.673 × 10⁻²⁷ kg',
            '(a) Radius formula: r = mv/(qB)',
            'Solve for v: v = rqB/m',
            'v = (0.5) × (1.602×10⁻¹⁹) × 0.2 / (1.673×10⁻²⁷)',
            'v = 9.58 × 10⁶ m/s',
            '(b) Period: T = 2πm/(qB)',
            'T = 2π × (1.673×10⁻²⁷) / [(1.602×10⁻¹⁹) × 0.2]',
            'T = 3.28 × 10⁻⁷ s = 328 ns'
        ],
        helper: 'r = mv/(qB); T = 2πm/(qB)',
        solution: 'v = 9.58 × 10⁶ m/s, T = 328 ns',
        realWorldContext: 'Cyclotrons and particle accelerators'
    });

    // Problem 3: Magnetic Force on Current-Carrying Wire
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Force on Current-Carrying Wire',
        problem: 'A 0.5 m wire carrying 8 A is placed perpendicular to a 0.3 T magnetic field. Find the force on the wire.',
        parameters: { I: 8, L: 0.5, B: 0.3, angle: 90 },
        type: 'magnetic_force_current',
        context: { difficulty: 'intermediate', topic: 'Force on Wire' },
        subparts: [
            'Given: I = 8 A, L = 0.5 m, B = 0.3 T, θ = 90°',
            'Force on wire: F = ILB sin θ',
            'F = 8 × 0.5 × 0.3 × sin(90°)',
            'F = 8 × 0.5 × 0.3 × 1',
            'F = 1.2 N',
            'Direction: Perpendicular to both I and B'
        ],
        helper: 'F = ILB sin θ for straight wire',
        solution: 'F = 1.2 N',
        realWorldContext: 'Electric motors and loudspeakers'
    });

    // Problem 4: Magnetic Field from Long Wire
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Magnetic Field from Straight Wire',
        problem: 'A long straight wire carries 10 A. Calculate the magnetic field at 0.04 m from the wire.',
        parameters: { I: 10, r: 0.04 },
        type: 'biot_savart_wire',
        context: { difficulty: 'intermediate', topic: 'Biot-Savart Law' },
        subparts: [
            'Given: I = 10 A, r = 0.04 m',
            'Permeability: μ₀ = 4π × 10⁻⁷ T⋅m/A',
            'Magnetic field: B = μ₀I/(2πr)',
            'B = (4π × 10⁻⁷) × 10 / (2π × 0.04)',
            'B = (4 × 10⁻⁶) / (0.08π)',
            'B = 5.0 × 10⁻⁵ T = 50 μT',
            'Direction: Circular around wire (right-hand rule)'
        ],
        helper: 'B = μ₀I/(2πr) for long straight wire',
        solution: 'B = 50 μT',
        realWorldContext: 'Magnetic fields near power lines'
    });

    // Problem 5: Solenoid Magnetic Field
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Magnetic Field Inside Solenoid',
        problem: 'A solenoid has 500 turns in 0.25 m length and carries 2 A. Find the magnetic field inside.',
        parameters: { N: 500, L: 0.25, I: 2 },
        type: 'solenoid_field',
        context: { difficulty: 'intermediate', topic: 'Solenoid Field' },
        subparts: [
            'Given: N = 500 turns, L = 0.25 m, I = 2 A',
            'Turns per length: n = N/L = 500/0.25 = 2000 turns/m',
            'Solenoid field: B = μ₀nI',
            'B = (4π × 10⁻⁷) × 2000 × 2',
            'B = (4π × 10⁻⁷) × 4000',
            'B = 5.03 × 10⁻³ T = 5.03 mT',
            'Field is uniform inside and parallel to axis'
        ],
        helper: 'B = μ₀nI where n = N/L',
        solution: 'B = 5.03 mT',
        realWorldContext: 'Electromagnets and MRI machines'
    });

    return relatedProblems;
}

// ============== ELECTROMAGNETIC INDUCTION - RELATED PROBLEMS GENERATOR ==============

function generateRelatedEMInduction() {
    const relatedProblems = [];

    // Problem 1: Faraday's Law - Changing Field
    relatedProblems.push({
        difficulty: 'easier',
        scenario: "Faraday's Law - Changing Magnetic Field",
        problem: 'A circular coil of radius 0.1 m with 50 turns is in a magnetic field that increases from 0.2 T to 0.6 T in 0.5 s. Find the induced EMF.',
        parameters: { N: 50, A: Math.PI * 0.1 * 0.1, dB_dt: (0.6 - 0.2) / 0.5, B: 0.2, angle: 0 },
        type: 'faraday_law',
        context: { difficulty: 'intermediate', topic: "Faraday's Law" },
        subparts: [
            'Given: N = 50, r = 0.1 m, B₁ = 0.2 T, B₂ = 0.6 T, Δt = 0.5 s',
            'Area: A = πr² = π(0.1)² = 0.0314 m²',
            'Change in flux: ΔΦ = AΔB = 0.0314 × (0.6 - 0.2)',
            'ΔΦ = 0.0314 × 0.4 = 0.01256 Wb',
            "Faraday's law: ε = -N(ΔΦ/Δt)",
            'ε = -50 × (0.01256 / 0.5)',
            'ε = -50 × 0.02512',
            'ε = -1.26 V',
            'Magnitude: |ε| = 1.26 V'
        ],
        helper: 'ε = -N(dΦ/dt); negative sign is Lenz\'s law',
        solution: 'ε = 1.26 V',
        realWorldContext: 'Electric generators and transformers'
    });

    // Problem 2: Motional EMF
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Motional EMF',
        problem: 'A 0.4 m rod moves perpendicular to a 0.5 T magnetic field at 6 m/s. Calculate the induced EMF.',
        parameters: { B: 0.5, L: 0.4, v: 6, angle: 90 },
        type: 'motional_emf',
        context: { difficulty: 'intermediate', topic: 'Motional EMF' },
        subparts: [
            'Given: L = 0.4 m, v = 6 m/s, B = 0.5 T, θ = 90°',
            'Motional EMF: ε = BLv sin θ',
            'ε = 0.5 × 0.4 × 6 × sin(90°)',
            'ε = 0.5 × 0.4 × 6 × 1',
            'ε = 1.2 V',
            'Direction: Determined by right-hand rule'
        ],
        helper: 'ε = BLv for perpendicular motion',
        solution: 'ε = 1.2 V',
        realWorldContext: 'Electromagnetic braking systems'
    });

    // Problem 3: Self-Inductance
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Self-Inductance of Solenoid',
        problem: 'A solenoid with 800 turns, length 0.5 m, and cross-sectional area 0.001 m² is used. Calculate its self-inductance.',
        parameters: { N: 800, A: 0.001, length: 0.5 },
        type: 'self_inductance',
        context: { difficulty: 'advanced', topic: 'Inductance' },
        subparts: [
            'Given: N = 800 turns, L = 0.5 m, A = 0.001 m²',
            'Turns per length: n = N/L = 800/0.5 = 1600 turns/m',
            'Self-inductance: L = μ₀n²Al',
            'L = (4π × 10⁻⁷) × (1600)² × 0.001 × 0.5',
            'L = (4π × 10⁻⁷) × 2,560,000 × 0.0005',
            'L = 1.61 × 10⁻³ H = 1.61 mH'
        ],
        helper: 'L = μ₀n²Al for solenoid',
        solution: 'L = 1.61 mH',
        realWorldContext: 'Inductors in power supplies and filters'
    });

    // Problem 4: RL Circuit
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'RL Circuit Current Growth',
        problem: 'A 12 V source is connected to a 20 Ω resistor and 0.5 H inductor in series. Find the current at t = 0.02 s.',
        parameters: { R: 20, L: 0.5, V0: 12, t: 0.02, rising: true },
        type: 'rl_circuits',
        context: { difficulty: 'advanced', topic: 'RL Transients' },
        subparts: [
            'Given: V₀ = 12 V, R = 20 Ω, L = 0.5 H, t = 0.02 s',
            'Time constant: τ = L/R = 0.5/20 = 0.025 s',
            'Final current: I₀ = V₀/R = 12/20 = 0.6 A',
            'Current growth: I(t) = I₀(1 - e^(-t/τ))',
            'I(0.02) = 0.6 × (1 - e^(-0.02/0.025))',
            'I(0.02) = 0.6 × (1 - e^(-0.8))',
            'I(0.02) = 0.6 × (1 - 0.449)',
            'I(0.02) = 0.6 × 0.551 = 0.33 A',
            'At t = τ, current reaches 63.2% of maximum'
        ],
        helper: 'τ = L/R; I(t) = I₀(1 - e^(-t/τ)) for current growth',
        solution: 'I(0.02s) = 0.33 A',
        realWorldContext: 'Inductive loads in power systems'
    });

    // Problem 5: Energy in Inductor
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Energy Stored in Inductor',
        problem: 'A 0.8 H inductor carries a current of 5 A. Calculate the energy stored in its magnetic field.',
        parameters: { L: 0.8, I: 5 },
        type: 'energy_inductor',
        context: { difficulty: 'intermediate', topic: 'Magnetic Energy' },
        subparts: [
            'Given: L = 0.8 H, I = 5 A',
            'Energy in inductor: U = ½LI²',
            'U = 0.5 × 0.8 × (5)²',
            'U = 0.5 × 0.8 × 25',
            'U = 10 J'
        ],
        helper: 'U = ½LI² for magnetic energy',
        solution: 'U = 10 J',
        realWorldContext: 'Energy storage in switching converters'
    });

    return relatedProblems;
}

// ============== AC CIRCUITS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedACCircuits() {
    const relatedProblems = [];

    // Problem 1: AC Resistor
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'AC Circuit - Pure Resistor',
        problem: 'A 50 Ω resistor is connected to an AC source with V₀ = 170 V. Find the peak current and RMS values.',
        parameters: { R: 50, V0: 170 },
        type: 'ac_resistor',
        context: { difficulty: 'intermediate', topic: 'AC in Resistors' },
        subparts: [
            'Given: R = 50 Ω, V₀ = 170 V',
            'Peak current: I₀ = V₀/R',
            'I₀ = 170/50 = 3.4 A',
            'RMS voltage: V_rms = V₀/√2',
            'V_rms = 170/1.414 = 120.2 V',
            'RMS current: I_rms = I₀/√2',
            'I_rms = 3.4/1.414 = 2.4 A',
            'Voltage and current are in phase'
        ],
        helper: 'RMS = Peak/√2; V and I in phase for resistor',
        solution: 'I₀ = 3.4 A, V_rms = 120 V, I_rms = 2.4 A',
        realWorldContext: 'AC power in heating elements'
    });

    // Problem 2: Capacitive Reactance
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'AC Circuit - Capacitor',
        problem: 'A 100 μF capacitor is connected to a 60 Hz, 120 V AC source. Find the capacitive reactance and peak current.',
        parameters: { C: 100e-6, V0: 170, frequency: 60 },
        type: 'ac_capacitor',
        context: { difficulty: 'intermediate', topic: 'Capacitive Reactance' },
        subparts: [
            'Given: C = 100 μF, f = 60 Hz, V₀ = 120√2 = 170 V',
            'Angular frequency: ω = 2πf = 2π(60) = 377 rad/s',
            'Capacitive reactance: X_C = 1/(ωC)',
            'X_C = 1/(377 × 100×10⁻⁶)',
            'X_C = 1/0.0377 = 26.5 Ω',
            'Peak current: I₀ = V₀/X_C',
            'I₀ = 170/26.5 = 6.4 A',
            'Current leads voltage by 90°'
        ],
        helper: 'X_C = 1/(ωC); current leads voltage by 90°',
        solution: 'X_C = 26.5 Ω, I₀ = 6.4 A',
        realWorldContext: 'AC coupling and filtering circuits'
    });

    // Problem 3: Inductive Reactance
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'AC Circuit - Inductor',
        problem: 'A 0.5 H inductor is connected to a 50 Hz AC source with V_rms = 240 V. Find the inductive reactance and RMS current.',
        parameters: { L: 0.5, V0: 240 * Math.sqrt(2), frequency: 50 },
        type: 'ac_inductor',
        context: { difficulty: 'intermediate', topic: 'Inductive Reactance' },
        subparts: [
            'Given: L = 0.5 H, f = 50 Hz, V_rms = 240 V',
            'Angular frequency: ω = 2πf = 2π(50) = 314 rad/s',
            'Inductive reactance: X_L = ωL',
            'X_L = 314 × 0.5 = 157 Ω',
            'RMS current: I_rms = V_rms/X_L',
            'I_rms = 240/157 = 1.53 A',
            'Current lags voltage by 90°'
        ],
        helper: 'X_L = ωL; current lags voltage by 90°',
        solution: 'X_L = 157 Ω, I_rms = 1.53 A',
        realWorldContext: 'Inductive loads in motors'
    });

    // Problem 4: Series RLC Circuit
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Series RLC Circuit',
        problem: 'A series RLC circuit has R = 30 Ω, L = 0.2 H, C = 100 μF, and operates at 60 Hz with V_rms = 120 V. Find impedance and current.',
        parameters: { R: 30, L: 0.2, C: 100e-6, V0: 120 * Math.sqrt(2), frequency: 60 },
        type: 'rlc_circuit',
        context: { difficulty: 'advanced', topic: 'RLC Analysis' },
        subparts: [
            'Given: R = 30 Ω, L = 0.2 H, C = 100 μF, f = 60 Hz, V_rms = 120 V',
            'ω = 2πf = 377 rad/s',
            'X_L = ωL = 377 × 0.2 = 75.4 Ω',
            'X_C = 1/(ωC) = 1/(377 × 100×10⁻⁶) = 26.5 Ω',
            'Net reactance: X = X_L - X_C = 75.4 - 26.5 = 48.9 Ω',
            'Impedance: Z = √(R² + X²)',
            'Z = √(30² + 48.9²) = √(900 + 2391) = 57.4 Ω',
            'Current: I_rms = V_rms/Z = 120/57.4 = 2.09 A',
            'Phase angle: φ = arctan(X/R) = arctan(48.9/30) = 58.5°'
        ],
        helper: 'Z = √(R² + (X_L - X_C)²); circuit is inductive (X_L > X_C)',
        solution: 'Z = 57.4 Ω, I_rms = 2.09 A, φ = 58.5°',
        realWorldContext: 'Resonant circuits and tuning'
    });

    // Problem 5: AC Power and Power Factor
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'AC Power and Power Factor',
        problem: 'An AC circuit has V_rms = 240 V, I_rms = 5 A, and phase angle φ = 37°. Calculate real power, apparent power, and power factor.',
        parameters: { Vrms: 240, Irms: 5, phaseDegrees: 37 },
        type: 'ac_power',
        context: { difficulty: 'advanced', topic: 'AC Power' },
        subparts: [
            'Given: V_rms = 240 V, I_rms = 5 A, φ = 37°',
            'Apparent power: S = V_rms × I_rms',
            'S = 240 × 5 = 1200 VA',
            'Real power: P = V_rms × I_rms × cos φ',
            'P = 240 × 5 × cos(37°)',
            'P = 1200 × 0.7986 = 958 W',
            'Reactive power: Q = V_rms × I_rms × sin φ',
            'Q = 240 × 5 × sin(37°)',
            'Q = 1200 × 0.6018 = 722 VAR',
            'Power factor: pf = cos φ = 0.799 = 79.9%'
        ],
        helper: 'P = VI cos φ (real power); pf = cos φ',
        solution: 'P = 958 W, S = 1200 VA, pf = 0.799',
        realWorldContext: 'Power factor correction in industrial systems'
    });

    return relatedProblems;
}

// ============== SOLVER FUNCTIONS ==============

function solveElectrostaticsProblems() {
    const problems = generateRelatedElectrostatics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Electrostatics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveElectricFieldsProblems() {
    const problems = generateRelatedElectricFields();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Electric Fields Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveElectricPotentialProblems() {
    const problems = generateRelatedElectricPotential();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Electric Potential Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveCapacitanceProblems() {
    const problems = generateRelatedCapacitance();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Capacitance Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveCurrentResistanceProblems() {
    const problems = generateRelatedCurrentResistance();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Current & Resistance Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveDCCircuitsProblems() {
    const problems = generateRelatedDCCircuits();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving DC Circuits Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveMagneticFieldsProblems() {
    const problems = generateRelatedMagneticFields();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Magnetic Fields Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveEMInductionProblems() {
    const problems = generateRelatedEMInduction();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving EM Induction Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

function solveACCircuitsProblems() {
    const problems = generateRelatedACCircuits();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving AC Circuits Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedElectricityMagnetismWorkbook({
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

        workbook.solvePhysicsProblem({
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

async function generateComprehensiveDocument() {
    console.log('Generating Comprehensive Electricity & Magnetism Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Electricity & Magnetism Workbook',
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
            text: 'Electrostatics, Electric Fields, Magnetism, Circuits, and Induction',
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

    // Part I: Electrostatics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Electrostatics (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const electrostaticsProblems = generateRelatedElectrostatics();
    electrostaticsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Electric Fields
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Electric Fields (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const electricFieldsProblems = generateRelatedElectricFields();
    electricFieldsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 4}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Electric Potential
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electric Potential (3 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const electricPotentialProblems = generateRelatedElectricPotential();
    electricPotentialProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 7}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Capacitance
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Capacitance (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const capacitanceProblems = generateRelatedCapacitance();
    capacitanceProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 10}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Current and Resistance
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Current and Resistance (4 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const currentResistanceProblems = generateRelatedCurrentResistance();
    currentResistanceProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 14}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: DC Circuits
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: DC Circuits (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const dcCircuitsProblems = generateRelatedDCCircuits();
    dcCircuitsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 18}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Magnetic Fields
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Magnetic Fields (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const magneticFieldsProblems = generateRelatedMagneticFields();
    magneticFieldsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 23}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VIII: Electromagnetic Induction
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Electromagnetic Induction (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const emInductionProblems = generateRelatedEMInduction();
    emInductionProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 28}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IX: AC Circuits
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: AC Circuits (5 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const acCircuitsProblems = generateRelatedACCircuits();
    acCircuitsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 33}. ${problem.scenario}: ${problem.problem}`,
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

    // ============== PART I: ELECTROSTATICS ==============
    console.log('\nProcessing Part I: Electrostatics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Electrostatics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const electrostaticsSolved = solveElectrostaticsProblems();
    electrostaticsSolved.forEach((solved, index) => {
        console.log(`  Adding Electrostatics Problem ${index + 1} to document...`);

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

    // ============== PART II: ELECTRIC FIELDS ==============
    console.log('\nProcessing Part II: Electric Fields...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Electric Fields',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const electricFieldsSolved = solveElectricFieldsProblems();
    electricFieldsSolved.forEach((solved, index) => {
        console.log(`  Adding Electric Fields Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 4}: ${solved.problem.scenario}`,
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

    // ============== PART III: ELECTRIC POTENTIAL ==============
    console.log('\nProcessing Part III: Electric Potential...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Electric Potential',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const electricPotentialSolved = solveElectricPotentialProblems();
    electricPotentialSolved.forEach((solved, index) => {
        console.log(`  Adding Electric Potential Problem ${index + 1} to document...`);

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

    // ============== PART IV: CAPACITANCE ==============
    console.log('\nProcessing Part IV: Capacitance...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Capacitance',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const capacitanceSolved = solveCapacitanceProblems();
    capacitanceSolved.forEach((solved, index) => {
        console.log(`  Adding Capacitance Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 10}: ${solved.problem.scenario}`,
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

    // ============== PART V: CURRENT AND RESISTANCE ==============
    console.log('\nProcessing Part V: Current and Resistance...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Current and Resistance',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const currentResistanceSolved = solveCurrentResistanceProblems();
    currentResistanceSolved.forEach((solved, index) => {
        console.log(`  Adding Current & Resistance Problem ${index + 1} to document...`);

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

    // ============== PART VI: DC CIRCUITS ==============
    console.log('\nProcessing Part VI: DC Circuits...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: DC Circuits',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const dcCircuitsSolved = solveDCCircuitsProblems();
    dcCircuitsSolved.forEach((solved, index) => {
        console.log(`  Adding DC Circuits Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 18}: ${solved.problem.scenario}`,
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

    // ============== PART VII: MAGNETIC FIELDS ==============
    console.log('\nProcessing Part VII: Magnetic Fields...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Magnetic Fields',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const magneticFieldsSolved = solveMagneticFieldsProblems();
    magneticFieldsSolved.forEach((solved, index) => {
        console.log(`  Adding Magnetic Fields Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 23}: ${solved.problem.scenario}`,
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

    // ============== PART VIII: ELECTROMAGNETIC INDUCTION ==============
    console.log('\nProcessing Part VIII: Electromagnetic Induction...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VIII: Electromagnetic Induction',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const emInductionSolved = solveEMInductionProblems();
    emInductionSolved.forEach((solved, index) => {
        console.log(`  Adding EM Induction Problem ${index + 1} to document...`);

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

    // ============== PART IX: AC CIRCUITS ==============
    console.log('\nProcessing Part IX: AC Circuits...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IX: AC Circuits',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const acCircuitsSolved = solveACCircuitsProblems();
    acCircuitsSolved.forEach((solved, index) => {
        console.log(`  Adding AC Circuits Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 33}: ${solved.problem.scenario}`,
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
        const filename = 'comprehensive_electricity_magnetism_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 37');
        console.log('    - Electrostatics: 3 problems');
        console.log('    - Electric Fields: 3 problems');
        console.log('    - Electric Potential: 3 problems');
        console.log('    - Capacitance: 4 problems');
        console.log('    - Current and Resistance: 4 problems');
        console.log('    - DC Circuits: 5 problems');
        console.log('    - Magnetic Fields: 5 problems');
        console.log('    - Electromagnetic Induction: 5 problems');
        console.log('    - AC Circuits: 5 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Electrostatics (Problems 1-3)');
        console.log('  • Part II: Electric Fields (Problems 4-6)');
        console.log('  • Part III: Electric Potential (Problems 7-9)');
        console.log('  • Part IV: Capacitance (Problems 10-13)');
        console.log('  • Part V: Current and Resistance (Problems 14-17)');
        console.log('  • Part VI: DC Circuits (Problems 18-22)');
        console.log('  • Part VII: Magnetic Fields (Problems 23-27)');
        console.log('  • Part VIII: Electromagnetic Induction (Problems 28-32)');
        console.log('  • Part IX: AC Circuits (Problems 33-37)');
        console.log('\n📄 EXPECTED PAGES: 120+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution with physics explanations');
        console.log('  • Enhanced explanations (conceptual, procedural, visual, mathematical)');
        console.log('  • Physical interpretation and meaning');
        console.log('  • Key formulas and verification');
        console.log('  • Relevant theory and pedagogical notes');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
        console.log('  • Right-hand rules and conventions (for magnetic fields)');
        console.log('\n🔬 PHYSICS TOPICS COVERED:');
        console.log('  • Coulomb\'s Law and electrostatic forces');
        console.log('  • Electric fields and field superposition');
        console.log('  • Electric potential and potential energy');
        console.log('  • Capacitors and energy storage');
        console.log('  • Ohm\'s Law and electrical resistance');
        console.log('  • DC circuit analysis (KVL, KCL)');
        console.log('  • RC circuits and transient response');
        console.log('  • Magnetic forces on charges and currents');
        console.log('  • Magnetic fields from currents (Biot-Savart, Ampère\'s Law)');
        console.log('  • Electromagnetic induction (Faraday\'s Law)');
        console.log('  • Self-inductance and RL circuits');
        console.log('  • AC circuits (reactance, impedance, power)');
        console.log('  • Series RLC circuits and resonance');
        console.log('\n🎯 DIFFICULTY PROGRESSION:');
        console.log('  • Easier: Foundational concepts and basic applications');
        console.log('  • Similar: Standard problem-solving techniques');
        console.log('  • Harder: Multi-step problems and advanced concepts');
        console.log('\n💡 PEDAGOGICAL FEATURES:');
        console.log('  • Scaffolded learning progression');
        console.log('  • Multiple explanation styles (conceptual, procedural, visual, mathematical)');
        console.log('  • Error prevention with common mistakes highlighted');
        console.log('  • Verification sections with detailed checks');
        console.log('  • Real-world applications for motivation');
        console.log('  • Teaching notes for instructors');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// ============== RUN THE COMPREHENSIVE DOCUMENT GENERATION ==============

generateComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});
