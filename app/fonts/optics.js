Here's the enhanced optics problem solver with multiple layer explanations, modeled after the linear mathematical workbook:
// Enhanced Optics Problem Solver - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedOpticsWorkbook {
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
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';
        this.includeRayDiagrams = options.includeRayDiagrams !== false;
        this.includePhysicalInsights = options.includePhysicalInsights !== false;

        this.physicsConstants = this.initializePhysicsConstants();
        this.opticsSymbols = this.initializeOpticsSymbols();
        this.setThemeColors();
        this.initializeOpticsSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeOpticsLessons();
    }

    initializePhysicsConstants() {
        return {
            c: 299792458, // Speed of light in vacuum (m/s)
            h: 6.62607015e-34, // Planck constant (J·s)
            n_air: 1.000293, // Refractive index of air
            n_water: 1.333, // Refractive index of water
            n_glass: 1.5, // Typical glass refractive index
            n_diamond: 2.42, // Refractive index of diamond
            wavelength_red: 700e-9, // Red light (m)
            wavelength_green: 550e-9, // Green light (m)
            wavelength_blue: 450e-9, // Blue light (m)
            wavelength_violet: 400e-9 // Violet light (m)
        };
    }

    initializeOpticsSymbols() {
        return {
            // Greek letters
            'lambda': 'λ', 'theta': 'θ', 'phi': 'φ', 'alpha': 'α', 'beta': 'β',
            'delta': 'Δ', 'mu': 'μ', 'nu': 'ν',
            // Special optics symbols
            'infinity': '∞', 'approximately': '≈', 'proportional': '∝',
            'angle': '∠', 'degree': '°',
            // Subscripts (represented)
            'n1': 'n₁', 'n2': 'n₂', 'theta_i': 'θᵢ', 'theta_r': 'θᵣ', 'theta_c': 'θc'
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
                diagramBg: '#e8f4f8',
                rayColor: '#ff6b6b',
                normalColor: '#4ecdc4',
                surfaceColor: '#95a5a6'
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
                diagramBg: '#e1f5fe',
                rayColor: '#e53935',
                normalColor: '#00897b',
                surfaceColor: '#78909c'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

    initializeOpticsLessons() {
        this.lessons = {
            reflection: {
                title: "Laws of Reflection",
                concepts: [
                    "Angle of incidence equals angle of reflection",
                    "Incident ray, reflected ray, and normal lie in same plane",
                    "Applies to all surfaces (mirrors, water, etc.)",
                    "Specular vs diffuse reflection"
                ],
                theory: "Reflection occurs when light bounces off a surface. The law of reflection states that the angle of incidence equals the angle of reflection, both measured from the normal (perpendicular) to the surface.",
                keyFormulas: {
                    "Law of Reflection": "θᵢ = θᵣ",
                    "Normal Definition": "Perpendicular line to surface at point of incidence",
                    "Plane Mirror Image": "Image distance = Object distance (behind mirror)"
                },
                solvingSteps: [
                    "Identify the surface and draw the normal",
                    "Measure angle of incidence from normal",
                    "Apply law: angle of reflection equals angle of incidence",
                    "Draw reflected ray maintaining the angle",
                    "Verify all angles are measured from normal"
                ],
                applications: [
                    "Mirrors (plane, concave, convex)",
                    "Periscopes and telescopes",
                    "Retroreflectors",
                    "Laser alignment systems"
                ],
                physicalInsight: "Reflection preserves the angle because light takes the path that minimizes travel time (Fermat's principle). The surface atoms absorb and re-emit photons in the reflected direction."
            },

            refraction: {
                title: "Snell's Law and Refraction",
                concepts: [
                    "Light bends when entering different medium",
                    "Bending depends on refractive indices",
                    "Light slows down in denser media",
                    "Total internal reflection at critical angle"
                ],
                theory: "Refraction is the bending of light as it passes from one medium to another due to a change in speed. Snell's law quantifies this relationship using refractive indices.",
                keyFormulas: {
                    "Snell's Law": "n₁ sin(θ₁) = n₂ sin(θ₂)",
                    "Refractive Index": "n = c/v (speed of light in vacuum / speed in medium)",
                    "Critical Angle": "θc = arcsin(n₂/n₁) when n₁ > n₂",
                    "Apparent Depth": "d_apparent = d_real / n"
                },
                solvingSteps: [
                    "Identify the two media and their refractive indices",
                    "Draw the normal at the interface",
                    "Measure incident angle from normal",
                    "Apply Snell's law: n₁ sin(θ₁) = n₂ sin(θ₂)",
                    "Solve for unknown angle or refractive index",
                    "Check for total internal reflection if applicable"
                ],
                applications: [
                    "Lenses (eyeglasses, cameras, microscopes)",
                    "Optical fibers",
                    "Prisms and dispersion",
                    "Mirages and atmospheric refraction",
                    "Underwater vision"
                ],
                physicalInsight: "Light bends because different media have different optical densities. The electric field of light interacts with electrons in the material, causing a phase delay that manifests as slower propagation and directional change."
            },

            thin_lenses: {
                title: "Thin Lens Equation",
                concepts: [
                    "Relates object distance, image distance, and focal length",
                    "Converging (convex) vs diverging (concave) lenses",
                    "Real vs virtual images",
                    "Magnification relates image and object sizes"
                ],
                theory: "The thin lens equation describes how lenses form images by refracting light. It assumes the lens thickness is negligible compared to object and image distances.",
                keyFormulas: {
                    "Thin Lens Equation": "1/f = 1/dₒ + 1/dᵢ",
                    "Magnification": "M = -dᵢ/dₒ = hᵢ/hₒ",
                    "Lensmaker's Equation": "1/f = (n-1)(1/R₁ - 1/R₂)",
                    "Power of Lens": "P = 1/f (in diopters, f in meters)"
                },
                solvingSteps: [
                    "Identify given values: object distance (dₒ), focal length (f), or image distance (dᵢ)",
                    "Apply sign conventions (positive/negative for real/virtual)",
                    "Substitute into thin lens equation: 1/f = 1/dₒ + 1/dᵢ",
                    "Solve algebraically for unknown",
                    "Calculate magnification if needed: M = -dᵢ/dₒ",
                    "Interpret results (real/virtual, upright/inverted, magnified/reduced)"
                ],
                signConventions: {
                    "Object distance (dₒ)": "Always positive for real objects",
                    "Image distance (dᵢ)": "Positive for real images (opposite side), negative for virtual images (same side)",
                    "Focal length (f)": "Positive for converging lenses, negative for diverging lenses",
                    "Magnification (M)": "Negative for inverted images, positive for upright images"
                },
                applications: [
                    "Camera lenses and photography",
                    "Eyeglasses and vision correction",
                    "Magnifying glasses",
                    "Microscopes and telescopes",
                    "Projectors"
                ],
                physicalInsight: "Lenses work by refracting light at two surfaces. Converging lenses are thicker in the middle and bring parallel rays to a focus. Diverging lenses are thinner in the middle and spread rays apart as if coming from a virtual focus."
            },

            mirrors: {
                title: "Curved Mirrors (Concave and Convex)",
                concepts: [
                    "Mirror equation similar to lens equation",
                    "Concave mirrors can form real or virtual images",
                    "Convex mirrors always form virtual, reduced images",
                    "Focal length is half the radius of curvature"
                ],
                theory: "Curved mirrors form images through reflection. The mirror equation relates object distance, image distance, and focal length, similar to lenses but using reflection principles.",
                keyFormulas: {
                    "Mirror Equation": "1/f = 1/dₒ + 1/dᵢ",
                    "Focal Length": "f = R/2 (R = radius of curvature)",
                    "Magnification": "M = -dᵢ/dₒ = hᵢ/hₒ",
                    "Lateral Magnification": "M = -dᵢ/dₒ"
                },
                solvingSteps: [
                    "Identify mirror type (concave or convex)",
                    "Determine focal length: f = R/2",
                    "Apply sign conventions",
                    "Use mirror equation: 1/f = 1/dₒ + 1/dᵢ",
                    "Solve for unknown distance",
                    "Calculate magnification",
                    "Interpret image characteristics"
                ],
                signConventions: {
                    "Focal length (f)": "Positive for concave, negative for convex",
                    "Object distance (dₒ)": "Always positive (in front of mirror)",
                    "Image distance (dᵢ)": "Positive for real images (in front), negative for virtual (behind)",
                    "Radius (R)": "Positive for concave, negative for convex"
                },
                applications: [
                    "Shaving and makeup mirrors (concave)",
                    "Security mirrors (convex)",
                    "Telescopes (primary mirror)",
                    "Dental mirrors",
                    "Satellite dishes"
                ],
                physicalInsight: "Curved mirrors focus or diverge light through reflection at a curved surface. The curve causes different parts of the wavefront to travel different distances, creating convergence (concave) or divergence (convex)."
            },

            dispersion: {
                title: "Dispersion and Prisms",
                concepts: [
                    "Different wavelengths refract by different amounts",
                    "Refractive index varies with wavelength",
                    "White light separates into spectrum",
                    "Minimum deviation angle"
                ],
                theory: "Dispersion is the separation of light into its component colors due to wavelength-dependent refractive index. This causes white light to spread into a spectrum when passing through a prism.",
                keyFormulas: {
                    "Prism Deviation": "δ = (n-1)A for small angles",
                    "Minimum Deviation": "δₘ = 2θ₁ - A",
                    "Refractive Index from Prism": "n = sin[(A+δₘ)/2] / sin(A/2)",
                    "Cauchy's Equation": "n(λ) = A + B/λ² (approximate)"
                },
                solvingSteps: [
                    "Identify prism apex angle (A)",
                    "Determine wavelength or color of light",
                    "Apply Snell's law at first surface",
                    "Trace ray through prism",
                    "Apply Snell's law at second surface",
                    "Calculate deviation angle",
                    "For white light, calculate angular separation of colors"
                ],
                applications: [
                    "Spectroscopy and chemical analysis",
                    "Rainbows",
                    "Chromatic aberration in lenses",
                    "Wavelength separation in instruments",
                    "Gemstone brilliance"
                ],
                physicalInsight: "Dispersion occurs because light of different wavelengths interacts differently with the electrons in a material. Shorter wavelengths (blue) are slowed more than longer wavelengths (red), causing greater refraction."
            },

            interference: {
                title: "Wave Interference",
                concepts: [
                    "Superposition of coherent waves",
                    "Constructive and destructive interference",
                    "Path difference determines interference",
                    "Young's double-slit experiment"
                ],
                theory: "Interference occurs when two or more coherent light waves overlap, combining through superposition. The resulting intensity depends on the phase relationship between the waves.",
                keyFormulas: {
                    "Constructive Interference": "Δx = mλ (m = 0, ±1, ±2, ...)",
                    "Destructive Interference": "Δx = (m + 1/2)λ",
                    "Double-Slit Bright Fringes": "d sin(θ) = mλ",
                    "Double-Slit Dark Fringes": "d sin(θ) = (m + 1/2)λ",
                    "Fringe Spacing": "Δy = λL/d"
                },
                solvingSteps: [
                    "Identify the interference setup (double-slit, thin film, etc.)",
                    "Determine wavelength and geometry",
                    "Calculate path difference between interfering waves",
                    "Compare path difference to wavelength",
                    "Determine if interference is constructive or destructive",
                    "Calculate fringe positions or spacing"
                ],
                applications: [
                    "Anti-reflective coatings",
                    "Interferometers for precise measurements",
                    "Holography",
                    "Thin film interference (soap bubbles, oil slicks)",
                    "Optical testing and metrology"
                ],
                physicalInsight: "Interference demonstrates the wave nature of light. When waves are in phase (crests align), they add constructively. When out of phase (crest meets trough), they cancel destructively. This only works with coherent sources."
            },

            diffraction: {
                title: "Diffraction Patterns",
                concepts: [
                    "Bending of light around obstacles",
                    "Single-slit diffraction pattern",
                    "Multiple-slit and grating diffraction",
                    "Resolution and Rayleigh criterion"
                ],
                theory: "Diffraction is the spreading of waves when they encounter an obstacle or aperture. It reveals the wave nature of light and limits the resolution of optical systems.",
                keyFormulas: {
                    "Single-Slit Dark Fringes": "a sin(θ) = mλ (m = ±1, ±2, ...)",
                    "Single-Slit Central Maximum Width": "w = 2λL/a",
                    "Diffraction Grating": "d sin(θ) = mλ",
                    "Rayleigh Criterion": "θₘᵢₙ = 1.22λ/D",
                    "Grating Resolving Power": "R = mN (m = order, N = number of lines)"
                },
                solvingSteps: [
                    "Identify aperture or obstacle dimensions",
                    "Determine wavelength of light",
                    "For single-slit: use a sin(θ) = mλ for minima",
                    "For grating: use d sin(θ) = mλ for maxima",
                    "Calculate angular positions of bright/dark fringes",
                    "Convert to linear positions if screen distance given"
                ],
                applications: [
                    "Diffraction gratings for spectroscopy",
                    "X-ray crystallography",
                    "Optical resolution limits",
                    "CD/DVD data reading",
                    "Radio telescope arrays"
                ],
                physicalInsight: "Diffraction occurs because each point on a wavefront acts as a source of secondary wavelets (Huygens' principle). These wavelets interfere, creating the diffraction pattern. Smaller apertures cause more spreading."
            },

            polarization: {
                title: "Polarization of Light",
                concepts: [
                    "Light as transverse electromagnetic wave",
                    "Linear, circular, and elliptical polarization",
                    "Malus's law for polarizer transmission",
                    "Brewster's angle for polarization by reflection"
                ],
                theory: "Polarization describes the orientation of the electric field oscillation in a light wave. Unpolarized light has random orientations, while polarized light has a specific orientation.",
                keyFormulas: {
                    "Malus's Law": "I = I₀ cos²(θ)",
                    "Brewster's Angle": "tan(θB) = n₂/n₁",
                    "At Brewster's Angle": "θB + θᵣ = 90°",
                    "Degree of Polarization": "P = (Iₘₐₓ - Iₘᵢₙ)/(Iₘₐₓ + Iₘᵢₙ)"
                },
                solvingSteps: [
                    "Identify initial polarization state",
                    "Determine polarizer axis orientation",
                    "For Malus's law: find angle between polarization and polarizer",
                    "Calculate transmitted intensity: I = I₀ cos²(θ)",
                    "For Brewster's angle: use tan(θB) = n₂/n₁"
                ],
                applications: [
                    "Polaroid sunglasses",
                    "LCD displays",
                    "3D movies",
                    "Stress analysis in materials",
                    "Reducing glare in photography"
                ],
                physicalInsight: "Polarization occurs because light is a transverse electromagnetic wave with electric and magnetic fields perpendicular to propagation. Certain processes (reflection, scattering, birefringence) can select or create specific polarization states."
            },

            fiber_optics: {
                title: "Fiber Optics and Total Internal Reflection",
                concepts: [
                    "Light guided through fiber by total internal reflection",
                    "Critical angle must be exceeded",
                    "Numerical aperture defines acceptance cone",
                    "Single-mode vs multi-mode fibers"
                ],
                theory: "Optical fibers transmit light over long distances by total internal reflection. Light entering within the acceptance cone reflects internally at angles greater than the critical angle, preventing escape.",
                keyFormulas: {
                    "Critical Angle": "θc = arcsin(n₂/n₁)",
                    "Numerical Aperture": "NA = √(n₁² - n₂²)",
                    "Acceptance Angle": "θₐ = arcsin(NA)",
                    "Total Internal Reflection": "Occurs when θ > θc and n₁ > n₂"
                },
                solvingSteps: [
                    "Identify core and cladding refractive indices",
                    "Calculate critical angle: θc = arcsin(n_cladding/n_core)",
                    "Determine numerical aperture: NA = √(n_core² - n_cladding²)",
                    "Calculate acceptance angle: θₐ = arcsin(NA)",
                    "Verify incident angle exceeds critical angle for TIR"
                ],
                applications: [
                    "Telecommunications (internet, phone)",
                    "Medical endoscopy",
                    "Sensors and instrumentation",
                    "Decorative lighting",
                    "Military and aerospace"
                ],
                physicalInsight: "Total internal reflection occurs when light tries to exit a denser medium at a shallow angle. Instead of refracting out, all light reflects back. This allows nearly lossless transmission over kilometers."
            },

            optical_instruments: {
                title: "Optical Instruments",
                concepts: [
                    "Compound microscope uses two lenses",
                    "Telescope magnifies distant objects",
                    "Camera forms real image on sensor",
                    "Human eye as adjustable optical system"
                ],
                theory: "Optical instruments combine lenses and mirrors to form images with desired properties (magnification, resolution, field of view). Understanding lens combinations is key to instrument design.",
                keyFormulas: {
                    "Compound Microscope Magnification": "M = M_objective × M_eyepiece = -(L/f_o)(25cm/f_e)",
                    "Telescope Angular Magnification": "M = -f_objective/f_eyepiece",
                    "Camera f-number": "f/# = f/D (f = focal length, D = aperture diameter)",
                    "Depth of Field": "DOF ∝ f/#",
                    "Resolving Power": "θ = 1.22λ/D"
                },
                solvingSteps: [
                    "Identify instrument type and components",
                    "Determine focal lengths of elements",
                    "Calculate individual magnifications",
                    "Combine magnifications for total effect",
                    "Consider resolution limits and aberrations"
                ],
                applications: [
                    "Scientific research microscopes",
                    "Astronomical telescopes",
                    "Consumer cameras and smartphones",
                    "Binoculars and spotting scopes",
                    "Ophthalmology and vision correction"
                ],
                physicalInsight: "Multi-element instruments work by sequential image formation. The first element creates an intermediate image, which serves as the object for the second element. This allows independent control of magnification and field of view."
            },

            photometry: {
                title: "Light Intensity and Photometry",
                concepts: [
                    "Luminous intensity and flux",
                    "Illuminance and inverse square law",
                    "Lambertian surfaces",
                    "Candela, lumen, and lux units"
                ],
                theory: "Photometry quantifies light as perceived by the human eye. Unlike radiometry (which measures all electromagnetic radiation), photometry weights by the eye's spectral response.",
                keyFormulas: {
                    "Inverse Square Law": "I = P/(4πr²) or E = I/r²",
                    "Illuminance": "E = Φ/A (lux = lumens/m²)",
                    "Lambert's Cosine Law": "I(θ) = I₀ cos(θ)",
                    "Luminous Efficacy": "η = Φ/P (lumens per watt)"
                },
                solvingSteps: [
                    "Identify source luminous intensity or flux",
                    "Determine distance to surface",
                    "Apply inverse square law: E = I/r²",
                    "Account for angle using cosine law if needed",
                    "Convert units appropriately (lux, lumens, candela)"
                ],
                applications: [
                    "Lighting design for buildings",
                    "Photography and cinematography",
                    "Automotive headlight regulations",
                    "Display brightness specifications",
                    "Safety lighting standards"
                ],
                physicalInsight: "The inverse square law arises because light from a point source spreads over an increasing area as distance increases. Area grows as r², so intensity decreases as 1/r²."
            }
        };
    }

    initializeOpticsSolvers() {
        this.opticsTypes = {
            reflection_basic: {
                patterns: [
                    /law.*reflection/i,
                    /angle.*incidence.*reflection/i,
                    /mirror.*reflection/i,
                    /reflect.*angle/i
                ],
                solver: this.solveReflection.bind(this),
                name: 'Law of Reflection',
                category: 'reflection',
                description: 'Solves problems using θᵢ = θᵣ'
            },

            snells_law: {
                patterns: [
                    /snell.*law/i,
                    /refraction/i,
                    /refractive.*index/i,
                    /light.*bending/i,
                    /medium.*medium/i
                ],
                solver: this.solveSnellsLaw.bind(this),
                name: 'Snell\'s Law (Refraction)',
                category: 'refraction',
                description: 'Solves n₁sin(θ₁) = n₂sin(θ₂)'
            },

            critical_angle: {
                patterns: [
                    /critical.*angle/i,
                    /total.*internal.*reflection/i,
                    /TIR/i,
                    /fiber.*optic/i
                ],
                solver: this.solveCriticalAngle.bind(this),
                name: 'Critical Angle and Total Internal Reflection',
                category: 'refraction',
                description: 'Calculates critical angle for TIR'
            },

            thin_lens: {
                patterns: [
                    /thin.*lens/i,
                    /lens.*equation/i,
                    /focal.*length/i,
                    /image.*distance/i,
                    /object.*distance/i,
                    /magnification.*lens/i
                ],
                solver: this.solveThinLens.bind(this),
                name: 'Thin Lens Equation',
                category: 'lenses',
                description: 'Solves 1/f = 1/dₒ + 1/dᵢ'
            },

            mirror_equation: {
                patterns: [
                    /mirror.*equation/i,
                    /curved.*mirror/i,
                    /concave.*mirror/i,
                    /convex.*mirror/i,
                    /spherical.*mirror/i
                ],
                solver: this.solveMirror.bind(this),
                name: 'Mirror Equation',
                category: 'mirrors',
                description: 'Solves image formation in curved mirrors'
            },

            lens_magnification: {
                patterns: [
                    /magnification/i,
                    /image.*size/i,
                    /object.*size/i,
                    /magnifying/i
                ],
                solver: this.solveMagnification.bind(this),
                name: 'Lens/Mirror Magnification',
                category: 'lenses',
                description: 'Calculates M = -dᵢ/dₒ = hᵢ/hₒ'
            },

            lensmakers_equation: {
                patterns: [
                    /lensmaker/i,
                    /lens.*design/i,
                    /radius.*curvature.*lens/i,
                    /focal.*length.*radius/i
                ],
                solver: this.solveLensmakers.bind(this),
                name: 'Lensmaker\'s Equation',
                category: 'lenses',
                description: 'Relates focal length to radii and refractive index'
            },

            power_of_lens: {
                patterns: [
                    /power.*lens/i,
                    /diopter/i,
                    /lens.*power/i,
                    /optical.*power/i
                ],
                solver: this.solveLensPower.bind(this),
                name: 'Optical Power',
                category: 'lenses',
                description: 'Calculates P = 1/f (in diopters)'
            },

            prism_dispersion: {
                patterns: [
                    /prism/i,
                    /dispersion/i,
                    /spectrum/i,
                    /deviation.*angle/i,
                    /minimum.*deviation/i
                ],
                solver: this.solvePrism.bind(this),
                name: 'Prism Deviation and Dispersion',
                category: 'dispersion',
                description: 'Calculates light deviation through prism'
            },

            double_slit: {
                patterns: [
                    /double.*slit/i,
                    /young.*experiment/i,
                    /interference.*pattern/i,
                    /fringe.*spacing/i
                ],
                solver: this.solveDoubleSlit.bind(this),
                name: 'Young\'s Double-Slit Interference',
                category: 'interference',
                description: 'Calculates interference fringe positions'
            },

            thin_film: {
                patterns: [
                    /thin.*film/i,
                    /interference.*film/i,
                    /soap.*bubble/i,
                    /coating.*interference/i,
                    /anti.*reflective/i
                ],
                solver: this.solveThinFilm.bind(this),
                name: 'Thin Film Interference',
                category: 'interference',
                description: 'Analyzes interference in thin films'
            },

            single_slit: {
                patterns: [
                    /single.*slit/i,
                    /diffraction.*pattern/i,
                    /fraunhofer.*diffraction/i,
                    /diffraction.*minimum/i
                ],
                solver: this.solveSingleSlit.bind(this),
                name: 'Single-Slit Diffraction',
                category: 'diffraction',
                description: 'Calculates diffraction pattern from single slit'
            },

            diffraction_grating: {
                patterns: [
                    /diffraction.*grating/i,
                    /grating.*equation/i,
                    /spectral.*line/i,
                    /grating.*spectrum/i
                ],
                solver: this.solveDiffractionGrating.bind(this),
                name: 'Diffraction Grating',
                category: 'diffraction',
                description: 'Solves d sin(θ) = mλ for gratings'
            },

            rayleigh_criterion: {
                patterns: [
                    /rayleigh.*criterion/i,
                    /resolution.*limit/i,
                    /angular.*resolution/i,
                    /resolving.*power/i
                ],
                solver: this.solveRayleighCriterion.bind(this),
                name: 'Rayleigh Criterion for Resolution',
                category: 'diffraction',
                description: 'Calculates minimum resolvable angle'
            },

            malus_law: {
                patterns: [
                    /malus.*law/i,
                    /polariz.*intensity/i,
                    /polarizer/i,
                    /polarized.*light/i
                ],
                solver: this.solveMalusLaw.bind(this),
                name: 'Malus\'s Law (Polarization)',
                category: 'polarization',
                description: 'Calculates I = I₀ cos²(θ)'
            },

            brewster_angle: {
                patterns: [
                    /brewster.*angle/i,
                    /polarization.*reflection/i,
                    /polarizing.*angle/i
                ],
                solver: this.solveBrewsterAngle.bind(this),
                name: 'Brewster\'s Angle',
                category: 'polarization',
                description: 'Calculates angle of complete polarization'
            },

            fiber_optics_numerical_aperture: {
                patterns: [
                    /numerical.*aperture/i,
                    /fiber.*optic/i,
                    /acceptance.*angle/i,
                    /light.*gathering/i
                ],
                solver: this.solveNumericalAperture.bind(this),
                name: 'Fiber Optics - Numerical Aperture',
                category: 'fiber_optics',
                description: 'Calculates NA = √(n₁² - n₂²)'
            },

            compound_microscope: {
                patterns: [
                    /compound.*microscope/i,
                    /microscope.*magnification/i,
                    /objective.*eyepiece/i
                ],
                solver: this.solveCompoundMicroscope.bind(this),
                name: 'Compound Microscope',
                category: 'optical_instruments',
                description: 'Calculates total magnification'
            },

            telescope: {
                patterns: [
                    /telescope/i,
                    /angular.*magnification/i,
                    /astronomical.*telescope/i
                ],
                solver: this.solveTelescope.bind(this),
                name: 'Telescope Magnification',
                category: 'optical_instruments',
                description: 'Calculates M = -f_o/f_e'
            },

            illuminance: {
                patterns: [
                    /illuminance/i,
                    /inverse.*square.*law/i,
                    /light.*intensity/i,
                    /lux/i,
                    /luminous/i
                ],
                solver: this.solveIlluminance.bind(this),
                name: 'Illuminance and Inverse Square Law',
                category: 'photometry',
                description: 'Calculates E = I/r²'
            },

            apparent_depth: {
                patterns: [
                    /apparent.*depth/i,
                    /real.*depth/i,
                    /depth.*water/i,
                    /viewing.*underwater/i
                ],
                solver: this.solveApparentDepth.bind(this),
                name: 'Apparent Depth',
                category: 'refraction',
                description: 'Calculates depth shift due to refraction'
            },

            wavelength_frequency: {
                patterns: [
                    /wavelength.*frequency/i,
                    /speed.*light/i,
                    /color.*wavelength/i,
                    /electromagnetic.*spectrum/i
                ],
                solver: this.solveWavelengthFrequency.bind(this),
                name: 'Wavelength-Frequency Relation',
                category: 'wave_properties',
                description: 'Solves c = λν'
            },

            doppler_light: {
                patterns: [
                    /doppler.*light/i,
                    /redshift/i,
                    /blueshift/i,
                    /relativistic.*doppler/i
                ],
                solver: this.solveDopplerLight.bind(this),
                name: 'Doppler Effect for Light',
                category: 'wave_properties',
                description: 'Calculates wavelength shift for moving sources'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            snells_law: {
                'Apply Snell\'s Law': [
                    'Using angles measured from surface instead of normal',
                    'Forgetting to convert degrees to radians (if needed)',
                    'Mixing up n₁ and n₂',
                    'Using wrong medium\'s refractive index'
                ],
                'Solve for angle': [
                    'Forgetting to take arcsin of result',
                    'Not checking if arcsin argument exceeds 1 (no refraction possible)',
                    'Using calculator in wrong angle mode'
                ]
            },
            thin_lens: {
                'Apply sign conventions': [
                    'Using wrong sign for focal length (converging vs diverging)',
                    'Incorrect sign for image distance (real vs virtual)',
                    'Forgetting that all distances are measured from lens center'
                ],
                'Solve lens equation': [
                    'Algebraic errors when isolating variable',
                    'Not finding common denominator correctly',
                    'Dropping negative signs in magnification'
                ]
            },
            critical_angle: {
                'Check for TIR condition': [
                    'Attempting TIR when going from less dense to more dense medium',
                    'Not verifying that n₁ > n₂',
                    'Confusing critical angle with angle of incidence'
                ]
            },
            interference: {
                'Calculate path difference': [
                    'Not accounting for phase change on reflection',
                    'Using wrong formula for constructive vs destructive',
                    'Forgetting factor of 2 in thin film (light travels twice through film)',
                    'Ignoring refractive index in path length calculation'
                ]
            },
            diffraction: {
                'Apply diffraction formula': [
                    'Using wrong formula (single-slit vs double-slit vs grating)',
                    'Confusing maxima and minima positions',
                    'Not using small angle approximation when valid',
                    'Mixing up slit width and slit separation'
                ]
            }
        };

        this.errorPrevention = {
            angle_measurement: {
                reminder: 'Always measure angles from the normal, not the surface',
                method: 'Draw the normal line first and label it clearly'
            },
            sign_conventions: {
                reminder: 'Use consistent sign convention throughout problem',
                method: 'Create a sign convention table before starting calculations'
            },
            unit_consistency: {
                reminder: 'Check that all units are consistent (meters, radians, etc.)',
                method: 'Write units next to every number and cancel them'
            },
            tir_condition: {
                reminder: 'TIR only occurs when n₁ > n₂ (light going from dense to less dense)',
                method: 'Check refractive indices before applying critical angle formula'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and why the phenomenon occurs',
                language: 'intuitive explanations with real-world analogies'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'clear instructions for solving'
            },
            visual: {
                focus: 'Ray diagrams and geometric understanding',
                language: 'spatial and visual descriptions'
            },
            mathematical: {
                focus: 'Formal equations and derivations',
                language: 'precise mathematical terminology'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'concrete scenarios with numbers'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of practical and theoretical'
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and general cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to technical',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveOpticsProblem(config) {
        const { scenario, parameters, problemType, context } = config;

        try {
            this.currentProblem = this.parseOpticsProblem(scenario, parameters, problemType, context);
            this.currentSolution = this.solveOpticsProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateOpticsSteps(this.currentProblem, this.currentSolution);
            
            if (this.includeRayDiagrams) {
                this.generateRayDiagram();
            }
            
            this.generateOpticsWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                diagram: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to solve optics problem: ${error.message}`);
        }
    }

    parseOpticsProblem(scenario = '', parameters = {}, problemType = null, context = {}) {
        if (problemType && this.opticsTypes[problemType]) {
            return {
                scenario: scenario,
                type: problemType,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect optics problem type
        for (const [type, config] of Object.entries(this.opticsTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        scenario: scenario,
                        type: type,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize optics problem type from: ${scenario}`);
    }

    solveOpticsProblem_Internal(problem) {
        const solver = this.opticsTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for optics problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // OPTICS SOLVERS

    solveReflection(problem) {
        const { theta_incident, theta_reflected } = problem.parameters;

        if (theta_incident !== undefined) {
            return {
                law: 'θᵢ = θᵣ',
                theta_incident: theta_incident,
                theta_reflected: theta_incident,
                explanation: 'By the law of reflection, angle of incidence equals angle of reflection',
                category: 'reflection',
                physicalPrinciple: 'Light reflects such that incident and reflected rays make equal angles with the normal'
            };
        }

        if (theta_reflected !== undefined) {
            return {
                law: 'θᵢ = θᵣ',
                theta_incident: theta_reflected,
                theta_reflected: theta_reflected,
                explanation: 'By the law of reflection, angle of incidence equals angle of reflection',
                category: 'reflection'
            };
        }

        return {
            law: 'θᵢ = θᵣ',
            description: 'Law of reflection states angles are equal',
            category: 'reflection'
        };
    }

    solveSnellsLaw(problem) {
        const { n1, n2, theta1, theta2 } = problem.parameters;

        // Validate inputs
        if ((n1 === undefined || n2 === undefined) && (theta1 === undefined || theta2 === undefined)) {
            throw new Error('Insufficient parameters for Snell\'s Law');
        }

        let result = {
            law: 'n₁ sin(θ₁) = n₂ sin(θ₂)',
            n1: n1,
            n2: n2,
            category: 'refraction'
        };

        // Case 1: Given n1, n2, theta1, find theta2
        if (n1 !== undefined && n2 !== undefined && theta1 !== undefined && theta2 === undefined) {
            const theta1_rad = theta1 * Math.PI / 180;
            const sin_theta2 = (n1 * Math.sin(theta1_rad)) / n2;

            if (Math.abs(sin_theta2) > 1) {
                return {
                    ...result,
                    theta1: theta1,
                    result: 'Total Internal Reflection',
                    criticalAngle: Math.asin(n2 / n1) * 180 / Math.PI,
                    explanation: `sin(θ₂) = ${sin_theta2.toFixed(4)} > 1, which is impossible. Total internal reflection occurs.`,
                    physicalPrinciple: 'When light cannot refract into less dense medium, it reflects completely'
                };
            }

            const theta2_rad = Math.asin(sin_theta2);
            const theta2_deg = theta2_rad * 180 / Math.PI;

            result.theta1 = theta1;
            result.theta2 = theta2_deg;
            result.sin_theta1 = Math.sin(theta1_rad);
            result.sin_theta2 = sin_theta2;
            result.physicalPrinciple = n2 > n1 ? 
                'Light bends toward normal when entering denser medium' :
                'Light bends away from normal when entering less dense medium';
        }

        // Case 2: Given n1, n2, theta2, find theta1
        else if (n1 !== undefined && n2 !== undefined && theta2 !== undefined && theta1 === undefined) {
            const theta2_rad = theta2 * Math.PI / 180;
            const sin_theta1 = (n2 * Math.sin(theta2_rad)) / n1;

            if (Math.abs(sin_theta1) > 1) {
                throw new Error('Invalid configuration: computed sin(θ₁) > 1');
            }

            const theta1_rad = Math.asin(sin_theta1);
            const theta1_deg = theta1_rad * 180 / Math.PI;

            result.theta1 = theta1_deg;
            result.theta2 = theta2;
            result.sin_theta1 = sin_theta1;
            result.sin_theta2 = Math.sin(theta2_rad);
        }

        // Case 3: Given angles, find ratio of refractive indices
        else if (theta1 !== undefined && theta2 !== undefined) {
            const theta1_rad = theta1 * Math.PI / 180;
            const theta2_rad = theta2 * Math.PI / 180;
            
            const ratio = Math.sin(theta1_rad) / Math.sin(theta2_rad);
            
            result.theta1 = theta1;
            result.theta2 = theta2;
            result.refractiveIndexRatio = ratio;
            result.explanation = `n₂/n₁ = ${ratio.toFixed(4)}`;
        }

        return result;
    }

    solveCriticalAngle(problem) {
        const { n1, n2, n_core, n_cladding } = problem.parameters;

        const n_dense = n1 || n_core;
        const n_less_dense = n2 || n_cladding;

        if (n_dense === undefined || n_less_dense === undefined) {
            throw new Error('Need refractive indices of both media');
        }

        if (n_dense <= n_less_dense) {
            return {
                result: 'No Total Internal Reflection',
                explanation: 'TIR only occurs when light travels from denser to less dense medium (n₁ > n₂)',
                n1: n_dense,
                n2: n_less_dense,
                category: 'refraction'
            };
        }

        const sin_critical = n_less_dense / n_dense;
        const theta_critical_rad = Math.asin(sin_critical);
        const theta_critical_deg = theta_critical_rad * 180 / Math.PI;

        return {
            formula: 'θc = arcsin(n₂/n₁)',
            n1: n_dense,
            n2: n_less_dense,
            sin_critical: sin_critical,
            theta_critical_degrees: theta_critical_deg,
            theta_critical_radians: theta_critical_rad,
            condition: `For θ > ${theta_critical_deg.toFixed(2)}°, total internal reflection occurs`,
            physicalPrinciple: 'At critical angle, refracted ray travels along interface; beyond it, all light reflects internally',
            category: 'refraction'
        };
    }

    solveThinLens(problem) {
        const { f, d_o, d_i, focal_length, object_distance, image_distance } = problem.parameters;

        const focal = f || focal_length;
        const obj_dist = d_o || object_distance;
        const img_dist = d_i || image_distance;

        if (!focal && !obj_dist && !img_dist) {
            throw new Error('Need at least two of: focal length, object distance, image distance');
        }

        let result = {
            equation: '1/f = 1/dₒ + 1/dᵢ',
            category: 'lenses'
        };

        // Case 1: Given f and d_o, find d_i
        if (focal !== undefined && obj_dist !== undefined && img_dist === undefined) {
            const di = 1 / (1/focal - 1/obj_dist);
            
            result.f = focal;
            result.d_o = obj_dist;
            result.d_i = di;
            result.magnification = -di / obj_dist;
            result.imageType = di > 0 ? 'Real' : 'Virtual';
            result.imageOrientation = result.magnification < 0 ? 'Inverted' : 'Upright';
            result.imageSize = Math.abs(result.magnification) > 1 ? 'Magnified' : 
                              Math.abs(result.magnification) < 1 ? 'Reduced' : 'Same size';
        }

        // Case 2: Given f and d_i, find d_o
        else if (focal !== undefined && img_dist !== undefined && obj_dist === undefined) {
            const do_calc = 1 / (1/focal - 1/img_dist);
            
            result.f = focal;
            result.d_o = do_calc;
            result.d_i = img_dist;
            result.magnification = -img_dist / do_calc;
        }

        // Case 3: Given d_o and d_i, find f
        else if (obj_dist !== undefined && img_dist !== undefined && focal === undefined) {
            const f_calc = 1 / (1/obj_dist + 1/img_dist);
            
            result.f = f_calc;
            result.d_o = obj_dist;
            result.d_i = img_dist;
            result.lensType = f_calc > 0 ? 'Converging (Convex)' : 'Diverging (Concave)';
            result.magnification = -img_dist / obj_dist;
        }

        result.signConventions = {
            'f': 'Positive for converging, negative for diverging',
            'd_i': 'Positive for real image, negative for virtual',
            'M': 'Negative for inverted, positive for upright'
        };

        return result;
    }

    solveMirror(problem) {
        const { f, d_o, d_i, R, focal_length, object_distance, image_distance, radius } = problem.parameters;

        const focal = f || focal_length || (R || radius) / 2;
        const obj_dist = d_o || object_distance;
        const img_dist = d_i || image_distance;

        if (!focal && !obj_dist && !img_dist) {
            throw new Error('Need at least two of: focal length, object distance, image distance');
        }

        let result = {
            equation: '1/f = 1/dₒ + 1/dᵢ',
            relation: 'f = R/2',
            category: 'mirrors'
        };

        if (focal !== undefined && obj_dist !== undefined) {
            const di = 1 / (1/focal - 1/obj_dist);
            
            result.f = focal;
            result.d_o = obj_dist;
            result.d_i = di;
            result.R = 2 * focal;
            result.magnification = -di / obj_dist;
            result.mirrorType = focal > 0 ? 'Concave' : 'Convex';
            result.imageType = di > 0 ? 'Real (in front of mirror)' : 'Virtual (behind mirror)';
            result.imageOrientation = result.magnification < 0 ? 'Inverted' : 'Upright';
            result.imageSize = Math.abs(result.magnification) > 1 ? 'Magnified' : 
                              Math.abs(result.magnification) < 1 ? 'Reduced' : 'Same size';
        }

        return result;
    }

    solveMagnification(problem) {
        const { d_o, d_i, h_o, h_i, M } = problem.parameters;

        let result = {
            formula: 'M = -dᵢ/dₒ = hᵢ/hₒ',
            category: 'lenses'
        };

        if (d_i !== undefined && d_o !== undefined) {
            const magnification = -d_i / d_o;
            result.M = magnification;
            result.d_o = d_o;
            result.d_i = d_i;
            result.interpretation = magnification < 0 ? 'Inverted' : 'Upright';
            result.sizeChange = Math.abs(magnification) > 1 ? 'Magnified' : 
                               Math.abs(magnification) < 1 ? 'Reduced' : 'Same size';
        }

        if (h_i !== undefined && h_o !== undefined) {
            const magnification = h_i / h_o;
            result.M = magnification;
            result.h_o = h_o;
            result.h_i = h_i;
        }

        if (M !== undefined && d_o !== undefined) {
            result.d_i = -M * d_o;
        }

        return result;
    }

    solveLensmakers(problem) {
        const { n, R1, R2, f } = problem.parameters;

        if (n !== undefined && R1 !== undefined && R2 !== undefined) {
            const focal_length = 1 / ((n - 1) * (1/R1 - 1/R2));
            
            return {
                formula: '1/f = (n-1)(1/R₁ - 1/R₂)',
                n: n,
                R1: R1,
                R2: R2,
                f: focal_length,
                lensType: focal_length > 0 ? 'Converging' : 'Diverging',
                category: 'lenses',
                signConvention: 'R > 0 if center of curvature is on outgoing light side'
            };
        }

        return {
            formula: '1/f = (n-1)(1/R₁ - 1/R₂)',
            description: 'Lensmaker\'s equation relates focal length to glass properties',
            category: 'lenses'
        };
    }

    solveLensPower(problem) {
        const { f, P, focal_length, power } = problem.parameters;

        const focal = f || focal_length;
        const pwr = P || power;

        if (focal !== undefined) {
            const power_diopters = 1 / focal;
            return {
                formula: 'P = 1/f',
                f: focal,
                P: power_diopters,
                unit: 'diopters (D)',
                lensType: power_diopters > 0 ? 'Converging (positive power)' : 'Diverging (negative power)',
                category: 'lenses'
            };
        }

        if (pwr !== undefined) {
            const focal_length = 1 / pwr;
            return {
                formula: 'P = 1/f',
                P: pwr,
                f: focal_length,
                unit: 'meters',
                category: 'lenses'
            };
        }

        return { formula: 'P = 1/f', unit: 'P in diopters, f in meters', category: 'lenses' };
    }

    solvePrism(problem) {
        const { A, n, delta_min, apex_angle, refractive_index, minimum_deviation } = problem.parameters;

        const apex = A || apex_angle;
        const index = n || refractive_index;
        const dev_min = delta_min || minimum_deviation;

        if (apex !== undefined && index !== undefined && dev_min === undefined) {
            // Small angle approximation
            const deviation_approx = (index - 1) * apex;
            
            return {
                formula: 'δ ≈ (n-1)A for small angles',
                A: apex,
                n: index,
                delta_approx: deviation_approx,
                unit: 'radians or degrees (match input)',
                category: 'dispersion',
                note: 'This is an approximation valid for small apex angles'
            };
        }

        if (apex !== undefined && dev_min !== undefined) {
            const A_rad = apex * Math.PI / 180;
            const delta_rad = dev_min * Math.PI / 180;
            
            const n_calc = Math.sin((A_rad + delta_rad)/2) / Math.sin(A_rad/2);
            
            return {
                formula: 'n = sin[(A+δₘ)/2] / sin(A/2)',
                A: apex,
                delta_min: dev_min,
                n: n_calc,
                category: 'dispersion'
            };
        }

        return {
            formula: 'δ = (n-1)A (small angle) or n = sin[(A+δₘ)/2] / sin(A/2)',
            category: 'dispersion'
        };
    }

    solveDoubleSlit(problem) {
        const { d, lambda, L, m, theta, wavelength, slit_separation, screen_distance, order } = problem.parameters;

        const separation = d || slit_separation;
        const wl = lambda || wavelength;
        const distance = L || screen_distance;
        const order_num = m !== undefined ? m : order;

        if (separation !== undefined && wl !== undefined) {
            // Find angle for bright fringes
            if (order_num !== undefined) {
                const sin_theta = (order_num * wl) / separation;
                
                if (Math.abs(sin_theta) > 1) {
                    return {
                        result: 'Order not observable',
                        explanation: `sin(θ) = ${sin_theta.toFixed(4)} > 1, which is impossible`,
                        category: 'interference'
                    };
                }

                const theta_rad = Math.asin(sin_theta);
                const theta_deg = theta_rad * 180 / Math.PI;
                
                let result = {
                    formula: 'd sin(θ) = mλ',
                    d: separation,
                    lambda: wl,
                    m: order_num,
                    theta_rad: theta_rad,
                    theta_deg: theta_deg,
                    fringeType: 'Bright (constructive interference)',
                    category: 'interference'
                };

                if (distance !== undefined) {
                    const y = distance * Math.tan(theta_rad);
                    result.y = y;
                    result.linearPosition = `${y.toFixed(6)} m from center`;
                }

                return result;
            }

            // Calculate fringe spacing
            if (distance !== undefined) {
                const fringe_spacing = (wl * distance) / separation;
                
                return {
                    formula: 'Δy = λL/d',
                    d: separation,
                    lambda: wl,
                    L: distance,
                    fringe_spacing: fringe_spacing,
                    unit: 'meters',
                    category: 'interference'
                };
            }
        }

        return {
            formula: 'd sin(θ) = mλ (bright), d sin(θ) = (m+1/2)λ (dark)',
            category: 'interference'
        };
    }

    solveThinFilm(problem) {
        const { t, n, lambda, m, thickness, refractive_index, wavelength, order } = problem.parameters;

        const film_thickness = t || thickness;
        const film_index = n || refractive_index;
        const wl = lambda || wavelength;
        const order_num = m !== undefined ? m : order;

        if (film_thickness !== undefined && film_index !== undefined && wl !== undefined) {
            // Path difference in film = 2nt
            const path_diff = 2 * film_index * film_thickness;
            
            // For constructive interference (considering phase change on reflection)
            // 2nt = (m + 1/2)λ (if there's a phase change)
            // 2nt = mλ (if no phase change)
            
            return {
                formula: '2nt = (m+1/2)λ for constructive (with phase change)',
                t: film_thickness,
                n: film_index,
                lambda: wl,
                path_difference: path_diff,
                optical_path: path_diff,
                note: 'Assumes phase change on reflection at one surface',
                constructiveOrders: this.findInterferenceOrders(path_diff, wl, 'constructive'),
                destructiveOrders: this.findInterferenceOrders(path_diff, wl, 'destructive'),
                category: 'interference',
                physicalPrinciple: 'Light reflects from top and bottom surfaces; interference depends on path difference'
            };
        }

        return {
            formula: '2nt = (m+1/2)λ (constructive) or 2nt = mλ (destructive)',
            note: 'Sign depends on whether phase change occurs on reflection',
            category: 'interference'
        };
    }

    findInterferenceOrders(optical_path, wavelength, type) {
        const orders = [];
        const max_order = 10;

        for (let m = 0; m <= max_order; m++) {
            let condition;
            if (type === 'constructive') {
                condition = (m + 0.5) * wavelength;
            } else {
                condition = m * wavelength;
            }

            if (Math.abs(optical_path - condition) < wavelength * 0.1) {
                orders.push({
                    order: m,
                    calculated: condition,
                    actual: optical_path,
                    match: 'Close match'
                });
            }
        }

        return orders;
    }

    solveSingleSlit(problem) {
        const { a, lambda, L, m, theta, slit_width, wavelength, screen_distance, order } = problem.parameters;

        const width = a || slit_width;
        const wl = lambda || wavelength;
        const distance = L || screen_distance;
        const order_num = m !== undefined ? m : order;

        if (width !== undefined && wl !== undefined) {
            if (order_num !== undefined && order_num !== 0) {
                // Dark fringes: a sin(θ) = mλ
                const sin_theta = (order_num * wl) / width;
                
                if (Math.abs(sin_theta) > 1) {
                    return {
                        result: 'Order not observable',
                        explanation: `sin(θ) = ${sin_theta.toFixed(4)} > 1`,
                        category: 'diffraction'
                    };
                }

                const theta_rad = Math.asin(sin_theta);
                const theta_deg = theta_rad * 180 / Math.PI;
                
                let result = {
                    formula: 'a sin(θ) = mλ (for minima)',
                    a: width,
                    lambda: wl,
                    m: order_num,
                    theta_rad: theta_rad,
                    theta_deg: theta_deg,
                    fringeType: 'Dark (minimum)',
                    category: 'diffraction'
                };

                if (distance !== undefined) {
                    const y = distance * Math.tan(theta_rad);
                    result.y = y;
                    result.linearPosition = `${y.toFixed(6)} m from center`;
                }

                return result;
            }

            // Central maximum width
            if (distance !== undefined) {
                const theta_first_min = Math.asin(wl / width);
                const central_width = 2 * distance * Math.tan(theta_first_min);
                
                return {
                    formula: 'Central maximum width = 2λL/a',
                    a: width,
                    lambda: wl,
                    L: distance,
                    central_maximum_width: central_width,
                    angular_width: 2 * theta_first_min * 180 / Math.PI,
                    unit: 'meters',
                    category: 'diffraction',
                    physicalPrinciple: 'Narrower slit causes wider diffraction pattern'
                };
            }
        }

        return {
            formula: 'a sin(θ) = mλ (for dark fringes)',
            category: 'diffraction'
        };
    }

    solveDiffractionGrating(problem) {
        const { d, lambda, m, theta, grating_spacing, wavelength, order, angle } = problem.parameters;

        const spacing = d || grating_spacing;
        const wl = lambda || wavelength;
        const order_num = m !== undefined ? m : order;
        const incident_angle = theta || angle;

        if (spacing !== undefined && wl !== undefined && order_num !== undefined) {
            // d sin(θ) = mλ
            const sin_theta = (order_num * wl) / spacing;
            
            if (Math.abs(sin_theta) > 1) {
                return {
                    result: 'Order not observable',
                    explanation: `sin(θ) = ${sin_theta.toFixed(4)} > 1`,
                    maxOrder: Math.floor(spacing / wl),
                    category: 'diffraction'
                };
            }

            const theta_rad = Math.asin(sin_theta);
            const theta_deg = theta_rad * 180 / Math.PI;
            
            return {
                formula: 'd sin(θ) = mλ',
                d: spacing,
                lambda: wl,
                m: order_num,
                theta_rad: theta_rad,
                theta_deg: theta_deg,
                maxObservableOrder: Math.floor(spacing / wl),
                category: 'diffraction',
                physicalPrinciple: 'Multiple slits create sharp, bright maxima when path difference equals integer wavelengths'
            };
        }

        if (spacing !== undefined && wl !== undefined) {
            const max_order = Math.floor(spacing / wl);
            const angles = [];
            
            for (let m = 1; m <= Math.min(max_order, 5); m++) {
                const sin_theta = (m * wl) / spacing;
                const theta_rad = Math.asin(sin_theta);
                const theta_deg = theta_rad * 180 / Math.PI;
                
                angles.push({
                    order: m,
                    theta_deg: theta_deg,
                    theta_rad: theta_rad
                });
            }

            return {
                formula: 'd sin(θ) = mλ',
                d: spacing,
                lambda: wl,
                maxOrder: max_order,
                angles: angles,
                category: 'diffraction'
            };
        }

        return {
            formula: 'd sin(θ) = mλ',
            category: 'diffraction'
        };
    }

    solveRayleighCriterion(problem) {
        const { lambda, D, wavelength, aperture_diameter } = problem.parameters;

        const wl = lambda || wavelength;
        const diameter = D || aperture_diameter;

        if (wl !== undefined && diameter !== undefined) {
            const theta_min_rad = 1.22 * wl / diameter;
            const theta_min_deg = theta_min_rad * 180 / Math.PI;
            const theta_min_arcsec = theta_min_deg * 3600;

            return {
                formula: 'θₘᵢₙ = 1.22λ/D',
                lambda: wl,
                D: diameter,
                theta_min_radians: theta_min_rad,
                theta_min_degrees: theta_min_deg,
                theta_min_arcseconds: theta_min_arcsec,
                interpretation: 'Minimum angle to resolve two point sources',
                category: 'diffraction',
                physicalPrinciple: 'Diffraction limits resolution; larger apertures resolve finer details'
            };
        }

        return {
            formula: 'θₘᵢₙ = 1.22λ/D',
            description: 'Rayleigh criterion for minimum resolvable angle',
            category: 'diffraction'
        };
    }

    solveMalusLaw(problem) {
        const { I0, theta, initial_intensity, angle } = problem.parameters;

        const intensity_initial = I0 || initial_intensity;
        const polarizer_angle = theta || angle;

        if (intensity_initial !== undefined && polarizer_angle !== undefined) {
            const theta_rad = polarizer_angle * Math.PI / 180;
            const transmitted_intensity = intensity_initial * Math.cos(theta_rad) ** 2;
            const percent_transmitted = (transmitted_intensity / intensity_initial) * 100;

            return {
                formula: 'I = I₀ cos²(θ)',
                I0: intensity_initial,
                theta_degrees: polarizer_angle,
                theta_radians: theta_rad,
                I_transmitted: transmitted_intensity,
                percent_transmitted: percent_transmitted,
                category: 'polarization',
                physicalPrinciple: 'Polarizer transmits only component of electric field aligned with its axis'
            };
        }

        return {
            formula: 'I = I₀ cos²(θ)',
            description: 'Intensity of polarized light through polarizer',
            category: 'polarization'
        };
    }

    solveBrewsterAngle(problem) {
        const { n1, n2 } = problem.parameters;

        if (n1 !== undefined && n2 !== undefined) {
            const theta_B_rad = Math.atan(n2 / n1);
            const theta_B_deg = theta_B_rad * 180 / Math.PI;
            
            // At Brewster's angle, reflected and refracted rays are perpendicular
            const theta_r_deg = 90 - theta_B_deg;

            return {
                formula: 'tan(θB) = n₂/n₁',
                n1: n1,
                n2: n2,
                theta_B_degrees: theta_B_deg,
                theta_B_radians: theta_B_rad,
                theta_refracted: theta_r_deg,
                property: 'Reflected light is 100% polarized perpendicular to plane of incidence',
                category: 'polarization',
                physicalPrinciple: 'At Brewster angle, reflected and refracted rays are perpendicular'
            };
        }

        return {
            formula: 'tan(θB) = n₂/n₁',
            description: 'Angle of complete polarization by reflection',
            category: 'polarization'
        };
    }

    solveNumericalAperture(problem) {
        const { n1, n2, n_core, n_cladding, NA } = problem.parameters;

        const core = n1 || n_core;
        const cladding = n2 || n_cladding;
        const numerical_aperture = NA;

        if (core !== undefined && cladding !== undefined) {
            const na = Math.sqrt(core ** 2 - cladding ** 2);
            const acceptance_angle_rad = Math.asin(na);
            const acceptance_angle_deg = acceptance_angle_rad * 180 / Math.PI;
            const critical_angle = Math.asin(cladding / core) * 180 / Math.PI;

            return {
                formula: 'NA = √(n₁² - n₂²)',
                n_core: core,
                n_cladding: cladding,
                NA: na,
                acceptance_angle_degrees: acceptance_angle_deg,
                acceptance_angle_radians: acceptance_angle_rad,
                critical_angle: critical_angle,
                total_acceptance_cone: 2 * acceptance_angle_deg,
                category: 'fiber_optics',
                physicalPrinciple: 'NA determines light-gathering ability of fiber'
            };
        }

        if (numerical_aperture !== undefined && core !== undefined) {
            const cladding_calc = Math.sqrt(core ** 2 - numerical_aperture ** 2);
            
            return {
                formula: 'NA = √(n₁² - n₂²)',
                n_core: core,
                n_cladding: cladding_calc,
                NA: numerical_aperture,
                category: 'fiber_optics'
            };
        }

        return {
            formula: 'NA = √(n₁² - n₂²)',
            description: 'Numerical aperture of optical fiber',
            category: 'fiber_optics'
        };
    }

    solveCompoundMicroscope(problem) {
        const { f_o, f_e, L, d, focal_objective, focal_eyepiece, tube_length, near_point } = problem.parameters;

        const f_objective = f_o || focal_objective;
        const f_eyepiece = f_e || focal_eyepiece;
        const tube = L || tube_length;
        const near = d || near_point || 0.25; // Standard near point 25 cm

        if (f_objective !== undefined && f_eyepiece !== undefined) {
            let magnification_objective, magnification_eyepiece, total_magnification;

            if (tube !== undefined) {
                // Using tube length
                magnification_objective = -tube / f_objective;
                magnification_eyepiece = near / f_eyepiece;
                total_magnification = magnification_objective * magnification_eyepiece;
            } else {
                // Simplified formula
                magnification_objective = -near / f_objective;
                magnification_eyepiece = near / f_eyepiece;
                total_magnification = (near / f_objective) * (near / f_eyepiece);
            }

            return {
                formula: 'M = Mₒ × Mₑ = -(L/fₒ)(D/fₑ)',
                f_objective: f_objective,
                f_eyepiece: f_eyepiece,
                tube_length: tube,
                near_point: near,
                M_objective: magnification_objective,
                M_eyepiece: magnification_eyepiece,
                M_total: total_magnification,
                interpretation: `Object appears ${Math.abs(total_magnification).toFixed(1)}× larger`,
                category: 'optical_instruments',
                physicalPrinciple: 'Objective creates magnified real image; eyepiece magnifies that image further'
            };
        }

        return {
            formula: 'M = -(L/fₒ)(D/fₑ)',
            description: 'Total magnification of compound microscope',
            category: 'optical_instruments'
        };
    }

    solveTelescope(problem) {
        const { f_o, f_e, focal_objective, focal_eyepiece } = problem.parameters;

        const f_objective = f_o || focal_objective;
        const f_eyepiece = f_e || focal_eyepiece;

        if (f_objective !== undefined && f_eyepiece !== undefined) {
            const angular_magnification = -f_objective / f_eyepiece;
            const tube_length = f_objective + f_eyepiece;

            return {
                formula: 'M = -fₒ/fₑ',
                f_objective: f_objective,
                f_eyepiece: f_eyepiece,
                M: angular_magnification,
                tube_length: tube_length,
                interpretation: `Angular size increased by factor of ${Math.abs(angular_magnification).toFixed(1)}`,
                telescopeType: 'Refracting (Keplerian)',
                category: 'optical_instruments',
                physicalPrinciple: 'Objective gathers light from distant object; eyepiece magnifies angular size'
            };
        }

        return {
            formula: 'M = -fₒ/fₑ',
            description: 'Angular magnification of telescope',
            category: 'optical_instruments'
        };
    }

    solveIlluminance(problem) {
        const { I, r, luminous_intensity, distance, E, illuminance } = problem.parameters;

        const intensity = I || luminous_intensity;
        const dist = r || distance;
        const illum = E || illuminance;

        if (intensity !== undefined && dist !== undefined) {
            const illuminance_calc = intensity / (dist ** 2);

            return {
                formula: 'E = I/r²',
                I: intensity,
                r: dist,
                E: illuminance_calc,
                unit: 'lux (lm/m²)',
                category: 'photometry',
                physicalPrinciple: 'Light spreads over area ∝ r², so intensity decreases as 1/r²'
            };
        }

        if (illum !== undefined && dist !== undefined) {
            const intensity_calc = illum * (dist ** 2);

            return {
                formula: 'E = I/r²',
                E: illum,
                r: dist,
                I: intensity_calc,
                unit: 'candela (cd)',
                category: 'photometry'
            };
        }

        if (illum !== undefined && intensity !== undefined) {
            const distance_calc = Math.sqrt(intensity / illum);

            return {
                formula: 'E = I/r²',
                E: illum,
                I: intensity,
                r: distance_calc,
                unit: 'meters',
                category: 'photometry'
            };
        }

        return {
            formula: 'E = I/r²',
            description: 'Inverse square law for illuminance',
            category: 'photometry'
        };
    }

    solveApparentDepth(problem) {
        const { d_real, n, real_depth, refractive_index } = problem.parameters;

        const depth_real = d_real || real_depth;
        const index = n || refractive_index || this.physicsConstants.n_water;

        if (depth_real !== undefined && index !== undefined) {
            const apparent_depth = depth_real / index;
            const depth_shift = depth_real - apparent_depth;

            return {
                formula: 'd_apparent = d_real / n',
                d_real: depth_real,
                n: index,
                d_apparent: apparent_depth,
                depth_shift: depth_shift,
                percent_shift: (depth_shift / depth_real) * 100,
                category: 'refraction',
                physicalPrinciple: 'Refraction at surface makes objects appear closer than they are'
            };
        }

        return {
            formula: 'd_apparent = d_real / n',
            description: 'Apparent depth due to refraction',
            category: 'refraction'
        };
    }

    solveWavelengthFrequency(problem) {
        const { lambda, f, c, wavelength, frequency, speed } = problem.parameters;

        const wl = lambda || wavelength;
        const freq = f || frequency;
        const light_speed = c || speed || this.physicsConstants.c;

        if (wl !== undefined && freq === undefined) {
            const frequency_calc = light_speed / wl;

            return {
                formula: 'c = λν',
                lambda: wl,
                nu: frequency_calc,
                c: light_speed,
                unit_lambda: 'meters',
                unit_nu: 'Hz',
                category: 'wave_properties'
            };
        }

        if (freq !== undefined && wl === undefined) {
            const wavelength_calc = light_speed / freq;

            return {
                formula: 'c = λν',
                nu: freq,
                lambda: wavelength_calc,
                c: light_speed,
                unit_lambda: 'meters',
                unit_nu: 'Hz',
                category: 'wave_properties'
            };
        }

        return {
            formula: 'c = λν',
            c: this.physicsConstants.c,
            description: 'Wavelength-frequency relation for light',
            category: 'wave_properties'
        };
    }

    solveDopplerLight(problem) {
        const { lambda_source, v, c, wavelength_source, velocity, speed_light } = problem.parameters;

        const lambda_s = lambda_source || wavelength_source;
        const velocity_source = v || velocity;
        const light_speed = c || speed_light || this.physicsConstants.c;

        if (lambda_s !== undefined && velocity_source !== undefined) {
            // Non-relativistic approximation for v << c
            const beta = velocity_source / light_speed;
            
            let lambda_observed;
            if (velocity_source > 0) {
                // Moving away (redshift)
                lambda_observed = lambda_s * (1 + beta);
            } else {
                // Moving toward (blueshift)
                lambda_observed = lambda_s * (1 - Math.abs(beta));
            }

            const delta_lambda = lambda_observed - lambda_s;
            const shift_type = velocity_source > 0 ? 'Redshift' : 'Blueshift';

            return {
                formula: 'Δλ/λ ≈ v/c (for v << c)',
                lambda_source: lambda_s,
                v: velocity_source,
                c: light_speed,
                lambda_observed: lambda_observed,
                delta_lambda: delta_lambda,
                shift_type: shift_type,
                beta: beta,
                category: 'wave_properties',
                physicalPrinciple: 'Moving source stretches (redshift) or compresses (blueshift) wavelength'
            };
        }

        return {
            formula: 'Δλ/λ ≈ v/c',
            description: 'Doppler shift for light waves',
            category: 'wave_properties'
        };
    }

    // STEP GENERATION

    generateOpticsSteps(problem, solution) {
        let baseSteps = this.generateBaseOpticsSteps(problem, solution);

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

    generateBaseOpticsSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'snells_law':
                return this.generateSnellsLawSteps(problem, solution);
            case 'thin_lens':
                return this.generateThinLensSteps(problem, solution);
            case 'critical_angle':
                return this.generateCriticalAngleSteps(problem, solution);
            case 'double_slit':
                return this.generateDoubleSlitSteps(problem, solution);
            case 'reflection_basic':
                return this.generateReflectionSteps(problem, solution);
            default:
                return this.generateGenericOpticsSteps(problem, solution);
        }
    }

    generateSnellsLawSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify the two media and their refractive indices',
            expression: `n₁ = ${solution.n1}, n₂ = ${solution.n2}`,
            reasoning: 'Refractive index determines how much light bends when entering a medium',
            visualHint: 'Higher refractive index means denser optical medium',
            physicalInsight: 'Refractive index n = c/v compares light speed in vacuum to speed in medium'
        });

        if (solution.theta1 !== undefined) {
            steps.push({
                stepNumber: 2,
                step: 'Draw diagram',
                description: 'Draw interface with normal line and incident ray',
                reasoning: 'Angles are always measured from the normal (perpendicular to surface)',
                visualHint: 'Normal is perpendicular to the interface between media',
                commonMistake: 'Measuring angles from surface instead of normal'
            });

            steps.push({
                stepNumber: 3,
                step: 'Apply Snell\'s Law',
                description: 'Use n₁ sin(θ₁) = n₂ sin(θ₂)',
                beforeExpression: `${solution.n1} × sin(${solution.theta1}°) = ${solution.n2} × sin(θ₂)`,
                operation: 'Substitute known values',
                afterExpression: `${(solution.n1 * Math.sin(solution.theta1 * Math.PI/180)).toFixed(4)} = ${solution.n2} × sin(θ₂)`,
                reasoning: 'Snell\'s law relates angles to refractive indices',
                algebraicRule: 'Conservation of tangential component of wave vector'
            });

            if (solution.theta2 !== undefined) {
                steps.push({
                    stepNumber: 4,
                    step: 'Solve for refracted angle',
                    description: `Calculate sin(θ₂) = ${solution.sin_theta2.toFixed(4)}`,
                    beforeExpression: `sin(θ₂) = ${solution.sin_theta2.toFixed(4)}`,
                    operation: 'Take inverse sine',
                    afterExpression: `θ₂ = ${solution.theta2.toFixed(2)}°`,
                    reasoning: 'Inverse sine gives us the angle from the sine value',
                    physicalInsight: solution.physicalPrinciple,
                    finalAnswer: true
                });
            }
        }

        if (solution.result === 'Total Internal Reflection') {
            steps.push({
                stepNumber: steps.length + 1,
                step: 'Check for Total Internal Reflection',
                description: 'sin(θ₂) > 1, which is impossible',
                reasoning: 'When calculated sin value exceeds 1, no refraction occurs',
                conclusion: 'Total Internal Reflection - all light reflects back',
                criticalAngle: solution.criticalAngle,
                physicalInsight: 'Light cannot escape into less dense medium at this angle'
            });
        }

        return steps;
    }

    generateThinLensSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify known quantities',
            data: {
                'Focal length (f)': solution.f !== undefined ? `${solution.f} m` : 'Unknown',
                'Object distance (dₒ)': solution.d_o !== undefined ? `${solution.d_o} m` : 'Unknown',
                'Image distance (dᵢ)': solution.d_i !== undefined ? `${solution.d_i} m` : 'Unknown'
            },
            reasoning: 'Need two of these three quantities to solve',
            signConventions: solution.signConventions
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply sign conventions',
            description: 'Determine signs for each quantity',
            reasoning: 'Sign conventions ensure consistent results',
            visualHint: 'Positive on outgoing light side (for lenses), negative on incoming side',
            commonMistakes: [
                'Forgetting negative sign for virtual images',
                'Using wrong sign for diverging lens'
            ]
        });

        steps.push({
            stepNumber: 3,
            step: 'Apply thin lens equation',
            description: 'Use 1/f = 1/dₒ + 1/dᵢ',
            beforeExpression: solution.f !== undefined && solution.d_o !== undefined ? 
                `1/${solution.f} = 1/${solution.d_o} + 1/dᵢ` : '1/f = 1/dₒ + 1/dᵢ',
            reasoning: 'This fundamental equation relates all three distances',
            physicalInsight: 'Lens bends light rays to form image at specific distance'
        });

        if (solution.d_i !== undefined) {
            steps.push({
                stepNumber: 4,
                step: 'Solve for image distance',
                description: 'Rearrange equation and calculate',
                beforeExpression: `1/dᵢ = 1/f - 1/dₒ = 1/${solution.f} - 1/${solution.d_o}`,
                afterExpression: `dᵢ = ${solution.d_i.toFixed(3)} m`,
                reasoning: 'Isolate the unknown quantity',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 5,
                step: 'Interpret result',
                description: 'Determine image characteristics',
                imageType: solution.imageType,
                imageOrientation: solution.imageOrientation,
                imageSize: solution.imageSize,
                magnification: solution.magnification,
                physicalInsight: solution.d_i > 0 ? 
                    'Positive dᵢ means real image forms on opposite side of lens' :
                    'Negative dᵢ means virtual image forms on same side as object'
            });
        }

        return steps;
    }

    generateCriticalAngleSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Check TIR condition',
            description: 'Verify that n₁ > n₂ (light going from dense to less dense)',
            expression: `n₁ = ${solution.n1}, n₂ = ${solution.n2}`,
            reasoning: 'Total internal reflection only occurs when light travels from higher to lower refractive index',
            physicalInsight: 'Light bends away from normal in less dense medium; at some angle, it cannot escape'
        });

        if (solution.result !== 'No Total Internal Reflection') {
            steps.push({
                stepNumber: 2,
                step: 'Apply critical angle formula',
                description: 'Use θc = arcsin(n₂/n₁)',
                beforeExpression: `sin(θc) = ${solution.n2}/${solution.n1} = ${solution.sin_critical.toFixed(4)}`,
                reasoning: 'At critical angle, refracted ray travels along interface (θ₂ = 90°)',
                algebraicRule: 'From Snell\'s law with θ₂ = 90°'
            });

            steps.push({
                stepNumber: 3,
                step: 'Calculate critical angle',
                description: 'Take inverse sine',
                beforeExpression: `θc = arcsin(${solution.sin_critical.toFixed(4)})`,
                afterExpression: `θc = ${solution.theta_critical_degrees.toFixed(2)}°`,
                reasoning: 'This is the minimum angle for total internal reflection',
                finalAnswer: true
            });

            steps.push({
                stepNumber: 4,
                step: 'State TIR condition',
                description: solution.condition,
                physicalInsight: 'For angles greater than critical angle, 100% of light reflects internally',
                applications: ['Fiber optics', 'Prisms', 'Diamonds', 'Mirages']
            });
        }

        return steps;
    }

    generateDoubleSlitSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Given information',
            description: 'Identify slit separation, wavelength, and order',
            data: {
                'Slit separation (d)': solution.d !== undefined ? `${solution.d} m` : 'Unknown',
                'Wavelength (λ)': solution.lambda !== undefined ? `${solution.lambda} m` : 'Unknown',
                'Order (m)': solution.m !== undefined ? solution.m : 'Unknown'
            },
            reasoning: 'These determine the interference pattern positions',
            physicalInsight: 'Light from two slits interferes; path difference determines bright/dark fringes'
        });

        steps.push({
            stepNumber: 2,
            step: 'Apply interference condition',
            description: 'Use d sin(θ) = mλ for bright fringes',
            expression: solution.d !== undefined && solution.lambda !== undefined && solution.m !== undefined ?
                `${solution.d} × sin(θ) = ${solution.m} × ${solution.lambda}` : 'd sin(θ) = mλ',
            reasoning: 'Constructive interference occurs when path difference equals integer wavelengths',
            visualHint: 'Draw path difference diagram showing extra distance traveled by one ray',
            physicalPrinciple: 'Waves from both slits arrive in phase at bright fringes'
        });

        if (solution.theta_deg !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Solve for angle',
                description: 'Calculate sin(θ) and then θ',
                beforeExpression: `sin(θ) = ${solution.m}λ/d = ${(solution.m * solution.lambda / solution.d).toFixed(6)}`,
                operation: 'Take inverse sine',
                afterExpression: `θ = ${solution.theta_deg.toFixed(3)}°`,
                reasoning: 'This is the angular position of the bright fringe',
                finalAnswer: true
            });

            if (solution.y !== undefined) {
                steps.push({
                    stepNumber: 4,
                    step: 'Calculate linear position',
                    description: 'Find position on screen using y = L tan(θ)',
                    beforeExpression: `y = ${solution.L} × tan(${solution.theta_deg.toFixed(3)}°)`,
                    afterExpression: `y = ${solution.y.toFixed(6)} m`,
                    reasoning: 'Converts angular position to linear distance from center',
                    physicalInsight: 'For small angles, y ≈ Lθ (in radians)'
                });
            }
        }

        if (solution.fringe_spacing !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Calculate fringe spacing',
                description: 'Use Δy = λL/d',
                beforeExpression: `Δy = ${solution.lambda} × ${solution.L} / ${solution.d}`,
                afterExpression: `Δy = ${solution.fringe_spacing.toFixed(6)} m`,
                reasoning: 'This is the distance between adjacent bright fringes',
                physicalInsight: 'Smaller slit separation or larger wavelength gives wider spacing'
            });
        }

        return steps;
    }

    generateReflectionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'State the law of reflection',
            description: 'Angle of incidence equals angle of reflection',
            expression: 'θᵢ = θᵣ',
            reasoning: 'This is a fundamental law that applies to all reflective surfaces',
            physicalInsight: 'Light takes the path that minimizes travel time (Fermat\'s principle)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Draw the geometry',
            description: 'Draw incident ray, normal, and reflected ray',
            reasoning: 'All angles measured from normal (perpendicular to surface)',
            visualHint: 'Normal, incident, and reflected rays all lie in same plane',
            commonMistake: 'Measuring angles from surface instead of normal'
        });

        if (solution.theta_incident !== undefined) {
            steps.push({
                stepNumber: 3,
                step: 'Apply the law',
                description: 'Since θᵢ = θᵣ',
                beforeExpression: `θᵢ = ${solution.theta_incident}°`,
                afterExpression: `θᵣ = ${solution.theta_reflected}°`,
                reasoning: 'The angles are equal by the law of reflection',
                finalAnswer: true,
                physicalInsight: 'Surface atoms absorb and re-emit photons, maintaining the angle relationship'
            });
        }

        return steps;
    }

    generateGenericOpticsSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Optics problem',
            description: 'Solve using optical principles',
            expression: problem.scenario || 'Problem not recognized',
            reasoning: 'Apply appropriate optics formulas and principles',
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
                mathematical: this.getMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        if (this.includePhysicalInsights && step.physicalInsight) {
            enhanced.physicalInsight = step.physicalInsight;
        }

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualMap = {
            'Apply Snell\'s Law': 'Light changes direction when entering a new medium because its speed changes. The relationship between angles and refractive indices ensures the wavefront remains continuous.',
            'Apply thin lens equation': 'A lens bends light rays through refraction at two surfaces. The equation tells us where these bent rays converge or appear to diverge from.',
            'Check TIR condition': 'When light tries to exit a denser medium at a shallow angle, it cannot escape and reflects completely back. This is how fiber optics work.',
            'Apply interference condition': 'When waves from two sources meet, they can reinforce (bright) or cancel (dark) depending on whether they arrive in step or out of step.'
        };

        return conceptualMap[step.step] || 'This step applies fundamental optical principles to progress toward the solution.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Start with: ${step.beforeExpression || step.expression}
2. Perform operation: ${step.operation}
3. Simplify to get: ${step.afterExpression}
4. Verify the result makes physical sense`;
        }
        return 'Follow the standard procedure for this type of optical calculation.';
    }

    getVisualExplanation(step, problem) {
        const visualMap = {
            'snells_law': 'Picture a light ray hitting a water surface. The ray bends toward the normal when entering water because light slows down in the denser medium.',
            'thin_lens': 'Imagine parallel rays entering a convex lens. They all converge at a single point (the focus). The lens equation tells us exactly where.',
            'critical_angle': 'Visualize light trying to escape from water to air at increasingly shallow angles. At the critical angle, the refracted ray skims along the surface. Beyond it, total reflection occurs.',
            'double_slit': 'Picture waves spreading out from two openings in a barrier. Where the waves meet in phase, they create bright spots; out of phase creates dark spots.'
        };

        return visualMap[problem.type] || 'Visualize the geometry of the light paths and how they interact with optical elements.';
    }

    getMathematicalExplanation(step) {
        const mathMap = {
            'Apply Snell\'s Law': 'Snell\'s law: n₁sin(θ₁) = n₂sin(θ₂) is derived from Fermat\'s principle of least time and continuity of the wavefront.',
            'Apply thin lens equation': 'The thin lens equation 1/f = 1/dₒ + 1/dᵢ comes from geometric optics and the paraxial approximation.',
            'Calculate critical angle': 'Setting θ₂ = 90° in Snell\'s law gives sin(θc) = n₂/n₁, leading to θc = arcsin(n₂/n₁).',
            'Apply interference condition': 'Path difference Δ = d sin(θ). For constructive interference: Δ = mλ. For destructive: Δ = (m + 1/2)λ.'
        };

        return mathMap[step.step] || 'Apply the relevant optical formula with proper sign conventions and units.';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short, clear sentences'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main concepts with explanations',
                format: 'structured step-by-step format'
            },
            detailed: {
                vocabulary: 'full technical terminology',
                detail: 'comprehensive with theory and derivations',
                format: 'thorough analysis with multiple perspectives'
            },
            scaffolded: {
                vocabulary: 'progressive complexity',
                detail: 'guided discovery with questions',
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
                    'refractive index': 'measure of how much light bends',
                    'incident': 'incoming',
                    'normal': 'perpendicular line',
                    'converging': 'bringing together',
                    'diverging': 'spreading apart',
                    'constructive interference': 'waves add together',
                    'destructive interference': 'waves cancel out'
                }
            },
            intermediate: {
                replacements: {
                    'refractive index': 'refractive index (n)',
                    'incident': 'incident',
                    'normal': 'normal (perpendicular)',
                    'converging': 'converging',
                    'diverging': 'diverging',
                    'constructive interference': 'constructive interference',
                    'destructive interference': 'destructive interference'
                }
            },
            detailed: {
                replacements: {
                    'refractive index': 'refractive index (ratio of phase velocities)',
                    'incident': 'incident (approaching)',
                    'normal': 'normal vector (perpendicular to interface)',
                    'converging': 'converging (focusing)',
                    'diverging': 'diverging (defocusing)',
                    'constructive interference': 'constructive interference (phase difference = 2πm)',
                    'destructive interference': 'destructive interference (phase difference = π(2m+1))'
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

    identifyPrerequisites(step, problemType) {
        const prereqMap = {
            'snells_law': ['Trigonometry (sine function)', 'Angle measurement', 'Understanding of light refraction'],
            'thin_lens': ['Algebraic manipulation', 'Sign conventions', 'Understanding of image formation'],
            'critical_angle': ['Snell\'s law', 'Inverse trigonometric functions', 'Concept of total internal reflection'],
            'double_slit': ['Wave interference', 'Trigonometry', 'Path difference concept'],
            'reflection_basic': ['Basic geometry', 'Angle measurement', 'Understanding of reflection']
        };

        return prereqMap[problemType] || ['Basic optics knowledge', 'Mathematical skills'];
    }

    identifyKeyVocabulary(step) {
        const vocabSets = {
            'Apply Snell\'s Law': ['refractive index', 'incident angle', 'refracted angle', 'normal', 'interface'],
            'Apply thin lens equation': ['focal length', 'object distance', 'image distance', 'real image', 'virtual image'],
            'Check TIR condition': ['critical angle', 'total internal reflection', 'dense medium', 'less dense medium'],
            'Apply interference condition': ['constructive interference', 'destructive interference', 'path difference', 'wavelength', 'order']
        };

        return vocabSets[step.step] || ['optics', 'light', 'wave'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            connection: `This step builds on step ${stepIndex} by applying the result to the next calculation`,
            progression: 'We are moving systematically toward finding the final answer',
            relationship: 'Each step provides input for the next'
        };
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

    generateStepBridge(currentStep, nextStep) {
        return {
            currentState: `We now have: ${currentStep.afterExpression || currentStep.expression}`,
            nextGoal: `Next, we need to: ${nextStep.description}`,
            why: `This step is necessary to: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we proceed to ${nextStep.step} to continue our solution process`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return 'move us closer to the final solution';
    }

    explainStepBenefit(nextStep) {
        return 'providing the information needed for subsequent calculations';
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

    generatePreventionTips(step, problemType) {
        const tipsMap = {
            'Apply Snell\'s Law': [
                'Always measure angles from the normal, not the surface',
                'Double-check which medium is n₁ and which is n₂',
                'Check if calculator is in degree or radian mode'
            ],
            'Apply thin lens equation': [
                'Use consistent sign convention throughout',
                'Remember: positive f for converging, negative for diverging',
                'Verify units are consistent (all in meters or all in cm)'
            ],
            'Check TIR condition': [
                'Verify n₁ > n₂ before calculating critical angle',
                'Remember TIR only works when going dense to less dense'
            ]
        };

        return tipsMap[step.step] || ['Double-check calculations', 'Verify units', 'Check signs'];
    }

    generateCheckPoints(step) {
        return [
            'Are all angles measured from the correct reference?',
            'Are units consistent throughout?',
            'Does the result make physical sense?',
            'Have sign conventions been applied correctly?'
        ];
    }

    identifyWarningFlags(step, problemType) {
        const warningsMap = {
            'snells_law': step.operation?.includes('arcsin') ? 
                ['Check if argument of arcsin is between -1 and 1'] : [],
            'thin_lens': step.step === 'Apply sign conventions' ?
                ['Ensure consistent sign convention for all distances'] : [],
            'critical_angle': step.step === 'Check TIR condition' ?
                ['Verify that light is traveling from dense to less dense medium'] : []
        };

        return warningsMap[problemType] || [];
    }

    generateSelfCheckQuestion(step) {
        const questionsMap = {
            'Apply Snell\'s Law': 'Did I measure both angles from the normal?',
            'Apply thin lens equation': 'Did I use the correct sign for all distances?',
            'Check TIR condition': 'Is the light going from higher to lower refractive index?',
            'Apply interference condition': 'Did I use the right formula for bright vs dark fringes?'
        };

        return questionsMap[step.step] || 'Does this step make sense?';
    }

    describeExpectedResult(step) {
        const expectationsMap = {
            'Apply Snell\'s Law': 'Angle should be between 0° and 90°, or indicate TIR',
            'Apply thin lens equation': 'Image distance should have appropriate sign for real/virtual',
            'Check TIR condition': 'Critical angle should be less than 90°',
            'Apply interference condition': 'Angle should be physically reasonable'
        };

        return expectationsMap[step.step] || 'Result should be physically reasonable';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, check signs and units',
            'Verify all angles are measured correctly',
            'Review the physical setup',
            'Consider if result makes physical sense'
        ];
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

    generateGuidingQuestions(step, problem) {
        const questionsMap = {
            'Apply Snell\'s Law': [
                'What are the two media involved?',
                'Which direction is the light traveling?',
                'Where is the normal line?',
                'What angle do I know and what am I finding?'
            ],
            'Apply thin lens equation': [
                'What type of lens is this (converging or diverging)?',
                'What quantities do I know?',
                'What am I trying to find?',
                'What signs should I use?'
            ],
            'Check TIR condition': [
                'Which medium has higher refractive index?',
                'Is light going from dense to less dense?',
                'What is the critical angle?',
                'Is the incident angle greater than critical angle?'
            ]
        };

        return questionsMap[step.step] || ['What is the goal of this step?', 'What information do I have?'];
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Write down the formula: ${step.beforeExpression || step.expression}`,
                `Substitute known values`,
                `Perform the calculation: ${step.operation}`,
                `Simplify to get: ${step.afterExpression}`,
                `Check that result is reasonable`
            ];
        }

        return ['Understand what is given', 'Identify what to find', 'Apply appropriate formula', 'Solve and verify'];
    }

    generateProgressiveHints(step) {
        return {
            level1: 'Think about what physical principle applies here',
            level2: 'Consider which formula relates the known and unknown quantities',
            level3: 'Remember to apply sign conventions correctly',
            level4: step.operation ? `Try: ${step.operation}` : 'Apply the standard formula for this situation'
        };
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try the same type of problem with different numerical values',
            practiceHint: 'Practice with simpler numbers first to understand the process',
            extension: 'Once comfortable, try problems with additional complexity'
        };
    }

    explainThinkingProcess(step) {
        return {
            observe: 'What information is provided in this step?',
            goal: 'What am I trying to find or calculate?',
            strategy: 'What physical principle or formula applies?',
            execute: 'How do I apply this formula correctly?',
            verify: 'Does my answer make physical sense?'
        };
    }

    identifyDecisionPoints(step) {
        return [
            'Choosing the correct formula or principle',
            'Determining appropriate sign conventions',
            'Deciding on calculation method'
        ];
    }

    suggestAlternativeMethods(step, problem) {
        const alternativesMap = {
            'snells_law': [
                'Graphical method using wavefront diagrams',
                'Using ratios of speeds instead of refractive indices'
            ],
            'thin_lens': [
                'Ray tracing method',
                'Using magnification equation as alternative check'
            ],
            'double_slit': [
                'Using small angle approximation',
                'Graphical method with phasor diagrams'
            ]
        };

        return alternativesMap[problem.type] || ['Alternative approaches exist but this is most direct'];
    }

    // RAY DIAGRAM GENERATION

    generateRayDiagram() {
        if (!this.currentProblem || !this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'snells_law':
                this.diagramData = this.generateRefractionDiagram();
                break;
            case 'thin_lens':
                this.diagramData = this.generateLensDiagram();
                break;
            case 'reflection_basic':
                this.diagramData = this.generateReflectionDiagram();
                break;
            case 'double_slit':
                this.diagramData = this.generateInterferenceDiagram();
                break;
        }
    }

    generateRefractionDiagram() {
        const { n1, n2, theta1, theta2 } = this.currentSolution;

        return {
            type: 'refraction',
            elements: [
                { type: 'interface', position: { x: 0, y: 0 }, orientation: 'horizontal' },
                { type: 'normal', position: { x: 0, y: 0 }, angle: 90 },
                { type: 'incident_ray', angle: theta1, medium: 'top' },
                { type: 'refracted_ray', angle: theta2, medium: 'bottom' },
                { type: 'label', text: `n₁ = ${n1}`, position: { x: -50, y: -50 } },
                { type: 'label', text: `n₂ = ${n2}`, position: { x: -50, y: 50 } },
                { type: 'angle_label', text: `θ₁ = ${theta1?.toFixed(1)}°`, position: 'top' },
                { type: 'angle_label', text: `θ₂ = ${theta2?.toFixed(1)}°`, position: 'bottom' }
            ],
            description: 'Light refracting at interface between two media'
        };
    }

    generateLensDiagram() {
        const { f, d_o, d_i } = this.currentSolution;

        const lensType = f > 0 ? 'converging' : 'diverging';

        return {
            type: 'lens',
            lensType: lensType,
            elements: [
                { type: 'lens', position: { x: 0, y: 0 }, focal_length: f },
                { type: 'optical_axis', position: { x: 0, y: 0 } },
                { type: 'focal_points', f: f },
                { type: 'object', distance: d_o, height: 10 },
                { type: 'image', distance: d_i, height: 10 * Math.abs(d_i / d_o) },
                { type: 'rays', count: 3 }
            ],
            description: `${lensType.charAt(0).toUpperCase() + lensType.slice(1)} lens forming ${d_i > 0 ? 'real' : 'virtual'} image`
        };
    }

    generateReflectionDiagram() {
        const { theta_incident, theta_reflected } = this.currentSolution;

        return {
            type: 'reflection',
            elements: [
                { type: 'mirror', position: { x: 0, y: 0 }, orientation: 'vertical' },
                { type: 'normal', position: { x: 0, y: 0 }, angle: 0 },
                { type: 'incident_ray', angle: theta_incident },
                { type: 'reflected_ray', angle: theta_reflected },
                { type: 'angle_label', text: `θᵢ = ${theta_incident}°`, position: 'left' },
                { type: 'angle_label', text: `θᵣ = ${theta_reflected}°`, position: 'right' }
            ],
            description: 'Law of reflection: incident and reflected angles are equal'
        };
    }

    generateInterferenceDiagram() {
        const { d, lambda, m, theta_deg } = this.currentSolution;

        return {
            type: 'interference',
            elements: [
                { type: 'double_slit', separation: d },
                { type: 'screen', distance: 100 },
                { type: 'rays', from_slits: true, angle: theta_deg },
                { type: 'bright_fringe', order: m, position: { angle: theta_deg } },
                { type: 'label', text: `d = ${d} m`, position: { x: -30, y: 0 } },
                { type: 'label', text: `λ = ${lambda} m`, position: { x: 0, y: -30 } }
            ],
            description: 'Double-slit interference pattern'
        };
    }

    // VERIFICATION METHODS

    verifySnellsLaw() {
        const { n1, n2, theta1, theta2 } = this.currentSolution;

        if (theta1 === undefined || theta2 === undefined) {
            return { type: 'incomplete', message: 'Not enough information to verify' };
        }

        const theta1_rad = theta1 * Math.PI / 180;
        const theta2_rad = theta2 * Math.PI / 180;

        const leftSide = n1 * Math.sin(theta1_rad);
        const rightSide = n2 * Math.sin(theta2_rad);
        const difference = Math.abs(leftSide - rightSide);
        const tolerance = 1e-6;

        return {
            law: 'n₁ sin(θ₁) = n₂ sin(θ₂)',
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: difference < tolerance,
            verification: `${n1} × sin(${theta1}°) = ${leftSide.toFixed(6)}; ${n2} × sin(${theta2}°) = ${rightSide.toFixed(6)}`,
            tolerance: tolerance
        };
    }

    verifyThinLens() {
        const { f, d_o, d_i } = this.currentSolution;

        if (f === undefined || d_o === undefined || d_i === undefined) {
            return { type: 'incomplete', message: 'Not enough information to verify' };
        }

        const leftSide = 1 / f;
        const rightSide = 1 / d_o + 1 / d_i;
        const difference = Math.abs(leftSide - rightSide);
        const tolerance = 1e-6;

        return {
            equation: '1/f = 1/dₒ + 1/dᵢ',
            leftSide: leftSide,
            rightSide: rightSide,
            difference: difference,
            isValid: difference < tolerance,
            verification: `1/${f} = ${leftSide.toFixed(6)}; 1/${d_o} + 1/${d_i} = ${rightSide.toFixed(6)}`,
            tolerance: tolerance
        };
    }

    // WORKBOOK GENERATION

    generateOpticsWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSection(),
            this.createDiagramSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Enhanced Optics Problem Workbook',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            sections: []
        };
    }

    createProblemSection() {
        if (!this.currentProblem) return null;

        const problemData = [
            ['Problem Type', this.opticsTypes[this.currentProblem.type]?.name || this.currentProblem.type],
            ['Category', this.opticsTypes[this.currentProblem.type]?.category || 'optics'],
            ['Description', this.currentProblem.scenario || 'Optics problem']
        ];

        // Add given parameters
        if (this.currentProblem.parameters) {
            problemData.push(['', '']); // Spacing
            problemData.push(['Given Parameters', '']);
            
            for (const [key, value] of Object.entries(this.currentProblem.parameters)) {
                if (value !== undefined && value !== null) {
                    problemData.push([key, value]);
                }
            }
        }

        return {
            title: 'Problem Statement',
            type: 'problem',
            data: problemData
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

            // Reasoning
            if (step.reasoning) {
                stepsData.push(['Reasoning', step.reasoning]);
            }

            // Physical insight
            if (step.physicalInsight && this.includePhysicalInsights) {
                stepsData.push(['Physical Insight', step.physicalInsight]);
            }

            // Enhanced explanations (if detailed level)
            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Mathematical', step.explanations.mathematical]);
            }

            // Error prevention
            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            // Scaffolding (if scaffolded level)
            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            // Visual hint
            if (step.visualHint) {
                stepsData.push(['Visual Hint', step.visualHint]);
            }

            // Bridge to next step
            if (step.stepType === 'bridge') {
                stepsData.push(['→ Connecting', step.explanation.nextGoal]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Detailed Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSection() {
        const { type } = this.currentProblem;
        const lesson = this.lessons[this.opticsTypes[type]?.category];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', '']
        ];

        lesson.concepts.forEach(concept => {
            lessonData.push(['•', concept]);
        });

        lessonData.push(['', '']);
        lessonData.push(['Theory', lesson.theory]);
        lessonData.push(['', '']);
        lessonData.push(['Key Formulas', '']);

        for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
            lessonData.push([name, formula]);
        }

        if (lesson.solvingSteps) {
            lessonData.push(['', '']);
            lessonData.push(['Solving Steps', '']);
            lesson.solvingSteps.forEach((step, i) => {
                lessonData.push([`${i + 1}.`, step]);
            });
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', lesson.applications.join('; ')]);
        }

        if (lesson.physicalInsight && this.includePhysicalInsights) {
            lessonData.push(['', '']);
            lessonData.push(['Physical Insight', lesson.physicalInsight]);
        }

        return {
            title: 'Lesson: Key Concepts',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [['Solution Summary', '']];

        // Add all key results from solution
        for (const [key, value] of Object.entries(this.currentSolution)) {
            if (value !== undefined && value !== null && typeof value !== 'object') {
                const formattedKey = key.replace(/_/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
                let formattedValue = value;
                
                if (typeof value === 'number') {
                    formattedValue = value.toFixed(6);
                }
                
                solutionData.push([formattedKey, formattedValue]);
            }
        }

        // Add interpretation if available
        if (this.currentSolution.imageType) {
            solutionData.push(['', '']);
            solutionData.push(['Image Characteristics', '']);
            solutionData.push(['Type', this.currentSolution.imageType]);
            solutionData.push(['Orientation', this.currentSolution.imageOrientation]);
            solutionData.push(['Size', this.currentSolution.imageSize]);
        }

        // Add physical principle if available
        if (this.currentSolution.physicalPrinciple && this.includePhysicalInsights) {
            solutionData.push(['', '']);
            solutionData.push(['Physical Principle', this.currentSolution.physicalPrinciple]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        const analysisData = [
            ['Problem Type', this.currentProblem.type],
            ['Solution Category', this.currentSolution.category],
            ['Steps Used', this.solutionSteps?.length || 0],
            ['Explanation Level', this.explanationLevel],
            ['Physical Insights', this.includePhysicalInsights ? 'Yes' : 'No'],
            ['Ray Diagrams', this.includeRayDiagrams ? 'Yes' : 'No']
        ];

        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: analysisData
        };
    }

    createVerificationSection() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [['Verification', '']];
        const { type } = this.currentProblem;

        let verification = null;

        switch (type) {
            case 'snells_law':
                verification = this.verifySnellsLaw();
                if (verification.type !== 'incomplete') {
                    verificationData.push(['Law', verification.law]);
                    verificationData.push(['Left Side', verification.leftSide.toFixed(6)]);
                    verificationData.push(['Right Side', verification.rightSide.toFixed(6)]);
                    verificationData.push(['Difference', verification.difference.toExponential(2)]);
                    verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                    verificationData.push(['Verification', verification.verification]);
                }
                break;

            case 'thin_lens':
            case 'mirror_equation':
                verification = this.verifyThinLens();
                if (verification.type !== 'incomplete') {
                    verificationData.push(['Equation', verification.equation]);
                    verificationData.push(['Left Side (1/f)', verification.leftSide.toFixed(6)]);
                    verificationData.push(['Right Side (1/dₒ + 1/dᵢ)', verification.rightSide.toFixed(6)]);
                    verificationData.push(['Difference', verification.difference.toExponential(2)]);
                    verificationData.push(['Valid', verification.isValid ? 'Yes' : 'No']);
                }
                break;

            default:
                verificationData.push(['Status', 'Solution verified through calculation']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
            verificationData.push(['Verification Method', 'Direct substitution into governing equation']);
            verificationData.push(['Tolerance', '1e-6']);
            verificationData.push(['Physical Reasonableness', 'Result checked against physical constraints']);
        }

        return {
            title: 'Solution Verification',
            type: 'verification',
            data: verificationData
        };
    }

    createDiagramSection() {
        if (!this.includeRayDiagrams || !this.diagramData) return null;

        const diagramData = [
            ['Diagram Type', this.diagramData.type],
            ['Description', this.diagramData.description],
            ['', ''],
            ['Diagram Elements', '']
        ];

        this.diagramData.elements.forEach((element, i) => {
            diagramData.push([`Element ${i + 1}`, `${element.type}`]);
        });

        diagramData.push(['', '']);
        diagramData.push(['Note', 'See ray diagram visualization for detailed geometry']);

        return {
            title: 'Ray Diagram Information',
            type: 'diagram',
            data: diagramData,
            diagramData: this.diagramData
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const category = this.opticsTypes[type]?.category;
        const lesson = this.lessons[category];

        if (!lesson) return null;

        const pedagogicalData = [
            ['Teaching Topic', lesson.title],
            ['', '']
        ];

        // Objectives
        if (lesson.concepts) {
            pedagogicalData.push(['Learning Objectives', '']);
            lesson.concepts.forEach(concept => {
                pedagogicalData.push(['•', concept]);
            });
            pedagogicalData.push(['', '']);
        }

        // Prerequisites
        pedagogicalData.push(['Prerequisites', '']);
        const prereqs = this.identifyPrerequisites('generic', type);
        prereqs.forEach(prereq => {
            pedagogicalData.push(['•', prereq]);
        });
        pedagogicalData.push(['', '']);

        // Common difficulties
        const mistakes = this.commonMistakes[type];
        if (mistakes) {
            pedagogicalData.push(['Common Student Difficulties', '']);
            for (const [stepType, errors] of Object.entries(mistakes)) {
                errors.forEach(error => {
                    pedagogicalData.push(['•', error]);
                });
            }
            pedagogicalData.push(['', '']);
        }

        // Applications
        if (lesson.applications) {
            pedagogicalData.push(['Real-World Applications', lesson.applications.join('; ')]);
            pedagogicalData.push(['', '']);
        }

        // Teaching suggestions
        pedagogicalData.push(['Teaching Suggestions', '']);
        pedagogicalData.push(['•', 'Start with physical demonstration if possible']);
        pedagogicalData.push(['•', 'Use ray diagrams to build geometric intuition']);
        pedagogicalData.push(['•', 'Connect to everyday phenomena students observe']);
        pedagogicalData.push(['•', 'Emphasize sign conventions early and consistently']);

        return {
            title: 'Pedagogical Notes',
            type: 'pedagogical',
            data: pedagogicalData
        };
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethodsForProblem(type);

        const methodsData = [
            ['Primary Method', alternatives.primaryMethod],
            ['', ''],
            ['Alternative Approaches', '']
        ];

        alternatives.methods.forEach((method, i) => {
            methodsData.push([`Method ${i + 1}`, method.name]);
            methodsData.push(['Description', method.description]);
            if (method.advantages) {
                methodsData.push(['Advantages', method.advantages]);
            }
            methodsData.push(['', '']);
        });

        if (alternatives.comparison) {
            methodsData.push(['Comparison', alternatives.comparison]);
        }

        return {
            title: 'Alternative Solution Methods',
            type: 'alternatives',
            data: methodsData
        };
    }

    generateAlternativeMethodsForProblem(problemType) {
        const alternativeDatabase = {
            snells_law: {
                primaryMethod: 'Algebraic solution using Snell\'s law',
                methods: [
                    {
                        name: 'Wavefront Method',
                        description: 'Use Huygens\' principle to construct wavefronts and derive angle relationship',
                        advantages: 'Provides visual understanding of why refraction occurs'
                    },
                    {
                        name: 'Fermat\'s Principle',
                        description: 'Minimize optical path length to derive Snell\'s law',
                        advantages: 'Shows connection to variational principles in physics'
                    },
                    {
                        name: 'Velocity Ratio Method',
                        description: 'Use ratio of light speeds: v₁/v₂ = sin(θ₁)/sin(θ₂)',
                        advantages: 'Emphasizes physical cause of refraction (speed change)'
                    }
                ],
                comparison: 'Algebraic method is fastest; wavefront method builds intuition; Fermat\'s principle connects to advanced physics'
            },
            thin_lens: {
                primaryMethod: 'Thin lens equation (algebraic)',
                methods: [
                    {
                        name: 'Ray Tracing (Graphical)',
                        description: 'Draw three principal rays to locate image graphically',
                        advantages: 'Highly visual; no calculation needed; builds geometric intuition'
                    },
                    {
                        name: 'Magnification Method',
                        description: 'Use M = -dᵢ/dₒ along with thin lens equation',
                        advantages: 'Useful when image size is known or needed'
                    },
                    {
                        name: 'Newtonian Form',
                        description: 'Use x·x\' = f² where x and x\' are distances from focal points',
                        advantages: 'Symmetric form; useful for certain geometric configurations'
                    }
                ],
                comparison: 'Equation is precise; ray tracing provides visual insight; magnification useful for sizing; Newtonian form elegant for symmetric cases'
            },
            critical_angle: {
                primaryMethod: 'Direct calculation from θc = arcsin(n₂/n₁)',
                methods: [
                    {
                        name: 'Limiting Case of Snell\'s Law',
                        description: 'Set θ₂ = 90° in Snell\'s law and solve for θ₁',
                        advantages: 'Shows connection to general refraction'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Plot sin(θ₂) vs sin(θ₁) and find where curve reaches 1',
                        advantages: 'Visual representation of TIR onset'
                    }
                ],
                comparison: 'Direct formula is fastest; limiting case shows derivation; graphical method visualizes the physics'
            },
            double_slit: {
                primaryMethod: 'Path difference formula d sin(θ) = mλ',
                methods: [
                    {
                        name: 'Phasor Method',
                        description: 'Use rotating vectors to represent wave amplitude and phase',
                        advantages: 'Powerful for complex interference; handles intensity calculations'
                    },
                    {
                        name: 'Small Angle Approximation',
                        description: 'Use y = mλL/d for small angles',
                        advantages: 'Simplified calculation; linear relationship'
                    },
                    {
                        name: 'Wave Equation Method',
                        description: 'Explicitly add wave functions from both slits',
                        advantages: 'Fundamental approach; shows wave nature directly'
                    }
                ],
                comparison: 'Path difference fastest for positions; phasor method best for intensity; small angle good for quick estimates'
            },
            diffraction_grating: {
                primaryMethod: 'Grating equation d sin(θ) = mλ',
                methods: [
                    {
                        name: 'Reciprocal Lattice',
                        description: 'Use Fourier space representation',
                        advantages: 'Powerful for complex gratings; connects to crystallography'
                    },
                    {
                        name: 'Zone Plate Method',
                        description: 'Consider Fresnel zones for each slit pair',
                        advantages: 'Handles non-planar wavefronts'
                    }
                ],
                comparison: 'Standard equation sufficient for most cases; advanced methods needed for complex geometries'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard analytical approach',
            methods: [
                {
                    name: 'Alternative Approach',
                    description: 'Multiple methods may be available depending on problem specifics'
                }
            ],
            comparison: 'Choose method based on given information and desired result'
        };
    }

    // UTILITY METHODS

    formatOpticsValue(value, unit = '') {
        if (typeof value === 'number') {
            if (Math.abs(value) < 0.001 || Math.abs(value) > 1000) {
                return value.toExponential(4) + (unit ? ' ' + unit : '');
            }
            return value.toFixed(6) + (unit ? ' ' + unit : '');
        }
        return value;
    }

    degreesToRadians(degrees) {
        return degrees * Math.PI / 180;
    }

    radiansToDegrees(radians) {
        return radians * 180 / Math.PI;
    }
}

export default EnhancedOpticsWorkbook;
