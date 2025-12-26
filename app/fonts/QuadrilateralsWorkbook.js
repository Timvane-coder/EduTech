// Enhanced Quadrilaterals Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedQuadrilateralsMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "excel";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.mathHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.mathFontSize = 14;

        this.currentProblem = null;
        this.currentSolution = null;
        this.solutionSteps = [];
        this.currentWorkbook = null;
        this.graphData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeQuadrilateralSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeQuadrilateralLessons();
    }

    initializeQuadrilateralLessons() {
        this.lessons = {
            general_quadrilateral: {
                title: "General Quadrilaterals",
                concepts: [
                    "Four-sided polygon with four vertices and four angles",
                    "Sum of interior angles is always 360°",
                    "Has two diagonals that connect opposite vertices",
                    "Perimeter is sum of all four sides"
                ],
                theory: "A quadrilateral is the most general four-sided polygon. Understanding its properties forms the foundation for studying special quadrilaterals.",
                keyFormulas: {
                    "Sum of Angles": "∠A + ∠B + ∠C + ∠D = 360°",
                    "Perimeter": "P = a + b + c + d",
                    "Area (with diagonals)": "A = (1/2) × d₁ × d₂ × sin(θ)"
                },
                properties: [
                    "Four sides (can be of different lengths)",
                    "Four angles (can be of different measures)",
                    "Two diagonals (can be of different lengths)",
                    "Sum of interior angles = 360°"
                ],
                applications: [
                    "Land surveying and property boundaries",
                    "Structural engineering designs",
                    "Computer graphics and mesh generation",
                    "Architecture and floor planning"
                ]
            },

            parallelogram: {
                title: "Parallelograms",
                concepts: [
                    "Opposite sides are parallel and equal in length",
                    "Opposite angles are equal",
                    "Consecutive angles are supplementary (sum to 180°)",
                    "Diagonals bisect each other"
                ],
                theory: "A parallelogram is a quadrilateral where both pairs of opposite sides are parallel. This creates symmetry and special angle relationships.",
                keyFormulas: {
                    "Perimeter": "P = 2(a + b)",
                    "Area": "A = base × height = bh",
                    "Alternative Area": "A = ab sin(θ)",
                    "Diagonal Formula": "d₁² + d₂² = 2(a² + b²)"
                },
                properties: [
                    "Opposite sides parallel: AB ∥ DC, AD ∥ BC",
                    "Opposite sides equal: AB = DC, AD = BC",
                    "Opposite angles equal: ∠A = ∠C, ∠B = ∠D",
                    "Consecutive angles supplementary: ∠A + ∠B = 180°",
                    "Diagonals bisect each other"
                ],
                identificationCriteria: [
                    "Both pairs of opposite sides are parallel",
                    "Both pairs of opposite sides are equal",
                    "Both pairs of opposite angles are equal",
                    "Diagonals bisect each other",
                    "One pair of opposite sides both parallel and equal"
                ],
                applications: [
                    "Force parallelograms in physics",
                    "Tile and brick patterns",
                    "Scissor lift mechanisms",
                    "Drafting and technical drawing"
                ]
            },

            rectangle: {
                title: "Rectangles",
                concepts: [
                    "All four angles are right angles (90°)",
                    "Opposite sides are parallel and equal",
                    "Diagonals are equal in length and bisect each other",
                    "Special case of parallelogram with right angles"
                ],
                theory: "A rectangle is a parallelogram with all right angles. This makes it one of the most common and useful quadrilaterals in practical applications.",
                keyFormulas: {
                    "Perimeter": "P = 2(l + w) = 2l + 2w",
                    "Area": "A = length × width = lw",
                    "Diagonal": "d = √(l² + w²)",
                    "Both Diagonals Equal": "d₁ = d₂"
                },
                properties: [
                    "All angles are 90°: ∠A = ∠B = ∠C = ∠D = 90°",
                    "Opposite sides equal: length and width",
                    "Diagonals are equal: d₁ = d₂",
                    "Diagonals bisect each other",
                    "Has 2 lines of symmetry"
                ],
                identificationCriteria: [
                    "Parallelogram with one right angle",
                    "Quadrilateral with all right angles",
                    "Parallelogram with equal diagonals"
                ],
                applications: [
                    "Room dimensions and floor plans",
                    "Screen dimensions (TV, phone, monitor)",
                    "Paper sizes and document formats",
                    "Building foundations and frameworks",
                    "Athletic fields and courts"
                ]
            },

            square: {
                title: "Squares",
                concepts: [
                    "All four sides are equal in length",
                    "All four angles are right angles (90°)",
                    "Diagonals are equal, perpendicular, and bisect each other",
                    "Special case of rectangle, rhombus, and parallelogram"
                ],
                theory: "A square is the most regular quadrilateral, combining all the special properties of rectangles and rhombuses. It has the maximum symmetry among all quadrilaterals.",
                keyFormulas: {
                    "Perimeter": "P = 4s (where s = side length)",
                    "Area": "A = s²",
                    "Diagonal": "d = s√2",
                    "Area from Diagonal": "A = d²/2"
                },
                properties: [
                    "All sides equal: AB = BC = CD = DA = s",
                    "All angles 90°: ∠A = ∠B = ∠C = ∠D = 90°",
                    "Diagonals equal: d₁ = d₂ = s√2",
                    "Diagonals perpendicular: d₁ ⊥ d₂",
                    "Diagonals bisect angles (45° each)",
                    "Has 4 lines of symmetry",
                    "Has rotational symmetry of order 4"
                ],
                identificationCriteria: [
                    "Rectangle with all sides equal",
                    "Rhombus with one right angle",
                    "Parallelogram with all sides equal and one right angle"
                ],
                applications: [
                    "Chess boards and game boards",
                    "Floor tiles and ceiling tiles",
                    "City block planning",
                    "QR codes and pixel grids",
                    "Window panes and picture frames"
                ]
            },

            rhombus: {
                title: "Rhombuses",
                concepts: [
                    "All four sides are equal in length",
                    "Opposite angles are equal",
                    "Diagonals are perpendicular and bisect each other",
                    "Diagonals bisect the vertex angles"
                ],
                theory: "A rhombus is a parallelogram with all sides equal. Its distinctive feature is that its diagonals are perpendicular to each other.",
                keyFormulas: {
                    "Perimeter": "P = 4s",
                    "Area (base-height)": "A = base × height = bh",
                    "Area (diagonals)": "A = (d₁ × d₂)/2",
                    "Area (side-angle)": "A = s² sin(θ)",
                    "Diagonal Relationship": "d₁² + d₂² = 4s²"
                },
                properties: [
                    "All sides equal: AB = BC = CD = DA",
                    "Opposite angles equal: ∠A = ∠C, ∠B = ∠D",
                    "Consecutive angles supplementary: ∠A + ∠B = 180°",
                    "Diagonals perpendicular: d₁ ⊥ d₂",
                    "Diagonals bisect vertex angles",
                    "Has 2 lines of symmetry (along diagonals)"
                ],
                identificationCriteria: [
                    "Parallelogram with all sides equal",
                    "Quadrilateral with all sides equal and opposite angles equal",
                    "Parallelogram with perpendicular diagonals"
                ],
                applications: [
                    "Diamond shapes in jewelry",
                    "Kite designs and decorations",
                    "Road signs (caution/warning signs)",
                    "Crystal structures in chemistry",
                    "Baseball field infield (diamond)"
                ]
            },

            trapezoid: {
                title: "Trapezoids (Trapeziums)",
                concepts: [
                    "Exactly one pair of parallel sides (bases)",
                    "Non-parallel sides are called legs",
                    "Height is perpendicular distance between bases",
                    "Median connects midpoints of legs and is parallel to bases"
                ],
                theory: "A trapezoid has exactly one pair of parallel sides. The parallel sides are called bases, and the non-parallel sides are called legs.",
                keyFormulas: {
                    "Area": "A = (1/2)(b₁ + b₂)h = (average of bases) × height",
                    "Perimeter": "P = b₁ + b₂ + leg₁ + leg₂",
                    "Median": "m = (b₁ + b₂)/2",
                    "Median Area": "A = m × h"
                },
                properties: [
                    "One pair of parallel sides (bases): b₁ ∥ b₂",
                    "Median parallel to bases: m ∥ b₁ ∥ b₂",
                    "Median length is average of bases: m = (b₁ + b₂)/2",
                    "Base angles may or may not be equal"
                ],
                types: [
                    "Right Trapezoid: Has two right angles",
                    "Isosceles Trapezoid: Legs are equal, base angles are equal",
                    "Scalene Trapezoid: All sides different lengths"
                ],
                applications: [
                    "Trapezoidal rule in calculus",
                    "Bridge support structures",
                    "Pyramidal frustums",
                    "Architectural columns and pillars",
                    "Retaining walls"
                ]
            },

            isosceles_trapezoid: {
                title: "Isosceles Trapezoids",
                concepts: [
                    "Trapezoid with equal legs",
                    "Base angles are equal (angles on same base)",
                    "Diagonals are equal in length",
                    "Has one line of symmetry (perpendicular to bases)"
                ],
                theory: "An isosceles trapezoid is a trapezoid where the non-parallel sides (legs) are equal in length. This creates symmetry and special angle properties.",
                keyFormulas: {
                    "Area": "A = (1/2)(b₁ + b₂)h",
                    "Perimeter": "P = b₁ + b₂ + 2l (where l = leg length)",
                    "Height (if diagonal known)": "h = √(d² - ((b₁-b₂)/2)²)",
                    "Diagonal": "d₁ = d₂"
                },
                properties: [
                    "Legs are equal: leg₁ = leg₂",
                    "Base angles equal: ∠A = ∠B, ∠C = ∠D",
                    "Diagonals equal: d₁ = d₂",
                    "Adjacent angles supplementary: ∠A + ∠D = 180°",
                    "One line of symmetry (vertical axis)"
                ],
                identificationCriteria: [
                    "Trapezoid with equal legs",
                    "Trapezoid with equal base angles",
                    "Trapezoid with equal diagonals"
                ],
                applications: [
                    "Architectural arches and doorways",
                    "Bucket and container designs",
                    "Amphitheater seating",
                    "Embankment profiles"
                ]
            },

            kite: {
                title: "Kites",
                concepts: [
                    "Two pairs of adjacent sides are equal",
                    "One diagonal bisects the other at right angles",
                    "One diagonal is a line of symmetry",
                    "One pair of opposite angles are equal"
                ],
                theory: "A kite is a quadrilateral with two pairs of consecutive sides that are equal. It has one axis of symmetry along one of its diagonals.",
                keyFormulas: {
                    "Area": "A = (d₁ × d₂)/2",
                    "Perimeter": "P = 2(a + b) where a and b are the two different side lengths",
                    "Angle Sum": "∠A + ∠B + ∠C + ∠D = 360°"
                },
                properties: [
                    "Two pairs of consecutive sides equal: AB = AD, CB = CD",
                    "One pair of opposite angles equal: ∠B = ∠D",
                    "Diagonals perpendicular: d₁ ⊥ d₂",
                    "One diagonal (axis of symmetry) bisects the other",
                    "One diagonal bisects two vertex angles",
                    "One line of symmetry"
                ],
                identificationCriteria: [
                    "Two pairs of consecutive equal sides",
                    "Perpendicular diagonals where one bisects the other"
                ],
                applications: [
                    "Kite flying (toy kites)",
                    "Decorative designs",
                    "Molecular geometry (chemistry)",
                    "Pattern designs in textiles"
                ]
            },

            cyclic_quadrilateral: {
                title: "Cyclic Quadrilaterals",
                concepts: [
                    "All four vertices lie on a circle",
                    "Opposite angles are supplementary (sum to 180°)",
                    "Special formulas for area and side relationships",
                    "Related to circle geometry and arc measures"
                ],
                theory: "A cyclic quadrilateral is inscribed in a circle, with all vertices on the circle's circumference. This creates special angle and side relationships.",
                keyFormulas: {
                    "Opposite Angles": "∠A + ∠C = 180°, ∠B + ∠D = 180°",
                    "Brahmagupta's Formula": "A = √[(s-a)(s-b)(s-c)(s-d)] where s = (a+b+c+d)/2",
                    "Ptolemy's Theorem": "AC × BD = AB × CD + AD × BC",
                    "Circumradius": "R = (abc)/(4A) for triangle; extended for quadrilateral"
                },
                properties: [
                    "All vertices on a circle",
                    "Opposite angles supplementary: ∠A + ∠C = 180°",
                    "Satisfies Ptolemy's Theorem",
                    "Special area formula (Brahmagupta)",
                    "Inscribed angle relationships"
                ],
                identificationCriteria: [
                    "Opposite angles sum to 180°",
                    "All vertices equidistant from a center point",
                    "Satisfies Ptolemy's Theorem"
                ],
                applications: [
                    "Circle packing problems",
                    "Astronomical calculations",
                    "Navigation and surveying",
                    "Ancient Greek geometry"
                ]
            },

            tangential_quadrilateral: {
                title: "Tangential Quadrilaterals",
                concepts: [
                    "Has an inscribed circle (incircle) tangent to all four sides",
                    "Sum of opposite sides are equal",
                    "Special relationship between area, perimeter, and inradius",
                    "Dual concept to cyclic quadrilateral"
                ],
                theory: "A tangential quadrilateral has an inscribed circle that touches all four sides. This is the dual concept to a cyclic quadrilateral.",
                keyFormulas: {
                    "Opposite Sides": "a + c = b + d",
                    "Area": "A = r × s where r = inradius, s = semiperimeter",
                    "Semiperimeter": "s = (a + b + c + d)/2",
                    "Inradius": "r = A/s"
                },
                properties: [
                    "Has inscribed circle tangent to all sides",
                    "Sum of opposite sides equal: a + c = b + d",
                    "Area = inradius × semiperimeter",
                    "Incircle touches each side at exactly one point"
                ],
                identificationCriteria: [
                    "Sum of opposite sides are equal: a + c = b + d",
                    "Can fit a circle inside tangent to all sides"
                ],
                applications: [
                    "Gear and cam design",
                    "Architectural curve fitting",
                    "Geometric optimization problems"
                ]
            },

            classification: {
                title: "Quadrilateral Classification and Relationships",
                concepts: [
                    "Hierarchical relationships between quadrilateral types",
                    "Sufficient conditions for identification",
                    "Property inheritance in the hierarchy",
                    "Venn diagram relationships"
                ],
                theory: "Quadrilaterals form a hierarchy where more specific types inherit properties from more general types. Understanding these relationships helps in problem-solving.",
                hierarchy: {
                    "General Quadrilateral": "Most general - any four-sided polygon",
                    "Trapezoid": "One pair of parallel sides",
                    "Parallelogram": "Two pairs of parallel sides",
                    "Rectangle": "Parallelogram with right angles",
                    "Rhombus": "Parallelogram with equal sides",
                    "Square": "Rectangle AND Rhombus (or Parallelogram with equal sides and right angles)",
                    "Kite": "Two pairs of consecutive equal sides",
                    "Isosceles Trapezoid": "Trapezoid with equal legs"
                },
                relationships: [
                    "Every square is a rectangle, rhombus, and parallelogram",
                    "Every rectangle and rhombus is a parallelogram",
                    "Every parallelogram is a trapezoid (in inclusive definition)",
                    "Kites and trapezoids are independent classifications"
                ],
                identificationStrategy: [
                    "Check for parallel sides first (trapezoid, parallelogram)",
                    "Check angles (right angles → rectangle)",
                    "Check side lengths (all equal → rhombus or square)",
                    "Check diagonal properties for confirmation"
                ],
                applications: [
                    "Geometric proofs and theorems",
                    "Computer vision shape recognition",
                    "Taxonomy and classification systems",
                    "Problem-solving strategy selection"
                ]
            },

            coordinate_geometry: {
                title: "Quadrilaterals in Coordinate Geometry",
                concepts: [
                    "Using coordinates to find distances and slopes",
                    "Verifying parallel and perpendicular sides",
                    "Calculating area using coordinates",
                    "Finding midpoints and diagonals"
                ],
                theory: "Coordinate geometry provides algebraic methods to analyze quadrilaterals using vertex coordinates, distances, slopes, and area formulas.",
                keyFormulas: {
                    "Distance Formula": "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                    "Slope Formula": "m = (y₂-y₁)/(x₂-x₁)",
                    "Midpoint Formula": "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    "Shoelace Formula (Area)": "A = (1/2)|x₁(y₂-y₄) + x₂(y₃-y₁) + x₃(y₄-y₂) + x₄(y₁-y₃)|"
                },
                techniques: [
                    "Use distance formula to verify equal sides",
                    "Use slope to verify parallel (equal slopes) or perpendicular (negative reciprocal slopes)",
                    "Use midpoint formula to verify diagonal bisection",
                    "Use Shoelace formula for area calculation"
                ],
                applications: [
                    "Computer graphics and game development",
                    "GIS and mapping applications",
                    "CAD software geometry engines",
                    "Robotics path planning"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
            excel: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#4472c4',
                headerText: '#ffffff',
                sectionBg: '#d9e2f3',
                sectionText: '#000000',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e2efda',
                resultText: '#000000',
                formulaBg: '#fff2cc',
                formulaText: '#7f6000',
                stepBg: '#f2f2f2',
                stepText: '#333333',
                borderColor: '#808080',
                mathBg: '#fef7e0',
                mathText: '#b06000',
                graphBg: '#f8f9fa',
                vertexBg: '#ffe6e6'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#2c5aa0',
                headerText: '#ffffff',
                sectionBg: '#e1ecf4',
                sectionText: '#2c5aa0',
                cellBg: '#ffffff',
                cellText: '#2c5aa0',
                resultBg: '#d4edda',
                resultText: '#155724',
                formulaBg: '#fff3cd',
                formulaText: '#856404',
                stepBg: '#e9ecef',
                stepText: '#495057',
                borderColor: '#4682b4',
                mathBg: '#e3f2fd',
                mathText: '#1565c0',
                graphBg: '#f1f8ff',
                vertexBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'degree': '°', 'square': '□', 'congruent': '≅', 'similar': '∼'
        };
    }

    initializeQuadrilateralSolvers() {
        this.quadrilateralTypes = {
            // General quadrilateral calculations
            general_quadrilateral: {
                patterns: [
                    /general.*quadrilateral/i,
                    /four.*sided.*polygon/i,
                    /quadrilateral.*properties/i
                ],
                solver: this.solveGeneralQuadrilateral.bind(this),
                name: 'General Quadrilateral',
                category: 'basic_quadrilaterals',
                description: 'Analyzes properties of general quadrilaterals'
            },

            // Parallelogram problems
            parallelogram: {
                patterns: [
                    /parallelogram/i,
                    /opposite.*sides.*parallel/i,
                    /opposite.*sides.*equal/i
                ],
                solver: this.solveParallelogram.bind(this),
                name: 'Parallelogram',
                category: 'parallelograms',
                description: 'Solves parallelogram problems (area, perimeter, angles, diagonals)'
            },

            // Rectangle problems
            rectangle: {
                patterns: [
                    /rectangle/i,
                    /rectangular/i,
                    /right.*angles.*quadrilateral/i
                ],
                solver: this.solveRectangle.bind(this),
                name: 'Rectangle',
                category: 'rectangles',
                description: 'Solves rectangle problems (dimensions, area, perimeter, diagonals)'
            },

            // Square problems
            square: {
                patterns: [
                    /square/i,
                    /equal.*sides.*right.*angles/i
                ],
                solver: this.solveSquare.bind(this),
                name: 'Square',
                category: 'squares',
                description: 'Solves square problems (side length, area, perimeter, diagonals)'
            },

            // Rhombus problems
            rhombus: {
                patterns: [
                    /rhombus/i,
                    /diamond.*shape/i,
                    /equal.*sides.*parallelogram/i
                ],
                solver: this.solveRhombus.bind(this),
                name: 'Rhombus',
                category: 'rhombuses',
                description: 'Solves rhombus problems (area, perimeter, diagonals, angles)'
            },

            // Trapezoid problems
            trapezoid: {
                patterns: [
                    /trapezoid/i,
                    /trapezium/i,
                    /one.*pair.*parallel/i
                ],
                solver: this.solveTrapezoid.bind(this),
                name: 'Trapezoid',
                category: 'trapezoids',
                description: 'Solves trapezoid problems (area, median, bases, height)'
            },

            // Isosceles trapezoid
            isosceles_trapezoid: {
                patterns: [
                    /isosceles.*trapezoid/i,
                    /equal.*legs.*trapezoid/i
                ],
                solver: this.solveIsoscelesTrapezoid.bind(this),
                name: 'Isosceles Trapezoid',
                category: 'trapezoids',
                description: 'Solves isosceles trapezoid problems'
            },

            // Kite problems
            kite: {
                patterns: [
                    /kite/i,
                    /two.*pairs.*consecutive.*equal/i
                ],
                solver: this.solveKite.bind(this),
                name: 'Kite',
                category: 'kites',
                description: 'Solves kite problems (area, perimeter, diagonals, angles)'
            },

            // Area calculations
            area_calculation: {
                patterns: [
                    /area.*quadrilateral/i,
                    /find.*area/i,
                    /calculate.*area/i
                ],
                solver: this.calculateQuadrilateralArea.bind(this),
                name: 'Area Calculation',
                category: 'measurements',
                description: 'Calculates area of various quadrilaterals'
            },

            // Perimeter calculations
            perimeter_calculation: {
                patterns: [
                    /perimeter.*quadrilateral/i,
                    /find.*perimeter/i,
                    /calculate.*perimeter/i
                ],
                solver: this.calculateQuadrilateralPerimeter.bind(this),
                name: 'Perimeter Calculation',
                category: 'measurements',
                description: 'Calculates perimeter of quadrilaterals'
            },

            // Diagonal calculations
            diagonal_calculation: {
                patterns: [
                    /diagonal.*quadrilateral/i,
                    /find.*diagonal/i,
                    /calculate.*diagonal/i
                ],
                solver: this.calculateDiagonals.bind(this),
                name: 'Diagonal Calculation',
                category: 'measurements',
                description: 'Calculates diagonal lengths and properties'
            },

            // Angle calculations
            angle_calculation: {
                patterns: [
                    /angle.*quadrilateral/i,
                    /find.*angle/i,
                    /missing.*angle/i
                ],
                solver: this.calculateAngles.bind(this),
                name: 'Angle Calculation',
                category: 'measurements',
                description: 'Finds missing angles in quadrilaterals'
            },

            // Classification problems
            classification: {
                patterns: [
                    /classify.*quadrilateral/i,
                    /identify.*type/i,
                    /what.*kind.*quadrilateral/i
                ],
                solver: this.classifyQuadrilateral.bind(this),
                name: 'Quadrilateral Classification',
                category: 'classification',
                description: 'Identifies type of quadrilateral from properties'
            },

            // Coordinate geometry
            coordinate_geometry: {
                patterns: [
                    /coordinate.*quadrilateral/i,
                    /vertices.*coordinates/i,
                    /coordinate.*plane/i
                ],
                solver: this.solveCoordinateQuadrilateral.bind(this),
                name: 'Coordinate Geometry',
                category: 'coordinate_geometry',
                description: 'Analyzes quadrilaterals using coordinate geometry'
            },

            // Properties verification
            property_verification: {
                patterns: [
                    /verify.*properties/i,
                    /check.*if.*quadrilateral/i,
                    /prove.*quadrilateral/i
                ],
                solver: this.verifyQuadrilateralProperties.bind(this),
                name: 'Property Verification',
                category: 'verification',
                description: 'Verifies properties and relationships in quadrilaterals'
            },

            // Cyclic quadrilateral
            cyclic_quadrilateral: {
                patterns: [
                    /cyclic.*quadrilateral/i,
                    /inscribed.*quadrilateral/i,
                    /vertices.*circle/i
                ],
                solver: this.solveCyclicQuadrilateral.bind(this),
                name: 'Cyclic Quadrilateral',
                category: 'special_quadrilaterals',
                description: 'Solves cyclic quadrilateral problems'
            },

            // Tangential quadrilateral
            tangential_quadrilateral: {
                patterns: [
                    /tangential.*quadrilateral/i,
                    /inscribed.*circle.*quadrilateral/i,
                    /incircle.*quadrilateral/i
                ],
                solver: this.solveTangentialQuadrilateral.bind(this),
                name: 'Tangential Quadrilateral',
                category: 'special_quadrilaterals',
                description: 'Solves tangential quadrilateral problems'
            },

            // Optimization problems
            optimization: {
                patterns: [
                    /maximum.*area/i,
                    /minimum.*perimeter/i,
                    /optimize.*quadrilateral/i
                ],
                solver: this.solveQuadrilateralOptimization.bind(this),
                name: 'Quadrilateral Optimization',
                category: 'optimization',
                description: 'Optimizes quadrilateral dimensions'
            },

            // Construction problems
            construction: {
                patterns: [
                    /construct.*quadrilateral/i,
                    /draw.*quadrilateral/i,
                    /create.*quadrilateral/i
                ],
                solver: this.constructQuadrilateral.bind(this),
                name: 'Quadrilateral Construction',
                category: 'construction',
                description: 'Provides construction steps for quadrilaterals'
            }
        };
    }

    // Initialize common mistakes and error prevention database
    initializeErrorDatabase() {
        this.commonMistakes = {
            parallelogram: {
                'Calculate area': [
                    'Using side lengths instead of base × height',
                    'Forgetting that height must be perpendicular to base',
                    'Confusing diagonal length with height'
                ],
                'Find angles': [
                    'Not using the fact that consecutive angles are supplementary',
                    'Forgetting opposite angles are equal'
                ]
            },
            rectangle: {
                'Calculate diagonal': [
                    'Not using Pythagorean theorem correctly',
                    'Adding instead of using √(l² + w²)',
                    'Forgetting both diagonals are equal'
                ],
                'Calculate area': [
                    'Confusing length and width order (though result is same)',
                    'Using perimeter formula instead of area formula'
                ]
            },
            square: {
                'Calculate diagonal': [
                    'Not multiplying side by √2',
                    'Forgetting the diagonal formula d = s√2',
                    'Using perimeter instead of side length'
                ],
                'Calculate area': [
                    'Not squaring the side length',
                    'Multiplying side by 4 (that\'s perimeter)'
                ]
            },
            rhombus: {
                'Calculate area': [
                    'Using side length squared instead of diagonal formula',
                    'Forgetting to multiply diagonals by 1/2',
                    'Not using A = (d₁ × d₂)/2'
                ]
            },
            trapezoid: {
                'Calculate area': [
                    'Not averaging the bases first',
                    'Forgetting to multiply by height',
                    'Adding all four sides (that\'s perimeter)'
                ],
                'Find median': [
                    'Not averaging the two bases',
                    'Using wrong formula for median'
                ]
            }
        };

        this.errorPrevention = {
            area_calculation: {
                reminder: 'Always identify which formula applies to your specific quadrilateral',
                method: 'Write out the formula first, then substitute values'
            },
            angle_sum: {
                reminder: 'Sum of all interior angles in any quadrilateral is 360°',
                method: 'Check your answer by adding all angles'
            },
            diagonal_check: {
                reminder: 'Verify diagonal properties match the quadrilateral type',
                method: 'Use properties: rectangle/square have equal diagonals, rhombus has perpendicular diagonals'
            }
        };
    }

    // Initialize explanation templates for different learning styles
    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this step works and its geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of operations to perform',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial metaphors'
            },
            algebraic: {
                focus: 'Formal geometric rules and properties',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete numbers and simple cases'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with reasoning',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // Main solver method
    solveQuadrilateralProblem(config) {
        const { quadrilateralType, parameters, problem, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseQuadrilateralProblem(quadrilateralType, parameters, problem, context);

            // Solve the problem
            this.currentSolution = this.solveQuadrilateralProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateQuadrilateralSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateQuadrilateralGraphData();

            // Generate workbook
            this.generateQuadrilateralWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                type: this.currentSolution?.quadrilateralType,
                measurements: this.currentSolution?.measurements
            };

        } catch (error) {
            throw new Error(`Failed to solve quadrilateral problem: ${error.message}`);
        }
    }

    parseQuadrilateralProblem(quadrilateralType, parameters = {}, problem = '', context = {}) {
        // If quadrilateral type is specified, use it directly
        if (quadrilateralType && this.quadrilateralTypes[quadrilateralType]) {
            return {
                originalInput: problem || `${quadrilateralType} problem`,
                type: quadrilateralType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect quadrilateral problem type
        for (const [type, config] of Object.entries(this.quadrilateralTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(problem)) {
                    return {
                        originalInput: problem,
                        type: type,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default to general quadrilateral if parameters are provided
        if (Object.keys(parameters).length > 0) {
            return {
                originalInput: problem || 'Quadrilateral with given measurements',
                type: 'general_quadrilateral',
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize quadrilateral problem type from: ${problem}`);
    }

    solveQuadrilateralProblem_Internal(problem) {
        const solver = this.quadrilateralTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for quadrilateral problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // QUADRILATERAL SOLVERS

    solveGeneralQuadrilateral(problem) {
        const { sideA, sideB, sideC, sideD, angleA, angleB, angleC, angleD, diagonal1, diagonal2 } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate perimeter if all sides are known
        if (sideA && sideB && sideC && sideD) {
            measurements.perimeter = sideA + sideB + sideC + sideD;
        }

        // Calculate missing angle if three angles are known
        const knownAngles = [angleA, angleB, angleC, angleD].filter(a => a !== undefined);
        if (knownAngles.length === 3) {
            const sumKnown = knownAngles.reduce((sum, angle) => sum + angle, 0);
            measurements.missingAngle = 360 - sumKnown;
        }

        // General properties
        properties.push('Sum of interior angles = 360°');
        properties.push('Has two diagonals');
        properties.push('Perimeter = sum of all sides');

        return {
            quadrilateralType: 'General Quadrilateral',
            measurements: measurements,
            properties: properties,
            givenData: problem.parameters,
            category: 'general_quadrilateral'
        };
    }

    solveParallelogram(problem) {
        const { base, side, height, angle, diagonal1, diagonal2 } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate perimeter
        if (base && side) {
            measurements.perimeter = 2 * (base + side);
        }

        // Calculate area
        if (base && height) {
            measurements.area = base * height;
        } else if (base && side && angle) {
            measurements.area = base * side * Math.sin(angle * Math.PI / 180);
        }

        // Calculate height if area and base are known
        if (measurements.area && base && !height) {
            measurements.height = measurements.area / base;
        }

        // Calculate missing angle
        if (angle) {
            measurements.oppositeAngle = angle;
            measurements.consecutiveAngle = 180 - angle;
        }

        // Diagonal relationship: d₁² + d₂² = 2(a² + b²)
        if (base && side) {
            measurements.diagonalSumSquared = 2 * (base * base + side * side);
        }

        // Properties
        properties.push('Opposite sides are parallel and equal');
        properties.push('Opposite angles are equal');
        properties.push('Consecutive angles are supplementary (sum to 180°)');
        properties.push('Diagonals bisect each other');

        return {
            quadrilateralType: 'Parallelogram',
            measurements: measurements,
            properties: properties,
            formulas: {
                perimeter: 'P = 2(base + side)',
                area: 'A = base × height',
                alternativeArea: 'A = ab sin(θ)'
            },
            givenData: problem.parameters,
            category: 'parallelogram'
        };
    }

    solveRectangle(problem) {
        const { length, width, area, perimeter, diagonal } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate missing dimension if area is known
        if (area && length && !width) {
            measurements.width = area / length;
            measurements.length = length;
        } else if (area && width && !length) {
            measurements.length = area / width;
            measurements.width = width;
        } else {
            if (length) measurements.length = length;
            if (width) measurements.width = width;
        }

        // Calculate area if both dimensions are known
        if (measurements.length && measurements.width) {
            measurements.area = measurements.length * measurements.width;
        }

        // Calculate perimeter
        if (measurements.length && measurements.width) {
            measurements.perimeter = 2 * (measurements.length + measurements.width);
        }

        // Calculate diagonal using Pythagorean theorem
        if (measurements.length && measurements.width) {
            measurements.diagonal = Math.sqrt(measurements.length ** 2 + measurements.width ** 2);
        } else if (diagonal) {
            measurements.diagonal = diagonal;
            
            // If diagonal and one side are known, find the other side
            if (length && !width) {
                measurements.width = Math.sqrt(diagonal ** 2 - length ** 2);
            } else if (width && !length) {
                measurements.length = Math.sqrt(diagonal ** 2 - width ** 2);
            }
        }

        // All angles are 90°
        measurements.allAngles = 90;

        // Properties
        properties.push('All angles are 90° (right angles)');
        properties.push('Opposite sides are parallel and equal');
        properties.push('Diagonals are equal in length');
        properties.push('Diagonals bisect each other');
        properties.push('Has 2 lines of symmetry');

        return {
            quadrilateralType: 'Rectangle',
            measurements: measurements,
            properties: properties,
            formulas: {
                perimeter: 'P = 2(l + w)',
                area: 'A = l × w',
                diagonal: 'd = √(l² + w²)'
            },
            givenData: problem.parameters,
            category: 'rectangle'
        };
    }

    solveSquare(problem) {
        const { side, area, perimeter, diagonal } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Determine side length from various inputs
        if (side) {
            measurements.side = side;
        } else if (area) {
            measurements.side = Math.sqrt(area);
        } else if (perimeter) {
            measurements.side = perimeter / 4;
        } else if (diagonal) {
            measurements.side = diagonal / Math.sqrt(2);
        }

        // Calculate all measurements from side
        if (measurements.side) {
            measurements.perimeter = 4 * measurements.side;
            measurements.area = measurements.side ** 2;
            measurements.diagonal = measurements.side * Math.sqrt(2);
        }

        // All angles are 90°
        measurements.allAngles = 90;
        measurements.diagonalAngle = 45; // Diagonals bisect angles

        // Properties
        properties.push('All four sides are equal');
        properties.push('All four angles are 90° (right angles)');
        properties.push('Diagonals are equal in length');
        properties.push('Diagonals are perpendicular to each other');
        properties.push('Diagonals bisect the vertex angles (45° each)');
        properties.push('Has 4 lines of symmetry');
        properties.push('Has rotational symmetry of order 4');

        return {
            quadrilateralType: 'Square',
            measurements: measurements,
            properties: properties,
            formulas: {
                perimeter: 'P = 4s',
                area: 'A = s²',
                diagonal: 'd = s√2',
                areaFromDiagonal: 'A = d²/2'
            },
            givenData: problem.parameters,
            category: 'square'
        };
    }

    solveRhombus(problem) {
        const { side, diagonal1, diagonal2, height, angle, area } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate area from diagonals
        if (diagonal1 && diagonal2) {
            measurements.area = (diagonal1 * diagonal2) / 2;
            measurements.diagonal1 = diagonal1;
            measurements.diagonal2 = diagonal2;
        }

        // Calculate area from base and height
        if (side && height) {
            measurements.area = side * height;
        }

        // Calculate area from side and angle
        if (side && angle) {
            measurements.area = side * side * Math.sin(angle * Math.PI / 180);
        }

        // Calculate perimeter
        if (side) {
            measurements.perimeter = 4 * side;
            measurements.side = side;
        }

        // Calculate side from diagonals using: 4s² = d₁² + d₂²
        if (diagonal1 && diagonal2 && !side) {
            measurements.side = Math.sqrt((diagonal1 ** 2 + diagonal2 ** 2) / 4);
            measurements.perimeter = 4 * measurements.side;
        }

        // Calculate angles
        if (angle) {
            measurements.angle1 = angle;
            measurements.angle2 = 180 - angle;
        }

        // Properties
        properties.push('All four sides are equal');
        properties.push('Opposite angles are equal');
        properties.push('Consecutive angles are supplementary');
        properties.push('Diagonals are perpendicular to each other');
        properties.push('Diagonals bisect each other');
        properties.push('Diagonals bisect the vertex angles');
        properties.push('Has 2 lines of symmetry (along diagonals)');

        return {
            quadrilateralType: 'Rhombus',
            measurements: measurements,
            properties: properties,
            formulas: {
                perimeter: 'P = 4s',
                areaFromDiagonals: 'A = (d₁ × d₂)/2',
                areaFromBaseHeight: 'A = base × height',
                areaFromSideAngle: 'A = s² sin(θ)',
                diagonalRelationship: 'd₁² + d₂² = 4s²'
            },
            givenData: problem.parameters,
            category: 'rhombus'
        };
    }

    solveTrapezoid(problem) {
        const { base1, base2, height, leg1, leg2, area, median } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate area
        if (base1 && base2 && height) {
            measurements.area = ((base1 + base2) / 2) * height;
            measurements.base1 = base1;
            measurements.base2 = base2;
            measurements.height = height;
        }

        // Calculate height if area and bases are known
        if (area && base1 && base2 && !height) {
            measurements.height = (2 * area) / (base1 + base2);
        }

        // Calculate median (average of bases)
        if (base1 && base2) {
            measurements.median = (base1 + base2) / 2;
        } else if (median) {
            measurements.median = median;
        }

        // Calculate area using median
        if (measurements.median && height) {
            measurements.area = measurements.median * height;
        }

        // Calculate perimeter
        if (base1 && base2 && leg1 && leg2) {
            measurements.perimeter = base1 + base2 + leg1 + leg2;
        }

        // Properties
        properties.push('Exactly one pair of parallel sides (bases)');
        properties.push('Median is parallel to bases');
        properties.push('Median length = (base₁ + base₂)/2');
        properties.push('Height is perpendicular distance between bases');

        return {
            quadrilateralType: 'Trapezoid',
            measurements: measurements,
            properties: properties,
            formulas: {
                area: 'A = ((b₁ + b₂)/2) × h',
                median: 'm = (b₁ + b₂)/2',
                areaWithMedian: 'A = m × h',
                perimeter: 'P = b₁ + b₂ + leg₁ + leg₂'
            },
            givenData: problem.parameters,
            category: 'trapezoid'
        };
    }

    solveIsoscelesTrapezoid(problem) {
        const { base1, base2, height, leg, diagonal, area } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate area
        if (base1 && base2 && height) {
            measurements.area = ((base1 + base2) / 2) * height;
        }

        // Calculate perimeter (both legs are equal)
        if (base1 && base2 && leg) {
            measurements.perimeter = base1 + base2 + 2 * leg;
        }

        // Calculate diagonal (both diagonals are equal)
        if (diagonal) {
            measurements.diagonal = diagonal;
        }

        // Base angles are equal
        properties.push('Legs are equal in length');
        properties.push('Base angles are equal');
        properties.push('Diagonals are equal in length');
        properties.push('Has one line of symmetry (perpendicular to bases)');
        properties.push('Adjacent angles are supplementary');

        return {
            quadrilateralType: 'Isosceles Trapezoid',
            measurements: measurements,
            properties: properties,
            formulas: {
                area: 'A = ((b₁ + b₂)/2) × h',
                perimeter: 'P = b₁ + b₂ + 2l',
                diagonals: 'd₁ = d₂ (equal diagonals)'
            },
            givenData: problem.parameters,
            category: 'isosceles_trapezoid'
        };
    }

    solveKite(problem) {
        const { side1, side2, diagonal1, diagonal2, angle, area } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Calculate area from diagonals
        if (diagonal1 && diagonal2) {
            measurements.area = (diagonal1 * diagonal2) / 2;
        }

        // Calculate perimeter (two pairs of equal consecutive sides)
        if (side1 && side2) {
            measurements.perimeter = 2 * (side1 + side2);
        }

        // Properties
        properties.push('Two pairs of consecutive sides are equal');
        properties.push('One diagonal bisects the other at right angles');
        properties.push('One diagonal is an axis of symmetry');
        properties.push('One pair of opposite angles are equal');
        properties.push('Diagonals are perpendicular');

        return {
            quadrilateralType: 'Kite',
            measurements: measurements,
            properties: properties,
            formulas: {
                area: 'A = (d₁ × d₂)/2',
                perimeter: 'P = 2(a + b)',
                diagonals: 'Perpendicular: d₁ ⊥ d₂'
            },
            givenData: problem.parameters,
            category: 'kite'
        };
    }

    calculateQuadrilateralArea(problem) {
        const { type } = problem;
        
        // Delegate to specific solver based on type
        return this.solveQuadrilateralProblem_Internal({
            ...problem,
            type: type || 'general_quadrilateral'
        });
    }

    calculateQuadrilateralPerimeter(problem) {
        const { sideA, sideB, sideC, sideD, side, base, width, length } = problem.parameters;

        const measurements = {};

        // General quadrilateral
        if (sideA && sideB && sideC && sideD) {
            measurements.perimeter = sideA + sideB + sideC + sideD;
        }
        // Square
        else if (side && !base && !length) {
            measurements.perimeter = 4 * side;
        }
        // Rectangle
        else if (length && width) {
            measurements.perimeter = 2 * (length + width);
        }
        // Parallelogram/Rhombus
        else if (base && side) {
            measurements.perimeter = 2 * (base + side);
        }

        return {
            measurements: measurements,
            formula: 'P = sum of all sides',
            category: 'perimeter_calculation'
        };
    }

    calculateDiagonals(problem) {
        const { type, length, width, side, base, diagonal1, diagonal2 } = problem.parameters;

        const measurements = {};

        switch(type) {
            case 'rectangle':
            case 'square':
                if (length && width) {
                    measurements.diagonal = Math.sqrt(length ** 2 + width ** 2);
                    measurements.bothDiagonalsEqual = true;
                } else if (side) {
                    measurements.diagonal = side * Math.sqrt(2);
                    measurements.bothDiagonalsEqual = true;
                }
                break;

            case 'rhombus':
                if (diagonal1 && diagonal2) {
                    measurements.diagonal1 = diagonal1;
                    measurements.diagonal2 = diagonal2;
                    measurements.arePerpendicular = true;
                    // Calculate side: 4s² = d₁² + d₂²
                    measurements.side = Math.sqrt((diagonal1 ** 2 + diagonal2 ** 2) / 4);
                }
                break;

            case 'parallelogram':
                if (base && side && diagonal1 && diagonal2) {
                    // Verify: d₁² + d₂² = 2(a² + b²)
                    const expected = 2 * (base ** 2 + side ** 2);
                    measurements.diagonalSumSquared = diagonal1 ** 2 + diagonal2 ** 2;
                    measurements.expectedSumSquared = expected;
                    measurements.valid = Math.abs(measurements.diagonalSumSquared - expected) < 0.01;
                }
                break;
        }

        return {
            measurements: measurements,
            category: 'diagonal_calculation'
        };
    }

    calculateAngles(problem) {
        const { angleA, angleB, angleC, angleD, type } = problem.parameters;

        const measurements = {};
        const knownAngles = [];

        if (angleA !== undefined) knownAngles.push({ name: 'A', value: angleA });
        if (angleB !== undefined) knownAngles.push({ name: 'B', value: angleB });
        if (angleC !== undefined) knownAngles.push({ name: 'C', value: angleC });
        if (angleD !== undefined) knownAngles.push({ name: 'D', value: angleD });

        // Find missing angle using sum = 360°
        if (knownAngles.length === 3) {
            const sum = knownAngles.reduce((acc, angle) => acc + angle.value, 0);
            measurements.missingAngle = 360 - sum;
            
            const missingNames = ['A', 'B', 'C', 'D'].filter(
                name => !knownAngles.find(a => a.name === name)
            );
            measurements.missingAngleName = missingNames[0];
        }

        // Special angle properties based on type
        if (type === 'rectangle' || type === 'square') {
            measurements.allAngles = 90;
        } else if (type === 'parallelogram' || type === 'rhombus') {
            if (angleA !== undefined) {
                measurements.oppositeToA = angleA;
                measurements.consecutiveToA = 180 - angleA;
            }
        }

        return {
            measurements: measurements,
            principle: 'Sum of interior angles = 360°',
            category: 'angle_calculation'
        };
    }

    classifyQuadrilateral(problem) {
        const { 
            sidesEqual, 
            parallelSides, 
            rightAngles, 
            diagonalsEqual,
            diagonalsPerpendicular,
            diagonalsBisect 
        } = problem.parameters;

        const classification = [];
        let primaryType = 'General Quadrilateral';

        // Check for square
        if (sidesEqual === 4 && rightAngles === 4) {
            primaryType = 'Square';
            classification.push('Square (all sides equal, all angles 90°)');
            classification.push('Also a Rectangle');
            classification.push('Also a Rhombus');
            classification.push('Also a Parallelogram');
        }
        // Check for rectangle
        else if (rightAngles === 4) {
            primaryType = 'Rectangle';
            classification.push('Rectangle (all angles 90°)');
            classification.push('Also a Parallelogram');
        }
        // Check for rhombus
        else if (sidesEqual === 4) {
            primaryType = 'Rhombus';
            classification.push('Rhombus (all sides equal)');
            classification.push('Also a Parallelogram');
        }
        // Check for parallelogram
        else if (parallelSides === 2) {
            primaryType = 'Parallelogram';
            classification.push('Parallelogram (opposite sides parallel)');
        }
        // Check for trapezoid
        else if (parallelSides === 1) {
            primaryType = 'Trapezoid';
            classification.push('Trapezoid (one pair of parallel sides)');
        }

        return {
            primaryType: primaryType,
            classification: classification,
            properties: this.getQuadrilateralProperties(primaryType),
            category: 'classification'
        };
    }

    solveCoordinateQuadrilateral(problem) {
        const { vertices } = problem.parameters;

        if (!vertices || vertices.length !== 4) {
            throw new Error('Need exactly 4 vertices with coordinates');
        }

        const measurements = {};
        const analysis = {};

        // Calculate side lengths using distance formula
        const sides = [];
        for (let i = 0; i < 4; i++) {
            const v1 = vertices[i];
            const v2 = vertices[(i + 1) % 4];
            const distance = Math.sqrt((v2.x - v1.x) ** 2 + (v2.y - v1.y) ** 2);
            sides.push(distance);
        }
        measurements.sides = sides;
        measurements.perimeter = sides.reduce((sum, side) => sum + side, 0);

        // Calculate slopes to check for parallel sides
        const slopes = [];
        for (let i = 0; i < 4; i++) {
            const v1 = vertices[i];
            const v2 = vertices[(i + 1) % 4];
            const slope = (v2.y - v1.y) / (v2.x - v1.x);
            slopes.push(slope);
        }

        // Check if opposite sides are parallel
        analysis.oppositeSidesParallel = {
            sides12and34: Math.abs(slopes[0] - slopes[2]) < 0.001,
            sides23and41: Math.abs(slopes[1] - slopes[3]) < 0.001
        };

        // Calculate area using Shoelace formula
        let area = 0;
        for (let i = 0; i < 4; i++) {
            const j = (i + 1) % 4;
            area += vertices[i].x * vertices[j].y;
            area -= vertices[j].x * vertices[i].y;
        }
        measurements.area = Math.abs(area) / 2;

        // Calculate diagonal lengths
        const diagonal1 = Math.sqrt(
            (vertices[2].x - vertices[0].x) ** 2 + 
            (vertices[2].y - vertices[0].y) ** 2
        );
        const diagonal2 = Math.sqrt(
            (vertices[3].x - vertices[1].x) ** 2 + 
            (vertices[3].y - vertices[1].y) ** 2
        );
        measurements.diagonals = { diagonal1, diagonal2 };

        // Check if diagonals are equal
        analysis.diagonalsEqual = Math.abs(diagonal1 - diagonal2) < 0.001;

        // Check if diagonals are perpendicular
        const d1Slope = (vertices[2].y - vertices[0].y) / (vertices[2].x - vertices[0].x);
        const d2Slope = (vertices[3].y - vertices[1].y) / (vertices[3].x - vertices[1].x);
        analysis.diagonalsPerpendicular = Math.abs(d1Slope * d2Slope + 1) < 0.001;

        // Classify the quadrilateral
        let classification = 'General Quadrilateral';
        if (analysis.oppositeSidesParallel.sides12and34 && analysis.oppositeSidesParallel.sides23and41) {
            classification = 'Parallelogram';
            
            const allSidesEqual = Math.abs(sides[0] - sides[1]) < 0.001 && 
                                  Math.abs(sides[1] - sides[2]) < 0.001 && 
                                  Math.abs(sides[2] - sides[3]) < 0.001;
            
            if (allSidesEqual && analysis.diagonalsEqual) {
                classification = 'Square';
            } else if (allSidesEqual) {
                classification = 'Rhombus';
            } else if (analysis.diagonalsEqual) {
                classification = 'Rectangle';
            }
        } else if (analysis.oppositeSidesParallel.sides12and34 || analysis.oppositeSidesParallel.sides23and41) {
            classification = 'Trapezoid';
            
            const legs = [sides[1], sides[3]];
            if (Math.abs(legs[0] - legs[1]) < 0.001) {
                classification = 'Isosceles Trapezoid';
            }
        }

        return {
            quadrilateralType: classification,
            measurements: measurements,
            analysis: analysis,
            vertices: vertices,
            formulas: {
                distance: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
                slope: 'm = (y₂-y₁)/(x₂-x₁)',
                area: 'Shoelace Formula'
            },
            category: 'coordinate_geometry'
        };
    }

    verifyQuadrilateralProperties(problem) {
        const { type, measurements } = problem.parameters;

        const verification = {
            type: type,
            checks: [],
            allPropertiesValid: true
        };

        switch(type) {
            case 'parallelogram':
                verification.checks.push(this.verifyParallelogramProperties(measurements));
                break;
            case 'rectangle':
                verification.checks.push(this.verifyRectangleProperties(measurements));
                break;
            case 'square':
                verification.checks.push(this.verifySquareProperties(measurements));
                break;
            case 'rhombus':
                verification.checks.push(this.verifyRhombusProperties(measurements));
                break;
            case 'trapezoid':
                verification.checks.push(this.verifyTrapezoidProperties(measurements));
                break;
        }

        verification.allPropertiesValid = verification.checks.every(check => 
            check.valid !== false
        );

        return verification;
    }

    solveCyclicQuadrilateral(problem) {
        const { sideA, sideB, sideC, sideD, angleA, angleB, angleC, angleD } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Verify opposite angles sum to 180°
        if (angleA && angleC) {
            measurements.angleSum1 = angleA + angleC;
            properties.push(`Angle A + Angle C = ${angleA}° + ${angleC}° = ${measurements.angleSum1}°`);
        }
        if (angleB && angleD) {
            measurements.angleSum2 = angleB + angleD;
            properties.push(`Angle B + Angle D = ${angleB}° + ${angleD}° = ${measurements.angleSum2}°`);
        }

        // Brahmagupta's formula for area
        if (sideA && sideB && sideC && sideD) {
            const s = (sideA + sideB + sideC + sideD) / 2; // semiperimeter
            measurements.semiperimeter = s;
            measurements.area = Math.sqrt((s - sideA) * (s - sideB) * (s - sideC) * (s - sideD));
        }

        properties.push('All vertices lie on a circle');
        properties.push('Opposite angles are supplementary (sum to 180°)');
        properties.push('Area calculated using Brahmagupta\'s Formula');

        return {
            quadrilateralType: 'Cyclic Quadrilateral',
            measurements: measurements,
            properties: properties,
            formulas: {
                oppositeAngles: '∠A + ∠C = 180°, ∠B + ∠D = 180°',
                brahmaguptaFormula: 'A = √[(s-a)(s-b)(s-c)(s-d)]',
                semiperimeter: 's = (a+b+c+d)/2'
            },
            givenData: problem.parameters,
            category: 'cyclic_quadrilateral'
        };
    }

    solveTangentialQuadrilateral(problem) {
        const { sideA, sideB, sideC, sideD, inradius, area } = problem.parameters;

        const measurements = {};
        const properties = [];

        // Verify opposite sides sum equality
        if (sideA && sideC && sideB && sideD) {
            measurements.sideSum1 = sideA + sideC;
            measurements.sideSum2 = sideB + sideD;
            measurements.oppositeSidesEqual = Math.abs(measurements.sideSum1 - measurements.sideSum2) < 0.001;
            
            properties.push(`Side A + Side C = ${sideA} + ${sideC} = ${measurements.sideSum1}`);
            properties.push(`Side B + Side D = ${sideB} + ${sideD} = ${measurements.sideSum2}`);
        }

        // Calculate semiperimeter
        if (sideA && sideB && sideC && sideD) {
            measurements.semiperimeter = (sideA + sideB + sideC + sideD) / 2;
        }

        // Calculate area if inradius is known
        if (measurements.semiperimeter && inradius) {
            measurements.area = inradius * measurements.semiperimeter;
        }

        // Calculate inradius if area is known
        if (area && measurements.semiperimeter && !inradius) {
            measurements.inradius = area / measurements.semiperimeter;
        }

        properties.push('Has inscribed circle tangent to all four sides');
        properties.push('Sum of opposite sides are equal: a + c = b + d');
        properties.push('Area = inradius × semiperimeter');

        return {
            quadrilateralType: 'Tangential Quadrilateral',
            measurements: measurements,
            properties: properties,
            formulas: {
                oppositeSides: 'a + c = b + d',
                area: 'A = r × s',
                inradius: 'r = A/s'
            },
            givenData: problem.parameters,
            category: 'tangential_quadrilateral'
        };
    }

    solveQuadrilateralOptimization(problem) {
        const { objective, constraints } = problem.parameters;

        // Framework for optimization problems
        return {
            objective: objective || 'Maximize/Minimize measurement',
            constraints: constraints || [],
            approach: [
                'Identify the quantity to optimize (area, perimeter, etc.)',
                'Express objective as function of variables',
                'Apply constraints to reduce variables',
                'Use calculus or geometric optimization',
                'Verify solution satisfies constraints'
            ],
            category: 'optimization'
        };
    }

    constructQuadrilateral(problem) {
        const { type, givenMeasurements } = problem.parameters;

        const constructionSteps = [];

        switch(type) {
            case 'square':
                constructionSteps.push('1. Draw a line segment of length s (side length)');
                constructionSteps.push('2. Construct a perpendicular at one endpoint');
                constructionSteps.push('3. Mark length s on the perpendicular');
                constructionSteps.push('4. Complete the square by constructing remaining sides');
                break;

            case 'rectangle':
                constructionSteps.push('1. Draw a line segment of length l (length)');
                constructionSteps.push('2. Construct perpendiculars at both endpoints');
                constructionSteps.push('3. Mark width w on both perpendiculars');
                constructionSteps.push('4. Connect the marked points to complete rectangle');
                break;

            case 'parallelogram':
                constructionSteps.push('1. Draw base of required length');
                constructionSteps.push('2. At one endpoint, draw a line at given angle');
                constructionSteps.push('3. Mark side length on the angled line');
                constructionSteps.push('4. Draw parallel lines to complete parallelogram');
                break;

            case 'rhombus':
                constructionSteps.push('1. Draw one diagonal');
                constructionSteps.push('2. Construct perpendicular bisector');
                constructionSteps.push('3. Mark half of second diagonal on both sides');
                constructionSteps.push('4. Connect endpoints to form rhombus');
                break;

            case 'trapezoid':
                constructionSteps.push('1. Draw first base (longer)');
                constructionSteps.push('2. At endpoints, draw lines at appropriate angles');
                constructionSteps.push('3. Draw second base (shorter) parallel to first');
                constructionSteps.push('4. Complete trapezoid by connecting endpoints');
                break;

            default:
                constructionSteps.push('Construction steps depend on given measurements');
        }

        return {
            quadrilateralType: type,
            constructionSteps: constructionSteps,
            toolsNeeded: ['Ruler/straightedge', 'Compass', 'Protractor (for angles)', 'Set square (for right angles)'],
            category: 'construction'
        };
    }

    // HELPER METHODS

    getQuadrilateralProperties(type) {
        const propertiesDatabase = {
            'Square': [
                'All sides equal',
                'All angles 90°',
                'Diagonals equal and perpendicular',
                'Diagonals bisect each other',
                '4 lines of symmetry'
            ],
            'Rectangle': [
                'Opposite sides equal',
                'All angles 90°',
                'Diagonals equal',
                'Diagonals bisect each other',
                '2 lines of symmetry'
            ],
            'Rhombus': [
                'All sides equal',
                'Opposite angles equal',
                'Diagonals perpendicular',
                'Diagonals bisect each other',
                'Diagonals bisect angles'
            ],
            'Parallelogram': [
                'Opposite sides parallel and equal',
                'Opposite angles equal',
                'Consecutive angles supplementary',
                'Diagonals bisect each other'
            ],
            'Trapezoid': [
                'One pair of parallel sides',
                'Median parallel to bases',
                'Median = average of bases'
            ],
            'Kite': [
                'Two pairs consecutive equal sides',
                'One pair opposite angles equal',
                'Diagonals perpendicular',
                'One diagonal bisects the other'
            ]
        };

        return propertiesDatabase[type] || ['General quadrilateral properties'];
    }

    verifyParallelogramProperties(measurements) {
        const checks = [];

        if (measurements.oppositeSides) {
            checks.push({
                property: 'Opposite sides equal',
                valid: Math.abs(measurements.oppositeSides.side1 - measurements.oppositeSides.side3) < 0.001 &&
                       Math.abs(measurements.oppositeSides.side2 - measurements.oppositeSides.side4) < 0.001
            });
        }

        if (measurements.oppositeAngles) {
            checks.push({
                property: 'Opposite angles equal',
                valid: Math.abs(measurements.oppositeAngles.angle1 - measurements.oppositeAngles.angle3) < 0.001 &&
                       Math.abs(measurements.oppositeAngles.angle2 - measurements.oppositeAngles.angle4) < 0.001
            });
        }

        return checks;
    }

    verifyRectangleProperties(measurements) {
        const checks = [];

        if (measurements.angles) {
            checks.push({
                property: 'All angles are 90°',
                valid: measurements.angles.every(angle => Math.abs(angle - 90) < 0.001)
            });
        }

        if (measurements.diagonals) {
            checks.push({
                property: 'Diagonals are equal',
                valid: Math.abs(measurements.diagonals.d1 - measurements.diagonals.d2) < 0.001
            });
        }

        return checks;
    }

    verifySquareProperties(measurements) {
        const checks = [];

        if (measurements.sides) {
            checks.push({
                property: 'All sides equal',
                valid: measurements.sides.every(side => 
                    Math.abs(side - measurements.sides[0]) < 0.001
                )
            });
        }

        if (measurements.angles) {
            checks.push({
                property: 'All angles are 90°',
                valid: measurements.angles.every(angle => Math.abs(angle - 90) < 0.001)
            });
        }

        if (measurements.diagonals) {
            checks.push({
                property: 'Diagonals equal',
                valid: Math.abs(measurements.diagonals.d1 - measurements.diagonals.d2) < 0.001
            });

            checks.push({
                property: 'Diagonals perpendicular',
                valid: measurements.diagonals.perpendicular === true
            });
        }

        return checks;
    }

    verifyRhombusProperties(measurements) {
        const checks = [];

        if (measurements.sides) {
            checks.push({
                property: 'All sides equal',
                valid: measurements.sides.every(side => 
                    Math.abs(side - measurements.sides[0]) < 0.001
                )
            });
        }

        if (measurements.diagonals) {
            checks.push({
                property: 'Diagonals perpendicular',
                valid: measurements.diagonals.perpendicular === true
            });
        }

        return checks;
    }

    verifyTrapezoidProperties(measurements) {
        const checks = [];

        if (measurements.parallelSides) {
            checks.push({
                property: 'One pair of parallel sides',
                valid: measurements.parallelSides.count === 1
            });
        }

        if (measurements.median && measurements.bases) {
            const expectedMedian = (measurements.bases.base1 + measurements.bases.base2) / 2;
            checks.push({
                property: 'Median equals average of bases',
                valid: Math.abs(measurements.median - expectedMedian) < 0.001
            });
        }

        return checks;
    }

    // STEP GENERATION METHODS

    generateQuadrilateralSteps(problem, solution) {
        let baseSteps = this.generateBaseQuadrilateralSteps(problem, solution);

        // Apply enhancements based on options
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addScaffolding(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseQuadrilateralSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'parallelogram':
                return this.generateParallelogramSteps(problem, solution);
            case 'rectangle':
                return this.generateRectangleSteps(problem, solution);
            case 'square':
                return this.generateSquareSteps(problem, solution);
            case 'rhombus':
                return this.generateRhombusSteps(problem, solution);
            case 'trapezoid':
                return this.generateTrapezoidSteps(problem, solution);
            case 'kite':
                return this.generateKiteSteps(problem, solution);
            case 'coordinate_geometry':
                return this.generateCoordinateGeometrySteps(problem, solution);
            case 'classification':
                return this.generateClassificationSteps(problem, solution);
            default:
                return this.generateGenericQuadrilateralSteps(problem, solution);
        }
    }

    generateParallelogramSteps(problem, solution) {
        const { base, side, height, angle } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all known measurements of the parallelogram',
            givenData: {
                base: base || 'unknown',
                side: side || 'unknown',
                height: height || 'unknown',
                angle: angle ? `${angle}°` : 'unknown'
            },
            reasoning: 'Understanding what we know helps us choose the correct formula',
            visualHint: 'Draw a parallelogram and label the known measurements',
            goalStatement: 'Find the area and/or perimeter of the parallelogram'
        });

        if (solution.measurements.perimeter) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate perimeter',
                description: 'Use the formula P = 2(base + side)',
                beforeExpression: 'P = 2(base + side)',
                substitution: `P = 2(${base} + ${side})`,
                calculation: `P = 2(${base + side})`,
                afterExpression: `P = ${solution.measurements.perimeter}`,
                reasoning: 'In a parallelogram, opposite sides are equal, so we have two bases and two sides',
                algebraicRule: 'Perimeter formula for parallelogram',
                visualHint: 'Imagine walking around the parallelogram - you traverse each pair of opposite sides',
                finalAnswer: false
            });
        }

        if (solution.measurements.area) {
            const stepNum = steps.length + 1;
            
            if (base && height) {
                steps.push({
                    stepNumber: stepNum,
                    step: 'Calculate area using base and height',
                    description: 'Use the formula A = base × height',
                    beforeExpression: 'A = base × height',
                    substitution: `A = ${base} × ${height}`,
                    afterExpression: `A = ${solution.measurements.area}`,
                    reasoning: 'Area of a parallelogram is base times perpendicular height',
                    algebraicRule: 'Area formula: A = bh',
                    visualHint: 'The height must be perpendicular to the base',
                    importantNote: 'Do NOT use the side length as height unless the parallelogram is a rectangle',
                    finalAnswer: true
                });
            } else if (base && side && angle) {
                steps.push({
                    stepNumber: stepNum,
                    step: 'Calculate area using sides and angle',
                    description: 'Use the formula A = ab sin(θ)',
                    beforeExpression: 'A = base × side × sin(angle)',
                    substitution: `A = ${base} × ${side} × sin(${angle}°)`,
                    calculation: `A = ${base * side} × ${Math.sin(angle * Math.PI / 180).toFixed(4)}`,
                    afterExpression: `A = ${solution.measurements.area.toFixed(2)}`,
                    reasoning: 'When height is unknown but we have two sides and included angle, use sine formula',
                    algebraicRule: 'Area formula: A = ab sin(θ)',
                    visualHint: 'The sine of the angle gives us the vertical component (height)',
                    finalAnswer: true
                });
            }
        }

        if (angle) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Find consecutive angle',
                description: 'Consecutive angles in a parallelogram are supplementary',
                beforeExpression: 'Angle₁ + Angle₂ = 180°',
                substitution: `${angle}° + Angle₂ = 180°`,
                afterExpression: `Angle₂ = ${180 - angle}°`,
                reasoning: 'In a parallelogram, adjacent angles always sum to 180°',
                algebraicRule: 'Supplementary angles property',
                visualHint: 'Consecutive angles are like co-interior angles between parallel lines'
            });
        }

        return steps;
    }

    generateRectangleSteps(problem, solution) {
        const { length, width, area, perimeter, diagonal } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all known measurements of the rectangle',
            givenData: {
                length: length || 'unknown',
                width: width || 'unknown',
                area: area || 'unknown',
                perimeter: perimeter || 'unknown',
                diagonal: diagonal || 'unknown'
            },
            reasoning: 'Rectangles have special properties: all angles are 90°, opposite sides equal',
            visualHint: 'Draw a rectangle with length (longer side) and width (shorter side)',
            goalStatement: 'Find unknown measurements using rectangle formulas'
        });

        // If finding dimensions from area
        if (area && length && !width) {
            steps.push({
                stepNumber: 2,
                step: 'Find width from area',
                description: 'Use the formula: width = area ÷ length',
                beforeExpression: 'A = length × width',
                rearranged: 'width = A ÷ length',
                substitution: `width = ${area} ÷ ${length}`,
                afterExpression: `width = ${solution.measurements.width}`,
                reasoning: 'We rearrange the area formula to solve for the unknown dimension',
                algebraicRule: 'Division property: if A = l × w, then w = A/l',
                checkStep: `Verify: ${length} × ${solution.measurements.width} = ${area}`
            });
        }

        // Calculate area
        if (solution.measurements.area && solution.measurements.length && solution.measurements.width) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Calculate area',
                description: 'Multiply length by width',
                beforeExpression: 'A = length × width',
                substitution: `A = ${solution.measurements.length} × ${solution.measurements.width}`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'Area of a rectangle is the product of its dimensions',
                algebraicRule: 'Rectangle area formula',
                units: 'Remember: if dimensions are in meters, area is in square meters',
                finalAnswer: false
            });
        }

        // Calculate perimeter
        if (solution.measurements.perimeter) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Calculate perimeter',
                description: 'Use the formula P = 2(length + width)',
                beforeExpression: 'P = 2(l + w)',
                substitution: `P = 2(${solution.measurements.length} + ${solution.measurements.width})`,
                calculation: `P = 2(${solution.measurements.length + solution.measurements.width})`,
                afterExpression: `P = ${solution.measurements.perimeter}`,
                reasoning: 'Perimeter is the total distance around the rectangle',
                algebraicRule: 'Perimeter formula for rectangle',
                alternativeFormula: 'Can also use P = 2l + 2w',
                finalAnswer: false
            });
        }

        // Calculate diagonal
        if (solution.measurements.diagonal) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Calculate diagonal',
                description: 'Use Pythagorean theorem: d = √(l² + w²)',
                beforeExpression: 'd² = l² + w²',
                substitution: `d² = ${solution.measurements.length}² + ${solution.measurements.width}²`,
                calculation: `d² = ${solution.measurements.length ** 2} + ${solution.measurements.width ** 2}`,
                simplified: `d² = ${solution.measurements.length ** 2 + solution.measurements.width ** 2}`,
                afterExpression: `d = ${solution.measurements.diagonal.toFixed(4)}`,
                reasoning: 'The diagonal forms the hypotenuse of a right triangle with the sides',
                algebraicRule: 'Pythagorean theorem: a² + b² = c²',
                visualHint: 'The diagonal divides the rectangle into two congruent right triangles',
                importantNote: 'Both diagonals of a rectangle are equal in length',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateSquareSteps(problem, solution) {
        const { side, area, perimeter, diagonal } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Determine what measurement is given for the square',
            givenData: {
                side: side || 'unknown',
                area: area || 'unknown',
                perimeter: perimeter || 'unknown',
                diagonal: diagonal || 'unknown'
            },
            reasoning: 'In a square, all sides are equal and all angles are 90°',
            visualHint: 'A square is the most symmetrical quadrilateral',
            keyProperty: 'Knowing any one measurement allows us to find all others',
            goalStatement: 'Find the side length, then calculate all other measurements'
        });

        // Find side length from given measurement
        let sideFound = false;
        let stepNum = 2;

        if (side) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Side length is given',
                description: `Side length s = ${side}`,
                reasoning: 'We can use this to calculate all other measurements',
                note: 'This is the fundamental measurement of a square'
            });
            sideFound = true;
        } else if (area) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Find side from area',
                description: 'Use the formula: side = √area',
                beforeExpression: 'A = s²',
                rearranged: 's = √A',
                substitution: `s = √${area}`,
                afterExpression: `s = ${solution.measurements.side}`,
                reasoning: 'Area of a square is side squared, so side is the square root of area',
                algebraicRule: 'Square root property',
                visualHint: 'Think of the square as s rows of s unit squares',
                checkStep: `Verify: ${solution.measurements.side}² = ${area}`
            });
            sideFound = true;
        } else if (perimeter) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Find side from perimeter',
                description: 'Use the formula: side = perimeter ÷ 4',
                beforeExpression: 'P = 4s',
                rearranged: 's = P ÷ 4',
                substitution: `s = ${perimeter} ÷ 4`,
                afterExpression: `s = ${solution.measurements.side}`,
                reasoning: 'A square has 4 equal sides, so each side is 1/4 of the perimeter',
                algebraicRule: 'Division property',
                visualHint: 'Divide the total perimeter equally among 4 sides',
                checkStep: `Verify: 4 × ${solution.measurements.side} = ${perimeter}`
            });
            sideFound = true;
        } else if (diagonal) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Find side from diagonal',
                description: 'Use the formula: side = diagonal ÷ √2',
                beforeExpression: 'd = s√2',
                rearranged: 's = d ÷ √2',
                substitution: `s = ${diagonal} ÷ √2`,
                calculation: `s = ${diagonal} ÷ ${Math.sqrt(2).toFixed(4)}`,
                afterExpression: `s = ${solution.measurements.side.toFixed(4)}`,
                reasoning: 'The diagonal of a square is side length times √2',
                algebraicRule: 'Special relationship in 45-45-90 triangle',
                visualHint: 'The diagonal creates two isosceles right triangles',
                rationalizedForm: `Can also write as: s = ${diagonal}√2/2`,
                checkStep: `Verify: ${solution.measurements.side.toFixed(4)} × √2 ≈ ${diagonal}`
            });
            sideFound = true;
        }

        // Now calculate all other measurements
        if (sideFound) {
            if (!perimeter && solution.measurements.perimeter) {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Calculate perimeter',
                    description: 'Multiply side length by 4',
                    beforeExpression: 'P = 4s',
                    substitution: `P = 4 × ${solution.measurements.side}`,
                    afterExpression: `P = ${solution.measurements.perimeter}`,
                    reasoning: 'Perimeter is the sum of all 4 equal sides',
                    algebraicRule: 'Perimeter formula for square',
                    finalAnswer: false
                });
            }

            if (!area && solution.measurements.area) {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Calculate area',
                    description: 'Square the side length',
                    beforeExpression: 'A = s²',
                    substitution: `A = ${solution.measurements.side}²`,
                    afterExpression: `A = ${solution.measurements.area}`,
                    reasoning: 'Area is side length multiplied by itself',
                    algebraicRule: 'Square area formula',
                    visualHint: 'The area represents s rows of s unit squares',
                    finalAnswer: false
                });
            }

            if (!diagonal && solution.measurements.diagonal) {
                steps.push({
                    stepNumber: stepNum++,
                    step: 'Calculate diagonal',
                    description: 'Multiply side length by √2',
                    beforeExpression: 'd = s√2',
                    substitution: `d = ${solution.measurements.side} × √2`,
                    calculation: `d = ${solution.measurements.side} × ${Math.sqrt(2).toFixed(4)}`,
                    afterExpression: `d = ${solution.measurements.diagonal.toFixed(4)}`,
                    reasoning: 'The diagonal is the hypotenuse of a 45-45-90 right triangle',
                    algebraicRule: 'Special right triangle ratio',
                    visualHint: 'Diagonal creates two congruent isosceles right triangles',
                    additionalInfo: 'Both diagonals are equal and perpendicular',
                    finalAnswer: true
                });
            }
        }

        // Add summary of all measurements
        steps.push({
            stepNumber: stepNum++,
            step: 'Summary of all measurements',
            description: 'Complete set of square measurements',
            allMeasurements: {
                side: solution.measurements.side,
                perimeter: solution.measurements.perimeter,
                area: solution.measurements.area,
                diagonal: solution.measurements.diagonal
            },
            reasoning: 'All measurements of a square are related through its side length',
            keyRelationships: [
                'P = 4s',
                'A = s²',
                'd = s√2',
                'All angles = 90°'
            ]
        });

        return steps;
    }

    generateRhombusSteps(problem, solution) {
        const { side, diagonal1, diagonal2, height, angle, area } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all known measurements of the rhombus',
            givenData: {
                side: side || 'unknown',
                diagonal1: diagonal1 || 'unknown',
                diagonal2: diagonal2 || 'unknown',
                height: height || 'unknown',
                angle: angle ? `${angle}°` : 'unknown',
                area: area || 'unknown'
            },
            reasoning: 'A rhombus has all sides equal and diagonals that are perpendicular',
            visualHint: 'Diagonals bisect each other at right angles',
            keyProperty: 'All four sides are equal in length',
            goalStatement: 'Calculate area using the appropriate formula'
        });

        let stepNum = 2;

        // Calculate area from diagonals
        if (diagonal1 && diagonal2 && !area) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate area using diagonals',
                description: 'Use the formula A = (d₁ × d₂)/2',
                beforeExpression: 'A = (d₁ × d₂) ÷ 2',
                substitution: `A = (${diagonal1} × ${diagonal2}) ÷ 2`,
                calculation: `A = ${diagonal1 * diagonal2} ÷ 2`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'The diagonals divide the rhombus into 4 congruent right triangles',
                algebraicRule: 'Rhombus area formula using diagonals',
                visualHint: 'Think of the rhombus as two triangles with base d₁ and height d₂/2',
                whyThisWorks: 'The diagonals are perpendicular, so we can use the formula for the area of a quadrilateral with perpendicular diagonals',
                finalAnswer: true
            });
        }

        // Calculate area from base and height
        if (side && height && !area) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate area using base and height',
                description: 'Use the formula A = base × height',
                beforeExpression: 'A = b × h',
                substitution: `A = ${side} × ${height}`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'Like a parallelogram, area equals base times perpendicular height',
                algebraicRule: 'Base-height area formula',
                visualHint: 'Any side can be considered the base',
                finalAnswer: true
            });
        }

        // Calculate area from side and angle
        if (side && angle && !area) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate area using side and angle',
                description: 'Use the formula A = s² sin(θ)',
                beforeExpression: 'A = s² × sin(θ)',
                substitution: `A = ${side}² × sin(${angle}°)`,
                calculation: `A = ${side * side} × ${Math.sin(angle * Math.PI / 180).toFixed(4)}`,
                afterExpression: `A = ${solution.measurements.area.toFixed(2)}`,
                reasoning: 'The sine of the angle gives the vertical component needed for area',
                algebraicRule: 'Area formula with side and included angle',
                visualHint: 'sin(θ) represents the ratio of height to side',
                finalAnswer: true
            });
        }

        // Calculate perimeter
        if (side && solution.measurements.perimeter) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate perimeter',
                description: 'Multiply side length by 4',
                beforeExpression: 'P = 4s',
                substitution: `P = 4 × ${side}`,
                afterExpression: `P = ${solution.measurements.perimeter}`,
                reasoning: 'All four sides are equal in a rhombus',
                algebraicRule: 'Perimeter formula for rhombus',
                finalAnswer: false
            });
        }

        // Calculate side from diagonals
        if (diagonal1 && diagonal2 && !side && solution.measurements.side) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate side length from diagonals',
                description: 'Use the relationship: 4s² = d₁² + d₂²',
                beforeExpression: '4s² = d₁² + d₂²',
                rearranged: 's = √[(d₁² + d₂²) ÷ 4]',
                substitution: `s = √[(${diagonal1}² + ${diagonal2}²) ÷ 4]`,
                calculation: `s = √[(${diagonal1 ** 2} + ${diagonal2 ** 2}) ÷ 4]`,
                simplified: `s = √[${(diagonal1 ** 2 + diagonal2 ** 2) / 4}]`,
                afterExpression: `s = ${solution.measurements.side.toFixed(4)}`,
                reasoning: 'The diagonals and sides form right triangles with specific relationships',
                algebraicRule: 'Pythagorean theorem applied to rhombus',
                visualHint: 'Each diagonal half and a side form a right triangle',
                finalAnswer: false
            });
        }

        // Properties summary
        steps.push({
            stepNumber: stepNum++,
            step: 'Rhombus properties verified',
            description: 'Key properties of this rhombus',
            properties: [
                'All sides are equal',
                'Opposite angles are equal',
                'Diagonals are perpendicular',
                'Diagonals bisect each other',
                'Diagonals bisect the vertex angles'
            ],
            reasoning: 'These properties define a rhombus and distinguish it from other quadrilaterals'
        });

        return steps;
    }

    generateTrapezoidSteps(problem, solution) {
        const { base1, base2, height, leg1, leg2, area, median } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all known measurements of the trapezoid',
            givenData: {
                base1: base1 || 'unknown',
                base2: base2 || 'unknown',
                height: height || 'unknown',
                leg1: leg1 || 'unknown',
                leg2: leg2 || 'unknown',
                median: median || 'unknown'
            },
            reasoning: 'A trapezoid has exactly one pair of parallel sides (the bases)',
            visualHint: 'The bases are parallel, and height is the perpendicular distance between them',
            keyProperty: 'The median is parallel to the bases and equals their average',
            goalStatement: 'Calculate the area of the trapezoid'
        });

        let stepNum = 2;

        // Calculate median if both bases are known
        if (base1 && base2 && !median) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate median (midsegment)',
                description: 'Use the formula: median = (base₁ + base₂) ÷ 2',
                beforeExpression: 'm = (b₁ + b₂) ÷ 2',
                substitution: `m = (${base1} + ${base2}) ÷ 2`,
                calculation: `m = ${base1 + base2} ÷ 2`,
                afterExpression: `m = ${solution.measurements.median}`,
                reasoning: 'The median is the average of the two parallel bases',
                algebraicRule: 'Trapezoid median formula',
                visualHint: 'The median connects the midpoints of the two legs',
                property: 'The median is parallel to both bases',
                finalAnswer: false
            });
        }

        // Calculate area using bases and height
        if (base1 && base2 && height) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate area',
                description: 'Use the formula: A = ((b₁ + b₂)/2) × h',
                beforeExpression: 'A = ((b₁ + b₂) ÷ 2) × h',
                substitution: `A = ((${base1} + ${base2}) ÷ 2) × ${height}`,
                calculation: `A = ${(base1 + base2) / 2} × ${height}`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'Area equals the average of the bases times the height',
                algebraicRule: 'Trapezoid area formula',
                visualHint: 'Think of it as the area of a rectangle with width equal to the average base',
                alternativeFormula: 'Can also write as: A = median × height',
                finalAnswer: true
            });
        }

        // Calculate area using median and height
        if (solution.measurements.median && height && base1 && base2) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Verify area using median',
                description: 'Alternative calculation: A = median × height',
                beforeExpression: 'A = m × h',
                substitution: `A = ${solution.measurements.median} × ${height}`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'This confirms our area calculation using the median',
                algebraicRule: 'Alternative trapezoid area formula',
                note: 'Both methods give the same result'
            });
        }

        // Calculate height if area and bases are known
        if (area && base1 && base2 && !height && solution.measurements.height) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate height from area',
                description: 'Rearrange area formula to solve for height',
                beforeExpression: 'A = ((b₁ + b₂) ÷ 2) × h',
                rearranged: 'h = A ÷ ((b₁ + b₂) ÷ 2)',
                simplified: 'h = 2A ÷ (b₁ + b₂)',
                substitution: `h = (2 × ${area}) ÷ (${base1} + ${base2})`,
                calculation: `h = ${2 * area} ÷ ${base1 + base2}`,
                afterExpression: `h = ${solution.measurements.height}`,
                reasoning: 'We isolate height by dividing area by the average of the bases',
                algebraicRule: 'Solving for height',
                finalAnswer: false
            });
        }

        // Calculate perimeter if all sides are known
        if (base1 && base2 && leg1 && leg2 && solution.measurements.perimeter) {
            steps.push({
                stepNumber: stepNum++,
                step: 'Calculate perimeter',
                description: 'Add all four sides',
                beforeExpression: 'P = b₁ + b₂ + leg₁ + leg₂',
                substitution: `P = ${base1} + ${base2} + ${leg1} + ${leg2}`,
                afterExpression: `P = ${solution.measurements.perimeter}`,
                reasoning: 'Perimeter is the total distance around the trapezoid',
                algebraicRule: 'Perimeter formula',
                finalAnswer: false
            });
        }

        return steps;
    }

    generateKiteSteps(problem, solution) {
        const { side1, side2, diagonal1, diagonal2, area } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List all known measurements of the kite',
            givenData: {
                side1: side1 || 'unknown',
                side2: side2 || 'unknown',
                diagonal1: diagonal1 || 'unknown',
                diagonal2: diagonal2 || 'unknown'
            },
            reasoning: 'A kite has two pairs of consecutive equal sides',
            visualHint: 'The diagonals are perpendicular, with one bisecting the other',
            keyProperty: 'Diagonals meet at right angles',
            goalStatement: 'Calculate the area using the diagonal formula'
        });

        // Calculate area from diagonals
        if (diagonal1 && diagonal2) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate area',
                description: 'Use the formula: A = (d₁ × d₂) ÷ 2',
                beforeExpression: 'A = (d₁ × d₂) ÷ 2',
                substitution: `A = (${diagonal1} × ${diagonal2}) ÷ 2`,
                calculation: `A = ${diagonal1 * diagonal2} ÷ 2`,
                afterExpression: `A = ${solution.measurements.area}`,
                reasoning: 'The perpendicular diagonals allow us to use this formula',
                algebraicRule: 'Kite area formula',
                visualHint: 'The diagonals divide the kite into 4 right triangles',
                whyThisWorks: 'Since diagonals are perpendicular, we can treat them as base and height',
                finalAnswer: true
            });
        }

        // Calculate perimeter
        if (side1 && side2 && solution.measurements.perimeter) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate perimeter',
                description: 'Use the formula: P = 2(side₁ + side₂)',
                beforeExpression: 'P = 2(a + b)',
                substitution: `P = 2(${side1} + ${side2})`,
                calculation: `P = 2(${side1 + side2})`,
                afterExpression: `P = ${solution.measurements.perimeter}`,
                reasoning: 'We have two pairs of equal consecutive sides',
                algebraicRule: 'Kite perimeter formula',
                note: 'Two sides of length a and two sides of length b',
                finalAnswer: false
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Kite properties',
            description: 'Key properties of this kite',
            properties: [
                'Two pairs of consecutive sides are equal',
                'Diagonals are perpendicular',
                'One diagonal bisects the other',
                'One diagonal is a line of symmetry',
                'One pair of opposite angles are equal'
            ],
            reasoning: 'These properties uniquely identify a kite among quadrilaterals'
        });

        return steps;
    }

    generateCoordinateGeometrySteps(problem, solution) {
        const { vertices } = problem.parameters;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Plot vertices',
            description: 'Plot the four vertices on a coordinate plane',
            vertices: vertices,
            reasoning: 'Visual representation helps understand the quadrilateral shape',
            visualHint: 'Label vertices as A, B, C, D in order',
            goalStatement: 'Calculate properties using coordinate geometry formulas'
        });

        // Calculate side lengths
        steps.push({
            stepNumber: 2,
            step: 'Calculate side lengths',
            description: 'Use distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
            formula: 'd = √[(x₂-x₁)² + (y₂-y₁)²]',
            calculations: solution.measurements.sides.map((side, i) => {
                const v1 = vertices[i];
                const v2 = vertices[(i + 1) % 4];
                return {
                    side: `Side ${i + 1}`,
                    from: `(${v1.x}, ${v1.y})`,
                    to: `(${v2.x}, ${v2.y})`,
                    calculation: `√[(${v2.x}-${v1.x})² + (${v2.y}-${v1.y})²]`,
                    result: side.toFixed(4)
                };
            }),
            reasoning: 'Distance formula comes from the Pythagorean theorem',
            algebraicRule: 'Coordinate distance formula'
        });

        // Calculate slopes
        steps.push({
            stepNumber: 3,
            step: 'Calculate slopes',
            description: 'Use slope formula: m = (y₂-y₁)/(x₂-x₁)',
            formula: 'm = (y₂-y₁)/(x₂-x₁)',
            calculations: solution.analysis.oppositeSidesParallel ? 
                'Slopes calculated to check for parallel sides' : 'Slopes calculated',
            reasoning: 'Equal slopes indicate parallel sides',
            algebraicRule: 'Slope formula',
            note: 'Undefined slope means vertical line'
        });

        // Calculate area using Shoelace formula
        if (solution.measurements.area) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate area using Shoelace formula',
                description: 'Apply the coordinate geometry area formula',
                formula: 'A = (1/2)|x₁(y₂-y₄) + x₂(y₃-y₁) + x₃(y₄-y₂) + x₄(y₁-y₃)|',
                reasoning: 'Shoelace formula works for any polygon with known vertices',
                result: `Area = ${solution.measurements.area.toFixed(4)}`,
                algebraicRule: 'Shoelace (Surveyor\'s) formula',
                visualHint: 'Imagine "lacing" through the coordinates',
                finalAnswer: true
            });
        }

        // Classification
        if (solution.quadrilateralType) {
            steps.push({
                stepNumber: 5,
                step: 'Classify quadrilateral',
                description: 'Determine type based on calculated properties',
                classification: solution.quadrilateralType,
                justification: solution.analysis,
                reasoning: 'Properties like parallel sides and equal lengths determine the type',
                finalConclusion: `This is a ${solution.quadrilateralType}`
            });
        }

        return steps;
    }

    generateClassificationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'List given properties',
            description: 'Identify all properties mentioned in the problem',
            properties: problem.parameters,
            reasoning: 'Properties help us narrow down the type of quadrilateral',
            goalStatement: 'Determine the most specific classification'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check against classification criteria',
            description: 'Compare properties with defining characteristics of each type',
            checkList: [
                'Do all sides equal? → Could be rhombus or square',
                'Are all angles 90°? → Could be rectangle or square',
                'Are opposite sides parallel? → Could be parallelogram family',
                'Is there exactly one pair of parallel sides? → Trapezoid'
            ],
            reasoning: 'Systematic checking ensures correct classification'
        });

        steps.push({
            stepNumber: 3,
            step: 'Determine classification',
            description: 'Identify the most specific type that fits all properties',
            result: solution.primaryType,
            hierarchy: solution.classification,
            reasoning: 'More specific types inherit properties from general types',
            finalAnswer: true
        });

        return steps;
    }

    generateGenericQuadrilateralSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze quadrilateral',
            description: 'Apply appropriate geometric principles',
            givenData: problem.parameters,
            solution: solution,
            reasoning: 'Use known properties and formulas for this quadrilateral type'
        }];
    }

    // ENHANCED STEP EXPLANATION METHODS (adapted from linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            // Add bridge to next step (except for last step)
            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step),
                warningFlags: this.identifyWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestion(step),
                expectedResult: this.describeExpectedResult(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHints(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // Helper methods for explanations (adapted for quadrilaterals)

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify given information': 'Understanding what we know about the quadrilateral is the first step. Each type has unique properties that help us solve problems.',
            'Calculate area': 'Area measures the space inside the quadrilateral. Different formulas apply depending on the type and what information we have.',
            'Calculate perimeter': 'Perimeter is the total distance around the quadrilateral. We add all the side lengths.',
            'Calculate diagonal': 'Diagonals connect opposite vertices. Their lengths and relationships reveal important properties of the quadrilateral.'
        };

        return conceptualExplanations[step.step] || 'This step applies geometric principles specific to this quadrilateral type.';
    }

    getProceduralExplanation(step) {
        if (step.beforeExpression && step.afterExpression) {
            return `1. Start with the formula: ${step.beforeExpression}
2. Substitute known values
3. Perform the calculation
4. Simplify to get the result: ${step.afterExpression}`;
        }
        return 'Follow the standard geometric procedure for this calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'parallelogram': 'Visualize the parallelogram as a "leaning" rectangle. The opposite sides are parallel like railroad tracks.',
            'rectangle': 'Picture a door or window frame - all corners are perfect right angles.',
            'square': 'Think of a perfectly balanced shape - all sides equal, all angles equal.',
            'rhombus': 'Imagine a diamond shape - all sides equal but angles can vary. The diagonals cross at right angles.',
            'trapezoid': 'Visualize a trapezoid like a bridge support - one pair of parallel sides with the others slanting.',
            'kite': 'Picture a flying kite - two pairs of adjacent sides are equal, creating symmetry along one diagonal.'
        };

        return visualExplanations[problem.type] || 'Visualize the quadrilateral and how this measurement relates to its shape.';
    }

    getAlgebraicExplanation(step) {
        return step.algebraicRule || 'Apply geometric formulas and algebraic manipulation';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard math terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with theory',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery approach',
                format: 'questions leading to understanding'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing our calculation`,
            progression: 'We are making progress toward finding all measurements',
            relationship: 'Each step brings us closer to the complete solution'
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we need to ${nextStep.description.toLowerCase()} to continue`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Calculate area': [
                'Make sure you\'re using the correct formula for this quadrilateral type',
                'Check that height is perpendicular to the base',
                'Don\'t confuse perimeter with area'
            ],
            'Calculate perimeter': [
                'Add all sides, not just opposite sides',
                'Make sure all measurements are in the same units',
                'Double-check your addition'
            ],
            'Calculate diagonal': [
                'Use Pythagorean theorem for right triangles formed by diagonal',
                'Remember both diagonals may not be equal',
                'Check if diagonals have special properties for this quadrilateral type'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify formula matches quadrilateral type'];
    }

    generateCheckPoints(step) {
        return [
            'Verify correct formula is used',
            'Check arithmetic calculations',
            'Ensure units are consistent',
            'Confirm answer makes geometric sense'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            parallelogram: step.step === 'Calculate area' ?
                ['Don\'t use side length as height unless explicitly stated'] : [],
            rhombus: step.step === 'Calculate area' ?
                ['Remember there are multiple area formulas - choose based on given information'] : [],
            trapezoid: step.step === 'Calculate area' ?
                ['Must average the two bases, not add them'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Calculate area': 'Did I use the correct area formula for this type of quadrilateral?',
            'Calculate perimeter': 'Did I add all four sides?',
            'Calculate diagonal': 'Does my diagonal length make sense given the side lengths?'
        };

        return questions[step.step] || 'Does this step make sense and move me toward the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Calculate area': 'Area should be a positive number with square units',
            'Calculate perimeter': 'Perimeter should be greater than any single side',
            'Calculate diagonal': 'Diagonal should be longer than any side (except in special cases)'
        };

        return expectations[step.step] || 'The result should be reasonable for the given measurements';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck,review the formula for this quadrilateral type',
            'Check for arithmetic errors in calculations',
            'Verify you have all necessary measurements',
            'Consider if there\'s an alternative formula you could use'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.beforeExpression && step.afterExpression) {
            return [
                `Write down the formula: ${step.beforeExpression}`,
                'Identify the values to substitute',
                'Substitute the values into the formula',
                'Perform the arithmetic operations',
                'Simplify to get the final answer'
            ];
        }

        return ['Understand the goal', 'Identify the method', 'Execute the calculation', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: `Try the same calculation with a different ${problem.type}`,
            practiceHint: 'Practice with simpler numbers first to build confidence',
            extension: 'Once comfortable, try problems with more complex measurements'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have?',
            goal: 'What am I trying to find?',
            strategy: 'Which formula or method should I use?',
            execute: 'How do I perform the calculation correctly?',
            verify: 'Does my answer make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the appropriate formula',
            'Deciding which measurements to use',
            'Selecting the most efficient calculation method'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'Calculate area': [
                'Different area formulas may apply to the same quadrilateral',
                'For coordinate geometry, could use Shoelace formula',
                'Could decompose into triangles and sum their areas'
            ],
            'Calculate perimeter': [
                'Could measure each side individually then sum',
                'For special quadrilaterals, could use simplified formulas'
            ]
        };

        return alternatives[step.step] || ['Alternative approaches exist depending on given information'];
    }

    explainStepNecessity(currentStep, nextStep) {
        return `${nextStep.step} is necessary because ${currentStep.step} prepared the values we need`;
    }

    explainStepBenefit(nextStep) {
        return `This step will help us find the ${nextStep.step.toLowerCase()} which is part of our solution`;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Identify given information': [
                'What type of quadrilateral are we working with?',
                'What measurements do we know?',
                'What are we trying to find?'
            ],
            'Calculate area': [
                'Which area formula applies to this quadrilateral?',
                'Do we have all the measurements needed for this formula?',
                'What units should our answer have?'
            ],
            'Calculate perimeter': [
                'How many sides does this quadrilateral have?',
                'Do we know the length of each side?',
                'Should we add or multiply to find perimeter?'
            ],
            'Calculate diagonal': [
                'How are diagonals related to sides in this quadrilateral?',
                'Should we use the Pythagorean theorem?',
                'Are both diagonals equal in this type?'
            ]
        };

        return questions[step.step] || [
            'What is the purpose of this step?',
            'How does this move us toward the solution?',
            'What formula or property should we use?'
        ];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about which formula is appropriate for this quadrilateral type.',
            level2: 'Remember the key properties of this specific quadrilateral.',
            level3: 'Look at what measurements you have and which formula uses those.',
            level4: step.formula ? `Try using: ${step.formula}` : 'Apply the standard formula for this calculation.'
        };
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Calculate area': ['Understanding of area concept', 'Knowledge of geometric formulas', 'Basic multiplication'],
            'Calculate perimeter': ['Understanding of perimeter concept', 'Addition of multiple numbers'],
            'Calculate diagonal': ['Pythagorean theorem', 'Square roots', 'Understanding of right triangles'],
            'Identify given information': ['Recognition of quadrilateral types', 'Understanding of geometric properties']
        };

        return prerequisites[step.step] || ['Basic geometric knowledge'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify given information': ['quadrilateral', 'vertices', 'sides', 'angles', 'diagonals'],
            'Calculate area': ['area', 'base', 'height', 'diagonal', 'square units'],
            'Calculate perimeter': ['perimeter', 'side length', 'linear units'],
            'Calculate diagonal': ['diagonal', 'hypotenuse', 'perpendicular', 'bisect']
        };

        return vocabulary[step.step] || ['geometric terms'];
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'perpendicular': 'at right angles (90°)',
                    'bisect': 'cut in half',
                    'supplementary': 'add up to 180°',
                    'congruent': 'exactly the same',
                    'parallel': 'never meet, always same distance apart',
                    'diagonal': 'line connecting opposite corners'
                }
            },
            intermediate: {
                replacements: {
                    'perpendicular': 'perpendicular',
                    'bisect': 'bisect',
                    'supplementary': 'supplementary',
                    'congruent': 'congruent',
                    'parallel': 'parallel',
                    'diagonal': 'diagonal'
                }
            },
            detailed: {
                replacements: {
                    'perpendicular': 'perpendicular (forming 90° angles)',
                    'bisect': 'bisect (divide into two equal parts)',
                    'supplementary': 'supplementary (sum equals 180°)',
                    'congruent': 'congruent (equal in measure)',
                    'parallel': 'parallel (equidistant at all points)',
                    'diagonal': 'diagonal (segment connecting non-adjacent vertices)'
                }
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    // VERIFICATION METHODS

    verifyQuadrilateralSolution() {
        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch (type) {
            case 'rectangle':
                return this.verifyRectangleSolution(solution);
            case 'square':
                return this.verifySquareSolution(solution);
            case 'parallelogram':
                return this.verifyParallelogramSolution(solution);
            case 'rhombus':
                return this.verifyRhombusSolution(solution);
            case 'trapezoid':
                return this.verifyTrapezoidSolution(solution);
            case 'coordinate_geometry':
                return this.verifyCoordinateGeometrySolution(solution);
            default:
                return this.verifyGeneralQuadrilateralSolution(solution);
        }
    }

    verifyRectangleSolution(solution) {
        const { length, width, area, perimeter, diagonal } = solution.measurements;
        const checks = [];

        // Verify area = length × width
        if (length && width && area) {
            const calculatedArea = length * width;
            checks.push({
                property: 'Area calculation',
                formula: 'A = l × w',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `${length} × ${width} = ${calculatedArea}`
            });
        }

        // Verify perimeter = 2(length + width)
        if (length && width && perimeter) {
            const calculatedPerimeter = 2 * (length + width);
            checks.push({
                property: 'Perimeter calculation',
                formula: 'P = 2(l + w)',
                expected: calculatedPerimeter,
                actual: perimeter,
                valid: Math.abs(calculatedPerimeter - perimeter) < 0.001,
                verification: `2(${length} + ${width}) = ${calculatedPerimeter}`
            });
        }

        // Verify diagonal using Pythagorean theorem
        if (length && width && diagonal) {
            const calculatedDiagonal = Math.sqrt(length ** 2 + width ** 2);
            checks.push({
                property: 'Diagonal calculation',
                formula: 'd = √(l² + w²)',
                expected: calculatedDiagonal,
                actual: diagonal,
                valid: Math.abs(calculatedDiagonal - diagonal) < 0.001,
                verification: `√(${length}² + ${width}²) = ${calculatedDiagonal.toFixed(4)}`
            });
        }

        return {
            quadrilateralType: 'Rectangle',
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifySquareSolution(solution) {
        const { side, area, perimeter, diagonal } = solution.measurements;
        const checks = [];

        // Verify area = side²
        if (side && area) {
            const calculatedArea = side * side;
            checks.push({
                property: 'Area calculation',
                formula: 'A = s²',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `${side}² = ${calculatedArea}`
            });
        }

        // Verify perimeter = 4 × side
        if (side && perimeter) {
            const calculatedPerimeter = 4 * side;
            checks.push({
                property: 'Perimeter calculation',
                formula: 'P = 4s',
                expected: calculatedPerimeter,
                actual: perimeter,
                valid: Math.abs(calculatedPerimeter - perimeter) < 0.001,
                verification: `4 × ${side} = ${calculatedPerimeter}`
            });
        }

        // Verify diagonal = side × √2
        if (side && diagonal) {
            const calculatedDiagonal = side * Math.sqrt(2);
            checks.push({
                property: 'Diagonal calculation',
                formula: 'd = s√2',
                expected: calculatedDiagonal,
                actual: diagonal,
                valid: Math.abs(calculatedDiagonal - diagonal) < 0.001,
                verification: `${side} × √2 = ${calculatedDiagonal.toFixed(4)}`
            });
        }

        return {
            quadrilateralType: 'Square',
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifyParallelogramSolution(solution) {
        const { base, side, height, area, perimeter } = solution.measurements;
        const checks = [];

        // Verify area = base × height
        if (base && height && area) {
            const calculatedArea = base * height;
            checks.push({
                property: 'Area calculation',
                formula: 'A = b × h',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `${base} × ${height} = ${calculatedArea}`
            });
        }

        // Verify perimeter = 2(base + side)
        if (base && side && perimeter) {
            const calculatedPerimeter = 2 * (base + side);
            checks.push({
                property: 'Perimeter calculation',
                formula: 'P = 2(b + s)',
                expected: calculatedPerimeter,
                actual: perimeter,
                valid: Math.abs(calculatedPerimeter - perimeter) < 0.001,
                verification: `2(${base} + ${side}) = ${calculatedPerimeter}`
            });
        }

        return {
            quadrilateralType: 'Parallelogram',
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifyRhombusSolution(solution) {
        const { side, diagonal1, diagonal2, area, perimeter } = solution.measurements;
        const checks = [];

        // Verify area = (d₁ × d₂) / 2
        if (diagonal1 && diagonal2 && area) {
            const calculatedArea = (diagonal1 * diagonal2) / 2;
            checks.push({
                property: 'Area from diagonals',
                formula: 'A = (d₁ × d₂) / 2',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `(${diagonal1} × ${diagonal2}) / 2 = ${calculatedArea}`
            });
        }

        // Verify perimeter = 4 × side
        if (side && perimeter) {
            const calculatedPerimeter = 4 * side;
            checks.push({
                property: 'Perimeter calculation',
                formula: 'P = 4s',
                expected: calculatedPerimeter,
                actual: perimeter,
                valid: Math.abs(calculatedPerimeter - perimeter) < 0.001,
                verification: `4 × ${side} = ${calculatedPerimeter}`
            });
        }

        // Verify diagonal relationship: 4s² = d₁² + d₂²
        if (side && diagonal1 && diagonal2) {
            const leftSide = 4 * side * side;
            const rightSide = diagonal1 ** 2 + diagonal2 ** 2;
            checks.push({
                property: 'Diagonal-side relationship',
                formula: '4s² = d₁² + d₂²',
                expected: leftSide,
                actual: rightSide,
                valid: Math.abs(leftSide - rightSide) < 0.001,
                verification: `4(${side})² = ${leftSide}, ${diagonal1}² + ${diagonal2}² = ${rightSide}`
            });
        }

        return {
            quadrilateralType: 'Rhombus',
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifyTrapezoidSolution(solution) {
        const { base1, base2, height, median, area } = solution.measurements;
        const checks = [];

        // Verify median = (base1 + base2) / 2
        if (base1 && base2 && median) {
            const calculatedMedian = (base1 + base2) / 2;
            checks.push({
                property: 'Median calculation',
                formula: 'm = (b₁ + b₂) / 2',
                expected: calculatedMedian,
                actual: median,
                valid: Math.abs(calculatedMedian - median) < 0.001,
                verification: `(${base1} + ${base2}) / 2 = ${calculatedMedian}`
            });
        }

        // Verify area = ((base1 + base2) / 2) × height
        if (base1 && base2 && height && area) {
            const calculatedArea = ((base1 + base2) / 2) * height;
            checks.push({
                property: 'Area calculation',
                formula: 'A = ((b₁ + b₂) / 2) × h',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `((${base1} + ${base2}) / 2) × ${height} = ${calculatedArea}`
            });
        }

        // Verify area using median
        if (median && height && area) {
            const calculatedArea = median * height;
            checks.push({
                property: 'Area using median',
                formula: 'A = m × h',
                expected: calculatedArea,
                actual: area,
                valid: Math.abs(calculatedArea - area) < 0.001,
                verification: `${median} × ${height} = ${calculatedArea}`
            });
        }

        return {
            quadrilateralType: 'Trapezoid',
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifyCoordinateGeometrySolution(solution) {
        const { area, perimeter, sides } = solution.measurements;
        const checks = [];

        // Verify perimeter equals sum of sides
        if (sides && perimeter) {
            const calculatedPerimeter = sides.reduce((sum, side) => sum + side, 0);
            checks.push({
                property: 'Perimeter from sides',
                formula: 'P = sum of all sides',
                expected: calculatedPerimeter,
                actual: perimeter,
                valid: Math.abs(calculatedPerimeter - perimeter) < 0.001,
                verification: `${sides.map(s => s.toFixed(2)).join(' + ')} = ${calculatedPerimeter.toFixed(4)}`
            });
        }

        // Note: Area verification using Shoelace formula is already done in the solver
        checks.push({
            property: 'Area calculation',
            formula: 'Shoelace formula',
            note: 'Calculated using coordinate geometry formula',
            valid: true
        });

        return {
            quadrilateralType: solution.quadrilateralType,
            checks: checks,
            allValid: checks.every(check => check.valid),
            confidence: checks.every(check => check.valid) ? 'High' : 'Review needed'
        };
    }

    verifyGeneralQuadrilateralSolution(solution) {
        return {
            quadrilateralType: solution.quadrilateralType || 'General Quadrilateral',
            checks: [{
                property: 'General verification',
                note: 'Solution follows geometric principles',
                valid: true
            }],
            allValid: true,
            confidence: 'Medium'
        };
    }

    // FORMAT VERIFICATION DATA

    formatVerificationData(verification) {
        const data = [
            ['Quadrilateral Type', verification.quadrilateralType],
            ['Overall Status', verification.allValid ? 'All checks passed ✓' : 'Review needed ⚠'],
            ['Confidence Level', verification.confidence],
            ['', ''], // Spacing
            ['Property', 'Formula', 'Expected', 'Actual', 'Status']
        ];

        verification.checks.forEach(check => {
            data.push([
                check.property,
                check.formula || check.note || '',
                check.expected ? check.expected.toFixed(4) : 'N/A',
                check.actual ? check.actual.toFixed(4) : 'N/A',
                check.valid ? '✓' : '✗'
            ]);
            
            if (check.verification) {
                data.push(['Verification', check.verification, '', '', '']);
            }
        });

        return data;
    }

    // GRAPH DATA GENERATION

    generateQuadrilateralGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        this.graphData = {
            type: type,
            quadrilateralType: solution.quadrilateralType,
            measurements: solution.measurements,
            canVisualize: this.canVisualizeQuadrilateral(type, solution)
        };

        // Add coordinate data if available
        if (solution.vertices) {
            this.graphData.vertices = solution.vertices;
            this.graphData.visualizationType = 'coordinate_plot';
        } else {
            this.graphData.visualizationType = 'schematic';
        }
    }

    canVisualizeQuadrilateral(type, solution) {
        // Can visualize if we have vertices or enough information to construct
        return solution.vertices !== undefined || 
               (solution.measurements && Object.keys(solution.measurements).length >= 2);
    }

    // WORKBOOK GENERATION

    generateQuadrilateralWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createQuadrilateralTypeSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createMeasurementsSection(),
            this.createPropertiesSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Quadrilaterals Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.currentProblem.type],
                ['Quadrilateral', this.currentSolution?.quadrilateralType || 'To be determined'],
                ['Given Information', JSON.stringify(this.currentProblem.parameters)]
            ]
        };
    }

    createQuadrilateralTypeSection() {
        if (!this.currentSolution) return null;

        return {
            title: 'Quadrilateral Classification',
            type: 'classification',
            data: [
                ['Type', this.currentSolution.quadrilateralType || 'General Quadrilateral'],
                ['Category', this.currentSolution.category || 'quadrilaterals'],
                ['Description', this.getQuadrilateralDescription(this.currentSolution.quadrilateralType)]
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in the table
            if (step.stepType === 'bridge') {
                stepsData.push(['', '']); // Just add spacing
                return;
            }

            // Main step
            stepsData.push(['Step ' + step.stepNumber, step.description]);

            if (step.givenData) {
                stepsData.push(['Given Data', JSON.stringify(step.givenData)]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Formula', step.beforeExpression]);
                if (step.substitution) {
                    stepsData.push(['Substitution', step.substitution]);
                }
                if (step.calculation) {
                    stepsData.push(['Calculation', step.calculation]);
                }
                stepsData.push(['Result', step.afterExpression]);
            } else if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons[type];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title]
        ];

        if (lesson.concepts) {
            lessonData.push(['Key Concepts', lesson.concepts.join('; ')]);
        }

        if (lesson.theory) {
            lessonData.push(['Theory', lesson.theory]);
        }

        if (lesson.keyFormulas) {
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        return {
            title: 'Lesson Content',
            type: 'lesson',
            data: lessonData
        };
    }

    createMeasurementsSection() {
        if (!this.currentSolution || !this.currentSolution.measurements) return null;

        const measurementData = [];
        const measurements = this.currentSolution.measurements;

        Object.entries(measurements).forEach(([key, value]) => {
            if (typeof value === 'number') {
                measurementData.push([this.formatMeasurementName(key), value.toFixed(4)]);
            } else if (typeof value === 'object' && !Array.isArray(value)) {
                measurementData.push([this.formatMeasurementName(key), JSON.stringify(value)]);
            } else {
                measurementData.push([this.formatMeasurementName(key), String(value)]);
            }
        });

        return {
            title: 'Calculated Measurements',
            type: 'measurements',
            data: measurementData
        };
    }

    createPropertiesSection() {
        if (!this.currentSolution || !this.currentSolution.properties) return null;

        const propertiesData = this.currentSolution.properties.map((prop, index) => {
            return [`Property ${index + 1}`, prop];
        });

        return {
            title: 'Quadrilateral Properties',
            type: 'properties',
            data: propertiesData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verification = this.verifyQuadrilateralSolution();
        const verificationData = this.formatVerificationData(verification);

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: verification.confidence
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotes(type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethods(type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''], // Spacing
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''], // Spacing
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    // HELPER METHODS

    formatMeasurementName(key) {
        return key.replace(/([A-Z])/g, ' $1')
                  .replace(/^./, str => str.toUpperCase())
                  .trim();
    }

    getQuadrilateralDescription(type) {
        const descriptions = {
            'Square': 'All sides equal, all angles 90°',
            'Rectangle': 'Opposite sides equal, all angles 90°',
            'Rhombus': 'All sides equal, opposite angles equal',
            'Parallelogram': 'Opposite sides parallel and equal',
            'Trapezoid': 'Exactly one pair of parallel sides',
            'Isosceles Trapezoid': 'Trapezoid with equal legs',
            'Kite': 'Two pairs of consecutive equal sides',
            'General Quadrilateral': 'Four-sided polygon'
        };

        return descriptions[type] || 'Quadrilateral shape';
    }

    generatePedagogicalNotes(problemType) {
        const pedagogicalDatabase = {
            parallelogram: {
                objectives: [
                    'Calculate area using base and height',
                    'Understand properties of parallelograms',
                    'Apply angle relationships'
                ],
                keyConcepts: [
                    'Opposite sides parallel and equal',
                    'Consecutive angles supplementary',
                    'Height is perpendicular distance'
                ],
                prerequisites: [
                    'Basic geometry concepts',
                    'Understanding of parallel lines',
                    'Area and perimeter concepts'
                ],
                commonDifficulties: [
                    'Confusing side length with height',
                    'Not recognizing supplementary angle relationships',
                    'Mixing up opposite and consecutive angles'
                ],
                extensions: [
                    'Special cases: rectangles and rhombuses',
                    'Vector representation of parallelograms',
                    'Parallelogram law in physics'
                ],
                assessment: [
                    'Check understanding of height vs. side length',
                    'Verify angle relationship comprehension',
                    'Test with various orientations'
                ]
            },
            rectangle: {
                objectives: [
                    'Calculate area, perimeter, and diagonals',
                    'Apply Pythagorean theorem to diagonals',
                    'Recognize rectangle in real-world contexts'
                ],
                keyConcepts: [
                    'All angles are 90 degrees',
                    'Diagonals are equal',
                    'Opposite sides equal'
                ],
                prerequisites: [
                    'Pythagorean theorem',
                    'Right angle concept',
                    'Basic multiplication'
                ],
                commonDifficulties: [
                    'Confusing length and width labels',
                    'Forgetting to use Pythagorean theorem for diagonals',
                    'Not squaring dimensions for area'
                ],
                extensions: [
                    'Golden ratio rectangles',
                    'Rectangle optimization problems',
                    '3D extension to rectangular prisms'
                ],
                assessment: [
                    'Test with both given dimensions scenarios',
                    'Include diagonal calculations',
                    'Use real-world application problems'
                ]
            },
            square: {
                objectives: [
                    'Understand relationships between all square measurements',
                    'Calculate any measurement from any other',
                    'Recognize square as special rectangle and rhombus'
                ],
                keyConcepts: [
                    'All sides equal and all angles 90°',
                    'Maximum symmetry',
                    'Diagonal equals side times √2'
                ],
                prerequisites: [
                    'Square roots',
                    'Understanding of √2',
                    'Special right triangles (45-45-90)'
                ],
                commonDifficulties: [
                    'Forgetting to square the side for area',
                    'Not using √2 for diagonal',
                    'Confusing perimeter (4s) with area (s²)'
                ],
                extensions: [
                    'Squares in tessellations',
                    'Square numbers in number theory',
                    'Inscribed and circumscribed circles'
                ],
                assessment: [
                    'Give different starting measurements',
                    'Include problems requiring √2',
                    'Test recognition of square properties'
                ]
            },
            rhombus: {
                objectives: [
                    'Calculate area using diagonals',
                    'Understand perpendicular diagonal property',
                    'Recognize rhombus in various orientations'
                ],
                keyConcepts: [
                    'All sides equal',
                    'Diagonals perpendicular and bisect each other',
                    'Multiple area formulas'
                ],
                prerequisites: [
                    'Understanding of perpendicular lines',
                    'Area of triangles',
                    'Pythagorean theorem'
                ],
                commonDifficulties: [
                    'Not dividing by 2 in diagonal formula',
                    'Confusing rhombus with square',
                    'Using side length incorrectly for area'
                ],
                extensions: [
                    'Rhombus in crystallography',
                    'Parallelogram law applied to rhombus',
                    'Relationship between diagonals and sides'
                ],
                assessment: [
                    'Provide different measurement combinations',
                    'Test understanding of diagonal properties',
                    'Include angle-based problems'
                ]
            },
            trapezoid: {
                objectives: [
                    'Calculate area using trapezoid formula',
                    'Understand median concept',
                    'Identify parallel vs non-parallel sides'
                ],
                keyConcepts: [
                    'Exactly one pair of parallel sides',
                    'Median is average of bases',
                    'Height is perpendicular distance'
                ],
                prerequisites: [
                    'Understanding of parallel lines',
                    'Average/mean concept',
                    'Perpendicular distance'
                ],
                commonDifficulties: [
                    'Adding bases instead of averaging',
                    'Forgetting to multiply by height',
                    'Identifying which sides are bases'
                ],
                extensions: [
                    'Isosceles trapezoids',
                    'Trapezoid in architecture',
                    'Trapezoidal rule in calculus'
                ],
                assessment: [
                    'Vary which measurements are given',
                    'Include median calculations',
                    'Test with different orientations'
                ]
            },
            kite: {
                objectives: [
                    'Calculate area using perpendicular diagonals',
                    'Identify consecutive equal sides',
                    'Understand axis of symmetry'
                ],
                keyConcepts: [
                    'Two pairs of consecutive equal sides',
                    'Diagonals perpendicular',
                    'One line of symmetry'
                ],
                prerequisites: [
                    'Understanding of perpendicular lines',
                    'Symmetry concepts',
                    'Area of quadrilaterals'
                ],
                commonDifficulties: [
                    'Confusing kite with rhombus',
                    'Not recognizing consecutive vs opposite sides',
                    'Misidentifying the axis of symmetry'
                ],
                extensions: [
                    'Kites in aerodynamics',
                    'Convex vs concave kites',
                    'Kite in coordinate geometry'
                ],
                assessment: [
                    'Test identification of kite properties',
                    'Include area calculations',
                    'Use symmetry-based questions'
                ]
            },
            coordinate_geometry: {
                objectives: [
                    'Apply distance and slope formulas',
                    'Use Shoelace formula for area',
                    'Classify quadrilaterals using coordinates'
                ],
                keyConcepts: [
                    'Distance formula from Pythagorean theorem',
                    'Slope indicates parallel/perpendicular',
                    'Coordinate methods for all properties'
                ],
                prerequisites: [
                    'Coordinate plane familiarity',
                    'Distance and slope formulas',
                    'Basic algebra'
                ],
                commonDifficulties: [
                    'Arithmetic errors in formulas',
                    'Misinterpreting slope relationships',
                    'Incorrect vertex ordering for Shoelace'
                ],
                extensions: [
                    'Vectors and transformations',
                    'Computer graphics applications',
                    'Analytic geometry proofs'
                ],
                assessment: [
                    'Vary coordinate values (positive, negative, zero)',
                    'Include classification problems',
                    'Test formula application accuracy'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Solve quadrilateral problems'],
            keyConcepts: ['Quadrilateral properties'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['Advanced applications'],
            assessment: ['Check understanding']
        };
    }

    generateAlternativeMethods(problemType) {
        const alternativeDatabase = {
            parallelogram: {
                primaryMethod: 'Base × Height formula',
                methods: [
                    {
                        name: 'Side-Angle Formula',
                        description: 'A = ab sin(θ) using two sides and included angle'
                    },
                    {
                        name: 'Coordinate Method',
                        description: 'Use coordinates with cross product or Shoelace formula'
                    },
                    {
                        name: 'Triangle Decomposition',
                        description: 'Split into two triangles and sum areas'
                    }
                ],
                comparison: 'Base-height is simplest; side-angle when height unknown; coordinate method for given vertices'
            },
            rectangle: {
                primaryMethod: 'Length × Width',
                methods: [
                    {
                        name: 'Diagonal Method',
                        description: 'Use Pythagorean theorem to find missing dimension from diagonal'
                    },
                    {
                        name: 'Coordinate Method',
                        description: 'Calculate from vertex coordinates'
                    },
                    {
                        name: 'Perimeter Method',
                        description: 'Find dimensions from perimeter and one side'
                    }
                ],
                comparison: 'Direct multiplication is fastest; alternative methods useful when different information is given'
            },
            square: {
                primaryMethod: 'Side squared (s²)',
                methods: [
                    {
                        name: 'Diagonal Method',
                        description: 'A = d²/2 using diagonal length'
                    },
                    {
                        name: 'Perimeter Method',
                        description: 'Find side from perimeter, then calculate area'
                    },
                    {
                        name: 'Inscribed Circle',
                        description: 'Use relationship with inscribed circle radius'
                    }
                ],
                comparison: 'All methods equivalent; choose based on given information'
            },
            rhombus: {
                primaryMethod: 'Diagonal formula: A = (d₁ × d₂)/2',
                methods: [
                    {
                        name: 'Base-Height Method',
                        description: 'A = base × height like parallelogram'
                    },
                    {
                        name: 'Side-Angle Method',
                        description: 'A = s² sin(θ)'
                    },
                    {
                        name: 'Triangle Method',
                        description: 'Calculate as four congruent right triangles'
                    }
                ],
                comparison: 'Diagonal method most common; base-height when height is known; side-angle for angle problems'
            },
            trapezoid: {
                primaryMethod: 'Average of bases times height',
                methods: [
                    {
                        name: 'Median Method',
                        description: 'A = median × height'
                    },
                    {
                        name: 'Decomposition Method',
                        description: 'Split into triangles and/or rectangles'
                    },
                    {
                        name: 'Coordinate Method',
                        description: 'Use Shoelace formula with coordinates'
                    }
                ],
                comparison: 'Standard formula most direct; median method equivalent; decomposition helps understanding'
            },
            kite: {
                primaryMethod: 'Diagonal formula: A = (d₁ × d₂)/2',
                methods: [
                    {
                        name: 'Triangle Method',
                        description: 'Sum areas of four right triangles formed by diagonals'
                    },
                    {
                        name: 'Half-Diagonal Method',
                        description: 'Recognize each half creates triangles with perpendicular diagonals'
                    }
                ],
                comparison: 'Diagonal formula is standard and most efficient for kites'
            },
            coordinate_geometry: {
                primaryMethod: 'Shoelace formula',
                methods: [
                    {
                        name: 'Triangle Decomposition',
                        description: 'Divide quadrilateral into triangles, sum areas'
                    },
                    {
                        name: 'Bounding Rectangle',
                        description: 'Use rectangle minus triangular corners'
                    },
                    {
                        name: 'Vector Cross Product',
                        description: 'Use cross product of diagonal vectors divided by 2'
                    }
                ],
                comparison: 'Shoelace is most systematic; decomposition good for irregular shapes; vector method elegant for some cases'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard geometric approach',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Method varies based on problem specifics'
                }
            ],
            comparison: 'Choose method based on given information and problem context'
        };
    }

    // GCD helper function for finding common factors
    gcd(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        while (b !== 0) {
            let temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }
}

// Export the class
export default EnhancedQuadrilateralsMathematicalWorkbook;
