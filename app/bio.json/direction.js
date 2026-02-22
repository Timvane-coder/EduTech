Here is the complete vector mathematics workbook code:
// Enhanced Vector Mathematics Workbook - Comprehensive Vector and Direction System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedVectorWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "vectors";
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
        this.initializeVectorTopics();
        this.initializeVectorLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            vectors: {
                background: '#ffffff',
                gridColor: '#b0c4de',
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
                columnVectorBg: '#e3f2fd',
                positionVectorBg: '#e8f5e9',
                additionBg: '#fff3e0',
                subtractionBg: '#fce4ec',
                scalarBg: '#f3e5f5',
                magnitudeBg: '#e0f2f1',
                directionBg: '#ede7f6',
                parallelBg: '#e8eaf6',
                collinearityBg: '#fff8e1'
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
                structureBg: '#f9fbe7',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                columnVectorBg: '#e8eaf6',
                positionVectorBg: '#e0f2f1',
                additionBg: '#fff3e0',
                subtractionBg: '#fce4ec',
                scalarBg: '#f3e5f5',
                magnitudeBg: '#e8f5e9',
                directionBg: '#e3f2fd',
                parallelBg: '#fff8e1',
                collinearityBg: '#fce4ec'
            }
        };

        this.colors = themes[this.theme] || themes.vectors;
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
            'lambda': 'λ',
            'mu': 'μ',

            // Arrows
            'arrow': '→',
            'leftArrow': '←',
            'upArrow': '↑',
            'downArrow': '↓',
            'doubleArrow': '↔',
            'implies': '⟹',
            'iff': '⟺',
            'vectorArrow': '⃗',

            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'times': '×',
            'divide': '÷',
            'dot': '·',
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
            'union': '∪',
            'intersection': '∩',

            // Vector-specific
            'vectorAB': 'AB⃗',
            'unitVector': 'â',
            'iHat': 'î',
            'jHat': 'ĵ',
            'kHat': 'k̂',
            'magnitude': '|v|',
            'boldA': '𝐚',
            'boldB': '𝐛',
            'boldC': '𝐜',
            'boldP': '𝐩',
            'boldQ': '𝐪',
            'boldR': '𝐫',
            'boldU': '𝐮',
            'boldV': '𝐯',
            'boldZero': '𝟎',
            'parallel': '∥',
            'perpendicular': '⊥',
            'angle': '∠',
            'sum': '∑',
            'norm': '‖v‖',

            // Number types
            'integer': 'ℤ',
            'rational': 'ℚ',
            'real': 'ℝ',
            'complex': 'ℂ',
            'natural': 'ℕ'
        };
    }

    initializeVectorTopics() {
        this.mathematicsTopics = {
            column_vectors: {
                patterns: [
                    /column.?vector|component.?form/i,
                    /x.?component|y.?component/i,
                    /ordered.?pair.?vector|vector.?notation/i,
                    /horizontal.*vertical.*component/i
                ],
                handler: this.handleColumnVectors.bind(this),
                name: 'Column Vectors',
                category: 'vectors',
                description: 'Representing vectors using column notation with horizontal and vertical components',
                difficulty: 'beginner',
                prerequisites: ['coordinates', 'directed_numbers', 'number_line']
            },

            position_vectors: {
                patterns: [
                    /position.?vector|origin.*point/i,
                    /OA|OB|OP.*vector/i,
                    /coordinates.*vector|vector.*coordinates/i,
                    /fixed.*point.*vector/i
                ],
                handler: this.handlePositionVectors.bind(this),
                name: 'Position Vectors',
                category: 'vectors',
                description: 'Vectors from the origin to a fixed point describing absolute position in space',
                difficulty: 'beginner',
                prerequisites: ['column_vectors', 'cartesian_coordinates']
            },

            vector_addition: {
                patterns: [
                    /vector.?add|add.*vector/i,
                    /resultant|triangle.?law|parallelogram.?law/i,
                    /tip.?to.?tail|head.?to.?tail/i,
                    /combined.*displacement/i
                ],
                handler: this.handleVectorAddition.bind(this),
                name: 'Vector Addition',
                category: 'vectors',
                description: 'Combining two or more vectors using the triangle or parallelogram law',
                difficulty: 'beginner',
                prerequisites: ['column_vectors', 'directed_numbers']
            },

            vector_subtraction: {
                patterns: [
                    /vector.?subtract|subtract.*vector/i,
                    /difference.*vector|vector.*difference/i,
                    /AB.*vector|from.*to.*vector/i,
                    /reverse.*vector|opposite.*direction/i
                ],
                handler: this.handleVectorSubtraction.bind(this),
                name: 'Vector Subtraction',
                category: 'vectors',
                description: 'Finding the difference between two vectors; equivalent to adding the negative vector',
                difficulty: 'beginner',
                prerequisites: ['vector_addition', 'column_vectors']
            },

            scalar_multiplication: {
                patterns: [
                    /scalar.?mult|multiply.*vector/i,
                    /scale.*vector|stretch.*vector/i,
                    /k.*vector|lambda.*vector/i,
                    /enlarge.*direction/i
                ],
                handler: this.handleScalarMultiplication.bind(this),
                name: 'Scalar Multiplication',
                category: 'vectors',
                description: 'Multiplying a vector by a scalar changes its magnitude without changing its direction (unless negative)',
                difficulty: 'beginner',
                prerequisites: ['column_vectors', 'directed_numbers']
            },

            magnitude: {
                patterns: [
                    /magnitude|modulus.*vector|length.*vector/i,
                    /\|v\||norm.*vector/i,
                    /pythagoras.*vector|distance.*components/i,
                    /size.*vector|how.*long.*vector/i
                ],
                handler: this.handleMagnitude.bind(this),
                name: 'Magnitude of a Vector',
                category: 'vectors',
                description: 'Calculating the length or size of a vector using Pythagoras\'s theorem',
                difficulty: 'intermediate',
                prerequisites: ['column_vectors', 'pythagoras_theorem', 'square_roots']
            },

            direction: {
                patterns: [
                    /direction.*vector|bearing.*vector/i,
                    /angle.*vector|vector.*angle/i,
                    /arctan|inverse.*tan.*vector/i,
                    /unit.?vector|normalise/i
                ],
                handler: this.handleDirection.bind(this),
                name: 'Direction of a Vector',
                category: 'vectors',
                description: 'Finding the angle or bearing of a vector and creating unit vectors',
                difficulty: 'intermediate',
                prerequisites: ['magnitude', 'trigonometry', 'pythagoras_theorem']
            },

            parallel_vectors: {
                patterns: [
                    /parallel.*vector|vector.*parallel/i,
                    /scalar.*multiple.*parallel/i,
                    /same.*direction.*vector|opposite.*direction.*vector/i,
                    /proportional.*vector/i
                ],
                handler: this.handleParallelVectors.bind(this),
                name: 'Parallel Vectors',
                category: 'vectors',
                description: 'Identifying and proving vectors are parallel using scalar multiples',
                difficulty: 'intermediate',
                prerequisites: ['scalar_multiplication', 'column_vectors']
            },

            collinearity: {
                patterns: [
                    /collinear|points.*same.*line/i,
                    /three.*points.*line|lie.*straight.*line/i,
                    /collinearity.*proof|prove.*collinear/i,
                    /parallel.*common.*point/i
                ],
                handler: this.handleCollinearity.bind(this),
                name: 'Collinearity',
                category: 'vectors',
                description: 'Proving three or more points lie on the same straight line using vector methods',
                difficulty: 'advanced',
                prerequisites: ['parallel_vectors', 'position_vectors', 'vector_subtraction']
            }
        };
    }

    initializeVectorLessons() {
        this.lessons = {
            column_vectors: {
                title: "Column Vectors: Describing Movement with Two Components",
                concepts: [
                    "A vector has both magnitude (size) and direction — unlike a scalar which has magnitude only",
                    "Column vector notation separates horizontal (x) and vertical (y) components",
                    "The top number is the horizontal component (positive = right, negative = left)",
                    "The bottom number is the vertical component (positive = up, negative = down)",
                    "Equal vectors have identical components regardless of starting position",
                    "The zero vector (0, 0) has zero magnitude and undefined direction"
                ],
                theory: "Column vectors are the foundational language of vector mathematics. Every movement in a plane can be completely described by stating how far to move horizontally and how far to move vertically. This two-number description — the column vector — encodes both magnitude and direction simultaneously. Unlike coordinates, which describe a fixed position, a column vector describes a displacement: a change in position.",
                keyDefinitions: {
                    "Vector": "A quantity with both magnitude and direction, represented by an arrow or column notation",
                    "Scalar": "A quantity with magnitude only (e.g., temperature, mass, speed)",
                    "Column Vector": "A vector written as a vertical pair of numbers: (x; y) where x is horizontal and y is vertical displacement",
                    "Horizontal Component": "The x-component of a vector; positive values move right, negative values move left",
                    "Vertical Component": "The y-component of a vector; positive values move up, negative values move down",
                    "Equal Vectors": "Two vectors are equal if and only if they have identical components — same magnitude and same direction",
                    "Zero Vector": "The vector (0; 0) representing no displacement; written as 0 or bold-zero",
                    "Free Vector": "A vector that can be placed anywhere — only its magnitude and direction matter, not its starting point",
                    "Negative Vector": "The vector −a has the same magnitude as a but exactly opposite direction"
                },
                notation: {
                    columnForm: "Vector a = (3; −2) means 3 units right and 2 units down",
                    boldNotation: "Vectors in print are written in bold: a, b, v",
                    underlineNotation: "Vectors in handwriting are underlined: a, b, v",
                    arrowNotation: "AB⃗ means the vector from point A to point B",
                    componentForm: "a = (aₓ; aᵧ) where aₓ is horizontal, aᵧ is vertical"
                },
                readingColumnVectors: {
                    fromDiagram: {
                        step1: "Identify the start point and end point of the arrow",
                        step2: "Count squares moved horizontally (right = positive, left = negative)",
                        step3: "Count squares moved vertically (up = positive, down = negative)",
                        step4: "Write as column vector: (horizontal; vertical)"
                    },
                    fromCoordinates: {
                        formula: "Vector AB = B − A = (Bₓ − Aₓ; Bᵧ − Aᵧ)",
                        example: "A(2, 3) to B(5, 1): AB = (5−2; 1−3) = (3; −2)"
                    }
                },
                workedExamples: [
                    {
                        expression: "Write the column vector for movement: 4 right, 3 up",
                        solution: "a = (4; 3)",
                        diagram: "Arrow starting at origin, ending at (4, 3)"
                    },
                    {
                        expression: "Write the column vector from A(1, 2) to B(4, 0)",
                        solution: "AB = (4−1; 0−2) = (3; −2)",
                        check: "Start at A(1,2), move 3 right and 2 down → arrive at B(4,0) ✓"
                    },
                    {
                        expression: "If a = (−3; 5), describe the movement in words",
                        solution: "3 units left and 5 units up",
                        direction: "Moving into the second quadrant direction"
                    },
                    {
                        expression: "Are (2; 4) and (1; 2) the same vector?",
                        solution: "No — equal vectors must have identical components. (2; 4) ≠ (1; 2)",
                        note: "(1; 2) is a scalar multiple of (2; 4) but they are not equal"
                    }
                ],
                specialVectors: {
                    zeroVector: "(0; 0) — no movement; the additive identity for vectors",
                    horizontalVector: "(a; 0) — purely horizontal movement",
                    verticalVector: "(0; b) — purely vertical movement",
                    diagonalVectors: "Both components non-zero — diagonal movement"
                },
                applications: [
                    "Navigation and GPS displacement calculations",
                    "Physics: describing velocity, force, and acceleration",
                    "Computer graphics: translating objects on screen",
                    "Robotics: programming movement instructions",
                    "Engineering: structural force components"
                ]
            },

            position_vectors: {
                title: "Position Vectors: Fixing Points in Space from the Origin",
                concepts: [
                    "The position vector of point P is the vector OP from the origin O to P",
                    "Position vectors are tied to the origin — unlike free vectors they have a fixed start",
                    "The position vector of P(a, b) is simply (a; b)",
                    "Any vector AB can be expressed in terms of position vectors: AB = b − a",
                    "Position vectors provide a coordinate system for vector geometry",
                    "Midpoints and division of line segments use position vectors"
                ],
                theory: "Position vectors connect the abstract concept of vectors to the familiar Cartesian coordinate system. Every point in a plane has a unique position vector — its 'address' from the origin. This makes position vectors the bridge between coordinate geometry and vector geometry. Once points are expressed as position vectors, powerful vector methods become available for proving geometric properties.",
                keyDefinitions: {
                    "Position Vector": "The vector from the origin O to a point P; written OP or lowercase bold letter p",
                    "Origin": "The fixed reference point O = (0, 0); start of all position vectors",
                    "Point-to-Point Vector": "AB = b − a (position vector of B minus position vector of A)",
                    "Midpoint Vector": "Midpoint M of AB has position vector m = ½(a + b)",
                    "Section Formula": "Point dividing AB in ratio m:n has position vector (na + mb)/(m+n)"
                },
                fromCoordinatesToPositionVectors: {
                    rule: "If P has coordinates (x, y), its position vector is p = (x; y)",
                    examples: [
                        "P(3, 4) → p = (3; 4)",
                        "Q(−2, 7) → q = (−2; 7)",
                        "R(0, −5) → r = (0; −5)"
                    ]
                },
                vectorBetweenPoints: {
                    formula: "AB = OB − OA = b − a",
                    reasoning: "Travel from A to B = travel backwards from A to O (−a) then from O to B (b)",
                    route: "A → O → B gives: −a + b = b − a",
                    example: {
                        A: "(2; 3)",
                        B: "(7; 1)",
                        AB: "(7; 1) − (2; 3) = (5; −2)"
                    }
                },
                midpointFormula: {
                    formula: "m = ½(a + b) = ((aₓ+bₓ)/2 ; (aᵧ+bᵧ)/2)",
                    derivation: "Midpoint M is reached by going halfway along AB: m = a + ½(b − a) = ½a + ½b",
                    example: "A(2,4) and B(6,0): midpoint = ((2+6)/2 ; (4+0)/2) = (4; 2)"
                },
                workedExamples: [
                    {
                        expression: "A has position vector a = (3; 2), B has position vector b = (7; 6). Find AB.",
                        solution: "AB = b − a = (7−3; 6−2) = (4; 4)",
                        check: "Start at A(3,2), move 4 right 4 up → B(7,6) ✓"
                    },
                    {
                        expression: "Find the position vector of the midpoint M of AB where a = (1; 5), b = (9; 1)",
                        solution: "m = ½(a + b) = ½(1+9; 5+1) = ½(10; 6) = (5; 3)",
                        check: "M(5, 3) lies halfway between A(1,5) and B(9,1) ✓"
                    },
                    {
                        expression: "Given OA = (4; 2) and OB = (−2; 8), find BA",
                        solution: "BA = a − b = (4−(−2); 2−8) = (6; −6)",
                        note: "BA is the reverse of AB: BA = −AB ✓"
                    }
                ],
                applications: [
                    "GPS and mapping: fixing absolute positions",
                    "Robotics: absolute arm position coordinates",
                    "Physics: centre of mass calculations",
                    "Computer graphics: object anchoring and transformation",
                    "Surveying: fixed reference benchmarks"
                ]
            },

            vector_addition: {
                title: "Vector Addition: Combining Displacements",
                concepts: [
                    "Vectors are added by adding corresponding components: (a; b) + (c; d) = (a+c; b+d)",
                    "The triangle law: place vectors tip-to-tail; resultant joins first tail to last tip",
                    "The parallelogram law: both vectors from same point; resultant is the diagonal",
                    "Vector addition is commutative: a + b = b + a",
                    "Vector addition is associative: (a + b) + c = a + (b + c)",
                    "The zero vector is the additive identity: a + 0 = a",
                    "Adding a vector to its negative gives the zero vector: a + (−a) = 0"
                ],
                theory: "Vector addition captures the physical reality of combined displacements. Walking 3 metres north then 4 metres east arrives at the same point as the single resultant displacement — the hypotenuse of the right triangle. The algebraic rule (add components) and the geometric rule (tip-to-tail) are two descriptions of the same operation. Mastering both perspectives is essential for vector geometry and mechanics.",
                keyDefinitions: {
                    "Resultant Vector": "The single vector equivalent to two or more vectors combined; the sum",
                    "Triangle Law": "To add a and b: draw a, then draw b starting where a ended; resultant goes from start of a to end of b",
                    "Parallelogram Law": "Draw a and b from the same point; complete the parallelogram; diagonal is a + b",
                    "Commutative Property": "a + b = b + a for all vectors a and b",
                    "Associative Property": "(a + b) + c = a + (b + c) for all vectors",
                    "Additive Identity": "a + 0 = a; the zero vector adds nothing"
                },
                algebraicMethod: {
                    rule: "Add corresponding components",
                    formula: "(a₁; a₂) + (b₁; b₂) = (a₁+b₁ ; a₂+b₂)",
                    example: "(3; 4) + (−1; 2) = (2; 6)",
                    multipleVectors: "Sum all x-components; sum all y-components"
                },
                geometricMethod: {
                    triangleLaw: {
                        step1: "Draw vector a as an arrow",
                        step2: "Place the tail of vector b at the tip of vector a",
                        step3: "Draw the resultant from the tail of a to the tip of b",
                        note: "Works for any number of vectors: chain them tip-to-tail"
                    },
                    parallelogramLaw: {
                        step1: "Draw both vectors a and b from the same starting point",
                        step2: "Complete the parallelogram by drawing parallel copies",
                        step3: "The diagonal from the common starting point is a + b"
                    }
                },
                workedExamples: [
                    {
                        expression: "a = (3; 2), b = (1; 4). Find a + b.",
                        solution: "a + b = (3+1; 2+4) = (4; 6)",
                        geometric: "Move 3 right 2 up, then 1 right 4 up — total: 4 right 6 up"
                    },
                    {
                        expression: "p = (−2; 5), q = (4; −3), r = (1; 1). Find p + q + r.",
                        solution: "p + q + r = (−2+4+1; 5+(−3)+1) = (3; 3)",
                        note: "Add all x-components together, then all y-components together"
                    },
                    {
                        expression: "A ship travels (40; 30) km then (−10; 50) km. Find total displacement.",
                        solution: "Total = (40+(−10); 30+50) = (30; 80) km",
                        magnitude: "|displacement| = √(30² + 80²) = √(900 + 6400) = √7300 ≈ 85.4 km"
                    },
                    {
                        expression: "Verify commutativity: a = (2; −1), b = (3; 4)",
                        solution: "a+b = (5; 3); b+a = (5; 3) ✓ Commutative property confirmed"
                    }
                ],
                properties: {
                    closure: "Sum of two vectors is always a vector",
                    commutativity: "a + b = b + a",
                    associativity: "(a + b) + c = a + (b + c)",
                    identity: "a + 0 = a",
                    inverse: "a + (−a) = 0"
                },
                applications: [
                    "Navigation: combining multiple course legs to find total displacement",
                    "Physics: adding force vectors to find net force",
                    "Engineering: structural load combinations",
                    "Aviation: combining wind velocity with aircraft velocity",
                    "Sports science: combined player movement analysis"
                ]
            },

            vector_subtraction: {
                title: "Vector Subtraction: Finding Differences and Directions",
                concepts: [
                    "Subtract vectors by subtracting corresponding components: (a; b) − (c; d) = (a−c; b−d)",
                    "a − b is equivalent to a + (−b): add the negative of b",
                    "The vector from A to B is AB = b − a (position vector of B minus position vector of A)",
                    "The negative vector −a has the same magnitude as a but opposite direction",
                    "Vector subtraction is NOT commutative: a − b ≠ b − a in general",
                    "a − b and b − a are negatives of each other: a − b = −(b − a)"
                ],
                theory: "Vector subtraction is the tool for finding directed distances between points — which direction and how far is it from A to B? The key insight is that AB = b − a: you subtract the position vector you start from and add the one you end at. This formula is the workhorse of vector geometry proofs. Geometrically, a − b is the vector that must be added to b to get a.",
                keyDefinitions: {
                    "Vector Subtraction": "a − b = a + (−b); subtracting b is equivalent to adding its negative",
                    "Negative Vector": "−a has identical magnitude to a but exactly opposite direction; −(aₓ; aᵧ) = (−aₓ; −aᵧ)",
                    "Point-to-Point Formula": "Vector from A to B: AB = b − a where a and b are position vectors of A and B",
                    "Non-Commutativity": "a − b ≠ b − a; order matters in subtraction"
                },
                algebraicMethod: {
                    rule: "Subtract corresponding components",
                    formula: "(a₁; a₂) − (b₁; b₂) = (a₁−b₁ ; a₂−b₂)",
                    negativeFirst: "Can also negate b then add: −(b₁; b₂) = (−b₁; −b₂), then add to a",
                    example: "(5; 3) − (2; 7) = (3; −4)"
                },
                geometricMethod: {
                    interpretation: "a − b is the vector from the tip of b to the tip of a when both start from the same point",
                    triangleMethod: "Draw a and b from same origin; the vector FROM tip of b TO tip of a is a − b"
                },
                ABformula: {
                    critical: "This is the most important application of vector subtraction",
                    formula: "AB = OB − OA = b − a",
                    example: "A(2,3) position vector a=(2;3); B(7,1) position vector b=(7;1); AB = (7;1)−(2;3) = (5;−2)",
                    reverse: "BA = a − b = −AB"
                },
                workedExamples: [
                    {
                        expression: "a = (6; 2), b = (4; 5). Find a − b.",
                        solution: "a − b = (6−4; 2−5) = (2; −3)",
                        geometric: "The vector from tip of b to tip of a when drawn from common origin"
                    },
                    {
                        expression: "Points A(1, 4) and B(3, −2). Find vector AB.",
                        solution: "AB = b − a = (3;−2) − (1;4) = (2; −6)",
                        check: "From A(1,4): move 2 right 6 down → B(3,−2) ✓"
                    },
                    {
                        expression: "Verify non-commutativity: a = (3;1), b = (1;4)",
                        solution: "a−b = (2;−3); b−a = (−2;3). Note b−a = −(a−b) ✓"
                    },
                    {
                        expression: "If a = (5;2) and a − b = (3;−1), find b.",
                        solution: "b = a − (a−b) = (5;2) − (3;−1) = (2;3)"
                    }
                ],
                applications: [
                    "Finding displacement between two positions",
                    "Physics: relative velocity (velocity of A relative to B)",
                    "Computer graphics: calculating directions between objects",
                    "Surveying: difference in position measurements",
                    "Navigation: homing vector to destination"
                ]
            },

            scalar_multiplication: {
                title: "Scalar Multiplication: Scaling Vectors",
                concepts: [
                    "Multiplying a vector by a positive scalar stretches or shrinks it without changing direction",
                    "Multiplying by a negative scalar reverses the direction",
                    "Multiplying by zero gives the zero vector",
                    "Component-wise: k(a; b) = (ka; kb)",
                    "Scalar multiplication distributes over vector addition: k(a + b) = ka + kb",
                    "Scalar multiplication distributes over scalar addition: (k + m)a = ka + ma",
                    "Scalar multiplication is associative with scalar multiplication: k(ma) = (km)a"
                ],
                theory: "Scalar multiplication scales a vector — changing its length while preserving (or reversing) its direction. This operation is fundamental for expressing parallel vectors, creating unit vectors, and building general vectors from components. The word 'scalar' means 'scaling factor' — a real number that scales the vector. Understanding scalar multiplication is prerequisite for understanding parallelism and collinearity.",
                keyDefinitions: {
                    "Scalar": "A real number used to multiply a vector; has magnitude but no direction",
                    "Scalar Multiplication": "k × a = (kaₓ; kaᵧ); each component multiplied by the scalar k",
                    "Stretching": "k > 1: vector lengthened in same direction",
                    "Compression": "0 < k < 1: vector shortened in same direction",
                    "Reversal": "k < 0: vector reversed in direction (magnitude |k| times original)",
                    "Zero Multiplication": "0 × a = 0 (zero vector)"
                },
                algebraicRule: {
                    formula: "k × (a₁; a₂) = (ka₁; ka₂)",
                    examples: [
                        "3 × (2; 4) = (6; 12) — tripled in length, same direction",
                        "½ × (6; 4) = (3; 2) — halved in length, same direction",
                        "−2 × (3; 1) = (−6; −2) — doubled in length, reversed direction",
                        "0 × (5; 3) = (0; 0) — zero vector"
                    ]
                },
                effectsOnMagnitude: {
                    rule: "|ka| = |k| × |a|",
                    note: "Magnitude is always positive — use |k| not k",
                    example: "a = (3; 4), |a| = 5; k = −2: |ka| = |−2| × 5 = 10"
                },
                properties: {
                    distributiveOverVectorAddition: "k(a + b) = ka + kb",
                    distributiveOverScalarAddition: "(j + k)a = ja + ka",
                    associativity: "(jk)a = j(ka)",
                    identityScalar: "1 × a = a",
                    zeroScalar: "0 × a = 0",
                    negativeOne: "(−1)a = −a"
                },
                workedExamples: [
                    {
                        expression: "a = (3; −2). Find 4a.",
                        solution: "4a = (12; −8)",
                        magnitude: "|a| = √13, |4a| = 4√13 = 4 × |a| ✓"
                    },
                    {
                        expression: "b = (6; 4). Find −½b.",
                        solution: "−½b = (−3; −2)",
                        note: "Direction reversed, magnitude halved"
                    },
                    {
                        expression: "a = (2; 3), b = (1; −1). Verify k(a+b) = ka + kb for k = 3.",
                        solution: "a+b = (3;2); 3(a+b) = (9;6). ka = (6;9); kb = (3;−3); ka+kb = (9;6) ✓"
                    },
                    {
                        expression: "Find the value of k such that k(4; 3) = (−8; −6)",
                        solution: "k = −8/4 = −2. Check: k×3 = −2×3 = −6 ✓. So k = −2"
                    }
                ],
                applications: [
                    "Scale diagrams: enlarging and reducing displacement vectors",
                    "Physics: force multiples and acceleration",
                    "Creating unit vectors from any vector",
                    "Proving parallelism between vectors",
                    "Computer graphics: scaling and reflection transforms"
                ]
            },

            magnitude: {
                title: "Magnitude of a Vector: Length Using Pythagoras",
                concepts: [
                    "Magnitude is the length of a vector, always a non-negative real number",
                    "Notation: |a| or ‖a‖ denotes the magnitude of vector a",
                    "For a = (x; y): |a| = √(x² + y²) by Pythagoras's theorem",
                    "The zero vector has magnitude 0",
                    "A unit vector has magnitude exactly 1",
                    "|ka| = |k| × |a| for any scalar k",
                    "The triangle inequality holds: |a + b| ≤ |a| + |b|"
                ],
                theory: "Magnitude gives vectors their 'size' — the actual distance you would travel following the vector arrow. The formula uses Pythagoras's theorem because the x and y components form the two legs of a right-angled triangle, and the vector itself is the hypotenuse. This connection to Pythagoras makes magnitude calculations intuitive once you visualize the right triangle inside every vector.",
                keyDefinitions: {
                    "Magnitude": "The length of a vector; computed using Pythagoras's theorem from components",
                    "Modulus": "Another name for magnitude; |a| denotes the modulus of vector a",
                    "Unit Vector": "A vector with magnitude exactly equal to 1; direction preserved, length normalized",
                    "Normalising": "Dividing a vector by its own magnitude to produce the corresponding unit vector: â = a/|a|",
                    "Triangle Inequality": "|a + b| ≤ |a| + |b|; direct path ≤ sum of indirect path lengths"
                },
                formula: {
                    twoD: "|a| = √(aₓ² + aᵧ²) for a = (aₓ; aᵧ)",
                    derivation: "The components aₓ and aᵧ are the legs of a right triangle with |a| as hypotenuse: |a|² = aₓ² + aᵧ² by Pythagoras",
                    threeD: "|a| = √(aₓ² + aᵧ² + a_z²) for 3D vectors (extension)"
                },
                unitVectors: {
                    definition: "â = a / |a|",
                    purpose: "Preserves direction information while standardising length to 1",
                    example: "a = (3; 4), |a| = 5, â = (3/5; 4/5) = (0.6; 0.8)",
                    check: "|â| = √(0.36 + 0.64) = √1 = 1 ✓",
                    standardBasis: "î = (1; 0) and ĵ = (0; 1) are the standard 2D unit vectors"
                },
                workedExamples: [
                    {
                        expression: "Find |a| where a = (3; 4).",
                        solution: "|a| = √(3² + 4²) = √(9 + 16) = √25 = 5",
                        note: "3-4-5 right triangle — recognise Pythagorean triples"
                    },
                    {
                        expression: "Find the magnitude of b = (−5; 12).",
                        solution: "|b| = √(25 + 144) = √169 = 13",
                        note: "5-12-13 Pythagorean triple"
                    },
                    {
                        expression: "Find the unit vector in the direction of c = (1; 1).",
                        solution: "|c| = √2; ĉ = (1/√2; 1/√2) = (√2/2; √2/2)",
                        check: "|(√2/2; √2/2)| = √(½ + ½) = √1 = 1 ✓"
                    },
                    {
                        expression: "Verify |ka| = |k||a|: a = (3;4), k = −2.",
                        solution: "|a| = 5; ka = (−6;−8); |ka| = √(36+64) = √100 = 10 = |−2|×5 = 2×5 ✓"
                    },
                    {
                        expression: "A vector has magnitude 13 and x-component 5. Find the y-component.",
                        solution: "13² = 5² + y² → 169 = 25 + y² → y² = 144 → y = ±12"
                    }
                ],
                commonPythagoreanTriples: [
                    "(3, 4, 5) — magnitude 5",
                    "(5, 12, 13) — magnitude 13",
                    "(8, 15, 17) — magnitude 17",
                    "(7, 24, 25) — magnitude 25",
                    "(6, 8, 10) = 2×(3,4,5) — magnitude 10"
                ],
                applications: [
                    "Speed calculation: magnitude of velocity vector",
                    "Distance measurement in 2D space",
                    "Normalising direction vectors in computer graphics",
                    "Structural engineering: calculating force magnitudes",
                    "Navigation: total distance of displacement"
                ]
            },

            direction: {
                title: "Direction of a Vector: Angles, Bearings and Unit Vectors",
                concepts: [
                    "The direction of a vector is the angle it makes with the positive x-axis (or north for bearings)",
                    "Direction angle θ: tan(θ) = vertical component / horizontal component",
                    "θ = arctan(aᵧ / aₓ), adjusted for quadrant",
                    "Bearings measure clockwise from north: 0° to 360°",
                    "A unit vector encodes direction without magnitude: â = a / |a|",
                    "Any vector can be written as: a = |a| × â (magnitude × direction)",
                    "Opposite vectors have directions differing by exactly 180°"
                ],
                theory: "Direction completes the description of a vector alongside magnitude. Two pieces of information — how far and in what direction — fully determine any vector. The direction angle comes from trigonometry: the components form a right triangle, and tan(θ) gives the angle from the horizontal. Care must be taken with quadrant adjustments since arctan only returns values in (−90°, 90°). Bearings provide an alternative direction system used in navigation and surveying.",
                keyDefinitions: {
                    "Direction Angle": "The angle θ a vector makes with the positive x-axis, measured anticlockwise; range [0°, 360°)",
                    "Bearing": "Angle measured clockwise from north (positive y-axis); written as three figures (e.g., 045°)",
                    "Quadrant": "One of four regions of the xy-plane; determines sign of components and quadrant of direction",
                    "Arctan (tan⁻¹)": "Inverse tangent function returning the angle whose tangent is a given value; range (−90°, 90°)",
                    "Quadrant Adjustment": "Add 180° if vector is in Q2 or Q3 (x-component negative); add 360° if result negative",
                    "Unit Vector Direction": "â = a/|a|; captures direction as a vector of length 1"
                },
                findingDirectionAngle: {
                    formula: "θ = arctan(aᵧ / aₓ)",
                    quadrantAdjustment: {
                        Q1: "aₓ > 0, aᵧ > 0: use θ = arctan(aᵧ/aₓ) directly",
                        Q2: "aₓ < 0, aᵧ > 0: add 180° to arctan result",
                        Q3: "aₓ < 0, aᵧ < 0: add 180° to arctan result (gives angle in 180°–270°)",
                        Q4: "aₓ > 0, aᵧ < 0: add 360° if result is negative, or use 360° + arctan result"
                    },
                    principleAngle: "Always draw a sketch to confirm the quadrant before applying the formula"
                },
                bearingFormula: {
                    fromDirectionAngle: "Bearing = 90° − direction angle (for Q1); adjust for other quadrants",
                    northBased: "North corresponds to the positive y-axis; bearings are clockwise from north",
                    example: "Direction angle 30° from positive x → bearing 060° (90° − 30°)"
                },
                workedExamples: [
                    {
                        expression: "Find the direction of a = (3; 3).",
                        solution: "θ = arctan(3/3) = arctan(1) = 45°. Vector is in Q1, so θ = 45°.",
                        bearing: "Bearing = 90° − 45° = 045°"
                    },
                    {
                        expression: "Find the direction of b = (−4; 4).",
                        solution: "arctan(4/−4) = arctan(−1) = −45°. Q2 (x<0, y>0): θ = −45° + 180° = 135°",
                        bearing: "Bearing = 90° − 135° = −45° → 360° − 45° = 315°"
                    },
                    {
                        expression: "Find the unit vector in the direction of c = (5; 12).",
                        solution: "|c| = √(25+144) = 13; ĉ = (5/13; 12/13) ≈ (0.385; 0.923)"
                    },
                    {
                        expression: "Write a = (6; 8) as magnitude × unit vector.",
                        solution: "|a| = 10; â = (0.6; 0.8); a = 10 × (0.6; 0.8) ✓"
                    }
                ],
                applications: [
                    "Navigation and aviation: course bearings",
                    "Robotics: specifying movement directions",
                    "Physics: direction of force and velocity vectors",
                    "Surveying: traverse calculations",
                    "Computer graphics: orientation of objects"
                ]
            },

            parallel_vectors: {
                title: "Parallel Vectors: Same Direction, Different Size",
                concepts: [
                    "Two vectors are parallel if one is a non-zero scalar multiple of the other",
                    "If a = kb for some scalar k ≠ 0, then a and b are parallel",
                    "Parallel vectors have identical or exactly opposite directions",
                    "The ratio of corresponding components is constant for parallel vectors",
                    "Anti-parallel vectors are parallel with opposite directions (k < 0)",
                    "Any two parallel vectors with a common point lie on the same line",
                    "If a ∥ b then (aₓ/bₓ) = (aᵧ/bᵧ) = k (where b components are non-zero)"
                ],
                theory: "Parallelism between vectors is the geometric translation of scalar multiplication. If you can stretch or compress and possibly flip one vector to get another, they are parallel — they point in the same or opposite direction. The algebraic test is simple: check whether the ratio of corresponding components is constant. This concept is the gateway to proving collinearity and expressing unknown vectors in terms of known base vectors.",
                keyDefinitions: {
                    "Parallel Vectors": "a ∥ b if and only if a = kb for some non-zero scalar k",
                    "Anti-parallel": "Parallel vectors with opposite directions; k < 0",
                    "Direction Ratio": "The ratio aₓ:aᵧ characterises the direction of a vector; parallel vectors share direction ratios",
                    "Scalar Multiple Test": "To test if a ∥ b: check whether aₓ/bₓ = aᵧ/bᵧ = k (same constant)"
                },
                testingParallelism: {
                    method: "For a = (a₁; a₂) and b = (b₁; b₂): a ∥ b ⟺ a₁b₂ = a₂b₁",
                    alternativeMethod: "Find k such that a = kb: check k = a₁/b₁ = a₂/b₂",
                    crossMultiply: "Cross multiplication: a₁/b₁ = a₂/b₂ ↔ a₁b₂ − a₂b₁ = 0",
                    example: "a = (4; 6), b = (2; 3): 4/2 = 2, 6/3 = 2 → k = 2 → a = 2b → parallel ✓"
                },
                findingParallelVectors: {
                    givenK: "Multiply each component by k: k(a₁; a₂) = (ka₁; ka₂)",
                    findingK: "Divide one component of a by corresponding component of b — check other component confirms",
                    example: "If (6; 9) = k(2; 3), then k = 3. Check: 3 × (2; 3) = (6; 9) ✓"
                },
                workedExamples: [
                    {
                        expression: "Are a = (4; 6) and b = (6; 9) parallel?",
                        solution: "a₁b₂ − a₂b₁ = 4×9 − 6×6 = 36 − 36 = 0 → parallel ✓. b = (3/2)a"
                    },
                    {
                        expression: "Are p = (3; 2) and q = (6; 5) parallel?",
                        solution: "3×5 − 2×6 = 15 − 12 = 3 ≠ 0 → NOT parallel"
                    },
                    {
                        expression: "Find value of t if a = (3; t) is parallel to b = (6; 8).",
                        solution: "For parallel: 3/6 = t/8 → t = 8 × (3/6) = 4"
                    },
                    {
                        expression: "Express (−6; 9) as scalar multiple of (2; −3).",
                        solution: "k = −6/2 = −3. Check: −3 × (−3) = 9 ✓. So (−6;9) = −3(2;−3) — anti-parallel"
                    }
                ],
                applications: [
                    "Proving geometric properties of parallelograms and trapezoids",
                    "Identifying collinear points (parallel + common point = same line)",
                    "Computer graphics: determining object alignment",
                    "Physics: when forces are parallel and can be combined by scalar addition",
                    "Structural analysis: identifying parallel structural members"
                ]
            },

            collinearity: {
                title: "Collinearity: Proving Points Lie on the Same Line",
                concepts: [
                    "Three points A, B, C are collinear if and only if AB is parallel to AC (or BC)",
                    "AB ∥ AC means AB = k × AC for some scalar k",
                    "Point A is common to both vectors AB and AC, confirming they lie on one line",
                    "Collinearity test: find AB and AC (or any two vectors between the three points)",
                    "If AB = k × AC for scalar k, then A, B, C are collinear",
                    "The converse is also true: collinear points always give parallel vectors with a common point"
                ],
                theory: "Collinearity is the ultimate test of whether points 'line up'. The vector method is powerful because it replaces the visual check with an algebraic proof. Three points are collinear if and only if the vectors connecting them are parallel AND share a common point. Finding vectors between the points and checking for a scalar multiple relationship provides a rigorous, unambiguous proof of collinearity — essential in coordinate geometry proofs.",
                keyDefinitions: {
                    "Collinear Points": "Points that all lie on the same straight line",
                    "Collinearity Condition": "A, B, C collinear ⟺ AB = k × AC for some scalar k (with A as common point)",
                    "Common Point Requirement": "Two parallel vectors MUST share a common point to confirm collinearity; parallel without common point = different parallel lines",
                    "Section Point": "A point that divides a line segment in a given ratio; confirmed collinear by definition"
                },
                proofStructure: {
                    step1: "Express position vectors of all three points",
                    step2: "Find two vectors using the subtraction formula: AB = b − a, AC = c − a",
                    step3: "Show AB = k × AC for some scalar k",
                    step4: "State that A is a common point; therefore A, B, C are collinear",
                    template: "Since AB = k × AC and point A is common to both, A, B, C are collinear. ■"
                },
                workedExamples: [
                    {
                        expression: "A(1,2), B(3,6), C(5,10). Prove collinearity.",
                        solution: {
                            step1: "a=(1;2), b=(3;6), c=(5;10)",
                            step2: "AB = b − a = (2;4); AC = c − a = (4;8)",
                            step3: "AB = ½ × AC (or AC = 2 × AB)",
                            step4: "AB and AC are parallel scalars with common point A → A, B, C collinear ✓"
                        }
                    },
                    {
                        expression: "A(2,1), B(5,4), C(8,7). Prove collinear using vectors.",
                        solution: {
                            AB: "AB = (3;3)",
                            AC: "AC = (6;6)",
                            k: "AB = ½ × AC → parallel",
                            conclusion: "Common point A → A, B, C are collinear ✓"
                        }
                    },
                    {
                        expression: "Are A(0,0), B(2,3), C(4,5) collinear?",
                        solution: {
                            AB: "AB = (2;3)",
                            AC: "AC = (4;5)",
                            test: "2/4 = 0.5 ≠ 3/5 = 0.6 → NOT parallel → NOT collinear"
                        }
                    },
                    {
                        expression: "Given a = (1;2), b = (4;8), c = (t;14), find t for collinearity.",
                        solution: {
                            AB: "AB = (3;6)",
                            AC: "AC = (t−1;12)",
                            condition: "(t−1)/3 = 12/6 = 2 → t−1 = 6 → t = 7",
                            result: "c = (7;14)"
                        }
                    }
                ],
                applications: [
                    "Coordinate geometry: proving points are co-linear without drawing",
                    "Robotics: verifying joints lie along the same arm segment",
                    "Surveying: verifying alignment of measurement points",
                    "Architecture: verifying structural elements are on the same line",
                    "Computer vision: detecting straight-line features in images"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: VECTOR WALK — DISPLACEMENT DISCOVERY
            // ========================================

            vector_walk_displacement: {
                name: "Vector Walk: Discovering Displacement Through Physical Movement",
                relatedTopics: ['column_vectors', 'vector_addition', 'magnitude'],
                category: 'vectors',
                historicalBackground: {
                    origin: "Rooted in ancient surveying and navigation — Egyptians and Babylonians described journeys as sequences of directed steps",
                    development: "Formalised as vector analysis by Josiah Willard Gibbs (1839–1903) and Oliver Heaviside (1850–1925)",
                    significance: "The physical experience of walking vectors makes the abstract idea of displacement tangible and intuitive",
                    connection: "Every GPS navigation instruction is a modern version of vector addition: 'travel 200m north, then 150m east'",
                    pedagogicalBasis: "Kinaesthetic learning: performing vector movements with the body before representing them on paper"
                },
                practicalMathematics: {
                    title: "Vector Walk: Physical Displacement as Column Vectors",
                    hypothesis: "If physical displacement in two directions is recorded as a column vector, then combining multiple displacement vectors by addition should predict the final position relative to the starting point",
                    purpose: "Discover the meaning of column vectors and vector addition through physical movement on a grid, then verify algebraically",
                    materials: [
                        "Large grid mat or chalk grid on floor (1m × 1m squares)",
                        "Compass or orientation marker for north/east",
                        "Instruction cards describing vector movements",
                        "Recording sheets for column vector notation",
                        "Measuring tape for verification",
                        "Coloured string or chalk to trace paths",
                        "Protractor for direction measurements"
                    ],
                    procedure: [
                        "SETUP: Mark a grid on the floor with east = positive x, north = positive y",
                        "Mark the starting point O clearly",
                        "",
                        "PART A: Reading and Performing Individual Vectors",
                        "1. Instructor calls: 'Vector (3; 2)' — student walks 3 steps east, 2 steps north",
                        "2. Student records start and end point as coordinates",
                        "3. Student writes the movement as column vector: (3; 2)",
                        "4. Repeat for: (−2; 4), (5; −3), (0; 3), (−4; −1)",
                        "5. Note: the path taken does not matter — only start and end points",
                        "",
                        "PART B: Discovering Vector Addition — Multi-Leg Journey",
                        "6. Perform the journey: start at O",
                        "   Leg 1: walk (3; 2) — pause, record position",
                        "   Leg 2: from that point, walk (1; 4) — pause, record position",
                        "7. Record final position coordinates",
                        "8. Calculate total displacement using column vector addition: (3;2) + (1;4) = (4;6)",
                        "9. Verify: the final position should match coordinates (4, 6) from O",
                        "10. String from O to final position — measure and compare to calculated magnitude",
                        "",
                        "PART C: Return to Origin Challenge",
                        "11. After a three-leg journey, find the return vector",
                        "    Journey: (2;3) then (−1;4) then (3;−2). Where are you?",
                        "    Total displacement = (2;3) + (−1;4) + (3;−2) = (4;5)",
                        "    Return vector = −(4;5) = (−4;−5)",
                        "12. Verify by performing the return walk",
                        "",
                        "PART D: Recording and Formalising",
                        "13. Sketch each journey on squared paper",
                        "14. Draw the resultant (direct path from start to finish) as an arrow",
                        "15. Label each leg with its column vector",
                        "16. Confirm: sum of component vectors = resultant vector (both components separately)"
                    ],
                    dataTable: [
                        ["Journey Legs", "Leg Vectors", "Sum of x-components", "Sum of y-components", "Resultant Vector", "Measured Distance"],
                        ["(3;2) then (1;4)", "(3;2),(1;4)", "3+1=4", "2+4=6", "(4;6)", "√52 ≈ 7.2m"],
                        ["(2;0) then (0;3)", "(2;0),(0;3)", "2+0=2", "0+3=3", "(2;3)", "√13 ≈ 3.6m"],
                        ["(−2;3) then (5;−1)", "(−2;3),(5;−1)", "−2+5=3", "3+(−1)=2", "(3;2)", "√13 ≈ 3.6m"],
                        ["(4;1) then (−2;3) then (1;−1)", "(4;1),(−2;3),(1;−1)", "4−2+1=3", "1+3−1=3", "(3;3)", "√18 ≈ 4.2m"]
                    ],
                    observations: {
                        keyDiscovery: "The resultant displacement depends only on start and end point — not on the path taken (order matters for position, not for total displacement vector)",
                        componentAddition: "Horizontal and vertical components add independently",
                        commutativity: "Changing the order of legs gives the same final position but a different path",
                        returnVector: "The return vector is always the negative of the total displacement",
                        zeroVector: "A round trip back to start has resultant vector (0;0)"
                    },
                    conclusions: [
                        "Column vectors represent displacement — direction and distance combined in two numbers",
                        "Vector addition means adding corresponding x and y components independently",
                        "The resultant vector is path-independent: only start and end positions matter",
                        "Physical movement confirms that vector addition is commutative (same endpoint regardless of order)",
                        "The magnitude of the resultant gives the straight-line distance from start to finish"
                    ],
                    extensions: [
                        "Design a vector walk that returns exactly to the origin — how many legs do you need minimum?",
                        "Find the minimum and maximum possible resultant magnitude for two vectors of fixed length",
                        "Investigate: can two different journeys (different paths) give the same resultant? (Yes — infinitely many)",
                        "Three-dimensional vector walk: add up/down component as a third coordinate"
                    ],
                    realWorldConnections: [
                        "Navigation: pilot flight plans as sequences of displacement vectors",
                        "Hiking and orienteering: compass bearing + distance = displacement vector",
                        "Sports: player tracking using displacement vectors between positions",
                        "Delivery routing: optimising multi-stop routes using vector addition",
                        "Animation: object movement programmed as sequences of displacement vectors"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 2: FORCE VECTORS — PARALLELOGRAM LAW INVESTIGATION
            // ========================================

            force_vectors_parallelogram: {
                name: "Force Vectors: Experimental Verification of the Parallelogram Law",
                relatedTopics: ['vector_addition', 'magnitude', 'direction'],
                category: 'physics_application',
                historicalBackground: {
                    mathematician: "Simon Stevin (1548–1620) and Isaac Newton (1643–1727)",
                    discovery: "Stevin first demonstrated force composition geometrically; Newton formalised it in the Principia (1687)",
                    significance: "The parallelogram law is one of the most experimentally verified laws in physics — vectors were invented precisely to describe it",
                    quote: "Forces combine as vectors: the resultant is the diagonal of the parallelogram formed by the component forces",
                    modernUse: "Used in structural engineering, biomechanics, and robotics to decompose and combine forces"
                },
                practicalMathematics: {
                    title: "Verifying the Parallelogram Law for Vector Addition",
                    hypothesis: "If two forces acting at a point are represented as vectors, their resultant force is represented by the diagonal of the parallelogram formed by those vectors",
                    purpose: "Experimentally verify the parallelogram law of vector addition using spring balances and weights; compare measured resultants to calculated vector sums",
                    materials: [
                        "Two spring balances (0–10 N)",
                        "Three spring balances or force sensors for the equilibrium method",
                        "String and pulleys",
                        "Weight hangers and known masses (100g, 200g, 500g)",
                        "Large sheet of white card (A2 or larger) fixed to board",
                        "Drawing pins and pencil",
                        "Protractor and ruler",
                        "Calculator"
                    ],
                    procedure: [
                        "SETUP: Fix white card to board; set up pulley system with junction point O",
                        "",
                        "PART A: Measurement Setup",
                        "1. Hang masses on two strings through pulleys at known angles from O",
                        "2. Mark point O on the card",
                        "3. Mark the direction of each string carefully (pencil line along each string)",
                        "4. Read and record the force in each spring balance (tension in each string)",
                        "",
                        "PART B: Constructing the Parallelogram",
                        "5. Draw force vectors a and b to scale from point O (e.g., 1 cm : 1 N)",
                        "6. Complete the parallelogram: draw parallel lines to a and b",
                        "7. Draw the diagonal from O — this is the predicted resultant R = a + b",
                        "8. Measure the length and direction of the diagonal",
                        "9. Calculate: predicted resultant magnitude using scale factor",
                        "10. Calculate: predicted direction using arctan",
                        "",
                        "PART C: Algebraic Verification",
                        "11. Express a and b as column vectors using force magnitude and angle:",
                        "    a = (|a|cos θ₁ ; |a|sin θ₁)",
                        "    b = (|b|cos θ₂ ; |b|sin θ₂)",
                        "12. Calculate R = a + b algebraically",
                        "13. Calculate |R| = √(Rₓ² + Rᵧ²)",
                        "14. Compare algebraic |R| to geometric measurement from parallelogram",
                        "",
                        "PART D: Equilibrium Verification",
                        "15. Add a third force (balancing force) to bring the system to equilibrium",
                        "16. Measure this equilibriant force in magnitude and direction",
                        "17. Confirm: the equilibriant should equal −R (same magnitude, opposite direction)",
                        "",
                        "PART E: Repeat for different force combinations",
                        "18. Vary angles and magnitudes; complete data table for each trial"
                    ],
                    dataTable: [
                        ["Trial", "|a| (N)", "θ_a (°)", "|b| (N)", "θ_b (°)", "Algebraic |R| (N)", "Measured |R| (N)", "% Error"],
                        ["1", "3.0", "0°", "4.0", "90°", "5.0", "", ""],
                        ["2", "4.0", "30°", "3.0", "90°", "", "", ""],
                        ["3", "5.0", "45°", "5.0", "135°", "", "", ""],
                        ["4", "6.0", "60°", "4.0", "150°", "", "", ""]
                    ],
                    sampleCalculation: {
                        trial1: "a = (3;0), b = (0;4); R = (3;4); |R| = √(9+16) = 5 N; direction = arctan(4/3) ≈ 53.1°",
                        verification: "3-4-5 right triangle confirms calculation"
                    },
                    conclusions: [
                        "The parallelogram law is confirmed: the diagonal correctly predicts the measured resultant within experimental error",
                        "Algebraic component addition gives results consistent with geometric construction",
                        "Forces are vector quantities — both magnitude and direction are required to predict the resultant",
                        "The equilibriant exactly opposes the resultant: a + b + equilibriant = 0",
                        "Percentage errors typically arise from friction, string weight, and measurement inaccuracies in angle"
                    ],
                    extensions: [
                        "Investigate: how does the magnitude of R change as the angle between a and b increases from 0° to 180°?",
                        "Explore the special case where a and b are equal in magnitude: what direction does R take?",
                        "Use trigonometry (cosine rule) to calculate |R| for non-right-angle cases",
                        "Extend to three concurrent forces: what condition gives equilibrium?"
                    ],
                    realWorldConnections: [
                        "Structural engineering: calculating resultant forces on trusses and joints",
                        "Biomechanics: muscle force vectors and joint reaction forces",
                        "Aviation: lift, drag, thrust and weight vector combinations",
                        "Ship design: wind force and engine thrust resultant",
                        "Robotics: combining actuator forces for desired motion"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 3: GPS POSITION VECTORS INVESTIGATION
            // ========================================

            gps_position_vectors: {
                name: "GPS and Position Vectors: Mapping Absolute Locations",
                relatedTopics: ['position_vectors', 'vector_subtraction', 'magnitude'],
                category: 'technology_application',
                historicalBackground: {
                    origin: "Latitude and longitude as position vectors date to the ancient Greek mathematician Eratosthenes (276–194 BC)",
                    modernDevelopment: "GPS (Global Positioning System) launched by the US military in 1970s; civilian use from 1983",
                    significance: "Every GPS device solves the same mathematical problem: expressing a position as a vector from a reference point and computing distances between vectors",
                    connection: "Trilateration (GPS position finding) uses simultaneous distance equations — directly related to vector magnitude",
                    accuracy: "Modern GPS achieves sub-centimetre accuracy using carrier phase position vectors"
                },
                practicalMathematics: {
                    title: "Position Vectors in Mapping: Finding Distances and Directions Between Locations",
                    hypothesis: "If locations are expressed as position vectors from a chosen origin, then the distance and direction between any two locations can be found using vector subtraction and magnitude formulas",
                    purpose: "Use map coordinates to practice position vectors, vector subtraction (finding displacement between points), and magnitude (distance calculation)",
                    materials: [
                        "Printed map with grid system (school campus, local area, or OS map extract)",
                        "Ruler and protractor",
                        "Coordinate recording sheet",
                        "Calculator",
                        "Coloured pencils for marking routes",
                        "String for measuring approximate distances on map",
                        "Map scale information (e.g., 1:10000)"
                    ],
                    procedure: [
                        "SETUP: Choose a fixed origin O on the map (e.g., main entrance, centre of town)",
                        "Establish x-axis (east) and y-axis (north) orientations",
                        "Record the map scale for converting grid units to real distances",
                        "",
                        "PART A: Recording Position Vectors",
                        "1. Select 6 landmarks on the map",
                        "2. Read grid coordinates of each: (Easting, Northing)",
                        "3. Record as position vectors from chosen origin O",
                        "4. Example: if origin is at (20, 30) and landmark at (25, 38): position vector = (5; 8)",
                        "5. Draw each position vector as an arrow on the map",
                        "",
                        "PART B: Displacement Between Locations",
                        "6. Choose pairs of landmarks A and B",
                        "7. Calculate AB = b − a using position vector subtraction",
                        "8. Interpret: AB gives displacement vector from A to B",
                        "9. Calculate |AB| (distance) using magnitude formula",
                        "10. Apply scale factor to convert to real-world distance",
                        "",
                        "PART C: Direction and Bearing",
                        "11. Find direction angle of AB: θ = arctan(ABᵧ / ABₓ)",
                        "12. Convert to bearing (clockwise from north)",
                        "13. Compare to measured bearing using protractor on map",
                        "",
                        "PART D: Midpoint — Meeting Point Problem",
                        "14. Two friends at positions A and B want to meet at the midpoint",
                        "15. Calculate: midpoint m = ½(a + b)",
                        "16. Mark the midpoint on the map and verify it lies halfway",
                        "",
                        "PART E: Optimum Route",
                        "17. Given a series of waypoints, find total displacement and total distance walked",
                        "18. Compare total distance walked (sum of |each leg|) to direct displacement |resultant|",
                        "19. Discuss: why is total path length always ≥ resultant displacement (triangle inequality)?"
                    ],
                    dataTable: [
                        ["Landmark", "Map Coordinates", "Position Vector from O", "Distance from O (map units)", "Real Distance (m)"],
                        ["School Main Gate", "(x₁; y₁)", "(x₁−Oₓ; y₁−Oᵧ)", "|pos vector|", "|pos vector| × scale"],
                        ["Sports Hall", "(x₂; y₂)", "", "", ""],
                        ["Library", "(x₃; y₃)", "", "", ""],
                        ["Car Park", "(x₄; y₄)", "", "", ""],
                        ["Science Block", "(x₅; y₅)", "", "", ""],
                        ["Playing Field", "(x₆; y₆)", "", "", ""]
                    ],
                    displacementTable: [
                        ["From", "To", "Position Vector (start)", "Position Vector (end)", "Displacement AB = b−a", "|AB| (map)", "Bearing (°)"],
                        ["Gate", "Library", "", "", "", "", ""],
                        ["Library", "Sports Hall", "", "", "", "", ""],
                        ["Sports Hall", "Car Park", "", "", "", "", ""]
                    ],
                    conclusions: [
                        "Position vectors from a fixed origin encode absolute locations mathematically",
                        "Vector subtraction (b − a) gives the displacement from A to B — direction and distance in one expression",
                        "The magnitude formula gives straight-line distance equivalent to measuring with a ruler, confirmed by scale",
                        "Bearings are derived from direction angles with a 90° offset from the mathematical convention",
                        "The midpoint formula gives the meeting point — equivalent to the average of position vectors",
                        "Total path length ≥ direct displacement illustrates the triangle inequality physically"
                    ],
                    extensions: [
                        "Investigate how GPS actually works: three simultaneous magnitude equations from satellite positions",
                        "Calculate the total displacement of a hiking route from waypoint position vectors",
                        "Use the section formula to find a point 2/3 of the way between two landmarks",
                        "Research: how do Ordnance Survey grid references encode position vectors?"
                    ],
                    realWorldConnections: [
                        "GPS navigation: every position is a vector from a reference ellipsoid",
                        "Air traffic control: aircraft positions as 3D position vectors",
                        "Delivery logistics: route optimisation using displacement vectors",
                        "Archaeology: recording excavation site positions as vectors from a datum point",
                        "Ecology: animal movement tracking using GPS position vector sequences"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: SCALAR MULTIPLICATION — SIMILAR TRIANGLES AND SCALE MAPS
            // ========================================

            scalar_multiplication_maps: {
                name: "Scalar Multiplication: Scale Maps and Similar Triangles",
                relatedTopics: ['scalar_multiplication', 'parallel_vectors', 'magnitude'],
                category: 'geometry_application',
                historicalBackground: {
                    origin: "Scale maps have been used since ancient Egypt (3000 BC); the Imhotep papyrus shows scaled building plans",
                    mathematicians: "Thales of Miletus (c. 624–546 BC) first formalized similar triangles and proportional scaling",
                    development: "Euler and Cauchy formalised vector spaces and scalar multiplication in the 18th–19th centuries",
                    significance: "Scalar multiplication is the mathematical foundation of all scaling: maps, technical drawings, models, and computer graphics",
                    modernUse: "Computer graphics: every zoom operation applies scalar multiplication to coordinate vectors"
                },
                practicalMathematics: {
                    title: "Scale Factors and Scalar Multiplication: From Maps to Vectors",
                    hypothesis: "If all position vectors of a shape are multiplied by the same scalar k, the resulting shape is geometrically similar to the original, with all lengths scaled by |k| and direction preserved (or reversed if k < 0)",
                    purpose: "Investigate how scalar multiplication transforms shapes on a coordinate grid; connect to scale maps, enlargements, and the concept of parallel vectors",
                    materials: [
                        "Large coordinate grid paper (A2 or larger)",
                        "Ruler and pencil",
                        "Coloured pencils (different colours for each scale factor)",
                        "Calculator",
                        "Protractor",
                        "String for measuring lengths"
                    ],
                    procedure: [
                        "PART A: Scalar Multiplication of Individual Vectors",
                        "1. Draw vector a = (2; 3) on the grid",
                        "2. Calculate and draw: 2a, 3a, ½a, −a, −2a",
                        "3. For each, record the components, magnitude, and direction",
                        "4. Observe: same direction for k > 0; reversed for k < 0; magnitude scaled by |k|",
                        "",
                        "PART B: Scaling a Triangle",
                        "5. Draw triangle ABC with A(1,1), B(3,1), C(2,3)",
                        "6. Record position vectors: a = (1;1), b = (3;1), c = (2;3)",
                        "7. Apply scale factor k = 2 from origin: new vectors 2a, 2b, 2c",
                        "8. Draw the enlarged triangle A'B'C'",
                        "9. Measure all side lengths of both triangles",
                        "10. Confirm: all lengths in A'B'C' are exactly 2× those in ABC",
                        "11. Confirm: all angles remain unchanged",
                        "12. Repeat with k = ½ and k = −1 (rotation by 180° about origin)",
                        "",
                        "PART C: Connecting to Parallel Vectors",
                        "13. Find vectors AB and A'B' (from the original and scaled triangles)",
                        "14. Confirm: A'B' = 2 × AB (scalar multiple → parallel vectors)",
                        "15. Repeat for BC and B'C', and CA and C'A'",
                        "16. Conclusion: corresponding sides of similar triangles are parallel vectors",
                        "",
                        "PART D: Map Scale Investigation",
                        "17. A map has scale 1:25000 (1 cm on map = 250 m in reality)",
                        "18. A route on the map is given as displacement vectors (in cm): (3;4), (−2;6)",
                        "19. Multiply by scale factor 25000 to get real displacements (in cm): (75000;100000), (−50000;150000)",
                        "20. Convert to metres and find total real displacement and distance",
                        "",
                        "PART E: Finding the Scale Factor from Two Similar Shapes",
                        "21. Given original vector a = (4;6) and image a' = (6;9), find k",
                        "22. k = 6/4 = 9/6 = 1.5 — confirm both components give the same ratio"
                    ],
                    dataTable: [
                        ["Vector", "Components", "k", "k × vector", "Original |v|", "New |kv|", "Ratio |kv|/|v|"],
                        ["a = (2;3)", "(2;3)", "2", "(4;6)", "√13", "2√13", "2"],
                        ["a = (2;3)", "(2;3)", "½", "(1;1.5)", "√13", "½√13", "½"],
                        ["a = (2;3)", "(2;3)", "−1", "(−2;−3)", "√13", "√13", "1"],
                        ["a = (2;3)", "(2;3)", "−2", "(−4;−6)", "√13", "2√13", "2"]
                    ],
                    conclusions: [
                        "Scalar multiplication scales the magnitude by |k| without changing direction (positive k) or reversing it (negative k)",
                        "Multiplying all position vectors of a shape by k creates a geometrically similar shape (enlargement by factor k from origin)",
                        "Corresponding sides of similar shapes are scalar multiples of each other — and therefore parallel",
                        "Scale factors on maps are scalar multiplications applied to every displacement vector",
                        "k = −1 produces a rotation of 180° about the origin (point reflection)"
                    ],
                    extensions: [
                        "Investigate what happens when different scale factors are applied to x and y components separately",
                        "Explore: if two shapes are similar but not centred on origin, how does scalar multiplication need to be adjusted?",
                        "Connect to matrices: a 2×2 scalar matrix kI multiplies all vectors by k — introduce matrix-vector multiplication",
                        "Investigate scale factor k in 3D: how does it apply to 3-component vectors?"
                    ],
                    realWorldConnections: [
                        "Cartography: every map is a scalar multiplication of reality",
                        "Architecture: scale models and technical drawings",
                        "Computer graphics: zoom and resize operations",
                        "Microscopy: scaling up microscope images to real dimensions",
                        "Molecular modelling: scaling atomic bond vectors"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 5: MAGNITUDE AND PYTHAGORAS — DISTANCE IN REAL CONTEXTS
            // ========================================

            magnitude_pythagoras_investigation: {
                name: "Vector Magnitude: Pythagoras Across Disciplines",
                relatedTopics: ['magnitude', 'column_vectors', 'direction'],
                category: 'mathematics',
                historicalBackground: {
                    origin: "Pythagoras of Samos (c. 570–495 BC) — though the theorem was known to Babylonians 1000 years earlier",
                    egyptianUse: "Egyptian 'rope stretchers' (harpedonaptai) used a 3-4-5 rope triangle to construct right angles for the pyramids",
                    vectorConnection: "The magnitude formula |a| = √(aₓ² + aᵧ²) is Pythagoras's theorem applied to the right triangle formed by the vector components",
                    significance: "Pythagoras's theorem is the most applied theorem in mathematics — every distance calculation in 2D space uses it",
                    modernRelevance: "Distance calculations in GPS, computer graphics, and machine learning all reduce to Pythagoras's theorem in multiple dimensions"
                },
                practicalMathematics: {
                    title: "Vector Magnitude: Measuring Real Distances Using Pythagoras",
                    hypothesis: "The straight-line distance between two points equals the magnitude of the displacement vector between them, calculated using Pythagoras's theorem from the horizontal and vertical components",
                    purpose: "Measure real distances in different contexts and verify that |displacement vector| = √(Δx² + Δy²) within experimental error",
                    materials: [
                        "Measuring tape (5m and 30m)",
                        "Set square or T-square for right angles",
                        "Chalk or marker for outdoor measurements",
                        "Calculator",
                        "Recording sheet",
                        "Coordinate grid paper",
                        "String (to measure along angled paths)",
                        "Clinometer (optional, for direction measurements)"
                    ],
                    procedure: [
                        "PART A: Classroom Grid Measurement",
                        "1. Set up coordinate system in classroom (tape marks on floor)",
                        "2. Mark 5 points at known coordinates",
                        "3. For each pair of adjacent points:",
                        "   a. Measure horizontal distance (Δx) and vertical distance (Δy) separately",
                        "   b. Record as displacement vector (Δx; Δy)",
                        "   c. Calculate |vector| = √(Δx² + Δy²)",
                        "   d. Measure direct (diagonal) distance with tape",
                        "   e. Compare calculated to measured — record % error",
                        "",
                        "PART B: Recognising Pythagorean Triple Vectors",
                        "4. From a set of 10 displacement vectors, identify which have integer magnitude (Pythagorean triples)",
                        "5. Examples to investigate: (3;4), (5;12), (8;15), (7;24), (6;8), (9;12), (1;1), (1;√3), (2;2)",
                        "6. Classify: integer magnitude vs irrational magnitude",
                        "7. Discover the pattern in Pythagorean triple vectors: a = m²−n², b = 2mn, c = m²+n²",
                        "",
                        "PART C: Speed Calculation from Velocity Components",
                        "8. A runner has velocity components: vₓ = 4 m/s east, vᵧ = 3 m/s north",
                        "9. Calculate speed = |velocity vector| = √(16+9) = 5 m/s",
                        "10. Vary the components and calculate the speed for each scenario:",
                        "    vₓ = 6, vᵧ = 8 → speed = ?",
                        "    vₓ = 5, vᵧ = 5 → speed = ?",
                        "    vₓ = 12, vᵧ = 5 → speed = ?",
                        "",
                        "PART D: Triangle Inequality Verification",
                        "11. Choose three points A, B, C on grid",
                        "12. Calculate |AB|, |BC|, |AC|",
                        "13. Verify: |AB| + |BC| ≥ |AC| (with equality only when B is between A and C)",
                        "14. Record several cases and confirm inequality always holds"
                    ],
                    dataTable: [
                        ["Vector (Δx; Δy)", "Δx²", "Δy²", "Δx² + Δy²", "Calculated |v| = √(Δx²+Δy²)", "Measured Direct Distance", "% Error"],
                        ["(3; 4)", "9", "16", "25", "5.00", "", ""],
                        ["(5; 12)", "25", "144", "169", "13.00", "", ""],
                        ["(1; 1)", "1", "1", "2", "1.414", "", ""],
                        ["(2; 6)", "4", "36", "40", "6.32", "", ""],
                        ["(7; 24)", "49", "576", "625", "25.00", "", ""]
                    ],
                    conclusions: [
                        "The magnitude of a displacement vector equals the straight-line distance between its endpoints — confirmed by direct measurement",
                        "The formula |v| = √(x² + y²) is Pythagoras's theorem: the components are the legs, the vector is the hypotenuse",
                        "Pythagorean triple vectors have integer magnitudes — useful for checking calculations and avoiding rounding errors",
                        "Speed is the magnitude of the velocity vector: the Pythagorean combination of horizontal and vertical speed components",
                        "The triangle inequality |AB| + |BC| ≥ |AC| holds for all triangles — the direct path is always the shortest"
                    ],
                    extensions: [
                        "Extend to 3D: measure |v| = √(x² + y² + z²) using a staircase or ramp",
                        "Investigate the unit circle: all unit vectors have tip on the circle |v| = 1",
                        "Derive the distance formula between two coordinate points as a special case of vector magnitude",
                        "Explore: in n-dimensional space, magnitude generalises to √(x₁² + x₂² + ... + xₙ²)"
                    ],
                    realWorldConnections: [
                        "Surveying: direct distance calculation from measured horizontal and vertical components",
                        "Physics: speed from velocity components in projectile motion",
                        "Computer graphics: pixel distance calculations for blur, shadow, and rendering algorithms",
                        "Machine learning: Euclidean distance between data points in high-dimensional feature space",
                        "Engineering: cable length from horizontal span and vertical rise"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 6: COLLINEARITY INVESTIGATION
            // ========================================

            collinearity_investigation: {
                name: "Collinearity: Proving Points Line Up Using Vectors",
                relatedTopics: ['collinearity', 'parallel_vectors', 'position_vectors', 'vector_subtraction'],
                category: 'geometry_proof',
                historicalBackground: {
                    origin: "Vector methods for proving collinearity were developed alongside analytic geometry by René Descartes (1637) and extended by Augustin-Louis Cauchy",
                    significance: "Vector collinearity proofs are more powerful than gradient methods because they work in any dimension and reveal the ratio in which a point divides a segment",
                    connection: "The concept of collinearity is central to Menelaus's theorem (100 AD) and cross-ratio in projective geometry",
                    modernUse: "Computer vision algorithms use collinearity tests to detect straight edges in images; GPS systems use it to detect points lying on the same route"
                },
                practicalMathematics: {
                    title: "Collinearity: Vector Proofs and Pattern Discovery",
                    hypothesis: "Three points are collinear if and only if the vectors between them are parallel — i.e., one is a scalar multiple of the other — with a common point establishing they lie on the same line",
                    purpose: "Investigate the collinearity condition using multiple representations, develop proof-writing skills, and discover the connection between collinearity and ratio of division",
                    materials: [
                        "Coordinate grid paper",
                        "Ruler and pencil",
                        "Calculator",
                        "Collinearity investigation worksheet",
                        "Geogebra or Desmos (optional — for verification)"
                    ],
                    procedure: [
                        "PART A: Visual Investigation First",
                        "1. Plot the following sets of three points on separate grids:",
                        "   Set 1: A(0,0), B(2,4), C(3,6)",
                        "   Set 2: P(1,1), Q(3,5), R(5,8)",
                        "   Set 3: X(0,2), Y(2,6), Z(4,10)",
                        "2. From visual inspection, which sets appear collinear?",
                        "3. Record visual predictions before algebraic testing",
                        "",
                        "PART B: Algebraic Test for Collinearity",
                        "4. For each set, find vectors between the points:",
                        "   AB = b − a; AC = c − a (using subtraction formula)",
                        "5. Test: is AB = k × AC for some scalar k?",
                        "   Check: is AB₁/AC₁ = AB₂/AC₂? (ratio of x components = ratio of y components?)",
                        "6. Record the scalar k value where collinear, or note discrepancy where not",
                        "7. Compare algebraic conclusions to visual predictions",
                        "",
                        "PART C: Writing Formal Proofs",
                        "8. Write a formal collinearity proof for Set 1:",
                        "   'Let a = (0;0), b = (2;4), c = (3;6)'",
                        "   'AB = b − a = (2;4)'",
                        "   'AC = c − a = (3;6)'",
                        "   'AC = (3/2) × AB' [show the scalar multiple]",
                        "   'Since AC is a scalar multiple of AB and A is a common point, A, B, C are collinear. ■'",
                        "9. Write formal proofs for the other sets",
                        "",
                        "PART D: Finding Unknown Coordinates for Collinearity",
                        "10. Given A(1,2), B(4,5), find the value of t so that C(7,t) is collinear with A and B",
                        "    AB = (3;3); AC = (6; t−2)",
                        "    For collinearity: 6/3 = (t−2)/3 → 2 = (t−2)/3 → t−2 = 6 → t = 8",
                        "11. Verify: A(1,2), B(4,5), C(7,8) — plot to confirm they lie on a line",
                        "",
                        "PART E: Ratio of Division",
                        "12. If A, B, C are collinear and AB = k × AC:",
                        "    Interpret k as the ratio AB:AC (how far along the line B lies)",
                        "    k = 2/3 means B is 2/3 of the way from A to C",
                        "13. Find the ratio in which B(2,4) divides AC where A(0,0) and C(3,6)",
                        "    AB = (2;4); AC = (3;6); k = 2/3 → B divides AC in ratio 2:1"
                    ],
                    dataTable: [
                        ["Points A, B, C", "AB = b−a", "AC = c−a", "Scalar k: AC = k×AB?", "Collinear?", "Ratio AB:AC"],
                        ["A(0,0) B(2,4) C(3,6)", "(2;4)", "(3;6)", "3/2", "Yes", "2:3"],
                        ["P(1,1) Q(3,5) R(5,8)", "(2;4)", "(4;7)", "No constant k", "No", "N/A"],
                        ["X(0,2) Y(2,6) Z(4,10)", "(2;4)", "(4;8)", "2", "Yes", "1:2"],
                        ["A(1,3) B(4,9) C(2,5)", "(3;6)", "(1;2)", "1/3", "Yes", "1:3"]
                    ],
                    conclusions: [
                        "Three points are collinear if and only if the vectors between them are parallel (one is a scalar multiple of the other) AND share a common point",
                        "The scalar k in AB = k × AC gives the ratio in which A divides BC: A divides BC in ratio AB:AC = k:(1−k) from B to C",
                        "Visual inspection is a useful guide but cannot replace algebraic proof — some near-collinear sets fool the eye",
                        "Collinearity is a precise binary condition: three points either lie on a line or they do not",
                        "The formal proof structure (find vectors, show scalar multiple, state common point) is universal and rigorous"
                    ],
                    extensions: [
                        "Prove that the midpoint of BC always lies on the line through A and B if A, B, C are collinear",
                        "Investigate Menelaus's theorem: a transversal line cuts the sides of a triangle in ratios with a specific product",
                        "Extend to 3D collinearity: three points in space are collinear iff AB = k × AC as 3-component vectors",
                        "Connect to linear algebra: collinear vectors are linearly dependent — the determinant |AB AC| = 0"
                    ],
                    realWorldConnections: [
                        "Computer vision: straight-line edge detection using collinearity tests on pixel coordinates",
                        "Surveying: verifying that measurement stakes lie on a planned straight boundary",
                        "Route planning: confirming intermediate waypoints are on the direct route",
                        "Crystallography: atoms in a crystal structure lying along a crystallographic direction",
                        "Construction: checking that foundation posts are aligned along a straight wall"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 7: VECTOR GEOMETRY PROOFS
            // ========================================

            vector_geometry_proofs: {
                name: "Vector Geometry: Proving Classical Theorems with Vectors",
                relatedTopics: ['position_vectors', 'vector_addition', 'vector_subtraction', 'scalar_multiplication', 'parallel_vectors', 'collinearity'],
                category: 'geometry_proof',
                historicalBackground: {
                    origin: "Hermann Grassmann (1809–1877) developed the algebra of vectors as a tool for geometry proofs; Gibbs popularised it in physics",
                    advantage: "Vector proofs of classical geometry theorems are often shorter and more elegant than coordinate or Euclidean proofs",
                    examples: "Midpoint theorem, parallelogram diagonals, centroid of triangle — all provable in a few lines with vectors",
                    significance: "Vector geometry revealed that classical theorems have algebraic structure that coordinate geometry obscures",
                    modernUse: "Computer-aided geometric design (CAGD) uses vector methods for all shape manipulation"
                },
                practicalMathematics: {
                    title: "Classical Geometry Theorems Proved by Vectors",
                    hypothesis: "Classical geometric theorems about midpoints, parallelograms, and medians can be proved rigorously and elegantly using vector algebra, typically in fewer steps than Euclidean proof",
                    purpose: "Prove three classical geometry theorems using vectors, developing proof construction skills and deepening understanding of position vectors, midpoints, and parallel vectors",
                    procedure: [
                        "THEOREM 1: The Midpoint Theorem",
                        "Statement: The line segment joining the midpoints of two sides of a triangle is parallel to the third side and half its length",
                        "",
                        "Setup: Triangle OAB with O at origin",
                        "Let O have position vector 0, A have position vector a, B have position vector b",
                        "Let M be midpoint of OA, N be midpoint of OB",
                        "",
                        "Proof:",
                        "Position vector of M: m = ½a",
                        "Position vector of N: n = ½b",
                        "MN = n − m = ½b − ½a = ½(b − a) = ½ × AB",
                        "Since MN = ½AB: MN is parallel to AB (scalar multiple) AND |MN| = ½|AB| ■",
                        "",
                        "THEOREM 2: Diagonals of a Parallelogram Bisect Each Other",
                        "Statement: The diagonals of a parallelogram bisect each other (intersect at their midpoints)",
                        "",
                        "Setup: Parallelogram OABC where OA ∥ CB and OC ∥ AB",
                        "O at origin; a = position vector of A; c = position vector of C",
                        "Since OABC is a parallelogram: B has position vector a + c",
                        "",
                        "Proof:",
                        "Diagonal OB: midpoint M₁ has position vector ½(a + c)",
                        "Diagonal AC: midpoint M₂ has position vector ½(a + (a+c)) = ... let's use: midpoint of AC = ½(a + (a+c)) = ½(a + b) where b = a + c",
                        "Midpoint of OB = ½(0 + (a+c)) = ½(a+c)",
                        "Midpoint of AC = ½(a + (a+c)) = ½(2a+c) — WAIT: restate using position vectors correctly:",
                        "O=(0), A=(a), B=(a+c), C=(c)",
                        "Midpoint of OB = ½((0)+(a+c)) = ½(a+c)",
                        "Midpoint of AC = ½(a+c)",
                        "Both diagonals have the same midpoint ½(a+c) → they bisect each other ■",
                        "",
                        "THEOREM 3: The Centroid of a Triangle",
                        "Statement: The medians of a triangle meet at the centroid, which divides each median in ratio 2:1 from vertex to midpoint",
                        "",
                        "Setup: Triangle with vertices at position vectors a, b, c",
                        "Midpoints: L = ½(b+c), M = ½(a+c), N = ½(a+b)",
                        "",
                        "Proof:",
                        "Point G dividing AL in ratio 2:1 from A:",
                        "G = a + (2/3)(L − a) = a + (2/3)(½(b+c) − a) = a + (1/3)(b+c) − (2/3)a = (1/3)(a+b+c)",
                        "Point G dividing BM in ratio 2:1 from B:",
                        "G = b + (2/3)(M − b) = b + (2/3)(½(a+c) − b) = (1/3)(a+b+c)",
                        "Both give the same G = (1/3)(a+b+c) → all three medians meet at G ■",
                        "",
                        "PRACTICE PROOFS:",
                        "Students write proofs for:",
                        "1. The line joining midpoints of the diagonals of a trapezium is parallel to the parallel sides",
                        "2. The midpoints of the sides of any quadrilateral form a parallelogram (Varignon's theorem)",
                        "3. In triangle ABC, the point dividing median AM in ratio 2:1 is the same as the point dividing median BN in ratio 2:1"
                    ],
                    proofEvaluationRubric: {
                        setupClear: "Position vectors clearly defined for all relevant points",
                        correctSubtraction: "Vector subtraction correctly applied to find vectors between points",
                        scalarMultiple: "Parallel vectors identified by showing scalar multiple relationship",
                        conclusion: "Geometric conclusion clearly stated from algebraic result",
                        formality: "Proof ends with a clear concluding statement (■ or QED)"
                    },
                    conclusions: [
                        "Classical geometry theorems reduce to algebraic vector calculations — often provable in 3–5 lines",
                        "The key tools are: position vector setup, midpoint formula m = ½(a+b), vector subtraction for sides, and scalar multiple test for parallelism",
                        "Vector proofs reveal why the theorems are true (algebraic structure) not just that they are true (visual observation)",
                        "The centroid formula (1/3)(a+b+c) has a beautiful symmetry — every vertex contributes equally — visible only through the vector proof"
                    ],
                    extensions: [
                        "Prove Varignon's theorem: midpoints of any quadrilateral form a parallelogram",
                        "Prove that the three medians of any triangle are concurrent at the centroid",
                        "Prove Napoleon's theorem using vectors",
                        "Extend to 3D: prove that four points A, B, C, D are coplanar using the scalar triple product"
                    ],
                    realWorldConnections: [
                        "Computer-aided design: all shape manipulations use vector proofs as their foundation",
                        "Architecture: centroid calculations for structural balance use the vector centroid formula",
                        "Robotics: joint position calculations use vector geometric proofs",
                        "Animation: character bone hierarchy movement uses vector-based geometry",
                        "Civil engineering: centre of mass calculations for irregular structures"
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
            column_vectors: {
                'Notation Errors': [
                    'Confusing column vectors with coordinates: (3, 4) is a point; (3; 4) as a column vector is a displacement',
                    'Writing vectors horizontally instead of as a vertical column pair',
                    'Swapping x and y components: top number is HORIZONTAL (x), bottom is VERTICAL (y)',
                    'Treating equal vectors as identical objects rather than interchangeable free vectors'
                ],
                'Conceptual Errors': [
                    'Thinking a vector and a point are the same thing — a vector is a displacement, not a location',
                    'Assuming vectors start at the origin — free vectors can start anywhere',
                    'Confusing direction: positive y is UP (mathematical convention), not always north',
                    'Forgetting the zero vector: (0;0) is a valid vector with magnitude 0'
                ]
            },

            position_vectors: {
                'Formula Errors': [
                    'Finding AB = a − b instead of the correct AB = b − a (subtract the START, add the END)',
                    'Confusing OA and AO: OA goes FROM origin TO A; AO is the reverse',
                    'Using coordinates directly without converting to displacement: midpoint should use position vectors, not just average coordinates (though numerically equivalent)',
                    'Forgetting that BA = −AB (reversing the direction reverses the sign)'
                ],
                'Conceptual Errors': [
                    'Thinking a position vector can start anywhere — position vectors ALWAYS start at the origin',
                    'Confusing the position vector of A with the vector AB',
                    'Not recognising that OB = OA + AB: triangle law of position vectors'
                ]
            },

            vector_addition: {
                'Component Errors': [
                    'Adding magnitudes instead of components: |(3;4)| + |(0;3)| ≠ |(3;7)| in general',
                    'Forgetting to add BOTH components — adding only x or only y',
                    'Adding vectors by multiplying components (a₁b₁; a₂b₂) — this is NOT vector addition',
                    'Confusing vector addition with scalar addition'
                ],
                'Geometric Errors': [
                    'Drawing vectors from the same point and adding endpoints rather than using tip-to-tail',
                    'Thinking the resultant is always longer than both component vectors (not true when vectors partially oppose each other)',
                    'Not understanding that a + b = b + a geometrically means different paths, same destination'
                ]
            },

            vector_subtraction: {
                'Order Errors': [
                    'Computing a − b as b − a (reversing the subtraction)',
                    'For vector AB: writing a − b instead of the correct b − a',
                    'Confusing AB with BA: AB = b − a; BA = a − b = −AB'
                ],
                'Sign Errors': [
                    'Incorrectly negating: −(3;−2) = (−3;−2) instead of the correct (−3;2)',
                    'Subtracting only one component: (5;3) − (2;1) = (3;3) instead of (3;2)',
                    'Treating subtraction as commutative: a − b ≠ b − a'
                ]
            },

            scalar_multiplication: {
                'Computation Errors': [
                    'Multiplying only one component: 3 × (2;4) = (6;4) instead of (6;12)',
                    'Adding the scalar instead of multiplying: 3 + (2;4) = (5;7) — not a valid operation',
                    'Confusing scalar multiplication with dot product (scalar multiplication gives a vector; dot product gives a scalar)'
                ],
                'Conceptual Errors': [
                    'Thinking k < 0 makes the vector disappear or become undefined — it simply reverses direction',
                    'Believing |ka| = k|a| always — correct formula uses |k|: magnitude cannot be negative',
                    'Confusing a scalar multiple with a different vector — ka is parallel to a, not a different kind of object'
                ]
            },

            magnitude: {
                'Formula Errors': [
                    '|a| = aₓ + aᵧ (adding components instead of squaring, summing, and square-rooting)',
                    '|a| = √(aₓ + aᵧ) (square root without squaring each component first)',
                    'Forgetting to square root: |a|² = aₓ² + aᵧ² is the magnitude SQUARED',
                    'Using signed components in magnitude: |(−3;4)| ≠ −3+4 = 1; correct: √(9+16) = 5'
                ],
                'Conceptual Errors': [
                    'Thinking magnitude can be negative — magnitude is always a non-negative real number',
                    'Confusing magnitude with direction: magnitude is a scalar, direction is a separate quantity',
                    'Believing |a + b| = |a| + |b| — only true when vectors are parallel and in same direction'
                ]
            },

            direction: {
                'Angle Errors': [
                    'Using arctan without quadrant adjustment: arctan gives range (−90°, 90°) but angles range 0°–360°',
                    'Confusing direction angle (from positive x, anticlockwise) with bearing (from north, clockwise)',
                    'Computing arctan(aₓ/aᵧ) instead of the correct arctan(aᵧ/aₓ)',
                    'Forgetting to add 180° for Q2 and Q3 vectors'
                ],
                'Unit Vector Errors': [
                    'Finding unit vector by subtracting magnitude instead of dividing: â = a − |a| instead of â = a/|a|',
                    'Not verifying |â| = 1 after calculating the unit vector',
                    'Dividing magnitude by vector components instead of the reverse'
                ]
            },

            parallel_vectors: {
                'Test Errors': [
                    'Testing only one component ratio instead of both: parallel requires aₓ/bₓ = aᵧ/bᵧ',
                    'Forgetting that anti-parallel vectors (k < 0) ARE parallel — opposite directions still counts as parallel',
                    'Confusing perpendicular with parallel: perpendicular vectors have dot product = 0, not related by scalar multiple',
                    'Accepting equal vectors as parallel only (not recognising all scalar multiples as parallel)'
                ],
                'Conceptual Errors': [
                    'Thinking parallel vectors must have the same starting point — parallel is about direction only',
                    'Confusing "parallel vectors" with "the same vector" — parallel means same direction, not equal'
                ]
            },

            collinearity: {
                'Proof Errors': [
                    'Showing vectors are parallel but forgetting to state the common point — BOTH conditions required',
                    'Finding vectors AB and BC but not identifying B as the common point explicitly in the proof',
                    'Reversing the subtraction order when computing vectors between points',
                    'Stopping after finding k without concluding with the geometric statement'
                ],
                'Conceptual Errors': [
                    'Thinking parallel vectors alone prove collinearity — parallel vectors with NO common point are on different parallel lines',
                    'Confusing collinear (1D — on same line) with coplanar (2D — in same plane)',
                    'Not distinguishing collinearity (exact) from near-collinearity (approximate) — in a proof, the test must give exactly k'
                ]
            }
        };

        this.clarificationStrategies = {
            physical_vectors: {
                method: 'Use physical walks or displacements to ground abstract component notation',
                effectiveness: 'Very high for column vectors and vector addition'
            },
            arrow_diagrams: {
                method: 'Draw careful arrow diagrams showing tip-to-tail addition and direction reversals',
                effectiveness: 'High for subtraction, addition, and direction concepts'
            },
            component_tables: {
                method: 'Organise vector operations in a table with x-row and y-row to prevent mixing components',
                effectiveness: 'High for addition, subtraction, and scalar multiplication errors'
            },
            magnitude_right_triangle: {
                method: 'Always sketch the right triangle formed by components to visualise the magnitude calculation',
                effectiveness: 'Very high for magnitude formula errors'
            },
            quadrant_diagram: {
                method: 'Draw x-y axes and mark which quadrant the vector lies in before computing direction',
                effectiveness: 'High for direction angle and quadrant adjustment errors'
            },
            common_point_emphasis: {
                method: 'Use a two-column proof structure: (1) show scalar multiple; (2) identify common point',
                effectiveness: 'Essential for collinearity proof completeness'
            },
            ratio_of_components: {
                method: 'For parallel test, compute BOTH component ratios and confirm they are equal',
                effectiveness: 'High for parallel vector test errors'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic} from science or everyday experience?",
                "Can you describe a real situation involving {topic} without using mathematical notation?",
                "How does {topic} connect to what you know about coordinates and directed numbers?",
                "What do you predict will be the most confusing aspect of {topic}?"
            ],
            duringLearning: [
                "Does this vector operation make physical sense? Can you describe what it means as a movement?",
                "How does this connect to {related_concept}?",
                "Can you sketch a diagram showing what this vector expression means geometrically?",
                "What feature of the expression tells you which operation or technique to use?",
                "Can you spot the pattern across these examples?"
            ],
            afterLearning: [
                "What are the main ideas in {topic} and when does each apply?",
                "What distinguishes {topic} from the similar-looking {related_topic}?",
                "What is the most important check you should always do after computing a vector result?",
                "How would you explain {topic} to a classmate using a real-world example?",
                "In what ways is {topic} similar to and different from its scalar equivalent?"
            ],
            problemSolving: [
                "What is the question asking? Should your answer be a vector or a scalar?",
                "Have you defined all position vectors clearly from the origin?",
                "Which formula applies here: addition, subtraction, magnitude, or scalar multiple?",
                "Have you drawn a diagram? What does it tell you about the expected answer?",
                "Does your answer make physical sense? Is the magnitude reasonable for the context?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            column_vectors: [
                {
                    scenario: "Drone Delivery Navigation",
                    context: "A delivery drone receives movement instructions as column vectors from a control centre. The operator needs to programme a precise path to deliver a package.",
                    problem: "The drone receives instructions: first fly (300; 200) metres, then (−100; 400) metres. Describe each movement in words and write the total displacement.",
                    application: "First: 300m east, 200m north. Second: 100m west, 400m north. Column vector form encodes both direction and distance compactly.",
                    question: "If the drone also needs to fly (50; −150) metres to land, write all three movements as column vectors and describe the final leg in words.",
                    answer: "(50; −150) means 50m east and 150m south — the drone descends southward to the delivery point.",
                    extension: "Column vector notation is used in all flight control systems — autopilots receive sequences of displacement vectors just like this."
                },
                {
                    scenario: "Video Game Character Movement",
                    context: "A game programmer writes character movement using column vectors on the screen grid. Positive x is right, positive y is up on the display.",
                    problem: "A character is at position (4, 3) on the screen. It moves (−2; 5) then (3; −1). What is the new position after each move?",
                    application: "After first move: (4+(−2); 3+5) = (2, 8). After second: (2+3; 8+(−1)) = (5, 7).",
                    question: "Write the column vector that would return the character directly to (4, 3) from its final position (5, 7).",
                    answer: "Return vector = (4−5; 3−7) = (−1; −4). This is the vector from (5,7) back to (4,3).",
                    extension: "Every physics engine in game development uses column vectors for all object movement — the character velocity is updated by adding acceleration vectors each frame."
                },
                {
                    scenario: "Robot Programming",
                    context: "A warehouse robot moves on a grid. Its instructions are programmed as column vectors. The engineer needs to verify the robot returns to its charging station.",
                    problem: "A robot executes: (4;0), (0;3), (−2;1), (1;−2), (−3;−2). Does it return to start?",
                    application: "Total x: 4+0+(−2)+1+(−3) = 0; Total y: 0+3+1+(−2)+(−2) = 0. Sum = (0;0) → returns to start.",
                    question: "Design a 4-move robot journey that starts and ends at the same point, passing through (5;3) at some point.",
                    answer: "Example: (5;3), (0;2), (−2;−1), (−3;−4). Check: (5−5+0−2−3; 3+2+(−1)+(−4)) = (0;0) ✓",
                    extension: "Industrial robots use exactly these vector sequences; if the return vector is non-zero, the robot is lost — column vector arithmetic prevents that."
                }
            ],

            position_vectors: [
                {
                    scenario: "Search and Rescue",
                    context: "A coast guard vessel at position A needs to reach a casualty at position B as quickly as possible. The positions are given as grid references from a fixed base O.",
                    problem: "The base O is the origin. Vessel A has position vector a = (12; 8) km. Casualty B has position vector b = (20; 15) km. Find the displacement vector from A to B.",
                    application: "AB = b − a = (20−12; 15−8) = (8; 7) km.",
                    question: "Find the direct distance from A to B and the bearing the vessel should travel.",
                    answer: "|AB| = √(64+49) = √113 ≈ 10.6 km. Direction: arctan(7/8) ≈ 41.2° from east → bearing ≈ 48.8°.",
                    extension: "Real coast guard systems compute AB vectors from GPS position data to display the direct course to a rescue point."
                },
                {
                    scenario: "Meeting Point Problem",
                    context: "Two friends are hiking. Anna is at position a = (3; 7) km from the trailhead and Ben is at b = (9; 1) km. They want to meet at the point equidistant from both.",
                    problem: "Find the position vector of the midpoint between Anna and Ben.",
                    application: "m = ½(a + b) = ½(3+9; 7+1) = ½(12; 8) = (6; 4) km from the trailhead.",
                    question: "Anna walks from (3;7) to the midpoint (6;4). Write the vector of her journey and find its length.",
                    answer: "AM = (6−3; 4−7) = (3; −3). |AM| = √(9+9) = √18 = 3√2 ≈ 4.2 km.",
                    extension: "The midpoint formula is the simplest case of the section formula — GPS 'meet halfway' features use exactly this calculation."
                },
                {
                    scenario: "Satellite Tracking",
                    context: "A tracking station monitors two satellites. Their positions (in thousands of km from Earth's centre) are given as position vectors. The station calculates communication links.",
                    problem: "Satellite A has position a = (15; 8) and Satellite B has b = (3; 20) thousand km. Find the vector from A to B and the distance between the satellites.",
                    application: "AB = b − a = (3−15; 20−8) = (−12; 12). |AB| = √(144+144) = √288 = 12√2 ≈ 17.0 thousand km.",
                    question: "A signal relay station C is at the midpoint of AB. Find its position vector.",
                    answer: "c = ½(a + b) = ½(15+3; 8+20) = ½(18; 28) = (9; 14) thousand km from Earth's centre.",
                    extension: "Satellite constellation management uses position vector arithmetic constantly — inter-satellite link distances determine which satellites can relay signals."
                }
            ],

            vector_addition: [
                {
                    scenario: "Orienteering Race",
                    context: "An orienteer navigates through the forest using compass bearings and distances. Each leg of the race is recorded as a displacement vector. The race organiser needs to find the total displacement to check course design.",
                    problem: "Leg 1: (240; 180)m. Leg 2: (−80; 220)m. Leg 3: (160; −100)m. Find total displacement and distance from start to finish.",
                    application: "Total = (240+(−80)+160; 180+220+(−100)) = (320; 300) m. Distance = √(320²+300²) = √(102400+90000) = √192400 ≈ 438.6 m.",
                    question: "The organiser wants to add a 4th leg that returns competitors exactly to the start. What should this vector be?",
                    answer: "Return vector = −(320; 300) = (−320; −300) m.",
                    extension: "Modern orienteering uses GPS tracking that logs every displacement vector — race analysis software adds them all to reconstruct the exact route."
                },
                {
                    scenario: "Aircraft Navigation",
                    context: "An aircraft pilot plans a route with three legs from airport to airport. The vectors represent displacement in km (east, north).",
                    problem: "Leg 1: (150; 200) km. Leg 2: (300; −100) km. Leg 3: (−50; 250) km. Find the total displacement.",
                    application: "Total = (150+300+(−50); 200+(−100)+250) = (400; 350) km.",
                    question: "How does the direct distance compare to the total distance flown?",
                    answer: "Direct: √(400²+350²) = √(160000+122500) = √282500 ≈ 531.5 km. Total flown: |L1|+|L2|+|L3| = 250+316.2+254.9 ≈ 821.1 km. The direct route would save about 290 km.",
                    extension: "This illustrates the triangle inequality — total path ≥ direct distance. Airlines balance direct routing against wind conditions by choosing optimal intermediate waypoints."
                },
                {
                    scenario: "River Crossing",
                    context: "A swimmer crosses a river. The swimmer's velocity relative to water is (0; 2) m/s (straight across). The river current is (1.5; 0) m/s (downstream). Find the actual velocity.",
                    problem: "Add the two velocity vectors to find the swimmer's actual velocity.",
                    application: "Actual velocity = (0; 2) + (1.5; 0) = (1.5; 2) m/s.",
                    question: "Find the swimmer's actual speed and the angle their path makes with the bank.",
                    answer: "Speed = √(1.5²+2²) = √(2.25+4) = √6.25 = 2.5 m/s. Angle = arctan(2/1.5) ≈ 53.1° from bank.",
                    extension: "The swimmer wants to arrive directly opposite. What angle should they aim upstream so that the current brings them to the exact opposite bank? (Solve: resultant y > 0 and x = 0.)"
                }
            ],

            vector_subtraction: [
                {
                    scenario: "Relative Velocity — Collision Avoidance",
                    context: "Two boats are at sea. Boat A has velocity vₐ = (3; 4) m/s and Boat B has velocity v_b = (5; 2) m/s. The coast guard needs to know the velocity of A relative to B to assess collision risk.",
                    problem: "Find the velocity of A relative to B: v_rel = vₐ − v_b.",
                    application: "v_rel = (3−5; 4−2) = (−2; 2) m/s. From B's perspective, A is moving at (−2; 2) m/s.",
                    question: "Find the speed of A relative to B and interpret the direction.",
                    answer: "|v_rel| = √(4+4) = √8 = 2√2 ≈ 2.83 m/s. Direction: arctan(2/−2) = 135° from east (northwest from B's view — A moving away from B to northwest). No collision.",
                    extension: "Collision avoidance systems (TCAS in aircraft, AIS in ships) continuously compute relative velocity vectors to predict whether two craft will intersect."
                },
                {
                    scenario: "Displacement Between Cities",
                    context: "A logistics company has depots at several cities. An engineer maps the cities on a coordinate grid and needs to find the most efficient direct route between each pair.",
                    problem: "City A has position a = (4; 7), City B has position b = (10; 3), City C has position c = (1; 11). Find vectors AB, BC, and CA.",
                    application: "AB = b−a = (6;−4); BC = c−b = (−9;8); CA = a−c = (3;−4).",
                    question: "Verify that AB + BC + CA = (0;0). Why does this make geometric sense?",
                    answer: "AB+BC+CA = (6+(−9)+3; −4+8+(−4)) = (0;0) ✓. This is a closed triangle — travelling A→B→C→A returns to start, so total displacement must be zero.",
                    extension: "The property AB + BC + CA = 0 generalises: for any polygon, the sum of all edge vectors is always the zero vector. This principle is used in loop verification for surveying networks."
                },
                {
                    scenario: "Tug of War Force Difference",
                    context: "In a tug of war, Team A exerts force vector fₐ = (800; 0) N and Team B exerts force vector f_b = (−750; 30) N (slightly off-axis). Find the net force.",
                    problem: "Net force = fₐ + f_b (note: b already has a negative x, so this is effectively a difference).",
                    application: "Net = (800+(−750); 0+30) = (50; 30) N.",
                    question: "In which direction does the rope move? Find the magnitude of the net force.",
                    answer: "|Net| = √(50²+30²) = √(2500+900) = √3400 ≈ 58.3 N. Direction: arctan(30/50) ≈ 31° above horizontal — Team A wins but slightly upward.",
                    extension: "The slightly off-axis force causes a small upward component — in real rope sports, this can cause the rope to lift off the ground, affecting dynamics."
                }
            ],

            scalar_multiplication: [
                {
                    scenario: "Map Scaling",
                    context: "A cartographer is creating maps at different scales. The position of a town on the 1:50000 map is the vector (3; 4) cm from the map origin. She needs to redraw it on a 1:25000 map (twice the scale).",
                    problem: "Find the new position vector on the 1:25000 map.",
                    application: "New position = 2 × (3; 4) = (6; 8) cm. The real-world position is unchanged; only the map representation doubles.",
                    question: "What would the position be on a 1:100000 map (half the scale of 1:50000)?",
                    answer: "Scale factor = ½: position = ½ × (3; 4) = (1.5; 2) cm.",
                    extension: "Digital map zooming is scalar multiplication applied to ALL position vectors simultaneously — zoom in by k means every vector is multiplied by k."
                },
                {
                    scenario: "Formation Flying",
                    context: "A display flying team fly in formation. The lead aircraft is at origin. Each aircraft's position relative to the lead is given as a vector. For a larger formation, all positions are scaled up.",
                    problem: "Formation positions: a = (1; 2), b = (−1; 2), c = (2; 4), d = (−2; 4) (in units of 50m). For safety reasons, the formation needs to be expanded to 3 times the spacing.",
                    application: "New positions: 3a = (3;6), 3b = (−3;6), 3c = (6;12), 3d = (−6;12) — each 3× further from the lead.",
                    question: "Confirm the formation shape is unchanged by verifying that vectors between adjacent aircraft are also scaled by 3.",
                    answer: "Original AB = b−a = (−2;0). New A'B' = 3b−3a = 3(b−a) = 3(−2;0) = (−6;0) = 3×AB ✓",
                    extension: "Scalar multiplication preserves geometric shape — this is the algebraic definition of geometric similarity. Display teams use this to safely vary formation size."
                },
                {
                    scenario: "Dilution and Concentration",
                    context: "A chemist describes a mixture's properties as a vector: (concentration; pH) = (0.5; 7.2). She dilutes it to ½ concentration, proportionally changing all properties.",
                    problem: "Find the new property vector after halving all properties.",
                    application: "New = ½ × (0.5; 7.2) = (0.25; 3.6).",
                    question: "If she then doubles the concentration of the diluted solution, does she return to the original? Verify algebraically.",
                    answer: "2 × (0.25; 3.6) = (0.5; 7.2) ✓. Scalar multiplication is reversible: multiply by k then by 1/k gives identity.",
                    extension: "Note: this models linear property scaling only — in reality, pH does not scale linearly with concentration. The vector model is a simplification that teaches scalar multiplication principles."
                }
            ],

            magnitude: [
                {
                    scenario: "Flight Distance Calculator",
                    context: "An airline needs to calculate the direct (great circle) distance between airports for fuel planning. On a simplified flat-Earth model, displacement vectors from a hub airport give east and north distances.",
                    problem: "Airport A is (420; 310) km from the hub. Airport B is (−180; 520) km from the hub. Find the direct distance between A and B.",
                    application: "AB = b − a = (−180−420; 520−310) = (−600; 210). |AB| = √(360000+44100) = √404100 ≈ 635.5 km.",
                    question: "Compare: flying hub→A (distance = |a|) then A→B vs direct hub→B. How much extra distance does stopping at A add?",
                    answer: "|a| = √(420²+310²) = √(176400+96100) = √272500 ≈ 522.0 km. |hub→B| = √(180²+520²) = √(32400+270400) = √302800 ≈ 550.3 km. Hub→A→B ≈ 522+635.5 = 1157.5 km vs hub→B directly ≈ 550.3 km — direct route saves 607 km.",
                    extension: "Airlines publish 'great circle routes' computed exactly this way — minimising total displacement magnitude is the foundation of fuel-efficient routing."
                },
                {
                    scenario: "Earthquake Epicentre Distance",
                    context: "Seismologists at two stations record P-wave and S-wave arrival times to calculate the displacement to an earthquake epicentre. Station A records displacement vector (45; 60) km; Station B records (−20; 90) km from their respective origins.",
                    problem: "Find the distance from each station to the epicentre.",
                    application: "Distance A: |(45;60)| = √(2025+3600) = √5625 = 75 km. Distance B: |(−20;90)| = √(400+8100) = √8500 ≈ 92.2 km.",
                    question: "Station A is at position (100; 50) and Station B at (40; 200). If both displacement vectors point to the same epicentre, find its position.",
                    answer: "Epicentre from A: A + (45;60) = (145; 110). Epicentre from B: B + (−20;90) = (20; 290). The different answers reveal measurement error — actual epicentre is determined by averaging or least-squares fitting.",
                    extension: "Real seismological networks use three or more stations and the intersection of circles (radius = distance = magnitude of displacement vector) to fix the epicentre."
                },
                {
                    scenario: "Wind Speed Calculation",
                    context: "A weather balloon records velocity components: v_E = 12 m/s (eastward) and v_N = 16 m/s (northward). The meteorologist needs the actual wind speed for a weather report.",
                    problem: "Find the wind speed (magnitude of velocity vector).",
                    application: "Wind speed = |(12;16)| = √(144+256) = √400 = 20 m/s.",
                    question: "Express the wind as magnitude × unit vector, and find the compass bearing of the wind direction.",
                    answer: "Unit vector = (12/20; 16/20) = (0.6; 0.8). Wind = 20 × (0.6; 0.8). Bearing = 90° − arctan(16/12) = 90° − 53.1° = 036.9° ≈ 037°.",
                    extension: "The Beaufort scale of wind force is based on wind speed magnitude — the direction is reported separately as a bearing, confirming the two independent aspects of a wind vector."
                }
            ],

            direction: [
                {
                    scenario: "Navigation Bearing",
                    context: "A ship navigator needs to steer a course from port to a buoy. The displacement vector from port to buoy is (300; 400) nautical miles (east, north).",
                    problem: "Find the bearing the ship should steer.",
                    application: "Direction angle: arctan(400/300) ≈ 53.1° from east. Bearing = 90° − 53.1° = 036.9° ≈ 037°.",
                    question: "If the ship instead needs to travel to a second buoy at (−200; 350), find that bearing.",
                    answer: "arctan(350/(−200)): Q2 (x<0,y>0): arctan(350/(−200)) + 180° ≈ −60.3° + 180° = 119.7° from east. Bearing = 90° − 119.7° = −29.7° → 360° − 29.7° = 330.3° ≈ 330°.",
                    extension: "Maritime navigation uses bearings precisely as computed here — the vessel's gyrocompass reads bearings that are the direction angles of planned displacement vectors."
                },
                {
                    scenario: "Robotics Orientation",
                    context: "A robot needs to face the direction of its destination before moving. Its current position and destination are given as coordinates. The robot's 'forward' direction corresponds to the displacement vector.",
                    problem: "Robot is at (2;3), destination at (8;7). Find the angle the robot must rotate to face its destination.",
                    application: "Displacement = (8−2; 7−3) = (6;4). Direction angle = arctan(4/6) = arctan(2/3) ≈ 33.7° from east.",
                    question: "If the robot currently faces north (90°), through what angle must it rotate?",
                    answer: "Robot faces 90°, needs to face 33.7°. Rotation = 33.7° − 90° = −56.3° (clockwise by 56.3°).",
                    extension: "Robot control systems use this angle calculation every time a robot changes target — the difference between current heading and required heading vector is the rotation command."
                },
                {
                    scenario: "Cricket Ball Direction Analysis",
                    context: "A ball-tracking system records a cricket ball's velocity components immediately after being hit: v_x = 15 m/s (along pitch) and v_y = 8 m/s (upward). The broadcaster wants to show the launch angle.",
                    problem: "Find the launch angle above the horizontal.",
                    application: "Launch angle = arctan(8/15) = arctan(0.533) ≈ 28.1° above horizontal.",
                    question: "Find the ball's initial speed and write its velocity as magnitude × unit vector.",
                    answer: "Speed = √(15²+8²) = √(225+64) = √289 = 17 m/s. Unit vector = (15/17; 8/17). Velocity = 17 × (15/17; 8/17).",
                    extension: "Ball-tracking technology (Hawk-Eye) uses exactly this vector decomposition — horizontal and vertical components are measured by cameras and combined using magnitude and direction formulas."
                }
            ],

            parallel_vectors: [
                {
                    scenario: "Bridge Cable Analysis",
                    context: "A suspension bridge has cables at angles. An engineer identifies two cable tension vectors: T₁ = (4; 6) kN and T₂ = (6; 9) kN. She needs to know if they are parallel to simplify the structural model.",
                    problem: "Test whether T₁ and T₂ are parallel.",
                    application: "4/6 = 2/3 and 6/9 = 2/3 → ratios equal → T₁ and T₂ are parallel. T₂ = (3/2)T₁.",
                    question: "What structural implication follows from the cables being parallel? If T₁ acts on point A and T₂ on adjacent point B, can the cables be combined into a single equivalent force?",
                    answer: "Parallel forces on different points cannot be directly combined as vectors (different lines of action). They can be combined as a force couple or reduced to a single resultant by torque analysis.",
                    extension: "In structural engineering, recognising parallel force vectors identifies redundant members and simplifies load path analysis."
                },
                {
                    scenario: "Runway Approach Vectors",
                    context: "Air traffic control monitors the approach vectors of aircraft landing on parallel runways. Aircraft A has approach vector (−3; −4), Aircraft B has approach vector (6; 8). Are these approaches parallel?",
                    problem: "Test parallelism of (−3;−4) and (6;8).",
                    application: "(−3)/6 = −1/2 and (−4)/8 = −1/2 → equal ratios → parallel. B = −2A (anti-parallel: opposite directions).",
                    question: "Anti-parallel means the aircraft are approaching from opposite directions. Is this safe for parallel runways?",
                    answer: "Anti-parallel approach vectors on PARALLEL runways means head-on traffic. This requires immediate separation by ATC. The vector test instantly identifies the safety risk.",
                    extension: "ATC software uses dot product and direction vector tests constantly to flag conflicting flight paths — parallelism detection is a primary safety algorithm."
                },
                {
                    scenario: "Road Network Parallel Streets",
                    context: "A city planner is checking whether new road segments are truly parallel for grid planning. Road 1 runs in direction (2; 5) and Road 2 in direction (4; 10).",
                    problem: "Verify that Road 1 and Road 2 are parallel.",
                    application: "2/4 = 1/2 and 5/10 = 1/2 → parallel. Road 2 = 2 × Road 1.",
                    question: "If a third road has direction (3; 6), is it parallel to the others?",
                    answer: "3/2 = 1.5 and 6/5 = 1.2. Not equal → NOT parallel. The road is not in the same direction as the grid.",
                    extension: "Urban grid planning uses parallel direction vectors to define street families — all streets parallel to one direction share the same direction vector (or its scalar multiples)."
                }
            ],

            collinearity: [
                {
                    scenario: "Surveying — Boundary Line Verification",
                    context: "A land surveyor has measured three boundary post positions and needs to certify they lie on a straight legal boundary line for a property deed.",
                    problem: "Post A has position a = (2; 3), post B has position b = (5; 9), post C has position c = (7; 13). Prove or disprove collinearity.",
                    application: "AB = (3;6); AC = (5;10). AC = (5/3) × (3;6)? Check: 5/3 × 6 = 10 ✓. AC = (5/3) × AB → parallel. Common point A → A, B, C are collinear. Boundary is straight. ✓",
                    question: "A 4th post D at (10; 18) is proposed. Is it on the same boundary line?",
                    answer: "AD = (8;15). Is (8;15) = k × (3;6)? k = 8/3 but k × 6 = 16 ≠ 15. NOT collinear — the 4th post is off the boundary.",
                    extension: "Property boundary disputes in law rely on precise surveyor certification of collinearity — the vector method provides the rigorous algebraic proof required for legal documents."
                },
                {
                    scenario: "Archaeological Excavation",
                    context: "Archaeologists find three artefacts and want to determine if they lie along a single Roman road. Road features are expected to be collinear.",
                    problem: "Artefacts: A(1;4), B(3;10), C(5;16). Prove whether they are collinear.",
                    application: "AB = (2;6); AC = (4;12) = 2(2;6) = 2×AB. Parallel + common point A → collinear. Consistent with a straight Roman road alignment.",
                    question: "A fourth artefact at D(7;22) is found. Does this extend the Roman road?",
                    answer: "AD = (6;18) = 3(2;6) = 3×AB ✓. Collinear — the road likely extends through D as well.",
                    extension: "Archaeologists and geophysicists use collinearity tests on geophysical survey data to identify hidden linear features like roads, ditches, and walls."
                },
                {
                    scenario: "Proving a Point Lies on a Line — Algebra Check",
                    context: "A student claims that points A(0;0), B(2;3), and C(6;9) lie on a straight line. The teacher asks for a vector proof.",
                    problem: "Write a formal vector proof that A, B, and C are collinear.",
                    application: "AB = (2;3); AC = (6;9) = 3(2;3) = 3×AB. Since AC is a scalar multiple of AB and A is a common point to both vectors, A, B, and C are collinear. ■",
                    question: "What is the gradient of the line through A, B, and C? How does this relate to the direction vector?",
                    answer: "Gradient = 3/2. Direction vector (2;3) has rise/run = 3/2 = gradient. The direction vector of a line encodes its gradient: gradient = y-component/x-component.",
                    extension: "The connection between gradient and direction vector reveals that any two parallel vectors (scalar multiples) correspond to lines with the same gradient — the algebraic foundation of parallel lines in coordinate geometry."
                },
                {
                    scenario: "Sports Analytics — Player Run Line",
                    context: "A football analytics system tracks player positions at three times during a run: P₁(1;2), P₂(4;8), P₃(7;14) (in metres from corner flag). The analyst wants to verify the player ran in a straight line.",
                    problem: "Prove or disprove that the player ran in a straight line using vectors.",
                    application: "P₁P₂ = (3;6); P₁P₃ = (6;12) = 2(3;6) = 2×P₁P₂. Parallel with common point P₁ → P₁, P₂, P₃ collinear → straight run confirmed.",
                    question: "At what ratio does P₂ divide the segment from P₁ to P₃?",
                    answer: "P₁P₂ = (3;6) = ½(6;12) = ½P₁P₃. So P₂ divides P₁P₃ in ratio 1:1 — the midpoint. The player was exactly halfway through their run at P₂.",
                    extension: "Player tracking systems use collinearity tests to classify runs as straight or curved — this feeds into pressing analysis, offsides calls, and tactical reports."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall vector definitions, notation, and key formulas",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the formula for the magnitude of vector a = (aₓ; aᵧ)"
                },
                understand: {
                    description: "Explain why vector operations work geometrically and physically",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Distinguish"],
                    example: "Explain why vector addition is commutative but subtraction is not"
                },
                apply: {
                    description: "Perform vector operations correctly in standard and contextual problems",
                    verbs: ["Calculate", "Find", "Compute", "Apply", "Use", "Determine"],
                    example: "Given a = (3;4) and b = (−1;6), find 2a − b and |2a − b|"
                },
                analyze: {
                    description: "Interpret vector results; identify parallel vectors; assess collinearity; select appropriate method",
                    verbs: ["Identify", "Test", "Prove", "Classify", "Analyse", "Determine"],
                    example: "Without calculating, explain why (4;6) and (−6;−9) are parallel. State the scalar multiple."
                },
                evaluate: {
                    description: "Assess correctness of vector calculations; evaluate proof structure; critique methods",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Check"],
                    example: "A student claims A(1;2), B(3;5), C(5;7) are collinear. Evaluate this claim with a full proof."
                },
                create: {
                    description: "Construct vectors with specific properties; design geometric proofs; derive results",
                    verbs: ["Construct", "Design", "Derive", "Create", "Prove", "Formulate"],
                    example: "Create a set of three collinear points where the middle point divides the segment in ratio 3:1"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can write simple column vectors from diagrams",
                        "Performs component addition for simple cases",
                        "Confuses vectors with coordinates or scalars"
                    ],
                    support: [
                        "Physical vector walks to ground notation in experience",
                        "Colour-coded component tables to prevent mixing x and y",
                        "Repeated emphasis on the difference between a vector and a point"
                    ]
                },
                developing: {
                    characteristics: [
                        "Correctly applies vector addition, subtraction, and scalar multiplication",
                        "Calculates magnitude using Pythagoras formula",
                        "Begins to use AB = b − a for vectors between points"
                    ],
                    support: [
                        "Practice with direction angles and quadrant adjustments",
                        "Introduce parallel vector test systematically",
                        "Connect magnitude to real-world distance measurement"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Uses position vectors fluently for geometric problems",
                        "Tests parallelism and performs collinearity proofs independently",
                        "Connects vector results to geometric interpretations"
                    ],
                    support: [
                        "Multi-step geometric proofs involving all vector operations",
                        "Contextual problems requiring selection of appropriate vector technique",
                        "Derivation of classical results (midpoint theorem, parallelogram law)"
                    ]
                },
                expert: {
                    characteristics: [
                        "Constructs formal proofs of classical geometry theorems using vectors",
                        "Extends vector methods to 3D and beyond",
                        "Connects vectors to linear algebra (linear independence, span, basis)"
                    ],
                    support: [
                        "Open investigation of Varignon's theorem and Napoleon's theorem",
                        "Introduction to dot product and cross product",
                        "Vector spaces and linear transformations as extension topics"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            column_vectors: {
                remember: "Write the column vector that represents a displacement of 5 units left and 3 units up",
                understand: "Explain the difference between the point P(3, 4) and the column vector (3; 4)",
                apply: "Write the column vector from A(2, 5) to B(7, 1)",
                analyze: "Determine which of these column vectors represent the same direction: (2;4), (1;2), (3;5), (−2;−4)",
                evaluate: "A student writes vector AB = a − b for A(1,3) and B(4,7). Evaluate this claim and correct if needed.",
                create: "Write three different column vectors that all represent movements ending at the point (6; 2) from different starting points"
            },
            position_vectors: {
                remember: "State what is meant by the position vector of a point P",
                understand: "Explain why AB = b − a, starting from the triangle law OA + AB = OB",
                apply: "Given a = (3;7) and b = (9;1), find AB and BA",
                analyze: "Points A and B have position vectors a = (2;5) and b = (8;11). Without calculation, predict the midpoint coordinates and verify algebraically",
                evaluate: "A student computes the midpoint of AB as (a+b) = (10;16). Evaluate this answer.",
                create: "Construct a point C such that the midpoint of AC is at (5; 4), given a = (2; 6)"
            },
            vector_addition: {
                remember: "State the triangle law of vector addition in words and with a diagram",
                understand: "Explain why the resultant of a + (−a) is the zero vector, both algebraically and geometrically",
                apply: "Find p + q + r where p = (3;−2), q = (−5;4), r = (2;1)",
                analyze: "For two vectors of fixed magnitudes |a| = 3 and |b| = 4, what is the range of possible values of |a + b|?",
                evaluate: "Evaluate: is |a + b| always equal to |a| + |b|? Provide a counterexample if not.",
                create: "Design a four-vector journey that starts and ends at the origin, passing through the point (5; 3)"
            },
            vector_subtraction: {
                remember: "Write the formula for vector AB in terms of position vectors a and b",
                understand: "Explain geometrically what a − b represents when a and b are drawn from the same origin",
                apply: "Points A(3;1), B(7;5), C(1;9). Find AB, BC, and verify AB + BC = AC",
                analyze: "Why does AB + BC + CA = 0 for any three points A, B, C? Prove this algebraically.",
                evaluate: "A student finds AB = (5;3) and BA = (5;3). Evaluate this claim.",
                create: "Given AB = (4;−3) and B has position vector b = (6;2), find the position vector of A"
            },
            magnitude: {
                remember: "Write the formula for |a| where a = (aₓ; aᵧ)",
                understand: "Explain why magnitude uses Pythagoras's theorem, using a diagram of the vector components",
                apply: "Find the magnitude of each vector: (5;12), (−3;4), (1;1), (0;7)",
                analyze: "Identify all column vectors (p; q) with integer components where p, q ≤ 10 and |v| is a whole number",
                evaluate: "A student says |a + b| = |a| + |b| always. Evaluate this with a specific counterexample.",
                create: "Create a vector with magnitude exactly 25 using only integer components"
            },
            direction: {
                remember: "State the formula for the direction angle of vector (aₓ; aᵧ) and explain the quadrant adjustment rule",
                understand: "Explain why arctan alone is insufficient for finding the direction of a vector in Q3",
                apply: "Find the direction angle and bearing of: (4;3), (−3;4), (−5;−5), (8;−6)",
                analyze: "Two vectors have the same direction angle but different magnitudes. What can you conclude about them?",
                evaluate: "A student finds the direction of (−4;4) as arctan(4/−4) = −45°. Evaluate and correct.",
                create: "Create a vector that points on a bearing of 300° with magnitude 10"
            },
            parallel_vectors: {
                remember: "State the condition for two vectors a and b to be parallel",
                understand: "Explain the difference between parallel and anti-parallel vectors, with examples of each",
                apply: "Test whether (6;9) and (4;6) are parallel. If so, find the scalar multiple.",
                analyze: "For what value of t is (3;t) parallel to (9;15)?",
                evaluate: "A student says (2;3) and (4;9) are parallel because '4/2 = 2'. Evaluate this claim fully.",
                create: "Write three vectors parallel to (2;−3): one with greater magnitude, one with lesser, one in the opposite direction"
            },
            collinearity: {
                remember: "State the two conditions required to prove three points are collinear using vectors",
                understand: "Explain why two parallel vectors alone are insufficient to prove collinearity",
                apply: "Prove that A(0;0), B(3;6), C(5;10) are collinear. State the ratio in which B divides AC.",
                analyze: "Determine whether A(1;3), B(4;9), C(7;14) are collinear. Justify fully.",
                evaluate: "A student's proof states: 'AB = 2AC, therefore A, B, C are collinear.' Evaluate this proof for completeness.",
                create: "Create a set of three collinear points where the middle point divides the segment in ratio 2:3 from first to last"
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleColumnVectors(problem) {
        const input = (problem || '').toString().toLowerCase();
        const content = {
            topic: "Column Vectors",
            category: 'vectors',
            summary: "Column vectors represent displacement as an ordered vertical pair of numbers: horizontal component on top, vertical component on bottom. They describe how far and in which direction to move.",
            definitions: {
                columnVector: {
                    definition: "A vector written as a vertical pair: (x; y) where x = horizontal displacement, y = vertical displacement",
                    sign_convention: "Positive x: right; negative x: left; positive y: up; negative y: down"
                },
                freeVector: {
                    definition: "A vector that can be placed anywhere — only magnitude and direction matter, not starting point",
                    example: "All arrows with the same length and direction represent the same free vector"
                },
                equalVectors: {
                    definition: "Two vectors are equal if and only if they have identical components",
                    example: "(3;4) = (3;4) regardless of where each arrow is drawn"
                }
            },
            methods: {
                fromDiagram: "Count horizontal squares (right+, left−) then vertical squares (up+, down−)",
                fromCoordinates: "AB = (Bₓ − Aₓ; Bᵧ − Aᵧ)",
                description: "Top number = east/west movement; bottom number = north/south movement"
            },
            examples: [
                { expression: "4 right, 3 up", solution: "(4; 3)" },
                { expression: "A(2,5) to B(7,1)", solution: "AB = (7−2; 1−5) = (5; −4)" },
                { expression: "Describe (−3; 6)", solution: "3 units left and 6 units up" }
            ],
            commonErrors: [
                { error: "Swapping x and y", fix: "Top = horizontal, bottom = vertical" },
                { error: "Confusing vector with point", fix: "A vector is a displacement (movement), not a fixed location" }
            ]
        };
        return content;
    }

    handlePositionVectors(problem) {
        const content = {
            topic: "Position Vectors",
            category: 'vectors',
            summary: "The position vector of a point P is the vector OP from the origin to P. Any vector AB equals b − a (position vector of destination minus position vector of start).",
            keyFormulas: {
                positionVector: "p = (Pₓ; Pᵧ) for point P(Pₓ, Pᵧ)",
                vectorBetweenPoints: "AB = b − a",
                midpoint: "m = ½(a + b)",
                divisionFormula: "Point dividing AB in ratio m:n: (na + mb)/(m+n)"
            },
            examples: [
                { expression: "A(3;2) to B(7;6)", solution: "AB = (7−3; 6−2) = (4;4)" },
                { expression: "Midpoint of a=(1;5), b=(9;1)", solution: "m = ½(10;6) = (5;3)" },
                { expression: "BA where a=(4;2), b=(7;6)", solution: "BA = a−b = (−3;−4) = −AB" }
            ]
        };
        return content;
    }

    handleVectorAddition(problem) {
        const content = {
            topic: "Vector Addition",
            category: 'vectors',
            summary: "Add vectors by adding corresponding components. Geometrically, place vectors tip-to-tail; the resultant goes from the first tail to the last tip.",
            keyFormulas: {
                algebraic: "(a₁;a₂) + (b₁;b₂) = (a₁+b₁; a₂+b₂)",
                geometric: "Tip-to-tail method or parallelogram diagonal"
            },
            properties: ["Commutative: a+b = b+a", "Associative: (a+b)+c = a+(b+c)", "Identity: a+0 = a", "Inverse: a+(−a) = 0"],
            examples: [
                { expression: "(3;2) + (1;4)", solution: "(4;6)" },
                { expression: "p=(−2;5) + q=(4;−3) + r=(1;1)", solution: "(3;3)" }
            ]
        };
        return content;
    }

    handleVectorSubtraction(problem) {
        const content = {
            topic: "Vector Subtraction",
            category: 'vectors',
            summary: "Subtract vectors by subtracting corresponding components. a − b = a + (−b). The vector from A to B is always AB = b − a.",
            keyFormulas: {
                algebraic: "(a₁;a₂) − (b₁;b₂) = (a₁−b₁; a₂−b₂)",
                negativeVector: "−(a₁;a₂) = (−a₁;−a₂)",
                vectorAB: "AB = b − a (position vector of B minus position vector of A)"
            },
            criticalNote: "AB = b − a NOT a − b. Remember: subtract where you START, add where you END.",
            examples: [
                { expression: "(6;2) − (4;5)", solution: "(2;−3)" },
                { expression: "A(1;4) to B(3;−2)", solution: "AB = (2;−6)" }
            ]
        };
        return content;
    }

    handleScalarMultiplication(problem) {
        const content = {
            topic: "Scalar Multiplication",
            category: 'vectors',
            summary: "Multiply every component by the scalar k. Positive k scales magnitude; negative k reverses direction; |ka| = |k| × |a|.",
            keyFormulas: {
                formula: "k(a₁;a₂) = (ka₁;ka₂)",
                magnitudeEffect: "|ka| = |k| × |a|",
                directionEffect: "k>0: same direction; k<0: reversed direction; k=0: zero vector"
            },
            properties: ["k(a+b) = ka + kb", "(j+k)a = ja + ka", "(jk)a = j(ka)", "1×a = a"],
            examples: [
                { expression: "3 × (2;−4)", solution: "(6;−12)" },
                { expression: "−½ × (6;4)", solution: "(−3;−2)" },
                { expression: "Find k: k(4;3) = (−8;−6)", solution: "k = −2" }
            ]
        };
        return content;
    }

    handleMagnitude(problem) {
        const content = {
            topic: "Magnitude",
            category: 'vectors',
            summary: "The magnitude |a| is the length of the vector, found using Pythagoras: |a| = √(aₓ² + aᵧ²). Always non-negative.",
            keyFormulas: {
                magnitude: "|a| = √(aₓ² + aᵧ²)",
                unitVector: "â = a/|a|  (magnitude = 1)",
                scalarEffect: "|ka| = |k| × |a|",
                triangleInequality: "|a + b| ≤ |a| + |b|"
            },
            pythagoreanTriples: ["(3;4)→5", "(5;12)→13", "(8;15)→17", "(7;24)→25"],
            examples: [
                { expression: "|(3;4)|", solution: "√(9+16) = √25 = 5" },
                { expression: "Unit vector of (1;1)", solution: "|v|=√2; v̂=(1/√2; 1/√2)" },
                { expression: "|(−5;12)|", solution: "√(25+144) = √169 = 13" }
            ]
        };
        return content;
    }

    handleDirection(problem) {
        const content = {
            topic: "Direction",
            category: 'vectors',
            summary: "Direction angle θ = arctan(aᵧ/aₓ), with quadrant adjustment. Bearings measure clockwise from north. Unit vector â = a/|a| encodes direction.",
            keyFormulas: {
                directionAngle: "θ = arctan(aᵧ/aₓ) with quadrant adjustment",
                quadrantAdjustment: "Q1: use directly; Q2&Q3: add 180°; Q4: add 360° if negative",
                bearingConversion: "Bearing = 90° − direction angle (for Q1); adjust for other quadrants",
                unitVector: "â = a/|a|"
            },
            examples: [
                { expression: "Direction of (3;3)", solution: "arctan(1) = 45°; bearing = 045°" },
                { expression: "Direction of (−4;4)", solution: "arctan(4/−4)+180° = 135°; bearing = 315°" },
                { expression: "Unit vector of (5;12)", solution: "(5/13; 12/13)" }
            ]
        };
        return content;
    }

    handleParallelVectors(problem) {
        const content = {
            topic: "Parallel Vectors",
            category: 'vectors',
            summary: "Vectors a and b are parallel if a = kb for some non-zero scalar k. Test: aₓ/bₓ = aᵧ/bᵧ, or equivalently aₓbᵧ − aᵧbₓ = 0.",
            keyCondition: "a ∥ b ⟺ a = kb for some k ≠ 0",
            test: {
                method1: "Find k = a₁/b₁, verify k = a₂/b₂",
                method2: "Cross multiply: a₁b₂ − a₂b₁ = 0"
            },
            examples: [
                { expression: "Are (4;6) and (6;9) parallel?", solution: "4/6 = 2/3, 6/9 = 2/3 ✓ → parallel, k = 2/3" },
                { expression: "Are (3;2) and (6;5) parallel?", solution: "3×5−2×6 = 3 ≠ 0 → NOT parallel" },
                { expression: "Find t: (3;t) ∥ (6;8)", solution: "3/6 = t/8 → t = 4" }
            ]
        };
        return content;
    }

    handleCollinearity(problem) {
        const content = {
            topic: "Collinearity",
            category: 'vectors',
            summary: "Three points A, B, C are collinear iff AB = k × AC for some scalar k (vectors parallel) AND A is a common point. Both conditions are required.",
            proofTemplate: [
                "1. Find position vectors a, b, c",
                "2. Calculate AB = b − a and AC = c − a",
                "3. Show AB = k × AC for some scalar k",
                "4. State: since AB is a scalar multiple of AC with A as common point, A, B, C are collinear ■"
            ],
            criticalPoint: "Parallel vectors alone are insufficient — they could be on different parallel lines. A COMMON POINT must be explicitly stated.",
            examples: [
                {
                    expression: "A(1;2), B(3;6), C(5;10)",
                    solution: "AB=(2;4); AC=(4;8); AC=2×AB; common point A → collinear ✓"
                },
                {
                    expression: "A(2;1), B(5;4), C(8;7)",
                    solution: "AB=(3;3); AC=(6;6); AC=2×AB; common point A → collinear ✓"
                }
            ]
        };
        return content;
    }
}
