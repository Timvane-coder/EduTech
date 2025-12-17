import { EnhancedLinearMathematicalWorkbook } from './linearworkbook.js';
import { EnhancedQuadraticMathematicalWorkbook } from './quadraticworkbook.js';
import { EnhancedSimultaneousEquationsWorkbook } from './SimultaneousWorkbook.js';
import { EnhancedPolynomialMathematicalWorkbook } from './polynomialworkbook.js'
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

function solvePolynomialRelatedProblems() {
    const problems = generateRelatedPolynomials();
    const solvedProblems = [];

    problems.forEach((problem, index) => {
        console.log(`  Solving Polynomial Problem ${index + 1}: ${problem.scenario}`);
        
        const workbook = new EnhancedPolynomialMathematicalWorkbook({
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
        
        workbook.solvePolynomialProblem({
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

    // ============== PART I: LINEAR ALGEBRA ==============
    console.log('\nProcessing Part I: Linear Algebra...');
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

    // ============== PART IV: POLYNOMIAL EQUATIONS ==============
    console.log('\nProcessing Part IV: Polynomial Equations...');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Polynomial Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    const polynomialSolved = solvePolynomialRelatedProblems();
    polynomialSolved.forEach((solved, index) => {
        console.log(`  Adding Polynomial Problem ${index + 1} to document...`);
        
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
