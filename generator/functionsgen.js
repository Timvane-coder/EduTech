Here's the geometry-related problem generator with diagrams:
// ==================== FUNCTIONS WITH DIAGRAMS ====================

generateRelatedFunctionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Function Machine Input-Output',
        problem: 'A function machine applies the rule f(x) = 2x + 3. Find the outputs for inputs x = 1, 2, 3, 4.',
        parameters: {
            function: 'f(x) = 2x + 3',
            inputs: [1, 2, 3, 4]
        },
        type: 'functions',
        subparts: [
            'Apply rule to each input: f(x) = 2x + 3',
            'f(1) = 2(1) + 3 = 5',
            'f(2) = 2(2) + 3 = 7',
            'f(3) = 2(3) + 3 = 9',
            'f(4) = 2(4) + 3 = 11',
            'Each input maps to exactly one output'
        ],
        helper: 'Substitute each input value into the rule f(x) = 2x + 3',
        answer: 'Outputs: f(1) = 5, f(2) = 7, f(3) = 9, f(4) = 11',
        realWorldContext: 'Function machines model real-world input-output processes like pricing formulas',
        diagramInfo: {
            type: 'function_machine',
            registryKey: 'functionMachine',
            renderOptions: {
                title: 'Function Machine',
                showMachine: true,
                showInputs: true,
                showOutputs: true,
                showRule: true,
                width: 800,
                height: 500
            },
            canvasSize: { width: 800, height: 500 }
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
                const filename = `math_function_machine_${Date.now()}.png`;
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
        scenario: 'Mapping Diagram Domain to Range',
        problem: 'A function maps each element of domain {1, 2, 3, 4} using the rule x → 2x. Draw the mapping diagram and identify the range.',
        parameters: {
            domain: [1, 2, 3, 4],
            range: [2, 4, 6, 8],
            function: 'x → 2x'
        },
        type: 'functions',
        subparts: [
            'Domain: {1, 2, 3, 4}',
            'Apply rule x → 2x to each element',
            '1 → 2, 2 → 4, 3 → 6, 4 → 8',
            'Range: {2, 4, 6, 8}',
            'Each domain element maps to exactly one range element',
            'This is a one-to-one function'
        ],
        helper: 'Apply the rule to every element in the domain; collect outputs to form the range',
        answer: 'Range = {2, 4, 6, 8}; function is one-to-one',
        realWorldContext: 'Mapping diagrams are used in databases to show relationships between data sets',
        diagramInfo: {
            type: 'mapping_diagram',
            registryKey: 'mappingDiagram',
            renderOptions: {
                title: 'Mapping Diagram',
                showDomain: true,
                showRange: true,
                showArrows: true,
                showOneToOne: true,
                width: 700,
                height: 600
            },
            canvasSize: { width: 700, height: 600 }
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
                const filename = `math_mapping_diagram_${Date.now()}.png`;
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
        scenario: 'Domain and Range of Square Root Function',
        problem: 'For f(x) = √x, state the domain and range and explain any restrictions on input values.',
        parameters: {
            function: 'f(x) = √x'
        },
        type: 'functions',
        subparts: [
            'Square root requires non-negative input',
            'Domain restriction: x ≥ 0, so domain = [0, ∞)',
            'Output of √x is always non-negative',
            'Range = [0, ∞)',
            'x = 0 gives f(0) = 0 (minimum point)',
            'No upper bound on either domain or range'
        ],
        helper: 'Ask: what values of x make the function undefined? Those are excluded from the domain',
        answer: 'Domain = [0, ∞), Range = [0, ∞)',
        realWorldContext: 'Square root functions model physical quantities like speed from kinetic energy',
        diagramInfo: {
            type: 'domain_range_graph',
            registryKey: 'domainRangeGraph',
            renderOptions: {
                title: 'Domain and Range',
                showGraph: true,
                highlightDomain: true,
                highlightRange: true,
                showRestrictions: true,
                width: 800,
                height: 600
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
                const filename = `math_domain_range_${Date.now()}.png`;
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
        scenario: 'Comparing Types of Functions',
        problem: 'Identify the key characteristics of linear, quadratic, cubic, and reciprocal functions. Sketch each and describe their general shape.',
        parameters: {
            functions: ['linear', 'quadratic', 'cubic', 'reciprocal']
        },
        type: 'functions',
        subparts: [
            'Linear f(x) = mx + c: straight line, constant gradient',
            'Quadratic f(x) = x²: parabola, one turning point, axis of symmetry',
            'Cubic f(x) = x³: S-shaped curve, point of inflection at origin',
            'Reciprocal f(x) = 1/x: two branches, asymptotes at x = 0 and y = 0',
            'Linear and cubic have no maximum/minimum; quadratic has one; reciprocal has none',
            'Only reciprocal is undefined at x = 0'
        ],
        helper: 'Focus on: shape, symmetry, turning points, asymptotes, and intercepts for each type',
        answer: 'Linear: straight line; Quadratic: U-shaped parabola; Cubic: S-curve; Reciprocal: hyperbola with asymptotes at x = 0, y = 0',
        realWorldContext: 'Different function types model different real-world phenomena: linear for constant rates, quadratic for projectile motion',
        diagramInfo: {
            type: 'function_types',
            registryKey: 'functionTypes',
            renderOptions: {
                title: 'Types of Functions',
                showGraphs: true,
                showEquations: true,
                showCharacteristics: true,
                width: 1000,
                height: 700
            },
            canvasSize: { width: 1000, height: 700 }
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
                const filename = `math_function_types_${Date.now()}.png`;
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
        scenario: 'Function Transformations on f(x) = x²',
        problem: 'Starting from f(x) = x², describe and sketch the effect of: (a) f(x) + 3, (b) f(x - 2), (c) -f(x), (d) 2f(x).',
        parameters: {
            baseFunction: 'f(x) = x²',
            transformations: ['translate', 'reflect', 'stretch']
        },
        type: 'functions',
        subparts: [
            'f(x) + 3 = x² + 3: translate 3 units up, vertex moves to (0, 3)',
            'f(x - 2) = (x-2)²: translate 2 units right, vertex moves to (2, 0)',
            '-f(x) = -x²: reflect in x-axis, parabola opens downward',
            '2f(x) = 2x²: vertical stretch by factor 2, narrower parabola',
            'Inside the bracket → horizontal transformation (opposite direction)',
            'Outside the bracket → vertical transformation'
        ],
        helper: 'Remember: f(x) + a shifts up, f(x + a) shifts left, -f(x) reflects in x-axis, af(x) stretches vertically',
        answer: '(a) Shift up 3; (b) Shift right 2; (c) Reflect in x-axis; (d) Vertical stretch factor 2',
        realWorldContext: 'Transformations are used in computer graphics, animation, and signal processing',
        diagramInfo: {
            type: 'function_transformations',
            registryKey: 'functionTransformations',
            renderOptions: {
                title: 'Function Transformations',
                showOriginal: true,
                showTransformed: true,
                showVectors: true,
                showEquations: true,
                width: 900,
                height: 600
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
                const filename = `math_function_transformations_${Date.now()}.png`;
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
        scenario: 'Inverse Function of a Linear',
        problem: 'Find the inverse of f(x) = 2x + 1, verify that f(f⁻¹(x)) = x, and describe the geometric relationship between f and f⁻¹.',
        parameters: {
            function: 'f(x) = 2x + 1'
        },
        type: 'functions',
        subparts: [
            'Let y = 2x + 1',
            'Swap x and y: x = 2y + 1',
            'Solve for y: y = (x - 1)/2',
            'So f⁻¹(x) = (x - 1)/2',
            'Verify: f(f⁻¹(x)) = 2 × (x-1)/2 + 1 = (x - 1) + 1 = x ✓',
            'Geometrically: f and f⁻¹ are reflections of each other in the line y = x'
        ],
        helper: 'To find inverse: replace f(x) with y, swap x and y, then rearrange to make y the subject',
        answer: 'f⁻¹(x) = (x - 1)/2; graphs are reflections in the line y = x',
        realWorldContext: 'Inverse functions are used in cryptography and to reverse physical processes like temperature conversion',
        diagramInfo: {
            type: 'inverse_function',
            registryKey: 'inverseFunctionGraph',
            renderOptions: {
                title: 'Function and Inverse',
                showFunction: true,
                showInverse: true,
                showYEqualsX: true,
                showReflection: true,
                width: 800,
                height: 800
            },
            canvasSize: { width: 800, height: 800 }
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
                const filename = `math_inverse_function_${Date.now()}.png`;
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
        scenario: 'Piecewise Function Evaluation',
        problem: 'A piecewise function is defined as f(x) = -x for x < 0 and f(x) = x² for x ≥ 0. Evaluate f(-3), f(0), and f(2), and sketch the graph.',
        parameters: {
            pieces: [
                { domain: 'x < 0', function: '-x' },
                { domain: 'x ≥ 0', function: 'x²' }
            ]
        },
        type: 'functions',
        subparts: [
            'For x < 0: use f(x) = -x',
            'f(-3) = -(-3) = 3',
            'For x ≥ 0: use f(x) = x²',
            'f(0) = 0² = 0',
            'f(2) = 2² = 4',
            'At x = 0: left branch approaches 0, right branch starts at 0 — continuous',
            'Graph: straight line with positive gradient for x < 0; parabola for x ≥ 0'
        ],
        helper: 'Always check which piece of the domain the input belongs to before substituting',
        answer: 'f(-3) = 3, f(0) = 0, f(2) = 4; function is continuous at x = 0',
        realWorldContext: 'Piecewise functions model tax brackets, shipping costs, and other tiered pricing systems',
        diagramInfo: {
            type: 'piecewise_function',
            registryKey: 'piecewiseFunctionGraph',
            renderOptions: {
                title: 'Piecewise Function',
                showPieces: true,
                showBreaks: true,
                showDomains: true,
                width: 800,
                height: 600
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
                const filename = `math_piecewise_function_${Date.now()}.png`;
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
        scenario: 'Composite Function Evaluation',
        problem: 'Given f(x) = 2x and g(x) = x + 3, find fg(x), gf(x), fg(4), and gf(4). Show that fg(x) ≠ gf(x) in general.',
        parameters: {
            f: 'f(x) = 2x',
            g: 'g(x) = x + 3'
        },
        type: 'functions',
        subparts: [
            'fg(x) means f applied after g: fg(x) = f(g(x))',
            'fg(x) = f(x + 3) = 2(x + 3) = 2x + 6',
            'gf(x) means g applied after f: gf(x) = g(f(x))',
            'gf(x) = g(2x) = 2x + 3',
            'fg(4) = 2(4) + 6 = 14',
            'gf(4) = 2(4) + 3 = 11',
            'fg(x) = 2x + 6 ≠ 2x + 3 = gf(x), so composition is not commutative'
        ],
        helper: 'For fg(x): apply g first, then apply f to the result; the order matters',
        answer: 'fg(x) = 2x + 6, gf(x) = 2x + 3, fg(4) = 14, gf(4) = 11; fg ≠ gf',
        realWorldContext: 'Composite functions model sequential processes like applying discounts then tax, or encoding and decoding data',
        diagramInfo: {
            type: 'composite_function',
            registryKey: 'compositeFunction',
            renderOptions: {
                title: 'Composite Functions',
                showFunctionMachines: true,
                showComposition: true,
                showSteps: true,
                width: 900,
                height: 500
            },
            canvasSize: { width: 900, height: 500 }
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
                const filename = `math_composite_function_${Date.now()}.png`;
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

