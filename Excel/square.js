

// ==================== SQUARE METHODS ====================
    
    /**
     * Parse square input
     */
    parseSquareInput(input) {
        // Pattern 1: square (x,y) side
        const pattern1 = /square\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                side: parseFloat(match1[3])
            };
        }

        // Pattern 2: square x,y,side
        const pattern2 = /square\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                side: parseFloat(match2[3])
            };
        }

        return null;
    }

    /**
     * Calculate square properties
     */
    calculateSquareProperties(corner, side) {
        const area = side * side;
        const perimeter = 4 * side;
        const diagonal = side * Math.sqrt(2);

        return {
            corner,
            side,
            area,
            perimeter,
            diagonal,
            vertices: {
                A: corner,
                B: { x: corner.x + side, y: corner.y },
                C: { x: corner.x + side, y: corner.y + side },
                D: { x: corner.x, y: corner.y + side }
            }
        };
    }

    /**
     * Add square
     */
    addSquare(input) {
        const squareData = this.parseSquareInput(input);

        if (!squareData) {
            console.log("❌ Invalid square format!");
            console.log("💡 Examples:");
            console.log("  • square (0,0) 4");
            console.log("  • square 1,1,3");
            return false;
        }

        const { corner, side } = squareData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(side) || side <= 0) {
            console.log("❌ Invalid values! Side must be positive.");
            return false;
        }

        const squareProps = this.calculateSquareProperties(corner, side);

        this.squareCounter++;
        this.squareHistory.push({
            id: this.squareCounter,
            input: input,
            properties: squareProps
        });

        this.displaySquareAnalysis(squareProps);
        this.saveIndividualSquare(squareProps);

        return true;
    }

    /**
     * Display square analysis
     */
    displaySquareAnalysis(props) {
        const { corner, side, area, perimeter, diagonal, vertices } = props;

        console.log(`\n▢ SQUARE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y}) - Top-right`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Diagonal: ${diagonal.toFixed(3)} units (${side.toFixed(2)}√2)`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   All angles: 90°`);
        console.log(`   All sides equal`);
        console.log(`   Diagonals bisect at 90°`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual square graph
     */
    async saveIndividualSquare(squareProps) {
        try {
            const buffer = await this.createSquareGraph(squareProps);
            const { corner, side } = squareProps;

            const filename = `square_${String(this.squareCounter).padStart(3, '0')}_${corner.x}_${corner.y}_side${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Square graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving square graph:", error);
        }
    }

    /**
     * Create square graph
     */
    async createSquareGraph(squareProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawSquare(ctx, squareProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw square
     */
    drawSquare(ctx, squareProps) {
        const { vertices, side, area, perimeter, diagonal } = squareProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw square
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
        ctx.fillText(`Square`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Side: ${side.toFixed(2)} units`,
            `Diagonal: ${diagonal.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
