Here's the geometry-related problem generator. I'll implement all the matrix registry diagrams (and you can extend this pattern for other geometry categories):
// ==================== GEOMETRY WITH DIAGRAMS GENERATORS ====================

generateRelatedMatrixDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // ===== MATRIX STRUCTURE =====
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Matrix Structure and Notation',
        problem: 'Given matrix A = [[1, 2, 3], [4, 5, 6]], identify its order, locate element a₂₃, and state the number of rows, columns, and total elements.',
        parameters: {
            matrix: [[1, 2, 3], [4, 5, 6]],
            targetElement: { row: 2, col: 3 }
        },
        type: 'matrix_structure',
        subparts: [
            'Count rows: matrix has 2 rows',
            'Count columns: matrix has 3 columns',
            'Order of matrix: 2 × 3',
            'Element aᵢⱼ means row i, column j',
            'Element a₂₃: row 2, column 3 = 6',
            'Total elements: 2 × 3 = 6'
        ],
        helper: 'Matrix order = rows × columns; aᵢⱼ denotes element at row i, column j',
        answer: 'Order: 2 × 3; a₂₃ = 6; rows = 2, columns = 3, total elements = 6',
        realWorldContext: 'Data tables, spreadsheets, computer graphics',
        diagramInfo: {
            type: 'matrix_structure',
            registryKey: 'matrixStructure',
            renderOptions: {
                title: 'Matrix Structure',
                showMatrix: true,
                showRows: true,
                showColumns: true,
                showElements: true,
                showOrder: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
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
                const filename = `mathematics_matrix_structure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== MATRIX ADDITION =====
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Matrix Addition',
        problem: 'Add matrices A = [[1, 2], [3, 4]] and B = [[5, 6], [7, 8]]. State the condition required for matrix addition and give the resulting matrix.',
        parameters: {
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]]
        },
        type: 'matrix_addition',
        subparts: [
            'Condition: both matrices must have the same order',
            'A and B are both 2 × 2 — addition is valid',
            'Add element by element: (A + B)ᵢⱼ = Aᵢⱼ + Bᵢⱼ',
            'Row 1: [1+5, 2+6] = [6, 8]',
            'Row 2: [3+7, 4+8] = [10, 12]',
            'Result: [[6, 8], [10, 12]]'
        ],
        helper: 'Matrix addition is only defined when both matrices share the same order',
        answer: 'A + B = [[6, 8], [10, 12]]',
        realWorldContext: 'Combining datasets, summing transformation matrices',
        diagramInfo: {
            type: 'matrix_addition',
            registryKey: 'matrixAddition',
            renderOptions: {
                title: 'Matrix Addition',
                showMatrices: true,
                showProcess: true,
                showResult: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
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
                const filename = `mathematics_matrix_addition_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== MATRIX SCALAR MULTIPLICATION =====
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Scalar Multiplication of a Matrix',
        problem: 'Given matrix A = [[2, 3], [4, 5]] and scalar k = 3, find 3A and describe how scalar multiplication affects each element.',
        parameters: {
            matrix: [[2, 3], [4, 5]],
            scalar: 3
        },
        type: 'matrix_scalar',
        subparts: [
            'Scalar multiplication: every element is multiplied by k',
            '(kA)ᵢⱼ = k × Aᵢⱼ',
            'Row 1: [3×2, 3×3] = [6, 9]',
            'Row 2: [3×4, 3×5] = [12, 15]',
            'Result: 3A = [[6, 9], [12, 15]]'
        ],
        helper: 'Multiply every element of the matrix by the scalar k',
        answer: '3A = [[6, 9], [12, 15]]',
        realWorldContext: 'Scaling transformations, proportional adjustments in data',
        diagramInfo: {
            type: 'matrix_scalar',
            registryKey: 'matrixScalarMultiplication',
            renderOptions: {
                title: 'Scalar Multiplication',
                showMatrix: true,
                showProcess: true,
                showResult: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
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
                const filename = `mathematics_matrix_scalar_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== MATRIX MULTIPLICATION =====
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Matrix Multiplication',
        problem: 'Multiply A = [[1, 2], [3, 4]] by B = [[5, 6], [7, 8]]. State the order of the result and calculate each element using row-by-column dot products.',
        parameters: {
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]]
        },
        type: 'matrix_multiplication',
        subparts: [
            'Condition: columns of A must equal rows of B',
            'A is 2×2 and B is 2×2 — multiplication is valid',
            'Result will be 2×2',
            'C₁₁ = (1×5) + (2×7) = 5 + 14 = 19',
            'C₁₂ = (1×6) + (2×8) = 6 + 16 = 22',
            'C₂₁ = (3×5) + (4×7) = 15 + 28 = 43',
            'C₂₂ = (3×6) + (4×8) = 18 + 32 = 50'
        ],
        helper: 'Cᵢⱼ = sum of (row i of A) × (column j of B); AB ≠ BA in general',
        answer: 'AB = [[19, 22], [43, 50]]',
        realWorldContext: 'Computer graphics transformations, solving systems of equations',
        diagramInfo: {
            type: 'matrix_multiplication',
            registryKey: 'matrixMultiplication',
            renderOptions: {
                title: 'Matrix Multiplication',
                showMatrices: true,
                showProcess: true,
                showRowColumn: true,
                showResult: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 600 }
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
                const filename = `mathematics_matrix_multiplication_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== 2×2 DETERMINANT =====
    relatedProblems.push({
        difficulty: 'medium',
        scenario: '2×2 Determinant Calculation',
        problem: 'Find the determinant of matrix A = [[3, 8], [4, 6]] using the diagonal rule and determine whether A is invertible.',
        parameters: {
            matrix: [[3, 8], [4, 6]],
            size: 2
        },
        type: 'determinant',
        subparts: [
            'Formula for 2×2 determinant: det(A) = ad - bc',
            'For A = [[a, b], [c, d]]: a=3, b=8, c=4, d=6',
            'Primary diagonal product: a × d = 3 × 6 = 18',
            'Secondary diagonal product: b × c = 8 × 4 = 32',
            'det(A) = 18 - 32 = -14',
            'Since det(A) ≠ 0, matrix A is invertible'
        ],
        helper: 'det([[a,b],[c,d]]) = ad - bc; det ≠ 0 means matrix is invertible',
        answer: 'det(A) = -14; A is invertible',
        realWorldContext: 'Solving 2-variable simultaneous equations using Cramer\'s rule',
        diagramInfo: {
            type: 'determinant',
            registryKey: 'determinant2x2',
            renderOptions: {
                title: '2×2 Determinant',
                showMatrix: true,
                showFormula: true,
                showCalculation: true,
                showDiagonals: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 500 }
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
                const filename = `mathematics_determinant_2x2_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== 3×3 DETERMINANT =====
    relatedProblems.push({
        difficulty: 'hard',
        scenario: '3×3 Determinant via Cofactor Expansion',
        problem: 'Calculate the determinant of A = [[1, 2, 3], [4, 5, 6], [7, 8, 9]] using cofactor expansion along the first row.',
        parameters: {
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            size: 3
        },
        type: 'determinant',
        subparts: [
            'Expand along row 1: det = a₁₁C₁₁ + a₁₂C₁₂ + a₁₃C₁₃',
            'Minor M₁₁ = det([[5,6],[8,9]]) = 45 - 48 = -3; C₁₁ = +(-3) = -3',
            'Minor M₁₂ = det([[4,6],[7,9]]) = 36 - 42 = -6; C₁₂ = -(-6) = +6',
            'Minor M₁₃ = det([[4,5],[7,8]]) = 32 - 35 = -3; C₁₃ = +(-3) = -3',
            'det(A) = 1×(-3) + 2×6 + 3×(-3)',
            'det(A) = -3 + 12 - 9 = 0'
        ],
        helper: 'Cofactor Cᵢⱼ = (-1)^(i+j) × Mᵢⱼ; signs follow checkerboard pattern + - + / - + - / + - +',
        answer: 'det(A) = 0; matrix is singular (rows are linearly dependent — arithmetic progression)',
        realWorldContext: 'Testing linear independence of vectors, solving 3-variable systems',
        diagramInfo: {
            type: 'determinant',
            registryKey: 'determinant3x3',
            renderOptions: {
                title: '3×3 Determinant',
                showMatrix: true,
                showExpansion: true,
                showMinors: true,
                showCalculation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
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
                const filename = `mathematics_determinant_3x3_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== INVERSE MATRIX =====
    relatedProblems.push({
        difficulty: 'hard',
        scenario: '2×2 Matrix Inverse',
        problem: 'Find the inverse of matrix A = [[4, 7], [2, 6]] and verify by showing A × A⁻¹ = I.',
        parameters: {
            matrix: [[4, 7], [2, 6]]
        },
        type: 'matrix_inverse',
        subparts: [
            'Step 1 — Find determinant: det(A) = (4×6) - (7×2) = 24 - 14 = 10',
            'Since det(A) = 10 ≠ 0, the inverse exists',
            'Step 2 — Find adjugate: swap a and d, negate b and c',
            'adj(A) = [[6, -7], [-2, 4]]',
            'Step 3 — Apply formula: A⁻¹ = (1/det) × adj(A)',
            'A⁻¹ = (1/10) × [[6, -7], [-2, 4]] = [[0.6, -0.7], [-0.2, 0.4]]',
            'Verify: A × A⁻¹ = [[1, 0], [0, 1]] ✓'
        ],
        helper: 'A⁻¹ = (1/det(A)) × [[d, -b], [-c, a]] for A = [[a,b],[c,d]]',
        answer: 'A⁻¹ = [[0.6, -0.7], [-0.2, 0.4]]',
        realWorldContext: 'Solving matrix equations AX = B, cryptography, computer graphics',
        diagramInfo: {
            type: 'matrix_inverse',
            registryKey: 'inverseMatrix',
            renderOptions: {
                title: 'Inverse Matrix',
                showMatrix: true,
                showDeterminant: true,
                showAdjugate: true,
                showResult: true,
                showFormula: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 600 }
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
                const filename = `mathematics_inverse_matrix_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ===== MATRIX TRANSFORMATION =====
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Geometric Transformation Using Matrices',
        problem: 'Apply a 90° anticlockwise rotation matrix to the point P = (3, 1). Write the rotation matrix, show the multiplication, and state the image coordinates.',
        parameters: {
            transformationType: 'rotation',
            angle: 90,
            point: [3, 1]
        },
        type: 'matrix_transformation',
        subparts: [
            'Rotation matrix for angle θ anticlockwise: R = [[cosθ, -sinθ], [sinθ, cosθ]]',
            'For θ = 90°: cos90° = 0, sin90° = 1',
            'R = [[0, -1], [1, 0]]',
            'Apply to point P = (3, 1): R × [[3], [1]]',
            'x\' = (0×3) + (-1×1) = -1',
            'y\' = (1×3) + (0×1) = 3',
            'Image point P\' = (-1, 3)'
        ],
        helper: 'Rotation 90° anticlockwise: (x, y) → (-y, x)',
        answer: 'P\' = (-1, 3)',
        realWorldContext: 'Computer graphics, robotics, game development, image processing',
        diagramInfo: {
            type: 'matrix_transformation',
            registryKey: 'matrixTransformation',
            renderOptions: {
                title: 'Matrix Transformation',
                showOriginal: true,
                showTransformed: true,
                showMatrix: true,
                showCalculation: true,
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
                const filename = `mathematics_matrix_transformation_${Date.now()}.png`;
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

