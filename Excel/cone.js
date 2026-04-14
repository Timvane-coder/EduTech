

    // ==================== CONE METHODS ====================
    
    /**
     * Parse cone input
     */
    parseConeInput(input) {
        // Pattern 1: cone center(x,y,z) radius height
        const pattern1 = /cone\s*center\(([^,]+),([^,]+),([^)]+)\)\s*radius\s*([^\s]+)\s*height\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                center: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                radius: parseFloat(match1[4]),
                height: parseFloat(match1[5])
            };
        }

        // Pattern 2: cone (x,y,z) r h
        const pattern2 = /cone\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)\s*([^\s]+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                center: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                radius: parseFloat(match2[4]),
                height: parseFloat(match2[5])
            };
        }

        // Pattern 3: cone x,y,z,r,h
        const pattern3 = /cone\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
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
     * Calculate cone properties
     */
    calculateConeProperties(center, radius, height) {
        const slantHeight = Math.sqrt(radius * radius + height * height);
        const baseArea = Math.PI * radius * radius;
        const lateralSurfaceArea = Math.PI * radius * slantHeight;
        const totalSurfaceArea = baseArea + lateralSurfaceArea;
        const volume = (1/3) * baseArea * height;

        return {
            center,
            radius,
            height,
            slantHeight,
            baseArea,
            lateralSurfaceArea,
            totalSurfaceArea,
            volume
        };
    }

    /**
     * Add cone
     */
    addCone(input) {
        const coneData = this.parseConeInput(input);

        if (!coneData) {
            console.log("❌ Invalid cone format!");
            console.log("💡 Examples:");
            console.log("  • cone center(0,0,0) radius 3 height 5");
            console.log("  • cone (1,2,3) 4 6");
            console.log("  • cone 0,0,0,3,5");
            return false;
        }

        const { center, radius, height } = coneData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(center.z) || 
            isNaN(radius) || isNaN(height) || radius <= 0 || height <= 0) {
            console.log("❌ Invalid values! Radius and height must be positive.");
            return false;
        }

        const coneProps = this.calculateConeProperties(center, radius, height);

        this.coneCounter++;
        this.coneHistory.push({
            id: this.coneCounter,
            input: input,
            properties: coneProps
        });

        this.displayConeAnalysis(coneProps);
        this.saveIndividualCone(coneProps);

        return true;
    }

    /**
     * Display cone analysis
     */

/**
     * Display cone analysis
     */
    displayConeAnalysis(props) {
        const { center, radius, height, slantHeight, baseArea, lateralSurfaceArea, totalSurfaceArea, volume } = props;

        console.log(`\n🔺 CONE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center (base): (${center.x}, ${center.y}, ${center.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Radius: ${radius.toFixed(3)} units`);
        console.log(`   Height: ${height.toFixed(3)} units`);
        console.log(`   Slant Height: ${slantHeight.toFixed(3)} units`);
        console.log(`   Base Area: ${baseArea.toFixed(3)} square units`);
        console.log(`   Lateral Surface Area: ${lateralSurfaceArea.toFixed(3)} square units`);
        console.log(`   Total Surface Area: ${totalSurfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Formulas:`);
        console.log(`   Slant Height: l = √(r² + h²) = √(${radius.toFixed(2)}² + ${height.toFixed(2)}²)`);
        console.log(`   Volume: (1/3)πr²h = (1/3)π(${radius.toFixed(2)})²(${height.toFixed(2)})`);
        console.log(`   Lateral Surface Area: πrl = π(${radius.toFixed(2)})(${slantHeight.toFixed(2)})`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cone graph
     */
    async saveIndividualCone(coneProps) {
        try {
            const buffer = await this.createConeGraph(coneProps);
            const { center, radius, height } = coneProps;

            const filename = `cone_${String(this.coneCounter).padStart(3, '0')}_center${center.x}_${center.y}_${center.z}_r${radius}_h${height}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cone graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cone graph:", error);
        }
    }

    /**
     * Create cone graph (2D projection)
     */
    async createConeGraph(coneProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCone(ctx, coneProps);

        return canvas.toBuffer("image/png");
    }
    
