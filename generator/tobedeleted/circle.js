

generateRelatedCirclesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Circle Circumference',
        problem: 'A circle has radius 7 cm. Find its circumference and diameter.',
        parameters: { radius: 7, find: 'circumference' },
        type: 'circles',
        subparts: [
            'Given: radius r = 7 cm',
            'Step 1: Find diameter',
            'Diameter d = 2 × radius = 2 × 7 = 14 cm',
            'Step 2: Find circumference',
            'Formula: C = 2πr (or C = πd)',
            'C = 2π(7) = 14π cm',
            'As decimal (using π ≈ 3.14159):',
            'C ≈ 14 × 3.14159',
            'C ≈ 43.98 cm',
            'Alternative using diameter: C = πd = π(14) = 14π cm ✓'
        ],
        helper: 'Circumference formulas: C = 2πr or C = πd (where d = 2r). Remember π ≈ 3.14159',
        solution: 'Diameter = 14 cm, Circumference = 14π ≈ 43.98 cm',
        realWorldContext: 'Distance around circular objects like wheels, pipes, circular tracks',
        diagramInfo: {
            type: 'circle',
            registryKey: 'circle',
            renderOptions: {
                radius: 70,
                centerX: 0,
                centerY: 0,
                fillColor: '#FFF9C4',
                strokeColor: '#F57C00',
                strokeWidth: 2,
                showCenter: true,
                showRadius: true,
                showDiameter: true,
                showMeasurements: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const ctx = canvas.getContext('2d');
                const renderer = new GeometricShapeRenderer(canvas, ctx);

                renderer.renderShape(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `circle_circumference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Circle Area',
        problem: 'A circle has diameter 10 cm. Find its radius, area, and circumference.',
        parameters: { diameter: 10, find: 'area_and_more' },
        type: 'circles',
        subparts: [
            'Given: diameter d = 10 cm',
            'Step 1: Find radius',
            'Radius r = d/2 = 10/2 = 5 cm',
            'Step 2: Find area',
            'Formula: A = πr²',
            'A = π(5)² = 25π cm²',
            'As decimal: A ≈ 25 × 3.14159 ≈ 78.54 cm²',
            'Step 3: Find circumference',
            'C = πd = π(10) = 10π cm',
            'C ≈ 31.42 cm',
            'Summary: r = 5 cm, A = 25π cm², C = 10π cm'
        ],
        helper: 'Area: A = πr². Start by finding radius from diameter: r = d/2. Circumference: C = πd',
        solution: 'Radius = 5 cm, Area = 25π ≈ 78.54 cm², Circumference = 10π ≈ 31.42 cm',
        realWorldContext: 'Calculating area of circular regions like pizza, gardens, pools',
        diagramInfo: {
            type: 'circle',
            registryKey: 'circle',
            renderOptions: {
                radius: 50,
                centerX: 0,
                centerY: 0,
                fillColor: '#E8F5E9',
                strokeColor: '#388E3C',
                strokeWidth: 2,
                showCenter: true,
                showRadius: true,
                showDiameter: true,
                showMeasurements: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const ctx = canvas.getContext('2d');
                const renderer = new GeometricShapeRenderer(canvas, ctx);

                renderer.renderShape(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `circle_area_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Arc Length and Sector Area',
        problem: 'A circle has radius 8 cm. Find: (a) the length of an arc subtending 60° at center, (b) the area of the corresponding sector.',
        parameters: { radius: 8, angle: 60, find: 'arc_and_sector' },
        type: 'circles',
        subparts: [
            'Given: radius r = 8 cm, central angle θ = 60°',
            'Part (a): Arc length',
            'Formula: L = (θ/360°) × 2πr',
            'L = (60/360) × 2π(8)',
            'L = (1/6) × 16π',
            'L = (16π/6) = (8π/3) cm',
            'L ≈ 8.38 cm',
            'Part (b): Sector area',
            'Formula: A = (θ/360°) × πr²',
            'A = (60/360) × π(8)²',
            'A = (1/6) × 64π',
            'A = (64π/6) = (32π/3) cm²',
            'A ≈ 33.51 cm²',
            'Note: 60° = 1/6 of full circle (360°)',
            'So arc = 1/6 of circumference, sector = 1/6 of area'
        ],
        helper: 'Arc length: L = (θ/360°) × 2πr. Sector area: A = (θ/360°) × πr². Think: what fraction of the full circle?',
        solution: 'Arc length = 8π/3 ≈ 8.38 cm, Sector area = 32π/3 ≈ 33.51 cm²',
        realWorldContext: 'Curved paths, pie charts, pizza slices, circular sectors in design',
        diagramInfo: {
            type: 'circle',
            registryKey: 'circle',
            renderOptions: {
                radius: 80,
                centerX: 0,
                centerY: 0,
                fillColor: '#E3F2FD',
                strokeColor: '#1976D2',
                strokeWidth: 2,
                showCenter: true,
                showRadius: true,
                showDiameter: false,
                showMeasurements: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const ctx = canvas.getContext('2d');
                const renderer = new GeometricShapeRenderer(canvas, ctx);

                renderer.renderShape(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `circle_arc_sector_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Finding Radius from Circumference',
        problem: 'A circular track has a circumference of 400 meters. Find its radius and area.',
        parameters: { circumference: 400, find: 'radius_and_area' },
        type: 'circles',
        subparts: [
            'Given: Circumference C = 400 m',
            'Step 1: Find radius from circumference',
            'Formula: C = 2πr',
            '400 = 2πr',
            'r = 400/(2π) = 200/π',
            'r ≈ 200/3.14159 ≈ 63.66 m',
            'Step 2: Calculate area',
            'A = πr²',
            'A = π(200/π)²',
            'A = π × (40000/π²)',
            'A = 40000/π',
            'A ≈ 12732.40 m²',
            'Check: C = 2πr = 2π(200/π) = 400 m ✓'
        ],
        helper: 'To find radius from circumference: r = C/(2π). Then use A = πr² for area',
        solution: 'Radius = 200/π ≈ 63.66 m, Area = 40000/π ≈ 12732.40 m²',
        realWorldContext: 'Running tracks, circular roads, roundabouts',
        diagramInfo: {
            type: 'circle',
            registryKey: 'circle',
            renderOptions: {
                radius: 64,
                centerX: 0,
                centerY: 0,
                fillColor: '#F3E5F5',
                strokeColor: '#7B1FA2',
                strokeWidth: 3,
                showCenter: true,
                showRadius: true,
                showDiameter: false,
                showMeasurements: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const ctx = canvas.getContext('2d');
                const renderer = new GeometricShapeRenderer(canvas, ctx);

                renderer.renderShape(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `circle_from_circumference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Concentric Circles - Ring Area',
        problem: 'Two concentric circles have radii of 5 cm (inner) and 8 cm (outer). Find the area of the ring between them.',
        parameters: { inner_radius: 5, outer_radius: 8, find: 'ring_area' },
        type: 'circles',
        subparts: [
            'Given: Inner circle radius r₁ = 5 cm, Outer circle radius r₂ = 8 cm',
            'Ring area = Area of outer circle - Area of inner circle',
            'Step 1: Calculate outer circle area',
            'A₂ = πr₂² = π(8)² = 64π cm²',
            'A₂ ≈ 201.06 cm²',
            'Step 2: Calculate inner circle area',
            'A₁ = πr₁² = π(5)² = 25π cm²',
            'A₁ ≈ 78.54 cm²',
            'Step 3: Find ring area',
            'Ring area = A₂ - A₁',
            '= 64π - 25π',
            '= 39π cm²',
            '≈ 122.52 cm²',
            'Alternative formula: Ring area = π(r₂² - r₁²)',
            '= π(64 - 25) = π(39) = 39π cm²'
        ],
        helper: 'Ring area = Area of outer circle - Area of inner circle = π(R² - r²) where R > r',
        solution: 'Ring area = 39π ≈ 122.52 cm²',
        realWorldContext: 'Washers, circular borders, annular regions in engineering',
        diagramInfo: {
            type: 'circle',
            registryKey: 'circle',
            renderOptions: {
                radius: 80,
                centerX: 0,
                centerY: 0,
                fillColor: '#FFEBEE',
                strokeColor: '#C62828',
                strokeWidth: 2,
                showCenter: true,
                showRadius: true,
                showDiameter: false,
                showMeasurements: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const ctx = canvas.getContext('2d');
                const renderer = new GeometricShapeRenderer(canvas, ctx);

                renderer.renderShape(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = canvas.toBuffer('image/png');
                const filename = `circle_ring_area_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                return {
                    success: true,
                    filename: filename,
                    path: `./${filename}`
                };
            } catch (error) {
                return {
                    success: false,
                    error: error.message
                };
            }
        }
    });

    return relatedProblems;
}

const EndSection3 = "close";