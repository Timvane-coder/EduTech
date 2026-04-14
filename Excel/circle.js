
// ==================== CIRCLE METHODS ====================
    
    /**
     * Parse circle input from various formats
     */
    parseCircleInput(input) {
        const cleanInput = input.replace(/\s/g, '').toLowerCase();

        // Pattern 1: circle center(x,y) radius r
        const pattern1 = /circle\s*center\(([^,]+),([^)]+)\)\s*radius\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                radius: parseFloat(match1[3])
            };
        }

        // Pattern 2: circle (x,y) r
        const pattern2 = /circle\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                radius: parseFloat(match2[3])
            };
        }

        // Pattern 3: circle x,y,r
        const pattern3 = /circle\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                radius: parseFloat(match3[3])
            };
        }

        // Pattern 4: circle diameter d at (x,y)
        const pattern4 = /circle\s*diameter\s*([^\s]+)\s*at\s*\(([^,]+),([^)]+)\)/i;
        const match4 = input.match(pattern4);
        if (match4) {
            return {
                center: { x: parseFloat(match4[2]), y: parseFloat(match4[3]) },
                radius: parseFloat(match4[1]) / 2,
                isDiameter: true
            };
        }

        return null;
    }

    /**
     * Calculate circle properties
     */
    calculateCircleProperties(center, radius) {
        const area = Math.PI * radius * radius;
        const circumference = 2 * Math.PI * radius;
        const diameter = 2 * radius;

        return {
            center,
            radius,
            diameter,
            area,
            circumference
        };
    }

    /**
     * Add circle to the calculator
     */
    addCircle(input) {
        const circleData = this.parseCircleInput(input);

        if (!circleData) {
            console.log("❌ Invalid circle format!");
            console.log("💡 Examples:");
            console.log("  • circle center(0,0) radius 5");
            console.log("  • circle (2,3) 4");
            console.log("  • circle 0,0,3");
            console.log("  • circle diameter 10 at (1,1)");
            return false;
        }

        const { center, radius } = circleData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(radius) || radius <= 0) {
            console.log("❌ Invalid values! Radius must be positive.");
            return false;
        }

        const circleProps = this.calculateCircleProperties(center, radius);

        this.circleCounter++;
        this.circleHistory.push({
            id: this.circleCounter,
            input: input,
            properties: circleProps
        });

        this.displayCircleAnalysis(circleProps);
        this.saveIndividualCircle(circleProps);

        return true;
    }

    /**
     * Display circle analysis
     */
    displayCircleAnalysis(props) {
        const { center, radius, diameter, area, circumference } = props;

        console.log(`\n⭕ CIRCLE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Diameter: ${diameter.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Circumference: ${circumference.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Area formula: πr² = π(${radius.toFixed(2)})²`);
        console.log(`   Circumference formula: 2πr = 2π(${radius.toFixed(2)})`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual circle graph
     */
    async saveIndividualCircle(circleProps) {
        try {
            const buffer = await this.createCircleGraph(circleProps);
            const { center, radius } = circleProps;

            const filename = `circle_${String(this.circleCounter).padStart(3, '0')}_center${center.x}_${center.y}_r${radius.toFixed(1)}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Circle graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving circle graph:", error);
        }
    }

    /**
     * Create circle graph
     */
    async createCircleGraph(circleProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCircle(ctx, circleProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw circle with annotations
     */
    drawCircle(ctx, circleProps) {
        const { center, radius, area, circumference } = circleProps;

        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Draw circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], screenRadius, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 6, 0, 2 * Math.PI);
        ctx.fill();

        // Draw radius line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1]);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1]);
        ctx.stroke();
        ctx.setLineDash([]);

        // Labels
        ctx.fillStyle = 'black';
        ctx.font = 'bold 14px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(`Center (${center.x}, ${center.y})`, screenCenter[0], screenCenter[1] - 15);
        ctx.fillText(`r = ${radius.toFixed(2)}`, screenCenter[0] + screenRadius / 2, screenCenter[1] - 10);

        // Title and properties
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Circle`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Circumference: ${circumference.toFixed(2)} units`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
