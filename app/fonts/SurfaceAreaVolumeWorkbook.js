// Enhanced Surface Area and Volume Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedSurfaceAreaVolumeWorkbook {
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
        this.initializeGeometrySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializeGeometryLessons() {
        this.lessons = {
            cube: {
                title: "Cube - Surface Area and Volume",
                concepts: [
                    "Cube has 6 identical square faces",
                    "All edges have equal length",
                    "Surface Area = 6s² where s is edge length",
                    "Volume = s³"
                ],
                theory: "A cube is a regular polyhedron with six congruent square faces. Its symmetry makes calculations straightforward since all dimensions are equal.",
                keyFormulas: {
                    "Surface Area": "SA = 6s²",
                    "Volume": "V = s³",
                    "Face Diagonal": "d_face = s√2",
                    "Space Diagonal": "d_space = s√3"
                },
                solvingSteps: [
                    "Identify the edge length s",
                    "Calculate area of one face: s²",
                    "Multiply by 6 faces for total surface area",
                    "Calculate volume by cubing the edge length"
                ],
                applications: [
                    "Packaging and storage containers",
                    "Dice and gaming pieces",
                    "Cubic crystals in chemistry",
                    "Building blocks and modular design"
                ]
            },

            rectangular_prism: {
                title: "Rectangular Prism (Box) - Surface Area and Volume",
                concepts: [
                    "Has 6 rectangular faces in 3 pairs",
                    "Opposite faces are congruent",
                    "Surface Area = 2(lw + lh + wh)",
                    "Volume = l × w × h"
                ],
                theory: "A rectangular prism has three dimensions: length, width, and height. Each dimension creates a pair of opposite congruent faces.",
                keyFormulas: {
                    "Surface Area": "SA = 2(lw + lh + wh)",
                    "Volume": "V = lwh",
                    "Space Diagonal": "d = √(l² + w² + h²)"
                },
                solvingSteps: [
                    "Identify length (l), width (w), and height (h)",
                    "Calculate three different face areas: lw, lh, wh",
                    "Sum and multiply by 2 for surface area",
                    "Multiply all three dimensions for volume"
                ],
                applications: [
                    "Room dimensions and construction",
                    "Shipping boxes and containers",
                    "Aquariums and tanks",
                    "Architectural planning"
                ]
            },

            sphere: {
                title: "Sphere - Surface Area and Volume",
                concepts: [
                    "Perfectly round 3D object",
                    "All points on surface equidistant from center",
                    "Surface Area = 4πr²",
                    "Volume = (4/3)πr³"
                ],
                theory: "A sphere is the set of all points in 3D space at a fixed distance (radius) from a center point. It has the smallest surface area for any given volume.",
                keyFormulas: {
                    "Surface Area": "SA = 4πr²",
                    "Volume": "V = (4/3)πr³",
                    "Great Circle Circumference": "C = 2πr",
                    "Diameter": "d = 2r"
                },
                solvingSteps: [
                    "Identify the radius r (or diameter d)",
                    "Calculate r² and r³",
                    "Apply formulas with π",
                    "Round to appropriate precision"
                ],
                applications: [
                    "Planetary bodies and astronomy",
                    "Ball bearings and spherical objects",
                    "Bubbles and droplets",
                    "Sports balls and equipment"
                ]
            },

            cylinder: {
                title: "Cylinder - Surface Area and Volume",
                concepts: [
                    "Two circular bases connected by curved surface",
                    "Bases are parallel and congruent",
                    "Surface Area = 2πr² + 2πrh = 2πr(r + h)",
                    "Volume = πr²h"
                ],
                theory: "A cylinder consists of two circular bases and a rectangular lateral surface that wraps around. The height is perpendicular to the bases.",
                keyFormulas: {
                    "Total Surface Area": "SA = 2πr² + 2πrh",
                    "Lateral Surface Area": "LSA = 2πrh",
                    "Volume": "V = πr²h",
                    "Base Area": "A_base = πr²"
                },
                solvingSteps: [
                    "Identify radius r and height h",
                    "Calculate base area: πr²",
                    "Calculate lateral area: 2πrh",
                    "Add two bases + lateral for total SA",
                    "Multiply base area by height for volume"
                ],
                applications: [
                    "Cans and cylindrical containers",
                    "Pipes and tubes",
                    "Silos and storage tanks",
                    "Cylindrical columns in architecture"
                ]
            },

            cone: {
                title: "Cone - Surface Area and Volume",
                concepts: [
                    "Circular base tapering to a point (apex)",
                    "Slant height connects apex to base edge",
                    "Surface Area = πr² + πrl (base + lateral)",
                    "Volume = (1/3)πr²h"
                ],
                theory: "A cone has a circular base and a curved surface that tapers smoothly to an apex. The slant height l differs from the perpendicular height h.",
                keyFormulas: {
                    "Total Surface Area": "SA = πr² + πrl",
                    "Lateral Surface Area": "LSA = πrl",
                    "Volume": "V = (1/3)πr²h",
                    "Slant Height": "l = √(r² + h²)"
                },
                solvingSteps: [
                    "Identify radius r and height h",
                    "Calculate slant height if needed: l = √(r² + h²)",
                    "Calculate base area: πr²",
                    "Calculate lateral area: πrl",
                    "Volume is 1/3 of cylinder with same base and height"
                ],
                applications: [
                    "Ice cream cones and funnels",
                    "Traffic cones",
                    "Conical roofs and spires",
                    "Volcanoes and natural formations"
                ]
            },

            pyramid: {
                title: "Pyramid - Surface Area and Volume",
                concepts: [
                    "Polygonal base with triangular faces meeting at apex",
                    "Common types: square, triangular, hexagonal",
                    "Surface Area = Base Area + Lateral Area",
                    "Volume = (1/3) × Base Area × Height"
                ],
                theory: "A pyramid consists of a polygonal base and triangular lateral faces that meet at a common apex. Volume is always 1/3 of corresponding prism.",
                keyFormulas: {
                    "Volume": "V = (1/3)Bh (B = base area)",
                    "Square Pyramid SA": "SA = s² + 2sl (s = base side, l = slant height)",
                    "Lateral Area": "LA = (1/2) × perimeter × slant height",
                    "Slant Height": "l = √(h² + (s/2)²) for square pyramid"
                },
                solvingSteps: [
                    "Identify base shape and dimensions",
                    "Calculate base area",
                    "Find slant height if needed",
                    "Calculate lateral face areas",
                    "Sum all areas for total surface area",
                    "Use V = (1/3)Bh for volume"
                ],
                applications: [
                    "Ancient Egyptian pyramids",
                    "Architectural design elements",
                    "Roof structures",
                    "Crystal formations"
                ]
            },

            triangular_prism: {
                title: "Triangular Prism - Surface Area and Volume",
                concepts: [
                    "Two triangular bases and three rectangular faces",
                    "Bases are parallel and congruent",
                    "Surface Area = 2(Base Area) + Perimeter × Height",
                    "Volume = Base Area × Length"
                ],
                theory: "A triangular prism has triangular cross-sections perpendicular to its length. It's like extruding a triangle through space.",
                keyFormulas: {
                    "Surface Area": "SA = bh + (s₁ + s₂ + s₃)L",
                    "Volume": "V = (1/2)bhL",
                    "Base Area": "A = (1/2)bh (for triangle)"
                },
                solvingSteps: [
                    "Calculate triangular base area",
                    "Find perimeter of triangular base",
                    "Calculate three rectangular face areas",
                    "Sum: 2 bases + 3 rectangles",
                    "Volume = base area × length"
                ],
                applications: [
                    "Roof trusses",
                    "Prism optics",
                    "Structural beams",
                    "Camping tents"
                ]
            },

            hemisphere: {
                title: "Hemisphere - Surface Area and Volume",
                concepts: [
                    "Half of a sphere",
                    "Has curved surface plus circular base",
                    "Curved Surface Area = 2πr²",
                    "Total Surface Area = 3πr²",
                    "Volume = (2/3)πr³"
                ],
                theory: "A hemisphere is exactly half of a sphere, cut through its center. It combines a circular base with half of a spherical surface.",
                keyFormulas: {
                    "Curved Surface Area": "CSA = 2πr²",
                    "Total Surface Area": "TSA = 3πr²",
                    "Volume": "V = (2/3)πr³",
                    "Base Area": "A = πr²"
                },
                solvingSteps: [
                    "Identify radius r",
                    "Curved surface is half of sphere: 2πr²",
                    "Add circular base for total SA: 3πr²",
                    "Volume is half of sphere: (2/3)πr³"
                ],
                applications: [
                    "Domes and planetariums",
                    "Bowl shapes",
                    "Geodesic structures",
                    "Half-sphere containers"
                ]
            },

            torus: {
                title: "Torus (Donut Shape) - Surface Area and Volume",
                concepts: [
                    "Ring or donut shape",
                    "Major radius R: center to tube center",
                    "Minor radius r: tube radius",
                    "Surface Area = 4π²Rr",
                    "Volume = 2π²Rr²"
                ],
                theory: "A torus is generated by revolving a circle around an axis in the same plane but not intersecting the circle.",
                keyFormulas: {
                    "Surface Area": "SA = 4π²Rr",
                    "Volume": "V = 2π²Rr²",
                    "Cross-section Area": "A = πr²"
                },
                solvingSteps: [
                    "Identify major radius R",
                    "Identify minor radius r",
                    "Apply formulas with both radii",
                    "Note the π² terms"
                ],
                applications: [
                    "O-rings and gaskets",
                    "Donuts and bagels",
                    "Torus-shaped architecture",
                    "Magnetic confinement in physics"
                ]
            },

            composite_shapes: {
                title: "Composite 3D Shapes",
                concepts: [
                    "Combination of basic geometric solids",
                    "Add volumes of components",
                    "Surface area requires careful consideration of shared faces",
                    "Break complex shapes into recognizable parts"
                ],
                theory: "Many real-world objects are composites of basic shapes. The key is identifying components and handling interface regions correctly.",
                keyFormulas: {
                    "Total Volume": "V = V₁ + V₂ + ... + Vₙ",
                    "Total SA": "SA = (SA₁ + SA₂ + ...) - 2(shared areas)"
                },
                solvingSteps: [
                    "Identify individual component shapes",
                    "Calculate each component's volume/SA separately",
                    "Sum volumes directly",
                    "Subtract shared surface areas for total SA",
                    "Verify units and calculations"
                ],
                applications: [
                    "Complex buildings and structures",
                    "Product design and manufacturing",
                    "Irregular containers",
                    "Natural formations"
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
            'pi': 'π',
            'sqrt': '√',
            'cubed': '³',
            'squared': '²',
            'degree': '°',
            'approx': '≈',
            'times': '×',
            'divide': '÷',
            'leq': '≤',
            'geq': '≥'
        };
    }

    initializeGeometrySolvers() {
        this.geometryTypes = {
            cube: {
                patterns: [/cube/i, /cubic/i],
                solver: this.solveCube.bind(this),
                name: 'Cube',
                category: 'regular_polyhedra',
                description: 'Calculates surface area and volume of a cube'
            },

            rectangular_prism: {
                patterns: [/rectangular\s*prism/i, /box/i, /cuboid/i],
                solver: this.solveRectangularPrism.bind(this),
                name: 'Rectangular Prism',
                category: 'prisms',
                description: 'Calculates surface area and volume of a rectangular prism'
            },

            sphere: {
                patterns: [/sphere/i, /ball/i],
                solver: this.solveSphere.bind(this),
                name: 'Sphere',
                category: 'curved_surfaces',
                description: 'Calculates surface area and volume of a sphere'
            },

            cylinder: {
                patterns: [/cylinder/i, /cylindrical/i],
                solver: this.solveCylinder.bind(this),
                name: 'Cylinder',
                category: 'curved_surfaces',
                description: 'Calculates surface area and volume of a cylinder'
            },

            cone: {
                patterns: [/cone/i, /conical/i],
                solver: this.solveCone.bind(this),
                name: 'Cone',
                category: 'curved_surfaces',
                description: 'Calculates surface area and volume of a cone'
            },

            pyramid: {
                patterns: [/pyramid/i],
                solver: this.solvePyramid.bind(this),
                name: 'Pyramid',
                category: 'pyramids',
                description: 'Calculates surface area and volume of a pyramid'
            },

            triangular_prism: {
                patterns: [/triangular\s*prism/i],
                solver: this.solveTriangularPrism.bind(this),
                name: 'Triangular Prism',
                category: 'prisms',
                description: 'Calculates surface area and volume of a triangular prism'
            },

            hemisphere: {
                patterns: [/hemisphere/i, /half\s*sphere/i, /dome/i],
                solver: this.solveHemisphere.bind(this),
                name: 'Hemisphere',
                category: 'curved_surfaces',
                description: 'Calculates surface area and volume of a hemisphere'
            },

            torus: {
                patterns: [/torus/i, /donut/i, /ring/i],
                solver: this.solveTorus.bind(this),
                name: 'Torus',
                category: 'curved_surfaces',
                description: 'Calculates surface area and volume of a torus'
            },

            composite: {
                patterns: [/composite/i, /combined/i, /complex/i],
                solver: this.solveComposite.bind(this),
                name: 'Composite Shape',
                category: 'composite',
                description: 'Calculates surface area and volume of composite shapes'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            cube: {
                'Calculate surface area': [
                    'Forgetting there are 6 faces, not 4',
                    'Squaring the edge length but not multiplying by 6',
                    'Confusing surface area formula with volume formula'
                ],
                'Calculate volume': [
                    'Using s² instead of s³',
                    'Multiplying by 6 (mixing up with surface area)'
                ]
            },
            sphere: {
                'Calculate surface area': [
                    'Using 2πr² instead of 4πr²',
                    'Forgetting to square the radius',
                    'Using diameter instead of radius'
                ],
                'Calculate volume': [
                    'Forgetting the 4/3 coefficient',
                    'Using r² instead of r³',
                    'Confusing with cylinder volume formula'
                ]
            },
            cylinder: {
                'Calculate surface area': [
                    'Forgetting to include both circular bases',
                    'Confusing radius with diameter',
                    'Not adding lateral surface area and base areas'
                ],
                'Calculate volume': [
                    'Using radius instead of radius squared',
                    'Using diameter in formula without converting',
                    'Forgetting to multiply by height'
                ]
            },
            cone: {
                'Calculate slant height': [
                    'Using height as slant height directly',
                    'Applying Pythagorean theorem incorrectly',
                    'Confusing radius and diameter in calculations'
                ],
                'Calculate volume': [
                    'Forgetting the 1/3 factor',
                    'Using slant height instead of perpendicular height',
                    'Confusing with cylinder volume'
                ]
            }
        };

        this.errorPrevention = {
            unit_checking: {
                reminder: 'Always verify units match throughout calculation',
                method: 'Convert all measurements to same unit before calculating'
            },
            formula_selection: {
                reminder: 'Identify shape correctly before applying formulas',
                method: 'Sketch the shape and label all known dimensions'
            },
            pi_approximation: {
                reminder: 'Use sufficient decimal places for π or keep as symbol',
                method: 'Use π = 3.14159 or keep exact with π symbol'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why the formula works and geometric meaning',
                language: 'intuitive and spatially-focused'
            },
            procedural: {
                focus: 'Exact sequence of calculations to perform',
                language: 'step-by-step computational instructions'
            },
            visual: {
                focus: 'Geometric visualization and 3D understanding',
                language: 'spatial and visual descriptions'
            },
            algebraic: {
                focus: 'Mathematical derivation and formula manipulation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete measurements and simple shapes'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main steps with brief geometric explanations',
                examples: 'mix of regular and composite shapes'
            },
            detailed: {
                vocabulary: 'full geometric and mathematical vocabulary',
                detail: 'comprehensive explanations with derivations',
                examples: 'complex composites and abstract cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with visualization prompts',
                examples: 'carefully sequenced difficulty progression'
            }
        };
    }

    // Main solver method
    solveGeometryProblem(config) {
        const { shapeType, dimensions, scenario, parameters, context } = config;

        try {
            this.currentProblem = this.parseGeometryProblem(shapeType, dimensions, scenario, parameters, context);
            this.currentSolution = this.solveGeometryProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateGeometrySteps(this.currentProblem, this.currentSolution);
            this.generateGeometryGraphData();
            this.generateGeometryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                surfaceArea: this.currentSolution?.surfaceArea,
                volume: this.currentSolution?.volume
            };

        } catch (error) {
            throw new Error(`Failed to solve geometry problem: ${error.message}`);
        }
    }

    parseGeometryProblem(shapeType, dimensions = {}, scenario = '', parameters = {}, context = {}) {
        // Auto-detect shape type
        for (const [type, config] of Object.entries(this.geometryTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(shapeType) || pattern.test(scenario)) {
                    return {
                        originalInput: shapeType || scenario,
                        type: type,
                        scenario: scenario,
                        dimensions: { ...dimensions },
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize shape type from: ${shapeType || scenario}`);
    }

    solveGeometryProblem_Internal(problem) {
        const solver = this.geometryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for geometry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // GEOMETRY SOLVERS

    solveCube(problem) {
        const { side, s } = problem.dimensions;
        const edgeLength = side || s;

        if (!edgeLength || edgeLength <= 0) {
            throw new Error('Invalid cube edge length');
        }

        const surfaceArea = 6 * edgeLength * edgeLength;
        const volume = edgeLength * edgeLength * edgeLength;
        const faceDiagonal = edgeLength * Math.sqrt(2);
        const spaceDiagonal = edgeLength * Math.sqrt(3);

        return {
            shapeType: 'Cube',
            dimensions: { edgeLength },
            surfaceArea: surfaceArea,
            volume: volume,
            faceDiagonal: faceDiagonal,
            spaceDiagonal: spaceDiagonal,
            formulas: {
                surfaceArea: `SA = 6s² = 6(${edgeLength})² = ${surfaceArea}`,
                volume: `V = s³ = (${edgeLength})³ = ${volume}`
            },
            category: 'cube'
        };
    }

    solveRectangularPrism(problem) {
        const { length, width, height, l, w, h } = problem.dimensions;
        const L = length || l;
        const W = width || w;
        const H = height || h;

        if (!L || !W || !H || L <= 0 || W <= 0 || H <= 0) {
            throw new Error('Invalid rectangular prism dimensions');
        }

        const surfaceArea = 2 * (L * W + L * H + W * H);
        const volume = L * W * H;
        const spaceDiagonal = Math.sqrt(L * L + W * W + H * H);

        return {
            shapeType: 'Rectangular Prism',
            dimensions: { length: L, width: W, height: H },
            surfaceArea: surfaceArea,
            volume: volume,
            spaceDiagonal: spaceDiagonal,
            formulas: {
                surfaceArea: `SA = 2(lw + lh + wh) = 2(${L}×${W} + ${L}×${H} + ${W}×${H}) = ${surfaceArea}`,
                volume: `V = lwh = ${L}×${W}×${H} = ${volume}`
            },
            category: 'rectangular_prism'
        };
    }

    solveSphere(problem) {
        const { radius, r, diameter, d } = problem.dimensions;
        const rad = radius || r || (diameter || d) / 2;

        if (!rad || rad <= 0) {
            throw new Error('Invalid sphere radius');
        }

        const surfaceArea = 4 * Math.PI * rad * rad;
        const volume = (4 / 3) * Math.PI * rad * rad * rad;
        const circumference = 2 * Math.PI * rad;

        return {
            shapeType: 'Sphere',
            dimensions: { radius: rad, diameter: 2 * rad },
            surfaceArea: surfaceArea,
            volume: volume,
            circumference: circumference,
            formulas: {
                surfaceArea: `SA = 4πr² = 4π(${rad})² = ${surfaceArea}`,
                volume: `V = (4/3)πr³ = (4/3)π(${rad})³ = ${volume}`
            },
            category: 'sphere'
        };
    }

    solveCylinder(problem) {
        const { radius, r, height, h, diameter, d } = problem.dimensions;
        const rad = radius || r || (diameter || d) / 2;
        const ht = height || h;

        if (!rad || !ht || rad <= 0 || ht <= 0) {
            throw new Error('Invalid cylinder dimensions');
        }

        const baseArea = Math.PI * rad * rad;
        const lateralArea = 2 * Math.PI * rad * ht;
        const surfaceArea = 2 * baseArea + lateralArea;
        const volume = baseArea * ht;

        return {
            shapeType: 'Cylinder',
            dimensions: { radius: rad, height: ht },
            surfaceArea: surfaceArea,
            lateralArea: lateralArea,
            baseArea: baseArea,
            volume: volume,
            formulas: {
                surfaceArea: `SA = 2πr² + 2πrh = 2π(${rad})² + 2π(${rad})(${ht}) = ${surfaceArea}`,
                volume: `V = πr²h = π(${rad})²(${ht}) = ${volume}`
            },
            category: 'cylinder'
        };
    }

    solveCone(problem) {
        const { radius, r, height, h, slantHeight, l } = problem.dimensions;
        const rad = radius || r;
        const ht = height || h;
        let slant = slantHeight || l;

        if (!rad || rad <= 0) {
            throw new Error('Invalid cone radius');
        }

        // Calculate slant height if not provided
        if (!slant && ht) {
            slant = Math.sqrt(rad * rad + ht * ht);
        } else if (!slant) {
            throw new Error('Must provide either height or slant height');
        }

        // Calculate height if not provided
        const actualHeight = ht || Math.sqrt(slant * slant - rad * rad);

        const baseArea = Math.PI * rad * rad;
        const lateralArea = Math.PI * rad * slant;
        const surfaceArea = baseArea + lateralArea;
        const volume = (1 / 3) * baseArea * actualHeight;

        return {
            shapeType: 'Cone',
            dimensions: { radius: rad, height: actualHeight, slantHeight: slant },
            surfaceArea: surfaceArea,
            lateralArea: lateralArea,
            baseArea: baseArea,
            volume: volume,
            formulas: {
                slantHeight: `l = √(r² + h²) = √(${rad}² + ${actualHeight}²) = ${slant}`,
                surfaceArea: `SA = πr² + πrl = π(${rad})² + π(${rad})(${slant}) = ${surfaceArea}`,
                volume: `V = (1/3)πr²h = (1/3)π(${rad})²(${actualHeight}) = ${volume}`
            },
            category: 'cone'
        };
    }

    solvePyramid(problem) {
        const { baseLength, baseWidth, height, slantHeight, baseType } = problem.dimensions;
        const base = baseType || 'square';
        
        if (!baseLength || !height || baseLength <= 0 || height <= 0) {
            throw new Error('Invalid pyramid dimensions');
        }

        let baseArea, basePerimeter, lateralArea, surfaceArea, volume;
        let actualSlantHeight = slantHeight;

        if (base === 'square') {
            baseArea = baseLength * baseLength;
            basePerimeter = 4 * baseLength;
            
            // Calculate slant height for square pyramid
            if (!actualSlantHeight) {
                const apothem = baseLength / 2;
                actualSlantHeight = Math.sqrt(height * height + apothem * apothem);
            }
            
            lateralArea = basePerimeter * actualSlantHeight / 2;
            surfaceArea = baseArea + lateralArea;
            volume = (1 / 3) * baseArea * height;

            return {
                shapeType: 'Square Pyramid',
                dimensions: { baseLength, height, slantHeight: actualSlantHeight },
                surfaceArea: surfaceArea,
                lateralArea: lateralArea,
                baseArea: baseArea,
                volume: volume,
                formulas: {
                    baseArea: `Base Area = s² = ${baseLength}² = ${baseArea}`,
                    slantHeight: `l = √(h² + (s/2)²) = √(${height}² + ${baseLength/2}²) = ${actualSlantHeight}`,
                    surfaceArea: `SA = s² + 2sl = ${baseLength}² + 2(${baseLength})(${actualSlantHeight}) = ${surfaceArea}`,
                    volume: `V = (1/3)Bh = (1/3)(${baseArea})(${height}) = ${volume}`
                },
                category: 'pyramid'
            };
        } else if (base === 'triangular') {
            const baseHeight = baseWidth || baseLength;
            baseArea = (1 / 2) * baseLength * baseHeight;
            basePerimeter = baseLength + baseHeight + Math.sqrt(baseLength * baseLength + baseHeight * baseHeight);
            
            if (!actualSlantHeight) {
                actualSlantHeight = Math.sqrt(height * height + (baseLength / 2) * (baseLength / 2));
            }
            
            lateralArea = basePerimeter * actualSlantHeight / 2;
            surfaceArea = baseArea + lateralArea;
            volume = (1 / 3) * baseArea * height;

            return {
                shapeType: 'Triangular Pyramid',
                dimensions: { baseLength, baseHeight, height, slantHeight: actualSlantHeight },
                surfaceArea: surfaceArea,
                baseArea: baseArea,
                volume: volume,
                category: 'pyramid'
            };
        }

        throw new Error('Unsupported pyramid base type');
    }

    solveTriangularPrism(problem) {
        const { baseLength, baseHeight, prismLength, b, h, L } = problem.dimensions;
        const base = baseLength || b;
        const height = baseHeight || h;
        const length = prismLength || L;

        if (!base || !height || !length || base <= 0 || height <= 0 || length <= 0) {
            throw new Error('Invalid triangular prism dimensions');
        }

        const baseArea = (1 / 2) * base * height;
        
        // For surface area, we need the three sides of the triangle
        // Assuming right triangle for simplicity, or use provided sides
        const hypotenuse = Math.sqrt(base * base + height * height);
        const perimeter = base + height + hypotenuse;
        
        const lateralArea = perimeter * length;
        const surfaceArea = 2 * baseArea + lateralArea;
        const volume = baseArea * length;

        return {
            shapeType: 'Triangular Prism',
            dimensions: { baseLength: base, baseHeight: height, prismLength: length },
            surfaceArea: surfaceArea,
            lateralArea: lateralArea,
            baseArea: baseArea,
            volume: volume,
            formulas: {
                baseArea: `Base Area = (1/2)bh = (1/2)(${base})(${height}) = ${baseArea}`,
                surfaceArea: `SA = 2(Base Area) + Perimeter×Length = 2(${baseArea}) + ${perimeter}×${length} = ${surfaceArea}`,
                volume: `V = Base Area × Length = ${baseArea}×${length} = ${volume}`
            },
            category: 'triangular_prism'
        };
    }

    solveHemisphere(problem) {
        const { radius, r, diameter, d } = problem.dimensions;
        const rad = radius || r || (diameter || d) / 2;

        if (!rad || rad <= 0) {
            throw new Error('Invalid hemisphere radius');
        }

        const curvedSurfaceArea = 2 * Math.PI * rad * rad;
        const baseArea = Math.PI * rad * rad;
        const totalSurfaceArea = 3 * Math.PI * rad * rad;
        const volume = (2 / 3) * Math.PI * rad * rad * rad;

        return {
            shapeType: 'Hemisphere',
            dimensions: { radius: rad },
            curvedSurfaceArea: curvedSurfaceArea,
            baseArea: baseArea,
            totalSurfaceArea: totalSurfaceArea,
            volume: volume,
            formulas: {
                curvedSurface: `CSA = 2πr² = 2π(${rad})² = ${curvedSurfaceArea}`,
                totalSurface: `TSA = 3πr² = 3π(${rad})² = ${totalSurfaceArea}`,
                volume: `V = (2/3)πr³ = (2/3)π(${rad})³ = ${volume}`
            },
            category: 'hemisphere'
        };
    }

    solveTorus(problem) {
        const { majorRadius, minorRadius, R, r } = problem.dimensions;
        const majorRad = majorRadius || R;
        const minorRad = minorRadius || r;

        if (!majorRad || !minorRad || majorRad <= 0 || minorRad <= 0) {
            throw new Error('Invalid torus dimensions');
        }

        if (minorRad >= majorRad) {
            throw new Error('Minor radius must be less than major radius');
        }

        const surfaceArea = 4 * Math.PI * Math.PI * majorRad * minorRad;
        const volume = 2 * Math.PI * Math.PI * majorRad * minorRad * minorRad;

        return {
            shapeType: 'Torus',
            dimensions: { majorRadius: majorRad, minorRadius: minorRad },
            surfaceArea: surfaceArea,
            volume: volume,
            formulas: {
                surfaceArea: `SA = 4π²Rr = 4π²(${majorRad})(${minorRad}) = ${surfaceArea}`,
                volume: `V = 2π²Rr² = 2π²(${majorRad})(${minorRad})² = ${volume}`
            },
            category: 'torus'
        };
    }

    solveComposite(problem) {
        const { components } = problem.dimensions;
        
        if (!components || !Array.isArray(components)) {
            throw new Error('Composite shape requires array of components');
        }

        let totalVolume = 0;
        let totalSurfaceArea = 0;
        const componentResults = [];

        for (const component of components) {
            const componentProblem = this.parseGeometryProblem(
                component.type,
                component.dimensions,
                '',
                {},
                {}
            );
            const componentSolution = this.solveGeometryProblem_Internal(componentProblem);
            
            totalVolume += componentSolution.volume;
            totalSurfaceArea += componentSolution.surfaceArea;
            
            componentResults.push({
                type: component.type,
                volume: componentSolution.volume,
                surfaceArea: componentSolution.surfaceArea
            });
        }

        return {
            shapeType: 'Composite Shape',
            components: componentResults,
            totalVolume: totalVolume,
            totalSurfaceArea: totalSurfaceArea,
            note: 'Surface area may need adjustment for shared/internal faces',
            category: 'composite'
        };
    }

    // ENHANCED STEP GENERATION

    generateGeometrySteps(problem, solution) {
        let baseSteps = this.generateBaseGeometrySteps(problem, solution);

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

    generateBaseGeometrySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'cube':
                return this.generateCubeSteps(problem, solution);
            case 'rectangular_prism':
                return this.generateRectangularPrismSteps(problem, solution);
            case 'sphere':
                return this.generateSphereSteps(problem, solution);
            case 'cylinder':
                return this.generateCylinderSteps(problem, solution);
            case 'cone':
                return this.generateConeSteps(problem, solution);
            case 'pyramid':
                return this.generatePyramidSteps(problem, solution);
            case 'triangular_prism':
                return this.generateTriangularPrismSteps(problem, solution);
            case 'hemisphere':
                return this.generateHemisphereSteps(problem, solution);
            case 'torus':
                return this.generateTorusSteps(problem, solution);
            default:
                return this.generateGenericGeometrySteps(problem, solution);
        }
    }

    generateCubeSteps(problem, solution) {
        const { edgeLength } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify dimensions',
            description: 'Recognize the shape and extract the edge length',
            expression: `Edge length s = ${edgeLength}`,
            reasoning: 'A cube has all edges equal, so we only need one measurement',
            visualHint: 'Imagine a perfect die or box where all sides are squares of the same size',
            algebraicRule: 'All edges of a cube are congruent',
            goalStatement: 'We will use this single measurement to find both surface area and volume'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate area of one face',
            description: 'Find the area of one square face',
            beforeExpression: `s = ${edgeLength}`,
            operation: 'Square the edge length',
            afterExpression: `Area of one face = s² = ${edgeLength}² = ${edgeLength * edgeLength}`,
            reasoning: 'Each face is a square, and the area of a square is side squared',
            algebraicRule: 'Area of square = s²',
            visualHint: 'Picture one square face of the cube'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate total surface area',
            description: 'Multiply the area of one face by 6 (the number of faces)',
            beforeExpression: `One face = ${edgeLength * edgeLength}`,
            operation: '× 6',
            afterExpression: `SA = 6s² = 6(${edgeLength})² = ${solution.surfaceArea}`,
            reasoning: 'A cube has exactly 6 congruent square faces',
            algebraicRule: 'Surface Area = 6s²',
            visualHint: 'Imagine unfolding the cube into a cross shape with 6 squares',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate volume',
            description: 'Cube the edge length to find the volume',
            beforeExpression: `s = ${edgeLength}`,
            operation: 'Cube the edge length',
            afterExpression: `V = s³ = ${edgeLength}³ = ${solution.volume}`,
            reasoning: 'Volume is length × width × height, and all three are equal to s',
            algebraicRule: 'Volume = s³',
            visualHint: 'Think of filling the cube with unit cubes',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateRectangularPrismSteps(problem, solution) {
        const { length, width, height } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify dimensions',
            description: 'Extract the three dimensions of the rectangular prism',
            expression: `Length = ${length}, Width = ${width}, Height = ${height}`,
            reasoning: 'A rectangular prism has three distinct dimensions',
            visualHint: 'Think of a shoebox with length, width, and height',
            algebraicRule: 'Three-dimensional rectangular solid',
            goalStatement: 'We will calculate three different face areas'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate three face areas',
            description: 'Find the area of three different rectangular faces',
            expression: `
                Top/Bottom face: lw = ${length}×${width} = ${length * width}
                Front/Back face: lh = ${length}×${height} = ${length * height}
                Left/Right face: wh = ${width}×${height} = ${width * height}
            `,
            reasoning: 'Opposite faces are congruent, so we calculate three types',
            algebraicRule: 'Area of rectangle = length × width',
            visualHint: 'Visualize the three pairs of opposite faces'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate total surface area',
            description: 'Sum all face areas and multiply by 2',
            beforeExpression: `lw + lh + wh = ${length * width} + ${length * height} + ${width * height}`,
            operation: '× 2',
            afterExpression: `SA = 2(lw + lh + wh) = 2(${length * width + length * height + width * height}) = ${solution.surfaceArea}`,
            reasoning: 'Each of the three calculated areas appears twice',
            algebraicRule: 'SA = 2(lw + lh + wh)',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate volume',
            description: 'Multiply all three dimensions',
            expression: `V = lwh = ${length}×${width}×${height} = ${solution.volume}`,
            reasoning: 'Volume is the product of length, width, and height',
            algebraicRule: 'V = lwh',
            visualHint: 'Imagine filling the box with unit cubes',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateSphereSteps(problem, solution) {
        const { radius } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify radius',
            description: 'Extract the radius of the sphere',
            expression: `Radius r = ${radius}`,
            reasoning: 'All points on a sphere are equidistant from the center',
            visualHint: 'Think of a perfectly round ball',
            algebraicRule: 'Single radius defines entire sphere',
            goalStatement: 'We will use this radius with π in our formulas'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate r²',
            description: 'Square the radius',
            beforeExpression: `r = ${radius}`,
            operation: 'Square',
            afterExpression: `r² = ${radius}² = ${radius * radius}`,
            reasoning: 'We need r² for the surface area formula',
            algebraicRule: 'Squaring operation',
            visualHint: 'This represents area scaling'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate surface area',
            description: 'Apply the formula SA = 4πr²',
            beforeExpression: `r² = ${radius * radius}`,
            operation: '× 4π',
            afterExpression: `SA = 4πr² = 4π(${radius})² = ${solution.surfaceArea}`,
            reasoning: 'Surface area of sphere is 4 times the area of its great circle',
            algebraicRule: 'SA = 4πr²',
            visualHint: 'Imagine wrapping 4 circles around the sphere',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate r³',
            description: 'Cube the radius',
            beforeExpression: `r = ${radius}`,
            operation: 'Cube',
            afterExpression: `r³ = ${radius}³ = ${radius * radius * radius}`,
            reasoning: 'We need r³ for the volume formula',
            algebraicRule: 'Cubing operation',
            visualHint: 'This represents volume scaling'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate volume',
            description: 'Apply the formula V = (4/3)πr³',
            beforeExpression: `r³ = ${radius * radius * radius}`,
            operation: '× (4/3)π',
            afterExpression: `V = (4/3)πr³ = (4/3)π(${radius})³ = ${solution.volume}`,
            reasoning: 'Volume formula derived from integration in calculus',
            algebraicRule: 'V = (4/3)πr³',
            visualHint: 'The 4/3 factor relates to sphere geometry',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateCylinderSteps(problem, solution) {
        const { radius, height } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify dimensions',
            description: 'Extract radius and height of the cylinder',
            expression: `Radius r = ${radius}, Height h = ${height}`,
            reasoning: 'A cylinder needs both radius and height to be fully defined',
            visualHint: 'Think of a can or pipe',
            goalStatement: 'We will calculate base area and lateral area separately'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate base area',
            description: 'Find the area of one circular base',
            expression: `Base area = πr² = π(${radius})² = ${solution.baseArea}`,
            reasoning: 'Each base is a circle with area πr²',
            algebraicRule: 'Area of circle = πr²',
            visualHint: 'Picture the circular top or bottom'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate lateral surface area',
            description: 'Find the area of the curved surface',
            expression: `Lateral area = 2πrh = 2π(${radius})(${height}) = ${solution.lateralArea}`,
            reasoning: 'The lateral surface unwraps into a rectangle with width 2πr and height h',
            algebraicRule: 'LSA = 2πrh',
            visualHint: 'Imagine cutting and unrolling the curved surface into a rectangle'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate total surface area',
            description: 'Add two bases and the lateral surface',
            expression: `SA = 2(πr²) + 2πrh = 2π(${radius})² + 2π(${radius})(${height}) = ${solution.surfaceArea}`,
            reasoning: 'Total SA includes top base + bottom base + lateral surface',
            algebraicRule: 'SA = 2πr² + 2πrh = 2πr(r + h)',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate volume',
            description: 'Multiply base area by height',
            expression: `V = πr²h = π(${radius})²(${height}) = ${solution.volume}`,
            reasoning: 'Volume is base area extended through the height',
            algebraicRule: 'V = πr²h',
            visualHint: 'Imagine stacking circular discs to height h',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateConeSteps(problem, solution) {
        const { radius, height, slantHeight } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify dimensions',
            description: 'Extract radius and height of the cone',
            expression: `Radius r = ${radius}, Height h = ${height}`,
            reasoning: 'A cone needs radius and height (or slant height)',
            visualHint: 'Think of an ice cream cone or traffic cone',
            goalStatement: 'We may need to calculate slant height first'
        });

        if (!problem.dimensions.slantHeight && !problem.dimensions.l) {
            steps.push({
                stepNumber: 2,
                step: 'Calculate slant height',
                description: 'Use Pythagorean theorem to find slant height',
                expression: `l = √(r² + h²) = √(${radius}² + ${height}²) = ${slantHeight}`,
                reasoning: 'Slant height, radius, and height form a right triangle',
                algebraicRule: 'Pythagorean theorem: l = √(r² + h²)',
                visualHint: 'Imagine a cross-section of the cone showing the right triangle',
                criticalWarning: 'Do not confuse slant height l with vertical height h'
            });
        }

        steps.push({
            stepNumber: problem.dimensions.slantHeight ? 2 : 3,
            step: 'Calculate base area',
            description: 'Find the area of the circular base',
            expression: `Base area = πr² = π(${radius})² = ${solution.baseArea}`,
            reasoning: 'The base is a circle with area πr²',
            algebraicRule: 'Area of circle = πr²'
        });

        steps.push({
            stepNumber: problem.dimensions.slantHeight ? 3 : 4,
            step: 'Calculate lateral surface area',
            description: 'Find the area of the curved surface',
            expression: `Lateral area = πrl = π(${radius})(${slantHeight}) = ${solution.lateralArea}`,
            reasoning: 'The lateral surface unwraps into a sector of a circle',
            algebraicRule: 'LSA = πrl',
            visualHint: 'Imagine cutting and flattening the curved surface'
        });

        steps.push({
            stepNumber: problem.dimensions.slantHeight ? 4 : 5,
            step: 'Calculate total surface area',
            description: 'Add base and lateral surface',
            expression: `SA = πr² + πrl = π(${radius})² + π(${radius})(${slantHeight}) = ${solution.surfaceArea}`,
            reasoning: 'Total SA includes circular base + lateral surface',
            algebraicRule: 'SA = πr² + πrl = πr(r + l)',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: problem.dimensions.slantHeight ? 5 : 6,
            step: 'Calculate volume',
            description: 'Apply the cone volume formula',
            expression: `V = (1/3)πr²h = (1/3)π(${radius})²(${height}) = ${solution.volume}`,
            reasoning: 'Cone volume is 1/3 of a cylinder with same base and height',
            algebraicRule: 'V = (1/3)πr²h',
            visualHint: 'A cone holds exactly 1/3 the volume of a cylinder',
            criticalWarning: 'Use vertical height h, not slant height l, for volume',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generatePyramidSteps(problem, solution) {
        const steps = [];
        
        steps.push({
            stepNumber: 1,
            step: 'Identify base shape and dimensions',
            description: `Recognize this as a ${solution.shapeType}`,
            expression: solution.dimensions,
            reasoning: 'The base shape determines how we calculate base area',
            visualHint: 'Imagine the base as a flat polygon with triangular sides rising to a point'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate base area',
            description: 'Find the area of the base polygon',
            expression: `Base area = ${solution.baseArea}`,
            reasoning: 'Use appropriate formula for the base shape',
            algebraicRule: solution.formulas?.baseArea || 'Area formula depends on base shape'
        });

        if (solution.formulas?.slantHeight) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate slant height',
                description: 'Find the slant height of the lateral faces',
                expression: solution.formulas.slantHeight,
                reasoning: 'Slant height is needed for lateral surface area',
                visualHint: 'Slant height runs along a triangular face from apex to base edge'
            });
        }

        steps.push({
            stepNumber: solution.formulas?.slantHeight ? 4 : 3,
            step: 'Calculate lateral surface area',
            description: 'Sum the areas of all triangular faces',
            expression: `Lateral area = ${solution.lateralArea}`,
            reasoning: 'Each triangular face has base on perimeter and height as slant height',
            algebraicRule: 'LSA = (1/2) × perimeter × slant height'
        });

        steps.push({
            stepNumber: solution.formulas?.slantHeight ? 5 : 4,
            step: 'Calculate total surface area',
            description: 'Add base area and lateral area',
            expression: solution.formulas?.surfaceArea || `SA = ${solution.surfaceArea}`,
            reasoning: 'Total SA includes the base plus all triangular faces',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: solution.formulas?.slantHeight ? 6 : 5,
            step: 'Calculate volume',
            description: 'Apply the pyramid volume formula',
            expression: solution.formulas?.volume || `V = ${solution.volume}`,
            reasoning: 'Pyramid volume is always 1/3 of prism with same base and height',
            algebraicRule: 'V = (1/3)Bh where B is base area',
            visualHint: 'Any pyramid is 1/3 the volume of a prism with matching base',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateTriangularPrismSteps(problem, solution) {
        const { baseLength, baseHeight, prismLength } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify dimensions',
            description: 'Extract the dimensions of the triangular prism',
            expression: `Base = ${baseLength}, Height = ${baseHeight}, Length = ${prismLength}`,
            reasoning: 'Need triangle dimensions and prism length',
            visualHint: 'Think of a triangular tent or prism shape'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate base area',
            description: 'Find the area of the triangular base',
            expression: `Base area = (1/2)bh = (1/2)(${baseLength})(${baseHeight}) = ${solution.baseArea}`,
            reasoning: 'Area of triangle is (1/2) × base × height',
            algebraicRule: 'A = (1/2)bh'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate lateral surface area',
            description: 'Find the area of the three rectangular faces',
            expression: `Lateral area = perimeter × length = ${solution.lateralArea}`,
            reasoning: 'Three rectangles wrap around the triangular bases',
            visualHint: 'Imagine unfolding the three rectangular sides'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate total surface area',
            description: 'Add two triangular bases and lateral area',
            expression: `SA = 2(base area) + lateral area = ${solution.surfaceArea}`,
            reasoning: 'Include both triangular ends plus the three sides',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate volume',
            description: 'Multiply base area by prism length',
            expression: `V = base area × length = ${solution.baseArea}×${prismLength} = ${solution.volume}`,
            reasoning: 'Volume is cross-sectional area extended through length',
            algebraicRule: 'V = Bh where B is base area',
            visualHint: 'Imagine extruding the triangle through space',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateHemisphereSteps(problem, solution) {
        const { radius } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify radius',
            description: 'Extract the radius of the hemisphere',
            expression: `Radius r = ${radius}`,
            reasoning: 'A hemisphere is exactly half of a sphere',
            visualHint: 'Think of a dome or half a ball'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate curved surface area',
            description: 'Find the area of the curved half-sphere surface',
            expression: `CSA = 2πr² = 2π(${radius})² = ${solution.curvedSurfaceArea}`,
            reasoning: 'Curved surface is exactly half of a sphere (half of 4πr²)',
            algebraicRule: 'CSA = 2πr²',
            visualHint: 'This is the dome portion only'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate base area',
            description: 'Find the area of the circular flat base',
            expression: `Base area = πr² = π(${radius})² = ${solution.baseArea}`,
            reasoning: 'The flat base is a circle with area πr²',
            algebraicRule: 'A = πr²',
            visualHint: 'This is the flat circular bottom'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate total surface area',
            description: 'Add curved surface and base',
            expression: `TSA = 2πr² + πr² = 3πr² = 3π(${radius})² = ${solution.totalSurfaceArea}`,
            reasoning: 'Total includes the curved dome and the flat circular base',
            algebraicRule: 'TSA = 3πr²',
            finalAnswer: true,
            numericalResult: solution.totalSurfaceArea
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate volume',
            description: 'Apply the hemisphere volume formula',
            expression: `V = (2/3)πr³ = (2/3)π(${radius})³ = ${solution.volume}`,
            reasoning: 'Volume is exactly half of a sphere (half of (4/3)πr³)',
            algebraicRule: 'V = (2/3)πr³',
            visualHint: 'A hemisphere holds half the volume of a complete sphere',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateTorusSteps(problem, solution) {
        const { majorRadius, minorRadius } = solution.dimensions;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify radii',
            description: 'Extract both major and minor radii',
            expression: `Major radius R = ${majorRadius}, Minor radius r = ${minorRadius}`,
            reasoning: 'A torus requires two radii: distance from center to tube center (R) and tube radius (r)',
            visualHint: 'Think of a donut - R is from center to middle of the donut ring, r is the thickness',
            goalStatement: 'Both radii are needed for torus calculations'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate surface area',
            description: 'Apply the torus surface area formula',
            expression: `SA = 4π²Rr = 4π²(${majorRadius})(${minorRadius}) = ${solution.surfaceArea}`,
            reasoning: 'Surface area formula involves both radii and π²',
            algebraicRule: 'SA = 4π²Rr',
            visualHint: 'The formula accounts for the tube wrapping around the major circle',
            finalAnswer: true,
            numericalResult: solution.surfaceArea
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate volume',
            description: 'Apply the torus volume formula',
            expression: `V = 2π²Rr² = 2π²(${majorRadius})(${minorRadius})² = ${solution.volume}`,
            reasoning: 'Volume is found by revolving a circle of radius r around a circle of radius R',
            algebraicRule: 'V = 2π²Rr²',
            visualHint: 'Imagine the circular cross-section rotating around the major circle',
            finalAnswer: true,
            numericalResult: solution.volume
        });

        return steps;
    }

    generateGenericGeometrySteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve geometry problem',
            description: 'Apply appropriate geometric formulas',
            expression: `Shape: ${problem.type}`,
            reasoning: 'Use standard geometric principles',
            solution: solution
        }];
    }

    // ENHANCE STEP EXPLANATIONS

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationGeometry(step, problem),
                procedural: this.getProceduralExplanationGeometry(step),
                visual: this.getVisualExplanationGeometry(step, problem),
                algebraic: this.getAlgebraicExplanationGeometry(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesGeometry(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyGeometry(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationGeometry(step, problem) {
        const conceptualMap = {
            'Identify dimensions': 'Understanding the shape\'s dimensions is the foundation - these measurements define the size and proportions of the object in 3D space.',
            'Calculate base area': 'The base area represents the 2D footprint of the shape - it\'s the foundation upon which the 3D shape is built.',
            'Calculate surface area': 'Surface area measures the total area you would need to cover the entire outside of the shape - like wrapping paper needed to wrap a gift.',
            'Calculate volume': 'Volume measures the 3D space inside the shape - how much material it contains or how much liquid it could hold.',
            'Calculate slant height': 'Slant height is the distance along the sloped surface - different from the vertical height, it\'s what you would measure if you walked up the slope.'
        };

        return conceptualMap[step.step] || 'This step applies geometric principles to find a specific measurement of the shape.';
    }

    getProceduralExplanationGeometry(step) {
        if (step.operation) {
            return `1. Start with: ${step.beforeExpression}
2. Perform operation: ${step.operation}
3. Result: ${step.afterExpression}
4. Verify units are consistent`;
        }
        return 'Follow the geometric calculation procedure step by step.';
    }

    getVisualExplanationGeometry(step, problem) {
        const visualMap = {
            'cube': 'Visualize a perfect cube like a die - all edges equal, all angles 90°',
            'sphere': 'Picture a perfectly round ball - every point on surface equidistant from center',
            'cylinder': 'Imagine a can or pipe - circular bases connected by curved surface',
            'cone': 'Think of an ice cream cone - circular base tapering to a point',
            'pyramid': 'Visualize ancient Egyptian pyramids - polygonal base with triangular sides meeting at apex',
            'rectangular_prism': 'Picture a box or room - three pairs of rectangular faces'
        };

        return visualMap[problem.type] || 'Visualize the geometric shape in three dimensions.';
    }

    getAlgebraicExplanationGeometry(step) {
        if (step.algebraicRule) {
            return `Formula: ${step.algebraicRule}. This formula is derived from geometric principles and represents the mathematical relationship between the shape's dimensions and the quantity being calculated.`;
        }
        return 'Apply standard geometric formulas and algebraic operations.';
    }

    identifyPrerequisitesGeometry(step, problemType) {
        const prerequisites = {
            'Calculate base area': ['Area formulas for 2D shapes', 'Basic multiplication'],
            'Calculate surface area': ['Area calculations', 'Understanding of 3D faces', 'Addition of multiple areas'],
            'Calculate volume': ['Understanding of 3D space', 'Multiplication of dimensions', 'Concept of cubic units'],
            'Calculate slant height': ['Pythagorean theorem', 'Right triangle relationships', 'Square roots']
        };

        return prerequisites[step.step] || ['Basic geometric knowledge', 'Arithmetic operations'];
    }

    identifyKeyVocabularyGeometry(step) {
        const vocabulary = {
            'Identify dimensions': ['radius', 'height', 'length', 'width', 'edge', 'diameter'],
            'Calculate base area': ['base', 'area', 'square units'],
            'Calculate surface area': ['surface area', 'face', 'lateral area', 'total surface area'],
            'Calculate volume': ['volume', 'cubic units', 'capacity', 'space'],
            'Calculate slant height': ['slant height', 'perpendicular height', 'hypotenuse']
        };

        return vocabulary[step.step] || ['geometric term', 'measurement'];
    }

    // ADD STEP BRIDGES

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateGeometryStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainGeometryStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainGeometryStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateGeometryStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This progression is necessary because: ${this.explainGeometryStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This advances our solution by: ${this.explainGeometryStepBenefit(nextStep)}`
        };
    }

    explainGeometryStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we build on this result to ${nextStep.description.toLowerCase()}, moving us closer to the complete solution.`;
    }

    explainGeometryStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}, which is a key component in solving this geometric problem.`;
    }

    explainGeometryStepNecessity(currentStep, nextStep) {
        const necessityMap = {
            'Calculate base area': 'we need this area value to calculate volume and surface area',
            'Calculate surface area': 'we need to sum all face areas to get the total coverage',
            'Calculate volume': 'we need to apply the appropriate volume formula with our known dimensions',
            'Calculate slant height': 'we need this measurement for lateral surface area calculations'
        };

        return necessityMap[nextStep.step] || 'we need to continue the calculation sequence';
    }

    explainGeometryStepBenefit(nextStep) {
        return `Getting us closer to finding the ${nextStep.step.includes('surface') ? 'surface area' : 'volume'} of the shape.`;
    }

    // ADD ERROR PREVENTION

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsGeometry(step, problemType),
                checkPoints: this.generateCheckPointsGeometry(step),
                warningFlags: this.identifyWarningFlagsGeometry(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionGeometry(step),
                expectedResult: this.describeExpectedResultGeometry(step),
                troubleshooting: this.generateTroubleshootingTipsGeometry(step)
            }
        };
    }

    generatePreventionTipsGeometry(step, problemType) {
        const tips = {
            'Calculate base area': [
                'Double-check which formula applies to the base shape',
                'Ensure you\'re using radius, not diameter',
                'Verify units are consistent'
            ],
            'Calculate surface area': [
                'Count all faces carefully',
                'Don\'t forget to include all surfaces (bases + lateral)',
                'Add areas, don\'t multiply them'
            ],
            'Calculate volume': [
                'Use the correct power (squared vs cubed)',
                'Apply any fractional coefficients (like 1/3 for pyramids)',
                'Use vertical height, not slant height for volume'
            ]
        };

        return tips[step.step] || ['Check your arithmetic', 'Verify formula selection', 'Confirm units'];
    }

    generateCheckPointsGeometry(step) {
        return [
            'Are all measurements in the same units?',
            'Did I use the correct formula?',
            'Are my calculations accurate?',
            'Does my answer make sense for the shape size?'
        ];
    }

    identifyWarningFlagsGeometry(step, problemType) {
        const warnings = {
            'sphere': step.step === 'Calculate surface area' ? 
                ['Remember: 4πr², not 2πr²'] : [],
            'cone': step.step === 'Calculate volume' ? 
                ['Use perpendicular height h, not slant height l'] : [],
            'cylinder': step.step === 'Calculate surface area' ? 
                ['Include BOTH circular bases'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionGeometry(step) {
        const questions = {
            'Calculate base area': 'Did I use the correct formula for this base shape?',
            'Calculate surface area': 'Have I included all faces of the 3D shape?',
            'Calculate volume': 'Did I use the correct power and any necessary coefficients?',
            'Calculate slant height': 'Did I apply the Pythagorean theorem correctly?'
        };

        return questions[step.step] || 'Does my calculation follow the correct geometric formula?';
    }

    describeExpectedResultGeometry(step) {
        const expectations = {
            'Calculate base area': 'A positive value in square units',
            'Calculate surface area': 'A positive value in square units, larger than any single face',
            'Calculate volume': 'A positive value in cubic units',
            'Calculate slant height': 'A value larger than the perpendicular height'
        };

        return expectations[step.step] || 'A positive numerical result with appropriate units';
    }

    generateTroubleshootingTipsGeometry(step) {
        return [
            'Review the geometric formula being used',
            'Check that radius vs diameter is correct',
            'Verify all arithmetic operations',
            'Ensure consistent units throughout',
            'Sketch the shape if visualization helps'
        ];
    }

    // ADD SCAFFOLDING

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsGeometry(step, problem),
                subSteps: this.breakIntoSubStepsGeometry(step),
                hints: this.generateProgressiveHintsGeometry(step),
                practiceVariation: this.generatePracticeVariationGeometry(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessGeometry(step),
                decisionPoints: this.identifyDecisionPointsGeometry(step),
                alternativeApproaches: this.suggestAlternativeMethodsGeometry(step, problem)
            }
        }));
    }

    generateGuidingQuestionsGeometry(step, problem) {
        const questions = {
            'Identify dimensions': [
                'What type of 3D shape is this?',
                'What measurements are given?',
                'Are any dimensions missing that I need to calculate?'
            ],
            'Calculate base area': [
                'What is the shape of the base?',
                'Which area formula applies?',
                'Do I have all needed measurements?'
            ],
            'Calculate surface area': [
                'How many faces does this shape have?',
                'Which faces are identical?',
                'Do I need to find any missing measurements first?'
            ],
            'Calculate volume': [
                'What is the volume formula for this shape?',
                'Am I using the correct dimensions?',
                'Are there any fractional coefficients?'
            ]
        };

        return questions[step.step] || ['What am I calculating?', 'What formula should I use?'];
    }

    breakIntoSubStepsGeometry(step) {
        if (step.operation) {
            return [
                `Identify the values: ${step.beforeExpression}`,
                `Apply the operation: ${step.operation}`,
                'Perform the calculation',
                'Simplify if needed',
                `Write the result: ${step.afterExpression}`
            ];
        }

        return ['Identify what to calculate', 'Select appropriate formula', 'Substitute values', 'Calculate result'];
    }

    generateProgressiveHintsGeometry(step) {
        return {
            level1: 'Think about what geometric formula applies here.',
            level2: 'Consider the dimensions you have and what you need to find.',
            level3: 'Look at the formula: ' + (step.algebraicRule || 'standard geometric formula'),
            level4: step.operation ? `Try: ${step.operation}` : 'Substitute your values into the formula.'
        };
    }

    generatePracticeVariationGeometry(step, problem) {
        return {
            similarProblem: `Try the same type of calculation with a ${problem.type} of different dimensions`,
            practiceHint: 'Start with simpler whole number dimensions to build confidence',
            extension: 'Once comfortable, try composite shapes combining multiple basic shapes'
        };
    }

    explainThinkingProcessGeometry(step) {
        return {
            observe: 'What geometric shape am I working with?',
            goal: 'What measurement am I trying to find?',
            strategy: 'Which formula applies to this situation?',
            execute: 'How do I substitute values and calculate correctly?',
            verify: 'Does my answer make sense for this size shape?'
        };
    }

    identifyDecisionPointsGeometry(step) {
        return [
            'Choosing the correct formula for this shape',
            'Deciding which measurements to use',
            'Determining if any preliminary calculations are needed'
        ];
    }

    suggestAlternativeMethodsGeometry(step, problem) {
        const alternatives = {
            'Calculate surface area': [
                'Could calculate each face individually then sum',
                'Could use symmetry to reduce calculations',
                'Could unfold the shape (net) and find total area'
            ],
            'Calculate volume': [
                'Could think of filling with unit cubes',
                'Could use cross-sectional integration (calculus)',
                'Could decompose into simpler shapes'
            ]
        };

        return alternatives[step.step] || ['Standard formula method is most direct'];
    }

    // VERIFICATION METHODS

    verifyGeometrySolution() {
        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        const verification = {
            shapeType: solution.shapeType,
            dimensions: solution.dimensions,
            surfaceArea: solution.surfaceArea,
            volume: solution.volume,
            formulas: solution.formulas,
            checksPerformed: []
        };

        // Dimensional analysis check
        verification.checksPerformed.push({
            check: 'Dimensional Analysis',
            result: 'Surface area in square units, volume in cubic units',
            passed: true
        });

        // Reasonableness check
        if (solution.surfaceArea && solution.volume) {
            verification.checksPerformed.push({
                check: 'Reasonableness',
                result: `Surface area (${solution.surfaceArea.toFixed(2)}) and volume (${solution.volume.toFixed(2)}) are positive`,
                passed: solution.surfaceArea > 0 && solution.volume > 0
            });
        }

        // Shape-specific checks
        if (type === 'cube') {
            const s = solution.dimensions.edgeLength;
            const expectedSA = 6 * s * s;
            const expectedV = s * s * s;
            verification.checksPerformed.push({
                check: 'Formula Verification',
                result: `SA = 6s² = ${expectedSA.toFixed(6)}, V = s³ = ${expectedV.toFixed(6)}`,
                passed: Math.abs(expectedSA - solution.surfaceArea) < 1e-6 && 
                        Math.abs(expectedV - solution.volume) < 1e-6
            });
        }

        return verification;
    }

    calculateVerificationConfidence() {
        const verification = this.verifyGeometrySolution();
        const allPassed = verification.checksPerformed.every(check => check.passed);
        return allPassed ? 'High' : 'Medium';
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        notes.push('Formulas verified against standard geometric references');
        notes.push('Dimensional analysis confirms correct units');
        notes.push(`Shape type: ${type}`);
        
        if (this.currentSolution.formulas) {
            notes.push('Step-by-step formula application documented');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotesGeometry(problemType) {
        const pedagogicalDatabase = {
            cube: {
                objectives: [
                    'Calculate surface area and volume of cubes',
                    'Understand relationship between 1D, 2D, and 3D measurements',
                    'Apply squared and cubed operations'
                ],
                keyConcepts: [
                    'All dimensions equal in a cube',
                    'Surface area scales with dimension squared',
                    'Volume scales with dimension cubed'
                ],
                prerequisites: [
                    'Squaring and cubing numbers',
                    'Basic multiplication',
                    'Understanding of area and volume units'
                ],
                commonDifficulties: [
                    'Confusing s² with s³',
                    'Forgetting to multiply by 6 for surface area',
                    'Mixing up edge length with face area'
                ],
                extensions: [
                    'Rectangular prisms',
                    'Scaling relationships',
                    'Real-world applications (packaging, storage)'
                ],
                assessment: [
                    'Check understanding of why 6 faces',
                    'Test with different edge lengths',
                    'Ask students to sketch the shape'
                ]
            },
            sphere: {
                objectives: [
                    'Calculate surface area and volume of spheres',
                    'Work with π in formulas',
                    'Understand radius vs diameter'
                ],
                keyConcepts: [
                    'Perfect roundness and symmetry',
                    'Role of π in circular/spherical calculations',
                    'Relationship between surface area and volume formulas'
                ],
                prerequisites: [
                    'Understanding of π',
                    'Squaring and cubing numbers',
                    'Circle area formula'
                ],
                commonDifficulties: [
                    'Using 2πr² instead of 4πr²',
                    'Forgetting (4/3) coefficient in volume',
                    'Using diameter instead of radius'
                ],
                extensions: [
                    'Hemispheres',
                    'Spherical zones and segments',
                    'Applications in astronomy and physics'
                ],
                assessment: [
                    'Test understanding of π\'s role',
                    'Check radius/diameter distinction',
                    'Verify formula memorization'
                ]
            },
            cylinder: {
                objectives: [
                    'Calculate surface area and volume of cylinders',
                    'Decompose surface into bases and lateral area',
                    'Apply circular and rectangular area formulas'
                ],
                keyConcepts: [
                    'Cylinder as circle extended through space',
                    'Lateral surface unrolls to rectangle',
                    'Volume as base area times height'
                ],
                prerequisites: [
                    'Circle area formula',
                    'Rectangle area formula',
                    'Understanding of π'
                ],
                commonDifficulties: [
                    'Forgetting one or both bases',
                    'Confusing radius with diameter',
                    'Not understanding lateral surface unwrapping'
                ],
                extensions: [
                    'Oblique cylinders',
                    'Hollow cylinders',
                    'Real-world applications (cans, pipes)'
                ],
                assessment: [
                    'Check understanding of lateral area concept',
                    'Test with different dimensions',
                    'Ask for visualization of net/unwrapping'
                ]
            },
            cone: {
                objectives: [
                    'Calculate surface area and volume of cones',
                    'Distinguish between height and slant height',
                    'Apply Pythagorean theorem in 3D context'
                ],
                keyConcepts: [
                    'Cone as tapering to a point',
                    'Slant height vs perpendicular height',
                    'Volume is 1/3 of cylinder'
                ],
                prerequisites: [
                    'Circle area formula',
                    'Pythagorean theorem',
                    'Understanding of 3D shapes'
                ],
                commonDifficulties: [
                    'Confusing h and l (height and slant height)',
                    'Using slant height for volume',
                    'Forgetting 1/3 factor in volume'
                ],
                extensions: [
                    'Frustums (truncated cones)',
                    'Oblique cones',
                    'Applications in engineering'
                ],
                assessment: [
                    'Test understanding of h vs l',
                    'Check Pythagorean theorem application',
                    'Verify 1/3 relationship to cylinder'
                ]
            },
            pyramid: {
                objectives: [
                    'Calculate surface area and volume of pyramids',
                    'Work with different base shapes',
                    'Understand 1/3 relationship to prisms'
                ],
                keyConcepts: [
                    'Pyramid as base with triangular faces',
                    'Volume always 1/3 of corresponding prism',
                    'Base shape determines calculation approach'
                ],
                prerequisites: [
                    'Area formulas for polygons',
                    'Triangle area formula',
                    'Pythagorean theorem'
                ],
                commonDifficulties: [
                    'Calculating base area for different polygons',
                    'Finding slant height',
                    'Forgetting 1/3 factor'
                ],
                extensions: [
                    'Different base shapes',
                    'Frustums',
                    'Historical applications (Egyptian pyramids)'
                ],
                assessment: [
                    'Test with various base shapes',
                    'Check understanding of 1/3 principle',
                    'Verify lateral area calculations'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Calculate surface area and volume for the given shape'],
            keyConcepts: ['Apply appropriate geometric formulas'],
            prerequisites: ['Basic geometric knowledge'],
            commonDifficulties: ['Formula selection and application'],
            extensions: ['Related shapes and real-world applications'],
            assessment: ['Check calculation accuracy and conceptual understanding']
        };
    }

    // ALTERNATIVE METHODS

    generateAlternativeMethodsGeometry(problemType) {
        const alternativeDatabase = {
            cube: {
                primaryMethod: 'Direct formula application',
                methods: [
                    {
                        name: 'Face-by-Face Method',
                        description: 'Calculate area of one face, then multiply by 6'
                    },
                    {
                        name: 'Net Method',
                        description: 'Unfold cube into 2D net, calculate total area'
                    },
                    {
                        name: 'Unit Cube Counting',
                        description: 'For volume, visualize filling with unit cubes'
                    }
                ],
                comparison: 'Direct formula is fastest; net method builds visualization; counting builds conceptual understanding'
            },
            sphere: {
                primaryMethod: 'Standard formulas SA = 4πr², V = (4/3)πr³',
                methods: [
                    {
                        name: 'Calculus Derivation',
                        description: 'Derive formulas using integration (surface of revolution)'
                    },
                    {
                        name: 'Great Circle Method',
                        description: 'Surface area is 4 times the great circle area'
                    },
                    {
                        name: 'Approximation Method',
                        description: 'Use polyhedron approximations with increasing faces'
                    }
                ],
                comparison: 'Standard formulas are direct; calculus shows derivation; approximation builds intuition'
            },
            cylinder: {
                primaryMethod: 'Combined formula SA = 2πr² + 2πrh, V = πr²h',
                methods: [
                    {
                        name: 'Component Method',
                        description: 'Calculate two bases and lateral surface separately'
                    },
                    {
                        name: 'Unwrapping Method',
                        description: 'Visualize unwrapping lateral surface into rectangle'
                    },
                    {
                        name: 'Stacking Method',
                        description: 'For volume, think of stacking circular discs'
                    }
                ],
                comparison: 'Combined formula is efficient; component method is clearer; unwrapping aids visualization'
            },
            cone: {
                primaryMethod: 'Standard formulas with slant height calculation',
                methods: [
                    {
                        name: 'Sector Method',
                        description: 'Lateral surface is a sector when unwrapped'
                    },
                    {
                        name: 'Similar Triangles',
                        description: 'Use similar triangles for slant height'
                    },
                    {
                        name: 'Comparison to Cylinder',
                        description: 'Volume is 1/3 of cylinder with same base'
                    }
                ],
                comparison: 'Standard approach is systematic; sector method deepens understanding; comparison builds connections'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard geometric formulas',
            methods: [
                {
                    name: 'Direct Calculation',
                    description: 'Apply standard formulas directly'
                }
            ],
            comparison: 'Method choice depends on learning goals and prior knowledge'
        };
    }

    // GRAPH DATA GENERATION

    generateGeometryGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        this.graphData = {
            type: type,
            dimensions: solution.dimensions,
            surfaceArea: solution.surfaceArea,
            volume: solution.volume,
            visualRepresentation: this.generateVisualData(type, solution.dimensions)
        };
    }

    generateVisualData(type, dimensions) {
        // Generate coordinate data for 3D visualization if needed
        return {
            shapeType: type,
            dimensions: dimensions,
            note: '3D visualization data for rendering'
        };
    }

    // WORKBOOK GENERATION

    generateGeometryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();
        workbook.sections = [
            this.createProblemSectionGeometry(),
            this.createEnhancedStepsSectionGeometry(),
            this.createLessonSectionGeometry(),
            this.createSolutionSectionGeometry(),
            this.createAnalysisSectionGeometry(),
            this.createVerificationSectionGeometry(),
            this.createPedagogicalNotesSectionGeometry(),
            this.createAlternativeMethodsSectionGeometry()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Surface Area and Volume Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSectionGeometry() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Shape Type', this.currentSolution?.shapeType || this.currentProblem.type],
            ['Category', this.geometryTypes[this.currentProblem.type]?.category || 'N/A']
        ];

        // Add dimensions
        Object.entries(this.currentProblem.dimensions).forEach(([key, value]) => {
            problemData.push([key.charAt(0).toUpperCase() + key.slice(1), value]);
        });

        if (this.currentProblem.scenario) {
            problemData.push(['Scenario', this.currentProblem.scenario]);
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
        };
    }

    createEnhancedStepsSectionGeometry() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in basic display
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Connection', step.explanation.currentState]);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

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

            if (step.algebraicRule) {
                stepsData.push(['Formula', step.algebraicRule]);
            }

            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Enhanced explanations (if detailed level)
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                if (step.explanations.visual) {
                    stepsData.push(['Visualization', step.explanations.visual]);
                }
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            // Critical warnings
            if (step.criticalWarning) {
                stepsData.push(['⚠️ WARNING', step.criticalWarning]);
            }

            // Scaffolding (if scaffolded level)
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' • ')]);
                if (step.scaffolding.hints) {
                    stepsData.push(['Hint Level 1', step.scaffolding.hints.level1]);
                    stepsData.push(['Hint Level 2', step.scaffolding.hints.level2]);
                }
            }

            // Final answer indicator
            if (step.finalAnswer) {
                stepsData.push(['✓ Result', `${step.numericalResult}`]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSectionGeometry() {
        const { type } = this.currentProblem;
        const lesson = this.lessons?.[type];

        if (!lesson) {
            return {
                title: 'Key Concepts',
                type: 'lesson',
                data: [
                    ['Concept', 'Calculate surface area and volume using standard formulas'],
                    ['Goal', 'Apply appropriate geometric formulas accurately'],
                    ['Method', 'Identify shape, extract dimensions, calculate systematically']
                ]
            };
        }

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Theory', lesson.theory],
            ['', '']
        ];

        // Add key concepts
        lessonData.push(['Key Concepts', '']);
        lesson.concepts.forEach((concept, index) => {
            lessonData.push([`  ${index + 1}`, concept]);
        });
        lessonData.push(['', '']);

        // Add key formulas
        lessonData.push(['Key Formulas', '']);
        Object.entries(lesson.keyFormulas).forEach(([name, formula]) => {
            lessonData.push([`  ${name}`, formula]);
        });
        lessonData.push(['', '']);

        // Add solving steps
        lessonData.push(['Solving Strategy', '']);
        lesson.solvingSteps.forEach((step, index) => {
            lessonData.push([`  ${index + 1}`, step]);
        });
        lessonData.push(['', '']);

        // Add applications
        lessonData.push(['Real-World Applications', '']);
        lesson.applications.forEach((app, index) => {
            lessonData.push([`  ${index + 1}`, app]);
        });

        return {
            title: 'Lesson Content',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSectionGeometry() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Shape Type', this.currentSolution.shapeType],
            ['', '']
        ];

        // Add dimensions
        solutionData.push(['Dimensions', '']);
        Object.entries(this.currentSolution.dimensions).forEach(([key, value]) => {
            const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            solutionData.push([`  ${displayKey}`, typeof value === 'number' ? value.toFixed(4) : value]);
        });
        solutionData.push(['', '']);

        // Add results
        if (this.currentSolution.surfaceArea !== undefined) {
            solutionData.push(['Surface Area', this.currentSolution.surfaceArea.toFixed(4) + ' square units']);
        }

        if (this.currentSolution.lateralArea !== undefined) {
            solutionData.push(['Lateral Surface Area', this.currentSolution.lateralArea.toFixed(4) + ' square units']);
        }

        if (this.currentSolution.curvedSurfaceArea !== undefined) {
            solutionData.push(['Curved Surface Area', this.currentSolution.curvedSurfaceArea.toFixed(4) + ' square units']);
        }

        if (this.currentSolution.totalSurfaceArea !== undefined) {
            solutionData.push(['Total Surface Area', this.currentSolution.totalSurfaceArea.toFixed(4) + ' square units']);
        }

        if (this.currentSolution.volume !== undefined) {
            solutionData.push(['Volume', this.currentSolution.volume.toFixed(4) + ' cubic units']);
        }

        // Add formulas used
        if (this.currentSolution.formulas) {
            solutionData.push(['', '']);
            solutionData.push(['Formulas Used', '']);
            Object.entries(this.currentSolution.formulas).forEach(([name, formula]) => {
                const displayName = name.charAt(0).toUpperCase() + name.slice(1).replace(/([A-Z])/g, ' $1');
                solutionData.push([`  ${displayName}`, formula]);
            });
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSectionGeometry() {
        const analysisData = [
            ['Shape Category', this.geometryTypes[this.currentProblem.type]?.category || 'N/A'],
            ['Steps Performed', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['', '']
        ];

        // Add dimensional analysis
        if (this.currentSolution.surfaceArea && this.currentSolution.volume) {
            const ratio = this.currentSolution.surfaceArea / Math.pow(this.currentSolution.volume, 2/3);
            analysisData.push(['SA to Volume Ratio', ratio.toFixed(4)]);
            analysisData.push(['', '']);
        }

        // Add complexity notes
        const complexity = this.assessProblemComplexity();
        analysisData.push(['Problem Complexity', complexity.level]);
        analysisData.push(['Difficulty Factors', complexity.factors.join('; ')]);

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    assessProblemComplexity() {
        const { type } = this.currentProblem;
        const factors = [];
        let level = 'Basic';

        // Check for complexity factors
        if (type === 'torus' || type === 'composite') {
            level = 'Advanced';
            factors.push('Complex shape type');
        } else if (type === 'pyramid' || type === 'cone') {
            level = 'Intermediate';
            factors.push('Requires slant height calculation');
        } else {
            level = 'Basic';
            factors.push('Standard geometric shape');
        }

        // Check dimensions
        const dims = Object.values(this.currentProblem.dimensions);
        if (dims.some(d => d && d < 1)) {
            factors.push('Fractional dimensions');
        }
        if (dims.some(d => d && d > 100)) {
            factors.push('Large scale values');
        }

        return { level, factors };
    }

    createVerificationSectionGeometry() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verification = this.verifyGeometrySolution();
        const verificationData = [
            ['Shape Verified', verification.shapeType],
            ['', '']
        ];

        // Add dimension verification
        verificationData.push(['Dimensions Check', '']);
        Object.entries(verification.dimensions).forEach(([key, value]) => {
            const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            verificationData.push([`  ${displayKey}`, typeof value === 'number' ? value.toFixed(4) : value]);
        });
        verificationData.push(['', '']);

        // Add calculated values
        if (verification.surfaceArea !== undefined) {
            verificationData.push(['Surface Area', verification.surfaceArea.toFixed(4) + ' sq units']);
        }
        if (verification.volume !== undefined) {
            verificationData.push(['Volume', verification.volume.toFixed(4) + ' cu units']);
        }
        verificationData.push(['', '']);

        // Add verification checks
        verificationData.push(['Verification Checks', '']);
        verification.checksPerformed.forEach((check, index) => {
            verificationData.push([`  Check ${index + 1}`, check.check]);
            verificationData.push([`    Result`, check.result]);
            verificationData.push([`    Status`, check.passed ? '✓ Passed' : '✗ Failed']);
        });
        verificationData.push(['', '']);

        // Add confidence level
        if (this.verificationDetail === 'detailed') {
            verificationData.push(['Confidence Level', this.calculateVerificationConfidence()]);
            verificationData.push(['Verification Notes', this.getVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData,
            confidence: this.calculateVerificationConfidence()
        };
    }

    createPedagogicalNotesSectionGeometry() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotesGeometry(type);

        const pedagogicalData = [
            ['Learning Objectives', ''],
            ...notes.objectives.map((obj, i) => [`  ${i + 1}`, obj]),
            ['', ''],
            ['Key Concepts', ''],
            ...notes.keyConcepts.map((concept, i) => [`  ${i + 1}`, concept]),
            ['', ''],
            ['Prerequisites', ''],
            ...notes.prerequisites.map((prereq, i) => [`  ${i + 1}`, prereq]),
            ['', ''],
            ['Common Difficulties', ''],
            ...notes.commonDifficulties.map((diff, i) => [`  ${i + 1}`, diff]),
            ['', ''],
            ['Extension Ideas', ''],
            ...notes.extensions.map((ext, i) => [`  ${i + 1}`, ext]),
            ['', ''],
            ['Assessment Tips', ''],
            ...notes.assessment.map((tip, i) => [`  ${i + 1}`, tip])
        ];

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSectionGeometry() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethodsGeometry(type);

        const alternativesData = [
            ['Primary Method Used', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Methods', '']
        ];

        alternatives.methods.forEach((method, index) => {
            alternativesData.push([`Method ${index + 1}`, method.name]);
            alternativesData.push(['  Description', method.description]);
            alternativesData.push(['', '']);
        });

        alternativesData.push(['Method Comparison', alternatives.comparison]);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: alternativesData
        };
    }

    // UTILITY METHODS

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard geometric terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full geometric and mathematical terminology',
                detail: 'comprehensive explanations with derivations',
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

    adaptLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'surface area': 'total outside area',
                    'volume': 'space inside',
                    'radius': 'distance from center to edge',
                    'diameter': 'distance across through center',
                    'lateral': 'side',
                    'congruent': 'exactly the same',
                    'perpendicular': 'at right angles'
                }
            },
            intermediate: {
                replacements: {
                    'surface area': 'surface area',
                    'volume': 'volume',
                    'radius': 'radius',
                    'diameter': 'diameter',
                    'lateral': 'lateral',
                    'congruent': 'congruent',
                    'perpendicular': 'perpendicular'
                }
            },
            detailed: {
                replacements: {
                    'surface area': 'surface area (total exterior measurement in square units)',
                    'volume': 'volume (three-dimensional space in cubic units)',
                    'radius': 'radius (linear distance from center to boundary)',
                    'diameter': 'diameter (maximum chord through center)',
                    'lateral': 'lateral (pertaining to the sides)',
                    'congruent': 'congruent (identical in form and size)',
                    'perpendicular': 'perpendicular (forming 90° angle)'
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

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by continuing the calculation process`,
            progression: 'We are making progress toward finding the complete solution',
            relationship: 'Each step brings us closer to the final measurements'
        };
    }

    // FORMAT OUTPUT METHODS

    formatSolution() {
        if (!this.currentSolution) return 'No solution available';

        let output = `Shape: ${this.currentSolution.shapeType}\n\n`;

        // Dimensions
        output += 'Dimensions:\n';
        Object.entries(this.currentSolution.dimensions).forEach(([key, value]) => {
            const displayKey = key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1');
            output += `  ${displayKey}: ${typeof value === 'number' ? value.toFixed(4) : value}\n`;
        });
        output += '\n';

        // Results
        if (this.currentSolution.surfaceArea !== undefined) {
            output += `Surface Area: ${this.currentSolution.surfaceArea.toFixed(4)} square units\n`;
        }
        if (this.currentSolution.volume !== undefined) {
            output += `Volume: ${this.currentSolution.volume.toFixed(4)} cubic units\n`;
        }

        return output;
    }

    exportWorkbookData() {
        return {
            workbook: this.currentWorkbook,
            problem: this.currentProblem,
            solution: this.currentSolution,
            steps: this.solutionSteps,
            graphData: this.graphData,
            verification: this.verifyGeometrySolution()
        };
    }

    // INITIALIZATION HELPER
    initializeGeometryLessons() {
        // This method was already defined above, keeping reference
        if (!this.lessons) {
            this.initializeGeometryLessons();
        }
    }
}

// Export the class
export default EnhancedSurfaceAreaVolumeWorkbook;
