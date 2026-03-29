Here's the geometry-related problem generator with diagrams based on the trigonometry registry keys:
generateRelatedTrigonometryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // ── 1. Right Triangle Trig Ratios ──────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Right Triangle Trigonometric Ratios',
        problem: 'A right triangle has an angle of 30°. The hypotenuse is 10 cm. Using SOH CAH TOA, find the opposite and adjacent sides.',
        parameters: { angle: 30, hypotenuse: 10 },
        type: 'trig_ratios',
        subparts: [
            'SOH: sin(30°) = opposite / hypotenuse',
            'Opposite = 10 × sin(30°) = 10 × 0.5 = 5 cm',
            'CAH: cos(30°) = adjacent / hypotenuse',
            'Adjacent = 10 × cos(30°) = 10 × (√3/2) = 8.66 cm',
            'TOA: tan(30°) = opposite / adjacent = 5 / 8.66 = 0.577'
        ],
        helper: 'SOH CAH TOA: sin = opp/hyp, cos = adj/hyp, tan = opp/adj',
        answer: 'Opposite = 5 cm, Adjacent ≈ 8.66 cm, tan(30°) = 1/√3 ≈ 0.577',
        realWorldContext: 'Architecture, surveying, construction angle calculations',
        diagramInfo: {
            type: 'trig_ratios',
            registryKey: 'rightTriangleTrigRatios',
            renderOptions: {
                title: 'Trigonometric Ratios',
                showTriangle: true,
                showSides: true,
                showRatios: true,
                showSOHCAHTOA: true,
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
                const filename = `math_trig_ratios_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 2. Unit Circle ─────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Unit Circle Special Angles',
        problem: 'Using the unit circle, find the exact values of sin, cos, and tan for 135°, 210°, and 315°.',
        parameters: { angles: [135, 210, 315] },
        type: 'unit_circle',
        subparts: [
            '135° is in Quadrant II: reference angle = 45°',
            'sin(135°) = sin(45°) = √2/2, cos(135°) = -√2/2, tan(135°) = -1',
            '210° is in Quadrant III: reference angle = 30°',
            'sin(210°) = -1/2, cos(210°) = -√3/2, tan(210°) = 1/√3',
            '315° is in Quadrant IV: reference angle = 45°',
            'sin(315°) = -√2/2, cos(315°) = √2/2, tan(315°) = -1'
        ],
        helper: 'CAST rule: All positive in Q1, Sin in Q2, Tan in Q3, Cos in Q4',
        answer: '135°: (−√2/2, √2/2); 210°: (−√3/2, −1/2); 315°: (√2/2, −√2/2)',
        realWorldContext: 'Navigation, circular motion, signal processing',
        diagramInfo: {
            type: 'unit_circle',
            registryKey: 'unitCircle',
            renderOptions: {
                title: 'Unit Circle',
                showCircle: true,
                showAngles: true,
                showCoordinates: true,
                showQuadrants: true,
                showSpecialAngles: true,
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
                const filename = `math_unit_circle_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 3. Special Angles Triangles ────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Special Angle Triangles (30-60-90 and 45-45-90)',
        problem: 'A 30-60-90 triangle has its shortest side equal to 5 cm. Find all other sides. Then for a 45-45-90 triangle with hypotenuse 8 cm, find the legs.',
        parameters: { shortSide: 5, hypotenuse45: 8 },
        type: 'special_angles',
        subparts: [
            '30-60-90 ratios: 1 : √3 : 2',
            'Shortest side (opp 30°) = 5 cm',
            'Middle side (opp 60°) = 5√3 ≈ 8.66 cm',
            'Hypotenuse (opp 90°) = 10 cm',
            '45-45-90 ratios: 1 : 1 : √2',
            'Hypotenuse = 8 cm → each leg = 8/√2 = 4√2 ≈ 5.66 cm'
        ],
        helper: '30-60-90: sides are x, x√3, 2x; 45-45-90: sides are x, x, x√2',
        answer: '30-60-90: 5, 5√3, 10 cm; 45-45-90 legs: 4√2 ≈ 5.66 cm each',
        realWorldContext: 'Roof pitch calculations, tile patterns, staircase design',
        diagramInfo: {
            type: 'special_angles',
            registryKey: 'specialAnglesTriangle',
            renderOptions: {
                title: 'Special Angle Triangles',
                show306090: true,
                show454590: true,
                showRatios: true,
                showValues: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            },
            canvasSize: { width: 1000, height: 500 }
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
                const filename = `math_special_angles_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 4. Trig Identities Visual ──────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Pythagorean Trigonometric Identity',
        problem: 'Using the Pythagorean identity, if sin(θ) = 3/5 and θ is in the first quadrant, find cos(θ) and tan(θ).',
        parameters: { sinTheta: 3/5, quadrant: 1 },
        type: 'trig_identities',
        subparts: [
            'Pythagorean identity: sin²(θ) + cos²(θ) = 1',
            'sin²(θ) = (3/5)² = 9/25',
            'cos²(θ) = 1 - 9/25 = 16/25',
            'cos(θ) = 4/5 (positive in Q1)',
            'tan(θ) = sin(θ)/cos(θ) = (3/5)/(4/5) = 3/4'
        ],
        helper: 'sin²θ + cos²θ = 1; tan θ = sin θ / cos θ; check quadrant for sign',
        answer: 'cos(θ) = 4/5 = 0.8, tan(θ) = 3/4 = 0.75',
        realWorldContext: 'Simplifying expressions in physics, engineering signal analysis',
        diagramInfo: {
            type: 'trig_identities',
            registryKey: 'trigIdentitiesVisual',
            renderOptions: {
                title: 'Trigonometric Identities',
                showIdentity: true,
                showProof: true,
                showUnitCircle: true,
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
                const filename = `math_trig_identities_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 5. Sine Rule ───────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sine Rule in Non-Right Triangle',
        problem: 'In triangle ABC, angle A = 40°, angle B = 60°, and side a = 5 cm. Find side b and angle C.',
        parameters: { A: 40, B: 60, a: 5, b: 7 },
        type: 'sine_rule',
        subparts: [
            'Sine rule: a/sin(A) = b/sin(B) = c/sin(C)',
            'Angle C = 180° - 40° - 60° = 80°',
            'b/sin(60°) = 5/sin(40°)',
            'b = 5 × sin(60°) / sin(40°)',
            'b = 5 × 0.866 / 0.643 = 6.74 cm'
        ],
        helper: 'Sine rule: a/sinA = b/sinB = c/sinC; angles sum to 180°',
        answer: 'Angle C = 80°, side b ≈ 6.74 cm',
        realWorldContext: 'Land surveying, navigation, triangulation in GPS systems',
        diagramInfo: {
            type: 'sine_rule',
            registryKey: 'sineRuleDiagram',
            renderOptions: {
                title: 'Sine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
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
                const filename = `math_sine_rule_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 6. Cosine Rule ─────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cosine Rule in Non-Right Triangle',
        problem: 'In triangle ABC, side a = 5 cm, side b = 7 cm, and the included angle C = 60°. Find side c.',
        parameters: { a: 5, b: 7, C: 60 },
        type: 'cosine_rule',
        subparts: [
            'Cosine rule: c² = a² + b² - 2ab·cos(C)',
            'c² = 5² + 7² - 2(5)(7)·cos(60°)',
            'c² = 25 + 49 - 70 × 0.5',
            'c² = 74 - 35 = 39',
            'c = √39 ≈ 6.24 cm'
        ],
        helper: 'Cosine rule: c² = a² + b² − 2ab cosC; use when two sides and included angle are known',
        answer: 'Side c = √39 ≈ 6.24 cm',
        realWorldContext: 'Engineering design, robotics arm calculations, bridge construction',
        diagramInfo: {
            type: 'cosine_rule',
            registryKey: 'cosineRuleDiagram',
            renderOptions: {
                title: 'Cosine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
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
                const filename = `math_cosine_rule_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 7. Triangle Area Formula (Trig) ────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Triangle Area Using Trigonometry',
        problem: 'A triangle has two sides a = 6 cm and b = 8 cm with included angle C = 30°. Find the area.',
        parameters: { a: 6, b: 8, C: 30 },
        type: 'triangle_area_trig',
        subparts: [
            'Area formula: Area = ½ab·sin(C)',
            'Area = ½ × 6 × 8 × sin(30°)',
            'Area = ½ × 6 × 8 × 0.5',
            'Area = 24 × 0.5 = 12 cm²'
        ],
        helper: 'Area = ½ab sinC; this works for any triangle when two sides and included angle are known',
        answer: 'Area = 12 cm²',
        realWorldContext: 'Land area measurement, architectural floor plans',
        diagramInfo: {
            type: 'triangle_area_trig',
            registryKey: 'triangleAreaFormula',
            renderOptions: {
                title: 'Triangle Area (Trigonometry)',
                showTriangle: true,
                showHeight: true,
                showFormula: true,
                showCalculation: true,
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
                const filename = `math_triangle_area_trig_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 8. Radian Measure ──────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Radian Measure and Arc Length',
        problem: 'Convert 270° to radians. Then find the arc length and area of a sector with radius 6 cm and central angle 270°.',
        parameters: { degrees: 270, radius: 6 },
        type: 'radian_measure',
        subparts: [
            'Conversion: radians = degrees × (π/180)',
            '270° × (π/180) = 3π/2 radians',
            'Arc length: s = rθ = 6 × (3π/2) = 9π ≈ 28.27 cm',
            'Sector area: A = ½r²θ = ½ × 36 × (3π/2) = 27π ≈ 84.82 cm²'
        ],
        helper: 'Radians = degrees × π/180; arc length s = rθ; sector area A = ½r²θ (θ in radians)',
        answer: '270° = 3π/2 rad; arc length = 9π ≈ 28.27 cm; sector area = 27π ≈ 84.82 cm²',
        realWorldContext: 'Gear rotation, clock mechanics, circular track distance',
        diagramInfo: {
            type: 'radian_measure',
            registryKey: 'radianMeasure',
            renderOptions: {
                title: 'Radian Measure',
                showCircle: true,
                showRadians: true,
                showDegrees: true,
                showConversion: true,
                showArcLength: true,
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
                const filename = `math_radian_measure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 9. Sine Graph ──────────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sine Graph Properties',
        problem: 'For y = sin(x), identify the amplitude, period, domain, range, and the coordinates of all key points within one full cycle [0, 2π].',
        parameters: { function: 'sine', amplitude: 1, period: '2π' },
        type: 'trig_graph',
        subparts: [
            'Amplitude = 1 (maximum value of |sin x|)',
            'Period = 2π (one complete cycle)',
            'Domain: all real numbers (−∞, ∞)',
            'Range: [−1, 1]',
            'Key points: (0,0), (π/2, 1), (π, 0), (3π/2, −1), (2π, 0)',
            'Zeros at x = 0, π, 2π; Maximum at x = π/2; Minimum at x = 3π/2'
        ],
        helper: 'y = a sin(bx + c) + d: amplitude=|a|, period=2π/b, phase shift=−c/b, vertical shift=d',
        answer: 'Amplitude = 1, Period = 2π, Range = [−1, 1], key points at (0,0), (π/2,1), (π,0), (3π/2,−1), (2π,0)',
        realWorldContext: 'Sound wave modelling, alternating current (AC) circuits, tidal prediction',
        diagramInfo: {
            type: 'trig_graph',
            registryKey: 'sineGraph',
            renderOptions: {
                title: 'Sine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
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
                const filename = `math_sine_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 10. Cosine Graph ───────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Cosine Graph Properties',
        problem: 'For y = cos(x), identify the amplitude, period, and key points. How does it differ from the sine graph?',
        parameters: { function: 'cosine', amplitude: 1, period: '2π' },
        type: 'trig_graph',
        subparts: [
            'Amplitude = 1, Period = 2π, Range = [−1, 1]',
            'Key points: (0, 1), (π/2, 0), (π, −1), (3π/2, 0), (2π, 1)',
            'Cosine starts at maximum (1), sine starts at zero',
            'cos(x) = sin(x + π/2): cosine leads sine by π/2',
            'Zeros at x = π/2, 3π/2; Max at x = 0, 2π; Min at x = π'
        ],
        helper: 'cos(x) is a horizontal shift of sin(x) by π/2 to the left; both have amplitude 1 and period 2π',
        answer: 'Amplitude = 1, Period = 2π, starts at (0,1); cos(x) = sin(x + π/2)',
        realWorldContext: 'Phase difference in AC circuits, pendulum motion modelling',
        diagramInfo: {
            type: 'trig_graph',
            registryKey: 'cosineGraph',
            renderOptions: {
                title: 'Cosine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
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
                const filename = `math_cosine_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 11. Tangent Graph ──────────────────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Tangent Graph Properties and Asymptotes',
        problem: 'For y = tan(x), identify the period, asymptotes, and key points within [−π/2, π/2]. Why are there no amplitude or defined range?',
        parameters: { function: 'tangent', period: 'π' },
        type: 'trig_graph',
        subparts: [
            'tan(x) = sin(x)/cos(x); undefined when cos(x) = 0',
            'Vertical asymptotes at x = π/2 + nπ for all integers n',
            'Period = π (half that of sine and cosine)',
            'No amplitude: range is (−∞, ∞)',
            'Key points: (−π/4, −1), (0, 0), (π/4, 1)',
            'Passes through origin with increasing behaviour'
        ],
        helper: 'tan is undefined at x = ±π/2, ±3π/2 ...; period = π; no amplitude since range is unbounded',
        answer: 'Period = π; asymptotes at x = π/2 + nπ; range = (−∞, ∞); key point (0, 0)',
        realWorldContext: 'Gradient calculations, slope of inclines, angle of elevation problems',
        diagramInfo: {
            type: 'trig_graph',
            registryKey: 'tangentGraph',
            renderOptions: {
                title: 'Tangent Graph',
                showGraph: true,
                showAsymptotes: true,
                showPeriod: true,
                showKeyPoints: true,
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
                const filename = `math_tangent_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                console.log(`✓ Successfully generated: ${filename}`);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    // ── 12. Trig Graph Transformations ─────────────────────────────────────────
    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Transformations of Trigonometric Graphs',
        problem: 'For y = 3 sin(2x − π/4) + 1, find the amplitude, period, phase shift, and vertical shift. Sketch one full cycle.',
        parameters: { a: 3, b: 2, c: Math.PI / 4, d: 1, baseFunction: 'sine' },
        type: 'trig_transformations',
        subparts: [
            'General form: y = a sin(bx + c) + d',
            'Amplitude = |a| = |3| = 3',
            'Period = 2π/b = 2π/2 = π',
            'Phase shift = −c/b = −(−π/4)/2 = π/8 to the right',
            'Vertical shift = d = +1 (up 1 unit)',
            'Cycle starts at x = π/8, ends at x = π/8 + π = 9π/8',
            'Maximum value = 3 + 1 = 4; Minimum value = −3 + 1 = −2'
        ],
        helper: 'y = a sin(bx + c) + d: amplitude=|a|, period=2π/b, phase shift=−c/b, vertical shift=d',
        answer: 'Amplitude = 3, Period = π, Phase shift = π/8 right, Vertical shift = +1, Max = 4, Min = −2',
        realWorldContext: 'Modelling seasonal temperature variation, vibration analysis in mechanical engineering',
        diagramInfo: {
            type: 'trig_transformations',
            registryKey: 'trigGraphTransformations',
            renderOptions: {
                title: 'Trigonometric Graph Transformations',
                showOriginal: true,
                showTransformed: true,
                showParameters: true,
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
                const filename = `math_trig_transformations_${Date.now()}.png`;
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

