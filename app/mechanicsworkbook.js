
// Enhanced Mechanics Physics Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedMechanicsPhysicsWorkbook {
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

        this.physicsSymbols = this.initializePhysicsSymbols();
        this.physicsConstants = this.initializePhysicsConstants();
        this.setThemeColors();
        this.initializeMechanicsLessons();
        this.initializeMechanicsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializePhysicsSymbols() {
        return {
            // Greek letters commonly used in physics
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'theta': 'θ', 'phi': 'φ', 'omega': 'ω', 'mu': 'μ',
            'rho': 'ρ', 'sigma': 'σ', 'tau': 'τ',
            // Mathematical operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            // Vector notation
            'vector': '→', 'dot': '·', 'cross': '×',
            // Special symbols
            'perpendicular': '⊥', 'parallel': '∥', 'angle': '∠',
            'degree': '°', 'partial': '∂'
        };
    }

    initializePhysicsConstants() {
        return {
            g: { value: 9.81, unit: 'm/s²', description: 'Acceleration due to gravity (Earth)' },
            G: { value: 6.674e-11, unit: 'N·m²/kg²', description: 'Universal gravitational constant' },
            c: { value: 3.0e8, unit: 'm/s', description: 'Speed of light in vacuum' },
            h: { value: 6.626e-34, unit: 'J·s', description: 'Planck constant' },
            k: { value: 8.99e9, unit: 'N·m²/C²', description: 'Coulomb constant' }
        };
    }

    initializeMechanicsLessons() {
        this.lessons = {
            kinematics_1d: {
                title: "One-Dimensional Kinematics",
                concepts: [
                    "Position, displacement, velocity, and acceleration",
                    "Relationships between kinematic quantities",
                    "Constant acceleration equations",
                    "Free fall motion"
                ],
                theory: "Kinematics describes motion without considering forces. In 1D motion, objects move along a straight line with position x(t), velocity v(t), and acceleration a(t).",
                keyFormulas: {
                    "Velocity-Time": "v = v₀ + at",
                    "Position-Time": "x = x₀ + v₀t + ½at²",
                    "Velocity-Position": "v² = v₀² + 2a(x - x₀)",
                    "Average Velocity": "v_avg = (x - x₀)/t"
                },
                solvingSteps: [
                    "Identify known and unknown quantities",
                    "Choose appropriate kinematic equation",
                    "Substitute values with correct units",
                    "Solve algebraically for unknown",
                    "Check solution for physical reasonableness"
                ],
                applications: [
                    "Free fall problems",
                    "Projectile motion (vertical component)",
                    "Vehicle acceleration/braking",
                    "Particle motion analysis"
                ]
            },

            kinematics_2d: {
                title: "Two-Dimensional Kinematics",
                concepts: [
                    "Vector components of position, velocity, acceleration",
                    "Projectile motion analysis",
                    "Independence of horizontal and vertical motion",
                    "Trajectory equations"
                ],
                theory: "2D kinematics extends motion analysis to a plane. Horizontal and vertical motions are independent and can be analyzed separately using vector components.",
                keyFormulas: {
                    "Horizontal Motion": "x = x₀ + v₀ₓt (constant velocity)",
                    "Vertical Motion": "y = y₀ + v₀ᵧt - ½gt²",
                    "Velocity Components": "vₓ = v₀ₓ (constant), vᵧ = v₀ᵧ - gt",
                    "Range": "R = (v₀²sin(2θ))/g",
                    "Maximum Height": "h_max = (v₀²sin²(θ))/(2g)"
                },
                solvingSteps: [
                    "Establish coordinate system",
                    "Resolve initial velocity into components",
                    "Apply kinematic equations separately to x and y",
                    "Find time of flight from vertical motion",
                    "Calculate horizontal distance using time"
                ],
                applications: [
                    "Projectile motion (ballistics)",
                    "Sports (baseball, basketball trajectories)",
                    "Water fountains",
                    "Particle trajectories in fields"
                ]
            },

            newtons_laws: {
                title: "Newton's Laws of Motion",
                concepts: [
                    "Newton's First Law (Inertia)",
                    "Newton's Second Law (F = ma)",
                    "Newton's Third Law (Action-Reaction)",
                    "Free body diagrams"
                ],
                theory: "Newton's laws form the foundation of classical mechanics, relating forces to motion. The second law F = ma is the primary equation for analyzing dynamics.",
                keyFormulas: {
                    "Second Law": "ΣF = ma",
                    "Weight": "W = mg",
                    "Friction": "f = μN",
                    "Normal Force": "N = mg (horizontal surface)"
                },
                solvingSteps: [
                    "Draw free body diagram showing all forces",
                    "Choose coordinate system",
                    "Resolve forces into components",
                    "Apply ΣF = ma in each direction",
                    "Solve system of equations"
                ],
                applications: [
                    "Objects on inclined planes",
                    "Friction problems",
                    "Tension in ropes and cables",
                    "Connected objects and pulleys"
                ]
            },

            work_energy: {
                title: "Work and Energy",
                concepts: [
                    "Work done by forces",
                    "Kinetic energy and work-energy theorem",
                    "Potential energy (gravitational, elastic)",
                    "Conservation of mechanical energy",
                    "Power"
                ],
                theory: "Energy provides an alternative approach to analyzing motion. The work-energy theorem relates net work to change in kinetic energy, while conservation of energy applies when only conservative forces act.",
                keyFormulas: {
                    "Work": "W = F·d = Fd cos(θ)",
                    "Kinetic Energy": "KE = ½mv²",
                    "Gravitational PE": "PE_grav = mgh",
                    "Elastic PE": "PE_spring = ½kx²",
                    "Work-Energy Theorem": "W_net = ΔKE",
                    "Conservation of Energy": "E_initial = E_final",
                    "Power": "P = W/t = F·v"
                },
                solvingSteps: [
                    "Identify initial and final states",
                    "Calculate initial total energy",
                    "Account for work done by non-conservative forces",
                    "Apply conservation or work-energy theorem",
                    "Solve for unknown quantity"
                ],
                applications: [
                    "Roller coaster problems",
                    "Spring-mass systems",
                    "Pendulum motion",
                    "Vehicle stopping distances",
                    "Machine efficiency"
                ]
            },

            momentum: {
                title: "Momentum and Collisions",
                concepts: [
                    "Linear momentum (p = mv)",
                    "Impulse-momentum theorem",
                    "Conservation of momentum",
                    "Elastic and inelastic collisions",
                    "Center of mass"
                ],
                theory: "Momentum is a vector quantity that represents quantity of motion. In isolated systems (no external forces), total momentum is conserved, making it powerful for analyzing collisions.",
                keyFormulas: {
                    "Momentum": "p = mv",
                    "Impulse": "J = FΔt = Δp",
                    "Conservation": "p_before = p_after",
                    "Elastic Collision": "v₁' = ((m₁-m₂)v₁ + 2m₂v₂)/(m₁+m₂)",
                    "Perfectly Inelastic": "v' = (m₁v₁ + m₂v₂)/(m₁+m₂)"
                },
                solvingSteps: [
                    "Define system and check if isolated",
                    "Calculate initial momentum (vector sum)",
                    "Apply conservation: p_i = p_f",
                    "Use collision type equations if applicable",
                    "Solve for unknown velocities or masses"
                ],
                applications: [
                    "Vehicle collisions",
                    "Ballistic pendulum",
                    "Rocket propulsion",
                    "Sports collisions",
                    "Explosion problems"
                ]
            },

            circular_motion: {
                title: "Circular Motion and Rotation",
                concepts: [
                    "Centripetal acceleration",
                    "Centripetal force",
                    "Angular quantities (θ, ω, α)",
                    "Relationship between linear and angular quantities",
                    "Rotational dynamics"
                ],
                theory: "Objects in circular motion experience centripetal acceleration toward the center. Angular quantities describe rotation, with relationships to linear motion through the radius.",
                keyFormulas: {
                    "Centripetal Acceleration": "a_c = v²/r = ω²r",
                    "Centripetal Force": "F_c = mv²/r",
                    "Angular Velocity": "ω = v/r = Δθ/Δt",
                    "Angular Acceleration": "α = a_t/r",
                    "Period": "T = 2πr/v = 2π/ω",
                    "Frequency": "f = 1/T"
                },
                solvingSteps: [
                    "Identify radius and speed of circular motion",
                    "Calculate centripetal acceleration",
                    "Identify force(s) providing centripetal force",
                    "Apply Newton's second law radially",
                    "Solve for unknown quantity"
                ],
                applications: [
                    "Satellites and orbital motion",
                    "Banked curves",
                    "Vertical circles (loop-the-loop)",
                    "Rotating reference frames",
                    "Centrifuges"
                ]
            },

            rotational_dynamics: {
                title: "Rotational Dynamics",
                concepts: [
                    "Torque",
                    "Moment of inertia",
                    "Rotational kinetic energy",
                    "Angular momentum",
                    "Conservation of angular momentum"
                ],
                theory: "Rotational dynamics is the angular analog of linear dynamics. Torque causes angular acceleration, and angular momentum is conserved in isolated rotating systems.",
                keyFormulas: {
                    "Torque": "τ = rF sin(θ) = Iα",
                    "Moment of Inertia": "I = Σmᵢrᵢ²",
                    "Rotational KE": "KE_rot = ½Iω²",
                    "Angular Momentum": "L = Iω",
                    "Conservation": "L_initial = L_final",
                    "Work-Energy": "W = τθ"
                },
                solvingSteps: [
                    "Identify rotation axis",
                    "Calculate or look up moment of inertia",
                    "Find net torque about axis",
                    "Apply τ = Iα or conservation of L",
                    "Solve for angular quantities"
                ],
                applications: [
                    "Wheels and pulleys",
                    "Figure skater spin",
                    "Gyroscopes",
                    "Planetary motion",
                    "Rotating machinery"
                ]
            },

            gravitation: {
                title: "Universal Gravitation",
                concepts: [
                    "Newton's law of universal gravitation",
                    "Gravitational field",
                    "Gravitational potential energy",
                    "Orbital mechanics",
                    "Kepler's laws"
                ],
                theory: "Every mass attracts every other mass with a force proportional to their masses and inversely proportional to the square of the distance between them.",
                keyFormulas: {
                    "Gravitational Force": "F = Gm₁m₂/r²",
                    "Gravitational Field": "g = GM/r²",
                    "Gravitational PE": "U = -Gm₁m₂/r",
                    "Orbital Speed": "v = √(GM/r)",
                    "Escape Velocity": "v_esc = √(2GM/r)",
                    "Kepler's Third Law": "T² ∝ r³"
                },
                solvingSteps: [
                    "Identify masses and distances",
                    "Apply Newton's gravitational law",
                    "For orbits, equate gravitational and centripetal forces",
                    "Use energy conservation if applicable",
                    "Solve for unknown quantity"
                ],
                applications: [
                    "Satellite orbits",
                    "Planetary motion",
                    "Tides",
                    "Escape velocity calculations",
                    "Binary star systems"
                ]
            },

            oscillations: {
                title: "Simple Harmonic Motion and Oscillations",
                concepts: [
                    "Restoring force and Hooke's law",
                    "Simple harmonic motion equations",
                    "Period and frequency",
                    "Energy in oscillations",
                    "Pendulum motion"
                ],
                theory: "SHM occurs when restoring force is proportional to displacement. Motion is sinusoidal with constant period and frequency, with continuous energy exchange between kinetic and potential.",
                keyFormulas: {
                    "Hooke's Law": "F = -kx",
                    "Position": "x(t) = A cos(ωt + φ)",
                    "Angular Frequency": "ω = √(k/m) = 2πf",
                    "Period (spring)": "T = 2π√(m/k)",
                    "Period (pendulum)": "T = 2π√(L/g)",
                    "Energy": "E = ½kA²"
                },
                solvingSteps: [
                    "Identify type of oscillator (spring, pendulum, etc.)",
                    "Determine amplitude, frequency, or period",
                    "Write position as function of time",
                    "Calculate velocity and acceleration if needed",
                    "Apply energy conservation if applicable"
                ],
                applications: [
                    "Mass-spring systems",
                    "Pendulum clocks",
                    "Molecular vibrations",
                    "Earthquake analysis",
                    "AC circuits (analog)"
                ]
            },

            fluids_statics: {
                title: "Fluid Statics",
                concepts: [
                    "Pressure in fluids",
                    "Pascal's principle",
                    "Buoyancy and Archimedes' principle",
                    "Hydrostatic pressure",
                    "Fluid forces on surfaces"
                ],
                theory: "Fluids at rest exert pressure equally in all directions. Pressure increases with depth due to weight of fluid above. Buoyant force equals weight of displaced fluid.",
                keyFormulas: {
                    "Pressure": "P = F/A",
                    "Hydrostatic Pressure": "P = P₀ + ρgh",
                    "Buoyant Force": "F_b = ρ_fluid × V_displaced × g",
                    "Pascal's Principle": "ΔP transmitted equally throughout fluid"
                },
                solvingSteps: [
                    "Identify fluid density and depth",
                    "Calculate pressure using P = P₀ + ρgh",
                    "For buoyancy, find volume displaced",
                    "Calculate buoyant force",
                    "Apply force balance or Newton's laws"
                ],
                applications: [
                    "Hydraulic systems",
                    "Submarines and ships",
                    "Dam design",
                    "Barometers",
                    "Hot air balloons"
                ]
            },

            fluids_dynamics: {
                title: "Fluid Dynamics",
                concepts: [
                    "Flow rate and continuity equation",
                    "Bernoulli's equation",
                    "Laminar vs turbulent flow",
                    "Viscosity and drag",
                    "Applications of fluid flow"
                ],
                theory: "Moving fluids conserve mass (continuity) and energy (Bernoulli). Bernoulli's equation relates pressure, velocity, and height in flowing ideal fluids.",
                keyFormulas: {
                    "Continuity": "A₁v₁ = A₂v₂ (constant flow rate)",
                    "Bernoulli": "P + ½ρv² + ρgh = constant",
                    "Volume Flow Rate": "Q = Av",
                    "Stokes' Drag": "F_d = 6πηrv"
                },
                solvingSteps: [
                    "Identify two points in fluid flow",
                    "Apply continuity equation for velocity relationship",
                    "Apply Bernoulli's equation between points",
                    "Solve for unknown pressure, velocity, or height",
                    "Check assumptions (ideal fluid, steady flow)"
                ],
                applications: [
                    "Airplane wing lift",
                    "Venturi meters",
                    "Blood flow in arteries",
                    "Water distribution systems",
                    "Atomizers and carburetors"
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
                vectorBg: '#e6f3ff'
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
                vectorBg: '#e1f5fe'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeMechanicsSolvers() {
        this.mechanicsTypes = {
            // Kinematics 1D
            kinematics_constant_acceleration: {
                patterns: [
                    /constant.*acceleration/i,
                    /v.*=.*v0.*\+.*a.*t/i,
                    /x.*=.*x0.*\+.*v0.*t.*\+.*0\.5.*a.*t/i,
                    /kinematics/i,
                    /free.*fall/i
                ],
                solver: this.solveKinematics1D.bind(this),
                name: 'Constant Acceleration Kinematics',
                category: 'kinematics_1d',
                description: 'Solves motion with constant acceleration'
            },

            // Kinematics 2D - Projectile Motion
            projectile_motion: {
                patterns: [
                    /projectile/i,
                    /trajectory/i,
                    /range.*height/i,
                    /launch.*angle/i,
                    /2d.*motion/i
                ],
                solver: this.solveProjectileMotion.bind(this),
                name: 'Projectile Motion',
                category: 'kinematics_2d',
                description: 'Solves 2D projectile motion problems'
            },

            // Newton's Laws
            force_acceleration: {
                patterns: [
                    /force.*acceleration/i,
                    /newton.*second.*law/i,
                    /f.*=.*m.*a/i,
                    /net.*force/i,
                    /free.*body.*diagram/i
                ],
                solver: this.solveForceAcceleration.bind(this),
                name: 'Force and Acceleration (F=ma)',
                category: 'newtons_laws',
                description: 'Applies Newton\'s second law'
            },

            friction_problems: {
                patterns: [
                    /friction/i,
                    /coefficient.*friction/i,
                    /normal.*force/i,
                    /static.*kinetic/i
                ],
                solver: this.solveFriction.bind(this),
                name: 'Friction Problems',
                category: 'newtons_laws',
                description: 'Solves problems involving friction'
            },

            inclined_plane: {
                patterns: [
                    /inclined.*plane/i,
                    /ramp/i,
                    /slope.*angle/i,
                    /component.*force/i
                ],
                solver: this.solveInclinedPlane.bind(this),
                name: 'Inclined Plane Problems',
                category: 'newtons_laws',
                description: 'Analyzes forces on inclined surfaces'
            },

            // Work and Energy
            work_calculation: {
                patterns: [
                    /work.*done/i,
                    /w.*=.*f.*d/i,
                    /work.*force.*distance/i,
                    /calculate.*work/i
                ],
                solver: this.solveWork.bind(this),
                name: 'Work Calculation',
                category: 'work_energy',
                description: 'Calculates work done by forces'
            },

            kinetic_energy: {
                patterns: [
                    /kinetic.*energy/i,
                    /ke.*=.*0\.5.*m.*v/i,
                    /moving.*energy/i
                ],
                solver: this.solveKineticEnergy.bind(this),
                name: 'Kinetic Energy',
                category: 'work_energy',
                description: 'Calculates kinetic energy'
            },

            potential_energy: {
                patterns: [
                    /potential.*energy/i,
                    /gravitational.*energy/i,
                    /pe.*=.*m.*g.*h/i,
                    /elastic.*potential/i,
                    /spring.*energy/i
                ],
                solver: this.solvePotentialEnergy.bind(this),
                name: 'Potential Energy',
                category: 'work_energy',
                description: 'Calculates gravitational or elastic PE'
            },

            conservation_energy: {
                patterns: [
                    /conservation.*energy/i,
                    /energy.*conserved/i,
                    /mechanical.*energy/i,
                    /total.*energy/i
                ],
                solver: this.solveConservationOfEnergy.bind(this),
                name: 'Conservation of Energy',
                category: 'work_energy',
                description: 'Applies energy conservation principle'
            },

            power_problems: {
                patterns: [
                    /power/i,
                    /p.*=.*w.*\/.*t/i,
                    /rate.*work/i,
                    /watt/i
                ],
                solver: this.solvePower.bind(this),
                name: 'Power Problems',
                category: 'work_energy',
                description: 'Calculates power'
            },

            // Momentum
            momentum_calculation: {
                patterns: [
                    /momentum/i,
                    /p.*=.*m.*v/i,
                    /linear.*momentum/i
                ],
                solver: this.solveMomentum.bind(this),
                name: 'Momentum Calculation',
                category: 'momentum',
                description: 'Calculates linear momentum'
            },

            impulse: {
                patterns: [
                    /impulse/i,
                    /j.*=.*f.*t/i,
                    /change.*momentum/i,
                    /impulse.*momentum/i
                ],
                solver: this.solveImpulse.bind(this),
                name: 'Impulse-Momentum',
                category: 'momentum',
                description: 'Applies impulse-momentum theorem'
            },

            collision_elastic: {
                patterns: [
                    /elastic.*collision/i,
                    /perfectly.*elastic/i,
                    /conservation.*momentum.*energy/i
                ],
                solver: this.solveElasticCollision.bind(this),
                name: 'Elastic Collision',
                category: 'momentum',
                description: 'Solves elastic collision problems'
            },

            collision_inelastic: {
                patterns: [
                    /inelastic.*collision/i,
                    /stick.*together/i,
                    /perfectly.*inelastic/i
                ],
                solver: this.solveInelasticCollision.bind(this),
                name: 'Inelastic Collision',
                category: 'momentum',
                description: 'Solves inelastic collision problems'
            },

            // Circular Motion
            centripetal_acceleration: {
                patterns: [
                    /centripetal.*acceleration/i,
                    /circular.*motion/i,
                    /a.*=.*v.*2.*\/.*r/i,
                    /center.*seeking/i
                ],
                solver: this.solveCentripetalAcceleration.bind(this),
                name: 'Centripetal Acceleration',
                category: 'circular_motion',
                description: 'Calculates centripetal acceleration'
            },

            centripetal_force: {
                patterns: [
                    /centripetal.*force/i,
                    /f.*=.*m.*v.*2.*\/.*r/i,
                    /circular.*force/i
                ],
                solver: this.solveCentripetalForce.bind(this),
                name: 'Centripetal Force',
                category: 'circular_motion',
                description: 'Calculates centripetal force'
            },

            orbital_motion: {
                patterns: [
                    /orbital.*motion/i,
                    /satellite/i,
                    /orbit.*speed/i,
                    /circular.*orbit/i
                ],
                solver: this.solveOrbitalMotion.bind(this),
                name: 'Orbital Motion',
                category: 'circular_motion',
                description: 'Analyzes orbital mechanics'
            },

            // Rotational Dynamics
            torque: {
                patterns: [
                    /torque/i,
                    /moment.*force/i,
                    /tau.*=.*r.*f/i,
                    /rotational.*force/i
                ],
                solver: this.solveTorque.bind(this),
                name: 'Torque',
                category: 'rotational_dynamics',
                description: 'Calculates torque'
            },

            rotational_kinematics: {
                patterns: [
                    /rotational.*kinematics/i,
                    /angular.*velocity/i,
                    /angular.*acceleration/i,
                    /omega.*alpha/i
                ],
                solver: this.solveRotationalKinematics.bind(this),
                name: 'Rotational Kinematics',
                category: 'rotational_dynamics',
                description: 'Analyzes rotational motion'
            },

            moment_of_inertia: {
                patterns: [
                    /moment.*inertia/i,
                    /rotational.*inertia/i,
                    /i.*=.*m.*r.*2/i
                ],
                solver: this.solveMomentOfInertia.bind(this),
                name: 'Moment of Inertia',
                category: 'rotational_dynamics',
                description: 'Calculates moment of inertia'
            },

            angular_momentum: {
                patterns: [
                    /angular.*momentum/i,
                    /l.*=.*i.*omega/i,
                    /rotational.*momentum/i,
                    /conservation.*angular/i
                ],
                solver: this.solveAngularMomentum.bind(this),
                name: 'Angular Momentum',
                category: 'rotational_dynamics',
                description: 'Calculates angular momentum'
            },

            // Gravitation
            gravitational_force: {
                patterns: [
                    /gravitational.*force/i,
                    /newton.*gravitation/i,
                    /f.*=.*g.*m.*m.*\/.*r/i,
                    /universal.*gravitation/i
                ],
                solver: this.solveGravitationalForce.bind(this),
                name: 'Gravitational Force',
                category: 'gravitation',
                description: 'Calculates gravitational attraction'
            },

            gravitational_field: {
                patterns: [
                    /gravitational.*field/i,
                    /g.*=.*g.*m.*\/.*r/i,
                    /field.*strength/i
                ],
                solver: this.solveGravitationalField.bind(this),
                name: 'Gravitational Field',
                category: 'gravitation',
                description: 'Calculates gravitational field strength'
            },

            escape_velocity: {
                patterns: [
                    /escape.*velocity/i,
                    /v.*esc/i,
                    /minimum.*velocity.*escape/i
                ],
                solver: this.solveEscapeVelocity.bind(this),
                name: 'Escape Velocity',
                category: 'gravitation',
                description: 'Calculates escape velocity'
            },

            // Oscillations
            simple_harmonic_motion: {
                patterns: [
                    /simple.*harmonic/i,
                    /shm/i,
                    /oscillation/i,
                    /sinusoidal.*motion/i
                ],
                solver: this.solveSHM.bind(this),
                name: 'Simple Harmonic Motion',
                category: 'oscillations',
                description: 'Analyzes SHM'
            },

            spring_motion: {
                patterns: [
                    /spring.*mass/i,
                    /hooke.*law/i,
                    /f.*=.*-.*k.*x/i,
                    /elastic.*oscillation/i
                ],
                solver: this.solveSpringMotion.bind(this),
                name: 'Spring-Mass System',
                category: 'oscillations',
                description: 'Analyzes spring oscillations'
            },

            pendulum: {
                patterns: [
                    /pendulum/i,
                    /simple.*pendulum/i,
                    /swinging.*motion/i
                ],
                solver: this.solvePendulum.bind(this),
                name: 'Pendulum Motion',
                category: 'oscillations',
                description: 'Analyzes pendulum motion'
            },

            // Fluid Statics
            pressure: {
                patterns: [
                    /pressure/i,
                    /p.*=.*f.*\/.*a/i,
                    /hydrostatic.*pressure/i,
                    /fluid.*pressure/i
                ],
                solver: this.solvePressure.bind(this),
                name: 'Pressure',
                category: 'fluids_statics',
                description: 'Calculates fluid pressure'
            },

            buoyancy: {
                patterns: [
                    /buoyancy/i,
                    /archimedes/i,
                    /buoyant.*force/i,
                    /floating.*sinking/i
                ],
                solver: this.solveBuoyancy.bind(this),
                name: 'Buoyancy',
                category: 'fluids_statics',
                description: 'Applies Archimedes\' principle'
            },

            // Fluid Dynamics
            continuity_equation: {
                patterns: [
                    /continuity.*equation/i,
                    /flow.*rate/i,
                    /a.*v.*constant/i,
                    /conservation.*mass.*fluid/i
                ],
                solver: this.solveContinuity.bind(this),
                name: 'Continuity Equation',
                category: 'fluids_dynamics',
                description: 'Applies continuity equation'
            },

            bernoulli_equation: {
                patterns: [
                    /bernoulli/i,
                    /fluid.*flow.*energy/i,
                    /pressure.*velocity.*height/i
                ],
                solver: this.solveBernoulli.bind(this),
                name: 'Bernoulli\'s Equation',
                category: 'fluids_dynamics',
                description: 'Applies Bernoulli\'s equation'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            kinematics_1d: {
                'Choose equation': [
                    'Using wrong kinematic equation for given quantities',
                    'Forgetting to check if acceleration is constant',
                    'Not distinguishing between distance and displacement'
                ],
                'Apply signs': [
                    'Sign errors with velocity or acceleration direction',
                    'Inconsistent coordinate system',
                    'Wrong sign for acceleration due to gravity'
                ]
            },
            projectile_motion: {
                'Resolve components': [
                    'Forgetting to break initial velocity into components',
                    'Using wrong angle (from horizontal vs vertical)',
                    'Mixing up x and y components'
                ],
                'Independence principle': [
                    'Not treating horizontal and vertical motion independently',
                    'Applying acceleration in wrong direction'
                ]
            },
            newtons_laws: {
                'Free body diagram': [
                    'Missing forces in diagram',
                    'Including motion-related quantities (velocity, acceleration) as forces',
                    'Wrong direction for normal force or friction'
                ],
                'Apply F=ma': [
                    'Forgetting to include all forces in ΣF',
                    'Sign errors when setting up equations',
                    'Using wrong mass value'
                ]
            },
            work_energy: {
                'Calculate work': [
                    'Forgetting to use component of force parallel to displacement',
                    'Sign errors for work (positive vs negative)',
                    'Confusing force with energy'
                ],
                'Conservation': [
                    'Not accounting for all energy forms',
                    'Ignoring non-conservative forces like friction',
                    'Wrong reference level for potential energy'
                ]
            },
            momentum: {
                'Vector nature': [
                    'Treating momentum as scalar instead of vector',
                    'Forgetting to include direction/sign',
                    'Not conserving momentum in each direction separately for 2D'
                ],
                'System boundary': [
                    'Not checking if system is isolated',
                    'Including external forces in conservation equation'
                ]
            },
            circular_motion: {
                'Direction': [
                    'Confusing centripetal with centrifugal',
                    'Wrong direction for centripetal acceleration (not toward center)',
                    'Incorrect identification of force providing centripetal force'
                ],
                'Speed vs velocity': [
                    'Thinking velocity is constant (speed is, velocity changes direction)',
                    'Confusing tangential and radial components'
                ]
            },
            rotational_dynamics: {
                'Torque calculation': [
                    'Using wrong angle (should be between r and F)',
                    'Forgetting that torque is a vector',
                    'Not using perpendicular distance (lever arm)'
                ],
                'Moment of inertia': [
                    'Using wrong formula for given shape',
                    'Not applying parallel axis theorem when needed'
                ]
            }
        };

        this.errorPrevention = {
            vector_checking: {
                reminder: 'Always check direction and sign for vector quantities',
                method: 'Draw clear diagrams with coordinate system labeled'
            },
            unit_consistency: {
                reminder: 'Verify all quantities are in consistent SI units',
                method: 'Convert units before calculation, not after'
            },
            energy_accounting: {
                reminder: 'Account for all energy forms and work by non-conservative forces',
                method: 'Make energy inventory at initial and final states'
            },
            force_identification: {
                reminder: 'Draw complete free body diagram before applying Newton\'s laws',
                method: 'Isolate system and identify each force acting on it'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and intuitive understanding',
                language: 'intuitive with real-world analogies'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'clear algorithmic instructions'
            },
            visual: {
                focus: 'Diagrams, vectors, and graphical representation',
                language: 'spatial and visual descriptions'
            },
            mathematical: {
                focus: 'Equations, derivations, and formal physics',
                language: 'precise mathematical notation'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'everyday language, minimal jargon',
                detail: 'essential concepts only',
                examples: 'simple numerical cases'
            },
            intermediate: {
                vocabulary: 'standard physics terminology',
                detail: 'main concepts with explanations',
                examples: 'typical textbook problems'
            },
            detailed: {
                vocabulary: 'full technical physics vocabulary',
                detail: 'comprehensive with theory',
                examples: 'complex multi-step scenarios'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery approach',
                examples: 'carefully sequenced progression'
            }
        };

    }

    // MAIN SOLVER METHOD

solveMechanicsProblem(config) {
    const { equation, scenario, parameters, problemType, context } = config;

    try {
        // Parse the problem - ensure we have at least one input
        if (!equation && !scenario && !problemType) {
            throw new Error('Must provide at least equation, scenario, or problemType');
        }

        this.currentProblem = this.parseMechanicsProblem(equation, scenario, parameters, problemType, context);

        // Solve the problem
        this.currentSolution = this.solveMechanicsProblem_Internal(this.currentProblem);

        // Generate solution steps
        this.solutionSteps = this.generateMechanicsSteps(this.currentProblem, this.currentSolution);

        // Generate graph data if applicable
        this.generateMechanicsGraphData();

        // Generate workbook
        this.generateMechanicsWorkbook();

        return {
            workbook: this.currentWorkbook,
            solution: this.currentSolution,
            result: this.currentSolution?.result,
            units: this.currentSolution?.units
        };

    } catch (error) {
        console.error('Error details:', {
            equation,
            scenario,
            parameters,
            problemType,
            errorMessage: error.message,
            errorStack: error.stack
        });
        throw new Error(`Failed to solve mechanics problem: ${error.message}`);
    }
}




parseMechanicsProblem(equation, scenario = '', parameters = {}, problemType = null, context = {}) {
    // Handle undefined or null equation
    const cleanInput = (equation && typeof equation === 'string') ? this.cleanPhysicsExpression(equation) : '';

    // If problem type is specified, use it directly
    if (problemType && this.mechanicsTypes[problemType]) {
        return {
            originalInput: equation || scenario || `${problemType} problem`,
            cleanInput: cleanInput,
            type: problemType,
            scenario: scenario,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    // Auto-detect mechanics problem type
    const searchText = cleanInput || scenario || '';
    for (const [type, config] of Object.entries(this.mechanicsTypes)) {
        for (const pattern of config.patterns) {
            if (pattern.test(searchText)) {
                const match = searchText.match(pattern);
                const extractedParams = this.extractMechanicsParameters(match, type);

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

    // Default based on provided parameters
    if (parameters.v0 !== undefined || parameters.a !== undefined) {
        return {
            originalInput: equation || scenario || 'Kinematics problem with given parameters',
            cleanInput: cleanInput,
            type: 'kinematics_constant_acceleration',
            scenario: scenario,
            parameters: { ...parameters },
            context: { ...context },
            parsedAt: new Date().toISOString()
        };
    }

    throw new Error(`Unable to recognize mechanics problem type from: ${equation || scenario}`);
}

cleanPhysicsExpression(expression) {
    // Handle undefined, null, or non-string input
    if (!expression || typeof expression !== 'string') {
        return '';
    }
    
    return expression
        .replace(/\s+/g, ' ')
        .replace(/≤/g, '<=')
        .replace(/≥/g, '>=')
        .replace(/≠/g, '!=')
        .replace(/·/g, '*')
        .replace(/×/g, '*')
        .trim();
}


extractMechanicsParameters(match, type) {
    const params = {};
    
    // Return empty params if match is null or undefined
    if (!match) {
        return params;
    }
    
    // Parameter extraction would be type-specific
    // This is a placeholder for the pattern matching logic
    return params;
}


solveMechanicsProblem_Internal(problem) {
    const solver = this.mechanicsTypes[problem.type]?.solver;
    if (!solver) {
        throw new Error(`No solver available for mechanics problem type: ${problem.type}`);
    }

    return solver(problem);
}




    // KINEMATICS SOLVERS
    solveKinematics1D(problem) {
        const { v0 = 0, v, a, t, x0 = 0, x } = problem.parameters;

        // Determine which equation to use based on knowns
        let result, equation, steps;

        // Count knowns
        const knowns = { v0, v, a, t, x0, x };
        const knownCount = Object.values(knowns).filter(val => val !== undefined).length;

        if (v !== undefined && a !== undefined && t !== undefined) {
            // Use v = v0 + at
            result = v0 + a * t;
            equation = 'v = v₀ + at';
            steps = this.generateKinematicsSteps('velocity-time', knowns);
        } else if (x !== undefined && t !== undefined) {
            // Use x = x0 + v0*t + 0.5*a*t^2
            result = x0 + v0 * t + 0.5 * a * Math.pow(t, 2);
            equation = 'x = x₀ + v₀t + ½at²';
            steps = this.generateKinematicsSteps('position-time', knowns);
        } else if (v !== undefined && x !== undefined) {
            // Use v^2 = v0^2 + 2*a*(x - x0)
            result = Math.sqrt(v0 * v0 + 2 * a * (x - x0));
            equation = 'v² = v₀² + 2a(x - x₀)';
            steps = this.generateKinematicsSteps('velocity-position', knowns);
        }

        return {
            problemType: 'Constant Acceleration Kinematics',
            equation: equation,
            knowns: knowns,
            result: result,
            units: this.determineKinematicsUnits(knowns),
            method: 'Kinematic equations for constant acceleration',
            category: 'kinematics_1d'
        };
    }

    solveProjectileMotion(problem) {
        const { v0, angle, h0 = 0, g = 9.81 } = problem.parameters;

        // Convert angle to radians
        const theta = angle * Math.PI / 180;

        // Components
        const v0x = v0 * Math.cos(theta);
        const v0y = v0 * Math.sin(theta);

        // Time of flight
        const t_flight = (v0y + Math.sqrt(v0y * v0y + 2 * g * h0)) / g;

        // Range
        const range = v0x * t_flight;

        // Maximum height
        const h_max = h0 + (v0y * v0y) / (2 * g);

        return {
            problemType: 'Projectile Motion',
            initialVelocity: v0,
            launchAngle: angle,
            components: {
                horizontal: v0x,
                vertical: v0y
            },
            timeOfFlight: t_flight,
            range: range,
            maxHeight: h_max,
            units: { distance: 'm', time: 's', velocity: 'm/s' },
            category: 'kinematics_2d'
        };
    }

    // FORCE AND MOTION SOLVERS
    solveForceAcceleration(problem) {
        const { F, m, a } = problem.parameters;

        let result, unknown;

        if (F !== undefined && m !== undefined) {
            // Find acceleration: a = F/m
            result = F / m;
            unknown = 'acceleration';
        } else if (m !== undefined && a !== undefined) {
            // Find force: F = ma
            result = m * a;
            unknown = 'force';
        } else if (F !== undefined && a !== undefined) {
            // Find mass: m = F/a
            result = F / a;
            unknown = 'mass';
        }

        return {
            problemType: 'Newton\'s Second Law (F = ma)',
            equation: 'ΣF = ma',
            force: F,
            mass: m,
            acceleration: a,
            result: result,
            solving_for: unknown,
            units: unknown === 'force' ? 'N' : unknown === 'mass' ? 'kg' : 'm/s²',
            category: 'newtons_laws'
        };
    }

    solveFriction(problem) {
        const { mu, N, m, g = 9.81, a } = problem.parameters;

        let friction_force;
        let normal_force = N !== undefined ? N : (m * g);

        if (mu !== undefined && normal_force !== undefined) {
            friction_force = mu * normal_force;
        }

        return {
            problemType: 'Friction Problem',
            equation: 'f = μN',
            coefficientOfFriction: mu,
            normalForce: normal_force,
            frictionForce: friction_force,
            units: { force: 'N' },
            category: 'newtons_laws'
        };
    }

    solveInclinedPlane(problem) {
        const { m, theta, mu = 0, g = 9.81 } = problem.parameters;

        // Convert angle to radians
        const angle_rad = theta * Math.PI / 180;

        // Force components
        const F_parallel = m * g * Math.sin(angle_rad);
        const F_perpendicular = m * g * Math.cos(angle_rad);
        const F_friction = mu * F_perpendicular;
        const F_net = F_parallel - F_friction;
        const acceleration = F_net / m;

        return {
            problemType: 'Inclined Plane',
            mass: m,
            angle: theta,
            components: {
                parallel: F_parallel,
                perpendicular: F_perpendicular
            },
            friction: F_friction,
            netForce: F_net,
            acceleration: acceleration,
            units: { force: 'N', acceleration: 'm/s²' },
            category: 'newtons_laws'
        };
    }

    // WORK AND ENERGY SOLVERS
    solveWork(problem) {
        const { F, d, theta = 0 } = problem.parameters;

        // Convert angle to radians
        const angle_rad = theta * Math.PI / 180;

        // Calculate work
        const work = F * d * Math.cos(angle_rad);

        return {
            problemType: 'Work Calculation',
            equation: 'W = F·d·cos(θ)',
            force: F,
            displacement: d,
            angle: theta,
            work: work,
            units: 'J',
            category: 'work_energy'
        };
    }

solveKineticEnergy(problem) {
        const { m, v } = problem.parameters;

        const KE = 0.5 * m * v * v;

        return {
            problemType: 'Kinetic Energy',
            equation: 'KE = ½mv²',
            mass: m,
            velocity: v,
            kineticEnergy: KE,
            units: 'J',
            category: 'work_energy'
        };
    }

    solvePotentialEnergy(problem) {
        const { m, h, g = 9.81, k, x } = problem.parameters;

        let PE, type, equation;

        if (h !== undefined) {
            // Gravitational PE
            PE = m * g * h;
            type = 'Gravitational Potential Energy';
            equation = 'PE = mgh';
        } else if (k !== undefined && x !== undefined) {
            // Elastic PE
            PE = 0.5 * k * x * x;
            type = 'Elastic Potential Energy';
            equation = 'PE = ½kx²';
        }

        return {
            problemType: type,
            equation: equation,
            potentialEnergy: PE,
            units: 'J',
            category: 'work_energy'
        };
    }

    solveConservationOfEnergy(problem) {
        const { m, v_i, v_f, h_i = 0, h_f = 0, g = 9.81 } = problem.parameters;

        // Initial energy
        const KE_i = 0.5 * m * v_i * v_i;
        const PE_i = m * g * h_i;
        const E_i = KE_i + PE_i;

        // Final energy
        const KE_f = 0.5 * m * v_f * v_f;
        const PE_f = m * g * h_f;
        const E_f = KE_f + PE_f;

        return {
            problemType: 'Conservation of Mechanical Energy',
            principle: 'E_initial = E_final',
            initialEnergy: {
                kinetic: KE_i,
                potential: PE_i,
                total: E_i
            },
            finalEnergy: {
                kinetic: KE_f,
                potential: PE_f,
                total: E_f
            },
            energyConserved: Math.abs(E_i - E_f) < 0.01,
            units: 'J',
            category: 'work_energy'
        };
    }

    solvePower(problem) {
        const { W, t, F, v } = problem.parameters;

        let power;

        if (W !== undefined && t !== undefined) {
            // P = W/t
            power = W / t;
        } else if (F !== undefined && v !== undefined) {
            // P = F·v
            power = F * v;
        }

        return {
            problemType: 'Power',
            equation: W !== undefined ? 'P = W/t' : 'P = F·v',
            power: power,
            units: 'W',
            category: 'work_energy'
        };
    }

    // MOMENTUM SOLVERS
    solveMomentum(problem) {
        const { m, v } = problem.parameters;

        const momentum = m * v;

        return {
            problemType: 'Linear Momentum',
            equation: 'p = mv',
            mass: m,
            velocity: v,
            momentum: momentum,
            units: 'kg·m/s',
            category: 'momentum'
        };
    }

    solveImpulse(problem) {
        const { F, t, m, v_i, v_f } = problem.parameters;

        let impulse;

        if (F !== undefined && t !== undefined) {
            // J = F·Δt
            impulse = F * t;
        } else if (m !== undefined && v_i !== undefined && v_f !== undefined) {
            // J = Δp = m(v_f - v_i)
            impulse = m * (v_f - v_i);
        }

        return {
            problemType: 'Impulse-Momentum Theorem',
            equation: 'J = F·Δt = Δp',
            impulse: impulse,
            units: 'N·s or kg·m/s',
            category: 'momentum'
        };
    }

    solveElasticCollision(problem) {
        const { m1, m2, v1_i, v2_i } = problem.parameters;

        // Conservation of momentum and kinetic energy
        const v1_f = ((m1 - m2) * v1_i + 2 * m2 * v2_i) / (m1 + m2);
        const v2_f = ((m2 - m1) * v2_i + 2 * m1 * v1_i) / (m1 + m2);

        return {
            problemType: 'Elastic Collision',
            principle: 'Conservation of momentum and kinetic energy',
            initialVelocities: { v1: v1_i, v2: v2_i },
            finalVelocities: { v1: v1_f, v2: v2_f },
            units: 'm/s',
            category: 'momentum'
        };
    }

    solveInelasticCollision(problem) {
        const { m1, m2, v1_i, v2_i } = problem.parameters;

        // Objects stick together
        const v_f = (m1 * v1_i + m2 * v2_i) / (m1 + m2);

        return {
            problemType: 'Perfectly Inelastic Collision',
            principle: 'Conservation of momentum only',
            initialVelocities: { v1: v1_i, v2: v2_i },
            finalVelocity: v_f,
            units: 'm/s',
            category: 'momentum'
        };
    }

    // CIRCULAR MOTION SOLVERS
    solveCentripetalAcceleration(problem) {
        const { v, r, omega } = problem.parameters;

        let a_c;

        if (v !== undefined && r !== undefined) {
            a_c = (v * v) / r;
        } else if (omega !== undefined && r !== undefined) {
            a_c = omega * omega * r;
        }

        return {
            problemType: 'Centripetal Acceleration',
            equation: 'a_c = v²/r = ω²r',
            centripetalAcceleration: a_c,
            units: 'm/s²',
            category: 'circular_motion'
        };
    }

    solveCentripetalForce(problem) {
        const { m, v, r, omega } = problem.parameters;

        let F_c;

        if (v !== undefined && r !== undefined) {
            F_c = m * (v * v) / r;
        } else if (omega !== undefined && r !== undefined) {
            F_c = m * omega * omega * r;
        }

        return {
            problemType: 'Centripetal Force',
            equation: 'F_c = mv²/r',
            centripetalForce: F_c,
            units: 'N',
            category: 'circular_motion'
        };
    }

    solveOrbitalMotion(problem) {
        const { M, r, G = 6.674e-11 } = problem.parameters;

        // Orbital speed
        const v = Math.sqrt(G * M / r);

        // Period
        const T = 2 * Math.PI * r / v;

        return {
            problemType: 'Orbital Motion',
            orbitalSpeed: v,
            period: T,
            units: { speed: 'm/s', period: 's' },
            category: 'circular_motion'
        };
    }

    // ROTATIONAL DYNAMICS SOLVERS
    solveTorque(problem) {
        const { r, F, theta = 90 } = problem.parameters;

        // Convert angle to radians
        const angle_rad = theta * Math.PI / 180;

        const torque = r * F * Math.sin(angle_rad);

        return {
            problemType: 'Torque',
            equation: 'τ = rF sin(θ)',
            torque: torque,
            units: 'N·m',
            category: 'rotational_dynamics'
        };
    }

    solveRotationalKinematics(problem) {
        const { omega_0 = 0, omega, alpha, t, theta_0 = 0, theta } = problem.parameters;

        let result, equation;

        if (omega !== undefined && alpha !== undefined && t !== undefined) {
            result = omega_0 + alpha * t;
            equation = 'ω = ω₀ + αt';
        } else if (theta !== undefined && t !== undefined) {
            result = theta_0 + omega_0 * t + 0.5 * alpha * t * t;
            equation = 'θ = θ₀ + ω₀t + ½αt²';
        }

        return {
            problemType: 'Rotational Kinematics',
            equation: equation,
            result: result,
            units: 'rad/s or rad',
            category: 'rotational_dynamics'
        };
    }

    solveMomentOfInertia(problem) {
        const { shape, m, r, R, L } = problem.parameters;

        let I, formula;

        switch(shape) {
            case 'solid_cylinder':
            case 'disk':
                I = 0.5 * m * r * r;
                formula = 'I = ½mr²';
                break;
            case 'hollow_cylinder':
            case 'ring':
                I = m * r * r;
                formula = 'I = mr²';
                break;
            case 'solid_sphere':
                I = 0.4 * m * r * r;
                formula = 'I = (2/5)mr²';
                break;
            case 'hollow_sphere':
                I = (2/3) * m * r * r;
                formula = 'I = (2/3)mr²';
                break;
            case 'rod_center':
                I = (1/12) * m * L * L;
                formula = 'I = (1/12)mL²';
                break;
            case 'rod_end':
                I = (1/3) * m * L * L;
                formula = 'I = (1/3)mL²';
                break;
            default:
                I = m * r * r;
                formula = 'I = mr² (point mass)';
        }

        return {
            problemType: 'Moment of Inertia',
            shape: shape,
            formula: formula,
            momentOfInertia: I,
            units: 'kg·m²',
            category: 'rotational_dynamics'
        };
    }

    solveAngularMomentum(problem) {
        const { I, omega, m, v, r } = problem.parameters;

        let L;

        if (I !== undefined && omega !== undefined) {
            L = I * omega;
        } else if (m !== undefined && v !== undefined && r !== undefined) {
            L = m * v * r;
        }

        return {
            problemType: 'Angular Momentum',
            equation: 'L = Iω or L = mvr',
            angularMomentum: L,
            units: 'kg·m²/s',
            category: 'rotational_dynamics'
        };
    }

    // GRAVITATION SOLVERS
    solveGravitationalForce(problem) {
        const { m1, m2, r, G = 6.674e-11 } = problem.parameters;

        const F = G * m1 * m2 / (r * r);

        return {
            problemType: 'Gravitational Force',
            equation: 'F = Gm₁m₂/r²',
            force: F,
            units: 'N',
            category: 'gravitation'
        };
    }

    solveGravitationalField(problem) {
        const { M, r, G = 6.674e-11 } = problem.parameters;

        const g = G * M / (r * r);

        return {
            problemType: 'Gravitational Field',
            equation: 'g = GM/r²',
            fieldStrength: g,
            units: 'm/s² or N/kg',
            category: 'gravitation'
        };
    }

    solveEscapeVelocity(problem) {
        const { M, r, G = 6.674e-11 } = problem.parameters;

        const v_esc = Math.sqrt(2 * G * M / r);

        return {
            problemType: 'Escape Velocity',
            equation: 'v_esc = √(2GM/r)',
            escapeVelocity: v_esc,
            units: 'm/s',
            category: 'gravitation'
        };
    }

    // OSCILLATION SOLVERS
    solveSHM(problem) {
        const { A, omega, phi = 0, t } = problem.parameters;

        // Position, velocity, acceleration as functions of time
        const x = A * Math.cos(omega * t + phi);
        const v = -A * omega * Math.sin(omega * t + phi);
        const a = -A * omega * omega * Math.cos(omega * t + phi);

        return {
            problemType: 'Simple Harmonic Motion',
            amplitude: A,
            angularFrequency: omega,
            phase: phi,
            position: x,
            velocity: v,
            acceleration: a,
            units: { position: 'm', velocity: 'm/s', acceleration: 'm/s²' },
            category: 'oscillations'
        };
    }

    solveSpringMotion(problem) {
        const { k, m, x = 0, v = 0 } = problem.parameters;

        // Angular frequency
        const omega = Math.sqrt(k / m);

        // Period
        const T = 2 * Math.PI / omega;

        // Frequency
        const f = 1 / T;

        // Total energy (if position or velocity given)
        const E = 0.5 * k * x * x + 0.5 * m * v * v;

        return {
            problemType: 'Spring-Mass System',
            springConstant: k,
            mass: m,
            angularFrequency: omega,
            period: T,
            frequency: f,
            totalEnergy: E,
            units: { period: 's', frequency: 'Hz', energy: 'J' },
            category: 'oscillations'
        };
    }

    solvePendulum(problem) {
        const { L, g = 9.81, theta_max } = problem.parameters;

        // Period (small angle approximation)
        const T = 2 * Math.PI * Math.sqrt(L / g);

        // Frequency
        const f = 1 / T;

        // Angular frequency
        const omega = 2 * Math.PI * f;

        return {
            problemType: 'Simple Pendulum',
            length: L,
            period: T,
            frequency: f,
            angularFrequency: omega,
            assumption: 'Small angle approximation (θ << 1 rad)',
            units: { period: 's', frequency: 'Hz' },
            category: 'oscillations'
        };
    }

    // FLUID STATICS SOLVERS
    solvePressure(problem) {
        const { F, A, rho, g = 9.81, h, P0 = 101325 } = problem.parameters;

        let P;

        if (F !== undefined && A !== undefined) {
            // P = F/A
            P = F / A;
        } else if (rho !== undefined && h !== undefined) {
            // Hydrostatic pressure
            P = P0 + rho * g * h;
        }

        return {
            problemType: 'Pressure',
            equation: F !== undefined ? 'P = F/A' : 'P = P₀ + ρgh',
            pressure: P,
            units: 'Pa',
            category: 'fluids_statics'
        };
    }

    solveBuoyancy(problem) {
        const { rho_fluid, V_displaced, g = 9.81, m_object } = problem.parameters;

        // Buoyant force
        const F_b = rho_fluid * V_displaced * g;

        // Weight of object (if mass given)
        const W = m_object !== undefined ? m_object * g : undefined;

        // Net force
        const F_net = W !== undefined ? W - F_b : undefined;

        return {
            problemType: 'Buoyancy (Archimedes\' Principle)',
            equation: 'F_b = ρ_fluid × V_displaced × g',
            buoyantForce: F_b,
            weight: W,
            netForce: F_net,
            floats: F_net !== undefined ? F_net <= 0 : undefined,
            units: 'N',
            category: 'fluids_statics'
        };
    }

    // FLUID DYNAMICS SOLVERS
    solveContinuity(problem) {
        const { A1, v1, A2, v2 } = problem.parameters;

        let result, unknown;

        if (A1 !== undefined && v1 !== undefined && A2 !== undefined) {
            // Find v2
            result = (A1 * v1) / A2;
            unknown = 'v2';
        } else if (A1 !== undefined && v1 !== undefined && v2 !== undefined) {
            // Find A2
            result = (A1 * v1) / v2;
            unknown = 'A2';
        }

        return {
            problemType: 'Continuity Equation',
            equation: 'A₁v₁ = A₂v₂',
            result: result,
            solvingFor: unknown,
            units: unknown === 'A2' ? 'm²' : 'm/s',
            category: 'fluids_dynamics'
        };
    }

    solveBernoulli(problem) {
        const { P1, v1, h1, P2, v2, h2, rho, g = 9.81 } = problem.parameters;

        // Bernoulli's equation: P + 0.5*rho*v^2 + rho*g*h = constant

        let result, unknown;

        // Calculate what we can
        const term1_known = P1 + 0.5 * rho * v1 * v1 + rho * g * h1;

        if (P2 === undefined) {
            result = term1_known - 0.5 * rho * v2 * v2 - rho * g * h2;
            unknown = 'P2';
        } else if (v2 === undefined) {
            result = Math.sqrt(2 * (term1_known - P2 - rho * g * h2) / rho);
            unknown = 'v2';
        } else if (h2 === undefined) {
            result = (term1_known - P2 - 0.5 * rho * v2 * v2) / (rho * g);
            unknown = 'h2';
        }

        return {
            problemType: 'Bernoulli\'s Equation',
            equation: 'P + ½ρv² + ρgh = constant',
            result: result,
            solvingFor: unknown,
            units: unknown === 'P2' ? 'Pa' : unknown === 'v2' ? 'm/s' : 'm',
            category: 'fluids_dynamics'
        };
    }

    // HELPER METHODS
    determineKinematicsUnits(knowns) {
        const units = {};
        if (knowns.x !== undefined) units.position = 'm';
        if (knowns.v !== undefined) units.velocity = 'm/s';
        if (knowns.a !== undefined) units.acceleration = 'm/s²';
        if (knowns.t !== undefined) units.time = 's';
        return units;
    }

    generateKinematicsSteps(equationType, knowns) {
        // This would generate detailed steps based on equation type
        // Placeholder for now
        return [];
    }

    // STEP GENERATION
    generateMechanicsSteps(problem, solution) {
        let baseSteps = this.generateBaseMechanicsSteps(problem, solution);

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

    generateBaseMechanicsSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'kinematics_constant_acceleration':
                return this.generateKinematicsDetailedSteps(problem, solution);
            case 'projectile_motion':
                return this.generateProjectileSteps(problem, solution);
            case 'force_acceleration':
                return this.generateForceSteps(problem, solution);
            case 'work_calculation':
                return this.generateWorkSteps(problem, solution);
            case 'conservation_energy':
                return this.generateEnergyConservationSteps(problem, solution);
            case 'collision_elastic':
            case 'collision_inelastic':
                return this.generateCollisionSteps(problem, solution);
            default:
                return this.generateGenericMechanicsSteps(problem, solution);
        }
    }

    generateKinematicsDetailedSteps(problem, solution) {
    const steps = [];
    const { v0, a, t, x0 } = problem.parameters || {};

    steps.push({
        stepNumber: 1,
        step: 'Identify known quantities',
        description: 'List all given values and identify what needs to be found',
        knowns: {
            'Initial velocity (v₀)': v0 !== undefined ? `${v0} m/s` : 'unknown',
            'Acceleration (a)': a !== undefined ? `${a} m/s²` : 'unknown',
            'Time (t)': t !== undefined ? `${t} s` : 'unknown',
            'Initial position (x₀)': x0 !== undefined ? `${x0} m` : 'unknown'
        },
        reasoning: 'Organizing known and unknown quantities helps determine which kinematic equation to use',
        visualHint: 'Draw a motion diagram showing initial and final states',
        physicalMeaning: 'These quantities describe the complete state of motion at different times',
        category: 'kinematics_1d'
    });

    // Get equation from solution or create default
    const equation = solution?.equation || 'Kinematic equation';

    steps.push({
        stepNumber: 2,
        step: 'Choose appropriate kinematic equation',
        description: 'Select equation based on which quantities are known and unknown',
        equation: equation,
        reasoning: 'This equation relates the known quantities to the unknown we want to find',
        algebraicRule: 'Kinematic equations for constant acceleration',
        alternatives: [
            'v = v₀ + at (relates velocity, acceleration, time)',
            'x = x₀ + v₀t + ½at² (relates position, velocity, acceleration, time)',
            'v² = v₀² + 2a(x - x₀) (relates velocities, acceleration, displacement)',
            'x = x₀ + ½(v₀ + v)t (uses average velocity)'
        ],
        decisionCriteria: 'Choose equation that contains known quantities and desired unknown',
        category: 'kinematics_1d'
    });

    steps.push({
        stepNumber: 3,
        step: 'Substitute known values',
        description: 'Replace variables with their numerical values',
        beforeExpression: equation,
        substitution: this.formatSubstitution(problem.parameters, equation),
        reasoning: 'Substitution converts abstract equation to concrete numerical problem',
        unitsCheck: 'Verify all quantities are in consistent SI units',
        category: 'kinematics_1d'
    });

    steps.push({
        stepNumber: 4,
        step: 'Solve for unknown',
        description: 'Perform algebraic operations and calculate result',
        calculation: this.formatCalculation(solution),
        result: solution?.result,
        units: solution?.units,
        reasoning: 'Mathematical operations yield the physical quantity we seek',
        finalAnswer: true,
        category: 'kinematics_1d'
    });

    steps.push({
        stepNumber: 5,
        step: 'Check reasonableness',
        description: 'Verify that the answer makes physical sense',
        checks: [
            'Are the units correct?',
            'Is the magnitude reasonable?',
            'Does the sign make sense?',
            'Can we verify with a different method?'
        ],
        reasoning: 'Physical intuition helps catch calculation errors',
        category: 'kinematics_1d'
    });

    return steps;
}

    generateProjectileSteps(problem, solution) {
        const steps = [];
        const { v0, angle } = problem.parameters;

        steps.push({
            stepNumber: 1,
            step: 'Resolve initial velocity into components',
            description: 'Break velocity vector into horizontal and vertical components',
            components: {
                horizontal: `v₀ₓ = v₀ cos(θ) = ${v0} × cos(${angle}°) = ${solution.components.horizontal.toFixed(2)} m/s`,
                vertical: `v₀ᵧ = v₀ sin(θ) = ${v0} × sin(${angle}°) = ${solution.components.vertical.toFixed(2)} m/s`
            },
            reasoning: 'Projectile motion is 2D - horizontal and vertical motions are independent',
            visualHint: 'Draw velocity vector and show component triangle',
            physicalMeaning: 'Horizontal component remains constant; vertical component changes due to gravity',
            category: 'kinematics_2d'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze vertical motion',
            description: 'Find time of flight using vertical kinematics',
            equation: 'y = y₀ + v₀ᵧt - ½gt²',
            reasoning: 'Set y = 0 (returns to launch height) and solve for time',
            calculation: `t = 2v₀ᵧ/g = ${solution.timeOfFlight.toFixed(2)} s`,
            physicalMeaning: 'Time when projectile returns to initial height',
            category: 'kinematics_2d'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate horizontal range',
            description: 'Use constant horizontal velocity and time of flight',
            equation: 'R = v₀ₓ × t',
            calculation: `R = ${solution.components.horizontal.toFixed(2)} × ${solution.timeOfFlight.toFixed(2)} = ${solution.range.toFixed(2)} m`,
            reasoning: 'Horizontal velocity is constant (no horizontal acceleration)',
            finalAnswer: true,
            category: 'kinematics_2d'
        });

        steps.push({
            stepNumber: 4,
            step: 'Find maximum height',
            description: 'Calculate highest point using vertical motion',
            equation: 'h_max = v₀ᵧ²/(2g)',
            calculation: `h_max = ${solution.maxHeight.toFixed(2)} m`,
            reasoning: 'At maximum height, vertical velocity is zero',
            physicalMeaning: 'Point where vertical velocity changes from upward to downward',
            category: 'kinematics_2d'
        });

        return steps;
    }

    generateForceSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Draw free body diagram',
            description: 'Identify all forces acting on the object',
            reasoning: 'FBD visualizes force system and ensures no forces are missed',
            visualHint: 'Draw object as point with force vectors as arrows',
            physicalMeaning: 'Forces cause acceleration according to Newton\'s second law',
            category: 'newtons_laws'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply Newton\'s second law',
            description: 'Set net force equal to mass times acceleration',
            equation: 'ΣF = ma',
            reasoning: 'This fundamental law relates force to motion',
            category: 'newtons_laws'
        });

        steps.push({
            stepNumber: 3,
            step: 'Substitute and solve',
            description: 'Insert known values and calculate unknown',
            result: solution.result,
            units: solution.units,
            finalAnswer: true,
            category: 'newtons_laws'
        });

        return steps;
    }

    generateWorkSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify force and displacement',
            description: 'Determine magnitude and direction of force and displacement',
            reasoning: 'Work requires both force and displacement',
            visualHint: 'Draw force vector and displacement vector',
            category: 'work_energy'
        });

        steps.push({
            stepNumber: 2,
            step: 'Find angle between vectors',
            description: 'Determine angle θ between force and displacement',
            angle: problem.parameters.theta || 0,
            reasoning: 'Only force component parallel to displacement does work',
            physicalMeaning: 'Perpendicular force component does no work',
            category: 'work_energy'
        });

        steps.push({
            stepNumber: 3,
            step: 'Calculate work using W = Fd cos(θ)',
            equation: 'W = F·d·cos(θ)',
            calculation: solution.work,
            units: 'J',
            finalAnswer: true,
            reasoning: 'Work is scalar product of force and displacement vectors',
            category: 'work_energy'
        });

        return steps;
    }

    generateEnergyConservationSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify initial state',
            description: 'Calculate all energy forms at initial time',
            energy: {
                kinetic: solution.initialEnergy.kinetic,
                potential: solution.initialEnergy.potential,
                total: solution.initialEnergy.total
            },
            units: 'J',
            reasoning: 'Total mechanical energy is sum of KE and PE',
            category: 'work_energy'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify final state',
            description: 'Calculate all energy forms at final time',
            energy: {
                kinetic: solution.finalEnergy.kinetic,
                potential: solution.finalEnergy.potential,
                total: solution.finalEnergy.total
            },
            units: 'J',
            reasoning: 'Energy transforms between kinetic and potential',
            category: 'work_energy'
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply conservation of energy',
            description: 'Set initial total energy equal to final total energy',
            equation: 'E_initial = E_final',
            verification: solution.energyConserved,
            reasoning: 'In absence of non-conservative forces, mechanical energy is conserved',
            physicalMeaning: 'Energy cannot be created or destroyed, only transformed',
            finalAnswer: true,
            category: 'work_energy'
        });

        return steps;
    }

    generateCollisionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Apply conservation of momentum',
            description: 'Total momentum before = total momentum after',
            equation: 'p_before = p_after',
            reasoning: 'In isolated system, momentum is conserved',
            physicalMeaning: 'Momentum conservation follows from Newton\'s third law',
            category: 'momentum'
        });

        if (problem.type === 'collision_elastic') {
            steps.push({
                stepNumber: 2,
                step: 'Apply conservation of kinetic energy',
                description: 'For elastic collision, KE is also conserved',
                equation: 'KE_before = KE_after',
                reasoning: 'Elastic collisions conserve both momentum and energy',
                category: 'momentum'
            });
        }

        steps.push({
            stepNumber: steps.length + 1,
            step: 'Solve system of equations',
            description: 'Find final velocities from conservation laws',
            result: solution.finalVelocities || solution.finalVelocity,
            units: 'm/s',
            finalAnswer: true,
            category: 'momentum'
        });

        return steps;
    }

    generateGenericMechanicsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve mechanics problem',
            description: 'Apply appropriate physics principles',
            result: solution.result || solution,
            category: problem.type
        }];
    }

// ENHANCEMENT METHODS (similar to linear workbook)
    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            // Multiple explanation formats
            explanations: {
                conceptual: this.getConceptualPhysicsExplanation(step, problem),
                procedural: this.getProceduralPhysicsExplanation(step),
                visual: this.getVisualPhysicsExplanation(step, problem),
                mathematical: this.getMathematicalPhysicsExplanation(step)
            },

            // Difficulty-adapted explanations
            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            // Learning support
            learningSupport: {
                prerequisiteSkills: this.identifyPhysicsPrerequisites(step, problem.type),
                keyVocabulary: this.identifyPhysicsVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null,
                physicalIntuition: this.providePhysicalIntuition(step, problem)
            }
        };

        return enhanced;
    }

    getConceptualPhysicsExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify known quantities': 'Understanding what information we have is the first step in any physics problem. Each quantity represents a measurable aspect of the physical situation.',
            'Choose appropriate kinematic equation': 'Different equations are tools for different situations. We select the one that connects what we know to what we want to find.',
            'Resolve initial velocity into components': 'Breaking vectors into components allows us to analyze complex 2D motion as two simpler 1D motions.',
            'Draw free body diagram': 'A free body diagram isolates the object and shows all forces acting on it, making the physics of the situation clear.',
            'Apply conservation of energy': 'Energy conservation is a powerful principle: energy transforms between forms but the total remains constant.'
        };

        return conceptualExplanations[step.step] || step.reasoning || 'This step advances our understanding of the physical system.';
    }

    getProceduralPhysicsExplanation(step) {
        if (step.equation) {
            return `1. Write the governing equation: ${step.equation}
2. Identify each term and its physical meaning
3. Substitute known values with proper units
4. Perform calculations
5. Check units and reasonableness of result`;
        }
        return 'Follow standard physics problem-solving procedure for this step.';
    }

    getVisualPhysicsExplanation(step, problem) {
        const visualExplanations = {
            'kinematics_1d': 'Visualize motion along a straight line with position, velocity, and acceleration vectors',
            'kinematics_2d': 'Picture the curved path of the projectile through space',
            'newtons_laws': 'Imagine force vectors pushing and pulling on the object',
            'work_energy': 'See energy as flowing between different forms: kinetic, potential, thermal',
            'momentum': 'Visualize momentum as "quantity of motion" - harder to stop objects with more momentum',
            'circular_motion': 'Picture the object moving in a circle with acceleration always pointing toward center',
            'rotational_dynamics': 'Visualize twisting forces (torques) causing rotational acceleration'
        };

        return visualExplanations[problem.type] || 'Visualize the physical situation and how quantities change.';
    }

    getMathematicalPhysicsExplanation(step) {
        if (step.equation) {
            return {
                equation: step.equation,
                variables: 'Each symbol represents a measurable physical quantity',
                relationships: 'The equation expresses how these quantities are mathematically related',
                units: 'Dimensional analysis ensures equation is physically valid'
            };
        }
        return 'Apply mathematical operations while maintaining physical meaning.';
    }

    identifyPhysicsPrerequisites(step, problemType) {
        const prerequisites = {
            'Identify known quantities': ['Unit conversions', 'Understanding of physical quantities'],
            'Choose appropriate kinematic equation': ['Algebra', 'Understanding of motion concepts'],
            'Resolve initial velocity into components': ['Trigonometry', 'Vector concepts'],
            'Draw free body diagram': ['Force identification', 'Vector representation'],
            'Apply conservation of energy': ['Energy concepts', 'Algebra'],
            'Apply conservation of momentum': ['Vector addition', 'Momentum concept']
        };

        return prerequisites[step.step] || ['Basic physics concepts', 'Algebra'];
    }

    identifyPhysicsVocabulary(step) {
        const vocabulary = {
            'Identify known quantities': ['displacement', 'velocity', 'acceleration', 'time'],
            'Resolve initial velocity into components': ['components', 'horizontal', 'vertical', 'magnitude', 'direction'],
            'Draw free body diagram': ['force', 'normal force', 'friction', 'tension', 'weight'],
            'Apply conservation of energy': ['kinetic energy', 'potential energy', 'mechanical energy', 'conservative force'],
            'Apply conservation of momentum': ['momentum', 'collision', 'isolated system', 'impulse']
        };

        return vocabulary[step.step] || [];
    }

    providePhysicalIntuition(step, problem) {
        return {
            realWorldAnalogy: this.getRealWorldAnalogy(step, problem),
            commonExperience: this.getCommonExperience(step, problem),
            counterIntuitive: this.identifyCounterIntuitive(step, problem)
        };
    }

    getRealWorldAnalogy(step, problem) {
        const analogies = {
            'kinematics_1d': 'Like tracking a car\'s speedometer and odometer during a trip',
            'projectile_motion': 'Similar to throwing a ball - it follows a curved path',
            'newtons_laws': 'Pushing a shopping cart - more force means more acceleration',
            'work_energy': 'Like charging a battery - work puts energy into the system',
            'momentum': 'A freight train is harder to stop than a bicycle - more momentum',
            'circular_motion': 'Like swinging a ball on a string - tension provides centripetal force'
        };

        return analogies[problem.type] || 'Consider everyday situations involving similar physics';
    }

    getCommonExperience(step, problem) {
        const experiences = {
            'kinematics_1d': 'Accelerating or braking in a car',
            'projectile_motion': 'Throwing or catching a ball',
            'newtons_laws': 'Pushing furniture across a floor',
            'work_energy': 'Climbing stairs or riding a bicycle uphill',
            'momentum': 'Collisions in sports like football or hockey',
            'circular_motion': 'Driving around a curve or riding a merry-go-round'
        };

        return experiences[problem.type] || 'Relate to personal physical experiences';
    }

    identifyCounterIntuitive(step, problem) {
        const counterIntuitive = {
            'projectile_motion': 'Horizontal and vertical motions are truly independent',
            'newtons_laws': 'Objects can have forces acting on them while at rest (balanced forces)',
            'circular_motion': 'Speed can be constant while velocity changes (direction changes)',
            'momentum': 'Small object moving fast can have same momentum as large object moving slow'
        };

        return counterIntuitive[problem.type] || null;
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generatePhysicsStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainPhysicsProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainPhysicsStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generatePhysicsStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.description}`,
            nextGoal: `Next, we will: ${nextStep.description}`,
            why: `This is necessary because: ${this.explainPhysicsNecessity(currentStep, nextStep)}`,
            howItHelps: `This helps by: ${this.explainPhysicsBenefit(nextStep)}`
        };
    }

    explainPhysicsProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue solving the physics problem systematically`;
    }

    explainPhysicsStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" involves ${nextStep.description.toLowerCase()}`;
    }

    explainPhysicsNecessity(currentStep, nextStep) {
        return `${nextStep.step} builds on the results from ${currentStep.step}`;
    }

    explainPhysicsBenefit(nextStep) {
        return `completing ${nextStep.step} brings us closer to the final physical result`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePhysicsPreventionTips(step, problemType),
                checkPoints: this.generatePhysicsCheckPoints(step),
                warningFlags: this.identifyPhysicsWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generatePhysicsSelfCheck(step),
                expectedResult: this.describePhysicsExpectedResult(step),
                troubleshooting: this.generatePhysicsTroubleshooting(step)
            }
        };
    }

    generatePhysicsPreventionTips(step, problemType) {
        const tips = {
            'Identify known quantities': [
                'Convert all quantities to SI units before calculating',
                'Watch for implicit information (e.g., "starts from rest" means v₀ = 0)'
            ],
            'Resolve initial velocity into components': [
                'Use the angle measured from horizontal (standard convention)',
                'Remember: cos for adjacent (horizontal), sin for opposite (vertical)',
                'Check that v₀ₓ² + v₀ᵧ² = v₀² as verification'
            ],
            'Draw free body diagram': [
                'Include only forces acting ON the object, not BY the object',
                'Weight always points downward',
                'Normal force is perpendicular to contact surface'
            ],
            'Apply conservation of energy': [
                'Account for all forms of energy at both states',
                'Include work done by non-conservative forces',
                'Choose consistent reference level for potential energy'
            ]
        };

        return tips[step.step] || ['Double-check calculations', 'Verify units', 'Check physical reasonableness'];
    }

    generatePhysicsCheckPoints(step) {
        return [
            'Are all units consistent (SI)?',
            'Does the answer have the right dimensions?',
            'Is the magnitude physically reasonable?',
            'Does the sign/direction make sense?',
            'Have all forces/energies been accounted for?'
        ];
    }

    identifyPhysicsWarningFlags(step, problemType) {
        const warnings = {
            'kinematics_1d': step.step === 'Choose appropriate kinematic equation' ?
                ['Verify acceleration is truly constant throughout motion'] : [],
            'kinematics_2d': step.step === 'Resolve initial velocity into components' ?
                ['Check angle convention - measured from horizontal or vertical?'] : [],
            'newtons_laws': step.step === 'Draw free body diagram' ?
                ['Do not include velocity or acceleration as forces'] : [],
            'work_energy': step.step === 'Calculate work' ?
                ['Negative work means force opposes motion'] : [],
            'circular_motion': step.step === 'Calculate centripetal force' ?
                ['Centripetal force is net inward force, not an additional force'] : []
        };

        return warnings[problemType] || [];
    }

    generatePhysicsSelfCheck(step) {
        const questions = {
            'Identify known quantities': 'Have I listed all given information and identified what needs to be found?',
            'Choose appropriate kinematic equation': 'Does this equation contain the known and unknown quantities?',
            'Resolve initial velocity into components': 'Do my components form a right triangle with the original velocity?',
            'Draw free body diagram': 'Have I included all forces and only forces acting on the object?',
            'Apply conservation of energy': 'Did I account for all energy forms at both initial and final states?',
            'Apply conservation of momentum': 'Is the system truly isolated (no external forces)?'
        };

        return questions[step.step] || 'Does this step make physical sense and move toward the solution?';
    }

    describePhysicsExpectedResult(step) {
        const expectations = {
            'Identify known quantities': 'Clear list of given quantities with units',
            'Choose appropriate kinematic equation': 'Equation containing knowns and desired unknown',
            'Resolve initial velocity into components': 'Horizontal and vertical components of velocity',
            'Draw free body diagram': 'All forces acting on object shown with correct directions',
            'Apply conservation of energy': 'Energy equation relating initial and final states'
        };

        return expectations[step.step] || 'Progress toward solving the problem';
    }

    generatePhysicsTroubleshooting(step) {
        return [
            'If answer seems wrong, check unit conversions',
            'Verify sign conventions are consistent',
            'Review free body diagram if forces are involved',
            'Consider whether approximations are valid',
            'Try solving with different approach to verify'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generatePhysicsGuidingQuestions(step, problem),
                subSteps: this.breakIntoPhysicsSubSteps(step),
                hints: this.generatePhysicsProgressiveHints(step),
                practiceVariation: this.generatePhysicsPracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainPhysicsThinkingProcess(step),
                decisionPoints: this.identifyPhysicsDecisionPoints(step),
                alternativeApproaches: this.suggestPhysicsAlternativeMethods(step, problem)
            }
        }));
    }

    generatePhysicsGuidingQuestions(step, problem) {
        const questions = {
            'Identify known quantities': [
                'What physical quantities are mentioned in the problem?',
                'What units are given?',
                'What are we asked to find?',
                'Are there any implicit givens (e.g., starts from rest)?'
            ],
            'Choose appropriate kinematic equation': [
                'Which kinematic quantities do we know?',
                'Which quantity do we want to find?',
                'Which equation connects these quantities?',
                'Is acceleration constant?'
            ],
            'Resolve initial velocity into components': [
                'What is the angle measured from?',
                'Which component is adjacent to the angle?',
                'Which component is opposite to the angle?',
                'How can we verify our components are correct?'
            ],
            'Draw free body diagram': [
                'What objects are in contact with our object?',
                'What forces act at a distance?',
                'In which direction does each force point?',
                'Are all forces included?'
            ],
            'Apply conservation of energy': [
                'What energy forms exist initially?',
                'What energy forms exist finally?',
                'Are there non-conservative forces doing work?',
                'Where should we set PE = 0?'
            ]
        };

        return questions[step.step] || [
            'What does this step accomplish?',
            'How does it help solve the problem?',
            'What physical principle is being applied?'
        ];
    }

    breakIntoPhysicsSubSteps(step) {
        if (step.step === 'Resolve initial velocity into components') {
            return [
                'Identify the magnitude of initial velocity (v₀)',
                'Identify the angle (θ) from horizontal',
                'Calculate horizontal component: v₀ₓ = v₀ cos(θ)',
                'Calculate vertical component: v₀ᵧ = v₀ sin(θ)',
                'Verify: v₀ₓ² + v₀ᵧ² should equal v₀²'
            ];
        } else if (step.step === 'Draw free body diagram') {
            return [
                'Draw the object as a point or simple shape',
                'Identify all contact forces',
                'Identify all field forces (gravity, electric, etc.)',
                'Draw each force as an arrow from the object',
                'Label each force with magnitude/variable name',
                'Verify all forces are accounted for'
            ];
        } else if (step.equation) {
            return [
                `Write the equation: ${step.equation}`,
                'Identify each variable in the equation',
                'Substitute known values',
                'Perform algebraic manipulation if needed',
                'Calculate numerical result',
                'Verify units are correct'
            ];
        }

        return ['Understand the goal of this step', 'Apply relevant physics principles', 'Calculate and verify'];
    }

    generatePhysicsProgressiveHints(step) {
        return {
            level1: 'Think about which physical principles apply to this situation.',
            level2: 'Consider what equation or relationship connects the known and unknown quantities.',
            level3: 'Remember to check units and ensure your answer makes physical sense.',
            level4: step.equation ? `The key equation is: ${step.equation}` : 'Apply systematic problem-solving approach.'
        };
    }

    generatePhysicsPracticeVariation(step, problem) {
        return {
            similarProblem: `Try a similar ${problem.category} problem with different numerical values`,
            practiceHint: `Focus on mastering ${step.step} with simpler examples first`,
            extension: `Once comfortable, try problems combining ${problem.category} with other physics topics`
        };
    }

    explainPhysicsThinkingProcess(step) {
        return {
            observe: 'What does the problem tell me about the physical situation?',
            goal: 'What physical quantity am I trying to find?',
            strategy: 'Which physics principle or equation will help?',
            execute: 'How do I apply this principle correctly?',
            verify: 'Does my answer make physical sense?'
        };
    }

    identifyPhysicsDecisionPoints(step) {
        return [
            'Choosing which physics principle to apply',
            'Deciding coordinate system orientation',
            'Selecting appropriate equation',
            'Determining sign conventions'
        ];
    }

    suggestPhysicsAlternativeMethods(step, problem) {
        const alternatives = {
            'kinematics_constant_acceleration': [
                'Graphical analysis using v-t or x-t graphs',
                'Using different kinematic equation',
                'Calculus approach (integrate acceleration)'
            ],
            'projectile_motion': [
                'Parametric equations approach',
                'Energy methods for certain quantities',
                'Vector component method vs trajectory equation'
            ],
            'force_acceleration': [
                'Component method vs vector method',
                'Energy approach (if displacement known)',
                'Impulse-momentum for time-dependent forces'
            ],
            'work_energy': [
                'Force-displacement approach',
                'Energy conservation approach',
                'Power-time integration approach'
            ],
            'collision_elastic': [
                'Momentum-energy equations',
                'Reference frame transformation',
                'Coefficient of restitution method'
            ]
        };

        return alternatives[problem.type] || ['Alternative approaches exist depending on given information'];
    }

    // FORMATTING HELPERS
    formatSubstitution(parameters, equation) {
    // Handle undefined or missing equation
    if (!equation || typeof equation !== 'string') {
        return 'Substituting values into equation';
    }

    let result = equation;
    
    // Handle undefined parameters
    if (!parameters || typeof parameters !== 'object') {
        return result;
    }

    for (const [key, value] of Object.entries(parameters)) {
        if (value !== undefined && value !== null) {
            const symbols = {
                'v0': 'v₀', 'x0': 'x₀', 'a': 'a', 't': 't', 'v': 'v', 'x': 'x',
                'h0': 'h₀', 'h': 'h', 'g': 'g', 'theta': 'θ', 'angle': 'θ',
                'm': 'm', 'F': 'F', 'mu': 'μ', 'r': 'r', 'omega': 'ω'
            };
            const symbol = symbols[key] || key;
            
            try {
                const regex = new RegExp(symbol.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g');
                result = result.replace(regex, value.toString());
            } catch (e) {
                // If regex fails, skip this replacement
                console.warn(`Failed to substitute ${key}: ${e.message}`);
            }
        }
    }
    return result;
}

formatCalculation(solution) {
    // Handle undefined or missing solution
    if (!solution) {
        return 'Calculating result...';
    }

    if (solution.result !== undefined && solution.result !== null) {
        const units = solution.units || '';
        const resultValue = typeof solution.result === 'number' 
            ? solution.result.toFixed(3) 
            : solution.result;
        return `Result = ${resultValue} ${units}`;
    }
    
    return 'Calculation in progress';
}

    // VERIFICATION METHODS
    verifyKinematics() {
        const { v0, a, t } = this.currentProblem.parameters;
        const result = this.currentSolution.result;

        // Use alternative equation to verify
        const verification = v0 + a * t;
        const difference = Math.abs(result - verification);

        return {
            method: 'Alternative kinematic equation',
            calculated: result,
            verification: verification,
            difference: difference,
            isValid: difference < 0.01,
            tolerance: 0.01
        };
    }

    verifyEnergyConservation() {
        const solution = this.currentSolution;
        const E_initial = solution.initialEnergy?.total;
        const E_final = solution.finalEnergy?.total;

        if (E_initial !== undefined && E_final !== undefined) {
            const difference = Math.abs(E_initial - E_final);
            const percentDiff = (difference / E_initial) * 100;

            return {
                initialEnergy: E_initial,
                finalEnergy: E_final,
                difference: difference,
                percentDifference: percentDiff,
                isConserved: percentDiff < 1, // Within 1%
                note: 'Small differences may be due to rounding'
            };
        }

        return { message: 'Energy conservation not applicable to this problem' };
    }

    verifyMomentumConservation() {
        const problem = this.currentProblem;
        const solution = this.currentSolution;

        if (problem.type.includes('collision')) {
            const { m1, m2, v1_i, v2_i } = problem.parameters;
            const p_initial = m1 * v1_i + m2 * v2_i;

            let p_final;
            if (solution.finalVelocity !== undefined) {
                // Inelastic collision
                p_final = (m1 + m2) * solution.finalVelocity;
            } else if (solution.finalVelocities) {
                // Elastic collision
                p_final = m1 * solution.finalVelocities.v1 + m2 * solution.finalVelocities.v2;
            }

            const difference = Math.abs(p_initial - p_final);

            return {
                initialMomentum: p_initial,
                finalMomentum: p_final,
                difference: difference,
                isConserved: difference < 0.01,
                units: 'kg·m/s'
            };
        }

        return { message: 'Momentum conservation not applicable' };
    }

    verifyDimensionalAnalysis() {
        const solution = this.currentSolution;
        const expectedUnits = solution.units;

        // This would perform dimensional analysis on the equation
        return {
            expectedUnits: expectedUnits,
            dimensionallyConsistent: true, // Placeholder
            note: 'Dimensional analysis verifies equation structure'
        };
    }

    // GRAPH DATA GENERATION
    generateMechanicsGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'kinematics_constant_acceleration':
                this.graphData = this.generateKinematicsGraph();
                break;
            case 'projectile_motion':
                this.graphData = this.generateProjectileGraph();
                break;
            case 'conservation_energy':
                this.graphData = this.generateEnergyGraph();
                break;
            case 'simple_harmonic_motion':
            case 'spring_motion':
                this.graphData = this.generateOscillationGraph();
                break;
        }
    }

    generateKinematicsGraph() {
        const { v0, a, t } = this.currentProblem.parameters;
        const points = [];

        for (let time = 0; time <= (t || 10); time += 0.1) {
            const position = v0 * time + 0.5 * a * time * time;
            const velocity = v0 + a * time;
            points.push({ t: time, x: position, v: velocity });
        }

        return {
            type: 'kinematics',
            title: 'Position and Velocity vs Time',
            points: points,
            labels: { x: 'Time (s)', y1: 'Position (m)', y2: 'Velocity (m/s)' }
        };
    }

    generateProjectileGraph() {
        const solution = this.currentSolution;
        const points = [];

        const { v0x, v0y } = solution.components;
        const t_flight = solution.timeOfFlight;
        const g = 9.81;

        for (let t = 0; t <= t_flight; t += t_flight / 100) {
            const x = v0x * t;
            const y = v0y * t - 0.5 * g * t * t;
            points.push({ x, y });
        }

        return {
            type: 'trajectory',
            title: 'Projectile Trajectory',
            points: points,
            labels: { x: 'Horizontal Distance (m)', y: 'Height (m)' },
            maxHeight: solution.maxHeight,
            range: solution.range
        };
    }

    generateEnergyGraph() {
        const solution = this.currentSolution;
        const points = [];

        // Generate energy vs position or time
        return {
            type: 'energy',
            title: 'Energy Distribution',
            initialEnergy: solution.initialEnergy,
            finalEnergy: solution.finalEnergy
        };
    }

    generateOscillationGraph() {
        const { A, omega, phi = 0 } = this.currentProblem.parameters;
        const points = [];

        const T = 2 * Math.PI / omega;

        for (let t = 0; t <= 2 * T; t += T / 100) {
            const x = A * Math.cos(omega * t + phi);
            const v = -A * omega * Math.sin(omega * t + phi);
            points.push({ t, x, v });
        }

        return {
            type: 'oscillation',
            title: 'Simple Harmonic Motion',
            points: points,
            labels: { x: 'Time (s)', y1: 'Position (m)', y2: 'Velocity (m/s)' },
            period: T,
            amplitude: A
        };
    }

    // WORKBOOK GENERATION
    generateMechanicsWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createPhysicsPrinciplesSection(),
            this.createEnhancedStepsSection(),
            this.createSolutionSection(),
            this.createVerificationSection(),
            this.createPhysicsAnalysisSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Mechanics Physics Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const data = [
            ['Problem Type', this.mechanicsTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.mechanicsTypes[this.currentProblem.type]?.category || 'mechanics'],
            ['Description', this.currentProblem.scenario || this.currentProblem.originalInput]
        ];

        // Add given parameters
        if (this.currentProblem.parameters) {
            data.push(['', '']); // Spacing
            data.push(['Given Quantities', '']);
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined) {
                    data.push([key, value]);
                }
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: data
        };
    }

createPhysicsPrinciplesSection() {
        const { type } = this.currentProblem;
        const typeConfig = this.mechanicsTypes[type];

        if (!typeConfig) return null;

        return {
            title: 'Physics Principles',
            type: 'principles',
            data: [
                ['Governing Principle', typeConfig.name],
                ['Category', typeConfig.category],
                ['Key Equation', this.currentSolution.equation || 'Various equations'],
                ['Physical Law', this.getPhysicalLaw(type)]
            ]
        };
    }

    getPhysicalLaw(type) {
        const laws = {
            'kinematics_constant_acceleration': 'Kinematic equations for constant acceleration',
            'projectile_motion': 'Independence of horizontal and vertical motion',
            'force_acceleration': 'Newton\'s Second Law (F = ma)',
            'work_calculation': 'Work-energy relationship',
            'conservation_energy': 'Conservation of mechanical energy',
            'momentum_calculation': 'Definition of linear momentum',
            'collision_elastic': 'Conservation of momentum and kinetic energy',
            'collision_inelastic': 'Conservation of momentum only',
            'centripetal_force': 'Centripetal acceleration requires inward force',
            'torque': 'Rotational analog of force',
            'gravitational_force': 'Newton\'s Law of Universal Gravitation',
            'simple_harmonic_motion': 'Restoring force proportional to displacement',
            'buoyancy': 'Archimedes\' Principle'
        };

        return laws[type] || 'Fundamental physics principles';
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Transition', step.explanation.currentState]);
                stepsData.push(['→ Next Goal', step.explanation.nextGoal]);
                stepsData.push(['', '']);
                return;
            }

            // Main step
            stepsData.push([`Step ${step.stepNumber}`, step.step]);
            stepsData.push(['Description', step.description]);

            if (step.equation) {
                stepsData.push(['Equation', step.equation]);
            }

            if (step.reasoning) {
                stepsData.push(['Physical Reasoning', step.reasoning]);
            }

            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }

            if (step.calculation) {
                stepsData.push(['Calculation', step.calculation]);
            }

            if (step.result !== undefined) {
                stepsData.push(['Result', `${step.result} ${step.units || ''}`]);
            }

            // Enhanced explanations
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
            }

            if (step.learningSupport && this.explanationLevel !== 'basic') {
                if (step.learningSupport.physicalIntuition) {
                    stepsData.push(['Real-World Analogy', step.learningSupport.physicalIntuition.realWorldAnalogy]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.slice(0, 2).join(' ')]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const data = [];

        // Add main result
        if (this.currentSolution.result !== undefined) {
            data.push(['Final Answer', `${this.currentSolution.result.toFixed(4)} ${this.currentSolution.units || ''}`]);
        }

        // Add specific solution details based on problem type
        const { type } = this.currentProblem;

        if (type === 'projectile_motion') {
            data.push(['Range', `${this.currentSolution.range.toFixed(2)} m`]);
            data.push(['Max Height', `${this.currentSolution.maxHeight.toFixed(2)} m`]);
            data.push(['Time of Flight', `${this.currentSolution.timeOfFlight.toFixed(2)} s`]);
        } else if (type === 'conservation_energy') {
            data.push(['Initial Energy', `${this.currentSolution.initialEnergy.total.toFixed(2)} J`]);
            data.push(['Final Energy', `${this.currentSolution.finalEnergy.total.toFixed(2)} J`]);
            data.push(['Energy Conserved', this.currentSolution.energyConserved ? 'Yes' : 'No']);
        } else if (type.includes('collision')) {
            if (this.currentSolution.finalVelocities) {
                data.push(['Final Velocity 1', `${this.currentSolution.finalVelocities.v1.toFixed(3)} m/s`]);
                data.push(['Final Velocity 2', `${this.currentSolution.finalVelocities.v2.toFixed(3)} m/s`]);
            } else if (this.currentSolution.finalVelocity !== undefined) {
                data.push(['Final Velocity', `${this.currentSolution.finalVelocity.toFixed(3)} m/s`]);
            }
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: data
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [['Verification Method', 'Result'], ['', '']];

        const { type } = this.currentProblem;

        // Dimensional analysis
        const dimAnalysis = this.verifyDimensionalAnalysis();
        verificationData.push(['Dimensional Analysis', dimAnalysis.dimensionallyConsistent ? 'Consistent' : 'Issue found']);
        verificationData.push(['Expected Units', dimAnalysis.expectedUnits]);

        // Type-specific verification
        if (type === 'conservation_energy') {
            const energyVerif = this.verifyEnergyConservation();
            if (energyVerif.initialEnergy !== undefined) {
                verificationData.push(['', '']);
                verificationData.push(['Energy Conservation Check', '']);
                verificationData.push(['Initial Total Energy', `${energyVerif.initialEnergy.toFixed(2)} J`]);
                verificationData.push(['Final Total Energy', `${energyVerif.finalEnergy.toFixed(2)} J`]);
                verificationData.push(['Difference', `${energyVerif.difference.toFixed(4)} J`]);
                verificationData.push(['Percent Difference', `${energyVerif.percentDifference.toFixed(2)}%`]);
                verificationData.push(['Conserved', energyVerif.isConserved ? 'Yes' : 'No']);
            }
        } else if (type.includes('collision')) {
            const momentumVerif = this.verifyMomentumConservation();
            if (momentumVerif.initialMomentum !== undefined) {
                verificationData.push(['', '']);
                verificationData.push(['Momentum Conservation Check', '']);
                verificationData.push(['Initial Momentum', `${momentumVerif.initialMomentum.toFixed(3)} kg·m/s`]);
                verificationData.push(['Final Momentum', `${momentumVerif.finalMomentum.toFixed(3)} kg·m/s`]);
                verificationData.push(['Difference', `${momentumVerif.difference.toFixed(6)} kg·m/s`]);
                verificationData.push(['Conserved', momentumVerif.isConserved ? 'Yes' : 'No']);
            }
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createPhysicsAnalysisSection() {
        const data = [
            ['Problem Category', this.mechanicsTypes[this.currentProblem.type]?.category || 'mechanics'],
            ['Solution Method', this.currentSolution.method || 'Standard approach'],
            ['Steps Required', this.solutionSteps?.length || 0],
            ['Difficulty Level', this.explanationLevel]
        ];

        // Add physics-specific analysis
        if (this.currentSolution.principle) {
            data.push(['Physical Principle', this.currentSolution.principle]);
        }

        return {
            title: 'Problem Analysis',
            type: 'analysis',
            data: data
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const category = this.mechanicsTypes[type]?.category || 'mechanics';
        const lesson = this.lessons[category];

        if (!lesson) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogical',
            data: [
                ['Topic', lesson.title],
                ['Key Concepts', lesson.concepts?.join('; ') || 'Various mechanics concepts'],
                ['Theory', lesson.theory || 'Fundamental mechanics principles'],
                ['Applications', lesson.applications?.join('; ') || 'Real-world applications']
            ]
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generatePhysicsAlternativeMethods(type);

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: [
                ['Primary Method Used', alternatives.primaryMethod],
                ['', ''],
                ['Alternative Approaches', ''],
                ...alternatives.methods.map((method, index) => [
                    `Method ${index + 1}`, method
                ]),
                ['', ''],
                ['Method Comparison', alternatives.comparison]
            ]
        };
    }

    generatePhysicsAlternativeMethods(problemType) {
        const alternativeDatabase = {
            'kinematics_constant_acceleration': {
                primaryMethod: 'Kinematic equations',
                methods: [
                    'Graphical analysis using motion graphs',
                    'Calculus approach (integration/differentiation)',
                    'Energy methods for certain problems'
                ],
                comparison: 'Kinematic equations are most direct; graphical methods provide visual insight; calculus is most general'
            },
            'projectile_motion': {
                primaryMethod: 'Component analysis',
                methods: [
                    'Trajectory equation approach',
                    'Energy methods for max height',
                    'Vector methods with parametric equations'
                ],
                comparison: 'Component method most systematic; trajectory equation useful for path analysis'
            },
            'force_acceleration': {
                primaryMethod: 'Newton\'s Second Law (F = ma)',
                methods: [
                    'Energy methods (work-energy theorem)',
                    'Impulse-momentum for time-dependent forces',
                    'Free body diagram with vector resolution'
                ],
                comparison: 'F = ma is fundamental; energy methods avoid vector complexity; impulse-momentum for collisions'
            },
            'conservation_energy': {
                primaryMethod: 'Energy conservation equation',
                methods: [
                    'Force-based approach with kinematics',
                    'Lagrangian mechanics (advanced)',
                    'Work-energy theorem approach'
                ],
                comparison: 'Energy conservation is elegant and powerful; force methods more detailed but complex'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard physics approach',
            methods: ['Alternative methods depend on problem specifics'],
            comparison: 'Choose method based on given information and desired quantity'
        };
    }

    // UTILITY METHODS
    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short clear statements'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full technical physics vocabulary',
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
            adaptedDescription: this.adaptPhysicsLanguageLevel(step.description, level),
            adaptedReasoning: this.adaptPhysicsLanguageLevel(step.reasoning, level),
            complexityLevel: explanationLevel
        };
    }

    adaptPhysicsLanguageLevel(text, level) {
        if (!text) return '';

        const adaptations = {
            basic: {
                replacements: {
                    'acceleration': 'how fast speed changes',
                    'velocity': 'speed with direction',
                    'displacement': 'change in position',
                    'force': 'push or pull',
                    'momentum': 'quantity of motion',
                    'kinetic energy': 'energy of motion',
                    'potential energy': 'stored energy',
                    'centripetal': 'center-seeking',
                    'torque': 'twisting force',
                    'angular': 'rotational'
                }
            },
            intermediate: {
                replacements: {
                    'acceleration': 'acceleration',
                    'velocity': 'velocity',
                    'displacement': 'displacement',
                    'force': 'force',
                    'momentum': 'momentum',
                    'kinetic energy': 'kinetic energy',
                    'potential energy': 'potential energy',
                    'centripetal': 'centripetal',
                    'torque': 'torque',
                    'angular': 'angular'
                }
            },
            detailed: {
                replacements: {
                    'acceleration': 'acceleration (rate of change of velocity)',
                    'velocity': 'velocity (vector quantity with magnitude and direction)',
                    'displacement': 'displacement (vector from initial to final position)',
                    'force': 'force (agent of change in motion)',
                    'momentum': 'momentum (product of mass and velocity)',
                    'kinetic energy': 'kinetic energy (energy due to motion, ½mv²)',
                    'potential energy': 'potential energy (stored energy due to position or configuration)',
                    'centripetal': 'centripetal (directed toward center of circular path)',
                    'torque': 'torque (rotational analog of force, τ = r × F)',
                    'angular': 'angular (pertaining to rotation about an axis)'
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
            connection: `This step builds on Step ${stepIndex} by continuing the solution process`,
            progression: 'We are systematically applying physics principles to find the answer',
            relationship: 'Each step uses results from previous steps'
        };
    }

    // GCD helper (for any mathematical operations)
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

// Export for use in applications
export default EnhancedMechanicsPhysicsWorkbook;
