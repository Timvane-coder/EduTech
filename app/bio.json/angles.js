Here is the complete Angles Mathematical Workbook code, structured the same way as the Enhanced Factorization Workbook:
// Enhanced Angles Workbook - Comprehensive Angles System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedAnglesWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "angles";
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
        this.initializeAnglesTopics();
        this.initializeAnglesLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            angles: {
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
                structureBg: '#e0f7fa',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                parallelLinesBg: '#e3f2fd',
                polygonsBg: '#e8f5e9',
                trianglesBg: '#fff8e1',
                circlesBg: '#fce4ec',
                coordinateBg: '#f3e5f5',
                trigonometryBg: '#e0f2f1',
                transformationsBg: '#fbe9e7',
                vectorsBg: '#ede7f6'
            },
            geometry: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#1a237e',
                headerText: '#ffffff',
                sectionBg: '#c5cae9',
                sectionText: '#1a237e',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e8eaf6',
                resultText: '#283593',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#5c6bc0',
                contentBg: '#fce4ec',
                contentText: '#880e4f',
                diagramBg: '#e0f7fa',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                parallelLinesBg: '#e8eaf6',
                polygonsBg: '#e0f2f1',
                trianglesBg: '#fff8e1',
                circlesBg: '#fce4ec',
                coordinateBg: '#f3e5f5',
                trigonometryBg: '#e8f5e9',
                transformationsBg: '#fbe9e7',
                vectorsBg: '#ede7f6'
            }
        };

        this.colors = themes[this.theme] || themes.angles;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'theta': 'θ',
            'phi': 'φ',
            'psi': 'ψ',
            'omega': 'ω',
            'sigma': 'Σ',
            'pi': 'π',
            'arrow': '→',
            'doubleArrow': '↔',
            'implies': '⟹',
            'iff': '⟺',
            'angle': '∠',
            'measuredAngle': '∡',
            'rightAngle': '⊾',
            'parallel': '∥',
            'perpendicular': '⊥',
            'congruent': '≅',
            'similar': '∼',
            'therefore': '∴',
            'because': '∵',
            'degree': '°',
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'approximately': '≈',
            'notEqual': '≠',
            'leq': '≤',
            'geq': '≥',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            'infinity': '∞',
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'triangle': '△',
            'arcAngle': '⌒',
            'vectorArrow': '⃗',
            'dotProduct': '·',
            'crossProduct': '×',
            'norm': '‖',
            'sine': 'sin',
            'cosine': 'cos',
            'tangent': 'tan',
            'inverseSine': 'sin⁻¹',
            'inverseCosine': 'cos⁻¹',
            'inverseTangent': 'tan⁻¹'
        };
    }

    initializeAnglesTopics() {
        this.mathematicsTopics = {
            parallel_lines_transversals: {
                patterns: [
                    /parallel.*line|transversal/i,
                    /corresponding.*angle|alternate.*angle/i,
                    /co.?interior|same.?side.*interior/i,
                    /allied.*angle|consecutive.*angle/i
                ],
                handler: this.handleParallelLinesTransversals.bind(this),
                name: 'Parallel Lines & Transversals',
                category: 'angles',
                description: 'Angle relationships formed when a transversal crosses parallel lines',
                difficulty: 'beginner',
                prerequisites: ['basic_angles', 'straight_lines', 'vertically_opposite']
            },

            angles_in_polygons: {
                patterns: [
                    /polygon.*angle|interior.*angle.*polygon/i,
                    /exterior.*angle|sum.*angle.*polygon/i,
                    /regular.*polygon|pentagon|hexagon|octagon/i,
                    /interior.*sum|exterior.*sum/i
                ],
                handler: this.handleAnglesInPolygons.bind(this),
                name: 'Angles in Polygons',
                category: 'angles',
                description: 'Interior and exterior angle sums for regular and irregular polygons',
                difficulty: 'intermediate',
                prerequisites: ['parallel_lines_transversals', 'angles_in_triangles']
            },

            angles_in_triangles: {
                patterns: [
                    /triangle.*angle|angle.*triangle/i,
                    /angle.*sum.*triangle|180.*triangle/i,
                    /exterior.*angle.*triangle|isosceles|equilateral/i,
                    /base.*angle|apex.*angle/i
                ],
                handler: this.handleAnglesInTriangles.bind(this),
                name: 'Angles in Triangles',
                category: 'angles',
                description: 'Angle sum, exterior angles, and special triangle angle properties',
                difficulty: 'beginner',
                prerequisites: ['basic_angles', 'parallel_lines_transversals']
            },

            angles_in_circles: {
                patterns: [
                    /circle.*angle|angle.*circle/i,
                    /inscribed.*angle|central.*angle/i,
                    /tangent.*angle|chord.*angle/i,
                    /cyclic.*quadrilateral|arc.*angle/i,
                    /semicircle|angle.*circumference/i
                ],
                handler: this.handleAnglesInCircles.bind(this),
                name: 'Angles in Circles',
                category: 'angles',
                description: 'Central angles, inscribed angles, tangent-chord angles, and cyclic polygons',
                difficulty: 'advanced',
                prerequisites: ['angles_in_triangles', 'angles_in_polygons', 'circle_terminology']
            },

            angles_in_coordinate_geometry: {
                patterns: [
                    /coordinate.*angle|angle.*coordinate/i,
                    /gradient.*angle|slope.*angle/i,
                    /angle.*between.*line|inclination/i,
                    /bearing|direction.*angle/i
                ],
                handler: this.handleAnglesInCoordinateGeometry.bind(this),
                name: 'Angles in Coordinate Geometry',
                category: 'angles',
                description: 'Angles of inclination, angles between lines, and bearings on the coordinate plane',
                difficulty: 'intermediate',
                prerequisites: ['parallel_lines_transversals', 'basic_trigonometry', 'coordinate_plane']
            },

            angles_in_trigonometry: {
                patterns: [
                    /trigonometry|trig.*angle|angle.*trig/i,
                    /sine.*rule|cosine.*rule/i,
                    /unit.*circle|radian/i,
                    /trigonometric.*ratio|SOHCAHTOA/i,
                    /special.*angle|30.*60.*90|45.*45.*90/i
                ],
                handler: this.handleAnglesInTrigonometry.bind(this),
                name: 'Angles in Trigonometry',
                category: 'angles',
                description: 'Trigonometric ratios, unit circle, radians, sine/cosine rules, and special angles',
                difficulty: 'advanced',
                prerequisites: ['angles_in_triangles', 'angles_in_coordinate_geometry', 'pythagoras']
            },

            angles_in_transformations: {
                patterns: [
                    /transformation.*angle|rotation.*angle/i,
                    /reflection.*angle|angle.*rotation/i,
                    /angle.*turn|full.*turn|half.*turn/i,
                    /rotational.*symmetry|angle.*symmetry/i
                ],
                handler: this.handleAnglesInTransformations.bind(this),
                name: 'Angles in Transformations & Movement',
                category: 'angles',
                description: 'Rotation angles, reflection angles, angles in transformational geometry',
                difficulty: 'intermediate',
                prerequisites: ['angles_in_triangles', 'coordinate_plane', 'basic_transformations']
            },

            angles_in_vectors: {
                patterns: [
                    /vector.*angle|angle.*vector/i,
                    /dot.*product.*angle|angle.*dot.*product/i,
                    /direction.*angle|angle.*direction/i,
                    /angle.*between.*vector/i
                ],
                handler: this.handleAnglesInVectors.bind(this),
                name: 'Angles in Vectors',
                category: 'angles',
                description: 'Angles between vectors using dot product, direction angles, and vector geometry',
                difficulty: 'advanced',
                prerequisites: ['angles_in_trigonometry', 'angles_in_coordinate_geometry', 'vector_basics']
            }
        };
    }

    initializeAnglesLessons() {
        this.lessons = {
            parallel_lines_transversals: {
                title: "Parallel Lines & Transversals: The Architecture of Angle Relationships",
                concepts: [
                    "When a transversal crosses two parallel lines, eight angles are formed — related in four distinct ways",
                    "Corresponding angles are equal (F-shape pattern)",
                    "Alternate interior angles are equal (Z-shape pattern)",
                    "Alternate exterior angles are equal (Z-shape exterior pattern)",
                    "Co-interior (same-side interior / allied) angles are supplementary: they sum to 180°",
                    "Vertically opposite angles are always equal, independent of parallel lines"
                ],
                theory: "Parallel lines are lines in the same plane that never meet. When a transversal (a line that crosses both) intersects them, the angles formed are governed by powerful relationships used in architecture, engineering, and navigation. These relationships also form the logical foundation for proving the triangle angle sum theorem.",
                keyDefinitions: {
                    "Transversal": "A line that intersects two or more other lines at distinct points",
                    "Corresponding Angles": "Angles that occupy the same position at each intersection; equal when lines are parallel (F-pattern)",
                    "Alternate Interior Angles": "Angles between the parallel lines on opposite sides of the transversal; equal when lines are parallel (Z-pattern)",
                    "Alternate Exterior Angles": "Angles outside the parallel lines on opposite sides of the transversal; equal when lines are parallel",
                    "Co-interior Angles": "Also called consecutive interior or allied angles; between the parallel lines on the same side of the transversal; sum to 180° (C-pattern)",
                    "Vertically Opposite Angles": "Angles formed opposite each other at an intersection; always equal regardless of parallel lines",
                    "Supplementary Angles": "Two angles that sum to 180°",
                    "Complementary Angles": "Two angles that sum to 90°"
                },
                angleRelationships: {
                    corresponding: {
                        definition: "Same position at each intersection",
                        pattern: "F-shape when you trace the transversal and one parallel line",
                        relationship: "Equal (∠1 = ∠5, ∠2 = ∠6, ∠3 = ∠7, ∠4 = ∠8)",
                        condition: "Only equal when lines are parallel"
                    },
                    alternateInterior: {
                        definition: "Between the parallel lines, opposite sides of transversal",
                        pattern: "Z-shape (or N-shape)",
                        relationship: "Equal (∠3 = ∠6, ∠4 = ∠5)",
                        condition: "Only equal when lines are parallel"
                    },
                    alternateExterior: {
                        definition: "Outside the parallel lines, opposite sides of transversal",
                        pattern: "Extended Z-shape",
                        relationship: "Equal (∠1 = ∠8, ∠2 = ∠7)",
                        condition: "Only equal when lines are parallel"
                    },
                    coInterior: {
                        definition: "Between the parallel lines, same side of transversal",
                        pattern: "C-shape (or U-shape)",
                        relationship: "Supplementary: ∠3 + ∠5 = 180°, ∠4 + ∠6 = 180°",
                        condition: "Only supplementary when lines are parallel"
                    },
                    verticallyOpposite: {
                        definition: "Directly across the intersection point",
                        pattern: "X-shape",
                        relationship: "Always equal: ∠1 = ∠3, ∠2 = ∠4",
                        condition: "Always true — no parallel condition needed"
                    }
                },
                workedExamples: [
                    {
                        problem: "Two parallel lines are cut by a transversal. One angle is 65°. Find all other angles.",
                        solution: {
                            given: "∠1 = 65°",
                            verticallyOpposite: "∠3 = 65° (vertically opposite to ∠1)",
                            supplementary: "∠2 = 180° − 65° = 115° (linear pair with ∠1)",
                            corresponding: "∠5 = 65° (corresponding to ∠1)",
                            coInterior: "∠6 = 180° − 65° = 115° (co-interior with ∠1 — same side, sums to 180°)",
                            all: "Angles: 65°, 115°, 65°, 115°, 65°, 115°, 65°, 115°"
                        }
                    },
                    {
                        problem: "Two lines are cut by a transversal. Alternate angles measure (3x + 10)° and (5x − 20)°. Are the lines parallel? Find x.",
                        solution: {
                            setup: "If parallel, alternate angles are equal: 3x + 10 = 5x − 20",
                            solve: "30 = 2x → x = 15",
                            check: "3(15) + 10 = 55°; 5(15) − 20 = 55° ✓",
                            conclusion: "Yes, the lines are parallel; each alternate angle = 55°"
                        }
                    }
                ],
                proofOfTriangleAngleSum: {
                    statement: "The sum of angles in any triangle is 180°",
                    proof: "Draw a line through vertex C parallel to AB. Label angles α (at A), β (at B), γ (at C). The alternate interior angles with the parallel line show α and β appear at C alongside γ. Therefore α + β + γ = 180° (straight line at C). □",
                    significance: "This proof uses the parallel lines theorem to derive one of geometry's most fundamental results"
                },
                applications: [
                    "Architectural roof truss design",
                    "Rail track laying and alignment",
                    "Navigation: bearing calculations",
                    "Proving congruence of triangles",
                    "Coordinate geometry: parallel and perpendicular gradients"
                ]
            },

            angles_in_polygons: {
                title: "Angles in Polygons: Interior, Exterior, and the Power of n",
                concepts: [
                    "The interior angle sum of any n-sided polygon is (n − 2) × 180°",
                    "Each interior angle of a regular n-sided polygon is (n − 2) × 180° ÷ n",
                    "The exterior angle sum of any convex polygon is always 360°",
                    "Each exterior angle of a regular n-sided polygon is 360° ÷ n",
                    "Interior angle + exterior angle = 180° (they form a linear pair)"
                ],
                theory: "The interior angle sum formula (n − 2) × 180° comes from dividing any polygon into (n − 2) triangles from a single vertex. Each triangle contributes 180°, giving the total. The exterior angle sum of 360° reflects the total turning required to walk around any convex polygon and return to the start — always one full revolution.",
                keyDefinitions: {
                    "Interior Angle": "The angle inside the polygon at each vertex, between two adjacent sides",
                    "Exterior Angle": "The angle formed between one side of the polygon and the extension of the adjacent side",
                    "Regular Polygon": "A polygon with all sides equal and all interior angles equal",
                    "Convex Polygon": "A polygon where all interior angles are less than 180° (no 'dents')",
                    "Concave Polygon": "A polygon with at least one interior angle greater than 180° (reflex angle)",
                    "Diagonal": "A line segment connecting two non-adjacent vertices",
                    "Tessellation": "A tiling of a plane using one or more polygon shapes with no gaps or overlaps"
                },
                formulaDerivation: {
                    interiorSum: {
                        method: "Triangulation from a single vertex",
                        explanation: "Any n-sided polygon can be divided into (n − 2) triangles by drawing diagonals from one vertex",
                        formula: "Interior angle sum = (n − 2) × 180°",
                        examples: {
                            triangle: "n=3: (3−2)×180° = 180°",
                            quadrilateral: "n=4: (4−2)×180° = 360°",
                            pentagon: "n=5: (5−2)×180° = 540°",
                            hexagon: "n=6: (6−2)×180° = 720°",
                            octagon: "n=8: (8−2)×180° = 1080°"
                        }
                    },
                    regularInterior: {
                        formula: "Each interior angle = (n − 2) × 180° ÷ n",
                        examples: {
                            equilateral: "n=3: 60°",
                            square: "n=4: 90°",
                            regularPentagon: "n=5: 108°",
                            regularHexagon: "n=6: 120°",
                            regularOctagon: "n=8: 135°"
                        }
                    },
                    exteriorSum: {
                        formula: "Exterior angle sum = 360° for any convex polygon",
                        explanation: "Walking around the polygon, at each vertex you turn through the exterior angle. After n turns you face the original direction — a full revolution of 360°.",
                        regularExterior: "Each exterior angle of regular n-gon = 360° ÷ n"
                    }
                },
                tessellationCondition: {
                    rule: "A regular polygon tessellates if and only if its interior angle is a factor of 360°",
                    regularTessellators: ["Equilateral triangle (60°: 6 meet)", "Square (90°: 4 meet)", "Regular hexagon (120°: 3 meet)"],
                    nonTessellators: "Regular pentagon (108°) does not divide 360° evenly — cannot tessellate alone"
                },
                workedExamples: [
                    {
                        problem: "Find the interior angle of a regular 12-sided polygon.",
                        solution: "Interior angle = (12−2)×180°÷12 = 10×180°÷12 = 1800°÷12 = 150°"
                    },
                    {
                        problem: "The interior angle of a regular polygon is 140°. How many sides does it have?",
                        solution: "Exterior angle = 180°−140° = 40°. Number of sides = 360°÷40° = 9 sides."
                    },
                    {
                        problem: "A hexagon has angles 110°, 120°, 130°, 95°, 105°, and x°. Find x.",
                        solution: "Sum = (6−2)×180° = 720°. x = 720°−(110+120+130+95+105) = 720°−560° = 160°"
                    }
                ],
                applications: [
                    "Architecture: tiling and floor design",
                    "Engineering: bolt head designs (hexagonal nuts)",
                    "Nature: honeycomb cell structure",
                    "Computer graphics: polygon meshes",
                    "Urban planning: street grid angles"
                ]
            },

            angles_in_triangles: {
                title: "Angles in Triangles: The 180° Foundation of Geometry",
                concepts: [
                    "The angles in any triangle sum to 180°",
                    "An exterior angle of a triangle equals the sum of the two non-adjacent interior angles",
                    "An isosceles triangle has two equal base angles",
                    "An equilateral triangle has three equal angles of 60°",
                    "The largest angle is opposite the longest side"
                ],
                theory: "The triangle angle sum of 180° is one of geometry's most fundamental theorems — provable via parallel lines — and underpins all polygon angle calculations. Special triangles (isosceles, equilateral, right-angled) have additional angle properties that create powerful problem-solving tools.",
                keyDefinitions: {
                    "Acute Triangle": "All three angles less than 90°",
                    "Right Triangle": "One angle exactly 90°",
                    "Obtuse Triangle": "One angle greater than 90°",
                    "Equilateral Triangle": "All three sides equal; all angles 60°",
                    "Isosceles Triangle": "Two sides equal; two base angles equal",
                    "Scalene Triangle": "All sides different lengths; all angles different",
                    "Exterior Angle": "Angle formed outside the triangle by extending one side",
                    "Hypotenuse": "The side opposite the right angle in a right triangle — the longest side"
                },
                angleProperties: {
                    angleSum: {
                        theorem: "∠A + ∠B + ∠C = 180° for any triangle",
                        proof: "Draw line through C parallel to AB. Use alternate angles and straight line at C.",
                        application: "If two angles are known, the third = 180° − (sum of known angles)"
                    },
                    exteriorAngle: {
                        theorem: "Exterior angle = sum of two non-adjacent interior angles",
                        formula: "∠ACD = ∠A + ∠B (where ∠ACD is exterior at C)",
                        proof: "∠ACD + ∠ACB = 180° (straight line); ∠A + ∠B + ∠ACB = 180° (angle sum). Therefore ∠ACD = ∠A + ∠B."
                    },
                    isosceles: {
                        property: "Base angles equal: if AB = AC, then ∠ABC = ∠ACB",
                        apex: "Apex angle = 180° − 2 × (base angle)"
                    },
                    equilateral: {
                        property: "All angles = 60°",
                        derived: "3 × 60° = 180° ✓"
                    },
                    rightTriangle: {
                        property: "Remaining two angles are complementary (sum to 90°)",
                        relationship: "∠A + ∠B = 90° where ∠C = 90°"
                    }
                },
                workedExamples: [
                    {
                        problem: "A triangle has angles (2x + 10)°, (3x − 5)°, and (x + 15)°. Find all angles.",
                        solution: "(2x+10)+(3x−5)+(x+15) = 180 → 6x+20 = 180 → x = 160/6 ≈ 26.67. Angles: 63.3°, 75°, 41.7°"
                    },
                    {
                        problem: "An exterior angle of a triangle is 115°. One non-adjacent interior angle is 62°. Find the other non-adjacent interior angle.",
                        solution: "Exterior angle = sum of non-adjacent interior angles. 115° = 62° + x → x = 53°"
                    },
                    {
                        problem: "An isosceles triangle has an apex angle of 40°. Find the base angles.",
                        solution: "Base angles = (180° − 40°) ÷ 2 = 140° ÷ 2 = 70° each"
                    }
                ],
                applications: [
                    "Structural engineering: triangular trusses for strength",
                    "Surveying: triangulation for distance measurement",
                    "Navigation: GPS triangulation",
                    "Architecture: roof pitch calculations",
                    "Art and design: perspective drawing"
                ]
            },

            angles_in_circles: {
                title: "Angles in Circles: Arcs, Chords, Tangents, and the Factor-of-Two Rule",
                concepts: [
                    "The central angle is twice the inscribed angle subtending the same arc",
                    "All inscribed angles subtending the same arc are equal",
                    "The angle in a semicircle is 90° (Thales' theorem)",
                    "Opposite angles in a cyclic quadrilateral sum to 180°",
                    "The angle between a tangent and a chord equals the inscribed angle in the alternate segment (tangent-chord angle)",
                    "The angle between two tangents from an external point relates to the arc they intercept"
                ],
                theory: "Circle angle theorems are among the most elegant results in geometry. They all stem from one central insight: the central angle is twice any inscribed angle over the same arc. All other theorems — Thales', cyclic quadrilateral, tangent-chord — are consequences of this single relationship. Understanding the proof of the central/inscribed angle relationship unlocks all others.",
                keyDefinitions: {
                    "Central Angle": "An angle whose vertex is at the centre of the circle",
                    "Inscribed Angle": "An angle whose vertex is on the circumference and whose sides are chords",
                    "Arc": "A portion of the circumference between two points",
                    "Chord": "A line segment with both endpoints on the circle",
                    "Tangent": "A line that touches the circle at exactly one point (the point of tangency)",
                    "Secant": "A line that intersects the circle at two points",
                    "Cyclic Polygon": "A polygon with all vertices on a circle (inscribed polygon)",
                    "Major Arc": "The longer arc between two points; major arc > 180°",
                    "Minor Arc": "The shorter arc between two points; minor arc < 180°",
                    "Alternate Segment": "The region of the circle on the opposite side of a chord from a given angle"
                },
                circleTheorems: {
                    centralInscribed: {
                        theorem: "Central angle = 2 × inscribed angle subtending the same arc",
                        formula: "∠AOB = 2 × ∠ACB (O is centre, A, B, C on circumference)",
                        proof: "Join CO and extend to D. △OAC is isosceles (OA=OC=radius). ∠OAC = ∠OCA. Exterior angle ∠AOD = 2∠OCA. Similarly ∠BOD = 2∠OCB. Add or subtract to get ∠AOB = 2∠ACB.",
                        note: "Three cases: C on major arc (standard), C on minor arc (reflex central angle), C when one chord passes through centre"
                    },
                    anglesInSameSegment: {
                        theorem: "All inscribed angles subtending the same arc are equal",
                        proof: "Each equals half the central angle over the same arc"
                    },
                    angleInSemicircle: {
                        theorem: "The angle in a semicircle is 90° (Thales' Theorem)",
                        proof: "Central angle = 180° (straight line). Inscribed angle = 180° ÷ 2 = 90°."
                    },
                    cyclicQuadrilateral: {
                        theorem: "Opposite angles of a cyclic quadrilateral sum to 180°",
                        formula: "∠A + ∠C = 180°; ∠B + ∠D = 180°",
                        proof: "Both opposite angles are inscribed angles subtending arcs that together make the full circle (360°). Each pair of inscribed angles = half their combined arc = 180°."
                    },
                    tangentChord: {
                        theorem: "Angle between tangent and chord = inscribed angle in alternate segment",
                        alternateSegmentTheorem: "∠(tangent, chord) = ∠(inscribed angle in alternate segment)",
                        application: "The angle between a tangent at A and chord AB equals any inscribed angle in the arc on the other side of AB"
                    },
                    tangentRadius: {
                        theorem: "The radius to a point of tangency is perpendicular to the tangent",
                        formula: "OT ⊥ tangent at T (O = centre, T = point of tangency)"
                    },
                    externalTangents: {
                        theorem: "Two tangents from an external point are equal in length",
                        angleRelationship: "Angle at external point + (intercepted arc)/2 = 180°"
                    }
                },
                workedExamples: [
                    {
                        problem: "O is the centre of a circle. ∠AOB = 130°. Find the inscribed angle ∠ACB (C on major arc).",
                        solution: "Inscribed angle = central angle ÷ 2 = 130° ÷ 2 = 65°"
                    },
                    {
                        problem: "ABCD is a cyclic quadrilateral. ∠A = 78°, ∠B = 95°. Find ∠C and ∠D.",
                        solution: "∠C = 180° − 78° = 102° (opposite angles supplementary). ∠D = 180° − 95° = 85°"
                    },
                    {
                        problem: "PT is a tangent to a circle at T. Chord TQ makes angle 50° with the tangent. Find the inscribed angle in the alternate segment.",
                        solution: "By the alternate segment theorem, the inscribed angle in the alternate segment = 50°"
                    }
                ],
                applications: [
                    "Optics: circular lens angle calculations",
                    "Engineering: gear and cam design",
                    "Architecture: arches and circular structures",
                    "Astronomy: angular size of celestial objects",
                    "Surveying: circular curve layout on roads"
                ]
            },

            angles_in_coordinate_geometry: {
                title: "Angles in Coordinate Geometry: Gradients, Inclination, and Bearings",
                concepts: [
                    "The angle of inclination of a line is the angle it makes with the positive x-axis",
                    "tan(θ) = gradient = m for a line with inclination θ",
                    "The angle between two lines can be found using tan(θ) = |(m₁ − m₂)/(1 + m₁m₂)|",
                    "Parallel lines have equal gradients (m₁ = m₂)",
                    "Perpendicular lines have gradients satisfying m₁ × m₂ = −1",
                    "Bearings are measured clockwise from North, always given as three digits"
                ],
                theory: "Coordinate geometry links algebraic equations of lines with their geometric angle properties. The gradient of a line is the tangent of its angle of inclination, making trigonometry and coordinate geometry inseparable. This connection enables precise angle calculations between any two lines given only their equations.",
                keyDefinitions: {
                    "Angle of Inclination": "The angle a line makes with the positive x-axis, measured anticlockwise; θ ∈ [0°, 180°)",
                    "Gradient": "The ratio rise/run; equals tan(angle of inclination)",
                    "Bearing": "Direction measured as a clockwise angle from North; given as a 3-digit number (e.g., 045°, 270°)",
                    "Back Bearing": "The bearing in the opposite direction: back bearing = bearing ± 180°",
                    "Angle Between Two Lines": "The acute or right angle formed at the intersection of two lines"
                },
                gradientAngleRelationship: {
                    formula: "m = tan(θ) where θ is the angle of inclination",
                    findingAngleFromGradient: "θ = tan⁻¹(m); adjust to [0°, 180°) based on sign of m",
                    positiveGradient: "θ ∈ (0°, 90°) — line rises left to right",
                    negativeGradient: "θ ∈ (90°, 180°) — line falls left to right",
                    zeroGradient: "θ = 0° — horizontal line",
                    undefinedGradient: "θ = 90° — vertical line"
                },
                angleBetweenLines: {
                    formula: "tan(θ) = |(m₁ − m₂)/(1 + m₁m₂)|",
                    derivation: "Using the compound angle formula for tan(A − B) with A and B as inclination angles",
                    parallelCase: "m₁ = m₂ → angle = 0° (no intersection or same line)",
                    perpendicularCase: "m₁m₂ = −1 → angle = 90°",
                    example: "m₁ = 2, m₂ = −1: tan(θ) = |(2−(−1))/(1+2×(−1))| = |3/(−1)| = 3 → θ = tan⁻¹(3) ≈ 71.6°"
                },
                bearings: {
                    definition: "Bearings measure direction clockwise from North (0°/360°)",
                    keyBearings: {
                        North: "000° or 360°",
                        East: "090°",
                        South: "180°",
                        West: "270°"
                    },
                    problemTypes: [
                        "Finding bearing from coordinates",
                        "Finding position given bearing and distance",
                        "Back bearing calculations",
                        "Navigation with multiple bearings (triangulation)"
                    ]
                },
                workedExamples: [
                    {
                        problem: "Find the angle of inclination of a line with gradient m = −√3.",
                        solution: "θ = tan⁻¹(−√3). Reference angle = 60°. Since m < 0, θ = 180° − 60° = 120°."
                    },
                    {
                        problem: "Two lines have gradients 3 and −1/2. Find the acute angle between them.",
                        solution: "tan(θ) = |(3 − (−1/2))/(1 + 3 × (−1/2))| = |(3.5)/(−0.5)| = 7. θ = tan⁻¹(7) ≈ 81.9°"
                    },
                    {
                        problem: "A ship travels on bearing 065° for 20 km, then on bearing 155° for 15 km. Find the bearing and distance back to start.",
                        solution: "Resolve into components; use Pythagoras and trigonometry to find resultant displacement; find bearing of return journey."
                    }
                ],
                applications: [
                    "Navigation and GPS systems",
                    "Surveying and land mapping",
                    "Road and rail gradient calculations",
                    "Astronomy: angular coordinates (right ascension, declination)",
                    "Computer graphics: line intersection algorithms"
                ]
            },

            angles_in_trigonometry: {
                title: "Angles in Trigonometry: Ratios, the Unit Circle, Radians, and the Sine/Cosine Rules",
                concepts: [
                    "SOHCAHTOA defines sin, cos, and tan in right-angled triangles",
                    "The unit circle extends trigonometric ratios to all angles",
                    "Radians: 2π radians = 360°; 1 radian = 180°/π ≈ 57.3°",
                    "Special angles: 30°, 45°, 60° have exact trigonometric values",
                    "The sine rule: a/sin(A) = b/sin(B) = c/sin(C)",
                    "The cosine rule: a² = b² + c² − 2bc·cos(A)",
                    "The CAST diagram shows which ratios are positive in each quadrant"
                ],
                theory: "Trigonometry is the study of relationships between angles and side lengths. Starting from right-angled triangles, the ratios extend via the unit circle to any angle — even obtuse and reflex. The sine and cosine rules generalize right-triangle trigonometry to any triangle, making them essential for navigation, physics, and engineering.",
                keyDefinitions: {
                    "Sine (sin)": "Opposite ÷ Hypotenuse in a right triangle; y-coordinate on unit circle",
                    "Cosine (cos)": "Adjacent ÷ Hypotenuse in a right triangle; x-coordinate on unit circle",
                    "Tangent (tan)": "Opposite ÷ Adjacent = sin ÷ cos",
                    "Radian": "The angle subtended at the centre of a circle by an arc equal in length to the radius; 2π rad = 360°",
                    "Unit Circle": "A circle of radius 1 centred at the origin; all trig ratios defined as coordinates or ratios on this circle",
                    "Inverse Trigonometric Functions": "sin⁻¹, cos⁻¹, tan⁻¹ give the angle from a ratio",
                    "CAST Diagram": "Shows which trig ratios are positive in each quadrant: C (cos positive, 4th), A (all positive, 1st), S (sin positive, 2nd), T (tan positive, 3rd)",
                    "Amplitude": "The maximum value of a trigonometric function; for sin and cos = 1",
                    "Period": "The interval after which the function repeats; sin/cos: 2π; tan: π"
                },
                specialAngles: {
                    table: [
                        ["Angle (°)", "Angle (rad)", "sin", "cos", "tan"],
                        ["0°", "0", "0", "1", "0"],
                        ["30°", "π/6", "1/2", "√3/2", "1/√3"],
                        ["45°", "π/4", "1/√2", "1/√2", "1"],
                        ["60°", "π/3", "√3/2", "1/2", "√3"],
                        ["90°", "π/2", "1", "0", "undefined"]
                    ],
                    memoryTrick: "sin column: √0/2, √1/2, √2/2, √3/2, √4/2 for 0°,30°,45°,60°,90°"
                },
                unitCircle: {
                    definition: "Circle of radius 1 centred at origin; point (cos θ, sin θ) traces the circle as θ increases",
                    quadrantSigns: {
                        first: "sin +, cos +, tan +",
                        second: "sin +, cos −, tan −",
                        third: "sin −, cos −, tan +",
                        fourth: "sin −, cos +, tan −"
                    },
                    relatedAngles: {
                        supplementary: "sin(180°−θ) = sin θ; cos(180°−θ) = −cos θ",
                        negative: "sin(−θ) = −sin θ; cos(−θ) = cos θ",
                        complementary: "sin(90°−θ) = cos θ; cos(90°−θ) = sin θ"
                    }
                },
                sineRule: {
                    formula: "a/sin A = b/sin B = c/sin C",
                    use: "Use when given: (1) two angles and one side (AAS/ASA); (2) two sides and non-included angle (SSA — ambiguous case)",
                    ambiguousCase: "When given SSA, there may be 0, 1, or 2 valid triangles",
                    example: "a=8, A=40°, B=65°: C=75°; b=8×sin65°/sin40° ≈ 11.3; c=8×sin75°/sin40° ≈ 12.0"
                },
                cosineRule: {
                    formula: "a² = b² + c² − 2bc·cos A",
                    rearranged: "cos A = (b² + c² − a²)/(2bc)",
                    use: "Use when given: (1) three sides (SSS); (2) two sides and included angle (SAS)",
                    example: "a=5, b=7, c=9: cos A = (49+81−25)/(2×7×9) = 105/126 → A = cos⁻¹(105/126) ≈ 33.6°"
                },
                radianConversion: {
                    formula: "radians = degrees × π/180; degrees = radians × 180/π",
                    commonConversions: {
                        "30°": "π/6",
                        "45°": "π/4",
                        "60°": "π/3",
                        "90°": "π/2",
                        "120°": "2π/3",
                        "180°": "π",
                        "270°": "3π/2",
                        "360°": "2π"
                    }
                },
                applications: [
                    "Navigation: finding distances and bearings",
                    "Engineering: force resolution and stress analysis",
                    "Physics: wave equations and oscillations",
                    "Architecture: roof pitch and structural loads",
                    "Astronomy: measuring distances to stars (parallax)"
                ]
            },

            angles_in_transformations: {
                title: "Angles in Transformations & Movement: Rotation, Reflection, and Symmetry",
                concepts: [
                    "A rotation is defined by a centre, an angle, and a direction (clockwise/anticlockwise)",
                    "Positive rotation angles are anticlockwise by convention",
                    "Reflection preserves angle sizes but reverses orientation",
                    "The angle of rotation that maps a shape onto itself defines the order of rotational symmetry",
                    "Combined transformations can be expressed as a single rotation or reflection",
                    "Matrices describe rotations and reflections on the coordinate plane"
                ],
                theory: "Transformations preserve the size and shape of figures (isometries). Rotation and reflection are the two angle-based isometries. Understanding rotation angles is central to symmetry, which appears throughout mathematics, science, and design. Matrix representations of rotations link linear algebra to geometry.",
                keyDefinitions: {
                    "Rotation": "A transformation that turns a figure by a given angle about a fixed centre point",
                    "Centre of Rotation": "The fixed point about which rotation occurs",
                    "Angle of Rotation": "The angle through which every point of the figure is turned",
                    "Reflection": "A transformation that flips a figure over a line (the mirror line)",
                    "Mirror Line": "The line about which a reflection is performed",
                    "Order of Rotational Symmetry": "The number of times a shape maps onto itself during one full 360° rotation",
                    "Angle of Symmetry": "360° ÷ order of rotational symmetry",
                    "Isometry": "A transformation that preserves distances and angles (congruence-preserving)",
                    "Orientation": "The sense of rotation (clockwise or anticlockwise); reflections reverse orientation"
                },
                rotationProperties: {
                    definition: "Every point P maps to P' where OP = OP' and ∠POP' = angle of rotation",
                    standardRotations: {
                        "90° anticlockwise": "(x, y) → (−y, x)",
                        "180°": "(x, y) → (−x, −y)",
                        "90° clockwise (270° anticlockwise)": "(x, y) → (y, −x)",
                        "360°": "(x, y) → (x, y) — identity"
                    },
                    matrixRepresentation: {
                        formula: "Rotation matrix for angle θ: [[cos θ, −sin θ], [sin θ, cos θ]]",
                        example90: "[[0, −1], [1, 0]] for 90° anticlockwise",
                        example180: "[[−1, 0], [0, −1]] for 180°"
                    },
                    findingCentreAndAngle: "Use the perpendicular bisectors of PP' and QQ' — they meet at the centre of rotation"
                },
                reflectionAndAngles: {
                    property: "A reflection maps each point to its mirror image across the line of reflection",
                    anglePreservation: "Reflection preserves angle sizes but reverses orientation",
                    commonMirrorLines: {
                        "x-axis": "(x, y) → (x, −y)",
                        "y-axis": "(x, y) → (−x, y)",
                        "y = x": "(x, y) → (y, x)",
                        "y = −x": "(x, y) → (−y, −x)"
                    },
                    angleOfIncidence: "In physics, angle of incidence = angle of reflection — direct application of reflection geometry"
                },
                rotationalSymmetry: {
                    definition: "A shape has order n rotational symmetry if it maps to itself n times in 360°",
                    angleOfSymmetry: "Minimum rotation angle = 360° ÷ n",
                    examples: {
                        "Equilateral triangle": "Order 3; angle 120°",
                        "Square": "Order 4; angle 90°",
                        "Regular hexagon": "Order 6; angle 60°",
                        "Circle": "Infinite order",
                        "Scalene triangle": "Order 1 (no rotational symmetry)"
                    }
                },
                compositeTransformations: {
                    twoReflections: "Two reflections in parallel lines = translation through twice the distance between them",
                    twoReflectionsIntersecting: "Two reflections in lines meeting at angle θ = rotation through 2θ about their intersection"
                },
                workedExamples: [
                    {
                        problem: "Rotate point P(3, 1) by 90° anticlockwise about the origin.",
                        solution: "(x, y) → (−y, x): P(3, 1) → P'(−1, 3)"
                    },
                    {
                        problem: "A shape maps to itself after a rotation of 72°. What is the order of rotational symmetry?",
                        solution: "Order = 360° ÷ 72° = 5"
                    },
                    {
                        problem: "Two mirror lines meet at 35°. A reflection in both lines is equivalent to what rotation?",
                        solution: "Rotation through 2 × 35° = 70° about the point where the lines meet"
                    }
                ],
                applications: [
                    "Art and design: symmetry patterns",
                    "Physics: optics and reflection laws",
                    "Engineering: gear rotation calculations",
                    "Chemistry: molecular symmetry and crystal structures",
                    "Computer graphics: rotation matrices in 3D rendering"
                ]
            },

            angles_in_vectors: {
                title: "Angles in Vectors: Direction, Dot Product, and Angular Relationships",
                concepts: [
                    "The direction angle of a vector is the angle it makes with the positive x-axis",
                    "The dot product formula: a·b = |a||b|cos θ gives the angle between two vectors",
                    "Two vectors are perpendicular if and only if their dot product equals zero",
                    "Two vectors are parallel if one is a scalar multiple of the other",
                    "The angle between a vector and an axis can be found using the vector's components",
                    "In 3D, direction cosines describe the angles a vector makes with each coordinate axis"
                ],
                theory: "Vectors carry both magnitude and direction. The angle between two vectors is one of the most important measurements in physics, engineering, and computer science. The dot product provides an elegant algebraic formula connecting vector components to the geometric concept of angle — revealing whether vectors are aligned, perpendicular, or somewhere between.",
                keyDefinitions: {
                    "Vector": "A quantity with both magnitude and direction, represented as an arrow or component form",
                    "Direction Angle": "The anticlockwise angle from the positive x-axis to the vector; θ = tan⁻¹(y/x) with appropriate quadrant adjustment",
                    "Dot Product (Scalar Product)": "a·b = a₁b₁ + a₂b₂ (+ a₃b₃ in 3D); also equals |a||b|cos θ",
                    "Angle Between Vectors": "θ = cos⁻¹(a·b / (|a||b|)); always the angle in [0°, 180°]",
                    "Perpendicular Vectors": "Vectors with a·b = 0 (cos 90° = 0)",
                    "Parallel Vectors": "Vectors where a = kb for scalar k; angle is 0° or 180°",
                    "Unit Vector": "A vector of magnitude 1; direction vector with all information about angle",
                    "Direction Cosines": "cos α, cos β, cos γ — cosines of angles a vector makes with x, y, z axes respectively",
                    "Cross Product": "a × b = |a||b|sin θ n̂; magnitude gives area of parallelogram; direction given by right-hand rule"
                },
                dotProductAndAngle: {
                    algebraicForm: "a·b = a₁b₁ + a₂b₂",
                    geometricForm: "a·b = |a||b|cos θ",
                    angleFormula: "cos θ = (a·b)/(|a||b|)",
                    derivation: "Using the cosine rule on the triangle formed by vectors a, b, and (a − b)",
                    properties: {
                        commutative: "a·b = b·a",
                        distributive: "a·(b + c) = a·b + a·c",
                        selfDot: "a·a = |a|²"
                    },
                    perpendicularCondition: "a·b = 0 ⟺ θ = 90° ⟺ vectors are perpendicular"
                },
                directionAngles: {
                    in2D: "θ = tan⁻¹(y/x); adjust for quadrant based on signs of x and y",
                    in3D: {
                        alpha: "cos α = a₁/|a| (angle with x-axis)",
                        beta: "cos β = a₂/|a| (angle with y-axis)",
                        gamma: "cos γ = a₃/|a| (angle with z-axis)",
                        identity: "cos²α + cos²β + cos²γ = 1"
                    }
                },
                workedExamples: [
                    {
                        problem: "Find the angle between vectors a = (3, 4) and b = (1, −2).",
                        solution: "a·b = 3(1) + 4(−2) = −5. |a| = √(9+16) = 5. |b| = √(1+4) = √5. cos θ = −5/(5√5) = −1/√5. θ = cos⁻¹(−1/√5) ≈ 116.6°"
                    },
                    {
                        problem: "Show that vectors (2, 3) and (−3, 2) are perpendicular.",
                        solution: "Dot product = 2(−3) + 3(2) = −6 + 6 = 0. Since dot product = 0, vectors are perpendicular. ✓"
                    },
                    {
                        problem: "Find the direction angle of vector v = (−4, 4).",
                        solution: "tan⁻¹(4/−4) = tan⁻¹(−1) = −45°. Since x < 0 and y > 0, vector is in 2nd quadrant: θ = 180° − 45° = 135°"
                    },
                    {
                        problem: "Find the angle vector v = (1, 2, 2) makes with the z-axis.",
                        solution: "|v| = √(1+4+4) = 3. cos γ = 2/3. γ = cos⁻¹(2/3) ≈ 48.2°"
                    }
                ],
                applications: [
                    "Physics: work done = F·d = |F||d|cos θ (dot product)",
                    "Computer graphics: lighting calculations (angle between surface normal and light source)",
                    "Robotics: joint angle calculation from position vectors",
                    "Engineering: resolving forces into components",
                    "Machine learning: cosine similarity in text analysis"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: PARALLEL LINES — CLINOMETER INVESTIGATION
            // ========================================

            clinometer_parallel_lines: {
                name: "Clinometer Investigation: Measuring Angle Relationships in Parallel Lines",
                relatedTopics: ['parallel_lines_transversals'],
                category: 'geometry',
                historicalBackground: {
                    origin: "Clinometers have been used since ancient Egypt for surveying and construction",
                    development: "Early versions used plumb lines and water levels; modern clinometers use electronic sensors",
                    significance: "Parallel line angle relationships were codified by Euclid in the Elements (c. 300 BCE) — forming the logical foundation of Euclidean geometry",
                    euclid: "Euclid's Parallel Postulate: through a point not on a given line, exactly one line can be drawn parallel to the given line",
                    modernUse: "Parallel line theorems underpin architecture, rail design, optical systems, and GPS calculations"
                },
                practicalMathematics: {
                    title: "Discovering Parallel Line Angle Relationships by Measurement and Pattern Recognition",
                    hypothesis: "If a transversal crosses two parallel lines, then corresponding angles are equal, alternate angles are equal, and co-interior angles sum to 180°",
                    purpose: "Measure and record the eight angles formed by a transversal crossing two parallel lines; discover and verify the four fundamental angle relationships",
                    materials: [
                        "Two parallel rulers or two metre rules placed parallel on a large sheet of paper",
                        "A third ruler as the transversal (positioned at an angle other than 90°)",
                        "Protractor (minimum 180° range)",
                        "Sharp pencil for accurate lines",
                        "Large sheet of plain paper (A2 or larger recommended)",
                        "Set square for verifying parallel setup",
                        "Coloured pencils (at least 4 colours) for angle identification",
                        "Worksheet for recording measurements"
                    ],
                    procedure: [
                        "SETUP — Creating the Parallel Lines Configuration:",
                        "1. Place two parallel rulers on the paper, 15–20 cm apart. Use a set square to verify they are parallel.",
                        "2. Draw along both rulers to create two parallel lines (label them l₁ and l₂).",
                        "3. Position the third ruler at a non-right angle across both lines and draw the transversal (label it t).",
                        "4. Label the eight angles formed: ∠1 through ∠8 (∠1–∠4 at the upper intersection, ∠5–∠8 at the lower intersection).",
                        "",
                        "MEASUREMENT — Recording All Eight Angles:",
                        "5. Carefully measure each angle with the protractor to the nearest 0.5°. Record all values.",
                        "6. Colour corresponding angle pairs the same colour (e.g., ∠1 and ∠5 in blue, ∠2 and ∠6 in red, etc.).",
                        "",
                        "INVESTIGATION 1 — Corresponding Angles (F-pattern):",
                        "7. Compare ∠1 and ∠5. Are they equal? What about ∠2 and ∠6; ∠3 and ∠7; ∠4 and ∠8?",
                        "8. Trace the F-shape on your diagram. Record your finding.",
                        "",
                        "INVESTIGATION 2 — Alternate Interior Angles (Z-pattern):",
                        "9. Compare ∠3 and ∠6; compare ∠4 and ∠5. Are the pairs equal?",
                        "10. Trace the Z-shape. Record your finding.",
                        "",
                        "INVESTIGATION 3 — Co-interior Angles (C-pattern):",
                        "11. Calculate ∠3 + ∠5 and ∠4 + ∠6. What is the sum each time?",
                        "12. Trace the C-shape. Record your finding.",
                        "",
                        "INVESTIGATION 4 — Vertically Opposite Angles:",
                        "13. Compare ∠1 and ∠3; ∠2 and ∠4 at the upper intersection.",
                        "14. Are vertically opposite angles equal regardless of the parallel lines?",
                        "",
                        "INVESTIGATION 5 — Testing Non-Parallel Lines:",
                        "15. Redraw with two non-parallel lines and a transversal. Measure all eight angles.",
                        "16. Do corresponding angles remain equal? Do co-interior angles still sum to 180°?",
                        "17. Record the differences and state what conditions are required for the relationships to hold.",
                        "",
                        "CONSOLIDATION — Creating the Angle Relationship Summary:",
                        "18. Use your data to complete the relationship table.",
                        "19. Write the conditions: 'Angles X and Y are equal IF AND ONLY IF ...'",
                        "20. Reflect: which relationship (corresponding, alternate, or co-interior) do you find most useful for problem-solving?"
                    ],
                    dataTable: [
                        ["Angle Pair", "Angle 1 (°)", "Angle 2 (°)", "Relationship", "Pattern Name", "Condition Required"],
                        ["∠1 and ∠5", "", "", "Equal", "Corresponding (F)", "Parallel lines"],
                        ["∠3 and ∠6", "", "", "Equal", "Alternate interior (Z)", "Parallel lines"],
                        ["∠1 and ∠8", "", "", "Equal", "Alternate exterior", "Parallel lines"],
                        ["∠3 + ∠5", "", "", "Sum = 180°", "Co-interior (C)", "Parallel lines"],
                        ["∠1 and ∠3", "", "", "Equal", "Vertically opposite", "Always (no condition)"]
                    ],
                    observations: {
                        correspondingAngles: "Corresponding angles are equal — the transversal meets both parallel lines at exactly the same angle",
                        alternateAngles: "Alternate angles are equal — on opposite sides of the transversal, the angles mirror each other",
                        coInteriorAngles: "Co-interior angles sum to 180° — they form a supplementary pair on the same side",
                        verticallyOpposite: "Vertically opposite angles are always equal, even without parallel lines",
                        breakdownWithNonParallel: "When lines are not parallel, none of the relationships hold consistently"
                    },
                    conclusions: [
                        "All three parallel-line angle relationships (corresponding equal, alternate equal, co-interior supplementary) depend on the lines being parallel",
                        "Vertically opposite angles are always equal — no parallel condition required",
                        "The eight angles formed divide into only two distinct measures (supplementary pairs)",
                        "Conversely, if corresponding angles are measured to be equal, the lines must be parallel — a test for parallelism",
                        "Measurement errors illustrate why mathematical proof (via Euclid's parallel postulate) is superior to measurement alone"
                    ],
                    extensions: [
                        "Investigate what happens when the transversal is perpendicular to the parallel lines: all eight angles = 90°",
                        "Use clinometers to measure corresponding angles on parallel walls or fences in the school environment",
                        "Prove the co-interior angle result algebraically using corresponding and supplementary angle relationships",
                        "Research how parallel line theorems are used in rail track laying and optical systems"
                    ],
                    realWorldConnections: [
                        "Rail design: tracks must be parallel; transversal crossings create known angle patterns at junctions",
                        "Architecture: parallel floor joists; transversal walls create predictable intersection angles",
                        "Optics: parallel light rays entering a lens — refraction creates systematic angle shifts",
                        "Navigation: parallel lines of latitude; meridians as transversals creating consistent bearing angles"
                    ],
                    pedagogicalNotes: {
                        benefits: "Physical measurement makes abstract angle relationships concrete; pattern recognition across multiple trials builds genuine understanding",
                        challenges: "Protractor placement errors are common — emphasise aligning the centre of the protractor with the vertex",
                        assessment: "Ask students to justify which angle relationship is fastest to use for each problem type — this reveals strategic thinking",
                        differentiation: "Support: pre-label the angles and colour-code them. Extension: derive all relationships using only the corresponding angles axiom and supplementary angles"
                    }
                }
            },

            // ========================================
            // PRACTICAL 2: POLYGON ANGLE SUM INVESTIGATION
            // ========================================

            polygon_angle_sum_investigation: {
                name: "Polygon Angle Sum Investigation: Discovering (n − 2) × 180°",
                relatedTopics: ['angles_in_polygons', 'angles_in_triangles'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Euclid and later René Descartes (1596–1650)",
                    contribution: "The triangulation method for polygon angles was known to Euclid; Descartes formalized exterior angle sum = 360° in his work on rotations",
                    descartes: "Descartes' rotation argument: walking around any polygon, you turn through a total of 360° — regardless of the number of sides",
                    significance: "The polygon angle sum formula connects the geometry of any polygon back to triangles — the most fundamental polygon"
                },
                practicalMathematics: {
                    title: "Deriving the Interior Angle Sum Formula by Triangulation and Exterior Rotation",
                    hypothesis: "The interior angle sum of an n-sided polygon is (n − 2) × 180°, derivable by dividing any polygon into triangles",
                    purpose: "Discover and verify the interior and exterior angle sum formulas by measurement and geometric decomposition",
                    materials: [
                        "Ruler, protractor, and sharp pencil",
                        "Pre-drawn regular and irregular polygons: triangle, quadrilateral, pentagon, hexagon, octagon (on separate sheets)",
                        "Scissors (for exterior angle activity)",
                        "Plain and squared paper",
                        "Coloured pencils",
                        "Calculator"
                    ],
                    procedure: [
                        "PART A: Interior Angle Sum by Measurement",
                        "1. For each polygon, measure all interior angles carefully with the protractor.",
                        "2. Sum the interior angles for each polygon and record in the table.",
                        "3. Compare sums with the formula (n − 2) × 180°.",
                        "",
                        "PART B: Triangulation Method — Deriving the Formula",
                        "4. Choose a single vertex in your pentagon.",
                        "5. Draw all diagonals from that vertex only (no other diagonals).",
                        "6. Count the number of triangles formed.",
                        "7. Calculate the total angle sum: number of triangles × 180°.",
                        "8. Repeat for hexagon and octagon.",
                        "9. Fill in the triangulation table and identify the pattern:",
                        "   • 3 sides → 1 triangle → 180°",
                        "   • 4 sides → 2 triangles → 360°",
                        "   • 5 sides → 3 triangles → 540°",
                        "   • n sides → (n−2) triangles → (n−2) × 180°",
                        "",
                        "PART C: Exterior Angle Sum — The Rotation Argument",
                        "10. Draw a large irregular pentagon.",
                        "11. At each vertex, extend one side and measure the exterior angle.",
                        "12. Sum all five exterior angles.",
                        "13. Repeat for a hexagon and quadrilateral.",
                        "14. What do you notice about the exterior angle sum every time?",
                        "",
                        "DESCARTES' ROTATION EXPERIMENT:",
                        "15. Place a pencil along one side of the polygon, pointing in the direction of travel.",
                        "16. At each vertex, rotate the pencil by the exterior angle to face the next side.",
                        "17. After going all the way around, the pencil faces its original direction.",
                        "18. The total rotation = 360° → exterior angle sum = 360°.",
                        "",
                        "PART D: Finding Unknown Angles",
                        "19. An irregular hexagon has 5 measured angles: 100°, 115°, 130°, 95°, 110°. Find the sixth.",
                        "20. A regular polygon has interior angle 150°. Find n.",
                        "21. A regular polygon has exterior angle 24°. How many sides?"
                    ],
                    dataTable: [
                        ["Polygon", "n (sides)", "Triangles (n−2)", "Formula (n−2)×180°", "Measured Sum (°)", "Exterior Sum (°)"],
                        ["Triangle", "3", "1", "180°", "", "360°"],
                        ["Quadrilateral", "4", "2", "360°", "", "360°"],
                        ["Pentagon", "5", "3", "540°", "", "360°"],
                        ["Hexagon", "6", "4", "720°", "", "360°"],
                        ["Octagon", "8", "6", "1080°", "", "360°"]
                    ],
                    conclusions: [
                        "The interior angle sum of any n-sided polygon = (n − 2) × 180° — verified by both measurement and the triangulation proof",
                        "The exterior angle sum of any convex polygon is always 360°, regardless of the number of sides",
                        "The exterior angle sum of 360° has a beautiful physical interpretation: walking around the polygon always requires exactly one full turn",
                        "For a regular polygon: each interior angle = (n−2)×180°/n; each exterior angle = 360°/n",
                        "Interior + exterior = 180° at each vertex — they form a linear pair"
                    ],
                    extensions: [
                        "Investigate whether the exterior angle sum is still 360° for concave (non-convex) polygons — does orientation matter?",
                        "Explore which regular polygons tessellate (tile a plane) and why: only equilateral triangle, square, and regular hexagon",
                        "Research how the polygon angle sum formula extends to polyhedra (3D shapes) via Euler's formula"
                    ],
                    realWorldConnections: [
                        "Architecture: polygon tiles and flooring patterns",
                        "Engineering: polygon cross-sections in structural components",
                        "Art: Islamic geometric art based on regular polygon angle properties",
                        "Nature: cell shapes in soap bubble clusters (hexagonal for efficiency)"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 3: CIRCLE THEOREMS DISCOVERY LAB
            // ========================================

            circle_theorems_discovery: {
                name: "Circle Theorems Discovery Lab: Measuring, Conjecturing, and Proving",
                relatedTopics: ['angles_in_circles', 'angles_in_triangles'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Thales of Miletus (c. 624–546 BCE) and Euclid",
                    thales: "Thales is credited with proving that the angle in a semicircle is 90° — regarded as one of the first mathematical proofs in history",
                    euclid: "Euclid systematized all circle angle theorems in Book III of the Elements",
                    significance: "Circle theorems represent some of the most elegant results in geometry — multiple independent-looking theorems all following from the single central/inscribed angle relationship",
                    modernUse: "Circle geometry is foundational in optics, satellite orbit calculations, and gear design"
                },
                practicalMathematics: {
                    title: "Discovering the Circle Angle Theorems by Measurement and Guided Conjecture",
                    hypothesis: "The central angle is exactly twice any inscribed angle subtending the same arc; this single relationship implies all other circle angle theorems",
                    purpose: "Measure central and inscribed angles, discover the factor-of-two relationship, then derive all major circle theorems as consequences",
                    materials: [
                        "Compass (for drawing circles)",
                        "Protractor",
                        "Ruler",
                        "Sharp pencil",
                        "Circle theorem worksheet with pre-drawn configurations",
                        "Coloured pencils",
                        "GeoGebra or Desmos (optional — dynamic geometry for verification)"
                    ],
                    procedure: [
                        "SETUP:",
                        "1. Draw a large circle (radius ≥ 7 cm) on plain paper. Mark the centre O.",
                        "",
                        "INVESTIGATION 1 — Central vs Inscribed Angle",
                        "2. Mark points A, B on the circumference. Draw central angle ∠AOB.",
                        "3. Mark point C on the major arc (the larger arc AB). Draw inscribed angle ∠ACB.",
                        "4. Measure both angles. Calculate ratio ∠AOB ÷ ∠ACB.",
                        "5. Move C to three different positions on the major arc. Measure ∠ACB each time.",
                        "6. Record all results. What pattern do you observe?",
                        "",
                        "INVESTIGATION 2 — Angles in the Same Segment",
                        "7. Mark four points P, Q, R, S on the circumference with P and Q fixed.",
                        "8. Measure inscribed angles ∠PRQ and ∠PSQ (both subtend arc PQ from the same side).",
                        "9. Are they equal? Repeat with different positions of R and S.",
                        "",
                        "INVESTIGATION 3 — Thales' Theorem (Angle in a Semicircle)",
                        "10. Draw a diameter AB of your circle.",
                        "11. Mark point C anywhere on the circumference (not at A or B).",
                        "12. Measure ∠ACB. Repeat with C in six different positions.",
                        "13. What is always true about ∠ACB?",
                        "",
                        "INVESTIGATION 4 — Cyclic Quadrilateral",
                        "14. Mark four points A, B, C, D on the circumference to form a cyclic quadrilateral.",
                        "15. Measure all four interior angles.",
                        "16. Calculate ∠A + ∠C and ∠B + ∠D.",
                        "17. What do you notice? Repeat with a different cyclic quadrilateral.",
                        "",
                        "INVESTIGATION 5 — Tangent-Chord Angle",
                        "18. Draw a tangent to the circle at point T (use a ruler placed against the circle edge).",
                        "19. Draw chord TA. Measure the angle between the tangent and chord TA.",
                        "20. Mark point B in the alternate segment. Measure inscribed angle ∠TBA.",
                        "21. Compare the two angles. State your conjecture.",
                        "",
                        "PROOF ACTIVITY:",
                        "22. Using the central/inscribed angle theorem, prove the cyclic quadrilateral theorem:",
                        "    Let ∠A subtend arc BCD and ∠C subtend arc DAB.",
                        "    Central angle over BCD + central angle over DAB = 360°.",
                        "    Therefore 2∠A + 2∠C = 360° → ∠A + ∠C = 180°. □"
                    ],
                    dataTable: [
                        ["Investigation", "Theorem", "Measured Value 1", "Measured Value 2", "Measured Value 3", "Conjecture"],
                        ["Central vs Inscribed", "Central = 2 × Inscribed", "", "", "", ""],
                        ["Same Segment", "All inscribed angles equal", "", "", "", ""],
                        ["Thales' Theorem", "Angle in semicircle = 90°", "", "", "", ""],
                        ["Cyclic Quadrilateral", "Opposite angles sum 180°", "", "", "", ""],
                        ["Tangent-Chord", "Equals alternate segment angle", "", "", "", ""]
                    ],
                    conclusions: [
                        "The central angle is always exactly twice the inscribed angle over the same arc — the master theorem from which all others follow",
                        "All inscribed angles subtending the same arc are equal — they all equal half the central angle",
                        "Thales' Theorem: the angle in a semicircle is 90° — because the central angle is 180° (straight line), so the inscribed angle = 90°",
                        "Cyclic quadrilateral: opposite angles sum to 180° — because they subtend arcs that together form the complete circle (360°)",
                        "The alternate segment theorem links the tangent direction to the inscribed angle — an elegant consequence of the tangent-radius perpendicularity"
                    ],
                    extensions: [
                        "Prove the tangent-chord theorem using the alternate segment approach",
                        "Investigate the angle formed by two chords intersecting inside a circle: ∠ = (arc₁ + arc₂)/2",
                        "Explore two secants from an external point: ∠ = (larger arc − smaller arc)/2",
                        "Research how circle theorems appear in optical instruments (telescopes, cameras)"
                    ],
                    realWorldConnections: [
                        "Engineering: cam and gear design rely on inscribed angle calculations",
                        "Architecture: arch construction uses semicircle and chord angle properties",
                        "Optics: lens design and angle of refraction in circular cross-sections",
                        "Astronomy: calculating angular diameter of celestial bodies using inscribed angle properties"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: UNIT CIRCLE TRIGONOMETRY INVESTIGATION
            // ========================================

            unit_circle_trigonometry: {
                name: "Unit Circle Investigation: Discovering the Trigonometric Ratios for All Angles",
                relatedTopics: ['angles_in_trigonometry', 'angles_in_coordinate_geometry'],
                category: 'trigonometry',
                historicalBackground: {
                    mathematician: "Hipparchus of Nicaea (c. 190–120 BCE)",
                    contribution: "Hipparchus produced the first trigonometric table — a table of chords (equivalent to sine values) for a circle of fixed radius",
                    development: "The unit circle formulation was developed through the work of Arab mathematicians (al-Battani, 858–929 CE) who introduced the sine function as a ratio rather than a chord length",
                    euler: "Leonhard Euler (1707–1783) established the modern unit circle definition and introduced the notation sin, cos, tan",
                    radians: "Radians were introduced by Roger Cotes (1682–1716), simplifying calculus of trigonometric functions enormously",
                    significance: "The unit circle unifies all trigonometry: right-triangle definitions (first quadrant), extended definitions (all quadrants), and periodic functions"
                },
                practicalMathematics: {
                    title: "Building the Unit Circle: From Right Triangles to All Angles",
                    hypothesis: "If the unit circle is drawn and a point P = (cos θ, sin θ) traces the circle, then the coordinates of P give sin and cos for any angle θ — including obtuse, reflex, and negative angles",
                    purpose: "Construct the unit circle, plot trigonometric values geometrically, discover the CAST diagram, and verify special angle exact values",
                    materials: [
                        "Compass (set to 10 cm radius for accuracy)",
                        "Protractor",
                        "Ruler",
                        "Squared paper (large sheet)",
                        "Calculator (for verification)",
                        "Coloured pencils (4 colours — one per quadrant)",
                        "Unit circle worksheet"
                    ],
                    procedure: [
                        "PART A: Constructing the Unit Circle and First Quadrant Values",
                        "1. Draw x and y axes on squared paper. Mark the origin O.",
                        "2. Draw a circle of radius 10 cm centred at O (1 cm will represent 0.1 units).",
                        "3. For angles 0°, 30°, 45°, 60°, 90°: draw the radius at each angle.",
                        "4. From the endpoint P of each radius, drop a perpendicular to the x-axis.",
                        "5. Measure: x-coordinate of P = cos θ (in units of 10 cm); y-coordinate = sin θ.",
                        "6. Record cos and sin values. Convert to decimals (divide by 10).",
                        "7. Compare with calculator values and known exact values.",
                        "",
                        "PART B: Extending to All Quadrants",
                        "8. Repeat for angles 120°, 135°, 150°, 180° (second quadrant — colour differently).",
                        "9. Note: x-coordinate is now negative → cos is negative in second quadrant.",
                        "10. Repeat for 210°, 225°, 240°, 270° (third quadrant).",
                        "11. Repeat for 300°, 315°, 330°, 360° (fourth quadrant).",
                        "12. Complete the sign table for all four quadrants.",
                        "",
                        "PART C: Discovering the CAST Diagram",
                        "13. Colour code: which quadrant has sin positive? cos positive? tan positive?",
                        "14. Label the CAST diagram: All (1st), Sine (2nd), Tangent (3rd), Cosine (4th).",
                        "15. State the rule: all positive in 1st, only sine in 2nd, only tangent in 3rd, only cosine in 4th.",
                        "",
                        "PART D: Exact Values for Special Angles",
                        "16. For 30°: draw the radius and measure coordinates. Compare with (√3/2, 1/2).",
                        "17. For 45°: measure and compare with (1/√2, 1/√2).",
                        "18. For 60°: measure and compare with (1/2, √3/2).",
                        "19. Derive exact values using the 30-60-90 and 45-45-90 triangles.",
                        "",
                        "PART E: Symmetry Relationships",
                        "20. Compare sin(30°) and sin(150°). What do you notice?",
                        "21. Compare cos(60°) and cos(300°). What pattern holds?",
                        "22. State the symmetry rules: sin(180°−θ) = sin(θ); cos(180°−θ) = −cos(θ)"
                    ],
                    dataTable: [
                        ["Angle θ", "cos θ (measured)", "sin θ (measured)", "cos θ (exact)", "sin θ (exact)", "tan θ (exact)", "Quadrant"],
                        ["0°", "", "", "1", "0", "0", "1"],
                        ["30°", "", "", "√3/2", "1/2", "1/√3", "1"],
                        ["45°", "", "", "1/√2", "1/√2", "1", "1"],
                        ["60°", "", "", "1/2", "√3/2", "√3", "1"],
                        ["90°", "", "", "0", "1", "undef", "1/2"],
                        ["120°", "", "", "−1/2", "√3/2", "−√3", "2"],
                        ["150°", "", "", "−√3/2", "1/2", "−1/√3", "2"],
                        ["180°", "", "", "−1", "0", "0", "2/3"],
                        ["270°", "", "", "0", "−1", "undef", "3"],
                        ["360°", "", "", "1", "0", "0", "4"]
                    ],
                    conclusions: [
                        "The unit circle extends the definitions of sin and cos to all angles — not just acute angles in right triangles",
                        "sin θ = y-coordinate of the point on the unit circle; cos θ = x-coordinate",
                        "The CAST diagram summarises which ratios are positive in each quadrant",
                        "Symmetry relationships: sin(180°−θ) = sin θ; cos(180°−θ) = −cos θ; cos(360°−θ) = cos θ",
                        "The exact values for 30°, 45°, 60° are derived from equilateral and isosceles right triangles — not memorized arbitrarily"
                    ],
                    extensions: [
                        "Plot sin θ and cos θ as functions of θ from 0° to 360° — observe the wave shapes",
                        "Introduce radians: convert special angles and observe how the period becomes 2π",
                        "Investigate tan θ = sin θ / cos θ and explain the asymptotes at 90° and 270°",
                        "Connect to the Pythagorean identity: sin²θ + cos²θ = 1 (follows directly from unit circle)"
                    ],
                    realWorldConnections: [
                        "Physics: wave equations y = A sin(ωt + φ) model all oscillatory phenomena",
                        "Engineering: AC electrical circuits use sinusoidal voltage V = V₀ sin(ωt)",
                        "Music: sound waves are sinusoidal; the unit circle underpins Fourier analysis",
                        "Navigation: bearing calculations use all four quadrants — CAST diagram applies directly"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 5: ROTATION AND REFLECTION TRANSFORMATION LAB
            // ========================================

            rotation_reflection_lab: {
                name: "Transformation Angle Lab: Rotations, Reflections, and Symmetry",
                relatedTopics: ['angles_in_transformations', 'angles_in_triangles'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Felix Klein (1849–1925)",
                    work: "Erlangen Programme (1872): classified all geometries by their transformation groups",
                    contribution: "Klein showed that geometry is fundamentally about studying properties that are preserved under groups of transformations — rotations and reflections being the angle-preserving (isometric) transformations",
                    descartes: "Descartes (1637) introduced coordinate geometry enabling algebraic description of transformations",
                    significance: "Transformation geometry unifies symmetry, crystallography, art, and physics — all governed by rotation and reflection angles"
                },
                practicalMathematics: {
                    title: "Discovering Rotation and Reflection Angles by Construction and Coordinate Analysis",
                    hypothesis: "Two reflections in lines meeting at angle θ are equivalent to a single rotation through 2θ; rotation angle and centre can be uniquely determined from any two congruent figures",
                    purpose: "Perform, describe, and analyse rotations and reflections; discover the link between composite reflections and rotations; investigate rotational symmetry",
                    materials: [
                        "Squared paper (large, preferably 1 cm grid)",
                        "Tracing paper or transparent acetate sheets",
                        "Ruler and protractor",
                        "Compass",
                        "Coloured pencils",
                        "Mirror or reflective surface (for physical reflection verification)",
                        "Transformation worksheet"
                    ],
                    procedure: [
                        "PART A: Rotations on the Coordinate Grid",
                        "1. Draw triangle ABC with A(1,0), B(3,0), C(2,2) on squared paper.",
                        "2. Rotate 90° anticlockwise about O using rule (x,y) → (−y,x). Draw image A'B'C'.",
                        "3. Rotate the original 180° using rule (x,y) → (−x,−y). Draw image A''B''C''.",
                        "4. Rotate 270° anticlockwise (90° clockwise) using rule (x,y) → (y,−x).",
                        "5. Verify: what transformation maps 90° anticlockwise image back to original?",
                        "",
                        "FINDING THE CENTRE AND ANGLE OF ROTATION:",
                        "6. Draw two congruent triangles PQR and P'Q'R' (given — not at standard rotations).",
                        "7. Join PP' and QQ'. Construct perpendicular bisectors of each.",
                        "8. The intersection of perpendicular bisectors = centre of rotation.",
                        "9. Measure ∠POP' = angle of rotation.",
                        "10. Verify by applying the identified rotation to the original triangle.",
                        "",
                        "PART B: Reflections and Their Angles",
                        "11. Reflect triangle ABC in the x-axis. Record image coordinates. State the rule.",
                        "12. Reflect in the y-axis. Record and state the rule.",
                        "13. Reflect in the line y = x. Record and state the rule.",
                        "14. Reflect in the line y = −x. Record and state the rule.",
                        "",
                        "PART C: Composite Reflections — Discovering the Double Reflection Theorem",
                        "15. Draw two mirror lines intersecting at O with angle θ = 40° between them.",
                        "16. Reflect triangle ABC in the first mirror line → A'B'C'.",
                        "17. Reflect A'B'C' in the second mirror line → A''B''C''.",
                        "18. Compare ABC with A''B''C''. Calculate angle ∠AOA'' (rotation from original to final).",
                        "19. How does ∠AOA'' compare to θ?",
                        "20. Repeat with θ = 60° and θ = 30°. Confirm: rotation = 2θ.",
                        "",
                        "PART D: Rotational Symmetry Investigation",
                        "21. For each regular polygon (equilateral triangle, square, regular pentagon, regular hexagon):",
                        "    • Trace onto tracing paper",
                        "    • Rotate the tracing and find the minimum angle for it to land on the original",
                        "    • Count how many times it lands on the original in 360°",
                        "    • Record the order of rotational symmetry",
                        "22. State the relationship: order × minimum rotation angle = 360°"
                    ],
                    dataTable: [
                        ["Transformation", "Rule (x, y) →", "Angle / Axis", "Orientation Preserved?", "Image of (2, 3)"],
                        ["Rotation 90° ACW about O", "(−y, x)", "90° ACW", "Yes (reversed)", "(−3, 2)"],
                        ["Rotation 180° about O", "(−x, −y)", "180°", "Yes", "(−2, −3)"],
                        ["Rotation 90° CW about O", "(y, −x)", "90° CW", "Yes (reversed)", "(3, −2)"],
                        ["Reflection in x-axis", "(x, −y)", "x-axis", "No (flipped)", "(2, −3)"],
                        ["Reflection in y-axis", "(−x, y)", "y-axis", "No", "(−2, 3)"],
                        ["Reflection in y = x", "(y, x)", "y = x line", "No", "(3, 2)"],
                        ["Reflection in y = −x", "(−y, −x)", "y = −x line", "No", "(−3, −2)"]
                    ],
                    rotationalSymmetryTable: [
                        ["Shape", "Minimum Rotation Angle", "Order of Symmetry", "360° ÷ Order = Angle?"],
                        ["Equilateral triangle", "120°", "3", "360° ÷ 3 = 120° ✓"],
                        ["Square", "90°", "4", "360° ÷ 4 = 90° ✓"],
                        ["Regular pentagon", "72°", "5", "360° ÷ 5 = 72° ✓"],
                        ["Regular hexagon", "60°", "6", "360° ÷ 6 = 60° ✓"],
                        ["Rectangle", "180°", "2", "360° ÷ 2 = 180° ✓"]
                    ],
                    conclusions: [
                        "Rotation rules on the coordinate grid follow from the rotation angle: 90°→(−y,x); 180°→(−x,−y); 270°→(y,−x)",
                        "The centre of any rotation can be found as the intersection of perpendicular bisectors of corresponding points",
                        "Two reflections in intersecting lines are equivalent to a single rotation through twice the angle between the mirror lines",
                        "Rotational symmetry of order n means the shape maps to itself at every 360°/n rotation",
                        "Reflections reverse orientation; rotations preserve orientation — a key distinguishing property"
                    ],
                    extensions: [
                        "Investigate the composition of two rotations: show two successive rotations can be combined into a single rotation",
                        "Explore frieze patterns and wallpaper groups — all based on rotation and reflection combinations",
                        "Research rotational symmetry in molecular chemistry (point groups) and crystal structures",
                        "Use rotation matrices to rotate vectors in the plane and verify with coordinate rules"
                    ],
                    realWorldConnections: [
                        "Architecture: Islamic geometric art and tiling patterns built on rotation and reflection symmetry",
                        "Chemistry: molecular point groups determine vibrational and optical properties",
                        "Physics: optics — angle of incidence = angle of reflection (direct application of reflection geometry)",
                        "Animation: 3D computer graphics use rotation matrices to animate objects realistically"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 6: DOT PRODUCT AND VECTOR ANGLES INVESTIGATION
            // ========================================

            dot_product_vector_angles: {
                name: "Dot Product Investigation: Discovering the Angle Between Vectors",
                relatedTopics: ['angles_in_vectors', 'angles_in_trigonometry', 'angles_in_coordinate_geometry'],
                category: 'vectors',
                historicalBackground: {
                    mathematician: "Hermann Grassmann (1809–1877) and Josiah Willard Gibbs (1839–1903)",
                    grassmann: "Grassmann introduced exterior algebra and the foundations of vector products in his Ausdehnungslehre (1844)",
                    gibbs: "Gibbs formalized the dot product and cross product notation in his Elements of Vector Analysis (1881–1884)",
                    significance: "The dot product formula cos θ = (a·b)/(|a||b|) links the algebraic operation of vector multiplication to the geometric concept of angle — unifying algebra and geometry",
                    modernUse: "The dot product formula for angles is fundamental in: computer graphics, machine learning (cosine similarity), physics (work, power), and robotics"
                },
                practicalMathematics: {
                    title: "Deriving and Applying the Dot Product Formula for Angle Between Vectors",
                    hypothesis: "The angle between two vectors can be calculated entirely from their components using cos θ = (a·b)/(|a||b|), where a·b = a₁b₁ + a₂b₂",
                    purpose: "Derive the dot product angle formula from the cosine rule; verify by measurement; apply to perpendicularity and parallel tests",
                    materials: [
                        "Squared paper",
                        "Ruler and protractor",
                        "Calculator (with inverse trig functions)",
                        "Vector angle worksheet",
                        "Coloured pencils"
                    ],
                    procedure: [
                        "PART A: Measuring Angles Between Vectors Directly",
                        "1. Draw vector a = (4, 3) from the origin on squared paper.",
                        "2. Draw vector b = (2, −1) from the same origin.",
                        "3. Measure the angle between the vectors using the protractor.",
                        "4. Calculate the angle using the formula: cos θ = (a·b)/(|a||b|).",
                        "   a·b = 4(2) + 3(−1) = 8 − 3 = 5",
                        "   |a| = √(16+9) = 5; |b| = √(4+1) = √5",
                        "   cos θ = 5/(5√5) = 1/√5 → θ = cos⁻¹(1/√5) ≈ 63.4°",
                        "5. Compare measured and calculated values.",
                        "",
                        "PART B: Deriving the Formula from the Cosine Rule",
                        "6. Draw triangle OAB where O = origin, A = tip of vector a, B = tip of vector b.",
                        "7. Label: |OA| = |a|, |OB| = |b|, |AB| = |b − a|.",
                        "8. Apply the cosine rule to find ∠AOB:",
                        "   |AB|² = |a|² + |b|² − 2|a||b|cos θ",
                        "   |b−a|² = |a|² + |b|² − 2|a||b|cos θ",
                        "9. Expand |b−a|² = (b₁−a₁)² + (b₂−a₂)² = |b|² − 2(a₁b₁+a₂b₂) + |a|²",
                        "10. Substitute and simplify to get: 2|a||b|cos θ = 2(a₁b₁+a₂b₂)",
                        "11. Therefore: cos θ = (a₁b₁+a₂b₂)/(|a||b|) = (a·b)/(|a||b|) □",
                        "",
                        "PART C: Perpendicularity Test",
                        "12. Test the following pairs — which are perpendicular?",
                        "    (a) a=(3,4), b=(4,−3): a·b = 12−12 = 0 → θ = 90° ✓",
                        "    (b) a=(1,2), b=(2,1): a·b = 2+2 = 4 → not perpendicular",
                        "    (c) a=(5,0), b=(0,−7): a·b = 0 → θ = 90° ✓",
                        "13. State the perpendicularity condition: a⊥b ⟺ a·b = 0",
                        "",
                        "PART D: Direction Angles in 2D and 3D",
                        "14. Find the direction angle of v = (3, −3) from the positive x-axis.",
                        "    tan θ = −3/3 = −1; reference angle = 45°; x>0, y<0 → 4th quadrant → θ = 315°",
                        "15. Find the angle vector u = (1, 1, 1) makes with each coordinate axis.",
                        "    |u| = √3. cos α = 1/√3 → α ≈ 54.7° (with x-axis — same for y and z by symmetry)",
                        "16. Verify: cos²α + cos²β + cos²γ = 3 × (1/3) = 1 ✓",
                        "",
                        "PART E: Application — Work Done by a Force",
                        "17. Force F = (6, 4) N, displacement d = (3, 1) m.",
                        "    Work = F·d = 18 + 4 = 22 J",
                        "18. Find the angle between F and d: cos θ = 22/(√52 × √10) ≈ 0.965 → θ ≈ 15.1°",
                        "19. Alternative: Work = |F||d|cos θ = √52 × √10 × cos(15.1°) ≈ 22 J ✓"
                    ],
                    dataTable: [
                        ["Vector a", "Vector b", "a·b (calculated)", "θ (formula °)", "θ (measured °)", "Perpendicular?"],
                        ["(4, 3)", "(2, −1)", "5", "63.4°", "", "No"],
                        ["(3, 4)", "(4, −3)", "0", "90°", "", "Yes"],
                        ["(1, 0)", "(0, 1)", "0", "90°", "", "Yes"],
                        ["(2, 2)", "(1, 1)", "4", "0°", "", "No (parallel)"],
                        ["(3, −3)", "(3, 3)", "0", "90°", "", "Yes"]
                    ],
                    conclusions: [
                        "The dot product formula cos θ = (a·b)/(|a||b|) derives directly from the cosine rule applied to the triangle formed by two vectors",
                        "The dot product a·b = a₁b₁ + a₂b₂ computes the geometric angle information algebraically from components",
                        "Perpendicular vectors have dot product zero — because cos 90° = 0",
                        "Parallel vectors have |a·b| = |a||b| — because cos 0° = 1 or cos 180° = −1",
                        "Direction cosines in 3D satisfy cos²α + cos²β + cos²γ = 1 — an extension of the Pythagorean identity",
                        "In physics, work = F·d = |F||d|cos θ — the dot product directly measures the component of force in the direction of motion"
                    ],
                    extensions: [
                        "Investigate the cross product: |a × b| = |a||b|sin θ — compare with dot product formula",
                        "Explore cosine similarity in machine learning: two text documents compared by treating word frequencies as vectors",
                        "Research how dot products enable computer graphics lighting: brightness ∝ normal·light_direction",
                        "Extend to n-dimensional vectors and angles in higher-dimensional spaces"
                    ],
                    realWorldConnections: [
                        "Physics: work done by a force = F·d; power = F·v",
                        "Computer graphics: diffuse lighting uses the dot product of surface normal and light direction",
                        "Machine learning: cosine similarity measures how similar two documents are",
                        "Robotics: joint angle calculation from position vectors",
                        "Navigation: angle between heading vector and target vector determines required turn angle"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 7: BEARING NAVIGATION CHALLENGE
            // ========================================

            bearing_navigation_challenge: {
                name: "Bearing Navigation Challenge: Angles in Real-World Coordinate Geometry",
                relatedTopics: ['angles_in_coordinate_geometry', 'angles_in_trigonometry', 'angles_in_triangles'],
                category: 'coordinate_geometry',
                historicalBackground: {
                    origin: "Compass bearings have been used in navigation for over 1000 years",
                    development: "Chinese compasses date to the 9th century CE; Europeans adopted magnetic compass navigation by the 12th century",
                    mathematization: "The three-figure bearing system was standardized for aviation and naval navigation in the 20th century",
                    significance: "Bearings are a direct real-world application of angles, trigonometry, and coordinate geometry — unifying all three topics in a practical context",
                    modernUse: "GPS systems, aviation, shipping, and hiking all rely on bearing calculations"
                },
                practicalMathematics: {
                    title: "Multi-Leg Navigation Using Bearings: Trigonometry in Action",
                    hypothesis: "Any multi-leg navigation problem can be solved by resolving each leg into North and East components, summing components, and calculating the resultant bearing and distance",
                    purpose: "Apply bearings, trigonometry, and coordinate methods to solve realistic navigation problems",
                    materials: [
                        "Squared paper with North marked",
                        "Protractor (measuring clockwise from North)",
                        "Ruler (1 cm = 1 km scale)",
                        "Calculator",
                        "Coloured pencils for different legs",
                        "Navigation worksheet"
                    ],
                    procedure: [
                        "UNDERSTANDING BEARINGS:",
                        "1. Bearings are measured CLOCKWISE from NORTH, always as 3 figures.",
                        "2. Mark: North = 000°; East = 090°; South = 180°; West = 270°.",
                        "3. Back bearing = bearing ± 180° (add 180° if bearing < 180°; subtract if ≥ 180°).",
                        "",
                        "ACTIVITY 1: Simple Bearing Problems",
                        "4. A ship sails 50 km on bearing 040°. Draw and find its position.",
                        "   North component = 50 cos(40°) = 38.3 km north",
                        "   East component = 50 sin(40°) = 32.1 km east",
                        "   Position: (32.1 km E, 38.3 km N) from start",
                        "",
                        "5. Find the bearing FROM the destination BACK to the start.",
                        "   Back bearing = 040° + 180° = 220°",
                        "",
                        "ACTIVITY 2: Multi-Leg Journey",
                        "6. A hiker walks: 8 km on 065°, then 6 km on 155°, then 4 km on 260°.",
                        "7. Resolve each leg into North (N cos θ) and East (N sin θ) components.",
                        "8. Sum all North components; sum all East components.",
                        "9. Calculate resultant distance using Pythagoras.",
                        "10. Calculate bearing of resultant using tan⁻¹(total East / total North).",
                        "11. Adjust quadrant based on signs of total N and E components.",
                        "",
                        "ACTIVITY 3: Finding Bearing Between Two Points",
                        "12. Town A is at (0, 0); Town B is at (15, 20) [km East, km North].",
                        "13. Find bearing from A to B.",
                        "    tan θ = 15/20 = 0.75 → θ = 36.9° east of north → bearing = 036.9° ≈ 037°",
                        "14. Find bearing from B to A.",
                        "    Back bearing = 037° + 180° = 217°",
                        "",
                        "ACTIVITY 4: Triangulation Problem",
                        "15. Lighthouse L is on bearing 048° from ship A and bearing 302° from ship B.",
                        "16. Ship A is 12 km due west of Ship B.",
                        "17. Using the sine rule, find the distance from each ship to the lighthouse.",
                        "18. Identify all angles in the triangle formed.",
                        "",
                        "REFLECTION:",
                        "19. When is the sine rule more efficient than component resolution?",
                        "20. When is trigonometry alone insufficient and vectors needed?"
                    ],
                    dataTable: [
                        ["Leg", "Distance (km)", "Bearing", "North Component (km)", "East Component (km)"],
                        ["Leg 1", "8", "065°", "8cos65°=3.38", "8sin65°=7.25"],
                        ["Leg 2", "6", "155°", "6cos155°=−5.44", "6sin155°=2.54"],
                        ["Leg 3", "4", "260°", "4cos260°=−0.69", "4sin260°=−3.94"],
                        ["Totals", "", "", "ΣN = −2.75", "ΣE = 5.85"],
                        ["Resultant", "√(2.75²+5.85²)≈6.47 km", "tan⁻¹(5.85/2.75) adjusted for quadrant", "", ""]
                    ],
                    conclusions: [
                        "Bearings are angles measured clockwise from North — a direct application of angle measurement in a real-world context",
                        "Any bearing problem can be resolved into North and East components using trigonometry",
                        "Resultant position = sum of component vectors — linking vectors, coordinates, and trigonometry",
                        "The back bearing formula (± 180°) reflects the fact that the return direction is exactly opposite",
                        "Triangulation using the sine rule can determine positions without knowing all distances — just bearings"
                    ],
                    extensions: [
                        "Research how GPS triangulates position using signals from multiple satellites (3D triangulation)",
                        "Investigate how ship navigation historically used star bearings and magnetic compass bearings",
                        "Solve a 3D bearing problem: find the bearing and angle of elevation from a boat to a cliff-top lighthouse",
                        "Program a simple bearing calculator in Python using trigonometric functions"
                    ],
                    realWorldConnections: [
                        "Aviation: flight paths calculated as bearing and distance from waypoints",
                        "Shipping: all maritime navigation uses three-figure bearings",
                        "Hiking: orienteering and bushwalking rely on compass bearings",
                        "Military: artillery range and bearing calculations",
                        "Search and rescue: grid reference and bearing coordination"
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
            parallel_lines_transversals: {
                'Angle Identification': [
                    'Confusing corresponding angles with co-interior angles — both involve one angle at each intersection but on different sides',
                    'Calling co-interior angles "alternate angles" — alternate angles are on OPPOSITE sides; co-interior on the SAME side',
                    'Applying parallel-line angle rules to non-parallel lines — always verify lines are parallel before applying the theorems',
                    'Measuring the wrong angle at an intersection — using the obtuse angle when the acute is required or vice versa'
                ],
                'Sign and Supplementary Errors': [
                    'Stating co-interior angles are equal instead of supplementary (180°)',
                    'Forgetting that vertically opposite angles are always equal — no parallel condition is needed',
                    'Confusing supplementary (sum 180°) and complementary (sum 90°)'
                ],
                'Converse Errors': [
                    'Not recognising that equal corresponding or alternate angles PROVE lines are parallel (the converse theorem)',
                    'Assuming any pair of angles at two intersections are related — only specific pairs have guaranteed relationships'
                ]
            },

            angles_in_polygons: {
                'Formula Errors': [
                    'Using n × 180° instead of (n − 2) × 180° for the interior angle sum',
                    'Forgetting to divide by n when finding each interior angle of a regular polygon',
                    'Confusing interior and exterior angle formulas',
                    'Believing the exterior angle sum depends on the number of sides — it is always 360°'
                ],
                'Application Errors': [
                    'Using the regular polygon formula for irregular polygons (each angle = sum ÷ n only works for regular polygons)',
                    'Not accounting for reflex angles in concave polygons',
                    'Identifying the wrong angle as interior or exterior at a vertex'
                ],
                'Counting Errors': [
                    'Counting the number of diagonals instead of sides when applying the triangulation method',
                    'Using the wrong value of n for complex polygons'
                ]
            },

            angles_in_triangles: {
                'Angle Sum Errors': [
                    'Believing the angle sum depends on the type or size of triangle — it is always 180° for any triangle',
                    'Forgetting to subtract from 180° when finding a missing angle (adding instead)',
                    'Applying the triangle angle sum to quadrilaterals or other polygons'
                ],
                'Exterior Angle Errors': [
                    'Confusing the exterior angle theorem with the angle sum theorem — exterior angle = sum of TWO non-adjacent interior angles, not all three',
                    'Identifying the wrong angle as the exterior angle — it must be adjacent to the interior angle and form a straight line with one side',
                    'Using the exterior angle theorem for non-triangle polygons without adjustment'
                ],
                'Special Triangle Errors': [
                    'Assuming an isosceles triangle has equal angles at the TOP (apex) — it is the BASE angles that are equal',
                    'Thinking an equilateral triangle must have angles that add to more than 180° because all sides are equal',
                    'Forgetting that a right-angled isosceles triangle has angles 45°, 45°, 90°'
                ]
            },

            angles_in_circles: {
                'Central vs Inscribed': [
                    'Thinking inscribed angle = central angle instead of inscribed = HALF central angle',
                    'Applying the central/inscribed theorem when the vertex is NOT on the circumference',
                    'Confusing the central angle with the arc measure — they are equal for a unit circle but the arc measure is in degrees'
                ],
                'Theorem Application': [
                    'Applying the cyclic quadrilateral theorem to quadrilaterals that are not inscribed in a circle',
                    'Forgetting that the alternate segment theorem requires a TANGENT at the point — not any chord',
                    'Confusing angle in the same segment (equal) with angle in the opposite segment (supplementary)'
                ],
                'Thales Theorem Errors': [
                    'Only applying Thales theorem when the diameter appears horizontal — it works for ANY diameter orientation',
                    'Forgetting that the 90° angle is at the circumference point C, not at the centre'
                ]
            },

            angles_in_coordinate_geometry: {
                'Gradient-Angle Relationship': [
                    'Confusing gradient with angle — gradient = tan(angle), not the angle itself',
                    'Forgetting to adjust the angle to [0°, 180°) when the gradient is negative (angle is in 2nd quadrant)',
                    'Using arctan without quadrant adjustment — always consider the sign of the gradient'
                ],
                'Perpendicular/Parallel Conditions': [
                    'Stating perpendicular lines have equal gradients (they have negative reciprocal gradients: m₁m₂ = −1)',
                    'Forgetting the perpendicular condition fails for vertical and horizontal lines (where gradients are undefined or zero)'
                ],
                'Bearing Errors': [
                    'Measuring bearings anticlockwise instead of clockwise from North',
                    'Forgetting to write bearings as three digits (e.g., writing 45° instead of 045°)',
                    'Calculating back bearing incorrectly: adding or subtracting 90° instead of 180°'
                ]
            },

            angles_in_trigonometry: {
                'SOHCAHTOA Errors': [
                    'Confusing adjacent and opposite sides — opposite is ALWAYS the side across from the angle; adjacent is the non-hypotenuse side next to the angle',
                    'Using SOHCAHTOA in non-right-angled triangles without first identifying the right angle',
                    'Dividing hypotenuse by opposite for sin instead of opposite by hypotenuse'
                ],
                'CAST Diagram Errors': [
                    'Forgetting that sin is positive in both the 1st and 2nd quadrants',
                    'Not adjusting the reference angle when finding obtuse/reflex angles: sin(150°) = sin(30°) not −sin(30°)',
                    'Confusing the CAST diagram with compass bearings'
                ],
                'Sine and Cosine Rule Errors': [
                    'Using the sine rule when the cosine rule is needed (SSS or SAS requires cosine rule)',
                    'Forgetting to check for the ambiguous case (two possible triangles) when using the sine rule with SSA',
                    'Incorrect rearrangement of the cosine rule when finding an angle: cos A = (b²+c²−a²)/(2bc), NOT (a²−b²−c²)/(2bc)'
                ],
                'Radian Errors': [
                    'Adding degrees and radians without converting first',
                    'Forgetting that π radians = 180°, not 360°',
                    'Using degrees when the calculator is in radian mode (or vice versa)'
                ]
            },

            angles_in_transformations: {
                'Rotation Errors': [
                    'Confusing clockwise and anticlockwise — positive angles are anticlockwise by convention',
                    'Applying rotation rules about the origin to rotations about other centres without first translating',
                    'Using the wrong rule: (x,y)→(−y,x) is 90° anticlockwise; (x,y)→(y,−x) is 90° clockwise'
                ],
                'Reflection Errors': [
                    'Reflecting in y = x using rule (x,y)→(−y,−x) instead of (y,x)',
                    'Forgetting that reflection reverses orientation — the image is a mirror image, not a rotation',
                    'Using the wrong mirror line equation'
                ],
                'Symmetry Errors': [
                    'Confusing order of rotational symmetry with number of lines of symmetry — these are different properties',
                    'Stating a shape has rotational symmetry of order 1 means it does have symmetry — order 1 means NO rotational symmetry (only maps to itself after 360°)',
                    'Forgetting that the minimum rotation angle = 360° ÷ order, not 360° ÷ (order − 1)'
                ]
            },

            angles_in_vectors: {
                'Dot Product Errors': [
                    'Computing dot product as |a||b|sin θ instead of |a||b|cos θ (confusing with cross product magnitude)',
                    'Forgetting to divide by both magnitudes: cos θ = a·b/(|a||b|), not just a·b',
                    'Calculating |a|² as (a₁+a₂)² instead of √(a₁²+a₂²) then squaring'
                ],
                'Angle Range Errors': [
                    'The angle between two vectors is always in [0°, 180°] — never a reflex angle',
                    'Confusing direction angle of a vector (from positive x-axis) with the angle between two vectors'
                ],
                'Perpendicularity/Parallel Errors': [
                    'Stating vectors are perpendicular when dot product is 1 instead of 0',
                    'Confusing parallel (one is scalar multiple of other) with equal (same magnitude and direction)',
                    'Forgetting that anti-parallel vectors (pointing opposite ways) have dot product = −|a||b|'
                ],
                '3D Direction Cosine Errors': [
                    'Forgetting the identity cos²α + cos²β + cos²γ = 1 as a verification check',
                    'Computing the angle with the x-axis as tan⁻¹(a₂/a₁) instead of cos⁻¹(a₁/|a|)'
                ]
            }
        };

        this.clarificationStrategies = {
            pattern_shapes: {
                method: 'Use F, Z, C, X shape mnemonics to identify parallel line angle pairs visually',
                effectiveness: 'Very high for corresponding, alternate, and co-interior angle identification'
            },
            triangulation_proof: {
                method: 'Always derive the polygon angle sum formula by drawing triangles — never just memorize',
                effectiveness: 'High for preventing formula errors and building genuine understanding'
            },
            unit_circle_construction: {
                method: 'Build the unit circle physically; read off coordinates as sin and cos values',
                effectiveness: 'Very high for extending trig ratios beyond 90° and understanding CAST'
            },
            cast_diagram: {
                method: 'Draw and memorize the CAST diagram with quadrant signs; apply before calculating any trig ratio',
                effectiveness: 'High for obtuse and reflex angle trig calculations'
            },
            always_verify_expansion: {
                method: 'For every circle theorem application, verify by calculating both sides of the theorem equation',
                effectiveness: 'Essential — catches central/inscribed confusion and cyclic quadrilateral errors'
            },
            rotation_matrices: {
                method: 'Learn the standard rotation matrices for 90°, 180°, 270° — apply systematically',
                effectiveness: 'High for preventing coordinate rotation errors'
            },
            dot_product_derivation: {
                method: 'Derive the dot product angle formula from the cosine rule every time until memorized',
                effectiveness: 'High for preventing formula inversion errors'
            },
            bearing_compass_diagram: {
                method: 'Always draw a North arrow and measure clockwise; write three digits',
                effectiveness: 'High for bearing measurement and direction errors'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "Can you sketch a diagram that represents {topic} from memory?",
                "How does {topic} connect to angle types you already know (acute, obtuse, reflex)?",
                "What real-world situations involve {topic}?"
            ],
            duringLearning: [
                "Does this angle relationship make sense? Can you verify it by measuring a diagram?",
                "How does this connect to {related_concept}?",
                "What tells you which angle rule to apply in this situation?",
                "Can you spot the pattern — what shape or configuration triggers this rule?",
                "Can you draw a clear, labelled diagram that shows every angle in this problem?"
            ],
            afterLearning: [
                "What are the main angle relationships in {topic} and when does each apply?",
                "What visual pattern or shape helps you identify which rule to use?",
                "What mistakes are most likely with {topic}?",
                "How would you explain the key rule of {topic} to a student who missed the lesson?",
                "What is the most important check you should always do after finding an unknown angle?"
            ],
            problemSolving: [
                "Have you drawn a clear, fully labelled diagram?",
                "What information is given and what are you finding?",
                "Which angle relationship applies here — what shape or configuration do you see?",
                "Have you stated the reason for each step (e.g., 'alternate angles; lines parallel')?",
                "Does your answer make sense? Are all angles positive and do they satisfy the relevant sum?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            parallel_lines_transversals: [
                {
                    scenario: "Railway Junction Design",
                    context: "A railway engineer is designing a junction where a new branch line crosses two existing parallel tracks. The branch line meets the first track at 65°.",
                    problem: "Find all angles at both crossing points. Which angle rule ensures the branch line crosses the second track at the same angle?",
                    application: "Corresponding angles (equal) confirm the branch crosses both parallel tracks at 65° and 115°.",
                    question: "Why is this angle consistency important for train safety at junctions?",
                    answer: "Consistent crossing angles ensure equal forces and wear on both tracks — engineering uses corresponding angle equality as a design principle.",
                    extension: "Calculate the acute angle between the two rail tracks if their gradients are m₁ = tan(65°) and m₂ = tan(115°)."
                },
                {
                    scenario: "Architectural Facade",
                    context: "An architect designs a building facade where two horizontal floors are connected by a diagonal staircase. The staircase makes a 72° angle with the lower floor.",
                    problem: "Find the angle the staircase makes with the upper floor using parallel line rules.",
                    application: "Co-interior angles: 72° + angle with upper floor = 180° → angle = 108°. Alternatively, alternate angles confirm 72° on the other side.",
                    question: "Why is the angle with the upper floor not also 72°?",
                    answer: "The staircase goes BETWEEN the floors — it forms co-interior angles (supplementary) with both floors, not alternate angles."
                }
            ],

            angles_in_polygons: [
                {
                    scenario: "Honeycomb Engineering",
                    context: "Bees construct honeycombs using regular hexagonal cells. An engineer is studying why this shape is used.",
                    problem: "Calculate the interior angle of a regular hexagon. Show why three hexagons meet perfectly at every vertex.",
                    application: "Interior angle = (6−2)×180°/6 = 120°. Three hexagons at a vertex: 3 × 120° = 360° — exactly fills the space with no gaps.",
                    question: "Why can't regular pentagons tile a plane? Calculate the gap angle.",
                    answer: "Regular pentagon interior angle = 108°. Three meet: 3 × 108° = 324° ≠ 360° — a gap of 36° prevents tiling."
                },
                {
                    scenario: "Stop Sign Design",
                    context: "Stop signs are regular octagons. A road safety engineer needs to calculate the angles for manufacturing.",
                    problem: "Find the interior and exterior angles of a regular octagon.",
                    application: "Interior = (8−2)×180°/8 = 135°. Exterior = 360°/8 = 45°.",
                    question: "How many stop signs placed side by side (exterior to exterior) would make a complete revolution around a central point?",
                    answer: "Each exterior angle = 45°. Number = 360° ÷ 45° = 8 stop signs."
                }
            ],

            angles_in_triangles: [
                {
                    scenario: "Roof Truss Structural Analysis",
                    context: "A structural engineer designs a triangular roof truss. The two base angles are 55° each. She needs to verify the apex angle.",
                    problem: "Find the apex angle using the triangle angle sum. Verify using the isosceles triangle property.",
                    application: "Apex = 180° − 55° − 55° = 70°. Isosceles: base angles equal (55° = 55°) ✓.",
                    question: "If the engineer increases each base angle by 5°, what happens to the apex angle and the roof pitch?",
                    answer: "Base angles = 60° each. Apex = 60°. Steeper base angles → smaller apex → steeper, more pointed roof."
                },
                {
                    scenario: "GPS Triangulation",
                    context: "A GPS system uses three satellites to triangulate a position. Satellite A is at bearing 040° and satellite B is at bearing 125° from a ground station.",
                    problem: "Find the angle between the two satellite directions as seen from the ground station.",
                    application: "Angle between bearings = 125° − 40° = 85°. This is the angle at the ground station vertex of the triangulation triangle.",
                    question: "Why must the satellites not be aligned in a straight line (angle = 180°) for triangulation to work?",
                    answer: "If angle = 180°, the three points are collinear — forming a degenerate triangle with no unique position solution. The angle must be non-zero for a unique triangulation."
                }
            ],

            angles_in_circles: [
                {
                    scenario: "Satellite Dish Angle",
                    context: "A satellite dish must point at a precise angle to receive signals. The dish sits at point P on the Earth's surface; the satellite is at point S directly above the Earth's centre O.",
                    problem: "If the central angle ∠POS = 60° (P and S on a cross-section circle), find the angle ∠PES where E is any point on the Earth's surface between P and S on the major arc.",
                    application: "Inscribed angle = central angle ÷ 2 = 60° ÷ 2 = 30°.",
                    question: "Why do all ground stations on the major arc see the satellite at the same 30° elevation angle?",
                    answer: "All inscribed angles over the same arc are equal — every station on the major arc sees the satellite at exactly 30° regardless of its specific position."
                },
                {
                    scenario: "Cycling Velodrome Banking",
                    context: "A velodrome track is banked at angles determined by the circular arc. A cyclist at point C and a track designer at centre O study the angles.",
                    problem: "The central angle subtended by the banked section is 140°. Find the inscribed angle from any spectator point in the stands (on the major arc).",
                    application: "Inscribed angle = 140° ÷ 2 = 70°.",
                    question: "A spectator sits on the minor arc instead. What angle do they see?",
                    answer: "Inscribed angle on minor arc = (360° − 140°) ÷ 2 = 110°. The two inscribed angles (70° and 110°) are supplementary — as expected for cyclic quadrilateral opposite angles."
                }
            ],

            angles_in_coordinate_geometry: [
                {
                    scenario: "Ski Slope Gradient",
                    context: "A ski slope descends with gradient −0.577 (approximately −1/√3). A ski instructor calculates the actual slope angle for safety assessment.",
                    problem: "Find the angle of inclination of the ski slope.",
                    application: "m = −1/√3 = tan(θ). Reference angle = tan⁻¹(1/√3) = 30°. Since m < 0: θ = 180° − 30° = 150° (inclination). Slope angle below horizontal = 180° − 150° = 30°.",
                    question: "The ski patrol classifies slopes over 35° as extreme. Is this slope safe for beginners?",
                    answer: "Slope angle = 30° < 35°. It is classified as intermediate, not extreme — safe for confident beginners."
                },
                {
                    scenario: "Ship Navigation Bearing",
                    context: "A ship leaves port at bearing 072° and travels 150 km. It then changes to bearing 160° for 80 km.",
                    problem: "Find the direct distance and bearing from the final position back to port.",
                    application: "Resolve into components; use Pythagoras for distance; use tan⁻¹ for bearing of return journey.",
                    question: "At what point in the journey was the ship furthest north of the port?",
                    answer: "After leg 1, the ship is 150sin72° E and 150cos72° N. Leg 2 takes it south (160° bearing has south component). Furthest north = end of leg 1."
                }
            ],

            angles_in_trigonometry: [
                {
                    scenario: "Bridge Cable Tension",
                    context: "A suspension bridge cable makes an angle of 35° with the horizontal. The horizontal tension in the cable is 250 kN.",
                    problem: "Find the actual tension in the cable (the hypotenuse force) and the vertical component.",
                    application: "cos35° = horizontal/tension → tension = 250/cos35° ≈ 305 kN. Vertical = 305 × sin35° ≈ 175 kN.",
                    question: "If the bridge engineers want to reduce the vertical component to 150 kN, what angle must the cable make with the horizontal?",
                    answer: "sin θ = 150/305 ≈ 0.492 → θ = sin⁻¹(0.492) ≈ 29.5°. A shallower cable angle reduces vertical stress."
                },
                {
                    scenario: "Triangulating a Forest Fire",
                    context: "Two ranger stations A and B are 8 km apart. Ranger at A reports the fire at bearing 048° from A. Ranger at B reports the fire at bearing 310° from B.",
                    problem: "Use the sine rule to find the distance from each station to the fire.",
                    application: "Calculate interior angles of the triangle formed by A, B, and fire F. Apply sine rule: AF/sin(∠ABF) = AB/sin(∠AFB).",
                    question: "Which ranger should respond first, and what bearing should they travel?",
                    answer: "Calculate AF and BF; shorter distance = first responder. Their travel bearing is the original bearing to the fire from their station."
                }
            ],

            angles_in_transformations: [
                {
                    scenario: "Robotic Arm Programming",
                    context: "A factory robotic arm rotates about a fixed base. The arm starts pointing East (along positive x-axis) and must rotate to reach a component at position (−3, 3).",
                    problem: "Find the rotation angle required. Specify direction (clockwise or anticlockwise).",
                    application: "Target direction angle = tan⁻¹(3/−3) = 135° (2nd quadrant). Rotation = 135° anticlockwise.",
                    question: "If the arm overshoots by 15°, to what position does it point and what corrective rotation is needed?",
                    answer: "Overshoots to 150°. Current position = (cos150°, sin150°) = (−√3/2, 1/2) direction. Corrective rotation = 15° clockwise."
                },
                {
                    scenario: "Kaleidoscope Design",
                    context: "A kaleidoscope uses two mirrors meeting at 30° to create a repeating pattern.",
                    problem: "How many copies of the original image appear in total? What rotation does each pair of reflections produce?",
                    application: "Rotation = 2 × 30° = 60° per double reflection. Number of copies = 360° ÷ 60° = 6.",
                    question: "A designer wants 12 copies. What angle should the mirrors make?",
                    answer: "Rotation = 360°/12 = 30° per step. Mirror angle = 30°/2 = 15°."
                }
            ],

            angles_in_vectors: [
                {
                    scenario: "Solar Panel Optimisation",
                    context: "A solar panel faces direction v = (3, 4) (normalised direction vector). Sunlight comes in direction s = (1, −1) (normalised). The energy output is proportional to cos θ where θ is the angle between the panel normal and sunlight direction.",
                    problem: "Find the angle between the panel and the sunlight to calculate efficiency.",
                    application: "v·s = 3(1) + 4(−1) = −1. |v| = 5, |s| = √2. cos θ = −1/(5√2). θ = cos⁻¹(−1/(5√2)) ≈ 98.1°. Efficiency = |cos θ| × 100% ≈ 14%.",
                    question: "What direction should the panel face to maximise efficiency when sunlight direction is s = (1, −1)?",
                    answer: "Panel normal should be parallel to sunlight direction: v = k(1, −1). Direction angle = tan⁻¹(−1/1) = −45° = 315° from East. This gives θ = 0° → cos θ = 1 → 100% efficiency."
                },
                {
                    scenario: "Aircraft Crosswind Component",
                    context: "An aircraft's velocity vector is v = (200, 50) km/h (East, North components). The runway direction is d = (1, 0) (due East).",
                    problem: "Find the angle between the aircraft's approach and the runway, and calculate the crosswind component.",
                    application: "cos θ = v·d/(|v||d|) = 200/(√(40000+2500)) = 200/√42500 ≈ 0.970. θ ≈ 14°. Crosswind = |v|sin θ = √42500 × sin14° ≈ 50 km/h.",
                    question: "Regulations require crosswind component below 30 km/h for safe landing. Can this aircraft land safely?",
                    answer: "Crosswind ≈ 50 km/h > 30 km/h. The aircraft cannot land safely on this runway under current wind conditions."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall angle theorems, definitions, and formulas",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the four angle relationships formed when a transversal crosses parallel lines"
                },
                understand: {
                    description: "Explain why theorems work; connect geometric and algebraic representations",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why co-interior angles are supplementary using corresponding angles and the straight-line rule"
                },
                apply: {
                    description: "Use angle theorems to find unknown angles in given diagrams and problems",
                    verbs: ["Find", "Calculate", "Solve", "Apply", "Use"],
                    example: "Find all unknown angles in a diagram of two parallel lines cut by a transversal"
                },
                analyze: {
                    description: "Identify appropriate theorem; analyze structure; recognize when a rule applies",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Select"],
                    example: "Without calculating, determine which circle theorem applies to a given configuration"
                },
                evaluate: {
                    description: "Assess correctness of angle calculations; evaluate strategies; critique reasoning",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge"],
                    example: "A student claims ∠AOB = ∠ACB for an inscribed and central angle. Evaluate this claim."
                },
                create: {
                    description: "Construct angle configurations; design problems; derive results",
                    verbs: ["Construct", "Design", "Derive", "Create", "Formulate"],
                    example: "Design a cyclic quadrilateral problem where finding one angle requires applying three different circle theorems"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can measure angles accurately but cannot identify named relationships",
                        "Applies angle sum rules mechanically without understanding why",
                        "Does not provide geometric reasons when finding angles"
                    ],
                    support: ["Diagram-based exercises emphasizing pattern identification", "Require written reasons for every angle calculation", "Begin with simple parallel line diagrams before multi-step problems"]
                },
                developing: {
                    characteristics: [
                        "Identifies basic angle relationships in standard configurations",
                        "Can apply triangle and polygon angle sums correctly",
                        "Beginning to use circle theorems with prompting"
                    ],
                    support: ["Introduce non-standard orientations of familiar configurations", "Practice multi-step angle problems requiring two or more theorems", "Connect geometric diagrams to coordinate/algebraic representations"]
                },
                proficient: {
                    characteristics: [
                        "Selects appropriate angle theorem independently from diagram analysis",
                        "Completes multi-step angle problems across different topic areas",
                        "Provides clear geometric reasons for each step"
                    ],
                    support: ["Problems combining multiple angle topics (e.g., circle + parallel lines)", "Proof and derivation tasks", "Problems set in unfamiliar real-world contexts"]
                },
                expert: {
                    characteristics: [
                        "Derives angle theorems from first principles",
                        "Connects angle geometry to trigonometry, vectors, and coordinate geometry",
                        "Creates original problems and investigates generalisations"
                    ],
                    support: ["Investigate projective geometry and non-Euclidean geometry angle properties", "Research angle relationships in 3D geometry (dihedral angles, solid angles)", "Connect to group theory: symmetry groups defined by angle-preserving transformations"]
                }
            }
        };

        this.assessmentQuestions = {
            parallel_lines_transversals: {
                remember: "State the four angle pair names formed when a transversal crosses parallel lines and their relationships",
                understand: "Explain why co-interior angles sum to 180° using the corresponding angles rule and the straight-line rule",
                apply: "Two parallel lines are crossed by a transversal. One angle is (4x − 15)° and its co-interior angle is (2x + 45)°. Find x and all angles.",
                analyze: "A diagram shows two lines crossed by a transversal with marked angles of 73° and 107°. Are the two lines parallel? Identify which angle pair justifies your answer.",
                evaluate: "A student says 'if alternate angles are equal, the lines MIGHT be parallel.' Evaluate this statement.",
                create: "Design a problem using two parallel lines and a transversal where finding a specific angle requires using three different angle relationships."
            },
            angles_in_polygons: {
                remember: "Write the formula for the interior angle sum of an n-sided polygon and state the exterior angle sum.",
                understand: "Explain why the interior angle sum formula is (n−2)×180° using the triangulation method.",
                apply: "Find the number of sides of a regular polygon whose interior angle is 162°.",
                analyze: "Without using a formula, determine whether a regular polygon with interior angle 100° can tessellate. Explain fully.",
                evaluate: "A student says the interior angle sum of a concave pentagon is less than 540°. Evaluate this claim.",
                create: "Construct a hexagon (not regular) with all interior angles of integer degree measure. State your six angles and verify they sum correctly."
            },
            angles_in_triangles: {
                remember: "State the exterior angle theorem for triangles.",
                understand: "Prove that the angle sum of any triangle is 180° using parallel lines.",
                apply: "In triangle PQR, ∠P = (3x+5)°, ∠Q = (2x−10)°, ∠R = (4x−15)°. Find all angles.",
                analyze: "Triangle ABC has an exterior angle at C of 128°. Angle A is 15° more than angle B. Find angles A and B.",
                evaluate: "A student claims a triangle can have two obtuse angles. Evaluate this claim with a proof or counterexample.",
                create: "Create an isosceles triangle where the apex angle is exactly three times each base angle. Find all angles."
            },
            angles_in_circles: {
                remember: "State Thales' Theorem and the inscribed angle theorem.",
                understand: "Prove that opposite angles of a cyclic quadrilateral are supplementary using the inscribed angle theorem.",
                apply: "O is the centre of a circle. A, B, C are on the circumference. ∠AOB = 100°. Find ∠ACB when C is on (a) the major arc and (b) the minor arc.",
                analyze: "ABCD is a cyclic quadrilateral. ∠A = (2x+10)°, ∠C = (3x−20)°. Find x and state which theorem you used.",
                evaluate: "A student applies the inscribed angle theorem but the vertex is at the centre, not on the circumference. Evaluate the validity of their working.",
                create: "Design a multi-step circle theorem problem whose solution requires applying the tangent-chord theorem, the inscribed angle theorem, and the cyclic quadrilateral theorem."
            },
            angles_in_coordinate_geometry: {
                remember: "State the relationship between the gradient of a line and its angle of inclination.",
                understand: "Explain why the formula tan θ = |(m₁−m₂)/(1+m₁m₂)| gives the acute angle between two lines.",
                apply: "Find the angle between lines y = 3x + 1 and y = −½x + 4.",
                analyze: "A line has inclination angle 150°. Find its gradient and state whether it rises or falls from left to right.",
                evaluate: "A student says the bearing from A(2,3) to B(5,7) is tan⁻¹(4/3) ≈ 53°. Evaluate this answer.",
                create: "Design a navigation problem requiring a 3-leg journey where the final bearing back to start must be calculated from component vectors."
            },
            angles_in_trigonometry: {
                remember: "Write the sine rule and cosine rule, and state when each is used.",
                understand: "Explain why sin(150°) = sin(30°) using the unit circle and CAST diagram.",
                apply: "In triangle ABC, a = 7 cm, b = 10 cm, ∠A = 40°. Find all possible values of ∠B.",
                analyze: "Without a calculator, determine the exact value of sin(225°). Show all reasoning using the unit circle.",
                evaluate: "A student uses the cosine rule to find a missing angle and gets cos θ = −1.2. Evaluate whether this answer is possible.",
                create: "Create a real-world triangulation problem where the ambiguous case of the sine rule arises and explain both solutions in context."
            },
            angles_in_transformations: {
                remember: "Write the coordinate rule for rotation through 90° anticlockwise about the origin.",
                understand: "Explain why two reflections in lines meeting at angle θ produce a rotation through 2θ.",
                apply: "Find the image of point P(2, −3) after rotation through 270° anticlockwise about the origin.",
                analyze: "A shape has rotational symmetry of order 8. Find the minimum rotation angle and the angle between adjacent lines of symmetry.",
                evaluate: "A student reflects point (4, 1) in the line y = x and gets (1, 4). Then reflects in y = −x and gets (−4, −1). They claim the composite transformation is a rotation of 180°. Evaluate this claim.",
                create: "Design a composite transformation that combines a rotation and a reflection to produce a specific final image, and determine the single equivalent transformation."
            },
            angles_in_vectors: {
                remember: "Write the formula for the angle between two vectors using the dot product.",
                understand: "Prove the dot product formula cos θ = a·b/(|a||b|) using the cosine rule.",
                apply: "Find the angle between vectors a = (2, −1, 3) and b = (4, 2, −1). Give your answer to 1 decimal place.",
                analyze: "Determine whether vectors (3, 6) and (−2, 1) are perpendicular, parallel, or neither. Show all working.",
                evaluate: "A student calculates the angle between two vectors as 210°. Evaluate whether this is possible.",
                create: "Create a 3D navigation problem where the angle between the displacement vector and the vertical (0,0,1) gives the angle of elevation. Solve your problem fully."
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleParallelLinesTransversals(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Parallel Lines & Transversals",
            category: 'angles',
            summary: "When a transversal crosses two parallel lines, eight angles are formed with four key relationships: corresponding angles equal (F-pattern), alternate interior angles equal (Z-pattern), alternate exterior angles equal, and co-interior angles supplementary — summing to 180° (C-pattern). Vertically opposite angles are always equal regardless of parallelism.",

            definitions: {
                transversal: { definition: "A line that crosses two or more other lines at distinct points" },
                correspondingAngles: { definition: "Same position at each intersection; equal when lines are parallel", pattern: "F-shape" },
                alternateInteriorAngles: { definition: "Between parallel lines on opposite sides of transversal; equal when lines are parallel", pattern: "Z-shape" },
                coInteriorAngles: { definition: "Between parallel lines on same side of transversal; supplementary (sum 180°) when lines are parallel", pattern: "C-shape" },
                verticallyOpposite: { definition: "Across the intersection point; always equal", pattern: "X-shape" }
            },

            strategicApproach: {
                steps: [
                    "1. Verify or assume lines are parallel",
                    "2. Identify the transversal",
                    "3. Classify each angle pair using F, Z, C, or X pattern",
                    "4. Apply the appropriate relationship",
                    "5. State the reason clearly: 'corresponding angles; lines parallel'",
                    "6. Verify using supplementary pairs (angles on straight line = 180°)"
                ]
            },

            angleRelationships: {
                corresponding: { result: "Equal", condition: "Parallel lines", pattern: "F" },
                alternateInterior: { result: "Equal", condition: "Parallel lines", pattern: "Z" },
                alternateExterior: { result: "Equal", condition: "Parallel lines", pattern: "Extended Z" },
                coInterior: { result: "Supplementary (180°)", condition: "Parallel lines", pattern: "C" },
                verticallyOpposite: { result: "Equal", condition: "Always", pattern: "X" }
            },

            examples: [
                {
                    problem: "Parallel lines cut by transversal; one angle = 73°. Find all others.",
                    solution: { angles: "73°, 107°, 73°, 107° (repeated at each intersection)", reasoning: "Vertically opposite for pairs, corresponding for across intersections" }
                },
                {
                    problem: "Corresponding angles (3x + 15)° and (5x − 25)°. Find x.",
                    solution: { setup: "3x + 15 = 5x − 25 (corresponding angles equal)", answer: "x = 20; each angle = 75°" }
                }
            ],

            commonErrors: [
                { error: "Confusing co-interior (supplementary) with alternate (equal)", fix: "Check which SIDE of the transversal each angle is on" },
                { error: "Applying parallel-line rules to non-parallel lines", fix: "State the parallel condition before applying any rule" }
            ]
        };

        if (/co.?interior|allied|same.?side/i.test(input)) {
            content.focus = "coInteriorAngles";
        } else if (/corresponding|F.?pattern/i.test(input)) {
            content.focus = "correspondingAngles";
        } else if (/alternate|Z.?pattern/i.test(input)) {
            content.focus = "alternateAngles";
        }

        return content;
    }

    handleAnglesInPolygons(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Polygons",
            category: 'angles',
            summary: "The interior angle sum of any n-sided polygon is (n − 2) × 180°. The exterior angle sum of any convex polygon is always 360°. For regular polygons, each interior angle = (n−2)×180°/n and each exterior angle = 360°/n.",

            formulas: {
                interiorSum: "(n − 2) × 180°",
                regularInterior: "(n − 2) × 180° / n",
                exteriorSum: "360° (always, for any convex polygon)",
                regularExterior: "360° / n",
                interiorPlusExterior: "180° (linear pair at each vertex)"
            },

            polygonTable: {
                triangle: { n: 3, interiorSum: "180°", regularInterior: "60°", regularExterior: "120°" },
                quadrilateral: { n: 4, interiorSum: "360°", regularInterior: "90°", regularExterior: "90°" },
                pentagon: { n: 5, interiorSum: "540°", regularInterior: "108°", regularExterior: "72°" },
                hexagon: { n: 6, interiorSum: "720°", regularInterior: "120°", regularExterior: "60°" },
                octagon: { n: 8, interiorSum: "1080°", regularInterior: "135°", regularExterior: "45°" },
                decagon: { n: 10, interiorSum: "1440°", regularInterior: "144°", regularExterior: "36°" }
            },

            strategicApproach: {
                steps: [
                    "1. Count the number of sides n",
                    "2. Calculate interior angle sum: (n−2) × 180°",
                    "3. If regular: divide by n for each angle",
                    "4. If irregular: sum given angles, subtract from total to find missing angle",
                    "5. Use exterior angle sum (360°) as alternative method for regular polygons"
                ],
                findingN: {
                    givenInteriorAngle: "n = 360 / (180 − interior angle)",
                    givenExteriorAngle: "n = 360 / exterior angle"
                }
            },

            examples: [
                { problem: "Interior angle of regular polygon = 156°. Find n.", solution: "Exterior = 24°; n = 360/24 = 15 sides" },
                { problem: "Irregular pentagon with angles 100°, 110°, 120°, 95°, x°. Find x.", solution: "x = 540 − (100+110+120+95) = 540 − 425 = 115°" }
            ],

            commonErrors: [
                { error: "Using n×180° instead of (n−2)×180°", fix: "Remember: you triangulate from ONE vertex, giving (n−2) triangles" },
                { error: "Thinking exterior angle sum depends on n", fix: "Exterior sum is ALWAYS 360° for any convex polygon" }
            ]
        };

        return content;
    }

    handleAnglesInTriangles(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Triangles",
            category: 'angles',
            summary: "The angles in any triangle sum to 180°. An exterior angle equals the sum of the two non-adjacent interior angles. Isosceles triangles have equal base angles. Equilateral triangles have all angles equal to 60°.",

            theorems: {
                angleSum: { statement: "∠A + ∠B + ∠C = 180°", condition: "Any triangle" },
                exteriorAngle: { statement: "Exterior angle = sum of two non-adjacent interior angles", formula: "∠ACD = ∠A + ∠B" },
                isosceles: { statement: "If AB = AC, then ∠ABC = ∠ACB (base angles equal)" },
                equilateral: { statement: "All angles = 60°" }
            },

            triangleTypes: {
                byAngles: {
                    acute: "All angles < 90°",
                    right: "One angle = 90°; other two sum to 90°",
                    obtuse: "One angle > 90°"
                },
                bySides: {
                    equilateral: "All sides equal; all angles 60°",
                    isosceles: "Two sides equal; two base angles equal",
                    scalene: "All sides different; all angles different"
                }
            },

            strategicApproach: {
                steps: [
                    "1. Identify triangle type (isosceles, equilateral, right-angled, scalene)",
                    "2. Apply special properties first (if applicable)",
                    "3. Use angle sum: missing angle = 180° − (sum of known angles)",
                    "4. For exterior angles: exterior = sum of two non-adjacent interior angles",
                    "5. For algebraic problems: form equation using sum = 180°"
                ]
            },

            examples: [
                { problem: "Isosceles triangle; apex = 52°. Find base angles.", solution: "Base = (180−52)/2 = 64° each" },
                { problem: "Exterior angle = 135°; one interior = 70°. Find the other interior angle.", solution: "Other interior = 135° − 70° = 65°" }
            ],

            commonErrors: [
                { error: "Forgetting the angle sum is always 180° regardless of triangle size or shape", fix: "The theorem applies to ALL triangles — no exceptions" },
                { error: "Confusing exterior angle (= sum of two non-adjacent) with just the supplementary angle", fix: "Exterior angle = ∠A + ∠B, which also = 180° − ∠C" }
            ]
        };

        return content;
    }

    handleAnglesInCircles(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Circles",
            category: 'angles',
            summary: "Circle angle theorems all follow from the master theorem: central angle = 2 × inscribed angle over the same arc. Consequences include Thales' theorem (angle in semicircle = 90°), equal angles in the same segment, cyclic quadrilateral opposite angles summing to 180°, and the alternate segment theorem.",

            masterTheorem: {
                statement: "Central angle = 2 × inscribed angle subtending the same arc",
                formula: "∠AOB = 2 × ∠ACB",
                conditions: "O = centre; A, B, C on circumference; C on major arc"
            },

            theorems: {
                anglesInSameSegment: { statement: "All inscribed angles subtending the same arc are equal", derivation: "Each = half the central angle over that arc" },
                thales: { statement: "Angle in a semicircle = 90°", derivation: "Central angle = 180° (diameter); inscribed = 90°" },
                cyclicQuadrilateral: { statement: "Opposite angles of cyclic quadrilateral sum to 180°", formula: "∠A + ∠C = 180°; ∠B + ∠D = 180°" },
                alternateSegment: { statement: "Angle between tangent and chord = inscribed angle in alternate segment" },
                tangentRadius: { statement: "Radius to point of tangency ⊥ tangent" }
            },

            strategicApproach: {
                steps: [
                    "1. Identify the configuration: central angle, inscribed angle, tangent, chord, cyclic polygon",
                    "2. Identify which arc is subtended",
                    "3. Apply the master theorem or its consequence",
                    "4. State the theorem name as the reason",
                    "5. Verify using supplementary angle checks"
                ]
            },

            examples: [
                { problem: "Central angle = 142°. Find inscribed angle on major arc.", solution: "Inscribed = 142°/2 = 71°" },
                { problem: "Cyclic quadrilateral; ∠P = 83°, ∠Q = 97°. Find ∠R and ∠S.", solution: "∠R = 180°−83° = 97°; ∠S = 180°−97° = 83°" }
            ],

            commonErrors: [
                { error: "Central = inscribed (missing the factor of 2)", fix: "Central is DOUBLE the inscribed angle" },
                { error: "Applying cyclic quadrilateral theorem to non-cyclic quadrilaterals", fix: "All four vertices must lie ON the circle" }
            ]
        };

        return content;
    }

    handleAnglesInCoordinateGeometry(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Coordinate Geometry",
            category: 'angles',
            summary: "The gradient of a line equals the tangent of its angle of inclination: m = tan θ. The acute angle between two lines is found using tan θ = |(m₁−m₂)/(1+m₁m₂)|. Parallel lines have equal gradients; perpendicular lines have gradients with product −1. Bearings are measured clockwise from North as three-digit figures.",

            keyFormulas: {
                inclination: "m = tan θ; θ = tan⁻¹(m), adjusted to [0°, 180°)",
                angleBetweenLines: "tan θ = |(m₁−m₂)/(1+m₁m₂)|",
                parallel: "m₁ = m₂",
                perpendicular: "m₁ × m₂ = −1",
                bearingFromCoordinates: "Use atan2(ΔE, ΔN) adjusted to clockwise from North"
            },

            strategicApproach: {
                inclinationAngle: [
                    "1. Find or read the gradient m",
                    "2. Calculate tan⁻¹(|m|) for the reference angle",
                    "3. If m > 0: θ = reference angle (1st quadrant)",
                    "4. If m < 0: θ = 180° − reference angle (2nd quadrant)",
                    "5. If m = 0: θ = 0°; if undefined: θ = 90°"
                ],
                bearings: [
                    "1. Draw North arrow at the starting point",
                    "2. Draw the direction to destination",
                    "3. Measure CLOCKWISE from North",
                    "4. Express as 3 digits: 045° not 45°",
                    "5. Back bearing = bearing ± 180°"
                ]
            },

            examples: [
                { problem: "Gradient m = −1. Find angle of inclination.", solution: "tan⁻¹(1) = 45°; m < 0 so θ = 180° − 45° = 135°" },
                { problem: "Lines y = 2x+1 and y = −x+3. Find acute angle between them.", solution: "tan θ = |(2−(−1))/(1+2(−1))| = |3/(−1)| = 3 → θ = tan⁻¹(3) ≈ 71.6°" }
            ],

            commonErrors: [
                { error: "Forgetting quadrant adjustment for negative gradients", fix: "m < 0 means θ is in 2nd quadrant: θ = 180° − tan⁻¹(|m|)" },
                { error: "Measuring bearings anticlockwise", fix: "Bearings are ALWAYS clockwise from North" }
            ]
        };

        return content;
    }

    handleAnglesInTrigonometry(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Trigonometry",
            category: 'angles',
            summary: "Trigonometric ratios (sin, cos, tan) defined by SOHCAHTOA in right triangles extend to all angles via the unit circle. The CAST diagram shows sign patterns by quadrant. Special angles (30°, 45°, 60°) have exact values. The sine rule (a/sinA = b/sinB) and cosine rule (a² = b² + c² − 2bc·cosA) solve any triangle.",

            SOHCAHTOA: {
                sine: "sin θ = Opposite / Hypotenuse",
                cosine: "cos θ = Adjacent / Hypotenuse",
                tangent: "tan θ = Opposite / Adjacent = sin θ / cos θ"
            },

            specialAngles: {
                "0°": { sin: "0", cos: "1", tan: "0" },
                "30°": { sin: "½", cos: "√3/2", tan: "1/√3" },
                "45°": { sin: "1/√2", cos: "1/√2", tan: "1" },
                "60°": { sin: "√3/2", cos: "½", tan: "√3" },
                "90°": { sin: "1", cos: "0", tan: "undefined" }
            },

            CAST: {
                first: "All positive (0°–90°)",
                second: "Sin positive (90°–180°)",
                third: "Tan positive (180°–270°)",
                fourth: "Cos positive (270°–360°)"
            },

            sineRule: { formula: "a/sin A = b/sin B = c/sin C", use: "AAS, ASA, SSA" },
            cosineRule: { formula: "a² = b² + c² − 2bc·cos A", angleForm: "cos A = (b²+c²−a²)/(2bc)", use: "SSS, SAS" },

            radianConversion: { formula: "rad = deg × π/180; deg = rad × 180/π", key: "π rad = 180°" },

            examples: [
                { problem: "Find sin(135°).", solution: "135° in 2nd quadrant; sin positive; reference angle 45°; sin(135°) = sin(45°) = 1/√2" },
                { problem: "Triangle: a=9, b=11, C=64°. Find c.", solution: "c² = 81+121−2(9)(11)cos64° = 202−198(0.4384) = 202−86.8 = 115.2; c ≈ 10.7" }
            ],

            commonErrors: [
                { error: "Using SOHCAHTOA in non-right triangles", fix: "Identify the right angle first; use sine/cosine rule for non-right triangles" },
                { error: "Not applying CAST for obtuse/reflex angles", fix: "Always check the quadrant before determining sign of the ratio" }
            ]
        };

        if (/sine.?rule/i.test(input)) { content.focus = "sineRule"; }
        else if (/cosine.?rule/i.test(input)) { content.focus = "cosineRule"; }
        else if (/special.?angle|30|45|60/i.test(input)) { content.focus = "specialAngles"; }
        else if (/radian|unit.?circle/i.test(input)) { content.focus = "unitCircle"; }

        return content;
    }

    handleAnglesInTransformations(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Transformations & Movement",
            category: 'angles',
            summary: "Rotation transforms a figure by a given angle about a fixed centre. Standard rules: 90° anticlockwise (−y,x); 180° (−x,−y); 90° clockwise (y,−x). Reflection reverses orientation. Two reflections in lines meeting at θ = rotation through 2θ. Order of rotational symmetry = 360° ÷ minimum rotation angle.",

            rotationRules: {
                "90° anticlockwise": "(x, y) → (−y, x)",
                "180°": "(x, y) → (−x, −y)",
                "90° clockwise / 270° anticlockwise": "(x, y) → (y, −x)",
                "360°": "(x, y) → (x, y) — identity"
            },

            reflectionRules: {
                "x-axis": "(x, y) → (x, −y)",
                "y-axis": "(x, y) → (−x, y)",
                "y = x": "(x, y) → (y, x)",
                "y = −x": "(x, y) → (−y, −x)"
            },

            compositeReflections: {
                parallelLines: "Reflection in two parallel lines = translation through twice the distance between them",
                intersectingLines: "Reflection in two lines meeting at angle θ = rotation through 2θ"
            },

            rotationalSymmetry: {
                definition: "Order n: shape maps to itself n times in 360°",
                formula: "Minimum angle = 360° ÷ n",
                examples: { "Equilateral triangle": "n=3, 120°", "Square": "n=4, 90°", "Regular hexagon": "n=6, 60°" }
            },

            findingCentreOfRotation: [
                "1. Join corresponding points P and P'",
                "2. Construct perpendicular bisector of PP'",
                "3. Repeat for Q and Q'",
                "4. Centre = intersection of bisectors",
                "5. Angle = ∠POP' (measure with protractor)"
            ],

            examples: [
                { problem: "Rotate P(4, −2) by 270° anticlockwise about origin.", solution: "(x,y)→(y,−x): P'(−2, −4)" },
                { problem: "Two mirrors at 45°. Equivalent rotation?", solution: "2 × 45° = 90°" }
            ],

            commonErrors: [
                { error: "Confusing 90° CW and 90° ACW rules", fix: "90° ACW: (−y,x); 90° CW: (y,−x) — check with a simple point like (1,0)" },
                { error: "Stating reflections preserve orientation", fix: "Reflections REVERSE orientation; rotations PRESERVE it" }
            ]
        };

        return content;
    }

    handleAnglesInVectors(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Angles in Vectors",
            category: 'angles',
            summary: "The angle between two vectors is found using cos θ = (a·b)/(|a||b|) where a·b = a₁b₁ + a₂b₂ (+ a₃b₃). The result always gives θ ∈ [0°, 180°]. Two vectors are perpendicular if a·b = 0. The direction angle of a vector is found using tan⁻¹(y/x) with quadrant adjustment.",

            dotProduct: {
                algebraic: "a·b = a₁b₁ + a₂b₂ (2D); a₁b₁ + a₂b₂ + a₃b₃ (3D)",
                geometric: "a·b = |a||b|cos θ",
                angleFormula: "cos θ = (a·b) / (|a||b|)",
                properties: { commutative: "a·b = b·a", selfDot: "a·a = |a|²", distributive: "a·(b+c) = a·b + a·c" }
            },

            specialCases: {
                perpendicular: "a·b = 0 ⟺ θ = 90°",
                parallel: "|a·b| = |a||b| ⟺ θ = 0° or 180°",
                antiParallel: "a·b = −|a||b| ⟺ θ = 180°"
            },

            directionAngles: {
                "2D": "θ = tan⁻¹(y/x); adjust quadrant based on signs of x, y",
                "3D": "cos α = a₁/|a| (x-axis); cos β = a₂/|a| (y-axis); cos γ = a₃/|a| (z-axis)",
                identity: "cos²α + cos²β + cos²γ = 1"
            },

            strategicApproach: {
                steps: [
                    "1. Write both vectors in component form",
                    "2. Calculate dot product a·b",
                    "3. Calculate magnitudes |a| and |b|",
                    "4. Divide: cos θ = a·b / (|a||b|)",
                    "5. Apply inverse cosine: θ = cos⁻¹(...)",
                    "6. Verify θ ∈ [0°, 180°]"
                ]
            },

            examples: [
                { problem: "Angle between (1, 2) and (3, −1).", solution: "a·b = 3−2=1; |a|=√5; |b|=√10; cos θ = 1/√50; θ ≈ 81.9°" },
                { problem: "Are (2, 3) and (−6, 4) perpendicular?", solution: "a·b = −12+12=0; Yes, perpendicular ✓" }
            ],

            commonErrors: [
                { error: "Getting cos θ > 1 or < −1 due to arithmetic error", fix: "If |cos θ| > 1, an error has been made — check magnitudes and dot product" },
                { error: "Reporting angle > 180°", fix: "The angle between two vectors is always in [0°, 180°]" }
            ]
        };

        if (/perpendicular|dot.*product.*zero/i.test(input)) { content.focus = "perpendicularity"; }
        else if (/direction.*angle|bearing/i.test(input)) { content.focus = "directionAngles"; }
        else if (/3D|three.*dimension/i.test(input)) { content.focus = "3D"; }

        return content;
    }
}

