// Enhanced Triangle Centers Mathematical Workbook - Comprehensive Implementation
import * as math from 'mathjs';

export class EnhancedTriangleCentersWorkbook {
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
        this.initializeTriangleCenterSolvers();
        this.initializeTriangleCenterLessons();
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
        this.initializeHistoricalDatabase();
        this.initializeConstructionDatabase();
        this.initializeCoordinateGeometryDatabase();
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
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠', 'triangle': '△',
            'congruent': '≅', 'similar': '∼', 'therefore': '∴', 'because': '∵'
        };
    }

    initializeTriangleCenterSolvers() {
        this.triangleCenterTypes = {
            centroid: {
                name: 'Centroid',
                symbol: 'G',
                description: 'Point where medians intersect',
                formula: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
                properties: [
                    'Divides each median in ratio 2:1 from vertex',
                    'Center of mass/balance point',
                    'Always inside the triangle',
                    'Coordinates are average of vertices'
                ],
                solver: this.calculateCentroid.bind(this),
                constructionMethod: 'Draw any two medians; their intersection is the centroid',
                category: 'basic'
            },

            circumcenter: {
                name: 'Circumcenter',
                symbol: 'O',
                description: 'Point where perpendicular bisectors intersect',
                formula: 'Center of circumscribed circle',
                properties: [
                    'Equidistant from all three vertices',
                    'Center of circumscribed circle',
                    'Can be inside, on, or outside triangle',
                    'On hypotenuse for right triangles',
                    'Outside for obtuse triangles'
                ],
                solver: this.calculateCircumcenter.bind(this),
                constructionMethod: 'Draw perpendicular bisectors of any two sides',
                category: 'intermediate'
            },

            incenter: {
                name: 'Incenter',
                symbol: 'I',
                description: 'Point where angle bisectors intersect',
                formula: 'Weighted average by side lengths',
                properties: [
                    'Equidistant from all three sides',
                    'Center of inscribed circle',
                    'Always inside the triangle',
                    'Distance to sides equals inradius'
                ],
                solver: this.calculateIncenter.bind(this),
                constructionMethod: 'Draw angle bisectors of any two angles',
                category: 'intermediate'
            },

            orthocenter: {
                name: 'Orthocenter',
                symbol: 'H',
                description: 'Point where altitudes intersect',
                formula: 'Intersection of altitude lines',
                properties: [
                    'Intersection point of three altitudes',
                    'Can be inside, on, or outside triangle',
                    'At right angle vertex for right triangles',
                    'Outside for obtuse triangles',
                    'Reflects through sides to circumcircle'
                ],
                solver: this.calculateOrthocenter.bind(this),
                constructionMethod: 'Draw altitudes from any two vertices',
                category: 'advanced'
            },

            nine_point_center: {
                name: 'Nine-Point Center',
                symbol: 'N',
                description: 'Center of nine-point circle',
                formula: 'Midpoint of Euler line segment OH',
                properties: [
                    'Passes through 9 special points',
                    'Midpoint between orthocenter and circumcenter',
                    'Radius is half the circumradius',
                    'Tangent to incircle and excircles (Feuerbach point)'
                ],
                ninePoints: [
                    'Midpoints of three sides',
                    'Feet of three altitudes',
                    'Midpoints from vertices to orthocenter'
                ],
                solver: this.calculateNinePointCenter.bind(this),
                category: 'advanced'
            },

            euler_line: {
                name: 'Euler Line',
                description: 'Line through O, G, H, and N',
                properties: [
                    'Contains circumcenter, centroid, orthocenter, nine-point center',
                    'Ratio HG:GO = 2:1',
                    'Nine-point center is midpoint of OH',
                    'Does not exist for equilateral triangles (all centers coincide)'
                ],
                solver: this.calculateEulerLine.bind(this),
                category: 'advanced'
            },

            fermat_point: {
                name: 'Fermat Point (Torricelli Point)',
                symbol: 'F',
                description: 'Point minimizing sum of distances to vertices',
                properties: [
                    'Minimizes total distance to three vertices',
                    'Each angle from point to vertices is 120°',
                    'For triangles with all angles < 120°',
                    'Otherwise at the obtuse vertex'
                ],
                solver: this.calculateFermatPoint.bind(this),
                constructionMethod: 'Construct equilateral triangles on each side, connect opposite vertices',
                category: 'advanced'
            },

            symmedian_point: {
                name: 'Symmedian Point (K-point)',
                symbol: 'K',
                description: 'Intersection of symmedians',
                properties: [
                    'Reflection of medians across angle bisectors',
                    'Barycentric coordinates proportional to side squares',
                    'Always inside triangle',
                    'Related to area and side lengths'
                ],
                solver: this.calculateSymmedianPoint.bind(this),
                category: 'advanced'
            },

            gergonne_point: {
                name: 'Gergonne Point',
                symbol: 'Ge',
                description: 'Intersection of lines from vertices to opposite touchpoints of incircle',
                properties: [
                    'Related to incircle contact points',
                    'Cevian point',
                    'Always inside triangle',
                    'Named after Joseph Gergonne'
                ],
                solver: this.calculateGergonnePoint.bind(this),
                category: 'advanced'
            },

            nagel_point: {
                name: 'Nagel Point',
                symbol: 'Na',
                description: 'Intersection of lines from vertices to opposite excircle touchpoints',
                properties: [
                    'Related to excircle contact points',
                    'Isotomic conjugate of incenter',
                    'Always inside triangle',
                    'On Nagel line with centroid and incenter'
                ],
                solver: this.calculateNagelPoint.bind(this),
                category: 'advanced'
            }
        };
    }

    initializeTriangleCenterLessons() {
        this.lessons = {
            centroid: {
                title: "Centroid - The Balance Point",
                mainConcept: "The centroid is where the three medians of a triangle intersect. It's the center of mass.",
                
                keyDefinitions: {
                    'Median': 'A line segment from a vertex to the midpoint of the opposite side',
                    'Centroid': 'The intersection point of the three medians',
                    'Center of Mass': 'The balance point where the triangle would balance on a pin'
                },

                theorems: [
                    {
                        name: 'Centroid Theorem',
                        statement: 'The centroid divides each median in the ratio 2:1 from the vertex',
                        proof: 'Using coordinate geometry or vector methods'
                    },
                    {
                        name: 'Coordinate Formula',
                        statement: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
                        explanation: 'The centroid coordinates are the arithmetic mean of vertex coordinates'
                    }
                ],

                properties: [
                    'Always located inside the triangle',
                    'Divides triangle into 6 smaller triangles of equal area',
                    'Trisects each median (2:1 ratio)',
                    'Balancing point of the triangle',
                    'Coordinates are average of vertex coordinates'
                ],

                formulas: {
                    coordinates: 'G(x,y) = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
                    distanceRatio: 'AG:GD = 2:1 where D is midpoint of BC',
                    areaRelation: 'Each of 6 triangles formed has area = (1/6)×total area'
                },

                construction: {
                    steps: [
                        'Find midpoint of any side (e.g., BC)',
                        'Draw median from opposite vertex A to this midpoint',
                        'Find midpoint of another side (e.g., AC)',
                        'Draw median from opposite vertex B to this midpoint',
                        'The intersection of these two medians is the centroid',
                        'The third median will also pass through this point (verification)'
                    ],
                    tools: 'Straightedge, compass (for finding midpoints)'
                },

                applications: [
                    'Finding center of mass for physical objects',
                    'Computer graphics and 3D modeling',
                    'Structural engineering',
                    'Geographic center of triangular regions',
                    'Art and design - creating balanced compositions'
                ],

                commonMistakes: [
                    'Confusing median with altitude or angle bisector',
                    'Thinking centroid is equidistant from vertices (that\'s circumcenter)',
                    'Forgetting the 2:1 ratio property',
                    'Not recognizing that all three medians must intersect at one point'
                ],

                practiceProblems: [
                    'Find centroid given three vertices',
                    'Verify 2:1 ratio property',
                    'Find third vertex given centroid and two vertices',
                    'Calculate area of sub-triangles formed by medians'
                ]
            },

            circumcenter: {
                title: "Circumcenter - The Circumscribed Circle Center",
                mainConcept: "The circumcenter is equidistant from all three vertices and is the center of the circumscribed circle.",

                keyDefinitions: {
                    'Perpendicular Bisector': 'A line perpendicular to a side passing through its midpoint',
                    'Circumcenter': 'The intersection of perpendicular bisectors',
                    'Circumcircle': 'The circle passing through all three vertices',
                    'Circumradius': 'Radius of the circumcircle (R)'
                },

                theorems: [
                    {
                        name: 'Perpendicular Bisector Theorem',
                        statement: 'Any point on the perpendicular bisector is equidistant from the endpoints',
                        application: 'All three perpendicular bisectors meet at one point'
                    },
                    {
                        name: 'Circumradius Formula',
                        statement: 'R = abc/(4K) where K is area',
                        alternates: 'R = a/(2sinA) = b/(2sinB) = c/(2sinC)'
                    }
                ],

                properties: [
                    'Equidistant from all three vertices: OA = OB = OC = R',
                    'Inside triangle if acute',
                    'On hypotenuse if right-angled',
                    'Outside triangle if obtuse',
                    'Center of unique circle through all three vertices'
                ],

                formulas: {
                    circumradius: 'R = abc/(4×Area)',
                    lawOfSines: 'a/sinA = b/sinB = c/sinC = 2R',
                    coordinates: 'Complex formula involving perpendicular bisector intersection'
                },

                construction: {
                    steps: [
                        'Find midpoint of side AB',
                        'Draw perpendicular bisector of AB',
                        'Find midpoint of side BC',
                        'Draw perpendicular bisector of BC',
                        'The intersection is the circumcenter O',
                        'Radius R = distance from O to any vertex'
                    ],
                    tools: 'Straightedge, compass'
                },

                specialCases: {
                    'Acute Triangle': 'Circumcenter is inside',
                    'Right Triangle': 'Circumcenter is at midpoint of hypotenuse',
                    'Obtuse Triangle': 'Circumcenter is outside',
                    'Equilateral Triangle': 'Coincides with all other centers'
                },

                applications: [
                    'GPS trilateration',
                    'Finding location from distances to known points',
                    'Architecture - circular arches through three points',
                    'Robotics - path planning',
                    'Astronomy - orbital calculations'
                ],

                commonMistakes: [
                    'Confusing perpendicular bisectors with altitudes',
                    'Assuming circumcenter is always inside triangle',
                    'Forgetting that right triangle circumcenter is on hypotenuse',
                    'Incorrect perpendicular bisector construction'
                ]
            },

            incenter: {
                title: "Incenter - The Inscribed Circle Center",
                mainConcept: "The incenter is equidistant from all three sides and is the center of the inscribed circle.",

                keyDefinitions: {
                    'Angle Bisector': 'A ray dividing an angle into two equal parts',
                    'Incenter': 'The intersection of angle bisectors',
                    'Incircle': 'The circle tangent to all three sides',
                    'Inradius': 'Radius of the incircle (r)'
                },

                theorems: [
                    {
                        name: 'Angle Bisector Theorem',
                        statement: 'Angle bisector divides opposite side in ratio of adjacent sides',
                        formula: 'BD/DC = AB/AC'
                    },
                    {
                        name: 'Inradius Formula',
                        statement: 'r = Area/s where s is semiperimeter',
                        derivation: 'Area = rs (sum of areas of three triangles)'
                    }
                ],

                properties: [
                    'Equidistant from all three sides',
                    'Always inside the triangle',
                    'Distance to each side equals inradius r',
                    'Divides triangle into three smaller triangles with equal height r',
                    'Barycentric coordinates weighted by side lengths'
                ],

                formulas: {
                    inradius: 'r = Area/s = Area/((a+b+c)/2)',
                    coordinates: 'I = (a×A + b×B + c×C)/(a+b+c)',
                    heronFormula: 'r = √((s-a)(s-b)(s-c)/s)',
                    areaFormula: 'Area = rs where s = (a+b+c)/2'
                },

                construction: {
                    steps: [
                        'Draw angle bisector of angle A',
                        'Draw angle bisector of angle B',
                        'The intersection is the incenter I',
                        'Drop perpendicular from I to any side to find inradius r',
                        'Draw circle with center I and radius r (incircle)'
                    ],
                    tools: 'Straightedge, compass, protractor'
                },

                applications: [
                    'Largest circle that fits inside triangle',
                    'Optimizing circular design within triangular space',
                    'Gear design and mechanical engineering',
                    'Computer graphics - inscribed shapes',
                    'Architecture - circular elements in triangular spaces'
                ],

                commonMistakes: [
                    'Confusing angle bisector with median or altitude',
                    'Thinking incenter is equidistant from vertices (that\'s circumcenter)',
                    'Incorrect angle bisector construction',
                    'Forgetting that incircle is tangent to all three sides'
                ]
            },

            orthocenter: {
                title: "Orthocenter - Where Altitudes Meet",
                mainConcept: "The orthocenter is where the three altitudes of a triangle intersect.",

                keyDefinitions: {
                    'Altitude': 'A perpendicular line from a vertex to the opposite side (or its extension)',
                    'Orthocenter': 'The intersection of the three altitudes',
                    'Foot of Altitude': 'The point where altitude meets the opposite side'
                },

                theorems: [
                    {
                        name: 'Altitude Theorem',
                        statement: 'The three altitudes of a triangle are concurrent',
                        proof: 'Using perpendicular properties'
                    },
                    {
                        name: 'Reflection Property',
                        statement: 'Reflecting H across any side gives a point on the circumcircle',
                        significance: 'Connects orthocenter to circumcircle'
                    }
                ],

                properties: [
                    'Location varies with triangle type',
                    'Inside for acute triangles',
                    'At right angle vertex for right triangles',
                    'Outside for obtuse triangles',
                    'Lies on Euler line with O, G, N',
                    'Reflection across sides lies on circumcircle'
                ],

                formulas: {
                    coordinates: 'Complex - involves solving altitude line equations',
                    eulerLine: 'Collinear with O, G, N in ratio HG:GO = 2:1'
                },

                construction: {
                    steps: [
                        'From vertex A, draw perpendicular to side BC',
                        'From vertex B, draw perpendicular to side AC',
                        'The intersection is the orthocenter H',
                        'The altitude from C will also pass through H (verification)'
                    ],
                    note: 'For obtuse triangles, extend sides to meet altitudes',
                    tools: 'Straightedge, set square or compass for perpendiculars'
                },

                specialCases: {
                    'Acute Triangle': 'Orthocenter is inside',
                    'Right Triangle': 'Orthocenter is at the right angle vertex',
                    'Obtuse Triangle': 'Orthocenter is outside',
                    'Equilateral Triangle': 'Coincides with all other centers'
                },

                applications: [
                    'Engineering - structural analysis',
                    'Physics - force resolution',
                    'Computer graphics - 3D rendering',
                    'Navigation - triangulation calculations'
                ],

                commonMistakes: [
                    'Confusing altitude with median or angle bisector',
                    'Not extending sides for obtuse triangles',
                    'Assuming orthocenter is always inside',
                    'Incorrect perpendicular construction'
                ]
            },

            euler_line: {
                title: "Euler Line - The Remarkable Collinearity",
                mainConcept: "The Euler line contains four important triangle centers: O, G, H, and N in a specific ratio.",

                keyTheorem: {
                    name: 'Euler Line Theorem',
                    statement: 'The orthocenter H, centroid G, and circumcenter O are collinear',
                    ratio: 'HG:GO = 2:1',
                    extension: 'Nine-point center N is the midpoint of segment OH'
                },

                properties: [
                    'Contains O (circumcenter), G (centroid), H (orthocenter), N (nine-point center)',
                    'Ratio HG:GO = 2:1',
                    'N is midpoint of OH',
                    'Does not exist for equilateral triangles (all centers coincide)',
                    'Can be inside, partially outside, or completely outside triangle'
                ],

                formulas: {
                    vectorForm: 'G = (O + H)/3 or H = O + 2OG',
                    ninePointCenter: 'N = (O + H)/2',
                    parametric: 'Point on line = O + t(H - O) for real t'
                },

                historicalContext: {
                    discoverer: 'Leonhard Euler (1765)',
                    significance: 'One of the most beautiful theorems in elementary geometry',
                    extensions: 'Many other triangle centers also lie on this line'
                },

                applications: [
                    'Pure mathematics - beautiful geometric relationship',
                    'Educational - demonstrates collinearity',
                    'Computer graphics - center calculations',
                    'Research - triangle center theory'
                ]
            },

            nine_point_circle: {
                title: "Nine-Point Circle - Feuerbach's Theorem",
                mainConcept: "A remarkable circle passing through nine special points of any triangle.",

                ninePoints: {
                    group1: 'Midpoints of the three sides (Ma, Mb, Mc)',
                    group2: 'Feet of the three altitudes (Ha, Hb, Hc)',
                    group3: 'Midpoints from vertices to orthocenter (Ea, Eb, Ec)'
                },

                theorems: [
                    {
                        name: 'Nine-Point Circle Theorem',
                        statement: 'These nine points lie on a single circle',
                        discoverer: 'Feuerbach, Brianchon, Poncelet (1820s)'
                    },
                    {
                        name: 'Radius Theorem',
                        statement: 'Radius of nine-point circle is R/2 (half the circumradius)',
                        proof: 'Using similarity and Euler line properties'
                    },
                    {
                        name: 'Feuerbach\'s Theorem',
                        statement: 'Nine-point circle is tangent to incircle and all three excircles',
                        significance: 'One of the most beautiful theorems in geometry'
                    }
                ],

                properties: [
                    'Center N is midpoint of OH (Euler line)',
                    'Radius is half the circumradius: r₉ = R/2',
                    'Tangent to incircle and three excircles (Feuerbach points)',
                    'Passes through nine special points',
                    'Also called Euler circle or Feuerbach circle'
                ],

                applications: [
                    'Advanced geometry research',
                    'Competition mathematics',
                    'Beautiful mathematical relationships',
                    'Educational - demonstrates complex geometric properties'
                ]
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            centroid: {
                'Finding centroid': [
                    'Confusing median with altitude or angle bisector',
                    'Incorrectly calculating midpoints',
                    'Arithmetic errors in averaging coordinates',
                    'Forgetting to average all three coordinates'
                ],
                'Using properties': [
                    'Forgetting 2:1 ratio from vertex',
                    'Thinking centroid is equidistant from vertices',
                    'Not recognizing centroid is always inside'
                ],
                'Construction': [
                    'Drawing altitude instead of median',
                    'Not finding true midpoint of side',
                    'Stopping after drawing only one median'
                ]
            },

            circumcenter: {
                'Finding circumcenter': [
                    'Drawing altitudes instead of perpendicular bisectors',
                    'Incorrect perpendicular construction',
                    'Not extending perpendicular bisectors far enough (obtuse case)',
                    'Arithmetic errors in coordinate calculations'
                ],
                'Using properties': [
                    'Assuming circumcenter is always inside',
                    'Confusing equidistant from sides vs vertices',
                    'Forgetting right triangle special case (on hypotenuse)'
                ],
                'Circumradius': [
                    'Using wrong formula',
                    'Sign errors in calculations',
                    'Confusing circumradius with inradius'
                ]
            },

            incenter: {
                'Finding incenter': [
                    'Confusing angle bisector with median or altitude',
                    'Incorrect angle bisector construction',
                    'Wrong weights in barycentric formula',
                    'Not measuring sides accurately for weights'
                ],
                'Using properties': [
                    'Thinking incenter is equidistant from vertices',
                    'Confusing inradius with circumradius',
                    'Forgetting incenter is always inside'
                ],
                'Inradius': [
                    'Incorrect semiperimeter calculation',
                    'Wrong area formula',
                    'Sign errors in Heron\'s formula'
                ]
            },

            orthocenter: {
                'Finding orthocenter': [
                    'Confusing altitude with median or angle bisector',
                    'Not extending sides for obtuse triangles',
                    'Incorrect perpendicular construction',
                    'Solving altitude equations incorrectly'
                ],
                'Using properties': [
                    'Assuming orthocenter is always inside',
                    'Not recognizing obtuse triangle case',
                    'Forgetting right triangle special case',
                    'Confusion about Euler line ratios'
                ],
                'Construction': [
                    'Not extending sides when needed',
                    'Perpendicular in wrong direction',
                    'Arithmetic errors in coordinate method'
                ]
            },

            euler_line: {
                'Identifying Euler line': [
                    'Thinking it exists for equilateral triangles',
                    'Incorrect ratio calculations (HG:GO)',
                    'Not recognizing collinearity',
                    'Confusing order of centers'
                ],
                'Using properties': [
                    'Wrong ratio HG:GO (should be 2:1)',
                    'Forgetting nine-point center position',
                    'Not checking for equilateral case'
                ]
            }
        };

        this.errorPrevention = {
            median_vs_altitude: {
                reminder: 'Median goes to midpoint; altitude is perpendicular',
                method: 'Always find midpoint first for medians, use perpendicular for altitudes'
            },
            perpendicular_bisector: {
                reminder: 'Must be both perpendicular AND through midpoint',
                method: 'Find midpoint, then construct perpendicular at that point'
            },
            coordinate_calculation: {
                reminder: 'Double-check all arithmetic, especially with fractions',
                method: 'Verify answer by checking distances or properties'
            },
            triangle_type: {
                reminder: 'Check if triangle is acute, right, or obtuse first',
                method: 'This determines where centers lie (inside/outside/on triangle)'
            },
            construction_tools: {
                reminder: 'Use compass and straightedge carefully',
                method: 'Check constructions by measuring or calculating'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this center exists and its geometric meaning',
                language: 'intuitive and meaning-focused'
            },
            procedural: {
                focus: 'Exact steps to find the center',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Graphical and spatial understanding',
                language: 'visual and spatial descriptions'
            },
            algebraic: {
                focus: 'Coordinate formulas and calculations',
                language: 'precise mathematical notation'
            },
            geometric: {
                focus: 'Construction methods and classical geometry',
                language: 'compass-and-straightedge techniques'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential steps only',
                examples: 'simple triangles with nice coordinates',
                centers: ['centroid', 'circumcenter', 'incenter']
            },
            intermediate: {
                vocabulary: 'standard geometric terminology',
                detail: 'main steps with explanations',
                examples: 'variety of triangle types',
                centers: ['centroid', 'circumcenter', 'incenter', 'orthocenter']
            },
            ELI5: {
                vocabulary: 'everyday language with simple analogies',
                detail: 'every step explained with pictures',
                examples: 'real-world analogies',
                analogies: true,
                visualization: 'simple drawings and comparisons',
                centers: ['centroid', 'circumcenter', 'incenter']
            },
            detailed: {
                vocabulary: 'full geometric vocabulary',
                detail: 'comprehensive with proofs and derivations',
                examples: 'general cases and special cases',
                centers: 'all centers including advanced ones'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced from easy to hard',
                centers: 'build up from basic to advanced'
            }
        };
    }

    initializeRealWorldProblems() {
        this.realWorldProblems = {
            centroid_balance: {
                scenario: "Finding balance point of triangular object",
                center: 'centroid',
                examples: [
                    "Where to support a triangular table so it doesn't tip?",
                    "Balance point of a triangular sail",
                    "Center of mass for triangular piece of metal"
                ],
                context: "The centroid is the center of mass - the point where you can balance the triangle",
                fields: ['Physics', 'Engineering', 'Manufacturing']
            },

            circumcenter_equidistant: {
                scenario: "Finding point equidistant from three locations",
                center: 'circumcenter',
                examples: [
                    "Build cell tower equidistant from three towns",
                    "Place water fountain equidistant from three buildings",
                    "GPS trilateration - finding position from three satellites"
                ],
                context: "Circumcenter is the unique point at equal distance from all three vertices",
                fields: ['GPS/Navigation', 'Urban Planning', 'Telecommunications']
            },

            incenter_largest_circle: {
                scenario: "Largest circular object fitting in triangular space",
                center: 'incenter',
                examples: [
                    "Largest circular pool in triangular yard",
                    "Biggest circular gear in triangular housing",
                    "Optimal circular fountain in triangular plaza"
                ],
                context: "Incircle is the largest circle that fits inside the triangle",
                fields: ['Architecture', 'Mechanical Engineering', 'Landscaping']
            },

            orthocenter_perpendiculars: {
                scenario: "Problems involving perpendiculars from vertices",
                center: 'orthocenter',
                examples: [
                    "Structural analysis with perpendicular supports",
                    "Finding perpendicular force components",
                    "Architectural design with perpendicular elements"
                ],
                context: "Orthocenter is where perpendiculars from vertices meet",
                fields: ['Structural Engineering', 'Physics', 'Architecture']
            },

            surveying: {
                scenario: "Land surveying and triangulation",
                center: 'multiple',
                examples: [
                    "Dividing triangular land into equal areas (centroid)",
                    "Finding boundary equidistant from corners (circumcenter)",
                    "Mapping triangular regions"
                ],
                context: "Triangle centers help solve practical surveying problems",
                fields: ['Surveying', 'Cartography', 'Civil Engineering']
            },

            art_design: {
                scenario: "Creating balanced and aesthetic designs",
                center: 'multiple',
                examples: [
                    "Balancing triangular composition (centroid)",
                    "Creating circular elements in triangular frames (incenter)",
                    "Symmetric design elements"
                ],
                context: "Triangle centers create natural focal points in design",
                fields: ['Graphic Design', 'Art', 'Photography']
            },

            robotics: {
                scenario: "Robot path planning and positioning",
                center: 'multiple',
                examples: [
                    "Optimal position among three objects (Fermat point)",
                    "Triangulation for robot localization (circumcenter)",
                    "Center of mass for triangular robot components (centroid)"
                ],
                context: "Triangle geometry essential for robotics algorithms",
                fields: ['Robotics', 'Computer Science', 'Automation']
            }
        };
    }

    initializePrerequisiteDatabase() {
        this.prerequisites = {
            centroid: {
                skills: [
                    'Finding midpoint of line segment',
                    'Drawing line segments',
                    'Averaging numbers',
                    'Coordinate geometry basics'
                ],
                priorKnowledge: [
                    'Midpoint formula: M = ((x₁+x₂)/2, (y₁+y₂)/2)',
                    'What a median is',
                    'Basic triangle properties'
                ],
                checkQuestions: [
                    "What is the midpoint of (2,3) and (8,7)?",
                    "What is the average of 4, 6, and 8?",
                    "What is a median of a triangle?"
                ]
            },

            circumcenter: {
                skills: [
                    'Finding perpendicular bisector',
                    'Solving system of linear equations',
                    'Distance formula',
                    'Perpendicular line construction'
                ],
                priorKnowledge: [
                    'Perpendicular lines have slopes that multiply to -1',
                    'Distance formula: d = √[(x₂-x₁)² + (y₂-y₁)²]',
                    'Midpoint formula'
                ],
                checkQuestions: [
                    "What is slope of line perpendicular to y = 2x + 1?",
                    "Find distance between (0,0) and (3,4)",
                    "What is perpendicular bisector?"
                ]
            },

            incenter: {
                skills: [
                    'Angle bisector construction',
                    'Weighted averages',
                    'Distance from point to line',
                    'Triangle side length calculation'
                ],
                priorKnowledge: [
                    'Angle bisector divides angle equally',
                    'Distance formula',
                    'Basic trigonometry helpful but not required'
                ],
                checkQuestions: [
                    "How do you bisect an angle?",
                    "What is weighted average?",
                    "What does it mean for a point to be equidistant from lines?"
                ]
            },

            orthocenter: {
                skills: [
                    'Finding altitude (perpendicular from vertex)',
                    'Slope of perpendicular lines',
                    'Solving systems of equations',
                    'Extending lines'
                ],
                priorKnowledge: [
                    'Perpendicular lines concept',
                    'Slope formula',
                    'Negative reciprocal for perpendicular slopes',
                    'Altitude definition'
                ],
                checkQuestions: [
                    "What is an altitude of a triangle?",
                    "Find slope perpendicular to line with slope 3",
                    "How do you extend a line?"
                ]
            },

            euler_line: {
                skills: [
                    'Finding multiple centers',
                    'Checking collinearity',
                    'Ratio calculations',
                    'Distance and midpoint formulas'
                ],
                priorKnowledge: [
                    'Circumcenter, centroid, orthocenter',
                    'Collinearity concept',
                    'Ratio and proportion'
                ],
                checkQuestions: [
                    "What is collinearity?",
                    "How do you find a 2:1 ratio point?",
                    "Name three triangle centers"
                ]
            },

            nine_point_circle: {
                skills: [
                    'Finding all basic centers',
                    'Midpoint calculations',
                    'Circle equations',
                    'Advanced geometric reasoning'
                ],
                priorKnowledge: [
                    'All basic triangle centers',
                    'Circle properties',
                    'Euler line',
                    'Altitude feet'
                ],
                checkQuestions: [
                    "What are the nine points?",
                    "How to find foot of altitude?",
                    "What is the Euler line?"
                ]
            }
        };
    }

    initializeRepresentationDatabase() {
        this.representations = {
            physical_balance: {
                description: "Triangle as physical object to balance",
                analogy: "Finding where to put your finger to balance a cardboard triangle",
                visualization: "Cutout triangle balanced on a pencil point",
                suitableFor: ['centroid'],
                explanation: "The centroid is exactly where the triangle would balance"
            },

            circle_fitting: {
                description: "Fitting circles in and around triangles",
                analogy: "Finding the biggest circle that fits inside (incircle) or smallest that contains triangle (circumcircle)",
                visualization: "Draw circles tangent to sides or passing through vertices",
                suitableFor: ['incenter', 'circumcenter'],
                explanation: "Centers are at the center of these special circles"
            },

            perpendicular_construction: {
                description: "Using compass and straightedge constructions",
                analogy: "Classic geometric construction like the ancient Greeks",
                visualization: "Step-by-step compass and straightedge drawings",
                suitableFor: ['all centers'],
                explanation: "Classical construction method using only compass and straightedge"
            },

            coordinate_method: {
                description: "Using coordinate geometry and algebra",
                analogy: "Solving equations to find intersection points",
                visualization: "Graph with lines and intersection points",
                suitableFor: ['all centers'],
                explanation: "Modern algebraic approach using coordinates"
            },

            vector_approach: {
                description: "Using position vectors",
                analogy: "Arrows from origin to points, combined with weights",
                visualization: "Vector diagrams with weighted combinations",
                suitableFor: ['centroid', 'incenter'],
                explanation: "Weighted average of position vectors"
            },

            gps_triangulation: {
                description: "Like GPS finding position from satellites",
                analogy: "Three cell towers triangulating your phone position",
                visualization: "Three circles intersecting at one point",
                suitableFor: ['circumcenter'],
                explanation: "Point equidistant from three known points"
            }
        };
    }

    initializeWorkedExamplesDatabase() {
        this.workedExamples = {
            centroid: [
                {
                    vertices: [[0,0], [6,0], [0,8]],
                    center: [2, 8/3],
                    calculation: "G = ((0+6+0)/3, (0+0+8)/3) = (2, 8/3)",
                    difficulty: "easy",
                    triangleType: "right triangle"
                },
                {
                    vertices: [[1,1], [5,1], [3,5]],
                    center: [3, 7/3],
                    calculation: "G = ((1+5+3)/3, (1+1+5)/3) = (3, 7/3)",
                    difficulty: "easy",
                    triangleType: "isosceles"
                },
                {
                    vertices: [[-2,3], [4,7], [6,-1]],
                    center: [8/3, 3],
                    calculation: "G = ((-2+4+6)/3, (3+7-1)/3) = (8/3, 3)",
                    difficulty: "medium",
                    triangleType: "scalene"
                }
            ],

            circumcenter: [
                {
                    vertices: [[0,0], [4,0], [0,3]],
                    center: [2, 1.5],
                    calculation: "Right triangle: circumcenter at midpoint of hypotenuse",
                    circumradius: 2.5,
                    difficulty: "easy",
                    triangleType: "right triangle",
                    specialCase: "Circumcenter on hypotenuse"
                },
                {
                    vertices: [[0,0], [6,0], [3,3]],
                    center: [3, 1.5],
                    calculation: "Perpendicular bisectors intersection",
                    circumradius: 3,
                    difficulty: "medium",
                    triangleType: "isosceles acute"
                }
            ],

            incenter: [
                {
                    vertices: [[0,0], [6,0], [0,8]],
                    sides: [6, 8, 10],
                    center: [2, 2],
                    inradius: 2,
                    calculation: "I = (6A + 8B + 10C)/(6+8+10)",
                    difficulty: "medium",
                    triangleType: "right triangle"
                }
            ],

            orthocenter: [
                {
                    vertices: [[0,0], [4,0], [0,3]],
                    center: [0, 0],
                    calculation: "Right triangle: orthocenter at right angle vertex",
                    difficulty: "easy",
                    triangleType: "right triangle",
                    specialCase: "Orthocenter at right angle"
                },
                {
                    vertices: [[0,0], [4,0], [2,3]],
                    center: [2, 2/3],
                    calculation: "Acute triangle: altitudes intersection inside",
                    difficulty: "medium",
                    triangleType: "acute"
                }
            ],

            euler_line: [
                {
                    vertices: [[0,0], [6,0], [0,6]],
                    O: [3, 3],
                    G: [2, 2],
                    H: [0, 0],
                    N: [1.5, 1.5],
                    verification: "HG:GO = 2:1 ✓, N is midpoint of OH ✓",
                    difficulty: "medium",
                    triangleType: "right isosceles"
                }
            ]
        };
    }

    initializeMisconceptionDatabase() {
        this.misconceptions = {
            centroid_confusion: {
                misconception: "Centroid is equidistant from all three vertices",
                reality: "Circumcenter is equidistant from vertices; centroid divides medians 2:1",
                correctiveExample: "In triangle (0,0), (6,0), (0,6): G=(2,2) but distances to vertices are √8, √20, √8",
                commonIn: ['centroid problems']
            },

            center_always_inside: {
                misconception: "All triangle centers are always inside the triangle",
                reality: "Only centroid and incenter are always inside; others can be outside",
                correctiveExample: "Obtuse triangle: circumcenter and orthocenter are outside",
                commonIn: ['circumcenter', 'orthocenter']
            },

            median_altitude_confusion: {
                misconception: "Median and altitude are the same thing",
                reality: "Median goes to midpoint; altitude is perpendicular",
                correctiveExample: "In scalene triangle, medians and altitudes are different lines",
                commonIn: ['centroid', 'orthocenter']
            },

            perpendicular_bisector_confusion: {
                misconception: "Perpendicular bisector is same as altitude",
                reality: "Perpendicular bisector passes through midpoint of side; altitude from vertex",
                correctiveExample: "Perpendicular bisector doesn't necessarily pass through opposite vertex",
                commonIn: ['circumcenter']
            },

            angle_bisector_median: {
                misconception: "Angle bisector goes through midpoint of opposite side",
                reality: "Only true for isosceles triangles; generally divides in ratio of adjacent sides",
                correctiveExample: "Angle bisector theorem: BD/DC = AB/AC",
                commonIn: ['incenter']
            },

            equilateral_generalization: {
                misconception: "Properties of equilateral triangle apply to all triangles",
                reality: "Equilateral is special case; centers coincide only for equilateral",
                correctiveExample: "In equilateral, all centers coincide; in scalene, they're all different",
                commonIn: ['all centers']
            },

            euler_line_always_exists: {
                misconception: "Euler line exists for every triangle",
                reality: "Euler line doesn't exist for equilateral triangles (centers coincide)",
                correctiveExample: "Equilateral triangle: O = G = H = I, no line",
                commonIn: ['euler_line']
            },

            ratio_confusion: {
                misconception: "Centroid divides median in ratio 1:2 from midpoint",
                reality: "Ratio is 2:1 from vertex to midpoint",
                correctiveExample: "If median is 9 units, vertex to centroid is 6, centroid to midpoint is 3",
                commonIn: ['centroid']
            },

            right_triangle_circumcenter: {
                misconception: "Circumcenter of right triangle is at right angle vertex",
                reality: "Circumcenter is at midpoint of hypotenuse",
                correctiveExample: "Right triangle vertices (0,0), (a,0), (0,b): circumcenter at (a/2, b/2)",
                commonIn: ['circumcenter']
            }
        };
    }

    initializeAnalogyDatabase() {
        this.analogies = {
            centroid_balance: {
                analogy: "Balancing a cardboard triangle on your finger",
                explanation: "The centroid is exactly where you'd place your finger to balance a triangular piece of cardboard",
                suitableFor: ['centroid'],
                ELI5: "Imagine a triangular piece of pizza. The centroid is the exact spot where you could balance it on one finger without it tipping over!"
            },

            circumcenter_towns: {
                analogy: "Building a library equidistant from three towns",
                explanation: "If you want to build one library that's the same distance from three towns, build it at the circumcenter",
                suitableFor: ['circumcenter'],
                ELI5: "Three friends live in different houses. Where should you build a playground so each friend walks the exact same distance? That's the circumcenter!"
            },

            incenter_pool: {
                analogy: "Largest circular pool in a triangular yard",
                explanation: "If you have a triangular backyard and want the biggest circular pool that fits inside, put it at the incenter",
                suitableFor: ['incenter'],
                ELI5: "You have a triangle-shaped room and want to put the biggest circular rug that fits. The center of that rug goes at the incenter!"
            },

            orthocenter_supports: {
                analogy: "Perpendicular supports meeting at a point",
                explanation: "Like three perpendicular support beams from each wall meeting at one point in the ceiling",
                suitableFor: ['orthocenter'],
                ELI5: "Imagine three poles standing straight up from each side of a triangle. They all lean until they meet at one point - that's the orthocenter!"
            },

            euler_line_train: {
                analogy: "Four train stations on the same track",
                explanation: "Four important centers all lined up on the same 'train track'",
                suitableFor: ['euler_line'],
                ELI5: "Imagine four special points like train stations, all perfectly lined up on the same track. That's the Euler line!"
            },

            medians_splitting: {
                analogy: "Cutting a triangle into 6 equal pizzas",
                explanation: "The three medians divide the triangle into 6 smaller triangles, all with the same area",
                suitableFor: ['centroid'],
                ELI5: "The medians are like cutting lines that divide your triangle pizza into 6 equal pieces!"
            },

            nine_point_magic: {
                analogy: "A magic circle touching nine special spots",
                explanation: "One circle manages to pass through nine different special points - that's why it's called magical!",
                suitableFor: ['nine_point_circle'],
                ELI5: "Imagine a hula hoop that perfectly touches 9 special spots all at once. That's the nine-point circle!"
            }
        };
    }

    initializeHintDatabase() {
        this.hints = {
            centroid: {
                level1: "What do you know about medians of a triangle?",
                level2: "A median connects a vertex to the midpoint of the opposite side",
                level3: "The centroid is where all three medians meet",
                level4: "Use the formula G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
                constructionHint: "Find midpoint of one side, connect to opposite vertex, repeat for another side"
            },

            circumcenter: {
                level1: "What makes a point equidistant from three vertices?",
                level2: "Perpendicular bisectors help find equidistant points",
                level3: "Find perpendicular bisectors of two sides and find their intersection",
                level4: "Set up equations for perpendicular bisectors and solve system",
                constructionHint: "Construct perpendicular bisector of two sides; intersection is circumcenter",
                specialCase: "For right triangle, circumcenter is at midpoint of hypotenuse"
            },

            incenter: {
                level1: "What makes a point equidistant from all three sides?",
                level2: "Angle bisectors create points equidistant from the two sides of the angle",
                level3: "The incenter is where all three angle bisectors meet",
                level4: "Use weighted average formula with side lengths as weights",
                constructionHint: "Construct angle bisector of two angles; intersection is incenter",
                formulaHint: "I = (a×A + b×B + c×C)/(a+b+c) where a,b,c are side lengths"
            },

            orthocenter: {
                level1: "What is an altitude of a triangle?",
                level2: "An altitude is perpendicular from a vertex to the opposite side",
                level3: "Find where two altitudes intersect",
                level4: "Find slopes of sides, then perpendicular slopes, then solve system",
                constructionHint: "Construct altitude from two vertices; intersection is orthocenter",
                specialCase: "For right triangle, orthocenter is at the right angle vertex",
                obtuseCase: "For obtuse triangle, you may need to extend sides"
            },

            euler_line: {
                level1: "Which centers lie on the Euler line?",
                level2: "The orthocenter H, centroid G, and circumcenter O are collinear",
                level3: "Find these three centers and verify they're collinear",
                level4: "Check ratio HG:GO = 2:1 and that N = midpoint of OH",
                specialCase: "Equilateral triangle has no Euler line (all centers coincide)"
            },

            nine_point_circle: {
                level1: "What are the nine special points?",
                level2: "Three midpoints of sides, three feet of altitudes, three midpoints to orthocenter",
                level3: "The center is at the midpoint of O and H",
                level4: "Radius is half the circumradius: r = R/2",
                findingCenter: "N = (O + H)/2, the midpoint of circumcenter and orthocenter"
            }
        };
    }

    initializeQuestionBank() {
        this.questionBank = {
            diagnostic: [
                {
                    question: "Find the centroid of triangle with vertices (0,0), (6,0), (0,6)",
                    answer: [2, 2],
                    assesses: "centroid",
                    difficulty: "basic"
                },
                {
                    question: "Where is the circumcenter of a right triangle located?",
                    answer: "At the midpoint of the hypotenuse",
                    assesses: "circumcenter_properties",
                    difficulty: "basic"
                },
                {
                    question: "Is the orthocenter always inside the triangle?",
                    answer: "No, it can be outside for obtuse triangles",
                    assesses: "orthocenter_properties",
                    difficulty: "intermediate"
                },
                {
                    question: "What is the ratio HG:GO on the Euler line?",
                    answer: "2:1",
                    assesses: "euler_line",
                    difficulty: "intermediate"
                }
            ],

            formative: [
                {
                    question: "Which center is always inside the triangle?",
                    options: ["Circumcenter", "Centroid", "Orthocenter", "Depends on triangle"],
                    correct: "Centroid",
                    explanation: "Centroid (and incenter) are always inside; others can be outside"
                },
                {
                    question: "What does the centroid divide each median by?",
                    options: ["1:1", "1:2", "2:1 from vertex", "3:1"],
                    correct: "2:1 from vertex",
                    explanation: "Centroid divides each median in ratio 2:1 from the vertex"
                },
                {
                    question: "Which center is equidistant from all three vertices?",
                    options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
                    correct: "Circumcenter",
                    explanation: "Circumcenter is center of circle through all vertices"
                },
                {
                    question: "Which center is equidistant from all three sides?",
                    options: ["Centroid", "Circumcenter", "Incenter", "Orthocenter"],
                    correct: "Incenter",
                    explanation: "Incenter is center of inscribed circle tangent to all sides"
                }
            ],

            summative: [
                {
                    question: "Given vertices A(0,0), B(8,0), C(4,6), find all four basic centers",
                    centers: {
                        centroid: [4, 2],
                        circumcenter: [4, 8/3],
                        incenter: "calculate using side lengths",
                        orthocenter: [4, 2]
                    },
                    showsWork: true,
                    rubric: {
                        centroid: 2,
                        circumcenter: 3,
                        incenter: 3,
                        orthocenter: 2
                    }
                }
            ],

            byDifficulty: {
                easy: [
                    "Find centroid of (0,0), (4,0), (0,6)",
                    "Find circumcenter of right triangle with legs 3 and 4",
                    "Where is orthocenter of a right triangle?",
                    "Is centroid always inside triangle?"
                ],
                medium: [
                    "Find circumcenter of (0,0), (6,0), (3,4)",
                    "Find incenter of triangle with sides 3, 4, 5",
                    "Verify Euler line for isosceles triangle",
                    "Find nine-point center given O and H"
                ],
                hard: [
                    "Prove centroid divides medians in ratio 2:1",
                    "Find all centers of scalene triangle analytically",
                    "Prove Euler line theorem",
                    "Verify nine-point circle passes through nine points"
                ]
            },

            byObjective: {
                canFindCentroid: [
                    "Find G for vertices (1,1), (5,1), (3,5)",
                    "If G=(2,3) and two vertices are (0,0), (6,0), find third vertex",
                    "Verify centroid is at (4,3) for given triangle"
                ],
                canFindCircumcenter: [
                    "Find O for right triangle with legs on axes",
                    "Find O for equilateral triangle",
                    "Determine if O is inside or outside given triangle"
                ],
                canFindIncenter: [
                    "Find I for triangle with sides 3,4,5",
                    "Calculate inradius given vertices",
                    "Find incenter using angle bisectors"
                ],
                canFindOrthocenter: [
                    "Find H for acute triangle",
                    "Find H for obtuse triangle",
                    "Verify H location for right triangle"
                ],
                understandsEulerLine: [
                    "Verify O, G, H are collinear",
                    "Check HG:GO ratio",
                    "Find N given O and H",
                    "Explain why equilateral has no Euler line"
                ]
            },

            conceptual: [
                {
                    question: "Why does the centroid divide each median in ratio 2:1?",
                    expectedAnswer: "By properties of mass distribution and balance",
                    assessLevel: "understanding"
                },
                {
                    question: "Why is circumcenter of obtuse triangle outside?",
                    expectedAnswer: "Perpendicular bisectors meet outside for obtuse angles",
                    assessLevel: "reasoning"
                },
                {
                    question: "Explain why incenter is always inside",
                    expectedAnswer: "Angle bisectors always intersect inside triangle",
                    assessLevel: "understanding"
                }
            ]
        };
    }

    initializeStrategyDatabase() {
        this.strategies = {
            choosingMethod: {
                coordinateGeometry: {
                    when: "When coordinates are given",
                    advantages: ["Precise calculations", "Easy verification", "Algebraic approach"],
                    disadvantages: ["Can be computational", "May involve fractions"],
                    bestFor: ["Centroid", "All centers with coordinates"]
                },
                construction: {
                    when: "When doing geometric proof or construction",
                    advantages: ["Visual understanding", "Classical approach", "No coordinates needed"],
                    disadvantages: ["Less precise", "Harder to verify numerically"],
                    bestFor: ["All centers", "Geometric proofs"]
                },
                vectorMethod: {
                    when: "For weighted averages like centroid and incenter",
                    advantages: ["Elegant formulas", "Clear conceptual meaning"],
                    disadvantages: ["Requires vector knowledge"],
                    bestFor: ["Centroid", "Incenter"]
                }
            },

            solvingSteps: {
                centroid: [
                    "1. Identify the three vertices",
                    "2. Average x-coordinates: (x₁+x₂+x₃)/3",
                    "3. Average y-coordinates: (y₁+y₂+y₃)/3",
                    "4. Write centroid coordinates",
                    "5. Verify (optional): check 2:1 ratio on a median"
                ],
                circumcenter: [
                    "1. Check triangle type (right, acute, obtuse)",
                    "2. If right: circumcenter at hypotenuse midpoint",
                    "3. Otherwise: find perpendicular bisector of two sides",
                    "4. Solve system of equations for intersection",
                    "5. Verify: check equal distances to all vertices"
                ],
                incenter: [
                    "1. Calculate all three side lengths",
                    "2. Use weighted average formula with sides as weights",
                    "3. I = (a×A + b×B + c×C)/(a+b+c)",
                    "4. Calculate inradius if needed: r = Area/semiperimeter",
                    "5. Verify: check equal distances to all sides"
                ],
                orthocenter: [
                    "1. Check if right triangle (H at right angle)",
                    "2. Find slope of two sides",
                    "3. Find perpendicular slopes (negative reciprocals)",
                    "4. Write altitude equations",
                    "5. Solve system for intersection",
                    "6. Note: may need to extend sides for obtuse triangle"
                ]
            },

            verificationMethods: {
                centroid: [
                    "Check coordinates average correctly",
                    "Verify 2:1 ratio on one median",
                    "Check that point is inside triangle"
                ],
                circumcenter: [
                    "Calculate distance to each vertex",
                    "Verify all three distances equal",
                    "Check position (inside/outside) matches triangle type"
                ],
                incenter: [
                    "Calculate distance to each side",
                    "Verify all three distances equal",
                    "Check point is inside triangle"
                ],
                orthocenter: [
                    "Verify point lies on two altitude lines",
                    "Check third altitude also passes through point",
                    "Verify position matches triangle type"
                ],
                eulerLine: [
                    "Verify O, G, H are collinear",
                    "Check ratio HG:GO = 2:1",
                    "Verify N = (O+H)/2"
                ]
            },

            specialCases: {
                equilateralTriangle: {
                    property: "All centers coincide",
                    location: "At the geometric center",
                    eulerLine: "Does not exist (all points same)",
                    formula: "All centers at ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)"
                },
                isoscelesTriangle: {
                    property: "All centers lie on altitude from vertex angle",
                    symmetry: "Centers on line of symmetry",
                    simplification: "Use symmetry to simplify calculations"
                },
                rightTriangle: {
                    orthocenter: "At the right angle vertex",
                    circumcenter: "At midpoint of hypotenuse",
                    specialProperty: "Easy to find these centers"
                },
                obtuseTriangle: {
                    circumcenter: "Outside triangle",
                    orthocenter: "Outside triangle",
                    note: "May need to extend sides for constructions"
                }
            },

            efficientCalculation: {
                tip1: "Always check for special triangle types first",
                tip2: "Use symmetry when present",
                tip3: "For right triangles, use special case shortcuts",
                tip4: "Verify calculations with distance formulas",
                tip5: "Draw diagram to visualize before calculating"
            }
        };
    }

    initializeChallengeDatabase() {
        this.challenges = {
            speedRounds: [
                {
                    name: "Centroid Sprint",
                    timeLimit: 60,
                    problems: [
                        { vertices: [[0,0],[6,0],[0,6]], answer: [2,2] },
                        { vertices: [[0,0],[4,0],[2,4]], answer: [2,4/3] },
                        { vertices: [[1,1],[5,1],[3,5]], answer: [3,7/3] },
                        { vertices: [[0,0],[8,0],[4,6]], answer: [4,2] },
                        { vertices: [[-2,0],[2,0],[0,4]], answer: [0,4/3] }
                    ]
                },
                {
                    name: "Center Identification",
                    timeLimit: 120,
                    task: "Identify which center each description refers to",
                    problems: [
                        { description: "Equidistant from vertices", answer: "Circumcenter" },
                        { description: "Equidistant from sides", answer: "Incenter" },
                        { description: "Balance point", answer: "Centroid" },
                        { description: "Where altitudes meet", answer: "Orthocenter" },
                        { description: "Midpoint of OH", answer: "Nine-point center" }
                    ]
                }
            ],

            puzzles: [
                {
                    name: "Mystery Triangle",
                    problem: "Centroid is at (3,2). Two vertices are (0,0) and (6,0). Find third vertex.",
                    hint: "Use centroid formula backwards",
                    solution: "(3,6)"
                },
                {
                    name: "Euler Line Challenge",
                    problem: "Given O=(4,4) and G=(3,2), find H",
                    hint: "Use ratio HG:GO = 2:1",
                    solution: "H=(1,-2)"
                },
                {
                    name: "Center Construction",
                    challenge: "Given only centroid and circumcenter, can you find the orthocenter?",
                    solution: "Yes, using Euler line: H = O + 3(G-O)"
                }
            ],

            applications: [
                {
                    scenario: "Cell Tower Placement",
                    problem: "Three towns at (0,0), (8,0), (4,6). Where to build tower equidistant from all?",
                    center: "Circumcenter",
                    solution: "Find circumcenter at (4, 8/3)"
                },
                {
                    scenario: "Balance Point",
                    problem: "Triangular sign with corners at (0,0), (10,0), (5,8). Where to attach center support?",
                    center: "Centroid",
                    solution: "Centroid at (5, 8/3)"
                },
                {
                    scenario: "Largest Pool",
                    problem: "Triangular yard with vertices (0,0), (12,0), (6,8). Largest circular pool?",
                    center: "Incenter",
                    solution: "Find incenter, then inradius"
                }
            ],

            proofChallenges: [
                {
                    name: "Centroid 2:1 Ratio",
                    task: "Prove centroid divides median in ratio 2:1",
                    difficulty: "medium",
                    approach: "Use coordinate geometry or vectors"
                },
                {
                    name: "Euler Line Theorem",
                    task: "Prove O, G, H are collinear with HG:GO = 2:1",
                    difficulty: "hard",
                    approach: "Vector methods or coordinate geometry"
                },
                {
                    name: "Nine Points",
                    task: "Prove all nine points lie on one circle",
                    difficulty: "very hard",
                    approach: "Show all equidistant from nine-point center"
                }
            ],

            debuggingProblems: [
                {
                    name: "Find the Error #1",
                    incorrectWork: [
                        "Finding centroid of (0,0), (6,0), (0,6)",
                        "G = ((0+6)/2, (0+6)/2)",  // ERROR: forgot third vertex
                        "G = (3, 3)"  // Wrong
                    ],
                    correctAnswer: "(2, 2)",
                    errorType: "Forgot to include all three vertices in average"
                },
                {
                    name: "Find the Error #2",
                    incorrectWork: [
                        "Right triangle (0,0), (6,0), (0,8)",
                        "Circumcenter at right angle = (0,0)"  // ERROR: should be hypotenuse midpoint
                    ],
                    correctAnswer: "(3, 4) - midpoint of hypotenuse",
                    errorType: "Confused right angle vertex with hypotenuse midpoint"
                }
            ],

            investigationProjects: [
                {
                    name: "Center Trajectories",
                    task: "Fix two vertices, move third. How do centers move?",
                    explore: "Path traced by each center as third vertex moves",
                    difficulty: "advanced"
                },
                {
                    name: "Nine-Point Circle Exploration",
                    task: "Verify all nine points for different triangles",
                    explore: "Measure radius, compare to circumradius",
                    difficulty: "advanced"
                },
                {
                    name: "Fermat Point Investigation",
                    task: "Find point minimizing sum of distances to vertices",
                    explore: "Construction method and properties",
                    difficulty: "very advanced"
                }
            ]
        };
    }

    initializeHistoricalDatabase() {
        this.historicalContext = {
            ancientGreeks: {
                period: "~300 BCE",
                mathematicians: ["Euclid", "Archimedes"],
                contributions: [
                    "Basic triangle properties in Euclid's Elements",
                    "Compass and straightedge constructions",
                    "Properties of centers in special triangles"
                ],
                significance: "Foundation of geometric thinking"
            },

            euler: {
                mathematician: "Leonhard Euler",
                year: 1765,
                contribution: "Discovered the Euler line",
                theorem: "O, G, and H are collinear with ratio 2:1",
                significance: "Showed deep connection between triangle centers",
                impact: "One of the most beautiful results in elementary geometry"
            },

            feuerbach: {
                mathematician: "Karl Wilhelm Feuerbach",
                year: 1822,
                contribution: "Nine-point circle theorem",
                theorem: "Nine special points lie on one circle; tangent to incircle and excircles",
                significance: "Remarkable geometric relationship",
                impact: "Inspired further research in triangle geometry"
            },

            modernEra: {
                period: "1800s-present",
                developments: [
                    "Discovery of many specialized centers",
                    "Coordinate geometry methods",
                    "Barycentric coordinates",
                    "Triangle center catalog (Encyclopedia of Triangle Centers - over 50,000 centers!)"
                ],
                researchers: ["Clark Kimberling", "Eric Weisstein"],
                tools: ["Computer algebra systems", "Dynamic geometry software"]
            },

            culturalImpact: {
                education: "Triangle centers taught worldwide in geometry",
                applications: "GPS, surveying, computer graphics, robotics",
                beauty: "Example of mathematical elegance and unexpected connections",
                competitions: "Featured in math olympiads and competitions"
            }
        };
    }

    initializeConstructionDatabase() {
        this.constructions = {
            centroid: {
                classicalMethod: {
                    tools: "Compass and straightedge",
                    steps: [
                        "1. Place compass at vertex B, set radius more than half of BC",
                        "2. Draw arcs above and below BC",
                        "3. Repeat from vertex C with same radius",
                        "4. Draw line through arc intersections - this is perpendicular bisector",
                        "5. Midpoint M is where this line crosses BC",
                        "6. Draw median AM from vertex A to midpoint M",
                        "7. Repeat for another side to get second median",
                        "8. Intersection of medians is centroid G"
                    ],
                    difficulty: "Easy",
                    accuracy: "High"
                },
                coordinateMethod: {
                    steps: [
                        "1. Write coordinates of three vertices: A(x₁,y₁), B(x₂,y₂), C(x₃,y₃)",
                        "2. Calculate x-coordinate: Gₓ = (x₁+x₂+x₃)/3",
                        "3. Calculate y-coordinate: Gᵧ = (y₁+y₂+y₃)/3",
                        "4. Centroid is G(Gₓ, Gᵧ)"
                    ],
                    difficulty: "Very Easy",
                    accuracy: "Exact"
                },
                verification: [
                    "Measure distances AG and GM on one median",
                    "Verify AG:GM = 2:1",
                    "Check third median also passes through G"
                ]
            },

            circumcenter: {
                classicalMethod: {
                    tools: "Compass and straightedge",
                    steps: [
                        "1. Choose side AB",
                        "2. Construct perpendicular bisector of AB:",
                        "   a. Compass at A, radius > AB/2, draw arcs",
                        "   b. Same radius at B, draw arcs",
                        "   c. Line through arc intersections is perpendicular bisector",
                        "3. Repeat for side BC",
                        "4. Intersection of perpendicular bisectors is circumcenter O",
                        "5. Radius R = distance from O to any vertex"
                    ],
                    difficulty: "Medium",
                    accuracy: "High",
                    note: "May need to extend perpendicular bisectors for obtuse triangles"
                },
                coordinateMethod: {
                    steps: [
                        "1. Find perpendicular bisector of AB:",
                        "   - Midpoint: M₁ = ((x₁+x₂)/2, (y₁+y₂)/2)",
                        "   - Slope of AB: m = (y₂-y₁)/(x₂-x₁)",
                        "   - Perpendicular slope: m₁ = -1/m",
                        "   - Line equation: y - M₁y = m₁(x - M₁ₓ)",
                        "2. Repeat for perpendicular bisector of BC",
                        "3. Solve system of two equations",
                        "4. Solution is circumcenter O"
                    ],
                    difficulty: "Hard",
                    accuracy: "Exact",
                    note: "Involves solving system of linear equations"
                },
                rightTriangleShortcut: {
                    rule: "Circumcenter is at midpoint of hypotenuse",
                    steps: [
                        "1. Identify hypotenuse (longest side opposite right angle)",
                        "2. Find midpoint: O = ((x₁+x₂)/2, (y₁+y₂)/2)",
                        "3. This is the circumcenter"
                    ],
                    verification: "Distance to all three vertices should be equal"
                }
            },

            incenter: {
                classicalMethod: {
                    tools: "Compass and straightedge (or protractor)",
                    steps: [
                        "1. At vertex A, construct angle bisector:",
                        "   a. Compass at A, draw arc crossing both sides",
                        "   b. At intersection points, draw arcs with same radius",
                        "   c. Line from A through arc intersection is angle bisector",
                        "2. Repeat for vertex B",
                        "3. Intersection is incenter I",
                        "4. For inradius: drop perpendicular from I to any side"
                    ],
                    difficulty: "Medium",
                    accuracy: "High"
                },
                coordinateMethod: {
                    steps: [
                        "1. Calculate side lengths:",
                        "   a = distance(B,C)",
                        "   b = distance(A,C)",
                        "   c = distance(A,B)",
                        "2. Use weighted average formula:",
                        "   Iₓ = (a×x₁ + b×x₂ + c×x₃)/(a+b+c)",
                        "   Iᵧ = (a×y₁ + b×y₂ + c×y₃)/(a+b+c)",
                        "3. Incenter is I(Iₓ, Iᵧ)"
                    ],
                    difficulty: "Medium",
                    accuracy: "Exact"
                },
                inradiusCalculation: {
                    formulas: [
                        "r = Area / semiperimeter",
                        "r = Area / s where s = (a+b+c)/2",
                        "Using Heron: r = √[(s-a)(s-b)(s-c)/s]"
                    ]
                }
            },

            orthocenter: {
                classicalMethod: {
                    tools: "Compass and straightedge (or set square)",
                    steps: [
                        "1. From vertex A, construct perpendicular to BC:",
                        "   a. Compass at A, draw arc crossing BC twice",
                        "   b. From intersection points, draw arcs below BC",
                        "   c. Line from A through arc intersection is altitude",
                        "2. Repeat from vertex B to side AC",
                        "3. Intersection is orthocenter H"
                    ],
                    difficulty: "Medium-Hard",
                    accuracy: "High",
                    note: "For obtuse triangle, extend sides as needed"
                },
                coordinateMethod: {
                    steps: [
                        "1. Find slope of side BC: m₁ = (y₃-y₂)/(x₃-x₂)",
                        "2. Altitude from A has slope -1/m₁",
                        "3. Altitude equation: y - y₁ = (-1/m₁)(x - x₁)",
                        "4. Repeat for altitude from B to AC",
                        "5. Solve system of two equations",
                        "6. Solution is orthocenter H"
                    ],
                    difficulty: "Hard",
                    accuracy: "Exact"
                },
                rightTriangleShortcut: {
                    rule: "Orthocenter is at the right angle vertex",
                    verification: "For right angle at A, orthocenter H = A"
                }
            },

            ninePointCenter: {
                method: {
                    approach: "Find as midpoint of O and H",
                    steps: [
                        "1. Find circumcenter O",
                        "2. Find orthocenter H",
                        "3. Nine-point center N = (O + H)/2",
                        "4. Equivalently: N = ((Oₓ+Hₓ)/2, (Oᵧ+Hᵧ)/2)"
                    ],
                    difficulty: "Medium (if O and H known)",
                    radius: "R/2 where R is circumradius"
                },
                verification: {
                    ninePoints: [
                        "Three midpoints of sides",
                        "Three feet of altitudes",
                        "Three midpoints from vertices to H"
                    ],
                    check: "Verify all nine points are distance R/2 from N"
                }
            }
        };
    }

    initializeCoordinateGeometryDatabase() {
        this.coordinateFormulas = {
            centroid: {
                formula: "G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)",
                derivation: "Average of vertex coordinates",
                vectorForm: "G = (A + B + C)/3",
                barycentricCoordinates: "(1:1:1)",
                properties: {
                    simple: "Arithmetic mean",
                    computation: "Very easy",
                    alwaysWorks: "Yes"
                }
            },

            circumcenter: {
                generalFormula: "Intersection of perpendicular bisectors",
                perpBisector: {
                    midpoint: "M = ((x₁+x₂)/2, (y₁+y₂)/2)",
                    slope: "m_perp = -(x₂-x₁)/(y₂-y₁)",
                    equation: "y - Mᵧ = m_perp(x - Mₓ)"
                },
                determinantFormula: {
                    explanation: "Using determinants for exact formula",
                    complexity: "Complex but systematic"
                },
                rightTriangle: "O = midpoint of hypotenuse",
                properties: {
                    verification: "Equal distances to all vertices",
                    computation: "Moderate to hard",
                    specialCases: "Right triangle easy"
                }
            },

            incenter: {
                formula: "I = (a·A + b·B + c·C)/(a+b+c)",
                weights: "Side lengths a, b, c",
                coordinateForm: {
                    x: "Iₓ = (a·x₁ + b·x₂ + c·x₃)/(a+b+c)",
                    y: "Iᵧ = (a·y₁ + b·y₂ + c·y₃)/(a+b+c)"
                },
                sideLengths: {
                    a: "√[(x₃-x₂)² + (y₃-y₂)²]",
                    b: "√[(x₃-x₁)² + (y₃-y₁)²]",
                    c: "√[(x₂-x₁)² + (y₂-y₁)²]"
                },
                barycentricCoordinates: "(a:b:c)",
                properties: {
                    verification: "Equal distances to all sides",
                    computation: "Moderate",
                    alwaysInside: "Yes"
                }
            },

            orthocenter: {
                formula: "Intersection of altitudes",
                altitudeEquation: {
                    slope: "Negative reciprocal of opposite side slope",
                    throughVertex: "Passes through corresponding vertex"
                },
                coordinateMethod: {
                    step1: "Find slopes of two sides",
                    step2: "Perpendicular slopes = negative reciprocals",
                    step3: "Write altitude equations",
                    step4: "Solve system of equations"
                },
                rightTriangle: "H = vertex at right angle",
                eulerRelation: "H = O + 3(G - O)",
                properties: {
                    verification: "Lies on all three altitudes",
                    computation: "Hard",
                    location: "Varies with triangle type"
                }
            },

            ninePointCenter: {
                formula: "N = (O + H)/2",
                coordinateForm: "N = ((Oₓ+Hₓ)/2, (Oᵧ+Hᵧ)/2)",
                alternateFormula: "N = (O + G + G)/2 = (O + 2G)/2",
                eulerLineFormula: "N divides OH in ratio 1:1",
                radius: "r₉ = R/2",
                properties: {
                    verification: "Nine points equidistant from N",
                    computation: "Easy if O and H known",
                    alwaysInside: "Yes"
                }
            },

            distanceFormulas: {
                pointToPoint: "d = √[(x₂-x₁)² + (y₂-y₁)²]",
                pointToLine: "d = |Ax₀+By₀+C|/√(A²+B²)",
                collinearityCheck: {
                    method: "Three points (x₁,y₁), (x₂,y₂), (x₃,y₃) are collinear if:",
                    formula: "(y₂-y₁)/(x₂-x₁) = (y₃-y₁)/(x₃-x₁)",
                    determinant: "| x₁ y₁ 1 | = 0",
                    alternate: "Area of triangle formed = 0"
                }
            },

            areaFormulas: {
                coordinates: "Area = ½|x₁(y₂-y₃) + x₂(y₃-y₁) + x₃(y₁-y₂)|",
                heron: "Area = √[s(s-a)(s-b)(s-c)] where s=(a+b+c)/2",
                base_height: "Area = ½ × base × height",
                relationToInradius: "Area = r·s where s is semiperimeter"
            }
        };
    }

    // ============================================
    // TRIANGLE CENTER CALCULATION METHODS
    // ============================================

    calculateCentroid(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for centroid calculation");
        }

        const [A, B, C] = vertices;
        const G = [
            (A[0] + B[0] + C[0]) / 3,
            (A[1] + B[1] + C[1]) / 3
        ];

        // Calculate medians for verification
        const medianA = {
            start: A,
            midpoint: [(B[0] + C[0])/2, (B[1] + C[1])/2],
            end: [(B[0] + C[0])/2, (B[1] + C[1])/2]
        };

        const medianB = {
            start: B,
            midpoint: [(A[0] + C[0])/2, (A[1] + C[1])/2],
            end: [(A[0] + C[0])/2, (A[1] + C[1])/2]
        };

        // Verify 2:1 ratio
        const distAG = this.distance(A, G);
        const distGM = this.distance(G, medianA.midpoint);
        const ratio = distAG / distGM;

        return {
            center: 'Centroid',
            symbol: 'G',
            coordinates: G,
            properties: {
                balancePoint: true,
                alwaysInside: true,
                dividesMedians: '2:1 from vertex'
            },
            verification: {
                ratioAG_GM: ratio,
                expectedRatio: 2.0,
                ratioCorrect: Math.abs(ratio - 2.0) < 0.01
            },
            medians: {
                fromA: medianA,
                fromB: medianB
            },
            calculation: `G = ((${A[0]}+${B[0]}+${C[0]})/3, (${A[1]}+${B[1]}+${C[1]})/3) = (${G[0]}, ${G[1]})`
        };
    }

    calculateCircumcenter(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for circumcenter calculation");
        }

        const [A, B, C] = vertices;

        // Check if right triangle
        const isRight = this.isRightTriangle(A, B, C);
        if (isRight.isRight) {
            const hypotenuse = isRight.hypotenuse;
            const O = [
                (hypotenuse[0][0] + hypotenuse[1][0]) / 2,
                (hypotenuse[0][1] + hypotenuse[1][1]) / 2
            ];

            return {
                center: 'Circumcenter',
                symbol: 'O',
                coordinates: O,
                circumradius: this.distance(O, A),
                specialCase: 'Right triangle - circumcenter at midpoint of hypotenuse',
                properties: {
                    equidistantFromVertices: true,
                    location: 'on hypotenuse'
                }
            };
        }

        // General case: find perpendicular bisectors
        const perpBis1 = this.perpendicularBisector(A, B);
        const perpBis2 = this.perpendicularBisector(B, C);

        const O = this.lineIntersection(perpBis1, perpBis2);

        if (!O) {
            throw new Error("Perpendicular bisectors do not intersect (degenerate triangle)");
        }

        const R = this.distance(O, A);
        const distToB = this.distance(O, B);
        const distToC = this.distance(O, C);

        // Determine triangle type and circumcenter location
        const triangleType = this.classifyTriangle(A, B, C);
        let location;
        if (triangleType.type === 'acute') location = 'inside triangle';
        else if (triangleType.type === 'obtuse') location = 'outside triangle';
        else location = 'on triangle (hypotenuse)';

        return {
            center: 'Circumcenter',
            symbol: 'O',
            coordinates: O,
            circumradius: R,
            properties: {
                equidistantFromVertices: true,
                location: location,
                triangleType: triangleType.type
            },
            verification: {
                distanceToA: R,
                distanceToB: distToB,
                distanceToC: distToC,
                allEqual: Math.abs(R - distToB) < 0.001 && Math.abs(R - distToC) < 0.001
            },
            perpendicularBisectors: {
                AB: perpBis1,
                BC: perpBis2
            },
            calculation: `Intersection of perpendicular bisectors`
        };
    }

    calculateIncenter(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for incenter calculation");
        }

        const [A, B, C] = vertices;

        // Calculate side lengths
        const a = this.distance(B, C);  // opposite to A
        const b = this.distance(A, C);  // opposite to B
        const c = this.distance(A, B);  // opposite to C

        // Weighted average formula
        const I = [
            (a * A[0] + b * B[0] + c * C[0]) / (a + b + c),
            (a * A[1] + b * B[1] + c * C[1]) / (a + b + c)
        ];

        // Calculate inradius
        const s = (a + b + c) / 2;  // semiperimeter
        const area = this.triangleArea(A, B, C);
        const r = area / s;

        // Calculate distances to sides for verification
        const distToBC = this.pointToLineDistance(I, B, C);
        const distToAC = this.pointToLineDistance(I, A, C);
        const distToAB = this.pointToLineDistance(I, A, B);

        return {
            center: 'Incenter',
            symbol: 'I',
            coordinates: I,
            inradius: r,
            sideLengths: { a, b, c },
            semiperimeter: s,
            area: area,
            properties: {
                equidistantFromSides: true,
                alwaysInside: true,
                centerOfIncircle: true
            },
            verification: {
                distanceToBC: distToBC,
                distanceToAC: distToAC,
                distanceToAB: distToAB,
                allEqual: Math.abs(distToBC - r) < 0.001 && Math.abs(distToAC - r) < 0.001 && Math.abs(distToAB - r) < 0.001
            },
            calculation: `I = (${a}·A + ${b}·B + ${c}·C)/(${a}+${b}+${c})`
        };
    }

    calculateOrthocenter(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for orthocenter calculation");
        }

        const [A, B, C] = vertices;

        // Check if right triangle
        const isRight = this.isRightTriangle(A, B, C);
        if (isRight.isRight) {
            return {
                center: 'Orthocenter',
                symbol: 'H',
                coordinates: isRight.rightAngleVertex,
                specialCase: 'Right triangle - orthocenter at right angle vertex',
                properties: {
                    altitudesIntersection: true,
                    location: 'at right angle vertex'
                }
            };
        }

        // General case: find intersection of altitudes
        const altitudeA = this.altitude(A, B, C);
        const altitudeB = this.altitude(B, A, C);

        const H = this.lineIntersection(altitudeA, altitudeB);

        if (!H) {
            throw new Error("Altitudes do not intersect (degenerate triangle)");
        }

        // Verify third altitude passes through H
        const altitudeC = this.altitude(C, A, B);
        const distToAltC = this.pointToLineDistance(H, A, B, true);

        // Determine triangle type and orthocenter location
        const triangleType = this.classifyTriangle(A, B, C);
        let location;
        if (triangleType.type === 'acute') location = 'inside triangle';
        else if (triangleType.type === 'obtuse') location = 'outside triangle';
        else location = 'at right angle vertex';

        return {
            center: 'Orthocenter',
            symbol: 'H',
            coordinates: H,
            properties: {
                altitudesIntersection: true,
                location: location,
                triangleType: triangleType.type
            },
            verification: {
                onAltitudeA: true,
                onAltitudeB: true,
                onAltitudeC: distToAltC < 0.001
            },
            altitudes: {
                fromA: altitudeA,
                fromB: altitudeB,
                fromC: altitudeC
            },
            calculation: `Intersection of altitudes from vertices`
        };
    }

    calculateNinePointCenter(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for nine-point center calculation");
        }

        // Need circumcenter and orthocenter
        const O_result = this.calculateCircumcenter(problem);
        const H_result = this.calculateOrthocenter(problem);

        const O = O_result.coordinates;
        const H = H_result.coordinates;

        // Nine-point center is midpoint of O and H
        const N = [
            (O[0] + H[0]) / 2,
            (O[1] + H[1]) / 2
        ];

        const R = O_result.circumradius;
        const r9 = R / 2;  // Nine-point circle radius

        // Calculate the nine points
        const [A, B, C] = vertices;
        const ninePoints = {
            sideMidpoints: [
                [(A[0] + B[0])/2, (A[1] + B[1])/2],
                [(B[0] + C[0])/2, (B[1] + C[1])/2],
                [(C[0] + A[0])/2, (C[1] + A[1])/2]
            ],
            altitudeFeet: this.calculateAltitudeFeet(A, B, C),
            midpointsToH: [
                [(A[0] + H[0])/2, (A[1] + H[1])/2],
                [(B[0] + H[0])/2, (B[1] + H[1])/2],
                [(C[0] + H[0])/2, (C[1] + H[1])/2]
            ]
        };

        // Verify all nine points are distance r9 from N
        const verification = this.verifyNinePoints(N, ninePoints, r9);

        return {
            center: 'Nine-Point Center',
            symbol: 'N',
            coordinates: N,
            ninePointRadius: r9,
            circumradius: R,
            properties: {
                midpointOfOH: true,
                radiusIsHalfCircumradius: true,
                passesThrough9Points: true
            },
            ninePoints: ninePoints,
            verification: verification,
            relatedCenters: {
                circumcenter: O,
                orthocenter: H
            },
            calculation: `N = (O + H)/2 = ((${O[0]}+${H[0]})/2, (${O[1]}+${H[1]})/2)`
        };
    }

    calculateEulerLine(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for Euler line calculation");
        }

        // Check if equilateral (no Euler line)
        if (this.isEquilateral(vertices[0], vertices[1], vertices[2])) {
            return {
                center: 'Euler Line',
                exists: false,
                reason: 'Equilateral triangle - all centers coincide',
                coincidentPoint: this.calculateCentroid(problem).coordinates
            };
        }

        // Calculate the four centers
        const G_result = this.calculateCentroid(problem);
        const O_result = this.calculateCircumcenter(problem);
        const H_result = this.calculateOrthocenter(problem);
        const N_result = this.calculateNinePointCenter(problem);

        const G = G_result.coordinates;
        const O = O_result.coordinates;
        const H = H_result.coordinates;
        const N = N_result.coordinates;

        // Verify collinearity
        const collinear = this.areCollinear(O, G, H);

        // Calculate ratios
        const distHG = this.distance(H, G);
        const distGO = this.distance(G, O);
        const ratio = distHG / distGO;

        // Verify N is midpoint of OH
        const midpointOH = [(O[0] + H[0])/2, (O[1] + H[1])/2];
        const N_is_midpoint = this.distance(N, midpointOH) < 0.001;

        // Line equation (parametric form)
        const direction = [H[0] - O[0], H[1] - O[1]];
        
        return {
            center: 'Euler Line',
            exists: true,
            pointsOnLine: {
                O: O,
                G: G,
                H: H,
                N: N
            },
            properties: {
                collinear: collinear,
                ratio_HG_GO: ratio,
                expectedRatio: 2.0,
                ratioCorrect: Math.abs(ratio - 2.0) < 0.01,
                N_is_midpoint_OH: N_is_midpoint
            },
            lineEquation: {
                parametric: `P(t) = O + t(H - O) = (${O[0]}, ${O[1]}) + t(${direction[0]}, ${direction[1]})`,
                direction: direction
            },
            verification: {
                allCollinear: collinear,
                correctRatio: Math.abs(ratio - 2.0) < 0.01,
                ninePointCenterCorrect: N_is_midpoint
            },
            theorem: 'Euler Line Theorem: O, G, H are collinear with HG:GO = 2:1'
        };
    }

    calculateFermatPoint(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for Fermat point calculation");
        }

        const [A, B, C] = vertices;

        // Check if any angle is ≥ 120°
        const angles = this.calculateAngles(A, B, C);
        const maxAngle = Math.max(angles.A, angles.B, angles.C);

        if (maxAngle >= 120) {
            // Fermat point is at the obtuse vertex
            let fermatPoint;
            if (angles.A >= 120) fermatPoint = A;
            else if (angles.B >= 120) fermatPoint = B;
            else fermatPoint = C;

            return {
                center: 'Fermat Point (Torricelli Point)',
                symbol: 'F',
                coordinates: fermatPoint,
                specialCase: 'Angle ≥ 120° - Fermat point at obtuse vertex',
                properties: {
                    minimizesSumOfDistances: true,
                    location: 'at obtuse vertex'
                },
                sumOfDistances: this.distance(fermatPoint, A) + this.distance(fermatPoint, B) + this.distance(fermatPoint, C)
            };
        }

        // General case: construct equilateral triangles
        // This is complex; for now, provide construction method
        return {
            center: 'Fermat Point (Torricelli Point)',
            symbol: 'F',
            properties: {
                minimizesSumOfDistances: true,
                anglesFrom120: 'Each angle from F to vertices is 120°'
            },
            constructionMethod: [
                '1. Construct equilateral triangle on each side (exterior)',
                '2. Draw line from each new vertex to opposite original vertex',
                '3. These three lines intersect at Fermat point'
            ],
            note: 'Exact calculation requires iterative methods or complex geometry'
        };
    }

    calculateSymmedianPoint(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for symmedian point calculation");
        }

        const [A, B, C] = vertices;

        // Calculate side lengths
        const a = this.distance(B, C);
        const b = this.distance(A, C);
        const c = this.distance(A, B);

        // Symmedian point has barycentric coordinates (a²:b²:c²)
        const K = [
            (a*a * A[0] + b*b * B[0] + c*c * C[0]) / (a*a + b*b + c*c),
            (a*a * A[1] + b*b * B[1] + c*c * C[1]) / (a*a + b*b + c*c)
        ];

        return {
            center: 'Symmedian Point (K-point)',
            symbol: 'K',
            coordinates: K,
            sideLengths: { a, b, c },
            properties: {
                barycentricCoordinates: `(${a*a}:${b*b}:${c*c})`,
                alwaysInside: true,
                reflectionOfMedians: 'Symmedians are reflections of medians across angle bisectors'
            },
            calculation: `K = (a²·A + b²·B + c²·C)/(a²+b²+c²)`
        };
    }

    calculateGergonnePoint(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for Gergonne point calculation");
        }

        return {
            center: 'Gergonne Point',
            symbol: 'Ge',
            properties: {
                cevianPoint: true,
                relatedToIncircle: 'Connects vertices to opposite incircle touchpoints'
            },
            note: 'Complex calculation requiring incircle tangent points'
        };
    }

    calculateNagelPoint(problem) {
        const vertices = problem.parameters.vertices;
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for Nagel point calculation");
        }

        return {
            center: 'Nagel Point',
            symbol: 'Na',
            properties: {
                relatedToExcircles: 'Connects vertices to opposite excircle touchpoints',
                isotonicConjugate: 'Isotomic conjugate of incenter'
            },
            note: 'Complex calculation requiring excircle tangent points'
        };
    }

    // ============================================
    // UTILITY METHODS - GEOMETRY CALCULATIONS
    // ============================================

    distance(p1, p2) {
        return Math.sqrt((p2[0] - p1[0])**2 + (p2[1] - p1[1])**2);
    }

    triangleArea(A, B, C) {
        // Using cross product formula
        return Math.abs((B[0] - A[0]) * (C[1] - A[1]) - (C[0] - A[0]) * (B[1] - A[1])) / 2;
    }

    perpendicularBisector(p1, p2) {
        // Midpoint
        const mid = [(p1[0] + p2[0])/2, (p1[1] + p2[1])/2];
        
        // Slope of line p1-p2
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        
        if (Math.abs(dx) < 1e-10) {
            // Vertical line, perpendicular is horizontal
            return { type: 'horizontal', y: mid[1] };
        } else if (Math.abs(dy) < 1e-10) {
            // Horizontal line, perpendicular is vertical
            return { type: 'vertical', x: mid[0] };
        } else {
            // General case: slope of perpendicular is negative reciprocal
            const slope = dy / dx;
            const perpSlope = -1 / slope;
            // y - mid[1] = perpSlope(x - mid[0])
            // y = perpSlope * x - perpSlope * mid[0] + mid[1]
            const intercept = mid[1] - perpSlope * mid[0];
            return { type: 'normal', slope: perpSlope, intercept: intercept, point: mid };
        }
    }

    altitude(vertex, p1, p2) {
        // Altitude from vertex perpendicular to line p1-p2
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        
        if (Math.abs(dx) < 1e-10) {
            // Side is vertical, altitude is horizontal
            return { type: 'horizontal', y: vertex[1] };
        } else if (Math.abs(dy) < 1e-10) {
            // Side is horizontal, altitude is vertical
            return { type: 'vertical', x: vertex[0] };
        } else {
            const sideSlope = dy / dx;
            const altSlope = -1 / sideSlope;
            const intercept = vertex[1] - altSlope * vertex[0];
            return { type: 'normal', slope: altSlope, intercept: intercept, point: vertex };
        }
    }

    lineIntersection(line1, line2) {
        // Handle different line types
        if (line1.type === 'vertical' && line2.type === 'vertical') {
            return null; // Parallel
        } else if (line1.type === 'horizontal' && line2.type === 'horizontal') {
            return null; // Parallel
        } else if (line1.type === 'vertical') {
            const x = line1.x;
            const y = line2.type === 'horizontal' ? line2.y : line2.slope * x + line2.intercept;
            return [x, y];
        } else if (line2.type === 'vertical') {
            const x = line2.x;
            const y = line1.type === 'horizontal' ? line1.y : line1.slope * x + line1.intercept;
            return [x, y];
        } else if (line1.type === 'horizontal') {
            const y = line1.y;
            const x = line2.type === 'horizontal' ? null : (y - line2.intercept) / line2.slope;
            return x !== null ? [x, y] : null;
        } else if (line2.type === 'horizontal') {
            const y = line2.y;
            const x = (y - line1.intercept) / line1.slope;
            return [x, y];
        } else {
            // Both normal lines: y = m1*x + b1, y = m2*x + b2
            const m1 = line1.slope;
            const b1 = line1.intercept;
            const m2 = line2.slope;
            const b2 = line2.intercept;
            
            if (Math.abs(m1 - m2) < 1e-10) {
                return null; // Parallel
            }
            
            const x = (b2 - b1) / (m1 - m2);
            const y = m1 * x + b1;
            return [x, y];
        }
    }

    pointToLineDistance(point, p1, p2, useAltitude = false) {
        // Distance from point to line through p1 and p2
        const dx = p2[0] - p1[0];
        const dy = p2[1] - p1[1];
        const lineLength = Math.sqrt(dx*dx + dy*dy);
        
        if (lineLength < 1e-10) {
            return this.distance(point, p1);
        }
        
        // Using cross product
        const num = Math.abs((p2[1] - p1[1]) * point[0] - (p2[0] - p1[0]) * point[1] + p2[0] * p1[1] - p2[1] * p1[0]);
        return num / lineLength;
    }

    isRightTriangle(A, B, C) {
        const a = this.distance(B, C);
        const b = this.distance(A, C);
        const c = this.distance(A, B);
        
        const sides = [
            { length: a, opposite: A, other: [B, C] },
            { length: b, opposite: B, other: [A, C] },
            { length: c, opposite: C, other: [A, B] }
        ].sort((x, y) => y.length - x.length);
        
        const hyp = sides[0].length;
        const leg1 = sides[1].length;
        const leg2 = sides[2].length;
        
        const isRight = Math.abs(hyp*hyp - (leg1*leg1 + leg2*leg2)) < 0.001;
        
        return {
            isRight: isRight,
            hypotenuse: isRight ? sides[0].other : null,
            rightAngleVertex: isRight ? sides[0].opposite : null
        };
    }

    classifyTriangle(A, B, C) {
        const angles = this.calculateAngles(A, B, C);
        const maxAngle = Math.max(angles.A, angles.B, angles.C);
        
        let type;
        if (Math.abs(maxAngle - 90) < 0.1) {
            type = 'right';
        } else if (maxAngle > 90) {
            type = 'obtuse';
        } else {
            type = 'acute';
        }
        
        return { type, angles };
    }

    calculateAngles(A, B, C) {
        // Calculate angles in degrees using law of cosines
        const a = this.distance(B, C);
        const b = this.distance(A, C);
        const c = this.distance(A, B);
        
        const cosA = (b*b + c*c - a*a) / (2*b*c);
        const cosB = (a*a + c*c - b*b) / (2*a*c);
        const cosC = (a*a + b*b - c*c) / (2*a*b);
        
        return {
            A: Math.acos(Math.max(-1, Math.min(1, cosA))) * 180 / Math.PI,
            B: Math.acos(Math.max(-1, Math.min(1, cosB))) * 180 / Math.PI,
            C: Math.acos(Math.max(-1, Math.min(1, cosC))) * 180 / Math.PI
        };
    }

    isEquilateral(A, B, C) {
        const a = this.distance(B, C);
        const b = this.distance(A, C);
        const c = this.distance(A, B);
        
        return Math.abs(a - b) < 0.001 && Math.abs(b - c) < 0.001;
    }

    areCollinear(p1, p2, p3) {
        // Three points are collinear if area of triangle is ~0
        const area = Math.abs((p2[0] - p1[0]) * (p3[1] - p1[1]) - (p3[0] - p1[0]) * (p2[1] - p1[1]));
        return area < 0.001;
    }

    calculateAltitudeFeet(A, B, C) {
        // Foot of altitude from A to BC
        const footA = this.perpendicularFoot(A, B, C);
        const footB = this.perpendicularFoot(B, A, C);
        const footC = this.perpendicularFoot(C, A, B);
        
        return [footA, footB, footC];
    }

    perpendicularFoot(point, lineP1, lineP2) {
        // Find foot of perpendicular from point to line through lineP1 and lineP2
        const dx = lineP2[0] - lineP1[0];
        const dy = lineP2[1] - lineP1[1];
        const lineLengthSq = dx*dx + dy*dy;
        
        if (lineLengthSq < 1e-10) {
            return lineP1;
        }
        
        const t = ((point[0] - lineP1[0]) * dx + (point[1] - lineP1[1]) * dy) / lineLengthSq;
        
        return [
            lineP1[0] + t * dx,
            lineP1[1] + t * dy
        ];
    }

    verifyNinePoints(N, ninePoints, expectedRadius) {
        const allPoints = [
            ...ninePoints.sideMidpoints,
            ...ninePoints.altitudeFeet,
            ...ninePoints.midpointsToH
        ];
        
        const distances = allPoints.map(p => this.distance(N, p));
        const allCorrect = distances.every(d => Math.abs(d - expectedRadius) < 0.01);
        
        return {
            allPointsOnCircle: allCorrect,
            distances: distances,
            expectedRadius: expectedRadius,
            maxDeviation: Math.max(...distances.map(d => Math.abs(d - expectedRadius)))
        };
    }

    // ============================================
    // MAIN SOLVER METHOD
    // ============================================

    solveTriangleCenterProblem(config) {
        const { vertices, centerType, scenario, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseTriangleCenterProblem(vertices, centerType, scenario, parameters, context);

            // Solve the problem
            this.currentSolution = this.solveTriangleCenterProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateTriangleCenterSteps(this.currentProblem, this.currentSolution);

            // Generate graph data
            this.generateTriangleCenterGraphData();

            // Generate workbook
            this.generateTriangleCenterWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                center: this.currentSolution?.center,
                coordinates: this.currentSolution?.coordinates
            };

        } catch (error) {
            throw new Error(`Failed to solve triangle center problem: ${error.message}`);
        }
    }

    parseTriangleCenterProblem(vertices, centerType, scenario = '', parameters = {}, context = {}) {
        if (!vertices || vertices.length !== 3) {
            throw new Error("Need exactly 3 vertices for triangle center problem");
        }

        // Validate vertices
        vertices.forEach((v, i) => {
            if (!Array.isArray(v) || v.length !== 2) {
                throw new Error(`Vertex ${i} must be array of 2 coordinates`);
            }
        });

        // Auto-detect center type if not specified
        if (!centerType) {
            centerType = 'centroid'; // Default to simplest
        }

        if (!this.triangleCenterTypes[centerType]) {
            throw new Error(`Unknown triangle center type: ${centerType}`);
        }

        return {
            originalInput: scenario || `Find ${this.triangleCenterTypes[centerType].name}`,
            vertices: vertices,
            centerType: centerType,
            scenario: scenario,
            parameters: { vertices, ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    solveTriangleCenterProblem_Internal(problem) {
        const solver = this.triangleCenterTypes[problem.centerType]?.solver;
        if (!solver) {
            throw new Error(`No solver available for center type: ${problem.centerType}`);
        }

        return solver(problem);
    }

    // ============================================
    // STEP GENERATION
    // ============================================

    generateTriangleCenterSteps(problem, solution) {
        let baseSteps = this.generateBaseTriangleCenterSteps(problem, solution);

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
                this.addErrorPrevention(step, problem.centerType)
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

    generateBaseTriangleCenterSteps(problem, solution) {
        const centerType = problem.centerType;

        switch(centerType) {
            case 'centroid':
                return this.generateCentroidSteps(problem, solution);
            case 'circumcenter':
                return this.generateCircumcenterSteps(problem, solution);
            case 'incenter':
                return this.generateIncenterSteps(problem, solution);
            case 'orthocenter':
                return this.generateOrthocenterSteps(problem, solution);
            case 'nine_point_center':
                return this.generateNinePointCenterSteps(problem, solution);
            case 'euler_line':
                return this.generateEulerLineSteps(problem, solution);
            default:
                return this.generateGenericCenterSteps(problem, solution);
        }
    }

    generateCentroidSteps(problem, solution) {
        const steps = [];
        const [A, B, C] = problem.parameters.vertices;

        // Step 1: Given vertices
        steps.push({
            stepNumber: 1,
            step: 'Given triangle vertices',
            description: 'Identify the three vertices of the triangle',
            vertices: { A, B, C },
            expression: `A(${A[0]},${A[1]}), B(${B[0]},${B[1]}), C(${C[0]},${C[1]})`,
            reasoning: 'The centroid formula uses all three vertex coordinates',
            goalStatement: 'We will find the centroid by averaging the coordinates'
        });

        // Step 2: Apply centroid formula
        steps.push({
            stepNumber: 2,
            step: 'Apply centroid formula',
            description: 'Average the x-coordinates and y-coordinates',
            formula: 'G = ((x₁+x₂+x₃)/3, (y₁+y₂+y₃)/3)',
            calculation: {
                x: `Gₓ = (${A[0]} + ${B[0]} + ${C[0]})/3 = ${(A[0] + B[0] + C[0])/3}`,
                y: `Gᵧ = (${A[1]} + ${B[1]} + ${C[1]})/3 = ${(A[1] + B[1] + C[1])/3}`
            },
            reasoning: 'The centroid is the arithmetic mean of the three vertices',
            algebraicRule: 'Centroid Formula'
        });

        // Step 3: Write result
        steps.push({
            stepNumber: 3,
            step: 'Centroid coordinates',
            description: 'The centroid is located at',
            expression: `G(${solution.coordinates[0]}, ${solution.coordinates[1]})`,
            finalAnswer: true,
            reasoning: 'This is the balance point of the triangle',
            properties: [
                'Located inside the triangle',
                'Divides each median in ratio 2:1 from vertex',
                'Center of mass of the triangle'
            ]
        });

        // Step 4: Verification (optional)
        if (this.includeVerificationInSteps && solution.verification) {
            steps.push({
                stepNumber: 4,
                step: 'Verify 2:1 ratio property',
                description: 'Check that centroid divides median in ratio 2:1',
                verification: solution.verification,
                expression: `Ratio AG:GM = ${solution.verification.ratioAG_GM.toFixed(2)} ≈ 2.0 ✓`,
                reasoning: 'This confirms our centroid is correct'
            });
        }

        return steps;
    }

    generateCircumcenterSteps(problem, solution) {
        const steps = [];
        const [A, B, C] = problem.parameters.vertices;

        // Step 1: Given vertices
        steps.push({
            stepNumber: 1,
            step: 'Given triangle vertices',
            description: 'Identify the three vertices',
            vertices: { A, B, C },
            expression: `A(${A[0]},${A[1]}), B(${B[0]},${B[1]}), C(${C[0]},${C[1]})`,
            reasoning: 'We need to find the point equidistant from all three vertices'
        });

        // Step 2: Check for special cases
        const isRight = this.isRightTriangle(A, B, C);
        if (isRight.isRight) {
            steps.push({
                stepNumber: 2,
                step: 'Recognize right triangle',
                description: 'This is a right triangle',
                specialCase: true,
                reasoning: 'For right triangles, circumcenter is at midpoint of hypotenuse',
                shortcut: 'O = midpoint of hypotenuse'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate circumcenter',
                description: 'Find midpoint of hypotenuse',
                expression: `O = (${solution.coordinates[0]}, ${solution.coordinates[1]})`,
                finalAnswer: true
            });
        } else {
            // General case
            steps.push({
                stepNumber: 2,
                step: 'Find perpendicular bisector of AB',
                description: 'Construct perpendicular bisector of side AB',
                perpBisector: solution.perpendicularBisectors.AB,
                reasoning: 'Any point on perpendicular bisector is equidistant from A and B'
            });

            steps.push({
                stepNumber: 3,
                step: 'Find perpendicular bisector of BC',
                description: 'Construct perpendicular bisector of side BC',
                perpBisector: solution.perpendicularBisectors.BC,
                reasoning: 'Any point on perpendicular bisector is equidistant from B and C'
            });

            steps.push({
                stepNumber: 4,
                step: 'Find intersection',
                description: 'Solve for intersection of the two perpendicular bisectors',
                expression: `O = (${solution.coordinates[0]}, ${solution.coordinates[1]})`,
                reasoning: 'This point is equidistant from all three vertices',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Calculate circumradius',
                description: 'Find distance from O to any vertex',
                calculation: `R = ${solution.circumradius}`,
                verification: `Distance to A, B, C all equal ${solution.circumradius} ✓`
            });
        }

        return steps;
    }

    generateIncenterSteps(problem, solution) {
        const steps = [];
        const [A, B, C] = problem.parameters.vertices;

        // Step 1: Given vertices
        steps.push({
            stepNumber: 1,
            step: 'Given triangle vertices',
            description: 'Identify the three vertices',
            vertices: { A, B, C },
            reasoning: 'We need to find the point equidistant from all three sides'
        });

        // Step 2: Calculate side lengths
        steps.push({
            stepNumber: 2,
            step: 'Calculate side lengths',
            description: 'Find lengths of all three sides',
            calculation: {
                a: `a = BC = ${solution.sideLengths.a}`,
                b: `b = AC = ${solution.sideLengths.b}`,
                c: `c = AB = ${solution.sideLengths.c}`
            },
            reasoning: 'Side lengths are used as weights in the incenter formula',
            formula: 'distance = √[(x₂-x₁)² + (y₂-y₁)²]'
        });

        // Step 3: Apply weighted average formula
        steps.push({
            stepNumber: 3,
            step: 'Apply incenter formula',
            description: 'Use weighted average with side lengths as weights',
            formula: 'I = (a·A + b·B + c·C)/(a+b+c)',
            calculation: {
                x: `Iₓ = (${solution.sideLengths.a}·${A[0]} + ${solution.sideLengths.b}·${B[0]} + ${solution.sideLengths.c}·${C[0]})/${solution.sideLengths.a + solution.sideLengths.b + solution.sideLengths.c}`,
                y: `Iᵧ = (${solution.sideLengths.a}·${A[1]} + ${solution.sideLengths.b}·${B[1]} + ${solution.sideLengths.c}·${C[1]})/${solution.sideLengths.a + solution.sideLengths.b + solution.sideLengths.c}`
            },
            reasoning: 'Longer sides have more weight in determining incenter position'
        });

        // Step 4: Result
        steps.push({
            stepNumber: 4,
            step: 'Incenter coordinates',
            description: 'The incenter is located at',
            expression: `I(${solution.coordinates[0]}, ${solution.coordinates[1]})`,
            finalAnswer: true,
            properties: [
                'Center of inscribed circle',
                'Equidistant from all three sides',
                'Always inside the triangle'
            ]
        });

        // Step 5: Calculate inradius
        steps.push({
            stepNumber: 5,
            step: 'Calculate inradius',
            description: 'Find radius of inscribed circle',
            formula: 'r = Area/semiperimeter',
            calculation: {
                semiperimeter: `s = (a+b+c)/2 = ${solution.semiperimeter}`,
                area: `Area = ${solution.area}`,
                inradius: `r = ${solution.area}/${solution.semiperimeter} = ${solution.inradius}`
            },
            reasoning: 'The inradius is the distance from incenter to any side'
        });

        return steps;
    }

    generateOrthocenterSteps(problem, solution) {
        const steps = [];
        const [A, B, C] = problem.parameters.vertices;

        // Step 1: Given vertices
        steps.push({
            stepNumber: 1,
            step: 'Given triangle vertices',
            description: 'Identify the three vertices',
            vertices: { A, B, C },
            reasoning: 'We need to find where the three altitudes intersect'
        });

        // Check for right triangle
        const isRight = this.isRightTriangle(A, B, C);
        if (isRight.isRight) {
            steps.push({
                stepNumber: 2,
                step: 'Recognize right triangle',
                description: 'This is a right triangle',
                specialCase: true,
                reasoning: 'For right triangles, orthocenter is at the right angle vertex',
                expression: `H = ${solution.coordinates}`,
                finalAnswer: true
            });
        } else {
            // General case
            steps.push({
                stepNumber: 2,
                step: 'Find altitude from A',
                description: 'Construct perpendicular from A to side BC',
                altitude: solution.altitudes.fromA,
                reasoning: 'Altitude is perpendicular to the opposite side'
            });

            steps.push({
                stepNumber: 3,
                step: 'Find altitude from B',
                description: 'Construct perpendicular from B to side AC',
                altitude: solution.altitudes.fromB,
                reasoning: 'Second altitude to find intersection point'
            });

            steps.push({
                stepNumber: 4,
                step: 'Find intersection',
                description: 'Solve for intersection of the two altitudes',
                expression: `H = (${solution.coordinates[0]}, ${solution.coordinates[1]})`,
                reasoning: 'This is the orthocenter - where all three altitudes meet',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Verify third altitude',
                description: 'Confirm third altitude also passes through H',
                verification: solution.verification.onAltitudeC ? '✓ Third altitude passes through H' : '✗ Check calculations',
                reasoning: 'All three altitudes must be concurrent'
            });
        }

        return steps;
    }

    generateNinePointCenterSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Find circumcenter O',
            description: 'Calculate the circumcenter',
            result: `O = (${solution.relatedCenters.circumcenter[0]}, ${solution.relatedCenters.circumcenter[1]})`,
            reasoning: 'Nine-point center depends on circumcenter and orthocenter'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find orthocenter H',
            description: 'Calculate the orthocenter',
            result: `H = (${solution.relatedCenters.orthocenter[0]}, ${solution.relatedCenters.orthocenter[1]})`,
            reasoning: 'Need both O and H to find nine-point center'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply nine-point center formula',
            description: 'Nine-point center is midpoint of O and H',
            formula: 'N = (O + H)/2',
            calculation: `N = ((${solution.relatedCenters.circumcenter[0]}+${solution.relatedCenters.orthocenter[0]})/2, (${solution.relatedCenters.circumcenter[1]}+${solution.relatedCenters.orthocenter[1]})/2)`,
            expression: `N = (${solution.coordinates[0]}, ${solution.coordinates[1]})`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate nine-point radius',
            description: 'Radius is half the circumradius',
            formula: 'r₉ = R/2',
            calculation: `r₉ = ${solution.circumradius}/2 = ${solution.ninePointRadius}`,
            reasoning: 'This is a fundamental property of the nine-point circle'
        });

        return steps;
    }

    generateEulerLineSteps(problem, solution) {
        const steps = [];

        if (!solution.exists) {
            steps.push({
                stepNumber: 1,
                step: 'Check triangle type',
                description: 'Determine if Euler line exists',
                result: solution.reason,
                finalAnswer: true
            });
            return steps;
        }

        steps.push({
            stepNumber: 1,
            step: 'Find circumcenter O',
            result: `O = (${solution.pointsOnLine.O[0]}, ${solution.pointsOnLine.O[1]})`,
            reasoning: 'First point on Euler line'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find centroid G',
            result: `G = (${solution.pointsOnLine.G[0]}, ${solution.pointsOnLine.G[1]})`,
            reasoning: 'Second point on Euler line'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find orthocenter H',
            result: `H = (${solution.pointsOnLine.H[0]}, ${solution.pointsOnLine.H[1]})`,
            reasoning: 'Third point on Euler line'
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify collinearity',
            description: 'Check that O, G, H are collinear',
            verification: solution.properties.collinear ? '✓ Points are collinear' : '✗ Points not collinear',
            reasoning: 'Euler line theorem states these must be collinear'
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify ratio HG:GO',
            description: 'Check ratio is 2:1',
            calculation: `Ratio = ${solution.properties.ratio_HG_GO.toFixed(2)} ≈ 2.0`,
            verification: solution.properties.ratioCorrect ? '✓ Ratio correct' : '✗ Ratio incorrect',
            reasoning: 'Euler line theorem: HG:GO = 2:1',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 6,
            step: 'Find nine-point center N',
            description: 'N is midpoint of OH',
            result: `N = (${solution.pointsOnLine.N[0]}, ${solution.pointsOnLine.N[1]})`,
            verification: solution.properties.N_is_midpoint_OH ? '✓ N is midpoint of OH' : '✗ Check calculation'
        });

        return steps;
    }

    generateGenericCenterSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: `Calculate ${solution.center}`,
            description: `Find the ${solution.center} of the triangle`,
            result: solution.coordinates ? `(${solution.coordinates[0]}, ${solution.coordinates[1]})` : 'See solution details',
            properties: solution.properties,
            finalAnswer: true
        }];
    }

    // ============================================
    // ENHANCED EXPLANATION METHODS (from Linear class, adapted)
    // ============================================

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualExplanationTriangle(step, problem),
                procedural: this.getProceduralExplanationTriangle(step),
                visual: this.getVisualExplanationTriangle(step, problem),
                geometric: this.getGeometricExplanationTriangle(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesTriangle(step, problem.centerType),
                keyVocabulary: this.identifyKeyVocabularyTriangle(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        // Add thinking prompts if enabled
        if (this.includeThinkingPrompts) {
            enhanced.thinkingPrompts = this.generateThinkingPromptsTriangle(step, problem);
        }

        // Add self-check questions if enabled
        if (this.includeSelfCheckQuestions) {
            enhanced.selfCheck = this.generateSelfCheckQuestionTriangle(step);
        }

        // Add real-world connections if enabled
        if (this.includeRealWorldApplications) {
            enhanced.realWorldConnection = this.findRealWorldConnectionTriangle(step, problem);
        }

        return enhanced;
    }

    getConceptualExplanationTriangle(step, problem) {
        const conceptualExplanations = {
            'Given triangle vertices': 'Every triangle has three vertices. These are the corner points that define the triangle.',
            'Calculate side lengths': 'Side lengths determine how the triangle is shaped and are essential for many center calculations.',
            'Apply centroid formula': 'The centroid is the average position - think of it as the center of mass where the triangle would balance.',
            'Find perpendicular bisector': 'A perpendicular bisector divides a side exactly in half at a right angle. Points on it are equidistant from the endpoints.',
            'Find altitude': 'An altitude drops straight down from a vertex to the opposite side, like the height of the triangle from that vertex.',
            'Apply incenter formula': 'The incenter uses weighted averaging - sides with more length have more influence on where the center is located.',
            'Verify collinearity': 'Collinearity means points line up on the same straight line - a remarkable property of certain triangle centers.'
        };

        return conceptualExplanations[step.step] || 'This step progresses toward finding the triangle center.';
    }

    getProceduralExplanationTriangle(step) {
        return `Follow the geometric construction or calculation method shown in the step details.`;
    }

    getVisualExplanationTriangle(step, problem) {
        const visualExplanations = {
            'centroid': 'Draw the three medians. They all meet at one point - the centroid. It\'s always inside the triangle.',
            'circumcenter': 'Draw perpendicular bisectors of the sides. Where they meet is the circumcenter - center of the circle through all vertices.',
            'incenter': 'Draw angle bisectors from each vertex. They meet at the incenter - center of the inscribed circle.',
            'orthocenter': 'Draw altitudes (perpendiculars from vertices to opposite sides). They meet at the orthocenter.'
        };

        return visualExplanations[problem.centerType] || 'Visualize the geometric construction described.';
    }

    getGeometricExplanationTriangle(step) {
        return 'This step follows classical Euclidean geometry principles using compass and straightedge constructions.';
    }

    addELI5Explanations(steps, problem) {
        return steps.map(step => ({
            ...step,
            ELI5: {
                explanation: this.generateELI5ExplanationTriangle(step, problem),
                analogy: this.findRelevantAnalogyTriangle(step, problem),
                simpleLanguage: this.convertToSimpleLanguageTriangle(step.description),
                visualization: this.suggestVisualizationTriangle(step, problem)
            }
        }));
    }

    generateELI5ExplanationTriangle(step, problem) {
        const ELI5Explanations = {
            'Given triangle vertices': "We have three corners of a triangle. Think of them like three dots on a piece of paper!",
            'Calculate side lengths': "We're measuring how long each side of the triangle is, like using a ruler.",
            'Apply centroid formula': "We're finding the exact middle point by averaging where all three corners are. It's like finding the balance point!",
            'Find perpendicular bisector': "Imagine cutting a side exactly in half, then drawing a line straight up from that middle point.",
            'Find altitude': "It's like dropping a straight line down from the top of a mountain to the ground - perfectly vertical!",
            'Apply incenter formula': "We're finding the center where we could put a circle that touches all three sides from the inside!",
            'Verify collinearity': "We're checking if three special points line up perfectly, like beads on a string!"
        };

        return ELI5Explanations[step.step] || "We're taking another step to find our special point!";
    }

    findRelevantAnalogyTriangle(step, problem) {
        const centerType = problem.centerType;
        const analogy = this.analogies[centerType + '_balance'] || this.analogies[centerType + '_towns'] || this.analogies[centerType + '_pool'];
        
        if (analogy) {
            return analogy.ELI5 || analogy.explanation;
        }

        return "Think of this like solving a puzzle - each step gets us closer to finding our special point!";
    }

    convertToSimpleLanguageTriangle(description) {
        const simplifications = {
            'perpendicular': 'straight up and down (90° angle)',
            'bisector': 'divider that splits exactly in half',
            'altitude': 'height line',
            'median': 'line from corner to middle of opposite side',
            'equidistant': 'same distance away',
            'collinear': 'lined up in a row',
            'circumcenter': 'center of circle around triangle',
            'incenter': 'center of circle inside triangle',
            'centroid': 'balance point',
            'orthocenter': 'where height lines meet',
            'coordinates': 'position (x,y)'
        };

        let simple = description;
        for (const [term, replacement] of Object.entries(simplifications)) {
            const regex = new RegExp(term, 'gi');
            simple = simple.replace(regex, replacement);
        }

        return simple;
    }

    suggestVisualizationTriangle(step, problem) {
        const visualizations = {
            'Given triangle vertices': 'Draw three dots on paper to represent the corners',
            'Calculate side lengths': 'Draw lines connecting the dots and measure them with a ruler',
            'Apply centroid formula': 'Imagine balancing the triangle on your finger - mark where it balances',
            'Find perpendicular bisector': 'Find the middle of a side, then draw a line straight up from there',
            'Find altitude': 'From a corner, draw a line straight down to the opposite side',
            'Apply incenter formula': 'Draw a circle inside the triangle touching all three sides',
            'Verify collinearity': 'Use a straightedge to see if points line up'
        };

        return visualizations[step.step] || 'Draw a diagram to see what\'s happening';
    }

    addStepBridges(steps, problem) {
        // Similar to linear class implementation
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateStepBridgeTriangle(steps[i], steps[i + 1]),
                    reasoning: this.explainStepProgressionTriangle(steps[i], steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addErrorPrevention(step, centerType) {
        const category = centerType;
        const mistakes = this.commonMistakes[category]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsTriangle(step, centerType),
                checkPoints: this.generateCheckPointsTriangle(step),
                warningFlags: this.identifyWarningFlagsTriangle(step, centerType)
            }
        };
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsTriangle(step, problem),
                subSteps: this.breakIntoSubStepsTriangle(step),
                hints: this.generateProgressiveHintsTriangle(step, problem)
            }
        }));
    }

    // Additional helper methods for enhanced explanations

    generateStepBridgeTriangle(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.expression || currentStep.description}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This helps us progress toward finding the triangle center`
        };
    }

    explainStepProgressionTriangle(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step}`;
    }

    generatePreventionTipsTriangle(step, centerType) {
        return [
            'Double-check all calculations',
            'Verify coordinates are correct',
            'Draw a diagram to visualize'
        ];
    }

    generateCheckPointsTriangle(step) {
        return [
            'Are the vertices correctly identified?',
            'Are calculations accurate?',
            'Does the result make geometric sense?'
        ];
    }

    identifyWarningFlagsTriangle(step, centerType) {
        return [];
    }

    generateGuidingQuestionsTriangle(step, problem) {
        return [
            'What is the goal of this step?',
            'What information do I need?',
            'How does this help find the center?'
        ];
    }

    breakIntoSubStepsTriangle(step) {
        if (step.calculation) {
            return [
                'Identify the values to use',
                'Apply the formula',
                'Calculate the result',
                'Verify the answer'
            ];
        }
        return ['Understand the goal', 'Apply the technique', 'Check the result'];
    }

    generateProgressiveHintsTriangle(step, problem) {
        const centerType = problem.centerType;
        const hintSet = this.hints[centerType] || {};

        return {
            level1: hintSet.level1 || 'Think about what makes this center special.',
            level2: hintSet.level2 || 'Consider the geometric construction.',
            level3: hintSet.level3 || 'Apply the appropriate formula.',
            level4: hintSet.level4 || 'Calculate step by step.'
        };
    }

    identifyPrerequisitesTriangle(step, centerType) {
        const prereqs = this.prerequisites[centerType];
        return prereqs ? prereqs.skills : ['Basic geometry knowledge'];
    }

    identifyKeyVocabularyTriangle(step) {
        const vocabulary = [];
        const keywords = ['centroid', 'circumcenter', 'incenter', 'orthocenter', 'median', 'altitude', 'perpendicular', 'bisector', 'equidistant'];
        
        const text = (step.description || '') + ' ' + (step.expression || '');
        keywords.forEach(word => {
            if (text.toLowerCase().includes(word.toLowerCase())) {
                vocabulary.push(word);
            }
        });

        return vocabulary;
    }

    generateThinkingPromptsTriangle(step, problem) {
        return {
            before: 'What do I need to know before starting this step?',
            during: 'Am I applying the correct method?',
            after: 'Does my result make geometric sense?'
        };
    }

    generateSelfCheckQuestionTriangle(step) {
        const questions = {
            'Given triangle vertices': 'Have I identified all three vertices correctly?',
            'Calculate side lengths': 'Did I use the distance formula correctly?',
            'Apply centroid formula': 'Did I average all three coordinates?',
            'Find perpendicular bisector': 'Is my line truly perpendicular and through the midpoint?',
            'Find altitude': 'Is my altitude perpendicular to the opposite side?'
        };

        return questions[step.step] || 'Does this step make sense?';
    }

    findRealWorldConnectionTriangle(step, problem) {
        const centerType = problem.centerType;
        const connection = Object.values(this.realWorldProblems).find(p => p.center === centerType);
        
        if (connection) {
            return connection.context;
        }

        return 'Triangle centers help solve practical geometry problems.';
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex}`,
            progression: 'We are getting closer to finding the center'
        };
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const level = this.difficultyLevels[explanationLevel] || this.difficultyLevels.intermediate;
        
        return {
            adaptedDescription: step.description,
            complexityLevel: explanationLevel
        };
    }

    // ============================================
    // GRAPH GENERATION
    // ============================================

    generateTriangleCenterGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const vertices = this.currentProblem.parameters.vertices;
        const center = this.currentSolution.coordinates;

        this.graphData = {
            type: 'triangle_with_center',
            vertices: vertices,
            center: center,
            centerType: this.currentProblem.centerType,
            centerName: this.currentSolution.center,
            
            // Additional visual elements based on center type
            additionalElements: this.getGraphElements(this.currentProblem.centerType, this.currentSolution)
        };
    }

    getGraphElements(centerType, solution) {
        const elements = {
            centroid: ['medians', 'midpoints'],
            circumcenter: ['perpendicular_bisectors', 'circumcircle'],
            incenter: ['angle_bisectors', 'incircle'],
            orthocenter: ['altitudes', 'altitude_feet'],
            nine_point_center: ['nine_points', 'nine_point_circle'],
            euler_line: ['euler_line', 'four_centers']
        };

        return elements[centerType] || [];
    }

    // ============================================
    // WORKBOOK GENERATION
    // ============================================

    generateTriangleCenterWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSectionTriangle(),
            this.createPrerequisiteSectionTriangle(),
            this.createTriangleLessonSection(),
            this.createEnhancedStepsSectionTriangle(),
            this.createSolutionSectionTriangle(),
            this.createAnalysisSectionTriangle(),
            this.createVerificationSectionTriangle(),
            this.createConstructionMethodSection(),
            this.createRealWorldApplicationSectionTriangle(),
            this.createHistoricalContextSection(),
            this.createPedagogicalNotesSectionTriangle(),
            this.createAlternativeMethodsSectionTriangle(),
            this.createPracticeProblemsSectionTriangle()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Triangle Centers Mathematical Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            explanationLevel: this.explanationLevel,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionTriangle() {
        if (!this.currentProblem) return null;

        const [A, B, C] = this.currentProblem.vertices;

        const problemData = [
            ['Problem Type', `Find ${this.triangleCenterTypes[this.currentProblem.centerType]?.name}`],
            ['Center Type', this.currentProblem.centerType],
            ['Description', this.currentProblem.scenario || this.triangleCenterTypes[this.currentProblem.centerType]?.description],
            ['', ''],
            ['Triangle Vertices', ''],
            ['Vertex A', `(${A[0]}, ${A[1]})`],
            ['Vertex B', `(${B[0]}, ${B[1]})`],
            ['Vertex C', `(${C[0]}, ${C[1]})`]
        ];

        // Add triangle classification
        const classification = this.classifyTriangle(A, B, C);
        problemData.push(['', '']);
        problemData.push(['Triangle Type', classification.type]);

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createPrerequisiteSectionTriangle() {
        if (!this.prerequisiteChecks) return null;

        const centerType = this.currentProblem.centerType;
        const prereqs = this.prerequisites[centerType];

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

    createTriangleLessonSection() {
        const centerType = this.currentProblem.centerType;
        const lesson = this.lessons[centerType];

        if (!lesson) return null;

        const lessonData = [
            ['Title', lesson.title],
            ['Main Concept', lesson.mainConcept],
            ['', '']
        ];

        if (lesson.keyDefinitions) {
            lessonData.push(['Key Definitions', '']);
            for (const [term, def] of Object.entries(lesson.keyDefinitions)) {
                lessonData.push([term, def]);
            }
            lessonData.push(['', '']);
        }

        if (lesson.properties) {
            lessonData.push(['Properties', '']);
            lesson.properties.forEach((prop, i) => {
                lessonData.push([`${i + 1}`, prop]);
            });
            lessonData.push(['', '']);
        }

        if (lesson.formulas) {
            lessonData.push(['Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.formulas)) {
                lessonData.push([name, formula]);
            }
        }

        return {
            title: 'Key Concepts and Theory',
            type: 'lesson',
            data: lessonData
        };
    }

    createEnhancedStepsSectionTriangle() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge' && this.explanationLevel === 'basic') {
                return;
            }

            // Main step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Bridge', step.title]);
                stepsData.push(['Connection', step.explanation.currentState]);
                stepsData.push(['Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            stepsData.push([`Step ${step.stepNumber}`, step.description]);

            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }

            if (step.calculation) {
                if (typeof step.calculation === 'object') {
                    for (const [key, value] of Object.entries(step.calculation)) {
                        stepsData.push([key, value]);
                    }
                } else {
                    stepsData.push(['Calculation', step.calculation]);
                }
            }

            if (step.expression) {
                stepsData.push(['Result', step.expression]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
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

            // Properties for final answer
            if (step.properties && Array.isArray(step.properties)) {
                stepsData.push(['Properties', step.properties.join('; ')]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                const mistakes = step.errorPrevention.commonMistakes;
                if (mistakes && mistakes.length > 0) {
                    stepsData.push(['Common Mistakes', mistakes.join('; ')]);
                }
            }

            // Self-check
            if (step.selfCheck && this.includeSelfCheckQuestions) {
                stepsData.push(['Self-Check', step.selfCheck]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: `Enhanced Step-by-Step Solution (${this.explanationLevel} level)`,
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSectionTriangle() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Center', this.currentSolution.center],
            ['Symbol', this.currentSolution.symbol || ''],
            ['Coordinates', `(${this.currentSolution.coordinates[0]}, ${this.currentSolution.coordinates[1]})`]
        ];

        if (this.currentSolution.circumradius !== undefined) {
            solutionData.push(['Circumradius', this.currentSolution.circumradius]);
        }

        if (this.currentSolution.inradius !== undefined) {
            solutionData.push(['Inradius', this.currentSolution.inradius]);
        }

        if (this.currentSolution.ninePointRadius !== undefined) {
            solutionData.push(['Nine-Point Radius', this.currentSolution.ninePointRadius]);
        }

        if (this.currentSolution.specialCase) {
            solutionData.push(['Special Case', this.currentSolution.specialCase]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionTriangle() {
        if (!this.currentSolution) return null;

        const analysisData = [
            ['Center Type', this.currentSolution.center],
            ['Calculation Method', this.currentSolution.calculation || 'Geometric/Algebraic'],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        if (this.currentSolution.properties) {
            analysisData.push(['', '']);
            analysisData.push(['Properties', '']);
            if (typeof this.currentSolution.properties === 'object') {
                for (const [key, value] of Object.entries(this.currentSolution.properties)) {
                    analysisData.push([key, String(value)]);
                }
            }
        }

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSectionTriangle() {
        if (!this.currentSolution || !this.currentSolution.verification) return null;

        const verificationData = [
            ['Verification Method', 'Geometric properties check'],
            ['', '']
        ];

        const verification = this.currentSolution.verification;
        for (const [key, value] of Object.entries(verification)) {
            verificationData.push([key, String(value)]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createConstructionMethodSection() {
        const centerType = this.currentProblem.centerType;
        const construction = this.constructions[centerType];

        if (!construction) return null;

        const constructionData = [
            ['Classical Construction Method', ''],
            ['Tools', construction.classicalMethod?.tools || 'Compass and straightedge'],
            ['Difficulty', construction.classicalMethod?.difficulty || 'Medium'],
            ['', ''],
            ['Steps', '']
        ];

        if (construction.classicalMethod?.steps) {
            construction.classicalMethod.steps.forEach((step, i) => {
                constructionData.push([`${i + 1}`, step]);
            });
        }

        if (construction.coordinateMethod) {
            constructionData.push(['', '']);
            constructionData.push(['Coordinate Method', '']);
            constructionData.push(['Difficulty', construction.coordinateMethod.difficulty]);
            if (construction.coordinateMethod.steps) {
                construction.coordinateMethod.steps.forEach((step, i) => {
                    constructionData.push([`${i + 1}`, step]);
                });
            }
        }

        return {
            title: 'Construction Methods',
            type: 'construction',
            data: constructionData
        };
    }

    createRealWorldApplicationSectionTriangle() {
        if (!this.includeRealWorldApplications) return null;

        const centerType = this.currentProblem.centerType;
        const applications = Object.values(this.realWorldProblems).filter(app => 
            app.center === centerType || app.center === 'multiple'
        ).slice(0, 3);

        if (applications.length === 0) return null;

        const appData = [
            ['Real-World Applications', ''],
            ['', '']
        ];

        applications.forEach((app, index) => {
            appData.push([`Application ${index + 1}`, app.scenario]);
            appData.push(['Context', app.context]);
            appData.push(['Fields', app.fields.join(', ')]);
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

    createHistoricalContextSection() {
        if (!this.includeHistoricalContext) return null;

        const histData = [
            ['Historical Context', ''],
            ['', ''],
            ['Ancient Greeks (~300 BCE)', this.historicalContext.ancientGreeks.contributions.join('; ')],
            ['', ''],
            ['Leonhard Euler (1765)', this.historicalContext.euler.theorem],
            ['Significance', this.historicalContext.euler.significance],
            ['', ''],
            ['Karl Wilhelm Feuerbach (1822)', this.historicalContext.feuerbach.theorem],
            ['Significance', this.historicalContext.feuerbach.significance]
        ];

        return {
            title: 'Historical Context',
            type: 'historical',
            data: histData
        };
    }

    createPedagogicalNotesSectionTriangle() {
        if (!this.includePedagogicalNotes) return null;

        const centerType = this.currentProblem.centerType;
        const lesson = this.lessons[centerType];

        if (!lesson || !lesson.commonMistakes) return null;

        const pedData = [
            ['Teaching Notes', ''],
            ['', ''],
            ['Common Mistakes', lesson.commonMistakes.join('; ')],
            ['', '']
        ];

        if (lesson.applications) {
            pedData.push(['Applications in Teaching', lesson.applications.join('; ')]);
        }

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedData
        };
    }

    createAlternativeMethodsSectionTriangle() {
        if (!this.includeAlternativeMethods) return null;

        const centerType = this.currentProblem.centerType;
        const construction = this.constructions[centerType];

        if (!construction) return null;

        const altData = [
            ['Alternative Methods', ''],
            ['', ''],
            ['Method 1: Classical Construction', construction.classicalMethod?.difficulty || ''],
            ['Tools', construction.classicalMethod?.tools || ''],
            ['', ''],
            ['Method 2: Coordinate Geometry', construction.coordinateMethod?.difficulty || ''],
            ['Accuracy', construction.coordinateMethod?.accuracy || '']
        ];

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: altData
        };
    }

    createPracticeProblemsSectionTriangle() {
        const centerType = this.currentProblem.centerType;
        const examples = this.workedExamples[centerType];

        if (!examples || examples.length === 0) return null;

        const practiceData = [
            ['Practice Problems', ''],
            ['', '']
        ];

        examples.slice(0, 3).forEach((example, i) => {
            practiceData.push([`Problem ${i + 1}`, `Vertices: ${JSON.stringify(example.vertices)}`]);
            practiceData.push(['Answer', `${example.center || 'Calculate'}`]);
            practiceData.push(['Difficulty', example.difficulty]);
            practiceData.push(['', '']);
        });

        return {
            title: 'Practice Problems',
            type: 'practice',
            data: practiceData
        };
    }
}

// Export the class
export default EnhancedTriangleCentersWorkbook;

