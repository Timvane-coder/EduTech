// Enhanced Fraction Mathematical Workbook - Comprehensive Fraction Simplification and Conversion
import * as math from 'mathjs';

export class EnhancedFractionMathematicalWorkbook {
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
        this.initializeFractionSolvers();
        this.initializeFractionLessons();
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
        this.initializeVisualizationDatabase();
    }

    initializeMathSymbols() {
        return {
            'divide': '÷',
            'times': '×',
            'fraction': '/',
            'mixed': ' ',
            'percent': '%',
            'decimal': '.',
            'recurring': '̅',
            'approximately': '≈',
            'equals': '=',
            'notequals': '≠'
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
                numeratorBg: '#e8f4f8',
                denominatorBg: '#f8e8f4'
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
                numeratorBg: '#e1f5fe',
                denominatorBg: '#f3e5f5'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeFractionLessons() {
        this.lessons = {
            fraction_basics: {
                title: "Understanding Fractions",
                concepts: [
                    "A fraction represents a part of a whole",
                    "Numerator: number of parts we have (top)",
                    "Denominator: total number of equal parts (bottom)",
                    "Fractions can be proper, improper, or mixed numbers"
                ],
                theory: "Fractions are a way to represent quantities that are not whole numbers. The denominator tells us how many equal pieces the whole is divided into, and the numerator tells us how many of those pieces we're considering.",
                keyFormulas: {
                    "Fraction": "numerator/denominator",
                    "Proper Fraction": "numerator < denominator (e.g., 3/4)",
                    "Improper Fraction": "numerator ≥ denominator (e.g., 7/4)",
                    "Mixed Number": "whole number + proper fraction (e.g., 1¾)"
                },
                importantFacts: [
                    "Denominator can never be zero",
                    "Equivalent fractions represent the same value",
                    "Simplest form has GCD(numerator, denominator) = 1"
                ],
                applications: [
                    "Cooking measurements",
                    "Time (quarter hour, half hour)",
                    "Money (quarters, dimes)",
                    "Parts of a group or set"
                ]
            },

            simplifying_fractions: {
                title: "Simplifying Fractions",
                concepts: [
                    "Simplifying means reducing to lowest terms",
                    "Find the GCD (Greatest Common Divisor)",
                    "Divide both numerator and denominator by GCD",
                    "Simplified fraction is equivalent to original"
                ],
                theory: "A fraction is in simplest form when the numerator and denominator have no common factors other than 1. This is also called 'reducing to lowest terms' or 'writing in reduced form.'",
                keyFormulas: {
                    "Simplification": "(numerator ÷ GCD) / (denominator ÷ GCD)",
                    "GCD": "Greatest Common Divisor of numerator and denominator",
                    "Simplified Form": "GCD(numerator, denominator) = 1"
                },
                solvingSteps: [
                    "Find the GCD of numerator and denominator",
                    "Divide numerator by GCD",
                    "Divide denominator by GCD",
                    "Write the simplified fraction",
                    "Verify GCD of new fraction is 1"
                ],
                methods: [
                    "Prime Factorization Method",
                    "Euclidean Algorithm for GCD",
                    "Listing Factors Method",
                    "Successive Division Method"
                ],
                applications: [
                    "Simplifying ratios",
                    "Reducing recipe proportions",
                    "Simplifying probabilities",
                    "Scale models and maps"
                ]
            },

            decimal_to_fraction: {
                title: "Converting Decimals to Fractions",
                concepts: [
                    "Terminating decimals convert exactly",
                    "Repeating decimals need special handling",
                    "Place value determines denominator",
                    "Always simplify the result"
                ],
                theory: "Every decimal can be expressed as a fraction. Terminating decimals are straightforward, while repeating decimals require algebraic techniques.",
                keyFormulas: {
                    "Terminating Decimal": "decimal × 10^n / 10^n, then simplify",
                    "One-Digit Repeat": "repeating digit / 9",
                    "Two-Digit Repeat": "repeating digits / 99",
                    "Mixed Decimal": "Combine non-repeating and repeating parts"
                },
                decimalTypes: {
                    "Terminating": "0.25 = 25/100 = 1/4",
                    "Single Repeating": "0.333... = 3/9 = 1/3",
                    "Multiple Repeating": "0.454545... = 45/99 = 5/11",
                    "Mixed": "0.1666... = 1/6"
                },
                solvingSteps: [
                    "Identify decimal type (terminating or repeating)",
                    "For terminating: count decimal places",
                    "Write as fraction with appropriate denominator",
                    "For repeating: use algebraic method",
                    "Simplify to lowest terms"
                ],
                applications: [
                    "Converting measurements",
                    "Financial calculations",
                    "Scientific notation",
                    "Statistics and data analysis"
                ]
            },

            equivalent_fractions: {
                title: "Equivalent Fractions",
                concepts: [
                    "Different fractions representing same value",
                    "Multiply/divide numerator and denominator by same number",
                    "Infinite equivalent fractions for any fraction",
                    "Simplest form is unique"
                ],
                theory: "Equivalent fractions are different representations of the same rational number. They're created by multiplying or dividing both parts by the same non-zero number.",
                keyFormulas: {
                    "Multiply": "(a/b) = (a×n)/(b×n) for any n ≠ 0",
                    "Divide": "(a/b) = (a÷n)/(b÷n) for any n ≠ 0, n divides both a and b",
                    "Test Equivalence": "a/b = c/d if and only if a×d = b×c"
                },
                applications: [
                    "Finding common denominators",
                    "Comparing fractions",
                    "Adding and subtracting fractions",
                    "Scaling recipes"
                ]
            },

            mixed_improper: {
                title: "Mixed Numbers and Improper Fractions",
                concepts: [
                    "Mixed number: whole + fraction",
                    "Improper fraction: numerator ≥ denominator",
                    "Converting between forms",
                    "Both represent same value"
                ],
                theory: "Mixed numbers and improper fractions are two ways to represent values greater than or equal to 1. Each form is useful in different contexts.",
                keyFormulas: {
                    "Mixed to Improper": "a b/c = (a×c + b)/c",
                    "Improper to Mixed": "a/b = (a ÷ b) R (a mod b), written as quotient remainder/b"
                },
                conversions: {
                    "Example 1": "2¾ = (2×4 + 3)/4 = 11/4",
                    "Example 2": "17/5 = 3 R 2 = 3⅖"
                },
                applications: [
                    "Measurements (2½ inches)",
                    "Time (1¼ hours)",
                    "Cooking (1⅓ cups)",
                    "Distance calculations"
                ]
            },

            gcd_lcm: {
                title: "GCD and LCM",
                concepts: [
                    "GCD: Greatest Common Divisor",
                    "LCM: Least Common Multiple",
                    "Used in fraction operations",
                    "Multiple methods to find each"
                ],
                theory: "GCD and LCM are fundamental concepts in number theory with important applications in fractions.",
                keyFormulas: {
                    "GCD": "Largest number dividing both",
                    "LCM": "Smallest number divisible by both",
                    "Relationship": "GCD(a,b) × LCM(a,b) = a × b"
                },
                methods: {
                    "Listing Factors": "List all factors and find largest common",
                    "Prime Factorization": "Break into primes, take common factors",
                    "Euclidean Algorithm": "Successive division with remainders",
                    "Division Method": "Divide repeatedly by common factors"
                },
                applications: [
                    "Simplifying fractions (GCD)",
                    "Adding fractions (LCM)",
                    "Scheduling problems",
                    "Pattern repetition"
                ]
            },

            fraction_types: {
                title: "Types of Fractions",
                concepts: [
                    "Unit fractions: numerator is 1",
                    "Proper fractions: value < 1",
                    "Improper fractions: value ≥ 1",
                    "Complex fractions: fraction in numerator or denominator"
                ],
                theory: "Different types of fractions have different properties and applications.",
                examples: {
                    "Unit": "1/2, 1/3, 1/4, 1/5",
                    "Proper": "3/4, 5/8, 2/3",
                    "Improper": "5/3, 7/4, 11/5",
                    "Complex": "(1/2)/(3/4) or 2/(3/4)"
                },
                applications: [
                    "Unit fractions in ancient mathematics",
                    "Proper fractions for parts of whole",
                    "Improper fractions in division",
                    "Complex fractions in rates"
                ]
            },

            decimal_types: {
                title: "Types of Decimals",
                concepts: [
                    "Terminating: finite digits",
                    "Repeating: infinite repeating pattern",
                    "Non-repeating, non-terminating: irrational",
                    "All fractions are terminating or repeating"
                ],
                theory: "Rational numbers (fractions) always produce terminating or repeating decimals. Irrational numbers have non-repeating, non-terminating decimals.",
                examples: {
                    "Terminating": "0.5, 0.25, 0.125, 0.75",
                    "Repeating": "0.333..., 0.666..., 0.142857142857...",
                    "Irrational": "π, √2, e (cannot be written as fractions)"
                },
                notation: {
                    "Bar Notation": "0.3̅ means 0.333...",
                    "Parentheses": "0.(3) means 0.333...",
                    "Dots": "0.3̇ means 0.333..."
                },
                applications: [
                    "Understanding rational vs irrational",
                    "Calculator limitations",
                    "Precision in measurements",
                    "Computer representation of numbers"
                ]
            }
        };
    }

    initializeFractionSolvers() {
        this.fractionTypes = {
            simplify_fraction: {
                patterns: [
                    /(\d+)\s*\/\s*(\d+)/,
                    /simplify/i,
                    /reduce/i,
                    /lowest\s+terms/i
                ],
                solver: this.simplifyFraction.bind(this),
                name: 'Simplify Fraction',
                category: 'simplify_fraction',
                description: 'Reduces fraction to lowest terms'
            },

            decimal_to_fraction_terminating: {
                patterns: [
                    /0\.\d+$/,
                    /\d+\.\d+$/,
                    /decimal.*fraction/i,
                    /convert.*decimal/i
                ],
                solver: this.decimalToFractionTerminating.bind(this),
                name: 'Decimal to Fraction (Terminating)',
                category: 'decimal_to_fraction',
                description: 'Converts terminating decimal to fraction'
            },

            decimal_to_fraction_repeating: {
                patterns: [
                    /0\.\d*\(\d+\)/,
                    /0\.\d*\[\d+\]/,
                    /repeating/i,
                    /recurring/i
                ],
                solver: this.decimalToFractionRepeating.bind(this),
                name: 'Decimal to Fraction (Repeating)',
                category: 'decimal_to_fraction',
                description: 'Converts repeating decimal to fraction'
            },

            improper_to_mixed: {
                patterns: [
                    /improper.*mixed/i,
                    /convert.*mixed/i
                ],
                solver: this.improperToMixed.bind(this),
                name: 'Improper to Mixed Number',
                category: 'conversion',
                description: 'Converts improper fraction to mixed number'
            },

            mixed_to_improper: {
                patterns: [
                    /mixed.*improper/i,
                    /\d+\s+\d+\/\d+/
                ],
                solver: this.mixedToImproper.bind(this),
                name: 'Mixed to Improper Fraction',
                category: 'conversion',
                description: 'Converts mixed number to improper fraction'
            },

            fraction_to_decimal: {
                patterns: [
                    /fraction.*decimal/i,
                    /convert.*decimal/i
                ],
                solver: this.fractionToDecimal.bind(this),
                name: 'Fraction to Decimal',
                category: 'conversion',
                description: 'Converts fraction to decimal'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            simplify_fraction: {
                'Find GCD': [
                    'Finding GCF instead of GCD',
                    'Missing common factors',
                    'Only dividing one part of fraction',
                    'Stopping before reaching lowest terms'
                ],
                'Divide by GCD': [
                    'Dividing only numerator or only denominator',
                    'Arithmetic errors in division',
                    'Not checking if further simplification possible'
                ]
            },
            decimal_to_fraction: {
                'Count decimal places': [
                    'Miscounting decimal places',
                    'Forgetting about repeating digits',
                    'Incorrect power of 10'
                ],
                'Simplify result': [
                    'Forgetting to simplify',
                    'Stopping at non-simplified form',
                    'Missing common factors'
                ],
                'Handle repeating': [
                    'Not recognizing repeating pattern',
                    'Using wrong number of 9s',
                    'Mixing repeating and non-repeating parts'
                ]
            },
            mixed_improper: {
                'Multiply and add': [
                    'Adding instead of multiplying first',
                    'Forgetting to add numerator',
                    'Wrong order of operations'
                ],
                'Divide for quotient': [
                    'Using wrong division direction',
                    'Forgetting remainder',
                    'Incorrect whole number part'
                ]
            }
        };

        this.errorPrevention = {
            gcd_calculation: {
                reminder: 'Double-check GCD by verifying both numbers divide evenly',
                method: 'Use Euclidean algorithm or prime factorization for accuracy'
            },
            decimal_places: {
                reminder: 'Count decimal places carefully from left to right',
                method: 'Write out: 0.25 has 2 places, so denominator is 10² = 100'
            },
            simplification: {
                reminder: 'Always check if result can be simplified further',
                method: 'Verify GCD of final numerator and denominator is 1'
            },
            repeating_decimals: {
                reminder: 'Number of repeating digits determines denominator (9, 99, 999...)',
                method: 'Use algebraic method: multiply by appropriate power of 10'
            },
            zero_denominator: {
                reminder: 'Denominator can never be zero',
                method: 'Always check denominator is non-zero before proceeding'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why fractions work and their meaning',
                language: 'intuitive and visual'
            },
            procedural: {
                focus: 'Step-by-step process to simplify or convert',
                language: 'clear instructions'
            },
            visual: {
                focus: 'Diagrams and visual models',
                language: 'spatial and graphical'
            },
            numerical: {
                focus: 'Computational steps and arithmetic',
                language: 'precise calculations'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'simple fractions like 1/2, 1/4'
            },
            intermediate: {
                vocabulary: 'standard mathematical terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of simple and complex fractions'
            },
            ELI5: {
                vocabulary: 'explain like I\'m 5 - simplest possible terms',
                detail: 'every tiny step explained with pictures',
                examples: 'pizza slices, cookie pieces, toy sharing',
                analogies: true,
                visualization: 'simple drawings and models'
            },
            detailed: {
                vocabulary: 'full mathematical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'complex fractions and edge cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            cooking: {
                scenario: "Recipe scaling and measurement",
                examples: [
                    "Recipe calls for 3/4 cup sugar, you want to make 1/2 the recipe",
                    "Need to convert 0.75 cups to a fractional measurement"
                ],
                context: "Cooking requires accurate fraction conversions and simplification",
                fractionTypes: ['proper', 'mixed', 'decimal_conversion']
            },
            construction: {
                scenario: "Measurements and cuts",
                examples: [
                    "Board is 47/8 inches, need to cut it in half",
                    "Drill bit size 0.375 inches - what fraction is this?"
                ],
                context: "Construction uses fractional inch measurements",
                fractionTypes: ['mixed', 'improper', 'decimal_conversion']
            },
            finance: {
                scenario: "Money and percentages",
                examples: [
                    "Stock price is $47.25, express as mixed number",
                    "Interest rate is 0.045, what fraction is this?"
                ],
                context: "Financial calculations often involve decimals and fractions",
                fractionTypes: ['decimal_conversion', 'simplification']
            },
            time: {
                scenario: "Hours, minutes, and time fractions",
                examples: [
                    "Worked 2.5 hours, how many hours and minutes?",
                    "45 minutes is what fraction of an hour?"
                ],
                context: "Time calculations use fractions of hours",
                fractionTypes: ['decimal_conversion', 'simplification', 'mixed']
            },
            music: {
                scenario: "Musical note durations",
                examples: [
                    "Half note = 1/2, quarter note = 1/4",
                    "Dotted quarter = 3/8 of whole note"
                ],
                context: "Music theory uses fractions for rhythm",
                fractionTypes: ['unit_fractions', 'simplification']
            },
            sports: {
                scenario: "Statistics and averages",
                examples: [
                    "Batting average .333 as a fraction",
                    "Won 15 out of 20 games - simplify fraction"
                ],
                context: "Sports statistics use decimals and fractions",
                fractionTypes: ['decimal_conversion', 'simplification']
            },
            shopping: {
                scenario: "Sales and discounts",
                examples: [
                    "Item is 0.75 off - what fraction discount?",
                    "Bought 3/4 pound of cheese at $8.00/lb"
                ],
                context: "Shopping involves fraction and decimal calculations",
                fractionTypes: ['decimal_conversion', 'simplification']
            },
            measurement: {
                scenario: "Unit conversions",
                examples: [
                    "0.5 kilometers = what fraction of a km?",
                    "3/8 inch = what decimal?"
                ],
                context: "Measurements often need fraction/decimal conversion",
                fractionTypes: ['conversion', 'simplification']
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            simplify_fraction: {
                skills: ['Division', 'Finding GCD', 'Multiplication', 'Factors'],
                priorKnowledge: [
                    'What GCD means',
                    'How to find factors',
                    'Equivalent fractions concept',
                    'Division of whole numbers'
                ],
                checkQuestions: [
                    "What is 12 ÷ 4?",
                    "What is the GCD of 12 and 18?",
                    "List factors of 24",
                    "Is 2/4 equivalent to 1/2?"
                ]
            },
            decimal_to_fraction: {
                skills: [
                    'Decimal place value',
                    'Powers of 10',
                    'Simplifying fractions',
                    'Understanding repeating decimals'
                ],
                priorKnowledge: [
                    'Decimal notation',
                    'Place value (tenths, hundredths)',
                    'What repeating means',
                    'Basic fraction simplification'
                ],
                checkQuestions: [
                    "What place is the 5 in 0.35?",
                    "What is 10²?",
                    "Simplify 25/100",
                    "What does 0.333... mean?"
                ]
            },
            mixed_improper: {
                skills: [
                    'Multiplication',
                    'Division with remainders',
                    'Addition',
                    'Understanding mixed numbers'
                ],
                priorKnowledge: [
                    'What mixed number means',
                    'What improper fraction means',
                    'Division algorithm',
                    'Order of operations'
                ],
                checkQuestions: [
                    "What is 3 × 4 + 2?",
                    "What is 17 ÷ 5 with remainder?",
                    "What does 2³⁄₄ mean?",
                    "Is 7/4 greater than 1?"
                ]
            },
            gcd_lcm: {
                skills: [
                    'Prime factorization',
                    'Listing factors',
                    'Euclidean algorithm',
                    'Divisibility rules'
                ],
                priorKnowledge: [
                    'What prime numbers are',
                    'Factor trees',
                    'Division',
                    'Common multiples'
                ],
                checkQuestions: [
                    "Is 17 prime?",
                    "What are prime factors of 12?",
                    "What divides evenly into both 12 and 18?",
                    "What is a common multiple of 4 and 6?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            visual_model: {
                description: "Fraction as parts of a whole shape",
                analogy: "Like slices of a pizza or pieces of a pie",
                visualization: "Circle or rectangle divided into equal parts",
                suitableFor: ['all_fractions'],
                explanation: "Shaded parts show numerator, total parts show denominator"
            },
            number_line: {
                description: "Fraction as point on number line",
                analogy: "Like a position on a ruler",
                visualization: "Mark fraction position between whole numbers",
                suitableFor: ['all_fractions', 'comparing'],
                explanation: "Shows fraction's value relative to 0 and 1"
            },
            area_model: {
                description: "Rectangle divided into grid",
                analogy: "Like tiles on a floor",
                visualization: "Grid with shaded squares",
                suitableFor: ['simplification', 'multiplication'],
                explanation: "Shows parts of a whole using arrays"
            },
            set_model: {
                description: "Fraction of a group of objects",
                analogy: "Like sorting toys or dividing candy",
                visualization: "Groups of objects with some highlighted",
                suitableFor: ['all_fractions'],
                explanation: "Shows fraction as part of a collection"
            },
            bar_model: {
                description: "Bar divided into equal segments",
                analogy: "Like a chocolate bar or measuring tape",
                visualization: "Rectangle split into equal sections",
                suitableFor: ['comparing', 'adding', 'simplifying'],
                explanation: "Easy to see equivalent fractions and compare sizes"
            },
            factor_tree: {
                description: "Breaking numbers into prime factors",
                analogy: "Like a family tree for numbers",
                visualization: "Tree diagram showing factorization",
                suitableFor: ['simplification', 'GCD'],
                explanation: "Shows all factors to find GCD"
            },
            place_value: {
                description: "Decimal place value chart",
                analogy: "Like organizing coins by value",
                visualization: "Table showing ones, tenths, hundredths",
                suitableFor: ['decimal_conversion'],
                explanation: "Shows how decimal positions relate to fractions"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            simplify_fraction: {
                beginner: [
                    {
                        problem: "2/4",
                        solution: "1/2",
                        steps: ["GCD(2,4) = 2", "2÷2 = 1", "4÷2 = 2", "Answer: 1/2"],
                        difficulty: "easy"
                    },
                    {
                        problem: "6/8",
                        solution: "3/4",
                        steps: ["GCD(6,8) = 2", "6÷2 = 3", "8÷2 = 4", "Answer: 3/4"],
                        difficulty: "easy"
                    },
                    {
                        problem: "10/15",
                        solution: "2/3",
                        steps: ["GCD(10,15) = 5", "10÷5 = 2", "15÷5 = 3", "Answer: 2/3"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "24/36",
                        solution: "2/3",
                        steps: ["GCD(24,36) = 12", "24÷12 = 2", "36÷12 = 3", "Answer: 2/3"],
                        difficulty: "medium"
                    },
                    {
                        problem: "45/60",
                        solution: "3/4",
                        steps: ["GCD(45,60) = 15", "45÷15 = 3", "60÷15 = 4", "Answer: 3/4"],
                        difficulty: "medium"
                    },
                    {
                        problem: "18/48",
                        solution: "3/8",
                        steps: ["GCD(18,48) = 6", "18÷6 = 3", "48÷6 = 8", "Answer: 3/8"],
                        difficulty: "medium"
                    }
                ],
                advanced: [
                    {
                        problem: "144/180",
                        solution: "4/5",
                        steps: ["GCD(144,180) = 36", "144÷36 = 4", "180÷36 = 5", "Answer: 4/5"],
                        difficulty: "hard"
                    },
                    {
                        problem: "135/225",
                        solution: "3/5",
                        steps: ["GCD(135,225) = 45", "135÷45 = 3", "225÷45 = 5", "Answer: 3/5"],
                        difficulty: "hard"
                    }
                ]
            },
            decimal_to_fraction: {
                beginner: [
                    {
                        problem: "0.5",
                        solution: "1/2",
                        steps: ["0.5 = 5/10", "GCD(5,10) = 5", "5÷5 / 10÷5 = 1/2"],
                        difficulty: "easy"
                    },
                    {
                        problem: "0.25",
                        solution: "1/4",
                        steps: ["0.25 = 25/100", "GCD(25,100) = 25", "25÷25 / 100÷25 = 1/4"],
                        difficulty: "easy"
                    },
                    {
                        problem: "0.75",
                        solution: "3/4",
                        steps: ["0.75 = 75/100", "GCD(75,100) = 25", "75÷25 / 100÷25 = 3/4"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "0.375",
                        solution: "3/8",
                        steps: ["0.375 = 375/1000", "GCD(375,1000) = 125", "375÷125 / 1000÷125 = 3/8"],
                        difficulty: "medium"
                    },
                    {
                        problem: "0.625",
                        solution: "5/8",
                        steps: ["0.625 = 625/1000", "GCD(625,1000) = 125", "625÷125 / 1000÷125 = 5/8"],
                        difficulty: "medium"
                    }
                ],
                advanced: [
                    {
                        problem: "0.333...",
                        solution: "1/3",
                        steps: ["Let x = 0.333...", "10x = 3.333...", "10x - x = 3", "9x = 3", "x = 3/9 = 1/3"],
                        difficulty: "hard"
                    },
                    {
                        problem: "0.142857142857...",
                        solution: "1/7",
                        steps: ["Repeating block: 142857 (6 digits)", "x/999999 where x = 142857", "Simplify to 1/7"],
                        difficulty: "hard"
                    }
                ]
            },
            mixed_improper: {
                beginner: [
                    {
                        problem: "7/4 to mixed",
                        solution: "1¾",
                        steps: ["7 ÷ 4 = 1 R 3", "Answer: 1³⁄₄"],
                        difficulty: "easy"
                    },
                    {
                        problem: "2¼ to improper",
                        solution: "9/4",
                        steps: ["2 × 4 = 8", "8 + 1 = 9", "Answer: 9/4"],
                        difficulty: "easy"
                    }
                ],
                intermediate: [
                    {
                        problem: "23/5 to mixed",
                        solution: "4⅗",
                        steps: ["23 ÷ 5 = 4 R 3", "Answer: 4³⁄₅"],
                        difficulty: "medium"
                    },
                    {
                        problem: "5⅔ to improper",
                        solution: "17/3",
                        steps: ["5 × 3 = 15", "15 + 2 = 17", "Answer: 17/3"],
                        difficulty: "medium"
                    }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            adding_numerators_denominators: {
                misconception: "To simplify, just divide top and bottom by any same number",
                reality: "Must divide by the GCD to get fully simplified form",
                correctiveExample: "6/8: Some divide by 2 to get 3/4 (correct). GCD is 2, so this IS simplified.",
                commonIn: ['simplify_fraction']
            },
            decimal_place_confusion: {
                misconception: "0.5 = 5/100 because there's a 5",
                reality: "0.5 = 5/10 because 5 is in the tenths place",
                correctiveExample: "0.5 has 1 decimal place, so denominator is 10¹ = 10, giving 5/10 = 1/2",
                commonIn: ['decimal_to_fraction']
            },
            repeating_decimal_nines: {
                misconception: "0.333... = 3/10 or 33/100",
                reality: "Repeating decimals need algebraic method or pattern recognition: 0.333... = 1/3",
                correctiveExample: "One repeating digit goes over 9: 0.3̅ = 3/9 = 1/3",
                commonIn: ['decimal_to_fraction']
            },
            mixed_number_conversion: {
                misconception: "2³⁄₄ = 2×3/4 = 6/4",
                reality: "2³⁄₄ = (2×4+3)/4 = 11/4. Must multiply whole by denominator, then add numerator",
                correctiveExample: "2³⁄₄ means 2 + ³⁄₄, which is (8+3)/4 = 11/4",
                commonIn: ['mixed_to_improper']
            },
            gcd_versus_gcf: {
                misconception: "GCD and GCF are different",
                reality: "GCD (Greatest Common Divisor) and GCF (Greatest Common Factor) are the same thing",
                correctiveExample: "GCD(12,18) = GCF(12,18) = 6",
                commonIn: ['simplify_fraction']
            },
            zero_denominator: {
                misconception: "0/5 = undefined, same as 5/0",
                reality: "0/5 = 0 (zero divided by anything is zero), but 5/0 is undefined",
                correctiveExample: "0÷5 = 0, but 5÷0 has no answer (undefined)",
                commonIn: ['all_fraction_operations']
            },
            equivalent_means_same: {
                misconception: "1/2 and 2/4 are different numbers",
                reality: "1/2 = 2/4 = 0.5, they're equivalent (same value, different form)",
                correctiveExample: "Half a pizza is same amount as 2 quarters of a pizza",
                commonIn: ['simplify_fraction', 'equivalent_fractions']
            },
            improper_is_wrong: {
                misconception: "Improper fractions are incorrect or 'bad'",
                reality: "Improper fractions are perfectly valid, just another form",
                correctiveExample: "7/4 and 1¾ both equal 1.75, neither is 'wrong'",
                commonIn: ['mixed_improper']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            fraction_as_division: {
                analogy: "Sharing equally",
                explanation: "3/4 means divide 3 things among 4 people, each gets 3/4",
                suitableFor: ['all_fractions'],
                ELI5: "If you have 3 cookies and 4 friends, each friend gets 3/4 of a cookie"
            },
            simplifying: {
                analogy: "Packing efficiently",
                explanation: "Just like 100 pennies = 1 dollar (simpler), 4/8 = 1/2 (simpler form)",
                suitableFor: ['simplify_fraction'],
                ELI5: "Would you rather say 'four out of eight' or 'half'? Half is simpler!"
            },
            gcd_finding: {
                analogy: "Finding biggest box that fits",
                explanation: "GCD is like finding the largest box that can evenly hold both piles",
                suitableFor: ['simplify_fraction', 'gcd'],
                ELI5: "Imagine you have 12 apples and 18 oranges. What's the biggest group size that divides both evenly? 6!"
            },
            decimal_places: {
                analogy: "Money and place value",
                explanation: "0.25 = 25 cents = 25/100 = 1/4 dollar",
                suitableFor: ['decimal_to_fraction'],
                ELI5: "25 cents is 25 pennies out of 100 pennies in a dollar, so 25/100 = 1/4"
            },
            repeating_decimal: {
                analogy: "Pattern that never ends",
                explanation: "Like a song on repeat forever, 0.333... keeps going",
                suitableFor: ['decimal_to_fraction'],
                ELI5: "Imagine counting 3, 3, 3, 3... forever. That's what 0.333... is doing!"
            },
            mixed_number: {
                analogy: "Whole pizzas plus slices",
                explanation: "2³⁄₄ means 2 whole pizzas and 3 out of 4 slices of another",
                suitableFor: ['mixed_improper'],
                ELI5: "If you have 2 whole cookies and 3 pieces of a cookie cut in 4 pieces, that's 2³⁄₄ cookies"
            },
            improper_fraction: {
                analogy: "More than one whole",
                explanation: "7/4 is like having 7 quarter-pizzas, which makes more than one whole pizza",
                suitableFor: ['mixed_improper'],
                ELI5: "If you have 7 quarters (25-cent pieces), that's more than 1 dollar! It's 7/4 dollars"
            },
            equivalent_fractions: {
                analogy: "Different names, same thing",
                explanation: "Like 'refrigerator' and 'fridge' - different words, same thing. 1/2 = 2/4",
                suitableFor: ['equivalent_fractions'],
                ELI5: "Half a pizza is the same as 2 out of 4 slices. Different way to say it, same amount!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            simplify_fraction: {
                level1: "What do you need to find to simplify a fraction?",
                level2: "Find the GCD (Greatest Common Divisor) of the numerator and denominator",
                level3: "Divide both numerator and denominator by their GCD",
                level4: "For {numerator}/{denominator}, GCD is {gcd}, so answer is {simplified}"
            },
            decimal_to_fraction_terminating: {
                level1: "How many decimal places are there?",
                level2: "Write the decimal as a fraction with denominator as power of 10",
                level3: "Count places: {places} places means denominator is {denominator}",
                level4: "{decimal} = {numerator}/{denominator}, simplified to {simplified}"
            },
            decimal_to_fraction_repeating: {
                level1: "Is this decimal repeating? What pattern repeats?",
                level2: "Use algebraic method: let x = the decimal",
                level3: "Multiply by 10^n where n is number of repeating digits",
                level4: "Subtract to eliminate repeating part, then solve for x"
            },
            improper_to_mixed: {
                level1: "How many times does the denominator go into the numerator?",
                level2: "Divide numerator by denominator to get quotient and remainder",
                level3: "Quotient is whole number, remainder goes over denominator",
                level4: "{numerator}÷{denominator} = {quotient} R {remainder}, so {mixed}"
            },
            mixed_to_improper: {
                level1: "What operation combines the whole number with the fraction?",
                level2: "Multiply whole number by denominator, then add numerator",
                level3: "({whole} × {denominator}) + {numerator} = {improper_numerator}",
                level4: "{mixed} = {improper_numerator}/{denominator}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Simplify: 6/9",
                    answer: "2/3",
                    assesses: "simplify_fraction",
                    difficulty: "basic"
                },
                {
                    question: "Convert to fraction: 0.6",
                    answer: "3/5",
                    assesses: "decimal_to_fraction",
                    difficulty: "basic"
                },
                {
                    question: "Convert to mixed number: 11/4",
                    answer: "2¾",
                    assesses: "improper_to_mixed",
                    difficulty: "basic"
                },
                {
                    question: "What is GCD(12, 18)?",
                    answer: 6,
                    assesses: "gcd",
                    difficulty: "intermediate"
                }
            ],
            formative: [
                {
                    question: "To simplify 8/12, what should you divide by?",
                    options: ["2", "3", "4", "6"],
                    correct: "4",
                    explanation: "GCD(8,12) = 4, so divide both by 4"
                },
                {
                    question: "0.75 has how many decimal places?",
                    options: ["1", "2", "3", "75"],
                    correct: "2",
                    explanation: "Two digits after decimal point: 7 and 5"
                },
                {
                    question: "To convert 3²⁄₅ to improper, first step is:",
                    options: ["Add 3+2", "Multiply 3×5", "Divide 5 by 3", "Add 3+5"],
                    correct: "Multiply 3×5",
                    explanation: "Multiply whole number by denominator first"
                }
            ],
            summative: [
                {
                    question: "Simplify: 144/180",
                    answer: "4/5",
                    showsWork: true,
                    rubric: {
                        find_gcd: 2,
                        divide_correctly: 2,
                        verify_simplified: 1
                    }
                },
                {
                    question: "Convert 0.454545... to fraction",
                    answer: "5/11",
                    showsWork: true,
                    rubric: {
                        recognize_repeating: 1,
                        use_method: 2,
                        simplify: 2
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "Simplify: 2/4",
                    "Simplify: 3/6",
                    "Convert: 0.5",
                    "Convert: 0.25",
                    "11/4 as mixed number",
                    "2½ as improper fraction"
                ],
                medium: [
                    "Simplify: 18/24",
                    "Simplify: 45/60",
                    "Convert: 0.375",
                    "Convert: 0.625",
                    "23/5 as mixed number",
                    "4³⁄₈ as improper fraction"
                ],
                hard: [
                    "Simplify: 144/216",
                    "Simplify: 315/450",
                    "Convert: 0.166666...",
                    "Convert: 0.142857142857...",
                    "Convert: 0.83333...",
                    "Simplify: 1001/1430"
                ]
            },
            byObjective: {
                canSimplify: [
                    "4/8",
                    "6/9",
                    "10/15",
                    "12/16",
                    "15/20"
                ],
                canConvertTerminating: [
                    "0.2",
                    "0.5",
                    "0.75",
                    "0.125",
                    "0.625"
                ],
                canConvertRepeating: [
                    "0.333...",
                    "0.666...",
                    "0.111...",
                    "0.272727..."
                ],
                canConvertMixed: [
                    "7/3 to mixed",
                    "11/4 to mixed",
                    "2⅓ to improper",
                    "3¾ to improper"
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            simplification: {
                "Find GCD First": "Most reliable - find GCD then divide both parts",
                "Factor Tree": "Good for larger numbers - break into prime factors",
                "Successive Division": "Divide by small primes repeatedly until no common factors",
                "List Factors": "Works for small numbers - list all factors and find largest common"
            },
            decimal_conversion: {
                "Count Places": "For terminating decimals - count places, use power of 10",
                "Algebraic Method": "For repeating decimals - multiply and subtract",
                "Pattern Recognition": "Recognize common patterns (0.333... = 1/3, 0.666... = 2/3)",
                "Calculator Check": "Use calculator to verify decimal form of fraction"
            },
            mixed_improper: {
                "Division Algorithm": "Divide for mixed, multiply and add for improper",
                "Visualization": "Draw pictures to understand the conversion",
                "Mental Math": "For simple cases, do it mentally",
                "Check Work": "Convert back to verify"
            },
            gcd_methods: {
                "Euclidean Algorithm": "Most efficient for large numbers",
                "Prime Factorization": "Clear and systematic",
                "Listing": "Good for small numbers",
                "Calculator GCD function": "When available and allowed"
            },
            verification: {
                "Convert Back": "Convert result back to original form",
                "Calculator": "Check decimal equivalence",
                "Cross Multiply": "For equivalent fractions",
                "Visual Model": "Draw to verify"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Simplification Sprint",
                    timeLimit: 60,
                    problems: [
                        "2/4", "3/6", "4/8", "6/9", "10/15",
                        "12/16", "15/20", "8/12", "9/12", "6/8"
                    ]
                },
                {
                    name: "Decimal Conversion Challenge",
                    timeLimit: 90,
                    problems: [
                        "0.5", "0.25", "0.75", "0.2", "0.4",
                        "0.125", "0.375", "0.6", "0.8"
                    ]
                },
                {
                    name: "Mixed Number Mastery",
                    timeLimit: 120,
                    problems: [
                        "7/4", "11/3", "13/5", "17/6", "19/4",
                        "2½", "3¼", "4⅔", "5⅗", "1⅞"
                    ]
                }
            ],
            puzzles: [
                {
                    name: "Fraction Detective",
                    problem: "Find a fraction that simplifies to 3/4 and has denominator 20",
                    solution: "15/20",
                    explanation: "3/4 × 5/5 = 15/20"
                },
                {
                    name: "Decimal Mystery",
                    problem: "What fraction becomes 0.625 as a decimal?",
                    solution: "5/8",
                    explanation: "625/1000 = 5/8 when simplified"
                },
                {
                    name: "Pattern Recognition",
                    problem: "What decimal is 1/7?",
                    solution: "0.142857142857...",
                    explanation: "Repeating 6-digit pattern"
                },
                {
                    name: "GCD Challenge",
                    problem: "Find two numbers whose GCD is 17",
                    solution: "Many answers: 17 & 34, 51 & 68, etc.",
                    explanation: "Any multiples of 17"
                }
            ],
            applications: [
                {
                    scenario: "Recipe Scaling",
                    problem: "Recipe needs ³⁄₄ cup sugar for 12 cookies. How much for 18 cookies?",
                    solution: "1⅛ cups",
                    method: "³⁄₄ × 1.5 = 9/8 = 1⅛"
                },
                {
                    scenario: "Measurement",
                    problem: "Drill bit is 0.375 inches. What fraction?",
                    solution: "³⁄₈ inch",
                    method: "375/1000 = 3/8"
                },
                {
                    scenario: "Time Calculation",
                    problem: "Worked 2.75 hours. How many hours and minutes?",
                    solution: "2 hours 45 minutes",
                    method: "0.75 = ³⁄₄ hour = 45 minutes"
                },
                {
                    scenario: "Sports Statistics",
                    problem: "Made 15 out of 25 free throws. Simplify fraction and find decimal",
                    solution: "³⁄₅ = 0.6",
                    method: "15/25 ÷ 5/5 = 3/5 = 0.6"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Simplify 12/18:",
                        "Divide by 2: 6/9",
                        "This is simplified" // ERROR: can simplify further
                    ],
                    correctAnswer: "2/3",
                    errorType: "Stopped before reaching lowest terms (GCD is 6, not 2)"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Convert 0.25:",
                        "0.25 = 25/10", // ERROR: wrong denominator
                        "Simplify: 5/2"
                    ],
                    correctAnswer: "1/4",
                    errorType: "Wrong power of 10 (should be 100, not 10)"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "Convert 2³⁄₄ to improper:",
                        "2 × 3 = 6", // ERROR: should multiply by 4
                        "6 + 4 = 10",
                        "Answer: 10/3"
                    ],
                    correctAnswer: "11/4",
                    errorType: "Multiplied by numerator instead of denominator"
                }
            ]
        };
    }

    initializeVisualizationDatabase() {
        this.visualizations = {
            fraction_circles: {
                description: "Circle diagrams for fractions",
                use: "Show parts of a whole",
                examples: "1/2 = half circle shaded, 3/4 = three quarters shaded"
            },
            fraction_bars: {
                description: "Rectangle bars divided into parts",
                use: "Compare fractions, show equivalence",
                examples: "1/2 bar same length as 2/4 bar"
            },
            number_line: {
                description: "Fractions marked on line from 0 to 1 (or beyond)",
                use: "Show fraction magnitude and order",
                examples: "0.25, 0.5, 0.75, 1.0 marked with fractions below"
            },
            factor_tree: {
                description: "Tree showing prime factorization",
                use: "Find GCD through prime factors",
                examples: "12 = 2×2×3, 18 = 2×3×3, GCD = 2×3 = 6"
            },
            place_value_chart: {
                description: "Table showing decimal places",
                use: "Understand decimal to fraction conversion",
                examples: "0.375 → 3 tenths, 7 hundredths, 5 thousandths"
            },
            pizza_model: {
                description: "Pizza slices for fractions",
                use: "Real-world visualization",
                examples: "3/8 of pizza = 3 slices of 8-slice pizza"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveFractionProblem(config) {
        const { fraction, decimal, operation, problemType, context } = config;

        try {
            this.currentProblem = this.parseFractionProblem(fraction, decimal, operation, problemType, context);
            this.currentSolution = this.solveFractionProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateFractionSteps(this.currentProblem, this.currentSolution);
            this.generateFractionVisualization();
            this.generateFractionWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve fraction problem: ${error.message}`);
        }
    }

    parseFractionProblem(fraction, decimal, operation, problemType, context) {
        // Auto-detect problem type if not specified
        if (!problemType) {
            if (fraction && fraction.includes('/')) {
                problemType = 'simplify_fraction';
            } else if (decimal) {
                problemType = decimal.includes('...') || decimal.includes('(') ?
                    'decimal_to_fraction_repeating' : 'decimal_to_fraction_terminating';
            }
        }

        const problem = {
            originalInput: fraction || decimal,
            type: problemType,
            context: context || {},
            parsedAt: new Date().toISOString()
        };

        // Parse based on type
        if (problemType === 'simplify_fraction') {
            const match = fraction.match(/(\d+)\s*\/\s*(\d+)/);
            if (match) {
                problem.numerator = parseInt(match[1]);
                problem.denominator = parseInt(match[2]);
            }
        } else if (problemType.includes('decimal_to_fraction')) {
            problem.decimal = decimal;
            problem.isRepeating = decimal.includes('...') || decimal.includes('(') || decimal.includes('[');
        } else if (problemType === 'improper_to_mixed') {
            const match = fraction.match(/(\d+)\s*\/\s*(\d+)/);
            if (match) {
                problem.numerator = parseInt(match[1]);
                problem.denominator = parseInt(match[2]);
            }
        } else if (problemType === 'mixed_to_improper') {
            const match = fraction.match(/(\d+)\s+(\d+)\s*\/\s*(\d+)/);
            if (match) {
                problem.whole = parseInt(match[1]);
                problem.numerator = parseInt(match[2]);
                problem.denominator = parseInt(match[3]);
            }
        }

        return problem;
    }

    solveFractionProblem_Internal(problem) {
        const solver = this.fractionTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver for problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // FRACTION SOLVERS

    simplifyFraction(problem) {
        const { numerator, denominator } = problem;

        if (denominator === 0) {
            return {
                error: 'Denominator cannot be zero',
                type: 'Undefined'
            };
        }

        const gcd = this.findGCD(numerator, denominator);
        const simplifiedNumerator = numerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        return {
            original: `${numerator}/${denominator}`,
            gcd: gcd,
            simplified: `${simplifiedNumerator}/${simplifiedDenominator}`,
            numerator: simplifiedNumerator,
            denominator: simplifiedDenominator,
            isAlreadySimplified: gcd === 1,
            decimal: simplifiedNumerator / simplifiedDenominator,
            type: 'Simplified Fraction',
            category: 'simplify_fraction'
        };
    }

    decimalToFractionTerminating(problem) {
        let decimal = problem.decimal;
        
        // Remove integer part if present
        const parts = decimal.split('.');
        const integerPart = parts[0] !== '0' ? parseInt(parts[0]) : 0;
        const decimalPart = parts[1] || '0';
        
        const decimalPlaces = decimalPart.length;
        const denominator = Math.pow(10, decimalPlaces);
        const numerator = parseInt(decimalPart);

        // Simplify
        const gcd = this.findGCD(numerator, denominator);
        const simplifiedNumerator = numerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        let result = {
            original: decimal,
            decimalPlaces: decimalPlaces,
            unsimplified: `${numerator}/${denominator}`,
            gcd: gcd,
            simplified: `${simplifiedNumerator}/${simplifiedDenominator}`,
            numerator: simplifiedNumerator,
            denominator: simplifiedDenominator,
            type: 'Decimal to Fraction (Terminating)',
            category: 'decimal_to_fraction'
        };

        // Handle integer part
        if (integerPart > 0) {
            const improperNumerator = integerPart * simplifiedDenominator + simplifiedNumerator;
            result.improper = `${improperNumerator}/${simplifiedDenominator}`;
            result.mixed = `${integerPart} ${simplifiedNumerator}/${simplifiedDenominator}`;
        }

        return result;
    }

    decimalToFractionRepeating(problem) {
        let decimal = problem.decimal;
        
        // Extract repeating part
        // Format: 0.333... or 0.(3) or 0.3̅ or 0.[3]
        let repeatingPart, nonRepeatingPart;

        if (decimal.includes('(')) {
            const match = decimal.match(/0\.(\d*)\((\d+)\)/);
            nonRepeatingPart = match[1] || '';
            repeatingPart = match[2];
        } else if (decimal.includes('[')) {
            const match = decimal.match(/0\.(\d*)\[(\d+)\]/);
            nonRepeatingPart = match[1] || '';
            repeatingPart = match[2];
        } else if (decimal.includes('...')) {
            const match = decimal.match(/0\.(\d+)\.\.\./);
            const allDigits = match[1];
            // Assume all digits repeat (simple case)
            repeatingPart = allDigits;
            nonRepeatingPart = '';
        }

        const m = nonRepeatingPart.length;
        const n = repeatingPart.length;

        let numerator, denominator;

        if (m === 0) {
            // Pure repeating: 0.(rep) = rep/999...
            numerator = parseInt(repeatingPart);
            denominator = parseInt('9'.repeat(n));
        } else {
            // Mixed: 0.non(rep)
            const nonRepInt = parseInt(nonRepeatingPart || '0');
            const repInt = parseInt(repeatingPart);
            
            numerator = parseInt(nonRepeatingPart + repeatingPart) - nonRepInt;
            denominator = parseInt('9'.repeat(n) + '0'.repeat(m));
        }

        // Simplify
        const gcd = this.findGCD(numerator, denominator);
        const simplifiedNumerator = numerator / gcd;
        const simplifiedDenominator = denominator / gcd;

        return {
            original: decimal,
            repeatingPart: repeatingPart,
            nonRepeatingPart: nonRepeatingPart,
            unsimplified: `${numerator}/${denominator}`,
            gcd: gcd,
            simplified: `${simplifiedNumerator}/${simplifiedDenominator}`,
            numerator: simplifiedNumerator,
            denominator: simplifiedDenominator,
            type: 'Decimal to Fraction (Repeating)',
            category: 'decimal_to_fraction',
            method: 'Algebraic method for repeating decimals'
        };
    }

    improperToMixed(problem) {
        const { numerator, denominator } = problem;

        const quotient = Math.floor(numerator / denominator);
        const remainder = numerator % denominator;

        return {
            original: `${numerator}/${denominator}`,
            quotient: quotient,
            remainder: remainder,
            mixed: remainder === 0 ? `${quotient}` : `${quotient} ${remainder}/${denominator}`,
            whole: quotient,
            fractionPart: `${remainder}/${denominator}`,
            type: 'Improper to Mixed Number',
            category: 'conversion'
        };
    }

    mixedToImproper(problem) {
        const { whole, numerator, denominator } = problem;

        const improperNumerator = whole * denominator + numerator;

        return {
            original: `${whole} ${numerator}/${denominator}`,
            calculation: `(${whole} × ${denominator}) + ${numerator}`,
            improperNumerator: improperNumerator,
            improper: `${improperNumerator}/${denominator}`,
            numerator: improperNumerator,
            denominator: denominator,
            type: 'Mixed to Improper Fraction',
            category: 'conversion'
        };
    }

    fractionToDecimal(problem) {
        const { numerator, denominator } = problem;
        const decimal = numerator / denominator;

        // Check if terminating or repeating
        let denominatorSimplified = denominator;
        const gcd = this.findGCD(numerator, denominator);
        denominatorSimplified = denominator / gcd;

        // Check if denominator has only factors of 2 and 5 (terminating)
        let temp = denominatorSimplified;
        while (temp % 2 === 0) temp /= 2;
        while (temp % 5 === 0) temp /= 5;
        const isTerminating = temp === 1;

        return {
            original: `${numerator}/${denominator}`,
            decimal: decimal,
            isTerminating: isTerminating,
            type: isTerminating ? 'Terminating Decimal' : 'Repeating Decimal',
            category: 'conversion'
        };
    }

    // HELPER METHODS

    findGCD(a, b) {
        a = Math.abs(a);
        b = Math.abs(b);
        
        while (b !== 0) {
            const temp = b;
            b = a % b;
            a = temp;
        }
        return a;
    }

    findLCM(a, b) {
        return Math.abs(a * b) / this.findGCD(a, b);
    }

    primeFactorization(n) {
        const factors = [];
        let divisor = 2;
        
        while (n >= 2) {
            if (n % divisor === 0) {
                factors.push(divisor);
                n = n / divisor;
            } else {
                divisor++;
            }
        }
        
        return factors;
    }

    // STEP GENERATION

    generateFractionSteps(problem, solution) {
        let baseSteps = this.generateBaseFractionSteps(problem, solution);

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

    generateBaseFractionSteps(problem, solution) {
        const category = this.fractionTypes[problem.type]?.category;

        switch(category) {
            case 'simplify_fraction':
                return this.generateSimplifySteps(problem, solution);
            case 'decimal_to_fraction':
                return problem.type === 'decimal_to_fraction_repeating' ?
                    this.generateRepeatingDecimalSteps(problem, solution) :
                    this.generateTerminatingDecimalSteps(problem, solution);
            case 'conversion':
                return problem.type === 'improper_to_mixed' ?
                    this.generateImproperToMixedSteps(problem, solution) :
                    this.generateMixedToImproperSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generateSimplifySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given Fraction',
            description: 'Start with the original fraction',
            expression: solution.original,
            reasoning: 'We need to reduce this fraction to its lowest terms',
            goalStatement: 'Find the GCD and divide both parts by it'
        });

        if (solution.isAlreadySimplified) {
            steps.push({
                stepNumber: 2,
                step: 'Check if simplified',
                description: 'GCD of numerator and denominator is 1',
                expression: `GCD(${problem.numerator}, ${problem.denominator}) = 1`,
                reasoning: 'When GCD is 1, fraction is already in simplest form',
                conclusion: 'This fraction is already simplified!'
            });
        } else {
            steps.push({
                stepNumber: 2,
                step: 'Find GCD',
                description: `Find the Greatest Common Divisor of ${problem.numerator} and ${problem.denominator}`,
                calculation: this.showGCDCalculation(problem.numerator, problem.denominator),
                result: `GCD = ${solution.gcd}`,
                reasoning: 'GCD is the largest number that divides both evenly',
                method: 'Using Euclidean Algorithm or Prime Factorization'
            });

            steps.push({
                stepNumber: 3,
                step: 'Divide Numerator',
                description: `Divide the numerator by GCD`,
                beforeExpression: problem.numerator,
                operation: `÷ ${solution.gcd}`,
                afterExpression: solution.numerator,
                calculation: `${problem.numerator} ÷ ${solution.gcd} = ${solution.numerator}`,
                reasoning: 'Dividing by GCD reduces the numerator'
            });

            steps.push({
                stepNumber: 4,
                step: 'Divide Denominator',
                description: `Divide the denominator by GCD`,
                beforeExpression: problem.denominator,
                operation: `÷ ${solution.gcd}`,
                afterExpression: solution.denominator,
                calculation: `${problem.denominator} ÷ ${solution.gcd} = ${solution.denominator}`,
                reasoning: 'Dividing by GCD reduces the denominator'
            });

            steps.push({
                stepNumber: 5,
                step: 'Simplified Fraction',
                description: 'Write the fully simplified fraction',
                expression: solution.simplified,
                finalAnswer: true,
                verification: `GCD(${solution.numerator}, ${solution.denominator}) = 1 ✓`,
                reasoning: 'This is the fraction in lowest terms'
            });
        }

        return steps;
    }

    generateTerminatingDecimalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given Decimal',
            description: 'Start with the decimal number',
            expression: solution.original,
            reasoning: 'We need to convert this to a fraction',
            goalStatement: 'Count decimal places and use appropriate power of 10'
        });

        steps.push({
            stepNumber: 2,
            step: 'Count Decimal Places',
            description: 'Count how many digits after the decimal point',
            decimalPlaces: solution.decimalPlaces,
            reasoning: `There are ${solution.decimalPlaces} digits after the decimal`,
            visualHint: 'Each place value represents a power of 10'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write as Fraction',
            description: `Write decimal as fraction with denominator 10^${solution.decimalPlaces}`,
            expression: solution.unsimplified,
            calculation: `${solution.original} = ${solution.unsimplified}`,
            reasoning: `${solution.decimalPlaces} decimal places means denominator is ${Math.pow(10, solution.decimalPlaces)}`,
            placeValueExplanation: this.explainPlaceValue(solution.original)
        });

        if (solution.gcd > 1) {
            steps.push({
                stepNumber: 4,
                step: 'Find GCD',
                description: `Find GCD to simplify`,
                result: `GCD = ${solution.gcd}`,
                reasoning: 'We need to simplify by dividing both parts by GCD'
            });

            steps.push({
                stepNumber: 5,
                step: 'Simplify',
                description: `Divide both numerator and denominator by ${solution.gcd}`,
                beforeExpression: solution.unsimplified,
                afterExpression: solution.simplified,
                calculation: `${solution.unsimplified} ÷ ${solution.gcd}/${solution.gcd} = ${solution.simplified}`,
                reasoning: 'Dividing by GCD gives simplest form'
            });

            steps.push({
                stepNumber: 6,
                step: 'Final Answer',
                description: 'The decimal as a simplified fraction',
                expression: solution.simplified,
                finalAnswer: true,
                verification: `${solution.simplified} = ${solution.original} ✓`
            });
        } else {
            steps.push({
                stepNumber: 4,
                step: 'Final Answer',
                description: 'The fraction is already in simplest form',
                expression: solution.simplified,
                finalAnswer: true
            });
        }

        return steps;
    }

    generateRepeatingDecimalSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given Repeating Decimal',
            description: 'Identify the repeating pattern',
            expression: solution.original,
            repeatingPart: solution.repeatingPart,
            nonRepeatingPart: solution.nonRepeatingPart || 'none',
            reasoning: 'Repeating decimals need algebraic method',
            goalStatement: 'Use x = decimal, multiply, and subtract'
        });

        steps.push({
            stepNumber: 2,
            step: 'Set up Equation',
            description: 'Let x equal the decimal',
            equation: `x = ${solution.original}`,
            reasoning: 'This allows us to manipulate algebraically'
        });

        const n = solution.repeatingPart.length;
        const m = solution.nonRepeatingPart ? solution.nonRepeatingPart.length : 0;

        if (m === 0) {
            // Pure repeating
            steps.push({
                stepNumber: 3,
                step: 'Multiply by Power of 10',
                description: `Multiply both sides by 10^${n} to shift repeating part`,
                equation: `10^${n} × x = ${solution.repeatingPart}.${solution.repeatingPart}...`,
                reasoning: `${n} repeating digits, so multiply by 10^${n}`
            });

            steps.push({
                stepNumber: 4,
                step: 'Subtract Original',
                description: 'Subtract x from both sides',
                equation: `10^${n} × x - x = ${solution.repeatingPart}`,
                simplification: `${Math.pow(10, n) - 1}x = ${solution.repeatingPart}`,
                reasoning: 'Repeating part cancels out'
            });

            steps.push({
                stepNumber: 5,
                step: 'Solve for x',
                description: 'Divide to get fraction',
                expression: `x = ${solution.repeatingPart}/${Math.pow(10, n) - 1}`,
                reasoning: 'This gives us the unsimplified fraction'
            });
        } else {
            // Mixed repeating - more complex
            steps.push({
                stepNumber: 3,
                step: 'Algebraic Method',
                description: 'Use formula for mixed repeating decimals',
                formula: `(whole number) - (non-repeating part) / (9s and 0s)`,
                reasoning: 'Standard method for mixed repeating decimals'
            });
        }

        if (solution.gcd > 1) {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Simplify',
                description: `Divide by GCD = ${solution.gcd}`,
                beforeExpression: solution.unsimplified,
                afterExpression: solution.simplified,
                reasoning: 'Reduce to lowest terms'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Final Answer',
            description: 'The repeating decimal as a fraction',
            expression: solution.simplified,
            finalAnswer: true,
            verification: `Can verify by dividing: ${solution.numerator} ÷ ${solution.denominator}`
        });

        return steps;
    }

    generateImproperToMixedSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given Improper Fraction',
            description: 'Start with improper fraction (numerator ≥ denominator)',
            expression: solution.original,
            reasoning: 'Convert to mixed number by division',
            goalStatement: 'Divide numerator by denominator'
        });

        steps.push({
            stepNumber: 2,
            step: 'Divide',
            description: `Divide ${problem.numerator} by ${problem.denominator}`,
            division: `${problem.numerator} ÷ ${problem.denominator} = ${solution.quotient} R ${solution.remainder}`,
            quotient: solution.quotient,
            remainder: solution.remainder,
            reasoning: 'Quotient becomes whole number, remainder becomes numerator'
        });

        if (solution.remainder === 0) {
            steps.push({
                stepNumber: 3,
                step: 'Result',
                description: 'No remainder means result is a whole number',
                expression: solution.quotient,
                finalAnswer: true,
                reasoning: 'Fraction equals whole number'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Form Mixed Number',
                description: 'Write as whole number plus fraction',
                expression: solution.mixed,
                parts: `${solution.whole} (whole) + ${solution.fractionPart} (fraction)`,
                finalAnswer: true,
                reasoning: 'Mixed number shows whole part and fractional part'
            });
        }

        return steps;
    }

    generateMixedToImproperSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given Mixed Number',
            description: 'Start with mixed number',
            expression: solution.original,
            parts: `Whole: ${problem.whole}, Fraction: ${problem.numerator}/${problem.denominator}`,
            reasoning: 'Convert to improper fraction',
            goalStatement: 'Multiply whole by denominator, then add numerator'
        });

        steps.push({
            stepNumber: 2,
            step: 'Multiply',
            description: `Multiply whole number by denominator`,
            calculation: `${problem.whole} × ${problem.denominator} = ${problem.whole * problem.denominator}`,
            reasoning: 'This converts whole number to same denominator'
        });

        steps.push({
            stepNumber: 3,
            step: 'Add Numerator',
            description: 'Add original numerator',
            calculation: `${problem.whole * problem.denominator} + ${problem.numerator} = ${solution.improperNumerator}`,
            reasoning: 'Combines whole and fractional parts'
        });

        steps.push({
            stepNumber: 4,
            step: 'Form Improper Fraction',
            description: 'Write as improper fraction',
            expression: solution.improper,
            finalAnswer: true,
            reasoning: 'New numerator over original denominator'
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solution',
            description: 'Result of fraction operation',
            solution: solution
        }];
    }

    // ENHANCED EXPLANATION METHODS

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                numerical: this.getNumericalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPrompts(step);
        }

        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestion(step);
        }

        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnection(step, problem);
        }

        return enhanced;
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5Explanation(step, problem),
                analogy: this.findRelevantAnalogy(step, problem),
                simpleLanguage: this.convertToSimpleLanguage(step.description),
                visualization: this.suggestVisualization(step)
            }
        }));
    }

    generateELI5Explanation(step, problem) {
        const ELI5Explanations = {
            'Given Fraction': "We have a fraction - that's like a piece of something!",
            'Find GCD': "We're finding the biggest number that can divide both the top and bottom evenly - like finding the biggest box that fits all items!",
            'Divide Numerator': "We're making the top number smaller by dividing it.",
            'Divide Denominator': "We're making the bottom number smaller by dividing it too.",
            'Simplified Fraction': "Now we have the simplest way to write our fraction!",
            'Count Decimal Places': "Let's count how many numbers come after the decimal point.",
            'Write as Fraction': "We turn the decimal into a fraction by putting it over a power of 10!",
            'Given Decimal': "We start with a decimal number, like money amounts!",
            'Given Repeating Decimal': "This decimal has numbers that repeat forever, like 0.333...",
            'Divide': "We divide to see how many whole groups we can make.",
            'Form Mixed Number': "We write it as a whole number plus a fraction part!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our fraction problem!";
    }

    findRelevantAnalogy(step, problem) {
        const category = this.fractionTypes[problem.type]?.category;
        
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (key.includes(category) || analogy.suitableFor.includes('all_fractions')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        
        return "Think of fractions like pizza slices - they're parts of a whole!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'numerator': 'top number',
            'denominator': 'bottom number',
            'GCD': 'biggest number that divides both',
            'simplify': 'make simpler',
            'improper fraction': 'fraction bigger than 1',
            'mixed number': 'whole number plus fraction',
            'decimal places': 'numbers after the dot',
            'repeating': 'numbers that repeat forever',
            'quotient': 'answer when we divide',
            'remainder': 'what\'s left over',
            'equivalent': 'same value, different look'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Given Fraction': 'Draw a circle or rectangle divided into parts, shade some of them',
            'Find GCD': 'Make two piles of objects and find largest group size that divides both',
            'Simplified Fraction': 'Show both original and simplified using same shaded amount',
            'Count Decimal Places': 'Point to each digit after the decimal point',
            'Write as Fraction': 'Show place value chart: tenths, hundredths, thousandths',
            'Divide': 'Draw groups showing how numerator fits into denominator',
            'Form Mixed Number': 'Draw whole circles plus partial circle'
        };

        return visualizations[step.step] || 'Draw a picture to show what\'s happening';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.fractionTypes[problemType]?.category || 'simplify_fraction';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTips(step, problemType),
                checkPoints: this.generateCheckPoints(step)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestions(step, problem),
                hints: this.generateProgressiveHints(step, problem),
                subSteps: this.breakIntoSubSteps(step)
            }
        }));
    }

    // HELPER EXPLANATION METHODS

    getConceptualExplanation(step, problem) {
        const conceptual = {
            'Find GCD': 'The GCD represents the largest common factor - finding it lets us reduce the fraction to its simplest form while maintaining the same value.',
            'Divide by GCD': 'Dividing both parts by the GCD creates an equivalent fraction with smaller numbers, in lowest terms.',
            'Count Decimal Places': 'Each decimal place represents a power of 10 (tenths, hundredths, etc.), which determines our denominator.',
            'Write as Fraction': 'Decimals are fractions in disguise - the place value tells us the denominator.',
            'Simplify': 'Simplification makes the fraction easier to understand and work with, without changing its value.',
            'Divide': 'Division tells us how many complete groups fit, which becomes the whole number part.',
            'Form Mixed Number': 'A mixed number clearly shows the whole part and fractional part separately.'
        };

        return conceptual[step.step] || 'This step advances our understanding of the fraction.';
    }

    getProceduralExplanation(step) {
        if (step.calculation) {
            return `Perform the calculation: ${step.calculation}`;
        }
        return 'Follow the standard procedure for this step.';
    }

    getVisualExplanation(step, problem) {
        const category = this.fractionTypes[problem.type]?.category;
        const visual = this.visualizations;

        if (step.step.includes('GCD') || step.step.includes('Find')) {
            return 'Use factor trees or list factors to visualize finding GCD.';
        } else if (step.step.includes('Decimal')) {
            return visual.place_value_chart.description;
        } else if (step.step.includes('Fraction')) {
            return visual.fraction_bars.description;
        }

        return 'Visualize the fraction as parts of a whole.';
    }

    getNumericalExplanation(step) {
        if (step.calculation) {
            return `Numerical computation: ${step.calculation}`;
        } else if (step.expression) {
            return `Result: ${step.expression}`;
        }
        return 'Perform the arithmetic operation.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: this.adaptLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                'numerator': 'top number',
                'denominator': 'bottom number',
                'GCD': 'greatest common divisor',
                'simplify': 'reduce',
                'equivalent': 'equal'
            },
            intermediate: {
                'numerator': 'numerator',
                'denominator': 'denominator',
                'GCD': 'GCD',
                'simplify': 'simplify',
                'equivalent': 'equivalent'
            },
            ELI5: {
                'numerator': 'the number on top',
                'denominator': 'the number on bottom',
                'GCD': 'the biggest number that divides both evenly',
                'simplify': 'make it simpler and smaller',
                'equivalent': 'the same amount but written differently',
                'fraction': 'a piece of something',
                'decimal': 'a number with a dot in it'
            },
            detailed: {
                'numerator': 'numerator (dividend)',
                'denominator': 'denominator (divisor)',
                'GCD': 'GCD (Greatest Common Divisor)',
                'simplify': 'reduce to lowest terms',
                'equivalent': 'equivalent (equal value)'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.result || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to continue simplifying/converting the fraction`,
            howItHelps: `This brings us closer to the final answer`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue the conversion/simplification process`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Find GCD': [
                'Use Euclidean algorithm for accuracy',
                'Double-check by verifying both numbers divide evenly',
                'Prime factorization can help visualize common factors'
            ],
            'Divide by GCD': [
                'Divide BOTH numerator and denominator',
                'Check arithmetic carefully',
                'Verify result is in lowest terms (GCD of result should be 1)'
            ],
            'Count Decimal Places': [
                'Count carefully from left to right after decimal',
                'Don\'t count digits before the decimal',
                'Each place is a power of 10'
            ],
            'Write as Fraction': [
                'Denominator is 10^(number of decimal places)',
                'Numerator is the digits without the decimal point',
                'Remember to simplify afterward'
            ],
            'Divide': [
                'Use long division if needed',
                'Quotient is whole number part',
                'Remainder becomes numerator of fraction part'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check your arithmetic'];
    }

    generateCheckPoints(step) {
        const checkpoints = {
            'Find GCD': [
                'Does this number divide both evenly?',
                'Is this the LARGEST common divisor?',
                'Can I verify using prime factorization?'
            ],
            'Divide by GCD': [
                'Did I divide both parts?',
                'Is the arithmetic correct?',
                'Can this be simplified further?'
            ],
            'Count Decimal Places': [
                'Did I count correctly?',
                'Am I counting only after the decimal point?',
                'How many places did I count?'
            ],
            'Write as Fraction': [
                'Is my denominator a power of 10?',
                'Did I write the numerator correctly?',
                'Should I simplify this?'
            ]
        };

        return checkpoints[step.step] || [
            'Is this step correct?',
            'Did I follow the procedure?',
            'Does this make sense?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Find GCD': [
                'What numbers divide both the numerator and denominator?',
                'Which is the largest?',
                'How can I find this systematically?'
            ],
            'Count Decimal Places': [
                'How many digits are after the decimal point?',
                'What power of 10 does this represent?',
                'What will my denominator be?'
            ],
            'Divide': [
                'How many times does the denominator go into the numerator?',
                'What\'s left over?',
                'How do I write this as a mixed number?'
            ],
            'Multiply': [
                'What do I multiply?',
                'In what order?',
                'What do I add next?'
            ]
        };

        return questions[step.step] || [
            'What is the goal of this step?',
            'How do I accomplish it?',
            'How can I verify my work?'
        ];
    }

    generateProgressiveHints(step, problem) {
        const category = this.fractionTypes[problem.type]?.category || 'simplify_fraction';
        const hintSet = this.hints[category];

        return {
            level1: hintSet?.level1 || 'Think about what this step requires.',
            level2: hintSet?.level2 || 'Consider the method to use.',
            level3: hintSet?.level3 || 'Apply the technique step by step.',
            level4: hintSet?.level4 || 'Complete the calculation.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.step === 'Find GCD') {
            return [
                'List factors of numerator',
                'List factors of denominator',
                'Find common factors',
                'Identify the greatest common factor'
            ];
        } else if (step.step === 'Divide by GCD') {
            return [
                'Divide numerator by GCD',
                'Divide denominator by GCD',
                'Write the new fraction',
                'Verify it\'s simplified'
            ];
        } else if (step.step === 'Count Decimal Places') {
            return [
                'Locate the decimal point',
                'Count digits to the right',
                'Note the count',
                'Determine power of 10'
            ];
        }

        return ['Understand the goal', 'Apply the method', 'Verify the result'];
    }

    identifyPrerequisites(step, problemType) {
        const category = this.fractionTypes[problemType]?.category || 'simplify_fraction';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic arithmetic'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Find GCD': ['GCD', 'Greatest Common Divisor', 'factor', 'common factor'],
            'Divide by GCD': ['divide', 'numerator', 'denominator', 'simplify'],
            'Count Decimal Places': ['decimal', 'decimal place', 'tenths', 'hundredths', 'place value'],
            'Write as Fraction': ['fraction', 'numerator', 'denominator', 'power of 10'],
            'Simplify': ['simplify', 'lowest terms', 'reduced form', 'GCD'],
            'Divide': ['divide', 'quotient', 'remainder', 'division'],
            'Multiply': ['multiply', 'product', 'multiplication']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what do I need to identify or calculate?',
            during: 'As I work through this, what should I be careful about?',
            after: 'After completing this step, how can I verify it\'s correct?'
        };
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Find GCD': 'Is this really the GREATEST common divisor?',
            'Divide by GCD': 'Did I divide both the top and bottom?',
            'Count Decimal Places': 'Did I count only the digits after the decimal point?',
            'Write as Fraction': 'Is my denominator the right power of 10?',
            'Simplify': 'Can this fraction be simplified any further?',
            'Divide': 'Is my quotient and remainder correct?',
            'Form Mixed Number': 'Does my mixed number represent the same value?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the process`,
            progression: 'We are getting closer to the final answer',
            relationship: 'Each step transforms the fraction toward our goal'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'simplify_fraction': 'Like simplifying a recipe: instead of saying "4 out of 8 servings", we say "half the recipe"',
            'decimal_to_fraction': 'Like converting $0.25 to "one quarter" - fractions are often easier to understand',
            'improper_to_mixed': 'Like saying you have "2 and a half pizzas" instead of "5 halves of a pizza"',
            'mixed_to_improper': 'Like calculating with "2 and a half hours" by converting to "5 half-hours"'
        };

        const category = this.fractionTypes[problem.type]?.category;
        return connections[category] || 'Fractions appear in many real-world situations like cooking, construction, and time.';
    }

    // ADDITIONAL HELPER METHODS

    showGCDCalculation(a, b) {
        const steps = [];
        let x = a, y = b;
        
        while (y !== 0) {
            steps.push(`GCD(${x}, ${y})`);
            const temp = y;
            y = x % y;
            x = temp;
        }
        
        steps.push(`GCD = ${x}`);
        return steps.join(' → ');
    }

    explainPlaceValue(decimal) {
        const parts = decimal.split('.');
        if (parts.length < 2) return 'No decimal part';
        
        const digits = parts[1].split('');
        const places = ['tenths', 'hundredths', 'thousandths', 'ten-thousandths'];
        
        const explanation = digits.map((digit, index) => {
            return `${digit} in ${places[index] || 'place ' + (index + 1)}`;
        }).join(', ');
        
        return explanation;
    }

    // VISUALIZATION GENERATION

    generateFractionVisualization() {
        if (!this.currentSolution || !this.currentProblem) return;

        const category = this.fractionTypes[this.currentProblem.type]?.category;

        if (category === 'simplify_fraction') {
            this.graphData = this.generateSimplificationVisualization();
        } else if (category === 'decimal_to_fraction') {
            this.graphData = this.generateDecimalVisualization();
        } else if (category === 'conversion') {
            this.graphData = this.generateConversionVisualization();
        }
    }

    generateSimplificationVisualization() {
        const { numerator, denominator } = this.currentSolution;
        
        return {
            type: 'fraction_bar',
            original: this.currentProblem.numerator + '/' + this.currentProblem.denominator,
            simplified: numerator + '/' + denominator,
            description: 'Both fractions represent the same shaded amount',
            visualization: 'bar_model'
        };
    }

    generateDecimalVisualization() {
        return {
            type: 'place_value_chart',
            decimal: this.currentProblem.decimal,
            fraction: this.currentSolution.simplified,
            description: 'Decimal places correspond to fraction denominator',
            visualization: 'place_value'
        };
    }

    generateConversionVisualization() {
        return {
            type: 'equivalent_forms',
            forms: [
                this.currentProblem.originalInput,
                this.currentSolution.improper || this.currentSolution.mixed
            ],
            description: 'Different forms of the same value',
            visualization: 'multiple_representations'
        };
    }

    // WORKBOOK GENERATION

    generateFractionWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createEnhancedStepsSection(),
            this.createFractionLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createVisualizationSection(),
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
            title: 'Enhanced Fraction Mathematical Workbook',
            subtitle: 'Comprehensive Fraction Simplification and Conversion',
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
            ['Problem Type', this.fractionTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.fractionTypes[this.currentProblem.type]?.category || 'fraction'],
            ['Original Input', this.currentProblem.originalInput],
            ['', '']
        ];

        if (this.currentProblem.numerator !== undefined) {
            problemData.push(['Numerator', this.currentProblem.numerator]);
            problemData.push(['Denominator', this.currentProblem.denominator]);
        }

        if (this.currentProblem.decimal !== undefined) {
            problemData.push(['Decimal', this.currentProblem.decimal]);
            if (this.currentProblem.isRepeating) {
                problemData.push(['Type', 'Repeating Decimal']);
                if (this.currentProblem.repeatingPart) {
                    problemData.push(['Repeating Part', this.currentProblem.repeatingPart]);
                }
            } else {
                problemData.push(['Type', 'Terminating Decimal']);
            }
        }

        if (this.currentProblem.whole !== undefined) {
            problemData.push(['Whole Number', this.currentProblem.whole]);
            problemData.push(['Numerator', this.currentProblem.numerator]);
            problemData.push(['Denominator', this.currentProblem.denominator]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSection() {
        if (!this.prerequisiteChecks) return null;

        const category = this.fractionTypes[this.currentProblem.type]?.category;
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
                stepsData.push(['Explanation', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.result) {
                stepsData.push(['Result', step.result]);
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
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
                }
            }

            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            stepsData.push(['', '']);
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createFractionLessonSection() {
        const { type } = this.currentProblem;
        const category = this.fractionTypes[type]?.category;

        let lessonKey = category;
        if (category === 'decimal_to_fraction') {
            lessonKey = 'decimal_to_fraction';
        } else if (category === 'conversion') {
            lessonKey = 'mixed_improper';
        } else {
            lessonKey = 'simplifying_fractions';
        }

        const lesson = this.lessons[lessonKey];
        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['', concept]);
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

        if (lesson.solvingSteps) {
            lessonData.push(['', '']);
            lessonData.push(['Solving Steps', '']);
            lesson.solvingSteps.forEach((step, index) => {
                lessonData.push([`${index + 1}`, step]);
            });
        }

        return {
            title: 'Key Concepts & Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.error]);
            solutionData.push(['Type', this.currentSolution.type]);
            return {
                title: 'Solution',
                type: 'solution',
                data: solutionData
            };
        }

        if (this.currentSolution.original) {
            solutionData.push(['Original', this.currentSolution.original]);
        }

        if (this.currentSolution.gcd) {
            solutionData.push(['GCD', this.currentSolution.gcd]);
        }

        if (this.currentSolution.simplified) {
            solutionData.push(['Simplified', this.currentSolution.simplified]);
        }

        if (this.currentSolution.decimal !== undefined) {
            solutionData.push(['Decimal Form', this.currentSolution.decimal]);
        }

        if (this.currentSolution.mixed) {
            solutionData.push(['Mixed Number', this.currentSolution.mixed]);
        }

        if (this.currentSolution.improper) {
            solutionData.push(['Improper Fraction', this.currentSolution.improper]);
        }

        solutionData.push(['', '']);
        solutionData.push(['Solution Type', this.currentSolution.type]);

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type],
            ['Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel]
        ];

        if (this.currentSolution.isAlreadySimplified !== undefined) {
            analysisData.push(['Already Simplified', this.currentSolution.isAlreadySimplified ? 'Yes' : 'No']);
        }

        if (this.currentSolution.isTerminating !== undefined) {
            analysisData.push(['Decimal Type', this.currentSolution.isTerminating ? 'Terminating' : 'Repeating']);
        }

        if (this.currentSolution.method) {
            analysisData.push(['Method Used', this.currentSolution.method]);
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution) return null;

        const verificationData = [
            ['Verification Method', 'Multiple checks'],
            ['', '']
        ];

        if (this.currentSolution.category === 'simplify_fraction') {
            verificationData.push(['Original Fraction', this.currentSolution.original]);
            verificationData.push(['Simplified Fraction', this.currentSolution.simplified]);
            verificationData.push(['GCD Check', `GCD(${this.currentSolution.numerator}, ${this.currentSolution.denominator}) = ${this.findGCD(this.currentSolution.numerator, this.currentSolution.denominator)}`]);
            verificationData.push(['Is Simplified', this.findGCD(this.currentSolution.numerator, this.currentSolution.denominator) === 1 ? 'Yes ✓' : 'No ✗']);
            
            if (this.currentSolution.decimal) {
                const originalDecimal = this.currentProblem.numerator / this.currentProblem.denominator;
                verificationData.push(['', '']);
                verificationData.push(['Original Decimal', originalDecimal]);
                verificationData.push(['Simplified Decimal', this.currentSolution.decimal]);
                verificationData.push(['Match', Math.abs(originalDecimal - this.currentSolution.decimal) < 0.0001 ? 'Yes ✓' : 'No ✗']);
            }
        } else if (this.currentSolution.category === 'decimal_to_fraction') {
            verificationData.push(['Original Decimal', this.currentProblem.decimal]);
            verificationData.push(['Resulting Fraction', this.currentSolution.simplified]);
            
            const backToDecimal = this.currentSolution.numerator / this.currentSolution.denominator;
            verificationData.push(['Convert Back', backToDecimal]);
            verificationData.push(['Match', 'Verify by calculator']);
        } else if (this.currentSolution.category === 'conversion') {
            verificationData.push(['Original', this.currentSolution.original]);
            verificationData.push(['Converted', this.currentSolution.mixed || this.currentSolution.improper]);
            verificationData.push(['Verification', 'Convert back to verify equivalence']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createVisualizationSection() {
        if (!this.graphData) return null;

        const vizData = [
            ['Visualization Type', this.graphData.type],
            ['Description', this.graphData.description],
            ['', '']
        ];

        if (this.graphData.original) {
            vizData.push(['Original Form', this.graphData.original]);
        }

        if (this.graphData.simplified) {
            vizData.push(['Simplified Form', this.graphData.simplified]);
        }

        if (this.graphData.decimal) {
            vizData.push(['Decimal', this.graphData.decimal]);
        }

        if (this.graphData.fraction) {
            vizData.push(['Fraction', this.graphData.fraction]);
        }

        if (this.graphData.visualization) {
            vizData.push(['', '']);
            vizData.push(['Recommended Visual', this.graphData.visualization]);
        }

        return {
            title: 'Visual Representation',
            type: 'visualization',
            data: vizData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.fractionTypes[this.currentProblem.type]?.category;
        const applications = Object.values(this.realWorldProblems).filter(app => {
            return app.fractionTypes && (
                app.fractionTypes.includes(category) ||
                app.fractionTypes.includes('all_fractions')
            );
        }).slice(0, 3);

        if (applications.length === 0) {
            // Get any 3 applications
            const allApps = Object.values(this.realWorldProblems).slice(0, 3);
            if (allApps.length === 0) return null;
            
            const appData = [['Real-World Applications', ''], ['', '']];
            allApps.forEach((app, index) => {
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

        const appData = [['Real-World Applications', ''], ['', '']];

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

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateFractionPedagogicalNotes(this.currentProblem.type);

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
                ['Assessment Tips', notes.assessment.join('; ')]
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternatives = this.generateFractionAlternativeMethods(this.currentProblem.type);

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
        const category = this.fractionTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.filter(p => this.isProblemRelevant(p, category)).slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.filter(p => this.isProblemRelevant(p, category)).slice(0, 3).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.filter(p => this.isProblemRelevant(p, category)).slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const mistakesData = [
            ['Common Misconceptions', ''],
            ['', '']
        ];

        const relevantMisconceptions = Object.entries(this.misconceptions).filter(([key, misc]) => {
            return misc.commonIn.includes(this.currentProblem.type) || 
                   misc.commonIn.includes('all_fraction_operations');
        }).slice(0, 4);

        relevantMisconceptions.forEach(([key, misc]) => {
            mistakesData.push(['Misconception', misc.misconception]);
            mistakesData.push(['Reality', misc.reality]);
            mistakesData.push(['Example', misc.correctiveExample]);
            mistakesData.push(['', '']);
        });

        if (mistakesData.length <= 2) return null;

        return {
            title: 'Common Mistakes & Misconceptions',
            type: 'mistakes',
            data: mistakesData
        };
    }

    isProblemRelevant(problem, category) {
        if (category === 'simplify_fraction') {
            return problem.includes('Simplify') || problem.includes('/');
        } else if (category === 'decimal_to_fraction') {
            return problem.includes('Convert') || problem.includes('0.');
        } else if (category === 'conversion') {
            return problem.includes('mixed') || problem.includes('improper');
        }
        return true;
    }

    generateFractionPedagogicalNotes(problemType) {
        const category = this.fractionTypes[problemType]?.category;

        const pedagogicalDatabase = {
            simplify_fraction: {
                objectives: [
                    'Understand what it means to simplify a fraction',
                    'Find the GCD of two numbers',
                    'Reduce fractions to lowest terms',
                    'Recognize when a fraction is already simplified'
                ],
                keyConcepts: [
                    'GCD is the largest number dividing both numerator and denominator',
                    'Simplifying doesn\'t change the fraction\'s value',
                    'Simplified form has GCD = 1',
                    'Equivalent fractions represent the same quantity'
                ],
                prerequisites: [
                    'Division',
                    'Factors and multiples',
                    'Understanding of fractions',
                    'GCD concept'
                ],
                commonDifficulties: [
                    'Finding GCD accurately',
                    'Stopping before reaching lowest terms',
                    'Arithmetic errors in division',
                    'Understanding why simplification preserves value'
                ],
                teachingStrategies: [
                    'Use visual models (circles, bars) to show equivalence',
                    'Teach multiple GCD methods (Euclidean, prime factorization)',
                    'Practice with simple fractions first',
                    'Always verify GCD of result is 1'
                ],
                extensions: [
                    'Simplifying algebraic fractions',
                    'Ratios and proportions',
                    'Complex fractions',
                    'Fraction operations'
                ],
                assessment: [
                    'Can student find GCD correctly?',
                    'Does student check if further simplification is possible?',
                    'Can student explain why simplification works?',
                    'Can student verify the answer?'
                ]
            },
            decimal_to_fraction: {
                objectives: [
                    'Convert terminating decimals to fractions',
                    'Convert repeating decimals to fractions',
                    'Understand place value in decimals',
                    'Simplify resulting fractions'
                ],
                keyConcepts: [
                    'Decimal places determine denominator (power of 10)',
                    'Repeating decimals need algebraic method',
                    'All rational numbers can be expressed as fractions',
                    'Simplification is final step'
                ],
                prerequisites: [
                    'Decimal notation and place value',
                    'Powers of 10',
                    'Simplifying fractions',
                    'Basic algebra (for repeating decimals)'
                ],
                commonDifficulties: [
                    'Miscounting decimal places',
                    'Confusing terminating and repeating',
                    'Algebraic method for repeating decimals',
                    'Forgetting to simplify'
                ],
                teachingStrategies: [
                    'Use place value charts',
                    'Start with simple terminating decimals',
                    'Teach pattern recognition (0.333... = 1/3)',
                    'Build up to algebraic method gradually'
                ],
                extensions: [
                    'Irrational numbers',
                    'Periodic versus non-periodic decimals',
                    'Binary and other number systems',
                    'Calculator limitations'
                ],
                assessment: [
                    'Can student count decimal places correctly?',
                    'Can student identify repeating patterns?',
                    'Can student apply algebraic method?',
                    'Does student always simplify?'
                ]
            },
            conversion: {
                objectives: [
                    'Convert between mixed numbers and improper fractions',
                    'Understand both representations',
                    'Choose appropriate form for context',
                    'Perform conversions accurately'
                ],
                keyConcepts: [
                    'Mixed number = whole + fraction',
                    'Improper fraction has numerator ≥ denominator',
                    'Both forms represent same value',
                    'Different forms useful in different contexts'
                ],
                prerequisites: [
                    'Multiplication',
                    'Division with remainders',
                    'Addition',
                    'Understanding of fractions'
                ],
                commonDifficulties: [
                    'Order of operations in conversion',
                    'Division versus multiplication confusion',
                    'Arithmetic errors',
                    'Not understanding equivalence'
                ],
                teachingStrategies: [
                    'Use visual models (pizzas, bars)',
                    'Teach formulas explicitly',
                    'Practice both directions',
                    'Always verify by converting back'
                ],
                extensions: [
                    'Operations with mixed numbers',
                    'Applications in measurement',
                    'Time calculations',
                    'Recipe scaling'
                ],
                assessment: [
                    'Can student convert both directions?',
                    'Does student understand equivalence?',
                    'Can student choose appropriate form?',
                    'Can student verify conversions?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Work with fractions effectively'],
            keyConcepts: ['Fraction fundamentals'],
            prerequisites: ['Basic arithmetic'],
            commonDifficulties: ['Various computational challenges'],
            teachingStrategies: ['Step-by-step instruction'],
            extensions: ['More complex fraction work'],
            assessment: ['Verify understanding']
        };
    }

    generateFractionAlternativeMethods(problemType) {
        const category = this.fractionTypes[problemType]?.category;

        const alternativeDatabase = {
            simplify_fraction: {
                primaryMethod: 'Find GCD and Divide',
                methods: [
                    {
                        name: 'Euclidean Algorithm',
                        description: 'Use repeated division to find GCD systematically'
                    },
                    {
                        name: 'Prime Factorization',
                        description: 'Break both numbers into prime factors, find common factors'
                    },
                    {
                        name: 'Successive Division',
                        description: 'Divide by small primes (2, 3, 5...) until no common factors remain'
                    },
                    {
                        name: 'List Factors',
                        description: 'List all factors of each, find greatest common one (good for small numbers)'
                    }
                ],
                comparison: 'Euclidean algorithm is most efficient for large numbers; prime factorization is most visual; listing works for small numbers'
            },
            decimal_to_fraction: {
                primaryMethod: 'Count Places and Simplify',
                methods: [
                    {
                        name: 'Place Value Method',
                        description: 'Count decimal places, write as fraction with power of 10, simplify'
                    },
                    {
                        name: 'Algebraic Method (Repeating)',
                        description: 'Let x = decimal, multiply and subtract to eliminate repeating part'
                    },
                    {
                        name: 'Pattern Recognition',
                        description: 'Memorize common patterns (0.5=1/2, 0.333...=1/3, etc.)'
                    },
                    {
                        name: 'Calculator Verification',
                        description: 'Convert, then verify by dividing fraction on calculator'
                    }
                ],
                comparison: 'Place value method works for terminating decimals; algebraic method required for repeating; pattern recognition fastest for common decimals'
            },
            conversion: {
                primaryMethod: 'Division Algorithm',
                methods: [
                    {
                        name: 'Division for Improper→Mixed',
                        description: 'Divide numerator by denominator for quotient and remainder'
                    },
                    {
                        name: 'Multiply-Add for Mixed→Improper',
                        description: 'Multiply whole by denominator, add numerator'
                    },
                    {
                        name: 'Visual Model',
                        description: 'Draw circles/bars to see whole and fractional parts'
                    },
                    {
                        name: 'Formula Application',
                        description: 'Apply conversion formulas directly'
                    }
                ],
                comparison: 'Division algorithm is most systematic; visual models build understanding; formulas are quickest once memorized'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard approach',
            methods: [{
                name: 'Alternative',
                description: 'Other methods available depending on problem'
            }],
            comparison: 'Choose method based on problem characteristics'
        };
    }
}

// Export the class
export default EnhancedFractionMathematicalWorkbook;
