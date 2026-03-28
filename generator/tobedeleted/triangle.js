


generateRelatedTrianglesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Angle Sum in Triangle',
        problem: 'In triangle ABC, angle A = 50° and angle B = 70°. Find angle C and classify the triangle by angles.',
        parameters: { angleA: 50, angleB: 70, find: 'angleC' },
        type: 'triangles',
        subparts: [
            'Given: ∠A = 50°, ∠B = 70°',
            'Triangle angle sum theorem: Sum of angles = 180°',
            'Equation: ∠A + ∠B + ∠C = 180°',
            'Substitute: 50° + 70° + ∠C = 180°',
            '120° + ∠C = 180°',
            '∠C = 180° - 120°',
            '∠C = 60°',
            'Classification: All angles < 90°, so ACUTE triangle',
            'Check: 50° + 70° + 60° = 180° ✓'
        ],
        helper: 'Sum of angles in any triangle = 180°. Acute: all angles < 90°, Right: one angle = 90°, Obtuse: one angle > 90°',
        solution: 'Angle C = 60°, Triangle is ACUTE',
        realWorldContext: 'Finding missing angles in structures and architectural designs',
        diagramInfo: {
            type: 'triangle',
            registryKey: 'triangle',
            renderOptions: {
                angleA: 50,
                angleB: 70,
                angleC: 60,
                baseLength: 100,
                fillColor: '#E3F2FD',
                strokeColor: '#1976D2',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
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
                const filename = `triangle_angle_sum_${Date.now()}.png`;
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
        scenario: 'Pythagorean Theorem Application',
        problem: 'A right triangle has legs of length 5 cm and 12 cm. Find the length of the hypotenuse and calculate the area of the triangle.',
        parameters: { angleA: 90, leg1: 5, leg2: 12, find: 'hypotenuse_and_area' },
        type: 'triangles',
        subparts: [
            'Given: Right triangle with legs a = 5 cm, b = 12 cm',
            'Step 1: Find hypotenuse using Pythagorean theorem',
            'Formula: a² + b² = c² (c is hypotenuse)',
            'Substitute: 5² + 12² = c²',
            '25 + 144 = c²',
            '169 = c²',
            'Take square root: c = √169 = 13 cm',
            'Step 2: Calculate area',
            'Area = ½ × base × height = ½ × 5 × 12',
            'Area = ½ × 60 = 30 cm²',
            'Note: This is a Pythagorean triple (5, 12, 13)',
            'Check: 5² + 12² = 25 + 144 = 169 = 13² ✓'
        ],
        helper: 'Pythagorean theorem: a² + b² = c² (c is hypotenuse). Area of right triangle = ½ × leg₁ × leg₂',
        solution: 'Hypotenuse = 13 cm, Area = 30 cm²',
        realWorldContext: 'Finding distances, diagonal measurements, construction calculations',
        diagramInfo: {
            type: 'triangle',
            registryKey: 'triangle',
            renderOptions: {
                angleA: 90,
                angleB: 45,
                angleC: 45,
                baseLength: 100,
                fillColor: '#E8F5E9',
                strokeColor: '#388E3C',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
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
                const filename = `triangle_pythagorean_${Date.now()}.png`;
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
        scenario: 'Isosceles Triangle Properties',
        problem: 'In an isosceles triangle, the two equal angles each measure 65°. Find the third angle, classify the triangle, and if the equal sides are 8 cm each and the base is 10 cm, calculate the area and perimeter.',
        parameters: { triangle_type: 'isosceles', equal_angles: 65, sides: [8, 8, 10] },
        type: 'triangles',
        subparts: [
            'Given: Isosceles triangle with two equal angles = 65° each',
            'Step 1: Find third angle',
            'Let third angle = x',
            'Sum of angles: 65° + 65° + x = 180°',
            '130° + x = 180°',
            'x = 50°',
            'Step 2: Classification',
            'All angles < 90°, so this is an ACUTE triangle',
            'Step 3: Calculate perimeter',
            'Perimeter = 8 + 8 + 10 = 26 cm',
            'Step 4: Calculate area using Heron\'s formula',
            'Semi-perimeter s = (8 + 8 + 10)/2 = 13 cm',
            'Area = √[s(s-a)(s-b)(s-c)]',
            'Area = √[13(13-8)(13-8)(13-10)]',
            'Area = √[13 × 5 × 5 × 3] = √975 ≈ 31.22 cm²',
            'Note: Isosceles means 2 equal sides and 2 equal angles'
        ],
        helper: 'Isosceles triangle: 2 equal sides → 2 equal angles (opposite the equal sides). Use Heron\'s formula: Area = √[s(s-a)(s-b)(s-c)] where s = (a+b+c)/2',
        solution: 'Third angle = 50°, Acute triangle, Area ≈ 31.22 cm², Perimeter = 26 cm',
        realWorldContext: 'Symmetric structures in architecture, roof trusses, bridge supports',
        diagramInfo: {
            type: 'triangle',
            registryKey: 'triangle',
            renderOptions: {
                angleA: 50,
                angleB: 65,
                angleC: 65,
                baseLength: 100,
                fillColor: '#FFF3E0',
                strokeColor: '#E65100',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
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
                const filename = `triangle_isosceles_${Date.now()}.png`;
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
        scenario: 'Equilateral Triangle',
        problem: 'An equilateral triangle has all sides equal to 6 cm. Find all angles and calculate the area and perimeter.',
        parameters: { triangle_type: 'equilateral', side: 6 },
        type: 'triangles',
        subparts: [
            'Given: Equilateral triangle with all sides = 6 cm',
            'Step 1: Find angles',
            'In equilateral triangle, all angles are equal',
            'Let each angle = x',
            '3x = 180° (angle sum)',
            'x = 60°',
            'All angles = 60°',
            'Step 2: Calculate perimeter',
            'Perimeter = 3 × side = 3 × 6 = 18 cm',
            'Step 3: Calculate area',
            'Formula for equilateral: Area = (√3/4) × side²',
            'Area = (√3/4) × 6²',
            'Area = (√3/4) × 36',
            'Area = 9√3 ≈ 15.59 cm²',
            'Alternative: Area = (1.732/4) × 36 ≈ 15.59 cm²'
        ],
        helper: 'Equilateral triangle: All sides equal → all angles = 60°. Area = (√3/4) × side² or ≈ 0.433 × side²',
        solution: 'All angles = 60°, Area ≈ 15.59 cm², Perimeter = 18 cm',
        realWorldContext: 'Perfect symmetry in design, triangular tiling patterns, structural supports',
        diagramInfo: {
            type: 'triangle',
            registryKey: 'triangle',
            renderOptions: {
                angleA: 60,
                angleB: 60,
                angleC: 60,
                baseLength: 100,
                fillColor: '#F3E5F5',
                strokeColor: '#7B1FA2',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
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
                const filename = `triangle_equilateral_${Date.now()}.png`;
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
        scenario: 'Triangle Word Problem - Ladder',
        problem: 'A 10-meter ladder leans against a wall. The base of the ladder is 6 meters from the wall. How high up the wall does the ladder reach? What angle does the ladder make with the ground?',
        parameters: { ladder: 10, distance_from_wall: 6, word_problem: true },
        type: 'triangles',
        subparts: [
            'Setup: Right triangle formed by wall, ground, and ladder',
            'Hypotenuse (ladder) = 10 m',
            'Base (distance from wall) = 6 m',
            'Height up wall = ?',
            'Step 1: Find height using Pythagorean theorem',
            'Formula: a² + b² = c²',
            '6² + h² = 10²',
            '36 + h² = 100',
            'h² = 64',
            'h = 8 m',
            'Step 2: Find angle with ground',
            'Use sine: sin θ = opposite/hypotenuse = 8/10 = 0.8',
            'θ = sin⁻¹(0.8) ≈ 53.13°',
            'Or use cosine: cos θ = adjacent/hypotenuse = 6/10 = 0.6',
            'θ = cos⁻¹(0.6) ≈ 53.13°',
            'Check: 6² + 8² = 36 + 64 = 100 = 10² ✓',
            'Note: This is a 6-8-10 right triangle (scaled 3-4-5)'
        ],
        helper: 'Draw diagram showing right triangle. Use Pythagorean theorem: a² + b² = c². For angle: sin θ = opposite/hypotenuse or cos θ = adjacent/hypotenuse',
        solution: 'The ladder reaches 8 meters up the wall. Angle with ground ≈ 53.13°',
        realWorldContext: 'Safety calculations for ladder placement, construction work',
        diagramInfo: {
            type: 'triangle',
            registryKey: 'triangle',
            renderOptions: {
                angleA: 90,
                angleB: 53,
                angleC: 37,
                baseLength: 100,
                fillColor: '#FFEBEE',
                strokeColor: '#C62828',
                strokeWidth: 2,
                showLabels: true,
                showAngles: true,
                showGrid: false,
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
                const filename = `triangle_ladder_problem_${Date.now()}.png`;
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

const EndSection2 = "close";