// Enhanced Circle Chord Length Mathematical Workbook - Complete Implementation
import * as math from 'mathjs';

export class EnhancedCircleChordLengthMathematicalWorkbook {
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
        this.initializeChordSolvers();
        this.initializeChordLessons();
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
        this.initializeHistoricalContext();
        this.initializeCrossCurricularLinks();
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
                highlightBg: '#ffe6e6'
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
                highlightBg: '#ffe0e6'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMathSymbols() {
        return {
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±', 'sqrt': '√',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'theta': 'θ', 'lambda': 'λ', 'mu': 'μ',
            // Special symbols
            'intersection': '∩', 'union': '∪', 'subset': '⊂', 'element': '∈',
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'degree': '°', 'circle': '○'
        };
    }

    initializeChordSolvers() {
        this.chordTypes = {
            // Basic chord length from radius and distance
            chord_from_radius_distance: {
                patterns: [
                    /chord.*radius.*distance/i,
                    /distance.*center.*chord/i,
                    /perpendicular.*distance/i
                ],
                solver: this.solveChordFromRadiusDistance.bind(this),
                name: 'Chord Length from Radius and Distance to Center',
                category: 'basic_chord',
                description: 'Calculates chord length using radius and perpendicular distance from center',
                formula: 'c = 2√(r² - d²)',
                diagram: 'Circle with radius, chord, and perpendicular from center'
            },

            // Chord from radius and central angle
            chord_from_radius_angle: {
                patterns: [
                    /chord.*central.*angle/i,
                    /radius.*angle/i,
                    /subtended.*angle/i
                ],
                solver: this.solveChordFromRadiusAngle.bind(this),
                name: 'Chord Length from Radius and Central Angle',
                category: 'angle_based',
                description: 'Calculates chord length using radius and central angle',
                formula: 'c = 2r × sin(θ/2)',
                diagram: 'Circle showing central angle and chord'
            },

            // Chord from radius and arc length
            chord_from_radius_arc: {
                patterns: [
                    /chord.*arc.*length/i,
                    /arc.*chord/i
                ],
                solver: this.solveChordFromRadiusArc.bind(this),
                name: 'Chord Length from Radius and Arc Length',
                category: 'arc_based',
                description: 'Calculates chord length using radius and arc length',
                formula: 'First find θ = s/r, then c = 2r × sin(θ/2)',
                diagram: 'Circle showing arc length and chord'
            },

            // Distance from center given chord and radius
            distance_from_chord_radius: {
                patterns: [
                    /distance.*center.*given.*chord/i,
                    /perpendicular.*distance.*chord/i,
                    /find.*distance.*chord/i
                ],
                solver: this.solveDistanceFromChordRadius.bind(this),
                name: 'Distance from Center to Chord',
                category: 'reverse_calculation',
                description: 'Calculates perpendicular distance from center to chord',
                formula: 'd = √(r² - (c/2)²)',
                diagram: 'Circle with chord and perpendicular distance'
            },

            // Radius from chord and distance
            radius_from_chord_distance: {
                patterns: [
                    /radius.*chord.*distance/i,
                    /find.*radius.*chord/i
                ],
                solver: this.solveRadiusFromChordDistance.bind(this),
                name: 'Radius from Chord Length and Distance',
                category: 'reverse_calculation',
                description: 'Calculates radius given chord length and distance',
                formula: 'r = √((c/2)² + d²)',
                diagram: 'Circle construction from chord and distance'
            },

            // Two chords intersecting
            intersecting_chords: {
                patterns: [
                    /intersecting.*chords/i,
                    /two.*chords.*intersect/i,
                    /chord.*segments/i
                ],
                solver: this.solveIntersectingChords.bind(this),
                name: 'Intersecting Chords Theorem',
                category: 'chord_properties',
                description: 'Uses the intersecting chords theorem: a×b = c×d',
                formula: 'If chords intersect, product of segments are equal',
                diagram: 'Two chords intersecting inside circle'
            },

            // Chord bisector
            chord_bisector: {
                patterns: [
                    /bisect.*chord/i,
                    /perpendicular.*bisector/i,
                    /midpoint.*chord/i
                ],
                solver: this.solveChordBisector.bind(this),
                name: 'Chord Bisector Properties',
                category: 'chord_properties',
                description: 'Perpendicular from center bisects chord',
                formula: 'Line from center perpendicular to chord passes through midpoint',
                diagram: 'Circle with chord and perpendicular bisector'
            },

            // Equal chords
            equal_chords: {
                patterns: [
                    /equal.*chords/i,
                    /same.*length.*chords/i,
                    /congruent.*chords/i
                ],
                solver: this.solveEqualChords.bind(this),
                name: 'Equal Chords Properties',
                category: 'chord_properties',
                description: 'Equal chords are equidistant from center',
                formula: 'If c₁ = c₂, then d₁ = d₂',
                diagram: 'Circle with two equal chords'
            },

            // Chord and inscribed angle
            chord_inscribed_angle: {
                patterns: [
                    /inscribed.*angle/i,
                    /angle.*circumference/i,
                    /chord.*angle.*circle/i
                ],
                solver: this.solveChordInscribedAngle.bind(this),
                name: 'Chord and Inscribed Angle',
                category: 'angle_based',
                description: 'Relates chord to inscribed angle',
                formula: 'Inscribed angle = (1/2) × central angle',
                diagram: 'Circle showing inscribed and central angles'
            },

            // Sagitta (height of segment)
            chord_sagitta: {
                patterns: [
                    /sagitta/i,
                    /height.*segment/i,
                    /chord.*height/i
                ],
                solver: this.solveChordSagitta.bind(this),
                name: 'Chord and Sagitta (Segment Height)',
                category: 'segment_properties',
                description: 'Calculates sagitta (height) of circular segment',
                formula: 'h = r - d, where d is distance from center',
                diagram: 'Circular segment showing sagitta'
            },

            // Chord from diameter
            chord_from_diameter: {
                patterns: [
                    /chord.*diameter/i,
                    /longest.*chord/i,
                    /diameter.*chord/i
                ],
                solver: this.solveChordFromDiameter.bind(this),
                name: 'Diameter as Longest Chord',
                category: 'special_cases',
                description: 'Diameter is the longest possible chord',
                formula: 'Maximum chord length = diameter = 2r',
                diagram: 'Circle showing diameter as chord'
            },

            // Multiple chords
            multiple_chords: {
                patterns: [
                    /multiple.*chords/i,
                    /several.*chords/i,
                    /n.*chords/i
                ],
                solver: this.solveMultipleChords.bind(this),
                name: 'Multiple Chords in Circle',
                category: 'complex',
                description: 'Analyzes multiple chords in same circle',
                formula: 'Various relationships depending on configuration',
                diagram: 'Circle with multiple chords'
            },

            // Word problems - Engineering
            word_engineering: {
                patterns: [
                    /arch/i,
                    /bridge/i,
                    /tunnel/i,
                    /engineering/i
                ],
                solver: this.solveWordEngineering.bind(this),
                name: 'Engineering Applications',
                category: 'word_problems',
                description: 'Chord calculations in engineering contexts'
            },

            // Word problems - Design
            word_design: {
                patterns: [
                    /design/i,
                    /circular.*window/i,
                    /dome/i
                ],
                solver: this.solveWordDesign.bind(this),
                name: 'Design Applications',
                category: 'word_problems',
                description: 'Chord calculations in design and architecture'
            }
        };
    }

    initializeChordLessons() {
        this.lessons = {
            basic_chord_concepts: {
                title: "Basic Chord Concepts",
                concepts: [
                    "A chord is a line segment connecting two points on a circle",
                    "The diameter is the longest chord (passes through center)",
                    "A perpendicular from the center bisects the chord",
                    "Equal chords are equidistant from the center"
                ],
                theory: "Chords are fundamental elements in circle geometry. Understanding their properties helps solve many practical problems in engineering, design, and physics.",
                keyFormulas: {
                    "Chord from radius and distance": "c = 2√(r² - d²)",
                    "Distance from chord and radius": "d = √(r² - (c/2)²)",
                    "Radius from chord and distance": "r = √((c/2)² + d²)"
                },
                fundamentalTheorem: "The Perpendicular Bisector Theorem: A perpendicular from the center of a circle to a chord bisects the chord",
                keyProperties: [
                    "Chords equidistant from center are equal in length",
                    "Equal chords subtend equal angles at the center",
                    "The perpendicular distance from center is always less than radius",
                    "Diameter is the only chord that passes through the center"
                ]
            },

            pythagorean_relationship: {
                title: "Pythagorean Relationship in Chords",
                concepts: [
                    "When perpendicular drawn from center to chord, right triangle forms",
                    "Half the chord, distance from center, and radius form right triangle",
                    "Formula derived from Pythagorean theorem: r² = d² + (c/2)²",
                    "This is the foundation for most chord calculations"
                ],
                theory: "The right triangle formed by the radius, perpendicular distance, and half-chord is key to solving chord problems. This triangle relationship allows us to find any unknown when two values are known.",
                keyFormulas: {
                    "Pythagorean in chord": "r² = d² + (c/2)²",
                    "Rearranged for chord": "c = 2√(r² - d²)",
                    "Rearranged for distance": "d = √(r² - (c/2)²)",
                    "Rearranged for radius": "r = √(d² + (c/2)²)"
                },
                visualUnderstanding: "Draw the perpendicular from center to chord. This creates two congruent right triangles. The hypotenuse is the radius, one leg is the distance, and the other leg is half the chord.",
                applications: [
                    "Finding chord length given radius and distance",
                    "Finding how far chord is from center",
                    "Determining minimum radius for a given chord and clearance"
                ]
            },

            angle_based_chords: {
                title: "Angle-Based Chord Calculations",
                concepts: [
                    "Central angle is the angle at center subtended by chord",
                    "Chord length relates to central angle through sine function",
                    "Formula: c = 2r × sin(θ/2), where θ is central angle",
                    "Inscribed angle is half the central angle"
                ],
                theory: "When we know the central angle subtended by a chord, we can use trigonometry to find the chord length. The key insight is that the perpendicular from center creates two right triangles where we can apply sine.",
                keyFormulas: {
                    "Chord from angle": "c = 2r × sin(θ/2)",
                    "Central angle from chord": "θ = 2 × arcsin(c/(2r))",
                    "Inscribed angle theorem": "inscribed angle = (1/2) × central angle"
                },
                trigonometricInsight: "In the right triangle formed, sin(θ/2) = (c/2)/r, which gives us c = 2r × sin(θ/2)",
                applications: [
                    "Finding chord when angle and radius known",
                    "Calculating angles in circular designs",
                    "Solving navigation and astronomy problems"
                ]
            },

            chord_theorems: {
                title: "Important Chord Theorems",
                concepts: [
                    "Intersecting Chords Theorem: products of segments are equal",
                    "Equal Chords Theorem: equal chords are equidistant from center",
                    "Perpendicular Bisector Theorem: perpendicular from center bisects chord",
                    "Diameter Theorem: diameter is the longest chord"
                ],
                theory: "Several powerful theorems govern chord relationships. These theorems provide shortcuts and insights for solving complex problems.",
                keyTheorems: {
                    "Intersecting Chords": "If two chords AB and CD intersect at P, then AP × PB = CP × PD",
                    "Equal Chords": "If two chords are equal, they are equidistant from the center",
                    "Perpendicular Bisector": "A line from center perpendicular to chord bisects the chord",
                    "Equidistant Chords": "Chords equidistant from center are equal in length"
                },
                proofStrategies: [
                    "Use congruent triangles for equal chords theorem",
                    "Apply similar triangles for intersecting chords",
                    "Use Pythagorean theorem for distance calculations"
                ],
                applications: [
                    "Finding unknown segments in intersecting chords",
                    "Proving chord relationships",
                    "Solving optimization problems"
                ]
            },

            circular_segments: {
                title: "Circular Segments and Sagitta",
                concepts: [
                    "Circular segment is region between chord and arc",
                    "Sagitta (h) is the height of the segment",
                    "Sagitta = radius - distance from center to chord",
                    "Useful in arch and dome calculations"
                ],
                theory: "The sagitta, or height of a circular segment, is important in architecture and engineering. It relates the height of an arch or dome to its span and radius.",
                keyFormulas: {
                    "Sagitta": "h = r - d = r - √(r² - (c/2)²)",
                    "Alternative sagitta": "h = r(1 - cos(θ/2))",
                    "Radius from chord and sagitta": "r = (c²/(8h)) + (h/2)",
                    "Chord from radius and sagitta": "c = 2√(h(2r - h))"
                },
                practicalUses: [
                    "Arch design in bridges",
                    "Dome construction",
                    "Tunnel clearance calculations",
                    "Lens curvature in optics"
                ]
            },

            arc_and_chord: {
                title: "Relationship Between Arc and Chord",
                concepts: [
                    "Arc is the curved portion of circle between two points",
                    "Chord is the straight line connecting same two points",
                    "Arc length is always greater than chord length",
                    "For small angles, arc and chord are approximately equal"
                ],
                theory: "The relationship between arc length and chord length depends on the central angle. As the angle increases, the difference between arc and chord increases.",
                keyFormulas: {
                    "Arc length": "s = rθ (θ in radians)",
                    "Chord from arc": "c = 2r × sin(s/(2r))",
                    "Arc from chord": "s ≈ c(1 + (c²)/(24r²)) for small angles"
                },
                approximations: "For very small angles (< 10°), chord ≈ arc. For angles up to 60°, chord ≈ arc × 0.95. For 180°, chord/arc = 2/π ≈ 0.637.",
                applications: [
                    "Navigation and surveying",
                    "Calculating distances on curved paths",
                    "Manufacturing curved components"
                ]
            },

            advanced_chord_problems: {
                title: "Advanced Chord Problem Solving",
                concepts: [
                    "Multiple chord systems",
                    "Optimization problems (longest/shortest chords)",
                    "Chord constructions and geometric proofs",
                    "Three-dimensional applications (spherical chords)"
                ],
                theory: "Advanced chord problems often involve multiple chords, optimization, or connections to other geometric concepts. These problems develop deep understanding of circle geometry.",
                problemTypes: {
                    "Optimization": "Finding maximum/minimum chord lengths under constraints",
                    "Multiple chords": "Analyzing relationships among several chords",
                    "Construction": "Constructing chords with specific properties",
                    "3D extension": "Chords in spheres and curved surfaces"
                },
                strategies: [
                    "Draw clear diagrams showing all known information",
                    "Identify right triangles and use Pythagorean theorem",
                    "Look for symmetry and equal elements",
                    "Consider special cases (diameter, equal chords)",
                    "Use coordinate geometry for complex configurations"
                ],
                applications: [
                    "Engineering stress analysis",
                    "Computer graphics and CAD",
                    "Astronomy and orbital mechanics",
                    "Advanced architectural design"
                ]
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            basic_chord: {
                'Using Pythagorean theorem': [
                    'Forgetting to use (c/2) instead of c in formula',
                    'Mixing up radius and diameter',
                    'Incorrect square root calculation',
                    'Sign errors in subtraction under square root'
                ],
                'Setting up right triangle': [
                    'Not recognizing the perpendicular bisects the chord',
                    'Using whole chord instead of half-chord',
                    'Confusing distance with radius'
                ]
            },
            angle_based: {
                'Using sine formula': [
                    'Forgetting to divide angle by 2 in sin(θ/2)',
                    'Using degrees when radians needed (or vice versa)',
                    'Calculator in wrong mode (DEG vs RAD)',
                    'Forgetting to multiply by 2r'
                ],
                'Angle conversions': [
                    'Not converting degrees to radians',
                    'Confusing central angle with inscribed angle',
                    'Using full angle instead of half angle'
                ]
            },
            chord_properties: {
                'Intersecting chords theorem': [
                    'Multiplying wrong segments together',
                    'Not setting up proportion correctly',
                    'Confusing which segments to multiply'
                ],
                'Equal chords': [
                    'Assuming equal chords must be parallel',
                    'Not recognizing equal distances from center',
                    'Forgetting chords can be in different positions'
                ]
            },
            reverse_calculations: {
                'Finding radius': [
                    'Forgetting to add squared terms before square root',
                    'Not squaring the half-chord',
                    'Algebraic errors in rearranging formula'
                ],
                'Finding distance': [
                    'Taking square root of negative number (impossible chord)',
                    'Not checking if chord length exceeds diameter',
                    'Sign errors in subtraction'
                ]
            }
        };

        this.errorPrevention = {
            chord_half: {
                reminder: 'Always use HALF the chord length in Pythagorean calculations',
                method: 'Write (c/2) explicitly in your work',
                checkpoint: 'Ask yourself: am I using the full chord or half the chord?'
            },
            right_triangle: {
                reminder: 'The perpendicular from center to chord creates two congruent right triangles',
                method: 'Draw and label the right triangle clearly',
                checkpoint: 'Identify: hypotenuse = radius, legs = distance and half-chord'
            },
            angle_division: {
                reminder: 'For chord length, use sin(θ/2), not sin(θ)',
                method: 'Always divide central angle by 2 first',
                checkpoint: 'Check: am I using half the central angle?'
            },
            calculator_mode: {
                reminder: 'Ensure calculator is in correct mode (degrees or radians)',
                method: 'Check mode before starting trigonometric calculations',
                checkpoint: 'Is my angle in degrees or radians? Is calculator set correctly?'
            },
            physical_constraints: {
                reminder: 'Chord length cannot exceed diameter',
                method: 'Before solving, check if c ≤ 2r',
                checkpoint: 'Does my answer make physical sense?'
            },
            distance_constraint: {
                reminder: 'Distance from center cannot exceed radius',
                method: 'Verify d ≤ r before proceeding',
                checkpoint: 'Is the distance from center less than the radius?'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the formula works and geometric intuition',
                language: 'Intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations',
                language: 'Step-by-step computational instructions'
            },
            visual: {
                focus: 'Geometric diagrams and spatial understanding',
                language: 'Visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Formal mathematical derivations',
                language: 'Precise mathematical terminology'
            },
            trigonometric: {
                focus: 'Relationships involving angles and ratios',
                language: 'Trigonometric function descriptions'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'Simple, everyday language',
                detail: 'Essential steps only',
                examples: 'Concrete numbers and simple cases',
                diagrams: 'Clear, labeled diagrams'
            },
            intermediate: {
                vocabulary: 'Standard mathematical terms',
                detail: 'Main steps with brief explanations',
                examples: 'Mix of concrete and abstract',
                diagrams: 'Standard geometric diagrams'
            },
            ELI5: {
                vocabulary: 'Explain like I\'m 5 - simplest possible terms',
                detail: 'Every tiny step explained with analogies',
                examples: 'Real-world analogies and stories',
                analogies: true,
                visualization: 'Simple pictures and comparisons',
                language: 'Child-friendly explanations'
            },
            detailed: {
                vocabulary: 'Full mathematical vocabulary',
                detail: 'Comprehensive explanations with proofs',
                examples: 'Abstract and generalized cases',
                diagrams: 'Detailed geometric constructions'
            },
            scaffolded: {
                vocabulary: 'Progressive from simple to complex',
                detail: 'Guided discovery with questions',
                examples: 'Carefully sequenced difficulty progression',
                support: 'Multiple hints and checkpoints'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            arch_bridge: {
                scenario: "Designing an arch bridge",
                equation: "Chord represents span, sagitta represents arch height",
                examples: [
                    "A bridge has a 30-meter span and 5-meter arch height. Find the radius of the circular arch.",
                    "An arch bridge with 50-foot radius needs 60-foot clearance. What's the maximum arch height?"
                ],
                context: "Bridge engineers use chord calculations to design structurally sound and aesthetically pleasing arches",
                industry: "Civil Engineering",
                formula: "r = (c²/(8h)) + (h/2)"
            },
            tunnel_clearance: {
                scenario: "Calculating tunnel clearance",
                equation: "Chord is tunnel width at specific height",
                examples: [
                    "A circular tunnel has 10-meter radius. What's the width 2 meters below center?",
                    "Semi-circular tunnel needs 8-meter width at 3-meter height. Find radius."
                ],
                context: "Tunnel design requires calculating available width at different heights for vehicle clearance",
                industry: "Transportation Engineering",
                formula: "c = 2√(r² - d²)"
            },
            circular_window: {
                scenario: "Designing circular or arched windows",
                equation: "Chord represents window width, calculations for muntins and support",
                examples: [
                    "A circular window has 2-meter diameter. Find chord length 30cm from center.",
                    "Arched window needs 1.5-meter width at 0.4-meter height. Calculate radius."
                ],
                context: "Architects use chord geometry for window designs, especially in gothic and romanesque styles",
                industry: "Architecture",
                formula: "c = 2√(r² - d²)"
            },
            satellite_dish: {
                scenario: "Calculating satellite dish or antenna dimensions",
                equation: "Parabolic approximation using circular segments",
                examples: [
                    "A dish with 2-meter diameter and 0.3-meter depth. Find the focal point.",
                    "Calculate the width of a dish 10cm from the edge if radius is 1 meter."
                ],
                context: "Radio astronomy and satellite communications use circular segment calculations",
                industry: "Telecommunications",
                formula: "c = 2√(h(2r - h))"
            },
            dome_construction: {
                scenario: "Designing domes and curved roofs",
                equation: "Segments of sphere, chord calculations for support structure",
                examples: [
                    "A dome has 20-meter diameter base and 8-meter height. Find radius of curvature.",
                    "Calculate chord length at 5-meter height in a 15-meter radius dome."
                ],
                context: "Dome construction requires precise chord calculations for structural supports and panels",
                industry: "Architecture/Construction",
                formula: "r = (c²/(8h)) + (h/2)"
            },
            pipeline_depth: {
                scenario: "Calculating pipeline or sewer depth and width",
                equation: "Circular pipe, chord represents water surface width",
                examples: [
                    "A 2-meter diameter pipe is half full. What's the water surface width?",
                    "Pipe with 1.5-meter diameter has water width of 1.2 meters. Find water depth."
                ],
                context: "Civil engineers calculate flow capacity based on water depth in circular pipes",
                industry: "Hydraulic Engineering",
                formula: "c = 2√(r² - d²)"
            },
            wheel_geometry: {
                scenario: "Wheel and gear calculations",
                equation: "Chord length for gear teeth spacing",
                examples: [
                    "A wheel with 50cm radius needs a chord 60cm long. Where to drill holes?",
                    "Gear with 20cm radius needs 8 equally spaced teeth. Find chord between adjacent teeth."
                ],
                context: "Mechanical engineering uses chord calculations for gears, wheels, and circular components",
                industry: "Mechanical Engineering",
                formula: "c = 2r × sin(θ/2)"
            },
            observatory_dome: {
                scenario: "Observatory dome opening calculations",
                equation: "Calculating opening width at different heights",
                examples: [
                    "A 12-meter radius dome needs 6-meter opening at 8-meter height. Is it possible?",
                    "Find the width of a dome opening 3 meters below the top of a 10-meter radius dome."
                ],
                context: "Astronomical observatories need precise calculations for telescope movement and dome openings",
                industry: "Astronomy/Architecture",
                formula: "c = 2√(r² - d²)"
            },
            circular_track: {
                scenario: "Running track or racing circuit design",
                equation: "Chord as shortcut across curved sections",
                examples: [
                    "A circular track has 100-meter radius. What's the straight-line distance across a 90° turn?",
                    "Calculate the chord length for a 60-degree turn on a 200-meter radius track."
                ],
                context: "Track designers use chord calculations to determine optimal racing lines and distances",
                industry: "Sports Engineering",
                formula: "c = 2r × sin(θ/2)"
            },
            optical_lens: {
                scenario: "Lens curvature and optical calculations",
                equation: "Sagitta relates to focal length and lens power",
                examples: [
                    "A lens with 50mm diameter has 5mm sagitta. Find radius of curvature.",
                    "Calculate the maximum thickness of a lens with 30mm diameter and 200mm radius."
                ],
                context: "Optical engineering uses circular segment geometry for lens design and manufacturing",
                industry: "Optics/Photography",
                formula: "r = (c²/(8h)) + (h/2)"
            },
            ship_hull: {
                scenario: "Ship hull design and waterline calculations",
                equation: "Chord represents waterline at different drafts",
                examples: [
                    "A cylindrical hull section has 8-meter diameter. Find waterline width at 2-meter draft.",
                    "Calculate the draft when waterline width is 6 meters on a 10-meter diameter hull."
                ],
                context: "Naval architects use chord calculations for hull design and stability analysis",
                industry: "Naval Architecture",
                formula: "c = 2√(r² - d²)"
            },
            irrigation_canal: {
                scenario: "Circular canal cross-section calculations",
                equation: "Chord as water surface width",
                examples: [
                    "A circular canal with 3-meter diameter is filled to 2-meter depth. Find surface width.",
                    "Calculate flow area when water width is 2.5 meters in a 3-meter diameter canal."
                ],
                context: "Agricultural and civil engineers calculate flow capacity in circular canals and culverts",
                industry: "Agricultural Engineering",
                formula: "c = 2√(r² - d²)"
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            basic_chord: {
                skills: [
                    'Pythagorean theorem',
                    'Square roots',
                    'Basic algebra',
                    'Understanding of circles (radius, diameter, center)'
                ],
                priorKnowledge: [
                    'Right triangle properties',
                    'Circle terminology',
                    'Equation solving'
                ],
                checkQuestions: [
                    "What is the Pythagorean theorem? (a² + b² = c²)",
                    "What is √64? (8)",
                    "If r = 5 and d = 3, what is r² - d²? (25 - 9 = 16)",
                    "What is a chord? (line segment connecting two points on circle)",
                    "What is the relationship between radius and diameter? (d = 2r)"
                ]
            },
            angle_based: {
                skills: [
                    'Trigonometry (sine, cosine)',
                    'Angle measurement (degrees and radians)',
                    'Calculator usage for trig functions',
                    'Basic chord concepts'
                ],
                priorKnowledge: [
                    'SOH-CAH-TOA',
                    'Unit circle',
                    'Angle conversions',
                    'Central angles'
                ],
                checkQuestions: [
                    "What does sin(30°) equal? (0.5 or 1/2)",
                    "Convert 45° to radians (π/4)",
                    "In right triangle, if hypotenuse is 10 and opposite is 5, what is sin(θ)? (0.5)",
                    "What is a central angle? (angle at center of circle)",
                    "Is your calculator in degree or radian mode?"
                ]
            },
            chord_properties: {
                skills: [
                    'Understanding of perpendicular lines',
                    'Bisector concept',
                    'Congruent triangles',
                    'Basic chord calculations'
                ],
                priorKnowledge: [
                    'Perpendicular bisector theorem',
                    'Properties of isosceles triangles',
                    'Symmetry in circles'
                ],
                checkQuestions: [
                    "What does perpendicular mean? (90° angle)",
                    "What does bisect mean? (divide into two equal parts)",
                    "If a perpendicular from center meets a chord, what happens? (it bisects the chord)",
                    "Are all radii of a circle equal? (yes)"
                ]
            },
            reverse_calculations: {
                skills: [
                    'Algebraic manipulation',
                    'Solving for variables',
                    'Square root operations',
                    'Formula rearrangement'
                ],
                priorKnowledge: [
                    'Isolating variables',
                    'Inverse operations',
                    'Quadratic equations basics'
                ],
                checkQuestions: [
                    "If x² = 25, what is x? (±5, but we use positive for geometry)",
                    "Rearrange c = 2√(r² - d²) to solve for r",
                    "If a² + b² = c², solve for a (a = √(c² - b²))"
                ]
            },
            segment_properties: {
                skills: [
                    'Understanding of circular segments',
                    'Sagitta concept',
                    'Arc and chord relationship',
                    'All basic chord skills'
                ],
                priorKnowledge: [
                    'Circular segment definition',
                    'Difference between arc and chord',
                    'Height vs distance concepts'
                ],
                checkQuestions: [
                    "What is a sagitta? (height of circular segment)",
                    "What is the difference between arc and chord? (arc is curved, chord is straight)",
                    "Is sagitta measured from the chord or from the center? (from the chord)"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            right_triangle_model: {
                description: "Chord creates right triangles when perpendicular drawn from center",
                analogy: "Like a bow and arrow - the string (chord) is straight, the bow (arc) is curved, and the perpendicular from center is like an arrow hitting the string's center",
                visualization: "Draw circle with chord, then perpendicular from center to chord. Label radius, distance, and half-chord",
                suitableFor: ['basic_chord', 'all_calculations'],
                explanation: "The perpendicular from center to chord creates two mirror-image right triangles. Understanding this triangle is key to all chord calculations.",
                construction: [
                    "1. Draw circle with center O and radius r",
                    "2. Draw chord AB",
                    "3. Draw perpendicular OM from O to AB (M is midpoint)",
                    "4. Right triangle OMA has: hypotenuse = r, legs = d and c/2"
                ]
            },
            pizza_slice_model: {
                description: "Central angle and chord form triangular 'slice'",
                analogy: "Like a pizza slice - the crust is the arc, the straight edge going to center is the radius, and cutting straight across gives the chord",
                visualization: "Draw two radii forming central angle, connect endpoints with chord",
                suitableFor: ['angle_based'],
                explanation: "The central angle, two radii, and chord form an isosceles triangle. This triangle helps us use trigonometry.",
                ELI5: "Imagine cutting a pizza. The two cuts from the center are like radii, and the curved crust is the arc. If you cut straight across the crust instead of following the curve, that straight cut is the chord."
            },
            water_in_pipe: {
                description: "Partially filled circular pipe",
                analogy: "Like water in a pipe - the water surface is a chord, the water depth relates to distance from center",
                visualization: "Cross-section of pipe showing water level as horizontal chord",
                suitableFor: ['practical_applications', 'reverse_calculations'],
                explanation: "In a circular pipe, the water surface forms a chord. The depth of water and pipe radius determine the chord length (surface width).",
                realWorld: "Engineers use this to calculate flow capacity in sewers, culverts, and pipelines"
            },
            arch_bridge_model: {
                description: "Bridge arch as circular segment",
                analogy: "Like a rainbow - the arc is the curved rainbow, the chord is an imaginary straight line connecting the ends, and the height is how tall the rainbow is",
                visualization: "Arch with span (chord) at bottom and height (sagitta) at top",
                suitableFor: ['segment_properties', 'engineering_applications'],
                explanation: "The span of the arch is the chord, the height of the arch is the sagitta, and these determine the radius of curvature.",
                ELI5: "Think of a rainbow. The bottom where it touches the ground is like the chord (straight line), and how high the rainbow goes up is like the sagitta (the arch height)."
            },
            clock_hands: {
                description: "Chord connecting two points on clock face",
                analogy: "Like drawing a line between two numbers on a clock - the line is the chord, and the angle at the center tells you how far apart the numbers are",
                visualization: "Clock face with line connecting two hour positions",
                suitableFor: ['angle_based', 'introductory_concepts'],
                explanation: "The distance between hour markers (straight line) is a chord. The angle between clock hands is the central angle.",
                ELI5: "On a clock, if you draw a straight line from 12 to 3, that line is a chord. The angle between the clock hands is like the central angle."
            },
            dome_structure: {
                description: "Dome as circular segments stacked",
                analogy: "Like an upside-down bowl - each horizontal slice through the bowl is a circle, and the width of that slice is a chord",
                visualization: "Dome showing horizontal cross-sections at different heights",
                suitableFor: ['3D_applications', 'architecture'],
                explanation: "At each height in a dome, the horizontal cross-section is a circle, and the width is determined by chord calculations.",
                application: "Used in designing stadiums, observatories, and religious buildings"
            },
            bicycle_wheel: {
                description: "Spokes and chords in a wheel",
                analogy: "Like the strings of a bicycle wheel - the rim is the circle, and straight lines across the wheel (not spokes) are chords",
                visualization: "Bicycle wheel with various chords drawn",
                suitableFor: ['equal_chords', 'multiple_chords'],
                explanation: "Equal chords in a wheel are equidistant from the center. This principle is used in wheel construction and gear design.",
                ELI5: "If you draw different straight lines across a bicycle wheel, they're all chords. Lines the same length are the same distance from the center!"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            beginner: [
                {
                    problem: "A circle has radius 5 cm. A chord is 3 cm from the center. Find the chord length.",
                    given: { r: 5, d: 3 },
                    find: "chord length (c)",
                    formula: "c = 2√(r² - d²)",
                    solution: 8,
                    steps: [
                        "Given: r = 5 cm, d = 3 cm",
                        "Formula: c = 2√(r² - d²)",
                        "Substitute: c = 2√(5² - 3²)",
                        "Calculate: c = 2√(25 - 9)",
                        "Simplify: c = 2√16",
                        "Evaluate: c = 2 × 4 = 8 cm"
                    ],
                    difficulty: "easy",
                    visualization: "Draw circle with radius 5, mark point 3 cm from center, draw perpendicular to chord"
                },
                {
                    problem: "Find the chord length in a circle of radius 10 cm, if the chord is 6 cm from the center.",
                    given: { r: 10, d: 6 },
                    find: "chord length",
                    solution: 16,
                    steps: [
                        "r = 10, d = 6",
                        "c = 2√(10² - 6²)",
                        "c = 2√(100 - 36)",
                        "c = 2√64",
                        "c = 2 × 8 = 16 cm"
                    ],
                    difficulty: "easy"
                },
                {
                    problem: "A circle has radius 13 cm. A chord has length 24 cm. How far is the chord from the center?",
                    given: { r: 13, c: 24 },
                    find: "distance from center (d)",
                    formula: "d = √(r² - (c/2)²)",
                    solution: 5,
                    steps: [
                        "Given: r = 13 cm, c = 24 cm",
                        "Formula: d = √(r² - (c/2)²)",
                        "Substitute: d = √(13² - (24/2)²)",
                        "Calculate: d = √(13² - 12²)",
                        "Simplify: d = √(169 - 144)",
                        "Evaluate: d = √25 = 5 cm"
                    ],
                    difficulty: "easy",
                    note: "Remember to use (c/2), not c!"
                }
            ],
            intermediate: [
                {
                    problem: "In a circle of radius 15 cm, find the chord length subtended by a central angle of 60°.",
                    given: { r: 15, angle: 60 },
                    find: "chord length",
                    formula: "c = 2r × sin(θ/2)",
                    solution: 15,
                    steps: [
                        "Given: r = 15 cm, θ = 60°",
                        "Formula: c = 2r × sin(θ/2)",
                        "Substitute: c = 2(15) × sin(60°/2)",
                        "Calculate: c = 30 × sin(30°)",
                        "Evaluate: c = 30 × 0.5",
                        "Result: c = 15 cm"
                    ],
                    difficulty: "medium",
                    note: "For 60° central angle, chord equals radius (forms equilateral triangle)",
                    insight: "This creates an equilateral triangle!"
                },
                {
                    problem: "A chord of length 16 cm is 6 cm from the center. Find the radius of the circle.",
                    given: { c: 16, d: 6 },
                    find: "radius (r)",
                    formula: "r = √((c/2)² + d²)",
                    solution: 10,
                    steps: [
                        "Given: c = 16 cm, d = 6 cm",
                        "Formula: r = √((c/2)² + d²)",
                        "Substitute: r = √((16/2)² + 6²)",
                        "Calculate: r = √(8² + 6²)",
                        "Simplify: r = √(64 + 36)",
                        "Evaluate: r = √100 = 10 cm"
                    ],
                    difficulty: "medium",
                    note: "This is a 3-4-5 right triangle scaled by 2"
                },
                {
                    problem: "An arch has a span of 20 meters and a height of 4 meters. Find the radius of the circular arch.",
                    given: { chord: 20, sagitta: 4 },
                    find: "radius",
                    formula: "r = (c²/(8h)) + (h/2)",
                    solution: 14.5,
                    steps: [
                        "Given: c = 20 m, h = 4 m",
                        "Formula: r = (c²/(8h)) + (h/2)",
                        "Substitute: r = (20²/(8×4)) + (4/2)",
                        "Calculate: r = (400/32) + 2",
                        "Simplify: r = 12.5 + 2",
                        "Result: r = 14.5 m"
                    ],
                    difficulty: "medium",
                    application: "Bridge design"
                }
            ],
            advanced: [
                {
                    problem: "Two chords AB and CD intersect at point P inside a circle. If AP = 4, PB = 6, and CP = 3, find PD.",
                    given: { AP: 4, PB: 6, CP: 3 },
                    find: "PD",
                    theorem: "Intersecting Chords Theorem: AP × PB = CP × PD",
                    solution: 8,
                    steps: [
                        "Given: AP = 4, PB = 6, CP = 3",
                        "Theorem: AP × PB = CP × PD",
                        "Substitute: 4 × 6 = 3 × PD",
                        "Calculate: 24 = 3 × PD",
                        "Solve: PD = 24/3",
                        "Result: PD = 8"
                    ],
                    difficulty: "hard",
                    concept: "Intersecting chords theorem"
                },
                {
                    problem: "In a circle of radius 20 cm, find the length of a chord that makes an angle of 90° with a radius at the point of contact.",
                    given: { r: 20, configuration: "chord perpendicular to radius" },
                    find: "chord length",
                    insight: "This chord is tangent at one end",
                    solution: 28.28,
                    steps: [
                        "Given: r = 20 cm, chord ⊥ radius at one endpoint",
                        "This forms a right angle at the circle",
                        "From center to other chord endpoint forms radius",
                        "Triangle formed: two legs are r and c, hypotenuse is √(r² + c²)",
                        "But other radius also = r, so: r² + c² = (2r)² is incorrect...",
                        "Actually: chord from tangent point: c = r√2",
                        "c = 20√2 ≈ 28.28 cm"
                    ],
                    difficulty: "hard",
                    note: "Special case involving tangent-like configuration"
                },
                {
                    problem: "A circular segment has chord length 24 cm and height (sagitta) 8 cm. Find the area of the segment.",
                    given: { c: 24, h: 8 },
                    find: "area of segment",
                    solution: 156.54,
                    steps: [
                        "First find radius: r = (c²/(8h)) + (h/2)",
                        "r = (24²/(8×8)) + (8/2) = (576/64) + 4 = 9 + 4 = 13 cm",
                        "Find central angle: sin(θ/2) = (c/2)/r = 12/13",
                        "θ/2 = arcsin(12/13) ≈ 67.38°, so θ ≈ 134.76° ≈ 2.352 rad",
                        "Sector area = (1/2)r²θ = (1/2)(13²)(2.352) ≈ 198.828",
                        "Triangle area = (1/2)c×(r-h) = (1/2)(24)(13-8) = 60",
                        "Segment area = Sector - Triangle ≈ 198.83 - 60 = 138.83",
                        "Actually: Segment = (1/2)r²(θ - sin θ) ≈ 156.54 cm²"
                    ],
                    difficulty: "hard",
                    note: "Requires multiple formulas and careful calculation"
                }
            ],
            byMethod: {
                pythagorean: [
                    { problem: "r = 5, d = 3, find c", solution: 8, formula: "c = 2√(r² - d²)" },
                    { problem: "r = 10, d = 6, find c", solution: 16, formula: "c = 2√(r² - d²)" },
                    { problem: "r = 13, c = 24, find d", solution: 5, formula: "d = √(r² - (c/2)²)" },
                    { problem: "c = 16, d = 6, find r", solution: 10, formula: "r = √((c/2)² + d²)" }
                ],
                trigonometric: [
                    { problem: "r = 10, θ = 60°, find c", solution: 10, formula: "c = 2r sin(θ/2)" },
                    { problem: "r = 8, θ = 90°, find c", solution: 11.31, formula: "c = 2r sin(θ/2)" },
                    { problem: "r = 12, θ = 120°, find c", solution: 20.78, formula: "c = 2r sin(θ/2)" }
                ],
                sagitta: [
                    { problem: "c = 20, h = 4, find r", solution: 14.5, formula: "r = (c²/(8h)) + (h/2)" },
                    { problem: "c = 30, h = 5, find r", solution: 24.5, formula: "r = (c²/(8h)) + (h/2)" },
                    { problem: "r = 15, h = 6, find c", solution: 24, formula: "c = 2√(h(2r-h))" }
                ]
            }
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            using_full_chord: {
                misconception: "Using the full chord length c instead of c/2 in Pythagorean theorem",
                reality: "The perpendicular from center bisects the chord, creating right triangles with legs of length c/2, not c",
                correctiveExample: "If chord is 10 cm, use (10/2)² = 25, not 10² = 100",
                correctFormula: "r² = d² + (c/2)² ✓ NOT r² = d² + c² ✗",
                commonIn: ['basic_chord', 'all_Pythagorean_applications'],
                severity: "Critical - leads to wrong answer"
            },
            radius_vs_diameter: {
                misconception: "Confusing radius and diameter in calculations",
                reality: "Radius is half the diameter; using wrong value doubles or halves the answer",
                correctiveExample: "If diameter = 20, then radius = 10. Use r = 10 in formulas, not r = 20",
                prevention: "Always write 'r =' and 'd =' to clarify which you're using",
                commonIn: ['all_chord_problems'],
                severity: "Critical - common mistake"
            },
            angle_not_halved: {
                misconception: "Using sin(θ) instead of sin(θ/2) in chord formula",
                reality: "The sine formula requires HALF the central angle because the perpendicular bisects the angle",
                correctiveExample: "For 60° central angle: c = 2r sin(30°), not c = 2r sin(60°)",
                correctFormula: "c = 2r sin(θ/2) ✓ NOT c = 2r sin(θ) ✗",
                commonIn: ['angle_based'],
                severity: "Critical - fundamental formula error"
            },
            calculator_mode: {
                misconception: "Calculator in wrong mode (degrees vs radians)",
                reality: "sin(30°) ≠ sin(30 radians). Must match angle units to calculator mode",
                correctiveExample: "30° in degree mode gives sin = 0.5. 30 radians in radian mode gives sin ≈ -0.988",
                prevention: "Check calculator mode before EVERY trigonometric calculation",
                commonIn: ['angle_based', 'all_trig_calculations'],
                severity: "Critical - completely wrong answer"
            },
            distance_exceeds_radius: {
                misconception: "Accepting distance from center greater than radius",
                reality: "Distance from center to chord MUST be less than radius (d < r)",
                correctiveExample: "If r = 5, then d cannot be 7. Any point more than 5 away is outside the circle!",
                physicalCheck: "The farthest point from center is on the circle itself, at distance = radius",
                commonIn: ['all_chord_problems'],
                severity: "Conceptual - indicates misunderstanding of circles"
            },
            chord_exceeds_diameter: {
                misconception: "Calculating chord length greater than diameter",
                reality: "Longest possible chord is the diameter. If c > 2r, something is wrong",
                correctiveExample: "If r = 8, maximum chord is 2(8) = 16. A chord of 20 is impossible!",
                physicalCheck: "The longest straight line in a circle is the diameter",
                commonIn: ['all_chord_calculations'],
                severity: "Conceptual - answer physically impossible"
            },
            negative_under_sqrt: {
                misconception: "Attempting to take square root of negative number",
                reality: "√(negative) is not a real number. If r² - d² < 0, then d > r which is impossible",
                correctiveExample: "√(25 - 36) = √(-11) means the problem setup is impossible",
                whatToDoWhen: "Check your values. If d > r, the perpendicular distance exceeds the radius, which is impossible",
                commonIn: ['basic_chord', 'reverse_calculations'],
                severity: "Critical - indicates impossible configuration"
            },
            intersecting_chords_wrong_segments: {
                misconception: "Multiplying wrong segments in intersecting chords theorem",
                reality: "Must multiply segments of SAME chord: (AP × PB) = (CP × PD)",
                correctiveExample: "AP × PB = CP × PD ✓ NOT AP × CP = PB × PD ✗",
                memory_aid: "Segments from same chord multiply together",
                commonIn: ['chord_properties', 'intersecting_chords'],
                severity: "Important - leads to wrong answer in theorem problems"
            },
            equal_chords_must_parallel: {
                misconception: "Thinking equal chords must be parallel to each other",
                reality: "Equal chords are equidistant from center, but can be in any orientation",
                correctiveExample: "Two 10-cm chords in a circle are both 4 cm from center, but can be at any angle to each other",
                correctConcept: "Equal chords → equal distances from center. Orientation doesn't matter.",
                commonIn: ['chord_properties', 'equal_chords'],
                severity: "Conceptual - limits understanding"
            },
            sagitta_vs_distance: {
                misconception: "Confusing sagitta (height from chord) with distance from center",
                reality: "Sagitta h = r - d. Sagitta is measured from chord UP to arc. Distance is from center to chord.",
                correctiveExample: "If r = 10 and d = 6, then h = 10 - 6 = 4. The sagitta is 4, not 6.",
                diagram: "Draw both: d is from center perpendicular to chord; h is from chord to arc",
                commonIn: ['segment_properties', 'sagitta_problems'],
                severity: "Important - different measurements with different meanings"
            },
            forgetting_to_square: {
                misconception: "Forgetting to square terms in Pythagorean theorem",
                reality: "Must square each term: r² = d² + (c/2)², not r = d + c/2",
                correctiveExample: "r² = 5² + 3² = 25 + 9 = 34, so r = √34 ✓ NOT r = 5 + 3 = 8 ✗",
                prevention: "Write the ² symbols explicitly in your work",
                commonIn: ['basic_chord', 'all_Pythagorean_applications'],
                severity: "Critical - fundamental error"
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            chord_as_bridge: {
                analogy: "A chord is like a bridge connecting two cities on opposite sides of a circular lake",
                explanation: "The bridge (chord) is the straight path. The road around the lake (arc) is longer and curved. The shortest distance from center of lake to the bridge is perpendicular.",
                suitableFor: ['basic_chord', 'all_levels'],
                ELI5: "Imagine a round pond. If you walk around the edge, that's the long way (the arc). If you build a straight bridge across, that's the short way (the chord)!"
            },
            perpendicular_as_arrow: {
                analogy: "The perpendicular from center is like an arrow shot from the center hitting the chord at its exact middle",
                explanation: "Just like an arrow shot perfectly straight will hit a target at its center, a perpendicular from the circle's center hits the chord exactly in the middle",
                suitableFor: ['perpendicular_bisector', 'basic_concepts'],
                ELI5: "If you stand in the middle of a circular room and throw a ball straight at the wall, it hits the wall at a right angle and splits the wall into two equal parts!"
            },
            right_triangle_as_ladder: {
                analogy: "The right triangle is like a ladder leaning against a wall",
                explanation: "The ladder (radius) leans from the ground (endpoint of half-chord) to the wall (center). The distance from wall base to ladder base is one leg, the height up the wall is another leg.",
                suitableFor: ['pythagorean_relationship'],
                ELI5: "Think of a ladder leaning on a wall. The ladder is like the radius, how far the bottom is from the wall is like half the chord, and how high up it reaches is like the distance from center."
            },
            water_in_glass: {
                analogy: "Water in a round glass - the water surface is a chord",
                explanation: "When you fill a round glass partway, the water surface is flat (a chord). The more water, the longer the chord. Halfway full = longest chord (diameter).",
                suitableFor: ['practical_understanding', 'visualization'],
                ELI5: "If you put water in a round glass and look from the side, the top of the water is a straight line (chord). The bottom of the glass is curved (arc)."
            },
            pizza_slices: {
                analogy: "Cutting a pizza - the crust edge is arc, cutting straight across is chord",
                explanation: "Two cuts from center give you a slice. The curved crust is the arc. If you cut straight across the crust instead of following the curve, that's the chord.",
                suitableFor: ['angle_based', 'central_angle'],
                ELI5: "When you cut a pizza slice, you usually cut from the middle to the edge in two places. The curved crust between those cuts is the arc. If you cut straight across the crust, that straight cut would be the chord!"
            },
            rainbow: {
                analogy: "A rainbow in the sky",
                explanation: "The rainbow is curved (like an arc). An imaginary line connecting the two ends where the rainbow touches the ground is the chord. How high the rainbow goes is like the sagitta.",
                suitableFor: ['arc_chord_relationship', 'sagitta'],
                ELI5: "See a rainbow? Imagine drawing a straight line from where it starts to where it ends. That straight line is a chord! How high the rainbow goes up is like the sagitta (the height of the arch)."
            },
            doorway_arch: {
                analogy: "An arched doorway",
                explanation: "The width of the door at the floor is the chord. The height of the arch above the door frame is the sagitta. The curve of the arch is part of a circle.",
                suitableFor: ['architectural_applications', 'sagitta'],
                ELI5: "Think of a fancy arched doorway. The flat bottom is the chord, and how high the arch goes up is the sagitta. If you could continue the curve, it would make a complete circle!"
            },
            bicycle_wheel_spoke: {
                analogy: "Spokes vs chords in a bicycle wheel",
                explanation: "Spokes go from center to edge (radii). Chords go from edge to edge without passing through center. The tire rim is the circle.",
                suitableFor: ['radius_vs_chord', 'basic_concepts'],
                ELI5: "In a bicycle wheel, the spokes go from the middle to the edge - those are radii. If you drew a straight line from one part of the tire to another part (not through the middle), that would be a chord!"
            },
            tunnel_through_mountain: {
                analogy: "A tunnel is like a chord through a circular mountain",
                explanation: "If you drill straight through a round mountain, the tunnel is a chord. Going over the mountain follows the arc. The tunnel (chord) is always shorter than going over (arc).",
                suitableFor: ['engineering_applications', 'chord_vs_arc'],
                ELI5: "Imagine a round mountain. You could walk over the top (following the curve), or drill a straight tunnel through it. The tunnel is the chord - it's the straight, shorter path!"
            },
            clock_face: {
                analogy: "Drawing lines between numbers on a clock",
                explanation: "The clock face is a circle. If you draw a line from 12 to 3, that's a chord. From 12 to 6 (through the center) is the diameter - the longest chord.",
                suitableFor: ['introductory_concepts', 'angle_relationships'],
                ELI5: "Look at a clock. If you draw a straight line from the 12 to the 6, that's a chord (actually the diameter). A line from 12 to 3 is a shorter chord. The hands of the clock make the central angle!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            basic_chord_from_radius_distance: {
                level1: "What formula connects radius, distance, and chord length?",
                level2: "Think about the Pythagorean theorem. What right triangle do you see?",
                level3: "The right triangle has hypotenuse = radius, legs = distance and half-chord",
                level4: "Use c = 2√(r² - d²). Remember to use c/2 in the triangle, then multiply by 2",
                level5: "With r = {r} and d = {d}: c = 2√({r}² - {d}²) = 2√({r_squared} - {d_squared}) = {answer}"
            },
            angle_based_chord: {
                level1: "What formula involves angle, radius, and chord?",
                level2: "Think trigonometry. What function relates the angle to the sides?",
                level3: "The formula is c = 2r × sin(θ/2). Which angle do you use?",
                level4: "Use HALF the central angle: sin(θ/2), not sin(θ). Make sure calculator is in correct mode!",
                level5: "With r = {r} and θ = {angle}°: c = 2({r}) × sin({angle}/2) = 2({r}) × sin({half_angle}°) = {answer}"
            },
            reverse_find_distance: {
                level1: "How can you rearrange the chord formula to solve for distance?",
                level2: "Start with r² = d² + (c/2)². How do you isolate d?",
                level3: "Subtract (c/2)² from both sides, then take square root",
                level4: "d = √(r² - (c/2)²). Remember: divide chord by 2 first!",
                level5: "With r = {r} and c = {c}: d = √({r}² - ({c}/2)²) = √({r_squared} - {half_c_squared}) = {answer}"
            },
            reverse_find_radius: {
                level1: "What formula can you rearrange to find radius?",
                level2: "From r² = d² + (c/2)², how do you solve for r?",
                level3: "Add d² and (c/2)², then take square root",
                level4: "r = √(d² + (c/2)²). Square the distance, square half the chord, add them, then square root",
                level5: "With d = {d} and c = {c}: r = √({d}² + ({c}/2)²) = √({d_squared} + {half_c_squared}) = {answer}"
            },
            sagitta_problem: {
                level1: "What's the relationship between chord, sagitta, and radius?",
                level2: "Sagitta h = r - d. Can you use this with the chord formula?",
                level3: "For radius from chord and sagitta: r = (c²/(8h)) + (h/2)",
                level4: "Divide c² by (8 times h), then add (h divided by 2)",
                level5: "With c = {c} and h = {h}: r = ({c}²/(8×{h})) + ({h}/2) = ({c_squared}/{denominator}) + {h_half} = {answer}"
            },
            intersecting_chords: {
                level1: "What theorem applies when two chords intersect inside a circle?",
                level2: "The Intersecting Chords Theorem: products of segments are equal",
                level3: "If chords AB and CD intersect at P: AP × PB = CP × PD",
                level4: "Multiply the two segments of one chord, set equal to product of segments of other chord",
                level5: "With AP = {AP}, PB = {PB}, CP = {CP}: {AP} × {PB} = {CP} × PD, so PD = ({AP}×{PB})/{CP} = {answer}"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "A circle has radius 5. A chord is 3 from the center. Find the chord length.",
                    answer: 8,
                    assesses: "basic_pythagorean",
                    difficulty: "basic"
                },
                {
                    question: "Find chord length: r = 10, d = 6",
                    answer: 16,
                    assesses: "basic_formula_application",
                    difficulty: "basic"
                },
                {
                    question: "A chord of length 24 is 5 from the center. Find the radius.",
                    answer: 13,
                    assesses: "reverse_calculation",
                    difficulty: "intermediate"
                },
                {
                    question: "In a circle of radius 8, find the chord length for a 60° central angle.",
                    answer: 8,
                    assesses: "angle_based",
                    difficulty: "intermediate"
                },
                {
                    question: "An arch has span 20 m and height 5 m. Find the radius.",
                    answer: 12.5,
                    assesses: "sagitta_application",
                    difficulty: "advanced"
                }
            ],
            formative: [
                {
                    question: "In the formula c = 2√(r² - d²), what does c/2 represent in the right triangle?",
                    options: ["The hypotenuse", "One leg (half the chord)", "The distance from center", "The radius"],
                    correct: "One leg (half the chord)",
                    explanation: "The perpendicular from center bisects the chord, so each half is c/2"
                },
                {
                    question: "If chord length equals diameter, where is the chord?",
                    options: ["At the center", "Passing through the center", "At the edge", "Impossible"],
                    correct: "Passing through the center",
                    explanation: "The diameter is the longest chord and passes through the center"
                },
                {
                    question: "For central angle θ, the chord formula uses:",
                    options: ["sin(θ)", "sin(θ/2)", "cos(θ)", "tan(θ)"],
                    correct: "sin(θ/2)",
                    explanation: "The perpendicular bisects the central angle, so we use half the angle"
                },
                {
                    question: "If distance from center equals radius, what's the chord length?",
                    options: ["Maximum", "Zero", "Equals radius", "Undefined"],
                    correct: "Zero",
                    explanation: "When d = r, the formula gives c = 2√(r² - r²) = 0"
                },
                {
                    question: "Two equal chords in the same circle are:",
                    options: ["Parallel", "Perpendicular", "Equidistant from center", "Intersecting"],
                    correct: "Equidistant from center",
                    explanation: "Equal chords have equal perpendicular distances from the center"
                }
            ],
            summative: [
                {
                    question: "A circular tunnel has radius 6 m. Find the width 4 m above the lowest point.",
                    answer: 8.94,
                    showsWork: true,
                    rubric: {
                        identify_d: 1,
                        apply_formula: 2,
                        calculate_correctly: 1,
                        verify_reasonable: 1
                    }
                },
                {
                    question: "An arch bridge has a 40 m span and rises 8 m. Find the radius of the arch.",
                    answer: 29,
                    showsWork: true,
                    rubric: {
                        identify_sagitta: 1,
                        apply_formula: 2,
                        arithmetic: 1,
                        interpretation: 1
                    }
                },
                {
                    question: "In a circle, a chord makes a 90° angle at the center. If radius is 10, find chord length.",
                    answer: 14.14,
                    showsWork: true,
                    rubric: {
                        identify_angle_formula: 1,
                        use_half_angle: 1,
                        calculate_sin: 1,
                        final_answer: 1,
                        verification: 1
                    }
                }
            ],
            byDifficulty: {
                easy: [
                    "r = 5, d = 3, find c",
                    "r = 10, d = 6, find c",
                    "r = 13, d = 5, find c",
                    "r = 17, d = 8, find c"
                ],
                medium: [
                    "r = 10, c = 16, find d",
                    "c = 24, d = 5, find r",
                    "r = 15, θ = 60°, find c",
                    "c = 20, h = 4, find r"
                ],
                hard: [
                    "An arch spans 30 m with height 6 m. Find radius and maximum height",
                    "Two chords intersect: AP = 3, PB = 8, CP = 4, find PD",
                    "Find chord at 30° from diameter in circle of radius 12",
                    "A 10 m radius dome. Find width 3 m below top"
                ]
            },
            byObjective: {
                canUsePythagorean: [
                    "r = 5, d = 4, find c",
                    "r = 13, d = 12, find c",
                    "r = 10, c = 12, find d"
                ],
                canUseAngleFormula: [
                    "r = 8, θ = 90°, find c",
                    "r = 10, θ = 60°, find c",
                    "r = 12, θ = 120°, find c"
                ],
                canUseSagitta: [
                    "c = 16, h = 4, find r",
                    "r = 20, h = 5, find c",
                    "c = 30, h = 6, find r"
                ],
                canSolveWordProblems: [
                    "A round window has 2 m diameter. Find chord 0.3 m from center.",
                    "Tunnel radius is 5 m. What's the width 3 m from bottom?",
                    "Bridge arch spans 24 m, height 4 m. Find radius."
                ]
            }
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            decisionTree: {
                "given_r_and_d": "Use c = 2√(r² - d²)",
                "given_r_and_angle": "Use c = 2r sin(θ/2), check calculator mode",
                "given_r_and_c": "Use d = √(r² - (c/2)²)",
                "given_c_and_d": "Use r = √((c/2)² + d²)",
                "given_c_and_h": "Use r = (c²/(8h)) + (h/2)",
                "intersecting_chords": "Use AP × PB = CP × PD",
                "equal_chords": "Equal chords are equidistant from center",
                "maximum_chord": "Diameter is longest chord = 2r"
            },
            problemRecognition: {
                "Pythagorean_application": "Look for radius, distance, chord - right triangle",
                "Angle_application": "Look for degrees, central angle, arc - use trigonometry",
                "Sagitta_application": "Look for arch, height, span - segment formula",
                "Theorem_application": "Look for 'intersect', 'equal chords' - use theorems",
                "Engineering_context": "Identify tunnel, arch, dome - apply appropriate formula"
            },
            whenToUseWhat: {
                pythagorean: "When you have any two of: radius, distance, chord length",
                trigonometric: "When you have radius and central angle, or need to find angle",
                sagitta_formula: "When dealing with height of arch/segment",
                intersecting_theorem: "When two chords cross inside the circle",
                equal_chord_theorem: "When comparing two or more chords in same circle"
            },
            solvingApproach: {
                step1: "Draw a clear diagram",
                step2: "Label all known values",
                step3: "Identify what's being asked",
                step4: "Choose appropriate formula",
                step5: "Substitute values carefully",
                step6: "Compute step-by-step",
                step7: "Check if answer makes sense",
                step8: "Verify units and reasonableness"
            },
            verificationChecks: [
                "Is chord length ≤ diameter (2r)?",
                "Is distance from center < radius?",
                "Are units consistent?",
                "Does the answer make physical sense?",
                "If using angle, is calculator in correct mode?",
                "Did I use c/2, not c, in Pythagorean calculations?"
            ],
            optimizationTips: {
                "Draw first": "Always sketch the circle and chord before solving",
                "Label everything": "Mark r, d, c/2, angles clearly",
                "Use c/2 explicitly": "Write (c/2) in your work to avoid forgetting",
                "Check mode": "For trig, verify DEG or RAD before calculating",
                "Simplify radicals": "√64 = 8 is cleaner than leaving as √64",
                "Physical reality": "If answer seems impossible, double-check setup"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Basic Chord Sprint",
                    timeLimit: 120,
                    problems: [
                        "r = 5, d = 3, find c",
                        "r = 10, d = 6, find c",
                        "r = 13, d = 5, find c",
                        "r = 17, d = 8, find c",
                        "r = 25, d = 7, find c"
                    ],
                    solutions: [8, 16, 24, 30, 48]
                },
                {
                    name: "Reverse Calculation Challenge",
                    timeLimit: 180,
                    problems: [
                        "c = 16, d = 6, find r",
                        "r = 13, c = 24, find d",
                        "c = 30, d = 8, find r",
                        "r = 20, c = 24, find d"
                    ],
                    solutions: [10, 5, 17, 13.27]
                }
            ],
            puzzles: [
                {
                    name: "The Mystery Circle",
                    problem: "A chord has length 24. It's 5 from the center. Find the radius. Then, find how many other chords of the same length can fit in this circle.",
                    solution: "r = 13. Infinite chords of length 24 can fit (all 5 from center)",
                    concept: "Equal chords are equidistant from center"
                },
                {
                    name: "The Arch Builder",
                    problem: "You need to build an arch that spans exactly 20 meters and rises exactly 4 meters. What's the radius? What if you want it to rise 5 meters instead - what changes?",
                    solution: "For h=4: r=14.5m. For h=5: r=12.5m. Higher arch needs smaller radius",
                    concept: "Sagitta formula and inverse relationship"
                },
                {
                    name: "The Tunnel Digger",
                    problem: "A circular tunnel has radius 10 m. How wide is it at: (a) the center, (b) 5m from center, (c) 8m from center, (d) 10m from center?",
                    solution: "(a) 20m (diameter), (b) 17.32m, (c) 12m, (d) 0m (edge of circle)",
                    concept: "Chord length varies with distance from center"
                },
                {
                    name: "The Bridge Designer's Dilemma",
                    problem: "You can build an arch bridge with either: (1) 30m span, 5m rise, or (2) 30m span, 10m rise. Which needs a larger circle? Why might you choose one over the other?",
                    solution: "Option 1: r=24.5m. Option 2: r=13.5m. Higher arch (2) needs smaller radius but steeper curve",
                    concept: "Design trade-offs in engineering"
                }
            ],
            applications: [
                {
                    scenario: "Window Design",
                    problem: "A circular window has 2-meter diameter. The builder wants to install a horizontal support bar 30 cm below the center. How long should the bar be?",
                    equation: "r = 1, d = 0.3, find c",
                    solution: "1.9 meters",
                    realWorld: "Common in architectural design"
                },
                {
                    scenario: "Satellite Dish",
                    problem: "A satellite dish is a circular segment with 1.5m diameter and 0.25m depth. Find the radius of the full circle it's part of.",
                    equation: "c = 1.5, h = 0.25, find r",
                    solution: "1.25 meters",
                    realWorld: "Telecommunications engineering"
                },
                {
                    scenario: "Pipe Flow",
                    problem: "A 3-meter diameter sewer pipe is filled to 1 meter depth. What's the width of the water surface?",
                    equation: "r = 1.5, d = 0.5 (distance from center to water), find c",
                    solution: "2.83 meters",
                    realWorld: "Civil engineering and hydraulics"
                },
                {
                    scenario: "Observatory Dome",
                    problem: "An observatory dome has radius 15m. The telescope opening needs to be 8m wide. How far below the dome's highest point is this opening?",
                    equation: "r = 15, c = 8, find d, then h = r - d",
                    solution: "d = 13.27m, so opening is 15 - 13.27 = 1.73m below top",
                    realWorld: "Astronomical facility design"
                }
            ],
            debugging: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "r = 10, d = 6, find c",
                        "c = 2√(r² - d²)",
                        "c = 2√(100 - 36)",
                        "c = 2√64",
                        "c = 2(8)",
                        "c = 16 ✓"
                    ],
                    isCorrect: true,
                    note: "This is actually CORRECT! Good work."
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "r = 13, c = 24, find d",
                        "d = √(r² - c²)",  // ERROR: should be c/2
                        "d = √(169 - 576)",
                        "d = √(-407)",
                        "Error: negative under square root"
                    ],
                    correctAnswer: "d = 5",
                    errorType: "Used c instead of c/2 in formula",
                    correction: "d = √(r² - (c/2)²) = √(169 - 144) = √25 = 5"
                },
                {
                    name: "Find the Error #3",
                    incorrectWork: [
                        "r = 10, θ = 60°, find c",
                        "c = 2r × sin(θ)",  // ERROR: should be θ/2
                        "c = 20 × sin(60°)",
                        "c = 20 × 0.866",
                        "c = 17.32"
                    ],
                    correctAnswer: "c = 10",
                    errorType: "Used sin(θ) instead of sin(θ/2)",
                    correction: "c = 2r × sin(θ/2) = 20 × sin(30°) = 20 × 0.5 = 10"
                },
                {
                    name: "Find the Error #4",
                    incorrectWork: [
                        "c = 20, h = 5, find r",
                        "r = c²/(8h) + h/2",  // ERROR: missing parentheses changes order
                        "r = 400/8×5 + 5/2",
                        "r = 50×5 + 2.5",
                        "r = 252.5"
                    ],
                    correctAnswer: "r = 12.5",
                    errorType: "Order of operations error",
                    correction: "r = (c²/(8h)) + (h/2) = (400/40) + 2.5 = 10 + 2.5 = 12.5"
                }
            ],
            constructions: [
                {
                    name: "Perfect Hexagon",
                    challenge: "Using compass and straightedge, construct a regular hexagon inscribed in a circle",
                    hint: "Chords equal to radius form equilateral triangles",
                    solution: "The chord length equals radius when central angle is 60°"
                },
                {
                    name: "Equal Chords",
                    challenge: "Draw three different chords of equal length in the same circle",
                    hint: "All must be equidistant from center",
                    solution: "Use compass to mark equal distances from center, draw perpendiculars, mark chord endpoints"
                }
            ]
        };
    }

    initializeHistoricalContext() {
        this.historicalContext = {
            ancient_greece: {
                period: "Ancient Greece (300 BCE)",
                contributors: ["Euclid", "Archimedes"],
                contributions: [
                    "Euclid's Elements Book III: fundamental chord theorems",
                    "Archimedes' method for approximating π using chords",
                    "Development of geometric proofs for chord properties"
                ],
                significance: "Foundation of circle geometry and geometric proofs",
                interesting_fact: "Ptolemy used chord tables (equivalent to trig tables) for astronomy"
            },
            islamic_golden_age: {
                period: "Islamic Golden Age (800-1200 CE)",
                contributors: ["Al-Khwarizmi", "Al-Biruni", "Omar Khayyam"],
                contributions: [
                    "Development of trigonometry from chord calculations",
                    "Astronomical applications using chord theorems",
                    "Improved calculation methods for chords and arcs"
                ],
                significance: "Bridge between Greek geometry and modern trigonometry",
                interesting_fact: "The word 'sine' comes from mistranslation of Arabic 'jayb' (chord)"
            },
            renaissance: {
                period: "Renaissance (1400-1600)",
                contributors: ["Leonardo da Vinci", "Brunelleschi"],
                contributions: [
                    "Application to dome and arch construction",
                    "Perspective drawing using circle and chord geometry",
                    "Engineering applications in architecture"
                ],
                significance: "Practical application in art and architecture",
                interesting_fact: "Brunelleschi's dome in Florence used chord calculations for construction"
            },
            modern_applications: {
                period: "Modern Era (1800-present)",
                contributors: ["Engineers", "Mathematicians", "Computer Scientists"],
                contributions: [
                    "Bridge and tunnel engineering",
                    "Computer graphics and CAD",
                    "Optical lens design",
                    "Satellite and antenna technology"
                ],
                significance: "Essential in modern engineering and technology",
                interesting_fact: "GPS satellites use chord calculations for position triangulation"
            }
        };
    }

    initializeCrossCurricularLinks() {
        this.crossCurricularLinks = {
            physics: {
                topic: "Circular Motion and Optics",
                connections: [
                    "Projectile motion - trajectory calculations",
                    "Lens equations and focal lengths",
                    "Pendulum motion - arc and chord lengths",
                    "Orbital mechanics"
                ],
                example: "A satellite's path can be approximated using circular arcs, where straight-line distances are chords"
            },
            engineering: {
                topic: "Structural and Civil Engineering",
                connections: [
                    "Arch bridge design and stress analysis",
                    "Tunnel construction and clearance",
                    "Dome structures",
                    "Gear and wheel mechanics"
                ],
                example: "The Gateway Arch in St. Louis uses chord calculations in its catenary curve design"
            },
            astronomy: {
                topic: "Celestial Navigation and Observation",
                connections: [
                    "Angular distance between stars",
                    "Observatory dome openings",
                    "Telescope positioning",
                    "Satellite dish alignment"
                ],
                example: "Ancient astronomers used chord tables to calculate star positions"
            },
            architecture: {
                topic: "Design and Construction",
                connections: [
                    "Arched windows and doorways",
                    "Circular and domed structures",
                    "Curved facades and walls",
                    "Decorative circular elements"
                ],
                example: "Gothic cathedrals use pointed arches where chord calculations determine structural integrity"
            },
            geography: {
                topic: "Navigation and Surveying",
                connections: [
                    "Great circle routes on Earth",
                    "Distance calculations on curved surfaces",
                    "Map projections",
                    "Horizon distance calculations"
                ],
                example: "Ships navigate using great circle routes - the chord represents the straight-line distance while the arc is the actual path"
            },
            art: {
                topic: "Perspective and Design",
                connections: [
                    "Perspective drawing with circular objects",
                    "Ellipses as projected circles",
                    "Circular compositions",
                    "Mandala and circular patterns"
                ],
                example: "Renaissance artists used chord geometry to create realistic perspective in paintings with circular elements"
            },
            computer_science: {
                topic: "Graphics and Algorithms",
                connections: [
                    "Circle rasterization algorithms",
                    "Arc and curve rendering",
                    "Collision detection",
                    "Path finding with curved obstacles"
                ],
                example: "Video games use chord calculations for circular collision detection and curved path rendering"
            },
            biology: {
                topic: "Anatomy and Natural Structures",
                connections: [
                    "Eye lens curvature",
                    "Blood vessel cross-sections",
                    "Cell membrane geometry",
                    "Growth rings in trees"
                ],
                example: "The human eye's lens uses circular segment geometry to focus light"
            }
        };
    }

    // MAIN SOLVER METHOD
    solveChordProblem(config) {
        const { equation, scenario, parameters, problemType, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseChordProblem(equation, scenario, parameters, problemType, context);

            // Solve the problem
            this.currentSolution = this.solveChordProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateChordSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateChordGraphData();

            // Generate workbook
            this.generateChordWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                solutionValue: this.currentSolution?.chordLength || this.currentSolution?.distance || this.currentSolution?.radius,
                diagram: this.currentSolution?.diagram
            };

        } catch (error) {
            throw new Error(`Failed to solve chord problem: ${error.message}`);
        }
    }

    parseChordProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = equation ? this.cleanMathExpression(equation) : '';

        // If problem type is specified, use it directly
        if (problemType && this.chordTypes[problemType]) {
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

        // Auto-detect chord problem type
        for (const [type, config] of Object.entries(this.chordTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    return {
                        originalInput: equation || scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        // Default based on parameters provided
        if (parameters.r !== undefined && parameters.d !== undefined) {
            return {
                originalInput: 'Chord calculation from radius and distance',
                cleanInput: cleanInput,
                type: 'chord_from_radius_distance',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        } else if (parameters.r !== undefined && parameters.angle !== undefined) {
            return {
                originalInput: 'Chord calculation from radius and angle',
                cleanInput: cleanInput,
                type: 'chord_from_radius_angle',
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        throw new Error(`Unable to recognize chord problem type from: ${equation || scenario}`);
    }

    cleanMathExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/≤/g, '<=')
            .replace(/≥/g, '>=')
            .replace(/√/g, 'sqrt')
            .replace(/π/g, 'pi')
            .replace(/°/g, 'deg')
            .trim();
    }

    solveChordProblem_Internal(problem) {
        const solver = this.chordTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for chord problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // CHORD EQUATION SOLVERS

    solveChordFromRadiusDistance(problem) {
        const { r, d } = problem.parameters;

        // Validation
        if (d > r) {
            return {
                type: 'Chord from Radius and Distance',
                error: 'Impossible configuration',
                explanation: `Distance from center (${d}) cannot exceed radius (${r})`,
                category: 'basic_chord'
            };
        }

        // Calculate using Pythagorean theorem
        const radicand = r * r - d * d;
        const halfChord = Math.sqrt(radicand);
        const chordLength = 2 * halfChord;

        return {
            type: 'Chord from Radius and Distance',
            formula: 'c = 2√(r² - d²)',
            given: { radius: r, distance: d },
            calculation: {
                r_squared: r * r,
                d_squared: d * d,
                radicand: radicand,
                half_chord: halfChord,
                chord_length: chordLength
            },
            chordLength: chordLength,
            halfChord: halfChord,
            verification: this.verifyChordSolution(r, d, chordLength),
            category: 'basic_chord',
            diagram: {
                type: 'circle_with_chord',
                elements: {
                    radius: r,
                    distance: d,
                    chord: chordLength,
                    halfChord: halfChord,
                    rightTriangle: true
                }
            }
        };
    }

    solveChordFromRadiusAngle(problem) {
        const { r, angle, angleUnit } = problem.parameters;
        const unit = angleUnit || 'degrees';

        // Convert angle to radians if needed
        let angleRad;
        if (unit === 'degrees') {
            angleRad = (angle * Math.PI) / 180;
        } else {
            angleRad = angle;
        }

        // Calculate chord length: c = 2r * sin(θ/2)
        const halfAngleRad = angleRad / 2;
        const halfAngleDeg = unit === 'degrees' ? angle / 2 : (angle * 180) / Math.PI / 2;
        const sineValue = Math.sin(halfAngleRad);
        const chordLength = 2 * r * sineValue;

        return {
            type: 'Chord from Radius and Central Angle',
            formula: 'c = 2r × sin(θ/2)',
            given: { 
                radius: r, 
                centralAngle: angle,
                angleUnit: unit
            },
            calculation: {
                angle_radians: angleRad,
                half_angle_radians: halfAngleRad,
                half_angle_degrees: halfAngleDeg,
                sine_half_angle: sineValue,
                chord_length: chordLength
            },
            chordLength: chordLength,
            halfChord: chordLength / 2,
            category: 'angle_based',
            note: `Remember: calculator must be in ${unit === 'degrees' ? 'DEGREE' : 'RADIAN'} mode`,
            diagram: {
                type: 'circle_with_central_angle',
                elements: {
                    radius: r,
                    centralAngle: angle,
                    chord: chordLength,
                    isoscelesTriangle: true
                }
            }
        };
    }

    solveChordFromRadiusArc(problem) {
        const { r, s } = problem.parameters; // s = arc length

        // First find central angle: θ = s/r
        const angleRad = s / r;
        const angleDeg = (angleRad * 180) / Math.PI;

        // Then find chord: c = 2r * sin(θ/2)
        const chordLength = 2 * r * Math.sin(angleRad / 2);

        return {
            type: 'Chord from Radius and Arc Length',
            formula: 'θ = s/r, then c = 2r × sin(θ/2)',
            given: { radius: r, arcLength: s },
            calculation: {
                central_angle_rad: angleRad,
                central_angle_deg: angleDeg,
                chord_length: chordLength
            },
            chordLength: chordLength,
            centralAngle: angleDeg,
            category: 'arc_based',
            note: 'Arc length is always greater than chord length',
            ratio: chordLength / s,
            diagram: {
                type: 'circle_with_arc_and_chord',
                elements: {
                    radius: r,
                    arc: s,
                    chord: chordLength,
                    angle: angleDeg
                }
            }
        };
    }

    solveDistanceFromChordRadius(problem) {
        const { r, c } = problem.parameters;

        // Validation
        if (c > 2 * r) {
            return {
                type: 'Distance from Center to Chord',
                error: 'Impossible configuration',
                explanation: `Chord length (${c}) cannot exceed diameter (${2 * r})`,
                category: 'reverse_calculation'
            };
        }

        // Calculate: d = √(r² - (c/2)²)
        const halfChord = c / 2;
        const radicand = r * r - halfChord * halfChord;
        
        if (radicand < 0) {
            return {
                type: 'Distance from Center to Chord',
                error: 'Invalid configuration',
                explanation: 'Chord is too long for this radius',
                category: 'reverse_calculation'
            };
        }

        const distance = Math.sqrt(radicand);

        return {
            type: 'Distance from Center to Chord',
            formula: 'd = √(r² - (c/2)²)',
            given: { radius: r, chordLength: c },
            calculation: {
                r_squared: r * r,
                half_chord: halfChord,
                half_chord_squared: halfChord * halfChord,
                radicand: radicand,
                distance: distance
            },
            distance: distance,
            verification: this.verifyChordSolution(r, distance, c),
            category: 'reverse_calculation',
            diagram: {
                type: 'circle_with_chord',
                elements: {
                    radius: r,
                    chord: c,
                    distance: distance,
                    perpendicular: true
                }
            }
        };
    }

    solveRadiusFromChordDistance(problem) {
        const { c, d } = problem.parameters;

        // Calculate: r = √((c/2)² + d²)
        const halfChord = c / 2;
        const radius = Math.sqrt(halfChord * halfChord + d * d);

        return {
            type: 'Radius from Chord and Distance',
            formula: 'r = √((c/2)² + d²)',
            given: { chordLength: c, distance: d },
            calculation: {
                half_chord: halfChord,
                half_chord_squared: halfChord * halfChord,
                d_squared: d * d,
                sum: halfChord * halfChord + d * d,
                radius: radius
            },
            radius: radius,
            verification: this.verifyChordSolution(radius, d, c),
            category: 'reverse_calculation',
            note: 'This is the inverse of the basic chord formula',
            diagram: {
                type: 'circle_construction',
                elements: {
                    chord: c,
                    distance: d,
                    radius: radius,
                    rightTriangle: true
                }
            }
        };
    }

    solveIntersectingChords(problem) {
        const { AP, PB, CP, PD } = problem.parameters;

        // Intersecting Chords Theorem: AP × PB = CP × PD
        let unknownSegment = null;
        let solution = null;

        if (PD === undefined) {
            // Solve for PD
            solution = (AP * PB) / CP;
            unknownSegment = 'PD';
        } else if (CP === undefined) {
            // Solve for CP
            solution = (AP * PB) / PD;
            unknownSegment = 'CP';
        } else if (PB === undefined) {
            // Solve for PB
            solution = (CP * PD) / AP;
            unknownSegment = 'PB';
        } else if (AP === undefined) {
            // Solve for AP
            solution = (CP * PD) / PB;
            unknownSegment = 'AP';
        }

        return {
            type: 'Intersecting Chords Theorem',
            theorem: 'AP × PB = CP × PD',
            given: { AP, PB, CP, PD },
            unknownSegment: unknownSegment,
            solution: solution,
            verification: {
                product1: AP * PB,
                product2: CP * (PD || solution),
                equal: Math.abs((AP * PB) - (CP * (PD || solution))) < 0.0001
            },
            category: 'chord_properties',
            note: 'Products of segments of intersecting chords are equal',
            diagram: {
                type: 'intersecting_chords',
                elements: {
                    chord1: { segment1: AP, segment2: PB },
                    chord2: { segment1: CP, segment2: PD || solution },
                    intersectionPoint: 'P'
                }
            }
        };
    }

    solveChordBisector(problem) {
        const { r, c } = problem.parameters;

        const halfChord = c / 2;
        const distance = Math.sqrt(r * r - halfChord * halfChord);

        return {
            type: 'Chord Bisector Properties',
            theorem: 'A perpendicular from the center bisects the chord',
            given: { radius: r, chordLength: c },
            results: {
                half_chord: halfChord,
                distance_to_chord: distance,
                bisection_point: 'midpoint of chord'
            },
            properties: [
                'Line from center perpendicular to chord passes through chord\'s midpoint',
                'This creates two congruent right triangles',
                'Each triangle has hypotenuse = radius, legs = distance and half-chord'
            ],
            category: 'chord_properties'
        };
    }

    solveEqualChords(problem) {
        const { r, c1, c2 } = problem.parameters;

        const d1 = Math.sqrt(r * r - (c1 / 2) * (c1 / 2));
        const d2 = Math.sqrt(r * r - (c2 / 2) * (c2 / 2));

        const areEqual = Math.abs(c1 - c2) < 0.0001;
        const areEquidistant = Math.abs(d1 - d2) < 0.0001;

        return {
            type: 'Equal Chords Properties',
            theorem: 'Equal chords are equidistant from center',
            given: { radius: r, chord1: c1, chord2: c2 },
            results: {
                distance1: d1,
                distance2: d2,
                chords_equal: areEqual,
                distances_equal: areEquidistant
            },
            conclusion: areEqual ? 
                'Chords are equal, therefore equidistant from center' :
                'Chords are not equal, therefore at different distances',
            category: 'chord_properties'
        };
    }

    solveChordInscribedAngle(problem) {
        const { r, centralAngle, inscribedAngle } = problem.parameters;

        // Inscribed Angle Theorem: inscribed angle = (1/2) × central angle
        let result = {};

        if (centralAngle !== undefined) {
            result.inscribedAngle = centralAngle / 2;
            result.given = 'central angle';
        } else if (inscribedAngle !== undefined) {
            result.centralAngle = inscribedAngle * 2;
            result.given = 'inscribed angle';
        }

        // Calculate chord if radius is given
        if (r && result.centralAngle) {
            const angleRad = (result.centralAngle * Math.PI) / 180;
            result.chordLength = 2 * r * Math.sin(angleRad / 2);
        }

        return {
            type: 'Chord and Inscribed Angle',
            theorem: 'Inscribed angle = (1/2) × Central angle',
            given: { radius: r, centralAngle, inscribedAngle },
            results: result,
            category: 'angle_based',
            note: 'Inscribed angle has vertex on circle, central angle has vertex at center'
        };
    }

    solveChordSagitta(problem) {
        const { r, c, h } = problem.parameters;

        if (r && h) {
            // Find chord from radius and sagitta
            const chordLength = 2 * Math.sqrt(h * (2 * r - h));
            return {
                type: 'Chord and Sagitta',
                formula: 'c = 2√(h(2r - h))',
                given: { radius: r, sagitta: h },
                chordLength: chordLength,
                distance: r - h,
                category: 'segment_properties'
            };
        } else if (c && h) {
            // Find radius from chord and sagitta
            const radius = (c * c / (8 * h)) + (h / 2);
            return {
                type: 'Radius from Chord and Sagitta',
                formula: 'r = (c²/(8h)) + (h/2)',
                given: { chordLength: c, sagitta: h },
                radius: radius,
                distance: radius - h,
                category: 'segment_properties',
                application: 'Common in arch and dome design'
            };
        } else if (r && c) {
            // Find sagitta from radius and chord
            const d = Math.sqrt(r * r - (c / 2) * (c / 2));
            const sagitta = r - d;
            return {
                type: 'Sagitta from Radius and Chord',
                formula: 'h = r - d, where d = √(r² - (c/2)²)',
                given: { radius: r, chordLength: c },
                sagitta: sagitta,
                distance: d,
                category: 'segment_properties'
            };
        }
    }

    solveChordFromDiameter(problem) {
        const { r, d } = problem.parameters;
        const diameter = d || (r ? 2 * r : null);

        return {
            type: 'Diameter as Longest Chord',
            theorem: 'The diameter is the longest possible chord',
            given: { radius: r, diameter: diameter },
            maxChordLength: diameter,
            note: 'Diameter passes through center and equals 2r',
            category: 'special_cases',
            properties: [
                'Diameter is the only chord passing through center',
                'Any other chord is shorter than diameter',
                'Diameter divides circle into two semicircles'
            ]
        };
    }

    solveMultipleChords(problem) {
        const { r, chords } = problem.parameters;

        const results = chords.map(c => {
            const d = Math.sqrt(r * r - (c / 2) * (c / 2));
            return {
                chordLength: c,
                distance: d
            };
        });

        return {
            type: 'Multiple Chords Analysis',
            given: { radius: r, numberOfChords: chords.length },
            chordData: results,
            category: 'complex',
            observations: this.analyzeMultipleChords(results)
        };
    }

    analyzeMultipleChords(chordData) {
        const observations = [];
        
        // Find equal chords
        for (let i = 0; i < chordData.length; i++) {
            for (let j = i + 1; j < chordData.length; j++) {
                if (Math.abs(chordData[i].chordLength - chordData[j].chordLength) < 0.0001) {
                    observations.push(`Chords ${i + 1} and ${j + 1} are equal (${chordData[i].chordLength}) and equidistant (${chordData[i].distance})`);
                }
            }
        }

        // Find longest and shortest
        const lengths = chordData.map(c => c.chordLength);
        const longest = Math.max(...lengths);
        const shortest = Math.min(...lengths);
        
        observations.push(`Longest chord: ${longest}`);
        observations.push(`Shortest chord: ${shortest}`);

        return observations;
    }

    solveWordEngineering(problem) {
        return {
            type: 'Engineering Word Problem',
            approach: 'Identify given values, determine appropriate formula, solve',
            category: 'word_problems',
            commonScenarios: [
                'Arch bridges: use sagitta formula',
                'Tunnels: use basic chord formula for clearance',
                'Pipes: chord as water surface width'
            ]
        };
    }

    solveWordDesign(problem) {
        return {
            type: 'Design Word Problem',
            approach: 'Extract dimensions, apply chord geometry',
            category: 'word_problems',
            commonScenarios: [
                'Windows: chord calculations for muntins',
                'Domes: segment calculations',
                'Arches: aesthetic and structural considerations'
            ]
        };
    }

    // VERIFICATION METHODS

    verifyChordSolution(r, d, c) {
        // Verify using Pythagorean theorem: r² = d² + (c/2)²
        const leftSide = r * r;
        const rightSide = d * d + (c / 2) * (c / 2);
        const difference = Math.abs(leftSide - rightSide);
        const isValid = difference < 1e-9;

        return {
            radius: r,
            distance: d,
            chordLength: c,
            pythagoreanCheck: {
                r_squared: leftSide,
                d_squared_plus_halfC_squared: rightSide,
                difference: difference,
                isValid: isValid
            },
            physicalChecks: {
                chordLessThanDiameter: c <= 2 * r,
                distanceLessThanRadius: d <= r,
                allPositive: r > 0 && d >= 0 && c > 0
            }
        };
    }

    // STEP GENERATION

    generateChordSteps(problem, solution) {
        let baseSteps = this.generateBaseChordSteps(problem, solution);

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

    generateBaseChordSteps(problem, solution) {
        const { type } = problem;
        const category = this.chordTypes[type]?.category;

        switch(category) {
            case 'basic_chord':
                return this.generateBasicChordSteps(problem, solution);
            case 'angle_based':
                return this.generateAngleBasedSteps(problem, solution);
            case 'reverse_calculation':
                return this.generateReverseCalculationSteps(problem, solution);
            case 'segment_properties':
                return this.generateSegmentSteps(problem, solution);
            case 'chord_properties':
                return this.generateChordPropertySteps(problem, solution);
            default:
                return this.generateGenericChordSteps(problem, solution);
        }
    }

    generateBasicChordSteps(problem, solution) {
        const steps = [];
        const { r, d } = problem.parameters;

        // Step 1: Given information
        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify the known values',
            expression: `Radius r = ${r}, Distance from center d = ${d}`,
            reasoning: 'These are the values we start with',
            goalStatement: 'We need to find the chord length c',
            diagram: 'Circle with radius and perpendicular distance marked'
        });

        // Step 2: Identify formula
        steps.push({
            stepNumber: 2,
            step: 'Identify formula',
            description: 'Choose the appropriate formula for chord length',
            formula: 'c = 2√(r² - d²)',
            reasoning: 'This formula comes from the Pythagorean theorem applied to the right triangle formed',
            geometricInsight: 'The perpendicular from center to chord bisects the chord, creating a right triangle',
            rightTriangle: {
                hypotenuse: 'radius (r)',
                leg1: 'distance from center (d)',
                leg2: 'half the chord (c/2)'
            }
        });

        // Step 3: Substitute values
        steps.push({
            stepNumber: 3,
            step: 'Substitute values',
            description: 'Replace variables with known values',
            beforeExpression: 'c = 2√(r² - d²)',
            afterExpression: `c = 2√(${r}² - ${d}²)`,
            reasoning: 'Direct substitution of given values into formula'
        });

        // Step 4: Calculate squares
        steps.push({
            stepNumber: 4,
            step: 'Calculate squares',
            description: 'Square the radius and distance',
            calculation: {
                r_squared: `${r}² = ${r * r}`,
                d_squared: `${d}² = ${d * d}`
            },
            afterExpression: `c = 2√(${r * r} - ${d * d})`,
            reasoning: 'Evaluate the squared terms'
        });

        // Step 5: Subtract under square root
        steps.push({
            stepNumber: 5,
            step: 'Subtract under square root',
            description: 'Perform the subtraction',
            beforeExpression: `c = 2√(${r * r} - ${d * d})`,
            calculation: `${r * r} - ${d * d} = ${r * r - d * d}`,
            afterExpression: `c = 2√${r * r - d * d}`,
            reasoning: 'Simplify the expression under the radical'
        });

        // Step 6: Take square root
        steps.push({
            stepNumber: 6,
            step: 'Take square root',
            description: 'Evaluate the square root',
            beforeExpression: `c = 2√${r * r - d * d}`,
            calculation: `√${r * r - d * d} = ${Math.sqrt(r * r - d * d)}`,
            afterExpression: `c = 2 × ${Math.sqrt(r * r - d * d)}`,
            reasoning: 'This gives us half the chord length'
        });

        // Step 7: Multiply by 2
        steps.push({
            stepNumber: 7,
            step: 'Multiply by 2',
            description: 'Double the result to get full chord length',
            beforeExpression: `c = 2 × ${Math.sqrt(r * r - d * d)}`,
            calculation: `2 × ${Math.sqrt(r * r - d * d)} = ${2 * Math.sqrt(r * r - d * d)}`,
            finalExpression: `c = ${solution.chordLength}`,
            finalAnswer: true,
            reasoning: 'We multiply by 2 because the formula gave us from the half-chord in the right triangle',
            units: problem.context.units || 'units'
        });

        // Step 8: Verification
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 8,
                step: 'Verify solution',
                description: 'Check using Pythagorean theorem',
                verification: {
                    check: `r² should equal d² + (c/2)²`,
                    leftSide: `${r}² = ${r * r}`,
                    rightSide: `${d}² + (${solution.chordLength}/2)² = ${d * d} + ${(solution.chordLength / 2) * (solution.chordLength / 2)} = ${d * d + (solution.chordLength / 2) * (solution.chordLength / 2)}`,
                    matches: Math.abs(r * r - (d * d + (solution.chordLength / 2) * (solution.chordLength / 2))) < 0.0001
                },
                reasoning: 'Verification confirms our answer is correct'
            });
        }

        return steps;
    }

    generateAngleBasedSteps(problem, solution) {
        const steps = [];
        const { r, angle } = problem.parameters;

        // Step 1: Given
        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify known values',
            expression: `Radius r = ${r}, Central angle θ = ${angle}°`,
            reasoning: 'We have radius and the angle subtended by the chord at the center',
            goalStatement: 'Find the chord length c'
        });

        // Step 2: Formula
        steps.push({
            stepNumber: 2,
            step: 'Identify formula',
            description: 'Formula for chord from angle',
            formula: 'c = 2r × sin(θ/2)',
            reasoning: 'This formula relates chord length to central angle using trigonometry',
            keyInsight: 'We use HALF the central angle because the perpendicular from center bisects both the chord AND the angle'
        });

        // Step 3: Calculator check
        steps.push({
            stepNumber: 3,
            step: 'Check calculator mode',
            description: 'IMPORTANT: Ensure calculator is in DEGREE mode',
            warning: 'Using wrong mode will give completely wrong answer!',
            howToCheck: 'Most calculators show DEG or RAD in display',
            reasoning: 'Our angle is in degrees, so calculator must be too'
        });

        // Step 4: Calculate half angle
        steps.push({
            stepNumber: 4,
            step: 'Divide angle by 2',
            description: 'Find half the central angle',
            calculation: `θ/2 = ${angle}/2 = ${angle / 2}°`,
            reasoning: 'The formula requires half the central angle',
            whyHalf: 'The perpendicular from center bisects the central angle'
        });

        // Step 5: Find sine
        steps.push({
            stepNumber: 5,
            step: 'Calculate sine',
            description: `Find sin(${angle / 2}°)`,
            calculation: `sin(${angle / 2}°) = ${Math.sin((angle / 2) * Math.PI / 180).toFixed(6)}`,
            reasoning: 'Sine gives us the ratio of opposite side to hypotenuse in the right triangle',
            triangleContext: `In our right triangle: opposite = c/2, hypotenuse = r`
        });

        // Step 6: Multiply by 2r
        steps.push({
            stepNumber: 6,
            step: 'Calculate chord length',
            description: 'Multiply by 2r',
            beforeExpression: `c = 2r × sin(${angle / 2}°)`,
            substitution: `c = 2(${r}) × ${Math.sin((angle / 2) * Math.PI / 180).toFixed(6)}`,
            calculation: `c = ${2 * r} × ${Math.sin((angle / 2) * Math.PI / 180).toFixed(6)}`,
            finalExpression: `c = ${solution.chordLength.toFixed(4)}`,
            finalAnswer: true,
            units: problem.context.units || 'units'
        });

        // Step 7: Verification
        if (this.includeVerificationInSteps) {
            steps.push({
                stepNumber: 7,
                step: 'Reasonableness check',
                description: 'Verify answer makes sense',
                checks: {
                    lessThanDiameter: `${solution.chordLength.toFixed(2)} < ${2 * r} (diameter)`,
                    positive: `${solution.chordLength.toFixed(2)} > 0`,
                    specialCase: angle === 180 ? 'At 180°, chord should equal diameter' : null
                },
                reasoning: 'Physical constraints: chord cannot exceed diameter'
            });
        }

        return steps;
    }

    generateReverseCalculationSteps(problem, solution) {
        const steps = [];
        
        if (solution.type === 'Distance from Center to Chord') {
            const { r, c } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given information',
                description: 'Identify known values',
                expression: `Radius r = ${r}, Chord length c = ${c}`,
                goalStatement: 'Find distance from center to chord (d)'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify formula',
                description: 'Rearrange Pythagorean formula to solve for d',
                derivation: [
                    'Start with: r² = d² + (c/2)²',
                    'Subtract (c/2)² from both sides',
                    'Result: d² = r² - (c/2)²',
                    'Take square root: d = √(r² - (c/2)²)'
                ],
                formula: 'd = √(r² - (c/2)²)',
                reasoning: 'We isolate d using algebraic manipulation'
            });

            steps.push({
                stepNumber: 3,
                step: 'Divide chord by 2',
                description: 'Find half the chord length',
                calculation: `c/2 = ${c}/2 = ${c / 2}`,
                reasoning: 'We need half-chord for the formula',
                reminder: 'ALWAYS use c/2, not c, in Pythagorean calculations!'
            });

            steps.push({
                stepNumber: 4,
                step: 'Square the values',
                description: 'Calculate r² and (c/2)²',
                calculations: {
                    r_squared: `${r}² = ${r * r}`,
                    halfC_squared: `(${c / 2})² = ${(c / 2) * (c / 2)}`
                },
                reasoning: 'Prepare for substitution into formula'
            });

            steps.push({
                stepNumber: 5,
                step: 'Substitute and subtract',
                description: 'Evaluate r² - (c/2)²',
                beforeExpression: `d = √(${r}² - (${c / 2})²)`,
                calculation: `${r * r} - ${(c / 2) * (c / 2)} = ${r * r - (c / 2) * (c / 2)}`,
                afterExpression: `d = √${r * r - (c / 2) * (c / 2)}`,
                reasoning: 'Simplify under the square root'
            });

            steps.push({
                stepNumber: 6,
                step: 'Take square root',
                description: 'Final calculation',
                beforeExpression: `d = √${r * r - (c / 2) * (c / 2)}`,
                finalExpression: `d = ${solution.distance}`,
                finalAnswer: true,
                units: problem.context.units || 'units'
            });

        } else if (solution.type === 'Radius from Chord and Distance') {
            const { c, d } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given information',
                description: 'Identify known values',
                expression: `Chord length c = ${c}, Distance d = ${d}`,
                goalStatement: 'Find radius r'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify formula',
                description: 'Rearrange to solve for r',
                derivation: [
                    'Start with: r² = d² + (c/2)²',
                    'Take square root: r = √(d² + (c/2)²)'
                ],
                formula: 'r = √((c/2)² + d²)',
                reasoning: 'Add the squared terms, then take square root'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate components',
                description: 'Find (c/2)² and d²',
                calculations: {
                    halfC: `c/2 = ${c / 2}`,
                    halfC_squared: `(c/2)² = ${(c / 2) * (c / 2)}`,
                    d_squared: `d² = ${d * d}`
                }
            });

            steps.push({
                stepNumber: 4,
                step: 'Add under square root',
                description: 'Sum the squared terms',
                calculation: `${(c / 2) * (c / 2)} + ${d * d} = ${(c / 2) * (c / 2) + d * d}`,
                afterExpression: `r = √${(c / 2) * (c / 2) + d * d}`
            });

            steps.push({
                stepNumber: 5,
                step: 'Take square root',
                description: 'Final answer',
                finalExpression: `r = ${solution.radius}`,
                finalAnswer: true,
                units: problem.context.units || 'units'
            });
        }

        return steps;
    }

    generateSegmentSteps(problem, solution) {
        const steps = [];
        
        if (solution.type === 'Radius from Chord and Sagitta') {
            const { c, h } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given information',
                description: 'Identify arch dimensions',
                expression: `Span (chord) c = ${c}, Height (sagitta) h = ${h}`,
                diagram: 'Arch showing span at base and height at center',
                goalStatement: 'Find radius of circular arch'
            });

            steps.push({
                stepNumber: 2,
                step: 'Sagitta formula',
                description: 'Formula relating chord, sagitta, and radius',
                formula: 'r = (c²/(8h)) + (h/2)',
                derivation: 'This formula comes from the geometry of circular segments',
                components: {
                    firstTerm: 'c²/(8h) accounts for the chord contribution',
                    secondTerm: 'h/2 accounts for the height contribution'
                }
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate c²',
                description: 'Square the chord length',
                calculation: `c² = ${c}² = ${c * c}`,
                reasoning: 'First component of the formula'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate c²/(8h)',
                description: 'Divide by 8 times sagitta',
                beforeCalculation: `${c * c}/(8 × ${h})`,
                intermediateStep: `${c * c}/${8 * h}`,
                result: (c * c) / (8 * h),
                reasoning: 'This is the first term of the radius formula'
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate h/2',
                description: 'Half the sagitta',
                calculation: `h/2 = ${h}/2 = ${h / 2}`,
                reasoning: 'This is the second term of the radius formula'
            });

            steps.push({
                stepNumber: 6,
                step: 'Add the terms',
                description: 'Sum both components',
                calculation: `${(c * c) / (8 * h)} + ${h / 2} = ${solution.radius}`,
                finalExpression: `r = ${solution.radius}`,
                finalAnswer: true,
                units: problem.context.units || 'units'
            });

            steps.push({
                stepNumber: 7,
                step: 'Verification',
                description: 'Check reasonableness',
                checks: {
                    sagittaLessThanRadius: `h (${h}) < r (${solution.radius}) ✓`,
                    chordLessThanDiameter: `c (${c}) < 2r (${2 * solution.radius}) ✓`
                },
                reasoning: 'Both checks confirm our answer is physically possible'
            });
        }

        return steps;
    }

    generateChordPropertySteps(problem, solution) {
        const steps = [];

        if (solution.type === 'Intersecting Chords Theorem') {
            const { AP, PB, CP } = problem.parameters;

            steps.push({
                stepNumber: 1,
                step: 'Given information',
                description: 'Segments of intersecting chords',
                expression: `AP = ${AP}, PB = ${PB}, CP = ${CP}`,
                diagram: 'Two chords intersecting at point P',
                goalStatement: 'Find the unknown segment PD'
            });

            steps.push({
                stepNumber: 2,
                step: 'State theorem',
                description: 'Intersecting Chords Theorem',
                theorem: 'When two chords intersect inside a circle, the products of their segments are equal',
                formula: 'AP × PB = CP × PD',
                reasoning: 'This is a fundamental property of intersecting chords'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate known product',
                description: 'Multiply segments of first chord',
                calculation: `AP × PB = ${AP} × ${PB} = ${AP * PB}`,
                reasoning: 'This product must equal CP × PD'
            });

            steps.push({
                stepNumber: 4,
                step: 'Set up equation',
                description: 'Use the theorem',
                equation: `${AP * PB} = ${CP} × PD`,
                reasoning: 'Products must be equal'
            });

            steps.push({
                stepNumber: 5,
                step: 'Solve for PD',
                description: 'Divide both sides by CP',
                calculation: `PD = ${AP * PB}/${CP} = ${solution.solution}`,
                finalExpression: `PD = ${solution.solution}`,
                finalAnswer: true,
                units: problem.context.units || 'units'
            });

            steps.push({
                stepNumber: 6,
                step: 'Verify',
                description: 'Check that products are equal',
                verification: {
                    product1: `AP × PB = ${AP} × ${PB} = ${AP * PB}`,
                    product2: `CP × PD = ${CP} × ${solution.solution} = ${CP * solution.solution}`,
                    match: Math.abs((AP * PB) - (CP * solution.solution)) < 0.0001
                }
            });
        }

        return steps;
    }

    generateGenericChordSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Chord calculation',
            description: 'Solve the chord problem using appropriate method',
            formula: this.chordTypes[problem.type]?.formula || 'See formula',
            solution: solution,
            note: 'Refer to specific formula for this chord problem type'
        }];
    }

    // ENHANCED EXPLANATION METHODS (similar to linear workbook)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step),
                geometric: this.getGeometricExplanation(step, problem)
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
            'Given information': "We start with what we know! Like having clues in a treasure hunt.",
            'Identify formula': "We pick the right tool for the job - like choosing a hammer when you need to bang in a nail.",
            'Substitute values': "We put in the numbers we know, like filling in blanks in a story.",
            'Calculate squares': "Squaring means multiplying a number by itself. Like 5 × 5 = 25.",
            'Subtract under square root': "We do the math inside the square root first, like finishing what's inside parentheses.",
            'Take square root': "Square root is like asking: what number times itself gives me this?",
            'Multiply by 2': "We double our answer because we only found half the chord!",
            'Divide angle by 2': "We use half the angle, like cutting a pizza slice in half.",
            'Calculate sine': "Sine is a special calculator button that helps with triangles!",
            'Verify solution': "We check our answer to make sure we didn't make any mistakes - like proofreading!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to solve our circle puzzle!";
    }

    findRelevantAnalogy(step, problem) {
        for (const [key, analogy] of Object.entries(this.analogies)) {
            if (analogy.suitableFor.includes(problem.type) || analogy.suitableFor.includes('all_levels')) {
                return analogy.ELI5 || analogy.explanation;
            }
        }
        return "Think of this like solving a puzzle - each step gets us closer to the answer!";
    }

    convertToSimpleLanguage(description) {
        if (!description) return '';

        const simplifications = {
            'radius': 'distance from center to edge',
            'chord': 'straight line across the circle',
            'diameter': 'longest chord (goes through center)',
            'perpendicular': 'at a right angle (90 degrees)',
            'bisect': 'cut exactly in half',
            'sagitta': 'height of the arch',
            'central angle': 'angle at the center',
            'arc': 'curved part of circle',
            'segment': 'slice of circle',
            'theorem': 'rule that always works',
            'hypotenuse': 'longest side of right triangle',
            'substitute': 'put in the numbers',
            'calculate': 'do the math',
            'verify': 'check if correct'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp('\\b' + term + '\\b', 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualization(step) {
        const visualizations = {
            'Given information': 'Draw a circle and label what you know',
            'Identify formula': 'Draw the right triangle inside the circle',
            'Substitute values': 'Write the numbers next to your labels',
            'Calculate squares': 'Show the multiplication: 5 × 5 = 25',
            'Take square root': 'Show √25 = 5 with arrows',
            'Multiply by 2': 'Show the full chord as two halves',
            'Divide angle by 2': 'Draw the angle and show it split in half',
            'Check calculator mode': 'Draw calculator showing DEG mode',
            'Verify solution': 'Draw checkmark when both sides match'
        };

        return visualizations[step.step] || 'Draw a picture to show what this step does';
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
                    reasoning: this.explainStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, problemType) {
        const category = this.chordTypes[problemType]?.category || 'basic_chord';
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

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
                hints: this.generateProgressiveHints(step, problem),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcess(step),
                decisionPoints: this.identifyDecisionPoints(step),
                alternativeApproaches: this.suggestAlternativeMethods(step, problem)
            }
        }));
    }

    // HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Given information': 'Starting with known values is essential - it\'s our foundation for solving',
            'Identify formula': 'Choosing the right formula is like selecting the right tool - it makes the job easier',
            'Substitute values': 'Substitution transforms abstract formulas into concrete calculations',
            'Calculate squares': 'Squaring amplifies differences - it\'s key to the Pythagorean theorem',
            'Subtract under square root': 'This subtraction finds the difference between radius squared and distance squared',
            'Take square root': 'Square root reverses the squaring operation, giving us the actual length',
            'Multiply by 2': 'Doubling accounts for both halves of the chord created by the perpendicular bisector',
            'Divide angle by 2': 'Half the angle is used because the perpendicular bisects the central angle',
            'Calculate sine': 'Sine relates the angle to the ratio of sides in our right triangle'
        };

        return conceptualExplanations[step.step] || 'This step moves us closer to the solution';
    }

    getProceduralExplanation(step) {
        if (step.calculation || step.expression) {
            return `1. Note what operation is needed
2. Perform the calculation carefully
3. Write down the result
4. Check if it makes sense`;
        }
        return 'Follow the step-by-step procedure shown';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'basic_chord': 'Draw circle with radius, mark perpendicular to chord creating right triangle',
            'angle_based': 'Draw circle with two radii forming central angle, connect endpoints with chord',
            'segment_properties': 'Draw arch showing span (chord), height (sagitta), and radius',
            'chord_properties': 'Draw chords and mark relevant measurements and relationships'
        };

        const category = this.chordTypes[problem.type]?.category;
        return visualExplanations[category] || 'Sketch the geometric configuration';
    }

    getAlgebraicExplanation(step) {
        if (step.formula) {
            return `Formula: ${step.formula}. This is derived from fundamental geometric principles.`;
        }
        return 'Apply standard algebraic operations';
    }

    getGeometricExplanation(step, problem) {
        const geometricInsights = {
            'Identify formula': 'The formula comes from Pythagorean theorem applied to the right triangle formed by radius, perpendicular distance, and half-chord',
            'Divide angle by 2': 'The perpendicular from center bisects both the chord and the central angle',
            'Multiply by 2': 'The perpendicular bisector creates two congruent halves of the chord',
            'Take square root': 'Square root gives us the length of the leg of our right triangle'
        };

        return geometricInsights[step.step] || 'Consider the geometric relationships in play';
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
                'radius': 'distance from center to edge',
                'chord': 'straight line across circle',
                'perpendicular': 'at right angle',
                'bisect': 'cut in half',
                'hypotenuse': 'longest side',
                'substitute': 'put in',
                'calculate': 'find',
                'verify': 'check'
            },
            ELI5: {
                'radius': 'distance from middle to edge',
                'chord': 'straight line connecting two points on the circle',
                'perpendicular': 'straight up and down (90 degrees)',
                'bisect': 'split exactly in half',
                'hypotenuse': 'longest side of the triangle',
                'central angle': 'angle at the center',
                'sagitta': 'how high the arch goes',
                'substitute': 'fill in the numbers',
                'calculate': 'do the math',
                'verify': 'double-check'
            }
        };

        const levelAdaptation = adaptations[level.vocabulary] || {};
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed this step'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This is necessary to: continue simplifying and finding our answer`,
            howItHelps: `This brings us closer to the final chord length`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue our calculation`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description?.toLowerCase()}`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Divide chord by 2': [
                'Always use c/2 in calculations, not c',
                'Write (c/2) explicitly in your work',
                'Remember: the triangle has HALF the chord as a leg'
            ],
            'Calculate squares': [
                'Square each value separately before subtracting',
                'Check your arithmetic carefully',
                'Remember: (a/2)² = a²/4, not a/2'
            ],
            'Divide angle by 2': [
                'Use θ/2, not θ, in the sine function',
                'The perpendicular bisects the angle',
                'Double-check you divided the angle'
            ],
            'Check calculator mode': [
                'Verify DEG or RAD mode BEFORE calculating',
                'Wrong mode gives completely wrong answer',
                'Most errors come from calculator mode mistakes'
            ]
        };

        return tips[step.step] || ['Work carefully', 'Check each calculation'];
    }

    generateCheckPoints(step) {
        return [
            'Did I follow the formula correctly?',
            'Are my calculations accurate?',
            'Does the result make sense?',
            'Should I verify this step?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            'Calculate squares': ['Don\'t forget to square BOTH values', 'Check for arithmetic errors'],
            'Subtract under square root': ['Make sure result is positive', 'Negative means impossible configuration'],
            'Take square root': ['Only use positive square root for lengths', 'Check calculator for errors'],
            'Check calculator mode': ['CRITICAL: Wrong mode = wrong answer', 'Verify before calculating']
        };

        return warnings[step.step] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Given information': 'Do I have all the information I need?',
            'Identify formula': 'Is this the right formula for my given values?',
            'Substitute values': 'Did I put the right numbers in the right places?',
            'Calculate squares': 'Did I square correctly?',
            'Subtract under square root': 'Is my answer under the square root positive?',
            'Take square root': 'Did I calculate the square root correctly?',
            'Multiply by 2': 'Did I remember to double the half-chord?',
            'Divide angle by 2': 'Am I using half the angle, not the full angle?',
            'Calculate sine': 'Is my calculator in the correct mode?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Given information': 'Clear statement of known values',
            'Identify formula': 'Correct formula for the problem type',
            'Substitute values': 'Formula with numbers instead of variables',
            'Calculate squares': 'Squared values ready for next step',
            'Subtract under square root': 'Positive number under square root',
            'Take square root': 'Numerical value (half-chord or distance)',
            'Multiply by 2': 'Final chord length',
            'Verify solution': 'Confirmation that answer is correct'
        };

        return expectations[step.step] || 'Progress toward solution';
    }

    generateTroubleshootingTips(step) {
        return [
            'If stuck, review the previous step',
            'Check that you\'re using the correct formula',
            'Verify all arithmetic carefully',
            'Draw a diagram if you haven't already',
            'Ask: does my answer make physical sense?'
        ];
    }

    generateGuidingQuestions(step, problem) {
        const questions = {
            'Given information': [
                'What values do I know?',
                'What am I trying to find?',
                'What formula might I need?'
            ],
            'Identify formula': [
                'What formula connects my known values to what I\'m finding?',
                'Does this formula make geometric sense?',
                'What does each variable represent?'
            ],
            'Substitute values': [
                'Am I putting each value in the right place?',
                'Do I need to use half the chord (c/2)?',
                'Are my units consistent?'
            ],
            'Calculate squares': [
                'What is the square of each value?',
                'Am I squaring correctly?',
                'Should I simplify anything first?'
            ],
            'Divide angle by 2': [
                'Why do I need half the angle?',
                'What is half of my central angle?',
                'Am I in the right calculator mode?'
            ]
        };

        return questions[step.step] || ['What is the goal of this step?', 'How does this help solve the problem?'];
    }

    generateProgressiveHints(step, problem) {
        const category = this.chordTypes[problem.type]?.category || 'basic_chord';
        const hintKey = `${category}_${problem.type}`.replace(/-/g, '_');
        const hintSet = this.hints[hintKey] || this.hints.basic_chord_from_radius_distance;

        return {
            level1: hintSet?.level1 || 'Think about what you know and what you need to find',
            level2: hintSet?.level2 || 'What formula connects these values?',
            level3: hintSet?.level3 || 'Try applying the Pythagorean theorem or trigonometry',
            level4: hintSet?.level4 || 'Substitute your known values into the formula',
            level5: hintSet?.level5 || 'Calculate step by step'
        };
    }

    breakIntoSubSteps(step) {
        if (step.calculation) {
            return [
                'Identify what needs to be calculated',
                'Set up the calculation',
                'Perform the arithmetic',
                'Verify the result',
                'Write the answer clearly'
            ];
        }

        return ['Understand the goal', 'Apply the technique', 'Verify the result'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numbers',
            practiceHint: 'Start with simpler values to build confidence',
            extension: 'Once comfortable, try problems with decimals or larger numbers'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have in this step?',
            goal: 'What am I trying to accomplish?',
            strategy: 'What mathematical operation should I use?',
            execute: 'How do I perform this operation correctly?',
            verify: 'Does my result make sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Which formula is appropriate?',
            'Do I need to use c/2 or c?',
            'Should I use degrees or radians?',
            'Is my calculator in the correct mode?'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'basic_chord': [
                'Could use coordinate geometry to find chord length',
                'Could use trigonometry if angle is known'
            ],
            'angle_based': [
                'Could first find distance, then use Pythagorean method',
                'Could use law of cosines in the isosceles triangle'
            ]
        };

        const category = this.chordTypes[problem.type]?.category;
        return alternatives[category] || ['The chosen method is most direct for this problem'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by using its result`,
            progression: 'We are getting closer to the final answer',
            relationship: 'Each step uses the output from the previous step'
        };
    }

    identifyPrerequisites(step, problemType) {
        const category = this.chordTypes[problemType]?.category || 'basic_chord';
        const prereqs = this.prerequisites[category];
        
        if (prereqs) {
            return prereqs.skills;
        }

        return ['Basic geometry', 'Circle concepts'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Given information': ['radius', 'chord', 'distance', 'center'],
            'Identify formula': ['Pythagorean theorem', 'formula', 'equation'],
            'Substitute values': ['substitute', 'variable', 'value'],
            'Calculate squares': ['square', 'multiply', 'exponent'],
            'Subtract under square root': ['radicand', 'square root', 'subtract'],
            'Take square root': ['square root', 'radical', 'simplify'],
            'Multiply by 2': ['multiply', 'double', 'product'],
            'Divide angle by 2': ['central angle', 'bisect', 'half-angle'],
            'Calculate sine': ['sine', 'trigonometry', 'ratio', 'angle']
        };

        return vocabulary[step.step] || [];
    }

    generateThinkingPrompts(step) {
        return {
            before: 'Before I start, what do I need to know or check?',
            during: 'As I work, what should I be careful about?',
            after: 'After completing this, how can I verify it\'s correct?'
        };
    }

    findRealWorldConnection(step, problem) {
        const connections = {
            'basic_chord': 'Like measuring the width of a circular tunnel at a certain height',
            'angle_based': 'Like calculating the straight-line distance between two points on Earth\'s surface',
            'segment_properties': 'Like designing an arch bridge - finding the radius needed for a given span and height',
            'chord_properties': 'Like analyzing stress distribution in a circular wheel or gear'
        };

        const category = this.chordTypes[problem.type]?.category;
        return connections[category] || 'Chord calculations appear in architecture, engineering, and navigation';
    }

    // GRAPH GENERATION

    generateChordGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;
        const category = this.chordTypes[type]?.category;

        if (category && this.currentSolution.chordLength) {
            this.graphData = this.generateChordDiagram(this.currentProblem, this.currentSolution);
        }
    }

    generateChordDiagram(problem, solution) {
        const { r, d, c, angle } = problem.parameters;

        return {
            type: 'circle_with_chord',
            elements: {
                radius: r || solution.radius,
                chord: solution.chordLength || c,
                distance: d || solution.distance,
                centralAngle: angle || solution.centralAngle,
                halfChord: (solution.chordLength || c) / 2,
                rightTriangle: true,
                perpendicular: true
            },
            description: 'Circle showing chord, radius, and perpendicular distance from center',
            labels: this.generateDiagramLabels(problem, solution)
        };
    }

    generateDiagramLabels(problem, solution) {
        const labels = {};

        if (solution.radius || problem.parameters.r) {
            labels.radius = `r = ${solution.radius || problem.parameters.r}`;
        }
        if (solution.chordLength || problem.parameters.c) {
            labels.chord = `c = ${solution.chordLength || problem.parameters.c}`;
        }
        if (solution.distance || problem.parameters.d) {
            labels.distance = `d = ${solution.distance || problem.parameters.d}`;
        }
        if (solution.centralAngle || problem.parameters.angle) {
            labels.angle = `θ = ${solution.centralAngle || problem.parameters.angle}°`;
        }

        return labels;
    }

    // WORKBOOK GENERATION

    generateChordWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPrerequisiteSection(),
            this.createDiagramSection(),
            this.createEnhancedStepsSection(),
            this.createChordLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createRealWorldApplicationSection(),
            this.createHistoricalContextSection(),
            this.createCrossCurricularSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Circle Chord Length Mathematical Workbook',
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
            ['Problem Type', this.chordTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.chordTypes[this.currentProblem.type]?.category || 'chord calculation'],
            ['Formula', this.chordTypes[this.currentProblem.type]?.formula || 'See solution'],
            ['Description', this.currentProblem.scenario || this.chordTypes[this.currentProblem.type]?.description]
        ];

        // Add given values
        if (Object.keys(this.currentProblem.parameters).length > 0) {
            problemData.push(['', '']);
            problemData.push(['Given Values', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined) {
                    const label = {
                        'r': 'Radius',
                        'd': 'Distance from center',
                        'c': 'Chord length',
                        'angle': 'Central angle',
                        'h': 'Sagitta (height)',
                        's': 'Arc length'
                    }[key] || key;
                    problemData.push([label, value]);
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

        const category = this.chordTypes[this.currentProblem.type]?.category;
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

    createDiagramSection() {
        if (!this.graphData) return null;

        const diagramData = [
            ['Diagram Type', this.graphData.type || 'Circle with chord'],
            ['Elements to Show', '']
        ];

        if (this.graphData.elements) {
            for (const [element, value] of Object.entries(this.graphData.elements)) {
                if (value !== undefined && value !== null && value !== true) {
                    diagramData.push([element, value.toString()]);
                } else if (value === true) {
                    diagramData.push([element, 'Yes']);
                }
            }
        }

        diagramData.push(['', '']);
        diagramData.push(['Description', this.graphData.description || '']);

        if (this.graphData.labels) {
            diagramData.push(['', '']);
            diagramData.push(['Labels', '']);
            for (const [labelType, labelValue] of Object.entries(this.graphData.labels)) {
                diagramData.push([labelType, labelValue]);
            }
        }

        return {
            title: 'Geometric Diagram',
            type: 'diagram',
            data: diagramData
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Current State', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['Why', step.explanation.why]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.calculation) {
                if (typeof step.calculation === 'string') {
                    stepsData.push(['Calculation', step.calculation]);
                } else if (typeof step.calculation === 'object') {
                    for (const [key, value] of Object.entries(step.calculation)) {
                        stepsData.push([key, value.toString()]);
                    }
                }
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.geometricInsight) {
                stepsData.push(['Geometric Insight', step.geometricInsight]);
            }

            if (step.warning) {
                stepsData.push(['⚠️ WARNING', step.warning]);
            }

            // ELI5 explanations
            if (step.ELI5 && this.explanationLevel === 'ELI5') {
                stepsData.push(['ELI5 Explanation', step.ELI5.explanation]);
                if (step.ELI5.analogy) {
                    stepsData.push(['Analogy', step.ELI5.analogy]);
                }
                if (step.ELI5.visualization) {
                    stepsData.push(['Visualize', step.ELI5.visualization]);
                }
            }

            // Enhanced explanations for detailed level
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Geometric', step.explanations.geometric]);
                if (step.explanations.algebraic) {
                    stepsData.push(['Algebraic', step.explanations.algebraic]);
                }
            }

            // Error prevention
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

            // Scaffolding for scaffolded level
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                const questions = step.scaffolding.guidingQuestions;
                if (questions && questions.length > 0) {
                    stepsData.push(['Guiding Questions', questions.join(' | ')]);
                }
                
                const hints = step.scaffolding.hints;
                if (hints) {
                    stepsData.push(['Hint Level 1', hints.level1]);
                    stepsData.push(['Hint Level 2', hints.level2]);
                    stepsData.push(['Hint Level 3', hints.level3]);
                }
            }

            // Thinking prompts
            if (step.thinkingPrompts && this.includeThinkingPrompts) {
                stepsData.push(['Think Before', step.thinkingPrompts.before]);
                stepsData.push(['Think During', step.thinkingPrompts.during]);
                stepsData.push(['Think After', step.thinkingPrompts.after]);
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            // Real-world connection
            if (step.realWorldConnection && this.includeRealWorldApplications) {
                stepsData.push(['Real-World', step.realWorldConnection]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ FINAL ANSWER', step.finalExpression || step.expression]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createChordLessonSection() {
        const { type } = this.currentProblem;
        const category = this.chordTypes[type]?.category;

        // Select most relevant lesson
        let lessonKey = 'basic_chord_concepts';
        if (category === 'angle_based') {
            lessonKey = 'angle_based_chords';
        } else if (category === 'segment_properties') {
            lessonKey = 'circular_segments';
        } else if (category === 'chord_properties') {
            lessonKey = 'chord_theorems';
        }

        const lesson = this.lessons[lessonKey];

        const lessonData = [
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);

        lessonData.push(['', '']);
        lessonData.push(['Key Formulas', '']);
        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        if (lesson.keyProperties) {
            lessonData.push(['', '']);
            lessonData.push(['Important Properties', '']);
            lesson.keyProperties.forEach(prop => {
                lessonData.push(['', prop]);
            });
        }

        return {
            title: lesson.title,
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.error) {
            solutionData.push(['Error', this.currentSolution.error]);
            solutionData.push(['Explanation', this.currentSolution.explanation]);
            return {
                title: 'Solution - Error',
                type: 'solution',
                data: solutionData
            };
        }

        if (this.currentSolution.chordLength !== undefined) {
            solutionData.push(['Chord Length', `${this.currentSolution.chordLength} ${this.currentProblem.context.units || 'units'}`]);
        }
        if (this.currentSolution.distance !== undefined) {
            solutionData.push(['Distance from Center', `${this.currentSolution.distance} ${this.currentProblem.context.units || 'units'}`]);
        }
        if (this.currentSolution.radius !== undefined) {
            solutionData.push(['Radius', `${this.currentSolution.radius} ${this.currentProblem.context.units || 'units'}`]);
        }
        if (this.currentSolution.sagitta !== undefined) {
            solutionData.push(['Sagitta (Height)', `${this.currentSolution.sagitta} ${this.currentProblem.context.units || 'units'}`]);
        }
        if (this.currentSolution.centralAngle !== undefined) {
            solutionData.push(['Central Angle', `${this.currentSolution.centralAngle}°`]);
        }

        if (this.currentSolution.note) {
            solutionData.push(['Note', this.currentSolution.note]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Solution Method', this.currentSolution.type || this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel],
            ['Category', this.chordTypes[this.currentProblem.type]?.category]
        ];

        if (this.currentSolution.theorem) {
            analysisData.push(['Theorem Applied', this.currentSolution.theorem]);
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
            ['Verification Method', 'Mathematical and Physical Checks'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        if (verification) {
            if (verification.pythagoreanCheck) {
                verificationData.push(['Pythagorean Check', '']);
                verificationData.push(['r²', verification.pythagoreanCheck.r_squared]);
                verificationData.push(['d² + (c/2)²', verification.pythagoreanCheck.d_squared_plus_halfC_squared]);
                verificationData.push(['Difference', verification.pythagoreanCheck.difference.toExponential(2)]);
                verificationData.push(['Valid', verification.pythagoreanCheck.isValid ? 'Yes ✓' : 'No']);
            }

            if (verification.physicalChecks) {
                verificationData.push(['', '']);
                verificationData.push(['Physical Checks', '']);
                verificationData.push(['Chord ≤ Diameter', verification.physicalChecks.chordLessThanDiameter ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['Distance ≤ Radius', verification.physicalChecks.distanceLessThanRadius ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['All Positive', verification.physicalChecks.allPositive ? 'Yes ✓' : 'No ✗']);
            }
        }

        if (this.currentSolution.checks) {
            verificationData.push(['', '']);
            verificationData.push(['Additional Checks', '']);
            for (const [check, result] of Object.entries(this.currentSolution.checks)) {
                verificationData.push([check, result.toString()]);
            }
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRealWorldApplicationSection() {
        if (!this.includeRealWorldApplications) return null;

        const category = this.chordTypes[this.currentProblem.type]?.category;
        
        // Select relevant applications
        const applications = Object.values(this.realWorldProblems).filter(app => {
            // Match applications to problem type
            return true; // Show all for now
        }).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications of Chord Calculations', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Industry', app.industry]);
            appData.push(['Context', app.context]);
            if (app.examples && app.examples[0]) {
                appData.push(['Example', app.examples[0]]);
            }
            if (app.formula) {
                appData.push(['Formula Used', app.formula]);
            }
            appData.push(['', '']);
        });

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: appData
        };
    }

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const histData = [
            ['Historical Development of Chord Geometry', ''],
            ['', '']
        ];

        for (const [period, info] of Object.entries(this.historicalContext)) {
            histData.push([info.period, '']);
            histData.push(['Contributors', info.contributors.join(', ')]);
            histData.push(['Key Contributions', '']);
            info.contributions.forEach(contribution => {
                histData.push(['', contribution]);
            });
            histData.push(['Significance', info.significance]);
            histData.push(['Interesting Fact', info.interesting_fact]);
            histData.push(['', '']);
        }

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    createCrossCurricularSection() {
        if (!this.includeCrossCurricularLinks) return null;

        const crossData = [
            ['Cross-Curricular Connections', ''],
            ['', '']
        ];

        for (const [subject, info] of Object.entries(this.crossCurricularLinks)) {
            crossData.push([subject.toUpperCase(), info.topic]);
            crossData.push(['Connections', '']);
            info.connections.forEach(connection => {
                crossData.push(['', connection]);
            });
            crossData.push(['Example', info.example]);
            crossData.push(['', '']);
        }

        return {
            title: 'Cross-Curricular Links',
            type: 'cross_curricular',
            data: crossData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const notes = this.generateChordPedagogicalNotes(this.currentProblem.type);

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

        const alternatives = this.generateChordAlternativeMethods(this.currentProblem.type);

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
        const category = this.chordTypes[this.currentProblem.type]?.category;
        const problems = this.questionBank.byDifficulty;

        const practiceData = [
            ['Practice Problems', ''],
            ['', ''],
            ['Easy Problems', '']
        ];

        problems.easy.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Medium Problems', '']);

        problems.medium.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        practiceData.push(['', '']);
        practiceData.push(['Hard Problems', '']);

        problems.hard.slice(0, 2).forEach((p, i) => {
            practiceData.push([`${i + 1}`, p]);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }

    generateChordPedagogicalNotes(problemType) {
        const category = this.chordTypes[problemType]?.category;

        const pedagogicalDatabase = {
            basic_chord: {
                objectives: [
                    'Apply Pythagorean theorem to circle chord problems',
                    'Understand perpendicular bisector property',
                    'Calculate chord length from radius and distance',
                    'Find distance from center given chord and radius'
                ],
                keyConcepts: [
                    'Perpendicular from center bisects chord',
                    'Right triangle formed: radius, distance, half-chord',
                    'Formula: c = 2√(r² - d²)',
                    'Physical constraints: d < r, c < 2r'
                ],
                prerequisites: [
                    'Pythagorean theorem mastery',
                    'Square root calculations',
                    'Basic circle vocabulary (radius, diameter, chord)',
                    'Right triangle concepts'
                ],
                commonDifficulties: [
                    'Using full chord (c) instead of half-chord (c/2)',
                    'Confusing radius and diameter',
                    'Arithmetic errors in squaring and square roots',
                    'Not recognizing impossible configurations'
                ],
                teachingStrategies: [
                    'Always draw diagrams showing the right triangle',
                    'Emphasize c/2 by writing it explicitly every time',
                    'Use physical models (cut circles, strings)',
                    'Practice checking physical reasonableness',
                    'Color-code radius, distance, and half-chord',
                    'Start with simple integer examples'
                ],
                extensions: [
                    'Angle-based chord problems',
                    'Sagitta and circular segment calculations',
                    'Multiple chord configurations',
                    'Applications in architecture and engineering'
                ],
                assessment: [
                    'Can student draw correct diagram?',
                    'Does student use c/2 consistently?',
                    'Can student verify answer makes physical sense?',
                    'Can student identify impossible configurations?'
                ]
            },
            angle_based: {
                objectives: [
                    'Calculate chord length using trigonometry',
                    'Apply formula c = 2r sin(θ/2)',
                    'Understand central angle relationships',
                    'Use calculator correctly in degree/radian mode'
                ],
                keyConcepts: [
                    'Central angle is angle at center subtended by chord',
                    'Use HALF the central angle in sine function',
                    'Perpendicular bisects both chord and angle',
                    'Calculator mode is critical for correct answers'
                ],
                prerequisites: [
                    'Trigonometry (SOH-CAH-TOA)',
                    'Sine function understanding',
                    'Degree/radian conversions',
                    'Basic chord concepts',
                    'Calculator proficiency'
                ],
                commonDifficulties: [
                    'Using sin(θ) instead of sin(θ/2)',
                    'Calculator in wrong mode (DEG vs RAD)',
                    'Not dividing angle by 2',
                    'Confusing central and inscribed angles'
                ],
                teachingStrategies: [
                    'Demonstrate why we use θ/2 geometrically',
                    'Have students always check calculator mode first',
                    'Practice with special angles (30°, 60°, 90°)',
                    'Show isosceles triangle formed by two radii',
                    'Relate to unit circle concepts',
                    'Use mnemonics: "Half the angle for the chord"'
                ],
                extensions: [
                    'Arc length and chord length relationships',
                    'Inscribed angle theorem',
                    'Multiple chords at different angles',
                    'Navigation and astronomy applications'
                ],
                assessment: [
                    'Does student divide angle by 2?',
                    'Is calculator in correct mode?',
                    'Can student explain why θ/2 is used?',
                    'Can student convert between degrees and radians?'
                ]
            },
            reverse_calculations: {
                objectives: [
                    'Rearrange formulas to solve for different variables',
                    'Find radius given chord and distance',
                    'Find distance given chord and radius',
                    'Apply algebraic skills to geometric problems'
                ],
                keyConcepts: [
                    'Same Pythagorean relationship, different unknowns',
                    'Algebraic manipulation preserves geometric meaning',
                    'Always verify answer is physically possible',
                    'Multiple formulas from one relationship'
                ],
                prerequisites: [
                    'Basic chord formula mastery',
                    'Algebraic equation solving',
                    'Isolating variables',
                    'Square root operations'
                ],
                commonDifficulties: [
                    'Algebraic manipulation errors',
                    'Forgetting to check if answer is possible',
                    'Sign errors in rearranging',
                    'Not squaring or square-rooting correctly'
                ],
                teachingStrategies: [
                    'Show all three formulas as variations of r² = d² + (c/2)²',
                    'Practice algebraic rearrangement separately first',
                    'Always check: is d < r? is c < 2r?',
                    'Use worked examples showing full derivation',
                    'Relate to solving for different variables in physics'
                ],
                extensions: [
                    'Optimization problems (max/min chord lengths)',
                    'Constraint problems',
                    'System of equations with multiple chords',
                    'Design problems with specifications'
                ],
                assessment: [
                    'Can student rearrange formula correctly?',
                    'Does student verify physical constraints?',
                    'Can student identify which formula to use?',
                    'Are algebraic steps shown clearly?'
                ]
            },
            segment_properties: {
                objectives: [
                    'Understand circular segment geometry',
                    'Calculate sagitta (segment height)',
                    'Apply sagitta formula in arch/dome design',
                    'Relate chord, sagitta, and radius'
                ],
                keyConcepts: [
                    'Sagitta is height from chord to arc',
                    'Formula: r = (c²/(8h)) + (h/2)',
                    'Sagitta h = r - d',
                    'Essential for arch and dome calculations'
                ],
                prerequisites: [
                    'Basic chord calculations',
                    'Understanding of circular segments',
                    'Algebraic manipulation',
                    'Fraction operations'
                ],
                commonDifficulties: [
                    'Confusing sagitta with distance from center',
                    'Order of operations in sagitta formula',
                    'Understanding which measurement is which',
                    'Relating sagitta to practical applications'
                ],
                teachingStrategies: [
                    'Show clear diagrams distinguishing h and d',
                    'Use arch bridge examples',
                    'Practice with parentheses in formula',
                    'Show derivation from Pythagorean theorem',
                    'Use physical models of arches',
                    'Connect to architecture and engineering'
                ],
                extensions: [
                    'Area of circular segments',
                    'Volume of cylindrical segments',
                    'Optimization in arch design',
                    'Historical architecture analysis'
                ],
                assessment: [
                    'Can student distinguish sagitta from distance?',
                    'Can student apply formula correctly?',
                    'Does student understand practical applications?',
                    'Can student verify answer reasonableness?'
                ]
            },
            chord_properties: {
                objectives: [
                    'Apply chord theorems',
                    'Use intersecting chords theorem',
                    'Understand equal chord properties',
                    'Prove geometric relationships'
                ],
                keyConcepts: [
                    'Intersecting chords: AP × PB = CP × PD',
                    'Equal chords are equidistant from center',
                    'Perpendicular bisector properties',
                    'Chord theorems provide powerful shortcuts'
                ],
                prerequisites: [
                    'Basic chord concepts',
                    'Proportional reasoning',
                    'Congruent triangle concepts',
                    'Geometric proof basics'
                ],
                commonDifficulties: [
                    'Identifying correct segments to multiply',
                    'Setting up proportions correctly',
                    'Understanding why theorems work',
                    'Applying theorems to complex configurations'
                ],
                teachingStrategies: [
                    'Prove theorems using similar triangles',
                    'Practice identifying segments carefully',
                    'Use dynamic geometry software',
                    'Connect to power of a point theorem',
                    'Show historical development of theorems'
                ],
                extensions: [
                    'Power of a point theorem',
                    'Secant-secant and tangent-secant theorems',
                    'Circle theorems in Euclidean geometry',
                    'Applications in olympiad problems'
                ],
                assessment: [
                    'Can student identify which segments to use?',
                    'Can student set up equation correctly?',
                    'Does student understand the proof?',
                    'Can student recognize when to use theorems?'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Understand and solve chord problems'],
            keyConcepts: ['Chord geometry principles'],
            prerequisites: ['Basic geometry'],
            commonDifficulties: ['Various calculation challenges'],
            teachingStrategies: ['Step-by-step instruction with diagrams'],
            extensions: ['More complex chord configurations'],
            assessment: ['Verify understanding of concepts and procedures']
        };
    }

    generateChordAlternativeMethods(problemType) {
        const category = this.chordTypes[problemType]?.category;

        const alternativeDatabase = {
            basic_chord: {
                primaryMethod: 'Pythagorean Theorem (r² = d² + (c/2)²)',
                methods: [
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place circle at origin, use coordinates to find chord endpoints, calculate distance between them'
                    },
                    {
                        name: 'Trigonometric Approach',
                        description: 'Find central angle first using arccos(d/r), then use c = 2r sin(θ/2)'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Use compass and straightedge to construct chord, measure directly'
                    },
                    {
                        name: 'Analytical Geometry',
                        description: 'Use circle equation x² + y² = r², find intersection points with horizontal line y = d'
                    }
                ],
                comparison: 'Pythagorean approach is most direct and computational. Coordinate geometry provides algebraic alternative. Trigonometric method connects different concepts. Construction is visual but less precise.'
            },
            angle_based: {
                primaryMethod: 'Trigonometric Formula (c = 2r sin(θ/2))',
                methods: [
                    {
                        name: 'Distance-Based Method',
                        description: 'First find d = r cos(θ/2), then use Pythagorean formula c = 2√(r² - d²)'
                    },
                    {
                        name: 'Law of Cosines',
                        description: 'In isosceles triangle with two sides r and angle θ: c² = r² + r² - 2r² cos(θ) = 2r²(1 - cos(θ))'
                    },
                    {
                        name: 'Coordinate Method',
                        description: 'Place chord endpoints at (r cos(θ/2), r sin(θ/2)) and (r cos(θ/2), -r sin(θ/2)), find distance'
                    },
                    {
                        name: 'Unit Circle Approach',
                        description: 'Scale from unit circle: for unit circle c = 2sin(θ/2), then multiply by r'
                    }
                ],
                comparison: 'Trigonometric formula is most efficient. Law of cosines alternative uses different trig function. Distance-based shows connection to Pythagorean approach. Unit circle builds on prior knowledge.'
            },
            reverse_calculations: {
                primaryMethod: 'Algebraic Rearrangement of Pythagorean Formula',
                methods: [
                    {
                        name: 'Systematic Solving',
                        description: 'Start with r² = d² + (c/2)², isolate desired variable step-by-step'
                    },
                    {
                        name: 'Trigonometric Inverse',
                        description: 'If finding r from c and angle: r = c/(2 sin(θ/2))'
                    },
                    {
                        name: 'Geometric Construction',
                        description: 'Given chord and distance, construct perpendicular bisector, construct circle through endpoints'
                    },
                    {
                        name: 'Quadratic Formula',
                        description: 'For some complex problems, set up as quadratic equation and solve'
                    }
                ],
                comparison: 'Algebraic rearrangement is most straightforward. Trigonometric approach useful when angles involved. Construction provides visual verification. Quadratic formula for advanced problems.'
            },
            segment_properties: {
                primaryMethod: 'Sagitta Formula (r = (c²/(8h)) + (h/2))',
                methods: [
                    {
                        name: 'Pythagorean Derivation',
                        description: 'Use d = r - h, substitute into r² = d² + (c/2)², solve for r'
                    },
                    {
                        name: 'Similar Triangles',
                        description: 'Set up proportion using similar right triangles in the segment'
                    },
                    {
                        name: 'Approximation Formula',
                        description: 'For small h relative to r: r ≈ c²/(8h) (neglecting h/2 term)'
                    },
                    {
                        name: 'Parametric Circle Equation',
                        description: 'Use parametric form and geometric constraints to find radius'
                    }
                ],
                comparison: 'Sagitta formula is standard in engineering. Pythagorean derivation shows connection to basic formula. Similar triangles provide geometric insight. Approximation useful for flat arches.'
            },
            chord_properties: {
                primaryMethod: 'Direct Application of Theorems',
                methods: [
                    {
                        name: 'Similar Triangles Proof',
                        description: 'Prove intersecting chords theorem using similar triangles, then apply'
                    },
                    {
                        name: 'Power of Point',
                        description: 'Use power of a point theorem (generalization of intersecting chords)'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Place circle at origin, find chord intersection algebraically'
                    },
                    {
                        name: 'Radical Axis',
                        description: 'Advanced approach using radical axis concepts'
                    }
                ],
                comparison: 'Direct theorem application is fastest. Similar triangles shows why theorem works. Power of point is more general. Coordinate geometry provides computational approach.'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard chord calculation approach',
            methods: [{
                name: 'Alternative approach',
                description: 'Other methods may apply depending on given information'
            }],
            comparison: 'Choose method based on given information and problem context'
        };
    }
}

// Export the class
export default EnhancedCircleChordLengthMathematicalWorkbook;

/**Usage Examples
Here are examples of how to use this comprehensive chord workbook class:
// Example 1: Basic chord from radius and distance
const workbook1 = new EnhancedCircleChordLengthMathematicalWorkbook({
    explanationLevel: 'intermediate',
    includeRealWorldApplications: true
});

const result1 = workbook1.solveChordProblem({
    parameters: { r: 10, d: 6 },
    problemType: 'chord_from_radius_distance',
    context: { units: 'cm' }
});

// Example 2: Chord from angle (with ELI5 explanations)
const workbook2 = new EnhancedCircleChordLengthMathematicalWorkbook({
    explanationLevel: 'ELI5',
    includeErrorPrevention: true,
    includeThinkingPrompts: true
});

const result2 = workbook2.solveChordProblem({
    parameters: { r: 15, angle: 60, angleUnit: 'degrees' },
    problemType: 'chord_from_radius_angle',
    context: { units: 'meters' }
});

// Example 3: Arch bridge problem (sagitta) with scaffolding
const workbook3 = new EnhancedCircleChordLengthMathematicalWorkbook({
    explanationLevel: 'scaffolded',
    includeRealWorldApplications: true,
    includePedagogicalNotes: true,
    includeHistoricalContext: true
});

const result3 = workbook3.solveChordProblem({
    parameters: { c: 30, h: 5 },
    problemType: 'chord_sagitta',
    scenario: 'Bridge arch with 30m span and 5m height',
    context: { units: 'meters', application: 'bridge design' }
});

// Example 4: Reverse calculation (find radius) with detailed explanations
const workbook4 = new EnhancedCircleChordLengthMathematicalWorkbook({
    explanationLevel: 'detailed',
    includeAlternativeMethods: true,
    includeCrossCurricularLinks: true,
    includeVerificationInSteps: true
});

const result4 = workbook4.solveChordProblem({
    parameters: { c: 24, d: 5 },
    problemType: 'radius_from_chord_distance',
    context: { units: 'cm' }
});

// Example 5: Intersecting chords
const workbook5 = new EnhancedCircleChordLengthMathematicalWorkbook({
    explanationLevel: 'intermediate'
});

const result5 = workbook5.solveChordProblem({
    parameters: { AP: 4, PB: 6, CP: 3 },
    problemType: 'intersecting_chords',
    context: { units: 'units' }
});

*/

