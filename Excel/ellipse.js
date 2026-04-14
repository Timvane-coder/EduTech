
    // ==================== ELLIPSE METHODS ====================
    
    /**
     * Parse ellipse input
     */
    parseEllipseInput(input) {
        // Pattern 1: ellipse center(x,y) a b
        const pattern1 = /ellipse\s*center\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]) },
                a: parseFloat(match1[3]),
                b: parseFloat(match1[4])
            };
        }

        // Pattern 2: ellipse (x,y) a b
        const pattern2 = /ellipse\s*\(([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]) },
                a: parseFloat(match2[3]),
                b: parseFloat(match2[4])
            };
        }

        // Pattern 3: ellipse x,y,a,b
        const pattern3 = /ellipse\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]) },
                a: parseFloat(match3[3]),
                b: parseFloat(match3[4])
            };
        }

        return null;
    }

    /**
     * Calculate ellipse properties
     */
    calculateEllipseProperties(center, a, b) {
        // Ensure a >= b (a is semi-major axis)
        const semiMajor = Math.max(a, b);
        const semiMinor = Math.min(a, b);

        // Calculate area
        const area = Math.PI * a * b;

        // Calculate approximate perimeter (Ramanujan's approximation)
        const h = Math.pow((a - b), 2) / Math.pow((a + b), 2);
        const perimeter = Math.PI * (a + b) * (1 + (3 * h) / (10 + Math.sqrt(4 - 3 * h)));

        // Calculate eccentricity
        const eccentricity = Math.sqrt(1 - (semiMinor * semiMinor) / (semiMajor * semiMajor));

        // Calculate focal distance
        const c = Math.sqrt(semiMajor * semiMajor - semiMinor * semiMinor);

        return {
            center,
            a,
            b,
            semiMajor,
            semiMinor,
            area,
            perimeter,
            eccentricity,
            focalDistance: c,
            foci: a >= b ? [
                { x: center.x - c, y: center.y },
                { x: center.x + c, y: center.y }
            ] : [
                { x: center.x, y: center.y - c },
                { x: center.x, y: center.y + c }
            ]
        };
    }

    /**
     * Add ellipse
     */
    addEllipse(input) {
        const ellipseData = this.parseEllipseInput(input);

        if (!ellipseData) {
            console.log("❌ Invalid ellipse format!");
            console.log("💡 Examples:");
            console.log("  • ellipse center(0,0) 5 3");
            console.log("  • ellipse (1,1) 4 2");
            console.log("  • ellipse 0,0,6,4");
            return false;
        }

        const { center, a, b } = ellipseData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(a) || isNaN(b) || a <= 0 || b <= 0) {
            console.log("❌ Invalid values! Semi-axes must be positive.");
            return false;
        }

        const ellipseProps = this.calculateEllipseProperties(center, a, b);

        this.ellipseCounter++;
        this.ellipseHistory.push({
            id: this.ellipseCounter,
            input: input,
            properties: ellipseProps
        });

        this.displayEllipseAnalysis(ellipseProps);
        this.saveIndividualEllipse(ellipseProps);

        return true;
    }

    /**
     * Display ellipse analysis
     */
    displayEllipseAnalysis(props) {
        const { center, a, b, semiMajor, semiMinor, area, perimeter, eccentricity, focalDistance, foci } = props;

        console.log(`\n⬭ ELLIPSE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`\n📏 Measurements:`);
        console.log(`   Semi-major axis (a): ${semiMajor.toFixed(3)} units`);
        console.log(`   Semi-minor axis (b): ${semiMinor.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter (approx): ${perimeter.toFixed(3)} units`);

        console.log(`\n📊 Properties:`);
        console.log(`   Eccentricity: ${eccentricity.toFixed(4)}`);
        console.log(`   Focal distance (c): ${focalDistance.toFixed(3)} units`);
        console.log(`   Focus 1: (${foci[0].x.toFixed(2)}, ${foci[0].y.toFixed(2)})`);
        console.log(`   Focus 2: (${foci[1].x.toFixed(2)}, ${foci[1].y.toFixed(2)})`);

        console.log(`\n📐 Classification:`);
        if (Math.abs(a - b) < 0.001) {
            console.log(`   ⭐ Special case: Circle (a = b)`);
        } else if (eccentricity < 0.5) {
            console.log(`   Nearly circular ellipse`);
        } else if (eccentricity > 0.9) {
            console.log(`   Highly elongated ellipse`);
        } else {
            console.log(`   Standard ellipse`);
        }

        console.log("=".repeat(50));
    }

    /**
     * Save individual ellipse graph
     */
    async saveIndividualEllipse(ellipseProps) {
        try {
            const buffer = await this.createEllipseGraph(ellipseProps);
            const { center, a, b } = ellipseProps;

            const filename = `ellipse_${String(this.ellipseCounter).padStart(3, '0')}_${center.x}_${center.y}_a${a}_b${b}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Ellipse graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving ellipse graph:", error);
        }
    }

    /**
     * Create ellipse graph
     */
    async createEllipseGraph(ellipseProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawEllipse(ctx, ellipseProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw ellipse
     */
    drawEllipse(ctx, ellipseProps) {
        const { center, a, b, area, perimeter, eccentricity, foci } = ellipseProps;

        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadiusX = Math.abs(this.calculator.graphToScreen(a, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenRadiusY = Math.abs(this.calculator.graphToScreen(0, b)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1], screenRadiusX, screenRadiusY, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw center
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw foci
        const screenFocus1 = this.calculator.graphToScreen(foci[0].x, foci[0].y);
        const screenFocus2 = this.calculator.graphToScreen(foci[1].x, foci[1].y);

        ctx.fillStyle = '#00aa00';
        ctx.beginPath();
        ctx.arc(screenFocus1[0], screenFocus1[1], 4, 0, 2 * Math.PI);
        ctx.fill();
        ctx.beginPath();
        ctx.arc(screenFocus2[0], screenFocus2[1], 4, 0, 2 * Math.PI);
        ctx.fill();

        // Draw axes
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);// Major axis
        if (a >= b) {
            const screenLeft = this.calculator.graphToScreen(center.x - a, center.y);
            const screenRight = this.calculator.graphToScreen(center.x + a, center.y);
            ctx.beginPath();
            ctx.moveTo(screenLeft[0], screenLeft[1]);
            ctx.lineTo(screenRight[0], screenRight[1]);
            ctx.stroke();
        } else {
            const screenTop = this.calculator.graphToScreen(center.x, center.y + a);
            const screenBottom = this.calculator.graphToScreen(center.x, center.y - a);
            ctx.beginPath();
            ctx.moveTo(screenTop[0], screenTop[1]);
            ctx.lineTo(screenBottom[0], screenBottom[1]);
            ctx.stroke();
        }

        // Minor axis
        if (b < a) {
            const screenTop = this.calculator.graphToScreen(center.x, center.y + b);
            const screenBottom = this.calculator.graphToScreen(center.x, center.y - b);
            ctx.beginPath();
            ctx.moveTo(screenTop[0], screenTop[1]);
            ctx.lineTo(screenBottom[0], screenBottom[1]);
            ctx.stroke();
        } else {
            const screenLeft = this.calculator.graphToScreen(center.x - b, center.y);
            const screenRight = this.calculator.graphToScreen(center.x + b, center.y);
            ctx.beginPath();
            ctx.moveTo(screenLeft[0], screenLeft[1]);
            ctx.lineTo(screenRight[0], screenRight[1]);
            ctx.stroke();
        }

        ctx.setLineDash([]);

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Ellipse`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y})`,
            `Semi-major axis: ${Math.max(a, b).toFixed(2)} units`,
            `Semi-minor axis: ${Math.min(a, b).toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units (approx)`,
            `Eccentricity: ${eccentricity.toFixed(3)}`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
