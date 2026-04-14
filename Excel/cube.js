
    // ==================== CUBE METHODS ====================
    
    /**
     * Parse cube input
     */
    parseCubeInput(input) {
        // Pattern 1: cube (x,y,z) side
        const pattern1 = /cube\s*\(([^,]+),([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                corner: { x: parseFloat(match1[1]), y: parseFloat(match1[2]), z: parseFloat(match1[3]) },
                side: parseFloat(match1[4])
            };
        }

        // Pattern 2: cube x,y,z,side
        const pattern2 = /cube\s*([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                corner: { x: parseFloat(match2[1]), y: parseFloat(match2[2]), z: parseFloat(match2[3]) },
                side: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate cube properties
     */
    calculateCubeProperties(corner, side) {
        const surfaceArea = 6 * side * side;
        const volume = side * side * side;
        const spaceDiagonal = side * Math.sqrt(3);
        const faceDiagonal = side * Math.sqrt(2);

        return {
            corner,
            side,
            surfaceArea,
            volume,
            spaceDiagonal,
            faceDiagonal
        };
    }

  
    addCube(input) {
        const cubeData = this.parseCubeInput(input);

        if (!cubeData) {
            console.log("❌ Invalid cube format!");
            console.log("💡 Examples:");
            console.log("  • cube (0,0,0) 4");
            console.log("  • cube 1,1,1,3");
            return false;
        }

        const { corner, side } = cubeData;

        if (isNaN(corner.x) || isNaN(corner.y) || isNaN(corner.z) || isNaN(side) || side <= 0) {
            console.log("❌ Invalid values! Side must be positive.");
            return false;
        }

        const cubeProps = this.calculateCubeProperties(corner, side);

        this.cubeCounter++;
        this.cubeHistory.push({
            id: this.cubeCounter,
            input: input,
            properties: cubeProps
        });

        this.displayCubeAnalysis(cubeProps);
        this.saveIndividualCube(cubeProps);

        return true;
    }

    /**
     * Display cube analysis
     */
    displayCubeAnalysis(props) {
        const { corner, side, surfaceArea, volume, spaceDiagonal, faceDiagonal } = props;

        console.log(`\n🧊 CUBE ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Corner: (${corner.x}, ${corner.y}, ${corner.z})`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side: ${side.toFixed(3)} units`);
        console.log(`   Face Diagonal: ${faceDiagonal.toFixed(3)} units (${side.toFixed(2)}√2)`);
        console.log(`   Space Diagonal: ${spaceDiagonal.toFixed(3)} units (${side.toFixed(2)}√3)`);
        console.log(`   Surface Area: ${surfaceArea.toFixed(3)} square units`);
        console.log(`   Volume: ${volume.toFixed(3)} cubic units`);

        console.log(`\n📊 Properties:`);
        console.log(`   6 square faces`);
        console.log(`   12 edges (all equal)`);
        console.log(`   8 vertices`);
        console.log(`   All angles are 90°`);

        console.log(`\n📐 Formulas:`);
        console.log(`   Surface Area: 6s² = 6(${side.toFixed(2)})²`);
        console.log(`   Volume: s³ = (${side.toFixed(2)})³`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual cube graph
     */
    async saveIndividualCube(cubeProps) {
        try {
            const buffer = await this.createCubeGraph(cubeProps);
            const { corner, side } = cubeProps;

            const filename = `cube_${String(this.cubeCounter).padStart(3, '0')}_corner${corner.x}_${corner.y}_${corner.z}_side${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Cube graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving cube graph:", error);
        }
    }

    /**
     * Create cube graph (isometric projection)
     */
    async createCubeGraph(cubeProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawCube(ctx, cubeProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw cube (as isometric projection)
     */
    drawCube(ctx, cubeProps) {
        const { corner, side, surfaceArea, volume, spaceDiagonal } = cubeProps;

        // Project to 2D (isometric view)
        const screenCorner = this.calculator.graphToScreen(corner.x, corner.y);
        const screenSide = Math.abs(this.calculator.graphToScreen(side, 0)[0] - this.calculator.graphToScreen(0, 0)[0]);

        // Isometric projection angles
        const isoX = screenSide * Math.cos(Math.PI / 6);
        const isoY = screenSide * Math.sin(Math.PI / 6);
        const isoZ = screenSide;

        // Calculate 8 vertices of the cube in isometric projection
        const x = screenCorner[0];
        const y = screenCorner[1];

        const vertices = {
            // Front face (bottom)
            v1: [x, y],
            v2: [x + isoX, y - isoY],
            v3: [x + isoX, y - isoY - isoZ],
            v4: [x, y - isoZ],
            // Back face (top)
            v5: [x - isoX, y - isoY],
            v6: [x, y - 2 * isoY],
            v7: [x, y - 2 * isoY - isoZ],
            v8: [x - isoX, y - isoY - isoZ]
        };

        // Draw cube edges
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;

        // Front face
        ctx.beginPath();
        ctx.moveTo(vertices.v1[0], vertices.v1[1]);
        ctx.lineTo(vertices.v2[0], vertices.v2[1]);
        ctx.lineTo(vertices.v3[0], vertices.v3[1]);
        ctx.lineTo(vertices.v4[0], vertices.v4[1]);
        ctx.closePath();
        ctx.stroke();

        // Back face
        ctx.beginPath();
        ctx.moveTo(vertices.v5[0], vertices.v5[1]);
        ctx.lineTo(vertices.v6[0], vertices.v6[1]);
        ctx.lineTo(vertices.v7[0], vertices.v7[1]);
        ctx.lineTo(vertices.v8[0], vertices.v8[1]);
        ctx.closePath();
        ctx.stroke();

        // Connecting edges
        ctx.beginPath();
        ctx.moveTo(vertices.v1[0], vertices.v1[1]);
        ctx.lineTo(vertices.v5[0], vertices.v5[1]);
        ctx.moveTo(vertices.v2[0], vertices.v2[1]);
        ctx.lineTo(vertices.v6[0], vertices.v6[1]);
        ctx.moveTo(vertices.v3[0], vertices.v3[1]);
        ctx.lineTo(vertices.v7[0], vertices.v7[1]);
        ctx.moveTo(vertices.v4[0], vertices.v4[1]);
        ctx.lineTo(vertices.v8[0], vertices.v8[1]);
        ctx.stroke();

        // Draw vertices
        Object.values(vertices).forEach(v => {
            ctx.fillStyle = '#0066ff';
            ctx.beginPath();
            ctx.arc(v[0], v[1], 4, 0, 2 * Math.PI);
            ctx.fill();
        });

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Cube (3D)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Corner: (${corner.x}, ${corner.y}, ${corner.z})`,
            `Side: ${side.toFixed(2)} units`,
            `Space Diagonal: ${spaceDiagonal.toFixed(2)} units`,
            `Surface Area: ${surfaceArea.toFixed(2)} sq units`,
            `Volume: ${volume.toFixed(2)} cubic units`,
            `[Isometric projection shown]`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
