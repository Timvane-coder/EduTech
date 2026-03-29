// ==================== GEOMETRY GENERATORS WITH DIAGRAMS ====================

generateRelatedGeometricDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // ── 1. ANGLE TYPES ──────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Classifying Angles',
        problem: 'Classify the following angles: 35°, 90°, 120°, 180°, 250°. State the type of each angle.',
        parameters: { angles: [35, 90, 120, 180, 250] },
        type: 'angle_types',
        subparts: [
            '35° → Acute angle (between 0° and 90°)',
            '90° → Right angle (exactly 90°)',
            '120° → Obtuse angle (between 90° and 180°)',
            '180° → Straight angle (exactly 180°)',
            '250° → Reflex angle (between 180° and 360°)'
        ],
        helper: 'Acute: 0°–90°; Right: 90°; Obtuse: 90°–180°; Straight: 180°; Reflex: 180°–360°',
        answer: '35° = Acute, 90° = Right, 120° = Obtuse, 180° = Straight, 250° = Reflex',
        realWorldContext: 'Architecture, carpentry, navigation bearings',
        diagramInfo: {
            type: 'angle_types',
            registryKey: 'angleTypes',
            renderOptions: {
                title: 'Types of Angles',
                showAngles: true,
                showMeasures: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_angle_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 2. ANGLE RELATIONSHIPS ───────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Complementary and Supplementary Angles',
        problem: 'Angle A and Angle B are complementary. Angle A = 37°. Find Angle B. Also, if Angle C and Angle D are supplementary and Angle C = 112°, find Angle D.',
        parameters: { angleA: 37, angleC: 112 },
        type: 'angle_relationships',
        subparts: [
            'Complementary angles sum to 90°',
            'Angle B = 90° − 37° = 53°',
            'Supplementary angles sum to 180°',
            'Angle D = 180° − 112° = 68°',
            'Vertically opposite angles are equal when two lines intersect'
        ],
        helper: 'Complementary: A + B = 90°; Supplementary: C + D = 180°; Vertically opposite: equal',
        answer: 'Angle B = 53°; Angle D = 68°',
        realWorldContext: 'Intersecting roads, scissors, clock hands',
        diagramInfo: {
            type: 'angle_relationships',
            registryKey: 'angleRelationships',
            renderOptions: {
                title: 'Angle Relationships',
                showComplementary: true,
                showSupplementary: true,
                showVerticallyOpposite: true,
                showMeasures: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_angle_relationships_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 3. PARALLEL LINES AND TRANSVERSALS ──────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Parallel Lines Cut by a Transversal',
        problem: 'Two parallel lines are cut by a transversal. One of the co-interior angles is 65°. Find all eight angles formed, identifying corresponding, alternate, and co-interior pairs.',
        parameters: { coInteriorAngle: 65 },
        type: 'parallel_lines',
        subparts: [
            'Co-interior (same-side interior) angles are supplementary: sum = 180°',
            'Second co-interior angle = 180° − 65° = 115°',
            'Corresponding angles are equal: 65° and 65° (upper and lower intersections)',
            'Alternate interior angles are equal: 65° pairs with 65° across the transversal',
            'Vertically opposite angles at each intersection are equal',
            'All eight angles are either 65° or 115°'
        ],
        helper: 'Corresponding: equal; Alternate interior: equal; Co-interior: supplementary (sum 180°)',
        answer: 'Four angles of 65° and four angles of 115° at the two intersections',
        realWorldContext: 'Railway tracks, architectural grid lines, zebra crossings',
        diagramInfo: {
            type: 'parallel_lines',
            registryKey: 'parallelLinesAngles',
            renderOptions: {
                title: 'Parallel Lines and Transversals',
                showParallelLines: true,
                showTransversal: true,
                showCorresponding: true,
                showAlternate: true,
                showCoInterior: true,
                showMeasures: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_parallel_lines_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 4. TRIANGLE TYPES ───────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Classifying Triangles',
        problem: 'Triangle P has sides 5 cm, 5 cm, 5 cm. Triangle Q has angles 90°, 45°, 45°. Triangle R has sides 3 cm, 5 cm, 7 cm. Classify each by sides and by angles.',
        parameters: {
            triangleP: { sides: [5, 5, 5] },
            triangleQ: { angles: [90, 45, 45] },
            triangleR: { sides: [3, 5, 7] }
        },
        type: 'triangle_types',
        subparts: [
            'Triangle P: all sides equal → Equilateral; all angles 60° → Acute',
            'Triangle Q: two sides equal (isosceles), one angle 90° → Right Isosceles',
            'Triangle R: all sides different → Scalene; largest angle is obtuse → Obtuse Scalene',
            'Sum of angles in any triangle = 180°',
            'Equilateral triangles are always acute; right triangles have one 90° angle'
        ],
        helper: 'By sides: equilateral (all equal), isosceles (two equal), scalene (none equal). By angles: acute, right, obtuse',
        answer: 'P = Equilateral Acute; Q = Right Isosceles; R = Obtuse Scalene',
        realWorldContext: 'Roof trusses, bridge structures, triangular road signs',
        diagramInfo: {
            type: 'triangle_types',
            registryKey: 'triangleTypes',
            renderOptions: {
                title: 'Types of Triangles',
                showEquilateral: true,
                showIsosceles: true,
                showScalene: true,
                showRight: true,
                showAcute: true,
                showObtuse: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_triangle_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 5. TRIANGLE PROPERTIES ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Exterior Angle of a Triangle',
        problem: 'In triangle ABC, angle A = 48° and angle B = 67°. Find angle C (interior) and the exterior angle at C.',
        parameters: { angleA: 48, angleB: 67 },
        type: 'triangle_properties',
        subparts: [
            'Angle sum property: A + B + C = 180°',
            'Angle C = 180° − 48° − 67° = 65°',
            'Exterior angle theorem: exterior angle = sum of two non-adjacent interior angles',
            'Exterior angle at C = A + B = 48° + 67° = 115°',
            'Verify: interior + exterior = 180° → 65° + 115° = 180° ✓'
        ],
        helper: 'Interior angle sum = 180°; Exterior angle = sum of opposite two interior angles',
        answer: 'Angle C = 65°; Exterior angle at C = 115°',
        realWorldContext: 'Structural engineering, polygon interior/exterior angle problems',
        diagramInfo: {
            type: 'triangle_properties',
            registryKey: 'triangleProperties',
            renderOptions: {
                title: 'Triangle Properties',
                showAngleSum: true,
                showExteriorAngle: true,
                showInequality: true,
                showProofs: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_triangle_properties_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 6. PYTHAGOREAN THEOREM ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Pythagorean Theorem Application',
        problem: 'A right-angled triangle has legs a = 3 cm and b = 4 cm. Find the hypotenuse c. Then verify that a triangle with sides 5 cm, 12 cm, and 13 cm is a right triangle.',
        parameters: { a: 3, b: 4, verifyTriangle: [5, 12, 13] },
        type: 'pythagorean',
        subparts: [
            'Pythagorean theorem: a² + b² = c²',
            'c² = 3² + 4² = 9 + 16 = 25',
            'c = √25 = 5 cm',
            'For the 5-12-13 triangle: 5² + 12² = 25 + 144 = 169',
            '13² = 169 ✓ → It is a right triangle (Pythagorean triple)'
        ],
        helper: 'a² + b² = c²; Pythagorean triples: (3,4,5), (5,12,13), (8,15,17)',
        answer: 'c = 5 cm; the 5–12–13 triangle is confirmed as right-angled',
        realWorldContext: 'Construction (squaring corners), navigation, screen diagonals',
        diagramInfo: {
            type: 'pythagorean',
            registryKey: 'pythagoreanTheorem',
            renderOptions: {
                title: 'Pythagorean Theorem',
                showTriangle: true,
                showSquares: true,
                showAreas: true,
                showEquation: true,
                showProof: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_pythagorean_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 7. CONGRUENT TRIANGLES ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Proving Triangle Congruence (SAS)',
        problem: 'Triangle ABC has AB = 6 cm, BC = 8 cm, angle B = 50°. Triangle DEF has DE = 6 cm, EF = 8 cm, angle E = 50°. Prove they are congruent and find the congruence condition used.',
        parameters: { condition: 'SAS', side1: 6, side2: 8, includedAngle: 50 },
        type: 'congruent_triangles',
        subparts: [
            'SAS (Side-Angle-Side): two sides and the included angle are equal',
            'AB = DE = 6 cm (first pair of equal sides)',
            'BC = EF = 8 cm (second pair of equal sides)',
            'Angle B = Angle E = 50° (included angle between the equal sides)',
            'By SAS congruence: △ABC ≅ △DEF',
            'Corresponding parts of congruent triangles are equal (CPCT)'
        ],
        helper: 'Congruence conditions: SSS, SAS, ASA, AAS, RHS. SAS requires the angle to be between the two sides.',
        answer: '△ABC ≅ △DEF by SAS congruence',
        realWorldContext: 'Engineering tolerances, identical structural components, tessellations',
        diagramInfo: {
            type: 'congruent_triangles',
            registryKey: 'congruentTriangles',
            renderOptions: {
                title: 'Congruent Triangles - SAS',
                showTriangles: true,
                showMarking: true,
                showCondition: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_congruent_triangles_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 8. SIMILAR TRIANGLES ────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Similar Triangles and Scale Factor',
        problem: 'Triangle ABC has angles 40°, 60°, 80°. Triangle PQR also has angles 40°, 60°, 80°. If AB = 4 cm and PQ = 8 cm, find the scale factor and the ratio of their areas.',
        parameters: { condition: 'AA', ratio: 2, angles: [40, 60, 80] },
        type: 'similar_triangles',
        subparts: [
            'AA (Angle-Angle) similarity: two angles equal → triangles are similar',
            'Both triangles share angles 40°, 60°, 80° → △ABC ~ △PQR',
            'Scale factor k = PQ / AB = 8 / 4 = 2',
            'All corresponding sides are in ratio 1 : 2',
            'Ratio of areas = k² = 2² = 4',
            'Area of △PQR = 4 × Area of △ABC'
        ],
        helper: 'Similar triangles: AA, SSS~, SAS~. Ratio of areas = (scale factor)²',
        answer: 'Scale factor = 2; ratio of areas = 1 : 4',
        realWorldContext: 'Maps and scale drawings, shadow height problems, photography zoom',
        diagramInfo: {
            type: 'similar_triangles',
            registryKey: 'similarTriangles',
            renderOptions: {
                title: 'Similar Triangles - AA',
                showTriangles: true,
                showAngles: true,
                showRatio: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_similar_triangles_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 9. QUADRILATERAL TYPES ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Properties of Quadrilaterals',
        problem: 'A quadrilateral has two pairs of parallel sides, all sides equal, and all angles 90°. Identify it. Then state two quadrilaterals that have exactly one pair of parallel sides.',
        parameters: { shape: 'square', compareShapes: ['trapezium'] },
        type: 'quadrilateral_types',
        subparts: [
            'Two pairs of parallel sides + all sides equal + all angles 90° → Square',
            'A square is both a rhombus and a rectangle',
            'Quadrilaterals with exactly one pair of parallel sides: Trapezium and Kite (none parallel — correction: kite has no parallel sides)',
            'Trapezium: exactly one pair of parallel sides (the parallel sides are called bases)',
            'Right trapezium: one pair of parallel sides with two right angles on one leg',
            'Angle sum of any quadrilateral = 360°'
        ],
        helper: 'Parallelogram: 2 pairs parallel; Trapezium: 1 pair parallel; Kite: no parallel sides but two pairs of adjacent equal sides',
        answer: 'The shape is a Square; quadrilaterals with exactly one pair of parallel sides: Trapezium (and Right Trapezium)',
        realWorldContext: 'Floor tiling, window frames, land plots',
        diagramInfo: {
            type: 'quadrilateral_types',
            registryKey: 'quadrilateralTypes',
            renderOptions: {
                title: 'Types of Quadrilaterals',
                showSquare: true,
                showRectangle: true,
                showRhombus: true,
                showParallelogram: true,
                showTrapezium: true,
                showKite: true,
                showProperties: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_quadrilateral_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 10. QUADRILATERAL HIERARCHY ─────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Quadrilateral Family Relationships',
        problem: 'Explain why every square is a rectangle and a rhombus, but not every rectangle is a square. Use the quadrilateral hierarchy to justify.',
        parameters: { focus: ['square', 'rectangle', 'rhombus', 'parallelogram'] },
        type: 'quadrilateral_hierarchy',
        subparts: [
            'Parallelogram: both pairs of opposite sides parallel and equal',
            'Rectangle: parallelogram with all angles 90°',
            'Rhombus: parallelogram with all sides equal',
            'Square: both a rectangle AND a rhombus (all sides equal AND all angles 90°)',
            'Square satisfies all rectangle properties → every square is a rectangle',
            'Rectangle need not have all sides equal → not every rectangle is a square'
        ],
        helper: 'Hierarchy: Quadrilateral → Parallelogram → Rectangle / Rhombus → Square',
        answer: 'Square ⊂ Rectangle ⊂ Parallelogram and Square ⊂ Rhombus ⊂ Parallelogram; rectangle ⊄ square because equal angles do not imply equal sides',
        realWorldContext: 'Database inheritance, logical classification, set theory',
        diagramInfo: {
            type: 'quadrilateral_hierarchy',
            registryKey: 'quadrilateralHierarchy',
            renderOptions: {
                title: 'Quadrilateral Hierarchy',
                showTree: true,
                showRelationships: true,
                showProperties: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_quadrilateral_hierarchy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 11. CIRCLE THEOREM 1 – ANGLE AT CENTER ──────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Angle at Centre is Twice Angle at Circumference',
        problem: 'O is the centre of a circle. Points A, B, C lie on the circumference. Angle AOB (at centre) = 124°. Find angle ACB (at circumference) subtended by the same arc AB.',
        parameters: { centralAngle: 124, theorem: 'angle_at_center' },
        type: 'circle_theorem',
        subparts: [
            'Circle Theorem: angle at centre = 2 × angle at circumference (same arc)',
            'Angle AOB = 124° (central angle)',
            'Angle ACB = 124° ÷ 2 = 62°',
            'This holds for any point C on the major arc AB',
            'All angles at the circumference subtended by the same arc are equal'
        ],
        helper: 'Central angle = 2 × inscribed angle (same arc); applies only when both subtend the same arc',
        answer: 'Angle ACB = 62°',
        realWorldContext: 'Clock design, circular track sectors, satellite dish angles',
        diagramInfo: {
            type: 'circle_theorem',
            registryKey: 'circleTheorem1',
            renderOptions: {
                title: 'Circle Theorem: Angle at Center',
                showCircle: true,
                showAngles: true,
                showProof: true,
                showMeasures: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_circle_theorem1_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 12. CIRCLE THEOREM 2 – ANGLE IN SEMICIRCLE ──────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Angle in a Semicircle',
        problem: 'AB is a diameter of a circle and C is any point on the circumference. Find angle ACB and explain why.',
        parameters: { theorem: 'angle_in_semicircle' },
        type: 'circle_theorem',
        subparts: [
            'AB is a diameter → arc AB is a semicircle',
            'Central angle subtended by diameter = 180°',
            'Angle at circumference = central angle ÷ 2 = 180° ÷ 2 = 90°',
            'Therefore angle ACB = 90° (right angle) for any position of C on the semicircle',
            'This is Thales\' theorem: the angle inscribed in a semicircle is always 90°'
        ],
        helper: 'Angle in a semicircle = 90° (Thales\' theorem); diameter subtends a right angle at any circumference point',
        answer: 'Angle ACB = 90° for any point C on the circumference',
        realWorldContext: 'Right-angle finder in construction, optical lens geometry',
        diagramInfo: {
            type: 'circle_theorem',
            registryKey: 'circleTheorem2',
            renderOptions: {
                title: 'Circle Theorem: Angle in Semicircle',
                showCircle: true,
                showRightAngle: true,
                showDiameter: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_circle_theorem2_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 13. CIRCLE THEOREM 3 – CYCLIC QUADRILATERAL ─────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cyclic Quadrilateral Opposite Angles',
        problem: 'ABCD is a cyclic quadrilateral. Angle A = 73° and angle C = x. Find x. Also, if angle B = 110°, find angle D.',
        parameters: { angleA: 73, angleB: 110, theorem: 'cyclic_quadrilateral' },
        type: 'circle_theorem',
        subparts: [
            'Cyclic quadrilateral theorem: opposite angles are supplementary (sum = 180°)',
            'Angle A + Angle C = 180°',
            'x = 180° − 73° = 107°',
            'Angle B + Angle D = 180°',
            'Angle D = 180° − 110° = 70°',
            'Verify: 73° + 107° = 180° ✓ and 110° + 70° = 180° ✓'
        ],
        helper: 'Opposite angles in a cyclic quadrilateral sum to 180°',
        answer: 'Angle C = 107°; Angle D = 70°',
        realWorldContext: 'Cyclic structures in engineering, antenna array geometry',
        diagramInfo: {
            type: 'circle_theorem',
            registryKey: 'circleTheorem3',
            renderOptions: {
                title: 'Circle Theorem: Cyclic Quadrilateral',
                showCircle: true,
                showQuadrilateral: true,
                showAngles: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_circle_theorem3_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 14. CIRCLE THEOREM 4 – TANGENT AND RADIUS ───────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Tangent–Radius Right Angle',
        problem: 'A tangent touches a circle at point T. O is the centre. OT = 5 cm. A point P on the tangent is 12 cm from T. Find the distance OP.',
        parameters: { radius: 5, tangentLength: 12, theorem: 'tangent_radius' },
        type: 'circle_theorem',
        subparts: [
            'Tangent–radius theorem: OT ⊥ tangent at T → angle OTP = 90°',
            'Triangle OTP is right-angled at T',
            'Apply Pythagorean theorem: OP² = OT² + TP²',
            'OP² = 5² + 12² = 25 + 144 = 169',
            'OP = √169 = 13 cm'
        ],
        helper: 'Tangent is perpendicular to radius at point of contact; use Pythagorean theorem for distance problems',
        answer: 'OP = 13 cm',
        realWorldContext: 'Gear tooth geometry, road curve design, satellite orbit tangents',
        diagramInfo: {
            type: 'circle_theorem',
            registryKey: 'circleTheorem4',
            renderOptions: {
                title: 'Circle Theorem: Tangent and Radius',
                showCircle: true,
                showTangent: true,
                showRadius: true,
                showRightAngle: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_circle_theorem4_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 15. COORDINATE GEOMETRY GRID ────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Plotting Points on a Coordinate Plane',
        problem: 'Plot the points A(2, 3), B(5, 7), and C(−1, 4) on a Cartesian plane. State the quadrant each point lies in.',
        parameters: { points: [[2, 3], [5, 7], [-1, 4]] },
        type: 'coordinate_grid',
        subparts: [
            'Cartesian plane: x-axis (horizontal), y-axis (vertical)',
            'A(2, 3): x > 0, y > 0 → Quadrant I',
            'B(5, 7): x > 0, y > 0 → Quadrant I',
            'C(−1, 4): x < 0, y > 0 → Quadrant II',
            'To plot: move x units along x-axis, then y units along y-axis'
        ],
        helper: 'Q1: (+,+); Q2: (−,+); Q3: (−,−); Q4: (+,−)',
        answer: 'A and B are in Quadrant I; C is in Quadrant II',
        realWorldContext: 'GPS coordinates, data graphs, map grids',
        diagramInfo: {
            type: 'coordinate_grid',
            registryKey: 'coordinateGeometryGrid',
            renderOptions: {
                title: 'Coordinate Geometry',
                showGrid: true,
                showAxes: true,
                showPoints: true,
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_coordinate_grid_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 16. DISTANCE FORMULA ────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Distance Between Two Points',
        problem: 'Find the distance between points P(1, 2) and Q(4, 6). Then determine whether the triangle with vertices A(0,0), B(3,4), C(6,0) is isosceles.',
        parameters: { point1: [1, 2], point2: [4, 6], triangle: [[0,0],[3,4],[6,0]] },
        type: 'distance_formula',
        subparts: [
            'Distance formula: d = √[(x₂−x₁)² + (y₂−y₁)²]',
            'PQ = √[(4−1)² + (6−2)²] = √[9 + 16] = √25 = 5 units',
            'AB = √[(3−0)² + (4−0)²] = √[9+16] = 5',
            'BC = √[(6−3)² + (0−4)²] = √[9+16] = 5',
            'AC = √[(6−0)² + (0−0)²] = 6',
            'AB = BC = 5 ≠ AC = 6 → Triangle ABC is isosceles'
        ],
        helper: 'Distance formula derived from Pythagorean theorem; isosceles triangle has at least two equal sides',
        answer: 'PQ = 5 units; Triangle ABC is isosceles (AB = BC = 5)',
        realWorldContext: 'Navigation distance, GPS path calculation, spatial data analysis',
        diagramInfo: {
            type: 'distance_formula',
            registryKey: 'distanceFormula',
            renderOptions: {
                title: 'Distance Formula',
                showPoints: true,
                showRightTriangle: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_distance_formula_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 17. MIDPOINT FORMULA ────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Finding the Midpoint of a Segment',
        problem: 'Find the midpoint M of segment joining A(2, 3) and B(8, 9). Then, if M is the midpoint of PQ and M = (5, 6) and P = (2, 3), find Q.',
        parameters: { point1: [2, 3], point2: [8, 9] },
        type: 'midpoint_formula',
        subparts: [
            'Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
            'M = ((2+8)/2, (3+9)/2) = (5, 6)',
            'To find Q: use M = (P+Q)/2 → Q = 2M − P',
            'Qₓ = 2(5) − 2 = 8, Q_y = 2(6) − 3 = 9',
            'Q = (8, 9) ✓ (consistent with original point B)'
        ],
        helper: 'Midpoint = average of coordinates; reverse: Q = 2M − P',
        answer: 'M = (5, 6); Q = (8, 9)',
        realWorldContext: 'Finding the centre of a line segment, bisecting a boundary, averaging two locations',
        diagramInfo: {
            type: 'midpoint_formula',
            registryKey: 'midpointFormula',
            renderOptions: {
                title: 'Midpoint Formula',
                showPoints: true,
                showSegment: true,
                showMidpoint: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_midpoint_formula_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 18. SLOPE OF A LINE ─────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Calculating and Interpreting Slope',
        problem: 'Find the slope of the line through P(1, 2) and Q(5, 8). Then determine whether the line through A(0, 3) and B(4, 3) is horizontal, and the line through C(2, 1) and D(2, 7) is vertical.',
        parameters: { point1: [1, 2], point2: [5, 8] },
        type: 'slope_diagram',
        subparts: [
            'Slope formula: m = (y₂ − y₁) / (x₂ − x₁)',
            'm(PQ) = (8 − 2) / (5 − 1) = 6 / 4 = 3/2',
            'Line AB: y-coordinates equal (3 = 3) → slope = 0 → horizontal line',
            'Line CD: x-coordinates equal (2 = 2) → slope undefined → vertical line',
            'Positive slope: rises left to right; zero slope: horizontal; undefined: vertical'
        ],
        helper: 'm = rise/run = Δy/Δx; horizontal: m = 0; vertical: m undefined; parallel lines have equal slopes',
        answer: 'm(PQ) = 3/2; AB is horizontal (m = 0); CD is vertical (m undefined)',
        realWorldContext: 'Road gradients, roof pitch, ramp inclines, trend lines in data',
        diagramInfo: {
            type: 'slope_diagram',
            registryKey: 'slopeOfLine',
            renderOptions: {
                title: 'Slope of a Line',
                showLine: true,
                showRise: true,
                showRun: true,
                showSlope: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_slope_of_line_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 19. EQUATION OF A LINE ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Forms of a Linear Equation',
        problem: 'A line passes through (2, 5) with slope 3. Write the equation in slope-intercept form, point-slope form, and general form.',
        parameters: { point: [2, 5], slope: 3 },
        type: 'line_equation',
        subparts: [
            'Point-slope form: y − y₁ = m(x − x₁)',
            'y − 5 = 3(x − 2)',
            'Slope-intercept form: y = mx + c → y = 3x − 1 (c = 5 − 6 = −1)',
            'General form: ax + by + c = 0 → 3x − y − 1 = 0',
            'Verify: at x = 2, y = 3(2) − 1 = 5 ✓'
        ],
        helper: 'Slope-intercept: y = mx + c; Point-slope: y − y₁ = m(x − x₁); General: ax + by + c = 0',
        answer: 'Point-slope: y − 5 = 3(x − 2); Slope-intercept: y = 3x − 1; General: 3x − y − 1 = 0',
        realWorldContext: 'Linear modelling, cost functions, speed-distance graphs',
        diagramInfo: {
            type: 'line_equation',
            registryKey: 'equationOfLine',
            renderOptions: {
                title: 'Equation of a Line',
                showSlopeIntercept: true,
                showPointSlope: true,
                showGeneral: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_equation_of_line_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 20. 3D SOLID SHAPES ─────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Identifying 3D Shapes and Their Properties',
        problem: 'Identify the 3D shape with: (a) 6 faces, 12 edges, 8 vertices; (b) 1 curved surface, 2 circular faces; (c) 1 apex, 1 circular base, 1 curved surface.',
        parameters: { shapes: ['cube', 'cylinder', 'cone'] },
        type: 'solid_shapes',
        subparts: [
            '(a) 6 faces + 12 edges + 8 vertices → Cube (verify: Euler\'s formula F + V − E = 6 + 8 − 12 = 2 ✓)',
            '(b) 1 curved surface + 2 circular faces → Cylinder',
            '(c) 1 apex + 1 circular base + 1 curved surface → Cone',
            'Euler\'s formula for polyhedra: F + V − E = 2',
            'Curved surfaces do not follow Euler\'s formula (not polyhedra)'
        ],
        helper: 'Cube: 6F, 12E, 8V; Cuboid: 6F, 12E, 8V; Cylinder: 2 circles + 1 curved face; Cone: 1 circle + 1 curved face + apex',
        answer: '(a) Cube; (b) Cylinder; (c) Cone',
        realWorldContext: 'Packaging design, architectural modelling, 3D printing',
        diagramInfo: {
            type: 'solid_shapes',
            registryKey: 'solid3DShapes',
            renderOptions: {
                title: '3D Shapes',
                showShapes: true,
                showNets: false,
                showDimensions: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_solid_3d_shapes_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 21. NETS OF 3D SHAPES ───────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Net of a Cube',
        problem: 'A cube has side length 4 cm. Sketch its net and calculate the total surface area from the net.',
        parameters: { shape: 'cube', sideLength: 4 },
        type: 'shape_nets',
        subparts: [
            'Net of a cube: 6 connected squares, each of side 4 cm',
            'Area of one square face = 4² = 16 cm²',
            'Total surface area = 6 × 16 = 96 cm²',
            'Valid nets: there are 11 distinct nets for a cube',
            'The net must fold so opposite faces are correctly placed'
        ],
        helper: 'Net = unfolded 2D representation; surface area = sum of all face areas from the net',
        answer: 'Total surface area = 96 cm²',
        realWorldContext: 'Cardboard box design, gift wrapping, packaging templates',
        diagramInfo: {
            type: 'shape_nets',
            registryKey: 'nets3DShapes',
            renderOptions: {
                title: 'Nets of 3D Shapes',
                showNet: true,
                show3DShape: true,
                showFolding: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_nets_3d_shapes_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 22. SURFACE AREA ────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Surface Area of a Cuboid',
        problem: 'A cuboid has length 5 cm, width 3 cm, height 4 cm. Calculate its total surface area by finding the area of each pair of faces.',
        parameters: { shape: 'cuboid', dimensions: { length: 5, width: 3, height: 4 } },
        type: 'surface_area',
        subparts: [
            'A cuboid has 3 pairs of identical rectangular faces',
            'Front/back faces: 2 × (l × h) = 2 × (5 × 4) = 40 cm²',
            'Top/bottom faces: 2 × (l × w) = 2 × (5 × 3) = 30 cm²',
            'Left/right faces: 2 × (w × h) = 2 × (3 × 4) = 24 cm²',
            'Total SA = 40 + 30 + 24 = 94 cm²',
            'Formula: SA = 2(lw + lh + wh) = 2(15 + 20 + 12) = 2(47) = 94 cm²'
        ],
        helper: 'SA of cuboid = 2(lw + lh + wh); identify all three pairs of faces',
        answer: 'Total surface area = 94 cm²',
        realWorldContext: 'Painting walls and ceilings, wrapping a parcel, heat loss calculation',
        diagramInfo: {
            type: 'surface_area',
            registryKey: 'surfaceAreaDiagram',
            renderOptions: {
                title: 'Surface Area',
                showShape: true,
                showFaces: true,
                showCalculation: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_surface_area_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 23. VOLUME ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Volume of a Cylinder',
        problem: 'A cylinder has radius 3 cm and height 5 cm. Calculate its volume. Then find how many litres of water it holds (1 litre = 1000 cm³).',
        parameters: { shape: 'cylinder', dimensions: { radius: 3, height: 5 } },
        type: 'volume_diagram',
        subparts: [
            'Volume of cylinder: V = πr²h',
            'V = π × 3² × 5 = π × 9 × 5 = 45π cm³',
            'V ≈ 45 × 3.14159 = 141.37 cm³',
            'Convert to litres: 141.37 ÷ 1000 = 0.14137 litres ≈ 0.141 L',
            'Cross-sectional area = πr² = 9π cm²; multiply by height gives volume'
        ],
        helper: 'V(cylinder) = πr²h; V(cone) = ⅓πr²h; V(sphere) = (4/3)πr³; 1 L = 1000 cm³',
        answer: 'Volume = 45π ≈ 141.37 cm³ ≈ 0.141 litres',
        realWorldContext: 'Liquid storage tanks, canned food capacity, pipe flow calculations',
        diagramInfo: {
            type: 'volume_diagram',
            registryKey: 'volumeDiagram',
            renderOptions: {
                title: 'Volume',
                showShape: true,
                showDimensions: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new MathematicsDiagramsRender();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometry_volume_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

