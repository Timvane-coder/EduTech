import { EnhancedLinearMathematicalWorkbook } from './linearworkbook.js';
import { EnhancedQuadraticMathematicalWorkbook } from './quadraticworkbook.js';
import { EnhancedSimultaneousEquationsWorkbook } from './SimultaneousWorkbook.js';
import { EnhancedPolynomialMathematicalWorkbook } from './polynomialworkbook.js'
import * as docx from 'docx';
import fs from 'fs';
import path from 'path';

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

// ============== LINEAR EXAMPLES (existing functions remain unchanged) ==============

function testSimpleLinear() {
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

    workbook.solveLinearProblem({
        equation: '3x + 5 = 14',
        problemType: 'simple_linear',
        parameters: { m: 3, b: 5, c: 14 },
        context: {
            difficulty: 'beginner',
            topic: 'Linear Equations'
        }
    });

    return workbook;
}

function testLinearInequality() {
    const workbook = new EnhancedLinearMathematicalWorkbook({
        explanationLevel: 'scaffolded',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        verificationDetail: 'detailed'
    });

    workbook.solveLinearProblem({
        equation: '-2x + 7 > 3',
        problemType: 'linear_inequality',
        parameters: { m: -2, b: 7, c: 3, operator: '>' },
        context: {
            difficulty: 'intermediate',
            topic: 'Linear Inequalities'
        }
    });

    return workbook;
}

function testAbsoluteValue() {
    const workbook = new EnhancedLinearMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solveLinearProblem({
        equation: '|2x - 3| = 7',
        problemType: 'absolute_value_equation',
        parameters: { a: 2, b: -3, c: 7 },
        context: {
            difficulty: 'intermediate',
            topic: 'Absolute Value Equations'
        }
    });

    return workbook;
}

function testSystem2x2() {
    const workbook = new EnhancedLinearMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solveLinearProblem({
        equation: '2x + 3y = 8 and 4x - y = 5',
        problemType: 'system_2x2',
        parameters: { 
            a1: 2, b1: 3, c1: 8,
            a2: 4, b2: -1, c2: 5
        },
        context: {
            difficulty: 'advanced',
            topic: 'Systems of Linear Equations'
        }
    });

    return workbook;
}

// ============== QUADRATIC EXAMPLES (existing functions remain unchanged) ==============

function testStandardQuadratic() {
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

    workbook.solveQuadraticProblem({
        equation: 'x² - 5x + 6 = 0',
        problemType: 'standard_quadratic',
        parameters: { a: 1, b: -5, c: 6 },
        context: {
            difficulty: 'beginner',
            topic: 'Standard Quadratic Equations'
        }
    });

    return workbook;
}

function testQuadraticFormula() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solveQuadraticProblem({
        equation: '2x² + 7x - 4 = 0',
        problemType: 'quadratic_formula',
        parameters: { a: 2, b: 7, c: -4 },
        context: {
            difficulty: 'intermediate',
            topic: 'Quadratic Formula'
        }
    });

    return workbook;
}

function testFactoringQuadratic() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'scaffolded',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true
    });

    workbook.solveQuadraticProblem({
        equation: 'x² + 7x + 12 = 0',
        problemType: 'factoring_quadratic',
        parameters: { a: 1, b: 7, c: 12 },
        context: {
            difficulty: 'beginner',
            topic: 'Factoring Quadratics'
        }
    });

    return workbook;
}

function testCompletingSquare() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solveQuadraticProblem({
        equation: 'x² + 6x + 5 = 0',
        problemType: 'completing_square',
        parameters: { a: 1, b: 6, c: 5 },
        context: {
            difficulty: 'intermediate',
            topic: 'Completing the Square'
        }
    });

    return workbook;
}

function testQuadraticInequality() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true
    });

    workbook.solveQuadraticProblem({
        equation: 'x² - 4x + 3 > 0',
        problemType: 'quadratic_inequality',
        parameters: { a: 1, b: -4, c: 3, operator: '>' },
        context: {
            difficulty: 'intermediate',
            topic: 'Quadratic Inequalities'
        }
    });

    return workbook;
}

function testVertexForm() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true
    });

    workbook.solveQuadraticProblem({
        equation: 'f(x) = 2x² - 8x + 10',
        problemType: 'vertex_form',
        parameters: { a: 2, b: -8, c: 10 },
        context: {
            difficulty: 'intermediate',
            topic: 'Vertex Form Analysis'
        }
    });

    return workbook;
}

function testQuadraticFunction() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includePedagogicalNotes: true
    });

    workbook.solveQuadraticProblem({
        equation: 'f(x) = -x² + 4x + 5',
        problemType: 'function_analysis',
        parameters: { a: -1, b: 4, c: 5 },
        context: {
            difficulty: 'intermediate',
            topic: 'Quadratic Function Analysis'
        }
    });

    return workbook;
}

function testComplexSolutions() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solveQuadraticProblem({
        equation: 'x² + 2x + 5 = 0',
        problemType: 'complex_solutions',
        parameters: { a: 1, b: 2, c: 5 },
        context: {
            difficulty: 'advanced',
            topic: 'Complex Solutions'
        }
    });

    return workbook;
}

function testOptimization() {
    const workbook = new EnhancedQuadraticMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includePedagogicalNotes: true
    });

    workbook.solveQuadraticProblem({
        equation: 'Maximize f(x) = -2x² + 8x + 3',
        problemType: 'optimization',
        parameters: { a: -2, b: 8, c: 3, optimizationType: 'maximize' },
        context: {
            difficulty: 'intermediate',
            topic: 'Quadratic Optimization'
        }
    });

    return workbook;
}

// ============== SIMULTANEOUS EQUATIONS EXAMPLES ==============

function testSubstitutionMethod() {
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
        equations: ['2x + y = 7', 'x - y = 2'],
        method: 'system_2x2_substitution',
        context: {
            difficulty: 'beginner',
            topic: 'Substitution Method'
        }
    });

    return workbook;
}

function testEliminationMethod() {
    const workbook = new EnhancedSimultaneousEquationsWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solveSimultaneousSystem({
        equations: ['3x + 2y = 12', '2x - y = 1'],
        method: 'system_2x2_elimination',
        context: {
            difficulty: 'intermediate',
            topic: 'Elimination Method'
        }
    });

    return workbook;
}

function testGraphicalMethod() {
    const workbook = new EnhancedSimultaneousEquationsWorkbook({
        explanationLevel: 'scaffolded',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true
    });

    workbook.solveSimultaneousSystem({
        equations: ['x + y = 5', '2x - y = 1'],
        method: 'system_2x2_graphical',
        context: {
            difficulty: 'beginner',
            topic: 'Graphical Method'
        }
    });

    return workbook;
}

function testMatrixMethod() {
    const workbook = new EnhancedSimultaneousEquationsWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solveSimultaneousSystem({
        equations: ['4x + 3y = 10', '2x - 5y = -4'],
        method: 'system_2x2_matrix',
        context: {
            difficulty: 'intermediate',
            topic: 'Matrix Method (Cramer\'s Rule)'
        }
    });

    return workbook;
}

function testSystem3x3() {
    const workbook = new EnhancedSimultaneousEquationsWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solveSimultaneousSystem({
        equations: ['x + y + z = 6', '2x - y + z = 3', 'x + 2y - z = 2'],
        method: 'system_3x3',
        context: {
            difficulty: 'advanced',
            topic: '3×3 System of Equations'
        }
    });

    return workbook;
}



// ============== POLYNOMIAL EXAMPLES ==============

function testQuadraticStandard() {
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

    workbook.solvePolynomialProblem({
        equation: 'x² - 7x + 12 = 0',
        problemType: 'quadratic_standard',
        parameters: { a: 1, b: -7, c: 12 },
        context: {
            difficulty: 'beginner',
            topic: 'Quadratic Equations - Standard Form'
        }
    });

    return workbook;
}

function testQuadraticFactoring() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'scaffolded',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solvePolynomialProblem({
        equation: 'x² + 5x + 6 = 0',
        problemType: 'quadratic_factoring',
        parameters: { a: 1, b: 5, c: 6 },
        context: {
            difficulty: 'beginner',
            topic: 'Quadratic Equations - Factoring Method'
        }
    });

    return workbook;
}

function testCompletingSquarePolynomial() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solvePolynomialProblem({
        equation: 'x² - 4x + 1 = 0',
        problemType: 'completing_square',
        parameters: { a: 1, b: -4, c: 1 },
        context: {
            difficulty: 'intermediate',
            topic: 'Completing the Square'
        }
    });

    return workbook;
}

function testCubicEquation() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true,
        includePedagogicalNotes: true
    });

    workbook.solvePolynomialProblem({
        equation: 'x³ - 6x² + 11x - 6 = 0',
        problemType: 'cubic_equation',
        parameters: { a: 1, b: -6, c: 11, d: -6 },
        context: {
            difficulty: 'advanced',
            topic: 'Cubic Equations'
        }
    });

    return workbook;
}

function testRationalRootTheorem() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includePedagogicalNotes: true
    });

    workbook.solvePolynomialProblem({
        equation: 'Find rational roots',
        problemType: 'rational_root',
        parameters: { coefficients: [1, -4, 1, 6] },
        context: {
            difficulty: 'intermediate',
            topic: 'Rational Root Theorem'
        }
    });

    return workbook;
}

function testSyntheticDivision() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeErrorPrevention: true
    });

    workbook.solvePolynomialProblem({
        equation: 'Divide polynomial',
        problemType: 'synthetic_division',
        parameters: { coefficients: [1, -3, 2, 4], divisor: 2 },
        context: {
            difficulty: 'intermediate',
            topic: 'Synthetic Division'
        }
    });

    return workbook;
}

function testPolynomialInequality() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includeAlternativeMethods: true,
        includeErrorPrevention: true
    });

    workbook.solvePolynomialProblem({
        equation: 'x² - 5x + 6 > 0',
        problemType: 'polynomial_inequality',
        parameters: { coefficients: [1, -5, 6], operator: '>' },
        context: {
            difficulty: 'intermediate',
            topic: 'Polynomial Inequalities'
        }
    });

    return workbook;
}

function testPolynomialGraphing() {
    const workbook = new EnhancedPolynomialMathematicalWorkbook({
        explanationLevel: 'detailed',
        includeVerificationInSteps: true,
        includeConceptualConnections: true,
        includePedagogicalNotes: true
    });

    workbook.solvePolynomialProblem({
        equation: 'Analyze and graph polynomial',
        problemType: 'polynomial_graphing',
        parameters: { coefficients: [1, -2, -5, 6] },
        context: {
            difficulty: 'intermediate',
            topic: 'Polynomial Graphing Analysis'
        }
    });

    return workbook;
}



// ============== COMPREHENSIVE DOCUMENT GENERATION ==============

async function generateComprehensiveDocument() {
    console.log('Generating comprehensive Linear, Quadratic, and Simultaneous Equations Workbook...');
    
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
            text: 'Linear Equations, Quadratic Equations, and Simultaneous Systems',
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
            text: 'Part I: Linear Algebra',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const linearExamples = [
        '1. Simple Linear Equation: 3x + 5 = 14',
        '2. Linear Inequality: -2x + 7 > 3',
        '3. Absolute Value Equation: |2x - 3| = 7',
        '4. System of 2x2 Equations: 2x + 3y = 8 and 4x - y = 5'
    ];

    linearExamples.forEach(ex => {
        documentChildren.push(
            new docx.Paragraph({
                text: ex,
                spacing: { after: 100 }
            })
        );
    });

    // Part II: Quadratic Algebra
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const quadraticExamples = [
        '5. Standard Quadratic: x² - 5x + 6 = 0',
        '6. Quadratic Formula: 2x² + 7x - 4 = 0',
        '7. Factoring Quadratic: x² + 7x + 12 = 0',
        '8. Completing the Square: x² + 6x + 5 = 0',
        '9. Quadratic Inequality: x² - 4x + 3 > 0',
        '10. Vertex Form: f(x) = 2x² - 8x + 10',
        '11. Quadratic Function Analysis: f(x) = -x² + 4x + 5',
        '12. Complex Solutions: x² + 2x + 5 = 0',
        '13. Optimization: Maximize f(x) = -2x² + 8x + 3'
    ];

    quadraticExamples.forEach(ex => {
        documentChildren.push(
            new docx.Paragraph({
                text: ex,
                spacing: { after: 100 }
            })
        );
    });

    // Part III: Simultaneous Equations
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const simultaneousExamples = [
        '14. Substitution Method: 2x + y = 7, x - y = 2',
        '15. Elimination Method: 3x + 2y = 12, 2x - y = 1',
        '16. Graphical Method: x + y = 5, 2x - y = 1',
        '17. Matrix Method: 4x + 3y = 10, 2x - 5y = -4',
        '18. 3×3 System: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2',
        '19. No Solution (Parallel Lines): 2x + y = 5, 4x + 2y = 7',
        '20. Infinite Solutions (Dependent): 3x - 2y = 6, 6x - 4y = 12'
    ];

    simultaneousExamples.forEach(ex => {
        documentChildren.push(
            new docx.Paragraph({
                text: ex,
                spacing: { after: 100 }
            })
        );
    });


      // Part IV: Polynomial Equations (Examples 21-28)
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Polynomial Equations',
            heading: docx.HeadingLevel.HEADING_3,
            spacing: { before: 200, after: 100 }
        })
    );

    const polynomialExamples = [
        '21. Quadratic Standard Form: x² - 7x + 12 = 0',
        '22. Quadratic Factoring: x² + 5x + 6 = 0',
        '23. Completing the Square: x² - 4x + 1 = 0',
        '24. Cubic Equation: x³ - 6x² + 11x - 6 = 0',
        '25. Rational Root Theorem: Finding rational roots',
        '26. Synthetic Division: Polynomial division',
        '27. Polynomial Inequality: x² - 5x + 6 > 0',
        '28. Polynomial Graphing: Analysis and graphing'
    ];

    polynomialExamples.forEach(ex => {
        documentChildren.push(new docx.Paragraph({ text: ex, spacing: { after: 100 } }));
    });

    documentChildren.push(new docx.Paragraph({ text: '', spacing: { after: 400 } }));


    documentChildren.push(
        new docx.Paragraph({
            text: '',
            spacing: { after: 400 }
        })
    );

    // ============== PART I: LINEAR ALGEBRA ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part I: Linear Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    console.log('Processing Linear Examples...');
    
    // Linear Example 1
    console.log('  Example 1: Simple Linear Equation');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 1: Simple Linear Equation',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 3x + 5 = 14', spacing: { after: 200 }, bold: true }));
    const workbook1 = testSimpleLinear();
    documentChildren.push(...generateProblemSections(workbook1));

    // Linear Example 2
    console.log('  Example 2: Linear Inequality');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 2: Linear Inequality',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: -2x + 7 > 3', spacing: { after: 200 }, bold: true }));
    const workbook2 = testLinearInequality();
    documentChildren.push(...generateProblemSections(workbook2));

    // Linear Example 3
    console.log('  Example 3: Absolute Value Equation');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 3: Absolute Value Equation',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: |2x - 3| = 7', spacing: { after: 200 }, bold: true }));
    const workbook3 = testAbsoluteValue();
    documentChildren.push(...generateProblemSections(workbook3));

    // Linear Example 4
    console.log('  Example 4: System of 2x2 Equations');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 4: System of 2x2 Equations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 2x + 3y = 8 and 4x - y = 5', spacing: { after: 200 }, bold: true }));
    const workbook4 = testSystem2x2();
    documentChildren.push(...generateProblemSections(workbook4));

    // ============== PART II: QUADRATIC ALGEBRA ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part II: Quadratic Algebra',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    console.log('Processing Quadratic Examples...');

    // Quadratic Example 5
    console.log('  Example 5: Standard Quadratic');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 5: Standard Quadratic Equation',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² - 5x + 6 = 0', spacing: { after: 200 }, bold: true }));
    const workbook5 = testStandardQuadratic();
    documentChildren.push(...generateProblemSections(workbook5));

    // Quadratic Example 6
    console.log('  Example 6: Quadratic Formula');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 6: Quadratic Formula Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 2x² + 7x - 4 = 0', spacing: { after: 200 }, bold: true }));
    const workbook6 = testQuadraticFormula();
    documentChildren.push(...generateProblemSections(workbook6));

    // Quadratic Example 7
    console.log('  Example 7: Factoring Quadratic');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 7: Solving by Factoring',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² + 7x + 12 = 0', spacing: { after: 200 }, bold: true }));
    const workbook7 = testFactoringQuadratic();
    documentChildren.push(...generateProblemSections(workbook7));

    // Quadratic Example 8
    console.log('  Example 8: Completing the Square');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 8: Completing the Square',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² + 6x + 5 = 0', spacing: { after: 200 }, bold: true }));
    const workbook8 = testCompletingSquare();
    documentChildren.push(...generateProblemSections(workbook8));

    // Quadratic Example 9
    console.log('  Example 9: Quadratic Inequality');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 9: Quadratic Inequality',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² - 4x + 3 > 0', spacing: { after: 200 }, bold: true }));
    const workbook9 = testQuadraticInequality();
    documentChildren.push(...generateProblemSections(workbook9));

    // Quadratic Example 10
    console.log('  Example 10: Vertex Form');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 10: Vertex Form Analysis',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: f(x) = 2x² - 8x + 10', spacing: { after: 200 }, bold: true }));
    const workbook10 = testVertexForm();
    documentChildren.push(...generateProblemSections(workbook10));

    // Quadratic Example 11
    console.log('  Example 11: Quadratic Function Analysis');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 11: Quadratic Function Analysis',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: f(x) = -x² + 4x + 5', spacing: { after: 200 }, bold: true }));
    const workbook11 = testQuadraticFunction();
    documentChildren.push(...generateProblemSections(workbook11));

    // Quadratic Example 12
    console.log('  Example 12: Complex Solutions');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 12: Complex Solutions',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² + 2x + 5 = 0', spacing: { after: 200 }, bold: true }));
    const workbook12 = testComplexSolutions();
    documentChildren.push(...generateProblemSections(workbook12));

    // Quadratic Example 13
    console.log('  Example 13: Optimization');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 13: Quadratic Optimization',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: Maximize f(x) = -2x² + 8x + 3', spacing: { after: 200 }, bold: true }));
    const workbook13 = testOptimization();
    documentChildren.push(...generateProblemSections(workbook13));

    // ============== PART III: SIMULTANEOUS EQUATIONS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part III: Simultaneous Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    console.log('Processing Simultaneous Equations Examples...');

    // Simultaneous Example 14
    console.log('  Example 14: Substitution Method');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 14: Substitution Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 2x + y = 7 and x - y = 2', spacing: { after: 200 }, bold: true }));
    const workbook14 = testSubstitutionMethod();
    documentChildren.push(...generateProblemSections(workbook14));

    // Simultaneous Example 15
    console.log('  Example 15: Elimination Method');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 15: Elimination Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 3x + 2y = 12 and 2x - y = 1', spacing: { after: 200 }, bold: true }));
    const workbook15 = testEliminationMethod();
    documentChildren.push(...generateProblemSections(workbook15));

    // Simultaneous Example 16
    console.log('  Example 16: Graphical Method');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 16: Graphical Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x + y = 5 and 2x - y = 1', spacing: { after: 200 }, bold: true }));
    const workbook16 = testGraphicalMethod();
    documentChildren.push(...generateProblemSections(workbook16));

    // Simultaneous Example 17
    console.log('  Example 17: Matrix Method (Cramer\'s Rule)');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 17: Matrix Method (Cramer\'s Rule)',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: 4x + 3y = 10 and 2x - 5y = -4', spacing: { after: 200 }, bold: true }));
    const workbook17 = testMatrixMethod();
    documentChildren.push(...generateProblemSections(workbook17));

    // Simultaneous Example 18
    console.log('  Example 18: 3×3 System of Equations');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 18: 3×3 System of Equations',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x + y + z = 6, 2x - y + z = 3, x + 2y - z = 2', spacing: { after: 200 }, bold: true }));
    const workbook18 = testSystem3x3();
    documentChildren.push(...generateProblemSections(workbook18));


      // ============== PART IV: POLYNOMIAL EQUATIONS ==============
    documentChildren.push(
        new docx.Paragraph({
            text: 'Part IV: Polynomial Equations',
            heading: docx.HeadingLevel.HEADING_1,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );

    console.log('Processing Polynomial Examples...');

    // Polynomial Example 21
    console.log('  Example 21: Quadratic Standard Form');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 21: Quadratic Equation - Standard Form',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² - 7x + 12 = 0', spacing: { after: 200 }, bold: true }));
    const workbook21 = testQuadraticStandard();
    documentChildren.push(...generateProblemSections(workbook21));

    // Polynomial Example 22
    console.log('  Example 22: Quadratic Factoring');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 22: Quadratic Equation - Factoring Method',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² + 5x + 6 = 0', spacing: { after: 200 }, bold: true }));
    const workbook22 = testQuadraticFactoring();
    documentChildren.push(...generateProblemSections(workbook22));

    // Polynomial Example 23
    console.log('  Example 23: Completing the Square');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 23: Completing the Square',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² - 4x + 1 = 0', spacing: { after: 200 }, bold: true }));
    const workbook23 = testCompletingSquarePolynomial();
    documentChildren.push(...generateProblemSections(workbook23));

    // Polynomial Example 24
    console.log('  Example 24: Cubic Equation');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 24: Cubic Equation',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x³ - 6x² + 11x - 6 = 0', spacing: { after: 200 }, bold: true }));
    const workbook24 = testCubicEquation();
    documentChildren.push(...generateProblemSections(workbook24));

    // Polynomial Example 25
    console.log('  Example 25: Rational Root Theorem');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 25: Rational Root Theorem',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: Find rational roots of x³ - 4x² + x + 6 = 0', spacing: { after: 200 }, bold: true }));
    const workbook25 = testRationalRootTheorem();
    documentChildren.push(...generateProblemSections(workbook25));

    // Polynomial Example 26
    console.log('  Example 26: Synthetic Division');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 26: Synthetic Division',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: Divide x³ - 3x² + 2x + 4 by (x - 2)', spacing: { after: 200 }, bold: true }));
    const workbook26 = testSyntheticDivision();
    documentChildren.push(...generateProblemSections(workbook26));

    // Polynomial Example 27
    console.log('  Example 27: Polynomial Inequality');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 27: Polynomial Inequality',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: x² - 5x + 6 > 0', spacing: { after: 200 }, bold: true }));
    const workbook27 = testPolynomialInequality();
    documentChildren.push(...generateProblemSections(workbook27));

    // Polynomial Example 28
    console.log('  Example 28: Polynomial Graphing');
    documentChildren.push(
        new docx.Paragraph({
            text: 'Example 28: Polynomial Graphing Analysis',
            heading: docx.HeadingLevel.HEADING_2,
            spacing: { before: 400, after: 300 },
            pageBreakBefore: true
        })
    );
    documentChildren.push(new docx.Paragraph({ text: 'Problem: Analyze and graph x³ - 2x² - 5x + 6', spacing: { after: 200 }, bold: true }));
    const workbook28 = testPolynomialGraphing();
    documentChildren.push(...generateProblemSections(workbook28));



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
        const filename = 'comprehensive_algebra_workbook.docx';
        const outputPath = path.join(process.cwd(), filename);
        fs.writeFileSync(outputPath, buffer);
        
        console.log('\n' + '='.repeat(80));
        console.log('✓ COMPREHENSIVE DOCUMENT GENERATION COMPLETE');
        console.log('='.repeat(80));
        console.log(`\n✓ Document saved as: ${outputPath}`);
        console.log('\n📊 DOCUMENT STATISTICS:');
        console.log('  • Total Examples: 20');
        console.log('    - Linear Algebra: 4 examples');
        console.log('    - Quadratic Algebra: 9 examples');
        console.log('    - Simultaneous Equations: 7 examples');
        console.log('\n📖 CONTENT BREAKDOWN:');
        console.log('  • Part I: Linear Algebra (Examples 1-4)');
        console.log('  • Part II: Quadratic Algebra (Examples 5-13)');
        console.log('  • Part III: Simultaneous Equations (Examples 14-20)');
        console.log('\n📄 EXPECTED PAGES: 70+ pages');
        console.log('\n✨ Each example includes:');
        console.log('  • Problem statement');
        console.log('  • Step-by-step solution with enhanced explanations');
        console.log('  • Key concepts and lessons');
        console.log('  • Solution verification');
        console.log('  • Pedagogical notes for teaching');
        console.log('  • Alternative solution methods');
        console.log('='.repeat(80) + '\n');
    } catch (error) {
        console.error(`\n❌ Error saving document: ${error.message}`);
        console.error(error.stack);
    }
}

// Run the comprehensive document generation
generateComprehensiveDocument().catch(error => {
    console.error('\n❌ FATAL ERROR:', error.message);
    console.error(error.stack);
    process.exit(1);
});


