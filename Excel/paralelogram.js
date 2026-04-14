

    // ==================== PARALLELOGRAM METHODS ====================
    
    /**
     * Parse parallelogram input
     */
    parseParallelogramInput(input) {
        // Pattern 1: parallelogram (x,y) base side height
        const pattern1 = /parallelogram\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                base: parseFloat(match1[3]),
                side: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: parallelogram x,y,base,side,height
        const pattern2 = /parallelogram\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                base: parseFloat(match2[3]),
                side: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        return null;
    }

    /**
     * Calculate parallelogram properties
     */
    calculateParallelogramProperties(corner, base, side, height) {
        const area = base * height;
        const perimeter = 2 * (base + side);
        
        // Calculate angle using height and side
        const angle = Math.asin(height / side) * (180 / Math.PI);
        const complementaryAngle = 180 - angle;

        // Calculate offset for parallelogram shape
        const offset = Math.sqrt(side * side - height * height);

        return {
            corner,
            base,
            side,
            height,
            area,
            perimeter,
            angles: {
                acute: angle,
                obtuse: complementaryAngle
            },
            vertices: {
                A: corner,
                B: { x: corner.x + base, y: corner.y },
                C: { x: corner.x + base + offset, y: corner.y + height },
                D: { x: corner.x + offset, y: corner.y + height }
            }
        };
    }

    /**
     * Add parallelogram
     */
    addParallelogram(input) {
        const paraData = this.parseParallelogramInput(input);

        if (!paraData) {
            console.log("❌ Invalid parallelogram format!");
            console.log("💡 Examples:");
            console.log("  • parallelogram (0,0) 5 4 3");
            console.log("  • parallelogram 1,1,6,3,2");
            return false;
        }

        const { corner, base, side, height } = paraData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(base) || isNaN(side) || isNaN(height) || 
            base <= 0 || side <= 0 || height <= 0 || height > side) {
            console.log("❌ Invalid values! Height must be less than or equal to side length.");
            return false;
        }

        const paraProps = this.calculateParallelogramProperties(corner, base, side, height);

        this.parallelogramCounter++;
        this.parallelogramHistory.push({
            id: this.parallelogramCounter,
            input: input,
            properties: paraProps
        });

        this.displayParallelogramAnalysis(paraProps);
        this.saveIndividualParallelogram(paraProps);

        return true;
    }

    /**
     * Display parallelogram analysis
     */
    displayParallelogramAnalysis(props) {
        const { corner, base, side, height, area, perimeter, angles, vertices } = props;

        console.log(`\n▱ PARALLELOGRAM ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Vertices:`);
        console.log(`   A: (${vertices.A.x.toFixed(2)}, ${vertices.A.y.toFixed(2)}) - Bottom-left`);
        console.log(`   B: (${vertices.B.x.toFixed(2)}, ${vertices.B.y.toFixed(2)}) - Bottom-right`);
        console.log(`   C: (${vertices.C.x.toFixed(2)}, ${vertices.C.y.toFixed(2)}) - Top-right`);
        console.log(`   D: (${vertices.D.x.toFixed(2)}, ${vertices.D.y.toFixed(2)}) - Top-left`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Base: ${base.toFixed(3)} units`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📐 Angles:`);
        console.log(`   Acute angles: ${angles.acute.toFixed(1)}°`);
        console.log(`   Obtuse angles: ${angles.obtuse.toFixed(1)}°`);

        console.log(`\n📊 Properties:`);
        console.log(`   Opposite sides parallel and equal`);
        console.log(`   Opposite angles equal`);
        console.log(`   Adjacent angles supplementary`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual parallelogram graph
     */
    async saveIndividualParallelogram(paraProps) {
        try {
            const buffer = await this.createParallelogramGraph(paraProps);
            const { corner, base, side, height } = paraProps;

            const filename = `parallelogram_${String(this.parallelogramCounter).padStart(3, '0')}_${corner.x}_${corner.y}_b${base}_s${side}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Parallelogram graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving parallelogram graph:", error);
        }
    }

    /**
     * Create parallelogram graph
     */
    async createParallelogramGraph(paraProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawParallelogram(ctx, paraProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw parallelogram
     */
    drawParallelogram(ctx, paraProps) {
        const { vertices, base, side, height, area, perimeter, angles } = paraProps;

        const screenA = this.calculator.graphToScreen(vertices.A.x, vertices.A.y);
        const screenB = this.calculator.graphToScreen(vertices.B.x, vertices.B.y);
        const screenC = this.calculator.graphToScreen(vertices.C.x, vertices.C.y);
        const screenD = this.calculator.graphToScreen(vertices.D.x, vertices.D.y);

        // Draw parallelogram
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
        ctx.beginPath();
        ctx.moveTo(screenD[0], screenD[1]);
        ctx.lineTo(screenD[0], screenA[1]);
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
        ctx.fillText(`Parallelogram`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Base: ${base.toFixed(2)} units`,
            `Side: ${side.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Angles: ${angles.acute.toFixed(1)}° and ${angles.obtuse.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
