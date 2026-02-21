
//Enhanced Mechanics Workbook - Comprehensive Classical Mechanics System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { PhysicsSvgDiagrams } from '../physicsvg.js';
import { PhysicsDiagramsRegistry } from '../physicsregistry.js';
import { PhysicsDiagramsRenderer } from '../physicsrender.js';
import * as math from 'mathjs';

export class EnhancedMechanicsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "mechanics";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.contentHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.contentFontSize = 14;

        this.currentProblem = null;
        this.currentContent = null;
        this.contentSteps = [];
        this.currentWorkbook = null;
        // Add diagram renderer
        this.diagramRenderer = new PhysicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentExperiment = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        // Adaptive learning features
        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        // Learning state tracking
        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.mechanicsSymbols = this.initializeMechanicsSymbols();
        this.setThemeColors();
        this.initializeMechanicsTopics();
        this.initializeMechanicsLessons();
        this.initializeMechanicsExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            mechanics: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#1565c0',
                headerText: '#ffffff',
                sectionBg: '#bbdefb',
                sectionText: '#0d47a1',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e3f2fd',
                resultText: '#1565c0',
                definitionBg: '#fff3e0',
                definitionText: '#e65100',
                stepBg: '#e8eaf6',
                stepText: '#311b92',
                borderColor: '#42a5f5',
                contentBg: '#f3e5f5',
                contentText: '#4a148c',
                diagramBg: '#fce4ec',
                structureBg: '#e0f2f1',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                kinematicsBg: '#e8f5e9',
                dynamicsBg: '#e3f2fd',
                energyBg: '#fff8e1',
                momentumBg: '#fce4ec',
                rotationBg: '#f3e5f5',
                oscillationBg: '#e0f7fa'
            },
            dynamics: {
                background: '#fafafa',
                gridColor: '#9e9e9e',
                headerBg: '#4527a0',
                headerText: '#ffffff',
                sectionBg: '#d1c4e9',
                sectionText: '#311b92',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#ede7f6',
                resultText: '#4527a0',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#f1f8e9',
                stepText: '#33691e',
                borderColor: '#7c4dff',
                contentBg: '#e8eaf6',
                contentText: '#1a237e',
                diagramBg: '#fce4ec',
                structureBg: '#e8f5e9',
                experimentBg: '#fffde7',
                experimentText: '#f57f17',
                kinematicsBg: '#e8f5e9',
                dynamicsBg: '#ede7f6',
                energyBg: '#fff8e1',
                momentumBg: '#fce4ec',
                rotationBg: '#f3e5f5',
                oscillationBg: '#e0f7fa'
            }
        };

        this.colors = themes[this.theme] || themes.mechanics;
    }

    initializeMechanicsSymbols() {
        return {
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'Δ',
            'Delta': 'Δ',
            'theta': 'θ',
            'lambda': 'λ',
            'mu': 'μ',
            'pi': 'π',
            'omega': 'ω',
            'Omega': 'Ω',
            'tau': 'τ',
            'phi': 'φ',
            'rho': 'ρ',
            'sigma': 'σ',
            'epsilon': 'ε',
            'eta': 'η',

            // Arrows
            'arrow': '→',
            'reversible': '⇌',
            'doubleArrow': '↔',
            'vectorArrow': '⃗',

            // Math symbols
            'plus': '+',
            'minus': '−',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'integral': '∫',
            'partial': '∂',
            'nabla': '∇',
            'dot': '·',
            'cross': '×',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',

            // Kinematic quantities
            'displacement': 's',
            'velocity': 'v',
            'acceleration': 'a',
            'time': 't',
            'initial': '₀',

            // Dynamic quantities
            'force': 'F',
            'mass': 'm',
            'weight': 'W',
            'normal': 'N',
            'friction': 'f',
            'tension': 'T',
            'gravity': 'g',
            'G': 'G',

            // Energy quantities
            'KE': 'KE',
            'PE': 'PE',
            'work': 'W',
            'power': 'P',
            'energy': 'E',
            'joule': 'J',
            'watt': 'W',

            // Momentum quantities
            'momentum': 'p',
            'impulse': 'J',
            'angularMomentum': 'L',

            // Rotational quantities
            'torque': 'τ',
            'angularVelocity': 'ω',
            'angularAcceleration': 'α',
            'momentOfInertia': 'I',
            'radius': 'r',

            // Units
            'meter': 'm',
            'kilogram': 'kg',
            'second': 's',
            'newton': 'N',
            'pascal': 'Pa',
            'radian': 'rad',
            'hertz': 'Hz'
        };
    }

    initializeMechanicsTopics() {
        this.mechanicsTopics = {
            kinematics: {
                patterns: [
                    /kinematics/i,
                    /displacement|velocity|acceleration/i,
                    /uniform.*motion|projectile/i,
                    /equations.*of.*motion|suvat/i
                ],
                handler: this.handleKinematics.bind(this),
                name: 'Kinematics',
                category: 'mechanics',
                description: 'Study of motion without considering causes',
                difficulty: 'intermediate',
                prerequisites: ['algebra', 'trigonometry', 'vectors']
            },

            dynamics: {
                patterns: [
                    /dynamics|force/i,
                    /newton.*law|laws.*of.*motion/i,
                    /friction|normal.*force|tension/i,
                    /free.*body.*diagram|net.*force/i
                ],
                handler: this.handleDynamics.bind(this),
                name: 'Dynamics and Newton\'s Laws',
                category: 'mechanics',
                description: 'Study of forces and their effects on motion',
                difficulty: 'intermediate',
                prerequisites: ['kinematics', 'vectors', 'algebra']
            },

            energy_work_power: {
                patterns: [
                    /energy|work|power/i,
                    /kinetic.*energy|potential.*energy/i,
                    /conservation.*energy|work.*energy.*theorem/i,
                    /elastic|spring.*energy/i
                ],
                handler: this.handleEnergyWorkPower.bind(this),
                name: 'Energy, Work and Power',
                category: 'mechanics',
                description: 'Energy transformations, work-energy theorem and power',
                difficulty: 'intermediate',
                prerequisites: ['kinematics', 'dynamics', 'algebra']
            },

            momentum_collisions: {
                patterns: [
                    /momentum|impulse/i,
                    /collision|elastic.*collision|inelastic/i,
                    /conservation.*momentum/i,
                    /restitution|newton.*cradle/i
                ],
                handler: this.handleMomentumCollisions.bind(this),
                name: 'Momentum and Collisions',
                category: 'mechanics',
                description: 'Linear momentum, impulse, and collision types',
                difficulty: 'intermediate',
                prerequisites: ['dynamics', 'kinematics', 'algebra']
            },

            circular_motion: {
                patterns: [
                    /circular.*motion|centripetal/i,
                    /angular.*velocity|angular.*acceleration/i,
                    /rotational.*kinematics/i,
                    /period|frequency.*rotation/i
                ],
                handler: this.handleCircularMotion.bind(this),
                name: 'Circular and Rotational Motion',
                category: 'mechanics',
                description: 'Motion in circles and rotational kinematics',
                difficulty: 'advanced',
                prerequisites: ['kinematics', 'dynamics', 'trigonometry']
            },

            oscillations: {
                patterns: [
                    /oscillation|simple.*harmonic/i,
                    /pendulum|spring.*mass/i,
                    /SHM|periodic.*motion/i,
                    /amplitude|frequency|period/i
                ],
                handler: this.handleOscillations.bind(this),
                name: 'Oscillations and Simple Harmonic Motion',
                category: 'mechanics',
                description: 'Periodic motion, springs, and pendulums',
                difficulty: 'advanced',
                prerequisites: ['dynamics', 'energy', 'trigonometry']
            }
        };
    }

    initializeMechanicsLessons() {
        this.lessons = {
            kinematics: {
                title: "Kinematics: Describing Motion in One and Two Dimensions",
                concepts: [
                    "Displacement is a vector quantity describing change in position",
                    "Velocity is the rate of change of displacement",
                    "Acceleration is the rate of change of velocity",
                    "The SUVAT equations describe uniformly accelerated motion",
                    "Projectile motion combines horizontal uniform velocity and vertical free fall"
                ],
                theory: "Kinematics describes how objects move without asking why they move. It uses mathematical relationships between displacement, velocity, acceleration, and time. Mastering kinematics is the foundation for all of classical mechanics.",
                keyDefinitions: {
                    "Displacement (s)": "Change in position; a vector quantity (magnitude and direction), measured in metres (m)",
                    "Distance": "Total path length travelled; a scalar quantity, measured in metres (m)",
                    "Speed": "Rate of change of distance; scalar, measured in m/s",
                    "Velocity (v)": "Rate of change of displacement; vector, measured in m/s",
                    "Acceleration (a)": "Rate of change of velocity; vector, measured in m/s²",
                    "Uniform Acceleration": "Constant rate of change of velocity",
                    "Free Fall": "Motion under gravity alone (g ≈ 9.81 m/s² downward)",
                    "Projectile": "Object moving under gravity with initial horizontal velocity"
                },
                suvatEquations: {
                    title: "The SUVAT Equations (Uniform Acceleration Only)",
                    variables: {
                        s: "displacement (m)",
                        u: "initial velocity (m/s)",
                        v: "final velocity (m/s)",
                        a: "acceleration (m/s²)",
                        t: "time (s)"
                    },
                    equations: {
                        "v = u + at": "Links v, u, a, t (no s)",
                        "s = ut + ½at²": "Links s, u, a, t (no v)",
                        "s = vt − ½at²": "Links s, v, a, t (no u)",
                        "v² = u² + 2as": "Links v, u, a, s (no t)",
                        "s = ½(u + v)t": "Links s, u, v, t (no a)"
                    },
                    notes: "Only valid when acceleration is constant. Always define positive direction before solving."
                },
                graphicalAnalysis: {
                    displacementTime: {
                        gradient: "Velocity",
                        horizontal: "At rest",
                        straightLine: "Constant velocity",
                        curve: "Changing velocity (acceleration)"
                    },
                    velocityTime: {
                        gradient: "Acceleration",
                        areaUnder: "Displacement",
                        horizontal: "Constant velocity (zero acceleration)",
                        straightLine: "Uniform acceleration"
                    },
                    accelerationTime: {
                        areaUnder: "Change in velocity",
                        horizontal: "Uniform acceleration"
                    }
                },
                projectileMotion: {
                    principles: [
                        "Horizontal and vertical motions are independent",
                        "Horizontal: uniform velocity (no air resistance), aₓ = 0",
                        "Vertical: uniform acceleration due to gravity, aᵧ = −g",
                        "Time of flight is the same for both components"
                    ],
                    equations: {
                        horizontal: "x = u·cos(θ)·t",
                        verticalPosition: "y = u·sin(θ)·t − ½gt²",
                        verticalVelocity: "vᵧ = u·sin(θ) − gt",
                        range: "R = u²·sin(2θ)/g (for level ground)",
                        maxHeight: "H = u²·sin²(θ)/(2g)"
                    },
                    maximumRange: "Maximum range achieved at θ = 45°"
                },
                relativeVelocity: {
                    definition: "Velocity of object A relative to object B = vA − vB",
                    applications: ["Riverboat problems", "Airplane and wind", "Two moving vehicles"]
                },
                applications: [
                    "Vehicle braking distances and road safety",
                    "Ballistics and projectile trajectory",
                    "Sports science (ball trajectories, running)",
                    "Space mission trajectory planning",
                    "Engineering design of ramps and launches"
                ]
            },

            dynamics: {
                title: "Dynamics: Newton's Laws of Motion and Forces",
                concepts: [
                    "Newton's First Law: objects maintain state unless acted on by net force",
                    "Newton's Second Law: F = ma relates net force, mass, and acceleration",
                    "Newton's Third Law: every action has equal and opposite reaction",
                    "Free body diagrams isolate and identify all forces on an object",
                    "Friction opposes relative motion between surfaces"
                ],
                theory: "Dynamics explains why objects move the way they do. Isaac Newton's three laws of motion, published in Principia Mathematica (1687), form the cornerstone of classical mechanics and remain central to physics and engineering.",
                keyDefinitions: {
                    "Force (F)": "A push or pull; vector quantity measured in Newtons (N = kg·m/s²)",
                    "Mass (m)": "Measure of inertia; scalar, measured in kg",
                    "Weight (W)": "Gravitational force on an object; W = mg, measured in N",
                    "Normal Force (N)": "Contact force perpendicular to surface",
                    "Tension (T)": "Force transmitted through a string, rope, or cable",
                    "Friction (f)": "Force opposing relative motion between surfaces",
                    "Inertia": "Tendency of an object to resist change in motion",
                    "Free Body Diagram": "Diagram showing all forces acting on an isolated object"
                },
                newtonLaws: {
                    first: {
                        statement: "An object at rest stays at rest, and an object in motion stays in motion at constant velocity, unless acted upon by a net external force",
                        alternativeName: "Law of Inertia",
                        implication: "Net force = 0 ⟹ acceleration = 0 (equilibrium)",
                        examples: ["Passengers lurching forward when car brakes", "Tablecloth trick", "Objects floating in space"]
                    },
                    second: {
                        statement: "The net force on an object equals the product of its mass and acceleration",
                        equation: "ΣF = ma",
                        vectorForm: "ΣF⃗ = ma⃗",
                        components: "ΣFₓ = maₓ,  ΣFᵧ = maᵧ",
                        unit: "1 Newton = 1 kg·m/s²",
                        examples: ["Calculating acceleration of a pushed box", "Atwood machine", "Inclined plane"]
                    },
                    third: {
                        statement: "For every action force, there is an equal and opposite reaction force",
                        clarification: "Action-reaction pairs act on DIFFERENT objects",
                        examples: ["Rocket thrust and exhaust", "Walking (foot pushes back on ground, ground pushes forward on foot)", "Recoil of a gun"]
                    }
                },
                frictionTypes: {
                    static: {
                        definition: "Friction that prevents relative motion between stationary surfaces",
                        equation: "fs ≤ μs·N",
                        note: "Can be up to maximum value before motion begins"
                    },
                    kinetic: {
                        definition: "Friction between surfaces in relative motion",
                        equation: "fk = μk·N",
                        note: "Usually less than maximum static friction"
                    },
                    coefficients: {
                        definition: "μ = friction force / normal force",
                        typical: "Steel on steel: μk ≈ 0.57; rubber on dry concrete: μk ≈ 0.7"
                    }
                },
                inclinedPlane: {
                    components: {
                        parallel: "mg·sin(θ) — component of weight along slope",
                        perpendicular: "mg·cos(θ) — component of weight into slope",
                        normal: "N = mg·cos(θ) (no acceleration perpendicular to slope)"
                    },
                    equation: "ma = mg·sin(θ) − μk·mg·cos(θ)"
                },
                applications: [
                    "Vehicle dynamics and braking",
                    "Structural engineering (bridges, buildings)",
                    "Sports equipment design",
                    "Rocket propulsion",
                    "Understanding everyday motion"
                ]
            },

            energy_work_power: {
                title: "Energy, Work and Power: Energy Transformations in Mechanical Systems",
                concepts: [
                    "Work is done when a force causes displacement in the direction of the force",
                    "Kinetic energy is energy due to motion",
                    "Gravitational potential energy is energy due to position in a gravitational field",
                    "The work-energy theorem: net work done equals change in kinetic energy",
                    "Conservation of mechanical energy holds when no non-conservative forces act",
                    "Power is the rate of doing work"
                ],
                theory: "Energy is a fundamental concept in physics. The ability to do work is conserved in isolated systems, and understanding energy transformations allows prediction and analysis of mechanical systems from atomic to astronomical scales.",
                keyDefinitions: {
                    "Work (W)": "W = F·d·cos(θ); work done by a force over a displacement; scalar, measured in Joules (J)",
                    "Kinetic Energy (KE)": "KE = ½mv²; energy of motion; scalar, measured in Joules (J)",
                    "Gravitational Potential Energy (GPE)": "GPE = mgh; energy due to height in gravitational field; measured in Joules (J)",
                    "Elastic Potential Energy (EPE)": "EPE = ½kx²; energy stored in a deformed spring; measured in Joules (J)",
                    "Mechanical Energy (ME)": "ME = KE + PE; total of kinetic and potential energy",
                    "Work-Energy Theorem": "W_net = ΔKE = KE_final − KE_initial",
                    "Conservation of Energy": "Energy cannot be created or destroyed, only transformed",
                    "Power (P)": "P = W/t = F·v; rate of doing work; measured in Watts (W = J/s)",
                    "Efficiency": "η = (useful output energy / total input energy) × 100%"
                },
                workCalculation: {
                    constantForce: "W = F·d·cos(θ), where θ is angle between F and d",
                    variableForce: "W = area under F-x graph",
                    specialCases: {
                        perpendicularForce: "W = 0 (centripetal force, normal force)",
                        opposingForce: "W = negative (friction, air resistance)",
                        parallelForce: "W = F·d (maximum work)"
                    }
                },
                conservationOfEnergy: {
                    closedSystem: "Total mechanical energy constant: KE₁ + PE₁ = KE₂ + PE₂",
                    withFriction: "KE₁ + PE₁ = KE₂ + PE₂ + W_friction",
                    spring: "½mv² + mgh + ½kx² = constant"
                },
                springForce: {
                    hookesLaw: "F = −kx (restoring force)",
                    elasticPE: "EPE = ½kx²",
                    workBySpring: "W = −½kx²",
                    springConstant: "k measured in N/m; stiffer spring = higher k"
                },
                powerForms: {
                    fromWork: "P = W/t",
                    fromForce: "P = F·v (force × velocity)",
                    average: "P_avg = ΔE/Δt",
                    unit: "1 Watt = 1 J/s; 1 horsepower ≈ 746 W"
                },
                applications: [
                    "Roller coaster design",
                    "Hydroelectric power generation",
                    "Vehicle fuel efficiency",
                    "Sports biomechanics",
                    "Engineering design of machines"
                ]
            },

            momentum_collisions: {
                title: "Momentum, Impulse and Collisions",
                concepts: [
                    "Momentum is the product of mass and velocity",
                    "Impulse equals the change in momentum",
                    "Conservation of momentum: total momentum is constant in a closed system",
                    "Elastic collisions conserve both momentum and kinetic energy",
                    "Inelastic collisions conserve momentum but not kinetic energy"
                ],
                theory: "Momentum and its conservation are among the most powerful tools in mechanics. The law of conservation of momentum follows directly from Newton's Third Law and applies even when detailed forces are unknown, making it invaluable in collision analysis.",
                keyDefinitions: {
                    "Momentum (p)": "p = mv; vector quantity; measured in kg·m/s",
                    "Impulse (J)": "J = FΔt = Δp; change in momentum; vector, measured in N·s or kg·m/s",
                    "Conservation of Momentum": "In a closed system with no external forces, total momentum is constant",
                    "Elastic Collision": "Kinetic energy and momentum both conserved",
                    "Inelastic Collision": "Momentum conserved, kinetic energy not conserved",
                    "Perfectly Inelastic": "Objects stick together after collision; maximum KE loss",
                    "Coefficient of Restitution (e)": "e = relative speed of separation / relative speed of approach",
                    "Centre of Mass": "Point at which total mass of system can be considered to act"
                },
                collisionTypes: {
                    elastic: {
                        conditions: "KE conserved, momentum conserved",
                        equations: [
                            "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                            "½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂²"
                        ],
                        coefficient: "e = 1",
                        examples: "Billiard balls, gas molecule collisions"
                    },
                    inelastic: {
                        conditions: "Momentum conserved, KE not conserved",
                        equation: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                        energyLoss: "ΔKE = KE_initial − KE_final (converted to heat, sound, deformation)",
                        coefficient: "0 < e < 1",
                        examples: "Car crashes, clay collisions"
                    },
                    perfectlyInelastic: {
                        conditions: "Objects stick together; most KE lost",
                        equation: "m₁u₁ + m₂u₂ = (m₁ + m₂)v_final",
                        coefficient: "e = 0",
                        examples: "Football tackle, coupling of train carriages"
                    }
                },
                impulseMomentum: {
                    theorem: "J = Δp = mv − mu",
                    graphical: "Impulse = area under F-t graph",
                    applications: [
                        "Extending collision time reduces peak force (airbags, crumple zones)",
                        "Sports: catching a ball by moving hands back",
                        "Rocket propulsion (continuous impulse)"
                    ]
                },
                explosions: {
                    description: "Objects initially at rest fly apart; total initial momentum = 0",
                    conservation: "m₁v₁ + m₂v₂ = 0, so v₁ and v₂ are in opposite directions",
                    examples: "Gunshot recoil, rocket launch, nuclear fission"
                },
                applications: [
                    "Vehicle safety design (crumple zones, airbags)",
                    "Ballistics and forensics",
                    "Rocket and jet propulsion",
                    "Sports analysis",
                    "Nuclear physics (particle collisions)"
                ]
            },

            circular_motion: {
                title: "Circular and Rotational Motion",
                concepts: [
                    "Objects moving in circles have centripetal acceleration directed toward the centre",
                    "Centripetal force is the net force required to maintain circular motion",
                    "Angular quantities (ω, α, θ) are analogous to linear quantities",
                    "Torque is the rotational equivalent of force",
                    "Moment of inertia is the rotational analogue of mass"
                ],
                theory: "Circular and rotational motion extends linear mechanics to curved paths and spinning objects. The concepts developed here are essential for understanding planetary orbits, spinning machinery, gyroscopes, and many everyday devices.",
                keyDefinitions: {
                    "Angular Displacement (θ)": "Angle swept; measured in radians (rad)",
                    "Angular Velocity (ω)": "ω = Δθ/Δt; rate of angular displacement; rad/s",
                    "Angular Acceleration (α)": "α = Δω/Δt; rate of change of ω; rad/s²",
                    "Period (T)": "Time for one complete revolution; T = 2π/ω; measured in seconds",
                    "Frequency (f)": "f = 1/T = ω/(2π); revolutions per second; measured in Hz",
                    "Centripetal Acceleration (aₒ)": "aₒ = v²/r = ω²r; directed toward centre",
                    "Centripetal Force (Fₒ)": "Fₒ = mv²/r = mω²r; net force toward centre",
                    "Torque (τ)": "τ = r × F = rF·sin(θ); rotational effect of a force; N·m",
                    "Moment of Inertia (I)": "I = Σmr²; rotational analogue of mass; kg·m²"
                },
                linearRotationalAnalogy: {
                    displacement: "s  ↔  θ",
                    velocity: "v  ↔  ω",
                    acceleration: "a  ↔  α",
                    mass: "m  ↔  I",
                    force: "F  ↔  τ",
                    momentum: "p = mv  ↔  L = Iω",
                    kineticEnergy: "½mv²  ↔  ½Iω²",
                    newtonSecond: "F = ma  ↔  τ = Iα"
                },
                rotationalKinematics: {
                    equations: {
                        "ω = ω₀ + αt": "Analogue of v = u + at",
                        "θ = ω₀t + ½αt²": "Analogue of s = ut + ½at²",
                        "ω² = ω₀² + 2αθ": "Analogue of v² = u² + 2as",
                        "θ = ½(ω₀ + ω)t": "Analogue of s = ½(u+v)t"
                    }
                },
                linearToAngular: {
                    "v = rω": "Tangential speed from angular velocity",
                    "aₜ = rα": "Tangential acceleration from angular acceleration",
                    "aₒ = v²/r = ω²r": "Centripetal acceleration"
                },
                momentOfInertia: {
                    solidSphere: "I = ⅖mr²",
                    hollowSphere: "I = ⅔mr²",
                    solidCylinder: "I = ½mr²",
                    hollowCylinder: "I = mr²",
                    rod_centre: "I = (1/12)mL²",
                    rod_end: "I = (1/3)mL²"
                },
                applications: [
                    "Planetary orbits and satellite motion",
                    "Car cornering and banking of roads",
                    "Centrifuges in medical/industrial use",
                    "Gyroscopes and navigation",
                    "Engineering of rotating machinery"
                ]
            },

            oscillations: {
                title: "Oscillations and Simple Harmonic Motion (SHM)",
                concepts: [
                    "SHM occurs when restoring force is proportional to displacement",
                    "Displacement, velocity, and acceleration in SHM vary sinusoidally",
                    "Energy in SHM continuously converts between KE and PE",
                    "A simple pendulum approximates SHM for small angles",
                    "Resonance occurs when driving frequency equals natural frequency"
                ],
                theory: "Simple harmonic motion is one of the most important and ubiquitous phenomena in physics. From atomic vibrations to bridges and clocks, SHM underlies a vast range of systems. Understanding it is essential for waves, acoustics, optics, and quantum mechanics.",
                keyDefinitions: {
                    "Simple Harmonic Motion (SHM)": "Oscillatory motion where restoring force ∝ displacement: F = −kx",
                    "Amplitude (A)": "Maximum displacement from equilibrium; measured in metres",
                    "Period (T)": "Time for one complete oscillation; measured in seconds",
                    "Frequency (f)": "Number of oscillations per second; f = 1/T; measured in Hz",
                    "Angular Frequency (ω)": "ω = 2πf = 2π/T; measured in rad/s",
                    "Phase": "Stage of oscillation cycle; measured in radians",
                    "Equilibrium Position": "Position of zero net force",
                    "Resonance": "Large amplitude oscillation when driving frequency ≈ natural frequency",
                    "Damping": "Reduction in amplitude due to energy dissipation"
                },
                shmEquations: {
                    displacement: "x = A·cos(ωt + φ)  or  x = A·sin(ωt)",
                    velocity: "v = −Aω·sin(ωt)  or  v = ±ω√(A² − x²)",
                    acceleration: "a = −ω²x  (defines SHM)",
                    maxVelocity: "v_max = Aω (at x = 0)",
                    maxAcceleration: "a_max = Aω² (at x = ±A)"
                },
                energyInSHM: {
                    kinetic: "KE = ½mω²(A² − x²)",
                    potential: "PE = ½mω²x²",
                    total: "E = ½mω²A² = constant",
                    note: "At x = 0: all KE; at x = ±A: all PE"
                },
                systems: {
                    springMass: {
                        period: "T = 2π√(m/k)",
                        frequency: "f = (1/2π)√(k/m)",
                        note: "Independent of amplitude"
                    },
                    simplePendulum: {
                        period: "T = 2π√(L/g)",
                        frequency: "f = (1/2π)√(g/L)",
                        note: "Valid for small angles (θ < ~15°); independent of mass and amplitude"
                    }
                },
                dampingTypes: {
                    underdamped: "Oscillates with decreasing amplitude (most common)",
                    criticallyDamped: "Returns to equilibrium fastest without oscillating",
                    overdamped: "Returns to equilibrium slowly without oscillating"
                },
                resonance: {
                    definition: "Occurs when driving frequency = natural frequency of system",
                    effects: "Amplitude increases dramatically",
                    examples: ["Tacoma Narrows Bridge collapse", "Tuning a radio", "MRI machines", "Glass breaking with sound"]
                },
                applications: [
                    "Clock mechanisms (pendulum, quartz oscillators)",
                    "Musical instruments and acoustics",
                    "Seismology and earthquake engineering",
                    "Medical imaging (MRI, ultrasound)",
                    "Suspension system design"
                ]
            }
        };
    }

    initializeMechanicsExperiments() {
        this.mechanicsExperiments = {

            // ========================================
            // EXPERIMENT 1: GALILEO'S FREE FALL
            // ========================================

            galileo_free_fall: {
                name: "Galileo's Free Fall Experiment — Uniform Acceleration Under Gravity",
                relatedTopics: ['kinematics', 'dynamics'],
                category: 'kinematics',
                historicalBackground: {
                    scientist: "Galileo Galilei",
                    year: "1604–1609",
                    location: "Pisa and Padua, Italy",
                    discovery: "All objects fall with the same constant acceleration regardless of mass",
                    observation: "Contradicted Aristotle's belief that heavier objects fall faster",
                    method: "Galileo used inclined planes to slow acceleration and measure it accurately; may have also dropped objects from the Leaning Tower of Pisa (disputed)",
                    significance: "First quantitative study of kinematics; established the experimental method in physics",
                    quote: "The motion of falling bodies is uniformly accelerated",
                    contribution: "Showed s ∝ t² for free fall; laid foundation for Newton's laws"
                },
                labExperiment: {
                    title: "Measuring g Using a Free-Fall Timer or Light Gates",
                    hypothesis: "If free fall is uniformly accelerated, the acceleration of objects of different masses should be the same and equal to g ≈ 9.81 m/s²",
                    purpose: "Determine the acceleration due to gravity experimentally and verify it is constant and independent of mass",
                    variables: {
                        independent: "Height of drop (h)",
                        dependent: "Time of fall (t); calculated acceleration (g)",
                        controlled: ["Mass of object (tested at different values)", "Drop technique (same release method)", "Measurement location"]
                    },
                    materials: [
                        "Electromagnet or clamp to hold and release ball bearing",
                        "Ball bearings of different masses (10 g, 50 g, 100 g)",
                        "Electronic millisecond timer connected to electromagnet and trapdoor",
                        "Metre rule or measuring tape",
                        "Clamp stand and retort",
                        "Optional: light gates and datalogger",
                        "Optional: motion sensor / ultrasonic ranger",
                        "Plumb line (to ensure vertical drop)"
                    ],
                    safetyPrecautions: [
                        "Ensure fall area is clear of hands and equipment",
                        "Use a soft landing pad to catch ball bearing",
                        "Secure clamp stand so it cannot topple",
                        "Disconnect electromagnet power when not in use"
                    ],
                    procedure: [
                        "Set up electromagnet at top of clamp stand; connect to timer",
                        "Set up trapdoor or light gate at base; connect to same timer",
                        "Use plumb line to ensure drop is vertical",
                        "Measure height h from bottom of ball to trapdoor/gate precisely",
                        "Switch on electromagnet; place ball bearing against it",
                        "Press reset on timer; release ball by switching off electromagnet",
                        "Record time t from timer",
                        "Repeat 5 times for each height; take mean time",
                        "Repeat for at least 5 different heights (e.g., 0.2 m, 0.4 m, 0.6 m, 0.8 m, 1.0 m)",
                        "Repeat for different mass ball bearings at same heights"
                    ],
                    dataAnalysis: {
                        equation: "h = ½gt²  ⟹  g = 2h/t²",
                        graphMethod: "Plot h vs t²; gradient = g/2, so g = 2 × gradient",
                        linearisation: "Since h = (g/2)t², a graph of h against t² is a straight line through origin",
                        expectedGradient: "g/2 ≈ 4.905 m/s²"
                    },
                    dataTable: [
                        ["Height h (m)", "t₁ (s)", "t₂ (s)", "t₃ (s)", "t₄ (s)", "t₅ (s)", "Mean t (s)", "t² (s²)", "g = 2h/t² (m/s²)"],
                        ["0.20", "", "", "", "", "", "", "", ""],
                        ["0.40", "", "", "", "", "", "", "", ""],
                        ["0.60", "", "", "", "", "", "", "", ""],
                        ["0.80", "", "", "", "", "", "", "", ""],
                        ["1.00", "", "", "", "", "", "", "", ""]
                    ],
                    expectedResults: {
                        acceleration: "g ≈ 9.81 m/s² for all heights and all masses",
                        massIndependence: "Different mass ball bearings give same g within experimental error",
                        graphShape: "h vs t² gives straight line through origin with gradient ≈ 4.9"
                    },
                    errorAnalysis: {
                        systematicErrors: [
                            "Reaction time if using manual stopwatch (eliminated by electronic timer)",
                            "Air resistance (significant for light/large objects)",
                            "Height measurement uncertainty"
                        ],
                        randomErrors: [
                            "Timer triggering inconsistency",
                            "Ball not released cleanly from electromagnet"
                        ],
                        improvements: [
                            "Use electronic timer to eliminate reaction time",
                            "Use dense, small ball bearings to minimise air resistance",
                            "Repeat and average to reduce random error",
                            "Use video analysis at high frame rate"
                        ]
                    },
                    conclusions: [
                        "Free fall is uniformly accelerated motion",
                        "Acceleration due to gravity g ≈ 9.81 m/s² at Earth's surface",
                        "g is independent of the mass of the falling object",
                        "s ∝ t² confirms uniform acceleration (Galileo's result)"
                    ],
                    realWorldApplications: [
                        "Calculating safe falling distances in construction",
                        "Designing parachutes and safety equipment",
                        "Ballistics and projectile trajectory",
                        "Calibrating accelerometers in smartphones",
                        "Understanding g-forces in aircraft and spacecraft"
                    ],
                    extensions: [
                        "Measure g using a simple pendulum and compare",
                        "Investigate effect of air resistance using different shaped objects",
                        "Use video analysis software (e.g., Tracker) to analyse motion",
                        "Measure g at different locations and compare"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: NEWTON'S SECOND LAW
            // ========================================

            newton_second_law: {
                name: "Newton's Second Law — F = ma Investigation (Trolley and Pulley)",
                relatedTopics: ['dynamics', 'kinematics'],
                category: 'dynamics',
                historicalBackground: {
                    scientist: "Isaac Newton",
                    year: "1687",
                    publication: "Philosophiæ Naturalis Principia Mathematica",
                    law: "The acceleration of a body is directly proportional to the net force and inversely proportional to its mass",
                    equation: "F = ma",
                    significance: "Unified terrestrial and celestial mechanics; foundation of classical physics",
                    quote: "The alteration of motion is ever proportional to the motive force impressed",
                    legacy: "Newton's laws remained unchallenged for over 200 years; still used in engineering and everyday physics"
                },
                labExperiment: {
                    title: "Investigating F = ma Using a Dynamics Trolley",
                    hypothesis: "The acceleration of a trolley is (1) directly proportional to net force when mass is constant, and (2) inversely proportional to mass when net force is constant",
                    purpose: "Verify Newton's Second Law by systematically varying force and mass",
                    variables: {
                        independent: "Applied force (varied by changing hanging masses); Total mass of trolley system",
                        dependent: "Acceleration of trolley",
                        controlled: ["Surface (same runway, compensated for friction)", "Total system mass when varying force", "Applied force when varying mass"]
                    },
                    materials: [
                        "Dynamics trolley",
                        "Smooth runway or track (with slight incline to compensate friction)",
                        "Pulley attached to end of runway",
                        "String connecting trolley to hanging masses",
                        "Set of masses (10 g, 20 g, 50 g, 100 g)",
                        "Masses to add to trolley (100 g, 200 g, 500 g)",
                        "Light gates connected to datalogger, or ticker tape timer",
                        "Metre rule",
                        "Balance (to measure mass)"
                    ],
                    safetyPrecautions: [
                        "Ensure hanging masses cannot fall on feet — use a soft landing area",
                        "Keep hands clear of trolley and string during runs",
                        "Secure runway so it cannot slide",
                        "Do not use excessively large hanging masses"
                    ],
                    procedure: [
                        "FRICTION COMPENSATION:",
                        "Tilt runway slightly until trolley moves at constant speed when given a small push",
                        "This compensates for friction; net horizontal force = applied force from hanging mass",
                        "",
                        "PART A — Varying Force (Constant Total Mass):",
                        "Load trolley with extra masses; record total mass M of trolley + extra masses",
                        "Add 10 g hanging mass; measure acceleration using light gates or ticker tape",
                        "Move masses from trolley to hanger in 10 g steps (IMPORTANT: total system mass stays constant)",
                        "Record acceleration for each force value",
                        "Repeat each measurement 3 times; take mean",
                        "",
                        "PART B — Varying Mass (Constant Force):",
                        "Keep hanging mass constant (e.g., 50 g)",
                        "Add extra masses to trolley in steps",
                        "Record acceleration for each trolley mass",
                        "Repeat each measurement 3 times; take mean"
                    ],
                    dataAnalysis: {
                        partA: {
                            graph: "Plot a vs F; expect straight line through origin",
                            gradient: "gradient = 1/M",
                            conclusion: "a ∝ F when M is constant"
                        },
                        partB: {
                            graph: "Plot a vs 1/m; expect straight line through origin",
                            alternativeGraph: "Plot a vs m; expect hyperbola",
                            gradient: "gradient of a vs 1/m = F",
                            conclusion: "a ∝ 1/m when F is constant"
                        }
                    },
                    dataTable: [
                        ["Force F (N)", "a₁ (m/s²)", "a₂ (m/s²)", "a₃ (m/s²)", "Mean a (m/s²)", "F/a (kg)"],
                        ["0.10", "", "", "", "", ""],
                        ["0.20", "", "", "", "", ""],
                        ["0.30", "", "", "", "", ""],
                        ["0.40", "", "", "", "", ""],
                        ["0.50", "", "", "", "", ""]
                    ],
                    expectedResults: {
                        partA: "a vs F is straight line through origin; gradient = 1/M",
                        partB: "a vs 1/m is straight line through origin",
                        calculated: "F/a should equal total system mass M"
                    },
                    errorAnalysis: {
                        common: [
                            "Friction not properly compensated (gives false low acceleration)",
                            "String not parallel to runway",
                            "Hanging mass too large relative to trolley mass (approximation breaks down)",
                            "Mass of string ignored"
                        ],
                        note: "Hanging mass m should be much less than trolley mass M for F_net ≈ mg to be valid"
                    },
                    conclusions: [
                        "Acceleration is directly proportional to net force (constant mass): a ∝ F",
                        "Acceleration is inversely proportional to mass (constant force): a ∝ 1/m",
                        "Combined result: F = ma (Newton's Second Law verified)",
                        "F/a ratio equals total system mass, confirming proportionality constant is mass"
                    ],
                    realWorldApplications: [
                        "Vehicle acceleration and braking calculations",
                        "Rocket thrust requirements",
                        "Elevator design and passenger comfort",
                        "Sports biomechanics (sprinting, jumping)",
                        "Crash testing and safety engineering"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: CONSERVATION OF ENERGY
            // ========================================

            conservation_of_energy: {
                name: "Conservation of Mechanical Energy — Roller and Ramp Experiment",
                relatedTopics: ['energy_work_power', 'kinematics'],
                category: 'energy',
                historicalBackground: {
                    scientist: "Gottfried Wilhelm Leibniz and Émilie du Châtelet",
                    year: "1686 (Leibniz), 1740 (du Châtelet)",
                    discovery: "Leibniz introduced 'vis viva' (living force) ∝ mv²; du Châtelet demonstrated kinetic energy ∝ v² through experiments dropping balls into clay",
                    significance: "Foundation of energy conservation; challenged Descartes' momentum-only view",
                    modernForm: "Formulated as conservation of energy by Helmholtz (1847)",
                    quote: "The quantity of motion (vis viva) is conserved in elastic collisions",
                    contribution: "Established that energy, not just momentum, is a conserved quantity"
                },
                labExperiment: {
                    title: "Verifying Conservation of Mechanical Energy on a Ramp",
                    hypothesis: "If mechanical energy is conserved, then the loss in gravitational potential energy as an object rolls down a ramp will equal the gain in kinetic energy",
                    purpose: "Verify conservation of mechanical energy by comparing GPE lost and KE gained for a rolling object",
                    variables: {
                        independent: "Height of ramp (h)",
                        dependent: "Speed at bottom of ramp (v)",
                        controlled: ["Mass of object", "Ramp angle", "Surface conditions", "Same object throughout"]
                    },
                    materials: [
                        "Smooth ramp or inclined board (~1 m long)",
                        "Solid cylinder or ball bearing (known mass)",
                        "Ruler and protractor",
                        "Light gate at base of ramp connected to timer/datalogger",
                        "Card of known width to interrupt light gate (measure speed)",
                        "Balance (to measure mass)",
                        "Clamp and stand to support ramp",
                        "Spirit level"
                    ],
                    safetyPrecautions: [
                        "Ensure ramp is securely clamped and cannot slide",
                        "Use a catch box at base to stop rolling object",
                        "Keep clear of rolling object path"
                    ],
                    procedure: [
                        "Measure mass m of the rolling object using balance",
                        "Set ramp at a chosen angle; measure vertical height h from bottom to release point",
                        "Set up light gate at bottom of ramp; measure width of interrupt card",
                        "Release object from rest at height h",
                        "Record time t for card to pass through light gate",
                        "Calculate speed: v = card width / t",
                        "Repeat 3 times at each height; take mean v",
                        "Repeat for at least 5 different heights",
                        "Calculate GPE lost = mgh and KE gained = ½mv² for each"
                    ],
                    dataAnalysis: {
                        gpeFormula: "GPE = mgh",
                        keFormula: "KE = ½mv²",
                        expectedResult: "GPE lost ≈ KE gained",
                        graphMethod: "Plot v² vs h; expect straight line through origin; gradient = 2g (if no rotational KE)",
                        rollingNote: "For rolling objects, some GPE → rotational KE; gradient = 2g × (M/(M + I/r²)) < 2g"
                    },
                    dataTable: [
                        ["Height h (m)", "v₁ (m/s)", "v₂ (m/s)", "v₃ (m/s)", "Mean v (m/s)", "v² (m²/s²)", "GPE = mgh (J)", "KE = ½mv² (J)", "% Difference"],
                        ["0.10", "", "", "", "", "", "", "", ""],
                        ["0.20", "", "", "", "", "", "", "", ""],
                        ["0.30", "", "", "", "", "", "", "", ""],
                        ["0.40", "", "", "", "", "", "", "", ""],
                        ["0.50", "", "", "", "", "", "", "", ""]
                    ],
                    expectedResults: {
                        ideal: "KE gained = GPE lost exactly",
                        realistic: "KE gained slightly less than GPE lost (friction, rolling resistance, air resistance)",
                        graph: "v² vs h is straight line through origin; gradient close to 2g"
                    },
                    errorAnalysis: {
                        sources: [
                            "Friction converts some mechanical energy to heat",
                            "Rolling object has rotational KE (not accounted if using sliding formula)",
                            "Height measurement uncertainty",
                            "Speed measurement uncertainty (card width, timing)"
                        ],
                        improvements: [
                            "Use a sliding (not rolling) object on low-friction surface",
                            "Use motion sensor for continuous velocity measurement",
                            "Account for rotational KE using I for the object"
                        ]
                    },
                    conclusions: [
                        "Loss in GPE approximately equals gain in KE (conservation of energy)",
                        "Any discrepancy is due to energy dissipated by friction and rolling",
                        "v² ∝ h confirming v = √(2gh) for frictionless sliding",
                        "Energy cannot be created or destroyed, only transformed"
                    ],
                    realWorldApplications: [
                        "Roller coaster height and speed design",
                        "Hydroelectric power station energy calculations",
                        "Ski jump trajectory planning",
                        "Vehicle fuel efficiency (reducing friction losses)",
                        "Pendulum clock mechanism"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: CONSERVATION OF MOMENTUM
            // ========================================

            conservation_of_momentum: {
                name: "Newton's Cradle and Air Track — Conservation of Momentum in Collisions",
                relatedTopics: ['momentum_collisions', 'dynamics'],
                category: 'momentum',
                historicalBackground: {
                    scientist: "John Wallis, Christopher Wren, Christiaan Huygens",
                    year: "1668",
                    discovery: "All three independently presented papers to the Royal Society on collision laws",
                    wallis: "Formulated conservation of momentum for inelastic collisions",
                    wren: "Showed elastic collision laws for equal masses",
                    huygens: "Developed complete theory of elastic collisions",
                    significance: "Established momentum as the conserved quantity in collisions; foundation of collision mechanics",
                    modernContext: "Conservation of momentum follows from Newton's Third Law and is one of physics' most universal conservation laws"
                },
                labExperiment: {
                    title: "Investigating Conservation of Momentum Using an Air Track",
                    hypothesis: "The total momentum of two gliders before a collision will equal the total momentum after the collision",
                    purpose: "Verify conservation of linear momentum for elastic and inelastic collisions",
                    variables: {
                        independent: "Type of collision (elastic/inelastic); mass ratio of gliders",
                        dependent: "Velocities before and after collision; total momentum",
                        controlled: ["Air track level", "Glider masses (measured)", "Timing method"]
                    },
                    materials: [
                        "Linear air track (to minimise friction)",
                        "Two air track gliders of different masses",
                        "Elastic buffers (rubber bands) for elastic collisions",
                        "Velcro pads or sticky putty for inelastic collisions",
                        "Two light gates connected to datalogger",
                        "Interrupt cards of known width attached to gliders",
                        "Balance (to measure glider masses)",
                        "Ruler",
                        "Air supply for track"
                    ],
                    safetyPrecautions: [
                        "Keep fingers clear of moving gliders",
                        "Ensure light gate connections are tidy and not a trip hazard",
                        "Do not exceed air supply pressure"
                    ],
                    procedure: [
                        "Level the air track using a spirit level; switch on air supply",
                        "Measure masses m₁ and m₂ of both gliders with balance",
                        "Attach interrupt cards of known width to both gliders",
                        "Position light gate 1 to measure speed of glider 1 before collision",
                        "Position light gate 2 to measure speed after collision",
                        "",
                        "ELASTIC COLLISION:",
                        "Attach elastic bumpers to gliders",
                        "Push glider 1 towards stationary glider 2; record both initial and final speeds",
                        "Calculate: p_before = m₁u₁, p_after = m₁v₁ + m₂v₂",
                        "Also check KE: KE_before = ½m₁u₁², KE_after = ½m₁v₁² + ½m₂v₂²",
                        "",
                        "INELASTIC COLLISION:",
                        "Replace bumpers with velcro; gliders stick together on collision",
                        "Push glider 1; measure u₁ before and v (combined) after",
                        "Calculate: p_before = m₁u₁, p_after = (m₁ + m₂)v",
                        "",
                        "Repeat each scenario 5 times; vary initial speed"
                    ],
                    dataAnalysis: {
                        elastic: {
                            momentumBefore: "p_i = m₁u₁ + m₂u₂",
                            momentumAfter: "p_f = m₁v₁ + m₂v₂",
                            keBefore: "KE_i = ½m₁u₁² + ½m₂u₂²",
                            keAfter: "KE_f = ½m₁v₁² + ½m₂v₂²",
                            check: "p_i ≈ p_f and KE_i ≈ KE_f"
                        },
                        inelastic: {
                            momentumBefore: "p_i = m₁u₁",
                            momentumAfter: "p_f = (m₁ + m₂)v",
                            keComparison: "KE_f < KE_i (energy lost to deformation/heat)"
                        }
                    },
                    dataTable: [
                        ["Run", "m₁ (kg)", "m₂ (kg)", "u₁ (m/s)", "u₂ (m/s)", "v₁ (m/s)", "v₂ (m/s)", "p_before (kg·m/s)", "p_after (kg·m/s)", "% Difference"],
                        ["Elastic 1", "", "", "", "0", "", "", "", "", ""],
                        ["Elastic 2", "", "", "", "0", "", "", "", "", ""],
                        ["Inelastic 1", "", "", "", "0", "", "(sticks)", "", "", ""],
                        ["Inelastic 2", "", "", "", "0", "", "(sticks)", "", "", ""]
                    ],
                    expectedResults: {
                        momentum: "Total momentum conserved in both elastic and inelastic collisions (within ~5%)",
                        energy: "KE conserved in elastic; KE not conserved in inelastic (loss to heat/sound/deformation)"
                    },
                    conclusions: [
                        "Total momentum is conserved in both elastic and inelastic collisions",
                        "Kinetic energy is conserved only in (approximately) elastic collisions",
                        "Coefficient of restitution e ≈ 1 for elastic, e < 1 for inelastic collisions",
                        "Small discrepancies due to residual air track friction and measurement error"
                    ],
                    realWorldApplications: [
                        "Vehicle crash investigation and reconstruction",
                        "Design of crumple zones and safety features",
                        "Ballistics and forensic science",
                        "Particle physics collision experiments",
                        "Billiards and snooker shot analysis"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: SIMPLE PENDULUM
            // ========================================

            simple_pendulum_shm: {
                name: "The Simple Pendulum — Measuring g and Investigating SHM",
                relatedTopics: ['oscillations', 'kinematics'],
                category: 'oscillations',
                historicalBackground: {
                    scientist: "Galileo Galilei and Christiaan Huygens",
                    year: "1602 (Galileo), 1659 (Huygens)",
                    discovery: "Galileo discovered isochronism of the pendulum — period independent of amplitude (for small swings); Huygens derived T = 2π√(L/g) and built first pendulum clock (1656)",
                    galileo: "Observed pendulum in Pisa Cathedral; noted period depends on length, not mass or amplitude",
                    huygens: "Derived mathematical formula; used pendulum to define a second",
                    significance: "Pendulum clocks dominated timekeeping for 300 years; pendulum used to measure g at different locations on Earth",
                    quote: "(Galileo) The pendulum swings with a constant period regardless of the arc",
                    legacy: "Led to precision timekeeping; allowed measurement of g to determine Earth's shape"
                },
                labExperiment: {
                    title: "Investigating the Simple Pendulum: Period, Length, and g",
                    hypothesis: "If T = 2π√(L/g) is correct, then T² is directly proportional to L, and the gradient of T² vs L will equal 4π²/g, allowing calculation of g",
                    purpose: "Investigate how the period of a simple pendulum depends on length, and use results to measure g",
                    variables: {
                        independent: "Length of pendulum (L)",
                        dependent: "Period of oscillation (T)",
                        controlled: ["Amplitude (kept small, <10°)", "Mass of bob (tested to verify independence)", "Location (same throughout)"]
                    },
                    materials: [
                        "Pendulum bob (100 g mass)",
                        "String (~1.5 m)",
                        "Clamp, boss, and retort stand",
                        "Ruler and metre rule",
                        "Stopwatch (precision ± 0.01 s)",
                        "Protractor (to measure release angle)",
                        "Card with slit (fiducial marker at equilibrium position)",
                        "Optional: photogate timer for automated timing"
                    ],
                    safetyPrecautions: [
                        "Ensure clamp stand is stable and cannot topple",
                        "Keep pendulum swing small to avoid hitting equipment",
                        "Do not allow pendulum to wrap around stand"
                    ],
                    procedure: [
                        "Set up pendulum; measure L from pivot to centre of bob with ruler",
                        "Place fiducial marker at equilibrium position to improve timing accuracy",
                        "Displace bob by small angle (<10°); release without pushing",
                        "Time 20 complete oscillations; record total time t₂₀",
                        "Calculate period: T = t₂₀ / 20",
                        "Repeat twice more at same length; take mean T",
                        "Change length by ~10 cm; repeat for at least 8 different lengths",
                        "Also repeat at same length with different mass bobs to test mass independence",
                        "Also repeat at same length with slightly different amplitudes to test amplitude independence"
                    ],
                    dataAnalysis: {
                        formula: "T = 2π√(L/g)  ⟹  T² = (4π²/g)·L",
                        linearisation: "T² ∝ L; plot T² vs L — expect straight line through origin",
                        gradient: "gradient = 4π²/g",
                        gCalculation: "g = 4π²/gradient",
                        expectedGradient: "4π²/9.81 ≈ 4.03 s²/m"
                    },
                    dataTable: [
                        ["Length L (m)", "t₁ (20 osc, s)", "t₂ (20 osc, s)", "t₃ (20 osc, s)", "Mean t (s)", "T = t/20 (s)", "T² (s²)"],
                        ["0.20", "", "", "", "", "", ""],
                        ["0.30", "", "", "", "", "", ""],
                        ["0.40", "", "", "", "", "", ""],
                        ["0.50", "", "", "", "", "", ""],
                        ["0.60", "", "", "", "", "", ""],
                        ["0.70", "", "", "", "", "", ""],
                        ["0.80", "", "", "", "", "", ""],
                        ["0.90", "", "", "", "", "", ""]
                    ],
                    expectedResults: {
                        graphShape: "T² vs L gives straight line through origin",
                        gradient: "≈ 4.03 s²/m, giving g ≈ 9.81 m/s²",
                        massTest: "Period does not change when mass of bob changes",
                        amplitudeTest: "Period approximately constant for small amplitudes (<15°)"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Measuring L to centre of bob (easy to measure to top instead)",
                            "Large amplitude violates small-angle approximation",
                            "Air resistance and friction at pivot (small but present)"
                        ],
                        random: [
                            "Reaction time in starting/stopping stopwatch (reduced by timing many oscillations)",
                            "Variation in release angle"
                        ],
                        improvements: [
                            "Time 20+ oscillations to reduce % timing error",
                            "Use photogate at equilibrium for automated timing",
                            "Ensure amplitude stays below 10°",
                            "Repeat and average"
                        ]
                    },
                    conclusions: [
                        "Period of a simple pendulum is proportional to √L: T ∝ √L",
                        "T² ∝ L confirmed by linear graph through origin",
                        "Calculated value of g ≈ 9.81 m/s² agrees with accepted value",
                        "Period is independent of mass of bob",
                        "Period is independent of amplitude for small oscillations (isochronism)"
                    ],
                    realWorldApplications: [
                        "Pendulum clock design and accuracy",
                        "Measuring g at different locations on Earth",
                        "Seismographs for earthquake detection",
                        "Foucault pendulum (demonstrating Earth's rotation)",
                        "Metronomes for music timing"
                    ],
                    extensions: [
                        "Measure g at different locations to detect variation",
                        "Investigate effect of large amplitudes on period (non-linear SHM)",
                        "Compare with spring-mass system period",
                        "Use Foucault pendulum to measure Earth's rotation rate",
                        "Investigate damping effects on pendulum"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.mechanicsExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.mechanicsTopics[topicId]) {
                    if (!this.mechanicsTopics[topicId].relatedExperiments) {
                        this.mechanicsTopics[topicId].relatedExperiments = [];
                    }
                    this.mechanicsTopics[topicId].relatedExperiments.push({
                        id: expId,
                        name: experiment.name,
                        category: experiment.category
                    });
                }
            });
        });
    }

    initializeMisconceptionDatabase() {
        this.commonMisconceptions = {
            kinematics: {
                'Displacement and Distance': [
                    'Confusing distance (scalar, path length) with displacement (vector, change in position)',
                    'Thinking an object that returns to its start has nonzero displacement',
                    'Believing speed and velocity are the same quantity'
                ],
                'Velocity and Acceleration': [
                    'Thinking an object moving at constant speed has no acceleration (it does if direction changes)',
                    'Believing that if acceleration is zero, the object must be stationary',
                    'Confusing the direction of acceleration with the direction of motion',
                    'Thinking a large velocity always means a large acceleration',
                    'Believing deceleration means negative acceleration (depends on chosen positive direction)'
                ],
                'Graphs': [
                    'Reading the height of a point on a velocity-time graph as displacement',
                    'Thinking the gradient of a displacement-time graph gives acceleration',
                    'Confusing a steep slope on a d-t graph with a steep slope on a v-t graph',
                    'Believing a horizontal line on a v-t graph means the object is stationary'
                ],
                'Free Fall': [
                    'Believing heavier objects fall faster in vacuum',
                    'Thinking air resistance does not affect lightweight objects significantly',
                    'Confusing terminal velocity with zero acceleration'
                ]
            },

            dynamics: {
                'Newton\'s Laws': [
                    'Thinking a moving object needs a constant force to keep moving (violates Newton 1)',
                    'Believing the action-reaction pair in Newton 3 cancel each other (they act on different objects)',
                    'Confusing weight (force) with mass (amount of matter)',
                    'Thinking F = ma means force causes velocity, not acceleration',
                    'Believing heavier objects require proportionally more force to accelerate the same (they do — F = ma)'
                ],
                'Forces': [
                    'Thinking the normal force always equals weight (not true on inclines or when there is vertical acceleration)',
                    'Believing friction always opposes motion (it opposes relative motion; static friction can act in direction of motion)',
                    'Confusing the net force with individual forces on a free body diagram',
                    'Thinking objects in equilibrium have no forces on them'
                ],
                'Free Body Diagrams': [
                    'Including fictitious forces (centrifugal force, etc.) in inertial reference frames',
                    'Drawing forces at wrong points of application',
                    'Omitting the normal force on inclined planes'
                ]
            },

            energy_work_power: {
                'Work': [
                    'Thinking holding a heavy object stationary requires work (in physics, W = F·d·cos θ; d = 0 so W = 0)',
                    'Believing work is done by centripetal force (force perpendicular to motion, so W = 0)',
                    'Confusing power with energy',
                    'Thinking a larger force always means more work (work depends on displacement too)'
                ],
                'Energy': [
                    'Believing energy is destroyed by friction (it is converted to thermal energy)',
                    'Thinking potential energy requires height (spring PE, electric PE etc. don\'t need height)',
                    'Confusing elastic and inelastic collisions in terms of energy conservation',
                    'Believing an object at the bottom of a hill has no energy'
                ],
                'Conservation': [
                    'Thinking conservation of energy means energy of one object stays constant (it applies to the whole system)',
                    'Believing perpetual motion machines are possible if friction is eliminated'
                ]
            },

            momentum_collisions: {
                'Momentum': [
                    'Confusing impulse (change in momentum) with momentum itself',
                    'Thinking a slow, heavy object always has less momentum than a fast, light object',
                    'Believing momentum is always conserved (only when no external forces act)',
                    'Confusing the conservation of momentum with conservation of kinetic energy'
                ],
                'Collisions': [
                    'Thinking elastic means objects bounce back with same speed (only true for equal masses in 1D)',
                    'Believing kinetic energy is always conserved in collisions',
                    'Confusing coefficient of restitution with ratio of speeds (it is ratio of relative speeds)',
                    'Thinking momentum conservation requires kinetic energy conservation'
                ]
            },

            circular_motion: {
                'Centripetal Force': [
                    'Believing centrifugal force is a real force (it is a fictitious force in rotating frames)',
                    'Thinking centripetal force is a type of force like gravity or friction (it is the name for the net inward force)',
                    'Believing objects naturally fly outward in circular motion (they move tangentially when released, not outward)',
                    'Confusing centripetal acceleration direction (always toward centre, not tangential)'
                ],
                'Rotational Quantities': [
                    'Confusing angular velocity (rad/s) with linear speed (m/s)',
                    'Thinking all points on a rotating body have the same speed (outer points move faster)',
                    'Believing angular acceleration is the same as centripetal acceleration'
                ]
            },

            oscillations: {
                'SHM': [
                    'Thinking amplitude affects the period of a simple pendulum (it does not for small angles)',
                    'Believing mass affects the period of a simple pendulum (it does not)',
                    'Confusing frequency with angular frequency',
                    'Thinking the object moves fastest at the extremes of oscillation (it moves fastest at equilibrium)',
                    'Believing acceleration is maximum at the equilibrium position (it is zero there; maximum at extremes)'
                ],
                'Energy in SHM': [
                    'Thinking the total energy in SHM decreases during a cycle (it is constant without damping)',
                    'Believing KE and PE are both maximum at the same point'
                ],
                'Pendulum': [
                    'Thinking a heavier pendulum bob swings faster',
                    'Believing a longer pendulum always has a shorter period (it is longer)',
                    'Confusing the period formula for pendulum (T = 2π√(L/g)) with spring-mass (T = 2π√(m/k))'
                ]
            }
        };

        this.clarificationStrategies = {
            visual_comparison: {
                method: 'Use vector diagrams and free body diagrams to show direction',
                effectiveness: 'High for distinguishing vector from scalar concepts'
            },
            analogy: {
                method: 'Relate to everyday examples (car braking, pulling a sled)',
                effectiveness: 'High for abstract force and energy concepts'
            },
            physical_models: {
                method: 'Use trolleys, pendulums, and springs to demonstrate directly',
                effectiveness: 'Very high for kinematics and oscillation concepts'
            },
            contrast_table: {
                method: 'Side-by-side comparison (e.g., elastic vs inelastic, speed vs velocity)',
                effectiveness: 'High for related but distinct concepts'
            },
            equations_analysis: {
                method: 'Examine units and dimensions to resolve confusion',
                effectiveness: 'High for energy, work, and power'
            },
            experimental_demonstration: {
                method: 'Link to historical and lab experiments',
                effectiveness: 'Very high for concrete understanding of laws'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about {topic}?",
                "What questions do you have about {topic}?",
                "How does {topic} relate to what you've learned before in mechanics?",
                "What do you predict will be most challenging about {topic}?"
            ],
            duringLearning: [
                "Does this make sense? Can you explain it in your own words?",
                "How does this connect to {related_concept}?",
                "What is confusing about this concept?",
                "Can you think of a real-world example of {concept}?",
                "Can you sketch a diagram of this situation?"
            ],
            afterLearning: [
                "What were the main ideas about {topic}?",
                "What surprised you while learning about {topic}?",
                "What are you still unsure about?",
                "How would you teach {topic} to someone else?",
                "What study strategy worked best for you with this material?"
            ],
            problemSolving: [
                "What is the question really asking? What do you need to find?",
                "What information do you have? What do you need? Have you drawn a diagram?",
                "Which principle applies here: Newton's laws, energy conservation, momentum?",
                "Have you defined a positive direction and labelled all variables?",
                "Did your answer make sense? Are the units correct? Is the magnitude reasonable?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            kinematics: [
                {
                    scenario: "Road Traffic Accident Investigation",
                    context: "Police investigators use skid marks to estimate vehicle speed before braking",
                    application: "Using v² = u² + 2as with v = 0 and measured skid length s to find initial speed u",
                    question: "A car leaves 30 m skid marks. If μk = 0.7 and g = 9.81 m/s², how fast was the car going?"
                },
                {
                    scenario: "Long Jump Athletics",
                    context: "An athlete jumps at an angle to maximise horizontal range",
                    application: "Projectile motion; maximum range at 45°; R = u²sin(2θ)/g",
                    question: "Why do long jumpers take off at approximately 45°?"
                }
            ],

            dynamics: [
                {
                    scenario: "Seat Belt Physics",
                    context: "Seat belts save lives in car crashes",
                    application: "Without seat belt, passenger continues at crash velocity (Newton 1); seat belt exerts force to decelerate passenger (Newton 2)",
                    question: "In a crash, why does an unrestrained passenger continue moving forward while the car stops?"
                },
                {
                    scenario: "Rock Climbing Friction",
                    context: "Climbers rely on friction between shoes and rock",
                    application: "Normal force component on slope varies with angle; friction force = μN",
                    question: "Why is it harder to stand on a steeper slope?"
                }
            ],

            energy_work_power: [
                {
                    scenario: "Roller Coaster Design",
                    context: "Designing a safe and thrilling roller coaster loop",
                    application: "GPE converts to KE on way down; minimum speed at top of loop requires centripetal force ≥ mg",
                    question: "What is the minimum height before a loop to ensure the car stays on the track?"
                },
                {
                    scenario: "Hydroelectric Dam",
                    context: "Water stored at height converted to electrical energy",
                    application: "GPE of water = mgh; power = mgh/t = ρVgh/t; efficiency < 100%",
                    question: "A dam holds 10⁸ kg of water at height 50 m. What is the maximum theoretical power output?"
                }
            ],

            momentum_collisions: [
                {
                    scenario: "Crumple Zones in Cars",
                    context: "Modern cars have crumple zones at the front",
                    application: "Crumple zones increase collision time Δt; same impulse (Δp) spread over longer time → smaller peak force on occupants",
                    question: "Why does increasing collision time reduce injury, even though the change in momentum is the same?"
                },
                {
                    scenario: "Rocket Propulsion",
                    context: "A rocket accelerates by ejecting exhaust gas",
                    application: "Conservation of momentum: initially at rest (p = 0); exhaust ejected backward (negative p) → rocket moves forward (positive p)",
                    question: "How does a rocket accelerate in the vacuum of space where there is nothing to push against?"
                }
            ],

            circular_motion: [
                {
                    scenario: "Banked Road Curves",
                    context: "Motorways bank curves to allow higher safe cornering speeds",
                    application: "Banking provides component of normal force toward centre, reducing reliance on friction for centripetal force",
                    question: "Why are racetracks banked at corners? What is the optimum banking angle for speed v on radius r?"
                },
                {
                    scenario: "Artificial Gravity in Space Stations",
                    context: "Rotating space station creates apparent gravity",
                    application: "Centripetal acceleration a = ω²r directed inward; crew experiences this as apparent weight outward (reaction)",
                    question: "What rotation rate is needed for a 200 m diameter space station to give g = 9.81 m/s²?"
                }
            ],

            oscillations: [
                {
                    scenario: "Tacoma Narrows Bridge Collapse (1940)",
                    context: "The Tacoma Narrows suspension bridge collapsed due to wind-induced oscillations",
                    application: "Wind provided periodic driving force matching bridge's natural frequency → resonance → catastrophic amplitude increase",
                    question: "Why did the bridge collapse even though the wind was not especially strong?"
                },
                {
                    scenario: "Tuning a Guitar String",
                    context: "Guitar strings are tuned by adjusting tension",
                    application: "Increasing tension raises natural frequency of oscillation; frequency must match desired musical note",
                    question: "How does tightening a guitar string change the frequency of the sound it produces?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall equations, definitions, and units",
                    verbs: ["State", "Define", "Write", "Recall", "Name"],
                    example: "State Newton's Second Law and give its equation"
                },
                understand: {
                    description: "Explain physical meaning of laws and relationships",
                    verbs: ["Explain", "Describe", "Summarise", "Interpret", "Compare"],
                    example: "Explain why the period of a simple pendulum is independent of mass"
                },
                apply: {
                    description: "Use equations and principles to solve problems",
                    verbs: ["Calculate", "Solve", "Determine", "Predict", "Apply"],
                    example: "Calculate the speed of a ball at the bottom of a 5 m ramp (neglect friction)"
                },
                analyze: {
                    description: "Interpret graphs, identify forces, break into components",
                    verbs: ["Analyse", "Deduce", "Identify", "Sketch", "Derive"],
                    example: "Sketch and annotate the free body diagram for a block on an inclined plane"
                },
                evaluate: {
                    description: "Assess experimental methods, discuss assumptions, evaluate models",
                    verbs: ["Evaluate", "Critique", "Justify", "Assess", "Compare"],
                    example: "Evaluate the limitations of the simple pendulum as a model for SHM"
                },
                create: {
                    description: "Design experiments, derive equations, model systems",
                    verbs: ["Design", "Derive", "Model", "Construct", "Plan"],
                    example: "Design an experiment to measure the coefficient of static friction between two surfaces"
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: ["Recalls equations but unsure when to apply them", "Treats all forces as equal", "Struggles with vector components"],
                    support: ["Worked examples with step-by-step solutions", "Emphasise defining positive direction", "Use free body diagrams always"]
                },
                developing: {
                    characteristics: ["Applies equations to familiar situations", "Draws reasonable free body diagrams", "Connects related topics"],
                    support: ["Novel problems in new contexts", "Graph interpretation tasks", "Explain reasoning not just answers"]
                },
                proficient: {
                    characteristics: ["Solves multi-step problems independently", "Identifies relevant principles", "Evaluates experimental data"],
                    support: ["Complex multi-force problems", "Data analysis and error discussion", "Link to real applications"]
                },
                expert: {
                    characteristics: ["Derives equations from first principles", "Spots hidden assumptions", "Designs investigations independently"],
                    support: ["Open-ended investigation design", "Mathematical derivations", "Cross-topic problems"]
                }
            }
        };

        this.assessmentQuestions = {
            kinematics: {
                remember: "State the five SUVAT equations for uniform acceleration",
                understand: "Explain the difference between average velocity and instantaneous velocity",
                apply: "A car accelerates from rest at 2.5 m/s². Calculate its speed after 8 s and the distance covered",
                analyze: "Sketch the velocity-time graph for a ball thrown upward. Annotate key features",
                evaluate: "Evaluate why the equations of uniform acceleration cannot be applied to a car braking on an icy road",
                create: "Design an experiment to determine the acceleration due to gravity using a ball and electronic timer"
            },
            dynamics: {
                remember: "State Newton's three laws of motion",
                understand: "Explain why a book resting on a table is in equilibrium despite having weight",
                apply: "A 5 kg block is pushed with 30 N on a surface where μk = 0.4. Calculate its acceleration",
                analyze: "Draw a free body diagram for a skier going down a 30° slope at constant speed. Identify all forces",
                evaluate: "Evaluate the claim: 'Newton's Third Law pairs cancel each other out'",
                create: "Design an experiment to find the coefficient of kinetic friction between two surfaces"
            },
            energy_work_power: {
                remember: "Write the equation for gravitational potential energy and kinetic energy",
                understand: "Explain why friction does negative work on a sliding object",
                apply: "A 2 kg ball falls from rest through 10 m. Calculate its speed at the bottom (ignore air resistance)",
                analyze: "Sketch a KE vs PE graph for a pendulum swinging. Label key points",
                evaluate: "A student claims an engine is 100% efficient. Evaluate this claim",
                create: "Plan an experiment to test whether energy is conserved as a trolley rolls down a ramp"
            }
        };
    }

    // ========================================
    // HANDLER METHODS FOR EACH TOPIC
    // ========================================

 // ========================================
// KINEMATICS HANDLER
// ========================================

handleKinematics(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Kinematics",
        category: 'mechanics',
        summary: "Kinematics describes motion using displacement, velocity, acceleration, and time without reference to forces. The SUVAT equations apply exclusively to uniform (constant) acceleration.",

        // ---- Core definitions ----
        definitions: {
            displacement: {
                symbol: "s",
                unit: "metres (m)",
                type: "vector",
                definition: "The change in position of an object; includes magnitude and direction",
                formula: "s = final position − initial position",
                distinction: "Displacement ≠ distance. A runner completing one lap has distance = 400 m but displacement = 0 m"
            },
            distance: {
                symbol: "d",
                unit: "metres (m)",
                type: "scalar",
                definition: "The total path length travelled regardless of direction"
            },
            speed: {
                symbol: "v (or u for initial)",
                unit: "m/s",
                type: "scalar",
                definition: "Rate of change of distance",
                average: "v_avg = total distance / total time"
            },
            velocity: {
                symbol: "v (final), u (initial)",
                unit: "m/s",
                type: "vector",
                definition: "Rate of change of displacement",
                instantaneous: "v = ds/dt (gradient of displacement-time graph)",
                average: "v_avg = Δs/Δt = (s₂ − s₁)/(t₂ − t₁)"
            },
            acceleration: {
                symbol: "a",
                unit: "m/s²",
                type: "vector",
                definition: "Rate of change of velocity",
                instantaneous: "a = dv/dt (gradient of velocity-time graph)",
                average: "a_avg = Δv/Δt = (v − u)/t",
                note: "Acceleration can be in opposite direction to velocity (deceleration)"
            }
        },

        // ---- SUVAT equations ----
        suvatEquations: {
            variables: {
                s: "displacement (m)",
                u: "initial velocity (m/s)",
                v: "final velocity (m/s)",
                a: "acceleration (m/s²)",
                t: "time (s)"
            },
            equations: [
                {
                    equation: "v = u + at",
                    missing: "s",
                    derivedFrom: "Definition of acceleration: a = (v−u)/t rearranged",
                    useWhen: "s is not needed; all other quantities are known or findable"
                },
                {
                    equation: "s = ut + ½at²",
                    missing: "v",
                    derivedFrom: "Integrating v = u + at with respect to t",
                    useWhen: "Final velocity is not required"
                },
                {
                    equation: "s = vt − ½at²",
                    missing: "u",
                    derivedFrom: "Substitution from v = u + at into s = ut + ½at²",
                    useWhen: "Initial velocity is not given or required"
                },
                {
                    equation: "v² = u² + 2as",
                    missing: "t",
                    derivedFrom: "Eliminating t from v = u + at and s = ut + ½at²",
                    useWhen: "Time is not given or required — very common in exam questions"
                },
                {
                    equation: "s = ½(u + v)t",
                    missing: "a",
                    derivedFrom: "Average velocity × time when acceleration is uniform",
                    useWhen: "Acceleration is not given; u, v, and t are known"
                }
            ],
            conditions: "ALL five equations are valid ONLY when acceleration is constant. Do NOT use for variable acceleration.",
            problemSolvingStrategy: [
                "Step 1: Read the problem and list all given quantities with symbols and values",
                "Step 2: Identify the unknown quantity to find",
                "Step 3: Define a positive direction and apply it consistently (e.g., upward = positive, or direction of initial motion = positive)",
                "Step 4: Select the SUVAT equation that contains your unknown and all known quantities",
                "Step 5: Substitute values, solve algebraically, then calculate",
                "Step 6: Check units, check sign of answer, check physical reasonableness"
            ]
        },

        // ---- Graphical methods ----
        graphicalAnalysis: {
            displacementTimeGraph: {
                title: "Displacement-Time (s-t) Graph",
                gradient: "gradient = velocity",
                howToFindGradient: "Draw tangent at the point of interest; gradient = rise/run",
                shapes: [
                    { shape: "Horizontal line (s = constant)", meaning: "Object at rest; v = 0" },
                    { shape: "Straight line with positive gradient", meaning: "Constant positive velocity" },
                    { shape: "Straight line with negative gradient", meaning: "Constant negative velocity (moving back toward origin)" },
                    { shape: "Curve with increasing gradient", meaning: "Accelerating" },
                    { shape: "Curve with decreasing gradient", meaning: "Decelerating" },
                    { shape: "Curve turning back on itself", meaning: "Object reverses direction" }
                ],
                commonMistake: "Do NOT read the height of a point as velocity — the gradient gives velocity, not the height"
            },
            velocityTimeGraph: {
                title: "Velocity-Time (v-t) Graph",
                gradient: "gradient = acceleration",
                areaUnder: "area under graph = displacement (NOT distance, unless all values are positive)",
                shapes: [
                    { shape: "Horizontal line (v = constant)", meaning: "Constant velocity; a = 0" },
                    { shape: "Straight line with positive gradient", meaning: "Uniform positive acceleration" },
                    { shape: "Straight line with negative gradient", meaning: "Uniform deceleration" },
                    { shape: "Line passing through v = 0", meaning: "Object momentarily stops and reverses direction" },
                    { shape: "Curve", meaning: "Non-uniform (changing) acceleration" }
                ],
                areaCalculation: {
                    triangle: "Area = ½ × base × height (for constant acceleration from rest)",
                    trapezium: "Area = ½(u + v) × t (for constant acceleration)",
                    irregularCurve: "Count grid squares or use numerical integration"
                },
                importantNote: "Areas below the time axis represent negative displacement (object moving in negative direction). Total displacement = net area (above minus below). Total distance = sum of all areas regardless of sign."
            },
            accelerationTimeGraph: {
                title: "Acceleration-Time (a-t) Graph",
                areaUnder: "area under graph = change in velocity (Δv = v − u)",
                shape_uniformAccel: "Horizontal line (constant acceleration)",
                shape_varyingAccel: "Any curve or varying line"
            }
        },

        // ---- Free fall and vertical motion ----
        freeFall: {
            definition: "Motion of an object under gravity alone, with no air resistance",
            acceleration: "g = 9.81 m/s² downward (use g = 9.8 or 10 m/s² when specified)",
            signConvention: {
                upwardPositive: "a = −9.81 m/s², upward displacements and velocities are positive",
                downwardPositive: "a = +9.81 m/s², downward displacements and velocities are positive"
            },
            keyResults: {
                fallingFromRest: "v² = 2gh → v = √(2gh); t = √(2h/g)",
                thrownUpward: "At maximum height: v = 0; time to max height = u/g; max height = u²/(2g)",
                symmetry: "Time up = time down; speed on return = initial speed (no air resistance)"
            },
            airResistance: {
                effect: "Reduces acceleration; acceleration is no longer constant",
                terminal_velocity: "When drag force = weight → net force = 0 → constant velocity",
                consequence: "SUVAT equations no longer valid once air resistance is significant"
            }
        },

        // ---- Projectile motion ----
        projectileMotion: {
            keyPrinciple: "Horizontal and vertical motions are completely independent of each other",
            horizontalMotion: {
                acceleration: "aₓ = 0 (no horizontal force, ignoring air resistance)",
                equation: "x = u·cos(θ)·t",
                velocity: "vₓ = u·cos(θ) = constant throughout flight"
            },
            verticalMotion: {
                acceleration: "aᵧ = −g = −9.81 m/s² (taking upward as positive)",
                displacement: "y = u·sin(θ)·t − ½gt²",
                velocity: "vᵧ = u·sin(θ) − gt"
            },
            derivedFormulas: {
                timeOfFlight: "T = 2u·sin(θ)/g (for launch and landing at same height)",
                range: "R = u²·sin(2θ)/g (for launch and landing at same height)",
                maxHeight: "H = u²·sin²(θ)/(2g)",
                maxRangeAngle: "θ = 45° gives maximum range for given initial speed"
            },
            problemSolvingSteps: [
                "Split initial velocity: uₓ = u·cos(θ), uᵧ = u·sin(θ)",
                "Apply SUVAT separately to horizontal (aₓ = 0) and vertical (aᵧ = −g)",
                "The time t is the same link between horizontal and vertical",
                "Find time from vertical equation first, then use in horizontal",
                "Use v² = vₓ² + vᵧ² for resultant speed; θ = arctan(vᵧ/vₓ) for direction"
            ],
            commonTypes: [
                {
                    type: "Horizontal launch from height H",
                    approach: "uᵧ = 0; find t from H = ½gt²; then x = uₓ·t"
                },
                {
                    type: "Launch at angle from ground",
                    approach: "Split into components; use symmetry for level landing"
                },
                {
                    type: "Launch at angle, lands at different height",
                    approach: "Set up quadratic in t using vertical SUVAT; solve for positive t"
                }
            ]
        },

        // ---- Relative velocity ----
        relativeVelocity: {
            definition: "Velocity of object A relative to object B: v_AB = v_A − v_B",
            riverboat: {
                description: "Boat moving in river with current",
                resultant: "Actual velocity = vector sum of boat velocity relative to water + current velocity",
                shortestTime: "Point boat perpendicular to bank",
                shortestDistance: "Angle boat upstream to cancel cross-current drift"
            }
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "SUVAT — Braking car",
                problem: "A car travelling at 25 m/s brakes uniformly and stops in 40 m. Find the deceleration and time to stop.",
                given: "u = 25 m/s, v = 0 m/s, s = 40 m",
                find: "a and t",
                solution: {
                    step1: "Use v² = u² + 2as: 0 = 25² + 2·a·40 → a = −625/80 = −7.81 m/s²",
                    step2: "Magnitude of deceleration = 7.81 m/s²",
                    step3: "Use v = u + at: 0 = 25 + (−7.81)t → t = 25/7.81 = 3.20 s",
                    check: "s = ½(u + v)t = ½(25 + 0)(3.20) = 40 m ✓"
                }
            },
            {
                title: "Vertical — Ball thrown upward",
                problem: "A ball is thrown upward at 18 m/s from ground. Find maximum height, time to reach it, and total time in air. (g = 9.81 m/s²)",
                given: "u = +18 m/s (upward positive), a = −9.81 m/s², v = 0 at max height",
                solution: {
                    maxHeight: "v² = u² + 2as → 0 = 18² − 2(9.81)s → s = 324/19.62 = 16.5 m",
                    timeUp: "v = u + at → 0 = 18 − 9.81t → t = 18/9.81 = 1.83 s",
                    totalTime: "By symmetry, total time = 2 × 1.83 = 3.67 s",
                    check: "s = ut + ½at² = 18(1.83) + ½(−9.81)(1.83)² = 32.9 − 16.4 = 16.5 m ✓"
                }
            },
            {
                title: "Projectile — Cliff launch",
                problem: "A stone is launched horizontally at 20 m/s from a cliff 60 m high. Find (a) time to land, (b) horizontal range, (c) speed on impact.",
                given: "uₓ = 20 m/s, uᵧ = 0, vertical drop = 60 m, g = 9.81 m/s²",
                solution: {
                    time: "Vertical: 60 = ½(9.81)t² → t² = 120/9.81 = 12.23 → t = 3.50 s",
                    range: "x = uₓ·t = 20 × 3.50 = 70.0 m",
                    vVertical: "vᵧ = gt = 9.81 × 3.50 = 34.3 m/s (downward)",
                    speed: "v = √(vₓ² + vᵧ²) = √(20² + 34.3²) = √(400 + 1176) = √1576 = 39.7 m/s",
                    angle: "θ = arctan(34.3/20) = arctan(1.715) = 59.7° below horizontal"
                }
            },
            {
                title: "Graphs — Reading a v-t graph",
                problem: "A v-t graph shows: 0 to 4 s: velocity increases from 0 to 12 m/s; 4 to 10 s: constant at 12 m/s; 10 to 14 s: decreases to 0. Find total displacement and deceleration in final phase.",
                solution: {
                    phase1: "Area = ½ × 4 × 12 = 24 m",
                    phase2: "Area = 12 × 6 = 72 m",
                    phase3: "Area = ½ × 4 × 12 = 24 m",
                    total: "Total displacement = 24 + 72 + 24 = 120 m",
                    deceleration: "gradient = (0 − 12)/(14 − 10) = −12/4 = −3.0 m/s²; deceleration = 3.0 m/s²"
                }
            }
        ],

        // ---- Common errors ----
        commonErrors: [
            {
                error: "Not defining positive direction",
                consequence: "Incorrect signs on velocity, acceleration, or displacement",
                fix: "Always write 'Taking upward/right as positive' at the start"
            },
            {
                error: "Using SUVAT when acceleration is not constant",
                consequence: "Completely incorrect results",
                fix: "Check whether acceleration is stated as uniform before applying SUVAT"
            },
            {
                error: "Confusing displacement and distance from a v-t graph",
                consequence: "Incorrect calculation of total path length",
                fix: "Area under graph = displacement (signed); distance = total area ignoring sign"
            },
            {
                error: "Not separating horizontal and vertical in projectile problems",
                consequence: "Applying wrong acceleration to wrong direction",
                fix: "Always set up two columns: horizontal (a = 0) and vertical (a = −g)"
            },
            {
                error: "Using g as positive when taking upward as positive",
                consequence: "Ball 'decelerates' at +g instead of −g → wrong maximum height",
                fix: "If upward is positive, then a = −9.81 m/s² for all objects in free fall"
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "State the five SUVAT equations and the variable each one omits",
                "What does the gradient of a displacement-time graph represent?",
                "What does the area under a velocity-time graph represent?"
            ],
            understanding: [
                "Explain why displacement can be zero even when an object has travelled a large distance",
                "Explain why the SUVAT equations cannot be used for a car navigating a winding road",
                "Describe what a velocity-time graph looks like for an object thrown upward, from launch to landing"
            ],
            application: [
                "A train accelerates uniformly from 5 m/s to 35 m/s over 600 m. Calculate the acceleration and time taken",
                "A ball is kicked at 15 m/s at 30° above horizontal. Calculate maximum height and range (g = 9.81 m/s²)",
                "A stone is dropped from a bridge and hits the water after 2.8 s. How high is the bridge?"
            ],
            analysis: [
                "Sketch the displacement-time, velocity-time, and acceleration-time graphs for a ball thrown vertically upward",
                "A v-t graph for an object shows a straight line from (0, 20) to (5, 0) then a horizontal line at 0. Describe and calculate the motion in each phase",
                "Two cars start at the same point. Car A moves at constant 15 m/s. Car B starts from rest with acceleration 3 m/s². When and where does car B overtake car A?"
            ]
        },

        applications: [
            "Road safety engineering: stopping distances, speed limits, sight lines",
            "Sports science: trajectory optimisation, sprinting biomechanics",
            "Space mission planning: orbital insertion, re-entry trajectories",
            "Automotive design: acceleration performance, crash analysis",
            "Construction: calculating fall distances and safe zones"
        ]
    };

    // ---- Adaptive content based on detected problem type ----
    if (/projectile/i.test(input)) {
        content.focus = "projectileMotion";
        content.highlightedSection = content.projectileMotion;
    } else if (/graph|gradient|area/i.test(input)) {
        content.focus = "graphicalAnalysis";
        content.highlightedSection = content.graphicalAnalysis;
    } else if (/free.?fall|drop|vertical/i.test(input)) {
        content.focus = "freeFall";
        content.highlightedSection = content.freeFall;
    } else if (/suvat|uniform.*accel/i.test(input)) {
        content.focus = "suvatEquations";
        content.highlightedSection = content.suvatEquations;
    }

    return content;
}


// ========================================
// DYNAMICS HANDLER
// ========================================

handleDynamics(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Dynamics — Newton's Laws of Motion",
        category: 'mechanics',
        summary: "Dynamics explains the causes of motion. Newton's three laws connect forces to changes in motion. Free body diagrams are the essential tool for applying Newton's Second Law correctly.",

        // ---- Core concepts ----
        coreQuantities: {
            force: {
                symbol: "F",
                unit: "Newtons (N); 1 N = 1 kg·m/s²",
                type: "vector",
                definition: "A push or pull that can change an object's motion (accelerate it) or deform it",
                measurement: "Newton meter (spring balance)"
            },
            mass: {
                symbol: "m",
                unit: "kilograms (kg)",
                type: "scalar",
                definition: "The amount of matter in an object; measure of inertia (resistance to acceleration)",
                distinction: "Mass is NOT weight. Mass is constant everywhere; weight depends on gravitational field strength"
            },
            weight: {
                symbol: "W",
                unit: "Newtons (N)",
                type: "vector",
                formula: "W = mg",
                direction: "Always toward centre of Earth (downward)",
                distinction: "Weight is a force due to gravity; mass is the amount of matter"
            },
            inertia: {
                definition: "The tendency of an object to resist any change in its state of motion",
                relationship: "Greater mass → greater inertia → harder to accelerate or decelerate"
            }
        },

        // ---- Newton's Laws in full detail ----
        newtonLaws: {
            first: {
                fullStatement: "An object remains at rest or continues to move in a straight line at constant velocity unless acted upon by a resultant (net) external force",
                alternativeName: "Law of Inertia",
                mathematicalForm: "If ΣF = 0, then a = 0 (object in equilibrium)",
                equilibriumCondition: "ΣFₓ = 0 and ΣFᵧ = 0 simultaneously",
                staticEquilibrium: "Object at rest: balanced forces in all directions",
                dynamicEquilibrium: "Object moving at constant velocity: balanced forces in all directions",
                examples: [
                    "A book resting on a table: weight balanced by normal force → equilibrium",
                    "A car at constant speed on a motorway: driving force balanced by drag and friction",
                    "An astronaut drifting in space: no net force → constant velocity forever",
                    "Passengers thrown forward when bus brakes: inertia maintains forward velocity"
                ],
                commonMisconception: "A moving object does NOT need a force to keep it moving at constant velocity. A force is only needed to change velocity."
            },
            second: {
                fullStatement: "The net force on an object is directly proportional to its acceleration, in the same direction as the net force",
                equation: "ΣF = ma",
                vectorForm: "ΣF⃗ = ma⃗ (acceleration is in same direction as net force)",
                componentForm: {
                    x: "ΣFₓ = maₓ",
                    y: "ΣFᵧ = maᵧ"
                },
                implications: [
                    "If net force is zero → acceleration is zero (Newton 1 is a special case of Newton 2)",
                    "Larger net force on same mass → larger acceleration",
                    "Same net force on larger mass → smaller acceleration",
                    "Direction of acceleration = direction of net force, NOT necessarily direction of motion"
                ],
                unitDerivation: "F = ma → [N] = [kg][m/s²] → 1 N = 1 kg·m/s²",
                examples: [
                    "Pushing a shopping trolley: double the force → double the acceleration",
                    "A 1000 kg car with net force 2500 N: a = 2500/1000 = 2.5 m/s²",
                    "Decelerating object: net force is opposite to velocity direction"
                ]
            },
            third: {
                fullStatement: "When object A exerts a force on object B, object B exerts an equal and opposite force on object A",
                mathematicalForm: "F_AB = −F_BA (equal in magnitude, opposite in direction)",
                criticalPoints: [
                    "Action and reaction forces act on DIFFERENT objects — they NEVER cancel each other",
                    "They are the same type of force (both gravitational, both normal, both friction, etc.)",
                    "They act simultaneously — there is no time delay between action and reaction"
                ],
                examples: [
                    { action: "Earth pulls you down (your weight)", reaction: "You pull Earth upward (equal force, negligible effect on Earth due to huge mass)" },
                    { action: "You push wall forward", reaction: "Wall pushes you backward" },
                    { action: "Rocket expels gas backward (action)", reaction: "Gas pushes rocket forward (reaction = thrust)" },
                    { action: "Foot pushes backward on ground", reaction: "Ground pushes foot forward (propulsion)" },
                    { action: "Swimmer pushes water backward", reaction: "Water pushes swimmer forward" }
                ],
                commonMisconception: "The reaction to a book's weight is NOT the table's normal force. The reaction to weight (Earth pulling book down) is the book pulling Earth upward."
            }
        },

        // ---- Free body diagrams ----
        freeBodyDiagrams: {
            purpose: "Isolate a single object and show ALL forces acting ON it, allowing correct application of ΣF = ma",
            steps: [
                "Step 1: Identify the object of interest (the 'system')",
                "Step 2: Draw a simple shape representing the object (box or circle)",
                "Step 3: Identify every force acting ON the object (not forces it exerts on others)",
                "Step 4: Draw each force as an arrow from the centre of the object, in the correct direction",
                "Step 5: Label each force with its type, symbol, and value if known",
                "Step 6: Choose a coordinate system (positive x and y directions)",
                "Step 7: Resolve forces into components and apply ΣFₓ = maₓ, ΣFᵧ = maᵧ"
            ],
            commonForces: {
                weight: {
                    symbol: "W or mg",
                    direction: "Vertically downward",
                    magnitude: "W = mg",
                    note: "Acts through centre of gravity of the object"
                },
                normalForce: {
                    symbol: "N or R",
                    direction: "Perpendicular to the contact surface, away from surface",
                    magnitude: "Determined by equilibrium in perpendicular direction",
                    note: "Does NOT always equal mg; equal to mg only on horizontal surface with no vertical acceleration"
                },
                friction: {
                    symbol: "f or F_f",
                    direction: "Along the surface, opposing relative motion (or tendency of motion)",
                    kinetic: "fk = μk·N",
                    static: "fs ≤ μs·N",
                    note: "Static friction adjusts to maintain equilibrium up to its maximum value"
                },
                tension: {
                    symbol: "T",
                    direction: "Along the string/rope, away from object toward attachment point",
                    note: "For a massless, inextensible string over a frictionless pulley, tension is the same throughout"
                },
                applied: {
                    symbol: "F or P",
                    direction: "In direction of push or pull, at specified angle",
                    note: "Must resolve into components if not horizontal/vertical"
                },
                drag: {
                    symbol: "F_D or D",
                    direction: "Opposing motion (opposite to velocity)",
                    note: "Depends on speed; often neglected unless stated"
                }
            },
            doNotInclude: [
                "Forces the object exerts ON other objects",
                "Fictitious forces (in inertial reference frames)",
                "Any force not in physical contact or at a distance (unless gravity/magnetism)"
            ]
        },

        // ---- Friction in detail ----
        friction: {
            nature: "A contact force that opposes relative motion or tendency of relative motion between surfaces",
            types: {
                static: {
                    definition: "Friction between surfaces that are stationary relative to each other",
                    equation: "fs ≤ μs·N",
                    maximum: "fs_max = μs·N (friction just before object starts to slide)",
                    behaviour: "Adjusts automatically from 0 up to maximum; prevents motion",
                    afterMaximum: "Once fs_max is exceeded, object begins to slide and kinetic friction takes over"
                },
                kinetic: {
                    definition: "Friction between surfaces in relative motion (sliding friction)",
                    equation: "fk = μk·N",
                    note: "Constant value (for given surfaces and normal force); μk < μs always"
                },
                rolling: {
                    definition: "Friction for rolling contact (much less than sliding friction)",
                    note: "Allows tyres to grip road without sliding"
                }
            },
            coefficients: {
                definition: "μ = friction force / normal force (dimensionless)",
                typical: {
                    rubberDryConcrete: "μs ≈ 0.8, μk ≈ 0.7",
                    steelSteel: "μs ≈ 0.74, μk ≈ 0.57",
                    ice: "μk ≈ 0.02–0.10",
                    teflonTeflon: "μk ≈ 0.04"
                }
            },
            applications: [
                "Braking distances depend on μk between tyres and road",
                "ABS brakes keep wheels rolling (static friction) rather than sliding (kinetic friction)",
                "Friction enables walking, driving, and climbing"
            ]
        },

        // ---- Inclined planes ----
        inclinedPlane: {
            setup: "Block on slope at angle θ to horizontal",
            resolvingWeight: {
                parallelToSlope: "F∥ = mg·sin(θ) — acts down the slope",
                perpendicularToSlope: "F⊥ = mg·cos(θ) — acts into the slope"
            },
            normalForce: {
                derivation: "No acceleration perpendicular to slope → N = mg·cos(θ)",
                note: "N < mg on inclined plane; N = mg only on horizontal surface"
            },
            frictionForce: "fk = μk·N = μk·mg·cos(θ) — acts up the slope if block slides down",
            netForceEquation: "ΣF∥ = mg·sin(θ) − μk·mg·cos(θ) = ma",
            acceleration: "a = g(sin θ − μk·cos θ)",
            conditions: {
                sliding: "mg·sin(θ) > μs·mg·cos(θ) → tan(θ) > μs",
                stationary: "tan(θ) ≤ μs"
            },
            pushUp: {
                friction: "Friction now acts down the slope (opposing upward motion)",
                equation: "ΣF = F_applied − mg·sin(θ) − μk·mg·cos(θ) = ma"
            }
        },

        // ---- Connected bodies ----
        connectedBodies: {
            sameSurface: {
                description: "Two objects pushed/pulled in contact on a surface",
                method: "Treat as single system for overall acceleration: F_net = (m₁ + m₂)a; then isolate one body for contact force"
            },
            attwoodMachine: {
                description: "Two masses m₁ and m₂ connected by string over frictionless, massless pulley",
                setup: "m₁ > m₂; m₁ accelerates down, m₂ accelerates up",
                systemEquation: "(m₁ − m₂)g = (m₁ + m₂)a",
                acceleration: "a = (m₁ − m₂)g / (m₁ + m₂)",
                tension: "T = 2m₁m₂g / (m₁ + m₂)",
                method: [
                    "Apply ΣF = ma to each mass separately",
                    "m₁: m₁g − T = m₁a (taking downward as positive for m₁)",
                    "m₂: T − m₂g = m₂a (taking upward as positive for m₂)",
                    "Solve simultaneously (both have same |a| and same T)"
                ]
            },
            trolleyAndHanger: {
                description: "Trolley on surface connected by string over pulley to hanging mass",
                equation: "m_hanger × g − friction = (m_trolley + m_hanger) × a",
                approximation: "If hanger mass << trolley mass, F ≈ m_hanger × g"
            }
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "Block on horizontal surface",
                problem: "A 12 kg block is pushed across a floor with a horizontal force of 50 N. The coefficient of kinetic friction is 0.35. Find acceleration.",
                solution: {
                    normal: "N = mg = 12 × 9.81 = 117.7 N",
                    friction: "fk = μk·N = 0.35 × 117.7 = 41.2 N",
                    netForce: "ΣF = 50 − 41.2 = 8.8 N",
                    acceleration: "a = ΣF/m = 8.8/12 = 0.73 m/s²"
                }
            },
            {
                title: "Block on inclined plane",
                problem: "A 5.0 kg block slides down a 35° slope. μk = 0.25. Find acceleration.",
                solution: {
                    parallel: "mg·sin(35°) = 5.0 × 9.81 × 0.574 = 28.1 N (down slope)",
                    normal: "N = mg·cos(35°) = 5.0 × 9.81 × 0.819 = 40.2 N",
                    friction: "fk = 0.25 × 40.2 = 10.05 N (up slope)",
                    netForce: "ΣF = 28.1 − 10.05 = 18.1 N (down slope)",
                    acceleration: "a = 18.1/5.0 = 3.62 m/s²"
                }
            },
            {
                title: "Atwood machine",
                problem: "Masses of 4.0 kg and 6.0 kg are connected over a pulley. Find acceleration and tension.",
                solution: {
                    acceleration: "a = (6.0 − 4.0) × 9.81 / (6.0 + 4.0) = 2 × 9.81/10 = 1.96 m/s²",
                    tension: "T = 2 × 6.0 × 4.0 × 9.81 / (6.0 + 4.0) = 470.9/10 = 47.1 N",
                    check_m1: "m₁g − T = m₁a → 4.0×9.81 − 47.1 = 4.0×1.96 → 39.2 − 47.1 = −7.8 ≠ 7.84 … note sign: T − m₁g = m₁a for lighter mass → 47.1 − 39.2 = 7.84 ≈ 4.0×1.96 ✓"
                }
            },
            {
                title: "Force at an angle",
                problem: "A 20 N force is applied at 30° above horizontal to a 8.0 kg box on a frictionless surface. Find acceleration and normal force.",
                solution: {
                    horizontal: "Fₓ = 20·cos(30°) = 20 × 0.866 = 17.3 N",
                    vertical: "Fᵧ = 20·sin(30°) = 20 × 0.5 = 10 N (upward)",
                    normal: "N + Fᵧ = mg → N = mg − Fᵧ = 8×9.81 − 10 = 78.5 − 10 = 68.5 N",
                    acceleration: "a = Fₓ/m = 17.3/8.0 = 2.16 m/s²"
                }
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "State Newton's three laws of motion in full",
                "Write the equation for kinetic friction force",
                "What is the SI unit of force and how is it defined in base units?"
            ],
            understanding: [
                "Explain why a passenger lurches forward when a bus brakes sharply",
                "Explain why action and reaction forces (Newton's Third Law) do NOT cancel each other",
                "Explain why the normal force on a block on an inclined plane is less than the block's weight"
            ],
            application: [
                "A 3.0 kg object accelerates at 4.0 m/s². Calculate the net force acting on it",
                "A 10 kg crate is on a surface with μs = 0.50 and μk = 0.35. What horizontal force is needed to (a) start it moving, (b) keep it moving at constant velocity?",
                "A 1200 kg car decelerates from 30 m/s to rest in 4.5 s. Calculate the braking force"
            ],
            analysis: [
                "Draw and fully label the free body diagram for a box being pulled at constant velocity along a rough horizontal floor by a rope at 20° above horizontal",
                "A block of mass m rests on a slope of angle θ. Derive an expression for the maximum angle θ before the block begins to slide, in terms of μs",
                "Two blocks (3 kg and 5 kg) are connected by a string and pulled by 16 N on a frictionless surface. Find the acceleration and the tension in the string between them"
            ]
        },

        applications: [
            "Vehicle design: braking force, traction, acceleration performance",
            "Structural engineering: force analysis in bridges, cranes, buildings",
            "Sports biomechanics: ground reaction forces, jumping, throwing",
            "Aerospace: thrust calculations, re-entry force analysis",
            "Ergonomics: safe manual handling, equipment design"
        ]
    };

    // ---- Adaptive focus based on detected problem type ----
    if (/incline|slope|ramp/i.test(input)) {
        content.focus = "inclinedPlane";
        content.highlightedSection = content.inclinedPlane;
    } else if (/atwood|pulley|connected/i.test(input)) {
        content.focus = "connectedBodies";
        content.highlightedSection = content.connectedBodies;
    } else if (/friction/i.test(input)) {
        content.focus = "friction";
        content.highlightedSection = content.friction;
    } else if (/free.?body|diagram/i.test(input)) {
        content.focus = "freeBodyDiagrams";
        content.highlightedSection = content.freeBodyDiagrams;
    }

    return content;
}


// ========================================
// ENERGY, WORK AND POWER HANDLER
// ========================================

handleEnergyWorkPower(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Energy, Work and Power",
        category: 'mechanics',
        summary: "Work is the transfer of energy by a force over a displacement. The work-energy theorem connects net work to change in kinetic energy. In the absence of non-conservative forces, total mechanical energy is conserved.",

        // ---- Work ----
        work: {
            definition: "Work is done by a force when it causes a displacement in the direction of the force",
            formula: "W = F·d·cos(θ)",
            variables: {
                W: "work done (J)",
                F: "magnitude of the force (N)",
                d: "magnitude of the displacement (m)",
                theta: "angle between the force vector and the displacement vector"
            },
            unit: "Joule (J); 1 J = 1 N·m = 1 kg·m²·s⁻²",
            signConvention: {
                positive: "Force has component in same direction as displacement (energy transferred into the object)",
                negative: "Force has component opposite to displacement (energy removed from object, e.g., friction, braking)",
                zero: "Force is perpendicular to displacement (centripetal force, normal force on horizontal surface)"
            },
            specialCases: [
                { scenario: "Carrying a bag horizontally at constant height", angle: "90°", work: "W = 0 (no displacement in direction of weight)" },
                { scenario: "Lifting a box vertically", angle: "0°", work: "W = F·h" },
                { scenario: "Friction on sliding block", angle: "180°", work: "W = −fk·d (negative work)" },
                { scenario: "Centripetal force on circular orbit", angle: "90°", work: "W = 0 (force always perpendicular to motion)" }
            ],
            variableForce: {
                method: "W = area under a Force-displacement (F-x) graph",
                linearForce: "For F = kx (spring): W = ½kx² = area of triangle under F-x line",
                irregularForce: "Count squares under curve on F-x graph"
            }
        },

        // ---- Kinetic energy ----
        kineticEnergy: {
            formula: "KE = ½mv²",
            unit: "Joules (J)",
            variables: {
                m: "mass (kg)",
                v: "speed (m/s)"
            },
            derivation: "From work-energy theorem: W_net = ΔKE = ½mv² − ½mu²; or from SUVAT: v² = u² + 2as, multiply by ½m: ½mv² − ½mu² = mas = Fs = W",
            properties: [
                "Always positive (depends on v²)",
                "Doubles when speed increases by √2; quadruples when speed doubles",
                "Scalar quantity"
            ]
        },

        // ---- Work-energy theorem ----
        workEnergyTheorem: {
            statement: "The net work done on an object equals its change in kinetic energy",
            formula: "W_net = ΔKE = ½mv² − ½mu²",
            interpretation: "Each force does work; the SUM of all work done = net work = ΔKE",
            withFriction: "W_applied + W_gravity + W_friction = ΔKE",
            powerfulUse: "Can find final speed without knowing the time — useful when forces are complex"
        },

        // ---- Potential energy ----
        potentialEnergy: {
            gravitational: {
                formula: "GPE = mgh",
                variables: {
                    m: "mass (kg)",
                    g: "gravitational field strength (9.81 m/s² near Earth surface)",
                    h: "height above reference level (m)"
                },
                referenceLevel: "h = 0 can be set anywhere; only changes in GPE matter (Δ(GPE) = mgΔh)",
                derivation: "W_gravity = mgh (work done against gravity lifting mass m through height h = GPE stored)",
                note: "On other planets, replace g with appropriate value (e.g., Moon: g ≈ 1.63 m/s²)"
            },
            elastic: {
                formula: "EPE = ½kx²",
                variables: {
                    k: "spring constant (N/m)",
                    x: "extension or compression from natural length (m)"
                },
                hookesLaw: "F = kx (spring force is proportional to extension, up to elastic limit)",
                derivation: "EPE = area under F-x graph = area of triangle = ½·(kx)·x = ½kx²",
                energyTransfer: "Compressed/extended spring releases EPE → KE when released"
            }
        },

        // ---- Conservation of mechanical energy ----
        conservationOfEnergy: {
            principle: "Energy cannot be created or destroyed; it can only be transferred or transformed between forms",
            mechanicalEnergy: {
                definition: "ME = KE + PE (sum of kinetic and all potential energies)",
                conservation: "ME is constant when ONLY conservative forces act",
                conservativeForces: "Gravity, spring force (do work that is independent of path)",
                nonConservativeForces: "Friction, air resistance, driving force (work depends on path)"
            },
            equations: {
                noFriction: "KE₁ + PE₁ = KE₂ + PE₂",
                noFrictionExpanded: "½mu₁² + mgh₁ = ½mv₂² + mgh₂",
                withFriction: "KE₁ + PE₁ = KE₂ + PE₂ + E_dissipated",
                frictionWork: "E_dissipated = fk × d (energy converted to thermal energy by friction)"
            },
            problemStrategy: [
                "Step 1: Identify the system and choose reference level (h = 0)",
                "Step 2: Write energy equation: (KE + PE)_initial = (KE + PE)_final + E_dissipated",
                "Step 3: Substitute known quantities",
                "Step 4: Solve for unknown",
                "Step 5: Verify answer makes physical sense"
            ]
        },

        // ---- Power ----
        power: {
            definition: "The rate at which work is done (or energy is transferred)",
            formulas: {
                fromWork: "P = W/t",
                fromEnergy: "P = ΔE/Δt",
                fromForceVelocity: "P = F·v·cos(θ) (instantaneous power = force × velocity component)",
                atConstantSpeed: "P = F·v (when F is in direction of v)"
            },
            unit: "Watts (W); 1 W = 1 J/s = 1 kg·m²·s⁻³",
            otherUnits: "1 kW = 1000 W; 1 MW = 10⁶ W; 1 horsepower ≈ 746 W",
            averageVsInstantaneous: {
                average: "P_avg = Total work done / Total time",
                instantaneous: "P = F·v at a specific instant"
            }
        },

        // ---- Efficiency ----
        efficiency: {
            definition: "Ratio of useful output energy to total input energy",
            formula: "η = (E_useful_output / E_total_input) × 100%",
            powerForm: "η = (P_useful_output / P_total_input) × 100%",
            note: "η < 100% always (some energy always dissipated to thermal energy, sound, etc.)",
            improvingEfficiency: "Reduce friction, improve aerodynamics, recover waste energy (e.g., regenerative braking)"
        },

        // ---- Spring energy problems ----
        springProblems: {
            setup: "Spring of constant k compressed/extended by x; released to accelerate mass m",
            energyConversion: "EPE stored → KE of mass as spring returns to natural length",
            frictionless: "½kx² = ½mv² → v = x·√(k/m)",
            withFriction: "½kx² = ½mv² + fk·d",
            verticalSpring: "Include GPE: ½kx² = ½mv² + mgh (if mass moves vertically)"
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "Work done at an angle",
                problem: "A 300 N force is applied at 40° to the horizontal to pull a crate 15 m along a floor. Calculate work done by the force.",
                solution: {
                    calculation: "W = F·d·cos(θ) = 300 × 15 × cos(40°) = 300 × 15 × 0.766 = 3447 J ≈ 3450 J"
                }
            },
            {
                title: "Conservation of energy — roller coaster",
                problem: "A 500 kg roller coaster car starts from rest at height 45 m. Find speed at ground level, assuming no friction.",
                solution: {
                    energyEquation: "mgh₁ + 0 = 0 + ½mv²",
                    simplify: "gh = ½v² → v² = 2gh = 2 × 9.81 × 45 = 882.9",
                    speed: "v = √882.9 = 29.7 m/s"
                }
            },
            {
                title: "Work against friction",
                problem: "A 50 kg sled slides 30 m down a 20° slope. μk = 0.15. Find speed at bottom. (Start from rest.)",
                solution: {
                    heightDrop: "h = 30·sin(20°) = 30 × 0.342 = 10.26 m",
                    gpe: "GPE = mgh = 50 × 9.81 × 10.26 = 5032 J",
                    normal: "N = mg·cos(20°) = 50 × 9.81 × 0.940 = 461 N",
                    frictionWork: "W_f = fk × d = μk·N·d = 0.15 × 461 × 30 = 2074 J",
                    keGained: "KE = GPE − W_f = 5032 − 2074 = 2958 J",
                    speed: "v = √(2·KE/m) = √(2 × 2958/50) = √(118.3) = 10.9 m/s"
                }
            },
            {
                title: "Power of an engine",
                problem: "A car of mass 1200 kg accelerates from 0 to 30 m/s in 8.0 s against a constant 500 N resistance. Calculate average engine power.",
                solution: {
                    keGained: "ΔKE = ½ × 1200 × 30² = 540,000 J",
                    workAgainstResistance: "W_resistance = 500 × d; d = average speed × time = 15 × 8 = 120 m → W = 500 × 120 = 60,000 J",
                    totalWork: "W_total = 540,000 + 60,000 = 600,000 J",
                    power: "P = W/t = 600,000/8.0 = 75,000 W = 75 kW"
                }
            },
            {
                title: "Spring launch",
                problem: "A spring of k = 800 N/m is compressed by 0.12 m and launches a 0.20 kg ball horizontally on a frictionless surface. Find the launch speed.",
                solution: {
                    epe: "EPE = ½kx² = ½ × 800 × 0.12² = 5.76 J",
                    ke: "KE = EPE = 5.76 J (frictionless)",
                    speed: "v = √(2·KE/m) = √(2 × 5.76/0.20) = √57.6 = 7.59 m/s"
                }
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "Write the formula for work done, kinetic energy, and gravitational potential energy",
                "State the work-energy theorem",
                "What is the unit of power, and what does it equal in base SI units?"
            ],
            understanding: [
                "Explain why no work is done when you hold a bag stationary at constant height",
                "Explain why a car travelling at twice the speed requires four times the kinetic energy",
                "Explain how friction 'breaks' conservation of mechanical energy"
            ],
            application: [
                "A 2 kg ball falls freely from rest through 8 m. Calculate its speed at the bottom",
                "A motor lifts a 150 kg load at constant speed of 2.0 m/s. Calculate the power output",
                "A spring of k = 400 N/m is compressed by 0.08 m. Calculate elastic potential energy stored"
            ],
            analysis: [
                "A pendulum bob is released from height h. Sketch graphs of KE and PE against time for one complete swing. Annotate key points",
                "A block slides down a rough ramp and continues along a rough floor. Sketch the KE-displacement graph and explain its shape",
                "Derive the formula v = √(2gh) for an object falling freely from height h using conservation of energy"
            ]
        },

        applications: [
            "Roller coaster design: minimum height for loop completion",
            "Hydroelectric stations: power output calculations",
            "Vehicle fuel economy and efficiency analysis",
            "Ski jump and launch trajectory design",
            "Pendulum clock mechanism and energy dissipation"
        ]
    };

    if (/spring|hooke/i.test(input)) {
        content.focus = "springProblems";
        content.highlightedSection = content.springProblems;
    } else if (/power|watt/i.test(input)) {
        content.focus = "power";
        content.highlightedSection = content.power;
    } else if (/conserv/i.test(input)) {
        content.focus = "conservationOfEnergy";
        content.highlightedSection = content.conservationOfEnergy;
    } else if (/work.*done|force.*displace/i.test(input)) {
        content.focus = "work";
        content.highlightedSection = content.work;
    }

    return content;
}


// ========================================
// MOMENTUM AND COLLISIONS HANDLER
// ========================================

handleMomentumCollisions(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Momentum, Impulse and Collisions",
        category: 'mechanics',
        summary: "Linear momentum is a conserved vector quantity in any closed system. Impulse equals change in momentum. Collisions are classified by whether kinetic energy is also conserved.",

        // ---- Momentum ----
        momentum: {
            definition: "The product of an object's mass and velocity",
            formula: "p = mv",
            unit: "kg·m/s (equivalent to N·s)",
            type: "Vector — direction same as velocity",
            properties: [
                "Momentum of a system is conserved when no external net force acts",
                "Momentum can be negative (depends on chosen positive direction)",
                "Momentum is transferred during collisions and explosions",
                "Total momentum of universe is constant (closed system)"
            ],
            conservationLaw: {
                statement: "In a closed system (no external forces), the total momentum before = total momentum after",
                formula: "Σp_before = Σp_after",
                expanded: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                origin: "Follows directly from Newton's Third Law — action-reaction forces are equal, opposite, and act for same time → equal and opposite changes in momentum → net change = 0"
            }
        },

        // ---- Impulse ----
        impulse: {
            definition: "The product of a force and the time for which it acts; equals the change in momentum",
            formula: "J = F·Δt = Δp = mv − mu",
            unit: "N·s = kg·m/s",
            type: "Vector — same direction as the net force",
            graphical: {
                method: "For a variable force, impulse = area under Force-Time graph",
                rectangular: "Constant force: J = F × t (rectangle area)",
                triangular: "Linearly increasing force from 0: J = ½ × F_max × t",
                general: "Count squares or use numerical integration"
            },
            importantConsequence: {
                principle: "Same change in momentum (impulse) can be achieved by large force for short time OR small force for long time",
                safetyApplication: "Increasing collision time (crumple zones, airbags, foam padding) reduces peak force for the same impulse → reduces injury",
                sportApplication: "Catching a ball: move hands back to extend contact time → reduce peak force on hands"
            }
        },

        // ---- Collision types ----
        collisionTypes: {
            elastic: {
                definition: "A collision in which both momentum AND kinetic energy are conserved",
                coefficient: "e = 1",
                equations: {
                    momentum: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                    ke: "½m₁u₁² + ½m₂u₂² = ½m₁v₁² + ½m₂v₂²"
                },
                specialCase_equalMasses: {
                    description: "If m₁ = m₂ and m₂ initially at rest: v₁ = 0, v₂ = u₁ (objects exchange velocities)",
                    example: "Newton's cradle — balls exchange velocities perfectly"
                },
                generalSolution: {
                    v1: "v₁ = ((m₁ − m₂)u₁ + 2m₂u₂) / (m₁ + m₂)",
                    v2: "v₂ = ((m₂ − m₁)u₂ + 2m₁u₁) / (m₁ + m₂)"
                },
                realExamples: "Billiard balls (approximately), helium atom collisions, elastic superball bounce"
            },
            inelastic: {
                definition: "A collision in which momentum is conserved but kinetic energy is NOT conserved (some KE converted to heat, sound, deformation)",
                coefficient: "0 < e < 1",
                equations: {
                    momentum: "m₁u₁ + m₂u₂ = m₁v₁ + m₂v₂",
                    keNote: "KE_after < KE_before; ΔKE = KE_before − KE_after (energy lost)"
                },
                realExamples: "Most real-world collisions (cars, balls on surfaces, footballs)"
            },
            perfectlyInelastic: {
                definition: "Objects stick together after collision; maximum kinetic energy loss for given momenta",
                coefficient: "e = 0",
                equation: "m₁u₁ + m₂u₂ = (m₁ + m₂)v_final",
                keLoss: {
                    formula: "ΔKE = ½m₁u₁² + ½m₂u₂² − ½(m₁+m₂)v_f²",
                    interpretation: "KE converted to thermal energy, sound, and permanent deformation"
                },
                realExamples: "Train carriage coupling, clay/putty collisions, catching a ball (catcher stops it)"
            }
        },

        // ---- Coefficient of restitution ----
        coefficientOfRestitution: {
            definition: "The ratio of the relative speed of separation to the relative speed of approach after a collision",
            formula: "e = (v₂ − v₁) / (u₁ − u₂)",
            note: "Numerator = relative velocity of separation; Denominator = relative velocity of approach (both positive by convention)",
            values: {
                elastic: "e = 1 (perfect bounce)",
                perfectlyInelastic: "e = 0 (no bounce, stick together)",
                typical: "0 < e < 1 for real collisions (e.g., tennis ball on court ≈ 0.7–0.85)",
                superelastic: "e > 1 theoretically possible if internal energy released (explosion)"
            },
            bouncing: {
                scenario: "Ball dropped from height H₀ bounces to height H₁",
                formula: "e = √(H₁/H₀)",
                derivation: "Speed before impact v₀ = √(2gH₀); speed after v₁ = √(2gH₁); e = v₁/v₀ = √(H₁/H₀)"
            }
        },

        // ---- Explosions ----
        explosions: {
            description: "Two or more objects initially at rest (or moving together) fly apart due to an internal force",
            conservation: "Total initial momentum = Total final momentum",
            zeroInitialMomentum: "If system at rest: m₁v₁ + m₂v₂ = 0 → v₁ = −(m₂/m₁)v₂",
            interpretation: "The heavier fragment moves slower; lighter fragment moves faster; momenta are equal and opposite",
            examples: [
                "Gun recoil: m_bullet × v_bullet = −m_gun × v_gun",
                "Rocket launch: m_exhaust × v_exhaust + m_rocket × v_rocket = initial momentum",
                "Nuclear fission: nucleus splits into fragments + neutrons + energy"
            ]
        },

        // ---- 2D collisions ----
        twoDimensionalCollisions: {
            principle: "Momentum is conserved independently in both x and y directions",
            equations: {
                x: "m₁u₁ₓ + m₂u₂ₓ = m₁v₁ₓ + m₂v₂ₓ",
                y: "m₁u₁ᵧ + m₂u₂ᵧ = m₁v₁ᵧ + m₂v₂ᵧ"
            },
            method: [
                "Resolve all velocities into x and y components",
                "Apply conservation of momentum in x-direction",
                "Apply conservation of momentum in y-direction",
                "Use Pythagoras and arctan to find resultant speed and direction"
            ],
            example: "Glancing collision in billiards; vehicle collisions at junctions"
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "Perfectly inelastic collision",
                problem: "A 3.0 kg ball moving at 8.0 m/s collides with a stationary 5.0 kg ball. They stick together. Find final velocity and KE lost.",
                solution: {
                    momentumBefore: "p = 3.0 × 8.0 + 0 = 24 kg·m/s",
                    finalVelocity: "v = p / (m₁ + m₂) = 24 / 8.0 = 3.0 m/s",
                    keBefore: "KE_i = ½ × 3.0 × 8.0² = 96 J",
                    keAfter: "KE_f = ½ × 8.0 × 3.0² = 36 J",
                    keLost: "ΔKE = 96 − 36 = 60 J (converted to heat and deformation)"
                }
            },
            {
                title: "Elastic collision — unequal masses",
                problem: "A 2.0 kg ball at 6.0 m/s collides head-on elastically with a 6.0 kg ball at rest. Find velocities after collision.",
                solution: {
                    v1: "v₁ = (m₁−m₂)u₁/(m₁+m₂) = (2−6)×6/(2+6) = −24/8 = −3.0 m/s (bounces back)",
                    v2: "v₂ = 2m₁u₁/(m₁+m₂) = 2×2×6/8 = 24/8 = 3.0 m/s (moves forward)",
                    check_momentum: "p_before = 2×6 = 12; p_after = 2×(−3)+6×3 = −6+18 = 12 ✓",
                    check_ke: "KE_before = ½×2×36 = 36 J; KE_after = ½×2×9 + ½×6×9 = 9+27 = 36 J ✓"
                }
            },
            {
                title: "Impulse and force",
                problem: "A 0.15 kg cricket ball moving at 35 m/s is hit by a bat. The ball leaves at 45 m/s in the opposite direction. Contact lasts 0.002 s. Find impulse and average force.",
                solution: {
                    direction: "Taking original direction as positive: u = +35 m/s, v = −45 m/s",
                    impulse: "J = Δp = mv − mu = 0.15×(−45) − 0.15×(35) = −6.75 − 5.25 = −12.0 N·s",
                    magnitude: "|J| = 12.0 N·s (direction reversed by bat)",
                    force: "F = J/Δt = 12.0/0.002 = 6000 N (average force from bat on ball)"
                }
            },
            {
                title: "Explosion — gun recoil",
                problem: "A 4.0 kg rifle fires a 0.020 kg bullet at 600 m/s. Find the recoil velocity of the rifle.",
                solution: {
                    initial: "Total initial momentum = 0 (rifle and bullet at rest)",
                    conservation: "0 = m_bullet × v_bullet + m_rifle × v_rifle",
                    calculation: "0 = 0.020 × 600 + 4.0 × v_rifle → v_rifle = −12/4.0 = −3.0 m/s",
                    result: "Rifle recoils at 3.0 m/s opposite to bullet direction"
                }
            },
            {
                title: "Coefficient of restitution",
                problem: "A ball is dropped from 2.5 m and bounces back to 1.4 m. Find the coefficient of restitution.",
                solution: {
                    formula: "e = √(H₁/H₀) = √(1.4/2.5) = √0.56 = 0.748",
                    result: "e ≈ 0.75"
                }
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "Define momentum and state its unit",
                "State the principle of conservation of linear momentum",
                "What is the coefficient of restitution and what value does it take for a perfectly elastic collision?"
            ],
            understanding: [
                "Explain why crumple zones in cars reduce injury severity even though they do not reduce the change in momentum of the passenger",
                "Explain how conservation of momentum follows from Newton's Third Law",
                "Explain why kinetic energy is not conserved in most real collisions"
            ],
            application: [
                "A 5.0 kg object moving at 4.0 m/s collides with a stationary 3.0 kg object and they stick together. Find the final velocity",
                "A rubber ball of mass 0.10 kg hits a wall at 8.0 m/s and bounces back at 6.0 m/s. Calculate the impulse delivered to the wall",
                "Two equal mass objects undergo a perfectly elastic head-on collision. Object A moves at 5 m/s; object B is stationary. What are the velocities after collision?"
            ],
            analysis: [
                "Sketch the Force-Time graph for a ball bouncing off a floor. Indicate what the area under the graph represents",
                "A 1000 kg car travelling at 20 m/s rear-ends a stationary 1200 kg car. They stick together. Calculate the kinetic energy lost and suggest where this energy goes",
                "Derive the formula for the velocity of each ball after a 1D elastic collision between unequal masses"
            ]
        },

        applications: [
            "Vehicle safety engineering (crumple zones, airbags, seatbelts)",
            "Ballistics and forensic reconstruction of collisions",
            "Rocket and jet propulsion design",
            "Particle physics: analysing bubble chamber tracks",
            "Sports equipment design (golf clubs, cricket bats, rackets)"
        ]
    };

    if (/explosion|recoil|gun|rocket/i.test(input)) {
        content.focus = "explosions";
        content.highlightedSection = content.explosions;
    } else if (/elastic.*collision|inelastic/i.test(input)) {
        content.focus = "collisionTypes";
        content.highlightedSection = content.collisionTypes;
    } else if (/impulse|impact.*time|crumple/i.test(input)) {
        content.focus = "impulse";
        content.highlightedSection = content.impulse;
    } else if (/restitution|bounce/i.test(input)) {
        content.focus = "coefficientOfRestitution";
        content.highlightedSection = content.coefficientOfRestitution;
    }

    return content;
}


// ========================================
// CIRCULAR MOTION HANDLER
// ========================================

handleCircularMotion(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Circular and Rotational Motion",
        category: 'mechanics',
        summary: "An object in circular motion has continuously changing velocity direction, so it accelerates toward the centre. This centripetal acceleration requires a net inward force. Rotational quantities are directly analogous to linear ones.",

        // ---- Angular quantities ----
        angularQuantities: {
            angularDisplacement: {
                symbol: "θ",
                unit: "radians (rad)",
                definition: "Angle swept from reference direction",
                conversion: "360° = 2π rad; 1 rad = 180°/π ≈ 57.3°"
            },
            angularVelocity: {
                symbol: "ω",
                unit: "rad/s",
                definition: "Rate of change of angular displacement",
                formula: "ω = Δθ/Δt = 2π/T = 2πf",
                relationship: "v = rω (linear speed at radius r)"
            },
            angularAcceleration: {
                symbol: "α",
                unit: "rad/s²",
                definition: "Rate of change of angular velocity",
                formula: "α = Δω/Δt",
                relationship: "aₜ = rα (tangential acceleration at radius r)"
            },
            period: {
                symbol: "T",
                unit: "seconds (s)",
                definition: "Time for one complete revolution",
                formula: "T = 2π/ω = 1/f"
            },
            frequency: {
                symbol: "f",
                unit: "Hz (revolutions per second)",
                definition: "Number of complete revolutions per second",
                formula: "f = 1/T = ω/(2π)",
                rpm: "Revolutions per minute: rpm = 60f"
            }
        },

        // ---- Centripetal acceleration and force ----
        centripetalMotion: {
            centripetal_acceleration: {
                direction: "Always toward the centre of the circle (centripetal = 'centre-seeking')",
                magnitude: "aₒ = v²/r = ω²r",
                derivation: "From vector geometry: changing direction of constant-speed velocity vector → Δv directed inward → a = Δv/Δt = v²/r",
                note: "Even at constant speed, there IS acceleration because direction changes continuously"
            },
            centripetal_force: {
                definition: "The net force required to maintain circular motion; directed toward centre",
                formula: "Fₒ = mv²/r = mω²r",
                important: "Centripetal force is NOT a new type of force — it is the name for whatever net force is directed inward. It can be gravity, tension, normal force, friction, or any combination",
                examples: [
                    { system: "Ball on string", centripetal_force: "Tension in string" },
                    { system: "Planet orbiting star", centripetal_force: "Gravitational force" },
                    { system: "Car going around flat bend", centripetal_force: "Friction between tyres and road" },
                    { system: "Car on banked curve", centripetal_force: "Horizontal component of normal force" },
                    { system: "Electron in atom", centripetal_force: "Electrostatic attraction to nucleus" }
                ]
            },
            centrifugalForce: {
                status: "Fictitious force — does NOT exist in inertial reference frame",
                explanation: "In a rotating reference frame (non-inertial), objects appear to be pushed outward. This is because the observer is accelerating inward (with the rotation) and Newton's laws don't directly apply",
                inInertialFrame: "Objects released from circular motion travel in a straight line tangentially — not outward. This is Newton's First Law.",
                commonMisconception: "Objects do NOT fly outward — they travel tangentially. The 'outward feeling' is the reaction to centripetal acceleration."
            }
        },

        // ---- Rotational kinematics ----
        rotationalKinematics: {
            analogues: {
                "s  ↔  θ": "linear displacement ↔ angular displacement",
                "v  ↔  ω": "linear velocity ↔ angular velocity",
                "a  ↔  α": "linear acceleration ↔ angular acceleration",
                "m  ↔  I": "mass (inertia) ↔ moment of inertia",
                "F  ↔  τ": "force ↔ torque",
                "p = mv  ↔  L = Iω": "linear momentum ↔ angular momentum",
                "KE = ½mv²  ↔  KE = ½Iω²": "linear KE ↔ rotational KE",
                "F = ma  ↔  τ = Iα": "Newton's 2nd law linear ↔ rotational"
            },
            equations: [
                { equation: "ω = ω₀ + αt", missing: "θ" },
                { equation: "θ = ω₀t + ½αt²", missing: "ω" },
                { equation: "ω² = ω₀² + 2αθ", missing: "t" },
                { equation: "θ = ½(ω₀ + ω)t", missing: "α" }
            ]
        },

        // ---- Torque ----
        torque: {
            definition: "The rotational effect of a force; the turning moment",
            formula: "τ = r × F = rF·sin(θ)",
            variables: {
                r: "perpendicular distance from pivot to line of action of force (m)",
                F: "magnitude of force (N)",
                theta: "angle between force and the moment arm"
            },
            unit: "Newton-metre (N·m)",
            newtonSecond: "ΣΤ = Iα (rotational analogue of F = ma)",
            equilibrium: "For rotational equilibrium: Σclockwise torques = Σanticlockwise torques",
            couple: {
                definition: "Two equal, opposite, parallel forces separated by distance d",
                torque: "τ = F × d (independent of pivot point)"
            }
        },

        // ---- Moment of inertia ----
        momentOfInertia: {
            definition: "A measure of an object's resistance to angular acceleration; depends on mass distribution relative to axis",
            formula: "I = Σmᵢrᵢ² (sum of mass × radius² for all particles)",
            unit: "kg·m²",
            commonValues: {
                solidSphere: "I = ⅖mr² (about diameter)",
                hollowSphere: "I = ⅔mr² (about diameter)",
                solidCylinder: "I = ½mr² (about central axis)",
                hollowCylinder: "I = mr² (about central axis — all mass at r)",
                thinRod_centre: "I = (1/12)mL² (about perpendicular axis through centre)",
                thinRod_end: "I = (1/3)mL² (about perpendicular axis through end)",
                pointMass: "I = mr²"
            },
            parallelAxis: "I = I_cm + md² (moment of inertia about axis parallel to cm axis, distance d away)"
        },

        // ---- Angular momentum ----
        angularMomentum: {
            definition: "Rotational analogue of linear momentum",
            formula: "L = Iω",
            unit: "kg·m²/s",
            conservation: {
                statement: "L is conserved when there is no net external torque on the system",
                formula: "I₁ω₁ = I₂ω₂",
                example: "Ice skater pulls arms in → I decreases → ω increases (spins faster)"
            }
        },

        // ---- Specific systems ----
        specificSystems: {
            verticalCircle: {
                description: "Object on string moving in vertical circle; speed varies due to gravity",
                minSpeedAtTop: "v_min at top = √(gr) (string just goes slack: T → 0, gravity provides centripetal force)",
                tensionAtTop: "T = mv²/r − mg",
                tensionAtBottom: "T = mv²/r + mg (tension greatest at bottom)",
                conditionForCompleteCircle: "v at top ≥ √(gr)"
            },
            bankingAngle: {
                description: "Road banked at angle θ provides centripetal force without friction",
                derivation: "N·sin(θ) = mv²/r (horizontal), N·cos(θ) = mg (vertical)",
                optimalAngle: "tan(θ) = v²/(rg)",
                note: "At the design speed, no friction needed; above/below design speed, friction needed"
            },
            satelliteOrbit: {
                description: "Satellite in circular orbit: gravity provides centripetal force",
                equation: "GMm/r² = mv²/r → v = √(GM/r)",
                period: "T = 2πr/v = 2πr√(r/GM) = 2π√(r³/GM)",
                geostationary: "T = 24 h; orbit at fixed point above Earth; r ≈ 42,300 km"
            }
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "Car on flat circular bend",
                problem: "A 1500 kg car travels at 20 m/s around a flat circular bend of radius 80 m. Find centripetal force and minimum friction coefficient needed.",
                solution: {
                    centripetalForce: "F = mv²/r = 1500 × 400/80 = 7500 N",
                    friction_must_provide: "Friction must provide 7500 N centripetal force",
                    muRequired: "f = μmg → μ = F/(mg) = 7500/(1500×9.81) = 7500/14715 = 0.51"
                }
            },
            {
                title: "Ball on string in vertical circle",
                problem: "A 0.5 kg ball on a 0.8 m string moves in a vertical circle. Find minimum speed at the top and tension at bottom at this minimum speed.",
                solution: {
                    minSpeedTop: "v_top = √(gr) = √(9.81 × 0.8) = √7.848 = 2.80 m/s",
                    speedAtBottom: "Using energy: ½mv_b² = ½mv_t² + mg(2r) → v_b² = v_t² + 4gr = 7.848 + 4×9.81×0.8 = 7.848 + 31.39 = 39.24 → v_b = 6.26 m/s",
                    tensionBottom: "T − mg = mv_b²/r → T = m(v_b²/r + g) = 0.5×(39.24/0.8 + 9.81) = 0.5×(49.05 + 9.81) = 0.5×58.86 = 29.4 N"
                }
            },
            {
                title: "Angular acceleration",
                problem: "A flywheel starts from rest and reaches 240 rpm in 8.0 s. Find angular acceleration and angle turned.",
                solution: {
                    omega: "ω = 240 rpm = 240 × 2π/60 = 25.1 rad/s",
                    alpha: "α = Δω/Δt = 25.1/8.0 = 3.14 rad/s²",
                    theta: "θ = ω₀t + ½αt² = 0 + ½ × 3.14 × 64 = 100.5 rad",
                    revolutions: "Revolutions = 100.5/(2π) = 16.0 revolutions"
                }
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "Write the formula for centripetal acceleration in terms of v and r, and in terms of ω and r",
                "State the rotational analogue of Newton's Second Law",
                "Write the formula for the moment of inertia of a solid cylinder about its central axis"
            ],
            understanding: [
                "Explain why an object moving at constant speed in a circle is still accelerating",
                "Explain why centrifugal force is described as a fictitious force",
                "Explain why an ice skater spins faster when they pull their arms in"
            ],
            application: [
                "A 0.3 kg ball on a 0.5 m string is swung in a horizontal circle at 4.0 m/s. Find tension and angular velocity",
                "A satellite orbits Earth at radius 6.8 × 10⁶ m. Find its orbital speed and period (G = 6.67×10⁻¹¹, M_Earth = 6.0×10²⁴ kg)",
                "A disc of mass 2.0 kg and radius 0.15 m rotates at 5.0 rad/s. Find its angular momentum"
            ],
            analysis: [
                "Derive the expression for optimal banking angle tan(θ) = v²/(rg)",
                "Sketch and annotate the free body diagram for a car at the top and bottom of a hilly road. Explain when the car would lose contact with the road",
                "Compare how an object on a string and a car on a flat road are both examples of circular motion provided by different types of centripetal force"
            ]
        },

        applications: [
            "Satellite and planetary orbital mechanics",
            "Road and track banking design",
            "Centrifuges in medical diagnostics and food industry",
            "Gyroscopes in navigation and stabilisation",
            "Design of turbines, engines, and flywheels"
        ]
    };

    if (/vertical.*circle|top.*loop|loop.*top/i.test(input)) {
        content.focus = "verticalCircle";
        content.highlightedSection = content.specificSystems.verticalCircle;
    } else if (/banking|banked.*road/i.test(input)) {
        content.focus = "bankingAngle";
        content.highlightedSection = content.specificSystems.bankingAngle;
    } else if (/satellite|orbit/i.test(input)) {
        content.focus = "satelliteOrbit";
        content.highlightedSection = content.specificSystems.satelliteOrbit;
    } else if (/torque|moment.*of.*inertia|angular.*momentum/i.test(input)) {
        content.focus = "rotationalDynamics";
        content.highlightedSection = { torque: content.torque, momentOfInertia: content.momentOfInertia, angularMomentum: content.angularMomentum };
    }

    return content;
}


// ========================================
// OSCILLATIONS HANDLER
// ========================================

handleOscillations(problem) {
    const input = (problem || '').toString().toLowerCase();

    const content = {
        topic: "Oscillations and Simple Harmonic Motion (SHM)",
        category: 'mechanics',
        summary: "SHM is a special type of oscillation where the restoring force is proportional to and directed opposite to displacement. This produces sinusoidal motion with period independent of amplitude.",

        // ---- Defining SHM ----
        definitionOfSHM: {
            physicalCondition: "Restoring force is proportional to displacement and directed toward equilibrium",
            forceEquation: "F = −kx (k is a positive constant; negative sign means force opposes displacement)",
            accelerationEquation: "a = −ω²x (THE DEFINING EQUATION of SHM)",
            interpretation: [
                "At x = 0 (equilibrium): a = 0, F = 0 (no restoring force needed)",
                "At x = +A (extreme right): a = −ω²A (maximum acceleration, directed left/back to centre)",
                "At x = −A (extreme left): a = +ω²A (maximum acceleration, directed right/back to centre)"
            ],
            testForSHM: "If a graph of acceleration against displacement is a straight line through the origin with negative gradient (= −ω²), the motion is SHM"
        },

        // ---- Key terms ----
        keyTerms: {
            amplitude: {
                symbol: "A",
                unit: "m",
                definition: "Maximum displacement from the equilibrium position",
                note: "Period is independent of amplitude in ideal SHM"
            },
            period: {
                symbol: "T",
                unit: "s",
                definition: "Time for one complete oscillation",
                formula: "T = 2π/ω = 1/f"
            },
            frequency: {
                symbol: "f",
                unit: "Hz",
                definition: "Number of complete oscillations per second",
                formula: "f = 1/T = ω/(2π)"
            },
            angularFrequency: {
                symbol: "ω",
                unit: "rad/s",
                definition: "Rate of change of phase angle",
                formula: "ω = 2πf = 2π/T = √(k/m) for spring-mass",
                derived: "From F = ma and F = −kx: −kx = ma → a = −(k/m)x → ω² = k/m"
            },
            phase: {
                symbol: "φ",
                unit: "rad",
                definition: "Determines the starting point of oscillation within the cycle",
                cosine: "x = A·cos(ωt): starts at x = +A, v = 0 (released from amplitude)",
                sine: "x = A·sin(ωt): starts at x = 0, v = +Aω (passes through equilibrium going positive)"
            }
        },

        // ---- Displacement, velocity, acceleration equations ----
        shmEquations: {
            displacement: {
                formula: "x = A·cos(ωt + φ)",
                common_forms: {
                    released_from_A: "x = A·cos(ωt)  (start at x = +A, v = 0)",
                    from_equilibrium: "x = A·sin(ωt)  (start at x = 0, v = +Aω)"
                }
            },
            velocity: {
                formula_from_time: "v = −Aω·sin(ωt)  [using x = A·cos(ωt)]",
                formula_from_displacement: "v = ±ω√(A² − x²)",
                maximum: "v_max = Aω  (occurs at x = 0)",
                derivation: "v = dx/dt; also from energy: ½mv² + ½mω²x² = ½mω²A²"
            },
            acceleration: {
                formula_from_time: "a = −Aω²·cos(ωt)  [using x = A·cos(ωt)]",
                formula_from_displacement: "a = −ω²x  (fundamental SHM equation)",
                maximum: "a_max = Aω²  (occurs at x = ±A)",
                direction: "Always opposite to x (directed toward equilibrium)"
            },
            summary_table: [
                { position: "x = 0 (equilibrium)", displacement: "0", velocity: "v_max = Aω", acceleration: "0", force: "0" },
                { position: "x = +A (positive extreme)", displacement: "+A", velocity: "0", acceleration: "−Aω²", force: "−kA" },
                { position: "x = −A (negative extreme)", displacement: "−A", velocity: "0", acceleration: "+Aω²", force: "+kA" }
            ]
        },

        // ---- Energy in SHM ----
        energyInSHM: {
            kineticEnergy: {
                formula: "KE = ½mω²(A² − x²)",
                maximum: "KE_max = ½mω²A² (at x = 0)",
                atExtremes: "KE = 0 (at x = ±A)"
            },
            potentialEnergy: {
                formula: "PE = ½mω²x²",
                maximum: "PE_max = ½mω²A² (at x = ±A)",
                atEquilibrium: "PE = 0 (at x = 0)"
            },
            totalEnergy: {
                formula: "E = KE + PE = ½mω²A² = constant",
                note: "Total mechanical energy is constant in undamped SHM; depends on amplitude squared",
                implication: "Double amplitude → quadruple total energy"
            },
            graphDescription: {
                kePlot: "KE vs x: inverted parabola, maximum at x = 0, zero at x = ±A",
                pePlot: "PE vs x: parabola (upright), zero at x = 0, maximum at x = ±A",
                totalPlot: "Total E vs x: horizontal line (constant)",
                kePlotVsTime: "KE vs t: always ≥ 0; oscillates between 0 and maximum at double frequency"
            }
        },

        // ---- Spring-mass system ----
        springMassSystem: {
            setup: "Mass m on frictionless horizontal surface attached to spring of constant k",
            restoring_force: "F = −kx (Hooke's Law)",
            equations: {
                period: "T = 2π√(m/k)",
                frequency: "f = (1/2π)√(k/m)",
                angularFrequency: "ω = √(k/m)"
            },
            dependencies: {
                massEffect: "Larger mass → longer period (more inertia to accelerate)",
                springEffect: "Stiffer spring (larger k) → shorter period (stronger restoring force)",
                amplitudeEffect: "Period is INDEPENDENT of amplitude in ideal SHM"
            },
            verticalSpring: {
                equilibriumExtension: "At equilibrium: mg = kx₀ → x₀ = mg/k",
                shmAboutNewEquilibrium: "Oscillates about new equilibrium (not natural length); period same as horizontal: T = 2π√(m/k)"
            }
        },

        // ---- Simple pendulum ----
        simplePendulum: {
            setup: "Point mass m on inextensible string of length L, small angle oscillations",
            derivation: {
                restoring_force: "F = −mg·sin(θ) ≈ −mg·(x/L) = −(mg/L)·x for small θ",
                comparison: "Compare with F = −kx: effective spring constant k_eff = mg/L",
                angularFrequency: "ω = √(k_eff/m) = √(mg/mL) = √(g/L)"
            },
            equations: {
                period: "T = 2π√(L/g)",
                frequency: "f = (1/2π)√(g/L)",
                angularFrequency: "ω = √(g/L)"
            },
            dependencies: {
                length: "Longer pendulum → longer period (T ∝ √L)",
                gravity: "Stronger gravity → shorter period (T ∝ 1/√g)",
                mass: "Period is INDEPENDENT of mass",
                amplitude: "Period is INDEPENDENT of amplitude for small angles (< ~15°)",
                smallAngleLimit: "Approximation sin(θ) ≈ θ only valid for small θ; for large angles, period increases"
            },
            applications: [
                "Pendulum clocks: T depends only on L and g → very consistent timing",
                "Foucault pendulum: demonstrates Earth's rotation",
                "Measuring g: g = 4π²L/T²"
            ]
        },

        // ---- Damping ----
        damping: {
            definition: "Reduction in amplitude of oscillation due to dissipation of energy (friction, air resistance, viscosity)",
            types: {
                underdamped: {
                    description: "Oscillation continues but amplitude decreases exponentially over time",
                    appearance: "Sinusoidal curve with decaying envelope",
                    realExample: "Pendulum in air, car suspension after bump",
                    formula: "x = A₀e^(−γt)·cos(ω't) where γ is damping constant"
                },
                criticalDamping: {
                    description: "System returns to equilibrium as fast as possible without oscillating",
                    appearance: "Exponential decay to zero; no oscillations",
                    realExample: "Car shock absorbers (engineered to be critically damped); door closers"
                },
                overdamping: {
                    description: "System returns very slowly to equilibrium without oscillating",
                    appearance: "Slow exponential approach to equilibrium",
                    realExample: "Shock absorber filled with very thick oil"
                }
            },
            energyLoss: "Damping converts mechanical energy to thermal energy; total energy decreases each cycle",
            lightly_vs_heavily: "Lightly damped: many oscillations before amplitude drops significantly; heavily damped: returns to equilibrium quickly"
        },

        // ---- Resonance ----
        resonance: {
            naturalFrequency: {
                definition: "The frequency at which a system oscillates when displaced and released freely",
                symbol: "f₀",
                examples: "Spring: f₀ = (1/2π)√(k/m); pendulum: f₀ = (1/2π)√(g/L)"
            },
            forcedOscillation: {
                description: "A periodic driving force applied to the system at frequency f_d",
                response: "System oscillates at driving frequency f_d, not necessarily at f₀"
            },
            resonance: {
                definition: "When driving frequency f_d ≈ natural frequency f₀, amplitude becomes very large",
                effects: [
                    "Amplitude increases dramatically — limited only by damping",
                    "Phase difference between force and displacement = π/2 at resonance"
                ],
                dampingEffect: "Heavier damping: lower amplitude at resonance, broader resonance peak, resonance occurs slightly below f₀",
                realExamples: [
                    "Tacoma Narrows Bridge collapse (1940): wind frequency matched bridge natural frequency",
                    "Glass singing: friction drives glass at natural frequency → resonance shatters glass",
                    "Tuning a radio: adjust circuit resonant frequency to match broadcast frequency",
                    "MRI machine: proton resonance in magnetic field",
                    "Quartz watch: quartz crystal oscillates at precise natural frequency"
                ],
                avoiding: [
                    "Change natural frequency by changing k or m",
                    "Add damping to limit amplitude at resonance",
                    "Change operating frequency away from resonance"
                ]
            }
        },

        // ---- Worked examples ----
        workedExamples: [
            {
                title: "Spring-mass system",
                problem: "A 0.50 kg mass on a spring (k = 80 N/m) oscillates with amplitude 0.06 m. Find period, maximum speed, and maximum acceleration.",
                solution: {
                    omega: "ω = √(k/m) = √(80/0.50) = √160 = 12.65 rad/s",
                    period: "T = 2π/ω = 2π/12.65 = 0.497 s",
                    maxSpeed: "v_max = Aω = 0.06 × 12.65 = 0.759 m/s",
                    maxAccel: "a_max = Aω² = 0.06 × 160 = 9.60 m/s²",
                    check: "F_max = ma_max = 0.50 × 9.60 = 4.80 N = kA = 80 × 0.06 = 4.80 N ✓"
                }
            },
            {
                title: "Simple pendulum — measuring g",
                problem: "A pendulum of length 0.65 m makes 20 oscillations in 32.4 s. Calculate g.",
                solution: {
                    period: "T = 32.4/20 = 1.62 s",
                    gFormula: "T = 2π√(L/g) → T² = 4π²L/g → g = 4π²L/T²",
                    g: "g = 4π² × 0.65 / 1.62² = 25.61/2.626 = 9.75 m/s²",
                    note: "Close to 9.81 m/s²; small difference due to experimental error"
                }
            },
            {
                title: "Speed at a given displacement",
                problem: "A particle executes SHM with amplitude 0.10 m and frequency 2.0 Hz. Find speed when x = 0.06 m.",
                solution: {
                    omega: "ω = 2πf = 2π × 2.0 = 4π = 12.57 rad/s",
                    speed: "v = ω√(A² − x²) = 12.57 × √(0.10² − 0.06²) = 12.57 × √(0.01 − 0.0036) = 12.57 × √0.0064 = 12.57 × 0.08 = 1.005 m/s"
                }
            },
            {
                title: "Energy in SHM",
                problem: "A 0.2 kg mass on a spring oscillates with amplitude 0.05 m and ω = 10 rad/s. Find total energy, KE and PE at x = 0.03 m.",
                solution: {
                    totalEnergy: "E = ½mω²A² = ½ × 0.2 × 100 × 0.0025 = 0.025 J",
                    ke: "KE = ½mω²(A² − x²) = ½ × 0.2 × 100 × (0.0025 − 0.0009) = 10 × 0.0016 = 0.016 J",
                    pe: "PE = ½mω²x² = ½ × 0.2 × 100 × 0.0009 = 0.009 J",
                    check: "KE + PE = 0.016 + 0.009 = 0.025 J = E ✓"
                }
            },
            {
                title: "Identifying SHM from data",
                problem: "Measurements on an oscillating mass give: at x = 0.04 m, a = −6.4 m/s²; at x = 0.02 m, a = −3.2 m/s². Verify SHM and find ω.",
                solution: {
                    ratio: "a/x = −6.4/0.04 = −160 and −3.2/0.02 = −160 → constant ratio ✓",
                    shmConfirmed: "Since a = −ω²x and ratio a/x is constant (= −160), this is SHM",
                    omega: "ω² = 160 → ω = √160 = 12.65 rad/s",
                    period: "T = 2π/12.65 = 0.497 s"
                }
            }
        ],

        // ---- Assessment questions ----
        assessmentQuestions: {
            recall: [
                "Write the defining equation of SHM in terms of acceleration and displacement",
                "Write the formula for the period of (a) a spring-mass system and (b) a simple pendulum",
                "Describe the three types of damping"
            ],
            understanding: [
                "Explain why the period of a simple pendulum is independent of the mass of the bob",
                "Explain the difference between free oscillation, forced oscillation, and resonance",
                "Explain why the speed of an SHM oscillator is maximum at the equilibrium position"
            ],
            application: [
                "A spring of k = 120 N/m has a 0.30 kg mass attached. Find the period of oscillation",
                "A pendulum has a period of 1.40 s. Calculate its length (g = 9.81 m/s²)",
                "An SHM oscillator has A = 0.08 m and ω = 5.0 rad/s. Find the speed at x = 0.05 m"
            ],
            analysis: [
                "Sketch graphs of displacement, velocity, and acceleration against time for one complete cycle of SHM starting from x = +A. Indicate phase relationships",
                "Sketch KE and PE against displacement x for SHM. Explain the shape of each curve",
                "A resonance experiment plots amplitude against driving frequency. Sketch the results for light, moderate, and heavy damping on the same axes. Annotate key features"
            ]
        },

        applications: [
            "Pendulum and quartz clocks for precise timekeeping",
            "Seismographs: ground vibrations detected as SHM of a suspended mass",
            "Musical instruments: strings, pipes, and membranes vibrate at natural frequencies",
            "Earthquake-resistant building design: isolate natural frequency from seismic frequencies",
            "Medical diagnostics: MRI uses nuclear magnetic resonance; ultrasound uses piezoelectric SHM"
        ]
    };

    if (/pendulum/i.test(input)) {
        content.focus = "simplePendulum";
        content.highlightedSection = content.simplePendulum;
    } else if (/spring/i.test(input)) {
        content.focus = "springMassSystem";
        content.highlightedSection = content.springMassSystem;
    } else if (/resonan/i.test(input)) {
        content.focus = "resonance";
        content.highlightedSection = content.resonance;
    } else if (/energy.*shm|shm.*energy/i.test(input)) {
        content.focus = "energyInSHM";
        content.highlightedSection = content.energyInSHM;
    } else if (/damp/i.test(input)) {
        content.focus = "damping";
        content.highlightedSection = content.damping;
    }

    return content;
}

// ========================================
// MAIN PROBLEM PROCESSING METHODS
// ========================================

parseMechanicsProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.mechanicsTopics)) {
        if (type === topic || type === subTopic) {
            topicType = type;
            break;
        }
        
        for (const pattern of config.patterns) {
            if (pattern.test(topic) || (subTopic && pattern.test(subTopic))) {
                topicType = type;
                break;
            }
        }
        if (topicType) break;
    }

    if (!topicType) {
        throw new Error(`Unable to recognize mechanics topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        difficulty: this.mechanicsTopics[topicType].difficulty,
        prerequisites: this.mechanicsTopics[topicType].prerequisites,
        parsedAt: new Date().toISOString()
    };
}

handleMechanicsProblem(config) {
    const { topic, parameters, subTopic, context, requestType } = config;

    try {
        const isExperimentRequest = requestType === 'experiment' || 
                                   (typeof topic === 'string' && topic.toLowerCase().includes('experiment'));

        if (isExperimentRequest) {
            return this.handleExperimentRequest(config);
        } else {
            this.currentProblem = this.parseMechanicsProblem(topic, parameters, subTopic, context);
            this.currentContent = this.getMechanicsContent(this.currentProblem);
            
            if (this.adaptiveDifficulty) {
                this.currentContent = this.adaptContentDifficulty(this.currentContent, this.learnerProfile.currentLevel);
            }
            
            if (this.contextualLearning) {
                this.currentContent.contextualScenarios = this.getContextualScenarios(this.currentProblem.type);
            }
            
            if (this.includeExperiments) {
                this.currentContent.relatedExperiments = this.getRelatedExperiments(this.currentProblem.type);
            }
            
            if (this.metacognitiveSupport) {
                this.currentContent.metacognitivePrompts = this.getMetacognitivePrompts(this.currentProblem.type);
            }
            
            this.contentSteps = this.generateMechanicsContent(this.currentProblem, this.currentContent);
            
            // Generate workbook (handles async internally)
            this.generateMechanicsWorkbook();

            // Return synchronously with promise for diagrams
            return {
                workbook: this.currentWorkbook,
                content: this.currentContent,
                steps: this.contentSteps,
                diagrams: this.diagramData,
                experiments: this.currentContent.relatedExperiments,
                learnerProfile: this.learnerProfile,
                getDiagrams: () => this.waitForDiagrams()
            };
        }
    } catch (error) {
        throw new Error(`Failed to process mechanics request: ${error.message}`);
    }
}

getMechanicsContent(problem) {
    const handler = this.mechanicsTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for mechanics topic: ${problem.type}`);
    }

    let content = handler(problem);

    // Apply parameter filtering if parameters are provided
    if (problem.parameters && Object.keys(problem.parameters).length > 0) {
        content = this.filterContentByParameters(content, problem.parameters);
    }

    return content;
}

filterContentByParameters(content, parameters) {
    if (!parameters || Object.keys(parameters).length === 0) {
        return content;
    }

    const filtered = { ...content };

    // Filter by specific items
    if (parameters.specificItems && Array.isArray(parameters.specificItems)) {
        // Filter arrays in content
        Object.keys(filtered).forEach(key => {
            if (Array.isArray(filtered[key])) {
                filtered[key] = filtered[key].filter(item => {
                    if (typeof item === 'object' && item.name) {
                        return parameters.specificItems.some(spec =>
                            item.name.toLowerCase().includes(spec.toLowerCase())
                        );
                    }
                    return true;
                });
            }
        });
    }

    // Filter by difficulty level
    if (parameters.difficulty) {
        filtered.detailLevel = parameters.difficulty;
    }

    return filtered;
}

handleExperimentRequest(config) {
    const { topic, parameters, experimentId } = config;

    if (experimentId && this.mechanicsExperiments[experimentId]) {
        this.currentExperiment = this.mechanicsExperiments[experimentId];
    } else {
        this.currentExperiment = this.findExperimentByTopic(topic);
    }

    if (!this.currentExperiment) {
        throw new Error(`No experiment found for: ${topic}`);
    }

    const experimentContent = this.generateExperimentContent(this.currentExperiment, parameters);
    this.generateExperimentWorkbook(experimentContent);

    return {
        experiment: this.currentExperiment,
        content: experimentContent,
        workbook: this.currentWorkbook,
        getDiagrams: () => this.waitForDiagrams()
    };
}

findExperimentByTopic(topic) {
    const topicLower = topic.toLowerCase();
    
    for (const [id, exp] of Object.entries(this.mechanicsExperiments)) {
        if (exp.name.toLowerCase().includes(topicLower)) {
            return exp;
        }
    }

    for (const [id, exp] of Object.entries(this.mechanicsExperiments)) {
        if (exp.relatedTopics.some(t => topicLower.includes(t.toLowerCase()))) {
            return exp;
        }
    }

    return null;
}

generateExperimentContent(experiment, parameters = {}) {
    const content = {
        experimentName: experiment.name,
        category: experiment.category,
        relatedTopics: experiment.relatedTopics,
        sections: []
    };

    if (experiment.historicalBackground) {
        content.sections.push({
            type: 'historical_background',
            title: 'Historical Background',
            data: this.formatHistoricalBackground(experiment.historicalBackground)
        });
    }

    if (experiment.labExperiment) {
        content.sections.push({
            type: 'lab_experiment',
            title: 'Laboratory Experiment',
            data: this.formatLabExperiment(experiment.labExperiment)
        });
    }

    return content;
}

formatHistoricalBackground(background) {
    const formatted = [];

    Object.entries(background).forEach(([key, value]) => {
        if (Array.isArray(value)) {
            formatted.push([key, '']);
            value.forEach((item, index) => {
                if (typeof item === 'object') {
                    Object.entries(item).forEach(([k, v]) => {
                        formatted.push([`  ${k}`, v]);
                    });
                } else {
                    formatted.push([`  ${index + 1}.`, item]);
                }
            });
        } else if (typeof value === 'object' && value !== null) {
            formatted.push([key, '']);
            Object.entries(value).forEach(([k, v]) => {
                formatted.push([`  ${k}`, typeof v === 'object' ? JSON.stringify(v) : v]);
            });
        } else {
            formatted.push([key, value]);
        }
    });

    return formatted;
}

formatLabExperiment(labExp) {
    const formatted = [];

    formatted.push(['Experiment Title', labExp.title]);
    formatted.push(['Hypothesis', labExp.hypothesis]);
    
    if (labExp.purpose) {
        formatted.push(['Purpose', labExp.purpose]);
    }
    
    if (labExp.variables) {
        formatted.push(['Variables', '']);
        formatted.push(['  Independent', labExp.variables.independent]);
        formatted.push(['  Dependent', labExp.variables.dependent]);
        if (labExp.variables.controlled) {
            formatted.push(['  Controlled', Array.isArray(labExp.variables.controlled) ? 
                labExp.variables.controlled.join(', ') : labExp.variables.controlled]);
        }
    }

    if (labExp.materials) {
        formatted.push(['', '']);
        formatted.push(['Materials Required', '']);
        if (Array.isArray(labExp.materials)) {
            labExp.materials.forEach(material => {
                formatted.push(['  •', material]);
            });
        } else if (typeof labExp.materials === 'object') {
            Object.values(labExp.materials).forEach(materialList => {
                if (Array.isArray(materialList)) {
                    materialList.forEach(material => {
                        formatted.push(['  •', material]);
                    });
                } else {
                    formatted.push(['  •', materialList]);
                }
            });
        }
    }

    if (labExp.safetyPrecautions) {
        formatted.push(['', '']);
        formatted.push(['SAFETY PRECAUTIONS', '']);
        if (Array.isArray(labExp.safetyPrecautions)) {
            labExp.safetyPrecautions.forEach(note => {
                formatted.push(['  ⚠', note]);
            });
        }
    }

    if (labExp.procedure) {
        formatted.push(['', '']);
        formatted.push(['Procedure', '']);
        
        if (Array.isArray(labExp.procedure)) {
            labExp.procedure.forEach((step, index) => {
                if (step.trim() === '') {
                    formatted.push(['', '']);
                } else if (step.includes(':') && step === step.toUpperCase()) {
                    formatted.push([step, '']);
                } else {
                    formatted.push([`  ${index + 1}.`, step]);
                }
            });
        } else if (typeof labExp.procedure === 'object') {
            Object.entries(labExp.procedure).forEach(([key, value]) => {
                formatted.push([key.toUpperCase() + ':', '']);
                if (Array.isArray(value)) {
                    value.forEach((step, idx) => {
                        formatted.push([`  ${idx + 1}.`, step]);
                    });
                } else {
                    formatted.push(['  ', value]);
                }
                formatted.push(['', '']);
            });
        }
    }

    if (labExp.dataAnalysis) {
        formatted.push(['', '']);
        formatted.push(['Data Analysis', '']);
        Object.entries(labExp.dataAnalysis).forEach(([key, value]) => {
            formatted.push([`  ${key}:`, '']);
            if (typeof value === 'object' && !Array.isArray(value)) {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    formatted.push([`    ${subKey}:`, subValue]);
                });
            } else {
                formatted.push(['    ', value]);
            }
        });
    }

    if (labExp.dataTable) {
        formatted.push(['', '']);
        formatted.push(['Data Recording Table', '']);
        if (Array.isArray(labExp.dataTable)) {
            labExp.dataTable.forEach(row => {
                if (Array.isArray(row)) {
                    formatted.push(['  ', row.join(' | ')]);
                }
            });
        }
    }

    if (labExp.expectedResults) {
        formatted.push(['', '']);
        formatted.push(['Expected Results', '']);
        if (typeof labExp.expectedResults === 'object') {
            Object.entries(labExp.expectedResults).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, value]);
            });
        } else {
            formatted.push(['  ', labExp.expectedResults]);
        }
    }

    if (labExp.errorAnalysis) {
        formatted.push(['', '']);
        formatted.push(['Error Analysis', '']);
        if (typeof labExp.errorAnalysis === 'object') {
            Object.entries(labExp.errorAnalysis).forEach(([key, value]) => {
                formatted.push([`  ${key}:`, '']);
                if (Array.isArray(value)) {
                    value.forEach(item => formatted.push(['    -', item]));
                } else {
                    formatted.push(['    ', value]);
                }
            });
        }
    }

    if (labExp.conclusions) {
        formatted.push(['', '']);
        formatted.push(['Conclusions', '']);
        if (Array.isArray(labExp.conclusions)) {
            labExp.conclusions.forEach(conclusion => {
                formatted.push(['  •', conclusion]);
            });
        }
    }

    if (labExp.realWorldApplications) {
        formatted.push(['', '']);
        formatted.push(['Real-World Applications', '']);
        if (Array.isArray(labExp.realWorldApplications)) {
            labExp.realWorldApplications.forEach(app => {
                formatted.push(['  •', app]);
            });
        }
    }

    if (labExp.extensions) {
        formatted.push(['', '']);
        formatted.push(['Extension Activities', '']);
        if (Array.isArray(labExp.extensions)) {
            labExp.extensions.forEach(ext => {
                formatted.push(['  •', ext]);
            });
        }
    }

    return formatted;
}

getRelatedExperiments(topicType) {
    const related = [];
    
    Object.entries(this.mechanicsExperiments).forEach(([id, experiment]) => {
        if (experiment.relatedTopics.includes(topicType)) {
            related.push({
                id: id,
                name: experiment.name,
                category: experiment.category,
                historicalScientist: experiment.historicalBackground?.scientist,
                labTitle: experiment.labExperiment?.title
            });
        }
    });

    return related;
}

// ========================================
// UTILITY AND HELPER METHODS
// ========================================

getAllExperiments() {
    return Object.entries(this.mechanicsExperiments).map(([id, exp]) => ({
        id: id,
        name: exp.name,
        category: exp.category,
        relatedTopics: exp.relatedTopics,
        scientist: exp.historicalBackground?.scientist,
        year: exp.historicalBackground?.year
    }));
}

// ========================================
// ADAPTIVE LEARNING METHODS
// ========================================

adaptContentDifficulty(content, currentLevel) {
    const adapted = { ...content };

    switch (currentLevel) {
        case 'beginner':
            adapted.vocabulary = 'simplified';
            adapted.examples = this.selectBasicExamples(content.workedExamples);
            adapted.depth = 'overview';
            break;
        
        case 'intermediate':
            adapted.vocabulary = 'standard';
            adapted.examples = this.selectMixedExamples(content.workedExamples);
            adapted.depth = 'moderate';
            break;
        
        case 'advanced':
            adapted.vocabulary = 'technical';
            adapted.examples = this.selectAdvancedExamples(content.workedExamples);
            adapted.depth = 'comprehensive';
            adapted.derivations = this.addDerivations(content);
            break;
    }

    return adapted;
}

selectBasicExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.filter(ex => ex.difficulty === 'basic' || !ex.difficulty).slice(0, 2);
}

selectMixedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples.slice(0, 4);
}

selectAdvancedExamples(examples) {
    if (!examples || !Array.isArray(examples)) return [];
    return examples;
}

addDerivations(content) {
    return {
        mathematicalDerivations: `Advanced mathematical derivations for ${content.topic}`,
        proofSteps: "Step-by-step mathematical proofs",
        alternativeApproaches: "Alternative solution methods and approximations"
    };
}

getContextualScenarios(topicType) {
    return this.contextualScenarios[topicType] || [];
}

getMetacognitivePrompts(topicType) {
    const prompts = {
        beforeLearning: this.metacognitivePrompts.beforeLearning.map(p => 
            p.replace('{topic}', this.mechanicsTopics[topicType]?.name || topicType)
        ),
        duringLearning: this.metacognitivePrompts.duringLearning.map(p => 
            p.replace('{concept}', topicType)
        ),
        afterLearning: this.metacognitivePrompts.afterLearning.map(p => 
            p.replace('{topic}', this.mechanicsTopics[topicType]?.name || topicType)
        ),
        problemSolving: this.metacognitivePrompts.problemSolving
    };

    return prompts;
}

updateLearnerProfile(topicType, performance) {
    if (performance.score >= 0.8) {
        if (!this.learnerProfile.masteredTopics.includes(topicType)) {
            this.learnerProfile.masteredTopics.push(topicType);
        }
        this.learnerProfile.strugglingTopics = this.learnerProfile.strugglingTopics.filter(t => t !== topicType);
    } else if (performance.score < 0.5) {
        if (!this.learnerProfile.strugglingTopics.includes(topicType)) {
            this.learnerProfile.strugglingTopics.push(topicType);
        }
    }

    this.learnerProfile.progressHistory.push({
        topic: topicType,
        timestamp: new Date().toISOString(),
        performance: performance
    });
}

// ========================================
// CONTENT GENERATION METHODS
// ========================================

generateMechanicsContent(problem, content) {
    const contentSections = [];

    // Generate overview section
    contentSections.push(this.generateOverviewSection(problem, content));

    // Generate specific content sections based on content structure
    if (content.definitions || content.coreQuantities) {
        contentSections.push(this.generateDefinitionsSection(content));
    }

    if (content.suvatEquations || content.newtonLaws) {
        contentSections.push(this.generatePrinciplesSection(content));
    }

    if (content.graphicalAnalysis) {
        contentSections.push(this.generateGraphicalSection(content));
    }

    if (content.workedExamples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    if (content.contextualScenarios) {
        contentSections.push(this.generateContextualScenariosSection(content));
    }

    if (this.includeExperiments && content.relatedExperiments) {
        contentSections.push(this.generateRelatedExperimentsSection(content));
    }

    if (content.metacognitivePrompts) {
        contentSections.push(this.generateMetacognitiveSection(content));
    }

    if (content.assessmentQuestions) {
        contentSections.push(this.generateAssessmentSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        type: 'overview',
        title: content.topic,
        category: content.category,
        summary: content.summary,
        difficulty: problem.difficulty,
        prerequisites: problem.prerequisites
    };
}

generateDefinitionsSection(content) {
    const section = {
        type: 'definitions',
        title: 'Key Definitions and Quantities',
        items: []
    };

    const defs = content.definitions || content.coreQuantities || content.keyTerms;
    if (defs) {
        Object.entries(defs).forEach(([term, definition]) => {
            if (typeof definition === 'object') {
                section.items.push({
                    term: term,
                    ...definition
                });
            } else {
                section.items.push({
                    term: term,
                    definition: definition
                });
            }
        });
    }

    return section;
}

generatePrinciplesSection(content) {
    return {
        type: 'principles',
        title: 'Core Principles and Equations',
        laws: content.newtonLaws || null,
        equations: content.suvatEquations || null,
        formulas: content.shmEquations || null
    };
}

generateGraphicalSection(content) {
    return {
        type: 'graphical_analysis',
        title: 'Graphical Methods',
        graphs: content.graphicalAnalysis
    };
}

generateExamplesSection(content) {
    return {
        type: 'worked_examples',
        title: 'Worked Examples',
        examples: content.workedExamples
    };
}

generateContextualScenariosSection(content) {
    return {
        type: 'contextual_scenarios',
        title: 'Real-World Applications',
        scenarios: content.contextualScenarios
    };
}

generateRelatedExperimentsSection(content) {
    return {
        type: 'related_experiments',
        title: 'Related Laboratory Experiments',
        experiments: content.relatedExperiments
    };
}

generateMetacognitiveSection(content) {
    return {
        type: 'metacognitive_prompts',
        title: 'Learning Reflection Questions',
        prompts: content.metacognitivePrompts
    };
}

generateAssessmentSection(content) {
    return {
        type: 'assessment',
        title: 'Assessment Questions',
        questions: content.assessmentQuestions
    };
}

// ========================================
// MECHANICS SPECIFIC HELPER METHODS
// ========================================

getTopicRelevance(topicType) {
    const relevance = {
        kinematics: "Kinematics describes how objects move and is foundational for all mechanics",
        dynamics: "Dynamics explains why objects move and underpins engineering and physics",
        energy_work_power: "Energy concepts connect all areas of physics and engineering",
        momentum_collisions: "Momentum conservation is universal and applies from atoms to galaxies",
        circular_motion: "Circular motion explains orbits, rotation, and curved paths",
        oscillations: "Oscillations and waves are ubiquitous in nature and technology"
    };

    return relevance[topicType] || "Important classical mechanics concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        kinematics: ['dynamics', 'energy_work_power'],
        dynamics: ['kinematics', 'momentum_collisions'],
        energy_work_power: ['dynamics', 'oscillations'],
        momentum_collisions: ['dynamics', 'energy_work_power'],
        circular_motion: ['dynamics', 'energy_work_power'],
        oscillations: ['energy_work_power', 'circular_motion']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.mechanicsTopics[type]?.name,
        description: this.mechanicsTopics[type]?.description
    }));
}

generateMechanicsDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantMechanicsDiagrams(type),
        placeholder: true,
        note: "Diagram generation will be implemented with actual physics diagrams"
    };
}

getRelevantMechanicsDiagrams(type) {
    const diagramTypes = {
        kinematics: ['displacement_time_graph', 'velocity_time_graph', 'projectile_trajectory'],
        dynamics: ['free_body_diagram', 'inclined_plane', 'forces_on_object'],
        energy_work_power: ['energy_diagram', 'work_done_graph', 'spring_energy'],
        momentum_collisions: ['collision_diagram', 'momentum_vectors', 'impulse_graph'],
        circular_motion: ['centripetal_force', 'vertical_circle', 'banking_angle'],
        oscillations: ['shm_graphs', 'pendulum_forces', 'spring_mass_system']
    };

    return diagramTypes[type] || [];
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from definitions
    if (this.currentContent.definitions) {
        Object.entries(this.currentContent.definitions).forEach(([term, def]) => {
            if (typeof def === 'object' && def.definition) {
                glossary[term] = def.definition;
            } else if (typeof def === 'string') {
                glossary[term] = def;
            }
        });
    }

    // Extract from core quantities
    if (this.currentContent.coreQuantities) {
        Object.entries(this.currentContent.coreQuantities).forEach(([term, quantity]) => {
            if (quantity.definition) {
                glossary[term] = quantity.definition;
            }
        });
    }

    // Extract from key terms
    if (this.currentContent.keyTerms) {
        Object.entries(this.currentContent.keyTerms).forEach(([term, data]) => {
            if (data.definition) {
                glossary[term] = data.definition;
            }
        });
    }

    return glossary;
}

generateMechanicsAnalogy(concept) {
    const analogies = {
        // Kinematics
        displacement: "Like the crow-flies distance between start and finish",
        velocity: "Like the speedometer reading with direction",
        acceleration: "Like pressing the gas pedal to change speed",
        projectile: "Like throwing a ball — horizontal and vertical motions are independent",
        
        // Dynamics
        force: "Like a push or pull on an object",
        mass: "Like the 'stubbornness' of an object to changes in motion",
        friction: "Like trying to slide a heavy box across carpet",
        normal_force: "Like the table pushing back on a book resting on it",
        
        // Energy
        kinetic_energy: "Like energy stored in a moving car",
        potential_energy: "Like water stored behind a dam",
        work: "Like pushing a box up a ramp",
        power: "Like how quickly you can climb stairs",
        
        // Momentum
        momentum: "Like the 'oomph' of a moving truck",
        impulse: "Like extending car crash time to reduce force",
        collision: "Like billiard balls hitting each other",
        
        // Circular motion
        centripetal_force: "Like the string tension keeping a ball in circular motion",
        centrifugal: "Like being pushed outward on a merry-go-round (fictitious)",
        
        // Oscillations
        shm: "Like a mass bobbing on a spring",
        amplitude: "Like how far a pendulum swings from center",
        resonance: "Like pushing a swing at just the right time"
    };

    return analogies[concept] || "An important physics concept";
}

adaptMechanicsLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'displacement': 'change in position',
                'velocity': 'speed with direction',
                'acceleration': 'rate of change of speed',
                'resultant force': 'net force',
                'coefficient of friction': 'friction value',
                'kinetic energy': 'energy of motion',
                'gravitational potential energy': 'height energy',
                'momentum': 'mass times velocity'
            }
        },
        intermediate: {
            replacements: {
                'displacement': 'displacement (vector)',
                'velocity': 'velocity',
                'resultant force': 'net force (ΣF)'
            }
        },
        advanced: {
            replacements: {
                'displacement': 'displacement vector s',
                'velocity': 'velocity vector v = ds/dt',
                'acceleration': 'acceleration a = dv/dt = d²s/dt²',
                'force': 'force F (vector quantity)',
                'momentum': 'linear momentum p = mv'
            }
        }
    };

    const levelAdaptation = adaptations[level] || adaptations.intermediate;
    let adaptedText = text;

    for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        adaptedText = adaptedText.replace(regex, replacement);
    }

    return adaptedText;
}

addMechanicsConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        kinematics: "Kinematics is purely descriptive. Dynamics adds forces to explain why motion occurs. Energy and momentum provide alternative analysis methods.",
        dynamics: "Newton's laws connect forces to motion. Force analysis leads to acceleration, which connects to kinematics. Forces also relate to energy and momentum.",
        energy_work_power: "Energy conservation connects all mechanics. Work-energy theorem links forces to motion. Power describes rate of energy transfer.",
        momentum_collisions: "Momentum conservation is universal. Impulse connects forces to momentum change. Collisions conserve momentum but not always energy.",
        circular_motion: "Circular motion requires centripetal force. Connects to Newton's laws and energy. Rotational motion parallels linear motion.",
        oscillations: "SHM is a special case of Newton's second law. Energy continuously converts between KE and PE. Connects to waves and circular motion."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to broader physics principles";

    return content;
}

enrichWithMechanicsExamples(content) {
    if (!this.includeExamples || content.workedExamples) return content;

    // Examples already included in handler methods
    return content;
}

addMechanicsComparativeContext(content) {
    if (!this.includeComparisons) return content;

    const comparativeData = {
        kinematics: {
            uniform: "Constant velocity (a = 0) vs uniformly accelerated (a = constant)",
            graphs: "s-t gradient gives v; v-t gradient gives a; v-t area gives s"
        },
        dynamics: {
            laws: "Newton 1 (equilibrium) is special case of Newton 2 (ΣF = ma)",
            friction: "Static (prevents motion) vs kinetic (opposes motion); μs > μk"
        },
        energy_work_power: {
            energy_types: "KE depends on v²; GPE depends on h; EPE depends on x²",
            conservation: "Mechanical energy conserved (no friction) vs not conserved (with friction)"
        },
        momentum_collisions: {
            collision_types: "Elastic (KE conserved) vs inelastic (KE lost) vs perfectly inelastic (stick together)",
            quantities: "Momentum always conserved; KE only conserved in elastic"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateMechanicsContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    const hasSubstantiveContent = 
        content.suvatEquations ||
        content.newtonLaws ||
        content.workedExamples ||
        content.definitions;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
    }

    if (!content.workedExamples) {
        validationResults.suggestions.push("Consider adding worked examples");
    }

    return validationResults;
}

calculateMechanicsContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.workedExamples) score += 2;
    if (this.currentContent.applications) score += 1;
    
    const hasMainContent = 
        this.currentContent.definitions ||
        this.currentContent.newtonLaws ||
        this.currentContent.suvatEquations;
    if (hasMainContent) score += 3;

    if (this.currentContent.assessmentQuestions) score += 1;
    if (this.currentContent.contextualScenarios) score += 1;

    return Math.round((score / maxScore) * 100);
}

getMechanicsContentQualityMetrics() {
    return {
        completeness: this.calculateMechanicsContentCompleteness(),
        hasExamples: !!this.currentContent?.workedExamples,
        hasApplications: !!this.currentContent?.applications,
        hasContextualScenarios: !!this.currentContent?.contextualScenarios,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateMechanicsContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    if (this.currentContent.definitions) {
        summary.keyPoints.push("Key definitions covered");
        summary.coverage.definitions = Object.keys(this.currentContent.definitions).length;
    }

    if (this.currentContent.workedExamples) {
        summary.keyPoints.push("Worked examples included");
        summary.coverage.examples = this.currentContent.workedExamples.length;
    }

    if (this.currentContent.applications) {
        summary.keyPoints.push("Real-world applications discussed");
        summary.coverage.applications = true;
    }

    return summary;
}

assessMechanicsContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const basicTopics = ['kinematics'];
    const intermediateTopics = ['dynamics', 'energy_work_power', 'momentum_collisions'];
    const advancedTopics = ['circular_motion', 'oscillations'];

    if (basicTopics.includes(this.currentProblem.type)) {
        difficultyScore += 1;
    } else if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    if (difficultyScore <= 2) return 'beginner';
    if (difficultyScore <= 4) return 'intermediate';
    return 'advanced';
}

generateMechanicsLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        kinematics: [
            "Define displacement, velocity, and acceleration",
            "Apply the SUVAT equations to uniformly accelerated motion",
            "Interpret displacement-time and velocity-time graphs",
            "Analyze projectile motion by resolving into components"
        ],
        dynamics: [
            "State and apply Newton's three laws of motion",
            "Draw and analyze free body diagrams",
            "Calculate net forces and resulting accelerations",
            "Solve problems involving friction and inclined planes"
        ],
        energy_work_power: [
            "Define work, kinetic energy, and potential energy",
            "Apply the work-energy theorem",
            "Use conservation of mechanical energy in problem solving",
            "Calculate power from work done and force-velocity relationships"
        ],
        momentum_collisions: [
            "Define momentum and impulse",
            "Apply conservation of linear momentum",
            "Distinguish between elastic, inelastic, and perfectly inelastic collisions",
            "Use the coefficient of restitution in collision analysis"
        ],
        circular_motion: [
            "Define angular quantities and relate them to linear quantities",
            "Calculate centripetal force and acceleration",
            "Apply circular motion concepts to vertical circles and banking",
            "Understand rotational analogues of linear quantities"
        ],
        oscillations: [
            "Define simple harmonic motion and identify systems that exhibit SHM",
            "Derive and apply period formulas for spring-mass and pendulum systems",
            "Analyze energy transformations in SHM",
            "Explain resonance and damping effects"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key physics concepts",
        "Apply principles to problem solving",
        "Connect theory to real-world applications"
    ];
}

identifyMechanicsPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        kinematics: [
            "Algebra (rearranging equations, solving quadratics)",
            "Vectors (components, addition)",
            "Trigonometry (sin, cos, tan for projectiles)"
        ],
        dynamics: [
            "Kinematics (especially acceleration)",
            "Vectors (component resolution, addition)",
            "Trigonometry (resolving forces)"
        ],
        energy_work_power: [
            "Algebra and basic calculus concepts",
            "Kinematics and dynamics",
            "Trigonometry (for work at angles)"
        ],
        momentum_collisions: [
            "Vectors (conservation in 2D)",
            "Kinematics (velocity)",
            "Energy concepts (comparing KE before and after)"
        ],
        circular_motion: [
            "Trigonometry and circular measure (radians)",
            "Dynamics (Newton's laws)",
            "Vectors (centripetal acceleration direction)"
        ],
        oscillations: [
            "Trigonometry (sine, cosine functions)",
            "Dynamics (restoring forces)",
            "Energy conservation"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic algebra",
        "Understanding of physical quantities and units"
    ];
}

generateMechanicsStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        kinematics: [
            "Always define your positive direction before solving",
            "Draw sketch showing motion and label all quantities",
            "Practice interpreting graphs — gradient and area",
            "For projectiles, separate into horizontal and vertical from the start"
        ],
        dynamics: [
            "ALWAYS draw a free body diagram first",
            "Label all forces with clear symbols and directions",
            "Resolve forces into components before applying F = ma",
            "Check units: force in N, mass in kg, acceleration in m/s²"
        ],
        energy_work_power: [
            "Identify initial and final states clearly",
            "Choose a reference level for GPE (usually ground or lowest point)",
            "Remember: work by friction is always negative (energy lost)",
            "Check energy conservation: initial total = final total + energy dissipated"
        ],
        momentum_collisions: [
            "Define positive direction before solving",
            "Remember: momentum is ALWAYS conserved (no external force)",
            "Kinetic energy only conserved in elastic collisions",
            "Use subscripts consistently (1, 2 for objects; i, f for initial, final)"
        ],
        circular_motion: [
            "Always identify which force(s) provide centripetal force",
            "At top of vertical circle: tension + weight point inward",
            "At bottom: tension − weight points inward",
            "Remember: centrifugal force is fictitious (non-inertial frame)"
        ],
        oscillations: [
            "For SHM, check that a = −ω²x (defining equation)",
            "Energy is constant: KE + PE = ½mω²A² throughout cycle",
            "At equilibrium: max KE, zero PE; at extremes: zero KE, max PE",
            "Period formulas: spring T = 2π√(m/k), pendulum T = 2π√(L/g)"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Practice regularly with varied problems",
        "Always sketch the situation",
        "Show all working clearly",
        "Check answers for physical reasonableness"
    ];
}

generateMechanicsProcessTimeline(processName) {
    const timelines = {
        'Problem Solving Strategy': [
            { step: '1. Read and understand', action: 'Identify what is asked; list knowns and unknowns' },
            { step: '2. Sketch and label', action: 'Draw diagram; define positive direction; label quantities' },
            { step: '3. Choose principle', action: 'Select SUVAT, F=ma, energy, momentum as appropriate' },
            { step: '4. Set up equation', action: 'Write equation(s) with symbols' },
            { step: '5. Solve algebraically', action: 'Rearrange for unknown before substituting' },
            { step: '6. Substitute and calculate', action: 'Insert values with units' },
            { step: '7. Check answer', action: 'Verify units, sign, magnitude reasonable' }
        ],
        'Free Body Diagram Steps': [
            { step: '1. Isolate object', action: 'Consider one object at a time' },
            { step: '2. Identify forces', action: 'Weight, normal, friction, tension, applied' },
            { step: '3. Draw arrows', action: 'From center of object in correct directions' },
            { step: '4. Label forces', action: 'Use standard symbols (W, N, f, T, F)' },
            { step: '5. Resolve components', action: 'Break angled forces into x and y' },
            { step: '6. Apply Newton 2', action: 'ΣFₓ = maₓ and ΣFᵧ = maᵧ' }
        ]
    };

    return timelines[processName] || [];
}

generateMechanicsContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.definitions) {
        hierarchy.children.push({
            name: 'Definitions',
            type: 'section'
        });
    }

    if (this.currentContent.newtonLaws || this.currentContent.suvatEquations) {
        hierarchy.children.push({
            name: 'Core Principles',
            type: 'section'
        });
    }

    if (this.currentContent.workedExamples) {
        hierarchy.children.push({
            name: 'Worked Examples',
            type: 'section'
        });
    }

    if (this.currentContent.applications) {
        hierarchy.children.push({
            name: 'Applications',
            type: 'section'
        });
    }

    return hierarchy;
}

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}


// ========================================
// WORKBOOK GENERATION METHODS
// ========================================

generateMechanicsWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();
    workbook.title = 'Classical Mechanics Workbook';

    // Start diagram generation in background if needed
    if (this.includeDiagramsInWorkbook) {
        this.diagramsPromise = this.generateMechanicsDiagramDataAsync();
    }

    workbook.sections = [
        this.createProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createDiagramsPlaceholderSection(), // Placeholder until diagrams ready
        this.createEquationsSection(),
        this.createWorkedExamplesSection(),
        this.createComparisonsWorkbookSection(),
        this.createContextualScenariosWorkbookSection(),
        this.createRelatedExperimentsWorkbookSection(),
        this.createMisconceptionsSection(),
        this.createMetacognitiveWorkbookSection(),
        this.createAssessmentSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

generateExperimentWorkbook(experimentContent) {
    const workbook = this.createWorkbookStructure();
    workbook.title = 'Classical Mechanics Experiment Workbook';

    workbook.sections = experimentContent.sections.map(section => ({
        title: section.title,
        type: section.type,
        data: section.data
    }));

    if (experimentContent.relatedTopics) {
        workbook.sections.push({
            title: 'Related Topics',
            type: 'related_topics',
            data: experimentContent.relatedTopics.map(topic => [
                this.mechanicsTopics[topic]?.name || topic,
                this.mechanicsTopics[topic]?.description || ''
            ])
        });
    }

    this.currentWorkbook = workbook;
}

// Async helper that runs in background
async generateMechanicsDiagramDataAsync() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    // Get relevant diagram keys
    const diagramKeys = this.getRelevantMechanicsDiagrams(type);

    this.diagramData = {
        type: type,
        diagrams: diagramKeys,
        renderedImages: [],
        status: 'rendering',
        placeholder: false,
        note: "Classical mechanics diagrams"
    };

    // Render diagrams
    if (diagramKeys.length > 0) {
        await this.renderDiagramsForTopic(diagramKeys);
        this.diagramData.status = 'complete';
        
        // Update the diagrams section in workbook
        this.updateDiagramsSection();
    } else {
        this.diagramData.status = 'no_diagrams';
    }

    return this.diagramData;
}

async renderDiagramsForTopic(diagramKeys) {
    this.diagramData.renderedImages = [];

    for (const diagramKey of diagramKeys) {
        try {
            // Check if already rendered (cache)
            if (this.renderedDiagrams.has(diagramKey)) {
                this.diagramData.renderedImages.push(this.renderedDiagrams.get(diagramKey));
                continue;
            }

            // Render the diagram
            const canvas = await this.diagramRenderer.renderDiagram(
                diagramKey,
                0,
                0,
                this.diagramWidth,
                this.diagramHeight,
                {
                    showLabels: true,
                    backgroundColor: '#FFFFFF',
                    showGrid: true,
                    showAxes: true
                }
            );

            // Convert to PNG buffer
            const pngBuffer = await canvas.encode('png');

            // Store rendered diagram data
            const diagramData = {
                key: diagramKey,
                buffer: pngBuffer,
                width: this.diagramWidth,
                height: this.diagramHeight,
                type: 'png'
            };

            // Cache the rendered diagram
            this.renderedDiagrams.set(diagramKey, diagramData);
            this.diagramData.renderedImages.push(diagramData);

        } catch (error) {
            console.error(`Failed to render diagram ${diagramKey}:`, error);
            // Add error placeholder
            this.diagramData.renderedImages.push({
                key: diagramKey,
                error: error.message,
                type: 'error'
            });
        }
    }
}

// Create placeholder section that will be updated when diagrams are ready
createDiagramsPlaceholderSection() {
    if (!this.includeDiagramsInWorkbook) {
        return null;
    }

    return {
        title: 'Physics Diagrams',
        type: 'diagrams',
        status: 'loading',
        diagrams: [],
        note: 'Diagrams are being rendered...'
    };
}

// Update the diagrams section once rendering is complete
updateDiagramsSection() {
    if (!this.currentWorkbook || !this.diagramData) return;

    // Find the diagrams section
    const diagramSectionIndex = this.currentWorkbook.sections.findIndex(
        section => section.type === 'diagrams'
    );

    if (diagramSectionIndex === -1) return;

    // Update the section with rendered diagrams
    const diagramSection = {
        title: 'Physics Diagrams',
        type: 'diagrams',
        status: 'complete',
        diagrams: []
    };

    for (const diagram of this.diagramData.renderedImages) {
        if (diagram.type === 'error') {
            diagramSection.diagrams.push({
                key: diagram.key,
                error: diagram.error,
                type: 'error'
            });
        } else {
            diagramSection.diagrams.push({
                key: diagram.key,
                buffer: diagram.buffer,
                width: diagram.width,
                height: diagram.height,
                type: 'image'
            });
        }
    }

    this.currentWorkbook.sections[diagramSectionIndex] = diagramSection;
}

// Method to wait for diagrams to finish rendering
async waitForDiagrams() {
    if (this.diagramsPromise) {
        await this.diagramsPromise;
    }
    return this.diagramData;
}

// Method to check if diagrams are ready
areDiagramsReady() {
    return this.diagramData && this.diagramData.status === 'complete';
}

getRelevantMechanicsDiagrams(topicType) {
    const diagramMap = {
        kinematics: [
            "displacement_time_graph",
            "velocity_time_graph",
            "acceleration_time_graph",
            "projectile_motion",
            "vector_components",
            "trajectory_parabola"
        ],
        dynamics: [
            "freeBodyDiagram",
            "vectorDiagram",
            "motionGraphs",
            "projectileMotion",
            "inclinedPlane"
        ],
        energy_work_power: [
            "work_done_diagram",
            "energy_bar_chart",
            "spring_compression",
            "roller_coaster_energy",
            "force_displacement_graph",
            "potential_energy_curve"
        ],
        momentum_collisions: [
            "collision_diagram",
            "momentum_vectors",
            "elastic_collision",
            "inelastic_collision",
            "impulse_force_time_graph",
            "explosion_diagram"
        ],
        circular_motion: [
            "circular_motion_diagram",
            "centripetal_force",
            "vertical_circle",
            "conical_pendulum",
            "banked_curve",
            "satellite_orbit"
        ],
        oscillations: [
            "shm_displacement_graph",
            "shm_velocity_graph",
            "shm_acceleration_graph",
            "spring_mass_system",
            "simple_pendulum",
            "energy_in_shm",
            "resonance_curve",
            "damping_curves"
        ]
    };

    return diagramMap[topicType] || [];
}

// Helper method to export a single diagram (async but optional)
async exportDiagram(diagramKey, filename, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        await this.diagramRenderer.exportToFile(
            diagramKey,
            filename,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                showGrid: options.showGrid !== false,
                showAxes: options.showAxes !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
        return { success: true, filename };
    } catch (error) {
        console.error(`Failed to export diagram ${diagramKey}:`, error);
        return { success: false, error: error.message };
    }
}

// Helper method to export all diagrams for current topic (async but optional)
async exportAllDiagramsForTopic(outputDir = './diagrams') {
    // Wait for diagrams to be ready first
    await this.waitForDiagrams();

    if (!this.diagramData || !this.diagramData.diagrams) {
        throw new Error('No diagrams available for current topic');
    }

    const fs = await import('fs');
    const path = await import('path');

    // Create output directory if it doesn't exist
    if (!fs.existsSync(outputDir)) {
        fs.mkdirSync(outputDir, { recursive: true });
    }

    const results = [];

    for (const diagramKey of this.diagramData.diagrams) {
        const filename = path.join(outputDir, `${diagramKey}.png`);
        const result = await this.exportDiagram(diagramKey, filename);
        results.push({ diagramKey, ...result });
    }

    return results;
}

// Method to get diagram as buffer for embedding (async but optional)
async getDiagramBuffer(diagramKey, options = {}) {
    const width = options.width || this.diagramWidth;
    const height = options.height || this.diagramHeight;

    try {
        return await this.diagramRenderer.exportToPng(
            diagramKey,
            width,
            height,
            {
                showLabels: options.showLabels !== false,
                showGrid: options.showGrid !== false,
                showAxes: options.showAxes !== false,
                backgroundColor: options.backgroundColor || '#FFFFFF'
            }
        );
    } catch (error) {
        console.error(`Failed to get diagram buffer for ${diagramKey}:`, error);
        return null;
    }
}

// Clear diagram cache
clearDiagramCache() {
    this.renderedDiagrams.clear();
    this.diagramsPromise = null;
    console.log('Diagram cache cleared');
}

// Get cache statistics
getDiagramCacheStats() {
    return {
        cachedDiagrams: this.renderedDiagrams.size,
        cacheKeys: Array.from(this.renderedDiagrams.keys()),
        diagramsReady: this.areDiagramsReady(),
        status: this.diagramData?.status || 'not_started'
    };
}

// Get workbook status including diagram info
getWorkbookStatus() {
    return {
        hasProblem: !!this.currentProblem,
        hasContent: !!this.currentContent,
        hasWorkbook: !!this.currentWorkbook,
        hasExperiment: !!this.currentExperiment,
        hasDiagrams: !!this.diagramData && this.diagramData.renderedImages?.length > 0,
        diagramsReady: this.areDiagramsReady(),
        diagramStatus: this.diagramData?.status || 'not_started',
        diagramCount: this.diagramData?.renderedImages?.length || 0,
        cachedDiagrams: this.renderedDiagrams.size,
        learnerLevel: this.learnerProfile.currentLevel,
        masteredTopics: this.learnerProfile.masteredTopics.length,
        strugglingTopics: this.learnerProfile.strugglingTopics.length
    };
}

createWorkbookStructure() {
    return {
        title: 'Classical Mechanics Workbook',
        timestamp: new Date().toISOString(),
        theme: this.theme,
        dimensions: { width: this.width, height: this.height },
        learnerLevel: this.learnerProfile.currentLevel,
        sections: []
    };
}

// ========================================
// WORKBOOK SECTION CREATION METHODS
// ========================================

createProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Problem Overview',
        type: 'problem_overview',
        data: [
            ['Topic', this.mechanicsTopics[this.currentProblem.type]?.name || this.currentProblem.originalTopic],
            ['Category', this.mechanicsTopics[this.currentProblem.type]?.category || 'mechanics'],
            ['Difficulty', this.currentProblem.difficulty],
            ['Prerequisites', this.currentProblem.prerequisites.join(', ')]
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    return {
        title: 'Content Overview',
        type: 'overview',
        data: [
            ['Topic', this.currentContent.topic],
            ['Category', this.currentContent.category],
            ['Summary', this.currentContent.summary]
        ]
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const section = {
        title: 'Detailed Content',
        type: 'detailed_content',
        subsections: []
    };

    // Add definitions
    if (this.currentContent.definitions || this.currentContent.coreQuantities) {
        section.subsections.push({
            title: 'Key Definitions',
            data: this.formatDefinitionsForWorkbook(
                this.currentContent.definitions || this.currentContent.coreQuantities
            )
        });
    }

    // Add laws/principles
    if (this.currentContent.newtonLaws) {
        section.subsections.push({
            title: "Newton's Laws of Motion",
            data: this.formatNewtonLawsForWorkbook(this.currentContent.newtonLaws)
        });
    }

    // Add equations
    if (this.currentContent.suvatEquations) {
        section.subsections.push({
            title: 'Equations of Motion',
            data: this.formatSuvatForWorkbook(this.currentContent.suvatEquations)
        });
    }

    // Add graphical analysis
    if (this.currentContent.graphicalAnalysis) {
        section.subsections.push({
            title: 'Graphical Analysis',
            data: this.formatGraphicalAnalysisForWorkbook(this.currentContent.graphicalAnalysis)
        });
    }

    return section.subsections.length > 0 ? section : null;
}

createEquationsSection() {
    if (!this.currentContent) return null;

    const equations = [];

    // Collect all equations from content
    if (this.currentContent.suvatEquations?.equations) {
        equations.push(['SUVAT Equations', '']);
        this.currentContent.suvatEquations.equations.forEach(eq => {
            equations.push([eq.equation, eq.missing ? `Missing: ${eq.missing}` : '']);
        });
    }

    if (this.currentContent.work?.formula) {
        equations.push(['', '']);
        equations.push(['Work', this.currentContent.work.formula]);
    }

    if (this.currentContent.kineticEnergy?.formula) {
        equations.push(['Kinetic Energy', this.currentContent.kineticEnergy.formula]);
    }

    if (this.currentContent.potentialEnergy?.gravitational?.formula) {
        equations.push(['Gravitational PE', this.currentContent.potentialEnergy.gravitational.formula]);
    }

    if (equations.length === 0) return null;

    return {
        title: 'Key Equations',
        type: 'equations',
        data: equations
    };
}

createWorkedExamplesSection() {
    if (!this.currentContent?.workedExamples) return null;

    return {
        title: 'Worked Examples',
        type: 'worked_examples',
        examples: this.currentContent.workedExamples.map(example => ({
            title: example.title || example.problem,
            problem: example.problem,
            solution: example.solution,
            given: example.given,
            answer: example.answer
        }))
    };
}

createComparisonsWorkbookSection() {
    if (!this.currentContent?.comparison && !this.currentContent?.comparativeContext) return null;

    const comparisons = [];

    if (this.currentContent.comparison) {
        Object.entries(this.currentContent.comparison).forEach(([key, value]) => {
            comparisons.push([this.formatKey(key), '']);
            if (typeof value === 'object') {
                Object.entries(value).forEach(([subKey, subValue]) => {
                    comparisons.push([`  ${this.formatKey(subKey)}`, subValue]);
                });
            } else {
                comparisons.push(['  ', value]);
            }
        });
    }

    if (this.currentContent.comparativeContext) {
        comparisons.push(['', '']);
        comparisons.push(['Comparative Context', '']);
        Object.entries(this.currentContent.comparativeContext).forEach(([key, value]) => {
            comparisons.push([this.formatKey(key), value]);
        });
    }

    return comparisons.length > 0 ? {
        title: 'Comparisons and Context',
        type: 'comparisons',
        data: comparisons
    } : null;
}

createContextualScenariosWorkbookSection() {
    if (!this.currentContent?.contextualScenarios) return null;

    const scenarios = [];

    this.currentContent.contextualScenarios.forEach(scenario => {
        scenarios.push(['Scenario', scenario.scenario]);
        scenarios.push(['Context', scenario.context]);
        scenarios.push(['Application', scenario.application]);
        scenarios.push(['Question', scenario.question]);
        scenarios.push(['', '']);
    });

    return {
        title: 'Real-World Applications',
        type: 'contextual_scenarios',
        data: scenarios
    };
}

createRelatedExperimentsWorkbookSection() {
    if (!this.currentContent?.relatedExperiments || this.currentContent.relatedExperiments.length === 0) {
        return null;
    }

    const experiments = [['Experiment', 'Scientist', 'Category']];

    this.currentContent.relatedExperiments.forEach(exp => {
        experiments.push([
            exp.name,
            exp.historicalScientist || '',
            exp.category
        ]);
    });

    return {
        title: 'Related Experiments',
        type: 'related_experiments',
        data: experiments
    };
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions || !this.currentProblem) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [];

    Object.entries(misconceptions).forEach(([category, items]) => {
        data.push([category, '']);
        items.forEach(item => {
            data.push(['  •', item]);
        });
        data.push(['', '']);
    });

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: data
    };
}

createMetacognitiveWorkbookSection() {
    if (!this.metacognitiveSupport || !this.currentContent?.metacognitivePrompts) return null;

    const prompts = [];

    Object.entries(this.currentContent.metacognitivePrompts).forEach(([phase, questions]) => {
        prompts.push([this.formatKey(phase), '']);
        questions.forEach(q => {
            prompts.push(['  •', q]);
        });
        prompts.push(['', '']);
    });

    return {
        title: 'Learning Reflection',
        type: 'metacognitive',
        data: prompts
    };
}

createAssessmentSection() {
    if (!this.currentContent?.assessmentQuestions) return null;

    const questions = [];

    Object.entries(this.currentContent.assessmentQuestions).forEach(([level, items]) => {
        questions.push([this.formatKey(level), '']);
        if (Array.isArray(items)) {
            items.forEach(q => {
                questions.push(['  •', q]);
            });
        }
        questions.push(['', '']);
    });

    return {
        title: 'Assessment Questions',
        type: 'assessment',
        data: questions
    };
}

// ========================================
// FORMATTING HELPER METHODS
// ========================================

formatDefinitionsForWorkbook(definitions) {
    const formatted = [];

    Object.entries(definitions).forEach(([term, def]) => {
        formatted.push([this.formatKey(term), '']);
        
        if (typeof def === 'object') {
            if (def.definition) {
                formatted.push(['  Definition', def.definition]);
            }
            if (def.symbol) {
                formatted.push(['  Symbol', def.symbol]);
            }
            if (def.unit) {
                formatted.push(['  Unit', def.unit]);
            }
            if (def.formula) {
                formatted.push(['  Formula', def.formula]);
            }
        } else {
            formatted.push(['  ', def]);
        }
        formatted.push(['', '']);
    });

    return formatted;
}

formatNewtonLawsForWorkbook(laws) {
    const formatted = [];

    Object.entries(laws).forEach(([lawName, law]) => {
        formatted.push([this.formatKey(lawName), '']);
        if (law.statement || law.fullStatement) {
            formatted.push(['  Statement', law.statement || law.fullStatement]);
        }
        if (law.equation) {
            formatted.push(['  Equation', law.equation]);
        }
        if (law.examples && Array.isArray(law.examples)) {
            formatted.push(['  Examples', '']);
            law.examples.forEach(ex => {
                formatted.push(['    -', ex]);
            });
        }
        formatted.push(['', '']);
    });

    return formatted;
}

formatSuvatForWorkbook(suvat) {
    const formatted = [];

    if (suvat.variables) {
        formatted.push(['Variables', '']);
        Object.entries(suvat.variables).forEach(([symbol, meaning]) => {
            formatted.push([`  ${symbol}`, meaning]);
        });
        formatted.push(['', '']);
    }

    if (suvat.equations) {
        formatted.push(['Equations', '']);
        if (Array.isArray(suvat.equations)) {
            suvat.equations.forEach(eq => {
                formatted.push(['  ', eq.equation]);
                if (eq.missing) {
                    formatted.push(['    Missing', eq.missing]);
                }
            });
        } else {
            Object.entries(suvat.equations).forEach(([eq, description]) => {
                formatted.push(['  ', eq]);
                formatted.push(['    ', description]);
            });
        }
    }

    return formatted;
}

formatGraphicalAnalysisForWorkbook(graphical) {
    const formatted = [];

    Object.entries(graphical).forEach(([graphType, details]) => {
        formatted.push([this.formatKey(graphType), '']);
        
        if (typeof details === 'object') {
            Object.entries(details).forEach(([key, value]) => {
                if (key === 'shapes' && Array.isArray(value)) {
                    formatted.push(['  Shapes and Meanings', '']);
                    value.forEach(shape => {
                        formatted.push(['    -', `${shape.shape}: ${shape.meaning}`]);
                    });
                } else if (typeof value === 'string') {
                    formatted.push([`  ${this.formatKey(key)}`, value]);
                }
            });
        }
        formatted.push(['', '']);
    });

    return formatted;
}

}

export default EnhancedMechanicsWorkbook;
