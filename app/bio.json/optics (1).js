Looking at your request, you want me to create an optics workbook class modeled after the EnhancedMechanicsWorkbook, with full topic handlers and 5 related experiments. Here's the complete implementation:
// Enhanced Optics Workbook - Comprehensive Classical Optics System
import { createCanvas, loadImage } from '@napi-rs/canvas';
import { PhysicsSvgDiagrams } from '../svg-data.js';
import { PhysicsDiagramsRegistry } from '../registry.js';
import { PhysicsDiagramsRenderer } from '../renderer.js';
import * as math from 'mathjs';

export class EnhancedOpticsWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "optics";
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
        this.diagramRenderer = new PhysicsDiagramsRenderer();
        this.includeDiagramsInWorkbook = options.includeDiagrams !== false;
        this.diagramWidth = options.diagramWidth || 800;
        this.diagramHeight = options.diagramHeight || 600;
        this.renderedDiagrams = new Map();
        this.diagramsPromise = null;
        this.currentExperiment = null;

        this.explanationLevel = options.explanationLevel || 'intermediate';
        this.includeVisualizations = options.includeVisualizations !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeExamples = options.includeExamples !== false;
        this.includeComparisons = options.includeComparisons !== false;
        this.includeCommonMisconceptions = options.includeCommonMisconceptions !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.includeExperiments = options.includeExperiments !== false;
        this.detailLevel = options.detailLevel || 'detailed';

        this.adaptiveDifficulty = options.adaptiveDifficulty !== false;
        this.metacognitiveSupport = options.metacognitiveSupport !== false;
        this.contextualLearning = options.contextualLearning !== false;
        this.assessmentFeedback = options.assessmentFeedback !== false;

        this.learnerProfile = {
            currentLevel: 'intermediate',
            masteredTopics: [],
            strugglingTopics: [],
            preferredLearningStyle: 'visual',
            progressHistory: []
        };

        this.opticsSymbols = this.initializeOpticsSymbols();
        this.setThemeColors();
        this.initializeOpticsTopics();
        this.initializeOpticsLessons();
        this.initializeOpticsExperiments();
        this.initializeMisconceptionDatabase();
        this.initializeMetacognitivePrompts();
        this.initializeContextualScenarios();
        this.initializeAssessmentRubrics();
    }

    setThemeColors() {
        const themes = {
            optics: {
                background: '#ffffff',
                gridColor: '#b0b0b0',
                headerBg: '#00695c',
                headerText: '#ffffff',
                sectionBg: '#b2dfdb',
                sectionText: '#004d40',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e0f2f1',
                resultText: '#00695c',
                definitionBg: '#fff8e1',
                definitionText: '#f57f17',
                stepBg: '#e8f5e9',
                stepText: '#1b5e20',
                borderColor: '#26a69a',
                contentBg: '#f1f8e9',
                contentText: '#33691e',
                diagramBg: '#e8eaf6',
                structureBg: '#fce4ec',
                experimentBg: '#fff9c4',
                experimentText: '#f57f17',
                reflectionBg: '#e3f2fd',
                refractionBg: '#f3e5f5',
                lensesBg: '#e8f5e9',
                waveBg: '#fff3e0',
                dispersionBg: '#fce4ec',
                spectrumBg: '#e0f7fa'
            }
        };
        this.colors = themes[this.theme] || themes.optics;
    }

    initializeOpticsSymbols() {
        return {
            // Greek letters
            'theta': 'θ',
            'lambda': 'λ',
            'phi': 'φ',
            'delta': 'Δ',
            'alpha': 'α',
            'beta': 'β',
            'mu': 'μ',
            'pi': 'π',
            'omega': 'ω',
            'epsilon': 'ε',
            'eta': 'η',
            'sigma': 'σ',

            // Arrows
            'arrow': '→',
            'doubleArrow': '↔',

            // Math symbols
            'approximately': '≈',
            'proportional': '∝',
            'infinity': '∞',
            'degree': '°',
            'sqrt': '√',
            'squared': '²',
            'cubed': '³',
            'plusminus': '±',

            // Optics-specific quantities
            'angleOfIncidence': 'θᵢ',
            'angleOfRefraction': 'θᵣ',
            'angleOfReflection': 'θᵣ',
            'criticalAngle': 'θ_c',
            'refractiveIndex': 'n',
            'wavelength': 'λ',
            'frequency': 'f',
            'speed': 'v',
            'speedOfLight': 'c',
            'focalLength': 'f',
            'objectDistance': 'u',
            'imageDistance': 'v',
            'magnification': 'm',
            'power': 'P',
            'dioptre': 'D',
            'slitSpacing': 'd',
            'fringe': 'w',
            'pathDifference': 'Δ',

            // Units
            'metre': 'm',
            'nanometre': 'nm',
            'hertz': 'Hz',
            'dioptre': 'D',
            'watt': 'W'
        };
    }

    initializeOpticsTopics() {
        this.opticsTopics = {
            reflection: {
                patterns: [
                    /reflection|reflected/i,
                    /law.*of.*reflection|angle.*incidence/i,
                    /plane.*mirror|curved.*mirror/i,
                    /concave|convex.*mirror|parabolic/i
                ],
                handler: this.handleReflection.bind(this),
                name: 'Reflection of Light',
                category: 'optics',
                description: 'Laws of reflection, plane and curved mirrors, image formation',
                difficulty: 'intermediate',
                prerequisites: ['waves', 'geometry', 'algebra']
            },

            refraction: {
                patterns: [
                    /refraction|refracted/i,
                    /snell.*law|refractive.*index/i,
                    /total.*internal.*reflection|critical.*angle/i,
                    /optical.*fibre|prism/i
                ],
                handler: this.handleRefraction.bind(this),
                name: 'Refraction of Light',
                category: 'optics',
                description: "Snell's law, refractive index, total internal reflection, optical fibres",
                difficulty: 'intermediate',
                prerequisites: ['reflection', 'trigonometry', 'waves']
            },

            lenses: {
                patterns: [
                    /lens|lenses|converging|diverging/i,
                    /thin.*lens|lens.*equation|lens.*formula/i,
                    /focal.*length|optical.*power/i,
                    /real.*image|virtual.*image|magnification/i
                ],
                handler: this.handleLenses.bind(this),
                name: 'Lenses and Image Formation',
                category: 'optics',
                description: 'Converging and diverging lenses, thin lens equation, magnification, optical instruments',
                difficulty: 'intermediate',
                prerequisites: ['refraction', 'geometry', 'algebra']
            },

            wave_optics: {
                patterns: [
                    /wave.*optics|interference|diffraction/i,
                    /young.*double.*slit|double.*slit/i,
                    /coherent|path.*difference|fringe/i,
                    /single.*slit|diffraction.*grating/i
                ],
                handler: this.handleWaveOptics.bind(this),
                name: 'Wave Optics: Interference and Diffraction',
                category: 'optics',
                description: "Young's double-slit experiment, interference, diffraction, gratings",
                difficulty: 'advanced',
                prerequisites: ['waves', 'refraction', 'trigonometry']
            },

            dispersion_spectra: {
                patterns: [
                    /dispersion|spectrum|spectra/i,
                    /rainbow|prism.*colour|wavelength.*colour/i,
                    /electromagnetic.*spectrum|visible.*light/i,
                    /photoelectric|photon|quantum.*optics/i
                ],
                handler: this.handleDispersionSpectra.bind(this),
                name: 'Dispersion, Spectra and the Electromagnetic Spectrum',
                category: 'optics',
                description: 'Dispersion by prisms, colour, electromagnetic spectrum, emission and absorption spectra',
                difficulty: 'intermediate',
                prerequisites: ['refraction', 'waves', 'wave_optics']
            }
        };
    }

    initializeOpticsLessons() {
        this.lessons = {
            reflection: {
                title: "Reflection of Light: Laws, Mirrors, and Image Formation",
                concepts: [
                    "The angle of incidence equals the angle of reflection (measured from the normal)",
                    "Plane mirrors produce virtual, upright, laterally inverted images at the same distance behind the mirror",
                    "Concave (converging) mirrors can produce real and virtual images depending on object position",
                    "Convex (diverging) mirrors always produce virtual, upright, diminished images",
                    "The mirror equation relates object distance, image distance, and focal length"
                ],
                theory: "Reflection is the bouncing back of light waves at a surface. The laws of reflection are universal — they apply to all types of waves. Mirrors exploit reflection to form images. Curved mirrors are used in telescopes, car headlights, satellite dishes, and optical instruments. Understanding image formation through ray diagrams and the mirror equation is fundamental to all optical design.",
                keyDefinitions: {
                    "Incident Ray": "The ray of light travelling toward the reflecting surface",
                    "Reflected Ray": "The ray of light bouncing away from the reflecting surface",
                    "Normal": "A line perpendicular to the surface at the point of incidence",
                    "Angle of Incidence (θᵢ)": "Angle between the incident ray and the normal",
                    "Angle of Reflection (θᵣ)": "Angle between the reflected ray and the normal",
                    "Plane Mirror": "A flat reflective surface; produces virtual, upright, laterally inverted images",
                    "Concave Mirror": "A curved mirror that curves inward (like a cave); converging",
                    "Convex Mirror": "A curved mirror that curves outward; diverging",
                    "Principal Axis": "The line passing through the centre of curvature and the pole of the mirror",
                    "Focal Point (F)": "The point where parallel rays converge (concave) or appear to diverge from (convex) after reflection",
                    "Focal Length (f)": "Distance from the mirror surface (pole) to the focal point; f = R/2",
                    "Centre of Curvature (C)": "The centre of the sphere of which the mirror is a part; C = 2f from the mirror",
                    "Real Image": "Image formed by actual convergence of reflected rays; can be projected on a screen",
                    "Virtual Image": "Image formed where reflected rays appear to diverge from; cannot be projected on a screen",
                    "Magnification (m)": "Ratio of image height to object height; m = hᵢ/hₒ = −v/u"
                },
                lawsOfReflection: {
                    firstLaw: "The incident ray, reflected ray, and normal at the point of incidence all lie in the same plane",
                    secondLaw: "The angle of incidence equals the angle of reflection: θᵢ = θᵣ",
                    note: "Both angles are measured from the normal to the surface, NOT from the surface itself"
                },
                mirrorEquation: {
                    equation: "1/v + 1/u = 1/f = 2/R",
                    variables: {
                        u: "object distance (positive if object is in front of mirror)",
                        v: "image distance (positive if image is in front of mirror — real image)",
                        f: "focal length (positive for concave, negative for convex mirrors)",
                        R: "radius of curvature; R = 2f"
                    },
                    signConvention: {
                        realIsPositive: "Real is Positive convention: distances measured to real objects/images are positive; virtual are negative",
                        focalLength: "Concave mirror: f > 0; Convex mirror: f < 0",
                        magnification: "m = −v/u; positive m means upright image; negative m means inverted image; |m| > 1 means magnified"
                    }
                },
                imageFormationConcave: [
                    { objectPosition: "Beyond C (u > 2f)", imagePosition: "Between F and C (f < v < 2f)", imageType: "Real, inverted, diminished" },
                    { objectPosition: "At C (u = 2f)", imagePosition: "At C (v = 2f)", imageType: "Real, inverted, same size" },
                    { objectPosition: "Between F and C (f < u < 2f)", imagePosition: "Beyond C (v > 2f)", imageType: "Real, inverted, magnified" },
                    { objectPosition: "At F (u = f)", imagePosition: "At infinity", imageType: "No image formed (rays parallel)" },
                    { objectPosition: "Inside F (u < f)", imagePosition: "Behind mirror (virtual)", imageType: "Virtual, upright, magnified" }
                ],
                imageFormationConvex: [
                    { objectPosition: "Any position", imagePosition: "Behind mirror (virtual)", imageType: "Virtual, upright, diminished — always" }
                ],
                rayDiagramRules: {
                    concave: [
                        "Ray parallel to principal axis → reflects through focal point F",
                        "Ray through focal point F → reflects parallel to principal axis",
                        "Ray through centre of curvature C → reflects back along same path",
                        "Ray striking the pole → reflects symmetrically about the principal axis"
                    ],
                    convex: [
                        "Ray parallel to principal axis → reflects as if it came from F (behind mirror)",
                        "Ray directed toward F → reflects parallel to principal axis",
                        "Ray directed toward C → reflects back along same path"
                    ]
                },
                applications: [
                    "Plane mirrors: dressing mirrors, periscopes, kaleidoscopes",
                    "Concave mirrors: reflecting telescopes, shaving/makeup mirrors, car headlight reflectors, satellite dishes",
                    "Convex mirrors: car wing mirrors (wide field of view), security mirrors in shops"
                ]
            },

            refraction: {
                title: "Refraction of Light: Snell's Law and Total Internal Reflection",
                concepts: [
                    "Light changes speed and direction when passing between media of different optical densities",
                    "Snell's Law: n₁ sin(θ₁) = n₂ sin(θ₂)",
                    "The refractive index of a medium is the ratio of the speed of light in vacuum to the speed in that medium",
                    "Total internal reflection occurs when light travels from a denser to less dense medium at angles exceeding the critical angle",
                    "Optical fibres exploit total internal reflection to transmit light over long distances"
                ],
                theory: "Refraction occurs because light travels at different speeds in different materials. This change in speed causes a change in direction at the boundary (unless the light strikes at 90°). Snell's Law quantifies this relationship precisely. Total internal reflection — where no light escapes — underpins optical fibre technology and explains phenomena like mirages and the sparkle of diamonds.",
                keyDefinitions: {
                    "Refraction": "The bending of light as it passes from one medium to another due to a change in speed",
                    "Refractive Index (n)": "A dimensionless ratio: n = c/v, where c is speed of light in vacuum and v in the medium",
                    "Absolute Refractive Index": "Refractive index relative to vacuum; n = c/v",
                    "Relative Refractive Index": "Ratio of refractive indices: ₁n₂ = n₂/n₁ = v₁/v₂",
                    "Optical Density": "A measure of how much a medium slows light (not same as physical density); higher n = more optically dense",
                    "Critical Angle (θ_c)": "Angle of incidence in the denser medium for which the angle of refraction is exactly 90°",
                    "Total Internal Reflection (TIR)": "Complete reflection of light at a boundary when θᵢ > θ_c; occurs only from denser to less dense medium",
                    "Optical Fibre": "A thin glass or plastic strand that transmits light by TIR along its length",
                    "Normal Dispersion": "Different wavelengths of light refracted by different amounts in a medium (n varies with λ)"
                },
                snellsLaw: {
                    equation: "n₁ sin(θ₁) = n₂ sin(θ₂)",
                    alternateForm: "sin(θ₁)/sin(θ₂) = n₂/n₁ = v₁/v₂ = λ₁/λ₂",
                    refractiveIndexDefinition: "n = c/v",
                    combinedForm: "n = sin(θᵢ)/sin(θᵣ) (when one medium is air/vacuum, n ≈ 1)",
                    variables: {
                        n1: "Refractive index of first (incident) medium",
                        n2: "Refractive index of second (refracted) medium",
                        theta1: "Angle of incidence (from normal in medium 1)",
                        theta2: "Angle of refraction (from normal in medium 2)"
                    },
                    rules: [
                        "Light bending toward normal: going into more optically dense medium (n₂ > n₁), θ₂ < θ₁",
                        "Light bending away from normal: going into less optically dense medium (n₂ < n₁), θ₂ > θ₁",
                        "When θ₁ = 0 (normal incidence): light passes straight through with no bending"
                    ]
                },
                criticalAngle: {
                    definition: "Angle of incidence (in denser medium) where angle of refraction = 90°",
                    formula: "sin(θ_c) = n₂/n₁ = 1/n (when n₂ = 1 for air)",
                    conditions: "TIR requires: (1) light travelling from denser to less dense medium, AND (2) θᵢ > θ_c",
                    examples: {
                        glass: "n ≈ 1.5 → sin(θ_c) = 1/1.5 = 0.667 → θ_c ≈ 41.8°",
                        diamond: "n ≈ 2.42 → sin(θ_c) = 1/2.42 = 0.413 → θ_c ≈ 24.4° (very small → TIR very easy → sparkle)"
                    }
                },
                totalInternalReflection: {
                    conditions: [
                        "Light must travel from an optically denser medium to an optically less dense medium",
                        "The angle of incidence must exceed the critical angle: θᵢ > θ_c"
                    ],
                    applications: [
                        "Optical fibres: telecommunications, endoscopes, internet cables",
                        "Diamond cutting: facets designed so TIR maximises internal reflections and brilliance",
                        "Prism binoculars and periscopes: 45° prisms replace mirrors using TIR",
                        "Mirages: TIR at layers of hot (less dense) air creates apparent reflections",
                        "Cat's eyes road reflectors"
                    ]
                },
                refractiveIndexValues: {
                    vacuum: { n: 1.000, note: "Exact by definition" },
                    air: { n: 1.0003, note: "Treated as 1.00 in most problems" },
                    water: { n: 1.333, note: "θ_c (water-air) ≈ 48.8°" },
                    glass: { n: "1.45–1.70", note: "Depends on glass type; crown glass ≈ 1.52" },
                    diamond: { n: 2.42, note: "Very high n → very small θ_c → brilliant sparkle" },
                    ice: { n: 1.31, note: "θ_c (ice-air) ≈ 49.8°" }
                },
                applications: [
                    "Spectacles and contact lenses",
                    "Fibre optic telecommunications (internet, phone networks)",
                    "Endoscopy in medicine",
                    "Camera and telescope lens design",
                    "Mirages and atmospheric refraction"
                ]
            },

            lenses: {
                title: "Lenses and Image Formation: Thin Lens Equation and Optical Instruments",
                concepts: [
                    "Converging (convex) lenses bring parallel rays to a real focal point",
                    "Diverging (concave) lenses spread parallel rays; virtual focal point",
                    "The thin lens equation: 1/v − 1/u = 1/f (using real-is-positive convention)",
                    "Optical power P = 1/f measured in dioptres (D)",
                    "Optical instruments combine lenses to produce useful magnified or projected images"
                ],
                theory: "Lenses form images by refracting light at two curved surfaces. The thin lens approximation assumes the lens thickness is negligible compared to other distances. The thin lens equation and ray diagram rules allow prediction of image position, size, and orientation for any object position. Understanding lenses is essential for designing cameras, microscopes, telescopes, spectacles, and projectors.",
                keyDefinitions: {
                    "Converging Lens": "A lens that is thicker at the centre; brings parallel rays to a real focus; convex lens",
                    "Diverging Lens": "A lens that is thinner at the centre; spreads parallel rays; concave lens",
                    "Principal Axis": "The line through the optical centre perpendicular to the lens",
                    "Optical Centre (O)": "The centre of the lens; rays through O are undeviated",
                    "Focal Point (F)": "The point where parallel rays converge (converging) or appear to diverge from (diverging) after passing through the lens",
                    "Focal Length (f)": "Distance from the optical centre to the focal point; positive for converging, negative for diverging",
                    "Object Distance (u)": "Distance from the object to the optical centre; negative if object is on incident side (real-is-positive convention varies by curriculum)",
                    "Image Distance (v)": "Distance from the optical centre to the image; positive if on the far side (real image)",
                    "Magnification (m)": "m = image height / object height = v/u",
                    "Optical Power (P)": "P = 1/f; measured in dioptres (D = m⁻¹); positive for converging, negative for diverging"
                },
                lensEquation: {
                    equation: "1/v − 1/u = 1/f",
                    alternateForm: "1/f = 1/v − 1/u  (real-is-positive convention: u is negative for real objects on the left)",
                    commonForm: "1/f = 1/do + 1/di  (where do and di are both positive for real objects and real images)",
                    note: "Sign conventions vary by curriculum. Always state which convention you are using.",
                    magnification: "m = hᵢ/hₒ = v/u",
                    power: "P = 1/f (f in metres) → P in dioptres (D)",
                    combinedLenses: "P_total = P₁ + P₂ + P₃ + ... (for thin lenses in contact)"
                },
                imageFormationConverging: [
                    { objectPosition: "Beyond 2F (u > 2f)", imagePosition: "Between F and 2F (f < v < 2f)", imageType: "Real, inverted, diminished" },
                    { objectPosition: "At 2F (u = 2f)", imagePosition: "At 2F (v = 2f)", imageType: "Real, inverted, same size" },
                    { objectPosition: "Between F and 2F (f < u < 2f)", imagePosition: "Beyond 2F (v > 2f)", imageType: "Real, inverted, magnified" },
                    { objectPosition: "At F (u = f)", imagePosition: "At infinity", imageType: "No image formed (rays parallel)" },
                    { objectPosition: "Inside F (u < f)", imagePosition: "Same side as object (virtual)", imageType: "Virtual, upright, magnified (magnifying glass)" }
                ],
                imageFormationDiverging: [
                    { objectPosition: "Any position", imagePosition: "Same side as object (virtual)", imageType: "Virtual, upright, diminished — always" }
                ],
                rayDiagramRules: {
                    converging: [
                        "Ray parallel to principal axis → refracts through the far focal point F₂",
                        "Ray through the optical centre O → passes straight through undeviated",
                        "Ray through the near focal point F₁ → refracts parallel to the principal axis"
                    ],
                    diverging: [
                        "Ray parallel to principal axis → refracts as if it came from the near focal point F₁",
                        "Ray through the optical centre O → passes straight through undeviated",
                        "Ray directed toward the far focal point F₂ → refracts parallel to the principal axis"
                    ]
                },
                opticalInstruments: {
                    magnifyingGlass: {
                        type: "Single converging lens",
                        setup: "Object placed inside focal length",
                        image: "Virtual, upright, magnified",
                        angularMagnification: "M = D/f (D = 25 cm, near point of normal eye)"
                    },
                    compoundMicroscope: {
                        components: "Objective lens (short f) + eyepiece lens (longer f)",
                        setup: "Object just beyond F_objective → real magnified intermediate image → eyepiece acts as magnifier",
                        totalMagnification: "M = m_objective × M_eyepiece"
                    },
                    refractiveTelescope: {
                        components: "Objective lens (long f) + eyepiece lens (short f)",
                        setup: "Distant object at infinity → image at F_objective = F_eyepiece",
                        angularMagnification: "M = f_objective / f_eyepiece"
                    },
                    camera: {
                        components: "Converging lens + sensor/film at image plane",
                        setup: "Object beyond 2F; real inverted diminished image on sensor",
                        focussing: "Adjust lens-sensor distance (v) for sharp focus at different u"
                    },
                    humanEye: {
                        components: "Cornea + crystalline lens (variable f) + retina",
                        accommodation: "Ciliary muscles change lens shape to adjust f",
                        defects: {
                            myopia: "Shortsightedness: image forms in front of retina; corrected by diverging lens",
                            hyperopia: "Longsightedness: image forms behind retina; corrected by converging lens",
                            astigmatism: "Uneven curvature; corrected by cylindrical lens"
                        }
                    }
                },
                applications: [
                    "Spectacles and contact lenses for vision correction",
                    "Camera design (DSLR, phone cameras)",
                    "Microscopy in biology and medicine",
                    "Astronomical telescopes",
                    "Projectors and display systems"
                ]
            },

            wave_optics: {
                title: "Wave Optics: Interference, Diffraction, and Gratings",
                concepts: [
                    "Light behaves as a wave; waves can interfere constructively and destructively",
                    "Young's double-slit experiment provides key evidence for the wave nature of light",
                    "Fringe spacing w = λD/d (where D = screen distance, d = slit separation)",
                    "Diffraction is the spreading of waves around obstacles or through apertures",
                    "Diffraction gratings produce sharp, widely spaced maxima used to measure wavelength precisely"
                ],
                theory: "Wave optics moves beyond geometric (ray) optics to explain phenomena that require treating light as a wave. Interference and diffraction cannot be explained by ray optics. Young's double-slit experiment was historically crucial in establishing the wave theory of light. Today, diffraction gratings are used in spectrometers to analyse light from stars, identify chemical substances, and study atomic structure.",
                keyDefinitions: {
                    "Interference": "Superposition of two or more waves producing a resultant wave; constructive (amplitudes add) or destructive (amplitudes subtract)",
                    "Coherent Sources": "Sources emitting waves of the same frequency with a constant phase difference",
                    "Path Difference": "Difference in the distances travelled by two waves from their sources to a given point; symbol Δ or δ",
                    "Constructive Interference": "Path difference = nλ (n = 0, 1, 2, ...); bright fringe (maximum)",
                    "Destructive Interference": "Path difference = (n + ½)λ (n = 0, 1, 2, ...); dark fringe (minimum)",
                    "Fringe": "A bright or dark band produced by interference",
                    "Fringe Spacing (w)": "Distance between adjacent bright (or dark) fringes",
                    "Diffraction": "The spreading of waves as they pass through an aperture or around an obstacle",
                    "Diffraction Grating": "A surface with many equally spaced parallel slits; produces sharp interference maxima",
                    "Order of Diffraction (n)": "The integer n in the grating equation d·sin(θ) = nλ",
                    "Monochromatic Light": "Light of a single wavelength (one colour)"
                },
                youngsDoubleSlit: {
                    setup: "Coherent light passes through two narrow slits separated by distance d; fringes observed on a screen at distance D",
                    fringeConditions: {
                        bright: "Path difference = nλ (n = 0, ±1, ±2, ...)",
                        dark: "Path difference = (n + ½)λ"
                    },
                    fringeSpacing: {
                        formula: "w = λD/d",
                        variables: {
                            w: "fringe spacing (m) — distance between adjacent bright fringes",
                            lambda: "wavelength of light (m)",
                            D: "distance from slits to screen (m)",
                            d: "slit separation (m)"
                        },
                        conditions: "Valid when D >> d and D >> λ (small angle approximation)"
                    },
                    historicalSignificance: "Thomas Young (1801) — first strong experimental evidence for wave nature of light; contradicted Newton's corpuscular theory",
                    coherenceRequirement: "If sources are not coherent, fringes shift randomly and wash out; laser or filtered light required"
                },
                diffractionGrating: {
                    equation: "d·sin(θ) = nλ",
                    variables: {
                        d: "grating spacing = 1/N (where N = number of slits per metre)",
                        theta: "angle of diffraction of nth order maximum from centre",
                        n: "order of diffraction (n = 0, ±1, ±2, ...)",
                        lambda: "wavelength (m)"
                    },
                    maximumOrder: "n_max = d/λ (rounded down to nearest integer; n must satisfy sin(θ) ≤ 1)",
                    advantages: [
                        "Produces many more slits → much sharper, brighter, more widely spaced maxima than double slit",
                        "Angular dispersion is greater → easier to resolve different wavelengths",
                        "Used in spectrometers to measure wavelengths very precisely"
                    ],
                    applications: [
                        "Optical spectrometers to identify elements and compounds",
                        "Astronomical spectroscopy (measure star compositions and velocities)",
                        "CDs and DVDs (surface acts as reflective grating)",
                        "Laser printers and barcode scanners"
                    ]
                },
                singleSlitDiffraction: {
                    minima: "a·sin(θ) = nλ (n = ±1, ±2, ...) where a = slit width",
                    centralMaximum: "Broad, bright central peak; all other maxima much weaker",
                    widthEffect: "Narrower slit → wider diffraction pattern",
                    wavelengthEffect: "Longer wavelength → wider diffraction pattern"
                },
                conditions: {
                    significantDiffraction: "Significant diffraction when slit width ≈ wavelength",
                    negligible: "Negligible diffraction when slit width >> wavelength (geometric optics applies)"
                },
                applications: [
                    "Spectrometers and spectroscopy",
                    "X-ray crystallography (Bragg diffraction in crystals)",
                    "Radio telescope arrays",
                    "Holography",
                    "Anti-reflection coatings (thin film interference)"
                ]
            },

            dispersion_spectra: {
                title: "Dispersion, Spectra, and the Electromagnetic Spectrum",
                concepts: [
                    "White light is a mixture of all visible wavelengths (approximately 400–700 nm)",
                    "Refractive index varies with wavelength: dispersion causes splitting of white light by a prism",
                    "Emission spectra show bright lines at specific wavelengths characteristic of each element",
                    "Absorption spectra show dark lines where atoms have absorbed specific wavelengths",
                    "The electromagnetic spectrum extends from radio waves to gamma rays, all travelling at c = 3 × 10⁸ m/s in vacuum"
                ],
                theory: "Dispersion arises because the refractive index of a material depends on the wavelength of light. Violet light refracts more than red light through a glass prism, separating white light into a spectrum. Atomic spectra — both emission and absorption — are fingerprints of elements and underpin our understanding of atomic structure. The electromagnetic spectrum encompasses a vast range of frequencies with identical wave behaviour but different wavelengths, energies, and interactions with matter.",
                keyDefinitions: {
                    "Dispersion": "The splitting of light into its component wavelengths due to variation of refractive index with wavelength",
                    "White Light": "A mixture of all visible wavelengths, approximately 400 nm (violet) to 700 nm (red)",
                    "Visible Spectrum": "The range of EM radiation detectable by the human eye (approximately 400–700 nm)",
                    "Monochromatic Light": "Light of a single, well-defined wavelength",
                    "Emission Spectrum": "Bright lines on a dark background; produced when excited atoms emit photons of specific wavelengths",
                    "Absorption Spectrum": "Dark lines on a continuous spectrum; produced when atoms absorb photons of specific wavelengths from a broad source",
                    "Line Spectrum": "Discrete bright or dark lines; characteristic of a specific element; used for identification",
                    "Continuous Spectrum": "All wavelengths present across a range; emitted by hot dense objects (black body radiation)",
                    "Photon": "A quantum (packet) of electromagnetic energy; E = hf = hc/λ",
                    "Electromagnetic Spectrum": "The complete range of EM radiation ordered by frequency/wavelength",
                    "Speed of Light (c)": "c = 3.00 × 10⁸ m/s in vacuum; all EM radiation travels at c in vacuum"
                },
                dispersionByPrism: {
                    mechanism: "Different wavelengths have different refractive indices in glass; n_violet > n_red → violet deflects more",
                    deviation: "Angle of deviation D = (n−1)A for small angles (A = apex angle of prism)",
                    order: "Violet (shortest λ, highest n) deflects most; red (longest λ, lowest n) deflects least",
                    rainbow: {
                        formation: "Sunlight enters spherical water droplets; refraction + TIR + refraction separates colours",
                        primaryRainbow: "Two refractions and one TIR; red outer, violet inner; appears at ≈ 42° from antisolar point",
                        secondaryRainbow: "Two refractions and two TIRs; colours reversed (violet outer, red inner); appears at ≈ 51°"
                    }
                },
                electromagneticSpectrum: {
                    regions: [
                        {
                            name: "Radio Waves",
                            wavelengthRange: "> 0.1 m",
                            frequencyRange: "< 3 GHz",
                            sources: "Radio transmitters, stars, pulsars",
                            uses: "Radio and TV broadcasting, radar, MRI",
                            hazards: "None at normal exposures"
                        },
                        {
                            name: "Microwaves",
                            wavelengthRange: "1 mm – 0.1 m",
                            frequencyRange: "3 GHz – 300 GHz",
                            sources: "Microwave ovens, radar transmitters, the Big Bang (CMB)",
                            uses: "Cooking, radar, satellite communication, Wi-Fi",
                            hazards: "Internal heating of tissue at high intensities"
                        },
                        {
                            name: "Infrared (IR)",
                            wavelengthRange: "700 nm – 1 mm",
                            frequencyRange: "300 GHz – 430 THz",
                            sources: "Warm objects, IR LEDs, the Sun",
                            uses: "Thermal imaging, remote controls, optical fibre comms, night vision",
                            hazards: "Skin burns; eye damage (near IR)"
                        },
                        {
                            name: "Visible Light",
                            wavelengthRange: "400 nm – 700 nm",
                            frequencyRange: "430 THz – 750 THz",
                            sources: "The Sun, lamps, LEDs, lasers",
                            uses: "Vision, photography, optical fibres, displays",
                            hazards: "Very bright light or laser can damage retina"
                        },
                        {
                            name: "Ultraviolet (UV)",
                            wavelengthRange: "10 nm – 400 nm",
                            frequencyRange: "750 THz – 30 PHz",
                            sources: "The Sun, UV lamps, welding arcs",
                            uses: "Sterilisation, fluorescence, forensics, vitamin D synthesis",
                            hazards: "Skin cancer, sunburn, cataracts; eye damage"
                        },
                        {
                            name: "X-rays",
                            wavelengthRange: "0.01 nm – 10 nm",
                            frequencyRange: "30 PHz – 30 EHz",
                            sources: "X-ray tubes, synchrotrons, neutron stars",
                            uses: "Medical imaging, airport security, crystallography",
                            hazards: "Ionising radiation — damages DNA; cancer risk"
                        },
                        {
                            name: "Gamma Rays (γ)",
                            wavelengthRange: "< 0.01 nm",
                            frequencyRange: "> 30 EHz",
                            sources: "Radioactive nuclei, supernovae, gamma-ray bursts",
                            uses: "Cancer radiotherapy, sterilisation, PET scans",
                            hazards: "Highly ionising; causes cancer and acute radiation syndrome"
                        }
                    ],
                    commonProperties: [
                        "All travel at c = 3.00 × 10⁸ m/s in vacuum",
                        "All are transverse waves",
                        "All obey c = fλ",
                        "All can travel through vacuum",
                        "All undergo reflection, refraction, diffraction, and interference"
                    ],
                    energyRelation: {
                        formula: "E = hf = hc/λ",
                        planck: "h = 6.63 × 10⁻³⁴ J·s (Planck's constant)",
                        trend: "Higher frequency → shorter wavelength → higher photon energy → more ionising"
                    }
                },
                atomicSpectra: {
                    emissionSpectrum: {
                        formation: "Atoms excited by heat or electricity; electrons jump to higher energy levels; fall back releasing photons of specific energies (wavelengths)",
                        appearance: "Bright coloured lines on dark background",
                        formula: "E_photon = E_upper − E_lower = hf = hc/λ",
                        example: "Hydrogen Balmer series (visible): 656 nm (red), 486 nm (blue-green), 434 nm (violet)"
                    },
                    absorptionSpectrum: {
                        formation: "Cool gas in front of continuous (white light) source absorbs photons of specific energies; electrons jump to higher levels",
                        appearance: "Dark lines at same positions as emission spectrum of that element",
                        fraunhoferLines: "Dark absorption lines in the solar spectrum; used to identify elements in the Sun's atmosphere"
                    },
                    identification: {
                        use: "Each element has a unique set of spectral lines — a spectral fingerprint",
                        applications: [
                            "Identifying elements in stars and nebulae",
                            "Quality control in industry",
                            "Detecting pollutants in atmosphere",
                            "Forensic analysis"
                        ]
                    }
                },
                applications: [
                    "Astronomical spectroscopy: identifying elements in stars, measuring Doppler shifts",
                    "Medical imaging: X-ray, CT scan, MRI",
                    "Remote sensing: IR satellite imaging of Earth",
                    "Telecommunications: microwave, fibre optic (visible/IR)",
                    "Cancer treatment: gamma ray and X-ray radiotherapy"
                ]
            }
        };
    }

    initializeOpticsExperiments() {
        this.opticsExperiments = {

            // ========================================
            // EXPERIMENT 1: LAWS OF REFLECTION
            // ========================================

            laws_of_reflection: {
                name: "Verifying the Laws of Reflection Using a Plane Mirror",
                relatedTopics: ['reflection'],
                category: 'reflection',
                historicalBackground: {
                    scientist: "Euclid and Hero of Alexandria (ancient); Ibn al-Haytham (1021 AD)",
                    year: "c. 300 BC (Euclid); 1021 AD (Ibn al-Haytham's Book of Optics)",
                    discovery: "The angle of incidence equals the angle of reflection",
                    significance: "Ibn al-Haytham (Alhazen) was the first to give a systematic, experimental account of reflection and refraction; considered the father of modern optics",
                    method: "Al-Haytham used dark chambers and controlled light sources to study reflection; derived the laws through careful experiment, not pure theory",
                    legacy: "His work influenced Roger Bacon, Leonardo da Vinci, Kepler, and Newton"
                },
                labExperiment: {
                    title: "Verifying the Laws of Reflection for a Plane Mirror",
                    hypothesis: "The angle of incidence equals the angle of reflection for all angles, with both rays lying in the same plane as the normal",
                    purpose: "Verify the two laws of reflection experimentally using a plane mirror and ray tracing",
                    variables: {
                        independent: "Angle of incidence (θᵢ)",
                        dependent: "Angle of reflection (θᵣ)",
                        controlled: ["Mirror surface type and position", "Method of measuring angles (protractor at same position)"]
                    },
                    materials: [
                        "Plane mirror (glass or metallic)",
                        "Ray box or laser ray tracer (with single-slit attachment for single ray)",
                        "Plain white paper",
                        "Protractor and ruler",
                        "Pins (for pin method alternative)",
                        "Pencil",
                        "Tape to secure mirror"
                    ],
                    safetyPrecautions: [
                        "If using laser: never look directly into the beam; ensure beam is at table level",
                        "Secure mirror so it cannot fall",
                        "Do not aim laser at people or reflective surfaces toward eyes"
                    ],
                    procedure: [
                        "Place mirror on paper; draw the mirror line along its reflective surface",
                        "Draw a normal (perpendicular) to the mirror line at the point of incidence",
                        "Direct a single ray from the ray box at the mirror at θᵢ = 20° to the normal",
                        "Mark the incident and reflected rays on the paper",
                        "Remove the ray box; draw in the complete incident and reflected ray paths",
                        "Measure θᵣ with a protractor; record in results table",
                        "Repeat for θᵢ = 30°, 40°, 50°, 60°, 70°",
                        "For each, verify that incident ray, reflected ray, and normal are coplanar"
                    ],
                    dataTable: [
                        ["Angle of Incidence θᵢ (°)", "Angle of Reflection θᵣ (°)", "Difference (θᵣ − θᵢ) (°)"],
                        ["20", "", ""],
                        ["30", "", ""],
                        ["40", "", ""],
                        ["50", "", ""],
                        ["60", "", ""],
                        ["70", "", ""]
                    ],
                    expectedResults: {
                        graph: "θᵣ vs θᵢ gives a straight line through the origin with gradient = 1",
                        numerically: "θᵣ ≈ θᵢ for all angles within experimental uncertainty",
                        coplanar: "Incident ray, reflected ray and normal always found in the same plane"
                    },
                    errorAnalysis: {
                        sources: [
                            "Parallax error when drawing ray paths",
                            "Mirror not perfectly flat or not positioned precisely on the mirror line",
                            "Protractor misalignment when measuring angles"
                        ],
                        improvements: [
                            "Use a ray box with a well-defined slit to produce a clear, sharp ray",
                            "Use a laser for a clearly defined, thin ray",
                            "Take multiple readings and average"
                        ]
                    },
                    conclusions: [
                        "The angle of incidence equals the angle of reflection: θᵢ = θᵣ (verified)",
                        "The incident ray, reflected ray, and normal are all coplanar (first law verified)",
                        "Both laws hold for all angles tested"
                    ],
                    realWorldApplications: [
                        "Design of periscopes and kaleidoscopes",
                        "Snooker and billiards (ball reflection from cushion)",
                        "Reflective telescope (Newtonian) design",
                        "Laser alignment in manufacturing"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 2: SNELL'S LAW AND REFRACTIVE INDEX
            // ========================================

            snells_law_experiment: {
                name: "Verifying Snell's Law and Measuring the Refractive Index of Glass",
                relatedTopics: ['refraction'],
                category: 'refraction',
                historicalBackground: {
                    scientist: "Willebrord Snellius (1621); René Descartes (1637, published first); Ibn Sahl (984 AD, earliest known)",
                    year: "984 AD (Ibn Sahl); 1621 (Snellius rediscovery)",
                    discovery: "The ratio sin(θ₁)/sin(θ₂) is constant for a given pair of media",
                    significance: "Snell's Law is the quantitative foundation of all lens and optical system design; it predicts how light bends at every optical boundary",
                    method: "Snellius discovered the law through careful angle measurements; Ibn Sahl used it to design aspherical lenses",
                    legacy: "Underpins the design of every optical instrument ever made"
                },
                labExperiment: {
                    title: "Verifying Snell's Law and Finding the Refractive Index of a Glass Block",
                    hypothesis: "n₁ sin(θ₁) = n₂ sin(θ₂) holds for all angles, and the ratio sin(θᵢ)/sin(θᵣ) is constant and equal to n (refractive index of glass relative to air)",
                    purpose: "Verify Snell's Law experimentally and determine the refractive index of a glass or perspex block",
                    variables: {
                        independent: "Angle of incidence (θᵢ) in air",
                        dependent: "Angle of refraction (θᵣ) in glass",
                        controlled: ["Same glass block throughout", "Same wavelength of light (monochromatic or white light noted)"]
                    },
                    materials: [
                        "Rectangular glass or perspex block",
                        "Ray box with single-slit attachment (or laser)",
                        "Plain white paper",
                        "Protractor and ruler",
                        "Pencil",
                        "Optional: semicircular perspex block (to find critical angle)"
                    ],
                    safetyPrecautions: [
                        "Handle glass block carefully — edges may be sharp",
                        "Laser safety: class 2 or lower; do not stare into beam"
                    ],
                    procedure: [
                        "Place glass block on paper; trace its outline precisely",
                        "Draw a normal at the centre of one of the long faces",
                        "Direct ray at θᵢ = 10° to the normal; trace incident and emergent rays on both sides of the block",
                        "Remove block; join the two ray segments through the block by a straight line (the refracted ray inside)",
                        "Measure θᵣ inside the glass at the entry face",
                        "Repeat for θᵢ = 20°, 30°, 40°, 50°, 60°, 70°",
                        "Calculate sin(θᵢ) and sin(θᵣ) for each; calculate n = sin(θᵢ)/sin(θᵣ)",
                        "Plot sin(θᵢ) vs sin(θᵣ); gradient = n"
                    ],
                    dataAnalysis: {
                        equation: "n = sin(θᵢ)/sin(θᵣ)",
                        graphMethod: "Plot sin(θᵢ) on y-axis vs sin(θᵣ) on x-axis; gradient = n (refractive index)",
                        expectedGradient: "n ≈ 1.5 for crown glass; n ≈ 1.49 for perspex"
                    },
                    dataTable: [
                        ["θᵢ (°)", "θᵣ (°)", "sin(θᵢ)", "sin(θᵣ)", "n = sin(θᵢ)/sin(θᵣ)"],
                        ["10", "", "", "", ""],
                        ["20", "", "", "", ""],
                        ["30", "", "", "", ""],
                        ["40", "", "", "", ""],
                        ["50", "", "", "", ""],
                        ["60", "", "", "", ""],
                        ["70", "", "", "", ""]
                    ],
                    expectedResults: {
                        graph: "sin(θᵢ) vs sin(θᵣ) gives a straight line through origin with gradient = n ≈ 1.5",
                        snellsLaw: "n·sin(θᵣ) = sin(θᵢ) is constant for all angles",
                        refractive_index: "n ≈ 1.47–1.52 for typical glass/perspex"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Parallax in reading angles from protractor",
                            "Thick ray beam making it hard to identify exact edges of ray"
                        ],
                        random: [
                            "Errors in tracing outline of block (gap between block and pencil line)",
                            "Estimating the midpoint of broad ray beams"
                        ],
                        improvements: [
                            "Use laser for sharply defined ray",
                            "Use semicircular block with ray always hitting flat face along radius → always at normal incidence on curved face → no refraction at exit",
                            "Repeat and average n values"
                        ]
                    },
                    conclusions: [
                        "Snell's Law n₁ sin(θ₁) = n₂ sin(θ₂) is verified for all measured angles",
                        "The graph of sin(θᵢ) vs sin(θᵣ) is linear through the origin, confirming the law",
                        "Gradient gives n ≈ 1.5 for the glass/perspex block"
                    ],
                    realWorldApplications: [
                        "Lens design for cameras and spectacles",
                        "Optical fibre design (requires knowing n of core and cladding)",
                        "Atmospheric refraction and mirage formation",
                        "Gemstone cutting to maximise TIR and sparkle"
                    ],
                    extensions: [
                        "Use semicircular block to measure critical angle and calculate n from sin(θ_c) = 1/n",
                        "Measure n for different wavelengths to observe dispersion (n depends on λ)",
                        "Compare n for different glass types"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 3: FOCAL LENGTH OF CONVERGING LENS
            // ========================================

            focal_length_lens: {
                name: "Measuring the Focal Length of a Converging Lens Using the Thin Lens Equation",
                relatedTopics: ['lenses'],
                category: 'lenses',
                historicalBackground: {
                    scientist: "Roger Bacon (1267), Hans Lippershey (telescope, 1608), Galileo Galilei (1609), Johannes Kepler (1611)",
                    year: "13th century (first spectacles); 1608 (telescope)",
                    discovery: "Convex lenses magnify; combining lenses creates telescopes and microscopes",
                    significance: "The thin lens equation 1/v − 1/u = 1/f allows quantitative prediction of image position and magnification — essential for all optical instrument design",
                    Descartes: "Derived the thin lens equation analytically in the 17th century",
                    legacy: "Every camera, microscope, telescope, and pair of glasses relies on the thin lens equation"
                },
                labExperiment: {
                    title: "Determining the Focal Length of a Converging Lens Using an Illuminated Object",
                    hypothesis: "If the thin lens equation 1/v − 1/u = 1/f is correct, a graph of 1/v vs 1/u will be linear with gradient −1 and intercepts of 1/f on both axes",
                    purpose: "Determine the focal length of a converging lens by measuring image and object distances for multiple object positions, and verify the thin lens equation",
                    variables: {
                        independent: "Object distance u",
                        dependent: "Image distance v",
                        controlled: ["Same lens throughout", "Same illuminated object (cross-wire or lamp)", "Optical bench alignment"]
                    },
                    materials: [
                        "Converging (convex) lens (suggested focal length 15–20 cm)",
                        "Lens holder on optical bench",
                        "Illuminated object (lamp + cross-wire or letter 'F' slide)",
                        "White screen (for receiving real image)",
                        "Metre rule or optical bench with scale",
                        "Ruler for measuring image size (for magnification)"
                    ],
                    safetyPrecautions: [
                        "Do not focus sunlight with the lens — can cause burns or fire",
                        "Lamp filament is hot — handle with care"
                    ],
                    procedure: [
                        "Set up lamp (object), lens, and screen on optical bench in a straight line",
                        "Start with u = 40 cm (object well beyond 2f, assuming f ≈ 15 cm)",
                        "Move screen until a sharp, clear image of the object is formed",
                        "Record u (object-to-lens distance) and v (lens-to-screen distance)",
                        "Repeat for u = 35, 30, 25, 22, 20 cm (stop before u = f ≈ 15 cm)",
                        "Also estimate f roughly: point lens at distant window/lamp; v ≈ f when image of infinity is sharp",
                        "For each reading, calculate 1/u, 1/v, and f from 1/f = 1/v + 1/u (note sign convention)"
                    ],
                    signConventionNote: "Using the standard form 1/f = 1/v + 1/u where u and v are both positive for real object and real image (object on left, image on right of converging lens). This is the 'New Cartesian' convention used in many curricula.",
                    dataAnalysis: {
                        method1: "Calculate f = uv/(u+v) for each row; take mean f",
                        method2: "Plot 1/v vs 1/u; gradient should be −1; y-intercept = 1/f; x-intercept = 1/f",
                        method3: "Plot v vs u; or use the graphical construction where 1/v + 1/u = 1/f"
                    },
                    dataTable: [
                        ["u (cm)", "v (cm)", "1/u (cm⁻¹)", "1/v (cm⁻¹)", "f = uv/(u+v) (cm)", "m = v/u"],
                        ["40", "", "", "", "", ""],
                        ["35", "", "", "", "", ""],
                        ["30", "", "", "", "", ""],
                        ["25", "", "", "", "", ""],
                        ["22", "", "", "", "", ""],
                        ["20", "", "", "", "", ""]
                    ],
                    expectedResults: {
                        f: "Calculated f should be consistent across all readings and match the lens's marked value",
                        graph: "1/v vs 1/u gives straight line with gradient = −1 and intercepts = 1/f on both axes",
                        magnification: "m = v/u; for u > 2f, m < 1 (diminished); for u between f and 2f, m > 1 (magnified)"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Difficulty in judging when image is exactly at its sharpest (parallax, resolution limit of eye)",
                            "Lens aberrations mean equation only holds for paraxial (close to axis) rays"
                        ],
                        random: [
                            "Reading errors on metre rule",
                            "Screen not exactly perpendicular to principal axis"
                        ],
                        improvements: [
                            "Use a cross-wire object and fine screen for precise focusing",
                            "Repeat each u measurement three times; find sharpest focus by bracketing (move screen past focus in both directions)",
                            "Use an optical bench with millimetre precision"
                        ]
                    },
                    conclusions: [
                        "Focal length of the lens determined as f ≈ [value] cm",
                        "Thin lens equation 1/f = 1/u + 1/v verified for all object distances tested",
                        "Graph of 1/v vs 1/u is linear with gradient ≈ −1 and intercepts ≈ 1/f"
                    ],
                    realWorldApplications: [
                        "Optometry: prescribing spectacle lenses (power P = 1/f in dioptres)",
                        "Camera lens design and testing",
                        "Microscope and telescope objective quality control",
                        "Projector and display system design"
                    ],
                    extensions: [
                        "Measure focal length of a diverging lens using a known converging lens",
                        "Determine focal length of the eye's lens using the reduced eye model",
                        "Measure power of a combination of two lenses and test P_total = P₁ + P₂",
                        "Investigate how image size varies with object distance and relate to magnification equation"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 4: YOUNG'S DOUBLE-SLIT EXPERIMENT
            // ========================================

            youngs_double_slit: {
                name: "Young's Double-Slit Experiment — Measuring the Wavelength of Light",
                relatedTopics: ['wave_optics'],
                category: 'wave_optics',
                historicalBackground: {
                    scientist: "Thomas Young",
                    year: "1801",
                    discovery: "Light undergoes interference — conclusive evidence for the wave nature of light",
                    significance: "Young's experiment overturned Newton's corpuscular (particle) theory of light; established the wave theory that prevailed until quantum mechanics showed light has both wave and particle character",
                    method: "Young allowed sunlight through a pinhole, then through two closely spaced slits; alternating bright and dark fringes on a screen demonstrated wave interference",
                    quote: "The experiments I am about to relate ... may be repeated with great ease, whenever the sun shines.",
                    legacy: "One of the most important experiments in the history of physics; later extended to electrons and matter waves (demonstrating quantum wave-particle duality)"
                },
                labExperiment: {
                    title: "Measuring the Wavelength of Laser Light Using Young's Double Slits",
                    hypothesis: "If light is a wave, it will produce an interference pattern with fringe spacing w = λD/d; measuring w, D, and d allows calculation of λ",
                    purpose: "Observe interference fringes from double slits and calculate the wavelength of the light source using w = λD/d",
                    variables: {
                        independent: "Slit separation d (or distance D)",
                        dependent: "Fringe spacing w",
                        controlled: ["Same light source (monochromatic)", "Same double slit plate (or controlled change of d)"]
                    },
                    materials: [
                        "Laser (red, λ ≈ 650 nm; or green, λ ≈ 532 nm) — class 2 or 2M maximum",
                        "Double slit plate (slits with known separation d, e.g., 0.25 mm, 0.50 mm)",
                        "Optical bench or lab bench",
                        "White screen or paper (minimum 2 m from slits)",
                        "Ruler or travelling microscope for measuring fringe spacing",
                        "Tape measure for D",
                        "Optional: diffraction grating for comparison"
                    ],
                    safetyPrecautions: [
                        "LASER SAFETY: Never look directly into the laser beam or its specular reflection",
                        "Ensure no one is in the path of the laser beam beyond the experiment",
                        "Post laser warning sign; use lowest power class available",
                        "Never allow beam to point at eye level"
                    ],
                    procedure: [
                        "Set up laser, double slit, and screen on optical bench; ensure all are level and aligned",
                        "Measure D (slit-to-screen distance) precisely; use D ≥ 2 m for clearly measurable fringes",
                        "Switch on laser; observe bright and dark interference fringes on screen",
                        "Mark the positions of at least 10 bright fringes on the screen",
                        "Measure the total width spanning n fringes; calculate w = total width / n",
                        "Repeat fringe width measurement three times; take mean w",
                        "Calculate λ = wd/D",
                        "Repeat for different slit separations d (if available) to verify w ∝ 1/d",
                        "Repeat for different D values to verify w ∝ D"
                    ],
                    dataAnalysis: {
                        formula: "w = λD/d  →  λ = wd/D",
                        graphMethod: "Plot w vs D; gradient = λ/d → λ = gradient × d",
                        alternateGraph: "Plot w vs 1/d (varying slits); gradient = λD → λ = gradient/D"
                    },
                    dataTable: [
                        ["Slit separation d (m)", "Screen distance D (m)", "Total width of n fringes (m)", "n (number of fringes)", "Fringe spacing w (m)", "λ = wd/D (nm)"],
                        ["0.00025", "2.0", "", "10", "", ""],
                        ["0.00025", "2.5", "", "10", "", ""],
                        ["0.00025", "3.0", "", "10", "", ""],
                        ["0.00050", "2.0", "", "10", "", ""],
                        ["0.00050", "2.5", "", "10", "", ""]
                    ],
                    expectedResults: {
                        wavelength: "λ ≈ 650 nm for red laser; ≈ 532 nm for green laser",
                        fringeSpacing: "Fringes more widely spaced with larger D or smaller d",
                        graph: "w vs D is linear through origin; gradient = λ/d"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Difficulty in identifying the exact centre of fringes (use narrow slits and dark room)",
                            "Slight misalignment of laser, slits, and screen affecting fringe spacing uniformity"
                        ],
                        random: [
                            "Measurement of fringe positions with ruler on a screen",
                            "Variation in D measurement"
                        ],
                        improvements: [
                            "Measure across as many fringes as possible (n = 10–20) to reduce percentage error in w",
                            "Use a travelling microscope to measure fringe spacing more precisely",
                            "Darken the room to improve fringe visibility"
                        ]
                    },
                    conclusions: [
                        "Clear interference fringes are observed, demonstrating the wave nature of light",
                        "Fringe spacing w ∝ D and w ∝ 1/d, confirming w = λD/d",
                        "Measured wavelength λ ≈ [value] nm, consistent with the known wavelength of the laser"
                    ],
                    realWorldApplications: [
                        "Measuring the wavelength of light precisely",
                        "Anti-reflection coatings (thin film interference)",
                        "Holography",
                        "Optical testing of surfaces (interference microscopy)",
                        "Demonstrating quantum wave-particle duality with electrons (Davisson-Germer)"
                    ],
                    extensions: [
                        "Use a diffraction grating instead of double slit: d·sin(θ) = nλ; measure θ to find λ",
                        "Observe single-slit diffraction: broaden one slit to observe envelope modulating double-slit fringes",
                        "Use white light instead of laser: observe coloured fringes showing different λ for different colours",
                        "Investigate effect of slit width on fringe visibility"
                    ]
                }
            },

            // ========================================
            // EXPERIMENT 5: DIFFRACTION GRATING SPECTROSCOPY
            // ========================================

            diffraction_grating_spectra: {
                name: "Using a Diffraction Grating to Measure Wavelengths and Analyse Spectra",
                relatedTopics: ['wave_optics', 'dispersion_spectra'],
                category: 'wave_optics',
                historicalBackground: {
                    scientist: "Joseph von Fraunhofer (1814, diffraction grating); Kirchhoff and Bunsen (1859, spectroscopy)",
                    year: "1814 (Fraunhofer); 1859 (spectroscopy as analytical tool)",
                    discovery: "Fraunhofer invented the diffraction grating and discovered dark absorption lines in the solar spectrum (Fraunhofer lines); Kirchhoff and Bunsen established that each element has a unique spectral fingerprint",
                    significance: "Spectroscopy is one of the most powerful analytical tools in science — used to identify elements in stars, detect molecules in interstellar space, and analyse materials in chemistry and medicine",
                    method: "Fraunhofer used fine wire gratings, then glass gratings ruled with a diamond point; observed spectral lines in sunlight that allowed precise wavelength measurement",
                    legacy: "Underpins all modern spectroscopy: atomic, molecular, X-ray, NMR, and beyond"
                },
                labExperiment: {
                    title: "Measuring Wavelengths of Light Using a Diffraction Grating",
                    hypothesis: "The diffraction grating equation d·sin(θ) = nλ correctly predicts the angles of diffraction maxima, allowing wavelength to be determined from measured angles",
                    purpose: "Use a diffraction grating to (a) measure the wavelength of laser light, (b) identify spectral lines of a gas discharge lamp, and (c) observe the spectrum of white light",
                    variables: {
                        independent: "Order of diffraction n (and optionally, wavelength λ by using different light sources)",
                        dependent: "Angle of diffraction θ",
                        controlled: ["Same grating (known line spacing d)", "Same measurement geometry"]
                    },
                    materials: [
                        "Diffraction grating (e.g., 300 or 600 lines/mm — known N)",
                        "Laser (red and/or green) for part (a)",
                        "Gas discharge tubes: hydrogen, helium, or mercury with power supply for part (b)",
                        "White light source for part (c)",
                        "Optical bench or spectrometer",
                        "Screen and ruler (basic method) OR spectrometer with rotating table and vernier scale (advanced)",
                        "Tape measure or metre rule"
                    ],
                    safetyPrecautions: [
                        "Laser safety as above — class 2 or lower; avoid eye exposure",
                        "Gas discharge tubes operate at high voltage (few kV) — do not touch terminals when powered",
                        "Tubes become hot — handle with insulated holder after use"
                    ],
                    procedure: {
                        partA_laser: [
                            "Mount grating perpendicular to laser beam",
                            "Observe central maximum (n = 0) and first-order (n = 1) and second-order (n = 2) maxima on screen",
                            "Measure distance D from grating to screen; measure distance x of nth order maximum from central maximum",
                            "Calculate θ = arctan(x/D); use d·sin(θ) = nλ to find λ",
                            "Repeat for n = 1, 2, 3 and use mean λ"
                        ],
                        partB_spectrometer: [
                            "Set up spectrometer with diffraction grating in place of prism",
                            "Illuminate with hydrogen discharge tube",
                            "Observe and record all visible spectral lines in first order on each side",
                            "Measure angles θ for each line using the spectrometer vernier scale",
                            "Calculate λ = d·sin(θ)/n for each line",
                            "Identify lines from known hydrogen Balmer series (656 nm red, 486 nm blue-green, 434 nm violet)"
                        ],
                        partC_white_light: [
                            "Replace discharge tube with white light source",
                            "Observe continuous spectrum produced in first order",
                            "Note colour order: violet closest to centre, red furthest",
                            "Compare with prism spectrum (same colour order but grating produces better separated, purer spectrum)"
                        ]
                    },
                    gratingEquation: {
                        formula: "d·sin(θ) = nλ",
                        gratingSpacing: "d = 1/N (metres) where N is number of lines per metre",
                        example: "600 lines/mm → N = 600,000 lines/m → d = 1/600,000 = 1.67 × 10⁻⁶ m",
                        maxOrder: "n_max = floor(d/λ); beyond this sin(θ) > 1 which is impossible"
                    },
                    dataTable: [
                        ["Light Source", "Order n", "x (m)", "D (m)", "θ = arctan(x/D) (°)", "sin(θ)", "λ = d·sin(θ)/n (nm)", "Known λ (nm)", "% Error"],
                        ["Red laser", "1", "", "", "", "", "", "650", ""],
                        ["Red laser", "2", "", "", "", "", "", "650", ""],
                        ["H discharge", "1 (red)", "", "", "", "", "", "656", ""],
                        ["H discharge", "1 (blue-green)", "", "", "", "", "", "486", ""],
                        ["H discharge", "1 (violet)", "", "", "", "", "", "434", ""]
                    ],
                    expectedResults: {
                        laser: "Measured λ within 2–5% of known laser wavelength",
                        hydrogen: "Balmer series lines identified at approximately 656 nm, 486 nm, 434 nm",
                        whiteLightSpectrum: "Continuous spectrum from violet to red observed in each order"
                    },
                    errorAnalysis: {
                        systematic: [
                            "Grating not perfectly perpendicular to incident beam (cos correction needed for tilt)",
                            "Spectrometer zero error"
                        ],
                        random: [
                            "Difficulty in identifying exact centre of each spectral line",
                            "Reading the vernier scale of the spectrometer"
                        ],
                        improvements: [
                            "Measure angles on both sides of central maximum; use mean to cancel zero error",
                            "Use high-order (n = 2 or 3) for larger angles → smaller % error in angle measurement",
                            "Use spectrometer with fine vernier scale rather than ruler and screen"
                        ]
                    },
                    conclusions: [
                        "Diffraction grating equation d·sin(θ) = nλ verified for multiple orders and wavelengths",
                        "Wavelength of laser measured as λ ≈ [value] nm, consistent with specification",
                        "Hydrogen spectral lines identified, consistent with Balmer series (n=2 series of hydrogen atom)",
                        "White light produces continuous spectrum; each colour diffracts at different angle confirming colour = wavelength"
                    ],
                    realWorldApplications: [
                        "Astronomical spectroscopy: identifying elements in stars and measuring Doppler shifts",
                        "Chemical analysis: atomic emission spectroscopy in forensics and quality control",
                        "CDs and DVDs act as reflection gratings (iridescent colours from their surface)",
                        "Medical diagnostics: spectrophotometry of blood and tissue",
                        "Monitoring atmospheric composition from satellites"
                    ],
                    extensions: [
                        "Measure the Rydberg constant from hydrogen spectral lines using 1/λ = R(1/n₁² − 1/n₂²)",
                        "Use a diffraction grating to measure the speed of light using a modulated laser",
                        "Investigate X-ray diffraction from a crystal lattice (Bragg equation: 2d·sin(θ) = nλ)",
                        "Use a spectroscope to observe and identify emission spectra of common metal salts in flame tests"
                    ]
                }
            }
        };

        this.linkExperimentsToTopics();
    }

    linkExperimentsToTopics() {
        Object.entries(this.opticsExperiments).forEach(([expId, experiment]) => {
            experiment.relatedTopics.forEach(topicId => {
                if (this.opticsTopics[topicId]) {
                    if (!this.opticsTopics[topicId].relatedExperiments) {
                        this.opticsTopics[topicId].relatedExperiments = [];
                    }
                    this.opticsTopics[topicId].relatedExperiments.push({
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
            reflection: {
                'Laws of Reflection': [
                    'Measuring angles from the surface rather than from the normal',
                    'Thinking the angle of incidence must equal the angle of reflection only for smooth surfaces (the law is universal; rough surfaces scatter light in all directions but each ray still obeys the law locally)',
                    'Believing a concave mirror always produces a magnified image (it depends on object position)',
                    'Thinking a convex mirror can produce a real image (it always produces virtual images)'
                ],
                'Image Formation': [
                    'Confusing real and virtual images: a virtual image cannot be projected on a screen',
                    'Believing the image in a plane mirror is behind the glass (it is a virtual image at the same distance behind the mirror surface as the object is in front)',
                    'Thinking a plane mirror reverses up and down (it reverses front and back / depth; left-right reversal is a consequence of front-back reversal)',
                    'Confusing the focal length f with the radius of curvature R (f = R/2)'
                ]
            },
            refraction: {
                "Snell's Law": [
                    'Measuring angles from the surface rather than from the normal',
                    'Thinking light speeds up when going into a denser medium (it slows down; n = c/v, so higher n → lower v)',
                    'Believing the wavelength of light is unchanged by refraction (frequency stays the same; wavelength and speed both change)',
                    'Confusing optical density with physical density (diamond is denser than water physically and optically; oil can be optically denser than some glass)'
                ],
                'Total Internal Reflection': [
                    'Thinking TIR can occur when going from a less dense to a more dense medium (impossible — no critical angle in this direction)',
                    'Believing TIR means no light escapes whatsoever (partial reflection always occurs below critical angle; TIR gives 100% reflection only above the critical angle)',
                    'Thinking the critical angle is the same for all materials (it depends on n of both media: sin(θ_c) = n₂/n₁)'
                ]
            },
            lenses: {
                'Lens Equation': [
                    'Using the wrong sign convention — the most common error; always state which convention you are using',
                    'Thinking a diverging lens cannot form a real image (correct — it always forms virtual images for real objects)',
                    'Believing a thicker lens always has a shorter focal length (depends on both thickness and curvature radii)',
                    'Confusing the focal point with the centre of curvature (only applicable to mirrors; lenses have two focal points, one on each side)'
                ],
                'Image Formation': [
                    'Thinking the image seen through a magnifying glass is a real image (it is virtual — it cannot be projected)',
                    'Believing object distance always equals image distance (only when u = 2f)',
                    'Confusing linear magnification m with angular magnification M (used in instruments)',
                    'Thinking a camera lens always produces a magnified image (the image on the sensor is diminished; magnification < 1)'
                ]
            },
            wave_optics: {
                'Interference': [
                    'Thinking interference involves destruction of energy (energy is conserved; bright fringes have more energy, dark fringes less, but the average is the same as for a single source)',
                    'Believing any two light sources can produce sustained interference (must be coherent: same frequency and constant phase relationship)',
                    'Confusing path difference with phase difference (path difference Δ = nλ for constructive; phase difference = 2πΔ/λ)',
                    'Thinking wider slit separation always gives wider fringes (wider d → narrower fringe spacing w = λD/d)'
                ],
                'Diffraction': [
                    'Thinking diffraction only occurs with light (all waves diffract: sound, water, X-rays, electrons)',
                    'Believing more slits in a grating make the fringes closer together (more slits make each maximum sharper and brighter, not closer together — spacing depends only on d)',
                    'Confusing the order of diffraction n in the grating equation with any other n symbol',
                    'Thinking the central maximum (n = 0) is always the most intense for a grating (it is for a grating; but for single slit it has a sinc² envelope)'
                ]
            },
            dispersion_spectra: {
                'Dispersion': [
                    'Thinking a prism creates colours from white light (it separates colours already present in white light; it does not create new wavelengths)',
                    'Believing all colours travel at different speeds in vacuum (they all travel at c in vacuum; different speeds only in materials)',
                    'Thinking violet refracts less than red (violet has shorter λ, higher n, and therefore refracts MORE than red)'
                ],
                'Spectra': [
                    'Confusing emission and absorption spectra (emission: bright lines on dark; absorption: dark lines on continuous)',
                    'Thinking the electromagnetic spectrum has a definite boundary between regions (the classifications are human conventions; there are no hard boundaries)',
                    'Believing shorter wavelength EM radiation always has higher energy than longer wavelength radiation of the same type (true: E = hf = hc/λ, so shorter λ → higher E per photon)',
                    'Confusing spectral lines with the colour of the element (each element emits specific wavelengths; the colour perceived depends on which visible lines are emitted)'
                ]
            }
        };

        this.clarificationStrategies = {
            ray_diagrams: {
                method: 'Draw accurate ray diagrams with at least two standard rays; use ruler and protractor',
                effectiveness: 'Very high for reflection and refraction concepts'
            },
            analogy: {
                method: "Relate refractive index to a car wheel rolling from tarmac to sand at an angle — slower wheel turns the car",
                effectiveness: 'High for understanding why refraction occurs'
            },
            physical_demonstration: {
                method: 'Shine laser through glass block; observe bending; show TIR in semicircular block',
                effectiveness: 'Very high for refraction and TIR'
            },
            contrast_table: {
                method: 'Compare real vs virtual image, converging vs diverging lens, constructive vs destructive interference',
                effectiveness: 'High for related but distinct concepts'
            },
            sign_convention_drill: {
                method: 'Consistent use of one sign convention with colour-coded diagrams showing positive/negative distances',
                effectiveness: 'High for lens and mirror equation errors'
            },
            historical_context: {
                method: "Explain Young's experiment as a contest between Newton's particle theory and wave theory",
                effectiveness: 'Very high for motivation and conceptual understanding of wave optics'
            }
        };
    }

    initializeMetacognitivePrompts() {
        this.metacognitivePrompts = {
            beforeLearning: [
                "What do you already know about how light behaves at boundaries?",
                "Have you used a lens or mirror recently? What did you observe?",
                "What questions do you have about {topic}?",
                "How do you think {topic} might connect to what you know about waves?"
            ],
            duringLearning: [
                "Can you explain this in your own words — why does light bend at a boundary?",
                "Can you draw a ray diagram for this situation right now?",
                "How does {concept} relate to what you know about refraction / reflection?",
                "Does the equation make intuitive sense? What happens as one variable increases?"
            ],
            afterLearning: [
                "What were the three most important things you learned about {topic}?",
                "What is still confusing? Write one question you still have.",
                "How would you explain the difference between a real and a virtual image to a friend?",
                "What everyday phenomenon can you now explain that you couldn't before?"
            ],
            problemSolving: [
                "Have you drawn a ray diagram? This is almost always the first step.",
                "Which law or equation applies here — Snell's Law, thin lens equation, grating equation?",
                "Are your angles measured from the normal or the surface? Check this first.",
                "Does your answer make physical sense? Is the image on the correct side of the lens/mirror?"
            ]
        };
    }

    initializeContextualScenarios() {
        this.contextualScenarios = {
            reflection: [
                {
                    scenario: "Satellite Dish and Parabolic Reflectors",
                    context: "Satellite dishes are parabolic concave reflectors",
                    application: "All parallel signals from a distant satellite are reflected to the focal point, where the receiver is placed",
                    question: "Why must the receiver be placed at exactly the focal point of the dish?"
                },
                {
                    scenario: "Car Wing Mirror",
                    context: "Wing mirrors use convex mirrors",
                    application: "Convex mirror gives wider field of view but produces virtual, diminished images — objects appear further than they are",
                    question: "Why do wing mirrors carry the warning 'objects in mirror are closer than they appear'?"
                }
            ],
            refraction: [
                {
                    scenario: "Optical Fibre Internet",
                    context: "Billions of data bits per second are transmitted as pulses of light through fibre optic cables",
                    application: "TIR keeps light inside the glass fibre core; cladding has lower n than core; no signal loss from refraction",
                    question: "Why must the cladding of an optical fibre have a lower refractive index than the core?"
                },
                {
                    scenario: "Diamond Cut and Brilliance",
                    context: "A well-cut diamond sparkles brilliantly from all angles",
                    application: "Diamond has n = 2.42 → very small critical angle (24.4°) → almost any light entering undergoes TIR many times before exiting, producing brilliant internal reflections",
                    question: "Why does a diamond sparkle more than a piece of glass with the same shape?"
                }
            ],
            lenses: [
                {
                    scenario: "Correcting Short-sightedness (Myopia)",
                    context: "A myopic eye focuses images in front of the retina",
                    application: "Diverging (concave) lens pre-diverges light before it enters the eye, shifting the image back onto the retina; lens power is negative (in dioptres)",
                    question: "A patient has a far point of 2 m. What power lens is needed to correct their vision to infinity?"
                },
                {
                    scenario: "Camera Zoom Lens",
                    context: "A zoom lens changes focal length continuously",
                    application: "Groups of lenses move relative to each other; combined power changes; image distance to sensor stays constant by adjusting total focal length",
                    question: "If a camera lens has f = 50 mm and an object is 3 m away, how far from the lens is the image formed?"
                }
            ],
            wave_optics: [
                {
                    scenario: "Anti-Reflection Coatings on Camera Lenses",
                    context: "Camera lenses are coated to minimise reflections and maximise light transmission",
                    application: "Thin film of MgF₂ (n ≈ 1.38) coated to thickness λ/4; destructive interference of reflected rays eliminates reflection for that wavelength",
                    question: "What thickness of MgF₂ coating is needed to eliminate reflection of 550 nm green light?"
                },
                {
                    scenario: "X-ray Crystallography and DNA",
                    context: "The structure of DNA was deduced from X-ray diffraction patterns",
                    application: "X-rays (λ ≈ 0.1 nm) diffract off crystal lattice planes; Bragg equation 2d·sin(θ) = nλ; the pattern of spots reveals crystal structure",
                    question: "Why are X-rays used for crystal diffraction rather than visible light?"
                }
            ],
            dispersion_spectra: [
                {
                    scenario: "Stellar Spectroscopy — How We Know What Stars Are Made Of",
                    context: "Astronomers study starlight to determine composition, temperature, and motion of distant stars",
                    application: "Star's absorption spectrum compared with known element spectra; Doppler shift of lines reveals velocity (redshift = moving away)",
                    question: "How can astronomers determine that a star 1000 light-years away contains hydrogen without visiting it?"
                },
                {
                    scenario: "Greenhouse Effect and Climate Change",
                    context: "CO₂ and other greenhouse gases absorb specific infrared wavelengths from the Earth's surface",
                    application: "Greenhouse gases have absorption bands in the IR region; they absorb Earth's thermal radiation and re-emit it, trapping heat; spectroscopy is used to quantify CO₂ concentrations",
                    question: "Why does increasing CO₂ concentration cause warming, and how does spectroscopy help us measure this?"
                }
            ]
        };
    }

    initializeAssessmentRubrics() {
        this.assessmentRubrics = {
            knowledgeLevel: {
                remember: {
                    description: "Recall laws, equations, definitions, and units",
                    verbs: ["State", "Define", "Write", "Recall", "Name", "List"],
                    example: "State Snell's Law and define refractive index"
                },
                understand: {
                    description: "Explain physical mechanisms and optical phenomena",
                    verbs: ["Explain", "Describe", "Summarise", "Interpret", "Compare"],
                    example: "Explain why total internal reflection cannot occur when light travels from air into glass"
                },
                apply: {
                    description: "Use equations and ray diagrams to solve problems",
                    verbs: ["Calculate", "Solve", "Determine", "Construct", "Draw"],
                    example: "Calculate the image distance for an object 30 cm from a lens of focal length 10 cm"
                },
                analyze: {
                    description: "Interpret optical diagrams; derive relationships; analyse spectra",
                    verbs: ["Analyse", "Deduce", "Identify", "Sketch", "Derive", "Interpret"],
                    example: "Analyse the interference pattern produced by Young's double slits and explain each fringe"
                },
                evaluate: {
                    description: "Assess experimental methods; evaluate optical system designs",
                    verbs: ["Evaluate", "Critique", "Justify", "Assess", "Compare", "Judge"],
                    example: "Evaluate the limitations of the thin lens equation for a real thick lens"
                },
                create: {
                    description: "Design optical systems; derive equations; plan experiments",
                    verbs: ["Design", "Derive", "Plan", "Construct", "Model", "Propose"],
                    example: "Design a spectrometer using a diffraction grating to identify an unknown gas"
                }
            },
            understandingLevels: {
                novice: {
                    characteristics: [
                        "Draws rays without reference to normals",
                        "Applies Snell's Law but measures from surface not normal",
                        "Confuses real and virtual images"
                    ],
                    support: [
                        "Always start by drawing the normal to every surface",
                        "Worked ray diagram examples with colour-coded rays",
                        "Emphasise: real image = can be projected; virtual = cannot"
                    ]
                },
                developing: {
                    characteristics: [
                        "Applies Snell's Law correctly for single boundary",
                        "Draws ray diagrams for lens/mirror in familiar cases",
                        "Uses thin lens equation but confused by sign convention"
                    ],
                    support: [
                        "Novel geometries: light entering at unusual angles",
                        "Systematic sign convention practice with multiple examples",
                        "Introduce concept of optical path and interference"
                    ]
                },
                proficient: {
                    characteristics: [
                        "Solves multi-step refraction/lens problems correctly",
                        "Predicts image type and position for any object distance",
                        "Understands and applies wave optics qualitatively"
                    ],
                    support: [
                        "Optical instrument design problems",
                        "Quantitative wave optics (calculating λ, d, w)",
                        "Evaluation of experimental error in optics measurements"
                    ]
                },
                expert: {
                    characteristics: [
                        "Derives lens equation from Snell's Law",
                        "Designs multi-element optical systems",
                        "Links atomic spectra to quantum energy levels"
                    ],
                    support: [
                        "Open-ended instrument design (spectrometer, telescope)",
                        "Mathematical derivations (grating resolving power, chromatic aberration)",
                        "Research-level spectroscopy analysis"
                    ]
                }
            }
        };

        this.assessmentQuestions = {
            reflection: {
                remember: "State the two laws of reflection",
                understand: "Explain why a convex mirror always produces a virtual, diminished image regardless of object position",
                apply: "An object is placed 20 cm from a concave mirror of focal length 12 cm. Calculate the image distance and magnification",
                analyze: "Sketch a ray diagram for an object placed between the focal point and a concave mirror. Describe and explain the image formed",
                evaluate: "A student says 'a plane mirror forms the image at its surface'. Evaluate this statement",
                create: "Design a system using two plane mirrors to allow a person to see around a corner. Draw a ray diagram"
            },
            refraction: {
                remember: "Write Snell's Law and define the refractive index of a material",
                understand: "Explain why light slows down when entering glass from air, and why this causes it to bend toward the normal",
                apply: "Light strikes a glass surface (n = 1.5) at 40° to the normal. Calculate the angle of refraction inside the glass",
                analyze: "A ray of light travels from glass (n = 1.6) to air. Determine the critical angle and describe what happens at angles above and below this value",
                evaluate: "Evaluate the advantages of using optical fibres rather than copper cables for data transmission",
                create: "Design an experiment to measure the refractive index of a liquid using a semicircular perspex dish filled with the liquid"
            },
            lenses: {
                remember: "Write the thin lens equation and define focal length and optical power",
                understand: "Explain why a converging lens acts as a magnifying glass only when the object is placed inside the focal length",
                apply: "A converging lens has f = 15 cm. An object is placed 25 cm from the lens. Find the image position, type, and magnification",
                analyze: "Sketch ray diagrams for a converging lens with object at: (a) beyond 2F, (b) between F and 2F, (c) inside F. Describe each image",
                evaluate: "A myopic patient needs −2.0 D lenses. What does this tell you about the patient's far point?",
                create: "Design a simple refracting telescope using two converging lenses. Specify suitable focal lengths and calculate the angular magnification"
            },
            wave_optics: {
                remember: "State the condition for constructive interference in terms of path difference",
                understand: "Explain why two independent light bulbs cannot produce a sustained interference pattern",
                apply: "In a Young's double-slit experiment, d = 0.30 mm, D = 1.5 m, w = 3.2 mm. Calculate the wavelength of the light",
                analyze: "A diffraction grating has 500 lines/mm. For light of λ = 589 nm, find all possible diffraction angles",
                evaluate: "Compare the interference patterns produced by a double slit and a diffraction grating with the same slit spacing. Which is preferable for measuring wavelength, and why?",
                create: "Plan an experiment using a diffraction grating to identify two unknown monochromatic light sources"
            },
            dispersion_spectra: {
                remember: "List the regions of the electromagnetic spectrum in order of increasing frequency",
                understand: "Explain why a glass prism separates white light into a spectrum",
                apply: "A photon has wavelength 450 nm. Calculate its frequency and energy (h = 6.63 × 10⁻³⁴ J·s, c = 3 × 10⁸ m/s)",
                analyze: "Sketch the emission spectrum of hydrogen (Balmer series) and explain its origin in terms of electron energy levels",
                evaluate: "Compare emission and absorption spectra. Explain how both can be used to identify an element",
                create: "Design an investigation using a spectroscope to identify an unknown element from its emission spectrum"
            }
        };
    }

    // ==========================================
    // TOPIC HANDLER METHODS
    // ==========================================

    handleReflection(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Reflection of Light",
            category: 'optics',
            summary: "Reflection occurs when light bounces off a surface. The laws of reflection state that (1) the angle of incidence equals the angle of reflection, both measured from the normal, and (2) the incident ray, reflected ray, and normal are coplanar. Curved mirrors (concave and convex) form images that can be predicted using ray diagrams and the mirror equation.",

            definitions: {
                incidentRay: {
                    symbol: "—",
                    definition: "The ray of light travelling toward the reflecting surface",
                    note: "Always draw from the object toward the mirror"
                },
                reflectedRay: {
                    symbol: "—",
                    definition: "The ray bouncing away from the reflecting surface after reflection",
                    note: "Always draw away from the mirror"
                },
                normal: {
                    symbol: "—",
                    definition: "A line drawn perpendicular to the mirror surface at the exact point of incidence",
                    note: "ALL angles are measured from the normal — NEVER from the surface"
                },
                angleOfIncidence: {
                    symbol: "θᵢ",
                    unit: "degrees (°) or radians (rad)",
                    definition: "The angle between the incident ray and the normal at the point of incidence"
                },
                angleOfReflection: {
                    symbol: "θᵣ",
                    unit: "degrees (°) or radians (rad)",
                    definition: "The angle between the reflected ray and the normal at the point of incidence"
                },
                planeMirror: {
                    definition: "A flat, smooth, reflective surface",
                    imageProperties: "Virtual, upright, laterally inverted, same size as object, same distance behind mirror as object is in front"
                },
                concaveMirror: {
                    definition: "A curved mirror with the reflective surface on the inner (hollow) side; converging mirror",
                    focalLength: "f > 0 (positive)"
                },
                convexMirror: {
                    definition: "A curved mirror with the reflective surface on the outer side; diverging mirror",
                    focalLength: "f < 0 (negative)"
                },
                focalPoint: {
                    symbol: "F",
                    definition: "For concave mirror: the point where parallel rays converge after reflection. For convex mirror: the point from which parallel rays appear to diverge after reflection",
                    location: "At distance f from the mirror surface (pole)"
                },
                focalLength: {
                    symbol: "f",
                    unit: "metres (m)",
                    definition: "Distance from the pole of the mirror to the focal point",
                    relation: "f = R/2 where R = radius of curvature"
                },
                magnification: {
                    symbol: "m",
                    unit: "dimensionless (ratio)",
                    definition: "Ratio of image height to object height",
                    formula: "m = hᵢ/hₒ = −v/u",
                    interpretation: "+m: upright image;  −m: inverted image;  |m| > 1: magnified;  |m| < 1: diminished"
                }
            },

            lawsOfReflection: {
                firstLaw: {
                    statement: "The incident ray, the reflected ray, and the normal at the point of incidence all lie in the same plane",
                    meaning: "Reflection is always two-dimensional — the geometry stays in one plane"
                },
                secondLaw: {
                    statement: "The angle of incidence is equal to the angle of reflection",
                    equation: "θᵢ = θᵣ",
                    crucialNote: "BOTH angles must be measured from the normal, NOT from the mirror surface. This is the single most common error.",
                    verification: "Verified experimentally for all angles from 0° to 90° and for all smooth reflecting surfaces"
                },
                note: "These laws apply to any type of wave (sound, water, electromagnetic), not just light"
            },

            mirrorEquation: {
                equation: "1/v + 1/u = 1/f = 2/R",
                signConvention: {
                    convention: "Real is Positive",
                    objectDistance_u: "Positive if object is in front of the mirror (real object) — almost always positive",
                    imageDistance_v: "Positive if image is in front of the mirror (real image, on same side as object); Negative if behind mirror (virtual image)",
                    focalLength_f: "Positive for concave mirror (converging); Negative for convex mirror (diverging)",
                    radiusOfCurvature_R: "Positive for concave; Negative for convex"
                },
                magnification: {
                    formula: "m = −v/u = hᵢ/hₒ",
                    sign: "Negative m → inverted image (real); Positive m → upright image (virtual)"
                },
                rearrangements: [
                    "f = uv/(u + v)",
                    "u = vf/(v − f)",
                    "v = uf/(u − f)"
                ]
            },

            imageFormationSummary: {
                concaveMirror: [
                    { position: "u > 2f", image: "Real, inverted, diminished", where: "f < v < 2f" },
                    { position: "u = 2f", image: "Real, inverted, same size", where: "v = 2f" },
                    { position: "f < u < 2f", image: "Real, inverted, magnified", where: "v > 2f" },
                    { position: "u = f", image: "No image (rays parallel)", where: "v → ∞" },
                    { position: "u < f", image: "Virtual, upright, magnified", where: "v negative (behind mirror)" }
                ],
                convexMirror: [
                    { position: "Any u", image: "Virtual, upright, diminished", where: "Behind the mirror (|v| < f)" }
                ]
            },

            rayDiagramRules: {
                concave: [
                    { ray: "Ray parallel to principal axis", after: "Reflects through focal point F" },
                    { ray: "Ray through focal point F", after: "Reflects parallel to principal axis" },
                    { ray: "Ray through centre of curvature C", after: "Reflects back along its own path" },
                    { ray: "Ray striking the pole at angle θᵢ", after: "Reflects at equal angle θᵣ on other side of principal axis" }
                ],
                convex: [
                    { ray: "Ray parallel to principal axis", after: "Reflects as if it came from F (behind mirror)" },
                    { ray: "Ray aimed at focal point F (behind mirror)", after: "Reflects parallel to principal axis" },
                    { ray: "Ray aimed at centre of curvature C", after: "Reflects back along same path" }
                ],
                generalTip: "Always draw at least TWO rays. The image is located where these rays (or their extensions for virtual images) intersect."
            },

            workedExamples: [
                {
                    title: "Concave Mirror — Real Image",
                    problem: "An object 5 cm tall is placed 30 cm in front of a concave mirror of focal length 10 cm. Find the image position, magnification, and describe the image.",
                    given: "u = 30 cm (real object, positive), f = +10 cm (concave)",
                    solution: {
                        step1: "Apply mirror equation: 1/v + 1/u = 1/f → 1/v + 1/30 = 1/10",
                        step2: "1/v = 1/10 − 1/30 = 3/30 − 1/30 = 2/30 → v = 15 cm",
                        step3: "v = +15 cm → real image, 15 cm in front of the mirror",
                        step4: "Magnification: m = −v/u = −15/30 = −0.5",
                        step5: "m = −0.5: image is inverted (negative) and diminished (|m| < 1)",
                        step6: "Image height = m × object height = −0.5 × 5 = −2.5 cm (inverted, 2.5 cm tall)",
                        check: "Object is beyond 2f (u = 30 > 2×10 = 20): expect real, inverted, diminished. ✓"
                    }
                },
                {
                    title: "Concave Mirror — Virtual Image (Inside F)",
                    problem: "An object is placed 6 cm in front of a concave mirror of focal length 10 cm. Find the image.",
                    given: "u = 6 cm, f = +10 cm",
                    solution: {
                        step1: "1/v + 1/6 = 1/10 → 1/v = 1/10 − 1/6 = 3/30 − 5/30 = −2/30",
                        step2: "v = −15 cm → negative → virtual image, 15 cm behind the mirror",
                        step3: "m = −v/u = −(−15)/6 = +2.5",
                        step4: "m = +2.5: upright (positive) and magnified (|m| > 1) — acts as a shaving/makeup mirror"
                    }
                },
                {
                    title: "Convex Mirror — Always Virtual",
                    problem: "A car is 4 m from a convex wing mirror of focal length 2 m. Find the image.",
                    given: "u = 4 m, f = −2 m (convex → negative f)",
                    solution: {
                        step1: "1/v + 1/4 = 1/(−2) → 1/v = −1/2 − 1/4 = −3/4",
                        step2: "v = −4/3 ≈ −1.33 m → virtual, behind the mirror, 1.33 m from the surface",
                        step3: "m = −v/u = −(−1.33)/4 = +0.33",
                        step4: "Image is upright (+) and diminished (m = 0.33 < 1) — objects appear further away than they are"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Measuring angles from the mirror surface, not the normal",
                    consequence: "Completely wrong angle values",
                    fix: "Draw the normal first; always measure θᵢ and θᵣ from the normal"
                },
                {
                    error: "Using f = R instead of f = R/2",
                    consequence: "Wrong focal length and all subsequent calculations incorrect",
                    fix: "Remember: focal length is half the radius of curvature — f = R/2"
                },
                {
                    error: "Wrong sign for f (using positive f for convex mirror)",
                    consequence: "Wrong image type and position calculated",
                    fix: "Concave (converging) → f > 0; Convex (diverging) → f < 0 in real-is-positive convention"
                },
                {
                    error: "Wrong sign for v and misidentifying real vs virtual image",
                    consequence: "Image described as wrong type",
                    fix: "v > 0 → real image (in front of mirror); v < 0 → virtual image (behind mirror)"
                },
                {
                    error: "Confusing the magnification formula: using m = v/u instead of m = −v/u",
                    consequence: "Wrong sign on magnification; incorrect image orientation",
                    fix: "m = −v/u for mirrors (the negative sign arises from the geometry of reflection)"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the two laws of reflection",
                    "Define focal length and state how it relates to the radius of curvature",
                    "Write the mirror equation"
                ],
                understanding: [
                    "Explain why a convex mirror always forms a diminished, virtual image regardless of where the object is placed",
                    "Explain the difference between a real and a virtual image",
                    "Describe the image formed by a concave mirror when the object is at the focal point"
                ],
                application: [
                    "An object is 40 cm from a concave mirror of focal length 15 cm. Find the image position, magnification, and describe the image",
                    "A concave mirror produces a real image 3 times the size of the object. If f = 12 cm, find u and v",
                    "A convex mirror of focal length 25 cm is used as a security mirror. An object is 3 m away. Find the image distance and magnification"
                ],
                analysis: [
                    "Draw ray diagrams for an object placed (a) beyond C, (b) between F and C, and (c) inside F in front of a concave mirror. Describe each image",
                    "Sketch the variation of image distance v with object distance u for a concave mirror as u decreases from infinity to zero"
                ]
            },

            applications: [
                "Reflecting telescopes (Newtonian, Cassegrain): concave primary mirror replaces objective lens",
                "Car headlights: concave parabolic reflector focuses light from bulb into a parallel beam",
                "Car wing mirrors: convex for wide field of view",
                "Security mirrors in shops: convex for wide-angle surveillance",
                "Dental and ENT mirrors: small concave mirrors for magnification",
                "Solar concentrators: large concave parabolic mirrors to focus sunlight"
            ]
        };

        if (/concave|convex.*mirror|curved.*mirror/i.test(input)) {
            content.focus = "curvedMirrors";
            content.highlightedSection = { mirrorEquation: content.mirrorEquation, imageFormation: content.imageFormationSummary };
        } else if (/ray.*diagram|image.*form/i.test(input)) {
            content.focus = "rayDiagrams";
            content.highlightedSection = content.rayDiagramRules;
        } else if (/law.*reflect|angle.*incidence/i.test(input)) {
            content.focus = "lawsOfReflection";
            content.highlightedSection = content.lawsOfReflection;
        } else if (/magnif/i.test(input)) {
            content.focus = "magnification";
            content.highlightedSection = content.mirrorEquation.magnification;
        }

        return content;
    }

    handleRefraction(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Refraction of Light",
            category: 'optics',
            summary: "Refraction is the change in direction of light as it crosses a boundary between two media of different optical densities. It occurs because light travels at different speeds in different materials. Snell's Law quantifies refraction: n₁ sin(θ₁) = n₂ sin(θ₂). When light travels from a denser medium to a less dense one at angles greater than the critical angle, total internal reflection (TIR) occurs — the basis of optical fibres.",

            definitions: {
                refraction: {
                    definition: "The bending of light as it passes from one transparent medium into another due to a change in its speed",
                    cause: "Light travels at different speeds in different media (slower in denser media)",
                    note: "Frequency is unchanged by refraction; speed and wavelength both change"
                },
                refractiveIndex: {
                    symbol: "n",
                    unit: "dimensionless (no units)",
                    definition: "The ratio of the speed of light in vacuum to the speed of light in the medium",
                    formula: "n = c/v",
                    absoluteRefractiveIndex: "Measured relative to vacuum; always ≥ 1",
                    relativeRefractiveIndex: "₁n₂ = n₂/n₁ = v₁/v₂ = λ₁/λ₂",
                    physicalMeaning: "Higher n → light travels more slowly → medium is more optically dense"
                },
                opticalDensity: {
                    definition: "A measure of how much a medium slows light (NOT the same as physical/mass density)",
                    higherOpticalDensity: "Higher n; light travels slower; bends toward normal when entering"
                },
                criticalAngle: {
                    symbol: "θ_c",
                    unit: "degrees (°)",
                    definition: "The angle of incidence (in the denser medium) at which the refracted ray travels along the boundary (angle of refraction = 90°)",
                    formula: "sin(θ_c) = n₂/n₁  or  sin(θ_c) = 1/n (when second medium is air, n₂ = 1)",
                    derivation: "Apply Snell's law with θ₂ = 90°: n₁ sin(θ_c) = n₂ sin(90°) = n₂ → sin(θ_c) = n₂/n₁"
                },
                totalInternalReflection: {
                    abbreviation: "TIR",
                    definition: "Complete reflection of a light ray back into the denser medium at a boundary, with no refracted ray",
                    conditions: [
                        "Light must travel from a more optically dense medium to a less optically dense medium (n₁ > n₂)",
                        "The angle of incidence must exceed the critical angle: θᵢ > θ_c"
                    ],
                    result: "100% of light is reflected; no energy is lost at the boundary"
                }
            },

            snellsLaw: {
                equation: "n₁ sin(θ₁) = n₂ sin(θ₂)",
                equivalentForms: [
                    "sin(θ₁)/sin(θ₂) = n₂/n₁",
                    "n₁/n₂ = v₁/v₂ = λ₁/λ₂",
                    "n = sin(θᵢ)/sin(θᵣ) (when medium 1 is air, n₁ ≈ 1)"
                ],
                variables: {
                    n1: "Refractive index of the first (incident) medium",
                    n2: "Refractive index of the second (transmitted) medium",
                    theta1: "Angle of incidence in medium 1 (from normal)",
                    theta2: "Angle of refraction in medium 2 (from normal)"
                },
                physicalRules: [
                    "n₂ > n₁ (entering denser medium): θ₂ < θ₁ → light bends TOWARD the normal",
                    "n₂ < n₁ (entering less dense medium): θ₂ > θ₁ → light bends AWAY from the normal",
                    "θ₁ = 0 (normal incidence): θ₂ = 0 → light passes straight through without bending",
                    "Frequency of light is UNCHANGED; wavelength λ changes as λ₂ = λ₁ × (n₁/n₂)"
                ],
                whatChanges: {
                    changes: ["Speed (v = c/n)", "Wavelength (λ = λ₀/n)", "Direction (unless at normal incidence)"],
                    unchanged: ["Frequency (f)", "Colour perception", "Energy of photons"]
                }
            },

            totalInternalReflection: {
                criticalAngleFormula: {
                    formula: "sin(θ_c) = n₂/n₁",
                    forAirInterface: "sin(θ_c) = 1/n (since n_air ≈ 1)",
                    derivedFrom: "Snell's Law with θ₂ = 90°: n₁ sin(θ_c) = n₂ → sin(θ_c) = n₂/n₁"
                },
                behaviourAtBoundary: [
                    { angle: "θᵢ < θ_c", behaviour: "Partial refraction (most light transmitted) + partial reflection" },
                    { angle: "θᵢ = θ_c", behaviour: "Refracted ray grazes the boundary at 90°; very weak refracted ray" },
                    { angle: "θᵢ > θ_c", behaviour: "Total Internal Reflection — all light reflected, no refracted ray" }
                ],
                applications: {
                    opticalFibres: {
                        principle: "Light is guided along a glass or plastic core by repeated TIR at the core-cladding boundary",
                        requirement: "n_core > n_cladding",
                        types: ["Monomode (very thin core, single light path): for long-distance telecoms", "Multimode (wider core): for shorter distances, medical imaging"],
                        advantages: ["Very low signal loss", "Immune to electromagnetic interference", "High bandwidth", "Lightweight"]
                    },
                    diamond: "Very high n (2.42) → very small θ_c (24.4°) → almost any ray undergoes TIR multiple times → brilliant sparkle",
                    prismBinoculars: "45-45-90 prism: light hits hypotenuse face at 45° > θ_c for glass (≈41.8°) → TIR twice; folds light path without needing mirrors",
                    endoscopes: "Bundles of optical fibres transmit images from inside the body to outside",
                    catEyeReflectors: "Road studs use TIR in glass or plastic to reflect headlight beams back toward driver"
                }
            },

            refractiveIndexValues: {
                vacuum: "n = 1.000 (exact)",
                air: "n ≈ 1.0003 ≈ 1.00 for calculations",
                water: "n ≈ 1.33; θ_c(water→air) ≈ 48.8°",
                ice: "n ≈ 1.31",
                crownGlass: "n ≈ 1.52; θ_c(glass→air) ≈ 41.8°",
                flintGlass: "n ≈ 1.61–1.70",
                perspex: "n ≈ 1.49",
                diamond: "n ≈ 2.42; θ_c(diamond→air) ≈ 24.4°"
            },

            dispersionNote: {
                definition: "Refractive index varies with wavelength: n = n(λ)",
                effect: "Different wavelengths refract by different amounts; white light is dispersed into a spectrum",
                trend: "For most glass: n_violet > n_red (violet bends more than red)",
                consequence: "This is the cause of chromatic aberration in lenses and the splitting of white light by a prism"
            },

            workedExamples: [
                {
                    title: "Refraction at a Glass-Air Boundary (Snell's Law)",
                    problem: "Light in air strikes a glass surface (n = 1.52) at an angle of incidence of 35°. Find the angle of refraction.",
                    given: "n₁ = 1.00 (air), n₂ = 1.52, θ₁ = 35°",
                    solution: {
                        step1: "Apply Snell's Law: n₁ sin(θ₁) = n₂ sin(θ₂)",
                        step2: "1.00 × sin(35°) = 1.52 × sin(θ₂)",
                        step3: "sin(θ₂) = sin(35°)/1.52 = 0.5736/1.52 = 0.3774",
                        step4: "θ₂ = arcsin(0.3774) = 22.2°",
                        check: "θ₂ < θ₁ ✓ (light bending toward normal as it enters denser medium)"
                    }
                },
                {
                    title: "Finding the Refractive Index",
                    problem: "Light in air hits a perspex block. θᵢ = 50°, θᵣ = 31°. Find n of perspex.",
                    given: "n₁ = 1.00 (air), θ₁ = 50°, θ₂ = 31°",
                    solution: {
                        step1: "n = sin(θᵢ)/sin(θᵣ) = sin(50°)/sin(31°)",
                        step2: "n = 0.7660/0.5150 = 1.49",
                        conclusion: "n(perspex) ≈ 1.49"
                    }
                },
                {
                    title: "Critical Angle and TIR",
                    problem: "A glass block has n = 1.65. (a) Calculate the critical angle for glass-air. (b) A ray inside the glass hits the surface at 38°. What happens?",
                    solution: {
                        partA: {
                            step1: "sin(θ_c) = 1/n = 1/1.65 = 0.606",
                            step2: "θ_c = arcsin(0.606) = 37.3°"
                        },
                        partB: {
                            step1: "θᵢ = 38° > θ_c = 37.3°",
                            step2: "TIR occurs — all light is reflected back into the glass; no refracted ray exits"
                        }
                    }
                },
                {
                    title: "Optical Fibre — Minimum Angle for TIR",
                    problem: "An optical fibre has core n = 1.55 and cladding n = 1.42. Calculate the critical angle at the core-cladding boundary.",
                    given: "n₁ = 1.55 (core), n₂ = 1.42 (cladding)",
                    solution: {
                        step1: "sin(θ_c) = n₂/n₁ = 1.42/1.55 = 0.916",
                        step2: "θ_c = arcsin(0.916) = 66.4°",
                        conclusion: "Any ray striking the core-cladding boundary at more than 66.4° to the normal will undergo TIR and be guided along the fibre"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Measuring angles from the surface instead of the normal",
                    consequence: "Completely wrong results",
                    fix: "Always draw the normal first; measure all angles from the normal"
                },
                {
                    error: "Confusing which medium has the larger angle",
                    consequence: "Wrong direction of bending",
                    fix: "The medium with LARGER n has the SMALLER angle (light closer to normal when in denser medium)"
                },
                {
                    error: "Thinking wavelength is unchanged during refraction",
                    consequence: "Incorrect understanding of colour and dispersion",
                    fix: "Frequency is constant; both speed and wavelength change: v = fλ; since f constant and v decreases, λ also decreases in denser medium"
                },
                {
                    error: "Applying TIR when light goes from less dense to more dense",
                    consequence: "TIR condition incorrectly identified",
                    fix: "TIR only when going FROM denser (higher n) TO less dense (lower n) AND θᵢ > θ_c"
                },
                {
                    error: "Using sin(θ_c) = n (instead of 1/n) when second medium is air",
                    consequence: "Critical angle calculated incorrectly",
                    fix: "sin(θ_c) = n₂/n₁ = 1/n (when going from glass/n to air/1)"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write Snell's Law and define refractive index",
                    "Write the formula for critical angle in terms of refractive index",
                    "State two conditions for total internal reflection to occur"
                ],
                understanding: [
                    "Explain why light bends toward the normal when entering a more optically dense medium",
                    "Explain why optical fibres use TIR rather than partial reflection to guide light",
                    "Explain why the frequency of light does not change when it refracts, but the wavelength does"
                ],
                application: [
                    "A ray of light travels from water (n = 1.33) into air. If the angle of incidence is 30°, find the angle of refraction",
                    "Calculate the critical angle for a water-air surface. What happens at this angle?",
                    "Light enters a glass block (n = 1.6) at 45°. Find the angle inside the glass. Is TIR possible when this ray hits another glass surface?"
                ],
                analysis: [
                    "A diamond (n = 2.42) and an identical-shaped piece of glass (n = 1.52) are compared. Explain why the diamond sparkles much more brilliantly",
                    "Explain with a diagram how a prism can be used as a perfect reflector using TIR, and why this is preferable to a silvered mirror"
                ]
            },

            applications: [
                "Optical fibres (telecommunications, endoscopy, internet infrastructure)",
                "Spectacles and contact lenses",
                "Prism binoculars and periscopes",
                "Mirages (atmospheric refraction / TIR in hot air layers)",
                "Diamond cutting and gemstone design",
                "Camera lens design and anti-reflection coatings"
            ]
        };

        if (/total.*internal|critical.*angle|TIR/i.test(input)) {
            content.focus = "totalInternalReflection";
            content.highlightedSection = content.totalInternalReflection;
        } else if (/optical.*fibre|fiber/i.test(input)) {
            content.focus = "opticalFibres";
            content.highlightedSection = content.totalInternalReflection.applications.opticalFibres;
        } else if (/snell|refractive.*index|refract/i.test(input)) {
            content.focus = "snellsLaw";
            content.highlightedSection = content.snellsLaw;
        } else if (/dispers/i.test(input)) {
            content.focus = "dispersion";
            content.highlightedSection = content.dispersionNote;
        }

        return content;
    }

    handleLenses(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Lenses and Image Formation",
            category: 'optics',
            summary: "Lenses form images by refracting light at curved surfaces. Converging (convex) lenses bring parallel rays to a real focal point; diverging (concave) lenses spread parallel rays. The thin lens equation 1/f = 1/v − 1/u (or 1/f = 1/v + 1/u depending on sign convention) relates focal length, image distance, and object distance. Optical instruments combine lenses to achieve magnification or focus.",

            definitions: {
                convergingLens: {
                    description: "A lens thicker at the centre than edges; refracts parallel rays to meet at a real focal point",
                    shape: "Biconvex, plano-convex, or converging meniscus",
                    focalLength: "f > 0 (positive) in the real-is-positive convention",
                    symbol: "Drawn as a line with outward-pointing arrowheads"
                },
                divergingLens: {
                    description: "A lens thinner at the centre than edges; refracts parallel rays so they appear to come from a virtual focal point",
                    shape: "Biconcave, plano-concave, or diverging meniscus",
                    focalLength: "f < 0 (negative)",
                    symbol: "Drawn as a line with inward-pointing arrowheads"
                },
                focalPoint: {
                    symbol: "F",
                    definition: "For converging lens: the point where parallel rays (from infinity) converge after passing through the lens. For diverging lens: the point from which parallel rays appear to diverge after passing through",
                    note: "A thin lens has two focal points, one on each side, both at distance f from the optical centre"
                },
                focalLength: {
                    symbol: "f",
                    unit: "metres (m) or centimetres (cm)",
                    definition: "Distance from the optical centre to the focal point",
                    sign: "f > 0: converging lens; f < 0: diverging lens"
                },
                opticalCentre: {
                    symbol: "O",
                    definition: "The geometric centre of the lens; any ray passing through O is undeviated"
                },
                objectDistance: {
                    symbol: "u",
                    unit: "metres (m) or centimetres (cm)",
                    signConvention: "Real-is-positive: u > 0 for real object (on incident side of lens)"
                },
                imageDistance: {
                    symbol: "v",
                    unit: "metres (m) or centimetres (cm)",
                    signConvention: "v > 0: real image (on opposite side from object); v < 0: virtual image (same side as object)"
                },
                magnification: {
                    symbol: "m",
                    unit: "dimensionless",
                    linearMagnification: "m = hᵢ/hₒ = v/u",
                    sign: "+m: upright image; −m: inverted image; |m| > 1: magnified; |m| < 1: diminished"
                },
                opticalPower: {
                    symbol: "P",
                    unit: "dioptres (D) = m⁻¹",
                    definition: "P = 1/f (where f is in metres)",
                    sign: "P > 0: converging; P < 0: diverging",
                    combinedLenses: "P_total = P₁ + P₂ + P₃ (for thin lenses in contact)"
                }
            },

            lensEquation: {
                thinLensEquation: {
                    form1: "1/f = 1/v − 1/u  (using u negative for real object: New Cartesian convention, common in UK A-level)",
                    form2: "1/f = 1/v + 1/u  (using u positive for real object: Real-is-positive convention)",
                    note: "Both forms give the same answers when used consistently. ALWAYS state which convention you are using.",
                    recommendation: "Use: 1/f = 1/v + 1/u with u, v, f all positive for real objects/real images/converging lenses"
                },
                magnification: {
                    formula: "m = v/u  (real-is-positive)  OR  m = −v/u  (New Cartesian where u is negative)",
                    note: "The sign of m indicates orientation: check against your sign convention"
                },
                opticalPower: {
                    formula: "P = 1/f (f in metres) → P in dioptres (D)",
                    combined: "P_total = P₁ + P₂ (thin lenses in contact)",
                    spectacles: "Lens prescription: P = −2.5 D means diverging lens with f = −0.4 m (for myopia)"
                }
            },

            imageFormationConverging: {
                table: [
                    { u: "u → ∞ (very distant object)", v: "v = f", image: "Real, inverted, point image at focal point" },
                    { u: "u > 2f", v: "f < v < 2f", image: "Real, inverted, diminished" },
                    { u: "u = 2f", v: "v = 2f", image: "Real, inverted, same size" },
                    { u: "f < u < 2f", v: "v > 2f", image: "Real, inverted, magnified" },
                    { u: "u = f", v: "v → ∞", image: "No image formed; rays emerge parallel" },
                    { u: "u < f", v: "v negative (virtual)", image: "Virtual, upright, magnified (magnifying glass)" }
                ],
                memoryAid: "The closer the object to the lens (but still beyond F), the further away and more magnified the real image"
            },

            imageFormationDiverging: {
                table: [
                    { u: "Any u", v: "0 < v < f (virtual)", image: "Virtual, upright, diminished — ALWAYS, regardless of u" }
                ],
                note: "A diverging lens ALWAYS produces a virtual, upright, diminished image for any real object"
            },

            rayDiagramRules: {
                converging: [
                    "Ray 1: Parallel to principal axis → after the lens, passes through the far focal point F₂",
                    "Ray 2: Through the optical centre O → continues straight with no deviation",
                    "Ray 3: Through the near focal point F₁ → after the lens, emerges parallel to the principal axis"
                ],
                diverging: [
                    "Ray 1: Parallel to principal axis → after the lens, diverges as if coming from the near focal point F₁",
                    "Ray 2: Through the optical centre O → continues straight with no deviation",
                    "Ray 3: Aimed at the far focal point F₂ → after the lens, emerges parallel to the principal axis"
                ],
                procedure: [
                    "Step 1: Draw the principal axis and the lens (with appropriate symbol)",
                    "Step 2: Mark F on both sides; mark 2F on both sides",
                    "Step 3: Draw the object as an arrow from the axis",
                    "Step 4: Draw Ray 1 (parallel → through F₂ after lens)",
                    "Step 5: Draw Ray 2 (through O → straight)",
                    "Step 6: Where rays intersect (or extensions for virtual) = image position",
                    "Step 7: Draw image as arrow, noting whether it is erect or inverted"
                ]
            },

            opticalInstruments: {
                magnifyingGlass: {
                    lensType: "Single converging lens",
                    objectPosition: "Inside focal length (u < f)",
                    image: "Virtual, upright, magnified",
                    angularMagnification: "M = D/f (D = 25 cm = 0.25 m, near point of normal eye)",
                    example: "f = 5 cm → M = 25/5 = ×5"
                },
                compoundMicroscope: {
                    objective: "Short focal length (f_obj ≈ 5–20 mm); object just outside F_obj → real, magnified intermediate image",
                    eyepiece: "Acts as magnifier for the intermediate image; f_eye > f_obj",
                    totalMagnification: "M = m_obj × M_eye = (v_obj/u_obj) × (D/f_eye)",
                    tubeLengthNote: "Intermediate image formed at eyepiece's focal point for relaxed viewing"
                },
                astronomicalTelescope: {
                    objective: "Large aperture, long focal length converging lens; forms real image of distant object at F_obj",
                    eyepiece: "Short focal length converging lens; F_obj coincides with F_eye for parallel light output",
                    angularMagnification: "M = f_obj/f_eye",
                    normalAdjustment: "F_obj and F_eye coincide; image at infinity; relaxed viewing",
                    example: "f_obj = 1000 mm, f_eye = 25 mm → M = ×40"
                },
                camera: {
                    description: "Converging lens system forms real, inverted, diminished image on sensor/film",
                    focussing: "Adjust v (lens-sensor distance) to get sharp image for given u",
                    aperture: "f-number controls light gathering and depth of field"
                },
                humanEye: {
                    lens: "Crystalline lens + cornea combine as converging system; adjustable focal length",
                    retina: "Acts as the 'sensor'; image must form here for clear vision",
                    accommodation: "Ciliary muscles change lens shape → change f → focus at different distances",
                    nearPoint: "Closest comfortable focus ≈ 25 cm",
                    farPoint: "Furthest distance of comfortable focus; ∞ for normal eye",
                    defects: {
                        myopia: { problem: "Far point < ∞; image of distant object forms in front of retina", correction: "Diverging lens (negative power)" },
                        hypermetropia: { problem: "Near point > 25 cm; image of near object would form behind retina", correction: "Converging lens (positive power)" }
                    }
                }
            },

            workedExamples: [
                {
                    title: "Converging Lens — Real Image",
                    problem: "An object is 24 cm from a converging lens of focal length 8 cm. Find image distance, magnification, and describe the image.",
                    given: "u = 24 cm, f = +8 cm",
                    solution: {
                        step1: "1/f = 1/v + 1/u  →  1/8 = 1/v + 1/24",
                        step2: "1/v = 1/8 − 1/24 = 3/24 − 1/24 = 2/24 = 1/12",
                        step3: "v = 12 cm (positive → real image, on the far side of the lens)",
                        step4: "m = v/u = 12/24 = 0.5",
                        step5: "m = 0.5: upright? No — real image → inverted; diminished (m < 1)",
                        check: "u = 24 = 3f; between 2f (16 cm) and 3f (24 cm)... actually u = 3f > 2f → image between F and 2F, real, inverted, diminished ✓"
                    }
                },
                {
                    title: "Magnifying Glass — Virtual Image",
                    problem: "A stamp is placed 6 cm from a converging lens of focal length 10 cm. Find image position and magnification.",
                    given: "u = 6 cm (< f = 10 cm → inside focal length), f = +10 cm",
                    solution: {
                        step1: "1/10 = 1/v + 1/6  →  1/v = 1/10 − 1/6 = 3/30 − 5/30 = −2/30",
                        step2: "v = −15 cm (negative → virtual image, on same side as object)",
                        step3: "m = v/u = (−15)/6 = −2.5",
                        step4: "Virtual image, upright (for virtual images, m is negative in this convention → check: image is virtual, upright). Image is 2.5× magnified at 15 cm from lens.",
                        note: "In real-is-positive convention: m = |v|/u = 15/6 = 2.5 for a virtual, upright, magnified image"
                    }
                },
                {
                    title: "Diverging Lens",
                    problem: "An object 30 cm from a diverging lens of focal length 15 cm. Find the image.",
                    given: "u = 30 cm, f = −15 cm (diverging → negative f)",
                    solution: {
                        step1: "1/(−15) = 1/v + 1/30  →  1/v = −1/15 − 1/30 = −2/30 − 1/30 = −3/30 = −1/10",
                        step2: "v = −10 cm (virtual image, same side as object, 10 cm from lens)",
                        step3: "m = v/u = (−10)/30 = −0.33",
                        step4: "Virtual, upright, diminished (|m| = 0.33 < 1) — as always for diverging lens"
                    }
                },
                {
                    title: "Spectacles Prescription",
                    problem: "A myopic patient cannot see objects beyond 50 cm. What power lens is needed?",
                    reasoning: "The lens must form a virtual image of a distant object (u → ∞) at the patient's far point (v = −50 cm = −0.50 m) so the eye can focus on it",
                    solution: {
                        step1: "1/f = 1/v + 1/u = 1/(−0.50) + 1/∞ = −2.0 + 0 = −2.0",
                        step2: "f = −0.50 m",
                        step3: "P = 1/f = 1/(−0.50) = −2.0 D",
                        conclusion: "Patient needs a −2.0 D diverging lens"
                    }
                },
                {
                    title: "Combined Lenses",
                    problem: "Two converging lenses, P₁ = 4.0 D and P₂ = 2.5 D, are placed in contact. Find the combined focal length.",
                    solution: {
                        step1: "P_total = P₁ + P₂ = 4.0 + 2.5 = 6.5 D",
                        step2: "f = 1/P = 1/6.5 = 0.154 m = 15.4 cm"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Sign convention confusion — most common error in lens problems",
                    consequence: "Wrong sign on v or f; image type incorrectly identified",
                    fix: "Choose ONE convention, write it at the top of your working, and apply it consistently throughout"
                },
                {
                    error: "Using a positive f for a diverging lens",
                    consequence: "All subsequent results wrong",
                    fix: "Diverging lens: f < 0 always (it cannot bring parallel rays to a real focus)"
                },
                {
                    error: "Forgetting that the magnifying glass produces a virtual image",
                    consequence: "Trying to project the 'image' on a screen, which is impossible",
                    fix: "When u < f, the image is virtual — it appears to be on the same side as the object; cannot be projected"
                },
                {
                    error: "Confusing the formula for telescope magnification M = f_obj/f_eye with that for microscope",
                    consequence: "Wrong magnification calculation",
                    fix: "Telescope: M = f_obj/f_eye (both large and small f). Microscope: M = m_obj × M_eye (separate calculations)"
                },
                {
                    error: "Not converting f to metres when calculating power in dioptres",
                    consequence: "Power calculated in wrong units",
                    fix: "P = 1/f ONLY when f is in metres: f = 20 cm = 0.20 m → P = 1/0.20 = 5.0 D"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "Write the thin lens equation and state what each symbol represents",
                    "Define optical power and state its unit",
                    "Describe the type of image always formed by a diverging lens"
                ],
                understanding: [
                    "Explain why a converging lens can form both real and virtual images, but a diverging lens can only form virtual images",
                    "Explain what happens to the image formed by a converging lens as the object moves from beyond 2f toward f",
                    "Explain why a person with myopia needs a diverging (concave) lens to correct their vision"
                ],
                application: [
                    "An object is 18 cm from a converging lens of f = 12 cm. Find image distance, magnification, and describe the image",
                    "A diverging lens has f = −20 cm. An object is 30 cm away. Calculate image position and magnification",
                    "A telescope has an objective of f = 900 mm and eyepiece of f = 30 mm. Calculate angular magnification"
                ],
                analysis: [
                    "Draw ray diagrams for a converging lens with object at: (a) u = 3f, (b) u = 1.5f, (c) u = 0.5f",
                    "A patient has a far point of 1.5 m. Calculate the required spectacle lens power"
                ]
            },

            applications: [
                "Spectacles and contact lenses for vision correction",
                "Cameras (all types: DSLR, phone, cinema)",
                "Compound microscopes for biological and materials science",
                "Refracting and reflecting astronomical telescopes",
                "Projectors and cinema systems",
                "Laser beam expanders and focusers"
            ]
        };

        if (/diverging|concave.*lens/i.test(input)) {
            content.focus = "divergingLens";
            content.highlightedSection = { imageFormation: content.imageFormationDiverging, rayDiagrams: content.rayDiagramRules.diverging };
        } else if (/telescope|microscope|camera|instrument|eye|spectacle|myopia/i.test(input)) {
            content.focus = "opticalInstruments";
            content.highlightedSection = content.opticalInstruments;
        } else if (/power|dioptre|combined/i.test(input)) {
            content.focus = "opticalPower";
            content.highlightedSection = content.lensEquation.opticalPower;
        } else if (/magnif/i.test(input)) {
            content.focus = "magnification";
            content.highlightedSection = content.lensEquation.magnification;
        } else if (/ray.*diagram/i.test(input)) {
            content.focus = "rayDiagrams";
            content.highlightedSection = content.rayDiagramRules;
        }

        return content;
    }

    handleWaveOptics(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Wave Optics: Interference and Diffraction",
            category: 'optics',
            summary: "Wave optics treats light as a wave and explains phenomena that geometric (ray) optics cannot, including interference and diffraction. Young's double-slit experiment demonstrated the wave nature of light. Diffraction gratings use interference from many slits to produce sharp, widely-spaced maxima used to measure wavelengths precisely.",

            definitions: {
                waveFront: {
                    definition: "A surface connecting all points of a wave that are at the same phase (e.g., all crests)"
                },
                superposition: {
                    definition: "When two or more waves overlap, the resultant displacement at any point is the algebraic sum of the individual displacements",
                    principle: "The Principle of Superposition"
                },
                interference: {
                    definition: "The superposition of two or more coherent waves to produce a resultant with regions of enhanced and reduced amplitude",
                    constructive: "Waves in phase (phase difference = 0, 2π, 4π, ...) → amplitudes add → bright fringe",
                    destructive: "Waves exactly out of phase (phase difference = π, 3π, ...) → amplitudes cancel → dark fringe"
                },
                coherence: {
                    definition: "Two sources are coherent if they emit waves of the same frequency with a constant phase relationship",
                    requirement: "Sustained interference requires coherent sources",
                    practicalSources: "Single laser (most coherent); filtered monochromatic light through a single slit (Young's original method)"
                },
                pathDifference: {
                    symbol: "Δ or δ",
                    unit: "metres (m) or in terms of λ",
                    definition: "The difference in the distances travelled by two waves from their sources to a given point",
                    constructive: "Δ = nλ (n = 0, 1, 2, ...) → bright fringe (maximum)",
                    destructive: "Δ = (n + ½)λ (n = 0, 1, 2, ...) → dark fringe (minimum)"
                },
                phaseDifference: {
                    symbol: "φ (phi)",
                    unit: "radians or degrees",
                    relation: "φ = 2πΔ/λ",
                    constructive: "φ = 0, 2π, 4π, ... (multiple of 2π)",
                    destructive: "φ = π, 3π, 5π, ... (odd multiple of π)"
                },
                fringeSpacing: {
                    symbol: "w",
                    unit: "metres (m)",
                    definition: "Distance between adjacent bright (or dark) fringes in an interference pattern",
                    formula: "w = λD/d"
                },
                diffraction: {
                    definition: "The spreading of waves as they pass through an aperture or around an obstacle",
                    condition: "Significant diffraction when aperture width ≈ wavelength",
                    note: "All waves diffract — light, sound, water waves, electrons"
                },
                diffractionGrating: {
                    definition: "A surface with many equally spaced parallel slits (or ruled lines) that produces sharp, widely spaced diffraction maxima by interference",
                    gratingSpacing: "d = 1/N where N = number of lines per metre"
                }
            },

            youngsDoubleSlitExperiment: {
                history: "Thomas Young, 1801 — first conclusive experimental evidence for the wave nature of light",
                setup: {
                    description: "Coherent light passes through two narrow slits S₁ and S₂, separated by distance d; fringes observed on a screen at distance D",
                    requirementsForFringes: [
                        "Sources must be coherent (same frequency, constant phase difference)",
                        "Sources must be close together relative to D (d << D)",
                        "Screen must be far enough for fringes to be resolvable (D >> d)"
                    ]
                },
                fringeConditions: {
                    bright_constructive: "Path difference = nλ  where n = 0, ±1, ±2, ...",
                    dark_destructive: "Path difference = (n + ½)λ  where n = 0, ±1, ±2, ...",
                    centralMaximum: "n = 0; path difference = 0; equidistant from both slits"
                },
                fringeSpacingEquation: {
                    formula: "w = λD/d",
                    derivation: "For small angles: path difference from slit to Pth fringe = pd/D = pλ → y_p = pλD/d; spacing between adjacent fringes = λD/d",
                    variables: {
                        w: "fringe spacing (m)",
                        lambda: "wavelength of light (m)",
                        D: "perpendicular distance from slits to screen (m)",
                        d: "slit separation, centre to centre (m)"
                    },
                    validity: "Valid when D >> d and fringes are close to the central axis (small angle approximation: sin θ ≈ tan θ ≈ θ)",
                    rearranged: "λ = wd/D (used to measure wavelength from observed fringe spacing)"
                },
                effectOfChangingVariables: [
                    { change: "Increase D (move screen further)", effect: "Fringes become wider (w increases proportionally)" },
                    { change: "Increase d (wider slit separation)", effect: "Fringes become narrower (w ∝ 1/d)" },
                    { change: "Increase λ (longer wavelength / redder light)", effect: "Fringes become wider (w ∝ λ)" },
                    { change: "Use white light instead of monochromatic", effect: "Central fringe is white; other fringes are coloured (different λ → different fringe positions)" },
                    { change: "Use incoherent sources", effect: "Fringe pattern disappears (washes out)" }
                ]
            },

            diffractionGrating: {
                equation: "d · sin(θ) = nλ",
                variables: {
                    d: "grating spacing = 1/N (m), where N = number of lines per metre",
                    theta: "angle of diffraction of nth order maximum from the central maximum",
                    n: "order of diffraction: n = 0 (central), ±1 (first order), ±2 (second order), ...",
                    lambda: "wavelength of light (m)"
                },
                gratingSpacing: {
                    example1: "300 lines/mm → N = 300,000 m⁻¹ → d = 1/300,000 = 3.33 × 10⁻⁶ m",
                    example2: "600 lines/mm → N = 600,000 m⁻¹ → d = 1.67 × 10⁻⁶ m"
                },
                maximumOrder: {
                    condition: "sin(θ) ≤ 1, so n ≤ d/λ",
                    maximum: "n_max = floor(d/λ) — round down to nearest integer"
                },
                comparisonWithDoubleSlitPattern: [
                    "Double slit: faint, broadly spread, sinc-envelope maxima; many closely spaced fringes",
                    "Diffraction grating: very sharp, narrow, widely spaced principal maxima; much brighter",
                    "More slits → sharper, brighter maxima (same positions; more constructive interference)",
                    "Grating gives higher angular dispersion → better wavelength resolution"
                ],
                uses: [
                    "Optical spectrometers to measure wavelengths with high precision",
                    "Astronomical spectroscopy",
                    "CDs and DVDs (reflective grating → iridescent colours)",
                    "X-ray crystallography (crystal lattice acts as 3D grating)"
                ]
            },

            singleSlitDiffraction: {
                minimaCondition: "a · sin(θ) = nλ  (n = ±1, ±2, ...)  where a = slit width",
                centralMaximum: "Broad and bright; twice as wide as secondary maxima; bounded by n = ±1 minima",
                effects: [
                    "Narrower slit (smaller a) → wider central maximum and pattern (more diffraction)",
                    "Longer wavelength (larger λ) → wider pattern",
                    "In double-slit: single-slit envelope modulates the double-slit fringe pattern (missing orders occur when double-slit maximum coincides with single-slit minimum)"
                ]
            },

            thinFilmInterference: {
                principle: "Light reflected from front and back surfaces of a thin film (e.g., soap bubble, oil film) can interfere",
                phaseChange: "Reflection from a denser medium causes a phase change of π (half wavelength path difference equivalent)",
                conditionsForThinFilmInAir: {
                    constructive: "2nt = (m + ½)λ (one phase change on reflection)",
                    destructive: "2nt = mλ",
                    variables: "n = film refractive index; t = film thickness; λ = wavelength in air"
                },
                applications: [
                    "Anti-reflection coatings on camera lenses: MgF₂ (n ≈ 1.38) coated to t = λ/(4n)",
                    "Soap bubbles and oil films: coloured patterns due to different thicknesses giving constructive interference for different λ",
                    "Optical coatings for mirrors, solar panels"
                ]
            },

            workedExamples: [
                {
                    title: "Young's Double Slit — Finding Wavelength",
                    problem: "In a Young's experiment, d = 0.40 mm, D = 1.8 m, and 10 fringes span 28.8 mm. Find the wavelength of light.",
                    given: "d = 0.40 × 10⁻³ m, D = 1.8 m, 10 fringes = 28.8 × 10⁻³ m",
                    solution: {
                        step1: "Fringe spacing: w = 28.8 × 10⁻³ / 10 = 2.88 × 10⁻³ m",
                        step2: "λ = wd/D = (2.88 × 10⁻³ × 0.40 × 10⁻³) / 1.8",
                        step3: "λ = (1.152 × 10⁻⁶) / 1.8 = 6.40 × 10⁻⁷ m = 640 nm",
                        conclusion: "Wavelength ≈ 640 nm (red light)"
                    }
                },
                {
                    title: "Diffraction Grating — Finding Angles of Maxima",
                    problem: "A diffraction grating has 500 lines/mm. Find all diffraction angles for λ = 589 nm.",
                    given: "N = 500 lines/mm = 500,000 m⁻¹ → d = 1/500,000 = 2.00 × 10⁻⁶ m; λ = 589 × 10⁻⁹ m",
                    solution: {
                        maxOrder: "n_max = d/λ = 2.00 × 10⁻⁶ / 589 × 10⁻⁹ = 3.40 → n_max = 3",
                        n1: "n = 1: sin(θ) = λ/d = 589 × 10⁻⁹ / 2.00 × 10⁻⁶ = 0.2945 → θ = 17.1°",
                        n2: "n = 2: sin(θ) = 2λ/d = 0.5890 → θ = 36.1°",
                        n3: "n = 3: sin(θ) = 3λ/d = 0.8835 → θ = 62.1°",
                        n4: "n = 4: sin(θ) = 4λ/d = 1.178 > 1 → impossible, no 4th order",
                        conclusion: "Visible orders: n = 0 (central), ±1 (17.1°), ±2 (36.1°), ±3 (62.1°)"
                    }
                },
                {
                    title: "Diffraction Grating — Measuring Wavelength",
                    problem: "A grating with 400 lines/mm produces a first-order maximum at θ = 14.0°. Find λ.",
                    given: "N = 400,000 m⁻¹ → d = 2.50 × 10⁻⁶ m, n = 1, θ = 14.0°",
                    solution: {
                        step1: "d · sin(θ) = nλ  →  λ = d · sin(θ) / n",
                        step2: "λ = 2.50 × 10⁻⁶ × sin(14.0°) / 1",
                        step3: "λ = 2.50 × 10⁻⁶ × 0.2419 = 6.05 × 10⁻⁷ m = 605 nm"
                    }
                },
                {
                    title: "Effect of Variables — Young's Fringes",
                    problem: "Fringe spacing in a Young's experiment is 2.4 mm with d = 0.5 mm and D = 1.0 m. (a) What is λ? (b) What happens to fringe spacing if D is doubled? (c) If d is halved?",
                    solution: {
                        partA: "λ = wd/D = (2.4 × 10⁻³ × 0.5 × 10⁻³) / 1.0 = 1.2 × 10⁻⁶ / 1 = 1.2 × 10⁻⁶ m = 1200 nm",
                        partA_check: "This is in the near infrared — visible light λ should be 400–700 nm. Recalculate: λ = (0.0024 × 0.0005)/1.0 = 1.2 × 10⁻⁶ m. This suggests the original data gives IR; if fringe spacing were 0.24 mm: λ = (0.24×10⁻³ × 0.5×10⁻³)/1.0 = 120 nm — UV. For red laser λ ≈ 650 nm: w = λD/d = (650×10⁻⁹×1.0)/(0.5×10⁻³) = 1.3 mm ✓",
                        partB: "D doubled → w doubled (w ∝ D): new w = 4.8 mm",
                        partC: "d halved → w doubled (w ∝ 1/d): new w = 4.8 mm"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Confusing d (slit separation) with a (slit width) in diffraction problems",
                    consequence: "Wrong formula applied (grating equation vs single-slit minima condition)",
                    fix: "d is the spacing between slit centres; a is the slit opening width"
                },
                {
                    error: "Measuring the position of one fringe rather than using n fringes to find w",
                    consequence: "Large percentage error in w",
                    fix: "Measure across 10 or more fringes; divide total width by number of gaps (= n − 1 or n depending on measurement method)"
                },
                {
                    error: "Using degrees instead of radians in the small angle approximation",
                    consequence: "Incorrect fringe spacing calculation if angles are in degrees",
                    fix: "The formula w = λD/d does not require angle measurement; if using sin(θ) = mλ/d, ensure calculator is in correct mode"
                },
                {
                    error: "Thinking energy is destroyed by destructive interference (dark fringes)",
                    consequence: "Incorrect conceptual understanding of energy conservation",
                    fix: "Energy is redistributed: dark fringes have zero intensity, bright fringes have enhanced intensity; total energy is conserved"
                },
                {
                    error: "Confusing path difference condition for grating vs double slit",
                    consequence: "Applying wrong formula",
                    fix: "Both use the SAME condition: d·sin(θ) = nλ. The grating just has far more slits, making the maxima much sharper and brighter"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the condition on path difference for constructive interference",
                    "Write the equation for fringe spacing in Young's double-slit experiment",
                    "Write the diffraction grating equation"
                ],
                understanding: [
                    "Explain why two torch bulbs (even of the same colour) cannot produce an interference pattern",
                    "Explain why the fringes in Young's experiment become closer together when the slit separation d is increased",
                    "Explain why a diffraction grating gives sharper and better-separated maxima than a double slit with the same spacing d"
                ],
                application: [
                    "In a double-slit experiment: d = 0.25 mm, D = 2.0 m, λ = 620 nm. Calculate fringe spacing and the position of the 3rd bright fringe from the centre",
                    "A grating has 600 lines/mm. Calculate the angle of the second-order maximum for λ = 480 nm",
                    "Monochromatic light of λ = 550 nm passes through a double slit (d = 0.30 mm). The screen is 1.5 m away. Calculate w. How does w change if D is increased to 3.0 m?"
                ],
                analysis: [
                    "Describe and explain the changes to the interference pattern as white light replaces monochromatic light in Young's double-slit experiment",
                    "A grating with 500 lines/mm is illuminated with white light (λ = 400–700 nm). Calculate the angular range of the first-order spectrum"
                ]
            },

            applications: [
                "Measuring the wavelength of light precisely (double slit and grating spectrometers)",
                "X-ray crystallography (Bragg diffraction: crystal lattice planes act as grating)",
                "Anti-reflection coatings (thin film interference)",
                "Holography",
                "Astronomical spectroscopy (diffraction grating spectrographs on telescopes)",
                "CD/DVD data storage (reflective grating creates iridescent colours)"
            ]
        };

        if (/young|double.*slit|fringe.*spacing/i.test(input)) {
            content.focus = "youngsDoubleSlitExperiment";
            content.highlightedSection = content.youngsDoubleSlitExperiment;
        } else if (/grating/i.test(input)) {
            content.focus = "diffractionGrating";
            content.highlightedSection = content.diffractionGrating;
        } else if (/single.*slit/i.test(input)) {
            content.focus = "singleSlitDiffraction";
            content.highlightedSection = content.singleSlitDiffraction;
        } else if (/thin.*film|anti.*reflect|coating/i.test(input)) {
            content.focus = "thinFilmInterference";
            content.highlightedSection = content.thinFilmInterference;
        } else if (/path.*diff|constructive|destructive|coherent/i.test(input)) {
            content.focus = "interference";
            content.highlightedSection = { definitions: content.definitions, pathDifference: content.definitions.pathDifference };
        }

        return content;
    }

    handleDispersionSpectra(problem) {
        const input = (problem || '').toString().toLowerCase();

        const content = {
            topic: "Dispersion, Spectra, and the Electromagnetic Spectrum",
            category: 'optics',
            summary: "Dispersion is the separation of white light into its component wavelengths due to the wavelength-dependence of refractive index. Emission and absorption spectra provide unique 'fingerprints' of elements. The electromagnetic spectrum encompasses all EM radiation from radio waves to gamma rays — all travelling at c = 3 × 10⁸ m/s in vacuum but differing in frequency, wavelength, energy, and interaction with matter.",

            definitions: {
                dispersion: {
                    definition: "The splitting of light (or any electromagnetic radiation) into its component wavelengths due to the variation of refractive index with wavelength",
                    cause: "In most materials, n varies with wavelength: n = n(λ). This is called chromatic dispersion",
                    trend: "In normal dispersion (most optical materials): n decreases as λ increases → violet (short λ) has higher n than red (long λ) → violet refracts more"
                },
                whiteLight: {
                    definition: "A mixture of electromagnetic radiation across the entire visible wavelength range (~400–700 nm)",
                    composition: "Contains all visible wavelengths simultaneously"
                },
                visibleSpectrum: {
                    range: "Approximately 380–700 nm",
                    colours: {
                        violet: "380–450 nm",
                        blue: "450–495 nm",
                        green: "495–570 nm",
                        yellow: "570–590 nm",
                        orange: "590–620 nm",
                        red: "620–700 nm"
                    },
                    mnemonic: "Roy G. Biv (Red, Orange, Yellow, Green, Blue, Indigo, Violet) from long to short wavelength"
                },
                monochromaticLight: {
                    definition: "Light of a single, precise wavelength (and therefore single colour)",
                    sources: "Laser; sodium lamp (589 nm doublet, approximately monochromatic); filtered light"
                },
                emissionSpectrum: {
                    definition: "Spectrum produced by a hot gas or electrically excited atoms emitting photons",
                    appearance: "Bright coloured lines at specific wavelengths on a dark background",
                    mechanism: "Electrons transition from higher to lower energy levels: E_photon = E_upper − E_lower = hf",
                    uniqueness: "The set of spectral lines is unique to each element — a 'spectral fingerprint'"
                },
                absorptionSpectrum: {
                    definition: "Spectrum produced when white light passes through a cool gas; atoms absorb photons at their characteristic wavelengths",
                    appearance: "Dark lines at specific wavelengths on a continuous spectrum",
                    mechanism: "Atoms absorb photons of exactly the right energy to promote electrons to higher levels",
                    kirchhoff: "The dark lines appear at exactly the same wavelengths as the element's emission lines (Kirchhoff's Law)"
                },
                continuousSpectrum: {
                    definition: "A spectrum containing all wavelengths across a range, with no gaps",
                    sources: "Hot dense objects (black body radiation): Sun's photosphere, lamp filament, molten metal"
                },
                photon: {
                    definition: "A quantum (discrete packet) of electromagnetic energy",
                    energy: "E = hf = hc/λ",
                    planckConstant: "h = 6.63 × 10⁻³⁴ J·s",
                    speedOfLight: "c = 3.00 × 10⁸ m/s"
                }
            },

            dispersionByPrism: {
                mechanism: "Glass has different refractive indices for different wavelengths. When white light enters a prism at an angle, each wavelength is refracted by a different amount at both surfaces",
                refraction_at_surfaces: "Applies Snell's Law at entry and exit surfaces; different n for each λ → different exit angles",
                order: "Violet (highest n) → refracted most; Red (lowest n) → refracted least",
                dispersionFormula: "Angle of deviation D ≈ (n − 1) × A (for a thin prism; A = apex angle; n at given wavelength)",
                visualResult: "White light becomes a fan of colours: ROYGBIV from least (red) to most (violet) deviated",
                rainbow: {
                    primaryRainbow: {
                        mechanism: "Refraction on entry + one TIR inside droplet + refraction on exit",
                        angles: "Red at ~42°, Violet at ~40° from the antisolar point (line from Sun through observer's head)",
                        appearance: "Red outer, violet inner arc",
                        visibility: "Seen when Sun is behind the observer"
                    },
                    secondaryRainbow: {
                        mechanism: "Refraction + two TIRs + refraction",
                        angles: "About 51° from antisolar point",
                        appearance: "Violet outer, red inner (colours reversed vs primary); fainter",
                        alexandersDark: "Dark band between primary and secondary rainbows (Alexander's dark band)"
                    }
                }
            },

            electromagneticSpectrum: {
                fundamentalRelation: "c = fλ  (c = 3.00 × 10⁸ m/s in vacuum)",
                photonEnergy: "E = hf = hc/λ",
                properties: {
                    allTypes: [
                        "Travel at c = 3.00 × 10⁸ m/s in vacuum",
                        "Are transverse waves (oscillating electric and magnetic fields at right angles)",
                        "Travel through vacuum (do not require a medium)",
                        "Obey c = fλ",
                        "Undergo reflection, refraction, diffraction, and interference",
                        "Transfer energy; energy per photon E = hf"
                    ]
                },
                regions: {
                    radioWaves: {
                        wavelength: "> 0.1 m",
                        frequency: "< 3 × 10⁹ Hz (3 GHz)",
                        photonEnergy: "Very low (~ 10⁻²⁷ – 10⁻²³ J)",
                        sources: "Radio transmitters, lightning, pulsars, the cosmic microwave background",
                        uses: ["AM/FM radio broadcasting", "Television", "Radar", "MRI (radio frequency pulses)", "Radio astronomy"],
                        penetration: "Pass through walls; reflect from ionosphere",
                        hazards: "None at typical exposures"
                    },
                    microwaves: {
                        wavelength: "1 mm – 0.1 m",
                        frequency: "3 GHz – 300 GHz",
                        photonEnergy: "~ 10⁻²³ – 10⁻²¹ J",
                        sources: "Microwave ovens, radar transmitters, mobile phone towers, the Big Bang (CMB at 2.7 K)",
                        uses: ["Cooking (water molecules resonate at 2.45 GHz)", "Radar", "Satellite communication", "Wi-Fi and Bluetooth", "Cosmic microwave background astronomy"],
                        hazards: "Internal heating of water-containing tissue at high power"
                    },
                    infrared: {
                        wavelength: "700 nm – 1 mm",
                        frequency: "3 × 10¹¹ Hz – 4.3 × 10¹⁴ Hz",
                        photonEnergy: "~ 10⁻²² – 10⁻¹⁹ J",
                        sources: "All warm objects, the Sun, IR LEDs, laser diodes",
                        uses: ["Thermal imaging cameras", "Remote controls", "Optical fibre communications (near IR)", "Night vision equipment", "Greenhouse warming", "Cooking (IR grill)"],
                        subRegions: "Near IR (NIR): 700–1400 nm; Mid IR (MIR): 1.4–8 μm; Far IR (FIR): 8 μm–1 mm",
                        hazards: "Skin burns; corneal and retinal damage at high intensity"
                    },
                    visibleLight: {
                        wavelength: "400 nm – 700 nm",
                        frequency: "4.3 × 10¹⁴ Hz – 7.5 × 10¹⁴ Hz",
                        photonEnergy: "1.8 – 3.1 eV (2.9 × 10⁻¹⁹ – 5.0 × 10⁻¹⁹ J)",
                        sources: "The Sun, stars, LEDs, incandescent bulbs, lasers, bioluminescence",
                        uses: ["Vision", "Photography", "Optical communications", "Photosynthesis", "Microscopy", "Solar cells"],
                        hazards: "Very intense light or laser can cause retinal damage"
                    },
                    ultraviolet: {
                        wavelength: "10 nm – 400 nm",
                        frequency: "7.5 × 10¹⁴ Hz – 3 × 10¹⁶ Hz",
                        photonEnergy: "3 eV – 124 eV",
                        sources: "The Sun, UV lamps, welding arcs, mercury vapour lamps",
                        uses: ["Sterilisation (kills bacteria by damaging DNA)", "Fluorescence and UV markers", "Sunscreen testing", "Vitamin D synthesis in skin", "Forensics (detecting bodily fluids)"],
                        subRegions: "UV-A (315–400 nm): causes tanning; UV-B (280–315 nm): causes burns, vitamin D; UV-C (100–280 nm): germicidal, blocked by atmosphere",
                        hazards: "Sunburn, skin cancer, cataracts, DNA damage"
                    },
                    xRays: {
                        wavelength: "0.01 nm – 10 nm",
                        frequency: "3 × 10¹⁶ Hz – 3 × 10¹⁹ Hz",
                        photonEnergy: "100 eV – 100 keV",
                        sources: "X-ray tubes (electrons decelerated in metal target → bremsstrahlung + characteristic X-rays), synchrotrons, neutron stars",
                        uses: ["Medical radiography", "CT scanning", "Airport security scanners", "X-ray crystallography (DNA, protein structures)", "Materials testing (finding cracks in metals)"],
                        hazards: "Ionising radiation — damages DNA; can cause cancer; controlled exposure required"
                    },
                    gammaRays: {
                        wavelength: "< 0.01 nm (< 10 pm)",
                        frequency: "> 3 × 10¹⁹ Hz",
                        photonEnergy: "> 100 keV",
                        sources: "Radioactive decay (unstable nuclei), nuclear reactions, supernovae, gamma-ray bursts, pulsars",
                        uses: ["Cancer radiotherapy (targeted tumour destruction)", "Sterilisation of medical equipment and food", "PET scans (positron-electron annihilation → two 511 keV gamma photons)", "Nuclear medicine (technetium-99m gamma camera)"],
                        hazards: "Highly ionising — penetrating, causes severe DNA damage; acute radiation syndrome at very high doses"
                    }
                },
                trendSummary: {
                    fromRadioToGamma: "Increasing frequency → decreasing wavelength → increasing photon energy → more ionising → more penetrating (generally)",
                    wavelengthRange: "Radio: ~1 km to gamma: ~10⁻¹³ m — a range of 10¹⁶"
                }
            },

            atomicSpectra: {
                bohrModel: {
                    description: "Electrons occupy discrete energy levels; transitions between levels produce photons",
                    energyOfPhoton: "E_photon = E_upper − E_lower = hf = hc/λ",
                    groundState: "Lowest energy level (n = 1 for hydrogen); most stable"
                },
                hydrogenSpectrum: {
                    balmerSeries: {
                        description: "Transitions from n ≥ 3 to n = 2; produces visible lines",
                        lines: [
                            { wavelength: "656 nm", colour: "Red", transition: "n = 3 → n = 2 (Hα)" },
                            { wavelength: "486 nm", colour: "Blue-green (cyan)", transition: "n = 4 → n = 2 (Hβ)" },
                            { wavelength: "434 nm", colour: "Violet", transition: "n = 5 → n = 2 (Hγ)" },
                            { wavelength: "410 nm", colour: "Deep violet", transition: "n = 6 → n = 2 (Hδ)" }
                        ],
                        formula: "1/λ = R_H (1/2² − 1/n²)  for n = 3, 4, 5, ...; R_H = 1.097 × 10⁷ m⁻¹ (Rydberg constant)"
                    },
                    lymanSeries: "n ≥ 2 → n = 1; ultraviolet range",
                    paschenSeries: "n ≥ 4 → n = 3; infrared range"
                },
                fraunhoferLines: {
                    description: "Dark absorption lines in the solar spectrum; discovered by Wollaston (1802) and catalogued by Fraunhofer (1814)",
                    cause: "Cool gas in the Sun's outer atmosphere absorbs specific wavelengths from the denser, hotter photosphere below",
                    significance: "Allowed identification of elements in the Sun's atmosphere without visiting it",
                    notable: "Sodium D lines (589.0, 589.6 nm), Hydrogen Hα (656 nm), Calcium H and K lines (397, 393 nm)"
                },
                dopplerShift: {
                    blueshift: "Source moving toward observer → apparent wavelength decreases → lines shift toward blue end",
                    redshift: "Source moving away from observer → apparent wavelength increases → lines shift toward red end",
                    formula: "Δλ/λ ≈ v/c (for v << c)",
                    application: "Measuring recession velocities of galaxies; Hubble's Law and expanding universe"
                },
                applications: [
                    "Identifying elements in stars, nebulae, and galaxies",
                    "Measuring star velocities and rotation (Doppler shift of spectral lines)",
                    "Flame photometry in chemistry",
                    "Quality control in industry (measuring composition of alloys, glass, etc.)",
                    "Forensic analysis (spectroscopy of trace materials)"
                ]
            },

            photonEnergyCalculations: {
                formula: "E = hf = hc/λ",
                constants: {
                    h: "6.63 × 10⁻³⁴ J·s",
                    c: "3.00 × 10⁸ m/s",
                    conversionToEV: "1 eV = 1.60 × 10⁻¹⁹ J"
                },
                trend: "Shorter wavelength (higher frequency) → higher photon energy → more ionising potential"
            },

            workedExamples: [
                {
                    title: "Photon Energy Calculation",
                    problem: "Calculate the energy of a photon of yellow light (λ = 589 nm) in joules and electronvolts.",
                    given: "λ = 589 × 10⁻⁹ m, h = 6.63 × 10⁻³⁴ J·s, c = 3.00 × 10⁸ m/s",
                    solution: {
                        step1: "f = c/λ = (3.00 × 10⁸) / (589 × 10⁻⁹) = 5.09 × 10¹⁴ Hz",
                        step2: "E = hf = 6.63 × 10⁻³⁴ × 5.09 × 10¹⁴ = 3.37 × 10⁻¹⁹ J",
                        step3: "E in eV = 3.37 × 10⁻¹⁹ / 1.60 × 10⁻¹⁹ = 2.11 eV",
                        check: "Yellow visible photon: ~2 eV is consistent with visible light range (1.8–3.1 eV) ✓"
                    }
                },
                {
                    title: "Hydrogen Spectral Line — Identifying the Transition",
                    problem: "A spectral line of hydrogen is observed at 486 nm. Identify the transition.",
                    solution: {
                        step1: "Use Balmer formula: 1/λ = R_H(1/4 − 1/n²)",
                        step2: "1/(486 × 10⁻⁹) = 1.097 × 10⁷ × (1/4 − 1/n²)",
                        step3: "2.058 × 10⁶ = 1.097 × 10⁷ × (0.25 − 1/n²)",
                        step4: "0.25 − 1/n² = 2.058 × 10⁶ / 1.097 × 10⁷ = 0.1876",
                        step5: "1/n² = 0.25 − 0.1876 = 0.0625 → n² = 16 → n = 4",
                        conclusion: "Transition from n = 4 → n = 2 (Hβ line, blue-green)"
                    }
                },
                {
                    title: "Dispersion by a Prism",
                    problem: "White light enters a glass prism. Red light (λ = 700 nm) has n = 1.514; violet light (λ = 400 nm) has n = 1.532. The apex angle A = 60°. Find the angular deviation of each colour for a ray at minimum deviation (where i ≈ (A + D)/2 ≈ 48.5° for n = 1.52).",
                    approach: "Use D_min = 2i − A; find i from Snell's Law at minimum deviation: n = sin((A + D_min)/2) / sin(A/2)",
                    solution: {
                        red: "sin((60° + D)/2) = 1.514 × sin(30°) = 1.514 × 0.500 = 0.757 → (60 + D)/2 = 49.2° → D_red = 38.4°",
                        violet: "sin((60° + D)/2) = 1.532 × 0.500 = 0.766 → (60 + D)/2 = 50.0° → D_violet = 40.0°",
                        angularDispersion: "Angular dispersion = D_violet − D_red = 40.0° − 38.4° = 1.6°"
                    }
                },
                {
                    title: "Electromagnetic Spectrum — Comparing Two Waves",
                    problem: "An X-ray has λ = 0.10 nm; a radio wave has λ = 300 m. Compare their frequencies and photon energies.",
                    solution: {
                        xRayFrequency: "f = c/λ = 3.00 × 10⁸ / 0.10 × 10⁻⁹ = 3.0 × 10¹⁸ Hz",
                        radioFrequency: "f = c/λ = 3.00 × 10⁸ / 300 = 1.0 × 10⁶ Hz (1 MHz)",
                        xRayEnergy: "E = hf = 6.63 × 10⁻³⁴ × 3.0 × 10¹⁸ = 2.0 × 10⁻¹⁵ J = 12,400 eV = 12.4 keV",
                        radioEnergy: "E = hf = 6.63 × 10⁻³⁴ × 10⁶ = 6.63 × 10⁻²⁸ J",
                        ratio: "X-ray photon energy / radio photon energy = 2.0 × 10⁻¹⁵ / 6.63 × 10⁻²⁸ = 3 × 10¹²",
                        conclusion: "X-ray photons have ≈ 3 trillion times more energy than radio photons"
                    }
                }
            ],

            commonErrors: [
                {
                    error: "Thinking a prism creates colours",
                    consequence: "Fundamental misunderstanding of dispersion",
                    fix: "A prism SEPARATES colours already present in white light — it does not create new wavelengths; a prism is a wavelength-sorter, not a colour generator"
                },
                {
                    error: "Believing all colours travel at the same speed in glass",
                    consequence: "Cannot explain dispersion",
                    fix: "In vacuum all colours travel at c; in glass they travel at v = c/n, and n depends on wavelength → different speeds → different refractions → dispersion"
                },
                {
                    error: "Thinking violet refracts less than red (confusing with the spectrum order on the ground in a rainbow)",
                    consequence: "Wrong prediction of dispersion direction",
                    fix: "Violet has shorter λ → higher n → bends MORE toward normal → larger deviation in a prism; in a rainbow violet forms the INNER arc (smaller angle from antisolar point)"
                },
                {
                    error: "Confusing emission and absorption spectra",
                    consequence: "Wrong prediction of spectrum appearance",
                    fix: "Emission: bright lines on dark background (atoms emit photons). Absorption: dark lines on continuous background (atoms absorb photons from the continuous source)"
                },
                {
                    error: "Confusing E = hf with E = hv (using speed v instead of frequency f)",
                    consequence: "Completely wrong energy calculation",
                    fix: "E = hf (h × frequency); or E = hc/λ (h × c / wavelength); NEVER E = hv (v has no place in this formula)"
                }
            ],

            assessmentQuestions: {
                recall: [
                    "State the equation relating the energy of a photon to its frequency",
                    "List the regions of the electromagnetic spectrum in order of increasing frequency",
                    "State two properties common to all regions of the electromagnetic spectrum"
                ],
                understanding: [
                    "Explain why a glass prism separates white light into a spectrum of colours",
                    "Explain the difference between an emission spectrum and an absorption spectrum, and how each is produced",
                    "Explain why gamma rays are more dangerous to living tissue than radio waves, even though both are electromagnetic radiation"
                ],
                application: [
                    "Calculate the energy in joules and eV of a photon of blue light (λ = 450 nm)",
                    "A hydrogen spectral line has λ = 656 nm. Calculate the frequency and energy of these photons",
                    "An X-ray machine produces photons of energy 50 keV. Calculate their wavelength"
                ],
                analysis: [
                    "Explain how astronomers can determine the chemical composition of a star from its spectrum, without physically sampling the star",
                    "A galaxy shows hydrogen spectral lines at 700 nm instead of 656 nm. Calculate the recession velocity of the galaxy"
                ]
            },

            applications: [
                "Astronomical spectroscopy (element identification, Doppler velocities, redshift and cosmology)",
                "Medical imaging (X-ray radiography, CT, PET, gamma camera)",
                "Remote sensing and satellite meteorology (IR imaging of Earth)",
                "Telecommunications (microwave links, fibre optic near-IR, radio/TV broadcast)",
                "Cancer radiotherapy (X-ray and gamma ray treatment)",
                "Chemical analysis and forensics (spectroscopic identification of substances)"
            ]
        };

        if (/prism|rainbow|dispers/i.test(input)) {
            content.focus = "dispersionByPrism";
            content.highlightedSection = content.dispersionByPrism;
        } else if (/emission.*spectrum|absorption.*spectrum|spectral.*line|fraunhofer/i.test(input)) {
            content.focus = "atomicSpectra";
            content.highlightedSection = content.atomicSpectra;
        } else if (/electromagnetic.*spectrum|radio|microwave|infrared|ultraviolet|x.ray|gamma/i.test(input)) {
            content.focus = "electromagneticSpectrum";
            content.highlightedSection = content.electromagneticSpectrum;
        } else if (/photon.*energy|hf|hc.*lambda|planck/i.test(input)) {
            content.focus = "photonEnergy";
            content.highlightedSection = content.photonEnergyCalculations;
        } else if (/doppler|redshift|blueshift|galaxy|recession/i.test(input)) {
            content.focus = "dopplerShift";
            content.highlightedSection = content.atomicSpectra.dopplerShift;
        } else if (/hydrogen|balmer|lyman|rydberg/i.test(input)) {
            content.focus = "hydrogenSpectrum";
            content.highlightedSection = content.atomicSpectra.hydrogenSpectrum;
        }

        return content;
    }

    // ==========================================
    // MAIN TOPIC ROUTER
    // ==========================================

    handleOpticsTopic(problem) {
        const input = (problem || '').toString().toLowerCase();

        for (const [topicId, topic] of Object.entries(this.opticsTopics)) {
            for (const pattern of topic.patterns) {
                if (pattern.test(input)) {
                    return topic.handler(problem);
                }
            }
        }

        // Default: return overview of all optics topics
        return {
            topic: "Optics Overview",
            category: 'optics',
            summary: "Optics is the branch of physics that studies the behaviour, properties, and interactions of light. It includes geometric optics (reflection and refraction — ray model), physical optics (interference, diffraction — wave model), and modern optics (photons and the electromagnetic spectrum).",
            availableTopics: Object.entries(this.opticsTopics).map(([id, topic]) => ({
                id,
                name: topic.name,
                description: topic.description,
                difficulty: topic.difficulty,
                prerequisites: topic.prerequisites
            })),
            suggestedOrder: ["reflection", "refraction", "lenses", "wave_optics", "dispersion_spectra"],
            connectingTheme: "All of optics builds on the dual nature of light as both a ray (for geometric optics) and a wave (for physical optics), culminating in the concept of the photon which unifies both views."
        };
    }
}

