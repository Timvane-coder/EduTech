

    // ==================== RECTANGLE METHODS ====================
    
    /**
     * Parse rectangle input
     */
    parseRectangleInput(input) {
        // Pattern 1: rectangle (x,y) length width
        const pattern1 = /rectangle\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                length: parseFloat(match1[3]),
                width: parseFloat(match1[4])
            };
        }

        // Pattern 2: rectangle x,y,length,width
        const pattern2 = /rectangle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                length: parseFloat(match2[3]),
                width: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate rectangle properties
     */
    calculateRectangleProperties(corner, length, width) {
        const area = length * width;
        const perimeter = 2 * (length + width);
        const diagonal = Math.sqrt(length * length + width * width);

        return {
            corner,
            length,
            width,
            area,
            perimeter,
            diagonal,
            vertices: {
                A: corner,
                B: { x: corner.x + length, y: corner.y },
                C: { x: corner.x + length, y: corner.y + width },
                D: { x: corner.x, y: corner.y + width }
            }
        };
    }

    /**
     * Add rectangle
     */
    addRectangle(input) {
        const rectData = this.parseRectangleInput(input);

        if (!rectData) {
            console.log("❌ Invalid rectangle format!");
            console.log("💡 Examples:");
            console.log("  • rectangle (0,0) 4 3");
            console.log("  • rectangle 1,1,5,2");
            return false;
        }

        const { corner, length, width } = rectData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
            console.log("❌ Invalid values! Length and width must be positive.");
            return false;
        }

        const rectProps = this.calculateRectangleProperties(corner, length, width);

        this.rectangleCounter++;
        this.rectangleHistory.push({
            id: this.rectangleCounter,
            input: input,
            properties: rectProps
        });

        this.displayRectangleAnalysis(rectProps);
        this.saveIndividualRectangle(rectProps);

        return true;
    }

    /**
     * Display rectangle analysis
     */
    displayRectangleAnalysis(props) {
        const { corner, length, width, area, perimeter, diagonal, vertices } = props;

        console.log(`\n▭ RECTANGLE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x}, ${vertices.A.y}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x}, ${vertices.B.y}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x}, ${vertices.C.y}) - Top-right`);
        console.log(`   D: (${vertices.D.x}, ${vertices.D.y}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Length: ${length.toFixed(3)} units`);
        console.log(`   Width: ${width.toFixed(3)} units`);
        console.log(`   Diagonal: ${diagonal.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   All angles: 90°`);
        console.log(`   Opposite sides equal`);
        if (Math.abs(length - width) < 0.001) {
            console.log(`   ⭐ Special: This is a SQUARE!`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual rectangle graph
     */
    async saveIndividualRectangle(rectProps) {
        try {
            const buffer = await this.createRectangleGraph(rectProps);
            const { corner, length, width } = rectProps;

            const filename = `rectangle_${String(this.rectangleCounter).padStart(3, '0')}_${corner.x}_${corner.y}_${length}x${width}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Rectangle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving rectangle graph:", error);
        }
    }

    /**
     * Create rectangle graph
     */
    async createRectangleGraph(rectProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawRectangle(ctx, rectProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw rectangle
     */
    drawRectangle(ctx, rectProps) {
        const { vertices, length, width, area, perimeter, diagonal } = rectProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw rectangle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenB[0], screenB[1]);
        ctx.lineTo(screenC[0], screenC[1]);
        ctx.lineTo(screenD[0], screenD[1]);
        ctx.closePath();
        ctx.stroke();

        // Draw diagonal
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenA[0], screenA[1]);
        ctx.lineTo(screenC[0], screenC[1]);
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
        ctx.fillText(`Rectangle`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Length: ${length.toFixed(2)} units`,
            `Width: ${width.toFixed(2)} units`,
            `Diagonal: ${diagonal.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
