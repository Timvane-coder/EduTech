class MathematicsDiagramsRegistry {
    static diagrams = {
        // ===== 1. NUMBER THEORY =====
        'numberLine': {
            name: 'Number Line',
            category: 'Number Theory',
            description: 'Visual representation of numbers on a line',
            type: 'number_line',
            range: { min: -10, max: 10 },
            markedPoints: [-5, -2, 0, 3, 7],
            defaultOptions: {
                title: 'Number Line',
                showIntegers: true,
                showZero: true,
                showNegatives: true,
                showArrows: true,
                width: 900,
                height: 200,
                backgroundColor: '#ffffff'
            }
        },

        'primeFactorTree': {
            name: 'Prime Factor Tree',
            category: 'Number Theory',
            description: 'Tree diagram showing prime factorization',
            type: 'prime_factor_tree',
            number: 60,
            defaultOptions: {
                title: 'Prime Factorization Tree - 60',
                showBranches: true,
                showPrimes: true,
                highlightPrimes: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagramFactors': {
            name: 'Venn Diagram - HCF/LCM',
            category: 'Number Theory',
            description: 'Finding HCF and LCM using Venn diagrams',
            type: 'venn_diagram_factors',
            numbers: [12, 18],
            defaultOptions: {
                title: 'HCF and LCM using Venn Diagram',
                showFactors: true,
                showHCF: true,
                showLCM: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divisibilityChart': {
            name: 'Divisibility Rules Chart',
            category: 'Number Theory',
            description: 'Visual chart of divisibility rules',
            type: 'divisibility_chart',
            divisors: [2, 3, 4, 5, 6, 8, 9, 10],
            defaultOptions: {
                title: 'Divisibility Rules',
                showRules: true,
                showExamples: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'realNumberHierarchy': {
            name: 'Real Number System Hierarchy',
            category: 'Number Theory',
            description: 'Tree showing classification of real numbers',
            type: 'number_hierarchy',
            defaultOptions: {
                title: 'Real Number System',
                showNatural: true,
                showWhole: true,
                showIntegers: true,
                showRational: true,
                showIrrational: true,
                showExamples: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'modularArithmeticClock': {
            name: 'Modular Arithmetic Clock',
            category: 'Number Theory',
            description: 'Clock diagram for modular arithmetic',
            type: 'modular_clock',
            modulus: 12,
            defaultOptions: {
                title: 'Modular Arithmetic (mod 12)',
                showNumbers: true,
                showArithmetic: true,
                highlightResidue: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== NUMBER THEORY APPARATUS/PROCESS DIAGRAMS =====
        'sieveOfEratosthenes': {
            name: 'Sieve of Eratosthenes Process',
            category: 'Number Theory',
            description: 'Step-by-step process of finding primes',
            type: 'apparatus_diagram',
            apparatusType: 'sieve_eratosthenes',
            maxNumber: 100,
            defaultOptions: {
                title: 'Sieve of Eratosthenes',
                showProcess: true,
                showGrid: true,
                showSteps: true,
                highlightMultiples: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Numbers being crossed out (multiples)',
                    constant: 'Starting number range (1-100)',
                    rule: 'Cross out all multiples of each prime, starting with 2'
                },
                width: 900,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'euclideanAlgorithm': {
            name: 'Euclidean Algorithm Process',
            category: 'Number Theory',
            description: 'Visual process of finding HCF using division',
            type: 'apparatus_diagram',
            apparatusType: 'euclidean_algorithm',
            number1: 48,
            number2: 18,
            defaultOptions: {
                title: 'Euclidean Algorithm',
                showProcess: true,
                showDivisionSteps: true,
                showRemainders: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Remainder (decreasing each step)',
                    constant: 'Original two numbers',
                    rule: 'HCF is the last non-zero remainder'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'longDivisionProcess': {
            name: 'Long Division Process',
            category: 'Number Theory',
            description: 'Step-by-step long division layout',
            type: 'apparatus_diagram',
            apparatusType: 'long_division',
            dividend: 1547,
            divisor: 23,
            defaultOptions: {
                title: 'Long Division',
                showProcess: true,
                showSteps: true,
                showRemainder: true,
                showQuotient: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Partial quotient, remainder',
                    constant: 'Dividend, divisor',
                    rule: 'Divide, multiply, subtract, bring down'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. ALGEBRA =====
        'algebraicBalanceModel': {
            name: 'Algebraic Balance Model',
            category: 'Algebra',
            description: 'Balance showing equation solving',
            type: 'balance_model',
            equation: '2x + 3 = 11',
            defaultOptions: {
                title: 'Solving Equations - Balance Method',
                showBalance: true,
                showSteps: true,
                showInverse: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'linearGraphPlot': {
            name: 'Linear Graph',
            category: 'Algebra',
            description: 'Graph of linear equation y = mx + c',
            type: 'linear_graph',
            slope: 2,
            intercept: 3,
            defaultOptions: {
                title: 'Linear Graph: y = 2x + 3',
                showGrid: true,
                showAxes: true,
                showSlope: true,
                showIntercept: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticParabola': {
            name: 'Quadratic Parabola',
            category: 'Algebra',
            description: 'Graph of quadratic function',
            type: 'quadratic_graph',
            a: 1,
            b: -4,
            c: 3,
            defaultOptions: {
                title: 'Quadratic Graph: y = x² - 4x + 3',
                showGrid: true,
                showVertex: true,
                showRoots: true,
                showAxisOfSymmetry: true,
                showYIntercept: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadraticFormulaVisual': {
            name: 'Quadratic Formula Diagram',
            category: 'Algebra',
            description: 'Visual breakdown of quadratic formula',
            type: 'quadratic_formula',
            a: 1,
            b: -5,
            c: 6,
            defaultOptions: {
                title: 'Quadratic Formula',
                showFormula: true,
                showDiscriminant: true,
                showRoots: true,
                showNatureOfRoots: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'completingSquareVisual': {
            name: 'Completing the Square Visual',
            category: 'Algebra',
            description: 'Geometric model of completing the square',
            type: 'completing_square',
            a: 1,
            b: 6,
            c: 5,
            defaultOptions: {
                title: 'Completing the Square',
                showSquare: true,
                showSteps: true,
                showGeometric: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'simultaneousEquationsGraph': {
            name: 'Simultaneous Equations Graph',
            category: 'Algebra',
            description: 'Graphical solution of two equations',
            type: 'simultaneous_graph',
            equation1: { m: 2, c: 1 },
            equation2: { m: -1, c: 7 },
            defaultOptions: {
                title: 'Simultaneous Equations - Graphical Solution',
                showBothLines: true,
                showIntersection: true,
                showSolution: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polynomialDivisionLayout': {
            name: 'Polynomial Long Division',
            category: 'Algebra',
            description: 'Layout for polynomial division',
            type: 'polynomial_division',
            dividend: 'x³ + 2x² - 5x + 6',
            divisor: 'x - 2',
            defaultOptions: {
                title: 'Polynomial Division',
                showProcess: true,
                showRemainder: true,
                showQuotient: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exponentialGraph': {
            name: 'Exponential Graph',
            category: 'Algebra',
            description: 'Graph of exponential function',
            type: 'exponential_graph',
            base: 2,
            coefficient: 1,
            defaultOptions: {
                title: 'Exponential Graph: y = 2ˣ',
                showGrid: true,
                showAsymptote: true,
                showGrowth: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'logarithmicGraph': {
            name: 'Logarithmic Graph',
            category: 'Algebra',
            description: 'Graph of logarithmic function',
            type: 'logarithmic_graph',
            base: 10,
            defaultOptions: {
                title: 'Logarithmic Graph: y = log₁₀(x)',
                showGrid: true,
                showAsymptote: true,
                showDomain: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inequalityNumberLine': {
            name: 'Inequality on Number Line',
            category: 'Algebra',
            description: 'Visual representation of inequality solution',
            type: 'inequality_line',
            inequality: 'x > 3',
            defaultOptions: {
                title: 'Inequality Solution',
                showLine: true,
                showShading: true,
                showBoundary: true,
                showNotation: true,
                width: 900,
                height: 200,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ALGEBRA APPARATUS/PROCESS DIAGRAMS =====
        'algebraTilesModel': {
            name: 'Algebra Tiles Model',
            category: 'Algebra',
            description: 'Manipulative tiles for algebraic expressions',
            type: 'apparatus_diagram',
            apparatusType: 'algebra_tiles',
            expression: '2x + 3',
            defaultOptions: {
                title: 'Algebra Tiles',
                showProcess: true,
                showXTiles: true,
                showUnitTiles: true,
                showFactoring: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Number and arrangement of tiles',
                    constant: 'Tile values (x², x, 1)',
                    rule: 'Area model: arrange tiles to form rectangle for factoring'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'factorBoxMethod': {
            name: 'Factor Box Method',
            category: 'Algebra',
            description: 'Grid method for factoring quadratics',
            type: 'apparatus_diagram',
            apparatusType: 'factor_box',
            quadratic: 'x² + 5x + 6',
            defaultOptions: {
                title: 'Factor Box Method',
                showProcess: true,
                showGrid: true,
                showTerms: true,
                showFactors: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Grid entries (products)',
                    constant: 'Original quadratic coefficients',
                    rule: 'Find two numbers that multiply to ac and add to b'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'substituitionMethod': {
            name: 'Substitution Method Process',
            category: 'Algebra',
            description: 'Step-by-step substitution for simultaneous equations',
            type: 'apparatus_diagram',
            apparatusType: 'substitution_method',
            equation1: '2x + y = 10',
            equation2: 'x - y = 2',
            defaultOptions: {
                title: 'Substitution Method',
                showProcess: true,
                showSteps: true,
                showSubstitution: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Variable values through steps',
                    constant: 'Original equations',
                    rule: 'Solve one equation for a variable, substitute into other'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'eliminationMethod': {
            name: 'Elimination Method Process',
            category: 'Algebra',
            description: 'Step-by-step elimination for simultaneous equations',
            type: 'apparatus_diagram',
            apparatusType: 'elimination_method',
            equation1: '3x + 2y = 12',
            equation2: '2x - y = 1',
            defaultOptions: {
                title: 'Elimination Method',
                showProcess: true,
                showMultipliers: true,
                showAddition: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Coefficients (when multiplying), equations (when adding/subtracting)',
                    constant: 'Solution point',
                    rule: 'Make coefficients equal, then add/subtract to eliminate variable'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. FUNCTIONS =====
        'functionMachine': {
            name: 'Function Machine Diagram',
            category: 'Functions',
            description: 'Input-output machine representation',
            type: 'function_machine',
            function: 'f(x) = 2x + 3',
            inputs: [1, 2, 3, 4],
            defaultOptions: {
                title: 'Function Machine',
                showMachine: true,
                showInputs: true,
                showOutputs: true,
                showRule: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'mappingDiagram': {
            name: 'Mapping Diagram',
            category: 'Functions',
            description: 'Arrow diagram showing domain to range mapping',
            type: 'mapping_diagram',
            domain: [1, 2, 3, 4],
            range: [2, 4, 6, 8],
            function: 'x → 2x',
            defaultOptions: {
                title: 'Mapping Diagram',
                showDomain: true,
                showRange: true,
                showArrows: true,
                showOneToOne: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'domainRangeGraph': {
            name: 'Domain and Range Visualization',
            category: 'Functions',
            description: 'Graph showing domain and range',
            type: 'domain_range_graph',
            function: 'f(x) = √x',
            defaultOptions: {
                title: 'Domain and Range',
                showGraph: true,
                highlightDomain: true,
                highlightRange: true,
                showRestrictions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'functionTypes': {
            name: 'Function Types Comparison',
            category: 'Functions',
            description: 'Comparison of different function types',
            type: 'function_types',
            functions: ['linear', 'quadratic', 'cubic', 'reciprocal'],
            defaultOptions: {
                title: 'Types of Functions',
                showGraphs: true,
                showEquations: true,
                showCharacteristics: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'functionTransformations': {
            name: 'Function Transformations',
            category: 'Functions',
            description: 'Visual effect of transformations on graphs',
            type: 'function_transformations',
            baseFunction: 'f(x) = x²',
            transformations: ['translate', 'reflect', 'stretch'],
            defaultOptions: {
                title: 'Function Transformations',
                showOriginal: true,
                showTransformed: true,
                showVectors: true,
                showEquations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'inverseFunctionGraph': {
            name: 'Inverse Function Graph',
            category: 'Functions',
            description: 'Function and its inverse with y=x line',
            type: 'inverse_function',
            function: 'f(x) = 2x + 1',
            defaultOptions: {
                title: 'Function and Inverse',
                showFunction: true,
                showInverse: true,
                showYEqualsX: true,
                showReflection: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'piecewiseFunctionGraph': {
            name: 'Piecewise Function Graph',
            category: 'Functions',
            description: 'Graph of piecewise-defined function',
            type: 'piecewise_function',
            pieces: [
                { domain: 'x < 0', function: '-x' },
                { domain: 'x ≥ 0', function: 'x²' }
            ],
            defaultOptions: {
                title: 'Piecewise Function',
                showPieces: true,
                showBreaks: true,
                showDomains: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compositeFunction': {
            name: 'Composite Function Diagram',
            category: 'Functions',
            description: 'Visual representation of function composition',
            type: 'composite_function',
            f: 'f(x) = 2x',
            g: 'g(x) = x + 3',
            defaultOptions: {
                title: 'Composite Functions',
                showFunctionMachines: true,
                showComposition: true,
                showSteps: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== FUNCTIONS APPARATUS/PROCESS DIAGRAMS =====
        'verticalLineTest': {
            name: 'Vertical Line Test Process',
            category: 'Functions',
            description: 'Testing if a graph represents a function',
            type: 'apparatus_diagram',
            apparatusType: 'vertical_line_test',
            curve: 'circle',
            defaultOptions: {
                title: 'Vertical Line Test',
                showProcess: true,
                showGraph: true,
                showVerticalLines: true,
                showIntersections: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of vertical line',
                    constant: 'Graph shape',
                    rule: 'If any vertical line crosses more than once, not a function'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'horizontalLineTest': {
            name: 'Horizontal Line Test Process',
            category: 'Functions',
            description: 'Testing if a function is one-to-one',
            type: 'apparatus_diagram',
            apparatusType: 'horizontal_line_test',
            function: 'quadratic',
            defaultOptions: {
                title: 'Horizontal Line Test',
                showProcess: true,
                showGraph: true,
                showHorizontalLines: true,
                showIntersections: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of horizontal line',
                    constant: 'Function graph',
                    rule: 'If any horizontal line crosses more than once, not one-to-one'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. GEOMETRY =====
        'angleTypes': {
            name: 'Types of Angles',
            category: 'Geometry',
            description: 'Visual comparison of angle types',
            type: 'angle_types',
            angles: ['acute', 'right', 'obtuse', 'straight', 'reflex'],
            defaultOptions: {
                title: 'Types of Angles',
                showAngles: true,
                showMeasures: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'angleRelationships': {
            name: 'Angle Relationships',
            category: 'Geometry',
            description: 'Complementary, supplementary, vertically opposite angles',
            type: 'angle_relationships',
            defaultOptions: {
                title: 'Angle Relationships',
                showComplementary: true,
                showSupplementary: true,
                showVerticallyOpposite: true,
                showMeasures: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'parallelLinesAngles': {
            name: 'Parallel Lines and Transversals',
            category: 'Geometry',
            description: 'Angles formed by parallel lines cut by transversal',
            type: 'parallel_lines',
            defaultOptions: {
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
            }
        },

        'triangleTypes': {
            name: 'Types of Triangles',
            category: 'Geometry',
            description: 'Classification by sides and angles',
            type: 'triangle_types',
            defaultOptions: {
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
            }
        },

        'triangleProperties': {
            name: 'Triangle Properties Diagram',
            category: 'Geometry',
            description: 'Angle sum, exterior angles, inequality theorem',
            type: 'triangle_properties',
            defaultOptions: {
                title: 'Triangle Properties',
                showAngleSum: true,
                showExteriorAngle: true,
                showInequality: true,
                showProofs: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pythagoreanTheorem': {
            name: 'Pythagorean Theorem Visual',
            category: 'Geometry',
            description: 'Right triangle with squares on sides',
            type: 'pythagorean',
            a: 3,
            b: 4,
            c: 5,
            defaultOptions: {
                title: 'Pythagorean Theorem',
                showTriangle: true,
                showSquares: true,
                showAreas: true,
                showEquation: true,
                showProof: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'congruentTriangles': {
            name: 'Congruent Triangles',
            category: 'Geometry',
            description: 'SSS, SAS, ASA, RHS congruence',
            type: 'congruent_triangles',
            condition: 'SAS',
            defaultOptions: {
                title: 'Congruent Triangles - SAS',
                showTriangles: true,
                showMarking: true,
                showCondition: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'similarTriangles': {
            name: 'Similar Triangles',
            category: 'Geometry',
            description: 'AA, SSS, SAS similarity',
            type: 'similar_triangles',
            condition: 'AA',
            ratio: 2,
            defaultOptions: {
                title: 'Similar Triangles - AA',
                showTriangles: true,
                showAngles: true,
                showRatio: true,
                showProof: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quadrilateralTypes': {
            name: 'Types of Quadrilaterals',
            category: 'Geometry',
            description: 'Classification and properties of quadrilaterals',
            type: 'quadrilateral_types',
            defaultOptions: {
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
            }
        },

        'quadrilateralHierarchy': {
            name: 'Quadrilateral Family Tree',
            category: 'Geometry',
            description: 'Hierarchical relationships between quadrilaterals',
            type: 'quadrilateral_hierarchy',
            defaultOptions: {
                title: 'Quadrilateral Hierarchy',
                showTree: true,
                showRelationships: true,
                showProperties: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem1': {
            name: 'Circle Theorem - Angle at Center',
            category: 'Geometry',
            description: 'Angle at center is twice angle at circumference',
            type: 'circle_theorem',
            theorem: 'angle_at_center',
            defaultOptions: {
                title: 'Circle Theorem: Angle at Center',
                showCircle: true,
                showAngles: true,
                showProof: true,
                showMeasures: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem2': {
            name: 'Circle Theorem - Angles in Semicircle',
            category: 'Geometry',
            description: 'Angle in semicircle is 90°',
            type: 'circle_theorem',
            theorem: 'angle_in_semicircle',
            defaultOptions: {
                title: 'Circle Theorem: Angle in Semicircle',
                showCircle: true,
                showRightAngle: true,
                showDiameter: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem3': {
            name: 'Circle Theorem - Cyclic Quadrilateral',
            category: 'Geometry',
            description: 'Opposite angles sum to 180°',
            type: 'circle_theorem',
            theorem: 'cyclic_quadrilateral',
            defaultOptions: {
                title: 'Circle Theorem: Cyclic Quadrilateral',
                showCircle: true,
                showQuadrilateral: true,
                showAngles: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'circleTheorem4': {
            name: 'Circle Theorem - Tangent Radius',
            category: 'Geometry',
            description: 'Tangent perpendicular to radius',
            type: 'circle_theorem',
            theorem: 'tangent_radius',
            defaultOptions: {
                title: 'Circle Theorem: Tangent and Radius',
                showCircle: true,
                showTangent: true,
                showRadius: true,
                showRightAngle: true,
                showProof: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'coordinateGeometryGrid': {
            name: 'Coordinate Geometry Grid',
            category: 'Geometry',
            description: 'Cartesian plane with points and shapes',
            type: 'coordinate_grid',
            points: [[2, 3], [5, 7], [-1, 4]],
            defaultOptions: {
                title: 'Coordinate Geometry',
                showGrid: true,
                showAxes: true,
                showPoints: true,
                showLabels: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'distanceFormula': {
            name: 'Distance Formula Diagram',
            category: 'Geometry',
            description: 'Distance between two points on coordinate plane',
            type: 'distance_formula',
            point1: [1, 2],
            point2: [4, 6],
            defaultOptions: {
                title: 'Distance Formula',
                showPoints: true,
                showRightTriangle: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'midpointFormula': {
            name: 'Midpoint Formula Diagram',
            category: 'Geometry',
            description: 'Midpoint of line segment on coordinate plane',
            type: 'midpoint_formula',
            point1: [2, 3],
            point2: [8, 9],
            defaultOptions: {
                title: 'Midpoint Formula',
                showPoints: true,
                showSegment: true,
                showMidpoint: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'slopeOfLine': {
            name: 'Slope of Line Diagram',
            category: 'Geometry',
            description: 'Rise over run visualization',
            type: 'slope_diagram',
            point1: [1, 2],
            point2: [5, 8],
            defaultOptions: {
                title: 'Slope of a Line',
                showLine: true,
                showRise: true,
                showRun: true,
                showSlope: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'equationOfLine': {
            name: 'Equation of Line',
            category: 'Geometry',
            description: 'Different forms of line equations',
            type: 'line_equation',
            defaultOptions: {
                title: 'Equation of a Line',
                showSlopeIntercept: true,
                showPointSlope: true,
                showGeneral: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'solid3DShapes': {
            name: '3D Solid Shapes',
            category: 'Geometry',
            description: 'Common 3D geometric solids',
            type: 'solid_shapes',
            shapes: ['cube', 'cuboid', 'sphere', 'cylinder', 'cone', 'pyramid'],
            defaultOptions: {
                title: '3D Shapes',
                showShapes: true,
                showNets: false,
                showDimensions: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nets3DShapes': {
            name: 'Nets of 3D Shapes',
            category: 'Geometry',
            description: 'Unfolded 2D nets of 3D shapes',
            type: 'shape_nets',
            shape: 'cube',
            defaultOptions: {
                title: 'Nets of 3D Shapes',
                showNet: true,
                show3DShape: true,
                showFolding: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'surfaceAreaDiagram': {
            name: 'Surface Area Diagram',
            category: 'Geometry',
            description: 'Breaking down surface area calculation',
            type: 'surface_area',
            shape: 'cuboid',
            dimensions: { length: 5, width: 3, height: 4 },
            defaultOptions: {
                title: 'Surface Area',
                showShape: true,
                showFaces: true,
                showCalculation: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'volumeDiagram': {
            name: 'Volume Diagram',
            category: 'Geometry',
            description: 'Volume calculation with visual breakdown',
            type: 'volume_diagram',
            shape: 'cylinder',
            dimensions: { radius: 3, height: 5 },
            defaultOptions: {
                title: 'Volume',
                showShape: true,
                showDimensions: true,
                showCalculation: true,
                showFormula: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== GEOMETRY APPARATUS/PROCESS DIAGRAMS =====
        'compassStraightedgeConstruction': {
            name: 'Compass and Straightedge Construction',
            category: 'Geometry',
            description: 'Process of geometric constructions',
            type: 'apparatus_diagram',
            apparatusType: 'compass_construction',
            construction: 'perpendicular_bisector',
            defaultOptions: {
                title: 'Compass and Straightedge Construction',
                showProcess: true,
                showSteps: true,
                showArcs: true,
                showConstruction: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Arc positions, intersection points',
                    constant: 'Compass radius, line segment',
                    rule: 'Equal arcs from endpoints create perpendicular bisector'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'angleBisectorConstruction': {
            name: 'Angle Bisector Construction',
            category: 'Geometry',
            description: 'Process of bisecting an angle with compass',
            type: 'apparatus_diagram',
            apparatusType: 'angle_bisector',
            angle: 60,
            defaultOptions: {
                title: 'Angle Bisector Construction',
                showProcess: true,
                showSteps: true,
                showArcs: true,
                showBisector: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Arc intersections, bisector position',
                    constant: 'Original angle measure',
                    rule: 'Equal arcs from angle sides create bisector'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'locusConstruction': {
            name: 'Locus Construction',
            category: 'Geometry',
            description: 'Path of points satisfying a condition',
            type: 'apparatus_diagram',
            apparatusType: 'locus',
            condition: 'equidistant_from_point',
            defaultOptions: {
                title: 'Locus Construction',
                showProcess: true,
                showPoints: true,
                showPath: true,
                showCondition: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of points on locus',
                    constant: 'Distance/condition requirement',
                    rule: 'All points equidistant from a point form a circle'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'transformationProcess': {
            name: 'Geometric Transformation Process',
            category: 'Geometry',
            description: 'Step-by-step transformation of shapes',
            type: 'apparatus_diagram',
            apparatusType: 'transformation',
            transformationType: 'reflection',
            defaultOptions: {
                title: 'Geometric Transformation',
                showProcess: true,
                showOriginal: true,
                showImage: true,
                showMirrorLine: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position of image',
                    constant: 'Shape size, distances from mirror line',
                    rule: 'Each point reflects perpendicular to mirror line at equal distance'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. TRIGONOMETRY =====
        'rightTriangleTrigRatios': {
            name: 'Right Triangle Trig Ratios',
            category: 'Trigonometry',
            description: 'SOH CAH TOA visualization',
            type: 'trig_ratios',
            angle: 30,
            defaultOptions: {
                title: 'Trigonometric Ratios',
                showTriangle: true,
                showSides: true,
                showRatios: true,
                showSOHCAHTOA: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'unitCircle': {
            name: 'Unit Circle',
            category: 'Trigonometry',
            description: 'Unit circle with special angles',
            type: 'unit_circle',
            defaultOptions: {
                title: 'Unit Circle',
                showCircle: true,
                showAngles: true,
                showCoordinates: true,
                showQuadrants: true,
                showSpecialAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'specialAnglesTriangle': {
            name: 'Special Angles Triangles',
            category: 'Trigonometry',
            description: '30-60-90 and 45-45-90 triangles',
            type: 'special_angles',
            defaultOptions: {
                title: 'Special Angle Triangles',
                show306090: true,
                show454590: true,
                showRatios: true,
                showValues: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'trigIdentitiesVisual': {
            name: 'Trigonometric Identities',
            category: 'Trigonometry',
            description: 'Visual proof of trig identities',
            type: 'trig_identities',
            identity: 'pythagorean',
            defaultOptions: {
                title: 'Trigonometric Identities',
                showIdentity: true,
                showProof: true,
                showUnitCircle: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sineRuleDiagram': {
            name: 'Sine Rule Diagram',
            category: 'Trigonometry',
            description: 'Sine rule in non-right triangle',
            type: 'sine_rule',
            triangle: { a: 5, b: 7, A: 40, B: 60 },
            defaultOptions: {
                title: 'Sine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cosineRuleDiagram': {
            name: 'Cosine Rule Diagram',
            category: 'Trigonometry',
            description: 'Cosine rule in non-right triangle',
            type: 'cosine_rule',
            triangle: { a: 5, b: 7, C: 60 },
            defaultOptions: {
                title: 'Cosine Rule',
                showTriangle: true,
                showRule: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'triangleAreaFormula': {
            name: 'Triangle Area Formula (Trig)',
            category: 'Trigonometry',
            description: 'Area = ½ab sin C visualization',
            type: 'triangle_area_trig',
            triangle: { a: 6, b: 8, C: 30 },
            defaultOptions: {
                title: 'Triangle Area (Trigonometry)',
                showTriangle: true,
                showHeight: true,
                showFormula: true,
                showCalculation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radianMeasure': {
            name: 'Radian Measure',
            category: 'Trigonometry',
            description: 'Radians vs degrees on circle',
            type: 'radian_measure',
            defaultOptions: {
                title: 'Radian Measure',
                showCircle: true,
                showRadians: true,
                showDegrees: true,
                showConversion: true,
                showArcLength: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'sineGraph': {
            name: 'Sine Graph',
            category: 'Trigonometry',
            description: 'Graph of y = sin(x)',
            type: 'trig_graph',
            function: 'sine',
            defaultOptions: {
                title: 'Sine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cosineGraph': {
            name: 'Cosine Graph',
            category: 'Trigonometry',
            description: 'Graph of y = cos(x)',
            type: 'trig_graph',
            function: 'cosine',
            defaultOptions: {
                title: 'Cosine Graph',
                showGraph: true,
                showAmplitude: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tangentGraph': {
            name: 'Tangent Graph',
            category: 'Trigonometry',
            description: 'Graph of y = tan(x)',
            type: 'trig_graph',
            function: 'tangent',
            defaultOptions: {
                title: 'Tangent Graph',
                showGraph: true,
                showAsymptotes: true,
                showPeriod: true,
                showKeyPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trigGraphTransformations': {
            name: 'Trig Graph Transformations',
            category: 'Trigonometry',
            description: 'Effect of a, b, c, d on y = a sin(bx + c) + d',
            type: 'trig_transformations',
            defaultOptions: {
                title: 'Trigonometric Graph Transformations',
                showOriginal: true,
                showTransformed: true,
                showParameters: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== TRIGONOMETRY APPARATUS/PROCESS DIAGRAMS =====
        'bearingsDiagram': {
            name: 'Bearings Diagram',
            category: 'Trigonometry',
            description: 'Three-figure bearings and navigation',
            type: 'apparatus_diagram',
            apparatusType: 'bearings',
            bearing: 135,
            defaultOptions: {
                title: 'Bearings',
                showProcess: true,
                showNorth: true,
                showAngle: true,
                showMeasurement: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Direction/bearing angle',
                    constant: 'North reference line',
                    rule: 'Bearing measured clockwise from North (000° to 360°)'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'angleOfElevationDepression': {
            name: 'Angle of Elevation/Depression',
            category: 'Trigonometry',
            description: 'Real-world angle measurement scenarios',
            type: 'apparatus_diagram',
            apparatusType: 'elevation_depression',
            scenario: 'elevation',
            angle: 35,
            defaultOptions: {
                title: 'Angle of Elevation and Depression',
                showProcess: true,
                showHorizontal: true,
                showAngle: true,
                showScenario: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height/distance to object',
                    constant: 'Horizontal reference line',
                    rule: 'Elevation: angle above horizontal; Depression: angle below horizontal'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. VECTORS =====
        'vectorRepresentation': {
            name: 'Vector Representation',
            category: 'Vectors',
            description: 'Directed line segments with magnitude and direction',
            type: 'vector_diagram',
            vector: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector Representation',
                showArrow: true,
                showComponents: true,
                showMagnitude: true,
                showDirection: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorAddition': {
            name: 'Vector Addition',
            category: 'Vectors',
            description: 'Triangle and parallelogram methods',
            type: 'vector_addition',
            vector1: { x: 3, y: 2 },
            vector2: { x: 1, y: 4 },
            defaultOptions: {
                title: 'Vector Addition',
                showVectors: true,
                showTriangleMethod: true,
                showParallelogramMethod: true,
                showResultant: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vectorSubtraction': {
            name: 'Vector Subtraction',
            category: 'Vectors',
            description: 'Geometric vector subtraction',
            type: 'vector_subtraction',
            vector1: { x: 5, y: 3 },
            vector2: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Vector Subtraction',
                showVectors: true,
                showNegative: true,
                showResultant: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },
        'scalarMultiplication': {
            name: 'Scalar Multiplication of Vectors',
            category: 'Vectors',
            description: 'Effect of multiplying vector by scalar',
            type: 'scalar_multiplication',
            vector: { x: 2, y: 3 },
            scalar: 2,
            defaultOptions: {
                title: 'Scalar Multiplication',
                showOriginal: true,
                showScaled: true,
                showMagnitudeChange: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorComponents': {
            name: 'Vector Components',
            category: 'Vectors',
            description: 'Resolving vectors into i and j components',
            type: 'vector_components',
            vector: { magnitude: 5, angle: 37 },
            defaultOptions: {
                title: 'Vector Components',
                showVector: true,
                showXComponent: true,
                showYComponent: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dotProduct': {
            name: 'Dot Product (Scalar Product)',
            category: 'Vectors',
            description: 'Geometric interpretation of dot product',
            type: 'dot_product',
            vector1: { x: 3, y: 4 },
            vector2: { x: 2, y: 1 },
            defaultOptions: {
                title: 'Dot Product',
                showVectors: true,
                showAngle: true,
                showProjection: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'crossProduct': {
            name: 'Cross Product (Vector Product)',
            category: 'Vectors',
            description: 'Cross product in 3D space',
            type: 'cross_product',
            vector1: { x: 1, y: 0, z: 0 },
            vector2: { x: 0, y: 1, z: 0 },
            defaultOptions: {
                title: 'Cross Product',
                showVectors: true,
                showResultant: true,
                showRightHandRule: true,
                showFormula: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'vectorEquationLine': {
            name: 'Vector Equation of Line',
            category: 'Vectors',
            description: 'r = a + λb representation',
            type: 'vector_line_equation',
            point: { x: 1, y: 2 },
            direction: { x: 3, y: 4 },
            defaultOptions: {
                title: 'Vector Equation of Line',
                showLine: true,
                showPoint: true,
                showDirection: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'positionVectors': {
            name: 'Position Vectors',
            category: 'Vectors',
            description: 'Vectors from origin to points',
            type: 'position_vectors',
            points: [[2, 3], [5, 7], [-1, 4]],
            defaultOptions: {
                title: 'Position Vectors',
                showOrigin: true,
                showPoints: true,
                showVectors: true,
                showNotation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== VECTORS APPARATUS/PROCESS DIAGRAMS =====
        'vectorNavigationProblem': {
            name: 'Vector Navigation Problem',
            category: 'Vectors',
            description: 'Journey with multiple displacement vectors',
            type: 'apparatus_diagram',
            apparatusType: 'vector_navigation',
            journey: [
                { displacement: { x: 3, y: 4 }, label: 'A to B' },
                { displacement: { x: 2, y: -1 }, label: 'B to C' }
            ],
            defaultOptions: {
                title: 'Vector Navigation',
                showProcess: true,
                showPath: true,
                showVectors: true,
                showResultant: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Position after each displacement',
                    constant: 'Individual displacement vectors',
                    rule: 'Total displacement = sum of all displacement vectors'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MATRICES =====
        'matrixStructure': {
            name: 'Matrix Structure',
            category: 'Matrices',
            description: 'Rows, columns, and elements',
            type: 'matrix_structure',
            matrix: [[1, 2, 3], [4, 5, 6]],
            defaultOptions: {
                title: 'Matrix Structure',
                showMatrix: true,
                showRows: true,
                showColumns: true,
                showElements: true,
                showOrder: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixAddition': {
            name: 'Matrix Addition',
            category: 'Matrices',
            description: 'Element-by-element addition',
            type: 'matrix_addition',
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]],
            defaultOptions: {
                title: 'Matrix Addition',
                showMatrices: true,
                showProcess: true,
                showResult: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixScalarMultiplication': {
            name: 'Scalar Multiplication of Matrix',
            category: 'Matrices',
            description: 'Multiplying matrix by scalar',
            type: 'matrix_scalar',
            matrix: [[2, 3], [4, 5]],
            scalar: 3,
            defaultOptions: {
                title: 'Scalar Multiplication',
                showMatrix: true,
                showProcess: true,
                showResult: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'matrixMultiplication': {
            name: 'Matrix Multiplication',
            category: 'Matrices',
            description: 'Row by column multiplication',
            type: 'matrix_multiplication',
            matrix1: [[1, 2], [3, 4]],
            matrix2: [[5, 6], [7, 8]],
            defaultOptions: {
                title: 'Matrix Multiplication',
                showMatrices: true,
                showProcess: true,
                showRowColumn: true,
                showResult: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'determinant2x2': {
            name: '2×2 Determinant',
            category: 'Matrices',
            description: 'Calculation of 2×2 determinant',
            type: 'determinant',
            matrix: [[3, 8], [4, 6]],
            size: 2,
            defaultOptions: {
                title: '2×2 Determinant',
                showMatrix: true,
                showFormula: true,
                showCalculation: true,
                showDiagonals: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'determinant3x3': {
            name: '3×3 Determinant',
            category: 'Matrices',
            description: 'Calculation using cofactor expansion',
            type: 'determinant',
            matrix: [[1, 2, 3], [4, 5, 6], [7, 8, 9]],
            size: 3,
            defaultOptions: {
                title: '3×3 Determinant',
                showMatrix: true,
                showExpansion: true,
                showMinors: true,
                showCalculation: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'inverseMatrix': {
            name: 'Inverse Matrix',
            category: 'Matrices',
            description: '2×2 matrix inverse calculation',
            type: 'matrix_inverse',
            matrix: [[4, 7], [2, 6]],
            defaultOptions: {
                title: 'Inverse Matrix',
                showMatrix: true,
                showDeterminant: true,
                showAdjugate: true,
                showResult: true,
                showFormula: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'matrixTransformation': {
            name: 'Matrix Transformation',
            category: 'Matrices',
            description: 'Geometric transformation using matrices',
            type: 'matrix_transformation',
            transformationType: 'rotation',
            angle: 90,
            defaultOptions: {
                title: 'Matrix Transformation',
                showOriginal: true,
                showTransformed: true,
                showMatrix: true,
                showCalculation: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MATRICES APPARATUS/PROCESS DIAGRAMS =====
        'matrixMultiplicationProcess': {
            name: 'Matrix Multiplication Process',
            category: 'Matrices',
            description: 'Step-by-step row-column multiplication',
            type: 'apparatus_diagram',
            apparatusType: 'matrix_multiplication_process',
            matrix1: [[1, 2, 3], [4, 5, 6]],
            matrix2: [[7, 8], [9, 10], [11, 12]],
            defaultOptions: {
                title: 'Matrix Multiplication Process',
                showProcess: true,
                showSteps: true,
                showHighlighting: true,
                showResult: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Current row and column being multiplied',
                    constant: 'Original matrices',
                    rule: 'Element (i,j) = sum of (row i of A) × (column j of B)'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'systemOfEquationsMatrixForm': {
            name: 'System of Equations - Matrix Form',
            category: 'Matrices',
            description: 'Converting system to matrix equation',
            type: 'apparatus_diagram',
            apparatusType: 'system_matrix',
            equations: ['2x + 3y = 8', 'x - y = 1'],
            defaultOptions: {
                title: 'System of Equations (Matrix Form)',
                showProcess: true,
                showEquations: true,
                showMatrixForm: true,
                showSolution: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Matrix operations to isolate variables',
                    constant: 'System coefficients',
                    rule: 'AX = B, so X = A⁻¹B'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. SEQUENCES AND SERIES =====
        'arithmeticSequence': {
            name: 'Arithmetic Sequence',
            category: 'Sequences & Series',
            description: 'Linear sequence with common difference',
            type: 'arithmetic_sequence',
            firstTerm: 3,
            commonDifference: 4,
            numTerms: 10,
            defaultOptions: {
                title: 'Arithmetic Sequence',
                showSequence: true,
                showFormula: true,
                showNthTerm: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSequence': {
            name: 'Geometric Sequence',
            category: 'Sequences & Series',
            description: 'Exponential sequence with common ratio',
            type: 'geometric_sequence',
            firstTerm: 2,
            commonRatio: 3,
            numTerms: 8,
            defaultOptions: {
                title: 'Geometric Sequence',
                showSequence: true,
                showFormula: true,
                showNthTerm: true,
                showGraph: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
            },

        'arithmeticSeries': {
            name: 'Arithmetic Series Sum',
            category: 'Sequences & Series',
            description: 'Sum of arithmetic sequence',
            type: 'arithmetic_series',
            firstTerm: 2,
            lastTerm: 50,
            numTerms: 25,
            defaultOptions: {
                title: 'Arithmetic Series',
                showSequence: true,
                showPairing: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSeries': {
            name: 'Geometric Series Sum',
            category: 'Sequences & Series',
            description: 'Sum of geometric sequence',
            type: 'geometric_series',
            firstTerm: 3,
            commonRatio: 2,
            numTerms: 6,
            defaultOptions: {
                title: 'Geometric Series',
                showSequence: true,
                showFormula: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'infiniteGeometricSeries': {
            name: 'Infinite Geometric Series',
            category: 'Sequences & Series',
            description: 'Convergent infinite series when |r| < 1',
            type: 'infinite_geometric_series',
            firstTerm: 4,
            commonRatio: 0.5,
            defaultOptions: {
                title: 'Infinite Geometric Series',
                showSequence: true,
                showConvergence: true,
                showFormula: true,
                showSum: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'sequenceRecursive': {
            name: 'Recursive Sequence',
            category: 'Sequences & Series',
            description: 'Sequence defined by recurrence relation',
            type: 'recursive_sequence',
            recurrence: 'uₙ = 2uₙ₋₁ + 1',
            firstTerm: 1,
            numTerms: 8,
            defaultOptions: {
                title: 'Recursive Sequence',
                showSequence: true,
                showRecurrence: true,
                showCalculation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'binomialExpansion': {
            name: 'Binomial Expansion',
            category: 'Sequences & Series',
            description: '(a + b)ⁿ expansion',
            type: 'binomial_expansion',
            a: 'x',
            b: '2',
            n: 4,
            defaultOptions: {
                title: 'Binomial Expansion',
                showExpansion: true,
                showCoefficients: true,
                showPascalTriangle: false,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pascalTriangle': {
            name: "Pascal's Triangle",
            category: 'Sequences & Series',
            description: 'Triangle of binomial coefficients',
            type: 'pascal_triangle',
            rows: 8,
            defaultOptions: {
                title: "Pascal's Triangle",
                showTriangle: true,
                highlightRow: 5,
                showPatterns: true,
                showBinomialConnection: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'fibonacciSequence': {
            name: 'Fibonacci Sequence',
            category: 'Sequences & Series',
            description: 'Each term is sum of previous two',
            type: 'fibonacci_sequence',
            numTerms: 12,
            defaultOptions: {
                title: 'Fibonacci Sequence',
                showSequence: true,
                showRecurrence: true,
                showGoldenRatio: true,
                showSpiral: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== SEQUENCES APPARATUS/PROCESS DIAGRAMS =====
        'arithmeticSeriesVisualProof': {
            name: 'Arithmetic Series Visual Proof',
            category: 'Sequences & Series',
            description: 'Gauss method of pairing terms',
            type: 'apparatus_diagram',
            apparatusType: 'arithmetic_series_proof',
            firstTerm: 1,
            lastTerm: 100,
            numTerms: 100,
            defaultOptions: {
                title: 'Arithmetic Series Visual Proof',
                showProcess: true,
                showPairing: true,
                showSum: true,
                showDerivation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Paired sums',
                    constant: 'Sum of each pair',
                    rule: 'Sum = n(first + last)/2'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'geometricSeriesDerivation': {
            name: 'Geometric Series Formula Derivation',
            category: 'Sequences & Series',
            description: 'Algebraic derivation of geometric series formula',
            type: 'apparatus_diagram',
            apparatusType: 'geometric_series_derivation',
            firstTerm: 'a',
            commonRatio: 'r',
            defaultOptions: {
                title: 'Geometric Series Derivation',
                showProcess: true,
                showSteps: true,
                showAlgebra: true,
                showFormula: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Algebraic manipulations',
                    constant: 'First term a, common ratio r',
                    rule: 'Sₙ = a(1-rⁿ)/(1-r) or a(rⁿ-1)/(r-1)'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. SET THEORY =====
        'setNotation': {
            name: 'Set Notation',
            category: 'Set Theory',
            description: 'Different ways to represent sets',
            type: 'set_notation',
            set: [2, 4, 6, 8, 10],
            defaultOptions: {
                title: 'Set Notation',
                showRoster: true,
                showSetBuilder: true,
                showDescription: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagram2Sets': {
            name: 'Venn Diagram (2 Sets)',
            category: 'Set Theory',
            description: 'Visual representation of two sets',
            type: 'venn_diagram',
            setA: [1, 2, 3, 4, 5],
            setB: [4, 5, 6, 7, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            defaultOptions: {
                title: 'Venn Diagram',
                showSets: true,
                showIntersection: true,
                showUnion: true,
                showElements: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vennDiagram3Sets': {
            name: 'Venn Diagram (3 Sets)',
            category: 'Set Theory',
            description: 'Visual representation of three sets',
            type: 'venn_diagram_3',
            setA: [1, 2, 3, 4, 5, 6, 7],
            setB: [4, 5, 6, 8, 9, 10],
            setC: [6, 7, 10, 11, 12],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13],
            defaultOptions: {
                title: 'Venn Diagram (3 Sets)',
                showSets: true,
                showIntersections: true,
                showElements: true,
                showRegions: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsUnion': {
            name: 'Set Union (A ∪ B)',
            category: 'Set Theory',
            description: 'Elements in A or B or both',
            type: 'set_operation',
            operation: 'union',
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            defaultOptions: {
                title: 'Set Union',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsIntersection': {
            name: 'Set Intersection (A ∩ B)',
            category: 'Set Theory',
            description: 'Elements in both A and B',
            type: 'set_operation',
            operation: 'intersection',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            defaultOptions: {
                title: 'Set Intersection',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsComplement': {
            name: "Set Complement (A')",
            category: 'Set Theory',
            description: 'Elements not in A',
            type: 'set_operation',
            operation: 'complement',
            setA: [2, 4, 6, 8],
            universal: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            defaultOptions: {
                title: 'Set Complement',
                showSet: true,
                showUniversal: true,
                showComplement: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'setOperationsDifference': {
            name: 'Set Difference (A - B)',
            category: 'Set Theory',
            description: 'Elements in A but not in B',
            type: 'set_operation',
            operation: 'difference',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7],
            defaultOptions: {
                title: 'Set Difference',
                showSets: true,
                showOperation: true,
                showResult: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'subsetDiagram': {
            name: 'Subset Relationship',
            category: 'Set Theory',
            description: 'Visual representation of A ⊆ B',
            type: 'subset_diagram',
            setA: [2, 4, 6],
            setB: [1, 2, 3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Subset Relationship',
                showSets: true,
                showContainment: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'disjointSets': {
            name: 'Disjoint Sets',
            category: 'Set Theory',
            description: 'Sets with no common elements',
            type: 'disjoint_sets',
            setA: [1, 2, 3],
            setB: [4, 5, 6],
            defaultOptions: {
                title: 'Disjoint Sets',
                showSets: true,
                showSeparation: true,
                showVenn: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cardinality': {
            name: 'Cardinality of Sets',
            category: 'Set Theory',
            description: 'Number of elements in sets',
            type: 'cardinality',
            setA: [1, 2, 3, 4, 5],
            setB: [3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Cardinality',
                showSets: true,
                showCounts: true,
                showFormula: true,
                showVenn: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'deMorgansLaws': {
            name: "De Morgan's Laws",
            category: 'Set Theory',
            description: 'Complement of union and intersection',
            type: 'de_morgans_laws',
            setA: [1, 2, 3, 4],
            setB: [3, 4, 5, 6],
            universal: [1, 2, 3, 4, 5, 6, 7, 8],
            defaultOptions: {
                title: "De Morgan's Laws",
                showLaw1: true,
                showLaw2: true,
                showProof: true,
                showVenn: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== SET THEORY APPARATUS/PROCESS DIAGRAMS =====
        'vennDiagramProblemSolving': {
            name: 'Venn Diagram Problem Solving',
            category: 'Set Theory',
            description: 'Step-by-step solution using Venn diagrams',
            type: 'apparatus_diagram',
            apparatusType: 'venn_problem_solving',
            problem: {
                total: 100,
                A: 60,
                B: 50,
                both: 30
            },
            defaultOptions: {
                title: 'Venn Diagram Problem Solving',
                showProcess: true,
                showSteps: true,
                showRegions: true,
                showCalculations: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Region values (A only, B only, both, neither)',
                    constant: 'Total number of elements',
                    rule: 'Start with intersection, work outwards, use totals to find unknowns'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'setBuilderNotationProcess': {
            name: 'Set Builder Notation Process',
            category: 'Set Theory',
            description: 'Converting between roster and set-builder notation',
            type: 'apparatus_diagram',
            apparatusType: 'set_builder_process',
            set: [2, 4, 6, 8, 10, 12],
            defaultOptions: {
                title: 'Set Builder Notation',
                showProcess: true,
                showPattern: true,
                showCondition: true,
                showConversion: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Form of representation (roster vs set-builder)',
                    constant: 'Elements in the set',
                    rule: 'Identify pattern/property that all elements share'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. STATISTICS & PROBABILITY =====
        'barChart': {
            name: 'Bar Chart',
            category: 'Statistics',
            description: 'Discrete data visualization',
            type: 'bar_chart',
            data: { labels: ['A', 'B', 'C', 'D', 'E'], values: [12, 19, 15, 8, 22] },
            defaultOptions: {
                title: 'Bar Chart',
                showBars: true,
                showAxes: true,
                showValues: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'histogram': {
            name: 'Histogram',
            category: 'Statistics',
            description: 'Continuous data frequency distribution',
            type: 'histogram',
            data: {
                intervals: [[0, 10], [10, 20], [20, 30], [30, 40]],
                frequencies: [5, 12, 18, 9]
            },
            defaultOptions: {
                title: 'Histogram',
                showBars: true,
                showAxes: true,
                showFrequency: true,
                showIntervals: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pieChart': {
            name: 'Pie Chart',
            category: 'Statistics',
            description: 'Proportional data visualization',
            type: 'pie_chart',
            data: { labels: ['A', 'B', 'C', 'D'], values: [30, 45, 60, 25] },
            defaultOptions: {
                title: 'Pie Chart',
                showSlices: true,
                showLabels: true,
                showPercentages: true,
                showAngles: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'lineGraph': {
            name: 'Line Graph',
            category: 'Statistics',
            description: 'Time series or continuous data',
            type: 'line_graph',
            data: {
                xValues: [0, 1, 2, 3, 4, 5],
                yValues: [2, 5, 4, 8, 7, 10]
            },
            defaultOptions: {
                title: 'Line Graph',
                showLine: true,
                showPoints: true,
                showAxes: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'scatterPlot': {
            name: 'Scatter Plot',
            category: 'Statistics',
            description: 'Bivariate data and correlation',
            type: 'scatter_plot',
            data: [
                [1, 2], [2, 4], [3, 5], [4, 4], [5, 7], [6, 8]
            ],
            defaultOptions: {
                title: 'Scatter Plot',
                showPoints: true,
                showLineOfBestFit: true,
                showCorrelation: true,
                showAxes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stemAndLeafPlot': {
            name: 'Stem-and-Leaf Plot',
            category: 'Statistics',
            description: 'Ordered data display showing distribution',
            type: 'stem_leaf',
            data: [23, 25, 27, 31, 33, 34, 38, 42, 45, 47, 51, 53],
            defaultOptions: {
                title: 'Stem-and-Leaf Plot',
                showStem: true,
                showLeaves: true,
                showKey: true,
                showOrdered: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'boxPlot': {
            name: 'Box-and-Whisker Plot',
            category: 'Statistics',
            description: 'Five-number summary visualization',
            type: 'box_plot',
            data: { min: 10, Q1: 25, median: 35, Q3: 50, max: 70 },
            defaultOptions: {
                title: 'Box Plot',
                showBox: true,
                showWhiskers: true,
                showMedian: true,
                showQuartiles: true,
                showOutliers: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },
        'frequencyPolygon': {
            name: 'Frequency Polygon',
            category: 'Statistics',
            description: 'Line graph of frequency distribution',
            type: 'frequency_polygon',
            data: {
                midpoints: [5, 15, 25, 35, 45],
                frequencies: [3, 8, 12, 7, 4]
            },
            defaultOptions: {
                title: 'Frequency Polygon',
                showPolygon: true,
                showPoints: true,
                showAxes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cumulativeFrequencyCurve': {
            name: 'Cumulative Frequency Curve',
            category: 'Statistics',
            description: 'Ogive showing cumulative frequencies',
            type: 'cumulative_frequency',
            data: {
                upperBounds: [10, 20, 30, 40, 50],
                cumulativeFrequencies: [5, 13, 28, 40, 50]
            },
            defaultOptions: {
                title: 'Cumulative Frequency Curve',
                showCurve: true,
                showPoints: true,
                showMedian: true,
                showQuartiles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'meanMedianMode': {
            name: 'Mean, Median, Mode',
            category: 'Statistics',
            description: 'Measures of central tendency visualization',
            type: 'central_tendency',
            data: [2, 3, 4, 4, 5, 5, 5, 6, 7, 8],
            defaultOptions: {
                title: 'Measures of Central Tendency',
                showData: true,
                showMean: true,
                showMedian: true,
                showMode: true,
                showCalculations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rangeAndIQR': {
            name: 'Range and Interquartile Range',
            category: 'Statistics',
            description: 'Measures of spread',
            type: 'spread_measures',
            data: [12, 15, 18, 22, 25, 28, 32, 35, 40, 45],
            defaultOptions: {
                title: 'Range and IQR',
                showData: true,
                showRange: true,
                showQuartiles: true,
                showIQR: true,
                showBoxPlot: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'probabilityTreeDiagram': {
            name: 'Probability Tree Diagram',
            category: 'Probability',
            description: 'Sequential probability events',
            type: 'probability_tree',
            events: [
                {
                    name: 'First flip',
                    outcomes: [
                        { label: 'H', probability: 0.5 },
                        { label: 'T', probability: 0.5 }
                    ]
                },
                {
                    name: 'Second flip',
                    outcomes: [
                        { label: 'H', probability: 0.5 },
                        { label: 'T', probability: 0.5 }
                    ]
                }
            ],
            defaultOptions: {
                title: 'Probability Tree Diagram',
                showTree: true,
                showProbabilities: true,
                showOutcomes: true,
                showCalculations: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'probabilityVennDiagram': {
            name: 'Probability Venn Diagram',
            category: 'Probability',
            description: 'Visual probability with sets',
            type: 'probability_venn',
            P_A: 0.6,
            P_B: 0.5,
            P_A_and_B: 0.3,
            defaultOptions: {
                title: 'Probability Venn Diagram',
                showVenn: true,
                showProbabilities: true,
                showRegions: true,
                showCalculations: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== STATISTICS APPARATUS/PROCESS DIAGRAMS =====
        'meanCalculationProcess': {
            name: 'Mean Calculation Process',
            category: 'Statistics',
            description: 'Step-by-step mean calculation from frequency table',
            type: 'apparatus_diagram',
            apparatusType: 'mean_calculation',
            data: {
                values: [2, 3, 4, 5, 6],
                frequencies: [3, 5, 8, 4, 2]
            },
            defaultOptions: {
                title: 'Mean Calculation Process',
                showProcess: true,
                showTable: true,
                showProducts: true,
                showSum: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Products (x × f), running totals',
                    constant: 'Original data values and frequencies',
                    rule: 'Mean = Σ(x×f) / Σf'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'standardDeviationProcess': {
            name: 'Standard Deviation Process',
            category: 'Statistics',
            description: 'Step-by-step standard deviation calculation',
            type: 'apparatus_diagram',
            apparatusType: 'standard_deviation',
            data: [4, 7, 9, 11, 14],
            defaultOptions: {
                title: 'Standard Deviation Process',
                showProcess: true,
                showMean: true,
                showDeviations: true,
                showSquares: true,
                showVariance: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deviations from mean, squared deviations',
                    constant: 'Original data, mean',
                    rule: 'σ = √[Σ(x-μ)²/n]'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'quartileCalculationProcess': {
            name: 'Quartile Calculation from Data',
            category: 'Statistics',
            description: 'Finding Q1, Q2, Q3 from ordered data',
            type: 'apparatus_diagram',
            apparatusType: 'quartile_calculation',
            data: [12, 15, 18, 22, 25, 28, 32, 35, 40, 45, 50],
            defaultOptions: {
                title: 'Quartile Calculation',
                showProcess: true,
                showOrdering: true,
                showPositions: true,
                showQuartiles: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Quartile positions and values',
                    constant: 'Ordered data set',
                    rule: 'Q2 = median, Q1 = median of lower half, Q3 = median of upper half'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 11. CALCULUS (if needed for advanced topics) =====
        'gradientOfCurve': {
            name: 'Gradient of Curve',
            category: 'Calculus',
            description: 'Tangent line and gradient at a point',
            type: 'gradient_curve',
            function: 'x²',
            point: 2,
            defaultOptions: {
                title: 'Gradient of Curve',
                showCurve: true,
                showTangent: true,
                showGradient: true,
                showPoint: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'areaUnderCurve': {
            name: 'Area Under Curve',
            category: 'Calculus',
            description: 'Approximating area with rectangles',
            type: 'area_under_curve',
            function: 'x²',
            lowerBound: 0,
            upperBound: 3,
            numRectangles: 6,
            defaultOptions: {
                title: 'Area Under Curve',
                showCurve: true,
                showRectangles: true,
                showArea: true,
                showApproximation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 12. LOGIC & REASONING =====
        'truthTable': {
            name: 'Truth Table',
            category: 'Logic',
            description: 'Logical operations truth table',
            type: 'truth_table',
            operation: 'AND',
            defaultOptions: {
                title: 'Truth Table - AND',
                showTable: true,
                showInputs: true,
                showOutput: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'logicGates': {
            name: 'Logic Gates Diagram',
            category: 'Logic',
            description: 'AND, OR, NOT gate symbols',
            type: 'logic_gates',
            gates: ['AND', 'OR', 'NOT', 'NAND', 'NOR'],
            defaultOptions: {
                title: 'Logic Gates',
                showGates: true,
                showSymbols: true,
                showTruthTables: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        }
    };

    // ===== UTILITY METHODS =====
    
    static getDiagram(key) {
        return this.diagrams[key];
    }

    static getAllDiagrams() {
        return Object.keys(this.diagrams);
    }

    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.category === category)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramsByType(type) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type === type)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getApparatusDiagrams() {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type === 'apparatus_diagram')
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getSolveAsYouDrawDiagrams() {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type !== 'apparatus_diagram')
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            const apparatusDiagrams = Object.entries(diagrams)
                .filter(([_, d]) => d.type === 'apparatus_diagram');
            const solveDiagrams = Object.entries(diagrams)
                .filter(([_, d]) => d.type !== 'apparatus_diagram');
            
            stats[category] = {
                total: Object.keys(diagrams).length,
                apparatus: apparatusDiagrams.length,
                solve: solveDiagrams.length,
                diagrams: Object.keys(diagrams)
            };
        });
        return stats;
    }

    static getCategoryDescription(category) {
        const descriptions = {
            'Number Theory': 'Properties of numbers, primes, factors, and number systems',
            'Algebra': 'Equations, expressions, graphs, and algebraic manipulation',
            'Functions': 'Function notation, types, transformations, and composition',
            'Geometry': 'Shapes, angles, theorems, constructions, and coordinate geometry',
            'Trigonometry': 'Right triangles, unit circle, graphs, and trigonometric identities',
            'Vectors': 'Vector operations, magnitude, direction, and applications',
            'Matrices': 'Matrix operations, determinants, inverses, and transformations',
            'Sequences & Series': 'Arithmetic and geometric sequences, series, and binomial expansion',
            'Set Theory': 'Sets, operations, Venn diagrams, and set relationships',
            'Statistics': 'Data representation, measures of central tendency and spread',
            'Probability': 'Probability calculations, tree diagrams, and probability distributions',
            'Calculus': 'Gradients, rates of change, and area under curves',
            'Logic': 'Truth tables, logical operations, and reasoning'
        };
        return descriptions[category] || 'Mathematics diagrams';
    }

    static getAnalogies(diagramKey) {
        const analogies = {
            // Number Theory
            'numberLine': ['Like a ruler measuring distances', 'Temperature scale showing hot and cold'],
            'primeFactorTree': ['Family tree showing ancestors', 'Organizational chart breaking down a company'],
            'sieveOfEratosthenes': ['Sifting flour through a sieve', 'Filtering water through mesh'],
            
            // Algebra
            'algebraicBalanceModel': ['Weighing scale that must stay balanced', 'Seesaw with equal weights'],
            'linearGraphPlot': ['Steady climb up a hill', 'Car driving at constant speed'],
            'quadraticParabola': ['Path of a thrown ball', 'Shape of a satellite dish'],
            'algebraTilesModel': ['Building with LEGO blocks', 'Arranging furniture in a room'],
            
            // Functions
            'functionMachine': ['Vending machine: input money, output snack', 'Factory assembly line'],
            'mappingDiagram': ['Phone book connecting names to numbers', 'Students matched to desks'],
            'compositeFunction': ['Two machines in sequence', 'Putting on socks then shoes'],
            
            // Geometry
            'pythagoreanTheorem': ['Right triangle as corner of a square', 'Walking around a city block'],
            'circleTheorem1': ['Pizza slice angle from center vs edge', 'Clock hands forming angles'],
            'compassStraightedgeConstruction': ['Drawing with only ruler and compass', 'Ancient Greek geometry'],
            'transformationProcess': ['Looking in a mirror', 'Sliding a book across table'],
            
            // Trigonometry
            'rightTriangleTrigRatios': ['Ladder against wall problem', 'Ramp slope calculation'],
            'unitCircle': ['Clock face with special times', 'Ferris wheel rotation'],
            'bearingsDiagram': ['Ship navigation compass', 'Airplane flight direction'],
            'angleOfElevationDepression': ['Looking up at tall building', 'Viewing from airplane window'],
            
            // Vectors
            'vectorAddition': ['Walking two different paths', 'Wind affecting airplane flight'],
            'vectorNavigationProblem': ['Treasure hunt with multiple clues', 'Delivery route with stops'],
            
            // Matrices
            'matrixTransformation': ['Image rotation on computer', 'Stretching/squashing a picture'],
            'matrixMultiplication': ['Combining transformations', 'Recipe scaling and conversion'],
            
            // Sequences
            'arithmeticSequence': ['Saving money regularly', 'Counting by 5s'],
            'geometricSequence': ['Population doubling', 'Chain letter spreading'],
            'fibonacciSequence': ['Rabbit population growth', 'Spiral in sunflower seeds'],
            'pascalTriangle': ['Building a pyramid of numbers', 'Binomial expansion coefficients'],
            
            // Sets
            'vennDiagram2Sets': ['Overlapping circles of friends', 'Students in multiple clubs'],
            'vennDiagramProblemSolving': ['Sorting items by categories', 'Finding common interests'],
            
            // Statistics
            'barChart': ['Comparing heights of buildings', 'Survey results visualization'],
            'histogram': ['Distribution of test scores', 'Age groups in population'],
            'boxPlot': ['Five-number summary on number line', 'Data spread visualization'],
            'scatterPlot': ['Height vs weight relationship', 'Study time vs test scores'],
            
            // Probability
            'probabilityTreeDiagram': ['Decision tree with chances', 'Tournament bracket outcomes'],
            'probabilityVennDiagram': ['Overlapping events', 'Conditional probability situations']
        };
        return analogies[diagramKey] || [];
    }

    static getGoldenQuestions(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (diagram && diagram.defaultOptions && diagram.defaultOptions.goldenQuestions) {
            return diagram.defaultOptions.goldenQuestions;
        }
        return null;
    }

    static getDiagramPedagogy(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (!diagram) return null;

        const isApparatus = diagram.type === 'apparatus_diagram';
        
        return {
            name: diagram.name,
            category: diagram.category,
            type: isApparatus ? 'Read-as-you-draw (Process/Situation)' : 'Solve-as-you-draw',
            approach: isApparatus ? 
                'Draw situation → Label quantities → Identify relationships → Apply rules' :
                'Abstract representation → Apply methods → Solve problems',
            goldenQuestions: this.getGoldenQuestions(diagramKey),
            analogies: this.getAnalogies(diagramKey),
            learningValue: isApparatus ?
                'Visual-first reasoning: the diagram reveals the mathematics' :
                'Problem-solving tool: visualize to understand and solve'
        };
    }

    static getCategorySummary() {
        const categories = this.getAllCategories();
        const summary = {};
        
        categories.forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            const apparatusCount = Object.values(diagrams)
                .filter(d => d.type === 'apparatus_diagram').length;
            const solveCount = Object.keys(diagrams).length - apparatusCount;
            
            summary[category] = {
                description: this.getCategoryDescription(category),
                totalDiagrams: Object.keys(diagrams).length,
                apparatusDiagrams: apparatusCount,
                solveDiagrams: solveCount,
                diagramKeys: Object.keys(diagrams)
            };
        });
        
        return summary;
    }

    static getCompleteDiagramList() {
        const categories = this.getAllCategories();
        const list = [];
        
        categories.forEach(category => {
            list.push(`\n=== ${category.toUpperCase()} ===`);
            const diagrams = this.getDiagramsByCategory(category);
            
            Object.entries(diagrams).forEach(([key, diagram]) => {
                const type = diagram.type === 'apparatus_diagram' ? '[PROCESS]' : '[SOLVE]';
                list.push(`${type} ${diagram.name} - ${diagram.description}`);
            });
        });
        
        return list.join('\n');
    }

    static validateDiagram(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (!diagram) {
            return { valid: false, error: 'Diagram not found' };
        }

        const required = ['name', 'category', 'description', 'type', 'defaultOptions'];
        const missing = required.filter(field => !diagram[field]);
        
        if (missing.length > 0) {
            return { valid: false, error: `Missing required fields: ${missing.join(', ')}` };
        }

        if (diagram.type === 'apparatus_diagram') {
            if (!diagram.apparatusType) {
                return { valid: false, error: 'Apparatus diagram missing apparatusType' };
            }
            if (!diagram.defaultOptions.goldenQuestions) {
                return { valid: false, error: 'Apparatus diagram missing goldenQuestions' };
            }
        }

        return { valid: true };
    }

    static getRandomDiagram(category = null) {
        let diagrams;
        if (category) {
            diagrams = this.getDiagramsByCategory(category);
        } else {
            diagrams = this.diagrams;
        }
        
        const keys = Object.keys(diagrams);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return { key: randomKey, diagram: diagrams[randomKey] };
    }

    static exportToJSON() {
        return JSON.stringify(this.diagrams, null, 2);
    }

    static getTotalCount() {
        return Object.keys(this.diagrams).length;
    }

    static getApparatusCount() {
        return Object.values(this.diagrams)
            .filter(d => d.type === 'apparatus_diagram').length;
    }

    static getSolveCount() {
        return this.getTotalCount() - this.getApparatusCount();
    }

    static getStatistics() {
        return {
            totalDiagrams: this.getTotalCount(),
            apparatusDiagrams: this.getApparatusCount(),
            solveDiagrams: this.getSolveCount(),
            categories: this.getAllCategories().length,
            categorySummary: this.getCategorySummary()
        };
    }

    static getDiagramsByDifficulty(difficulty) {
        // Helper method to categorize diagrams by difficulty
        const basicDiagrams = [
            'numberLine', 'angleTypes', 'triangleTypes', 'barChart', 'pieChart',
            'vectorRepresentation', 'setNotation', 'vennDiagram2Sets'
        ];
        
        const intermediateDiagrams = [
            'quadraticParabola', 'pythagoreanTheorem', 'sineRuleDiagram',
            'matrixMultiplication', 'arithmeticSeries', 'histogram'
        ];
        
        const advancedDiagrams = [
            'determinant3x3', 'binomialExpansion', 'trigGraphTransformations',
            'crossProduct', 'infiniteGeometricSeries'
        ];

        let targetKeys;
        if (difficulty === 'basic') targetKeys = basicDiagrams;
        else if (difficulty === 'intermediate') targetKeys = intermediateDiagrams;
        else if (difficulty === 'advanced') targetKeys = advancedDiagrams;
        else return {};

        return Object.entries(this.diagrams)
            .filter(([key, _]) => targetKeys.includes(key))
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getSuggestedSequence(category) {
        // Suggested learning sequence for each category
        const sequences = {
            'Number Theory': [
                'numberLine', 'primeFactorTree', 'vennDiagramFactors',
                'realNumberHierarchy', 'sieveOfEratosthenes', 'euclideanAlgorithm'
            ],
            'Algebra': [
                'algebraicBalanceModel', 'linearGraphPlot', 'quadraticParabola',
                'simultaneousEquationsGraph', 'algebraTilesModel', 'factorBoxMethod'
            ],
            'Geometry': [
                'angleTypes', 'triangleTypes', 'pythagoreanTheorem',
                'circleTheorem1', 'compassStraightedgeConstruction', 'transformationProcess'
            ],
            'Trigonometry': [
                'rightTriangleTrigRatios', 'specialAnglesTriangle', 'unitCircle',
                'sineRuleDiagram', 'sineGraph', 'bearingsDiagram'
            ]
        };
        return sequences[category] || [];
    }

    static getPrerequisites(diagramKey) {
        // Define prerequisite diagrams for advanced concepts
        const prerequisites = {
            'quadraticParabola': ['linearGraphPlot'],
            'quadraticFormulaVisual': ['quadraticParabola'],
            'simultaneousEquationsGraph': ['linearGraphPlot'],
            'matrixMultiplication': ['matrixAddition', 'matrixStructure'],
            'inverseMatrix': ['determinant2x2', 'matrixMultiplication'],
            'geometricSeries': ['geometricSequence'],
            'binomialExpansion': ['pascalTriangle', 'arithmeticSequence'],
            'trigGraphTransformations': ['sineGraph', 'cosineGraph'],
            'compositeFunction': ['functionMachine', 'mappingDiagram'],
            'crossProduct': ['dotProduct', 'vectorRepresentation']
        };
        return prerequisites[diagramKey] || [];
    }

    static getRelatedDiagrams(diagramKey) {
        // Find diagrams related by concept
        const diagram = this.diagrams[diagramKey];
        if (!diagram) return [];

        // Get all diagrams in same category
        const sameCategoryDiagrams = Object.keys(
            this.getDiagramsByCategory(diagram.category)
        ).filter(key => key !== diagramKey);

        // Get diagrams with similar type
        const sameTypeDiagrams = Object.keys(
            this.getDiagramsByType(diagram.type)
        ).filter(key => key !== diagramKey && !sameCategoryDiagrams.includes(key));

        return {
            sameCategory: sameCategoryDiagrams.slice(0, 5),
            sameType: sameTypeDiagrams.slice(0, 3)
        };
    }
    static printSummary() {
        console.log('='.repeat(60));
        console.log('MATHEMATICS DIAGRAMS REGISTRY SUMMARY');
        console.log('='.repeat(60));
        
        const stats = this.getStatistics();
        console.log(`\nTotal Diagrams: ${stats.totalDiagrams}`);
        console.log(`  - Solve-as-you-draw: ${stats.solveDiagrams}`);
        console.log(`  - Process/Situation (Read-as-you-draw): ${stats.apparatusDiagrams}`);
        console.log(`Total Categories: ${stats.categories}\n`);
        
        Object.entries(stats.categorySummary).forEach(([category, data]) => {
            console.log(`${category}:`);
            console.log(`  ${data.description}`);
            console.log(`  Total: ${data.totalDiagrams} (${data.solveDiagrams} solve, ${data.apparatusDiagrams} process)`);
        });
        
        console.log('\n' + '='.repeat(60));
    }

    static getQuickReference() {
        return {
            totalDiagrams: this.getTotalCount(),
            categories: this.getAllCategories(),
            commonDiagrams: {
                'Number Theory': ['numberLine', 'primeFactorTree', 'vennDiagramFactors'],
                'Algebra': ['linearGraphPlot', 'quadraticParabola', 'algebraicBalanceModel'],
                'Geometry': ['pythagoreanTheorem', 'circleTheorem1', 'triangleTypes'],
                'Trigonometry': ['rightTriangleTrigRatios', 'unitCircle', 'sineGraph'],
                'Statistics': ['barChart', 'histogram', 'boxPlot'],
                'Sets': ['vennDiagram2Sets', 'vennDiagram3Sets']
            },
            processDiagrams: Object.keys(this.getApparatusDiagrams()),
            quickSearch: (term) => Object.keys(this.searchDiagrams(term))
        };
    }
}

export { MathematicsDiagramsRegistry };
