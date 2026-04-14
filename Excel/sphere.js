
    // ==================== SPHERE METHODS ====================
    
    /**
     * Parse sphere input
     */
    parseSphereInput(input) {
        // Pattern 1: sphere center(x,y,z) radius r
        const pattern1 = /sphere\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4])
            };
        }

        // Pattern 2: sphere (x,y,z) r
        const pattern2 = /sphere\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4])
            };
        }

        // Pattern 3: sphere x,y,z,r
        const pattern3 = /sphere\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]), z: parseFloat(match3[3]) },
                radius: parseFloat(match3[4])
            };
        }

        return null;
    }

    /**
     * Calculate sphere properties
     */
    calculateSphereProperties(center, radius) {
        const surfaceArea = 4 * Math.PI * radius * radius;
        const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);
        const diameter = 2 * radius;

        return {
            center,
            radius,
            diameter,
            surfaceArea,
            volume
        };
    }

    /**
     * Add sphere
     */
    addSphere(input) {
        const sphereData = this.parseSphereInput(input);

        if (!sphereData) {
            console.log("❌ Invalid sphere format!");
            console.log("💡 Examples:");
            console.log("  • sphere center(0,0,0) radius 5");
            console.log("  • sphere (1,2,3) 4");
            console.log("  • sphere 0,0,0,3");
            return false;
        }

        const { center, radius } = sphereData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || isNaN(radius) || radius <= 0) {
            console.log("❌ Invalid values! Radius must be positive.");
            return false;
        }

        const sphereProps = this.calculateSphereProperties(center, radius);

        this.sphereCounter++;
        this.sphereHistory.push({
            id: this.sphereCounter,
            input: input,
            properties: sphereProps
        });

        this.displaySphereAnalysis(sphereProps);
        this.saveIndividualSphere(sphereProps);

        return true;
    }

    /**
     * Display sphere analysis
     */
    displaySphereAnalysis(props) {
        const { center, radius, diameter, surfaceArea, volume } = props;

        console.log(`\n🌐 SPHERE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Diameter: ${diameter.toFixed(3)} units`);
        console.log(`   Surface Area: ${surfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Surface Area: 4πr² = 4π(${radius.toFixed(2)})²`);
        console.log(`   Volume: (4/3)πr³ = (4/3)π(${radius.toFixed(2)})³`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual sphere graph
     */
    async saveIndividualSphere(sphereProps) {
        try {
            const buffer = await this.createSphereGraph(sphereProps);
            const { center, radius } = sphereProps;

            const filename = `sphere_${String(this.sphereCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius.toFixed(1)}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Sphere graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving sphere graph:", error);
        }
    }

    /**
     * Create sphere graph (2D projection)
     */
    async createSphereGraph(sphereProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawSphere(ctx, sphereProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw sphere (as 2D projection)
     */
    drawSphere(ctx, sphereProps) {
        const { center, radius, surfaceArea, volume } = sphereProps;

        // Project to 2D (XY plane)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Draw outer circle
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], screenRadius, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw ellipse to show 3D effect
        ctx.strokeStyle = '#0066ff';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1], screenRadius, screenRadius * 0.4, 0, 0, 2 * Math.PI);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
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

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Sphere (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Surface Area: ${surfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
