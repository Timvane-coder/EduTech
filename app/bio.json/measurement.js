Here is the complete updated code for the Enhanced Geometric Measurement Workbook, structured identically to the factorization workbook pattern:
// Enhanced Geometric Measurement Workbook - Comprehensive Geometric Measurement System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedGeometricMeasurementWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "geometric";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        this.diagramRenderer = new MathematicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentPractical = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includePracticals = options.includePracticals !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.mathematicsSymbols = this.initializeMathematicsSymbols();
        this.setThemeColors();
        this.initializeGeometricTopics();
        this.initializeGeometricLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            geometric: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff8e1',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                perimeterBg: '#e8f5e9',
                areaBg: '#e3f2fd',
                surfaceAreaBg: '#fff8e1',
                volumeBg: '#fce4ec',
                arcLengthBg: '#f3e5f5',
                sectorAreaBg: '#e0f7fa',
                trigBg: '#e8eaf6',
                pythagoreanBg: '#fff3e0',
                bearingsBg: '#f1f8e9'
            },
            measurement: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#1b5e20',
                headerText: '#ffffff',
                sectionBg: '#c8e6c9',
                sectionText: '#1b5e20',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#66bb6a',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                perimeterBg: '#e8f5e9',
                areaBg: '#e3f2fd',
                surfaceAreaBg: '#fff8e1',
                volumeBg: '#fce4ec',
                arcLengthBg: '#f3e5f5',
                sectorAreaBg: '#e0f7fa',
                trigBg: '#e8eaf6',
                pythagoreanBg: '#fff3e0',
                bearingsBg: '#f1f8e9'
            }
        };

        this.colors = themes[this.theme] || themes.geometric;
    }

    initializeMathematicsSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'pi': 'π',
            'theta': 'θ',
            'phi': 'φ',
            'sigma': 'Σ',
            'omega': 'Ω',
            'lambda': 'λ',

            // Arrows
            'arrow': '→',
            'doubleArrow': '↔',
            'implies': '⟹',

            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'approximately': '≈',
            'notEqual': '≠',
            'leq': '≤',
            'geq': '≥',
            'infinity': '∞',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            'superscript4': '⁴',
            'degree': '°',
            'therefore': '∴',
            'because': '∵',
            'perpendicular': '⊥',
            'parallel': '∥',
            'angle': '∠',
            'triangle': '△',
            'similar': '∼',
            'congruent': '≅',

            // Geometry-specific
            'rightAngle': '⊾',
            'arc': '⌢',
            'diameter': 'Ø',
            'radius': 'r',
            'pi_approx': '3.14159...',
            'bearing': 'N/S/E/W',

            // Number types
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'natural': 'ℕ'
        };
    }

    initializeGeometricTopics() {
        this.mathematicsTopics = {
            perimeter: {
                patterns: [
                    /perimeter|boundary.?length|distance.?around/i,
                    /perimeter.?of.?(rectangle|square|triangle|polygon|circle)/i,
                    /circumference/i,
                    /fence.*length|border.*length/i
                ],
                handler: this.handlePerimeter.bind(this),
                name: 'Perimeter and Circumference',
                category: 'geometric_measurement',
                description: 'Calculating the total distance around the boundary of a 2D shape',
                difficulty: 'beginner',
                prerequisites: ['addition', 'multiplication', 'basic_shapes']
            },

            area: {
                patterns: [
                    /\barea\b|surface.?of.?2d|2d.?area/i,
                    /area.?of.?(rectangle|square|triangle|circle|trapezoid|trapezium|parallelogram|rhombus)/i,
                    /square.?units|unit.?square/i
                ],
                handler: this.handleArea.bind(this),
                name: 'Area of 2D Shapes',
                category: 'geometric_measurement',
                description: 'Calculating the amount of space enclosed within a 2D shape',
                difficulty: 'beginner',
                prerequisites: ['perimeter', 'multiplication', 'fractions']
            },

            surface_area: {
                patterns: [
                    /surface.?area|total.?surface/i,
                    /surface.?area.?of.?(cube|cuboid|prism|pyramid|cylinder|cone|sphere)/i,
                    /faces.?area|net.?area/i
                ],
                handler: this.handleSurfaceArea.bind(this),
                name: 'Surface Area of 3D Shapes',
                category: 'geometric_measurement',
                description: 'Calculating the total area of all faces of a 3D solid',
                difficulty: 'intermediate',
                prerequisites: ['area', 'basic_3d_shapes', 'nets']
            },

            volume: {
                patterns: [
                    /\bvolume\b|cubic.?units|capacity/i,
                    /volume.?of.?(cube|cuboid|prism|pyramid|cylinder|cone|sphere)/i,
                    /how.?much.?fits|space.?inside/i
                ],
                handler: this.handleVolume.bind(this),
                name: 'Volume of 3D Shapes',
                category: 'geometric_measurement',
                description: 'Calculating the amount of space enclosed within a 3D solid',
                difficulty: 'intermediate',
                prerequisites: ['area', 'surface_area', 'basic_3d_shapes']
            },

            arc_length: {
                patterns: [
                    /arc.?length|length.?of.?arc/i,
                    /arc.?of.?circle|circular.?arc/i,
                    /portion.?of.?circumference/i
                ],
                handler: this.handleArcLength.bind(this),
                name: 'Arc Length',
                category: 'geometric_measurement',
                description: 'Calculating the length of a portion of a circle\'s circumference',
                difficulty: 'intermediate',
                prerequisites: ['perimeter', 'area', 'fractions', 'angles']
            },

            sector_area: {
                patterns: [
                    /sector.?area|area.?of.?sector/i,
                    /pie.?slice.?area|wedge.?area/i,
                    /portion.?of.?circle.?area/i
                ],
                handler: this.handleSectorArea.bind(this),
                name: 'Sector Area',
                category: 'geometric_measurement',
                description: 'Calculating the area of a sector (pie-slice region) of a circle',
                difficulty: 'intermediate',
                prerequisites: ['area', 'arc_length', 'fractions', 'angles']
            },

            trigonometry_ratios: {
                patterns: [
                    /trigonometry|trig.?ratio|sine|cosine|tangent/i,
                    /sin|cos|tan|soh.?cah.?toa/i,
                    /opposite|adjacent|hypotenuse/i,
                    /right.?angle.?triangle.?ratio/i
                ],
                handler: this.handleTrigonometryRatios.bind(this),
                name: 'Trigonometric Ratios',
                category: 'geometric_measurement',
                description: 'Using sine, cosine, and tangent ratios to find unknown sides and angles in right-angled triangles',
                difficulty: 'intermediate',
                prerequisites: ['pythagorean_theorem', 'right_angle_triangles', 'fractions', 'angles']
            },

            pythagorean_theorem: {
                patterns: [
                    /pythagoras|pythagorean.?theorem|pythagorean.?rule/i,
                    /a²\s*\+\s*b²\s*=\s*c²|hypotenuse/i,
                    /right.?triangle.?sides|right.?angle.?sides/i
                ],
                handler: this.handlePythagoreanTheorem.bind(this),
                name: 'Pythagorean Theorem',
                category: 'geometric_measurement',
                description: 'Using a² + b² = c² to find unknown sides in right-angled triangles',
                difficulty: 'intermediate',
                prerequisites: ['area', 'squares', 'square_roots', 'triangles']
            },

            bearings: {
                patterns: [
                    /bearing|compass.?direction|true.?north/i,
                    /north|south|east|west|N\d|S\d/i,
                    /three.?figure.?bearing|compass.?bearing/i,
                    /navigation|direction.?angle/i
                ],
                handler: this.handleBearings.bind(this),
                name: 'Bearings and Navigation',
                category: 'geometric_measurement',
                description: 'Using three-figure bearings and trigonometry to solve navigation and direction problems',
                difficulty: 'advanced',
                prerequisites: ['trigonometry_ratios', 'pythagorean_theorem', 'angles', 'directions']
            }
        };
    }

    initializeGeometricLessons() {
        this.lessons = {
            perimeter: {
                title: "Perimeter and Circumference: Measuring the Boundary",
                concepts: [
                    "Perimeter is the total distance around the outside of a 2D shape",
                    "Each shape has a specific formula based on its properties",
                    "Circumference is the special name for the perimeter of a circle",
                    "Units of perimeter are always linear (cm, m, km, etc.)",
                    "Composite shapes require decomposing into recognizable components"
                ],
                theory: "Perimeter measures the length of the boundary enclosing a 2D region. The concept is fundamental to fencing, framing, bordering, and any real application requiring knowledge of a shape's outer edge. For polygons, perimeter is the sum of all side lengths. For circles, circumference requires the irrational constant π.",
                keyDefinitions: {
                    "Perimeter": "The total distance around the outside boundary of a 2D shape; measured in linear units",
                    "Circumference": "The perimeter of a circle; C = 2πr = πd",
                    "Diameter": "The distance across a circle through its centre; d = 2r",
                    "Radius": "The distance from the centre of a circle to any point on its circumference; r = d/2",
                    "Regular Polygon": "A polygon with all sides equal and all angles equal",
                    "Composite Shape": "A shape formed by combining two or more standard shapes",
                    "π (pi)": "The ratio of a circle's circumference to its diameter; π ≈ 3.14159..."
                },
                formulas: {
                    rectangle: { formula: "P = 2(l + w)", variables: "l = length, w = width", note: "Also written as P = 2l + 2w" },
                    square: { formula: "P = 4s", variables: "s = side length", note: "Special case of rectangle with l = w" },
                    triangle: { formula: "P = a + b + c", variables: "a, b, c = side lengths", note: "Sum of all three sides" },
                    regularPolygon: { formula: "P = n × s", variables: "n = number of sides, s = side length", note: "Only valid when all sides are equal" },
                    circle: { formula: "C = 2πr = πd", variables: "r = radius, d = diameter", note: "π ≈ 3.14159; use exact π where possible" },
                    semicircle: { formula: "P = πr + 2r = r(π + 2)", variables: "r = radius", note: "Curved part (half circumference) + diameter" },
                    trapezium: { formula: "P = a + b + c + d", variables: "a, b = parallel sides; c, d = non-parallel sides", note: "Sum all four sides" }
                },
                workedExamples: [
                    {
                        shape: "Rectangle",
                        given: "l = 8 cm, w = 5 cm",
                        solution: "P = 2(8 + 5) = 2 × 13 = 26 cm"
                    },
                    {
                        shape: "Circle",
                        given: "r = 7 cm",
                        solution: "C = 2π × 7 = 14π ≈ 43.98 cm"
                    },
                    {
                        shape: "Composite shape",
                        given: "Rectangle 10 × 6 cm with semicircle on one end (radius 3 cm)",
                        solution: "P = 2 × 10 + 6 + π × 3 = 20 + 6 + 3π ≈ 35.42 cm (top, bottom, one side, curved part)"
                    }
                ],
                applications: [
                    "Fencing a garden or sports field",
                    "Framing a picture or window",
                    "Calculating the length of trim or border material",
                    "Track and running circuit design",
                    "GPS perimeter measurement for surveying"
                ]
            },

            area: {
                title: "Area of 2D Shapes: Measuring Enclosed Space",
                concepts: [
                    "Area measures the amount of flat space enclosed within a 2D shape",
                    "Area is always measured in square units (cm², m², km², etc.)",
                    "Most area formulas are derived from the rectangle formula A = l × w",
                    "Composite shapes can be split into simpler shapes and areas added or subtracted",
                    "A shape can have a small perimeter but a large area, or vice versa"
                ],
                theory: "Area quantifies the two-dimensional space enclosed by a shape's boundary. Every area formula derives from the fundamental concept of counting unit squares. The rectangle is the base shape: all other formulas are justified by rearranging or cutting-and-reattaching rectangular regions. This geometric reasoning — not merely memorizing formulas — builds deep understanding.",
                keyDefinitions: {
                    "Area": "The measure of the 2D space enclosed within a shape's boundary; measured in square units",
                    "Base": "The side of a shape used as the reference length in area formulas",
                    "Height": "The perpendicular distance from the base to the opposite vertex or side; must be perpendicular — not slant height",
                    "Perpendicular Height": "Height measured at 90° to the base; critical distinction from slant height",
                    "Composite Area": "Total area found by adding or subtracting areas of standard shapes"
                },
                formulas: {
                    rectangle: { formula: "A = l × w", variables: "l = length, w = width", derivation: "Count unit squares in l rows of w" },
                    square: { formula: "A = s²", variables: "s = side length", derivation: "Special rectangle with l = w = s" },
                    triangle: { formula: "A = ½ × b × h", variables: "b = base, h = perpendicular height", derivation: "Exactly half of the enclosing rectangle" },
                    parallelogram: { formula: "A = b × h", variables: "b = base, h = perpendicular height", derivation: "Cut and rearrange into rectangle" },
                    trapezium: { formula: "A = ½(a + b) × h", variables: "a, b = parallel sides, h = perpendicular height", derivation: "Average of parallel sides × height" },
                    circle: { formula: "A = πr²", variables: "r = radius", derivation: "Rearranging circle sectors into approximate rectangle" },
                    rhombus: { formula: "A = ½ × d₁ × d₂", variables: "d₁, d₂ = diagonals", derivation: "Diagonals bisect each other at right angles" },
                    kite: { formula: "A = ½ × d₁ × d₂", variables: "d₁, d₂ = diagonals", derivation: "Same as rhombus — one diagonal bisects the other" },
                    sector: { formula: "A = (θ/360) × πr²", variables: "θ = angle in degrees, r = radius", derivation: "Fraction of full circle area" }
                },
                workedExamples: [
                    {
                        shape: "Triangle",
                        given: "base = 12 cm, perpendicular height = 7 cm",
                        solution: "A = ½ × 12 × 7 = 42 cm²"
                    },
                    {
                        shape: "Trapezium",
                        given: "parallel sides 8 cm and 14 cm, height = 5 cm",
                        solution: "A = ½ × (8 + 14) × 5 = ½ × 22 × 5 = 55 cm²"
                    },
                    {
                        shape: "Composite",
                        given: "Rectangle 10 × 6 with triangle on top: base 10, height 4",
                        solution: "A = (10 × 6) + (½ × 10 × 4) = 60 + 20 = 80 cm²"
                    }
                ],
                applications: [
                    "Calculating floor area for carpeting or tiling",
                    "Land area for farming or development",
                    "Paint coverage for walls and ceilings",
                    "Fabric requirements for sewing",
                    "Solar panel sizing and placement"
                ]
            },

            surface_area: {
                title: "Surface Area of 3D Shapes: Measuring Total Face Area",
                concepts: [
                    "Surface area is the total area of all faces (flat and curved) of a 3D solid",
                    "A net is a 2D unfolding of a 3D shape; the total net area equals the surface area",
                    "Curved surfaces (cylinders, cones, spheres) require special formulas",
                    "Lateral surface area excludes the top and bottom faces",
                    "Total surface area = lateral surface area + area of all bases"
                ],
                theory: "Surface area extends the concept of 2D area to three-dimensional solids. Imagine unfolding a 3D shape flat — the resulting net's area is the surface area. This has direct applications in manufacturing, packaging, and material estimation. The key skill is identifying each face, computing its area, and summing all contributions.",
                keyDefinitions: {
                    "Surface Area": "The total area of all outer faces of a 3D solid; measured in square units",
                    "Net": "A 2D diagram showing all faces of a 3D shape unfolded flat",
                    "Lateral Surface Area": "The area of all side faces, excluding bases",
                    "Slant Height": "The height measured along the sloping face of a cone or pyramid; not the vertical height",
                    "Face": "A flat or curved surface forming part of a 3D solid's boundary"
                },
                formulas: {
                    cube: { formula: "SA = 6s²", variables: "s = side length", note: "6 identical square faces" },
                    cuboid: { formula: "SA = 2(lw + lh + wh)", variables: "l = length, w = width, h = height", note: "Three pairs of identical rectangular faces" },
                    cylinder: { formula: "SA = 2πr² + 2πrh", variables: "r = radius, h = height", note: "Two circular bases + rectangular curved surface" },
                    cone: { formula: "SA = πr² + πrl", variables: "r = radius, l = slant height", note: "Circular base + lateral surface" },
                    sphere: { formula: "SA = 4πr²", variables: "r = radius", note: "Entire curved surface" },
                    triangularPrism: { formula: "SA = 2 × (½bh) + (b + s₁ + s₂) × L", variables: "b = triangle base, h = triangle height, s₁, s₂ = other sides, L = prism length", note: "Two triangular faces + three rectangular faces" },
                    squarePyramid: { formula: "SA = s² + 4 × (½ × s × l)", variables: "s = base side, l = slant height", note: "Square base + 4 triangular faces" }
                },
                workedExamples: [
                    {
                        shape: "Cylinder",
                        given: "r = 5 cm, h = 12 cm",
                        solution: "SA = 2π(5)² + 2π(5)(12) = 50π + 120π = 170π ≈ 534.07 cm²"
                    },
                    {
                        shape: "Cone",
                        given: "r = 3 cm, l = 5 cm",
                        solution: "SA = π(3)² + π(3)(5) = 9π + 15π = 24π ≈ 75.40 cm²"
                    },
                    {
                        shape: "Cuboid",
                        given: "l = 8, w = 5, h = 3 cm",
                        solution: "SA = 2(8×5 + 8×3 + 5×3) = 2(40 + 24 + 15) = 2 × 79 = 158 cm²"
                    }
                ],
                applications: [
                    "Packaging design and material estimation",
                    "Paint coverage for 3D objects",
                    "Heat loss calculations (building insulation)",
                    "Manufacturing cost estimation",
                    "Medical imaging (organ surface area)"
                ]
            },

            volume: {
                title: "Volume of 3D Shapes: Measuring Enclosed Space",
                concepts: [
                    "Volume measures the 3D space enclosed within a solid; measured in cubic units",
                    "Most prism volumes use: V = base area × height",
                    "Pyramids and cones have volume = ⅓ × base area × height",
                    "The sphere formula V = (4/3)πr³ is derived from calculus integration",
                    "Composite volumes use addition or subtraction of standard shapes"
                ],
                theory: "Volume quantifies three-dimensional capacity. The fundamental principle is that volume = (cross-sectional area) × (depth), valid for any prism. For pyramids and cones, the factor of ⅓ arises because three congruent pyramids fill one prism. Cavalieri's Principle extends this: any two solids with equal cross-sections at every height have equal volumes.",
                keyDefinitions: {
                    "Volume": "The measure of 3D space enclosed within a solid; measured in cubic units (cm³, m³, litres)",
                    "Cross-section": "The 2D shape formed when a solid is cut parallel to its base",
                    "Prism": "A 3D solid with a uniform cross-section throughout its length",
                    "Pyramid": "A 3D solid with a polygonal base tapering to an apex",
                    "Capacity": "Volume of a hollow container; 1 litre = 1000 cm³"
                },
                formulas: {
                    cube: { formula: "V = s³", variables: "s = side length", derivation: "Special cuboid" },
                    cuboid: { formula: "V = l × w × h", variables: "l, w, h = dimensions", derivation: "Count unit cubes in layers" },
                    prism: { formula: "V = A × h", variables: "A = cross-sectional area, h = height/length", derivation: "Uniform cross-section throughout length" },
                    cylinder: { formula: "V = πr²h", variables: "r = radius, h = height", derivation: "Circular prism" },
                    cone: { formula: "V = ⅓πr²h", variables: "r = radius, h = vertical height", derivation: "⅓ of enclosing cylinder" },
                    pyramid: { formula: "V = ⅓ × A × h", variables: "A = base area, h = vertical height", derivation: "⅓ of enclosing prism" },
                    sphere: { formula: "V = (4/3)πr³", variables: "r = radius", derivation: "Derived via calculus integration" },
                    hemisphere: { formula: "V = (2/3)πr³", variables: "r = radius", derivation: "Half of full sphere" }
                },
                workedExamples: [
                    {
                        shape: "Cylinder",
                        given: "r = 4 cm, h = 10 cm",
                        solution: "V = π(4)²(10) = 160π ≈ 502.65 cm³"
                    },
                    {
                        shape: "Cone",
                        given: "r = 6 cm, h = 9 cm",
                        solution: "V = ⅓π(6)²(9) = ⅓ × 324π = 108π ≈ 339.29 cm³"
                    },
                    {
                        shape: "Sphere",
                        given: "r = 5 cm",
                        solution: "V = (4/3)π(5)³ = (4/3) × 125π = (500/3)π ≈ 523.60 cm³"
                    }
                ],
                applications: [
                    "Water tank and reservoir capacity",
                    "Concrete and material estimation for construction",
                    "Medical dosage calculations (capsule volumes)",
                    "Food packaging (can, box sizing)",
                    "Fuel tank and engine displacement calculations"
                ]
            },

            arc_length: {
                title: "Arc Length: Measuring a Portion of a Circle's Circumference",
                concepts: [
                    "An arc is a portion of a circle's circumference",
                    "Arc length is proportional to the central angle as a fraction of 360°",
                    "Arc length formula: l = (θ/360) × 2πr",
                    "In radians: l = rθ (simpler and used in advanced mathematics)",
                    "A minor arc subtends an angle less than 180°; a major arc subtends more than 180°"
                ],
                theory: "Arc length extends the circumference concept to portions of a circle. Since the full circumference corresponds to a central angle of 360°, any arc corresponds to its proportional fraction: arc length = (θ/360°) × C. In radian measure, this simplifies beautifully to l = rθ, revealing the fundamental definition of a radian: the angle subtending an arc equal in length to the radius.",
                keyDefinitions: {
                    "Arc": "A continuous portion of a circle's circumference between two points",
                    "Minor Arc": "The shorter arc between two points; central angle < 180°",
                    "Major Arc": "The longer arc between two points; central angle > 180°",
                    "Central Angle": "The angle at the centre of a circle formed by two radii",
                    "Radian": "Unit of angle measure; 1 radian is the angle subtending an arc equal to the radius; 360° = 2π radians"
                },
                formulas: {
                    arcLengthDegrees: { formula: "l = (θ/360) × 2πr", variables: "θ = central angle in degrees, r = radius", note: "Proportion of full circumference" },
                    arcLengthRadians: { formula: "l = rθ", variables: "r = radius, θ = central angle in radians", note: "Elegant form; standard in higher mathematics" },
                    degreesToRadians: { formula: "radians = degrees × (π/180)", note: "Conversion formula" },
                    radiansToDegrees: { formula: "degrees = radians × (180/π)", note: "Inverse conversion" }
                },
                workedExamples: [
                    {
                        problem: "Arc length with angle in degrees",
                        given: "r = 10 cm, θ = 72°",
                        solution: "l = (72/360) × 2π × 10 = (1/5) × 20π = 4π ≈ 12.57 cm"
                    },
                    {
                        problem: "Arc length in radians",
                        given: "r = 6 cm, θ = π/3 radians",
                        solution: "l = 6 × π/3 = 2π ≈ 6.28 cm"
                    },
                    {
                        problem: "Finding radius from arc length",
                        given: "l = 15 cm, θ = 120°",
                        solution: "(120/360) × 2πr = 15 → (1/3) × 2πr = 15 → r = 15 × 3/(2π) = 45/(2π) ≈ 7.16 cm"
                    }
                ],
                applications: [
                    "Calculating lengths of curved road segments",
                    "Railway track curve design",
                    "Clock hand travel distance",
                    "Satellite orbital arc calculations",
                    "Bicycle gear ratio and wheel rotation"
                ]
            },

            sector_area: {
                title: "Sector Area: Measuring a Pie-Slice Region of a Circle",
                concepts: [
                    "A sector is the region bounded by two radii and the arc between them",
                    "Sector area is proportional to the central angle as a fraction of 360°",
                    "Sector area formula: A = (θ/360) × πr²",
                    "In radians: A = ½r²θ",
                    "A segment is the region between a chord and an arc (sector minus triangle)"
                ],
                theory: "A sector is the 'pie slice' of a circle. Its area is the same fraction of the total circle area as its central angle is of 360°. The radian form A = ½r²θ elegantly parallels the arc length formula l = rθ, and both are foundational in calculus. The segment (sector minus the triangle) requires combining area formulae with trigonometry.",
                keyDefinitions: {
                    "Sector": "The region of a circle bounded by two radii and the arc between them; resembles a pie slice",
                    "Segment": "The region between a chord and the arc it subtends; equals sector area minus triangle area",
                    "Minor Sector": "Sector with central angle less than 180°",
                    "Major Sector": "Sector with central angle greater than 180°",
                    "Chord": "A straight line connecting two points on a circle's circumference"
                },
                formulas: {
                    sectorAreaDegrees: { formula: "A = (θ/360) × πr²", variables: "θ = degrees, r = radius", note: "Fraction of full circle area" },
                    sectorAreaRadians: { formula: "A = ½r²θ", variables: "r = radius, θ = radians", note: "Standard form in advanced mathematics" },
                    segmentArea: { formula: "A_segment = A_sector − A_triangle", note: "Triangle area uses A = ½r²sin(θ)" },
                    triangleInSector: { formula: "A_triangle = ½r²sin(θ)", variables: "r = radius, θ = central angle", note: "Using two sides and included angle" }
                },
                workedExamples: [
                    {
                        problem: "Sector area in degrees",
                        given: "r = 8 cm, θ = 135°",
                        solution: "A = (135/360) × π(8)² = (3/8) × 64π = 24π ≈ 75.40 cm²"
                    },
                    {
                        problem: "Sector area in radians",
                        given: "r = 6 cm, θ = 2π/3",
                        solution: "A = ½(6)²(2π/3) = ½ × 36 × (2π/3) = 12π ≈ 37.70 cm²"
                    },
                    {
                        problem: "Segment area",
                        given: "r = 10 cm, θ = 60°",
                        solution: "Sector: (60/360) × π(100) = 100π/6. Triangle: ½(100)sin60° = 50 × (√3/2) = 25√3. Segment = 100π/6 − 25√3 ≈ 52.36 − 43.30 ≈ 9.06 cm²"
                    }
                ],
                applications: [
                    "Pizza slice area estimation",
                    "Pie chart segment calculations",
                    "Windscreen wiper coverage area",
                    "Clock face sector analysis",
                    "Irrigation sprinkler coverage design"
                ]
            },

            trigonometry_ratios: {
                title: "Trigonometric Ratios: SOH CAH TOA in Right-Angled Triangles",
                concepts: [
                    "Trigonometric ratios relate angles to the ratios of sides in right-angled triangles",
                    "SOH: sin(θ) = Opposite / Hypotenuse",
                    "CAH: cos(θ) = Adjacent / Hypotenuse",
                    "TOA: tan(θ) = Opposite / Adjacent",
                    "Inverse trig functions (sin⁻¹, cos⁻¹, tan⁻¹) find unknown angles"
                ],
                theory: "Trigonometry (from Greek: measurement of triangles) establishes fixed ratios between the angles and side lengths of right-angled triangles. These ratios — sine, cosine, and tangent — are constant for any given angle, regardless of the triangle's size. This scale-independence is what makes trigonometry so powerful: knowing one angle and one side of a right-angled triangle determines all other measurements.",
                keyDefinitions: {
                    "Hypotenuse": "The longest side of a right-angled triangle; always opposite the right angle",
                    "Opposite": "The side directly across from the reference angle θ",
                    "Adjacent": "The side next to the reference angle θ (not the hypotenuse)",
                    "sin θ": "Opposite ÷ Hypotenuse; abbreviated 'O/H'",
                    "cos θ": "Adjacent ÷ Hypotenuse; abbreviated 'A/H'",
                    "tan θ": "Opposite ÷ Adjacent; abbreviated 'O/A'; also equals sin θ / cos θ",
                    "Inverse Trigonometric Function": "sin⁻¹, cos⁻¹, tan⁻¹ — find angle from ratio",
                    "Angle of Elevation": "Angle measured upward from the horizontal to a point above",
                    "Angle of Depression": "Angle measured downward from the horizontal to a point below"
                },
                formulas: {
                    sine: { formula: "sin θ = O/H", use: "Find opposite side or angle using hypotenuse and opposite" },
                    cosine: { formula: "cos θ = A/H", use: "Find adjacent side or angle using hypotenuse and adjacent" },
                    tangent: { formula: "tan θ = O/A", use: "Find opposite or adjacent without knowing hypotenuse" },
                    inverseSine: { formula: "θ = sin⁻¹(O/H)", use: "Find angle when opposite and hypotenuse are known" },
                    inverseCosine: { formula: "θ = cos⁻¹(A/H)", use: "Find angle when adjacent and hypotenuse are known" },
                    inverseTangent: { formula: "θ = tan⁻¹(O/A)", use: "Find angle when opposite and adjacent are known" },
                    sineLaw: { formula: "a/sin A = b/sin B = c/sin C", use: "Non-right-angled triangles: find sides/angles", note: "Beyond basic trig ratios; included for connection" },
                    cosineLaw: { formula: "c² = a² + b² − 2ab cos C", use: "Non-right-angled triangles: find sides/angles", note: "Generalisation of Pythagoras" }
                },
                specialAngles: {
                    "30°": { sin: "1/2", cos: "√3/2", tan: "1/√3 = √3/3" },
                    "45°": { sin: "1/√2 = √2/2", cos: "1/√2 = √2/2", tan: "1" },
                    "60°": { sin: "√3/2", cos: "1/2", tan: "√3" },
                    "0°": { sin: "0", cos: "1", tan: "0" },
                    "90°": { sin: "1", cos: "0", tan: "undefined" }
                },
                workedExamples: [
                    {
                        problem: "Find unknown side",
                        given: "θ = 35°, hypotenuse = 12 cm; find opposite",
                        solution: "sin 35° = O/12 → O = 12 × sin 35° = 12 × 0.5736 ≈ 6.88 cm"
                    },
                    {
                        problem: "Find unknown angle",
                        given: "opposite = 7 cm, adjacent = 9 cm; find θ",
                        solution: "tan θ = 7/9 → θ = tan⁻¹(7/9) ≈ 37.87°"
                    },
                    {
                        problem: "Angle of elevation",
                        given: "Building 50 m tall, observer 30 m away; find angle of elevation",
                        solution: "tan θ = 50/30 → θ = tan⁻¹(5/3) ≈ 59.04°"
                    }
                ],
                applications: [
                    "Architecture: roof pitch and ramp gradient",
                    "Navigation: bearing calculations",
                    "Surveying: land height measurement",
                    "Physics: projectile motion, inclined planes",
                    "Engineering: structural load analysis"
                ]
            },

            pythagorean_theorem: {
                title: "The Pythagorean Theorem: The Foundation of Right-Angle Geometry",
                concepts: [
                    "In any right-angled triangle: a² + b² = c², where c is the hypotenuse",
                    "The hypotenuse is always the side opposite the right angle and is the longest side",
                    "Finding hypotenuse: c = √(a² + b²)",
                    "Finding a shorter side: a = √(c² − b²)",
                    "Pythagorean triples are sets of integers satisfying a² + b² = c² (e.g., 3, 4, 5)"
                ],
                theory: "The Pythagorean Theorem is one of the most celebrated results in all of mathematics, known to civilisations from ancient Babylon and Egypt to Greece and China. It states that in any right-angled triangle, the area of the square on the hypotenuse equals the sum of the areas of the squares on the other two sides. Over 370 distinct proofs exist, from geometric rearrangements to algebraic derivations, making this theorem uniquely versatile.",
                keyDefinitions: {
                    "Hypotenuse (c)": "The longest side, always opposite the right angle",
                    "Legs (a, b)": "The two shorter sides forming the right angle",
                    "Pythagorean Triple": "Three positive integers (a, b, c) satisfying a² + b² = c² (e.g., 3-4-5, 5-12-13, 8-15-17)",
                    "Converse": "If a² + b² = c², then the triangle is right-angled (used to verify right angles)",
                    "Pythagorean Inequality": "If a² + b² > c², the angle is acute; if a² + b² < c², the angle is obtuse"
                },
                formulas: {
                    findHypotenuse: { formula: "c = √(a² + b²)", use: "Both legs known; find hypotenuse" },
                    findLeg: { formula: "a = √(c² − b²)", use: "Hypotenuse and one leg known; find other leg" },
                    in3D: { formula: "d = √(x² + y² + z²)", use: "Diagonal of a cuboid in 3D space" },
                    verify: { formula: "Check: a² + b² = c²", use: "Verify whether three sides form a right-angled triangle" }
                },
                pythagoreanTriples: [
                    { triple: "3, 4, 5", multiples: "6-8-10, 9-12-15, 12-16-20, ..." },
                    { triple: "5, 12, 13", multiples: "10-24-26, ..." },
                    { triple: "8, 15, 17", multiples: "16-30-34, ..." },
                    { triple: "7, 24, 25", multiples: "14-48-50, ..." }
                ],
                workedExamples: [
                    {
                        problem: "Find hypotenuse",
                        given: "a = 9 cm, b = 12 cm",
                        solution: "c = √(9² + 12²) = √(81 + 144) = √225 = 15 cm (3-4-5 triple × 3)"
                    },
                    {
                        problem: "Find a shorter side",
                        given: "c = 17 cm, b = 8 cm",
                        solution: "a = √(17² − 8²) = √(289 − 64) = √225 = 15 cm"
                    },
                    {
                        problem: "Diagonal of a cuboid (3D)",
                        given: "l = 3, w = 4, h = 12 cm",
                        solution: "d = √(3² + 4² + 12²) = √(9 + 16 + 144) = √169 = 13 cm"
                    }
                ],
                applications: [
                    "Construction: ensuring walls and corners are square",
                    "Navigation: direct distance calculations",
                    "Sports: pitch and field diagonal measurements",
                    "Computer graphics: pixel distance calculations",
                    "GPS: calculating distances between coordinates"
                ]
            },

            bearings: {
                title: "Bearings and Navigation: Direction in the Real World",
                concepts: [
                    "A bearing is an angle measured clockwise from north (000° to 360°)",
                    "Bearings are always written as three-figure numbers (e.g., 045°, not 45°)",
                    "North is 000°/360°; East is 090°; South is 180°; West is 270°",
                    "Back bearing (return journey): add or subtract 180° from the original bearing",
                    "Bearings problems combine trigonometry and Pythagoras for distance and angle"
                ],
                theory: "Bearings provide a standardised system for expressing direction in navigation, surveying, and orienteering. Unlike compass directions (NE, SW, etc.) which are imprecise, a three-figure bearing gives an exact clockwise angle from north. Combined with trigonometric ratios and the sine/cosine rules, bearings enable the complete solution of real-world navigation and survey problems.",
                keyDefinitions: {
                    "Bearing": "The angle measured clockwise from north to a given direction; always three figures (000° to 360°)",
                    "True North": "Geographic north; the reference direction for bearings",
                    "Back Bearing": "The bearing of the return journey from B to A if A to B is known: back bearing = bearing ± 180°",
                    "Angle of Elevation": "Angle above horizontal to an observed point",
                    "Angle of Depression": "Angle below horizontal to an observed point",
                    "Compass Rose": "A circular diagram showing all directional bearings"
                },
                compassPoints: {
                    "North (N)": "000° (or 360°)",
                    "North-East (NE)": "045°",
                    "East (E)": "090°",
                    "South-East (SE)": "135°",
                    "South (S)": "180°",
                    "South-West (SW)": "225°",
                    "West (W)": "270°",
                    "North-West (NW)": "315°"
                },
                problemSolvingStrategy: [
                    "1. Draw a clear diagram with north arrows at each relevant point",
                    "2. Mark all given bearings (measured clockwise from north)",
                    "3. Identify the triangle formed by the journey legs",
                    "4. Find interior angles of the triangle using bearing relationships",
                    "5. Apply Pythagoras or trigonometry (or sine/cosine rule) to find unknowns",
                    "6. State final answer with correct bearing format (three figures) and units"
                ],
                workedExamples: [
                    {
                        problem: "Find distance and bearing",
                        given: "Ship travels 8 km on bearing 060°, then 6 km on bearing 150°",
                        solution: "The two legs are perpendicular (90° between 060° and 150°). Distance = √(8² + 6²) = √100 = 10 km. Bearing: tan θ = 6/8 → θ = 36.87° east of the 060° direction → bearing ≈ 097°"
                    },
                    {
                        problem: "Back bearing",
                        given: "Bearing from A to B is 125°",
                        solution: "Back bearing (B to A) = 125° + 180° = 305°"
                    }
                ],
                applications: [
                    "Maritime and aviation navigation",
                    "Hiking and orienteering",
                    "Military operations and logistics",
                    "Land surveying and mapping",
                    "Satellite and drone navigation"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: PERIMETER INVESTIGATION
            // ========================================

            perimeter_optimisation_investigation: {
                name: "Fixed Perimeter, Maximum Area: The Isoperimetric Discovery",
                relatedTopics: ['perimeter', 'area'],
                category: 'geometry',
                historicalBackground: {
                    legend: "Dido's Problem",
                    origin: "Ancient Carthage (circa 800 BCE)",
                    story: "Queen Dido was told she could have as much land as could be enclosed by an ox hide. She cut the hide into a thin strip and used it to enclose the largest possible area — a circle. This is the legendary origin of the isoperimetric problem.",
                    mathematician: "Zenodorus (circa 200 BCE) provided the first rigorous proof that the circle maximises area for a given perimeter",
                    modernSignificance: "The isoperimetric inequality (4πA ≤ P²) is one of the most important results in geometric analysis and has applications in physics, biology, and engineering",
                    biologicalConnection: "Cells, soap bubbles, and biological structures naturally minimise surface area for a given volume — a three-dimensional version of the same principle"
                },
                practicalMathematics: {
                    title: "Fixed Perimeter, Maximum Area: Investigating the Isoperimetric Problem",
                    hypothesis: "Of all rectangles with a fixed perimeter, the square encloses the greatest area; and of all shapes with a fixed perimeter, the circle encloses the greatest area",
                    purpose: "Investigate how shape affects the area enclosed for a fixed perimeter, and discover which shape maximises enclosed area",
                    materials: [
                        "12 cm length of string or wire per student (fixed perimeter = 12 cm)",
                        "Squared grid paper for measuring areas",
                        "Ruler and pencil",
                        "Calculator",
                        "Graph paper for plotting (length vs area)",
                        "Protractor (for circular shape approximation)"
                    ],
                    procedure: [
                        "PART A: Rectangles with Fixed Perimeter",
                        "1. Use P = 12 cm. For a rectangle: 2(l + w) = 12, so l + w = 6.",
                        "2. Systematically vary l from 1 to 5 cm, computing w = 6 − l each time.",
                        "3. Calculate Area = l × w for each combination.",
                        "4. Record in the data table.",
                        "5. Identify which dimensions give the maximum area.",
                        "",
                        "PART B: Other Polygons",
                        "6. Form a regular triangle (equilateral) with perimeter 12 cm: side = 4 cm.",
                        "   Area = (√3/4) × 4² = 4√3 ≈ 6.93 cm²",
                        "7. Form a regular pentagon with perimeter 12 cm: side = 2.4 cm.",
                        "   Area = (1/4) × 5 × 2.4² × cot(36°) ≈ 9.93 cm²",
                        "8. Form a regular hexagon with perimeter 12 cm: side = 2 cm.",
                        "   Area = (3√3/2) × 2² = 6√3 ≈ 10.39 cm²",
                        "",
                        "PART C: Circle",
                        "9. Form a circle with circumference 12 cm: C = 2πr = 12 → r = 6/π.",
                        "   Area = πr² = π × (6/π)² = 36/π ≈ 11.46 cm²",
                        "",
                        "PART D: Analysis",
                        "10. Plot number of sides (n) vs area on a graph.",
                        "11. Observe: area increases as n increases, approaching the circle value.",
                        "12. Confirm: the circle gives the absolute maximum area for the given perimeter."
                    ],
                    dataTable: [
                        ["Shape", "Perimeter", "Dimensions", "Area (cm²)", "% of Circle Area"],
                        ["Rectangle 1×5", "12 cm", "1 × 5", "5.00", "43.6%"],
                        ["Rectangle 2×4", "12 cm", "2 × 4", "8.00", "69.8%"],
                        ["Square 3×3", "12 cm", "3 × 3", "9.00", "78.5%"],
                        ["Equilateral triangle", "12 cm", "side = 4", "6.93", "60.5%"],
                        ["Regular pentagon", "12 cm", "side = 2.4", "9.93", "86.6%"],
                        ["Regular hexagon", "12 cm", "side = 2", "10.39", "90.7%"],
                        ["Circle", "12 cm", "r = 6/π", "11.46", "100%"]
                    ],
                    conclusions: [
                        "Among all rectangles with a fixed perimeter, the square encloses the maximum area",
                        "As the number of sides increases, the area enclosed approaches but never exceeds the circle's area",
                        "The circle is the unique shape enclosing maximum area for any given perimeter — the isoperimetric theorem",
                        "This explains why circular shapes appear so frequently in nature: soap bubbles, cells, and planets all minimise boundary for a given volume/area",
                        "The isoperimetric inequality states: 4πA ≤ P², with equality only for the circle"
                    ],
                    extensions: [
                        "Investigate: if the perimeter is partially a wall (fixed boundary), what shape maximises the enclosed area?",
                        "Research the 3D version: which solid maximises volume for a given surface area? (Sphere)",
                        "Investigate Dido's problem: enclosing area using a semicircle against a straight coastline"
                    ],
                    realWorldConnections: [
                        "Honeybee hexagonal cells: hexagons maximise storage area while minimising wax used",
                        "Stadium design: oval/circular stadiums provide maximum spectator capacity per boundary metre",
                        "Soap bubbles: always form spheres to minimise surface area for a given volume",
                        "Agricultural field planning: circular irrigation maximises crop area per fence length"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 2: AREA DISSECTION INVESTIGATION
            // ========================================

            area_dissection_investigation: {
                name: "Area Dissection: Deriving Every Area Formula from the Rectangle",
                relatedTopics: ['area', 'perimeter'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Greek mathematics, Euclid's Elements Book I (circa 300 BCE)",
                    contribution: "Euclid systematically derived area formulas by dissection and rearrangement — cutting shapes and reassembling them into rectangles or squares of equal area",
                    significance: "Dissection proofs are entirely visual; they demonstrate mathematical truth without algebra, making them accessible and memorable",
                    modernUse: "Dissection arguments are used in combinatorics, origami mathematics, and computer graphics",
                    famousDissection: "Dudeney's Haberdasher's puzzle (1907): dissecting an equilateral triangle into four pieces that rearrange into a square"
                },
                practicalMathematics: {
                    title: "Deriving Area Formulas by Dissection and Rearrangement",
                    hypothesis: "Every standard 2D area formula can be derived by physically cutting and rearranging the shape into a rectangle",
                    purpose: "Develop deep understanding of WHY area formulas work by constructing geometric proofs through dissection",
                    materials: [
                        "Card stock or thick paper",
                        "Scissors",
                        "Ruler and pencil",
                        "Different coloured paper for each shape",
                        "Glue stick for mounting dissections",
                        "Squared grid paper for area verification"
                    ],
                    procedure: [
                        "DISSECTION 1: Triangle → Rectangle",
                        "1. Cut a triangle of any type from card.",
                        "2. Measure and mark the midpoints of the two non-base sides.",
                        "3. Draw a horizontal line at half the height (perpendicular to base).",
                        "4. Cut along this line; flip the top portion and attach it to the side.",
                        "5. Observe: the result is a rectangle of base = original base, height = ½ original height.",
                        "6. Area of rectangle = base × (h/2) = ½ × base × height ✓",
                        "",
                        "DISSECTION 2: Parallelogram → Rectangle",
                        "7. Cut a parallelogram from card.",
                        "8. Draw the perpendicular height from one corner to the base.",
                        "9. Cut the right-angled triangle from one end.",
                        "10. Slide it to the other end: the result is a rectangle.",
                        "11. Area = base × perpendicular height ✓ (width does not matter)",
                        "",
                        "DISSECTION 3: Trapezium → Rectangle",
                        "12. Cut two identical trapezoids.",
                        "13. Rotate one 180° and attach to the first along the slant side.",
                        "14. Result: a parallelogram with base = (a + b) and height = h.",
                        "15. Area of parallelogram = (a + b) × h; each trapezoid has area = ½(a + b)h ✓",
                        "",
                        "DISSECTION 4: Circle → Approximate Rectangle",
                        "16. Draw and cut a circle; divide into 16 equal sectors.",
                        "17. Arrange alternating sectors up/down in a row.",
                        "18. Observe: the row approximates a rectangle of width ≈ πr and height ≈ r.",
                        "19. Area ≈ πr × r = πr² ✓ (approximation improves with more sectors)",
                        "",
                        "VERIFICATION:",
                        "20. For each shape, count grid squares on squared paper before and after rearrangement.",
                        "21. Confirm: total area is preserved by each dissection."
                    ],
                    dataTable: [
                        ["Shape", "Formula Derived", "Dissection Method", "Rectangle Dimensions", "Verification"],
                        ["Triangle (base b, height h)", "A = ½bh", "Fold top half to side", "b × h/2", "Count squares: equal ✓"],
                        ["Parallelogram (base b, height h)", "A = bh", "Move triangular end to other side", "b × h", "Count squares: equal ✓"],
                        ["Trapezium (sides a, b, height h)", "A = ½(a+b)h", "Double and rotate; take half", "(a+b) × h, halved", "Count squares: equal ✓"],
                        ["Circle (radius r)", "A = πr²", "Rearrange 16 sectors into strip", "πr × r", "Approximate count ✓"]
                    ],
                    conclusions: [
                        "Every standard area formula is justified by a physical dissection, not merely a memorized rule",
                        "The rectangle is the fundamental area unit: all other shapes are rearrangements of rectangles",
                        "Dissection proves that area is conserved when shapes are cut and rearranged (without overlap or gaps)",
                        "The circle approximation improves indefinitely as sector count increases — foreshadowing limits and calculus",
                        "Visual proof builds deeper understanding than symbolic derivation alone"
                    ],
                    extensions: [
                        "Investigate Cavalieri's Principle: two shapes with equal cross-sections at every height have equal areas",
                        "Research Pick's Theorem: area = I + B/2 − 1, where I = interior lattice points, B = boundary points",
                        "Derive the area of a regular polygon by dissecting into n triangles from the centre",
                        "Attempt Dudeney's Haberdasher's puzzle: dissect an equilateral triangle into a square"
                    ],
                    realWorldConnections: [
                        "Patchwork quilting: geometric dissections determine fabric requirements",
                        "Parquet flooring: dissecting floor areas into tile shapes",
                        "Jigsaw puzzles: pieces are dissections that reconstruct a whole",
                        "Architecture: irregular floor plans are dissected into rectangles for area calculation"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 3: SURFACE AREA AND NETS
            // ========================================

            surface_area_nets_investigation: {
                name: "Nets Investigation: Unfolding 3D Shapes to Discover Surface Area",
                relatedTopics: ['surface_area', 'area', 'volume'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Albrecht Dürer (1471–1528), German Renaissance artist and mathematician",
                    contribution: "Dürer was the first to systematically draw nets of polyhedra in his work 'Underweysung der Messung' (1525), including the first published nets of prisms, pyramids, and the Platonic solids",
                    significance: "Dürer's nets connected art, geometry, and solid construction; modern engineering drawings and packaging design descend directly from this tradition",
                    modernUse: "Computer-aided design (CAD) software uses virtual nets for flat-pack furniture (IKEA), packaging, aerospace parts, and architectural cladding",
                    mathematicalDepth: "Not every geometric net folds into a valid solid; determining which nets are valid is an unsolved problem for general polyhedra"
                },
                practicalMathematics: {
                    title: "Nets, Surface Area, and the Art of Unfolding 3D Shapes",
                    hypothesis: "The total area of a net equals the surface area of the 3D solid it folds into; different nets of the same solid always have the same total area",
                    purpose: "Construct nets for standard 3D shapes, verify surface area formulas, and explore which net arrangements successfully fold into valid solids",
                    materials: [
                        "Card stock",
                        "Scissors, ruler, pencil",
                        "Protractor for measuring angles in cone nets",
                        "Tape for assembly",
                        "Squared grid paper",
                        "Calculator"
                    ],
                    procedure: [
                        "PART A: Cube Net",
                        "1. Draw a valid net of a cube with side length 4 cm on card.",
                        "2. Calculate the predicted surface area: SA = 6 × 4² = 96 cm²",
                        "3. Cut out the net; count and verify total area on grid paper.",
                        "4. Fold into a cube; confirm it closes completely.",
                        "5. Research: how many distinct nets does a cube have? (Answer: 11)",
                        "6. Draw and test a second valid net; confirm same surface area.",
                        "",
                        "PART B: Cylinder Net",
                        "7. A cylinder with r = 3 cm, h = 8 cm.",
                        "8. Net components: two circles (radius 3) + one rectangle.",
                        "9. Rectangle dimensions: width = h = 8 cm; length = circumference = 2π(3) = 6π cm.",
                        "10. Calculate SA = 2π(3)² + 2π(3)(8) = 18π + 48π = 66π ≈ 207.35 cm²",
                        "11. Draw and cut the net; assemble to verify fit.",
                        "",
                        "PART C: Cone Net",
                        "12. A cone with r = 4 cm, l (slant height) = 7 cm.",
                        "13. The curved surface net is a sector of a circle with radius = l = 7 cm.",
                        "14. Arc length of sector = circumference of cone base = 2π(4) = 8π.",
                        "15. Angle of sector: θ = (arc length / circumference of full circle) × 360° = (8π / 14π) × 360° = (4/7) × 360° ≈ 205.7°",
                        "16. SA = πr² + πrl = π(16) + π(4)(7) = 16π + 28π = 44π ≈ 138.23 cm²",
                        "",
                        "PART D: Triangular Prism Net",
                        "17. Right-angled triangular prism: legs 3 cm, 4 cm; hypotenuse 5 cm; length 10 cm.",
                        "18. Net: two triangles + three rectangles.",
                        "19. SA = 2(½ × 3 × 4) + (3 × 10) + (4 × 10) + (5 × 10) = 12 + 30 + 40 + 50 = 132 cm²"
                    ],
                    dataTable: [
                        ["Solid", "Net Components", "Calculated SA", "Grid Count SA", "Net Valid?"],
                        ["Cube (s=4)", "6 squares (4×4)", "96 cm²", "96 cm²", "Yes ✓"],
                        ["Cylinder (r=3, h=8)", "2 circles + rectangle", "66π ≈ 207.4 cm²", "≈207 cm²", "Yes ✓"],
                        ["Cone (r=4, l=7)", "circle + sector", "44π ≈ 138.2 cm²", "≈138 cm²", "Yes ✓"],
                        ["Triangular prism", "2 triangles + 3 rectangles", "132 cm²", "132 cm²", "Yes ✓"]
                    ],
                    conclusions: [
                        "The total area of a net equals the surface area of the solid it folds into — nets make abstract 3D measurement concrete",
                        "Different valid nets of the same solid always have identical total areas",
                        "The cylinder's curved surface unfolds into a rectangle whose length is the circle's circumference — this explains why SA = 2πrh",
                        "The cone's curved surface unfolds into a circular sector — angle of sector = (r/l) × 360°",
                        "Not all 2D arrangements of faces produce valid nets (some cannot fold without overlap)"
                    ],
                    extensions: [
                        "Investigate: how many distinct nets does a cube have? (11) What about a tetrahedron? (2)",
                        "Design a net for an open-topped box maximising volume for a fixed sheet of card",
                        "Research origami mathematics: complex 3D forms from single-sheet nets",
                        "Explore the Euler characteristic: V − E + F = 2 for all convex polyhedra"
                    ],
                    realWorldConnections: [
                        "Packaging design: cereal boxes, milk cartons, and blister packs are all engineered nets",
                        "Flat-pack furniture: IKEA designs are complex nets that assemble into 3D furniture",
                        "Aerospace: aircraft panels and fuselage sections are developed from 3D CAD nets",
                        "Gift wrapping: estimating paper needed = surface area of the gift"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: VOLUME DISPLACEMENT
            // ========================================

            volume_displacement_investigation: {
                name: "Archimedes' Principle: Discovering Volume by Water Displacement",
                relatedTopics: ['volume', 'surface_area'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Archimedes of Syracuse (287–212 BCE)",
                    discovery: "Archimedes was tasked by King Hiero II to determine whether a crown was pure gold without melting it. He discovered that an object submerged in water displaces a volume of water equal to the object's own volume — enabling volume measurement of any irregular solid",
                    legend: "'Eureka!' (I have found it) — Archimedes reportedly shouted this upon realising the principle while stepping into a bath",
                    principle: "Archimedes' Principle: a body submerged in fluid displaces fluid equal to its own volume",
                    significance: "This discovery enabled the measurement of irregular volumes without calculation — a revolutionary advance in practical measurement",
                    modernUse: "Water displacement is used in metallurgy (purity testing), hydrology (rock volume), and medical imaging (organ volume estimation)"
                },
                practicalMathematics: {
                    title: "Measuring Volume by Water Displacement: Verifying Geometric Formulas",
                    hypothesis: "The volume of a regular solid calculated using its geometric formula will equal the volume of water it displaces when fully submerged",
                    purpose: "Verify volume formulas for cylinders, spheres, and cones by comparing calculated volumes with measured water displacement",
                    materials: [
                        "Measuring cylinder (250 ml or 500 ml, graduated in cm³)",
                        "Water",
                        "Regular solids: cylinder, sphere, cone (matching dimensions — school geometry set or 3D printed)",
                        "Thread or wire for submerging objects",
                        "Ruler and vernier callipers for measuring dimensions",
                        "Calculator",
                        "Data recording sheet"
                    ],
                    procedure: [
                        "PART A: Cylinder",
                        "1. Measure radius r and height h of the cylinder using callipers.",
                        "2. Calculate V_predicted = πr²h.",
                        "3. Fill measuring cylinder with water to a recorded level V₁.",
                        "4. Submerge the cylinder completely; record new level V₂.",
                        "5. Displaced volume = V₂ − V₁.",
                        "6. Compare V_predicted and V_displaced; calculate percentage error.",
                        "",
                        "PART B: Sphere",
                        "7. Measure diameter of sphere; calculate r.",
                        "8. Calculate V_predicted = (4/3)πr³.",
                        "9. Measure displacement as in Part A.",
                        "10. Compare and calculate percentage error.",
                        "",
                        "PART C: Cone",
                        "11. Measure radius r and height h of cone.",
                        "12. Calculate V_predicted = ⅓πr²h.",
                        "13. Note: V_cone should equal ⅓ × V_cylinder (same base and height).",
                        "14. Verify this by comparing your cylinder and cone results.",
                        "",
                        "PART D: Composite Object",
                        "15. Combine two solids (e.g., cylinder + hemisphere).",
                        "16. Predict total volume = V_cylinder + V_hemisphere.",
                        "17. Measure displacement of the combined solid.",
                        "18. Compare predicted and measured volumes.",
                        "",
                        "ANALYSIS:",
                        "19. Calculate percentage error = |predicted − measured| / predicted × 100%",
                        "20. Identify sources of experimental error.",
                        "21. Discuss: why does the cone volume equal exactly ⅓ of the cylinder?"
                    ],
                    dataTable: [
                        ["Solid", "Dimensions (cm)", "Predicted Volume (cm³)", "Displaced Volume (cm³)", "% Error"],
                        ["Cylinder", "r=3, h=8", "226.19", "measured", "calculated"],
                        ["Sphere", "r=4", "268.08", "measured", "calculated"],
                        ["Cone", "r=3, h=8", "75.40", "measured", "calculated"],
                        ["Hemisphere", "r=4", "134.04", "measured", "calculated"]
                    ],
                    keyInsight: {
                        coneVsCylinder: "Three identical cones (same base and height) fill one cylinder exactly — this is why V_cone = ⅓ V_cylinder",
                        sphereFormula: "The sphere formula V = (4/3)πr³ was first derived by Archimedes using a method equivalent to integration",
                        cavalieri: "Cavalieri's Principle: if two solids have equal cross-sectional areas at every height, they have equal volumes — the theoretical basis for volume formulas"
                    },
                    conclusions: [
                        "Geometric volume formulas accurately predict water displacement within experimental error",
                        "V_cone = ⅓ V_cylinder for equal base and height — verified both theoretically and experimentally",
                        "Water displacement enables volume measurement of any irregular object, not just regular solids",
                        "Percentage errors arise from imprecise dimension measurement, irregular objects, and reading measuring cylinder errors",
                        "Archimedes' method connects physical measurement to abstract geometry"
                    ],
                    extensions: [
                        "Use displacement to find the density of each solid: density = mass / volume",
                        "Test Archimedes' buoyancy principle: upthrust force = weight of displaced fluid",
                        "Investigate: what volume of irregular objects (rock, apple, modelling clay) can you measure?",
                        "Use overflow displacement (Eureka can) for more accurate measurement of large objects"
                    ],
                    realWorldConnections: [
                        "Ship design: hull volume determines displacement and buoyancy",
                        "Gold assaying: comparing crown volume to gold volume (the original problem!)",
                        "Medical scanning: MRI and CT scan volume calculations verify displacement measurements",
                        "Concrete pouring: displacement measurement ensures correct material quantities"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 5: ARC LENGTH AND SECTOR AREA
            // ========================================

            arc_sector_investigation: {
                name: "Circles, Arcs, and Sectors: Exploring Circular Measurement",
                relatedTopics: ['arc_length', 'sector_area', 'area', 'perimeter'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Archimedes (287–212 BCE) and later Leonhard Euler (1707–1783)",
                    piHistory: "Archimedes was the first to calculate π systematically, using inscribed and circumscribed polygons of 96 sides to establish 3 10/71 < π < 3 1/7",
                    radianHistory: "The radian was implicitly used by Roger Cotes (1714) and formally named by James Thomson (1873). The radian simplifies arc length to l = rθ and sector area to A = ½r²θ",
                    significance: "Arc and sector measurement underpin all circular motion, wave theory, and rotational mechanics in physics and engineering",
                    modernUse: "Radian measure is universal in calculus, engineering, computer graphics, and signal processing"
                },
                practicalMathematics: {
                    title: "Measuring Arcs and Sectors: Discovering the Radian",
                    hypothesis: "Arc length is proportional to the central angle, and the proportionality constant is the radius — leading naturally to the definition of the radian",
                    purpose: "Measure arc lengths and sector areas for various central angles; discover the radian as the natural unit of angle; verify sector area formula",
                    materials: [
                        "Compasses and pencil",
                        "Protractor",
                        "String or flexible ruler for measuring curved arcs",
                        "Squared grid paper for area estimation",
                        "Calculator",
                        "Data recording sheet"
                    ],
                    procedure: [
                        "PART A: Arc Length and Angle",
                        "1. Draw a circle of radius 10 cm.",
                        "2. For each angle θ = 30°, 60°, 90°, 120°, 180°, 360°:",
                        "   a. Draw the sector with central angle θ.",
                        "   b. Lay string along the arc; measure its length.",
                        "   c. Record measured arc length and compare to calculated l = (θ/360) × 2π × 10.",
                        "",
                        "PART B: Discovering the Radian",
                        "3. Find the angle at which arc length = radius = 10 cm.",
                        "4. Using the formula: 10 = (θ/360) × 20π → θ = 360/(2π) ≈ 57.3°",
                        "5. This angle (≈ 57.3°) is 1 radian — defined as the angle subtending an arc equal to the radius.",
                        "6. Draw a sector with arc length = radius; measure the angle to verify ≈ 57.3°.",
                        "7. Show: in radians, arc length = rθ (no fractions needed).",
                        "",
                        "PART C: Sector Area",
                        "8. For each sector drawn in Part A:",
                        "   a. Count grid squares inside the sector for estimated area.",
                        "   b. Calculate A = (θ/360) × π × 10² and compare.",
                        "9. Verify: sector area in radians: A = ½ × 10² × θ_radians.",
                        "",
                        "PART D: Segment Area",
                        "10. For the 60° sector:",
                        "    Sector area = (60/360) × π(100) = 100π/6 ≈ 52.36 cm²",
                        "    Triangle area = ½ × 10 × 10 × sin(60°) = 50 × (√3/2) ≈ 43.30 cm²",
                        "    Segment area = 52.36 − 43.30 ≈ 9.06 cm²",
                        "11. Verify by counting grid squares in the segment only."
                    ],
                    dataTable: [
                        ["Angle (°)", "Angle (rad)", "Arc Length (calculated)", "Arc Length (measured)", "Sector Area (calculated)", "Grid Count Area"],
                        ["30°", "π/6 ≈ 0.524", "5.24 cm", "≈5.2 cm", "26.18 cm²", "≈26 cm²"],
                        ["60°", "π/3 ≈ 1.047", "10.47 cm", "≈10.5 cm", "52.36 cm²", "≈52 cm²"],
                        ["90°", "π/2 ≈ 1.571", "15.71 cm", "≈15.7 cm", "78.54 cm²", "≈79 cm²"],
                        ["180°", "π ≈ 3.142", "31.42 cm", "≈31.4 cm", "157.08 cm²", "≈157 cm²"],
                        ["360°", "2π ≈ 6.283", "62.83 cm", "≈62.8 cm", "314.16 cm²", "≈314 cm²"]
                    ],
                    conclusions: [
                        "Arc length is directly proportional to central angle: doubling the angle doubles the arc length",
                        "The radian is the natural unit of angle: when θ is in radians, arc length = rθ (no fraction needed)",
                        "1 radian ≈ 57.296° — the angle subtending an arc exactly equal to the radius",
                        "Sector area in radians: A = ½r²θ — elegantly paired with the arc length formula l = rθ",
                        "Segment area = sector area − triangle area, requiring both circular and triangular measurement"
                    ],
                    extensions: [
                        "Derive the formula for the area of a circle using the limit of sector areas as n → ∞",
                        "Connect arc length to the definition of a radian and then to angular velocity in physics",
                        "Investigate: the area of a spiral (Archimedean spiral) as a generalisation of sectors"
                    ],
                    realWorldConnections: [
                        "Clock design: minute hand travel — arc length and sector area at each hour",
                        "Windscreen wipers: the swept area is a sector minus a smaller sector",
                        "Satellite orbits: arc length of orbital path at given angles",
                        "Pizza slicing: equal sector angles give equal area slices"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 6: TRIGONOMETRY DISCOVERY
            // ========================================

            trigonometry_ratio_discovery: {
                name: "Discovering Trigonometric Ratios: From Similar Triangles to SOH CAH TOA",
                relatedTopics: ['trigonometry_ratios', 'pythagorean_theorem'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Ancient Greece and India",
                    hipparchus: "Hipparchus of Nicaea (190–120 BCE) is regarded as the father of trigonometry; he compiled the first known trigonometric table (chord table)",
                    aryabhata: "Aryabhata (476–550 CE) introduced the modern sine function (jya) and computed accurate sine tables, replacing chord-based ancient methods",
                    islamicContributions: "Al-Battani (858–929 CE) introduced the tangent function and computed trigonometric tables to four decimal places",
                    modernSOHCAHTOA: "The SOH CAH TOA mnemonic emerged in modern mathematics education as a memory device for the three fundamental ratios",
                    significance: "Trigonometric ratios are scale-invariant: the same angle always gives the same ratio regardless of triangle size — this is the foundational insight"
                },
                practicalMathematics: {
                    title: "Discovering Trigonometric Ratios Through Measurement",
                    hypothesis: "For any fixed angle in a right-angled triangle, the ratio of opposite to hypotenuse is constant regardless of the triangle's size — this constant ratio is sin(θ)",
                    purpose: "Measure sides of multiple right-angled triangles with the same angle but different sizes; discover that trig ratios are constant for a given angle",
                    materials: [
                        "Protractor",
                        "Ruler (mm precision)",
                        "Set square",
                        "Graph paper",
                        "Calculator with trig functions",
                        "Data recording sheet"
                    ],
                    procedure: [
                        "PART A: Drawing Similar Right-Angled Triangles",
                        "1. Draw a baseline of length 20 cm on graph paper.",
                        "2. At one end, draw a vertical line (perpendicular to baseline).",
                        "3. Using a protractor, draw a line at θ = 30° from the baseline.",
                        "4. At distances 5 cm, 10 cm, 15 cm, and 20 cm along the baseline, draw vertical lines.",
                        "5. Each vertical line intersects the 30° line at a point — this forms four right-angled triangles.",
                        "6. Label each triangle's adjacent (horizontal), opposite (vertical), and hypotenuse.",
                        "",
                        "PART B: Measuring and Recording Ratios",
                        "7. Measure the three sides of each triangle to the nearest mm.",
                        "8. Calculate ratios: O/H, A/H, O/A for each triangle.",
                        "9. Record in the data table.",
                        "10. Compare ratios across all four triangles — they should be constant.",
                        "",
                        "PART C: Comparing to Calculator Values",
                        "11. Use a calculator: sin(30°), cos(30°), tan(30°).",
                        "12. Compare your measured ratios to the calculator values.",
                        "13. Calculate percentage error for each ratio in each triangle.",
                        "",
                        "PART D: Repeat for θ = 45° and θ = 60°",
                        "14. Repeat Parts A–C for angles 45° and 60°.",
                        "15. Observe: sin(45°) = cos(45°) — can you explain why geometrically?",
                        "16. Observe: sin(30°) = cos(60°) — can you explain why?",
                        "",
                        "PART E: Using Ratios to Find Unknown Sides",
                        "17. Draw a right-angled triangle with θ = 50° and hypotenuse = 15 cm.",
                        "18. Use sin(50°) to predict the opposite side.",
                        "19. Measure the actual side; compare to prediction."
                    ],
                    dataTable: [
                        ["Triangle", "Adjacent", "Opposite", "Hypotenuse", "O/H (sin)", "A/H (cos)", "O/A (tan)"],
                        ["θ=30°, adj=5cm", "5.00", "measured", "measured", "≈0.500", "≈0.866", "≈0.577"],
                        ["θ=30°, adj=10cm", "10.00", "measured", "measured", "≈0.500", "≈0.866", "≈0.577"],
                        ["θ=30°, adj=15cm", "15.00", "measured", "measured", "≈0.500", "≈0.866", "≈0.577"],
                        ["θ=30°, adj=20cm", "20.00", "measured", "measured", "≈0.500", "≈0.866", "≈0.577"],
                        ["Calculator values", "—", "—", "—", "0.5000", "0.8660", "0.5774"]
                    ],
                    conclusions: [
                        "For a fixed angle, the ratio O/H (= sin θ) is constant regardless of triangle size — the foundational discovery of trigonometry",
                        "Similarly, A/H (= cos θ) and O/A (= tan θ) are each constant for any given angle",
                        "This scale-invariance arises because all right-angled triangles with the same angle are similar — corresponding sides are proportional",
                        "sin(30°) = cos(60°) because the opposite and adjacent sides swap roles when the complementary angle is used",
                        "sin(45°) = cos(45°) because a 45°-45°-90° triangle is isosceles — opposite = adjacent"
                    ],
                    extensions: [
                        "Derive the identity sin²θ + cos²θ = 1 from Pythagoras' theorem",
                        "Investigate the sine rule for non-right-angled triangles",
                        "Draw a unit circle and read off sin, cos, tan values geometrically",
                        "Explore reciprocal trig functions: cosecant, secant, cotangent"
                    ],
                    realWorldConnections: [
                        "Ramps and gradients: angle of inclination determines sin (vertical rise / slant distance)",
                        "Shadow length: sun angle determines tan (shadow length / object height)",
                        "Radio towers: engineer uses trig to find height from measured angle and base distance",
                        "GPS triangulation: multiple angle measurements locate positions precisely"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 7: PYTHAGOREAN THEOREM
            // ========================================

            pythagorean_theorem_discovery: {
                name: "Proving Pythagoras: Geometric Proofs and Pythagorean Triples",
                relatedTopics: ['pythagorean_theorem', 'area', 'trigonometry_ratios'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Known to Babylonians (circa 1800 BCE) and to ancient Indian and Chinese mathematicians",
                    pythagoras: "Pythagoras of Samos (570–495 BCE) and his school are credited with the first general proof, although earlier cultures knew specific cases",
                    proof370: "Over 370 distinct proofs of the Pythagorean theorem have been documented, including proofs by Euclid, Einstein (age 12), and US President James Garfield (1876)",
                    garlieldProof: "James Garfield's proof uses a trapezoid area formula — among the most elegant geometric proofs",
                    babylonian: "The Plimpton 322 clay tablet (circa 1800 BCE) lists 15 Pythagorean triples, demonstrating knowledge of the theorem 1200 years before Pythagoras",
                    significance: "Pythagoras' theorem is the gateway theorem of geometry: it links algebra (equations) to geometry (shapes) and is the foundation of all coordinate geometry and trigonometry"
                },
                practicalMathematics: {
                    title: "Proving and Applying Pythagoras' Theorem",
                    hypothesis: "For any right-angled triangle with legs a and b and hypotenuse c, the areas of squares drawn on legs a and b sum to the area of the square drawn on c: a² + b² = c²",
                    purpose: "Verify the Pythagorean theorem by multiple methods: geometric proof (square dissection), algebraic proof, and numerical verification with Pythagorean triples",
                    materials: [
                        "Squared grid paper",
                        "Card for cutting squares",
                        "Scissors and ruler",
                        "Coloured pencils",
                        "Calculator"
                    ],
                    procedure: [
                        "PROOF 1: Square Dissection (Visual Proof)",
                        "1. Draw a right-angled triangle with legs a = 3, b = 4, c = 5 on card.",
                        "2. Draw a square on each side: 3×3 = 9 squares, 4×4 = 16 squares, 5×5 = 25 squares.",
                        "3. Count: 9 + 16 = 25 ✓",
                        "4. Now cut the two smaller squares into pieces and physically rearrange them to fill the large square.",
                        "5. This visual proof works for ANY right-angled triangle (not just integer sides).",
                        "",
                        "PROOF 2: Garfield's Trapezoid Proof",
                        "6. Arrange two congruent right-angled triangles and one isosceles right triangle into a trapezoid.",
                        "7. Area of trapezoid = ½(a+b)(a+b) = ½(a+b)²",
                        "8. Area of three triangles = 2 × ½ab + ½c² = ab + ½c²",
                        "9. Equating: ½(a+b)² = ab + ½c² → ½a² + ab + ½b² = ab + ½c² → a² + b² = c² ✓",
                        "",
                        "PROOF 3: Algebraic Rearrangement Proof",
                        "10. Draw a large square of side (a + b) containing four congruent right-angled triangles arranged around a central square of side c.",
                        "11. Area of large square: (a + b)² = a² + 2ab + b²",
                        "12. Area of four triangles: 4 × ½ab = 2ab",
                        "13. Area of central square: c²",
                        "14. Equation: a² + 2ab + b² = 2ab + c² → a² + b² = c² ✓",
                        "",
                        "PYTHAGOREAN TRIPLES INVESTIGATION:",
                        "15. Verify each triple: 3-4-5, 5-12-13, 8-15-17, 7-24-25",
                        "16. Generate new triples: for any m > n > 0: a = m²−n², b = 2mn, c = m²+n²",
                        "17. Test with m=2, n=1: a=3, b=4, c=5 ✓; m=3, n=2: a=5, b=12, c=13 ✓",
                        "",
                        "CONVERSE TEST:",
                        "18. Given sides 6, 8, 10 cm: is it right-angled? 6²+8² = 36+64 = 100 = 10² ✓",
                        "19. Given sides 5, 7, 9 cm: is it right-angled? 5²+7² = 25+49 = 74 ≠ 81 = 9² ✗",
                        "20. If a²+b² < c²: obtuse triangle. If a²+b² > c²: acute triangle."
                    ],
                    dataTable: [
                        ["Triple", "a²", "b²", "c²", "a²+b² = c²?", "Verification"],
                        ["3-4-5", "9", "16", "25", "9+16=25 ✓", "Right-angled"],
                        ["5-12-13", "25", "144", "169", "25+144=169 ✓", "Right-angled"],
                        ["8-15-17", "64", "225", "289", "64+225=289 ✓", "Right-angled"],
                        ["7-24-25", "49", "576", "625", "49+576=625 ✓", "Right-angled"],
                        ["6-8-10", "36", "64", "100", "36+64=100 ✓", "Right-angled (multiple of 3-4-5)"]
                    ],
                    conclusions: [
                        "The Pythagorean theorem is verified geometrically (area dissection), algebraically (rearrangement), and numerically (triples)",
                        "Multiple distinct proofs confirm the same result — each reveals a different structural insight about right-angled triangles",
                        "Pythagorean triples (integer solutions) are infinitely numerous and can be generated systematically",
                        "The converse allows verification of right angles from side lengths — crucial in construction",
                        "The 3D extension d = √(x²+y²+z²) generalises the theorem to three dimensions"
                    ],
                    extensions: [
                        "Research the 'Pythagorean theorem in disguise': the cosine rule c² = a²+b²−2ab cos C reduces to Pythagoras when C = 90°",
                        "Investigate: are there Pythagorean quadruples? (a²+b²+c² = d²: e.g., 1,2,2,3)",
                        "Explore Fermat's Last Theorem: no integer solutions for aⁿ+bⁿ = cⁿ when n > 2",
                        "Prove the Pythagorean theorem using similar triangles (Einstein's childhood proof)"
                    ],
                    realWorldConnections: [
                        "Construction: the 3-4-5 rule is used to set out perfect right angles on building sites",
                        "GPS: distance between coordinates uses the 2D or 3D Pythagorean formula",
                        "Computer graphics: pixel distance and vector magnitude calculations",
                        "Television screen size: diagonal measurement uses Pythagoras"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 8: BEARINGS AND NAVIGATION
            // ========================================

            bearings_navigation_investigation: {
                name: "Bearings and Navigation: Trigonometry in the Real World",
                relatedTopics: ['bearings', 'trigonometry_ratios', 'pythagorean_theorem'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Maritime navigation, 13th–16th centuries",
                    compassRose: "The compass rose appeared on portolan charts from the 13th century; the 32-point compass system divided the horizon into 32 equal directions",
                    transition: "The shift from 32-point compass directions to 360° three-figure bearings occurred as precision instruments improved in the 18th and 19th centuries",
                    modernBearings: "Three-figure bearings (000° to 360°) are now the international standard for aviation, maritime, and military navigation",
                    gps: "Modern GPS uses latitude/longitude with bearing calculations to provide turn-by-turn navigation — the same trigonometric principles expressed algorithmically",
                    significance: "Bearings combine geometry (direction), trigonometry (components), and real-world precision — making this topic one of the most practically relevant in school mathematics"
                },
                practicalMathematics: {
                    title: "Navigating by Bearings: From Compass to Trigonometry",
                    hypothesis: "A multi-leg journey specified by bearings and distances can be accurately reconstructed on a scale drawing and its direct return distance and bearing can be calculated using trigonometry",
                    purpose: "Plot bearings-based journeys on scale drawings, measure resultant distances and return bearings, and verify results using trigonometric calculations",
                    materials: [
                        "Protractor (360°)",
                        "Ruler (mm precision)",
                        "Blank paper (A3 preferred for scale drawings)",
                        "Pencil and compass",
                        "Calculator with trig functions",
                        "North arrow template or set square"
                    ],
                    procedure: [
                        "PART A: Plotting a Two-Leg Journey",
                        "1. Mark starting point A near the centre of the paper.",
                        "2. Draw a north arrow at A.",
                        "3. Journey: A to B on bearing 060°, distance 8 cm (scale: 1 cm = 1 km).",
                        "   Measure 60° clockwise from north; draw line 8 cm; mark point B.",
                        "4. Draw a north arrow at B.",
                        "5. Journey: B to C on bearing 150°, distance 6 cm.",
                        "   Measure 150° clockwise from north at B; draw line 6 cm; mark point C.",
                        "6. Draw the direct line from A to C.",
                        "7. Measure AC directly with ruler (predicted: 10 cm).",
                        "8. Measure the bearing from A to C with protractor.",
                        "",
                        "PART B: Trigonometric Verification",
                        "9. Calculate angle between AB and BC at B:",
                        "   Bearing of AB from A = 060°; bearing of BC from B = 150°",
                        "   At B, the angle from north to BA (back bearing) = 060° + 180° = 240°",
                        "   Angle ABC = 240° − 150° = 90° (legs are perpendicular!)",
                        "10. Since angle ABC = 90°: AC = √(8² + 6²) = √100 = 10 km ✓",
                        "11. Bearing from A to C: tan(angle from north) = ... (use trig)",
                        "",
                        "PART C: Three-Leg Journey",
                        "12. Design a three-leg journey: 050° for 5 km, 140° for 7 km, 230° for 4 km.",
                        "13. Plot on scale drawing.",
                        "14. Measure final position relative to start.",
                        "15. Calculate using components: each leg contributes a northing and easting.",
                        "    Northing = distance × cos(bearing); Easting = distance × sin(bearing)",
                        "16. Sum all northings and eastings; find resultant distance and bearing.",
                        "",
                        "PART D: Return Bearing",
                        "17. For each journey, calculate the return bearing (bearing from end back to start).",
                        "18. Rule: back bearing = forward bearing ± 180°",
                        "19. Verify by measuring on scale drawing."
                    ],
                    dataTable: [
                        ["Journey Leg", "Bearing", "Distance", "Northing (N cos θ)", "Easting (N sin θ)", "Cumulative N", "Cumulative E"],
                        ["A to B", "060°", "8 km", "8 cos 60° = 4.00 km N", "8 sin 60° = 6.93 km E", "4.00", "6.93"],
                        ["B to C", "150°", "6 km", "6 cos 150° = −5.20 km S", "6 sin 150° = 3.00 km E", "−1.20", "9.93"],
                        ["Direct AC", "calculated", "√(1.20²+9.93²) ≈ 10.00 km", "—", "—", "—", "—"]
                    ],
                    conclusions: [
                        "Three-figure bearings provide a precise, unambiguous direction system from 000° to 360°",
                        "Journey legs can be decomposed into northing (cos component) and easting (sin component) — the key trig application",
                        "The return bearing is always the forward bearing ± 180°",
                        "Scale drawings verify trigonometric calculations — agreement confirms correctness",
                        "The component method (northing/easting) generalises to any number of journey legs and is the basis of GPS coordinate calculation"
                    ],
                    extensions: [
                        "Navigate a multi-waypoint orienteering course using given bearings and distances",
                        "Use the sine rule to solve non-right-angled bearing triangles",
                        "Investigate how bearings relate to vectors in mathematics and physics",
                        "Research how GPS receivers compute position from multiple satellite bearings"
                    ],
                    realWorldConnections: [
                        "Aviation: flight plans are specified entirely in bearings and distances",
                        "Maritime: ship logs record bearing and distance for each course change",
                        "Hiking: orienteering maps use grid bearings for route planning",
                        "Surveying: theodolite measurements use bearings and angles to map terrain",
                        "Military: artillery targeting and logistics use bearing calculations"
                    ]
                }
            }
        };

        this.linkPracticalsToTopics();
    }

    linkPracticalsToTopics() {
        Object.entries(this.mathematicsPracticals).forEach(([practicalId, practical]) => {
            practical.relatedTopics.forEach(topicId => {
                if (this.mathematicsTopics[topicId]) {
                    if (!this.mathematicsTopics[topicId].relatedPracticals) {
                        this.mathematicsTopics[topicId].relatedPracticals = [];
                    }
                    this.mathematicsTopics[topicId].relatedPracticals.push({
                        id: practicalId,
                        name: practical.name,
                        category: practical.category
                    });
                }
            });
        });
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            perimeter: {
                'Measurement Errors': [
                    'Adding area units (cm²) instead of linear units (cm) for perimeter',
                    'Confusing perimeter with area — perimeter is distance around, not space inside',
                    'Counting only visible sides in a diagram and forgetting hidden or implied sides',
                    'Using slant height instead of true horizontal or vertical dimensions in composite shapes'
                ],
                'Circle Errors': [
                    'Using C = πr² (area formula) instead of C = 2πr for circumference',
                    'Confusing radius and diameter: using full diameter where radius is needed, or vice versa',
                    'Forgetting to add the diameter when computing the perimeter of a semicircle (curved part + straight diameter)'
                ],
                'Composite Shapes': [
                    'Adding ALL sides including internal shared boundaries, rather than only the outer boundary',
                    'Subtracting when a piece is removed but forgetting to add the new exposed edges'
                ]
            },

            area: {
                'Height Errors': [
                    'Using slant height instead of perpendicular height for triangles and parallelograms',
                    'Confusing the base and height — height must always be perpendicular to the chosen base',
                    'Using the side length of a triangle as its height when the triangle is non-right-angled'
                ],
                'Formula Errors': [
                    'Using A = b × h for a triangle instead of A = ½ × b × h',
                    'Using A = πr for circle area (confusing with circumference formula)',
                    'Adding parallel sides for a trapezium but forgetting to multiply by ½',
                    'Squaring the diameter instead of the radius in the circle formula'
                ],
                'Unit Errors': [
                    'Giving area answers in cm instead of cm²',
                    'Not squaring the scale factor when converting areas between units (e.g., 1 m² = 10,000 cm², not 100 cm²)'
                ],
                'Composite Areas': [
                    'Subtracting an area that should be added (or vice versa) in composite shapes',
                    'Failing to identify that a semicircle contributes ½πr², not πr²'
                ]
            },

            surface_area: {
                'Face Identification': [
                    'Forgetting one or more faces of a solid (common for prisms with non-rectangular cross-sections)',
                    'Counting a face twice (top and bottom may be identical but must each be included)',
                    'Confusing lateral surface area with total surface area'
                ],
                'Cylinder Errors': [
                    'Using πr instead of 2πr for the length of the rectangular curved surface',
                    'Forgetting that the curved surface unfolds to a rectangle, not a circle',
                    'Not squaring r in the circular base area: using πr instead of πr²'
                ],
                'Cone Errors': [
                    'Using vertical height instead of slant height in the lateral surface area πrl',
                    'Confusing slant height l with vertical height h — must use l = √(r² + h²) if only h is given',
                    'Forgetting to include the circular base when total surface area is required'
                ],
                'Sphere': [
                    'Confusing SA = 4πr² with V = (4/3)πr³',
                    'Using diameter in place of radius in the sphere surface area formula'
                ]
            },

            volume: {
                'Prism vs Pyramid': [
                    'Forgetting the factor of ⅓ for pyramids and cones: using V = πr²h instead of V = ⅓πr²h',
                    'Confusing prism volume (V = Ah) with pyramid volume (V = ⅓Ah)'
                ],
                'Height Confusion': [
                    'Using slant height instead of vertical height in cone and pyramid volume formulas',
                    'Using length instead of cross-sectional area in prism volume (should use V = cross-section area × length)'
                ],
                'Unit Errors': [
                    'Giving volume in cm² instead of cm³',
                    'Not cubing the scale factor when converting volumes (1 m³ = 1,000,000 cm³, not 100 cm³)'
                ],
                'Sphere': [
                    'Confusing the sphere volume formula with the surface area formula',
                    'Cubing the diameter instead of the radius in V = (4/3)πr³'
                ]
            },

            arc_length: {
                'Fraction Errors': [
                    'Using θ/180 instead of θ/360 as the fraction of the full circle',
                    'Multiplying θ/360 by πr² (area formula) instead of 2πr for arc length',
                    'Forgetting that the formula uses the full circumference (2πr), not just πr'
                ],
                'Radian Confusion': [
                    'Substituting degrees directly into l = rθ without converting to radians',
                    'Confusing radian and degree values: sin(1°) ≠ sin(1 rad)',
                    'Thinking 1 radian = 1° (correct: 1 radian ≈ 57.3°)'
                ]
            },

            sector_area: {
                'Formula Confusion': [
                    'Using arc length formula (θ/360 × 2πr) instead of sector area formula (θ/360 × πr²)',
                    'Forgetting to square r in the sector area formula',
                    'Confusing sector (whole pie-slice region) with segment (region between chord and arc)'
                ],
                'Segment Errors': [
                    'Computing segment area as sector area alone without subtracting triangle area',
                    'Using the wrong formula for the triangle inside a sector: must use ½r²sin(θ), not ½bh unless h is known'
                ]
            },

            trigonometry_ratios: {
                'SOH CAH TOA Errors': [
                    'Misidentifying opposite and adjacent sides relative to the reference angle',
                    'Applying sine where cosine is needed because the labelling of O and A is incorrect',
                    'Forgetting that opposite/adjacent/hypotenuse are defined relative to the reference angle, not a fixed position'
                ],
                'Inverse Function Errors': [
                    'Writing sin θ = 0.6 and concluding θ = sin(0.6) instead of θ = sin⁻¹(0.6)',
                    'Confusing sin⁻¹ (inverse sine/arcsin) with 1/sin (reciprocal = cosecant)',
                    'Rounding intermediate values, causing accumulated errors in multi-step problems'
                ],
                'Calculator Errors': [
                    'Calculator set to radians when degrees are required (or vice versa)',
                    'Computing sin(30) in radian mode, getting sin(30 rad) ≈ −0.988 instead of sin(30°) = 0.5'
                ],
                'Setting Up Equations': [
                    'Writing sin θ = H/O instead of sin θ = O/H',
                    'Applying trig ratios to non-right-angled triangles without checking for right angle first'
                ]
            },

            pythagorean_theorem: {
                'Hypotenuse Identification': [
                    'Not identifying the hypotenuse correctly — it is always opposite the right angle and is the longest side',
                    'Applying the formula with a shorter side as c (the hypotenuse position)'
                ],
                'Algebraic Errors': [
                    'Writing a + b = c instead of a² + b² = c² (not squaring the sides)',
                    'Computing √(a² + b²) as √a² + √b² = a + b (incorrect: square root does not distribute)',
                    'Finding c² correctly but forgetting to take the square root to find c'
                ],
                'Finding a Shorter Side': [
                    'Adding instead of subtracting: using a² = b² + c² instead of a² = c² − b²',
                    'Subtracting side lengths directly: c − b instead of √(c² − b²)'
                ],
                'Context Errors': [
                    'Applying Pythagoras to non-right-angled triangles without checking for a right angle',
                    'Not recognising when a 3D diagonal problem requires two applications of Pythagoras'
                ]
            },

            bearings: {
                'Reading Bearings': [
                    'Measuring anticlockwise instead of clockwise from north',
                    'Reading the bearing from south or east instead of always from north',
                    'Writing two-figure bearings (e.g., 45°) instead of three-figure bearings (045°)'
                ],
                'Back Bearing Errors': [
                    'Adding 180° when the result exceeds 360° without subtracting 360°',
                    'Forgetting that back bearing = forward bearing ± 180° (add if < 180°; subtract if > 180°)'
                ],
                'Angle Identification': [
                    'Incorrectly identifying the angle between two journey legs from their bearings',
                    'Failing to draw north arrows at each intermediate point before measuring angles',
                    'Confusing interior triangle angles with bearing angles — must use alternate angles on parallel north lines'
                ],
                'Trigonometry Application': [
                    'Not resolving into north/south and east/west components for multi-leg journeys',
                    'Using sin where cos is needed for the northing component (northing = distance × cos(bearing))'
                ]
            }
        };

        this.clarificationStrategies = {
            always_draw_diagram: {
                method: 'Draw and label all measurements before applying any formula; mark right angles, heights, and unknowns',
                effectiveness: 'Very high — most geometry errors arise from misreading unlabelled diagrams'
            },
            perpendicular_height_check: {
                method: 'Always verify that the height used is perpendicular to the base; mark the right angle symbol on the diagram',
                effectiveness: 'High — eliminates slant height errors in area and volume'
            },
            unit_consistency: {
                method: 'Write units after every calculation step; confirm linear, square, or cubic units are appropriate',
                effectiveness: 'High — catches dimension errors early'
            },
            formula_verification_by_substitution: {
                method: 'Substitute known special cases (e.g., square as special rectangle) to verify formula gives correct result',
                effectiveness: 'High for formula confusion errors'
            },
            soh_cah_toa_card: {
                method: 'Carry a SOH-CAH-TOA reference card; label all three sides before choosing the ratio',
                effectiveness: 'Very high for trig labelling and ratio selection errors'
            },
            north_arrow_discipline: {
                method: 'Draw a north arrow at every point in a bearings diagram; measure all angles from north, clockwise',
                effectiveness: 'Essential — bearing errors almost always stem from missing north arrows'
            },
            pythagoras_square_check: {
                method: 'Always write a² + b² and c² separately before equating; do not combine in one step',
                effectiveness: 'High — catches algebraic errors in Pythagoras calculations'
            },
            net_drawing: {
                method: 'Sketch the net of any 3D solid before computing surface area; label each face',
                effectiveness: 'Very high — eliminates missing face errors in surface area'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}? Can you give a real-world example?",
                "What shapes or objects do you associate with {topic}?",
                "How do you think {topic} connects to {related_concept} you have already studied?",
                "What do you predict will be the most challenging aspect of {topic}?"
            ],
            duringLearning: [
                "Have you drawn and labelled a clear diagram before applying the formula?",
                "Is the measurement you are using truly perpendicular to the base?",
                "Are your units consistent throughout the calculation? (linear, square, or cubic?)",
                "Does your answer seem reasonable given the scale of the problem?",
                "Can you spot a pattern connecting this formula to others you have learned?"
            ],
            afterLearning: [
                "What are the key formulas for {topic} and what does each variable represent?",
                "What common errors might trap another student studying {topic}? How would you warn them?",
                "How would you explain the derivation or geometric meaning of the {topic} formula?",
                "What is the most important diagram or visual that captures {topic}?",
                "How does {topic} connect to real-world applications in engineering, design, or science?"
            ],
            problemSolving: [
                "What information is given, and what needs to be found?",
                "Which shape(s) am I dealing with? Have I drawn and labelled them?",
                "Is this a perimeter/length, area, or volume problem? What units will the answer be in?",
                "Do I need perpendicular height, slant height, or both? Are they different here?",
                "Have I checked my answer against an estimate or special case?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            perimeter: [
                {
                    scenario: "Olympic Running Track Design",
                    context: "An Olympic 400 m running track consists of two straight sections and two semicircular ends. The total perimeter (inside lane) must be exactly 400 m.",
                    problem: "If the straight sections are each 84.39 m, find the radius of each semicircular end.",
                    application: "Perimeter = 2 × 84.39 + 2 × π × r = 400. Solving: 2πr = 400 − 168.78 = 231.22 → r = 231.22/(2π) ≈ 36.8 m",
                    question: "What is the total area enclosed by the inner perimeter of the track?",
                    answer: "A = 2 × 84.39 × (2r) + π × r² = 2 × 84.39 × 73.6 + π × 36.8² ≈ 12,430 + 4,253 ≈ 16,683 m²",
                    extension: "Why are the straight sections a specific length? Research IAAF regulations for track design."
                },
                {
                    scenario: "Garden Border Planning",
                    context: "A homeowner has a rectangular garden 15 m × 9 m with a circular pond of diameter 4 m in one corner. She wants to place a decorative border around the full outer perimeter of the garden.",
                    problem: "Calculate the length of border material needed for the outer perimeter only.",
                    application: "The pond is inside the garden — outer perimeter is still the rectangle: P = 2(15 + 9) = 48 m",
                    question: "If the border material costs £2.85 per metre, what is the total cost?",
                    answer: "Cost = 48 × £2.85 = £136.80",
                    extension: "If a path of width 0.5 m runs along the inner edge of the border, what is the perimeter of the inner edge of the path?"
                }
            ],

            area: [
                {
                    scenario: "Flooring a House",
                    context: "An L-shaped living room has dimensions: large rectangle 8 m × 5 m, with a rectangular section 3 m × 2 m cut from one corner for a fitted wardrobe.",
                    problem: "Calculate the area of flooring required.",
                    application: "Area = (8 × 5) − (3 × 2) = 40 − 6 = 34 m²",
                    question: "If laminate flooring costs £18 per m² and an extra 10% is purchased for wastage, what is the total cost?",
                    answer: "Adjusted area = 34 × 1.1 = 37.4 m². Cost = 37.4 × £18 = £673.20",
                    extension: "Research how flooring contractors estimate wastage percentages for different room shapes and flooring orientations."
                },
                {
                    scenario: "Solar Panel Sizing",
                    context: "A roof section measures 6 m × 4 m. Circular roof lights each with radius 0.3 m are installed, and there are 4 of them. Solar panels cannot be placed over the roof lights.",
                    problem: "Find the maximum usable area for solar panels.",
                    application: "Usable area = (6 × 4) − 4 × π(0.3)² = 24 − 4 × 0.09π = 24 − 0.36π ≈ 24 − 1.13 ≈ 22.87 m²",
                    question: "Each panel produces 200 W per m². What is the maximum power output?",
                    answer: "Power = 22.87 × 200 ≈ 4574 W ≈ 4.57 kW",
                    extension: "Research how panel angle (pitch) affects effective area and power output."
                }
            ],

            surface_area: [
                {
                    scenario: "Packaging a Cylindrical Can",
                    context: "A food manufacturer wants to design a cylindrical tin with radius 4 cm and height 10 cm. They need to know how much metal is needed for the can and how much label paper for the curved surface.",
                    problem: "Calculate total surface area (metal required) and lateral surface area (label area).",
                    application: "Total SA = 2π(4)² + 2π(4)(10) = 32π + 80π = 112π ≈ 351.86 cm². Lateral SA = 80π ≈ 251.33 cm²",
                    question: "If the metal costs 0.5p per cm² and label paper costs 0.2p per cm², what is the total material cost per can?",
                    answer: "Metal: 112π × 0.5 ≈ 175.9p. Label: 80π × 0.2 ≈ 50.3p. Total ≈ 226.2p = £2.26 per can",
                    extension: "Research Pappus's theorem: SA of a solid of revolution = perimeter of cross-section × distance travelled by centroid."
                },
                {
                    scenario: "Painting a Room",
                    context: "A rectangular room is 5 m × 4 m × 2.8 m (l × w × h). It has one door (2 m × 0.9 m) and two windows (1.2 m × 1 m each) that will not be painted.",
                    problem: "Find the paintable surface area (walls and ceiling only; no floor).",
                    application: "Walls: 2(5×2.8) + 2(4×2.8) = 28 + 22.4 = 50.4 m². Ceiling: 5×4 = 20 m². Subtract: door = 1.8 m², 2 windows = 2.4 m². Paintable = 50.4 + 20 − 1.8 − 2.4 = 66.2 m²",
                    question: "If one tin of paint covers 12 m² and costs £8.99, how many tins are needed and what is the total cost?",
                    answer: "Tins needed = ⌈66.2/12⌉ = 6 tins. Cost = 6 × £8.99 = £53.94",
                    extension: "Two coats of paint are typically applied. Recalculate for two coats."
                }
            ],

            volume: [
                {
                    scenario: "Water Tank Capacity",
                    context: "A cylindrical water tank has diameter 1.8 m and height 2.5 m. The water level is currently at 1.6 m from the bottom.",
                    problem: "Find (a) the total tank capacity and (b) the current volume of water, both in litres.",
                    application: "r = 0.9 m. Total V = π(0.9)²(2.5) = 2.025π ≈ 6.362 m³ = 6362 L. Current V = π(0.9)²(1.6) = 1.296π ≈ 4.072 m³ = 4072 L",
                    question: "Water is pumped in at 50 litres per minute. How long before the tank is full?",
                    answer: "Remaining = 6362 − 4072 = 2290 L. Time = 2290/50 = 45.8 minutes ≈ 46 minutes",
                    extension: "Research real water tower designs: how do engineers balance capacity, structural load, and pressure requirements?"
                },
                {
                    scenario: "Ice Cream Cone",
                    context: "An ice cream vendor sells a cone (r = 3 cm, h = 12 cm) topped with a hemisphere of ice cream (r = 3 cm). The customer wants to know the total volume of ice cream.",
                    problem: "Calculate the total volume: cone + hemisphere.",
                    application: "V_cone = ⅓π(3)²(12) = 36π cm³. V_hemisphere = (2/3)π(3)³ = 18π cm³. Total = 54π ≈ 169.6 cm³",
                    question: "If the ice cream density is 0.58 g/cm³, what is the mass of ice cream?",
                    answer: "Mass = 54π × 0.58 ≈ 169.6 × 0.58 ≈ 98.4 g",
                    extension: "Research: why does ice cream have a density less than water? What role does air incorporation (overrun) play?"
                }
            ],

            arc_length: [
                {
                    scenario: "Clock Hand Travel",
                    context: "The minute hand of a clock is 12 cm long. A student wants to calculate how far the tip of the minute hand travels during a school lesson of 55 minutes.",
                    problem: "Calculate the arc length travelled by the tip of the minute hand in 55 minutes.",
                    application: "In 60 minutes: full circle = 2π(12) = 24π cm. In 55 minutes: l = (55/60) × 24π = 22π ≈ 69.12 cm",
                    question: "What angle in radians does the minute hand sweep in 55 minutes?",
                    answer: "Full circle = 2π rad in 60 min. In 55 min: θ = (55/60) × 2π = 11π/6 ≈ 5.76 rad",
                    extension: "If the hour hand is 8 cm long, what arc length does it travel in 55 minutes?"
                },
                {
                    scenario: "Bicycle Wheel Rotation",
                    context: "A bicycle wheel has diameter 70 cm. A cyclist travels 500 m along a road.",
                    problem: "Calculate the number of complete rotations of the wheel.",
                    application: "Circumference = π × 70 = 70π ≈ 219.9 cm = 2.199 m per rotation. Rotations = 500/2.199 ≈ 227 rotations",
                    question: "If the cyclist travels at 18 km/h, how many rotations per second does the wheel make?",
                    answer: "18 km/h = 5 m/s. Rotations per second = 5/2.199 ≈ 2.27 rotations/s",
                    extension: "Research gear ratios: how do different gear combinations change the number of wheel rotations per pedal revolution?"
                }
            ],

            sector_area: [
                {
                    scenario: "Windscreen Wiper Coverage",
                    context: "A car's windscreen wiper arm is 30 cm long, and the wiper blade extends from 10 cm to 60 cm from the pivot. The wiper sweeps through an angle of 120°.",
                    problem: "Calculate the area of windscreen cleaned by the wiper.",
                    application: "Swept area = sector(r=60, θ=120°) − sector(r=10, θ=120°) = (120/360)π(60)² − (120/360)π(10)² = (1/3)(3600π − 100π) = (1/3)(3500π) ≈ 3665 cm²",
                    question: "Express the cleaned area as a percentage of the full windscreen, approximated as a rectangle 140 cm × 60 cm.",
                    answer: "Windscreen area = 8400 cm². Percentage = (3665/8400) × 100 ≈ 43.6%",
                    extension: "Research how tandem wiper systems (two wipers) are designed to maximise total coverage without overlapping."
                },
                {
                    scenario: "Pizza Slice Fairness",
                    context: "A pizza of diameter 36 cm is cut into slices. The first three cuts produce slices of 70°, 85°, and 90°. A fourth person takes the remaining large slice.",
                    problem: "Find the area of the fourth slice.",
                    application: "Remaining angle = 360° − 70° − 85° − 90° = 115°. Area = (115/360) × π(18)² = (115/360) × 324π = 103.5π ≈ 325.2 cm²",
                    question: "What fraction of the pizza does the fourth person receive, and is it fair?",
                    answer: "Fraction = 115/360 ≈ 31.9%. The first person got 70/360 ≈ 19.4%, so the fourth slice is the largest.",
                    extension: "Design a pizza-cutting strategy to give n people equal areas without using equal angles (research: can non-radial cuts achieve this?)."
                }
            ],

            trigonometry_ratios: [
                {
                    scenario: "Building Ramp Compliance",
                    context: "UK building regulations require wheelchair ramps to have a maximum gradient of 1:12 (rise of 1 m for every 12 m of horizontal run). An architect designs a ramp to reach a door 0.75 m above ground.",
                    problem: "Find the minimum required horizontal length of the ramp and the angle of inclination.",
                    application: "Horizontal length = 12 × 0.75 = 9 m. Angle: tan θ = 0.75/9 → θ = tan⁻¹(1/12) ≈ 4.76°",
                    question: "What is the actual length (hypotenuse) of the ramp surface?",
                    answer: "l = √(9² + 0.75²) = √(81 + 0.5625) = √81.5625 ≈ 9.03 m",
                    extension: "Research: why does a steeper ramp angle make wheelchair use difficult? Connect to force components on an inclined plane."
                },
                {
                    scenario: "Lighthouse Navigation",
                    context: "A ship's navigator observes a lighthouse from deck level. The angle of elevation to the top of the lighthouse is 3.2°. The lighthouse is known to be 42 m tall above sea level.",
                    problem: "Estimate the ship's distance from the base of the lighthouse.",
                    application: "tan 3.2° = 42/d → d = 42/tan 3.2° = 42/0.0559 ≈ 751 m",
                    question: "If the ship is travelling directly toward the lighthouse at 8 knots (1 knot = 1.852 km/h), how long before it reaches the lighthouse?",
                    answer: "0.751 km ÷ (8 × 1.852 km/h) = 0.751/14.816 ≈ 0.0507 hours ≈ 3 minutes",
                    extension: "Research: how do GPS and radar systems use similar trigonometric principles for distance estimation?"
                }
            ],

            pythagorean_theorem: [
                {
                    scenario: "Squaring a Building Foundation",
                    context: "A builder is setting out a rectangular building foundation 12 m × 9 m. She needs to verify the corners are exactly 90° using the 3-4-5 method.",
                    problem: "Calculate the length of the diagonal to confirm the foundation is rectangular.",
                    application: "diagonal = √(12² + 9²) = √(144 + 81) = √225 = 15 m. (3-4-5 triple × 3: 9-12-15)",
                    question: "The builder measures the actual diagonal as 15.2 m. What does this indicate, and by how many degrees is the corner off from 90°?",
                    answer: "Diagonal > 15 m indicates the corner is slightly more than 90° (obtuse). The angle at the corner: cos θ = (144 + 81 − 15.2²)/(2×12×9) — calculated using cosine rule.",
                    extension: "Research: how do professional surveyors use GPS and total stations to set out precise right angles over large distances?"
                },
                {
                    scenario: "TV Screen Sizing",
                    context: "Televisions are sold by their diagonal screen size. A '55-inch TV' has a diagonal of 55 inches. Most modern TVs have a 16:9 aspect ratio.",
                    problem: "Calculate the actual width and height of a 55-inch 16:9 TV screen.",
                    application: "Width : height = 16 : 9. Let width = 16k, height = 9k. Diagonal: (16k)² + (9k)² = 55². 256k² + 81k² = 3025. 337k² = 3025 → k² = 8.977 → k ≈ 2.996. Width ≈ 47.9 in, height ≈ 26.97 in",
                    question: "What is the area of the screen in square inches and square centimetres?",
                    answer: "Area = 47.9 × 26.97 ≈ 1292 in². In cm: 1 in = 2.54 cm → 1 in² = 6.4516 cm². Area ≈ 8333 cm²",
                    extension: "Research: a '55-inch TV' and a '55-inch monitor' with 4:3 ratio — which has the larger screen area?"
                }
            ],

            bearings: [
                {
                    scenario: "Search and Rescue Operation",
                    context: "A coastguard receives distress signals. The rescue station at A receives a signal from a vessel at bearing 065° and 15 km distant. A second station B is 20 km due east of A. Station B detects the same vessel on bearing 320°.",
                    problem: "Verify the vessel's position by both bearings and calculate the vessel's bearing and distance from Station B.",
                    application: "Draw north arrows at A and B. From A: bearing 065° means 65° from north (northeast direction). From B: bearing 320° means 320° clockwise from north (northwest direction). Triangulate position using the sine rule.",
                    question: "What is the vessel's distance from the nearest coastline point if the coastline runs east-west through both stations?",
                    answer: "Using trig components from both stations, compute the vessel's coordinates and distance above the coastline (north of AB line).",
                    extension: "Research: how do modern coast guard operations use multiple radio direction-finding bearings for triangulation?"
                },
                {
                    scenario: "Hiking Route Planning",
                    context: "A hiker plans a route: Start at camp S. Walk 5 km on bearing 040°. Then walk 8 km on bearing 130°. Then return directly to camp S.",
                    problem: "Find the distance and bearing for the return journey from the final point back to S.",
                    application: "Resolve each leg: Leg 1: N = 5cos40° ≈ 3.83 km, E = 5sin40° ≈ 3.21 km. Leg 2: N = 8cos130° ≈ −5.14 km, E = 8sin130° ≈ 6.13 km. Total: N = −1.31 km (south), E = 9.34 km (east). Distance = √(1.31² + 9.34²) ≈ 9.43 km. Bearing = 180° + tan⁻¹(9.34/1.31) ≈ 180° + 82° = 262° (approx southwest with strong west component).",
                    question: "If the hiker walks at 4 km/h and rests 15 minutes between each leg, what is the total journey time?",
                    answer: "Total distance = 5 + 8 + 9.43 = 22.43 km. Walking time = 22.43/4 ≈ 5.61 hours. Rest = 2 × 15 min = 0.5 hours. Total ≈ 6.11 hours ≈ 6 h 7 min.",
                    extension: "Research: how do digital mapping apps (e.g., OS Maps, AllTrails) compute estimated journey times including elevation?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall geometric measurement formulas, definitions, and identification criteria",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the formula for the volume of a cone and identify all variables"
                },
                understand: {
                    description: "Explain why formulas work; connect to geometric derivations and visual models",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Derive"],
                    example: "Explain why the volume of a cone is ⅓ that of a cylinder with the same base and height"
                },
                apply: {
                    description: "Use formulas to calculate measurements of given shapes",
                    verbs: ["Calculate", "Find", "Compute", "Measure", "Apply"],
                    example: "Calculate the total surface area of a cylinder with radius 5 cm and height 8 cm"
                },
                analyze: {
                    description: "Identify appropriate formulas; analyse composite shapes; interpret measurements in context",
                    verbs: ["Identify", "Decompose", "Classify", "Analyse", "Select"],
                    example: "Decompose a composite shape and identify which area formulas to apply to each part"
                },
                evaluate: {
                    description: "Assess the reasonableness of answers; evaluate method selection; verify calculations",
                    verbs: ["Evaluate", "Verify", "Assess", "Critique", "Check"],
                    example: "A student calculates the surface area of a sphere as 4πr³. Identify and correct the error."
                },
                create: {
                    description: "Design shapes with specific measurements; derive formulas; solve open-ended design problems",
                    verbs: ["Design", "Construct", "Derive", "Create", "Optimise"],
                    example: "Design a cylindrical container with volume exactly 1 litre and minimum surface area"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can recall basic perimeter and area formulas for rectangles and squares",
                        "Confuses area and perimeter; uses wrong units",
                        "Cannot identify perpendicular height"
                    ],
                    support: ["Labelled diagram requirement for every problem", "Unit checking at each step", "Real objects for measuring before abstract formula use"]
                },
                developing: {
                    characteristics: [
                        "Applies area formulas for standard shapes including triangles and circles",
                        "Beginning to use surface area formulas for simple solids",
                        "Applies Pythagoras in straightforward right-angled triangle problems"
                    ],
                    support: ["Composite shape decomposition practice", "Formula derivation to prevent rote memorisation", "Trig ratio application in simple contexts"]
                },
                proficient: {
                    characteristics: [
                        "Selects appropriate formula for any standard shape independently",
                        "Solves multi-step problems involving composite shapes in 2D and 3D",
                        "Applies trigonometric ratios and Pythagoras to real-world contexts"
                    ],
                    support: ["Optimisation problems (isoperimetric, minimum material)", "Bearings and navigation problems requiring trig", "Unit conversion between measurement systems"]
                },
                expert: {
                    characteristics: [
                        "Derives measurement formulas from first principles",
                        "Solves complex 3D problems combining multiple measurement types",
                        "Connects geometric measurement to calculus (integration for curved volumes)"
                    ],
                    support: ["Open investigation: derive sphere surface area using limits", "Connect arc length to integration and radian measure", "Research Pappus's centroid theorem and its applications"]
                }
            }
        };

        this.assessmentQuestions = {
            perimeter: {
                remember: "State the formula for the circumference of a circle in terms of (a) radius and (b) diameter",
                understand: "Explain why the perimeter of a semicircle is πr + 2r and not just πr",
                apply: "Calculate the perimeter of a shape consisting of a rectangle 8 cm × 5 cm with a semicircle on one of the shorter ends",
                analyze: "A composite shape is made of two shapes. Only some sides form the perimeter. Identify which sides to include and explain your reasoning.",
                evaluate: "A student calculates the perimeter of a circle with diameter 10 cm as π × 10² = 100π. Evaluate this claim.",
                create: "Design two different composite shapes each with perimeter exactly 40 cm. Include at least one curved boundary."
            },
            area: {
                remember: "Write the area formula for a trapezium and identify each variable in a labelled diagram",
                understand: "Explain using a dissection argument why the area of a parallelogram equals base × perpendicular height",
                apply: "Calculate the shaded area between a circle of radius 6 cm and a square of side 10 cm, where the circle sits inside the square",
                analyze: "A triangle and a rectangle have the same base and height. What is the ratio of their areas? Justify geometrically.",
                evaluate: "A student calculates the area of a triangle as ½ × 8 × 10 = 40 cm², using the slant side as height. Evaluate this claim.",
                create: "Create three different triangles each with area exactly 24 cm². Provide full measurements for each."
            },
            surface_area: {
                remember: "State the total surface area formula for a cylinder and identify what each term represents",
                understand: "Explain how unfolding a cylinder into a net shows why the curved surface area equals 2πrh",
                apply: "Find the total surface area of a cone with base radius 6 cm and slant height 10 cm",
                analyze: "A solid consists of a cylinder with a hemisphere on top (same radius). Which faces contribute to the total surface area and which are internal?",
                evaluate: "A student finds the surface area of a cone using the vertical height instead of the slant height. Explain the error and calculate the correct answer.",
                create: "Design a closed container (any shape) with total surface area between 200 cm² and 250 cm². Specify all dimensions."
            },
            volume: {
                remember: "State the volume formulas for (a) a cylinder, (b) a cone, and (c) a sphere",
                understand: "Explain using Cavalieri's Principle why any prism with the same base area and height has the same volume",
                apply: "A hemispherical bowl of radius 12 cm is filled with water. Find the volume of water in litres.",
                analyze: "Compare the volumes of a cylinder and a cone with the same base radius and height. What fraction is one of the other?",
                evaluate: "A student calculates the volume of a sphere of radius 3 cm as (4/3)π × 3² = 12π cm³. Identify and correct the error.",
                create: "Design a cylindrical can with volume exactly 500 cm³ and find the dimensions that minimise the amount of metal used (minimum surface area)."
            },
            arc_length: {
                remember: "State the arc length formula in both degrees and radians",
                understand: "Explain what a radian is and why arc length = rθ when θ is in radians",
                apply: "Find the arc length of a sector with radius 9 cm and central angle 80°",
                analyze: "Two sectors have the same arc length but different radii. What can you conclude about their central angles?",
                evaluate: "A student calculates arc length as (θ/360) × πr² for radius 5 cm and angle 60°. Identify the error and correct it.",
                create: "Design two different sectors with arc length exactly 10π cm. Specify radius and angle for each."
            },
            sector_area: {
                remember: "State the sector area formula in degrees and in radians",
                understand: "Explain the difference between a sector and a segment, and how to find the area of each",
                apply: "Find the area of a sector with radius 12 cm and central angle 150°",
                analyze: "A sector has area 48π cm² and radius 12 cm. Find the central angle in both degrees and radians.",
                evaluate: "A student finds the segment area as just the sector area without subtracting the triangle. Explain when this error matters most and least.",
                create: "Design a sector with area between 50 cm² and 60 cm². Provide two different sets of possible dimensions."
            },
            trigonometry_ratios: {
                remember: "State the three trigonometric ratios (SOH CAH TOA) and identify opposite, adjacent, and hypotenuse in a labelled diagram",
                understand: "Explain why sin(30°) = cos(60°) using the properties of complementary angles in a right-angled triangle",
                apply: "A ladder 6 m long leans against a vertical wall making an angle of 70° with the ground. Find the height it reaches up the wall.",
                analyze: "Given sin θ = 3/5, find cos θ and tan θ without using a calculator. Justify using a right-angled triangle diagram.",
                evaluate: "A student solves for θ in cos θ = 0.45 by writing θ = cos(0.45) = 0.45. Evaluate this approach and provide the correct method.",
                create: "Design a real-world problem involving an angle of elevation or depression that requires use of the tangent ratio. Provide full solution."
            },
            pythagorean_theorem: {
                remember: "State the Pythagorean theorem and identify the hypotenuse in a right-angled triangle",
                understand: "Describe Garfield's trapezoid proof of the Pythagorean theorem in your own words",
                apply: "A rectangular field is 40 m × 30 m. A fence is to be built along the diagonal. Find the length of the fence.",
                analyze: "Determine whether triangles with sides (a) 9, 12, 15; (b) 7, 10, 13; (c) 5, 12, 13 are right-angled. Justify each.",
                evaluate: "A student finds the hypotenuse of a right-angled triangle with legs 5 and 12 as c = 5 + 12 = 17. Evaluate this claim.",
                create: "Generate three Pythagorean triples using the formula a = m²−n², b = 2mn, c = m²+n² for different values of m and n. Verify each."
            },
            bearings: {
                remember: "State the three-figure bearing for north, south, east, and west; explain how to find a back bearing",
                understand: "Explain why all bearings are measured clockwise from north and why north arrows must be drawn at every relevant point",
                apply: "A ship sails 12 km on bearing 075°, then 9 km on bearing 165°. Find the distance from start and the bearing of the return journey.",
                analyze: "Two planes leave the same airport simultaneously. Plane A on bearing 040° at 500 km/h; Plane B on bearing 130° at 600 km/h. After 2 hours, find their distance apart.",
                evaluate: "A student states that the back bearing of 200° is 200° − 180° = 20°. Evaluate this claim for all possible forward bearings.",
                create: "Design a three-leg orienteering course using bearings and distances such that the total return journey is exactly 15 km. Justify using trigonometry."
            }
        };
    }

    // ============================================================
    // TOPIC HANDLERS
    // ============================================================

    handlePerimeter(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Perimeter and Circumference",
            category: 'geometric_measurement',
            summary: "Perimeter is the total distance around the boundary of a 2D shape. For circles, the perimeter is called the circumference. Always use linear units (cm, m, km) for perimeter answers.",
            definitions: {
                perimeter: { definition: "Total distance around the outside boundary of a 2D shape", units: "Linear (cm, m, km)" },
                circumference: { definition: "Perimeter of a circle; C = 2πr = πd", note: "Uses π ≈ 3.14159" },
                radius: { definition: "Distance from centre to circumference; r = d/2" },
                diameter: { definition: "Distance across circle through centre; d = 2r" }
            },
            formulas: {
                rectangle: "P = 2(l + w)",
                square: "P = 4s",
                triangle: "P = a + b + c",
                regularPolygon: "P = n × s",
                circle: "C = 2πr = πd",
                semicircle: "P = πr + 2r"
            },
            strategicApproach: {
                steps: [
                    "1. Identify the shape (or decompose composite shape)",
                    "2. Label all side lengths including any calculated from given information",
                    "3. Select the appropriate perimeter formula",
                    "4. Substitute values and calculate",
                    "5. Include correct linear units in the answer",
                    "6. Check: does the answer seem reasonable for the given dimensions?"
                ]
            },
            commonErrors: [
                { error: "Using area formula for circumference (πr² instead of 2πr)", fix: "Circumference uses r, not r²" },
                { error: "Forgetting the straight diameter in semicircle perimeter", fix: "Semicircle perimeter = curved part + diameter = πr + 2r" },
                { error: "Mixing radius and diameter", fix: "Check which measurement is given and convert as needed" }
            ]
        };
        if (/circumference|circle/i.test(input)) content.focus = "circleCircumference";
        if (/semicircle/i.test(input)) content.focus = "semicirclePerimeter";
        if (/composite|compound/i.test(input)) content.focus = "compositePerimeter";
        return content;
    }

    handleArea(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Area of 2D Shapes",
            category: 'geometric_measurement',
            summary: "Area measures the 2D space enclosed within a shape. Always use square units (cm², m²). The perpendicular height — not slant height — must be used in all area formulas.",
            definitions: {
                area: { definition: "The measure of 2D space enclosed within a boundary", units: "Square units: cm², m², km²" },
                perpendicularHeight: { definition: "Height measured at exactly 90° to the base", critical: "Must use perpendicular height, never slant height" },
                base: { definition: "The reference side from which height is measured" }
            },
            formulas: {
                rectangle: "A = l × w",
                square: "A = s²",
                triangle: "A = ½ × b × h",
                parallelogram: "A = b × h",
                trapezium: "A = ½(a + b) × h",
                circle: "A = πr²",
                rhombus: "A = ½ × d₁ × d₂",
                kite: "A = ½ × d₁ × d₂"
            },
            strategicApproach: {
                steps: [
                    "1. Draw and label the shape with all given measurements",
                    "2. Mark the perpendicular height clearly",
                    "3. Select the area formula for the shape",
                    "4. Substitute values; calculate area",
                    "5. Write answer with square units",
                    "6. For composite shapes: add or subtract component areas"
                ]
            },
            commonErrors: [
                { error: "Using slant height instead of perpendicular height", fix: "Mark the right angle showing true height on diagram" },
                { error: "Forgetting the ½ in triangle area", fix: "Derive from rectangle: triangle is exactly half" },
                { error: "Using πr for area instead of πr²", fix: "Area needs r²; circumference needs r" }
            ]
        };
        if (/triangle/i.test(input)) content.focus = "triangleArea";
        if (/circle/i.test(input)) content.focus = "circleArea";
        if (/trapez/i.test(input)) content.focus = "trapeziumArea";
        if (/composite|compound/i.test(input)) content.focus = "compositeArea";
        return content;
    }

    handleSurfaceArea(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Surface Area of 3D Shapes",
            category: 'geometric_measurement',
            summary: "Surface area is the total area of all faces of a 3D solid. Always sketch the net of the solid first to identify every face. Use square units for answers.",
            definitions: {
                surfaceArea: { definition: "Total area of all faces (flat and curved) of a 3D solid", units: "Square units: cm², m²" },
                net: { definition: "A 2D unfolding of a 3D shape showing all faces flat" },
                lateralSurfaceArea: { definition: "Area of side faces only, excluding bases" },
                slantHeight: { definition: "Height measured along the sloping face; l = √(r² + h²) for a cone" }
            },
            formulas: {
                cube: "SA = 6s²",
                cuboid: "SA = 2(lw + lh + wh)",
                cylinder: "SA = 2πr² + 2πrh",
                cone: "SA = πr² + πrl (l = slant height)",
                sphere: "SA = 4πr²",
                squarePyramid: "SA = s² + 2sl"
            },
            strategicApproach: {
                steps: [
                    "1. Identify the solid and sketch its net",
                    "2. Label all faces and their dimensions",
                    "3. Calculate each face area separately",
                    "4. Sum all face areas",
                    "5. Write answer in square units"
                ]
            },
            commonErrors: [
                { error: "Using vertical height instead of slant height for cone lateral area", fix: "Slant height l = √(r² + h²); must use l, not h, in πrl" },
                { error: "Forgetting one face of a solid", fix: "Always sketch the net first and label every face" },
                { error: "Confusing SA = 4πr² (sphere) with V = (4/3)πr³", fix: "SA uses r²; Volume uses r³ with a (4/3) coefficient" }
            ]
        };
        if (/cylinder/i.test(input)) content.focus = "cylinderSA";
        if (/cone/i.test(input)) content.focus = "coneSA";
        if (/sphere/i.test(input)) content.focus = "sphereSA";
        if (/prism/i.test(input)) content.focus = "prismSA";
        return content;
    }

    handleVolume(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Volume of 3D Shapes",
            category: 'geometric_measurement',
            summary: "Volume measures the 3D space enclosed in a solid. Prisms use V = base area × height. Pyramids and cones use V = ⅓ × base area × height. Use cubic units (cm³, m³, litres).",
            definitions: {
                volume: { definition: "The measure of 3D space enclosed within a solid", units: "Cubic units: cm³, m³; 1 litre = 1000 cm³" },
                crossSection: { definition: "The 2D shape formed by cutting a solid parallel to its base" },
                prism: { definition: "Solid with uniform cross-section throughout its length" },
                pyramid: { definition: "Solid with polygonal base tapering to an apex; volume = ⅓ × prism" }
            },
            formulas: {
                cuboid: "V = l × w × h",
                prism: "V = A × h (A = cross-sectional area)",
                cylinder: "V = πr²h",
                cone: "V = ⅓πr²h",
                pyramid: "V = ⅓ × A × h",
                sphere: "V = (4/3)πr³",
                hemisphere: "V = (2/3)πr³"
            },
            strategicApproach: {
                steps: [
                    "1. Identify whether the solid is a prism, pyramid, or sphere",
                    "2. Find the cross-sectional (base) area if a prism",
                    "3. Identify the correct height (perpendicular, not slant)",
                    "4. Apply the appropriate volume formula",
                    "5. Write answer in cubic units",
                    "6. Convert to litres if capacity is requested (÷ 1000)"
                ]
            },
            commonErrors: [
                { error: "Forgetting the ⅓ factor for cones and pyramids", fix: "Three cones = one cylinder; always include ⅓" },
                { error: "Using slant height instead of vertical height in cone/pyramid volume", fix: "Volume uses vertical height h; slant height l is for surface area" },
                { error: "Cubing diameter instead of radius in sphere formula", fix: "V = (4/3)πr³ uses radius r = d/2" }
            ]
        };
        if (/cylinder/i.test(input)) content.focus = "cylinderVolume";
        if (/cone/i.test(input)) content.focus = "coneVolume";
        if (/sphere/i.test(input)) content.focus = "sphereVolume";
        if (/prism/i.test(input)) content.focus = "prismVolume";
        return content;
    }

    handleArcLength(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Arc Length",
            category: 'geometric_measurement',
            summary: "Arc length is the distance along a curved portion of a circle's circumference. In degrees: l = (θ/360) × 2πr. In radians: l = rθ. The radian form is simpler and fundamental to higher mathematics.",
            definitions: {
                arc: { definition: "A continuous portion of a circle's circumference between two points" },
                centralAngle: { definition: "Angle at the centre of a circle formed by two radii to the arc endpoints" },
                radian: { definition: "Angle subtending an arc equal to the radius; 1 rad ≈ 57.3°; 2π rad = 360°" }
            },
            formulas: {
                degrees: "l = (θ/360) × 2πr",
                radians: "l = rθ",
                degreesToRadians: "θ_rad = θ_deg × (π/180)",
                radiansToDegrees: "θ_deg = θ_rad × (180/π)"
            },
            strategicApproach: {
                steps: [
                    "1. Identify the radius r and central angle θ",
                    "2. Check whether θ is in degrees or radians",
                    "3. Apply the appropriate formula",
                    "4. Express answer in the same length units as r"
                ]
            },
            commonErrors: [
                { error: "Using θ/180 instead of θ/360 for the fraction", fix: "A full circle is 360°, so fraction = θ/360" },
                { error: "Using πr² (area formula) instead of 2πr for arc length", fix: "Arc length derives from circumference 2πr, not area" },
                { error: "Substituting degrees into l = rθ without converting to radians", fix: "l = rθ only valid with θ in radians" }
            ]
        };
        if (/radian/i.test(input)) content.focus = "radianArcLength";
        return content;
    }

    handleSectorArea(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Sector Area",
            category: 'geometric_measurement',
            summary: "A sector is the pie-slice region bounded by two radii and an arc. Sector area in degrees: A = (θ/360) × πr². In radians: A = ½r²θ. A segment is the region between a chord and arc: segment = sector − triangle.",
            definitions: {
                sector: { definition: "Region bounded by two radii and the arc between them; resembles a pie slice" },
                segment: { definition: "Region between a chord and the arc; equals sector area minus triangle area" },
                chord: { definition: "A straight line connecting two points on a circle's circumference" }
            },
            formulas: {
                sectorDegrees: "A = (θ/360) × πr²",
                sectorRadians: "A = ½r²θ",
                triangleInSector: "A_triangle = ½r²sin(θ)",
                segment: "A_segment = A_sector − A_triangle"
            },
            strategicApproach: {
                steps: [
                    "1. Identify radius r and central angle θ",
                    "2. Calculate sector area using appropriate formula",
                    "3. For segment: also calculate triangle area using ½r²sin(θ)",
                    "4. Subtract triangle from sector for segment area",
                    "5. Express in square units"
                ]
            },
            commonErrors: [
                { error: "Using arc length formula instead of sector area formula", fix: "Sector area uses πr² (not 2πr); remember to square r" },
                { error: "Confusing sector and segment", fix: "Sector = full pie slice; segment = sector minus the triangle inside" },
                { error: "Using ½bh instead of ½r²sin(θ) for the triangle in a segment", fix: "Use ½r²sin(θ) when only r and θ are known; ½bh requires explicit base and height" }
            ]
        };
        if (/segment/i.test(input)) content.focus = "segmentArea";
        if (/radian/i.test(input)) content.focus = "radianSectorArea";
        return content;
    }

    handleTrigonometryRatios(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Trigonometric Ratios (SOH CAH TOA)",
            category: 'geometric_measurement',
            summary: "Trigonometric ratios (sin, cos, tan) relate angles to side ratios in right-angled triangles. SOH: sin = Opposite/Hypotenuse. CAH: cos = Adjacent/Hypotenuse. TOA: tan = Opposite/Adjacent. Inverse functions find angles from ratios.",
            definitions: {
                hypotenuse: { definition: "Longest side; always opposite the right angle" },
                opposite: { definition: "Side directly across from the reference angle θ" },
                adjacent: { definition: "Side next to reference angle θ (not hypotenuse)" },
                sinTheta: { formula: "sin θ = O/H", use: "Known: angle and hypotenuse or opposite" },
                cosTheta: { formula: "cos θ = A/H", use: "Known: angle and hypotenuse or adjacent" },
                tanTheta: { formula: "tan θ = O/A", use: "Known: angle and both legs (no hypotenuse needed)" }
            },
            specialAngles: {
                "30°": { sin: "0.5", cos: "√3/2", tan: "√3/3" },
                "45°": { sin: "√2/2", cos: "√2/2", tan: "1" },
                "60°": { sin: "√3/2", cos: "0.5", tan: "√3" }
            },
            strategicApproach: {
                steps: [
                    "1. Draw and label the right-angled triangle; mark the reference angle θ",
                    "2. Label the three sides: Hypotenuse (H), Opposite (O), Adjacent (A)",
                    "3. Identify which two sides are involved (known and unknown)",
                    "4. Select the ratio containing those two sides (SOH, CAH, or TOA)",
                    "5. Set up and solve the equation",
                    "6. Use inverse function (sin⁻¹, cos⁻¹, tan⁻¹) to find an unknown angle"
                ]
            },
            commonErrors: [
                { error: "Calculator in wrong mode (degrees vs radians)", fix: "Always check calculator mode before solving" },
                { error: "Misidentifying O and A relative to the reference angle", fix: "Redraw the triangle and label O, A, H explicitly before applying ratio" },
                { error: "Writing sin⁻¹ as 1/sin (confusing inverse with reciprocal)", fix: "sin⁻¹ is arcsin (finds angle); 1/sin is cosecant (different function)" }
            ]
        };
        if (/elevation|depression/i.test(input)) content.focus = "anglesOfElevationDepression";
        if (/sine.?rule|law.?of.?sine/i.test(input)) content.focus = "sineRule";
        if (/cosine.?rule|law.?of.?cosine/i.test(input)) content.focus = "cosineRule";
        return content;
    }

    handlePythagoreanTheorem(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Pythagorean Theorem",
            category: 'geometric_measurement',
            summary: "In any right-angled triangle: a² + b² = c², where c is the hypotenuse (longest side, opposite the right angle). Used to find any unknown side when two sides are known. The converse verifies right angles.",
            definitions: {
                hypotenuse: { definition: "The longest side of a right-angled triangle; always opposite the right angle" },
                legs: { definition: "The two shorter sides a and b that form the right angle" },
                pythagoreanTriple: { definition: "Three positive integers satisfying a² + b² = c²", examples: "3-4-5, 5-12-13, 8-15-17" },
                converse: { definition: "If a² + b² = c², the triangle is right-angled; use to verify right angles" }
            },
            formulas: {
                findHypotenuse: "c = √(a² + b²)",
                findLeg: "a = √(c² − b²)",
                in3D: "d = √(x² + y² + z²)",
                verify: "Check: a² + b² = c²?"
            },
            strategicApproach: {
                steps: [
                    "1. Identify the right angle and label the hypotenuse c",
                    "2. Label the two legs a and b",
                    "3. Substitute known values into a² + b² = c²",
                    "4. Solve for the unknown: if finding c, c = √(a²+b²); if finding a leg, a = √(c²−b²)",
                    "5. Check: is c longer than both a and b? (It must be)"
                ]
            },
            commonErrors: [
                { error: "Adding side lengths: c = a + b instead of c = √(a²+b²)", fix: "Must square each side before adding; then take square root" },
                { error: "Subtracting instead of substituting correctly for a shorter side", fix: "a² = c² − b², so a = √(c² − b²), not √(c − b)²" },
                { error: "Not identifying which side is the hypotenuse", fix: "Hypotenuse is always opposite the right angle; it's always c in the formula" }
            ]
        };
        if (/3d|three.*dimension|diagonal.*cuboid/i.test(input)) content.focus = "pythagoras3D";
        if (/triple|integer/i.test(input)) content.focus = "pythagoreanTriples";
        if (/converse|verify|right.?angle/i.test(input)) content.focus = "conversePythagoras";
        return content;
    }

    handleBearings(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Bearings and Navigation",
            category: 'geometric_measurement',
            summary: "A bearing is an angle measured clockwise from north, always written as three figures (000° to 360°). Bearings problems combine diagram drawing, angle relationships, and trigonometry (Pythagoras, SOH CAH TOA, sine rule, cosine rule).",
            definitions: {
                bearing: { definition: "Angle measured clockwise from north; always three figures (000°–360°)" },
                backBearing: { definition: "Return bearing; back bearing = forward bearing ± 180°", rule: "Add 180° if forward bearing < 180°; subtract 180° if ≥ 180°" },
                northArrow: { definition: "North direction drawn at every point in a bearings diagram; essential reference for all angle measurements" }
            },
            compassPoints: {
                "North": "000°", "East": "090°", "South": "180°", "West": "270°",
                "NE": "045°", "SE": "135°", "SW": "225°", "NW": "315°"
            },
            strategicApproach: {
                steps: [
                    "1. Draw a clear diagram; mark all given points",
                    "2. Draw a north arrow at each relevant point",
                    "3. Mark all given bearings (clockwise from north at each point)",
                    "4. Identify the triangle and find its interior angles from bearing relationships",
                    "5. Apply appropriate theorem: Pythagoras (right-angled), sine rule, or cosine rule",
                    "6. State bearing answers as three-figure numbers with ° symbol"
                ]
            },
            northSouthComponents: {
                northing: "distance × cos(bearing) — positive if northward, negative if southward",
                easting: "distance × sin(bearing) — positive if eastward, negative if westward",
                resultantDistance: "√(total northing² + total easting²)",
                resultantBearing: "tan⁻¹(total easting / total northing), adjusted to correct quadrant"
            },
            commonErrors: [
                { error: "Measuring anticlockwise instead of clockwise", fix: "Bearings are ALWAYS clockwise from north" },
                { error: "Writing two-figure bearings (e.g., 60°) instead of three-figure (060°)", fix: "Always pad with leading zeros to three figures" },
                { error: "Not drawing north arrows at intermediate points", fix: "North arrows at every point are essential for finding triangle angles" },
                { error: "Confusing bearing angles with interior triangle angles", fix: "Use alternate angles (parallel north lines) to find interior triangle angles" }
            ]
        };
        if (/back.?bearing|return/i.test(input)) content.focus = "backBearing";
        if (/component|northing|easting/i.test(input)) content.focus = "componentMethod";
        if (/sine.?rule|cosine.?rule/i.test(input)) content.focus = "bearingsWithSineCosineLaw";
        return content;
    }
}

// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseGeometricProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.mathematicsTopics)) {
        if (type === topic || type === subTopic) {
            topicType = type;
            break;
        }

        for (const pattern of config.patterns) {
            if (pattern.test(topic) || (subTopic && pattern.test(subTopic))) {
                topicType = type;
                break;
            }
        }
        if (topicType) break;
    }

    if (!topicType) {
        throw new Error(`Unable to recognize geometric measurement topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.mathematicsTopics[topicType].difficulty,
        prerequisites: this.mathematicsTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleGeometricProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isPracticalRequest = requestType === 'practical' ||
                                   (typeof topic === 'string' && topic.toLowerCase().includes('practical'));

        if (isPracticalRequest) {
            return this.handlePracticalMathematicsRequest(config);
        } else {
            this.currentProblem = this.parseGeometricProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getGeometricContent(this.currentProblem);

            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }

            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }

            if (this.includePracticals) {
                this.currentContent.relatedPracticals = this.getRelatedPracticals(this.currentProblem.type);
            }

            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }

            this.contentSteps = this.generateGeometricContent(this.currentProblem, this.currentContent);

            // Generate workbook (handles async internally)
            this.generateGeometricWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                practicals: this.currentContent.relatedPracticals,
                learnerProfile: this.learnerProfile,
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process geometric measurement request: ${error.message}`);
    }
}

getGeometricContent(problem) {
    const handler = this.mathematicsTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for geometric measurement topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // Filter by specific items
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        Object.keys(filtered).forEach(key => {
            if (Array.isArray(filtered[key])) {
                filtered[key] = filtered[key].filter(item => {
                    if (typeof item === 'object' && item.name) {
                        return parameters.specificItems.some(spec =>
                            item.name.toLowerCase().includes(spec.toLowerCase())
                        );
                    }
                    return true;
                });
            }
        });
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    return filtered;
}

handlePracticalMathematicsRequest(config) {
    const { topic, parameters, practicalId } = config;

    if (practicalId && this.mathematicsPracticals[practicalId]) {
        this.currentPractical = this.mathematicsPracticals[practicalId];
    } else {
        this.currentPractical = this.findPracticalByTopic(topic);
    }

    if (!this.currentPractical) {
        throw new Error(`No practical mathematics investigation found for: ${topic}`);
    }

    const practicalContent = this.generatePracticalMathematicsContent(this.currentPractical, parameters);
    this.generatePracticalMathematicsWorkbook(practicalContent);

    return {
        practical: this.currentPractical,
        content: practicalContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findPracticalByTopic(topic) {
    const topicLower = topic.toLowerCase();

    for (const [id, practical] of Object.entries(this.mathematicsPracticals)) {
        if (practical.name.toLowerCase().includes(topicLower)) {
            return practical;
        }
    }

    for (const [id, practical] of Object.entries(this.mathematicsPracticals)) {
        if (practical.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return practical;
        }
    }

    return null;
}

generatePracticalMathematicsContent(practical, parameters = {}) {
    const content = {
        practicalName: practical.name,
        category: practical.category,
        relatedTopics: practical.relatedTopics,
        sections: []
    };

    if (practical.historicalBackground) {
        content.sections.push({
            type: 'historical_background',
            title: 'Historical Background',
            data: this.formatHistoricalBackground(practical.historicalBackground)
        });
    }

    if (practical.practicalMathematics) {
        content.sections.push({
            type: 'practical_mathematics',
            title: 'Practical Mathematics Investigation',
            data: this.formatPracticalMathematics(practical.practicalMathematics)
        });
    }

    return content;
}

formatHistoricalBackground(background) {
    const formatted = [];

    Object.entries(background).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            formatted.push([key, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([key, '']);
            Object.entries(value).forEach(([k, v]) => {
                formatted.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
            });
        } else {
            formatted.push([key, value]);
        }
    });

    return formatted;
}

formatPracticalMathematics(practicalMath) {
    const formatted = [];

    formatted.push(['Investigation Title', practicalMath.title]);
    formatted.push(['Hypothesis', practicalMath.hypothesis]);

    if (practicalMath.purpose) {
        formatted.push(['Purpose', practicalMath.purpose]);
    }

    if (practicalMath.variables) {
        formatted.push(['Variables', '']);
        formatted.push(['  Independent', practicalMath.variables.independent]);
        formatted.push(['  Dependent', practicalMath.variables.dependent]);
        if (practicalMath.variables.controlled) {
            formatted.push(['  Controlled', Array.isArray(practicalMath.variables.controlled) ?
                practicalMath.variables.controlled.join(', ') : practicalMath.variables.controlled]);
        }
    }

    if (practicalMath.materials) {
        formatted.push(['', '']);
        formatted.push(['Materials Required', '']);
        if (Array.isArray(practicalMath.materials)) {
            practicalMath.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof practicalMath.materials === 'object') {
            Object.values(practicalMath.materials).forEach(materialList => {
                if (Array.isArray(materialList)) {
                    materialList.forEach(material => {
                        formatted.push(['  •', material]);
                    });
                } else {
                    formatted.push(['  •', materialList]);
                }
            });
        }
    }

    if (practicalMath.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);

        if (Array.isArray(practicalMath.procedure)) {
            practicalMath.procedure.forEach((step, index) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else {
                    formatted.push([`  ${index + 1}.`, step]);
                }
            });
        } else if (typeof practicalMath.procedure === 'object') {
            Object.entries(practicalMath.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (practicalMath.dataAnalysis) {
        formatted.push(['', '']);
        formatted.push(['Data Analysis', '']);
        Object.entries(practicalMath.dataAnalysis).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
    }

    if (practicalMath.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Recording Table', '']);
        if (Array.isArray(practicalMath.dataTable)) {
            practicalMath.dataTable.forEach(row => {
                if (Array.isArray(row)) {
                    formatted.push(['  ', row.join(' | ')]);
                }
            });
        }
    }

    if (practicalMath.observations) {
        formatted.push(['', '']);
        formatted.push(['Observations', '']);
        if (typeof practicalMath.observations === 'object') {
            Object.entries(practicalMath.observations).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', practicalMath.observations]);
        }
    }

    if (practicalMath.geometricInsight) {
        formatted.push(['', '']);
        formatted.push(['Geometric Insight', '']);
        if (typeof practicalMath.geometricInsight === 'object') {
            Object.entries(practicalMath.geometricInsight).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', practicalMath.geometricInsight]);
        }
    }

    if (practicalMath.keyInsight) {
        formatted.push(['', '']);
        formatted.push(['Key Insight', '']);
        if (typeof practicalMath.keyInsight === 'object') {
            Object.entries(practicalMath.keyInsight).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', practicalMath.keyInsight]);
        }
    }

    if (practicalMath.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(practicalMath.conclusions)) {
            practicalMath.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        }
    }

    if (practicalMath.realWorldConnections) {
        formatted.push(['', '']);
        formatted.push(['Real-World Connections', '']);
        if (Array.isArray(practicalMath.realWorldConnections)) {
            practicalMath.realWorldConnections.forEach(connection => {
                formatted.push(['  •', connection]);
            });
        }
    }

    if (practicalMath.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extension Activities', '']);
        if (Array.isArray(practicalMath.extensions)) {
            practicalMath.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    if (practicalMath.pedagogicalNotes) {
        formatted.push(['', '']);
        formatted.push(['Pedagogical Notes', '']);
        if (typeof practicalMath.pedagogicalNotes === 'object') {
            Object.entries(practicalMath.pedagogicalNotes).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', practicalMath.pedagogicalNotes]);
        }
    }

    return formatted;
}

getRelatedPracticals(topicType) {
    const related = [];

    Object.entries(this.mathematicsPracticals).forEach(([id, practical]) => {
        if (practical.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: practical.name,
                category: practical.category,
                historicalFigure: practical.historicalBackground?.mathematician ||
                                  practical.historicalBackground?.origin ||
                                  practical.historicalBackground?.legend,
                investigationTitle: practical.practicalMathematics?.title
            });
        }
    });

    return related;
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllPracticals() {
    return Object.entries(this.mathematicsPracticals).map(([id, practical]) => ({
        id: id,
        name: practical.name,
        category: practical.category,
        relatedTopics: practical.relatedTopics,
        historicalFigure: practical.historicalBackground?.mathematician ||
                          practical.historicalBackground?.origin ||
                          practical.historicalBackground?.legend,
        year: practical.historicalBackground?.year
    }));
}

// ========================================
// ADAPTIVE LEARNING METHODS
// ========================================

adaptContentDifficulty(content, currentLevel) {
    const adapted = { ...content };

    switch (currentLevel) {
        case 'beginner':
            adapted.vocabulary = 'simplified';
            adapted.examples = this.selectBasicExamples(content.workedExamples);
            adapted.depth = 'overview';
            break;

        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.workedExamples);
            adapted.depth = 'moderate';
            break;

        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.workedExamples);
            adapted.depth = 'comprehensive';
            adapted.derivations = this.addDerivations(content);
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => ex.difficulty === 'basic' || !ex.difficulty).slice(0, 2);
}

selectMixedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.slice(0, 4);
}

selectAdvancedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples;
}

addDerivations(content) {
    return {
        mathematicalDerivations: `Advanced geometric derivations for ${content.topic}`,
        proofSteps: "Step-by-step geometric and algebraic proofs",
        alternativeApproaches: "Alternative solution methods and geometric reasoning"
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p =>
            p.replace('{topic}', this.mathematicsTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p =>
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p =>
            p.replace('{topic}', this.mathematicsTopics[topicType]?.name || topicType)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicType);
    } else if (performance.score < 0.5) {
        if (!this.learnerProfile.strugglingTopics.includes(topicType)) {
            this.learnerProfile.strugglingTopics.push(topicType);
        }
    }

    this.learnerProfile.progressHistory.push({
        topic: topicType,
        timestamp: new Date().toISOString(),
        performance: performance
    });
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generateGeometricContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.definitions) {
        contentSections.push(this.generateDefinitionsSection(content));
    }

    if (content.formulas) {
        contentSections.push(this.generateFormulasSection(content));
    }

    if (content.strategicApproach) {
        contentSections.push(this.generateStrategicApproachSection(content));
    }

    if (content.specialAngles) {
        contentSections.push(this.generateSpecialAnglesSection(content));
    }

    if (content.compassPoints || content.northSouthComponents) {
        contentSections.push(this.generateNavigationSection(content));
    }

    if (content.workedExamples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    if (this.includePracticals && content.relatedPracticals) {
        contentSections.push(this.generateRelatedPracticalsSection(content));
    }

    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    if (content.commonErrors) {
        contentSections.push(this.generateCommonErrorsSection(content));
    }

    if (content.assessmentQuestions) {
        contentSections.push(this.generateAssessmentSection(content));
    }

    return contentSections;
}

// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateGeometricWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Geometric Measurement Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateGeometricDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(),
        this.createFormulasSection(),
        this.createWorkedExamplesSection(),
        this.createComparisonsWorkbookSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedPracticalsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generatePracticalMathematicsWorkbook(practicalContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Geometric Measurement Practical Mathematics Workbook';

    workbook.sections = practicalContent.sections.map(section => ({
        title: section.title,
        type: section.type,
        data: section.data
    }));

    if (practicalContent.relatedTopics) {
        workbook.sections.push({
            title: 'Related Topics',
            type: 'related_topics',
            data: practicalContent.relatedTopics.map(topic => [
                this.mathematicsTopics[topic]?.name || topic,
                this.mathematicsTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateGeometricDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantGeometricDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Geometric measurement diagrams"
    };

    // Render diagrams
    if (diagramKeys.length > 0) {
        await this.renderDiagramsForTopic(diagramKeys);
        this.diagramData.status = 'complete';

        // Update the diagrams section in workbook
        this.updateDiagramsSection();
    } else {
        this.diagramData.status = 'no_diagrams';
    }

    return this.diagramData;
}

async renderDiagramsForTopic(diagramKeys) {
    this.diagramData.renderedImages = [];

    for (const diagramKey of diagramKeys) {
        try {
            // Check if already rendered (cache)
            if (this.renderedDiagrams.has(diagramKey)) {
                this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                continue;
            }

            // Render the diagram
            const canvas = await this.diagramRenderer.renderDiagram(
                diagramKey,
                0,
                0,
                this.diagramWidth,
                this.diagramHeight,
                {
                    showLabels: true,
                    backgroundColor: '#FFFFFF',
                    showGrid: true,
                    showAxes: true
                }
            );

            // Convert to PNG buffer
            const pngBuffer = await canvas.encode('png');

            // Store rendered diagram data
            const diagramData = {
                key: diagramKey,
                buffer: pngBuffer,
                width: this.diagramWidth,
                height: this.diagramHeight,
                type: 'png'
            };

            // Cache the rendered diagram
            this.renderedDiagrams.set(diagramKey, diagramData);
            this.diagramData.renderedImages.push(diagramData);

        } catch (error) {
            console.error(`Failed to render diagram ${diagramKey}:`, error);
            this.diagramData.renderedImages.push({
                key: diagramKey,
                error: error.message,
                type: 'error'
            });
        }
    }
}

// Create placeholder section that will be updated when diagrams are ready
createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Geometry Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

// Update the diagrams section once rendering is complete
updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    // Find the diagrams section
    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    // Update the section with rendered diagrams
    const diagramSection = {
        title: 'Geometry Diagrams',
        type: 'diagrams',
        status: 'complete',
        diagrams: []
    };

    for (const diagram of this.diagramData.renderedImages) {
        if (diagram.type === 'error') {
            diagramSection.diagrams.push({
                key: diagram.key,
                error: diagram.error,
                type: 'error'
            });
        } else {
            diagramSection.diagrams.push({
                key: diagram.key,
                buffer: diagram.buffer,
                width: diagram.width,
                height: diagram.height,
                type: 'image'
            });
        }
    }

    this.currentWorkbook.sections[diagramSectionIndex] = diagramSection;
}

// Method to wait for diagrams to finish rendering
async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

// Method to check if diagrams are ready
areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

getRelevantGeometricDiagrams(topicType) {
    const diagramMap = {
        perimeter: [
            "rectangle_perimeter",
            "circle_circumference",
            "triangle_perimeter",
            "composite_shape_perimeter",
            "semicircle_perimeter",
            "regular_polygon_perimeter"
        ],
        area: [
            "rectangle_area",
            "triangle_area_perpendicular_height",
            "parallelogram_area",
            "trapezium_area",
            "circle_area",
            "composite_area_diagram",
            "area_dissection_rectangle"
        ],
        surface_area: [
            "cube_net",
            "cuboid_net",
            "cylinder_net",
            "cone_net",
            "sphere_surface_area",
            "triangular_prism_net",
            "square_pyramid_net"
        ],
        volume: [
            "cuboid_volume",
            "cylinder_volume",
            "cone_volume",
            "sphere_volume",
            "prism_cross_section",
            "pyramid_volume",
            "composite_solid_volume"
        ],
        arc_length: [
            "arc_length_diagram",
            "sector_arc_labelled",
            "minor_major_arc",
            "radian_definition_diagram",
            "arc_length_formula_visual",
            "degrees_radians_comparison"
        ],
        sector_area: [
            "sector_area_diagram",
            "sector_vs_segment",
            "segment_area_diagram",
            "sector_fraction_of_circle",
            "sector_area_formula_visual",
            "composite_sector_diagram"
        ],
        trigonometry_ratios: [
            "right_triangle_labelled",
            "soh_cah_toa_diagram",
            "angle_of_elevation",
            "angle_of_depression",
            "special_angles_triangle_30_60",
            "special_angles_triangle_45_45",
            "unit_circle_basic",
            "trig_ratio_similarity_proof"
        ],
        pythagorean_theorem: [
            "pythagoras_square_proof",
            "pythagorean_triple_3_4_5",
            "garfield_trapezoid_proof",
            "pythagorean_rearrangement_proof",
            "pythagoras_3d_cuboid_diagonal",
            "converse_pythagoras_diagram",
            "pythagorean_triples_table"
        ],
        bearings: [
            "compass_rose_bearings",
            "north_arrow_diagram",
            "two_leg_journey_bearing",
            "back_bearing_diagram",
            "bearing_triangle_trig",
            "northing_easting_components",
            "three_figure_bearing_examples"
        ]
    };

    return diagramMap[topicType] || [];
}

// Helper method to export a single diagram (async but optional)
async exportDiagram(diagramKey, filename, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        await this.diagramRenderer.exportToFile(
            diagramKey,
            filename,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                showGrid: options.showGrid !== false,
                showAxes: options.showAxes !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
        return { success: true, filename };
    } catch (error) {
        console.error(`Failed to export diagram ${diagramKey}:`, error);
        return { success: false, error: error.message };
    }
}

// Helper method to export all diagrams for current topic (async but optional)
async exportAllDiagramsForTopic(outputDir = './diagrams') {
    // Wait for diagrams to be ready first
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current topic');
    }

    const fs = await import('fs');
    const path = await import('path');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const results = [];

    for (const diagramKey of this.diagramData.diagrams) {
        const filename = path.join(outputDir, `${diagramKey}.png`);
        const result = await this.exportDiagram(diagramKey, filename);
        results.push({ diagramKey, ...result });
    }

    return results;
}

// Method to get diagram as buffer for embedding (async but optional)
async getDiagramBuffer(diagramKey, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        return await this.diagramRenderer.exportToPng(
            diagramKey,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                showGrid: options.showGrid !== false,
                showAxes: options.showAxes !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
    } catch (error) {
        console.error(`Failed to get diagram buffer for ${diagramKey}:`, error);
        return null;
    }
}

// Clear diagram cache
clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Diagram cache cleared');
}

// Get cache statistics
getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started'
    };
}

// Get workbook status including diagram info
getWorkbookStatus() {
    return {
        hasProblem: !!this.currentProblem,
        hasContent: !!this.currentContent,
        hasWorkbook: !!this.currentWorkbook,
        hasPractical: !!this.currentPractical,
        hasDiagrams: !!this.diagramData && this.diagramData.renderedImages?.length > 0,
        diagramsReady: this.areDiagramsReady(),
        diagramStatus: this.diagramData?.status || 'not_started',
        diagramCount: this.diagramData?.renderedImages?.length || 0,
        cachedDiagrams: this.renderedDiagrams.size,
        learnerLevel: this.learnerProfile.currentLevel,
        masteredTopics: this.learnerProfile.masteredTopics.length,
        strugglingTopics: this.learnerProfile.strugglingTopics.length
    };
}

createWorkbookStructure() {
    return {
        title: 'Geometric Measurement Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

