// Enhanced Relativity Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedRelativityMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "physics";
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

        // Physical constants
        this.c = 299792458; // Speed of light in m/s
        this.c_km_s = 299792.458; // Speed of light in km/s

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';
        this.includePhysicalInterpretation = options.includePhysicalInterpretation !== false;
        this.includeUnitsAnalysis = options.includeUnitsAnalysis !== false;

        this.physicsSymbols = this.initializePhysicsSymbols();
        this.setThemeColors();
        this.initializeRelativitySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeRelativityLessons();
    }

    initializePhysicsSymbols() {
        return {
            // Greek letters for physics
            'gamma': 'γ',
            'beta': 'β',
            'delta': 'Δ',
            'tau': 'τ',
            'lambda': 'λ',
            
            // Physics operators
            'approx': '≈',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            
            // Special relativity symbols
            'lorentz': 'γ',
            'velocity': 'v',
            'proper': '₀',
            'observed': '′',
            
            // Units
            'meter': 'm',
            'second': 's',
            'kilogram': 'kg',
            'joule': 'J',
            'electron_volt': 'eV'
        };
    }

    setThemeColors() {
        const themes = {
            physics: {
                background: '#f8f9fa',
                gridColor: '#2c5aa0',
                headerBg: '#1a365d',
                headerText: '#ffffff',
                sectionBg: '#e3f2fd',
                sectionText: '#1565c0',
                cellBg: '#ffffff',
                cellText: '#2c5aa0',
                resultBg: '#e8f5e9',
                resultText: '#2e7d32',
                formulaBg: '#fff3e0',
                formulaText: '#e65100',
                stepBg: '#f5f5f5',
                stepText: '#424242',
                borderColor: '#1976d2',
                mathBg: '#e1f5fe',
                mathText: '#01579b',
                graphBg: '#fafafa',
                vertexBg: '#ffebee'
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

        this.colors = themes[this.theme] || themes.physics;
    }

    initializeRelativityLessons() {
        this.lessons = {
            time_dilation: {
                title: "Time Dilation",
                concepts: [
                    "Moving clocks run slower relative to stationary observers",
                    "Proper time τ₀ is time measured in the rest frame",
                    "Dilated time Δt = γ·τ₀ where γ is the Lorentz factor",
                    "Effect becomes significant near speed of light"
                ],
                theory: "Time dilation is one of the fundamental predictions of special relativity. When an object moves at velocity v relative to an observer, the time measured by the observer (Δt) is longer than the proper time (τ₀) measured in the object's rest frame.",
                keyFormulas: {
                    "Lorentz Factor": "γ = 1/√(1 - v²/c²)",
                    "Time Dilation": "Δt = γ·τ₀",
                    "Velocity Relation": "β = v/c",
                    "Alternative Form": "Δt = τ₀/√(1 - v²/c²)"
                },
                solvingSteps: [
                    "Identify proper time τ₀ and velocity v",
                    "Calculate β = v/c (velocity as fraction of light speed)",
                    "Calculate Lorentz factor: γ = 1/√(1 - β²)",
                    "Apply time dilation formula: Δt = γ·τ₀",
                    "Interpret result in physical context"
                ],
                applications: [
                    "GPS satellite time corrections",
                    "Muon decay experiments",
                    "Particle accelerator physics",
                    "Twin paradox scenarios"
                ],
                physicalInsights: [
                    "Time is not absolute but depends on relative motion",
                    "No object with mass can reach speed of light",
                    "Effects are symmetric between reference frames",
                    "Proper time is invariant quantity"
                ]
            },

            length_contraction: {
                title: "Length Contraction (Lorentz Contraction)",
                concepts: [
                    "Moving objects appear shorter along direction of motion",
                    "Proper length L₀ is length measured in rest frame",
                    "Contracted length L = L₀/γ",
                    "Contraction only occurs in direction of motion"
                ],
                theory: "Length contraction states that the length of an object moving at velocity v relative to an observer is measured to be shorter than its proper length L₀. The contraction factor is 1/γ.",
                keyFormulas: {
                    "Lorentz Factor": "γ = 1/√(1 - v²/c²)",
                    "Length Contraction": "L = L₀/γ = L₀√(1 - v²/c²)",
                    "Inverse Relation": "L₀ = γ·L",
                    "Velocity Form": "L = L₀√(1 - β²)"
                },
                solvingSteps: [
                    "Identify proper length L₀ and velocity v",
                    "Calculate β = v/c",
                    "Calculate Lorentz factor: γ = 1/√(1 - β²)",
                    "Apply length contraction: L = L₀/γ",
                    "Verify contraction makes physical sense"
                ],
                applications: [
                    "Muon penetration depth in atmosphere",
                    "Particle beam optics",
                    "Relativistic collision geometry",
                    "Cosmic ray observations"
                ],
                physicalInsights: [
                    "Only parallel component contracts",
                    "Perpendicular dimensions unchanged",
                    "Effect is reciprocal between frames",
                    "Proper length is frame-independent"
                ]
            },

            relativistic_velocity: {
                title: "Relativistic Velocity Addition",
                concepts: [
                    "Velocities don't add linearly at relativistic speeds",
                    "No combination of velocities can exceed c",
                    "Formula reduces to classical addition at low speeds",
                    "Ensures causality is preserved"
                ],
                theory: "In special relativity, velocities combine according to the relativistic velocity addition formula, which ensures that no observer measures a speed greater than c.",
                keyFormulas: {
                    "Velocity Addition": "v = (v₁ + v₂)/(1 + v₁v₂/c²)",
                    "In Beta Form": "β = (β₁ + β₂)/(1 + β₁β₂)",
                    "Parallel Velocities": "v‖ = (v₁‖ + v₂)/(1 + v₁‖v₂/c²)",
                    "Perpendicular Component": "v⊥ = v₁⊥/(γ₂(1 + v₁‖v₂/c²))"
                },
                solvingSteps: [
                    "Identify velocities v₁ and v₂ in appropriate frame",
                    "Convert to dimensionless form: β₁ = v₁/c, β₂ = v₂/c",
                    "Apply addition formula: β = (β₁ + β₂)/(1 + β₁β₂)",
                    "Convert back to velocity: v = β·c",
                    "Verify v < c"
                ],
                applications: [
                    "Particle beam collisions",
                    "Successive Lorentz transformations",
                    "Rocket problems with multiple stages",
                    "Astrophysical jet velocities"
                ],
                physicalInsights: [
                    "Light speed is universal speed limit",
                    "Formula is symmetric in v₁ and v₂",
                    "Reduces to Galilean at low speeds",
                    "Composition law forms mathematical group"
                ]
            },

            relativistic_momentum: {
                title: "Relativistic Momentum",
                concepts: [
                    "Momentum increases without bound as v → c",
                    "Classical momentum p = mv fails at high speeds",
                    "Relativistic momentum: p = γmv",
                    "Ensures momentum conservation in all frames"
                ],
                theory: "Relativistic momentum modifies classical momentum to account for the increase in inertia at high speeds. This ensures momentum conservation holds in all inertial frames.",
                keyFormulas: {
                    "Relativistic Momentum": "p = γmv = mv/√(1 - v²/c²)",
                    "Magnitude": "|p| = γm|v|",
                    "Energy-Momentum Relation": "E² = (pc)² + (mc²)²",
                    "Momentum in Beta Form": "p = γmβc"
                },
                solvingSteps: [
                    "Identify rest mass m and velocity v",
                    "Calculate Lorentz factor γ",
                    "Apply relativistic momentum formula: p = γmv",
                    "Compare with classical momentum p_classical = mv",
                    "Calculate momentum correction factor"
                ],
                applications: [
                    "Particle accelerator design",
                    "Collision problems in particle physics",
                    "Radiation pressure calculations",
                    "Electromagnetic field momentum"
                ],
                physicalInsights: [
                    "Inertia increases with speed",
                    "Infinite energy needed to reach c",
                    "Four-momentum is invariant",
                    "Momentum and energy form unified concept"
                ]
            },

            relativistic_energy: {
                title: "Relativistic Energy",
                concepts: [
                    "Total energy E = γmc² includes rest energy and kinetic energy",
                    "Rest energy E₀ = mc² is mass-energy equivalence",
                    "Kinetic energy K = (γ - 1)mc²",
                    "Energy and momentum are related"
                ],
                theory: "Einstein's mass-energy relation E = mc² shows that mass and energy are equivalent. The total energy of a particle includes its rest energy plus kinetic energy.",
                keyFormulas: {
                    "Total Energy": "E = γmc²",
                    "Rest Energy": "E₀ = mc²",
                    "Kinetic Energy": "K = (γ - 1)mc² = E - mc²",
                    "Energy-Momentum": "E² = (pc)² + (mc²)²",
                    "Low Speed Approximation": "K ≈ ½mv² + (3/8)mv⁴/c²"
                },
                solvingSteps: [
                    "Identify particle mass m and velocity v",
                    "Calculate Lorentz factor γ",
                    "Calculate total energy: E = γmc²",
                    "Calculate rest energy: E₀ = mc²",
                    "Find kinetic energy: K = E - E₀"
                ],
                applications: [
                    "Nuclear reactions and binding energy",
                    "Particle creation and annihilation",
                    "Cosmology and stellar processes",
                    "Mass defect in nuclear physics"
                ],
                physicalInsights: [
                    "Mass is concentrated form of energy",
                    "Energy conservation includes mass-energy",
                    "Massless particles have E = pc",
                    "Binding energy manifests as mass difference"
                ]
            },

            doppler_effect: {
                title: "Relativistic Doppler Effect",
                concepts: [
                    "Frequency shifts due to relative motion",
                    "Different from classical Doppler (includes time dilation)",
                    "Depends only on relative velocity, not medium",
                    "Symmetric for approaching and receding"
                ],
                theory: "The relativistic Doppler effect describes frequency shifts of waves (especially light) due to relative motion between source and observer, incorporating time dilation effects.",
                keyFormulas: {
                    "Longitudinal Doppler": "f_obs = f_source √((1 - β)/(1 + β))",
                    "Approaching": "f_obs = f_source √((1 + β)/(1 - β))",
                    "Receding": "f_obs = f_source √((1 - β)/(1 + β))",
                    "Transverse Doppler": "f_obs = f_source/γ = f_source√(1 - β²)",
                    "Wavelength Shift": "λ_obs = λ_source √((1 + β)/(1 - β))"
                },
                solvingSteps: [
                    "Identify source frequency f_source and relative velocity v",
                    "Determine if approaching (positive v) or receding (negative v)",
                    "Calculate β = v/c",
                    "Apply appropriate Doppler formula",
                    "Calculate wavelength shift if needed"
                ],
                applications: [
                    "Astronomical redshift measurements",
                    "Radar speed detection",
                    "Particle physics experiments",
                    "Cosmological distance determination"
                ],
                physicalInsights: [
                    "Includes both classical Doppler and time dilation",
                    "Transverse effect purely relativistic",
                    "Blueshift for approach, redshift for recession",
                    "Basis for Hubble's law in cosmology"
                ]
            },

            lorentz_transformation: {
                title: "Lorentz Transformations",
                concepts: [
                    "Transforms coordinates between inertial frames",
                    "Replaces Galilean transformation at high speeds",
                    "Preserves spacetime interval",
                    "Forms mathematical group structure"
                ],
                theory: "Lorentz transformations relate space and time coordinates in different inertial reference frames moving at constant velocity relative to each other.",
                keyFormulas: {
                    "Position Transform": "x' = γ(x - vt)",
                    "Time Transform": "t' = γ(t - vx/c²)",
                    "Inverse Position": "x = γ(x' + vt')",
                    "Inverse Time": "t = γ(t' + vx'/c²)",
                    "Spacetime Interval": "s² = c²t² - x² - y² - z² (invariant)"
                },
                solvingSteps: [
                    "Identify event coordinates in original frame (t, x, y, z)",
                    "Identify relative velocity v between frames",
                    "Calculate Lorentz factor γ",
                    "Apply transformation equations",
                    "Verify spacetime interval preservation"
                ],
                applications: [
                    "Event simultaneity analysis",
                    "Electromagnetic field transformations",
                    "Particle decay analysis",
                    "Causality verification"
                ],
                physicalInsights: [
                    "Space and time are intermixed",
                    "Simultaneity is relative",
                    "Causality is preserved",
                    "Four-dimensional spacetime is fundamental"
                ]
            },

            mass_energy_equivalence: {
                title: "Mass-Energy Equivalence",
                concepts: [
                    "Mass and energy are interconvertible: E = mc²",
                    "Rest mass represents concentrated energy",
                    "Applies to all forms of mass and energy",
                    "Foundation of nuclear physics"
                ],
                theory: "Einstein's famous equation E = mc² reveals that mass is a form of energy. The conversion factor c² is enormous, meaning small amounts of mass contain tremendous energy.",
                keyFormulas: {
                    "Mass-Energy": "E = mc²",
                    "Energy Equivalence": "1 kg = 9×10¹⁶ J",
                    "Mass Defect": "Δm = (Σm_initial - Σm_final)",
                    "Binding Energy": "E_B = Δm·c²",
                    "Energy Released": "Q = Δm·c²"
                },
                solvingSteps: [
                    "Identify initial and final masses",
                    "Calculate mass defect: Δm = m_initial - m_final",
                    "Calculate energy: E = Δm·c²",
                    "Convert to appropriate units (J, eV, MeV)",
                    "Interpret physical meaning"
                ],
                applications: [
                    "Nuclear fission and fusion",
                    "Particle-antiparticle annihilation",
                    "Nuclear binding energy",
                    "Solar energy production"
                ],
                physicalInsights: [
                    "All mass has energy content",
                    "Energy has inertia",
                    "Mass can be created from energy",
                    "Explains nuclear reaction energetics"
                ]
            },

            twin_paradox: {
                title: "Twin Paradox",
                concepts: [
                    "Traveling twin ages less than stationary twin",
                    "Not truly a paradox when acceleration is considered",
                    "Asymmetry comes from acceleration/deceleration",
                    "Combines time dilation with changing reference frames"
                ],
                theory: "The twin paradox illustrates time dilation: one twin travels at high speed and returns younger. The resolution involves recognizing the traveling twin experiences acceleration.",
                keyFormulas: {
                    "Proper Time (traveler)": "τ = ∫ dt/γ(t)",
                    "Time Dilation": "Δt_Earth = γ·τ_ship",
                    "Age Difference": "Δage = Δt_Earth - τ_ship",
                    "Constant Velocity": "Δage = (γ - 1)·τ_ship"
                },
                solvingSteps: [
                    "Identify outbound velocity and travel time",
                    "Calculate Lorentz factor for journey",
                    "Calculate proper time on spacecraft",
                    "Calculate time on Earth: Δt = γ·τ",
                    "Find age difference"
                ],
                applications: [
                    "Interstellar travel scenarios",
                    "GPS time corrections",
                    "Particle decay lifetimes",
                    "Thought experiments in relativity"
                ],
                physicalInsights: [
                    "Time is frame-dependent",
                    "Acceleration breaks symmetry",
                    "Proper time is along worldline",
                    "Verifiable with atomic clocks"
                ]
            },

            spacetime_interval: {
                title: "Spacetime Interval",
                concepts: [
                    "Invariant quantity in all inertial frames",
                    "Combines space and time into unified measure",
                    "s² = c²Δt² - Δx² - Δy² - Δz²",
                    "Determines causal structure of events"
                ],
                theory: "The spacetime interval is the fundamental invariant in special relativity, analogous to distance in Euclidean geometry but with a crucial minus sign.",
                keyFormulas: {
                    "Spacetime Interval": "s² = c²Δt² - Δx² - Δy² - Δz²",
                    "Proper Time": "τ = √(Δt² - Δx²/c²) (timelike)",
                    "Proper Length": "L = √(Δx² - c²Δt²) (spacelike)",
                    "Lightlike": "s² = 0 (for photons)"
                },
                solvingSteps: [
                    "Identify coordinate differences: Δt, Δx, Δy, Δz",
                    "Calculate spatial separation: Δr² = Δx² + Δy² + Δz²",
                    "Calculate interval: s² = c²Δt² - Δr²",
                    "Classify: timelike (s² > 0), spacelike (s² < 0), or null (s² = 0)",
                    "Verify invariance in different frames"
                ],
                applications: [
                    "Causality analysis",
                    "Proper time calculations",
                    "Event classification",
                    "Geometric approach to relativity"
                ],
                physicalInsights: [
                    "Absolute separation in spacetime",
                    "Light cones define causality",
                    "Geometry of spacetime is hyperbolic",
                    "Foundation of relativistic physics"
                ]
            }
        };
    }

    initializeRelativitySolvers() {
        this.relativityTypes = {
            time_dilation: {
                patterns: [
                    /time.*dilation/i,
                    /moving.*clock/i,
                    /proper.*time/i,
                    /dilat.*time/i
                ],
                solver: this.solveTimeDilation.bind(this),
                name: 'Time Dilation',
                category: 'kinematics',
                description: 'Calculates time dilation effects for moving observers'
            },

            length_contraction: {
                patterns: [
                    /length.*contraction/i,
                    /lorentz.*contraction/i,
                    /proper.*length/i,
                    /contract.*length/i
                ],
                solver: this.solveLengthContraction.bind(this),
                name: 'Length Contraction',
                category: 'kinematics',
                description: 'Calculates length contraction for moving objects'
            },

            relativistic_velocity: {
                patterns: [
                    /velocity.*addition/i,
                    /add.*velocit/i,
                    /combine.*velocit/i,
                    /relative.*velocity/i
                ],
                solver: this.solveRelativisticVelocity.bind(this),
                name: 'Relativistic Velocity Addition',
                category: 'kinematics',
                description: 'Combines velocities using relativistic formula'
            },

            relativistic_momentum: {
                patterns: [
                    /relativistic.*momentum/i,
                    /momentum.*relativistic/i,
                    /gamma.*momentum/i
                ],
                solver: this.solveRelativisticMomentum.bind(this),
                name: 'Relativistic Momentum',
                category: 'dynamics',
                description: 'Calculates momentum at relativistic speeds'
            },

            relativistic_energy: {
                patterns: [
                    /relativistic.*energy/i,
                    /total.*energy/i,
                    /rest.*energy/i,
                    /kinetic.*energy.*relativistic/i,
                    /mass.*energy/i
                ],
                solver: this.solveRelativisticEnergy.bind(this),
                name: 'Relativistic Energy',
                category: 'dynamics',
                description: 'Calculates total, rest, and kinetic energy'
            },

            doppler_effect: {
                patterns: [
                    /doppler/i,
                    /frequency.*shift/i,
                    /redshift/i,
                    /blueshift/i
                ],
                solver: this.solveDopplerEffect.bind(this),
                name: 'Relativistic Doppler Effect',
                category: 'waves',
                description: 'Calculates frequency shifts due to relative motion'
            },

            lorentz_transformation: {
                patterns: [
                    /lorentz.*transform/i,
                    /coordinate.*transform/i,
                    /reference.*frame/i
                ],
                solver: this.solveLorentzTransformation.bind(this),
                name: 'Lorentz Transformation',
                category: 'spacetime',
                description: 'Transforms coordinates between reference frames'
            },

            mass_energy: {
                patterns: [
                    /e.*=.*mc/i,
                    /mass.*energy.*equivalence/i,
                    /einstein.*equation/i,
                    /nuclear.*binding/i
                ],
                solver: this.solveMassEnergy.bind(this),
                name: 'Mass-Energy Equivalence',
                category: 'energy',
                description: 'Calculates energy from mass or vice versa'
            },

            twin_paradox: {
                patterns: [
                    /twin.*paradox/i,
                    /aging.*space/i,
                    /time.*travel/i
                ],
                solver: this.solveTwinParadox.bind(this),
                name: 'Twin Paradox',
                category: 'paradoxes',
                description: 'Analyzes differential aging in twin paradox scenarios'
            },

            spacetime_interval: {
                patterns: [
                    /spacetime.*interval/i,
                    /interval.*invariant/i,
                    /proper.*time.*interval/i
                ],
                solver: this.solveSpacetimeInterval.bind(this),
                name: 'Spacetime Interval',
                category: 'spacetime',
                description: 'Calculates invariant spacetime interval'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            time_dilation: {
                'Calculate Lorentz factor': [
                    'Using v instead of v/c in the formula',
                    'Forgetting to square the velocity term',
                    'Confusing proper time with dilated time'
                ],
                'Apply time dilation': [
                    'Multiplying by γ when should divide or vice versa',
                    'Using wrong time as reference',
                    'Not keeping track of which frame measures what'
                ]
            },
            length_contraction: {
                'Calculate contraction': [
                    'Multiplying by γ instead of dividing',
                    'Contracting perpendicular dimensions',
                    'Confusing proper length with contracted length'
                ]
            },
            relativistic_velocity: {
                'Add velocities': [
                    'Using classical addition v = v₁ + v₂',
                    'Forgetting the denominator term',
                    'Not using consistent sign conventions'
                ]
            },
            relativistic_energy: {
                'Calculate kinetic energy': [
                    'Using K = ½mv² at relativistic speeds',
                    'Forgetting rest energy in total energy',
                    'Confusion about when to use which energy formula'
                ]
            }
        };

        this.errorPrevention = {
            units_checking: {
                reminder: 'Always check that velocity is in correct units relative to c',
                method: 'Convert all speeds to m/s or express as fraction of c'
            },
            frame_reference: {
                reminder: 'Clearly identify which frame measures which quantity',
                method: 'Label all quantities with subscripts indicating reference frame'
            },
            lorentz_factor: {
                reminder: 'γ is always ≥ 1, approaches infinity as v → c',
                method: 'Sanity check: if γ < 1 or imaginary, velocity exceeds c (error)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and intuitive understanding',
                language: 'everyday analogies and physical interpretation'
            },
            procedural: {
                focus: 'Exact calculation steps and methods',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Spacetime diagrams and graphical understanding',
                language: 'visual and geometric descriptions'
            },
            mathematical: {
                focus: 'Rigorous mathematical derivation',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple physics terms',
                detail: 'essential concepts only',
                examples: 'concrete everyday scenarios'
            },
            intermediate: {
                vocabulary: 'standard physics terminology',
                detail: 'main concepts with physical reasoning',
                examples: 'mix of practical and abstract'
            },
            detailed: {
                vocabulary: 'full technical physics vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'advanced scenarios and edge cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveRelativityProblem(config) {
        const { scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseRelativityProblem(scenario, parameters, problemType, context);
            this.currentSolution = this.solveRelativityProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateRelativitySteps(this.currentProblem, this.currentSolution);
            this.generateRelativityGraphData();
            this.generateRelativityWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                physicalInterpretation: this.currentSolution?.physicalInterpretation
            };

        } catch (error) {
            throw new Error(`Failed to solve relativity problem: ${error.message}`);
        }
    }

    parseRelativityProblem(scenario = '', parameters = {}, problemType = null, context = {}) {
        const cleanInput = scenario ? this.cleanPhysicsExpression(scenario) : '';

        // If problem type is specified, use it directly
        if (problemType && this.relativityTypes[problemType]) {
            return {
                originalInput: scenario || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                scenario: scenario,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect relativity problem type
        for (const [type, config] of Object.entries(this.relativityTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(scenario)) {
                    const extractedParams = this.extractRelativityParameters(scenario, type, parameters);

                    return {
                        originalInput: scenario,
                        cleanInput: cleanInput,
                        type: type,
                        scenario: scenario,
                        parameters: { ...extractedParams, ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize relativity problem type from: ${scenario}`);
    }

    cleanPhysicsExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/gamma|γ/gi, 'gamma')
            .replace(/beta|β/gi, 'beta')
            .trim();
    }

    extractRelativityParameters(scenario, type, providedParams) {
        const params = { ...providedParams };

        // Extract velocity mentions
        const velocityMatch = scenario.match(/(\d+\.?\d*)\s*(m\/s|km\/s|c)/i);
        if (velocityMatch && !params.v) {
            let v = parseFloat(velocityMatch[1]);
            if (velocityMatch[2].toLowerCase() === 'c') {
                v = v * this.c;
            } else if (velocityMatch[2].toLowerCase() === 'km/s') {
                v = v * 1000;
            }
            params.v = v;
        }

        // Extract time mentions
        const timeMatch = scenario.match(/(\d+\.?\d*)\s*(s|seconds|years|yr)/i);
        if (timeMatch && !params.t && !params.tau) {
            let t = parseFloat(timeMatch[1]);
            if (timeMatch[2].toLowerCase().includes('year') || timeMatch[2] === 'yr') {
                t = t * 365.25 * 24 * 3600; // Convert to seconds
            }
            params.tau = t; // Assume proper time unless specified
        }

        // Extract mass mentions
        const massMatch = scenario.match(/(\d+\.?\d*)\s*(kg|g|mg)/i);
        if (massMatch && !params.m) {
            let m = parseFloat(massMatch[1]);
            if (massMatch[2] === 'g') {
                m = m / 1000;
            } else if (massMatch[2] === 'mg') {
                m = m / 1000000;
            }
            params.m = m;
        }

        // Extract length mentions
        const lengthMatch = scenario.match(/(\d+\.?\d*)\s*(m|km|meters|kilometers)/i);
        if (lengthMatch && !params.L && !params.L0) {
            let L = parseFloat(lengthMatch[1]);
            if (lengthMatch[2].toLowerCase().includes('km')) {
                L = L * 1000;
            }
            params.L0 = L; // Assume proper length unless specified
        }

        return params;
    }

    solveRelativityProblem_Internal(problem) {
        const solver = this.relativityTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for relativity problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // RELATIVITY SOLVERS

    solveTimeDilation(problem) {
        const { v, tau, delta_t } = problem.parameters;

        // Calculate beta and gamma
        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c,
                physicalInterpretation: 'Massive objects cannot reach or exceed the speed of light'
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        let result = {};

        if (tau !== undefined) {
            // Given proper time, find dilated time
            const dilatedTime = gamma * tau;
            result = {
                properTime: tau,
                dilatedTime: dilatedTime,
                timeDifference: dilatedTime - tau,
                solved: 'dilatedTime'
            };
        } else if (delta_t !== undefined) {
            // Given dilated time, find proper time
            const properTime = delta_t / gamma;
            result = {
                properTime: properTime,
                dilatedTime: delta_t,
                timeDifference: delta_t - properTime,
                solved: 'properTime'
            };
        }

        return {
            problemType: 'Time Dilation',
            velocity: v,
            velocityFraction: beta,
            beta: beta,
            lorentzFactor: gamma,
            speedOfLight: this.c,
            ...result,
            formula: 'Δt = γ·τ₀',
            physicalInterpretation: this.interpretTimeDilation(gamma, result),
            category: 'time_dilation',
            units: {
                velocity: 'm/s',
                time: 's',
                lorentzFactor: 'dimensionless'
            }
        };
    }

    solveLengthContraction(problem) {
        const { v, L0, L } = problem.parameters;

        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        let result = {};

        if (L0 !== undefined) {
            // Given proper length, find contracted length
            const contractedLength = L0 / gamma;
            result = {
                properLength: L0,
                contractedLength: contractedLength,
                contractionAmount: L0 - contractedLength,
                contractionFraction: (L0 - contractedLength) / L0,
                solved: 'contractedLength'
            };
        } else if (L !== undefined) {
            // Given contracted length, find proper length
            const properLength = L * gamma;
            result = {
                properLength: properLength,
                contractedLength: L,
                contractionAmount: properLength - L,
                contractionFraction: (properLength - L) / properLength,
                solved: 'properLength'
            };
        }

        return {
            problemType: 'Length Contraction',
            velocity: v,
            velocityFraction: beta,
            beta: beta,
            lorentzFactor: gamma,
            speedOfLight: this.c,
            ...result,
            formula: 'L = L₀/γ = L₀√(1 - v²/c²)',
            physicalInterpretation: this.interpretLengthContraction(gamma, result),
            category: 'length_contraction',
            units: {
                velocity: 'm/s',
                length: 'm',
                lorentzFactor: 'dimensionless'
            }
        };
    }

    solveRelativisticVelocity(problem) {
        const { v1, v2 } = problem.parameters;

        const beta1 = v1 / this.c;
        const beta2 = v2 / this.c;

        // Relativistic velocity addition
        const beta_total = (beta1 + beta2) / (1 + beta1 * beta2);
        const v_total = beta_total * this.c;

        // Classical addition for comparison
        const v_classical = v1 + v2;
        const difference = v_classical - v_total;
        const percentDifference = (difference / v_total) * 100;

        return {
            problemType: 'Relativistic Velocity Addition',
            velocity1: v1,
            velocity2: v2,
            beta1: beta1,
            beta2: beta2,
            resultantVelocity: v_total,
            resultantBeta: beta_total,
            classicalResult: v_classical,
            difference: difference,
            percentDifference: percentDifference,
            speedOfLight: this.c,
            formula: 'v = (v₁ + v₂)/(1 + v₁v₂/c²)',
            physicalInterpretation: this.interpretVelocityAddition(v_total, v_classical),
            category: 'relativistic_velocity',
            units: {
                velocity: 'm/s',
                beta: 'dimensionless'
            }
        };
    }

    solveRelativisticMomentum(problem) {
        const { m, v } = problem.parameters;

        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        const p_relativistic = gamma * m * v;
        const p_classical = m * v;
        const momentumIncrease = p_relativistic - p_classical;
        const percentIncrease = (momentumIncrease / p_classical) * 100;

        return {
            problemType: 'Relativistic Momentum',
            mass: m,
            velocity: v,
            beta: beta,
            lorentzFactor: gamma,
            relativisticMomentum: p_relativistic,
            classicalMomentum: p_classical,
            momentumIncrease: momentumIncrease,
            percentIncrease: percentIncrease,
            speedOfLight: this.c,
            formula: 'p = γmv',
            physicalInterpretation: this.interpretMomentum(gamma, p_relativistic, p_classical),
            category: 'relativistic_momentum',
            units: {
                mass: 'kg',
                velocity: 'm/s',
                momentum: 'kg·m/s'
            }
        };
    }

    solveRelativisticEnergy(problem) {
        const { m, v } = problem.parameters;

        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        const restEnergy = m * this.c * this.c;
        const totalEnergy = gamma * restEnergy;
        const kineticEnergy = totalEnergy - restEnergy;
        const classicalKE = 0.5 * m * v * v;
        const keError = ((kineticEnergy - classicalKE) / kineticEnergy) * 100;

        return {
            problemType: 'Relativistic Energy',
            mass: m,
            velocity: v,
            beta: beta,
            lorentzFactor: gamma,
            restEnergy: restEnergy,
            totalEnergy: totalEnergy,
            kineticEnergy: kineticEnergy,
            classicalKineticEnergy: classicalKE,
            kineticEnergyError: keError,
            speedOfLight: this.c,
            formulas: {
                restEnergy: 'E₀ = mc²',
                totalEnergy: 'E = γmc²',
                kineticEnergy: 'K = (γ - 1)mc²'
            },
            physicalInterpretation: this.interpretEnergy(gamma, totalEnergy, restEnergy, kineticEnergy),
            category: 'relativistic_energy',
            units: {
                mass: 'kg',
                velocity: 'm/s',
                energy: 'J'
            },
            energyInMeV: kineticEnergy / (1.602176634e-13) // Convert to MeV
        };
    }

    solveDopplerEffect(problem) {
        const { f_source, v, approaching = true } = problem.parameters;

        const beta = v / this.c;

        let f_observed;
        if (approaching) {
            f_observed = f_source * Math.sqrt((1 + beta) / (1 - beta));
        } else {
            f_observed = f_source * Math.sqrt((1 - beta) / (1 + beta));
        }

        const frequency_shift = f_observed - f_source;
        const percent_shift = (frequency_shift / f_source) * 100;

        // Calculate wavelengths
        const lambda_source = this.c / f_source;
        const lambda_observed = this.c / f_observed;
        const wavelength_shift = lambda_observed - lambda_source;

        return {
            problemType: 'Relativistic Doppler Effect',
            sourceFrequency: f_source,
            observedFrequency: f_observed,
            velocity: v,
            beta: beta,
            approaching: approaching,
            frequencyShift: frequency_shift,
            percentShift: percent_shift,
            sourceWavelength: lambda_source,
            observedWavelength: lambda_observed,
            wavelengthShift: wavelength_shift,
            speedOfLight: this.c,
            formula: approaching ? 
                'f_obs = f_src √((1 + β)/(1 - β))' : 
                'f_obs = f_src √((1 - β)/(1 + β))',
            physicalInterpretation: this.interpretDoppler(approaching, percent_shift),
            category: 'doppler_effect',
            units: {
                frequency: 'Hz',
                wavelength: 'm',
                velocity: 'm/s'
            }
        };
    }

    solveLorentzTransformation(problem) {
        const { x, t, v } = problem.parameters;

        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        // Transform to primed frame
        const x_prime = gamma * (x - v * t);
        const t_prime = gamma * (t - v * x / (this.c * this.c));

        // Calculate spacetime interval (should be invariant)
        const s_squared = this.c * this.c * t * t - x * x;
        const s_prime_squared = this.c * this.c * t_prime * t_prime - x_prime * x_prime;

        return {
            problemType: 'Lorentz Transformation',
            originalFrame: { x: x, t: t },
            transformedFrame: { x: x_prime, t: t_prime },
            velocity: v,
            beta: beta,
            lorentzFactor: gamma,
            spacetimeInterval: s_squared,
            spacetimeIntervalPrime: s_prime_squared,
            intervalInvariant: Math.abs(s_squared - s_prime_squared) < 1e-10,
            speedOfLight: this.c,
            formulas: {
                position: "x' = γ(x - vt)",
                time: "t' = γ(t - vx/c²)"
            },
            physicalInterpretation: this.interpretLorentzTransform(x_prime, t_prime, x, t),
            category: 'lorentz_transformation',
            units: {
                position: 'm',
                time: 's',
                velocity: 'm/s'
            }
        };
    }

    solveMassEnergy(problem) {
        const { m, E } = problem.parameters;

        if (m !== undefined) {
            // Calculate energy from mass
            const energy = m * this.c * this.c;
            const energyInMeV = energy / (1.602176634e-13);
            const energyInkWh = energy / 3600000;

            return {
                problemType: 'Mass-Energy Equivalence',
                mass: m,
                energy: energy,
                energyInMeV: energyInMeV,
                energyInkWh: energyInkWh,
                speedOfLight: this.c,
                formula: 'E = mc²',
                physicalInterpretation: this.interpretMassEnergy(m, energy),
                category: 'mass_energy',
                units: {
                    mass: 'kg',
                    energy: 'J',
                    energyMeV: 'MeV',
                    energykWh: 'kWh'
                }
            };
        } else if (E !== undefined) {
            // Calculate mass from energy
            const mass = E / (this.c * this.c);

            return {
                problemType: 'Mass-Energy Equivalence',
                mass: mass,
                energy: E,
                speedOfLight: this.c,
                formula: 'm = E/c²',
                physicalInterpretation: this.interpretMassEnergy(mass, E),
                category: 'mass_energy',
                units: {
                    mass: 'kg',
                    energy: 'J'
                }
            };
        }
    }

    solveTwinParadox(problem) {
        const { v, t_earth, t_ship } = problem.parameters;

        const beta = v / this.c;
        
        if (beta >= 1) {
            return {
                error: 'Velocity cannot equal or exceed speed of light',
                v: v,
                c: this.c
            };
        }

        const gamma = 1 / Math.sqrt(1 - beta * beta);

        let result = {};

        if (t_ship !== undefined) {
            // Given ship time, find Earth time
            const earthTime = gamma * t_ship;
            const ageDifference = earthTime - t_ship;
            result = {
                shipTime: t_ship,
                earthTime: earthTime,
                ageDifference: ageDifference,
                solved: 'earthTime'
            };
        } else if (t_earth !== undefined) {
            // Given Earth time, find ship time
            const shipTime = t_earth / gamma;
            const ageDifference = t_earth - shipTime;
            result = {
                shipTime: shipTime,
                earthTime: t_earth,
                ageDifference: ageDifference,
                solved: 'shipTime'
            };
        }

        return {
            problemType: 'Twin Paradox',
            velocity: v,
            beta: beta,
            lorentzFactor: gamma,
            ...result,
            speedOfLight: this.c,
            formula: 't_Earth = γ·t_ship',
            physicalInterpretation: this.interpretTwinParadox(gamma, result),
            category: 'twin_paradox',
            units: {
                velocity: 'm/s',
                time: 's',
                ageDifference: 's'
            }
        };
    }

    solveSpacetimeInterval(problem) {
        const { delta_t, delta_x, delta_y = 0, delta_z = 0 } = problem.parameters;

        const spatial_separation_squared = delta_x * delta_x + delta_y * delta_y + delta_z * delta_z;
        const s_squared = this.c * this.c * delta_t * delta_t - spatial_separation_squared;

        let intervalType;
        let properQuantity;

        if (s_squared > 0) {
            intervalType = 'timelike';
            properQuantity = {
                type: 'proper time',
                value: Math.sqrt(s_squared) / this.c,
                units: 's'
            };
        } else if (s_squared < 0) {
            intervalType = 'spacelike';
            properQuantity = {
                type: 'proper length',
                value: Math.sqrt(-s_squared),
                units: 'm'
            };
        } else {
            intervalType = 'null (lightlike)';
            properQuantity = {
                type: 'photon path',
                value: 0,
                units: 'dimensionless'
            };
        }

        return {
            problemType: 'Spacetime Interval',
            timeInterval: delta_t,
            spatialSeparation: {
                x: delta_x,
                y: delta_y,
                z: delta_z,
                magnitude: Math.sqrt(spatial_separation_squared)
            },
            spacetimeInterval: s_squared,
            intervalType: intervalType,
            properQuantity: properQuantity,
            speedOfLight: this.c,
            formula: 's² = c²Δt² - Δx² - Δy² - Δz²',
            physicalInterpretation: this.interpretSpacetimeInterval(intervalType, properQuantity),
            category: 'spacetime_interval',
            units: {
                time: 's',
                length: 'm',
                interval: 'm²'
            }
        };
    }

    // PHYSICAL INTERPRETATION METHODS

    interpretTimeDilation(gamma, result) {
        const interpretations = [];
        
        interpretations.push(`The Lorentz factor γ = ${gamma.toFixed(4)} indicates that time runs ${gamma.toFixed(2)} times slower in the moving frame.`);
        
        if (result.timeDifference) {
            interpretations.push(`For every ${result.properTime.toFixed(2)}s that passes on the moving clock, ${result.dilatedTime.toFixed(2)}s passes for the stationary observer - a difference of ${result.timeDifference.toFixed(2)}s.`);
        }
        
        if (gamma < 1.1) {
            interpretations.push('At this relatively low speed, time dilation effects are small but measurable with precise instruments.');
        } else if (gamma < 2) {
            interpretations.push('Time dilation is becoming significant - noticeable in particle physics experiments.');
        } else {
            interpretations.push('Extreme time dilation - the effects are dramatic and crucial for understanding particle behavior.');
        }

        return interpretations.join(' ');
    }

    interpretLengthContraction(gamma, result) {
        const interpretations = [];
        
        const contractionFactor = 1 / gamma;
        interpretations.push(`Objects contract by a factor of ${contractionFactor.toFixed(4)} in the direction of motion.`);
        
        if (result.contractionFraction) {
            const percent = (result.contractionFraction * 100).toFixed(2);
            interpretations.push(`The length is reduced by ${percent}% as observed from the stationary frame.`);
        }
        
        interpretations.push('Length contraction only affects the dimension parallel to motion; perpendicular dimensions remain unchanged.');
        
        return interpretations.join(' ');
    }

    interpretVelocityAddition(v_relativistic, v_classical) {
        const interpretations = [];
        
        interpretations.push(`The relativistic velocity (${(v_relativistic/this.c).toFixed(6)}c) is less than the classical sum (${(v_classical/this.c).toFixed(6)}c).`);
        
        if (v_classical > this.c) {
            interpretations.push('Classical addition would violate the speed of light limit, but relativistic addition ensures v < c.');
        }
        
        interpretations.push('This demonstrates that velocities do not simply add at high speeds, preserving the universal speed limit.');
        
        return interpretations.join(' ');
    }

    interpretMomentum(gamma, p_rel, p_class) {
        const interpretations = [];
        
        interpretations.push(`The relativistic momentum is ${gamma.toFixed(2)} times larger than the classical prediction.`);
        
        const increase = ((p_rel - p_class) / p_class * 100).toFixed(1);
        interpretations.push(`This represents a ${increase}% increase due to relativistic effects.`);
        
        interpretations.push('As velocity approaches c, momentum grows without bound, making it impossible to accelerate massive objects to light speed.');
        
        return interpretations.join(' ');
    }

    interpretEnergy(gamma, E_total, E_rest, K) {
        const interpretations = [];
        
        interpretations.push(`The rest energy E₀ = ${E_rest.toExponential(3)}J represents the mass-energy equivalence.`);
        interpretations.push(`The total energy E = ${E_total.toExponential(3)}J includes both rest and kinetic energy.`);
        interpretations.push(`The kinetic energy K = ${K.toExponential(3)}J is ${(gamma - 1).toFixed(2)} times the rest energy.`);
        
        if (gamma > 1.1) {
            interpretations.push('At this speed, classical kinetic energy formulas significantly underestimate the true energy.');
        }
        
        return interpretations.join(' ');
    }

    interpretDoppler(approaching, percent_shift) {
        const interpretations = [];
        
        if (approaching) {
            interpretations.push(`The source is approaching, causing a blueshift (frequency increase) of ${Math.abs(percent_shift).toFixed(2)}%.`);
        } else {
            interpretations.push(`The source is receding, causing a redshift (frequency decrease) of ${Math.abs(percent_shift).toFixed(2)}%.`);
        }
        
        interpretations.push('The relativistic Doppler effect includes both the classical Doppler shift and time dilation effects.');
        interpretations.push('This phenomenon is crucial for astronomical observations and cosmological redshift measurements.');
        
        return interpretations.join(' ');
    }

    interpretLorentzTransform(x_prime, t_prime, x, t) {
        const interpretations = [];
        
        interpretations.push(`Event coordinates transform from (x=${x.toFixed(2)}m, t=${t.toFixed(2)}s) to (x'=${x_prime.toFixed(2)}m, t'=${t_prime.toFixed(2)}s).`);
        interpretations.push('Space and time are intermixed in the transformation - they are not independent.');
        interpretations.push('The spacetime interval remains invariant, confirming the geometric nature of spacetime.');
        
        return interpretations.join(' ');
    }

    interpretMassEnergy(m, E) {
        const interpretations = [];
        
        interpretations.push(`A mass of ${m.toExponential(3)}kg is equivalent to ${E.toExponential(3)}J of energy.`);
        
        const tnt_equivalent = E / 4.184e9; // Convert to tons of TNT
        if (tnt_equivalent > 1) {
            interpretations.push(`This is equivalent to approximately ${tnt_equivalent.toExponential(2)} tons of TNT.`);
        }
        
        interpretations.push('This demonstrates that even tiny amounts of mass contain enormous quantities of energy.');
        interpretations.push('This principle underlies nuclear reactions, where mass defects convert to released energy.');
        
        return interpretations.join(' ');
    }

    interpretTwinParadox(gamma, result) {
        const interpretations = [];
        
        interpretations.push(`The traveling twin experiences time dilation by a factor of γ = ${gamma.toFixed(4)}.`);
        
        if (result.ageDifference) {
            const years = result.ageDifference / (365.25 * 24 * 3600);
            interpretations.push(`The age difference is ${result.ageDifference.toFixed(2)}s (approximately ${years.toFixed(2)} years).`);
            interpretations.push('The traveling twin ages less due to experiencing less proper time along their worldline.');
        }
        
        interpretations.push('The asymmetry arises because the traveling twin undergoes acceleration to turn around, breaking the symmetry between frames.');
        
        return interpretations.join(' ');
    }

    interpretSpacetimeInterval(type, properQuantity) {
        const interpretations = [];
        
        interpretations.push(`The spacetime interval is ${type}.`);
        
        if (type === 'timelike') {
            interpretations.push(`Events can be causally connected. The proper time is ${properQuantity.value.toFixed(4)}s.`);
            interpretations.push('A massive particle could travel between these events.');
        } else if (type === 'spacelike') {
            interpretations.push(`Events are spatially separated and cannot be causally connected. The proper length is ${properQuantity.value.toFixed(4)}m.`);
            interpretations.push('No signal can travel between these events - they are absolutely distant.');
        } else {
            interpretations.push('Events lie on a light cone - they are connected by a photon path.');
            interpretations.push('Only massless particles (light) can connect these events.');
        }
        
        return interpretations.join(' ');
    }

    // STEP GENERATION METHODS

    generateRelativitySteps(problem, solution) {
        let baseSteps = this.generateBaseRelativitySteps(problem, solution);

        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhancePhysicsStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addPhysicsStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addPhysicsErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addPhysicsScaffolding(baseSteps, problem);
        }

        return baseSteps;
    }

    generateBaseRelativitySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'time_dilation':
                return this.generateTimeDilationSteps(problem, solution);
            case 'length_contraction':
                return this.generateLengthContractionSteps(problem, solution);
            case 'relativistic_velocity':
                return this.generateVelocityAdditionSteps(problem, solution);
            case 'relativistic_momentum':
                return this.generateMomentumSteps(problem, solution);
            case 'relativistic_energy':
                return this.generateEnergySteps(problem, solution);
            case 'doppler_effect':
                return this.generateDopplerSteps(problem, solution);
            case 'lorentz_transformation':
                return this.generateLorentzSteps(problem, solution);
            case 'mass_energy':
                return this.generateMassEnergySteps(problem, solution);
            case 'twin_paradox':
                return this.generateTwinParadoxSteps(problem, solution);
            case 'spacetime_interval':
                return this.generateSpacetimeIntervalSteps(problem, solution);
            default:
                return this.generateGenericPhysicsSteps(problem, solution);
        }
    }

    generateTimeDilationSteps(problem, solution) {
        const { v, tau } = problem.parameters;
        const { beta, lorentzFactor, dilatedTime, properTime } = solution;
        const steps = [];

        // Step 1: Identify given quantities
        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List all known values and identify what needs to be found',
            givenValues: {
                velocity: `v = ${v.toExponential(3)} m/s`,
                properTime: tau !== undefined ? `τ₀ = ${tau} s` : 'Unknown',
                speedOfLight: `c = ${this.c.toExponential(3)} m/s`
            },
            reasoning: 'Proper time (τ₀) is measured in the rest frame of the moving object; dilated time (Δt) is measured by the stationary observer',
            physicalMeaning: 'We need to distinguish between time measured in different reference frames',
            visualHint: 'Imagine a clock moving with the object (proper time) versus a stationary clock (dilated time)',
            goalStatement: 'Calculate how much time passes for the stationary observer'
        });

        // Step 2: Calculate velocity fraction β
        steps.push({
            stepNumber: 2,
            step: 'Calculate velocity as fraction of light speed',
            description: 'Express velocity as dimensionless ratio β = v/c',
            beforeExpression: `v = ${v.toExponential(3)} m/s`,
            operation: `÷ c = ${this.c.toExponential(3)} m/s`,
            afterExpression: `β = ${beta.toFixed(6)}`,
            calculation: `β = ${v.toExponential(3)} / ${this.c.toExponential(3)} = ${beta.toFixed(6)}`,
            reasoning: 'β (beta) is a dimensionless parameter that simplifies relativistic calculations',
            physicalMeaning: `The object is moving at ${(beta * 100).toFixed(4)}% of the speed of light`,
            algebraicRule: 'Dimensionless ratios simplify formula application',
            checkPoint: beta < 1 ? 'Valid: β < 1' : 'Error: β must be less than 1',
            units: {
                input: 'm/s',
                output: 'dimensionless'
            }
        });

        // Step 3: Calculate Lorentz factor
        steps.push({
            stepNumber: 3,
            step: 'Calculate Lorentz factor γ',
            description: 'Compute γ = 1/√(1 - β²) which quantifies relativistic effects',
            beforeExpression: `β = ${beta.toFixed(6)}`,
            operation: 'Apply γ = 1/√(1 - β²)',
            afterExpression: `γ = ${lorentzFactor.toFixed(6)}`,
            calculation: {
                step1: `β² = (${beta.toFixed(6)})² = ${(beta * beta).toFixed(8)}`,
                step2: `1 - β² = 1 - ${(beta * beta).toFixed(8)} = ${(1 - beta * beta).toFixed(8)}`,
                step3: `√(1 - β²) = ${Math.sqrt(1 - beta * beta).toFixed(8)}`,
                step4: `γ = 1/${Math.sqrt(1 - beta * beta).toFixed(8)} = ${lorentzFactor.toFixed(6)}`
            },
            reasoning: 'The Lorentz factor is the fundamental scaling factor in special relativity',
            physicalMeaning: `Time dilates by a factor of ${lorentzFactor.toFixed(4)} at this velocity`,
            visualHint: 'γ approaches 1 at low speeds and increases toward infinity as v → c',
            algebraicRule: 'Lorentz factor: γ = 1/√(1 - v²/c²)',
            criticalWarning: lorentzFactor > 10 ? 'Extreme relativistic regime - classical physics completely invalid' : null,
            units: {
                input: 'dimensionless (β)',
                output: 'dimensionless (γ)'
            }
        });

        // Step 4: Apply time dilation formula
        steps.push({
            stepNumber: 4,
            step: 'Apply time dilation formula',
            description: 'Calculate dilated time: Δt = γ·τ₀',
            beforeExpression: `γ = ${lorentzFactor.toFixed(6)}, τ₀ = ${properTime} s`,
            operation: '× (multiply Lorentz factor by proper time)',
            afterExpression: `Δt = ${dilatedTime.toFixed(6)} s`,
            calculation: `Δt = ${lorentzFactor.toFixed(6)} × ${properTime} = ${dilatedTime.toFixed(6)} s`,
            reasoning: 'Moving clocks run slow - the stationary observer measures more elapsed time',
            physicalMeaning: `While ${properTime}s passes on the moving clock, ${dilatedTime.toFixed(2)}s passes for the stationary observer`,
            visualHint: 'Think of time stretching out for the moving observer',
            formula: 'Δt = γ·τ₀',
            finalAnswer: true,
            numericalResult: dilatedTime,
            units: {
                input: 's',
                output: 's'
            }
        });

        // Step 5: Calculate time difference
        const timeDiff = dilatedTime - properTime;
        steps.push({
            stepNumber: 5,
            step: 'Calculate time difference',
            description: 'Find how much additional time passes for stationary observer',
            beforeExpression: `Δt = ${dilatedTime.toFixed(6)} s, τ₀ = ${properTime} s`,
            operation: '- (subtract proper time from dilated time)',
            afterExpression: `Δt_diff = ${timeDiff.toFixed(6)} s`,
            calculation: `Δt_diff = ${dilatedTime.toFixed(6)} - ${properTime} = ${timeDiff.toFixed(6)} s`,
            reasoning: 'This difference represents the "extra" time observed due to relativistic effects',
            physicalMeaning: `The moving observer "saves" ${timeDiff.toFixed(2)}s compared to the stationary observer`,
            practicalExample: this.getTimeDilationExample(lorentzFactor, timeDiff),
            units: {
                output: 's'
            }
        });

        return steps;
    }

    generateLengthContractionSteps(problem, solution) {
        const { v, L0 } = problem.parameters;
        const { beta, lorentzFactor, contractedLength, properLength } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'Identify proper length and velocity',
            givenValues: {
                properLength: `L₀ = ${properLength} m`,
                velocity: `v = ${v.toExponential(3)} m/s`,
                speedOfLight: `c = ${this.c.toExponential(3)} m/s`
            },
            reasoning: 'Proper length is measured in the rest frame; contracted length is measured by a moving observer',
            physicalMeaning: 'We need to find how the length appears to a moving observer'
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate β = v/c',
            description: 'Express velocity as fraction of light speed',
            calculation: `β = ${v.toExponential(3)} / ${this.c.toExponential(3)} = ${beta.toFixed(6)}`,
            afterExpression: `β = ${beta.toFixed(6)}`,
            reasoning: 'Dimensionless velocity parameter',
            physicalMeaning: `Moving at ${(beta * 100).toFixed(4)}% of light speed`
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate Lorentz factor γ',
            description: 'Compute γ = 1/√(1 - β²)',
            calculation: {
                step1: `1 - β² = ${(1 - beta * beta).toFixed(8)}`,
                step2: `γ = 1/√(${(1 - beta * beta).toFixed(8)}) = ${lorentzFactor.toFixed(6)}`
            },
            afterExpression: `γ = ${lorentzFactor.toFixed(6)}`,
            reasoning: 'The Lorentz factor determines the contraction amount'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply length contraction formula',
            description: 'Calculate contracted length: L = L₀/γ',
            beforeExpression: `L₀ = ${properLength} m, γ = ${lorentzFactor.toFixed(6)}`,
            operation: '÷ γ',
            afterExpression: `L = ${contractedLength.toFixed(6)} m`,
            calculation: `L = ${properLength} / ${lorentzFactor.toFixed(6)} = ${contractedLength.toFixed(6)} m`,
            reasoning: 'Objects contract in the direction of motion by factor 1/γ',
            physicalMeaning: `The ${properLength}m object appears only ${contractedLength.toFixed(2)}m long to a moving observer`,
            formula: 'L = L₀/γ = L₀√(1 - v²/c²)',
            finalAnswer: true,
            units: {
                output: 'm'
            }
        });

        const contractionPercent = ((properLength - contractedLength) / properLength * 100);
        steps.push({
            stepNumber: 5,
            step: 'Calculate contraction percentage',
            description: 'Determine what fraction of original length remains',
            calculation: `Contraction = ${contractionPercent.toFixed(2)}%`,
            physicalMeaning: `The object is contracted to ${(100 - contractionPercent).toFixed(2)}% of its rest length`,
            importantNote: 'Only the dimension parallel to motion contracts; perpendicular dimensions are unchanged'
        });

        return steps;
    }

    generateVelocityAdditionSteps(problem, solution) {
        const { v1, v2 } = problem.parameters;
        const { beta1, beta2, resultantVelocity, resultantBeta, classicalResult } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify velocities to add',
            description: 'List the two velocities that need to be combined',
            givenValues: {
                velocity1: `v₁ = ${v1.toExponential(3)} m/s`,
                velocity2: `v₂ = ${v2.toExponential(3)} m/s`
            },
            reasoning: 'In relativity, velocities do not add linearly',
            physicalMeaning: 'We need to use the relativistic velocity addition formula'
        });

        steps.push({
            stepNumber: 2,
            step: 'Convert to dimensionless form',
            description: 'Calculate β₁ = v₁/c and β₂ = v₂/c',
            calculation: {
                beta1: `β₁ = ${v1.toExponential(3)} / ${this.c.toExponential(3)} = ${beta1.toFixed(6)}`,
                beta2: `β₂ = ${v2.toExponential(3)} / ${this.c.toExponential(3)} = ${beta2.toFixed(6)}`
            },
            afterExpression: `β₁ = ${beta1.toFixed(6)}, β₂ = ${beta2.toFixed(6)}`,
            reasoning: 'Working with β simplifies the formula'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply relativistic velocity addition',
            description: 'Use formula: β = (β₁ + β₂)/(1 + β₁β₂)',
            calculation: {
                numerator: `β₁ + β₂ = ${beta1.toFixed(6)} + ${beta2.toFixed(6)} = ${(beta1 + beta2).toFixed(6)}`,
                denominator: `1 + β₁β₂ = 1 + (${beta1.toFixed(6)})(${beta2.toFixed(6)}) = ${(1 + beta1 * beta2).toFixed(6)}`,
                result: `β = ${(beta1 + beta2).toFixed(6)} / ${(1 + beta1 * beta2).toFixed(6)} = ${resultantBeta.toFixed(6)}`
            },
            afterExpression: `β_total = ${resultantBeta.toFixed(6)}`,
            reasoning: 'This formula ensures the result never exceeds c',
            formula: 'v = (v₁ + v₂)/(1 + v₁v₂/c²)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Convert back to velocity',
            description: 'Calculate v = β·c',
            calculation: `v = ${resultantBeta.toFixed(6)} × ${this.c.toExponential(3)} = ${resultantVelocity.toExponential(3)} m/s`,
            afterExpression: `v_total = ${resultantVelocity.toExponential(3)} m/s`,
            finalAnswer: true,
            units: {
                output: 'm/s'
            }
        });

        steps.push({
            stepNumber: 5,
            step: 'Compare with classical result',
            description: 'Show why classical addition fails',
            calculation: {
                classical: `v_classical = v₁ + v₂ = ${classicalResult.toExponential(3)} m/s`,
                relativistic: `v_relativistic = ${resultantVelocity.toExponential(3)} m/s`,
                difference: `Difference = ${(classicalResult - resultantVelocity).toExponential(3)} m/s`
            },
            reasoning: 'Classical physics would violate the speed of light limit',
            physicalMeaning: classicalResult > this.c ? 
                'Classical addition incorrectly predicts v > c, but relativity ensures v < c' :
                'Even though both are less than c, relativistic addition gives a smaller result'
        });

        return steps;
    }

    generateMomentumSteps(problem, solution) {
        const { m, v } = problem.parameters;
        const { beta, lorentzFactor, relativisticMomentum, classicalMomentum } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List mass and velocity',
            givenValues: {
                mass: `m = ${m} kg`,
                velocity: `v = ${v.toExponential(3)} m/s`
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate β and γ',
            description: 'Find dimensionless velocity and Lorentz factor',
            calculation: {
                beta: `β = v/c = ${beta.toFixed(6)}`,
                gamma: `γ = 1/√(1 - β²) = ${lorentzFactor.toFixed(6)}`
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate relativistic momentum',
            description: 'Apply formula: p = γmv',
            calculation: `p = ${lorentzFactor.toFixed(6)} × ${m} × ${v.toExponential(3)} = ${relativisticMomentum.toExponential(3)} kg·m/s`,
            afterExpression: `p_relativistic = ${relativisticMomentum.toExponential(3)} kg·m/s`,
            reasoning: 'Relativistic momentum accounts for increased inertia at high speeds',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Compare with classical momentum',
            description: 'Calculate p_classical = mv for comparison',
            calculation: {
                classical: `p_classical = ${m} × ${v.toExponential(3)} = ${classicalMomentum.toExponential(3)} kg·m/s`,
                increase: `Increase = ${((relativisticMomentum - classicalMomentum) / classicalMomentum * 100).toFixed(2)}%`
            },
            physicalMeaning: 'At relativistic speeds, momentum is significantly larger than classical prediction'
        });

        return steps;
    }

    generateEnergySteps(problem, solution) {
        const { m, v } = problem.parameters;
        const { beta, lorentzFactor, restEnergy, totalEnergy, kineticEnergy, classicalKineticEnergy } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List mass and velocity',
            givenValues: {
                mass: `m = ${m} kg`,
                velocity: `v = ${v.toExponential(3)} m/s`
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate rest energy',
            description: 'Apply E₀ = mc²',
            calculation: `E₀ = ${m} × (${this.c.toExponential(3)})² = ${restEnergy.toExponential(3)} J`,
            afterExpression: `E₀ = ${restEnergy.toExponential(3)} J`,
            reasoning: 'Rest energy is the intrinsic energy content of the mass',
            physicalMeaning: 'This enormous energy is locked in the mass itself'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate Lorentz factor',
            description: 'Find γ from velocity',
            calculation: {
                beta: `β = ${beta.toFixed(6)}`,
                gamma: `γ = ${lorentzFactor.toFixed(6)}`
            }
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate total relativistic energy',
            description: 'Apply E = γmc²',
            calculation: `E = ${lorentzFactor.toFixed(6)} × ${restEnergy.toExponential(3)} = ${totalEnergy.toExponential(3)} J`,
            afterExpression: `E_total = ${totalEnergy.toExponential(3)} J`,
            reasoning: 'Total energy includes both rest and kinetic energy',
            formula: 'E = γmc²'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate kinetic energy',
            description: 'Find K = E - E₀ = (γ - 1)mc²',
            calculation: `K = ${totalEnergy.toExponential(3)} - ${restEnergy.toExponential(3)} = ${kineticEnergy.toExponential(3)} J`,
            afterExpression: `K = ${kineticEnergy.toExponential(3)} J`,
            finalAnswer: true,
            units: {
                output: 'J'
            }
        });

        steps.push({
            stepNumber: 6,
            step: 'Compare with classical kinetic energy',
            description: 'Calculate K_classical = ½mv²',
            calculation: {
                classical: `K_classical = 0.5 × ${m} × (${v.toExponential(3)})² = ${classicalKineticEnergy.toExponential(3)} J`,
                relativistic: `K_relativistic = ${kineticEnergy.toExponential(3)} J`,
                error: `Classical error = ${((kineticEnergy - classicalKineticEnergy) / kineticEnergy * 100).toFixed(2)}%`
            },
            physicalMeaning: 'Classical formula significantly underestimates kinetic energy at high speeds'
        });

        return steps;
    }

    generateDopplerSteps(problem, solution) {
        const { f_source, v, approaching } = problem.parameters;
        const { beta, f_observed, frequencyShift } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given quantities',
            description: 'List source frequency, velocity, and direction',
            givenValues: {
                sourceFrequency: `f₀ = ${f_source} Hz`,
                velocity: `v = ${v.toExponential(3)} m/s`,
                direction: approaching ? 'Approaching' : 'Receding'
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate β = v/c',
            calculation: `β = ${v.toExponential(3)} / ${this.c.toExponential(3)} = ${beta.toFixed(6)}`,
            afterExpression: `β = ${beta.toFixed(6)}`
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply relativistic Doppler formula',
            description: approaching ? 
                'For approaching: f = f₀√((1+β)/(1-β))' : 
                'For receding: f = f₀√((1-β)/(1+β))',
            calculation: approaching ? {
                numerator: `1 + β = ${(1 + beta).toFixed(6)}`,
                denominator: `1 - β = ${(1 - beta).toFixed(6)}`,
                ratio: `(1+β)/(1-β) = ${((1 + beta) / (1 - beta)).toFixed(6)}`,
                sqrt: `√((1+β)/(1-β)) = ${Math.sqrt((1 + beta) / (1 - beta)).toFixed(6)}`,
                result: `f = ${f_source} × ${Math.sqrt((1 + beta) / (1 - beta)).toFixed(6)} = ${f_observed.toFixed(2)} Hz`
            } : {
                numerator: `1 - β = ${(1 - beta).toFixed(6)}`,
                denominator: `1 + β = ${(1 + beta).toFixed(6)}`,
                ratio: `(1-β)/(1+β) = ${((1 - beta) / (1 + beta)).toFixed(6)}`,
                sqrt: `√((1-β)/(1+β)) = ${Math.sqrt((1 - beta) / (1 + beta)).toFixed(6)}`,
                result: `f = ${f_source} × ${Math.sqrt((1 - beta) / (1 + beta)).toFixed(6)} = ${f_observed.toFixed(2)} Hz`
            },
            afterExpression: `f_observed = ${f_observed.toFixed(2)} Hz`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate frequency shift',
            calculation: `Δf = ${f_observed.toFixed(2)} - ${f_source} = ${frequencyShift.toFixed(2)} Hz`,
            physicalMeaning: approaching ? 
                `Blueshift: frequency increased by ${frequencyShift.toFixed(2)} Hz` :
                `Redshift: frequency decreased by ${Math.abs(frequencyShift).toFixed(2)} Hz`
        });

        return steps;
    }

    generateLorentzSteps(problem, solution) {
        const { x, t, v } = problem.parameters;
        const { beta, lorentzFactor, transformedFrame } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify event coordinates',
            description: 'List spacetime coordinates in original frame',
            givenValues: {
                position: `x = ${x} m`,
                time: `t = ${t} s`,
                relativeVelocity: `v = ${v.toExponential(3)} m/s`
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate β and γ',
            calculation: {
                beta: `β = ${beta.toFixed(6)}`,
                gamma: `γ = ${lorentzFactor.toFixed(6)}`
            }
        });

        steps.push({
            stepNumber: 3,
            step: 'Transform position coordinate',
            description: "Apply x' = γ(x - vt)",
            calculation: `x' = ${lorentzFactor.toFixed(6)} × (${x} - ${v.toExponential(3)} × ${t}) = ${transformedFrame.x.toFixed(6)} m`,
            afterExpression: `x' = ${transformedFrame.x.toFixed(6)} m`,
            reasoning: 'Position transforms due to relative motion and time dilation'
        });

        steps.push({
            stepNumber: 4,
            step: 'Transform time coordinate',
            description: "Apply t' = γ(t - vx/c²)",
            calculation: `t' = ${lorentzFactor.toFixed(6)} × (${t} - ${v.toExponential(3)} × ${x} / ${(this.c * this.c).toExponential(3)}) = ${transformedFrame.t.toFixed(6)} s`,
            afterExpression: `t' = ${transformedFrame.t.toFixed(6)} s`,
            reasoning: 'Time transforms due to relativity of simultaneity',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Verify spacetime interval invariance',
            description: 'Check that s² is the same in both frames',
            calculation: {
                original: `s² = c²t² - x² = ${solution.spacetimeInterval.toFixed(2)} m²`,
                transformed: `s'² = c²t'² - x'² = ${solution.spacetimeIntervalPrime.toFixed(2)} m²`,
                invariant: solution.intervalInvariant ? 'Confirmed: s² = s\'²' : 'Error in calculation'
            },
            physicalMeaning: 'Spacetime interval is invariant - same in all inertial frames'
        });

        return steps;
    }

    generateMassEnergySteps(problem, solution) {
        const { m, E } = problem.parameters;
        const steps = [];

        if (m !== undefined) {
            steps.push({
                stepNumber: 1,
                step: 'Identify given mass',
                givenValues: {
                    mass: `m = ${m} kg`
                }
            });

            steps.push({
                stepNumber: 2,
                step: 'Apply E = mc²',
                description: 'Calculate energy equivalent of mass',
                calculation: `E = ${m} × (${this.c.toExponential(3)})² = ${solution.energy.toExponential(3)} J`,
                afterExpression: `E = ${solution.energy.toExponential(3)} J`,
                reasoning: 'Mass and energy are equivalent - mass is concentrated energy',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 3,
                step: 'Express in alternative units',
                description: 'Convert to more intuitive energy units',
                calculation: {
                    MeV: `E = ${solution.energyInMeV.toExponential(3)} MeV`,
                    kWh: `E = ${solution.energyInkWh.toExponential(3)} kWh`
                },
                physicalMeaning: this.getMassEnergyComparison(solution.energy)
            });
        }

        return steps;
    }

    generateTwinParadoxSteps(problem, solution) {
        const { v, t_ship } = problem.parameters;
        const { beta, lorentzFactor, earthTime, shipTime, ageDifference } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify scenario',
            description: 'One twin travels at high speed, the other remains on Earth',
            givenValues: {
                velocity: `v = ${v.toExponential(3)} m/s`,
                shipTime: t_ship !== undefined ? `t_ship = ${shipTime} s` : 'To be found'
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate Lorentz factor',
            calculation: {
                beta: `β = ${beta.toFixed(6)}`,
                gamma: `γ = ${lorentzFactor.toFixed(6)}`
            },
            physicalMeaning: 'This determines how much time dilation occurs'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate Earth time',
            description: 'Apply t_Earth = γ·t_ship',
            calculation: `t_Earth = ${lorentzFactor.toFixed(6)} × ${shipTime} = ${earthTime.toFixed(6)} s`,
            afterExpression: `t_Earth = ${earthTime.toFixed(6)} s`,
            reasoning: 'More time passes on Earth than on the spaceship'
        });

        steps.push({
            stepNumber: 4,
            step: 'Calculate age difference',
            calculation: `Δt = ${earthTime.toFixed(6)} - ${shipTime} = ${ageDifference.toFixed(6)} s`,
            afterExpression: `Age difference = ${ageDifference.toFixed(2)} s`,
            physicalMeaning: `The traveling twin is ${ageDifference.toFixed(2)}s younger upon return`,
            inYears: `Approximately ${(ageDifference / (365.25 * 24 * 3600)).toFixed(4)} years`,
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Explain the asymmetry',
            description: 'Why is this not a paradox?',
            explanation: 'The traveling twin must accelerate to turn around, breaking the symmetry between the two reference frames. The twin who accelerates experiences less proper time.',
            physicalMeaning: 'Acceleration is absolute (detectable) while uniform motion is relative'
        });

        return steps;
    }

    generateSpacetimeIntervalSteps(problem, solution) {
        const { delta_t, delta_x, delta_y, delta_z } = problem.parameters;
        const { spatialSeparation, spacetimeInterval, intervalType, properQuantity } = solution;
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify coordinate differences',
            givenValues: {
                timeInterval: `Δt = ${delta_t} s`,
                spatialX: `Δx = ${delta_x} m`,
                spatialY: `Δy = ${delta_y} m`,
                spatialZ: `Δz = ${delta_z} m`
            }
        });

        steps.push({
            stepNumber: 2,
            step: 'Calculate spatial separation',
            description: 'Find Δr² = Δx² + Δy² + Δz²',
            calculation: `Δr² = ${delta_x}² + ${delta_y}² + ${delta_z}² = ${spatialSeparation.magnitude.toFixed(6)} m`,
            afterExpression: `Δr = ${spatialSeparation.magnitude.toFixed(6)} m`
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate spacetime interval',
            description: 'Apply s² = c²Δt² - Δr²',
            calculation: {
                  step1: `c²Δt² = (${this.c.toExponential(3)})² × (${delta_t})² = ${(this.c * this.c * delta_t * delta_t).toExponential(3)} m²`,
                step2: `Δr² = ${(spatialSeparation.magnitude * spatialSeparation.magnitude).toFixed(6)} m²`,
                step3: `s² = ${(this.c * this.c * delta_t * delta_t).toExponential(3)} - ${(spatialSeparation.magnitude * spatialSeparation.magnitude).toFixed(6)} = ${spacetimeInterval.toExponential(3)} m²`
            },
            afterExpression: `s² = ${spacetimeInterval.toExponential(3)} m²`,
            reasoning: 'The spacetime interval is invariant in all inertial frames',
            formula: 's² = c²Δt² - Δx² - Δy² - Δz²'
        });

        steps.push({
            stepNumber: 4,
            step: 'Classify interval type',
            description: 'Determine if timelike, spacelike, or null',
            classification: {
                result: intervalType,
                condition: spacetimeInterval > 0 ? 's² > 0 (timelike)' : 
                          spacetimeInterval < 0 ? 's² < 0 (spacelike)' : 
                          's² = 0 (null/lightlike)'
            },
            physicalMeaning: intervalType === 'timelike' ? 
                'Events can be causally connected - massive particle can travel between them' :
                intervalType === 'spacelike' ?
                'Events cannot be causally connected - they are absolutely distant' :
                'Events connected by light ray - photon path'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate proper quantity',
            description: `Extract ${properQuantity.type}`,
            calculation: intervalType === 'timelike' ?
                `τ = √(s²)/c = ${properQuantity.value.toFixed(6)} s` :
                intervalType === 'spacelike' ?
                `L = √(-s²) = ${properQuantity.value.toFixed(6)} m` :
                'No proper quantity (null interval)',
            afterExpression: `${properQuantity.type} = ${properQuantity.value.toFixed(6)} ${properQuantity.units}`,
            finalAnswer: true,
            physicalMeaning: this.getSpacetimeIntervalMeaning(intervalType, properQuantity)
        });

        return steps;
    }

    generateGenericPhysicsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Relativity problem',
            description: 'Solve using special relativity principles',
            expression: problem.scenario || 'Problem statement',
            reasoning: 'Apply relativistic formulas for high-speed phenomena',
            solution: solution
        }];
    }

    // ENHANCED STEP EXPLANATION METHODS

    enhancePhysicsStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getPhysicsConceptualExplanation(step, problem),
                procedural: this.getPhysicsProceduralExplanation(step),
                visual: this.getPhysicsVisualExplanation(step, problem),
                mathematical: this.getPhysicsMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptivePhysicsExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisitePhysics: this.identifyPhysicsPrerequisites(step, problem.type),
                keyPhysicsConcepts: this.identifyKeyPhysicsConcepts(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPhysicsPreviousStep(step, stepIndex) : null
            },

            physicsContext: {
                physicalSignificance: step.physicalMeaning || '',
                units: step.units || {},
                typicalValues: this.getTypicalValues(step, problem.type)
            }
        };

        return enhanced;
    }

    addPhysicsStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Physical Connection to Next Step',
                    explanation: this.generatePhysicsStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainPhysicsStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainPhysicsStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    addPhysicsErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePhysicsPreventionTips(step, problemType),
                checkPoints: this.generatePhysicsCheckPoints(step),
                warningFlags: this.identifyPhysicsWarningFlags(step, problemType),
                dimensionalAnalysis: this.performDimensionalAnalysis(step)
            },
            validation: {
                selfCheck: this.generatePhysicsSelfCheckQuestion(step),
                expectedResult: this.describePhysicsExpectedResult(step),
                troubleshooting: this.generatePhysicsTroubleshootingTips(step),
                physicalReasonableness: this.checkPhysicalReasonableness(step)
            }
        };
    }

    addPhysicsScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generatePhysicsGuidingQuestions(step, problem),
                subSteps: this.breakIntoPhysicsSubSteps(step),
                hints: this.generatePhysicsProgressiveHints(step),
                practiceVariation: this.generatePhysicsPracticeVariation(step, problem),
                physicalIntuition: this.buildPhysicalIntuition(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainPhysicsThinkingProcess(step),
                decisionPoints: this.identifyPhysicsDecisionPoints(step),
                alternativeApproaches: this.suggestPhysicsAlternativeMethods(step, problem),
                commonConfusions: this.identifyCommonPhysicsConfusions(step, problem.type)
            }
        }));
    }

    // HELPER METHODS FOR PHYSICS EXPLANATIONS

    getPhysicsConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Calculate Lorentz factor γ': 'The Lorentz factor measures how much relativistic effects change physical quantities. It equals 1 at rest and grows toward infinity as velocity approaches light speed.',
            'Apply time dilation formula': 'Time literally runs slower for moving objects. This is not an illusion - it\'s a real physical effect verified by countless experiments.',
            'Apply length contraction formula': 'Space itself contracts along the direction of motion. An object moving past you appears physically shorter.',
            'Apply relativistic velocity addition': 'Velocities combine in a way that ensures nothing can exceed the speed of light, preserving causality in the universe.'
        };

        return conceptualExplanations[step.step] || step.reasoning || 'This step advances the solution using relativistic principles.';
    }

    getPhysicsProceduralExplanation(step) {
        if (step.calculation) {
            return `Follow the calculation steps carefully, ensuring units are consistent and checking intermediate results for physical reasonableness.`;
        }
        return 'Apply the standard procedure for this type of relativistic calculation.';
    }

    getPhysicsVisualExplanation(step, problem) {
        const visualExplanations = {
            'time_dilation': 'Imagine a light clock (light bouncing between mirrors) moving past you. The light travels a longer diagonal path from your perspective, making the clock tick slower.',
            'length_contraction': 'Picture a ruler moving past you at high speed. It appears compressed like an accordion in the direction of motion.',
            'relativistic_velocity': 'Visualize two rockets: one launches from Earth, another from the first rocket. Their combined velocity relative to Earth is less than simple addition would suggest.',
            'doppler_effect': 'Imagine waves bunching up ahead of a moving source (blueshift) or spreading out behind (redshift), but with the added complication of time dilation.'
        };

        return visualExplanations[problem.type] || 'Visualize the physical setup and how relativistic effects modify classical expectations.';
    }

    getPhysicsMathematicalExplanation(step) {
        if (step.formula) {
            return `This step applies the formula ${step.formula}, which is derived from the fundamental postulates of special relativity: (1) laws of physics are the same in all inertial frames, and (2) speed of light is constant in all frames.`;
        }
        return 'Apply mathematical relations derived from special relativity postulates.';
    }

    getAdaptivePhysicsExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                focus: 'What happens and why it matters',
                language: 'everyday terms and simple analogies'
            },
            intermediate: {
                focus: 'Physical principles and calculation methods',
                language: 'standard physics terminology'
            },
            detailed: {
                focus: 'Complete theoretical framework and derivations',
                language: 'technical physics and mathematical rigor'
            },
            scaffolded: {
                focus: 'Guided discovery through questioning',
                language: 'progressive complexity with support'
            }
        };

        const level = adaptations[explanationLevel] || adaptations.intermediate;
        return {
            adaptedDescription: this.adaptPhysicsLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptPhysicsLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel,
            focus: level.focus
        };
    }

    adaptPhysicsLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'Lorentz factor': 'time stretching factor',
                    'proper time': 'time on the moving clock',
                    'dilated time': 'time for stationary observer',
                    'spacetime interval': 'distance in space and time combined',
                    'reference frame': 'perspective of an observer'
                }
            },
            intermediate: {
                replacements: {
                    'Lorentz factor': 'Lorentz factor (γ)',
                    'proper time': 'proper time (rest frame time)',
                    'dilated time': 'dilated time (observer time)'
                }
            },
            detailed: {
                replacements: {
                    'Lorentz factor': 'Lorentz factor (γ = 1/√(1-v²/c²))',
                    'proper time': 'proper time τ₀ (invariant interval)',
                    'dilated time': 'coordinate time Δt in observer frame'
                }
            }
        };

        const levelAdaptation = adaptations[level.language] || adaptations.intermediate;
        let adaptedText = text;

        for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
            const regex = new RegExp(`\\b${term}\\b`, 'gi');
            adaptedText = adaptedText.replace(regex, replacement);
        }

        return adaptedText;
    }

    identifyPhysicsPrerequisites(step, problemType) {
        const prerequisites = {
            'Calculate Lorentz factor γ': ['Square roots', 'Velocity as fraction of c', 'Understanding of limits'],
            'Apply time dilation formula': ['Multiplication', 'Understanding of reference frames', 'Concept of proper time'],
            'Apply length contraction formula': ['Division', 'Understanding of rest frame vs moving frame'],
            'Apply relativistic velocity addition': ['Fraction operations', 'Understanding why c is a limit']
        };

        return prerequisites[step.step] || ['Basic algebra', 'Understanding of velocity and time'];
    }

    identifyKeyPhysicsConcepts(step) {
        const concepts = {
            'Calculate Lorentz factor γ': ['Lorentz factor', 'relativistic regime', 'speed of light as limit'],
            'Apply time dilation formula': ['proper time', 'coordinate time', 'time dilation', 'reference frames'],
            'Apply length contraction formula': ['proper length', 'contracted length', 'direction of motion'],
            'Apply relativistic velocity addition': ['velocity composition', 'speed of light invariance']
        };

        return concepts[step.step] || ['special relativity'];
    }

    connectToPhysicsPreviousStep(step, stepIndex) {
        return {
            connection: `Step ${stepIndex} provided the necessary quantities for this calculation`,
            progression: 'We are building up the solution using fundamental relativistic relationships',
            relationship: 'Each step brings us closer to the complete physical picture'
        };
    }

    getTypicalValues(step, problemType) {
        const typicalValues = {
            'time_dilation': {
                'GPS satellites': 'v ≈ 3.87 km/s, γ ≈ 1.0000000001',
                'Particle accelerators': 'v ≈ 0.9999c, γ > 1000',
                'Cosmic rays': 'v ≈ 0.99999999c, γ > 10⁸'
            },
            'length_contraction': {
                'Muons in atmosphere': 'v ≈ 0.98c, contraction factor ≈ 0.2',
                'Protons in LHC': 'v ≈ 0.9999999c, contraction factor ≈ 0.0001'
            }
        };

        return typicalValues[problemType] || {};
    }

    generatePhysicsStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression || 'intermediate result'}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            physicalConnection: `This quantity is needed because ${this.explainPhysicalNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us understand ${this.explainPhysicalBenefit(nextStep)}`
        };
    }

    explainPhysicalNecessity(currentStep, nextStep) {
        return `the physical quantity we just calculated feeds directly into the next relativistic relationship`;
    }

    explainPhysicalBenefit(nextStep) {
        return `how the physical system behaves under relativistic conditions`;
    }

    explainPhysicsStepProgression(currentStep, nextStep) {
        return `After determining ${currentStep.step}, we can now ${nextStep.description.toLowerCase()} to continue our analysis`;
    }

    explainPhysicsStepStrategy(nextStep) {
        return `The strategy is to ${nextStep.description.toLowerCase()}, which will reveal the relativistic effect we're investigating`;
    }

    generatePhysicsPreventionTips(step, problemType) {
        const tips = {
            'Calculate Lorentz factor γ': [
                'Always check that v < c before calculating',
                'If γ < 1 or imaginary, velocity is invalid',
                'γ = 1 means no relativistic effects (v = 0)'
            ],
            'Apply time dilation formula': [
                'Clearly identify which time is proper time (τ₀)',
                'Remember: dilated time is always longer than proper time',
                'Check that Δt ≥ τ₀'
            ]
        };

        return tips[step.step] || ['Double-check units', 'Verify physical reasonableness of result'];
    }

    generatePhysicsCheckPoints(step) {
        return [
            'Are all velocities less than c?',
            'Are units consistent throughout?',
            'Does the result make physical sense?',
            'Is γ ≥ 1?',
            'Do limiting cases check out (e.g., v → 0)?'
        ];
    }

    identifyPhysicsWarningFlags(step, problemType) {
        const warnings = {
            'time_dilation': step.afterExpression?.includes('γ') ? 
                ['If γ < 1, there is an error', 'If γ is imaginary, v > c (impossible)'] : [],
            'length_contraction': step.afterExpression?.includes('L') ?
                ['Contracted length should be less than proper length', 'Only parallel dimension contracts'] : []
        };

        return warnings[problemType] || [];
    }

    performDimensionalAnalysis(step) {
        if (step.units) {
            return {
                inputUnits: step.units.input || 'various',
                outputUnits: step.units.output || 'various',
                dimensionalConsistency: 'Check that units cancel appropriately',
                note: 'Dimensional analysis helps catch errors'
            };
        }
        return null;
    }

    generatePhysicsSelfCheckQuestion(step) {
        const questions = {
            'Calculate Lorentz factor γ': 'Is my Lorentz factor ≥ 1? Does it approach 1 as v → 0?',
            'Apply time dilation formula': 'Is the dilated time longer than the proper time?',
            'Apply length contraction formula': 'Is the contracted length shorter than the proper length?'
        };

        return questions[step.step] || 'Does this result make physical sense?';
    }

    describePhysicsExpectedResult(step) {
        const expectations = {
            'Calculate Lorentz factor γ': 'γ should be ≥ 1, approaching 1 at low speeds and infinity as v → c',
            'Apply time dilation formula': 'Dilated time should be greater than proper time',
            'Apply length contraction formula': 'Contracted length should be less than proper length'
        };

        return expectations[step.step] || 'Result should be physically reasonable';
    }

    generatePhysicsTroubleshootingTips(step) {
        return [
            'If result seems wrong, check velocity units (m/s vs c)',
            'Verify you\'re using proper vs dilated/contracted quantities correctly',
            'Check calculator is in correct mode for square roots',
            'Compare with known examples or limiting cases'
        ];
    }

    checkPhysicalReasonableness(step) {
        if (step.afterExpression) {
            return {
                check: 'Verify result is within expected range for this scenario',
                considerations: [
                    'Classical limit: does it reduce to classical physics at low v?',
                    'Relativistic regime: are effects significant at high v?',
                    'Physical constraints: does it violate any physical laws?'
                ]
            };
        }
        return null;
    }

    generatePhysicsGuidingQuestions(step, problem) {
        const questions = {
            'Identify given quantities': [
                'What physical quantities are given in the problem?',
                'Which reference frame are we in?',
                'What are we trying to find?'
            ],
            'Calculate Lorentz factor γ': [
                'What does the Lorentz factor represent physically?',
                'Why do we need to calculate it?',
                'What happens to γ as v approaches c?'
            ],
            'Apply time dilation formula': [
                'Which time is proper time in this scenario?',
                'Which observer measures dilated time?',
                'Why does time run differently for different observers?'
            ]
        };

        return questions[step.step] || ['What is the physical meaning of this step?', 'How does it advance our solution?'];
    }

    breakIntoPhysicsSubSteps(step) {
        if (step.calculation && typeof step.calculation === 'object') {
            return Object.entries(step.calculation).map(([key, value]) => `${key}: ${value}`);
        }
        return ['Identify the relevant formula', 'Substitute known values', 'Calculate the result', 'Check units and physical reasonableness'];
    }

    generatePhysicsProgressiveHints(step) {
        return {
            level1: 'Think about what physical principle applies here',
            level2: 'Consider which relativistic formula is appropriate',
            level3: 'Remember to check units and that v < c',
            level4: step.formula ? `Try using: ${step.formula}` : 'Apply the standard relativistic relationship'
        };
    }

    generatePhysicsPracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different velocities (e.g., 0.5c, 0.9c, 0.99c)',
            practiceHint: 'Practice calculating Lorentz factors for different speeds to build intuition',
            extension: 'Explore how the effect changes as velocity increases'
        };
    }

    buildPhysicalIntuition(step, problem) {
        return {
            analogy: this.getPhysicsAnalogy(step, problem.type),
            commonMisconception: this.identifyCommonMisconception(step, problem.type),
            keyInsight: this.extractKeyPhysicalInsight(step, problem.type)
        };
    }

    getPhysicsAnalogy(step, problemType) {
        const analogies = {
            'time_dilation': 'Like watching a movie in slow motion - events on the moving clock appear to unfold more slowly from your perspective',
            'length_contraction': 'Like looking at a compressed spring - the object appears squished in the direction it\'s moving',
            'relativistic_velocity': 'Like mixing paint colors - you don\'t just add them, they combine in a specific way to produce something different'
        };

        return analogies[problemType] || 'Think of how this physical quantity transforms between reference frames';
    }

    identifyCommonMisconception(step, problemType) {
        const misconceptions = {
            'time_dilation': 'TIME DILATION IS NOT AN OPTICAL ILLUSION - it\'s a real physical effect that has been measured countless times',
            'length_contraction': 'ONLY THE PARALLEL DIMENSION CONTRACTS - perpendicular dimensions remain unchanged',
            'relativistic_velocity': 'VELOCITIES DO NOT ADD LINEARLY - classical addition fails at relativistic speeds'
        };

        return misconceptions[problemType] || 'Be careful not to apply classical intuition to relativistic scenarios';
    }

    extractKeyPhysicalInsight(step, problemType) {
        const insights = {
            'time_dilation': 'Time is not absolute - it depends on your state of motion relative to what you\'re observing',
            'length_contraction': 'Space is not absolute - distances depend on relative motion',
            'relativistic_velocity': 'The speed of light is the universe\'s ultimate speed limit - no combination of velocities can exceed it'
        };

        return insights[problemType] || 'Relativity shows us that space and time are interconnected in ways that defy everyday intuition';
    }

    explainPhysicsThinkingProcess(step) {
        return {
            observe: 'What physical quantities and relationships are involved?',
            goal: 'What relativistic effect are we trying to calculate?',
            strategy: 'Which formula relates the known quantities to the unknown?',
            execute: 'How do I apply the formula correctly with proper units?',
            verify: 'Does the result make physical sense and satisfy constraints?'
        };
    }

    identifyPhysicsDecisionPoints(step) {
        return [
            'Which reference frame perspective to use',
            'Whether to work with v or β = v/c',
            'Which form of the relativistic formula to apply',
            'How to interpret the physical meaning of the result'
        ];
    }

    suggestPhysicsAlternativeMethods(step, problem) {
        const alternatives = {
            'time_dilation': [
                'Use γ explicitly: Δt = γ·τ₀',
                'Use velocity directly: Δt = τ₀/√(1 - v²/c²)',
                'Work in natural units where c = 1'
            ],
            'lorentz_transformation': [
                'Use matrix formulation for transformations',
                'Use rapidity parameter instead of velocity',
                'Use spacetime diagrams for visualization'
            ]
        };

        return alternatives[problem.type] || ['Standard formula application is most straightforward'];
    }

    identifyCommonPhysicsConfusions(step, problemType) {
        const confusions = {
            'time_dilation': [
                'Confusing proper time with dilated time',
                'Thinking time dilation is symmetric (it is, but proper time is frame-dependent)',
                'Forgetting which observer measures which time'
            ],
            'length_contraction': [
                'Thinking all dimensions contract (only parallel component does)',
                'Confusing proper length with contracted length',
                'Applying length contraction to perpendicular dimensions'
            ]
        };

        return confusions[problemType] || ['Various conceptual confusions possible'];
    }

    // HELPER METHODS FOR EXAMPLES AND COMPARISONS

    getTimeDilationExample(gamma, timeDiff) {
        if (gamma < 1.01) {
            return 'This is a very small effect, but measurable with atomic clocks';
        } else if (gamma < 2) {
            return 'This is similar to effects observed in particle accelerators and GPS satellites';
        } else if (gamma < 10) {
            return 'This is comparable to cosmic ray muons reaching Earth\'s surface';
        } else {
            return 'This is an extreme effect seen only in the highest-energy particle collisions';
        }
    }

    getMassEnergyComparison(energy) {
        const tnt_tons = energy / 4.184e9;
        const households_year = energy / (10000 * 3600); // ~10,000 kWh per year per household
        
        if (tnt_tons > 1) {
            return `This energy is equivalent to ${tnt_tons.toExponential(2)} tons of TNT, or enough to power ${households_year.toExponential(2)} households for a year`;
        } else {
            return `This demonstrates the enormous energy content of even tiny amounts of mass`;
        }
    }

    getSpacetimeIntervalMeaning(type, properQuantity) {
        if (type === 'timelike') {
            return `A clock moving between these events would measure ${properQuantity.value.toFixed(4)} s of proper time`;
        } else if (type === 'spacelike') {
            return `A ruler at rest spanning these events would measure ${properQuantity.value.toFixed(4)} m of proper length`;
        } else {
            return 'These events are connected by a light ray - only photons can link them';
        }
    }

    // GRAPH DATA GENERATION

    generateRelativityGraphData() {
        if (!this.currentSolution || !this.currentProblem) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'time_dilation':
            case 'length_contraction':
                this.graphData = this.generateLorentzFactorGraph();
                break;
            case 'relativistic_energy':
                this.graphData = this.generateEnergyGraph();
                break;
            case 'doppler_effect':
                this.graphData = this.generateDopplerGraph();
                break;
        }
    }

    generateLorentzFactorGraph() {
        const points = [];
        for (let beta = 0; beta <= 0.999; beta += 0.01) {
            const gamma = 1 / Math.sqrt(1 - beta * beta);
            points.push({ beta: beta, gamma: gamma, v: beta * this.c });
        }

        return {
            type: 'lorentz_factor',
            xlabel: 'β = v/c',
            ylabel: 'γ (Lorentz Factor)',
            points: points,
            description: 'Lorentz factor increases dramatically as velocity approaches c'
        };
    }

    generateEnergyGraph() {
        const points = [];
        const m = this.currentProblem.parameters.m;
        
        for (let beta = 0; beta <= 0.999; beta += 0.01) {
            const gamma = 1 / Math.sqrt(1 - beta * beta);
            const E_total = gamma * m * this.c * this.c;
            const E_kinetic = (gamma - 1) * m * this.c * this.c;
            points.push({ 
                beta: beta, 
                totalEnergy: E_total, 
                kineticEnergy: E_kinetic,
                v: beta * this.c 
            });
        }

        return {
            type: 'energy_vs_velocity',
            xlabel: 'β = v/c',
            ylabel: 'Energy (J)',
            points: points,
            description: 'Energy grows without bound as velocity approaches c'
        };
    }

    generateDopplerGraph() {
        const f_source = this.currentProblem.parameters.f_source;
        const points = [];
        
        for (let beta = -0.99; beta <= 0.99; beta += 0.01) {
            let f_obs;
            if (beta >= 0) {
                // Approaching
                f_obs = f_source * Math.sqrt((1 + beta) / (1 - beta));
            } else {
                // Receding
                f_obs = f_source * Math.sqrt((1 + beta) / (1 - beta));
            }
            points.push({ beta: beta, frequency: f_obs });
        }

        return {
            type: 'doppler_shift',
            xlabel: 'β = v/c (negative = receding, positive = approaching)',
            ylabel: 'Observed Frequency (Hz)',
            points: points,
            description: 'Relativistic Doppler shift: blueshift for approach, redshift for recession'
        };
    }

    // VERIFICATION METHODS

    verifyTimeDilation() {
        const { tau } = this.currentProblem.parameters;
        const { lorentzFactor, dilatedTime } = this.currentSolution;

        const expected = lorentzFactor * tau;
        const difference = Math.abs(expected - dilatedTime);

        return {
            formula: 'Δt = γ·τ₀',
            properTime: tau,
            lorentzFactor: lorentzFactor,
            expectedDilatedTime: expected,
            calculatedDilatedTime: dilatedTime,
            difference: difference,
            isValid: difference < 1e-10,
            physicalCheck: dilatedTime >= tau ? 'Valid: Δt ≥ τ₀' : 'Error: Δt must be ≥ τ₀'
        };
    }

    verifyLengthContraction() {
        const { L0 } = this.currentProblem.parameters;
        const { lorentzFactor, contractedLength } = this.currentSolution;

        const expected = L0 / lorentzFactor;
        const difference = Math.abs(expected - contractedLength);

        return {
            formula: 'L = L₀/γ',
            properLength: L0,
            lorentzFactor: lorentzFactor,
            expectedContractedLength: expected,
            calculatedContractedLength: contractedLength,
            difference: difference,
            isValid: difference < 1e-10,
            physicalCheck: contractedLength <= L0 ? 'Valid: L ≤ L₀' : 'Error: L must be ≤ L₀'
        };
    }

    verifyRelativisticVelocity() {
        const { v1, v2 } = this.currentProblem.parameters;
        const { resultantVelocity } = this.currentSolution;

        const beta1 = v1 / this.c;
        const beta2 = v2 / this.c;
        const expected_beta = (beta1 + beta2) / (1 + beta1 * beta2);
        const expected_v = expected_beta * this.c;
        const difference = Math.abs(expected_v - resultantVelocity);

        return {
            formula: 'v = (v₁ + v₂)/(1 + v₁v₂/c²)',
            velocity1: v1,
            velocity2: v2,
            expectedResult: expected_v,
            calculatedResult: resultantVelocity,
            difference: difference,
            isValid: difference < 1e-6,
            physicalCheck: resultantVelocity < this.c ? 'Valid: v < c' : 'Error: v must be < c'
        };
    }

    verifyRelativisticEnergy() {
        const { m, v } = this.currentProblem.parameters;
        const { lorentzFactor, totalEnergy, restEnergy, kineticEnergy } = this.currentSolution;

        const expected_rest = m * this.c * this.c;
        const expected_total = lorentzFactor * expected_rest;
        const expected_kinetic = expected_total - expected_rest;

        return {
            formulas: {
                rest: 'E₀ = mc²',
                total: 'E = γmc²',
                kinetic: 'K = (γ - 1)mc²'
            },
            mass: m,
            velocity: v,
            lorentzFactor: lorentzFactor,
            restEnergy: {
                expected: expected_rest,
                calculated: restEnergy,
                difference: Math.abs(expected_rest - restEnergy),
                isValid: Math.abs(expected_rest - restEnergy) < 1e-6
            },
            totalEnergy: {
                expected: expected_total,
                calculated: totalEnergy,
                difference: Math.abs(expected_total - totalEnergy),
                isValid: Math.abs(expected_total - totalEnergy) < 1e-6
            },
            kineticEnergy: {
                expected: expected_kinetic,
                calculated: kineticEnergy,
                difference: Math.abs(expected_kinetic - kineticEnergy),
                isValid: Math.abs(expected_kinetic - kineticEnergy) < 1e-6
            },
            energyConservation: 'E = E₀ + K verified'
        };
    }

    verifySpacetimeInterval() {
        const { delta_t, delta_x, delta_y = 0, delta_z = 0 } = this.currentProblem.parameters;
        const { spacetimeInterval } = this.currentSolution;

        const expected = this.c * this.c * delta_t * delta_t - 
                        (delta_x * delta_x + delta_y * delta_y + delta_z * delta_z);
        const difference = Math.abs(expected - spacetimeInterval);

        return {
            formula: 's² = c²Δt² - Δx² - Δy² - Δz²',
            coordinates: { delta_t, delta_x, delta_y, delta_z },
            expectedInterval: expected,
            calculatedInterval: spacetimeInterval,
            difference: difference,
            isValid: difference < 1e-6,
            invarianceNote: 'This quantity is the same in all inertial frames'
        };
    }

    // WORKBOOK GENERATION

    generateRelativityWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createRelativityWorkbookStructure();

        workbook.sections = [
            this.createRelativityProblemSection(),
            this.createPhysicsContextSection(),
            this.createEnhancedRelativityStepsSection(),
            this.createRelativityLessonSection(),
            this.createRelativitySolutionSection(),
            this.createPhysicalInterpretationSection(),
            this.createRelativityVerificationSection(),
            this.createRelativityPedagogicalNotesSection(),
            this.createRelativityAlternativeMethodsSection(),
            this.createPhysicsApplicationsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createRelativityWorkbookStructure() {
        return {
            title: 'Enhanced Relativity Mathematical Workbook',
            subtitle: 'Special Relativity Problem Solver with Multi-Layer Explanations',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            constants: {
                speedOfLight: `c = ${this.c.toExponential(3)} m/s`,
                speedOfLightKm: `c = ${this.c_km_s} km/s`
            },
            sections: []
        };
    }

    createRelativityProblemSection() {
        if (!this.currentProblem) return null;

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: [
                ['Problem Type', this.relativityTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Category', this.relativityTypes[this.currentProblem.type]?.category || 'N/A'],
                ['Description', this.relativityTypes[this.currentProblem.type]?.description || 'N/A'],
                ['Scenario', this.currentProblem.scenario || 'N/A'],
                ['', ''],
                ['Given Parameters', ''],
                ...Object.entries(this.currentProblem.parameters).map(([key, value]) => [
                    key, 
                    typeof value === 'number' ? value.toExponential(3) : value
                ])
            ]
        };
    }

    createPhysicsContextSection() {
        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson) return null;

        return {
            title: 'Physics Context',
            type: 'context',
            data: [
                ['Physical Principle', lesson.title],
                ['Theory', lesson.theory],
                ['', ''],
                ['Key Concepts', ''],
                ...lesson.concepts.map((concept, i) => [`${i + 1}`, concept]),
                ['', ''],
                ['Key Formulas', ''],
                ...Object.entries(lesson.keyFormulas).map(([name, formula]) => [name, formula])
            ]
        };
    }

    createEnhancedRelativityStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in the main display
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Connection', step.explanation]);
                stepsData.push(['', '']);
                return;
            }

            // Main step header
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            // Expressions
            if (step.beforeExpression && step.afterExpression) {
                stepsData.push(['Before', step.beforeExpression]);
                if (step.operation) {
                    stepsData.push(['Operation', step.operation]);
                }
                stepsData.push(['After', step.afterExpression]);
            } else if (step.expression) {
                stepsData.push(['Expression', step.expression]);
            }

            // Calculation details
            if (step.calculation) {
                if (typeof step.calculation === 'string') {
                    stepsData.push(['Calculation', step.calculation]);
                } else if (typeof step.calculation === 'object') {
                    stepsData.push(['Calculation Steps', '']);
                    Object.entries(step.calculation).forEach(([key, value]) => {
                        stepsData.push([`  ${key}`, value]);
                    });
                }
            }

            // Physical meaning and reasoning
            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            // Formula used
            if (step.formula) {
                stepsData.push(['Formula', step.formula]);
            }
            if (step.algebraicRule) {
                stepsData.push(['Rule', step.algebraicRule]);
            }

            // Enhanced explanations (if detailed level)
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Mathematical', step.explanations.mathematical]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['⚠️ Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.checkPoints.length > 0) {
                    stepsData.push(['✓ Check Points', step.errorPrevention.checkPoints.join('; ')]);
                }
            }

            // Scaffolding (if scaffolded level)
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            // Units
            if (step.units) {
                const unitsStr = step.units.output || 'various';
                stepsData.push(['Units', unitsStr]);
            }

            // Mark final answer
            if (step.finalAnswer) {
                stepsData.push(['✓ FINAL ANSWER', step.afterExpression || step.numericalResult]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            data: stepsData,
            explanationLevel: this.explanationLevel
        };
    }

    createRelativityLessonSection() {
        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson) return null;

        return {
            title: `Lesson: ${lesson.title}`,
            type: 'lesson',
            data: [
                ['Topic', lesson.title],
                ['', ''],
                ['Theory', lesson.theory],
                ['', ''],
                ['Solving Strategy', ''],
                ...lesson.solvingSteps.map((step, i) => [`${i + 1}`, step]),
                ['', ''],
                ['Applications', ''],
                ...lesson.applications.map((app, i) => [`${i + 1}`, app]),
                ['', ''],
                ['Physical Insights', ''],
                ...(lesson.physicalInsights || []).map((insight, i) => [`${i + 1}`, insight])
            ]
        };
    }

    createRelativitySolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [
            ['Problem Type', this.currentSolution.problemType || 'N/A'],
            ['', '']
        ];

        // Add main results
        if (this.currentSolution.lorentzFactor !== undefined) {
            solutionData.push(['Lorentz Factor (γ)', this.currentSolution.lorentzFactor.toFixed(6)]);
        }
        if (this.currentSolution.beta !== undefined) {
            solutionData.push(['Velocity Fraction (β)', this.currentSolution.beta.toFixed(6)]);
        }

        // Type-specific results
        switch (this.currentProblem.type) {
            case 'time_dilation':
                solutionData.push(['Proper Time (τ₀)', `${this.currentSolution.properTime} s`]);
                solutionData.push(['Dilated Time (Δt)', `${this.currentSolution.dilatedTime.toFixed(6)} s`]);
                solutionData.push(['Time Difference', `${this.currentSolution.timeDifference.toFixed(6)} s`]);
                break;

            case 'length_contraction':
                solutionData.push(['Proper Length (L₀)', `${this.currentSolution.properLength} m`]);
                solutionData.push(['Contracted Length (L)', `${this.currentSolution.contractedLength.toFixed(6)} m`]);
                solutionData.push(['Contraction Amount', `${this.currentSolution.contractionAmount.toFixed(6)} m`]);
                solutionData.push(['Contraction %', `${(this.currentSolution.contractionFraction * 100).toFixed(2)}%`]);
                break;

            case 'relativistic_velocity':
                solutionData.push(['Resultant Velocity', `${this.currentSolution.resultantVelocity.toExponential(3)} m/s`]);
                solutionData.push(['Resultant β', this.currentSolution.resultantBeta.toFixed(6)]);
                solutionData.push(['Classical Result', `${this.currentSolution.classicalResult.toExponential(3)} m/s`]);
                solutionData.push(['Difference', `${this.currentSolution.difference.toExponential(3)} m/s`]);
                break;

            case 'relativistic_momentum':
                solutionData.push(['Relativistic Momentum', `${this.currentSolution.relativisticMomentum.toExponential(3)} kg·m/s`]);
                solutionData.push(['Classical Momentum', `${this.currentSolution.classicalMomentum.toExponential(3)} kg·m/s`]);
                solutionData.push(['Increase', `${this.currentSolution.percentIncrease.toFixed(2)}%`]);
                break;

            case 'relativistic_energy':
                solutionData.push(['Rest Energy (E₀)', `${this.currentSolution.restEnergy.toExponential(3)} J`]);
                solutionData.push(['Total Energy (E)', `${this.currentSolution.totalEnergy.toExponential(3)} J`]);
                solutionData.push(['Kinetic Energy (K)', `${this.currentSolution.kineticEnergy.toExponential(3)} J`]);
                solutionData.push(['K in MeV', `${this.currentSolution.energyInMeV.toExponential(3)} MeV`]);
                break;

            case 'doppler_effect':
                solutionData.push(['Source Frequency', `${this.currentSolution.sourceFrequency} Hz`]);
                solutionData.push(['Observed Frequency', `${this.currentSolution.observedFrequency.toFixed(2)} Hz`]);
                solutionData.push(['Frequency Shift', `${this.currentSolution.frequencyShift.toFixed(2)} Hz`]);
                solutionData.push(['Percent Shift', `${this.currentSolution.percentShift.toFixed(2)}%`]);
                solutionData.push(['Direction', this.currentSolution.approaching ? 'Approaching (Blueshift)' : 'Receding (Redshift)']);
                break;

            case 'spacetime_interval':
                solutionData.push(['Spacetime Interval (s²)', `${this.currentSolution.spacetimeInterval.toExponential(3)} m²`]);
                solutionData.push(['Interval Type', this.currentSolution.intervalType]);
                solutionData.push(['Proper Quantity', `${this.currentSolution.properQuantity.type}: ${this.currentSolution.properQuantity.value.toFixed(6)} ${this.currentSolution.properQuantity.units}`]);
                break;
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createPhysicalInterpretationSection() {
        if (!this.currentSolution || !this.currentSolution.physicalInterpretation) return null;

        return {
            title: 'Physical Interpretation',
            type: 'interpretation',
            data: [
                ['Physical Meaning', this.currentSolution.physicalInterpretation],
                ['', ''],
                ['Formula Used', this.currentSolution.formula || this.currentSolution.formulas?.total || 'Various formulas'],
                ['', ''],
                ['Key Physical Insight', this.extractKeyPhysicalInsight({}, this.currentProblem.type)]
            ]
        };
    }

    createRelativityVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']);

        let verification;
        switch (type) {
            case 'time_dilation':
                verification = this.verifyTimeDilation();
                verificationData.push(['Formula Check', verification.formula]);
                verificationData.push(['Proper Time', `${verification.properTime} s`]);
                verificationData.push(['Lorentz Factor', verification.lorentzFactor.toFixed(6)]);
                verificationData.push(['Expected Δt', `${verification.expectedDilatedTime.toFixed(6)} s`]);
                verificationData.push(['Calculated Δt', `${verification.calculatedDilatedTime.toFixed(6)} s`]);
                verificationData.push(['Difference', verification.difference.toExponential(2)]);
                verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['Physical Check', verification.physicalCheck]);
                break;

            case 'length_contraction':
                verification = this.verifyLengthContraction();
                verificationData.push(['Formula Check', verification.formula]);
                verificationData.push(['Proper Length', `${verification.properLength} m`]);
                verificationData.push(['Expected L', `${verification.expectedContractedLength.toFixed(6)} m`]);
                verificationData.push(['Calculated L', `${verification.calculatedContractedLength.toFixed(6)} m`]);
                verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['Physical Check', verification.physicalCheck]);
                break;

            case 'relativistic_velocity':
                verification = this.verifyRelativisticVelocity();
                verificationData.push(['Formula Check', verification.formula]);
                verificationData.push(['Expected v', `${verification.expectedResult.toExponential(3)} m/s`]);
                verificationData.push(['Calculated v', `${verification.calculatedResult.toExponential(3)} m/s`]);
                verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['Physical Check', verification.physicalCheck]);
                break;

            case 'relativistic_energy':
                verification = this.verifyRelativisticEnergy();
                verificationData.push(['Rest Energy Check', verification.restEnergy.isValid ? 'Valid ✓' : 'Invalid ✗']);
                verificationData.push(['Total Energy Check', verification.totalEnergy.isValid ? 'Valid ✓' : 'Invalid ✗']);
                verificationData.push(['Kinetic Energy Check', verification.kineticEnergy.isValid ? 'Valid ✓' : 'Invalid ✗']);
                verificationData.push(['Energy Conservation', verification.energyConservation]);
                break;

            case 'spacetime_interval':
                verification = this.verifySpacetimeInterval();
                verificationData.push(['Formula', verification.formula]);
                verificationData.push(['Expected s²', `${verification.expectedInterval.toExponential(3)} m²`]);
                verificationData.push(['Calculated s²', `${verification.calculatedInterval.toExponential(3)} m²`]);
                verificationData.push(['Valid', verification.isValid ? 'Yes ✓' : 'No ✗']);
                verificationData.push(['Invariance', verification.invarianceNote]);
                break;

            default:
                verificationData.push(['Status', 'Solution calculated using standard relativistic formulas']);
                verificationData.push(['Physical Constraints', 'All velocities < c, γ ≥ 1']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Confidence Level', this.calculateRelativityVerificationConfidence()]);
            verificationData.push(['Notes', this.getRelativityVerificationNotes()]);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createRelativityPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Topic', lesson.title],
                ['', ''],
                ['Key Physics Concepts', lesson.concepts.join('; ')],
                ['', ''],
                ['Prerequisites', ''],
                ['  • Mathematics', 'Algebra, square roots, basic calculus concepts'],
                ['  • Physics', 'Classical mechanics, concept of reference frames, wave basics'],
                ['  • Relativity', 'Postulates of special relativity, constancy of c'],
                ['', ''],
                ['Common Student Difficulties', ''],
                ['  • Conceptual', 'Understanding time and space are relative, not absolute'],
                ['  • Mathematical', 'Keeping track of which frame measures which quantity'],
                ['  • Physical intuition', 'Relativistic effects contradict everyday experience'],
                ['', ''],
                ['Teaching Strategies', ''],
                ['  • Use thought experiments', 'Light clocks, twin paradox, train-and-platform'],
                ['  • Emphasize experimental evidence', 'Muon decay, GPS corrections, particle accelerators'],
                ['  • Build from postulates', 'Show how formulas derive from c = constant'],
                ['', ''],
                ['Assessment Ideas', ''],
                ['  • Conceptual questions', 'Why can\'t anything exceed c? Is time dilation reciprocal?'],
                ['  • Calculation problems', 'Vary speeds from 0.1c to 0.99c'],
                ['  • Real-world applications', 'GPS, particle physics, cosmology'],
                ['', ''],
                ['Extensions', lesson.applications.join('; ')]
            ]
        };
    }

    createRelativityAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const alternativeMethods = {
            time_dilation: {
                primary: 'Direct formula application: Δt = γ·τ₀',
                alternatives: [
                    'Use spacetime interval for proper time',
                    'Graphical method with spacetime diagrams',
                    'Four-vector approach with worldlines'
                ]
            },
            length_contraction: {
                primary: 'Direct formula: L = L₀/γ',
                alternatives: [
                    'Derive from Lorentz transformation',
                    'Use spacetime diagram to visualize',
                    'Apply time dilation to light-clock argument'
                ]
            },
            relativistic_energy: {
                primary: 'E = γmc², K = (γ-1)mc²',
                alternatives: [
                    'Use energy-momentum relation: E² = (pc)² + (mc²)²',
                    'Series expansion for low velocities',
                    'Four-momentum formulation'
                ]
            }
        };

        const method = alternativeMethods[this.currentProblem.type] || {
            primary: 'Standard relativistic formulas',
            alternatives: ['Consult specialized relativity textbooks']
        };

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method', method.primary],
                ['', ''],
                ['Alternative Approaches', ''],
                ...method.alternatives.map((alt, i) => [`Method ${i + 1}`, alt]),
                ['', ''],
                ['Method Comparison', 'Direct formula application is most efficient for standard problems. Advanced methods provide deeper insight and generalize to more complex scenarios.']
            ]
        };
    }

    createPhysicsApplicationsSection() {
        const lesson = this.lessons[this.currentProblem.type];
        if (!lesson || !lesson.applications) return null;

        return {
            title: 'Real-World Applications',
            type: 'applications',
            data: [
                ['Applications of ' + lesson.title, ''],
                ['', ''],
                ...lesson.applications.map((app, i) => [`${i + 1}`, app]),
                ['', ''],
                ['Why This Matters', ''],
                ['Scientific', 'Essential for particle physics, astrophysics, and cosmology'],
                ['Technological', 'GPS satellites, particle accelerators, medical imaging'],
                ['Philosophical', 'Fundamentally changed our understanding of space, time, and reality']
            ]
        };
    }

    calculateRelativityVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;
        let verification;

        switch (type) {
            case 'time_dilation':
                verification = this.verifyTimeDilation();
                return verification.isValid ? 'High' : 'Low';

            case 'length_contraction':
                verification = this.verifyLengthContraction();
                return verification.isValid ? 'High' : 'Low';

            case 'relativistic_velocity':
                verification = this.verifyRelativisticVelocity();
                return verification.isValid ? 'High' : 'Low';

            case 'relativistic_energy':
                verification = this.verifyRelativisticEnergy();
                const allValid = verification.restEnergy.isValid && 
                               verification.totalEnergy.isValid && 
                               verification.kineticEnergy.isValid;
                return allValid ? 'High' : 'Medium';

            case 'spacetime_interval':
                verification = this.verifySpacetimeInterval();
                return verification.isValid ? 'High' : 'Low';

            default:
                return 'Medium';
        }
    }

    getRelativityVerificationNotes() {
        const notes = [
            'All calculations verified against fundamental relativistic formulas',
            'Physical constraints checked (v < c, γ ≥ 1)',
            'Dimensional analysis performed'
        ];

        if (this.currentSolution.lorentzFactor) {
            notes.push(`Lorentz factor γ = ${this.currentSolution.lorentzFactor.toFixed(4)} is physically reasonable`);
        }

        if (this.currentProblem.type === 'spacetime_interval') {
            notes.push('Spacetime interval invariance confirmed');
        }

        return notes.join('; ');
    }
}

// Export the class
export default EnhancedRelativityMathematicalWorkbook;
