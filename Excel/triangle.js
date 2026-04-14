

// ==================== TRIANGLE METHODS (EXISTING) ====================

    /**
     * Parse triangle input from various formats
     */
    parseTriangleInput(input) {
        // Remove spaces and convert to lowercase for parsing
        const cleanInput = input.replace(/\s/g, '').toLowerCase();

        // Pattern 1: triangle A(x1,y1) B(x2,y2) C(x3,y3)
        const pattern1 = /triangle\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);

        if (match1) {
            return {
                A: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                B: { x: parseFloat(match1[3]), y: parseFloat(match1[4]) },
                C: { x: parseFloat(match1[5]), y: parseFloat(match1[6]) }
            };
        }

        // Pattern 2: triangle (x1,y1) (x2,y2) (x3,y3)
        const pattern2 = /triangle\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);

        if (match2) {
            return {
                A: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                B: { x: parseFloat(match2[3]), y: parseFloat(match2[4]) },
                C: { x: parseFloat(match2[5]), y: parseFloat(match2[6]) }
            };
        }

        // Pattern 3: Simple coordinate list: triangle 0,0 4,0 2,3
        const pattern3 = /triangle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)\s+([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);

        if (match3) {
            return {
                A: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                B: { x: parseFloat(match3[3]), y: parseFloat(match3[4]) },
                C: { x: parseFloat(match3[5]), y: parseFloat(match3[6]) }
            };
        }

        return null;
    }

    /**
     * Check if three points are collinear
     */
    areCollinear(A, B, C) {
        // Using cross product method: points are collinear if cross product is 0
        const crossProduct = (B.x - A.x) * (C.y - A.y) - (B.y - A.y) * (C.x - A.x);
        return Math.abs(crossProduct) < 1e-10; // Account for floating point precision
    }

    /**
     * Calculate distance between two points
     */
    calculateDistance(p1, p2) {
        return Math.sqrt((p2.x - p1.x) ** 2 + (p2.y - p1.y) ** 2);
    }

    /**
     * Calculate angle using law of cosines
     */
    calculateAngle(a, b, c) {
        // Using law of cosines: cos(C) = (a² + b² - c²) / (2ab)
        const cosAngle = (a * a + b * b - c * c) / (2 * a * b);
        // Clamp to [-1, 1] to handle floating point errors
        const clampedCos = Math.max(-1, Math.min(1, cosAngle));
        return Math.acos(clampedCos) * (180 / Math.PI); // Convert to degrees
    }

    /**
     * Classify triangle by sides
     */
    classifyBySides(sideA, sideB, sideC) {
        const sides = [sideA, sideB, sideC].sort((a, b) => a - b);
        const tolerance = 1e-10;

        if (Math.abs(sides[0] - sides[1]) < tolerance && Math.abs(sides[1] - sides[2]) < tolerance) {
            return "Equilateral";
        } else if (Math.abs(sides[0] - sides[1]) < tolerance ||
                   Math.abs(sides[1] - sides[2]) < tolerance ||
                   Math.abs(sides[0] - sides[2]) < tolerance) {
            return "Isosceles";
        } else {
            return "Scalene";
        }
    }

    /**
     * Classify triangle by angles
     */
    classifyByAngles(angleA, angleB, angleC) {
        const angles = [angleA, angleB, angleC];
        const tolerance = 1;

        if (angles.some(angle => Math.abs(angle - 90) < tolerance)) {
            return "Right";
        } else if (angles.every(angle => angle < 90)) {
            return "Acute";
        } else {
            return "Obtuse";
        }
    }

    /**
     * Calculate triangle properties
     */
    calculateTriangleProperties(A, B, C) {
        // Calculate side lengths
        const sideAB = this.calculateDistance(A, B); // side c
        const sideBC = this.calculateDistance(B, C); // side a
        const sideCA = this.calculateDistance(C, A); // side b

        // Calculate angles using law of cosines
        const angleA = this.calculateAngle(sideBC, sideCA, sideAB); // angle at A
        const angleB = this.calculateAngle(sideCA, sideAB, sideBC); // angle at B
        const angleC = this.calculateAngle(sideAB, sideBC, sideCA); // angle at C

        // Calculate area using cross product formula
        const area = 0.5 * Math.abs((B.x - A.x) * (C.y - A.y) - (C.x - A.x) * (B.y - A.y));

        // Calculate perimeter
        const perimeter = sideAB + sideBC + sideCA;

        // Classify triangle
        const sideClassification = this.classifyBySides(sideAB, sideBC, sideCA);
        const angleClassification = this.classifyByAngles(angleA, angleB, angleC);

        return {
            vertices: { A, B, C },
            sides: {
                AB: sideAB,
                BC: sideBC,
                CA: sideCA
            },
            angles: {
                A: angleA,
                B: angleB,
                C: angleC
            },
            area,
            perimeter,
            classifications: {
                sides: sideClassification,
                angles: angleClassification,
                full: `${sideClassification} ${angleClassification}`
            }
        };
    }

    /**
     * Add triangle to the calculator
     */
    addTriangle(input) {
        const points = this.parseTriangleInput(input);

        if (!points) {
            console.log("❌ Invalid triangle format!");
            console.log("💡 Examples:");
            console.log("  • triangle A(0,0) B(4,0) C(2,3)");
            console.log("  • triangle (0,0) (4,0) (2,3)");
            console.log("  • triangle 0,0 4,0 2,3");
            return false;
        }

        const { A, B, C } = points;

        // Check if points are valid numbers
        if ([A.x, A.y, B.x, B.y, C.x, C.y].some(val => isNaN(val))) {
            console.log("❌ Invalid coordinates! Please use numbers only.");
            return false;
        }

        // Check if points are collinear
        if (this.areCollinear(A, B, C)) {
            console.log("❌ Points are collinear! Cannot form a triangle.");
            console.log(`Points: A(${A.x}, ${A.y}), B(${B.x}, ${B.y}), C(${C.x}, ${C.y})`);
            return false;
        }

        // Calculate triangle properties
        const triangleProps = this.calculateTriangleProperties(A, B, C);

        this.triangleCounter++;
        this.triangleHistory.push({
            id: this.triangleCounter,
            input: input,
            properties: triangleProps
        });

        // Display triangle analysis
        this.displayTriangleAnalysis(triangleProps);

        // Create individual triangle graph
        this.saveIndividualTriangle(triangleProps);

        return true;
    }

    /**
     * Display detailed triangle analysis
     */
    displayTriangleAnalysis(props) {
        const { vertices, sides, angles, area, perimeter, classifications } = props;

        console.log(`\n🔺 TRIANGLE ANALYSIS`);
        console.log("=".repeat(50));

        // Vertices
        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y})`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y})`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y})`);

        // Side lengths
        console.log(`\n📏 Side Lengths:`);
        console.log(`   AB = ${sides.AB.toFixed(3)} units`);
        console.log(`   BC = ${sides.BC.toFixed(3)} units`);
        console.log(`   CA = ${sides.CA.toFixed(3)} units`);

        // Angles
        console.log(`\n📐 Angles:`);
        console.log(`   ∠A = ${angles.A.toFixed(1)}°`);
        console.log(`   ∠B = ${angles.B.toFixed(1)}°`);
        console.log(`   ∠C = ${angles.C.toFixed(1)}°`);
        console.log(`   Sum = ${(angles.A + angles.B + angles.C).toFixed(1)}° ✓`);

        // Properties
        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        // Classification
        console.log(`\n🏷️ Classification:`);
        console.log(`   By sides: ${classifications.sides} Triangle`);
        console.log(`   By angles: ${classifications.angles} Triangle`);
        console.log(`   Overall: ${classifications.full} Triangle`);

        // Special properties
        this.displaySpecialProperties(props);

        console.log("=".repeat(50));
    }

    /**
     * Display special triangle properties
     */
    displaySpecialProperties(props) {
        const { sides, angles, classifications } = props;
        const specialProps = [];

        // Check for right triangle properties
        if (classifications.angles === "Right") {
            const sortedSides = Object.values(sides).sort((a, b) => a - b);
            const [a, b, c] = sortedSides;
            const pythagorean = Math.abs(c * c - (a * a + b * b));

            if (pythagorean < 0.001) {
                specialProps.push(`✓ Pythagorean theorem: ${a.toFixed(2)}² + ${b.toFixed(2)}² = ${c.toFixed(2)}²`);
            }
        }

        // Check for special right triangles
        if (classifications.angles === "Right") {
            const sortedSides = Object.values(sides).sort((a, b) => a - b);
            const [a, b, c] = sortedSides;

            // 45-45-90 triangle
            if (Math.abs(a - b) < 0.001 && Math.abs(c - a * Math.sqrt(2)) < 0.001) {
                specialProps.push("🔺 Special: 45-45-90 Triangle");
            }

            // 30-60-90 triangle
            const ratio1 = c / a;
            const ratio2 = b / a;
            if (Math.abs(ratio1 - 2) < 0.001 && Math.abs(ratio2 - Math.sqrt(3)) < 0.001) {
                specialProps.push("🔺 Special: 30-60-90 Triangle");
            }
        }

        // Check for equilateral properties
        if (classifications.sides === "Equilateral") {
            specialProps.push("✓ All angles are 60°");
            specialProps.push("✓ All sides are equal");
        }

        // Check for isosceles properties
        if (classifications.sides === "Isosceles") {
            const anglesArray = Object.values(angles);
            const baseAngles = anglesArray.filter((angle, index, arr) =>
                arr.findIndex(a => Math.abs(a - angle) < 0.001) !== index ||
                arr.filter(a => Math.abs(a - angle) < 0.001).length > 1
            );
            if (baseAngles.length >= 2) {
                specialProps.push(`✓ Base angles: ${baseAngles[0].toFixed(1)}°`);
            }
        }

        if (specialProps.length > 0) {
            console.log(`\n⭐ Special Properties:`);
            specialProps.forEach(prop => console.log(`   ${prop}`));
        }
    }

    /**
     * Save individual triangle graph
     */
    async saveIndividualTriangle(triangleProps) {
        try {
            const buffer = await this.createTriangleGraph(triangleProps);
            const { vertices } = triangleProps;

            const filename = `triangle_${String(this.triangleCounter).padStart(3, '0')}_A${vertices.A.x}_${vertices.A.y}_B${vertices.B.x}_${vertices.B.y}_C${vertices.C.x}_${vertices.C.y}.png`;
            const filepath = path.join('./temp', filename);

            // Create directory if it doesn't exist
            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Triangle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving triangle graph:", error);
        }
    }

    /**
     * Create triangle graph with all details
     */
    async createTriangleGraph(triangleProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        // Draw basic grid and axes
        await this.calculator.drawGraph(ctx);

        // Draw triangle
        this.drawTriangle(ctx, triangleProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw triangle with all annotations
     */
    drawTriangle(ctx, triangleProps) {
        const { vertices, sides, angles, classifications } = triangleProps;
        const { A, B, C } = vertices;

        // Convert coordinates to screen coordinates
        const screenA = this.calculator.graphToScreen(A.x, A.y);
        const screenB = this.calculator.graphToScreen(B.x, B.y);
        const screenC = this.calculator.graphToScreen(C.x, C.y);

        // Draw triangle outline
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw vertices as circles
        const drawVertex = (screen, label, color = '#0066ff') => {
            ctx.fillStyle = color;
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 6, 0, 2 * Math.PI);
            ctx.fill();

            // Label
            ctx.fillStyle = 'black';
            ctx.font = 'bold 14px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(label, screen[0], screen[1] - 15);
        };

        drawVertex(screenA, `A(${A.x}, ${A.y})`, '#ff0000');
        drawVertex(screenB, `B(${B.x}, ${B.y})`, '#00aa00');
        drawVertex(screenC, `C(${C.x}, ${C.y})`, '#0066ff');

        // Draw side length labels
        this.drawSideLabels(ctx, screenA, screenB, screenC, sides);

        // Draw angle labels
        this.drawAngleLabels(ctx, screenA, screenB, screenC, angles);

        // Draw title and classification
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${classifications.full} Triangle`, 10, 25);

        // Draw properties
        ctx.font = '12px Arial';
        const props = [
            `Area: ${triangleProps.area.toFixed(2)} sq units`,
            `Perimeter: ${triangleProps.perimeter.toFixed(2)} units`,
            `Sides: AB=${sides.AB.toFixed(2)}, BC=${sides.BC.toFixed(2)}, CA=${sides.CA.toFixed(2)}`,
            `Angles: ∠A=${angles.A.toFixed(1)}°, ∠B=${angles.B.toFixed(1)}°, ∠C=${angles.C.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }

    /**
     * Draw side length labels
     */
    drawSideLabels(ctx, screenA, screenB, screenC, sides) {
        const drawSideLabel = (screen1, screen2, length, label) => {
            const midX = (screen1[0] + screen2[0]) / 2;
            const midY = (screen1[1] + screen2[1]) / 2;

            ctx.fillStyle = '#666666';
            ctx.font = '11px Arial';
            ctx.textAlign = 'center';
            ctx.fillText(`${label}: ${length.toFixed(2)}`, midX, midY - 5);
        };

        drawSideLabel(screenA, screenB, sides.AB, 'AB');
        drawSideLabel(screenB, screenC, sides.BC, 'BC');
        drawSideLabel(screenC, screenA, sides.CA, 'CA');
    }

    /**
     * Draw angle labels
     */
    drawAngleLabels(ctx, screenA, screenB, screenC, angles) {
        ctx.fillStyle = '#333333';
        ctx.font = '10px Arial';
        ctx.textAlign = 'center';

        // Angle at A
        ctx.fillText(`${angles.A.toFixed(1)}°`, screenA[0] + 15, screenA[1] + 5);

        // Angle at B
        ctx.fillText(`${angles.B.toFixed(1)}°`, screenB[0] + 15, screenB[1] + 5);

        // Angle at C
        ctx.fillText(`${angles.C.toFixed(1)}°`, screenC[0] + 15, screenC[1] + 5);
    }

    // ==================== HELPER & UTILITY METHODS ====================

    /**

    /**
     * Create a new calculator instance for each equation
     */
    createFreshCalculator() {
        return new GraphingCalculator({
            size: 480,
            theme: this.calculator.theme,
            xMin: this.calculator.xMin,
            xMax: this.calculator.xMax,
            yMin: this.calculator.yMin,
            yMax: this.calculator.yMax,
            showGrid: this.calculator.showGrid,
            showAxes: this.calculator.showAxes,
            backgroundColor: this.calculator.backgroundColor,
            gridColor: this.calculator.gridColor,
            axisColor: this.calculator.axisColor
        });
    }

    /**
     * Sanitize filename
     */
    sanitizeFilename(name) {
        return name.replace(/[^a-z0-9_\-]/gi, '_');
    }
    
