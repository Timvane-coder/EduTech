Here's the geometry-related problem generator with diagrams based on the vectors registry:
// ==================== GEOMETRY (VECTORS) RELATED PROBLEM GENERATORS WITH DIAGRAMS ====================

generateRelatedVectorDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Vector Representation',
        problem: 'A vector has components x = 3 and y = 4. Find the magnitude and direction angle of the vector.',
        parameters: { vector: { x: 3, y: 4 }, showComponents: true, showMagnitude: true },
        type: 'vector_diagram',
        subparts: [
            'Magnitude: |v| = √(x² + y²)',
            '|v| = √(3² + 4²) = √(9 + 16) = √25 = 5',
            'Direction angle: θ = arctan(y/x)',
            'θ = arctan(4/3) ≈ 53.13°',
            'Vector lies in first quadrant (both components positive)'
        ],
        helper: 'Magnitude formula: |v| = √(x² + y²); Direction: θ = arctan(y/x)',
        answer: 'Magnitude = 5 units, Direction angle θ ≈ 53.13° from positive x-axis',
        realWorldContext: 'Displacement, velocity, and force vectors in physics and engineering',
        diagramInfo: {
            type: 'vector_diagram',
            registryKey: 'vectorRepresentation',
            renderOptions: {
                title: 'Vector Representation',
                vector: { x: 3, y: 4 },
                showArrow: true,
                showComponents: true,
                showMagnitude: true,
                showDirection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_vector_representation_${Date.now()}.png`;
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
        scenario: 'Vector Addition',
        problem: 'Two vectors A = (3, 2) and B = (1, 4) are given. Find the resultant vector using the triangle and parallelogram methods. State its magnitude and direction.',
        parameters: { vector1: { x: 3, y: 2 }, vector2: { x: 1, y: 4 } },
        type: 'vector_addition',
        subparts: [
            'Triangle method: place tail of B at head of A',
            'Parallelogram method: place both vectors tail-to-tail',
            'Resultant: R = A + B = (3+1, 2+4) = (4, 6)',
            'Magnitude: |R| = √(4² + 6²) = √(16 + 36) = √52 ≈ 7.21',
            'Direction: θ = arctan(6/4) = arctan(1.5) ≈ 56.31°',
            'Both methods yield the same resultant vector'
        ],
        helper: 'Resultant components: Rx = Ax + Bx, Ry = Ay + By; |R| = √(Rx² + Ry²)',
        answer: 'Resultant R = (4, 6), magnitude ≈ 7.21 units, direction ≈ 56.31° from positive x-axis',
        realWorldContext: 'Net force calculations, combined velocity of boat in river current',
        diagramInfo: {
            type: 'vector_addition',
            registryKey: 'vectorAddition',
            renderOptions: {
                title: 'Vector Addition',
                vector1: { x: 3, y: 2 },
                vector2: { x: 1, y: 4 },
                showVectors: true,
                showTriangleMethod: true,
                showParallelogramMethod: true,
                showResultant: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 700 }
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
                const filename = `math_vector_addition_${Date.now()}.png`;
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
        scenario: 'Vector Subtraction',
        problem: 'Given vectors A = (5, 3) and B = (2, 1), find A − B geometrically. Calculate the magnitude and direction of the result.',
        parameters: { vector1: { x: 5, y: 3 }, vector2: { x: 2, y: 1 } },
        type: 'vector_subtraction',
        subparts: [
            'Vector subtraction: A − B = A + (−B)',
            'Negate B: −B = (−2, −1)',
            'Add A + (−B): (5 + (−2), 3 + (−1)) = (3, 2)',
            'Magnitude: |A − B| = √(3² + 2²) = √(9 + 4) = √13 ≈ 3.61',
            'Direction: θ = arctan(2/3) ≈ 33.69°',
            'Geometrically: draw −B then apply triangle method with A'
        ],
        helper: 'A − B = A + (−B); negate B by reversing its direction, then add to A',
        answer: 'A − B = (3, 2), magnitude ≈ 3.61 units, direction ≈ 33.69° from positive x-axis',
        realWorldContext: 'Relative velocity, displacement between two moving objects',
        diagramInfo: {
            type: 'vector_subtraction',
            registryKey: 'vectorSubtraction',
            renderOptions: {
                title: 'Vector Subtraction',
                vector1: { x: 5, y: 3 },
                vector2: { x: 2, y: 1 },
                showVectors: true,
                showNegative: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_vector_subtraction_${Date.now()}.png`;
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
        scenario: 'Scalar Multiplication of Vectors',
        problem: 'A vector v = (2, 3) is multiplied by scalar k = 2. Find the new vector, compare its magnitude with the original, and describe the geometric effect.',
        parameters: { vector: { x: 2, y: 3 }, scalar: 2 },
        type: 'scalar_multiplication',
        subparts: [
            'Scalar multiplication: kv = k(x, y) = (kx, ky)',
            'New vector: 2 × (2, 3) = (4, 6)',
            'Original magnitude: |v| = √(2² + 3²) = √13 ≈ 3.61',
            'New magnitude: |2v| = √(4² + 6²) = √52 ≈ 7.21',
            'Magnitude ratio: |2v| / |v| = 2 (scaled by factor k)',
            'Direction unchanged: both vectors point in the same direction'
        ],
        helper: 'kv scales magnitude by |k|; direction preserved for k > 0, reversed for k < 0',
        answer: 'New vector = (4, 6), magnitude doubles to ≈ 7.21 units, direction unchanged',
        realWorldContext: 'Scaling forces, converting between unit systems in physics',
        diagramInfo: {
            type: 'scalar_multiplication',
            registryKey: 'scalarMultiplication',
            renderOptions: {
                title: 'Scalar Multiplication',
                vector: { x: 2, y: 3 },
                scalar: 2,
                showOriginal: true,
                showScaled: true,
                showMagnitudeChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_scalar_multiplication_${Date.now()}.png`;
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
        scenario: 'Vector Components',
        problem: 'A vector has magnitude 5 units at an angle of 37° above the positive x-axis. Resolve it into its horizontal (i) and vertical (j) components.',
        parameters: { vector: { magnitude: 5, angle: 37 } },
        type: 'vector_components',
        subparts: [
            'Horizontal component: vx = |v| cos(θ)',
            'vx = 5 × cos(37°) = 5 × 0.7986 ≈ 3.99 ≈ 4.0',
            'Vertical component: vy = |v| sin(θ)',
            'vy = 5 × sin(37°) = 5 × 0.6018 ≈ 3.01 ≈ 3.0',
            'Vector in component form: v = 4.0i + 3.0j',
            'Verification: |v| = √(4² + 3²) = √25 = 5 ✓'
        ],
        helper: 'vx = |v|cos(θ), vy = |v|sin(θ); vector form: v = vx·i + vy·j',
        answer: 'v ≈ 4.0i + 3.0j (horizontal component ≈ 4.0, vertical component ≈ 3.0)',
        realWorldContext: 'Resolving forces on inclined planes, projectile motion components',
        diagramInfo: {
            type: 'vector_components',
            registryKey: 'vectorComponents',
            renderOptions: {
                title: 'Vector Components',
                vector: { magnitude: 5, angle: 37 },
                showVector: true,
                showXComponent: true,
                showYComponent: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_vector_components_${Date.now()}.png`;
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
        scenario: 'Dot Product (Scalar Product)',
        problem: 'Find the dot product of vectors A = (3, 4) and B = (2, 1). Then find the angle between the two vectors.',
        parameters: { vector1: { x: 3, y: 4 }, vector2: { x: 2, y: 1 } },
        type: 'dot_product',
        subparts: [
            'Dot product formula: A · B = Ax·Bx + Ay·By',
            'A · B = (3)(2) + (4)(1) = 6 + 4 = 10',
            'Magnitude of A: |A| = √(3² + 4²) = √25 = 5',
            'Magnitude of B: |B| = √(2² + 1²) = √5 ≈ 2.236',
            'Angle formula: cos(θ) = (A · B) / (|A| × |B|)',
            'cos(θ) = 10 / (5 × 2.236) = 10 / 11.18 ≈ 0.894',
            'θ = arccos(0.894) ≈ 26.57°'
        ],
        helper: 'A · B = Ax·Bx + Ay·By = |A||B|cos(θ); angle θ = arccos[(A·B)/(|A||B|)]',
        answer: 'Dot product = 10; angle between vectors ≈ 26.57°',
        realWorldContext: 'Work done by a force (W = F · d), testing perpendicularity of vectors',
        diagramInfo: {
            type: 'dot_product',
            registryKey: 'dotProduct',
            renderOptions: {
                title: 'Dot Product',
                vector1: { x: 3, y: 4 },
                vector2: { x: 2, y: 1 },
                showVectors: true,
                showAngle: true,
                showProjection: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_dot_product_${Date.now()}.png`;
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
        scenario: 'Cross Product (Vector Product)',
        problem: 'Find the cross product of vectors A = (1, 0, 0) and B = (0, 1, 0). State the magnitude, direction, and verify using the right-hand rule.',
        parameters: { vector1: { x: 1, y: 0, z: 0 }, vector2: { x: 0, y: 1, z: 0 } },
        type: 'cross_product',
        subparts: [
            'Cross product: A × B = (Ay·Bz − Az·By, Az·Bx − Ax·Bz, Ax·By − Ay·Bx)',
            'i component: (0)(0) − (0)(1) = 0',
            'j component: (0)(0) − (1)(0) = 0',
            'k component: (1)(1) − (0)(0) = 1',
            'A × B = (0, 0, 1) = k̂',
            'Magnitude: |A × B| = 1',
            'Right-hand rule: curl fingers from A toward B → thumb points in +z direction ✓'
        ],
        helper: 'A × B = |A||B|sin(θ)n̂; result is perpendicular to both A and B; use right-hand rule for direction',
        answer: 'A × B = (0, 0, 1) = k̂; magnitude = 1; direction is positive z-axis',
        realWorldContext: 'Torque calculation (τ = r × F), magnetic force on moving charges (F = qv × B)',
        diagramInfo: {
            type: 'cross_product',
            registryKey: 'crossProduct',
            renderOptions: {
                title: 'Cross Product',
                vector1: { x: 1, y: 0, z: 0 },
                vector2: { x: 0, y: 1, z: 0 },
                showVectors: true,
                showResultant: true,
                showRightHandRule: true,
                showFormula: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
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
                const filename = `math_cross_product_${Date.now()}.png`;
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
        scenario: 'Vector Equation of a Line',
        problem: 'A line passes through point P(1, 2) and has direction vector d = (3, 4). Write the vector equation of the line and find a point on it when λ = 2.',
        parameters: { point: { x: 1, y: 2 }, direction: { x: 3, y: 4 } },
        type: 'vector_line_equation',
        subparts: [
            'Vector equation form: r = a + λb',
            'Position vector of P: a = i + 2j = (1, 2)',
            'Direction vector: b = 3i + 4j = (3, 4)',
            'Equation: r = (1, 2) + λ(3, 4)',
            'When λ = 2: r = (1 + 6, 2 + 8) = (7, 10)',
            'Point on line at λ = 2 is Q(7, 10)',
            'Any scalar λ gives a different point on the line'
        ],
        helper: 'r = a + λb where a is position vector of known point, b is direction vector, λ ∈ ℝ',
        answer: 'Vector equation: r = (1, 2) + λ(3, 4); point at λ = 2 is Q(7, 10)',
        realWorldContext: 'Parametric paths in computer graphics, navigation and trajectory modelling',
        diagramInfo: {
            type: 'vector_line_equation',
            registryKey: 'vectorEquationLine',
            renderOptions: {
                title: 'Vector Equation of Line',
                point: { x: 1, y: 2 },
                direction: { x: 3, y: 4 },
                showLine: true,
                showPoint: true,
                showDirection: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_vector_equation_line_${Date.now()}.png`;
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
        scenario: 'Position Vectors',
        problem: 'Points A(2, 3), B(5, 7), and C(−1, 4) are given. Write the position vector of each point from the origin. Then find the vector AB.',
        parameters: { points: [[2, 3], [5, 7], [-1, 4]] },
        type: 'position_vectors',
        subparts: [
            'Position vector of A: OA = 2i + 3j = (2, 3)',
            'Position vector of B: OB = 5i + 7j = (5, 7)',
            'Position vector of C: OC = −i + 4j = (−1, 4)',
            'Vector AB = OB − OA',
            'AB = (5 − 2, 7 − 3) = (3, 4)',
            'Magnitude |AB| = √(3² + 4²) = √25 = 5',
            'Each position vector goes from origin O to the respective point'
        ],
        helper: 'Position vector of point P(x, y): OP = xi + yj; vector AB = OB − OA',
        answer: 'OA = (2,3), OB = (5,7), OC = (−1,4); vector AB = (3, 4) with magnitude 5',
        realWorldContext: 'Coordinate geometry, locating objects in 2D space, GPS positioning',
        diagramInfo: {
            type: 'position_vectors',
            registryKey: 'positionVectors',
            renderOptions: {
                title: 'Position Vectors',
                points: [[2, 3], [5, 7], [-1, 4]],
                showOrigin: true,
                showPoints: true,
                showVectors: true,
                showNotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
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
                const filename = `math_position_vectors_${Date.now()}.png`;
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


