

generateRelatedSolidGeometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Cube Surface Area and Volume',
        problem: 'A cube has edge length 5 cm. Find its surface area and volume.',
        parameters: { shape: 'cube', edge: 5 },
        type: 'solid_geometry',
        subparts: [
            'Given: Cube with edge length = 5 cm',
            'Step 1: Calculate surface area',
            'A cube has 6 square faces',
            'Area of one face = edge² = 5² = 25 cm²',
            'Total surface area = 6 × 25 = 150 cm²',
            'Formula: SA = 6s² where s is edge length',
            'Step 2: Calculate volume',
            'Volume = edge³',
            'V = 5³ = 125 cm³',
            'Summary: SA = 150 cm², V = 125 cm³'
        ],
        helper: 'Cube formulas: Surface Area = 6s², Volume = s³ (where s = edge length)',
        solution: 'Surface Area = 150 cm², Volume = 125 cm³',
        realWorldContext: 'Cubic containers, dice, Rubik\'s cube, storage boxes',
        diagramInfo: {
            type: 'cube',
            registryKey: 'cube',
            renderOptions: {
                edgeLength: 80,
                fillColor: '#C8E6C9',
                strokeColor: '#2E7D32',
                strokeWidth: 2,
                showHiddenEdges: true,
                perspective: 'isometric',
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
                const filename = `cube_properties_${Date.now()}.png`;
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
        scenario: 'Cylinder Volume and Surface Area',
        problem: 'A cylinder has radius 4 cm and height 10 cm. Find its volume and total surface area.',
        parameters: { shape: 'cylinder', radius: 4, height: 10 },
        type: 'solid_geometry',
        subparts: [
            'Given: Cylinder with radius r = 4 cm, height h = 10 cm',
            'Step 1: Calculate volume',
            'Formula: V = πr²h',
            'V = π(4)²(10)',
            'V = π(16)(10)',
            'V = 160π cm³',
            'V ≈ 502.65 cm³',
            'Step 2: Calculate surface area',
            'Surface area = 2 circular bases + lateral (curved) surface',
            'Area of 2 bases = 2πr² = 2π(4)² = 32π cm²',
            'Lateral surface area = 2πrh = 2π(4)(10) = 80π cm²',
            'Total SA = 32π + 80π = 112π cm²',
            'SA ≈ 351.86 cm²',
            'Summary: V = 160π ≈ 502.65 cm³, SA = 112π ≈ 351.86 cm²'
        ],
        helper: 'Cylinder: V = πr²h, Surface Area = 2πr² + 2πrh (bases + lateral)',
        solution: 'Volume = 160π ≈ 502.65 cm³, Surface Area = 112π ≈ 351.86 cm²',
        realWorldContext: 'Cans, pipes, water tanks, cylindrical containers',
        diagramInfo: {
            type: 'cylinder',
            registryKey: 'cylinder',
            renderOptions: {
                radius: 50,
                height: 100,
                fillColor: '#FFECB3',
                strokeColor: '#F57F17',
                strokeWidth: 2,
                showBases: true,
                show3DEffect: true,
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
                const filename = `cylinder_properties_${Date.now()}.png`;
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
        scenario: 'Sphere Volume and Surface Area',
        problem: 'A sphere has radius 6 cm. Find its volume and surface area. If the radius is doubled, what happens to the volume and surface area?',
        parameters: { shape: 'sphere', radius: 6, scaling: true },
        type: 'solid_geometry',
        subparts: [
            'Given: Sphere with radius r = 6 cm',
            'Part 1: Original sphere',
            'Step 1: Calculate volume',
            'Formula: V = (4/3)πr³',
            'V = (4/3)π(6)³',
            'V = (4/3)π(216)',
            'V = 288π cm³ ≈ 904.78 cm³',
            'Step 2: Calculate surface area',
            'Formula: SA = 4πr²',
            'SA = 4π(6)²',
            'SA = 4π(36) = 144π cm²',
            'SA ≈ 452.39 cm²',
            'Part 2: Doubled radius (r = 12 cm)',
            'New volume = (4/3)π(12)³ = (4/3)π(1728) = 2304π cm³',
            'Ratio: 2304π / 288π = 8 times larger',
            'New surface area = 4π(12)² = 576π cm²',
            'Ratio: 576π / 144π = 4 times larger',
            'Conclusion: Doubling radius → Volume ×8, SA ×4'
        ],
        helper: 'Sphere: V = (4/3)πr³, SA = 4πr². When radius doubles: V increases by 2³ = 8×, SA increases by 2² = 4×',
        solution: 'Original: V = 288π ≈ 904.78 cm³, SA = 144π ≈ 452.39 cm². Doubled: V ×8, SA ×4',
        realWorldContext: 'Balls, planets, spherical tanks, bubbles',
        diagramInfo: {
            type: 'sphere',
            registryKey: 'sphere',
            renderOptions: {
                radius: 70,
                fillColor: '#BBDEFB',
                strokeColor: '#1565C0',
                strokeWidth: 2,
                showGreatCircle: true,
                show3DEffect: true,
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
                const filename = `sphere_properties_${Date.now()}.png`;
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
        scenario: 'Cone Volume and Surface Area',
        problem: 'A cone has radius 5 cm and height 12 cm. Find its volume, slant height, and total surface area.',
        parameters: { shape: 'cone', radius: 5, height: 12 },
        type: 'solid_geometry',
        subparts: [
            'Given: Cone with radius r = 5 cm, height h = 12 cm',
            'Step 1: Find slant height',
            'Slant height l forms right triangle with r and h',
            'l² = r² + h²',
            'l² = 5² + 12² = 25 + 144 = 169',
            'l = 13 cm (this is a 5-12-13 triangle!)',
            'Step 2: Calculate volume',
            'Formula: V = (1/3)πr²h',
            'V = (1/3)π(5)²(12)',
            'V = (1/3)π(25)(12)',
            'V = 100π cm³ ≈ 314.16 cm³',
            'Step 3: Calculate surface area',
            'SA = base + lateral surface',
            'Base area = πr² = π(5)² = 25π cm²',
            'Lateral area = πrl = π(5)(13) = 65π cm²',
            'Total SA = 25π + 65π = 90π cm²',
            'SA ≈ 282.74 cm²'
        ],
        helper: 'Cone: Slant height l = √(r² + h²), V = (1/3)πr²h, SA = πr² + πrl',
        solution: 'Slant height = 13 cm, Volume = 100π ≈ 314.16 cm³, SA = 90π ≈ 282.74 cm²',
        realWorldContext: 'Ice cream cones, traffic cones, funnels, conical tents',
        diagramInfo: {
            type: 'cone',
            registryKey: 'cone',
            renderOptions: {
                radius: 50,
                height: 120,
                fillColor: '#F8BBD0',
                strokeColor: '#C2185B',
                strokeWidth: 2,
                showBase: true,
                showSlantHeight: true,
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
                const filename = `cone_properties_${Date.now()}.png`;
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
        scenario: 'Rectangular Prism Word Problem',
        problem: 'A rectangular water tank has length 8 m, width 5 m, and height 3 m. Find: (a) volume in m³ and liters, (b) surface area, (c) how much water when 80% full.',
        parameters: { shape: 'prism', length: 8, width: 5, height: 3, word_problem: true },
        type: 'solid_geometry',
        subparts: [
            'Given: Rectangular prism (tank): l = 8 m, w = 5 m, h = 3 m',
            'Part (a): Volume',
            'V = length × width × height',
            'V = 8 × 5 × 3 = 120 m³',
            'Convert to liters: 1 m³ = 1000 liters',
            'V = 120 × 1000 = 120,000 liters',
            'Part (b): Surface area',
            'SA = 2(lw + lh + wh)',
            'SA = 2(8×5 + 8×3 + 5×3)',
            'SA = 2(40 + 24 + 15)',
            'SA = 2(79) = 158 m²',
            'Part (c): Water when 80% full',
            'Water volume = 0.80 × 120 m³ = 96 m³',
            'In liters = 96 × 1000 = 96,000 liters',
            'Summary: V = 120 m³ = 120,000 L, SA = 158 m², 80% = 96,000 L'
        ],
        helper: 'Rectangular prism: V = l × w × h, SA = 2(lw + lh + wh). Remember: 1 m³ = 1000 liters',
        solution: 'Volume = 120 m³ (120,000 L), Surface Area = 158 m², 80% full = 96,000 L',
        realWorldContext: 'Water tanks, swimming pools, storage containers, rooms',
        diagramInfo: {
            type: 'prism',
            registryKey: 'prism',
            renderOptions: {
                baseType: 'square',
                baseLength: 80,
                height: 60,
                fillColor: '#E1F5FE',
                strokeColor: '#0277BD',
                strokeWidth: 2,
                showBases: true,
                showHiddenEdges: true,
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
                const filename = `prism_water_tank_${Date.now()}.png`;
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

const EndSection6 = "close";