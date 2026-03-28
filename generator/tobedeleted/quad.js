

generateRelatedQuadrilateralsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Rectangle Properties',
        problem: 'A rectangle has length 12 cm and width 5 cm. Find its perimeter, area, and diagonal length.',
        parameters: { shape: 'rectangle', length: 12, width: 5 },
        type: 'quadrilaterals',
        subparts: [
            'Given: Rectangle with length l = 12 cm, width w = 5 cm',
            'Step 1: Calculate perimeter',
            'Formula: P = 2(length + width)',
            'P = 2(12 + 5) = 2(17) = 34 cm',
            'Step 2: Calculate area',
            'Formula: A = length × width',
            'A = 12 × 5 = 60 cm²',
            'Step 3: Calculate diagonal',
            'Rectangle diagonal uses Pythagorean theorem',
            'd² = l² + w²',
            'd² = 12² + 5² = 144 + 25 = 169',
            'd = √169 = 13 cm',
            'Note: This is a 5-12-13 Pythagorean triple'
        ],
        helper: 'Rectangle formulas: P = 2(l + w), A = l × w, Diagonal d = √(l² + w²)',
        solution: 'Perimeter = 34 cm, Area = 60 cm², Diagonal = 13 cm',
        realWorldContext: 'Room dimensions, picture frames, rectangular plots',
        diagramInfo: {
            type: 'rectangle',
            registryKey: 'rectangle',
            renderOptions: {
                length: 120,
                width: 50,
                fillColor: '#E8F5E9',
                strokeColor: '#388E3C',
                strokeWidth: 2,
                showDiagonals: true,
                showLabels: true,
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
                const filename = `rectangle_properties_${Date.now()}.png`;
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
        scenario: 'Square from Perimeter',
        problem: 'A square has perimeter 48 cm. Find its side length, area, and diagonal.',
        parameters: { shape: 'square', perimeter: 48 },
        type: 'quadrilaterals',
        subparts: [
            'Given: Square with perimeter P = 48 cm',
            'Step 1: Find side length',
            'Square has 4 equal sides',
            'Perimeter = 4 × side',
            '48 = 4 × s',
            's = 48/4 = 12 cm',
            'Step 2: Calculate area',
            'Formula: A = side²',
            'A = 12² = 144 cm²',
            'Step 3: Calculate diagonal',
            'For square: diagonal = side × √2',
            'd = 12√2 ≈ 12 × 1.414 ≈ 16.97 cm',
            'Or using Pythagorean: d² = 12² + 12² = 144 + 144 = 288',
            'd = √288 = 12√2 cm ✓'
        ],
        helper: 'Square formulas: P = 4s, A = s², Diagonal d = s√2 (or √(s² + s²) = s√2)',
        solution: 'Side = 12 cm, Area = 144 cm², Diagonal = 12√2 ≈ 16.97 cm',
        realWorldContext: 'Square tiles, plots of land, chess boards',
        diagramInfo: {
            type: 'square',
            registryKey: 'square',
            renderOptions: {
                sideLength: 100,
                fillColor: '#FCE4EC',
                strokeColor: '#C2185B',
                strokeWidth: 2,
                showDiagonals: true,
                showLabels: true,
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
                const filename = `square_from_perimeter_${Date.now()}.png`;
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
        scenario: 'Trapezoid Area',
        problem: 'A trapezoid has parallel sides of 8 cm and 14 cm, with height 6 cm. Find its area. If the non-parallel sides are each 6.5 cm, find the perimeter.',
        parameters: { shape: 'trapezoid', bases: [8, 14], height: 6, legs: 6.5 },
        type: 'quadrilaterals',
        subparts: [
            'Given: Trapezoid with bases b₁ = 8 cm, b₂ = 14 cm, height h = 6 cm',
            'Non-parallel sides = 6.5 cm each',
            'Step 1: Calculate area',
            'Formula: A = ½(b₁ + b₂) × h',
            'A = ½(8 + 14) × 6',
            'A = ½(22) × 6',
            'A = 11 × 6',
            'A = 66 cm²',
            'Alternative: Average of bases × height',
            'Average = (8 + 14)/2 = 11',
            'A = 11 × 6 = 66 cm² ✓',
            'Step 2: Calculate perimeter',
            'P = sum of all four sides',
            'P = 8 + 14 + 6.5 + 6.5',
            'P = 35 cm'
        ],
        helper: 'Trapezoid area: A = ½(b₁ + b₂)h or A = (average of parallel sides) × height. Perimeter: sum of all sides',
        solution: 'Area = 66 cm², Perimeter = 35 cm',
        realWorldContext: 'Trapezoidal roofs, embankments, roadway designs',
        diagramInfo: {
            type: 'trapezoid',
            registryKey: 'trapezoid',
            renderOptions: {
                base1: 140,
                base2: 80,
                height: 60,
                fillColor: '#E0F2F1',
                strokeColor: '#00796B',
                strokeWidth: 2,
                showHeight: true,
                showParallelMarks: true,
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
                const filename = `trapezoid_area_${Date.now()}.png`;
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
        scenario: 'Parallelogram Area and Perimeter',
        problem: 'A parallelogram has base 10 cm and height 7 cm. One angle is 60°. If the side adjacent to the base is 8 cm, find the area and perimeter.',
        parameters: { shape: 'parallelogram', base: 10, height: 7, side: 8, angle: 60 },
        type: 'quadrilaterals',
        subparts: [
            'Given: Parallelogram with base = 10 cm, height = 7 cm, side = 8 cm, angle = 60°',
            'Step 1: Calculate area',
            'Formula: A = base × height',
            'A = 10 × 7 = 70 cm²',
            'Note: Height is perpendicular distance between parallel sides',
            'Step 2: Calculate perimeter',
            'Parallelogram has 2 pairs of equal opposite sides',
            'P = 2(base + side)',
            'P = 2(10 + 8)',
            'P = 2(18) = 36 cm',
            'Verification: Opposite sides are equal',
            'Two sides of 10 cm, two sides of 8 cm'
        ],
        helper: 'Parallelogram: A = base × height (NOT base × side!), P = 2(base + side). Height is perpendicular, not the slant side',
        solution: 'Area = 70 cm², Perimeter = 36 cm',
        realWorldContext: 'Slanted structures, ramps, parallelogram linkages',
        diagramInfo: {
            type: 'parallelogram',
            registryKey: 'parallelogram',
            renderOptions: {
                base: 100,
                side: 80,
                angle: 60,
                fillColor: '#EFEBE9',
                strokeColor: '#5D4037',
                strokeWidth: 2,
                showHeight: true,
                showDiagonals: false,
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
                const filename = `parallelogram_area_${Date.now()}.png`;
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
        scenario: 'Rectangle Word Problem',
        problem: 'A rectangular garden has an area of 120 m² and a length that is 4 meters more than twice its width. Find the dimensions and perimeter of the garden.',
        parameters: { shape: 'rectangle', area: 120, relationship: 'l = 2w + 4' },
        type: 'quadrilaterals',
        subparts: [
            'Given: Area = 120 m², length l = 2w + 4 (where w is width)',
            'Step 1: Set up equation',
            'Area = length × width',
            '120 = (2w + 4) × w',
            '120 = 2w² + 4w',
            '2w² + 4w - 120 = 0',
            'Divide by 2: w² + 2w - 60 = 0',
            'Step 2: Solve quadratic (factor or use formula)',
            'Factor: (w + 10)(w - 6) = 0',
            'w = -10 or w = 6',
            'Width must be positive, so w = 6 m',
            'Step 3: Find length',
            'l = 2w + 4 = 2(6) + 4 = 12 + 4 = 16 m',
            'Step 4: Verify area',
            'A = 16 × 6 = 96... Wait, this is wrong!',
            'Let me recalculate: A = l × w = 16 × 6 = 96 ≠ 120',
            'Error in factoring. Let me use quadratic formula:',
            'w = [-2 ± √(4 + 240)]/2 = [-2 ± √244]/2 = [-2 ± 15.62]/2',
            'w = 6.81 m (taking positive value)',
            'l = 2(6.81) + 4 = 17.62 m',
            'Check: 17.62 × 6.81 ≈ 120 m² ✓',
            'Step 5: Calculate perimeter',
            'P = 2(l + w) = 2(17.62 + 6.81) = 2(24.43) = 48.86 m'
        ],
        helper: 'Set up equation using given relationships. Area = l × w. Solve the quadratic equation. Always verify your answer',
        solution: 'Width ≈ 6.81 m, Length ≈ 17.62 m, Perimeter ≈ 48.86 m',
        realWorldContext: 'Garden planning, field dimensions, construction layouts',
        diagramInfo: {
            type: 'rectangle',
            registryKey: 'rectangle',
            renderOptions: {
                length: 176,
                width: 68,
                fillColor: '#E8F5E9',
                strokeColor: '#2E7D32',
                strokeWidth: 2,
                showDiagonals: false,
                showLabels: true,
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
                const filename = `rectangle_word_problem_${Date.now()}.png`;
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

const EndSection4 = "close";