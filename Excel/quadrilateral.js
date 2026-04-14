


    // ==================== QUADRILATERAL METHODS ====================
    
    /**
     * Parse quadrilateral input from various formats
     */
    parseQuadrilateralInput(input) {
        // Pattern 1: quadrilateral A(x1,y1) B(x2,y2) C(x3,y3) D(x4,y4)
        const pattern1 = /quadrilateral\s*a\(([^,]+),([^)]+)\)\s*b\(([^,]+),([^)]+)\)\s*c\(([^,]+),([^)]+)\)\s*d\(([^,]+),([^)]+)\)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                A: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                B: { x: parseFloat(match1[3]), y: parseFloat(match1[4]) },
                C: { x: parseFloat(match1[5]), y: parseFloat(match1[6]) },
                D: { x: parseFloat(match1[7]), y: parseFloat(match1[8]) }
            };
        }

        // Pattern 2: quadrilateral (x1,y1) (x2,y2) (x3,y3) (x4,y4)
        const pattern2 = /quadrilateral\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)\s*\(([^,]+),([^)]+)\)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                A: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                B: { x: parseFloat(match2[3]), y: parseFloat(match2[4]) },
                C: { x: parseFloat(match2[5]), y: parseFloat(match2[6]) },
                D: { x: parseFloat(match2[7]), y: parseFloat(match2[8]) }
            };
        }

        return null;
    }

    /**
     * Calculate quadrilateral properties
     */
    calculateQuadrilateralProperties(A, B, C, D) {
        // Calculate side lengths
        const sideAB = this.calculateDistance(A, B);
        const sideBC = this.calculateDistance(B, C);
        const sideCD = this.calculateDistance(C, D);
        const sideDA = this.calculateDistance(D, A);

        // Calculate diagonals
        const diagonalAC = this.calculateDistance(A, C);
        const diagonalBD = this.calculateDistance(B, D);

        // Calculate area using Shoelace formula
        const area = 0.5 * Math.abs(
            (A.x * B.y - B.x * A.y) +
            (B.x * C.y - C.x * B.y) +
            (C.x * D.y - D.x * C.y) +
            (D.x * A.y - A.x * D.y)
        );

        // Calculate perimeter
        const perimeter = sideAB + sideBC + sideCD + sideDA;

        // Classify quadrilateral
        const classification = this.classifyQuadrilateral(A, B, C, D, sideAB, sideBC, sideCD, sideDA);

        return {
            vertices: { A, B, C, D },
            sides: { AB: sideAB, BC: sideBC, CD: sideCD, DA: sideDA },
            diagonals: { AC: diagonalAC, BD: diagonalBD },
            area,
            perimeter,
            classification
        };
    }

    /**
     * Classify quadrilateral type
     */
    classifyQuadrilateral(A, B, C, D, sideAB, sideBC, sideCD, sideDA) {
        const tolerance = 0.001;

        // Check for rectangle (opposite sides equal and diagonals equal)
        const oppositeSidesEqual = Math.abs(sideAB - sideCD) < tolerance && Math.abs(sideBC - sideDA) < tolerance;
        const diagonalAC = this.calculateDistance(A, C);
        const diagonalBD = this.calculateDistance(B, D);
        const diagonalsEqual = Math.abs(diagonalAC - diagonalBD) < tolerance;

        if (oppositeSidesEqual && diagonalsEqual) {
            // Check if all sides equal (square)
            if (Math.abs(sideAB - sideBC) < tolerance) {
                return "Square";
            }
            return "Rectangle";
        }

        // Check for parallelogram (opposite sides equal)
        if (oppositeSidesEqual) {
            // Check for rhombus (all sides equal)
            if (Math.abs(sideAB - sideBC) < tolerance && Math.abs(sideBC - sideCD) < tolerance) {
                return "Rhombus";
            }
            return "Parallelogram";
        }

        // Check for trapezoid (one pair of parallel sides)
        const vectorAB = { x: B.x - A.x, y: B.y - A.y };
        const vectorDC = { x: C.x - D.x, y: C.y - D.y };
        const vectorAD = { x: D.x - A.x, y: D.y - A.y };
        const vectorBC = { x: C.x - B.x, y: C.y - B.y };

        const crossABDC = vectorAB.x * vectorDC.y - vectorAB.y * vectorDC.x;
        const crossADBC = vectorAD.x * vectorBC.y - vectorAD.y * vectorBC.x;

        if (Math.abs(crossABDC) < tolerance || Math.abs(crossADBC) < tolerance) {
            return "Trapezoid";
        }

        return "General Quadrilateral";
    }

    /**
     * Add quadrilateral
     */
    addQuadrilateral(input) {
        const points = this.parseQuadrilateralInput(input);

        if (!points) {
            console.log("❌ Invalid quadrilateral format!");
            console.log("💡 Examples:");
            console.log("  • quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
            console.log("  • quadrilateral (0,0) (4,0) (5,3) (1,3)");
            return false;
        }

        const { A, B, C, D } = points;

        if ([A.x, A.y, B.x, B.y, C.x, C.y, D.x, D.y].some(val => isNaN(val))) {
            console.log("❌ Invalid coordinates! Please use numbers only.");
            return false;
        }

        const quadProps = this.calculateQuadrilateralProperties(A, B, C, D);

        this.quadrilateralCounter++;
        this.quadrilateralHistory.push({
            id: this.quadrilateralCounter,
            input: input,
            properties: quadProps
        });

        this.displayQuadrilateralAnalysis(quadProps);
        this.saveIndividualQuadrilateral(quadProps);

        return true;
    }

    /**
     * Display quadrilateral analysis
     */
    displayQuadrilateralAnalysis(props) {
        const { vertices, sides, diagonals, area, perimeter, classification } = props;

        console.log(`\n⬢ QUADRILATERAL ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y})`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y})`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y})`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y})`);

        console.log(`\n📏 Side Lengths:`);
        console.log(`   AB = ${sides.AB.toFixed(3)} units`);
        console.log(`   BC = ${sides.BC.toFixed(3)} units`);
        console.log(`   CD = ${sides.CD.toFixed(3)} units`);
        console.log(`   DA = ${sides.DA.toFixed(3)} units`);

        console.log(`\n📐 Diagonals:`);
        console.log(`   AC = ${diagonals.AC.toFixed(3)} units`);
        console.log(`   BD = ${diagonals.BD.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n🏷️ Classification: ${classification}`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual quadrilateral graph
     */
    async saveIndividualQuadrilateral(quadProps) {
        try {
            const buffer = await this.createQuadrilateralGraph(quadProps);
            const { vertices } = quadProps;

            const filename = `quadrilateral_${String(this.quadrilateralCounter).padStart(3, '0')}_${vertices.A.x}_${vertices.A.y}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Quadrilateral graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving quadrilateral graph:", error);
        }
    }

    /**
     * Create quadrilateral graph
     */
    async createQuadrilateralGraph(quadProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawQuadrilateral(ctx, quadProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw quadrilateral
     */
    drawQuadrilateral(ctx, quadProps) {
        const { vertices, sides, area, perimeter, classification } = quadProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw quadrilateral
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw diagonals
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.moveTo(screenB[0], screenB[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw vertices
        [screenA, screenB, screenC, screenD].forEach((screen, i) => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 5, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`${classification}`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Sides: AB=${sides.AB.toFixed(2)}, BC=${sides.BC.toFixed(2)}`,
            `       CD=${sides.CD.toFixed(2)}, DA=${sides.DA.toFixed(2)}`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
