

// ==================== POLYGON METHODS ====================
    
    /**
     * Parse polygon input
     */
    parsePolygonInput(input) {
        // Pattern 1: polygon n sides (x,y) side
        const pattern1 = /polygon\s*(\d+)\s*sides\s*\(([^,]+),([^)]+)\)\s*([^\s]+)/i;
        const match1 = input.match(pattern1);
        if (match1) {
            return {
                n: parseInt(match1[1]),
                center: { x: parseFloat(match1[2]), y: parseFloat(match1[3]) },
                side: parseFloat(match1[4])
            };
        }

        // Pattern 2: polygon n,x,y,side
        const pattern2 = /polygon\s*(\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+),([-+]?\d*\.?\d+)/i;
        const match2 = input.match(pattern2);
        if (match2) {
            return {
                n: parseInt(match2[1]),
                center: { x: parseFloat(match2[2]), y: parseFloat(match2[3]) },
                side: parseFloat(match2[4])
            };
        }

        return null;
    }

    /**
     * Calculate polygon properties
     */
    calculatePolygonProperties(n, center, side) {
        // Calculate radius (circumradius) from side length
        const radius = side / (2 * Math.sin(Math.PI / n));
        
        // Calculate area
        const area = (n * side * side) / (4 * Math.tan(Math.PI / n));
        
        // Calculate perimeter
        const perimeter = n * side;
        
        // Calculate interior angle
        const interiorAngle = ((n - 2) * 180) / n;
        
        // Calculate exterior angle
        const exteriorAngle = 360 / n;

        // Calculate vertices
        const vertices = [];
        for (let i = 0; i < n; i++) {
            const angle = (2 * Math.PI * i) / n - Math.PI / 2; // Start from top
            vertices.push({
                x: center.x + radius * Math.cos(angle),
                y: center.y + radius * Math.sin(angle)
            });
        }

        return {
            n,
            center,
            side,
            radius,
            area,
            perimeter,
            interiorAngle,
            exteriorAngle,
            vertices
        };
    }

    /**
     * Add polygon
     */
    addPolygon(input) {
        const polyData = this.parsePolygonInput(input);

        if (!polyData) {
            console.log("❌ Invalid polygon format!");
            console.log("💡 Examples:");
            console.log("  • polygon 5 sides (0,0) 2");
            console.log("  • polygon 6,1,1,3");
            return false;
        }

        const { n, center, side } = polyData;

        if (isNaN(center.x) || isNaN(center.y) || isNaN(side) || side <= 0 || n < 3) {
            console.log("❌ Invalid values! Side must be positive and n must be at least 3.");
            return false;
        }

        const polyProps = this.calculatePolygonProperties(n, center, side);

        this.polygonCounter++;
        this.polygonHistory.push({
            id: this.polygonCounter,
            input: input,
            properties: polyProps
        });

        this.displayPolygonAnalysis(polyProps);
        this.saveIndividualPolygon(polyProps);

        return true;
    }

    /**
     * Display polygon analysis
     */
    displayPolygonAnalysis(props) {
        const { n, center, side, radius, area, perimeter, interiorAngle, exteriorAngle } = props;

        const polygonNames = {
            3: "Triangle", 4: "Quadrilateral", 5: "Pentagon", 6: "Hexagon",
            7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon",
            11: "Hendecagon", 12: "Dodecagon"
        };
        const name = polygonNames[n] || `${n}-gon`;

        console.log(`\n⬡ ${n}-SIDED POLYGON (${name.toUpperCase()}) ANALYSIS`);
        console.log("=".repeat(50));

        console.log(`📍 Center: (${center.x}, ${center.y})`);
        console.log(`   Number of sides: ${n}`);

        console.log(`\n📏 Measurements:`);
        console.log(`   Side length: ${side.toFixed(3)} units`);
        console.log(`   Radius (circumradius): ${radius.toFixed(3)} units`);
        console.log(`   Area: ${area.toFixed(3)} square units`);
        console.log(`   Perimeter: ${perimeter.toFixed(3)} units`);

        console.log(`\n📐 Angles:`);
        console.log(`   Interior angle: ${interiorAngle.toFixed(1)}°`);
        console.log(`   Exterior angle: ${exteriorAngle.toFixed(1)}°`);
        console.log(`   Sum of interior angles: ${((n - 2) * 180).toFixed(1)}°`);

        console.log(`\n📊 Properties:`);
        console.log(`   Regular ${name.toLowerCase()} (all sides and angles equal)`);
        console.log(`   ${n} lines of symmetry`);
        console.log(`   Rotational symmetry of order ${n}`);

        console.log("=".repeat(50));
    }

    /**
     * Save individual polygon graph
     */
    async saveIndividualPolygon(polyProps) {
        try {
            const buffer = await this.createPolygonGraph(polyProps);
            const { n, center, side } = polyProps;

            const filename = `polygon_${String(this.polygonCounter).padStart(3, '0')}_${n}sides_${center.x}_${center.y}_s${side}.png`;
            const filepath = path.join('./temp', filename);

            if (!fs.existsSync('./temp')) {
                fs.mkdirSync('./temp', { recursive: true });
            }

            fs.writeFileSync(filepath, buffer);
            console.log(`💾 Polygon graph saved: ${filename}`);
        } catch (error) {
            console.error("❌ Error saving polygon graph:", error);
        }
    }

    /**
     * Create polygon graph
     */
    async createPolygonGraph(polyProps) {
        const canvas = createCanvas(this.calculator.width, this.calculator.height);
        const ctx = canvas.getContext("2d");

        await this.calculator.drawGraph(ctx);
        this.drawPolygon(ctx, polyProps);

        return canvas.toBuffer("image/png");
    }

    /**
     * Draw polygon
     */
    drawPolygon(ctx, polyProps) {
        const { n, vertices, center, side, area, perimeter, interiorAngle, radius } = polyProps;

        const screenVertices = vertices.map(v => this.calculator.graphToScreen(v.x, v.y));
        const screenCenter = this.calculator.graphToScreen(center.x, center.y);

        // Draw polygon
        ctx.strokeStyle = '#ff0000';
        ctx.lineWidth = 3;
        ctx.beginPath();
        ctx.moveTo(screenVertices[0][0], screenVertices[0][1]);
        for (let i = 1; i < screenVertices.length; i++) {
            ctx.lineTo(screenVertices[i][0], screenVertices[i][1]);
        }
        ctx.closePath();
        ctx.stroke();

        // Draw radius lines
        ctx.strokeStyle = '#00aa00';
        ctx.lineWidth = 1;
        ctx.setLineDash([5, 5]);
        screenVertices.forEach(screen => {
            ctx.beginPath();
            ctx.moveTo(screenCenter[0], screenCenter[1]);
            ctx.lineTo(screen[0], screen[1]);
            ctx.stroke();
        });
        ctx.setLineDash([]);

        // Draw center
        ctx.fillStyle = '#0066ff';
        ctx.beginPath();
        ctx.arc(screenCenter[0], screenCenter[1], 5, 0, 2 * Math.PI);
        ctx.fill();

        // Draw vertices
        screenVertices.forEach(screen => {
            ctx.fillStyle = '#ff6600';
            ctx.beginPath();
            ctx.arc(screen[0], screen[1], 4, 0, 2 * Math.PI);
            ctx.fill();
        });

        const polygonNames = {
            3: "Triangle", 4: "Quadrilateral", 5: "Pentagon", 6: "Hexagon",
            7: "Heptagon", 8: "Octagon", 9: "Nonagon", 10: "Decagon"
        };
        const name = polygonNames[n] || `${n}-gon`;

        // Title and properties
        ctx.fillStyle = 'black';
        ctx.font = 'bold 16px Arial';
        ctx.textAlign = 'left';
        ctx.fillText(`Regular ${name} (${n} sides)`, 10, 25);

        ctx.font = '12px Arial';
        const props = [
            `Side: ${side.toFixed(2)} units`,
            `Radius: ${radius.toFixed(2)} units`,
            `Area: ${area.toFixed(2)} sq units`,
            `Perimeter: ${perimeter.toFixed(2)} units`,
            `Interior angle: ${interiorAngle.toFixed(1)}°`
        ];

        props.forEach((prop, index) => {
            ctx.fillText(prop, 10, 50 + index * 15);
        });
    }
    
