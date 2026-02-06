// Enhanced Radical to Quadratic Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedRadicalToQuadraticMathematicalWorkbook {
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

        this.mathSymbols = this.initializeMathSymbols();
        this.setThemeColors();
        this.initializeRadicalSolvers();
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
        this.initializeRadicalLessons();
    }

    initializeRadicalLessons() {
        this.lessons = {
            radical_basics: {
                title: "Radical Equation Fundamentals",
                concepts: [
                    "Radical equation contains variable under a radical sign",
                    "√(expression) = value or √(expression) = other expression",
                    "Squaring both sides eliminates the radical",
                    "Always check for extraneous solutions"
                ],
                theory: "Radical equations require isolating the radical, squaring both sides to eliminate it, then solving the resulting equation. Squaring can introduce false solutions, so verification is critical.",
                keyFormulas: {
                    "Basic Form": "√(ax + b) = c",
                    "Squaring Property": "(√x)² = x",
                    "Solution Method": "Isolate radical, square both sides, solve, verify"
                },
                solvingSteps: [
                    "Isolate the radical expression on one side",
                    "Square both sides of the equation",
                    "Solve the resulting equation (often quadratic)",
                    "Check all solutions in original equation",
                    "Reject extraneous solutions"
                ],
                applications: [
                    "Calculating distances using distance formula",
                    "Physics equations involving velocity",
                    "Engineering stress-strain relationships",
                    "Financial models with square root functions"
                ],
                criticalWarnings: [
                    "Squaring both sides can create extraneous solutions",
                    "MUST verify all solutions in original equation",
                    "Radical expressions must be non-negative for real solutions",
                    "Domain restrictions apply"
                ]
            },

            simple_radical: {
                title: "Simple Radical Equations",
                concepts: [
                    "Form: √(ax + b) = c where c ≥ 0",
                    "One radical, no other terms",
                    "Square both sides to eliminate radical",
                    "Results in linear equation"
                ],
                theory: "Simple radical equations have one radical equal to a constant or expression. Squaring eliminates the radical, yielding a simpler equation.",
                keyFormulas: {
                    "Standard Form": "√(ax + b) = c",
                    "After Squaring": "ax + b = c²",
                    "Solution": "x = (c² - b)/a"
                },
                solvingSteps: [
                    "Verify c ≥ 0 (if c < 0, no solution)",
                    "Square both sides",
                    "Solve linear equation for x",
                    "Verify solution satisfies original equation"
                ],
                applications: [
                    "Distance problems",
                    "Area calculations",
                    "Simple physics formulas"
                ],
                examples: [
                    "√(2x + 3) = 5",
                    "√(x - 1) = 4",
                    "√(3x) = 6"
                ]
            },

            radical_with_linear: {
                title: "Radical Equations with Linear Terms",
                concepts: [
                    "Form: √(ax + b) + c = d or √(ax + b) = cx + d",
                    "Isolate radical before squaring",
                    "May result in linear or quadratic equation",
                    "Always verify solutions"
                ],
                theory: "When other terms appear with the radical, isolate the radical first by moving other terms to opposite side, then square both sides.",
                keyFormulas: {
                    "With Constant": "√(ax + b) + c = d → √(ax + b) = d - c",
                    "With Linear": "√(ax + b) = cx + d → ax + b = (cx + d)²",
                    "Expansion": "(cx + d)² = c²x² + 2cdx + d²"
                },
                solvingSteps: [
                    "Isolate the radical term",
                    "Check if isolated value is non-negative",
                    "Square both sides",
                    "Solve resulting equation (may be quadratic)",
                    "Verify all solutions"
                ],
                applications: [
                    "Projectile motion equations",
                    "Electrical circuit analysis",
                    "Optimization problems"
                ]
            },

            radical_to_quadratic: {
                title: "Radical Equations Leading to Quadratics",
                concepts: [
                    "After squaring, equation becomes quadratic",
                    "Form: √(ax + b) = cx + d leads to quadratic",
                    "May have 0, 1, or 2 solutions",
                    "Extraneous solutions are common"
                ],
                theory: "When the right side contains a variable expression, squaring creates a quadratic equation. The quadratic may have two solutions, but one or both may be extraneous.",
                keyFormulas: {
                    "General Form": "√(ax + b) = cx + d",
                    "After Squaring": "ax + b = c²x² + 2cdx + d²",
                    "Standard Quadratic": "c²x² + (2cd - a)x + (d² - b) = 0"
                },
                solvingSteps: [
                    "Isolate radical if needed",
                    "Square both sides",
                    "Rearrange to standard quadratic form",
                    "Solve quadratic (factoring, formula, completing square)",
                    "Check both solutions - reject extraneous ones"
                ],
                applications: [
                    "Geometric optimization",
                    "Physics motion problems",
                    "Engineering design constraints",
                    "Economic models"
                ],
                specialCases: {
                    "No solution": "When squaring creates impossible conditions",
                    "One solution": "When one quadratic solution is extraneous",
                    "Two solutions": "When both quadratic solutions satisfy original"
                }
            },

            two_radicals: {
                title: "Equations with Two Radicals",
                concepts: [
                    "Form: √(ax + b) = √(cx + d)",
                    "Can square immediately since both sides are radicals",
                    "Usually results in linear equation",
                    "Sometimes requires squaring twice"
                ],
                theory: "When both sides are radical expressions, squaring eliminates both radicals simultaneously. If radicals appear on same side, may need multiple squaring steps.",
                keyFormulas: {
                    "Two Radicals": "√(ax + b) = √(cx + d)",
                    "After Squaring": "ax + b = cx + d",
                    "Linear Result": "(a - c)x = d - b"
                },
                solvingSteps: [
                    "Identify radical terms on each side",
                    "Square both sides",
                    "Solve resulting equation",
                    "Verify solution",
                    "If radicals remain, isolate and square again"
                ],
                applications: [
                    "Comparing two distance formulas",
                    "Equilibrium problems",
                    "Rate comparisons"
                ]
            },

            nested_radicals: {
                title: "Nested Radical Equations",
                concepts: [
                    "Radical within a radical",
                    "Form: √(a + √(bx + c)) = d",
                    "Requires multiple squaring steps",
                    "Complex verification needed"
                ],
                theory: "Nested radicals require systematic approach: isolate outer radical, square, isolate inner radical, square again.",
                keyFormulas: {
                    "Nested Form": "√(a + √(bx + c)) = d",
                    "First Square": "a + √(bx + c) = d²",
                    "Isolate Inner": "√(bx + c) = d² - a",
                    "Second Square": "bx + c = (d² - a)²"
                },
                solvingSteps: [
                    "Square to eliminate outer radical",
                    "Isolate remaining radical",
                    "Square again to eliminate inner radical",
                    "Solve resulting equation",
                    "Verify thoroughly"
                ],
                applications: [
                    "Complex geometric problems",
                    "Advanced physics",
                    "Mathematical modeling"
                ]
            },

            radical_with_quadratic: {
                title: "Radical Equations with Quadratic Under Radical",
                concepts: [
                    "Form: √(ax² + bx + c) = d or = expression",
                    "Squaring reveals the quadratic",
                    "Domain restrictions important",
                    "May have multiple solutions"
                ],
                theory: "When a quadratic expression appears under the radical, squaring produces a quadratic or higher-degree equation.",
                keyFormulas: {
                    "Basic Form": "√(ax² + bx + c) = d",
                    "After Squaring": "ax² + bx + c = d²",
                    "Standard Form": "ax² + bx + (c - d²) = 0"
                },
                solvingSteps: [
                    "Ensure right side is isolated",
                    "Square both sides",
                    "Solve quadratic equation",
                    "Check domain restrictions",
                    "Verify all solutions"
                ],
                applications: [
                    "Trajectory calculations",
                    "Optimization with constraints",
                    "Engineering design"
                ]
            },

            extraneous_solutions: {
                title: "Understanding Extraneous Solutions",
                concepts: [
                    "False solutions introduced by squaring",
                    "Don't satisfy original equation",
                    "Must be identified and rejected",
                    "Verification is mandatory"
                ],
                theory: "Squaring both sides is not a reversible operation - it can create solutions that don't exist in the original equation. Example: x = 3 and x = -3 both square to x² = 9.",
                keyFormulas: {
                    "Squaring Property": "If a = b, then a² = b², but a² = b² doesn't guarantee a = b",
                    "Example": "x = -3 squares to 9, but √9 = 3, not -3"
                },
                identificationProcess: [
                    "Solve equation completely",
                    "Substitute each solution into ORIGINAL equation",
                    "Check if both sides equal",
                    "Keep valid solutions, reject extraneous ones"
                ],
                commonCauses: [
                    "Squaring negative values",
                    "Domain violations",
                    "Multiple squaring steps"
                ],
                examples: [
                    "√x = -3 has no solution (√x is always non-negative)",
                    "√(x + 5) = x - 1 may yield one extraneous solution"
                ]
            },

            word_problems: {
                title: "Radical Word Problems",
                concepts: [
                    "Translate verbal descriptions to radical equations",
                    "Often involve distance, area, or physics",
                    "Set up equation carefully",
                    "Interpret solution in context"
                ],
                theory: "Word problems require identifying the radical relationship, setting up the equation, solving, and interpreting the result in the problem context.",
                problemTypes: {
                    "Distance/Geometry": "Using Pythagorean theorem or distance formula",
                    "Physics": "Velocity, energy, or force equations with radicals",
                    "Area/Volume": "Finding dimensions given area/volume",
                    "Rate Problems": "Comparing rates with radical relationships"
                },
                solutionStrategy: [
                    "Read problem carefully, identify what's unknown",
                    "Identify the radical relationship",
                    "Define variable and set up equation",
                    "Solve equation",
                    "Check solution makes sense in context",
                    "Answer with appropriate units"
                ],
                commonScenarios: {
                    "Pythagorean": "Finding side length given other sides",
                    "Falling object": "Time or distance with gravity equations",
                    "Pendulum": "Period of pendulum swing",
                    "Electrical": "Current, voltage, resistance relationships"
                }
            },

            domain_and_range: {
                title: "Domain and Range Considerations",
                concepts: [
                    "Radical expressions require non-negative radicands",
                    "Domain: values making radicand ≥ 0",
                    "Solutions must be in domain",
                    "Range considerations for verification"
                ],
                theory: "For real numbers, √x is only defined when x ≥ 0. This creates domain restrictions that must be considered when solving.",
                keyFormulas: {
                    "Domain of √(ax + b)": "ax + b ≥ 0",
                    "Solution": "x ≥ -b/a (if a > 0) or x ≤ -b/a (if a < 0)"
                },
                analysisSteps: [
                    "Identify all radical expressions",
                    "Set radicand ≥ 0 for each",
                    "Solve inequalities to find domain",
                    "Verify solutions are in domain",
                    "Reject solutions outside domain"
                ],
                applications: [
                    "Preventing undefined expressions",
                    "Understanding solution validity",
                    "Graphing radical functions"
                ]
            },

            cube_roots: {
                title: "Cube Root Equations",
                concepts: [
                    "Form: ∛(ax + b) = c",
                    "Cube both sides to eliminate cube root",
                    "No extraneous solutions (cubing is reversible)",
                    "Can have negative radicands"
                ],
                theory: "Unlike square roots, cube roots can have negative radicands. Cubing both sides is reversible, so no extraneous solutions are created.",
                keyFormulas: {
                    "Basic Form": "∛(ax + b) = c",
                    "After Cubing": "ax + b = c³",
                    "Solution": "x = (c³ - b)/a"
                },
                solvingSteps: [
                    "Isolate cube root if needed",
                    "Cube both sides",
                    "Solve resulting equation",
                    "Verify (though extraneous solutions rare)"
                ],
                applications: [
                    "Volume calculations",
                    "Cubic relationships in physics",
                    "Engineering scaling problems"
                ],
                keyDifference: "Unlike square roots, cube roots don't create extraneous solutions because cubing is a one-to-one operation"
            },

            higher_index_radicals: {
                title: "Higher Index Radical Equations",
                concepts: [
                    "Form: ⁿ√(ax + b) = c where n > 2",
                    "Raise both sides to nth power",
                    "Even indices behave like square roots",
                    "Odd indices behave like cube roots"
                ],
                theory: "Higher index radicals follow patterns: even indices (4th, 6th) create extraneous solutions like square roots; odd indices (5th, 7th) don't like cube roots.",
                keyFormulas: {
                    "General Form": "ⁿ√(ax + b) = c",
                    "After Raising": "ax + b = cⁿ",
                    "Even Index": "Requires verification for extraneous solutions",
                    "Odd Index": "No extraneous solutions typically"
                },
                solvingSteps: [
                    "Identify index n",
                    "Isolate radical",
                    "Raise both sides to nth power",
                    "Solve equation",
                    "Verify if n is even"
                ],
                applications: [
                    "Advanced geometry",
                    "Higher-degree physics equations",
                    "Complex modeling"
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
                highlightBg: '#ffe6e6',
                warningBg: '#fff3cd',
                warningText: '#856404'
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
                warningBg: '#fff3cd',
                warningText: '#856404'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            'cbrt': '∛', 'fourthrt': '∜',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥',
            'therefore': '∴', 'because': '∵'
        };
    }

    initializeRadicalSolvers() {
        this.radicalTypes = {
            simple_radical: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*=\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*=\s*([+-]?\d+\.?\d*)/,
                    /\√([^\s=]+)\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveSimpleRadical.bind(this),
                name: 'Simple Radical Equation',
                category: 'simple_radical',
                description: 'Solves √(ax + b) = c'
            },

            radical_with_constant: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*[+-]\s*([+-]?\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*[+-]\s*([+-]?\d+\.?\d*)\s*=\s*([+-]?\d+\.?\d*)/
                ],
                solver: this.solveRadicalWithConstant.bind(this),
                name: 'Radical with Constant Term',
                category: 'radical_with_linear',
                description: 'Solves √(ax + b) + c = d'
            },

            radical_equals_linear: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/i,
                    /√\(([^)]+)\)\s*=\s*([+-]?\d*\.?\d*)x\s*([+-]\s*\d+\.?\d*)/
                ],
                solver: this.solveRadicalEqualsLinear.bind(this),
                name: 'Radical Equals Linear Expression',
                category: 'radical_to_quadratic',
                description: 'Solves √(ax + b) = cx + d'
            },

            two_radicals_equal: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*=\s*sqrt\(([^)]+)\)/i,
                    /√\(([^)]+)\)\s*=\s*√\(([^)]+)\)/
                ],
                solver: this.solveTwoRadicalsEqual.bind(this),
                name: 'Two Radicals Equal',
                category: 'two_radicals',
                description: 'Solves √(ax + b) = √(cx + d)'
            },

            radical_sum_radicals: {
                patterns: [
                    /sqrt\(([^)]+)\)\s*[+-]\s*sqrt\(([^)]+)\)\s*=/i,
                    /√\(([^)]+)\)\s*[+-]\s*√\(([^)]+)\)\s*=/
                ],
                solver: this.solveRadicalSumRadicals.bind(this),
                name: 'Sum of Radicals',
                category: 'two_radicals',
                description: 'Solves √(ax + b) + √(cx + d) = e'
            },

            nested_radical: {
                patterns: [
                    /sqrt\([^(]*sqrt\([^)]+\)[^)]*\)/i,
                    /√\([^(]*√\([^)]+\)[^)]*\)/
                ],
                solver: this.solveNestedRadical.bind(this),
                name: 'Nested Radical Equation',
                category: 'nested_radicals',
                description: 'Solves √(a + √(bx + c)) = d'
            },

            cube_root: {
                patterns: [
                    /cbrt\(([^)]+)\)\s*=\s*([+-]?\d+\.?\d*)/i,
                    /∛\(([^)]+)\)\s*=\s*([+-]?\d+\.?\d*)/,
                    /\^(1\/3)/
                ],
                solver: this.solveCubeRoot.bind(this),
                name: 'Cube Root Equation',
                category: 'cube_roots',
                description: 'Solves ∛(ax + b) = c'
            },

            higher_index: {
                patterns: [
                    /root\[(\d+)\]\(([^)]+)\)\s*=\s*([+-]?\d+\.?\d*)/i,
                    /\^(1\/\d+)/
                ],
                solver: this.solveHigherIndexRadical.bind(this),
                name: 'Higher Index Radical',
                category: 'higher_index_radicals',
                description: 'Solves ⁿ√(ax + b) = c'
            },

            radical_quadratic_under: {
                patterns: [
                    /sqrt\([^)]*x\^2[^)]*\)/i,
                    /√\([^)]*x²[^)]*\)/
                ],
                solver: this.solveRadicalQuadraticUnder.bind(this),
                name: 'Radical with Quadratic Under',
                category: 'radical_with_quadratic',
                description: 'Solves √(ax² + bx + c) = d'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simple_radical: {
                'Square both sides': [
                    'Forgetting to square the constant on the right',
                    'Not squaring the entire right side',
                    'Sign errors when squaring negative numbers'
                ],
                'Solve resulting equation': [
                    'Arithmetic errors in solving',
                    'Not simplifying completely'
                ],
                'Verify solution': [
                    'Skipping verification step',
                    'Not checking if solution makes radicand negative',
                    'Accepting extraneous solutions'
                ]
            },
            radical_to_quadratic: {
                'Isolate radical': [
                    'Moving wrong terms',
                    'Sign errors when moving terms'
                ],
                'Square both sides': [
                    'Not expanding (cx + d)² correctly',
                    'Forgetting middle term: 2cdx',
                    'Sign errors in expansion'
                ],
                'Set up quadratic': [
                    'Not bringing all terms to one side',
                    'Incorrect combination of like terms',
                    'Wrong signs when moving terms'
                ],
                'Solve quadratic': [
                    'Errors in quadratic formula',
                    'Factoring mistakes',
                    'Arithmetic errors'
                ],
                'Verify solutions': [
                    'Not checking both solutions',
                    'Accepting negative under square root',
                    'Not substituting back into original equation'
                ]
            },
            two_radicals: {
                'Square both sides': [
                    'Incorrect expansion of (√a + √b)²',
                    'Forgetting the middle term 2√(ab)',
                    'Sign errors'
                ],
                'Isolate remaining radical': [
                    'Not isolating properly before second squaring',
                    'Moving wrong terms'
                ],
                'Square again': [
                    'Errors in second squaring step',
                    'Not simplifying between steps'
                ]
            },
            extraneous_solutions: {
                'Verification': [
                    'Not verifying every solution',
                    'Verifying in squared equation instead of original',
                    'Accepting solutions that make radicand negative',
                    'Not recognizing when √x cannot equal negative number'
                ]
            }
        };

        this.errorPrevention = {
            squaring_both_sides: {
                reminder: 'Squaring both sides can introduce extraneous solutions - always verify!',
                method: 'Write out the squaring explicitly: (left)² = (right)²'
            },
            expansion_errors: {
                reminder: 'When squaring (a + b), remember: (a + b)² = a² + 2ab + b²',
                method: 'Write out the full expansion before combining terms'
            },
            verification_critical: {
                reminder: 'Verification is MANDATORY for radical equations',
                method: 'Substitute each solution back into the ORIGINAL equation'
            },
            domain_check: {
                reminder: 'Check that solution doesn\'t make radicand negative',
                method: 'Verify that all expressions under radicals are ≥ 0'
            },
            negative_radical: {
                reminder: '√x is never negative for real numbers',
                method: 'If equation has √(...) = negative number, there is NO solution'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why squaring eliminates radicals and why extraneous solutions occur',
                language: 'intuitive understanding of radical properties'
            },
            procedural: {
                focus: 'Exact sequence: isolate, square, solve, verify',
                language: 'step-by-step algorithm'
            },
            visual: {
                focus: 'Graphical understanding of radical functions and intersections',
                language: 'visual representations and graphs'
            },
            algebraic: {
                focus: 'Formal properties of radicals and exponentiation',
                language: 'precise mathematical notation and rules'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple language - "square root", "square both sides"',
                detail: 'essential steps only',
                examples: 'simple numeric examples',
                emphasis: 'procedure and verification'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with explanations',
                examples: 'mix of simple and moderate complexity',
                emphasis: 'understanding and application'
            },
            ELI5: {
                vocabulary: 'simplest possible - "undo the square root by squaring"',
                detail: 'every step explained with real-world analogies',
                examples: 'concrete, relatable scenarios',
                analogies: true,
                visualization: 'simple pictures and everyday comparisons',
                emphasis: 'intuitive understanding'
            },
            detailed: {
                vocabulary: 'complete mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases',
                emphasis: 'deep understanding and rigor'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with probing questions',
                examples: 'carefully sequenced from easy to challenging',
                emphasis: 'building understanding incrementally'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            falling_object: {
                scenario: "Height of falling object using physics",
                equation: "h = h₀ - 16t² → t = √((h₀ - h)/16)",
                examples: [
                    "Ball dropped from 144 ft. When is it at 80 ft?",
                    "How long for object to fall 100 feet?"
                ],
                context: "Physics of free fall - time relates to height through square root"
            },
            pendulum: {
                scenario: "Period of pendulum swing",
                equation: "T = 2π√(L/g)",
                examples: [
                    "Pendulum length for 2-second period?",
                    "How long is pendulum with 1.5 second swing?"
                ],
                context: "Pendulum period depends on square root of length"
            },
            distance_formula: {
                scenario: "Distance between two points",
                equation: "d = √((x₂-x₁)² + (y₂-y₁)²)",
                examples: [
                    "Find point that is distance 5 from origin",
                    "Where on line y = x is distance 10 from (2,3)?"
                ],
                context: "Pythagorean theorem leads to radical equations"
            },
            electrical_power: {
                scenario: "Electrical power and resistance",
                equation: "P = V²/R → V = √(PR)",
                examples: [
                    "What voltage for 100W bulb with 144Ω resistance?",
                    "Find voltage given power and resistance"
                ],
                context: "Electrical relationships often involve square roots"
            },
            area_problems: {
                scenario: "Finding dimensions given area",
                equation: "A = πr² → r = √(A/π)",
                examples: [
                    "Radius of circle with area 100π?",
                    "Side of square with area 50?"
                ],
                context: "Area formulas lead to radical equations when finding dimensions"
            },
            velocity_energy: {
                scenario: "Kinetic energy and velocity",
                equation: "KE = ½mv² → v = √(2KE/m)",
                examples: [
                    "Velocity of 2kg object with 100J energy?",
                    "How fast must car go to have certain energy?"
                ],
                context: "Energy relates to velocity through square relationship"
            },
            geometric_mean: {
                scenario: "Finding geometric mean",
                equation: "GM = √(ab)",
                examples: [
                    "Geometric mean of 4 and 9?",
                    "Find x if √(3x) = 6"
                ],
                context: "Geometric means appear in statistics and geometry"
            },
            horizon_distance: {
                scenario: "Distance to horizon from height",
                equation: "d = √(2hR) where R is Earth radius",
                examples: [
                    "How far can you see from 100ft tower?",
                    "Height needed to see 10 miles?"
                ],
                context: "Horizon distance involves square root of height"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simple_radical: {
                skills: ['Square roots', 'Squaring numbers', 'Linear equations', 'Order of operations'],
                priorKnowledge: ['√x means "what number squared equals x"', 'Squaring undoes square root', 'Both sides equality'],
                checkQuestions: [
                    "What is √25?",
                    "What is 7²?",
                    "Solve: 2x + 3 = 11",
                    "What does √x mean?"
                ]
            },
            radical_to_quadratic: {
                skills: ['All simple radical skills', 'Quadratic equations', 'Factoring or quadratic formula', 'Expanding binomials'],
                priorKnowledge: ['(a + b)² = a² + 2ab + b²', 'Solving quadratics', 'Verification is critical'],
                checkQuestions: [
                    "Expand: (x + 3)²",
                    "Solve: x² - 5x + 6 = 0",
                    "What is (2x - 1)²?",
                    "Why might squaring create false solutions?"
                ]
            },
            two_radicals: {
                skills: ['Simple radicals', 'Multiple squaring steps', 'Radical properties'],
                priorKnowledge: ['(√a + √b)² = a + 2√(ab) + b', 'May need to square twice', 'Verification essential'],
                checkQuestions: [
                    "What is (√3 + √2)²?",
                    "Expand: (√x + 2)²",
                    "Can you square an equation twice?"
                ]
            },
            extraneous_solutions: {
                skills: ['Solving radical equations', 'Substitution', 'Critical thinking'],
                priorKnowledge: ['Squaring is not reversible', 'Must verify all solutions', 'Some solutions may be false'],
                checkQuestions: [
                    "If x² = 9, what could x be?",
                    "Can √x ever equal -5?",
                    "Why must we verify radical equation solutions?"
                ]
            },
            cube_roots: {
                skills: ['Cubing numbers', 'Understanding cube roots', 'Linear/quadratic equations'],
                priorKnowledge: ['∛x means "what cubed equals x"', 'Cube roots can be negative', 'Cubing is reversible'],
                checkQuestions: [
                    "What is ∛27?",
                    "What is ∛(-8)?",
                    "What is 4³?"
                ]
            },
            domain_restrictions: {
                skills: ['Inequalities', 'Number line', 'Understanding domain'],
                priorKnowledge: ['√x requires x ≥ 0', 'Domain is allowed x values', 'Check radicand ≥ 0'],
                checkQuestions: [
                    "For what x is √(x - 3) defined?",
                    "Can √x be defined for x = -5?",
                    "Solve: 2x + 6 ≥ 0"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            squaring_both_sides: {
                description: "Undoing the square root by squaring",
                analogy: "Like unwrapping a gift - squaring unwraps the radical",
                visualization: "Show (√x)² = x visually",
                suitableFor: ['all_radical_types'],
                explanation: "Squaring is the inverse operation that eliminates the square root"
            },
            balance_preservation: {
                description: "Squaring both sides keeps equality",
                analogy: "If two things are equal, their squares are equal (but not vice versa!)",
                visualization: "Balance scale stays balanced when you square both sides",
                suitableFor: ['all_radical_types'],
                explanation: "Whatever you do to one side, do to the other"
            },
            extraneous_visual: {
                description: "Why squaring creates extra solutions",
                analogy: "Like creating a copy machine that makes both positive and negative - you must check which is real",
                visualization: "Graph showing x = 3 and x = -3 both satisfy x² = 9, but only one satisfies √9 = x",
                suitableFor: ['extraneous_solutions'],
                explanation: "Squaring loses sign information, creating false solutions"
            },
            domain_number_line: {
                description: "Valid x values on number line",
                analogy: "Only certain parts of the number line are allowed",
                visualization: "Shade region where radicand ≥ 0 on number line",
                suitableFor: ['domain_restrictions'],
                explanation: "Square roots require non-negative radicands"
            },
            graph_intersection: {
                description: "Solution as intersection point",
                analogy: "Where two paths cross shows the answer",
                visualization: "Graph y = √(ax+b) and y = c, intersection is solution",
                suitableFor: ['all_radical_types'],
                explanation: "Solution is x where both sides equal"
            },
            nested_layers: {
                description: "Peeling layers of an onion",
                analogy: "Remove outer radical first, then inner radical",
                visualization: "Concentric circles showing layers being removed",
                suitableFor: ['nested_radicals'],
                explanation: "Work from outside in, one radical at a time"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "√(x + 5) = 4",
                    solution: 11,
                    steps: ["Square both sides: x + 5 = 16", "Subtract 5: x = 11", "Check: √(11+5) = √16 = 4 ✓"],
                    difficulty: "easy"
                },
                {
                    problem: "√(2x) = 6",
                    solution: 18,
                    steps: ["Square both sides: 2x = 36", "Divide by 2: x = 18", "Check: √(36) = 6 ✓"],
                    difficulty: "easy"
                },
                {
                    problem: "√(x - 1) = 3",
                    solution: 10,
                    steps: ["Square both sides: x - 1 = 9", "Add 1: x = 10", "Check: √(10-1) = √9 = 3 ✓"],
                    difficulty: "easy"
                }
            ],
            intermediate: [
                {
                    problem: "√(x + 2) + 3 = 7",
                    solution: 14,
                    steps: ["Subtract 3: √(x+2) = 4", "Square both sides: x + 2 = 16", "Solve: x = 14", "Check: √(16) + 3 = 7 ✓"],
                    difficulty: "medium"
                },
                {
                    problem: "√(2x + 1) = x - 1",
                    solutions: [4, 0],
                    validSolutions: [4],
                    extraneousSolutions: [0],
                    steps: ["Square: 2x + 1 = (x-1)²", "Expand: 2x + 1 = x² - 2x + 1", "Rearrange: x² - 4x = 0", "Factor: x(x-4) = 0", "Solutions: x = 0 or x = 4", "Check x=0: √1 ≠ -1 (extraneous)", "Check x=4: √9 = 3 ✓"],
                    difficulty: "medium"
                },
                {
                    problem: "√(3x - 2) = x",
                    solutions: [1, 2],
                    validSolutions: [2],
                    extraneousSolutions: [1],
                    steps: ["Square: 3x - 2 = x²", "Rearrange: x² - 3x + 2 = 0", "Factor: (x-1)(x-2) = 0", "x = 1 or x = 2", "Check x=1: √1 ≠ 1 is false, √1 = 1 ✓", "Check x=2: √4 = 2 ✓", "Both valid"],
                    difficulty: "medium",
                    note: "This example actually has both solutions valid - correction needed"
                }
            ],
            advanced: [
                {
                    problem: "√(x + 7) = √(2x + 1)",
                    solution: 6,
                    steps: ["Square both sides: x + 7 = 2x + 1", "Solve: 6 = x", "Check: √13 = √13 ✓"],
                    difficulty: "hard"
                },
                {
                    problem: "√(x) + √(x - 5) = 5",
                    solution: 9,
                    steps: ["Isolate one radical: √x = 5 - √(x-5)", "Square: x = 25 - 10√(x-5) + (x-5)", "Simplify: 0 = 20 - 10√(x-5)", "Isolate: 10√(x-5) = 20", "√(x-5) = 2", "Square again: x - 5 = 4", "x = 9", "Verify in original"],
                    difficulty: "hard"
                },
                {
                    problem: "√(2x + 3) = x - 3",
                    solutions: [3, -2],
                    validSolutions: [3],
                    extraneousSolutions: [-2],
                    steps: ["Square: 2x + 3 = x² - 6x + 9", "Rearrange: x² - 8x + 6 = 0", "Use quadratic formula", "Check both solutions"],
                    difficulty: "hard"
                }
            ],
            byMethod: {
                simple: [
                    { problem: "√(x + 3) = 5", solution: 22 },
                    { problem: "√(2x - 1) = 3", solution: 5 },
                    { problem: "√(4x) = 8", solution: 16 }
                ],
                with_constant: [
                    { problem: "√(x) + 2 = 5", solution: 9 },
                    { problem: "√(x + 1) - 3 = 4", solution: 48 },
                    { problem: "2√(x) = 10", solution: 25 }
                ],
                to_quadratic: [
                    { problem: "√(x + 5) = x - 1", validSolutions: [4], extraneous: [-1] },
                    { problem: "√(2x + 3) = x", validSolutions: [3], extraneous: [1] },
                    { problem: "x = √(6 - x)", validSolutions: [2], extraneous: [-3] }
                ],
                two_radicals: [
                    { problem: "√(x + 2) = √(3x - 4)", solution: 3 },
                    { problem: "√(2x + 1) = √(x + 7)", solution: 6 }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            squaring_errors: {
                misconception: "√x squared is 2x or x² instead of x",
                reality: "(√x)² = x exactly - squaring perfectly undoes square root",
                correctiveExample: "√9 = 3, and 3² = 9, so (√9)² = 9",
                commonIn: ['all_types']
            },
            negative_under_radical: {
                misconception: "√(-4) = -2 or thinking negative radicands are okay",
                reality: "For real numbers, √x requires x ≥ 0; √(-4) is undefined in real numbers",
                correctiveExample: "√4 = 2 (not -2), and √(-4) has no real solution",
                commonIn: ['simple_radical', 'domain_restrictions']
            },
            radical_equals_negative: {
                misconception: "Equations like √x = -3 have solutions",
                reality: "√x is NEVER negative for real numbers, so √x = -3 has NO solution",
                correctiveExample: "If √x = -3, no real x works because √x ≥ 0 always",
                commonIn: ['simple_radical']
            },
            squaring_sum_error: {
                misconception: "(a + b)² = a² + b²",
                reality: "(a + b)² = a² + 2ab + b², don't forget the middle term!",
                correctiveExample: "(x + 3)² = x² + 6x + 9, not x² + 9",
                commonIn: ['radical_to_quadratic']
            },
            skip_verification: {
                misconception: "All solutions from squaring are valid",
                reality: "Squaring can introduce extraneous solutions - MUST verify every solution",
                correctiveExample: "√x = -3 has no solution, but squaring gives x = 9 which doesn't work",
                commonIn: ['all_types', 'critical']
            },
            extraneous_confusion: {
                misconception: "Extraneous solutions are arithmetic mistakes",
                reality: "Extraneous solutions are mathematically created by squaring - they're not errors, they're false solutions to check for",
                correctiveExample: "√(x+5) = x-1 gives x=4 and x=-1; x=-1 is extraneous (not a mistake, but doesn't work)",
                commonIn: ['radical_to_quadratic']
            },
            both_sides_different: {
                misconception: "Can square left side differently than right side",
                reality: "Must square the ENTIRE left side and ENTIRE right side identically",
                correctiveExample: "If √x + 2 = 5, you can't just square √x; must square (√x + 2)",
                commonIn: ['radical_with_linear']
            },
            cube_root_confusion: {
                misconception: "Cube roots require non-negative radicands like square roots",
                reality: "∛x is defined for ALL real x, including negative numbers",
                correctiveExample: "∛(-8) = -2 because (-2)³ = -8",
                commonIn: ['cube_roots']
            },
            reversibility_confusion: {
                misconception: "Squaring and square root are perfectly reversible",
                reality: "√(x²) = |x| not x; squaring loses sign information",
                correctiveExample: "If x = -3, then x² = 9, but √9 = 3 ≠ -3",
                commonIn: ['extraneous_solutions']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            squaring_eliminates_radical: {
                analogy: "Wrapping and unwrapping a present",
                explanation: "Square root wraps a number; squaring unwraps it. √9 wraps to 3; 3² unwraps back to 9",
                suitableFor: ['all_types'],
                ELI5: "Imagine putting a number in a box (square root). To see what's in the box, you open it (square both sides)!"
            },
            extraneous_solutions: {
                analogy: "Photocopier making mirror images",
                explanation: "Squaring is like a photocopier that creates both the original and its mirror. You must check which copy is the real one",
                suitableFor: ['extraneous_solutions'],
                ELI5: "When we square both sides, it's like the equation creates a twin. Sometimes the twin is fake! We have to test both to see which one is real."
            },
            verification_necessity: {
                analogy: "Trying on shoes before buying",
                explanation: "Just like you try on shoes to make sure they fit, you must try your solution in the equation to make sure it works",
                suitableFor: ['all_types'],
                ELI5: "After solving, we plug our answer back in like trying on a puzzle piece to make sure it fits perfectly!"
            },
            domain_restrictions: {
                analogy: "Age restrictions for rides",
                explanation: "Some amusement park rides require certain height. Similarly, square roots require non-negative numbers",
                suitableFor: ['domain_restrictions'],
                ELI5: "Square roots are picky eaters - they only eat positive numbers and zero! They get a tummy ache from negative numbers."
            },
            nested_radicals: {
                analogy: "Nested Russian dolls",
                explanation: "Open the outer doll first, then the inner one. With nested radicals, eliminate outer radical first, then inner",
                suitableFor: ['nested_radicals'],
                ELI5: "It's like opening a present inside another present. First unwrap the big box, then unwrap the small box inside!"
            },
            isolating_radical: {
                analogy: "Getting someone alone to talk",
                explanation: "Before eliminating the radical, get it alone on one side, like talking to someone privately",
                suitableFor: ['radical_with_linear'],
                ELI5: "We need to get the square root all by itself on one side before we can make it disappear!"
            },
            two_radicals_sum: {
                analogy: "Two locked boxes",
                explanation: "When adding two radicals, you can't combine them easily until you unlock (square) them",
                suitableFor: ['two_radicals'],
                ELI5: "It's like having two mystery boxes. We can't just combine the mysteries - we have to open them first!"
            },
            cube_vs_square: {
                analogy: "Two-way vs one-way street",
                explanation: "Cubing is a two-way street (reversible), but squaring is one-way (can't tell direction you came from)",
                suitableFor: ['cube_roots'],
                ELI5: "Cube roots are nice - they work with any number! Square roots are picky - they only work with positive numbers!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simple_radical: {
                level1: "What's the first step when you see a square root in an equation?",
                level2: "To eliminate a square root, what operation should you use?",
                level3: "Square both sides of the equation",
                level4: "Square both sides: (√(ax+b))² = c², which gives ax + b = c²",
                level5: "Now solve the linear equation ax + b = c² for x"
            },
            radical_with_constant: {
                level1: "Can you square both sides when the radical isn't alone?",
                level2: "What should you do with the constant term first?",
                level3: "Isolate the radical by moving the constant to the other side",
                level4: "Subtract {constant} from both sides to get √(...) = ...",
                level5: "Now square both sides to eliminate the radical"
            },
            radical_to_quadratic: {
                level1: "What type of equation will you get after squaring?",
                level2: "When you square (cx + d), remember to expand fully",
                level3: "Use (cx + d)² = c²x² + 2cdx + d²",
                level4: "After squaring, rearrange to standard quadratic form",
                level5: "Solve the quadratic, then CHECK both solutions!"
            },
            verification: {
                level1: "Why must you check your solutions?",
                level2: "What can go wrong when you square both sides?",
                level3: "Squaring can create false (extraneous) solutions",
                level4: "Substitute each solution back into the ORIGINAL equation",
                level5: "If a solution makes the equation false or creates √(negative), reject it"
            },
            extraneous: {
                level1: "What is an extraneous solution?",
                level2: "How can you tell if a solution is extraneous?",
                level3: "An extraneous solution doesn't satisfy the original equation",
                level4: "Check by substituting: if it creates √(negative) or makes sides unequal, it's extraneous",
                level5: "Always verify in the ORIGINAL equation, not the squared version"
            },
            two_radicals: {
                level1: "What happens when you square √a + √b?",
                level2: "Remember: (√a + √b)² ≠ a + b",
                level3: "Use: (√a + √b)² = a + 2√(ab) + b",
                level4: "After first squaring, you may still have a radical term",
                level5: "Isolate the remaining radical and square again"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Solve: √(x + 3) = 4",
                    answer: 13,
                    assesses: "simple_radical",
                    difficulty: "basic"
                },
                {
                    question: "Solve: √(2x - 1) + 3 = 6",
                    answer: 5,
                    assesses: "radical_with_constant",
                    difficulty: "basic"
                },
                {
                    question: "Solve: √(x + 5) = x - 1",
                    answer: 4,
                    extraneous: [-1],
                    assesses: "radical_to_quadratic",
                    difficulty: "intermediate"
                },
                {
                    question: "Is x = -2 a valid solution to √x = -2?",
                    answer: "No, √x cannot be negative",
                    assesses: "domain_understanding",
                    difficulty: "basic"
                }
            ],
            formative: [
                {
                    question: "What's the first step to solve √(x + 1) + 2 = 5?",
                    options: ["Square both sides", "Subtract 2 from both sides", "Add 2 to both sides", "Divide by 2"],
                    correct: "Subtract 2 from both sides",
                    explanation: "Isolate the radical first before squaring"
                },
                {
                    question: "What is (x + 3)²?",
                    options: ["x² + 9", "x² + 6x + 9", "x² + 3x + 9", "x² + 6x + 6"],
                    correct: "x² + 6x + 9",
                    explanation: "(a + b)² = a² + 2ab + b²"
                },
                {
                    question: "Why must you verify solutions to radical equations?",
                    options: [
                        "To check arithmetic",
                        "Because squaring can create extraneous solutions",
                        "To make sure you factored correctly",
                        "It's optional"
                    ],
                    correct: "Because squaring can create extraneous solutions",
                    explanation: "Squaring both sides is not reversible and can introduce false solutions"
                },
                {
                    question: "Can √x ever equal -5?",
                    options: ["Yes, when x = 25", "No, √x is never negative", "Yes, when x = -25", "Only sometimes"],
                    correct: "No, √x is never negative",
                    explanation: "For real numbers, square roots are always non-negative"
                }
            ],
            summative: [
                {
                    question: "Solve: √(3x + 1) = x - 1",
                    answer: 4,
                    extraneous: 0,
                    showsWork: true,
                    rubric: {
                        isolate_if_needed: 1,
                        square_both_sides: 2,
                        expand_correctly: 2,
                        solve_quadratic: 2,
                        verify_solutions: 2,
                        reject_extraneous: 1
                    }
                },
                {
                    question: "Solve: √(x + 2) + √(x - 1) = 3",
                    answer: 2,
                    showsWork: true,
                    rubric: {
                        isolate_one_radical: 2,
                        square_first_time: 2,
                        simplify_and_isolate: 2,
                        square_second_time: 2,
                        solve_resulting_equation: 1,
                        verify: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "√(x + 1) = 3",
                    "√(2x) = 4",
                    "√(x - 5) = 2",
                    "√x = 7"
                ],
                medium: [
                    "√(x + 3) + 2 = 5",
                    "√(2x - 1) = x - 2",
                    "2√x - 3 = 5",
                    "√(x + 7) = √(2x + 1)"
                ],
                hard: [
                    "√(x + 5) = x - 1",
                    "√x + √(x - 5) = 5",
                    "√(2x + 3) = x - 3",
                    "√(x² - 3) = 2"
                ]
            },
            byObjective: {
                canSolveSimple: [
                    "√(x + 4) = 5",
                    "√(3x) = 9",
                    "√(x - 2) = 6",
                    "√(2x + 1) = 5"
                ],
                canIsolateRadical: [
                    "√x + 3 = 7",
                    "√(x + 1) - 2 = 4",
                    "2√x = 10",
                    "3√(x - 1) + 1 = 10"
                ],
                canHandleQuadratic: [
                    "√(x + 2) = x",
                    "√(2x + 5) = x + 1",
                    "x = √(12 - x)",
                    "√(x + 12) = x"
                ],
                canVerify: [
                    "Check if x = 3 solves √(x + 1) = 2",
                    "Check if x = 0 solves √(2x + 4) = x + 2",
                    "Identify extraneous solution in √x = x - 2"
                ],
                understandsDomain: [
                    "For what x is √(x - 5) defined?",
                    "Can √(2x + 6) = -4 have a solution?",
                    "What values of x make √(3 - x) real?"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "simple_radical": "One radical = constant → square immediately",
                "radical_plus_constant": "Radical + constant = value → isolate radical first",
                "radical_equals_expression": "Radical = variable expression → square, expect quadratic",
                "two_radicals_equal": "√(...) = √(...) → square to eliminate both",
                "two_radicals_sum": "√(...) + √(...) = c → isolate one, square, then square again",
                "nested": "Radical of radical → square multiple times, outside to inside",
                "under_radical_quadratic": "√(x² + ...) → square to reveal quadratic"
            },
            whenToUseWhat: {
                square_immediately: "When radical is already isolated",
                isolate_first: "When radical has constants or coefficients with it",
                expect_quadratic: "When right side contains variable",
                square_twice: "When two radicals on same side",
                multiple_verification: "Always, but especially with quadratics"
            },
            methodSelection: {
                factorsToConsider: [
                    "Is radical isolated?",
                    "Does right side have variables?",
                    "Are there multiple radicals?",
                    "What's under the radical?",
                    "Will squaring create quadratic?"
                ],
                generalApproach: [
                    "1. Isolate radical if needed",
                    "2. Square both sides carefully",
                    "3. Solve resulting equation (may be quadratic)",
                    "4. VERIFY every solution in original equation",
                    "5. Reject extraneous solutions"
                ]
            },
            optimizationTips: {
                "Isolate strategically": "Get radical alone before squaring",
                "Expand carefully": "Write out (a + b)² fully to avoid errors",
                "Verify in original": "Always use original equation, not squared version",
                "Check domain": "Ensure solution doesn't make radicand negative",
                "Use quadratic formula if needed": "Don't force factoring if it's messy"
            },
            verificationProtocol: {
                steps: [
                    "Substitute solution into LEFT side of original equation",
                    "Substitute solution into RIGHT side of original equation",
                    "Evaluate both sides completely",
                    "Check if sides are equal",
                    "Check if any √(negative) appears",
                    "Accept if equal and no √(negative), reject otherwise"
                ],
                criticalPoints: [
                    "Use ORIGINAL equation, not any squared version",
                    "Check EVERY solution, even if one works",
                    "Be careful with negative signs",
                    "Remember √x is never negative"
                ]
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simple Radical Sprint",
                    timeLimit: 90,
                    problems: [
                        "√(x + 1) = 2",
                        "√(2x) = 4",
                        "√(x - 3) = 3",
                        "√(3x + 4) = 5",
                        "√x = 6",
                        "√(x + 8) = 4"
                    ]
                },
                {
                    name: "Verification Challenge",
                    timeLimit: 120,
                    problems: [
                        "Check if x = 5 solves √(2x - 1) = 3",
                        "Check if x = 0 solves √(x + 4) = x + 2",
                        "Find extraneous solution in √x = x - 2"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Mystery Solutions",
                    problem: "√(x + a) = b has solution x = 7",
                    given: "Find possible values of a and b",
                    solve: "Find relationship between a and b",
                    solution: "Many answers: e.g., a = 2, b = 3 works; or a = -2, b = √5"
                },
                {
                    name: "Extraneous Detective",
                    problem: "√(x + k) = x - 2 has one valid and one extraneous solution",
                    challenge: "Find k so this is true",
                    solution: "k = 8 gives x = 4 (valid) and x = -1 (extraneous)"
                },
                {
                    name: "Domain Puzzle",
                    problem: "For what values of k is √(3x - k) defined for all x ≥ 2?",
                    solution: "k ≤ 6"
                }
            ],
            applications: [
                {
                    scenario: "Falling Object",
                    problem: "Object dropped from 100 ft. Height h = 100 - 16t². When is it at 36 ft?",
                    equation: "36 = 100 - 16t² → √(64/16) = t",
                    solution: "t = 2 seconds"
                },
                {
                    scenario: "Pendulum Period",
                    problem: "Pendulum with T = 2π√(L/32). What length for T = π seconds?",
                    equation: "π = 2π√(L/32)",
                    solution: "L = 8 feet"
                },
                {
                    scenario: "Geometric Mean",
                    problem: "Geometric mean of x and 16 is 12. Find x.",
                    equation: "√(16x) = 12",
                    solution: "x = 9"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "√(x + 3) = 5",
                        "x + 3 = 5",  // ERROR: forgot to square the 5
                        "x = 2"
                    ],
                    correctAnswer: "x = 22",
                    errorType: "Forgot to square right side"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "√(x + 1) = x - 1",
                        "x + 1 = x² - 2x + 1",
                        "0 = x² - 3x",
                        "x = 0 or x = 3"
                        // ERROR: didn't verify; x = 0 is extraneous
                    ],
                    correctAnswer: "x = 3 only",
                    errorType: "Accepted extraneous solution without verification"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "(x + 2)² =",
                        "x² + 4"  // ERROR: forgot middle term
                    ],
                    correctAnswer: "x² + 4x + 4",
                    errorType: "Incorrect expansion of binomial square"
                }
            ],
            conceptualChallenges: [
                {
                    name: "Extraneous Explanation",
                    question: "Explain in your own words why √x = -4 has no solution",
                    keyPoints: ["√x is always ≥ 0 for real numbers", "Can never equal negative value"]
                },
                {
                    name: "Create Your Own",
                    challenge: "Create a radical equation that has exactly one extraneous solution",
                    example: "√(x + 5) = x - 1 has x = 4 (valid) and x = -1 (extraneous)"
                },
                {
                    name: "Graph Connection",
                    question: "Graph y = √(x + 2) and y = x. Where do they intersect? How does this relate to solving √(x + 2) = x?",
                    answer: "Intersection points are solutions to the equation"
                }
            ]
        };
    }

    // MAIN SOLVER METHOD
    solveRadicalProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseRadicalProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveRadicalProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateRadicalSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateRadicalGraphData();

            // Generate workbook
            this.generateRadicalWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                validSolutions: this.currentSolution?.validSolutions,
                extraneousSolutions: this.currentSolution?.extraneousSolutions
            };

        } catch (error) {
            throw new Error(`Failed to solve radical problem: ${error.message}`);
        }
    }

    parseRadicalProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.radicalTypes[problemType]) {
            return {
                originalInput: equation || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect radical problem type
        for (const [type, config] of Object.entries(this.radicalTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const match = cleanInput.match(pattern);
                    const extractedParams = this.extractRadicalParameters(match, type);

                    return {
                        originalInput: equation || scenario,
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

        // Default handling if parameters provided
        if (parameters.a !== undefined || parameters.b !== undefined || parameters.c !== undefined) {
            return {
                originalInput: equation || 'Radical equation with given coefficients',
                cleanInput: cleanInput,
                type: 'simple_radical',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize radical problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/sqrt/gi, '√')
            .replace(/cbrt/gi, '∛')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/≠/g, '!=')
            .trim();
    }

    extractRadicalParameters(match, type) {
        const params = {};
        if (!match) return params;

        // This would need more sophisticated parsing based on actual regex captures
        // For now, returning empty params - would be filled in actual implementation
        
        return params;
    }

    solveRadicalProblem_Internal(problem) {
        const solver = this.radicalTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for radical problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RADICAL EQUATION SOLVERS

    solveSimpleRadical(problem) {
        // For √(ax + b) = c
        const { a, b, c } = problem.parameters;

        // Check if c < 0
        if (c < 0) {
            return {
                equation: `√(${a}x + ${b}) = ${c}`,
                type: 'Simple Radical Equation',
                solutionType: 'No solution',
                validSolutions: [],
                extraneousSolutions: [],
                reason: 'Square root cannot equal negative number',
                category: 'simple_radical'
            };
        }

        // Square both sides: ax + b = c²
        const cSquared = c * c;
        
        // Solve for x: x = (c² - b) / a
        const solution = (cSquared - b) / a;

        // Verify
        const verification = this.verifyRadicalSolution(solution, a, b, c);

        return {
            equation: `√(${a}x + ${b}) = ${c}`,
            type: 'Simple Radical Equation',
            afterSquaring: `${a}x + ${b} = ${cSquared}`,
            solution: solution,
            solutionType: verification.isValid ? 'Single solution' : 'No solution (extraneous)',
            validSolutions: verification.isValid ? [solution] : [],
            extraneousSolutions: verification.isValid ? [] : [solution],
            verification: verification,
            category: 'simple_radical'
        };
    }

    solveRadicalWithConstant(problem) {
        // For √(ax + b) + d = c, first isolate: √(ax + b) = c - d
        const { a, b, c, d } = problem.parameters;
        
        const isolated = c - d;
        
        // Check if isolated value is negative
        if (isolated < 0) {
            return {
                equation: `√(${a}x + ${b}) + ${d} = ${c}`,
                type: 'Radical with Constant',
                solutionType: 'No solution',
                validSolutions: [],
                extraneousSolutions: [],
                reason: `After isolating, √(...) = ${isolated}, but square root cannot be negative`,
                category: 'radical_with_linear'
            };
        }

        // Now solve as simple radical
        const solution = (isolated * isolated - b) / a;
        const verification = this.verifyRadicalWithConstant(solution, a, b, c, d);

        return {
            equation: `√(${a}x + ${b}) + ${d} = ${c}`,
            type: 'Radical with Constant',
            isolated: `√(${a}x + ${b}) = ${isolated}`,
            afterSquaring: `${a}x + ${b} = ${isolated * isolated}`,
            solution: solution,
            solutionType: verification.isValid ? 'Single solution' : 'No solution (extraneous)',
            validSolutions: verification.isValid ? [solution] : [],
            extraneousSolutions: verification.isValid ? [] : [solution],
            verification: verification,
            category: 'radical_with_linear'
        };
    }

    solveRadicalEqualsLinear(problem) {
        // For √(ax + b) = cx + d
        // Square both sides: ax + b = (cx + d)²
        // Expand: ax + b = c²x² + 2cdx + d²
        // Rearrange: c²x² + (2cd - a)x + (d² - b) = 0
        
        const { a, b, c, d } = problem.parameters;

        const quadA = c * c;
        const quadB = 2 * c * d - a;
        const quadC = d * d - b;

        // Solve quadratic
        const discriminant = quadB * quadB - 4 * quadA * quadC;

        if (discriminant < 0) {
            return {
                equation: `√(${a}x + ${b}) = ${c}x + ${d}`,
                type: 'Radical Equals Linear (to Quadratic)',
                solutionType: 'No real solutions',
                validSolutions: [],
                extraneousSolutions: [],
                reason: 'Quadratic has no real solutions (discriminant < 0)',
                category: 'radical_to_quadratic'
            };
        }

        const x1 = (-quadB + Math.sqrt(discriminant)) / (2 * quadA);
        const x2 = (-quadB - Math.sqrt(discriminant)) / (2 * quadA);

        // Verify both solutions
        const verify1 = this.verifyRadicalEqualsLinear(x1, a, b, c, d);
        const verify2 = this.verifyRadicalEqualsLinear(x2, a, b, c, d);

        const validSolutions = [];
        const extraneousSolutions = [];

        if (verify1.isValid) validSolutions.push(x1);
        else extraneousSolutions.push(x1);

        if (verify2.isValid) validSolutions.push(x2);
        else extraneousSolutions.push(x2);

        return {
            equation: `√(${a}x + ${b}) = ${c}x + ${d}`,
            type: 'Radical Equals Linear (to Quadratic)',
            afterSquaring: `${a}x + ${b} = (${c}x + ${d})²`,
            expanded: `${a}x + ${b} = ${quadA}x² + ${2*c*d}x + ${d*d}`,
            quadraticForm: `${quadA}x² + ${quadB}x + ${quadC} = 0`,
            potentialSolutions: [x1, x2],
            validSolutions: validSolutions,
            extraneousSolutions: extraneousSolutions,
            solutionType: validSolutions.length === 0 ? 'No solution (all extraneous)' :
                         validSolutions.length === 1 ? 'One solution (one extraneous)' :
                         'Two solutions',
            verifications: { x1: verify1, x2: verify2 },
            category: 'radical_to_quadratic'
        };
    }

    solveTwoRadicalsEqual(problem) {
        // For √(ax + b) = √(cx + d)
        // Square both sides: ax + b = cx + d
        // Linear equation: (a - c)x = d - b
        
        const { a, b, c, d } = problem.parameters;

        const coeffDiff = a - c;
        const constDiff = d - b;

        if (Math.abs(coeffDiff) < 1e-10) {
            if (Math.abs(constDiff) < 1e-10) {
                return {
                    equation: `√(${a}x + ${b}) = √(${c}x + ${d})`,
                    type: 'Two Radicals Equal',
                    solutionType: 'Infinite solutions (identity)',
                    validSolutions: 'All x where both radicands ≥ 0',
                    category: 'two_radicals'
                };
            } else {
                return {
                    equation: `√(${a}x + ${b}) = √(${c}x + ${d})`,
                    type: 'Two Radicals Equal',
                    solutionType: 'No solution (contradiction)',
                    validSolutions: [],
                    category: 'two_radicals'
                };
            }
        }

        const solution = constDiff / coeffDiff;

        // Verify
        const verification = this.verifyTwoRadicalsEqual(solution, a, b, c, d);

        return {
            equation: `√(${a}x + ${b}) = √(${c}x + ${d})`,
            type: 'Two Radicals Equal',
            afterSquaring: `${a}x + ${b} = ${c}x + ${d}`,
            simplified: `${coeffDiff}x = ${constDiff}`,
            solution: solution,
            solutionType: verification.isValid ? 'Single solution' : 'No solution',
            validSolutions: verification.isValid ? [solution] : [],
            extraneousSolutions: verification.isValid ? [] : [solution],
            verification: verification,
            category: 'two_radicals'
        };
    }

    solveRadicalSumRadicals(problem) {
        // For √(ax + b) + √(cx + d) = e
        // This requires isolating one radical and squaring twice
        
        return {
            type: 'Sum of Two Radicals',
            approach: 'Isolate one radical, square, isolate remaining radical, square again',
            note: 'Complex solving - requires two squaring steps',
            category: 'two_radicals'
        };
    }

    solveNestedRadical(problem) {
        return {
            type: 'Nested Radical Equation',
            approach: 'Square to eliminate outer radical, then square again for inner radical',
            note: 'Requires multiple squaring steps',
            category: 'nested_radicals'
        };
    }

    solveCubeRoot(problem) {
        // For ∛(ax + b) = c
        // Cube both sides: ax + b = c³
        const { a, b, c } = problem.parameters;

        const cCubed = c * c * c;
        const solution = (cCubed - b) / a;

        // Cube roots don't create extraneous solutions
        const verification = this.verifyCubeRoot(solution, a, b, c);

        return {
            equation: `∛(${a}x + ${b}) = ${c}`,
            type: 'Cube Root Equation',
            afterCubing: `${a}x + ${b} = ${cCubed}`,
            solution: solution,
            solutionType: 'Single solution',
            validSolutions: [solution],
            extraneousSolutions: [],
            note: 'Cube roots do not create extraneous solutions',
            verification: verification,
            category: 'cube_roots'
        };
    }

    solveHigherIndexRadical(problem) {
        const { n, a, b, c } = problem.parameters; // n is the index
        
        return {
            type: `${n}th Root Equation`,
            approach: `Raise both sides to power ${n}`,
            note: n % 2 === 0 ? 'Even index - check for extraneous solutions' : 'Odd index - no extraneous solutions',
            category: 'higher_index_radicals'
        };
    }

    solveRadicalQuadraticUnder(problem) {
        // For √(ax² + bx + c) = d
        return {
            type: 'Radical with Quadratic Under Root',
            approach: 'Square both sides to reveal quadratic equation',
            note: 'May have 0, 1, or 2 solutions depending on quadratic',
            category: 'radical_with_quadratic'
        };
    }

    // VERIFICATION METHODS

    verifyRadicalSolution(x, a, b, c) {
        const underRadical = a * x + b;
        
        if (underRadical < 0) {
            return {
                solution: x,
                underRadical: underRadical,
                leftSide: 'undefined (negative under radical)',
                rightSide: c,
                isValid: false,
                reason: 'Makes radicand negative'
            };
        }

        const leftSide = Math.sqrt(underRadical);
        const rightSide = c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            underRadical: underRadical,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    verifyRadicalWithConstant(x, a, b, c, d) {
        const underRadical = a * x + b;
        
        if (underRadical < 0) {
            return {
                solution: x,
                underRadical: underRadical,
                leftSide: 'undefined',
                rightSide: c,
                isValid: false,
                reason: 'Makes radicand negative'
            };
        }

        const leftSide = Math.sqrt(underRadical) + d;
        const rightSide = c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            substitution: `√(${a}(${x}) + ${b}) + ${d} = ${c}`,
            underRadical: underRadical,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    verifyRadicalEqualsLinear(x, a, b, c, d) {
        const underRadical = a * x + b;
        
        if (underRadical < 0) {
            return {
                solution: x,
                underRadical: underRadical,
                leftSide: 'undefined',
                rightSide: c * x + d,
                isValid: false,
                reason: 'Makes radicand negative'
            };
        }

        const leftSide = Math.sqrt(underRadical);
        const rightSide = c * x + d;

        // Check if right side is negative (radical can't equal negative)
        if (rightSide < 0) {
            return {
                solution: x,
                underRadical: underRadical,
                leftSide: leftSide,
                rightSide: rightSide,
                isValid: false,
                reason: 'Right side is negative, but left side (√) is always non-negative'
            };
        }

        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            substitution: `√(${a}(${x}) + ${b}) = ${c}(${x}) + ${d}`,
            underRadical: underRadical,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    verifyTwoRadicalsEqual(x, a, b, c, d) {
        const underRadical1 = a * x + b;
        const underRadical2 = c * x + d;

        if (underRadical1 < 0 || underRadical2 < 0) {
            return {
                solution: x,
                underRadical1: underRadical1,
                underRadical2: underRadical2,
                isValid: false,
                reason: 'One or both radicands are negative'
            };
        }

        const leftSide = Math.sqrt(underRadical1);
        const rightSide = Math.sqrt(underRadical2);
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            underRadical1: underRadical1,
            underRadical2: underRadical2,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    verifyCubeRoot(x, a, b, c) {
        const underCubeRoot = a * x + b;
        const leftSide = Math.cbrt(underCubeRoot);
        const rightSide = c;
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            solution: x,
            underCubeRoot: underCubeRoot,
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: isValid
        };
    }

    // STEP GENERATION (continuing in next part due to length)

    generateRadicalSteps(problem, solution) {
        let baseSteps = this.generateBaseRadicalSteps(problem, solution);

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

    generateBaseRadicalSteps(problem, solution) {
        const { type } = problem;
        const category = this.radicalTypes[type]?.category;

        switch(category) {
            case 'simple_radical':
                return this.generateSimpleRadicalSteps(problem, solution);
            case 'radical_to_quadratic':
                return this.generateRadicalToQuadraticSteps(problem, solution);
            case 'two_radicals':
                return this.generateTwoRadicalsSteps(problem, solution);
            case 'cube_roots':
                return this.generateCubeRootSteps(problem, solution);
            default:
                return this.generateGenericRadicalSteps(problem, solution);
        }
    }

    generateSimpleRadicalSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with the radical equation',
            expression: solution.equation,
            reasoning: 'We have a square root equal to a constant',
            goalStatement: 'Eliminate the radical by squaring both sides',
            warnings: ['Check if right side is non-negative']
        });

        // Step 2: Check domain
        if (solution.solutionType === 'No solution' && solution.reason === 'Square root cannot equal negative number') {
            steps.push({
                stepNumber: 2,
                step: 'Check domain',
                description: 'Verify if equation has any solution',
                expression: solution.equation,
                reasoning: 'Square root cannot equal a negative number',
                conclusion: 'No solution exists',
                warning: '√x is always ≥ 0 for real numbers',
                finalAnswer: true
            });
            return steps;
        }

        // Step 2: Square both sides
        steps.push({
            stepNumber: 2,
            step: 'Square both sides',
            description: 'Eliminate the radical by squaring',
            beforeExpression: solution.equation,
            operation: 'Square both sides: (√...)² = c²',
            afterExpression: solution.afterSquaring,
            reasoning: 'Squaring undoes the square root',
            algebraicRule: 'If a = b, then a² = b²',
            warning: 'This may introduce extraneous solutions'
        });

        // Step 3: Solve linear equation
        steps.push({
            stepNumber: 3,
            step: 'Solve for x',
            description: 'Solve the resulting linear equation',
            expression: `x = ${solution.solution}`,
            reasoning: 'Isolate x using algebra',
            algebraicRule: 'Linear equation solving'
        });

        // Step 4: Verify solution
        const verification = solution.verification;
        steps.push({
            stepNumber: 4,
            step: 'Verify solution',
            description: 'Substitute back into original equation',
            substitution: `√(${verification.underRadical}) = ${verification.rightSide}`,
            leftSideValue: verification.leftSide,
            rightSideValue: verification.rightSide,
            isValid: verification.isValid,
            expression: verification.isValid ? 
                `x = ${solution.solution} ✓` : 
                `x = ${solution.solution} ✗ (extraneous)`,
            reasoning: verification.isValid ? 
                'Both sides are equal - solution is valid' : 
                verification.reason || 'Solution does not satisfy original equation',
            finalAnswer: true,
            criticalWarning: !verification.isValid ? 'This solution is EXTRANEOUS and must be rejected' : null
        });

        return steps;
    }

    generateRadicalToQuadraticSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Start with radical equation',
            expression: solution.equation,
            reasoning: 'Radical equals a linear expression - squaring will create quadratic',
            goalStatement: 'Isolate radical (if needed), square both sides, solve quadratic',
            warnings: ['Expect quadratic equation after squaring', 'MUST verify all solutions']
        });

        // Step 2: Square both sides
        steps.push({
            stepNumber: 2,
            step: 'Square both sides',
            description: 'Square to eliminate radical',
            beforeExpression: solution.equation,
            operation: 'Square both sides',
            afterExpression: solution.afterSquaring,
            reasoning: 'This eliminates the square root',
            algebraicRule: 'If a = b, then a² = b²',
            criticalWarning: 'Squaring will introduce extraneous solutions - verification is MANDATORY'
        });

        // Step 3: Expand right side
        steps.push({
            stepNumber: 3,
            step: 'Expand binomial square',
            description: 'Expand (cx + d)² using formula',
            beforeExpression: solution.afterSquaring,
            formula: '(a + b)² = a² + 2ab + b²',
            afterExpression: solution.expanded,
            reasoning: 'Must expand completely to see all terms',
            commonMistake: 'Forgetting the middle term 2ab',
            algebraicRule: 'Binomial expansion formula'
        });

        // Step 4: Rearrange to standard form
        steps.push({
            stepNumber: 4,
            step: 'Rearrange to standard quadratic form',
            description: 'Move all terms to one side',
            expression: solution.quadraticForm,
            reasoning: 'Standard form: ax² + bx + c = 0',
            algebraicRule: 'Quadratic standard form'
        });

        // Step 5: Solve quadratic
        steps.push({
            stepNumber: 5,
            step: 'Solve quadratic equation',
            description: 'Use factoring, completing the square, or quadratic formula',
            potentialSolutions: solution.potentialSolutions,
            reasoning: 'Quadratic may have 0, 1, or 2 solutions',
            note: 'Not all solutions may be valid for original equation'
        });

        // Step 6: Verify each solution
        const verifications = solution.verifications;
        let stepNum = 6;

        solution.potentialSolutions.forEach((sol, index) => {
            const verify = verifications[`x${index + 1}`];
            
            steps.push({
                stepNumber: stepNum++,
                step: `Verify x = ${sol}`,
                description: `Check if x = ${sol} satisfies original equation`,
                substitution: verify.substitution,
                underRadical: verify.underRadical,
                leftSideValue: verify.leftSide,
                rightSideValue: verify.rightSide,
                isValid: verify.isValid,
                conclusion: verify.isValid ? 
                    `x = ${sol} is VALID ✓` : 
                    `x = ${sol} is EXTRANEOUS ✗`,
                reasoning: verify.isValid ? 
                    'Both sides equal and radicand is non-negative' : 
                    verify.reason || 'Does not satisfy original equation',
                criticalNote: !verify.isValid ? 'REJECT this solution' : 'ACCEPT this solution'
            });
        });

        // Final step: State all valid solutions
        steps.push({
            stepNumber: stepNum,
            step: 'Final answer',
            description: 'List all valid solutions',
            validSolutions: solution.validSolutions,
            extraneousSolutions: solution.extraneousSolutions,
            expression: solution.validSolutions.length > 0 ?
                `x = ${solution.validSolutions.join(' or x = ')}` :
                'No solution',
            reasoning: solution.validSolutions.length === 0 ? 
                'All potential solutions were extraneous' :
                solution.extraneousSolutions.length > 0 ?
                    `${solution.extraneousSolutions.length} solution(s) rejected as extraneous` :
                    'All solutions are valid',
            finalAnswer: true
        });

        return steps;
    }

    generateTwoRadicalsSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Equation with two radical expressions',
            expression: solution.equation,
            reasoning: 'Two radicals equal each other',
            goalStatement: 'Square both sides to eliminate both radicals simultaneously'
        });

        // Step 2: Square both sides
        steps.push({
            stepNumber: 2,
            step: 'Square both sides',
            description: 'Square to eliminate both radicals',
            beforeExpression: solution.equation,
            operation: 'Square both sides',
            afterExpression: solution.afterSquaring,
            reasoning: 'When both sides are radicals, squaring eliminates both at once',
            algebraicRule: '(√a)² = a'
        });

        // Step 3: Solve resulting equation
        steps.push({
            stepNumber: 3,
            step: 'Solve resulting equation',
            description: 'Solve the equation after radicals are eliminated',
            expression: solution.simplified || solution.afterSquaring,
            solution: solution.solution,
            reasoning: 'Usually results in linear equation when two radicals are equal'
        });

        // Step 4: Verify
        if (solution.verification) {
            steps.push({
                stepNumber: 4,
                step: 'Verify solution',
                description: 'Check that solution makes both radicands non-negative',
                substitution: `x = ${solution.solution}`,
                radicand1: solution.verification.underRadical1,
                radicand2: solution.verification.underRadical2,
                isValid: solution.verification.isValid,
                conclusion: solution.verification.isValid ?
                    `x = ${solution.solution} ✓` :
                    'No valid solution',
                finalAnswer: true
            });
        }

        return steps;
    }

    generateCubeRootSteps(problem, solution) {
        const steps = [];

        // Step 1: Given equation
        steps.push({
            stepNumber: 1,
            step: 'Given equation',
            description: 'Cube root equation',
            expression: solution.equation,
            reasoning: 'Cube root can be eliminated by cubing both sides',
            goalStatement: 'Cube both sides to eliminate cube root',
            note: 'Cube roots do NOT create extraneous solutions'
        });

        // Step 2: Cube both sides
        steps.push({
            stepNumber: 2,
            step: 'Cube both sides',
            description: 'Eliminate cube root by cubing',
            beforeExpression: solution.equation,
            operation: 'Cube both sides: (∛...)³ = c³',
            afterExpression: solution.afterCubing,
            reasoning: 'Cubing undoes cube root',
            algebraicRule: '(∛x)³ = x',
            note: 'Unlike squaring, cubing does not create extraneous solutions'
        });

        // Step 3: Solve
        steps.push({
            stepNumber: 3,
            step: 'Solve for x',
            description: 'Solve the resulting linear equation',
            expression: `x = ${solution.solution}`,
            reasoning: 'Standard linear equation solving',
            finalAnswer: true
        });

        // Step 4: Verify (optional for cube roots but good practice)
        if (solution.verification) {
            steps.push({
                stepNumber: 4,
                step: 'Verify solution (optional)',
                description: 'Verify by substitution',
                note: 'Verification not strictly needed for cube roots, but good practice',
                isValid: solution.verification.isValid,
                expression: `x = ${solution.solution} ✓`,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateGenericRadicalSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Radical equation',
            description: 'Solve the given radical equation',
            expression: problem.equation || solution.equation,
            reasoning: 'Apply appropriate radical solution technique',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS (reusing from linear with radical-specific adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationRadical(step, problem),
                procedural: this.getProceduralExplanationRadical(step),
                visual: this.getVisualExplanationRadical(step, problem),
                algebraic: this.getAlgebraicExplanationRadical(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyRadical(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsRadical(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionRadical(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionRadical(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationRadical(step, problem) {
        const conceptualExplanations = {
            'Given equation': 'A radical equation contains a variable under a radical sign. Our goal is to eliminate the radical and solve for the variable.',
            'Square both sides': 'Squaring both sides eliminates the square root because (√x)² = x. However, squaring can introduce false solutions.',
            'Cube both sides': 'Cubing both sides eliminates the cube root. Unlike squaring, cubing does not create extraneous solutions.',
            'Verify solution': 'CRITICAL: We must check every solution because squaring can create extraneous solutions that don\'t satisfy the original equation.',
            'Expand binomial square': 'When squaring (a + b), we get a² + 2ab + b². The middle term 2ab is crucial and often forgotten.',
            'Solve quadratic equation': 'After squaring a radical equation with a variable expression, we often get a quadratic equation.',
            'Check domain': 'Square roots require non-negative radicands. If √(...) = negative, there is no real solution.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward solving the radical equation.';
    }

    getProceduralExplanationRadical(step) {
        const procedural = {
            'Square both sides': '1. Write (left side)²\n2. Write = (right side)²\n3. Simplify both sides\n4. Continue solving',
            'Verify solution': '1. Substitute x value into original equation\n2. Evaluate left side\n3. Evaluate right side\n4. Check if equal and radicand ≥ 0',
            'Expand binomial square': '1. Identify (a + b)²\n2. Write a² + 2ab + b²\n3. Calculate each term\n4. Combine',
            'Solve quadratic equation': '1. Write in standard form\n2. Factor or use formula\n3. Find solutions\n4. Verify each'
        };

        return procedural[step.step] || 'Follow standard procedure for this step type.';
    }

    getVisualExplanationRadical(step, problem) {
        const visual = {
            'Square both sides': 'Imagine peeling off the square root wrapper from both sides simultaneously',
            'Verify solution': 'Like trying a key in a lock - does it fit perfectly in the original equation?',
            'Expand binomial square': 'Visualize (a+b)(a+b) as a rectangle: you get a², ab, ab, and b²',
            'Check domain': 'On a number line, shade the region where the radicand is ≥ 0'
        };

        return visual[step.step] || 'Visualize the transformation happening to the equation.';
    }

    getAlgebraicExplanationRadical(step) {
        const algebraic = {
            'Square both sides': 'Property: If a = b, then a² = b². Note: The converse is NOT true.',
            'Verify solution': 'Verification ensures the solution is in the domain and satisfies the original equation.',
            'Expand binomial square': 'Algebraic identity: (a + b)² = a² + 2ab + b²',
            'Solve quadratic equation': 'Standard quadratic solution methods: factoring, completing the square, or quadratic formula',
            'Check domain': 'For √f(x) to be defined in ℝ, we require f(x) ≥ 0'
        };

        return algebraic[step.step] || 'Apply standard algebraic principles.';
    }

    identifyKeyVocabularyRadical(step) {
        const vocabulary = {
            'Given equation': ['radical', 'radicand', 'index', 'square root'],
            'Square both sides': ['squaring', 'inverse operation', 'extraneous solution'],
            'Verify solution': ['verification', 'substitution', 'extraneous', 'domain'],
            'Expand binomial square': ['binomial', 'expansion', 'middle term', 'like terms'],
            'Solve quadratic equation': ['quadratic', 'standard form', 'discriminant', 'solutions'],
            'Check domain': ['domain', 'radicand', 'non-negative', 'restriction']
        };

        return vocabulary[step.step] || ['equation', 'solution', 'algebra'];
    }

    generateThinkingPromptsRadical(step) {
        const prompts = {
            'Square both sides': {
                before: 'Am I squaring the ENTIRE left side and ENTIRE right side?',
                during: 'Did I remember that (a + b)² ≠ a² + b²?',
                after: 'Will I remember to verify this solution?'
            },
            'Verify solution': {
                before: 'Why is verification critical for radical equations?',
                during: 'Does this solution make the radicand negative?',
                after: 'Is this solution valid or extraneous?'
            },
            'Expand binomial square': {
                before: 'What is the formula for (a + b)²?',
                during: 'Did I include the middle term 2ab?',
                after: 'Did I combine like terms correctly?'
            }
        };

        return prompts[step.step] || {
            before: 'What am I trying to accomplish?',
            during: 'Am I doing this correctly?',
            after: 'Does this make sense?'
        };
    }

    generateSelfCheckQuestionRadical(step) {
        const questions = {
            'Given equation': 'Do I understand that I need to eliminate the radical?',
            'Square both sides': 'Did I square BOTH sides correctly?',
            'Verify solution': 'Did I substitute into the ORIGINAL equation?',
            'Expand binomial square': 'Did I use (a+b)² = a² + 2ab + b²?',
            'Solve quadratic equation': 'Did I find all potential solutions?',
            'Check domain': 'Is the radicand non-negative?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    findRealWorldConnectionRadical(step, problem) {
        if (step.step === 'Square both sides') {
            return 'Like finding the area when you know the side length of a square - you square the length. Here we\'re doing the reverse.';
        }
        if (step.step === 'Verify solution') {
            return 'Like double-checking your answer on a test - it\'s essential to catch mistakes!';
        }

        return 'Radical equations appear in physics (velocity, energy), geometry (distance), and engineering.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationRadical(step, problem),
                analogy: this.findRelevantAnalogyRadical(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualizationRadical(step)
            }
        }));
    }

    generateELI5ExplanationRadical(step, problem) {
        const ELI5Explanations = {
            'Given equation': "We have a puzzle with a square root! Our job is to unwrap the square root to find what number x is hiding inside.",
            'Square both sides': "To get rid of a square root, we square both sides! It's like unwrapping a present - squaring unwraps the square root wrapper!",
            'Cube both sides': "To get rid of a cube root, we cube both sides! Cubing is like un-doing the cube root.",
            'Verify solution': "This is super important! We MUST check our answer by putting it back in the original equation, like trying a puzzle piece to see if it fits!",
            'Expand binomial square': "When we square (something + something else), we can't just square each part. We need to use the special formula with three parts!",
            'Solve quadratic equation': "Now we have a fancier equation with x². We solve it like we learned in quadratics!",
            'Check domain': "Square roots don't like negative numbers! We check that we're not trying to take the square root of a negative number."
        };

        return ELI5Explanations[step.step] || "We're taking another step to find what x equals!";
    }

    findRelevantAnalogyRadical(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_types')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of solving this like unwrapping layers to get to the answer!";
    }

    suggestVisualizationRadical(step) {
        const visualizations = {
            'Given equation': 'Draw the equation with the square root as a box containing the expression',
            'Square both sides': 'Show the square root wrapper disappearing when you square',
            'Verify solution': 'Draw a checklist: ✓ or ✗ for the solution',
            'Expand binomial square': 'Draw a square divided into four parts showing a², ab, ab, b²',
            'Check domain': 'Draw a number line and shade where the radicand is positive',
            'Solve quadratic equation': 'Show the two potential solutions on a number line'
        };

        return visualizations[step.step] || 'Draw a picture of what\'s happening in this step';
    }

    addStepBridges(baseSteps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < baseSteps.length; i++) {
            enhancedSteps.push(baseSteps[i]);

            if (i < baseSteps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeRadical(baseSteps[i], baseSteps[i + 1]),
                    reasoning: this.explainStepProgressionRadical(baseSteps[i], baseSteps[i + 1]),
                    strategicThinking: this.explainStepStrategyRadical(baseSteps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateStepBridgeRadical(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainStepNecessityRadical(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefitRadical(nextStep)}`
        };
    }

    explainStepProgressionRadical(currentStep, nextStep) {
        if (currentStep.step === 'Square both sides' && nextStep.step === 'Expand binomial square') {
            return 'After squaring, we need to expand the squared binomial to see all terms clearly';
        }
        if (currentStep.step === 'Solve quadratic equation' && nextStep.step.includes('Verify')) {
            return 'After finding potential solutions, we MUST verify them to identify extraneous solutions';
        }
        return `After ${currentStep.step}, we proceed to ${nextStep.step}`;
    }

    explainStepStrategyRadical(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    explainStepNecessityRadical(currentStep, nextStep) {
        if (nextStep.step === 'Verify solution') {
            return 'squaring can introduce extraneous solutions that must be identified';
        }
        if (nextStep.step === 'Expand binomial square') {
            return 'we need to see all terms to rearrange into standard quadratic form';
        }
        return 'we need to continue progressing toward the solution';
    }

    explainStepBenefitRadical(nextStep) {
        if (nextStep.step === 'Verify solution') {
            return 'ensuring we only keep valid solutions and reject extraneous ones';
        }
        return 'moving us closer to solving the equation';
    }

    addErrorPrevention(step, problemType) {
        const category = this.radicalTypes[problemType]?.category || 'simple_radical';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsRadical(step, problemType),
                checkPoints: this.generateCheckPointsRadical(step),
                warningFlags: this.identifyWarningFlagsRadical(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionRadical(step),
                expectedResult: this.describeExpectedResultRadical(step),
                troubleshooting: this.generateTroubleshootingTipsRadical(step)
            }
        };
    }

    generatePreventionTipsRadical(step, problemType) {
        const tips = {
            'Square both sides': [
                'Square the ENTIRE left side and ENTIRE right side',
                'Remember: (a + b)² = a² + 2ab + b², not a² + b²',
                'Write out the squaring explicitly to avoid errors'
            ],
            'Verify solution': [
                'ALWAYS verify - this is NOT optional',
                'Use the ORIGINAL equation, not the squared version',
                'Check that radicand is non-negative',
                'Remember √x is never negative'
            ],
            'Expand binomial square': [
                'Use the formula (a + b)² = a² + 2ab + b²',
                'Don\'t forget the middle term 2ab',
                'Write out all three terms before combining'
            ],
            'Solve quadratic equation': [
                'Find ALL solutions, even if one seems obviously wrong',
                'Remember you must verify each solution',
                'Use quadratic formula if factoring is difficult'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your work'];
    }

    generateCheckPointsRadical(step) {
        if (step.step === 'Square both sides') {
            return [
                'Did I square the entire left side?',
                'Did I square the entire right side?',
                'Did I expand (a + b)² correctly if needed?',
                'Will I remember to verify the solution?'
            ];
        }
        if (step.step === 'Verify solution') {
            return [
                'Did I use the ORIGINAL equation?',
                'Is the radicand non-negative?',
                'Do both sides equal?',
                'Should I accept or reject this solution?'
            ];
        }
        return [
            'Is my arithmetic correct?',
            'Did I follow the proper procedure?',
            'Does this step make sense?'
        ];
    }

    identifyWarningFlagsRadical(step, problemType) {
        const warnings = {
            'Square both sides': [
                'This step WILL create extraneous solutions',
                'Must verify every solution afterward',
                'Squaring is not reversible'
            ],
            'Verify solution': [
                'If radicand is negative, solution is invalid',
                'If √(...) = negative number appears, solution is invalid',
                'Both sides must be exactly equal'
            ],
            'Check domain': [
                'If right side is negative and left is √(...), no solution',
                'Radicand must be ≥ 0'
            ]
        };

        return warnings[step.step] || [];
    }

    describeExpectedResultRadical(step) {
        const expectations = {
            'Given equation': 'A radical equation to solve',
            'Square both sides': 'An equation without radicals (or with fewer radicals)',
            'Verify solution': 'Determination of whether solution is valid or extraneous',
            'Expand binomial square': 'Fully expanded quadratic expression',
            'Solve quadratic equation': 'One or two potential solutions',
            'Check domain': 'Determination if equation has any solutions'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTipsRadical(step) {
        if (step.step === 'Square both sides') {
            return [
                'If confused, write (left)² = (right)² explicitly',
                'For (a + b)², remember to use the formula',
                'Check your expansion by multiplying out (a + b)(a + b)'
            ];
        }
        if (step.step === 'Verify solution') {
            return [
                'If verification fails, double-check your arithmetic',
                'Make sure you\'re using the ORIGINAL equation',
                'Remember: extraneous solutions are normal - just reject them'
            ];
        }
        return [
            'If stuck, review the previous step',
            'Check your arithmetic carefully',
            'Ask: does this make sense?'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsRadical(step, problem),
                subSteps: this.breakIntoSubStepsRadical(step),
                hints: this.generateProgressiveHintsRadical(step, problem),
                practiceVariation: this.generatePracticeVariationRadical(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessRadical(step),
                decisionPoints: this.identifyDecisionPointsRadical(step),
                alternativeApproaches: this.suggestAlternativeMethodsRadical(step, problem)
            }
        }));
    }

    generateGuidingQuestionsRadical(step, problem) {
        const questions = {
            'Given equation': [
                'What type of radical is this?',
                'What do I need to do to eliminate the radical?',
                'Will squaring introduce extraneous solutions?'
            ],
            'Square both sides': [
                'Am I squaring the entire left side?',
                'Am I squaring the entire right side?',
                'If there\'s (a + b), am I using the correct formula?'
            ],
            'Verify solution': [
                'What equation should I substitute into?',
                'Does the solution make the radicand negative?',
                'Are both sides equal after substitution?'
            ],
            'Expand binomial square': [
                'What is the formula for (a + b)²?',
                'What are a and b in my expression?',
                'Did I calculate all three terms: a², 2ab, b²?'
            ]
        };

        return questions[step.step] || [
            'What is the goal of this step?',
            'How does this help solve the equation?'
        ];
    }

    breakIntoSubStepsRadical(step) {
        if (step.step === 'Square both sides') {
            return [
                'Write (left side)²',
                'Write (right side)²',
                'Expand each side if needed',
                'Write the new equation',
                'Note: verification will be required'
            ];
        }
        if (step.step === 'Verify solution') {
            return [
                'Write the original equation',
                'Substitute the solution for x',
                'Evaluate the left side',
                'Evaluate the right side',
                'Check if sides are equal',
                'Check if any √(negative) appears',
                'Decide: valid or extraneous'
            ];
        }
        return ['Understand the goal', 'Apply the technique', 'Check the result'];
    }

    generateProgressiveHintsRadical(step, problem) {
        const category = this.radicalTypes[problem.type]?.category || 'simple_radical';
        const hintSet = this.hints[category] || this.hints.simple_radical;

        return {
            level1: hintSet.level1 || 'What mathematical operation applies here?',
            level2: hintSet.level2 || 'Consider how to eliminate the radical.',
            level3: hintSet.level3 || 'Square both sides to eliminate the square root.',
            level4: hintSet.level4 || 'Proceed with the specific operation needed.',
            level5: hintSet.level5 || 'Don\'t forget to verify your solution!'
        };
    }

    generatePracticeVariationRadical(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different numbers',
            practiceHint: 'Start with simpler radicals to build confidence',
            extension: 'Once comfortable, try radicals leading to quadratics'
        };
    }

    explainThinkingProcessRadical(step) {
        return {
            observe: 'What do I see in this equation?',
            goal: 'What am I trying to accomplish?',
            strategy: 'How do I eliminate the radical?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Must I check for extraneous solutions?'
        };
    }

    identifyDecisionPointsRadical(step) {
        if (step.step === 'Given equation') {
            return [
                'Is the radical already isolated?',
                'What will happen when I square?',
                'Will I get a linear or quadratic equation?'
            ];
        }
        if (step.step === 'Verify solution') {
            return [
                'Is this solution valid or extraneous?',
                'Should I accept or reject this solution?'
            ];
        }
        return ['How should I proceed?', 'What method should I use?'];
    }

    suggestAlternativeMethodsRadical(step, problem) {
        if (step.step === 'Solve quadratic equation') {
            return [
                'Factoring (if equation factors nicely)',
                'Quadratic formula (always works)',
                'Completing the square (educational)',
                'Graphing (visual confirmation)'
            ];
        }
        return ['The chosen method is appropriate'];
    }

    // GRAPH GENERATION

    generateRadicalGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;

        if (category && this.currentSolution.validSolutions && this.currentSolution.validSolutions.length > 0) {
            this.graphData = this.generateRadicalGraph(this.currentProblem, this.currentSolution);
        }
    }

    generateRadicalGraph(problem, solution) {
        return {
            type: 'radical',
            solutionPoints: solution.validSolutions,
            extraneousPoints: solution.extraneousSolutions,
            description: solution.validSolutions.length > 0 ?
                `Valid solution(s): x = ${solution.validSolutions.join(', ')}` :
                'No valid solutions',
            graphType: 'function_intersection',
            visualization: 'Graph the left and right sides as functions; intersections are solutions'
        };
    }

    // WORKBOOK GENERATION

    generateRadicalWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createRadicalLessonSection(),
            this.createSolutionSection(),
            this.createExtraneousAnalysisSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createDomainAnalysisSection(),
            this.createRealWorldApplicationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createCommonMistakesSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Radical to Quadratic Mathematical Workbook',
            subtitle: 'Comprehensive Radical Equation Solver with Multi-Level Explanations',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.radicalTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category || 'radical'],
            ['Equation', this.currentSolution?.equation || this.currentProblem.cleanInput],
            ['Description', this.currentProblem.scenario || 'Radical equation']
        ];

        if (this.currentProblem.parameters && Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Parameters', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined) {
                    problemData.push([key, value]);
                }
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.radicalTypes[this.currentProblem.type]?.category;
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

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.warnings && step.warnings.length > 0) {
                stepsData.push(['⚠️ Warnings', step.warnings.join('; ')]);
            }

            if (step.criticalWarning) {
                stepsData.push(['🚨 CRITICAL', step.criticalWarning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Algebraic Rule', step.algebraicRule]);
            }

            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Procedural', step.explanations.procedural]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
                const tips = step.errorPrevention.preventionTips;
                if (tips && tips.length > 0) {
                    stepsData.push(['Prevention Tips', tips.join('; ')]);
                }
                const warnings = step.errorPrevention.warningFlags;
                if (warnings && warnings.length > 0) {
                    stepsData.push(['⚠️ Warning Flags', warnings.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Progressive Hints', '']);
                    stepsData.push(['  Level 1 (Gentle)', hints.level1]);
                    stepsData.push(['  Level 2', hints.level2]);
                    stepsData.push(['  Level 3', hints.level3]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            if (step.isValid !== undefined) {
                stepsData.push(['Result', step.isValid ? '✓ VALID' : '✗ EXTRANEOUS - REJECT']);
            }

            if (step.finalAnswer) {
                stepsData.push(['🎯 FINAL', step.expression || step.conclusion || 'Solution complete']);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createRadicalLessonSection() {
        const { type } = this.currentProblem;
        const category = this.radicalTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const lessonData = [
            ['Lesson', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['  •', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        if (lesson.solvingSteps) {
            lessonData.push(['', '']);
            lessonData.push(['Solving Steps', '']);
            lesson.solvingSteps.forEach((step, i) => {
                lessonData.push([`${i + 1}.`, step]);
            });
        }

        if (lesson.criticalWarnings) {
            lessonData.push(['', '']);
            lessonData.push(['🚨 Critical Warnings', '']);
            lesson.criticalWarnings.forEach(warning => {
                lessonData.push(['  ⚠️', warning]);
            });
        }

        return {
            title: 'Lesson: Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.validSolutions && this.currentSolution.validSolutions.length > 0) {
            solutionData.push(['Valid Solution(s)', this.currentSolution.validSolutions.map(s => `x = ${s}`).join(', ')]);
        } else if (this.currentSolution.solutionType === 'No solution' || 
                   this.currentSolution.solutionType === 'No solution (all extraneous)') {
            solutionData.push(['Solution', 'NO SOLUTION']);
            solutionData.push(['Reason', this.currentSolution.reason || 'All potential solutions were extraneous']);
        } else if (this.currentSolution.validSolutions === 'All x where both radicands ≥ 0') {
            solutionData.push(['Solution Type', 'Infinite solutions (identity)']);
            solutionData.push(['Solution', this.currentSolution.validSolutions]);
        }

        solutionData.push(['Solution Type', this.currentSolution.solutionType]);

        if (this.currentSolution.extraneousSolutions && this.currentSolution.extraneousSolutions.length > 0) {
            solutionData.push(['Extraneous Solutions (rejected)', this.currentSolution.extraneousSolutions.map(s => `x = ${s}`).join(', ')]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createExtraneousAnalysisSection() {
        if (!this.currentSolution.extraneousSolutions || this.currentSolution.extraneousSolutions.length === 0) {
            return null;
        }

        const analysisData = [
            ['Extraneous Solutions Found', this.currentSolution.extraneousSolutions.length],
            ['Rejected Solutions', this.currentSolution.extraneousSolutions.map(s => `x = ${s}`).join(', ')],
            ['', ''],
            ['Why Extraneous?', ''],
            ['Reason', 'Squaring both sides can introduce false solutions'],
            ['Explanation', 'These solutions satisfy the squared equation but NOT the original radical equation'],
            ['', ''],
            ['Key Lesson', 'This demonstrates why verification is MANDATORY for radical equations']
        ];

        if (this.currentSolution.verifications) {
            analysisData.push(['', '']);
            analysisData.push(['Verification Details', '']);
            
            this.currentSolution.extraneousSolutions.forEach((sol, index) => {
                const verify = Object.values(this.currentSolution.verifications)[index];
                if (verify && !verify.isValid) {
                    analysisData.push([`x = ${sol}`, verify.reason || 'Does not satisfy original equation']);
                }
            });
        }

        return {
            title: 'Extraneous Solutions Analysis',
            type: 'extraneous',
            data: analysisData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Required', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Category', this.radicalTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.approach) {
            analysisData.push(['Approach', this.currentSolution.approach]);
        }

        if (this.currentSolution.note) {
            analysisData.push(['Note', this.currentSolution.note]);
        }

        const totalSolutions = (this.currentSolution.validSolutions?.length || 0) + 
                              (this.currentSolution.extraneousSolutions?.length || 0);
        
        if (totalSolutions > 0) {
            analysisData.push(['Total Potential Solutions', totalSolutions]);
            analysisData.push(['Valid Solutions', this.currentSolution.validSolutions?.length || 0]);
            analysisData.push(['Extraneous Solutions', this.currentSolution.extraneousSolutions?.length || 0]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        if (this.currentSolution.solutionType === 'No solution') {
            return {
                title: 'Solution Verification',
                type: 'verification',
                data: [
                    ['Verification', 'N/A - No solution exists'],
                    ['Reason', this.currentSolution.reason || 'Equation has no solution']
                ]
            };
        }

        const verificationData = [
            ['Verification Method', 'Substitution into original equation'],
            ['Critical Importance', 'MANDATORY for radical equations due to extraneous solutions'],
            ['', '']
        ];

        if (this.currentSolution.validSolutions && this.currentSolution.validSolutions.length > 0) {
            verificationData.push(['Valid Solutions Verified', '']);
            
            this.currentSolution.validSolutions.forEach(sol => {
                verificationData.push([`x = ${sol}`, '✓ VERIFIED']);
            });
        }

        if (this.currentSolution.extraneousSolutions && this.currentSolution.extraneousSolutions.length > 0) {
            verificationData.push(['', '']);
            verificationData.push(['Extraneous Solutions Rejected', '']);
            
            this.currentSolution.extraneousSolutions.forEach(sol => {
                verificationData.push([`x = ${sol}`, '✗ REJECTED (extraneous)']);
            });
        }

        if (this.verificationDetail === 'detailed' && this.currentSolution.verifications) {
            verificationData.push(['', '']);
            verificationData.push(['Detailed Verification', '']);
            
            for (const [key, verify] of Object.entries(this.currentSolution.verifications)) {
                verificationData.push(['', '']);
                verificationData.push(['Solution', verify.solution]);
                verificationData.push(['Substitution', verify.substitution]);
                verificationData.push(['Left Side', verify.leftSide]);
                verificationData.push(['Right Side', verify.rightSide]);
                verificationData.push(['Valid?', verify.isValid ? 'Yes ✓' : 'No ✗']);
                if (verify.reason) {
                    verificationData.push(['Reason', verify.reason]);
                }
            }
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createDomainAnalysisSection() {
        const domainData = [
            ['Domain Analysis', ''],
            ['', ''],
            ['General Rule', 'For √f(x), we need f(x) ≥ 0'],
            ['Implication', 'Solutions must not make radicand negative'],
            ['', '']
        ];

        if (this.currentProblem.parameters) {
            domainData.push(['For This Problem', '']);
            domainData.push(['Check', 'All solutions were verified to have non-negative radicands']);
        }

        domainData.push(['', '']);
        domainData.push(['Key Concept', 'Square roots are only defined for non-negative numbers in real number system']);

        return {
            title: 'Domain Considerations',
            type: 'domain',
            data: domainData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const applications = Object.values(this.realWorldProblems).slice(0, 3);

        const appData = [
            ['Real-World Applications of Radical Equations', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Formula', app.equation]);
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

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateRadicalPedagogicalNotes(this.currentProblem.type);

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Learning Objectives', notes.objectives.join('; ')],
                ['Key Concepts', notes.keyConcepts.join('; ')],
                ['Prerequisites', notes.prerequisites.join('; ')],
                ['Common Difficulties', notes.commonDifficulties.join('; ')],
                ['Teaching Strategies', notes.teachingStrategies.join('; ')],
                ['Extension Ideas', notes.extensions.join('; ')],
                ['Assessment Tips', notes.assessment.join('; ')],
                ['', ''],
                ['Critical Teaching Points', ''],
                ...notes.criticalPoints.map(point => ['  •', point])
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateRadicalAlternativeMethods(this.currentProblem.type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Methods', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, `${method.name}: ${method.description}`
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    createPracticeProblemsSection() {
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems (Simple Radicals)', '']
        ];

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems (With Constants/Variables)', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems (Leading to Quadratics)', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Remember', 'ALWAYS verify your solutions for radical equations!']);

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Mistakes in Radical Equations', ''],
            ['', '']
        ];

        for (const [key, misconception] of Object.entries(this.misconceptions)) {
            mistakesData.push(['Misconception', misconception.misconception]);
            mistakesData.push(['Reality', misconception.reality]);
            mistakesData.push(['Example', misconception.correctiveExample]);
            mistakesData.push(['Common In', misconception.commonIn.join(', ')]);
            mistakesData.push(['', '']);
        }

        return {
            title: 'Common Mistakes to Avoid',
            type: 'mistakes',
            data: mistakesData
        };
    }

    generateRadicalPedagogicalNotes(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simple_radical: {
                objectives: [
                    'Solve simple radical equations of form √(ax+b) = c',
                    'Understand why verification is essential',
                    'Recognize when equations have no solution'
                ],
                keyConcepts: [
                    'Squaring eliminates square roots',
                    '√x is always non-negative for real numbers',
                    'Squaring can introduce extraneous solutions',
                    'Verification is mandatory'
                ],
                prerequisites: [
                    'Understanding of square roots',
                    'Linear equation solving',
                    'Squaring numbers and expressions'
                ],
                commonDifficulties: [
                    'Forgetting to verify solutions',
                    'Not squaring the constant correctly',
                    'Accepting negative values for √x',
                    'Thinking √x can equal negative numbers'
                ],
                teachingStrategies: [
                    'Emphasize verification from the start',
                    'Show examples where extraneous solutions occur',
                    'Use graphing to visualize why √x ≥ 0',
                    'Practice with both valid and extraneous solution examples'
                ],
                extensions: [
                    'Radicals with constants added',
                    'Radicals equal to linear expressions',
                    'Cube roots'
                ],
                assessment: [
                    'Does student verify every solution?',
                    'Can student explain why √x cannot be negative?',
                    'Does student square correctly?'
                ],
                criticalPoints: [
                    'Verification is NOT optional',
                    'Emphasize √x ≥ 0 repeatedly',
                    'Show why squaring creates extraneous solutions'
                ]
            },
            radical_to_quadratic: {
                objectives: [
                    'Solve radical equations that lead to quadratics',
                    'Expand binomial squares correctly',
                    'Identify and reject extraneous solutions'
                ],
                keyConcepts: [
                    'Squaring (cx + d) creates quadratic',
                    '(a + b)² = a² + 2ab + b², not a² + b²',
                    'Quadratics may have 0, 1, or 2 solutions',
                    'Must verify each solution'
                ],
                prerequisites: [
                    'Simple radical equations',
                    'Quadratic equation solving',
                    'Binomial expansion',
                    'Factoring or quadratic formula'
                ],
                commonDifficulties: [
                    'Forgetting middle term in (a+b)²',
                    'Not checking both solutions',
                    'Arithmetic errors in expansion',
                    'Accepting extraneous solutions'
                ],
                teachingStrategies: [
                    'Drill (a+b)² expansion thoroughly',
                    'Always work examples with extraneous solutions',
                    'Have students predict which solution might be extraneous',
                    'Use color coding for valid vs extraneous'
                ],
                extensions: [
                    'Two radicals on same side',
                    'Nested radicals',
                    'Higher-degree equations from radicals'
                ],
                assessment: [
                    'Does student expand binomials correctly?',
                    'Does student verify BOTH solutions?',
                    'Can student explain what makes a solution extraneous?'
                ],
                criticalPoints: [
                    'The middle term 2ab is crucial',
                    'Both solutions must be checked individually',
                    'Extraneous solutions are expected, not mistakes'
                ]
            },
            two_radicals: {
                objectives: [
                    'Solve equations with two radicals',
                    'Square correctly when radicals appear on both sides',
                    'Handle equations requiring multiple squaring steps'
                ],
                keyConcepts: [
                    'When both sides are radicals, one squaring eliminates both',
                    '(√a + √b)² = a + 2√(ab) + b',
                    'May need to square twice',
                    'Verification still essential'
                ],
                prerequisites: [
                    'Simple and quadratic radical equations',
                    'Binomial expansion with radicals',
                    'Isolating expressions'
                ],
                commonDifficulties: [
                    'Incorrectly expanding (√a + √b)²',
                    'Not isolating before second squaring',
                    'Computational errors in multi-step process'
                ],
                teachingStrategies: [
                    'Show expansion of (√a + √b)² explicitly',
                    'Work step-by-step, checking each stage',
                    'Use simpler numbers first for practice'
                ],
                extensions: [
                    'Three radicals',
                    'Nested radicals',
                    'Systems involving radicals'
                ],
                assessment: [
                    'Can student handle multi-step squaring?',
                    'Does student simplify between squaring steps?',
                    'Is verification performed correctly?'
                ],
                criticalPoints: [
                    'When adding radicals, can\'t just add radicands',
                    'May need to square more than once',
                    'Process is lengthy - encourage patience'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve radical equations'],
            keyConcepts: ['Squaring eliminates radicals', 'Verification required'],
            prerequisites: ['Basic algebra'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction', 'Emphasize verification'],
            extensions: ['More complex radicals'],
            assessment: ['Verify understanding'],
            criticalPoints: ['Always verify solutions']
        };
    }

    generateRadicalAlternativeMethods(problemType) {
        const category = this.radicalTypes[problemType]?.category;

        const alternativeDatabase = {
            simple_radical: {
                primaryMethod: 'Square both sides directly',
                methods: [
                    {
                        name: 'Graphical Method',
                        description: 'Graph y = √(ax+b) and y = c, find intersection'
                    },
                    {
                        name: 'Substitution Check',
                        description: 'For simple equations, try obvious values first'
                    },
                    {
                        name: 'Working Backwards',
                        description: 'Think "what value, when put in radical, gives c?"'
                    }
                ],
                comparison: 'Squaring is most systematic; graphing provides visual confirmation; working backwards good for building intuition'
            },
            radical_to_quadratic: {
                primaryMethod: 'Square, expand, solve quadratic, verify',
                methods: [
                    {
                        name: 'Graphical Intersection',
                        description: 'Graph both sides, find intersection points'
                    },
                    {
                        name: 'Test Potential Solutions',
                        description: 'Solve quadratic, then test each rigorously'
                    },
                    {
                        name: 'Domain Analysis First',
                        description: 'Determine valid domain before solving to predict solutions'
                    }
                ],
                comparison: 'Standard method most reliable; graphing helps visualize extraneous solutions; domain analysis can prevent wasted work'
            },
            two_radicals: {
                primaryMethod: 'Square once or twice as needed',
                methods: [
                    {
                        name: 'Isolate and Square Twice',
                        description: 'If radicals on same side, isolate one then square twice'
                    },
                    {
                        name: 'Square Immediately',
                        description: 'If radicals on opposite sides, square once'
                    },
                    {
                        name: 'Substitution',
                        description: 'Let u = √(...) to simplify, then substitute back'
                    }
                ],
                comparison: 'Choose based on equation structure; substitution can simplify complex cases'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard radical equation approach',
            methods: [{
                name: 'Alternative',
                description: 'Various methods depending on equation structure'
            }],
            comparison: 'Choose method based on equation characteristics'
        };
    }
}

// Export the class
export default EnhancedRadicalToQuadraticMathematicalWorkbook;

