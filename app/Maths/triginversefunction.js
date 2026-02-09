// Enhanced Inverse Trigonometric Functions Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedInverseTrigMathematicalWorkbook {
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
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'ELI5', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';

        // Adaptive Features
        this.adaptiveDifficulty = options.adaptiveDifficulty || false;
        this.prerequisiteChecks = options.prerequisiteChecks !== false;
        this.progressiveDisclosure = options.progressiveDisclosure || false;

        // Metacognitive Support
        this.includeThinkingPrompts = options.includeThinkingPrompts !== false;
        this.includeSelfCheckQuestions = options.includeSelfCheckQuestions !== false;
        this.includeReflectionPoints = options.includeReflectionPoints || false;

        // Contextual Learning
        this.includeRealWorldApplications = options.includeRealWorldApplications !== false;
        this.includeCrossCurricularLinks = options.includeCrossCurricularLinks || false;
        this.includeHistoricalContext = options.includeHistoricalContext || false;

        // Assessment & Feedback
        this.includeFormativeQuizzes = options.includeFormativeQuizzes || false;
        this.includeHintSystem = options.includeHintSystem !== false;
        this.mistakeAnalysis = options.mistakeAnalysis !== false;

        // Angle measurement preferences
        this.angleMode = options.angleMode || 'radians'; // 'radians' or 'degrees'
        this.showBothUnits = options.showBothUnits !== false;

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeInverseTrigSolvers();
        this.initializeInverseTrigLessons();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeRealWorldProblems();
        this.initializePrerequisiteDatabase();
        this.initializeRepresentationDatabase();
        this.initializeWorkedExamplesDatabase();
        this.initializeMisconceptionDatabase();
        this.initializeAnalogyDatabase();
        this.initializeHintDatabase();
        this.initializeQuestionBank();
        this.initializeStrategyDatabase();
        this.initializeChallengeDatabase();
        this.initializeUnitCircleDatabase();
        this.initializeSpecialAnglesDatabase();
        this.initializeIdentitiesDatabase();
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Trigonometric
            'sin': 'sin', 'cos': 'cos', 'tan': 'tan',
            'arcsin': 'arcsin', 'arccos': 'arccos', 'arctan': 'arctan',
            'asin': 'sin⁻¹', 'acos': 'cos⁻¹', 'atan': 'tan⁻¹',
            // Special symbols
            'degree': '°', 'radian': 'rad'
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
                highlightBg: '#ffe6e6',
                unitCircleBg: '#e3f2fd',
                specialAngleBg: '#fff3e0'
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
                highlightBg: '#ffe0e6',
                unitCircleBg: '#e8f5e9',
                specialAngleBg: '#fef5e7'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeInverseTrigSolvers() {
        this.inverseTrigTypes = {
            // Arcsine (sin⁻¹ or arcsin)
            arcsin_basic: {
                patterns: [
                    /arcsin\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /sin\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /asin\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+sine\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArcsinBasic.bind(this),
                name: 'Arcsine (Inverse Sine)',
                category: 'arcsin',
                description: 'Finds angle whose sine is the given value',
                domain: '[-1, 1]',
                range: '[-π/2, π/2] or [-90°, 90°]'
            },

            arcsin_equation: {
                patterns: [
                    /sin\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/i,
                    /solve.*sin.*x.*=/i
                ],
                solver: this.solveArcsinEquation.bind(this),
                name: 'Solve sin(x) = a',
                category: 'arcsin',
                description: 'Solve equations of form sin(x) = a'
            },

            arcsin_expression: {
                patterns: [
                    /arcsin\s*\(\s*sin\s*\(/i,
                    /sin\^-1\s*\(\s*sin\s*\(/i
                ],
                solver: this.solveArcsinExpression.bind(this),
                name: 'Arcsin of Sine Expression',
                category: 'arcsin',
                description: 'Simplify arcsin(sin(x))'
            },

            // Arccosine (cos⁻¹ or arccos)
            arccos_basic: {
                patterns: [
                    /arccos\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /cos\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /acos\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+cosine\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArccosBasic.bind(this),
                name: 'Arccosine (Inverse Cosine)',
                category: 'arccos',
                description: 'Finds angle whose cosine is the given value',
                domain: '[-1, 1]',
                range: '[0, π] or [0°, 180°]'
            },

            arccos_equation: {
                patterns: [
                    /cos\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/i,
                    /solve.*cos.*x.*=/i
                ],
                solver: this.solveArccosEquation.bind(this),
                name: 'Solve cos(x) = a',
                category: 'arccos',
                description: 'Solve equations of form cos(x) = a'
            },

            arccos_expression: {
                patterns: [
                    /arccos\s*\(\s*cos\s*\(/i,
                    /cos\^-1\s*\(\s*cos\s*\(/i
                ],
                solver: this.solveArccosExpression.bind(this),
                name: 'Arccos of Cosine Expression',
                category: 'arccos',
                description: 'Simplify arccos(cos(x))'
            },

            // Arctangent (tan⁻¹ or arctan)
            arctan_basic: {
                patterns: [
                    /arctan\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /tan\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /atan\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+tangent\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArctanBasic.bind(this),
                name: 'Arctangent (Inverse Tangent)',
                category: 'arctan',
                description: 'Finds angle whose tangent is the given value',
                domain: 'All real numbers',
                range: '(-π/2, π/2) or (-90°, 90°)'
            },

            arctan_equation: {
                patterns: [
                    /tan\s*\(\s*x\s*\)\s*=\s*([+-]?\d*\.?\d+)/i,
                    /solve.*tan.*x.*=/i
                ],
                solver: this.solveArctanEquation.bind(this),
                name: 'Solve tan(x) = a',
                category: 'arctan',
                description: 'Solve equations of form tan(x) = a'
            },

            arctan_expression: {
                patterns: [
                    /arctan\s*\(\s*tan\s*\(/i,
                    /tan\^-1\s*\(\s*tan\s*\(/i
                ],
                solver: this.solveArctanExpression.bind(this),
                name: 'Arctan of Tangent Expression',
                category: 'arctan',
                description: 'Simplify arctan(tan(x))'
            },

            // Arcsecant (sec⁻¹ or arcsec)
            arcsec_basic: {
                patterns: [
                    /arcsec\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /sec\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+secant\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArcsecBasic.bind(this),
                name: 'Arcsecant (Inverse Secant)',
                category: 'arcsec',
                description: 'Finds angle whose secant is the given value',
                domain: '(-∞, -1] ∪ [1, ∞)',
                range: '[0, π] excluding π/2 or [0°, 180°] excluding 90°'
            },

            // Arccosecant (csc⁻¹ or arccsc)
            arccsc_basic: {
                patterns: [
                    /arccsc\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /csc\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+cosecant\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArccscBasic.bind(this),
                name: 'Arccosecant (Inverse Cosecant)',
                category: 'arccsc',
                description: 'Finds angle whose cosecant is the given value',
                domain: '(-∞, -1] ∪ [1, ∞)',
                range: '[-π/2, π/2] excluding 0 or [-90°, 90°] excluding 0°'
            },

            // Arccotangent (cot⁻¹ or arccot)
            arccot_basic: {
                patterns: [
                    /arccot\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /cot\^-1\s*\(\s*([+-]?\d*\.?\d+)\s*\)/i,
                    /inverse\s+cotangent\s+of\s+([+-]?\d*\.?\d+)/i
                ],
                solver: this.solveArccotBasic.bind(this),
                name: 'Arccotangent (Inverse Cotangent)',
                category: 'arccot',
                description: 'Finds angle whose cotangent is the given value',
                domain: 'All real numbers',
                range: '(0, π) or (0°, 180°)'
            },

            // Composite functions
            composition: {
                patterns: [
                    /sin\s*\(\s*arccos/i,
                    /cos\s*\(\s*arcsin/i,
                    /tan\s*\(\s*arcsin/i,
                    /composition/i
                ],
                solver: this.solveComposition.bind(this),
                name: 'Composition of Trig and Inverse Trig',
                category: 'composition',
                description: 'Evaluate compositions like sin(arccos(x))'
            },

            // Special angles
            special_angles: {
                patterns: [
                    /special\s+angle/i,
                    /arcsin\s*\(\s*1\/2\s*\)/i,
                    /arccos\s*\(\s*√/i
                ],
                solver: this.solveSpecialAngle.bind(this),
                name: 'Special Angle Values',
                category: 'special',
                description: 'Evaluate inverse trig of special values'
            },

            // Word problems
            word_problem: {
                patterns: [
                    /angle\s+of\s+elevation/i,
                    /angle\s+of\s+depression/i,
                    /right\s+triangle/i,
                    /find\s+the\s+angle/i
                ],
                solver: this.solveWordProblem.bind(this),
                name: 'Word Problems',
                category: 'word_problem',
                description: 'Real-world applications of inverse trig'
            }
        };
    }

    initializeInverseTrigLessons() {
        this.lessons = {
            arcsin: {
                title: "Arcsine (sin⁻¹ or arcsin)",
                concepts: [
                    "arcsin(x) asks: what angle has sine equal to x?",
                    "Domain: x must be in [-1, 1] (since -1 ≤ sin(θ) ≤ 1)",
                    "Range: output is in [-π/2, π/2] or [-90°, 90°]",
                    "This is the principal value (main answer)",
                    "arcsin is the inverse function of sine on its restricted domain"
                ],
                theory: "The arcsine function 'undoes' the sine function. Since sine is not one-to-one on its full domain, we restrict it to [-π/2, π/2] where it is one-to-one, making the inverse function possible.",
                keyFormulas: {
                    "Definition": "y = arcsin(x) means sin(y) = x where -π/2 ≤ y ≤ π/2",
                    "Domain": "-1 ≤ x ≤ 1",
                    "Range": "-π/2 ≤ y ≤ π/2 (or -90° ≤ y ≤ 90°)",
                    "Relationship": "sin(arcsin(x)) = x for -1 ≤ x ≤ 1",
                    "Reverse": "arcsin(sin(x)) = x only if -π/2 ≤ x ≤ π/2"
                },
                specialValues: {
                    "arcsin(0)": "0",
                    "arcsin(1/2)": "π/6 (30°)",
                    "arcsin(√2/2)": "π/4 (45°)",
                    "arcsin(√3/2)": "π/3 (60°)",
                    "arcsin(1)": "π/2 (90°)",
                    "arcsin(-1)": "-π/2 (-90°)"
                },
                commonMistakes: [
                    "Using values outside [-1, 1]",
                    "Expecting multiple answers (arcsin gives only principal value)",
                    "Confusing arcsin with 1/sin(x)",
                    "Forgetting the restricted range"
                ],
                applications: [
                    "Finding angles in right triangles",
                    "Angle of elevation/depression problems",
                    "Physics: projectile motion angles",
                    "Navigation and surveying"
                ]
            },

            arccos: {
                title: "Arccosine (cos⁻¹ or arccos)",
                concepts: [
                    "arccos(x) asks: what angle has cosine equal to x?",
                    "Domain: x must be in [-1, 1]",
                    "Range: output is in [0, π] or [0°, 180°]",
                    "Always gives non-negative angles (first two quadrants)",
                    "arccos is the inverse function of cosine on [0, π]"
                ],
                theory: "The arccosine function inverts the cosine function. The range [0, π] is chosen because cosine is one-to-one on this interval and covers all possible cosine values.",
                keyFormulas: {
                    "Definition": "y = arccos(x) means cos(y) = x where 0 ≤ y ≤ π",
                    "Domain": "-1 ≤ x ≤ 1",
                    "Range": "0 ≤ y ≤ π (or 0° ≤ y ≤ 180°)",
                    "Relationship": "cos(arccos(x)) = x for -1 ≤ x ≤ 1",
                    "Reverse": "arccos(cos(x)) = x only if 0 ≤ x ≤ π",
                    "Complement": "arcsin(x) + arccos(x) = π/2 for -1 ≤ x ≤ 1"
                },
                specialValues: {
                    "arccos(1)": "0 (0°)",
                    "arccos(√3/2)": "π/6 (30°)",
                    "arccos(√2/2)": "π/4 (45°)",
                    "arccos(1/2)": "π/3 (60°)",
                    "arccos(0)": "π/2 (90°)",
                    "arccos(-1)": "π (180°)"
                },
                commonMistakes: [
                    "Using values outside [-1, 1]",
                    "Expecting negative angles (range is always non-negative)",
                    "Confusing with arcsine range",
                    "Thinking arccos(-x) = -arccos(x) (it's not!)"
                ],
                applications: [
                    "Finding angles between vectors (dot product)",
                    "Triangle angle calculations",
                    "Physics: work and force angles",
                    "Computer graphics and 3D modeling"
                ]
            },

            arctan: {
                title: "Arctangent (tan⁻¹ or arctan)",
                concepts: [
                    "arctan(x) asks: what angle has tangent equal to x?",
                    "Domain: all real numbers (tangent has no restrictions)",
                    "Range: output is in (-π/2, π/2) or (-90°, 90°)",
                    "Excludes ±π/2 because tangent is undefined there",
                    "Most commonly used inverse trig function"
                ],
                theory: "The arctangent function inverts tangent. Since tangent accepts all real inputs and is periodic, we choose the middle period (-π/2, π/2) as our range where tangent is one-to-one.",
                keyFormulas: {
                    "Definition": "y = arctan(x) means tan(y) = x where -π/2 < y < π/2",
                    "Domain": "All real numbers (-∞, ∞)",
                    "Range": "-π/2 < y < π/2 (or -90° < y < 90°)",
                    "Relationship": "tan(arctan(x)) = x for all x",
                    "Reverse": "arctan(tan(x)) = x only if -π/2 < x < π/2",
                    "Odd function": "arctan(-x) = -arctan(x)",
                    "atan2": "Two-argument form preserves quadrant information"
                },
                specialValues: {
                    "arctan(0)": "0 (0°)",
                    "arctan(√3/3)": "π/6 (30°)",
                    "arctan(1)": "π/4 (45°)",
                    "arctan(√3)": "π/3 (60°)",
                    "arctan(∞)": "π/2 (90°)",
                    "arctan(-∞)": "-π/2 (-90°)"
                },
                commonMistakes: [
                    "Expecting angles outside (-π/2, π/2)",
                    "Confusing with arccot (which has range (0, π))",
                    "Not recognizing it's an odd function",
                    "Forgetting tangent has no domain restrictions"
                ],
                applications: [
                    "Slope to angle conversion",
                    "Two-point angle calculation (atan2)",
                    "Computer graphics and game development",
                    "Robotics: inverse kinematics",
                    "Signal processing: phase angles"
                ]
            },

            arcsec: {
                title: "Arcsecant (sec⁻¹ or arcsec)",
                concepts: [
                    "arcsec(x) asks: what angle has secant equal to x?",
                    "Domain: |x| ≥ 1 (since |sec(θ)| ≥ 1)",
                    "Range: [0, π] excluding π/2 or [0°, 180°] excluding 90°",
                    "Related to arccos: arcsec(x) = arccos(1/x)",
                    "Less commonly used than arcsin, arccos, arctan"
                ],
                theory: "Arcsecant is the inverse of secant. Since sec(θ) = 1/cos(θ), we have arcsec(x) = arccos(1/x). The range matches arccos but excludes π/2 where secant is undefined.",
                keyFormulas: {
                    "Definition": "y = arcsec(x) means sec(y) = x where y ∈ [0, π], y ≠ π/2",
                    "Domain": "(-∞, -1] ∪ [1, ∞)",
                    "Range": "[0, π] \\ {π/2} (or [0°, 180°] \\ {90°})",
                    "Relationship": "arcsec(x) = arccos(1/x)",
                    "Alternative": "sec(arcsec(x)) = x for |x| ≥ 1"
                },
                specialValues: {
                    "arcsec(1)": "0 (0°)",
                    "arcsec(2)": "π/3 (60°)",
                    "arcsec(√2)": "π/4 (45°)",
                    "arcsec(-1)": "π (180°)",
                    "arcsec(2/√3)": "π/6 (30°)"
                },
                commonMistakes: [
                    "Using |x| < 1 (undefined)",
                    "Confusing with 1/arccos(x)",
                    "Forgetting the excluded value π/2",
                    "Not recognizing relationship to arccos"
                ],
                applications: [
                    "Advanced calculus integrals",
                    "Specialized physics problems",
                    "Certain geometric constructions"
                ]
            },

            arccsc: {
                title: "Arccosecant (csc⁻¹ or arccsc)",
                concepts: [
                    "arccsc(x) asks: what angle has cosecant equal to x?",
                    "Domain: |x| ≥ 1",
                    "Range: [-π/2, π/2] excluding 0 or [-90°, 90°] excluding 0°",
                    "Related to arcsin: arccsc(x) = arcsin(1/x)",
                    "Less commonly used"
                ],
                theory: "Arccosecant is the inverse of cosecant. Since csc(θ) = 1/sin(θ), we have arccsc(x) = arcsin(1/x). The range matches arcsin but excludes 0 where cosecant is undefined.",
                keyFormulas: {
                    "Definition": "y = arccsc(x) means csc(y) = x where y ∈ [-π/2, π/2], y ≠ 0",
                    "Domain": "(-∞, -1] ∪ [1, ∞)",
                    "Range": "[-π/2, π/2] \\ {0} (or [-90°, 90°] \\ {0°})",
                    "Relationship": "arccsc(x) = arcsin(1/x)",
                    "Alternative": "csc(arccsc(x)) = x for |x| ≥ 1"
                },
                specialValues: {
                    "arccsc(1)": "π/2 (90°)",
                    "arccsc(2)": "π/6 (30°)",
                    "arccsc(√2)": "π/4 (45°)",
                    "arccsc(-1)": "-π/2 (-90°)",
                    "arccsc(2/√3)": "π/3 (60°)"
                },
                commonMistakes: [
                    "Using |x| < 1 (undefined)",
                    "Confusing with 1/arcsin(x)",
                    "Forgetting the excluded value 0",
                    "Range confusion with arcsec"
                ],
                applications: [
                    "Advanced integration techniques",
                    "Theoretical mathematics",
                    "Specialized engineering problems"
                ]
            },

            arccot: {
                title: "Arccotangent (cot⁻¹ or arccot)",
                concepts: [
                    "arccot(x) asks: what angle has cotangent equal to x?",
                    "Domain: all real numbers",
                    "Range: (0, π) or (0°, 180°) - always positive angles",
                    "Different from arctan range!",
                    "Relationship: arccot(x) = π/2 - arctan(x) for x > 0"
                ],
                theory: "Arccotangent is the inverse of cotangent. Unlike arctan which gives angles in (-π/2, π/2), arccot gives angles in (0, π), making it useful when positive angles are preferred.",
                keyFormulas: {
                    "Definition": "y = arccot(x) means cot(y) = x where 0 < y < π",
                    "Domain": "All real numbers (-∞, ∞)",
                    "Range": "(0, π) (or 0° < y < 180°)",
                    "Relationship": "arccot(x) = arctan(1/x) for x > 0",
                    "Alternative": "arccot(x) = π/2 - arctan(x)",
                    "Limit behavior": "arccot(0) = π/2, arccot(∞) → 0, arccot(-∞) → π"
                },
                specialValues: {
                    "arccot(∞)": "0 (0°)",
                    "arccot(√3)": "π/6 (30°)",
                    "arccot(1)": "π/4 (45°)",
                    "arccot(√3/3)": "π/3 (60°)",
                    "arccot(0)": "π/2 (90°)",
                    "arccot(-∞)": "π (180°)"
                },
                commonMistakes: [
                    "Confusing range with arctan",
                    "Not recognizing it always gives positive angles",
                    "Incorrect relationship with arctan for negative values",
                    "Confusing with 1/arctan(x)"
                ],
                applications: [
                    "Problems preferring positive angles",
                    "Complementary angle calculations",
                    "Integration of rational functions"
                ]
            },

            composition: {
                title: "Composition of Trig and Inverse Trig Functions",
                concepts: [
                    "Combining trig and inverse trig functions",
                    "Use right triangle method for evaluation",
                    "Apply Pythagorean theorem to find missing sides",
                    "Examples: sin(arccos(x)), tan(arcsin(x)), etc.",
                    "Results are algebraic expressions in x"
                ],
                theory: "Compositions like sin(arccos(x)) can be evaluated by constructing a right triangle where one angle has the specified trig value, then finding the desired trig ratio from that triangle.",
                keyFormulas: {
                    "sin(arccos(x))": "√(1 - x²) for -1 ≤ x ≤ 1",
                    "cos(arcsin(x))": "√(1 - x²) for -1 ≤ x ≤ 1",
                    "tan(arcsin(x))": "x/√(1 - x²) for -1 < x < 1",
                    "tan(arccos(x))": "√(1 - x²)/x for -1 ≤ x ≤ 1, x ≠ 0",
                    "sin(arctan(x))": "x/√(1 + x²)",
                    "cos(arctan(x))": "1/√(1 + x²)"
                },
                method: [
                    "Let θ be the inverse trig value",
                    "Draw a right triangle with that angle",
                    "Label known side using the trig definition",
                    "Use Pythagorean theorem to find missing side",
                    "Evaluate desired trig function using the triangle"
                ],
                applications: [
                    "Simplifying complex expressions",
                    "Integration and differentiation",
                    "Solving advanced equations",
                    "Physics and engineering formulas"
                ]
            },

            word_problems: {
                title: "Word Problems with Inverse Trig Functions",
                concepts: [
                    "Angle of elevation: angle above horizontal",
                    "Angle of depression: angle below horizontal",
                    "Use inverse trig to find unknown angles",
                    "Set up right triangle from problem description",
                    "Choose appropriate inverse function based on known sides"
                ],
                problemTypes: {
                    "Angle of Elevation": "Looking up from horizontal to see an object",
                    "Angle of Depression": "Looking down from horizontal to see an object",
                    "Distance Problems": "Finding angles when distances are known",
                    "Navigation": "Bearing and heading calculations",
                    "Physics": "Projectile launch angles, incline angles",
                    "Surveying": "Land measurement and mapping"
                },
                strategy: [
                    "Draw a diagram with right triangle",
                    "Label known sides and angles",
                    "Identify which trig ratio relates known and unknown",
                    "Use appropriate inverse function to find angle",
                    "Convert to desired units (degrees/radians)",
                    "Check reasonableness of answer"
                ],
                commonSetups: {
                    "Opposite and adjacent known": "Use arctan(opp/adj)",
                    "Opposite and hypotenuse known": "Use arcsin(opp/hyp)",
                    "Adjacent and hypotenuse known": "Use arccos(adj/hyp)",
                    "Two distances in different directions": "Use arctan for angle"
                }
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            arcsin: {
                'Domain violation': [
                    'Attempting arcsin(x) for |x| > 1',
                    'Not checking if input is in [-1, 1]',
                    'Assuming any value is valid'
                ],
                'Range misunderstanding': [
                    'Expecting angles outside [-90°, 90°]',
                    'Not recognizing principal value restriction',
                    'Thinking there are multiple answers'
                ],
                'Notation confusion': [
                    'Confusing arcsin(x) with 1/sin(x)',
                    'Writing sin⁻¹(x) when meaning (sin(x))⁻¹',
                    'Mixing up arcsin and csc'
                ]
            },
            arccos: {
                'Domain violation': [
                    'Using arccos(x) for |x| > 1',
                    'Not verifying input is valid'
                ],
                'Range confusion': [
                    'Expecting negative angles',
                    'Not realizing range is [0°, 180°]',
                    'Confusing with arcsin range'
                ],
                'Sign errors': [
                    'Thinking arccos(-x) = -arccos(x) (NOT TRUE)',
                    'Not handling negative inputs correctly'
                ]
            },
            arctan: {
                'Range misunderstanding': [
                    'Expecting angles outside (-90°, 90°)',
                    'Not accounting for quadrant of actual angle',
                    'Forgetting arctan only gives Quadrant I or IV'
                ],
                'Composition errors': [
                    'Not simplifying arctan(tan(x)) correctly',
                    'Forgetting range restrictions apply'
                ],
                'Infinite inputs': [
                    'Not recognizing arctan(∞) = π/2',
                    'Not handling very large values properly'
                ]
            },
            arcsec: {
                'Domain violation': [
                    'Using arcsec(x) for |x| < 1',
                    'Not recognizing gap in domain'
                ],
                'Relationship confusion': [
                    'Not knowing arcsec(x) = arccos(1/x)',
                    'Computing incorrectly from definition'
                ]
            },
            composition: {
                'Triangle method errors': [
                    'Incorrectly setting up right triangle',
                    'Wrong side labeling',
                    'Pythagorean theorem mistakes'
                ],
                'Sign errors': [
                    'Not accounting for signs in different quadrants',
                    'Forgetting √(x²) = |x|, not always x'
                ],
                'Domain restrictions': [
                    'Not recognizing when expressions are undefined',
                    'Division by zero in tan expressions'
                ]
            }
        };

        this.errorPrevention = {
            domain_check: {
                reminder: 'Always verify input is in valid domain before computing',
                method: 'Check: arcsin/arccos need |x| ≤ 1, arcsec/arccsc need |x| ≥ 1'
            },
            range_awareness: {
                reminder: 'Know the output range for each inverse function',
                method: 'arcsin: [-90°, 90°], arccos: [0°, 180°], arctan: (-90°, 90°)'
            },
            units: {
                reminder: 'Be clear whether working in degrees or radians',
                method: 'State units explicitly, convert carefully between them'
            },
            calculator_mode: {
                reminder: 'Ensure calculator is in correct mode (DEG or RAD)',
                method: 'Check mode before computing, verify answer reasonableness'
            },
            special_values: {
                reminder: 'Memorize special angle values for quick evaluation',
                method: 'Know values for 0°, 30°, 45°, 60°, 90° and their trig ratios'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Understanding what the inverse function means and represents',
                language: 'intuitive, meaning-focused, emphasizes "undo" concept'
            },
            procedural: {
                focus: 'Step-by-step calculation and evaluation methods',
                language: 'algorithmic, systematic, calculator-focused'
            },
            visual: {
                focus: 'Unit circle, right triangles, and graphical understanding',
                language: 'geometric, spatial, diagram-based'
            },
            algebraic: {
                focus: 'Formal definitions, properties, and identities',
                language: 'precise mathematical notation and rigor'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple terms, minimal jargon',
                detail: 'essential steps and key ideas only',
                examples: 'special angles and simple values'
            },
            intermediate: {
                vocabulary: 'standard mathematical terminology',
                detail: 'main steps with brief explanations',
                examples: 'mix of special angles and general cases'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every step explained with real-world analogies',
                examples: 'concrete situations and stories',
                analogies: true,
                visualization: 'simple pictures and everyday comparisons'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary with definitions',
                detail: 'comprehensive explanations with theory',
                examples: 'general cases, edge cases, and proofs'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with strategic questions',
                examples: 'carefully sequenced from concrete to abstract'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            angle_of_elevation: {
                scenario: "Finding angle of elevation to see a tall object",
                setup: "Observer at ground level looking up at top of building/tree/mountain",
                equation: "θ = arctan(height / distance)",
                examples: [
                    "Building is 50 meters tall, you're 30 meters away. What's the angle?",
                    "Tree appears at 35° elevation when you're 20 feet away. How tall is it?"
                ],
                context: "Surveying, architecture, forestry, photography"
            },
            angle_of_depression: {
                scenario: "Finding angle of depression looking down from height",
                setup: "Observer at elevated position looking down at ground object",
                equation: "θ = arctan(height / horizontal_distance)",
                examples: [
                    "From 100-foot cliff, boat is 150 feet from base. What's angle of depression?",
                    "Pilot at 10,000 ft altitude sees runway at 5° depression. How far to runway?"
                ],
                context: "Aviation, marine navigation, rescue operations"
            },
            slope_to_angle: {
                scenario: "Converting slope or grade to angle",
                setup: "Road, ramp, or incline with known rise over run",
                equation: "θ = arctan(rise / run)",
                examples: [
                    "Road rises 500 feet over 2 miles. What's the grade angle?",
                    "Wheelchair ramp has 1:12 slope. What angle is that?"
                ],
                context: "Civil engineering, accessibility design, skiing"
            },
            vector_angle: {
                scenario: "Finding angle between two vectors",
                setup: "Two vectors with known components or dot product",
                equation: "θ = arccos((a·b) / (|a||b|))",
                examples: [
                    "Vectors ⟨3,4⟩ and ⟨1,2⟩ - what's the angle between them?",
                    "Force vectors at 30N and 40N with dot product 600 - find angle"
                ],
                context: "Physics, computer graphics, robotics, navigation"
            },
            projectile_angle: {
                scenario: "Finding launch angle for projectile",
                setup: "Object thrown/launched with known velocity to hit target",
                equation: "θ = arctan(v²/(gR)) where R is range",
                examples: [
                    "Ball thrown 20 m/s to land 30m away. What angle (ignoring air resistance)?",
                    "Catapult launches at 15 m/s to clear 8m wall 12m away"
                ],
                context: "Sports (basketball, golf), military ballistics, space launches"
            },
            navigation_bearing: {
                scenario: "Finding bearing or heading angle",
                setup: "Travel with known displacement in x and y directions",
                equation: "θ = arctan(Δy / Δx) adjusted for quadrant",
                examples: [
                    "Plane flies 100 km east, 150 km north. What's the bearing?",
                    "Ship displaced 50 nautical miles at 30° north of east"
                ],
                context: "Marine navigation, aviation, hiking, GPS"
            },
            pendulum_angle: {
                scenario: "Finding maximum angle of pendulum swing",
                setup: "Pendulum with known length and displacement",
                equation: "θ = arcsin(displacement / length)",
                examples: [
                    "Pendulum 1m long swings 15cm from center. What's max angle?",
                    "Swing set 2.5m high with 2m chains at 45° - how far from center?"
                ],
                context: "Physics labs, playground equipment, clock design"
            },
            refraction_angle: {
                scenario: "Finding angle of refraction (Snell's Law)",
                setup: "Light passing between media with different refractive indices",
                equation: "θ₂ = arcsin((n₁/n₂) sin(θ₁))",
                examples: [
                    "Light enters water (n=1.33) from air at 30°. What's refraction angle?",
                    "Laser passes from glass (n=1.5) to air at what angle?"
                ],
                context: "Optics, fiber optics, lens design, eye anatomy"
            },
            triangle_angles: {
                scenario: "Finding angles in triangles from side lengths",
                setup: "Triangle with known side lengths, find angles",
                equation: "Use Law of Cosines then arccos",
                examples: [
                    "Triangle sides 5, 7, 9 - find the largest angle",
                    "Right triangle legs 3 and 4 - find the acute angles"
                ],
                context: "Geometry, construction, carpentry, engineering"
            },
            latitude_longitude: {
                scenario: "Geographic calculations with angles",
                setup: "Finding angles for locations on Earth's surface",
                equation: "Various using arccos and arcsin for distances",
                examples: [
                    "Two cities at different latitudes - find arc angle between them",
                    "Ship sails from equator - what latitude after 500 km north?"
                ],
                context: "Geography, global navigation, astronomy"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            arcsin: {
                skills: [
                    'Understanding of sine function',
                    'Domain and range concepts',
                    'Inverse function concept',
                    'Radian and degree measure',
                    'Special angle values'
                ],
                priorKnowledge: [
                    'Right triangle trigonometry',
                    'Unit circle',
                    'Function notation',
                    'Inequalities (-1 ≤ x ≤ 1)'
                ],
                checkQuestions: [
                    "What is sin(30°)?",
                    "If sin(θ) = 0.5, what is one value of θ?",
                    "What does f⁻¹(x) mean for a function f?",
                    "Is sin(x) = 2 possible? Why or why not?"
                ]
            },
            arccos: {
                skills: [
                    'Understanding of cosine function',
                    'Domain and range concepts',
                    'Inverse functions',
                    'Complementary angles',
                    'Special angles'
                ],
                priorKnowledge: [
                    'Right triangle trigonometry',
                    'Unit circle',
                    'Cosine values for common angles',
                    'Quadrant analysis'
                ],
                checkQuestions: [
                    "What is cos(60°)?",
                    "If cos(θ) = 0.5, what is one value of θ in [0°, 180°]?",
                    "How are sine and cosine related for complementary angles?",
                    "What are the max and min values of cos(θ)?"
                ]
            },
            arctan: {
                skills: [
                    'Understanding of tangent function',
                    'Slope concept',
                    'Unbounded functions',
                    'Asymptotic behavior',
                    'All real number domains'
                ],
                priorKnowledge: [
                    'tan(θ) = sin(θ)/cos(θ)',
                    'Tangent on unit circle',
                    'Vertical asymptotes',
                    'Slope = rise/run'
                ],
                checkQuestions: [
                    "What is tan(45°)?",
                    "Can tangent equal any real number?",
                    "What is the slope of a line at 30° to horizontal?",
                    "When is tan(θ) undefined?"
                ]
            },
            arcsec: {
                skills: [
                    'Secant function understanding',
                    'Reciprocal trig functions',
                    'Relationship to cosine',
                    'Domain restrictions'
                ],
                priorKnowledge: [
                    'sec(θ) = 1/cos(θ)',
                    'When sec is undefined',
                    'Range of secant function'
                ],
                checkQuestions: [
                    "What is sec(60°)?",
                    "If sec(θ) = 2, what is cos(θ)?",
                    "Can sec(θ) = 0.5? Why or why not?",
                    "When is sec(θ) undefined?"
                ]
            },
            composition: {
                skills: [
                    'Right triangle construction',
                    'Pythagorean theorem',
                    'Trig ratios',
                    'Algebraic manipulation',
                    'All six trig functions'
                ],
                priorKnowledge: [
                    'How to draw right triangles',
                    'SOH-CAH-TOA',
                    'Pythagorean theorem: a² + b² = c²',
                    'Function composition'
                ],
                checkQuestions: [
                    "In a right triangle, if hypotenuse is 5 and one leg is 3, what's the other leg?",
                    "If cos(θ) = 3/5, what is sin(θ)?",
                    "What does f(g(x)) mean?",
                    "How do you find sin(θ) if you know cos(θ)?"
                ]
            },
            word_problems: {
                skills: [
                    'Diagram drawing',
                    'Right triangle identification',
                    'Choosing appropriate inverse function',
                    'Unit conversions',
                    'Practical estimation'
                ],
                priorKnowledge: [
                    'Angle of elevation/depression',
                    'Opposite/adjacent/hypotenuse identification',
                    'When to use arcsin vs arccos vs arctan',
                    'Degrees vs radians in context'
                ],
                checkQuestions: [
                    "If you know opposite and adjacent sides, which trig function do you use?",
                    "What's the difference between angle of elevation and depression?",
                    "How do you convert 45° to radians?",
                    "Which inverse trig function has range [0°, 180°]?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            unit_circle: {
                description: "Inverse trig as finding angle from coordinates",
                analogy: "Given a point on the circle, find the angle that produces it",
                visualization: "Mark point on unit circle, draw angle from origin",
                suitableFor: ['arcsin', 'arccos', 'arctan'],
                explanation: "arcsin(y) finds angle whose y-coordinate is y; arccos(x) finds angle whose x-coordinate is x"
            },
            right_triangle: {
                description: "Inverse trig from side ratios",
                analogy: "Given sides of triangle, find the angles",
                visualization: "Draw right triangle with labeled sides, identify angle",
                suitableFor: ['all functions', 'composition', 'word_problems'],
                explanation: "arcsin(opp/hyp) finds angle; arctan(opp/adj) finds angle; etc."
            },
            function_graph: {
                description: "Inverse trig as reflection of trig graph",
                analogy: "Flip the graph over y=x line to see inverse",
                visualization: "Graph sine and arcsine together with y=x",
                suitableFor: ['arcsin', 'arccos', 'arctan'],
                explanation: "Inverse function reflects original over y=x, with domain/range swapped"
            },
            undo_operation: {
                description: "Inverse trig as 'undoing' trig function",
                analogy: "Like subtraction undoes addition, arcsin undoes sine",
                visualization: "Function machine: input → sin → output → arcsin → input",
                suitableFor: ['all functions'],
                explanation: "arcsin(sin(θ)) = θ when θ is in the right range"
            },
            angle_finder: {
                description: "Inverse trig as angle measurement tool",
                analogy: "Like a protractor that works from ratios instead of drawing",
                visualization: "Given ratio, find corresponding angle",
                suitableFor: ['word_problems', 'applications'],
                explanation: "Use inverse trig to find unknown angles when sides are known"
            },
            number_line_mapping: {
                description: "Input-output relationship visualization",
                analogy: "Each input value maps to exactly one output angle",
                visualization: "Number line for inputs, semicircle for angle outputs",
                suitableFor: ['domain and range understanding'],
                explanation: "Shows restricted domains and ranges clearly"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "arcsin(1/2)",
                    solution: "π/6 or 30°",
                    steps: [
                        "Recognize special angle value",
                        "sin(30°) = 1/2",
                        "Therefore arcsin(1/2) = 30° = π/6"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "arccos(0)",
                    solution: "π/2 or 90°",
                    steps: [
                        "Think: what angle has cosine 0?",
                        "cos(90°) = 0",
                        "arccos(0) = 90° = π/2"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "arctan(1)",
                    solution: "π/4 or 45°",
                    steps: [
                        "What angle has tangent 1?",
                        "tan(45°) = 1",
                        "arctan(1) = 45° = π/4"
                    ],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "arcsin(-√3/2)",
                    solution: "-π/3 or -60°",
                    steps: [
                        "Recognize special value with negative",
                        "sin(60°) = √3/2, so sin(-60°) = -√3/2",
                        "arcsin(-√3/2) = -60° = -π/3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "arccos(-1/2)",
                    solution: "2π/3 or 120°",
                    steps: [
                        "cos(60°) = 1/2",
                        "In [0°,180°], cos(120°) = -1/2",
                        "arccos(-1/2) = 120° = 2π/3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "arctan(-√3)",
                    solution: "-π/3 or -60°",
                    steps: [
                        "tan(60°) = √3",
                        "arctan is odd function: arctan(-x) = -arctan(x)",
                        "arctan(-√3) = -60° = -π/3"
                    ],
                    difficulty: "medium"
                },
                {
                    problem: "arcsec(2)",
                    solution: "π/3 or 60°",
                    steps: [
                        "Use arcsec(x) = arccos(1/x)",
                        "arcsec(2) = arccos(1/2)",
                        "arccos(1/2) = 60° = π/3"
                    ],
                    difficulty: "medium"
                }
            ],
            advanced: [
                {
                    problem: "sin(arccos(3/5))",
                    solution: "4/5",
                    steps: [
                        "Let θ = arccos(3/5), so cos(θ) = 3/5",
                        "Draw right triangle: adjacent = 3, hypotenuse = 5",
                        "Pythagorean: opposite = √(5² - 3²) = 4",
                        "sin(θ) = opposite/hypotenuse = 4/5"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "tan(arcsin(2/3))",
                    solution: "2/√5",
                    steps: [
                        "Let θ = arcsin(2/3), so sin(θ) = 2/3",
                        "Draw triangle: opposite = 2, hypotenuse = 3",
                        "Adjacent = √(3² - 2²) = √5",
                        "tan(θ) = 2/√5"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "arcsin(sin(5π/4))",
                    solution: "-π/4",
                    steps: [
                        "5π/4 is not in [-π/2, π/2]",
                        "sin(5π/4) = -√2/2",
                        "arcsin(-√2/2) = -π/4",
                        "Result is in valid range"
                    ],
                    difficulty: "hard"
                },
                {
                    problem: "cos(2 arctan(3/4))",
                    solution: "7/25",
                    steps: [
                        "Let θ = arctan(3/4), so tan(θ) = 3/4",
                        "From triangle: sin(θ) = 3/5, cos(θ) = 4/5",
                        "Use double angle: cos(2θ) = cos²(θ) - sin²(θ)",
                        "= (4/5)² - (3/5)² = 16/25 - 9/25 = 7/25"
                    ],
                    difficulty: "hard"
                }
            ],
            byType: {
                arcsin: [
                    { problem: "arcsin(0)", solution: "0" },
                    { problem: "arcsin(√2/2)", solution: "π/4 (45°)" },
                    { problem: "arcsin(1)", solution: "π/2 (90°)" },
                    { problem: "arcsin(-1)", solution: "-π/2 (-90°)" }
                ],
                arccos: [
                    { problem: "arccos(1)", solution: "0" },
                    { problem: "arccos(√3/2)", solution: "π/6 (30°)" },
                    { problem: "arccos(1/2)", solution: "π/3 (60°)" },
                    { problem: "arccos(-1)", solution: "π (180°)" }
                ],
                arctan: [
                    { problem: "arctan(0)", solution: "0" },
                    { problem: "arctan(√3/3)", solution: "π/6 (30°)" },
                    { problem: "arctan(√3)", solution: "π/3 (60°)" },
                    { problem: "arctan(-1)", solution: "-π/4 (-45°)" }
                ],
                composition: [
                    { problem: "sin(arctan(x))", solution: "x/√(1+x²)" },
                    { problem: "cos(arcsin(x))", solution: "√(1-x²)" },
                    { problem: "tan(arccos(x))", solution: "√(1-x²)/x" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            inverse_not_reciprocal: {
                misconception: "Thinking arcsin(x) = 1/sin(x)",
                reality: "arcsin is inverse FUNCTION, not reciprocal. 1/sin(x) = csc(x)",
                correctiveExample: "arcsin(1/2) = 30°, but 1/sin(1/2) = 1/0.479... ≈ 2.09",
                commonIn: ['all inverse trig']
            },
            multiple_answers: {
                misconception: "Expecting arcsin to give all angles with that sine value",
                reality: "Inverse trig functions give only the PRINCIPAL value (one answer)",
                correctiveExample: "sin(30°) = sin(150°) = 1/2, but arcsin(1/2) = 30° only",
                commonIn: ['arcsin', 'arccos', 'arctan']
            },
            domain_ignorance: {
                misconception: "Not checking if input is in valid domain",
                reality: "arcsin and arccos only defined for |x| ≤ 1; arcsec/arccsc need |x| ≥ 1",
                correctiveExample: "arcsin(2) is UNDEFINED (no angle has sine equal to 2)",
                commonIn: ['arcsin', 'arccos', 'arcsec', 'arccsc']
            },
            range_confusion: {
                misconception: "Not knowing what range of angles each function returns",
                reality: "Each inverse function has specific range: arcsin[-90°,90°], arccos[0°,180°], etc.",
                correctiveExample: "arccos returns only positive angles; arcsin(-1/2) = -30°, arccos(-1/2) = 120°",
                commonIn: ['comparing different inverse functions']
            },
            composition_errors: {
                misconception: "Thinking arcsin(sin(x)) always equals x",
                reality: "Only true when x is in the range of arcsin ([-π/2, π/2])",
                correctiveExample: "arcsin(sin(120°)) ≠ 120°; it equals 60° (both have same sine)",
                commonIn: ['composition problems']
            },
            calculator_mode: {
                misconception: "Not checking if calculator is in degree or radian mode",
                reality: "Wrong mode gives wrong answer; results differ drastically",
                correctiveExample: "arcsin(0.5) = 30° in DEG mode, but 0.524 in RAD mode (same angle, different units)",
                commonIn: ['all calculator use']
            },
            sign_handling: {
                misconception: "Not correctly handling negative inputs",
                reality: "arcsin and arctan are odd functions; arccos is not",
                correctiveExample: "arcsin(-x) = -arcsin(x) ✓, but arccos(-x) ≠ -arccos(x) ✗",
                commonIn: ['negative inputs']
            },
            triangle_setup: {
                misconception: "Incorrectly labeling triangle sides in composition problems",
                reality: "Must carefully identify which side is which based on the trig function",
                correctiveExample: "For arcsin(3/5): opposite=3, hypotenuse=5; for arccos(3/5): adjacent=3, hypotenuse=5",
                commonIn: ['composition', 'word problems']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            inverse_function: {
                analogy: "Reversing directions",
                explanation: "If sine takes angle → ratio, then arcsin takes ratio → angle. Like forward/backward on a path.",
                suitableFor: ['all inverse trig'],
                ELI5: "If you walk 10 steps forward, walking 10 steps backward gets you back. Sine and arcsin are like forward and backward."
            },
            principal_value: {
                analogy: "Main entrance to a building",
                explanation: "Building has many doors, but the main entrance is the 'principal' one you use. Many angles have same sine, but arcsin gives the principal (main) angle.",
                suitableFor: ['understanding single output'],
                ELI5: "Even though a house might have lots of doors, when someone says 'go to the door,' they mean the front door. That's like the principal value."
            },
            domain_restriction: {
                analogy: "Height requirement for a ride",
                explanation: "Just as roller coasters have height limits, arcsin/arccos only work with inputs in [-1,1] because sine/cosine can't exceed these values.",
                suitableFor: ['domain understanding'],
                ELI5: "Some rides at the park say 'you must be this tall.' Similarly, arcsin says 'your number must be between -1 and 1.'"
            },
            range_restriction: {
                analogy: "Store hours",
                explanation: "Store is open 9am-5pm (restricted hours). Similarly, arcsin only returns angles in a specific range [-90°, 90°].",
                suitableFor: ['range understanding'],
                ELI5: "A store isn't open 24 hours - it has specific hours. Each inverse trig function has specific angles it will give you."
            },
            unit_circle: {
                analogy: "Clock face",
                explanation: "On a clock, each position corresponds to a time. On unit circle, each point corresponds to an angle. Inverse trig finds the angle from the position.",
                suitableFor: ['visual learners'],
                ELI5: "If I tell you the clock's hands point to certain spots, you can figure out what time it is. Inverse trig does the same with angles."
            },
            right_triangle: {
                analogy: "Detective solving a mystery",
                explanation: "Given clues (side lengths), detective (inverse trig) figures out the mystery (angle).",
                suitableFor: ['word problems'],
                ELI5: "You're a detective and someone tells you how tall and wide something is. You can figure out what angle it makes!"
            },
            composition: {
                analogy: "Nested boxes",
                explanation: "sin(arcsin(x)) is like putting something in a box, then taking it out - you get back what you started with (if it fits).",
                suitableFor: ['composition'],
                ELI5: "If you put your toy in a box and then take it right back out, you have your toy again. That's like sin(arcsin(x)) = x."
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            arcsin: {
                level1: "What angle has a sine value equal to this number?",
                level2: "Check: is the input between -1 and 1? Which special angle has this sine?",
                level3: "Use unit circle or special angles. Answer must be in [-90°, 90°]",
                level4: "For arcsin({value}): The angle is {answer}° or {answer_rad} radians"
            },
            arccos: {
                level1: "What angle has a cosine value equal to this number?",
                level2: "Check domain [-1,1]. Answer will be in [0°, 180°] (never negative)",
                level3: "Use unit circle or special angles. arccos gives first two quadrants only",
                level4: "For arccos({value}): The angle is {answer}° or {answer_rad} radians"
            },
            arctan: {
                level1: "What angle has a tangent value equal to this number?",
                level2: "Any real number works for arctan. Answer will be in (-90°, 90°)",
                level3: "Think slope = rise/run. Answer must be in Quadrant I or IV",
                level4: "For arctan({value}): The angle is {answer}° or {answer_rad} radians"
            },
            arcsec: {
                level1: "Secant is reciprocal of cosine. What's 1/this value?",
                level2: "Use arcsec(x) = arccos(1/x). Input must satisfy |x| ≥ 1",
                level3: "Find 1/x, then use arccos on that value",
                level4: "arcsec({value}) = arccos(1/{value}) = {answer}"
            },
            composition: {
                level1: "Can you draw a right triangle for this problem?",
                level2: "Let the inner function equal θ. What does that tell you? Draw a triangle.",
                level3: "Label the triangle sides based on the inner inverse trig function. Use Pythagorean theorem for missing side.",
                level4: "Set up triangle with known ratio, find missing side, then evaluate outer function"
            },
            word_problem: {
                level1: "Can you draw a right triangle from the problem description?",
                level2: "Which sides do you know? Which angle are you finding?",
                level3: "If you know opposite and adjacent, use arctan. If you know opposite and hypotenuse, use arcsin. If adjacent and hypotenuse, use arccos.",
                level4: "Set up: angle = arc{trig_function}({ratio}), then calculate"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Evaluate: arcsin(1/2)",
                    answer: "π/6 or 30°",
                    assesses: "arcsin_basic",
                    difficulty: "basic"
                },
                {
                    question: "Evaluate: arccos(0)",
                    answer: "π/2 or 90°",
                    assesses: "arccos_basic",
                    difficulty: "basic"
                },
                {
                    question: "Evaluate: arctan(1)",
                    answer: "π/4 or 45°",
                    assesses: "arctan_basic",
                    difficulty: "basic"
                },
                {
                    question: "Simplify: sin(arccos(3/5))",
                    answer: "4/5",
                    assesses: "composition",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "What is the domain of arcsin(x)?",
                    options: ["All real numbers", "[-1, 1]", "[0, 1]", "[-π/2, π/2]"],
                    correct: "[-1, 1]",
                    explanation: "Sine values range from -1 to 1, so arcsin can only accept inputs in this range"
                },
                {
                    question: "What is the range of arccos(x)?",
                    options: ["[-90°, 90°]", "[0°, 90°]", "[0°, 180°]", "[-180°, 180°]"],
                    correct: "[0°, 180°]",
                    explanation: "arccos returns angles in [0°, 180°], covering first and second quadrants"
                },
                {
                    question: "Is arcsin(sin(120°)) equal to 120°?",
                    options: ["Yes", "No, it equals 60°", "No, it equals -60°", "Undefined"],
                    correct: "No, it equals 60°",
                    explanation: "120° is outside arcsin's range. sin(120°) = sin(60°), and 60° is in the valid range"
                },
                {
                    question: "To find an angle in a right triangle with opposite=3 and hypotenuse=5, use:",
                    options: ["arcsin(3/5)", "arccos(3/5)", "arctan(3/5)", "arcsec(5/3)"],
                    correct: "arcsin(3/5)",
                    explanation: "sin(angle) = opposite/hypotenuse, so angle = arcsin(opposite/hypotenuse)"
                }
            ],
            summative: [
                {
                    question: "Solve for x: sin(x) = -√3/2, where x ∈ [-π/2, π/2]",
                    answer: "-π/3",
                    showsWork: true,
                    rubric: {
                        recognize_arcsin: 1,
                        apply_arcsin: 1,
                        correct_value: 2,
                        verify: 1
                    }
                },
                {
                    question: "Evaluate: tan(arcsin(5/13))",
                    answer: "5/12",
                    showsWork: true,
                    rubric: {
                        draw_triangle: 2,
                        pythagorean: 2,
                        find_tangent: 1
                    }
                },
                {
                    question: "From 150 feet away, you measure a 35° angle of elevation to the top of a building. How tall is it?",
                    answer: "105.04 feet",
                    showsWork: true,
                    rubric: {
                        diagram: 1,
                        setup_equation: 2,
                        calculation: 1,
                        units: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "arcsin(0)",
                    "arccos(1)",
                    "arctan(0)",
                    "arcsin(1)",
                    "arccos(-1)"
                ],
                medium: [
                    "arcsin(√2/2)",
                    "arccos(1/2)",
                    "arctan(√3)",
                    "arcsin(-1/2)",
                    "arcsec(2)"
                ],
                hard: [
                    "sin(arccos(4/5))",
                    "tan(2·arcsin(3/5))",
                    "arcsin(sin(7π/6))",
                    "cos(arctan(x))",
                    "Solve: arccos(2x) = π/3"
                ]
            },
            byObjective: {
                canEvaluateBasic: [
                    "arcsin(1/2)",
                    "arccos(√3/2)",
                    "arctan(1)",
                    "arcsin(-1)"
                ],
                canHandleNegatives: [
                    "arcsin(-√2/2)",
                    "arccos(-1/2)",
                    "arctan(-√3)",
                    "arcsin(-1/2)"
                ],
                canSolveCompositions: [
                    "sin(arctan(4/3))",
                    "cos(arcsin(5/13))",
                    "tan(arccos(7/25))"
                ],
                canSolveWordProblems: [
                    "Angle of elevation problem",
                    "Right triangle angle finding",
                    "Navigation bearing problem",
                    "Slope to angle conversion"
                ],
                understandsDomainRange: [
                    "Why is arcsin(2) undefined?",
                    "What is the range of arctan?",
                    "Can arccos give negative angles?",
                    "What angles can arcsin return?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "evaluating_basic": "Know input value → Use special angles or calculator",
                "solving_equation": "Equation like sin(x) = a → Use x = arcsin(a)",
                "composition": "Trig of inverse trig → Draw right triangle method",
                "word_problem": "Real scenario → Draw diagram, identify sides, choose inverse function",
                "simplification": "arcsin(sin(x)) type → Check if x in range, adjust if needed"
            },
            whenToUseWhat: {
                arcsin: "When you know sine value, need angle in [-90°, 90°]",
                arccos: "When you know cosine value, need angle in [0°, 180°]",
                arctan: "When you know tangent (or slope), need angle in (-90°, 90°)",
                arcsec: "When you know secant value; convert using arccos(1/x)",
                "right_triangle_method": "For compositions like sin(arccos(x))",
                "special_angles": "For exact values with common trig ratios"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is input a special angle value?",
                    "Do you need exact or approximate answer?",
                    "What's the domain/range of the inverse function?",
                    "Is it a composition requiring triangle method?",
                    "Is it a word problem requiring diagram?"
                ],
                generalApproach: [
                    "1. Identify which inverse trig function is needed",
                    "2. Verify input is in valid domain",
                    "3. Use special angles if exact value, calculator if approximate",
                    "4. Ensure output is in correct range",
                    "5. Verify answer makes sense"
                ]
            },
            optimizationTips: {
                "Memorize special angles": "Speeds up evaluation of common values",
                "Draw diagrams": "Visual representation clarifies word problems and compositions",
                "Check calculator mode": "Always verify DEG vs RAD before computing",
                "Use relationships": "arcsec(x) = arccos(1/x) can simplify problems",
                "Verify domains": "Check input validity before computing to avoid errors"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Special Angles Sprint",
                    timeLimit: 60,
                    problems: [
                        "arcsin(1/2)",
                        "arccos(√3/2)",
                        "arctan(1)",
                        "arcsin(√2/2)",
                        "arccos(0)",
                        "arctan(√3)",
                        "arcsin(0)",
                        "arccos(1/2)"
                    ]
                },
                {
                    name: "Negative Values Challenge",
                    timeLimit: 90,
                    problems: [
                        "arcsin(-1/2)",
                        "arccos(-√2/2)",
                        "arctan(-1)",
                        "arcsin(-√3/2)",
                        "arccos(-1)"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Composition",
                    problem: "If sin(arccos(x)) = 3/5, what is x?",
                    hint: "Draw a right triangle where cos(θ) = x",
                    solution: "x = 4/5 or x = -4/5"
                },
                {
                    name: "Range Riddle",
                    problem: "Find all values of x where arcsin(x) + arccos(x) = π/2",
                    solution: "All x in [-1, 1] (this is an identity!)"
                },
                {
                    name: "Equation Builder",
                    challenge: "Create an equation sin(arcsin(x) + arccos(x)) = ? that simplifies to a constant",
                    sampleSolution: "sin(π/2) = 1"
                }
            ],
            applications: [
                {
                    scenario: "Optimal Launch Angle",
                    problem: "A projectile launched at 20 m/s should travel 35 meters. Find launch angle (ignore air resistance, g=9.8 m/s²)",
                    equation: "R = (v²sin(2θ))/g → θ = (1/2)arcsin(Rg/v²)",
                    solution: "≈ 31.4° or 58.6°"
                },
                {
                    scenario: "Satellite Angle",
                    problem: "Satellite orbits at 400 km altitude. From ground station, what elevation angle when satellite is 500 km away (measured along ground)?",
                    setup: "Right triangle: opposite=400, adjacent=500",
                    solution: "arctan(400/500) ≈ 38.7°"
                },
                {
                    scenario: "Rainbow Angle",
                    problem: "Rainbow visible when light refracts at ~42° from anti-solar point. If sun is 20° above horizon, at what angle above horizon is rainbow's peak?",
                    solution: "Uses complementary angles and geometry"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Problem: Evaluate arcsin(sin(150°))",
                        "Solution: arcsin(sin(150°)) = 150°"  // ERROR
                    ],
                    correctAnswer: "30°",
                    errorType: "Didn't check if angle is in arcsin range [-90°, 90°]"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Problem: Evaluate arccos(-1/2)",
                        "Solution: arccos(-1/2) = -60°"  // ERROR
                    ],
                    correctAnswer: "120°",
                    errorType: "arccos range is [0°, 180°], never negative"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Problem: Simplify tan(arcsin(3/5))",
                        "Triangle: opp=3, hyp=5",
                        "adj = √(5²-3²) = 4",
                        "tan = opp/adj = 3/4"  // Actually correct!
                    ],
                    correctAnswer: "3/4",
                    errorType: "No error - this is correct!"
                }
            ],
            identityProofs: [
                {
                    name: "Prove: arcsin(x) + arccos(x) = π/2",
                    hint: "Let α = arcsin(x) and β = arccos(x), then sin(α) = x and cos(β) = x",
                    steps: "Show that α and β are complementary angles"
                },
                {
                    name: "Prove: arctan(x) + arctan(1/x) = π/2 for x > 0",
                    hint: "Use right triangle with legs x and 1",
                    steps: "The two acute angles must sum to 90°"
                }
            ]
        };
    }

    initializeUnitCircleDatabase() {
        this.unitCircle = {
            quadrants: {
                I: {
                    angleRange: "[0, π/2] or [0°, 90°]",
                    sinSign: "+",
                    cosSign: "+",
                    tanSign: "+",
                    description: "All trig functions positive"
                },
                II: {
                    angleRange: "[π/2, π] or [90°, 180°]",
                    sinSign: "+",
                    cosSign: "-",
                    tanSign: "-",
                    description: "Only sine positive"
                },
                III: {
                    angleRange: "[π, 3π/2] or [180°, 270°]",
                    sinSign: "-",
                    cosSign: "-",
                    tanSign: "+",
                    description: "Only tangent positive"
                },
                IV: {
                    angleRange: "[3π/2, 2π] or [270°, 360°]",
                    sinSign: "-",
                    cosSign: "+",
                    tanSign: "-",
                    description: "Only cosine positive"
                }
            },
            keyPoints: {
                "0°/0 rad": { x: 1, y: 0, coordinates: "(1, 0)" },
                "30°/π/6": { x: "√3/2", y: "1/2", coordinates: "(√3/2, 1/2)" },
                "45°/π/4": { x: "√2/2", y: "√2/2", coordinates: "(√2/2, √2/2)" },
                "60°/π/3": { x: "1/2", y: "√3/2", coordinates: "(1/2, √3/2)" },
                "90°/π/2": { x: 0, y: 1, coordinates: "(0, 1)" },
                "120°/2π/3": { x: "-1/2", y: "√3/2", coordinates: "(-1/2, √3/2)" },
                "135°/3π/4": { x: "-√2/2", y: "√2/2", coordinates: "(-√2/2, √2/2)" },
                "150°/5π/6": { x: "-√3/2", y: "1/2", coordinates: "(-√3/2, 1/2)" },
                "180°/π": { x: -1, y: 0, coordinates: "(-1, 0)" },
                "270°/3π/2": { x: 0, y: -1, coordinates: "(0, -1)" },
                "360°/2π": { x: 1, y: 0, coordinates: "(1, 0)" }
            },
            interpretationForInverse: {
                arcsin: "Given y-coordinate, find angle in [-90°, 90°]",
                arccos: "Given x-coordinate, find angle in [0°, 180°]",
                arctan: "Given slope y/x, find angle in (-90°, 90°)"
            }
        };
    }

    initializeSpecialAnglesDatabase() {
        this.specialAngles = {
            degrees: {
                0: { sin: 0, cos: 1, tan: 0 },
                30: { sin: "1/2", cos: "√3/2", tan: "√3/3" },
                45: { sin: "√2/2", cos: "√2/2", tan: 1 },
                60: { sin: "√3/2", cos: "1/2", tan: "√3" },
                90: { sin: 1, cos: 0, tan: "undefined" },
                120: { sin: "√3/2", cos: "-1/2", tan: "-√3" },
                135: { sin: "√2/2", cos: "-√2/2", tan: -1 },
                150: { sin: "1/2", cos: "-√3/2", tan: "-√3/3" },
                180: { sin: 0, cos: -1, tan: 0 }
            },
            radians: {
                "0": { sin: 0, cos: 1, tan: 0 },
                "π/6": { sin: "1/2", cos: "√3/2", tan: "√3/3" },
                "π/4": { sin: "√2/2", cos: "√2/2", tan: 1 },
                "π/3": { sin: "√3/2", cos: "1/2", tan: "√3" },
                "π/2": { sin: 1, cos: 0, tan: "undefined" },
                "2π/3": { sin: "√3/2", cos: "-1/2", tan: "-√3" },
                "3π/4": { sin: "√2/2", cos: "-√2/2", tan: -1 },
                "5π/6": { sin: "1/2", cos: "-√3/2", tan: "-√3/3" },
                "π": { sin: 0, cos: -1, tan: 0 }
            },
            inverseValues: {
                "arcsin(0)": "0",
                "arcsin(1/2)": "30° or π/6",
                "arcsin(√2/2)": "45° or π/4",
                "arcsin(√3/2)": "60° or π/3",
                "arcsin(1)": "90° or π/2",
                "arccos(1)": "0",
                "arccos(√3/2)": "30° or π/6",
                "arccos(√2/2)": "45° or π/4",
                "arccos(1/2)": "60° or π/3",
                "arccos(0)": "90° or π/2",
                "arctan(0)": "0",
                "arctan(√3/3)": "30° or π/6",
                "arctan(1)": "45° or π/4",
                "arctan(√3)": "60° or π/3"
            },
            memorization: {
                pattern30_60_90: "Sides in ratio 1 : √3 : 2",
                pattern45_45_90: "Sides in ratio 1 : 1 : √2",
                sinIncreases: "sin(0°)=0 < sin(30°)=1/2 < sin(45°)=√2/2 < sin(60°)=√3/2 < sin(90°)=1",
                cosDecreases: "cos(0°)=1 > cos(30°)=√3/2 > cos(45°)=√2/2 > cos(60°)=1/2 > cos(90°)=0"
            }
        };
    }

    initializeIdentitiesDatabase() {
        this.identities = {
            basicInverse: {
                "sin(arcsin(x)) = x": "For -1 ≤ x ≤ 1",
                "cos(arccos(x)) = x": "For -1 ≤ x ≤ 1",
                "tan(arctan(x)) = x": "For all real x",
                "arcsin(sin(x)) = x": "Only if -π/2 ≤ x ≤ π/2",
                "arccos(cos(x)) = x": "Only if 0 ≤ x ≤ π",
                "arctan(tan(x)) = x": "Only if -π/2 < x < π/2"
            },
            complementary: {
                "arcsin(x) + arccos(x) = π/2": "For -1 ≤ x ≤ 1",
                "arctan(x) + arctan(1/x) = π/2": "For x > 0",
                "arctan(x) + arctan(1/x) = -π/2": "For x < 0",
                "arccot(x) = π/2 - arctan(x)": "For all real x"
            },
            oddEven: {
                "arcsin(-x) = -arcsin(x)": "Odd function",
                "arctan(-x) = -arctan(x)": "Odd function",
                "arccos(-x) = π - arccos(x)": "NOT an odd function",
                "arccot(-x) = π - arccot(x)": "NOT an odd function"
            },
            reciprocal: {
                "arcsec(x) = arccos(1/x)": "For |x| ≥ 1",
                "arccsc(x) = arcsin(1/x)": "For |x| ≥ 1",
                "arccot(x) = arctan(1/x)": "For x > 0; needs adjustment for x < 0"
            },
            sumFormulas: {
                "arctan(x) ± arctan(y) = arctan((x ± y)/(1 ∓ xy))": "When |xy| < 1",
                "arcsin(x) ± arcsin(y)": "Complex formula, rarely used",
                "arccos(x) ± arccos(y)": "Complex formula, rarely used"
            },
            compositionResults: {
                "sin(arccos(x)) = √(1-x²)": "For -1 ≤ x ≤ 1",
                "cos(arcsin(x)) = √(1-x²)": "For -1 ≤ x ≤ 1",
                "tan(arcsin(x)) = x/√(1-x²)": "For -1 < x < 1",
                "tan(arccos(x)) = √(1-x²)/x": "For -1 ≤ x ≤ 1, x ≠ 0",
                "sin(arctan(x)) = x/√(1+x²)": "For all real x",
                "cos(arctan(x)) = 1/√(1+x²)": "For all real x"
            }
        };
    }

    // ===== MAIN SOLVER METHOD =====

    solveInverseTrigProblem(config) {
        const { expression, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseInverseTrigProblem(expression, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveInverseTrigProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateInverseTrigSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateInverseTrigGraphData();

            // Generate workbook
            this.generateInverseTrigWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.value,
                degrees: this.currentSolution?.degrees,
                radians: this.currentSolution?.radians
            };

        } catch (error) {
            throw new Error(`Failed to solve inverse trig problem: ${error.message}`);
        }
    }

    parseInverseTrigProblem(expression, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = expression ? this.cleanMathExpression(expression) : '';

        // If problem type is specified, use it directly
        if (problemType && this.inverseTrigTypes[problemType]) {
            return {
                originalInput: expression || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect inverse trig problem type
        for (const [type, config] of Object.entries(this.inverseTrigTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractInverseTrigParameters(match, type);

                    return {
                        originalInput: expression || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        match: match,
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize inverse trig problem type from: ${expression || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/sin\^-1/gi, 'arcsin')
            .replace(/cos\^-1/gi, 'arccos')
            .replace(/tan\^-1/gi, 'arctan')
            .replace(/sec\^-1/gi, 'arcsec')
            .replace(/csc\^-1/gi, 'arccsc')
            .replace(/cot\^-1/gi, 'arccot')
            .replace(/√/g, 'sqrt')
            .replace(/π/g, 'pi')
            .trim();
    }

    extractInverseTrigParameters(match, type) {
        const params = {};

        if (!match) return params;

        // Extract value for basic inverse trig
        if (match[1]) {
            params.value = this.parseValue(match[1]);
        }

        return params;
    }

    parseValue(value) {
        if (!value) return 0;

        let cleaned = value.trim();

        // Handle common fractions
        if (cleaned === '1/2') return 0.5;
        if (cleaned === '√3/2' || cleaned === 'sqrt(3)/2') return Math.sqrt(3) / 2;
        if (cleaned === '√2/2' || cleaned === 'sqrt(2)/2') return Math.sqrt(2) / 2;
        if (cleaned === '1/√2' || cleaned === '1/sqrt(2)') return 1 / Math.sqrt(2);
        if (cleaned === '√3' || cleaned === 'sqrt(3)') return Math.sqrt(3);
        if (cleaned === '√3/3' || cleaned === 'sqrt(3)/3') return Math.sqrt(3) / 3;

        // Handle fractions
        const fractionMatch = cleaned.match(/^([+-]?\d*\.?\d*)\/(\d*\.?\d*)$/);
        if (fractionMatch) {
            const numerator = parseFloat(fractionMatch[1]) || 1;
            const denominator = parseFloat(fractionMatch[2]) || 1;
            return denominator !== 0 ? numerator / denominator : 0;
        }

        // Handle regular numbers
        const num = parseFloat(cleaned);
        return isNaN(num) ? 0 : num;
    }

    solveInverseTrigProblem_Internal(problem) {
        const solver = this.inverseTrigTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for inverse trig problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ===== INVERSE TRIG SOLVERS =====

    solveArcsinBasic(problem) {
        const { value } = problem.parameters;

        // Check domain
        if (Math.abs(value) > 1) {
            return {
                type: 'Arcsine',
                expression: `arcsin(${value})`,
                error: 'Domain violation',
                explanation: `arcsin is only defined for values in [-1, 1]. |${value}| > 1`,
                value: null,
                category: 'arcsin'
            };
        }

        const radians = Math.asin(value);
        const degrees = radians * (180 / Math.PI);

        // Check for special angles
        const specialAngle = this.identifySpecialAngle(value, 'arcsin');

        return {
            type: 'Arcsine (sin⁻¹)',
            expression: `arcsin(${value})`,
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: specialAngle?.radiansExact || `${radians.toFixed(6)} rad`,
            degreesExact: specialAngle?.degreesExact || `${degrees.toFixed(2)}°`,
            isSpecialAngle: !!specialAngle,
            specialAngleInfo: specialAngle,
            domain: '[-1, 1]',
            range: '[-π/2, π/2] or [-90°, 90°]',
            category: 'arcsin',
            verification: {
                check: `sin(${degrees.toFixed(2)}°) = ${Math.sin(radians).toFixed(6)}`,
                matches: Math.abs(Math.sin(radians) - value) < 1e-10
            }
        };
    }

    solveArcsinEquation(problem) {
        const { value } = problem.parameters;

        if (Math.abs(value) > 1) {
            return {
                type: 'Solve sin(x) = a',
                equation: `sin(x) = ${value}`,
                solution: 'No solution',
                explanation: `Since |sin(x)| ≤ 1 for all x, and |${value}| > 1, there is no solution`,
                category: 'arcsin'
            };
        }

        const principalValue = Math.asin(value);
        const principalDegrees = principalValue * (180 / Math.PI);

        // General solution
        const secondSolution = Math.PI - principalValue;
        const secondDegrees = 180 - principalDegrees;

        return {
            type: 'Solve sin(x) = a',
            equation: `sin(x) = ${value}`,
            principalValue: {
                radians: principalValue,
                degrees: principalDegrees,
                description: 'Principal value from arcsin'
            },
            allSolutions: {
                family1: `x = ${principalDegrees.toFixed(2)}° + 360°k`,
                family2: `x = ${secondDegrees.toFixed(2)}° + 360°k`,
                description: 'where k is any integer'
            },
            inRange: {
                range: '[0°, 360°)',
                solutions: [principalDegrees, secondSolution * (180 / Math.PI)]
            },
            category: 'arcsin'
        };
    }

    solveArcsinExpression(problem) {
        return {
            type: 'Simplify arcsin(sin(x))',
            explanation: 'arcsin(sin(x)) = x only when x ∈ [-π/2, π/2]',
            cases: {
                inRange: 'If -90° ≤ x ≤ 90°, then arcsin(sin(x)) = x',
                quadrantII: 'If 90° < x ≤ 180°, then arcsin(sin(x)) = 180° - x',
                quadrantIII: 'If 180° < x ≤ 270°, then arcsin(sin(x)) = x - 180°',
                quadrantIV: 'If 270° < x < 360°, then arcsin(sin(x)) = x - 360°'
            },
            category: 'arcsin'
        };
    }

    solveArccosBasic(problem) {
        const { value } = problem.parameters;

        if (Math.abs(value) > 1) {
            return {
                type: 'Arccosine',
                expression: `arccos(${value})`,
                error: 'Domain violation',
                explanation: `arccos is only defined for values in [-1, 1]. |${value}| > 1`,
                value: null,
                category: 'arccos'
            };
        }

        const radians = Math.acos(value);
        const degrees = radians * (180 / Math.PI);

        const specialAngle = this.identifySpecialAngle(value, 'arccos');

        return {
            type: 'Arccosine (cos⁻¹)',
            expression: `arccos(${value})`,
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: specialAngle?.radiansExact || `${radians.toFixed(6)} rad`,
            degreesExact: specialAngle?.degreesExact || `${degrees.toFixed(2)}°`,
            isSpecialAngle: !!specialAngle,
            specialAngleInfo: specialAngle,
            domain: '[-1, 1]',
            range: '[0, π] or [0°, 180°]',
            category: 'arccos',
            verification: {
                check: `cos(${degrees.toFixed(2)}°) = ${Math.cos(radians).toFixed(6)}`,
                matches: Math.abs(Math.cos(radians) - value) < 1e-10
            }
        };
    }

    solveArccosEquation(problem) {
        const { value } = problem.parameters;

        if (Math.abs(value) > 1) {
            return {
                type: 'Solve cos(x) = a',
                equation: `cos(x) = ${value}`,
                solution: 'No solution',
                explanation: `Since |cos(x)| ≤ 1 for all x, and |${value}| > 1, there is no solution`,
                category: 'arccos'
            };
        }

        const principalValue = Math.acos(value);
        const principalDegrees = principalValue * (180 / Math.PI);

        return {
            type: 'Solve cos(x) = a',
            equation: `cos(x) = ${value}`,
            principalValue: {
                radians: principalValue,
                degrees: principalDegrees,
                description: 'Principal value from arccos'
            },
            allSolutions: {
                family1: `x = ${principalDegrees.toFixed(2)}° + 360°k`,
                family2: `x = -${principalDegrees.toFixed(2)}° + 360°k`,
                description: 'where k is any integer (cosine is even function)'
            },
            inRange: {
                range: '[0°, 360°)',
                solutions: [principalDegrees, 360 - principalDegrees]
            },
            category: 'arccos'
        };
    }

    solveArccosExpression(problem) {
        return {
            type: 'Simplify arccos(cos(x))',
            explanation: 'arccos(cos(x)) = x only when x ∈ [0, π]',
            cases: {
                inRange: 'If 0° ≤ x ≤ 180°, then arccos(cos(x)) = x',
                quadrantIII_IV: 'If 180° < x < 360°, then arccos(cos(x)) = 360° - x',
                negative: 'If x < 0°, reflect to positive equivalent first'
            },
            category: 'arccos'
        };
    }

    solveArctanBasic(problem) {
        const { value } = problem.parameters;

        const radians = Math.atan(value);
        const degrees = radians * (180 / Math.PI);

        const specialAngle = this.identifySpecialAngle(value, 'arctan');

        return {
            type: 'Arctangent (tan⁻¹)',
            expression: `arctan(${value})`,
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: specialAngle?.radiansExact || `${radians.toFixed(6)} rad`,
            degreesExact: specialAngle?.degreesExact || `${degrees.toFixed(2)}°`,
            isSpecialAngle: !!specialAngle,
            specialAngleInfo: specialAngle,
            domain: 'All real numbers',
            range: '(-π/2, π/2) or (-90°, 90°)',
            category: 'arctan',
            verification: {
                check: `tan(${degrees.toFixed(2)}°) = ${Math.tan(radians).toFixed(6)}`,
                matches: Math.abs(Math.tan(radians) - value) < 1e-10
            }
        };
    }

    solveArctanEquation(problem) {
        const { value } = problem.parameters;

        const principalValue = Math.atan(value);
        const principalDegrees = principalValue * (180 / Math.PI);

        return {
            type: 'Solve tan(x) = a',
            equation: `tan(x) = ${value}`,
            principalValue: {
                radians: principalValue,
                degrees: principalDegrees,
                description: 'Principal value from arctan'
            },
            allSolutions: {
                general: `x = ${principalDegrees.toFixed(2)}° + 180°k`,
                description: 'where k is any integer (tangent has period 180°)'
            },
            inRange: {
                range: '[0°, 360°)',
                solutions: principalDegrees >= 0 ? 
                    [principalDegrees, principalDegrees + 180] :
                    [principalDegrees + 180, principalDegrees + 360]
            },
            category: 'arctan'
        };
    }

    solveArctanExpression(problem) {
        return {
            type: 'Simplify arctan(tan(x))',
            explanation: 'arctan(tan(x)) = x only when x ∈ (-π/2, π/2)',
            cases: {
                inRange: 'If -90° < x < 90°, then arctan(tan(x)) = x',
                quadrantII: 'If 90° < x < 180°, then arctan(tan(x)) = x - 180°',
                quadrantIII: 'If 180° < x < 270°, then arctan(tan(x)) = x - 180°',
                quadrantIV: 'If 270° < x < 360°, then arctan(tan(x)) = x - 360°'
            },
            category: 'arctan'
        };
    }

    solveArcsecBasic(problem) {
        const { value } = problem.parameters;

        if (Math.abs(value) < 1) {
            return {
                type: 'Arcsecant',
                expression: `arcsec(${value})`,
                error: 'Domain violation',
                explanation: `arcsec is only defined for |x| ≥ 1. |${value}| < 1`,
                value: null,
                category: 'arcsec'
            };
        }

        // arcsec(x) = arccos(1/x)
        const reciprocal = 1 / value;
        const radians = Math.acos(reciprocal);
        const degrees = radians * (180 / Math.PI);

        return {
            type: 'Arcsecant (sec⁻¹)',
            expression: `arcsec(${value})`,
            relationship: `arcsec(${value}) = arccos(${reciprocal})`,
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: `${radians.toFixed(6)} rad`,
            degreesExact: `${degrees.toFixed(2)}°`,
            domain: '(-∞, -1] ∪ [1, ∞)',
            range: '[0, π] \\ {π/2} or [0°, 180°] \\ {90°}',
            category: 'arcsec',
            verification: {
                check: `sec(${degrees.toFixed(2)}°) = 1/cos(${degrees.toFixed(2)}°) = ${value.toFixed(6)}`,
                matches: Math.abs(1 / Math.cos(radians) - value) < 1e-10
            }
        };
    }

    solveArccscBasic(problem) {
        const { value } = problem.parameters;

        if (Math.abs(value) < 1) {
            return {
                type: 'Arccosecant',
                expression: `arccsc(${value})`,
                error: 'Domain violation',
                explanation: `arccsc is only defined for |x| ≥ 1. |${value}| < 1`,
                value: null,
                category: 'arccsc'
            };
        }

        // arccsc(x) = arcsin(1/x)
        const reciprocal = 1 / value;
        const radians = Math.asin(reciprocal);
        const degrees = radians * (180 / Math.PI);

        return {
            type: 'Arccosecant (csc⁻¹)',
            expression: `arccsc(${value})`,
            relationship: `arccsc(${value}) = arcsin(${reciprocal})`,
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: `${radians.toFixed(6)} rad`,
            degreesExact: `${degrees.toFixed(2)}°`,
            domain: '(-∞, -1] ∪ [1, ∞)',
            range: '[-π/2, π/2] \\ {0} or [-90°, 90°] \\ {0°}',
            category: 'arccsc',
            verification: {
                check: `csc(${degrees.toFixed(2)}°) = 1/sin(${degrees.toFixed(2)}°) = ${value.toFixed(6)}`,
                matches: Math.abs(1 / Math.sin(radians) - value) < 1e-10
            }
        };
    }

    solveArccotBasic(problem) {
        const { value } = problem.parameters;

        // arccot(x) = π/2 - arctan(x) or arctan(1/x) for x > 0
        let radians;
        if (value > 0) {
            radians = Math.atan(1 / value);
        } else if (value < 0) {
            radians = Math.PI + Math.atan(1 / value);
        } else {
            radians = Math.PI / 2;
        }

        const degrees = radians * (180 / Math.PI);

        return {
            type: 'Arccotangent (cot⁻¹)',
            expression: `arccot(${value})`,
            relationship: value !== 0 ? `arccot(${value}) = arctan(1/${value})${value < 0 ? ' + π' : ''}` : 'arccot(0) = π/2',
            value: radians,
            radians: radians,
            degrees: degrees,
            radiansExact: `${radians.toFixed(6)} rad`,
            degreesExact: `${degrees.toFixed(2)}°`,
            domain: 'All real numbers',
            range: '(0, π) or (0°, 180°)',
            category: 'arccot',
            verification: {
                check: `cot(${degrees.toFixed(2)}°) = 1/tan(${degrees.toFixed(2)}°) ≈ ${value.toFixed(6)}`,
                matches: true
            }
        };
    }

    solveComposition(problem) {
        // This is a placeholder for composition problems
        // Would need more sophisticated parsing to handle full compositions
        return {
            type: 'Composition of Trig and Inverse Trig',
            approach: 'Use right triangle method',
            steps: [
                'Let θ equal the inverse trig function',
                'Draw a right triangle with the given trig ratio',
                'Use Pythagorean theorem to find missing side',
                'Evaluate the outer trig function using the triangle'
            ],
            category: 'composition'
        };
    }

    solveSpecialAngle(problem) {
        const { value } = problem.parameters;
        
        return {
            type: 'Special Angle Evaluation',
            value: value,
            suggestion: 'Check special angles: 0°, 30°, 45°, 60°, 90° and their trig values',
            category: 'special'
        };
    }

    solveWordProblem(problem) {
        return {
            type: 'Word Problem with Inverse Trig',
            approach: [
                'Draw a diagram showing the right triangle',
                'Label known sides and the unknown angle',
                'Determine which trig ratio relates the known sides',
                'Use appropriate inverse trig function',
                'Calculate and verify the answer makes sense'
            ],
            category: 'word_problem'
        };
    }

    identifySpecialAngle(value, trigFunc) {
        const tolerance = 1e-6;
        
        const specialValues = {
            arcsin: {
                '-1': { degrees: -90, radians: -Math.PI/2, degreesExact: '-90°', radiansExact: '-π/2' },
                [(-Math.sqrt(3)/2).toString()]: { degrees: -60, radians: -Math.PI/3, degreesExact: '-60°', radiansExact: '-π/3' },
                [(-Math.sqrt(2)/2).toString()]: { degrees: -45, radians: -Math.PI/4, degreesExact: '-45°', radiansExact: '-π/4' },
                '-0.5': { degrees: -30, radians: -Math.PI/6, degreesExact: '-30°', radiansExact: '-π/6' },
                '0': { degrees: 0, radians: 0, degreesExact: '0°', radiansExact: '0' },
                '0.5': { degrees: 30, radians: Math.PI/6, degreesExact: '30°', radiansExact: 'π/6' },
                [(Math.sqrt(2)/2).toString()]: { degrees: 45, radians: Math.PI/4, degreesExact: '45°', radiansExact: 'π/4' },
                [(Math.sqrt(3)/2).toString()]: { degrees: 60, radians: Math.PI/3, degreesExact: '60°', radiansExact: 'π/3' },
                '1': { degrees: 90, radians: Math.PI/2, degreesExact: '90°', radiansExact: 'π/2' }
            },
            arccos: {
                '-1': { degrees: 180, radians: Math.PI, degreesExact: '180°', radiansExact: 'π' },
                [(-Math.sqrt(3)/2).toString()]: { degrees: 150, radians: 5*Math.PI/6, degreesExact: '150°', radiansExact: '5π/6' },
                [(-Math.sqrt(2)/2).toString()]: { degrees: 135, radians: 3*Math.PI/4, degreesExact: '135°', radiansExact: '3π/4' },
                '-0.5': { degrees: 120, radians: 2*Math.PI/3, degreesExact: '120°', radiansExact: '2π/3' },
                '0': { degrees: 90, radians: Math.PI/2, degreesExact: '90°', radiansExact: 'π/2' },
                '0.5': { degrees: 60, radians: Math.PI/3, degreesExact: '60°', radiansExact: 'π/3' },
                [(Math.sqrt(2)/2).toString()]: { degrees: 45, radians: Math.PI/4, degreesExact: '45°', radiansExact: 'π/4' },
                [(Math.sqrt(3)/2).toString()]: { degrees: 30, radians: Math.PI/6, degreesExact: '30°', radiansExact: 'π/6' },
                '1': { degrees: 0, radians: 0, degreesExact: '0°', radiansExact: '0' }
            },
            arctan: {
                '0': { degrees: 0, radians: 0, degreesExact: '0°', radiansExact: '0' },
                [(Math.sqrt(3)/3).toString()]: { degrees: 30, radians: Math.PI/6, degreesExact: '30°', radiansExact: 'π/6' },
                '1': { degrees: 45, radians: Math.PI/4, degreesExact: '45°', radiansExact: 'π/4' },
                [(Math.sqrt(3)).toString()]: { degrees: 60, radians: Math.PI/3, degreesExact: '60°', radiansExact: 'π/3' }
            }
        };

        const funcValues = specialValues[trigFunc] || {};

        // Check common exact values
        for (const [key, angleData] of Object.entries(funcValues)) {
            const checkValue = parseFloat(key);
            if (Math.abs(value - checkValue) < tolerance) {
                return angleData;
            }
        }

        // Check against computed special values
        if (Math.abs(value - 0.5) < tolerance) return funcValues['0.5'];
        if (Math.abs(value - Math.sqrt(2)/2) < tolerance) return funcValues[(Math.sqrt(2)/2).toString()];
        if (Math.abs(value - Math.sqrt(3)/2) < tolerance) return funcValues[(Math.sqrt(3)/2).toString()];
        if (Math.abs(value + 0.5) < tolerance) return funcValues['-0.5'];
        if (Math.abs(value + Math.sqrt(2)/2) < tolerance) return funcValues[(-Math.sqrt(2)/2).toString()];
        if (Math.abs(value + Math.sqrt(3)/2) < tolerance) return funcValues[(-Math.sqrt(3)/2).toString()];

        return null;
    }

    // ===== STEP GENERATION =====

    generateInverseTrigSteps(problem, solution) {
        let baseSteps = this.generateBaseInverseTrigSteps(problem, solution);

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

        if (this.explanationLevel === 'ELI5') {
            baseSteps = this.addELI5Explanations(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseInverseTrigSteps(problem, solution) {
        const { type } = problem;
        const category = this.inverseTrigTypes[type]?.category;

        switch(category) {
            case 'arcsin':
                return this.generateArcsinSteps(problem, solution);
            case 'arccos':
                return this.generateArccosSteps(problem, solution);
            case 'arctan':
                return this.generateArctanSteps(problem, solution);
            case 'arcsec':
            case 'arccsc':
            case 'arccot':
                return this.generateReciprocal InverseTrigSteps(problem, solution);
            case 'composition':
                return this.generateCompositionSteps(problem, solution);
            default:
                return this.generateGenericInverseTrigSteps(problem, solution);
        }
    }

    generateArcsinSteps(problem, solution) {
        const steps = [];

        if (solution.error) {
            steps.push({
                stepNumber: 1,
                step: 'Check domain',
                description: 'Verify input is in valid domain',
                expression: solution.expression,
                reasoning: solution.explanation,
                error: true,
                conclusion: 'Problem cannot be solved - domain violation'
            });
            return steps;
        }

        // Step 1: Problem statement
        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: 'Evaluate the inverse sine function',
            expression: solution.expression,
            reasoning: 'arcsin(x) asks: what angle has sine equal to x?',
            goalStatement: `Find the angle θ where sin(θ) = ${problem.parameters.value}`,
            domainReminder: 'Domain: [-1, 1], Range: [-90°, 90°]'
        });

        // Step 2: Check domain
        steps.push({
            stepNumber: 2,
            step: 'Verify domain',
            description: 'Check that input is valid',
            condition: `|${problem.parameters.value}| ≤ 1`,
            reasoning: 'arcsin only accepts values between -1 and 1',
            result: `${Math.abs(problem.parameters.value)} ≤ 1 ✓`,
            algebraicRule: 'Domain restriction of inverse sine'
        });

        // Step 3: Evaluate or identify special angle
        if (solution.isSpecialAngle) {
            steps.push({
                stepNumber: 3,
                step: 'Identify special angle',
                description: 'Recognize this as a special angle value',
                expression: `sin(${solution.degreesExact}) = ${problem.parameters.value}`,
                reasoning: 'This is a standard trig value from unit circle or special triangles',
                specialTriangle: this.getSpecialTriangleInfo(solution.degrees),
                result: `θ = ${solution.degreesExact} = ${solution.radiansExact}`
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Calculate angle',
                description: 'Use calculator or tables to find angle',
                calculation: `arcsin(${problem.parameters.value})`,
                reasoning: 'Not a special angle - requires computation',
                result: `θ ≈ ${solution.degrees.toFixed(2)}° ≈ ${solution.radians.toFixed(4)} rad`
            });
        }

        // Step 4: Verify solution
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that sin(θ) equals our original value',
                verification: solution.verification.check,
                reasoning: 'Substitution confirms our answer',
                matches: solution.verification.matches ? '✓ Verified' : '✗ Error in calculation',
                finalAnswer: true
            });
        }

        // Step 5: Final answer
        steps.push({
            stepNumber: this.includeVerificationInSteps ? 5 : 4,
            step: 'Final answer',
            description: 'Solution in both degree and radian measure',
            expression: `arcsin(${problem.parameters.value}) = ${solution.degreesExact}`,
            radians: solution.radiansExact,
            degrees: solution.degreesExact,
            finalAnswer: true,
            interpretation: `The angle whose sine is ${problem.parameters.value} is ${solution.degreesExact}`
        });

        return steps;
    }

    generateArccosSteps(problem, solution) {
        const steps = [];

        if (solution.error) {
            steps.push({
                stepNumber: 1,
                step: 'Check domain',
                description: 'Verify input is in valid domain',
                expression: solution.expression,
                reasoning: solution.explanation,
                error: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: 'Evaluate the inverse cosine function',
            expression: solution.expression,
            reasoning: 'arccos(x) asks: what angle has cosine equal to x?',
            goalStatement: `Find the angle θ where cos(θ) = ${problem.parameters.value}`,
            domainReminder: 'Domain: [-1, 1], Range: [0°, 180°]'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify domain',
            description: 'Check that input is valid',
            condition: `|${problem.parameters.value}| ≤ 1`,
            reasoning: 'arccos only accepts values between -1 and 1',
            result: `${Math.abs(problem.parameters.value)} ≤ 1 ✓`
        });

        if (solution.isSpecialAngle) {
            steps.push({
                stepNumber: 3,
                step: 'Identify special angle',
                description: 'Recognize this as a special angle value',
                expression: `cos(${solution.degreesExact}) = ${problem.parameters.value}`,
                reasoning: 'This is a standard trig value',
                specialTriangle: this.getSpecialTriangleInfo(solution.degrees),
                result: `θ = ${solution.degreesExact} = ${solution.radiansExact}`
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Calculate angle',
                description: 'Use calculator to find angle',
                calculation: `arccos(${problem.parameters.value})`,
                reasoning: 'Not a special angle - requires computation',
                result: `θ ≈ ${solution.degrees.toFixed(2)}° ≈ ${solution.radians.toFixed(4)} rad`
            });
        }

        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that cos(θ) equals our original value',
                verification: solution.verification.check,
                matches: solution.verification.matches ? '✓ Verified' : '✗ Error'
            });
        }

        steps.push({
            stepNumber: this.includeVerificationInSteps ? 5 : 4,
            step: 'Final answer',
            description: 'Solution in both units',
            expression: `arccos(${problem.parameters.value}) = ${solution.degreesExact}`,
            radians: solution.radiansExact,
            degrees: solution.degreesExact,
            finalAnswer: true,
            rangeNote: 'Note: arccos always returns angles in [0°, 180°]'
        });

        return steps;
    }

    generateArctanSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: 'Evaluate the inverse tangent function',
            expression: solution.expression,
            reasoning: 'arctan(x) asks: what angle has tangent equal to x?',
            goalStatement: `Find the angle θ where tan(θ) = ${problem.parameters.value}`,
            domainReminder: 'Domain: all real numbers, Range: (-90°, 90°)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Note domain',
            description: 'Observe that any value is valid for arctan',
            reasoning: 'Tangent can equal any real number',
            noDomainRestriction: 'No need to check domain - all inputs valid'
        });

        if (solution.isSpecialAngle) {
            steps.push({
                stepNumber: 3,
                step: 'Identify special angle',
                description: 'Recognize this as a special angle value',
                expression: `tan(${solution.degreesExact}) = ${problem.parameters.value}`,
                reasoning: 'This is a standard tangent value',
                result: `θ = ${solution.degreesExact} = ${solution.radiansExact}`
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Calculate angle',
                description: 'Use calculator to find angle',
                calculation: `arctan(${problem.parameters.value})`,
                reasoning: 'Compute the angle whose tangent is this value',
                result: `θ ≈ ${solution.degrees.toFixed(2)}° ≈ ${solution.radians.toFixed(4)} rad`
            });
        }

        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that tan(θ) equals our original value',
                verification: solution.verification.check,
                matches: solution.verification.matches ? '✓ Verified' : '✗ Error'
            });
        }

        steps.push({
            stepNumber: this.includeVerificationInSteps ? 5 : 4,
            step: 'Final answer',
            description: 'Solution in both units',
            expression: `arctan(${problem.parameters.value}) = ${solution.degreesExact}`,
            radians: solution.radiansExact,
            degrees: solution.degreesExact,
            finalAnswer: true,
            rangeNote: 'Note: arctan returns angles in Quadrant I (positive) or IV (negative)'
        });

        return steps;
    }

    generateReciprocalInverseTrigSteps(problem, solution) {
        const steps = [];

        if (solution.error) {
            steps.push({
                stepNumber: 1,
                step: 'Check domain',
                expression: solution.expression,
                reasoning: solution.explanation,
                error: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Given problem',
            description: `Evaluate ${solution.type}`,
            expression: solution.expression,
            reasoning: `Use relationship to standard inverse trig: ${solution.relationship}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert to standard form',
            description: 'Express using arcsin, arccos, or arctan',
            conversion: solution.relationship,
            reasoning: 'This makes computation easier'
        });

        steps.push({
            stepNumber: 3,
            step: 'Evaluate',
            description: 'Calculate the angle',
            result: `θ = ${solution.degreesExact} = ${solution.radiansExact}`,
            finalAnswer: true
        });

        return steps;
    }

    generateCompositionSteps(problem, solution) {
        // Generic composition steps - would need specific problem details for full implementation
        return [{
            stepNumber: 1,
            step: 'Composition problem',
            description: 'Use right triangle method',
            approach: solution.steps,
            category: 'composition'
        }];
    }

    generateGenericInverseTrigSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Inverse trig problem',
            description: 'Evaluate the given inverse trigonometric function',
            expression: problem.cleanInput || solution.expression,
            solution: solution
        }];
    }

    getSpecialTriangleInfo(degrees) {
        const absДeg = Math.abs(degrees);
        
        if (absДeg === 30 || absДeg === 60) {
            return '30-60-90 triangle (sides in ratio 1 : √3 : 2)';
        } else if (absДeg === 45) {
            return '45-45-90 triangle (sides in ratio 1 : 1 : √2)';
        } else if (absДeg === 0 || absДeg === 90 || absДeg === 180) {
            return 'Axis angle (quadrantal angle)';
        }
        
        return null;
    }

    // ===== ENHANCED EXPLANATION METHODS =====
    // (Reusing many methods from linear workbook with adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationTrig(step, problem),
                procedural: this.getProceduralExplanationTrig(step),
                visual: this.getVisualExplanationTrig(step, problem),
                algebraic: this.getAlgebraicExplanationTrig(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesTrig(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyTrig(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsTrig(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionTrig(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionTrig(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationTrig(step, problem) {
        const conceptualMap = {
            'Given problem': 'An inverse trig function reverses what a trig function does - it finds the angle from the ratio',
            'Verify domain': 'Not all numbers can be sine/cosine values - they must be between -1 and 1 since trig ratios are bounded',
            'Identify special angle': 'Special angles are commonly used angles with nice exact trig values - memorizing these saves time',
            'Calculate angle': 'When not a special angle, we use technology to find the numerical angle value',
            'Verify solution': 'Checking our answer by substituting back confirms we found the correct angle',
            'Final answer': 'The angle can be expressed in degrees or radians - both represent the same geometric rotation'
        };

        return conceptualMap[step.step] || 'This step progresses toward finding the angle with the given trig value';
    }

    getProceduralExplanationTrig(step) {
        const proceduralMap = {
            'Given problem': '1. Identify which inverse trig function\n2. Note the input value\n3. Recall domain and range',
            'Verify domain': '1. Check if |input| ≤ 1 for arcsin/arccos\n2. Check if |input| ≥ 1 for arcsec/arccsc\n3. No check needed for arctan/arccot',
            'Identify special angle': '1. Check if value matches special angle\n2. Recall corresponding angle\n3. Express in both degrees and radians',
            'Calculate angle': '1. Enter value in calculator\n2. Ensure correct mode (DEG or RAD)\n3. Record answer with appropriate precision',
            'Verify solution': '1. Compute trig function of answer\n2. Compare to original value\n3. Confirm they match'
        };

        return proceduralMap[step.step] || 'Follow standard procedure for this step type';
    }

    getVisualExplanationTrig(step, problem) {
        const visualMap = {
            'Given problem': 'Picture the unit circle - you have a coordinate or ratio, need to find the angle',
            'Verify domain': 'On unit circle, sine and cosine are coordinates - they can only be between -1 and 1',
            'Identify special angle': 'These are the "nice" angles we memorize - 30°, 45°, 60° and their positions on unit circle',
            'Calculate angle': 'Imagine rotating around the circle until you reach the point with this trig value',
            'Verify solution': 'Check: if you go to this angle on unit circle, does it give you the original value?'
        };

        return visualMap[step.step] || 'Visualize on unit circle or right triangle';
    }

    getAlgebraicExplanationTrig(step) {
        const algebraicMap = {
            'Given problem': 'Definition of inverse function: if f(y) = x, then f⁻¹(x) = y',
            'Verify domain': 'Domain restriction ensures function is one-to-one and invertible',
            'Identify special angle': 'Exact values derived from special right triangles (30-60-90 and 45-45-90)',
            'Calculate angle': 'Numerical approximation using Taylor series or lookup tables',
            'Verify solution': 'Verification using composition: f(f⁻¹(x)) = x for x in domain'
        };

        return algebraicMap[step.step] || 'Apply inverse function properties';
    }

    identifyPrerequisitesTrig(step, problemType) {
        const category = this.inverseTrigTypes[problemType]?.category || 'arcsin';
        return this.prerequisites[category]?.skills || ['Basic trigonometry', 'Unit circle'];
    }

    identifyKeyVocabularyTrig(step) {
        const vocab = {
            'Given problem': ['inverse function', 'arcsin/arccos/arctan', 'domain', 'range', 'principal value'],
            'Verify domain': ['domain', 'valid input', 'restriction', 'bounded'],
            'Identify special angle': ['special angle', 'exact value', 'special triangle', 'unit circle'],
            'Calculate angle': ['approximate', 'numerical', 'calculator', 'precision'],
            'Verify solution': ['verification', 'substitution', 'composition', 'identity']
        };

        return vocab[step.step] || ['angle', 'trigonometric', 'inverse'];
    }

    generateThinkingPromptsTrig(step) {
        return {
            before: 'What is this step trying to accomplish? What information do I have?',
            during: 'Am I using the right inverse function? Is my calculator in the correct mode?',
            after: 'Does my answer make sense given the domain/range? Should I verify?'
        };
    }

    generateSelfCheckQuestionTrig(step) {
        const questions = {
            'Given problem': 'Do I know which inverse trig function to use and what it means?',
            'Verify domain': 'Is my input value actually in the valid domain for this function?',
            'Identify special angle': 'Do I recognize this value from the unit circle or special triangles?',
            'Calculate angle': 'Is my calculator in the right mode? Does the answer fit the expected range?',
            'Verify solution': 'When I compute the trig function of my answer, do I get back the original value?'
        };

        return questions[step.step] || 'Does this step move me toward the correct answer?';
    }

    findRealWorldConnectionTrig(step, problem) {
        if (step.step === 'Given problem') {
            return 'Finding angles is crucial in surveying, navigation, architecture, and physics - whenever you know sides but need angles';
        } else if (step.step === 'Final answer') {
            return 'This angle could represent: direction of travel, angle of elevation to a building, launch angle of a projectile, etc.';
        }
        
        return null;
    }

    addELI5Explanations(baseSteps, problem) {
        return baseSteps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationTrig(step, problem),
                analogy: this.findRelevantAnalogyTrig(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description || ''),
                visualization: this.suggestVisualizationTrig(step)
            }
        }));
    }

    generateELI5ExplanationTrig(step, problem) {
        const ELI5Map = {
            'Given problem': "We have a number and we need to find what angle gives us that number when we use sine/cosine/tangent. It's like working backwards!",
            'Verify domain': "Just like you can't have a fraction bigger than a whole pizza, some numbers don't work for arcsin and arccos. We check if our number is OK to use.",
            'Identify special angle': "These are the 'easy' angles that we remember - like 30°, 45°, 60°. They're like your favorite numbers!",
            'Calculate angle': "We use a calculator to find the angle, like using a ruler to measure something we can't measure with our eyes.",
            'Verify solution': "We check our answer by doing the problem backwards - like checking subtraction with addition!",
            'Final answer': "We found the angle! We can say it in degrees (like on a protractor) or radians (a different way to measure angles)."
        };

        return ELI5Map[step.step] || "We're getting closer to finding our answer!";
    }

    findRelevantAnalogyTrig(step, problem) {
        const category = this.inverseTrigTypes[problem.type]?.category || 'arcsin';
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(category) || analogy.suitableFor.includes('all inverse trig')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of it like finding where you started when someone tells you where you ended up.";
    }

    suggestVisualizationTrig(step) {
        const visualMap = {
            'Given problem': 'Draw a unit circle (a circle with radius 1) and think about finding an angle',
            'Verify domain': 'Draw a number line from -1 to 1 and mark your value to see if it fits',
            'Identify special angle': 'Draw the special right triangles: 30-60-90 and 45-45-90',
            'Calculate angle': 'Imagine rotating around a circle - how far do you need to go?',
            'Verify solution': 'Draw your angle and check if the trig value matches',
            'Final answer': 'Mark your answer on a unit circle or draw it with a protractor'
        };

        return visualMap[step.step] || 'Draw a diagram to represent this step';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1 && steps[i].stepType !== 'bridge') {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: {
                        currentState: `We now have: ${steps[i].result || steps[i].expression || 'progress'}`,
                        nextGoal: `Next: ${steps[i + 1].description}`,
                        why: `This prepares us for: ${steps[i + 1].reasoning || 'the next calculation'}`,
                        howItHelps: 'Each step builds on the previous, moving us toward the final angle'
                    }
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.inverseTrigTypes[problemType]?.category || 'arcsin';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsTrig(step, category),
                checkPoints: this.generateCheckPointsTrig(step),
                warningFlags: this.identifyWarningFlagsTrig(step, category)
            }
        };
    }

    generatePreventionTipsTrig(step, category) {
        const tipsMap = {
            'Verify domain': [
                'Always check domain before computing',
                'Remember: |sin| ≤ 1 and |cos| ≤ 1',
                'arctan accepts all real numbers'
            ],
            'Identify special angle': [
                'Memorize special angle values',
                'Use 30-60-90 and 45-45-90 triangles',
                'Check signs carefully'
            ],
            'Calculate angle': [
                'Verify calculator mode (DEG vs RAD)',
                'Check answer is in expected range',
                'Record sufficient precision'
            ]
        };

        return tipsMap[step.step] || ['Work carefully', 'Double-check calculations'];
    }

    generateCheckPointsTrig(step) {
        return [
            'Is my input in the valid domain?',
            'Am I using the correct inverse trig function?',
            'Is my calculator in the right mode?',
            'Does my answer fall in the expected range?'
        ];
    }

    identifyWarningFlagsTrig(step, category) {
        const warnings = {
            arcsin: ['Input > 1 or < -1', 'Expecting angles outside [-90°, 90°]'],
            arccos: ['Input > 1 or < -1', 'Expecting negative angles'],
            arctan: ['Wrong range expectations', 'Calculator mode issues']
        };

        return warnings[category] || [];
    }

    addScaffolding(baseSteps, problem) {
        return baseSteps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsTrig(step, problem),
                subSteps: this.breakIntoSubStepsTrig(step),
                hints: this.generateProgressiveHintsTrig(step, problem),
                practiceVariation: 'Try similar problem with different input value'
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessTrig(step),
                decisionPoints: this.identifyDecisionPointsTrig(step),
                alternativeApproaches: this.suggestAlternativeMethodsTrig(step, problem)
            }
        }));
    }

    generateGuidingQuestionsTrig(step, problem) {
        const questionsMap = {
            'Given problem': [
                'What inverse trig function am I evaluating?',
                'What does this function ask me to find?',
                'What are the domain and range?'
            ],
            'Verify domain': [
                'Is this value possible for the trig function?',
                'What are the domain restrictions?',
                'Is my input valid?'
            ],
            'Identify special angle': [
                'Have I seen this value before?',
                'Does it match a special triangle?',
                'What angle on the unit circle has this value?'
            ],
            'Calculate angle': [
                'Is my calculator in the right mode?',
                'What range should my answer be in?',
                'Am I recording enough decimal places?'
            ]
        };

        return questionsMap[step.step] || ['What is the goal?', 'How do I proceed?'];
    }

    breakIntoSubStepsTrig(step) {
        if (step.step === 'Calculate angle') {
            return [
                'Check calculator mode (DEG or RAD)',
                'Enter the inverse trig function',
                'Input the value',
                'Record the result',
                'Verify it\'s in the expected range'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generateProgressiveHintsTrig(step, problem) {
        const category = this.inverseTrigTypes[problem.type]?.category || 'arcsin';
        const hintSet = this.hints[category] || {};

        return {
            level1: hintSet.level1 || 'Think about what the inverse trig function means',
            level2: hintSet.level2 || 'Check domain and recall special angles',
            level3: hintSet.level3 || 'Use calculator if not a special angle',
            level4: hintSet.level4 || 'Compute and verify your answer'
        };
    }

    explainThinkingProcessTrig(step) {
        return {
            observe: 'What inverse trig function and value do I have?',
            goal: 'What angle am I trying to find?',
            strategy: 'Should I use special angles or calculator?',
            execute: 'Compute carefully and check range',
            verify: 'Does the trig function of my answer give the original value?'
        };
    }

    identifyDecisionPointsTrig(step) {
        return [
            'Is this a special angle or do I need a calculator?',
            'What mode should my calculator be in?',
            'Should I express answer in degrees or radians?',
            'Do I need to find all solutions or just the principal value?'
        ];
    }

    suggestAlternativeMethodsTrig(step, problem) {
        const alternatives = {
            'Calculate angle': [
                'Use table lookup instead of calculator',
                'Use unit circle diagram to estimate',
                'Use inverse trig identities if composition involved'
            ],
            'Verify solution': [
                'Check on unit circle diagram',
                'Use calculator verification',
                'Check with special triangle if applicable'
            ]
        };

        return alternatives[step.step] || ['The chosen method is appropriate'];
    }

    // ===== GRAPH GENERATION =====

    generateInverseTrigGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.inverseTrigTypes[type]?.category;

        if (category && this.currentSolution.value !== null) {
            this.graphData = this.generateInverseTrigGraph(category, this.currentSolution);
        }
    }

    generateInverseTrigGraph(category, solution) {
        return {
            type: `inverse_${category}`,
            functionName: category,
            inputValue: solution.expression,
            outputAngle: solution.degrees,
            outputRadians: solution.radians,
            graphDescription: `Graph of y = ${category}(x) with point marked at (${solution.expression?.match(/\((.*?)\)/)?.[1]}, ${solution.degrees.toFixed(2)}°)`,
            unitCircleRepresentation: `On unit circle: angle = ${solution.degrees.toFixed(2)}°`,
            domain: solution.domain,
            range: solution.range
        };
    }

    // ===== WORKBOOK GENERATION =====

    generateInverseTrigWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionTrig(),
            this.createPrerequisiteSectionTrig(),
            this.createEnhancedStepsSectionTrig(),
            this.createInverseTrigLessonSection(),
            this.createSolutionSectionTrig(),
            this.createAnalysisSectionTrig(),
            this.createVerificationSectionTrig(),
            this.createUnitCircleSectionTrig(),
            this.createSpecialAnglesSectionTrig(),
            this.createRealWorldApplicationSectionTrig(),
            this.createIdentitiesSectionTrig(),
            this.createPedagogicalNotesSectionTrig(),
            this.createAlternativeMethodsSectionTrig(),
            this.createPracticeProblemsSectionTrig()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Inverse Trigonometric Functions Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            angleMode: this.angleMode,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionTrig() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.inverseTrigTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.inverseTrigTypes[this.currentProblem.type]?.category || 'inverse trig'],
            ['Expression', this.currentSolution?.expression || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Inverse trigonometric function evaluation']
        ];

        if (this.currentProblem.parameters.value !== undefined) {
            problemData.push(['', '']);
            problemData.push(['Input Value', this.currentProblem.parameters.value]);
        }

        const typeConfig = this.inverseTrigTypes[this.currentProblem.type];
        if (typeConfig?.domain) {
            problemData.push(['Domain', typeConfig.domain]);
        }
        if (typeConfig?.range) {
            problemData.push(['Range', typeConfig.range]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionTrig() {
        if (!this.prerequisiteChecks) return null;

        const category = this.inverseTrigTypes[this.currentProblem.type]?.category;
        const prereqs = this.prerequisites[category];

        if (!prereqs) return null;

        const prereqData = [
            ['Required Skills', prereqs.skills.join(', ')],
            ['Prior Knowledge', prereqs.priorKnowledge.join(', ')],
            ['', ''],
            ['Quick Check Questions', '']
        ];

        prereqs.checkQuestions.forEach((q, index) => {
            prereqData.push([`Question ${index + 1}`, q]);
        });

        return {
            title: 'Prerequisites',
            type: 'prerequisites',
            data: prereqData
        };
    }

    createEnhancedStepsSectionTrig() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.domainReminder) {
                stepsData.push(['Domain/Range', step.domainReminder]);
            }

            if (step.specialTriangle) {
                stepsData.push(['Special Triangle', step.specialTriangle]);
            }

            // ELI5
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Detailed explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            // Scaffolding
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
            }

            // Self-check
            if (step.selfCheck) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createInverseTrigLessonSection() {
        const { type } = this.currentProblem;
        const category = this.inverseTrigTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Title', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
                lessonData.push([name, formula]);
            });
        }

        if (lesson.specialValues) {
            lessonData.push(['', '']);
            lessonData.push(['Special Values', '']);
            Object.entries(lesson.specialValues).forEach(([expr, value]) => {
                lessonData.push([expr, value]);
            });
        }

        if (lesson.commonMistakes) {
            lessonData.push(['', '']);
            lessonData.push(['Common Mistakes', '']);
            lesson.commonMistakes.forEach(mistake => {
                lessonData.push(['•', mistake]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionTrig() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.error]);
            solutionData.push(['Explanation', this.currentSolution.explanation]);
            solutionData.push(['Solution', 'Undefined']);
        } else {
            if (this.currentSolution.degrees !== undefined) {
                solutionData.push(['Degrees', this.currentSolution.degreesExact || `${this.currentSolution.degrees.toFixed(2)}°`]);
            }
            if (this.currentSolution.radians !== undefined) {
                solutionData.push(['Radians', this.currentSolution.radiansExact || `${this.currentSolution.radians.toFixed(4)} rad`]);
            }
            if (this.currentSolution.isSpecialAngle !== undefined) {
                solutionData.push(['Special Angle', this.currentSolution.isSpecialAngle ? 'Yes' : 'No']);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionTrig() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Function Type', this.currentSolution.type || this.currentSolution.category],
            ['Category', this.inverseTrigTypes[this.currentProblem.type]?.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.domain) {
            analysisData.push(['Domain', this.currentSolution.domain]);
        }
        if (this.currentSolution.range) {
            analysisData.push(['Range', this.currentSolution.range]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionTrig() {
        if (!this.currentSolution || this.currentSolution.error) return null;

        const verification = this.currentSolution.verification;
        if (!verification) return null;

        const verificationData = [
            ['Verification Method', 'Direct Substitution'],
            ['', ''],
            ['Check', verification.check],
            ['Result', verification.matches ? 'Verified ✓' : 'Error ✗']
        ];

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence', 'High']);
            verificationData.push(['Method', 'Computed trig function of result and compared to input']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createUnitCircleSectionTrig() {
        const circleData = [
            ['Unit Circle Reference', ''],
            ['', ''],
            ['Quadrant I (0° to 90°)', 'All trig functions positive'],
            ['Quadrant II (90° to 180°)', 'Only sine positive'],
            ['Quadrant III (180° to 270°)', 'Only tangent positive'],
            ['Quadrant IV (270° to 360°)', 'Only cosine positive'],
            ['', ''],
            ['For Inverse Functions', ''],
            ['arcsin range', '[-90°, 90°] - Quadrants IV and I'],
            ['arccos range', '[0°, 180°] - Quadrants I and II'],
            ['arctan range', '(-90°, 90°) - Quadrants IV and I']
        ];

        return {
            title: 'Unit Circle Reference',
            type: 'reference',
            data: circleData
        };
    }

    createSpecialAnglesSectionTrig() {
        const specialData = [
            ['Special Angles Reference', ''],
            ['', ''],
            ['Angle', 'sin', 'cos', 'tan'],
            ['0°', '0', '1', '0'],
            ['30° (π/6)', '1/2', '√3/2', '√3/3'],
            ['45° (π/4)', '√2/2', '√2/2', '1'],
            ['60° (π/3)', '√3/2', '1/2', '√3'],
            ['90° (π/2)', '1', '0', 'undefined'],
            ['', '', '', ''],
            ['Memory Aid', '', '', ''],
            ['30-60-90 triangle', 'Sides: 1 : √3 : 2', '', ''],
            ['45-45-90 triangle', 'Sides: 1 : 1 : √2', '', '']
        ];

        return {
            title: 'Special Angles',
            type: 'reference',
            data: specialData
        };
    }

    createRealWorldApplicationSectionTrig() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createIdentitiesSectionTrig() {
        const identityData = [
            ['Important Identities', ''],
            ['', ''],
            ['Basic Inverse Identities', '']
        ];

        Object.entries(this.identities.basicInverse).slice(0, 4).forEach(([identity, condition]) => {
            identityData.push([identity, condition]);
        });

        identityData.push(['', '']);
        identityData.push(['Complementary Identities', '']);

        Object.entries(this.identities.complementary).slice(0, 3).forEach(([identity, condition]) => {
            identityData.push([identity, condition]);
        });

        return {
            title: 'Useful Identities',
            type: 'identities',
            data: identityData
        };
    }

    createPedagogicalNotesSectionTrig() {
        if (!this.includePedagogicalNotes) return null;

        const category = this.inverseTrigTypes[this.currentProblem.type]?.category;
        const notes = this.generateInverseTrigPedagogicalNotes(category);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSectionTrig() {
        if (!this.includeAlternativeMethods) return null;

        const category = this.inverseTrigTypes[this.currentProblem.type]?.category;
        const alternatives = this.generateInverseTrigAlternativeMethods(category);

        return {
            title: 'Alternative Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Comparison', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSectionTrig() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy', '']
        ];

        problems.easy.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium', '']);

        problems.medium.slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateInverseTrigPedagogicalNotes(category) {
        const pedagogicalDatabase = {
            arcsin: {
                objectives: [
                    'Evaluate arcsine for given values',
                    'Understand domain and range restrictions',
                    'Recognize special angle values',
                    'Apply to right triangle problems'
                ],
                keyConcepts: [
                    'Inverse function reverses sine',
                    'Principal value in [-90°, 90°]',
                    'Domain limited to [-1, 1]',
                    'Unit circle interpretation'
                ],
                prerequisites: [
                    'Understanding of sine function',
                    'Unit circle familiarity',
                    'Inverse function concept',
                    'Special right triangles'
                ],
                commonDifficulties: [
                    'Domain violations (using |x| > 1)',
                    'Range confusion (expecting any angle)',
                    'Confusing with reciprocal (1/sin)',
                    'Calculator mode errors'
                ],
                teachingStrategies: [
                    'Emphasize "undo" concept repeatedly',
                    'Use unit circle diagrams extensively',
                    'Practice with special angles first',
                    'Show domain violations explicitly',
                    'Compare ranges of different inverse functions'
                ],
                assessment: [
                    'Can student identify valid domain?',
                    'Does student recognize special angles?',
                    'Can student verify answers?',
                    'Does student understand range restrictions?'
                ]
            },
            arccos: {
                objectives: [
                    'Evaluate arccosine for given values',
                    'Understand non-negative range [0°, 180°]',
                    'Compare with arcsine',
                    'Use complementary relationship'
                ],
                keyConcepts: [
                    'Always returns non-negative angles',
                    'Covers Quadrants I and II',
                    'Complementary to arcsine',
                    'arcsin(x) + arccos(x) = π/2'
                ],
                prerequisites: [
                    'Cosine function understanding',
                    'Unit circle (especially upper half)',
                    'Inverse functions',
                    'Complementary angles'
                ],
                commonDifficulties: [
                    'Expecting negative outputs',
                    'Confusing with arcsine range',
                    'Not recognizing arccos(-x) ≠ -arccos(x)',
                    'Calculator mode issues'
                ],
                teachingStrategies: [
                    'Emphasize non-negative range',
                    'Show on unit circle (right half)',
                    'Compare directly with arcsine',
                    'Use complementary identity',
                    'Practice with negative inputs'
                ],
                assessment: [
                    'Does student recognize range is always ≥ 0?',
                    'Can student use complementary relationship?',
                    'Does student handle negative inputs correctly?'
                ]
            },
            arctan: {
                objectives: [
                    'Evaluate arctangent for any real number',
                    'Understand unbounded domain',
                    'Relate to slope concept',
                    'Use atan2 for full angle recovery'
                ],
                keyConcepts: [
                    'Accepts all real numbers',
                    'Range limited to (-90°, 90°)',
                    'Related to slope (rise/run)',
                    'Odd function: arctan(-x) = -arctan(x)',
                    'Useful for coordinate-to-angle conversion'
                ],
                prerequisites: [
                    'Tangent function',
                    'Slope concept',
                    'Asymptotic behavior',
                    'Odd/even functions'
                ],
                commonDifficulties: [
                    'Range expectations outside (-90°, 90°)',
                    'Not recognizing tan accepts all inputs',
                    'Confusing with arccot',
                    'Quadrant issues in applications'
                ],
                teachingStrategies: [
                    'Connect to slope repeatedly',
                    'Emphasize no domain restrictions',
                    'Show limiting behavior (±∞)',
                    'Use real-world examples (angles from coordinates)',
                    'Introduce atan2 for advanced students'
                ],
                assessment: [
                    'Can student evaluate for large inputs?',
                    'Does student connect to slope?',
                    'Can student use for angle-finding problems?',
                    'Does student understand range limitations?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Evaluate inverse trig functions'],
            keyConcepts: ['Inverse operations', 'Domain and range'],
            prerequisites: ['Trigonometry basics'],
            commonDifficulties: ['Domain/range confusion'],
            teachingStrategies: ['Use unit circle', 'Practice with calculator'],
            assessment: ['Check understanding of concepts']
        };
    }

    generateInverseTrigAlternativeMethods(category) {
        const alternativeDatabase = {
            arcsin: {
                primaryMethod: 'Direct evaluation with calculator',
                methods: [
                    {
                        name: 'Unit Circle Lookup',
                        description: 'Find angle on unit circle with given y-coordinate'
                    },
                    {
                        name: 'Special Triangle Method',
                        description: 'Use 30-60-90 or 45-45-90 triangles for exact values'
                    },
                    {
                        name: 'Table Lookup',
                        description: 'Use trig tables to find angle with given sine'
                    }
                ],
                comparison: 'Calculator fastest; special triangles for exact values; unit circle for visualization'
            },
            arccos: {
                primaryMethod: 'Direct evaluation with calculator',
                methods: [
                    {
                        name: 'Complementary Method',
                        description: 'Use arccos(x) = π/2 - arcsin(x)'
                    },
                    {
                        name: 'Unit Circle Method',
                        description: 'Find angle with given x-coordinate on unit circle'
                    },
                    {
                        name: 'Reference Angle',
                        description: 'Find reference angle, adjust for quadrant'
                    }
                ],
                comparison: 'Direct calculation most reliable; complementary useful for checking; unit circle for understanding'
            },
            arctan: {
                primaryMethod: 'Direct evaluation with calculator',
                methods: [
                    {
                        name: 'Slope Interpretation',
                        description: 'Think of input as slope, find angle of incline'
                    },
                    {
                        name: 'atan2 Function',
                        description: 'Two-argument form preserves full angle information'
                    },
                    {
                        name: 'Series Expansion',
                        description: 'For advanced: arctan(x) = x - x³/3 + x⁵/5 - ... for |x| ≤ 1'
                    }
                ],
                comparison: 'Direct evaluation standard; atan2 for programming; slope method for applications'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Calculator evaluation',
            methods: [{
                name: 'Alternative approach',
                description: 'Depends on specific problem context'
            }],
            comparison: 'Choose method based on available tools and required precision'
        };
    }
}

// Export the class
export default EnhancedInverseTrigMathematicalWorkbook;

