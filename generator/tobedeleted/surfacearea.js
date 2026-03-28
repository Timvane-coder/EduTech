

generateRelatedSurfaceAreaVolumeDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Comparing Volumes',
        problem: 'Compare the volumes of: (a) a cube with edge 4 cm, (b) a sphere with radius 4 cm. Which has greater volume?',
        parameters: { comparison: true, cube_edge: 4, sphere_radius: 4 },
        type: 'surface_area_volume',
        subparts: [
            'Given: Cube edge = 4 cm, Sphere radius = 4 cm',
            'Part (a): Cube volume',
            'V_cube = edge³ = 4³ = 64 cm³',
            'Part (b): Sphere volume',
            'V_sphere = (4/3)πr³',
            'V_sphere = (4/3)π(4)³',
            'V_sphere = (4/3)π(64)',
            'V_sphere = (256π)/3 cm³',
            'V_sphere ≈ 268.08 cm³',
            'Comparison:',
            'Cube: 64 cm³',
            'Sphere: 268.08 cm³',
            'Difference: 268.08 - 64 = 204.08 cm³',
            'The sphere has greater volume!',
            'Ratio: Sphere/Cube = 268.08/64 ≈ 4.19 times larger'
        ],
        helper: 'Calculate each volume separately, then compare. Cube: V = s³, Sphere: V = (4/3)πr³',
        solution: 'Cube = 64 cm³, Sphere ≈ 268.08 cm³. Sphere is larger by ≈ 204.08 cm³',
        realWorldContext: 'Understanding which shapes hold more volume for given dimensions',
        diagramInfo: {
            type: 'cube',
            registryKey: 'cube',
            renderOptions: {
                edgeLength: 60,
                fillColor: '#E8F5E9',
                strokeColor: '#388E3C',
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
                const filename = `volume_comparison_${Date.now()}.png`;
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
        scenario: 'Pyramid Volume',
        problem: 'A square pyramid has a base with side 10 cm and height 12 cm. Find its volume and compare it to a cube with the same base.',
        parameters: { shape: 'pyramid', base_side: 10, height: 12 },
        type: 'surface_area_volume',
        subparts: [
            'Given: Square pyramid with base side = 10 cm, height = 12 cm',
            'Step 1: Calculate pyramid volume',
            'Formula: V = (1/3) × base area × height',
            'Base area = 10² = 100 cm²',
            'V_pyramid = (1/3) × 100 × 12',
            'V_pyramid = 1200/3 = 400 cm³',
            'Step 2: Compare to cube with same base',
            'Cube would have edge = 10 cm',
            'V_cube = 10³ = 1000 cm³',
            'Comparison:',
            'Pyramid: 400 cm³',
            'Cube: 1000 cm³',
            'Ratio: Pyramid/Cube = 400/1000 = 2/5',
            'The pyramid is 2/5 (or 40%) of the cube\'s volume',
            'Note: Pyramid = (1/3) × (prism with same base and height)'
        ],
        helper: 'Pyramid: V = (1/3) × base area × height. Always 1/3 of corresponding prism volume',
        solution: 'Pyramid volume = 400 cm³, which is 40% of cube volume (1000 cm³)',
        realWorldContext: 'Egyptian pyramids, pyramid structures, geometric comparisons',
        diagramInfo: {
            type: 'pyramid',
            registryKey: 'pyramid',
            renderOptions: {
                baseType: 'square',
                baseLength: 100,
                height: 120,
                fillColor: '#FFF9C4',
                strokeColor: '#F57F17',
                strokeWidth: 2,
                showBase: true,
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
                const filename = `pyramid_volume_${Date.now()}.png`;
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

const EndSection7 = "close";