// Enhanced Transformation Mathematics Workbook - Comprehensive Transformation System
import { createCanvas, loadImage } from '@napi-rs/canvas';

export class EnhancedTransformationWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "transformation";
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
        this.initializeTransformationTopics();
        this.initializeTransformationLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            transformation: {
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
                stepBg: '#f3e5f5',
                stepText: '#4a148c',
                borderColor: '#42a5f5',
                contentBg: '#e8f5e9',
                contentText: '#1b5e20',
                diagramBg: '#fce4ec',
                structureBg: '#e0f7fa',
                practicalBg: '#fff9c4',
                practicalText: '#f57f17',
                translationBg: '#e3f2fd',
                reflectionBg: '#fce4ec',
                rotationBg: '#f3e5f5',
                dilationBg: '#e8f5e9',
                compositionBg: '#fff8e1',
                isometryBg: '#e0f7fa',
                vectorBg: '#ede7f6',
                matrixBg: '#e8eaf6'
            },
            geometry: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#880e4f',
                headerText: '#ffffff',
                sectionBg: '#fce4ec',
                sectionText: '#880e4f',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#fce4ec',
                resultText: '#ad1457',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e8eaf6',
                stepText: '#1a237e',
                borderColor: '#e91e63',
                contentBg: '#e0f2f1',
                contentText: '#004d40',
                diagramBg: '#f3e5f5',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                translationBg: '#e3f2fd',
                reflectionBg: '#fce4ec',
                rotationBg: '#f3e5f5',
                dilationBg: '#e8f5e9',
                compositionBg: '#fff8e1',
                isometryBg: '#e0f7fa',
                vectorBg: '#ede7f6',
                matrixBg: '#e8eaf6'
            }
        };

        this.colors = themes[this.theme] || themes.transformation;
    }

    initializeMathematicsSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'theta': 'θ',
            'phi': 'φ',
            'pi': 'π',
            'sigma': 'Σ',
            'omega': 'ω',
            'lambda': 'λ',
            'mu': 'μ',

            // Arrows
            'arrow': '→',
            'doubleArrow': '↔',
            'mapsto': '↦',
            'implies': '⟹',
            'iff': '⟺',
            'leftArrow': '←',
            'upArrow': '↑',
            'downArrow': '↓',
            'curvedArrow': '↺',
            'counterCurvedArrow': '↻',

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
            'degree': '°',
            'therefore': '∴',
            'because': '∵',
            'forAll': '∀',
            'exists': '∃',
            'element': '∈',
            'subset': '⊂',
            'perpendicular': '⊥',
            'parallel': '∥',
            'angle': '∠',
            'triangle': '△',
            'congruent': '≅',
            'similar': '∼',
            'notCongruent': '≇',

            // Transformation-specific
            'prime': '′',
            'doublePrime': '″',
            'vector': '⃗',
            'transpose': 'ᵀ',
            'composition': '∘',
            'imageOf': "T(P) = P'",
            'preimage': 'P',
            'image': "P'",

            // Sets and structures
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'complex': 'ℂ',
            'natural': 'ℕ',

            // Matrix notation
            'matrix2x2': '[[a,b],[c,d]]',
            'identityMatrix': 'I',
            'zeroMatrix': '0'
        };
    }

    initializeTransformationTopics() {
        this.mathematicsTopics = {
            translation: {
                patterns: [
                    /translat|slide|shift/i,
                    /vector.*move|move.*vector/i,
                    /horizontal.*shift|vertical.*shift/i,
                    /displacement/i
                ],
                handler: this.handleTranslation.bind(this),
                name: 'Translation',
                category: 'transformation',
                description: 'Moving every point of a figure the same distance in the same direction using a translation vector',
                difficulty: 'beginner',
                prerequisites: ['coordinate_plane', 'vectors_intro', 'ordered_pairs'],
                isometryType: 'direct',
                preserves: ['shape', 'size', 'orientation', 'angle_measures', 'side_lengths'],
                changes: ['position'],
                notation: 'T_(a,b)(x, y) = (x + a, y + b)'
            },

            reflection: {
                patterns: [
                    /reflect|flip|mirror/i,
                    /line.*symmetry|axis.*reflection/i,
                    /mirror.*image/i,
                    /reflect.*over|reflect.*across/i
                ],
                handler: this.handleReflection.bind(this),
                name: 'Reflection',
                category: 'transformation',
                description: 'Flipping a figure over a line of reflection to produce a mirror image',
                difficulty: 'intermediate',
                prerequisites: ['translation', 'perpendicular_lines', 'midpoint', 'coordinate_plane'],
                isometryType: 'opposite',
                preserves: ['shape', 'size', 'angle_measures', 'side_lengths'],
                changes: ['position', 'orientation'],
                notation: "r_l(P) = P'"
            },

            rotation: {
                patterns: [
                    /rotat|turn|revolv/i,
                    /center.*rotation|rotation.*center/i,
                    /clockwise|counter.*clockwise|anticlockwise/i,
                    /degree.*turn|turn.*degree/i
                ],
                handler: this.handleRotation.bind(this),
                name: 'Rotation',
                category: 'transformation',
                description: 'Turning a figure about a fixed point (center of rotation) by a given angle',
                difficulty: 'intermediate',
                prerequisites: ['reflection', 'angles', 'circle_geometry', 'trigonometry_basics'],
                isometryType: 'direct',
                preserves: ['shape', 'size', 'orientation', 'angle_measures', 'side_lengths'],
                changes: ['position'],
                notation: 'R_(O,θ)(P) = P\''
            },

            dilation: {
                patterns: [
                    /dilat|scale|enlarg|reduc/i,
                    /scale.*factor|factor.*scale/i,
                    /similar.*transform|transform.*similar/i,
                    /center.*dilation|dilation.*center/i
                ],
                handler: this.handleDilation.bind(this),
                name: 'Dilation',
                category: 'transformation',
                description: 'Scaling a figure from a center point by a scale factor, producing a similar figure',
                difficulty: 'intermediate',
                prerequisites: ['translation', 'ratio_proportion', 'similar_figures', 'coordinate_plane'],
                isometryType: 'non-isometry (similarity transformation)',
                preserves: ['shape', 'angle_measures', 'orientation'],
                changes: ['size', 'position', 'side_lengths'],
                notation: 'D_(O,k)(P) = P\''
            },

            composition: {
                patterns: [
                    /composit|combined.*transform|transform.*combined/i,
                    /glide.*reflect|reflect.*glide/i,
                    /successive.*transform|multiple.*transform/i,
                    /transform.*after.*transform/i
                ],
                handler: this.handleComposition.bind(this),
                name: 'Composition of Transformations',
                category: 'transformation',
                description: 'Applying two or more transformations in sequence; the output of one becomes the input of the next',
                difficulty: 'advanced',
                prerequisites: ['translation', 'reflection', 'rotation', 'dilation'],
                isometryType: 'depends on component transformations',
                preserves: 'depends on component transformations',
                changes: 'depends on component transformations',
                notation: '(T₂ ∘ T₁)(P) = T₂(T₁(P))'
            }
        };
    }

    initializeTransformationLessons() {
        this.lessons = {
            translation: {
                title: "Translation: Sliding Every Point by the Same Vector",
                concepts: [
                    "A translation moves every point of a figure the same distance in the same direction",
                    "Translations are described by a translation vector (a, b) — also written as ⟨a, b⟩ or as a column vector",
                    "Under translation T_(a,b), every point (x, y) maps to (x + a, y + b)",
                    "Translations are isometries: they preserve shape, size, angle measures, and side lengths",
                    "Translations preserve orientation — the figure is not flipped or rotated",
                    "Translating by (a, b) then (−a, −b) returns every point to its original position (inverse translation)"
                ],
                theory: "Translation is the simplest transformation: every point moves identically. Unlike rotation and reflection, translation has no fixed points — no point maps to itself unless the translation vector is (0, 0). Translations form a group under composition: combining two translations gives another translation, and every translation has an inverse. This makes translations fundamental to understanding symmetry in patterns and crystallography.",
                keyDefinitions: {
                    "Translation": "A transformation that maps every point P to a point P' such that PP' is a fixed vector — every point moves the same displacement",
                    "Translation Vector": "The vector (a, b) describing how far and in which direction every point moves; written ⟨a, b⟩ or as a column vector [a; b]",
                    "Pre-image": "The original figure before transformation; labeled with original letters (A, B, C)",
                    "Image": "The figure after transformation; labeled with prime notation (A', B', C')",
                    "Isometry": "A transformation that preserves distance between every pair of points; also called a rigid motion or congruence transformation",
                    "Displacement": "The vector from a pre-image point to its image; equal to the translation vector for every point",
                    "Fixed Point": "A point that maps to itself under a transformation; translations have no fixed points (unless vector is zero)"
                },
                translationRule: {
                    coordinate: "T_(a,b)(x, y) = (x + a, y + b)",
                    vectorForm: "P' = P + ⃗v where ⃗v = ⟨a, b⟩",
                    matrixForm: "[x'; y'] = [x; y] + [a; b]",
                    meaning: "a = horizontal shift (positive = right, negative = left); b = vertical shift (positive = up, negative = down)"
                },
                workedExamples: [
                    {
                        title: "Basic coordinate translation",
                        preimage: "Triangle ABC: A(1, 2), B(4, 2), C(4, 5)",
                        vector: "T_(3, −1)",
                        step1: "Apply rule (x, y) → (x + 3, y − 1) to each vertex",
                        step2: "A(1, 2) → A'(1+3, 2−1) = A'(4, 1)",
                        step3: "B(4, 2) → B'(4+3, 2−1) = B'(7, 1)",
                        step4: "C(4, 5) → C'(4+3, 5−1) = C'(7, 4)",
                        result: "Triangle A'B'C': A'(4,1), B'(7,1), C'(7,4)",
                        verification: "Check: AB = A'B' = 3 units ✓; BC = B'C' = 3 units ✓ (isometry preserved)"
                    },
                    {
                        title: "Finding the translation vector",
                        given: "P(2, 5) maps to P'(−1, 8)",
                        step1: "a = x' − x = −1 − 2 = −3",
                        step2: "b = y' − y = 8 − 5 = 3",
                        result: "Translation vector = ⟨−3, 3⟩ or T_(−3, 3)",
                        verification: "Apply to P: (2 + (−3), 5 + 3) = (−1, 8) = P' ✓"
                    },
                    {
                        title: "Inverse translation",
                        given: "A figure has been translated by T_(4, −2). Find the translation that returns it to the original position.",
                        step1: "Inverse translation vector = (−4, 2) — negate both components",
                        result: "Apply T_(−4, 2) to return to original",
                        verification: "T_(4,−2) followed by T_(−4, 2): (x+4−4, y−2+2) = (x, y) ✓"
                    }
                ],
                propertiesProofs: {
                    distancePreservation: {
                        statement: "Translation preserves the distance between any two points",
                        proof: "Let P₁(x₁, y₁) and P₂(x₂, y₂) map to P₁'(x₁+a, y₁+b) and P₂'(x₂+a, y₂+b). Distance P₁P₂ = √((x₂−x₁)² + (y₂−y₁)²). Distance P₁'P₂' = √((x₂+a−x₁−a)² + (y₂+b−y₁−b)²) = √((x₂−x₁)² + (y₂−y₁)²) = P₁P₂ ✓"
                    },
                    orientationPreservation: {
                        statement: "Translation preserves orientation (handedness) of figures",
                        explanation: "The relative order of vertices (clockwise or counterclockwise) is unchanged because all points shift identically — no flip occurs"
                    }
                },
                vectorNotations: {
                    componentForm: "⟨a, b⟩",
                    columnVector: "[a; b]",
                    ijNotation: "aî + bĵ",
                    coordinateRule: "(x, y) → (x + a, y + b)",
                    mappingNotation: "T_(a,b)"
                },
                specialTranslations: {
                    identity: "T_(0,0): zero vector; every point maps to itself",
                    horizontal: "T_(a,0): horizontal slide only; y-coordinates unchanged",
                    vertical: "T_(0,b): vertical slide only; x-coordinates unchanged",
                    diagonal: "T_(a,b) with a ≠ 0 and b ≠ 0: diagonal movement"
                },
                compositionOfTranslations: {
                    rule: "T_(a₂,b₂) ∘ T_(a₁,b₁) = T_(a₁+a₂, b₁+b₂)",
                    commutativity: "Translations commute: T₁ ∘ T₂ = T₂ ∘ T₁",
                    example: "T_(3,2) ∘ T_(1,−4) = T_(4,−2)"
                },
                applications: [
                    "Computer graphics: moving sprites and UI elements without rotation",
                    "Physics: describing uniform displacement of objects",
                    "Architecture: generating repeated structural patterns",
                    "Cartography: shifting coordinate systems between map projections",
                    "Crystallography: describing periodic lattice patterns",
                    "Animation: keyframe interpolation between positions"
                ]
            },

            reflection: {
                title: "Reflection: Mirror Images Across Lines",
                concepts: [
                    "A reflection flips a figure across a line of reflection, producing a mirror image",
                    "The line of reflection is the perpendicular bisector of every segment joining a pre-image point to its image",
                    "Every point on the line of reflection is its own image (fixed points of the reflection)",
                    "Reflections are isometries: they preserve shape, size, and angle measures",
                    "Reflections reverse orientation — they change the handedness of the figure",
                    "Two successive reflections across parallel lines produce a translation; across intersecting lines produce a rotation"
                ],
                theory: "Reflection is an opposite isometry: it preserves distances but reverses orientation. Unlike translation and rotation, reflection cannot be achieved by physically moving a rigid figure in the plane — the figure must be lifted out of the plane and flipped. This is why reflected figures are mirror images rather than rotated copies. Reflections are their own inverses: applying the same reflection twice returns to the original.",
                keyDefinitions: {
                    "Reflection": "A transformation that maps each point P to a point P' such that the line of reflection is the perpendicular bisector of PP'",
                    "Line of Reflection": "The fixed line across which the figure is flipped; every point on this line is its own image",
                    "Mirror Line": "Alternative name for the line of reflection",
                    "Opposite Isometry": "An isometry that reverses orientation; reflection is the only opposite isometry among the four basic transformations",
                    "Perpendicular Bisector": "A line that is perpendicular to a segment and passes through its midpoint; the line of reflection bisects and is perpendicular to every PP' segment",
                    "Fixed Points": "Points that map to themselves; every point on the line of reflection is a fixed point",
                    "Orientation": "The clockwise or counterclockwise order of vertices; reflection reverses orientation"
                },
                reflectionRules: {
                    overXAxis: {
                        rule: "(x, y) → (x, −y)",
                        description: "x-coordinate unchanged; y-coordinate negated",
                        example: "P(3, 4) → P'(3, −4)"
                    },
                    overYAxis: {
                        rule: "(x, y) → (−x, y)",
                        description: "y-coordinate unchanged; x-coordinate negated",
                        example: "P(3, 4) → P'(−3, 4)"
                    },
                    overYEqualsX: {
                        rule: "(x, y) → (y, x)",
                        description: "x and y coordinates swap",
                        example: "P(3, 4) → P'(4, 3)"
                    },
                    overYEqualsNegX: {
                        rule: "(x, y) → (−y, −x)",
                        description: "Coordinates swap and both negate",
                        example: "P(3, 4) → P'(−4, −3)"
                    },
                    overArbitraryHorizontal: {
                        line: "y = k",
                        rule: "(x, y) → (x, 2k − y)",
                        derivation: "Image y-coordinate = k − (y − k) = 2k − y"
                    },
                    overArbitraryVertical: {
                        line: "x = h",
                        rule: "(x, y) → (2h − x, y)",
                        derivation: "Image x-coordinate = h − (x − h) = 2h − x"
                    },
                    generalLine: {
                        line: "y = mx + c",
                        approach: "Use perpendicular from point to line; find foot of perpendicular; image is equidistant on the other side",
                        formula: "Requires solving a system of equations (beyond standard secondary level)"
                    }
                },
                matrixRepresentation: {
                    overXAxis: "[[1, 0], [0, −1]]",
                    overYAxis: "[[−1, 0], [0, 1]]",
                    overYEqualsX: "[[0, 1], [1, 0]]",
                    overYEqualsNegX: "[[0, −1], [−1, 0]]",
                    generalLine: "1/(1+m²) × [[1−m², 2m], [2m, m²−1]] (for y = mx through origin)"
                },
                workedExamples: [
                    {
                        title: "Reflection over the x-axis",
                        preimage: "Quadrilateral ABCD: A(1,3), B(4,3), C(5,1), D(2,1)",
                        line: "y = 0 (x-axis)",
                        rule: "(x, y) → (x, −y)",
                        images: "A'(1,−3), B'(4,−3), C'(5,−1), D'(2,−1)",
                        verification: "Midpoint of AA' = (1, 0) — lies on x-axis ✓; AA' ⊥ x-axis ✓"
                    },
                    {
                        title: "Reflection over a horizontal line y = 2",
                        preimage: "Point P(5, 6)",
                        line: "y = 2",
                        step1: "Distance from P to line: 6 − 2 = 4 units above",
                        step2: "Image is 4 units below the line: y' = 2 − 4 = −2",
                        step3: "Using formula: y' = 2(2) − 6 = 4 − 6 = −2",
                        result: "P'(5, −2)",
                        verification: "Midpoint of PP' = (5, (6+(−2))/2) = (5, 2) — lies on y = 2 ✓"
                    },
                    {
                        title: "Reflection over y = x",
                        preimage: "Triangle with vertices P(2, 5), Q(4, 1), R(6, 3)",
                        rule: "(x, y) → (y, x)",
                        images: "P'(5, 2), Q'(1, 4), R'(3, 6)",
                        verification: "Midpoint of PP' = ((2+5)/2, (5+2)/2) = (3.5, 3.5) lies on y = x ✓"
                    }
                ],
                symmetryConnections: {
                    lineSymmetry: "A figure has line symmetry if it maps to itself under reflection — the line of reflection is the axis of symmetry",
                    symmetryExamples: {
                        square: "4 lines of symmetry: 2 through midpoints of opposite sides, 2 through opposite vertices",
                        rectangle: "2 lines: through midpoints of opposite sides",
                        equilateralTriangle: "3 lines: through each vertex and midpoint of opposite side",
                        circle: "Infinite lines of symmetry: any diameter",
                        regularPolygon: "n lines of symmetry for a regular n-gon"
                    }
                },
                compositionResult: {
                    twoParallelLines: "Reflection over two parallel lines separated by distance d produces a translation of distance 2d perpendicular to both lines",
                    twoIntersectingLines: "Reflection over two lines intersecting at angle θ produces a rotation of 2θ about the intersection point"
                },
                applications: [
                    "Architecture: bilateral symmetry in building facades",
                    "Art and design: creating symmetric patterns and tessellations",
                    "Physics: reflection of light rays, mirror optics",
                    "Computer graphics: generating symmetric textures and models",
                    "Nature: bilateral symmetry in organisms (butterflies, leaves, faces)",
                    "Engineering: folding mechanisms and origami mathematics"
                ]
            },

            rotation: {
                title: "Rotation: Turning About a Fixed Center",
                concepts: [
                    "A rotation turns every point of a figure about a fixed point (center of rotation) by a given angle",
                    "Rotation is defined by three things: center of rotation, angle of rotation, and direction (clockwise or counterclockwise)",
                    "The center of rotation is the only fixed point — all other points move",
                    "Counterclockwise (CCW) rotations are positive; clockwise (CW) rotations are negative by convention",
                    "Rotations are direct isometries: they preserve shape, size, and orientation",
                    "Rotations of 360° (or 0°) are the identity transformation"
                ],
                theory: "Rotation is a direct isometry — the only rigid motion that has exactly one fixed point (the center). Every point on the figure travels along an arc of a circle centered at the rotation center, and all arcs subtend the same central angle. Rotation and reflection together generate all isometries of the plane: every isometry is either a translation, rotation, reflection, or glide reflection. Rotations about the origin have elegant matrix representations using trigonometric functions.",
                keyDefinitions: {
                    "Rotation": "A transformation that maps every point P to a point P' such that OP = OP' and ∠POP' = θ for a fixed center O and angle θ",
                    "Center of Rotation": "The fixed point about which all other points rotate; it maps to itself",
                    "Angle of Rotation": "The directed angle through which every point is turned; positive = counterclockwise (CCW)",
                    "Direct Isometry": "An isometry that preserves orientation; translation and rotation are direct isometries",
                    "Rotational Symmetry": "A figure has rotational symmetry if a rotation of less than 360° maps it to itself",
                    "Order of Rotational Symmetry": "The number of rotations less than 360° that map the figure to itself",
                    "Invariant Point": "A point that maps to itself; the center of rotation is the only invariant point"
                },
                rotationRulesAboutOrigin: {
                    rotate90CCW: {
                        rule: "(x, y) → (−y, x)",
                        matrix: "[[0, −1], [1, 0]]",
                        example: "P(3, 4) → P'(−4, 3)"
                    },
                    rotate180: {
                        rule: "(x, y) → (−x, −y)",
                        matrix: "[[−1, 0], [0, −1]]",
                        example: "P(3, 4) → P'(−3, −4)",
                        note: "Same as rotation by −180° or 180° in either direction"
                    },
                    rotate270CCW: {
                        rule: "(x, y) → (y, −x)",
                        matrix: "[[0, 1], [−1, 0]]",
                        example: "P(3, 4) → P'(4, −3)",
                        equivalence: "Same as 90° clockwise"
                    },
                    rotate90CW: {
                        rule: "(x, y) → (y, −x)",
                        matrix: "[[0, 1], [−1, 0]]",
                        example: "P(3, 4) → P'(4, −3)"
                    },
                    generalAngleAboutOrigin: {
                        rule: "(x, y) → (x·cosθ − y·sinθ, x·sinθ + y·cosθ)",
                        matrix: "[[cosθ, −sinθ], [sinθ, cosθ]]",
                        derivation: "From polar coordinates: if P = (r·cosα, r·sinα), then P' = (r·cos(α+θ), r·sin(α+θ)) = (r·cosα·cosθ − r·sinα·sinθ, r·cosα·sinθ + r·sinα·cosθ)"
                    }
                },
                rotationAboutArbitraryCenter: {
                    method: "Translate so center maps to origin → rotate about origin → translate back",
                    steps: [
                        "Step 1: Translate figure by (−h, −k) so center (h, k) maps to origin",
                        "Step 2: Apply rotation matrix for angle θ",
                        "Step 3: Translate back by (h, k)",
                        "Combined formula: P' = R_θ(P − O) + O where O = (h, k) and R_θ is rotation matrix"
                    ],
                    formula: {
                        x_prime: "(x−h)cosθ − (y−k)sinθ + h",
                        y_prime: "(x−h)sinθ + (y−k)cosθ + k"
                    }
                },
                workedExamples: [
                    {
                        title: "Rotation 90° CCW about origin",
                        preimage: "Triangle: A(1, 0), B(4, 0), C(4, 3)",
                        angle: "90° counterclockwise",
                        rule: "(x, y) → (−y, x)",
                        images: "A'(0, 1), B'(0, 4), C'(−3, 4)",
                        verification: "OA = OA' = 1 ✓; ∠AOA' = 90° ✓"
                    },
                    {
                        title: "Rotation 180° about origin",
                        preimage: "Rectangle: P(2, 1), Q(5, 1), R(5, 4), S(2, 4)",
                        angle: "180°",
                        rule: "(x, y) → (−x, −y)",
                        images: "P'(−2, −1), Q'(−5, −1), R'(−5, −4), S'(−2, −4)",
                        verification: "Midpoint of PP' = (0, 0) = origin ✓"
                    },
                    {
                        title: "Rotation 90° CW about center (2, 3)",
                        preimage: "Point P(5, 3)",
                        center: "(2, 3)",
                        step1: "Translate: (5−2, 3−3) = (3, 0)",
                        step2: "Rotate 90° CW: (x, y) → (y, −x) → (3, 0) → (0, −3)",
                        step3: "Translate back: (0+2, −3+3) = (2, 0)",
                        result: "P'(2, 0)",
                        verification: "OP = OP' = 3 units ✓; ∠POP' = 90° ✓"
                    }
                ],
                rotationalSymmetry: {
                    definition: "A figure has rotational symmetry of order n if rotating by 360°/n maps it to itself",
                    examples: {
                        square: "Order 4 (rotations of 90°, 180°, 270°, 360°)",
                        equilateralTriangle: "Order 3 (rotations of 120°, 240°, 360°)",
                        regularHexagon: "Order 6 (rotations of 60°, 120°, 180°, 240°, 300°, 360°)",
                        circle: "Infinite order",
                        scaleneTriangle: "Order 1 (only 360° = identity)"
                    }
                },
                applications: [
                    "Engineering: gear rotations, turbine blade design",
                    "Computer graphics: rotating 3D models and camera angles",
                    "Navigation: bearing calculations and compass headings",
                    "Robotics: joint angle calculations and arm positioning",
                    "Architecture: designing rotationally symmetric buildings and domes",
                    "Astronomy: modeling orbital mechanics and planet rotation"
                ]
            },

            dilation: {
                title: "Dilation: Scaling from a Center Point",
                concepts: [
                    "A dilation scales a figure from a center point by a scale factor k",
                    "The center of dilation is the only fixed point; all other points move away from or toward it",
                    "Scale factor k > 1: enlargement; 0 < k < 1: reduction; k = 1: identity; k < 0: point reflection plus scaling",
                    "Dilations preserve shape and angle measures but change size — producing similar figures",
                    "Dilation is NOT an isometry (unless k = ±1) — it is a similarity transformation",
                    "The ratio of corresponding side lengths equals |k|; the ratio of areas equals k²"
                ],
                theory: "Dilation is the only transformation that changes size while preserving shape — making it the defining transformation for similarity. Every pair of similar figures is related by a dilation (possibly composed with an isometry). The center of dilation, the pre-image point, and its image are always collinear, which allows the center to be found graphically by extending corresponding lines to their intersection. In the coordinate plane, dilation from the origin has the simplest rule: every coordinate is multiplied by k.",
                keyDefinitions: {
                    "Dilation": "A transformation that maps each point P to a point P' along the ray from center O through P, such that OP' = k·OP for a scale factor k",
                    "Scale Factor": "The ratio k = OP'/OP; determines the size change; also equals the ratio of any image length to corresponding pre-image length",
                    "Center of Dilation": "The fixed point from which all other points are scaled; lies on every line connecting pre-image and image points",
                    "Enlargement": "A dilation with |k| > 1; the image is larger than the pre-image",
                    "Reduction": "A dilation with 0 < |k| < 1; the image is smaller than the pre-image",
                    "Similarity Transformation": "A transformation that produces similar (same shape, proportional size) figures; dilations are the prime example",
                    "Ratio of Areas": "If scale factor is k, then area of image / area of pre-image = k²"
                },
                dilationRules: {
                    aboutOrigin: {
                        rule: "D_(O,k)(x, y) = (kx, ky)",
                        matrix: "[[k, 0], [0, k]] = k·I",
                        example: "D_(O,3)(2, 4) = (6, 12)"
                    },
                    aboutArbitraryCenter: {
                        center: "(h, k_c)",
                        rule: "D_((h,k_c), k)(x, y) = (h + k(x − h), k_c + k(y − k_c))",
                        derivation: "Translate center to origin → dilate → translate back",
                        example: "D_((2,3), 2)(5, 7): step1 (5−2, 7−3)=(3,4); step2 (6,8); step3 (6+2, 8+3)=(8,11)"
                    },
                    negativeScaleFactor: {
                        description: "k < 0 produces a dilation combined with a 180° rotation about the center",
                        example: "k = −2 enlarges by 2 AND rotates 180° about center",
                        rule: "D_(O,−k)(x, y) = (−kx, −ky) — image is on opposite side of center"
                    }
                },
                findingScaleFactor: {
                    fromCoordinates: "k = x'/x = y'/y (when center is origin)",
                    fromLengths: "k = image_length / pre-image_length",
                    fromCenter: "k = distance(O, P') / distance(O, P)",
                    areaRatio: "|k| = √(Area_image / Area_preimage)"
                },
                findingCenter: {
                    method: "Draw lines through corresponding vertices (A to A', B to B', etc.); the center is their intersection",
                    algebraic: "Solve the system: (x' − h) = k(x − h) and (y' − k_c) = k(y − k_c) for the center (h, k_c)"
                },
                workedExamples: [
                    {
                        title: "Dilation from origin with k = 2",
                        preimage: "Triangle: A(1, 2), B(3, 2), C(3, 5)",
                        scaleFactor: "k = 2",
                        rule: "(x, y) → (2x, 2y)",
                        images: "A'(2, 4), B'(6, 4), C'(6, 10)",
                        sideCheck: "AB = 2 units; A'B' = 4 units; ratio = 2 = k ✓",
                        areaCheck: "Area ABC = ½ × 2 × 3 = 3; Area A'B'C' = ½ × 4 × 6 = 12 = 4 × 3 = k² × original ✓"
                    },
                    {
                        title: "Dilation with fractional scale factor",
                        preimage: "Point P(8, 4)",
                        center: "Origin",
                        scaleFactor: "k = ¼",
                        result: "P'(2, 1)",
                        verification: "OP = √(64+16) = √80; OP' = √(4+1) = √5 = √80/4 = OP·¼ ✓"
                    },
                    {
                        title: "Finding scale factor from pre-image and image",
                        given: "P(3, 6) maps to P'(9, 18) under dilation from origin",
                        step1: "k = x'/x = 9/3 = 3",
                        step2: "Verify: y'/y = 18/6 = 3 ✓",
                        result: "Scale factor k = 3"
                    }
                ],
                similarityConnections: {
                    statement: "Two figures are similar if and only if one can be mapped to the other by a dilation (possibly composed with an isometry)",
                    similarityRatios: {
                        sides: "ratio of corresponding sides = |k|",
                        perimeters: "ratio of perimeters = |k|",
                        areas: "ratio of areas = k²",
                        volumes: "ratio of volumes = k³ (3D extension)"
                    }
                },
                applications: [
                    "Photography: zooming and scaling images",
                    "Cartography: map scales and scale factors",
                    "Architecture: scale models and technical drawings",
                    "Medical imaging: enlarging microscopic structures",
                    "Engineering: similar triangles in structural analysis",
                    "Astronomy: angular magnification in telescopes and microscopes"
                ]
            },

            composition: {
                title: "Composition of Transformations: Combining Multiple Movements",
                concepts: [
                    "Composition applies transformations in sequence: the image of one transformation becomes the pre-image of the next",
                    "The notation (T₂ ∘ T₁)(P) means apply T₁ first, then T₂ — right-to-left order",
                    "Composition of two reflections over parallel lines = translation",
                    "Composition of two reflections over intersecting lines = rotation",
                    "A glide reflection is the composition of a reflection and a translation parallel to the mirror line",
                    "Every isometry of the plane is either a translation, rotation, reflection, or glide reflection"
                ],
                theory: "The composition of transformations unifies all transformation types. The four isometries — translation, reflection, rotation, and glide reflection — together form the complete set of rigid motions of the plane. Composition is generally not commutative (T₂ ∘ T₁ ≠ T₁ ∘ T₂), meaning the ORDER in which transformations are applied matters. Understanding composition is essential for studying symmetry groups, tessellations, crystallographic patterns, and the algebraic structure of geometric symmetries.",
                keyDefinitions: {
                    "Composition": "The application of two or more transformations in sequence; denoted T₂ ∘ T₁ (apply T₁ first, then T₂)",
                    "Composite Transformation": "The single transformation equivalent to a sequence of transformations",
                    "Glide Reflection": "The composition of a reflection over a line and a translation parallel to that line; the only isometry not a rotation, reflection, or translation",
                    "Identity Transformation": "The transformation that maps every point to itself; denoted I or T_(0,0) for translation",
                    "Inverse Transformation": "The transformation that undoes another; T ∘ T⁻¹ = identity",
                    "Non-commutativity": "For most pairs of transformations, T₂ ∘ T₁ ≠ T₁ ∘ T₂ — order matters",
                    "Symmetry Group": "The set of all transformations that map a figure to itself, closed under composition"
                },
                compositionTheorems: {
                    parallelReflections: {
                        theorem: "The composition of reflections over two parallel lines l₁ and l₂ separated by distance d is a translation of magnitude 2d perpendicular to both lines",
                        direction: "The translation is in the direction from l₁ to l₂ (if reflecting in l₁ then l₂)",
                        example: "Reflect over x = 1 then x = 4 (distance = 3) → translation by 6 units in the positive x-direction"
                    },
                    intersectingReflections: {
                        theorem: "The composition of reflections over two lines intersecting at point P with angle θ is a rotation of 2θ about P",
                        direction: "CCW rotation if reflecting over l₁ then l₂ going counterclockwise",
                        example: "Reflect over x-axis then y-axis (perpendicular, θ = 90°) → rotation of 180° about origin"
                    },
                    glideReflection: {
                        definition: "Reflection over line l followed by translation parallel to l (or equivalently, translation then reflection)",
                        note: "The translation and reflection components commute when the translation is parallel to the mirror line",
                        isOwnInverse: false,
                        inverse: "Same reflection composed with the opposite translation"
                    }
                },
                compositionRules: {
                    twoTranslations: "T_(a₁,b₁) ∘ T_(a₂,b₂) = T_(a₁+a₂, b₁+b₂); always commutative",
                    translationAndRotation: "Generally not commutative; result depends on order",
                    twoRotationsSameCenter: "R_(O,θ₁) ∘ R_(O,θ₂) = R_(O,θ₁+θ₂); commutative for same center",
                    twoRotationsDifferentCenters: "Generally produces a rotation (unless angles sum to 360°, giving translation)",
                    reflectionTwice: "r_l ∘ r_l = identity; every reflection is its own inverse"
                },
                matrixComposition: {
                    principle: "Matrix multiplication corresponds to composition of linear transformations",
                    rule: "If T₁ has matrix M₁ and T₂ has matrix M₂, then T₂ ∘ T₁ has matrix M₂ × M₁",
                    example: "Rotation 90° CCW then reflection over x-axis: [[1,0],[0,−1]] × [[0,−1],[1,0]] = [[0,−1],[−1,0]]",
                    order: "Matrix multiplication is right-to-left: apply T₁ (right matrix) first"
                },
                workedExamples: [
                    {
                        title: "Composition: translation then reflection",
                        preimage: "Point P(1, 2)",
                        step1: "Apply T_(3,1): P → P'(4, 3)",
                        step2: "Apply r_(x-axis): P'(4, 3) → P''(4, −3)",
                        result: "P''(4, −3)",
                        orderMatters: "Reverse order — r_(x-axis) then T_(3,1): P → P'(1, −2) → P''(4, −1) ≠ (4, −3) ✓ Order matters!"
                    },
                    {
                        title: "Two reflections over parallel lines",
                        lines: "y = 1 and y = 4",
                        preimage: "P(3, 0)",
                        step1: "Reflect over y = 1: y' = 2(1) − 0 = 2 → P'(3, 2)",
                        step2: "Reflect over y = 4: y'' = 2(4) − 2 = 6 → P''(3, 6)",
                        displacement: "P to P'': vertical displacement = 6 − 0 = 6 = 2 × (4 − 1) = 2d ✓",
                        equivalentTranslation: "T_(0, 6)"
                    },
                    {
                        title: "Glide reflection",
                        reflection: "Over x-axis: (x, y) → (x, −y)",
                        translation: "T_(4, 0): (x, y) → (x + 4, y)",
                        preimage: "P(1, 3)",
                        step1: "Reflect: P(1, 3) → P'(1, −3)",
                        step2: "Translate: P'(1, −3) → P''(5, −3)",
                        result: "P''(5, −3)",
                        note: "Glide reflections are NOT isometries of the square — they arise in frieze and wallpaper symmetry patterns"
                    }
                ],
                fourIsometries: {
                    summary: "Every isometry of the plane belongs to exactly one of these four types:",
                    translation: "Direct; no fixed points (unless vector = 0); preserves orientation",
                    rotation: "Direct; one fixed point (center); preserves orientation",
                    reflection: "Opposite; line of fixed points; reverses orientation",
                    glideReflection: "Opposite; no fixed points; reverses orientation"
                },
                symmetryGroups: {
                    cyclicGroup: "Cₙ: rotational symmetries only; order n; e.g., pinwheel, n-blade propeller",
                    dihedralGroup: "Dₙ: rotational + reflection symmetries; order 2n; e.g., regular n-gon",
                    friezeGroups: "7 distinct frieze symmetry patterns (infinite strip patterns)",
                    wallpaperGroups: "17 distinct wallpaper symmetry patterns (plane-tiling patterns)"
                },
                applications: [
                    "Computer graphics: chaining transformation matrices for 3D rendering",
                    "Robotics: forward kinematics composing joint rotations and translations",
                    "Crystallography: 17 wallpaper groups describe all possible crystal symmetries",
                    "Art and architecture: Islamic geometric patterns use composition of reflections and rotations",
                    "Animation: composing bone transforms in character skeletal animation",
                    "Quantum mechanics: symmetry groups of physical systems (Lie groups)"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ============================================================
            // PRACTICAL 1: COORDINATE TRANSFORMATION INVESTIGATION
            // ============================================================

            coordinate_transformation_lab: {
                name: "Coordinate Transformation Laboratory: Discovering Rules Through Investigation",
                relatedTopics: ['translation', 'reflection', 'rotation', 'dilation'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "René Descartes (1596–1650)",
                    work: "La Géométrie (1637)",
                    contribution: "Descartes invented the coordinate plane, enabling algebraic description of geometric transformations for the first time",
                    significance: "Before Descartes, transformations could only be described geometrically; coordinates allowed transformation rules to be written as algebraic formulas",
                    development: "Euler, Gauss, and later Klein formalized transformation groups; Felix Klein's Erlangen Programme (1872) defined geometry itself through transformation groups",
                    modernUse: "Every computer graphics system (OpenGL, DirectX, Unity, Blender) uses coordinate transformation matrices derived from the rules students discover in this practical"
                },
                practicalMathematics: {
                    title: "Discovering Transformation Rules Through Coordinate Investigation",
                    hypothesis: "If each transformation has a consistent algebraic rule, then applying the transformation to any point in the coordinate plane should produce a predictable image according to that rule",
                    purpose: "Investigate each transformation type by plotting pre-images and images, measuring coordinates, and deriving the algebraic rule",
                    materials: [
                        "Large coordinate grid paper (−10 to 10 on both axes, or larger)",
                        "Ruler, protractor, and compass",
                        "Coloured pencils (different colours for pre-image and image)",
                        "Transparent reflection mirror (Mira or similar) for reflection investigations",
                        "Tracing paper (for rotation investigations)",
                        "Calculator",
                        "Transformation investigation worksheet"
                    ],
                    procedure: [
                        "INVESTIGATION 1: Translation Discovery",
                        "1. Plot the flag shape with vertices: A(1,1), B(1,4), C(3,4) on your grid",
                        "2. Move every point 4 units right and 2 units up",
                        "3. Plot the new vertices and label A', B', C'",
                        "4. Record: A(1,1)→A'(__, __); B(1,4)→B'(__, __); C(3,4)→C'(__, __)",
                        "5. Find the pattern: what was added to each x-coordinate? Each y-coordinate?",
                        "6. Write the translation rule: (x, y) → (x + ___, y + ___)",
                        "7. Test your rule on a new point D(0, 0) — where should D' be?",
                        "8. What STAYS THE SAME? (distances, angles, orientation) What CHANGES? (position)",
                        "",
                        "INVESTIGATION 2: Reflection Discovery",
                        "9. Plot triangle PQR: P(1,2), Q(4,2), R(4,5)",
                        "10. Using a Mira or by folding, reflect over the x-axis",
                        "11. Record image coordinates: P'(__, __), Q'(__, __), R'(__, __)",
                        "12. Compare each point with its image — what changed? What stayed the same?",
                        "13. Write the rule: (x, y) → (__, __) for reflection over x-axis",
                        "14. Now reflect the ORIGINAL triangle over the y-axis",
                        "15. Record and write the rule for reflection over y-axis",
                        "16. Reflect over the line y = x (hint: swap your coordinates, then check with Mira)",
                        "17. What happens to orientation? Does ABCDEF order stay clockwise or change?",
                        "",
                        "INVESTIGATION 3: Rotation Discovery",
                        "18. Plot arrow shape: A(0,0), B(3,0), C(3,1), D(4,0.5), E(3,−1), F(3,0) — closed arrow",
                        "19. Rotate 90° counterclockwise about the origin using tracing paper",
                        "20. Record each image coordinate",
                        "21. Pattern hunt: for 90° CCW, what happened to x? What happened to y?",
                        "22. Write rule: (x, y) → (__, __)",
                        "23. Rotate the ORIGINAL 180° — record coordinates, write rule",
                        "24. Rotate the ORIGINAL 270° CCW — record coordinates, write rule",
                        "25. Complete the rotation rules table for 90°CW, 90°CCW, 180°, 270°CCW",
                        "",
                        "INVESTIGATION 4: Dilation Discovery",
                        "26. Plot triangle: A(1,1), B(3,1), C(3,4)",
                        "27. Draw rays from origin through each vertex",
                        "28. Plot points on each ray that are TWICE as far from origin",
                        "29. Record image coordinates: A'(__, __), B'(__, __), C'(__, __)",
                        "30. What is the ratio of each image coordinate to its pre-image coordinate?",
                        "31. Write the rule for dilation from origin with scale factor k = 2",
                        "32. Repeat with k = ½ (halve the distance from origin)",
                        "33. Measure side lengths: AB, A'B'. What is the ratio? How does it relate to k?",
                        "34. Measure areas. What is the ratio? How does it relate to k?",
                        "",
                        "SYNTHESIS AND COMPARISON",
                        "35. Complete the transformation comparison table",
                        "36. Which transformations preserve distance? (isometries)",
                        "37. Which transformations preserve orientation?",
                        "38. Which transformation changes size?",
                        "39. How do you determine which transformation was applied given only pre-image and image?"
                    ],
                    dataTable: [
                        ["Transformation", "Rule (x,y)→", "Preserves Distance?", "Preserves Orientation?", "Fixed Points", "Type"],
                        ["Translation T_(a,b)", "(x+a, y+b)", "Yes", "Yes", "None", "Direct Isometry"],
                        ["Reflection over x-axis", "(x, −y)", "Yes", "No (reverses)", "Points on x-axis", "Opposite Isometry"],
                        ["Reflection over y-axis", "(−x, y)", "Yes", "No (reverses)", "Points on y-axis", "Opposite Isometry"],
                        ["Reflection over y=x", "(y, x)", "Yes", "No (reverses)", "Points on y=x", "Opposite Isometry"],
                        ["Rotation 90° CCW (O)", "(−y, x)", "Yes", "Yes", "Origin only", "Direct Isometry"],
                        ["Rotation 180° (O)", "(−x, −y)", "Yes", "Yes", "Origin only", "Direct Isometry"],
                        ["Dilation k=2 (O)", "(2x, 2y)", "No", "Yes", "Origin only", "Similarity Trans."],
                        ["Dilation k=½ (O)", "(x/2, y/2)", "No", "Yes", "Origin only", "Similarity Trans."]
                    ],
                    conclusions: [
                        "Each transformation has a consistent algebraic rule that applies to every point in the plane",
                        "Translation adds constants to coordinates; reflection negates or swaps; rotation uses combinations of negation and swapping; dilation multiplies",
                        "Isometries (translation, reflection, rotation) preserve all distances — lengths and angles are unchanged",
                        "Only dilation changes distances between points (side lengths scale by |k|, areas scale by k²)",
                        "Reflection is the only basic transformation that reverses orientation",
                        "The coordinate rules can be systematically derived from the geometric definitions"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 2: REFLECTION AND SYMMETRY INVESTIGATION
            // ============================================================

            reflection_symmetry_investigation: {
                name: "Mirror Lines and Symmetry: A Practical Reflection Investigation",
                relatedTopics: ['reflection', 'composition'],
                category: 'geometry',
                historicalBackground: {
                    context: "Bilateral symmetry has been recognized since ancient Egypt and Greece",
                    vitruvius: "Roman architect Vitruvius (c. 75 BCE–15 CE) wrote extensively about bilateral symmetry in The Ten Books on Architecture",
                    crystallography: "The 17 wallpaper symmetry groups, fully classified by 1891, describe all possible reflective symmetry patterns in periodic designs",
                    modernScience: "Symmetry breaking is a central concept in particle physics; Nobel Prize 2008 awarded for work on CP violation (asymmetry in particle interactions)",
                    artConnection: "Islamic geometric art, Celtic knotwork, and the Alhambra Palace all use reflection symmetry compositions"
                },
                practicalMathematics: {
                    title: "Investigating Lines of Symmetry and Reflection Properties",
                    hypothesis: "If a line is a line of symmetry for a figure, then reflecting the figure over that line maps every vertex to another vertex of the figure, and the line is the perpendicular bisector of each segment connecting corresponding points",
                    purpose: "Investigate lines of symmetry in geometric figures, verify the perpendicular bisector property of reflection, and explore how composition of two reflections produces rotation or translation",
                    materials: [
                        "Mira (transparent reflection mirror) or polished metal strip",
                        "Plain paper and tracing paper",
                        "Ruler, protractor, and compass",
                        "Scissors (for folding activities)",
                        "Pre-printed regular polygon shapes (equilateral triangle, square, regular pentagon, regular hexagon)",
                        "Coloured pencils",
                        "String or thread for perpendicular bisector construction"
                    ],
                    procedure: [
                        "PART A: Discovering Lines of Symmetry",
                        "1. Take the printed square. Fold it so one half lies exactly on the other.",
                        "   Record the fold line — this is a line of symmetry",
                        "2. Find ALL possible fold lines for the square. How many are there?",
                        "3. Repeat for equilateral triangle, rectangle, regular pentagon, regular hexagon",
                        "4. Record in the symmetry table: number of lines of symmetry for each shape",
                        "5. Pattern: how does the number of lines of symmetry relate to the number of sides for regular polygons?",
                        "",
                        "PART B: The Perpendicular Bisector Property",
                        "6. Draw a line l (your mirror line) and a point P not on the line",
                        "7. Use the Mira to find P' (the reflection of P)",
                        "8. Connect P and P' with a segment. Measure the angle that PP' makes with l",
                        "   → Should be 90°. Verify.",
                        "9. Find the midpoint M of PP'. Is M on line l?",
                        "   → Should be yes. Verify.",
                        "10. Conclusion: l is the perpendicular bisector of PP'",
                        "11. Repeat for 3 different positions of P relative to l",
                        "12. What happens when P is ON the line l? Where is P'?",
                        "",
                        "PART C: Reflecting a Figure and Checking Preservation",
                        "13. Draw a scalene triangle ABC on one side of line l",
                        "14. Reflect each vertex using the Mira. Label images A', B', C'",
                        "15. Measure: AB and A'B'. Are they equal?",
                        "16. Measure: ∠ABC and ∠A'B'C'. Are they equal?",
                        "17. Are the triangles congruent? What type of congruence? (SSS, SAS, etc.?)",
                        "18. Label the vertices going around each triangle. Is the order the same (both CW or both CCW)?",
                        "   → You should observe the order REVERSES — this is the orientation reversal.",
                        "",
                        "PART D: Composition of Two Reflections",
                        "19. Draw two PARALLEL lines l₁ (x = 1) and l₂ (x = 4) on a large grid",
                        "20. Plot point P(0, 3)",
                        "21. Reflect P over l₁ → find P'",
                        "22. Reflect P' over l₂ → find P''",
                        "23. What single transformation maps P directly to P''?",
                        "24. Measure: how far did P move? How does this relate to the distance between l₁ and l₂?",
                        "",
                        "25. Now draw two INTERSECTING lines m₁ (x-axis) and m₂ (line y = x, angle = 45°)",
                        "26. Plot point Q(4, 0)",
                        "27. Reflect Q over m₁ → find Q'. Reflect Q' over m₂ → find Q''",
                        "28. What single transformation maps Q to Q''?",
                        "29. Measure ∠QOQ'' where O is the intersection of m₁ and m₂",
                        "   → Should equal 2 × 45° = 90°. Verify."
                    ],
                    dataTable: [
                        ["Shape", "Lines of Symmetry", "Rotational Symmetry Order", "Angles of Rot. Symmetry"],
                        ["Scalene Triangle", "0", "1", "360° only"],
                        ["Isosceles Triangle", "1", "1", "360° only"],
                        ["Equilateral Triangle", "3", "3", "120°, 240°, 360°"],
                        ["Rectangle (non-square)", "2", "2", "180°, 360°"],
                        ["Square", "4", "4", "90°, 180°, 270°, 360°"],
                        ["Regular Pentagon", "5", "5", "72°, 144°, 216°, 288°, 360°"],
                        ["Regular Hexagon", "6", "6", "60°, 120°, 180°, 240°, 300°, 360°"],
                        ["Circle", "Infinite", "Infinite", "Any angle"]
                    ],
                    conclusions: [
                        "A regular n-gon has exactly n lines of symmetry and rotational symmetry of order n",
                        "The line of reflection is always the perpendicular bisector of every PP' segment",
                        "Reflection preserves all distances and angle measures but reverses orientation",
                        "Two reflections over parallel lines = translation of distance 2d (twice the gap between lines)",
                        "Two reflections over intersecting lines = rotation of angle 2θ (twice the angle between lines)",
                        "The composition results explain how all plane isometries can be generated from reflections alone"
                    ],
                    realWorldConnections: [
                        "Architecture: bilateral symmetry in building facades (Parthenon, Taj Mahal, most classical buildings)",
                        "Nature: bilateral symmetry in animal bodies; radial symmetry in flowers and starfish",
                        "Art: Islamic geometric patterns are entirely generated by compositions of reflections",
                        "Crystallography: all crystal systems are defined by their reflection and rotation symmetries",
                        "Medicine: facial symmetry is used in reconstructive surgery planning and orthodontics"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 3: ROTATION DISCOVERY USING TRACING PAPER
            // ============================================================

            rotation_tracing_paper_investigation: {
                name: "Rotation Exploration: Tracing Paper and the Protractor Method",
                relatedTopics: ['rotation', 'composition'],
                category: 'geometry',
                historicalBackground: {
                    context: "Rotation as a mathematical concept was formalized by Leonhard Euler in the 18th century",
                    eulerRotationTheorem: "Euler's Rotation Theorem (1775): any rotation in 3D space about a fixed point can be described as a single rotation about an axis through that point",
                    planarHistory: "In the 2D plane, rotation was described algebraically using complex numbers by Gauss and Argand (early 1800s): multiplying by e^(iθ) rotates by angle θ",
                    engineering: "Rotation matrices are fundamental to mechanical engineering, robotics, aeronautics, and computer graphics",
                    artHistory: "Islamic geometric artists intuitively discovered rotational symmetry compositions centuries before formal mathematical description"
                },
                practicalMathematics: {
                    title: "Discovering Rotation Rules and Rotational Symmetry",
                    hypothesis: "For any rotation about a fixed center O through angle θ, each point P travels along a circular arc centered at O, and OP = OP' always — the transformation preserves the distance from the center",
                    purpose: "Use tracing paper to investigate rotations, derive coordinate rules for standard rotations, verify rotational symmetry, and connect composition of rotations to angle addition",
                    materials: [
                        "Tracing paper or acetate sheets",
                        "Large coordinate grid (at least −8 to 8 both axes)",
                        "Protractor and sharp pencil",
                        "Compass for drawing arcs",
                        "Drawing pin or pencil point to serve as pivot (center of rotation)",
                        "Coloured pencils",
                        "Rotation investigation worksheet"
                    ],
                    procedure: [
                        "PART A: The Tracing Paper Method for Rotations",
                        "1. Draw the letter F (asymmetric shape) on coordinate grid:",
                        "   Vertices approximately: (1,0),(1,4),(3,4),(3,3),(2,3),(2,2),(2.5,2),(2.5,1.5),(2,1.5),(2,0)",
                        "2. Place tracing paper over the grid. Trace the F shape and the axes.",
                        "3. Put your pencil point at the ORIGIN (pivot point)",
                        "4. Rotate the tracing paper 90° counterclockwise",
                        "5. Look through the tracing paper — the F shape is now in its rotated position",
                        "6. Trace the new position of each vertex through the paper onto the grid below",
                        "7. Record each image vertex coordinate",
                        "",
                        "PART B: Deriving the 90° CCW Rule",
                        "8. Complete the table: record each original vertex (x, y) and its image (x', y')",
                        "9. Look for the pattern: what formula gives x' in terms of x and y?",
                        "   What formula gives y' in terms of x and y?",
                        "10. Conjecture: (x, y) → (?, ?) for 90° CCW rotation about origin",
                        "11. Verify your conjecture with 3 new test points",
                        "",
                        "PART C: All Standard Rotation Rules",
                        "12. Repeat Part A for 180° rotation — derive the rule",
                        "13. Repeat for 270° CCW — derive the rule",
                        "14. Repeat for 90° CW — compare with 270° CCW",
                        "15. Fill in the rotation rules table",
                        "",
                        "PART D: Rotation About a Non-Origin Center",
                        "16. Place a mark at point C(2, 1) as your new center of rotation",
                        "17. Plot point P(5, 1)",
                        "18. Rotate P by 90° CCW about C(2, 1):",
                        "   Method A — Tracing paper: put pencil at C, rotate 90°, find P'",
                        "   Method B — Algebraic: translate so C → origin; rotate; translate back",
                        "   Both should give the same answer",
                        "19. Verify: CP = CP' (distances from center preserved)",
                        "20. Verify: ∠PCP' = 90° using protractor",
                        "",
                        "PART E: Rotational Symmetry Investigation",
                        "21. Draw a regular hexagon on the grid (center at origin, vertex at (3, 0))",
                        "22. Rotate the entire hexagon by 60° CCW about the center",
                        "23. Does the image coincide exactly with the pre-image? → YES: 60° is a symmetry angle",
                        "24. Test 30°, 60°, 90°, 120°, 180° — which give rotational symmetry?",
                        "25. For each shape in the table, determine the order of rotational symmetry",
                        "",
                        "PART F: Composition of Two Rotations",
                        "26. Rotate point P(4, 0) by 90° CCW about origin → P'",
                        "27. Rotate P' by 90° CCW about origin → P''",
                        "28. What single rotation is equivalent to two 90° CCW rotations?",
                        "29. Test: is 90° + 90° = 180° as a single rotation? Verify."
                    ],
                    dataTable: [
                        ["Original Point", "90° CCW Image", "180° Image", "270° CCW Image", "90° CW Image"],
                        ["(3, 0)", "(0, 3)", "(−3, 0)", "(0, −3)", "(0, −3)"],
                        ["(0, 4)", "(−4, 0)", "(0, −4)", "(4, 0)", "(4, 0)"],
                        ["(2, 5)", "(−5, 2)", "(−2, −5)", "(5, −2)", "(5, −2)"],
                        ["(−1, 3)", "(−3, −1)", "(1, −3)", "(3, 1)", "(3, 1)"],
                        ["Rule", "(x,y)→(−y,x)", "(x,y)→(−x,−y)", "(x,y)→(y,−x)", "(x,y)→(y,−x)"]
                    ],
                    geometricInsight: {
                        circularArc: "Every point travels along a circular arc centred at the rotation centre — all arcs subtend the same central angle",
                        distancePreservation: "OP = OP' always; the transformation preserves the radial distance from centre",
                        orientationPreservation: "Rotation is a direct isometry — orientation is preserved; the figure turns but is not flipped",
                        compositionRule: "Rotating by θ₁ then θ₂ about the same centre = single rotation by θ₁ + θ₂"
                    },
                    conclusions: [
                        "The tracing paper method physically demonstrates that rotation preserves shape, size, and orientation",
                        "The algebraic rules for standard rotations (90°, 180°, 270° about origin) involve combinations of sign changes and coordinate swaps",
                        "For rotation about a non-origin centre, the translate-rotate-untranslate method generalises any rotation algebraically",
                        "A regular n-gon has rotational symmetry of order n with minimum angle 360°/n",
                        "Two rotations about the same centre compose by adding their angles — rotation forms a group under composition"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 4: DILATION AND SIMILARITY INVESTIGATION
            // ============================================================

            dilation_similarity_investigation: {
                name: "Dilation and Similarity: Scale Factors and Proportional Reasoning",
                relatedTopics: ['dilation', 'composition'],
                category: 'geometry',
                historicalBackground: {
                    context: "Similarity and proportional reasoning trace back to ancient Egypt and Greece",
                    thales: "Thales of Miletus (c. 624–546 BCE) used similar triangles to measure the height of the Great Pyramid and the distance of ships from shore",
                    euclid: "Euclid's Elements Book VI (c. 300 BCE) systematically developed the theory of similar figures",
                    viete: "François Viète (1540–1603) first connected similarity to algebraic ratios",
                    photography: "Camera obscura (15th century) and modern zoom lenses are direct applications of dilation — the scale factor equals the zoom ratio",
                    fractals: "Self-similar fractals (Mandelbrot, 1980s) are defined by repeated dilation compositions; the Sierpinski triangle uses dilation by k = ½"
                },
                practicalMathematics: {
                    title: "Investigating Dilation: Scale Factors, Similar Figures, and the Centre of Dilation",
                    hypothesis: "Under dilation with scale factor k from centre O, every distance from O scales by exactly k, every length in the figure scales by |k|, and every area scales by k²",
                    purpose: "Investigate the properties of dilation including scale factor, centre finding, length and area ratios, and connections to similar figures",
                    materials: [
                        "Large coordinate grid paper (−10 to 10 both axes)",
                        "Ruler and calculator",
                        "Coloured pencils (different colours for each scale factor)",
                        "Camera or photocopier (for real-world dilation demonstration — optional)",
                        "String and pencil (for drawing rays from centre through vertices)",
                        "Dilation investigation worksheet"
                    ],
                    procedure: [
                        "PART A: Dilation from the Origin",
                        "1. Plot quadrilateral ABCD: A(1,1), B(3,1), C(3,3), D(1,3) — a unit square offset from origin",
                        "2. Apply D_(O, 2): multiply each coordinate by 2",
                        "3. Plot A'B'C'D' — the image",
                        "4. Draw rays from origin O through each vertex; verify A' lies on ray OA, etc.",
                        "5. Measure OA and OA' — what is the ratio?",
                        "6. Measure AB and A'B' — what is the ratio?",
                        "7. Calculate area of ABCD and area of A'B'C'D' — what is the ratio?",
                        "8. Repeat with D_(O, ½) — plot new image with scale factor ½",
                        "9. What happens when k < 1?",
                        "",
                        "PART B: Finding the Centre of Dilation",
                        "10. You are given: triangle PQR and its image P'Q'R' (pre-drawn on worksheet)",
                        "11. Draw lines through PP', QQ', and RR' — extend them",
                        "12. Where do they intersect? → This is the centre of dilation",
                        "13. Measure OP/OP', OQ/OQ', OR/OR' — are they all equal?",
                        "14. The common ratio is the scale factor k. What is it?",
                        "15. Verify: if k > 1, image is larger; if k < 1, image is smaller; if k = 1, no change",
                        "",
                        "PART C: Dilation from a Non-Origin Centre",
                        "16. Centre C(3, 2), scale factor k = 3, pre-image point P(4, 3)",
                        "17. Method: P' = C + k(P − C)",
                        "   P − C = (4−3, 3−2) = (1, 1)",
                        "   k(P − C) = 3(1, 1) = (3, 3)",
                        "   P' = C + (3, 3) = (3+3, 2+3) = (6, 5)",
                        "18. Verify: CP = √(1²+1²) = √2; CP' = √(3²+3²) = 3√2 = k·CP ✓",
                        "19. Practice with scale factor k = ½, centre (2, 4), pre-image triangle",
                        "",
                        "PART D: Area and Perimeter Ratios",
                        "20. Draw triangle A(0,0), B(4,0), C(0,3) on grid",
                        "21. Compute perimeter: AB + BC + CA = 4 + 5 + 3 = 12 units",
                        "22. Compute area: ½ × 4 × 3 = 6 sq units",
                        "23. Apply D_(O, 2) to get A'B'C'",
                        "24. Compute image perimeter and area",
                        "25. Ratios: perimeter'/perimeter = ___; area'/area = ___",
                        "26. How do these ratios relate to k = 2?",
                        "27. Complete the table for k = ½, k = 3, k = ⅓",
                        "",
                        "PART E: Negative Scale Factor",
                        "28. Apply D_(O, −1) to triangle from Step 20",
                        "29. Where is the image? How does it relate to a 180° rotation?",
                        "30. Apply D_(O, −2) — what does this produce?",
                        "31. Conclusion: k < 0 produces dilation + 180° rotation (point reflection and scale)"
                    ],
                    dataTable: [
                        ["Scale Factor k", "Length Ratio (image:preimage)", "Perimeter Ratio", "Area Ratio", "Type"],
                        ["k = 3", "3:1", "3:1", "9:1", "Enlargement"],
                        ["k = 2", "2:1", "2:1", "4:1", "Enlargement"],
                        ["k = 1", "1:1", "1:1", "1:1", "Identity (no change)"],
                        ["k = ½", "1:2", "1:2", "1:4", "Reduction"],
                        ["k = ⅓", "1:3", "1:3", "1:9", "Reduction"],
                        ["k = −1", "1:1 (opposite side)", "1:1", "1:1", "Point Reflection"],
                        ["k = −2", "2:1 (opposite side)", "2:1", "4:1", "Enlargement + Flip"]
                    ],
                    conclusions: [
                        "Dilation with scale factor k multiplies every distance FROM THE CENTRE by |k|",
                        "Every length in the figure scales by |k|; every perimeter scales by |k|; every area scales by k²",
                        "The centre of dilation is found by extending lines through corresponding pre-image and image points to their intersection",
                        "Dilation produces similar figures: corresponding angles are equal, corresponding sides are proportional",
                        "Negative scale factors produce dilation combined with a 180° rotation about the centre",
                        "Dilation is NOT an isometry: it does not preserve distances unless |k| = 1"
                    ],
                    realWorldConnections: [
                        "Photography: zoom ratio = scale factor of dilation; focal length controls scale factor in optics",
                        "Cartography: map scale (e.g., 1:50,000) is the scale factor of a dilation from real world to map",
                        "Architecture: scale drawings and architectural models use dilation with small k",
                        "Medicine: ultrasound and MRI image scaling; microscope magnification",
                        "Fractals: self-similar fractals are defined by repeated dilations (iterated function systems)",
                        "Engineering: pantographs mechanically implement dilation to copy drawings at a different scale"
                    ]
                }
            },

            // ============================================================
            // PRACTICAL 5: COMPOSITION OF TRANSFORMATIONS INVESTIGATION
            // ============================================================

            composition_transformations_investigation: {
                name: "Composition of Transformations: Discovering the Isometry Theorem",
                relatedTopics: ['composition', 'translation', 'reflection', 'rotation'],
                category: 'geometry',
                historicalBackground: {
                    mathematician: "Felix Klein (1849–1925)",
                    programme: "Erlangen Programme (1872)",
                    contribution: "Klein proposed defining geometry itself through its transformation group — a revolutionary unification of all geometries under a single algebraic framework",
                    significance: "Klein's insight that 'geometry is the study of properties invariant under a group of transformations' unified Euclidean, projective, and non-Euclidean geometries",
                    classificationTheorem: "The Classification Theorem of Plane Isometries (proved rigorously by 19th-century geometers): every isometry of the Euclidean plane is one of exactly four types — translation, rotation, reflection, or glide reflection",
                    symmetryGroups: "The 17 wallpaper groups (fully classified by 1891) describe all possible combinations of translations, rotations, and reflections in periodic plane patterns"
                },
                practicalMathematics: {
                    title: "Composing Transformations: What Happens When You Combine Two Moves?",
                    hypothesis: "Any composition of two isometries produces another isometry, and the type of the result depends on the types and relative positions of the component transformations",
                    purpose: "Systematically investigate what single transformation is equivalent to each possible composition of two basic transformations, including discovering the isometry classification theorem",
                    materials: [
                        "Large coordinate grid paper (−10 to 10 both axes)",
                        "Tracing paper",
                        "Mira (reflection mirror)",
                        "Ruler, protractor, compass",
                        "Coloured pencils (different colour for each stage of composition)",
                        "Composition investigation worksheet with pre-drawn figures"
                    ],
                    procedure: [
                        "STARTER: Why Does Order Matter?",
                        "1. Plot point P(3, 0)",
                        "2. Apply: T_(0,3) then r_(x-axis): where does P end up? Call it P_A",
                        "3. Apply: r_(x-axis) then T_(0,3): where does P end up? Call it P_B",
                        "4. Are P_A = P_B? → NO. Conclusion: composition is NOT commutative in general",
                        "",
                        "INVESTIGATION 1: Translation ∘ Translation",
                        "5. Apply T_(2,1) then T_(1,3) to point P(0, 0)",
                        "6. What single translation is equivalent?",
                        "7. Conjecture the rule for composing two translations",
                        "8. Is T₁ ∘ T₂ = T₂ ∘ T₁? (Do translations commute?) Test and conclude",
                        "",
                        "INVESTIGATION 2: Reflection ∘ Reflection (Parallel Lines)",
                        "9. Reflect triangle over x = 0 (y-axis), then over x = 3",
                        "10. What single transformation maps the original to the final image?",
                        "11. Measure the total horizontal displacement",
                        "12. How does it relate to the distance between the two mirror lines (d = 3)?",
                        "13. Conjecture: reflection over two parallel lines separated by d = ?",
                        "",
                        "INVESTIGATION 3: Reflection ∘ Reflection (Intersecting Lines)",
                        "14. Reflect triangle over x-axis, then over the line y = x",
                        "15. These lines meet at origin with angle 45° between them",
                        "16. What single transformation maps original to final image?",
                        "17. Measure ∠ between original position and final position about the origin",
                        "18. How does this relate to the 45° angle between the mirror lines?",
                        "19. Conjecture: reflection over two intersecting lines with angle θ = ?",
                        "",
                        "INVESTIGATION 4: Glide Reflection Discovery",
                        "20. Reflect the letter F over the x-axis",
                        "21. Then translate by T_(3,0) (parallel to x-axis)",
                        "22. Notice: the image is flipped AND shifted — this is a GLIDE REFLECTION",
                        "23. Try to find a single reflection that produces the same result — you cannot",
                        "24. Try to find a single rotation that produces the same result — you cannot",
                        "25. Conclusion: glide reflection is a FOURTH, NEW type of isometry",
                        "",
                        "INVESTIGATION 5: Non-Commutativity Exploration",
                        "26. Apply R_(O,90°CCW) then r_(x-axis) to P(3, 0) → call result P₁",
                        "27. Apply r_(x-axis) then R_(O,90°CCW) to P(3, 0) → call result P₂",
                        "28. Are P₁ = P₂? Record both results",
                        "29. What single transformation is each composition equivalent to?",
                        "",
                        "SYNTHESIS: The Four Isometries",
                        "30. Complete the composition table",
                        "31. Every composition in the table should be identifiable as one of:",
                        "    translation, rotation, reflection, or glide reflection",
                        "32. Confirm: these four types are CLOSED under composition",
                        "    (composing any two isometries always gives another isometry)"
                    ],
                    compositionResultsTable: [
                        ["T₁ (apply first)", "T₂ (apply second)", "Result Type", "Key Condition"],
                        ["Translation", "Translation", "Translation", "Add vectors"],
                        ["Reflection (line l)", "Reflection (l parallel to l')", "Translation (⊥ to lines)", "Distance = 2d"],
                        ["Reflection (line l)", "Reflection (l' intersecting l)", "Rotation (about intersection)", "Angle = 2θ"],
                        ["Rotation (θ₁, centre O)", "Rotation (θ₂, centre O)", "Rotation (θ₁+θ₂, centre O)", "Same centre"],
                        ["Reflection", "Translation (∥ to mirror)", "Glide Reflection", "Parallel only"],
                        ["Rotation (180°)", "Translation", "Rotation (180°, new centre)", "Centre shifts"],
                        ["Any Isometry", "Any Isometry", "Isometry", "Closure property"]
                    ],
                    conclusions: [
                        "Composition of transformations is generally NOT commutative — order matters",
                        "Exception: two translations always commute; two rotations about the same centre commute",
                        "Two reflections over parallel lines produce a translation (distance = 2 × gap between lines)",
                        "Two reflections over intersecting lines produce a rotation (angle = 2 × angle between lines)",
                        "Glide reflection is a fourth distinct isometry type that cannot be reduced to translation, rotation, or reflection alone",
                        "The set of all plane isometries is closed under composition — composing any two always gives another isometry",
                        "This algebraic structure (closure, associativity, identity, inverses) makes the set of isometries a group in the mathematical sense"
                    ],
                    pedagogicalNotes: {
                        keyInsight: "The most important insight is that composition produces something new — the result is not always predictable without working through it, which motivates systematic algebra",
                        misconception: "Many students assume composition is commutative because addition is; the non-commutativity of transformations is a genuine mathematical surprise",
                        extension: "The four isometries and their compositions are precisely the elements studied in abstract group theory — this practical is a concrete entry point to higher algebra",
                        symmetryGroups: "Students ready for extension can investigate how repeated compositions generate finite symmetry groups (dihedral groups) for regular polygons"
                    }
                }
            },

            // ============================================================
            // PRACTICAL 6: TESSELLATION AND TRANSFORMATION INVESTIGATION
            // ============================================================

            tessellation_transformation_investigation: {
                name: "Tessellations: Art, Architecture, and Transformation Composition",
                relatedTopics: ['translation', 'reflection', 'rotation', 'composition'],
                category: 'geometry',
                historicalBackground: {
                    history: "Tessellations have appeared in art and architecture for millennia: Roman mosaics (1st century CE), Islamic geometric art (8th century onward), and Celtic knotwork all use transformation-based tessellations",
                    escher: "M.C. Escher (1898–1972) created mathematically precise tessellations using transformation compositions; his work was independently verified to apply all 17 wallpaper symmetry groups",
                    alhambra: "The Alhambra Palace in Granada, Spain (14th century) contains examples of all 17 wallpaper symmetry groups — a fact only recognized by mathematicians in the 20th century",
                    modernUse: "Tessellation algorithms are used in computer graphics (texture mapping), architecture (structural panels), manufacturing (sheet metal cutting), and biology (cell packing)"
                },
                practicalMathematics: {
                    title: "Creating Tessellations Using Transformation Compositions",
                    hypothesis: "Any tessellation of the plane can be described as repeated application of a combination of translations, reflections, and rotations; the symmetry type of the tessellation determines which of the 17 wallpaper groups it belongs to",
                    purpose: "Create tessellations using translation, reflection, and rotation, analyse the symmetry groups present, and connect to the real-world applications of transformation composition",
                    materials: [
                        "Plain paper and card stock",
                        "Scissors",
                        "Ruler and pencil",
                        "Coloured pencils or markers",
                        "Large sheets of paper for final tessellation",
                        "Optional: GeoGebra or Desmos for digital tessellations"
                    ],
                    procedure: [
                        "PART A: Translation Tessellation (Escher Method)",
                        "1. Start with a square of card (e.g., 5cm × 5cm)",
                        "2. Cut a piece from one side and TRANSLATE it to the opposite side (tape it)",
                        "3. Your modified square is now your tessellation tile",
                        "4. Trace the tile repeatedly, each time translating by the tile width/height",
                        "5. Colour the pattern — you have created a translation tessellation",
                        "6. Symmetry analysis: what is the translation vector? Does it have reflection symmetry?",
                        "",
                        "PART B: Rotation Tessellation",
                        "7. Start with an equilateral triangle of card",
                        "8. Cut a piece from one side, rotate it 60° about the midpoint of that side, tape",
                        "9. Tile the plane using the modified triangle with 60° rotations",
                        "10. Identify the rotation centres and angles used in the tiling",
                        "",
                        "PART C: Reflection Tessellation",
                        "11. Create a tile that has a built-in line of symmetry",
                        "12. Tile the plane alternating the tile and its reflection",
                        "13. Identify the mirror lines in your completed tessellation",
                        "",
                        "PART D: Symmetry Analysis of Completed Tessellations",
                        "14. For your translation tessellation: list all translation symmetries",
                        "15. For your rotation tessellation: list all rotation centres and angles",
                        "16. For your reflection tessellation: list all mirror lines",
                        "17. Does any tessellation have ALL THREE types of symmetry?",
                        "18. Research: what is the wallpaper group designation of each pattern?",
                        "",
                        "PART E: Analysis of Given Tessellations",
                        "19. Analyse the provided Escher-style tessellation: identify transformation types",
                        "20. Analyse the provided Islamic geometric pattern: identify all symmetry operations",
                        "21. In each case: is there translation symmetry? Reflection symmetry? Rotation symmetry?"
                    ],
                    conclusions: [
                        "Tessellations are infinite compositions of transformations applied to a fundamental tile",
                        "Any tessellation of the plane has at least translation symmetry (all tessellations can tile indefinitely)",
                        "Additional symmetries (reflection, rotation) create richer patterns belonging to higher-order wallpaper groups",
                        "The visual richness of tessellation art (Escher, Islamic patterns) is entirely a product of transformation composition",
                        "The 17 wallpaper groups represent all mathematically distinct ways to combine translations, reflections, and rotations periodically in the plane"
                    ],
                    realWorldConnections: [
                        "Architecture: structural panels and tile layouts in buildings worldwide",
                        "Textile design: fabric weave patterns are all translation tessellations",
                        "Computer graphics: texture tiling in video games uses translation tessellation",
                        "Manufacturing: efficient cutting patterns for sheet materials minimize waste using tessellation",
                        "Biology: honeycomb structures, cell packing, and skin scales are natural tessellations optimized by evolution"
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
            translation: {
                'Vector Direction': [
                    'Confusing positive/negative direction: T_(3, −2) moves RIGHT 3 and DOWN 2 (not up)',
                    'Reversing the vector components: treating (a, b) as moving b horizontally and a vertically',
                    'Forgetting that ALL points move by the SAME vector — not different distances for different points',
                    'Adding vector to y-coordinate first: always add a to x and b to y'
                ],
                'Properties': [
                    'Thinking translation changes the shape or size of the figure',
                    'Believing translation can change orientation (flip the figure) — it cannot',
                    'Not understanding that translations have NO fixed points (unless vector is zero)',
                    'Confusing the inverse translation: inverse of T_(a,b) is T_(−a,−b), not T_(b,a)'
                ]
            },

            reflection: {
                'Rule Application': [
                    'Confusing reflection over x-axis with reflection over y-axis: x-axis negates the y-coordinate; y-axis negates the x-coordinate',
                    'For reflection over y = x, forgetting to SWAP coordinates (not just negate)',
                    'For reflection over y = −x, swapping without negating, or negating without swapping',
                    'For reflection over y = k (horizontal line), changing x instead of y',
                    'Forgetting the formula y\' = 2k − y for reflection over y = k'
                ],
                'Properties': [
                    'Thinking reflection preserves orientation — it does NOT; reflection REVERSES orientation',
                    'Confusing the line of reflection with the axis of the coordinate system',
                    'Not recognizing that points ON the line of reflection map to themselves',
                    'Thinking two successive reflections always equal a translation — only true for parallel lines; intersecting lines give rotation'
                ],
                'Perpendicular Bisector': [
                    'Forgetting that the line of reflection is perpendicular to PP\' (not just bisecting it)',
                    'Not checking both conditions: must be BOTH perpendicular AND bisecting'
                ]
            },

            rotation: {
                'Direction Confusion': [
                    'Mixing up clockwise and counterclockwise: CCW is positive (standard mathematical convention)',
                    'Applying 90° CW rule when 90° CCW is needed, or vice versa',
                    '90° CW rule is (x,y)→(y,−x); 90° CCW rule is (x,y)→(−y,x) — these are easily confused'
                ],
                'Center of Rotation': [
                    'Assuming rotation is always about the origin when the center is specified elsewhere',
                    'Not translating to origin before applying the rotation rule when center ≠ origin',
                    'Forgetting to translate BACK after applying the origin rotation'
                ],
                'Rule Errors': [
                    'For 180°: writing (y, x) instead of (−x, −y)',
                    'Confusing 270° CCW with 90° CCW — 270° CCW = 90° CW',
                    'For general angle θ, forgetting the rotation matrix formula involves both sin and cos'
                ],
                'Orientation': [
                    'Thinking rotation reverses orientation — it does NOT; rotation is a DIRECT isometry',
                    'Confusing rotation with reflection because both "move" a figure'
                ]
            },

            dilation: {
                'Scale Factor': [
                    'Confusing k = 2 (multiply coordinates by 2) with adding 2 to each coordinate',
                    'Not applying the scale factor to BOTH coordinates when dilating from origin',
                    'Forgetting that k = ½ makes the image SMALLER (closer to center), not larger',
                    'Confusing ratio of image to pre-image (k) with ratio of pre-image to image (1/k)'
                ],
                'Centre of Dilation': [
                    'Assuming dilation is always from the origin when the centre is elsewhere',
                    'Forgetting to translate relative to centre: correct formula is P\' = C + k(P − C)',
                    'Not checking that O, P, P\' are collinear when verifying dilation'
                ],
                'Area and Length': [
                    'Thinking area scales by k (same as lengths) — area scales by k², not k',
                    'Thinking perimeter scales by k² — perimeter (a length) scales by |k|, only area scales by k²',
                    'For 3D extension: volume scales by k³, surface area by k²'
                ],
                'Isometry Confusion': [
                    'Classifying dilation as an isometry — it is NOT (unless |k| = 1); it changes distances',
                    'Thinking dilation preserves side lengths — it scales them by |k|',
                    'Forgetting that dilation DOES preserve angle measures (produces similar, not congruent, figures)'
                ]
            },

            composition: {
                'Order of Application': [
                    'Applying T₂ first and T₁ second when notation says T₂ ∘ T₁ — MUST apply T₁ first (right-to-left)',
                    'Assuming composition is commutative: T₂ ∘ T₁ = T₁ ∘ T₂ is generally FALSE',
                    'Exception: translations always commute with each other — this is a special case, not the general rule'
                ],
                'Composition Results': [
                    'Thinking two reflections always give a translation — only true for PARALLEL mirror lines',
                    'Forgetting that two reflections over INTERSECTING lines give a rotation, not a translation',
                    'Not recognising glide reflection as a distinct isometry type — trying to express it as a pure rotation or reflection'
                ],
                'Matrix Multiplication': [
                    'Multiplying matrices in wrong order: T₂ ∘ T₁ corresponds to matrix M₂ × M₁ (NOT M₁ × M₂)',
                    'Forgetting that matrix multiplication is not commutative (like transformation composition)'
                ]
            }
        };

        this.clarificationStrategies = {
            coordinate_axis_reflection: {
                method: 'Colour-code: blue for x-axis reflection (blue negates y), red for y-axis (red negates x)',
                effectiveness: 'High for reducing axis confusion'
            },
            rotation_direction: {
                method: 'Mnemonic: Counterclockwise = Positive (like angle measurement in standard position)',
                effectiveness: 'High for direction errors'
            },
            composition_order: {
                method: 'Write transformations right-to-left: T₂ ∘ T₁ means "T₁ acts first, T₂ acts on the result"',
                effectiveness: 'High for order-of-application errors'
            },
            dilation_scale: {
                method: 'Physical demo: zoom a photo. k = 2 doubles size; k = ½ halves size.',
                effectiveness: 'Very high for intuitive understanding of scale factor'
            },
            area_ratio: {
                method: 'Draw a 1×1 square; dilate by k=2 → 2×2 square; area 1→4 = k². Concrete example.',
                effectiveness: 'Very high for length vs area ratio confusion'
            },
            orientation_reversal: {
                method: 'Have students label triangle vertices A, B, C going clockwise; after reflection, check if A\', B\', C\' go clockwise or counterclockwise',
                effectiveness: 'Very high for orientation misconception'
            },
            tracing_paper_rotation: {
                method: 'Physical tracing paper rotation before algebraic rules eliminates most rotation direction and rule errors',
                effectiveness: 'Very high; kinesthetic learning before symbolic'
            },
            perpendicular_bisector_check: {
                method: 'Always verify reflection by measuring: check PP\' is perpendicular to mirror line AND midpoint of PP\' lies on mirror line',
                effectiveness: 'High for reflection verification'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}? Can you describe it without using coordinates?",
                "Can you give a real-world example of a {topic} from everyday life?",
                "How do you think {topic} is similar to or different from what you have already studied?",
                "What do you predict will be preserved (unchanged) by a {topic}? What do you predict will change?"
            ],
            duringLearning: [
                "Does this transformation result make sense? What should be preserved — have you checked?",
                "How does this connect to {related_transformation}?",
                "What information do you need to fully describe a {topic}? Have you stated all of it?",
                "Can you draw a diagram to verify the algebraic result?",
                "Can you identify a real-world situation where this transformation occurs?"
            ],
            afterLearning: [
                "What are the three pieces of information needed to describe a {topic} completely?",
                "What does {topic} preserve? What does it change? How is this different from other transformations?",
                "What mistakes are you most likely to make with {topic}, and how will you avoid them?",
                "How would you explain {topic} to a classmate using only a diagram and one sentence?",
                "What is the most important check you should always do after applying any transformation?"
            ],
            problemSolving: [
                "What transformation type is this? How can you tell from the given information?",
                "Have you identified ALL the parameters needed (center, angle, vector, scale factor)?",
                "Did you apply the transformation in the correct order for compositions?",
                "Have you verified your answer by checking preserved properties (distances, angles, orientation)?",
                "Can you describe the single equivalent transformation for this composition?"
            ],
            reflectionPrompts: [
                "Why does {transformation} preserve distance but not position?",
                "Why does reflection reverse orientation but rotation does not?",
                "Why does the area ratio equal k² for dilation when the length ratio equals k?",
                "Why does the ORDER of composition matter for most transformation pairs?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            translation: [
                {
                    scenario: "Video Game Character Movement",
                    context: "A game developer programs a character sprite at position (2, 3) on a 20×20 grid. The character moves 5 units right and 3 units up each time the player presses a direction key.",
                    problem: "After pressing the key 3 times, what is the character's new position? What single translation vector describes the total movement?",
                    application: "Each keypress applies T_(5,3). Three keypresses: T_(15,9). New position: (2+15, 3+9) = (17, 12).",
                    question: "If the screen boundary is at x = 20, how many more keypresses before the character goes off-screen?",
                    answer: "Current x = 17. Each press adds 5. One more press: x = 22 > 20. Answer: 1 more keypress.",
                    extension: "Composition T_(5,3) applied n times = T_(5n, 3n). This is linear motion — position is a linear function of the number of keypresses."
                },
                {
                    scenario: "Town Planning Grid Shift",
                    context: "A town planner has designed a park layout with key features at coordinates A(1,2), B(4,2), C(4,5), D(1,5). The entire park must be shifted 6 units east (positive x) and 3 units north (positive y) to avoid a flood zone.",
                    problem: "Find the new coordinates for all four corners of the park.",
                    application: "T_(6,3): A'(7,5), B'(10,5), C'(10,8), D'(7,8).",
                    question: "Does the shift affect the park's area or shape? What is the area before and after?",
                    answer: "Area = 3 × 3 = 9 sq units before and after. Translation preserves area (isometry). Shape unchanged.",
                    extension: "The GPS coordinates of a feature shift by the same vector regardless of which feature — translation's defining property of uniform displacement."
                },
                {
                    scenario: "Textile Pattern Design",
                    context: "A textile designer creates a leaf motif at position (0,0)–(2,3). To tile a fabric, she repeats the motif by translating it horizontally by 4 units and vertically by 5 units.",
                    problem: "Find the positions of the first 4 copies of the motif (after 0, 1, 2, and 3 repetitions in each direction).",
                    application: "T_(4,0): horizontal repetition. T_(0,5): vertical repetition. Grid positions: (0,0), (4,0), (8,0), (0,5), (4,5), ...",
                    question: "How many motifs fit in a 40 × 30 cm fabric if each motif cell is 4 × 5 cm?",
                    answer: "Horizontal: 40/4 = 10; Vertical: 30/5 = 6. Total = 60 motifs.",
                    extension: "Tessellation by translation — the most fundamental application of the composition of identical translations."
                }
            ],

            reflection: [
                {
                    scenario: "Optical Ray Tracing",
                    context: "A laser beam hits a flat mirror along the line y = 3 at the point (4, 3). The beam travels from source at (4, 7) downward toward the mirror. A physicist needs to find where the reflected beam appears to come from.",
                    problem: "Reflect the source (4, 7) over the mirror line y = 3 to find the virtual image position.",
                    application: "Reflection over y = 3: y' = 2(3) − 7 = −1. Image: (4, −1).",
                    question: "If a screen is placed at y = −3, at what x-coordinate does the reflected beam hit the screen?",
                    answer: "Beam travels from (4, 3) toward virtual image (4, −1) — same x = 4. Hits screen at (4, −3).",
                    extension: "All optical reflection problems use the same mathematical reflection — the 'angle of incidence equals angle of reflection' law is equivalent to the perpendicular bisector property."
                },
                {
                    scenario: "Architecture: Bilateral Symmetry Design",
                    context: "An architect designs the right half of a building facade with corners at R(5,0), S(9,0), T(9,6), U(7,6), V(7,4), W(5,4). The building must be bilaterally symmetric about the line x = 5.",
                    problem: "Reflect the right half over x = 5 to complete the symmetric facade.",
                    application: "x' = 2(5) − x = 10 − x. R'(5,0), S'(1,0), T'(1,6), U'(3,6), V'(3,4), W'(5,4).",
                    question: "What is the total width of the complete facade?",
                    answer: "Rightmost point x = 9; leftmost x' = 1. Total width = 9 − 1 = 8 units.",
                    extension: "Bilateral architectural symmetry is one of the oldest human aesthetic preferences — found consistently in classical architecture from ancient Greece to the present."
                },
                {
                    scenario: "Golf Shot Strategy",
                    context: "A golfer at position (2, 1) wants to use a wall (the y-axis, x = 0) to redirect a shot to a target at (−3, 7). She needs to find the reflection of the target to determine the straight shot direction.",
                    problem: "Reflect the target (−3, 7) over the y-axis (x = 0) to find the virtual target position, then determine the direction to aim.",
                    application: "Reflection over x = 0: x' = −x → (−3, 7) reflects to (3, 7). Aim from (2, 1) toward (3, 7).",
                    question: "What is the direction vector from golfer to virtual target? Where does the shot hit the wall?",
                    answer: "Direction: (3−2, 7−1) = (1, 6). Line: y − 1 = 6(x − 2) → y = 6x − 11. At x=0: y = −11. The ball needs to bounce very low on the wall. Revise: line from (2,1) to (3,7): slope = 6, y = 6x−11; at x=0, y=−11. The wall bounce point is (0, −11) — below the playing area, so the indirect shot is not feasible this way.",
                    extension: "Billiard ball reflections use exactly this technique — finding the virtual target through reflection is the standard method for calculating bank shot trajectories."
                }
            ],

            rotation: [
                {
                    scenario: "Clock Hands and Angle Measurement",
                    context: "The minute hand of a clock starts pointing to 12 (direction (0, 5) from center). After 25 minutes, it has rotated clockwise.",
                    problem: "By how many degrees has the minute hand rotated? What are the new tip coordinates if the hand is 5 cm long?",
                    application: "25 minutes = 25 × 6° = 150° clockwise = −150°. Rotation matrix for −150°: (cos(−150°), −sin(−150°), sin(−150°), cos(−150°)). Starting point (0, 5). x' = 0·cos(−150°) − 5·sin(−150°) = 0 − 5·(0.5) = 2.5. Wait — recalculate: cos(−150°) = −√3/2 ≈ −0.866; sin(−150°) = −0.5. x' = 0·(−0.866) − 5·(−0.5) = 2.5. y' = 0·(−0.5) + 5·(−0.866) = −4.33. Image ≈ (2.5, −4.33).",
                    question: "At what time is the minute hand pointing exactly to (−5, 0) (pointing left, 9 o'clock position)?",
                    answer: "(−5, 0) is a 90° CCW or 270° CW rotation from (0,5). 270° CW = 270/6 = 45 minutes. Answer: 12:45.",
                    extension: "The rotation group of the clock is the cyclic group C₁₂ (for hour hand) or C₆₀ (for minute hand) — the algebraic structure underlying clock arithmetic."
                },
                {
                    scenario: "Robotics: Arm Joint Rotation",
                    context: "A robotic arm has its base at the origin. Joint 1 is at (3, 0). The arm segment from origin to joint 1 is rotated 60° CCW.",
                    problem: "Find the new position of joint 1 after the rotation.",
                    application: "R_(O, 60°): (x,y) → (x·cos60° − y·sin60°, x·sin60° + y·cos60°). x' = 3·(0.5) − 0·(√3/2) = 1.5. y' = 3·(√3/2) + 0·(0.5) = 3√3/2 ≈ 2.598. New joint 1: (1.5, 2.598).",
                    question: "If a tool is attached at joint 2, which is 2 units further along the arm (initially at (5, 0)), find tool position after the same 60° rotation.",
                    answer: "Tool x' = 5·(0.5) − 0·(√3/2) = 2.5. y' = 5·(√3/2) ≈ 4.33. Tool: (2.5, 4.33).",
                    extension: "Industrial robot arms use exactly this rotation mathematics, composing multiple joint rotations using matrix multiplication to find the end-effector position — a direct application of composition of rotations."
                },
                {
                    scenario: "Navigational Bearing Change",
                    context: "A ship sailing on bearing 030° (30° clockwise from north) at velocity vector ⟨2, 3√3⟩ km/h needs to change course by rotating its velocity vector 90° clockwise.",
                    problem: "Find the new velocity vector after the 90° clockwise rotation.",
                    application: "90° CW: (x, y) → (y, −x). New velocity: (3√3, −2) km/h.",
                    question: "What bearing is the ship now on? (North = positive y-axis in navigation coordinates)",
                    answer: "New velocity (3√3, −2): angle = arctan(3√3/−2)... bearing measured clockwise from north. In navigation, bearing = 90° − arctan(y/x) for standard coordinates. New bearing: arctan(3√3/2) ≈ 69° from east → bearing ≈ 120° (SE direction).",
                    extension: "Navigation systems convert between bearing (clockwise from north) and standard mathematical angles (counterclockwise from east) using the transformation θ_math = 90° − bearing, a constant rotation of coordinate systems."
                }
            ],

            dilation: [
                {
                    scenario: "Photography: Zoom and Scale",
                    context: "A photograph shows a building that is actually 40 metres tall. In the photograph, the building measures 8 cm. A student needs to determine the scale factor and use it to find the actual width of the building shown as 5 cm wide.",
                    problem: "Find the scale factor (photograph to reality) and the actual building width.",
                    application: "Scale factor k = actual/photo = 40 m / 8 cm = 40,000 cm / 8 cm = 5000. Actual width = 5 cm × 5000 = 25,000 cm = 250 m.",
                    question: "A window in the photo measures 0.4 cm × 0.6 cm. What are the actual window dimensions?",
                    answer: "0.4 × 5000 = 2000 cm = 20 m wide; 0.6 × 5000 = 3000 cm = 30 m tall. (Very large windows — likely a facade section, not a single window.)",
                    extension: "Camera lenses perform optical dilation: the focal length determines the scale factor between the real-world scene and the image sensor. Zoom ratio = ratio of focal lengths = ratio of scale factors."
                },
                {
                    scenario: "Map Reading and Scale Drawing",
                    context: "An Ordnance Survey map has scale 1:25,000. A student measures a straight road as 6 cm on the map. A nature reserve boundary forms a square on the map with side 4 cm.",
                    problem: "Find the actual road length and the actual area of the nature reserve.",
                    application: "Scale factor k = 25,000. Road: 6 × 25,000 = 150,000 cm = 1,500 m = 1.5 km. Reserve side: 4 × 25,000 = 100,000 cm = 1 km. Area = 1 km² (actual) vs (4 cm)² = 16 cm² (on map). Ratio = 25,000² = 625,000,000.",
                    question: "If the actual area of a lake on the map measures 3 cm², what is the actual area of the lake in km²?",
                    answer: "Actual area = 3 × 25,000² cm² = 3 × 6.25 × 10⁸ cm² = 18.75 km².",
                    extension: "Area scales by k² = 25,000² = 6.25 × 10⁸ — a dramatic example of why length and area scales must be distinguished carefully in cartography."
                },
                {
                    scenario: "Architectural Model",
                    context: "An architectural model is built at scale 1:50. A room in the model is 8 cm × 6 cm × 4 cm high.",
                    problem: "Find the actual room dimensions, floor area, and volume.",
                    application: "Scale factor k = 50. Actual: 400 cm × 300 cm × 200 cm = 4m × 3m × 2m. Area: 4 × 3 = 12 m² (or 8 × 6 = 48 cm² scaled by 50² = 2500: 48 × 2500 = 120,000 cm² = 12 m² ✓). Volume: 4 × 3 × 2 = 24 m³.",
                    question: "How much more paint would be needed to paint the actual room walls (2 coats at 5 m² per litre) compared to painting the model walls (ignoring scale)?",
                    answer: "Actual wall area = 2(4×2) + 2(3×2) = 16 + 12 = 28 m². Paint = 2 × 28/5 = 11.2 litres.",
                    extension: "Scale models use dilation with k = 1/50; costs and materials scale by k² for areas and k³ for volumes — understanding this prevents serious budgeting errors in real construction."
                }
            ],

            composition: [
                {
                    scenario: "Computer Graphics Transformation Pipeline",
                    context: "A game engine applies transformations to a character sprite at vertices A(1,0), B(2,0), C(1,1). The pipeline applies: (1) Scale by factor 2 from origin (D_(O,2)), then (2) Translate T_(3,1), then (3) Rotate 90° CCW about origin.",
                    problem: "Find the final position of vertex A after all three transformations.",
                    application: "A(1,0). Step 1 D_(O,2): (2,0). Step 2 T_(3,1): (5,1). Step 3 R_(O,90°CCW): (x,y)→(−y,x) → (−1, 5). Final A: (−1, 5).",
                    question: "What single matrix multiplication would achieve all three transformations in one step? (Extension/Year 12)",
                    answer: "Compose matrices: R₉₀ × T_(3,1) × D_2. Note translations require 3×3 homogeneous coordinates for matrix composition in graphics pipelines.",
                    extension: "Every 3D graphics engine (Unity, Unreal, OpenGL) represents transformation pipelines as matrix multiplications using homogeneous coordinates — composition of transformations is literally the mathematics behind all computer graphics rendering."
                },
                {
                    scenario: "Kaleidoscope Symmetry",
                    context: "A kaleidoscope contains two mirrors meeting at 60° at point O. A pattern element at P(5, 0) is reflected repeatedly to create the full kaleidoscope image.",
                    problem: "A point is reflected over mirror 1 (x-axis) then over mirror 2 (line at 60° to x-axis through O). What single transformation is the composition?",
                    application: "Two reflections over intersecting lines at angle 60° → rotation of 2 × 60° = 120° about intersection O. P(5,0) → rotation 120° CCW: P' = (5·cos120°, 5·sin120°) = (−2.5, 4.33).",
                    question: "How many reflections are needed to generate the complete 6-fold symmetry pattern, and what rotational symmetry does the complete pattern have?",
                    answer: "Reflecting 6 times generates rotations of 60°, 120°, 180°, 240°, 300°, 360° — a full 6-fold symmetric pattern. The complete pattern has rotational symmetry of order 6.",
                    extension: "Kaleidoscopes physically implement the dihedral group D₆ — the symmetry group of the regular hexagon — using only two mirror reflections to generate all 12 symmetry operations (6 rotations + 6 reflections)."
                },
                {
                    scenario: "Footprint Pattern Analysis",
                    context: "Walking footprints form a pattern: left foot at (0,0), right foot at (2,1), left foot at (4,0), right foot at (6,1). A mathematician wants to describe the symmetry of this walking pattern.",
                    problem: "What transformation maps each footprint to the next? What is the symmetry group of the complete footprint pattern?",
                    application: "Left to right: reflect over the line y = 0.5, then translate by T_(2,0) — this is a GLIDE REFLECTION. The full pattern is invariant under this glide reflection.",
                    question: "What is the translation symmetry of the pattern (what translation maps the pattern to itself)?",
                    answer: "Applying the glide reflection TWICE = pure translation T_(4,0). So the pattern has translation symmetry T_(4,0) — every pair of footprints repeats with period 4.",
                    extension: "Walking patterns are the physical embodiment of glide reflection — the only frieze symmetry pattern type that includes both translation and reflection without additional rotation. This is frieze group p11g (or pg in crystallographic notation)."
                },
                {
                    scenario: "Robotic Assembly Line",
                    context: "A robotic arm must move a component from position P(2, 1) to a target at T(−3, 4). The robot can only perform: (a) reflection over the y-axis, and (b) translation T_(a,b). Design the composition.",
                    problem: "Find a composition of reflection over y-axis and a translation that maps P(2,1) to T(−3,4).",
                    application: "Option 1: reflect first → P'(−2,1). Then translate: T_(−3−(−2), 4−1) = T_(−1, 3). Check: (−2+(−1), 1+3) = (−3,4) ✓. Option 2: translate first → need T_(a,b) then r_y-axis: (−(2+a), 1+b) = (−3,4). So −2−a = −3 → a = 1; b = 3. T_(1,3) then r_y: P → (3,4) → (−3,4) ✓",
                    question: "Do both compositions give the same result? Are they equivalent transformations?",
                    answer: "Both map P(2,1) to T(−3,4), but they are different transformations (apply differently to other points). This demonstrates that the same image for a single point does NOT imply the same transformation overall.",
                    extension: "Industrial robots solve inverse kinematics problems: given a desired end-effector position, find the sequence of joint transformations. This is the inverse of forward composition — one of the central problems in robotics engineering."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall transformation rules, definitions, and notation",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    examples: {
                        translation: "State the coordinate rule for T_(a,b)",
                        reflection: "Write the reflection rule for reflection over the y-axis",
                        rotation: "List the four standard rotation rules about the origin",
                        dilation: "State the coordinate rule for D_(O,k)",
                        composition: "Write the composition notation for 'apply T₁ first, then T₂'"
                    }
                },
                understand: {
                    description: "Explain why transformation rules work; connect to geometric meaning",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    examples: {
                        translation: "Explain why translation has no fixed points",
                        reflection: "Explain why reflection reverses orientation but rotation does not",
                        rotation: "Justify why the area is preserved under rotation using the isometry property",
                        dilation: "Explain why areas scale by k² and not k under dilation",
                        composition: "Explain why two reflections over parallel lines produce a translation"
                    }
                },
                apply: {
                    description: "Use transformation rules to find images; apply to given figures",
                    verbs: ["Transform", "Apply", "Map", "Find", "Compute"],
                    examples: {
                        translation: "Find the image of triangle ABC under T_(−2, 4)",
                        reflection: "Reflect quadrilateral PQRS over the line y = x",
                        rotation: "Rotate point P(3, 5) by 270° CCW about the origin",
                        dilation: "Dilate triangle XYZ from centre (1, 2) with scale factor 3",
                        composition: "Apply r_(x-axis) then T_(2, −1) to find the image of P(4, 3)"
                    }
                },
                analyze: {
                    description: "Identify transformation type from pre-image and image; analyze composition results",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce"],
                    examples: {
                        translation: "Given pre-image and image, determine the translation vector",
                        reflection: "Given a figure and its mirror image, find the line of reflection",
                        rotation: "Given pre-image and image, determine the center, angle, and direction of rotation",
                        dilation: "Given two similar figures, find the center of dilation and scale factor",
                        composition: "Identify what single transformation is equivalent to two given reflections"
                    }
                },
                evaluate: {
                    description: "Verify correctness of transformations; evaluate technique choices; critique solutions",
                    verbs: ["Verify", "Evaluate", "Critique", "Check", "Assess"],
                    examples: {
                        translation: "A student claims T_(3,2) followed by T_(−3, −2) produces identity. Evaluate this claim.",
                        reflection: "A student reflects P(3,4) over y-axis getting P'(3,−4). Evaluate.",
                        rotation: "Verify that R_(O,90°) applied to (2,3) gives (−3,2) using two methods",
                        dilation: "A student says area ratio = k for dilation with k=3. Evaluate and correct.",
                        composition: "Evaluate: 'Two reflections over intersecting lines always give a translation.' True or false?"
                    }
                },
                create: {
                    description: "Design transformation problems; construct figures with specific properties; derive general formulas",
                    verbs: ["Design", "Construct", "Create", "Derive", "Formulate"],
                    examples: {
                        translation: "Design a tessellation using only translation symmetry",
                        reflection: "Construct a figure with exactly 2 lines of symmetry but no rotational symmetry",
                        rotation: "Create a figure with rotational symmetry of order 4 but no reflection symmetry (pinwheel)",
                        dilation: "Derive the formula for dilation from arbitrary centre (h,k) with scale factor k_s",
                        composition: "Construct a glide reflection that maps the letter F to a specific image position"
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can apply translation using the coordinate rule with guidance",
                        "Recognizes reflection over coordinate axes only",
                        "Cannot perform rotations about non-origin centers",
                        "Does not verify transformations by checking preserved properties"
                    ],
                    support: [
                        "Provide coordinate rule cards for each transformation",
                        "Use tracing paper for rotations and Mira for reflections before moving to algebra",
                        "Emphasize always verifying by checking at least one preserved property",
                        "Use graph paper to visualize before computing"
                    ]
                },
                developing: {
                    characteristics: [
                        "Applies all four basic transformations with coordinate rules",
                        "Identifies transformation type from pre-image and image in straightforward cases",
                        "Begins to understand composition but confuses order",
                        "Can find translation vector and scale factor but struggles with rotation angle"
                    ],
                    support: [
                        "Introduce reflection over arbitrary lines and rotation about non-origin centers",
                        "Practice composition with clear visual diagrams before abstract notation",
                        "Work through the commutativity failure with concrete examples",
                        "Connect transformation rules to matrix representations"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Identifies and applies all four isometries fluently",
                        "Successfully performs compositions and identifies equivalent single transformations",
                        "Understands the four isometry types and their properties",
                        "Verifies results using preserved properties and back-calculation"
                    ],
                    support: [
                        "Investigate symmetry groups (cyclic and dihedral groups)",
                        "Derive general rotation formula for arbitrary angle",
                        "Connect to matrix representations for all transformations",
                        "Explore the 17 wallpaper groups and tessellation classification"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives transformation formulas from first principles",
                        "Connects transformations to group theory and matrix algebra",
                        "Applies transformations in 3D contexts and to non-Euclidean settings",
                        "Analyses symmetry of physical and mathematical structures using transformation groups"
                    ],
                    support: [
                        "Study Lie groups and continuous transformation groups",
                        "Investigate Klein's Erlangen Programme",
                        "Connect to quantum mechanical symmetry operators",
                        "Explore transformations in complex analysis (Möbius transformations)"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            translation: {
                remember: "State the coordinate rule for translation T_(a,b) and explain what a and b represent",
                understand: "Explain why translation is called a direct isometry and what this means for shape, size, and orientation",
                apply: "Find the image of quadrilateral ABCD with A(0,1), B(3,1), C(4,4), D(1,4) under T_(−2,3)",
                analyze: "Point P maps to P'(5,−1) under a translation. If P is at (8,3), find the translation vector and state its inverse",
                evaluate: "A student says 'translating by T_(2,3) then T_(3,2) gives the same result as T_(3,2) then T_(2,3)'. Evaluate this claim with a proof or counterexample.",
                create: "Design a translation-based border pattern by choosing a tile and a translation vector. Explain why the pattern tiles the strip infinitely."
            },
            reflection: {
                remember: "Write the coordinate rules for reflections over: (a) x-axis (b) y-axis (c) y=x (d) y=−x",
                understand: "Explain why reflection is an opposite isometry. What does this mean for orientation, and how can you detect it on a figure?",
                apply: "Reflect triangle PQR: P(2,5), Q(6,5), R(6,9) over the line y = 2",
                analyze: "A figure and its reflection are given. The midpoint of AA' is (3,1) and BB' has midpoint (3,4). Determine the equation of the line of reflection.",
                evaluate: "Evaluate: 'Reflecting a figure over the x-axis then over y = 3 is equivalent to reflecting over y = 3 then over the x-axis.' True or false? Prove your answer.",
                create: "Create a figure that has exactly one line of symmetry. State its line of symmetry equation and prove no other line works."
            },
            rotation: {
                remember: "Write the coordinate rules for rotations about the origin: 90°CCW, 180°, 90°CW, and 270°CCW",
                understand: "Explain why rotation is a direct isometry. How does rotation differ from reflection in terms of what it preserves?",
                apply: "Rotate triangle with vertices A(1,3), B(4,3), C(4,7) by 90° clockwise about the point C(4,3)",
                analyze: "A point P(5,0) maps to P'(0,5) under rotation. Determine the center, angle, and direction of rotation",
                evaluate: "Evaluate: R_(O,90°CCW) applied to (3,4) gives (−4,3). Is this correct? Verify using two methods.",
                create: "Design a figure with rotational symmetry of order 3 but no lines of symmetry. Justify your design."
            },
            dilation: {
                remember: "State the coordinate rule for dilation D_(O,k) and describe the effect when k>1, 0<k<1, and k<0",
                understand: "Explain why dilation is a similarity transformation but NOT an isometry. What does this mean for angles and side lengths?",
                apply: "Dilate triangle with vertices A(2,1), B(6,1), C(2,5) from centre (0,0) with scale factor k=1.5",
                analyze: "Triangle ABC maps to triangle A'B'C'. A(0,0)→A'(0,0), B(4,0)→B'(6,0), C(0,3)→C'(0,4.5). Find the scale factor and centre of dilation.",
                evaluate: "A student says 'if the scale factor is 3, then the area of the image is 3 times the area of the pre-image.' Evaluate and correct if needed.",
                create: "Create two triangles that are similar with ratio 2:5. Explicitly describe the dilation (centre and scale factor) that maps one to the other."
            },
            composition: {
                remember: "State the notation for composition and explain what T₂ ∘ T₁ means regarding order of application",
                understand: "Explain why two reflections over intersecting lines produce a rotation. What determines the angle of rotation?",
                apply: "Apply the composition (R_(O,90°CCW) ∘ r_(x-axis)) to triangle A(1,0), B(3,0), C(1,2)",
                analyze: "A point P(2,0) maps to P'(0,4) under a composition of two reflections over intersecting lines meeting at the origin. Determine the angle between the two mirror lines.",
                evaluate: "Evaluate: 'The composition of any two isometries is always a translation.' True or false? Give a specific counterexample or proof.",
                create: "Design a glide reflection that maps the letter F at position (0,0)–(2,3) to position (7,−3)–(9,0) (flipped and translated). State the reflection line and translation vector."
            }
        };
    }

    // ============================================================
    // TOPIC HANDLERS
    // ============================================================

    handleTranslation(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Translation",
            category: 'transformation',
            summary: "Translation moves every point of a figure by the same vector — same distance, same direction. It is the simplest transformation: no rotation, no flip, no size change. Described by a translation vector (a, b) with rule (x, y) → (x + a, y + b).",

            definitions: {
                translation: {
                    formal: "A transformation T_(a,b) such that every point P(x,y) maps to P'(x+a, y+b)",
                    informal: "A slide — every point moves the same distance in the same direction",
                    vector: "The translation vector ⟨a, b⟩ describes the displacement"
                },
                translationVector: {
                    definition: "The fixed vector that describes the movement; identical for every point",
                    components: "a = horizontal component (+ = right, − = left); b = vertical component (+ = up, − = down)",
                    notations: ["⟨a, b⟩", "[a; b] (column vector)", "aî + bĵ", "T_(a,b)"]
                },
                isometry: {
                    definition: "A distance-preserving transformation; translation is an isometry",
                    preserved: "Distances, angle measures, side lengths, shape, size, orientation",
                    changed: "Position of every point (unless vector = ⟨0,0⟩)"
                }
            },

            coordinateRule: {
                standard: "(x, y) → (x + a, y + b)",
                finding_vector: "a = x' − x (same for all points); b = y' − y (same for all points)",
                inverse: "Inverse of T_(a,b) is T_(−a, −b)",
                identity: "T_(0,0) is the identity transformation"
            },

            workedExamples: [
                {
                    title: "Applying a translation to a polygon",
                    preimage: "Δ ABC: A(1,2), B(4,2), C(4,5)",
                    vector: "T_(−3, 4)",
                    rule: "(x,y) → (x−3, y+4)",
                    images: "A'(−2,6), B'(1,6), C'(1,9)",
                    verification: "AB = A'B' = 3 ✓; BC = B'C' = 3 ✓ (isometry)"
                },
                {
                    title: "Finding the translation vector",
                    given: "A(2,5) → A'(7,1)",
                    solution: "a = 7−2 = 5; b = 1−5 = −4. Vector: T_(5,−4)",
                    verification: "Check B(0,3) → B'(5,−1) ✓ (same vector)"
                }
            ],

            compositionRule: {
                formula: "T_(a₂,b₂) ∘ T_(a₁,b₁) = T_(a₁+a₂, b₁+b₂)",
                commutativity: "Translations ALWAYS commute: T₁ ∘ T₂ = T₂ ∘ T₁",
                proof: "Both equal T_(a₁+a₂, b₁+b₂)"
            },

            properties: {
                noFixedPoints: "No point maps to itself (unless vector = zero)",
                preservesOrientation: "The figure is not flipped — same clockwise/counterclockwise order maintained",
                directIsometry: "Translation is a direct isometry (preserves orientation)",
                groupStructure: "Translations form an abelian (commutative) group under composition"
            },

            commonErrors: [
                {
                    error: "Adding b to x-coordinate and a to y-coordinate (swapping components)",
                    fix: "a is always added to x (horizontal); b always to y (vertical)"
                },
                {
                    error: "Thinking translation can flip or rotate the figure",
                    fix: "Translation ONLY slides; it cannot flip or rotate"
                },
                {
                    error: "Forgetting that the inverse vector negates both components",
                    fix: "Inverse of T_(a,b) = T_(−a, −b); negate BOTH a and b"
                }
            ],

            realWorldApplications: [
                "Computer graphics: moving objects without rotation",
                "GPS systems: displacing coordinate positions",
                "Animation: linear motion keyframes",
                "Textile patterns: repeating motifs by translation"
            ]
        };

        if (/vector.*notation|column.*vector/i.test(input)) {
            content.focus = "vectorNotation";
        } else if (/inverse|undo/i.test(input)) {
            content.focus = "inverseTranslation";
        } else if (/composit|combine/i.test(input)) {
            content.focus = "compositionOfTranslations";
        }

        return content;
    }

    handleReflection(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Reflection",
            category: 'transformation',
            summary: "Reflection flips a figure over a line (the mirror line), producing a congruent mirror image. The line of reflection is the perpendicular bisector of every segment joining a pre-image point to its image. Reflection is the only basic transformation that reverses orientation.",

            definitions: {
                reflection: {
                    formal: "A transformation r_l such that for each point P: (1) if P is on l, then P' = P; (2) if P is not on l, then l is the perpendicular bisector of PP'",
                    informal: "A flip across a mirror line",
                    inverseProperty: "Every reflection is its own inverse: r_l ∘ r_l = identity"
                },
                lineOfReflection: {
                    definition: "The fixed line across which the figure is flipped",
                    properties: ["Every point ON the line maps to itself (fixed points)", "Perpendicular to every PP' segment", "Bisects every PP' segment (passes through midpoint)"]
                },
                orientationReversal: {
                    definition: "Reflection changes the clockwise/counterclockwise order of vertices",
                    example: "If ΔABC has vertices A, B, C going counterclockwise, then ΔA'B'C' has them going clockwise",
                    oppositeIsometry: "Reflection is an opposite isometry — it is the ONLY basic transformation that reverses orientation"
                }
            },

            coordinateRules: {
                overXAxis: { rule: "(x, y) → (x, −y)", note: "Negate y; keep x" },
                overYAxis: { rule: "(x, y) → (−x, y)", note: "Negate x; keep y" },
                overYEqualsX: { rule: "(x, y) → (y, x)", note: "Swap x and y" },
                overYEqualsNegX: { rule: "(x, y) → (−y, −x)", note: "Swap and negate both" },
                overHorizontal_y_k: { rule: "(x, y) → (x, 2k − y)", note: "Reflect y over horizontal line y = k" },
                overVertical_x_h: { rule: "(x, y) → (2h − x, y)", note: "Reflect x over vertical line x = h" }
            },

            workedExamples: [
                {
                    title: "Reflection over x-axis",
                    preimage: "A(3,4), B(6,4), C(6,8)",
                    rule: "(x,y) → (x,−y)",
                    images: "A'(3,−4), B'(6,−4), C'(6,−8)",
                    verification: "Midpoint AA' = (3,0) — on x-axis ✓; AA' ⊥ x-axis ✓"
                },
                {
                    title: "Reflection over y = 3",
                    preimage: "P(2,7)",
                    rule: "y' = 2(3) − 7 = −1",
                    result: "P'(2,−1)",
                    verification: "Midpoint = (2, (7+(−1))/2) = (2,3) — on y=3 ✓"
                }
            ],

            symmetryConnections: {
                lineSym: "A figure has line symmetry along l if r_l maps the figure to itself",
                regularPolygons: "Regular n-gon has n lines of symmetry",
                compositionResults: {
                    parallelLines: "r_l₂ ∘ r_l₁ = translation (if l₁ ∥ l₂); magnitude = 2 × distance between lines",
                    intersectingLines: "r_l₂ ∘ r_l₁ = rotation (if l₁ ∩ l₂ = point P); angle = 2 × angle between lines"
                }
            },

            commonErrors: [
                {
                    error: "Confusing x-axis and y-axis reflection rules",
                    fix: "x-axis: negate y. y-axis: negate x. Memory tip: the axis you reflect OVER tells you which coordinate to negate — but it's the OTHER one (over x-axis → y changes)"
                },
                {
                    error: "For y=x reflection, negating instead of swapping",
                    fix: "(x,y) → (y,x) SWAPS the coordinates; no negation"
                },
                {
                    error: "Thinking reflection preserves orientation",
                    fix: "Reflection REVERSES orientation — it is an opposite isometry"
                }
            ]
        };

        return content;
    }

    handleRotation(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Rotation",
            category: 'transformation',
            summary: "Rotation turns every point of a figure about a fixed center by a given angle. The center is the only fixed point. Rotation is a direct isometry — it preserves shape, size, and orientation. Counterclockwise is the positive direction by convention.",

            definitions: {
                rotation: {
                    formal: "R_(O,θ): maps each point P to P' such that OP = OP' and ∠POP' = θ (measured CCW)",
                    threeParameters: "Center O, angle θ, direction (CCW positive)",
                    fixedPoint: "Only the center O maps to itself"
                },
                directIsometry: {
                    meaning: "Rotation preserves orientation — the clockwise/counterclockwise order of vertices is maintained",
                    contrast: "Unlike reflection, rotation does NOT flip the figure"
                },
                rotationalSymmetry: {
                    definition: "A figure has rotational symmetry of order n if R_(O, 360°/n) maps it to itself",
                    minimum_angle: "Smallest angle θ < 360° for which the rotation is a symmetry"
                }
            },

            coordinateRulesAboutOrigin: {
                "90°CCW": { rule: "(x,y) → (−y, x)", matrix: "[[0,−1],[1,0]]" },
                "180°": { rule: "(x,y) → (−x, −y)", matrix: "[[−1,0],[0,−1]]" },
                "270°CCW": { rule: "(x,y) → (y, −x)", matrix: "[[0,1],[−1,0]]" },
                "90°CW": { rule: "(x,y) → (y, −x)", note: "Same as 270° CCW" },
                "General θ": { rule: "(x·cosθ − y·sinθ, x·sinθ + y·cosθ)", matrix: "[[cosθ,−sinθ],[sinθ,cosθ]]" }
            },

            rotationAboutNonOriginCenter: {
                method: "Translate → Rotate about origin → Translate back",
                formula: { x_prime: "(x−h)cosθ − (y−k)sinθ + h", y_prime: "(x−h)sinθ + (y−k)cosθ + k" },
                example: {
                    center: "(2,1)", angle: "90° CCW", preimage: "P(5,1)",
                    step1: "Translate: (5−2, 1−1) = (3,0)",
                    step2: "Rotate 90° CCW: (−0, 3) = (0,3)",
                    step3: "Translate back: (0+2, 3+1) = (2,4)",
                    result: "P'(2,4)"
                }
            },

            compositionRule: {
                sameCenter: "R_(O,θ₁) ∘ R_(O,θ₂) = R_(O,θ₁+θ₂); angles add",
                inverse: "Inverse of R_(O,θ) is R_(O,−θ)",
                identity: "R_(O,360°) = R_(O,0°) = identity"
            },

            commonErrors: [
                {
                    error: "Confusing 90°CCW rule (−y,x) with 90°CW rule (y,−x)",
                    fix: "CCW: (−y, x) — the minus goes to x. CW: (y, −x) — the minus goes to y"
                },
                {
                    error: "Not applying translate-rotate-untranslate when center ≠ origin",
                    fix: "ALWAYS translate so center maps to origin before applying rotation matrix"
                },
                {
                    error: "Thinking 270°CCW and 90°CCW are the same",
                    fix: "270°CCW = 90°CW; the rules are (y,−x) vs (−y,x)"
                }
            ]
        };

        if (/non.*origin|arbitrary.*center/i.test(input)) {
            content.focus = "rotationAboutNonOriginCenter";
        } else if (/symmetry|order/i.test(input)) {
            content.focus = "rotationalSymmetry";
        }

        return content;
    }

    handleDilation(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Dilation",
            category: 'transformation',
            summary: "Dilation scales a figure from a center point by scale factor k, producing a similar figure. It is NOT an isometry — it changes distances unless |k| = 1. Every length scales by |k|, every area scales by k². Dilation is the defining transformation of similarity.",

            definitions: {
                dilation: {
                    formal: "D_(O,k): maps each point P to P' along ray OP such that OP' = k·OP",
                    scaleFactor: "k > 1: enlargement; 0 < k < 1: reduction; k = 1: identity; k < 0: opposite side + scaling",
                    notIsometry: "Dilation changes distances (unless |k| = 1); it is a similarity transformation"
                },
                similarityTransformation: {
                    definition: "Produces similar figures — same shape, proportional sizes",
                    preserved: "Shape, angle measures, ratios of lengths, orientation (for k > 0)",
                    changed: "Actual lengths, areas, distance between points"
                },
                scaleFactor: {
                    formula: "k = OP'/OP = image length / preimage length",
                    areaRatio: "Area(image) / Area(preimage) = k²",
                    perimeterRatio: "Perimeter(image) / Perimeter(preimage) = |k|"
                }
            },

            coordinateRules: {
                aboutOrigin: { rule: "(x,y) → (kx, ky)", note: "Multiply BOTH coordinates by k" },
                aboutCenter_h_k: {
                    rule: "(x,y) → (h + k_s(x−h), k_c + k_s(y−k_c))",
                    note: "k_s = scale factor; (h, k_c) = center",
                    method: "Translate center to origin → scale → translate back"
                }
            },

            findingCenterAndScaleFactor: {
                graphical: "Draw lines through corresponding pre-image and image points; intersection = center",
                algebraic: "k = x'/x = y'/y (when center is origin); verify consistency across all points",
                fromLengths: "k = image side length / corresponding preimage side length"
            },

            workedExamples: [
                {
                    title: "Dilation from origin, k = 3",
                    preimage: "A(1,2), B(3,2), C(3,4)",
                    images: "A'(3,6), B'(9,6), C'(9,12)",
                    verification: "AB = 2; A'B' = 6 = 3 × 2 ✓. Area: ½×2×2 = 2; image area = ½×6×6 = 18 = 9 × 2 = k² × original ✓"
                },
                {
                    title: "Finding scale factor",
                    given: "P(2,4) → P'(5,10) under dilation from origin",
                    solution: "k = 5/2 = 2.5. Verify: 10/4 = 2.5 ✓"
                }
            ],

            keyDistinctions: {
                isometryVsDilation: "Isometries preserve ALL distances; dilation preserves only RATIOS of distances",
                lengthVsArea: "Length scales by |k|; area scales by k²; volume scales by k³",
                congruentVsSimilar: "Isometries produce congruent figures (same size); dilation produces similar figures (proportional)"
            },

            commonErrors: [
                {
                    error: "Multiplying only one coordinate by k when dilating from origin",
                    fix: "BOTH x and y must be multiplied by k: (kx, ky)"
                },
                {
                    error: "Thinking area scales by k (same as lengths)",
                    fix: "Length × |k|; area × k². Always square the scale factor for area problems."
                },
                {
                    error: "Applying origin rule when center ≠ origin",
                    fix: "Must use P' = C + k(P − C) for non-origin centers"
                }
            ]
        };

        return content;
    }

    handleComposition(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Composition of Transformations",
            category: 'transformation',
            summary: "Composition applies transformations in sequence: right-to-left in notation (T₂ ∘ T₁ means apply T₁ first). Most compositions are NOT commutative. Every plane isometry is a translation, rotation, reflection, or glide reflection — these four types are closed under composition.",

            definitions: {
                composition: {
                    formal: "(T₂ ∘ T₁)(P) = T₂(T₁(P)): apply T₁ to P, then apply T₂ to the result",
                    order: "RIGHT-TO-LEFT: the rightmost transformation acts first",
                    notation: "T₂ ∘ T₁ — read as 'T₂ after T₁' or 'T₂ composed with T₁'"
                },
                glideReflection: {
                    definition: "Composition of a reflection over line l and a translation parallel to l",
                    distinctType: "NOT equivalent to any single reflection, rotation, or translation",
                    properties: "Opposite isometry (reverses orientation); no fixed points"
                },
                commutativity: {
                    general: "Most compositions are NOT commutative: T₂ ∘ T₁ ≠ T₁ ∘ T₂",
                    exception: "Translations ALWAYS commute with each other",
                    exception2: "Rotations about the SAME center commute"
                }
            },

            importantTheorems: {
                parallelReflections: "r_l₂ ∘ r_l₁ = T_(2d perpendicular) when l₁ ∥ l₂ (d = distance between lines)",
                intersectingReflections: "r_l₂ ∘ r_l₁ = R_(P, 2θ) when l₁ ∩ l₂ = P at angle θ",
                closureTheorem: "The set of all plane isometries is closed under composition",
                classificationTheorem: "Every plane isometry is exactly one of: translation, rotation, reflection, glide reflection"
            },

            matrixComposition: {
                principle: "T₂ ∘ T₁ corresponds to matrix product M₂ × M₁ (right-to-left, same as function composition)",
                example: "R₉₀CCW ∘ r_x = [[0,−1],[1,0]] × [[1,0],[0,−1]] = [[0,1],[1,0]] (= reflection over y=x)"
            },

            workedExamples: [
                {
                    title: "Translation then reflection",
                    preimage: "P(1,2)",
                    step1: "T_(3,2): P → P'(4,4)",
                    step2: "r_(y-axis): P'(4,4) → P''(−4,4)",
                    result: "P''(−4,4)"
                },
                {
                    title: "Two reflections over intersecting lines",
                    lines: "x-axis and y-axis (intersecting at origin, angle = 90°)",
                    preimage: "P(3,2)",
                    step1: "r_(x-axis): (3,2) → (3,−2)",
                    step2: "r_(y-axis): (3,−2) → (−3,−2)",
                    result: "(−3,−2)",
                    equivalent: "R_(O,180°): (x,y)→(−x,−y) → (−3,−2) ✓. Angle = 2 × 90° = 180° ✓"
                }
            ],

            fourIsometries: {
                translation: "Direct; no fixed points; preserves orientation; described by vector",
                rotation: "Direct; one fixed point (center); preserves orientation; described by center + angle",
                reflection: "Opposite; line of fixed points; reverses orientation; described by mirror line",
                glideReflection: "Opposite; no fixed points; reverses orientation; described by line + parallel vector"
            },

            commonErrors: [
                {
                    error: "Applying T₂ first when notation says T₂ ∘ T₁",
                    fix: "T₂ ∘ T₁ means T₁ FIRST, then T₂. Read right-to-left."
                },
                {
                    error: "Assuming all compositions commute",
                    fix: "Only translations (with each other) and rotations about the same center always commute"
                },
                {
                    error: "Thinking any two reflections give a translation",
                    fix: "Parallel lines → translation; INTERSECTING lines → rotation. Check first."
                }
            ]
        };

        if (/glide.*reflect/i.test(input)) {
            content.focus = "glideReflection";
        } else if (/order.*matter|commut/i.test(input)) {
            content.focus = "commutativity";
        } else if (/matrix/i.test(input)) {
            content.focus = "matrixComposition";
        }

        return content;
    }
}
