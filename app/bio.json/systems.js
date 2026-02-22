Here is the complete updated code inline:
// Enhanced Algebraic Systems Workbook - Comprehensive Algebraic Systems System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { MathematicsSvgDiagrams } from '../svg-data.js';
import { MathematicsDiagramsRegistry } from '../registry.js';
import { MathematicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedAlgebraicSystemsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "algebraic_systems";
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
        this.initializeAlgebraicSystemsTopics();
        this.initializeAlgebraicSystemsLessons();
        this.initializeMathematicsPracticals();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            algebraic_systems: {
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
                linearSystemBg: '#e3f2fd',
                nonlinearSystemBg: '#f3e5f5',
                polynomialSystemBg: '#e8f5e9',
                linearQuadraticBg: '#fff8e1',
                threeVariableBg: '#fce4ec',
                solutionSetBg: '#e0f7fa'
            },
            algebra: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4a148c',
                headerText: '#ffffff',
                sectionBg: '#e1bee7',
                sectionText: '#4a148c',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#f3e5f5',
                resultText: '#6a1b9a',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#ab47bc',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                practicalBg: '#fffde7',
                practicalText: '#f57f17',
                linearSystemBg: '#e8eaf6',
                nonlinearSystemBg: '#fce4ec',
                polynomialSystemBg: '#e8f5e9',
                linearQuadraticBg: '#fff8e1',
                threeVariableBg: '#f3e5f5',
                solutionSetBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.algebraic_systems;
    }

    initializeMathematicsSymbols() {
        return {
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'sigma': 'Σ', 'phi': 'φ',
            'arrow': '→', 'doubleArrow': '↔', 'implies': '⟹', 'iff': '⟺',
            'plus': '+', 'minus': '−', 'plusminus': '±', 'times': '×',
            'divide': '÷', 'approximately': '≈', 'notEqual': '≠',
            'leq': '≤', 'geq': '≥', 'infinity': '∞', 'sqrt': '√',
            'squared': '²', 'cubed': '³', 'superscript4': '⁴',
            'subscript0': '₀', 'subscript1': '₁', 'subscript2': '₂',
            'dot': '·', 'degree': '°', 'therefore': '∴', 'because': '∵',
            'forAll': '∀', 'exists': '∃', 'element': '∈',
            'subset': '⊂', 'union': '∪', 'intersection': '∩', 'emptySet': '∅',
            'integer': 'ℤ', 'rational': 'ℚ', 'real': 'ℝ',
            'complex': 'ℂ', 'natural': 'ℕ',
            'matrixOpen': '[', 'matrixClose': ']',
            'determinant': 'det', 'augmented': '|',
            'rowReduce': 'R', 'equivalent': '~',
            'solutionSet': 'S', 'nullSet': '∅',
            'partialDerivative': '∂', 'gradient': '∇',
            'systemBrace': '{', 'and': '∧', 'or': '∨'
        };
    }

    initializeAlgebraicSystemsTopics() {
        this.mathematicsTopics = {
            linear_system_2var: {
                patterns: [
                    /system.*linear.*2|two.*variable.*system/i,
                    /simultaneous.*equation|linear.*simultaneous/i,
                    /substitution.*method|elimination.*method/i,
                    /graphical.*method.*system|system.*two.*equation/i
                ],
                handler: this.handleLinearSystem2Var.bind(this),
                name: 'System of Linear Equations (2 Variables)',
                category: 'algebraic_systems',
                description: 'Solving systems of two linear equations in two unknowns using substitution, elimination, and graphical methods',
                difficulty: 'beginner',
                prerequisites: ['linear_equations', 'coordinate_geometry', 'algebraic_manipulation']
            },

            linear_system_3var: {
                patterns: [
                    /system.*linear.*3|three.*variable.*system/i,
                    /three.*unknown|3.*unknown/i,
                    /gaussian.*elimination|row.*reduction/i,
                    /back.*substitution|augmented.*matrix/i
                ],
                handler: this.handleLinearSystem3Var.bind(this),
                name: 'System of Linear Equations (3 Variables)',
                category: 'algebraic_systems',
                description: 'Solving systems of three linear equations in three unknowns using Gaussian elimination and back substitution',
                difficulty: 'intermediate',
                prerequisites: ['linear_system_2var', 'matrix_basics', 'algebraic_manipulation']
            },

            nonlinear_system: {
                patterns: [
                    /non.?linear.*system|system.*non.?linear/i,
                    /circle.*line.*system|parabola.*line/i,
                    /simultaneous.*non.?linear/i,
                    /curved.*system|system.*curve/i
                ],
                handler: this.handleNonlinearSystem.bind(this),
                name: 'System of Non-Linear Equations',
                category: 'algebraic_systems',
                description: 'Solving systems where at least one equation is non-linear, using substitution and graphical methods',
                difficulty: 'intermediate',
                prerequisites: ['linear_system_2var', 'quadratic_equations', 'conic_sections']
            },

            polynomial_system: {
                patterns: [
                    /polynomial.*system|system.*polynomial/i,
                    /higher.*degree.*system|cubic.*system/i,
                    /resultant.*method|groebner/i,
                    /algebraic.*variety/i
                ],
                handler: this.handlePolynomialSystem.bind(this),
                name: 'System of Polynomial Equations',
                category: 'algebraic_systems',
                description: 'Solving systems of polynomial equations using substitution, resultants, and numerical methods',
                difficulty: 'advanced',
                prerequisites: ['nonlinear_system', 'polynomial_factoring', 'complex_numbers']
            },

            linear_quadratic_system: {
                patterns: [
                    /linear.*quadratic|quadratic.*linear/i,
                    /line.*parabola|parabola.*line/i,
                    /linear.?quadratic.*system/i,
                    /intersect.*parabola|line.*curve/i
                ],
                handler: this.handleLinearQuadraticSystem.bind(this),
                name: 'Linear–Quadratic Systems',
                category: 'algebraic_systems',
                description: 'Finding intersection points of a line and a parabola (or other quadratic curve) algebraically and graphically',
                difficulty: 'intermediate',
                prerequisites: ['linear_system_2var', 'quadratic_equations', 'parabola_graphs']
            }
        };
    }

    initializeAlgebraicSystemsLessons() {
        this.lessons = {
            linear_system_2var: {
                title: "Systems of Linear Equations in Two Variables: Three Methods, One Solution",
                concepts: [
                    "A system of two linear equations represents two straight lines in the coordinate plane",
                    "The solution is the point (or points) where both equations are satisfied simultaneously",
                    "Three possible outcomes: one solution (intersecting), no solution (parallel), infinitely many (coincident)",
                    "Substitution, elimination, and graphical methods always yield the same solution",
                    "Checking the solution in both original equations is essential"
                ],
                theory: "A system of two linear equations in two variables is one of the most fundamental structures in algebra. Geometrically, each equation represents a straight line, and solving the system means finding their intersection. This concept underpins economics (supply and demand equilibrium), engineering (force balance), computer graphics (ray intersection), and navigation (triangulation).",
                keyDefinitions: {
                    "System of Equations": "Two or more equations that must all be satisfied simultaneously by the same values of the unknowns",
                    "Solution of a System": "An ordered pair (x, y) that satisfies every equation in the system; geometrically, the intersection point of the lines",
                    "Consistent System": "A system with at least one solution",
                    "Inconsistent System": "A system with no solution; the lines are parallel and never intersect",
                    "Dependent System": "A system with infinitely many solutions; both equations describe the same line (coincident lines)",
                    "Independent System": "A consistent system with exactly one solution",
                    "Substitution Method": "Solving one equation for one variable, then substituting into the other equation",
                    "Elimination Method": "Adding or subtracting multiples of equations to eliminate one variable",
                    "Augmented Matrix": "A matrix that encodes both the coefficients and constants of a system: [A|b]"
                },
                solutionTypes: {
                    unique: {
                        condition: "Lines have different gradients",
                        algebraicSign: "Solving yields a unique numerical value for each variable",
                        geometricMeaning: "Lines intersect at exactly one point",
                        example: "2x + y = 5 and x − y = 1 → solution: (2, 1)"
                    },
                    noSolution: {
                        condition: "Lines have the same gradient but different y-intercepts (parallel)",
                        algebraicSign: "Solving yields a contradiction such as 0 = 5",
                        geometricMeaning: "Lines never intersect",
                        example: "2x + y = 5 and 2x + y = 8 → 0 = 3 (contradiction)"
                    },
                    infinitelyMany: {
                        condition: "Both equations describe the same line (one is a scalar multiple of the other)",
                        algebraicSign: "Solving yields a tautology such as 0 = 0",
                        geometricMeaning: "Lines are coincident — every point on the line is a solution",
                        example: "2x + y = 5 and 4x + 2y = 10 → 0 = 0"
                    }
                },
                methods: {
                    substitution: {
                        steps: [
                            "Step 1: Choose the simpler equation and solve explicitly for one variable (prefer the one with coefficient 1)",
                            "Step 2: Substitute this expression into the other equation",
                            "Step 3: Solve the resulting single-variable equation",
                            "Step 4: Back-substitute to find the other variable",
                            "Step 5: Write the solution as an ordered pair (x, y)",
                            "Step 6: Check by substituting into both original equations"
                        ],
                        bestFor: "When one variable has a coefficient of 1 or −1 in at least one equation",
                        example: {
                            system: "y = 2x − 1 and 3x + y = 9",
                            step1: "First equation already solved for y: y = 2x − 1",
                            step2: "Substitute into second: 3x + (2x − 1) = 9",
                            step3: "5x − 1 = 9 → 5x = 10 → x = 2",
                            step4: "y = 2(2) − 1 = 3",
                            result: "Solution: (2, 3)",
                            check: "Eq 1: 3 = 2(2)−1 = 3 ✓; Eq 2: 3(2)+3 = 9 ✓"
                        }
                    },
                    elimination: {
                        steps: [
                            "Step 1: Align like terms vertically (x-terms, y-terms, constants)",
                            "Step 2: Multiply one or both equations by constants to make coefficients of one variable equal in magnitude",
                            "Step 3: Add or subtract the equations to eliminate that variable",
                            "Step 4: Solve the resulting single-variable equation",
                            "Step 5: Substitute back into either original equation to find the other variable",
                            "Step 6: Check in both original equations"
                        ],
                        bestFor: "When coefficients are already equal or can be easily made equal by multiplication",
                        example: {
                            system: "2x + 3y = 12 and 4x − y = 2",
                            step1: "Multiply second equation by 3: 12x − 3y = 6",
                            step2: "Add to first: (2x + 3y) + (12x − 3y) = 12 + 6",
                            step3: "14x = 18 → x = 9/7",
                            step4: "Substitute: 2(9/7) + 3y = 12 → 3y = 12 − 18/7 = 66/7 → y = 22/7",
                            result: "Solution: (9/7, 22/7)"
                        }
                    },
                    graphical: {
                        steps: [
                            "Step 1: Rearrange each equation into slope-intercept form y = mx + c",
                            "Step 2: Plot both lines on the same coordinate axes",
                            "Step 3: Identify the intersection point visually",
                            "Step 4: Read off the coordinates of the intersection",
                            "Step 5: Verify algebraically"
                        ],
                        bestFor: "Visualising the nature of the solution; checking algebraic results; understanding consistent/inconsistent/dependent systems",
                        limitation: "Graphical reading can be imprecise; algebraic methods give exact solutions"
                    }
                },
                workedExamples: [
                    {
                        scenario: "Supply meets Demand",
                        system: "Supply: p = 2q + 3; Demand: p = −q + 12",
                        solution: "Set equal: 2q + 3 = −q + 12 → 3q = 9 → q = 3; p = 9",
                        interpretation: "Market equilibrium at quantity 3 units, price £9"
                    },
                    {
                        scenario: "Two-digit number puzzle",
                        system: "x + y = 9 (digit sum); 10y + x = 10x + y + 27 (reversed is 27 more)",
                        simplify: "Second equation: 9y − 9x = 27 → y − x = 3",
                        solution: "Add: 2y = 12 → y = 6, x = 3. Number is 36.",
                        check: "63 − 36 = 27 ✓"
                    },
                    {
                        scenario: "Inconsistent system",
                        system: "3x − y = 4 and 6x − 2y = 10",
                        attempt: "Multiply first by 2: 6x − 2y = 8. But second gives 6x − 2y = 10.",
                        conclusion: "8 ≠ 10 → contradiction → no solution (parallel lines)"
                    }
                ],
                applications: [
                    "Economics: supply-demand equilibrium pricing",
                    "Chemistry: mixture problems (concentrations)",
                    "Physics: force balance and circuit analysis (Kirchhoff's laws)",
                    "Navigation: GPS triangulation from multiple signal equations",
                    "Computer graphics: line intersection in rendering algorithms"
                ]
            },

            linear_system_3var: {
                title: "Systems of Linear Equations in Three Variables: Gaussian Elimination",
                concepts: [
                    "Three linear equations in three unknowns define three planes in 3D space",
                    "The solution is the point where all three planes meet simultaneously",
                    "Gaussian elimination systematically reduces the system to triangular form",
                    "Back substitution then recovers each variable from the bottom up",
                    "The augmented matrix provides a compact, efficient notation for the process"
                ],
                theory: "Extending from 2 to 3 variables introduces a new geometric dimension — instead of lines on a plane, we work with planes in 3D space. The solution possibilities expand: a unique point, a line (infinitely many), a plane (infinitely many), or no solution. Gaussian elimination, named after Carl Friedrich Gauss, is the systematic row-operation method that transforms any linear system into an equivalent triangular form that can be solved by back substitution.",
                keyDefinitions: {
                    "Gaussian Elimination": "A systematic method of applying row operations to reduce an augmented matrix to row echelon form",
                    "Row Echelon Form": "A matrix where each row's leading entry (pivot) is to the right of the row above's pivot; zeros below each pivot",
                    "Reduced Row Echelon Form (RREF)": "Row echelon form where each pivot is 1 and all other entries in its column are 0",
                    "Back Substitution": "Solving for variables starting from the last equation upward in a triangular system",
                    "Augmented Matrix": "Matrix [A|b] representing the system Ax = b",
                    "Row Operations": "Elementary operations that preserve the solution set: swap rows, multiply row by non-zero constant, add multiple of one row to another",
                    "Pivot": "The leading non-zero entry in a row after row reduction",
                    "Triangular System": "A system where the coefficient matrix is upper or lower triangular, enabling direct back substitution"
                },
                rowOperations: {
                    swap: { notation: "Rᵢ ↔ Rⱼ", description: "Interchange two rows; solution unchanged" },
                    scale: { notation: "kRᵢ → Rᵢ", description: "Multiply all entries of a row by non-zero constant k" },
                    replace: { notation: "Rᵢ + kRⱼ → Rᵢ", description: "Replace row i with itself plus k times row j; eliminates variables" }
                },
                gaussianEliminationSteps: [
                    "Step 1: Write the augmented matrix [A|b] for the system",
                    "Step 2: Identify the leftmost column with a non-zero entry (the pivot column)",
                    "Step 3: If needed, swap rows to place a non-zero entry at the top of the pivot column",
                    "Step 4: Use row replacement operations to create zeros below the pivot",
                    "Step 5: Move to the next row and repeat Steps 2–4 for the submatrix below",
                    "Step 6: Continue until row echelon form is achieved",
                    "Step 7: Apply back substitution: solve the last equation, substitute upward"
                ],
                workedExamples: [
                    {
                        system: ["x + y + z = 6", "2x − y + z = 3", "x + 2y − z = 2"],
                        augmented: "[[1,1,1|6],[2,−1,1|3],[1,2,−1|2]]",
                        step1: "R2 − 2R1 → R2: [0,−3,−1|−9]; R3 − R1 → R3: [0,1,−2|−4]",
                        step2: "R3 + (1/3)R2 → R3: [0,0,−7/3|−7] → multiply by −3/7: [0,0,1|3]",
                        backSub: "z = 3; −3y − 3 = −9 → y = 2; x + 2 + 3 = 6 → x = 1",
                        result: "(x, y, z) = (1, 2, 3)",
                        check: "1+2+3=6 ✓; 2(1)−2+3=3 ✓; 1+2(2)−3=2 ✓"
                    }
                ],
                geometricInterpretation: {
                    uniqueSolution: "Three planes meet at a single point — the unique solution",
                    noSolution: "At least two planes are parallel (no common meeting point for all three)",
                    infinitelyMany_line: "All three planes share a common line — infinitely many solutions along that line",
                    infinitelyMany_plane: "All three equations represent the same plane"
                },
                applications: [
                    "Electrical circuits: Kirchhoff's laws giving 3-equation systems for mesh currents",
                    "3D computer graphics: solving for barycentric coordinates",
                    "Structural engineering: force/moment balance in 3D frameworks",
                    "Economics: 3-sector input-output models (Leontief)",
                    "Cryptography: solving linear congruence systems"
                ]
            },

            nonlinear_system: {
                title: "Systems of Non-Linear Equations: When Lines Become Curves",
                concepts: [
                    "A non-linear system contains at least one equation that is not linear",
                    "Solutions can be found using substitution, elimination, or graphical methods",
                    "Multiple solutions are common — the system may have 0, 1, 2, or more solution pairs",
                    "Substitution from the linear (or simpler) equation into the non-linear is usually most efficient",
                    "All solution pairs must be verified in both original equations"
                ],
                theory: "Non-linear systems arise whenever the relationship between quantities is curved — parabolas, circles, ellipses, hyperbolas, exponentials, and more. Unlike linear systems where two lines can intersect at most once, curved equations can intersect multiple times, leading to multiple solution pairs. The challenge is not only solving but also determining how many solutions exist and what they represent geometrically.",
                keyDefinitions: {
                    "Non-Linear Equation": "An equation containing at least one term with a variable raised to a power other than 1, or involving products of variables",
                    "Non-Linear System": "A system containing at least one non-linear equation",
                    "Intersection Points": "Points (x, y) satisfying all equations in the system simultaneously; geometrically, where curves cross",
                    "Discriminant Analysis": "Using the discriminant of the resulting quadratic to determine how many real solutions exist",
                    "Substitution into Non-Linear": "Replacing one variable from the linear equation into the non-linear equation to get a polynomial equation in one variable"
                },
                commonTypes: {
                    lineAndParabola: {
                        form: "y = mx + c and y = ax² + bx + d",
                        method: "Substitute linear y into parabola; solve resulting quadratic",
                        solutions: "0 (line misses parabola), 1 (tangent), or 2 (two intersections)"
                    },
                    lineAndCircle: {
                        form: "y = mx + c and x² + y² = r²",
                        method: "Substitute linear y into circle equation; solve quadratic",
                        solutions: "0 (line outside circle), 1 (tangent), or 2 (chord intersections)"
                    },
                    twoParabolas: {
                        form: "y = ax² + bx + c and y = dx² + ex + f",
                        method: "Set equal; solve resulting quadratic",
                        solutions: "0, 1, or 2 intersections"
                    },
                    circleAndParabola: {
                        form: "x² + y² = r² and y = ax² + bx + c",
                        method: "Substitute parabola into circle; solve degree-4 polynomial",
                        solutions: "Up to 4 intersection points"
                    },
                    twoCircles: {
                        form: "(x−h₁)² + (y−k₁)² = r₁² and (x−h₂)² + (y−k₂)² = r₂²",
                        method: "Subtract equations to get linear equation (radical axis); then substitute",
                        solutions: "0, 1, or 2 intersection points"
                    }
                },
                workedExamples: [
                    {
                        type: "Line and Circle",
                        system: "x + y = 2 and x² + y² = 10",
                        step1: "From linear: y = 2 − x",
                        step2: "Substitute: x² + (2−x)² = 10 → x² + 4 − 4x + x² = 10 → 2x² − 4x − 6 = 0",
                        step3: "x² − 2x − 3 = 0 → (x−3)(x+1) = 0 → x = 3 or x = −1",
                        step4: "y = 2−3 = −1 or y = 2−(−1) = 3",
                        result: "Solutions: (3, −1) and (−1, 3)",
                        check: "3+(−1)=2 ✓; 9+1=10 ✓; −1+3=2 ✓; 1+9=10 ✓"
                    },
                    {
                        type: "Two Circles (radical axis method)",
                        system: "x² + y² = 25 and (x−4)² + y² = 9",
                        step1: "Expand second: x²−8x+16+y²=9",
                        step2: "Subtract first: −8x+16=9−25 → −8x=−32 → x=4",
                        step3: "Substitute: 16+y²=25 → y²=9 → y=±3",
                        result: "Solutions: (4, 3) and (4, −3)"
                    }
                ],
                discriminantAnalysis: {
                    purpose: "Determine number of solutions before solving completely",
                    method: "After substitution, reduce to quadratic ax² + bx + c = 0; compute Δ = b² − 4ac",
                    interpretation: {
                        positive: "Δ > 0: two distinct real solutions",
                        zero: "Δ = 0: one repeated solution (tangency)",
                        negative: "Δ < 0: no real solutions (curves do not intersect over ℝ)"
                    }
                },
                applications: [
                    "GPS positioning: intersection of circular signal fronts gives location",
                    "Optics: finding where a light ray intersects a curved lens surface",
                    "Robotics: inverse kinematics — finding joint angles for a given end-effector position",
                    "Economics: equilibrium of non-linear supply and demand curves",
                    "Game development: collision detection between circular and linear objects"
                ]
            },

            polynomial_system: {
                title: "Systems of Polynomial Equations: Higher-Degree Algebraic Systems",
                concepts: [
                    "Polynomial systems contain equations of degree 2 or higher in multiple variables",
                    "Bézout's theorem gives the maximum number of solutions as the product of degrees",
                    "Substitution reduces the system to a single polynomial in one variable",
                    "Resultants and Gröbner bases provide systematic elimination methods",
                    "Complex solutions exist even when real solutions do not"
                ],
                theory: "Polynomial systems are the most general class of algebraic systems. Bézout's theorem states that a system of n polynomial equations in n variables has at most d₁·d₂·...·dₙ solutions (counting multiplicities and complex solutions). These systems arise in robotics (forward kinematics), computer vision (pose estimation), chemistry (equilibrium concentrations), and algebraic geometry. Modern computer algebra systems use Gröbner basis algorithms to solve these systems algorithmically.",
                keyDefinitions: {
                    "Polynomial System": "A system of equations where each equation is a polynomial in two or more variables",
                    "Bézout's Theorem": "A system of n polynomial equations of degrees d₁, d₂, ..., dₙ has at most d₁·d₂·...·dₙ solutions in ℂ (counting multiplicity)",
                    "Resultant": "A polynomial computed from two polynomials that eliminates a shared variable; its roots are projections of common solutions",
                    "Gröbner Basis": "A canonical basis for a polynomial ideal that enables systematic solution of polynomial systems (Buchberger's algorithm)",
                    "Algebraic Variety": "The set of all solutions of a polynomial system; can be a point, curve, surface, or higher-dimensional object",
                    "Multiplicity": "The number of times a solution is repeated; a solution of multiplicity m > 1 means the curves are tangent at that point",
                    "Elimination Ideal": "The ideal obtained by systematically eliminating variables; its generators give conditions on remaining variables"
                },
                solutionMethods: {
                    substitution: {
                        description: "Solve one equation for one variable; substitute into others; repeat",
                        suitableFor: "Systems where one equation is simple enough to solve explicitly",
                        limitation: "Can lead to very high-degree polynomials in one variable"
                    },
                    resultant: {
                        description: "Compute the resultant of two polynomials with respect to one variable; this eliminates that variable",
                        suitableFor: "Systems of two equations in two variables",
                        computation: "Resultant(f, g, x) = det(Sylvester matrix of f and g)"
                    },
                    numericalMethods: {
                        description: "Newton's method, homotopy continuation, or interval arithmetic to approximate solutions",
                        suitableFor: "Systems where exact symbolic solution is infeasible",
                        tools: "PHCpack, Bertini, MATLAB's fsolve, Python's scipy.optimize"
                    },
                    groebnerBasis: {
                        description: "Compute a Gröbner basis using Buchberger's algorithm; the basis puts the system in a triangular-like form",
                        advantage: "Systematic; handles any polynomial system; implemented in computer algebra systems (Maple, Mathematica, SageMath)",
                        lexicographic: "A lexicographic Gröbner basis explicitly eliminates variables in order"
                    }
                },
                workedExamples: [
                    {
                        type: "Degree-2 and Degree-3 System",
                        system: ["y = x² − 2x + 1", "y = x³ − 3x"],
                        step1: "Set equal: x² − 2x + 1 = x³ − 3x",
                        step2: "Rearrange: x³ − x² − x − 1 = 0",
                        step3: "Try rational roots: x = 1 gives 1−1−1−1 = −2 ≠ 0; x = −1 gives −1−1+1−1 = −2 ≠ 0",
                        step4: "Use numerical method or factor: x³ − x² − x − 1 ≈ 0 near x ≈ 1.839",
                        note: "Bézout predicts at most 2×3 = 6 solutions (counting complex solutions)"
                    },
                    {
                        type: "Symmetric System",
                        system: ["x + y = 5", "xy = 6"],
                        step1: "From first: y = 5 − x",
                        step2: "Substitute: x(5−x) = 6 → 5x − x² = 6 → x² − 5x + 6 = 0",
                        step3: "(x−2)(x−3) = 0 → x = 2 or x = 3",
                        result: "(2, 3) and (3, 2)",
                        note: "Symmetric systems often yield conjugate solution pairs"
                    },
                    {
                        type: "Classic sum-and-product system",
                        system: ["x² + y² = 13", "xy = 6"],
                        step1: "Note: (x+y)² = x²+2xy+y² = 13+12 = 25 → x+y = ±5",
                        step2: "And: (x−y)² = x²−2xy+y² = 13−12 = 1 → x−y = ±1",
                        step3: "Case 1: x+y=5, x−y=1 → x=3, y=2",
                        step4: "Case 2: x+y=5, x−y=−1 → x=2, y=3",
                        step5: "Case 3: x+y=−5, x−y=1 → x=−2, y=−3",
                        step6: "Case 4: x+y=−5, x−y=−1 → x=−3, y=−2",
                        result: "Four solutions: (3,2), (2,3), (−2,−3), (−3,−2)"
                    }
                ],
                bezoutApplications: {
                    twoLinear: "d₁=1, d₂=1: at most 1 solution — confirms 2 lines meet at most once",
                    lineAndConic: "d₁=1, d₂=2: at most 2 solutions — confirms line intersects conic at most twice",
                    twoConics: "d₁=2, d₂=2: at most 4 solutions — two conics can intersect up to 4 times",
                    cubicAndQuadratic: "d₁=3, d₂=2: at most 6 solutions"
                },
                applications: [
                    "Robotics: forward and inverse kinematics require solving polynomial systems",
                    "Computer vision: camera pose estimation from point correspondences",
                    "Chemistry: chemical equilibrium concentration calculations",
                    "Structural biology: protein folding distance geometry",
                    "Algebraic cryptography: multivariate public-key cryptosystems (Rainbow, HFE)"
                ]
            },

            linear_quadratic_system: {
                title: "Linear–Quadratic Systems: Where Lines Meet Parabolas",
                concepts: [
                    "A linear-quadratic system pairs one linear equation with one quadratic equation",
                    "Geometrically, it finds where a straight line intersects a parabola (or other conic)",
                    "The substitution method transforms the system into a single quadratic equation",
                    "The discriminant of this quadratic determines the number of intersections",
                    "Both intersection coordinates must be calculated and verified"
                ],
                theory: "The linear-quadratic system is the most important and frequently examined non-linear system at secondary and early undergraduate level. It is the algebraic formulation of a fundamental geometric question: where does a line cross a curve? The answer connects algebra (solving a quadratic) to geometry (intersection points) to analysis (tangency conditions). The discriminant of the resulting quadratic provides an elegant criterion: Δ > 0 (two crossings), Δ = 0 (tangent), Δ < 0 (no crossing).",
                keyDefinitions: {
                    "Linear–Quadratic System": "A system of equations where one equation is linear (degree 1) and one is quadratic (degree 2)",
                    "Intersection Point": "A point satisfying both equations; found by solving the system",
                    "Tangent Line": "A line that touches a curve at exactly one point without crossing; corresponds to Δ = 0",
                    "Secant Line": "A line that crosses a curve at two distinct points; corresponds to Δ > 0",
                    "Discriminant Criterion": "For the quadratic resulting from substitution: Δ = b² − 4ac; tells number of real intersections",
                    "Quadratic in Standard Form": "y = ax² + bx + c; the curve in most linear-quadratic systems",
                    "Vertex Form": "y = a(x − h)² + k; useful for identifying vertex and axis of symmetry"
                },
                solutionMethod: {
                    steps: [
                        "Step 1: Express the linear equation explicitly for y (or x): y = mx + c",
                        "Step 2: Substitute this expression for y into the quadratic equation",
                        "Step 3: Expand and collect all terms on one side: ax² + bx + c = 0",
                        "Step 4: Calculate the discriminant Δ = b² − 4ac to determine number of solutions",
                        "Step 5: If Δ ≥ 0, solve the quadratic (factoring, formula, or completing the square)",
                        "Step 6: Substitute each x-value back into the linear equation to find corresponding y-values",
                        "Step 7: Write solution(s) as ordered pair(s) (x, y)",
                        "Step 8: Verify each pair satisfies both original equations"
                    ]
                },
                discriminantInterpretation: {
                    twoSolutions: {
                        condition: "Δ = b² − 4ac > 0",
                        geometric: "Line is a secant — crosses the parabola at two distinct points",
                        solutions: "Two distinct ordered pairs (x₁, y₁) and (x₂, y₂)"
                    },
                    oneSolution: {
                        condition: "Δ = b² − 4ac = 0",
                        geometric: "Line is tangent — touches parabola at exactly one point",
                        solutions: "One ordered pair (x, y); the line just grazes the curve",
                        application: "Finding tangent lines from external points to parabolas"
                    },
                    noSolution: {
                        condition: "Δ = b² − 4ac < 0",
                        geometric: "Line does not intersect the parabola (line is above or below the curve entirely)",
                        solutions: "No real solutions; complex solutions exist in ℂ"
                    }
                },
                workedExamples: [
                    {
                        title: "Two intersection points",
                        system: "y = x + 2 and y = x² − x − 2",
                        step1: "Substitute: x + 2 = x² − x − 2",
                        step2: "0 = x² − 2x − 4... wait: x² − x − 2 − x − 2 = 0 → x² − 2x − 4 = 0",
                        step3: "Δ = 4 + 16 = 20 > 0 → two solutions",
                        step4: "x = (2 ± √20)/2 = 1 ± √5",
                        step5: "y = x + 2: y₁ = 3 + √5, y₂ = 3 − √5",
                        result: "Solutions: (1+√5, 3+√5) and (1−√5, 3−√5)"
                    },
                    {
                        title: "Tangent line",
                        system: "y = 2x + k and y = x²; find k for tangency",
                        step1: "Substitute: 2x + k = x² → x² − 2x − k = 0",
                        step2: "For tangency: Δ = 0 → 4 + 4k = 0 → k = −1",
                        step3: "Tangent line: y = 2x − 1; touches y = x² at x = 1, y = 1",
                        result: "Tangent point: (1, 1)"
                    },
                    {
                        title: "No intersection",
                        system: "y = x − 5 and y = x² + 1",
                        step1: "x − 5 = x² + 1 → x² − x + 6 = 0",
                        step2: "Δ = 1 − 24 = −23 < 0",
                        result: "No real intersections — line lies entirely below the parabola"
                    },
                    {
                        title: "Circle and line",
                        system: "x² + y² = 25 and y = 3 − x",
                        step1: "Substitute: x² + (3−x)² = 25 → x² + 9 − 6x + x² = 25 → 2x² − 6x − 16 = 0",
                        step2: "x² − 3x − 8 = 0: Δ = 9 + 32 = 41 > 0",
                        step3: "x = (3 ± √41)/2; y = 3 − x",
                        result: "Two intersection points on the circle"
                    }
                ],
                tangencyConditionApplications: [
                    "Finding equations of tangent lines to a curve at a given point",
                    "Determining the range of a parameter for which a line intersects a curve",
                    "Optimisation: the tangent condition often represents a boundary case",
                    "Optics: tangent lines model rays grazing a curved mirror"
                ],
                applications: [
                    "Projectile interception: finding where a thrown ball (parabola) crosses a wall (line)",
                    "Optics: where a light ray meets a curved lens (modelled as a conic)",
                    "Engineering: cable tension problems where a cable meets a curved surface",
                    "Architecture: finding where a roof line meets a curved arch profile",
                    "Economics: finding equilibrium between a linear supply curve and a quadratic demand curve"
                ]
            }
        };
    }

    initializeMathematicsPracticals() {
        this.mathematicsPracticals = {

            // ========================================
            // PRACTICAL 1: GRAPHICAL SYSTEMS INVESTIGATION
            // ========================================

            graphical_systems_investigation: {
                name: "Graphical Investigation of Linear Systems: Lines, Intersections, and Consistency",
                relatedTopics: ['linear_system_2var', 'linear_system_3var'],
                category: 'algebra',
                historicalBackground: {
                    context: "René Descartes (1596–1650) unified algebra and geometry in his 1637 work La Géométrie, introducing the coordinate system that bears his name",
                    significance: "By placing equations on a coordinate plane, Descartes made it possible to 'see' algebraic solutions as geometric intersections — a profound unification of two previously separate branches of mathematics",
                    impact: "The graphical method for systems of equations is a direct consequence of Cartesian geometry and remains the most intuitive first approach to understanding what a solution 'means'",
                    modernUse: "Graphical system solving underlies every computer algebra system, graphing calculator, and data visualisation tool used in mathematics and science today"
                },
                practicalMathematics: {
                    title: "Discovering Solution Types Through Graphical Exploration",
                    hypothesis: "The number and nature of solutions to a system of two linear equations is revealed entirely by the geometric relationship of their corresponding lines on the Cartesian plane",
                    purpose: "Investigate all three solution types of a 2-variable linear system through graphical drawing, measurement, and algebraic verification; connect geometric line relationships to algebraic solution outcomes",
                    materials: [
                        "Large coordinate grid paper (at least −10 to 10 on each axis, with 0.5-unit markings)",
                        "Ruler and sharp pencil",
                        "Coloured pens (different colour for each line)",
                        "Graphing calculator or Desmos (for verification)",
                        "Investigation recording sheet"
                    ],
                    procedure: [
                        "PART A: One Solution — Intersecting Lines",
                        "1. Plot Line 1: 2x + y = 6 (rearrange: y = −2x + 6; gradient = −2, y-intercept = 6)",
                        "2. Plot Line 2: x − y = 0 (rearrange: y = x; gradient = 1, y-intercept = 0)",
                        "3. Mark the intersection point precisely; record its coordinates",
                        "4. Verify algebraically: substitute coordinates into both original equations",
                        "5. Record: gradients are different (−2 ≠ 1) → lines must intersect → one solution",
                        "",
                        "PART B: No Solution — Parallel Lines",
                        "6. Plot Line 3: 3x − y = 4 (y = 3x − 4; gradient = 3, y-intercept = −4)",
                        "7. Plot Line 4: 3x − y = 9 (y = 3x − 9; gradient = 3, y-intercept = −9)",
                        "8. Observe: lines are parallel — confirm they never intersect on your grid",
                        "9. Attempt algebraically: subtract equations → 0 = 5 (contradiction)",
                        "10. Record: same gradient, different y-intercept → parallel → no solution",
                        "",
                        "PART C: Infinitely Many Solutions — Coincident Lines",
                        "11. Plot Line 5: x + 2y = 4",
                        "12. Plot Line 6: 2x + 4y = 8",
                        "13. Observe: both lines are identical (second is exactly double the first)",
                        "14. Attempt algebraically: multiply Line 5 by 2 → identical to Line 6 → 0 = 0",
                        "15. Record: every point on the line is a solution → infinitely many solutions",
                        "",
                        "PART D: Gradient Analysis",
                        "16. For each system, record the gradient of each line in the data table",
                        "17. Identify the pattern: different gradients → intersect; equal gradients, different intercepts → parallel; equal gradients, equal intercepts → coincident",
                        "18. Devise a test using the coefficients only (without graphing) to predict solution type",
                        "",
                        "PART E: Design Your Own",
                        "19. Design one system of each type using only integer coefficients",
                        "20. Exchange with a partner: predict the solution type from coefficients before graphing",
                        "21. Graph to verify prediction; record accuracy"
                    ],
                    dataTable: [
                        ["System", "Gradient 1", "Gradient 2", "y-intercept 1", "y-intercept 2", "Solution Type", "Algebraic Verification"],
                        ["2x+y=6, x−y=0", "−2", "1", "6", "0", "One solution: (2, 2)", "2(2)+2=6 ✓; 2−2=0 ✓"],
                        ["3x−y=4, 3x−y=9", "3", "3", "−4", "−9", "No solution", "0=5 contradiction ✗"],
                        ["x+2y=4, 2x+4y=8", "−1/2", "−1/2", "2", "2", "Infinitely many", "0=0 tautology"]
                    ],
                    observations: {
                        gradientRule: "Equal gradients, different intercepts → parallel lines → no solution",
                        coincidentRule: "Equal gradients, equal intercepts → coincident lines → infinite solutions",
                        intersectionRule: "Different gradients → lines must intersect → exactly one solution",
                        algebraicEcho: "The algebraic outcome (unique answer, contradiction, tautology) mirrors the geometric outcome perfectly"
                    },
                    conclusions: [
                        "The solution type of a 2-variable linear system is completely determined by the geometric relationship of its two lines",
                        "Different gradients guarantee exactly one solution; equal gradients determine whether the system is inconsistent or dependent",
                        "Algebraic contradictions and tautologies are the symbolic signatures of parallel and coincident lines respectively",
                        "Graphical methods provide geometric intuition; algebraic methods provide exactness — both are essential",
                        "The coefficient ratio test (a₁/a₂ vs b₁/b₂ vs c₁/c₂) provides a rapid classifier without graphing"
                    ],
                    extensions: [
                        "Investigate three-line systems: what is the probability that three randomly chosen lines share a common intersection?",
                        "Model a real situation (e.g., two taxi fare structures) as a linear system and find the break-even point graphically",
                        "Extend to 3D: use GeoGebra 3D to visualise three-plane systems and their solution types"
                    ],
                    realWorldConnections: [
                        "Economics: supply and demand equilibrium — the intersection of supply and demand lines",
                        "Transport: finding where two bus routes intersect at a common stop",
                        "Engineering: finding the balance point of two competing forces",
                        "Computer science: detecting whether two line segments on a screen intersect (collision detection)"
                    ],
                    pedagogicalNotes: {
                        keyInsight: "The geometric and algebraic approaches are not just equivalent — they are the same truth expressed in two different languages",
                        commonError: "Students often assume all systems have exactly one solution; this practical directly confronts that assumption",
                        sequencing: "Begin with graphical exploration before algebraic methods; the visual grounding makes the algebraic signs (contradiction, tautology) meaningful rather than mysterious"
                    }
                }
            },

            // ========================================
            // PRACTICAL 2: GAUSSIAN ELIMINATION ROW OPERATIONS LAB
            // ========================================

            gaussian_elimination_lab: {
                name: "Gaussian Elimination Laboratory: Systematic Row Operations and 3D Geometry",
                relatedTopics: ['linear_system_3var'],
                category: 'algebra',
                historicalBackground: {
                    mathematician: "Carl Friedrich Gauss (1777–1855) — the 'Prince of Mathematics'",
                    work: "Gauss systematised the method of elimination in his work on least squares (Theoria Motus, 1809), though the core idea dates to ancient Chinese mathematics (Nine Chapters on the Mathematical Art, ~200 BCE)",
                    chineseVersion: "The Chinese text described a matrix-like arrangement of coefficients solved by column operations — arguably the first matrix method in history",
                    significance: "Gaussian elimination is the foundation of numerical linear algebra; every modern computer uses variants of this algorithm (LU decomposition, QR factorization) to solve systems arising in engineering, science, and machine learning",
                    computerisation: "LAPACK (Linear Algebra PACKage), used in MATLAB and NumPy, implements highly optimised Gaussian elimination for millions of variables"
                },
                practicalMathematics: {
                    title: "Solving 3-Variable Systems by Systematic Row Operations",
                    hypothesis: "Applying valid row operations to the augmented matrix of a linear system produces an equivalent system (same solution set) in progressively simpler form, ultimately enabling back substitution to find the unique solution",
                    purpose: "Develop systematic proficiency in Gaussian elimination using augmented matrices; connect the algebraic row operations to their geometric meaning in 3D space; identify and interpret special cases (no solution, infinitely many solutions)",
                    materials: [
                        "Augmented matrix worksheets (pre-printed with large cells for clear working)",
                        "Coloured pens (one colour per row operation step)",
                        "Row operation notation reference card",
                        "GeoGebra 3D (for visualising plane intersections)",
                        "Calculator for fraction arithmetic"
                    ],
                    rowOperationReference: {
                        R_swap: "Rᵢ ↔ Rⱼ: Swap rows i and j (used to avoid zero pivots)",
                        R_scale: "kRᵢ → Rᵢ: Multiply all entries of row i by non-zero constant k",
                        R_replace: "Rᵢ + kRⱼ → Rᵢ: Replace row i with (row i) + k×(row j)"
                    },
                    procedure: [
                        "WARM-UP: 2×2 System in Matrix Form",
                        "1. Write 2x + y = 5 and 3x − 2y = 4 as augmented matrix [[2,1|5],[3,−2|4]]",
                        "2. Apply R2 − (3/2)R1 → R2 to eliminate x from row 2",
                        "3. Scale R2 to make leading coefficient 1",
                        "4. Back substitute to find y, then x",
                        "5. Verify solution in both original equations",
                        "",
                        "INVESTIGATION 1: Standard 3×3 System with Unique Solution",
                        "System: x+y+z=6; 2x−y+z=3; x+2y−z=2",
                        "6. Write the augmented matrix [[1,1,1|6],[2,−1,1|3],[1,2,−1|2]]",
                        "7. Step 1 — Eliminate x from rows 2 and 3:",
                        "   R2 − 2R1 → R2: [0,−3,−1|−9]",
                        "   R3 − R1 → R3: [0,1,−2|−4]",
                        "8. Step 2 — Eliminate y from row 3 (use row 2 as pivot row):",
                        "   R3 + (1/3)R2 → R3: [0,0,−7/3|−7]",
                        "9. Step 3 — Scale R3: multiply by −3/7: [0,0,1|3]",
                        "10. Row echelon form achieved. Record the triangular matrix.",
                        "11. Back substitution:",
                        "    z = 3 (from R3)",
                        "    −3y − 1(3) = −9 → −3y = −6 → y = 2 (from R2)",
                        "    x + 2 + 3 = 6 → x = 1 (from R1)",
                        "12. Solution: (1, 2, 3). Verify in all three original equations.",
                        "",
                        "INVESTIGATION 2: No Solution Case",
                        "System: x+y+z=3; 2x+2y+2z=7; x−y+z=1",
                        "13. Write augmented matrix; apply elimination",
                        "14. After R2−2R1: [0,0,0|1] — a row of zeros equals 1",
                        "15. Interpret: 0x + 0y + 0z = 1 is a contradiction → no solution",
                        "16. Record: the three planes described by these equations do not share a common point",
                        "",
                        "INVESTIGATION 3: Infinitely Many Solutions",
                        "System: x+y+z=3; 2x+2y+2z=6; x−y+z=1",
                        "17. Apply elimination; after R2−2R1: [0,0,0|0] — a zero row",
                        "18. This means one equation is redundant (the system only contains 2 independent equations)",
                        "19. Express solution in parametric form: let z = t (free parameter)",
                        "    From R3: x − y + t = 1 → x − y = 1 − t",
                        "    From R1: x + y = 3 − t",
                        "    Solving: x = 2 − t, y = 1, z = t",
                        "20. Solution set: {(2−t, 1, t) : t ∈ ℝ} — a line in 3D space",
                        "",
                        "REFLECTION QUESTIONS",
                        "21. What is the geometric meaning of a zero row in the echelon form?",
                        "22. How does the number of non-zero rows relate to the number of free variables?",
                        "23. Why does Gaussian elimination produce an equivalent system (same solution set)?"
                    ],
                    dataTable: [
                        ["System", "Echelon Form Outcome", "Solution Type", "Number of Solutions", "Geometric Interpretation"],
                        ["x+y+z=6, 2x−y+z=3, x+2y−z=2", "3 non-zero pivot rows", "Unique solution", "1", "Three planes meet at one point: (1,2,3)"],
                        ["Contradiction in row", "Row [0,0,0|k], k≠0", "No solution", "0", "At least two planes are parallel"],
                        ["Zero row appears", "Row [0,0,0|0]", "Infinitely many", "∞ (parametric line)", "Three planes share a common line"]
                    ],
                    conclusions: [
                        "Gaussian elimination systematically reduces any linear system to row echelon form using only validity-preserving row operations",
                        "The outcome of elimination — unique pivot in each row, contradiction row, or zero row — directly determines the solution type",
                        "Back substitution recovers each variable exactly when the system has a unique solution",
                        "Free parameters arise when the system is under-determined; each free variable corresponds to a dimension of the solution set",
                        "The augmented matrix is a compact, error-resistant notation that makes the algorithm mechanical and reliable"
                    ],
                    extensions: [
                        "Reduce the same system to Reduced Row Echelon Form (RREF) and compare efficiency with back substitution",
                        "Solve a 4×4 system using Gaussian elimination to appreciate the scalability of the method",
                        "Implement Gaussian elimination in Python or a spreadsheet for a system of 10 variables",
                        "Explore LU decomposition as a factored form of Gaussian elimination"
                    ],
                    realWorldConnections: [
                        "Electrical engineering: solving mesh current equations in large circuits (Kirchhoff's laws give large linear systems)",
                        "Structural engineering: nodal equilibrium in a truss structure gives a linear system for each joint force",
                        "Computer graphics: solving for lighting coefficients in radiosity algorithms",
                        "Machine learning: normal equations for linear regression involve solving a linear system",
                        "Economics: Leontief input-output model requires solving (I−A)x = d, a linear system"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 3: NON-LINEAR SYSTEM GRAPHICAL AND ALGEBRAIC INVESTIGATION
            // ========================================

            nonlinear_system_investigation: {
                name: "Non-Linear Systems Investigation: Circles, Parabolas, and Their Intersections",
                relatedTopics: ['nonlinear_system', 'linear_quadratic_system'],
                category: 'algebra',
                historicalBackground: {
                    context: "The study of conic sections dates to Apollonius of Perga (~262–190 BCE), whose eight-volume work Conics classified all plane curves arising from slicing a cone",
                    significance: "Non-linear systems of equations describe the intersection of curves — a problem central to ancient Greek astronomy (finding planetary conjunctions), Renaissance architecture (dome intersections), and modern engineering",
                    modernApplication: "GPS systems solve non-linear systems (intersecting spheres in 3D) to determine location; radar systems solve non-linear systems to track multiple targets simultaneously",
                    algebraicFoundation: "René Descartes' (1637) coordinate geometry made it possible to describe these intersections algebraically for the first time"
                },
                practicalMathematics: {
                    title: "Investigating Intersections of Circles, Lines, and Parabolas",
                    hypothesis: "The algebraic solution of a non-linear system (through substitution) and the graphical solution (through plotting curves) are equivalent; the discriminant of the resulting quadratic predicts the number of intersections without solving",
                    purpose: "Solve non-linear systems using substitution and verify graphically; use discriminant analysis to classify intersections; connect the number of solutions to geometric tangency and secancy conditions",
                    materials: [
                        "Large coordinate grid paper with fine 0.5-unit divisions",
                        "Compass (for drawing circles accurately)",
                        "Graphing calculator or Desmos (for verification and exploration)",
                        "Coloured pens (different colour for each curve)",
                        "Discriminant analysis worksheet"
                    ],
                    procedure: [
                        "INVESTIGATION 1: Line and Circle — Three Cases",
                        "Consider the circle x² + y² = 25 (radius 5, centred at origin)",
                        "",
                        "Case A: Line y = x + 1 (expected: 2 intersections)",
                        "1. Draw the circle using a compass (radius 5 from origin)",
                        "2. Plot the line y = x + 1 on the same axes",
                        "3. Mark the approximate intersection points",
                        "4. Solve algebraically: substitute y = x+1 into x²+y²=25",
                        "   x² + (x+1)² = 25 → 2x² + 2x + 1 = 25 → 2x² + 2x − 24 = 0 → x² + x − 12 = 0",
                        "5. Δ = 1 + 48 = 49 > 0 → two solutions",
                        "6. Factor: (x+4)(x−3) = 0 → x = −4, x = 3",
                        "7. y = −4+1 = −3 and y = 3+1 = 4",
                        "8. Solutions: (−4, −3) and (3, 4). Verify: 16+9=25 ✓; 9+16=25 ✓",
                        "",
                        "Case B: Line y = x + 5√2 (expected: 1 intersection — tangent)",
                        "9. Substitute: x² + (x + 5√2)² = 25 → 2x² + 10√2·x + 50 = 25 → 2x² + 10√2·x + 25 = 0",
                        "10. Δ = (10√2)² − 4(2)(25) = 200 − 200 = 0 → tangent",
                        "11. x = −10√2/4 = −5√2/2; y = x + 5√2 = 5√2/2",
                        "12. Tangent point: (−5√2/2, 5√2/2) ≈ (−3.54, 3.54)",
                        "13. Verify the line is tangent by checking it touches but does not cross the circle",
                        "",
                        "Case C: Line y = x + 10 (expected: no intersection)",
                        "14. Substitute: 2x² + 20x + 100 = 25 → 2x² + 20x + 75 = 0",
                        "15. Δ = 400 − 600 = −200 < 0 → no real solutions",
                        "16. Graph confirms: the line is entirely outside the circle",
                        "",
                        "INVESTIGATION 2: Line and Parabola",
                        "Consider y = x² − 4x + 3 and various lines y = mx + c",
                        "",
                        "17. For y = 2x − 4: substitute → x² − 4x + 3 = 2x − 4 → x² − 6x + 7 = 0",
                        "    Δ = 36 − 28 = 8 > 0 → two intersections",
                        "    x = (6 ± 2√2)/2 = 3 ± √2; record solution pairs",
                        "",
                        "18. For y = 2x − 5 + 1/4: find k such that line y = 2x + k is tangent",
                        "    x² − 4x + 3 = 2x + k → x² − 6x + (3−k) = 0",
                        "    Tangency: Δ = 36 − 4(3−k) = 0 → 24 + 4k = 0 → k = −6",
                        "    Tangent line: y = 2x − 6; tangent at x=3, y=0",
                        "",
                        "INVESTIGATION 3: Two Circles — Radical Axis Method",
                        "19. System: x² + y² = 25 and (x−3)² + y² = 16",
                        "20. Expand second: x²−6x+9+y²=16 → x²+y²−6x=7",
                        "21. Subtract first: −6x = 7 − 25 = −18 → x = 3",
                        "22. Substitute: 9 + y² = 25 → y = ±4",
                        "23. Solutions: (3, 4) and (3, −4)",
                        "24. Note: subtracting two circle equations always gives a linear equation (the radical axis)",
                        "",
                        "DISCRIMINANT ANALYSIS TABLE",
                        "25. For each system investigated, record the quadratic obtained after substitution and compute Δ",
                        "26. Verify that the sign of Δ always correctly predicts the number of geometric intersections"
                    ],
                    dataTable: [
                        ["System", "Quadratic After Substitution", "Δ = b²−4ac", "Sign of Δ", "# Solutions", "Geometric Interpretation"],
                        ["x²+y²=25, y=x+1", "x²+x−12=0", "49", ">0", "2", "Secant line through circle"],
                        ["x²+y²=25, y=x+5√2", "2x²+10√2·x+25=0", "0", "=0", "1", "Tangent line to circle"],
                        ["x²+y²=25, y=x+10", "2x²+20x+75=0", "−200", "<0", "0", "Line misses circle entirely"],
                        ["y=x²−4x+3, y=2x−4", "x²−6x+7=0", "8", ">0", "2", "Secant line through parabola"],
                        ["x²+y²=25, (x−3)²+y²=16", "Linear: x=3", "N/A", "N/A", "2", "Two circles intersect"]
                    ],
                    conclusions: [
                        "Non-linear systems can have 0, 1, 2, or more solutions depending on the geometric relationship of the curves",
                        "Substitution from the linear (or simpler) equation into the non-linear equation always reduces the system to a single-variable polynomial",
                        "The discriminant of the resulting quadratic provides a complete classification of the intersection type without requiring full solution",
                        "For two circles, subtracting equations eliminates quadratic terms, producing the linear radical axis equation — a powerful special technique",
                        "Graphical and algebraic methods are complementary: graphical methods provide intuition; algebraic methods provide exactness"
                    ],
                    extensions: [
                        "Investigate the system of a parabola and a circle; how many intersections are possible? (Up to 4 by Bézout's theorem)",
                        "Find the equation of the common chord of two intersecting circles",
                        "Use Desmos to explore how changing the gradient of a line through a fixed point changes the number of intersections with a circle",
                        "Research how GPS satellites solve a 3D non-linear system (intersecting spheres) to determine location"
                    ],
                    realWorldConnections: [
                        "GPS location: receiver position is the intersection of spheres of known radii centred at satellites",
                        "Radar tracking: multiple radar stations solve non-linear systems to determine target position",
                        "Optics: finding where a light ray meets a curved lens surface (ray-sphere intersection)",
                        "Computer graphics: ray tracing requires solving systems of a ray equation and sphere/surface equations millions of times per frame",
                        "Architecture: dome intersections and structural arcs require solving non-linear geometric systems"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 4: LINEAR-QUADRATIC SYSTEMS INVESTIGATION
            // ========================================

            linear_quadratic_investigation: {
                name: "Linear–Quadratic Systems: Tangent Lines, Secants, and the Discriminant",
                relatedTopics: ['linear_quadratic_system', 'nonlinear_system'],
                category: 'algebra',
                historicalBackground: {
                    context: "The problem of finding where a line intersects a parabola was solved by ancient Greek mathematicians, including Archimedes, who used it to calculate areas under curves — a precursor to integral calculus",
                    significance: "The tangency condition (where a line just touches a curve at one point) is central to differential calculus: Isaac Newton and Gottfried Wilhelm Leibniz defined the derivative as the gradient of the tangent line at a point",
                    algebraicLink: "Setting the discriminant to zero to find tangent conditions is an algebraic formulation of the fundamental calculus concept of a tangent line",
                    modernUse: "Linear-quadratic systems appear in projectile problems, parabolic reflector design, optimisation, and wherever a linear constraint intersects a quadratic objective function"
                },
                practicalMathematics: {
                    title: "Exploring How Lines Intersect Parabolas: Secants, Tangents, and Misses",
                    hypothesis: "A family of parallel lines y = 2x + k will intersect the parabola y = x² at 0, 1, or 2 points depending on the value of k; the critical value of k for tangency can be found by setting the discriminant to zero",
                    purpose: "Systematically investigate how changing the y-intercept of a line affects its intersection with a fixed parabola; derive the tangency condition algebraically and verify geometrically; connect the discriminant criterion to the geometric concept of tangency",
                    materials: [
                        "Coordinate grid paper (−5 to 5 on x-axis, −2 to 12 on y-axis recommended)",
                        "Graphing calculator or Desmos with slider for parameter k",
                        "Coloured pens (one for parabola, one colour per line tested)",
                        "Discriminant calculation worksheet",
                        "Ruler for drawing straight lines accurately"
                    ],
                    procedure: [
                        "PART A: Setting Up the Investigation",
                        "1. Draw the parabola y = x² carefully on large grid paper",
                        "   (Plot points: (−3,9), (−2,4), (−1,1), (0,0), (1,1), (2,4), (3,9))",
                        "2. This parabola will remain fixed throughout the investigation",
                        "",
                        "PART B: Testing a Family of Lines y = 2x + k",
                        "3. For each value of k below, draw the line and count intersections with y = x²:",
                        "   k = 4: draw y = 2x + 4",
                        "   k = 1: draw y = 2x + 1",
                        "   k = −1: draw y = 2x − 1",
                        "   k = −5: draw y = 2x − 5",
                        "4. Record the number of intersections for each k value in the data table",
                        "",
                        "PART C: Algebraic Analysis",
                        "5. Substitute y = 2x + k into y = x² to get the intersection equation:",
                        "   x² = 2x + k → x² − 2x − k = 0",
                        "6. Compute the discriminant: Δ = (−2)² − 4(1)(−k) = 4 + 4k",
                        "7. Find the critical value: Δ = 0 → 4 + 4k = 0 → k = −1",
                        "8. Classify each k value: k > −1 → Δ > 0 → 2 intersections; k = −1 → Δ = 0 → tangent; k < −1 → Δ < 0 → no intersection",
                        "9. For k = −1 (tangent): x² − 2x + 1 = 0 → (x−1)² = 0 → x = 1 (double root); y = 2(1)−1 = 1",
                        "   Tangent point: (1, 1). Verify: 1² = 1 ✓",
                        "",
                        "PART D: Verifying the Tangent Line Geometrically",
                        "10. Draw the tangent line y = 2x − 1 on your parabola diagram",
                        "11. Confirm it touches y = x² at exactly (1, 1) without crossing",
                        "12. Measure the gradient of the parabola at x = 1 using the tangent line: gradient = 2",
                        "13. Connection to calculus: d/dx(x²) = 2x; at x=1, gradient = 2 ✓ — the discriminant condition gives the calculus derivative!",
                        "",
                        "PART E: Generalising — Finding Tangent Lines from an External Point",
                        "14. Find all lines through the point (0, −2) that are tangent to y = x²",
                        "15. Line through (0, −2): y = mx − 2",
                        "16. Substitute: x² = mx − 2 → x² − mx + 2 = 0",
                        "17. Tangency: Δ = m² − 8 = 0 → m = ±2√2",
                        "18. Two tangent lines: y = 2√2·x − 2 and y = −2√2·x − 2",
                        "19. Find tangent points and verify on your diagram",
                        "",
                        "PART F: Reverse Problem — Given Intersection Points, Find the Line",
                        "20. The parabola y = x² is intersected at x = −1 and x = 3. Find the equation of the secant line.",
                        "21. Points on parabola: (−1, 1) and (3, 9)",
                        "22. Gradient: (9−1)/(3−(−1)) = 8/4 = 2",
                        "23. Line: y − 1 = 2(x + 1) → y = 2x + 3",
                        "24. Verify by solving the system: x² = 2x + 3 → x²−2x−3 = 0 → (x−3)(x+1)=0 ✓"
                    ],
                    dataTable: [
                        ["k value", "Line Equation", "Intersection Equation", "Δ = 4+4k", "Sign of Δ", "# Intersections", "Intersection Points"],
                        ["4", "y=2x+4", "x²−2x−4=0", "20", ">0", "2", "(1±√5, 2±2√5)"],
                        ["1", "y=2x+1", "x²−2x−1=0", "8", ">0", "2", "(1±√2, 3±2√2)"],
                        ["−1", "y=2x−1", "x²−2x+1=0", "0", "=0", "1 (tangent)", "(1, 1)"],
                        ["−5", "y=2x−5", "x²−2x+5=0", "−16", "<0", "0", "None (line below parabola)"]
                    ],
                    observations: {
                        discriminantLink: "The sign of Δ = 4 + 4k perfectly predicts the number of intersections for all k",
                        tangencyCondition: "k = −1 is the unique value producing tangency; the discriminant equals zero at this point",
                        doubleRoot: "At tangency, the quadratic has a repeated root — x = 1 appears twice — corresponding to the line touching but not crossing",
                        gradientLink: "The tangent line gradient (2) equals the calculus derivative d(x²)/dx evaluated at x = 1 — connecting discriminant algebra to differential calculus"
                    },
                    conclusions: [
                        "A linear-quadratic system reduces to a quadratic equation whose discriminant classifies the geometric relationship between line and curve",
                        "Δ > 0: secant (two crossings); Δ = 0: tangent (one touching); Δ < 0: no intersection — a complete and elegant classification",
                        "The tangency condition (Δ = 0) is the algebraic equivalent of the derivative condition in calculus",
                        "The reverse problem (given intersection points, find the line) connects the Factor Theorem to coordinate geometry",
                        "Families of parallel lines (fixed gradient, varying intercept) provide a clean setting for exploring how the discriminant changes continuously"
                    ],
                    extensions: [
                        "Investigate a family of lines through a fixed point on the parabola: how many are tangent?",
                        "Find conditions for a line to be tangent to an ellipse x²/a² + y²/b² = 1",
                        "Prove that the gradient of the tangent to y = x² at (a, a²) is 2a using only the discriminant method (no calculus)",
                        "Explore parametric tangent lines to the general parabola y = Ax² + Bx + C"
                    ],
                    realWorldConnections: [
                        "Projectile problems: a thrown ball (parabolic path) crossing a wall or net (line) — how many times does it cross?",
                        "Parabolic satellite dishes: a signal ray (line) must pass through the focal point — the tangent condition ensures optimal reception",
                        "Architecture: designing arched windows where a straight beam just touches the arch at one point",
                        "Finance: finding where a linear budget constraint is tangent to a quadratic indifference curve (consumer optimum)"
                    ]
                }
            },

            // ========================================
            // PRACTICAL 5: POLYNOMIAL SYSTEMS AND BÉZOUT'S THEOREM INVESTIGATION
            // ========================================

            bezout_polynomial_investigation: {
                name: "Bézout's Theorem Investigation: Counting Intersections of Algebraic Curves",
                relatedTopics: ['polynomial_system', 'nonlinear_system'],
                category: 'algebra',
                historicalBackground: {
                    mathematician: "Étienne Bézout (1730–1783), French mathematician",
                    work: "Théorie générale des équations algébriques (1779) — General Theory of Algebraic Equations",
                    theorem: "A system of n polynomial equations of degrees d₁, d₂, ..., dₙ has at most d₁×d₂×...×dₙ solutions in complex projective space",
                    significance: "Bézout's theorem provides the fundamental upper bound on the number of solutions of any polynomial system — from linear equations (product = 1) to highly complex systems",
                    modernApplication: "Used in computer vision (counting pose solutions), robotics (counting kinematic configurations), and algebraic geometry (counting intersection multiplicities)"
                },
                practicalMathematics: {
                    title: "Verifying Bézout's Theorem Through Systematic Curve Intersection Experiments",
                    hypothesis: "For any two algebraic curves of degrees d₁ and d₂, the number of intersection points (counting complex intersections and multiplicities) never exceeds d₁ × d₂",
                    purpose: "Verify Bézout's theorem experimentally by counting real intersections of curve pairs of known degrees; understand when the Bézout bound is achieved (generic case) and when it is not (special cases)",
                    procedure: [
                        "EXPERIMENT 1: Two Lines (d₁=1, d₂=1; Bézout bound = 1)",
                        "1. Graph y = 2x + 1 and y = −x + 4 on the same axes",
                        "2. Count intersections: 1 (at x=1, y=3)",
                        "3. Note: Two lines intersect exactly 0 or 1 times over ℝ (0 if parallel)",
                        "4. Over ℂ with projective space, parallel lines meet at a 'point at infinity' — Bézout's bound of 1 is always achieved",
                        "",
                        "EXPERIMENT 2: Line and Conic (d₁=1, d₂=2; Bézout bound = 2)",
                        "5. Line y = x + 1 and circle x² + y² = 25",
                        "6. Substitute: x²+(x+1)²=25 → 2x²+2x−24=0 → (x+4)(x−3)=0",
                        "7. Two real intersections: (3,4) and (−4,−3) — Bézout bound achieved",
                        "8. Now test tangent line y = x + 5√2: Δ = 0 → 1 real intersection (double root — multiplicity 2) — Bézout bound still achieved if multiplicity counted",
                        "9. Test y = x + 10: Δ < 0 → 0 real intersections, but 2 complex intersections — Bézout bound achieved in ℂ",
                        "",
                        "EXPERIMENT 3: Two Conics (d₁=2, d₂=2; Bézout bound = 4)",
                        "10. Parabola y = x² and circle x² + y² = 2",
                        "11. Substitute: x² + x⁴ = 2 → x⁴ + x² − 2 = 0 → (x²+2)(x²−1) = 0",
                        "12. Real solutions: x² = 1 → x = ±1; y = 1",
                        "13. Two real intersections: (1,1) and (−1,1)",
                        "14. x² = −2 gives complex solutions x = ±i√2 — the other 2 Bézout solutions exist in ℂ",
                        "15. Total in ℂ: 4 = Bézout bound ✓",
                        "",
                        "EXPERIMENT 4: Symmetric Systems and Special Structure",
                        "16. Solve x + y = 5 and xy = 6 (degrees 1 and 2; bound = 2)",
                        "17. From first: y = 5−x; substitute: x(5−x) = 6 → x²−5x+6 = 0 → (x−2)(x−3)=0",
                        "18. Solutions: (2,3) and (3,2) — 2 real solutions = Bézout bound ✓",
                        "",
                        "EXPERIMENT 5: Where Bézout Bound is Not Achieved Over ℝ",
                        "19. Two circles x²+y²=1 and x²+y²=4 (same centre, different radii; degrees 2 and 2; bound = 4)",
                        "20. Subtract: 0 = 3 → no solution (concentric, non-intersecting circles)",
                        "21. Zero real intersections — Bézout bound not achieved over ℝ, but is achieved over ℂ projective space",
                        "22. Record: real intersection count can be 0, 1, 2, 3, or 4 for two conics — all are ≤ Bézout bound"
                    ],
                    dataTable: [
                        ["Curve 1 (degree d₁)", "Curve 2 (degree d₂)", "Bézout Bound (d₁×d₂)", "Real Intersections", "Complex Intersections", "Bound Achieved over ℝ?"],
                        ["Line (1)", "Line (1)", "1", "0 or 1", "Always 1 in ℙ²(ℂ)", "No (parallel lines)"],
                        ["Line (1)", "Circle (2)", "2", "0, 1, or 2", "Always 2 in ℙ²(ℂ)", "Only when Δ≥0"],
                        ["Parabola (2)", "Circle (2)", "4", "0, 1, 2, 3, or 4", "Always 4 in ℙ²(ℂ)", "Depends on geometry"],
                        ["Line (1)", "Cubic (3)", "3", "1, 2, or 3", "Always 3 in ℙ²(ℂ)", "At least 1 real root always"]
                    ],
                    conclusions: [
                        "Bézout's theorem provides a tight upper bound on the number of solutions of a polynomial system",
                        "The bound is always achieved when counting complex solutions with multiplicity in projective space",
                        "Over the real numbers, fewer solutions may be observed — some Bézout solutions are complex or at infinity",
                        "Tangent intersections correspond to solutions of multiplicity > 1; they still count toward the Bézout bound",
                        "Special structure (e.g., concentric circles, parallel lines) can cause the bound to not be achieved over ℝ"
                    ],
                    extensions: [
                        "Research Bézout's theorem in projective space and the concept of 'points at infinity' that make parallel lines intersect",
                        "Investigate the 27 lines on a cubic surface — a famous application of Bézout-type counting in 3D",
                        "Use a computer algebra system (SageMath, Mathematica) to find all complex solutions of a degree-3 and degree-3 system",
                        "Research Gröbner bases as a systematic method for solving polynomial systems"
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
            linear_system_2var: {
                'Solution Interpretation': [
                    'Assuming all systems have exactly one solution — failing to check for parallel or coincident lines',
                    'Treating a contradiction (0 = 5) as an error in working rather than as the correct conclusion (no solution)',
                    'Treating a tautology (0 = 0) as an error rather than recognizing infinitely many solutions',
                    'Writing the solution as separate values (x = 2, y = 3) rather than as an ordered pair (2, 3)'
                ],
                'Substitution Errors': [
                    'Substituting an expression for y back into the same equation it came from (instead of the other equation)',
                    'Making sign errors when rearranging to isolate a variable (e.g., 2x + y = 5 → y = 5 + 2x instead of y = 5 − 2x)',
                    'Forgetting to substitute back to find the second variable after finding the first'
                ],
                'Elimination Errors': [
                    'Adding equations when both coefficients are positive (should subtract) or vice versa',
                    'Multiplying only one equation when both need to be scaled for elimination',
                    'Forgetting to multiply the constant term when scaling an equation',
                    'Choosing to eliminate a variable that requires more complex scaling than the alternative'
                ],
                'Verification': [
                    'Only checking the solution in one equation rather than both',
                    'Skipping verification entirely and assuming the algebraic process is error-free'
                ]
            },

            linear_system_3var: {
                'Row Operation Errors': [
                    'Swapping two rows but forgetting to swap all entries, including the augmented column',
                    'Adding a multiple of a row to itself rather than to a different row',
                    'Performing row operations mentally without writing intermediate steps, leading to accumulated errors',
                    'Using the wrong row as the pivot row — always use the current pivot row, not a row already processed'
                ],
                'Back Substitution': [
                    'Substituting z-value into the original equations rather than the row echelon form equations',
                    'Making arithmetic errors when substituting fractions; not simplifying before substituting',
                    'Back-substituting in the wrong order (top to bottom instead of bottom to top)'
                ],
                'Special Cases': [
                    'Interpreting a zero row as an error rather than as a sign of infinitely many solutions',
                    'Not recognizing that a row of the form [0,0,0|k] with k ≠ 0 means no solution',
                    'Failing to express the solution parametrically when a free variable exists'
                ],
                'Setup Errors': [
                    'Writing the augmented matrix incorrectly — misaligning coefficients of different variables',
                    'Omitting a variable (writing 0 coefficient) when a term is missing from an equation'
                ]
            },

            nonlinear_system: {
                'Substitution Strategy': [
                    'Substituting from the non-linear equation into the linear equation (instead of the reverse) — creates unnecessary complexity',
                    'Failing to substitute for y completely, leaving mixed expressions',
                    'Not expanding brackets after substitution before solving'
                ],
                'Multiple Solutions': [
                    'Stopping after finding one solution when the system may have two or more',
                    'Only testing positive values of x when negative values may also be solutions',
                    'Assuming the system has solutions when Δ < 0 and incorrectly trying to force real answers'
                ],
                'Verification': [
                    'Only checking x-values without computing and verifying corresponding y-values',
                    'Only substituting solutions into the linear equation and not the non-linear equation'
                ],
                'Circle Equations': [
                    'Forgetting that a circle equation gives two y-values for each valid x-value',
                    'Incorrectly expanding (x − h)² as x² − h² instead of x² − 2hx + h²'
                ]
            },

            polynomial_system: {
                'Degree and Solution Count': [
                    'Assuming all solutions are real — Bézout solutions may be complex',
                    'Expecting exactly d₁ × d₂ real solutions; the Bézout bound is an upper bound, not a guarantee',
                    'Not recognizing that a repeated solution counts as 2 (or more) toward the Bézout count'
                ],
                'Substitution Complexity': [
                    'Not simplifying the polynomial obtained after substitution before solving',
                    'Assuming every polynomial equation obtained can be solved by factoring; numerical methods may be needed',
                    'Forgetting to check all solutions of the substituted polynomial in both original equations (extraneous solutions can arise)'
                ],
                'Symmetric Systems': [
                    'Missing solution pairs due to symmetry (e.g., if (2,3) is a solution, (3,2) may also be)',
                    'Not using the identity (x+y)² = x² + 2xy + y² to reduce symmetric systems efficiently'
                ]
            },

            linear_quadratic_system: {
                'Setup Errors': [
                    'Substituting from the quadratic into the linear (should substitute linear into quadratic)',
                    'Not collecting all terms on one side after substitution, leading to an incorrect quadratic',
                    'Sign errors when rearranging: y = mx + c into quadratic ax² + bx + d → ax² + (b−m)x + (d−c) = 0 (signs of m and c must be reversed)'
                ],
                'Discriminant Misuse': [
                    'Computing Δ of the original quadratic equation rather than the quadratic obtained after substitution',
                    'Interpreting Δ = 0 as no solution rather than as a tangent (one repeated solution)',
                    'Not using the discriminant to check number of solutions before attempting full solution'
                ],
                'Finding Both Coordinates': [
                    'Finding only the x-coordinates and forgetting to compute corresponding y-coordinates',
                    'Substituting x-values into the quadratic equation (to find y) instead of the linear equation',
                    'Only reporting one solution when Δ > 0 guarantees two'
                ],
                'Verification': [
                    'Checking solution only in the linear equation, not in the quadratic',
                    'Not verifying that computed y-values satisfy the original quadratic equation'
                ]
            }
        };

        this.clarificationStrategies = {
            graph_first: {
                method: 'Always sketch both curves before solving algebraically — the graph previews solution type and number',
                effectiveness: 'Very high for identifying solution type and catching impossible answers'
            },
            discriminant_check: {
                method: 'Compute Δ of the resulting quadratic before fully solving — confirms number of solutions',
                effectiveness: 'High for linear-quadratic and non-linear systems'
            },
            systematic_verification: {
                method: 'Substitute all solution pairs into ALL original equations — verify every coordinate of every solution',
                effectiveness: 'Essential; catches substitution errors and extraneous solutions'
            },
            ordered_pair_format: {
                method: 'Always write solutions as ordered pairs (x, y) — never as separate x = ... and y = ...',
                effectiveness: 'Prevents incomplete solutions and reminds students that both coordinates form the solution'
            },
            row_operation_ledger: {
                method: 'Write every row operation explicitly in margin notation before applying it — never apply mentally',
                effectiveness: 'Very high for preventing Gaussian elimination arithmetic errors'
            },
            bézout_counting: {
                method: 'Before solving a non-linear system, compute the Bézout bound; use it as a maximum solution count check',
                effectiveness: 'High for polynomial systems — prevents expecting too many or too few solutions'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about solving equations with one variable? How might that extend to two variables?",
                "Can you give an example of a situation where two conditions must be satisfied at the same time?",
                "How does {topic} connect to what you already know about graphing straight lines?",
                "What do you predict will be the most challenging aspect of solving systems of {topic}?"
            ],
            duringLearning: [
                "Does this solution make sense geometrically? Can you describe what the solution means as an intersection point?",
                "How does this connect to {related_concept}?",
                "What tells you which solution method is most efficient for this particular system?",
                "Can you spot the pattern in how many solutions this type of system has?",
                "Could you verify this solution by substituting back into both original equations right now?"
            ],
            afterLearning: [
                "What are the main solution methods for {topic} and when is each most efficient?",
                "What is the key feature that distinguishes a consistent system from an inconsistent one?",
                "What mistakes are you most likely to make when solving {topic}?",
                "How would you explain the geometric meaning of a solution to {topic} to a classmate?",
                "What is the most important check you should always perform after finding a solution?"
            ],
            problemSolving: [
                "What is the question asking? How many unknowns are there? How many equations?",
                "Are all equations linear, or is at least one non-linear? What does that tell you about the number of possible solutions?",
                "Have you checked for a GCF or special structure that simplifies the system before applying a method?",
                "What are the signs and coefficients? Do they suggest elimination or substitution is more efficient?",
                "Have you verified your solution(s) in every original equation in the system?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            linear_system_2var: [
                {
                    scenario: "Café Pricing Problem",
                    context: "A café sells two types of coffee. On Monday, 3 small coffees and 2 large coffees cost £12.50. On Tuesday, 1 small and 4 large cost £13.50. The manager needs to find the price of each size.",
                    system: "3s + 2l = 12.50 and s + 4l = 13.50",
                    solution: "Multiply second by 3: 3s + 12l = 40.50; subtract first: 10l = 28 → l = 2.80; s = 13.50 − 4(2.80) = 2.30",
                    interpretation: "Small coffee = £2.30, Large coffee = £2.80",
                    extension: "If the profit margin on small is 40% and on large is 35%, write and solve a system for total daily profit given Monday's sales."
                },
                {
                    scenario: "Distance-Speed Problem",
                    context: "Two cyclists set off from opposite ends of a 120 km route at the same time. Cyclist A rides at v₁ km/h and Cyclist B at v₂ km/h. They meet after 3 hours. Cyclist A's speed is 10 km/h more than Cyclist B's.",
                    system: "v₁ + v₂ = 40 (meet after 3 hours: 3v₁ + 3v₂ = 120) and v₁ − v₂ = 10",
                    solution: "Add: 2v₁ = 50 → v₁ = 25 km/h; v₂ = 15 km/h",
                    interpretation: "Cyclist A rides at 25 km/h, Cyclist B at 15 km/h; they meet 75 km from Cyclist A's start",
                    extension: "If Cyclist A started 30 minutes later, how long until they meet? Set up and solve the new system."
                },
                {
                    scenario: "Alloy Composition",
                    context: "A jeweller needs 100 g of an alloy that is 60% gold. She has alloy A (80% gold) and alloy B (45% gold). How much of each should she use?",
                    system: "a + b = 100 and 0.8a + 0.45b = 60",
                    solution: "From first: b = 100 − a; substitute: 0.8a + 0.45(100−a) = 60 → 0.35a = 15 → a ≈ 42.86 g; b ≈ 57.14 g",
                    interpretation: "Approximately 42.9 g of alloy A and 57.1 g of alloy B",
                    extension: "If alloy A costs £80/g and alloy B costs £50/g, what is the total cost? How does a change in target purity affect the cost?"
                },
                {
                    scenario: "Break-Even Analysis",
                    context: "A small business has fixed costs of £500/week and variable costs of £12 per unit. Each unit sells for £20. The manager wants to find the break-even production level.",
                    system: "Revenue: R = 20x and Cost: C = 12x + 500; solve R = C",
                    solution: "20x = 12x + 500 → 8x = 500 → x = 62.5; round up to 63 units",
                    interpretation: "The business breaks even at 63 units per week; profit begins from unit 64",
                    extension: "If variable cost increases to £15 per unit, find the new break-even point and calculate the change in weekly profit at 100 units."
                }
            ],

            linear_system_3var: [
                {
                    scenario: "Nutritional Meal Planning",
                    context: "A nutritionist designs a meal using three foods: rice (x g), chicken (y g), and broccoli (z g). The meal must contain exactly 600 calories, 45 g protein, and 80 g carbohydrates. Nutritional data per 100 g: Rice — 130 cal, 2.7 g protein, 28 g carbs; Chicken — 165 cal, 31 g protein, 0 g carbs; Broccoli — 34 cal, 2.8 g protein, 7 g carbs.",
                    system: ["1.3x + 1.65y + 0.34z = 600", "0.027x + 0.31y + 0.028z = 45", "0.28x + 0y + 0.07z = 80"],
                    solution: "Solve using Gaussian elimination; approximate solution: x ≈ 200 g rice, y ≈ 120 g chicken, z ≈ 340 g broccoli",
                    interpretation: "The meal plan provides the target macronutrients with these specific food masses",
                    extension: "If the broccoli is replaced with spinach (23 cal, 2.9 g protein, 3.6 g carbs per 100 g), set up and solve the new system."
                },
                {
                    scenario: "Electrical Circuit Analysis",
                    context: "A circuit has three mesh currents I₁, I₂, I₃ (in amps). Applying Kirchhoff's Voltage Law to each mesh gives: 4I₁ − I₂ = 8; −I₁ + 3I₂ − I₃ = 0; −I₂ + 5I₃ = 6.",
                    system: ["4I₁ − I₂ = 8", "−I₁ + 3I₂ − I₃ = 0", "−I₂ + 5I₃ = 6"],
                    solution: "Gaussian elimination: I₁ = 2.5 A, I₂ = 2 A, I₃ = 1.6 A",
                    interpretation: "The mesh currents determine the voltage and power in every component of the circuit",
                    extension: "If the voltage source in mesh 1 increases to 12 V, how do the mesh currents change? Is the change proportional?"
                },
                {
                    scenario: "Polynomial Curve Fitting",
                    context: "Three data points are known: (1, 6), (2, 11), and (3, 18). A quadratic y = ax² + bx + c must pass through all three points exactly.",
                    system: ["a + b + c = 6", "4a + 2b + c = 11", "9a + 3b + c = 18"],
                    solution: "Subtract: 3a + b = 5 and 5a + b = 7; subtract again: 2a = 2 → a = 1, b = 2, c = 3",
                    result: "Quadratic: y = x² + 2x + 3",
                    verification: "(1): 1+2+3=6 ✓; (2): 4+4+3=11 ✓; (3): 9+6+3=18 ✓",
                    extension: "A fourth point (4, 27) is added. Does y = x² + 2x + 3 pass through it? If not, what degree polynomial is needed?"
                },
                {
                    scenario: "Investment Portfolio",
                    context: "An investor splits £10,000 between three funds: equity (6% return), bonds (3% return), and cash (1% return). Total annual return is £410. Equity investment is twice the bond investment.",
                    system: ["x + y + z = 10000", "0.06x + 0.03y + 0.01z = 410", "x = 2y"],
                    solution: "Substitute x = 2y: 3y + z = 10000 and 0.15y + 0.01z = 410; solve: y = 2000, x = 4000, z = 4000",
                    interpretation: "£4000 in equity, £2000 in bonds, £4000 in cash gives the required £410 return",
                    extension: "If the equity return increases to 8%, what allocation gives £500 annual return with x = 2y? Does a unique solution still exist?"
                }
            ],

            nonlinear_system: [
                {
                    scenario: "GPS Location Finding",
                    context: "A ship's GPS receives signals from two beacons. Beacon A is at the origin; the ship is 5 km from it: x² + y² = 25. Beacon B is at (3, 0); the ship is 4 km from it: (x−3)² + y² = 16. Find the ship's position.",
                    system: "x² + y² = 25 and (x−3)² + y² = 16",
                    solution: "Subtract: x² − (x−3)² = 9 → 6x − 9 = 9 → x = 3; y² = 25 − 9 = 16 → y = ±4",
                    interpretation: "Ship is at (3, 4) or (3, −4) — two possible positions; a third beacon would resolve the ambiguity",
                    extension: "A third beacon at (0, 4) is 3 km from the ship: x² + (y−4)² = 9. Add this equation and determine which of the two positions is correct."
                },
                {
                    scenario: "Parabolic Reflector Design",
                    context: "A parabolic reflector has equation y = x²/4. An incoming horizontal ray at height y = 4 travels along the line y = 4 until it hits the reflector. The reflected ray must pass through the focal point (0, 1).",
                    system: "y = x²/4 and y = 4",
                    solution: "x²/4 = 4 → x² = 16 → x = ±4; hit point at (4, 4) or (−4, 4)",
                    interpretation: "The ray hits the reflector at (±4, 4). By the reflective property of parabolas, it is then directed to the focal point (0, 1) — the basis of satellite dish and telescope design",
                    extension: "Show algebraically that the distance from any point on y = x²/4 to the focus (0,1) equals the distance from that point to the directrix y = −1."
                },
                {
                    scenario: "Chemical Equilibrium",
                    context: "In a reaction A + B ⇌ C, the equilibrium constant K = [C]/([A][B]) = 4. Initially [A] = 3 M, [B] = 2 M, [C] = 0. At equilibrium, [A] = 3−x, [B] = 2−x, [C] = x.",
                    system: "x/(3−x)(2−x) = 4; expanding: x = 4(6 − 5x + x²) = 24 − 20x + 4x²",
                    quadratic: "4x² − 21x + 24 = 0",
                    solution: "Δ = 441 − 384 = 57; x = (21 ± √57)/8 → x ≈ 1.69 or x ≈ 3.56",
                    validity: "x = 3.56 > 2 (impossible — more than initial [B] used); x ≈ 1.69 is valid",
                    interpretation: "[A] ≈ 1.31 M, [B] ≈ 0.31 M, [C] ≈ 1.69 M at equilibrium",
                    extension: "How does doubling the initial concentration of B change the equilibrium composition? Set up and solve the new non-linear system."
                },
                {
                    scenario: "Collision Detection in a Game",
                    context: "In a 2D game, a bullet travels along the line y = 2x − 1. An enemy spaceship occupies a circular region x² + y² ≤ 9 (radius 3, centred at origin). Does the bullet hit the spaceship?",
                    system: "y = 2x − 1 and x² + y² = 9",
                    solution: "x² + (2x−1)² = 9 → 5x² − 4x − 8 = 0; Δ = 16 + 160 = 176 > 0 → two intersections → bullet passes through spaceship",
                    intersections: "x = (4 ± 4√11)/10 ≈ 1.73 or −0.93; y ≈ 2.46 or −2.86",
                    interpretation: "The bullet enters the spaceship at approximately (−0.93, −2.86) and exits at (1.73, 2.46)",
                    extension: "The spaceship moves to centre (5, 0). Does the bullet y = 2x − 1 still hit it? Find the new system and solve."
                }
            ],

            polynomial_system: [
                {
                    scenario: "Dimensions from Volume and Surface Area",
                    context: "A rectangular box has length x, width y, and height 2. Its volume is 24 cm³ and the area of the base is xy. A second condition states x + y = 7.",
                    system: "xy = 12 (base area, since 2·xy = 24) and x + y = 7",
                    solution: "y = 7−x; x(7−x) = 12 → x² − 7x + 12 = 0 → (x−3)(x−4) = 0; x = 3 or x = 4",
                    result: "Dimensions: 3 × 4 × 2 cm or 4 × 3 × 2 cm (same box)",
                    extension: "If height is also unknown and volume = 48 with x + y + z = 12 and x·y = 12, solve the resulting system.",
                    bezout: "Degrees 1 and 2; Bézout bound = 2; exactly 2 solutions (counting (3,4) and (4,3)) ✓"
                },
                {
                    scenario: "Symmetric Resistor Network",
                    context: "Two resistors in a network satisfy: x² + y² = 50 (power relationship) and x + y = 10 (voltage relationship). Find the resistance values.",
                    solution: "(x+y)² = x² + 2xy + y² = 100 → 50 + 2xy = 100 → xy = 25; x and y satisfy t² − 10t + 25 = 0 → (t−5)² = 0 → x = y = 5",
                    interpretation: "Both resistors have resistance 5 Ω — the symmetric case",
                    extension: "If the power constraint changes to x² + y² = 52, how many distinct resistor pairs exist? Are they real?"
                },
                {
                    scenario: "Trajectory Meeting Point",
                    context: "Two rockets follow paths y = x² − 4 (Rocket A) and y = −x² + 2x (Rocket B). Find where their paths cross.",
                    system: "y = x² − 4 and y = −x² + 2x",
                    solution: "x² − 4 = −x² + 2x → 2x² − 2x − 4 = 0 → x² − x − 2 = 0 → (x−2)(x+1) = 0",
                    intersections: "(2, 0) and (−1, −3)",
                    interpretation: "Paths cross at positions (2, 0) and (−1, −3); whether the rockets collide depends on timing",
                    extension: "If the rockets travel at the same speed along their parabolic paths, do they arrive at (2, 0) at the same time? (Requires arc length calculation.)"
                },
                {
                    scenario: "Market Equilibrium with Non-Linear Demand",
                    context: "In a market, supply is modelled by p = q² + 2 (increasing, non-linear) and demand by p + q = 12 (linear, decreasing). Find the market equilibrium.",
                    system: "p = q² + 2 and p = 12 − q",
                    solution: "q² + 2 = 12 − q → q² + q − 10 = 0; Δ = 1 + 40 = 41; q = (−1 + √41)/2 ≈ 2.70 (positive root only)",
                    result: "Equilibrium: q ≈ 2.70 units, p ≈ 9.30",
                    interpretation: "The market clears at approximately 2.7 units at price £9.30; the negative q root is economically meaningless",
                    extension: "If a tax of £2 per unit is imposed on producers (shifting supply to p = q² + 4), find the new equilibrium and calculate the deadweight loss."
                }
            ],

            linear_quadratic_system: [
                {
                    scenario: "Projectile Over a Wall",
                    context: "A ball is kicked and follows the parabolic path y = −x² + 6x (height in metres, horizontal distance in metres). A wall stands at x = 4, with the top of the wall at height y = w. Find the height w of the wall if the ball just grazes its top.",
                    solution: "At x = 4: y = −16 + 24 = 8. The wall height is 8 m if the ball just passes over it. The line x = 4 intersects the parabola at y = 8 — the ball grazes the wall exactly at its peak if 8 is also the parabola's maximum.",
                    vertex: "Max height: vertex at x = 3, y = 9. So ball is at height 8 at x = 4 (past the maximum). The ball clears any wall ≤ 8 m at x = 4.",
                    extension: "Find the range of wall heights at x = 1 for which the ball clears the wall. Set up the inequality and solve."
                },
                {
                    scenario: "Architectural Arch and Floor Line",
                    context: "A doorway arch is modelled by y = −x² + 9 (height in metres, x measured from the centre). A horizontal floor beam will be installed at height y = h. Find the width of the arch at height h.",
                    system: "y = −x² + 9 and y = h",
                    solution: "−x² + 9 = h → x² = 9 − h → x = ±√(9−h) (valid for h < 9)",
                    width: "Width of arch at height h = 2√(9−h) metres",
                    specific: "At h = 5: width = 2√4 = 4 m. At h = 0 (floor): width = 2×3 = 6 m",
                    discriminant: "Δ = 0 when h = 9 (single point — the crown of the arch). Δ < 0 when h > 9 (above the arch — no intersection)",
                    extension: "A circular window of radius 1 m is to be fitted into the arch. Find the maximum height at which its centre can be placed."
                },
                {
                    scenario: "Revenue Maximisation",
                    context: "A company's revenue is R = −2x² + 40x (a downward parabola) and a target revenue line is R = 200. Find the production levels x that achieve the target revenue.",
                    system: "R = −2x² + 40x and R = 200",
                    solution: "−2x² + 40x = 200 → −2x² + 40x − 200 = 0 → x² − 20x + 100 = 0 → (x−10)² = 0",
                    result: "x = 10 (unique solution — tangent condition: target revenue is exactly the maximum revenue)",
                    interpretation: "The maximum revenue of £200 is achieved only at x = 10 units; any other production level yields less",
                    extension: "If the target is R = 150, find both production levels that achieve it and calculate the production range over which revenue exceeds £150."
                },
                {
                    scenario: "Satellite Dish Signal Path",
                    context: "A satellite dish cross-section is the parabola y = x²/4 (x and y in metres). A signal beam from a distant satellite arrives as a horizontal ray at height y = 4. It travels along the line y = 4 until it reflects off the dish.",
                    system: "y = x²/4 and y = 4",
                    solution: "x²/4 = 4 → x = ±4; reflection points at (4, 4) and (−4, 4)",
                    focal_point: "The focal point of y = x²/4 (form y = x²/4p, p=1) is at (0, 1)",
                    interpretation: "Reflected rays converge at (0, 1) — the focal point — concentrating the signal for maximum reception",
                    discriminant: "Δ = 0 for a horizontal ray at the vertex level y = 0 (tangent). Δ > 0 for any y > 0. This tells the engineer that any ray above the vertex reaches the dish.",
                    extension: "Find the equation of the reflected ray from the hit point (4, 4) to the focal point (0, 1) and verify it has gradient −3/4."
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall solution methods, definitions, and standard forms for algebraic systems",
                    verbs: ["State", "Write", "List", "Recall", "Name", "Identify"],
                    example: "State the three possible solution types for a system of two linear equations and give the geometric interpretation of each"
                },
                understand: {
                    description: "Explain why methods work; connect algebraic results to geometric meaning",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect"],
                    example: "Explain why obtaining 0 = 5 when solving a linear system means there is no solution, using the geometric interpretation"
                },
                apply: {
                    description: "Use appropriate method to solve given systems correctly",
                    verbs: ["Solve", "Find", "Calculate", "Apply", "Use"],
                    example: "Solve the system: 3x + 2y = 11 and 5x − y = 7 using the elimination method"
                },
                analyze: {
                    description: "Identify appropriate method; analyze system structure; classify solution type from coefficients",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Select"],
                    example: "Without solving, determine whether 4x − 2y = 6 and 6x − 3y = 9 is consistent, inconsistent, or dependent. Justify."
                },
                evaluate: {
                    description: "Assess correctness of solutions; evaluate method efficiency; critique approaches",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge"],
                    example: "A student solves a linear-quadratic system and reports one solution. The discriminant of the resulting quadratic is 16. Evaluate this claim."
                },
                create: {
                    description: "Construct systems with specified properties; design problems; formulate models",
                    verbs: ["Construct", "Design", "Formulate", "Create", "Model"],
                    example: "Create a system of two linear equations with exactly one solution at (−3, 5). Verify your answer."
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can solve simple 2-variable linear systems by substitution when one variable is already isolated",
                        "Relies on worked example templates; cannot adapt method to varied forms",
                        "Does not verify solutions in both equations; may not recognise special cases"
                    ],
                    support: [
                        "Step-by-step worked examples with explicit reasoning at each step",
                        "Graphical support to visualise what the solution represents",
                        "Structured templates for setting up and solving systems"
                    ]
                },
                developing: {
                    characteristics: [
                        "Applies substitution and elimination to 2-variable systems reliably",
                        "Recognises inconsistent and dependent cases when they arise",
                        "Begins to solve linear-quadratic systems using substitution"
                    ],
                    support: [
                        "Introduce 3-variable systems and Gaussian elimination",
                        "Discriminant analysis for non-linear systems",
                        "Error analysis tasks to develop critical evaluation skills"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Selects appropriate method (substitution, elimination, Gaussian) based on system structure",
                        "Solves linear-quadratic and non-linear systems with multiple solutions",
                        "Uses discriminant to classify intersections and verify solution count"
                    ],
                    support: [
                        "Polynomial systems and Bézout's theorem",
                        "Parametric solution representation for dependent 3-variable systems",
                        "Modelling real problems as systems and interpreting solutions in context"
                    ]
                },
                expert: {
                    characteristics: [
                        "Solves polynomial systems using resultants and understands Bézout's theorem",
                        "Connects linear systems to matrix algebra (determinants, eigenvalues)",
                        "Interprets solution geometry in ℝⁿ and understands complex solutions"
                    ],
                    support: [
                        "Gröbner bases and systematic polynomial system solving",
                        "Numerical methods for large-scale systems",
                        "Research into applications in computer vision, robotics, and cryptography"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            linear_system_2var: {
                remember: "State the three methods for solving a system of two linear equations in two unknowns",
                understand: "Explain why two parallel lines represent an inconsistent system, using both geometric and algebraic reasoning",
                apply: "Solve using elimination: 5x − 2y = 16 and 3x + 4y = 2",
                analyze: "Without solving, determine the solution type of the system 6x − 4y = 10 and 3x − 2y = 5. Justify using coefficient ratios.",
                evaluate: "A student solves 2x + 3y = 12 and x − y = 1 and obtains (3, 2). Evaluate this solution.",
                create: "Create an inconsistent system of two linear equations where both lines have gradient 3. Verify algebraically that no solution exists."
            },
            linear_system_3var: {
                remember: "List the three elementary row operations used in Gaussian elimination and state what each does to the solution set",
                understand: "Explain what a zero row in the row echelon form of an augmented matrix means geometrically and algebraically",
                apply: "Solve using Gaussian elimination: x+2y+z=8; 2x−y+3z=13; 3x+y−2z=3",
                analyze: "The augmented matrix of a 3-variable system reduces to [[1,2,−1|3],[0,1,2|4],[0,0,0|0]]. Analyse the solution type and write the parametric solution.",
                evaluate: "A student's row echelon form has a pivot in every row. They conclude: 'There is a unique solution.' Evaluate this reasoning.",
                create: "Design a 3-variable linear system with infinitely many solutions whose solution set forms a line. Write both the system and its parametric solution."
            },
            nonlinear_system: {
                remember: "State the general approach for solving a non-linear system containing one linear and one non-linear equation",
                understand: "Explain why the discriminant of the quadratic obtained after substitution determines the number of real intersection points",
                apply: "Solve: y = x + 3 and x² + y² = 29",
                analyze: "Without solving, determine whether the line y = 2x + 10 intersects the circle x² + y² = 25. Show your discriminant calculation.",
                evaluate: "A student finds one solution to x² + y² = 25 and y = x + 1. They stop, claiming the system has one solution. Evaluate this claim.",
                create: "Write a system of a line and a circle that has exactly one real solution (the line is tangent to the circle). Verify using the discriminant."
            },
            polynomial_system: {
                remember: "State Bézout's theorem and give the maximum number of solutions for a system of a degree-2 and degree-3 polynomial equation",
                understand: "Explain why a symmetric system (x + y = s, xy = p) naturally leads to a quadratic equation, and what the two solutions represent",
                apply: "Solve: x + y = 7 and x² + y² = 25",
                analyze: "For the system y = x³ and y = x, determine the number of real solutions and identify them without the Bézout bound being achieved over ℝ. Justify.",
                evaluate: "A student solves y = x² and x² + y² = 2 and finds only 2 real solutions. They claim the other 2 Bézout solutions do not exist. Evaluate this claim.",
                create: "Construct a symmetric polynomial system whose solutions include (3, 4) and (4, 3). Write the system and verify both solutions."
            },
            linear_quadratic_system: {
                remember: "State the three possible geometric outcomes when a straight line meets a parabola, and the corresponding discriminant condition for each",
                understand: "Explain why setting the discriminant of the combined equation to zero gives the condition for tangency",
                apply: "Solve: y = x − 1 and y = x² − 3x + 2",
                analyze: "For the system y = mx + 2 and y = x², find the value(s) of m for which the line is tangent to the parabola. Justify using the discriminant.",
                evaluate: "A student solves a linear-quadratic system and gets x = 2 ± √(−3). They write 'no real solutions.' Evaluate and complete their response.",
                create: "Create a linear-quadratic system with exactly two solutions at x = 1 and x = 4. Write both equations and verify the solutions satisfy both."
            }
        };
    }

    // ========================================
    // TOPIC HANDLERS
    // ========================================

    handleLinearSystem2Var(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "System of Linear Equations (2 Variables)",
            category: 'algebraic_systems',
            summary: "A system of two linear equations in two unknowns is solved by finding the ordered pair (x, y) satisfying both equations simultaneously. The three methods — substitution, elimination, and graphical — always yield the same result and correspond to three geometric relationships between two lines.",

            definitions: {
                system: {
                    definition: "Two or more equations that must all be satisfied simultaneously by the same variable values",
                    standardForm: "a₁x + b₁y = c₁ and a₂x + b₂y = c₂"
                },
                solution: {
                    definition: "An ordered pair (x, y) satisfying every equation in the system",
                    geometricMeaning: "The intersection point of the two lines"
                },
                consistency: {
                    consistent: "System has at least one solution",
                    inconsistent: "System has no solution (parallel lines)",
                    dependent: "System has infinitely many solutions (coincident lines)"
                }
            },

            methods: {
                substitution: {
                    steps: [
                        "1. Solve one equation explicitly for one variable",
                        "2. Substitute into the other equation",
                        "3. Solve for the remaining variable",
                        "4. Back-substitute to find the first variable",
                        "5. Write solution as ordered pair",
                        "6. Verify in both original equations"
                    ],
                    bestFor: "When one variable has coefficient ±1 in at least one equation"
                },
                elimination: {
                    steps: [
                        "1. Align equations with like terms vertically",
                        "2. Multiply equations to make one pair of coefficients equal in magnitude",
                        "3. Add or subtract equations to eliminate one variable",
                        "4. Solve for the remaining variable",
                        "5. Substitute back into either original equation",
                        "6. Verify in both original equations"
                    ],
                    bestFor: "When coefficients can be easily matched by multiplication"
                },
                graphical: {
                    steps: [
                        "1. Rearrange each equation to slope-intercept form y = mx + c",
                        "2. Plot both lines on the same axes",
                        "3. Read the intersection point coordinates",
                        "4. Verify algebraically"
                    ],
                    bestFor: "Visualising solution type; approximate solutions"
                }
            },

            solutionTypeClassification: {
                rule: "Compare coefficient ratios: a₁/a₂, b₁/b₂, c₁/c₂",
                unique: "a₁/a₂ ≠ b₁/b₂ → different gradients → one unique solution",
                none: "a₁/a₂ = b₁/b₂ ≠ c₁/c₂ → parallel → no solution",
                infinite: "a₁/a₂ = b₁/b₂ = c₁/c₂ → coincident → infinitely many"
            },

            examples: [
                {
                    system: "2x + y = 7 and x − y = 2",
                    method: "Elimination",
                    step1: "Add equations: 3x = 9 → x = 3",
                    step2: "Substitute: 3 − y = 2 → y = 1",
                    result: "(3, 1)",
                    check: "2(3)+1=7 ✓; 3−1=2 ✓"
                },
                {
                    system: "y = 3x − 4 and 2x + y = 11",
                    method: "Substitution",
                    step1: "y already isolated: y = 3x − 4",
                    step2: "2x + (3x − 4) = 11 → 5x = 15 → x = 3",
                    step3: "y = 3(3) − 4 = 5",
                    result: "(3, 5)",
                    check: "5=3(3)−4=5 ✓; 2(3)+5=11 ✓"
                }
            ],

            commonErrors: [
                {
                    error: "Substituting an expression back into the equation it came from",
                    fix: "Always substitute into the OTHER equation — not the one used to isolate the variable"
                },
                {
                    error: "Forgetting to multiply the constant term when scaling for elimination",
                    fix: "Multiply every term in the equation, including the right-hand side constant"
                },
                {
                    error: "Interpreting 0 = 5 as an arithmetic error",
                    fix: "A contradiction means no solution — the lines are parallel"
                },
                {
                    error: "Checking the solution in only one equation",
                    fix: "Always verify in BOTH original equations"
                }
            ]
        };

        if (/substitution/i.test(input)) content.focus = 'substitution';
        else if (/elimination/i.test(input)) content.focus = 'elimination';
        else if (/graph/i.test(input)) content.focus = 'graphical';
        else if (/parallel|inconsistent|no solution/i.test(input)) content.focus = 'inconsistentSystem';
        else if (/infinite|dependent|coincident/i.test(input)) content.focus = 'dependentSystem';

        return content;
    }

    handleLinearSystem3Var(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "System of Linear Equations (3 Variables)",
            category: 'algebraic_systems',
            summary: "A system of three linear equations in three unknowns is solved using Gaussian elimination with back substitution. Each equation defines a plane in 3D space; the solution is the point (or set of points) where all three planes meet simultaneously.",

            augmentedMatrixSetup: {
                description: "Write [A|b] where A contains all variable coefficients and b contains the constants",
                example: {
                    system: ["2x + y − z = 8", "−3x − y + 2z = −11", "−2x + y + 2z = −3"],
                    matrix: "[[2,1,−1|8],[−3,−1,2|−11],[−2,1,2|−3]]"
                },
                note: "Always include 0 as coefficient when a variable is missing from an equation"
            },

            gaussianElimination: {
                goal: "Transform to upper triangular (row echelon) form using row operations",
                operations: {
                    swap: "Rᵢ ↔ Rⱼ: interchange rows",
                    scale: "kRᵢ: multiply row by non-zero constant",
                    replace: "Rᵢ + kRⱼ → Rᵢ: add multiple of one row to another"
                },
                workedExample: {
                    system: ["x + y + z = 6", "2x − y + z = 3", "x + 2y − z = 2"],
                    step1: "R2 − 2R1: [0,−3,−1|−9]",
                    step2: "R3 − R1: [0,1,−2|−4]",
                    step3: "R3 + (1/3)R2: [0,0,−7/3|−7]; scale: [0,0,1|3]",
                    backSub: "z=3; y=2; x=1",
                    result: "(1, 2, 3)"
                }
            },

            specialCases: {
                noSolution: {
                    sign: "A row of form [0, 0, 0 | k] with k ≠ 0 appears after elimination",
                    meaning: "0x + 0y + 0z = k is a contradiction → no solution",
                    geometry: "At least two planes are parallel; no common intersection"
                },
                infinitelyMany: {
                    sign: "A row of all zeros [0, 0, 0 | 0] appears after elimination",
                    meaning: "Equations are not independent; one is redundant",
                    geometry: "Planes share a common line or are the same plane",
                    parametric: "Express solution with a free parameter: let z = t, then express x and y in terms of t"
                }
            },

            commonErrors: [
                {
                    error: "Forgetting to apply row operations to the augmented column",
                    fix: "The augmented column (constants) must be included in every row operation"
                },
                {
                    error: "Back-substituting in the wrong order",
                    fix: "Always work from the bottom row upward in back substitution"
                },
                {
                    error: "Treating a zero row as an error in calculation",
                    fix: "A zero row is a valid result indicating a dependent system — proceed to parametric solution"
                }
            ]
        };

        if (/gaussian|elimination|row/i.test(input)) content.focus = 'gaussianElimination';
        else if (/back.?sub/i.test(input)) content.focus = 'backSubstitution';
        else if (/no solution|inconsistent/i.test(input)) content.focus = 'noSolution';
        else if (/infinite|parametric|free/i.test(input)) content.focus = 'infinitelyManySolutions';

        return content;
    }

    handleNonlinearSystem(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "System of Non-Linear Equations",
            category: 'algebraic_systems',
            summary: "A non-linear system contains at least one equation that is not linear. Solutions are found using substitution (from the simpler equation into the complex one) and may number 0, 1, 2, or more. The discriminant of the resulting quadratic classifies the number of real solutions.",

            approach: {
                preferredMethod: "Substitute from the linear (or simpler) equation into the non-linear equation",
                reason: "This avoids introducing new complications and always produces a polynomial in one variable",
                steps: [
                    "1. Identify the simpler equation (usually the linear one)",
                    "2. Solve it for one variable",
                    "3. Substitute into the non-linear equation",
                    "4. Solve the resulting polynomial",
                    "5. Back-substitute to find corresponding values of the other variable",
                    "6. Write all solution pairs (x, y)",
                    "7. Verify ALL pairs in BOTH original equations"
                ]
            },

            discriminantClassification: {
                description: "After substitution, a quadratic ax² + bx + c = 0 arises; Δ = b² − 4ac",
                twoSolutions: "Δ > 0 → two distinct real intersection points",
                oneSolution: "Δ = 0 → one repeated root → tangency (curves just touch)",
                noSolution: "Δ < 0 → no real intersections (curves do not meet over ℝ)"
            },

            commonTypes: {
                lineCircle: "Substitute y = mx + c into x² + y² = r²; solve resulting quadratic",
                lineParabola: "Substitute y = mx + c into y = ax² + bx + d; solve resulting quadratic",
                twoCircles: "Subtract equations to get radical axis (linear); substitute back"
            },

            examples: [
                {
                    type: "Line and Circle",
                    system: "x + y = 2 and x² + y² = 10",
                    step1: "y = 2 − x",
                    step2: "x² + (2−x)² = 10 → 2x² − 4x − 6 = 0 → x² − 2x − 3 = 0",
                    step3: "(x−3)(x+1) = 0 → x = 3 or x = −1",
                    result: "(3, −1) and (−1, 3)"
                },
                {
                    type: "Two Circles",
                    system: "x² + y² = 25 and (x−4)² + y² = 9",
                    step1: "Expand and subtract: −8x + 16 = −16 → x = 4",
                    step2: "16 + y² = 25 → y = ±3",
                    result: "(4, 3) and (4, −3)"
                }
            ],

            commonErrors: [
                {
                    error: "Substituting from the non-linear equation into the linear one",
                    fix: "Always substitute from the simpler (usually linear) equation into the complex one"
                },
                {
                    error: "Stopping after finding one solution",
                    fix: "A non-linear system can have 0, 1, 2, or more solutions — find all of them"
                },
                {
                    error: "Not verifying all solution pairs in both equations",
                    fix: "Check every (x, y) pair in BOTH original equations"
                }
            ]
        };

        if (/circle/i.test(input)) content.focus = 'lineCircle';
        else if (/parabola/i.test(input)) content.focus = 'lineParabola';
        else if (/two.?circle|radical/i.test(input)) content.focus = 'twoCircles';
        else if (/discriminant|tangent/i.test(input)) content.focus = 'discriminantAnalysis';

        return content;
    }

    handlePolynomialSystem(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "System of Polynomial Equations",
            category: 'algebraic_systems',
            summary: "A polynomial system contains equations of degree 2 or higher. Bézout's theorem bounds the number of solutions by the product of degrees. Solutions are found using substitution, resultants, or numerical methods. Real solutions may be fewer than the Bézout bound.",

            bezoutTheorem: {
                statement: "A system of n polynomial equations in n variables of degrees d₁, d₂, ..., dₙ has at most d₁×d₂×...×dₙ solutions in ℂ (counting multiplicity)",
                examples: {
                    twoLines: "1×1 = 1 (consistent with lines meeting at most once)",
                    lineAndConic: "1×2 = 2 (line meets conic at most twice)",
                    twoConics: "2×2 = 4 (two conics meet at most 4 times)",
                    note: "Real solution count is always ≤ Bézout bound"
                }
            },

            symmetricSystems: {
                description: "Systems where the equations are symmetric in x and y (swapping x and y gives the same system)",
                key_identity: "(x+y)² = x² + 2xy + y²; (x−y)² = x² − 2xy + y²",
                strategy: "Compute x+y and x−y from the given information to avoid direct substitution",
                example: {
                    system: "x² + y² = 13 and xy = 6",
                    step1: "(x+y)² = x²+2xy+y² = 13+12 = 25 → x+y = ±5",
                    step2: "(x−y)² = x²−2xy+y² = 13−12 = 1 → x−y = ±1",
                    result: "Four solutions: (3,2), (2,3), (−2,−3), (−3,−2)"
                }
            },

            methods: {
                substitution: "Solve one equation for one variable; substitute into others; solve resulting polynomial",
                resultant: "Compute Sylvester matrix determinant to eliminate one variable systematically",
                numerical: "Newton's method or homotopy continuation for systems without closed-form solutions",
                groebner: "Computer algebra system method (SageMath, Mathematica) for systematic elimination"
            },

            commonErrors: [
                {
                    error: "Expecting exactly d₁×d₂ real solutions",
                    fix: "The Bézout bound counts complex solutions with multiplicity; real solutions may be fewer"
                },
                {
                    error: "Assuming the polynomial obtained after substitution must factor nicely",
                    fix: "Numerical methods may be needed for polynomials of degree ≥ 5 (Abel-Ruffini theorem)"
                },
                {
                    error: "Missing solution pairs in symmetric systems by only considering one sign combination",
                    fix: "Test all sign combinations of x+y and x−y when using the identity method"
                }
            ]
        };

        if (/bezout|degree.*bound/i.test(input)) content.focus = 'bezoutTheorem';
        else if (/symmetric/i.test(input)) content.focus = 'symmetricSystems';
        else if (/resultant/i.test(input)) content.focus = 'resultantMethod';
        else if (/numerical|newton/i.test(input)) content.focus = 'numericalMethods';

        return content;
    }

    handleLinearQuadraticSystem(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Linear–Quadratic Systems",
            category: 'algebraic_systems',
            summary: "A linear-quadratic system pairs one linear equation with one quadratic equation. Substitution from the linear into the quadratic yields a single quadratic; its discriminant determines whether the line is a secant (2 intersections), tangent (1), or misses the curve entirely (0).",

            solutionSteps: [
                "1. Express the linear equation as y = mx + c (isolate y)",
                "2. Substitute into the quadratic equation",
                "3. Rearrange to ax² + bx + c = 0 (all terms on one side)",
                "4. Compute Δ = b² − 4ac to determine number of solutions",
                "5. If Δ ≥ 0: solve using factoring, quadratic formula, or completing the square",
                "6. Back-substitute each x-value into y = mx + c for corresponding y-values",
                "7. Write solutions as ordered pairs (x₁, y₁) and (x₂, y₂)",
                "8. Verify each pair in BOTH original equations"
            ],

            discriminantCriterion: {
                twoSolutions: "Δ > 0: line is a secant — crosses parabola at two distinct points",
                oneSolution: "Δ = 0: line is tangent — touches parabola at exactly one point",
                noSolution: "Δ < 0: line does not intersect the parabola over ℝ"
            },

            tangencyCondition: {
                description: "Finding the value of a parameter that makes a line tangent to a curve",
                method: "Set Δ = 0 in the combined equation; solve for the parameter",
                example: {
                    problem: "Find k such that y = 3x + k is tangent to y = x²",
                    step1: "x² = 3x + k → x² − 3x − k = 0",
                    step2: "Δ = 9 + 4k = 0 → k = −9/4",
                    tangentLine: "y = 3x − 9/4; tangent at x = 3/2, y = 9/4"
                }
            },

            examples: [
                {
                    title: "Two intersections",
                    system: "y = x + 2 and y = x² − 4",
                    step1: "x + 2 = x² − 4 → x² − x − 6 = 0",
                    step2: "Δ = 1 + 24 = 25 > 0 → two solutions",
                    step3: "(x−3)(x+2) = 0 → x = 3 or x = −2",
                    step4: "y = 5 or y = 0",
                    result: "(3, 5) and (−2, 0)"
                },
                {
                    title: "Tangent (one solution)",
                    system: "y = 4x − 4 and y = x²",
                    step1: "x² = 4x − 4 → x² − 4x + 4 = 0 → (x−2)² = 0",
                    step2: "x = 2 (double root); y = 4",
                    result: "Tangent at (2, 4)"
                },
                {
                    title: "No intersection",
                    system: "y = x + 5 and y = x² + 3x + 4",
                    step1: "x + 5 = x² + 3x + 4 → x² + 2x − 1 = 0",
                    step2: "Δ = 4 − 4 = 0... actually Δ = 4+4 = 8 > 0 — check: back to 0 = x² + 2x − 1",
                    note: "Always re-derive Δ from the specific combined equation rather than from memory"
                }
            ],

            commonErrors: [
                {
                    error: "Substituting from the quadratic into the linear equation",
                    fix: "Substitute from the LINEAR equation (y = mx + c) INTO the quadratic"
                },
                {
                    error: "Computing Δ of the original quadratic, not of the combined equation",
                    fix: "The discriminant must be computed from the quadratic obtained AFTER substitution and rearrangement"
                },
                {
                    error: "Only finding x-coordinates without computing y-coordinates",
                    fix: "Substitute each x into the LINEAR equation (simpler) to find y"
                },
                {
                    error: "Interpreting Δ = 0 as no solution",
                    fix: "Δ = 0 means ONE solution (tangency), not zero solutions. Δ < 0 means no real solution."
                }
            ]
        };

        if (/tangent|discriminant.*zero/i.test(input)) content.focus = 'tangencyCondition';
        else if (/two.*solution|secant/i.test(input)) content.focus = 'twoSolutions';
        else if (/no.*solution|no.*intersection/i.test(input)) content.focus = 'noIntersection';
        else if (/parameter|find.*k/i.test(input)) content.focus = 'tangencyParameter';

        return content;
    }
}

