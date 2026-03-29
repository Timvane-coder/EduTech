Looking at the registry keys and the wave generator pattern, here's the geometry algebra generator:
generateRelatedAlgebraicDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Solving Equations - Balance Method',
        problem: 'Solve the equation 2x + 3 = 11 using the balance method.',
        parameters: { equation: '2x + 3 = 11', variable: 'x' },
        type: 'algebraic_balance',
        subparts: [
            'Visualise the equation as a balance scale',
            'Subtract 3 from both sides: 2x + 3 - 3 = 11 - 3',
            'Simplify: 2x = 8',
            'Divide both sides by 2: x = 4',
            'Check: 2(4) + 3 = 11 ✓'
        ],
        helper: 'Whatever you do to one side, do to the other to keep balance',
        answer: 'x = 4',
        realWorldContext: 'Balancing budgets, fair sharing problems',
        diagramInfo: {
            type: 'balance_model',
            registryKey: 'algebraicBalanceModel',
            renderOptions: {
                title: 'Solving Equations - Balance Method',
                showBalance: true,
                showSteps: true,
                showInverse: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_algebraic_balance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Linear Graph',
        problem: 'Sketch the graph of y = 2x + 3. Identify the gradient and y-intercept.',
        parameters: { slope: 2, intercept: 3 },
        type: 'linear_graph',
        subparts: [
            'Equation is in the form y = mx + c',
            'Gradient (slope): m = 2',
            'y-intercept: c = 3, so the graph crosses the y-axis at (0, 3)',
            'Plot a second point: when x = 2, y = 2(2) + 3 = 7, giving (2, 7)',
            'Draw a straight line through both points'
        ],
        helper: 'y = mx + c: m is the gradient, c is the y-intercept',
        answer: 'Gradient = 2, y-intercept = 3; line passes through (0, 3) and (2, 7)',
        realWorldContext: 'Cost functions, speed-distance relationships',
        diagramInfo: {
            type: 'linear_graph',
            registryKey: 'linearGraphPlot',
            renderOptions: {
                title: 'Linear Graph: y = 2x + 3',
                showGrid: true,
                showAxes: true,
                showSlope: true,
                showIntercept: true,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_linear_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadratic Parabola',
        problem: 'For the quadratic y = x² - 4x + 3, find the vertex, roots, and axis of symmetry. Sketch the parabola.',
        parameters: { a: 1, b: -4, c: 3 },
        type: 'quadratic_graph',
        subparts: [
            'Factorise: y = (x - 1)(x - 3)',
            'Roots (x-intercepts): x = 1 and x = 3',
            'Axis of symmetry: x = -b/2a = 4/2 = 2',
            'Vertex: x = 2, y = (2)² - 4(2) + 3 = 4 - 8 + 3 = -1 → (2, -1)',
            'y-intercept: set x = 0 → y = 3, giving (0, 3)',
            'Since a = 1 > 0, parabola opens upward'
        ],
        helper: 'Axis of symmetry: x = -b/2a; vertex y found by substituting back',
        answer: 'Roots: x = 1 and x = 3; Vertex: (2, -1); Axis of symmetry: x = 2',
        realWorldContext: 'Projectile motion, profit/loss optimisation',
        diagramInfo: {
            type: 'quadratic_graph',
            registryKey: 'quadraticParabola',
            renderOptions: {
                title: 'Quadratic Graph: y = x² - 4x + 3',
                showGrid: true,
                showVertex: true,
                showRoots: true,
                showAxisOfSymmetry: true,
                showYIntercept: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_quadratic_parabola_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadratic Formula',
        problem: 'Use the quadratic formula to solve x² - 5x + 6 = 0. Identify the discriminant and nature of roots.',
        parameters: { a: 1, b: -5, c: 6 },
        type: 'quadratic_formula',
        subparts: [
            'Quadratic formula: x = (-b ± √(b² - 4ac)) / 2a',
            'Discriminant: Δ = b² - 4ac = 25 - 24 = 1',
            'Since Δ > 0, there are two distinct real roots',
            'x = (5 ± √1) / 2 = (5 ± 1) / 2',
            'x₁ = (5 + 1) / 2 = 3',
            'x₂ = (5 - 1) / 2 = 2'
        ],
        helper: 'Discriminant: Δ > 0 → two real roots; Δ = 0 → one repeated root; Δ < 0 → no real roots',
        answer: 'x = 3 or x = 2',
        realWorldContext: 'Engineering design, area calculations',
        diagramInfo: {
            type: 'quadratic_formula',
            registryKey: 'quadraticFormulaVisual',
            renderOptions: {
                title: 'Quadratic Formula',
                showFormula: true,
                showDiscriminant: true,
                showRoots: true,
                showNatureOfRoots: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_quadratic_formula_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Completing the Square',
        problem: 'Complete the square for x² + 6x + 5 = 0 and solve for x. Show geometric interpretation.',
        parameters: { a: 1, b: 6, c: 5 },
        type: 'completing_square',
        subparts: [
            'Start: x² + 6x + 5 = 0',
            'Move constant: x² + 6x = -5',
            'Add (b/2)² = (3)² = 9 to both sides: x² + 6x + 9 = 4',
            'Write as perfect square: (x + 3)² = 4',
            'Take square root: x + 3 = ±2',
            'Solve: x = -3 + 2 = -1 or x = -3 - 2 = -5'
        ],
        helper: 'Add (b/2)² to both sides to create a perfect square trinomial',
        answer: 'x = -1 or x = -5',
        realWorldContext: 'Finding maximum/minimum values, vertex form of parabola',
        diagramInfo: {
            type: 'completing_square',
            registryKey: 'completingSquareVisual',
            renderOptions: {
                title: 'Completing the Square',
                showSquare: true,
                showSteps: true,
                showGeometric: true
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_completing_square_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simultaneous Equations - Graphical Solution',
        problem: 'Solve the simultaneous equations y = 2x + 1 and y = -x + 7 graphically. Find the point of intersection.',
        parameters: { equation1: { m: 2, c: 1 }, equation2: { m: -1, c: 7 } },
        type: 'simultaneous_graph',
        subparts: [
            'Plot y = 2x + 1: y-intercept (0, 1), gradient 2',
            'Plot y = -x + 7: y-intercept (0, 7), gradient -1',
            'Set equal to find intersection: 2x + 1 = -x + 7',
            '3x = 6 → x = 2',
            'Substitute: y = 2(2) + 1 = 5',
            'Intersection point: (2, 5)'
        ],
        helper: 'The intersection of two lines is the solution to both equations simultaneously',
        answer: 'x = 2, y = 5',
        realWorldContext: 'Break-even analysis, supply and demand equilibrium',
        diagramInfo: {
            type: 'simultaneous_graph',
            registryKey: 'simultaneousEquationsGraph',
            renderOptions: {
                title: 'Simultaneous Equations - Graphical Solution',
                showBothLines: true,
                showIntersection: true,
                showSolution: true,
                showGrid: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_simultaneous_equations_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Polynomial Long Division',
        problem: 'Divide x³ + 2x² - 5x + 6 by (x - 2) using long division.',
        parameters: { dividend: 'x³ + 2x² - 5x + 6', divisor: 'x - 2' },
        type: 'polynomial_division',
        subparts: [
            'Divide leading term: x³ ÷ x = x²',
            'Multiply: x²(x - 2) = x³ - 2x²',
            'Subtract: (x³ + 2x² - 5x + 6) - (x³ - 2x²) = 4x² - 5x + 6',
            'Divide: 4x² ÷ x = 4x',
            'Multiply: 4x(x - 2) = 4x² - 8x',
            'Subtract: (4x² - 5x + 6) - (4x² - 8x) = 3x + 6',
            'Divide: 3x ÷ x = 3',
            'Multiply: 3(x - 2) = 3x - 6',
            'Subtract: (3x + 6) - (3x - 6) = 12',
            'Result: x² + 4x + 3 remainder 12'
        ],
        helper: 'Repeat: divide → multiply → subtract → bring down, until degree of remainder < degree of divisor',
        answer: 'x³ + 2x² - 5x + 6 = (x - 2)(x² + 4x + 3) + 12',
        realWorldContext: 'Factoring higher-degree polynomials, remainder theorem applications',
        diagramInfo: {
            type: 'polynomial_division',
            registryKey: 'polynomialDivisionLayout',
            renderOptions: {
                title: 'Polynomial Division',
                showProcess: true,
                showRemainder: true,
                showQuotient: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_polynomial_division_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Exponential Graph',
        problem: 'Sketch y = 2ˣ. Identify the asymptote, y-intercept, and describe the growth behaviour.',
        parameters: { base: 2, coefficient: 1 },
        type: 'exponential_graph',
        subparts: [
            'y-intercept: when x = 0, y = 2⁰ = 1, giving (0, 1)',
            'As x → +∞, y → +∞ (exponential growth)',
            'As x → -∞, y → 0 (approaches but never reaches x-axis)',
            'Horizontal asymptote: y = 0',
            'The function is always positive: y > 0 for all x',
            'Key points: (-1, 0.5), (0, 1), (1, 2), (2, 4), (3, 8)'
        ],
        helper: 'For y = aˣ with a > 1: always increasing, y-intercept at (0,1), asymptote y = 0',
        answer: 'y-intercept: (0, 1); asymptote: y = 0; domain: all real x; range: y > 0',
        realWorldContext: 'Population growth, compound interest, radioactive decay',
        diagramInfo: {
            type: 'exponential_graph',
            registryKey: 'exponentialGraph',
            renderOptions: {
                title: 'Exponential Graph: y = 2ˣ',
                showGrid: true,
                showAsymptote: true,
                showGrowth: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_exponential_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Logarithmic Graph',
        problem: 'Sketch y = log₁₀(x). State the domain, range, asymptote, and x-intercept.',
        parameters: { base: 10 },
        type: 'logarithmic_graph',
        subparts: [
            'x-intercept: when y = 0, log₁₀(x) = 0 → x = 1, giving (1, 0)',
            'Domain: x > 0 (logarithm undefined for x ≤ 0)',
            'Range: all real numbers',
            'Vertical asymptote: x = 0 (y-axis)',
            'Key points: (0.1, -1), (1, 0), (10, 1), (100, 2)',
            'The function is always increasing'
        ],
        helper: 'log is the inverse of exponential; log₁₀(10ˣ) = x',
        answer: 'Domain: x > 0; Range: all reals; x-intercept: (1, 0); vertical asymptote: x = 0',
        realWorldContext: 'pH scale, Richter scale, decibel levels',
        diagramInfo: {
            type: 'logarithmic_graph',
            registryKey: 'logarithmicGraph',
            renderOptions: {
                title: 'Logarithmic Graph: y = log₁₀(x)',
                showGrid: true,
                showAsymptote: true,
                showDomain: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_logarithmic_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inequality on Number Line',
        problem: 'Solve 3x - 4 > 5 and represent the solution on a number line.',
        parameters: { inequality: 'x > 3' },
        type: 'inequality_line',
        subparts: [
            'Start: 3x - 4 > 5',
            'Add 4 to both sides: 3x > 9',
            'Divide both sides by 3: x > 3',
            'Open circle at x = 3 (not included, strict inequality)',
            'Shade to the right of 3 (all values greater than 3)'
        ],
        helper: 'Strict inequalities (> or <) use open circles; ≥ or ≤ use closed circles',
        answer: 'x > 3; solution set: (3, +∞)',
        realWorldContext: 'Minimum requirements, threshold conditions',
        diagramInfo: {
            type: 'inequality_line',
            registryKey: 'inequalityNumberLine',
            renderOptions: {
                title: 'Inequality Solution',
                showLine: true,
                showShading: true,
                showBoundary: true,
                showNotation: true
            },
            canvasSize: { width: 900, height: 200 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `math_inequality_number_line_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;

}


