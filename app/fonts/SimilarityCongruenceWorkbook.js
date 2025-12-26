// Enhanced Similarity & Congruence Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedSimilarityCongruenceWorkbook {
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
        this.initializeSimilarityCongruenceSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeSimilarityCongruenceLessons() {
        this.lessons = {
            triangle_congruence: {
                title: "Triangle Congruence",
                concepts: [
                    "Congruent triangles have equal corresponding sides and angles",
                    "Five congruence postulates: SSS, SAS, ASA, AAS, HL",
                    "Order of vertices matters for correspondence",
                    "Congruence is indicated by ≅ symbol"
                ],
                theory: "Two triangles are congruent if all corresponding sides and angles are equal. However, we only need to verify specific combinations (postulates) to prove congruence.",
                keyFormulas: {
                    "SSS": "Three sides equal → triangles congruent",
                    "SAS": "Two sides and included angle equal → triangles congruent",
                    "ASA": "Two angles and included side equal → triangles congruent",
                    "AAS": "Two angles and non-included side equal → triangles congruent",
                    "HL": "Hypotenuse and leg equal (right triangles) → triangles congruent"
                },
                solvingSteps: [
                    "Identify given information about sides and angles",
                    "Determine which postulate applies",
                    "Verify all conditions of the postulate",
                    "State congruence with proper vertex correspondence"
                ],
                applications: [
                    "Proving geometric properties",
                    "Construction and design",
                    "Engineering and architecture",
                    "Pattern recognition"
                ]
            },

            triangle_similarity: {
                title: "Triangle Similarity",
                concepts: [
                    "Similar triangles have equal corresponding angles",
                    "Corresponding sides are proportional",
                    "Three similarity theorems: AA, SAS~, SSS~",
                    "Similarity is indicated by ~ symbol"
                ],
                theory: "Two triangles are similar if their corresponding angles are equal and corresponding sides are proportional. Similar triangles have the same shape but different sizes.",
                keyFormulas: {
                    "AA Similarity": "Two angles equal → triangles similar",
                    "SAS~ Similarity": "Two sides proportional, included angle equal → triangles similar",
                    "SSS~ Similarity": "All three sides proportional → triangles similar",
                    "Scale Factor": "k = corresponding side₁ / corresponding side₂"
                },
                solvingSteps: [
                    "Identify corresponding angles and sides",
                    "Check angle equality or side proportionality",
                    "Calculate scale factor if similar",
                    "Find missing sides using proportions"
                ],
                applications: [
                    "Indirect measurement",
                    "Scale models and maps",
                    "Photography and optics",
                    "Shadow problems"
                ]
            },

            scale_factor: {
                title: "Scale Factor and Proportions",
                concepts: [
                    "Scale factor relates corresponding sides of similar figures",
                    "All corresponding sides have same scale factor",
                    "Area scale factor = (linear scale factor)²",
                    "Volume scale factor = (linear scale factor)³"
                ],
                theory: "The scale factor is the constant ratio between corresponding linear measurements in similar figures. It determines how all dimensions change.",
                keyFormulas: {
                    "Linear Scale Factor": "k = new length / original length",
                    "Area Scale Factor": "k² = new area / original area",
                    "Volume Scale Factor": "k³ = new volume / original volume",
                    "Proportion": "a/b = c/d → ad = bc"
                },
                applications: [
                    "Model building",
                    "Map reading",
                    "Resizing images",
                    "Scaling recipes"
                ]
            },

            cpctc: {
                title: "CPCTC (Corresponding Parts of Congruent Triangles are Congruent)",
                concepts: [
                    "Once triangles proven congruent, all parts are equal",
                    "Used to prove segments or angles equal",
                    "Requires triangle congruence first",
                    "Applies to all six pairs of corresponding parts"
                ],
                theory: "CPCTC is a conclusion, not a method of proof. First prove triangles congruent, then use CPCTC to conclude corresponding parts are congruent.",
                keyFormulas: {
                    "If △ABC ≅ △DEF": "Then AB ≅ DE, BC ≅ EF, AC ≅ DF, ∠A ≅ ∠D, ∠B ≅ ∠E, ∠C ≅ ∠F"
                },
                proofStructure: [
                    "State what needs to be proven",
                    "Prove triangles are congruent",
                    "Apply CPCTC to desired parts",
                    "State conclusion"
                ]
            },

            geometric_mean: {
                title: "Geometric Mean in Similar Triangles",
                concepts: [
                    "Altitude to hypotenuse creates similar triangles",
                    "Altitude is geometric mean of segments",
                    "Each leg is geometric mean of hypotenuse and adjacent segment",
                    "Appears in right triangle altitude theorem"
                ],
                theory: "In a right triangle, the altitude to the hypotenuse creates three similar triangles, leading to important geometric mean relationships.",
                keyFormulas: {
                    "Altitude Theorem": "h² = xy (altitude squared = product of segments)",
                    "Leg Theorem": "a² = cx (leg squared = hypotenuse × adjacent segment)",
                    "Geometric Mean": "√(ab) = geometric mean of a and b"
                },
                applications: [
                    "Finding heights indirectly",
                    "Geometric constructions",
                    "Optimization problems",
                    "Golden ratio calculations"
                ]
            },

            proportional_segments: {
                title: "Proportional Segments and Side-Splitter Theorem",
                concepts: [
                    "Parallel lines create proportional segments",
                    "Side-Splitter Theorem for triangles",
                    "Triangle Proportionality Theorem",
                    "Converse theorems for proving parallel lines"
                ],
                theory: "When a line parallel to one side of a triangle intersects the other two sides, it divides those sides proportionally.",
                keyFormulas: {
                    "Side-Splitter": "If DE ∥ BC, then AD/DB = AE/EC",
                    "Triangle Proportionality": "If DE ∥ BC, then AD/AB = AE/AC = DE/BC",
                    "Converse": "If AD/DB = AE/EC, then DE ∥ BC"
                },
                applications: [
                    "Dividing segments proportionally",
                    "Proving lines parallel",
                    "Engineering designs",
                    "Art and perspective drawing"
                ]
            },

            angle_angle_similarity: {
                title: "AA Similarity Postulate",
                concepts: [
                    "Most common similarity proof method",
                    "Only need two angle pairs",
                    "Third angle automatically equal (triangle angle sum)",
                    "Works for all triangles"
                ],
                theory: "If two angles of one triangle are congruent to two angles of another triangle, the triangles are similar. This is the most frequently used similarity criterion.",
                keyFormulas: {
                    "AA Postulate": "∠A ≅ ∠D and ∠B ≅ ∠E → △ABC ~ △DEF",
                    "Implication": "All corresponding sides are proportional"
                },
                commonScenarios: [
                    "Triangles with parallel lines",
                    "Triangles sharing an angle",
                    "Right triangles with another equal angle",
                    "Angle-angle combinations in word problems"
                ]
            },

            indirect_measurement: {
                title: "Indirect Measurement Using Similarity",
                concepts: [
                    "Measure inaccessible heights or distances",
                    "Set up similar triangles",
                    "Use proportions to solve",
                    "Common in shadow and mirror problems"
                ],
                theory: "Similar triangles allow us to measure objects indirectly by setting up proportions between known and unknown measurements.",
                keyFormulas: {
                    "Shadow Problems": "height₁/shadow₁ = height₂/shadow₂",
                    "Mirror Problems": "height₁/distance₁ = height₂/distance₂",
                    "General Proportion": "known₁/known₂ = unknown₁/known₃"
                },
                problemTypes: [
                    "Shadow problems (sun angle constant)",
                    "Mirror problems (angle of incidence = angle of reflection)",
                    "Pantograph and scaling devices",
                    "Surveying and navigation"
                ]
            },

            polygon_similarity: {
                title: "Similar Polygons",
                concepts: [
                    "All corresponding angles must be congruent",
                    "All corresponding sides must be proportional",
                    "Both conditions required (unlike triangles)",
                    "Scale factor applies to all sides"
                ],
                theory: "Two polygons are similar if corresponding angles are congruent AND corresponding sides are proportional. For polygons with more than three sides, both conditions must be verified.",
                keyFormulas: {
                    "Similarity Conditions": "∠A ≅ ∠A' and AB/A'B' = BC/B'C' = ... (all sides)",
                    "Scale Factor": "k = any pair of corresponding sides",
                    "Perimeter Ratio": "P₁/P₂ = k",
                    "Area Ratio": "A₁/A₂ = k²"
                },
                specialCases: [
                    "All regular polygons with same number of sides are similar",
                    "All circles are similar",
                    "All squares are similar"
                ]
            },

            proofs_similarity_congruence: {
                title: "Geometric Proofs Using Similarity and Congruence",
                concepts: [
                    "Two-column proofs with statements and reasons",
                    "Paragraph proofs with logical flow",
                    "Flow-chart proofs showing connections",
                    "Indirect proofs (proof by contradiction)"
                ],
                theory: "Geometric proofs use similarity and congruence to establish relationships between figures through logical deduction.",
                proofTechniques: [
                    "Identify given information",
                    "Draw and label diagrams",
                    "Look for triangles to prove congruent or similar",
                    "Apply theorems and postulates",
                    "Use CPCTC when applicable",
                    "State conclusion clearly"
                ],
                commonReasons: [
                    "Given",
                    "Definition of congruence/similarity",
                    "SSS, SAS, ASA, AAS, HL postulates",
                    "AA, SAS~, SSS~ similarity theorems",
                    "CPCTC",
                    "Reflexive, symmetric, transitive properties",
                    "Corresponding angles of parallel lines"
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
            'congruent': '≅', 'similar': '~', 'approx': '≈',
            'angle': '∠', 'triangle': '△', 'perpendicular': '⊥',
            'parallel': '∥', 'therefore': '∴', 'because': '∵',
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'theta': 'θ', 'pi': 'π',
            // Special symbols
            'degrees': '°', 'prime': '′', 'double_prime': '″'
        };
    }

    initializeSimilarityCongruenceSolvers() {
        this.similarityCongruenceTypes = {
            // Triangle Congruence
            sss_congruence: {
                patterns: [
                    /sss.*congruence/i,
                    /three.*sides.*equal/i,
                    /side.*side.*side/i
                ],
                solver: this.solveSSS.bind(this),
                name: 'SSS Congruence',
                category: 'triangle_congruence',
                description: 'Proves triangles congruent using three sides'
            },

            sas_congruence: {
                patterns: [
                    /sas.*congruence/i,
                    /side.*angle.*side/i,
                    /two.*sides.*included.*angle/i
                ],
                solver: this.solveSAS.bind(this),
                name: 'SAS Congruence',
                category: 'triangle_congruence',
                description: 'Proves triangles congruent using two sides and included angle'
            },

            asa_congruence: {
                patterns: [
                    /asa.*congruence/i,
                    /angle.*side.*angle/i,
                    /two.*angles.*included.*side/i
                ],
                solver: this.solveASA.bind(this),
                name: 'ASA Congruence',
                category: 'triangle_congruence',
                description: 'Proves triangles congruent using two angles and included side'
            },

            aas_congruence: {
                patterns: [
                    /aas.*congruence/i,
                    /angle.*angle.*side/i,
                    /two.*angles.*non.*included.*side/i
                ],
                solver: this.solveAAS.bind(this),
                name: 'AAS Congruence',
                category: 'triangle_congruence',
                description: 'Proves triangles congruent using two angles and non-included side'
            },

            hl_congruence: {
                patterns: [
                    /hl.*congruence/i,
                    /hypotenuse.*leg/i,
                    /right.*triangle.*congruence/i
                ],
                solver: this.solveHL.bind(this),
                name: 'HL Congruence',
                category: 'triangle_congruence',
                description: 'Proves right triangles congruent using hypotenuse and leg'
            },

            // Triangle Similarity
            aa_similarity: {
                patterns: [
                    /aa.*similarity/i,
                    /angle.*angle.*similar/i,
                    /two.*angles.*equal/i
                ],
                solver: this.solveAASimilarity.bind(this),
                name: 'AA Similarity',
                category: 'triangle_similarity',
                description: 'Proves triangles similar using two angles'
            },

            sas_similarity: {
                patterns: [
                    /sas.*similarity/i,
                    /sas~|sas\s*similarity/i,
                    /two.*sides.*proportional.*angle/i
                ],
                solver: this.solveSASSimilarity.bind(this),
                name: 'SAS~ Similarity',
                category: 'triangle_similarity',
                description: 'Proves triangles similar using two proportional sides and included angle'
            },

            sss_similarity: {
                patterns: [
                    /sss.*similarity/i,
                    /sss~|sss\s*similarity/i,
                    /three.*sides.*proportional/i
                ],
                solver: this.solveSSSSimilarity.bind(this),
                name: 'SSS~ Similarity',
                category: 'triangle_similarity',
                description: 'Proves triangles similar using three proportional sides'
            },

            // Scale Factor Problems
            scale_factor: {
                patterns: [
                    /scale.*factor/i,
                    /ratio.*sides/i,
                    /proportional.*sides/i
                ],
                solver: this.solveScaleFactor.bind(this),
                name: 'Scale Factor Calculation',
                category: 'scale_factor',
                description: 'Calculates scale factor between similar figures'
            },

            find_missing_side_similar: {
                patterns: [
                    /find.*side.*similar/i,
                    /missing.*side.*proportion/i,
                    /similar.*triangles.*find/i
                ],
                solver: this.findMissingSideSimilar.bind(this),
                name: 'Find Missing Side in Similar Triangles',
                category: 'scale_factor',
                description: 'Uses proportions to find unknown sides'
            },

            // CPCTC Problems
            cpctc_proof: {
                patterns: [
                    /cpctc/i,
                    /corresponding.*parts.*congruent/i,
                    /prove.*segments.*equal/i
                ],
                solver: this.solveCPCTC.bind(this),
                name: 'CPCTC Proof',
                category: 'cpctc',
                description: 'Proves parts equal using congruent triangles'
            },

            // Geometric Mean
            geometric_mean_altitude: {
                patterns: [
                    /geometric.*mean.*altitude/i,
                    /altitude.*right.*triangle/i,
                    /altitude.*theorem/i
                ],
                solver: this.solveGeometricMeanAltitude.bind(this),
                name: 'Geometric Mean - Altitude',
                category: 'geometric_mean',
                description: 'Finds altitude using geometric mean theorem'
            },

            geometric_mean_leg: {
                patterns: [
                    /geometric.*mean.*leg/i,
                    /leg.*theorem/i,
                    /right.*triangle.*leg/i
                ],
                solver: this.solveGeometricMeanLeg.bind(this),
                name: 'Geometric Mean - Leg',
                category: 'geometric_mean',
                description: 'Finds leg using geometric mean theorem'
            },

            // Proportional Segments
            side_splitter: {
                patterns: [
                    /side.*splitter/i,
                    /parallel.*proportional/i,
                    /triangle.*proportionality/i
                ],
                solver: this.solveSideSplitter.bind(this),
                name: 'Side-Splitter Theorem',
                category: 'proportional_segments',
                description: 'Uses parallel lines to find proportional segments'
            },

            // Indirect Measurement
            shadow_problem: {
                patterns: [
                    /shadow.*problem/i,
                    /indirect.*measurement.*shadow/i,
                    /sun.*angle.*constant/i
                ],
                solver: this.solveShadowProblem.bind(this),
                name: 'Shadow Problem',
                category: 'indirect_measurement',
                description: 'Finds heights using shadows and similar triangles'
            },

            mirror_problem: {
                patterns: [
                    /mirror.*problem/i,
                    /indirect.*measurement.*mirror/i,
                    /reflection.*measurement/i
                ],
                solver: this.solveMirrorProblem.bind(this),
                name: 'Mirror Problem',
                category: 'indirect_measurement',
                description: 'Finds heights using mirror reflections'
            },

            // Polygon Similarity
            similar_polygons: {
                patterns: [
                    /similar.*polygon/i,
                    /polygon.*similarity/i,
                    /quadrilateral.*similar/i
                ],
                solver: this.solveSimilarPolygons.bind(this),
                name: 'Similar Polygons',
                category: 'polygon_similarity',
                description: 'Analyzes similarity of polygons'
            },

            // Area and Perimeter Ratios
            area_ratio_similar: {
                patterns: [
                    /area.*ratio.*similar/i,
                    /similar.*figures.*area/i,
                    /scale.*factor.*area/i
                ],
                solver: this.solveAreaRatio.bind(this),
                name: 'Area Ratios of Similar Figures',
                category: 'scale_factor',
                description: 'Calculates area ratios using scale factor squared'
            },

            perimeter_ratio_similar: {
                patterns: [
                    /perimeter.*ratio.*similar/i,
                    /similar.*figures.*perimeter/i,
                    /scale.*factor.*perimeter/i
                ],
                solver: this.solvePerimeterRatio.bind(this),
                name: 'Perimeter Ratios of Similar Figures',
                category: 'scale_factor',
                description: 'Calculates perimeter ratios using scale factor'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            sss_congruence: {
                'Verify all three sides': [
                    'Forgetting to check all three pairs of sides',
                    'Assuming congruence from only two sides',
                    'Not matching corresponding sides correctly'
                ],
                'State congruence': [
                    'Writing vertices in wrong order',
                    'Using similarity symbol (~) instead of congruence (≅)'
                ]
            },
            aa_similarity: {
                'Verify angle equality': [
                    'Confusing angle measures with side lengths',
                    'Not accounting for vertical or corresponding angles',
                    'Forgetting that third angle is automatically equal'
                ],
                'Set up proportion': [
                    'Mixing up corresponding sides',
                    'Not maintaining consistent order in ratios',
                    'Using wrong sides in proportion'
                ]
            },
            scale_factor: {
                'Calculate scale factor': [
                    'Dividing in wrong order (small/large vs large/small)',
                    'Not simplifying the ratio',
                    'Confusing linear scale factor with area scale factor'
                ],
                'Apply to find missing sides': [
                    'Multiplying when should divide',
                    'Applying scale factor to wrong dimension',
                    'Forgetting units in answer'
                ]
            },
            geometric_mean: {
                'Set up proportion': [
                    'Not recognizing which segments to use',
                    'Confusing altitude theorem with leg theorem',
                    'Setting up proportion incorrectly'
                ],
                'Solve for unknown': [
                    'Arithmetic errors in cross-multiplication',
                    'Forgetting to take square root',
                    'Using wrong segment lengths'
                ]
            }
        };

        this.errorPrevention = {
            correspondence_checking: {
                reminder: 'Always label corresponding vertices in order',
                method: 'Use tick marks and arc marks to show equal parts'
            },
            proportion_setup: {
                reminder: 'Keep corresponding sides in same position in ratios',
                method: 'Write ratios vertically to align corresponding parts'
            },
            scale_factor_direction: {
                reminder: 'Know if scaling up (k > 1) or down (k < 1)',
                method: 'Compare figure sizes visually before calculating'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why this relationship exists geometrically',
                language: 'intuitive and visual'
            },
            procedural: {
                focus: 'Exact steps to verify congruence or similarity',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Spatial relationships and figure analysis',
                language: 'visual and geometric descriptions'
            },
            algebraic: {
                focus: 'Proportions, equations, and calculations',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential steps only',
                examples: 'concrete measurements'
            },
            intermediate: {
                vocabulary: 'standard geometry terminology',
                detail: 'main steps with brief explanations',
                examples: 'mix of specific and general cases'
            },
            detailed: {
                vocabulary: 'full geometric vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized proofs'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to formal',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // Main solver method
    solveSimilarityCongruenceProblem(config) {
        const { problemType, parameters, scenario, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseSimilarityCongruenceProblem(problemType, parameters, scenario, context);

            // Solve the problem
            this.currentSolution = this.solveSimilarityCongruenceProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateSimilarityCongruenceSteps(this.currentProblem, this.currentSolution);

            // Generate graph data if applicable
            this.generateSimilarityCongruenceGraphData();

            // Generate workbook
            this.generateSimilarityCongruenceWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                isCongruent: this.currentSolution?.isCongruent,
                isSimilar: this.currentSolution?.isSimilar,
                scaleFactor: this.currentSolution?.scaleFactor
            };

        } catch (error) {
            throw new Error(`Failed to solve similarity/congruence problem: ${error.message}`);
        }
    }

    parseSimilarityCongruenceProblem(problemType, parameters = {}, scenario = '', context = {}) {
        // If problem type is specified, use it directly
        if (problemType && this.similarityCongruenceTypes[problemType]) {
            return {
                originalInput: problemType,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type from scenario
        for (const [type, config] of Object.entries(this.similarityCongruenceTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        originalInput: scenario,
                        type: type,
                        scenario: scenario,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize similarity/congruence problem type from: ${problemType || scenario}`);
    }

    solveSimilarityCongruenceProblem_Internal(problem) {
        const solver = this.similarityCongruenceTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // SIMILARITY & CONGRUENCE SOLVERS

    solveSSS(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { sides: [a, b, c] }
        // triangle2 = { sides: [d, e, f] }

        const sides1 = triangle1.sides.sort((a, b) => a - b);
        const sides2 = triangle2.sides.sort((a, b) => a - b);

        const tolerance = 1e-6;
        const congruent = sides1.every((side, i) => Math.abs(side - sides2[i]) < tolerance);

        return {
            problemType: 'SSS Congruence',
            triangle1: triangle1,
            triangle2: triangle2,
            sortedSides1: sides1,
            sortedSides2: sides2,
            isCongruent: congruent,
            postulate: 'SSS',
            explanation: congruent ? 
                'All three pairs of corresponding sides are congruent' :
                'Not all corresponding sides are congruent',
            verification: this.verifySSSCongruence(sides1, sides2),
            category: 'triangle_congruence'
        };
    }

    solveSAS(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { side1, angle, side2 }
        // triangle2 = { side1, angle, side2 }

        const tolerance = 1e-6;
        const side1Match = Math.abs(triangle1.side1 - triangle2.side1) < tolerance;
        const angleMatch = Math.abs(triangle1.angle - triangle2.angle) < tolerance;
        const side2Match = Math.abs(triangle1.side2 - triangle2.side2) < tolerance;

        const congruent = side1Match && angleMatch && side2Match;

        return {
            problemType: 'SAS Congruence',
            triangle1: triangle1,
            triangle2: triangle2,
            side1Match: side1Match,
            angleMatch: angleMatch,
            side2Match: side2Match,
            isCongruent: congruent,
            postulate: 'SAS',
            explanation: congruent ?
                'Two sides and the included angle are congruent' :
                'The SAS conditions are not satisfied',
            verification: this.verifySASCongruence(triangle1, triangle2),
            category: 'triangle_congruence'
        };
    }

    solveASA(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { angle1, side, angle2 }
        // triangle2 = { angle1, side, angle2 }

        const tolerance = 1e-6;
        const angle1Match = Math.abs(triangle1.angle1 - triangle2.angle1) < tolerance;
        const sideMatch = Math.abs(triangle1.side - triangle2.side) < tolerance;
        const angle2Match = Math.abs(triangle1.angle2 - triangle2.angle2) < tolerance;

        const congruent = angle1Match && sideMatch && angle2Match;

        return {
            problemType: 'ASA Congruence',
            triangle1: triangle1,
            triangle2: triangle2,
            angle1Match: angle1Match,
            sideMatch: sideMatch,
            angle2Match: angle2Match,
            isCongruent: congruent,
            postulate: 'ASA',
            explanation: congruent ?
                'Two angles and the included side are congruent' :
                'The ASA conditions are not satisfied',
            verification: this.verifyASACongruence(triangle1, triangle2),
            category: 'triangle_congruence'
        };
    }

    solveAAS(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { angle1, angle2, side }
        // triangle2 = { angle1, angle2, side }

        const tolerance = 1e-6;
        const angle1Match = Math.abs(triangle1.angle1 - triangle2.angle1) < tolerance;
        const angle2Match = Math.abs(triangle1.angle2 - triangle2.angle2) < tolerance;
        const sideMatch = Math.abs(triangle1.side - triangle2.side) < tolerance;

        const congruent = angle1Match && angle2Match && sideMatch;

        return {
            problemType: 'AAS Congruence',
            triangle1: triangle1,
            triangle2: triangle2,
            angle1Match: angle1Match,
            angle2Match: angle2Match,
            sideMatch: sideMatch,
            isCongruent: congruent,
            postulate: 'AAS',
            explanation: congruent ?
                'Two angles and a non-included side are congruent' :
                'The AAS conditions are not satisfied',
            verification: this.verifyAASCongruence(triangle1, triangle2),
            category: 'triangle_congruence'
        };
    }

    solveHL(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { hypotenuse, leg }
        // triangle2 = { hypotenuse, leg }

        const tolerance = 1e-6;
        const hypotenuseMatch = Math.abs(triangle1.hypotenuse - triangle2.hypotenuse) < tolerance;
        const legMatch = Math.abs(triangle1.leg - triangle2.leg) < tolerance;

        const congruent = hypotenuseMatch && legMatch;

        return {
            problemType: 'HL Congruence (Right Triangles)',
            triangle1: triangle1,
            triangle2: triangle2,
            hypotenuseMatch: hypotenuseMatch,
            legMatch: legMatch,
            isCongruent: congruent,
            postulate: 'HL',
            explanation: congruent ?
                'Hypotenuse and leg of right triangles are congruent' :
                'The HL conditions are not satisfied',
            verification: this.verifyHLCongruence(triangle1, triangle2),
            note: 'HL theorem applies only to right triangles',
            category: 'triangle_congruence'
        };
    }

    solveAASimilarity(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { angle1, angle2 }
        // triangle2 = { angle1, angle2 }

        const tolerance = 1e-6;
        const angle1Match = Math.abs(triangle1.angle1 - triangle2.angle1) < tolerance;
        const angle2Match = Math.abs(triangle1.angle2 - triangle2.angle2) < tolerance;

        const similar = angle1Match && angle2Match;

        // Calculate third angles
        const angle3_t1 = 180 - triangle1.angle1 - triangle1.angle2;
        const angle3_t2 = 180 - triangle2.angle1 - triangle2.angle2;

        return {
            problemType: 'AA Similarity',
            triangle1: { ...triangle1, angle3: angle3_t1 },
            triangle2: { ...triangle2, angle3: angle3_t2 },
            angle1Match: angle1Match,
            angle2Match: angle2Match,
            angle3Match: Math.abs(angle3_t1 - angle3_t2) < tolerance,
            isSimilar: similar,
            theorem: 'AA',
            explanation: similar ?
                'Two pairs of corresponding angles are congruent, therefore triangles are similar' :
                'Angles do not match - triangles are not similar by AA',
            verification: this.verifyAASimilarity(triangle1, triangle2),
            category: 'triangle_similarity'
        };
    }

    solveSASSimilarity(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { side1, angle, side2 }
        // triangle2 = { side1, angle, side2 }

        const tolerance = 1e-6;
        const angleMatch = Math.abs(triangle1.angle - triangle2.angle) < tolerance;

        // Check if sides are proportional
        const ratio1 = triangle1.side1 / triangle2.side1;
        const ratio2 = triangle1.side2 / triangle2.side2;
        const sidesProportional = Math.abs(ratio1 - ratio2) < tolerance;

        const similar = angleMatch && sidesProportional;
        const scaleFactor = similar ? ratio1 : null;

        return {
            problemType: 'SAS~ Similarity',
            triangle1: triangle1,
            triangle2: triangle2,
            angleMatch: angleMatch,
            ratio1: ratio1,
            ratio2: ratio2,
            sidesProportional: sidesProportional,
            isSimilar: similar,
            scaleFactor: scaleFactor,
            theorem: 'SAS~',
            explanation: similar ?
                `Two sides are proportional (ratio ${ratio1.toFixed(4)}) and included angles are congruent` :
                'SAS~ conditions not satisfied',
            verification: this.verifySASSimilarity(triangle1, triangle2, scaleFactor),
            category: 'triangle_similarity'
        };
    }

    solveSSSSimilarity(problem) {
        const { triangle1, triangle2 } = problem.parameters;
        // triangle1 = { sides: [a, b, c] }
        // triangle2 = { sides: [d, e, f] }

        const sides1 = triangle1.sides.sort((a, b) => a - b);
        const sides2 = triangle2.sides.sort((a, b) => a - b);

        const tolerance = 1e-6;
        const ratio1 = sides1[0] / sides2[0];
        const ratio2 = sides1[1] / sides2[1];
        const ratio3 = sides1[2] / sides2[2];

        const allProportional = Math.abs(ratio1 - ratio2) < tolerance && 
                                Math.abs(ratio2 - ratio3) < tolerance;

        const similar = allProportional;
        const scaleFactor = similar ? ratio1 : null;

        return {
            problemType: 'SSS~ Similarity',
            triangle1: triangle1,
            triangle2: triangle2,
            sortedSides1: sides1,
            sortedSides2: sides2,
            ratio1: ratio1,
            ratio2: ratio2,
            ratio3: ratio3,
            allProportional: allProportional,
            isSimilar: similar,
            scaleFactor: scaleFactor,
            theorem: 'SSS~',
            explanation: similar ?
                `All three pairs of sides are proportional with ratio ${scaleFactor.toFixed(4)}` :
                'Not all side ratios are equal - triangles not similar by SSS~',
            verification: this.verifySSSimilarity(sides1, sides2, scaleFactor),
            category: 'triangle_similarity'
        };
    }

    solveScaleFactor(problem) {
        const { figure1Measurement, figure2Measurement, measurementType } = problem.parameters;
        // measurementType: 'side', 'perimeter', 'area', 'volume'

        const scaleFactor = figure1Measurement / figure2Measurement;

        let areaScaleFactor = null;
        let volumeScaleFactor = null;

        if (measurementType === 'side' || measurementType === 'perimeter') {
            areaScaleFactor = Math.pow(scaleFactor, 2);
            volumeScaleFactor = Math.pow(scaleFactor, 3);
        } else if (measurementType === 'area') {
            areaScaleFactor = scaleFactor;
            const linearScale = Math.sqrt(scaleFactor);
            volumeScaleFactor = Math.pow(linearScale, 3);
        }

        return {
            problemType: 'Scale Factor Calculation',
            figure1Measurement: figure1Measurement,
            figure2Measurement: figure2Measurement,
            measurementType: measurementType,
            linearScaleFactor: measurementType === 'area' ? Math.sqrt(scaleFactor) : scaleFactor,
            areaScaleFactor: areaScaleFactor,
            volumeScaleFactor: volumeScaleFactor,
            explanation: `The scale factor from figure 2 to figure 1 is ${scaleFactor.toFixed(4)}`,
            interpretation: this.interpretScaleFactor(scaleFactor),
            category: 'scale_factor'
        };
    }

    findMissingSideSimilar(problem) {
        const { knownSide1Triangle1, knownSide1Triangle2, knownSide2Triangle1, unknownSide } = problem.parameters;
        // Set up proportion: side1_t1 / side1_t2 = side2_t1 / unknown

        const scaleFactor = knownSide1Triangle1 / knownSide1Triangle2;
        const missingSide = knownSide2Triangle1 / scaleFactor;

        return {
            problemType: 'Find Missing Side in Similar Triangles',
            knownPair: { triangle1: knownSide1Triangle1, triangle2: knownSide1Triangle2 },
            knownSideTriangle1: knownSide2Triangle1,
            scaleFactor: scaleFactor,
            missingSide: missingSide,
            proportion: `${knownSide1Triangle1}/${knownSide1Triangle2} = ${knownSide2Triangle1}/${missingSide.toFixed(4)}`,
            verification: this.verifyProportion(knownSide1Triangle1, knownSide1Triangle2, knownSide2Triangle1, missingSide),
            category: 'scale_factor'
        };
    }

    solveCPCTC(problem) {
        const { congruentTriangles, partToProve, congruenceMethod } = problem.parameters;
        // congruentTriangles: { triangle1: 'ABC', triangle2: 'DEF' }
        // partToProve: 'side AB' or 'angle A'

        return {
            problemType: 'CPCTC Proof',
            givenCongruence: `△${congruentTriangles.triangle1} ≅ △${congruentTriangles.triangle2}`,
            congruenceMethod: congruenceMethod || 'Given',
            partToProve: partToProve,
            conclusion: `${partToProve} from △${congruentTriangles.triangle1} ≅ corresponding part in △${congruentTriangles.triangle2}`,
            reasoning: 'Corresponding Parts of Congruent Triangles are Congruent (CPCTC)',
            proofStructure: this.generateCPCTCProofStructure(congruentTriangles, partToProve, congruenceMethod),
            category: 'cpctc'
        };
    }

    solveGeometricMeanAltitude(problem) {
        const { segment1, segment2 } = problem.parameters;
        // In right triangle, altitude to hypotenuse: h² = x·y

        const altitude = Math.sqrt(segment1 * segment2);

        return {
            problemType: 'Geometric Mean - Altitude Theorem',
            segment1: segment1,
            segment2: segment2,
            altitude: altitude,
            formula: 'h² = x·y',
            calculation: `h = √(${segment1} × ${segment2}) = √${segment1 * segment2} = ${altitude.toFixed(4)}`,
            verification: this.verifyGeometricMeanAltitude(segment1, segment2, altitude),
            explanation: 'The altitude to the hypotenuse is the geometric mean of the two segments of the hypotenuse',
            category: 'geometric_mean'
        };
    }

    solveGeometricMeanLeg(problem) {
        const { hypotenuse, adjacentSegment } = problem.parameters;
        // In right triangle: leg² = hypotenuse × adjacent segment

        const leg = Math.sqrt(hypotenuse * adjacentSegment);

        return {
            problemType: 'Geometric Mean - Leg Theorem',
            hypotenuse: hypotenuse,
            adjacentSegment: adjacentSegment,
            leg: leg,
            formula: 'leg² = hypotenuse × adjacent segment',
            calculation: `leg = √(${hypotenuse} × ${adjacentSegment}) = √${hypotenuse * adjacentSegment} = ${leg.toFixed(4)}`,
            verification: this.verifyGeometricMeanLeg(hypotenuse, adjacentSegment, leg),
            explanation: 'Each leg is the geometric mean of the hypotenuse and its adjacent segment',
            category: 'geometric_mean'
        };
    }

    solveSideSplitter(problem) {
        const { segment1Part1, segment1Part2, segment2Part1, findSegment2Part2 } = problem.parameters;
        // If line parallel to base: AD/DB = AE/EC

        let result;
        if (findSegment2Part2) {
            // Find segment2Part2 using proportion
            const ratio = segment1Part1 / segment1Part2;
            const segment2Part2 = segment2Part1 / ratio;
            result = segment2Part2;
        }

        return {
            problemType: 'Side-Splitter Theorem',
            givenSegments: {
                segment1: { part1: segment1Part1, part2: segment1Part2 },
                segment2: { part1: segment2Part1, part2: result }
            },
            ratio: segment1Part1 / segment1Part2,
            theorem: 'If a line parallel to one side of a triangle intersects the other two sides, it divides them proportionally',
            proportion: `${segment1Part1}/${segment1Part2} = ${segment2Part1}/${result?.toFixed(4)}`,
            unknownSegment: result,
            verification: this.verifySideSplitter(segment1Part1, segment1Part2, segment2Part1, result),
            category: 'proportional_segments'
        };
    }

    solveShadowProblem(problem) {
        const { object1Height, object1Shadow, object2Shadow, findObject2Height } = problem.parameters;
        // Similar triangles: height1/shadow1 = height2/shadow2

        let unknownHeight;
        if (findObject2Height) {
            unknownHeight = (object1Height * object2Shadow) / object1Shadow;
        }

        return {
            problemType: 'Shadow Problem (Indirect Measurement)',
            knownObject: { height: object1Height, shadow: object1Shadow },
            unknownObject: { height: unknownHeight, shadow: object2Shadow },
            method: 'AA Similarity (sun angle constant)',
            proportion: `${object1Height}/${object1Shadow} = ${unknownHeight?.toFixed(4)}/${object2Shadow}`,
            solution: unknownHeight,
            explanation: 'At the same time, the sun creates similar triangles with all objects',
            verification: this.verifyShadowProblem(object1Height, object1Shadow, unknownHeight, object2Shadow),
            category: 'indirect_measurement'
        };
    }

    solveMirrorProblem(problem) {
        const { personHeight, personDistance, mirrorToObject, findObjectHeight } = problem.parameters;
        // Similar triangles by angle of incidence = angle of reflection

        let objectHeight;
        if (findObjectHeight) {
            objectHeight = (personHeight * mirrorToObject) / personDistance;
        }

        return {
            problemType: 'Mirror Problem (Indirect Measurement)',
            person: { height: personHeight, distanceToMirror: personDistance },
            object: { height: objectHeight, distanceFromMirror: mirrorToObject },
            method: 'AA Similarity (angle of incidence = angle of reflection)',
            proportion: `${personHeight}/${personDistance} = ${objectHeight?.toFixed(4)}/${mirrorToObject}`,
            solution: objectHeight,
            explanation: 'Mirror reflection creates similar triangles with equal angles',
            verification: this.verifyMirrorProblem(personHeight, personDistance, objectHeight, mirrorToObject),
            category: 'indirect_measurement'
        };
    }

    solveSimilarPolygons(problem) {
        const { polygon1, polygon2, sidesCount } = problem.parameters;
        // polygon1 = { sides: [...], angles: [...] }
        // polygon2 = { sides: [...], angles: [...] }

        const tolerance = 1e-6;

        // Check all angles are congruent
        const anglesCongruent = polygon1.angles.every((angle, i) => 
            Math.abs(angle - polygon2.angles[i]) < tolerance
        );

        // Check all sides are proportional
        const ratios = polygon1.sides.map((side, i) => side / polygon2.sides[i]);
        const firstRatio = ratios[0];
        const sidesProportional = ratios.every(ratio => Math.abs(ratio - firstRatio) < tolerance);

        const similar = anglesCongruent && sidesProportional;
        const scaleFactor = similar ? firstRatio : null;

        return {
            problemType: 'Similar Polygons',
            polygon1: polygon1,
            polygon2: polygon2,
            sidesCount: sidesCount,
            anglesCongruent: anglesCongruent,
            sidesProportional: sidesProportional,
            sideRatios: ratios,
            isSimilar: similar,
            scaleFactor: scaleFactor,
            explanation: similar ?
                `All angles congruent and all sides proportional with scale factor ${scaleFactor.toFixed(4)}` :
                'Polygons are not similar - must have both angle congruence AND proportional sides',
            note: 'For polygons with more than 3 sides, BOTH conditions are required',
            verification: this.verifySimilarPolygons(polygon1, polygon2, similar),
            category: 'polygon_similarity'
        };
    }

    solveAreaRatio(problem) {
        const { scaleFactor, area1, findArea2 } = problem.parameters;
        // Area ratio = (scale factor)²

        const areaScaleFactor = Math.pow(scaleFactor, 2);
        let resultArea;

        if (findArea2 && area1) {
            resultArea = area1 / areaScaleFactor;
        } else if (area1) {
            resultArea = area1 * areaScaleFactor;
        }

        return {
            problemType: 'Area Ratios of Similar Figures',
            linearScaleFactor: scaleFactor,
            areaScaleFactor: areaScaleFactor,
            givenArea: area1,
            calculatedArea: resultArea,
            formula: 'Area ratio = (linear scale factor)²',
            explanation: `When linear dimensions scale by factor k, area scales by k²`,
            calculation: `Area scale factor = ${scaleFactor}² = ${areaScaleFactor}`,
            verification: this.verifyAreaRatio(scaleFactor, area1, resultArea),
            category: 'scale_factor'
        };
    }

    solvePerimeterRatio(problem) {
        const { scaleFactor, perimeter1, findPerimeter2 } = problem.parameters;
        // Perimeter ratio = scale factor (linear)

        let resultPerimeter;

        if (findPerimeter2 && perimeter1) {
            resultPerimeter = perimeter1 / scaleFactor;
        } else if (perimeter1) {
            resultPerimeter = perimeter1 * scaleFactor;
        }

        return {
            problemType: 'Perimeter Ratios of Similar Figures',
            linearScaleFactor: scaleFactor,
            perimeterScaleFactor: scaleFactor,
            givenPerimeter: perimeter1,
            calculatedPerimeter: resultPerimeter,
            formula: 'Perimeter ratio = linear scale factor',
            explanation: 'Perimeter scales linearly with the scale factor',
            calculation: `Perimeter scale factor = ${scaleFactor}`,
            verification: this.verifyPerimeterRatio(scaleFactor, perimeter1, resultPerimeter),
            category: 'scale_factor'
        };
    }

    // VERIFICATION METHODS

    verifySSSCongruence(sides1, sides2) {
        return sides1.map((side, i) => ({
            side1: side,
            side2: sides2[i],
            difference: Math.abs(side - sides2[i]),
            congruent: Math.abs(side - sides2[i]) < 1e-6
        }));
    }

    verifySASCongruence(triangle1, triangle2) {
        return {
            side1: {
                t1: triangle1.side1,
                t2: triangle2.side1,
                match: Math.abs(triangle1.side1 - triangle2.side1) < 1e-6
            },
            angle: {
                t1: triangle1.angle,
                t2: triangle2.angle,
                match: Math.abs(triangle1.angle - triangle2.angle) < 1e-6
            },
            side2: {
                t1: triangle1.side2,
                t2: triangle2.side2,
                match: Math.abs(triangle1.side2 - triangle2.side2) < 1e-6
            }
        };
    }

    verifyASACongruence(triangle1, triangle2) {
        return {
            angle1: {
                t1: triangle1.angle1,
                t2: triangle2.angle1,
                match: Math.abs(triangle1.angle1 - triangle2.angle1) < 1e-6
            },
            side: {
                t1: triangle1.side,
                t2: triangle2.side,
                match: Math.abs(triangle1.side - triangle2.side) < 1e-6
            },
            angle2: {
                t1: triangle1.angle2,
                t2: triangle2.angle2,
                match: Math.abs(triangle1.angle2 - triangle2.angle2) < 1e-6
            }
        };
    }

    verifyAASCongruence(triangle1, triangle2) {
        return {
            angle1: {
                t1: triangle1.angle1,
                t2: triangle2.angle1,
                match: Math.abs(triangle1.angle1 - triangle2.angle1) < 1e-6
            },
            angle2: {
                t1: triangle1.angle2,
                t2: triangle2.angle2,
                match: Math.abs(triangle1.angle2 - triangle2.angle2) < 1e-6
            },
            side: {
                t1: triangle1.side,
                t2: triangle2.side,
                match: Math.abs(triangle1.side - triangle2.side) < 1e-6
            }
        };
    }

    verifyHLCongruence(triangle1, triangle2) {
        return {
            hypotenuse: {
                t1: triangle1.hypotenuse,
                t2: triangle2.hypotenuse,
                match: Math.abs(triangle1.hypotenuse - triangle2.hypotenuse) < 1e-6
            },
            leg: {
                t1: triangle1.leg,
                t2: triangle2.leg,
                match: Math.abs(triangle1.leg - triangle2.leg) < 1e-6
            },
            note: 'Both triangles must be right triangles'
        };
    }

    verifyAASimilarity(triangle1, triangle2) {
        const angle3_t1 = 180 - triangle1.angle1 - triangle1.angle2;
        const angle3_t2 = 180 - triangle2.angle1 - triangle2.angle2;

        return {
            angle1Match: Math.abs(triangle1.angle1 - triangle2.angle1) < 1e-6,
            angle2Match: Math.abs(triangle1.angle2 - triangle2.angle2) < 1e-6,
            angle3Match: Math.abs(angle3_t1 - angle3_t2) < 1e-6,
            thirdAngleCalculation: {
                triangle1: angle3_t1,
                triangle2: angle3_t2
            }
        };
    }

    verifySASSimilarity(triangle1, triangle2, scaleFactor) {
        if (!scaleFactor) return { valid: false };

        const ratio1 = triangle1.side1 / triangle2.side1;
        const ratio2 = triangle1.side2 / triangle2.side2;

        return {
            angleMatch: Math.abs(triangle1.angle - triangle2.angle) < 1e-6,
            ratio1: ratio1,
            ratio2: ratio2,
            ratiosEqual: Math.abs(ratio1 - ratio2) < 1e-6,
            scaleFactor: scaleFactor
        };
    }

    verifySSSimilarity(sides1, sides2, scaleFactor) {
        if (!scaleFactor) return { valid: false };

        const ratios = sides1.map((side, i) => side / sides2[i]);

        return {
            ratios: ratios,
            allEqual: ratios.every(r => Math.abs(r - scaleFactor) < 1e-6),
            scaleFactor: scaleFactor
        };
    }

    verifyProportion(a, b, c, d) {
        const leftProduct = a * d;
        const rightProduct = b * c;
        const difference = Math.abs(leftProduct - rightProduct);

        return {
            proportion: `${a}/${b} = ${c}/${d}`,
            crossProducts: `${a} × ${d} = ${leftProduct}, ${b} × ${c} = ${rightProduct}`,
            difference: difference,
            valid: difference < 1e-6
        };
    }

    verifyGeometricMeanAltitude(segment1, segment2, altitude) {
        const altitudeSquared = Math.pow(altitude, 2);
        const product = segment1 * segment2;
        const difference = Math.abs(altitudeSquared - product);

        return {
            formula: 'h² = x·y',
            leftSide: `h² = ${altitude}² = ${altitudeSquared}`,
            rightSide: `x·y = ${segment1} × ${segment2} = ${product}`,
            difference: difference,
            valid: difference < 1e-6
        };
    }

    verifyGeometricMeanLeg(hypotenuse, adjacentSegment, leg) {
        const legSquared = Math.pow(leg, 2);
        const product = hypotenuse * adjacentSegment;
        const difference = Math.abs(legSquared - product);

        return {
            formula: 'leg² = hypotenuse × adjacent segment',
            leftSide: `leg² = ${leg}² = ${legSquared}`,
            rightSide: `${hypotenuse} × ${adjacentSegment} = ${product}`,
            difference: difference,
            valid: difference < 1e-6
        };
    }

    verifySideSplitter(seg1Part1, seg1Part2, seg2Part1, seg2Part2) {
        const ratio1 = seg1Part1 / seg1Part2;
        const ratio2 = seg2Part1 / seg2Part2;
        const difference = Math.abs(ratio1 - ratio2);

        return {
            theorem: 'Side-Splitter Theorem',
            ratio1: `${seg1Part1}/${seg1Part2} = ${ratio1.toFixed(4)}`,
            ratio2: `${seg2Part1}/${seg2Part2} = ${ratio2.toFixed(4)}`,
            difference: difference,
            valid: difference < 1e-4
        };
    }

    verifyShadowProblem(height1, shadow1, height2, shadow2) {
        const ratio1 = height1 / shadow1;
        const ratio2 = height2 / shadow2;
        const difference = Math.abs(ratio1 - ratio2);

        return {
            method: 'Similar triangles (constant sun angle)',
            ratio1: `${height1}/${shadow1} = ${ratio1.toFixed(4)}`,
            ratio2: `${height2}/${shadow2} = ${ratio2.toFixed(4)}`,
            difference: difference,
            valid: difference < 1e-4
        };
    }

    verifyMirrorProblem(height1, distance1, height2, distance2) {
        const ratio1 = height1 / distance1;
        const ratio2 = height2 / distance2;
        const difference = Math.abs(ratio1 - ratio2);

        return {
            method: 'Similar triangles (angle of incidence = angle of reflection)',
            ratio1: `${height1}/${distance1} = ${ratio1.toFixed(4)}`,
            ratio2: `${height2}/${distance2} = ${ratio2.toFixed(4)}`,
            difference: difference,
            valid: difference < 1e-4
        };
    }

    verifySimilarPolygons(polygon1, polygon2, isSimilar) {
        return {
            angleCheck: polygon1.angles.map((angle, i) => ({
                polygon1Angle: angle,
                polygon2Angle: polygon2.angles[i],
                difference: Math.abs(angle - polygon2.angles[i]),
                congruent: Math.abs(angle - polygon2.angles[i]) < 1e-6
            })),
            sideCheck: polygon1.sides.map((side, i) => ({
                polygon1Side: side,
                polygon2Side: polygon2.sides[i],
                ratio: side / polygon2.sides[i]
            })),
            isSimilar: isSimilar
        };
    }

    verifyAreaRatio(scaleFactor, area1, area2) {
        const expectedAreaRatio = Math.pow(scaleFactor, 2);
        const actualAreaRatio = area1 / area2;
        const difference = Math.abs(expectedAreaRatio - actualAreaRatio);

        return {
            linearScaleFactor: scaleFactor,
            expectedAreaRatio: expectedAreaRatio,
            actualAreaRatio: actualAreaRatio,
            difference: difference,
            valid: difference < 1e-6,
            formula: `k² = ${scaleFactor}² = ${expectedAreaRatio}`
        };
    }

    verifyPerimeterRatio(scaleFactor, perimeter1, perimeter2) {
        const expectedRatio = scaleFactor;
        const actualRatio = perimeter1 / perimeter2;
        const difference = Math.abs(expectedRatio - actualRatio);

        return {
            linearScaleFactor: scaleFactor,
            expectedPerimeterRatio: expectedRatio,
            actualPerimeterRatio: actualRatio,
            difference: difference,
            valid: difference < 1e-6
        };
    }

    // HELPER METHODS

    interpretScaleFactor(k) {
        if (k > 1) {
            return `Scaling up by factor of ${k.toFixed(4)} (enlargement)`;
        } else if (k < 1) {
            return `Scaling down by factor of ${k.toFixed(4)} (reduction)`;
        } else {
            return 'No scaling (figures are congruent)';
        }
    }

    generateCPCTCProofStructure(congruentTriangles, partToProve, method) {
        return {
            statements: [
                {
                    statement: `△${congruentTriangles.triangle1} ≅ △${congruentTriangles.triangle2}`,
                    reason: method || 'Given'
                },
                {
                    statement: `${partToProve} in △${congruentTriangles.triangle1} ≅ corresponding part in △${congruentTriangles.triangle2}`,
                    reason: 'CPCTC'
                }
            ],
            conclusion: `Therefore, ${partToProve} are congruent`
        };
    }

    // STEP GENERATION

    generateSimilarityCongruenceSteps(problem, solution) {
        let baseSteps = this.generateBaseSimilarityCongruenceSteps(problem, solution);

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

    generateBaseSimilarityCongruenceSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'sss_congruence':
                return this.generateSSSSteps(problem, solution);
            case 'sas_congruence':
                return this.generateSASSteps(problem, solution);
            case 'asa_congruence':
                return this.generateASASteps(problem, solution);
            case 'aas_congruence':
                return this.generateAASSteps(problem, solution);
            case 'hl_congruence':
                return this.generateHLSteps(problem, solution);
            case 'aa_similarity':
                return this.generateAASimilaritySteps(problem, solution);
            case 'sas_similarity':
                return this.generateSASSimilaritySteps(problem, solution);
            case 'sss_similarity':
                return this.generateSSSSimilaritySteps(problem, solution);
            case 'scale_factor':
                return this.generateScaleFactorSteps(problem, solution);
            case 'find_missing_side_similar':
                return this.generateMissingSideSteps(problem, solution);
            case 'geometric_mean_altitude':
            case 'geometric_mean_leg':
                return this.generateGeometricMeanSteps(problem, solution);
            case 'shadow_problem':
            case 'mirror_problem':
                return this.generateIndirectMeasurementSteps(problem, solution);
            default:
                return this.generateGenericSteps(problem, solution);
        }
    }

    generateSSSSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given sides',
            description: 'List all three sides of both triangles',
            expression: `Triangle 1: sides = [${solution.triangle1.sides.join(', ')}]
Triangle 2: sides = [${solution.triangle2.sides.join(', ')}]`,
            reasoning: 'SSS congruence requires all three pairs of sides to be equal',
            visualHint: 'Mark congruent sides with tick marks on the diagram',
            algebraicRule: 'SSS Postulate',
            goalStatement: 'Check if all three pairs of corresponding sides are congruent'
        });

        steps.push({
            stepNumber: 2,
            step: 'Sort sides in order',
            description: 'Arrange sides from smallest to largest for easy comparison',
            beforeExpression: `Triangle 1: [${solution.triangle1.sides.join(', ')}]
Triangle 2: [${solution.triangle2.sides.join(', ')}]`,
            afterExpression: `Triangle 1: [${solution.sortedSides1.join(', ')}]
Triangle 2: [${solution.sortedSides2.join(', ')}]`,
            reasoning: 'Sorting helps identify corresponding sides correctly',
            visualHint: 'Match shortest to shortest, longest to longest'
        });

        steps.push({
            stepNumber: 3,
            step: 'Compare corresponding sides',
            description: 'Check each pair of corresponding sides for congruence',
            verification: solution.verification,
            reasoning: 'Each pair must be equal (within tolerance) for SSS congruence',
            algebraicRule: 'If AB ≅ DE, BC ≅ EF, and AC ≅ DF, then △ABC ≅ △DEF'
        });

        steps.push({
            stepNumber: 4,
            step: 'State conclusion',
            description: solution.isCongruent ? 
                'All three pairs of sides are congruent' : 
                'Not all sides are congruent',
            expression: solution.isCongruent ? 
                '△ABC ≅ △DEF by SSS' : 
                'Triangles are NOT congruent',
            reasoning: solution.explanation,
            finalAnswer: true,
            conclusion: solution.isCongruent ? 'Triangles are congruent by SSS' : 'Cannot prove congruence'
        });

        return steps;
    }

    generateSASSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List the two sides and included angle from both triangles',
            expression: `Triangle 1: side₁ = ${solution.triangle1.side1}, angle = ${solution.triangle1.angle}°, side₂ = ${solution.triangle1.side2}
Triangle 2: side₁ = ${solution.triangle2.side1}, angle = ${solution.triangle2.angle}°, side₂ = ${solution.triangle2.side2}`,
            reasoning: 'SAS requires two sides and the angle BETWEEN them',
            visualHint: 'The angle must be formed by the two sides (included angle)',
            criticalWarning: 'The angle MUST be between the two sides, not opposite one of them'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify first side',
            description: `Compare first sides: ${solution.triangle1.side1} vs ${solution.triangle2.side1}`,
            result: solution.side1Match ? 'Sides are congruent ✓' : 'Sides are NOT congruent ✗',
            reasoning: 'First condition of SAS'
        });

        steps.push({
            stepNumber: 3,
            step: 'Verify included angle',
            description: `Compare included angles: ${solution.triangle1.angle}° vs ${solution.triangle2.angle}°`,
            result: solution.angleMatch ? 'Angles are congruent ✓' : 'Angles are NOT congruent ✗',
            reasoning: 'Second condition of SAS - must be the angle between the two sides'
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify second side',
            description: `Compare second sides: ${solution.triangle1.side2} vs ${solution.triangle2.side2}`,
            result: solution.side2Match ? 'Sides are congruent ✓' : 'Sides are NOT congruent ✗',
            reasoning: 'Third condition of SAS'
        });

        steps.push({
            stepNumber: 5,
            step: 'State conclusion',
            description: solution.isCongruent ?
                'Two sides and included angle are congruent' :
                'SAS conditions not satisfied',
            expression: solution.isCongruent ?
                '△ABC ≅ △DEF by SAS' :
                'Triangles are NOT congruent by SAS',
            reasoning: solution.explanation,
            finalAnswer: true
        });

        return steps;
    }

    generateASASteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List two angles and the included side',
            expression: `Triangle 1: angle₁ = ${solution.triangle1.angle1}°, side = ${solution.triangle1.side}, angle₂ = ${solution.triangle1.angle2}°
Triangle 2: angle₁ = ${solution.triangle2.angle1}°, side = ${solution.triangle2.side}, angle₂ = ${solution.triangle2.angle2}°`,
            reasoning: 'ASA requires two angles and the side BETWEEN them',
            visualHint: 'The side must connect the vertices of the two angles'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify angles and side',
            description: 'Check each component for congruence',
            verification: {
                angle1: solution.angle1Match ? '✓' : '✗',
                includedSide: solution.sideMatch ? '✓' : '✗',
                angle2: solution.angle2Match ? '✓' : '✗'
            },
            reasoning: 'All three parts must be congruent for ASA'
        });

        steps.push({
            stepNumber: 3,
            step: 'State conclusion',
            description: solution.isCongruent ?
                'Two angles and included side are congruent' :
                'ASA conditions not satisfied',
            expression: solution.isCongruent ?
                '△ABC ≅ △DEF by ASA' :
                'Cannot prove congruence by ASA',
            finalAnswer: true
        });

        return steps;
    }

    generateAASSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List two angles and a non-included side',
            expression: `Triangle 1: angle₁ = ${solution.triangle1.angle1}°, angle₂ = ${solution.triangle1.angle2}°, side = ${solution.triangle1.side}
Triangle 2: angle₁ = ${solution.triangle2.angle1}°, angle₂ = ${solution.triangle2.angle2}°, side = ${solution.triangle2.side}`,
            reasoning: 'AAS uses two angles and a side NOT between them',
            visualHint: 'The side is opposite one of the angles, not between them'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify conditions',
            description: 'Check angles and non-included side',
            verification: {
                angle1: solution.angle1Match ? '✓' : '✗',
                angle2: solution.angle2Match ? '✓' : '✗',
                side: solution.sideMatch ? '✓' : '✗'
            },
            reasoning: 'All conditions must be met for AAS congruence'
        });

        steps.push({
            stepNumber: 3,
            step: 'State conclusion',
            expression: solution.isCongruent ?
                '△ABC ≅ △DEF by AAS' :
                'Cannot prove congruence by AAS',
            finalAnswer: true
        });

        return steps;
    }

    generateHLSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Verify right triangles',
            description: 'Confirm both triangles are right triangles',
            reasoning: 'HL theorem applies ONLY to right triangles',
            criticalWarning: 'This method cannot be used for non-right triangles'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify hypotenuse and leg',
            description: 'List the hypotenuse and one leg from each triangle',
            expression: `Triangle 1: hypotenuse = ${solution.triangle1.hypotenuse}, leg = ${solution.triangle1.leg}
Triangle 2: hypotenuse = ${solution.triangle2.hypotenuse}, leg = ${solution.triangle2.leg}`,
            reasoning: 'HL requires the hypotenuse and any one leg to be congruent'
        });

        steps.push({
            stepNumber: 3,
            step: 'Verify congruence',
            description: 'Check if hypotenuse and leg are congruent',
            verification: {
                hypotenuse: solution.hypotenuseMatch ? '✓' : '✗',
                leg: solution.legMatch ? '✓' : '✗'
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'State conclusion',
            expression: solution.isCongruent ?
                '△ABC ≅ △DEF by HL' :
                'Cannot prove congruence by HL',
            finalAnswer: true
        });

        return steps;
    }

    generateAASimilaritySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given angles',
            description: 'List two angles from each triangle',
            expression: `Triangle 1: ∠1 = ${solution.triangle1.angle1}°, ∠2 = ${solution.triangle1.angle2}°
Triangle 2: ∠1 = ${solution.triangle2.angle1}°, ∠2 = ${solution.triangle2.angle2}°`,
            reasoning: 'AA similarity requires only two pairs of congruent angles',
            visualHint: 'Look for corresponding angles, vertical angles, or parallel line angles'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify angle congruence',
            description: 'Check if the two pairs of angles are congruent',
            verification: {
                angle1Pair: solution.angle1Match ? 'Congruent ✓' : 'Not congruent ✗',
                angle2Pair: solution.angle2Match ? 'Congruent ✓' : 'Not congruent ✗'
            },
            reasoning: 'If two angles match, the third automatically matches (angle sum = 180°)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate third angle',
            description: 'Find the third angle in each triangle',
            expression: `Triangle 1: ∠3 = 180° - ${solution.triangle1.angle1}° - ${solution.triangle1.angle2}° = ${solution.triangle1.angle3}°
Triangle 2: ∠3 = 180° - ${solution.triangle2.angle1}° - ${solution.triangle2.angle2}° = ${solution.triangle2.angle3}°`,
            reasoning: 'Triangle angle sum theorem: all angles add to 180°',
            algebraicRule: '∠A + ∠B + ∠C = 180°'
        });

        steps.push({
            stepNumber: 4,
            step: 'State conclusion',
            description: solution.isSimilar ?
                'Two pairs of angles are congruent, therefore triangles are similar' :
                'Angles do not match - triangles are not similar',
            expression: solution.isSimilar ?
                '△ABC ~ △DEF by AA' :
                'Cannot prove similarity',
            reasoning: solution.explanation,
            finalAnswer: true,
            implication: solution.isSimilar ? 'All corresponding sides are proportional' : null
        });

        return steps;
    }

    generateSASSimilaritySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'List two sides and the included angle',
            expression: `Triangle 1: side₁ = ${solution.triangle1.side1}, ∠ = ${solution.triangle1.angle}°, side₂ = ${solution.triangle1.side2}
Triangle 2: side₁ = ${solution.triangle2.side1}, ∠ = ${solution.triangle2.angle}°, side₂ = ${solution.triangle2.side2}`,
            reasoning: 'SAS~ requires two proportional sides and congruent included angle'
        });

        steps.push({
            stepNumber: 2,
            step: 'Verify angle congruence',
            description: 'Check if included angles are equal',
            result: solution.angleMatch ? 'Angles are congruent ✓' : 'Angles NOT congruent ✗',
            reasoning: 'The included angle must be congruent for SAS~ similarity'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate side ratios',
            description: 'Find the ratio of corresponding sides',
            calculation: `Ratio 1: ${solution.triangle1.side1}/${solution.triangle2.side1} = ${solution.ratio1.toFixed(4)}
Ratio 2: ${solution.triangle1.side2}/${solution.triangle2.side2} = ${solution.ratio2.toFixed(4)}`,
            reasoning: 'For similarity, these ratios must be equal'
        });

        steps.push({
            stepNumber: 4,
            step: 'Compare ratios',
            description: 'Check if the two ratios are equal',
            result: solution.sidesProportional ? 'Ratios are equal ✓' : 'Ratios NOT equal ✗',
            reasoning: solution.sidesProportional ?
                `Both ratios equal ${solution.scaleFactor.toFixed(4)}` :
                'Sides are not proportional'
        });

        steps.push({
            stepNumber: 5,
            step: 'State conclusion',
            expression: solution.isSimilar ?
                `△ABC ~ △DEF by SAS~ with scale factor k = ${solution.scaleFactor.toFixed(4)}` :
                'Cannot prove similarity by SAS~',
            finalAnswer: true
        });

        return steps;
    }

    generateSSSSimilaritySteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'List all sides',
            description: 'Identify all three sides of both triangles',
            expression: `Triangle 1: [${solution.triangle1.sides.join(', ')}]
Triangle 2: [${solution.triangle2.sides.join(', ')}]`,
            reasoning: 'SSS~ requires all three pairs of sides to be proportional'
        });

        steps.push({
            stepNumber: 2,
            step: 'Sort sides',
            description: 'Arrange from smallest to largest',
            beforeExpression: `Triangle 1: [${solution.triangle1.sides.join(', ')}]`,
            afterExpression: `Sorted: [${solution.sortedSides1.join(', ')}]`,
            reasoning: 'Sorting ensures we compare corresponding sides correctly'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate all ratios',
            description: 'Find ratio for each pair of corresponding sides',
            calculation: `Ratio 1: ${solution.sortedSides1[0]}/${solution.sortedSides2[0]} = ${solution.ratio1.toFixed(4)}
Ratio 2: ${solution.sortedSides1[1]}/${solution.sortedSides2[1]} = ${solution.ratio2.toFixed(4)}
Ratio 3: ${solution.sortedSides1[2]}/${solution.sortedSides2[2]} = ${solution.ratio3.toFixed(4)}`,
            reasoning: 'All three ratios must be equal for SSS~ similarity'
        });

        steps.push({
            stepNumber: 4,
            step: 'Compare ratios',
            description: 'Check if all three ratios are equal',
            result: solution.allProportional ?
                `All ratios equal ${solution.scaleFactor.toFixed(4)} ✓` :
                'Ratios are not all equal ✗',
            reasoning: solution.allProportional ?
                'Sides are proportional' :
                'Sides are not proportional'
        });

        steps.push({
            stepNumber: 5,
            step: 'State conclusion',
            expression: solution.isSimilar ?
                `△ABC ~ △DEF by SSS~ with scale factor k = ${solution.scaleFactor.toFixed(4)}` :
                'Triangles are not similar by SSS~',
            finalAnswer: true
        });

        return steps;
    }

    generateScaleFactorSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify measurements',
            description: 'Note the corresponding measurements from both figures',
            expression: `Figure 1: ${solution.figure1Measurement}
Figure 2: ${solution.figure2Measurement}
Measurement type: ${solution.measurementType}`,
            reasoning: 'Scale factor relates corresponding linear dimensions'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate linear scale factor',
            description: 'Divide larger measurement by smaller (or first by second)',
            calculation: `k = ${solution.figure1Measurement} / ${solution.figure2Measurement} = ${solution.linearScaleFactor.toFixed(4)}`,
            reasoning: 'Scale factor k = new/original for linear dimensions',
            interpretation: solution.interpretation
        });

        if (solution.areaScaleFactor) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate area scale factor',
                description: 'Square the linear scale factor',
                calculation: `k² = (${solution.linearScaleFactor.toFixed(4)})² = ${solution.areaScaleFactor.toFixed(4)}`,
                reasoning: 'Area scales by the square of linear scale factor',
                algebraicRule: 'Area ratio = k²'
            });
        }

        if (solution.volumeScaleFactor) {
            steps.push({
                stepNumber: 4,
                step: 'Calculate volume scale factor',
                description: 'Cube the linear scale factor',
                calculation: `k³ = (${solution.linearScaleFactor.toFixed(4)})³ = ${solution.volumeScaleFactor.toFixed(4)}`,
                reasoning: 'Volume scales by the cube of linear scale factor',
                algebraicRule: 'Volume ratio = k³'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Summary',
            description: 'Scale factors for different dimensions',
            summary: {
                linear: solution.linearScaleFactor.toFixed(4),
                area: solution.areaScaleFactor?.toFixed(4),
                volume: solution.volumeScaleFactor?.toFixed(4)
            },
            finalAnswer: true
        });

        return steps;
    }

    generateMissingSideSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Set up proportion',
            description: 'Use corresponding sides to create a proportion',
            expression: solution.proportion,
            reasoning: 'In similar triangles, corresponding sides are proportional',
            visualHint: 'Match sides based on their position in the triangles'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate scale factor',
            description: 'Find the ratio using known corresponding sides',
            calculation: `k = ${solution.knownPair.triangle1} / ${solution.knownPair.triangle2} = ${solution.scaleFactor.toFixed(4)}`,
            reasoning: 'This ratio applies to all pairs of corresponding sides'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find missing side',
            description: 'Apply scale factor to find unknown side',
            calculation: `Missing side = ${solution.knownSideTriangle1} / ${solution.scaleFactor.toFixed(4)} = ${solution.missingSide.toFixed(4)}`,
            reasoning: 'Use the proportion: known₁/known₂ = known₃/unknown',
            algebraicRule: 'Cross multiply and solve: ad = bc'
        });

        steps.push({
            stepNumber: 4,
            step: 'Verify solution',
            description: 'Check that the proportion is satisfied',
            verification: solution.verification,
            finalAnswer: true,
            result: `Missing side = ${solution.missingSide.toFixed(4)}`
        });

        return steps;
    }

    generateGeometricMeanSteps(problem, solution) {
        const steps = [];

        if (problem.type === 'geometric_mean_altitude') {
            steps.push({
                stepNumber: 1,
                step: 'Identify the theorem',
                description: 'Altitude to hypotenuse theorem',
                expression: solution.formula,
                reasoning: 'In a right triangle, altitude to hypotenuse creates geometric mean relationship',
                visualHint: 'The altitude divides the hypotenuse into two segments'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify segments',
                description: 'Note the two segments of the hypotenuse',
                expression: `Segment 1 (x) = ${solution.segment1}
Segment 2 (y) = ${solution.segment2}`,
                reasoning: 'These are the segments created by the altitude'
            });

            steps.push({
                stepNumber: 3,
                step: 'Apply geometric mean formula',
                description: 'Calculate altitude using h² = x·y',
                calculation: `h² = ${solution.segment1} × ${solution.segment2} = ${solution.segment1 * solution.segment2}
h = √${solution.segment1 * solution.segment2} = ${solution.altitude.toFixed(4)}`,
                reasoning: 'Altitude is the geometric mean of the two segments',
                algebraicRule: 'h = √(x·y)'
            });
        } else {
            steps.push({
                stepNumber: 1,
                step: 'Identify the theorem',
                description: 'Leg theorem for right triangles',
                expression: solution.formula,
                reasoning: 'Each leg is the geometric mean of hypotenuse and adjacent segment'
            });

            steps.push({
                stepNumber: 2,
                step: 'Identify measurements',
                description: 'Note hypotenuse and adjacent segment',
                expression: `Hypotenuse = ${solution.hypotenuse}
Adjacent segment = ${solution.adjacentSegment}`,
                reasoning: 'Adjacent segment is the part of hypotenuse next to the leg'
            });

            steps.push({
                stepNumber: 3,
                step: 'Apply leg theorem',
                description: 'Calculate leg using leg² = hypotenuse × adjacent segment',
                calculation: `leg² = ${solution.hypotenuse} × ${solution.adjacentSegment} = ${solution.hypotenuse * solution.adjacentSegment}
leg = √${solution.hypotenuse * solution.adjacentSegment} = ${solution.leg.toFixed(4)}`,
                reasoning: 'Leg is geometric mean of hypotenuse and its adjacent segment',
                algebraicRule: 'leg = √(hypotenuse × adjacent segment)'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Verify solution',
            description: 'Check the geometric mean relationship',
            verification: solution.verification,
            finalAnswer: true
        });

        return steps;
    }

    generateIndirectMeasurementSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the scenario',
            description: problem.type === 'shadow_problem' ?
                'Shadow problem - sun creates similar triangles' :
                'Mirror problem - reflection creates similar triangles',
            reasoning: problem.type === 'shadow_problem' ?
                'At the same time, sun rays are parallel, creating equal angles' :
                'Angle of incidence equals angle of reflection, creating equal angles',
            visualHint: 'Draw a diagram showing both objects and their measurements'
        });

        steps.push({
            stepNumber: 2,
            step: 'List known measurements',
            description: 'Identify what we know and what we need to find',
            expression: problem.type === 'shadow_problem' ?
                `Known object: height = ${solution.knownObject.height}, shadow = ${solution.knownObject.shadow}
Unknown object: shadow = ${solution.unknownObject.shadow}, height = ?` :
                `Person: height = ${solution.person.height}, distance to mirror = ${solution.person.distanceToMirror}
Object: distance from mirror = ${solution.object.distanceFromMirror}, height = ?`,
            reasoning: 'We need one complete set and part of the second set'
        });

        steps.push({
            stepNumber: 3,
            step: 'Set up proportion',
            description: 'Use similar triangles to create proportion',
            expression: solution.proportion,
            reasoning: solution.method,
            algebraicRule: 'height₁/base₁ = height₂/base₂'
        });

        steps.push({
            stepNumber: 4,
            step: 'Solve for unknown height',
            description: 'Cross multiply and solve',
            calculation: problem.type === 'shadow_problem' ?
                `height = (${solution.knownObject.height} × ${solution.unknownObject.shadow}) / ${solution.knownObject.shadow}
height = ${solution.solution.toFixed(4)}` :
                `height = (${solution.person.height} × ${solution.object.distanceFromMirror}) / ${solution.person.distanceToMirror}
height = ${solution.solution.toFixed(4)}`,
            reasoning: 'Cross multiply: height₁ × base₂ = height₂ × base₁',
            algebraicRule: 'If a/b = c/d, then ad = bc'
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify solution',
            description: 'Check that the proportion is satisfied',
            verification: solution.verification,
            finalAnswer: true,
            result: `Unknown height = ${solution.solution.toFixed(4)}`
        });

        return steps;
    }

    generateGenericSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Analyze problem',
            description: 'Identify the type of similarity or congruence problem',
            expression: problem.type || 'Problem type',
            reasoning: 'Apply appropriate theorems and methods',
            solution: solution
        }];
    }

    // STEP ENHANCEMENT METHODS (reused from linear code with adaptations)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                algebraic: this.getAlgebraicExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

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

    // EXPLANATION HELPER METHODS

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify given sides': 'We start by carefully noting all the measurements we have. This is like taking inventory before a journey.',
            'Compare corresponding sides': 'Corresponding sides are like matching pairs - they occupy the same relative position in their triangles.',
            'Verify angle congruence': 'Angles are congruent when they have the same measure, like two identical corners.',
            'Calculate side ratios': 'Ratios compare sizes proportionally - they tell us how many times bigger or smaller one measurement is than another.',
            'Set up proportion': 'A proportion states that two ratios are equal - it\'s an equation of relationships.',
            'Apply geometric mean formula': 'The geometric mean is the middle value when two numbers are related multiplicatively.'
        };

        return conceptualExplanations[step.step] || 'This step advances our solution by applying geometric principles.';
    }

    getProceduralExplanation(step) {
        if (step.calculation) {
            return `1. Write down the given values
2. Substitute into the formula
3. Perform the calculation
4. Simplify the result`;
        }
        return 'Follow the geometric procedure systematically, checking each condition carefully.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'sss_congruence': 'Picture two triangles with all sides matching perfectly - they would overlap exactly if superimposed.',
            'aa_similarity': 'Imagine two triangles with the same angles but different sizes - like a small and large version of the same shape.',
            'scale_factor': 'Think of a photocopy machine changing the size - all dimensions change by the same ratio.',
            'geometric_mean_altitude': 'The altitude creates a vertical line that connects to the hypotenuse, forming a right angle.',
            'shadow_problem': 'Visualize the sun\'s rays as parallel lines hitting objects at the same angle, casting shadows.'
        };

        return visualExplanations[problem.type] || 'Visualize the geometric relationships in the diagram.';
    }

    getAlgebraicExplanation(step) {
        const algebraicRules = {
            'Compare corresponding sides': 'If AB = DE, BC = EF, and CA = FD, then △ABC ≅ △DEF',
            'Calculate side ratios': 'For similar triangles: AB/DE = BC/EF = CA/FD = k (scale factor)',
            'Set up proportion': 'Cross multiplication: if a/b = c/d, then ad = bc',
            'Apply geometric mean formula': 'Geometric mean of a and b: √(ab)',
            'Verify angle congruence': 'Sum of angles in triangle = 180°'
        };

        return algebraicRules[step.step] || 'Apply standard geometric theorems and postulates.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple geometric terms',
                detail: 'essential information only',
                format: 'short, clear statements'
            },
            intermediate: {
                vocabulary: 'standard geometry terminology',
                detail: 'main concepts with explanations',
                format: 'structured step-by-step'
            },
            detailed: {
                vocabulary: 'full mathematical terminology',
                detail: 'comprehensive explanations with proofs',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery',
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
            connection: `Building on step ${stepIndex}, we now ${step.description.toLowerCase()}`,
            progression: 'Each step brings us closer to proving the geometric relationship',
            relationship: 'The previous work sets up the foundation for this step'
        };
    }

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'completed ' + currentStep.step}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary to ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.description.toLowerCase()} to continue our proof`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `verify the next condition for the theorem`;
    }

    explainStepBenefit(nextStep) {
        return `getting us closer to completing the proof`;
    }

    generatePreventionTips(step, problemType) {
        const tips = {
            'Identify given sides': [
                'Label all sides clearly on your diagram',
                'Use tick marks to show equal sides',
                'Check that you\'re comparing corresponding sides'
            ],
            'Calculate side ratios': [
                'Keep the order consistent (large/small or small/large)',
                'Write ratios as fractions before calculating',
                'Check that ratios are approximately equal'
            ],
            'Set up proportion': [
                'Make sure sides are truly corresponding',
                'Keep numerators from same triangle',
                'Double-check your cross multiplication'
            ]
        };

        return tips[step.step] || ['Check your work carefully', 'Verify each measurement'];
    }

    generateCheckPoints(step) {
        return [
            'Have I identified all necessary information?',
            'Are my calculations correct?',
            'Does my answer make geometric sense?',
            'Have I stated the conclusion properly?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warnings = {
            sas_congruence: step.step === 'Verify included angle' ?
                ['The angle MUST be between the two sides - this is critical!'] : [],
            sas_similarity: step.step === 'Compare ratios' ?
                ['Ratios must be EXACTLY equal (within tolerance) for similarity'] : [],
            hl_congruence: step.step === 'Verify right triangles' ?
                ['HL only works for RIGHT triangles - verify right angles first!'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questions = {
            'Compare corresponding sides': 'Have I matched the sides correctly based on their position?',
            'Calculate side ratios': 'Are all my ratios calculated in the same order?',
            'Verify angle congruence': 'Did I check that the angles are actually corresponding?',
            'Set up proportion': 'Are the corresponding sides in the correct positions in my proportion?'
        };

        return questions[step.step] || 'Does this step make sense and advance the solution?';
    }

    describeExpectedResult(step) {
        const expectations = {
            'Compare corresponding sides': 'All three pairs should be equal for SSS congruence',
            'Calculate side ratios': 'All ratios should be equal for SSS~ similarity',
            'Verify angle congruence': 'The angles should have the same measure',
            'State conclusion': 'A clear statement of congruence or similarity with proper notation'
        };

        return expectations[step.step] || 'The step should clearly advance the proof';
    }

    generateTroubleshootingTips(step) {
        return [
            'Redraw the diagram with all markings',
            'Check that you\'re using corresponding parts',
            'Verify your arithmetic',
            'Review the theorem requirements'
        ];
    }

    breakIntoSubSteps(step) {
        if (step.calculation) {
            return [
                'Write down the formula or proportion',
                'Substitute the known values',
                'Perform the arithmetic operations',
                'Simplify to get the final answer',
                'Check that the answer is reasonable'
            ];
        }

        return ['Identify what\'s given', 'Determine what\'s needed', 'Apply the appropriate method'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try a similar problem with different measurements',
            practiceHint: 'Start with simpler values before tackling complex decimals',
            extension: 'Once comfortable, try proving similarity and then finding missing sides'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information do I have about these figures?',
            goal: 'What am I trying to prove or find?',
            strategy: 'Which theorem or postulate applies here?',
            execute: 'How do I apply this method correctly?',
            verify: 'Does my conclusion satisfy all conditions?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing which theorem to apply',
            'Determining which parts are corresponding',
            'Deciding the order for setting up proportions'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternatives = {
            'aa_similarity': [
                'Could use SAS~ if we knew sides',
                'Could use SSS~ if all three sides were known',
                'AA is often the most efficient method'
            ],
            'find_missing_side_similar': [
                'Could use scale factor method',
                'Could use direct proportion',
                'Could use multiple proportions and average'
            ]
        };

        return alternatives[problem.type] || ['This is the standard approach for this problem type'];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'Compare corresponding sides': ['Understanding of congruence', 'Ability to measure or compare lengths'],
            'Calculate side ratios': ['Division of real numbers', 'Understanding of ratios and proportions'],
            'Set up proportion': ['Cross multiplication', 'Solving equations'],
            'Verify angle congruence': ['Angle measurement', 'Understanding of angle equality']
        };

        return prerequisites[step.step] || ['Basic geometric knowledge'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify given sides': ['side', 'triangle', 'congruent', 'corresponding'],
            'Compare corresponding sides': ['congruent', 'equal', 'corresponding', 'sides'],
            'Calculate side ratios': ['ratio', 'proportion', 'scale factor', 'similar'],
            'Verify angle congruence': ['angle', 'congruent', 'measure', 'corresponding']
        };

        return vocabulary[step.step] || [];
    }

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'congruent': 'same size and shape',
                    'corresponding': 'matching',
                    'proportional': 'having the same ratio',
                    'scale factor': 'size ratio',
                    'geometric mean': 'middle value'
                }
            },
            intermediate: {
                replacements: {
                    'congruent': 'congruent',
                    'corresponding': 'corresponding',
                    'proportional': 'proportional',
                    'scale factor': 'scale factor',
                    'geometric mean': 'geometric mean'
                }
            },
            detailed: {
                replacements: {
                    'congruent': 'congruent (equal in all respects)',
                    'corresponding': 'corresponding (matching positions)',
                    'proportional': 'proportional (equal ratios)',
                    'scale factor': 'scale factor (constant of proportionality)',
                    'geometric mean': 'geometric mean (√(ab) for values a and b)'
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

    // GRAPH DATA GENERATION

    generateSimilarityCongruenceGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        // For visual problems, generate diagram data
        if (type.includes('similarity') || type.includes('congruence')) {
            this.graphData = {
                type: type,
                showDiagram: true,
                triangles: this.extractTriangleData()
            };
        }
    }

    extractTriangleData() {
        if (!this.currentSolution.triangle1) return null;

        return {
            triangle1: this.currentSolution.triangle1,
            triangle2: this.currentSolution.triangle2,
            scaleFactor: this.currentSolution.scaleFactor,
            isCongruent: this.currentSolution.isCongruent,
            isSimilar: this.currentSolution.isSimilar
        };
    }

    // WORKBOOK GENERATION

    generateSimilarityCongruenceWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Similarity & Congruence Mathematical Workbook',
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
                ['Problem Type', this.similarityCongruenceTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Category', this.similarityCongruenceTypes[this.currentProblem.type]?.category || 'N/A'],
                ['Description', this.currentProblem.scenario || this.similarityCongruenceTypes[this.currentProblem.type]?.description || 'N/A']
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            stepsData.push(['Step ' + step.stepNumber, step.description]);

            if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            if (step.criticalWarning) {
                stepsData.push(['⚠️ Warning', step.criticalWarning]);
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ Final Answer', step.result || step.expression || 'See conclusion']);
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
        const category = this.similarityCongruenceTypes[type]?.category;

        const concepts = {
            triangle_congruence: 'Congruent triangles have equal corresponding sides and angles. Five postulates: SSS, SAS, ASA, AAS, HL.',
            triangle_similarity: 'Similar triangles have equal corresponding angles and proportional sides. Three theorems: AA, SAS~, SSS~.',
            scale_factor: 'Scale factor is the constant ratio between corresponding dimensions of similar figures.',
            geometric_mean: 'In right triangles, altitude to hypotenuse creates geometric mean relationships.',
            cpctc: 'Once triangles are proven congruent, all corresponding parts are congruent (CPCTC).'
        };

        return {
            title: 'Key Concepts',
            type: 'lesson',
            data: [
                ['Topic', this.similarityCongruenceTypes[type]?.name || type],
                ['Category', category || 'Geometry'],
                ['Key Concept', concepts[category] || 'Apply geometric theorems to prove relationships'],
                ['Main Goal', 'Prove triangles congruent or similar, or find missing measurements']
            ]
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        if (this.currentSolution.isCongruent !== undefined) {
            solutionData.push(['Congruent?', this.currentSolution.isCongruent ? 'Yes ✓' : 'No']);
            if (this.currentSolution.postulate) {
                solutionData.push(['Method', this.currentSolution.postulate]);
            }
        }

        if (this.currentSolution.isSimilar !== undefined) {
            solutionData.push(['Similar?', this.currentSolution.isSimilar ? 'Yes ✓' : 'No']);
            if (this.currentSolution.theorem) {
                solutionData.push(['Method', this.currentSolution.theorem]);
            }
            if (this.currentSolution.scaleFactor) {
                solutionData.push(['Scale Factor', this.currentSolution.scaleFactor.toFixed(4)]);
            }
        }

        if (this.currentSolution.solution !== undefined) {
            solutionData.push(['Solution', this.currentSolution.solution.toFixed(4)]);
        }

        if (this.currentSolution.missingSide !== undefined) {
            solutionData.push(['Missing Side', this.currentSolution.missingSide.toFixed(4)]);
        }

        if (this.currentSolution.altitude !== undefined) {
            solutionData.push(['Altitude', this.currentSolution.altitude.toFixed(4)]);
        }

        if (this.currentSolution.leg !== undefined) {
            solutionData.push(['Leg', this.currentSolution.leg.toFixed(4)]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData.length > 0 ? solutionData : [['Result', 'See steps for details']]
        };
    }

    createAnalysisSection() {
        const { type } = this.currentProblem;

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Problem Type', this.similarityCongruenceTypes[type]?.name || type],
                ['Steps Used', this.solutionSteps?.length || 0],
                ['Explanation Level', this.explanationLevel],
                ['Method', this.currentSolution?.postulate || this.currentSolution?.theorem || 'Geometric analysis']
            ]
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']); // Spacing

        if (this.currentSolution.verification) {
            const verification = this.currentSolution.verification;

            if (Array.isArray(verification)) {
                // SSS verification format
                verification.forEach((v, i) => {
                    verificationData.push([
                        `Pair ${i + 1}`,
                        `${v.side1} vs ${v.side2}: ${v.congruent ? '✓ Equal' : '✗ Not equal'}`
                    ]);
                });
            } else if (typeof verification === 'object') {
                // Other verification formats
                Object.keys(verification).forEach(key => {
                    const value = verification[key];
                    if (typeof value === 'object' && value.match !== undefined) {
                        verificationData.push([
                            key,
                            `${value.t1} vs ${value.t2}: ${value.match ? '✓' : '✗'}`
                        ]);
                    } else if (typeof value === 'boolean') {
                        verificationData.push([key, value ? '✓ Verified' : '✗ Not verified']);
                    } else {
                        verificationData.push([key, String(value)]);
                    }
                });
            }
        }

        if (verificationData.length <= 2) {
            verificationData.push(['Status', 'Verification complete - see solution steps']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const category = this.similarityCongruenceTypes[type]?.category;
        const notes = this.generatePedagogicalNotesSimilarity(category || type);

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
        const category = this.similarityCongruenceTypes[type]?.category;
        const alternatives = this.generateAlternativeMethodsSimilarity(category || type);

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

    generatePedagogicalNotesSimilarity(category) {
        const pedagogicalDatabase = {
            triangle_congruence: {
                objectives: [
                    'Identify and apply congruence postulates',
                    'Prove triangles congruent using SSS, SAS, ASA, AAS, or HL',
                    'State congruence with proper vertex correspondence'
                ],
                keyConcepts: [
                    'Congruence means same size and shape',
                    'Five postulates for triangle congruence',
                    'Corresponding parts notation'
                ],
                prerequisites: [
                    'Understanding of triangles and their parts',
                    'Ability to identify corresponding parts',
                    'Basic geometric notation'
                ],
                commonDifficulties: [
                    'Mixing up congruence postulates',
                    'Incorrect vertex correspondence',
                    'Confusing congruence with similarity'
                ],
                extensions: [
                    'CPCTC applications',
                    'Overlapping triangles',
                    'Geometric proofs'
                ],
                assessment: [
                    'Check correct postulate identification',
                    'Verify proper notation usage',
                    'Test with varied triangle orientations'
                ]
            },
            triangle_similarity: {
                objectives: [
                    'Identify and apply similarity theorems',
                    'Prove triangles similar using AA, SAS~, or SSS~',
                    'Calculate scale factors and missing sides'
                ],
                keyConcepts: [
                    'Similarity means same shape, different size',
                    'Three theorems for triangle similarity',
                    'Proportional sides and scale factor'
                ],
                prerequisites: [
                    'Understanding of ratios and proportions',
                    'Triangle congruence postulates',
                    'Cross multiplication'
                ],
                commonDifficulties: [
                    'Setting up proportions incorrectly',
                    'Confusing similarity with congruence',
                    'Scale factor calculation errors'
                ],
                extensions: [
                    'Indirect measurement applications',
                    'Area and volume ratios',
                    'Similar polygons'
                ],
                assessment: [
                    'Check proportion setup accuracy',
                    'Verify scale factor understanding',
                    'Test with real-world applications'
                ]
            },
            scale_factor: {
                objectives: [
                    'Calculate scale factors between similar figures',
                    'Apply scale factors to find missing dimensions',
                    'Understand relationship between linear, area, and volume scale factors'
                ],
                keyConcepts: [
                    'Scale factor relates corresponding dimensions',
                    'Area scales by k²',
                    'Volume scales by k³'
                ],
                prerequisites: [
                    'Understanding of ratios',
                    'Exponent rules',
                    'Similar figures concept'
                ],
                commonDifficulties: [
                    'Confusing linear with area scale factors',
                    'Dividing in wrong order',
                    'Not squaring for area calculations'
                ],
                extensions: [
                    'Map scales and models',
                    'Dimensional analysis',
                    'Real-world scaling problems'
                ],
                assessment: [
                    'Test with various measurement types',
                    'Check understanding of k² and k³',
                    'Apply to practical scenarios'
                ]
            },
            geometric_mean: {
                objectives: [
                    'Apply altitude and leg theorems',
                    'Calculate geometric means',
                    'Understand similar triangles within right triangles'
                ],
                keyConcepts: [
                    'Altitude to hypotenuse creates similar triangles',
                    'Geometric mean formulas: h² = xy and leg² = c·segment',
                    'Three similar triangles in the configuration'
                ],
                prerequisites: [
                    'Right triangle properties',
                    'Square roots',
                    'Similar triangles'
                ],
                commonDifficulties: [
                    'Identifying correct segments',
                    'Confusing altitude and leg theorems',
                    'Arithmetic errors with square roots'
                ],
                extensions: [
                    'Pythagorean theorem connections',
                    'Geometric constructions',
                    'Optimization problems'
                ],
                assessment: [
                    'Check segment identification',
                    'Verify formula application',
                    'Test theorem understanding'
                ]
            },
            cpctc: {
                objectives: [
                    'Apply CPCTC after proving congruence',
                    'Structure two-column proofs',
                    'State conclusions precisely'
                ],
                keyConcepts: [
                    'CPCTC is a conclusion, not a method',
                    'Must prove triangle congruence first',
                    'Applies to all six corresponding parts'
                ],
                prerequisites: [
                    'Triangle congruence postulates',
                    'Proof structure',
                    'Logical reasoning'
                ],
                commonDifficulties: [
                    'Using CPCTC without proving congruence',
                    'Incorrect proof order',
                    'Not identifying which triangles to prove'
                ],
                extensions: [
                    'Complex multi-step proofs',
                    'Overlapping triangles',
                    'Coordinate geometry proofs'
                ],
                assessment: [
                    'Check proof structure',
                    'Verify logical flow',
                    'Test with varied scenarios'
                ]
            },
            proportional_segments: {
                objectives: [
                    'Apply side-splitter theorem',
                    'Use triangle proportionality theorem',
                    'Prove lines parallel using proportions'
                ],
                keyConcepts: [
                    'Parallel lines create proportional segments',
                    'Converse theorems for proving parallelism',
                    'Setting up correct proportions'
                ],
                prerequisites: [
                    'Parallel lines and transversals',
                    'Proportions and cross multiplication',
                    'Similar triangles'
                ],
                commonDifficulties: [
                    'Identifying corresponding segments',
                    'Setting up proportions correctly',
                    'Confusion between theorem and converse'
                ],
                extensions: [
                    'Angle bisector theorem',
                    'Midsegment theorem',
                    'Coordinate geometry applications'
                ],
                assessment: [
                    'Check proportion setup',
                    'Verify segment identification',
                    'Test converse understanding'
                ]
            },
            indirect_measurement: {
                objectives: [
                    'Set up similar triangles from real scenarios',
                    'Apply proportions to find unknown measurements',
                    'Interpret solutions in context'
                ],
                keyConcepts: [
                    'Similar triangles enable indirect measurement',
                    'Shadow problems use constant sun angle',
                    'Mirror problems use angle of reflection'
                ],
                prerequisites: [
                    'Similar triangles and AA theorem',
                    'Setting up proportions',
                    'Unit conversions'
                ],
                commonDifficulties: [
                    'Drawing accurate diagrams',
                    'Identifying corresponding parts',
                    'Unit consistency'
                ],
                extensions: [
                    'Surveying applications',
                    'Navigation problems',
                    'Engineering measurements'
                ],
                assessment: [
                    'Check diagram accuracy',
                    'Verify proportion setup',
                    'Test with varied contexts'
                ]
            },
            polygon_similarity: {
                objectives: [
                    'Apply both conditions for polygon similarity',
                    'Calculate with similar polygons',
                    'Understand difference from triangle similarity'
                ],
                keyConcepts: [
                    'Both angle AND side conditions required',
                    'All regular n-gons are similar',
                    'Perimeter and area ratios'
                ],
                prerequisites: [
                    'Polygon properties',
                    'Triangle similarity',
                    'Ratio and proportion'
                ],
                commonDifficulties: [
                    'Forgetting to check both conditions',
                    'Assuming angle congruence implies similarity',
                    'Incorrect side matching'
                ],
                extensions: [
                    'Three-dimensional similar figures',
                    'Tessellations',
                    'Fractal geometry'
                ],
                assessment: [
                    'Check both condition verification',
                    'Test with non-similar polygons',
                    'Apply to irregular polygons'
                ]
            }
        };

        return pedagogicalDatabase[category] || {
            objectives: ['Solve geometric similarity and congruence problems'],
            keyConcepts: ['Apply appropriate theorems and postulates'],
            prerequisites: ['Basic geometry knowledge'],
            commonDifficulties: ['Various geometric misconceptions'],
            extensions: ['Advanced geometric proofs'],
            assessment: ['Check understanding of methods']
        };
    }

    generateAlternativeMethodsSimilarity(category) {
        const alternativeDatabase = {
            triangle_congruence: {
                primaryMethod: 'SSS, SAS, ASA, AAS, or HL postulate',
                methods: [
                    {
                        name: 'Coordinate Geometry',
                        description: 'Use distance formula to verify side lengths and slope for angles'
                    },
                    {
                        name: 'Transformations',
                        description: 'Show one triangle can be mapped to other by rigid motions'
                    },
                    {
                        name: 'Overlapping Triangles',
                        description: 'Identify shared sides or angles, then apply postulates'
                    }
                ],
                comparison: 'Postulates are most direct; coordinate geometry is computational; transformations provide conceptual understanding'
            },
            triangle_similarity: {
                primaryMethod: 'AA, SAS~, or SSS~ similarity theorem',
                methods: [
                    {
                        name: 'Parallel Lines Method',
                        description: 'Use parallel lines to establish AA similarity through corresponding angles'
                    },
                    {
                        name: 'Transitive Property',
                        description: 'Prove both triangles similar to a third triangle'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Calculate all sides and angles, verify proportionality and angle equality'
                    }
                ],
                comparison: 'AA is usually fastest with two known angles; SSS~ when all sides known; coordinate geometry for algebraic approach'
            },
            scale_factor: {
                primaryMethod: 'Direct ratio of corresponding sides',
                methods: [
                    {
                        name: 'Proportion Method',
                        description: 'Set up proportion with known sides, solve for scale factor'
                    },
                    {
                        name: 'Multiple Measurements',
                        description: 'Calculate multiple ratios and verify consistency'
                    },
                    {
                        name: 'Inverse Calculation',
                        description: 'Find reciprocal if scaling direction is opposite'
                    }
                ],
                comparison: 'Direct ratio is simplest; multiple measurements verify accuracy; method choice depends on given information'
            },
            geometric_mean: {
                primaryMethod: 'Apply altitude or leg theorem directly',
                methods: [
                    {
                        name: 'Similar Triangles',
                        description: 'Set up proportion using the three similar triangles, solve for unknown'
                    },
                    {
                        name: 'Pythagorean Theorem',
                        description: 'Combine with Pythagorean theorem for multiple unknowns'
                    },
                    {
                        name: 'Algebraic System',
                        description: 'Set up system of equations using both theorems'
                    }
                ],
                comparison: 'Direct formula is fastest; similar triangles show the why; combined methods handle complex problems'
            },
            cpctc: {
                primaryMethod: 'Prove triangle congruence, then apply CPCTC',
                methods: [
                    {
                        name: 'Two-Column Proof',
                        description: 'Traditional format with statements and reasons'
                    },
                    {
                        name: 'Paragraph Proof',
                        description: 'Written explanation with logical flow'
                    },
                    {
                        name: 'Flow Chart Proof',
                        description: 'Visual diagram showing logical connections'
                    }
                ],
                comparison: 'Two-column is most structured; paragraph is most natural; flow chart shows relationships clearly'
            },
            proportional_segments: {
                primaryMethod: 'Side-splitter or triangle proportionality theorem',
                methods: [
                    {
                        name: 'Similar Triangles',
                        description: 'Prove triangles similar first, then use proportions'
                    },
                    {
                        name: 'Extended Proportion',
                        description: 'Use extended proportion with multiple segments'
                    },
                    {
                        name: 'Algebraic',
                        description: 'Set up algebraic equations using segment relationships'
                    }
                ],
                comparison: 'Direct theorem application is cleanest; similar triangles provides foundation; algebraic works for complex cases'
            },
            indirect_measurement: {
                primaryMethod: 'Similar triangles and proportions',
                methods: [
                    {
                        name: 'Shadow Method',
                        description: 'Use shadows at same time (parallel sun rays)'
                    },
                    {
                        name: 'Mirror Method',
                        description: 'Use mirror reflection (equal angles)'
                    },
                    {
                        name: 'Clinometer Method',
                        description: 'Measure angles directly, use trigonometry'
                    },
                    {
                        name: 'Scaling Device',
                        description: 'Use physical measuring tool with known ratios'
                    }
                ],
                comparison: 'Shadow method simplest in sunlight; mirror works indoors; clinometer most accurate; scaling device most direct'
            },
            polygon_similarity: {
                primaryMethod: 'Verify both angle congruence and side proportionality',
                methods: [
                    {
                        name: 'Decomposition',
                        description: 'Divide into triangles, prove each pair similar'
                    },
                    {
                        name: 'Coordinate Geometry',
                        description: 'Use coordinates to calculate all sides and angles'
                    },
                    {
                        name: 'Transformation Method',
                        description: 'Show one polygon is dilation of the other'
                    }
                ],
                comparison: 'Direct verification is standard; decomposition builds on triangle similarity; coordinate method is computational'
            }
        };

        return alternativeDatabase[category] || {
            primaryMethod: 'Standard geometric approach',
            methods: [
                {
                    name: 'Systematic Method',
                    description: 'Follow standard problem-solving steps'
                }
            ],
            comparison: 'Choose method based on given information and problem context'
        };
    }
}
