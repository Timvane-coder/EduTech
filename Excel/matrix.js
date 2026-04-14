
// ==================== MATRIX METHODS ====================

    /**
     * Parse matrix input from various formats
     */
    parseMatrixInput(input) {
        const cleanInput = input.trim().toLowerCase();

        // Pattern 1: matrix [[a,b],[c,d]] - standard notation
        const pattern1 = /matrix\s*\[\[([^\]]+)\],\[([^\]]+)\]\]/i;
        const match1 = input.match(pattern1);
        if (match1) {
            try {
                const row1 = match1[1].split(',').map(x => parseFloat(x.trim()));
                const row2 = match2[2].split(',').map(x => parseFloat(x.trim()));
                return {
                    type: '2x2',
                    values: [row1, row2]
                };
            } catch (e) {
                return null;
            }
        }

        // Pattern 2: matrix [a,b,c,d] - flat array for 2x2
        const pattern2 = /matrix\s*\[([^\]]+)\]/i;
        const match2 = input.match(pattern2);
        if (match2) {
            try {
                const values = match2[1].split(',').map(x => parseFloat(x.trim()));
                if (values.length === 4) {
                    return {
                        type: '2x2',
                        values: [[values[0], values[1]], [values[2], values[3]]]
                    };
                } else if (values.length === 9) {
                    return {
                        type: '3x3',
                        values: [
                            [values[0], values[1], values[2]],
                            [values[3], values[4], values[5]],
                            [values[6], values[7], values[8]]
                        ]
                    };
                }
            } catch (e) {
                return null;
            }
        }

        // Pattern 3: matrix a b c d - space separated for 2x2
        const pattern3 = /matrix\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                type: '2x2',
                values: [
                    [parseFloat(match3[1]), parseFloat(match3[2])],
                    [parseFloat(match3[3]), parseFloat(match3[4])]
                ]
            };
        }

        // Pattern 4: matrix rotation angle - rotation matrix
        const pattern4 = /matrix\s+rotation\s+([-+]?\d*\.?\d+)/i;
        const match4 = input.match(pattern4);
        if (match4) {
            const angle = parseFloat(match4[1]) * Math.PI / 180; // Convert to radians
            return {
                type: '2x2',
                values: [
                    [Math.cos(angle), -Math.sin(angle)],
                    [Math.sin(angle), Math.cos(angle)]
                ],
                description: `Rotation by ${match4[1]}°`
            };
        }

        // Pattern 5: matrix scale sx sy - scaling matrix
        const pattern5 = /matrix\s+scale\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match5 = input.match(pattern5);
        if (match5) {
            return {
                type: '2x2',
                values: [
                    [parseFloat(match5[1]), 0],
                    [0, parseFloat(match5[2])]
                ],
                description: `Scale by (${match5[1]}, ${match5[2]})`
            };
        }

        // Pattern 6: matrix reflection axis - reflection matrix
        const pattern6 = /matrix\s+reflection\s+(x|y)/i;
        const match6 = input.match(pattern6);
        if (match6) {
            const axis = match6[1].toLowerCase();
            if (axis === 'x') {
                return {
                    type: '2x2',
                    values: [[1, 0], [0, -1]],
                    description: 'Reflection across x-axis'
                };
            } else {
                return {
                    type: '2x2',
                    values: [[-1, 0], [0, 1]],
                    description: 'Reflection across y-axis'
                };
            }
        }

        // Pattern 7: matrix shear sx sy - shear matrix
        const pattern7 = /matrix\s+shear\s+([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+)/i;
        const match7 = input.match(pattern7);
        if (match7) {
            return {
                type: '2x2',
                values: [
                    [1, parseFloat(match7[1])],
                    [parseFloat(match7[2]), 1]
                ],
                description: `Shear by (${match7[1]}, ${match7[2]})`
            };
        }

        return null;
    }

    /**
     * Calculate matrix determinant
     */
    calculateDeterminant(matrix) {
        const n = matrix.length;

        if (n === 2) {
            // 2x2 matrix
            return matrix[0][0] * matrix[1][1] - matrix[0][1] * matrix[1][0];
        } else if (n === 3) {
            // 3x3 matrix using rule of Sarrus
            return (
                matrix[0][0] * matrix[1][1] * matrix[2][2] +
                matrix[0][1] * matrix[1][2] * matrix[2][0] +
                matrix[0][2] * matrix[1][0] * matrix[2][1] -
                matrix[0][2] * matrix[1][1] * matrix[2][0] -
                matrix[0][1] * matrix[1][0] * matrix[2][2] -
                matrix[0][0] * matrix[1][2] * matrix[2][1]
            );
        }

        return null;
    }

    /**
     * Calculate matrix trace
     */
    calculateTrace(matrix) {
        let trace = 0;
        for (let i = 0; i < matrix.length; i++) {
            trace += matrix[i][i];
        }
        return trace;
    }

    /**
     * Transpose matrix
     */
    transposeMatrix(matrix) {
        const rows = matrix.length;
        const cols = matrix[0].length;
        const transposed = [];

        for (let i = 0; i < cols; i++) {
            transposed[i] = [];
            for (let j = 0; j < rows; j++) {
                transposed[i][j] = matrix[j][i];
            }
        }

        return transposed;
    }

    /**
     * Invert 2x2 matrix
     */
    invertMatrix2x2(matrix) {
        const det = this.calculateDeterminant(matrix);

        if (Math.abs(det) < 1e-10) {
            return null; // Matrix is singular
        }

        return [
            [matrix[1][1] / det, -matrix[0][1] / det],
            [-matrix[1][0] / det, matrix[0][0] / det]
        ];
    }

    /**
     * Multiply two matrices
     */
    multiplyMatrices(A, B) {
        const rowsA = A.length;
        const colsA = A[0].length;
        const colsB = B[0].length;

        const result = [];
        for (let i = 0; i < rowsA; i++) {
            result[i] = [];
            for (let j = 0; j < colsB; j++) {
                result[i][j] = 0;
                for (let k = 0; k < colsA; k++) {
                    result[i][j] += A[i][k] * B[k][j];
                }
            }
        }

        return result;
    }

    /**
     * Apply matrix transformation to a point
     */
    transformPoint(matrix, point) {
        if (matrix.length === 2 && matrix[0].length === 2) {
            // 2D transformation
            return {
                x: matrix[0][0] * point.x + matrix[0][1] * point.y,
                y: matrix[1][0] * point.x + matrix[1][1] * point.y
            };
        }
        return point;
    }

    /**
     * Calculate eigenvalues for 2x2 matrix
     */
    calculateEigenvalues2x2(matrix) {
        const a = matrix[0][0];
        const b = matrix[0][1];
        const c = matrix[1][0];
        const d = matrix[1][1];

        const trace = a + d;
        const det = a * d - b * c;

        const discriminant = trace * trace - 4 * det;

        if (discriminant < 0) {
            // Complex eigenvalues
            const real = trace / 2;
            const imag = Math.sqrt(-discriminant) / 2;
            return {
                lambda1: { real, imag },
                lambda2: { real, imag: -imag },
                isReal: false
            };
        } else {
            // Real eigenvalues
            const lambda1 = (trace + Math.sqrt(discriminant)) / 2;
            const lambda2 = (trace - Math.sqrt(discriminant)) / 2;
            return {
                lambda1: { real: lambda1, imag: 0 },
                lambda2: { real: lambda2, imag: 0 },
                isReal: true
            };
        }
    }

    /**
     * Classify matrix transformation type
     */
    classifyTransformation(matrix) {
        const det = this.calculateDeterminant(matrix);
        const trace = this.calculateTrace(matrix);
        const eigenvalues = this.calculateEigenvalues2x2(matrix);

        let classification = [];

        // Check for identity
        if (Math.abs(matrix[0][0] - 1) < 1e-10 && Math.abs(matrix[1][1] - 1) < 1e-10 &&
            Math.abs(matrix[0][1]) < 1e-10 && Math.abs(matrix[1][0]) < 1e-10) {
            classification.push("Identity");
        }

        // Check for rotation
        if (Math.abs(det - 1) < 1e-10 && 
            Math.abs(matrix[0][0] - matrix[1][1]) < 1e-10 &&
            Math.abs(matrix[0][1] + matrix[1][0]) < 1e-10) {
            const angle = Math.acos(matrix[0][0]) * 180 / Math.PI;
            classification.push(`Rotation (${angle.toFixed(1)}°)`);
        }

        // Check for reflection
        if (Math.abs(det + 1) < 1e-10) {
            classification.push("Reflection");
        }

        // Check for scaling
        if (Math.abs(matrix[0][1]) < 1e-10 && Math.abs(matrix[1][0]) < 1e-10) {
            classification.push(`Scaling (${matrix[0][0].toFixed(2)}, ${matrix[1][1].toFixed(2)})`);
        }

        // Check for shear
        if (Math.abs(det - 1) < 1e-10 && 
            (Math.abs(matrix[0][1]) > 1e-10 || Math.abs(matrix[1][0]) > 1e-10)) {
            classification.push("Shear");
        }

        // Determinant analysis
        if (Math.abs(det) < 1e-10) {
            classification.push("Singular (no inverse)");
        } else if (det < 0) {
            classification.push("Orientation-reversing");
        } else {
            classification.push("Orientation-preserving");
        }

        return classification.length > 0 ? classification : ["General linear transformation"];
    }

/**
     * Add matrix to calculator
     */
    addMatrix(input) {
        const parsed = this.parseMatrixInput(input);

        if (!parsed) {
            console.log("❌ Invalid matrix format!");
            console.log("💡 Examples:");
            console.log("  • matrix [[1,2],[3,4]]     → Standard notation");
            console.log("  • matrix [1,2,3,4]         → Flat array for 2x2");
            console.log("  • matrix 1 2 3 4           → Space separated");
            console.log("  • matrix rotation 45       → Rotation by 45°");
            console.log("  • matrix scale 2 3         → Scale by (2,3)");
            console.log("  • matrix reflection x      → Reflect across x-axis");
            console.log("  • matrix shear 0.5 0       → Shear transformation");
            return false;
        }

        // Validate matrix values
        const flat = parsed.values.flat();
        if (flat.some(val => isNaN(val))) {
            console.log("❌ Invalid matrix values! Please use numbers only.");
            return false;
        }

        // Calculate matrix properties
        const matrixData = this.analyzeMatrix(parsed.values, parsed.description);

        this.matrixCounter++;
        this.matrixHistory.push({
            id: this.matrixCounter,
            input: input,
            matrix: parsed.values,
            data: matrixData,
            description: parsed.description
        });

        // Display analysis
        this.displayMatrixAnalysis(matrixData);

        // Save visualization
        this.saveMatrixGraph(matrixData);

        return true;
    }

    /**
     * Analyze matrix and calculate all properties
     */
    analyzeMatrix(matrix, description = null) {
        const det = this.calculateDeterminant(matrix);
        const trace = this.calculateTrace(matrix);
        const transposed = this.transposeMatrix(matrix);
        const inverse = matrix.length === 2 ? this.invertMatrix2x2(matrix) : null;
        const eigenvalues = matrix.length === 2 ? this.calculateEigenvalues2x2(matrix) : null;
        const classifications = this.classifyTransformation(matrix);

        // Create test grid points
        const gridPoints = this.createTestGrid();
        const transformedPoints = gridPoints.map(p => this.transformPoint(matrix, p));

        // Create basis vectors
        const basisVectors = [
            { original: { x: 1, y: 0 }, transformed: this.transformPoint(matrix, { x: 1, y: 0 }) },
            { original: { x: 0, y: 1 }, transformed: this.transformPoint(matrix, { x: 0, y: 1 }) }
        ];

        return {
            matrix,
            description,
            determinant: det,
            trace,
            transposed,
            inverse,
            eigenvalues,
            classifications,
            gridPoints,
            transformedPoints,
            basisVectors,
            isInvertible: inverse !== null
        };
    }

    /**
     * Create test grid for visualization
     */
    createTestGrid() {
        const points = [];
        for (let x = -5; x <= 5; x++) {
            for (let y = -5; y <= 5; y++) {
                points.push({ x, y });
            }
        }
        return points;
    }

    /**
     * Display comprehensive matrix analysis
     */
    displayMatrixAnalysis(data) {
        const { matrix, description, determinant, trace, transposed, inverse, 
                eigenvalues, classifications } = data;

        console.log(`\n🔢 MATRIX ANALYSIS`);
        console.log("=".repeat(60));

        if (description) {
            console.log(`📝 Description: ${description}`);
        }

        // Original matrix
        console.log(`\n📊 Original Matrix:`);
        this.printMatrix(matrix);

        // Properties
        console.log(`\n📐 Properties:`);
        console.log(`   Determinant: ${determinant.toFixed(4)}`);
        console.log(`   Trace: ${trace.toFixed(4)}`);
        console.log(`   Invertible: ${inverse ? '✓ Yes' : '✗ No'}`);

        // Classifications
        console.log(`\n🏷️  Classification:`);
        classifications.forEach(c => console.log(`   • ${c}`));

        // Eigenvalues
        if (eigenvalues) {
            console.log(`\n🔬 Eigenvalues:`);
            if (eigenvalues.isReal) {
                console.log(`   λ₁ = ${eigenvalues.lambda1.real.toFixed(4)}`);
                console.log(`   λ₂ = ${eigenvalues.lambda2.real.toFixed(4)}`);
            } else {
                console.log(`   λ₁ = ${eigenvalues.lambda1.real.toFixed(4)} + ${eigenvalues.lambda1.imag.toFixed(4)}i`);
                console.log(`   λ₂ = ${eigenvalues.lambda2.real.toFixed(4)} - ${eigenvalues.lambda2.imag.toFixed(4)}i`);
            }
        }

        // Transposed matrix
        console.log(`\n🔄 Transposed Matrix:`);
        this.printMatrix(transposed);

        // Inverse matrix
        if (inverse) {
            console.log(`\n↩️  Inverse Matrix:`);
            this.printMatrix(inverse);
        }

        // Basis transformation
        console.log(`\n📍 Basis Vector Transformation:`);
        console.log(`   î: (1,0) → (${data.basisVectors[0].transformed.x.toFixed(2)}, ${data.basisVectors[0].transformed.y.toFixed(2)})`);
        console.log(`   ĵ: (0,1) → (${data.basisVectors[1].transformed.x.toFixed(2)}, ${data.basisVectors[1].transformed.y.toFixed(2)})`);

        // Area/Volume scaling
        console.log(`\n📏 Geometric Effects:`);
        console.log(`   Area scaling factor: ${Math.abs(determinant).toFixed(4)}`);
        if (determinant < 0) {
            console.log(`   ⚠️  Orientation reversed`);
        }

        console.log("=".repeat(60));
    }

    /**
     * Print matrix in formatted way
     */
    printMatrix(matrix) {
        const formatted = matrix.map(row => 
            '   [ ' + row.map(val => val.toFixed(4).padStart(8)).join(', ') + ' ]'
        ).join('\n');
        console.log(formatted);
    }

    /**
     * Save matrix visualization graph
     */
    async saveMatrixGraph(matrixData) {
        try {
            const canvas = createCanvas(this.calculator.width * 2, this.calculator.height);
            const ctx = canvas.getContext('2d');

            this.drawMatrixVisualization(ctx, matrixData);

            const filename = `matrix_${String(this.matrixCounter).padStart(3, '0')}_transformation.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            const buffer = canvas.toBuffer('image/png');
            fs.writeFileSync(filepath, buffer);

            console.log(`💾 Matrix visualization saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving matrix graph:", error);
        }
    }

    /**
     * Draw complete matrix visualization (side-by-side comparison)
     */
    drawMatrixVisualization(ctx, matrixData) {
        const width = this.calculator.width;
        const height = this.calculator.height;

        // Draw original on left, transformed on right
        this.drawMatrixSide(ctx, matrixData, 0, false); // Original
        this.drawMatrixSide(ctx, matrixData, width, true); // Transformed

        // Draw dividing line
        ctx.strokeStyle = '#999';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(width, 0);
        ctx.lineTo(width, height);
        ctx.stroke();

        // Add labels
        ctx.fillStyle = 'black';
        ctx.font = 'bold 18px Arial';
        ctx.textAlign = 'center';
        ctx.fillText('Original', width / 2, 30);
        ctx.fillText('Transformed', width * 1.5, 30);
    }

    /**
     * Draw one side of matrix visualization
     */
    drawMatrixSide(ctx, matrixData, offsetX, isTransformed) {
        const width = this.calculator.width;
        const height = this.calculator.height;

        // Save context and translate
        ctx.save();
        ctx.translate(offsetX, 0);

        // Create temporary calculator for this side
        const tempCalc = this.createFreshCalculator();
        
        // Draw grid and axes
        tempCalc.drawGrid(ctx);

        // Draw grid transformation if enabled
        if (this.matrixSettings.showGrid) {
            this.drawTransformedGrid(ctx, matrixData, tempCalc, isTransformed);
        }

        // Draw basis vectors
        if (this.matrixSettings.showBasis) {
            this.drawBasisVectors(ctx, matrixData, tempCalc, isTransformed);
        }

        // Draw unit square transformation
        this.drawUnitSquare(ctx, matrixData, tempCalc, isTransformed);

        // Draw matrix info panel
        this.drawMatrixInfoPanel(ctx, matrixData, isTransformed);

        ctx.restore();
    }

    /**
     * Draw transformed grid lines
     */
    drawTransformedGrid(ctx, matrixData, calculator, isTransformed) {
        ctx.strokeStyle = this.matrixSettings.gridColor;
        ctx.lineWidth = 1;
        ctx.globalAlpha = 0.3;

        const gridRange = 5;
        
        for (let i = -gridRange; i <= gridRange; i++) {
            // Vertical grid lines
            const line1 = [
                { x: i, y: -gridRange },
                { x: i, y: gridRange }
            ];

            // Horizontal grid lines
            const line2 = [
                { x: -gridRange, y: i },
                { x: gridRange, y: i }
            ];

            if (isTransformed) {
                this.drawTransformedLine(ctx, line1, matrixData.matrix, calculator);
                this.drawTransformedLine(ctx, line2, matrixData.matrix, calculator);
            } else {
                this.drawLine(ctx, line1, calculator);
                this.drawLine(ctx, line2, calculator);
            }
        }

        ctx.globalAlpha = 1.0;
    }

    /**
     * Draw line between two points
     */
    drawLine(ctx, points, calculator) {
        if (points.length < 2) return;

        ctx.beginPath();
        const [startX, startY] = calculator.graphToScreen(points[0].x, points[0].y);
        ctx.moveTo(startX, startY);

        for (let i = 1; i < points.length; i++) {
            const [x, y] = calculator.graphToScreen(points[i].x, points[i].y);
            ctx.lineTo(x, y);
        }
        ctx.stroke();
    }

    /**
     * Draw transformed line
     */
    drawTransformedLine(ctx, points, matrix, calculator) {
        const transformed = points.map(p => this.transformPoint(matrix, p));
        this.drawLine(ctx, transformed, calculator);
    }
/**
     * Draw basis vectors
     */
    drawBasisVectors(ctx, matrixData, calculator, isTransformed) {
        const { basisVectors } = matrixData;

        // i-hat (x-axis basis vector) - red
        const iHat = isTransformed ? basisVectors[0].transformed : basisVectors[0].original;
        this.drawVectorFromOrigin(ctx, iHat, calculator, '#ff0000', 'î');

        // j-hat (y-axis basis vector) - blue
        const jHat = isTransformed ? basisVectors[1].transformed : basisVectors[1].original;
        this.drawVectorFromOrigin(ctx, jHat, calculator, '#0066ff', 'ĵ');
    }

    /**
     * Draw vector from origin
     */
    drawVectorFromOrigin(ctx, point, calculator, color, label) {
        const origin = calculator.graphToScreen(0, 0);
        const end = calculator.graphToScreen(point.x, point.y);

        // Draw arrow
        ctx.strokeStyle = color;
        ctx.fillStyle = color;
        ctx.lineWidth = 3;

        // Line
        ctx.beginPath();
        ctx.moveTo(origin[0], origin[1]);
        ctx.lineTo(end[0], end[1]);
        ctx.stroke();

        // Arrowhead
        const angle = Math.atan2(end[1] - origin[1], end[0] - origin[0]);
        const arrowLength = 15;
        const arrowAngle = Math.PI / 6;

        ctx.beginPath();
        ctx.moveTo(end[0], end[1]);
        ctx.lineTo(
            end[0] - arrowLength * Math.cos(angle - arrowAngle),
            end[1] - arrowLength * Math.sin(angle - arrowAngle)
        );
        ctx.lineTo(
            end[0] - arrowLength * Math.cos(angle + arrowAngle),
            end[1] - arrowLength * Math.sin(angle + arrowAngle)
        );
        ctx.closePath();
        ctx.fill();

        // Label
        ctx.fillStyle = color;
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(label, end[0] + 15, end[1] - 10);
    }

    /**
     * Draw unit square and its transformation
     */
    drawUnitSquare(ctx, matrixData, calculator, isTransformed) {
        // Define unit square vertices
        const square = [
            { x: 0, y: 0 },
            { x: 1, y: 0 },
            { x: 1, y: 1 },
            { x: 0, y: 1 },
            { x: 0, y: 0 } // Close the square
        ];

        const vertices = isTransformed 
            ? square.map(p => this.transformPoint(matrixData.matrix, p))
            : square;

        // Draw filled square
        ctx.fillStyle = isTransformed 
            ? 'rgba(255, 0, 0, 0.15)' 
            : 'rgba(0, 100, 255, 0.15)';
        
        ctx.beginPath();
        const [startX, startY] = calculator.graphToScreen(vertices[0].x, vertices[0].y);
        ctx.moveTo(startX, startY);
        
        for (let i = 1; i < vertices.length; i++) {
            const [x, y] = calculator.graphToScreen(vertices[i].x, vertices[i].y);
            ctx.lineTo(x, y);
        }
        ctx.closePath();
        ctx.fill();

        // Draw outline
        ctx.strokeStyle = isTransformed ? '#ff0000' : '#0066ff';
        ctx.lineWidth = 2;
        ctx.stroke();

        // Draw vertices
        for (let i = 0; i < vertices.length - 1; i++) {
            const [x, y] = calculator.graphToScreen(vertices[i].x, vertices[i].y);
            ctx.fillStyle = isTransformed ? '#ff0000' : '#0066ff';
            ctx.beginPath();
            ctx.arc(x, y, 4, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    /**
     * Draw matrix information panel
     */
    drawMatrixInfoPanel(ctx, matrixData, isTransformed) {
        const { matrix, determinant, classifications } = matrixData;

        // Background
        ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
        ctx.fillRect(10, 50, 200, 150);
        ctx.strokeStyle = '#333';
        ctx.lineWidth = 1;
        ctx.strokeRect(10, 50, 200, 150);

        // Title
        ctx.fillStyle = 'black';
        ctx.font = 'bold 12px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(isTransformed ? 'After Transformation' : 'Before Transformation', 20, 65);

        // Matrix display
        ctx.font = '10px Courier New';
        let yPos = 85;
        
        if (!isTransformed) {
            ctx.fillText('Matrix:', 20, yPos);
            yPos += 15;
            matrix.forEach(row => {
                const rowStr = '[ ' + row.map(v => v.toFixed(2).padStart(6)).join(' ') + ' ]';
                ctx.fillText(rowStr, 20, yPos);
                yPos += 12;
            });

            yPos += 5;
            ctx.font = '10px Arial';
            ctx.fillText(`det = ${determinant.toFixed(3)}`, 20, yPos);
            yPos += 15;
            ctx.fillText(`Area scale: ${Math.abs(determinant).toFixed(3)}x`, 20, yPos);
        } else {
            ctx.font = '9px Arial';
            yPos = 80;
            ctx.fillText('Type:', 20, yPos);
            yPos += 12;
            classifications.slice(0, 3).forEach(c => {
                const shortC = c.length > 28 ? c.substring(0, 25) + '...' : c;
                ctx.fillText('• ' + shortC, 20, yPos);
                yPos += 12;
            });
        }
    }

    /**
     * Display matrix history
     */
    displayMatrixHistory() {
        console.log(`\n📜 Matrix History (${this.matrixCounter} matrices)`);
        console.log("=".repeat(50));

        if (this.matrixHistory.length === 0) {
            console.log("No matrices added yet.");
            return;
        }

        this.matrixHistory.forEach(entry => {
            const { matrix, data } = entry;
            console.log(`${entry.id}. ${entry.input}`);
            if (entry.description) {
                console.log(`   Description: ${entry.description}`);
            }
            console.log(`   Determinant: ${data.determinant.toFixed(3)}`);
            console.log(`   Type: ${data.classifications[0]}`);
            console.log("");
        });
    }

    /**
     * Toggle matrix display settings
     */
    toggleMatrixSettings() {
        console.log("\n🎛️ Matrix Display Settings:");
        console.log(`   Show Grid: ${this.matrixSettings.showGrid ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Basis: ${this.matrixSettings.showBasis ? '✓ Enabled' : '✗ Disabled'}`);
        console.log(`   Show Eigenvalues: ${this.matrixSettings.showEigenvalues ? '✓ Enabled' : '✗ Disabled'}`);

        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        rl.question("Enter setting to toggle (grid/basis/eigenvalues) or 'cancel': ", (input) => {
            switch (input.toLowerCase()) {
                case 'grid':
                    this.matrixSettings.showGrid = !this.matrixSettings.showGrid;
                    console.log(`Grid display ${this.matrixSettings.showGrid ? 'enabled' : 'disabled'}`);
                    break;
                case 'basis':
                    this.matrixSettings.showBasis = !this.matrixSettings.showBasis;
                    console.log(`Basis display ${this.matrixSettings.showBasis ? 'enabled' : 'disabled'}`);
                    break;
                case 'eigenvalues':
                    this.matrixSettings.showEigenvalues = !this.matrixSettings.showEigenvalues;
                    console.log(`Eigenvalues display ${this.matrixSettings.showEigenvalues ? 'enabled' : 'disabled'}`);
                    break;
                case 'cancel':
                    console.log("No changes made.");
                    break;
                default:
                    console.log("❌ Invalid setting. Use 'grid', 'basis', 'eigenvalues', or 'cancel'.");
            }
            rl.close();
        });
    }
    
