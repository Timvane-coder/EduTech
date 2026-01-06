import { EnhancedLinearMathematicalWorkbook } from './linearworkbook.js';
import { EnhancedQuadraticMathematicalWorkbook } from './quadraticworkbook.js';
import { EnhancedSimultaneousEquationsWorkbook } from './SimultaneousWorkbook.js';
import { EnhancedPolynomialMathematicalWorkbook } from './polynomialworkbook.js'
import { EnhancedTriangleMathematicalWorkbook } from './TriangleWorkbook.js';
import { EnhancedCircleGeometryWorkbook } from './CircleWorkbook.js';
import { EnhancedQuadrilateralsMathematicalWorkbook } from './QuadrilateralsWorkbook.js';
import { EnhancedAnglesMathematicalWorkbook } from './AnglesWorkbook.js';
import { EnhancedSimilarityCongruenceWorkbook } from './SimilarityCongruenceWorkbook.js';
import { EnhancedAlgebraicExpressionWorkbook } from './AlgebraExpressionWorkbook.js';
import { EnhancedFunctionsGraphsWorkbook } from './FunctionGraphsWorkbook.js';
import { EnhancedTrigonometricWorkbook } from './TrigonometryWorkbook.js';
import { EnhancedSolidGeometryWorkbook } from './SolidGeometryWorkbook.js';
import { EnhancedSurfaceAreaVolumeWorkbook } from './SurfaceAreaVolumeWorkbook.js';
import { EnhancedCoordinateGeometryWorkbook } from './CoordinateGeometryWorkbook.js';
import { EnhancedNumberTheoryWorkbook } from './NumberTheoryWorkbook.js';
import { EnhancedSequenceSeriesWorkbook } from './SequenceSeriesWorkbook.js';
import { EnhancedMatrixMathematicalWorkbook } from './MatrixWorkbook.js';
import { EnhancedVectorMathematicalWorkbook } from './VectorWorkbook.js';
import { EnhancedRationalAlgebraicWorkbook } from './RationalWorkbook.js';
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



// ============== RATIONAL EXPRESSIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRationalExpressions() {
    const relatedProblems = [];

    // Problem 1: Simple Rational Simplification
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simplifying Rational Expression',
        problem: 'Simplify: (x² - 4)/(x - 2)',
        parameters: { 
            numerator: 'x² - 4', 
            denominator: 'x - 2',
            expression: '(x² - 4)/(x - 2)'
        },
        type: 'simplify_rational',
        context: { difficulty: 'beginner', topic: 'Simplifying Rational Expressions' },
        subparts: [
            'Given: (x² - 4)/(x - 2)',
            'Factor numerator: x² - 4 = (x + 2)(x - 2)',
            'Expression becomes: (x + 2)(x - 2)/(x - 2)',
            'Cancel common factor (x - 2): x + 2',
            'Domain restriction: x ≠ 2',
            'Simplified form: x + 2, x ≠ 2'
        ],
        helper: 'Factor completely and cancel common factors',
        solution: 'x + 2, x ≠ 2',
        realWorldContext: 'Reducing complex fractions to simpler forms'
    });

    // Problem 2: Rational Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Solving Rational Equation',
        problem: 'Solve: 1/x + 1/(x+1) = 3/4',
        parameters: { 
            equation: '1/x + 1/(x+1) = 3/4',
            leftSide: '1/x + 1/(x+1)',
            rightSide: '3/4'
        },
        type: 'rational_equation',
        context: { difficulty: 'intermediate', topic: 'Rational Equations' },
        subparts: [
            'Given: 1/x + 1/(x+1) = 3/4',
            'Find LCD: 4x(x+1)',
            'Multiply all terms by LCD:',
            '4(x+1) + 4x = 3x(x+1)',
            '4x + 4 + 4x = 3x² + 3x',
            '8x + 4 = 3x² + 3x',
            '3x² - 5x - 4 = 0',
            'Solve: x = -0.62 or x = 2.12 (approx)',
            'Check: both solutions valid (no zero denominators)'
        ],
        helper: 'Clear fractions using LCD, then solve',
        solution: 'x ≈ -0.62 or x ≈ 2.12',
        realWorldContext: 'Work rate and mixture problems'
    });

    // Problem 3: Addition of Rational Expressions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Rational Expressions',
        problem: 'Add: 2/(x-1) + 3/(x+2)',
        parameters: { 
            term1: '2/(x-1)', 
            term2: '3/(x+2)',
            operation: '+',
            expression: '2/(x-1) + 3/(x+2)'
        },
        type: 'rational_addition',
        context: { difficulty: 'intermediate', topic: 'Operations on Rational Expressions' },
        subparts: [
            'Given: 2/(x-1) + 3/(x+2)',
            'LCD: (x-1)(x+2)',
            'Rewrite first fraction: 2(x+2)/[(x-1)(x+2)]',
            'Rewrite second fraction: 3(x-1)/[(x-1)(x+2)]',
            'Add numerators: [2(x+2) + 3(x-1)]/[(x-1)(x+2)]',
            'Expand: (2x + 4 + 3x - 3)/[(x-1)(x+2)]',
            'Combine: (5x + 1)/[(x-1)(x+2)]',
            'Domain: x ≠ 1, x ≠ -2'
        ],
        helper: 'Find LCD, rewrite fractions, add numerators',
        solution: '(5x + 1)/[(x-1)(x+2)]',
        realWorldContext: 'Combining rates and proportions'
    });

    // Problem 4: Multiplication of Rational Expressions
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Multiplying Rational Expressions',
        problem: 'Multiply: (x²-9)/(x+2) × (x+2)/(x-3)',
        parameters: { 
            term1: '(x²-9)/(x+2)', 
            term2: '(x+2)/(x-3)',
            operation: '*',
            expression: '(x²-9)/(x+2) × (x+2)/(x-3)'
        },
        type: 'rational_multiplication',
        context: { difficulty: 'beginner', topic: 'Multiplication of Rational Expressions' },
        subparts: [
            'Given: (x²-9)/(x+2) × (x+2)/(x-3)',
            'Factor x²-9: (x+3)(x-3)',
            'Expression: [(x+3)(x-3)]/(x+2) × (x+2)/(x-3)',
            'Cancel (x+2) and (x-3):',
            'Result: x + 3',
            'Domain restrictions: x ≠ -2, x ≠ 3',
            'Simplified: x + 3, x ≠ -2, 3'
        ],
        helper: 'Factor first, then cancel common factors',
        solution: 'x + 3, x ≠ -2, 3',
        realWorldContext: 'Scaling and proportion calculations'
    });

    // Problem 5: Complex Fraction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Simplifying Complex Fraction',
        problem: 'Simplify: (1/x + 1/y)/(1/x - 1/y)',
        parameters: { 
            numeratorFraction: '1/x + 1/y',
            denominatorFraction: '1/x - 1/y',
            expression: '(1/x + 1/y)/(1/x - 1/y)'
        },
        type: 'complex_fraction',
        context: { difficulty: 'intermediate', topic: 'Complex Fractions' },
        subparts: [
            'Given: (1/x + 1/y)/(1/x - 1/y)',
            'Method 1 - LCD approach:',
            'LCD of all fractions: xy',
            'Multiply numerator and denominator by xy:',
            'Numerator: xy(1/x + 1/y) = y + x',
            'Denominator: xy(1/x - 1/y) = y - x',
            'Result: (x + y)/(y - x)',
            'Method 2 - Division approach:',
            'Simplify top: (y + x)/xy',
            'Simplify bottom: (y - x)/xy',
            'Divide: (y + x)/(y - x)',
            'Domain: x ≠ 0, y ≠ 0, x ≠ y'
        ],
        helper: 'Use LCD method or simplify top and bottom separately',
        solution: '(x + y)/(y - x)',
        realWorldContext: 'Parallel resistance and optical lens formulas'
    });

    // Problem 6: Rational Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solving Rational Inequality',
        problem: 'Solve: (x-2)/(x+1) > 0',
        parameters: { 
            inequality: '(x-2)/(x+1) > 0',
            numerator: 'x-2',
            operator: '>',
            rightSide: '0'
        },
        type: 'rational_inequality',
        context: { difficulty: 'intermediate', topic: 'Rational Inequalities' },
        subparts: [
            'Given: (x-2)/(x+1) > 0',
            'Find critical values:',
            'Numerator = 0: x - 2 = 0 → x = 2',
            'Denominator = 0: x + 1 = 0 → x = -1',
            'Critical points: x = -1, x = 2',
            'Test intervals:',
            'x < -1: Test x = -2: (-4)/(-1) = 4 > 0 ✓',
            '-1 < x < 2: Test x = 0: (-2)/(1) = -2 < 0 ✗',
            'x > 2: Test x = 3: (1)/(4) > 0 ✓',
            'Solution: x < -1 or x > 2',
            'Interval notation: (-∞, -1) ∪ (2, ∞)'
        ],
        helper: 'Find zeros and undefined points, test intervals',
        solution: 'x < -1 or x > 2',
        realWorldContext: 'Break-even analysis and optimization'
    });

    // Problem 7: Work Rate Problem
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Work Rate Problem',
        problem: 'Person A completes a job in 6 hours, Person B in 4 hours. How long together?',
        parameters: { 
            scenario: 'Person A completes a job in 6 hours, Person B in 4 hours. How long together?',
            equation: '1/6 + 1/4 = 1/t'
        },
        type: 'work_rate_rational',
        context: { difficulty: 'intermediate', topic: 'Work Rate Applications' },
        subparts: [
            'Given: Person A: 6 hours, Person B: 4 hours',
            'Rate A: 1/6 jobs per hour',
            'Rate B: 1/4 jobs per hour',
            'Combined rate: 1/6 + 1/4 = 1/t',
            'Find LCD: 12',
            '2/12 + 3/12 = 1/t',
            '5/12 = 1/t',
            't = 12/5 = 2.4 hours',
            'Answer: 2.4 hours or 2 hours 24 minutes'
        ],
        helper: 'Rate = 1/time; combined rate = sum of individual rates',
        solution: '2.4 hours',
        realWorldContext: 'Combined work and productivity problems'
    });

    // Problem 8: Rational Function Analysis
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Function Analysis',
        problem: 'Analyze: f(x) = (2x-4)/(x²-1)',
        parameters: { 
            expression: '(2x-4)/(x²-1)',
            numerator: '2x-4',
            denominator: 'x²-1'
        },
        type: 'rational_function_analysis',
        context: { difficulty: 'advanced', topic: 'Rational Function Analysis' },
        subparts: [
            'Given: f(x) = (2x-4)/(x²-1)',
            'Factor: f(x) = 2(x-2)/[(x+1)(x-1)]',
            'Domain: x ≠ -1, x ≠ 1',
            'Vertical asymptotes: x = -1, x = 1',
            'X-intercept: 2x - 4 = 0 → x = 2',
            'Y-intercept: f(0) = -4/(-1) = 4',
            'Horizontal asymptote: y = 0 (deg num < deg den)',
            'No holes (no common factors)',
            'End behavior: approaches 0 as x → ±∞'
        ],
        helper: 'Find domain, asymptotes, intercepts, and holes',
        solution: 'VA: x = ±1, HA: y = 0, x-int: 2, y-int: 4',
        realWorldContext: 'Cost analysis and population models'
    });

    // Problem 9: Proportion Problem
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Solving Proportion',
        problem: 'Solve: x/5 = 12/20',
        parameters: { 
            a: 'x', 
            b: '5', 
            c: '12', 
            d: '20',
            proportion: 'x/5 = 12/20'
        },
        type: 'proportions',
        context: { difficulty: 'beginner', topic: 'Proportions' },
        subparts: [
            'Given: x/5 = 12/20',
            'Cross multiply: x × 20 = 5 × 12',
            '20x = 60',
            'Divide by 20: x = 3',
            'Check: 3/5 = 0.6 and 12/20 = 0.6 ✓',
            'Solution: x = 3'
        ],
        helper: 'Cross multiply: ad = bc',
        solution: 'x = 3',
        realWorldContext: 'Scale models and recipe conversions'
    });

    // Problem 10: Variation Problem
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inverse Variation',
        problem: 'If y = 12 when x = 3, find y when x = 4 (inverse variation)',
        parameters: { 
            variationType: 'inverse',
            scenario: 'If y = 12 when x = 3, find y when x = 4',
            givenValues: { y1: 12, x1: 3, x2: 4 }
        },
        type: 'variation_problems',
        context: { difficulty: 'intermediate', topic: 'Variation Problems' },
        subparts: [
            'Given: y varies inversely as x',
            'Formula: y = k/x or xy = k',
            'Find k: 12(3) = k → k = 36',
            'Equation: y = 36/x',
            'When x = 4: y = 36/4 = 9',
            'Check: 12 × 3 = 36 and 9 × 4 = 36 ✓',
            'Solution: y = 9'
        ],
        helper: 'For inverse variation: xy = k (constant)',
        solution: 'y = 9',
        realWorldContext: 'Pressure-volume relationships and inverse square laws'
    });

    // Problem 11: Rational Exponents
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Simplifying Rational Exponents',
        problem: 'Simplify: 16^(3/4)',
        parameters: { 
            base: '16', 
            exponent: '3/4',
            expression: '16^(3/4)'
        },
        type: 'rational_exponents',
        context: { difficulty: 'intermediate', topic: 'Rational Exponents' },
        subparts: [
            'Given: 16^(3/4)',
            'Interpretation: 16^(3/4) = ⁴√(16³)',
            'Method 1 - Root first:',
            '⁴√16 = 2',
            '2³ = 8',
            'Method 2 - Power first:',
            '16³ = 4096',
            '⁴√4096 = 8',
            'Both methods give: 8'
        ],
        helper: 'x^(m/n) = ⁿ√(x^m) = (ⁿ√x)^m',
        solution: '8',
        realWorldContext: 'Growth models and scaling relationships'
    });

    // Problem 12: Solving for Variable
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solving Formula for Variable',
        problem: 'Solve for R₁: 1/R = 1/R₁ + 1/R₂',
        parameters: { 
            formula: '1/R = 1/R₁ + 1/R₂',
            targetVariable: 'R₁',
            equation: '1/R = 1/R₁ + 1/R₂'
        },
        type: 'solve_formula_rational',
        context: { difficulty: 'intermediate', topic: 'Solving Formulas' },
        subparts: [
            'Given: 1/R = 1/R₁ + 1/R₂',
            'Isolate 1/R₁: 1/R₁ = 1/R - 1/R₂',
            'Common denominator: 1/R₁ = (R₂ - R)/(R·R₂)',
            'Take reciprocal: R₁ = (R·R₂)/(R₂ - R)',
            'Alternative form: R₁ = (R·R₂)/(R₂ - R)',
            'Domain: R ≠ 0, R₂ ≠ 0, R₂ ≠ R'
        ],
        helper: 'Isolate the term with target variable, then take reciprocal',
        solution: 'R₁ = (R·R₂)/(R₂ - R)',
        realWorldContext: 'Physics formulas and electrical circuits'
    });

    return relatedProblems;
}


// ============== VECTOR BASICS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedVectorBasics() {
    const relatedProblems = [];

    // Problem 1: Vector Representation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vector Representation',
        problem: 'Express the vector from point A(1, 2) to point B(4, 6) in component form',
        parameters: {
            vectors: [[1, 2], [4, 6]],
            operation: 'vector representation'
        },
        type: 'distance_points',
        context: { difficulty: 'beginner', topic: 'Vector Basics' },
        subparts: [
            'Given: Point A(1, 2) and Point B(4, 6)',
            'Vector AB = B - A',
            'AB = ⟨4-1, 6-2⟩',
            'AB = ⟨3, 4⟩',
            'Component form: AB = 3î + 4ĵ',
            'Magnitude: ||AB|| = √(3² + 4²) = √25 = 5'
        ],
        helper: 'Subtract initial point from terminal point',
        solution: 'AB = ⟨3, 4⟩, magnitude = 5',
        realWorldContext: 'Displacement between two positions'
    });

    // Problem 2: Vector Magnitude
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vector Magnitude Calculation',
        problem: 'Find the magnitude of vector v = ⟨3, -4, 12⟩',
        parameters: {
            vectors: [[3, -4, 12]],
            operation: 'magnitude calculation'
        },
        type: 'vector_magnitude',
        context: { difficulty: 'beginner', topic: 'Vector Magnitude' },
        subparts: [
            'Given: v = ⟨3, -4, 12⟩',
            'Magnitude formula: ||v|| = √(x² + y² + z²)',
            'Square each component:',
            '3² = 9',
            '(-4)² = 16',
            '12² = 144',
            'Sum: 9 + 16 + 144 = 169',
            'Take square root: ||v|| = √169 = 13',
            'Check: magnitude is non-negative ✓'
        ],
        helper: 'Use Pythagorean theorem in 3D: √(x² + y² + z²)',
        solution: '||v|| = 13',
        realWorldContext: 'Finding speed from velocity components'
    });

    // Problem 3: Unit Vector
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Unit Vector Calculation',
        problem: 'Find the unit vector in the direction of v = ⟨6, -8⟩',
        parameters: {
            vectors: [[6, -8]],
            operation: 'unit vector'
        },
        type: 'unit_vector',
        context: { difficulty: 'beginner', topic: 'Unit Vectors' },
        subparts: [
            'Given: v = ⟨6, -8⟩',
            'Step 1: Calculate magnitude',
            '||v|| = √(6² + (-8)²) = √(36 + 64) = √100 = 10',
            'Step 2: Divide each component by magnitude',
            'û = v/||v|| = ⟨6/10, -8/10⟩',
            'û = ⟨0.6, -0.8⟩ or ⟨3/5, -4/5⟩',
            'Verify: ||û|| = √(0.6² + 0.8²) = √(0.36 + 0.64) = 1 ✓'
        ],
        helper: 'Unit vector = vector / magnitude',
        solution: 'û = ⟨0.6, -0.8⟩',
        realWorldContext: 'Finding direction without regard to magnitude'
    });

    // Problem 4: Zero Vector
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Zero Vector Properties',
        problem: 'Show that v = ⟨0, 0, 0⟩ is the zero vector and find its magnitude',
        parameters: {
            vectors: [[0, 0, 0]],
            operation: 'zero vector analysis'
        },
        type: 'vector_magnitude',
        context: { difficulty: 'beginner', topic: 'Zero Vector' },
        subparts: [
            'Given: v = ⟨0, 0, 0⟩',
            'This is the zero vector (additive identity)',
            'Magnitude: ||v|| = √(0² + 0² + 0²) = 0',
            'Properties:',
            '• v + 0 = v for any vector v',
            '• ||0|| = 0',
            '• 0 has no specific direction',
            '• Cannot normalize zero vector'
        ],
        helper: 'Zero vector has zero magnitude and no direction',
        solution: '||0|| = 0',
        realWorldContext: 'Reference point or no displacement'
    });

    // Problem 5: Position Vector
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Position Vector',
        problem: 'Find the position vector of point P(5, -3, 2)',
        parameters: {
            vectors: [[5, -3, 2]],
            operation: 'position vector'
        },
        type: 'vector_magnitude',
        context: { difficulty: 'beginner', topic: 'Position Vectors' },
        subparts: [
            'Given: Point P(5, -3, 2)',
            'Position vector from origin O(0,0,0) to P',
            'OP = P - O = ⟨5-0, -3-0, 2-0⟩',
            'OP = ⟨5, -3, 2⟩',
            'This is the position vector',
            'Magnitude: ||OP|| = √(25 + 9 + 4) = √38',
            'Distance from origin to P is √38'
        ],
        helper: 'Position vector goes from origin to the point',
        solution: 'OP = ⟨5, -3, 2⟩',
        realWorldContext: 'Locating a point in space from origin'
    });

    // Problem 6: Vector Equality
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vector Equality',
        problem: 'Determine if u = ⟨2, -1, 3⟩ equals v = ⟨2, -1, 3⟩',
        parameters: {
            vectors: [[2, -1, 3], [2, -1, 3]],
            operation: 'vector equality'
        },
        type: 'vector_subtraction',
        context: { difficulty: 'beginner', topic: 'Vector Equality' },
        subparts: [
            'Given: u = ⟨2, -1, 3⟩ and v = ⟨2, -1, 3⟩',
            'Vectors are equal if all components are equal',
            'Check x-components: 2 = 2 ✓',
            'Check y-components: -1 = -1 ✓',
            'Check z-components: 3 = 3 ✓',
            'Therefore: u = v',
            'Also: u - v = ⟨0, 0, 0⟩ = 0'
        ],
        helper: 'Compare corresponding components',
        solution: 'u = v (vectors are equal)',
        realWorldContext: 'Verifying identical vectors'
    });

    // Problem 7: Standard Basis Vectors
    /**relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Standard Basis Vectors',
        problem: 'Express v = ⟨4, -2, 7⟩ using standard basis vectors î, ĵ, k̂',
        parameters: {
            vectors: [[4, -2, 7]],
            operation: 'basis representation'
        },
        type: 'linear_combination',
        context: { difficulty: 'intermediate', topic: 'Basis Vectors' },
        subparts: [
            'Given: v = ⟨4, -2, 7⟩',
            'Standard basis vectors:',
            'î = ⟨1, 0, 0⟩ (x-direction)',
            'ĵ = ⟨0, 1, 0⟩ (y-direction)',
            'k̂ = ⟨0, 0, 1⟩ (z-direction)',
            'Express v as linear combination:',
            'v = 4î + (-2)ĵ + 7k̂',
            'v = 4î - 2ĵ + 7k̂',
            'This is equivalent to ⟨4, -2, 7⟩'
        ],
        helper: 'Use î, ĵ, k̂ with component coefficients',
        solution: 'v = 4î - 2ĵ + 7k̂',
        realWorldContext: 'Decomposing into coordinate directions'
    });
    */

    return relatedProblems;
}

// ============== VECTOR OPERATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedVectorOperations() {
    const relatedProblems = [];

    // Problem 1: Vector Addition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vector Addition',
        problem: 'Add vectors u = ⟨3, 1⟩ and v = ⟨-1, 4⟩',
        parameters: {
            vectors: [[3, 1], [-1, 4]],
            operation: 'vector addition'
        },
        type: 'vector_addition',
        context: { difficulty: 'beginner', topic: 'Vector Addition' },
        subparts: [
            'Given: u = ⟨3, 1⟩ and v = ⟨-1, 4⟩',
            'Add component-wise:',
            'u + v = ⟨3 + (-1), 1 + 4⟩',
            'u + v = ⟨2, 5⟩',
            'Magnitude: ||u + v|| = √(4 + 25) = √29',
            'Check: commutative property u + v = v + u ✓',
            'Geometric: place v tail at u head'
        ],
        helper: 'Add corresponding components',
        solution: 'u + v = ⟨2, 5⟩',
        realWorldContext: 'Combined displacement or net force'
    });

    // Problem 2: Vector Subtraction
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vector Subtraction',
        problem: 'Subtract: u = ⟨5, 3, -2⟩ minus v = ⟨2, -1, 4⟩',
        parameters: {
            vectors: [[5, 3, -2], [2, -1, 4]],
            operation: 'vector subtraction'
        },
        type: 'vector_subtraction',
        context: { difficulty: 'beginner', topic: 'Vector Subtraction' },
        subparts: [
            'Given: u = ⟨5, 3, -2⟩ and v = ⟨2, -1, 4⟩',
            'Subtract component-wise:',
            'u - v = ⟨5-2, 3-(-1), -2-4⟩',
            'u - v = ⟨3, 4, -6⟩',
            'Magnitude: ||u - v|| = √(9 + 16 + 36) = √61',
            'Geometric: vector from v to u',
            'Alternative: u + (-v)'
        ],
        helper: 'Subtract corresponding components',
        solution: 'u - v = ⟨3, 4, -6⟩',
        realWorldContext: 'Relative position or velocity'
    });

    // Problem 3: Scalar Multiplication
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Scalar Multiplication',
        problem: 'Multiply vector v = ⟨2, -3, 1⟩ by scalar k = 3',
        parameters: {
            vectors: [[2, -3, 1]],
            scalar: 3,
            operation: 'scalar multiplication'
        },
        type: 'scalar_multiplication',
        context: { difficulty: 'beginner', topic: 'Scalar Multiplication' },
        subparts: [
            'Given: v = ⟨2, -3, 1⟩ and k = 3',
            'Multiply each component by scalar:',
            'kv = 3⟨2, -3, 1⟩',
            'kv = ⟨3(2), 3(-3), 3(1)⟩',
            'kv = ⟨6, -9, 3⟩',
            'Original magnitude: ||v|| = √14',
            'New magnitude: ||kv|| = 3√14',
            'Direction preserved (k > 0)'
        ],
        helper: 'Multiply each component by the scalar',
        solution: '3v = ⟨6, -9, 3⟩',
        realWorldContext: 'Scaling forces or velocities'
    });

    // Problem 4: Negative Vector
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Negative Vector',
        problem: 'Find the negative of v = ⟨4, -5, 2⟩',
        parameters: {
            vectors: [[4, -5, 2]],
            scalar: -1,
            operation: 'negative vector'
        },
        type: 'scalar_multiplication',
        context: { difficulty: 'beginner', topic: 'Vector Negation' },
        subparts: [
            'Given: v = ⟨4, -5, 2⟩',
            'Negative vector: -v = (-1)v',
            '-v = ⟨-4, 5, -2⟩',
            'Properties:',
            '• Same magnitude: ||-v|| = ||v||',
            '• Opposite direction',
            '• v + (-v) = 0',
            'Check: ⟨4, -5, 2⟩ + ⟨-4, 5, -2⟩ = ⟨0, 0, 0⟩ ✓'
        ],
        helper: 'Multiply by -1 or change all signs',
        solution: '-v = ⟨-4, 5, -2⟩',
        realWorldContext: 'Opposite direction (e.g., reverse force)'
    });

    // Problem 5: Linear Combination
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Linear Combination',
        problem: 'Find 2u - 3v where u = ⟨1, 2, 0⟩ and v = ⟨-1, 1, 2⟩',
        parameters: {
            vectors: [[1, 2, 0], [-1, 1, 2]],
            coefficients: [2, -3],
            operation: 'linear combination'
        },
        type: 'linear_combination',
        context: { difficulty: 'intermediate', topic: 'Linear Combinations' },
        subparts: [
            'Given: u = ⟨1, 2, 0⟩ and v = ⟨-1, 1, 2⟩',
            'Calculate 2u - 3v',
            'Step 1: Calculate 2u',
            '2u = 2⟨1, 2, 0⟩ = ⟨2, 4, 0⟩',
            'Step 2: Calculate 3v',
            '3v = 3⟨-1, 1, 2⟩ = ⟨-3, 3, 6⟩',
            'Step 3: Subtract',
            '2u - 3v = ⟨2, 4, 0⟩ - ⟨-3, 3, 6⟩',
            '2u - 3v = ⟨2-(-3), 4-3, 0-6⟩',
            '2u - 3v = ⟨5, 1, -6⟩'
        ],
        helper: 'Scale each vector, then combine',
        solution: '2u - 3v = ⟨5, 1, -6⟩',
        realWorldContext: 'Combining multiple forces or velocities'
    });

    // Problem 6: Parallel Vectors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallel Vectors Test',
        problem: 'Determine if u = ⟨2, -4, 6⟩ is parallel to v = ⟨-1, 2, -3⟩',
        parameters: {
            vectors: [[2, -4, 6], [-1, 2, -3]],
            operation: 'parallel test'
        },
        type: 'parallel_test',
        context: { difficulty: 'intermediate', topic: 'Parallel Vectors' },
        subparts: [
            'Given: u = ⟨2, -4, 6⟩ and v = ⟨-1, 2, -3⟩',
            'Vectors parallel if u = kv for some scalar k',
            'Check: 2 = k(-1) → k = -2',
            'Verify: -4 = k(2) = -2(2) = -4 ✓',
            'Verify: 6 = k(-3) = -2(-3) = 6 ✓',
            'Therefore: u = -2v',
            'Vectors are parallel (opposite direction)',
            'Cross product check: u × v = 0'
        ],
        helper: 'Check if one is scalar multiple of other',
        solution: 'Parallel: u = -2v',
        realWorldContext: 'Same line of action (forces, motion)'
    });

    // Problem 7: Resultant Force
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resultant Force',
        problem: 'Find resultant of F₁ = ⟨3, 4⟩ N and F₂ = ⟨-1, 2⟩ N',
        parameters: {
            vectors: [[3, 4], [-1, 2]],
            operation: 'resultant calculation'
        },
        type: 'vector_addition',
        context: { difficulty: 'intermediate', topic: 'Resultant Vectors' },
        subparts: [
            'Given: F₁ = ⟨3, 4⟩ N and F₂ = ⟨-1, 2⟩ N',
            'Resultant R = F₁ + F₂',
            'R = ⟨3 + (-1), 4 + 2⟩',
            'R = ⟨2, 6⟩ N',
            'Magnitude: ||R|| = √(4 + 36) = √40 = 2√10 N',
            '||R|| ≈ 6.32 N',
            'Direction: tan θ = 6/2 = 3',
            'θ = arctan(3) ≈ 71.6° from x-axis'
        ],
        helper: 'Add force vectors to find net force',
        solution: 'R = ⟨2, 6⟩ N, magnitude ≈ 6.32 N',
        realWorldContext: 'Net force in physics problems'
    });

    return relatedProblems;
}

// ============== DOT PRODUCT - RELATED PROBLEMS GENERATOR ==============

function generateRelatedDotProduct() {
    const relatedProblems = [];

    // Problem 1: Basic Dot Product
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Dot Product',
        problem: 'Calculate u · v where u = ⟨2, 3⟩ and v = ⟨4, -1⟩',
        parameters: {
            vectors: [[2, 3], [4, -1]],
            operation: 'dot product'
        },
        type: 'dot_product',
        context: { difficulty: 'beginner', topic: 'Dot Product' },
        subparts: [
            'Given: u = ⟨2, 3⟩ and v = ⟨4, -1⟩',
            'Dot product formula: u · v = u₁v₁ + u₂v₂',
            'u · v = (2)(4) + (3)(-1)',
            'u · v = 8 + (-3)',
            'u · v = 5',
            'Result is a scalar (number)',
            'Geometric: measures alignment'
        ],
        helper: 'Multiply corresponding components and sum',
        solution: 'u · v = 5',
        realWorldContext: 'Component in a direction'
    });

    // Problem 2: Dot Product in 3D
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Dot Product in 3D',
        problem: 'Find u · v where u = ⟨1, -2, 3⟩ and v = ⟨4, 0, -1⟩',
        parameters: {
            vectors: [[1, -2, 3], [4, 0, -1]],
            operation: 'dot product 3d'
        },
        type: 'dot_product',
        context: { difficulty: 'beginner', topic: 'Dot Product 3D' },
        subparts: [
            'Given: u = ⟨1, -2, 3⟩ and v = ⟨4, 0, -1⟩',
            'Formula: u · v = u₁v₁ + u₂v₂ + u₃v₃',
            'u · v = (1)(4) + (-2)(0) + (3)(-1)',
            'u · v = 4 + 0 + (-3)',
            'u · v = 1',
            'Positive result: vectors form acute angle',
            'Check: commutative v · u = 1 ✓'
        ],
        helper: 'Extend to three dimensions',
        solution: 'u · v = 1',
        realWorldContext: 'Work done by a force'
    });

    // Problem 3: Angle Between Vectors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Angle Between Vectors',
        problem: 'Find angle between u = ⟨1, 2⟩ and v = ⟨3, 1⟩',
        parameters: {
            vectors: [[1, 2], [3, 1]],
            operation: 'angle calculation'
        },
        type: 'vector_angle',
        context: { difficulty: 'intermediate', topic: 'Vector Angles' },
        subparts: [
            'Given: u = ⟨1, 2⟩ and v = ⟨3, 1⟩',
            'Formula: cos θ = (u · v)/(||u|| ||v||)',
            'Step 1: u · v = (1)(3) + (2)(1) = 5',
            'Step 2: ||u|| = √(1 + 4) = √5',
            'Step 3: ||v|| = √(9 + 1) = √10',
            'Step 4: cos θ = 5/(√5 × √10) = 5/√50',
            'cos θ = 5/(5√2) = 1/√2',
            'θ = arccos(1/√2) = 45° or π/4 radians'
        ],
        helper: 'Use cos θ = (u · v)/(||u|| ||v||)',
        solution: 'θ = 45°',
        realWorldContext: 'Finding direction between vectors'
    });

    // Problem 4: Orthogonal Vectors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Orthogonal Test',
        problem: 'Are u = ⟨2, -3, 1⟩ and v = ⟨3, 2, 0⟩ orthogonal?',
        parameters: {
            vectors: [[2, -3, 1], [3, 2, 0]],
            operation: 'orthogonality test'
        },
        type: 'orthogonal_test',
        context: { difficulty: 'intermediate', topic: 'Orthogonal Vectors' },
        subparts: [
            'Given: u = ⟨2, -3, 1⟩ and v = ⟨3, 2, 0⟩',
            'Vectors orthogonal if u · v = 0',
            'Calculate: u · v = (2)(3) + (-3)(2) + (1)(0)',
            'u · v = 6 - 6 + 0',
            'u · v = 0',
            'Therefore: vectors are orthogonal',
            'Geometric: perpendicular (90° angle)',
            'Forms right angle'
        ],
        helper: 'Check if dot product equals zero',
        solution: 'Yes, orthogonal (u · v = 0)',
        realWorldContext: 'Perpendicular forces or directions'
    });

    // Problem 5: Vector Projection
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Vector Projection',
        problem: 'Project u = ⟨3, 4⟩ onto v = ⟨1, 0⟩',
        parameters: {
            vectors: [[3, 4], [1, 0]],
            operation: 'projection'
        },
        type: 'vector_projection',
        context: { difficulty: 'intermediate', topic: 'Vector Projection' },
        subparts: [
            'Given: u = ⟨3, 4⟩ and v = ⟨1, 0⟩',
            'Scalar projection: comp_v u = (u · v)/||v||',
            'u · v = (3)(1) + (4)(0) = 3',
            '||v|| = √1 = 1',
            'comp_v u = 3/1 = 3',
            'Vector projection: proj_v u = ((u · v)/(v · v))v',
            'v · v = 1',
            'proj_v u = (3/1)⟨1, 0⟩ = ⟨3, 0⟩',
            'Interpretation: component of u along v'
        ],
        helper: 'proj_v u = ((u · v)/(v · v))v',
        solution: 'proj_v u = ⟨3, 0⟩',
        realWorldContext: 'Force component in a direction'
    });

    // Problem 6: Work Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Work Calculation',
        problem: 'Find work done by F = ⟨3, -2, 5⟩ N over d = ⟨2, 4, -1⟩ m',
        parameters: {
            vectors: [[3, -2, 5], [2, 4, -1]],
            operation: 'work calculation'
        },
        type: 'dot_product',
        context: { difficulty: 'intermediate', topic: 'Work and Energy' },
        subparts: [
            'Given: F = ⟨3, -2, 5⟩ N and d = ⟨2, 4, -1⟩ m',
            'Work formula: W = F · d',
            'W = (3)(2) + (-2)(4) + (5)(-1)',
            'W = 6 - 8 - 5',
            'W = -7 J (joules)',
            'Negative work: force opposes motion',
            'Energy is removed from system',
            'Unit: Newton-meter = Joule'
        ],
        helper: 'Work = force · displacement',
        solution: 'W = -7 J',
        realWorldContext: 'Energy transfer in physics'
    });

    // Problem 7: Direction Cosines
      // Problem 7: Direction Cosines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Direction Cosines',
        problem: 'Find direction cosines of v = ⟨2, -1, 2⟩',
        parameters: {
            vectors: [[2, -1, 2]],
            operation: 'direction cosines'
        },
        type: 'vector_angle',
        context: { difficulty: 'intermediate', topic: 'Direction Cosines' },
        subparts: [
            'Given: v = ⟨2, -1, 2⟩',
            'Direction cosines: cos α, cos β, cos γ',
            'Step 1: Find magnitude',
            '||v|| = √(4 + 1 + 4) = √9 = 3',
            'Step 2: Calculate cosines',
            'cos α = x/||v|| = 2/3',
            'cos β = y/||v|| = -1/3',
            'cos γ = z/||v|| = 2/3',
            'Verify: cos²α + cos²β + cos²γ = 4/9 + 1/9 + 4/9 = 1 ✓',
            'Angles: α ≈ 48.2°, β ≈ 109.5°, γ ≈ 48.2°'
        ],
        helper: 'Divide each component by magnitude',
        solution: 'cos α = 2/3, cos β = -1/3, cos γ = 2/3',
        realWorldContext: 'Angles with coordinate axes'
    });

    return relatedProblems;
}

// ============== CROSS PRODUCT - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCrossProduct() {
    const relatedProblems = [];

    // Problem 1: Basic Cross Product
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Cross Product',
        problem: 'Calculate u × v where u = ⟨1, 0, 0⟩ and v = ⟨0, 1, 0⟩',
        parameters: {
            vectors: [[1, 0, 0], [0, 1, 0]],
            operation: 'cross product'
        },
        type: 'cross_product',
        context: { difficulty: 'beginner', topic: 'Cross Product' },
        subparts: [
            'Given: u = ⟨1, 0, 0⟩ (î) and v = ⟨0, 1, 0⟩ (ĵ)',
            'Cross product formula: u × v = ⟨u₂v₃-u₃v₂, u₃v₁-u₁v₃, u₁v₂-u₂v₁⟩',
            'i-component: (0)(0) - (0)(1) = 0',
            'j-component: (0)(0) - (1)(0) = 0',
            'k-component: (1)(1) - (0)(0) = 1',
            'u × v = ⟨0, 0, 1⟩ = k̂',
            'Result perpendicular to both u and v',
            'Right-hand rule: î × ĵ = k̂ ✓'
        ],
        helper: 'Use determinant method or component formula',
        solution: 'u × v = ⟨0, 0, 1⟩',
        realWorldContext: 'Finding perpendicular direction'
    });

    // Problem 2: Cross Product Calculation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cross Product Calculation',
        problem: 'Find u × v where u = ⟨2, 1, -1⟩ and v = ⟨1, 3, 2⟩',
        parameters: {
            vectors: [[2, 1, -1], [1, 3, 2]],
            operation: 'cross product calculation'
        },
        type: 'cross_product',
        context: { difficulty: 'intermediate', topic: 'Cross Product Computation' },
        subparts: [
            'Given: u = ⟨2, 1, -1⟩ and v = ⟨1, 3, 2⟩',
            'Set up determinant:',
            '| î   ĵ   k̂ |',
            '| 2   1  -1 |',
            '| 1   3   2 |',
            'i-component: (1)(2) - (-1)(3) = 2 + 3 = 5',
            'j-component: -[(2)(2) - (-1)(1)] = -(4 + 1) = -5',
            'k-component: (2)(3) - (1)(1) = 6 - 1 = 5',
            'u × v = ⟨5, -5, 5⟩',
            'Magnitude: ||u × v|| = √(25 + 25 + 25) = 5√3'
        ],
        helper: 'Remember negative sign for j-component',
        solution: 'u × v = ⟨5, -5, 5⟩',
        realWorldContext: 'Normal to a plane'
    });

    // Problem 3: Parallelogram Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallelogram Area',
        problem: 'Find area of parallelogram with sides u = ⟨3, 0, 1⟩ and v = ⟨1, 2, 0⟩',
        parameters: {
            vectors: [[3, 0, 1], [1, 2, 0]],
            operation: 'parallelogram area'
        },
        type: 'parallelogram_area',
        context: { difficulty: 'intermediate', topic: 'Area Calculations' },
        subparts: [
            'Given: u = ⟨3, 0, 1⟩ and v = ⟨1, 2, 0⟩',
            'Area formula: A = ||u × v||',
            'Calculate cross product:',
            'i: (0)(0) - (1)(2) = -2',
            'j: -[(3)(0) - (1)(1)] = 1',
            'k: (3)(2) - (0)(1) = 6',
            'u × v = ⟨-2, 1, 6⟩',
            'Magnitude: ||u × v|| = √(4 + 1 + 36) = √41',
            'Area = √41 ≈ 6.40 square units'
        ],
        helper: 'Area equals magnitude of cross product',
        solution: 'Area = √41 ≈ 6.40',
        realWorldContext: 'Finding areas in 3D space'
    });

    // Problem 4: Triangle Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangle Area',
        problem: 'Find area of triangle with vertices A(1,0,0), B(0,2,0), C(0,0,3)',
        parameters: {
            vectors: [[1, 0, 0], [0, 2, 0], [0, 0, 3]],
            operation: 'triangle area'
        },
        type: 'triangle_area',
        context: { difficulty: 'intermediate', topic: 'Triangle Area' },
        subparts: [
            'Given: A(1,0,0), B(0,2,0), C(0,0,3)',
            'Form vectors: AB = B - A = ⟨-1, 2, 0⟩',
            'AC = C - A = ⟨-1, 0, 3⟩',
            'Area = ½||AB × AC||',
            'Calculate AB × AC:',
            'i: (2)(3) - (0)(0) = 6',
            'j: -[(-1)(3) - (0)(-1)] = 3',
            'k: (-1)(0) - (2)(-1) = 2',
            'AB × AC = ⟨6, 3, 2⟩',
            '||AB × AC|| = √(36 + 9 + 4) = 7',
            'Area = ½(7) = 3.5 square units'
        ],
        helper: 'Triangle area is half parallelogram area',
        solution: 'Area = 3.5 square units',
        realWorldContext: 'Computing triangular regions'
    });

    // Problem 5: Torque Calculation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Torque Calculation',
        problem: 'Find torque when F = ⟨0, 3, -2⟩ N acts at r = ⟨1, 1, 0⟩ m',
        parameters: {
            vectors: [[1, 1, 0], [0, 3, -2]],
            operation: 'torque calculation'
        },
        type: 'cross_product',
        context: { difficulty: 'intermediate', topic: 'Torque' },
        subparts: [
            'Given: r = ⟨1, 1, 0⟩ m and F = ⟨0, 3, -2⟩ N',
            'Torque formula: τ = r × F',
            'Calculate r × F:',
            'i: (1)(-2) - (0)(3) = -2',
            'j: -[(1)(-2) - (0)(1)] = 2',
            'k: (1)(3) - (1)(0) = 3',
            'τ = ⟨-2, 2, 3⟩ N·m',
            'Magnitude: ||τ|| = √(4 + 4 + 9) = √17 N·m',
            '||τ|| ≈ 4.12 N·m',
            'Direction: perpendicular to both r and F'
        ],
        helper: 'Torque = position × force',
        solution: 'τ = ⟨-2, 2, 3⟩ N·m',
        realWorldContext: 'Rotational force in mechanics'
    });

    // Problem 6: Perpendicularity Verification
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Perpendicularity Verification',
        problem: 'Verify that u × v is perpendicular to both u and v for u = ⟨1, 2, 3⟩, v = ⟨-1, 0, 2⟩',
        parameters: {
            vectors: [[1, 2, 3], [-1, 0, 2]],
            operation: 'perpendicularity check'
        },
        type: 'cross_product',
        context: { difficulty: 'intermediate', topic: 'Cross Product Properties' },
        subparts: [
            'Given: u = ⟨1, 2, 3⟩ and v = ⟨-1, 0, 2⟩',
            'Calculate u × v:',
            'i: (2)(2) - (3)(0) = 4',
            'j: -[(1)(2) - (3)(-1)] = -5',
            'k: (1)(0) - (2)(-1) = 2',
            'u × v = ⟨4, -5, 2⟩',
            'Verify perpendicularity:',
            '(u × v) · u = (4)(1) + (-5)(2) + (2)(3) = 4 - 10 + 6 = 0 ✓',
            '(u × v) · v = (4)(-1) + (-5)(0) + (2)(2) = -4 + 4 = 0 ✓',
            'Result is perpendicular to both vectors'
        ],
        helper: 'Check dot products equal zero',
        solution: 'u × v = ⟨4, -5, 2⟩, perpendicular verified',
        realWorldContext: 'Confirming perpendicular directions'
    });

    // Problem 7: Triple Scalar Product
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triple Scalar Product',
        problem: 'Calculate u · (v × w) for u = ⟨1, 0, 2⟩, v = ⟨2, 1, 0⟩, w = ⟨1, 2, 3⟩',
        parameters: {
            vectors: [[1, 0, 2], [2, 1, 0], [1, 2, 3]],
            operation: 'triple scalar product'
        },
        type: 'triple_scalar',
        context: { difficulty: 'advanced', topic: 'Triple Products' },
        subparts: [
            'Given: u = ⟨1, 0, 2⟩, v = ⟨2, 1, 0⟩, w = ⟨1, 2, 3⟩',
            'Triple scalar product: u · (v × w)',
            'Step 1: Calculate v × w',
            'i: (1)(3) - (0)(2) = 3',
            'j: -[(2)(3) - (0)(1)] = -6',
            'k: (2)(2) - (1)(1) = 3',
            'v × w = ⟨3, -6, 3⟩',
            'Step 2: Calculate u · (v × w)',
            'u · (v × w) = (1)(3) + (0)(-6) + (2)(3)',
            '= 3 + 0 + 6 = 9',
            'This equals volume of parallelepiped'
        ],
        helper: 'Calculate cross product first, then dot product',
        solution: 'u · (v × w) = 9',
        realWorldContext: 'Volume of 3D parallelpiped'
    });

    return relatedProblems;
}

// ============== VECTOR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedVectorEquations() {
    const relatedProblems = [];

    // Problem 1: Parametric Line
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Parametric Line Equation',
        problem: 'Find parametric equation of line through P(2, 1, 3) with direction v = ⟨1, -1, 2⟩',
        parameters: {
            point: [2, 1, 3],
            direction: [1, -1, 2],
            operation: 'parametric line'
        },
        type: 'parametric_line',
        context: { difficulty: 'intermediate', topic: 'Lines in Space' },
        subparts: [
            'Given: Point P(2, 1, 3) and direction v = ⟨1, -1, 2⟩',
            'Parametric form: r(t) = r₀ + tv',
            'r(t) = ⟨2, 1, 3⟩ + t⟨1, -1, 2⟩',
            'Vector form: r(t) = ⟨2+t, 1-t, 3+2t⟩',
            'Parametric equations:',
            'x = 2 + t',
            'y = 1 - t',
            'z = 3 + 2t',
            'Symmetric form: (x-2)/1 = (y-1)/(-1) = (z-3)/2'
        ],
        helper: 'r(t) = point + t(direction)',
        solution: 'r(t) = ⟨2+t, 1-t, 3+2t⟩',
        realWorldContext: 'Path of motion along straight line'
    });

    // Problem 2: Line Through Two Points
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Line Through Two Points',
        problem: 'Find equation of line through A(1, 2, 0) and B(3, -1, 4)',
        parameters: {
            point: [1, 2, 0],
            direction: [2, -3, 4],
            operation: 'line two points'
        },
        type: 'parametric_line',
        context: { difficulty: 'intermediate', topic: 'Lines Through Points' },
        subparts: [
            'Given: A(1, 2, 0) and B(3, -1, 4)',
            'Direction vector: AB = B - A',
            'AB = ⟨3-1, -1-2, 4-0⟩ = ⟨2, -3, 4⟩',
            'Use point A as r₀:',
            'r(t) = ⟨1, 2, 0⟩ + t⟨2, -3, 4⟩',
            'r(t) = ⟨1+2t, 2-3t, 4t⟩',
            'Check: t=0 gives A, t=1 gives B ✓',
            'Alternative: r(t) = (1-t)A + tB'
        ],
        helper: 'Direction = second point - first point',
        solution: 'r(t) = ⟨1+2t, 2-3t, 4t⟩',
        realWorldContext: 'Connection between two locations'
    });

    // Problem 3: Plane Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Plane Equation from Point and Normal',
        problem: 'Find equation of plane through P(1, -2, 3) with normal n = ⟨2, 1, -1⟩',
        parameters: {
            point: [1, -2, 3],
            normal: [2, 1, -1],
            operation: 'plane equation'
        },
        type: 'plane_equation',
        context: { difficulty: 'intermediate', topic: 'Planes in Space' },
        subparts: [
            'Given: P(1, -2, 3) and n = ⟨2, 1, -1⟩',
            'Plane equation: n · (r - r₀) = 0',
            'Let r = ⟨x, y, z⟩',
            'n · (r - P) = 0',
            '⟨2, 1, -1⟩ · ⟨x-1, y+2, z-3⟩ = 0',
            '2(x-1) + 1(y+2) + (-1)(z-3) = 0',
            '2x - 2 + y + 2 - z + 3 = 0',
            '2x + y - z + 3 = 0',
            'Standard form: 2x + y - z = -3'
        ],
        helper: 'Use point-normal form n · (r - r₀) = 0',
        solution: '2x + y - z = -3',
        realWorldContext: 'Flat surface in 3D'
    });

    // Problem 4: Plane Through Three Points
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Plane Through Three Points',
        problem: 'Find plane through A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)',
        parameters: {
            point: [1, 0, 0],
            normal: [1, 1, 1],
            operation: 'plane three points'
        },
        type: 'plane_equation',
        context: { difficulty: 'intermediate', topic: 'Plane from Points' },
        subparts: [
            'Given: A(1, 0, 0), B(0, 1, 0), C(0, 0, 1)',
            'Form vectors: AB = ⟨-1, 1, 0⟩',
            'AC = ⟨-1, 0, 1⟩',
            'Normal: n = AB × AC',
            'i: (1)(1) - (0)(0) = 1',
            'j: -[(-1)(1) - (0)(-1)] = 1',
            'k: (-1)(0) - (1)(-1) = 1',
            'n = ⟨1, 1, 1⟩',
            'Using point A: 1(x-1) + 1(y-0) + 1(z-0) = 0',
            'x + y + z = 1'
        ],
        helper: 'Normal = (AB) × (AC)',
        solution: 'x + y + z = 1',
        realWorldContext: 'Plane defined by three points'
    });

    // Problem 5: Distance Point to Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Distance from Point to Line',
        problem: 'Find distance from P(2, 1, 3) to line r(t) = ⟨1, 2, 0⟩ + t⟨1, 1, 1⟩',
        parameters: {
            point: [2, 1, 3],
            linePoint: [1, 2, 0],
            lineDirection: [1, 1, 1],
            operation: 'point to line distance'
        },
        type: 'point_line_distance',
        context: { difficulty: 'advanced', topic: 'Distance Calculations' },
        subparts: [
            'Given: P(2, 1, 3), line through A(1, 2, 0) with d = ⟨1, 1, 1⟩',
            'Formula: distance = ||AP × d|| / ||d||',
            'AP = P - A = ⟨1, -1, 3⟩',
            'Calculate AP × d:',
            'i: (-1)(1) - (3)(1) = -4',
            'j: -[(1)(1) - (3)(1)] = 2',
            'k: (1)(1) - (-1)(1) = 2',
            'AP × d = ⟨-4, 2, 2⟩',
            '||AP × d|| = √(16 + 4 + 4) = √24 = 2√6',
            '||d|| = √3',
            'distance = 2√6/√3 = 2√2 ≈ 2.83'
        ],
        helper: 'Use cross product for perpendicular distance',
        solution: 'distance = 2√2 ≈ 2.83',
        realWorldContext: 'Shortest distance to a line'
    });

    // Problem 6: Distance Point to Plane
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Distance from Point to Plane',
        problem: 'Find distance from P(1, 2, 3) to plane 2x - y + 2z = 6',
        parameters: {
            point: [1, 2, 3],
            planePoint: [0, 0, 3],
            planeNormal: [2, -1, 2],
            operation: 'point to plane distance'
        },
        type: 'point_plane_distance',
        context: { difficulty: 'intermediate', topic: 'Distance to Plane' },
        subparts: [
            'Given: P(1, 2, 3) and plane 2x - y + 2z = 6',
            'Normal vector: n = ⟨2, -1, 2⟩',
            'Formula: d = |ax₁ + by₁ + cz₁ - d| / √(a² + b² + c²)',
            'd = |2(1) + (-1)(2) + 2(3) - 6| / √(4 + 1 + 4)',
            'd = |2 - 2 + 6 - 6| / √9',
            'd = |0| / 3 = 0',
            'Distance = 0',
            'Point P lies on the plane!'
        ],
        helper: 'Use point-to-plane distance formula',
        solution: 'distance = 0 (point on plane)',
        realWorldContext: 'Perpendicular distance to surface'
    });

    // Problem 7: Intersecting Lines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Line Intersection',
        problem: 'Do lines r₁(t) = ⟨1, 2, 0⟩ + t⟨1, -1, 2⟩ and r₂(s) = ⟨0, 1, 2⟩ + s⟨2, 1, 1⟩ intersect?',
        parameters: {
            line1Point: [1, 2, 0],
            line1Direction: [1, -1, 2],
            line2Point: [0, 1, 2],
            line2Direction: [2, 1, 1],
            operation: 'line intersection'
        },
        type: 'parametric_line',
        context: { difficulty: 'advanced', topic: 'Line Intersection' },
        subparts: [
            'Given: r₁(t) = ⟨1+t, 2-t, 2t⟩',
            '       r₂(s) = ⟨2s, 1+s, 2+s⟩',
            'For intersection: r₁(t) = r₂(s)',
            'x: 1 + t = 2s',
            'y: 2 - t = 1 + s',
            'z: 2t = 2 + s',
            'From x: t = 2s - 1',
            'Substitute into y: 2 - (2s-1) = 1 + s',
            '3 - 2s = 1 + s → 3s = 2 → s = 2/3',
            't = 2(2/3) - 1 = 1/3',
            'Check z: 2(1/3) = 2/3, 2 + 2/3 = 8/3 ✗',
            'Lines do not intersect (skew lines)'
        ],
        helper: 'Set equal and solve for parameters',
        solution: 'Lines do not intersect',
        realWorldContext: 'Checking if paths cross'
    });

    return relatedProblems;
}


// ============== MATRIX OPERATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedMatrixOperations() {
    const relatedProblems = [];

    // Problem 1: Simple Matrix Addition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Matrix Addition',
        problem: 'Add the matrices: A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]',
        parameters: {},
        matrices: {
            A: [[1, 2], [3, 4]],
            B: [[5, 6], [7, 8]]
        },
        type: 'matrix_addition',
        context: { difficulty: 'beginner', topic: 'Matrix Addition' },
        subparts: [
            'Given: A = [[1, 2], [3, 4]]',
            '       B = [[5, 6], [7, 8]]',
            'Step 1: Verify both matrices are 2×2',
            'Step 2: Add corresponding elements',
            'Element (1,1): 1 + 5 = 6',
            'Element (1,2): 2 + 6 = 8',
            'Element (2,1): 3 + 7 = 10',
            'Element (2,2): 4 + 8 = 12',
            'Result: [[6, 8], [10, 12]]',
            'Verification: Each element is sum of corresponding elements ✓'
        ],
        helper: 'Add corresponding elements in same positions',
        solution: '[[6, 8], [10, 12]]',
        realWorldContext: 'Combining datasets with same structure'
    });

    // Problem 2: Scalar Multiplication
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Scalar Multiplication',
        problem: 'Multiply matrix A = [[2, 4], [6, 8]] by scalar k = 3',
        parameters: { scalar: 3 },
        matrices: {
            A: [[2, 4], [6, 8]]
        },
        type: 'scalar_multiplication',
        context: { difficulty: 'beginner', topic: 'Scalar Multiplication' },
        subparts: [
            'Given: A = [[2, 4], [6, 8]], k = 3',
            'Step 1: Multiply each element by 3',
            'Element (1,1): 3 × 2 = 6',
            'Element (1,2): 3 × 4 = 12',
            'Element (2,1): 3 × 6 = 18',
            'Element (2,2): 3 × 8 = 24',
            'Result: [[6, 12], [18, 24]]',
            'Verification: Each element is 3 times original ✓'
        ],
        helper: 'Multiply every element by the scalar',
        solution: '[[6, 12], [18, 24]]',
        realWorldContext: 'Scaling transformations in graphics'
    });

    // Problem 3: Matrix Subtraction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Matrix Subtraction',
        problem: 'Subtract: A = [[9, 7], [5, 3]] - B = [[4, 2], [1, 1]]',
        parameters: {},
        matrices: {
            A: [[9, 7], [5, 3]],
            B: [[4, 2], [1, 1]],
            operation: 'subtract'
        },
        type: 'matrix_addition',
        context: { difficulty: 'beginner', topic: 'Matrix Subtraction' },
        subparts: [
            'Given: A = [[9, 7], [5, 3]]',
            '       B = [[4, 2], [1, 1]]',
            'Step 1: Verify dimensions match (2×2)',
            'Step 2: Subtract corresponding elements',
            'Element (1,1): 9 - 4 = 5',
            'Element (1,2): 7 - 2 = 5',
            'Element (2,1): 5 - 1 = 4',
            'Element (2,2): 3 - 1 = 2',
            'Result: [[5, 5], [4, 2]]',
            'Check: Add result to B should give A ✓'
        ],
        helper: 'Subtract corresponding elements element-wise',
        solution: '[[5, 5], [4, 2]]',
        realWorldContext: 'Finding differences between datasets'
    });

    // Problem 4: Matrix Multiplication (2×2)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Matrix Multiplication 2×2',
        problem: 'Multiply: A = [[1, 2], [3, 4]] × B = [[2, 0], [1, 3]]',
        parameters: {},
        matrices: {
            A: [[1, 2], [3, 4]],
            B: [[2, 0], [1, 3]]
        },
        type: 'matrix_multiplication',
        context: { difficulty: 'intermediate', topic: 'Matrix Multiplication' },
        subparts: [
            'Given: A = [[1, 2], [3, 4]]',
            '       B = [[2, 0], [1, 3]]',
            'Step 1: Check compatibility: (2×2)·(2×2) → (2×2) ✓',
            'Step 2: Compute each element as row·column',
            'Element (1,1): (1)(2) + (2)(1) = 2 + 2 = 4',
            'Element (1,2): (1)(0) + (2)(3) = 0 + 6 = 6',
            'Element (2,1): (3)(2) + (4)(1) = 6 + 4 = 10',
            'Element (2,2): (3)(0) + (4)(3) = 0 + 12 = 12',
            'Result: [[4, 6], [10, 12]]',
            'Formula: (AB)ᵢⱼ = Σₖ aᵢₖ·bₖⱼ'
        ],
        helper: 'Row of A times column of B, sum the products',
        solution: '[[4, 6], [10, 12]]',
        realWorldContext: 'Composing linear transformations'
    });

    // Problem 5: Matrix Transpose
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Matrix Transpose',
        problem: 'Find transpose of A = [[1, 2, 3], [4, 5, 6]]',
        parameters: {},
        matrices: {
            A: [[1, 2, 3], [4, 5, 6]]
        },
        type: 'matrix_transpose',
        context: { difficulty: 'beginner', topic: 'Matrix Transpose' },
        subparts: [
            'Given: A = [[1, 2, 3], [4, 5, 6]]',
            'Original dimensions: 2×3',
            'Step 1: Flip rows and columns',
            'Row 1 [1, 2, 3] becomes column 1',
            'Row 2 [4, 5, 6] becomes column 2',
            'Aᵀ = [[1, 4], [2, 5], [3, 6]]',
            'New dimensions: 3×2',
            'Formula: (Aᵀ)ᵢⱼ = aⱼᵢ',
            'Verify: (Aᵀ)ᵀ = A ✓'
        ],
        helper: 'Swap rows with columns',
        solution: '[[1, 4], [2, 5], [3, 6]]',
        realWorldContext: 'Converting row vectors to column vectors'
    });

    // Problem 6: Matrix Multiplication (Non-square)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Non-Square Matrix Multiplication',
        problem: 'Multiply: A = [[1, 2, 3], [4, 5, 6]] × B = [[1, 4], [2, 5], [3, 6]]',
        parameters: {},
        matrices: {
            A: [[1, 2, 3], [4, 5, 6]],
            B: [[1, 4], [2, 5], [3, 6]]
        },
        type: 'matrix_multiplication',
        context: { difficulty: 'intermediate', topic: 'Non-Square Matrix Multiplication' },
        subparts: [
            'Given: A is 2×3, B is 3×2',
            'Step 1: Check compatibility',
            'Columns of A (3) = Rows of B (3) ✓',
            'Result will be 2×2',
            'Step 2: Compute elements',
            '(1,1): (1)(1)+(2)(2)+(3)(3) = 1+4+9 = 14',
            '(1,2): (1)(4)+(2)(5)+(3)(6) = 4+10+18 = 32',
            '(2,1): (4)(1)+(5)(2)+(6)(3) = 4+10+18 = 32',
            '(2,2): (4)(4)+(5)(5)+(6)(6) = 16+25+36 = 77',
            'Result: [[14, 32], [32, 77]]'
        ],
        helper: 'Inner dimensions must match (m×n)·(n×p) → (m×p)',
        solution: '[[14, 32], [32, 77]]',
        realWorldContext: 'Data transformation in machine learning'
    });

    // Problem 7: Row Echelon Form
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Row Echelon Form',
        problem: 'Reduce to REF: A = [[2, 4, 6], [1, 3, 5], [0, 2, 4]]',
        parameters: {},
        matrices: {
            A: [[2, 4, 6], [1, 3, 5], [0, 2, 4]]
        },
        type: 'row_echelon',
        context: { difficulty: 'intermediate', topic: 'Row Echelon Form' },
        subparts: [
            'Given: A = [[2, 4, 6], [1, 3, 5], [0, 2, 4]]',
            'Step 1: Swap R1 and R2 for smaller pivot',
            '[[1, 3, 5], [2, 4, 6], [0, 2, 4]]',
            'Step 2: R2 - 2R1 → R2',
            '[[1, 3, 5], [0, -2, -4], [0, 2, 4]]',
            'Step 3: R3 + R2 → R3',
            '[[1, 3, 5], [0, -2, -4], [0, 0, 0]]',
            'Step 4: R2/-2 → R2',
            'REF: [[1, 3, 5], [0, 1, 2], [0, 0, 0]]',
            'Rank = 2 (two pivot positions)'
        ],
        helper: 'Create zeros below each pivot using row operations',
        solution: '[[1, 3, 5], [0, 1, 2], [0, 0, 0]]',
        realWorldContext: 'Solving systems of equations'
    });

    return relatedProblems;
}

// ============== DETERMINANTS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedDeterminants() {
    const relatedProblems = [];

    // Problem 1: 2×2 Determinant
    relatedProblems.push({
        difficulty: 'easier',
        scenario: '2×2 Determinant',
        problem: 'Find determinant: A = [[3, 8], [4, 6]]',
        parameters: {},
        matrices: {
            A: [[3, 8], [4, 6]]
        },
        type: 'determinant',
        context: { difficulty: 'beginner', topic: 'Determinant Calculation' },
        subparts: [
            'Given: A = [[3, 8], [4, 6]]',
            'Formula: det(A) = ad - bc',
            'a = 3, b = 8, c = 4, d = 6',
            'det(A) = (3)(6) - (8)(4)',
            'det(A) = 18 - 32',
            'det(A) = -14',
            'Interpretation: Matrix is invertible (det ≠ 0)',
            'Area scaling factor: |-14| = 14'
        ],
        helper: 'For 2×2: multiply diagonals, subtract',
        solution: '-14',
        realWorldContext: 'Testing if transformation is reversible'
    });

    // Problem 2: 3×3 Determinant (Cofactor Expansion)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: '3×3 Determinant',
        problem: 'Find determinant: A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]]',
        parameters: {},
        matrices: {
            A: [[1, 2, 3], [0, 4, 5], [1, 0, 6]]
        },
        type: 'determinant',
        context: { difficulty: 'intermediate', topic: '3×3 Determinant' },
        subparts: [
            'Given: A = [[1, 2, 3], [0, 4, 5], [1, 0, 6]]',
            'Expand along row 1:',
            'det(A) = 1·|4 5|  - 2·|0 5|  + 3·|0 4|',
            '           |0 6|      |1 6|      |1 0|',
            'Calculate minors:',
            'M₁₁ = (4)(6) - (5)(0) = 24',
            'M₁₂ = (0)(6) - (5)(1) = -5',
            'M₁₃ = (0)(0) - (4)(1) = -4',
            'Apply signs: det(A) = 1(24) - 2(-5) + 3(-4)',
            'det(A) = 24 + 10 - 12 = 22',
            'Matrix is invertible (det ≠ 0)'
        ],
        helper: 'Expand along row or column with most zeros',
        solution: '22',
        realWorldContext: 'Volume scaling in 3D transformations'
    });

    // Problem 3: Singular Matrix
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Singular Matrix Detection',
        problem: 'Find determinant: A = [[2, 4], [1, 2]]',
        parameters: {},
        matrices: {
            A: [[2, 4], [1, 2]]
        },
        type: 'determinant',
        context: { difficulty: 'beginner', topic: 'Singular Matrices' },
        subparts: [
            'Given: A = [[2, 4], [1, 2]]',
            'Formula: det(A) = ad - bc',
            'det(A) = (2)(2) - (4)(1)',
            'det(A) = 4 - 4 = 0',
            'Interpretation: Matrix is SINGULAR',
            'No inverse exists',
            'Rows/columns are linearly dependent',
            'Observation: Row 2 = 0.5 × Row 1',
            'Transformation collapses 2D → 1D'
        ],
        helper: 'Determinant = 0 means matrix is not invertible',
        solution: '0 (singular matrix)',
        realWorldContext: 'Detecting dependent data columns'
    });

    // Problem 4: Determinant Properties
   /** relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Determinant Properties',
        problem: 'If det(A) = 5 and det(B) = 3, find det(AB)',
        parameters: { detA: 5, detB: 3 },
        matrices: {},
        type: 'determinant',
        context: { difficulty: 'intermediate', topic: 'Determinant Properties' },
        subparts: [
            'Given: det(A) = 5, det(B) = 3',
            'Property: det(AB) = det(A) · det(B)',
            'Calculate: det(AB) = 5 × 3 = 15',
            'Other key properties:',
            '• det(Aᵀ) = det(A)',
            '• det(A⁻¹) = 1/det(A) if invertible',
            '• det(kA) = kⁿ·det(A) for n×n matrix',
            '• det(I) = 1',
            'Verification principle confirmed'
        ],
        helper: 'Use det(AB) = det(A)·det(B) property',
        solution: '15',
        realWorldContext: 'Analyzing composed transformations'
    });
    
    // Problem 5: Determinant and Invertibility
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Determinant and Invertibility',
        problem: 'For what value of k is A singular? A = [[k, 2], [3, k]]',
        parameters: {},
        matrices: {
            A: 'symbolic'
        },
        type: 'determinant',
        context: { difficulty: 'intermediate', topic: 'Parametric Determinants' },
        subparts: [
            'Given: A = [[k, 2], [3, k]]',
            'Matrix is singular when det(A) = 0',
            'det(A) = k·k - 2·3',
            'det(A) = k² - 6',
            'Set equal to 0: k² - 6 = 0',
            'k² = 6',
            'k = ±√6',
            'k ≈ ±2.449',
            'For these values, matrix has no inverse',
            'For all other k, matrix is invertible'
        ],
        helper: 'Set determinant = 0 and solve for parameter',
        solution: 'k = ±√6',
        realWorldContext: 'Finding critical parameter values'
    });

    // Problem 6: Triangular Matrix Determinant
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Triangular Matrix Determinant',
        problem: 'Find det(A): A = [[2, 0, 0], [5, 3, 0], [1, 4, -1]]',
        parameters: {},
        matrices: {
            A: [[2, 0, 0], [5, 3, 0], [1, 4, -1]]
        },
        type: 'determinant',
        context: { difficulty: 'intermediate', topic: 'Triangular Matrices' },
        subparts: [
            'Given: A = [[2, 0, 0], [5, 3, 0], [1, 4, -1]]',
            'Observation: Lower triangular matrix',
            'Property: det(triangular) = product of diagonal',
            'Diagonal elements: 2, 3, -1',
            'det(A) = 2 × 3 × (-1)',
            'det(A) = -6',
            'This rule works for both upper and lower triangular',
            'Much faster than cofactor expansion!'
        ],
        helper: 'For triangular matrices: multiply diagonal elements',
        solution: '-6',
        realWorldContext: 'Efficient computation after LU decomposition'
    });

    // Problem 7: Determinant and Linear Independence
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Linear Independence Test',
        problem: 'Are vectors linearly independent? v₁=[1,2,1], v₂=[2,1,0], v₃=[1,1,1]',
        parameters: {},
        matrices: {
            A: [[1, 2, 1], [2, 1, 1], [1, 0, 1]]
        },
        type: 'determinant',
        context: { difficulty: 'intermediate', topic: 'Linear Independence' },
        subparts: [
            'Form matrix with vectors as columns:',
            'A = [[1, 2, 1], [2, 1, 1], [1, 0, 1]]',
            'Vectors are independent ⟺ det(A) ≠ 0',
            'Calculate det(A) using cofactor expansion:',
            'det(A) = 1|1 1| - 2|2 1| + 1|2 1|',
            '          |0 1|    |1 1|    |1 0|',
            'det(A) = 1(1) - 2(1) + 1(-1)',
            'det(A) = 1 - 2 - 1 = -2',
            'Since det(A) = -2 ≠ 0',
            'Vectors ARE linearly independent ✓'
        ],
        helper: 'Form matrix, check if det ≠ 0',
        solution: 'Linearly independent (det = -2)',
        realWorldContext: 'Testing if data features are independent'
    });
    */

    return relatedProblems;
}

// ============== INVERSE MATRICES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedInverseMatrices() {
    const relatedProblems = [];

    // Problem 1: 2×2 Inverse
    relatedProblems.push({
        difficulty: 'easier',
        scenario: '2×2 Matrix Inverse',
        problem: 'Find inverse: A = [[4, 7], [2, 6]]',
        parameters: {},
        matrices: {
            A: [[4, 7], [2, 6]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'beginner', topic: 'Matrix Inverse' },
        subparts: [
            'Given: A = [[4, 7], [2, 6]]',
            'Step 1: Calculate det(A)',
            'det(A) = (4)(6) - (7)(2) = 24 - 14 = 10',
            'Since det(A) ≠ 0, inverse exists ✓',
            'Step 2: Apply 2×2 inverse formula',
            'A⁻¹ = (1/det(A)) × [[d, -b], [-c, a]]',
            'A⁻¹ = (1/10) × [[6, -7], [-2, 4]]',
            'A⁻¹ = [[0.6, -0.7], [-0.2, 0.4]]',
            'Step 3: Verify AA⁻¹ = I',
            'Multiplication confirms identity matrix ✓'
        ],
        helper: 'Swap diagonals, negate off-diagonals, divide by det',
        solution: '[[0.6, -0.7], [-0.2, 0.4]]',
        realWorldContext: 'Solving matrix equations AX = B'
    });

    // Problem 2: 3×3 Inverse (Gauss-Jordan)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: '3×3 Inverse via Gauss-Jordan',
        problem: 'Find inverse: A = [[1, 0, 1], [0, 2, 1], [1, 1, 1]]',
        parameters: {},
        matrices: {
            A: [[1, 0, 1], [0, 2, 1], [1, 1, 1]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'intermediate', topic: 'Gauss-Jordan Elimination' },
        subparts: [
            'Given: A = [[1, 0, 1], [0, 2, 1], [1, 1, 1]]',
            'Step 1: Check det(A) ≠ 0',
            'det(A) = -1 ≠ 0, inverse exists ✓',
            'Step 2: Form augmented [A|I]',
            '[[1, 0, 1 | 1, 0, 0],',
            ' [0, 2, 1 | 0, 1, 0],',
            ' [1, 1, 1 | 0, 0, 1]]',
            'Step 3: Row reduce to [I|A⁻¹]',
            'R3 - R1 → R3',
            'R3 - 0.5R2 → R3',
            'Continue reduction...',
            'Result: A⁻¹ = [[-1, -1, 2], [-1, 0, 1], [2, 1, -2]]',
            'Verify: AA⁻¹ = I ✓'
        ],
        helper: 'Augment with I, row reduce to get [I|A⁻¹]',
        solution: '[[-1, -1, 2], [-1, 0, 1], [2, 1, -2]]',
        realWorldContext: 'Systematic inverse computation'
    });

    // Problem 3: Non-Invertible Matrix
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Non-Invertible Matrix',
        problem: 'Can we invert A = [[2, 4], [1, 2]]?',
        parameters: {},
        matrices: {
            A: [[2, 4], [1, 2]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'beginner', topic: 'Singular Matrices' },
        subparts: [
            'Given: A = [[2, 4], [1, 2]]',
            'Step 1: Check determinant',
            'det(A) = (2)(2) - (4)(1)',
            'det(A) = 4 - 4 = 0',
            'Step 2: Interpret result',
            'det(A) = 0 → Matrix is SINGULAR',
            'NO INVERSE EXISTS',
            'Why? Rows are linearly dependent',
            'Row 2 = 0.5 × Row 1',
            'Geometric: Transformation collapses space',
            'Cannot be reversed'
        ],
        helper: 'Check det first - if 0, no inverse exists',
        solution: 'No inverse (singular matrix)',
        realWorldContext: 'Identifying non-reversible transformations'
    });

    // Problem 4: Inverse Properties
    /**relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inverse Properties',
        problem: 'If A⁻¹ = [[1, 2], [3, 4]], find (A⁻¹)⁻¹',
        parameters: {},
        matrices: {
            Ainv: [[1, 2], [3, 4]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'intermediate', topic: 'Inverse Properties' },
        subparts: [
            'Given: A⁻¹ = [[1, 2], [3, 4]]',
            'Property: (A⁻¹)⁻¹ = A',
            'Method 1: Apply property directly',
            '(A⁻¹)⁻¹ = A = inverse of [[1, 2], [3, 4]]',
            'Method 2: Calculate inverse of A⁻¹',
            'det(A⁻¹) = 1(4) - 2(3) = -2',
            '(A⁻¹)⁻¹ = (-1/2)[[4, -2], [-3, 1]]',
            '= [[-2, 1], [1.5, -0.5]]',
            'Key properties:',
            '• (A⁻¹)⁻¹ = A',
            '• (AB)⁻¹ = B⁻¹A⁻¹',
            '• (Aᵀ)⁻¹ = (A⁻¹)ᵀ'
        ],
        helper: 'Inverse of inverse gives original matrix',
        solution: '[[-2, 1], [1.5, -0.5]]',
        realWorldContext: 'Reversing transformations twice'
    });

    // Problem 5: Solving Systems with Inverse
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Solving Systems with Inverse',
        problem: 'Solve AX = B where A = [[2, 1], [1, 3]], B = [[5], [6]]',
        parameters: {},
        matrices: {
            A: [[2, 1], [1, 3]],
            B: [[5], [6]]
        },
        type: 'solve_system',
        context: { difficulty: 'intermediate', topic: 'Systems of Equations' },
        subparts: [
            'Given: A = [[2, 1], [1, 3]], B = [[5], [6]]',
            'System: 2x + y = 5',
            '        x + 3y = 6',
            'Step 1: Find A⁻¹',
            'det(A) = 2(3) - 1(1) = 5',
            'A⁻¹ = (1/5)[[3, -1], [-1, 2]]',
            'A⁻¹ = [[0.6, -0.2], [-0.2, 0.4]]',
            'Step 2: X = A⁻¹B',
            'X = [[0.6, -0.2], [-0.2, 0.4]] × [[5], [6]]',
            'X = [[0.6(5) - 0.2(6)], [-0.2(5) + 0.4(6)]]',
            'X = [[3 - 1.2], [-1 + 2.4]]',
            'X = [[1.8], [1.4]]',
            'Solution: x = 1.8, y = 1.4',
            'Verify: 2(1.8) + 1.4 = 5 ✓'
        ],
        helper: 'Solve AX = B using X = A⁻¹B',
        solution: 'x = 1.8, y = 1.4',
        realWorldContext: 'Solving linear systems efficiently'
    });

    // Problem 6: Inverse of Product
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Inverse of Matrix Product',
        problem: 'If A = [[2, 1], [0, 1]] and B = [[1, 2], [0, 1]], find (AB)⁻¹',
        parameters: {},
        matrices: {
            A: [[2, 1], [0, 1]],
            B: [[1, 2], [0, 1]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'intermediate', topic: 'Inverse of Products' },
        subparts: [
            'Given: A = [[2, 1], [0, 1]], B = [[1, 2], [0, 1]]',
            'Property: (AB)⁻¹ = B⁻¹A⁻¹ (reverse order!)',
            'Method 1: Use property',
            'Find A⁻¹: det(A) = 2, A⁻¹ = [[0.5, -0.5], [0, 1]]',
            'Find B⁻¹: det(B) = 1, B⁻¹ = [[1, -2], [0, 1]]',
            '(AB)⁻¹ = B⁻¹A⁻¹',
            '= [[1, -2], [0, 1]] × [[0.5, -0.5], [0, 1]]',
            '= [[0.5, -2.5], [0, 1]]',
            'Method 2: Compute AB then invert',
            'AB = [[2, 5], [0, 1]]',
            '(AB)⁻¹ = [[0.5, -2.5], [0, 1]]',
            'Both methods agree ✓'
        ],
        helper: 'Remember: (AB)⁻¹ = B⁻¹A⁻¹ (order reverses)',
        solution: '[[0.5, -2.5], [0, 1]]',
        realWorldContext: 'Reversing composed transformations'
    });

    // Problem 7: Identity and Inverse
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identity Matrix Properties',
        problem: 'Find inverse of I₂ = [[1, 0], [0, 1]]',
        parameters: {},
        matrices: {
            A: [[1, 0], [0, 1]]
        },
        type: 'matrix_inverse',
        context: { difficulty: 'beginner', topic: 'Identity Matrix' },
        subparts: [
            'Given: I₂ = [[1, 0], [0, 1]]',
            'Property: I⁻¹ = I (identity is self-inverse)',
            'Verification:',
            'det(I) = 1(1) - 0(0) = 1 ✓',
            'Apply formula: I⁻¹ = (1/1)[[1, 0], [0, 1]]',
            'I⁻¹ = [[1, 0], [0, 1]] = I',
            'Check: I × I = I ✓',
            'Key properties of identity:',
            '• AI = IA = A for any matrix A',
            '• I⁻¹ = I',
            '• det(I) = 1',
            'Identity is neutral element for multiplication'
        ],
        helper: 'Identity matrix is its own inverse',
        solution: '[[1, 0], [0, 1]]',
        realWorldContext: 'Understanding neutral transformations'
    });
    */

    return relatedProblems;
}

// ============== MATRIX TRANSFORMATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedMatrixTransformations() {
    const relatedProblems = [];

    // Problem 1: Eigenvalues of 2×2
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Eigenvalues 2×2',
        problem: 'Find eigenvalues: A = [[4, 2], [1, 3]]',
        parameters: {},
        matrices: {
            A: [[4, 2], [1, 3]]
        },
        type: 'eigenvalues',
        context: { difficulty: 'intermediate', topic: 'Eigenvalues' },
        subparts: [
            'Given: A = [[4, 2], [1, 3]]',
            'Step 1: Form characteristic equation',
            'det(A - λI) = 0',
            'det([[4-λ, 2], [1, 3-λ]]) = 0',
            '(4-λ)(3-λ) - (2)(1) = 0',
            'Step 2: Expand',
            '12 - 4λ - 3λ + λ² - 2 = 0',
            'λ² - 7λ + 10 = 0',
            'Step 3: Solve quadratic',
            '(λ - 5)(λ - 2) = 0',
            'Eigenvalues: λ₁ = 5, λ₂ = 2',
            'Properties: trace = 7 = 5 + 2 ✓',
            '           det = 10 = 5 × 2 ✓'
        ],
        helper: 'Solve det(A - λI) = 0 for λ',
        solution: 'λ₁ = 5, λ₂ = 2',
        realWorldContext: 'Finding principal directions of transformation'
    });

    // Problem 2: Matrix Rank
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Matrix Rank Calculation',
        problem: 'Find rank: A = [[1, 2, 3], [2, 4, 6], [1, 1, 2]]',
        parameters: {},
        matrices: {
            A: [[1, 2, 3], [2, 4, 6], [1, 1, 2]]
        },
        type: 'matrix_rank',
        context: { difficulty: 'intermediate', topic: 'Matrix Rank' },
        subparts: [
            'Given: A = [[1, 2, 3], [2, 4, 6], [1, 1, 2]]',
            'Method: Row reduce to echelon form',
            'Step 1: R2 - 2R1 → R2',
            '[[1, 2, 3], [0, 0, 0], [1, 1, 2]]',
            'Step 2: R3 - R1 → R3',
            '[[1, 2, 3], [0, 0, 0], [0, -1, -1]]',
            'Step 3: Swap R2 and R3',
            '[[1, 2, 3], [0, -1, -1], [0, 0, 0]]',
            'Step 4: Count pivots',
            'Two non-zero rows → rank = 2',
            'Interpretation: 2 independent rows/columns',
            'Nullity = 3 - 2 = 1',
            'Rank-Nullity Theorem confirmed ✓'
        ],
        helper: 'Row reduce and count non-zero rows (pivots)',
        solution: 'rank = 2',
        realWorldContext: 'Determining data dimensionality'
    });

    // Problem 3: LU Decomposition
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'LU Decomposition',
        problem: 'Find LU: A = [[2, 4], [1, 3]]',
        parameters: {},
        matrices: {
            A: [[2, 4], [1, 3]]
        },
        type: 'lu_decomposition',
        context: { difficulty: 'intermediate', topic: 'LU Factorization' },
        subparts: [
            'Given: A = [[2, 4], [1, 3]]',
            'Goal: Factor A = LU',
            'Step 1: Start with U = A, L = I',
            'U = [[2, 4], [1, 3]], L = [[1, 0], [0, 1]]',
            'Step 2: Eliminate below pivot',
            'Multiplier: m₂₁ = 1/2',
            'R2 - (1/2)R1 → R2',
            'U = [[2, 4], [0, 1]]',
            'L = [[1, 0], [0.5, 1]]',
            'Result: A = LU',
            'L = [[1, 0], [0.5, 1]]',
            'U = [[2, 4], [0, 1]]',
            'Verify: LU = [[2, 4], [1, 3]] = A ✓',
            'det(A) = det(L)det(U) = 1 × 2 = 2 ✓'
        ],
        helper: 'Use Gaussian elimination, track multipliers in L',
        solution: 'L = [[1, 0], [0.5, 1]], U = [[2, 4], [0, 1]]',
        realWorldContext: 'Efficient solving of multiple systems'
    });

    // Problem 4: QR Decomposition
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'QR Decomposition',
        problem: 'Find QR: A = [[1, 1], [0, 1]]',
        parameters: {},
        matrices: {
            A: [[1, 1], [0, 1]]
        },
        type: 'qr_decomposition',
        context: { difficulty: 'advanced', topic: 'QR Factorization' },
        subparts: [
            'Given: A = [[1, 1], [0, 1]]',
            'Goal: Factor A = QR (Q orthogonal, R upper triangular)',
            'Step 1: Gram-Schmidt on columns',
            'v₁ = [1, 0], ||v₁|| = 1',
            'u₁ = v₁/||v₁|| = [1, 0]',
            'v₂ = [1, 1] - ([1,1]·[1,0])[1,0]',
            'v₂ = [1, 1] - [1, 0] = [0, 1]',
            'u₂ = [0, 1]/1 = [0, 1]',
            'Step 2: Form Q and R',
            'Q = [[1, 0], [0, 1]]',
            'R = [[1, 1], [0, 1]]',
            'Verify: Q orthogonal (QᵀQ = I) ✓',
            'Verify: QR = A ✓'
        ],
        helper: 'Apply Gram-Schmidt orthogonalization',
        solution: 'Q = [[1, 0], [0, 1]], R = [[1, 1], [0, 1]]',
        realWorldContext: 'Least squares and eigenvalue algorithms'
    });

    // Problem 5: Reduced Row Echelon Form
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Reduced Row Echelon Form',
        problem: 'Find RREF: A = [[2, 4, 2], [1, 2, 1]]',
        parameters: {},
        matrices: {
            A: [[2, 4, 2], [1, 2, 1]]
        },
        type: 'reduced_row_echelon',
        context: { difficulty: 'intermediate', topic: 'RREF' },
        subparts: [
            'Given: A = [[2, 4, 2], [1, 2, 1]]',
            'Step 1: Swap rows for smaller pivot',
            '[[1, 2, 1], [2, 4, 2]]',
            'Step 2: R2 - 2R1 → R2',
            '[[1, 2, 1], [0, 0, 0]]',
            'Step 3: Already in row echelon form',
            'Step 4: Leading entry already 1',
            'Step 5: Already no entries above pivot',
            'RREF: [[1, 2, 1], [0, 0, 0]]',
            'Rank = 1 (one pivot)',
            'Free variables: x₂, x₃',
            'Solution space dimension: 2'
        ],
        helper: 'Continue row reduction until leading 1s with zeros above and below',
        solution: '[[1, 2, 1], [0, 0, 0]]',
        realWorldContext: 'Finding complete solution sets'
    });

    // Problem 6: Diagonalization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Matrix Diagonalization',
        problem: 'Can A = [[3, 1], [0, 2]] be diagonalized?',
        parameters: {},
        matrices: {
            A: [[3, 1], [0, 2]]
        },
        type: 'eigenvalues',
        context: { difficulty: 'advanced', topic: 'Diagonalization' },
        subparts: [
            'Given: A = [[3, 1], [0, 2]]',
            'Step 1: Find eigenvalues',
            'det(A - λI) = (3-λ)(2-λ) - 0 = 0',
            'λ₁ = 3, λ₂ = 2 (distinct eigenvalues)',
            'Step 2: Find eigenvectors',
            'For λ₁=3: (A-3I)v = 0',
            '[[0, 1], [0, -1]]v = 0 → v₁ = [1, 0]',
            'For λ₂=2: (A-2I)v = 0',
            '[[1, 1], [0, 0]]v = 0 → v₂ = [1, -1]',
            'Step 3: Form P and D',
            'P = [[1, 1], [0, -1]]',
            'D = [[3, 0], [0, 2]]',
            'Result: A = PDP⁻¹',
            'YES, matrix is diagonalizable ✓'
        ],
        helper: 'n distinct eigenvalues → diagonalizable',
        solution: 'Diagonalizable: D = [[3, 0], [0, 2]]',
        realWorldContext: 'Simplifying matrix powers and exponentials'
    });

    // Problem 7: Orthogonal Matrix
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Orthogonal Matrix Verification',
        problem: 'Is Q = [[0.6, 0.8], [-0.8, 0.6]] orthogonal?',
        parameters: {},
        matrices: {
            Q: [[0.6, 0.8], [-0.8, 0.6]]
        },
        type: 'matrix_transpose',
        context: { difficulty: 'intermediate', topic: 'Orthogonal Matrices' },
        subparts: [
            'Given: Q = [[0.6, 0.8], [-0.8, 0.6]]',
            'Test: Is QQᵀ = I?',
            'Step 1: Find Qᵀ',
            'Qᵀ = [[0.6, -0.8], [0.8, 0.6]]',
            'Step 2: Compute QQᵀ',
            'QQᵀ = [[0.6, 0.8], [-0.8, 0.6]] × [[0.6, -0.8], [0.8, 0.6]]',
            'Element (1,1): 0.36 + 0.64 = 1',
            'Element (1,2): -0.48 + 0.48 = 0',
            'Element (2,1): -0.48 + 0.48 = 0',
            'Element (2,2): 0.64 + 0.36 = 1',
            'QQᵀ = [[1, 0], [0, 1]] = I ✓',
            'YES, Q is orthogonal',
            'Properties: Preserves lengths and angles',
            'det(Q) = ±1 (here: 1)'
        ],
        helper: 'Check if QQᵀ = I (or QᵀQ = I)',
        solution: 'Yes, Q is orthogonal',
        realWorldContext: 'Rotation and reflection transformations'
    });

    return relatedProblems;
}


// ============== ARITHMETIC SEQUENCES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedArithmeticSequences() {
    const relatedProblems = [];

    // Problem 1: Basic Arithmetic Sequence
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Arithmetic Sequence',
        problem: 'Find the first 10 terms of the arithmetic sequence where a₁ = 3 and d = 5',
        parameters: { a1: 3, d: 5, n: 10 },
        type: 'arithmetic_sequence',
        context: { difficulty: 'beginner', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given: First term a₁ = 3, Common difference d = 5',
            'Formula: aₙ = a₁ + (n-1)d',
            'Calculate each term:',
            'a₁ = 3',
            'a₂ = 3 + 5 = 8',
            'a₃ = 3 + 2(5) = 13',
            'a₄ = 3 + 3(5) = 18',
            'Continue pattern...',
            'Sequence: 3, 8, 13, 18, 23, 28, 33, 38, 43, 48'
        ],
        helper: 'Add the common difference to each previous term',
        solution: '3, 8, 13, 18, 23, 28, 33, 38, 43, 48',
        realWorldContext: 'Salary increases with fixed annual raises'
    });

    // Problem 2: Finding nth Term
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding nth Term',
        problem: 'Find the 20th term of the arithmetic sequence: 7, 11, 15, 19, ...',
        parameters: { a1: 7, d: 4, n: 20 },
        type: 'arithmetic_nth_term',
        context: { difficulty: 'beginner', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given sequence: 7, 11, 15, 19, ...',
            'First term: a₁ = 7',
            'Common difference: d = 11 - 7 = 4',
            'Formula: aₙ = a₁ + (n-1)d',
            'For n = 20:',
            'a₂₀ = 7 + (20-1)(4)',
            'a₂₀ = 7 + 19(4)',
            'a₂₀ = 7 + 76',
            'a₂₀ = 83',
            'Answer: The 20th term is 83'
        ],
        helper: 'Use the formula aₙ = a₁ + (n-1)d',
        solution: 'a₂₀ = 83',
        realWorldContext: 'Predicting future values in linear growth'
    });

    // Problem 3: Finding Common Difference
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Common Difference',
        problem: 'In an arithmetic sequence, a₃ = 17 and a₈ = 42. Find the common difference.',
        parameters: { a1: null, d: null, n: null, a3: 17, a8: 42 },
        type: 'arithmetic_sequence',
        context: { difficulty: 'intermediate', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given: a₃ = 17 and a₈ = 42',
            'Use: aₙ = a₁ + (n-1)d',
            'For a₃: 17 = a₁ + 2d ... (1)',
            'For a₈: 42 = a₁ + 7d ... (2)',
            'Subtract (1) from (2):',
            '42 - 17 = (a₁ + 7d) - (a₁ + 2d)',
            '25 = 5d',
            'd = 5',
            'Common difference: d = 5'
        ],
        helper: 'Use two terms to create a system of equations',
        solution: 'd = 5',
        realWorldContext: 'Determining rate of change from observations'
    });

    // Problem 4: Arithmetic Series Sum
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Arithmetic Series Sum',
        problem: 'Find the sum of the first 25 terms: 2 + 5 + 8 + 11 + ...',
        parameters: { a1: 2, d: 3, n: 25 },
        type: 'arithmetic_series',
        context: { difficulty: 'intermediate', topic: 'Arithmetic Series' },
        subparts: [
            'Given: First term a₁ = 2, Common difference d = 3',
            'Number of terms: n = 25',
            'Find last term: a₂₅ = 2 + (25-1)(3) = 2 + 72 = 74',
            'Sum formula: Sₙ = n/2(a₁ + aₙ)',
            'S₂₅ = 25/2(2 + 74)',
            'S₂₅ = 25/2(76)',
            'S₂₅ = 25 × 38',
            'S₂₅ = 950',
            'The sum is 950'
        ],
        helper: 'Use Sₙ = n/2(first term + last term)',
        solution: 'S₂₅ = 950',
        realWorldContext: 'Total savings over time with regular deposits'
    });

    // Problem 5: Finding First Term
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Finding First Term',
        problem: 'The 10th term of an arithmetic sequence is 47 and d = 4. Find the first term.',
        parameters: { a1: null, d: 4, n: 10, an: 47 },
        type: 'arithmetic_sequence',
        context: { difficulty: 'intermediate', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given: a₁₀ = 47, d = 4',
            'Formula: aₙ = a₁ + (n-1)d',
            'For n = 10: 47 = a₁ + (10-1)(4)',
            '47 = a₁ + 9(4)',
            '47 = a₁ + 36',
            'a₁ = 47 - 36',
            'a₁ = 11',
            'First term: a₁ = 11'
        ],
        helper: 'Substitute known values and solve for a₁',
        solution: 'a₁ = 11',
        realWorldContext: 'Working backwards from known data'
    });

    // Problem 6: Negative Common Difference
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Negative Common Difference',
        problem: 'Find the first 8 terms where a₁ = 50 and d = -6',
        parameters: { a1: 50, d: -6, n: 8 },
        type: 'arithmetic_sequence',
        context: { difficulty: 'beginner', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given: a₁ = 50, d = -6',
            'This is a decreasing sequence',
            'Calculate terms:',
            'a₁ = 50',
            'a₂ = 50 - 6 = 44',
            'a₃ = 44 - 6 = 38',
            'a₄ = 32, a₅ = 26, a₆ = 20, a₇ = 14, a₈ = 8',
            'Sequence: 50, 44, 38, 32, 26, 20, 14, 8'
        ],
        helper: 'Negative d means the sequence decreases',
        solution: '50, 44, 38, 32, 26, 20, 14, 8',
        realWorldContext: 'Depreciation or countdown situations'
    });

    // Problem 7: Arithmetic Means
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Arithmetic Means',
        problem: 'Insert 3 arithmetic means between 5 and 25',
        parameters: { a1: 5, an: 25, totalTerms: 5 },
        type: 'arithmetic_sequence',
        context: { difficulty: 'intermediate', topic: 'Arithmetic Sequences' },
        subparts: [
            'Given: First term = 5, Last term = 25',
            'Total terms = 5 (including endpoints)',
            'Need to find 3 terms in between',
            'Find d: 25 = 5 + (5-1)d',
            '25 = 5 + 4d',
            '20 = 4d',
            'd = 5',
            'The means are: 10, 15, 20',
            'Complete sequence: 5, 10, 15, 20, 25'
        ],
        helper: 'Find d using endpoints, then calculate intermediate terms',
        solution: 'Arithmetic means: 10, 15, 20',
        realWorldContext: 'Interpolating missing data points'
    });

    // Problem 8: Sum to n Terms
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sum to n Terms',
        problem: 'Find the sum: 1 + 2 + 3 + ... + 100',
        parameters: { a1: 1, d: 1, n: 100 },
        type: 'arithmetic_series',
        context: { difficulty: 'intermediate', topic: 'Arithmetic Series' },
        subparts: [
            'This is the famous Gauss problem',
            'Given: 1 + 2 + 3 + ... + 100',
            'a₁ = 1, d = 1, n = 100, a₁₀₀ = 100',
            'Formula: Sₙ = n/2(a₁ + aₙ)',
            'S₁₀₀ = 100/2(1 + 100)',
            'S₁₀₀ = 50 × 101',
            'S₁₀₀ = 5050',
            'The sum is 5050'
        ],
        helper: 'Gauss method: pair first and last terms',
        solution: 'S₁₀₀ = 5050',
        realWorldContext: 'Classic summation problem with practical applications'
    });

    return relatedProblems;
}

// ============== GEOMETRIC SEQUENCES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedGeometricSequences() {
    const relatedProblems = [];

    // Problem 1: Basic Geometric Sequence
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Geometric Sequence',
        problem: 'Find the first 7 terms where a₁ = 2 and r = 3',
        parameters: { a1: 2, r: 3, n: 7 },
        type: 'geometric_sequence',
        context: { difficulty: 'beginner', topic: 'Geometric Sequences' },
        subparts: [
            'Given: First term a₁ = 2, Common ratio r = 3',
            'Formula: aₙ = a₁ · r^(n-1)',
            'Calculate each term:',
            'a₁ = 2',
            'a₂ = 2 × 3 = 6',
            'a₃ = 2 × 3² = 18',
            'a₄ = 2 × 3³ = 54',
            'a₅ = 162, a₆ = 486, a₇ = 1458',
            'Sequence: 2, 6, 18, 54, 162, 486, 1458'
        ],
        helper: 'Multiply each term by the common ratio',
        solution: '2, 6, 18, 54, 162, 486, 1458',
        realWorldContext: 'Exponential growth like bacterial colonies'
    });

    // Problem 2: Finding nth Term
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding nth Term',
        problem: 'Find the 8th term: 5, 10, 20, 40, ...',
        parameters: { a1: 5, r: 2, n: 8 },
        type: 'geometric_nth_term',
        context: { difficulty: 'beginner', topic: 'Geometric Sequences' },
        subparts: [
            'Given sequence: 5, 10, 20, 40, ...',
            'First term: a₁ = 5',
            'Common ratio: r = 10/5 = 2',
            'Formula: aₙ = a₁ · r^(n-1)',
            'For n = 8:',
            'a₈ = 5 · 2^(8-1)',
            'a₈ = 5 · 2⁷',
            'a₈ = 5 · 128',
            'a₈ = 640',
            'The 8th term is 640'
        ],
        helper: 'Use aₙ = a₁ · r^(n-1)',
        solution: 'a₈ = 640',
        realWorldContext: 'Compound growth calculations'
    });

    // Problem 3: Fractional Ratio
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Fractional Common Ratio',
        problem: 'Find first 6 terms where a₁ = 64 and r = 1/2',
        parameters: { a1: 64, r: 0.5, n: 6 },
        type: 'geometric_sequence',
        context: { difficulty: 'intermediate', topic: 'Geometric Sequences' },
        subparts: [
            'Given: a₁ = 64, r = 1/2',
            'This is a decreasing sequence',
            'Calculate terms:',
            'a₁ = 64',
            'a₂ = 64 × (1/2) = 32',
            'a₃ = 32 × (1/2) = 16',
            'a₄ = 8, a₅ = 4, a₆ = 2',
            'Sequence: 64, 32, 16, 8, 4, 2'
        ],
        helper: 'Fractional ratio (0 < r < 1) creates decay',
        solution: '64, 32, 16, 8, 4, 2',
        realWorldContext: 'Radioactive decay, depreciation'
    });

    // Problem 4: Finite Geometric Series
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Finite Geometric Series',
        problem: 'Find the sum: 3 + 6 + 12 + 24 + ... (8 terms)',
        parameters: { a1: 3, r: 2, n: 8 },
        type: 'geometric_series_finite',
        context: { difficulty: 'intermediate', topic: 'Geometric Series' },
        subparts: [
            'Given: a₁ = 3, r = 2, n = 8',
            'Formula: Sₙ = a₁(1 - r^n)/(1 - r)',
            'S₈ = 3(1 - 2⁸)/(1 - 2)',
            'S₈ = 3(1 - 256)/(-1)',
            'S₈ = 3(-255)/(-1)',
            'S₈ = 3 × 255',
            'S₈ = 765',
            'The sum is 765'
        ],
        helper: 'Use Sₙ = a₁(1 - r^n)/(1 - r) for r ≠ 1',
        solution: 'S₈ = 765',
        realWorldContext: 'Total compound interest calculations'
    });

    // Problem 5: Infinite Geometric Series
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Infinite Geometric Series',
        problem: 'Find the sum: 12 + 6 + 3 + 1.5 + ...',
        parameters: { a1: 12, r: 0.5 },
        type: 'geometric_series_infinite',
        context: { difficulty: 'intermediate', topic: 'Infinite Geometric Series' },
        subparts: [
            'Given: 12 + 6 + 3 + 1.5 + ...',
            'First term: a₁ = 12',
            'Common ratio: r = 6/12 = 0.5',
            'Check convergence: |r| = 0.5 < 1 ✓',
            'Series converges',
            'Formula: S∞ = a₁/(1 - r)',
            'S∞ = 12/(1 - 0.5)',
            'S∞ = 12/0.5',
            'S∞ = 24',
            'The sum is 24'
        ],
        helper: 'Check |r| < 1, then use S∞ = a₁/(1-r)',
        solution: 'S∞ = 24',
        realWorldContext: 'Present value of perpetuities'
    });

    // Problem 6: Finding Common Ratio
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Common Ratio',
        problem: 'In a geometric sequence, a₂ = 12 and a₅ = 324. Find r.',
        parameters: { a2: 12, a5: 324 },
        type: 'geometric_sequence',
        context: { difficulty: 'intermediate', topic: 'Geometric Sequences' },
        subparts: [
            'Given: a₂ = 12, a₅ = 324',
            'Use: aₙ = a₁ · r^(n-1)',
            'a₂ = a₁ · r = 12 ... (1)',
            'a₅ = a₁ · r⁴ = 324 ... (2)',
            'Divide (2) by (1):',
            '(a₁ · r⁴)/(a₁ · r) = 324/12',
            'r³ = 27',
            'r = 3',
            'Common ratio: r = 3'
        ],
        helper: 'Divide two term equations to eliminate a₁',
        solution: 'r = 3',
        realWorldContext: 'Determining growth rate from observations'
    });

    // Problem 7: Alternating Sequence
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alternating Geometric Sequence',
        problem: 'Find first 6 terms where a₁ = 4 and r = -2',
        parameters: { a1: 4, r: -2, n: 6 },
        type: 'geometric_sequence',
        context: { difficulty: 'intermediate', topic: 'Geometric Sequences' },
        subparts: [
            'Given: a₁ = 4, r = -2',
            'Negative ratio creates alternating signs',
            'Calculate terms:',
            'a₁ = 4',
            'a₂ = 4 × (-2) = -8',
            'a₃ = -8 × (-2) = 16',
            'a₄ = 16 × (-2) = -32',
            'a₅ = 64, a₆ = -128',
            'Sequence: 4, -8, 16, -32, 64, -128'
        ],
        helper: 'Negative r creates alternating positive/negative terms',
        solution: '4, -8, 16, -32, 64, -128',
        realWorldContext: 'Oscillating systems with growth'
    });

    // Problem 8: Geometric Means
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Geometric Means',
        problem: 'Insert 2 geometric means between 3 and 81',
        parameters: { a1: 3, an: 81, totalTerms: 4 },
        type: 'geometric_sequence',
        context: { difficulty: 'intermediate', topic: 'Geometric Sequences' },
        subparts: [
            'Given: First term = 3, Last term = 81',
            'Total terms = 4 (including endpoints)',
            'Need 2 terms in between',
            'Find r: 81 = 3 · r^(4-1)',
            '81 = 3 · r³',
            'r³ = 27',
            'r = 3',
            'The means are: 9, 27',
            'Complete sequence: 3, 9, 27, 81'
        ],
        helper: 'Find r using endpoints, then calculate means',
        solution: 'Geometric means: 9, 27',
        realWorldContext: 'Interpolating exponential data'
    });

    return relatedProblems;
}

// ============== SERIES SUMS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSeriesSums() {
    const relatedProblems = [];

    // Problem 1: Sigma Notation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Sigma Notation',
        problem: 'Evaluate: Σ(k=1 to 10) 2k',
        parameters: { expression: '2k', lowerBound: 1, upperBound: 10 },
        type: 'sigma_notation',
        context: { difficulty: 'beginner', topic: 'Sigma Notation' },
        subparts: [
            'Given: Σ(k=1 to 10) 2k',
            'This means: 2(1) + 2(2) + 2(3) + ... + 2(10)',
            'Factor out 2: 2(1 + 2 + 3 + ... + 10)',
            'Sum of first n integers: n(n+1)/2',
            '1 + 2 + ... + 10 = 10(11)/2 = 55',
            'Result: 2 × 55 = 110',
            'Answer: 110'
        ],
        helper: 'Factor out constants, use sum formulas',
        solution: '110',
        realWorldContext: 'Summation notation in calculus and statistics'
    });

    // Problem 2: Telescoping Series
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Telescoping Series',
        problem: 'Evaluate: Σ(k=1 to n) [1/k - 1/(k+1)]',
        parameters: { seriesType: 'telescoping' },
        type: 'telescoping_series',
        context: { difficulty: 'intermediate', topic: 'Telescoping Series' },
        subparts: [
            'Given: Σ(k=1 to n) [1/k - 1/(k+1)]',
            'Write first few terms:',
            'k=1: 1/1 - 1/2',
            'k=2: 1/2 - 1/3',
            'k=3: 1/3 - 1/4',
            '...',
            'k=n: 1/n - 1/(n+1)',
            'Notice: middle terms cancel',
            'Result: 1 - 1/(n+1) = n/(n+1)',
            'Answer: n/(n+1)'
        ],
        helper: 'Expand terms and look for cancellations',
        solution: 'n/(n+1)',
        realWorldContext: 'Series evaluation in calculus'
    });

    // Problem 3: Partial Sums
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Partial Sums',
        problem: 'Find S₅ for the sequence: 1, 4, 7, 10, 13, ...',
        parameters: { sequence: [1, 4, 7, 10, 13], n: 5 },
        type: 'partial_sums',
        context: { difficulty: 'beginner', topic: 'Partial Sums' },
        subparts: [
            'Given sequence: 1, 4, 7, 10, 13',
            'This is arithmetic with a₁ = 1, d = 3',
            'S₅ = sum of first 5 terms',
            'Method 1 (Direct): 1 + 4 + 7 + 10 + 13 = 35',
            'Method 2 (Formula): S₅ = 5/2(1 + 13)',
            'S₅ = 5/2(14) = 5 × 7 = 35',
            'Answer: S₅ = 35'
        ],
        helper: 'Add terms directly or use sum formula',
        solution: 'S₅ = 35',
        realWorldContext: 'Cumulative totals in accounting'
    });

    // Problem 4: Harmonic Series (Partial)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Harmonic Series',
        problem: 'Find H₁₀ = 1 + 1/2 + 1/3 + ... + 1/10',
        parameters: { n: 10 },
        type: 'harmonic_series',
        context: { difficulty: 'intermediate', topic: 'Harmonic Series' },
        subparts: [
            'Given: H₁₀ = Σ(k=1 to 10) 1/k',
            'Calculate each term:',
            '1 + 1/2 + 1/3 + 1/4 + 1/5 + 1/6 + 1/7 + 1/8 + 1/9 + 1/10',
            '= 1 + 0.5 + 0.333... + 0.25 + 0.2 + ...',
            'H₁₀ ≈ 2.9290',
            'Approximation: H₁₀ ≈ ln(10) + γ ≈ 2.9290',
            'where γ ≈ 0.5772 (Euler constant)'
        ],
        helper: 'Add reciprocals; series grows slowly',
        solution: 'H₁₀ ≈ 2.929',
        realWorldContext: 'Number theory and analysis'
    });

    // Problem 5: p-Series Convergence
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'p-Series Convergence',
        problem: 'Test convergence: Σ(n=1 to ∞) 1/n²',
        parameters: { p: 2 },
        type: 'p_series',
        context: { difficulty: 'advanced', topic: 'Series Convergence' },
        subparts: [
            'Given: Σ(n=1 to ∞) 1/n²',
            'This is a p-series with p = 2',
            'Convergence test: p > 1 ⟹ converges',
            'Since p = 2 > 1, series converges',
            'Exact value: π²/6 ≈ 1.6449',
            '(Basel problem solved by Euler)',
            'Answer: Converges to π²/6'
        ],
        helper: 'p-series converges if and only if p > 1',
        solution: 'Converges to π²/6',
        realWorldContext: 'Famous result in mathematical analysis'
    });

    // Problem 6: Sum of Squares
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sum of Squares',
        problem: 'Find: 1² + 2² + 3² + ... + 10²',
        parameters: { n: 10, type: 'squares' },
        type: 'special_sequences',
        context: { difficulty: 'intermediate', topic: 'Special Sums' },
        subparts: [
            'Given: 1² + 2² + 3² + ... + 10²',
            'Formula: Σk² = n(n+1)(2n+1)/6',
            'For n = 10:',
            'Sum = 10(11)(21)/6',
            '= 10 × 11 × 21 / 6',
            '= 2310 / 6',
            '= 385',
            'Answer: 385'
        ],
        helper: 'Use formula: n(n+1)(2n+1)/6',
        solution: '385',
        realWorldContext: 'Physics and statistics calculations'
    });

    // Problem 7: Series with Alternating Signs
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Alternating Series',
        problem: 'Find sum: 1 - 1/2 + 1/4 - 1/8 + ... (first 10 terms)',
        parameters: { a1: 1, r: -0.5, n: 10 },
        type: 'geometric_series_finite',
        context: { difficulty: 'intermediate', topic: 'Alternating Series' },
        subparts: [
            'Given: 1 - 1/2 + 1/4 - 1/8 + ...',
            'This is geometric with a₁ = 1, r = -1/2',
            'First 10 terms (finite series)',
            'Formula: Sₙ = a₁(1 - r^n)/(1 - r)',
            'S₁₀ = 1(1 - (-1/2)¹⁰)/(1 - (-1/2))',
            'S₁₀ = (1 - 1/1024)/(3/2)',
            'S₁₀ = (1023/1024) × (2/3)',
            'S₁₀ ≈ 0.6660',
            'Infinite sum: S∞ = 1/(1-(-1/2)) = 2/3'
        ],
        helper: 'Geometric series with negative ratio',
        solution: 'S₁₀ ≈ 0.666, S∞ = 2/3',
        realWorldContext: 'Alternating current and wave analysis'
    });

    // Problem 8: Sum of Cubes
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sum of Cubes',
        problem: 'Find: 1³ + 2³ + 3³ + ... + 8³',
        parameters: { n: 8, type: 'cubes' },
        type: 'special_sequences',
        context: { difficulty: 'intermediate', topic: 'Special Sums' },
        subparts: [
            'Given: 1³ + 2³ + 3³ + ... + 8³',
            'Formula: Σk³ = [n(n+1)/2]²',
            'This equals (sum of first n numbers)²',
            'First find: 1 + 2 + ... + 8 = 8(9)/2 = 36',
            'Then: (36)² = 1296',
            'Verify: 1 + 8 + 27 + 64 + 125 + 216 + 343 + 512 = 1296 ✓',
            'Answer: 1296'
        ],
        helper: 'Use [n(n+1)/2]² formula',
        solution: '1296',
        realWorldContext: 'Volume and three-dimensional calculations'
    });

    return relatedProblems;
}

// ============== BINOMIAL THEOREM - RELATED PROBLEMS GENERATOR ==============

function generateRelatedBinomialTheorem() {
    const relatedProblems = [];

    // Problem 1: Basic Binomial Expansion
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Binomial Expansion',
        problem: 'Expand: (x + 2)³',
        parameters: { a: 'x', b: 2, n: 3 },
        type: 'binomial_theorem',
        context: { difficulty: 'beginner', topic: 'Binomial Theorem' },
        subparts: [
            'Given: (x + 2)³',
            'Use binomial theorem: (a+b)ⁿ = Σ C(n,k)aⁿ⁻ᵏbᵏ',
            'For n = 3:',
            'Term 0: C(3,0)x³·2⁰ = 1·x³·1 = x³',
            'Term 1: C(3,1)x²·2¹ = 3·x²·2 = 6x²',
            'Term 2: C(3,2)x¹·2² = 3·x·4 = 12x',
            'Term 3: C(3,3)x⁰·2³ = 1·1·8 = 8',
            'Expansion: x³ + 6x² + 12x + 8'
        ],
        helper: 'Use Pascal\'s triangle: 1, 3, 3, 1',
        solution: 'x³ + 6x² + 12x + 8',
        realWorldContext: 'Algebraic manipulation and probability'
    });

    // Problem 2: Binomial Coefficient
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Binomial Coefficient',
        problem: 'Calculate: C(7,3)',
        parameters: { n: 7, k: 3 },
        type: 'binomial_coefficient',
        context: { difficulty: 'beginner', topic: 'Combinations' },
        subparts: [
            'Given: C(7,3) = 7!/(3!·4!)',
            'Calculate factorials:',
            '7! = 7 × 6 × 5 × 4!',
            '3! = 6',
            '4! = 24',
            'C(7,3) = (7 × 6 × 5 × 4!)/(6 × 4!)',
            '= (7 × 6 × 5)/6',
            '= 7 × 5 = 35',
            'Answer: C(7,3) = 35'
        ],
        helper: 'Use C(n,k) = n!/(k!(n-k)!)',
        solution: 'C(7,3) = 35',
        realWorldContext: 'Counting combinations and probability'
    });

    // Problem 3: Finding Specific Term
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Specific Term',
        problem: 'Find the 4th term in the expansion of (2x + 3)⁵',
        parameters: { a: '2x', b: 3, n: 5, termNumber: 4 },
        type: 'binomial_theorem',
        context: { difficulty: 'intermediate', topic: 'Binomial Theorem' },
        subparts: [
            'Given: (2x + 3)⁵, find 4th term',
            'General term: Tₖ₊₁ = C(n,k)aⁿ⁻ᵏbᵏ',
            'For 4th term: k = 3 (since Tₖ₊₁)',
            'T₄ = C(5,3)(2x)⁵⁻³(3)³',
            'C(5,3) = 10',
            'T₄ = 10·(2x)²·(27)',
            'T₄ = 10·4x²·27',
            'T₄ = 1080x²',
            'Answer: 1080x²'
        ],
        helper: 'Use Tₖ₊₁ formula with appropriate k value',
        solution: 'T₄ = 1080x²',
        realWorldContext: 'Finding specific components in expansions'
    });

    // Problem 4: Pascal's Triangle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pascal\'s Triangle',
        problem: 'Write the 6th row of Pascal\'s triangle',
        parameters: { n: 5 },
        type: 'binomial_coefficient',
        context: { difficulty: 'beginner', topic: 'Pascal\'s Triangle' },
        subparts: [
            'Given: Find 6th row (n = 5, starting from n = 0)',
            'Row 5: C(5,0), C(5,1), C(5,2), C(5,3), C(5,4), C(5,5)',
            'Calculate:',
            'C(5,0) = 1',
            'C(5,1) = 5',
            'C(5,2) = 10',
            'C(5,3) = 10',
            'C(5,4) = 5',
            'C(5,5) = 1',
            'Row: 1  5  10  10  5  1'
        ],
        helper: 'Each number is sum of two numbers above it',
        solution: '1  5  10  10  5  1',
        realWorldContext: 'Pattern recognition and combinatorics'
    });

    // Problem 5: Binomial with Subtraction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Binomial with Subtraction',
        problem: 'Expand: (x - 1)⁴',
        parameters: { a: 'x', b: -1, n: 4 },
        type: 'binomial_theorem',
        context: { difficulty: 'intermediate', topic: 'Binomial Theorem' },
        subparts: [
            'Given: (x - 1)⁴ = (x + (-1))⁴',
            'Coefficients from row 4: 1, 4, 6, 4, 1',
            'Term 0: 1·x⁴·(-1)⁰ = x⁴',
            'Term 1: 4·x³·(-1)¹ = -4x³',
            'Term 2: 6·x²·(-1)² = 6x²',
            'Term 3: 4·x¹·(-1)³ = -4x',
            'Term 4: 1·x⁰·(-1)⁴ = 1',
            'Expansion: x⁴ - 4x³ + 6x² - 4x + 1'
        ],
        helper: 'Signs alternate with negative b',
        solution: 'x⁴ - 4x³ + 6x² - 4x + 1',
        realWorldContext: 'Algebraic expressions with differences'
    });

    // Problem 6: Coefficient of Specific Term
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coefficient of Specific Term',
        problem: 'Find coefficient of x⁴ in (2x - 3)⁶',
        parameters: { a: '2x', b: -3, n: 6, power: 4 },
        type: 'binomial_theorem',
        context: { difficulty: 'intermediate', topic: 'Binomial Theorem' },
        subparts: [
            'Given: (2x - 3)⁶, find coefficient of x⁴',
            'Term with x⁴: (2x)⁴ appears when k = 2',
            'T₃ = C(6,2)(2x)⁴(-3)²',
            'C(6,2) = 15',
            '(2x)⁴ = 16x⁴',
            '(-3)² = 9',
            'T₃ = 15 × 16x⁴ × 9',
            'Coefficient = 15 × 16 × 9 = 2160',
            'Answer: 2160'
        ],
        helper: 'Find k where power of x matches',
        solution: 'Coefficient = 2160',
        realWorldContext: 'Finding specific coefficients in polynomials'
    });

    // Problem 7: Binomial Probability
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Binomial Probability',
        problem: 'In 5 coin flips, find probability of exactly 3 heads',
        parameters: { n: 5, k: 3, p: 0.5 },
        type: 'binomial_coefficient',
        context: { difficulty: 'intermediate', topic: 'Binomial Probability' },
        subparts: [
            'Given: n = 5 trials, k = 3 successes, p = 0.5',
            'Binomial probability: P(X=k) = C(n,k)pᵏ(1-p)ⁿ⁻ᵏ',
            'P(X=3) = C(5,3)(0.5)³(0.5)²',
            'C(5,3) = 10',
            'P(X=3) = 10 × (0.5)⁵',
            'P(X=3) = 10 × (1/32)',
            'P(X=3) = 10/32 = 5/16',
            'P(X=3) ≈ 0.3125 or 31.25%'
        ],
        helper: 'Use C(n,k) for number of ways',
        solution: 'P = 5/16 ≈ 0.3125',
        realWorldContext: 'Probability and statistics applications'
    });

    // Problem 8: Sum of Coefficients
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sum of Coefficients',
        problem: 'Find sum of all coefficients in (x + 2)⁵',
        parameters: { a: 1, b: 2, n: 5 },
        type: 'binomial_theorem',
        context: { difficulty: 'intermediate', topic: 'Binomial Properties' },
        subparts: [
            'Given: (x + 2)⁵',
            'Trick: substitute x = 1',
            '(1 + 2)⁵ = 3⁵',
            'Calculate: 3⁵ = 243',
            'This gives sum of all coefficients',
            'Alternatively: expand and add coefficients',
            'C(5,0)·2⁰ + C(5,1)·2¹ + ... + C(5,5)·2⁵',
            'Answer: 243'
        ],
        helper: 'Substitute x = 1 for sum of coefficients',
        solution: 'Sum = 243',
        realWorldContext: 'Polynomial evaluation shortcut'
    });

    return relatedProblems;
}


// ============== NUMBER PROPERTIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedNumberProperties() {
    const relatedProblems = [];

    // Problem 1: Perfect Number Classification
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Perfect Number Classification',
        problem: 'Classify the number 28. Is it perfect, abundant, or deficient?',
        parameters: { n: 28 },
        type: 'perfect_number',
        context: { difficulty: 'beginner', topic: 'Number Properties - Perfect Numbers' },
        subparts: [
            'Given: n = 28',
            'Find all proper divisors (divisors excluding 28 itself)',
            'Divisors of 28: 1, 2, 4, 7, 14, 28',
            'Proper divisors: 1, 2, 4, 7, 14',
            'Sum of proper divisors: 1 + 2 + 4 + 7 + 14 = 28',
            'Since sum equals the number: 28 = 28',
            'Classification: Perfect Number',
            'Note: 28 is the second perfect number (after 6)'
        ],
        helper: 'Sum the proper divisors and compare to the number',
        solution: 'Perfect Number',
        realWorldContext: 'Perfect numbers have fascinated mathematicians since ancient Greece'
    });

    // Problem 2: Fibonacci Sequence
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Fibonacci Number Calculation',
        problem: 'Find the 10th Fibonacci number',
        parameters: { n: 10 },
        type: 'fibonacci',
        context: { difficulty: 'beginner', topic: 'Number Properties - Fibonacci Sequence' },
        subparts: [
            'Fibonacci sequence: F(0)=0, F(1)=1, F(n)=F(n-1)+F(n-2)',
            'F(0) = 0',
            'F(1) = 1',
            'F(2) = 0 + 1 = 1',
            'F(3) = 1 + 1 = 2',
            'F(4) = 1 + 2 = 3',
            'F(5) = 2 + 3 = 5',
            'F(6) = 3 + 5 = 8',
            'F(7) = 5 + 8 = 13',
            'F(8) = 8 + 13 = 21',
            'F(9) = 13 + 21 = 34',
            'F(10) = 21 + 34 = 55',
            'Answer: F(10) = 55'
        ],
        helper: 'Each term is the sum of the previous two terms',
        solution: 'F(10) = 55',
        realWorldContext: 'Fibonacci numbers appear in nature: spirals, branching patterns'
    });

    // Problem 3: Euler Totient Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Euler Totient Function',
        problem: 'Calculate φ(12) - the count of positive integers ≤ 12 that are coprime to 12',
        parameters: { n: 12 },
        type: 'euler_totient',
        context: { difficulty: 'intermediate', topic: 'Number Properties - Euler Totient' },
        subparts: [
            'Given: n = 12',
            'Prime factorization: 12 = 2² × 3',
            'Formula: φ(n) = n × ∏(1 - 1/p) for all prime factors p',
            'φ(12) = 12 × (1 - 1/2) × (1 - 1/3)',
            'φ(12) = 12 × (1/2) × (2/3)',
            'φ(12) = 12 × 2/6 = 12 × 1/3 = 4',
            'Numbers coprime to 12: 1, 5, 7, 11',
            'Count: 4 numbers',
            'Answer: φ(12) = 4'
        ],
        helper: 'Use prime factorization and Euler\'s formula',
        solution: 'φ(12) = 4',
        realWorldContext: 'Used in RSA cryptography and modular arithmetic'
    });

    // Problem 4: Linear Diophantine Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Linear Diophantine Equation',
        problem: 'Find integer solutions to: 3x + 5y = 21',
        parameters: { a: 3, b: 5, c: 21 },
        type: 'linear_diophantine',
        context: { difficulty: 'intermediate', topic: 'Number Properties - Diophantine Equations' },
        subparts: [
            'Given: 3x + 5y = 21',
            'Check solvability: GCD(3, 5) must divide 21',
            'GCD(3, 5) = 1 (3 and 5 are coprime)',
            'Since 1 divides 21, solutions exist',
            'Find particular solution using Extended Euclidean Algorithm',
            'One solution: x = 2, y = 3',
            'Check: 3(2) + 5(3) = 6 + 15 = 21 ✓',
            'General solution: x = 2 + 5t, y = 3 - 3t (t ∈ ℤ)',
            'Other solutions: (7, 0), (-3, 6), (12, -3), etc.'
        ],
        helper: 'Check GCD divides constant, then find particular solution',
        solution: 'x = 2 + 5t, y = 3 - 3t',
        realWorldContext: 'Used in problems requiring integer solutions'
    });

    // Problem 5: Pythagorean Triple Check
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pythagorean Triple Verification',
        problem: 'Verify if (5, 12, 13) is a Pythagorean triple',
        parameters: { a: 5, b: 12, c: 13 },
        type: 'pythagorean_triple',
        context: { difficulty: 'beginner', topic: 'Number Properties - Pythagorean Triples' },
        subparts: [
            'Given: (5, 12, 13)',
            'Test if a² + b² = c²',
            '5² + 12² = 25 + 144 = 169',
            '13² = 169',
            'Since 169 = 169, this is a Pythagorean triple',
            'Check if primitive: GCD(5, 12, 13) = 1',
            'This is a primitive Pythagorean triple',
            'Can be generated by: m=3, n=2',
            'a = m²-n² = 9-4 = 5',
            'b = 2mn = 2(3)(2) = 12',
            'c = m²+n² = 9+4 = 13'
        ],
        helper: 'Check if sum of squares of two smaller equals square of largest',
        solution: 'Yes, primitive Pythagorean triple',
        realWorldContext: 'Right triangles with integer sides'
    });

    // Problem 6: Base Conversion
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Base Conversion',
        problem: 'Convert 101101₂ (binary) to decimal',
        parameters: { number: '101101', fromBase: 2, toBase: 10 },
        type: 'base_conversion',
        context: { difficulty: 'intermediate', topic: 'Number Properties - Base Conversion' },
        subparts: [
            'Given: 101101₂ (binary to decimal)',
            'Expand using place values:',
            '1×2⁵ + 0×2⁴ + 1×2³ + 1×2² + 0×2¹ + 1×2⁰',
            '= 1×32 + 0×16 + 1×8 + 1×4 + 0×2 + 1×1',
            '= 32 + 0 + 8 + 4 + 0 + 1',
            '= 45',
            'Answer: 101101₂ = 45₁₀',
            'Verification: 45 in binary is 101101 ✓'
        ],
        helper: 'Multiply each digit by appropriate power of base',
        solution: '45₁₀',
        realWorldContext: 'Computer science and digital systems'
    });

    // Problem 7: Number Classification
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Abundant Number',
        problem: 'Classify the number 12. Is it perfect, abundant, or deficient?',
        parameters: { n: 12 },
        type: 'perfect_number',
        context: { difficulty: 'beginner', topic: 'Number Properties - Number Classification' },
        subparts: [
            'Given: n = 12',
            'Proper divisors of 12: 1, 2, 3, 4, 6',
            'Sum: 1 + 2 + 3 + 4 + 6 = 16',
            'Compare: 16 > 12',
            'Since sum > number, 12 is abundant',
            'Abundance: 16 - 12 = 4',
            'Classification: Abundant Number'
        ],
        helper: 'Sum proper divisors and compare to original number',
        solution: 'Abundant Number',
        realWorldContext: 'Understanding divisor relationships'
    });

    return relatedProblems;
}

// ============== PRIME NUMBERS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPrimeNumbers() {
    const relatedProblems = [];

    // Problem 1: Basic Primality Test
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Primality Test',
        problem: 'Is 17 a prime number?',
        parameters: { n: 17 },
        type: 'prime_test',
        context: { difficulty: 'beginner', topic: 'Prime Numbers - Primality Testing' },
        subparts: [
            'Given: n = 17',
            'Check if n < 2: No, 17 ≥ 2',
            'Check if n = 2: No',
            'Check if even: 17 is odd',
            'Find √17 ≈ 4.12, so check divisors up to 4',
            'Test divisibility by 3: 17 ÷ 3 = 5 remainder 2 (not divisible)',
            'No divisors found between 2 and 4',
            'Conclusion: 17 is prime',
            'Verification: Only divisors are 1 and 17'
        ],
        helper: 'Check divisibility by numbers from 2 to √n',
        solution: 'Yes, 17 is prime',
        realWorldContext: 'Prime numbers are building blocks of all integers'
    });

    // Problem 2: Composite Number Test
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Composite Number Test',
        problem: 'Is 91 a prime number?',
        parameters: { n: 91 },
        type: 'prime_test',
        context: { difficulty: 'beginner', topic: 'Prime Numbers - Identifying Composites' },
        subparts: [
            'Given: n = 91',
            '91 is odd, so not divisible by 2',
            'Check √91 ≈ 9.54, test divisors up to 9',
            'Test 3: 91 ÷ 3 = 30.33... (not divisible)',
            'Test 5: 91 ÷ 5 = 18.2 (not divisible)',
            'Test 7: 91 ÷ 7 = 13 exactly!',
            '91 = 7 × 13',
            'Since 7 divides 91, it is composite',
            'Conclusion: 91 is NOT prime'
        ],
        helper: 'Systematic trial division reveals factors',
        solution: 'No, 91 = 7 × 13',
        realWorldContext: 'Not all odd numbers are prime'
    });

    // Problem 3: Prime Factorization
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Prime Factorization',
        problem: 'Find the prime factorization of 60',
        parameters: { n: 60 },
        type: 'prime_factorization',
        context: { difficulty: 'beginner', topic: 'Prime Numbers - Prime Factorization' },
        subparts: [
            'Given: n = 60',
            'Divide by 2: 60 = 2 × 30',
            'Divide by 2: 30 = 2 × 15',
            'Divide by 3: 15 = 3 × 5',
            '5 is prime, stop',
            'Factors found: 2, 2, 3, 5',
            'Prime factorization: 60 = 2² × 3 × 5',
            'Verification: 4 × 3 × 5 = 60 ✓',
            'Standard form: 2² × 3¹ × 5¹'
        ],
        helper: 'Divide repeatedly by smallest prime factors',
        solution: '60 = 2² × 3 × 5',
        realWorldContext: 'Unique factorization fundamental to number theory'
    });

    // Problem 4: Finding Primes (Sieve)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sieve of Eratosthenes',
        problem: 'Find all prime numbers up to 30',
        parameters: { n: 30 },
        type: 'find_primes',
        context: { difficulty: 'intermediate', topic: 'Prime Numbers - Sieve of Eratosthenes' },
        subparts: [
            'List numbers from 2 to 30',
            'Start with 2 (prime), mark multiples: 4, 6, 8, ..., 30',
            'Next unmarked: 3 (prime), mark multiples: 6, 9, 12, ..., 30',
            'Next unmarked: 5 (prime), mark multiples: 10, 15, 20, 25, 30',
            'Next unmarked: 7 (prime), mark multiples: 14, 21, 28',
            'Stop at √30 ≈ 5.48, all remaining unmarked are prime',
            'Primes up to 30: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
            'Count: 10 primes',
            'This is the most efficient method for finding many primes'
        ],
        helper: 'Mark multiples of each prime, unmarked numbers are prime',
        solution: '2, 3, 5, 7, 11, 13, 17, 19, 23, 29',
        realWorldContext: 'Efficient algorithm for generating prime lists'
    });

    // Problem 5: Large Number Factorization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Factorization of Larger Number',
        problem: 'Find the prime factorization of 504',
        parameters: { n: 504 },
        type: 'prime_factorization',
        context: { difficulty: 'intermediate', topic: 'Prime Numbers - Complex Factorization' },
        subparts: [
            'Given: n = 504',
            '504 ÷ 2 = 252',
            '252 ÷ 2 = 126',
            '126 ÷ 2 = 63',
            '63 ÷ 3 = 21',
            '21 ÷ 3 = 7',
            '7 is prime',
            'Prime factors: 2, 2, 2, 3, 3, 7',
            'Prime factorization: 504 = 2³ × 3² × 7',
            'Verification: 8 × 9 × 7 = 504 ✓'
        ],
        helper: 'Continue dividing by primes until quotient is 1',
        solution: '504 = 2³ × 3² × 7',
        realWorldContext: 'Foundation for GCD, LCM, and divisor calculations'
    });

    // Problem 6: Twin Primes
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Twin Primes',
        problem: 'Identify twin prime pairs between 10 and 30',
        parameters: { n: 30 },
        type: 'find_primes',
        context: { difficulty: 'intermediate', topic: 'Prime Numbers - Twin Primes' },
        subparts: [
            'Twin primes: prime pairs differing by 2',
            'Primes from 10 to 30: 11, 13, 17, 19, 23, 29',
            'Check differences:',
            '13 - 11 = 2 ✓ (twin primes)',
            '17 - 13 = 4 (not twins)',
            '19 - 17 = 2 ✓ (twin primes)',
            '23 - 19 = 4 (not twins)',
            '29 - 23 = 6 (not twins)',
            'Twin prime pairs: (11, 13) and (17, 19)',
            'Note: It\'s unknown if infinitely many twin primes exist'
        ],
        helper: 'Find primes that differ by exactly 2',
        solution: '(11, 13) and (17, 19)',
        realWorldContext: 'Special prime patterns studied in advanced number theory'
    });

    // Problem 7: Prime Number Theorem Application
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Prime Counting',
        problem: 'Estimate how many primes exist below 100',
        parameters: { n: 100 },
        type: 'find_primes',
        context: { difficulty: 'intermediate', topic: 'Prime Numbers - Prime Number Theorem' },
        subparts: [
            'Use Prime Number Theorem: π(n) ≈ n/ln(n)',
            'For n = 100:',
            'π(100) ≈ 100/ln(100)',
            'ln(100) ≈ 4.605',
            'π(100) ≈ 100/4.605 ≈ 21.7',
            'Estimate: about 22 primes below 100',
            'Actual count: 25 primes',
            'Primes: 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97',
            'Theorem is more accurate for larger n'
        ],
        helper: 'Prime Number Theorem gives approximation',
        solution: 'Estimate: ~22, Actual: 25',
        realWorldContext: 'Understanding prime distribution in number line'
    });

    return relatedProblems;
}

// ============== HCF/LCM - RELATED PROBLEMS GENERATOR ==============

function generateRelatedHCFLCM() {
    const relatedProblems = [];

    // Problem 1: Simple GCD
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple GCD Calculation',
        problem: 'Find GCD(24, 36)',
        parameters: { a: 24, b: 36 },
        type: 'gcd_calculation',
        context: { difficulty: 'beginner', topic: 'HCF/LCM - Basic GCD' },
        subparts: [
            'Given: a = 24, b = 36',
            'Method 1: Euclidean Algorithm',
            '36 = 24 × 1 + 12',
            '24 = 12 × 2 + 0',
            'GCD = 12 (last non-zero remainder)',
            'Method 2: Prime Factorization',
            '24 = 2³ × 3',
            '36 = 2² × 3²',
            'GCD = 2² × 3 = 12 (minimum powers)',
            'Answer: GCD(24, 36) = 12'
        ],
        helper: 'Use Euclidean algorithm or prime factorization',
        solution: 'GCD = 12',
        realWorldContext: 'Simplifying fractions, finding common factors'
    });

    // Problem 2: Simple LCM
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple LCM Calculation',
        problem: 'Find LCM(12, 18)',
        parameters: { a: 12, b: 18 },
        type: 'lcm_calculation',
        context: { difficulty: 'beginner', topic: 'HCF/LCM - Basic LCM' },
        subparts: [
            'Given: a = 12, b = 18',
            'Method 1: Using GCD',
            'GCD(12, 18) = 6',
            'LCM = (12 × 18) / 6 = 216 / 6 = 36',
            'Method 2: Prime Factorization',
            '12 = 2² × 3',
            '18 = 2 × 3²',
            'LCM = 2² × 3² = 36 (maximum powers)',
            'Verification: 36 is divisible by both 12 and 18',
            'Answer: LCM(12, 18) = 36'
        ],
        helper: 'LCM = (a × b) / GCD(a, b)',
        solution: 'LCM = 36',
        realWorldContext: 'Finding common denominators, scheduling problems'
    });

    // Problem 3: GCD with Large Numbers
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'GCD with Euclidean Algorithm',
        problem: 'Find GCD(252, 105) using Euclidean algorithm',
        parameters: { a: 252, b: 105 },
        type: 'gcd_calculation',
        context: { difficulty: 'intermediate', topic: 'HCF/LCM - Euclidean Algorithm' },
        subparts: [
            'Given: a = 252, b = 105',
            'Step 1: 252 = 105 × 2 + 42',
            'Step 2: 105 = 42 × 2 + 21',
            'Step 3: 42 = 21 × 2 + 0',
            'Last non-zero remainder: 21',
            'GCD(252, 105) = 21',
            'Verification:',
            '252 ÷ 21 = 12',
            '105 ÷ 21 = 5',
            'Both divide evenly ✓'
        ],
        helper: 'Apply division algorithm repeatedly until remainder is 0',
        solution: 'GCD = 21',
        realWorldContext: 'Most efficient method for large numbers'
    });

    // Problem 4: LCM of Three Numbers
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'LCM of Three Numbers',
        problem: 'Find LCM(4, 6, 8)',
        parameters: { a: 4, b: 6, c: 8 },
        type: 'lcm_calculation',
        context: { difficulty: 'intermediate', topic: 'HCF/LCM - Multiple Numbers' },
        subparts: [
            'Given: Find LCM(4, 6, 8)',
            'Method: Prime factorization',
            '4 = 2²',
            '6 = 2 × 3',
            '8 = 2³',
            'LCM = highest power of each prime',
            'LCM = 2³ × 3 = 8 × 3 = 24',
            'Alternative: LCM(LCM(4,6), 8)',
            'LCM(4, 6) = 12',
            'LCM(12, 8) = 24',
            'Answer: LCM(4, 6, 8) = 24'
        ],
        helper: 'Use prime factorization or compute pairwise',
        solution: 'LCM = 24',
        realWorldContext: 'Synchronization of multiple cycles'
    });

    // Problem 5: Coprime Numbers
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coprime Numbers',
        problem: 'Are 15 and 28 coprime? Find their GCD.',
        parameters: { a: 15, b: 28 },
        type: 'gcd_calculation',
        context: { difficulty: 'beginner', topic: 'HCF/LCM - Coprime Numbers' },
        subparts: [
            'Given: a = 15, b = 28',
            'Numbers are coprime if GCD = 1',
            'Euclidean Algorithm:',
            '28 = 15 × 1 + 13',
            '15 = 13 × 1 + 2',
            '13 = 2 × 6 + 1',
            '2 = 1 × 2 + 0',
            'GCD(15, 28) = 1',
            'Since GCD = 1, they are coprime',
            'Definition: Coprime numbers share no common factors except 1'
        ],
        helper: 'If GCD = 1, numbers are coprime (relatively prime)',
        solution: 'GCD = 1, Yes coprime',
        realWorldContext: 'Important in modular arithmetic and cryptography'
    });

    // Problem 6: Word Problem - Scheduling
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'LCM Word Problem',
        problem: 'Two bells ring every 12 and 18 minutes. If they ring together at 9:00 AM, when will they next ring together?',
        parameters: { a: 12, b: 18 },
        type: 'lcm_calculation',
        context: { difficulty: 'intermediate', topic: 'HCF/LCM - Real-World Application' },
        subparts: [
            'Given: Bell 1 rings every 12 minutes',
            '       Bell 2 rings every 18 minutes',
            'Need to find LCM(12, 18)',
            'GCD(12, 18) = 6',
            'LCM = (12 × 18) / 6 = 216 / 6 = 36 minutes',
            'They ring together every 36 minutes',
            'Starting at 9:00 AM:',
            'Next time: 9:00 + 36 min = 9:36 AM',
            'Following times: 10:12 AM, 10:48 AM, ...',
            'Answer: They next ring together at 9:36 AM'
        ],
        helper: 'LCM gives the time when events coincide',
        solution: '9:36 AM (after 36 minutes)',
        realWorldContext: 'Scheduling, cyclic events, gear ratios'
    });

    // Problem 7: GCD and LCM Relationship
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'GCD and LCM Relationship',
        problem: 'If GCD(a,b) = 6 and a = 18, b = 24, verify that GCD × LCM = a × b',
        parameters: { a: 18, b: 24 },
        type: 'gcd_calculation',
        context: { difficulty: 'intermediate', topic: 'HCF/LCM - Fundamental Relationship' },
        subparts: [
            'Given: a = 18, b = 24',
            'Find GCD: GCD(18, 24) = 6',
            'Find LCM: LCM(18, 24) = 72',
            'Verify relationship: GCD × LCM = a × b',
            'Left side: 6 × 72 = 432',
            'Right side: 18 × 24 = 432',
            '432 = 432 ✓',
            'This relationship always holds!',
            'Formula: LCM(a,b) = (a × b) / GCD(a,b)'
        ],
        helper: 'Important identity: GCD(a,b) × LCM(a,b) = a × b',
        solution: 'Verified: 6 × 72 = 18 × 24 = 432',
        realWorldContext: 'Fundamental relationship in number theory'
    });

    return relatedProblems;
}

// ============== MODULAR ARITHMETIC - RELATED PROBLEMS GENERATOR ==============

function generateRelatedModularArithmetic() {
    const relatedProblems = [];

    // Problem 1: Basic Modular Reduction
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Modular Reduction',
        problem: 'Calculate 47 mod 5',
        parameters: { a: 47, n: 5 },
        type: 'modular_arithmetic',
        context: { difficulty: 'beginner', topic: 'Modular Arithmetic - Basic Reduction' },
        subparts: [
            'Given: 47 mod 5',
            'Divide: 47 ÷ 5 = 9 remainder 2',
            'Division form: 47 = 5 × 9 + 2',
            'The remainder is the answer',
            '47 mod 5 = 2',
            'Verification: 45 is divisible by 5, 47 - 45 = 2',
            'Alternative: 47 - 9(5) = 47 - 45 = 2',
            'Answer: 2'
        ],
        helper: 'Find remainder when dividing by modulus',
        solution: '47 mod 5 = 2',
        realWorldContext: 'Clock arithmetic, cyclic patterns'
    });

    // Problem 2: Modular Addition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Modular Addition',
        problem: 'Calculate (23 + 17) mod 12',
        parameters: { a: 23, b: 17, n: 12, operation: 'add' },
        type: 'modular_arithmetic',
        context: { difficulty: 'beginner', topic: 'Modular Arithmetic - Addition' },
        subparts: [
            'Given: (23 + 17) mod 12',
            'Method 1: Add first, then reduce',
            '23 + 17 = 40',
            '40 mod 12 = 4 (since 40 = 12 × 3 + 4)',
            'Method 2: Reduce first, then add',
            '23 mod 12 = 11',
            '17 mod 12 = 5',
            '(11 + 5) mod 12 = 16 mod 12 = 4',
            'Both methods give same answer: 4',
            'This is like clock arithmetic!'
        ],
        helper: 'Can reduce before or after adding',
        solution: '(23 + 17) mod 12 = 4',
        realWorldContext: 'Time calculations (12-hour clock)'
    });

    // Problem 3: Modular Multiplication
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Modular Multiplication',
        problem: 'Calculate (7 × 8) mod 11',
        parameters: { a: 7, b: 8, n: 11, operation: 'multiply' },
        type: 'modular_arithmetic',
        context: { difficulty: 'intermediate', topic: 'Modular Arithmetic - Multiplication' },
        subparts: [
            'Given: (7 × 8) mod 11',
            'Method 1: Multiply first',
            '7 × 8 = 56',
            '56 mod 11 = 1 (since 56 = 11 × 5 + 1)',
            'Method 2: Using property',
            '(7 mod 11) × (8 mod 11) = 7 × 8 = 56',
            '56 mod 11 = 1',
            'Answer: 1',
            'Property: (a × b) mod n = [(a mod n) × (b mod n)] mod n'
        ],
        helper: 'Multiply then reduce, or reduce each factor first',
        solution: '(7 × 8) mod 11 = 1',
        realWorldContext: 'Cryptographic calculations'
    });

    // Problem 4: Modular Inverse
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Modular Multiplicative Inverse',
        problem: 'Find the modular inverse of 3 modulo 7 (i.e., find x where 3x ≡ 1 (mod 7))',
        parameters: { a: 3, n: 7 },
        type: 'modular_inverse',
        context: { difficulty: 'intermediate', topic: 'Modular Arithmetic - Multiplicative Inverse' },
        subparts: [
            'Given: Find 3⁻¹ mod 7',
            'Need: 3x ≡ 1 (mod 7)',
            'Check GCD(3, 7) = 1 (inverse exists)',
            'Try values: x = 1: 3(1) = 3 mod 7 = 3 ✗',
            '            x = 2: 3(2) = 6 mod 7 = 6 ✗',
            '            x = 3: 3(3) = 9 mod 7 = 2 ✗',
            '            x = 4: 3(4) = 12 mod 7 = 5 ✗',
            '            x = 5: 3(5) = 15 mod 7 = 1 ✓',
            'Answer: 3⁻¹ ≡ 5 (mod 7)',
            'Verification: 3 × 5 = 15 ≡ 1 (mod 7) ✓'
        ],
        helper: 'Inverse exists if GCD(a, n) = 1',
        solution: '3⁻¹ ≡ 5 (mod 7)',
        realWorldContext: 'RSA encryption, modular division'
    });

    // Problem 5: Congruence Problem
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Solving Congruences',
        problem: 'Solve: 5x ≡ 3 (mod 8)',
        parameters: { a: 5, b: 3, n: 8 },
        type: 'modular_arithmetic',
        context: { difficulty: 'intermediate', topic: 'Modular Arithmetic - Linear Congruences' },
        subparts: [
            'Given: 5x ≡ 3 (mod 8)',
            'Check if solvable: GCD(5, 8) = 1, must divide 3',
            '1 divides 3, so solution exists',
            'Find inverse of 5 mod 8:',
            '5 × 5 = 25 ≡ 1 (mod 8)',
            'So 5⁻¹ ≡ 5 (mod 8)',
            'Multiply both sides by 5:',
            'x ≡ 5 × 3 (mod 8)',
            'x ≡ 15 (mod 8)',
            'x ≡ 7 (mod 8)',
            'Verification: 5(7) = 35 ≡ 3 (mod 8) ✓'
        ],
        helper: 'Find modular inverse, multiply both sides',
        solution: 'x ≡ 7 (mod 8)',
        realWorldContext: 'Solving equations in modular systems'
    });

    // Problem 6: Fermat's Little Theorem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Fermat\'s Little Theorem',
        problem: 'Calculate 3²⁰ mod 7 using Fermat\'s Little Theorem',
        parameters: { a: 3, exponent: 20, n: 7 },
        type: 'modular_arithmetic',
        context: { difficulty: 'advanced', topic: 'Modular Arithmetic - Fermat\'s Little Theorem' },
        subparts: [
            'Given: 3²⁰ mod 7',
            'Fermat\'s Little Theorem: If p is prime and gcd(a,p)=1,',
            'then a^(p-1) ≡ 1 (mod p)',
            'Here: p = 7 (prime), a = 3, gcd(3,7) = 1',
            'So: 3⁶ ≡ 1 (mod 7)',
            'Express 20 in terms of 6: 20 = 6(3) + 2',
            '3²⁰ = 3^(6×3+2) = (3⁶)³ × 3²',
            '≡ 1³ × 3² (mod 7)',
            '≡ 9 (mod 7)',
            '≡ 2 (mod 7)',
            'Answer: 3²⁰ ≡ 2 (mod 7)'
        ],
        helper: 'Use a^(p-1) ≡ 1 (mod p) for prime p',
        solution: '3²⁰ ≡ 2 (mod 7)',
        realWorldContext: 'Fast modular exponentiation in cryptography'
    });

    // Problem 7: Chinese Remainder Theorem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Chinese Remainder Theorem',
        problem: 'Find x where x ≡ 2 (mod 3) and x ≡ 3 (mod 5)',
        parameters: { congruences: [{a: 2, n: 3}, {a: 3, n: 5}] },
        type: 'modular_arithmetic',
        context: { difficulty: 'advanced', topic: 'Modular Arithmetic - Chinese Remainder Theorem' },
        subparts: [
            'Given: x ≡ 2 (mod 3) and x ≡ 3 (mod 5)',
            'Moduli are coprime: gcd(3, 5) = 1 ✓',
            'From first: x = 3k + 2 for some integer k',
            'Substitute into second: 3k + 2 ≡ 3 (mod 5)',
            '3k ≡ 1 (mod 5)',
            'Find 3⁻¹ mod 5: 3 × 2 = 6 ≡ 1 (mod 5)',
            'So k ≡ 2 (mod 5), meaning k = 5m + 2',
            'x = 3(5m + 2) + 2 = 15m + 8',
            'General solution: x ≡ 8 (mod 15)',
            'Smallest positive: x = 8',
            'Verification: 8 mod 3 = 2 ✓, 8 mod 5 = 3 ✓'
        ],
        helper: 'Solve system when moduli are coprime',
        solution: 'x ≡ 8 (mod 15)',
        realWorldContext: 'Ancient Chinese problem, modern computing applications'
    });

    return relatedProblems;
}

// ============== DIVISIBILITY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedDivisibility() {
    const relatedProblems = [];

    // Problem 1: Basic Divisibility Test
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Divisibility Test',
        problem: 'Is 156 divisible by 3?',
        parameters: { a: 156, b: 3 },
        type: 'divisibility_test',
        context: { difficulty: 'beginner', topic: 'Divisibility - Basic Tests' },
        subparts: [
            'Given: Check if 156 is divisible by 3',
            'Rule for 3: Sum of digits must be divisible by 3',
            'Digits of 156: 1, 5, 6',
            'Sum: 1 + 5 + 6 = 12',
            'Is 12 divisible by 3? Yes (12 ÷ 3 = 4)',
            'Therefore: 156 is divisible by 3',
            'Verification: 156 ÷ 3 = 52 exactly ✓',
            'Answer: Yes, 156 is divisible by 3'
        ],
        helper: 'For 3: sum of digits must be divisible by 3',
        solution: 'Yes, divisible by 3',
        realWorldContext: 'Quick mental math checks'
    });

    // Problem 2: Divisibility by 9
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Divisibility by 9',
        problem: 'Is 2457 divisible by 9?',
        parameters: { a: 2457, b: 9 },
        type: 'divisibility_test',
        context: { difficulty: 'beginner', topic: 'Divisibility - Rule for 9' },
        subparts: [
            'Given: Check if 2457 is divisible by 9',
            'Rule for 9: Sum of digits must be divisible by 9',
            'Digits: 2, 4, 5, 7',
            'Sum: 2 + 4 + 5 + 7 = 18',
            'Is 18 divisible by 9? Yes (18 ÷ 9 = 2)',
            'Therefore: 2457 is divisible by 9',
            'Verification: 2457 ÷ 9 = 273 ✓',
            'Note: If divisible by 9, also divisible by 3'
        ],
        helper: 'For 9: sum of digits must be divisible by 9',
        solution: 'Yes, divisible by 9',
        realWorldContext: 'Casting out nines check for arithmetic'
    });

    // Problem 3: Divisibility by 11
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Divisibility by 11',
        problem: 'Is 2728 divisible by 11?',
        parameters: { a: 2728, b: 11 },
        type: 'divisibility_test',
        context: { difficulty: 'intermediate', topic: 'Divisibility - Rule for 11' },
        subparts: [
            'Given: Check if 2728 is divisible by 11',
            'Rule for 11: Alternating sum of digits divisible by 11',
            'Digits (right to left): 8, 2, 7, 2',
            'Alternating sum: 8 - 2 + 7 - 2 = 11',
            'Is 11 divisible by 11? Yes',
            'Therefore: 2728 is divisible by 11',
            'Verification: 2728 ÷ 11 = 248 ✓',
            'Pattern: (ones - tens + hundreds - thousands + ...)'
        ],
        helper: 'For 11: alternating sum of digits divisible by 11',
        solution: 'Yes, divisible by 11',
        realWorldContext: 'Check digits in ISBN and credit card numbers'
    });

    // Problem 4: Count Divisors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Counting Divisors',
        problem: 'How many divisors does 36 have?',
        parameters: { n: 36 },
        type: 'divisor_count',
        context: { difficulty: 'intermediate', topic: 'Divisibility - Divisor Function' },
        subparts: [
            'Given: n = 36',
            'Prime factorization: 36 = 2² × 3²',
            'Formula: τ(n) = (a₁+1)(a₂+1)...',
            'where n = p₁^a₁ × p₂^a₂ × ...',
            'For 36 = 2² × 3²:',
            'τ(36) = (2+1)(2+1) = 3 × 3 = 9',
            'List divisors: 1, 2, 3, 4, 6, 9, 12, 18, 36',
            'Count: 9 divisors ✓',
            'Answer: 36 has 9 divisors'
        ],
        helper: 'Use formula (a₁+1)(a₂+1)... from prime factorization',
        solution: '9 divisors',
        realWorldContext: 'Understanding factor structure of numbers'
    });

    // Problem 5: Sum of Divisors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sum of Divisors',
        problem: 'Find the sum of all divisors of 28',
        parameters: { n: 28 },
        type: 'sum_of_divisors',
        context: { difficulty: 'intermediate', topic: 'Divisibility - Sigma Function' },
        subparts: [
            'Given: n = 28',
            'Divisors of 28: 1, 2, 4, 7, 14, 28',
            'Sum: σ(28) = 1 + 2 + 4 + 7 + 14 + 28',
            'σ(28) = 56',
            'Prime factorization: 28 = 2² × 7',
            'Formula: σ(28) = σ(2²) × σ(7)',
            '= (1+2+4) × (1+7) = 7 × 8 = 56 ✓',
            'Note: 28 is perfect since σ(28) - 28 = 28'
        ],
        helper: 'Add all divisors, or use multiplicative formula',
        solution: 'σ(28) = 56',
        realWorldContext: 'Perfect numbers, multiplicative functions'
    });

    // Problem 6: Divisibility by Composite
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Divisibility by Composite Number',
        problem: 'Is 5436 divisible by 6?',
        parameters: { a: 5436, b: 6 },
        type: 'divisibility_test',
        context: { difficulty: 'intermediate', topic: 'Divisibility - Composite Numbers' },
        subparts: [
            'Given: Check if 5436 is divisible by 6',
            'Rule for 6: Must be divisible by both 2 and 3',
            'Check divisibility by 2:',
            'Last digit is 6 (even) → divisible by 2 ✓',
            'Check divisibility by 3:',
            'Sum of digits: 5 + 4 + 3 + 6 = 18',
            '18 is divisible by 3 ✓',
            'Since divisible by both 2 and 3:',
            '5436 is divisible by 6',
            'Verification: 5436 ÷ 6 = 906 ✓'
        ],
        helper: 'For 6: check both 2 and 3 divisibility',
        solution: 'Yes, divisible by 6',
        realWorldContext: 'Composite divisibility rules'
    });

    // Problem 7: Finding All Divisors
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding All Divisors',
        problem: 'List all divisors of 48',
        parameters: { n: 48 },
        type: 'divisor_count',
        context: { difficulty: 'beginner', topic: 'Divisibility - Listing Divisors' },
        subparts: [
            'Given: n = 48',
            'Check each number from 1 to √48 ≈ 6.93',
            '1 divides 48: 48 ÷ 1 = 48 → divisors: 1, 48',
            '2 divides 48: 48 ÷ 2 = 24 → divisors: 2, 24',
            '3 divides 48: 48 ÷ 3 = 16 → divisors: 3, 16',
            '4 divides 48: 48 ÷ 4 = 12 → divisors: 4, 12',
            '5 does not divide 48',
            '6 divides 48: 48 ÷ 6 = 8 → divisors: 6, 8',
            'All divisors: 1, 2, 3, 4, 6, 8, 12, 16, 24, 48',
            'Total: 10 divisors'
        ],
        helper: 'Check up to √n, include both divisor and quotient',
        solution: '1, 2, 3, 4, 6, 8, 12, 16, 24, 48',
        realWorldContext: 'Factor pairs, understanding number structure'
    });

    return relatedProblems;
}

// ============== RATIONAL/IRRATIONAL - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRationalIrrational() {
    const relatedProblems = [];

    // Problem 1: Simplifying Fractions
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simplifying Fractions',
        problem: 'Simplify the fraction 24/36',
        parameters: { numerator: 24, denominator: 36 },
        type: 'simplify_fraction',
        context: { difficulty: 'beginner', topic: 'Rational Numbers - Simplifying Fractions' },
        subparts: [
            'Given: 24/36',
            'Find GCD(24, 36)',
            'GCD(24, 36) = 12',
            'Divide numerator by GCD: 24 ÷ 12 = 2',
            'Divide denominator by GCD: 36 ÷ 12 = 3',
            'Simplified form: 2/3',
            'Verification: 2 and 3 are coprime (GCD = 1)',
            'Cannot simplify further',
            'Answer: 24/36 = 2/3'
        ],
        helper: 'Divide both numerator and denominator by their GCD',
        solution: '2/3',
        realWorldContext: 'Reducing fractions to lowest terms'
    });

    // Problem 2: Decimal to Fraction
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Decimal to Fraction Conversion',
        problem: 'Convert 0.75 to a fraction',
        parameters: { decimal: 0.75 },
        type: 'decimal_to_fraction',
        context: { difficulty: 'beginner', topic: 'Rational Numbers - Decimal Conversion' },
        subparts: [
            'Given: 0.75',
            'Count decimal places: 2 places',
            'Write as fraction: 75/100',
            'Simplify: Find GCD(75, 100)',
            'GCD(75, 100) = 25',
            'Divide: 75 ÷ 25 = 3',
            '        100 ÷ 25 = 4',
            'Simplified: 3/4',
            'Verification: 3 ÷ 4 = 0.75 ✓',
            'Answer: 0.75 = 3/4'
        ],
        helper: 'Place over power of 10, then simplify',
        solution: '3/4',
        realWorldContext: 'Converting between decimal and fraction forms'
    });

    // Problem 3: Repeating Decimal to Fraction
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Repeating Decimal to Fraction',
        problem: 'Convert 0.333... (repeating) to a fraction',
        parameters: { decimal: 0.333 },
        type: 'decimal_to_fraction',
        context: { difficulty: 'intermediate', topic: 'Rational Numbers - Repeating Decimals' },
        subparts: [
            'Given: 0.333... (let x = 0.333...)',
            'Since 1 digit repeats:',
            'Multiply by 10: 10x = 3.333...',
            'Subtract original: 10x - x = 3.333... - 0.333...',
            '9x = 3',
            'Solve: x = 3/9',
            'Simplify: GCD(3, 9) = 3',
            'x = 1/3',
            'Verification: 1 ÷ 3 = 0.333... ✓',
            'Answer: 0.333... = 1/3'
        ],
        helper: 'Multiply by 10^n where n = repeating length, subtract',
        solution: '1/3',
        realWorldContext: 'All repeating decimals are rational'
    });

    // Problem 4: Rational Number Test
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rationality Test',
        problem: 'Is 0.25 a rational number?',
        parameters: { value: 0.25 },
        type: 'rational_test',
        context: { difficulty: 'beginner', topic: 'Rational Numbers - Classification' },
        subparts: [
            'Given: 0.25',
            'Definition: Rational numbers can be written as p/q',
            'where p, q are integers and q ≠ 0',
            'Convert: 0.25 = 25/100',
            'Simplify: 25/100 = 1/4',
            'Since 0.25 = 1/4 (ratio of integers)',
            'Yes, 0.25 is rational',
            'Note: All terminating decimals are rational',
            'Answer: Yes, rational (1/4)'
        ],
        helper: 'Terminating or repeating decimals are rational',
        solution: 'Yes, rational (1/4)',
        realWorldContext: 'Understanding number classifications'
    });

    // Problem 5: Irrational Number Recognition
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Irrational Number Recognition',
        problem: 'Is √2 rational or irrational?',
        parameters: { value: '√2' },
        type: 'rational_test',
        context: { difficulty: 'intermediate', topic: 'Irrational Numbers - Square Roots' },
        subparts: [
            'Given: √2',
            'Theorem: √n is irrational if n is not a perfect square',
            'Is 2 a perfect square? No (1² = 1, 2² = 4)',
            'Therefore √2 is irrational',
            'Proof (by contradiction):',
            'Assume √2 = p/q in lowest terms',
            '2 = p²/q², so 2q² = p²',
            'This means p² is even, so p is even',
            'Let p = 2k, then 2q² = 4k², so q² = 2k²',
            'This means q is also even',
            'Contradiction! (p, q both even but in lowest terms)',
            'Answer: √2 is irrational',
            'Approximate: √2 ≈ 1.41421356...'
        ],
        helper: '√n is irrational when n is not a perfect square',
        solution: 'Irrational',
        realWorldContext: 'First proven irrational number in history'
    });

    // Problem 6: Fraction Operations
    /**relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Adding Fractions',
        problem: 'Calculate 2/3 + 3/4',
        parameters: { num1: 2, den1: 3, num2: 3, den2: 4 },
        type: 'simplify_fraction',
        context: { difficulty: 'intermediate', topic: 'Rational Numbers - Fraction Operations' },
        subparts: [
            'Given: 2/3 + 3/4',
            'Need common denominator',
            'LCM(3, 4) = 12',
            'Convert first fraction: 2/3 = 8/12',
            'Convert second fraction: 3/4 = 9/12',
            'Add: 8/12 + 9/12 = 17/12',
            'Check if simplifiable: GCD(17, 12) = 1',
            'Already in simplest form',
            'Convert to mixed number: 1 5/12',
            'Answer: 17/12 or 1 5/12'
        ],
        helper: 'Find common denominator using LCM',
        solution: '17/12 or 1 5/12',
        realWorldContext: 'Fraction arithmetic in calculations'
    });
    

    // Problem 7: Comparing Rational Numbers
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Comparing Fractions',
        problem: 'Which is greater: 5/6 or 7/9?',
        parameters: { num1: 5, den1: 6, num2: 7, den2: 9 },
        type: 'simplify_fraction',
        context: { difficulty: 'beginner', topic: 'Rational Numbers - Comparison' },
        subparts: [
            'Given: Compare 5/6 and 7/9',
            'Method 1: Common denominator',
            'LCM(6, 9) = 18',
            '5/6 = 15/18',
            '7/9 = 14/18',
            '15/18 > 14/18',
            'Therefore 5/6 > 7/9',
            'Method 2: Cross multiply',
            '5 × 9 = 45',
            '7 × 6 = 42',
            '45 > 42, so 5/6 > 7/9',
            'Method 3: Decimal',
            '5/6 ≈ 0.833',
            '7/9 ≈ 0.778',
            'Answer: 5/6 is greater'
        ],
        helper: 'Use common denominator or cross multiplication',
        solution: '5/6 > 7/9',
        realWorldContext: 'Comparing quantities and proportions'
    });
    */


    return relatedProblems;
}



// ============== COORDINATE GEOMETRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCoordinateGeometry() {
    const relatedProblems = [];

    // Problem 1: Distance Between Two Points
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Distance Between Two Points',
        problem: 'Find the distance between points A(2, 3) and B(5, 7)',
        points: [{ x: 2, y: 3 }, { x: 5, y: 7 }],
        type: 'distance_between_points',
        context: { difficulty: 'beginner', topic: 'Distance Formula' },
        subparts: [
            'Given: A(2, 3) and B(5, 7)',
            'Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
            'Δx = 5 - 2 = 3',
            'Δy = 7 - 3 = 4',
            'd = √(3² + 4²) = √(9 + 16) = √25 = 5',
            'Distance = 5 units'
        ],
        helper: 'Use Pythagorean theorem: horizontal² + vertical² = distance²',
        solution: 'd = 5 units',
        realWorldContext: 'Finding straight-line distance between two locations'
    });

    // Problem 2: Midpoint of Line Segment
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Midpoint of Line Segment',
        problem: 'Find the midpoint of the line segment joining P(1, 2) and Q(7, 10)',
        points: [{ x: 1, y: 2 }, { x: 7, y: 10 }],
        type: 'midpoint',
        context: { difficulty: 'beginner', topic: 'Midpoint Formula' },
        subparts: [
            'Given: P(1, 2) and Q(7, 10)',
            'Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            'Mₓ = (1 + 7)/2 = 8/2 = 4',
            'Mᵧ = (2 + 10)/2 = 12/2 = 6',
            'Midpoint M(4, 6)'
        ],
        helper: 'Average the x-coordinates and y-coordinates separately',
        solution: 'M(4, 6)',
        realWorldContext: 'Finding the center point between two locations'
    });

    // Problem 3: Slope of a Line
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Slope of a Line',
        problem: 'Find the slope of the line passing through A(2, 3) and B(6, 11)',
        points: [{ x: 2, y: 3 }, { x: 6, y: 11 }],
        type: 'slope',
        context: { difficulty: 'beginner', topic: 'Slope Formula' },
        subparts: [
            'Given: A(2, 3) and B(6, 11)',
            'Slope formula: m = (y₂-y₁)/(x₂-x₁)',
            'Rise = 11 - 3 = 8',
            'Run = 6 - 2 = 4',
            'm = 8/4 = 2',
            'Slope = 2',
            'Interpretation: Line rises 2 units for every 1 unit horizontally'
        ],
        helper: 'Slope = rise/run = vertical change/horizontal change',
        solution: 'm = 2',
        realWorldContext: 'Measuring steepness of roads, ramps, or trends'
    });

    // Problem 4: Equation of Line (Slope-Intercept)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equation of Line - Slope-Intercept Form',
        problem: 'Find equation of line with slope 3 passing through point (2, 5)',
        points: [{ x: 2, y: 5 }],
        parameters: { slope: 3 },
        type: 'line_equation',
        context: { difficulty: 'intermediate', topic: 'Line Equations' },
        subparts: [
            'Given: m = 3, point (2, 5)',
            'Use point-slope form: y - y₁ = m(x - x₁)',
            'y - 5 = 3(x - 2)',
            'y - 5 = 3x - 6',
            'y = 3x - 6 + 5',
            'y = 3x - 1',
            'Slope-intercept form: y = 3x - 1'
        ],
        helper: 'Use point-slope form, then simplify to y = mx + b',
        solution: 'y = 3x - 1',
        realWorldContext: 'Modeling linear relationships and predictions'
    });

    // Problem 5: Parallel Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Parallel Line Through Point',
        problem: 'Find equation of line parallel to y = 2x + 3 passing through (1, 4)',
        points: [{ x: 1, y: 4 }],
        parameters: { slope: 2, lineEquation: 'y = 2x + 3' },
        type: 'parallel_line',
        context: { difficulty: 'intermediate', topic: 'Parallel Lines' },
        subparts: [
            'Given line: y = 2x + 3, slope = 2',
            'Point: (1, 4)',
            'Parallel lines have same slope: m = 2',
            'Use point-slope: y - 4 = 2(x - 1)',
            'y - 4 = 2x - 2',
            'y = 2x + 2',
            'Parallel line: y = 2x + 2'
        ],
        helper: 'Parallel lines have identical slopes',
        solution: 'y = 2x + 2',
        realWorldContext: 'Railway tracks, parallel roads, architectural design'
    });

    // Problem 6: Perpendicular Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Perpendicular Line Through Point',
        problem: 'Find equation perpendicular to y = 2x - 1 through point (4, 3)',
        points: [{ x: 4, y: 3 }],
        parameters: { slope: 2, lineEquation: 'y = 2x - 1' },
        type: 'perpendicular_line',
        context: { difficulty: 'intermediate', topic: 'Perpendicular Lines' },
        subparts: [
            'Given line: y = 2x - 1, slope m₁ = 2',
            'Point: (4, 3)',
            'Perpendicular slope: m₂ = -1/m₁ = -1/2',
            'Use point-slope: y - 3 = -1/2(x - 4)',
            'y - 3 = -x/2 + 2',
            'y = -x/2 + 5',
            'Perpendicular line: y = -x/2 + 5'
        ],
        helper: 'Perpendicular slope is negative reciprocal: m₂ = -1/m₁',
        solution: 'y = -x/2 + 5',
        realWorldContext: 'Right angles in construction, perpendicular intersections'
    });

    // Problem 7: Circle Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equation of Circle',
        problem: 'Find equation of circle with center (3, -2) and radius 5',
        points: [{ x: 3, y: -2 }],
        parameters: { radius: 5 },
        type: 'circle_equation',
        context: { difficulty: 'intermediate', topic: 'Circle Equations' },
        subparts: [
            'Given: Center C(3, -2), radius r = 5',
            'Standard form: (x - h)² + (y - k)² = r²',
            'h = 3, k = -2, r = 5',
            '(x - 3)² + (y - (-2))² = 5²',
            '(x - 3)² + (y + 2)² = 25',
            'Circle equation: (x - 3)² + (y + 2)² = 25'
        ],
        helper: 'Standard form: (x - h)² + (y - k)² = r² where (h,k) is center',
        solution: '(x - 3)² + (y + 2)² = 25',
        realWorldContext: 'Circular regions, signal coverage, circular motion'
    });

    // Problem 8: Section Formula (Internal Division)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Section Formula - Internal Division',
        problem: 'Find point dividing line segment from A(1, 2) to B(4, 5) in ratio 2:1',
        points: [{ x: 1, y: 2 }, { x: 4, y: 5 }],
        parameters: { m: 2, n: 1, divisionType: 'internal' },
        type: 'section_formula',
        context: { difficulty: 'intermediate', topic: 'Section Formula' },
        subparts: [
            'Given: A(1, 2), B(4, 5), ratio m:n = 2:1',
            'Internal division formula:',
            'P = ((mx₂+nx₁)/(m+n), (my₂+ny₁)/(m+n))',
            'Pₓ = (2×4 + 1×1)/(2+1) = (8+1)/3 = 3',
            'Pᵧ = (2×5 + 1×2)/(2+1) = (10+2)/3 = 4',
            'Division point: P(3, 4)'
        ],
        helper: 'Weighted average formula with weights m and n',
        solution: 'P(3, 4)',
        realWorldContext: 'Dividing resources, finding intermediate points'
    });

    // Problem 9: Area of Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Area of Triangle from Coordinates',
        problem: 'Find area of triangle with vertices A(0, 0), B(4, 0), C(2, 3)',
        points: [{ x: 0, y: 0 }, { x: 4, y: 0 }, { x: 2, y: 3 }],
        type: 'triangle_area',
        context: { difficulty: 'intermediate', topic: 'Triangle Area' },
        subparts: [
            'Given: A(0, 0), B(4, 0), C(2, 3)',
            'Formula: A = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|',
            'A = ½|0(0-3) + 4(3-0) + 2(0-0)|',
            'A = ½|0 + 12 + 0|',
            'A = ½|12| = 6',
            'Area = 6 square units'
        ],
        helper: 'Use coordinate formula or base × height method',
        solution: 'Area = 6 square units',
        realWorldContext: 'Land surveying, area calculation, geometric analysis'
    });

    // Problem 10: Collinearity Test
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Collinearity of Three Points',
        problem: 'Determine if points A(1, 2), B(3, 4), C(5, 6) are collinear',
        points: [{ x: 1, y: 2 }, { x: 3, y: 4 }, { x: 5, y: 6 }],
        type: 'collinearity',
        context: { difficulty: 'intermediate', topic: 'Collinearity Test' },
        subparts: [
            'Given: A(1, 2), B(3, 4), C(5, 6)',
            'Method 1: Area of triangle',
            'If area = 0, points are collinear',
            'Area = ½|1(4-6) + 3(6-2) + 5(2-4)|',
            'Area = ½|-2 + 12 - 10| = ½|0| = 0',
            'Method 2: Slope',
            'Slope AB = (4-2)/(3-1) = 2/2 = 1',
            'Slope BC = (6-4)/(5-3) = 2/2 = 1',
            'Since slopes equal, points are collinear'
        ],
        helper: 'Use area method (area=0) or slope method (equal slopes)',
        solution: 'Points are collinear',
        realWorldContext: 'Checking alignment, quality control in manufacturing'
    });

    // Problem 11: Distance from Point to Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Distance from Point to Line',
        problem: 'Find distance from point P(2, 3) to line 3x + 4y - 10 = 0',
        points: [{ x: 2, y: 3 }],
        parameters: { A: 3, B: 4, C: -10 },
        type: 'point_to_line_distance',
        context: { difficulty: 'intermediate', topic: 'Point to Line Distance' },
        subparts: [
            'Given: Point P(2, 3), Line: 3x + 4y - 10 = 0',
            'Formula: d = |Ax₀ + By₀ + C|/√(A² + B²)',
            'A = 3, B = 4, C = -10',
            'd = |3(2) + 4(3) - 10|/√(3² + 4²)',
            'd = |6 + 12 - 10|/√(9 + 16)',
            'd = |8|/√25 = 8/5 = 1.6 units'
        ],
        helper: 'Perpendicular distance is shortest distance',
        solution: 'd = 1.6 units',
        realWorldContext: 'Shortest path problems, quality control measurements'
    });

    // Problem 12: Angle Between Two Lines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Angle Between Two Lines',
        problem: 'Find angle between lines y = 2x + 1 and y = -x + 3',
        parameters: { slope1: 2, slope2: -1 },
        type: 'angle_between_lines',
        context: { difficulty: 'intermediate', topic: 'Angle Between Lines' },
        subparts: [
            'Given: Line 1: y = 2x + 1 (m₁ = 2)',
            '       Line 2: y = -x + 3 (m₂ = -1)',
            'Formula: tan θ = |(m₂-m₁)/(1+m₁m₂)|',
            'tan θ = |(-1-2)/(1+2(-1))|',
            'tan θ = |-3/(1-2)| = |-3/-1| = 3',
            'θ = arctan(3) ≈ 71.57°'
        ],
        helper: 'Use tangent difference formula for acute angle',
        solution: 'θ ≈ 71.57°',
        realWorldContext: 'Intersection angles, geometric constructions'
    });

    // Problem 13: Centroid of Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Centroid of Triangle',
        problem: 'Find centroid of triangle with vertices A(0, 0), B(6, 0), C(3, 6)',
        points: [{ x: 0, y: 0 }, { x: 6, y: 0 }, { x: 3, y: 6 }],
        type: 'centroid',
        context: { difficulty: 'intermediate', topic: 'Triangle Centers' },
        subparts: [
            'Given: A(0, 0), B(6, 0), C(3, 6)',
            'Centroid formula: G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
            'Gₓ = (0 + 6 + 3)/3 = 9/3 = 3',
            'Gᵧ = (0 + 0 + 6)/3 = 6/3 = 2',
            'Centroid: G(3, 2)',
            'Property: Divides each median in ratio 2:1'
        ],
        helper: 'Average of all three vertex coordinates',
        solution: 'G(3, 2)',
        realWorldContext: 'Center of mass, balance point of triangular objects'
    });

    // Problem 14: Reflection of Point
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Reflection Across X-axis',
        problem: 'Find reflection of point P(3, 4) across the x-axis',
        points: [{ x: 3, y: 4 }],
        parameters: { axis: 'x' },
        type: 'reflection',
        context: { difficulty: 'beginner', topic: 'Transformations' },
        subparts: [
            'Given: P(3, 4), reflect across x-axis',
            'Reflection across x-axis: (x, y) → (x, -y)',
            'P\'(3, -4)',
            'x-coordinate stays same',
            'y-coordinate changes sign',
            'Reflected point: P\'(3, -4)'
        ],
        helper: 'X-axis reflection: keep x same, negate y',
        solution: 'P\'(3, -4)',
        realWorldContext: 'Mirror images, symmetry in design'
    });

    // Problem 15: Polar to Cartesian Conversion
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polar to Cartesian Conversion',
        problem: 'Convert polar coordinates (5, 60°) to cartesian coordinates',
        parameters: { r: 5, theta: Math.PI / 3, conversionType: 'polar_to_cartesian' },
        type: 'polar_conversion',
        context: { difficulty: 'intermediate', topic: 'Polar Coordinates' },
        subparts: [
            'Given: r = 5, θ = 60° = π/3 radians',
            'Conversion formulas:',
            'x = r cos θ',
            'y = r sin θ',
            'x = 5 cos(60°) = 5 × 0.5 = 2.5',
            'y = 5 sin(60°) = 5 × 0.866 = 4.33',
            'Cartesian: (2.5, 4.33)'
        ],
        helper: 'Use x = r cos θ, y = r sin θ',
        solution: '(2.5, 4.33)',
        realWorldContext: 'Navigation, radar systems, polar plotting'
    });

    return relatedProblems;
}


function generateRelatedSurfaceAreaVolume() {
    const relatedProblems = [];

    // Problem 1: Cube
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Cube - Basic',
        problem: 'Find surface area and volume of a cube with edge length 5 cm',
        shapeType: 'cube',
        dimensions: { side: 5 },
        context: { difficulty: 'beginner', topic: 'Cube Calculations' },
        subparts: [
            'Given: Edge length s = 5 cm',
            'Surface Area = 6s²',
            'SA = 6(5)² = 6(25) = 150 cm²',
            'Volume = s³',
            'V = (5)³ = 125 cm³'
        ],
        helper: 'Cube has 6 identical square faces',
        solution: 'SA = 150 cm², V = 125 cm³',
        realWorldContext: 'Packaging boxes, dice, cubic containers'
    });

    // Problem 2: Rectangular Prism
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rectangular Prism - Box',
        problem: 'Find surface area and volume of a box: length 8 cm, width 5 cm, height 3 cm',
        shapeType: 'rectangular_prism',
        dimensions: { length: 8, width: 5, height: 3 },
        context: { difficulty: 'beginner', topic: 'Rectangular Prism Calculations' },
        subparts: [
            'Given: l = 8 cm, w = 5 cm, h = 3 cm',
            'Surface Area = 2(lw + lh + wh)',
            'SA = 2(8×5 + 8×3 + 5×3)',
            'SA = 2(40 + 24 + 15) = 2(79) = 158 cm²',
            'Volume = lwh',
            'V = 8 × 5 × 3 = 120 cm³'
        ],
        helper: 'Calculate three different face areas and double',
        solution: 'SA = 158 cm², V = 120 cm³',
        realWorldContext: 'Shipping boxes, room dimensions, storage containers'
    });

    // Problem 3: Sphere
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sphere - Ball',
        problem: 'Find surface area and volume of a sphere with radius 6 cm',
        shapeType: 'sphere',
        dimensions: { radius: 6 },
        context: { difficulty: 'intermediate', topic: 'Sphere Calculations' },
        subparts: [
            'Given: radius r = 6 cm',
            'Surface Area = 4πr²',
            'SA = 4π(6)² = 4π(36) = 144π ≈ 452.39 cm²',
            'Volume = (4/3)πr³',
            'V = (4/3)π(6)³ = (4/3)π(216) = 288π ≈ 904.78 cm³'
        ],
        helper: 'Remember: 4πr² for surface, (4/3)πr³ for volume',
        solution: 'SA ≈ 452.39 cm², V ≈ 904.78 cm³',
        realWorldContext: 'Balls, planets, spherical tanks'
    });

    // Problem 4: Cylinder
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cylinder - Can',
        problem: 'Find surface area and volume of a cylinder: radius 4 cm, height 10 cm',
        shapeType: 'cylinder',
        dimensions: { radius: 4, height: 10 },
        context: { difficulty: 'intermediate', topic: 'Cylinder Calculations' },
        subparts: [
            'Given: r = 4 cm, h = 10 cm',
            'Base Area = πr² = π(4)² = 16π cm²',
            'Lateral Area = 2πrh = 2π(4)(10) = 80π cm²',
            'Total Surface Area = 2πr² + 2πrh',
            'SA = 2(16π) + 80π = 32π + 80π = 112π ≈ 351.86 cm²',
            'Volume = πr²h',
            'V = π(4)²(10) = 160π ≈ 502.65 cm³'
        ],
        helper: 'Two circular bases plus curved lateral surface',
        solution: 'SA ≈ 351.86 cm², V ≈ 502.65 cm³',
        realWorldContext: 'Cans, pipes, cylindrical containers'
    });

    // Problem 5: Cone
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cone - Ice Cream Cone',
        problem: 'Find surface area and volume of a cone: radius 3 cm, height 4 cm',
        shapeType: 'cone',
        dimensions: { radius: 3, height: 4 },
        context: { difficulty: 'intermediate', topic: 'Cone Calculations' },
        subparts: [
            'Given: r = 3 cm, h = 4 cm',
            'Calculate slant height: l = √(r² + h²)',
            'l = √(3² + 4²) = √(9 + 16) = √25 = 5 cm',
            'Base Area = πr² = π(3)² = 9π cm²',
            'Lateral Area = πrl = π(3)(5) = 15π cm²',
            'Total SA = πr² + πrl = 9π + 15π = 24π ≈ 75.40 cm²',
            'Volume = (1/3)πr²h',
            'V = (1/3)π(3)²(4) = (1/3)π(36) = 12π ≈ 37.70 cm³'
        ],
        helper: 'Use Pythagorean theorem for slant height, volume is 1/3 of cylinder',
        solution: 'SA ≈ 75.40 cm², V ≈ 37.70 cm³',
        realWorldContext: 'Funnels, ice cream cones, traffic cones'
    });

    // Problem 6: Square Pyramid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square Pyramid',
        problem: 'Find surface area and volume: base side 6 cm, height 4 cm',
        shapeType: 'pyramid',
        dimensions: { baseLength: 6, height: 4, baseType: 'square' },
        context: { difficulty: 'intermediate', topic: 'Pyramid Calculations' },
        subparts: [
            'Given: base side s = 6 cm, height h = 4 cm',
            'Base Area = s² = 6² = 36 cm²',
            'Slant height: l = √(h² + (s/2)²)',
            'l = √(4² + 3²) = √(16 + 9) = √25 = 5 cm',
            'Lateral Area = 2sl = 2(6)(5) = 60 cm²',
            'Total SA = s² + 2sl = 36 + 60 = 96 cm²',
            'Volume = (1/3)Bh = (1/3)(36)(4) = 48 cm³'
        ],
        helper: 'Pyramid volume is always 1/3 of corresponding prism',
        solution: 'SA = 96 cm², V = 48 cm³',
        realWorldContext: 'Egyptian pyramids, roof structures'
    });

    // Problem 7: Triangular Prism
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangular Prism',
        problem: 'Find SA and volume: triangle base 6 cm, height 4 cm, prism length 10 cm',
        shapeType: 'triangular_prism',
        dimensions: { baseLength: 6, baseHeight: 4, prismLength: 10 },
        context: { difficulty: 'intermediate', topic: 'Triangular Prism Calculations' },
        subparts: [
            'Given: triangle base = 6 cm, height = 4 cm, length = 10 cm',
            'Triangle Area = (1/2)bh = (1/2)(6)(4) = 12 cm²',
            'Hypotenuse = √(6² + 4²) = √52 ≈ 7.21 cm',
            'Perimeter = 6 + 4 + 7.21 = 17.21 cm',
            'Lateral Area = perimeter × length = 17.21 × 10 = 172.1 cm²',
            'Total SA = 2(triangle area) + lateral',
            'SA = 2(12) + 172.1 = 196.1 cm²',
            'Volume = triangle area × length = 12 × 10 = 120 cm³'
        ],
        helper: 'Two triangular bases plus three rectangular faces',
        solution: 'SA ≈ 196.1 cm², V = 120 cm³',
        realWorldContext: 'Roof trusses, prism optics, tent structures'
    });

    // Problem 8: Hemisphere
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hemisphere - Dome',
        problem: 'Find surface area and volume of a hemisphere with radius 5 cm',
        shapeType: 'hemisphere',
        dimensions: { radius: 5 },
        context: { difficulty: 'intermediate', topic: 'Hemisphere Calculations' },
        subparts: [
            'Given: radius r = 5 cm',
            'Curved Surface Area = 2πr²',
            'CSA = 2π(5)² = 50π ≈ 157.08 cm²',
            'Base Area = πr² = π(5)² = 25π cm²',
            'Total SA = 2πr² + πr² = 3πr²',
            'TSA = 3π(5)² = 75π ≈ 235.62 cm²',
            'Volume = (2/3)πr³',
            'V = (2/3)π(5)³ = (2/3)π(125) = 250π/3 ≈ 261.80 cm³'
        ],
        helper: 'Half of sphere for curved surface and volume',
        solution: 'TSA ≈ 235.62 cm², V ≈ 261.80 cm³',
        realWorldContext: 'Domes, bowls, planetariums'
    });

    // Problem 9: Torus
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Torus - Donut Shape',
        problem: 'Find SA and volume: major radius 10 cm, minor radius 2 cm',
        shapeType: 'torus',
        dimensions: { majorRadius: 10, minorRadius: 2 },
        context: { difficulty: 'advanced', topic: 'Torus Calculations' },
        subparts: [
            'Given: major radius R = 10 cm, minor radius r = 2 cm',
            'Surface Area = 4π²Rr',
            'SA = 4π²(10)(2) = 80π² ≈ 789.57 cm²',
            'Volume = 2π²Rr²',
            'V = 2π²(10)(2)² = 2π²(10)(4) = 80π² ≈ 789.57 cm³'
        ],
        helper: 'Both formulas involve π² and both radii',
        solution: 'SA ≈ 789.57 cm², V ≈ 789.57 cm³',
        realWorldContext: 'O-rings, donuts, toroidal structures'
    });

    // Problem 10: Composite Shape
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Composite Shape - Cylinder with Hemisphere',
        problem: 'Cylinder (r=3, h=8) topped with hemisphere (r=3)',
        shapeType: 'composite',
        dimensions: {
            components: [
                { type: 'cylinder', dimensions: { radius: 3, height: 8 } },
                { type: 'hemisphere', dimensions: { radius: 3 } }
            ]
        },
        context: { difficulty: 'advanced', topic: 'Composite Shape Calculations' },
        subparts: [
            'Cylinder: r = 3 cm, h = 8 cm',
            'Cylinder SA = 2πr² + 2πrh = 2π(9) + 2π(3)(8) = 18π + 48π = 66π',
            'Cylinder V = πr²h = π(9)(8) = 72π',
            'Hemisphere: r = 3 cm',
            'Hemisphere curved SA = 2πr² = 2π(9) = 18π',
            'Hemisphere V = (2/3)πr³ = (2/3)π(27) = 18π',
            'Total SA = cylinder lateral + bottom + hemisphere curved',
            'SA = 48π + 9π + 18π = 75π ≈ 235.62 cm²',
            'Total V = 72π + 18π = 90π ≈ 282.74 cm³'
        ],
        helper: 'Add volumes, subtract shared surfaces for SA',
        solution: 'SA ≈ 235.62 cm², V ≈ 282.74 cm³',
        realWorldContext: 'Complex containers, architectural designs'
    });

    return relatedProblems;
}


function generateRelatedSolidGeometry() {
    const relatedProblems = [];

    // Problem 1: Cube - Basic Properties
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Cube - Basic Properties',
        problem: 'Find the volume and surface area of a cube with edge length 5 cm',
        parameters: { side: 5 },
        type: 'cube',
        context: { difficulty: 'beginner', topic: 'Cube Properties' },
        subparts: [
            'Given: Edge length (a) = 5 cm',
            'Volume formula: V = a³',
            'V = 5³ = 125 cm³',
            'Surface area formula: SA = 6a²',
            'SA = 6 × 5² = 6 × 25 = 150 cm²',
            'Face diagonal: d_face = a√2 = 5√2 ≈ 7.07 cm',
            'Space diagonal: d_space = a√3 = 5√3 ≈ 8.66 cm'
        ],
        helper: 'Remember: cube has all edges equal, 6 faces',
        solution: 'V = 125 cm³, SA = 150 cm²',
        realWorldContext: 'Calculating storage space for cubic containers'
    });

    // Problem 2: Sphere - Volume and Surface Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sphere - Volume and Surface Area',
        problem: 'Find the volume and surface area of a sphere with radius 6 cm',
        parameters: { radius: 6 },
        type: 'sphere',
        context: { difficulty: 'beginner', topic: 'Sphere Properties' },
        subparts: [
            'Given: Radius (r) = 6 cm',
            'Volume formula: V = (4/3)πr³',
            'V = (4/3)π(6)³ = (4/3)π(216)',
            'V = 288π ≈ 904.78 cm³',
            'Surface area formula: SA = 4πr²',
            'SA = 4π(6)² = 4π(36)',
            'SA = 144π ≈ 452.39 cm²',
            'Diameter: d = 2r = 12 cm'
        ],
        helper: 'Don\'t forget the 4/3 coefficient in volume formula',
        solution: 'V = 288π cm³ ≈ 904.78 cm³, SA = 144π cm² ≈ 452.39 cm²',
        realWorldContext: 'Calculating ball or spherical tank capacity'
    });

    // Problem 3: Cylinder - Total Surface Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cylinder - Total Surface Area',
        problem: 'Find volume and total surface area of a cylinder with radius 4 cm and height 10 cm',
        parameters: { radius: 4, height: 10 },
        type: 'cylinder',
        context: { difficulty: 'intermediate', topic: 'Cylinder Properties' },
        subparts: [
            'Given: Radius (r) = 4 cm, Height (h) = 10 cm',
            'Volume: V = πr²h',
            'V = π(4)²(10) = π(16)(10) = 160π ≈ 502.65 cm³',
            'Lateral surface area: LSA = 2πrh',
            'LSA = 2π(4)(10) = 80π ≈ 251.33 cm²',
            'Base area: A_base = πr² = π(16) = 16π cm²',
            'Total surface area: SA = 2πr² + 2πrh = 2πr(r + h)',
            'SA = 2π(4)(4 + 10) = 2π(4)(14) = 112π ≈ 351.86 cm²'
        ],
        helper: 'Total SA includes both bases and lateral surface',
        solution: 'V = 160π cm³ ≈ 502.65 cm³, SA = 112π cm² ≈ 351.86 cm²',
        realWorldContext: 'Can or pipe capacity and material needed'
    });

    // Problem 4: Cone - With Slant Height
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cone - With Slant Height',
        problem: 'Find volume and surface area of a cone with radius 5 cm and height 12 cm',
        parameters: { radius: 5, height: 12 },
        type: 'cone',
        context: { difficulty: 'intermediate', topic: 'Cone Properties' },
        subparts: [
            'Given: Radius (r) = 5 cm, Height (h) = 12 cm',
            'Step 1: Find slant height using Pythagorean theorem',
            'l = √(r² + h²) = √(5² + 12²) = √(25 + 144) = √169 = 13 cm',
            'Step 2: Calculate volume',
            'V = (1/3)πr²h = (1/3)π(5)²(12)',
            'V = (1/3)π(25)(12) = 100π ≈ 314.16 cm³',
            'Step 3: Calculate surface area',
            'LSA = πrl = π(5)(13) = 65π cm²',
            'Base area = πr² = 25π cm²',
            'Total SA = πr² + πrl = πr(r + l) = π(5)(5 + 13) = 90π ≈ 282.74 cm²'
        ],
        helper: 'Use Pythagorean theorem to find slant height first',
        solution: 'V = 100π cm³ ≈ 314.16 cm³, SA = 90π cm² ≈ 282.74 cm²',
        realWorldContext: 'Ice cream cone or funnel calculations'
    });

    // Problem 5: Rectangular Prism
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Rectangular Prism (Box)',
        problem: 'Find volume and surface area of a box with length 8 cm, width 5 cm, height 3 cm',
        parameters: { length: 8, width: 5, height: 3 },
        type: 'rectangular_prism',
        context: { difficulty: 'beginner', topic: 'Rectangular Prism Properties' },
        subparts: [
            'Given: Length (l) = 8 cm, Width (w) = 5 cm, Height (h) = 3 cm',
            'Volume: V = l × w × h',
            'V = 8 × 5 × 3 = 120 cm³',
            'Surface area: SA = 2(lw + lh + wh)',
            'SA = 2(8×5 + 8×3 + 5×3)',
            'SA = 2(40 + 24 + 15)',
            'SA = 2(79) = 158 cm²',
            'Space diagonal: d = √(l² + w² + h²) = √(64 + 25 + 9) = √98 ≈ 9.90 cm'
        ],
        helper: 'Box shape - add areas of all 6 rectangular faces',
        solution: 'V = 120 cm³, SA = 158 cm²',
        realWorldContext: 'Shipping box or room dimensions'
    });

    // Problem 6: Pyramid - Square Base
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square Pyramid',
        problem: 'Find volume of a square pyramid with base side 6 cm and height 8 cm',
        parameters: { baseLength: 6, height: 8 },
        type: 'pyramid',
        context: { difficulty: 'intermediate', topic: 'Pyramid Properties' },
        subparts: [
            'Given: Base side (a) = 6 cm, Height (h) = 8 cm',
            'Base area: B = a² = 6² = 36 cm²',
            'Volume: V = (1/3)Bh',
            'V = (1/3)(36)(8)',
            'V = (1/3)(288) = 96 cm³',
            'Slant height: l = √(h² + (a/2)²) = √(64 + 9) = √73 ≈ 8.54 cm',
            'Lateral area: LA = 2al = 2(6)(8.54) ≈ 102.48 cm²',
            'Total SA = a² + 2al = 36 + 102.48 ≈ 138.48 cm²'
        ],
        helper: 'Pyramid volume is 1/3 of prism with same base and height',
        solution: 'V = 96 cm³',
        realWorldContext: 'Egyptian pyramid or pyramid-shaped structures'
    });

    // Problem 7: Hemisphere
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hemisphere (Half Sphere)',
        problem: 'Find volume and surface area of a hemisphere with radius 9 cm',
        parameters: { radius: 9 },
        type: 'hemisphere',
        context: { difficulty: 'intermediate', topic: 'Hemisphere Properties' },
        subparts: [
            'Given: Radius (r) = 9 cm',
            'Volume: V = (2/3)πr³',
            'V = (2/3)π(9)³ = (2/3)π(729)',
            'V = 486π ≈ 1526.81 cm³',
            'Curved surface area: CSA = 2πr²',
            'CSA = 2π(9)² = 2π(81) = 162π ≈ 508.94 cm²',
            'Base area: A_base = πr² = 81π cm²',
            'Total surface area: SA = 2πr² + πr² = 3πr²',
            'SA = 3π(81) = 243π ≈ 763.41 cm²'
        ],
        helper: 'Hemisphere is exactly half of a sphere',
        solution: 'V = 486π cm³ ≈ 1526.81 cm³, SA = 243π cm² ≈ 763.41 cm²',
        realWorldContext: 'Dome structures or half-sphere containers'
    });

    // Problem 8: Triangular Prism
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triangular Prism',
        problem: 'Find volume of triangular prism with triangle base 6 cm, height 4 cm, prism length 10 cm',
        parameters: { baseLength: 6, baseHeight: 4, prismHeight: 10 },
        type: 'triangular_prism',
        context: { difficulty: 'intermediate', topic: 'Triangular Prism Properties' },
        subparts: [
            'Given: Triangle base (b) = 6 cm, Triangle height (h) = 4 cm, Prism length (L) = 10 cm',
            'Triangle area: A_triangle = (1/2)bh',
            'A_triangle = (1/2)(6)(4) = 12 cm²',
            'Volume: V = A_triangle × L',
            'V = 12 × 10 = 120 cm³',
            'For surface area (assuming right triangle):',
            'Hypotenuse: c = √(6² + 4²) = √52 ≈ 7.21 cm',
            'Perimeter: P = 6 + 4 + 7.21 = 17.21 cm',
            'Lateral area: LA = P × L = 17.21 × 10 = 172.1 cm²',
            'Total SA = 2(12) + 172.1 = 196.1 cm²'
        ],
        helper: 'Volume = (base triangle area) × length',
        solution: 'V = 120 cm³',
        realWorldContext: 'Tent or triangular column structures'
    });

    // Problem 9: Torus (Donut Shape)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Torus (Donut Shape)',
        problem: 'Find volume and surface area of torus with major radius 8 cm and minor radius 3 cm',
        parameters: { majorRadius: 8, minorRadius: 3 },
        type: 'torus',
        context: { difficulty: 'advanced', topic: 'Torus Properties' },
        subparts: [
            'Given: Major radius (R) = 8 cm, Minor radius (r) = 3 cm',
            'Volume: V = 2π²Rr²',
            'V = 2π²(8)(3)²',
            'V = 2π²(8)(9) = 144π² ≈ 1421.22 cm³',
            'Surface area: SA = 4π²Rr',
            'SA = 4π²(8)(3)',
            'SA = 96π² ≈ 947.48 cm²',
            'Alternative volume formula: V = (πr²)(2πR)',
            'V = (π × 9)(2π × 8) = 9π × 16π = 144π²'
        ],
        helper: 'Torus formulas involve π² (pi squared)',
        solution: 'V = 144π² cm³ ≈ 1421.22 cm³, SA = 96π² cm² ≈ 947.48 cm²',
        realWorldContext: 'Donut, bagel, or O-ring calculations'
    });

    // Problem 10: Ellipsoid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ellipsoid',
        problem: 'Find volume of ellipsoid with semi-axes a=5 cm, b=3 cm, c=4 cm',
        parameters: { semiAxisA: 5, semiAxisB: 3, semiAxisC: 4 },
        type: 'ellipsoid',
        context: { difficulty: 'advanced', topic: 'Ellipsoid Properties' },
        subparts: [
            'Given: Semi-axis a = 5 cm, b = 3 cm, c = 4 cm',
            'Volume formula: V = (4/3)πabc',
            'V = (4/3)π(5)(3)(4)',
            'V = (4/3)π(60)',
            'V = 80π ≈ 251.33 cm³',
            'Note: When a = b = c = r, this becomes sphere formula V = (4/3)πr³',
            'This ellipsoid is not a sphere since axes differ',
            'Surface area requires complex approximation formulas'
        ],
        helper: 'Ellipsoid extends sphere concept to three different axes',
        solution: 'V = 80π cm³ ≈ 251.33 cm³',
        realWorldContext: 'Egg shape or Earth (oblate spheroid) approximation'
    });

    // Problem 11: Frustum of Cone
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Frustum of Cone (Truncated Cone)',
        problem: 'Find volume of cone frustum with bottom radius 7 cm, top radius 4 cm, height 9 cm',
        parameters: { bottomRadius: 7, topRadius: 4, height: 9 },
        type: 'frustum',
        context: { difficulty: 'advanced', topic: 'Frustum Properties' },
        subparts: [
            'Given: Bottom radius (R) = 7 cm, Top radius (r) = 4 cm, Height (h) = 9 cm',
            'Volume formula: V = (1/3)πh(R² + Rr + r²)',
            'V = (1/3)π(9)(7² + 7×4 + 4²)',
            'V = (1/3)π(9)(49 + 28 + 16)',
            'V = (1/3)π(9)(93)',
            'V = 279π ≈ 876.46 cm³',
            'Slant height: l = √(h² + (R-r)²) = √(81 + 9) = √90 ≈ 9.49 cm',
            'Lateral area: LA = π(R + r)l = π(11)(9.49) ≈ 104.36π cm²'
        ],
        helper: 'Frustum is what remains after cutting top off cone',
        solution: 'V = 279π cm³ ≈ 876.46 cm³',
        realWorldContext: 'Bucket, lampshade, or truncated cone containers'
    });

    // Problem 12: Composite Solid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Composite Solid (Cylinder + Hemisphere)',
        problem: 'Find total volume of cylinder (r=5cm, h=10cm) with hemisphere on top',
        parameters: { 
            components: [
                { type: 'cylinder', parameters: { radius: 5, height: 10 }, operation: 'add' },
                { type: 'hemisphere', parameters: { radius: 5 }, operation: 'add' }
            ]
        },
        type: 'composite_solid',
        context: { difficulty: 'advanced', topic: 'Composite Solids' },
        subparts: [
            'Given: Cylinder radius = 5 cm, height = 10 cm',
            '       Hemisphere radius = 5 cm (same as cylinder)',
            'Cylinder volume: V_cyl = πr²h = π(5)²(10) = 250π cm³',
            'Hemisphere volume: V_hem = (2/3)πr³ = (2/3)π(5)³',
            'V_hem = (2/3)π(125) = (250/3)π cm³',
            'Total volume: V_total = V_cyl + V_hem',
            'V_total = 250π + (250/3)π',
            'V_total = (750/3)π + (250/3)π = (1000/3)π ≈ 1047.20 cm³'
        ],
        helper: 'Add volumes of individual components',
        solution: 'V = (1000/3)π cm³ ≈ 1047.20 cm³',
        realWorldContext: 'Capsule shape or silo with rounded top'
    });

    return relatedProblems;
}


// ============== TRIGONOMETRIC RATIOS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigRatios() {
    const relatedProblems = [];

    // Problem 1: Basic Sine
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Evaluate Basic Sine',
        problem: 'Evaluate: sin(30°)',
        parameters: { angle: 30, function: 'sin' },
        type: 'trig_ratios',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Ratios' },
        subparts: [
            'Given: sin(30°)',
            'Recognize 30° as a special angle',
            'From 30-60-90 triangle: sides 1 : √3 : 2',
            'sin(30°) = opposite/hypotenuse = 1/2',
            'Exact value: 1/2',
            'Decimal: 0.5'
        ],
        helper: 'Use special angle values from 30-60-90 triangle',
        solution: 'sin(30°) = 1/2',
        realWorldContext: 'Foundation for all trigonometric calculations'
    });

    // Problem 2: Basic Cosine
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Evaluate Basic Cosine',
        problem: 'Evaluate: cos(45°)',
        parameters: { angle: 45, function: 'cos' },
        type: 'trig_ratios',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Ratios' },
        subparts: [
            'Given: cos(45°)',
            'Recognize 45° as a special angle',
            'From 45-45-90 triangle: sides 1 : 1 : √2',
            'cos(45°) = adjacent/hypotenuse = 1/√2',
            'Rationalize: (1/√2) × (√2/√2) = √2/2',
            'Exact value: √2/2',
            'Decimal: ≈ 0.7071'
        ],
        helper: 'Use special angle values from 45-45-90 triangle',
        solution: 'cos(45°) = √2/2',
        realWorldContext: 'Used in engineering and physics calculations'
    });

    // Problem 3: Tangent Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Evaluate Tangent',
        problem: 'Evaluate: tan(60°)',
        parameters: { angle: 60, function: 'tan' },
        type: 'trig_ratios',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Ratios' },
        subparts: [
            'Given: tan(60°)',
            'Recognize 60° as a special angle',
            'From 30-60-90 triangle: sides 1 : √3 : 2',
            'tan(60°) = opposite/adjacent = √3/1 = √3',
            'Exact value: √3',
            'Decimal: ≈ 1.732',
            'Alternative: tan(60°) = sin(60°)/cos(60°) = (√3/2)/(1/2) = √3'
        ],
        helper: 'tan = opposite/adjacent or sin/cos',
        solution: 'tan(60°) = √3',
        realWorldContext: 'Finding slopes and angles of inclination'
    });

    // Problem 4: Quadrant Analysis
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadrant Analysis',
        problem: 'Evaluate: sin(150°)',
        parameters: { angle: 150, function: 'sin' },
        type: 'trig_ratios',
        context: { difficulty: 'intermediate', topic: 'Quadrant-Based Evaluation' },
        subparts: [
            'Given: sin(150°)',
            'Determine quadrant: 150° is in Quadrant II (90° < 150° < 180°)',
            'Find reference angle: 180° - 150° = 30°',
            'In Quadrant II, sine is positive',
            'sin(150°) = sin(30°) = 1/2',
            'Exact value: 1/2',
            'Note: Sine is positive in Quadrants I and II'
        ],
        helper: 'Use reference angle and quadrant signs (ASTC rule)',
        solution: 'sin(150°) = 1/2',
        realWorldContext: 'Navigation and coordinate geometry'
    });

    // Problem 5: Negative Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Negative Angle',
        problem: 'Evaluate: cos(-45°)',
        parameters: { angle: -45, function: 'cos' },
        type: 'trig_ratios',
        context: { difficulty: 'intermediate', topic: 'Negative Angles' },
        subparts: [
            'Given: cos(-45°)',
            'Cosine is an even function: cos(-θ) = cos(θ)',
            'cos(-45°) = cos(45°)',
            'cos(45°) = √2/2',
            'Exact value: √2/2',
            'Note: Even function means symmetric about y-axis'
        ],
        helper: 'Use even/odd function properties',
        solution: 'cos(-45°) = √2/2',
        realWorldContext: 'Rotations in both directions'
    });

    // Problem 6: Reciprocal Function - Cosecant
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Reciprocal Function',
        problem: 'Evaluate: csc(30°)',
        parameters: { angle: 30, function: 'csc' },
        type: 'trig_ratios',
        context: { difficulty: 'intermediate', topic: 'Reciprocal Trigonometric Functions' },
        subparts: [
            'Given: csc(30°)',
            'Cosecant is reciprocal of sine: csc(θ) = 1/sin(θ)',
            'csc(30°) = 1/sin(30°)',
            'sin(30°) = 1/2',
            'csc(30°) = 1/(1/2) = 2',
            'Exact value: 2',
            'Alternatively: csc = hypotenuse/opposite = 2/1 = 2'
        ],
        helper: 'csc(θ) = 1/sin(θ)',
        solution: 'csc(30°) = 2',
        realWorldContext: 'Used in advanced physics and engineering'
    });

    // Problem 7: Secant Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Secant Function',
        problem: 'Evaluate: sec(60°)',
        parameters: { angle: 60, function: 'sec' },
        type: 'trig_ratios',
        context: { difficulty: 'intermediate', topic: 'Reciprocal Trigonometric Functions' },
        subparts: [
            'Given: sec(60°)',
            'Secant is reciprocal of cosine: sec(θ) = 1/cos(θ)',
            'sec(60°) = 1/cos(60°)',
            'cos(60°) = 1/2',
            'sec(60°) = 1/(1/2) = 2',
            'Exact value: 2',
            'Alternatively: sec = hypotenuse/adjacent = 2/1 = 2'
        ],
        helper: 'sec(θ) = 1/cos(θ)',
        solution: 'sec(60°) = 2',
        realWorldContext: 'Optics and wave physics'
    });

    return relatedProblems;
}

// ============== SPECIAL ANGLES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSpecialAngles() {
    const relatedProblems = [];

    // Problem 1: 0° Special Angle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: '0° Special Angle',
        problem: 'Find exact values: sin(0°), cos(0°), tan(0°)',
        parameters: { angle: 0, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'beginner', topic: 'Fundamental Special Angles' },
        subparts: [
            'Given: Evaluate all trig functions at 0°',
            'On unit circle: point at (1, 0)',
            'sin(0°) = y-coordinate = 0',
            'cos(0°) = x-coordinate = 1',
            'tan(0°) = sin(0°)/cos(0°) = 0/1 = 0',
            'Exact values: sin(0°) = 0, cos(0°) = 1, tan(0°) = 0'
        ],
        helper: 'Use unit circle coordinates at 0°',
        solution: 'sin(0°) = 0, cos(0°) = 1, tan(0°) = 0',
        realWorldContext: 'Starting point for periodic motion'
    });

    // Problem 2: 90° Special Angle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: '90° Special Angle',
        problem: 'Find exact values: sin(90°), cos(90°)',
        parameters: { angle: 90, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'beginner', topic: 'Fundamental Special Angles' },
        subparts: [
            'Given: Evaluate trig functions at 90°',
            'On unit circle: point at (0, 1)',
            'sin(90°) = y-coordinate = 1',
            'cos(90°) = x-coordinate = 0',
            'tan(90°) = sin(90°)/cos(90°) = 1/0 = undefined',
            'Note: Tangent has vertical asymptote at 90°',
            'Exact values: sin(90°) = 1, cos(90°) = 0, tan(90°) = undefined'
        ],
        helper: 'Use unit circle; tan is undefined when cos = 0',
        solution: 'sin(90°) = 1, cos(90°) = 0',
        realWorldContext: 'Maximum amplitude in oscillations'
    });

    // Problem 3: 30-60-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '30-60-90 Triangle',
        problem: 'Derive all trig ratios for 30° using special triangle',
        parameters: { angle: 30, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'intermediate', topic: 'Special Triangle Derivation' },
        subparts: [
            'Given: 30-60-90 triangle with hypotenuse 2',
            'Side ratios: 1 : √3 : 2 (opposite 30° : opposite 60° : hypotenuse)',
            'For 30° angle:',
            'sin(30°) = opposite/hypotenuse = 1/2',
            'cos(30°) = adjacent/hypotenuse = √3/2',
            'tan(30°) = opposite/adjacent = 1/√3 = √3/3',
            'csc(30°) = 2, sec(30°) = 2√3/3, cot(30°) = √3'
        ],
        helper: 'Use 30-60-90 triangle side ratios: 1 : √3 : 2',
        solution: 'sin(30°)=1/2, cos(30°)=√3/2, tan(30°)=√3/3',
        realWorldContext: 'Foundation for all special angle calculations'
    });

    // Problem 4: 45-45-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '45-45-90 Triangle',
        problem: 'Derive all trig ratios for 45° using special triangle',
        parameters: { angle: 45, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'intermediate', topic: 'Special Triangle Derivation' },
        subparts: [
            'Given: 45-45-90 isosceles right triangle',
            'Side ratios: 1 : 1 : √2 (leg : leg : hypotenuse)',
            'For 45° angle:',
            'sin(45°) = opposite/hypotenuse = 1/√2 = √2/2',
            'cos(45°) = adjacent/hypotenuse = 1/√2 = √2/2',
            'tan(45°) = opposite/adjacent = 1/1 = 1',
            'Note: sin(45°) = cos(45°) due to isosceles property',
            'csc(45°) = √2, sec(45°) = √2, cot(45°) = 1'
        ],
        helper: 'Use 45-45-90 triangle side ratios: 1 : 1 : √2',
        solution: 'sin(45°)=cos(45°)=√2/2, tan(45°)=1',
        realWorldContext: 'Equal x and y components in physics'
    });

    // Problem 5: 180° Special Angle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: '180° Special Angle',
        problem: 'Find exact values: sin(180°), cos(180°), tan(180°)',
        parameters: { angle: 180, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'beginner', topic: 'Fundamental Special Angles' },
        subparts: [
            'Given: Evaluate trig functions at 180°',
            'On unit circle: point at (-1, 0)',
            'sin(180°) = y-coordinate = 0',
            'cos(180°) = x-coordinate = -1',
            'tan(180°) = sin(180°)/cos(180°) = 0/(-1) = 0',
            'Exact values: sin(180°) = 0, cos(180°) = -1, tan(180°) = 0',
            'Note: Opposite direction from 0°'
        ],
        helper: 'Use unit circle; 180° is halfway around',
        solution: 'sin(180°) = 0, cos(180°) = -1, tan(180°) = 0',
        realWorldContext: 'Phase shift in periodic motion'
    });

    // Problem 6: 270° Special Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '270° Special Angle',
        problem: 'Find exact values: sin(270°), cos(270°)',
        parameters: { angle: 270, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'intermediate', topic: 'Fundamental Special Angles' },
        subparts: [
            'Given: Evaluate trig functions at 270°',
            'On unit circle: point at (0, -1)',
            'sin(270°) = y-coordinate = -1',
            'cos(270°) = x-coordinate = 0',
            'tan(270°) = sin(270°)/cos(270°) = -1/0 = undefined',
            'Exact values: sin(270°) = -1, cos(270°) = 0',
            'Note: Three-quarters around the circle'
        ],
        helper: 'Use unit circle; vertical asymptote for tangent',
        solution: 'sin(270°) = -1, cos(270°) = 0',
        realWorldContext: 'Minimum amplitude in oscillations'
    });

    // Problem 7: Co-function Identity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Co-function Identity',
        problem: 'Verify: sin(60°) = cos(30°)',
        parameters: { angle: 60, function: 'sin' },
        type: 'special_angles',
        context: { difficulty: 'intermediate', topic: 'Co-function Relationships' },
        subparts: [
            'Given: Verify sin(60°) = cos(30°)',
            'Calculate sin(60°):',
            'From 30-60-90 triangle: sin(60°) = √3/2',
            'Calculate cos(30°):',
            'From 30-60-90 triangle: cos(30°) = √3/2',
            'Both equal √3/2, so verified ✓',
            'General co-function identity: sin(θ) = cos(90° - θ)',
            '60° and 30° are complementary (60° + 30° = 90°)'
        ],
        helper: 'Co-functions of complementary angles are equal',
        solution: 'sin(60°) = cos(30°) = √3/2 ✓',
        realWorldContext: 'Complementary angles in right triangles'
    });

    return relatedProblems;
}

// ============== TRIGONOMETRIC IDENTITIES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigIdentities() {
    const relatedProblems = [];

    // Problem 1: Pythagorean Identity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pythagorean Identity',
        problem: 'Verify: sin²(θ) + cos²(θ) = 1 for θ = 30°',
        parameters: { 
            identity: 'sin²(θ) + cos²(θ) = 1', 
            angle: 30,
            toProve: 'sin²(θ) + cos²(θ) = 1'  // Add this
        },
        type: 'trig_identities',
        context: { difficulty: 'beginner', topic: 'Fundamental Pythagorean Identity' },
        subparts: [
            'Given: sin²(θ) + cos²(θ) = 1, verify for θ = 30°',
            'sin(30°) = 1/2',
            'cos(30°) = √3/2',
            'Calculate: sin²(30°) = (1/2)² = 1/4',
            'Calculate: cos²(30°) = (√3/2)² = 3/4',
            'Sum: 1/4 + 3/4 = 4/4 = 1 ✓',
            'Identity verified for θ = 30°',
            'Note: This identity holds for ALL angles'
        ],
        helper: 'Derived from x² + y² = 1 on unit circle',
        solution: '1/4 + 3/4 = 1 ✓',
        realWorldContext: 'Foundation for all trigonometric simplification'
    });

    // Problem 2: Reciprocal Identity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Reciprocal Identity',
        problem: 'Simplify: sin(θ) × csc(θ)',
        parameters: { 
            expression: 'sin(θ) × csc(θ)',
            toProve: 'sin(θ) × csc(θ) = 1'  // Add this
        },
        type: 'trig_identities',
        context: { difficulty: 'beginner', topic: 'Reciprocal Identities' },
        subparts: [
            'Given: sin(θ) × csc(θ)',
            'Recall: csc(θ) = 1/sin(θ)',
            'Substitute: sin(θ) × (1/sin(θ))',
            'Simplify: sin(θ)/sin(θ) = 1',
            'Result: 1',
            'Note: Any function times its reciprocal equals 1'
        ],
        helper: 'csc = 1/sin, sec = 1/cos, cot = 1/tan',
        solution: '1',
        realWorldContext: 'Simplifying complex trigonometric expressions'
    });

    // Problem 3: Quotient Identity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Quotient Identity',
        problem: 'Prove: tan(θ) = sin(θ)/cos(θ)',
        parameters: { 
            toProve: 'tan(θ) = sin(θ)/cos(θ)',
            leftSide: 'tan(θ)',
            rightSide: 'sin(θ)/cos(θ)'
        },
        type: 'trig_identities',
        context: { difficulty: 'intermediate', topic: 'Quotient Identities' },
        subparts: [
            'Given: Prove tan(θ) = sin(θ)/cos(θ)',
            'Start with definitions from unit circle or triangle:',
            'sin(θ) = opposite/hypotenuse',
            'cos(θ) = adjacent/hypotenuse',
            'tan(θ) = opposite/adjacent',
            'Divide sin by cos:',
            'sin(θ)/cos(θ) = (opposite/hypotenuse)/(adjacent/hypotenuse)',
            '= opposite/adjacent × hypotenuse/hypotenuse',
            '= opposite/adjacent = tan(θ) ✓',
            'Identity proved'
        ],
        helper: 'Use basic definitions from right triangle',
        solution: 'tan(θ) = sin(θ)/cos(θ) ✓',
        realWorldContext: 'Converting between trig functions'
    });

    // Problem 4: Simplify Using Identity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Simplify Using Identity',
        problem: 'Simplify: 1 - sin²(θ)',
        parameters: { 
            expression: '1 - sin²(θ)',
            toProve: '1 - sin²(θ) = cos²(θ)'
        },
        type: 'trig_identities',
        context: { difficulty: 'intermediate', topic: 'Applying Pythagorean Identity' },
        subparts: [
            'Given: 1 - sin²(θ)',
            'Recall Pythagorean identity: sin²(θ) + cos²(θ) = 1',
            'Rearrange: cos²(θ) = 1 - sin²(θ)',
            'Therefore: 1 - sin²(θ) = cos²(θ)',
            'Simplified result: cos²(θ)',
            'Alternative notation: (cos(θ))²'
        ],
        helper: 'Use sin²(θ) + cos²(θ) = 1',
        solution: 'cos²(θ)',
        realWorldContext: 'Simplifying trigonometric expressions in calculus'
    });

    // Problem 5: Tangent Pythagorean Identity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Tangent Pythagorean Identity',
        problem: 'Prove: 1 + tan²(θ) = sec²(θ)',
        parameters: { 
            toProve: '1 + tan²(θ) = sec²(θ)',
            leftSide: '1 + tan²(θ)',
            rightSide: 'sec²(θ)'
        },
        type: 'trig_identities',
        context: { difficulty: 'intermediate', topic: 'Pythagorean Identity Variations' },
        subparts: [
            'Given: Prove 1 + tan²(θ) = sec²(θ)',
            'Start with: sin²(θ) + cos²(θ) = 1',
            'Divide every term by cos²(θ):',
            'sin²(θ)/cos²(θ) + cos²(θ)/cos²(θ) = 1/cos²(θ)',
            'Simplify using quotient and reciprocal identities:',
            'tan²(θ) + 1 = sec²(θ)',
            'Or: 1 + tan²(θ) = sec²(θ) ✓',
            'Identity proved'
        ],
        helper: 'Divide Pythagorean identity by cos²(θ)',
        solution: '1 + tan²(θ) = sec²(θ) ✓',
        realWorldContext: 'Calculus integration techniques'
    });

    // Problem 6: Even-Odd Identity
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Even-Odd Identity',
        problem: 'Simplify: sin(-θ) + sin(θ)',
        parameters: { 
            expression: 'sin(-θ) + sin(θ)',
            toProve: 'sin(-θ) + sin(θ) = 0'
        },
        type: 'trig_identities',
        context: { difficulty: 'intermediate', topic: 'Even and Odd Functions' },
        subparts: [
            'Given: sin(-θ) + sin(θ)',
            'Recall: sin is an odd function',
            'Odd function property: sin(-θ) = -sin(θ)',
            'Substitute: -sin(θ) + sin(θ)',
            'Simplify: -sin(θ) + sin(θ) = 0',
            'Result: 0',
            'Note: cos(-θ) = cos(θ) because cos is even'
        ],
        helper: 'sin is odd, cos is even',
        solution: '0',
        realWorldContext: 'Symmetry in wave functions'
    });

    // Problem 7: Complex Identity Proof
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Identity Proof',
        problem: 'Prove: (sin(θ) + cos(θ))² = 1 + 2sin(θ)cos(θ)',
        parameters: { 
            toProve: '(sin(θ) + cos(θ))² = 1 + 2sin(θ)cos(θ)',
            leftSide: '(sin(θ) + cos(θ))²',
            rightSide: '1 + 2sin(θ)cos(θ)'
        },
        type: 'trig_identities',
        context: { difficulty: 'advanced', topic: 'Complex Identity Proofs' },
        subparts: [
            'Given: Prove (sin(θ) + cos(θ))² = 1 + 2sin(θ)cos(θ)',
            'Start with left side: (sin(θ) + cos(θ))²',
            'Expand using (a + b)² = a² + 2ab + b²:',
            '= sin²(θ) + 2sin(θ)cos(θ) + cos²(θ)',
            'Rearrange: sin²(θ) + cos²(θ) + 2sin(θ)cos(θ)',
            'Apply Pythagorean identity: sin²(θ) + cos²(θ) = 1',
            '= 1 + 2sin(θ)cos(θ)',
            'This matches the right side ✓',
            'Identity proved'
        ],
        helper: 'Expand square and use Pythagorean identity',
        solution: '(sin(θ) + cos(θ))² = 1 + 2sin(θ)cos(θ) ✓',
        realWorldContext: 'Double angle formula derivation'
    });

    return relatedProblems;
}

// ============== SINE AND COSINE RULES - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSineCosineRules() {
    const relatedProblems = [];

    // Problem 1: Law of Sines - Basic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Law of Sines - Find Side',
        problem: 'In triangle ABC, A = 30°, B = 45°, a = 10. Find b.',
        parameters: { 
            sides: { a: 10 },
            angles: { A: 30, B: 45 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Law of Sines Application' },
        subparts: [
            'Given: A = 30°, B = 45°, a = 10',
            'Find: side b',
            'Use Law of Sines: a/sin(A) = b/sin(B)',
            'Substitute: 10/sin(30°) = b/sin(45°)',
            '10/(1/2) = b/(√2/2)',
            '20 = b/(√2/2)',
            'b = 20 × (√2/2) = 10√2',
            'b ≈ 14.14',
            'Check: Larger angle opposite larger side ✓'
        ],
        helper: 'Use a/sin(A) = b/sin(B) = c/sin(C)',
        solution: 'b = 10√2 ≈ 14.14',
        realWorldContext: 'Surveying and navigation'
    });

    // Problem 2: Law of Sines - Find Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Law of Sines - Find Angle',
        problem: 'In triangle ABC, a = 8, b = 10, A = 40°. Find angle B.',
        parameters: {
            sides: { a: 8, b: 10 },
            angles: { A: 40 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Law of Sines - Angle Finding' },
        subparts: [
            'Given: a = 8, b = 10, A = 40°',
            'Find: angle B',
            'Use Law of Sines: a/sin(A) = b/sin(B)',
            'Substitute: 8/sin(40°) = 10/sin(B)',
            'Cross multiply: 8 × sin(B) = 10 × sin(40°)',
            'sin(B) = (10 × sin(40°))/8',
            'sin(B) = (10 × 0.6428)/8 ≈ 0.8035',
            'B = arcsin(0.8035) ≈ 53.5°',
            'Check: b > a, so B > A (53.5° > 40°) ✓'
        ],
        helper: 'Solve for sin(B), then use inverse sine',
        solution: 'B ≈ 53.5°',
        realWorldContext: 'Finding unknown angles in triangulation'
    });

    // Problem 3: Law of Cosines - Find Side (SAS)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Law of Cosines - Find Side',
        problem: 'In triangle ABC, a = 7, b = 9, C = 60°. Find c.',
        parameters: {
            sides: { a: 7, b: 9 },
            angles: { C: 60 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Law of Cosines - SAS Case' },
        subparts: [
            'Given: a = 7, b = 9, C = 60°',
            'Find: side c',
            'Use Law of Cosines: c² = a² + b² - 2ab×cos(C)',
            'Substitute: c² = 7² + 9² - 2(7)(9)×cos(60°)',
            'c² = 49 + 81 - 126×(1/2)',
            'c² = 130 - 63 = 67',
            'c = √67 ≈ 8.19',
            'Note: This is SAS (Side-Angle-Side) case'
        ],
        helper: 'Use c² = a² + b² - 2ab×cos(C) for SAS',
        solution: 'c = √67 ≈ 8.19',
        realWorldContext: 'Engineering and construction measurements'
    });

    // Problem 4: Law of Cosines - Find Angle (SSS)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Law of Cosines - Find Angle',
        problem: 'In triangle ABC, a = 5, b = 7, c = 9. Find angle C.',
        parameters: {
            sides: { a: 5, b: 7, c: 9 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Law of Cosines - SSS Case' },
        subparts: [
            'Given: a = 5, b = 7, c = 9',
            'Find: angle C',
            'Use Law of Cosines: cos(C) = (a² + b² - c²)/(2ab)',
            'Substitute: cos(C) = (5² + 7² - 9²)/(2×5×7)',
            'cos(C) = (25 + 49 - 81)/70',
            'cos(C) = -7/70 = -0.1',
            'C = arccos(-0.1) ≈ 95.7°',
            'Note: Negative cosine means obtuse angle (90° < C < 180°)',
            'This is SSS (Side-Side-Side) case'
        ],
        helper: 'Use cos(C) = (a² + b² - c²)/(2ab) for SSS',
        solution: 'C ≈ 95.7°',
        realWorldContext: 'Determining angles from known distances'
    });

    // Problem 5: Ambiguous Case (SSA)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ambiguous Case (SSA)',
        problem: 'In triangle ABC, a = 8, b = 10, A = 35°. Find possible values of B.',
        parameters: {
            sides: { a: 8, b: 10 },
            angles: { A: 35 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'advanced', topic: 'Ambiguous Case (SSA)' },
        subparts: [
            'Given: a = 8, b = 10, A = 35°',
            'Find: angle B (may have two solutions)',
            'Use Law of Sines: sin(B)/b = sin(A)/a',
            'sin(B) = b×sin(A)/a = 10×sin(35°)/8',
            'sin(B) = 10×0.5736/8 ≈ 0.717',
            'B₁ = arcsin(0.717) ≈ 45.8°',
            'B₂ = 180° - 45.8° = 134.2°',
            'Check if both are valid:',
            'For B₁: A + B₁ = 35° + 45.8° = 80.8° < 180° ✓',
            'For B₂: A + B₂ = 35° + 134.2° = 169.2° < 180° ✓',
            'Both solutions are valid (ambiguous case)'
        ],
        helper: 'SSA can have 0, 1, or 2 solutions',
        solution: 'B ≈ 45.8° or B ≈ 134.2°',
        realWorldContext: 'Multiple possible configurations in surveying'
    });

    // Problem 6: Complete Triangle Solution
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Triangle Solution',
        problem: 'Solve triangle ABC: a = 12, B = 55°, C = 70°',
        parameters: {
            sides: { a: 12 },
            angles: { B: 55, C: 70 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Complete Triangle Solution' },
        subparts: [
            'Given: a = 12, B = 55°, C = 70°',
            'Find: A, b, c',
            'Step 1: Find angle A',
            'A = 180° - B - C = 180° - 55° - 70° = 55°',
            'Step 2: Find side b using Law of Sines',
            'b/sin(B) = a/sin(A)',
            'b = a×sin(B)/sin(A) = 12×sin(55°)/sin(55°) = 12',
            'Step 3: Find side c using Law of Sines',
            'c/sin(C) = a/sin(A)',
            'c = a×sin(C)/sin(A) = 12×sin(70°)/sin(55°)',
            'c = 12×0.9397/0.8192 ≈ 13.76',
            'Solution: A = 55°, b = 12, c ≈ 13.76'
        ],
        helper: 'Find missing angle first, then use Law of Sines',
        solution: 'A = 55°, b = 12, c ≈ 13.76',
        realWorldContext: 'Complete surveying calculations'
    });

    // Problem 7: Area Using Sine
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Area Using Sine Formula',
        problem: 'Find area of triangle ABC: a = 8, b = 12, C = 45°',
        parameters: {
            sides: { a: 8, b: 12 },
            angles: { C: 45 }
        },
        type: 'sine_cosine_rules',
        context: { difficulty: 'intermediate', topic: 'Triangle Area Using Sine' },
        subparts: [
            'Given: a = 8, b = 12, C = 45°',
            'Find: Area of triangle',
            'Use formula: Area = (1/2)ab×sin(C)',
            'Substitute: Area = (1/2)×8×12×sin(45°)',
            'sin(45°) = √2/2 ≈ 0.7071',
            'Area = (1/2)×96×0.7071',
            'Area = 48×0.7071 ≈ 33.94 square units',
            'Note: This formula works when you know SAS'
        ],
        helper: 'Area = (1/2)ab×sin(C) for SAS',
        solution: 'Area ≈ 33.94 square units',
        realWorldContext: 'Land area calculations in surveying'
    });

    return relatedProblems;
}

// ============== RADIAN MEASURE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedRadianMeasure() {
    const relatedProblems = [];

    // Problem 1: Degrees to Radians
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Convert Degrees to Radians',
        problem: 'Convert 60° to radians',
        parameters: { angle: 60, fromUnit: 'degrees', toUnit: 'radians' },
        type: 'radian_measure',
        context: { difficulty: 'beginner', topic: 'Basic Radian Conversion' },
        subparts: [
            'Given: 60° to convert to radians',
            'Formula: radians = degrees × (π/180)',
            'Substitute: radians = 60 × (π/180)',
            'Simplify: 60π/180 = π/3',
            'Exact answer: π/3 radians',
            'Decimal: π/3 ≈ 1.047 radians',
            'Note: 180° = π radians'
        ],
        helper: 'Multiply degrees by π/180',
        solution: 'π/3 radians ≈ 1.047 rad',
        realWorldContext: 'Converting angle measurements in science'
    });

    // Problem 2: Radians to Degrees
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Convert Radians to Degrees',
        problem: 'Convert 3π/4 radians to degrees',
        parameters: { angle: (3 * Math.PI) / 4, fromUnit: 'radians', toUnit: 'degrees' },
        type: 'radian_measure',
        context: { difficulty: 'beginner', topic: 'Basic Degree Conversion' },
        subparts: [
            'Given: 3π/4 radians to convert to degrees',
            'Formula: degrees = radians × (180/π)',
            'Substitute: degrees = (3π/4) × (180/π)',
            'Simplify: (3 × 180)/4 = 540/4 = 135',
            'Answer: 135°',
            'Note: π radians = 180°'
        ],
        helper: 'Multiply radians by 180/π',
        solution: '135°',
        realWorldContext: 'Converting scientific measurements to common units'
    });

    // Problem 3: Arc Length
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Arc Length Calculation',
        problem: 'Find arc length: radius = 10 cm, central angle = π/3 radians',
        parameters: { radius: 10, angle: Math.PI / 3, fromUnit: 'radians' },
        type: 'radian_measure',
        context: { difficulty: 'intermediate', topic: 'Arc Length Formula' },
        subparts: [
            'Given: r = 10 cm, θ = π/3 radians',
            'Find: arc length s',
            'Formula: s = rθ (θ must be in radians)',
            'Substitute: s = 10 × (π/3)',
            's = 10π/3 cm',
            'Decimal: s ≈ 10.47 cm',
            'Note: Arc length is proportional to angle in radians'
        ],
        helper: 'Use s = rθ with angle in radians',
        solution: 's = 10π/3 ≈ 10.47 cm',
        realWorldContext: 'Calculating distances along circular paths'
    });

    // Problem 4: Sector Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sector Area Calculation',
        problem: 'Find sector area: radius = 8 m, central angle = 2π/5 radians',
        parameters: { radius: 8, angle: (2 * Math.PI) / 5, fromUnit: 'radians' },
        type: 'radian_measure',
        context: { difficulty: 'intermediate', topic: 'Sector Area Formula' },
        subparts: [
            'Given: r = 8 m, θ = 2π/5 radians',
            'Find: sector area A',
            'Formula: A = (1/2)r²θ (θ must be in radians)',
            'Substitute: A = (1/2) × 8² × (2π/5)',
            'A = (1/2) × 64 × (2π/5)',
            'A = 32 × (2π/5) = 64π/5',
            'A = 64π/5 ≈ 40.21 m²',
            'Note: Sector is like a "pie slice" of a circle'
        ],
        helper: 'Use A = (1/2)r²θ with angle in radians',
        solution: 'A = 64π/5 ≈ 40.21 m²',
        realWorldContext: 'Land area in circular sectors'
    });

    // Problem 5: Angular Velocity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Angular Velocity',
        problem: 'A wheel rotates 5 revolutions per second. Find angular velocity in rad/s.',
        parameters: { revolutions: 5, timeUnit: 'second' },
        type: 'radian_measure',
        context: { difficulty: 'intermediate', topic: 'Angular Velocity' },
        subparts: [
            'Given: 5 revolutions per second',
            'Find: angular velocity ω in radians per second',
            '1 revolution = 2π radians',
            '5 revolutions = 5 × 2π = 10π radians',
            'Time = 1 second',
            'ω = angle/time = 10π rad / 1 s',
            'ω = 10π rad/s ≈ 31.42 rad/s',
            'Note: ω = 2πf where f is frequency in Hz'
        ],
        helper: 'Convert revolutions to radians (1 rev = 2π rad)',
        solution: 'ω = 10π ≈ 31.42 rad/s',
        realWorldContext: 'Rotational motion in machinery'
    });

    // Problem 6: Linear Velocity from Angular
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Linear Velocity from Angular Velocity',
        problem: 'A point on a circle (r = 5 m) rotates at π/2 rad/s. Find linear velocity.',
        parameters: { radius: 5, angularVelocity: Math.PI / 2 },
        type: 'radian_measure',
        context: { difficulty: 'intermediate', topic: 'Linear and Angular Velocity' },
        subparts: [
            'Given: r = 5 m, ω = π/2 rad/s',
            'Find: linear velocity v',
            'Formula: v = rω',
            'Substitute: v = 5 × (π/2)',
            'v = 5π/2 m/s',
            'v ≈ 7.85 m/s',
            'Note: Linear velocity is tangent to the circle',
            'Relationship: v = rω connects linear and angular motion'
        ],
        helper: 'Use v = rω',
        solution: 'v = 5π/2 ≈ 7.85 m/s',
        realWorldContext: 'Speed of points on rotating objects'
    });

    // Problem 7: Complete Circle Problem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complete Circle Problem',
        problem: 'Circle radius 12 cm, central angle 150°. Find arc length and sector area.',
        parameters: { radius: 12, angle: 150, fromUnit: 'degrees' },
        type: 'radian_measure',
        context: { difficulty: 'intermediate', topic: 'Combined Circle Calculations' },
        subparts: [
            'Given: r = 12 cm, θ = 150°',
            'Find: arc length s and sector area A',
            'Step 1: Convert angle to radians',
            'θ = 150° × (π/180) = 5π/6 radians',
            'Step 2: Find arc length',
            's = rθ = 12 × (5π/6) = 10π ≈ 31.42 cm',
            'Step 3: Find sector area',
            'A = (1/2)r²θ = (1/2) × 144 × (5π/6)',
            'A = 72 × (5π/6) = 60π ≈ 188.50 cm²',
            'Solution: s = 10π cm, A = 60π cm²'
        ],
        helper: 'Convert to radians first, then use formulas',
        solution: 's = 10π ≈ 31.42 cm, A = 60π ≈ 188.50 cm²',
        realWorldContext: 'Complete circular measurements'
    });

    return relatedProblems;
}

// ============== TRIGONOMETRIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigEquations() {
    const relatedProblems = [];

    // Problem 1: Basic Sine Equation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Sine Equation',
        problem: 'Solve: sin(x) = 1/2 for 0 ≤ x < 2π',
        parameters: { function: 'sin', value: 0.5, interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Equations' },
        subparts: [
            'Given: sin(x) = 1/2, find x in [0, 2π)',
            'Find principal value: x = arcsin(1/2) = π/6',
            'Sine is positive in Quadrants I and II',
            'Quadrant I solution: x₁ = π/6',
            'Quadrant II solution: x₂ = π - π/6 = 5π/6',
            'Check both solutions are in [0, 2π): ✓',
            'Solutions: x = π/6 or x = 5π/6',
            'Decimal: x ≈ 0.524 or x ≈ 2.618 radians',
            'Or in degrees: x = 30° or x = 150°'
        ],
        helper: 'Find principal value, then consider all quadrants',
        solution: 'x = π/6, 5π/6',
        realWorldContext: 'Finding phase angles in oscillations'
    });

    // Problem 2: Basic Cosine Equation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Cosine Equation',
        problem: 'Solve: cos(x) = √2/2 for 0 ≤ x < 2π',
        parameters: { function: 'cos', value: Math.sqrt(2) / 2, interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Equations' },
        subparts: [
            'Given: cos(x) = √2/2, find x in [0, 2π)',
            'Find principal value: x = arccos(√2/2) = π/4',
            'Cosine is positive in Quadrants I and IV',
            'Quadrant I solution: x₁ = π/4',
            'Quadrant IV solution: x₂ = 2π - π/4 = 7π/4',
            'Both solutions in [0, 2π): ✓',
            'Solutions: x = π/4 or x = 7π/4',
            'Decimal: x ≈ 0.785 or x ≈ 5.498 radians',
            'Or in degrees: x = 45° or x = 315°'
        ],
        helper: 'Cosine positive in QI and QIV',
        solution: 'x = π/4, 7π/4',
        realWorldContext: 'Wave synchronization problems'
    });

    // Problem 3: Basic Tangent Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Basic Tangent Equation',
        problem: 'Solve: tan(x) = 1 for 0 ≤ x < 2π',
        parameters: { function: 'tan', value: 1, interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'beginner', topic: 'Basic Trigonometric Equations' },
        subparts: [
            'Given: tan(x) = 1, find x in [0, 2π)',
            'Find principal value: x = arctan(1) = π/4',
            'Tangent has period π (repeats every π radians)',
            'Solution 1: x₁ = π/4 (Quadrant I)',
            'Solution 2: x₂ = π/4 + π = 5π/4 (Quadrant III)',
            'Both solutions in [0, 2π): ✓',
            'Solutions: x = π/4 or x = 5π/4',
            'In degrees: x = 45° or x = 225°',
            'Note: tan positive in QI and QIII'
        ],
        helper: 'Tangent period is π, add π for second solution',
        solution: 'x = π/4, 5π/4',
        realWorldContext: 'Finding angles with specific slopes'
    });

    // Problem 4: Equation with Coefficient
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equation with Coefficient',
        problem: 'Solve: 2sin(x) = 1 for 0 ≤ x < 2π',
        parameters: { function: 'sin', coefficient: 2, value: 1, interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'intermediate', topic: 'Trigonometric Equations with Coefficients' },
        subparts: [
            'Given: 2sin(x) = 1, find x in [0, 2π)',
            'Isolate sin(x): sin(x) = 1/2',
            'This is now a basic equation',
            'Principal value: arcsin(1/2) = π/6',
            'Sine positive in QI and QII',
            'x₁ = π/6 (30°)',
            'x₂ = π - π/6 = 5π/6 (150°)',
            'Solutions: x = π/6 or x = 5π/6'
        ],
        helper: 'First isolate the trig function',
        solution: 'x = π/6, 5π/6',
        realWorldContext: 'Amplitude-modified oscillations'
    });

    // Problem 5: Equation with Phase Shift
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equation with Phase Shift',
        problem: 'Solve: sin(x - π/4) = 1/2 for 0 ≤ x < 2π',
        parameters: { function: 'sin', phaseShift: Math.PI / 4, value: 0.5, interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'intermediate', topic: 'Phase-Shifted Equations' },
        subparts: [
            'Given: sin(x - π/4) = 1/2, find x in [0, 2π)',
            'Let u = x - π/4',
            'Then: sin(u) = 1/2',
            'Solve for u: u = π/6 or u = 5π/6',
            'Substitute back:',
            'x - π/4 = π/6  →  x = π/6 + π/4 = 5π/12',
            'x - π/4 = 5π/6  →  x = 5π/6 + π/4 = 13π/12',
            'Check both in [0, 2π): ✓',
            'Solutions: x = 5π/12, 13π/12'
        ],
        helper: 'Substitute u for shifted angle, solve, then substitute back',
        solution: 'x = 5π/12, 13π/12',
        realWorldContext: 'Phase-shifted wave equations'
    });

    // Problem 6: General Solution
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'General Solution',
        problem: 'Find general solution: cos(x) = 0',
        parameters: { function: 'cos', value: 0, generalSolution: true },
        type: 'trig_equations',
        context: { difficulty: 'intermediate', topic: 'General Solutions' },
        subparts: [
            'Given: cos(x) = 0',
            'Find: general solution (all x values)',
            'Cosine equals zero at π/2 and 3π/2',
            'More generally: x = π/2 + nπ where n is any integer',
            'Alternatively: x = (2n + 1)π/2',
            'This accounts for all solutions',
            'Examples: n=0: x=π/2, n=1: x=3π/2, n=-1: x=-π/2',
            'Period of solutions: π (half the period of cosine)'
        ],
        helper: 'Add period to get all solutions',
        solution: 'x = π/2 + nπ, n ∈ ℤ',
        realWorldContext: 'Periodic phenomena with infinite repetitions'
    });

    // Problem 7: Quadratic in Trig Function
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Trigonometric Equation',
        problem: 'Solve: 2sin²(x) - sin(x) = 0 for 0 ≤ x < 2π',
        parameters: { equation: '2sin²(x) - sin(x) = 0', interval: { min: 0, max: 2 * Math.PI } },
        type: 'trig_equations',
        context: { difficulty: 'advanced', topic: 'Quadratic Trigonometric Equations' },
        subparts: [
            'Given: 2sin²(x) - sin(x) = 0',
            'Factor: sin(x)[2sin(x) - 1] = 0',
            'Set each factor = 0:',
            'Case 1: sin(x) = 0',
            '  x = 0, π, 2π  (but 2π not in [0, 2π))',
            '  Solutions: x = 0, π',
            'Case 2: 2sin(x) - 1 = 0',
            '  sin(x) = 1/2',
            '  x = π/6, 5π/6',
            'All solutions: x = 0, π/6, 5π/6, π',
            'In degrees: 0°, 30°, 150°, 180°'
        ],
        helper: 'Factor like quadratic equation',
        solution: 'x = 0, π/6, 5π/6, π',
        realWorldContext: 'Complex harmonic analysis'
    });

    return relatedProblems;
}

// ============== TRIGONOMETRIC GRAPHS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTrigGraphs() {
    const relatedProblems = [];

    // Problem 1: Basic Sine Graph
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Basic Sine Graph',
        problem: 'Analyze: y = sin(x)',
        parameters: { function: 'sin', amplitude: 1, period: 2 * Math.PI, phaseShift: 0, verticalShift: 0 },
        type: 'trig_graphs',
        context: { difficulty: 'beginner', topic: 'Basic Sine Function' },
        subparts: [
            'Given: y = sin(x)',
            'Amplitude: |A| = 1 (maximum height from center)',
            'Period: 2π (length of one complete cycle)',
            'Phase shift: 0 (no horizontal shift)',
            'Vertical shift: 0 (centered on x-axis)',
            'Domain: all real numbers (-∞, ∞)',
            'Range: [-1, 1]',
            'Key points in [0, 2π]:',
            '  (0, 0), (π/2, 1), (π, 0), (3π/2, -1), (2π, 0)',
            'Starts at origin, goes up first'
        ],
        helper: 'Period = 2π/B, Amplitude = |A|',
        solution: 'Amplitude: 1, Period: 2π, Range: [-1, 1]',
        realWorldContext: 'Basic wave motion'
    });

    // Problem 2: Amplitude Change
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Amplitude Transformation',
        problem: 'Analyze: y = 3sin(x)',
        parameters: { function: 'sin', amplitude: 3, period: 2 * Math.PI },
        type: 'trig_graphs',
        context: { difficulty: 'beginner', topic: 'Amplitude Transformation' },
        subparts: [
            'Given: y = 3sin(x)',
            'Amplitude: |A| = |3| = 3',
            'This is 3 times taller than y = sin(x)',
            'Period: 2π (unchanged)',
            'Period: 2π (unchanged)',
            'Range: [-3, 3] (stretched vertically)',
            'Domain: all real numbers',
            'Key points in [0, 2π]:',
            '  (0, 0), (π/2, 3), (π, 0), (3π/2, -3), (2π, 0)',
            'Shape same as sin(x) but 3× taller',
            'Interpretation: A = 3 stretches graph vertically by factor of 3'
        ],
        helper: 'Amplitude |A| multiplies all y-values',
        solution: 'Amplitude: 3, Period: 2π, Range: [-3, 3]',
        realWorldContext: 'Increased amplitude in sound waves'
    });

    // Problem 3: Period Change
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Period Transformation',
        problem: 'Analyze: y = sin(2x)',
        parameters: { function: 'sin', amplitude: 1, B: 2, period: Math.PI },
        type: 'trig_graphs',
        context: { difficulty: 'intermediate', topic: 'Period Transformation' },
        subparts: [
            'Given: y = sin(2x)',
            'Standard form: y = A·sin(Bx), where B = 2',
            'Period = 2π/B = 2π/2 = π',
            'Amplitude: |A| = 1 (unchanged)',
            'The graph completes one cycle in π instead of 2π',
            'This is a horizontal compression (faster oscillation)',
            'Domain: all real numbers',
            'Range: [-1, 1]',
            'Key points in [0, π]:',
            '  (0, 0), (π/4, 1), (π/2, 0), (3π/4, -1), (π, 0)',
            'Two complete cycles in [0, 2π]'
        ],
        helper: 'Period = 2π/|B|',
        solution: 'Amplitude: 1, Period: π, Range: [-1, 1]',
        realWorldContext: 'Higher frequency oscillations'
    });

    // Problem 4: Phase Shift
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase Shift Transformation',
        problem: 'Analyze: y = sin(x - π/4)',
        parameters: { function: 'sin', amplitude: 1, phaseShift: Math.PI / 4 },
        type: 'trig_graphs',
        context: { difficulty: 'intermediate', topic: 'Phase Shift' },
        subparts: [
            'Given: y = sin(x - π/4)',
            'Standard form: y = A·sin(B(x - C))',
            'Phase shift: C = π/4 (shift right)',
            'Amplitude: 1',
            'Period: 2π',
            'The entire graph shifts π/4 units to the right',
            'Domain: all real numbers',
            'Range: [-1, 1]',
            'Key points shifted by π/4:',
            '  (π/4, 0), (3π/4, 1), (5π/4, 0), (7π/4, -1), (9π/4, 0)',
            'Starts at (π/4, 0) instead of (0, 0)'
        ],
        helper: 'Phase shift = C, positive C means shift right',
        solution: 'Phase shift: π/4 right, Amplitude: 1, Period: 2π',
        realWorldContext: 'Time-delayed waves'
    });

    // Problem 5: Vertical Shift
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Vertical Shift Transformation',
        problem: 'Analyze: y = sin(x) + 2',
        parameters: { function: 'sin', amplitude: 1, verticalShift: 2 },
        type: 'trig_graphs',
        context: { difficulty: 'intermediate', topic: 'Vertical Shift' },
        subparts: [
            'Given: y = sin(x) + 2',
            'Standard form: y = A·sin(Bx) + D',
            'Vertical shift: D = 2 (shift up)',
            'Amplitude: 1',
            'Period: 2π',
            'Midline: y = 2 (graph oscillates around y = 2)',
            'Range: [2 - 1, 2 + 1] = [1, 3]',
            'Domain: all real numbers',
            'Key points shifted up 2 units:',
            '  (0, 2), (π/2, 3), (π, 2), (3π/2, 1), (2π, 2)',
            'Entire graph moves up 2 units'
        ],
        helper: 'Vertical shift D moves graph up (D > 0) or down (D < 0)',
        solution: 'Vertical shift: 2 up, Range: [1, 3], Midline: y = 2',
        realWorldContext: 'Oscillations about non-zero equilibrium'
    });

    // Problem 6: Combined Transformations
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Transformations',
        problem: 'Analyze: y = 2sin(3x - π) + 1',
        parameters: { 
            function: 'sin', 
            amplitude: 2, 
            B: 3, 
            phaseShift: Math.PI / 3, 
            verticalShift: 1,
            equation: 'y = 2sin(3x - π) + 1'
        },
        type: 'trig_graphs',
        context: { difficulty: 'advanced', topic: 'Multiple Transformations' },
        subparts: [
            'Given: y = 2sin(3x - π) + 1',
            'Rewrite: y = 2sin(3(x - π/3)) + 1',
            'Standard form: y = A·sin(B(x - C)) + D',
            'Amplitude: |A| = 2',
            'Period: 2π/B = 2π/3',
            'Phase shift: C = π/3 (right)',
            'Vertical shift: D = 1 (up)',
            'Midline: y = 1',
            'Range: [1 - 2, 1 + 2] = [-1, 3]',
            'Domain: all real numbers',
            'Order of transformations:',
            '  1. Horizontal stretch (period)',
            '  2. Horizontal shift (phase)',
            '  3. Vertical stretch (amplitude)',
            '  4. Vertical shift'
        ],
        helper: 'Apply transformations: period, phase shift, amplitude, vertical shift',
        solution: 'Amp: 2, Period: 2π/3, Phase: π/3 right, Vertical: 1 up',
        realWorldContext: 'Complex wave patterns in physics'
    });

    // Problem 7: Cosine vs Sine
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Cosine Function Analysis',
        problem: 'Analyze: y = cos(x) and compare to y = sin(x)',
        parameters: { function: 'cos', amplitude: 1, period: 2 * Math.PI },
        type: 'trig_graphs',
        context: { difficulty: 'intermediate', topic: 'Cosine Function' },
        subparts: [
            'Given: y = cos(x)',
            'Amplitude: 1',
            'Period: 2π',
            'Domain: all real numbers',
            'Range: [-1, 1]',
            'Key points in [0, 2π]:',
            '  (0, 1), (π/2, 0), (π, -1), (3π/2, 0), (2π, 1)',
            'Starts at maximum (1) instead of 0',
            'Comparison with sine:',
            '  cos(x) = sin(x + π/2)',
            '  Cosine is sine shifted left by π/2',
            '  Both have same shape, different starting point'
        ],
        helper: 'Cosine starts at maximum, sine starts at zero',
        solution: 'Amplitude: 1, Period: 2π, cos(x) = sin(x + π/2)',
        realWorldContext: 'Phase-related oscillations'
    });

    return relatedProblems;
}





// ============== FUNCTIONS & GRAPHS - RELATED PROBLEMS GENERATORS ==============

function generateRelatedFunctionBasics() {
    const relatedProblems = [];

    // Problem 1: Simple Function Evaluation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Function Evaluation',
        problem: 'Given f(x) = 3x + 5, find f(4)',
        parameters: { 
            expression: '3*x + 5', 
            evaluateAt: 4 
        },
        type: 'function_basics',
        context: { difficulty: 'beginner', topic: 'Function Basics - Evaluation' },
        subparts: [
            'Given: f(x) = 3x + 5',
            'Need to find: f(4)',
            'Step 1: Substitute x = 4 into the function',
            'f(4) = 3(4) + 5',
            'Step 2: Multiply first (order of operations)',
            'f(4) = 12 + 5',
            'Step 3: Add',
            'f(4) = 17',
            'Check: We substituted 4 correctly and followed PEMDAS ✓'
        ],
        helper: 'Replace every x with the given value, then simplify',
        solution: 'f(4) = 17',
        realWorldContext: 'Evaluating functions is like using a formula in real life'
    });

    // Problem 2: Quadratic Function Evaluation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Quadratic Function Evaluation',
        problem: 'Given f(x) = x² - 2x + 1, find f(-3)',
        parameters: { 
            expression: 'x^2 - 2*x + 1', 
            evaluateAt: -3 
        },
        type: 'function_basics',
        context: { difficulty: 'beginner', topic: 'Function Basics - Quadratic Evaluation' },
        subparts: [
            'Given: f(x) = x² - 2x + 1',
            'Need to find: f(-3)',
            'Step 1: Substitute x = -3 (use parentheses!)',
            'f(-3) = (-3)² - 2(-3) + 1',
            'Step 2: Square first',
            'f(-3) = 9 - 2(-3) + 1',
            'Step 3: Multiply',
            'f(-3) = 9 + 6 + 1',
            'Step 4: Add from left to right',
            'f(-3) = 16',
            'Important: Always use parentheses with negative values!'
        ],
        helper: 'Use parentheses when substituting negative values to avoid sign errors',
        solution: 'f(-3) = 16',
        realWorldContext: 'Quadratic functions model parabolic motion and optimization'
    });

    // Problem 3: Function Composition Evaluation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Function Composition',
        problem: 'Given f(x) = 2x + 1 and g(x) = x², find (f ∘ g)(3)',
        parameters: { 
            f: '2*x + 1',
            g: 'x^2',
            evaluateAt: 3,
            order: 'fog'
        },
        type: 'composition',
        context: { difficulty: 'intermediate', topic: 'Function Composition' },
        subparts: [
            'Given: f(x) = 2x + 1 and g(x) = x²',
            'Find: (f ∘ g)(3) = f(g(3))',
            'Step 1: Evaluate inner function g(3)',
            'g(3) = (3)² = 9',
            'Step 2: Use result as input to f',
            'f(9) = 2(9) + 1',
            'Step 3: Simplify',
            'f(9) = 18 + 1 = 19',
            'Result: (f ∘ g)(3) = 19',
            'Remember: Composition means "function of a function"'
        ],
        helper: 'Work from the inside out: evaluate inner function first',
        solution: '(f ∘ g)(3) = 19',
        realWorldContext: 'Composition models sequential processes in real applications'
    });

    // Problem 4: Piecewise Function Evaluation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Piecewise Function Evaluation',
        problem: 'Given f(x) = {x² if x < 0; 2x if x ≥ 0}, find f(-2) and f(3)',
        parameters: {
            pieces: [
                { expression: 'x^2', condition: 'x < 0' },
                { expression: '2*x', condition: 'x >= 0' }
            ],
            evaluateAt: -2
        },
        type: 'piecewise_functions',
        context: { difficulty: 'intermediate', topic: 'Piecewise Functions' },
        subparts: [
            'Given: f(x) = {x² if x < 0; 2x if x ≥ 0}',
            'Part A: Find f(-2)',
            'Since -2 < 0, use first piece: f(x) = x²',
            'f(-2) = (-2)² = 4',
            '',
            'Part B: Find f(3)',
            'Since 3 ≥ 0, use second piece: f(x) = 2x',
            'f(3) = 2(3) = 6',
            '',
            'Key: Check which condition the input satisfies first!'
        ],
        helper: 'Determine which piece applies based on the input value',
        solution: 'f(-2) = 4, f(3) = 6',
        realWorldContext: 'Piecewise functions model situations with different rules'
    });

    // Problem 5: Function Notation with Expressions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Function with Expression Input',
        problem: 'Given f(x) = x² + 3x, find f(a + 1)',
        parameters: { 
            expression: 'x^2 + 3*x',
            evaluateAt: 'a + 1'
        },
        type: 'function_basics',
        context: { difficulty: 'intermediate', topic: 'Function Basics - Algebraic Input' },
        subparts: [
            'Given: f(x) = x² + 3x',
            'Find: f(a + 1)',
            'Step 1: Replace every x with (a + 1)',
            'f(a + 1) = (a + 1)² + 3(a + 1)',
            'Step 2: Expand (a + 1)²',
            '= a² + 2a + 1 + 3(a + 1)',
            'Step 3: Distribute 3',
            '= a² + 2a + 1 + 3a + 3',
            'Step 4: Combine like terms',
            '= a² + 5a + 4',
            'Result: f(a + 1) = a² + 5a + 4'
        ],
        helper: 'Treat the entire expression as a single input and substitute carefully',
        solution: 'f(a + 1) = a² + 5a + 4',
        realWorldContext: 'Functions with algebraic inputs appear in calculus and algebra'
    });

    // Problem 6: Absolute Value Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Absolute Value Function',
        problem: 'Given f(x) = |2x - 6|, find f(1) and f(5)',
        parameters: { 
            expression: 'abs(2*x - 6)',
            evaluateAt: 1
        },
        type: 'function_basics',
        context: { difficulty: 'beginner', topic: 'Absolute Value Functions' },
        subparts: [
            'Given: f(x) = |2x - 6|',
            'Part A: Find f(1)',
            'f(1) = |2(1) - 6| = |2 - 6| = |-4| = 4',
            '',
            'Part B: Find f(5)',
            'f(5) = |2(5) - 6| = |10 - 6| = |4| = 4',
            '',
            'Note: Absolute value always gives non-negative result',
            'The outputs are equal even though inputs differ!'
        ],
        helper: 'Evaluate inside absolute value first, then take absolute value',
        solution: 'f(1) = 4, f(5) = 4',
        realWorldContext: 'Absolute value represents distance or magnitude'
    });

    // Problem 7: Rational Function Evaluation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Function Evaluation',
        problem: 'Given f(x) = (3x + 2)/(x - 1), find f(4) and identify restrictions',
        parameters: { 
            expression: '(3*x + 2)/(x - 1)',
            evaluateAt: 4
        },
        type: 'function_basics',
        context: { difficulty: 'intermediate', topic: 'Rational Functions' },
        subparts: [
            'Given: f(x) = (3x + 2)/(x - 1)',
            'Step 1: Identify domain restriction',
            'Denominator cannot be zero: x - 1 ≠ 0',
            'Therefore: x ≠ 1',
            '',
            'Step 2: Evaluate f(4)',
            'f(4) = (3(4) + 2)/(4 - 1)',
            '= (12 + 2)/3',
            '= 14/3',
            '',
            'Domain: All real numbers except x = 1',
            'f(4) = 14/3 ≈ 4.67'
        ],
        helper: 'Check domain restrictions before evaluating rational functions',
        solution: 'f(4) = 14/3, Domain: x ≠ 1',
        realWorldContext: 'Rational functions model rates and proportional relationships'
    });

    return relatedProblems;
}

function generateRelatedDomainRange() {
    const relatedProblems = [];

    // Problem 1: Linear Function Domain/Range
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Linear Function Domain and Range',
        problem: 'Find the domain and range of f(x) = 2x + 3',
        parameters: { 
            expression: '2*x + 3',
            functionType: 'linear'
        },
        type: 'domain_range',
        context: { difficulty: 'beginner', topic: 'Domain and Range - Linear' },
        subparts: [
            'Given: f(x) = 2x + 3 (linear function)',
            '',
            'Domain Analysis:',
            'Linear functions have no restrictions',
            'Can input any real number',
            'Domain: All real numbers or (-∞, ∞)',
            '',
            'Range Analysis:',
            'As x varies over all reals, so does f(x)',
            'The function produces all real output values',
            'Range: All real numbers or (-∞, ∞)',
            '',
            'Key: Linear functions (non-constant) have unrestricted domain and range'
        ],
        helper: 'Linear functions typically have domain and range of all real numbers',
        solution: 'Domain: (-∞, ∞), Range: (-∞, ∞)',
        realWorldContext: 'Linear functions model constant rate relationships'
    });

    // Problem 2: Square Root Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Square Root Function Domain',
        problem: 'Find the domain of f(x) = √(x - 4)',
        parameters: { 
            expression: 'sqrt(x - 4)',
            functionType: 'square_root'
        },
        type: 'domain_range',
        context: { difficulty: 'intermediate', topic: 'Domain and Range - Square Root' },
        subparts: [
            'Given: f(x) = √(x - 4)',
            '',
            'Domain Analysis:',
            'Square root requires non-negative argument',
            'Need: x - 4 ≥ 0',
            'Solve: x ≥ 4',
            'Domain: [4, ∞)',
            '',
            'Range Analysis:',
            'Square root always produces non-negative values',
            'When x = 4: f(4) = √0 = 0 (minimum)',
            'As x → ∞, f(x) → ∞',
            'Range: [0, ∞)',
            '',
            'Restriction: Cannot take square root of negative numbers (in real numbers)'
        ],
        helper: 'Set the expression inside square root ≥ 0 and solve',
        solution: 'Domain: [4, ∞), Range: [0, ∞)',
        realWorldContext: 'Square root functions model growth and geometric relationships'
    });

    // Problem 3: Rational Function Domain
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rational Function Domain',
        problem: 'Find the domain of f(x) = (x + 3)/(x² - 9)',
        parameters: { 
            expression: '(x + 3)/(x^2 - 9)',
            functionType: 'rational'
        },
        type: 'domain_range',
        context: { difficulty: 'intermediate', topic: 'Domain and Range - Rational' },
        subparts: [
            'Given: f(x) = (x + 3)/(x² - 9)',
            '',
            'Domain Analysis:',
            'Denominator cannot be zero',
            'Set denominator = 0: x² - 9 = 0',
            'Factor: (x + 3)(x - 3) = 0',
            'x = -3 or x = 3',
            '',
            'Note: Numerator x + 3 = 0 when x = -3',
            'Both cancel: f(x) = 1/(x - 3) with hole at x = -3',
            '',
            'Domain: All real numbers except x = -3 and x = 3',
            'Interval notation: (-∞, -3) ∪ (-3, 3) ∪ (3, ∞)'
        ],
        helper: 'Find where denominator equals zero and exclude those values',
        solution: 'Domain: (-∞, -3) ∪ (-3, 3) ∪ (3, ∞)',
        realWorldContext: 'Rational functions model rates and ratios with restrictions'
    });

    // Problem 4: Quadratic Function Range
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Function Range',
        problem: 'Find the range of f(x) = -2x² + 8x - 5',
        parameters: { 
            expression: '-2*x^2 + 8*x - 5',
            functionType: 'quadratic'
        },
        type: 'domain_range',
        context: { difficulty: 'intermediate', topic: 'Domain and Range - Quadratic' },
        subparts: [
            'Given: f(x) = -2x² + 8x - 5',
            '',
            'Domain: All real numbers (no restrictions)',
            '',
            'Range Analysis:',
            'Since a = -2 < 0, parabola opens downward',
            'Has a maximum value at vertex',
            '',
            'Find vertex: x = -b/(2a) = -8/(2(-2)) = 2',
            'Maximum value: f(2) = -2(2)² + 8(2) - 5',
            '= -8 + 16 - 5 = 3',
            '',
            'Range: All values ≤ 3',
            'Interval notation: (-∞, 3]',
            '',
            'Key: Parabola opens down (a < 0), so range is (-∞, max]'
        ],
        helper: 'Find vertex to determine maximum (a < 0) or minimum (a > 0)',
        solution: 'Domain: (-∞, ∞), Range: (-∞, 3]',
        realWorldContext: 'Quadratic functions model optimization and projectile motion'
    });

    // Problem 5: Absolute Value Function Range
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Absolute Value Function Domain/Range',
        problem: 'Find domain and range of f(x) = |x - 2| + 3',
        parameters: { 
            expression: 'abs(x - 2) + 3',
            functionType: 'absolute_value'
        },
        type: 'domain_range',
        context: { difficulty: 'beginner', topic: 'Domain and Range - Absolute Value' },
        subparts: [
            'Given: f(x) = |x - 2| + 3',
            '',
            'Domain Analysis:',
            'Absolute value defined for all real numbers',
            'Domain: (-∞, ∞)',
            '',
            'Range Analysis:',
            'Absolute value is always ≥ 0',
            'So |x - 2| ≥ 0',
            'Minimum occurs when |x - 2| = 0, i.e., x = 2',
            'Minimum value: f(2) = |0| + 3 = 3',
            'As |x - 2| increases, f(x) increases',
            'Range: [3, ∞)',
            '',
            'Key: Absolute value shifts minimum from 0 to 3'
        ],
        helper: 'Absolute value minimum is 0; apply vertical shift',
        solution: 'Domain: (-∞, ∞), Range: [3, ∞)',
        realWorldContext: 'Absolute value models distance and magnitude'
    });

    // Problem 6: Logarithmic Function Domain
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Logarithmic Function Domain',
        problem: 'Find the domain of f(x) = ln(3x - 6)',
        parameters: { 
            expression: 'log(3*x - 6)',
            functionType: 'logarithmic'
        },
        type: 'domain_range',
        context: { difficulty: 'intermediate', topic: 'Domain and Range - Logarithmic' },
        subparts: [
            'Given: f(x) = ln(3x - 6)',
            '',
            'Domain Analysis:',
            'Logarithm requires positive argument',
            'Need: 3x - 6 > 0',
            'Solve: 3x > 6',
            'x > 2',
            'Domain: (2, ∞)',
            '',
            'Range Analysis:',
            'Logarithmic functions produce all real numbers',
            'As x → 2⁺, f(x) → -∞',
            'As x → ∞, f(x) → ∞',
            'Range: (-∞, ∞)',
            '',
            'Critical: Logarithm argument must be POSITIVE, not just non-negative'
        ],
        helper: 'Set logarithm argument > 0 and solve the inequality',
        solution: 'Domain: (2, ∞), Range: (-∞, ∞)',
        realWorldContext: 'Logarithms model exponential decay and growth rates'
    });

    // Problem 7: Piecewise Function Domain/Range
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Piecewise Function Domain/Range',
        problem: 'Find domain and range of f(x) = {x² if x < 0; 2x + 1 if x ≥ 0}',
        parameters: {
            pieces: [
                { expression: 'x^2', condition: 'x < 0' },
                { expression: '2*x + 1', condition: 'x >= 0' }
            ]
        },
        type: 'domain_range',
        context: { difficulty: 'intermediate', topic: 'Domain and Range - Piecewise' },
        subparts: [
            'Given: f(x) = {x² if x < 0; 2x + 1 if x ≥ 0}',
            '',
            'Domain Analysis:',
            'First piece: defined for x < 0',
            'Second piece: defined for x ≥ 0',
            'Together cover all real numbers',
            'Domain: (-∞, ∞)',
            '',
            'Range Analysis:',
            'For x < 0: f(x) = x² produces (0, ∞)',
            'For x ≥ 0: f(x) = 2x + 1 produces [1, ∞)',
            'At x = 0: f(0) = 2(0) + 1 = 1',
            '',
            'Combined range: (0, ∞) ∪ [1, ∞) = (0, ∞)',
            'Range: (0, ∞)',
            '',
            'Note: There\'s a "hole" at y = 0 (not in range)'
        ],
        helper: 'Analyze each piece separately, then combine the ranges',
        solution: 'Domain: (-∞, ∞), Range: (0, ∞)',
        realWorldContext: 'Piecewise functions model situations with different conditions'
    });

    return relatedProblems;
}

function generateRelatedFunctionTypes() {
    const relatedProblems = [];

    // Problem 1: Identify Linear Function
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Linear Function',
        problem: 'Analyze f(x) = -3x + 7 and identify its type and properties',
        parameters: { 
            expression: '-3*x + 7',
            coefficients: { m: -3, b: 7 }
        },
        type: 'function_types',
        context: { difficulty: 'beginner', topic: 'Function Types - Linear' },
        subparts: [
            'Given: f(x) = -3x + 7',
            '',
            'Function Type: Linear',
            'Standard form: f(x) = mx + b',
            '',
            'Properties:',
            'Slope (m): -3',
            'Y-intercept (b): 7',
            'X-intercept: Set f(x) = 0',
            '  -3x + 7 = 0',
            '  x = 7/3',
            '',
            'Behavior: Decreasing (m < 0)',
            'Domain: (-∞, ∞)',
            'Range: (-∞, ∞)',
            '',
            'Graph: Straight line with negative slope'
        ],
        helper: 'Linear functions have constant rate of change (slope)',
        solution: 'Linear: slope = -3, y-intercept = 7',
        realWorldContext: 'Linear functions model constant rate relationships'
    });

    // Problem 2: Identify Quadratic Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identify Quadratic Function',
        problem: 'Analyze f(x) = 2x² - 4x + 1 and find its vertex',
        parameters: { 
            expression: '2*x^2 - 4*x + 1',
            coefficients: { a: 2, b: -4, c: 1 }
        },
        type: 'function_types',
        context: { difficulty: 'intermediate', topic: 'Function Types - Quadratic' },
        subparts: [
            'Given: f(x) = 2x² - 4x + 1',
            '',
            'Function Type: Quadratic',
            'Standard form: f(x) = ax² + bx + c',
            'Coefficients: a = 2, b = -4, c = 1',
            '',
            'Properties:',
            'Opens: Upward (a > 0)',
            'Vertex x-coordinate: x = -b/(2a) = 4/4 = 1',
            'Vertex y-coordinate: f(1) = 2(1)² - 4(1) + 1 = -1',
            'Vertex: (1, -1)',
            'Axis of symmetry: x = 1',
            'Y-intercept: f(0) = 1',
            'Minimum value: -1',
            '',
            'Domain: (-∞, ∞)',
            'Range: [-1, ∞)'
        ],
        helper: 'Quadratic functions graph as parabolas with a vertex',
        solution: 'Quadratic: Vertex (1, -1), opens upward',
        realWorldContext: 'Quadratics model projectile motion and optimization'
    });

    // Problem 3: Identify Exponential Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identify Exponential Function',
        problem: 'Analyze f(x) = 3(2^x) and describe its behavior',
        parameters: { 
            expression: '3*2^x',
            functionType: 'exponential'
        },
        type: 'function_types',
        context: { difficulty: 'intermediate', topic: 'Function Types - Exponential' },
        subparts: [
            'Given: f(x) = 3(2^x)',
            '',
            'Function Type: Exponential',
            'Standard form: f(x) = a(b^x)',
            'Parameters: a = 3, b = 2',
            '',
            'Properties:',
            'Initial value (a): 3 (when x = 0)',
            'Base (b): 2 (growth factor)',
            'Since b > 1: Exponential growth',
            '',
            'Y-intercept: f(0) = 3(2^0) = 3',
            'Horizontal asymptote: y = 0',
            'Domain: (-∞, ∞)',
            'Range: (0, ∞)',
            '',
            'Behavior:',
            'As x → ∞, f(x) → ∞ (rapid growth)',
            'As x → -∞, f(x) → 0',
            '',
            'Rate: Doubles with each unit increase in x'
        ],
        helper: 'Exponential functions show rapid growth or decay',
        solution: 'Exponential growth: base = 2, initial value = 3',
        realWorldContext: 'Exponential functions model population growth and compound interest'
    });

    // Problem 4: Identify Rational Function
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Identify Rational Function',
        problem: 'Analyze f(x) = (2x + 3)/(x - 1) and find asymptotes',
        parameters: { 
            expression: '(2*x + 3)/(x - 1)',
            functionType: 'rational'
        },
        type: 'function_types',
        context: { difficulty: 'intermediate', topic: 'Function Types - Rational' },
        subparts: [
            'Given: f(x) = (2x + 3)/(x - 1)',
            '',
            'Function Type: Rational',
            'Form: f(x) = p(x)/q(x) where p, q are polynomials',
            '',
            'Vertical Asymptote:',
            'Set denominator = 0: x - 1 = 0',
            'Vertical asymptote: x = 1',
            '',
            'Horizontal Asymptote:',
            'Degrees: numerator = 1, denominator = 1',
            'Same degree → y = ratio of leading coefficients',
            'y = 2/1 = 2',
            'Horizontal asymptote: y = 2',
            '',
            'Intercepts:',
            'X-intercept: 2x + 3 = 0 → x = -3/2',
            'Y-intercept: f(0) = 3/(-1) = -3',
            '',
            'Domain: All real numbers except x = 1',
            'Range: All real numbers except y = 2'
        ],
        helper: 'Find asymptotes by analyzing numerator and denominator',
        solution: 'Rational: VA at x = 1, HA at y = 2',
        realWorldContext: 'Rational functions model rates and proportions'
    });

    // Problem 5: Identify Absolute Value Function
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Identify Absolute Value Function',
        problem: 'Analyze f(x) = |x - 3| + 2 and identify its properties',
        parameters: { 
            expression: 'abs(x - 3) + 2',
            functionType: 'absolute_value'
        },
        type: 'function_types',
        context: { difficulty: 'beginner', topic: 'Function Types - Absolute Value' },
        subparts: [
            'Given: f(x) = |x - 3| + 2',
            '',
            'Function Type: Absolute Value',
            'Standard form: f(x) = a|x - h| + k',
            'Parameters: a = 1, h = 3, k = 2',
            '',
            'Properties:',
            'Vertex: (3, 2)',
            'Opens: Upward (a > 0)',
            'Minimum value: 2',
            '',
            'Shape: V-shaped graph',
            'Axis of symmetry: x = 3',
            'Y-intercept: f(0) = |0 - 3| + 2 = 5',
            'X-intercept: None (minimum is 2 > 0)',
            '',
            'Domain: (-∞, ∞)',
            'Range: [2, ∞)',
            '',
            'Behavior:',
            'Decreasing for x < 3',
            'Increasing for x > 3'
        ],
        helper: 'Absolute value creates V-shaped graphs with a vertex',
        solution: 'Absolute Value: Vertex (3, 2), minimum = 2',
        realWorldContext: 'Absolute value models distance and magnitude'
    });

    // Problem 6: Identify Square Root Function
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identify Square Root Function',
        problem: 'Analyze f(x) = √(x + 4) - 1 and describe its properties',
        parameters: { 
            expression: 'sqrt(x + 4) - 1',
            functionType: 'square_root'
        },
        type: 'function_types',
        context: { difficulty: 'intermediate', topic: 'Function Types - Square Root' },
        subparts: [
            'Given: f(x) = √(x + 4) - 1',
            '',
            'Function Type: Square Root',
            'Standard form: f(x) = a√(x - h) + k',
            'Parameters: a = 1, h = -4, k = -1',
            '',
            'Properties:',
            'Starting point: (-4, -1)',
            'Domain: x + 4 ≥ 0 → x ≥ -4 → [-4, ∞)',
            'Range: [-1, ∞)',
            '',
            'Intercepts:',
            'X-intercept: Set f(x) = 0',
            '  √(x + 4) - 1 = 0',
            '  √(x + 4) = 1',
            '  x + 4 = 1',
            '  x = -3',
            'Y-intercept: f(0) = √4 - 1 = 1',
            '',
            'Behavior: Increasing for all x in domain',
            'Graph: Curved, starts at (-4, -1), increases slowly'
        ],
        helper: 'Square root functions have restricted domain (radicand ≥ 0)',
        solution: 'Square Root: Starting point (-4, -1), Domain: [-4, ∞)',
        realWorldContext: 'Square root functions model certain growth patterns'
    });

    // Problem 7: Identify Cubic Function
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Identify Cubic Function',
        problem: 'Analyze f(x) = -x³ + 3x² - 2 and describe end behavior',
        parameters: { 
            expression: '-x^3 + 3*x^2 - 2',
            coefficients: { a: -1, b: 3, c: 0, d: -2 }
        },
        type: 'function_types',
        context: { difficulty: 'intermediate', topic: 'Function Types - Cubic' },
        subparts: [
            'Given: f(x) = -x³ + 3x² - 2',
            '',
            'Function Type: Cubic (Polynomial degree 3)',
            'Standard form: f(x) = ax³ + bx² + cx + d',
            'Coefficients: a = -1, b = 3, c = 0, d = -2',
            '',
            'Properties:',
            'Degree: 3 (odd)',
            'Leading coefficient: -1 (negative)',
            '',
            'End Behavior:',
            'As x → ∞, f(x) → -∞ (leading term dominates)',
            'As x → -∞, f(x) → ∞',
            'Opposite directions (odd degree)',
            '',
            'Y-intercept: f(0) = -2',
            '',
            'Domain: (-∞, ∞)',
            'Range: (-∞, ∞)',
            '',
            'Graph: S-shaped curve with up to 2 turning points',
            'Critical points found using calculus (f\'(x) = 0)'
        ],
        helper: 'Cubic functions have S-shaped graphs and opposite end behaviors',
        solution: 'Cubic: negative leading coeff, ends: ∞ to -∞',
        realWorldContext: 'Cubic functions model complex relationships in physics'
    });

    return relatedProblems;
}

function generateRelatedTransformations() {
    const relatedProblems = [];

    // Problem 1: Vertical Shift
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vertical Shift',
        problem: 'Describe the transformation from f(x) = x² to g(x) = x² + 3',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: 'x^2 + 3',
            transformations: [
                { type: 'vertical_shift', value: 3 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'beginner', topic: 'Transformations - Vertical Shift' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = x² + 3',
            '',
            'Transformation Type: Vertical Shift',
            'Form: g(x) = f(x) + k',
            'Here: k = 3',
            '',
            'Description:',
            'Shift the entire graph UP by 3 units',
            'Every point (x, y) becomes (x, y + 3)',
            '',
            'Effect on key points:',
            'Original vertex: (0, 0)',
            'New vertex: (0, 3)',
            '',
            'Rule: f(x) + k shifts UP if k > 0, DOWN if k < 0',
            '',
            'Note: Shape stays the same, only position changes'
        ],
        helper: 'Adding outside the function shifts vertically',
        solution: 'Vertical shift UP 3 units',
        realWorldContext: 'Vertical shifts model baseline changes'
    });

    // Problem 2: Horizontal Shift
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Horizontal Shift',
        problem: 'Describe the transformation from f(x) = x² to g(x) = (x - 2)²',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: '(x - 2)^2',
            transformations: [
                { type: 'horizontal_shift', value: 2 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'intermediate', topic: 'Transformations - Horizontal Shift' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = (x - 2)²',
            '',
            'Transformation Type: Horizontal Shift',
            'Form: g(x) = f(x - h)',
            'Here: h = 2',
            '',
            'Description:',
            'Shift the entire graph RIGHT by 2 units',
            'Every point (x, y) becomes (x + 2, y)',
            '',
            'Effect on key points:',
            'Original vertex: (0, 0)',
            'New vertex: (2, 0)',
            '',
            'IMPORTANT: Sign is OPPOSITE!',
            'f(x - h) shifts RIGHT by h',
            'f(x + h) shifts LEFT by h',
            '',
            'Common mistake: Thinking (x - 2) shifts left'
        ],
        helper: 'Inside transformation: opposite of what you expect!',
        solution: 'Horizontal shift RIGHT 2 units',
        realWorldContext: 'Horizontal shifts model time delays or phase shifts'
    });

    // Problem 3: Vertical Stretch
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Vertical Stretch',
        problem: 'Describe the transformation from f(x) = x² to g(x) = 3x²',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: '3*x^2',
            transformations: [
                { type: 'vertical_stretch', value: 3 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'intermediate', topic: 'Transformations - Vertical Stretch' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = 3x²',
            '',
            'Transformation Type: Vertical Stretch',
            'Form: g(x) = a·f(x)',
            'Here: a = 3',
            '',
            'Description:',
            'Stretch the graph vertically by factor of 3',
            'Every point (x, y) becomes (x, 3y)',
            'Graph becomes "narrower" (steeper)',
            '',
            'Effect on key points:',
            'Point (1, 1) → (1, 3)',
            'Point (2, 4) → (2, 12)',
            'Vertex (0, 0) stays at (0, 0)',
            '',
            'Rules:',
            '|a| > 1: Vertical stretch (narrower)',
            '0 < |a| < 1: Vertical compression (wider)',
            'a < 0: Stretch + reflection across x-axis'
        ],
        helper: 'Multiply outside: stretches vertically, makes graph steeper',
        solution: 'Vertical stretch by factor of 3',
        realWorldContext: 'Stretches model amplitude changes in waves'
    });

    // Problem 4: Horizontal Compression
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Horizontal Compression',
        problem: 'Describe the transformation from f(x) = x² to g(x) = (2x)²',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: '(2*x)^2',
            transformations: [
                { type: 'horizontal_stretch', value: 2 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'intermediate', topic: 'Transformations - Horizontal Compression' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = (2x)² = f(2x)',
            '',
            'Transformation Type: Horizontal Compression',
            'Form: g(x) = f(bx)',
            'Here: b = 2',
            '',
            'Description:',
            'Compress the graph horizontally by factor of 1/2',
            'Graph becomes "narrower"',
            '',
            'Effect on key points:',
            'Point (2, 4) → (1, 4)',
            'Point (4, 16) → (2, 16)',
            'X-values are divided by 2',
            '',
            'Rules (COUNTERINTUITIVE):',
            '|b| > 1: Horizontal COMPRESSION (narrower)',
            '0 < |b| < 1: Horizontal STRETCH (wider)',
            '',
            'Think: f(2x) reaches same y-values in half the distance',
            'Common mistake: Thinking b = 2 stretches by 2'
        ],
        helper: 'Inside multiplication: opposite effect! b > 1 compresses',
        solution: 'Horizontal compression by factor of 1/2',
        realWorldContext: 'Horizontal compression models time-scale changes'
    });

    // Problem 5: Reflection across x-axis
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Reflection across x-axis',
        problem: 'Describe the transformation from f(x) = x² to g(x) = -x²',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: '-x^2',
            transformations: [
                { type: 'reflect_x', value: -1 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'beginner', topic: 'Transformations - Reflection x-axis' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = -x²',
            '',
            'Transformation Type: Reflection across x-axis',
            'Form: g(x) = -f(x)',
            '',
            'Description:',
            'Flip the entire graph over the x-axis',
            'Every point (x, y) becomes (x, -y)',
            '',
            'Effect on key points:',
            'Point (1, 1) → (1, -1)',
            'Point (2, 4) → (2, -4)',
            'Vertex (0, 0) stays at (0, 0)',
            '',
            'Parabola changes from opening UP to opening DOWN',
            '',
            'Rule: Negative sign outside reflects across x-axis',
            'Think: All y-values become their opposites'
        ],
        helper: 'Negative outside function reflects across x-axis',
        solution: 'Reflection across x-axis (opens downward)',
        realWorldContext: 'Reflections model opposite directions or inverted signals'
    });

    // Problem 6: Multiple Transformations
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Transformations',
        problem: 'Describe all transformations from f(x) = x² to g(x) = -2(x + 3)² + 5',
        parameters: { 
            parentFunction: 'x^2',
            transformedFunction: '-2*(x + 3)^2 + 5',
            transformations: [
                { type: 'horizontal_shift', value: -3 },
                { type: 'vertical_stretch', value: 2 },
                { type: 'reflect_x', value: -1 },
                { type: 'vertical_shift', value: 5 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'advanced', topic: 'Transformations - Multiple' },
        subparts: [
            'Parent function: f(x) = x²',
            'Transformed function: g(x) = -2(x + 3)² + 5',
            '',
            'Standard form: g(x) = a·f(x - h) + k',
            'Here: a = -2, h = -3, k = 5',
            '',
            'Transformations (in order):',
            '',
            '1. Horizontal shift LEFT 3 units',
            '   f(x) → f(x + 3)',
            '   Effect: (x, y) → (x - 3, y)',
            '',
            '2. Vertical stretch by factor of 2',
            '   f(x + 3) → 2f(x + 3)',
            '   Effect: Makes graph steeper',
            '',
            '3. Reflection across x-axis',
            '   2f(x + 3) → -2f(x + 3)',
            '   Effect: Opens downward',
            '',
            '4. Vertical shift UP 5 units',
            '   -2f(x + 3) → -2f(x + 3) + 5',
            '   Effect: Moves entire graph up',
            '',
            'Final vertex: (-3, 5)',
            'Opens: Downward',
            'Narrower than parent (stretched)'
        ],
        helper: 'Apply transformations: inside first, then outside',
        solution: 'Left 3, stretch 2×, reflect x, up 5',
        realWorldContext: 'Multiple transformations model complex real-world changes'
    });

    // Problem 7: Transformation with Rational Function
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Function Transformation',
        problem: 'Describe transformations from f(x) = 1/x to g(x) = 3/(x - 2) + 1',
        parameters: { 
            parentFunction: '1/x',
            transformedFunction: '3/(x - 2) + 1',
            transformations: [
                { type: 'horizontal_shift', value: 2 },
                { type: 'vertical_stretch', value: 3 },
                { type: 'vertical_shift', value: 1 }
            ]
        },
        type: 'transformations',
        context: { difficulty: 'advanced', topic: 'Transformations - Rational Functions' },
        subparts: [
            'Parent function: f(x) = 1/x',
            'Transformed function: g(x) = 3/(x - 2) + 1',
            '',
            'Form: g(x) = a·f(x - h) + k',
            'Here: a = 3, h = 2, k = 1',
            '',
            'Transformations:',
            '',
            '1. Horizontal shift RIGHT 2 units',
            '   Vertical asymptote moves: x = 0 → x = 2',
            '',
            '2. Vertical stretch by factor of 3',
            '   Graph becomes steeper',
            '',
            '3. Vertical shift UP 1 unit',
            '   Horizontal asymptote moves: y = 0 → y = 1',
            '',
            'New asymptotes:',
            'Vertical: x = 2',
            'Horizontal: y = 1',
            '',
            'Effect on asymptotes is key for rational functions!',
            'Vertical asymptote shifts with horizontal shift',
            'Horizontal asymptote shifts with vertical shift'
        ],
        helper: 'Track how asymptotes transform with the function',
        solution: 'Right 2, stretch 3×, up 1; VA: x=2, HA: y=1',
        realWorldContext: 'Transformations adjust mathematical models to real data'
    });

    return relatedProblems;
}

function generateRelatedInverseFunctions() {
    const relatedProblems = [];

    // Problem 1: Linear Function Inverse
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Linear Function Inverse',
        problem: 'Find the inverse of f(x) = 2x + 5',
        parameters: { 
            expression: '2*x + 5',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'beginner', topic: 'Inverse Functions - Linear' },
        subparts: [
            'Given: f(x) = 2x + 5',
            '',
            'Step 1: Replace f(x) with y',
            'y = 2x + 5',
            '',
            'Step 2: Swap x and y',
            'x = 2y + 5',
            '',
            'Step 3: Solve for y',
            'x - 5 = 2y',
            'y = (x - 5)/2',
            '',
            'Step 4: Replace y with f⁻¹(x)',
            'f⁻¹(x) = (x - 5)/2',
            '',
            'Verification:',
            'f(f⁻¹(x)) = f((x - 5)/2) = 2((x - 5)/2) + 5 = x - 5 + 5 = x ✓',
            'f⁻¹(f(x)) = f⁻¹(2x + 5) = ((2x + 5) - 5)/2 = 2x/2 = x ✓'
        ],
        helper: 'Switch x and y, then solve for y',
        solution: 'f⁻¹(x) = (x - 5)/2',
        realWorldContext: 'Inverses reverse operations (e.g., encoding/decoding)'
    });

    // Problem 2: Square Root and Square
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Square Root and Square Inverse',
        problem: 'Find the inverse of f(x) = √(x - 3) for x ≥ 3',
        parameters: { 
            expression: 'sqrt(x - 3)',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'intermediate', topic: 'Inverse Functions - Square Root' },
        subparts: [
            'Given: f(x) = √(x - 3), x ≥ 3',
            '',
            'Step 1: Write as y = √(x - 3)',
            '',
            'Step 2: Swap x and y',
            'x = √(y - 3)',
            '',
            'Step 3: Solve for y',
            'Square both sides: x² = y - 3',
            'y = x² + 3',
            '',
            'Step 4: Determine domain restriction',
            'Original range: [0, ∞) (square root outputs)',
            'Inverse domain: [0, ∞) (must match)',
            '',
            'f⁻¹(x) = x² + 3, x ≥ 0',
            '',
            'Verification:',
            'f(f⁻¹(x)) = f(x² + 3) = √((x² + 3) - 3) = √(x²) = x ✓ (for x ≥ 0)',
            '',
            'Note: Domain restriction is crucial!'
        ],
        helper: 'Square root and squaring are inverse operations',
        solution: 'f⁻¹(x) = x² + 3, x ≥ 0',
        realWorldContext: 'Square root inverses appear in physics formulas'
    });

    // Problem 3: Rational Function Inverse
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Function Inverse',
        problem: 'Find the inverse of f(x) = (2x + 1)/(x - 3)',
        parameters: { 
            expression: '(2*x + 1)/(x - 3)',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'intermediate', topic: 'Inverse Functions - Rational' },
        subparts: [
            'Given: f(x) = (2x + 1)/(x - 3)',
            '',
            'Step 1: Write as y = (2x + 1)/(x - 3)',
            '',
            'Step 2: Swap x and y',
            'x = (2y + 1)/(y - 3)',
            '',
            'Step 3: Solve for y',
            'x(y - 3) = 2y + 1',
            'xy - 3x = 2y + 1',
            'xy - 2y = 3x + 1',
            'y(x - 2) = 3x + 1',
            'y = (3x + 1)/(x - 2)',
            '',
            'f⁻¹(x) = (3x + 1)/(x - 2)',
            '',
            'Domain of f: x ≠ 3',
            'Domain of f⁻¹: x ≠ 2',
            '',
            'Note: Original range excludes y = 2 (horizontal asymptote)',
            'Inverse domain excludes x = 2 (matches!)'
        ],
        helper: 'Clear denominators by cross-multiplying, then isolate y',
        solution: 'f⁻¹(x) = (3x + 1)/(x - 2)',
        realWorldContext: 'Rational inverses model reciprocal relationships'
    });

    // Problem 4: Exponential and Logarithm
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Exponential and Logarithm Inverse',
        problem: 'Find the inverse of f(x) = 2^x',
        parameters: { 
            expression: '2^x',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'intermediate', topic: 'Inverse Functions - Exponential' },
        subparts: [
            'Given: f(x) = 2^x',
            '',
            'Step 1: Write as y = 2^x',
            '',
            'Step 2: Swap x and y',
            'x = 2^y',
            '',
            'Step 3: Solve for y using logarithms',
            'Take log base 2 of both sides:',
            'log₂(x) = log₂(2^y)',
            'log₂(x) = y',
            '',
            'f⁻¹(x) = log₂(x)',
            '',
            'Domain of f: (-∞, ∞)',
            'Range of f: (0, ∞)',
            'Domain of f⁻¹: (0, ∞)',
            'Range of f⁻¹: (-∞, ∞)',
            '',
            'Verification:',
            'f(f⁻¹(x)) = 2^(log₂(x)) = x ✓',
            'f⁻¹(f(x)) = log₂(2^x) = x ✓',
            '',
            'Exponential and logarithm are inverse functions!'
        ],
        helper: 'Logarithm is the inverse of exponential',
        solution: 'f⁻¹(x) = log₂(x)',
        realWorldContext: 'Exp/log inverses used in growth/decay problems'
    });

    // Problem 5: Cubic Function Inverse
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cubic Function Inverse',
        problem: 'Find the inverse of f(x) = x³ + 2',
        parameters: { 
            expression: 'x^3 + 2',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'intermediate', topic: 'Inverse Functions - Cubic' },
        subparts: [
            'Given: f(x) = x³ + 2',
            '',
            'Step 1: Write as y = x³ + 2',
            '',
            'Step 2: Swap x and y',
            'x = y³ + 2',
            '',
            'Step 3: Solve for y',
            'x - 2 = y³',
            'y = ∛(x - 2)',
            '',
            'f⁻¹(x) = ∛(x - 2)',
            '',
            'Domain of f: (-∞, ∞)',
            'Range of f: (-∞, ∞)',
            'Domain of f⁻¹: (-∞, ∞)',
            'Range of f⁻¹: (-∞, ∞)',
            '',
            'Verification:',
            'f(f⁻¹(x)) = (∛(x - 2))³ + 2 = x - 2 + 2 = x ✓',
            '',
            'Odd root functions have no domain restrictions (unlike square roots)'
        ],
        helper: 'Cube root is inverse of cube (no restriction needed)',
        solution: 'f⁻¹(x) = ∛(x - 2)',
        realWorldContext: 'Cubic inverses appear in volume calculations'
    });

    // Problem 6: Restricted Quadratic Inverse
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Restricted Quadratic Inverse',
        problem: 'Find the inverse of f(x) = x² - 4 for x ≥ 0',
        parameters: { 
            expression: 'x^2 - 4',
            verifyInverse: true,
            restriction: 'x >= 0'
        },
        type: 'inverse_functions',
        context: { difficulty: 'advanced', topic: 'Inverse Functions - Restricted Domain' },
        subparts: [
            'Given: f(x) = x² - 4, x ≥ 0',
            '',
            'Note: Restriction needed because quadratic not one-to-one',
            '',
            'Step 1: Write as y = x² - 4',
            '',
            'Step 2: Swap x and y',
            'x = y² - 4',
            '',
            'Step 3: Solve for y',
            'x + 4 = y²',
            'y = ±√(x + 4)',
            '',
            'Step 4: Choose correct sign',
            'Since original has x ≥ 0 (right half of parabola)',
            'Range is [-4, ∞)',
            'Inverse domain is [-4, ∞)',
            'Take positive square root: y = √(x + 4)',
            '',
            'f⁻¹(x) = √(x + 4), x ≥ -4',
            '',
            'Verification:',
            'f(f⁻¹(x)) = (√(x + 4))² - 4 = x + 4 - 4 = x ✓',
            '',
            'Domain restriction is essential for inverse to exist!'
        ],
        helper: 'Restrict domain to make function one-to-one before finding inverse',
        solution: 'f⁻¹(x) = √(x + 4), x ≥ -4',
        realWorldContext: 'Restricted inverses model real-world constraints'
    });

    // Problem 7: Composition Verification
   /** relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Verify Functions are Inverses',
        problem: 'Verify that f(x) = (x - 1)/3 and g(x) = 3x + 1 are inverses',
        parameters: { 
            f: '(x - 1)/3',
            g: '3*x + 1',
            verifyInverse: true
        },
        type: 'inverse_functions',
        context: { difficulty: 'intermediate', topic: 'Inverse Functions - Verification' },
        subparts: [
            'Given: f(x) = (x - 1)/3 and g(x) = 3x + 1',
            '',
            'To verify inverses, show:',
            '1. f(g(x)) = x',
            '2. g(f(x)) = x',
            '',
            'Check 1: f(g(x))',
            'f(g(x)) = f(3x + 1)',
            '= ((3x + 1) - 1)/3',
            '= 3x/3',
            '= x ✓',
            '',
            'Check 2: g(f(x))',
            'g(f(x)) = g((x - 1)/3)',
            '= 3((x - 1)/3) + 1',
            '= (x - 1) + 1',
            '= x ✓',
            '',
            'Conclusion:',
            'Both compositions equal x',
            'Therefore, f and g are inverse functions',
            '',
            'Notation: g(x) = f⁻¹(x)',
            '',
            'This is the standard method to verify inverse functions'
        ],
        helper: 'Verify both compositions: f(g(x)) = x AND g(f(x)) = x',
        solution: 'Yes, they are inverses (both compositions = x)',
        realWorldContext: 'Verification ensures mathematical operations reverse correctly'
    });
    */


    return relatedProblems;
}

function generateRelatedPiecewiseFunctions() {
    const relatedProblems = [];

    // Problem 1: Simple Piecewise Evaluation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simple Piecewise Evaluation',
        problem: 'Given f(x) = {x + 2 if x < 0; 3x if x ≥ 0}, find f(-3), f(0), f(2)',
        parameters: {
            pieces: [
                { expression: 'x + 2', condition: 'x < 0' },
                { expression: '3*x', condition: 'x >= 0' }
            ],
            evaluateAt: -3
        },
        type: 'piecewise_functions',
        context: { difficulty: 'beginner', topic: 'Piecewise Functions - Evaluation' },
        subparts: [
            'Given: f(x) = {x + 2 if x < 0; 3x if x ≥ 0}',
            '',
            'Part A: Find f(-3)',
            'Since -3 < 0, use first piece: f(x) = x + 2',
            'f(-3) = -3 + 2 = -1',
            '',
            'Part B: Find f(0)',
            'Since 0 ≥ 0, use second piece: f(x) = 3x',
            'f(0) = 3(0) = 0',
            '',
            'Part C: Find f(2)',
            'Since 2 ≥ 0, use second piece: f(x) = 3x',
            'f(2) = 3(2) = 6',
            '',
            'Key Strategy:',
            '1. Check which condition the input satisfies',
            '2. Use the corresponding formula',
            '3. Evaluate as normal',
            '',
            'Results: f(-3) = -1, f(0) = 0, f(2) = 6'
        ],
        helper: 'Determine which piece applies, then evaluate',
        solution: 'f(-3) = -1, f(0) = 0, f(2) = 6',
        realWorldContext: 'Piecewise functions model situations with different rules'
    });

    // Problem 2: Absolute Value as Piecewise
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Absolute Value as Piecewise',
        problem: 'Write f(x) = |x| as a piecewise function and evaluate f(-5)',
        parameters: {
            pieces: [
                { expression: '-x', condition: 'x < 0' },
                { expression: 'x', condition: 'x >= 0' }
            ],
            evaluateAt: -5
        },
        type: 'piecewise_functions',
        context: { difficulty: 'beginner', topic: 'Piecewise Functions - Absolute Value' },
        subparts: [
            'Given: f(x) = |x|',
            '',
            'Absolute value definition:',
            '|x| = x if x ≥ 0',
            '|x| = -x if x < 0',
            '',
            'Piecewise form:',
            'f(x) = {-x if x < 0; x if x ≥ 0}',
            '',
            'Evaluate f(-5):',
            'Since -5 < 0, use first piece: f(x) = -x',
            'f(-5) = -(-5) = 5',
            '',
            'Verification: |-5| = 5 ✓',
            '',
            'Key Insight:',
            'Absolute value is a piecewise function!',
            'For negative inputs, it negates (makes positive)',
            'For non-negative inputs, it keeps the same'
        ],
        helper: 'Absolute value can be written as two pieces',
        solution: 'f(x) = {-x if x < 0; x if x ≥ 0}, f(-5) = 5',
        realWorldContext: 'Understanding absolute value through piecewise definition'
    });

    // Problem 3: Three-Piece Function
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Three-Piece Function',
        problem: 'Given f(x) = {x² if x < -1; 2x if -1 ≤ x < 2; 5 if x ≥ 2}, find f(-3), f(0), f(3)',
        parameters: {
            pieces: [
                { expression: 'x^2', condition: 'x < -1' },
                { expression: '2*x', condition: 'x >= -1 and x < 2' },
                { expression: '5', condition: 'x >= 2' }
            ],
            evaluateAt: -3
        },
        type: 'piecewise_functions',
        context: { difficulty: 'intermediate', topic: 'Piecewise Functions - Multiple Pieces' },
        subparts: [
            'Given: f(x) = {x² if x < -1; 2x if -1 ≤ x < 2; 5 if x ≥ 2}',
            '',
            'Part A: Find f(-3)',
            'Check conditions: -3 < -1? Yes',
            'Use first piece: f(x) = x²',
            'f(-3) = (-3)² = 9',
            '',
            'Part B: Find f(0)',
            'Check conditions: 0 < -1? No',
            'Check: -1 ≤ 0 < 2? Yes',
            'Use second piece: f(x) = 2x',
            'f(0) = 2(0) = 0',
            '',
            'Part C: Find f(3)',
            'Check conditions: 3 < -1? No',
            'Check: -1 ≤ 3 < 2? No',
            'Check: 3 ≥ 2? Yes',
            'Use third piece: f(x) = 5',
            'f(3) = 5',
            '',
            'Strategy: Test each condition in order until one is true',
            '',
            'Results: f(-3) = 9, f(0) = 0, f(3) = 5'
        ],
        helper: 'Test conditions systematically from top to bottom',
        solution: 'f(-3) = 9, f(0) = 0, f(3) = 5',
        realWorldContext: 'Tax brackets and shipping rates use multiple pieces'
    });

    // Problem 4: Continuity Check
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Piecewise Continuity',
        problem: 'Determine if f(x) = {x + 3 if x < 1; 2x + 2 if x ≥ 1} is continuous at x = 1',
        parameters: {
            pieces: [
                { expression: 'x + 3', condition: 'x < 1' },
                { expression: '2*x + 2', condition: 'x >= 1' }
            ],
            evaluateAt: 1
        },
        type: 'piecewise_functions',
        context: { difficulty: 'intermediate', topic: 'Piecewise Functions - Continuity' },
        subparts: [
            'Given: f(x) = {x + 3 if x < 1; 2x + 2 if x ≥ 1}',
            '',
            'To check continuity at x = 1, need:',
            '1. f(1) exists',
            '2. lim(x→1⁻) f(x) exists',
            '3. lim(x→1⁺) f(x) exists',
            '4. All three are equal',
            '',
            'Step 1: Find f(1)',
            'Since 1 ≥ 1, use second piece',
            'f(1) = 2(1) + 2 = 4',
            '',
            'Step 2: Left-hand limit (x→1⁻)',
            'As x approaches 1 from left, use first piece',
            'lim(x→1⁻) f(x) = lim(x→1⁻) (x + 3) = 1 + 3 = 4',
            '',
            'Step 3: Right-hand limit (x→1⁺)',
            'As x approaches 1 from right, use second piece',
            'lim(x→1⁺) f(x) = lim(x→1⁺) (2x + 2) = 2(1) + 2 = 4',
            '',
            'Step 4: Compare',
            'f(1) = 4, lim(x→1⁻) = 4, lim(x→1⁺) = 4',
            'All equal! Function IS continuous at x = 1',
            '',
            'Conclusion: Continuous at x = 1'
        ],
        helper: 'Check if left limit, right limit, and function value all match',
        solution: 'Yes, continuous at x = 1 (all values = 4)',
        realWorldContext: 'Continuity ensures smooth transitions in models'
    });

    // Problem 5: Piecewise with Jump Discontinuity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Piecewise Jump Discontinuity',
        problem: 'Analyze f(x) = {x² if x < 2; x + 3 if x ≥ 2} at x = 2',
        parameters: {
            pieces: [
                { expression: 'x^2', condition: 'x < 2' },
                { expression: 'x + 3', condition: 'x >= 2' }
            ],
            evaluateAt: 2
        },
        type: 'piecewise_functions',
        context: { difficulty: 'intermediate', topic: 'Piecewise Functions - Discontinuity' },
        subparts: [
            'Given: f(x) = {x² if x < 2; x + 3 if x ≥ 2}',
            '',
            'Analyze at x = 2:',
            '',
            'f(2) = 2 + 3 = 5 (using second piece)',
            '',
            'Left-hand limit:',
            'lim(x→2⁻) f(x) = lim(x→2⁻) x² = 4',
            '',
            'Right-hand limit:',
            'lim(x→2⁺) f(x) = lim(x→2⁺) (x + 3) = 5',
            '',
            'Comparison:',
            'lim(x→2⁻) = 4',
            'lim(x→2⁺) = 5',
            'f(2) = 5',
            '',
            'Left limit ≠ Right limit',
            '',
            'Conclusion: JUMP DISCONTINUITY at x = 2',
            'Jump size: 5 - 4 = 1',
            '',
            'The graph "jumps" from 4 to 5 at x = 2',
            'This creates a break in the graph'
        ],
        helper: 'Jump discontinuity occurs when left and right limits differ',
        solution: 'Jump discontinuity at x = 2 (jump of 1 unit)',
        realWorldContext: 'Discontinuities model sudden changes in real situations'
    });

    // Problem 6: Step Function (Greatest Integer)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Step Function',
        problem: 'Evaluate f(x) = ⌊x⌋ (greatest integer function) at x = 2.7 and x = -1.3',
        parameters: {
            functionType: 'step_function',
            evaluateAt: 2.7
        },
        type: 'piecewise_functions',
        context: { difficulty: 'intermediate', topic: 'Piecewise Functions - Step Function' },
        subparts: [
            'Given: f(x) = ⌊x⌋ (greatest integer ≤ x)',
            '',
            'Also called "floor function"',
            '',
            'Definition: ⌊x⌋ = greatest integer less than or equal to x',
            '',
            'Part A: f(2.7)',
            'Greatest integer ≤ 2.7 is 2',
            'f(2.7) = ⌊2.7⌋ = 2',
            '',
            'Part B: f(-1.3)',
            'Greatest integer ≤ -1.3 is -2 (not -1!)',
            'Remember: -2 < -1.3 < -1',
            'f(-1.3) = ⌊-1.3⌋ = -2',
            '',
            'Piecewise representation:',
            'f(x) = {..., -2 if -2 ≤ x < -1;',
            '           -1 if -1 ≤ x < 0;',
            '            0 if 0 ≤ x < 1;',
            '            1 if 1 ≤ x < 2;',
            '            2 if 2 ≤ x < 3; ...}',
            '',
            'Creates a "staircase" graph',
            '',
            'Common mistake: For negatives, round DOWN not toward zero'
        ],
        helper: 'Floor function rounds DOWN to nearest integer',
        solution: 'f(2.7) = 2, f(-1.3) = -2',
        realWorldContext: 'Step functions model pricing tiers and discrete levels'
    });

    // Problem 7: Real-World Piecewise (Parking Fees)
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Real-World Piecewise Application',
        problem: 'Parking costs $3 for first hour, $2 for each additional hour. Write function and find cost for 4.5 hours',
        parameters: {
            pieces: [
                { expression: '3', condition: '0 < t <= 1' },
                { expression: '3 + 2*(t - 1)', condition: 't > 1' }
            ],
            context: 'parking_fees'
        },
        type: 'piecewise_functions',
        context: { difficulty: 'beginner', topic: 'Piecewise Functions - Application' },
        subparts: [
            'Given: $3 first hour, $2 each additional hour',
            '',
            'Define function C(t) = cost for t hours',
            '',
            'Piecewise function:',
            'C(t) = {3           if 0 < t ≤ 1',
            '       {3 + 2(t-1)  if t > 1',
            '',
            'Simplify second piece:',
            'C(t) = {3       if 0 < t ≤ 1',
            '       {2t + 1  if t > 1',
            '',
            'Find C(4.5):',
            'Since 4.5 > 1, use second piece',
            'C(4.5) = 2(4.5) + 1',
            '= 9 + 1',
            '= $10',
            '',
            'Verification:',
            'First hour: $3',
            'Additional 3.5 hours: 3.5 × $2 = $7',
            'Total: $3 + $7 = $10 ✓',
            '',
            'Note: Often parking rounds up to next hour',
            'For 4.5 hours → charge for 5 hours'
        ],
        helper: 'Break real problems into pieces based on conditions',
        solution: 'C(t) = {3 if 0<t≤1; 2t+1 if t>1}, C(4.5) = $10',
        realWorldContext: 'Piecewise functions model tiered pricing structures'
    });

    return relatedProblems;
}




function generateRelatedAlgebraicExpressions() {
    const relatedProblems = [];

    // Problem 1: Combining Like Terms
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Combining Like Terms',
        problem: 'Simplify: 3x + 5x - 2x + 7',
        parameters: { expression: '3x + 5x - 2x + 7' },
        type: 'combine_like_terms',
        context: { difficulty: 'beginner', topic: 'Simplification' },
        subparts: [
            'Given: 3x + 5x - 2x + 7',
            'Identify like terms: 3x, 5x, -2x are like terms',
            'Constant term: 7',
            'Combine x terms: 3x + 5x - 2x = (3 + 5 - 2)x = 6x',
            'Final result: 6x + 7',
            'Check: All like terms combined ✓'
        ],
        helper: 'Like terms have the same variable and exponent',
        solution: '6x + 7',
        realWorldContext: 'Simplifying algebraic expressions'
    });
    
  
    // Problem 2: Distributive Property
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Distributive Property',
        problem: 'Expand: 4(2x + 5)',
        parameters: { expression: '4(2x + 5)' },
        type: 'distribute',
        context: { difficulty: 'beginner', topic: 'Distribution' },
        subparts: [
            'Given: 4(2x + 5)',
            'Apply distributive property: a(b + c) = ab + ac',
            'Multiply 4 by first term: 4 × 2x = 8x',
            'Multiply 4 by second term: 4 × 5 = 20',
            'Combine: 8x + 20',
            'Check: Factor back to verify: 4(2x + 5) ✓'
        ],
        helper: 'Multiply the outside term by each term inside parentheses',
        solution: '8x + 20',
        realWorldContext: 'Expanding algebraic expressions'
    });

    // Problem 3: FOIL Method
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'FOIL Method - Binomial Multiplication',
        problem: 'Expand: (x + 3)(x + 5)',
        parameters: { expression: '(x + 3)(x + 5)' },
        type: 'foil_multiplication',
        context: { difficulty: 'intermediate', topic: 'Binomial Multiplication' },
        subparts: [
            'Given: (x + 3)(x + 5)',
            'Use FOIL: First, Outer, Inner, Last',
            'First: x × x = x²',
            'Outer: x × 5 = 5x',
            'Inner: 3 × x = 3x',
            'Last: 3 × 5 = 15',
            'Combine: x² + 5x + 3x + 15',
            'Simplify: x² + 8x + 15',
            'Check: Factor back to verify ✓'
        ],
        helper: 'FOIL stands for First, Outer, Inner, Last',
        solution: 'x² + 8x + 15',
        realWorldContext: 'Multiplying binomial expressions'
    });

    // Problem 4: Perfect Square Expansion
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Perfect Square Expansion',
        problem: 'Expand: (x + 4)²',
        parameters: { expression: '(x + 4)^2' },
        type: 'perfect_square',
        context: { difficulty: 'intermediate', topic: 'Special Products' },
        subparts: [
            'Given: (x + 4)²',
            'Perfect square formula: (a + b)² = a² + 2ab + b²',
            'Here: a = x, b = 4',
            'a² = x²',
            '2ab = 2(x)(4) = 8x',
            'b² = 4² = 16',
            'Result: x² + 8x + 16',
            'Check: This is a perfect square trinomial ✓'
        ],
        helper: 'Use the perfect square formula: (a + b)² = a² + 2ab + b²',
        solution: 'x² + 8x + 16',
        realWorldContext: 'Special product patterns in algebra'
    });

    // Problem 5: Difference of Squares
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Difference of Squares',
        problem: 'Factor: x² - 25',
        parameters: { expression: 'x^2 - 25' },
        type: 'difference_of_squares',
        context: { difficulty: 'intermediate', topic: 'Factoring' },
        subparts: [
            'Given: x² - 25',
            'Recognize pattern: a² - b²',
            'Identify: a² = x², so a = x',
            'Identify: b² = 25, so b = 5',
            'Apply formula: a² - b² = (a + b)(a - b)',
            'Result: (x + 5)(x - 5)',
            'Check: Multiply back: (x + 5)(x - 5) = x² - 25 ✓'
        ],
        helper: 'Use difference of squares: a² - b² = (a + b)(a - b)',
        solution: '(x + 5)(x - 5)',
        realWorldContext: 'Factoring special patterns'
    });

    // Problem 6: GCF Factoring
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Greatest Common Factor',
        problem: 'Factor: 6x² + 9x',
        parameters: { expression: '6x^2 + 9x' },
        type: 'gcf_factoring',
        context: { difficulty: 'beginner', topic: 'GCF Factoring' },
        subparts: [
            'Given: 6x² + 9x',
            'Find GCF of coefficients: GCF(6, 9) = 3',
            'Find common variables: both have x',
            'Lowest power of x: x¹ = x',
            'GCF = 3x',
            'Divide each term by 3x:',
            '6x² ÷ 3x = 2x',
            '9x ÷ 3x = 3',
            'Result: 3x(2x + 3)',
            'Check: 3x(2x + 3) = 6x² + 9x ✓'
        ],
        helper: 'Factor out the greatest common factor from all terms',
        solution: '3x(2x + 3)',
        realWorldContext: 'Simplifying by factoring out common factors'
    });

    // Problem 7: Quadratic Factoring
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Factoring Quadratic Expressions',
        problem: 'Factor: x² + 7x + 12',
        parameters: { expression: 'x^2 + 7x + 12' },
        type: 'factor_quadratic',
        context: { difficulty: 'intermediate', topic: 'Quadratic Factoring' },
        subparts: [
            'Given: x² + 7x + 12',
            'Need two numbers that:',
            '  - Multiply to 12 (constant term)',
            '  - Add to 7 (coefficient of x)',
            'Factor pairs of 12: (1,12), (2,6), (3,4)',
            'Check sums: 1+12=13, 2+6=8, 3+4=7 ✓',
            'Use 3 and 4',
            'Result: (x + 3)(x + 4)',
            'Check: (x + 3)(x + 4) = x² + 4x + 3x + 12 = x² + 7x + 12 ✓'
        ],
        helper: 'Find two numbers that multiply to c and add to b',
        solution: '(x + 3)(x + 4)',
        realWorldContext: 'Factoring trinomials'
    });

    // Problem 8: Polynomial Addition
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Adding Polynomials',
        problem: 'Add: (3x² + 2x - 5) + (x² - 4x + 7)',
        parameters: { 
            polynomial1: '3x^2 + 2x - 5',
            polynomial2: 'x^2 - 4x + 7'
        },
        type: 'polynomial_addition',
        context: { difficulty: 'beginner', topic: 'Polynomial Operations' },
        subparts: [
            'Given: (3x² + 2x - 5) + (x² - 4x + 7)',
            'Remove parentheses: 3x² + 2x - 5 + x² - 4x + 7',
            'Group like terms:',
            '  x² terms: 3x² + x² = 4x²',
            '  x terms: 2x - 4x = -2x',
            '  Constants: -5 + 7 = 2',
            'Result: 4x² - 2x + 2',
            'Check: All like terms combined ✓'
        ],
        helper: 'Combine like terms by adding coefficients',
        solution: '4x² - 2x + 2',
        realWorldContext: 'Adding polynomial expressions'
    });

    // Problem 9: Polynomial Subtraction
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Subtracting Polynomials',
        problem: 'Subtract: (5x² + 3x - 2) - (2x² - x + 4)',
        parameters: {
            polynomial1: '5x^2 + 3x - 2',
            polynomial2: '2x^2 - x + 4'
        },
        type: 'polynomial_subtraction',
        context: { difficulty: 'intermediate', topic: 'Polynomial Operations' },
        subparts: [
            'Given: (5x² + 3x - 2) - (2x² - x + 4)',
            'Distribute negative: 5x² + 3x - 2 - 2x² + x - 4',
            'Group like terms:',
            '  x² terms: 5x² - 2x² = 3x²',
            '  x terms: 3x + x = 4x',
            '  Constants: -2 - 4 = -6',
            'Result: 3x² + 4x - 6',
            'Check: Sign changes applied correctly ✓'
        ],
        helper: 'Distribute the negative sign, then combine like terms',
        solution: '3x² + 4x - 6',
        realWorldContext: 'Subtracting polynomial expressions'
    });

    // Problem 10: Simplifying Radicals
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Simplifying Radical Expressions',
        problem: 'Simplify: √72',
        parameters: { expression: 'sqrt(72)' },
        type: 'simplify_radicals',
        context: { difficulty: 'intermediate', topic: 'Radical Simplification' },
        subparts: [
            'Given: √72',
            'Find prime factorization: 72 = 2³ × 3²',
            'Rewrite: √72 = √(2³ × 3²)',
            'Extract perfect squares:',
            '  √(2² × 2 × 3²) = √(4 × 9 × 2)',
            '  = √4 × √9 × √2',
            '  = 2 × 3 × √2',
            'Result: 6√2',
            'Check: (6√2)² = 36 × 2 = 72 ✓'
        ],
        helper: 'Factor out perfect squares from under the radical',
        solution: '6√2',
        realWorldContext: 'Simplifying radical expressions'
    });

    // Problem 11: Exponent Rules
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Simplifying with Exponent Rules',
        problem: 'Simplify: x⁴ · x³',
        parameters: { expression: 'x^4 * x^3' },
        type: 'simplify_exponents',
        context: { difficulty: 'beginner', topic: 'Exponent Rules' },
        subparts: [
            'Given: x⁴ · x³',
            'Apply product rule: x^m · x^n = x^(m+n)',
            'Add exponents: 4 + 3 = 7',
            'Result: x⁷',
            'Check: Same base, exponents added ✓',
            'Expanded form: (xxxx)(xxx) = xxxxxxx = x⁷'
        ],
        helper: 'When multiplying same bases, add the exponents',
        solution: 'x⁷',
        realWorldContext: 'Applying exponent rules'
    });

    // Problem 12: Expression Evaluation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Evaluating Expressions',
        problem: 'Evaluate: 2x² - 3x + 5 when x = 3',
        parameters: { 
            expression: '2x^2 - 3x + 5',
            values: { x: 3 }
        },
        type: 'evaluate_expression',
        context: { difficulty: 'beginner', topic: 'Expression Evaluation' },
        subparts: [
            'Given: 2x² - 3x + 5, x = 3',
            'Substitute x = 3:',
            '2(3)² - 3(3) + 5',
            'Calculate (3)²: 2(9) - 3(3) + 5',
            'Multiply: 18 - 9 + 5',
            'Add/subtract left to right: 18 - 9 = 9',
            '9 + 5 = 14',
            'Result: 14'
        ],
        helper: 'Replace variable with value and calculate using order of operations',
        solution: '14',
        realWorldContext: 'Finding numerical values of expressions'
    });

    // Problem 13: Completing the Square (Expression Form)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Completing the Square',
        problem: 'Convert to vertex form: x² + 6x + 2',
        parameters: { expression: 'x^2 + 6x + 2' },
        type: 'complete_square',
        context: { difficulty: 'advanced', topic: 'Completing the Square' },
        subparts: [
            'Given: x² + 6x + 2',
            'Take half of b coefficient: 6/2 = 3',
            'Square it: 3² = 9',
            'Add and subtract 9: x² + 6x + 9 - 9 + 2',
            'Group perfect square: (x² + 6x + 9) - 9 + 2',
            'Factor perfect square: (x + 3)² - 9 + 2',
            'Simplify: (x + 3)² - 7',
            'Vertex form: (x + 3)² - 7',
            'Vertex: (-3, -7)'
        ],
        helper: 'Add (b/2)² inside and subtract it outside',
        solution: '(x + 3)² - 7',
        realWorldContext: 'Converting to vertex form for analysis'
    });

    // Problem 14: Rationalize Denominator
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rationalizing Denominators',
        problem: 'Rationalize: 1/√5',
        parameters: { expression: '1/sqrt(5)' },
        type: 'rationalize_denominator',
        context: { difficulty: 'intermediate', topic: 'Radical Expressions' },
        subparts: [
            'Given: 1/√5',
            'Multiply by √5/√5 (which equals 1):',
            '(1/√5) × (√5/√5)',
            'Multiply numerators: 1 × √5 = √5',
            'Multiply denominators: √5 × √5 = 5',
            'Result: √5/5',
            'Check: No radical in denominator ✓'
        ],
        helper: 'Multiply by the radical over itself to eliminate from denominator',
        solution: '√5/5',
        realWorldContext: 'Removing radicals from denominators'
    });

    // Problem 15: Complex FOIL with Negatives
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'FOIL with Negative Terms',
        problem: 'Expand: (2x - 3)(x + 4)',
        parameters: { expression: '(2x - 3)(x + 4)' },
        type: 'foil_multiplication',
        context: { difficulty: 'intermediate', topic: 'Advanced FOIL' },
        subparts: [
            'Given: (2x - 3)(x + 4)',
            'Use FOIL:',
            'First: 2x × x = 2x²',
            'Outer: 2x × 4 = 8x',
            'Inner: -3 × x = -3x',
            'Last: -3 × 4 = -12',
            'Combine: 2x² + 8x - 3x - 12',
            'Simplify: 2x² + 5x - 12',
            'Check: Factor to verify ✓'
        ],
        helper: 'Watch signs carefully when multiplying negative terms',
        solution: '2x² + 5x - 12',
        realWorldContext: 'Multiplying binomials with negative terms'
    });

    return relatedProblems;
}


// ============== TRIANGLE - RELATED PROBLEMS GENERATOR ==============

function generateRelatedTriangleProblems() {
    const relatedProblems = [];

    // Problem 1: Basic Pythagorean Theorem
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pythagorean Theorem - Find Hypotenuse',
        problem: 'A right triangle has legs of length 3 and 4. Find the hypotenuse.',
        parameters: { a: 3, b: 4, findSide: 'c' },
        type: 'pythagorean',
        context: { difficulty: 'beginner', topic: 'Pythagorean Theorem' },
        subparts: [
            'Given: Right triangle with legs a = 3 and b = 4',
            'Find: Hypotenuse c',
            'Formula: c² = a² + b²',
            'c² = 3² + 4²',
            'c² = 9 + 16 = 25',
            'c = √25 = 5',
            'The hypotenuse is 5 units'
        ],
        helper: 'Square the legs, add them, then take the square root',
        solution: 'c = 5',
        realWorldContext: 'Finding diagonal distances, construction measurements'
    });

    // Problem 2: Pythagorean - Find Leg
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pythagorean Theorem - Find Missing Leg',
        problem: 'A right triangle has hypotenuse 13 and one leg 5. Find the other leg.',
        parameters: { b: 5, c: 13, findSide: 'a' },
        type: 'pythagorean',
        context: { difficulty: 'beginner', topic: 'Pythagorean Theorem' },
        subparts: [
            'Given: Hypotenuse c = 13, leg b = 5',
            'Find: Leg a',
            'Formula: a² = c² - b²',
            'a² = 13² - 5²',
            'a² = 169 - 25 = 144',
            'a = √144 = 12',
            'The missing leg is 12 units'
        ],
        helper: 'Subtract the known leg squared from hypotenuse squared',
        solution: 'a = 12',
        realWorldContext: 'Finding unknown dimensions in construction'
    });

    // Problem 3: Triangle Area - Base and Height
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Triangle Area from Base and Height',
        problem: 'Find the area of a triangle with base 8 cm and height 5 cm.',
        parameters: { base: 8, height: 5, findWhat: 'area' },
        type: 'triangle_area_base_height',
        context: { difficulty: 'beginner', topic: 'Triangle Area' },
        subparts: [
            'Given: base = 8 cm, height = 5 cm',
            'Formula: A = (1/2) × base × height',
            'A = (1/2) × 8 × 5',
            'A = (1/2) × 40',
            'A = 20 square cm',
            'The area is 20 cm²'
        ],
        helper: 'Multiply base by height, then divide by 2',
        solution: 'Area = 20 cm²',
        realWorldContext: 'Calculating material needed for triangular surfaces'
    });

    // Problem 4: Heron's Formula
    relatedProblems.push({
        difficulty: 'harder',
        scenario: "Triangle Area - Heron's Formula",
        problem: 'Find the area of a triangle with sides 5, 6, and 7.',
        parameters: { a: 5, b: 6, c: 7 },
        type: 'triangle_area_herons',
        context: { difficulty: 'intermediate', topic: "Heron's Formula" },
        subparts: [
            'Given: sides a = 5, b = 6, c = 7',
            'Step 1: Calculate semi-perimeter',
            's = (a + b + c)/2 = (5 + 6 + 7)/2 = 9',
            'Step 2: Apply Heron\'s formula',
            'A = √[s(s-a)(s-b)(s-c)]',
            'A = √[9(9-5)(9-6)(9-7)]',
            'A = √[9 × 4 × 3 × 2]',
            'A = √216 ≈ 14.70 square units'
        ],
        helper: 'Calculate semi-perimeter first, then apply formula',
        solution: 'Area ≈ 14.70 square units',
        realWorldContext: 'Finding area when only sides are known'
    });

    // Problem 5: Triangle Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Find Missing Angle',
        problem: 'Two angles of a triangle measure 65° and 48°. Find the third angle.',
        parameters: { angleA: 65, angleB: 48, findAngle: 'C' },
        type: 'triangle_angles',
        context: { difficulty: 'beginner', topic: 'Triangle Angle Sum' },
        subparts: [
            'Given: ∠A = 65°, ∠B = 48°',
            'Find: ∠C',
            'Angle sum property: ∠A + ∠B + ∠C = 180°',
            '65° + 48° + ∠C = 180°',
            '113° + ∠C = 180°',
            '∠C = 180° - 113°',
            '∠C = 67°'
        ],
        helper: 'All triangle angles sum to 180°',
        solution: '∠C = 67°',
        realWorldContext: 'Navigation, engineering design, architecture'
    });

    // Problem 6: Law of Sines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Law of Sines - Find Side',
        problem: 'In triangle ABC, angle A = 30°, angle B = 45°, and side b = 10. Find side a.',
        parameters: { angleA: 30, angleB: 45, b: 10, findWhat: 'side' },
        type: 'law_of_sines',
        context: { difficulty: 'intermediate', topic: 'Law of Sines' },
        subparts: [
            'Given: ∠A = 30°, ∠B = 45°, side b = 10',
            'Find: side a',
            'Law of Sines: a/sin(A) = b/sin(B)',
            'a/sin(30°) = 10/sin(45°)',
            'a/0.5 = 10/0.7071',
            'a = 10 × 0.5/0.7071',
            'a ≈ 7.07 units'
        ],
        helper: 'Match each side with its opposite angle',
        solution: 'a ≈ 7.07 units',
        realWorldContext: 'Surveying, navigation calculations'
    });

    // Problem 7: Law of Cosines
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Law of Cosines - Find Side (SAS)',
        problem: 'A triangle has sides a = 7, b = 8, and included angle C = 60°. Find side c.',
        parameters: { a: 7, b: 8, angleC: 60, findWhat: 'side' },
        type: 'law_of_cosines',
        context: { difficulty: 'intermediate', topic: 'Law of Cosines' },
        subparts: [
            'Given: a = 7, b = 8, ∠C = 60°',
            'Find: side c',
            'Law of Cosines: c² = a² + b² - 2ab cos(C)',
            'c² = 7² + 8² - 2(7)(8)cos(60°)',
            'c² = 49 + 64 - 112(0.5)',
            'c² = 113 - 56 = 57',
            'c = √57 ≈ 7.55 units'
        ],
        helper: 'Use when you have two sides and the included angle',
        solution: 'c ≈ 7.55 units',
        realWorldContext: 'Engineering, physics force calculations'
    });

    // Problem 8: Triangle Inequality
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangle Inequality Theorem',
        problem: 'Can sides of length 5, 7, and 13 form a valid triangle?',
        parameters: { a: 5, b: 7, c: 13 },
        type: 'triangle_inequality',
        context: { difficulty: 'beginner', topic: 'Triangle Inequality' },
        subparts: [
            'Given: sides 5, 7, 13',
            'Check: sum of any two sides > third side',
            'Test 1: 5 + 7 = 12, is 12 > 13? NO',
            'Test 2: 5 + 13 = 18, is 18 > 7? YES',
            'Test 3: 7 + 13 = 20, is 20 > 5? YES',
            'Since 5 + 7 is NOT greater than 13,',
            'these sides CANNOT form a triangle'
        ],
        helper: 'Sum of any two sides must exceed the third',
        solution: 'No valid triangle',
        realWorldContext: 'Validating measurements before construction'
    });

    // Problem 9: 45-45-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '45-45-90 Special Right Triangle',
        problem: 'In a 45-45-90 triangle, if each leg is 6, find the hypotenuse.',
        parameters: { type: '45-45-90', knownSide: 'leg', knownValue: 6 },
        type: 'special_right_triangles',
        context: { difficulty: 'beginner', topic: 'Special Right Triangles' },
        subparts: [
            'Given: 45-45-90 triangle with legs = 6',
            'Ratio: 1 : 1 : √2',
            'If legs = 6, then hypotenuse = 6√2',
            'Hypotenuse = 6 × 1.414',
            'Hypotenuse ≈ 8.49 units',
            'Exact answer: 6√2'
        ],
        helper: 'In 45-45-90, hypotenuse = leg × √2',
        solution: 'Hypotenuse = 6√2 ≈ 8.49',
        realWorldContext: 'Diagonal measurements in squares'
    });

    // Problem 10: 30-60-90 Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: '30-60-90 Special Right Triangle',
        problem: 'In a 30-60-90 triangle, if the short leg is 5, find the other sides.',
        parameters: { type: '30-60-90', knownSide: 'short', knownValue: 5 },
        type: 'special_right_triangles',
        context: { difficulty: 'beginner', topic: 'Special Right Triangles' },
        subparts: [
            'Given: 30-60-90 triangle, short leg = 5',
            'Ratio: 1 : √3 : 2',
            'Short leg = 5',
            'Long leg = 5√3 ≈ 8.66',
            'Hypotenuse = 2 × 5 = 10',
            'All sides: 5, 5√3, 10'
        ],
        helper: 'Multiply short leg by √3 for long leg, by 2 for hypotenuse',
        solution: 'Long leg = 5√3, Hypotenuse = 10',
        realWorldContext: 'Common in engineering and construction'
    });

    // Problem 11: SAS Area Formula
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triangle Area with SAS',
        problem: 'Find area of triangle with sides a = 10, b = 12, and included angle C = 45°.',
        parameters: { a: 10, b: 12, angleC: 45 },
        type: 'triangle_area_sas',
        context: { difficulty: 'intermediate', topic: 'Triangle Area - SAS' },
        subparts: [
            'Given: a = 10, b = 12, ∠C = 45°',
            'Formula: A = (1/2)ab sin(C)',
            'A = (1/2)(10)(12)sin(45°)',
            'A = 60 × sin(45°)',
            'A = 60 × 0.7071',
            'A ≈ 42.43 square units'
        ],
        helper: 'Use when you have two sides and included angle',
        solution: 'Area ≈ 42.43 square units',
        realWorldContext: 'Land surveying and area calculations'
    });

    // Problem 12: Coordinate Triangle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Triangle in Coordinate Geometry',
        problem: 'Find perimeter and area of triangle with vertices A(0,0), B(6,0), C(3,4).',
        parameters: { 
            vertices: [
                { x: 0, y: 0 },
                { x: 6, y: 0 },
                { x: 3, y: 4 }
            ],
            findWhat: 'all'
        },
        type: 'coordinate_triangles',
        context: { difficulty: 'intermediate', topic: 'Coordinate Geometry Triangles' },
        subparts: [
            'Given: A(0,0), B(6,0), C(3,4)',
            'Side AB: √[(6-0)² + (0-0)²] = 6',
            'Side BC: √[(3-6)² + (4-0)²] = √(9+16) = 5',
            'Side AC: √[(3-0)² + (4-0)²] = √(9+16) = 5',
            'Perimeter = 6 + 5 + 5 = 16 units',
            'Area = (1/2)|0(0-4) + 6(4-0) + 3(0-0)|',
            'Area = (1/2)|0 + 24 + 0| = 12 square units'
        ],
        helper: 'Use distance formula for sides, coordinate formula for area',
        solution: 'Perimeter = 16, Area = 12',
        realWorldContext: 'GPS calculations, computer graphics'
    });

    return relatedProblems;
}

// ============== CIRCLE GEOMETRY - RELATED PROBLEMS GENERATOR ==============

function generateRelatedCircleProblems() {
    const relatedProblems = [];

    // Problem 1: Standard Form Circle
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Standard Form Circle',
        problem: 'Find center and radius: (x - 2)² + (y + 3)² = 25',
        parameters: { h: 2, k: -3, rSquared: 25 },
        type: 'standard_form',
        context: { difficulty: 'beginner', topic: 'Circle Equations - Standard Form' },
        subparts: [
            'Given: (x - 2)² + (y + 3)² = 25',
            'Standard form: (x - h)² + (y - k)² = r²',
            'Compare: h = 2, k = -3, r² = 25',
            'Center: (2, -3)',
            'Radius: r = √25 = 5',
            'Check: Point (7, -3) should be on circle',
            'Distance from center: √[(7-2)² + (-3-(-3))²] = √25 = 5 ✓'
        ],
        helper: 'In (x - h)², center x-coordinate is +h, not -h',
        solution: 'Center: (2, -3), Radius: 5',
        realWorldContext: 'Finding location and size of circular regions'
    });

    // Problem 2: General Form to Standard Form
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'General Form Conversion',
        problem: 'Convert to standard form: x² + y² - 6x + 4y - 12 = 0',
        parameters: { D: -6, E: 4, F: -12 },
        type: 'general_form',
        context: { difficulty: 'intermediate', topic: 'Converting Circle Forms' },
        subparts: [
            'Given: x² + y² - 6x + 4y - 12 = 0',
            'Group: (x² - 6x) + (y² + 4y) = 12',
            'Complete square for x: (x² - 6x + 9) = (x - 3)²',
            'Complete square for y: (y² + 4y + 4) = (y + 2)²',
            'Add 9 + 4 to both sides:',
            '(x - 3)² + (y + 2)² = 12 + 9 + 4 = 25',
            'Center: (3, -2)',
            'Radius: r = √25 = 5'
        ],
        helper: 'Complete the square for both x and y',
        solution: 'Center: (3, -2), Radius: 5',
        realWorldContext: 'Converting between equation forms'
    });

    // Problem 3: Area and Circumference
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Circle Measurements',
        problem: 'Find area and circumference of circle with radius 7',
        parameters: { radius: 7 },
        type: 'area_circumference',
        context: { difficulty: 'beginner', topic: 'Circle Area and Circumference' },
        subparts: [
            'Given: radius r = 7',
            'Circumference: C = 2πr',
            'C = 2π(7) = 14π ≈ 43.98',
            'Area: A = πr²',
            'A = π(7)² = 49π ≈ 153.94',
            'Diameter: d = 2r = 14'
        ],
        helper: 'Remember: C = 2πr and A = πr²',
        solution: 'Area: 49π, Circumference: 14π',
        realWorldContext: 'Calculating circular measurements'
    });

    // Problem 4: Arc Length
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Arc Length Calculation',
        problem: 'Find arc length: radius = 10, central angle = 60°',
        parameters: { radius: 10, angle: 60, angleUnit: 'degrees' },
        type: 'arc_length',
        context: { difficulty: 'intermediate', topic: 'Arc Length' },
        subparts: [
            'Given: r = 10, θ = 60°',
            'Arc length formula: L = (θ/360°) × 2πr',
            'L = (60/360) × 2π(10)',
            'L = (1/6) × 20π',
            'L = (20π/6) = (10π/3) ≈ 10.47',
            'Alternative (radians): θ = π/3, L = θr = (π/3)(10) = 10π/3'
        ],
        helper: 'Arc is a fraction of the full circumference',
        solution: 'Arc length: 10π/3 ≈ 10.47',
        realWorldContext: 'Measuring curved distances'
    });

    // Problem 5: Sector Area
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sector Area Calculation',
        problem: 'Find sector area: radius = 8, central angle = 90°',
        parameters: { radius: 8, angle: 90, angleUnit: 'degrees' },
        type: 'sector_area',
        context: { difficulty: 'intermediate', topic: 'Sector Area' },
        subparts: [
            'Given: r = 8, θ = 90°',
            'Sector area formula: A = (θ/360°) × πr²',
            'A = (90/360) × π(8)²',
            'A = (1/4) × 64π',
            'A = 16π ≈ 50.27',
            'This is 1/4 of the full circle area'
        ],
        helper: 'Sector is a "slice" of the circle',
        solution: 'Sector area: 16π ≈ 50.27',
        realWorldContext: 'Pizza slice, pie chart calculations'
    });

    // Problem 6: Chord Length
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Chord Length Problem',
        problem: 'Find chord length: radius = 13, distance from center = 5',
        parameters: { radius: 13, distance: 5 },
        type: 'chord_length',
        context: { difficulty: 'intermediate', topic: 'Chord Properties' },
        subparts: [
            'Given: r = 13, d = 5 (perpendicular distance)',
            'Chord length formula: L = 2√(r² - d²)',
            'L = 2√(13² - 5²)',
            'L = 2√(169 - 25)',
            'L = 2√144',
            'L = 2(12) = 24',
            'Check using Pythagorean theorem: 5² + 12² = 13² ✓'
        ],
        helper: 'Use Pythagorean theorem with half-chord',
        solution: 'Chord length: 24',
        realWorldContext: 'Bridge arch, tunnel design'
    });

    // Problem 7: Tangent Line
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Tangent Line Equation',
        problem: 'Find tangent to circle x² + y² = 25 at point (3, 4)',
        parameters: { h: 0, k: 0, r: 5, pointX: 3, pointY: 4 },
        type: 'tangent_line',
        context: { difficulty: 'intermediate', topic: 'Tangent Lines' },
        subparts: [
            'Given: Circle x² + y² = 25, Point (3, 4)',
            'Center: (0, 0), Radius: 5',
            'Check point on circle: 3² + 4² = 9 + 16 = 25 ✓',
            'Radius slope: m_r = (4-0)/(3-0) = 4/3',
            'Tangent perpendicular to radius',
            'Tangent slope: m_t = -1/(4/3) = -3/4',
            'Tangent equation: y - 4 = (-3/4)(x - 3)',
            'Simplified: 3x + 4y = 25'
        ],
        helper: 'Tangent is perpendicular to radius at contact point',
        solution: 'Tangent: 3x + 4y = 25',
        realWorldContext: 'Wheel touching ground, optical systems'
    });

    // Problem 8: Circle Intersection
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circle Intersection',
        problem: 'Find intersection: x² + y² = 25 and (x-3)² + y² = 16',
        parameters: { h1: 0, k1: 0, r1: 5, h2: 3, k2: 0, r2: 4 },
        type: 'circle_intersection',
        context: { difficulty: 'advanced', topic: 'Circle Intersections' },
        subparts: [
            'Circle 1: x² + y² = 25 (center (0,0), radius 5)',
            'Circle 2: (x-3)² + y² = 16 (center (3,0), radius 4)',
            'Distance between centers: d = 3',
            'Since |r₁ - r₂| < d < r₁ + r₂',
            '(5-4) < 3 < (5+4) → 1 < 3 < 9',
            'Two intersection points exist',
            'Subtract equations to find x:',
            'x² - (x-3)² = 25 - 16',
            'x = 2.5',
            'Solve for y: y = ±√18.75 ≈ ±4.33'
        ],
        helper: 'Compare distance with sum and difference of radii',
        solution: 'Two intersection points at x = 2.5',
        realWorldContext: 'Overlapping coverage areas, GPS'
    });

    // Problem 9: Circle Through Three Points
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circle Through Three Points',
        problem: 'Find circle through points (0,0), (4,0), (0,3)',
        parameters: { x1: 0, y1: 0, x2: 4, y2: 0, x3: 0, y3: 3 },
        type: 'circle_three_points',
        context: { difficulty: 'advanced', topic: 'Circle Determination' },
        subparts: [
            'Given three points: (0,0), (4,0), (0,3)',
            'Check not collinear (they form a triangle)',
            'Center (h,k) equidistant from all points',
            'From (0,0): h² + k² = r²',
            'From (4,0): (h-4)² + k² = r²',
            'From (0,3): h² + (k-3)² = r²',
            'Solving: h = 2, k = 1.5',
            'r² = 2² + 1.5² = 6.25',
            'r = 2.5',
            'Equation: (x-2)² + (y-1.5)² = 6.25'
        ],
        helper: 'Use equal distances from center to each point',
        solution: 'Center: (2, 1.5), Radius: 2.5',
        realWorldContext: 'Circumcircle of triangle, curve fitting'
    });

    // Problem 10: Inscribed Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inscribed Angle Theorem',
        problem: 'Central angle = 80°, find inscribed angle',
        parameters: { centralAngle: 80, angleUnit: 'degrees' },
        type: 'inscribed_angle',
        context: { difficulty: 'intermediate', topic: 'Inscribed Angles' },
        subparts: [
            'Given: Central angle = 80°',
            'Inscribed Angle Theorem:',
            'Inscribed angle = (1/2) × Central angle',
            'Inscribed angle = (1/2) × 80°',
            'Inscribed angle = 40°',
            'Any inscribed angle subtending same arc = 40°'
        ],
        helper: 'Inscribed angle is half the central angle',
        solution: 'Inscribed angle: 40°',
        realWorldContext: 'Navigation, surveying angles'
    });

    return relatedProblems;
}

function generateRelatedQuadrilaterals() {
    const relatedProblems = [];

    // Problem 1: Square - Find All Measurements from Side
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Square - Complete Analysis',
        problem: 'Find all measurements of a square with side length 8 units',
        parameters: { side: 8 },
        type: 'square',
        context: { difficulty: 'beginner', topic: 'Square Properties' },
        subparts: [
            'Given: Side length s = 8 units',
            'Calculate perimeter: P = 4s = 4(8) = 32 units',
            'Calculate area: A = s² = 8² = 64 square units',
            'Calculate diagonal: d = s√2 = 8√2 ≈ 11.31 units',
            'All angles = 90°',
            'All sides equal: 8 units each'
        ],
        helper: 'In a square, all measurements can be derived from the side length',
        solution: 'P = 32 units, A = 64 sq units, d = 8√2 units',
        realWorldContext: 'Floor tiles, chess boards, square frames'
    });

    // Problem 2: Rectangle - Find Missing Dimension
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rectangle - Find Width from Area',
        problem: 'A rectangle has area 72 square units and length 9 units. Find the width and perimeter.',
        parameters: { area: 72, length: 9 },
        type: 'rectangle',
        context: { difficulty: 'beginner', topic: 'Rectangle Dimensions' },
        subparts: [
            'Given: Area A = 72 sq units, Length l = 9 units',
            'Formula: A = l × w',
            'Solve for width: w = A/l = 72/9 = 8 units',
            'Calculate perimeter: P = 2(l + w) = 2(9 + 8) = 34 units',
            'Calculate diagonal: d = √(l² + w²) = √(81 + 64) = √145 ≈ 12.04 units',
            'Check: 9 × 8 = 72 ✓'
        ],
        helper: 'Use area formula to find missing dimension, then calculate other measurements',
        solution: 'Width = 8 units, Perimeter = 34 units',
        realWorldContext: 'Room dimensions, screen sizes, picture frames'
    });

    // Problem 3: Parallelogram - Area and Angles
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallelogram - Area Calculation',
        problem: 'Find the area of a parallelogram with base 12 cm, height 7 cm, and one angle 60°',
        parameters: { base: 12, height: 7, angle: 60 },
        type: 'parallelogram',
        context: { difficulty: 'intermediate', topic: 'Parallelogram Area' },
        subparts: [
            'Given: Base b = 12 cm, Height h = 7 cm, Angle = 60°',
            'Area formula: A = base × height',
            'A = 12 × 7 = 84 square cm',
            'Note: Height is perpendicular to base',
            'Consecutive angle = 180° - 60° = 120°',
            'Opposite angles are equal: 60° and 120°',
            'Perimeter = 2(base + side) - need side length for this'
        ],
        helper: 'Area uses perpendicular height, not the side length',
        solution: 'Area = 84 square cm',
        realWorldContext: 'Parallelogram-shaped gardens, structural supports'
    });

    // Problem 4: Rhombus - Area from Diagonals
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Rhombus - Area from Diagonals',
        problem: 'Find the area and perimeter of a rhombus with diagonals 16 cm and 12 cm',
        parameters: { diagonal1: 16, diagonal2: 12 },
        type: 'rhombus',
        context: { difficulty: 'intermediate', topic: 'Rhombus Properties' },
        subparts: [
            'Given: Diagonal d₁ = 16 cm, Diagonal d₂ = 12 cm',
            'Area formula: A = (d₁ × d₂)/2',
            'A = (16 × 12)/2 = 192/2 = 96 square cm',
            'Find side using: 4s² = d₁² + d₂²',
            '4s² = 16² + 12² = 256 + 144 = 400',
            's² = 100, s = 10 cm',
            'Perimeter: P = 4s = 4(10) = 40 cm',
            'Check: Diagonals are perpendicular ✓'
        ],
        helper: 'Rhombus diagonals are perpendicular, use special area formula',
        solution: 'Area = 96 sq cm, Perimeter = 40 cm',
        realWorldContext: 'Diamond shapes, kite designs, decorative patterns'
    });

    // Problem 5: Trapezoid - Area Calculation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Trapezoid - Area and Median',
        problem: 'Find the area and median of a trapezoid with bases 14 cm and 8 cm, height 5 cm',
        parameters: { base1: 14, base2: 8, height: 5 },
        type: 'trapezoid',
        context: { difficulty: 'intermediate', topic: 'Trapezoid Measurements' },
        subparts: [
            'Given: Base₁ = 14 cm, Base₂ = 8 cm, Height h = 5 cm',
            'Median formula: m = (b₁ + b₂)/2',
            'm = (14 + 8)/2 = 22/2 = 11 cm',
            'Area formula: A = ((b₁ + b₂)/2) × h',
            'A = 11 × 5 = 55 square cm',
            'Alternative: A = median × height = 11 × 5 = 55 ✓',
            'The median is parallel to both bases'
        ],
        helper: 'Average the bases first, then multiply by height',
        solution: 'Area = 55 sq cm, Median = 11 cm',
        realWorldContext: 'Bridge supports, architectural designs, trapezoidal plots'
    });

    // Problem 6: Kite - Area from Diagonals
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kite - Area and Perimeter',
        problem: 'Find the area of a kite with diagonals 18 cm and 10 cm, and consecutive sides 13 cm and 15 cm',
        parameters: { diagonal1: 18, diagonal2: 10, side1: 13, side2: 15 },
        type: 'kite',
        context: { difficulty: 'intermediate', topic: 'Kite Properties' },
        subparts: [
            'Given: d₁ = 18 cm, d₂ = 10 cm, sides a = 13 cm, b = 15 cm',
            'Area formula: A = (d₁ × d₂)/2',
            'A = (18 × 10)/2 = 180/2 = 90 square cm',
            'Perimeter: P = 2(a + b)',
            'P = 2(13 + 15) = 2(28) = 56 cm',
            'Properties: Diagonals are perpendicular',
            'One diagonal bisects the other'
        ],
        helper: 'Kite area uses perpendicular diagonals like rhombus',
        solution: 'Area = 90 sq cm, Perimeter = 56 cm',
        realWorldContext: 'Kite flying, decorative designs, molecular structures'
    });

    // Problem 7: Coordinate Geometry - Quadrilateral Classification
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Coordinate Quadrilateral - Classification',
        problem: 'Classify the quadrilateral with vertices A(0,0), B(4,0), C(4,3), D(0,3) and find its area',
        parameters: { 
            vertices: [
                { x: 0, y: 0 },
                { x: 4, y: 0 },
                { x: 4, y: 3 },
                { x: 0, y: 3 }
            ]
        },
        type: 'coordinate_geometry',
        context: { difficulty: 'intermediate', topic: 'Coordinate Geometry Quadrilaterals' },
        subparts: [
            'Given vertices: A(0,0), B(4,0), C(4,3), D(0,3)',
            'Calculate side lengths:',
            'AB = 4, BC = 3, CD = 4, DA = 3',
            'Opposite sides equal: AB = CD, BC = DA',
            'Check angles using slopes:',
            'Slope AB = 0, Slope BC = undefined (vertical)',
            'All angles are 90° (perpendicular sides)',
            'Classification: Rectangle',
            'Area = length × width = 4 × 3 = 12 square units'
        ],
        helper: 'Use distance formula for sides, check perpendicularity with slopes',
        solution: 'Rectangle with Area = 12 sq units',
        realWorldContext: 'Computer graphics, GIS mapping, CAD design'
    });

    // Problem 8: Square from Diagonal
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Square - Find Side from Diagonal',
        problem: 'A square has a diagonal of 10√2 cm. Find its side length, area, and perimeter.',
        parameters: { diagonal: 10 * Math.sqrt(2) },
        type: 'square',
        context: { difficulty: 'intermediate', topic: 'Square with Diagonal' },
        subparts: [
            'Given: Diagonal d = 10√2 cm',
            'Relationship: d = s√2',
            'Solve for side: s = d/√2 = (10√2)/√2 = 10 cm',
            'Alternative: s = d√2/2 = 10√2 × √2/2 = 10 cm',
            'Area: A = s² = 10² = 100 square cm',
            'Perimeter: P = 4s = 4(10) = 40 cm',
            'Check: 10√2 = 10 × 1.414... ≈ 14.14 cm ✓'
        ],
        helper: 'Diagonal of square equals side × √2',
        solution: 'Side = 10 cm, Area = 100 sq cm, Perimeter = 40 cm',
        realWorldContext: 'Diagonal measurements in construction'
    });

    // Problem 9: Isosceles Trapezoid
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Isosceles Trapezoid - Complete Analysis',
        problem: 'An isosceles trapezoid has bases 20 cm and 12 cm, and equal legs of 5 cm. Find area and height.',
        parameters: { base1: 20, base2: 12, leg: 5 },
        type: 'isosceles_trapezoid',
        context: { difficulty: 'intermediate', topic: 'Isosceles Trapezoid' },
        subparts: [
            'Given: Base₁ = 20 cm, Base₂ = 12 cm, Legs = 5 cm each',
            'Difference in bases: 20 - 12 = 8 cm',
            'Each side extends: 8/2 = 4 cm beyond shorter base',
            'Form right triangle: leg = 5 cm, base = 4 cm',
            'Height: h = √(5² - 4²) = √(25 - 16) = √9 = 3 cm',
            'Area: A = ((20 + 12)/2) × 3 = 16 × 3 = 48 square cm',
            'Perimeter: P = 20 + 12 + 5 + 5 = 42 cm'
        ],
        helper: 'Use Pythagorean theorem to find height from leg and base difference',
        solution: 'Height = 3 cm, Area = 48 sq cm',
        realWorldContext: 'Architectural arches, container designs'
    });

    // Problem 10: Rhombus with Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rhombus - Area from Side and Angle',
        problem: 'A rhombus has side 10 cm and one angle 60°. Find its area and diagonals.',
        parameters: { side: 10, angle: 60 },
        type: 'rhombus',
        context: { difficulty: 'advanced', topic: 'Rhombus with Trigonometry' },
        subparts: [
            'Given: Side s = 10 cm, Angle θ = 60°',
            'Area formula: A = s² sin(θ)',
            'A = 10² × sin(60°) = 100 × (√3/2) = 50√3 ≈ 86.60 square cm',
            'To find diagonals, use law of cosines:',
            'd₁² = 2s²(1 - cos θ) = 2(100)(1 - 0.5) = 100',
            'd₁ = 10 cm',
            'd₂² = 2s²(1 + cos θ) = 2(100)(1 + 0.5) = 300',
            'd₂ = 10√3 ≈ 17.32 cm',
            'Check: A = (d₁ × d₂)/2 = (10 × 10√3)/2 = 50√3 ✓'
        ],
        helper: 'Use trigonometry when given side and angle',
        solution: 'Area = 50√3 sq cm, d₁ = 10 cm, d₂ = 10√3 cm',
        realWorldContext: 'Advanced geometry problems, engineering applications'
    });

    return relatedProblems;
}

function generateRelatedAngleProblems() {
    const relatedProblems = [];

    // Problem 1: Complementary Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Complementary Angles',
        problem: 'Find the complement of a 35° angle',
        parameters: { angle1: 35 },
        type: 'complementary',
        context: { difficulty: 'beginner', topic: 'Complementary Angles' },
        subparts: [
            'Given: One angle = 35°',
            'Complementary angles sum to 90°',
            'Set up equation: 35° + x = 90°',
            'Solve: x = 90° - 35° = 55°',
            'The complement is 55°',
            'Check: 35° + 55° = 90° ✓'
        ],
        helper: 'Complementary angles add up to 90°',
        solution: '55°',
        realWorldContext: 'Right angle problems in carpentry and construction'
    });

    // Problem 2: Supplementary Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Supplementary Angles',
        problem: 'Two supplementary angles where one is 3 times the other. Find both angles.',
        parameters: { relationship: '3x' },
        type: 'supplementary',
        context: { difficulty: 'intermediate', topic: 'Supplementary Angles' },
        subparts: [
            'Let smaller angle = x°',
            'Larger angle = 3x°',
            'Supplementary: x + 3x = 180°',
            '4x = 180°',
            'x = 45°',
            'Larger angle = 3(45°) = 135°',
            'Angles are 45° and 135°',
            'Check: 45° + 135° = 180° ✓'
        ],
        helper: 'Supplementary angles add up to 180°',
        solution: '45° and 135°',
        realWorldContext: 'Linear pairs in architecture and design'
    });

    // Problem 3: Vertical Angles
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Vertical Angles',
        problem: 'Two lines intersect. If one angle is 65°, find all four angles.',
        parameters: { angle1: 65 },
        type: 'vertical',
        context: { difficulty: 'beginner', topic: 'Vertical Angles' },
        subparts: [
            'Given: One angle = 65°',
            'Vertical angles are equal',
            'Angle opposite to 65° = 65°',
            'Adjacent angles are supplementary',
            'Adjacent angle = 180° - 65° = 115°',
            'Other vertical angle = 115°',
            'All four angles: 65°, 115°, 65°, 115°',
            'Check: 65° + 115° + 65° + 115° = 360° ✓'
        ],
        helper: 'Vertical angles are equal; adjacent angles sum to 180°',
        solution: '65°, 115°, 65°, 115°',
        realWorldContext: 'Intersection design in civil engineering'
    });

    // Problem 4: Triangle Angle Sum
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Triangle Angle Sum',
        problem: 'In a triangle, two angles are 45° and 70°. Find the third angle.',
        parameters: { angleA: 45, angleB: 70 },
        type: 'triangle_sum',
        context: { difficulty: 'beginner', topic: 'Triangle Angle Sum' },
        subparts: [
            'Given: ∠A = 45°, ∠B = 70°',
            'Triangle angle sum = 180°',
            '∠A + ∠B + ∠C = 180°',
            '45° + 70° + ∠C = 180°',
            '115° + ∠C = 180°',
            '∠C = 180° - 115° = 65°',
            'Third angle = 65°',
            'Check: 45° + 70° + 65° = 180° ✓'
        ],
        helper: 'All triangle angles sum to 180°',
        solution: '65°',
        realWorldContext: 'Triangulation in surveying and navigation'
    });

    // Problem 5: Exterior Angle Theorem
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Exterior Angle Theorem',
        problem: 'An exterior angle of a triangle is 110°. One remote interior angle is 45°. Find the other remote interior angle.',
        parameters: { exteriorAngle: 110, remoteInterior1: 45 },
        type: 'exterior_angle',
        context: { difficulty: 'intermediate', topic: 'Exterior Angle Theorem' },
        subparts: [
            'Given: Exterior angle = 110°',
            'One remote interior = 45°',
            'Exterior angle = sum of remote interiors',
            '110° = 45° + x',
            'x = 110° - 45° = 65°',
            'Other remote interior = 65°',
            'Check: 45° + 65° = 110° ✓'
        ],
        helper: 'Exterior angle equals sum of two remote interior angles',
        solution: '65°',
        realWorldContext: 'Structural analysis in engineering'
    });

    // Problem 6: Polygon Interior Angles
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polygon Interior Angles',
        problem: 'Find the sum of interior angles of a hexagon (6 sides).',
        parameters: { sides: 6 },
        type: 'polygon_interior',
        context: { difficulty: 'intermediate', topic: 'Polygon Interior Angles' },
        subparts: [
            'Given: Hexagon has 6 sides (n = 6)',
            'Formula: (n - 2) × 180°',
            'Sum = (6 - 2) × 180°',
            'Sum = 4 × 180°',
            'Sum = 720°',
            'Each angle in regular hexagon:',
            '720° ÷ 6 = 120°',
            'Interior angle sum = 720°'
        ],
        helper: 'Use formula (n-2) × 180° for n-sided polygon',
        solution: '720°',
        realWorldContext: 'Design of hexagonal structures and honeycomb patterns'
    });

    // Problem 7: Regular Polygon
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Regular Polygon',
        problem: 'Each interior angle of a regular polygon is 144°. How many sides does it have?',
        parameters: { singleAngle: 144, regularPolygon: true },
        type: 'polygon_interior',
        context: { difficulty: 'intermediate', topic: 'Regular Polygons' },
        subparts: [
            'Given: Each interior angle = 144°',
            'Formula for regular polygon: (n-2)×180°/n = 144°',
            'Cross multiply: (n-2)×180 = 144n',
            '180n - 360 = 144n',
            '36n = 360',
            'n = 10',
            'Alternative: 360°/(180° - 144°) = 360°/36° = 10',
            'The polygon has 10 sides (decagon)'
        ],
        helper: 'Work backwards from angle measure to find sides',
        solution: '10 sides (decagon)',
        realWorldContext: 'Geometric design and tessellation'
    });

    // Problem 8: Parallel Lines and Transversal
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallel Lines with Transversal',
        problem: 'A transversal crosses two parallel lines. If one angle is 55°, find the corresponding angle.',
        parameters: { angle1: 55 },
        type: 'parallel_transversal',
        context: { difficulty: 'intermediate', topic: 'Parallel Lines and Transversals' },
        subparts: [
            'Given: One angle = 55°',
            'Lines are parallel',
            'Corresponding angles are equal',
            'Corresponding angle = 55°',
            'Alternate interior = 55°',
            'Co-interior = 180° - 55° = 125°',
            'Adjacent supplementary = 125°'
        ],
        helper: 'Corresponding angles are equal when lines are parallel',
        solution: 'Corresponding: 55°, Co-interior: 125°',
        realWorldContext: 'Railroad tracks and parallel structure design'
    });

    // Problem 9: Angle Bisector
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Angle Bisector',
        problem: 'An angle of 84° is bisected. Find the measure of each resulting angle.',
        parameters: { originalAngle: 84 },
        type: 'angle_bisector',
        context: { difficulty: 'beginner', topic: 'Angle Bisectors' },
        subparts: [
            'Given: Original angle = 84°',
            'Bisector divides angle into two equal parts',
            'Each part = 84° ÷ 2',
            'Each part = 42°',
            'Both angles = 42° each',
            'Check: 42° + 42° = 84° ✓'
        ],
        helper: 'Bisector creates two equal angles',
        solution: '42° each',
        realWorldContext: 'Construction and geometric design'
    });

    // Problem 10: Inscribed Angle
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Inscribed Angle',
        problem: 'An inscribed angle intercepts an arc of 140°. Find the inscribed angle.',
        parameters: { arcMeasure: 140 },
        type: 'inscribed_angle',
        context: { difficulty: 'intermediate', topic: 'Inscribed Angles in Circles' },
        subparts: [
            'Given: Intercepted arc = 140°',
            'Inscribed angle theorem:',
            'Inscribed angle = (1/2) × arc',
            'Inscribed angle = (1/2) × 140°',
            'Inscribed angle = 70°',
            'Central angle = 140° (equals arc)',
            'Inscribed angle is half of central angle'
        ],
        helper: 'Inscribed angle is half the intercepted arc',
        solution: '70°',
        realWorldContext: 'Circle geometry in astronomy and design'
    });

    // Problem 11: Central Angle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Central Angle',
        problem: 'A central angle measures 75°. Find the arc it intercepts.',
        parameters: { centralAngle: 75 },
        type: 'central_angle',
        context: { difficulty: 'beginner', topic: 'Central Angles in Circles' },
        subparts: [
            'Given: Central angle = 75°',
            'Central angle property:',
            'Central angle = arc measure',
            'Arc = 75°',
            'If radius = r, arc length = (75°/360°) × 2πr',
            'Arc measure = 75°'
        ],
        helper: 'Central angle equals its intercepted arc',
        solution: '75°',
        realWorldContext: 'Pie charts and sector calculations'
    });

    // Problem 12: Isosceles Triangle
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Isosceles Triangle Angles',
        problem: 'In an isosceles triangle, the vertex angle is 40°. Find the base angles.',
        parameters: { angleA: 40 },
        type: 'triangle_sum',
        context: { difficulty: 'intermediate', topic: 'Isosceles Triangle Properties' },
        subparts: [
            'Given: Vertex angle = 40°',
            'Isosceles: two base angles are equal',
            'Let each base angle = x',
            '40° + x + x = 180°',
            '40° + 2x = 180°',
            '2x = 140°',
            'x = 70°',
            'Each base angle = 70°',
            'Check: 40° + 70° + 70° = 180° ✓'
        ],
        helper: 'In isosceles triangles, base angles are equal',
        solution: '70° each',
        realWorldContext: 'Symmetrical design and architecture'
    });

    return relatedProblems;
}


function generateRelatedSimilarityCongruence() {
    const relatedProblems = [];

    // Problem 1: SSS Congruence
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'SSS Congruence',
        problem: 'Triangle ABC has sides 5, 7, 9. Triangle DEF has sides 5, 7, 9. Are they congruent?',
        parameters: {
            triangle1: { sides: [5, 7, 9] },
            triangle2: { sides: [5, 7, 9] }
        },
        type: 'sss_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - SSS' },
        subparts: [
            'Given: △ABC with sides 5, 7, 9',
            '       △DEF with sides 5, 7, 9',
            'Compare all three pairs of sides:',
            'Side 1: 5 = 5 ✓',
            'Side 2: 7 = 7 ✓',
            'Side 3: 9 = 9 ✓',
            'All three pairs of sides are equal',
            'By SSS Postulate: △ABC ≅ △DEF'
        ],
        helper: 'SSS: If all three sides are equal, triangles are congruent',
        solution: 'Yes, △ABC ≅ △DEF by SSS',
        realWorldContext: 'Ensuring identical triangular parts in manufacturing'
    });

    // Problem 2: SAS Congruence
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'SAS Congruence',
        problem: 'Triangle ABC has sides AB=6, AC=8, ∠A=50°. Triangle DEF has sides DE=6, DF=8, ∠D=50°. Are they congruent?',
        parameters: {
            triangle1: { side1: 6, angle: 50, side2: 8 },
            triangle2: { side1: 6, angle: 50, side2: 8 }
        },
        type: 'sas_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - SAS' },
        subparts: [
            'Given: △ABC with AB=6, ∠A=50°, AC=8',
            '       △DEF with DE=6, ∠D=50°, DF=8',
            'Check SAS conditions:',
            'Side 1: AB=6, DE=6 ✓',
            'Included angle: ∠A=50°, ∠D=50° ✓',
            'Side 2: AC=8, DF=8 ✓',
            'Two sides and included angle are equal',
            'By SAS Postulate: △ABC ≅ △DEF'
        ],
        helper: 'SAS: Two sides and included angle must be equal',
        solution: 'Yes, △ABC ≅ △DEF by SAS',
        realWorldContext: 'Structural engineering with angle constraints'
    });

    // Problem 3: AA Similarity
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'AA Similarity',
        problem: 'Triangle ABC has ∠A=40°, ∠B=60°. Triangle DEF has ∠D=40°, ∠E=60°. Are they similar?',
        parameters: {
            triangle1: { angle1: 40, angle2: 60 },
            triangle2: { angle1: 40, angle2: 60 }
        },
        type: 'aa_similarity',
        context: { difficulty: 'beginner', topic: 'Triangle Similarity - AA' },
        subparts: [
            'Given: △ABC with ∠A=40°, ∠B=60°',
            '       △DEF with ∠D=40°, ∠E=60°',
            'Compare angles:',
            'Angle pair 1: ∠A=40°, ∠D=40° ✓',
            'Angle pair 2: ∠B=60°, ∠E=60° ✓',
            'Calculate third angles:',
            '∠C = 180° - 40° - 60° = 80°',
            '∠F = 180° - 40° - 60° = 80°',
            'Two pairs of angles are equal',
            'By AA Theorem: △ABC ~ △DEF'
        ],
        helper: 'AA: If two angles are equal, triangles are similar',
        solution: 'Yes, △ABC ~ △DEF by AA',
        realWorldContext: 'Scale models and blueprints'
    });

    // Problem 4: Scale Factor
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Scale Factor Calculation',
        problem: 'A triangle has sides 3, 4, 5. A similar triangle has sides 6, 8, 10. Find the scale factor.',
        parameters: {
            figure1Measurement: 6,
            figure2Measurement: 3,
            measurementType: 'side'
        },
        type: 'scale_factor',
        context: { difficulty: 'intermediate', topic: 'Scale Factor' },
        subparts: [
            'Given: Small triangle sides: 3, 4, 5',
            '       Large triangle sides: 6, 8, 10',
            'Calculate scale factor:',
            'k = 6/3 = 2',
            'Verify with other sides:',
            '8/4 = 2 ✓',
            '10/5 = 2 ✓',
            'All ratios equal 2',
            'Linear scale factor: k = 2',
            'Area scale factor: k² = 4',
            'Volume scale factor: k³ = 8'
        ],
        helper: 'Scale factor = larger dimension / smaller dimension',
        solution: 'k = 2 (linear), k² = 4 (area), k³ = 8 (volume)',
        realWorldContext: 'Map scales and model building'
    });

    // Problem 5: Missing Side in Similar Triangles
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Find Missing Side',
        problem: 'Triangle ABC ~ Triangle DEF. If AB=4, DE=6, BC=5, find EF.',
        parameters: {
            knownSide1Triangle1: 4,
            knownSide1Triangle2: 6,
            knownSide2Triangle1: 5,
            unknownSide: 'EF'
        },
        type: 'find_missing_side_similar',
        context: { difficulty: 'intermediate', topic: 'Similar Triangles - Missing Sides' },
        subparts: [
            'Given: △ABC ~ △DEF',
            '       AB=4, DE=6, BC=5, EF=?',
            'Set up proportion:',
            'AB/DE = BC/EF',
            '4/6 = 5/EF',
            'Cross multiply:',
            '4 × EF = 6 × 5',
            '4 × EF = 30',
            'EF = 30/4 = 7.5',
            'Check: 4/6 = 5/7.5 → 2/3 = 2/3 ✓'
        ],
        helper: 'Set up proportion with corresponding sides',
        solution: 'EF = 7.5',
        realWorldContext: 'Indirect measurement problems'
    });

    // Problem 6: Shadow Problem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Shadow Problem',
        problem: 'A 6-foot person casts a 4-foot shadow. A tree casts a 20-foot shadow. How tall is the tree?',
        parameters: {
            object1Height: 6,
            object1Shadow: 4,
            object2Shadow: 20,
            findObject2Height: true
        },
        type: 'shadow_problem',
        context: { difficulty: 'intermediate', topic: 'Indirect Measurement - Shadows' },
        subparts: [
            'Given: Person height=6 ft, shadow=4 ft',
            '       Tree shadow=20 ft, height=?',
            'Same time → same sun angle → similar triangles',
            'Set up proportion:',
            'person height/person shadow = tree height/tree shadow',
            '6/4 = h/20',
            'Cross multiply:',
            '4h = 6 × 20',
            '4h = 120',
            'h = 30 feet',
            'Check: 6/4 = 30/20 → 1.5 = 1.5 ✓'
        ],
        helper: 'Same time means same sun angle, creating similar triangles',
        solution: 'Tree height = 30 feet',
        realWorldContext: 'Measuring heights indirectly using shadows'
    });

    // Problem 7: Geometric Mean - Altitude
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Geometric Mean - Altitude',
        problem: 'In right triangle ABC, altitude to hypotenuse creates segments of 4 and 9. Find the altitude.',
        parameters: {
            segment1: 4,
            segment2: 9
        },
        type: 'geometric_mean_altitude',
        context: { difficulty: 'intermediate', topic: 'Geometric Mean - Altitude Theorem' },
        subparts: [
            'Given: Right triangle, altitude to hypotenuse',
            '       Segments: 4 and 9',
            'Altitude Theorem: h² = segment1 × segment2',
            'h² = 4 × 9',
            'h² = 36',
            'h = √36',
            'h = 6',
            'The altitude is the geometric mean of the segments',
            'Verify: 4/6 = 6/9 → 2/3 = 2/3 ✓'
        ],
        helper: 'Altitude squared equals product of segments',
        solution: 'Altitude = 6',
        realWorldContext: 'Right triangle relationships in construction'
    });

    // Problem 8: ASA Congruence
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'ASA Congruence',
        problem: 'Triangle ABC: ∠A=45°, AB=10, ∠B=60°. Triangle DEF: ∠D=45°, DE=10, ∠E=60°. Congruent?',
        parameters: {
            triangle1: { angle1: 45, side: 10, angle2: 60 },
            triangle2: { angle1: 45, side: 10, angle2: 60 }
        },
        type: 'asa_congruence',
        context: { difficulty: 'beginner', topic: 'Triangle Congruence - ASA' },
        subparts: [
            'Given: △ABC with ∠A=45°, AB=10, ∠B=60°',
            '       △DEF with ∠D=45°, DE=10, ∠E=60°',
            'Check ASA conditions:',
            'Angle 1: ∠A=45°, ∠D=45° ✓',
            'Included side: AB=10, DE=10 ✓',
            'Angle 2: ∠B=60°, ∠E=60° ✓',
            'Two angles and included side are equal',
            'By ASA Postulate: △ABC ≅ △DEF'
        ],
        helper: 'ASA: Two angles and included side must match',
        solution: 'Yes, △ABC ≅ △DEF by ASA',
        realWorldContext: 'Angle-based construction verification'
    });

    // Problem 9: SAS~ Similarity
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'SAS~ Similarity',
        problem: 'Triangle ABC: AB=6, ∠A=50°, AC=9. Triangle DEF: DE=4, ∠D=50°, DF=6. Similar?',
        parameters: {
            triangle1: { side1: 6, angle: 50, side2: 9 },
            triangle2: { side1: 4, angle: 50, side2: 6 }
        },
        type: 'sas_similarity',
        context: { difficulty: 'intermediate', topic: 'Triangle Similarity - SAS~' },
        subparts: [
            'Given: △ABC with AB=6, ∠A=50°, AC=9',
            '       △DEF with DE=4, ∠D=50°, DF=6',
            'Check SAS~ conditions:',
            'Angles: ∠A=50°, ∠D=50° ✓',
            'Side ratios:',
            'AB/DE = 6/4 = 1.5',
            'AC/DF = 9/6 = 1.5',
            'Ratios are equal ✓',
            'Two sides proportional and included angle equal',
            'By SAS~ Theorem: △ABC ~ △DEF',
            'Scale factor k = 1.5'
        ],
        helper: 'SAS~: Two sides proportional with equal included angle',
        solution: 'Yes, △ABC ~ △DEF by SAS~, k=1.5',
        realWorldContext: 'Proportional design with angle constraints'
    });

    // Problem 10: Area Ratio
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Area Ratio of Similar Figures',
        problem: 'Two similar triangles have scale factor 3. If smaller has area 12 cm², find larger area.',
        parameters: {
            scaleFactor: 3,
            area1: 12,
            findArea2: false
        },
        type: 'area_ratio_similar',
        context: { difficulty: 'intermediate', topic: 'Area Ratios' },
        subparts: [
            'Given: Scale factor k = 3',
            '       Small triangle area = 12 cm²',
            'Area scale factor = k²',
            'k² = 3² = 9',
            'Large area = small area × k²',
            'Large area = 12 × 9',
            'Large area = 108 cm²',
            'Verify: 108/12 = 9 = 3² ✓'
        ],
        helper: 'Area scales by square of linear scale factor',
        solution: 'Large area = 108 cm²',
        realWorldContext: 'Calculating material needs for scaled designs'
    });

    return relatedProblems;
}



// ============== LINEAR EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedLinearEquations() {
    const relatedProblems = [];

    // Problem 1: One-Step Equation
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'One-Step Equation',
        problem: 'Solve for x: x + 5 = 12',
        parameters: { m: 1, b: 5, c: 12 },
        type: 'simple_linear',
        context: { difficulty: 'beginner', topic: 'Linear Equations' },
        subparts: [
            'Given: x + 5 = 12',
            'Goal: Isolate x',
            'Subtract 5 from both sides:',
            'x + 5 - 5 = 12 - 5',
            'x = 7',
            'Check: 7 + 5 = 12 ✓'
        ],
        helper: 'Do the opposite operation to both sides',
        solution: 'x = 7',
        realWorldContext: 'Finding unknown values in simple situations'
    });

    // Problem 2: Two-Step Equation
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Two-Step Equation',
        problem: 'Solve for x: 3x - 7 = 14',
        parameters: { m: 3, b: -7, c: 14 },
        type: 'simple_linear',
        context: { difficulty: 'beginner', topic: 'Linear Equations' },
        subparts: [
            'Given: 3x - 7 = 14',
            'Step 1: Add 7 to both sides',
            '3x - 7 + 7 = 14 + 7',
            '3x = 21',
            'Step 2: Divide both sides by 3',
            '3x/3 = 21/3',
            'x = 7',
            'Check: 3(7) - 7 = 21 - 7 = 14 ✓'
        ],
        helper: 'First undo addition/subtraction, then undo multiplication/division',
        solution: 'x = 7',
        realWorldContext: 'Solving problems with multiple operations'
    });

    // Problem 3: Equation with Variables on Both Sides
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equation with Variables on Both Sides',
        problem: 'Solve for x: 5x + 3 = 2x + 18',
        parameters: { m: 5, b: 3, c: 18, m2: 2 },
        type: 'simple_linear',
        context: { difficulty: 'intermediate', topic: 'Linear Equations' },
        subparts: [
            'Given: 5x + 3 = 2x + 18',
            'Step 1: Collect x terms on left (subtract 2x from both sides)',
            '5x - 2x + 3 = 2x - 2x + 18',
            '3x + 3 = 18',
            'Step 2: Subtract 3 from both sides',
            '3x + 3 - 3 = 18 - 3',
            '3x = 15',
            'Step 3: Divide both sides by 3',
            'x = 5',
            'Check: 5(5) + 3 = 25 + 3 = 28, and 2(5) + 18 = 10 + 18 = 28 ✓'
        ],
        helper: 'Collect variables on one side, constants on other',
        solution: 'x = 5',
        realWorldContext: 'Comparing different scenarios'
    });

    // Problem 4: Equation with Fractions
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Equation with Fractions',
        problem: 'Solve for x: (x/4) + 2 = 5',
        parameters: { m: 0.25, b: 2, c: 5 },
        type: 'simple_linear',
        context: { difficulty: 'intermediate', topic: 'Linear Equations' },
        subparts: [
            'Given: x/4 + 2 = 5',
            'Step 1: Subtract 2 from both sides',
            'x/4 = 3',
            'Step 2: Multiply both sides by 4',
            '4 × (x/4) = 4 × 3',
            'x = 12',
            'Alternative: Clear fraction first by multiplying everything by 4',
            '4(x/4) + 4(2) = 4(5)',
            'x + 8 = 20',
            'x = 12',
            'Check: 12/4 + 2 = 3 + 2 = 5 ✓'
        ],
        helper: 'Either clear fractions first or isolate the fraction term',
        solution: 'x = 12',
        realWorldContext: 'Solving problems involving parts or portions'
    });

    // Problem 5: Linear Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Linear Inequality',
        problem: 'Solve: -2x + 7 > 3',
        parameters: { m: -2, b: 7, c: 3, operator: '>' },
        type: 'linear_inequality',
        context: { difficulty: 'intermediate', topic: 'Linear Inequalities' },
        subparts: [
            'Given: -2x + 7 > 3',
            'Subtract 7 from both sides',
            '-2x > -4',
            'Divide by -2 (remember to flip inequality)',
            'x < 2',
            'Solution: x < 2 or (-∞, 2)'
        ],
        helper: 'Flip inequality when dividing/multiplying by negative',
        solution: 'x < 2',
        realWorldContext: 'Finding range of valid solutions'
    });

    // Problem 6: Absolute Value Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Absolute Value Equation',
        problem: 'Solve: |2x - 3| = 7',
        parameters: { a: 2, b: -3, c: 7 },
        type: 'absolute_value_equation',
        context: { difficulty: 'intermediate', topic: 'Absolute Value Equations' },
        subparts: [
            'Given: |2x - 3| = 7',
            'Case 1: 2x - 3 = 7',
            '2x = 10',
            'x = 5',
            'Case 2: 2x - 3 = -7',
            '2x = -4',
            'x = -2',
            'Solutions: x = 5 or x = -2'
        ],
        helper: 'Split into two cases: positive and negative',
        solution: 'x = 5 or x = -2',
        realWorldContext: 'Distance and magnitude problems'
    });

    // Problem 7: System of 2x2 Equations
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'System of Linear Equations',
        problem: 'Solve: 2x + 3y = 8 and 4x - y = 5',
        parameters: { a1: 2, b1: 3, c1: 8, a2: 4, b2: -1, c2: 5 },
        type: 'system_2x2',
        context: { difficulty: 'advanced', topic: 'Systems of Linear Equations' },
        subparts: [
            'Given: 2x + 3y = 8 ... (1)',
            '       4x - y = 5 ... (2)',
            'From equation (2): y = 4x - 5',
            'Substitute into (1):',
            '2x + 3(4x - 5) = 8',
            '2x + 12x - 15 = 8',
            '14x = 23',
            'x = 23/14',
            'y = 4(23/14) - 5 = -3/14',
            'Solution: x = 23/14, y = -3/14'
        ],
        helper: 'Use substitution or elimination method',
        solution: 'x = 23/14, y = -3/14',
        realWorldContext: 'Problems with multiple constraints'
    });

    return relatedProblems;
}

// ============== QUADRATIC EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedQuadraticEquations() {
    const relatedProblems = [];

    // Problem 1: Factoring Simple Quadratic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Factoring Simple Quadratic',
        problem: 'Solve by factoring: x² - 5x + 6 = 0',
        parameters: { a: 1, b: -5, c: 6 },
        type: 'factoring_quadratic',
        context: { difficulty: 'beginner', topic: 'Factoring Quadratics' },
        subparts: [
            'Given: x² - 5x + 6 = 0',
            'Need two numbers that: multiply to 6, add to -5',
            'Numbers: -2 and -3 (since -2 × -3 = 6, -2 + -3 = -5)',
            'Factor: (x - 2)(x - 3) = 0',
            'Set each factor = 0:',
            'x - 2 = 0  →  x = 2',
            'x - 3 = 0  →  x = 3',
            'Solutions: x = 2 or x = 3',
            'Check x=2: (2)² - 5(2) + 6 = 4 - 10 + 6 = 0 ✓',
            'Check x=3: (3)² - 5(3) + 6 = 9 - 15 + 6 = 0 ✓'
        ],
        helper: 'Find two numbers that multiply to c and add to b',
        solution: 'x = 2 or x = 3',
        realWorldContext: 'Finding values that satisfy a condition'
    });

    // Problem 2: Quadratic Formula
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Quadratic Formula',
        problem: 'Solve using quadratic formula: 2x² + 5x - 3 = 0',
        parameters: { a: 2, b: 5, c: -3 },
        type: 'quadratic_formula',
        context: { difficulty: 'intermediate', topic: 'Quadratic Formula' },
        subparts: [
            'Given: 2x² + 5x - 3 = 0',
            'Identify: a = 2, b = 5, c = -3',
            'Quadratic formula: x = [-b ± √(b² - 4ac)] / 2a',
            'Calculate discriminant: b² - 4ac',
            '= (5)² - 4(2)(-3)',
            '= 25 + 24 = 49',
            'Substitute into formula:',
            'x = [-5 ± √49] / (2 × 2)',
            'x = [-5 ± 7] / 4',
            'Solution 1: x = (-5 + 7)/4 = 2/4 = 1/2',
            'Solution 2: x = (-5 - 7)/4 = -12/4 = -3',
            'Solutions: x = 1/2 or x = -3'
        ],
        helper: 'Quadratic formula works for all quadratics',
        solution: 'x = 1/2 or x = -3',
        realWorldContext: 'Universal method for any quadratic equation'
    });

    // Problem 3: Completing the Square
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Completing the Square',
        problem: 'Solve by completing the square: x² + 6x + 5 = 0',
        parameters: { a: 1, b: 6, c: 5 },
        type: 'completing_square',
        context: { difficulty: 'intermediate', topic: 'Completing the Square' },
        subparts: [
            'Given: x² + 6x + 5 = 0',
            'Move constant to right: x² + 6x = -5',
            'Take half of b coefficient: 6/2 = 3',
            'Square it: 3² = 9',
            'Add 9 to both sides: x² + 6x + 9 = -5 + 9',
            'Left side is perfect square: (x + 3)² = 4',
            'Take square root: x + 3 = ±2',
            'Solve: x + 3 = 2  →  x = -1',
            '      x + 3 = -2  →  x = -5',
            'Solutions: x = -1 or x = -5',
            'Check: For x=-1: (-1)² + 6(-1) + 5 = 1 - 6 + 5 = 0 ✓'
        ],
        helper: 'Make perfect square trinomial by adding (b/2)²',
        solution: 'x = -1 or x = -5',
        realWorldContext: 'Converting to vertex form for graphing'
    });

    // Problem 4: Standard Quadratic
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Standard Quadratic',
        problem: 'Solve: x² + 7x + 12 = 0',
        parameters: { a: 1, b: 7, c: 12 },
        type: 'standard_quadratic',
        context: { difficulty: 'beginner', topic: 'Standard Quadratic Equations' },
        subparts: [
            'Given: x² + 7x + 12 = 0',
            'Factor: (x + 3)(x + 4) = 0',
            'x + 3 = 0  →  x = -3',
            'x + 4 = 0  →  x = -4',
            'Solutions: x = -3 or x = -4'
        ],
        helper: 'Factor and apply zero product property',
        solution: 'x = -3 or x = -4',
        realWorldContext: 'Basic quadratic solving'
    });

    // Problem 5: Quadratic Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Inequality',
        problem: 'Solve: x² - 4x + 3 > 0',
        parameters: { a: 1, b: -4, c: 3, operator: '>' },
        type: 'quadratic_inequality',
        context: { difficulty: 'intermediate', topic: 'Quadratic Inequalities' },
        subparts: [
            'Given: x² - 4x + 3 > 0',
            'Factor: (x - 1)(x - 3) > 0',
            'Critical points: x = 1, x = 3',
            'Test intervals: (-∞, 1), (1, 3), (3, ∞)',
            'Solution: x < 1 or x > 3',
            'Interval notation: (-∞, 1) ∪ (3, ∞)'
        ],
        helper: 'Find roots, then test intervals',
        solution: 'x < 1 or x > 3',
        realWorldContext: 'Range problems with constraints'
    });

    // Problem 6: Vertex Form
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Vertex Form Analysis',
        problem: 'Analyze: f(x) = 2x² - 8x + 10',
        parameters: { a: 2, b: -8, c: 10 },
        type: 'vertex_form',
        context: { difficulty: 'intermediate', topic: 'Vertex Form Analysis' },
        subparts: [
            'Given: f(x) = 2x² - 8x + 10',
            'Complete the square:',
            'f(x) = 2(x² - 4x) + 10',
            'f(x) = 2(x² - 4x + 4 - 4) + 10',
            'f(x) = 2(x - 2)² - 8 + 10',
            'f(x) = 2(x - 2)² + 2',
            'Vertex: (2, 2)',
            'Opens upward (a > 0)',
            'Minimum value: 2 at x = 2'
        ],
        helper: 'Convert to vertex form a(x-h)² + k',
        solution: 'Vertex: (2, 2), Min: 2',
        realWorldContext: 'Finding maximum/minimum values'
    });

    // Problem 7: Function Analysis
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Quadratic Function Analysis',
        problem: 'Analyze: f(x) = -x² + 4x + 5',
        parameters: { a: -1, b: 4, c: 5 },
        type: 'function_analysis',
        context: { difficulty: 'intermediate', topic: 'Quadratic Function Analysis' },
        subparts: [
            'Given: f(x) = -x² + 4x + 5',
            'Vertex: x = -b/2a = -4/(-2) = 2',
            'f(2) = -(2)² + 4(2) + 5 = 9',
            'Vertex: (2, 9)',
            'Opens downward (a < 0)',
            'Maximum value: 9',
            'Y-intercept: (0, 5)',
            'X-intercepts: solve -x² + 4x + 5 = 0'
        ],
        helper: 'Find vertex, direction, and intercepts',
        solution: 'Vertex: (2, 9), Max: 9',
        realWorldContext: 'Complete function analysis'
    });

    // Problem 8: Complex Solutions
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Complex Solutions',
        problem: 'Solve: x² + 2x + 5 = 0',
        parameters: { a: 1, b: 2, c: 5 },
        type: 'complex_solutions',
        context: { difficulty: 'advanced', topic: 'Complex Solutions' },
        subparts: [
            'Given: x² + 2x + 5 = 0',
            'Discriminant: b² - 4ac = 4 - 20 = -16 < 0',
            'Complex solutions exist',
            'x = [-2 ± √(-16)] / 2',
            'x = [-2 ± 4i] / 2',
            'x = -1 ± 2i',
            'Solutions: x = -1 + 2i or x = -1 - 2i'
        ],
        helper: 'Negative discriminant means complex solutions',
        solution: 'x = -1 ± 2i',
        realWorldContext: 'Advanced algebra with imaginary numbers'
    });

    // Problem 9: Optimization
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Optimization Problem',
        problem: 'Maximize: f(x) = -2x² + 8x + 3',
        parameters: { a: -2, b: 8, c: 3, optimizationType: 'maximize' },
        type: 'optimization',
        context: { difficulty: 'intermediate', topic: 'Quadratic Optimization' },
        subparts: [
            'Given: f(x) = -2x² + 8x + 3',
            'Since a < 0, parabola opens downward',
            'Maximum at vertex',
            'x = -b/2a = -8/(-4) = 2',
            'f(2) = -2(2)² + 8(2) + 3 = 11',
            'Maximum value: 11 at x = 2'
        ],
        helper: 'Vertex gives maximum (a<0) or minimum (a>0)',
        solution: 'Maximum: 11 at x = 2',
        realWorldContext: 'Finding optimal values in real problems'
    });

    return relatedProblems;
}

// ============== SIMULTANEOUS EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedSimultaneousEquations() {
    const relatedProblems = [];

    // Problem 1: Substitution Method
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Substitution Method',
        problem: 'Solve: 2x + y = 7 and x - y = 2',
        parameters: { equations: ['2x + y = 7', 'x - y = 2'] },
        type: 'system_2x2_substitution',
        context: { difficulty: 'beginner', topic: 'Substitution Method' },
        subparts: [
            'Given: 2x + y = 7 ... (1)',
            '       x - y = 2 ... (2)',
            'From (2): x = y + 2',
            'Substitute into (1):',
            '2(y + 2) + y = 7',
            '2y + 4 + y = 7',
            '3y = 3',
            'y = 1',
            'Substitute back: x = 1 + 2 = 3',
            'Solution: x = 3, y = 1'
        ],
        helper: 'Solve one equation for a variable, substitute',
        solution: 'x = 3, y = 1',
        realWorldContext: 'Finding values satisfying multiple conditions'
    });

    // Problem 2: Elimination Method
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Elimination Method',
        problem: 'Solve: 3x + 2y = 12 and 2x - y = 1',
        parameters: { equations: ['3x + 2y = 12', '2x - y = 1'] },
        type: 'system_2x2_elimination',
        context: { difficulty: 'intermediate', topic: 'Elimination Method' },
        subparts: [
            'Given: 3x + 2y = 12 ... (1)',
            '       2x - y = 1 ... (2)',
            'Multiply (2) by 2: 4x - 2y = 2 ... (3)',
            'Add (1) + (3):',
            '7x = 14',
            'x = 2',
            'Substitute into (2):',
            '2(2) - y = 1',
            'y = 3',
            'Solution: x = 2, y = 3'
        ],
        helper: 'Add/subtract equations to eliminate a variable',
        solution: 'x = 2, y = 3',
        realWorldContext: 'Solving systems efficiently'
    });

    // Problem 3: Graphical Method
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Graphical Method',
        problem: 'Solve: x + y = 5 and 2x - y = 1',
        parameters: { equations: ['x + y = 5', '2x - y = 1'] },
        type: 'system_2x2_graphical',
        context: { difficulty: 'beginner', topic: 'Graphical Method' },
        subparts: [
            'Given: x + y = 5 ... (1)',
            '       2x - y = 1 ... (2)',
            'Rewrite in slope-intercept form:',
            '(1): y = -x + 5',
            '(2): y = 2x - 1',
            'Graph both lines',
            'Intersection point is solution',
            'Add equations: 3x = 6, x = 2',
            'Substitute: 2 + y = 5, y = 3',
            'Solution: x = 2, y = 3'
        ],
        helper: 'Graph lines and find intersection',
        solution: 'x = 2, y = 3',
        realWorldContext: 'Visual representation of solutions'
    });

    // Problem 4: Matrix Method (Cramer's Rule)
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Matrix Method',
        problem: 'Solve: 4x + 3y = 10 and 2x - 5y = -4',
        parameters: { equations: ['4x + 3y = 10', '2x - 5y = -4'] },
        type: 'system_2x2_matrix',
        context: { difficulty: 'intermediate', topic: 'Matrix Method (Cramer\'s Rule)' },
        subparts: [
            'Given: 4x + 3y = 10',
            '       2x - 5y = -4',
            'Coefficient matrix: |4  3|',
            '                    |2 -5|',
            'D = 4(-5) - 3(2) = -20 - 6 = -26',
            'Dx = |10  3|  = 10(-5) - 3(-4) = -38',
            '     |-4 -5|',
            'Dy = |4  10| = 4(-4) - 10(2) = -36',
            '     |2  -4|',
            'x = Dx/D = -38/-26 = 19/13',
            'y = Dy/D = -36/-26 = 18/13',
            'Solution: x = 19/13, y = 18/13'
        ],
        helper: 'Use determinants to solve system',
        solution: 'x = 19/13, y = 18/13',
        realWorldContext: 'Advanced algebraic method'
    });

    // Problem 5: 3x3 System
    relatedProblems.push({
        difficulty: 'harder',
        scenario: '3×3 System',
        problem: 'Solve: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2',
        parameters: { equations: ['x + y + z = 6', '2x - y + z = 3', 'x + 2y - z = 2'] },
        type: 'system_3x3',
        context: { difficulty: 'advanced', topic: '3×3 System of Equations' },
        subparts: [
            'Given: x + y + z = 6 ... (1)',
            '       2x - y + z = 3 ... (2)',
            '       x + 2y - z = 2 ... (3)',
            'Eliminate z: Add (1) + (3):',
            '2x + 3y = 8 ... (4)',
            'Add (2) + (3):',
            '3x + y = 5 ... (5)',
            'From (5): y = 5 - 3x',
            'Substitute into (4):',
            '2x + 3(5 - 3x) = 8',
            '2x + 15 - 9x = 8',
            '-7x = -7, x = 1',
            'y = 5 - 3(1) = 2',
            'From (1): 1 + 2 + z = 6, z = 3',
            'Solution: x = 1, y = 2, z = 3'
        ],
        helper: 'Eliminate variables systematically',
        solution: 'x = 1, y = 2, z = 3',
        realWorldContext: 'Complex systems with three unknowns'
    });

    // Problem 6: No Solution (Parallel Lines)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'No Solution System',
        problem: 'Solve: 2x + y = 5 and 4x + 2y = 7',
        parameters: { equations: ['2x + y = 5', '4x + 2y = 7'] },
        type: 'system_2x2_no_solution',
        context: { difficulty: 'intermediate', topic: 'Inconsistent Systems' },
        subparts: [
            'Given: 2x + y = 5 ... (1)',
            '       4x + 2y = 7 ... (2)',
            'Multiply (1) by 2: 4x + 2y = 10 ... (3)',
            'Compare (2) and (3):',
            '4x + 2y = 7',
            '4x + 2y = 10',
            'This is impossible! (7 ≠ 10)',
            'The lines are parallel',
            'No solution exists',
            'System is inconsistent'
        ],
        helper: 'Parallel lines never intersect',
        solution: 'No solution (inconsistent system)',
        realWorldContext: 'Identifying impossible conditions'
    });

    // Problem 7: Infinite Solutions (Dependent)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Infinite Solutions',
        problem: 'Solve: 3x - 2y = 6 and 6x - 4y = 12',
        parameters: { equations: ['3x - 2y = 6', '6x - 4y = 12'] },
        type: 'system_2x2_infinite',
        context: { difficulty: 'intermediate', topic: 'Dependent Systems' },
        subparts: [
            'Given: 3x - 2y = 6 ... (1)',
            '       6x - 4y = 12 ... (2)',
            'Notice (2) = 2 × (1)',
            '6x - 4y = 2(3x - 2y) = 2(6) = 12',
            'Both equations represent the same line',
            'Infinite solutions along the line',
            'General solution: y = (3x - 6)/2',
            'Or: x = (2y + 6)/3'
        ],
        helper: 'Same line means infinite intersection points',
        solution: 'Infinite solutions: y = (3x - 6)/2',
        realWorldContext: 'Dependent equations yield infinite solutions'
    });

    return relatedProblems;
}

// ============== POLYNOMIAL EQUATIONS - RELATED PROBLEMS GENERATOR ==============

function generateRelatedPolynomials() {
    const relatedProblems = [];

    // Problem 1: Quadratic Standard Form
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Quadratic Standard Form',
        problem: 'Solve: x² - 7x + 12 = 0',
        parameters: { a: 1, b: -7, c: 12 },
        type: 'quadratic_standard',
        context: { difficulty: 'beginner', topic: 'Quadratic Equations - Standard Form' },
        subparts: [
            'Given: x² - 7x + 12 = 0',
            'Factor: (x - 3)(x - 4) = 0',
            'x - 3 = 0  →  x = 3',
            'x - 4 = 0  →  x = 4',
            'Solutions: x = 3 or x = 4',
            'Check x=3: (3)² - 7(3) + 12 = 9 - 21 + 12 = 0 ✓',
            'Check x=4: (4)² - 7(4) + 12 = 16 - 28 + 12 = 0 ✓'
        ],
        helper: 'Factor and apply zero product property',
        solution: 'x = 3 or x = 4',
        realWorldContext: 'Basic polynomial solving'
    });

    // Problem 2: Quadratic Factoring
    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Quadratic Factoring',
        problem: 'Solve: x² + 5x + 6 = 0',
        parameters: { a: 1, b: 5, c: 6 },
        type: 'quadratic_factoring',
        context: { difficulty: 'beginner', topic: 'Quadratic Equations - Factoring Method' },
        subparts: [
            'Given: x² + 5x + 6 = 0',
            'Need two numbers that multiply to 6 and add to 5',
            'Numbers: 2 and 3',
            'Factor: (x + 2)(x + 3) = 0',
            'x + 2 = 0  →  x = -2',
            'x + 3 = 0  →  x = -3',
            'Solutions: x = -2 or x = -3',
            'Check: (-2)² + 5(-2) + 6 = 4 - 10 + 6 = 0 ✓'
        ],
        helper: 'Find factors that multiply to c and add to b',
        solution: 'x = -2 or x = -3',
        realWorldContext: 'Factoring techniques'
    });

    // Problem 3: Completing the Square
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Completing the Square',
        problem: 'Solve: x² - 4x + 1 = 0',
        parameters: { a: 1, b: -4, c: 1 },
        type: 'completing_square',
        context: { difficulty: 'intermediate', topic: 'Completing the Square' },
        subparts: [
            'Given: x² - 4x + 1 = 0',
            'Move constant: x² - 4x = -1',
            'Half of -4 is -2, square it: (-2)² = 4',
            'Add 4 to both sides: x² - 4x + 4 = -1 + 4',
            '(x - 2)² = 3',
            'x - 2 = ±√3',
            'x = 2 ± √3',
            'Solutions: x = 2 + √3 or x = 2 - √3',
            'Approximate: x ≈ 3.732 or x ≈ 0.268'
        ],
        helper: 'Add (b/2)² to both sides to complete square',
        solution: 'x = 2 ± √3',
        realWorldContext: 'Exact solutions using completing square'
    });

    // Problem 4: Cubic Equation
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cubic Equation',
        problem: 'Solve: x³ - 6x² + 11x - 6 = 0',
        parameters: { a: 1, b: -6, c: 11, d: -6 },
        type: 'cubic_equation',
        context: { difficulty: 'advanced', topic: 'Cubic Equations' },
        subparts: [
            'Given: x³ - 6x² + 11x - 6 = 0',
            'Try rational roots (factors of 6): ±1, ±2, ±3, ±6',
            'Test x = 1: 1 - 6 + 11 - 6 = 0 ✓',
            'x = 1 is a root, so (x - 1) is a factor',
            'Divide: (x³ - 6x² + 11x - 6) ÷ (x - 1)',
            'Result: x² - 5x + 6',
            'Factor: (x - 1)(x² - 5x + 6) = 0',
            '(x - 1)(x - 2)(x - 3) = 0',
            'Solutions: x = 1, x = 2, x = 3'
        ],
        helper: 'Use rational root theorem, then factor',
        solution: 'x = 1, x = 2, x = 3',
        realWorldContext: 'Higher degree polynomial solving'
    });

    // Problem 5: Rational Root Theorem
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Rational Root Theorem',
        problem: 'Find rational roots: x³ - 4x² + x + 6 = 0',
        parameters: { coefficients: [1, -4, 1, 6] },
        type: 'rational_root',
        context: { difficulty: 'intermediate', topic: 'Rational Root Theorem' },
        subparts: [
            'Given: x³ - 4x² + x + 6 = 0',
            'Rational Root Theorem: p/q where',
            'p divides constant term (6): ±1, ±2, ±3, ±6',
            'q divides leading coefficient (1): ±1',
            'Possible rational roots: ±1, ±2, ±3, ±6',
            'Test x = -1: -1 - 4 - 1 + 6 = 0 ✓',
            'Test x = 2: 8 - 16 + 2 + 6 = 0 ✓',
            'Test x = 3: 27 - 36 + 3 + 6 = 0 ✓',
            'Rational roots: x = -1, x = 2, x = 3'
        ],
        helper: 'Test factors of constant/leading coefficient',
        solution: 'x = -1, x = 2, x = 3',
        realWorldContext: 'Finding rational solutions systematically'
    });

    // Problem 6: Synthetic Division
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Synthetic Division',
        problem: 'Divide: (x³ - 3x² + 2x + 4) ÷ (x - 2)',
        parameters: { coefficients: [1, -3, 2, 4], divisor: 2 },
        type: 'synthetic_division',
        context: { difficulty: 'intermediate', topic: 'Synthetic Division' },
        subparts: [
            'Given: (x³ - 3x² + 2x + 4) ÷ (x - 2)',
            'Set up synthetic division with divisor = 2',
            'Coefficients: 1  -3   2   4',
            '              ↓   2  -2   0',
            '             _______________',
            '              1  -1   0   4',
            'Quotient: x² - x + 0 = x² - x',
            'Remainder: 4',
            'Result: x² - x + 4/(x - 2)'
        ],
        helper: 'Use synthetic division for (x - a) divisors',
        solution: 'x² - x, remainder 4',
        realWorldContext: 'Efficient polynomial division'
    });

    // Problem 7: Polynomial Inequality
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polynomial Inequality',
        problem: 'Solve: x² - 5x + 6 > 0',
        parameters: { coefficients: [1, -5, 6], operator: '>' },
        type: 'polynomial_inequality',
        context: { difficulty: 'intermediate', topic: 'Polynomial Inequalities' },
        subparts: [
            'Given: x² - 5x + 6 > 0',
            'Factor: (x - 2)(x - 3) > 0',
            'Critical points: x = 2, x = 3',
            'Test intervals:',
            'x < 2: Test x = 0: (0-2)(0-3) = 6 > 0 ✓',
            '2 < x < 3: Test x = 2.5: (0.5)(-0.5) < 0 ✗',
            'x > 3: Test x = 4: (2)(1) = 2 > 0 ✓',
            'Solution: x < 2 or x > 3',
            'Interval notation: (-∞, 2) ∪ (3, ∞)'
        ],
        helper: 'Find roots, test intervals between them',
        solution: 'x < 2 or x > 3',
        realWorldContext: 'Finding valid ranges in inequalities'
    });

    // Problem 8: Polynomial Graphing
    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Polynomial Graphing',
        problem: 'Analyze: f(x) = x³ - 2x² - 5x + 6',
        parameters: { coefficients: [1, -2, -5, 6] },
        type: 'polynomial_graphing',
        context: { difficulty: 'intermediate', topic: 'Polynomial Graphing Analysis' },
        subparts: [
            'Given: f(x) = x³ - 2x² - 5x + 6',
            'Find zeros (x-intercepts):',
            'Test x = 1: 1 - 2 - 5 + 6 = 0 ✓',
            'Factor: (x - 1)(x² - x - 6)',
            '= (x - 1)(x - 3)(x + 2)',
            'Zeros: x = -2, 1, 3',
            'Y-intercept: f(0) = 6',
            'End behavior: As x → ∞, f(x) → ∞',
            '             As x → -∞, f(x) → -∞',
            'Degree 3 (odd), positive leading coefficient'
        ],
        helper: 'Find zeros, intercepts, and end behavior',
        solution: 'Zeros: x = -2, 1, 3',
        realWorldContext: 'Complete polynomial analysis'
    });

    return relatedProblems;
}

// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============


function solveTriangleRelatedProblems() {
    const problems = generateRelatedTriangleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Triangle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTriangleMathematicalWorkbook({
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

        workbook.solveTriangleProblem({
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


/**function solveCircleRelatedProblems() {
    const problems = generateRelatedCircleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Circle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCircleGeometryWorkbook({
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

        // Prepare equation based on problem
        let equation = problem.problem.split(': ')[1] || problem.problem;

        workbook.solveCircleProblem({
            equation: equation,
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
*/


function solveQuadrilateralRelatedProblems() {
    const problems = generateRelatedQuadrilaterals();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadrilateral Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedQuadrilateralsMathematicalWorkbook({
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

        workbook.solveQuadrilateralProblem({
            quadrilateralType: problem.type,
            parameters: problem.parameters,
            problem: problem.problem,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


function solveAngleRelatedProblems() {
    const problems = generateRelatedAngleProblems();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Angle Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAnglesMathematicalWorkbook({
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

        // Prepare equation/scenario based on problem
        let scenario = problem.problem;

        workbook.solveAngleProblem({
            equation: scenario,
            scenario: scenario,
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


function solveSimilarityCongruenceRelatedProblems() {
    const problems = generateRelatedSimilarityCongruence();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Similarity/Congruence Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSimilarityCongruenceWorkbook({
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

        workbook.solveSimilarityCongruenceProblem({
            problemType: problem.type,
            parameters: problem.parameters,
            scenario: problem.scenario,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}



function solveLinearRelatedProblems() {
    const problems = generateRelatedLinearEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Linear Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedLinearMathematicalWorkbook({
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

        // Prepare equation based on problem type
        let equation = problem.problem.split(': ')[1] || problem.problem;
        
        workbook.solveLinearProblem({
            equation: equation,
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

function solveQuadraticRelatedProblems() {
    const problems = generateRelatedQuadraticEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Quadratic Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedQuadraticMathematicalWorkbook({
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

        // Prepare equation based on problem
        let equation = problem.problem.split(': ')[1] || problem.problem;
        
        workbook.solveQuadraticProblem({
            equation: equation,
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

function solveSimultaneousRelatedProblems() {
    const problems = generateRelatedSimultaneousEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Simultaneous Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedSimultaneousEquationsWorkbook({
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

        workbook.solveSimultaneousSystem({
            equations: problem.parameters.equations,
            method: problem.type,
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


function solveSurfaceAreaVolumeRelatedProblems() {
    const problems = generateRelatedSurfaceAreaVolume();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Surface Area/Volume Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSurfaceAreaVolumeWorkbook({
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

        workbook.solveGeometryProblem({
            shapeType: problem.shapeType,
            dimensions: problem.dimensions,
            scenario: problem.scenario,
            parameters: {},
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}



 function solveTrigRatiosRelatedProblems() {
    const problems = generateRelatedTrigRatios();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trig Ratios Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'degrees'
        });

        workbook.solveTrigProblem({
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



function solveSpecialAnglesRelatedProblems() {
    const problems = generateRelatedSpecialAngles();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Special Angles Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'degrees'
        });

        workbook.solveTrigProblem({
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

function solveTrigIdentitiesRelatedProblems() {
    const problems = generateRelatedTrigIdentities();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trig Identities Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'degrees'
        });

        // For identity problems, we need to ensure equation is set properly
        const equationString = problem.problem;
        
        workbook.solveTrigProblem({
            equation: equationString,  // Use the full problem text
            problemType: problem.type,
            parameters: {
                ...problem.parameters,
                equation: equationString  // Also add to parameters
            },
            context: problem.context
        });

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}

function solveSineCosineRulesRelatedProblems() {
    const problems = generateRelatedSineCosineRules();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Sine/Cosine Rules Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'degrees'
        });

        workbook.solveTrigProblem({
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

function solveRadianMeasureRelatedProblems() {
    const problems = generateRelatedRadianMeasure();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Radian Measure Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: problem.parameters.fromUnit === 'degrees' ? 'degrees' : 'radians'
        });

        workbook.solveTrigProblem({
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

function solveTrigEquationsRelatedProblems() {
    const problems = generateRelatedTrigEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trig Equations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'radians'
        });

        workbook.solveTrigProblem({
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

function solveTrigGraphsRelatedProblems() {
    const problems = generateRelatedTrigGraphs();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Trig Graphs Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedTrigonometricWorkbook({
            theme: 'scientific',
            explanationLevel: 'detailed',
            includeVerificationInSteps: true,
            includeConceptualConnections: true,
            includeAlternativeMethods: true,
            includeErrorPrevention: true,
            includeCommonMistakes: true,
            includePedagogicalNotes: true,
            verificationDetail: 'detailed',
            angleMode: 'radians'
        });

        workbook.solveTrigProblem({
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




function solveSolidGeometryRelatedProblems() {
    const problems = generateRelatedSolidGeometry();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Solid Geometry Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSolidGeometryWorkbook({
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

        workbook.solveSolidGeometryProblem({
            shape: problem.scenario,
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

function solveFunctionBasicsRelatedProblems() {
    const problems = generateRelatedFunctionBasics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Function Basics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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

function solveDomainRangeRelatedProblems() {
    const problems = generateRelatedDomainRange();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Domain/Range Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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

function solveFunctionTypesRelatedProblems() {
    const problems = generateRelatedFunctionTypes();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Function Types Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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

function solveTransformationsRelatedProblems() {
    const problems = generateRelatedTransformations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Transformations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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

function solveInverseFunctionsRelatedProblems() {
    const problems = generateRelatedInverseFunctions();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Inverse Functions Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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

function solvePiecewiseFunctionsRelatedProblems() {
    const problems = generateRelatedPiecewiseFunctions();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Piecewise Functions Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedFunctionsGraphsWorkbook({
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

        workbook.solveFunctionProblem({
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


function solveCoordinateGeometryRelatedProblems() {
    const problems = generateRelatedCoordinateGeometry();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Coordinate Geometry Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedCoordinateGeometryWorkbook({
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

        workbook.solveCoordinateGeometryProblem({
            problemType: problem.type,
            points: problem.points,
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



function solveAlgebraicRelatedProblems() {
    const problems = generateRelatedAlgebraicExpressions();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Algebraic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedAlgebraicExpressionWorkbook({
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

        // Prepare expression based on problem
        let expression = problem.problem.split(': ')[1] || problem.problem;

        workbook.solveAlgebraicProblem({
            expression: expression,
            operation: 'simplify',
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



function solveNumberPropertiesRelatedProblems() {
    const problems = generateRelatedNumberProperties();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Number Properties Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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

function solvePrimeNumbersRelatedProblems() {
    const problems = generateRelatedPrimeNumbers();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Prime Numbers Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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

function solveHCFLCMRelatedProblems() {
    const problems = generateRelatedHCFLCM();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving HCF/LCM Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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

function solveModularArithmeticRelatedProblems() {
    const problems = generateRelatedModularArithmetic();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Modular Arithmetic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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

function solveDivisibilityRelatedProblems() {
    const problems = generateRelatedDivisibility();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Divisibility Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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

function solveRationalIrrationalRelatedProblems() {
    const problems = generateRelatedRationalIrrational();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rational/Irrational Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedNumberTheoryWorkbook({
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

        workbook.solveNumberTheoryProblem({
            problem: problem.problem,
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


function solveMatrixOperationsProblems() {
    const problems = generateRelatedMatrixOperations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Matrix Operations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedMatrixMathematicalWorkbook({
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

        workbook.solveMatrixProblem({
            matrices: problem.matrices,
            operation: problem.problem,
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

function solveDeterminantProblems() {
    const problems = generateRelatedDeterminants();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Determinant Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedMatrixMathematicalWorkbook({
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

        workbook.solveMatrixProblem({
            matrices: problem.matrices,
            operation: problem.problem,
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

function solveInverseMatrixProblems() {
    const problems = generateRelatedInverseMatrices();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Inverse Matrix Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedMatrixMathematicalWorkbook({
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

        workbook.solveMatrixProblem({
            matrices: problem.matrices,
            operation: problem.problem,
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

function solveMatrixTransformationProblems() {
    const problems = generateRelatedMatrixTransformations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Matrix Transformation Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedMatrixMathematicalWorkbook({
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

        workbook.solveMatrixProblem({
            matrices: problem.matrices,
            operation: problem.problem,
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



function solveVectorBasicsRelatedProblems() {
    const problems = generateRelatedVectorBasics();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Vector Basics Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedVectorMathematicalWorkbook({
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

        workbook.solveVectorProblem({
            vectors: problem.parameters.vectors,
            operation: problem.parameters.operation,
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

function solveVectorOperationsRelatedProblems() {
    const problems = generateRelatedVectorOperations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Vector Operations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedVectorMathematicalWorkbook({
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

        workbook.solveVectorProblem({
            vectors: problem.parameters.vectors,
            operation: problem.parameters.operation,
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

function solveDotProductRelatedProblems() {
    const problems = generateRelatedDotProduct();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Dot Product Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedVectorMathematicalWorkbook({
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

        workbook.solveVectorProblem({
            vectors: problem.parameters.vectors,
            operation: problem.parameters.operation,
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

function solveCrossProductRelatedProblems() {
    const problems = generateRelatedCrossProduct();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Cross Product Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedVectorMathematicalWorkbook({
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

        workbook.solveVectorProblem({
            vectors: problem.parameters.vectors,
            operation: problem.parameters.operation,
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

function solveVectorEquationsRelatedProblems() {
    const problems = generateRelatedVectorEquations();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Vector Equations Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedVectorMathematicalWorkbook({
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

        workbook.solveVectorProblem({
            vectors: problem.parameters.vectors,
            operation: problem.parameters.operation,
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


// ============== SOLVE RELATED PROBLEMS USING WORKBOOKS ==============

function solveArithmeticRelatedProblems() {
    const problems = generateRelatedArithmeticSequences();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Arithmetic Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSequenceSeriesWorkbook({
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

        workbook.solveSequenceProblem({
            problem: problem.problem,
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

function solveGeometricRelatedProblems() {
    const problems = generateRelatedGeometricSequences();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Geometric Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSequenceSeriesWorkbook({
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

        workbook.solveSequenceProblem({
            problem: problem.problem,
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

function solveSeriesSumsRelatedProblems() {
    const problems = generateRelatedSeriesSums();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Series Sum Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSequenceSeriesWorkbook({
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

        workbook.solveSequenceProblem({
            problem: problem.problem,
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

function solveBinomialRelatedProblems() {
    const problems = generateRelatedBinomialTheorem();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Binomial Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedSequenceSeriesWorkbook({
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

        workbook.solveSequenceProblem({
            problem: problem.problem,
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


function solveRationalRelatedProblems() {
    const problems = generateRelatedRationalExpressions();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Rational Problem ${index + 1}: ${problem.scenario}`);

        const workbook = new EnhancedRationalAlgebraicWorkbook({
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

        // Prepare configuration based on problem type
        const config = {
            equation: problem.problem.split(': ')[1] || problem.problem,
            scenario: problem.scenario,
            parameters: problem.parameters,
            problemType: problem.type,
            context: problem.context
        };

        workbook.solveRationalProblem(config);

        solvedProblems.push({
            problem: problem,
            workbook: workbook
        });
    });

    return solvedProblems;
}


// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveDocument() {
    console.log('Generating Comprehensive Algebra Workbook with Related Problems...');
    console.log('='.repeat(80));

    const documentChildren = [];

    // ============== DOCUMENT HEADER ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Comprehensive Algebra Workbook',
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
            text: 'Linear, Quadratic, Simultaneous, and Polynomial Equations',
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

    // Part I: Linear Algebra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Linear Algebra (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const linearProblems = generateRelatedLinearEquations();
    linearProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Quadratic Algebra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra (9 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticProblems = generateRelatedQuadraticEquations();
    quadraticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Simultaneous Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const simultaneousProblems = generateRelatedSimultaneousEquations();
    simultaneousProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Polynomial Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Polynomial Equations (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polynomialProblems = generateRelatedPolynomials();
    polynomialProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 24}. ${problem.scenario}: ${problem.problem}`,
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


     // Part V: Triangle Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Triangle Geometry (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const triangleProblems = generateRelatedTriangleProblems();
    triangleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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


    // Part I: Trigonometric Ratios
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Trigonometric Ratios (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigRatiosProblems = generateRelatedTrigRatios();
    trigRatiosProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });
    

    // Part II: Special Angles
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Special Angles (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const specialAnglesProblems = generateRelatedSpecialAngles();
    specialAnglesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Trigonometric Identities
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Trigonometric Identities (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigIdentitiesProblems = generateRelatedTrigIdentities();
    trigIdentitiesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Sine and Cosine Rules
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Sine and Cosine Rules (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const sineCosineProblems = generateRelatedSineCosineRules();
    sineCosineProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Radian Measure
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Radian Measure (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const radianProblems = generateRelatedRadianMeasure();
    radianProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Trigonometric Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Trigonometric Equations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigEquationsProblems = generateRelatedTrigEquations();
    trigEquationsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 36}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VII: Trigonometric Graphs
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Trigonometric Graphs (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const trigGraphsProblems = generateRelatedTrigGraphs();
    trigGraphsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 43}. ${problem.scenario}: ${problem.problem}`,
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
    
   

    // Part VI: Circle Geometry (NEW)
   documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Circle Geometry (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const circleProblems = generateRelatedCircleProblems();
    circleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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

    
    


    // Part V: Coordinate Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Coordinate Geometry (15 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const coordinateGeometryProblems = generateRelatedCoordinateGeometry();
    coordinateGeometryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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

    // Part V: Surface Area and Volume
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Surface Area and Volume (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const surfaceAreaProblems = generateRelatedSurfaceAreaVolume();
    surfaceAreaProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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


    


    // Part V: Solid Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Solid Geometry (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const solidGeometryProblems = generateRelatedSolidGeometry();
    solidGeometryProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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

// Part VII: Quadrilaterals (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quadrilaterals (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadrilateralProblems = generateRelatedQuadrilaterals();
    quadrilateralProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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


     // Part VII: Angle Geometry (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Angle Geometry (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const angleProblems = generateRelatedAngleProblems();
    angleProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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


      // Part VIII: Similarity & Congruence
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Similarity & Congruence (10 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const similarityProblems = generateRelatedSimilarityCongruence();
    similarityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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

    // Part I: Number Properties
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Number Properties (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const numberPropertiesProblems = generateRelatedNumberProperties();
    numberPropertiesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Prime Numbers
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Prime Numbers (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const primeProblems = generateRelatedPrimeNumbers();
    primeProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: HCF/LCM
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: HCF and LCM (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const hcfLcmProblems = generateRelatedHCFLCM();
    hcfLcmProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Modular Arithmetic
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Modular Arithmetic (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const modularProblems = generateRelatedModularArithmetic();
    modularProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Divisibility
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Divisibility (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const divisibilityProblems = generateRelatedDivisibility();
    divisibilityProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Rational and Irrational Numbers
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Rational and Irrational Numbers (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rationalIrrationProblems = generateRelatedRationalIrrational();
    rationalIrrationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 36}. ${problem.scenario}: ${problem.problem}`,
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


    // Part V: Algebraic Expressions (NEW)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Algebraic Expressions (15 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const algebraicProblems = generateRelatedAlgebraicExpressions();
    algebraicProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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
    

     // Part I: Matrix Operations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Matrix Operations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const matrixOperationsProblems = generateRelatedMatrixOperations();
    matrixOperationsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Determinants
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Determinants (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const determinantProblems = generateRelatedDeterminants();
    determinantProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Inverse Matrices
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Inverse Matrices (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const inverseProblems = generateRelatedInverseMatrices();
    inverseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Matrix Transformations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Matrix Transformations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const transformationProblems = generateRelatedMatrixTransformations();
    transformationProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
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



    // Part I: Vector Basics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Vector Basics (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vectorBasicsProblems = generateRelatedVectorBasics();
    vectorBasicsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Vector Operations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Vector Operations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vectorOperationsProblems = generateRelatedVectorOperations();
    vectorOperationsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Dot Product
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Dot Product Applications (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const dotProductProblems = generateRelatedDotProduct();
    dotProductProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Cross Product
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Cross Product Applications (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const crossProductProblems = generateRelatedCrossProduct();
    crossProductProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Vector Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Vector Equations in Space (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const vectorEquationsProblems = generateRelatedVectorEquations();
    vectorEquationsProblems.forEach((problem, index) => {
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

    // Part I: Arithmetic Sequences
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Arithmetic Sequences (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const arithmeticProblems = generateRelatedArithmeticSequences();
    arithmeticProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Geometric Sequences
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Geometric Sequences (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const geometricProblems = generateRelatedGeometricSequences();
    geometricProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 9}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Series Sums
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Series Sums (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const seriesProblems = generateRelatedSeriesSums();
    seriesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 17}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Binomial Theorem
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Binomial Theorem (8 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const binomialProblems = generateRelatedBinomialTheorem();
    binomialProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 25}. ${problem.scenario}: ${problem.problem}`,
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



     // Part I: Function Basics
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Function Basics (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const functionBasicsProblems = generateRelatedFunctionBasics();
    functionBasicsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 1}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Domain and Range
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Domain and Range (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const domainRangeProblems = generateRelatedDomainRange();
    domainRangeProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 8}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Function Types
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Function Types (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const functionTypesProblems = generateRelatedFunctionTypes();
    functionTypesProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 15}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part IV: Transformations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Function Transformations (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const transformationsProblems = generateRelatedTransformations();
    transformationsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 22}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part V: Inverse Functions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Inverse Functions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const inverseFunctionsProblems = generateRelatedInverseFunctions();
    inverseFunctionsProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 29}. ${problem.scenario}: ${problem.problem}`,
                spacing: { after: 100 }
            })
        );
    });

    // Part VI: Piecewise Functions
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Piecewise Functions (7 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const piecewiseProblems = generateRelatedPiecewiseFunctions();
    piecewiseProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 36}. ${problem.scenario}: ${problem.problem}`,
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
    
    // Part V: Rational Expressions - NEW SECTION
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Rational Expressions (12 Problems)',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const rationalProblems = generateRelatedRationalExpressions();
    rationalProblems.forEach((problem, index) => {
        documentChildren.push(
            new docx.Paragraph({
                text: `${index + 32}. ${problem.scenario}: ${problem.problem}`,
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


/**
===================================================================================
========== Solver Documentation ==========================================
*/
    // ============== PART I: LINEAR ALGEBRA ==============
   /**console.log('\nProcessing Part I: Linear Algebra...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Linear Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const linearSolved = solveLinearRelatedProblems();
    linearSolved.forEach((solved, index) => {
        console.log(`  Adding Linear Problem ${index + 1} to document...`);
        
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

    // ============== PART II: QUADRATIC ALGEBRA ==============
    console.log('\nProcessing Part II: Quadratic Algebra...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadraticSolved = solveQuadraticRelatedProblems();
    quadraticSolved.forEach((solved, index) => {
        console.log(`  Adding Quadratic Problem ${index + 1} to document...`);
        
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

    // ============== PART III: SIMULTANEOUS EQUATIONS ==============
    console.log('\nProcessing Part III: Simultaneous Equations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const simultaneousSolved = solveSimultaneousRelatedProblems();
    simultaneousSolved.forEach((solved, index) => {
        console.log(`  Adding Simultaneous Problem ${index + 1} to document...`);
        
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
    */
    // ============== PART IV: POLYNOMIAL EQUATIONS ==============
  

    // ============== PART I: TRIGONOMETRIC RATIOS ==============
    console.log('\nProcessing Part I: Trigonometric Ratios...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Trigonometric Ratios',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigRatiosSolved = solveTrigRatiosRelatedProblems();
    trigRatiosSolved.forEach((solved, index) => {
        console.log(`  Adding Trig Ratios Problem ${index + 1} to document...`);

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
    

    // ============== PART V: SOLID GEOMETRY (NEW SECTION) ==============
    /**console.log('\nProcessing Part V: Solid Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Solid Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const solidGeometrySolved = solveSolidGeometryRelatedProblems();
    solidGeometrySolved.forEach((solved, index) => {
        console.log(`  Adding Solid Geometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    */

     // ============== PART V: COORDINATE GEOMETRY ==============
    /**console.log('\nProcessing Part V: Coordinate Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Coordinate Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const coordinateGeometrySolved = solveCoordinateGeometryRelatedProblems();
    coordinateGeometrySolved.forEach((solved, index) => {
        console.log(`  Adding Coordinate Geometry Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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

     // ============== PART I: MATRIX OPERATIONS ==============
    console.log('\nProcessing Part I: Matrix Operations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Matrix Operations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const matrixOperationsSolved = solveMatrixOperationsProblems();
    matrixOperationsSolved.forEach((solved, index) => {
        console.log(`  Adding Matrix Operations Problem ${index + 1} to document...`);

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

    // ============== PART II: DETERMINANTS ==============
    console.log('\nProcessing Part II: Determinants...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Determinants',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const determinantsSolved = solveDeterminantProblems();
    determinantsSolved.forEach((solved, index) => {
        console.log(`  Adding Determinant Problem ${index + 1} to document...`);

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

    // ============== PART III: INVERSE MATRICES ==============
    console.log('\nProcessing Part III: Inverse Matrices...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Inverse Matrices',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const inversesSolved = solveInverseMatrixProblems();
    inversesSolved.forEach((solved, index) => {
        console.log(`  Adding Inverse Matrix Problem ${index + 1} to document...`);

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

     // ============== PART IV: MATRIX TRANSFORMATIONS ==============
    console.log('\nProcessing Part IV: Matrix Transformations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Matrix Transformations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const transformationsSolved = solveMatrixTransformationProblems();
    transformationsSolved.forEach((solved, index) => {
        console.log(`  Adding Matrix Transformation Problem ${index + 1} to document...`);

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
    


    // ============== PART I: VECTOR BASICS ==============
    console.log('\nProcessing Part I: Vector Basics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Vector Basics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vectorBasicsSolved = solveVectorBasicsRelatedProblems();
    vectorBasicsSolved.forEach((solved, index) => {
        console.log(`  Adding Vector Basics Problem ${index + 1} to document...`);

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
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART II: VECTOR OPERATIONS ==============
    console.log('\nProcessing Part II: Vector Operations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Vector Operations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vectorOperationsSolved = solveVectorOperationsRelatedProblems();
    vectorOperationsSolved.forEach((solved, index) => {
        console.log(`  Adding Vector Operations Problem ${index + 1} to document...`);

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
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART III: DOT PRODUCT ==============
    console.log('\nProcessing Part III: Dot Product Applications...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Dot Product Applications',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const dotProductSolved = solveDotProductRelatedProblems();
    dotProductSolved.forEach((solved, index) => {
        console.log(`  Adding Dot Product Problem ${index + 1} to document...`);

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
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART IV: CROSS PRODUCT ==============
    console.log('\nProcessing Part IV: Cross Product Applications...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Cross Product Applications',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const crossProductSolved = solveCrossProductRelatedProblems();
    crossProductSolved.forEach((solved, index) => {
        console.log(`  Adding Cross Product Problem ${index + 1} to document...`);

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
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART V: VECTOR EQUATIONS ==============
    console.log('\nProcessing Part V: Vector Equations in Space...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Vector Equations in Space',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const vectorEquationsSolved = solveVectorEquationsRelatedProblems();
    vectorEquationsSolved.forEach((solved, index) => {
        console.log(`  Adding Vector Equations Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 }
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });
    */


    // ============== PART I: ARITHMETIC SEQUENCES ==============
   /** console.log('\nProcessing Part I: Arithmetic Sequences...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Arithmetic Sequences',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const arithmeticSolved = solveArithmeticRelatedProblems();
    arithmeticSolved.forEach((solved, index) => {
        console.log(`  Adding Arithmetic Problem ${index + 1} to document...`);

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

    // ============== PART II: GEOMETRIC SEQUENCES ==============
    console.log('\nProcessing Part II: Geometric Sequences...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Geometric Sequences',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const geometricSolved = solveGeometricRelatedProblems();
    geometricSolved.forEach((solved, index) => {
        console.log(`  Adding Geometric Problem ${index + 1} to document...`);

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

    // ============== PART III: SERIES SUMS ==============
    console.log('\nProcessing Part III: Series Sums...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Series Sums',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const seriesSolved = solveSeriesSumsRelatedProblems();
    seriesSolved.forEach((solved, index) => {
        console.log(`  Adding Series Sum Problem ${index + 1} to document...`);

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

    // ============== PART IV: BINOMIAL THEOREM ==============
    console.log('\nProcessing Part IV: Binomial Theorem...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Binomial Theorem',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const binomialSolved = solveBinomialRelatedProblems();
    binomialSolved.forEach((solved, index) => {
        console.log(`  Adding Binomial Problem ${index + 1} to document...`);

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
    */
     
     // ============== PART I: NUMBER PROPERTIES ==============
   /** console.log('\nProcessing Part I: Number Properties...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Number Properties',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const numberPropertiesSolved = solveNumberPropertiesRelatedProblems();
    numberPropertiesSolved.forEach((solved, index) => {
        console.log(`  Adding Number Properties Problem ${index + 1} to document...`);

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

    // ============== PART II: PRIME NUMBERS ==============
    console.log('\nProcessing Part II: Prime Numbers...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Prime Numbers',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const primeNumbersSolved = solvePrimeNumbersRelatedProblems();
    primeNumbersSolved.forEach((solved, index) => {
        console.log(`  Adding Prime Numbers Problem ${index + 1} to document...`);

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

    // ============== PART III: HCF/LCM ==============
    console.log('\nProcessing Part III: HCF and LCM...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: HCF and LCM',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const hcfLcmSolved = solveHCFLCMRelatedProblems();
    hcfLcmSolved.forEach((solved, index) => {
        console.log(`  Adding HCF/LCM Problem ${index + 1} to document...`);

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

    // ============== PART IV: MODULAR ARITHMETIC ==============
    console.log('\nProcessing Part IV: Modular Arithmetic...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Modular Arithmetic',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const modularSolved = solveModularArithmeticRelatedProblems();
    modularSolved.forEach((solved, index) => {
        console.log(`  Adding Modular Arithmetic Problem ${index + 1} to document...`);

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

    // ============== PART V: DIVISIBILITY ==============
    console.log('\nProcessing Part V: Divisibility...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Divisibility',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const divisibilitySolved = solveDivisibilityRelatedProblems();
    divisibilitySolved.forEach((solved, index) => {
        console.log(`  Adding Divisibility Problem ${index + 1} to document...`);

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

        documentChildren.push(
            new docx.Paragraph({
                text: `Real-World Context: ${solved.problem.realWorldContext}`,
                spacing: { after: 300 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    // ============== PART VI: RATIONAL AND IRRATIONAL NUMBERS ==============
    console.log('\nProcessing Part VI: Rational and Irrational Numbers...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Rational and Irrational Numbers',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rationalSolved = solveRationalIrrationalRelatedProblems();
    rationalSolved.forEach((solved, index) => {
        console.log(`  Adding Rational/Irrational Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 36}: ${solved.problem.scenario}`,
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

    // ============== PART V: SURFACE AREA AND VOLUME ==============
    console.log('\nProcessing Part V: Surface Area and Volume...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Surface Area and Volume',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const surfaceAreaSolved = solveSurfaceAreaVolumeRelatedProblems();
    surfaceAreaSolved.forEach((solved, index) => {
        console.log(`  Adding Surface Area/Volume Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
                text: `Shape Type: ${solved.problem.shapeType}`,
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
    */

    // ============== PART II: SPECIAL ANGLES ==============
    console.log('\nProcessing Part II: Special Angles...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Special Angles',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const specialAnglesSolved = solveSpecialAnglesRelatedProblems();
    specialAnglesSolved.forEach((solved, index) => {
        console.log(`  Adding Special Angles Problem ${index + 1} to document...`);

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
    

    // ============== PART III: TRIGONOMETRIC IDENTITIES ==============
    console.log('\nProcessing Part III: Trigonometric Identities...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Trigonometric Identities',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigIdentitiesSolved = solveTrigIdentitiesRelatedProblems();
    trigIdentitiesSolved.forEach((solved, index) => {
        console.log(`  Adding Trig Identities Problem ${index + 1} to document...`);

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
    
    // ============== PART IV: SINE AND COSINE RULES ==============
    console.log('\nProcessing Part IV: Sine and Cosine Rules...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Sine and Cosine Rules',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const sineCosineRulesSolved = solveSineCosineRulesRelatedProblems();
    sineCosineRulesSolved.forEach((solved, index) => {
        console.log(`  Adding Sine/Cosine Rules Problem ${index + 1} to document...`);

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

    // ============== PART V: RADIAN MEASURE ==============
    console.log('\nProcessing Part V: Radian Measure...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Radian Measure',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const radianMeasureSolved = solveRadianMeasureRelatedProblems();
    radianMeasureSolved.forEach((solved, index) => {
        console.log(`  Adding Radian Measure Problem ${index + 1} to document...`);

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

    // ============== PART VI: TRIGONOMETRIC EQUATIONS ==============
    console.log('\nProcessing Part VI: Trigonometric Equations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Trigonometric Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigEquationsSolved = solveTrigEquationsRelatedProblems();
    trigEquationsSolved.forEach((solved, index) => {
        console.log(`  Adding Trig Equations Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 36}: ${solved.problem.scenario}`,
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

    // ============== PART VII: TRIGONOMETRIC GRAPHS ==============
    console.log('\nProcessing Part VII: Trigonometric Graphs...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VII: Trigonometric Graphs',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const trigGraphsSolved = solveTrigGraphsRelatedProblems();
    trigGraphsSolved.forEach((solved, index) => {
        console.log(`  Adding Trig Graphs Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 43}: ${solved.problem.scenario}`,
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
    


    // ============== PART V: TRIANGLE GEOMETRY (NEW) ==============
    /**console.log('\nProcessing Part V: Triangle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Triangle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const triangleSolved = solveTriangleRelatedProblems();
    triangleSolved.forEach((solved, index) => {
        console.log(`  Adding Triangle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    


    // ============== PART VI: CIRCLE GEOMETRY (NEW) ==============
    /**console.log('\nProcessing Part V: Circle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Circle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const circleSolved = solveCircleRelatedProblems();
    circleSolved.forEach((solved, index) => {
        console.log(`  Adding Circle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    
     // ============== PART VII: QUADRILATERALS (NEW SECTION) ==============
    console.log('\nProcessing Part V: Quadrilaterals...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Quadrilaterals',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const quadrilateralSolved = solveQuadrilateralRelatedProblems();
    quadrilateralSolved.forEach((solved, index) => {
        console.log(`  Adding Quadrilateral Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    */


    // ============== PART V: ALGEBRAIC EXPRESSIONS (NEW) ==============
    console.log('\nProcessing Part V: Algebraic Expressions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Algebraic Expressions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const algebraicSolved = solveAlgebraicRelatedProblems();
    algebraicSolved.forEach((solved, index) => {
        console.log(`  Adding Algebraic Expression Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
   
     // ============== PART V: RATIONAL EXPRESSIONS - NEW SECTION ==============
    console.log('\nProcessing Part V: Rational Expressions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Rational Expressions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const rationalSolved = solveRationalRelatedProblems();
    rationalSolved.forEach((solved, index) => {
        console.log(`  Adding Rational Expression Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
                spacing: { after: 200 },
                italics: true
            })
        );

        documentChildren.push(...generateProblemSections(solved.workbook));
    });

    
    // ============== PART VIII: ANGLE GEOMETRY (NEW) ==============
    /**console.log('\nProcessing Part V: Angle Geometry...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Angle Geometry',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const angleSolved = solveAngleRelatedProblems();
    angleSolved.forEach((solved, index) => {
        console.log(`  Adding Angle Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    */
   

      // ============== PART I: FUNCTION BASICS ==============
    console.log('\nProcessing Part I: Function Basics...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Function Basics',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const functionBasicsSolved = solveFunctionBasicsRelatedProblems();
    functionBasicsSolved.forEach((solved, index) => {
        console.log(`  Adding Function Basics Problem ${index + 1} to document...`);

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

    // ============== PART II: DOMAIN AND RANGE ==============
    /**console.log('\nProcessing Part II: Domain and Range...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Domain and Range',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const domainRangeSolved = solveDomainRangeRelatedProblems();
    domainRangeSolved.forEach((solved, index) => {
        console.log(`  Adding Domain/Range Problem ${index + 1} to document...`);

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

    // ============== PART III: FUNCTION TYPES ==============
    console.log('\nProcessing Part III: Function Types...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Function Types',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const functionTypesSolved = solveFunctionTypesRelatedProblems();
    functionTypesSolved.forEach((solved, index) => {
        console.log(`  Adding Function Types Problem ${index + 1} to document...`);

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

    // ============== PART IV: TRANSFORMATIONS ==============
    console.log('\nProcessing Part IV: Transformations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Function Transformations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const transformationsSolved = solveTransformationsRelatedProblems();
    transformationsSolved.forEach((solved, index) => {
        console.log(`  Adding Transformations Problem ${index + 1} to document...`);

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

    // ============== PART V: INVERSE FUNCTIONS ==============
    console.log('\nProcessing Part V: Inverse Functions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Inverse Functions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const inverseFunctionsSolved = solveInverseFunctionsRelatedProblems();
    inverseFunctionsSolved.forEach((solved, index) => {
        console.log(`  Adding Inverse Functions Problem ${index + 1} to document...`);

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

    // ============== PART VI: PIECEWISE FUNCTIONS ==============
    console.log('\nProcessing Part VI: Piecewise Functions...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part VI: Piecewise Functions',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const piecewiseSolved = solvePiecewiseFunctionsRelatedProblems();
    piecewiseSolved.forEach((solved, index) => {
        console.log(`  Adding Piecewise Functions Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 36}: ${solved.problem.scenario}`,
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
    */


   // ============== PART V: SIMILARITY & CONGRUENCE ==============
    /**console.log('\nProcessing Part V: Similarity & Congruence...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part V: Similarity & Congruence',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const similaritySolved = solveSimilarityCongruenceRelatedProblems();
    similaritySolved.forEach((solved, index) => {
        console.log(`  Adding Similarity/Congruence Problem ${index + 1} to document...`);

        documentChildren.push(
            new docx.Paragraph({
                text: `Problem ${index + 32}: ${solved.problem.scenario}`,
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
    */

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
        const filename = 'comprehensive_algebra_workbook_with_related_problems.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);

        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Problems: 31');
        console.log('    - Linear Algebra: 7 problems');
        console.log('    - Quadratic Algebra: 9 problems');
        console.log('    - Simultaneous Equations: 7 problems');
        console.log('    - Polynomial Equations: 8 problems');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Linear Algebra (Problems 1-7)');
        console.log('  • Part II: Quadratic Algebra (Problems 8-16)');
        console.log('  • Part III: Simultaneous Equations (Problems 17-23)');
        console.log('  • Part IV: Polynomial Equations (Problems 24-31)');
        console.log('\n📄 EXPECTED PAGES: 100+ pages');
        console.log('\n✨ Each problem includes:');
        console.log('  • Problem statement with difficulty level');
        console.log('  • Helper tips for quick guidance');
        console.log('  • Complete step-by-step solution');
        console.log('  • Enhanced explanations and verification');
        console.log('  • Key concepts and pedagogical notes');
        console.log('  • Alternative solution methods');
        console.log('  • Real-world context and applications');
        console.log('  • Common mistakes and error prevention');
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
