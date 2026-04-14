
    // ==================== CYLINDER METHODS ====================
    
    /**
     * Parse cylinder input
     */
    parseCylinderInput(input) {
        // Pattern 1: cylinder center(x,y,z) radius height
        const pattern1 = /cylinder\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)\s*height\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: cylinder (x,y,z) r h
        const pattern2 = /cylinder\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        // Pattern 3: cylinder x,y,z,r,h
        const pattern3 = /cylinder\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match3 = input.match(pattern3);
        if (match3) {
            return {
                center: { x: parseFloat(match3[1]), y: parseFloat(match3[2]), z: parseFloat(match3[3]) },
                radius: parseFloat(match3[4]),
                height: parseFloat(match3[5])
            };
        }

        return null;
    }

    /**
     * Calculate cylinder properties
     */
    calculateCylinderProperties(center, radius, height) {
        const baseArea = Math.PI * radius * radius;
        const lateralSurfaceArea = 2 * Math.PI * radius * height;
        const totalSurfaceArea = lateralSurfaceArea + 2 * baseArea;
        const volume = baseArea * height;

        return {
            center,
            radius,
            height,
            baseArea,
            lateralSurfaceArea,
            totalSurfaceArea,
            volume
        };
    }

    /**
     * Add cylinder
     */
    addCylinder(input) {
        const cylData = this.parseCylinderInput(input);

        if (!cylData) {
            console.log("❌ Invalid cylinder format!");
            console.log("💡 Examples:");
            console.log("  • cylinder center(0,0,0) radius 3 height 5");
            console.log("  • cylinder (1,2,3) 4 6");
            console.log("  • cylinder 0,0,0,3,5");
            return false;
        }

        const { center, radius, height } = cylData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || 
            isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
            console.log("❌ Invalid values! Radius and height must be positive.");
            return false;
        }

        const cylProps = this.calculateCylinderProperties(center, radius, height);

        this.cylinderCounter++;
        this.cylinderHistory.push({
            id: this.cylinderCounter,
            input: input,
            properties: cylProps
        });

        this.displayCylinderAnalysis(cylProps);
        this.saveIndividualCylinder(cylProps);

        return true;
    }

    /**
     * Display cylinder analysis
     */
    displayCylinderAnalysis(props) {
        const { center, radius, height, baseArea, lateralSurfaceArea, totalSurfaceArea, volume } = props;

        console.log(`\n🛢️ CYLINDER ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Base Area: ${baseArea.toFixed(3)} square units`);
        console.log(`   Lateral Surface Area: ${lateralSurfaceArea.toFixed(3)} square units`);
        console.log(`   Total Surface Area: ${totalSurfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Base Area: πr² = π(${radius.toFixed(2)})²`);
        console.log(`   Lateral Surface Area: 2πrh = 2π(${radius.toFixed(2)})(${height.toFixed(2)})`);
        console.log(`   Volume: πr²h = π(${radius.toFixed(2)})²(${height.toFixed(2)})`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cylinder graph
     */
    async saveIndividualCylinder(cylProps) {
        try {
            const buffer = await this.createCylinderGraph(cylProps);
            const { center, radius, height } = cylProps;

            const filename = `cylinder_${String(this.cylinderCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cylinder graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cylinder graph:", error);
        }
    }

    /**
     * Create cylinder graph (2D projection)
     */
    async createCylinderGraph(cylProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCylinder(ctx, cylProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw cylinder (as 2D projection)
     */
    drawCylinder(ctx, cylProps) {
        const { center, radius, height, volume, totalSurfaceArea } = cylProps;

        // Project to 2D (side view)
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);
        const screenRadius = Math.abs(this.calculator.graphToScreen(radius, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);
        const screenHeight = Math.abs(this.calculator.graphToScreen(0, height)[1] - this.calculator.graphToScreen(0, 0)[1]);

        // Draw top ellipse
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] - screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw bottom ellipse
        ctx.beginPath();
        ctx.ellipse(screenCenter[0], screenCenter[1] + screenHeight/2, screenRadius, screenRadius * 0.3, 0, 0, 2 * Math.PI);
        ctx.stroke();

        // Draw side lines
        ctx.beginPath();
        ctx.moveTo(screenCenter[0] - screenRadius, screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] - screenRadius, screenCenter[1] + screenHeight/2);
        ctx.moveTo(screenCenter[0] + screenRadius, screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0] + screenRadius, screenCenter[1] + screenHeight/2);
        ctx.stroke();

        // Draw height line
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 2;
        ctx.setLineDash([5, 5]);
        ctx.beginPath();
        ctx.moveTo(screenCenter[0], screenCenter[1] - screenHeight/2);
        ctx.lineTo(screenCenter[0], screenCenter[1] + screenHeight/2);
        ctx.stroke();
        ctx.setLineDash([]);

        // Draw center point
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cylinder (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Center: (${center.x}, ${center.y}, ${center.z})`,
            `Radius: ${radius.toFixed(2)} units`,
            `Height: ${height.toFixed(2)} units`,
            `Surface Area: ${totalSurfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[2D projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
