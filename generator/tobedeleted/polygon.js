

generateRelatedPolygonDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Regular Pentagon',
        problem: 'A regular pentagon has all sides equal to 6 cm. Find the sum of its interior angles and each interior angle measure.',
        parameters: { shape: 'polygon', sides: 5, sideLength: 6 },
        type: 'polygon',
        subparts: [
            'Given: Regular pentagon with 5 equal sides of 6 cm each',
            'Step 1: Find sum of interior angles',
            'Formula: Sum = (n - 2) × 180° where n = number of sides',
            'Sum = (5 - 2) × 180°',
            'Sum = 3 × 180° = 540°',
            'Step 2: Find each interior angle',
            'For regular polygon, all angles are equal',
            'Each angle = Sum / n = 540° / 5 = 108°',
            'Step 3: Calculate perimeter',
            'Perimeter = n × side = 5 × 6 = 30 cm',
            'Verification: 5 angles × 108° = 540° ✓'
        ],
        helper: 'Interior angle sum: (n-2) × 180°. For regular polygon: each angle = sum/n. Perimeter = n × side',
        solution: 'Sum of angles = 540°, Each angle = 108°, Perimeter = 30 cm',
        realWorldContext: 'Pentagon building, regular geometric patterns, nuts and bolts',
        diagramInfo: {
            type: 'polygon',
            registryKey: 'polygon',
            renderOptions: {
                sides: 5,
                sideLength: 60,
                fillColor: '#FFF3E0',
                strokeColor: '#E65100',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
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
                const filename = `polygon_pentagon_${Date.now()}.png`;
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
        scenario: 'Regular Hexagon',
        problem: 'A regular hexagon has side length 8 cm. Find: (a) perimeter, (b) sum of interior angles, (c) each interior angle, (d) each exterior angle.',
        parameters: { shape: 'polygon', sides: 6, sideLength: 8 },
        type: 'polygon',
        subparts: [
            'Given: Regular hexagon with 6 equal sides of 8 cm',
            'Part (a): Perimeter',
            'P = 6 × 8 = 48 cm',
            'Part (b): Sum of interior angles',
            'Sum = (n - 2) × 180° = (6 - 2) × 180°',
            'Sum = 4 × 180° = 720°',
            'Part (c): Each interior angle',
            'Each = 720° / 6 = 120°',
            'Part (d): Each exterior angle',
            'Method 1: Exterior = 180° - interior = 180° - 120° = 60°',
            'Method 2: Sum of exteriors = 360° (always!)',
            'Each exterior = 360° / 6 = 60° ✓',
            'Note: Interior + Exterior = 180° (linear pair)'
        ],
        helper: 'Interior sum = (n-2) × 180°. Each interior = sum/n. Exterior angle = 180° - interior, or 360°/n',
        solution: 'Perimeter = 48 cm, Angle sum = 720°, Interior angle = 120°, Exterior angle = 60°',
        realWorldContext: 'Hexagonal tiles, honeycomb patterns, nuts',
        diagramInfo: {
            type: 'polygon',
            registryKey: 'polygon',
            renderOptions: {
                sides: 6,
                sideLength: 50,
                fillColor: '#FFF9C4',
                strokeColor: '#F57F17',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
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
                const filename = `polygon_hexagon_${Date.now()}.png`;
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
        scenario: 'Regular Octagon',
        problem: 'A stop sign is a regular octagon with side length 30 cm. Find all angle measures and the perimeter. If you know each exterior angle is 45°, verify this is correct.',
        parameters: { shape: 'polygon', sides: 8, sideLength: 30 },
        type: 'polygon',
        subparts: [
            'Given: Regular octagon with 8 sides of 30 cm each',
            'Step 1: Calculate perimeter',
            'P = 8 × 30 = 240 cm',
            'Step 2: Find sum of interior angles',
            'Sum = (n - 2) × 180° = (8 - 2) × 180°',
            'Sum = 6 × 180° = 1080°',
            'Step 3: Find each interior angle',
            'Each interior = 1080° / 8 = 135°',
            'Step 4: Find each exterior angle',
            'Method 1: 180° - 135° = 45°',
            'Method 2: 360° / 8 = 45° ✓',
            'Step 5: Verify given exterior angle',
            'Given: exterior = 45°',
            'Calculated: exterior = 45° ✓ CORRECT!',
            'Double check: 135° + 45° = 180° (linear pair) ✓'
        ],
        helper: 'For n-sided polygon: Interior sum = (n-2) × 180°, Each interior = sum/n, Exterior = 360°/n',
        solution: 'Perimeter = 240 cm, Interior angle = 135°, Exterior angle = 45° (verification correct!)',
        realWorldContext: 'Stop signs, octagonal designs, architectural features',
        diagramInfo: {
            type: 'polygon',
            registryKey: 'polygon',
            renderOptions: {
                sides: 8,
                sideLength: 45,
                fillColor: '#FFEBEE',
                strokeColor: '#C62828',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
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
                const filename = `polygon_octagon_${Date.now()}.png`;
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
        scenario: 'Finding Number of Sides',
        problem: 'A regular polygon has each interior angle measuring 140°. How many sides does it have?',
        parameters: { shape: 'polygon', interior_angle: 140, find: 'sides' },
        type: 'polygon',
        subparts: [
            'Given: Regular polygon with each interior angle = 140°',
            'Step 1: Find exterior angle',
            'Interior + Exterior = 180° (linear pair)',
            'Exterior = 180° - 140° = 40°',
            'Step 2: Use exterior angle to find number of sides',
            'Sum of all exterior angles = 360° (always)',
            'Number of sides = 360° / exterior angle',
            'n = 360° / 40° = 9',
            'Step 3: Verify using interior angle formula',
            'Each interior = [(n - 2) × 180°] / n',
            '140 = [(9 - 2) × 180] / 9',
            '140 = [7 × 180] / 9',
            '140 = 1260 / 9',
            '140 = 140 ✓',
            'Answer: The polygon has 9 sides (nonagon)'
        ],
        helper: 'To find sides from interior angle: (1) Find exterior = 180° - interior, (2) Sides = 360° / exterior',
        solution: 'The polygon has 9 sides (nonagon)',
        realWorldContext: 'Identifying polygon types from angle measurements',
        diagramInfo: {
            type: 'polygon',
            registryKey: 'polygon',
            renderOptions: {
                sides: 9,
                sideLength: 50,
                fillColor: '#E1F5FE',
                strokeColor: '#0277BD',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
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
                const filename = `polygon_nonagon_${Date.now()}.png`;
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
        scenario: 'Decagon Properties',
        problem: 'A regular decagon (10 sides) has perimeter 80 cm. Find: (a) side length, (b) sum of interior angles, (c) each interior and exterior angle.',
        parameters: { shape: 'polygon', sides: 10, perimeter: 80 },
        type: 'polygon',
        subparts: [
            'Given: Regular decagon (10 sides) with perimeter = 80 cm',
            'Part (a): Find side length',
            'Perimeter = number of sides × side length',
            '80 = 10 × s',
            's = 80/10 = 8 cm',
            'Part (b): Sum of interior angles',
            'Sum = (n - 2) × 180° = (10 - 2) × 180°',
            'Sum = 8 × 180° = 1440°',
            'Part (c): Each interior angle',
            'Each interior = Sum / n = 1440° / 10 = 144°',
            'Each exterior angle',
            'Method 1: 180° - 144° = 36°',
            'Method 2: 360° / 10 = 36° ✓',
            'Summary: Side = 8 cm, Angle sum = 1440°',
            'Interior angle = 144°, Exterior angle = 36°'
        ],
        helper: 'Start with perimeter to find side length. Then use (n-2) × 180° for interior sum. Exterior = 360°/n',
        solution: 'Side = 8 cm, Sum = 1440°, Interior = 144°, Exterior = 36°',
        realWorldContext: '10-sided dice, architectural designs, geometric art',
        diagramInfo: {
            type: 'polygon',
            registryKey: 'polygon',
            renderOptions: {
                sides: 10,
                sideLength: 48,
                fillColor: '#F3E5F5',
                strokeColor: '#7B1FA2',
                strokeWidth: 2,
                showVertices: true,
                showCenter: true,
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
                const filename = `polygon_decagon_${Date.now()}.png`;
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

const EndSection5 = "close";