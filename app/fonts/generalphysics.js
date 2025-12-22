// Enhanced Physics Workbook - Comprehensive Physics Content System
import * as math from 'mathjs';

export class EnhancedPhysicsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "physics";
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
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.physicsSymbols = this.initializePhysicsSymbols();
        this.setThemeColors();
        this.initializePhysicsTopics();
        this.initializeMisconceptionDatabase();
        this.initializeExplanationTemplates();
        this.initializePhysicsLessons();
    }

    setThemeColors() {
        const themes = {
            physics: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
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
                stepBg: '#f3e5f5',
                stepText: '#4a148c',
                borderColor: '#42a5f5',
                contentBg: '#e8f5e9',
                contentText: '#2e7d32',
                diagramBg: '#fce4ec',
                formulaBg: '#fff9c4'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#0d47a1',
                headerText: '#ffffff',
                sectionBg: '#90caf9',
                sectionText: '#01579b',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e1f5fe',
                resultText: '#01579b',
                definitionBg: '#ffe0b2',
                definitionText: '#e65100',
                stepBg: '#ede7f6',
                stepText: '#311b92',
                borderColor: '#2196f3',
                contentBg: '#c8e6c9',
                contentText: '#1b5e20',
                diagramBg: '#f8bbd0',
                formulaBg: '#f0f4c3'
            }
        };

        this.colors = themes[this.theme] || themes.physics;
    }

    initializePhysicsSymbols() {
        return {
            // Greek letters commonly used in physics
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'Gamma': 'Γ',
            'delta': 'δ',
            'Delta': 'Δ',
            'epsilon': 'ε',
            'theta': 'θ',
            'Theta': 'Θ',
            'lambda': 'λ',
            'Lambda': 'Λ',
            'mu': 'μ',
            'pi': 'π',
            'Pi': 'Π',
            'rho': 'ρ',
            'sigma': 'σ',
            'Sigma': 'Σ',
            'tau': 'τ',
            'phi': 'φ',
            'Phi': 'Φ',
            'omega': 'ω',
            'Omega': 'Ω',
            
            // Mathematical operators
            'arrow': '→',
            'rightarrow': '→',
            'leftarrow': '←',
            'leftrightarrow': '↔',
            'uparrow': '↑',
            'downarrow': '↓',
            'plus': '+',
            'minus': '−',
            'times': '×',
            'divide': '÷',
            'plusminus': '±',
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'partial': '∂',
            'nabla': '∇',
            'integral': '∫',
            'summation': '∑',
            'product': '∏',
            
            // Physics notation
            'vector': '→',
            'subscript0': '₀',
            'subscript1': '₁',
            'subscript2': '₂',
            'subscripti': 'ᵢ',
            'subscriptf': 'f',
            
            'superscript0': '⁰',
            'superscript1': '¹',
            'superscript2': '²',
            'superscript3': '³',
            'superscript-': '⁻',
            
            // Units
            'meter': 'm',
            'kilogram': 'kg',
            'second': 's',
            'ampere': 'A',
            'kelvin': 'K',
            'celsius': '°C',
            'joule': 'J',
            'watt': 'W',
            'newton': 'N',
            'pascal': 'Pa',
            'hertz': 'Hz',
            'coulomb': 'C',
            'volt': 'V',
            'ohm': 'Ω',
            'tesla': 'T',
            'weber': 'Wb'
        };
    }

    initializePhysicsTopics() {
        this.physicsTopics = {
            // 1. Mechanics
            mechanics: {
                patterns: [
                    /mechanics/i,
                    /motion|kinematics|dynamics/i,
                    /force|newton.*law/i,
                    /momentum|impulse/i,
                    /energy|work|power/i,
                    /circular.*motion|rotation/i,
                    /gravity|gravitation/i
                ],
                handler: this.handleMechanics.bind(this),
                name: 'Mechanics',
                category: 'classical_physics',
                description: 'Study of motion, forces, energy, and momentum'
            },

            // 2. Waves and Sound
            waves_sound: {
                patterns: [
                    /waves?|wave.*motion/i,
                    /sound|acoustic/i,
                    /frequency|wavelength|amplitude/i,
                    /interference|diffraction|reflection/i,
                    /doppler|resonance/i,
                    /standing.*wave|harmonics/i
                ],
                handler: this.handleWavesSound.bind(this),
                name: 'Waves and Sound',
                category: 'wave_physics',
                description: 'Wave phenomena, sound, and wave properties'
            },

            // 3. Thermodynamics and Heat
            thermodynamics: {
                patterns: [
                    /thermodynamics|heat/i,
                    /temperature|thermal/i,
                    /gas.*law|ideal.*gas/i,
                    /entropy|enthalpy/i,
                    /heat.*transfer|conduction|convection|radiation/i,
                    /carnot|heat.*engine/i,
                    /phase.*change|latent.*heat/i
                ],
                handler: this.handleThermodynamics.bind(this),
                name: 'Thermodynamics and Heat',
                category: 'thermal_physics',
                description: 'Heat, temperature, and energy transfer'
            },

            // 4. Electricity and Magnetism
            electromagnetism: {
                patterns: [
                    /electric|electricity/i,
                    /magnet|magnetic/i,
                    /current|voltage|resistance/i,
                    /circuit|ohm.*law/i,
                    /capacitor|inductor/i,
                    /electromagnetic.*field|em.*field/i,
                    /faraday|lenz|ampere/i
                ],
                handler: this.handleElectromagnetism.bind(this),
                name: 'Electricity and Magnetism',
                category: 'electromagnetism',
                description: 'Electric and magnetic phenomena'
            },

            // 5. Optics
            optics: {
                patterns: [
                    /optics|optical/i,
                    /light|ray/i,
                    /reflection|refraction/i,
                    /lens|mirror/i,
                    /diffraction|interference.*light/i,
                    /polarization/i,
                    /spectrum|color/i
                ],
                handler: this.handleOptics.bind(this),
                name: 'Optics',
                category: 'wave_physics',
                description: 'Behavior and properties of light'
            },

            // 6. Modern Physics
            modern_physics: {
                patterns: [
                    /modern.*physics/i,
                    /quantum|quantum.*mechanics/i,
                    /photon|photoelectric/i,
                    /atomic.*model|bohr/i,
                    /wave.*particle.*duality/i,
                    /uncertainty.*principle|heisenberg/i,
                    /schrodinger|quantum.*state/i
                ],
                handler: this.handleModernPhysics.bind(this),
                name: 'Modern Physics',
                category: 'quantum_physics',
                description: 'Quantum mechanics and atomic physics'
            },

            // 7. Relativity
            relativity: {
                patterns: [
                    /relativity/i,
                    /special.*relativity/i,
                    /general.*relativity/i,
                    /time.*dilation|length.*contraction/i,
                    /spacetime|space.*time/i,
                    /einstein|lorentz/i,
                    /E.*=.*mc/i
                ],
                handler: this.handleRelativity.bind(this),
                name: 'Relativity',
                category: 'modern_physics',
                description: 'Special and general relativity'
            },

            // 8. Nuclear Physics
            nuclear_physics: {
                patterns: [
                    /nuclear.*physics/i,
                    /radioactivity|radioactive/i,
                    /fission|fusion/i,
                    /nuclear.*reactor/i,
                    /particle.*physics/i,
                    /strong.*force|weak.*force/i
                ],
                handler: this.handleNuclearPhysics.bind(this),
                name: 'Nuclear Physics',
                category: 'nuclear',
                description: 'Nuclear processes and particle physics'
            }
        };
    }

    initializePhysicsLessons() {
        this.lessons = {
            mechanics: {
                title: "Mechanics: Motion, Forces, and Energy",
                concepts: [
                    "Motion is described by position, velocity, and acceleration",
                    "Forces cause changes in motion (Newton's Laws)",
                    "Energy is conserved in isolated systems",
                    "Momentum is conserved in collisions"
                ],
                theory: "Mechanics studies how objects move and what causes motion. Newton's three laws form the foundation, relating forces to motion. Energy and momentum conservation principles provide powerful problem-solving tools.",
                keyDefinitions: {
                    "Position": "Location of object in space, measured from reference point",
                    "Displacement": "Change in position; vector quantity with magnitude and direction",
                    "Velocity": "Rate of change of position; v = Δx/Δt",
                    "Acceleration": "Rate of change of velocity; a = Δv/Δt",
                    "Force": "Push or pull that can change motion; vector quantity",
                    "Mass": "Measure of inertia; resistance to acceleration",
                    "Weight": "Force due to gravity; W = mg",
                    "Newton's First Law": "Object at rest stays at rest, object in motion stays in motion unless acted upon by net force (Inertia)",
                    "Newton's Second Law": "Net force equals mass times acceleration; F = ma",
                    "Newton's Third Law": "For every action, there's equal and opposite reaction",
                    "Momentum": "Product of mass and velocity; p = mv",
                    "Impulse": "Change in momentum; J = FΔt = Δp",
                    "Work": "Force applied over distance; W = Fd cos θ",
                    "Kinetic Energy": "Energy of motion; KE = ½mv²",
                    "Potential Energy": "Stored energy; gravitational PE = mgh",
                    "Power": "Rate of doing work; P = W/t = Fv"
                },
                mainCategories: [
                    "Kinematics (describing motion)",
                    "Dynamics (forces and motion)",
                    "Energy and work",
                    "Momentum and collisions",
                    "Circular motion and rotation",
                    "Gravitation"
                ],
                applications: [
                    "Vehicle safety (seatbelts, airbags)",
                    "Sports physics (projectiles, collisions)",
                    "Engineering (structures, machines)",
                    "Space exploration (orbital mechanics)",
                    "Everyday motion (walking, driving)"
                ]
            },

            waves_sound: {
                title: "Waves and Sound: Vibrations and Wave Motion",
                concepts: [
                    "Waves transfer energy without transferring matter",
                    "Wave properties include wavelength, frequency, amplitude, and speed",
                    "Waves can interfere constructively or destructively",
                    "Sound is a mechanical wave requiring a medium"
                ],
                theory: "Waves are disturbances that propagate through space, transferring energy. Mechanical waves (like sound) require a medium; electromagnetic waves don't. Wave behavior includes reflection, refraction, diffraction, and interference.",
                keyDefinitions: {
                    "Wave": "Disturbance that transfers energy through space",
                    "Mechanical Wave": "Wave requiring medium (sound, water waves)",
                    "Electromagnetic Wave": "Wave not requiring medium (light, radio)",
                    "Transverse Wave": "Particles oscillate perpendicular to wave direction",
                    "Longitudinal Wave": "Particles oscillate parallel to wave direction (sound)",
                    "Wavelength (λ)": "Distance between consecutive crests or troughs",
                    "Frequency (f)": "Number of waves passing point per second; measured in Hz",
                    "Period (T)": "Time for one complete wave cycle; T = 1/f",
                    "Amplitude": "Maximum displacement from equilibrium",
                    "Wave Speed": "v = fλ (speed = frequency × wavelength)",
                    "Sound": "Longitudinal mechanical wave; requires medium",
                    "Speed of Sound": "~343 m/s in air at 20°C; faster in solids/liquids",
                    "Pitch": "Perceived frequency of sound",
                    "Loudness": "Perceived amplitude/intensity of sound",
                    "Decibel (dB)": "Logarithmic unit for sound intensity",
                    "Doppler Effect": "Change in frequency due to relative motion",
                    "Resonance": "System vibrating at natural frequency with maximum amplitude",
                    "Standing Wave": "Wave pattern with nodes and antinodes",
                    "Harmonics": "Integer multiples of fundamental frequency",
                    "Interference": "Superposition of waves",
                    "Constructive Interference": "Waves add (in phase)",
                    "Destructive Interference": "Waves cancel (out of phase)",
                    "Diffraction": "Bending of waves around obstacles",
                    "Reflection": "Wave bouncing off surface",
                    "Refraction": "Wave bending when entering different medium"
                },
                mainCategories: [
                    "Wave properties and types",
                    "Wave behavior (interference, diffraction, reflection)",
                    "Sound waves and acoustics",
                    "Doppler effect and applications",
                    "Standing waves and resonance"
                ],
                applications: [
                    "Musical instruments (strings, wind, percussion)",
                    "Ultrasound imaging",
                    "Sonar and radar",
                    "Noise cancellation",
                    "Earthquake detection (seismology)",
                    "Communication systems"
                ]
            },

            thermodynamics: {
                title: "Thermodynamics and Heat: Energy Transfer and Thermal Systems",
                concepts: [
                    "Temperature measures average kinetic energy of particles",
                    "Heat flows from hot to cold until thermal equilibrium",
                    "Energy is conserved (First Law of Thermodynamics)",
                    "Entropy always increases in isolated systems (Second Law)"
                ],
                theory: "Thermodynamics studies heat, temperature, and energy transfer. The laws of thermodynamics govern energy transformations. Heat transfer occurs via conduction, convection, and radiation. Gas behavior is described by kinetic theory and gas laws.",
                keyDefinitions: {
                    "Temperature": "Measure of average kinetic energy of particles",
                    "Heat": "Energy transfer due to temperature difference",
                    "Thermal Equilibrium": "No net heat flow between objects (same temperature)",
                    "Specific Heat Capacity": "Energy to raise 1 kg by 1°C; Q = mcΔT",
                    "Latent Heat": "Energy for phase change without temperature change",
                    "Latent Heat of Fusion": "Energy to melt/freeze (solid ↔ liquid)",
                    "Latent Heat of Vaporization": "Energy to boil/condense (liquid ↔ gas)",
                    "Conduction": "Heat transfer through direct contact",
                    "Convection": "Heat transfer by fluid movement",
                    "Radiation": "Heat transfer by electromagnetic waves",
                    "Thermal Expansion": "Materials expand when heated",
                    "Kinetic Theory": "Gas particles in constant random motion",
                    "Ideal Gas Law": "PV = nRT",
                    "Pressure": "Force per unit area; P = F/A",
                    "Absolute Zero": "0 K = -273.15°C; minimum possible temperature",
                    "First Law of Thermodynamics": "Energy is conserved; ΔU = Q - W",
                    "Second Law of Thermodynamics": "Entropy of isolated system increases",
                    "Entropy": "Measure of disorder/randomness",
                    "Heat Engine": "Device converting heat into work",
                    "Carnot Cycle": "Ideally efficient heat engine cycle",
                    "Efficiency": "η = W_out/Q_in = useful output/total input",
                    "Refrigerator": "Device transferring heat from cold to hot reservoir",
                    "Adiabatic Process": "No heat transfer (Q = 0)",
                    "Isothermal Process": "Constant temperature",
                    "Isobaric Process": "Constant pressure",
                    "Isochoric Process": "Constant volume"
                },
                mainCategories: [
                    "Temperature and heat",
                    "Heat transfer mechanisms",
                    "Phase changes and latent heat",
                    "Gas laws and kinetic theory",
                    "Laws of thermodynamics",
                    "Heat engines and refrigerators"
                ],
                applications: [
                    "Climate control (heating, air conditioning)",
                    "Engines (cars, planes, power plants)",
                    "Refrigeration and freezing",
                    "Cooking and food preservation",
                    "Weather and atmospheric physics",
                    "Industrial processes"
                ]
            },

            electromagnetism: {
                title: "Electricity and Magnetism: Charges, Currents, and Fields",
                concepts: [
                    "Like charges repel, opposite charges attract",
                    "Electric current is flow of charge",
                    "Magnetic fields are created by moving charges",
                    "Changing magnetic fields induce electric currents"
                ],
                theory: "Electromagnetism unifies electricity and magnetism. Electric charges create electric fields; moving charges create magnetic fields. Faraday's law and Lenz's law describe electromagnetic induction. Maxwell's equations fully describe electromagnetic phenomena.",
                keyDefinitions: {
                    "Electric Charge": "Fundamental property; measured in coulombs (C)",
                    "Coulomb's Law": "Force between charges; F = kq₁q₂/r²",
                    "Electric Field": "Force per unit charge; E = F/q",
                    "Electric Potential": "Potential energy per unit charge; V = U/q",
                    "Voltage": "Potential difference between two points",
                    "Electric Current": "Flow of charge; I = Q/t; measured in amperes (A)",
                    "Resistance": "Opposition to current flow; measured in ohms (Ω)",
                    "Ohm's Law": "V = IR (voltage = current × resistance)",
                    "Power": "P = VI = I²R = V²/R",
                    "Series Circuit": "Single path; same current, voltages add",
                    "Parallel Circuit": "Multiple paths; same voltage, currents add",
                    "Kirchhoff's Current Law": "Current in = current out at junction",
                    "Kirchhoff's Voltage Law": "Voltage drops sum to zero around loop",
                    "Capacitor": "Device storing electric charge and energy",
                    "Capacitance": "Charge storage ability; C = Q/V; measured in farads (F)",
                    "Magnetic Field": "Field created by moving charges or magnets",
                    "Magnetic Force on Moving Charge": "F = qvB sin θ",
                    "Magnetic Force on Current": "F = BIL sin θ",
                    "Electromagnetic Induction": "Changing magnetic field induces current",
                    "Faraday's Law": "Induced EMF proportional to rate of flux change",
                    "Lenz's Law": "Induced current opposes change causing it",
                    "Inductor": "Device storing energy in magnetic field",
                    "Inductance": "Measured in henrys (H)",
                    "Transformer": "Device changing AC voltage via induction",
                    "AC vs DC": "Alternating current vs direct current",
                    "RMS Voltage/Current": "Effective AC values",
                    "Electromagnetic Wave": "Self-propagating waves of E and B fields"
                },
                mainCategories: [
                    "Electrostatics (charges and forces)",
                    "Electric circuits (current, voltage, resistance)",
                    "Magnetism (magnetic fields and forces)",
                    "Electromagnetic induction",
                    "AC circuits",
                    "Maxwell's equations"
                ],
                applications: [
                    "Electronic devices (phones, computers)",
                    "Power generation and transmission",
                    "Motors and generators",
                    "Electromagnets (MRI, maglev trains)",
                    "Wireless communication",
                    "Transformers and power distribution"
                ]
            },

            optics: {
                title: "Optics: Light and Its Behavior",
                concepts: [
                    "Light travels in straight lines (rays)",
                    "Light reflects off surfaces (angle in = angle out)",
                    "Light bends when entering different media (refraction)",
                    "Light exhibits wave properties (interference, diffraction)"
                ],
                theory: "Optics studies light behavior. Geometric optics uses rays to explain reflection and refraction. Physical optics treats light as waves, explaining interference and diffraction. Light is electromagnetic radiation visible to human eyes.",
                keyDefinitions: {
                    "Light": "Electromagnetic radiation visible to humans (400-700 nm)",
                    "Ray": "Straight-line path of light",
                    "Speed of Light": "c = 3.00 × 10⁸ m/s in vacuum",
                    "Electromagnetic Spectrum": "Range of EM waves from radio to gamma",
                    "Reflection": "Light bouncing off surface",
                    "Law of Reflection": "Angle of incidence = angle of reflection",
                    "Specular Reflection": "Smooth surface (mirror-like)",
                    "Diffuse Reflection": "Rough surface (scattered)",
                    "Refraction": "Bending of light entering different medium",
                    "Index of Refraction": "n = c/v; ratio of light speeds",
                    "Snell's Law": "n₁ sin θ₁ = n₂ sin θ₂",
                    "Total Internal Reflection": "Complete reflection when light can't exit",
                    "Critical Angle": "Minimum angle for total internal reflection",
                    "Dispersion": "Separation of light into colors (prism)",
                    "Mirror": "Smooth reflecting surface",
                    "Plane Mirror": "Flat mirror; virtual, upright, same-size image",
                    "Concave Mirror": "Converging mirror; can form real or virtual images",
                    "Convex Mirror": "Diverging mirror; always virtual, upright, smaller image",
                    "Focal Point": "Point where parallel rays converge (or appear to)",
                    "Focal Length": "Distance from mirror/lens to focal point",
                    "Lens": "Transparent object refracting light",
                    "Converging Lens": "Convex lens; thicker in middle",
                    "Diverging Lens": "Concave lens; thinner in middle",
                    "Thin Lens Equation": "1/f = 1/d_o + 1/d_i",
                    "Magnification": "m = -d_i/d_o = h_i/h_o",
                    "Real Image": "Light rays actually converge; can project on screen",
                    "Virtual Image": "Light rays appear to converge; cannot project",
                    "Interference": "Superposition of light waves",
                    "Constructive Interference": "Bright fringes (waves in phase)",
                    "Destructive Interference": "Dark fringes (waves out of phase)",
                    "Diffraction": "Bending of light around obstacles",
                    "Polarization": "Restriction of light vibration to one plane",
                    "Color": "Perception of different wavelengths of light",
                    "Primary Colors": "Red, green, blue (additive); cyan, magenta, yellow (subtractive)"
                },
                mainCategories: [
                    "Nature of light",
                    "Reflection (plane and curved mirrors)",
                    "Refraction (Snell's law, total internal reflection)",
                    "Lenses and optical instruments",
                    "Wave optics (interference, diffraction)",
                    "Color and spectrum"
                ],
                applications: [
                    "Eyeglasses and contact lenses",
                    "Cameras and photography",
                    "Telescopes and microscopes",
                    "Fiber optics communication",
                    "Lasers (medical, industrial)",
                    "Optical sensors and detectors"
                ]
            },

            modern_physics: {
                title: "Modern Physics: Quantum Mechanics and Atomic Structure",
                concepts: [
                    "Light has both wave and particle properties",
                    "Matter has wave properties (wave-particle duality)",
                    "Energy is quantized in atoms",
                    "Uncertainty principle limits simultaneous measurements"
                ],
                theory: "Modern physics emerged in early 1900s with relativity and quantum mechanics. Classical physics fails at atomic scales. Quantum mechanics describes particle behavior probabilistically. Key phenomena include photoelectric effect, atomic spectra, and wave-particle duality.",
                keyDefinitions: {
                    "Quantum": "Discrete packet of energy",
                    "Photon": "Particle of light; E = hf",
                    "Planck's Constant": "h = 6.626 × 10⁻³⁴ J·s",
                    "Photoelectric Effect": "Light ejects electrons from metal surface",
                    "Work Function": "Minimum energy to eject electron from metal",
                    "Threshold Frequency": "Minimum frequency for photoelectric effect",
                    "Wave-Particle Duality": "Light and matter exhibit both wave and particle properties",
                    "de Broglie Wavelength": "λ = h/p; wave nature of particles",
                    "Electron Diffraction": "Electrons show wave interference patterns",
                    "Atomic Model Evolution": "Thomson → Rutherford → Bohr → Quantum mechanical",
                    "Bohr Model": "Electrons in fixed orbits with quantized energy",
                    "Energy Levels": "Allowed electron energy states in atom",
                    "Ground State": "Lowest energy state of atom",
                    "Excited State": "Higher energy state; unstable",
                    "Photon Emission": "Electron drops to lower level, emitting photon",
                    "Photon Absorption": "Electron jumps to higher level, absorbing photon",
                    "Emission Spectrum": "Discrete wavelengths emitted by element",
                    "Absorption Spectrum": "Dark lines in continuous spectrum",
                    "Spectral Lines": "Specific wavelengths corresponding to energy transitions",
                    "Quantum Numbers": "n, l, m_l, m_s describing electron state",
                    "Pauli Exclusion Principle": "No two electrons have same quantum numbers",
                    "Heisenberg Uncertainty Principle": "ΔxΔp ≥ ℏ/2; can't know position and momentum precisely",
                    "Wave Function (ψ)": "Mathematical description of quantum state",
                    "Probability Density": "|ψ|²; probability of finding particle",
                    "Quantum Tunneling": "Particle passing through classically forbidden region",
                    "Superposition": "Particle in multiple states simultaneously until measured",
                    "Electron Cloud": "Probability distribution of electron location",
                    "Orbital": "Region of high electron probability",
                    "Compton Effect": "Photon scattering with wavelength change"
                },
                mainCategories: [
                    "Photoelectric effect and photons",
                    "Wave-particle duality",
                    "Atomic structure and spectra",
                    "Quantum mechanics principles",
                    "Heisenberg uncertainty",
                    "Quantum tunneling and applications"
                ],
                applications: [
                    "Atomic clocks (GPS)",
                    "Lasers",
                    "LED technology",
                    "Solar cells (photovoltaic)",
                    "Electron microscopy",
                    "Quantum computing (emerging)",
                    "Medical imaging (PET scans)"
                ]
            },

            relativity: {
                title: "Relativity: Space, Time, and Gravity",
                concepts: [
                    "Speed of light is constant in all reference frames",
                    "Time and space are relative, not absolute",
                    "Mass and energy are equivalent (E = mc²)",
                    "Gravity is curvature of spacetime"
                ],
                theory: "Einstein's special relativity (1905) revolutionized understanding of space and time. General relativity (1915) describes gravity as spacetime curvature. These theories replaced Newtonian mechanics at high speeds and strong gravity.",
                keyDefinitions: {
                    "Reference Frame": "Coordinate system for measuring position and time",
                    "Inertial Frame": "Non-accelerating reference frame",
                    "Principle of Relativity": "Laws of physics same in all inertial frames",
                    "Speed of Light": "c = 3.00 × 10⁸ m/s; constant in all inertial frames",
"Postulates of Special Relativity": "1) Laws of physics same in all inertial frames, 2) Speed of light constant",
"Time Dilation": "Moving clocks run slower; Δt = γΔt₀",
"Length Contraction": "Moving objects appear shorter; L = L₀/γ",
"Lorentz Factor": "γ = 1/√(1 - v²/c²)",
"Proper Time": "Time measured in rest frame of clock",
"Proper Length": "Length measured in rest frame of object",
"Simultaneity": "Events simultaneous in one frame may not be in another",
"Relativistic Momentum": "p = γmv",
"Rest Mass Energy": "E₀ = mc²",
"Total Energy": "E = γmc²",
"Kinetic Energy": "KE = (γ - 1)mc²",
"Mass-Energy Equivalence": "E = mc²; mass and energy interconvertible",
"Spacetime": "Four-dimensional continuum of space and time",
"Spacetime Interval": "Invariant quantity in all frames",
"Light Cone": "Boundary of events causally connected to point",
"Twin Paradox": "Traveling twin ages slower than stationary twin",
"General Relativity": "Gravity is curvature of spacetime by mass-energy",
"Equivalence Principle": "Acceleration indistinguishable from gravity",
"Geodesic": "Straight line in curved spacetime (path of free particle)",
"Gravitational Time Dilation": "Time runs slower in stronger gravity",
"Gravitational Redshift": "Light loses energy escaping gravity",
"Black Hole": "Region where spacetime curvature prevents escape",
"Event Horizon": "Boundary of black hole; point of no return",
"Singularity": "Point of infinite spacetime curvature",
"Gravitational Waves": "Ripples in spacetime from accelerating masses",
"Frame Dragging": "Rotating mass drags spacetime around it"
},
mainCategories: [
"Postulates and principles of special relativity",
"Time dilation and length contraction",
"Relativistic energy and momentum",
"Mass-energy equivalence",
"General relativity and spacetime curvature",
"Black holes and gravitational waves"
],
applications: [
"GPS satellites (time dilation corrections)",
"Particle accelerators (relativistic particles)",
"Nuclear energy (mass-energy conversion)",
"Astrophysics (neutron stars, black holes)",
"Gravitational wave astronomy",
"Precision timekeeping"
]
},
nuclear_physics: {
            title: "Nuclear Physics: Structure and Reactions of Nuclei",
            concepts: [
                "Nucleus contains protons and neutrons held by strong force",
                "Radioactive nuclei spontaneously decay",
                "Nuclear reactions release enormous energy",
                "Four fundamental forces govern particle interactions"
            ],
            theory: "Nuclear physics studies atomic nuclei and their interactions. The strong nuclear force binds protons and neutrons. Unstable nuclei undergo radioactive decay. Fission splits heavy nuclei; fusion combines light nuclei. Both release energy via E = mc².",
            keyDefinitions: {
                "Nucleus": "Dense core of atom containing protons and neutrons",
                "Nucleon": "Proton or neutron (nuclear particle)",
                "Atomic Number (Z)": "Number of protons",
                "Mass Number (A)": "Total protons + neutrons",
                "Isotope": "Same element (Z) with different neutron numbers",
                "Strong Nuclear Force": "Attractive force binding nucleons; short range",
                "Nuclear Stability": "Balance of strong force vs electromagnetic repulsion",
                "Binding Energy": "Energy holding nucleus together",
                "Mass Defect": "Difference between nuclear mass and sum of nucleon masses",
                "Binding Energy per Nucleon": "Average energy binding each nucleon",
                "Iron-56": "Most stable nucleus (highest binding energy per nucleon)",
                "Radioactivity": "Spontaneous emission of particles or energy from nucleus",
                "Radioactive Decay": "Transformation of unstable nucleus to more stable form",
                "Alpha Decay": "Emission of helium nucleus (₂⁴He)",
                "Beta Decay (β⁻)": "Neutron → proton + electron + antineutrino",
                "Beta Decay (β⁺)": "Proton → neutron + positron + neutrino",
                "Gamma Decay": "Emission of high-energy photon",
                "Half-Life": "Time for half of sample to decay",
                "Activity": "Number of decays per second (measured in becquerels)",
                "Decay Constant": "Probability of decay per unit time",
                "Decay Series": "Chain of decays to stable nucleus",
                "Nuclear Fission": "Splitting heavy nucleus into lighter nuclei",
                "Chain Reaction": "Fission neutrons trigger more fissions",
                "Critical Mass": "Minimum mass for sustained chain reaction",
                "Nuclear Reactor": "Controlled fission for energy production",
                "Moderator": "Material slowing neutrons in reactor",
                "Control Rods": "Absorb neutrons to control reaction rate",
                "Nuclear Fusion": "Combining light nuclei into heavier nucleus",
                "Stellar Nucleosynthesis": "Element formation in stars via fusion",
                "Plasma": "Fourth state of matter; ionized gas for fusion",
                "Fundamental Forces": "Strong, electromagnetic, weak, gravitational",
                "Weak Nuclear Force": "Responsible for beta decay",
                "Quarks": "Fundamental particles making up protons and neutrons",
                "Leptons": "Family including electrons, muons, neutrinos",
                "Standard Model": "Theory of fundamental particles and forces",
                "Antimatter": "Particles with opposite charge (positron, antiproton)",
                "Particle Accelerator": "Device accelerating particles to high energies"
            },
            mainCategories: [
                "Nuclear structure and stability",
                "Radioactive decay types",
                "Half-life and decay calculations",
                "Nuclear fission and reactors",
                "Nuclear fusion and stellar processes",
                "Fundamental forces and particles"
            ],
            applications: [
                "Nuclear power generation",
                "Medical imaging (PET, gamma cameras)",
                "Cancer radiation therapy",
                "Radioactive dating",
                "Smoke detectors (Americium-241)",
                "Food irradiation and sterilization",
                "Research (particle physics experiments)"
            ]
        }
    };
}

initializeMisconceptionDatabase() {
    this.commonMisconceptions = {
        mechanics: {
            'Force and Motion': [
                'Thinking force is needed to maintain motion (motion continues without net force)',
                'Confusing mass with weight (mass is amount of matter, weight is force)',
                'Believing heavier objects fall faster (all objects accelerate equally in vacuum)',
                'Thinking action-reaction pairs cancel out (they act on different objects)'
            ],
            'Energy': [
                'Confusing work (force × distance) with effort or time spent',
                'Not recognizing that energy transforms but is conserved',
                'Thinking potential energy depends on path taken (only depends on height)',
                'Believing kinetic energy is proportional to velocity (it\'s proportional to v²)'
            ],
            'Momentum': [
                'Confusing momentum with kinetic energy',
                'Not recognizing momentum is a vector (has direction)',
                'Thinking momentum is always conserved (only in absence of external forces)'
            ]
        },
        
        waves_sound: {
            'Wave Properties': [
                'Thinking waves transfer matter (they transfer energy, not matter)',
                'Confusing wavelength with amplitude',
                'Not understanding that wave speed depends on medium, not frequency',
                'Believing all waves need a medium (EM waves don\'t)'
            ],
            'Sound': [
                'Thinking sound travels faster than light',
                'Confusing pitch with loudness (pitch = frequency, loudness = amplitude)',
                'Not recognizing sound cannot travel in vacuum',
                'Believing Doppler effect changes actual frequency of source (only observed frequency)'
            ],
            'Interference': [
                'Thinking destructive interference destroys energy (energy redistributed)',
                'Not understanding that waves pass through each other unchanged',
                'Confusing standing waves with traveling waves'
            ]
        },
        
        thermodynamics: {
            'Temperature and Heat': [
                'Confusing temperature with heat (temperature is average KE, heat is energy transfer)',
                'Thinking cold is a substance that flows (heat flows, not cold)',
                'Believing temperature measures total energy (measures average KE per particle)',
                'Not recognizing heat and temperature are different (100g at 50°C ≠ 50g at 100°C)'
            ],
            'Phase Changes': [
                'Thinking temperature changes during phase transitions (temperature constant)',
                'Confusing evaporation with boiling (evaporation occurs at any temperature)',
                'Not understanding latent heat (energy without temperature change)'
            ],
            'Gas Laws': [
                'Thinking absolute zero is physically achievable (theoretical limit)',
                'Confusing temperature scales (must use Kelvin for gas laws)',
                'Not recognizing gases have mass (seem weightless due to buoyancy)'
            ]
        },
        
        electromagnetism: {
            'Electric Charge and Current': [
                'Thinking current is "used up" in circuit (charge is conserved)',
                'Confusing voltage with current (voltage is potential difference, current is charge flow)',
                'Believing electrons move at speed of light in wires (drift velocity is slow)',
                'Not understanding that current is same everywhere in series circuit'
            ],
            'Circuits': [
                'Thinking batteries are constant current sources (they\'re constant voltage)',
                'Confusing series and parallel circuit rules',
                'Not recognizing that resistance depends on material, length, and cross-section',
                'Believing short circuit has high resistance (actually has very low resistance)'
            ],
            'Magnetism': [
                'Thinking magnetic field lines are physical (they\'re visualization tools)',
                'Confusing magnetic poles with electric charges (no magnetic monopoles)',
                'Not understanding that moving charges create magnetic fields',
                'Believing magnetic force does work (magnetic force is perpendicular to motion)'
            ]
        },
        
        optics: {
            'Light Behavior': [
                'Thinking light always travels in straight lines (bends via refraction/diffraction)',
                'Confusing reflection with refraction',
                'Believing mirrors reverse left-right (they reverse front-back)',
                'Not understanding that we see objects via reflected light, not emitted'
            ],
            'Mirrors and Lenses': [
                'Thinking all mirrors produce real images (plane and convex produce virtual)',
                'Confusing real and virtual images (real can project, virtual cannot)',
                'Not recognizing that converging lenses can produce virtual images (when object inside f)',
                'Believing magnification tells whether image is real or virtual (sign does)'
            ],
            'Wave Nature': [
                'Thinking color is property of light itself (it\'s perception of wavelength)',
                'Not understanding that white light contains all colors',
                'Confusing diffraction with refraction'
            ]
        },
        
        modern_physics: {
            'Wave-Particle Duality': [
                'Thinking photons are either waves OR particles (they\'re both)',
                'Not understanding that observation affects quantum systems',
                'Believing we can know exact position and momentum (uncertainty principle)',
                'Thinking quantum mechanics only applies to small particles (applies to all, but effects negligible for large objects)'
            ],
            'Photoelectric Effect': [
                'Thinking intensity of light ejects electrons (frequency determines ejection)',
                'Confusing photon energy with light intensity',
                'Not understanding threshold frequency concept'
            ],
            'Atomic Structure': [
                'Thinking electrons orbit like planets (they exist in probability clouds)',
                'Believing electrons can have any energy (only discrete levels)',
                'Not understanding that light emission occurs when electron drops levels'
            ]
        },
        
        relativity: {
            'Special Relativity': [
                'Thinking time dilation is illusion or measurement error (it\'s real)',
                'Not understanding that simultaneity is relative',
                'Believing nothing can go faster than light (information can\'t, but space can expand faster)',
                'Confusing relativistic mass with rest mass'
            ],
            'General Relativity': [
                'Thinking gravity is a force pulling objects (it\'s spacetime curvature)',
                'Not understanding that mass curves spacetime',
                'Believing black holes "suck" everything in (only within event horizon)',
                'Confusing gravitational time dilation with special relativity time dilation'
            ],
            'E = mc²': [
                'Thinking E = mc² only applies to nuclear reactions (applies to all energy)',
                'Not understanding mass and energy are equivalent',
                'Believing mass is converted to energy in reactions (mass-energy is conserved)'
            ]
        },
        
        nuclear_physics: {
            'Radioactivity': [
                'Thinking radioactivity can be stopped by chemical means (it\'s nuclear process)',
                'Confusing half-life with total decay time',
                'Believing all radiation is dangerous (depends on type, energy, exposure)',
                'Not understanding that radioactive decay is random but statistically predictable'
            ],
            'Nuclear Reactions': [
                'Confusing fission with fusion (fission splits, fusion combines)',
                'Thinking nuclear energy violates conservation (mass-energy is conserved)',
                'Not understanding critical mass concept',
                'Believing nuclear power and nuclear weapons are the same (controlled vs uncontrolled)'
            ],
            'Particle Physics': [
                'Thinking protons and neutrons are fundamental (made of quarks)',
                'Confusing different fundamental forces',
                'Not understanding antimatter (matter with opposite charge)'
            ]
        }
    };

    this.clarificationStrategies = {
        visual_comparison: {
            method: 'Use diagrams, graphs, and visual representations',
            effectiveness: 'High for spatial and motion concepts'
        },
        analogy: {
            method: 'Relate physics concepts to everyday experiences',
            effectiveness: 'High for abstract concepts like fields and waves'
        },
        step_by_step: {
            method: 'Break complex processes into sequential steps',
            effectiveness: 'High for understanding mechanisms and derivations'
        },
        contrast_table: {
            method: 'Create comparison tables showing key differences',
            effectiveness: 'High for distinguishing similar concepts'
        },
        mathematical_approach: {
            method: 'Use equations and calculations to demonstrate concepts',
            effectiveness: 'High for quantitative relationships'
        },
        experimental_demonstration: {
            method: 'Reference experiments that demonstrate concepts',
            effectiveness: 'High for observable phenomena'
        }
    };
}

initializeExplanationTemplates() {
    this.explanationStyles = {
        conceptual: {
            focus: 'Physical meaning and intuition',
            language: 'descriptive and intuitive'
        },
        mathematical: {
            focus: 'Equations and quantitative relationships',
            language: 'precise and formulaic'
        },
        historical: {
            focus: 'Development of ideas and discoveries',
            language: 'narrative and contextual'
        },
        experimental: {
            focus: 'Observations and measurements',
            language: 'procedural and evidence-based'
        },
        comparative: {
            focus: 'Similarities and differences between concepts',
            language: 'contrastive and analytical'
        }
    };

    this.difficultyLevels = {
        basic: {
            vocabulary: 'simple, everyday language',
            detail: 'essential information only',
            examples: 'concrete and familiar',
            mathematics: 'minimal equations'
        },
        intermediate: {
            vocabulary: 'standard physics terms',
            detail: 'main concepts with explanations',
            examples: 'mix of familiar and technical',
            mathematics: 'basic equations with guidance'
        },
        detailed: {
            vocabulary: 'full scientific terminology',
            detail: 'comprehensive with derivations',
            examples: 'technical and research-based',
            mathematics: 'advanced equations and proofs'
        },
        scaffolded: {
            vocabulary: 'progressive from simple to complex',
            detail: 'guided discovery approach',
            examples: 'carefully sequenced difficulty',
            mathematics: 'step-by-step problem solving'
        }
    };
}

// MAIN HANDLER METHOD
handlePhysicsProblem(config) {
    const { topic, parameters, subTopic, context } = config;

    try {
        // Parse the physics query
        this.currentProblem = this.parsePhysicsProblem(topic, parameters, subTopic, context);

        // Get content based on topic
        this.currentContent = this.getPhysicsContent(this.currentProblem);

        // Generate content steps/sections
        this.contentSteps = this.generatePhysicsContent(this.currentProblem, this.currentContent);

        // Generate diagram data if applicable
        this.generatePhysicsDiagramData();

        // Generate workbook
        this.generatePhysicsWorkbook();

        return {
            workbook: this.currentWorkbook,
            content: this.currentContent,
            diagrams: this.diagramData
        };

    } catch (error) {
        throw new Error(`Failed to process physics topic: ${error.message}`);
    }
}

parsePhysicsProblem(topic, parameters = {}, subTopic = null, context = {}) {
    let topicType = null;

    // Match topic to handler
    for (const [type, config] of Object.entries(this.physicsTopics)) {
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
        throw new Error(`Unable to recognize physics topic: ${topic}`);
    }

    return {
        originalTopic: topic,
        type: topicType,
        subTopic: subTopic,
        parameters: { ...parameters },
        context: { ...context },
        parsedAt: new Date().toISOString()
    };
}

getPhysicsContent(problem) {
    const handler = this.physicsTopics[problem.type]?.handler;
    if (!handler) {
        throw new Error(`No handler available for physics topic: ${problem.type}`);
    }

    return handler(problem);
}

// TOPIC HANDLERS

handleMechanics(problem) {
    const { subTopic, parameters } = problem;

    return {
        topic: "Mechanics",
        category: 'classical_physics',
        summary: "Mechanics studies motion and forces. Newton's laws relate forces to acceleration. Energy and momentum are conserved quantities that provide powerful problem-solving tools.",
        
        fundamentalConcepts: [
            {
                name: "Motion",
                definition: "Change in position over time",
                keyQuantities: {
                    position: "Location in space (x, y, z)",
                    displacement: "Change in position; Δx = x_f - x_i",
                    velocity: "Rate of change of position; v = Δx/Δt",
                    acceleration: "Rate of change of velocity; a = Δv/Δt"
                },
                types: {
                    uniform: "Constant velocity (a = 0)",
                    uniformlyAccelerated: "Constant acceleration (a = constant)"
                },
                kinematicEquations: [
                    "v = v₀ + at",
                    "x = x₀ + v₀t + ½at²",
                    "v² = v₀² + 2a(x - x₀)"
                ]
            },
            {
                name: "Force",
                definition: "Push or pull that can change motion",
                nature: "Vector quantity with magnitude and direction",
                unit: "Newton (N) = kg·m/s²",
                types: [
                    "Contact forces (normal, friction, tension, spring)",
                    "Non-contact forces (gravity, electric, magnetic)"
                ],
                netForce: "Vector sum of all forces acting on object"
            },
            {
                name: "Newton's Laws",
                firstLaw: {
                    statement: "Object at rest stays at rest; object in motion stays in motion unless acted upon by net force",
                    concept: "Inertia - resistance to change in motion",
                    implication: "No net force means no acceleration"
                },
                secondLaw: {
                    statement: "Net force equals mass times acceleration",
                    equation: "F_net = ma",
                    implication: "Acceleration proportional to force, inversely proportional to mass"
                },
                thirdLaw: {
                    statement: "For every action, there's equal and opposite reaction",
                    keyPoint: "Action-reaction pairs act on DIFFERENT objects",
                    example: "You push wall (action), wall pushes you (reaction)"
                }
            },
            {
                name: "Mass and Weight",
                mass: {
                    definition: "Measure of inertia; amount of matter",
                    property: "Scalar quantity",
                    unit: "kilogram (kg)",
                    constant: "Same everywhere in universe"
                },
                weight: {
                    definition: "Force of gravity on object",
                    equation: "W = mg",
                    property: "Vector quantity (downward)",
                    unit: "Newton (N)",
                    variable: "Changes with gravitational field"
                },
                distinction: "Mass is how much stuff; weight is gravitational force"
            },
            {
                name: "Friction",
                definition: "Force opposing motion between surfaces",
                types: {
                    static: "Prevents motion from starting; f_s ≤ μ_s N",
                    kinetic: "Opposes ongoing motion; f_k = μ_k N"
                },
                coefficients: "μ_s > μ_k (harder to start than keep moving)",
                normalForce: "N = perpendicular force between surfaces",
                direction: "Always opposes motion or attempted motion"
            }
        ],

        energyAndWork: {
            work: {
                definition: "Energy transfer via force over distance",
                equation: "W = Fd cos θ",
                unit: "Joule (J) = N·m",
                conditions: "Force and displacement must occur",
                angle: "θ is angle between force and displacement",
                positive: "Force in direction of motion (adds energy)",
                negative: "Force opposite motion (removes energy)",
                zero: "Force perpendicular to motion (no work)"
            },
            kineticEnergy: {
                definition: "Energy of motion",
                equation: "KE = ½mv²",
                dependence: "Proportional to v² (double speed = 4× energy)",
                unit: "Joule (J)"
            },
            potentialEnergy: {
                gravitational: {
                    definition: "Stored energy due to height",
                    equation: "PE = mgh",
                    reference: "h measured from chosen zero level",
                    note: "Only changes in PE matter physically"
                },
                elastic: {
                    definition: "Stored energy in spring/elastic object",
                    equation: "PE = ½kx²",
                    hooke: "F = -kx (spring force)"
                }
            },
            workEnergyTheorem: {
                statement: "Net work equals change in kinetic energy",
                equation: "W_net = ΔKE = KE_f - KE_i"
            },
            conservation: {
                statement: "Total mechanical energy conserved in absence of friction",
                equation: "KE_i + PE_i = KE_f + PE_f",
                withFriction: "E_i = E_f + E_friction (energy to heat)",
                general: "Energy transforms but total remains constant"
            },
            power: {
                definition: "Rate of doing work or transferring energy",
                equations: ["P = W/t", "P = Fv"],
                unit: "Watt (W) = J/s"
            }
        },

        momentumAndCollisions: {
            momentum: {
                definition: "Product of mass and velocity",
                equation: "p = mv",
                property: "Vector quantity",
                unit: "kg·m/s",
                significance: "Measure of difficulty stopping object"
            },
            impulse: {
                definition: "Change in momentum; also force × time",
                equations: ["J = Δp = p_f - p_i", "J = FΔt"],
                impulseMomentumTheorem: "Impulse equals change in momentum",
                application: "Airbags increase collision time, reducing force"
            },
            conservation: {
                statement: "Total momentum conserved when no external forces",
                equation: "p_before = p_after",
                systemRequirement: "Must consider all interacting objects",
                vectorNature: "Conserved in each direction separately"
            },
            collisions: {
                elastic: {
                    definition: "Kinetic energy conserved",
                    equations: ["Momentum conserved", "KE conserved"],
                    example: "Billiard balls, atomic collisions",
                    relative: "Objects bounce apart"
                },
                inelastic: {
                    definition: "Kinetic energy not conserved (lost to heat, deformation)",
                    equations: ["Momentum conserved", "KE not conserved"],
                    example: "Car crashes",
                    perfectlyInelastic: "Objects stick together after collision"
                },
                explosion: {
                    definition: "Objects initially at rest fly apart",
                    conservation: "Total momentum remains zero",
                    equation: "m₁v₁ + m₂v₂ = 0"
                }
            }
        },

        circularMotionAndRotation: {
            circularMotion: {
                uniform: "Constant speed in circular path",
                velocity: "Tangent to circle; magnitude constant, direction changing",
                acceleration: "Centripetal (toward center); a_c = v²/r",
                force: "Centripetal force required; F_c = mv²/r = mω²r",
                sources: "Tension, gravity, friction, normal force"
            },
            angularQuantities: {
                angle: "θ (radians); 2π rad = 360°",
                angularVelocity: "ω = Δθ/Δt; related to linear: v = rω",
                angularAcceleration: "α = Δω/Δt; related to linear: a = rα",
                period: "T = 2πr/v = 2π/ω",
                frequency: "f = 1/T"
            },
            rotation: {
                torque: "τ = rF sin θ; rotational analog of force",
                momentOfInertia: "I = Σmr²; rotational analog of mass",
                angularMomentum: "L = Iω; conserved when no external torque",
                rotationalKE: "KE_rot = ½Iω²"
            }
        },

        gravitation: {
            newtonLaw: {
                statement: "Every mass attracts every other mass",
                equation: "F = Gm₁m₂/r²",
                constant: "G = 6.67 × 10⁻¹¹ N·m²/kg²",
                nature: "Always attractive; acts between centers"
            },
            gravitationalField: {
                definition: "Force per unit mass",
                surface: "g = GM/R² ≈ 9.8 m/s² on Earth",
                altitude: "g decreases with distance from center"
            },
            orbits: {
                circular: "Gravity provides centripetal force",
                speed: "v = √(GM/r)",
                period: "T² ∝ r³ (Kepler's third law)",
                energy: "Total E = -GMm/(2r) (negative = bound)"
            }
        },

        applications: [
            "Vehicle safety (airbags, seatbelts, crumple zones)",
            "Sports physics (throwing, hitting, jumping)",
            "Structural engineering (forces on buildings, bridges)",
            "Space missions (orbital mechanics, rocket propulsion)",
            "Amusement park rides (roller coasters, centrifuges)",
            "Biomechanics (human movement, prosthetics)"
        ],

        keyFormulas: {
            "Velocity": "v = v₀ + at",
            "Position": "x = x₀ + v₀t + ½at²",
            "Force": "F = ma",
            "Weight": "W = mg",
            "Work": "W = Fd cos θ",
            "Kinetic Energy": "KE = ½mv²",
            "Potential Energy": "PE = mgh",
            "Power": "P = W/t",
            "Momentum": "p = mv",
            "Impulse": "J = FΔt",
            "Centripetal Acceleration": "a_c = v²/r",
            "Gravitational Force": "F = Gm₁m₂/r²"
        }
    };
}

handleWavesSound(problem) {
    return {
        topic: "Waves and Sound",
        category: 'wave_physics',
        summary: "Waves are disturbances that transfer energy through space. Sound is a mechanical wave requiring a medium. Wave phenomena include reflection, refraction, diffraction, and interference.",

        fundamentalConcepts: [
            {
                name: "Wave Nature",
                definition: "Disturbance propagating through space, transferring energy without transferring matter",
                keyPoint: "Waves carry energy, not matter",
                medium: "Substance through which wave travels",
                types: {
                    mechanical: "Require medium (sound, water, seismic)",
                    electromagnetic: "Don't require medium (light, radio, X-rays)"
                }
            },
            {
                name: "Wave Types by Particle Motion",
                transverse: {
                    definition: "Particles oscillate perpendicular to wave direction",
                    examples: ["Light", "Water surface waves", "Waves on string"],
                    visualization: "Like shaking rope up-down while wave moves horizontally"
                },
                longitudinal: {
                    definition: "Particles oscillate parallel to wave direction",
                    examples: ["Sound", "Seismic P-waves", "Spring compression waves"],
                    visualization: "Like pushing/pulling slinky",
                    regions: "Compressions (high density) and rarefactions (low density)"
                }
            },
            {
                name: "Wave Properties",
                wavelength: {
                    symbol: "λ (lambda)",
                    definition: "Distance between consecutive crests (or troughs)",
                    unit: "meters (m)"
                },

                frequency: {
symbol: "f",
definition: "Number of waves passing point per second",
unit: "Hertz (Hz) = 1/s"
},
period: {
symbol: "T",
definition: "Time for one complete wave cycle",
unit: "seconds (s)",
relationship: "T = 1/f"
},
amplitude: {
symbol: "A",
definition: "Maximum displacement from equilibrium",
significance: "Related to energy/intensity of wave"
},
speed: {
equation: "v = fλ",
factors: "Depends on medium properties, not frequency",
note: "Frequency and wavelength inversely related at constant speed"
}
}
],
soundWaves: {
            nature: {
                type: "Longitudinal mechanical wave",
                medium: "Requires material (solid, liquid, or gas)",
                vacuum: "Cannot travel in vacuum (no medium)",
                mechanism: "Vibrating object creates compressions and rarefactions"
            },
            speed: {
                air: "~343 m/s at 20°C",
                water: "~1500 m/s",
                steel: "~5000 m/s",
                general: "Fastest in solids, slower in gases",
                temperature: "Speed increases with temperature"
            },
            humanHearing: {
                range: "20 Hz to 20,000 Hz (20 kHz)",
                infrasound: "Below 20 Hz (elephants, earthquakes)",
                ultrasound: "Above 20 kHz (bats, dolphins, medical imaging)"
            },
            properties: {
                pitch: {
                    definition: "Perceived frequency",
                    high: "High frequency (soprano, whistle)",
                    low: "Low frequency (bass drum, thunder)"
                },
                loudness: {
                    definition: "Perceived amplitude/intensity",
                    measurement: "Decibels (dB) - logarithmic scale",
                    threshold: "0 dB (threshold of hearing)",
                    examples: [
                        "Whisper: 20 dB",
                        "Normal conversation: 60 dB",
                        "Vacuum cleaner: 70 dB",
                        "Rock concert: 110 dB",
                        "Pain threshold: 120 dB",
                        "Jet engine: 140 dB"
                    ],
                    danger: "Prolonged exposure >85 dB can damage hearing"
                },
                timbre: {
                    definition: "Quality/color of sound",
                    cause: "Combination of frequencies (harmonics)",
                    distinction: "Why piano and violin playing same note sound different"
                }
            },
            intensity: {
                definition: "Power per unit area",
                equation: "I = P/A",
                unit: "W/m²",
                relationship: "I ∝ A² (intensity proportional to amplitude squared)",
                distance: "I ∝ 1/r² (inverse square law)"
            }
        },

        waveBehavior: {
            reflection: {
                definition: "Wave bouncing off surface",
                law: "Angle of incidence = angle of reflection",
                echo: "Reflected sound wave",
                requirement: "Minimum distance for distinct echo ~17 m (0.1 s delay)"
            },
            refraction: {
                definition: "Wave bending when entering different medium",
                cause: "Change in wave speed",
                direction: "Toward normal when slowing, away when speeding up",
                sound: "Refraction causes sound to travel farther at night (temperature gradient)"
            },
            diffraction: {
                definition: "Wave bending around obstacles or through openings",
                conditions: "Most pronounced when obstacle/opening size ≈ wavelength",
                sound: "Why you hear sound around corners (long wavelength)",
                light: "Less noticeable due to short wavelength"
            },
            interference: {
                definition: "Superposition of two or more waves",
                principle: "Waves pass through each other; displacement adds",
                constructive: {
                    definition: "Waves add (in phase)",
                    result: "Larger amplitude",
                    condition: "Path difference = nλ (n = 0, 1, 2...)"
                },
                destructive: {
                    definition: "Waves cancel (out of phase)",
                    result: "Reduced/zero amplitude",
                    condition: "Path difference = (n + ½)λ",
                    energy: "Not destroyed, redistributed to constructive regions"
                },
                beats: {
                    definition: "Interference of two slightly different frequencies",
                    frequency: "f_beat = |f₁ - f₂|",
                    sound: "Heard as periodic loud-soft pattern",
                    application: "Tuning musical instruments"
                }
            }
        },

        standingWaves: {
            definition: "Wave pattern with stationary nodes and antinodes",
            formation: "Interference of wave with its reflection",
            nodes: "Points of zero displacement (destructive interference)",
            antinodes: "Points of maximum displacement (constructive interference)",
            spacing: "Adjacent nodes (or antinodes) separated by λ/2",
            
            strings: {
                conditions: "Both ends fixed (nodes at ends)",
                fundamentalFrequency: "f₁ = v/(2L) (first harmonic)",
                harmonics: "f_n = nf₁ = nv/(2L) where n = 1, 2, 3...",
                wavelengths: "λ_n = 2L/n",
                applications: "Stringed instruments (guitar, violin, piano)"
            },
            
            tubes: {
                closedOneEnd: {
                    conditions: "Node at closed end, antinode at open end",
                    fundamental: "f₁ = v/(4L)",
                    harmonics: "Only odd harmonics: f_n = nf₁ where n = 1, 3, 5...",
                    examples: "Clarinet, organ pipes, bottles"
                },
                openBothEnds: {
                    conditions: "Antinodes at both ends",
                    fundamental: "f₁ = v/(2L)",
                    harmonics: "All harmonics: f_n = nf₁ where n = 1, 2, 3...",
                    examples: "Flute, open organ pipes"
                }
            },
            
            resonance: {
                definition: "System vibrating at natural frequency with maximum amplitude",
                cause: "External frequency matches natural frequency",
                examples: [
                    "Pushing swing at right time",
                    "Shattering glass with voice",
                    "Tacoma Narrows Bridge collapse",
                    "Musical instrument resonating chambers"
                ],
                energy: "Efficient energy transfer at resonance"
            }
        },

        dopplerEffect: {
            definition: "Change in observed frequency due to relative motion",
            approaching: {
                effect: "Observed frequency higher (shorter wavelength)",
                sound: "Higher pitch",
                reason: "Waves compressed"
            },
            receding: {
                effect: "Observed frequency lower (longer wavelength)",
                sound: "Lower pitch",
                reason: "Waves stretched"
            },
            stationary: "Observed frequency = source frequency",
            applications: [
                "Police/ambulance sirens (pitch change as vehicle passes)",
                "Radar speed detection",
                "Astronomy (redshift/blueshift of stars and galaxies)",
                "Medical ultrasound (blood flow measurement)",
                "Weather radar (wind speed)"
            ],
            sonicBoom: {
                definition: "Shock wave created when object exceeds sound speed",
                cause: "Sound waves pile up into cone shape",
                experience: "Loud explosive sound as cone passes",
                machNumber: "Mach 1 = speed of sound; Mach 2 = twice speed of sound"
            }
        },

        applications: [
            "Musical instruments (strings, wind, percussion)",
            "Medical ultrasound and imaging",
            "Sonar (submarine navigation, fish finding)",
            "Architectural acoustics (concert halls, theaters)",
            "Noise cancellation headphones",
            "Earthquake detection and analysis",
            "Non-destructive testing (ultrasonic inspection)",
            "Communication systems"
        ],

        keyFormulas: {
            "Wave speed": "v = fλ",
            "Period": "T = 1/f",
            "String fundamental": "f₁ = v/(2L)",
            "Closed tube fundamental": "f₁ = v/(4L)",
            "Open tube fundamental": "f₁ = v/(2L)",
            "Beat frequency": "f_beat = |f₁ - f₂|",
            "Intensity": "I = P/A"
        }
    };
}

handleThermodynamics(problem) {
    return {
        topic: "Thermodynamics and Heat",
        category: 'thermal_physics',
        summary: "Thermodynamics studies heat, temperature, and energy transfer. The laws of thermodynamics govern all energy transformations. Heat transfers via conduction, convection, and radiation.",

        fundamentalConcepts: [
            {
                name: "Temperature",
                definition: "Measure of average kinetic energy of particles",
                notHeat: "Temperature ≠ heat (temperature measures intensity, heat measures quantity)",
                scales: {
                    celsius: "°C; water freezes at 0°C, boils at 100°C",
                    fahrenheit: "°F; water freezes at 32°F, boils at 212°F",
                    kelvin: "K; absolute scale starting at absolute zero",
                    conversions: [
                        "K = °C + 273.15",
                        "°F = (9/5)°C + 32"
                    ]
                },
                absoluteZero: {
                    value: "0 K = -273.15°C",
                    meaning: "Theoretical minimum temperature",
                    state: "All molecular motion ceases (theoretically)",
                    unattainable: "Cannot be reached (third law)"
                }
            },
            {
                name: "Heat",
                definition: "Energy transfer due to temperature difference",
                symbol: "Q",
                unit: "Joule (J) or calorie (cal); 1 cal = 4.184 J",
                direction: "Always flows from hot to cold",
                equilibrium: "Heat flow stops when temperatures equalize"
            },
            {
                name: "Thermal Equilibrium",
                definition: "No net heat flow between objects",
                condition: "Objects at same temperature",
                zerothLaw: "If A in equilibrium with B, and B with C, then A in equilibrium with C",
                importance: "Basis for temperature measurement"
            },
            {
                name: "Internal Energy",
                definition: "Total microscopic energy of system",
                components: "Kinetic energy + potential energy of particles",
                idealGas: "U = (3/2)nRT (only kinetic energy)",
                state: "Function of temperature (ideal gas)"
            }
        ],

        heatTransfer: {
            mechanisms: [
                {
                    type: "Conduction",
                    definition: "Heat transfer through direct contact",
                    mechanism: "Energy transfers via particle collisions",
                    materials: {
                        conductors: "Transfer heat easily (metals, especially copper, aluminum)",
                        insulators: "Resist heat transfer (wood, plastic, air, foam)"
                    },
                    rate: "Q/t = kA(ΔT/d) where k = thermal conductivity",
                    examples: [
                        "Metal spoon getting hot in soup",
                        "Ice cube melting on warm hand",
                        "Heat through building walls"
                    ]
                },
                {
                    type: "Convection",
                    definition: "Heat transfer by fluid (liquid or gas) movement",
                    mechanism: "Hot fluid rises (less dense), cool fluid sinks (more dense)",
                    types: {
                        natural: "Driven by density differences (hot air rising)",
                        forced: "Driven by external means (fan, pump)"
                    },
                    examples: [
                        "Boiling water circulation",
                        "Ocean currents",
                        "Atmospheric weather patterns",
                        "Home heating systems"
                    ]
                },
                {
                    type: "Radiation",
                    definition: "Heat transfer by electromagnetic waves",
                    medium: "No medium required (works in vacuum)",
                    mechanism: "All objects emit EM radiation",
                    temperature: "Hotter objects radiate more and at shorter wavelengths",
                    stefanBoltzmann: "P = σAeT⁴",
                    examples: [
                        "Sun warming Earth",
                        "Feeling warmth from fire",
                        "Infrared heaters",
                        "Thermal imaging cameras"
                    ]
                }
            ],
            thermalExpansion: {
                definition: "Materials expand when heated, contract when cooled",
                reason: "Increased particle kinetic energy → larger average separation",
                types: {
                    linear: "ΔL = αL₀ΔT (one dimension)",
                    volumetric: "ΔV = βV₀ΔT (three dimensions); β ≈ 3α"
                },
                applications: [
                    "Expansion joints in bridges and buildings",
                    "Thermometers (liquid expansion)",
                    "Bimetallic strips (thermostats)"
                ],
                waterAnomaly: "Water contracts from 4°C to 0°C, then expands when freezing (ice less dense)"
            }
        },

        specificHeatAndPhaseChanges: {
            specificHeat: {
                definition: "Energy to raise 1 kg of substance by 1°C (or 1 K)",
                symbol: "c",
                unit: "J/(kg·°C) or J/(kg·K)",
                equation: "Q = mcΔT",
                examples: {
                    water: "4186 J/(kg·°C) - very high",
                    air: "~1000 J/(kg·°C)",
                    metals: "Low (aluminum ~900, copper ~385)"
                },
                implications: "Water heats/cools slowly; stabilizes climate near oceans"
            },
            phaseChanges: {
                definition: "Transitions between solid, liquid, and gas",
                energyNotTemperature: "During phase change, temperature constant while heat added/removed",
                transitions: [
                    "Melting/Fusion: solid → liquid",
                    "Freezing/Solidification: liquid → solid",
                    "Vaporization/Boiling: liquid → gas",
                    "Condensation: gas → liquid",
                    "Sublimation: solid → gas",
                    "Deposition: gas → solid"
                ],
                latentHeat: {
                    definition: "Energy per unit mass for phase change at constant temperature",
                    fusion: {
                        definition: "Energy to melt/freeze",
                        symbol: "L_f",
                        equation: "Q = mL_f",
                        water: "334,000 J/kg (334 kJ/kg)"
                    },
                    vaporization: {
                        definition: "Energy to boil/condense",
                        symbol: "L_v",
                        equation: "Q = mL_v",
                        water: "2,260,000 J/kg (2.26 MJ/kg)",
                        note: "Much larger than L_f (breaking all intermolecular forces)"
                    }
                }
            },
            heatingCurve: {
                description: "Graph of temperature vs heat added",
                regions: [
                    "Solid heating: temperature rises (Q = mcΔT)",
                    "Melting: temperature constant (Q = mL_f)",
                    "Liquid heating: temperature rises (Q = mcΔT)",
                    "Boiling: temperature constant (Q = mL_v)",
                    "Gas heating: temperature rises (Q = mcΔT)"
                ],
                slopes: "Steeper slope = lower specific heat"
            }
        },

        gasLaws: {
            kineticTheory: {
                assumptions: [
                    "Gas particles in constant, random motion",
                    "Particles have negligible volume compared to container",
                    "No intermolecular forces (except during collisions)",
                    "Collisions are perfectly elastic",
                    "Average KE proportional to absolute temperature"
                ],
                pressure: "Result of particle collisions with walls",
                temperature: "Proportional to average KE: KE_avg = (3/2)kT"
            },
            idealGasLaw: {
                equation: "PV = nRT",
                variables: {
                    P: "Pressure (Pa, atm, kPa)",
                    V: "Volume (m³, L)",
                    n: "Number of moles",
                    R: "Gas constant = 8.314 J/(mol·K) = 0.0821 L·atm/(mol·K)",
                    T: "Temperature (MUST be Kelvin)"
                },
                alternative: "PV = NkT where N = number of molecules, k = Boltzmann constant",
                idealConditions: "Low pressure, high temperature (particles far apart, fast moving)"
            },
            gasProcesses: [
                {
                    type: "Isothermal",
                    constant: "Temperature (T constant)",
                    relationship: "PV = constant (Boyle's law)",
                    curve: "Hyperbola on P-V diagram",
                    work: "W = nRT ln(V_f/V_i)"
                },
                {
                    type: "Isobaric",
                    constant: "Pressure (P constant)",
                    relationship: "V/T = constant (Charles's law)",
                    work: "W = PΔV"
                },
                {
                    type: "Isochoric",
                    constant: "Volume (V constant)",
                    relationship: "P/T = constant (Gay-Lussac's law)",
                    work: "W = 0 (no volume change)"
                },
                {
                    type: "Adiabatic",
                    constant: "No heat transfer (Q = 0)",
                    relationship: "PV^γ = constant where γ = C_p/C_v",
                    property: "System insulated; ΔU = -W"
                }
            ]
        },

        lawsOfThermodynamics: {
            zerothLaw: {
                statement: "If A in thermal equilibrium with B, and B with C, then A with C",
                importance: "Defines temperature; allows thermometry"
            },
            firstLaw: {
                statement: "Energy is conserved",
                equation: "ΔU = Q - W",
                meaning: {
                    deltaU: "Change in internal energy",
                    Q: "Heat added to system (+ in, - out)",
                    W: "Work done by system (+ expansion, - compression)"
                },
                consequences: "Cannot create/destroy energy, only transform it",
                perpetualMotion: "First kind impossible (violates energy conservation)"
            },
            secondLaw: {
                statements: [
                    "Heat flows naturally from hot to cold (Clausius)",
                    "Entropy of isolated system always increases",
                    "No heat engine can be 100% efficient (Kelvin-Planck)",
                    "Impossible to convert heat completely to work in cyclic process"
                ],
                entropy: {
                    definition: "Measure of disorder/randomness",
                    symbol: "S",
                    direction: "Processes increase total entropy of universe",
                    arrow: "Defines direction of time (entropy increases)"
                },
                perpetualMotion: "Second kind impossible (violates entropy increase)"
            },
            thirdLaw: {
                statement: "Entropy of perfect crystal approaches zero as T approaches absolute zero",
                implication: "Absolute zero is unattainable"
            }
        },

        heatEngines: {
            definition: "Device converting heat into work",
            operation: {
                hotReservoir: "Heat source (T_H)",
                coldReservoir: "Heat sink (T_C)",
                cycle: "Working substance undergoes cyclic process",
                work: "W = Q_H - Q_C"
            },
            efficiency: {
                definition: "η = W/Q_H = (Q_H - Q_C)/Q_H = 1 - Q_C/Q_H",
                alwaysLess: "Always < 100% (second law)",
                carnot: "η_Carnot = 1 - T_C/T_H (maximum possible)",
                realEngines: "Always less efficient than Carnot"
            },
            examples: [
                "Car engines (internal combustion)",
                "Steam turbines (power plants)",
                "Jet engines"
            ],
            refrigerator: {
                definition: "Heat engine in reverse (moves heat from cold to hot)",
                work: "Requires work input",
                COP: "Coefficient of performance = Q_C/W",
                examples: ["Refrigerators", "Air conditioners", "Heat pumps"]
            }
        },

        applications: [
            "Climate control (heating, air conditioning)",
            "Power generation (thermal power plants)",
            "Engines (automobiles, aircraft)",
            "Refrigeration and food preservation",
            "Material processing (metallurgy, ceramics)",
            "Weather and climate science",
            "Cooking and food preparation"
        ],

        keyFormulas: {
            "Heat transfer": "Q = mcΔT",
            "Phase change": "Q = mL",
            "Ideal gas law": "PV = nRT",
            "First law": "ΔU = Q - W",
            "Efficiency": "η = W/Q_H = 1 - Q_C/Q_H",
            "Carnot efficiency": "η = 1 - T_C/T_H"
        }
    };
}

handleElectromagnetism(problem) {
    return {
        topic: "Electricity and Magnetism",
        category: 'electromagnetism',
        summary: "Electricity and magnetism are unified as electromagnetism. Electric charges create electric fields; moving charges (currents) create magnetic fields. Changing magnetic fields induce electric currents (electromagnetic induction).",

        fundamentalConcepts: [
            {
                name: "Electric Charge",
                definition: "Fundamental property of matter",
                types: {
                    positive: "Protons carry positive charge",
                    negative: "Electrons carry negative charge",
                    neutral: "Neutrons have no charge"
                },
                unit: "Coulomb (C); elementary charge e = 1.6 × 10⁻¹⁹ C",
                quantization: "Charge comes in discrete multiples of e",
                conservation: "Total charge is conserved",
                interaction: "Like charges repel, opposite charges attract"
            },
            {
                name: "Coulomb's Law",
                statement: "Force between point charges",
                equation: "F = k|q₁q₂|/r²",
                constant: "k = 8.99 × 10⁹ N·m²/C²",
                nature: "Inverse square law (like gravity)",
                direction: "Along line connecting charges",
                comparison: "Much stronger than gravity for similar masses"
            },
            {
                name: "Electric Field",
                definition: "Force per unit charge at a point in space",
                equation: "E = F/q",
                unit: "N/C or V/m",
                pointCharge: "E = kq/r²",
                direction: "Away from + charge, toward - charge",
                fieldLines: {
                    properties: "Never cross; density indicates strength",
                    start: "Begin on positive charges",
                    end: "End on negative charges"
                },
                principle: "Field exists whether test charge present or not"
            },
            {
                name: "Electric Potential",
                definition: "Potential energy per unit charge",
                symbol: "V (voltage)",
                equation: "V = U/q = kq/r (point charge)",
                unit: "Volt (V) = J/C",
                potential Difference: "ΔV = V_B - V_A = -W/q",
                meaning: "Work per unit charge to move from A to B",
                ground: "Reference point usually at V = 0",
                equipotential: "Surfaces of constant potential; perpendicular to field lines"
            }
        ],

        electricCurrent: {
            definition: "Flow of electric charge",
            equation: "I = Q/t",
            unit: "Ampere (A) = C/s",
            conventional: "Direction of positive charge flow (opposite to electron flow)",
            requirements: [
                "Complete circuit (closed loop)",
                "Potential difference (voltage source)",
                "Conducting path"
            ],
            types: {
                DC: "Direct current - constant direction (batteries)",
                AC: "Alternating current - periodically reverses (wall outlets)"
            },
            microscopic: {
                driftVelocity: "Average velocity of charge carriers",
                speed: "Very slow (~mm/s for electrons in wire)",
                signal: "Electric field propagates at ~c (speed of light)"
            }
        },

        resistance: {
            definition: "Opposition to current flow",
            symbol: "R",
            unit: "Ohm (Ω)",
            ohmsLaw: {
                equation: "V = IR",
                meaning: "Voltage = Current × Resistance",
                graph: "Linear relationship (for ohmic materials)"
            },
            factors: {
                material: "Conductivity/resistivity (ρ)",
                length: "R ∝ L (longer → more resistance)",
                crossSection: "R ∝ 1/A (thicker → less resistance)",
                formula: "R = ρL/A"
            },
            temperature: "Resistance increases with temperature (for most metals)",
            power: {
                equations: ["P = VI", "P = I²R", "P = V²/R"],
                unit: "Watt (W) = J/s",
                heat: "Electrical energy converted to thermal energy"
            }
        },

        circuits: {
            components: [
                {
                    name: "Battery/Cell",
                    function: "Provides EMF (voltage source)",
                    terminal: "Long line = positive, short line = negative"
                },
                {
                    name: "Resistor",
                    function: "Opposes current flow",
                    symbol: "Zigzag line or rectangle"
                },
                {
                    name: "Switch",
                    function: "Opens/closes circuit",
                    open: "No current flows",
                    closed: "Current flows"
                },
                {
                    name: "Ammeter",
                    function: "Measures current",
                    connection: "In series (low resistance)"
                },
                {
                    name: "Voltmeter",
                    function: "Measures voltage",
                    connection: "In parallel (high resistance)"
                }
            ],
            series: {
                definition: "Components connected in single path",
                current: "Same through all components (I = I₁ = I₂ = I₃)",
                voltage: "Divides across components (V_total = V₁ + V₂ + V₃)",
                resistance: "R_total = R₁ + R₂ + R₃",
                failure: "If one breaks, all stop working"
            },
            parallel: {
                definition: "Components connected with multiple paths",
                voltage: "Same across all branches (V = V₁ = V₂ = V₃)",
                current: "Divides among branches (I_total = I₁ + I₂ + I₃)",
                resistance: "1/R_total = 1/R₁ + 1/R₂ + 1/R₃",
                failure: "Others continue if one breaks"
            },
            kirchhoffsLaws: {
                current: "Sum of currents into junction = sum of currents out",
                voltage: "Sum of voltage changes around closed loop = 0"
            }
        },

        capacitance: {
            definition: "Ability to store electric charge and energy",
            capacitor: "Device with two conductors separated by insulator",
            equation: "C = Q/V",
            unit: "Farad (F) = C/V",
            parallelPlate: "C = ε₀A/d",
            energy: "U = ½QV = ½CV² = Q²/(2C)",
            charging: "Voltage increases as charge accumulates",
            discharging: "Stored charge flows out",
            applications: [
                "Energy storage",
                "Camera flash",
                "Filters in circuits",
                "Touchscreens"
            ]
        },

        magnetism: {
            sources: [
                "Permanent magnets (aligned atomic magnetic moments)",
                "Electric currents (moving charges)",
                "Changing electric fields"
            ],
            poles: {
                types: "North and south (no magnetic monopoles)",
                interaction: "Like poles repel, opposite attract",
                inseparable: "Cannot isolate single pole"
            },
            magneticField: {
                symbol: "B",
                unit: "Tesla (T) = N/(A·m) = Wb/m²",
                direction: "From north to south (outside magnet)",
                fieldLines: "Never cross; form closed loops",
                earth: "Acts like bar magnet; ~5 × 10⁻⁵ T at surface"
            },
            forceOnMovingCharge: {
                equation: "F = qvB sin θ",
                direction: "Right-hand rule (perpendicular to v and B)",
                circular: "Perpendicular motion → circular path",
                parallel: "No force if moving parallel to field"
            },
            forceOnCurrent: {
                equation: "F = BIL sin θ",
                application: "Electric motors",
                direction: "Right-hand rule"
            },
            currentFieldRelation: {
                straightWire: "B = μ₀I/(2πr)",
                solenoid: "B = μ₀nI (inside; n = turns/length)",
                direction: "Right-hand rule (thumb = current, fingers = field)"
            }
        },

        electromagneticInduction: {
            faradaysLaw: {
                statement: "Changing magnetic flux induces EMF",
                equation: "ε = -N(ΔΦ/Δt)",
                flux: "Φ = BA cos θ (magnetic field through area)",
                ways: "Change B, A, or θ"
            },
            lenzLaw: {
                statement: "Induced current opposes change that caused it",
                conservation: "Consequence of energy conservation",
                direction: "Right-hand rule"
            },
            applications: [
                "Generators (mechanical → electrical energy)",
                "Transformers (change AC voltage)",
                "Induction cooktops",
                "Metal detectors",
                "Wireless charging"
            ],
            generator: {
                principle: "Rotating coil in magnetic field",
                process: "Mechanical energy → EMF → electrical energy",
AC: "Rotating coil produces alternating current",
EMF: "ε = NABω sin(ωt)"
},
motor: {
principle: "Current in magnetic field experiences force",
process: "Electrical energy → mechanical energy",
opposite: "Generator in reverse"
},
transformer: {
definition: "Device changing AC voltage via induction",
principle: "Two coils sharing magnetic flux",
equations: ["V_s/V_p = N_s/N_p", "I_sV_s = I_pV_p (ideal)"],
stepUp: "N_s > N_p (increases voltage, decreases current)",
stepDown: "N_s < N_p (decreases voltage, increases current)",
efficiency: "Very high (~99%) for well-designed transformers",
AConly: "Requires changing magnetic field (DC won't work)",
application: "Power transmission (step up for transmission, step down for homes)"
}
},
inductance: {
            definition: "Property opposing changes in current",
            inductor: "Coil of wire storing energy in magnetic field",
            selfInductance: {
                equation: "ε = -L(dI/dt)",
                unit: "Henry (H) = V·s/A",
                meaning: "Opposes current changes"
            },
            energy: "U = ½LI²",
            applications: [
                "Filters in circuits",
                "Energy storage",
                "Induction heating"
            ]
        },

        AC: {
            definition: "Current that periodically reverses direction",
            frequency: "60 Hz (US), 50 Hz (most other countries)",
            advantages: [
                "Can be transformed to different voltages",
                "Easier to generate",
                "Less energy loss in long-distance transmission"
            ],
            RMS: {
                definition: "Root mean square - effective DC equivalent",
                voltage: "V_rms = V_peak/√2",
                current: "I_rms = I_peak/√2",
                power: "P_avg = V_rms × I_rms"
            },
            impedance: "AC resistance including reactance from capacitors/inductors"
        },

        electromagneticWaves: {
            definition: "Self-propagating waves of E and B fields",
            nature: "Transverse waves; E and B perpendicular to each other and direction",
            speed: "c = 3.00 × 10⁸ m/s (in vacuum)",
            generation: "Accelerating charges",
            spectrum: {
                order: "Radio → Microwave → Infrared → Visible → UV → X-ray → Gamma",
                energy: "Increases with frequency (E = hf)",
                wavelength: "Decreases with frequency (c = fλ)"
            },
            applications: [
                "Radio waves: Communication, broadcasting",
                "Microwaves: Radar, cooking, cell phones",
                "Infrared: Heat imaging, remote controls",
                "Visible: Human vision, photography",
                "UV: Sterilization, vitamin D production",
                "X-rays: Medical imaging, security",
                "Gamma rays: Cancer treatment, sterilization"
            ]
        },

        applications: [
            "Power generation and distribution",
            "Electric motors and generators",
            "Electronics (computers, phones)",
            "Communication (radio, TV, internet)",
            "Medical devices (MRI, defibrillators)",
            "Transportation (electric vehicles, maglev trains)",
            "Household appliances"
        ],

        keyFormulas: {
            "Coulomb's law": "F = kq₁q₂/r²",
            "Electric field": "E = F/q = kq/r²",
            "Electric potential": "V = kq/r",
            "Ohm's law": "V = IR",
            "Power": "P = VI = I²R = V²/R",
            "Series resistance": "R_total = R₁ + R₂ + R₃",
            "Parallel resistance": "1/R_total = 1/R₁ + 1/R₂ + 1/R₃",
            "Capacitance": "C = Q/V",
            "Magnetic force on charge": "F = qvB sin θ",
            "Faraday's law": "ε = -N(ΔΦ/Δt)",
            "Transformer": "V_s/V_p = N_s/N_p"
        }
    };
}

handleOptics(problem) {
    return {
        topic: "Optics",
        category: 'wave_physics',
        summary: "Optics studies light behavior. Geometric optics uses rays to explain reflection and refraction. Physical optics treats light as waves, explaining interference and diffraction. Light is electromagnetic radiation visible to humans.",

        fundamentalConcepts: [
            {
                name: "Nature of Light",
                theories: {
                    particle: "Newton proposed light as particles (corpuscles)",
                    wave: "Huygens, Young, Fresnel demonstrated wave nature",
                    electromagnetic: "Maxwell showed light is EM wave",
                    quantum: "Einstein showed particle nature (photons) in photoelectric effect"
                },
                modern: "Wave-particle duality - light exhibits both behaviors",
                speed: {
                    vacuum: "c = 3.00 × 10⁸ m/s",
                    medium: "v = c/n where n = refractive index",
                    constant: "Speed in vacuum is universal constant"
                },
                spectrum: {
                    visible: "400 nm (violet) to 700 nm (red)",
                    colors: "ROYGBIV (Red, Orange, Yellow, Green, Blue, Indigo, Violet)",
                    wavelengths: {
                        red: "~700 nm",
                        green: "~550 nm",
                        blue: "~450 nm",
                        violet: "~400 nm"
                    }
                }
            },
            {
                name: "Ray Model",
                definition: "Light travels in straight lines (rays)",
                assumptions: [
                    "Light travels in straight lines in homogeneous medium",
                    "Rays don't interact with each other",
                    "Rays represent direction of energy flow"
                ],
                limitations: "Fails for wave phenomena (interference, diffraction)",
                validity: "Good when obstacles >> wavelength"
            },
            {
                name: "Index of Refraction",
                definition: "Ratio of light speed in vacuum to speed in medium",
                equation: "n = c/v",
                values: {
                    vacuum: "n = 1 (exactly)",
                    air: "n ≈ 1.0003 (essentially 1)",
                    water: "n ≈ 1.33",
                    glass: "n ≈ 1.5",
                    diamond: "n ≈ 2.42"
                },
                meaning: "Higher n means light travels slower"
            }
        ],

        reflection: {
            definition: "Light bouncing off surface",
            lawOfReflection: {
                statement: "Angle of incidence = angle of reflection",
                equation: "θ_i = θ_r",
                measurement: "Angles measured from normal (perpendicular)",
                always: "True for all surfaces"
            },
            types: {
                specular: {
                    definition: "Reflection from smooth surface",
                    result: "Clear image (mirror)",
                    rays: "Parallel incident rays remain parallel"
                },
                diffuse: {
                    definition: "Reflection from rough surface",
                    result: "Scattered light, no clear image",
                    rays: "Parallel incident rays scatter in all directions",
                    examples: "Paper, walls, most objects"
                }
            },
            images: "We see objects via reflected light, not emitted light"
        },

        mirrors: {
            planeMirror: {
                definition: "Flat mirror",
                imageProperties: {
                    location: "Same distance behind mirror as object in front",
                    size: "Same size as object (m = 1)",
                    orientation: "Upright (not inverted)",
                    type: "Virtual (cannot project on screen)",
                    lateralReversal: "Left-right reversal (actually front-back)"
                },
                rayDiagram: "One ray to mirror center, one at angle - reflected rays appear to diverge from image"
            },
            sphericalMirrors: {
                concave: {
                    definition: "Converging mirror (curves inward)",
                    focalPoint: "Real; light converges",
                    focalLength: "Positive by convention",
                    images: {
                        objectBeyond2f: "Real, inverted, reduced",
                        objectAt2f: "Real, inverted, same size",
                        objectBetweenFand2f: "Real, inverted, enlarged",
                        objectInsideF: "Virtual, upright, enlarged",
                        applications: "Makeup mirrors, telescopes, solar concentrators"
                    }
                },
                convex: {
                    definition: "Diverging mirror (curves outward)",
                    focalPoint: "Virtual; light appears to diverge from",
                    focalLength: "Negative by convention",
                    images: "Always virtual, upright, reduced",
                    applications: "Car side mirrors, security mirrors (wide field of view)"
                }
            },
            mirrorEquation: {
                equation: "1/f = 1/d_o + 1/d_i",
                variables: {
                    f: "Focal length (f = R/2 where R = radius of curvature)",
                    d_o: "Object distance (always positive)",
                    d_i: "Image distance (+ real, - virtual)"
                },
                magnification: {
                    equation: "m = -d_i/d_o = h_i/h_o",
                    positive: "Upright image",
                    negative: "Inverted image",
                    magnitude: "|m| > 1 enlarged, |m| < 1 reduced"
                }
            }
        },

        refraction: {
            definition: "Bending of light entering different medium",
            cause: "Change in light speed",
            snellsLaw: {
                equation: "n₁ sin θ₁ = n₂ sin θ₂",
                angles: "Measured from normal",
                direction: {
                    slowingDown: "Bends toward normal (entering denser medium)",
                    speedingUp: "Bends away from normal (entering less dense medium)"
                }
            },
            applications: [
                "Lenses",
                "Prisms",
                "Optical fibers",
                "Mirages",
                "Rainbows"
            ],
            dispersion: {
                definition: "Separation of white light into colors",
                cause: "n depends slightly on wavelength",
                order: "Violet bends most (highest n), red least (lowest n)",
                prism: "Demonstrates dispersion clearly",
                rainbow: "Water droplets act as prisms"
            },
            totalInternalReflection: {
                definition: "Complete reflection when light can't exit medium",
                condition: "Light going from high n to low n at angle > critical angle",
                criticalAngle: {
                    definition: "θ_c where refracted ray grazes surface (θ_r = 90°)",
                    equation: "sin θ_c = n₂/n₁ (where n₁ > n₂)",
                    example: "Water-air: θ_c ≈ 49°"
                },
                applications: [
                    "Optical fibers (telecommunications)",
                    "Fiber optic cables (internet)",
                    "Endoscopes (medical)",
                    "Diamonds sparkle (multiple TIR)",
                    "Binoculars (prisms)"
                ]
            }
        },

        lenses: {
            types: {
                converging: {
                    definition: "Convex lens (thicker in middle)",
                    effect: "Parallel rays converge to focal point",
                    focalLength: "Positive",
                    power: "Positive",
                    images: "Can form real or virtual depending on object position"
                },
                diverging: {
                    definition: "Concave lens (thinner in middle)",
                    effect: "Parallel rays diverge (appear from virtual focal point)",
                    focalLength: "Negative",
                    power: "Negative",
                    images: "Always virtual, upright, reduced"
                }
            },
            thinLensEquation: {
                equation: "1/f = 1/d_o + 1/d_i",
                signConventions: {
                    f: "+ converging, - diverging",
                    d_o: "Always positive",
                    d_i: "+ real image, - virtual image"
                },
                magnification: "m = -d_i/d_o = h_i/h_o"
            },
            convergingLensImages: {
                objectBeyond2f: "Real, inverted, reduced (camera)",
                objectAt2f: "Real, inverted, same size",
                objectBetweenFand2f: "Real, inverted, enlarged (projector)",
                objectInsideF: "Virtual, upright, enlarged (magnifying glass)",
                focusedAt: "Object at f → rays parallel (collimated beam)"
            },
            lensPower: {
                definition: "Measure of converging/diverging ability",
                equation: "P = 1/f (f in meters)",
                unit: "Diopter (D) = m⁻¹",
                combination: "P_total = P₁ + P₂ + ... (for thin lenses in contact)"
            },
            applications: [
                "Eyeglasses (correct vision)",
                "Cameras (form images)",
                "Microscopes (magnify small objects)",
                "Telescopes (see distant objects)",
                "Projectors (enlarge images)"
            ]
        },

        opticalInstruments: {
            eye: {
                parts: {
                    cornea: "Most refraction occurs here (fixed n)",
                    pupil: "Opening controlling light amount",
                    lens: "Fine-tunes focus (variable focal length)",
                    retina: "Light-sensitive surface (like camera film)"
                },
                accommodation: "Lens changes shape to focus near/far",
                nearPoint: "Closest clear focus (~25 cm for young adults)",
                farPoint: "Farthest clear focus (infinity for normal eye)",
                defects: {
                    myopia: "Nearsighted; distant objects blurry; diverging lens corrects",
                    hyperopia: "Farsighted; close objects blurry; converging lens corrects",
                    astigmatism: "Non-spherical cornea/lens; cylindrical lens corrects"
                }
            },
            magnifyingGlass: {
                principle: "Converging lens; object inside focal point",
                image: "Virtual, upright, enlarged",
                magnification: "M = 25cm/f (approximate)"
            },
            microscope: {
                principle: "Two converging lenses (objective + eyepiece)",
                objective: "Forms real, enlarged, inverted image",
                eyepiece: "Acts as magnifying glass on intermediate image",
                totalMagnification: "M = m_objective × M_eyepiece"
            },
            telescope: {
                refracting: {
                    principle: "Two converging lenses",
                    objective: "Large focal length, gathers light",
                    eyepiece: "Small focal length, magnifies",
                    magnification: "M = -f_objective/f_eyepiece",
                    limitation: "Chromatic aberration, heavy"
                },
                reflecting: {
                    principle: "Curved mirror + eyepiece lens",
                    advantages: "No chromatic aberration, lighter",
                    examples: "Most large telescopes"
                }
            }
        },

        waveOptics: {
            interference: {
                definition: "Superposition of light waves",
                requirement: "Coherent sources (constant phase relationship)",
                youngDoubleSlit: {
                    setup: "Light through two narrow slits",
                    pattern: "Alternating bright and dark fringes on screen",
                    bright: "Constructive interference; path difference = nλ",
                    dark: "Destructive interference; path difference = (n + ½)λ",
                    spacing: "Δy = λL/d (fringe separation)",
                    significance: "Definitive proof of wave nature of light"
                },
                thinFilms: {
                    examples: "Soap bubbles, oil slicks, anti-reflective coatings",
                    colors: "Due to interference of reflections from top and bottom surfaces",
                    phaseShift: "180° shift when reflecting off denser medium",
                    thickness: "Determines which wavelengths interfere constructively"
                }
            },
            diffraction: {
                definition: "Bending of light around obstacles/edges",
                singleSlit: {
                    pattern: "Central bright fringe with dimmer side fringes",
                    width: "w = λL/a (central bright width)",
                    condition: "Slit width comparable to wavelength"
                },
                diffraction Grating: {
                    definition: "Many parallel slits/lines",
                    equation: "d sin θ = nλ (bright fringes)",
                    advantages: "Sharper, brighter lines than double slit",
                    applications: "Spectrometers, wavelength measurement"
                },
                circular: {
                    pattern: "Central bright disk (Airy disk) with rings",
                    limit: "Resolution limit of optical instruments",
                    rayleigh: "θ_min = 1.22λ/D (minimum resolvable angle)"
                }
            },
            polarization: {
                definition: "Restriction of light oscillation to one plane",
                unpolarized: "Light vibrating in all perpendicular directions",
                polarized: "Light vibrating in one direction only",
                methods: [
                    "Polarizing filters (absorption)",
                    "Reflection at Brewster's angle",
                    "Scattering (sky polarization)"
                ],
                malus: "I = I₀ cos² θ (transmitted intensity through polarizer)",
                applications: [
                    "Polarized sunglasses (reduce glare)",
                    "LCD screens",
                    "3D movies",
                    "Stress analysis",
                    "Photography filters"
                ]
            }
        },

        applications: [
            "Vision correction (eyeglasses, contacts, LASIK)",
            "Photography and imaging",
            "Telescopes and astronomy",
            "Microscopy and biology",
            "Fiber optic communication",
            "Laser technology",
            "Optical data storage (CDs, DVDs)",
            "Displays (LED, LCD, OLED)"
        ],

        keyFormulas: {
            "Snell's law": "n₁ sin θ₁ = n₂ sin θ₂",
            "Critical angle": "sin θ_c = n₂/n₁",
            "Mirror equation": "1/f = 1/d_o + 1/d_i",
            "Lens equation": "1/f = 1/d_o + 1/d_i",
            "Magnification": "m = -d_i/d_o = h_i/h_o",
            "Lens power": "P = 1/f",
            "Double slit": "d sin θ = nλ",
            "Thin film": "2nt = (m + ½)λ (constructive with phase shift)"
        }
    };
}

handleModernPhysics(problem) {
    return {
        topic: "Modern Physics",
        category: 'quantum_physics',
        summary: "Modern physics emerged in early 1900s with quantum mechanics and relativity. Classical physics fails at atomic scales. Quantum mechanics describes probabilistic particle behavior. Key phenomena include photoelectric effect, wave-particle duality, and atomic spectra.",

        fundamentalConcepts: [
            {
                name: "Classical Physics Failures",
                blackbodyRadiation: "Classical theory predicted infinite energy at short wavelengths (ultraviolet catastrophe)",
                photoelectricEffect: "Light intensity doesn't affect electron energy (contradicts wave theory)",
                atomicStability: "Accelerating electrons should radiate energy and spiral into nucleus",
                spectra: "Atoms emit discrete wavelengths, not continuous spectrum",
                resolution: "Quantum mechanics resolved all these problems"
            },
            {
                name: "Quantization",
                concept: "Energy comes in discrete packets (quanta), not continuous",
                planck: {
                    hypothesis: "Energy of electromagnetic oscillator: E = nhf where n = 1, 2, 3...",
                    constant: "h = 6.626 × 10⁻³⁴ J·s (Planck's constant)",
                    blackbody: "Solved ultraviolet catastrophe"
                },
                significance: "Revolutionary idea - energy not continuous at small scales"
            },
            {
                name: "Photon",
                definition: "Particle of light; quantum of electromagnetic energy",
                energy: "E = hf = hc/λ",
                momentum: "p = h/λ = E/c",
                massless: "Rest mass = 0; always travels at speed of light",
                einstein: "Introduced to explain photoelectric effect (1905)"
            }
        ],

        photoelectricEffect: {
            observation: "Light shining on metal surface ejects electrons",
            classicalPrediction: {
                intensity: "Brighter light → more energy → faster electrons",
                frequency: "Any frequency should work given enough time",
                delay: "Should be time delay while energy accumulates"
            },
            actualResults: {
                intensity: "Brighter → more electrons, but same max speed",
                frequency: "Below threshold, no electrons no matter how bright",
                instantaneous: "Electrons ejected immediately (no delay)"
            },
            einsteinExplanation: {
                photonModel: "Light consists of photons with E = hf",
                oneToOne: "One photon ejects one electron",
                energy: "Photon energy must exceed work function",
                equation: "KE_max = hf - φ where φ = work function"
            },
            workFunction: {
                definition: "Minimum energy to remove electron from metal",
                symbol: "φ (phi)",
                typical: "Few eV (electron volts)",
                material: "Different for each metal"
            },
            thresholdFrequency: {
                definition: "Minimum frequency for photoelectric effect",
                equation: "f₀ = φ/h",
                wavelength: "λ₀ = c/f₀ = hc/φ"
            },
            stoppingPotential: {
                definition: "Voltage needed to stop fastest photoelectrons",
                equation: "eV_stop = KE_max = hf - φ",
                measurement: "Used to determine h and φ experimentally"
            },
            applications: [
                "Solar cells (photovoltaic effect)",
                "Photomultiplier tubes",
                "Light sensors",
                "Automatic doors",
                "Digital cameras"
            ]
        },

        waveParticleDuality: {
            lightDuality: {
                wave: "Interference, diffraction, polarization",
                particle: "Photoelectric effect, Compton scattering",
                both: "Light exhibits both wave and particle properties"
            },
            deBroglieHypothesis: {
                statement: "All matter has wave properties",
                wavelength: "λ = h/p = h/(mv)",
                year: "1924 - extended duality to matter",
                verification: "Electron diffraction experiments (Davisson-Germer, 1927)"
            },
            electronDiffraction: {
                experiment: "Electrons through crystal show interference pattern",
                proof: "Electrons exhibit wave behavior",
                wavelength: "Confirmed de Broglie relation",
                application: "Electron microscopes (shorter wavelength → better resolution)"
            },
            complementarity: {
                principle: "Wave and particle aspects are complementary",
                bohr: "Cannot observe both simultaneously",
                measurement: "Observation determines which aspect manifests"
            },
            macroscopic: {
                question: "Why don't we see wave behavior of macroscopic objects?",
                answer: "Wavelength λ = h/p extremely small for large masses",
                example: "Person (70 kg, 1 m/s): λ ≈ 10⁻³⁵ m (immeasurably small)"
            }
        },

        atomicModels: {
            thomson: {
                name: "Plum pudding model",
                description: "Positive sphere with embedded electrons",
                problem: "Couldn't explain Rutherford scattering"
            },
            rutherford: {
                name: "Nuclear model",
                experiment: "Gold foil experiment - alpha particles scattered",
                discovery: "Tiny, dense, positive nucleus",
                problem: "Accelerating electrons should radiate energy and collapse"
            },
            bohr: {
                name: "Bohr model",
                postulates: [
                    "Electrons in fixed orbits with quantized angular momentum",
                    "No radiation in stationary states",
                    "Radiation emitted/absorbed during transitions: ΔE = hf"
                ],
                energy: "E_n = -13.6 eV/n² for hydrogen (n = 1, 2, 3...)",
                radius: "r_n = n²a₀ where a₀ = 0.529 Å (Bohr radius)",
                success: "Explained hydrogen spectrum perfectly",
                limitations: "Failed for multi-electron atoms, didn't explain fine structure"
            },
            quantum: {
                name: "Quantum mechanical model",
                basis: "Schrödinger equation",
                orbitals: "Probability distributions, not fixed orbits",
                quantumNumbers: "n, l, m_l, m_s describe electron state",
                success: "Explains all atomic phenomena"
            }
        },

        atomicSpectra: {
            emission: {
                definition: "Light emitted when excited atoms return to lower energy states",
                discrete: "Only specific wavelengths (line spectrum)",
                colors: "Each element has unique spectral fingerprint",
                process: "Electron drops from E_i to E_f, emits photon with E = hf = E_i - E_f"
            },
            absorption: {
                definition: "Atoms absorb specific wavelengths from white light",
                dark Lines: "Missing wavelengths in continuous spectrum",
                matching: "Absorption lines match emission lines",
                process: "Photon absorbed, electron jumps to higher level"
            },
            hydrogenSeries: {
                lyman: "UV; transitions to n=1",
                balmer: "Visible; transitions to n=2",
                paschen: "IR; transitions to n=3",
                equation: "1/λ = R(1/n_f² - 1/n_i²) where R = 1.097 × 10⁷ m⁻¹"
            },
            applications: [
                "Identifying elements (spectroscopy)",
                "Astronomy (stellar composition and motion)",
                "Chemical analysis",
                "Lasers",
                "Fluorescent lights"
            ]
        },

        uncertaintyPrinciple: {
            heisenberg: "Werner Heisenberg, 1927",
            statement: "Cannot simultaneously know exact position and momentum",
            equation: "ΔxΔp ≥ ℏ/2 where ℏ = h/(2π)",
            energyTime: "ΔEΔt ≥ ℏ/2",
            notMeasurement: "Not about measurement errors - fundamental limit of nature",
            wavePacket: "Precise position → broad momentum distribution; vice versa",
            implications: [
                "Electron position in atom is probabilistic",
                "Quantum tunneling possible",
                "Virtual particles can exist briefly",
                "Challenges determinism"
            ],
            macroscopic: "Negligible for everyday objects due to tiny ℏ"
        },

        waveFunctions: {
            schrodinger: "Schrödinger equation describes quantum state",
            waveFunction: {
                symbol: "ψ (psi)",
                meaning: "Mathematical description of quantum state",
                complex: "Generally complex-valued function"
            },
            interpretation: {
                born: "Max Born's interpretation",
                probability: "|ψ|² gives probability density",
                meaning: "|ψ|²dV = probability of finding particle in volume dV"
            },
            superposition: {
                principle: "Particle can be in multiple states simultaneously",
                collapse: "Wave function collapses to definite state upon measurement",
                schrodingerCat: "Thought experiment illustrating superposition"
            },
            quantumTunneling: {
                definition: "Particle penetrating classically forbidden barrier",
                probability: "Exponentially decreases with barrier width/height",
                applications: [
                    "Alpha decay",
                    "Scanning tunneling microscope (STM)",
                    "Tunnel diodes",
                    "Nuclear fusion in stars"
                ]
            }
        },

        comptonEffect: {
            observation: "X-rays scattered by electrons have longer wavelength",
            explanation: "Photon-electron collision (particle behavior)",
            wavelengthShift: "Δλ = (h/m_ec)(1 - cos θ)",
            significance: "Confirmed photon momentum and particle nature"
        },

        applications: [
            "Lasers (stimulated emission)",
            "LED technology",
            "Solar cells",
            "Atomic clocks (GPS)",
            "Electron microscopy",
            "Quantum computing (emerging)",
            "Medical imaging (PET scans)",
            "Semiconductor devices"
        ],

        keyFormulas: {
            "Photon energy": "E = hf = hc/λ",
            "Photon momentum": "p = h/λ",
            "Photoelectric": "KE_max = hf - φ",
            "de Broglie": "λ = h/p",
            "Bohr energy": "E_n = -13.6 eV/n²",
            "Bohr radius": "r_n = n²a₀",
            "Uncertainty": "ΔxΔp ≥ ℏ/2"
        }
    };
}

handleRelativity(problem) {
    return {
        topic: "Relativity",
        category: 'modern_physics',
        summary: "Einstein's relativity revolutionized understanding of space, time, and gravity. Special relativity (1905) shows space and time are relative, not absolute. General relativity (1915) describes gravity as spacetime curvature. Both have been extensively verified experimentally.",

        fundamentalConcepts: [
            {
                name: "Classical Physics Assumptions",
                absoluteSpace: "Newton: Space is fixed, absolute background",
                absoluteTime: "Newton: Time flows uniformly everywhere",
                galileanRelativity: "Velocities add linearly (v_rel = v₁ + v₂)",
problem: "Maxwell's equations suggested speed of light is constant - contradicts Galilean relativity"
},
{
name: "Michelson-Morley Experiment",
purpose: "Detect Earth's motion through luminiferous ether",
expectation: "Light speed different in different directions",
result: "No difference detected - light speed same in all directions",
implication: "No ether; light speed constant in all frames",
significance: "Motivated special relativity"
},
{
name: "Postulates of Special Relativity",
first: {
statement: "Laws of physics are the same in all inertial reference frames",
meaning: "No experiment can determine absolute motion",
galileanPrinciple: "Extended to include electromagnetism"
},
second: {
statement: "Speed of light in vacuum is constant (c) in all inertial frames",
revolutionary: "Light speed doesn't depend on source or observer motion",
implications: "Space and time must be relative"
}
}
],
timeDilation: {
            definition: "Moving clocks run slower relative to stationary observer",
            equation: "Δt = γΔt₀ where γ = 1/√(1 - v²/c²)",
            properTime: "Δt₀ = time in rest frame of clock (shortest time)",
            lorentzFactor: {
                symbol: "γ (gamma)",
                equation: "γ = 1/√(1 - v²/c²)",
                limits: {
                    vSmall: "γ ≈ 1 (no noticeable effect at low speeds)",
                    vNearC: "γ → ∞ (dramatic effects near light speed)"
                },
                examples: [
                    "v = 0.1c: γ ≈ 1.005",
                    "v = 0.5c: γ ≈ 1.15",
                    "v = 0.9c: γ ≈ 2.29",
                    "v = 0.99c: γ ≈ 7.09"
                ]
            },
            experimental: {
                muons: "Cosmic ray muons reach Earth (shouldn't due to short lifetime)",
                atomicClocks: "Atomic clocks on planes run slower",
                particleAccelerators: "High-speed particles live longer",
                GPS: "Satellites require time dilation corrections"
            },
            twinParadox: {
                scenario: "Twin travels at high speed; returns younger",
                resolution: "Traveling twin accelerates (changes frames); not symmetric",
                result: "Real effect, not paradox - time dilation verified"
            },
            practical: "Significant only at speeds approaching c"
        },

        lengthContraction: {
            definition: "Moving objects appear shorter along direction of motion",
            equation: "L = L₀/γ = L₀√(1 - v²/c²)",
            properLength: "L₀ = length in rest frame (longest length)",
            onlyParallel: "Only dimension parallel to motion contracts",
            perpendicular: "Dimensions perpendicular to motion unchanged",
            reciprocal: "Each observer sees other's length contracted",
            example: {
                spacecraft: "0.9c spacecraft (100 m): appears 43.6 m to stationary observer",
                muon: "Muon sees Earth's atmosphere contracted (explains survival to surface)"
            },
            noParadox: "Measurements depend on reference frame - both correct"
        },

        relativityOfSimultaneity: {
            definition: "Events simultaneous in one frame may not be in another",
            trainExample: {
                scenario: "Lightning strikes both ends of moving train",
                platformObserver: "Sees strikes simultaneously",
                trainObserver: "Sees front strike first (moving toward light from front)",
                conclusion: "Simultaneity is relative"
            },
            implication: "No universal 'now' - time ordering depends on reference frame",
            causal: "Events with causal connection maintain order in all frames"
        },

        relativisticMomentum: {
            classical: "p = mv (fails at high speeds)",
            relativistic: "p = γmv",
            properties: {
                lowSpeed: "Reduces to classical at v << c",
                highSpeed: "Momentum increases faster than velocity",
                atC: "Infinite momentum at v = c (impossible for massive particles)"
            },
            conservation: "Momentum still conserved in all frames"
        },

        massEnergyEquivalence: {
            einstein: "Most famous equation: E = mc²",
            restMass: {
                equation: "E₀ = mc²",
                meaning: "Mass contains enormous energy",
                example: "1 kg = 9 × 10¹⁶ J (enough to power city for weeks)"
            },
            totalEnergy: {
                equation: "E = γmc²",
                components: "E = KE + mc² = KE + rest energy",
                massless: "For photon (m=0): E = pc"
            },
            kineticEnergy: {
                equation: "KE = (γ - 1)mc²",
                lowSpeed: "KE ≈ ½mv² when v << c (classical)",
                highSpeed: "KE → ∞ as v → c"
            },
            energyMomentum: {
                relation: "E² = (pc)² + (mc²)²",
                massless: "E = pc (photons, neutrinos)"
            },
            applications: [
                "Nuclear energy (mass converted to energy)",
                "Particle physics (creating particles from energy)",
                "Stars (fusion converts mass to energy)",
                "Particle accelerators"
            ],
            verification: "Nuclear reactions, particle collisions confirm E = mc²"
        },

        spacetime: {
            definition: "Four-dimensional continuum unifying space and time",
            minkowski: "Hermann Minkowski formulated spacetime geometry",
            interval: {
                definition: "Invariant quantity in all frames",
                equation: "Δs² = c²Δt² - Δx² - Δy² - Δz²",
                types: {
                    timelike: "Δs² > 0; events can be causally connected",
                    spacelike: "Δs² < 0; events cannot be causally connected",
                    lightlike: "Δs² = 0; connected by light signal"
                }
            },
            lightCone: {
                definition: "Boundary of causally connected events",
                future: "Events that can be influenced by present",
                past: "Events that can influence present",
                elsewhere: "Events outside light cone (no causal connection)"
            },
            visualization: "Space and time intertwined; motion through space = motion through time"
        },

        generalRelativity: {
            motivation: {
                specialLimitation: "Only applies to inertial (non-accelerating) frames",
                gravity: "Gravity involves acceleration - need new theory",
                equivalence: "Starting point for general relativity"
            },
            equivalencePrinciple: {
                statement: "Acceleration is locally indistinguishable from gravity",
                examples: [
                    "Elevator accelerating up = standing on heavy planet",
                    "Freely falling = weightlessness = floating in space"
                ],
                implication: "Gravity is not a force but geometry of spacetime"
            },
            spacetimeCurvature: {
                key Idea: "Mass and energy curve spacetime; objects follow geodesics (straight lines in curved space)",
                wheeler: "Matter tells spacetime how to curve; spacetime tells matter how to move",
                geodesic: "Shortest path in curved spacetime (appears curved in 3D space)",
                noForce: "Objects in free fall experience no force (inertial motion)"
            },
            predictions: [
                {
                    prediction: "Gravitational time dilation",
                    description: "Clocks run slower in stronger gravity",
                    verification: "Pound-Rebka experiment; GPS satellites",
                    GPS: "Must correct for both special and general relativity"
                },
                {
                    prediction: "Gravitational redshift",
                    description: "Light loses energy escaping gravity",
                    verification: "Solar spectral lines; white dwarf spectra"
                },
                {
                    prediction: "Light bending",
                    description: "Light follows curved spacetime",
                    verification: "1919 solar eclipse (Eddington); gravitational lensing",
                    dramatic: "Made Einstein world-famous"
                },
                {
                    prediction: "Perihelion precession",
                    description: "Mercury's orbit precesses slightly",
                    verification: "Explained 43 arcsec/century anomaly",
                    first: "First success of general relativity"
                },
                {
                    prediction: "Gravitational waves",
                    description: "Ripples in spacetime from accelerating masses",
                    sources: "Binary black holes, neutron stars",
                    detection: "LIGO 2015 (first direct detection)",
                    Nobel: "2017 Nobel Prize for gravitational wave detection"
                },
                {
                    prediction: "Black holes",
                    description: "Extreme spacetime curvature; escape velocity > c",
                    eventHorizon: "Point of no return",
                    singularity: "Infinite curvature at center",
                    evidence: "X-ray binaries; galactic centers; gravitational waves; Event Horizon Telescope image (2019)"
                }
            ],
            cosmology: {
                application: "Describes universe evolution",
                bigBang: "Universe expanding from hot, dense state",
                expansion: "Space itself expanding",
                cosmologicalConstant: "Einstein's 'biggest blunder' (now tied to dark energy)"
            }
        },

        blackHoles: {
            definition: "Region where spacetime curvature prevents escape",
            formation: "Massive star collapse; very dense matter",
            schwarzschildRadius: {
                definition: "Radius of event horizon",
                equation: "r_s = 2GM/c²",
                sun: "r_s ≈ 3 km (if compressed to black hole)",
                earth: "r_s ≈ 9 mm"
            },
            eventHorizon: {
                definition: "Boundary at r_s; point of no return",
                properties: "Light cannot escape from inside",
                crossing: "Outside observer never sees object cross (infinite time dilation)",
                falling: "Falling observer crosses in finite proper time"
            },
            singularity: {
                definition: "Point at center where curvature infinite",
                classical: "All mass concentrated at point",
                quantum: "Classical description breaks down"
            },
            types: {
                stellar: "Few to ~100 solar masses",
                supermassive: "Millions to billions of solar masses; galactic centers",
                intermediate: "100 to 10⁵ solar masses",
                primordial: "Hypothetical tiny black holes from early universe"
            },
            properties: {
                noHair: "Characterized only by mass, charge, angular momentum",
                hawking: "Quantum effects cause black holes to evaporate (very slowly)"
            },
            observation: {
                direct: "2019 Event Horizon Telescope image of M87 black hole",
                indirect: "X-rays from accretion disks; gravitational waves from mergers",
                sagittarius: "Supermassive black hole at Milky Way center (Sgr A*)"
            }
        },

        applications: [
            "GPS navigation (time dilation corrections)",
            "Particle physics (high-energy collisions)",
            "Astrophysics (neutron stars, black holes)",
            "Cosmology (universe evolution)",
            "Gravitational wave astronomy",
            "Precision timekeeping",
            "Space travel planning"
        ],

        keyFormulas: {
            "Lorentz factor": "γ = 1/√(1 - v²/c²)",
            "Time dilation": "Δt = γΔt₀",
            "Length contraction": "L = L₀/γ",
            "Relativistic momentum": "p = γmv",
            "Rest energy": "E₀ = mc²",
            "Total energy": "E = γmc²",
            "Energy-momentum": "E² = (pc)² + (mc²)²",
            "Schwarzschild radius": "r_s = 2GM/c²"
        }
    };
}

handleNuclearPhysics(problem) {
    return {
        topic: "Nuclear Physics",
        category: 'nuclear',
        summary: "Nuclear physics studies atomic nuclei, radioactivity, and nuclear reactions. The strong nuclear force binds protons and neutrons. Nuclear reactions release enormous energy via E = mc². Applications include power generation, medicine, and particle physics research.",

        fundamentalConcepts: [
            {
                name: "Nuclear Structure",
                nucleus: "Dense core containing protons and neutrons",
                nucleon: "Collective term for proton or neutron",
                size: "~10⁻¹⁵ m (femtometer); 10,000× smaller than atom",
                density: "~10¹⁷ kg/m³ (incredibly dense)",
                notation: {
                    general: "ᴬ_Z X where A = mass number, Z = atomic number",
                    massNumber: "A = protons + neutrons",
                    atomicNumber: "Z = number of protons (defines element)",
                    neutronNumber: "N = A - Z"
                }
            },
            {
                name: "Isotopes",
                definition: "Same element (Z) with different neutron numbers (N)",
                properties: {
                    chemical: "Identical (determined by electrons/protons)",
                    physical: "Different (mass, stability, radioactivity)"
                },
                examples: {
                    hydrogen: "¹H (protium), ²H (deuterium), ³H (tritium)",
                    carbon: "¹²C (stable, 98.9%), ¹³C (stable, 1.1%), ¹⁴C (radioactive)",
                    uranium: "²³⁵U (0.7%, fissionable), ²³⁸U (99.3%)"
                },
                notation: "Name-mass: carbon-14, uranium-235"
            },
            {
                name: "Strong Nuclear Force",
                nature: "Attractive force binding nucleons",
                properties: [
                    "Strongest of four fundamental forces",
                    "Very short range (~10⁻¹⁵ m)",
                    "Charge-independent (binds p-p, p-n, n-n equally)",
                    "Overcomes electromagnetic repulsion of protons"
                ],
                necessity: "Without it, nuclei would fly apart (proton repulsion)",
                limitation: "Effective only for adjacent nucleons"
            },
            {
                name: "Nuclear Stability",
                factors: [
                    "Neutron-to-proton ratio",
                    "Even vs odd nucleon numbers",
                    "Magic numbers (2, 8, 20, 28, 50, 82, 126)",
                    "Binding energy per nucleon"
                ],
                stableRegion: {
                    light: "N ≈ Z (roughly equal protons and neutrons)",
                    heavy: "N > Z (need extra neutrons to offset proton repulsion)",
                    limit: "Z > 82 (lead): all radioactive"
                },
                evenOdd: {
                    mostStable: "Even Z, even N (most stable nuclei)",
                    leastStable: "Odd Z, odd N (very few stable)",
                    intermediate: "Even-odd or odd-even"
                }
            }
        ],

        bindingEnergy: {
            definition: "Energy required to disassemble nucleus into separate nucleons",
            massDefect: {
                definition: "Difference between nuclear mass and sum of nucleon masses",
                equation: "Δm = (Zm_p + Nm_n) - m_nucleus",
                always: "Nuclear mass always less than sum of parts"
            },
            einsteinRelation: {
                equation: "E_b = Δmc²",
                meaning: "Mass defect converted to binding energy",
                units: "MeV (million electron volts) commonly used"
            },
            bindingEnergyPerNucleon: {
                definition: "Average binding energy per nucleon: E_b/A",
                significance: "Measure of nuclear stability",
                peak: "Iron-56 has maximum (~8.8 MeV/nucleon) - most stable",
                implications: {
                    fusion: "Fusing light nuclei releases energy (moving toward Fe-56)",
                    fission: "Splitting heavy nuclei releases energy (moving toward Fe-56)"
                }
            },
            curve: {
                shape: "Increases rapidly for light, peaks at Fe-56, decreases slowly for heavy",
                hydrogen: "~1 MeV/nucleon",
                helium: "~7 MeV/nucleon",
                iron: "~8.8 MeV/nucleon (maximum)",
                uranium: "~7.6 MeV/nucleon"
            }
        },

        radioactivity: {
            definition: "Spontaneous emission of particles or energy from unstable nucleus",
            discovery: "Henri Becquerel (1896); Marie & Pierre Curie",
            nature: {
                spontaneous: "Occurs without external trigger",
                random: "Cannot predict when individual nucleus decays",
                statistical: "Can predict fraction decaying in given time",
                unchangeable: "Cannot be altered by chemical/physical means"
            },
            cause: "Unstable nucleus seeks more stable configuration",
            types: [
                {
                    type: "Alpha (α) Decay",
                    particle: "Helium nucleus: ₂⁴He or α",
                    composition: "2 protons + 2 neutrons",
                    effect: {
                        massNumber: "Decreases by 4",
                        atomicNumber: "Decreases by 2",
                        element: "Changes to element 2 back in periodic table"
                    },
                    equation: "ᴬ_Z X → ᴬ⁻⁴_Z-2 Y + ₂⁴He",
                    example: "²³⁸₉₂U → ²³⁴₉₀Th + ₂⁴He",
                    penetration: "Stopped by paper or skin",
                    energy: "~5 MeV typical",
                    occurrence: "Heavy nuclei (Z > 82)"
                },
                {
                    type: "Beta-minus (β⁻) Decay",
                    particle: "Electron: ₋₁⁰e or β⁻",
                    process: "Neutron → proton + electron + antineutrino",
                    equation: "₀¹n → ₁¹p + ₋₁⁰e + ν̄",
                    effect: {
                        massNumber: "Unchanged",
                        atomicNumber: "Increases by 1",
                        element: "Changes to next element in periodic table"
                    },
                    example: "¹⁴₆C → ¹⁴₇N + ₋₁⁰e + ν̄",
                    penetration: "Stopped by aluminum foil or few mm of plastic",
                    occurrence: "Neutron-rich nuclei (above stability line)"
                },
                {
                    type: "Beta-plus (β⁺) Decay / Positron Emission",
                    particle: "Positron: ₁⁰e or β⁺",
                    process: "Proton → neutron + positron + neutrino",
                    equation: "₁¹p → ₀¹n + ₁⁰e + ν",
                    effect: {
                        massNumber: "Unchanged",
                        atomicNumber: "Decreases by 1",
                        element: "Changes to previous element"
                    },
                    example: "¹¹₆C → ¹¹₅B + ₁⁰e + ν",
                    antimatter: "Positron is antiparticle of electron",
                    occurrence: "Proton-rich nuclei (below stability line)"
                },
                {
                    type: "Gamma (γ) Decay",
                    particle: "High-energy photon: γ",
                    process: "Excited nucleus releases energy",
                    effect: {
                        massNumber: "Unchanged",
                        atomicNumber: "Unchanged",
                        element: "Same element, lower energy state"
                    },
                    notation: "ᴬ_Z X* → ᴬ_Z X + γ (* indicates excited state)",
                    example: "⁶⁰₂₇Co* → ⁶⁰₂₇Co + γ",
                    penetration: "Very penetrating; thick lead or concrete needed",
                    accompaniment: "Often follows alpha or beta decay",
                    energy: "~1 MeV typical"
                },
                {
                    type: "Electron Capture",
                    process: "Nucleus captures inner orbital electron",
                    equation: "₁¹p + ₋₁⁰e → ₀¹n + ν",
                    effect: {
                        massNumber: "Unchanged",
                        atomicNumber: "Decreases by 1"
                    },
                    example: "⁴⁰₁₉K + ₋₁⁰e → ⁴⁰₁₈Ar + ν",
                    alternative: "Alternative to positron emission for proton-rich nuclei",
                    xRay: "Produces characteristic X-rays as outer electrons fill vacancy"
                }
            ],
            decaySeries: {
                definition: "Chain of successive decays to reach stability",
                example: "²³⁸U → ... → ²⁰⁶Pb (14 steps)",
                end: "Terminates at stable isotope (usually lead)"
            }
        },

        halfLife: {
            definition: "Time for half of radioactive sample to decay",
            symbol: "t₁/₂",
            properties: [
                "Characteristic of each isotope",
                "Independent of amount of sample",
                "Cannot be changed by external conditions",
                "Ranges from fractions of second to billions of years"
            ],
            examples: [
                { isotope: "Polonium-214", halfLife: "164 microseconds" },
                { isotope: "Iodine-131", halfLife: "8 days" },
                { isotope: "Cobalt-60", halfLife: "5.27 years" },
                { isotope: "Carbon-14", halfLife: "5,730 years" },
                { isotope: "Uranium-235", halfLife: "704 million years" },
                { isotope: "Uranium-238", halfLife: "4.5 billion years" }
            ],
            decayLaw: {
                equation: "N(t) = N₀(½)^(t/t₁/₂) = N₀e^(-λt)",
                variables: {
                    Nt: "Number of nuclei remaining at time t",
                    N0: "Initial number of nuclei",
                    t: "Time elapsed",
                    lambda: "Decay constant: λ = ln(2)/t₁/₂"
                }
            },
            activity: {
                definition: "Number of decays per second",
                equation: "A = λN = (ln(2)/t₁/₂)N",
                unit: "Becquerel (Bq) = 1 decay/s; Curie (Ci) = 3.7 × 10¹⁰ Bq",
                decrease: "Activity decreases with same half-life as nuclei"
            },
            calculations: {
                remaining: "After n half-lives: N = N₀/(2^n)",
                examples: [
                    "After 1 half-life: 50% remains",
                    "After 2 half-lives: 25% remains",
                    "After 3 half-lives: 12.5% remains",
                    "After 10 half-lives: ~0.1% remains (essentially gone)"
                ]
            },
            applications: {
                dating: "Radiocarbon dating (¹⁴C), uranium-lead dating",
                medicine: "Choosing isotopes with appropriate half-lives",
                safety: "Determining storage time for radioactive waste"
            }
        },

        nuclearReactions: {
            fission: {
                definition: "Splitting heavy nucleus into lighter fragments",
                discovery: "Otto Hahn, Fritz Strassmann, Lise Meitner (1938)",
                typical: "²³⁵U + ₀¹n → fission products + neutrons + energy",
                example: "²³⁵U + ₀¹n → ¹⁴¹Ba + ⁹²Kr + 3₀¹n + ~200 MeV",
                energyRelease: "~200 MeV per fission",
                neutrons: "2-3 neutrons released per fission",
                chainReaction: {
                    definition: "Neutrons from fission trigger more fissions",
                    critical: "Each fission causes exactly one more (sustained)",
                    subcritical: "Reaction dies out (k < 1)",
                    supercritical: "Reaction escalates (k > 1)",
                    criticalMass: "Minimum mass needed for sustained chain reaction"
                },
                fuelEnrichment: {
                    natural: "0.7% ²³⁵U, 99.3% ²³⁸U",
                    reactor: "3-5% ²³⁵U needed",
                    weapon: ">90% ²³⁵U needed"
                }
            },
            nuclearReactor: {
                purpose: "Controlled fission for power generation",
                components: {
                    fuel: "Enriched uranium or plutonium",
                    moderator: "Slows neutrons (water, graphite, heavy water)",
                    controlRods: "Absorb neutrons to control reaction rate (boron, cadmium)",
                    coolant: "Removes heat (water, liquid sodium)",
                    shielding: "Concrete/steel containment"
                },
                process: [
                    "Fission heats fuel rods",
                    "Coolant removes heat",
                    "Heat produces steam",
                    "Steam drives turbines",
                    "Turbines generate electricity"
                ],
                controlRods: "Insert to slow reaction, withdraw to increase",
                safety: "Multiple backup systems; cannot explode like bomb",
                waste: "Radioactive waste requires long-term storage"
            },
            fusion: {
                definition: "Combining light nuclei into heavier nucleus",
                energyRelease: "More energy per mass than fission",
                requirement: "Extremely high temperature and pressure (millions of Kelvin)",
                reason: "Overcome electromagnetic repulsion of protons",
                solarFusion: {
                    reaction: "Proton-proton chain in Sun",
                    net: "4¹H → ⁴He + 2e⁺ + 2ν + energy",
                    steps: "Multi-step process",
                    energy: "~26 MeV per helium produced",
                    sunPower: "Sun produces 3.8 × 10²⁶ W via fusion"
                },
                otherStars: {
                    CNOcycle: "Carbon-nitrogen-oxygen cycle (hotter stars)",
                    heliumBurning: "⁴He + ⁴He + ⁴He → ¹²C (red giants)",
                    heavyElements: "Elements up to iron formed in stars"
                },
                terrestrialFusion: {
                    reaction: "²H + ³H → ⁴He + n + 17.6 MeV (easiest to achieve)",
                    challenges: [
                        "Achieving required temperature (~100 million K)",
                        "Containing hot plasma",
                        "Sustaining reaction",
                        "Net energy gain"
                    ],
                    methods: {
                        magnetic: "Tokamak, stellarator (ITER project)",
                        inertial: "Laser compression (NIF)"
                    },
                    advantages: [
                        "Abundant fuel (deuterium from seawater)",
                        "No long-lived radioactive waste",
                        "No chain reaction/meltdown risk",
                        "No CO₂ emissions"
                    ],
                    status: "Research ongoing; not yet commercially viable"
                },
                hydrogenBomb: {
                    principle: "Uncontrolled fusion",
                    trigger: "Fission bomb provides temperature/pressure",
                    yield: "Much more powerful than fission bombs"
                }
            },
            stellarNucleosynthesis: {
                definition: "Formation of elements in stars",
                bigBang: "Only H, He, trace Li created",
                stars: "Fuse light elements into heavier (up to Fe)",
                supernovae: "Elements heavier than iron formed in stellar explosions",
                conclusion: "We are made of stardust"
            }
        },

        fundamentalForces: {
            four: ["Strong nuclear", "Electromagnetic", "Weak nuclear", "Gravitational"],
            strong: {
                role: "Binds quarks into protons/neutrons; binds nucleons",
                range: "~10⁻¹⁵ m",
                strength: "Strongest",
                carrier: "Gluons"
            },
            electromagnetic: {
                role: "Binds electrons to nuclei; chemical bonds",
                range: "Infinite (1/r²)",
                strength: "10⁻² relative to strong",
                carrier: "Photons"
            },
            weak: {
                role: "Beta decay; neutrino interactions",
                range: "~10⁻¹⁸ m",
                strength: "10⁻⁶ relative to strong",
                carrier: "W and Z bosons"
            },
            gravitational: {
                role: "Attracts all masses",
                range: "Infinite (1/r²)",
                strength: "10⁻³⁹ relative to strong (weakest)",
                carrier: "Graviton (hypothetical)"
            }
        },

        particlePhysics: {
            standardModel: {
                definition: "Theory of fundamental particles and forces",
                fermions: {
                    definition: "Matter particles",
                    quarks: [
                        "Up, down (protons, neutrons)",
                        "Charm, strange",
                        "Top, bottom"
                    ],
                    leptons: [
                        "Electron, muon, tau",
                        "Electron neutrino, muon neutrino, tau neutrino"
                    ]
                },
                bosons: {
                    definition: "Force carriers",
                    examples: "Photon, gluons, W/Z bosons, Higgs boson"},
higgs: {
discovery: "2012 at CERN Large Hadron Collider",
role: "Gives mass to other particles",
nobelPrize: "2013 Physics Nobel Prize"
}
},
quarks: {
composition: {
proton: "2 up quarks + 1 down quark (uud)",
neutron: "1 up quark + 2 down quarks (udd)"
},
properties: [
"Fractional charge (±⅔e or ±⅓e)",
"Never observed isolated (always in pairs or triplets)",
"Held together by strong force"
],
confinement: "Quarks cannot be separated (strong force increases with distance)"
},
antimatter: {
definition: "Particles with opposite charge",
examples: {
electron: "Positron (e⁺)",
proton: "Antiproton (p̄)",
neutron: "Antineutron (n̄)"
},
annihilation: "Matter + antimatter → energy (2γ photons)",
symmetry: "Equal amounts created in Big Bang",
asymmetry: "Mystery: Why is universe mostly matter?",
applications: [
"PET scans (positron emission tomography)",
"Particle physics research",
"Antimatter propulsion (theoretical)"
]
},
accelerators: {
purpose: "Accelerate particles to high energies for collisions",
energy: "Reveals subatomic structure and creates new particles",
types: {
linear: "SLAC (Stanford Linear Accelerator)",
circular: "LHC (Large Hadron Collider) at CERN"
},
LHC: {
location: "Geneva, Switzerland",
size: "27 km circumference",
energy: "Up to 14 TeV",
discoveries: "Higgs boson, many exotic particles"
},
applications: [
"Fundamental physics research",
"Medical isotope production",
"Cancer therapy (proton beam)",
"Materials research"
]
}
},
applications: [
            {
                area: "Energy Production",
                uses: [
                    "Nuclear power plants (~10% of world electricity)",
                    "Nuclear submarines and aircraft carriers",
                    "Space probes (radioisotope thermoelectric generators)",
                    "Future: Fusion energy (in development)"
                ]
            },
            {
                area: "Medicine",
                uses: [
                    "Cancer treatment (radiation therapy, proton therapy)",
                    "Medical imaging (PET scans, gamma cameras)",
                    "Radioactive tracers (diagnostic studies)",
                    "Sterilization of medical equipment",
                    "Radiopharmaceuticals"
                ],
                isotopes: ["Cobalt-60", "Iodine-131", "Technetium-99m", "Fluorine-18"]
            },
            {
                area: "Dating and Archaeology",
                uses: [
                    "Radiocarbon dating (organic materials, up to ~50,000 years)",
                    "Uranium-lead dating (rocks, billions of years)",
                    "Potassium-argon dating (volcanic rocks)",
                    "Dating Earth's age (4.5 billion years)"
                ]
            },
            {
                area: "Industrial",
                uses: [
                    "Smoke detectors (Americium-241)",
                    "Thickness gauges",
                    "Radiography (inspect welds, structures)",
                    "Food irradiation (preservation, pest control)",
                    "Polymer crosslinking",
                    "Gemstone coloration"
                ]
            },
            {
                area: "Research",
                uses: [
                    "Particle physics experiments",
                    "Nuclear structure studies",
                    "Astrophysics and cosmology",
                    "Neutron scattering (material structure)",
                    "Tracer studies in chemistry and biology"
                ]
            },
            {
                area: "Security",
                uses: [
                    "Airport baggage scanning",
                    "Cargo inspection",
                    "Nuclear weapons detection",
                    "Forensics"
                ]
            }
        ],

        radiationProtection: {
            types: {
                alpha: "High ionization, low penetration (stopped by paper/skin)",
                beta: "Medium ionization, medium penetration (stopped by plastic/aluminum)",
                gamma: "Low ionization per particle, high penetration (thick lead/concrete needed)",
                neutron: "Indirect ionization, very penetrating"
            },
            biologicalEffects: {
                ionization: "Damages molecules, especially DNA",
                acute: "High doses cause radiation sickness, death",
                chronic: "Low doses increase cancer risk",
                genetic: "Can affect future generations"
            },
            doseUnits: {
                absorbed: "Gray (Gy) = J/kg; rad = 0.01 Gy",
                equivalent: "Sievert (Sv) = biological effect; rem = 0.01 Sv",
                effective: "Accounts for tissue sensitivity"
            },
            exposure: {
                background: "~3 mSv/year (cosmic rays, radon, food, rocks)",
                medical: "X-rays, CT scans (varies)",
                occupational: "Limits for radiation workers (~50 mSv/year)",
                acute: ">1 Sv causes radiation sickness"
            },
            ALARA: {
                principle: "As Low As Reasonably Achievable",
                methods: [
                    "Time: Minimize exposure duration",
                    "Distance: Maximize distance from source (inverse square law)",
                    "Shielding: Use appropriate barriers"
                ]
            },
            detection: {
                devices: [
                    "Geiger counter (clicks)",
                    "Scintillation detector (light flashes)",
                    "Film badge (cumulative exposure)",
                    "Dosimeter (personal monitoring)"
                ]
            },
            wasteDisposal: {
                categories: {
                    lowLevel: "Medical, research waste; short half-lives",
                    intermediate: "Reactor components; shielding needed",
                    highLevel: "Spent fuel; long-term storage required"
                },
                strategies: [
                    "Decay storage (short half-lives)",
                    "Deep geological repositories (long half-lives)",
                    "Reprocessing (extract usable materials)",
                    "Transmutation (convert to shorter-lived isotopes - research)"
                ],
                challenge: "Some isotopes remain dangerous for thousands of years"
            }
        },

        keyFormulas: {
            "Binding energy": "E_b = Δmc²",
            "Decay law": "N(t) = N₀e^(-λt)",
            "Half-life": "t₁/₂ = ln(2)/λ",
            "Activity": "A = λN",
            "Remaining after n half-lives": "N = N₀/2^n",
            "Mass-energy": "E = mc²"
        }
    };
}

// CONTENT GENERATION METHODS

generatePhysicsContent(problem, content) {
    const contentSections = [];

    contentSections.push(this.generateOverviewSection(problem, content));

    if (content.fundamentalConcepts) {
        contentSections.push(this.generateFundamentalConceptsSection(content));
    }

    if (content.examples) {
        contentSections.push(this.generateExamplesSection(content));
    }

    if (content.comparisons || content.comparison) {
        contentSections.push(this.generateComparisonsSection(content));
    }

    return contentSections;
}

generateOverviewSection(problem, content) {
    return {
        sectionType: 'overview',
        title: content.topic || problem.originalTopic,
        category: content.category,
        description: content.summary || `Overview of ${content.topic}`,
        keyPoints: this.extractKeyPoints(content),
        relevance: this.getTopicRelevance(problem.type)
    };
}

generateFundamentalConceptsSection(content) {
    return {
        sectionType: 'fundamental_concepts',
        title: 'Fundamental Concepts',
        concepts: content.fundamentalConcepts
    };
}

generateExamplesSection(content) {
    return {
        sectionType: 'examples',
        title: 'Examples and Applications',
        examples: content.examples,
        applications: content.applications
    };
}

generateComparisonsSection(content) {
    const comparisons = content.comparisons || content.comparison;
    return {
        sectionType: 'comparisons',
        title: 'Comparisons and Contrasts',
        comparisons: comparisons
    };
}

// HELPER METHODS

extractKeyPoints(content) {
    const keyPoints = [];

    if (content.fundamentalConcepts) {
        content.fundamentalConcepts.forEach(concept => {
            if (concept.name) keyPoints.push(concept.name);
        });
    }

    if (content.keyPoints) {
        Object.values(content.keyPoints).forEach(point => {
            keyPoints.push(point);
        });
    }

    return keyPoints.slice(0, 5);
}

getTopicRelevance(topicType) {
    const relevance = {
        mechanics: "Foundation of classical physics and engineering",
        waves_sound: "Understanding wave phenomena and acoustics",
        thermodynamics: "Energy, heat, and efficiency in all processes",
        electromagnetism: "Basis for all electrical technology",
        optics: "Understanding light and vision",
        modern_physics: "Foundation of quantum mechanics and atomic theory",
        relativity: "Space, time, and gravity at fundamental level",
        nuclear_physics: "Nuclear energy, medicine, and particle physics"
    };

    return relevance[topicType] || "Important physics concept";
}

// DIAGRAM GENERATION

generatePhysicsDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantDiagrams(type),
        placeholder: true,
        note: "Diagram generation will be implemented with actual physics diagrams"
    };
}

getRelevantDiagrams(topicType) {
    const diagramMap = {
        mechanics: ["force_diagram", "energy_diagram", "motion_graph", "collision"],
        waves_sound: ["wave_properties", "interference", "standing_wave", "doppler"],
        thermodynamics: ["heating_curve", "PV_diagram", "heat_engine_cycle"],
        electromagnetism: ["circuit_diagram", "field_lines", "transformer", "motor"],
        optics: ["ray_diagram", "lens_diagram", "interference_pattern", "spectrum"],
        modern_physics: ["photoelectric_setup", "energy_levels", "wave_particle"],
        relativity: ["spacetime_diagram", "light_cone", "time_dilation"],
        nuclear_physics: ["decay_series", "binding_energy_curve", "fission_chain", "fusion"]
    };

    return diagramMap[topicType] || [];
}

// WORKBOOK GENERATION

generatePhysicsWorkbook() {
    if (!this.currentContent || !this.currentProblem) return;

    const workbook = this.createWorkbookStructure();

    workbook.sections = [
        this.createPhysicsProblemSection(),
        this.createContentOverviewSection(),
        this.createDetailedContentSection(),
        this.createComparisonsSection(),
        this.createExamplesApplicationsSection(),
        this.createMisconceptionsSection(),
        this.createPedagogicalNotesSection(),
        this.createDiagramReferencesSection()
    ].filter(section => section !== null);

    this.currentWorkbook = workbook;
}

createWorkbookStructure() {
    return {
        type: 'physics_workbook',
        version: '1.0',
        created: new Date().toISOString(),
        problem: this.currentProblem,
        sections: []
    };
}

createPhysicsProblemSection() {
    if (!this.currentProblem) return null;

    return {
        title: 'Topic Information',
        type: 'problem',
        data: [
            ['Topic Type', this.currentProblem.type],
            ['Main Topic', this.currentProblem.originalTopic],
            ['Sub-Topic', this.currentProblem.subTopic || 'General'],
            ['Category', this.physicsTopics[this.currentProblem.type]?.category || 'N/A']
        ]
    };
}

createContentOverviewSection() {
    if (!this.currentContent) return null;

    const overviewData = [
        ['Topic', this.currentContent.topic],
        ['Category', this.currentContent.category]
    ];

    if (this.currentContent.summary) {
        overviewData.push(['Summary', this.currentContent.summary]);
    }

    return {
        title: 'Content Overview',
        type: 'overview',
        data: overviewData
    };
}

createDetailedContentSection() {
    if (!this.currentContent) return null;

    const contentData = [];

    if (this.currentContent.fundamentalConcepts) {
        contentData.push(['FUNDAMENTAL CONCEPTS', '']);
        this.currentContent.fundamentalConcepts.forEach(concept => {
            contentData.push([concept.name || 'Concept', concept.definition || concept.description || '']);
        });
        contentData.push(['', '']);
    }

    const lesson = this.lessons[this.currentProblem.type];
    if (lesson && lesson.keyDefinitions) {
        contentData.push(['KEY DEFINITIONS', '']);
        Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
            contentData.push([term, definition]);
        });
        contentData.push(['', '']);
    }

    return contentData.length > 0 ? {
        title: 'Detailed Content',
        type: 'detailed_content',
        data: contentData
    } : null;
}

createComparisonsSection() {
    return this.generateComparisonsSection(this.currentContent);
}

createExamplesApplicationsSection() {
    return this.generateExamplesSection(this.currentContent);
}

createMisconceptionsSection() {
    if (!this.includeCommonMisconceptions) return null;

    const misconceptions = this.commonMisconceptions[this.currentProblem.type];
    if (!misconceptions) return null;

    const data = [['Common Misconception', 'Clarification']];

    Object.entries(misconceptions).forEach(([category, miscList]) => {
        data.push(['', '']);
        data.push([category.toUpperCase(), '']);
        miscList.forEach(misc => {
            data.push(['•', misc]);
        });
    });

    return {
        title: 'Common Misconceptions',
        type: 'misconceptions',
        data: data
    };
}

createPedagogicalNotesSection() {
    if (!this.includePedagogicalNotes) return null;

    const lesson = this.lessons[this.currentProblem.type];
    if (!lesson) return null;

    const data = [
        ['Lesson Title', lesson.title],
        ['', ''],
        ['KEY CONCEPTS', '']
    ];

    if (lesson.concepts) {
        lesson.concepts.forEach(concept => {
            data.push(['•', concept]);
        });
    }

    if (lesson.theory) {
        data.push(['', '']);
        data.push(['THEORY', lesson.theory]);
    }

    return {
        title: 'Teaching Notes',
        type: 'pedagogical',
        data: data
    };
}

createDiagramReferencesSection() {
    if (!this.diagramData || !this.includeVisualizations) return null;

    const data = [
        ['Topic', this.diagramData.type],
        ['', ''],
        ['RELEVANT DIAGRAMS', '']
    ];

    if (this.diagramData.diagrams) {
        this.diagramData.diagrams.forEach(diagram => {
            data.push(['•', diagram]);
        });
    }

    return {
        title: 'Diagram References',
        type: 'diagrams',
        data: data
    };
}

// UTILITY METHODS (matching chemistry workbook)

resetWorkbook() {
    this.currentProblem = null;
    this.currentContent = null;
    this.contentSteps = [];
    this.currentWorkbook = null;
    this.diagramData = null;
}

getWorkbookStatus() {
    return {
        hasProblem: !!this.currentProblem,
        hasContent: !!this.currentContent,
        hasWorkbook: !!this.currentWorkbook,
        hasDiagrams: !!this.diagramData,
        contentCompleteness: this.calculateContentCompleteness(),
        qualityMetrics: this.getContentQualityMetrics()
    };
}

calculateContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.examples) score += 1;
    if (this.currentContent.applications) score += 1;
    if (this.currentContent.fundamentalConcepts) score += 2;
    if (this.currentContent.keyPoints) score += 2;
    if (this.lessons[this.currentProblem?.type]) score += 2;

    return Math.round((score / maxScore) * 100);
}

getContentQualityMetrics() {
    return {
        completeness: this.calculateContentCompleteness(),
        hasExamples: !!this.currentContent?.examples,
        hasComparisons: !!(this.currentContent?.comparisons || this.currentContent?.comparison),
        hasApplications: !!this.currentContent?.applications,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions
    };
}

getAvailableTopics() {
    return Object.entries(this.physicsTopics).map(([key, topic]) => ({
        id: key,
        name: topic.name,
        category: topic.category,
        description: topic.description
    }));
}

getTopicDetails(topicId) {
    const topic = this.physicsTopics[topicId];
    if (!topic) return null;

    return {
        id: topicId,
        name: topic.name,
        category: topic.category,
        description: topic.description,
        lesson: this.lessons[topicId],
        prerequisites: this.identifyPrerequisites(topicId),
        learningObjectives: this.generateLearningObjectives(topicId),
        relatedTopics: this.suggestRelatedTopics(topicId)
    };
}

// ASSESSMENT AND LEARNING SUPPORT METHODS (matching chemistry workbook structure)

assessContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const simpleTopics = ['mechanics', 'waves_sound'];
    if (simpleTopics.includes(this.currentProblem.type)) {
        difficultyScore += 1;
    }

    const intermediateTopics = ['thermodynamics', 'electromagnetism', 'optics'];
    if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    }

    const complexTopics = ['modern_physics', 'relativity', 'nuclear_physics'];
    if (complexTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'detailed') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    if (difficultyScore <= 2) return 'beginner';
    if (difficultyScore <= 4) return 'intermediate';
    return 'advanced';
}

generateLearningObjectives(topicId) {
    const objectivesDatabase = {
        mechanics: [
            "Describe motion using position, velocity, and acceleration",
            "Apply Newton's three laws to analyze forces and motion",
            "Calculate work, energy, and power in physical systems",
            "Apply conservation of energy and momentum to solve problems",
            "Analyze circular motion and rotational dynamics"
        ],
        waves_sound: [
            "Describe wave properties: wavelength, frequency, amplitude, speed",
            "Distinguish between transverse and longitudinal waves",
            "Explain wave phenomena: reflection, refraction, diffraction, interference",
            "Describe properties of sound waves and human hearing",
            "Explain Doppler effect and standing waves"
        ],
        thermodynamics: [
            "Distinguish between temperature and heat",
            "Describe heat transfer mechanisms: conduction, convection, radiation",
            "Apply gas laws to solve problems",
            "State and apply laws of thermodynamics",
            "Calculate efficiency of heat engines"
        ],
        electromagnetism: [
            "Describe electric forces, fields, and potential",
            "Analyze simple circuits using Ohm's law",
            "Compare series and parallel circuits",
            "Describe magnetic fields and forces",
            "Explain electromagnetic induction and its applications"
        ],
        optics: [
            "Apply law of reflection and Snell's law",
            "Distinguish between real and virtual images",
            "Analyze mirrors and lenses using ray diagrams and equations",
            "Explain wave optics: interference, diffraction, polarization",
            "Describe applications in optical instruments"
        ],
        modern_physics: [
            "Explain photoelectric effect and photon model of light",
            "Describe wave-particle duality of light and matter",
            "Apply de Broglie wavelength to matter waves",
            "Explain atomic spectra and energy levels",
            "State Heisenberg uncertainty principle"
        ],
        relativity: [
            "State postulates of special relativity",
            "Calculate time dilation and length contraction",
            "Apply mass-energy equivalence E = mc²",
            "Describe spacetime and relativity of simultaneity",
            "Explain gravity as spacetime curvature (general relativity)"
        ],
        nuclear_physics: [
            "Describe nuclear structure and notation",
            "Identify types of radioactive decay",
            "Calculate amounts using half-life",
            "Distinguish between fission and fusion",
            "Describe applications of nuclear physics"
        ]
    };

    return objectivesDatabase[topicId] || [
        "Understand the key concepts of this topic",
        "Apply knowledge to solve problems",
        "Make connections to other physics topics"
    ];
}

identifyPrerequisites(topicId) {
    const prerequisitesDatabase = {
        mechanics: [
            "Basic algebra",
            "Understanding of vectors",
            "Graphing and interpreting graphs"
        ],
        waves_sound: [
            "Understanding of periodic motion",
            "Basic trigonometry",
            "Knowledge of wave properties"
        ],
        thermodynamics: [
            "Understanding of energy",
            "Gas laws and kinetic theory",
            "Basic algebra"
        ],
        electromagnetism: [
            "Understanding of forces and fields",
            "Basic circuit concepts",
            "Vector mathematics"
        ],
        optics: [
            "Understanding of light as wave",
            "Basic geometry",
            "Trigonometry"
        ],
        modern_physics: [
            "Classical mechanics basics",
            "Wave properties",
            "Atomic structure basics"
        ],
        relativity: [
            "Classical mechanics",
            "Understanding of reference frames",
            "Algebra and basic calculus concepts"
        ],
        nuclear_physics: [
            "Atomic structure",
            "Understanding of energy",
            "Exponential functions"
        ]
    };

    return prerequisitesDatabase[topicId] || ["General physics background"];
}

generateStudyTips(topicId) {
    const studyTipsDatabase = {
        mechanics: [
            "Draw free-body diagrams for every force problem",
            "Practice identifying action-reaction pairs",
            "Always check units in calculations",
            "Use energy methods when forces aren't constant",
            "Visualize motion with position-time and velocity-time graphs"
        ],
        waves_sound: [
            "Sketch wave diagrams to visualize wavelength and amplitude",
            "Remember: v = fλ relates all wave properties",
            "Practice identifying constructive vs destructive interference",
            "Understand that waves transfer energy, not matter",
            "Connect wave concepts to everyday experiences (musical instruments, echoes)"
        ],
        thermodynamics: [
            "Always use Kelvin for gas law calculations",
            "Distinguish between temperature (intensity) and heat (quantity)",
            "Draw PV diagrams for thermodynamic processes",
            "Remember: heat flows from hot to cold spontaneously",
            "Practice the four gas law processes systematically"
        ],
        electromagnetism: [
            "Draw circuit diagrams clearly and label all components",
            "Remember: current same in series, voltage same in parallel",
            "Practice right-hand rules for magnetic forces and fields",
            "Distinguish between voltage (potential difference) and current (flow)",
            "Connect abstract concepts to everyday devices"
        ],
        optics: [
            "Always draw ray diagrams for mirror/lens problems",
            "Check sign conventions carefully (positive vs negative)",
            "Remember: n₁ sin θ₁ = n₂ sin θ₂ for all refraction",
            "Practice distinguishing real vs virtual images",
            "Understand that light bends toward normal when slowing down"
        ],
        modern_physics: [
            "Focus on conceptual understanding before equations",
            "Recognize when classical physics fails",
            "Practice E = hf and λ = h/p calculations",
            "Understand that uncertainty principle is fundamental, not measurement error",
            "Connect quantum concepts to experimental evidence"
        ],
        relativity: [
            "Remember: nothing with mass can reach speed of light",
            "Practice γ factor calculations for various speeds",
            "Understand that time dilation and length contraction are real, not illusions",
            "Always specify reference frame clearly",
            "E = mc² applies to ALL energy, not just nuclear"
        ],
        nuclear_physics: [
            "Balance both mass number and atomic number in equations",
            "Practice half-life calculations systematically",
            "Distinguish between fission (splitting) and fusion (combining)",
            "Remember: radioactive decay is random but statistically predictable",
            "Understand binding energy curve to predict energy release"
        ]
    };

    return studyTipsDatabase[topicId] || [
        "Review material regularly",
        "Practice problems actively",
        "Relate concepts to real-world examples",
        "Create visual aids and diagrams"
    ];
}

generateAssessmentQuestions(topicId) {
    const questionsDatabase = {
        mechanics: [
            {
                question: "A 5 kg object accelerates at 2 m/s². What net force acts on it?",
                type: "calculation",
                difficulty: "easy"
            },
            {
                question: "Explain why astronauts feel weightless in orbit even though gravity still acts on them.",
                type: "conceptual",
                difficulty: "medium"
            },
            {
                question: "Compare and contrast mass and weight.",
                type: "comparison",
                difficulty: "easy"
            }
        ],
        waves_sound: [
            {
                question: "If a wave has frequency 500 Hz and wavelength 0.7 m, what is its speed?",
                type: "calculation",
                difficulty: "easy"
            },
            {
                question: "Why can you hear sound around corners but not see light around corners?",
                type: "explanation",
                difficulty: "medium"
            },
            {
                question: "Explain why ambulance sirens change pitch as they pass you.",
                type: "analysis",
                difficulty: "medium"
            }
        ],
        electromagnetism: [
            {
                question: "Three 6Ω resistors are connected in parallel. What is the total resistance?",
                type: "calculation",
                difficulty: "easy"
            },
            {
                question: "Explain how a transformer can change voltage without violating energy conservation.",
                type: "explanation",
                difficulty: "hard"
            },
            {
                question: "Why does increasing current through a wire increase its magnetic field?",
                type: "reasoning",
                difficulty: "medium"
            }
        ]
    };

    return questionsDatabase[topicId] || [
        {
            question: "What are the main concepts of this topic?",
            type: "recall",
            difficulty: "easy"
        }
    ];
}

suggestRelatedTopics(topicId) {
    const relatedTopicsMap = {
        mechanics: ['waves_sound', 'thermodynamics', 'electromagnetism'],
        waves_sound: ['mechanics', 'optics', 'modern_physics'],
        thermodynamics: ['mechanics', 'kinetic_theory', 'statistical_mechanics'],
        electromagnetism: ['optics', 'modern_physics', 'relativity'],
        optics: ['waves_sound', 'electromagnetism', 'modern_physics'],
        modern_physics: ['optics', 'atomic_physics', 'relativity', 'nuclear_physics'],
        relativity: ['modern_physics', 'electromagnetism', 'cosmology'],
        nuclear_physics: ['modern_physics', 'particle_physics', 'relativity']
    };

    const relatedTypes = relatedTopicsMap[topicId] || [];
    
    return relatedTypes.map(type => ({
        type: type,
        name: this.physicsTopics[type]?.name,
        description: this.physicsTopics[type]?.description
    })).filter(item => item.name);
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};
    const lesson = this.lessons[this.currentProblem?.type];

    if (lesson && lesson.keyDefinitions) {
        Object.entries(lesson.keyDefinitions).forEach(([term, definition]) => {
            glossary[term] = definition;
        });
    }

    return glossary;
}

generateProcessTimeline(processName) {
    const timelines = {
        'Nuclear Fission': [
            { step: 1, action: 'Neutron absorbed by U-235 nucleus', duration: 'Instantaneous' },
            { step: 2, action: 'Nucleus becomes unstable', duration: '~10⁻¹⁴ s' },
            { step: 3, action: 'Nucleus splits into fragments', duration: '~10⁻²⁰ s' },
            { step: 4, action: 'Neutrons and energy released', duration: 'Immediate' },
            { step: 5, action: 'Chain reaction propagates', duration: 'Continues' }
        ],
        'Photoelectric Effect': [
            { step: 1, action: 'Photon strikes metal surface', duration: 'Instantaneous' },
            { step: 2, action: 'Photon absorbed by electron', duration: '~10⁻¹⁶ s'},
{ step: 3, action: 'Electron gains energy E = hf', duration: 'Instantaneous' },
{ step: 4, action: 'Electron overcomes work function', duration: '~10⁻¹⁵ s' },
{ step: 5, action: 'Electron emitted from surface', duration: 'Immediate' }
],
'Wave Interference': [
{ step: 1, action: 'Two waves approach same point', duration: 'Continuous' },
{ step: 2, action: 'Waves overlap (superposition)', duration: 'While overlapping' },
{ step: 3, action: 'Displacements add algebraically', duration: 'Instantaneous' },
{ step: 4, action: 'Resultant wave formed', duration: 'During overlap' },
{ step: 5, action: 'Waves continue unchanged', duration: 'After passing' }
]
};
return timelines[processName] || [];
}

generateContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.fundamentalConcepts) {
        hierarchy.children.push({
            name: 'Fundamental Concepts',
            type: 'section',
            count: this.currentContent.fundamentalConcepts.length
        });
    }

    if (this.currentContent.applications) {
        hierarchy.children.push({
            name: 'Applications',
            type: 'section',
            count: this.currentContent.applications.length
        });
    }

    const lesson = this.lessons[this.currentProblem?.type];
    if (lesson) {
        if (lesson.keyDefinitions) {
            hierarchy.children.push({
                name: 'Key Definitions',
                type: 'section',
                count: Object.keys(lesson.keyDefinitions).length
            });
        }
    }

    return hierarchy;
}

// FORMATTING AND EXPORT

formatContentForExport(format = 'json') {
    if (!this.currentContent) return null;

    switch (format) {
        case 'json':
            return JSON.stringify(this.currentContent, null, 2);
        
        case 'markdown':
            return this.convertToMarkdown(this.currentContent);
        
        case 'html':
            return this.convertToHTML(this.currentContent);
        
        default:
            return this.currentContent;
    }
}

convertToMarkdown(content) {
    let markdown = `# ${content.topic}\n\n`;

    if (content.summary) {
        markdown += `${content.summary}\n\n`;
    }

    if (content.fundamentalConcepts) {
        markdown += `## Fundamental Concepts\n\n`;
        content.fundamentalConcepts.forEach(concept => {
            markdown += `### ${concept.name}\n`;
            if (concept.definition) markdown += `${concept.definition}\n\n`;
        });
    }

    if (content.keyFormulas) {
        markdown += `## Key Formulas\n\n`;
        Object.entries(content.keyFormulas).forEach(([name, formula]) => {
            markdown += `- **${name}**: ${formula}\n`;
        });
        markdown += '\n';
    }

    return markdown;
}

convertToHTML(content) {
    let html = `<div class="physics-content">\n`;
    html += `  <h1>${content.topic}</h1>\n`;

    if (content.summary) {
        html += `  <p class="summary">${content.summary}</p>\n`;
    }

    if (content.fundamentalConcepts) {
        html += `  <h2>Fundamental Concepts</h2>\n`;
        html += `  <div class="concepts">\n`;
        content.fundamentalConcepts.forEach(concept => {
            html += `    <div class="concept">\n`;
            html += `      <h3>${concept.name}</h3>\n`;
            if (concept.definition) {
                html += `      <p>${concept.definition}</p>\n`;
            }
            html += `    </div>\n`;
        });
        html += `  </div>\n`;
    }

    html += `</div>`;
    return html;
}

// SEARCH AND FILTER

searchContent(query) {
    if (!this.currentContent) return null;

    const results = {
        query: query,
        matches: []
    };

    const searchableContent = JSON.stringify(this.currentContent).toLowerCase();
    const queryLower = query.toLowerCase();

    if (searchableContent.includes(queryLower)) {
        results.matches.push({
            type: 'content',
            content: this.currentContent.topic
        });
    }

    return results;
}

filterContentByCategory(category) {
    if (!this.currentContent) return null;

    const filtered = {
        category: category,
        items: []
    };

    if (this.currentContent.category === category) {
        filtered.items.push(this.currentContent);
    }

    return filtered;
}

generateContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        hasExamples: !!this.currentContent.examples,
        hasApplications: !!this.currentContent.applications,
        keyPoints: this.extractKeyPoints(this.currentContent),
        hasFormulas: !!this.currentContent.keyFormulas
    };

    return summary;
}

// VALIDATION

validatePhysicsContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.category) {
        validationResults.warnings.push("Missing category classification");
    }

    if (!content.summary && !content.fundamentalConcepts) {
        validationResults.suggestions.push("Consider adding summary or fundamental concepts");
    }

    if (!content.keyFormulas && ['mechanics', 'electromagnetism', 'thermodynamics'].includes(this.currentProblem?.type)) {
        validationResults.suggestions.push("Consider adding key formulas for this topic");
    }

    return validationResults;
}

// ADDITIONAL UTILITY METHODS

getPhysicsConstants() {
    return {
        "Speed of light": "c = 3.00 × 10⁸ m/s",
        "Gravitational constant": "G = 6.67 × 10⁻¹¹ N·m²/kg²",
        "Planck's constant": "h = 6.626 × 10⁻³⁴ J·s",
        "Elementary charge": "e = 1.60 × 10⁻¹⁹ C",
        "Electron mass": "mₑ = 9.11 × 10⁻³¹ kg",
        "Proton mass": "mₚ = 1.673 × 10⁻²⁷ kg",
        "Neutron mass": "mₙ = 1.675 × 10⁻²⁷ kg",
        "Avogadro's number": "Nₐ = 6.022 × 10²³ mol⁻¹",
        "Boltzmann constant": "k = 1.38 × 10⁻²³ J/K",
        "Coulomb constant": "k = 8.99 × 10⁹ N·m²/C²",
        "Permittivity of free space": "ε₀ = 8.85 × 10⁻¹² F/m",
        "Permeability of free space": "μ₀ = 4π × 10⁻⁷ T·m/A",
        "Universal gas constant": "R = 8.314 J/(mol·K)"
    };
}

getUnitConversions() {
    return {
        energy: {
            "1 eV": "1.60 × 10⁻¹⁹ J",
            "1 cal": "4.184 J",
            "1 kWh": "3.6 × 10⁶ J"
        },
        length: {
            "1 nm": "10⁻⁹ m",
            "1 Å": "10⁻¹⁰ m",
            "1 fm": "10⁻¹⁵ m"
        },
        mass: {
            "1 u": "1.66 × 10⁻²⁷ kg",
            "1 kg": "equivalent to 9.0 × 10¹⁶ J (E = mc²)"
        },
        pressure: {
            "1 atm": "101,325 Pa",
            "1 bar": "10⁵ Pa",
            "1 Torr": "133.3 Pa"
        }
    };
}

compareTopics(topicId1, topicId2) {
    const topic1 = this.physicsTopics[topicId1];
    const topic2 = this.physicsTopics[topicId2];

    if (!topic1 || !topic2) return null;

    return {
        topic1: {
            name: topic1.name,
            category: topic1.category,
            description: topic1.description
        },
        topic2: {
            name: topic2.name,
            category: topic2.category,
            description: topic2.description
        },
        similarities: this.findTopicSimilarities(topicId1, topicId2),
        differences: this.findTopicDifferences(topicId1, topicId2),
        connections: this.findTopicConnections(topicId1, topicId2)
    };
}

findTopicSimilarities(topicId1, topicId2) {
    const similarities = [];

    if (this.physicsTopics[topicId1]?.category === this.physicsTopics[topicId2]?.category) {
        similarities.push("Both belong to the same physics category");
    }

    const relatedMap = {
        'mechanics-waves_sound': 'Both involve motion and energy transfer',
        'electromagnetism-optics': 'Light is an electromagnetic wave',
        'modern_physics-relativity': 'Both emerged in early 1900s, revolutionized physics',
        'modern_physics-nuclear_physics': 'Both deal with atomic and subatomic scales',
        'thermodynamics-mechanics': 'Both involve energy concepts'
    };

    const key1 = `${topicId1}-${topicId2}`;
    const key2 = `${topicId2}-${topicId1}`;

    if (relatedMap[key1]) similarities.push(relatedMap[key1]);
    if (relatedMap[key2]) similarities.push(relatedMap[key2]);

    return similarities;
}

findTopicDifferences(topicId1, topicId2) {
    const differences = [];

    const scaleMap = {
        mechanics: 'macroscopic',
        thermodynamics: 'macroscopic',
        electromagnetism: 'various scales',
        waves_sound: 'macroscopic',
        optics: 'macroscopic',
        modern_physics: 'atomic/subatomic',
        relativity: 'cosmic/subatomic',
        nuclear_physics: 'nuclear/subatomic'
    };

    if (scaleMap[topicId1] !== scaleMap[topicId2]) {
        differences.push(`${this.physicsTopics[topicId1].name} deals with ${scaleMap[topicId1]} scale, while ${this.physicsTopics[topicId2].name} deals with ${scaleMap[topicId2]} scale`);
    }

    return differences;
}

findTopicConnections(topicId1, topicId2) {
    const connections = [];

    const connectionMap = {
        'mechanics-thermodynamics': 'Energy is central to both',
        'mechanics-waves_sound': 'Waves transfer mechanical energy',
        'electromagnetism-optics': 'Light is electromagnetic radiation',
        'modern_physics-atomic_structure': 'Quantum mechanics explains atomic structure',
        'relativity-nuclear_physics': 'E = mc² explains nuclear energy',
        'thermodynamics-statistical_mechanics': 'Statistical approach to thermodynamics'
    };

    const key1 = `${topicId1}-${topicId2}`;
    const key2 = `${topicId2}-${topicId1}`;

    if (connectionMap[key1]) connections.push(connectionMap[key1]);
    if (connectionMap[key2]) connections.push(connectionMap[key2]);

    return connections;
}

generateProblemSet(topicId, difficulty = 'mixed', count = 5) {
    const problems = this.generateAssessmentQuestions(topicId);
    
    let filteredProblems = problems;
    if (difficulty !== 'mixed') {
        filteredProblems = problems.filter(p => p.difficulty === difficulty);
    }

    return filteredProblems.slice(0, count);
}

getHistoricalContext(topicId) {
    const historicalContexts = {
        mechanics: {
            keyFigures: ["Galileo Galilei", "Isaac Newton"],
            timeline: "1600s-1700s",
            breakthroughs: "Newton's Principia (1687) established laws of motion and gravitation"
        },
        waves_sound: {
            keyFigures: ["Christiaan Huygens", "Thomas Young"],
            timeline: "1600s-1800s",
            breakthroughs: "Huygens' wave theory (1678), Young's double-slit experiment (1801)"
        },
        thermodynamics: {
            keyFigures: ["Carnot", "Clausius", "Kelvin", "Boltzmann"],
            timeline: "1800s",
            breakthroughs: "Laws of thermodynamics established, kinetic theory developed"
        },
        electromagnetism: {
            keyFigures: ["Faraday", "Maxwell", "Ampère", "Oersted"],
            timeline: "1800s",
            breakthroughs: "Maxwell's equations (1865) unified electricity and magnetism"
        },
        optics: {
            keyFigures: ["Newton", "Huygens", "Young", "Maxwell"],
            timeline: "1600s-1800s",
            breakthroughs: "Wave-particle debate resolved by recognizing both aspects"
        },
        modern_physics: {
            keyFigures: ["Planck", "Einstein", "Bohr", "Heisenberg", "Schrödinger"],
            timeline: "1900s-1920s",
            breakthroughs: "Quantum revolution: Planck's quantization (1900), Einstein's photon (1905), Schrödinger equation (1926)"
        },
        relativity: {
            keyFigures: ["Albert Einstein"],
            timeline: "1905 (special), 1915 (general)",
            breakthroughs: "Special relativity (1905) redefined space and time; General relativity (1915) revolutionized gravity"
        },
        nuclear_physics: {
            keyFigures: ["Becquerel", "Curie", "Rutherford", "Fermi"],
            timeline: "1890s-1940s",
            breakthroughs: "Discovery of radioactivity (1896), nuclear fission (1938), first reactor (1942)"
        }
    };

    return historicalContexts[topicId] || null;
}
}
// Export the class
export default EnhancedPhysicsWorkbook;
