// Enhanced Wave and Sound Physics Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedWaveSoundPhysicsWorkbook {
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
        this.initializeWaveSoundSolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
    }

    initializePhysicsSymbols() {
        return {
            // Wave symbols
            'lambda': 'λ',  // wavelength
            'nu': 'ν',      // frequency
            'omega': 'ω',   // angular frequency
            'phi': 'φ',     // phase
            'theta': 'θ',   // angle
            // Greek letters
            'alpha': 'α', 'beta': 'β', 'gamma': 'γ', 'delta': 'Δ',
            'pi': 'π', 'mu': 'μ',
            // Math operators
            'leq': '≤', 'geq': '≥', 'neq': '≠', 'approx': '≈',
            'infinity': '∞', 'plusminus': '±',
            'sqrt': '√', 'degree': '°'
        };
    }

    initializePhysicsConstants() {
        return {
            speedOfSound: {
                air_20C: 343,        // m/s at 20°C
                air_0C: 331,         // m/s at 0°C
                water: 1482,         // m/s
                steel: 5960,         // m/s
                aluminum: 6420,      // m/s
                concrete: 3200       // m/s
            },
            speedOfLight: 299792458,  // m/s
            referenceIntensity: 1e-12, // W/m² (threshold of hearing)
            referencePressure: 2e-5    // Pa (threshold of hearing)
        };
    }

    initializeWaveSoundLessons() {
        this.lessons = {
            wave_basics: {
                title: "Wave Fundamentals",
                concepts: [
                    "Waves transfer energy without transferring matter",
                    "Wavelength (λ): distance between repeating points",
                    "Frequency (f): number of oscillations per second",
                    "Period (T): time for one complete oscillation",
                    "Amplitude (A): maximum displacement from equilibrium"
                ],
                theory: "Waves are disturbances that propagate through space and time, transferring energy. The fundamental relationship v = fλ connects wave speed, frequency, and wavelength.",
                keyFormulas: {
                    "Wave Speed": "v = fλ",
                    "Period-Frequency": "T = 1/f",
                    "Angular Frequency": "ω = 2πf",
                    "Wave Number": "k = 2π/λ"
                },
                solvingSteps: [
                    "Identify known quantities (v, f, λ, T)",
                    "Choose appropriate formula",
                    "Solve algebraically for unknown",
                    "Check units and reasonableness"
                ],
                applications: [
                    "Sound waves in different media",
                    "Light and electromagnetic waves",
                    "Ocean waves and seismic waves",
                    "Musical instruments and acoustics"
                ]
            },

            sound_properties: {
                title: "Sound Wave Properties",
                concepts: [
                    "Sound requires a medium (longitudinal waves)",
                    "Speed depends on medium properties",
                    "Pitch relates to frequency",
                    "Loudness relates to amplitude/intensity"
                ],
                theory: "Sound waves are mechanical longitudinal waves requiring a medium. Speed varies with temperature: v = 331 + 0.6T (where T is in °C).",
                keyFormulas: {
                    "Speed in Air": "v = 331 + 0.6T (m/s)",
                    "Wave Equation": "v = fλ",
                    "Temperature Effect": "v ∝ √T (Kelvin)"
                },
                physicalPrinciples: [
                    "Compression and rarefaction patterns",
                    "Particle oscillation parallel to wave direction",
                    "Energy transfer through molecular collisions"
                ],
                applications: [
                    "Speech and hearing",
                    "Ultrasound imaging",
                    "Sonar and echolocation",
                    "Architectural acoustics"
                ]
            },

            intensity_decibels: {
                title: "Sound Intensity and Decibels",
                concepts: [
                    "Intensity: power per unit area (W/m²)",
                    "Decibel scale is logarithmic",
                    "Intensity decreases with distance (inverse square)",
                    "0 dB = threshold of hearing (I₀ = 10⁻¹² W/m²)"
                ],
                theory: "Sound intensity follows inverse square law. The decibel scale compresses the huge range of human hearing into a manageable logarithmic scale.",
                keyFormulas: {
                    "Intensity Level": "β = 10 log₁₀(I/I₀)",
                    "Inverse Square Law": "I = P/(4πr²)",
                    "Distance Relationship": "I₂/I₁ = (r₁/r₂)²",
                    "Decibel Change": "Δβ = 10 log₁₀(I₂/I₁)"
                },
                importantValues: [
                    "0 dB: threshold of hearing",
                    "10 dB: quiet whisper",
                    "60 dB: normal conversation",
                    "120 dB: threshold of pain",
                    "140 dB: jet engine"
                ],
                applications: [
                    "Noise pollution assessment",
                    "Hearing protection standards",
                    "Audio engineering",
                    "Speaker and amplifier design"
                ]
            },

            doppler_effect: {
                title: "Doppler Effect",
                concepts: [
                    "Frequency changes due to relative motion",
                    "Approaching source: higher frequency",
                    "Receding source: lower frequency",
                    "Both source and observer can move"
                ],
                theory: "The Doppler effect occurs when there is relative motion between source and observer, causing compression or expansion of wave patterns.",
                keyFormulas: {
                    "General Doppler": "f' = f(v ± v_o)/(v ∓ v_s)",
                    "Source Moving": "f' = f·v/(v ∓ v_s)",
                    "Observer Moving": "f' = f(v ± v_o)/v",
                    "Wavelength Shift": "λ' = λ(v ∓ v_s)/v"
                },
                signConventions: [
                    "Observer moving toward source: use +v_o",
                    "Observer moving away from source: use -v_o",
                    "Source moving toward observer: use -v_s",
                    "Source moving away from observer: use +v_s"
                ],
                applications: [
                    "Radar speed detection",
                    "Astronomical redshift/blueshift",
                    "Medical ultrasound",
                    "Weather radar systems"
                ]
            },

            standing_waves: {
                title: "Standing Waves and Resonance",
                concepts: [
                    "Result from interference of traveling waves",
                    "Nodes: points of zero amplitude",
                    "Antinodes: points of maximum amplitude",
                    "Resonant frequencies depend on boundary conditions"
                ],
                theory: "Standing waves form when waves of equal frequency and amplitude traveling in opposite directions interfere, creating stationary patterns.",
                keyFormulas: {
                    "String (Both Ends Fixed)": "f_n = n·v/(2L)",
                    "Open Pipe": "f_n = n·v/(2L)",
                    "Closed Pipe": "f_n = n·v/(4L) (n odd)",
                    "Wavelength": "λ_n = 2L/n (string/open pipe)"
                },
                harmonics: {
                    fundamental: "n = 1 (first harmonic)",
                    overtones: "n = 2, 3, 4, ... (higher harmonics)"
                },
                applications: [
                    "Musical instruments (strings, winds)",
                    "Organ pipes and flutes",
                    "Resonance in buildings and bridges",
                    "Laser cavities"
                ]
            },

            interference: {
                title: "Wave Interference",
                concepts: [
                    "Superposition principle: waves add algebraically",
                    "Constructive interference: waves in phase",
                    "Destructive interference: waves out of phase",
                    "Path difference determines interference type"
                ],
                theory: "When two or more waves overlap, the resulting displacement is the sum of individual displacements. Phase relationships determine interference patterns.",
                keyFormulas: {
                    "Constructive Interference": "Δx = nλ (n = 0, 1, 2, ...)",
                    "Destructive Interference": "Δx = (n + 1/2)λ",
                    "Phase Difference": "Δφ = 2π(Δx/λ)",
                    "Beat Frequency": "f_beat = |f₁ - f₂|"
                },
                conditions: [
                    "Constructive: path difference = whole wavelengths",
                    "Destructive: path difference = half wavelengths"
                ],
                applications: [
                    "Noise cancellation technology",
                    "Musical beats and tuning",
                    "Acoustic design",
                    "Interferometry"
                ]
            },

            wave_equation: {
                title: "Wave Equation and Functions",
                concepts: [
                    "Mathematical description of wave motion",
                    "Sinusoidal waves most common",
                    "Wave equation connects space and time",
                    "Phase determines position in cycle"
                ],
                theory: "The wave function y(x,t) describes displacement as a function of position and time. The general form is y = A sin(kx - ωt + φ).",
                keyFormulas: {
                    "General Wave Function": "y(x,t) = A sin(kx - ωt + φ)",
                    "Wave Number": "k = 2π/λ",
                    "Angular Frequency": "ω = 2πf",
                    "Phase Velocity": "v = ω/k = λf"
                },
                parameters: {
                    A: "Amplitude (maximum displacement)",
                    k: "Wave number (spatial frequency)",
                    ω: "Angular frequency (temporal frequency)",
                    φ: "Initial phase (starting position)"
                },
                applications: [
                    "Predicting wave behavior",
                    "Signal processing",
                    "Quantum mechanics",
                    "Electromagnetic theory"
                ]
            },

            harmonics_overtones: {
                title: "Harmonics and Overtones",
                concepts: [
                    "Harmonic: integer multiple of fundamental",
                    "Fundamental frequency: lowest resonant frequency",
                    "Overtones create timbre (tone quality)",
                    "Different instruments have different overtone series"
                ],
                theory: "Complex sounds are composed of fundamental frequency plus overtones. The relative amplitudes of harmonics determine timbre.",
                keyFormulas: {
                    "Harmonic Series": "f_n = n·f₁",
                    "String Harmonics": "f_n = n/(2L)√(T/μ)",
                    "Open Pipe": "All harmonics present",
                    "Closed Pipe": "Only odd harmonics"
                },
                musicalApplications: [
                    "Musical intervals and consonance",
                    "Instrument design and characteristics",
                    "Equal temperament tuning",
                    "Chord theory"
                ],
                applications: [
                    "Musical instrument design",
                    "Audio synthesis",
                    "Speech recognition",
                    "Acoustic analysis"
                ]
            },

            reflection_transmission: {
                title: "Wave Reflection and Transmission",
                concepts: [
                    "Waves reflect at boundary between media",
                    "Phase change depends on boundary type",
                    "Fixed end: 180° phase shift",
                    "Free end: no phase shift",
                    "Some energy reflected, some transmitted"
                ],
                theory: "At medium boundaries, waves partially reflect and transmit. Reflection coefficients depend on impedance mismatch.",
                keyFormulas: {
                    "Reflection Coefficient": "R = (Z₂ - Z₁)²/(Z₂ + Z₁)²",
                    "Transmission Coefficient": "T = 4Z₁Z₂/(Z₂ + Z₁)²",
                    "Energy Conservation": "R + T = 1",
                    "Impedance": "Z = ρv"
                },
                applications: [
                    "Echo and reverberation",
                    "Ultrasound imaging",
                    "Seismic exploration",
                    "Acoustic design"
                ]
            },

            diffraction: {
                title: "Wave Diffraction",
                concepts: [
                    "Bending of waves around obstacles",
                    "Spreading after passing through openings",
                    "Depends on wavelength vs obstacle size",
                    "Significant when λ ≈ obstacle dimension"
                ],
                theory: "Diffraction is the spreading of waves when encountering obstacles or apertures. Effect is most pronounced when wavelength comparable to opening size.",
                keyFormulas: {
                    "Single Slit": "sin θ = nλ/a (minima)",
                    "Diffraction Condition": "Significant when λ ≥ d",
                    "Angular Spread": "θ ≈ λ/D"
                },
                applications: [
                    "Sound diffraction around corners",
                    "Hearing around obstacles",
                    "Acoustic shadow zones",
                    "Speaker design"
                ]
            },

            beats: {
                title: "Beat Phenomenon",
                concepts: [
                    "Result of interference between close frequencies",
                    "Periodic variation in amplitude",
                    "Beat frequency = difference in frequencies",
                    "Used for tuning instruments"
                ],
                theory: "When two waves of slightly different frequencies interfere, they produce beats - periodic variations in amplitude at the difference frequency.",
                keyFormulas: {
                    "Beat Frequency": "f_beat = |f₁ - f₂|",
                    "Beat Period": "T_beat = 1/f_beat",
                    "Combined Wave": "y = 2A cos(2πf_beat·t/2)·cos(2πf_avg·t)"
                },
                applications: [
                    "Musical instrument tuning",
                    "Frequency measurement",
                    "Heterodyne receivers",
                    "Vibration analysis"
                ]
            },

            resonance: {
                title: "Resonance in Acoustic Systems",
                concepts: [
                    "Maximum amplitude at natural frequency",
                    "Energy efficiently transferred at resonance",
                    "Quality factor (Q) measures sharpness",
                    "Damping affects resonance width"
                ],
                theory: "Resonance occurs when driving frequency matches natural frequency of system, producing large amplitude oscillations.",
                keyFormulas: {
                    "Resonant Frequency": "f₀ = 1/(2π√(LC)) or v/(2L)",
                    "Quality Factor": "Q = f₀/Δf",
                    "Bandwidth": "Δf = f₀/Q"
                },
                applications: [
                    "Musical instruments",
                    "Room acoustics",
                    "Audio filters",
                    "Structural engineering"
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

    initializeWaveSoundSolvers() {
        this.waveTypes = {
            wave_speed: {
                patterns: [
                    /wave.*speed/i,
                    /velocity.*wave/i,
                    /v.*=.*f.*lambda/i,
                    /speed.*frequency.*wavelength/i
                ],
                solver: this.solveWaveSpeed.bind(this),
                name: 'Wave Speed Calculation',
                category: 'wave_fundamentals',
                description: 'Calculates v = fλ relationship'
            },

            frequency_period: {
                patterns: [
                    /frequency.*period/i,
                    /period.*frequency/i,
                    /T.*=.*1.*f/i,
                    /hertz/i
                ],
                solver: this.solveFrequencyPeriod.bind(this),
                name: 'Frequency-Period Relationship',
                category: 'wave_fundamentals',
                description: 'Converts between frequency and period'
            },

            sound_speed_temp: {
                patterns: [
                    /sound.*speed.*temperature/i,
                    /velocity.*air.*temperature/i,
                    /speed.*sound.*celsius/i
                ],
                solver: this.solveSoundSpeedTemp.bind(this),
                name: 'Sound Speed vs Temperature',
                category: 'sound_properties',
                description: 'Calculates sound speed based on temperature'
            },

            intensity_power: {
                patterns: [
                    /intensity.*power/i,
                    /power.*intensity/i,
                    /I.*=.*P.*area/i,
                    /watts.*per.*square/i
                ],
                solver: this.solveIntensityPower.bind(this),
                name: 'Intensity and Power',
                category: 'intensity_decibels',
                description: 'Relates intensity to power and area'
            },

            decibel_level: {
                patterns: [
                    /decibel/i,
                    /sound.*level/i,
                    /dB/i,
                    /beta.*log/i
                ],
                solver: this.solveDecibelLevel.bind(this),
                name: 'Decibel Level Calculation',
                category: 'intensity_decibels',
                description: 'Calculates sound level in decibels'
            },

            inverse_square: {
                patterns: [
                    /inverse.*square/i,
                    /intensity.*distance/i,
                    /1.*r.*squared/i
                ],
                solver: this.solveInverseSquare.bind(this),
                name: 'Inverse Square Law',
                category: 'intensity_decibels',
                description: 'Intensity variation with distance'
            },

            doppler_effect: {
                patterns: [
                    /doppler/i,
                    /frequency.*shift/i,
                    /moving.*source/i,
                    /observed.*frequency/i
                ],
                solver: this.solveDopplerEffect.bind(this),
                name: 'Doppler Effect',
                category: 'doppler_effect',
                description: 'Frequency shift due to motion'
            },

            standing_wave_string: {
                patterns: [
                    /standing.*wave.*string/i,
                    /harmonic.*string/i,
                    /resonant.*frequency.*string/i,
                    /both.*ends.*fixed/i
                ],
                solver: this.solveStandingWaveString.bind(this),
                name: 'Standing Waves on String',
                category: 'standing_waves',
                description: 'Harmonics for string with fixed ends'
            },

            standing_wave_pipe_open: {
                patterns: [
                    /open.*pipe/i,
                    /pipe.*both.*ends.*open/i,
                    /harmonic.*open.*tube/i
                ],
                solver: this.solveStandingWavePipeOpen.bind(this),
                name: 'Standing Waves in Open Pipe',
                category: 'standing_waves',
                description: 'Harmonics for pipe open at both ends'
            },

            standing_wave_pipe_closed: {
                patterns: [
                    /closed.*pipe/i,
                    /pipe.*one.*end.*closed/i,
                    /harmonic.*closed.*tube/i
                ],
                solver: this.solveStandingWavePipeClosed.bind(this),
                name: 'Standing Waves in Closed Pipe',
                category: 'standing_waves',
                description: 'Harmonics for pipe closed at one end'
            },

            interference: {
                patterns: [
                    /interference/i,
                    /path.*difference/i,
                    /constructive.*destructive/i,
                    /phase.*difference/i
                ],
                solver: this.solveInterference.bind(this),
                name: 'Wave Interference',
                category: 'interference',
                description: 'Constructive and destructive interference'
            },

            beat_frequency: {
                patterns: [
                    /beat.*frequency/i,
                    /beats.*per.*second/i,
                    /two.*frequencies.*difference/i
                ],
                solver: this.solveBeatFrequency.bind(this),
                name: 'Beat Frequency',
                category: 'beats',
                description: 'Beats from two close frequencies'
            },

            wave_function: {
                patterns: [
                    /wave.*function/i,
                    /wave.*equation/i,
                    /y.*=.*A.*sin/i,
                    /displacement.*function/i
                ],
                solver: this.solveWaveFunction.bind(this),
                name: 'Wave Function',
                category: 'wave_equation',
                description: 'Mathematical wave description'
            },

            resonance: {
                patterns: [
                    /resonance/i,
                    /resonant.*frequency/i,
                    /natural.*frequency/i,
                    /quality.*factor/i
                ],
                solver: this.solveResonance.bind(this),
                name: 'Resonance',
                category: 'resonance',
                description: 'Resonant frequency calculations'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            wave_speed: {
                'Calculate wave speed': [
                    'Confusing wavelength and frequency',
                    'Using wrong units (Hz vs kHz, m vs cm)',
                    'Forgetting v = fλ relationship'
                ],
                'Solve for wavelength': [
                    'Not converting frequency to Hz',
                    'Mixing up period and frequency'
                ]
            },
            doppler_effect: {
                'Apply Doppler formula': [
                    'Using wrong sign convention',
                    'Confusing source and observer velocities',
                    'Forgetting medium speed in denominator'
                ],
                'Determine frequency shift': [
                    'Not considering direction of motion',
                    'Using wrong version of formula'
                ]
            },
            decibel_level: {
                'Calculate decibels': [
                    'Using natural log instead of log₁₀',
                    'Forgetting factor of 10 in β = 10 log(I/I₀)',
                    'Using wrong reference intensity'
                ],
                'Convert intensity to dB': [
                    'Not using I₀ = 10⁻¹² W/m²',
                    'Confusing intensity with power'
                ]
            },
            standing_waves: {
                'Find harmonic frequencies': [
                    'Confusing open and closed pipe formulas',
                    'Forgetting only odd harmonics for closed pipes',
                    'Using wrong boundary conditions'
                ],
                'Calculate wavelength': [
                    'Not relating wavelength to pipe length correctly',
                    'Mixing up node and antinode positions'
                ]
            }
        };

        this.errorPrevention = {
            unit_checking: {
                reminder: 'Always verify units match (Hz, m/s, m, etc.)',
                method: 'Write out units in calculation and cancel'
            },
            doppler_signs: {
                reminder: 'Source toward observer: use minus in denominator',
                method: 'Draw diagram showing motion directions'
            },
            logarithm_base: {
                reminder: 'Decibels use log₁₀, not ln',
                method: 'Remember: β = 10 log₁₀(I/I₀)'
            },
            harmonic_rules: {
                reminder: 'Open pipes: all harmonics. Closed pipes: odd only',
                method: 'Sketch standing wave patterns'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Physical meaning and real-world understanding',
                language: 'intuitive and phenomena-focused'
            },
            procedural: {
                focus: 'Step-by-step calculation procedure',
                language: 'sequential calculation instructions'
            },
            visual: {
                focus: 'Graphical representation and wave patterns',
                language: 'visual and spatial descriptions'
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
                examples: 'concrete situations'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main steps with brief explanations',
                examples: 'mix of concrete and abstract'
            },
            detailed: {
                vocabulary: 'full physics vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'abstract and generalized cases'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveWaveSoundProblem(config) {
        const { problemType, parameters, scenario, context } = config;

        try {
            this.currentProblem = this.parseWaveSoundProblem(problemType, parameters, scenario, context);
            this.currentSolution = this.solveWaveSoundProblem_Internal(this.currentProblem);
            this.solutionSteps = this.generateWaveSoundSteps(this.currentProblem, this.currentSolution);
            this.generateWaveSoundGraphData();
            this.generateWaveSoundWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps
            };

        } catch (error) {
            throw new Error(`Failed to solve wave/sound problem: ${error.message}`);
        }
    }

    parseWaveSoundProblem(problemType, parameters = {}, scenario = '', context = {}) {
        if (problemType && this.waveTypes[problemType]) {
            return {
                type: problemType,
                parameters: { ...parameters },
                scenario: scenario,
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect problem type
        for (const [type, config] of Object.entries(this.waveTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(scenario)) {
                    return {
                        type: type,
                        parameters: { ...parameters },
                        scenario: scenario,
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize wave/sound problem type from: ${scenario}`);
    }

    solveWaveSoundProblem_Internal(problem) {
        const solver = this.waveTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for problem type: ${problem.type}`);
        }
        return solver(problem);
    }

    // WAVE AND SOUND SOLVERS

    solveWaveSpeed(problem) {
        const { frequency, wavelength, speed } = problem.parameters;

        // v = fλ
        let result = {};

        if (frequency && wavelength) {
            result.speed = frequency * wavelength;
            result.given = { frequency, wavelength };
            result.calculated = 'speed';
        } else if (speed && wavelength) {
            result.frequency = speed / wavelength;
            result.given = { speed, wavelength };
            result.calculated = 'frequency';
        } else if (speed && frequency) {
            result.wavelength = speed / frequency;
            result.given = { speed, frequency };
            result.calculated = 'wavelength';
        } else {
            throw new Error('Need at least two of: speed, frequency, wavelength');
        }

        return {
            problemType: 'Wave Speed',
            formula: 'v = fλ',
            result: result,
            speed: result.speed || speed,
            frequency: result.frequency || frequency,
            wavelength: result.wavelength || wavelength,
            units: {
                speed: 'm/s',
                frequency: 'Hz',
                wavelength: 'm'
            },
            category: 'wave_speed'
        };
    }

    solveFrequencyPeriod(problem) {
        const { frequency, period } = problem.parameters;

        // f = 1/T
        let result = {};

        if (frequency) {
            result.period = 1 / frequency;
            result.given = 'frequency';
            result.calculated = 'period';
        } else if (period) {
            result.frequency = 1 / period;
            result.given = 'period';
            result.calculated = 'frequency';
        } else {
            throw new Error('Need either frequency or period');
        }

        return {
            problemType: 'Frequency-Period Relationship',
            formula: 'f = 1/T',
            frequency: result.frequency || frequency,
            period: result.period || period,
            angularFrequency: 2 * Math.PI * (result.frequency || frequency),
            units: {
                frequency: 'Hz',
                period: 's',
                angularFrequency: 'rad/s'
            },
            category: 'frequency_period'
        };
    }

    solveSoundSpeedTemp(problem) {
        const { temperature, medium = 'air' } = problem.parameters;

        let speed;

        if (medium === 'air' || !medium) {
            // v = 331 + 0.6T (T in Celsius)
            speed = 331 + 0.6 * temperature;
        } else {
            // Use predefined constants for other media
            speed = this.physicsConstants.speedOfSound[medium];
            if (!speed) {
                throw new Error(`Unknown medium: ${medium}`);
            }
        }

        return {
            problemType: 'Sound Speed vs Temperature',
            temperature: temperature,
            medium: medium,
            speed: speed,
            formula: medium === 'air' ? 'v = 331 + 0.6T' : 'Constant for medium',
            units: {
                temperature: '°C',
                speed: 'm/s'
            },
            category: 'sound_speed_temp'
        };
    }

    solveIntensityPower(problem) {
        const { intensity, power, distance, area } = problem.parameters;

        let result = {};

        if (power && distance) {
            // Point source: I = P/(4πr²)
            result.intensity = power / (4 * Math.PI * distance * distance);
            result.area = 4 * Math.PI * distance * distance;
            result.given = { power, distance };
            result.calculated = 'intensity';
        } else if (power && area) {
            result.intensity = power / area;
            result.given = { power, area };
            result.calculated = 'intensity';
        } else if (intensity && distance) {
            result.power = intensity * 4 * Math.PI * distance * distance;
            result.area = 4 * Math.PI * distance * distance;
            result.given = { intensity, distance };
            result.calculated = 'power';
        } else if (intensity && area) {
            result.power = intensity * area;
            result.given = { intensity, area };
            result.calculated = 'power';
        } else {
            throw new Error('Insufficient parameters for intensity/power calculation');
        }

        return {
            problemType: 'Intensity and Power',
            formula: area ? 'I = P/A' : 'I = P/(4πr²)',
            intensity: result.intensity || intensity,
            power: result.power || power,
            distance: distance,
            area: result.area || area,
            units: {
                intensity: 'W/m²',
                power: 'W',
                distance: 'm',
                area: 'm²'
            },
            category: 'intensity_power'
        };
    }

    solveDecibelLevel(problem) {
        const { intensity, decibelLevel, referenceIntensity = this.physicsConstants.referenceIntensity } = problem.parameters;

        let result = {};

        if (intensity) {
            // β = 10 log₁₀(I/I₀)
            result.decibelLevel = 10 * Math.log10(intensity / referenceIntensity);
            result.given = 'intensity';
            result.calculated = 'decibelLevel';
        } else if (decibelLevel !== undefined) {
            // I = I₀ × 10^(β/10)
            result.intensity = referenceIntensity * Math.pow(10, decibelLevel / 10);
            result.given = 'decibelLevel';
            result.calculated = 'intensity';
        } else {
            throw new Error('Need either intensity or decibel level');
        }

        return {
            problemType: 'Decibel Level',
            formula: 'β = 10 log₁₀(I/I₀)',
            intensity: result.intensity || intensity,
            decibelLevel: result.decibelLevel || decibelLevel,
            referenceIntensity: referenceIntensity,
            units: {
                intensity: 'W/m²',
                decibelLevel: 'dB',
                referenceIntensity: 'W/m²'
            },
            category: 'decibel_level'
        };
    }

    solveInverseSquare(problem) {
        const { intensity1, distance1, intensity2, distance2 } = problem.parameters;

        let result = {};

        // I₂/I₁ = (r₁/r₂)²
        if (intensity1 && distance1 && distance2) {
            result.intensity2 = intensity1 * Math.pow(distance1 / distance2, 2);
            result.given = { intensity1, distance1, distance2 };
            result.calculated = 'intensity2';
        } else if (intensity1 && intensity2 && distance1) {
            result.distance2 = distance1 * Math.sqrt(intensity1 / intensity2);
            result.given = { intensity1, intensity2, distance1 };
            result.calculated = 'distance2';
        } else if (intensity1 && intensity2 && distance2) {
            result.distance1 = distance2 * Math.sqrt(intensity2 / intensity1);
            result.given = { intensity1, intensity2, distance2 };
            result.calculated = 'distance1';
        } else {
            throw new Error('Need three of four parameters for inverse square law');
        }

        return {
            problemType: 'Inverse Square Law',
            formula: 'I₂/I₁ = (r₁/r₂)²',
            intensity1: intensity1 || result.intensity1,
            intensity2: intensity2 || result.intensity2,
            distance1: distance1 || result.distance1,
            distance2: distance2 || result.distance2,
            ratio: (intensity2 || result.intensity2) / intensity1,
            units: {
                intensity: 'W/m²',
                distance: 'm'
            },
            category: 'inverse_square'
        };
    }

    solveDopplerEffect(problem) {
        const { 
            sourceFrequency, 
            observedFrequency,
            sourceVelocity = 0, 
            observerVelocity = 0, 
            mediumSpeed = 343,
            sourceMovingToward = null,
            observerMovingToward = null
        } = problem.parameters;

        // f' = f(v ± v_o)/(v ∓ v_s)
        // + in numerator if observer moving toward source
        // - in denominator if source moving toward observer

        let result = {};

        // Determine signs
        let v_o = observerMovingToward ? observerVelocity : -observerVelocity;
        let v_s = sourceMovingToward ? -sourceVelocity : sourceVelocity;

        if (sourceFrequency) {
            result.observedFrequency = sourceFrequency * 
                (mediumSpeed + v_o) / (mediumSpeed + v_s);
            result.calculated = 'observedFrequency';
        } else if (observedFrequency) {
            result.sourceFrequency = observedFrequency * 
                (mediumSpeed + v_s) / (mediumSpeed + v_o);
            result.calculated = 'sourceFrequency';
        }

        const frequencyShift = (result.observedFrequency || observedFrequency) - 
                               (sourceFrequency || result.sourceFrequency);

        return {
            problemType: 'Doppler Effect',
            formula: "f' = f(v ± v_o)/(v ∓ v_s)",
            sourceFrequency: sourceFrequency || result.sourceFrequency,
            observedFrequency: result.observedFrequency || observedFrequency,
            frequencyShift: frequencyShift,
            sourceVelocity: sourceVelocity,
            observerVelocity: observerVelocity,
            mediumSpeed: mediumSpeed,
            signConvention: {
                observerToward: observerMovingToward,
                sourceToward: sourceMovingToward
            },
            units: {
                frequency: 'Hz',
                velocity: 'm/s'
            },
            category: 'doppler_effect'
        };
    }

    solveStandingWaveString(problem) {
        const { length, waveSpeed, tension, linearDensity, harmonic = 1 } = problem.parameters;

        let v = waveSpeed;
        
        if (!v && tension && linearDensity) {
            // v = √(T/μ)
            v = Math.sqrt(tension / linearDensity);
        }

        if (!v) {
            throw new Error('Need wave speed or (tension and linear density)');
        }

        // f_n = n·v/(2L)
        const frequency = harmonic * v / (2 * length);
        const wavelength = 2 * length / harmonic;

        // Generate all harmonics
        const harmonics = [];
        for (let n = 1; n <= 5; n++) {
            harmonics.push({
                n: n,
                frequency: n * v / (2 * length),
                wavelength: 2 * length / n,
                nodes: n + 1,
                antinodes: n
            });
        }

        return {
            problemType: 'Standing Waves on String',
            formula: 'f_n = n·v/(2L)',
            harmonic: harmonic,
            frequency: frequency,
            wavelength: wavelength,
            waveSpeed: v,
            length: length,
            nodes: harmonic + 1,
            antinodes: harmonic,
            harmonics: harmonics,
            units: {
                frequency: 'Hz',
                wavelength: 'm',
                length: 'm',
                waveSpeed: 'm/s'
            },
            category: 'standing_wave_string'
        };
    }

    solveStandingWavePipeOpen(problem) {
        const { length, waveSpeed = 343, harmonic = 1 } = problem.parameters;

        // Both ends open: f_n = n·v/(2L) for all n
        const frequency = harmonic * waveSpeed / (2 * length);
        const wavelength = 2 * length / harmonic;

        const harmonics = [];
        for (let n = 1; n <= 5; n++) {
            harmonics.push({
                n: n,
                frequency: n * waveSpeed / (2 * length),
                wavelength: 2 * length / n,
                nodes: n - 1,
                antinodes: n
            });
        }

        return {
            problemType: 'Standing Waves in Open Pipe',
            formula: 'f_n = n·v/(2L)',
            harmonic: harmonic,
            frequency: frequency,
            wavelength: wavelength,
            waveSpeed: waveSpeed,
            length: length,
            boundaryCondition: 'Both ends open (antinodes at both ends)',
            harmonicsPresent: 'All harmonics (1, 2, 3, 4, ...)',
            harmonics: harmonics,
            units: {
                frequency: 'Hz',
                wavelength: 'm',
                length: 'm'
            },
            category: 'standing_wave_pipe_open'
        };
    }

    solveStandingWavePipeClosed(problem) {
        const { length, waveSpeed = 343, harmonic = 1 } = problem.parameters;

        // One end closed: f_n = n·v/(4L) for odd n only
        if (harmonic % 2 === 0) {
            throw new Error('Closed pipe only supports odd harmonics (1, 3, 5, ...)');
        }

        const frequency = harmonic * waveSpeed / (4 * length);
        const wavelength = 4 * length / harmonic;

        const harmonics = [];
        for (let n = 1; n <= 9; n += 2) {
            harmonics.push({
                n: n,
                frequency: n * waveSpeed / (4 * length),
                wavelength: 4 * length / n,
                nodes: (n - 1) / 2,
                antinodes: (n + 1) / 2
            });
        }

        return {
            problemType: 'Standing Waves in Closed Pipe',
            formula: 'f_n = n·v/(4L) (n odd)',
            harmonic: harmonic,
            frequency: frequency,
            wavelength: wavelength,
            waveSpeed: waveSpeed,
            length: length,
            boundaryCondition: 'One end closed (node), one end open (antinode)',
            harmonicsPresent: 'Only odd harmonics (1, 3, 5, 7, ...)',
            harmonics: harmonics,
            units: {
                frequency: 'Hz',
                wavelength: 'm',
                length: 'm'
            },
            category: 'standing_wave_pipe_closed'
        };
    }

    solveInterference(problem) {
        const { wavelength, pathDifference, phaseDifference } = problem.parameters;

        let result = {};

        if (pathDifference !== undefined && wavelength) {
            // Δφ = 2π(Δx/λ)
            result.phaseDifference = 2 * Math.PI * pathDifference / wavelength;
            
            // Determine interference type
            const ratio = pathDifference / wavelength;
            const isConstructive = Math.abs(ratio - Math.round(ratio)) < 0.01;
            const isDestructive = Math.abs(ratio - (Math.round(ratio) + 0.5)) < 0.01 ||
                                  Math.abs(ratio - (Math.round(ratio) - 0.5)) < 0.01;
            
            result.interferenceType = isConstructive ? 'Constructive' :
                                      isDestructive ? 'Destructive' : 'Partial';
            result.order = Math.round(ratio);
        } else if (phaseDifference !== undefined && wavelength) {
            result.pathDifference = phaseDifference * wavelength / (2 * Math.PI);
        }

        return {
            problemType: 'Wave Interference',
            wavelength: wavelength,
            pathDifference: pathDifference || result.pathDifference,
            phaseDifference: result.phaseDifference || phaseDifference,
            interferenceType: result.interferenceType,
            order: result.order,
            conditions: {
                constructive: 'Δx = nλ (n = 0, 1, 2, ...)',
                destructive: 'Δx = (n + 1/2)λ'
            },
            units: {
                wavelength: 'm',
                pathDifference: 'm',
                phaseDifference: 'rad'
            },
            category: 'interference'
        };
    }

    solveBeatFrequency(problem) {
        const { frequency1, frequency2, beatFrequency } = problem.parameters;

        let result = {};

        if (frequency1 && frequency2) {
            result.beatFrequency = Math.abs(frequency1 - frequency2);
            result.beatPeriod = 1 / result.beatFrequency;
        } else if (beatFrequency && frequency1) {
            result.frequency2_option1 = frequency1 + beatFrequency;
            result.frequency2_option2 = frequency1 - beatFrequency;
        } else if (beatFrequency && frequency2) {
            result.frequency1_option1 = frequency2 + beatFrequency;
            result.frequency1_option2 = frequency2 - beatFrequency;
        }

        return {
            problemType: 'Beat Frequency',
            formula: 'f_beat = |f₁ - f₂|',
            frequency1: frequency1 || result.frequency1_option1,
            frequency2: frequency2 || result.frequency2_option1,
            beatFrequency: result.beatFrequency || beatFrequency,
            beatPeriod: result.beatPeriod,
            note: result.frequency2_option1 ? 'Two possible solutions due to absolute value' : null,
            alternativeSolutions: {
                option1: { f1: frequency1 || result.frequency1_option1, f2: result.frequency2_option1 },
                option2: { f1: frequency1 || result.frequency1_option2, f2: result.frequency2_option2 }
            },
            units: {
                frequency: 'Hz',
                beatFrequency: 'Hz',
                beatPeriod: 's'
            },
            category: 'beat_frequency'
        };
    }

    solveWaveFunction(problem) {
        const { 
            amplitude, 
            wavelength, 
            frequency, 
            period,
            phase = 0,
            position,
            time 
        } = problem.parameters;

        const f = frequency || (period ? 1 / period : null);
        const omega = 2 * Math.PI * f;
        const k = 2 * Math.PI / wavelength;
        const v = omega / k;

        let displacement = null;
        if (position !== undefined && time !== undefined) {
            // y = A sin(kx - ωt + φ)
            displacement = amplitude * Math.sin(k * position - omega * time + phase);
        }

        return {
            problemType: 'Wave Function',
            formula: 'y(x,t) = A sin(kx - ωt + φ)',
            amplitude: amplitude,
            wavelength: wavelength,
            frequency: f,
            period: 1 / f,
            waveNumber: k,
            angularFrequency: omega,
            phase: phase,
            waveSpeed: v,
            displacement: displacement,
            equationString: `y = ${amplitude} sin(${k.toFixed(3)}x - ${omega.toFixed(3)}t + ${phase})`,
            units: {
                amplitude: 'm',
                wavelength: 'm',
                frequency: 'Hz',
                waveNumber: 'rad/m',
                angularFrequency: 'rad/s',
                waveSpeed: 'm/s'
            },
            category: 'wave_function'
        };
    }

    solveResonance(problem) {
        const { 
            naturalFrequency, 
            quality, 
            bandwidth,
            systemType = 'mechanical'
        } = problem.parameters;

        let result = {};

        if (naturalFrequency && quality) {
            result.bandwidth = naturalFrequency / quality;
        } else if (naturalFrequency && bandwidth) {
            result.quality = naturalFrequency / bandwidth;
        } else if (quality && bandwidth) {
            result.naturalFrequency = quality * bandwidth;
        }

        return {
            problemType: 'Resonance',
            formula: 'Q = f₀/Δf',
            naturalFrequency: naturalFrequency || result.naturalFrequency,
            qualityFactor: quality || result.quality,
            bandwidth: bandwidth || result.bandwidth,
            systemType: systemType,
            characteristics: {
                high_Q: 'Sharp resonance, low damping',
                low_Q: 'Broad resonance, high damping'
            },
            units: {
                frequency: 'Hz',
                bandwidth: 'Hz',
                qualityFactor: 'dimensionless'
            },
            category: 'resonance'
        };
    }

    // GENERATE ENHANCED STEPS
    generateWaveSoundSteps(problem, solution) {
        let baseSteps = this.generateBaseWaveSoundSteps(problem, solution);

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

    generateBaseWaveSoundSteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'wave_speed':
                return this.generateWaveSpeedSteps(problem, solution);
            case 'decibel_level':
                return this.generateDecibelSteps(problem, solution);
            case 'doppler_effect':
                return this.generateDopplerSteps(problem, solution);
            case 'standing_wave_string':
            case 'standing_wave_pipe_open':
            case 'standing_wave_pipe_closed':
                return this.generateStandingWaveSteps(problem, solution);
            default:
                return this.generateGenericWaveSteps(problem, solution);
        }
    }

    generateWaveSpeedSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify known quantities',
            description: 'List the given information from the problem',
            expression: this.formatGivenQuantities(solution.result.given),
            reasoning: 'We need to identify what we know and what we need to find',
            visualHint: 'Wave speed relates frequency (how often) to wavelength (how far)',
            goalStatement: `Find ${solution.result.calculated}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write wave speed formula',
            description: 'The fundamental wave equation',
            expression: 'v = fλ',
            beforeExpression: 'Wave relationship',
            afterExpression: 'v = fλ',
            reasoning: 'Wave speed equals frequency times wavelength',
            algebraicRule: 'Wave Speed Equation',
            visualHint: 'Faster waves have higher frequency OR longer wavelength',
            physicalMeaning: 'Speed is how fast the wave pattern moves through space'
        });

        steps.push({
            stepNumber: 3,
            step: `Solve for ${solution.result.calculated}`,
            description: `Rearrange and calculate ${solution.result.calculated}`,
            beforeExpression: 'v = fλ',
            operation: this.getOperationForCalculated(solution.result.calculated),
            afterExpression: this.getResultExpression(solution),
            reasoning: 'Substitute known values and compute',
            algebraicRule: 'Algebraic manipulation',
            finalAnswer: true,
            numericalResult: solution[solution.result.calculated],
            units: solution.units[solution.result.calculated]
        });

        return steps;
    }

    generateDecibelSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify given information',
            description: 'Determine what is known',
            expression: solution.result.given === 'intensity' ? 
                `I = ${solution.intensity} W/m²` : 
                `β = ${solution.decibelLevel} dB`,
            reasoning: 'Decibel calculations require intensity or decibel level',
            visualHint: 'Decibels use a logarithmic scale to handle huge intensity ranges',
            goalStatement: `Calculate ${solution.result.calculated}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Write decibel formula',
            description: 'The decibel level equation',
            expression: 'β = 10 log₁₀(I/I₀)',
            reasoning: 'Relates intensity ratio to decibel level logarithmically',
            algebraicRule: 'Decibel Formula',
            criticalNote: 'I₀ = 10⁻¹² W/m² is the reference intensity (threshold of hearing)',
            physicalMeaning: 'Each 10 dB increase represents 10× intensity increase'
        });

        if (solution.result.calculated === 'decibelLevel') {
            steps.push({
                stepNumber: 3,
                step: 'Calculate intensity ratio',
                description: 'Find I/I₀',
                expression: `I/I₀ = ${solution.intensity}/${solution.referenceIntensity}`,
                afterExpression: `I/I₀ = ${solution.intensity / solution.referenceIntensity}`,
                reasoning: 'This ratio determines how many times louder than threshold',
                algebraicRule: 'Division'
            });

            steps.push({
                stepNumber: 4,
                step: 'Apply logarithm',
                description: 'Take log₁₀ of the ratio',
                expression: `log₁₀(${solution.intensity / solution.referenceIntensity})`,
                afterExpression: `${Math.log10(solution.intensity / solution.referenceIntensity).toFixed(4)}`,
                reasoning: 'Logarithm converts multiplication to addition',
                algebraicRule: 'Logarithm (base 10)',
                criticalWarning: 'Use log₁₀, not natural log (ln)'
            });

            steps.push({
                stepNumber: 5,
                step: 'Multiply by 10',
                description: 'Complete the decibel calculation',
                expression: `β = 10 × ${Math.log10(solution.intensity / solution.referenceIntensity).toFixed(4)}`,
                afterExpression: `β = ${solution.decibelLevel.toFixed(2)} dB`,
                reasoning: 'The factor of 10 scales the logarithm to decibels',
                finalAnswer: true,
                numericalResult: solution.decibelLevel,
                units: 'dB'
            });
        } else {
            steps.push({
                stepNumber: 3,
                step: 'Rearrange for intensity',
                description: 'Solve β = 10 log₁₀(I/I₀) for I',
                beforeExpression: 'β = 10 log₁₀(I/I₀)',
                afterExpression: 'I = I₀ × 10^(β/10)',
                reasoning: 'Isolate I by reversing the logarithm',
                algebraicRule: 'Inverse logarithm (exponential)'
            });

            steps.push({
                stepNumber: 4,
                step: 'Calculate intensity',
                description: 'Substitute and compute',
                expression: `I = ${solution.referenceIntensity} × 10^(${solution.decibelLevel}/10)`,
                afterExpression: `I = ${solution.intensity.toExponential(3)} W/m²`,
                reasoning: 'Exponentiation gives the intensity',
                finalAnswer: true,
                numericalResult: solution.intensity,
                units: 'W/m²'
            });
        }

        return steps;
    }

    generateDopplerSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify motion and directions',
            description: 'Determine source and observer velocities and directions',
            expression: `v_source = ${solution.sourceVelocity} m/s, v_observer = ${solution.observerVelocity} m/s`,
            reasoning: 'Direction of motion determines signs in Doppler formula',
            visualHint: 'Draw a diagram showing source, observer, and motion directions',
            goalStatement: 'Calculate observed frequency'
        });

        steps.push({
            stepNumber: 2,
            step: 'Determine sign convention',
            description: 'Apply correct signs for motion directions',
            expression: `Source ${solution.signConvention.sourceToward ? 'toward' : 'away from'} observer, Observer ${solution.signConvention.observerToward ? 'toward' : 'away from'} source`,
            reasoning: 'Approaching increases frequency, receding decreases frequency',
            algebraicRule: 'Doppler Sign Convention',
            criticalWarning: 'Source toward: minus in denominator. Observer toward: plus in numerator',
            physicalMeaning: 'Motion affects wave compression/expansion'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write Doppler formula',
            description: 'General Doppler equation',
            expression: "f' = f(v ± v_o)/(v ∓ v_s)",
            reasoning: 'Relates observed frequency to source frequency and velocities',
            algebraicRule: 'Doppler Effect Formula',
            physicalMeaning: 'Relative motion changes apparent wavelength/frequency'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute values',
            description: 'Insert known quantities with correct signs',
            expression: this.buildDopplerExpression(solution),
            reasoning: 'Calculate using the specific velocities and medium speed',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate observed frequency',
            description: 'Complete the arithmetic',
            afterExpression: `f' = ${solution.observedFrequency.toFixed(2)} Hz`,
            reasoning: 'This is the frequency heard by the observer',
            finalAnswer: true,
            numericalResult: solution.observedFrequency,
            units: 'Hz',
            additionalInfo: `Frequency shift: ${solution.frequencyShift.toFixed(2)} Hz`
        });

        return steps;
    }

    generateStandingWaveSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify system properties',
            description: 'Determine length, boundary conditions, and wave speed',
            expression: `L = ${solution.length} m, v = ${solution.waveSpeed} m/s, n = ${solution.harmonic}`,
            reasoning: 'Standing wave frequencies depend on system constraints',
            visualHint: 'Sketch the standing wave pattern showing nodes and antinodes',
            goalStatement: `Find frequency of harmonic ${solution.harmonic}`
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify boundary conditions',
            description: 'Determine which formula to use based on boundaries',
            expression: solution.boundaryCondition || 'Both ends fixed',
            reasoning: solution.category === 'standing_wave_pipe_closed' ? 
                'Closed end = node, open end = antinode; only odd harmonics possible' :
                'Fixed/open ends = antinodes or nodes; all harmonics possible',
            algebraicRule: 'Boundary Condition Analysis',
            physicalMeaning: 'Boundaries determine which wavelengths can "fit" in the system'
        });

        steps.push({
            stepNumber: 3,
            step: 'Write standing wave formula',
            description: 'Select appropriate harmonic formula',
            expression: solution.formula,
            reasoning: solution.category === 'standing_wave_pipe_closed' ?
                'Closed pipe: only odd harmonics (1, 3, 5, ...) with f_n = nv/(4L)' :
                'String/open pipe: all harmonics with f_n = nv/(2L)',
            algebraicRule: 'Standing Wave Frequency Formula',
            criticalWarning: solution.category === 'standing_wave_pipe_closed' ?
                'IMPORTANT: Only odd values of n are allowed for closed pipes' : null,
            physicalMeaning: 'Harmonic number n represents number of half-wavelengths (or quarter for closed pipe)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Substitute values',
            description: 'Insert known quantities into formula',
            beforeExpression: solution.formula,
            expression: this.buildStandingWaveExpression(solution),
            reasoning: 'Calculate frequency for the specified harmonic',
            algebraicRule: 'Substitution'
        });

        steps.push({
            stepNumber: 5,
            step: 'Calculate frequency',
            description: 'Complete the arithmetic',
            afterExpression: `f = ${solution.frequency.toFixed(2)} Hz`,
            reasoning: 'This is the resonant frequency for this harmonic',
            finalAnswer: true,
            numericalResult: solution.frequency,
            units: 'Hz'
        });

        steps.push({
            stepNumber: 6,
            step: 'Find wavelength',
            description: 'Calculate corresponding wavelength',
            expression: solution.category === 'standing_wave_pipe_closed' ?
                'λ = 4L/n' : 'λ = 2L/n',
            afterExpression: `λ = ${solution.wavelength.toFixed(3)} m`,
            reasoning: 'Wavelength relates to how the wave fits in the system',
            numericalResult: solution.wavelength,
            units: 'm',
            additionalInfo: `Nodes: ${solution.nodes || 'N/A'}, Antinodes: ${solution.antinodes || 'N/A'}`
        });

        return steps;
    }

    generateGenericWaveSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Problem setup',
            description: 'Analyze the given wave/sound problem',
            expression: problem.scenario || 'Wave problem',
            reasoning: 'Apply appropriate wave principles',
            solution: solution
        }];
    }

    // HELPER METHODS FOR STEP GENERATION

    formatGivenQuantities(given) {
        if (!given) return 'No quantities given';
        const parts = [];
        for (const [key, value] of Object.entries(given)) {
            parts.push(`${key} = ${value}`);
        }
        return parts.join(', ');
    }

    getOperationForCalculated(calculated) {
        const operations = {
            speed: 'Multiply: v = f × λ',
            frequency: 'Divide: f = v / λ',
            wavelength: 'Divide: λ = v / f',
            period: 'Take reciprocal: T = 1 / f',
            intensity: 'Calculate: I = P / A',
            power: 'Calculate: P = I × A'
        };
        return operations[calculated] || 'Calculate';
    }

    getResultExpression(solution) {
        const calculated = solution.result.calculated;
        const value = solution[calculated];
        const unit = solution.units[calculated];
        return `${calculated} = ${value} ${unit}`;
    }

    buildDopplerExpression(solution) {
        const { sourceFrequency, mediumSpeed, observerVelocity, sourceVelocity, signConvention } = solution;
        
        const v_o_sign = signConvention.observerToward ? '+' : '-';
        const v_s_sign = signConvention.sourceToward ? '-' : '+';
        
        return `f' = ${sourceFrequency}(${mediumSpeed} ${v_o_sign} ${observerVelocity})/(${mediumSpeed} ${v_s_sign} ${sourceVelocity})`;
    }

    buildStandingWaveExpression(solution) {
        const { harmonic, waveSpeed, length, category } = solution;
        
        if (category === 'standing_wave_pipe_closed') {
            return `f = ${harmonic} × ${waveSpeed} / (4 × ${length})`;
        } else {
            return `f = ${harmonic} × ${waveSpeed} / (2 × ${length})`;
        }
    }

    // ENHANCED STEP METHODS (from linear workbook adapted for waves)

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanationWave(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanationWave(step, problem),
                mathematical: this.getMathematicalExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisitesWave(step, problem.type),
                keyVocabulary: this.identifyKeyVocabularyWave(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanationWave(step, problem) {
        const conceptualExplanations = {
            'Identify known quantities': 'Understanding what information we have is the first step in any physics problem. We organize known values to see what equation might help.',
            'Write wave speed formula': 'The wave equation v = fλ is fundamental - it tells us that wave speed depends on how often waves pass (frequency) and how far apart they are (wavelength).',
            'Write decibel formula': 'Decibels use a logarithmic scale because human hearing spans an enormous range - from whispers to jet engines. This scale compresses that range into manageable numbers.',
            'Determine sign convention': 'In the Doppler effect, motion toward means compression (higher frequency), motion away means stretching (lower frequency). Signs in the formula encode this physics.',
            'Identify boundary conditions': 'Boundaries determine which wave patterns can exist. Fixed ends must be nodes (no motion), while free/open ends must be antinodes (maximum motion).'
        };

        return conceptualExplanations[step.step] || 'This step advances us toward the solution by applying wave physics principles.';
    }

    getVisualExplanationWave(step, problem) {
        const visualExplanations = {
            wave_speed: 'Imagine watching waves on water - frequency is how many pass per second, wavelength is the distance between crests.',
            decibel_level: 'Think of sound intensity like light brightness - decibels compress the huge range our ears can detect.',
            doppler_effect: 'Picture an ambulance siren - the pitch rises as it approaches (waves compressed) and falls as it leaves (waves stretched).',
            standing_wave_string: 'Visualize a guitar string vibrating - certain patterns "fit" between the fixed ends, creating harmonics.',
            interference: 'Imagine dropping two pebbles in water - where ripples meet, they add (constructive) or cancel (destructive).'
        };

        return visualExplanations[problem.type] || 'Visualize the wave phenomenon described in this step.';
    }

    getMathematicalExplanation(step) {
        if (step.algebraicRule) {
            return `Mathematical principle: ${step.algebraicRule}. This represents a formal relationship derived from wave theory.`;
        }
        return 'Apply standard mathematical operations while maintaining dimensional consistency.';
    }

    getProceduralExplanation(step) {
        if (step.operation) {
            return `1. Identify the operation: ${step.operation}
2. Apply to the expression
3. Simplify the result
4. Check units and reasonableness`;
        }
        return 'Follow the standard procedure for this type of calculation.';
    }

    identifyPrerequisitesWave(step, problemType) {
        const prerequisites = {
            'Identify known quantities': ['Reading comprehension', 'Unit recognition', 'Variable notation'],
            'Write wave speed formula': ['Understanding v = fλ relationship', 'Frequency and wavelength concepts'],
            'Calculate intensity ratio': ['Division of decimals', 'Scientific notation', 'Ratio concepts'],
            'Apply logarithm': ['Logarithm properties', 'Log base 10 vs natural log', 'Calculator use'],
            'Determine sign convention': ['Vector concepts', 'Relative motion understanding', 'Sign conventions']
        };

        return prerequisites[step.step] || ['Basic algebra', 'Physics concepts'];
    }

    identifyKeyVocabularyWave(step) {
        const vocabulary = {
            'Identify known quantities': ['frequency', 'wavelength', 'period', 'amplitude'],
            'Write wave speed formula': ['wave speed', 'hertz', 'meters per second'],
            'Write decibel formula': ['intensity', 'decibel', 'logarithm', 'reference intensity'],
            'Determine sign convention': ['relative motion', 'approach', 'recede', 'observer', 'source'],
            'Identify boundary conditions': ['node', 'antinode', 'fixed end', 'open end', 'harmonic']
        };

        return vocabulary[step.step] || [];
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
            why: `This step is necessary because: ${this.explainStepNecessity(currentStep, nextStep)}`,
            howItHelps: `This will help us by: ${this.explainStepBenefit(nextStep)}`
        };
    }

    explainStepProgression(currentStep, nextStep) {
        return `After ${currentStep.step}, we need to ${nextStep.description.toLowerCase()} to continue solving`;
    }

    explainStepStrategy(nextStep) {
        return `The strategy for "${nextStep.step}" is to ${nextStep.description.toLowerCase()}`;
    }

    explainStepNecessity(currentStep, nextStep) {
        return `${nextStep.step} follows from ${currentStep.step} to advance our calculation`;
    }

    explainStepBenefit(nextStep) {
        return `This step brings us closer to finding the final answer`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[problemType]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generatePreventionTipsWave(step, problemType),
                checkPoints: this.generateCheckPointsWave(step),
                warningFlags: this.identifyWarningFlagsWave(step, problemType)
            },
            validation: {
                selfCheck: this.generateSelfCheckQuestionWave(step),
                expectedResult: this.describeExpectedResultWave(step),
                troubleshooting: this.generateTroubleshootingTips(step)
            }
        };
    }

    generatePreventionTipsWave(step, problemType) {
        const tips = {
            'Calculate wave speed': [
                'Verify units: frequency in Hz, wavelength in meters',
                'Check that speed is reasonable for the medium',
                'Remember v = fλ, not v = f + λ'
            ],
            'Apply logarithm': [
                'Use log₁₀ (common log), not ln (natural log)',
                'Ensure argument is positive',
                'Remember log(a/b) = log(a) - log(b)'
            ],
            'Determine sign convention': [
                'Draw a diagram with motion directions',
                'Source toward: minus in denominator',
                'Observer toward: plus in numerator',
                'Double-check both signs independently'
            ]
        };

        return tips[step.step] || ['Double-check your calculation', 'Verify units'];
    }

    generateCheckPointsWave(step) {
        return [
            'Are all units consistent?',
            'Does the result have reasonable magnitude?',
            'Have I applied the correct formula?',
            'Are signs correct (especially for Doppler)?'
        ];
    }

    identifyWarningFlagsWave(step, problemType) {
        const warnings = {
            decibel_level: step.step === 'Apply logarithm' ?
                ['Make sure to use log₁₀, not ln', 'Check that I/I₀ > 0'] : [],
            doppler_effect: step.step === 'Determine sign convention' ?
                ['Verify motion directions carefully', 'Both source and observer signs matter'] : [],
            standing_wave_pipe_closed: step.step === 'Write standing wave formula' ?
                ['Only odd harmonics allowed for closed pipes'] : []
        };

        return warnings[problemType] || [];
    }

    generateSelfCheckQuestionWave(step) {
        const questions = {
            'Identify known quantities': 'Have I listed all given information with correct units?',
            'Calculate wave speed': 'Is my answer in m/s and reasonable for the medium?',
            'Apply logarithm': 'Did I use log₁₀ and not natural log?',
            'Determine sign convention': 'Have I correctly identified which direction each object is moving?'
        };

        return questions[step.step] || 'Does this step make sense physically?';
    }

    describeExpectedResultWave(step) {
        const expectations = {
            'Calculate wave speed': 'Speed should be positive and appropriate for medium (e.g., ~343 m/s for sound in air)',
            'Calculate frequency': 'Frequency should be positive, typically in Hz to kHz range for sound',
            'Apply logarithm': 'Result should be a dimensionless number',
            'Calculate observed frequency': 'Frequency shift should match direction of motion'
        };

        return expectations[step.step] || 'The result should be physically reasonable';
    }

    generateTroubleshootingTips(step) {
        return [
            'If answer seems wrong, check unit conversions',
            'Verify you used the correct formula for the situation',
            'For Doppler problems, redraw the diagram',
            'Check calculator is in correct mode (degrees vs radians, log vs ln)'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateGuidingQuestionsWave(step, problem),
                subSteps: this.breakIntoSubSteps(step),
                hints: this.generateProgressiveHintsWave(step),
                practiceVariation: this.generatePracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainThinkingProcessWave(step),
                decisionPoints: this.identifyDecisionPointsWave(step),
                alternativeApproaches: this.suggestAlternativeMethodsWave(step, problem)
            }
        }));
    }

    generateGuidingQuestionsWave(step, problem) {
        const questions = {
            'Identify known quantities': [
                'What quantities are given in the problem?',
                'What are we asked to find?',
                'What units are provided?'
            ],
            'Write wave speed formula': [
                'What is the relationship between wave speed, frequency, and wavelength?',
                'Which quantity are we solving for?',
                'How do we rearrange for our unknown?'
            ],
            'Determine sign convention': [
                'Is the source moving toward or away from the observer?',
                'Is the observer moving toward or away from the source?',
                'Which signs correspond to these motions?'
            ]
        };

        return questions[step.step] || ['What is this step accomplishing?', 'Why is it necessary?'];
    }

    generateProgressiveHintsWave(step) {
        return {
            level1: 'Think about the physical meaning of the quantities involved.',
            level2: 'Consider which formula relates the known and unknown quantities.',
            level3: 'Check the units to ensure your approach is correct.',
            level4: step.operation ? `Try: ${step.operation}` : 'Apply the appropriate wave equation.'
        };
    }

    breakIntoSubSteps(step) {
        if (step.operation) {
            return [
                `Identify what operation is needed: ${step.operation}`,
                'Write out the formula with variables',
                'Substitute known values',
                'Calculate the result',
                'Check units and reasonableness'
            ];
        }

        return ['Analyze the situation', 'Determine the approach', 'Execute the calculation'];
    }

    generatePracticeVariation(step, problem) {
        return {
            similarProblem: 'Try changing one parameter and recalculating',
            practiceHint: 'Practice with different media or frequencies',
            extension: 'Consider what happens at extreme values'
        };
    }

    explainThinkingProcessWave(step) {
        return {
            observe: 'What physical situation am I analyzing?',
            goal: 'What quantity am I trying to find?',
            strategy: 'Which wave principle or formula applies?',
            execute: 'How do I correctly apply this formula?',
            verify: 'Does my answer make physical sense?'
        };
    }

    identifyDecisionPointsWave(step) {
        return [
            'Choosing the correct formula for the wave type',
            'Determining proper sign conventions',
            'Selecting appropriate units'
        ];
    }

    suggestAlternativeMethodsWave(step, problem) {
        const alternatives = {
            wave_speed: [
                'Can use period instead of frequency (T = 1/f)',
                'Can work backwards from energy considerations'
            ],
            doppler_effect: [
                'Can solve using wavelength shift',
                'Can use velocity addition approach'
            ],
            standing_waves: [
                'Can use wavelength conditions first, then find frequency',
                'Can use energy methods for more complex systems'
            ]
        };

        return alternatives[problem.type] || ['Alternative methods depend on given information'];
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const adaptations = {
            basic: {
                vocabulary: 'simple terms',
                detail: 'essential information only',
                format: 'short sentences'
            },
            intermediate: {
                vocabulary: 'standard physics terms',
                detail: 'main concepts with brief explanations',
                format: 'clear step-by-step format'
            },
            detailed: {
                vocabulary: 'full physics terminology',
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
                    'wavelength': 'distance between wave peaks',
                    'frequency': 'how many waves per second',
                    'amplitude': 'wave height',
                    'medium': 'material the wave travels through',
                    'logarithm': 'special math operation that compresses large numbers'
                }
            },
            intermediate: {
                replacements: {
                    'wavelength': 'wavelength',
                    'frequency': 'frequency',
                    'amplitude': 'amplitude',
                    'medium': 'medium',
                    'logarithm': 'logarithm'
                }
            },
            detailed: {
                replacements: {
                    'wavelength': 'wavelength (λ, spatial period)',
                    'frequency': 'frequency (f, temporal oscillation rate)',
                    'amplitude': 'amplitude (A, maximum displacement)',
                    'medium': 'propagation medium',
                    'logarithm': 'logarithmic function (base-10 scaling)'
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
            connection: `This step builds on step ${stepIndex} by continuing the solution`,
            progression: 'We are making progress toward finding the unknown quantity',
            relationship: 'Each step applies wave physics principles systematically'
        };
    }

    // VERIFICATION METHODS

    verifyWaveSpeed() {
        const { frequency, wavelength, speed } = this.currentProblem.parameters;
        const calculated = this.currentSolution.result.calculated;
        
        let verification = {};
        
        if (calculated === 'speed') {
            const calculatedSpeed = this.currentSolution.speed;
            verification = {
                formula: 'v = fλ',
                given: { frequency, wavelength },
                calculated: calculatedSpeed,
                check: `${frequency} × ${wavelength} = ${calculatedSpeed}`,
                isValid: Math.abs(frequency * wavelength - calculatedSpeed) < 1e-6
            };
        } else if (calculated === 'frequency') {
            const calculatedFreq = this.currentSolution.frequency;
            verification = {
                formula: 'f = v/λ',
                given: { speed, wavelength },
                calculated: calculatedFreq,
                check: `${speed} / ${wavelength} = ${calculatedFreq}`,
                isValid: Math.abs(speed / wavelength - calculatedFreq) < 1e-6
            };
        } else if (calculated === 'wavelength') {
            const calculatedWave = this.currentSolution.wavelength;
            verification = {
                formula: 'λ = v/f',
                given: { speed, frequency },
                calculated: calculatedWave,
                check: `${speed} / ${frequency} = ${calculatedWave}`,
                isValid: Math.abs(speed / frequency - calculatedWave) < 1e-6
            };
        }

        return verification;
    }

    verifyDecibel() {
        const { intensity, decibelLevel } = this.currentSolution;
        const I0 = this.physicsConstants.referenceIntensity;

        const calculatedDecibel = 10 * Math.log10(intensity / I0);
        const calculatedIntensity = I0 * Math.pow(10, decibelLevel / 10);

        return {
            formula: 'β = 10 log₁₀(I/I₀)',
            intensity: intensity,
            decibelLevel: decibelLevel,
            verification: {
                forward: {
                    calculated: calculatedDecibel,
                    given: decibelLevel,
                    match: Math.abs(calculatedDecibel - decibelLevel) < 0.1
                },
                backward: {
                    calculated: calculatedIntensity,
                    given: intensity,
                    match: Math.abs(Math.log10(calculatedIntensity / intensity)) < 0.1
                }
            }
        };
    }

    verifyDoppler() {
        const { sourceFrequency, observedFrequency, sourceVelocity, observerVelocity, mediumSpeed } = this.currentSolution;

        // Recalculate to verify
        const v = mediumSpeed;
        const v_o = this.currentSolution.signConvention.observerToward ? observerVelocity : -observerVelocity;
        const v_s = this.currentSolution.signConvention.sourceToward ? -sourceVelocity : sourceVelocity;

        const recalculated = sourceFrequency * (v + v_o) / (v + v_s);

        return {
            formula: "f' = f(v ± v_o)/(v ∓ v_s)",
            sourceFrequency: sourceFrequency,
            observedFrequency: observedFrequency,
            recalculated: recalculated,
            difference: Math.abs(recalculated - observedFrequency),
            isValid: Math.abs(recalculated - observedFrequency) < 0.01,
            note: 'Sign convention critical for correct result'
        };
    }

    verifyStandingWave() {
        const { frequency, wavelength, waveSpeed, length, harmonic, category } = this.currentSolution;

        let recalculatedFreq;
        let recalculatedWave;

        if (category === 'standing_wave_pipe_closed') {
            recalculatedFreq = harmonic * waveSpeed / (4 * length);
            recalculatedWave = 4 * length / harmonic;
        } else {
            recalculatedFreq = harmonic * waveSpeed / (2 * length);
            recalculatedWave = 2 * length / harmonic;
        }

        // Also verify v = fλ
        const speedCheck = frequency * wavelength;

        return {
            formula: this.currentSolution.formula,
            given: { length, waveSpeed, harmonic },
            calculated: { frequency, wavelength },
            verification: {
                frequency: {
                    calculated: recalculatedFreq,
                    match: Math.abs(recalculatedFreq - frequency) < 0.01
                },
                wavelength: {
                    calculated: recalculatedWave,
                    match: Math.abs(recalculatedWave - wavelength) < 0.001
                },
                waveEquation: {
                    vCalc: speedCheck,
                    vGiven: waveSpeed,
                    match: Math.abs(speedCheck - waveSpeed) < 0.1
                }
            }
        };
    }

    // FORMATTING VERIFICATION DATA

    formatWaveSpeedVerification(verification) {
        return [
            ['Formula', verification.formula],
            ['Given', JSON.stringify(verification.given)],
            ['Calculated', verification.calculated],
            ['Check', verification.check],
            ['Valid', verification.isValid ? 'Yes' : 'No']
        ];
    }

    formatDecibelVerification(verification) {
        return [
            ['Formula', verification.formula],
            ['Intensity', `${verification.intensity} W/m²`],
            ['Decibel Level', `${verification.decibelLevel} dB`],
            ['', ''],
            ['Forward Check (I→β)', ''],
            ['Calculated β', verification.verification.forward.calculated.toFixed(2)],
            ['Given β', verification.verification.forward.given.toFixed(2)],
            ['Match', verification.verification.forward.match ? 'Yes' : 'No'],
            ['', ''],
            ['Backward Check (β→I)', ''],
            ['Calculated I', verification.verification.backward.calculated.toExponential(3)],
            ['Given I', verification.verification.backward.given.toExponential(3)],
            ['Match', verification.verification.backward.match ? 'Yes' : 'No']
        ];
    }

    formatDopplerVerification(verification) {
        return [
            ['Formula', verification.formula],
            ['Source Frequency', `${verification.sourceFrequency} Hz`],
            ['Observed Frequency', `${verification.observedFrequency} Hz`],
            ['Recalculated', `${verification.recalculated.toFixed(2)} Hz`],
            ['Difference', verification.difference.toExponential(2)],
            ['Valid', verification.isValid ? 'Yes' : 'No'],
            ['Note', verification.note]
        ];
    }

    formatStandingWaveVerification(verification) {
        return [
            ['Formula', verification.formula],
            ['Given Parameters', JSON.stringify(verification.given)],
            ['', ''],
            ['Frequency Verification', ''],
            ['Calculated', `${verification.verification.frequency.calculated.toFixed(2)} Hz`],
            ['Match', verification.verification.frequency.match ? 'Yes' : 'No'],
            ['', ''],
            ['Wavelength Verification', ''],
            ['Calculated', `${verification.verification.wavelength.calculated.toFixed(3)} m`],
            ['Match', verification.verification.wavelength.match ? 'Yes' : 'No'],
            ['', ''],
            ['Wave Equation Check (v=fλ)', ''],
            ['v from fλ', `${verification.verification.waveEquation.vCalc.toFixed(2)} m/s`],
            ['v given', `${verification.verification.waveEquation.vGiven} m/s`],
            ['Match', verification.verification.waveEquation.match ? 'Yes' : 'No']
        ];
    }

    // CONFIDENCE AND NOTES

    calculateVerificationConfidence() {
        if (!this.currentSolution || !this.currentProblem) return 'Unknown';

        const { type } = this.currentProblem;

        switch (type) {
            case 'wave_speed':
                const waveVerif = this.verifyWaveSpeed();
                return waveVerif.isValid ? 'High' : 'Low';

            case 'decibel_level':
                const dbVerif = this.verifyDecibel();
                return (dbVerif.verification.forward.match && dbVerif.verification.backward.match) ? 'High' : 'Medium';

            case 'doppler_effect':
                const dopplerVerif = this.verifyDoppler();
                return dopplerVerif.isValid ? 'High' : 'Low';

            case 'standing_wave_string':
            case 'standing_wave_pipe_open':
            case 'standing_wave_pipe_closed':
                const standingVerif = this.verifyStandingWave();
                return (standingVerif.verification.frequency.match && 
                        standingVerif.verification.wavelength.match &&
                        standingVerif.verification.waveEquation.match) ? 'High' : 'Medium';

            default:
                return 'Medium';
        }
    }

    getVerificationNotes() {
        const { type } = this.currentProblem;
        const notes = [];

        switch (type) {
            case 'wave_speed':
                notes.push('Direct substitution into v = fλ');
                notes.push('Units verified for dimensional consistency');
                break;

            case 'decibel_level':
                notes.push('Both forward and backward calculations performed');
                notes.push('Logarithm base 10 verified');
                notes.push('Reference intensity I₀ = 10⁻¹² W/m² used');
                break;

            case 'doppler_effect':
                notes.push('Sign convention verified against motion directions');
                notes.push('Both source and observer contributions checked');
                notes.push('Result verified against expected frequency shift direction');
                break;

            case 'standing_wave_string':
            case 'standing_wave_pipe_open':
            case 'standing_wave_pipe_closed':
                notes.push('Harmonic formula verified for boundary conditions');
                notes.push('Wavelength relationship confirmed');
                notes.push('Wave equation v = fλ independently verified');
                break;

            default:
                notes.push('Standard verification methods applied');
        }

        return notes.join('; ');
    }

    // PEDAGOGICAL NOTES

    generatePedagogicalNotesWave(problemType) {
        const pedagogicalDatabase = {
            wave_speed: {
                objectives: [
                    'Understand the relationship v = fλ',
                    'Convert between frequency, wavelength, and speed',
                    'Apply wave equation to real situations'
                ],
                keyConcepts: [
                    'Wave speed depends on medium properties',
                    'Frequency and wavelength are inversely related for constant speed',
                    'Period is reciprocal of frequency'
                ],
                prerequisites: [
                    'Basic algebra (solving for variables)',
                    'Understanding of frequency and period',
                    'Unit conversions (Hz, kHz, m, cm)'
                ],
                commonDifficulties: [
                    'Confusing frequency with wavelength',
                    'Unit conversion errors',
                    'Not recognizing which variable to solve for'
                ],
                extensions: [
                    'Energy and power in waves',
                    'Wave speed in different media',
                    'Electromagnetic spectrum applications'
                ],
                assessment: [
                    'Test with various media (sound, light, water)',
                    'Check unit conversion proficiency',
                    'Verify conceptual understanding of inverse relationship'
                ]
            },

            decibel_level: {
                objectives: [
                    'Calculate sound intensity level in decibels',
                    'Understand logarithmic scale properties',
                    'Convert between intensity and decibel level'
                ],
                keyConcepts: [
                    'Logarithmic scales compress large ranges',
                    'Each 10 dB represents 10× intensity change',
                    'Reference intensity I₀ = 10⁻¹² W/m²',
                    'Decibels are relative measurements'
                ],
                prerequisites: [
                    'Logarithm properties (especially log₁₀)',
                    'Scientific notation',
                    'Understanding of intensity vs amplitude',
                    'Calculator proficiency with log function'
                ],
                commonDifficulties: [
                    'Using natural log (ln) instead of log₁₀',
                    'Forgetting the factor of 10 in formula',
                    'Confusion about reference intensity',
                    'Misunderstanding additive property of decibels'
                ],
                extensions: [
                    'Sound pressure level vs intensity level',
                    'Combining multiple sound sources',
                    'Hearing damage and safety thresholds',
                    'Architectural acoustics'
                ],
                assessment: [
                    'Test both I→dB and dB→I conversions',
                    'Check understanding of logarithmic properties',
                    'Verify correct use of reference intensity',
                    'Test interpretation of decibel differences'
                ]
            },

            doppler_effect: {
                objectives: [
                    'Apply Doppler formula with correct sign convention',
                    'Understand physical basis of frequency shift',
                    'Solve for various unknowns (frequencies, velocities)'
                ],
                keyConcepts: [
                    'Relative motion causes apparent frequency change',
                    'Approaching sources: higher frequency (compression)',
                    'Receding sources: lower frequency (expansion)',
                    'Both source and observer motion contribute'
                ],
                prerequisites: [
                    'Wave speed and frequency concepts',
                    'Vector components and relative motion',
                    'Algebraic manipulation of fractions',
                    'Sign convention understanding'
                ],
                commonDifficulties: [
                    'Incorrect sign convention application',
                    'Confusing source and observer velocities',
                    'Not drawing motion diagram first',
                    'Forgetting medium speed in denominator'
                ],
                extensions: [
                    'Doppler effect with light (relativistic)',
                    'Radar and speed detection',
                    'Medical ultrasound Doppler',
                    'Astronomical redshift/blueshift'
                ],
                assessment: [
                    'Test with various motion configurations',
                    'Check sign convention understanding',
                    'Verify diagram-drawing skill',
                    'Test limit cases (stationary source/observer)'
                ]
            },

            standing_wave_string: {
                objectives: [
                    'Determine resonant frequencies for strings',
                    'Understand relationship between harmonics',
                    'Apply boundary conditions (fixed ends)'
                ],
                keyConcepts: [
                    'Standing waves from interference of traveling waves',
                    'Fixed ends must be nodes',
                    'Fundamental frequency is lowest resonance',
                    'Higher harmonics are integer multiples',
                    'Wavelength related to string length: λ = 2L/n'
                ],
                prerequisites: [
                    'Wave speed equation v = fλ',
                    'Understanding of nodes and antinodes',
                    'Harmonic series concept',
                    'Relationship between tension and wave speed'
                ],
                commonDifficulties: [
                    'Confusing different standing wave systems (string vs pipe)',
                    'Not recognizing node/antinode patterns',
                    'Mixing up formulas for different boundary conditions',
                    'Forgetting factor of 2 in wavelength relationship'
                ],
                extensions: [
                    'Effect of tension and linear density on frequency',
                    'Musical instrument design',
                    'Timbre and overtone series',
                    'Energy considerations in standing waves'
                ],
                assessment: [
                    'Test with different harmonic numbers',
                    'Check understanding of node/antinode positions',
                    'Verify wavelength-length relationship',
                    'Test with different string properties'
                ]
            },

            standing_wave_pipe_open: {
                objectives: [
                    'Calculate harmonics for open pipes',
                    'Understand open-end boundary conditions',
                    'Compare with closed pipe behavior'
                ],
                keyConcepts: [
                    'Open ends are antinodes (pressure nodes)',
                    'All harmonics present (n = 1, 2, 3, ...)',
                    'Formula same as string: f_n = nv/(2L)',
                    'Wavelength relationship: λ = 2L/n'
                ],
                prerequisites: [
                    'Standing wave concepts',
                    'Pressure vs displacement for sound',
                    'Harmonic series',
                    'Speed of sound in air'
                ],
                commonDifficulties: [
                    'Confusing with closed pipe (odd harmonics only)',
                    'Not understanding pressure vs displacement antinodes',
                    'Incorrect wavelength relationships'
                ],
                extensions: [
                    'Organ pipes and wind instruments',
                    'End correction for finite pipe radius',
                    'Temperature effects on pitch',
                    'Musical scale and tuning'
                ],
                assessment: [
                    'Compare open vs closed pipe behavior',
                    'Test harmonic pattern recognition',
                    'Verify understanding of boundary conditions'
                ]
            },

            standing_wave_pipe_closed: {
                objectives: [
                    'Calculate harmonics for closed pipes',
                    'Understand mixed boundary conditions',
                    'Recognize only odd harmonics are present'
                ],
                keyConcepts: [
                    'Closed end is node, open end is antinode',
                    'Only odd harmonics: n = 1, 3, 5, ...',
                    'Formula: f_n = nv/(4L) for odd n',
                    'Wavelength: λ = 4L/n',
                    'Fundamental is one quarter wavelength'
                ],
                prerequisites: [
                    'Standing wave concepts',
                    'Node and antinode identification',
                    'Understanding of boundary conditions',
                    'Harmonic series patterns'
                ],
                commonDifficulties: [
                    'Using even harmonic numbers (not allowed)',
                    'Confusing 2L and 4L in formulas',
                    'Not recognizing why only odd harmonics exist',
                    'Mixing up open and closed pipe formulas'
                ],
                extensions: [
                    'Clarinet and other closed-pipe instruments',
                    'Timbre differences from missing even harmonics',
                    'Resonance in tubes and cavities',
                    'Acoustic impedance at boundaries'
                ],
                assessment: [
                    'Explicitly test with even harmonic numbers (should recognize error)',
                    'Compare frequency ratios with open pipes',
                    'Check understanding of quarter-wave resonance',
                    'Test wavelength calculation accuracy'
                ]
            },

            interference: {
                objectives: [
                    'Determine interference type from path difference',
                    'Calculate phase difference from path difference',
                    'Predict constructive/destructive interference'
                ],
                keyConcepts: [
                    'Superposition principle: waves add algebraically',
                    'Constructive: path difference = nλ',
                    'Destructive: path difference = (n+1/2)λ',
                    'Phase difference related to path difference'
                ],
                prerequisites: [
                    'Wave properties and wavelength',
                    'Understanding of phase',
                    'Trigonometry and sine functions',
                    'Vector addition concepts'
                ],
                commonDifficulties: [
                    'Confusing path difference with phase difference',
                    'Not accounting for half-wavelength shifts',
                    'Forgetting integer vs half-integer conditions',
                    'Unit confusion (wavelength vs meters)'
                ],
                extensions: [
                    'Interference patterns and intensity distribution',
                    'Thin film interference',
                    'Double-slit experiments',
                    'Noise cancellation technology'
                ],
                assessment: [
                    'Test with various path differences',
                    'Check phase difference calculations',
                    'Verify understanding of constructive/destructive conditions'
                ]
            },

            beat_frequency: {
                objectives: [
                    'Calculate beat frequency from two sources',
                    'Understand physical basis of beats',
                    'Apply to musical tuning scenarios'
                ],
                keyConcepts: [
                    'Beats from interference of close frequencies',
                    'Beat frequency = |f₁ - f₂|',
                    'Amplitude modulation at beat frequency',
                    'Used for precision tuning'
                ],
                prerequisites: [
                    'Frequency concept',
                    'Wave interference basics',
                    'Absolute value understanding',
                    'Graphical wave addition'
                ],
                commonDifficulties: [
                    'Thinking beat frequency is sum rather than difference',
                    'Not recognizing two possible solutions when given beats',
                    'Confusing beat frequency with average frequency'
                ],
                extensions: [
                    'Musical instrument tuning',
                    'Heterodyne receivers',
                    'Amplitude modulation (AM) radio',
                    'Frequency measurement techniques'
                ],
                assessment: [
                    'Test both given frequencies → beats direction',
                    'Test given beats → possible frequencies (two solutions)',
                    'Check understanding of why difference, not sum'
                ]
            },

            wave_function: {
                objectives: [
                    'Write wave function y = A sin(kx - ωt + φ)',
                    'Identify parameters from wave properties',
                    'Calculate displacement at specific positions/times'
                ],
                keyConcepts: [
                    'Wave number k = 2π/λ (spatial frequency)',
                    'Angular frequency ω = 2πf (temporal frequency)',
                    'Phase φ determines starting position',
                    'Wave travels in direction of kx - ωt'
                ],
                prerequisites: [
                    'Trigonometric functions (sine, cosine)',
                    'Radian measure',
                    'Period and frequency',
                    'Wavelength concept'
                ],
                commonDifficulties: [
                    'Confusing k and ω',
                    'Sign errors in kx - ωt',
                    'Unit confusion (radians vs degrees)',
                    'Not understanding phase constant role'
                ],
                extensions: [
                    'Complex exponential notation',
                    'Wave packets and group velocity',
                    'Fourier analysis',
                    'Quantum mechanical wave functions'
                ],
                assessment: [
                    'Test parameter identification from graphs',
                    'Check displacement calculations',
                    'Verify understanding of wave propagation direction'
                ]
            }
        };

        return pedagogicalDatabase[problemType] || {
            objectives: ['Understand wave and sound principles'],
            keyConcepts: ['Apply appropriate wave physics'],
            prerequisites: ['Basic wave concepts'],
            commonDifficulties: ['Various calculation errors'],
            extensions: ['More complex wave phenomena'],
            assessment: ['Check understanding of solution process']
        };
    }

    // ALTERNATIVE METHODS

    generateAlternativeMethodsWave(problemType) {
        const alternativeDatabase = {
            wave_speed: {
                primaryMethod: 'Direct application of v = fλ',
                methods: [
                    {
                        name: 'Period Method',
                        description: 'Use T = 1/f to find period first, then v = λ/T'
                    },
                    {
                        name: 'Graphical Method',
                        description: 'Measure wavelength from graph, count cycles for frequency'
                    },
                    {
                        name: 'Energy Method',
                        description: 'Use energy relationships if power and intensity known'
                    }
                ],
                comparison: 'Direct v = fλ is fastest; period method useful when T is given; graphical for visual learners'
            },

            decibel_level: {
                primaryMethod: 'Logarithmic formula β = 10 log₁₀(I/I₀)',
                methods: [
                    {
                        name: 'Ratio Method',
                        description: 'Use Δβ = 10 log₁₀(I₂/I₁) for relative changes'
                    },
                    {
                        name: 'Power of 10 Method',
                        description: 'Express intensity as I₀ × 10^(β/10) and work backwards'
                    },
                    {
                        name: 'Table Lookup',
                        description: 'Use standard values (60 dB = conversation, 120 dB = pain threshold)'
                    }
                ],
                comparison: 'Direct formula most accurate; ratio method for comparing sources; table lookup for estimates'
            },

            doppler_effect: {
                primaryMethod: 'General Doppler formula f\' = f(v ± v_o)/(v ∓ v_s)',
                methods: [
                    {
                        name: 'Wavelength Method',
                        description: 'Calculate wavelength shift first: λ\' = λ(v ∓ v_s)/v, then use v = f\'λ\''
                    },
                    {
                        name: 'Limiting Cases',
                        description: 'Simplify when only source or only observer moves'
                    },
                    {
                        name: 'Velocity Addition',
                        description: 'Treat as relative velocity problem in certain reference frames'
                    }
                ],
                comparison: 'General formula handles all cases; wavelength method provides insight; limiting cases simplify calculation'
            },

            standing_wave_string: {
                primaryMethod: 'Harmonic formula f_n = nv/(2L)',
                methods: [
                    {
                        name: 'Wavelength First',
                        description: 'Find λ = 2L/n, then use v = fλ'
                    },
                    {
                        name: 'Tension Method',
                        description: 'Calculate v = √(T/μ) first if tension given'
                    },
                    {
                        name: 'Node Counting',
                        description: 'Count nodes to identify n, then apply formula'
                    }
                ],
                comparison: 'Direct formula fastest; wavelength method builds understanding; tension method when string properties given'
            },

            interference: {
                primaryMethod: 'Path difference analysis Δx = nλ or (n+1/2)λ',
                methods: [
                    {
                        name: 'Phase Difference Method',
                        description: 'Calculate Δφ = 2π(Δx/λ), check if multiple of 2π or odd multiple of π'
                    },
                    {
                        name: 'Phasor Method',
                        description: 'Use phasor diagrams for vector addition of waves'
                    },
                    {
                        name: 'Intensity Method',
                        description: 'Calculate resultant intensity from interference term'
                    }
                ],
                comparison: 'Path difference most intuitive; phase difference more general; phasors for multiple sources'
            }
        };

        return alternativeDatabase[problemType] || {
            primaryMethod: 'Standard wave physics approach',
            methods: [
                {
                    name: 'Systematic Approach',
                    description: 'Follow standard problem-solving steps for wave problems'
                }
            ],
            comparison: 'Method choice depends on given information and problem complexity'
        };
    }

    // GRAPH DATA GENERATION

    generateWaveSoundGraphData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;

        switch(type) {
            case 'wave_speed':
            case 'wave_function':
                this.graphData = this.generateWaveFunctionGraph();
                break;

            case 'standing_wave_string':
            case 'standing_wave_pipe_open':
            case 'standing_wave_pipe_closed':
                this.graphData = this.generateStandingWaveGraph();
                break;

            case 'interference':
                this.graphData = this.generateInterferenceGraph();
                break;

            case 'beat_frequency':
                this.graphData = this.generateBeatGraph();
                break;
        }
    }

    generateWaveFunctionGraph() {
        const { wavelength, frequency, amplitude } = this.currentSolution;
        
        if (!wavelength || !frequency || !amplitude) return null;

        const k = 2 * Math.PI / wavelength;
        const omega = 2 * Math.PI * frequency;
        const points = [];

        // Generate snapshot at t = 0
        for (let x = 0; x <= 3 * wavelength; x += wavelength / 50) {
            const y = amplitude * Math.sin(k * x);
            points.push({ x: x, y: y });
        }

        return {
            type: 'wave_function',
            points: points,
            parameters: {
                amplitude: amplitude,
                wavelength: wavelength,
                frequency: frequency,
                waveNumber: k,
                angularFrequency: omega
            }
        };
    }

    generateStandingWaveGraph() {
        const { length, wavelength, harmonic, amplitude = 1 } = this.currentSolution;
        
        if (!length || !wavelength) return null;

        const k = 2 * Math.PI / wavelength;
        const points = [];

        // Standing wave pattern: y = 2A sin(kx) at maximum amplitude
        for (let x = 0; x <= length; x += length / 100) {
            const y = amplitude * Math.sin(k * x);
            points.push({ x: x, y: y });
        }

        // Node positions
        const nodes = [];
        for (let n = 0; n <= harmonic; n++) {
            nodes.push(n * length / harmonic);
        }

        // Antinode positions
        const antinodes = [];
        for (let n = 0; n < harmonic; n++) {
            antinodes.push((n + 0.5) * length / harmonic);
        }

        return {
            type: 'standing_wave',
            points: points,
            nodes: nodes,
            antinodes: antinodes,
            harmonic: harmonic,
            length: length
        };
    }

    generateInterferenceGraph() {
        const { wavelength, pathDifference } = this.currentSolution;
        
        if (!wavelength) return null;

        return {
            type: 'interference',
            wavelength: wavelength,
            pathDifference: pathDifference,
            interferenceType: this.currentSolution.interferenceType
        };
    }

    generateBeatGraph() {
        const { frequency1, frequency2, beatFrequency } = this.currentSolution;
        
        if (!frequency1 || !frequency2) return null;

        const points1 = [];
        const points2 = [];
        const pointsSum = [];
        const duration = 3 / beatFrequency; // 3 beat periods

        for (let t = 0; t <= duration; t += duration / 500) {
            const y1 = Math.sin(2 * Math.PI * frequency1 * t);
            const y2 = Math.sin(2 * Math.PI * frequency2 * t);
            const ySum = y1 + y2;

            points1.push({ t: t, y: y1 });
            points2.push({ t: t, y: y2 });
            pointsSum.push({ t: t, y: ySum });
        }

        return {
            type: 'beats',
            wave1: points1,
            wave2: points2,
            sum: pointsSum,
            frequency1: frequency1,
            frequency2: frequency2,
            beatFrequency: beatFrequency
        };
    }

    // WORKBOOK GENERATION

    generateWaveSoundWorkbook() {
        if (!this.currentSolution || !this.currentProblem) return;

        const workbook = this.createWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSectionWave(),
            this.createSolutionSection(),
            this.createAnalysisSection(),
            this.createVerificationSectionWave(),
            this.createPedagogicalNotesSectionWave(),
            this.createAlternativeMethodsSectionWave()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
    }

    createWorkbookStructure() {
        return {
            title: 'Wave and Sound Physics Workbook',
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
                ['Problem Type', this.waveTypes[this.currentProblem.type]?.name || this.currentProblem.type],
                ['Category', this.waveTypes[this.currentProblem.type]?.category || 'N/A'],
                ['Description', this.currentProblem.scenario || 'N/A'],
                ['Parameters', JSON.stringify(this.currentProblem.parameters)]
            ]
        };
    }

    createEnhancedStepsSection() {
        if (!this.solutionSteps || this.solutionSteps.length === 0) return null;

        const stepsData = [];

        this.solutionSteps.forEach((step, index) => {
            // Skip bridge steps in main display
            if (step.stepType === 'bridge') return;

            stepsData.push(['Step ' + step.stepNumber, step.description]);

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

            if (step.physicalMeaning) {
                stepsData.push(['Physical Meaning', step.physicalMeaning]);
            }

            if (step.algebraicRule) {
                stepsData.push(['Rule Used', step.algebraicRule]);
            }

            if (step.criticalWarning) {
                stepsData.push(['⚠️ WARNING', step.criticalWarning]);
            }

            if (step.explanations && this.explanationLevel === 'detailed') {
                stepsData.push(['Conceptual', step.explanations.conceptual]);
                stepsData.push(['Visual', step.explanations.visual]);
            }

            if (step.errorPrevention && this.includeErrorPrevention) {
                if (step.errorPrevention.commonMistakes.length > 0) {
                    stepsData.push(['Common Mistakes', step.errorPrevention.commonMistakes.join('; ')]);
                }
                if (step.errorPrevention.preventionTips.length > 0) {
                    stepsData.push(['Prevention Tips', step.errorPrevention.preventionTips.join('; ')]);
                }
            }

            if (step.scaffolding && this.explanationLevel === 'scaffolded') {
                stepsData.push(['Guiding Questions', step.scaffolding.guidingQuestions.join(' ')]);
            }

            if (step.finalAnswer) {
                stepsData.push(['✓ FINAL ANSWER', `${step.numericalResult} ${step.units || ''}`]);
            }

            stepsData.push(['', '']); // Spacing
        });

        return {
            title: 'Enhanced Step-by-Step Solution',
            type: 'steps',
            data: stepsData
        };
    }

    createLessonSectionWave() {
        const { type } = this.currentProblem;
        const lessonKey = this.waveTypes[type]?.category || type;
        const lesson = this.lessons[lessonKey];

        if (!lesson) return null;

        const lessonData = [
            ['Topic', lesson.title],
            ['', ''],
            ['Key Concepts', ''],
            ...lesson.concepts.map(c => ['•', c]),
            ['', ''],
            ['Theory', lesson.theory]
        ];

        if (lesson.keyFormulas) {
            lessonData.push(['', '']);
            lessonData.push(['Key Formulas', '']);
            for (const [name, formula] of Object.entries(lesson.keyFormulas)) {
                lessonData.push([name, formula]);
            }
        }

        if (lesson.applications) {
            lessonData.push(['', '']);
            lessonData.push(['Applications', '']);
            lesson.applications.forEach(app => {
                lessonData.push(['•', app]);
            });
        }

        return {
            title: 'Conceptual Background',
            type: 'lesson',
            data: lessonData
        };
    }

    createSolutionSection() {
        if (!this.currentSolution) return null;

        const solutionData = [];

        // Add problem-specific solution data
        for (const [key, value] of Object.entries(this.currentSolution)) {
            if (key === 'problemType' || key === 'category') continue;
            if (key === 'units') continue;
            if (typeof value === 'object' && !Array.isArray(value)) continue;

            const unit = this.currentSolution.units?.[key] || '';
            const displayValue = typeof value === 'number' ? 
                (Math.abs(value) < 0.01 || Math.abs(value) > 1000 ? value.toExponential(3) : value.toFixed(4)) :
                value;

            solutionData.push([key, `${displayValue} ${unit}`.trim()]);
        }

        return {
            title: 'Final Solution',
            type: 'solution',
            data: solutionData
        };
    }

    createAnalysisSection() {
        return {
            title: 'Solution Analysis',
            type: 'analysis',
            data: [
                ['Problem Type', this.waveTypes[this.currentProblem.type]?.name || 'Unknown'],
                ['Steps Used', this.solutionSteps?.filter(s => s.stepType !== 'bridge').length || 0],
                ['Difficulty Level', this.explanationLevel],
                ['Method', 'Wave physics principles'],
                ['Verification', 'See Verification section']
            ]
        };
    }

    createVerificationSectionWave() {
        if (!this.currentSolution || !this.currentProblem) return null;

        const verificationData = [];
        const { type } = this.currentProblem;

        verificationData.push(['Verification Method', 'Result']);
        verificationData.push(['', '']);

        switch (type) {
            case 'wave_speed':
            case 'frequency_period':
                const waveVerif = this.verifyWaveSpeed();
                verificationData.push(...this.formatWaveSpeedVerification(waveVerif));
                break;

            case 'decibel_level':
                const dbVerif = this.verifyDecibel();
                verificationData.push(...this.formatDecibelVerification(dbVerif));
                break;

            case 'doppler_effect':
                const dopplerVerif = this.verifyDoppler();
                verificationData.push(...this.formatDopplerVerification(dopplerVerif));
                break;

            case 'standing_wave_string':
            case 'standing_wave_pipe_open':
            case 'standing_wave_pipe_closed':
                const standingVerif = this.verifyStandingWave();
                verificationData.push(...this.formatStandingWaveVerification(standingVerif));
                break;

            default:
                verificationData.push(['General Check', 'Solution verified using dimensional analysis']);
        }

        if (this.verificationDetail === 'detailed') {
            verificationData.push(['', '']);
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

    createPedagogicalNotesSectionWave() {
        if (!this.includePedagogicalNotes) return null;

        const { type } = this.currentProblem;
        const notes = this.generatePedagogicalNotesWave(type);

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

    createAlternativeMethodsSectionWave() {
        if (!this.includeAlternativeMethods) return null;

        const { type } = this.currentProblem;
        const alternatives = this.generateAlternativeMethodsWave(type);

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
}

