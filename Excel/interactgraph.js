

/**
     * Display all available formulas with descriptions (UPDATED WITH NEW SHAPES)
     */
    displayAllFormulas() {
        console.log("\n" + "=".repeat(80));
        console.log("📊 COMPLETE MATHEMATICAL FORMULA REFERENCE");
        console.log("=".repeat(80));

        const categories = [
            {
                title: "📏 LINEAR FUNCTIONS (y = mx + c)",
                formulas: ["y=2x+3", "y=x+1", "y=-x+5", "y=0.5x-2", "y=3x"]
            },
            {
                title: "📈 QUADRATIC FUNCTIONS",
                formulas: ["y=x**2", "y=-x**2", "y=x**2+2x+1", "y=2x**2-4x+1", "y=-0.5x**2+3x-2"]
            },
            {
                title: "🔄 CUBIC & POLYNOMIAL FUNCTIONS",
                formulas: ["y=x**3", "y=x**3-3x**2+2x", "y=x**4-2x**2"]
            },
            {
                title: "📊 EXPONENTIAL FUNCTIONS",
                formulas: ["y=2**x", "y=0.5**x", "y=e**x", "y=e**(-x)", "y=2*e**(0.5x)"]
            },
            {
                title: "📉 LOGARITHMIC FUNCTIONS",
                formulas: ["y=log(x)", "y=log(x,2)", "y=log(x+1)", "y=-log(x)"]
            },
            {
                title: "🌊 TRIGONOMETRIC FUNCTIONS",
                formulas: ["y=sin(x)", "y=cos(x)", "y=tan(x)", "y=2sin(x)", "y=sin(2x)", "y=sin(x-pi/2)"]
            },
            {
                title: "🔄 INVERSE TRIG FUNCTIONS",
                formulas: ["y=asin(x)", "y=acos(x)", "y=atan(x)"]
            },
            {
                title: "📐 ABSOLUTE VALUE FUNCTIONS",
                formulas: ["y=abs(x)", "y=abs(x-2)", "y=abs(x)+abs(x-4)", "y=-abs(x)+3"]
            },
            {
                title: "√ SQUARE ROOT FUNCTIONS",
                formulas: ["y=sqrt(x)", "y=sqrt(x-1)", "y=-sqrt(x)", "y=2sqrt(x+3)"]
            },
            {
                title: "➗ RATIONAL FUNCTIONS",
                formulas: ["y=1/x", "y=1/(x-1)", "y=(x+1)/(x-2)", "y=x**2/(x**2+1)"]
            },
            {
                title: "🔺 2D GEOMETRY SHAPES",
                formulas: [
                    "triangle A(0,0) B(4,0) C(2,3)",
                    "circle center(0,0) radius 5",
                    "rectangle (0,0) 4 3",
                    "square (0,0) 4",
                    "parallelogram (0,0) 5 4 3",
                    "polygon 6 sides (0,0) 2",
                    "ellipse center(0,0) 5 3",
                    "quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)",
                    "trapezoid (0,0) 6 4 3"
                ]
            },
            {
                title: "🧊 3D GEOMETRY SHAPES",
                formulas: [
                    "sphere center(0,0,0) radius 5",
                    "cylinder center(0,0,0) radius 3 height 5",
                    "cone center(0,0,0) radius 3 height 5",
                    "cube (0,0,0) 4"
                ]
            },
            {
                title: "➡️  VECTOR OPERATIONS",
                formulas: [
                    "vector A(1,2) B(5,4)    → Displacement vector",
                    "vector <3,4>            → Component form",
                    "vectors A(1,1) B(4,3) C(6,5) → Multiple vectors",
                    "vector A(1,2,3) B(4,5,6) → 3D vector"
                ]
            },
            {
                title: "🔢 MATRIX TRANSFORMATIONS",
                formulas: [
                    "matrix [[1,2],[3,4]]    → Standard 2x2 matrix",
                    "matrix [1,2,3,4]        → Flat array notation",
                    "matrix 1 2 3 4          → Space separated",
                    "matrix rotation 45      → Rotation by 45°",
                    "matrix scale 2 3        → Scale transformation",
                    "matrix reflection x     → Reflection across x-axis"
                ]
            }
        ];

        categories.forEach(category => {
            console.log(`\n${category.title}`);
            console.log("-".repeat(50));
            category.formulas.forEach(formula => {
                if (formula.includes('→')) {
                    console.log(`${formula}`);
                } else {
                    const description = this.formulaDatabase[formula] || 
                        (formula.includes('triangle') ? "Triangle analysis" : 
                         formula.includes('circle') ? "Circle analysis" :
                         formula.includes('rectangle') ? "Rectangle analysis" :
                         formula.includes('square') ? "Square analysis" :
                         formula.includes('parallelogram') ? "Parallelogram analysis" :
                         formula.includes('polygon') ? "Polygon analysis" :
                         formula.includes('ellipse') ? "Ellipse analysis" :
                         formula.includes('quadrilateral') ? "Quadrilateral analysis" :
                         formula.includes('trapezoid') ? "Trapezoid analysis" :
                         formula.includes('sphere') ? "Sphere (3D) analysis" :
                         formula.includes('cylinder') ? "Cylinder (3D) analysis" :
                         formula.includes('cone') ? "Cone (3D) analysis" :
                         formula.includes('cube') ? "Cube (3D) analysis" :
                         formula.includes('vector') ? "Vector operation" :
                         formula.includes('matrix') ? "Matrix transformation" :
                         "Mathematical function");
                    console.log(`${formula.padEnd(40)} → ${description}`);
                }
            });
        });

        console.log("\n" + "=".repeat(80));
        console.log("📝 INPUT EXAMPLES:");
        console.log("");
        console.log("📈 EQUATIONS:");
        console.log("  • Linear:          y=2x+3, y=-0.5x+1, y=3x-2");
        console.log("  • Quadratic:       y=x**2+2x+1, y=-2x**2+4x");
        console.log("  • Exponential:     y=2**x, y=e**(-x)");
        console.log("  • Trigonometric:   y=sin(x), y=cos(2x), y=tan(x)");
        console.log("");
        console.log("🔺 2D GEOMETRY SHAPES:");
        console.log("  • Triangle:        triangle A(0,0) B(4,0) C(2,3)");
        console.log("  • Circle:          circle center(0,0) radius 5");
        console.log("  • Rectangle:       rectangle (0,0) 4 3");
        console.log("  • Square:          square (0,0) 4");
        console.log("  • Parallelogram:   parallelogram (0,0) 5 4 3");
        console.log("  • Polygon:         polygon 6 sides (0,0) 2");
        console.log("  • Ellipse:         ellipse center(0,0) 5 3");
        console.log("  • Quadrilateral:   quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
        console.log("  • Trapezoid:       trapezoid (0,0) 6 4 3");
        console.log("");
        console.log("🧊 3D GEOMETRY SHAPES:");
        console.log("  • Sphere:          sphere center(0,0,0) radius 5");
        console.log("  • Cylinder:        cylinder center(0,0,0) radius 3 height 5");
        console.log("  • Cone:            cone center(0,0,0) radius 3 height 5");
        console.log("  • Cube:            cube (0,0,0) 4");
        console.log("");
        console.log("➡️  VECTORS:");
        console.log("  • vector A(1,2) B(5,4)          → 2D displacement");
        console.log("  • vector <3,4>                  → Component form");
        console.log("  • vectors A(1,1) B(4,3) C(6,5)  → Multiple vectors");
        console.log("  • vector A(1,2,3) B(4,5,6)      → 3D vector");
        console.log("");
        console.log("🔢 MATRICES:");
        console.log("  • matrix [[1,2],[3,4]]          → Standard notation");
        console.log("  • matrix [1,2,3,4]              → Flat array (2x2)");
        console.log("  • matrix 1 0 0 1                → Identity matrix");
        console.log("  • matrix rotation 45            → 45° rotation");
        console.log("  • matrix scale 2 2              → Uniform scaling");
        console.log("");
        console.log("=".repeat(80));
        console.log("✨ FEATURES:");
        console.log("🎯 Each equation creates its own graph with coordinate points!");
        console.log("🔺 Complete geometric analysis for 2D shapes!");
        console.log("🧊 Full 3D shape analysis with projections!");
        console.log("➡️  Vector operations with magnitude, direction & operations!");
        console.log("🔢 Matrix transformations with before/after visualization!");
        console.log("📁 All visualizations saved to './temp/' folder");
        console.log("=".repeat(80));
    }

    /**
     * Display help menu (UPDATED WITH ALL NEW SHAPES)
     */
    displayHelp() {
        console.log("\n" + "=".repeat(70));
        console.log("🧮 GRAPHING CALCULATOR COMMANDS");
        console.log("=".repeat(70));
        
        console.log("\n📚 INFORMATION COMMANDS:");
        console.log("  📊 formulas  → Show all available mathematical formulas");
        console.log("  📜 history   → Show all history (equations, shapes, vectors, matrices)");
        console.log("  🔄 status    → Show current calculator status");
        console.log("  ❓ help      → Show this help menu");
        
        console.log("\n📈 GRAPHING COMMANDS:");
        console.log("  📈 graph     → Display current graph visualization");
        console.log("  💾 save      → Save current summary graph as PNG");
        console.log("  🎨 theme     → Change graph theme (standard/dark/scientific)");
        console.log("  📏 zoom      → Adjust viewing window (xmin xmax ymin ymax)");
        
        console.log("\n📋 HISTORY COMMANDS:");
        console.log("  📜 history   → Show all history");
        console.log("  🔺 triangles → Show triangle history");
        console.log("  ⭕ circles   → Show circle history");
        console.log("  ▭ rectangles → Show rectangle history");
        console.log("  ▢ squares    → Show square history");
        console.log("  ▱ parallelograms → Show parallelogram history");
        console.log("  ⬡ polygons   → Show polygon history");
        console.log("  ⬭ ellipses   → Show ellipse history");
        console.log("  ⬢ quadrilaterals → Show quadrilateral history");
        console.log("  ⏢ trapezoids → Show trapezoid history");
        console.log("  🌐 spheres   → Show sphere history");
        console.log("  🛢️ cylinders → Show cylinder history");
        console.log("  🔺 cones     → Show cone history");
        console.log("  🧊 cubes     → Show cube history");
        console.log("  ➡️  vectors   → Show vector history (alias: vhistory)");
        console.log("  🔢 matrices  → Show matrix history (alias: mhistory)");
        
        console.log("\n⚙️  SETTINGS COMMANDS:");
        console.log("  🎛️  vtoggle  → Toggle vector display options");
        console.log("  🎛️  mtoggle  → Toggle matrix display options");
        
        console.log("\n🗑️  MANAGEMENT COMMANDS:");
        console.log("  🗑️  clear    → Clear all items");
        console.log("  ⬅️  undo     → Remove last item");
        console.log("  🚪 quit     → Exit the calculator (alias: exit)");
        
        console.log("\n" + "=".repeat(70));
        console.log("📝 TO ADD ITEMS:");
        console.log("");
        console.log("  📈 EQUATION:  Just type it");
        console.log("     Examples: y=x**2, y=sin(x), y=2x+3");
        console.log("");
        console.log("  🔺 2D SHAPES:");
        console.log("     • Triangle:      triangle A(0,0) B(4,0) C(2,3)");
        console.log("     • Circle:        circle center(0,0) radius 5");
        console.log("     • Rectangle:     rectangle (0,0) 4 3");
        console.log("     • Square:        square (0,0) 4");
        console.log("     • Parallelogram: parallelogram (0,0) 5 4 3");
        console.log("     • Polygon:       polygon 6 sides (0,0) 2");
        console.log("     • Ellipse:       ellipse center(0,0) 5 3");
        console.log("     • Quadrilateral: quadrilateral A(0,0) B(4,0) C(5,3) D(1,3)");
        console.log("     • Trapezoid:     trapezoid (0,0) 6 4 3");
        console.log("");
        console.log("  🧊 3D SHAPES:");
        console.log("     • Sphere:        sphere center(0,0,0) radius 5");
        console.log("     • Cylinder:      cylinder center(0,0,0) radius 3 height 5");
        console.log("     • Cone:          cone center(0,0,0) radius 3 height 5");
        console.log("     • Cube:          cube (0,0,0) 4");
        console.log("");
        console.log("  ➡️  VECTOR:   vector A(x1,y1) B(x2,y2) or vector <x,y>");
        console.log("     Examples: vector A(1,2) B(5,4)");
        console.log("");
        console.log("  🔢 MATRIX:    matrix [values] or matrix [transformation]");
        console.log("     Examples: matrix [[1,2],[3,4]]");
        console.log("               matrix rotation 45");
        console.log("");
        console.log("=".repeat(70));
        console.log("✨ FEATURES:");
        console.log("  • Individual graphs with coordinate points marked");
        console.log("  • Complete geometric analysis for 2D & 3D shapes");
        console.log("  • Vector operations and visualizations");
        console.log("  • Matrix transformations with before/after views");
        console.log("  • All visualizations automatically saved to './temp/'");
        console.log("=".repeat(70));
    }

    /**
     * Get total item count
     */
    getTotalItemCount() {
        return this.equationCounter + this.triangleCounter + this.circleCounter + 
               this.rectangleCounter + this.squareCounter + this.parallelogramCounter +
               this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter +
               this.trapezoidCounter + this.sphereCounter + this.cylinderCounter +
               this.coneCounter + this.cubeCounter + this.vectorCounter + this.matrixCounter;
    }

    /**
     * Clear all items
     */
    clearAll() {
        this.calculator.clearEquations();
        this.equationHistory = [];
        this.triangleHistory = [];
        this.circleHistory = [];
        this.rectangleHistory = [];
        this.squareHistory = [];
        this.parallelogramHistory = [];
        this.polygonHistory = [];
        this.ellipseHistory = [];
        this.quadrilateralHistory = [];
        this.trapezoidHistory = [];
        this.sphereHistory = [];
        this.cylinderHistory = [];
        this.coneHistory = [];
        this.cubeHistory = [];
        this.vectorHistory = [];
        this.matrixHistory = [];
        
        this.equationCounter = 0;
        this.triangleCounter = 0;
        this.circleCounter = 0;
        this.rectangleCounter = 0;
        this.squareCounter = 0;
        this.parallelogramCounter = 0;
        this.polygonCounter = 0;
        this.ellipseCounter = 0;
        this.quadrilateralCounter = 0;
        this.trapezoidCounter = 0;
        this.sphereCounter = 0;
        this.cylinderCounter = 0;
        this.coneCounter = 0;
        this.cubeCounter = 0;
        this.vectorCounter = 0;
        this.matrixCounter = 0;
    }

/**
     * Display shape history helper
     */
    displayShapeHistory(shapeName, history) {
        const icons = {
            triangle: '🔺',
            circle: '⭕',
            rectangle: '▭',
            square: '▢',
            parallelogram: '▱',
            polygon: '⬡',
            ellipse: '⬭',
            quadrilateral: '⬢',
            trapezoid: '⏢',
            sphere: '🌐',
            cylinder: '🛢️',
            cone: '🔺',
            cube: '🧊'
        };

        console.log(`\n${icons[shapeName]} ${shapeName.charAt(0).toUpperCase() + shapeName.slice(1)} History:`);
        console.log("=".repeat(60));
        
        if (history.length === 0) {
            console.log(`No ${shapeName}s added yet.`);
        } else {
            history.forEach(item => {
                console.log(`  ${item.id}. ${item.input}`);
                const props = item.properties;
                if (props.area !== undefined) {
                    console.log(`     Area: ${props.area.toFixed(3)} sq units`);
                }
                if (props.volume !== undefined) {
                    console.log(`     Volume: ${props.volume.toFixed(3)} cubic units`);
                }
                if (props.perimeter !== undefined) {
                    console.log(`     Perimeter: ${props.perimeter.toFixed(3)} units`);
                } else if (props.circumference !== undefined) {
                    console.log(`     Circumference: ${props.circumference.toFixed(3)} units`);
                } else if (props.surfaceArea !== undefined) {
                    console.log(`     Surface Area: ${props.surfaceArea.toFixed(3)} sq units`);
                }
                console.log("");
            });
        }
        console.log("=".repeat(60));
    }

    /**
     * Undo last item (UPDATED)
     */
    undoLast() {
        if (this.getTotalItemCount() === 0) {
            console.log("❌ Nothing to undo!");
            return;
        }

        // Find the most recent item
        const lastIds = {
            equation: this.equationHistory.length > 0 ? parseInt(this.equationHistory[this.equationHistory.length - 1].split('.')[0]) : 0,
            triangle: this.triangleHistory.length > 0 ? this.triangleHistory[this.triangleHistory.length - 1].id : 0,
            circle: this.circleHistory.length > 0 ? this.circleHistory[this.circleHistory.length - 1].id : 0,
            rectangle: this.rectangleHistory.length > 0 ? this.rectangleHistory[this.rectangleHistory.length - 1].id : 0,
            square: this.squareHistory.length > 0 ? this.squareHistory[this.squareHistory.length - 1].id : 0,
            parallelogram: this.parallelogramHistory.length > 0 ? this.parallelogramHistory[this.parallelogramHistory.length - 1].id : 0,
            polygon: this.polygonHistory.length > 0 ? this.polygonHistory[this.polygonHistory.length - 1].id : 0,
            ellipse: this.ellipseHistory.length > 0 ? this.ellipseHistory[this.ellipseHistory.length - 1].id : 0,
            quadrilateral: this.quadrilateralHistory.length > 0 ? this.quadrilateralHistory[this.quadrilateralHistory.length - 1].id : 0,
            trapezoid: this.trapezoidHistory.length > 0 ? this.trapezoidHistory[this.trapezoidHistory.length - 1].id : 0,
            sphere: this.sphereHistory.length > 0 ? this.sphereHistory[this.sphereHistory.length - 1].id : 0,
            cylinder: this.cylinderHistory.length > 0 ? this.cylinderHistory[this.cylinderHistory.length - 1].id : 0,
            cone: this.coneHistory.length > 0 ? this.coneHistory[this.coneHistory.length - 1].id : 0,
            cube: this.cubeHistory.length > 0 ? this.cubeHistory[this.cubeHistory.length - 1].id : 0,
            vector: this.vectorHistory.length > 0 ? this.vectorHistory[this.vectorHistory.length - 1].id : 0,
            matrix: this.matrixHistory.length > 0 ? this.matrixHistory[this.matrixHistory.length - 1].id : 0
        };

        const maxId = Math.max(...Object.values(lastIds));

        if (maxId === lastIds.matrix && lastIds.matrix > 0) {
            const removed = this.matrixHistory.pop();
            this.matrixCounter--;
            console.log(`⬅️  Removed matrix: ${removed.input}`);
        } else if (maxId === lastIds.vector && lastIds.vector > 0) {
            const removed = this.vectorHistory.pop();
            this.vectorCounter--;
            console.log(`⬅️  Removed vector: ${removed.input}`);
        } else if (maxId === lastIds.cube && lastIds.cube > 0) {
            const removed = this.cubeHistory.pop();
            this.cubeCounter--;
            console.log(`⬅️  Removed cube: ${removed.input}`);
        } else if (maxId === lastIds.cone && lastIds.cone > 0) {
            const removed = this.coneHistory.pop();
            this.coneCounter--;
            console.log(`⬅️  Removed cone: ${removed.input}`);
        } else if (maxId === lastIds.cylinder && lastIds.cylinder > 0) {
            const removed = this.cylinderHistory.pop();
            this.cylinderCounter--;
            console.log(`⬅️  Removed cylinder: ${removed.input}`);
        } else if (maxId === lastIds.sphere && lastIds.sphere > 0) {
            const removed = this.sphereHistory.pop();
            this.sphereCounter--;
            console.log(`⬅️  Removed sphere: ${removed.input}`);
        } else if (maxId === lastIds.trapezoid && lastIds.trapezoid > 0) {
            const removed = this.trapezoidHistory.pop();
            this.trapezoidCounter--;
            console.log(`⬅️  Removed trapezoid: ${removed.input}`);
        } else if (maxId === lastIds.quadrilateral && lastIds.quadrilateral > 0) {
            const removed = this.quadrilateralHistory.pop();
            this.quadrilateralCounter--;
            console.log(`⬅️  Removed quadrilateral: ${removed.input}`);
        } else if (maxId === lastIds.ellipse && lastIds.ellipse > 0) {
            const removed = this.ellipseHistory.pop();
            this.ellipseCounter--;
            console.log(`⬅️  Removed ellipse: ${removed.input}`);
        } else if (maxId === lastIds.polygon && lastIds.polygon > 0) {
            const removed = this.polygonHistory.pop();
            this.polygonCounter--;
            console.log(`⬅️  Removed polygon: ${removed.input}`);
        } else if (maxId === lastIds.parallelogram && lastIds.parallelogram > 0) {
            const removed = this.parallelogramHistory.pop();
            this.parallelogramCounter--;
            console.log(`⬅️  Removed parallelogram: ${removed.input}`);
        } else if (maxId === lastIds.square && lastIds.square > 0) {
            const removed = this.squareHistory.pop();
            this.squareCounter--;
            console.log(`⬅️  Removed square: ${removed.input}`);
        } else if (maxId === lastIds.rectangle && lastIds.rectangle > 0) {
            const removed = this.rectangleHistory.pop();
            this.rectangleCounter--;
            console.log(`⬅️  Removed rectangle: ${removed.input}`);
        } else if (maxId === lastIds.circle && lastIds.circle > 0) {
            const removed = this.circleHistory.pop();
            this.circleCounter--;
            console.log(`⬅️  Removed circle: ${removed.input}`);
        } else if (maxId === lastIds.triangle && lastIds.triangle > 0) {
            const removed = this.triangleHistory.pop();
            this.triangleCounter--;
            console.log(`⬅️  Removed triangle: ${removed.input}`);
        } else if (this.equationHistory.length > 0) {
            const removed = this.equationHistory.pop();
            this.equationCounter--;
            console.log(`⬅️  Removed equation: ${removed}`);
        }
    }

    /**
     * Display current graph info (UPDATED WITH ALL SHAPES)
     */
    displayCurrentGraph() {
        console.log("\n🎨 GRAPH DISPLAY INFORMATION");
        console.log("=".repeat(70));
        
        console.log("\n📊 SUMMARY:");
        console.log(`  📈 Equations: ${this.equationCounter}`);
        console.log(`  🔺 Triangles: ${this.triangleCounter}`);
        console.log(`  ⭕ Circles: ${this.circleCounter}`);
        console.log(`  ▭ Rectangles: ${this.rectangleCounter}`);
        console.log(`  ▢ Squares: ${this.squareCounter}`);
        console.log(`  ▱ Parallelograms: ${this.parallelogramCounter}`);
        console.log(`  ⬡ Polygons: ${this.polygonCounter}`);
        console.log(`  ⬭ Ellipses: ${this.ellipseCounter}`);
        console.log(`  ⬢ Quadrilaterals: ${this.quadrilateralCounter}`);
        console.log(`  ⏢ Trapezoids: ${this.trapezoidCounter}`);
        console.log(`  🌐 Spheres: ${this.sphereCounter}`);
        console.log(`  🛢️ Cylinders: ${this.cylinderCounter}`);
        console.log(`  🔺 Cones: ${this.coneCounter}`);
        console.log(`  🧊 Cubes: ${this.cubeCounter}`);
        console.log(`  ➡️  Vectors: ${this.vectorCounter}`);
        console.log(`  🔢 Matrices: ${this.matrixCounter}`);
        console.log(`  📊 Total items: ${this.getTotalItemCount()}`);
        
        console.log("\n⚙️  SETTINGS:");
        console.log(`  🎨 Current theme: ${this.calculator.theme}`);
        console.log(`  📏 Viewing window: x[${this.calculator.xMin}, ${this.calculator.xMax}], y[${this.calculator.yMin}, ${this.calculator.yMax}]`);

        console.log("\n📁 INDIVIDUAL GRAPH FILES:");
        
        if (this.equationHistory.length > 0) {
            console.log("\n  📈 Equation Graphs:");
            this.equationHistory.forEach((eq, index) => {
                const filename = `equation_${String(index + 1).padStart(3, '0')}_${this.sanitizeFilename(eq.replace(/^\d+\.\s*/, ''))}.png`;
                console.log(`    • ${filename}`);
            });
        }

        const shapeTypes = [
            { name: 'Triangle', history: this.triangleHistory, icon: '🔺' },
            { name: 'Circle', history: this.circleHistory, icon: '⭕' },
            { name: 'Rectangle', history: this.rectangleHistory, icon: '▭' },
            { name: 'Square', history: this.squareHistory, icon: '▢' },
            { name: 'Parallelogram', history: this.parallelogramHistory, icon: '▱' },
            { name: 'Polygon', history: this.polygonHistory, icon: '⬡' },
            { name: 'Ellipse', history: this.ellipseHistory, icon: '⬭' },
            { name: 'Quadrilateral', history: this.quadrilateralHistory, icon: '⬢' },
            { name: 'Trapezoid', history: this.trapezoidHistory, icon: '⏢' },
            { name: 'Sphere', history: this.sphereHistory, icon: '🌐' },
            { name: 'Cylinder', history: this.cylinderHistory, icon: '🛢️' },
            { name: 'Cone', history: this.coneHistory, icon: '🔺' },
            { name: 'Cube', history: this.cubeHistory, icon: '🧊' }
        ];

        shapeTypes.forEach(shape => {
            if (shape.history.length > 0) {
                console.log(`\n  ${shape.icon} ${shape.name} Graphs:`);
                shape.history.forEach((item, index) => {
                    console.log(`    • ${shape.name.toLowerCase()}_${String(index + 1).padStart(3, '0')}_...png`);
                });
            }
        });

        if (this.vectorHistory.length > 0) {
            console.log("\n  ➡️  Vector Graphs:");
            this.vectorHistory.forEach((vec, index) => {
                console.log(`    • vector_${String(index + 1).padStart(3, '0')}_analysis.png`);
            });
        }

        if (this.matrixHistory.length > 0) {
            console.log("\n  🔢 Matrix Graphs:");
            this.matrixHistory.forEach((mat, index) => {
                const desc = mat.description ? ` (${mat.description})` : '';
                console.log(`    • matrix_${String(index + 1).padStart(3, '0')}_transformation.png${desc}`);
            });
        }

        if (this.getTotalItemCount() === 0) {
            console.log("\n  📝 No graphs generated yet.");
            console.log("  💡 Add equations, shapes, vectors, or matrices to generate visualizations!");
        }

        console.log("\n💡 TIPS:");
        console.log("  • Each equation creates its own detailed graph with marked points");
        console.log("  • Each 2D shape creates a complete geometric analysis");
        console.log("  • Each 3D shape creates a projection view with all properties");
        console.log("  • Each vector creates a visual analysis with all operations");
        console.log("  • Each matrix creates a before/after transformation view");
        console.log("  • Domain & Range automatically displayed on all graphs");
        console.log("  • All files are saved automatically in './temp/' folder");
        console.log("  • Use 'formulas' to see all available input formats");
        console.log("=".repeat(70));
    }

    /**
     * Get current calculator status (UPDATED)
     */
    getCalculatorStatus() {
        const total = this.getTotalItemCount();
        return `📊 Status | Total: ${total} | Eq: ${this.equationCounter} | 2D: ${this.triangleCounter + this.circleCounter + this.rectangleCounter + this.squareCounter + this.parallelogramCounter + this.polygonCounter + this.ellipseCounter + this.quadrilateralCounter + this.trapezoidCounter} | 3D: ${this.sphereCounter + this.cylinderCounter + this.coneCounter + this.cubeCounter} | Vec: ${this.vectorCounter} | Mat: ${this.matrixCounter}`;
    }

    /**
     * Change theme
     */
    changeTheme(themeName) {
        const themes = {
            'standard': Theme.Standard,
            'dark': Theme.Dark,
            'scientific': Theme.Scientific
        };

        if (themes[themeName]) {
            this.calculator = new GraphingCalculator({
                size: this.calculator.width,
                theme: themes[themeName],
                xMin: this.calculator.xMin,
                xMax: this.calculator.xMax,
                yMin: this.calculator.yMin,
                yMax: this.calculator.yMax,
                showGrid: this.calculator.showGrid,
                showAxes: this.calculator.showAxes
            });
            return true;
        }
        return false;
    }

    /**
     * Set viewing window
     */
    setViewingWindow(xMin, xMax, yMin, yMax) {
        if (xMin >= xMax || yMin >= yMax) {
            return false;
        }

        this.calculator = new GraphingCalculator({
            size: this.calculator.width,
            theme: this.calculator.theme,
            xMin,
            xMax,
            yMin,
            yMax,
            showGrid: this.calculator.showGrid,
            showAxes: this.calculator.showAxes
        });
        return true;
    }

}

export { GraphingCalculator, GraphingCalculatorGame,Theme };
c
