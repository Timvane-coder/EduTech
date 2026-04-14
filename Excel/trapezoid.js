
// ==================== TRAPEZOID METHODS ====================
    
    /**
     * Parse trapezoid input
     */
    parseTrapezoidInput(input) {
        // Pattern 1: trapezoid (x,y) base1 base2 height
        const pattern1 = /trapezoid\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                base1: parseFloat(match1[3]),
                base2: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: trapezoid x,y,base1,base2,height
        const pattern2 = /trapezoid\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                base1: parseFloat(match2[3]),
                base2: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        return null;
    }

    /**
     * Calculate trapezoid properties
     */
    calculateTrapezoidProperties(corner, base1, base2, height) {
        // Area = (base1 + base2) * height / 2
        const area = (base1 + base2) * height / 2;

        // Calculate offset for trapezoid shape (centered)
        const offset = (base1 - base2) / 2;

        // Calculate vertices
        const vertices = {
            A: corner,
            B: { x: corner.x + base1, y: corner.y },
            C: { x: corner.x + base1 - offset, y: corner.y + height },
            D: { x: corner.x + offset, y: corner.y + height }
        };

        // Calculate leg lengths
        const legAD = this.calculateDistance(vertices.A, vertices.D);
        const legBC = this.calculateDistance(vertices.B, vertices.C);

        // Calculate perimeter
        const perimeter = base1 + base2 + legAD + legBC;

        // Calculate median (midsegment)
        const median = (base1 + base2) / 2;

        return {
            corner,
            base1,
            base2,
            height,
            area,
            perimeter,
            median,
            vertices,
            legs: { AD: legAD, BC: legBC }
        };
    }

    /**
     * Add trapezoid
     */
    addTrapezoid(input) {
        const trapData = this.parseTrapezoidInput(input);

        if (!trapData) {
            console.log("❌ Invalid trapezoid format!");
            console.log("💡 Examples:");
            console.log("  • trapezoid (0,0) 6 4 3");
            console.log("  • trapezoid 1,1,5,3,2");
            return false;
        }

        const { corner, base1, base2, height } = trapData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(base1) || isNaN(base2) || isNaN(height) ||
            base1 <= 0 || base2 <= 0 || height <= 0) {
            console.log("❌ Invalid values! All measurements must be positive.");
            return false;
        }

        const trapProps = this.calculateTrapezoidProperties(corner, base1, base2, height);

        this.trapezoidCounter++;
        this.trapezoidHistory.push({
            id: this.trapezoidCounter,
            input: input,
            properties: trapProps
        });

        this.displayTrapezoidAnalysis(trapProps);
        this.saveIndividualTrapezoid(trapProps);

        return true;
    }

    /**
     * Display trapezoid analysis
     */
    displayTrapezoidAnalysis(props) {
        const { base1, base2, height, area, perimeter, median, vertices, legs } = props;

        console.log(`\n⏢ TRAPEZOID ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x.toFixed(2)}, ${vertices.A.y.toFixed(2)}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x.toFixed(2)}, ${vertices.B.y.toFixed(2)}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x.toFixed(2)}, ${vertices.C.y.toFixed(2)}) - Top-right`);
        console.log(`   D: (${vertices.D.x.toFixed(2)}, ${vertices.D.y.toFixed(2)}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Base 1 (bottom): ${base1.toFixed(3)} units`);
        console.log(`   Base 2 (top): ${base2.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Median (midsegment): ${median.toFixed(3)} units`);
        console.log(`   Leg AD: ${legs.AD.toFixed(3)} units`);
        console.log(`   Leg BC: ${legs.BC.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);
        console.log(`   Formula: Area = (b₁ + b₂) × h / 2`);

        if (Math.abs(legs.AD - legs.BC) < 0.001) {
            console.log(`\n⭐ Special: Isosceles Trapezoid (legs are equal)`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual trapezoid graph
     */
    async saveIndividualTrapezoid(trapProps) {
        try {
            const buffer = await this.createTrapezoidGraph(trapProps);
            const { corner, base1, base2, height } = trapProps;

            const filename = `trapezoid_${String(this.trapezoidCounter).padStart(3, '0')}_${corner.x}_${corner.y}_b1${base1}_b2${base2}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Trapezoid graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving trapezoid graph:", error);
        }
    }

    /**
     * Create trapezoid graph
     */
    async createTrapezoidGraph(trapProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawTrapezoid(ctx, trapProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw trapezoid
     */
    drawTrapezoid(ctx, trapProps) {
        const { vertices, base1, base2, height, area, perimeter, median } = trapProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw trapezoid
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        const midX = (vertices.A.x + vertices.B.x) / 2;
        const screenMidBottom = this.calculator.graphToScreen(midX, vertices.A.y);
        const screenMidTop = this.calculator.graphToScreen(midX, vertices.D.y);
        ctx.beginPath();
        ctx.moveTo(screenMidBottom[0], screenMidBottom[1]);
        ctx.lineTo(screenMidTop[0], screenMidTop[1]);
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
        ctx.fillText(`Trapezoid`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Base 1: ${base1.toFixed(2)} units`,
            `Base 2: ${base2.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Median: ${median.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
