class PhysicsDiagramsRegistry {
    static diagrams = {
        // ===== 1. MECHANICS =====
        'freeBodyDiagram': {
            name: 'Free Body Diagram',
            category: 'Mechanics',
            description: 'Force vectors acting on an object',
            type: 'free_body_diagram',
            forces: [
                { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
            ],
            defaultOptions: {
                title: 'Free Body Diagram',
                showLabels: true,
                showMagnitudes: true,
                showAngles: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorDiagram': {
            name: 'Vector Addition Diagram',
            category: 'Mechanics',
            description: 'Vector addition using tip-to-tail method',
            type: 'vector_diagram',
            vectors: [
                { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                { x: 30, y: -20, label: 'B', color: '#3498DB' }
            ],
            showResultant: true,
            defaultOptions: {
                title: 'Vector Addition',
                showComponents: true,
                showResultant: true,
                showGrid: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'motionGraphs': {
            name: 'Motion Graphs (s-t, v-t, a-t)',
            category: 'Mechanics',
            description: 'Kinematic graphs showing motion relationships',
            type: 'motion_graphs',
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'projectileMotion': {
            name: 'Projectile Motion Trajectory',
            category: 'Mechanics',
            description: 'Parabolic path of projectile motion',
            type: 'projectile_motion',
            initialVelocity: 20,
            launchAngle: 45,
            defaultOptions: {
                title: 'Projectile Motion',
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'inclinedPlane': {
            name: 'Inclined Plane Diagram',
            category: 'Mechanics',
            description: 'Forces on an object on an incline',
            type: 'inclined_plane',
            angle: 30,
            mass: 10,
            friction: true,
            defaultOptions: {
                title: 'Inclined Plane',
                showForceComponents: true,
                showAngles: true,
                showFriction: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'momentumCollision': {
            name: 'Momentum Collision Diagram',
            category: 'Mechanics',
            description: 'Before and after collision comparison',
            type: 'momentum_collision',
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ],
            defaultOptions: {
                title: 'Elastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circularMotion': {
            name: 'Circular Motion Diagram',
            category: 'Mechanics',
            description: 'Centripetal force and circular motion',
            type: 'circular_motion',
            radius: 100,
            velocity: 15,
            defaultOptions: {
                title: 'Circular Motion',
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'workEnergyBarChart': {
            name: 'Work-Energy Bar Chart',
            category: 'Mechanics',
            description: 'Energy transformation bar chart',
            type: 'work_energy_chart',
            initialKE: 100,
            initialPE: 0,
            finalKE: 50,
            finalPE: 40,
            workDone: -10,
            defaultOptions: {
                title: 'Work-Energy Transformation',
                showValues: true,
                showTotal: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springHarmonicMotion': {
            name: 'Spring Harmonic Oscillator',
            category: 'Mechanics',
            description: 'Simple harmonic motion of a spring',
            type: 'spring_harmonic',
            amplitude: 50,
            springConstant: 10,
            mass: 2,
            defaultOptions: {
                title: 'Simple Harmonic Motion - Spring',
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'torqueLeverDiagram': {
            name: 'Torque and Lever Diagram',
            category: 'Mechanics',
            description: 'Lever showing torque and moment arm',
            type: 'torque_lever',
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30,
            defaultOptions: {
                title: 'Torque on a Lever',
                showMomentArms: true,
                showForces: true,
                showRotation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MECHANICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'pulleySystemApparatus': {
            name: 'Pulley System Apparatus',
            category: 'Mechanics',
            description: 'Real pulley apparatus with forces and mechanical advantage',
            type: 'apparatus_diagram',
            apparatusType: 'pulley_system',
            numPulleys: 2,
            load: 100,
            effort: 50,
            defaultOptions: {
                title: 'Pulley System',
                showRealObject: true,
                showForceLabels: true,
                showMechanicalAdvantage: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Number of rope segments supporting load',
                    constant: 'Total weight being lifted',
                    law: 'Mechanical Advantage = Load/Effort'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'atwoodsMachineApparatus': {
            name: "Atwood's Machine Apparatus",
            category: 'Mechanics',
            description: 'Two masses connected over pulley showing tension and acceleration',
            type: 'apparatus_diagram',
            apparatusType: 'atwooods_machine',
            mass1: 5,
            mass2: 3,
            defaultOptions: {
                title: "Atwood's Machine",
                showRealObject: true,
                showTension: true,
                showAcceleration: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Acceleration of system',
                    constant: 'Tension in rope',
                    law: 'Net Force = ma, T - m₁g = m₁a'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'parachuteApparatus': {
            name: 'Parachute Terminal Velocity',
            category: 'Mechanics',
            description: 'Parachute showing drag force and terminal velocity',
            type: 'apparatus_diagram',
            apparatusType: 'parachute',
            mass: 80,
            area: 50,
            defaultOptions: {
                title: 'Parachute - Terminal Velocity',
                showRealObject: true,
                showDragForce: true,
                showWeight: true,
                showVelocity: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Velocity (initially increasing, then constant)',
                    constant: 'Mass, drag coefficient, air density',
                    law: 'At terminal velocity: Drag = Weight'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'pendulumApparatus': {
            name: 'Simple Pendulum Apparatus',
            category: 'Mechanics',
            description: 'Pendulum showing restoring force and energy exchange',
            type: 'apparatus_diagram',
            apparatusType: 'pendulum',
            length: 100,
            mass: 2,
            amplitude: 30,
            defaultOptions: {
                title: 'Simple Pendulum',
                showRealObject: true,
                showTension: true,
                showComponents: true,
                showEnergy: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height, velocity, KE, PE',
                    constant: 'Total mechanical energy, length',
                    law: 'T = 2π√(L/g), Energy conservation'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'hydrostaticBalanceApparatus': {
            name: 'Hydrostatic Balance',
            category: 'Mechanics',
            description: 'Object suspended in fluid showing buoyancy and weight',
            type: 'apparatus_diagram',
            apparatusType: 'hydrostatic_balance',
            objectMass: 10,
            fluidDensity: 1000,
            objectVolume: 0.005,
            defaultOptions: {
                title: 'Hydrostatic Balance',
                showRealObject: true,
                showBuoyancy: true,
                showWeight: true,
                showApparentWeight: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Apparent weight (less in fluid)',
                    constant: 'Actual weight, volume',
                    law: "Archimedes' Principle: Buoyancy = ρVg"
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'ballisticPendulumApparatus': {
            name: 'Ballistic Pendulum',
            category: 'Mechanics',
            description: 'Projectile embedded in pendulum showing momentum and energy',
            type: 'apparatus_diagram',
            apparatusType: 'ballistic_pendulum',
            projectileMass: 0.01,
            pendulumMass: 2,
            height: 0.3,
            defaultOptions: {
                title: 'Ballistic Pendulum',
                showRealObject: true,
                showVelocities: true,
                showHeight: true,
                showEquations: true,
           
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 2. WAVES & SOUND =====
        'transverseLongitudinalWaves': {
            name: 'Transverse vs Longitudinal Waves',
            category: 'Waves & Sound',
            description: 'Comparison of wave types',
            type: 'wave_types',
            wavelength: 100,
            amplitude: 30,
            defaultOptions: {
                title: 'Transverse vs Longitudinal Waves',
                showParticles: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontDiagram': {
            name: 'Wavefront Diagram',
            category: 'Waves & Sound',
            description: 'Circular wavefronts from point source',
            type: 'wavefront',
            wavelength: 40,
            numWavefronts: 5,
            defaultOptions: {
                title: 'Wavefronts',
                showSource: true,
                showRays: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'reflectionRefraction': {
            name: 'Reflection and Refraction',
            category: 'Waves & Sound',
            description: 'Wave behavior at boundaries',
            type: 'reflection_refraction',
            incidentAngle: 30,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: 'Reflection and Refraction',
                showNormals: true,
                showAngles: true,
                showSnellsLaw: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveInterference': {
            name: 'Wave Interference Pattern',
            category: 'Waves & Sound',
            description: 'Constructive and destructive interference',
            type: 'wave_interference',
            separation: 100,
            wavelength: 30,
            defaultOptions: {
                title: 'Wave Interference',
                showSources: true,
                showNodes: true,
                showAntinodes: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'standingWaves': {
            name: 'Standing Waves on String',
            category: 'Waves & Sound',
            description: 'Harmonics and nodes on vibrating string',
            type: 'standing_waves',
            harmonic: 3,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: 'Standing Waves - 3rd Harmonic',
                showNodes: true,
                showAntinodes: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffect': {
            name: 'Doppler Effect Diagram',
            category: 'Waves & Sound',
            description: 'Wavefront compression/expansion',
            type: 'doppler_effect',
            sourceVelocity: 0.5,
            direction: 'right',
            defaultOptions: {
                title: 'Doppler Effect',
                showWavefronts: true,
                showVelocity: true,
                showFrequencyChange: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'soundWavePressure': {
            name: 'Sound Wave Pressure Graph',
            category: 'Waves & Sound',
            description: 'Pressure variation in sound wave',
            type: 'sound_pressure',
            frequency: 440,
            amplitude: 50,
            defaultOptions: {
                title: 'Sound Wave - Pressure vs Position',
                showCompressions: true,
                showRarefactions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionPattern': {
            name: 'Diffraction Pattern',
            category: 'Waves & Sound',
            description: 'Single and double slit diffraction',
            type: 'diffraction',
            slitType: 'double',
            slitWidth: 20,
            slitSeparation: 80,
            wavelength: 10,
            defaultOptions: {
                title: 'Double Slit Diffraction',
                showIntensity: true,
                showPattern: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== WAVES APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'rippletankApparatus': {
            name: 'Ripple Tank Apparatus',
            category: 'Waves & Sound',
            description: 'Water ripple tank showing wave properties',
            type: 'apparatus_diagram',
            apparatusType: 'ripple_tank',
            wavelength: 40,
            frequency: 5,
            defaultOptions: {
                title: 'Ripple Tank',
                showRealObject: true,
                showWavefronts: true,
                showBarriers: true,
                showEquations: true,
           
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceTubeApparatus': {
            name: 'Resonance Tube Apparatus',
            category: 'Waves & Sound',
            description: 'Closed tube showing standing waves and resonance',
            type: 'apparatus_diagram',
            apparatusType: 'resonance_tube',
            tubeLength: 0.25,
            frequency: 340,
            defaultOptions: {
                title: 'Resonance Tube',
                showRealObject: true,
                showWaterLevel: true,
                showStandingWave: true,
                showNodes: true,
                showEquations: true,
               
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },
        'sonoMeterApparatus': {
            name: 'Sonometer Apparatus',
            category: 'Waves & Sound',
            description: 'Vibrating string showing relationship between tension, length, frequency',
            type: 'apparatus_diagram',
            apparatusType: 'sonometer',
            stringLength: 0.8,
            tension: 100,
            frequency: 256,
            defaultOptions: {
                title: 'Sonometer',
                showRealObject: true,
                showString: true,
                showWeights: true,
                showBridges: true,
                showEquations: true,
               
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 3. STATES OF MATTER =====
        'particleModelSolid': {
            name: 'Particle Model - Solid',
            category: 'States of Matter',
            description: 'Particles in solid state showing regular arrangement',
            type: 'particle_model',
            state: 'solid',
            numParticles: 64,
            defaultOptions: {
                title: 'Particle Model - Solid',
                showParticles: true,
                showVibration: false,
                showArrangement: true,
                showSpacing: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleModelLiquid': {
            name: 'Particle Model - Liquid',
            category: 'States of Matter',
            description: 'Particles in liquid state showing random arrangement',
            type: 'particle_model',
            state: 'liquid',
            numParticles: 64,
            defaultOptions: {
                title: 'Particle Model - Liquid',
                showParticles: true,
                showMotion: false,
                showArrangement: true,
                showSpacing: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleModelGas': {
            name: 'Particle Model - Gas',
            category: 'States of Matter',
            description: 'Particles in gas state showing wide spacing',
            type: 'particle_model',
            state: 'gas',
            numParticles: 40,
            defaultOptions: {
                title: 'Particle Model - Gas',
                showParticles: true,
                showMotion: false,
                showArrangement: true,
                showSpacing: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'stateTransitionDiagram': {
            name: 'State Transition Diagram',
            category: 'States of Matter',
            description: 'All phase transitions between solid, liquid, gas',
            type: 'state_transition',
            defaultOptions: {
                title: 'States of Matter Transitions',
                showAllStates: true,
                showTransitions: true,
                showLabels: true,
                showEnergyChanges: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'diffusionDiagram': {
            name: 'Diffusion Process',
            category: 'States of Matter',
            description: 'Particle diffusion in gases and liquids',
            type: 'diffusion',
            medium: 'gas',
            numParticles: 50,
            defaultOptions: {
                title: 'Diffusion in Gas',
                showParticles: true,
                showConcentrationGradient: true,
                showMovement: false,
                showTimeSteps: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'brownianMotionDiagram': {
            name: 'Brownian Motion',
            category: 'States of Matter',
            description: 'Random particle motion due to collisions',
            type: 'brownian_motion',
            particleSize: 'large',
            numSmallParticles: 100,
            defaultOptions: {
                title: 'Brownian Motion',
                showLargeParticle: true,
                showSmallParticles: true,
                showPath: true,
                showCollisions: false,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'densityComparison': {
            name: 'Density Comparison',
            category: 'States of Matter',
            description: 'Visual comparison of densities across states',
            type: 'density_comparison',
            substance: 'water',
            defaultOptions: {
                title: 'Density - Solid vs Liquid vs Gas',
                showParticles: true,
                showVolumes: true,
                showMasses: true,
                showCalculations: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== STATES OF MATTER APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'syringeGasLawApparatus': {
            name: 'Syringe - Gas Law Apparatus',
            category: 'States of Matter',
            description: 'Syringe showing gas compression (Boyle\'s Law)',
            type: 'apparatus_diagram',
            apparatusType: 'syringe_gas_law',
            initialVolume: 50,
            finalVolume: 25,
            pressure: 101325,
            defaultOptions: {
                title: 'Syringe - Boyle\'s Law',
                showRealObject: true,
                showPiston: true,
                showGasParticles: true,
                showPressureLabels: true,
                showVolumeLabels: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Volume (decreasing), Pressure (increasing)',
                    constant: 'Temperature, Amount of gas',
                    law: 'P₁V₁ = P₂V₂ (Boyle\'s Law)'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hydraulicPressApparatus': {
            name: 'Hydraulic Press',
            category: 'States of Matter',
            description: 'Hydraulic system showing Pascal\'s principle',
            type: 'apparatus_diagram',
            apparatusType: 'hydraulic_press',
            smallPistonArea: 10,
            largePistonArea: 100,
            inputForce: 50,
            defaultOptions: {
                title: 'Hydraulic Press',
                showRealObject: true,
                showPistons: true,
                showFluid: true,
                showForces: true,
                showAreas: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Force (amplified on large piston)',
                    constant: 'Pressure throughout fluid',
                    law: 'P = F/A, F₁/A₁ = F₂/A₂ (Pascal\'s Principle)'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'uTubeManometerApparatus': {
            name: 'U-Tube Manometer',
            category: 'States of Matter',
            description: 'U-tube showing pressure measurement',
            type: 'apparatus_diagram',
            apparatusType: 'u_tube_manometer',
            heightDifference: 0.15,
            fluidDensity: 13600,
            defaultOptions: {
                title: 'U-Tube Manometer',
                showRealObject: true,
                showFluid: true,
                showHeightDifference: true,
                showPressureLabels: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height difference in fluid',
                    constant: 'Fluid density, atmospheric pressure',
                    law: 'P = P₀ + ρgh'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'barometerApparatus': {
            name: 'Mercury Barometer',
            category: 'States of Matter',
            description: 'Mercury column measuring atmospheric pressure',
            type: 'apparatus_diagram',
            apparatusType: 'barometer',
            mercuryHeight: 0.76,
            defaultOptions: {
                title: 'Mercury Barometer',
                showRealObject: true,
                showMercuryColumn: true,
                showVacuum: true,
                showHeight: true,
                showPressure: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Mercury height (with atmospheric pressure)',
                    constant: 'Mercury density',
                    law: 'P_atm = ρgh'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'capillaryTubeApparatus': {
            name: 'Capillary Tube - Surface Tension',
            category: 'States of Matter',
            description: 'Liquid rise in capillary tube showing surface tension',
            type: 'apparatus_diagram',
            apparatusType: 'capillary_tube',
            tubeRadius: 0.001,
            liquidRise: 0.03,
            surfaceTension: 0.073,
            defaultOptions: {
                title: 'Capillary Tube',
                showRealObject: true,
                showTube: true,
                showLiquid: true,
                showMeniscus: true,
                showHeight: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Height of liquid rise',
                    constant: 'Surface tension, tube radius, contact angle',
                    law: 'h = (2γcosθ)/(ρgr)'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'buoyancyBottleApparatus': {
            name: 'Cartesian Diver (Buoyancy Bottle)',
            category: 'States of Matter',
            description: 'Bottle diver showing buoyancy and pressure',
            type: 'apparatus_diagram',
            apparatusType: 'cartesian_diver',
            bottlePressure: 'normal',
            diverState: 'floating',
            defaultOptions: {
                title: 'Cartesian Diver',
                showRealObject: true,
                showBottle: true,
                showDiver: true,
                showAirBubble: true,
                showForces: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Air bubble volume, diver density, buoyancy force',
                    constant: 'Diver mass, water density',
                    law: 'Buoyancy = ρ_water × V_diver × g, PV = constant'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'evaporationCoolingApparatus': {
            name: 'Evaporation Cooling Apparatus',
            category: 'States of Matter',
            description: 'Evaporation causing temperature drop',
            type: 'apparatus_diagram',
            apparatusType: 'evaporation_cooling',
            liquidType: 'water',
            defaultOptions: {
                title: 'Evaporation Cooling',
                showRealObject: true,
                showLiquid: true,
                showEscapingParticles: true,
                showTemperatureChange: true,
                showEnergyLabels: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (decreasing), number of high-energy particles',
                    constant: 'Heat of vaporization',
                    law: 'Q = mL (latent heat), fastest particles escape'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pressureCookerApparatus': {
            name: 'Pressure Cooker',
            category: 'States of Matter',
            description: 'Sealed container showing pressure-boiling point relationship',
            type: 'apparatus_diagram',
            apparatusType: 'pressure_cooker',
            pressure: 200000,
            boilingPoint: 120,
            defaultOptions: {
                title: 'Pressure Cooker',
                showRealObject: true,
                showSealedContainer: true,
                showSteam: true,
                showPressureGauge: true,
                showTemperature: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Pressure (increasing), boiling point (increasing)',
                    constant: 'Volume (sealed)',
                    law: 'Higher pressure → higher boiling point'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 4. THERMODYNAMICS & HEAT =====
        'heatingCurvePhysics': {
            name: 'Heating Curve',
            category: 'Thermodynamics',
            description: 'Temperature vs heat added showing phase changes',
            type: 'heating_curve_physics',
            substance: 'water',
            defaultOptions: {
                title: 'Heating Curve - Water',
                showPhases: true,
                showPlateaus: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phaseDiagramPhysics': {
            name: 'Phase Diagram (P-T)',
            category: 'Thermodynamics',
            description: 'Pressure vs temperature phase diagram',
            type: 'phase_diagram_physics',
            substance: 'water',
            defaultOptions: {
                title: 'Phase Diagram',
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseRegions: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pvDiagram': {
            name: 'P-V Diagram',
            category: 'Thermodynamics',
            description: 'Pressure-volume diagram for gas processes',
            type: 'pv_diagram',
            processType: 'isothermal',
            initialP: 100,
            initialV: 50,
            finalV: 150,
            defaultOptions: {
                title: 'P-V Diagram - Isothermal Process',
                showWork: true,
                showCurve: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carnotCycle': {
            name: 'Carnot Cycle Diagram',
            category: 'Thermodynamics',
            description: 'Ideal heat engine cycle',
            type: 'carnot_cycle',
            Th: 500,
            Tc: 300,
            defaultOptions: {
                title: 'Carnot Cycle',
                showStages: true,
                showEfficiency: true,
                showPVDiagram: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'heatTransferModes': {
            name: 'Heat Transfer Modes',
            category: 'Thermodynamics',
            description: 'Conduction, convection, radiation',
            type: 'heat_transfer',
            modes: ['conduction', 'convection', 'radiation'],
            defaultOptions: {
                title: 'Heat Transfer Modes',
                showParticles: true,
                showArrows: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kineticTheoryParticles': {
            name: 'Kinetic Theory Particle Model',
            category: 'Thermodynamics',
            description: 'Gas particles in motion',
            type: 'kinetic_theory',
            numParticles: 50,
            temperature: 300,
            defaultOptions: {
                title: 'Kinetic Theory of Gases',
                showVelocityVectors: true,
                showCollisions: false,
                animate: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== THERMODYNAMICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'conductionBarApparatus': {
            name: 'Conduction Bar Apparatus',
            category: 'Thermodynamics',
            description: 'Metal bar conducting heat from hot to cold end',
            type: 'apparatus_diagram',
            apparatusType: 'conduction_bar',
            barLength: 0.5,
            hotEndTemp: 100,
            coldEndTemp: 20,
            material: 'copper',
            defaultOptions: {
                title: 'Heat Conduction Bar',
                showRealObject: true,
                showBar: true,
                showTemperatureGradient: true,
                showHeatFlow: true,
                showThermometers: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature along bar (gradient)',
                    constant: 'Thermal conductivity, cross-sectional area',
                    law: 'Q/t = kA(ΔT/Δx) (Fourier\'s Law)'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calorimeterApparatus': {
            name: 'Calorimeter',
            category: 'Thermodynamics',
            description: 'Insulated container for measuring heat exchange',
            type: 'apparatus_diagram',
            apparatusType: 'calorimeter',
            waterMass: 0.5,
            waterTemp: 20,
            metalMass: 0.1,
            metalTemp: 100,
            defaultOptions: {
                title: 'Calorimeter',
                showRealObject: true,
                showInsulation: true,
                showWater: true,
                showMetal: true,
                showThermometer: true,
                showStirrer: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (equalizing)',
                    constant: 'Total energy in system',
                    law: 'Heat lost = Heat gained, Q = mcΔT'
                },
                width: 700,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'steamEngineApparatus': {
            name: 'Steam Engine Apparatus',
            category: 'Thermodynamics',
            description: 'Steam engine showing heat to work conversion',
            type: 'apparatus_diagram',
            apparatusType: 'steam_engine',
            hotReservoir: 400,
            coldReservoir: 300,
            defaultOptions: {
                title: 'Steam Engine',
                showRealObject: true,
                showBoiler: true,
                showPiston: true,
                showCylinder: true,
                showCondenser: true,
                showEnergyFlow: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Piston position, pressure in cylinder',
                    constant: 'Reservoir temperatures',
                    law: 'Efficiency = W/Qh = 1 - Tc/Th'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'lesliesCubeApparatus': {
            name: 'Leslie\'s Cube',
            category: 'Thermodynamics',
            description: 'Cube with different surfaces showing radiation differences',
            type: 'apparatus_diagram',
            apparatusType: 'leslies_cube',
            temperature: 80,
            surfaces: ['black', 'white', 'shiny', 'dull'],
            defaultOptions: {
                title: 'Leslie\'s Cube',
                showRealObject: true,
                showCube: true,
                showSurfaces: true,
                showRadiation: true,
                showThermopile: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Radiation emitted (varies by surface)',
                    constant: 'Temperature of cube',
                    law: 'Black surfaces emit/absorb best, P = εσAT⁴'
                },
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'vacuumFlaskApparatus': {
            name: 'Vacuum Flask (Thermos)',
            category: 'Thermodynamics',
            description: 'Insulated flask minimizing heat transfer',
            type: 'apparatus_diagram',
            apparatusType: 'vacuum_flask',
            liquidTemp: 80,
            externalTemp: 20,
            defaultOptions: {
                title: 'Vacuum Flask',
                showRealObject: true,
                showDoubleWall: true,
                showVacuum: true,
                showReflectiveSurfaces: true,
                showHeatTransferPrevention: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Temperature (slowly decreasing over time)',
                    constant: 'Vacuum gap, reflective coating',
                    law: 'Minimizes conduction (vacuum), convection (vacuum), radiation (reflective)'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'bimetallicStripApparatus': {
            name: 'Bimetallic Strip',
            category: 'Thermodynamics',
            description: 'Two metals bonded showing differential expansion',
            type: 'apparatus_diagram',
            apparatusType: 'bimetallic_strip',
            metal1: 'brass',
            metal2: 'steel',
            temperatureChange: 50,
            defaultOptions: {
                title: 'Bimetallic Strip',
                showRealObject: true,
                showStrip: true,
                showBending: true,
                showExpansionCoefficients: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Curvature (with temperature)',
                    constant: 'Expansion coefficients of metals',
                    law: 'ΔL = αL₀ΔT, metal with higher α expands more'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 5. ELECTRICITY & MAGNETISM =====
        'electricFieldLines': {
            name: 'Electric Field Lines',
            category: 'Electricity & Magnetism',
            description: 'Field lines around charges',
            type: 'electric_field',
            charges: [
                { x: -100, y: 0, charge: 1, label: '+Q' },
                { x: 100, y: 0, charge: -1, label: '-Q' }
            ],
            defaultOptions: {
                title: 'Electric Field Lines',
                showCharges: true,
                showFieldLines: true,
                numLines: 16,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'circuitDiagram': {
            name: 'Electric Circuit Diagram',
            category: 'Electricity & Magnetism',
            description: 'Standard circuit with components',
            type: 'circuit_diagram',
            components: [
                { type: 'battery', voltage: 12 },
                { type: 'resistor', resistance: 100 },
                { type: 'capacitor', capacitance: 10 },
                { type: 'switch', state: 'closed' }
            ],
            configuration: 'series',
            defaultOptions: {
                title: 'Electric Circuit',
                showValues: true,
                showCurrent: true,
                showSymbols: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'seriesParallelCircuits': {
            name: 'Series vs Parallel Circuits',
            category: 'Electricity & Magnetism',
            description: 'Comparison of circuit configurations',
            type: 'series_parallel',
            voltage: 12,
            resistors: [100, 200, 150],
            defaultOptions: {
                title: 'Series vs Parallel Circuits',
                showBoth: true,
                showCalculations: true,
                showCurrent: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'potentialDistanceGraph': {
            name: 'Electric Potential vs Distance',
            category: 'Electricity & Magnetism',
            description: 'Potential gradient graph',
            type: 'potential_distance',
            chargeQ: 10,
            defaultOptions: {
                title: 'Electric Potential vs Distance',
                showFieldStrength: false,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'magneticFieldLines': {
            name: 'Magnetic Field Lines',
            category: 'Electricity & Magnetism',
            description: 'Field around magnets and current-carrying wires',
            type: 'magnetic_field',
            sourceType: 'bar_magnet',
            defaultOptions: {
                title: 'Magnetic Field Lines - Bar Magnet',
                showPoles: true,
                showFieldLines: true,
                showCompass: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagneticInduction': {
            name: 'Electromagnetic Induction',
            category: 'Electricity & Magnetism',
            description: 'Induced current from changing flux',
            type: 'em_induction',
            coilTurns: 5,
            magnetMoving: true,
            defaultOptions: {
                title: 'Electromagnetic Induction',
                showMagnet: true,
                showCoil: true,
                showCurrent: true,
                showFlux: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'transformer': {
            name: 'Transformer Diagram',
            category: 'Electricity & Magnetism',
            description: 'Step-up/step-down transformer',
            type: 'transformer',
            primaryTurns: 100,
            secondaryTurns: 500,
            inputVoltage: 120,
            defaultOptions: {
                title: 'Transformer',
                showCore: true,
                showTurns: true,
                showVoltages: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorChargeCurve': {
            name: 'Capacitor Charge/Discharge Curve',
            category: 'Electricity & Magnetism',
            description: 'Exponential charge and discharge',
            type: 'capacitor_curve',
            capacitance: 100,
            resistance: 1000,
            voltage: 12,
            curveType: 'charging',
            defaultOptions: {
                title: 'Capacitor Charging Curve',
                showTimeConstant: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lorentzForce': {
            name: 'Lorentz Force Diagram',
            category: 'Electricity & Magnetism',
            description: 'Force on charged particle in magnetic field',
            type: 'lorentz_force',
            velocity: { x: 50, y: 0 },
            magneticField: { direction: 'into_page', magnitude: 1 },
            charge: 1,
            defaultOptions: {
                title: 'Lorentz Force',
                showVelocity: true,
                showField: true,
                showForce: true,
                showRightHandRule: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== ELECTRICITY & MAGNETISM APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'goldLeafElectroscopeApparatus': {
            name: 'Gold Leaf Electroscope',
            category: 'Electricity & Magnetism',
            description: 'Device detecting electric charge',
            type: 'apparatus_diagram',
            apparatusType: 'electroscope',
            charge: 'positive',
            leafDivergence: 45,
            defaultOptions: {
                title: 'Gold Leaf Electroscope',
                showRealObject: true,
                showMetalCap: true,
                showMetalRod: true,
                showGoldLeaves: true,
                showCharge: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Leaf divergence (with charge)',
                    constant: 'Electrostatic repulsion principle',
                    law: 'Like charges repel, F = kq₁q₂/r²'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'vanDeGraaffGeneratorApparatus': {
            name: 'Van de Graaff Generator',
            category: 'Electricity & Magnetism',
            description: 'Electrostatic generator accumulating charge',
            type: 'apparatus_diagram',
            apparatusType: 'van_de_graaff',
            sphereCharge: 100,
            voltage: 100000,
            defaultOptions: {
                title: 'Van de Graaff Generator',
                showRealObject: true,
                showSphere: true,
                showBelt: true,
                showBrushes: true,
                showCharge: true,
                showElectricField: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Charge on sphere (accumulating)',
                    constant: 'Belt speed, brush configuration',
                    law: 'Q = CV, charge accumulates on outer surface'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },
        'rheostatPotentiometerApparatus': {
            name: 'Rheostat/Potentiometer',
            category: 'Electricity & Magnetism',
            description: 'Variable resistor controlling current/voltage',
            type: 'apparatus_diagram',
            apparatusType: 'rheostat',
            totalResistance: 100,
            position: 0.5,
            current: 0.12,
            defaultOptions: {
                title: 'Rheostat',
                showRealObject: true,
                showWire: true,
                showSlider: true,
                showResistance: true,
                showCurrent: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Resistance (with slider position), current',
                    constant: 'Total wire resistance, voltage',
                    law: 'V = IR, R varies with length'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'galvanometerApparatus': {
            name: 'Galvanometer',
            category: 'Electricity & Magnetism',
            description: 'Device detecting small currents via magnetic deflection',
            type: 'apparatus_diagram',
            apparatusType: 'galvanometer',
            current: 0.001,
            deflection: 30,
            defaultOptions: {
                title: 'Galvanometer',
                showRealObject: true,
                showCoil: true,
                showMagnet: true,
                showPointer: true,
                showScale: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deflection angle (with current)',
                    constant: 'Magnetic field, coil turns',
                    law: 'Torque = NIAB, deflection ∝ current'
                },
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'cathodeRayTubeApparatus': {
            name: 'Cathode Ray Tube (CRT)',
            category: 'Electricity & Magnetism',
            description: 'Electron beam deflected by electric/magnetic fields',
            type: 'apparatus_diagram',
            apparatusType: 'cathode_ray_tube',
            acceleratingVoltage: 5000,
            deflectingField: 1000,
            defaultOptions: {
                title: 'Cathode Ray Tube',
                showRealObject: true,
                showCathode: true,
                showAnode: true,
                showElectronBeam: true,
                showDeflectionPlates: true,
                showScreen: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electron velocity, beam deflection',
                    constant: 'Electron charge/mass ratio',
                    law: 'eV = ½mv², F = eE (deflection)'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagnetApparatus': {
            name: 'Electromagnet',
            category: 'Electricity & Magnetism',
            description: 'Coil around iron core producing magnetic field',
            type: 'apparatus_diagram',
            apparatusType: 'electromagnet',
            current: 2,
            turns: 100,
            coreType: 'iron',
            defaultOptions: {
                title: 'Electromagnet',
                showRealObject: true,
                showCoil: true,
                showCore: true,
                showCurrent: true,
                showMagneticField: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Magnetic field strength (with current)',
                    constant: 'Number of turns, core permeability',
                    law: 'B = μ₀nI (solenoid), enhanced by core'
                },
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electricMotorApparatus': {
            name: 'DC Electric Motor',
            category: 'Electricity & Magnetism',
            description: 'Motor converting electrical to mechanical energy',
            type: 'apparatus_diagram',
            apparatusType: 'electric_motor',
            current: 1,
            magneticField: 0.5,
            defaultOptions: {
                title: 'DC Electric Motor',
                showRealObject: true,
                showCoil: true,
                showMagnets: true,
                showCommutator: true,
                showBrushes: true,
                showForce: true,
                showRotation: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Coil rotation, current direction (via commutator)',
                    constant: 'Magnetic field, coil area',
                    law: 'F = BIL, Torque = NIAB'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'electricGeneratorApparatus': {
            name: 'AC Electric Generator',
            category: 'Electricity & Magnetism',
            description: 'Generator converting mechanical to electrical energy',
            type: 'apparatus_diagram',
            apparatusType: 'electric_generator',
            rotationSpeed: 50,
            magneticField: 0.5,
            defaultOptions: {
                title: 'AC Electric Generator',
                showRealObject: true,
                showCoil: true,
                showMagnets: true,
                showSlipRings: true,
                showBrushes: true,
                showEMF: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Magnetic flux (with rotation), induced EMF',
                    constant: 'Magnetic field, coil area, rotation speed',
                    law: 'ε = -dΦ/dt, ε = NABωsinωt'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 6. OPTICS =====
        'planeMirrorRayDiagram': {
            name: 'Plane Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in plane mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'plane',
            objectDistance: 100,
            objectHeight: 50,
            defaultOptions: {
                title: 'Plane Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showNormals: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorRayDiagram': {
            name: 'Concave Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in concave mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'concave',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Concave Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                showCenter: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorRayDiagram': {
            name: 'Convex Mirror Ray Diagram',
            category: 'Optics',
            description: 'Image formation in convex mirror',
            type: 'mirror_ray_diagram',
            mirrorType: 'convex',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Convex Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexLensRayDiagram': {
            name: 'Convex Lens Ray Diagram',
            category: 'Optics',
            description: 'Image formation through convex lens',
            type: 'lens_ray_diagram',
            lensType: 'convex',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Convex Lens',
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveLensRayDiagram': {
            name: 'Concave Lens Ray Diagram',
            category: 'Optics',
            description: 'Image formation through concave lens',
            type: 'lens_ray_diagram',
            lensType: 'concave',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50,
            defaultOptions: {
                title: 'Concave Lens',
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snellsLawRefraction': {
            name: "Snell's Law Refraction",
            category: 'Optics',
            description: 'Light bending at interface',
            type: 'snells_law',
            n1: 1.0,
            n2: 1.5,
            incidentAngle: 30,
            defaultOptions: {
                title: "Snell's Law",
                showAngles: true,
                showNormals: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'totalInternalReflection': {
            name: 'Total Internal Reflection',
            category: 'Optics',
            description: 'Critical angle and TIR',
            type: 'total_internal_reflection',
            n1: 1.5,
            n2: 1.0,
            angle: 50,
            defaultOptions: {
                title: 'Total Internal Reflection',
                showCriticalAngle: true,
                showMultipleAngles: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'prismDispersion': {
            name: 'Prism Dispersion (Rainbow)',
            category: 'Optics',
            description: 'White light separation into spectrum',
            type: 'prism_dispersion',
            prismAngle: 60,
            defaultOptions: {
                title: 'Dispersion Through Prism',
                showSpectrum: true,
                showAngles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFiber': {
            name: 'Optical Fiber Diagram',
            category: 'Optics',
            description: 'Light propagation in fiber optic cable',
            type: 'optical_fiber',
            fiberLength: 300,
            numReflections: 5,
            defaultOptions: {
                title: 'Optical Fiber',
                showCore: true,
                showCladding: true,
                showReflections: true,
                width: 900,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionInterferencePattern': {
            name: 'Optical Interference Pattern',
            category: 'Optics',
            description: 'Intensity pattern from interference',
            type: 'optical_interference',
            slitSeparation: 0.5,
            wavelength: 600,
            screenDistance: 1000,
            defaultOptions: {
                title: 'Double Slit Interference',
                showFringes: true,
                showIntensity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polarizationDiagram': {
            name: 'Light Polarization',
            category: 'Optics',
            description: 'Polarization of light waves',
            type: 'polarization',
            polarizationType: 'linear',
            defaultOptions: {
                title: 'Light Polarization',
                showUnpolarized: true,
                showPolarizer: true,
                showPolarized: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ===== OPTICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'opticalBenchApparatus': {
            name: 'Optical Bench',
            category: 'Optics',
            description: 'Bench setup for measuring focal length',
            type: 'apparatus_diagram',
            apparatusType: 'optical_bench',
            lensType: 'convex',
            objectDistance: 30,
            imageDistance: 60,
            defaultOptions: {
                title: 'Optical Bench',
                showRealObject: true,
                showBench: true,
                showLightSource: true,
                showLens: true,
                showScreen: true,
                showDistances: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Object distance, image distance',
                    constant: 'Focal length of lens',
                    law: '1/f = 1/u + 1/v (lens equation)'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'periscopeApparatus': {
            name: 'Periscope',
            category: 'Optics',
            description: 'Two plane mirrors at 45° showing light path',
            type: 'apparatus_diagram',
            apparatusType: 'periscope',
            tubeHeight: 300,
            defaultOptions: {
                title: 'Periscope',
                showRealObject: true,
                showTube: true,
                showMirrors: true,
                showLightPath: true,
                showAngles: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Direction of light (90° turns)',
                    constant: 'Angle of incidence = angle of reflection',
                    law: 'Law of reflection: θᵢ = θᵣ'
                },
                width: 600,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'spectrometerApparatus': {
            name: 'Spectrometer',
            category: 'Optics',
            description: 'Device measuring angles and wavelengths using prism',
            type: 'apparatus_diagram',
            apparatusType: 'spectrometer',
            prismMaterial: 'glass',
            lightSource: 'sodium',
            defaultOptions: {
                title: 'Spectrometer',
                showRealObject: true,
                showCollimator: true,
                showPrism: true,
                showTelescope: true,
                showCircularScale: true,
                showLightPath: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Deviation angle (with wavelength)',
                    constant: 'Prism angle, refractive index',
                    law: 'n = sin[(A+δₘ)/2] / sin(A/2)'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'microscopeApparatus': {
            name: 'Compound Microscope',
            category: 'Optics',
            description: 'Two-lens system for high magnification',
            type: 'apparatus_diagram',
            apparatusType: 'compound_microscope',
            objectiveFocalLength: 5,
            eyepieceFocalLength: 25,
            defaultOptions: {
                title: 'Compound Microscope',
                showRealObject: true,
                showObjective: true,
                showEyepiece: true,
                showObject: true,
                showIntermediateImage: true,
                showFinalImage: true,
                showRayPath: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Image positions, magnification',
                    constant: 'Focal lengths of lenses',
                    law: 'M = mₒ × mₑ, total magnification'
                },
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'telescopeApparatus': {
            name: 'Refracting Telescope',
            category: 'Optics',
            description: 'Two-lens system for distant objects',
            type: 'apparatus_diagram',
            apparatusType: 'refracting_telescope',
            objectiveFocalLength: 100,
            eyepieceFocalLength: 25,
            defaultOptions: {
                title: 'Refracting Telescope',
                showRealObject: true,
                showObjective: true,
                showEyepiece: true,
                showParallelRays: true,
                showIntermediateImage: true,
                showFinalImage: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Angular magnification',
                    constant: 'Focal lengths of lenses',
                    law: 'M = fₒ/fₑ (angular magnification)'
                },
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pinholeCameraApparatus': {
            name: 'Pinhole Camera',
            category: 'Optics',
            description: 'Simple camera showing inverted image formation',
            type: 'apparatus_diagram',
            apparatusType: 'pinhole_camera',
            objectHeight: 50,
            objectDistance: 200,
            cameraLength: 100,
            defaultOptions: {
                title: 'Pinhole Camera',
                showRealObject: true,
                showBox: true,
                showPinhole: true,
                showObject: true,
                showImage: true,
                showLightRays: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Image size (with object distance)',
                    constant: 'Pinhole size, camera length',
                    law: 'hᵢ/hₒ = v/u (similar triangles)'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 7. MODERN PHYSICS (QUANTUM) =====
        'photoelectricEffect': {
            name: 'Photoelectric Effect',
            category: 'Modern Physics',
            description: 'Photons ejecting electrons from metal',
            type: 'photoelectric_effect',
            workFunction: 2.0,
            photonEnergy: 3.0,
            defaultOptions: {
                title: 'Photoelectric Effect',
                showPhotons: true,
                showElectrons: true,
                showEnergyLevels: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lineEmissionSpectra': {
            name: 'Line Emission Spectra',
            category: 'Modern Physics',
            description: 'Discrete spectral lines from atoms',
            type: 'emission_spectra',
            element: 'hydrogen',
            transitions: [
                { n1: 3, n2: 2, wavelength: 656 },
                { n1: 4, n2: 2, wavelength: 486 },
                { n1: 5, n2: 2, wavelength: 434 }
            ],
            defaultOptions: {
                title: 'Hydrogen Emission Spectrum',
                showEnergyLevels: true,
                showSpectrum: true,
                showTransitions: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'blackbodyRadiation': {
            name: 'Blackbody Radiation Curves',
            category: 'Modern Physics',
            description: 'Intensity vs wavelength at different temperatures',
            type: 'blackbody_radiation',
            temperatures: [3000, 4000, 5000, 6000],
            defaultOptions: {
                title: 'Blackbody Radiation',
                showPeaks: true,
                showWiensLaw: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quantumTunneling': {
            name: 'Quantum Tunneling Diagram',
            category: 'Modern Physics',
            description: 'Particle tunneling through potential barrier',
            type: 'quantum_tunneling',
            barrierHeight: 10,
            barrierWidth: 50,
            particleEnergy: 7,
            defaultOptions: {
                title: 'Quantum Tunneling',
                showPotentialWell: true,
                showWavefunction: true,
                showProbability: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronProbabilityDistribution': {
            name: 'Electron Probability Distribution',
            category: 'Modern Physics',
            description: 'Orbital probability density',
            type: 'electron_probability',
            orbital: '1s',
            defaultOptions: {
                title: 'Electron Probability - 1s Orbital',
                showRadialDistribution: true,
                showProbabilityCloud: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'waveParticleDuality': {
            name: 'Wave-Particle Duality',
            category: 'Modern Physics',
            description: 'Dual nature of matter and light',
            type: 'wave_particle_duality',
            particle: 'electron',
            defaultOptions: {
                title: 'Wave-Particle Duality',
                showWaveNature: true,
                showParticleNature: true,
                showExperiment: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'deBroglieWavelength': {
            name: 'de Broglie Wavelength',
            category: 'Modern Physics',
            description: 'Matter waves for moving particles',
            type: 'de_broglie',
            particle: 'electron',
            velocity: 1e6,
            defaultOptions: {
                title: 'de Broglie Wavelength',
                showWaveform: true,
                showEquation: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== MODERN PHYSICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'millikanOilDropApparatus': {
            name: 'Millikan Oil Drop Experiment',
            category: 'Modern Physics',
            description: 'Measuring elementary charge using charged oil drops',
            type: 'apparatus_diagram',
            apparatusType: 'millikan_oil_drop',
            electricField: 1000,
            dropRadius: 1e-6,
            defaultOptions: {
                title: 'Millikan Oil Drop Experiment',
                showRealObject: true,
                showChamber: true,
                showPlates: true,
                showOilDrop: true,
                showForces: true,
                showMicroscope: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Drop velocity, charge on drop',
                    constant: 'Electric field, drop mass',
                    law: 'qE = mg (when suspended), q = ne'
                },
                width: 700,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'geigerMarsdenApparatus': {
            name: 'Geiger-Marsden (Rutherford) Experiment',
            category: 'Modern Physics',
            description: 'Alpha particle scattering revealing nuclear structure',
            type: 'apparatus_diagram',
            apparatusType: 'geiger_marsden',
            foilMaterial: 'gold',
            defaultOptions: {
                title: 'Geiger-Marsden Experiment',
                showRealObject: true,
                showAlphaSource: true,
                showGoldFoil: true,
                showScatteredPaths: true,
                showDetector: true,
                showNucleus: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Scattering angle (varies by impact parameter)',
                    constant: 'Alpha particle energy, nuclear charge',
                    law: 'Large angle scattering → dense nucleus'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'photoelectricEffectApparatus': {
            name: 'Photoelectric Effect Apparatus',
            category: 'Modern Physics',
            description: 'Setup demonstrating photoelectric emission',
            type: 'apparatus_diagram',
            apparatusType: 'photoelectric_apparatus',
            photocathodeMaterial: 'cesium',
            lightFrequency: 6e14,
            defaultOptions: {
                title: 'Photoelectric Effect Setup',
                showRealObject: true,
                showVacuumTube: true,
                showPhotocathode: true,
                showAnode: true,
                showLightSource: true,
                showAmmeter: true,
                showVoltmeter: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Photocurrent (with intensity), KE (with frequency)',
                    constant: 'Work function, Planck\'s constant',
                    law: 'E = hf, KEₘₐₓ = hf - φ'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'xRayTubeApparatus': {
            name: 'X-Ray Tube',
            category: 'Modern Physics',
            description: 'Tube producing X-rays via electron bombardment',
            type: 'apparatus_diagram',
            apparatusType: 'x_ray_tube',
            acceleratingVoltage: 50000,
            targetMaterial: 'tungsten',
            defaultOptions: {
                title: 'X-Ray Tube',
                showRealObject: true,
                showCathode: true,
                showAnode: true,
                showElectronBeam: true,
                showXRays: true,
                showCooling: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Electron kinetic energy, X-ray frequency',
                    constant: 'Electron charge, Planck\'s constant',
                    law: 'eV = hfₘₐₓ, λₘᵢₙ = hc/eV'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 8. RELATIVITY =====
        'spacetimeDiagram': {
            name: 'Spacetime Diagram',
            category: 'Relativity',
            description: 'Worldlines in spacetime',
            type: 'spacetime_diagram',
            events: [
                { x: 0, t: 0, label: 'A' },
                { x: 50, t: 100, label: 'B' },
                { x: -30, t: 80, label: 'C' }
            ],
            defaultOptions: {
                title: 'Spacetime Diagram',
                showLightCones: true,
                showWorldlines: true,
                showAxes: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'timeDilation': {
            name: 'Time Dilation Graph',
            category: 'Relativity',
            description: 'Time dilation vs velocity',
            type: 'time_dilation',
            defaultOptions: {
                title: 'Time Dilation',
                showLorentzFactor: true,
                showEquation: true,
                showExample: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lengthContraction': {
            name: 'Length Contraction',
            category: 'Relativity',
            description: 'Object contraction at high velocity',
            type: 'length_contraction',
            properLength: 100,
            velocity: 0.8,
            defaultOptions: {
                title: 'Length Contraction',
                showRestFrame: true,
                showMovingFrame: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'curvedSpacetime': {
            name: 'Curved Spacetime (Gravity)',
            category: 'Relativity',
            description: 'Rubber sheet model of gravity',
            type: 'curved_spacetime',
            mass: 100,
            defaultOptions: {
                title: 'Curved Spacetime',
                showGrid: true,
                showMass: true,
                showOrbits: true,
                show3D: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'twinParadox': {
            name: 'Twin Paradox Diagram',
            category: 'Relativity',
            description: 'Time dilation in twin paradox',
            type: 'twin_paradox',
            tripDuration: 10,
            velocity: 0.9,
            defaultOptions: {
                title: 'Twin Paradox',
                showSpacetimePath: true,
                showAges: true,
                showExplanation: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'velocityAddition': {
            name: 'Relativistic Velocity Addition',
            category: 'Relativity',
            description: 'Velocity addition formula diagram',
            type: 'velocity_addition',
            v1: 0.6,
            v2: 0.7,
            defaultOptions: {
                title: 'Relativistic Velocity Addition',
                showClassical: true,
                showRelativistic: true,
                showComparison: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 9. NUCLEAR PHYSICS =====
        'nuclearStructurePhysics': {
            name: 'Nuclear Structure',
            category: 'Nuclear Physics',
            description: 'Protons and neutrons in nucleus',
            type: 'nuclear_structure_physics',
            protons: 6,
            neutrons: 6,
            element: 'C-12',
            defaultOptions: {
                title: 'Nuclear Structure - Carbon-12',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showForces: false,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },
        'alphaDecayDiagram': {
            name: 'Alpha Decay',
            category: 'Nuclear Physics',
            description: 'Alpha particle emission from nucleus',
            type: 'nuclear_decay_physics',
            decayType: 'alpha',
            parentNucleus: 'Ra-226',
            daughterNucleus: 'Rn-222',
            defaultOptions: {
                title: 'Alpha Decay',
                showParent: true,
                showProducts: true,
                showEquation: true,
                showEnergy: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaDecayDiagram': {
            name: 'Beta Decay',
            category: 'Nuclear Physics',
            description: 'Beta particle and antineutrino emission',
            type: 'nuclear_decay_physics',
            decayType: 'beta',
            parentNucleus: 'C-14',
            daughterNucleus: 'N-14',
            defaultOptions: {
                title: 'Beta Decay',
                showParent: true,
                showProducts: true,
                showNeutrino: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gammaDecayDiagram': {
            name: 'Gamma Decay',
            category: 'Nuclear Physics',
            description: 'Gamma ray emission from excited nucleus',
            type: 'nuclear_decay_physics',
            decayType: 'gamma',
            nucleus: 'Co-60',
            defaultOptions: {
                title: 'Gamma Decay',
                showEnergyLevels: true,
                showPhoton: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Radioactive Half-Life Graph',
            category: 'Nuclear Physics',
            description: 'Exponential decay showing half-lives',
            type: 'half_life_graph',
            isotope: 'C-14',
            halfLife: 5730,
            initialAmount: 100,
            defaultOptions: {
                title: 'Half-Life Decay Curve',
                showHalfLives: true,
                showExponential: true,
                showPercentages: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Nuclear Binding Energy Curve',
            category: 'Nuclear Physics',
            description: 'Binding energy per nucleon vs mass number',
            type: 'binding_energy_curve',
            defaultOptions: {
                title: 'Nuclear Binding Energy per Nucleon',
                showPeak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showElements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFissionDiagram': {
            name: 'Nuclear Fission',
            category: 'Nuclear Physics',
            description: 'Heavy nucleus splitting into fragments',
            type: 'fission_diagram',
            nucleus: 'U-235',
            products: ['Ba-141', 'Kr-92'],
            neutrons: 3,
            defaultOptions: {
                title: 'Nuclear Fission - U-235',
                showNeutron: true,
                showProducts: true,
                showNeutrons: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearFusionDiagram': {
            name: 'Nuclear Fusion',
            category: 'Nuclear Physics',
            description: 'Light nuclei combining',
            type: 'fusion_diagram',
            reactants: ['H-2', 'H-3'],
            product: 'He-4',
            defaultOptions: {
                title: 'Nuclear Fusion - D-T Reaction',
                showReactants: true,
                showProduct: true,
                showNeutron: true,
                showEnergy: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReactionDiagram': {
            name: 'Nuclear Chain Reaction',
            category: 'Nuclear Physics',
            description: 'Self-sustaining fission chain',
            type: 'chain_reaction_diagram',
            generations: 3,
            branchingFactor: 2,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showGenerations: true,
                showNeutrons: true,
                showFissions: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearReactorDiagram': {
            name: 'Nuclear Reactor Diagram',
            category: 'Nuclear Physics',
            description: 'Components of nuclear power reactor',
            type: 'reactor_diagram',
            reactorType: 'PWR',
            defaultOptions: {
                title: 'Pressurized Water Reactor',
                showCore: true,
                showControlRods: true,
                showCoolant: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'massDefectChart': {
            name: 'Mass Defect Chart',
            category: 'Nuclear Physics',
            description: 'Mass-energy equivalence in nucleus',
            type: 'mass_defect',
            nucleus: 'He-4',
            defaultOptions: {
                title: 'Mass Defect - Helium-4',
                showComponents: true,
                showActualMass: true,
                showDefect: true,
                showEnergy: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radiationPenetration': {
            name: 'Radiation Penetration Power',
            category: 'Nuclear Physics',
            description: 'Alpha, beta, gamma penetration comparison',
            type: 'radiation_penetration',
            radiationTypes: ['alpha', 'beta', 'gamma'],
            defaultOptions: {
                title: 'Radiation Penetration',
                showBarriers: true,
                showPaths: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ===== NUCLEAR PHYSICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'geigerCounterApparatus': {
            name: 'Geiger-Müller Counter',
            category: 'Nuclear Physics',
            description: 'Device detecting ionizing radiation',
            type: 'apparatus_diagram',
            apparatusType: 'geiger_counter',
            radiationSource: 'beta',
            countRate: 150,
            defaultOptions: {
                title: 'Geiger-Müller Counter',
                showRealObject: true,
                showTube: true,
                showAnode: true,
                showCathode: true,
                showGas: true,
                showRadiation: true,
                showIonization: true,
                showPulse: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Ionization events, count rate',
                    constant: 'Tube voltage, gas pressure',
                    law: 'Each particle causes ionization avalanche → pulse'
                },
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cloudChamberApparatus': {
            name: 'Cloud Chamber',
            category: 'Nuclear Physics',
            description: 'Visualizing particle tracks through supersaturated vapor',
            type: 'apparatus_diagram',
            apparatusType: 'cloud_chamber',
            particleType: 'alpha',
            defaultOptions: {
                title: 'Cloud Chamber',
                showRealObject: true,
                showChamber: true,
                showSupersaturatedVapor: true,
                showRadioactiveSource: true,
                showParticleTracks: true,
                showIonization: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Track formation (with particle passage)',
                    constant: 'Vapor supersaturation',
                    law: 'Ionization → condensation nuclei → visible tracks'
                },
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'massSpectrometerApparatus': {
            name: 'Mass Spectrometer',
            category: 'Nuclear Physics',
            description: 'Separating isotopes by mass-to-charge ratio',
            type: 'apparatus_diagram',
            apparatusType: 'mass_spectrometer',
            magneticField: 0.5,
            acceleratingVoltage: 2000,
            defaultOptions: {
                title: 'Mass Spectrometer',
                showRealObject: true,
                showIonSource: true,
                showAccelerationRegion: true,
                showMagneticField: true,
                showDetector: true,
                showPaths: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Radius of curvature (with mass)',
                    constant: 'Magnetic field, accelerating voltage',
                    law: 'r = mv/qB, different masses → different radii'
                },
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ===== 10. PARTICLE PHYSICS =====
        'standardModelChart': {
            name: 'Standard Model of Particles',
            category: 'Particle Physics',
            description: 'Fundamental particles chart',
            type: 'standard_model',
            defaultOptions: {
                title: 'Standard Model',
                showQuarks: true,
                showLeptons: true,
                showBosons: true,
                showProperties: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        'feynmanDiagram': {
            name: 'Feynman Diagram',
            category: 'Particle Physics',
            description: 'Particle interaction diagram',
            type: 'feynman_diagram',
            interaction: 'electron_positron_annihilation',
            defaultOptions: {
                title: 'e⁺e⁻ Annihilation',
                showParticles: true,
                showVertices: true,
                showTime: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'quarkStructure': {
            name: 'Quark Structure of Hadrons',
            category: 'Particle Physics',
            description: 'Quark composition of protons, neutrons, mesons',
            type: 'quark_structure',
            particle: 'proton',
            defaultOptions: {
                title: 'Quark Structure - Proton (uud)',
                showQuarks: true,
                showColors: true,
                showCharges: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'particleAccelerator': {
            name: 'Particle Accelerator Layout',
            category: 'Particle Physics',
            description: 'Circular accelerator schematic',
            type: 'accelerator',
            acceleratorType: 'synchrotron',
            defaultOptions: {
                title: 'Particle Accelerator',
                showBeamPath: true,
                showMagnets: true,
                showDetectors: true,
                showCollisionPoint: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },
        'particleCollisionTracks': {
            name: 'Particle Collision Tracks',
            category: 'Particle Physics',
            description: 'Detector tracks from particle collision',
            type: 'collision_tracks',
            collisionEnergy: 1000,
            defaultOptions: {
                title: 'Particle Collision Tracks',
                showTracks: true,
                showMagneticField: true,
                showCurvature: true,
                width: 800,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ===== PARTICLE PHYSICS APPARATUS DIAGRAMS (Read-as-you-draw) =====
        'bubbleChamberApparatus': {
            name: 'Bubble Chamber',
            category: 'Particle Physics',
            description: 'Visualizing particle tracks in superheated liquid',
            type: 'apparatus_diagram',
            apparatusType: 'bubble_chamber',
            liquidType: 'liquid_hydrogen',
            magneticField: 2.0,
            defaultOptions: {
                title: 'Bubble Chamber',
                showRealObject: true,
                showChamber: true,
                showSuperheatedLiquid: true,
                showMagneticField: true,
                showParticleTracks: true,
                showCurvature: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Track curvature (with particle momentum)',
                    constant: 'Magnetic field strength',
                    law: 'r = p/qB, positive/negative charges curve oppositely'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'cyclotronApparatus': {
            name: 'Cyclotron',
            category: 'Particle Physics',
            description: 'Circular accelerator using alternating electric field',
            type: 'apparatus_diagram',
            apparatusType: 'cyclotron',
            magneticField: 1.5,
            frequency: 1e7,
            defaultOptions: {
                title: 'Cyclotron',
                showRealObject: true,
                showDees: true,
                showMagneticField: true,
                showParticleSpiral: true,
                showAlternatingVoltage: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Particle radius (increasing), kinetic energy',
                    constant: 'Frequency of oscillation, magnetic field',
                    law: 'f = qB/2πm, r = mv/qB'
                },
                width: 900,
                height: 900,
                backgroundColor: '#ffffff'
            }
        },

        'linearAcceleratorApparatus': {
            name: 'Linear Accelerator (LINAC)',
            category: 'Particle Physics',
            description: 'Straight-line particle accelerator with drift tubes',
            type: 'apparatus_diagram',
            apparatusType: 'linear_accelerator',
            numDriftTubes: 8,
            acceleratingVoltage: 100000,
            defaultOptions: {
                title: 'Linear Accelerator',
                showRealObject: true,
                showDriftTubes: true,
                showParticleBeam: true,
                showAlternatingField: true,
                showIncreasingLength: true,
                showEquations: true,
                goldenQuestions: {
                    changing: 'Particle velocity (increasing), tube length',
                    constant: 'Oscillation frequency',
                    law: 'Tube length ∝ velocity, KE = qV'
                },
                width: 1200,
                height: 500,
                backgroundColor: '#ffffff'
            }
        }
    };

    // ===== UTILITY METHODS =====
    
    static getDiagram(key) {
        return this.diagrams[key];
    }

    static getAllDiagrams() {
        return Object.keys(this.diagrams);
    }

    static getDiagramsByCategory(category) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.category === category)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                key.toLowerCase().includes(lowerQuery)
            )
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramsByType(type) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type === type)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getApparatusDiagrams() {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.type === 'apparatus_diagram')
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getDiagramStats() {
        const stats = {};
        this.getAllCategories().forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            const apparatusDiagrams = Object.entries(diagrams)
                .filter(([_, d]) => d.type === 'apparatus_diagram');
            const solveDiagrams = Object.entries(diagrams)
                .filter(([_, d]) => d.type !== 'apparatus_diagram');
            
            stats[category] = {
                total: Object.keys(diagrams).length,
                apparatus: apparatusDiagrams.length,
                solve: solveDiagrams.length,
                diagrams: Object.keys(diagrams)
            };
        });
        return stats;
    }

    static getCategoryDescription(category) {
        const descriptions = {
            'Mechanics': 'Forces, motion, energy, momentum, and rotational dynamics',
            'Waves & Sound': 'Wave properties, interference, standing waves, and acoustics',
            'States of Matter': 'Solid, liquid, gas states, phase transitions, and particle behavior',
            'Thermodynamics': 'Heat, temperature, phase changes, and thermodynamic processes',
            'Electricity & Magnetism': 'Electric fields, circuits, magnetic fields, and induction',
            'Optics': 'Light behavior, mirrors, lenses, refraction, and optical phenomena',
            'Modern Physics': 'Quantum mechanics, photoelectric effect, and wave-particle duality',
            'Relativity': 'Special relativity, time dilation, length contraction, and spacetime',
            'Nuclear Physics': 'Radioactivity, nuclear reactions, fission, fusion, and decay',
            'Particle Physics': 'Fundamental particles, quarks, and particle interactions'
        };
        return descriptions[category] || 'Physics diagrams';
    }

    static getAnalogies(diagramKey) {
        const analogies = {
            // Mechanics
            'freeBodyDiagram': ['Forces as arrows showing pushes and pulls', 'Like tug-of-war ropes pulling in different directions'],
            'inclinedPlane': ['Like pushing a wheelbarrow up a hill', 'Sliding down a playground slide'],
            'momentumCollision': ['Bowling balls hitting pins', 'Car crash at intersection'],
            'circularMotion': ['Ball on a string spinning around', 'Planets orbiting the sun'],
            'torqueLeverDiagram': ['Opening a door with handle vs near hinges', 'Seesaw balance'],
            'pulleySystemApparatus': ['Block and tackle for lifting heavy loads', 'Crane lifting mechanism'],
            'parachuteApparatus': ['Skydiver reaching terminal velocity', 'Feather falling through air'],
            'pendulumApparatus': ['Grandfather clock pendulum', 'Swing at playground'],
            
            // Waves
            'transverseLongitudinalWaves': ['Water ripples vs sound through air', 'Rope shake vs slinky push'],
            'dopplerEffect': ['Ambulance siren passing by', 'Train whistle changing pitch'],
            'reflectionRefraction': ['Mirror reflections', 'Straw appearing bent in water'],
            'rippletankApparatus': ['Water waves in bathtub', 'Ripples from stone in pond'],
            'resonanceTubeApparatus': ['Blowing across bottle opening', 'Organ pipe producing notes'],
            
            // States of Matter
            'syringeGasLawApparatus': ['Bicycle pump compressing air', 'Syringe plunger resistance'],
            'hydraulicPressApparatus': ['Car hydraulic lift at garage', 'Hydraulic brakes in vehicles'],
            'barometerApparatus': ['Weather prediction device', 'Measuring altitude changes'],
            'capillaryTubeApparatus': ['Water climbing up narrow tube', 'Plants drawing water up stems'],
            'evaporationCoolingApparatus': ['Sweating cools skin', 'Wet cloth feels cool'],
            'pressureCookerApparatus': ['Cooking food faster at high pressure', 'High altitude affects boiling'],
            
            // Thermodynamics
            'kineticTheoryParticles': ['Bouncing balls in a box', 'Bees flying in a hive'],
            'conductionBarApparatus': ['Metal spoon getting hot in tea', 'Heat traveling along poker in fire'],
            'calorimeterApparatus': ['Mixing hot and cold water', 'Coffee cooling to room temperature'],
            'vacuumFlaskApparatus': ['Thermos keeping coffee hot', 'Insulated lunch box'],
            'bimetallicStripApparatus': ['Thermostat switching on/off', 'Fire alarm sensor'],
            
            // Electricity & Magnetism
            'electricFieldLines': ['Iron filings around magnet', 'Wind flow lines on weather map'],
            'circuitDiagram': ['Water flowing through pipes', 'Traffic flow on highways'],
            'goldLeafElectroscopeApparatus': ['Hair standing up from static', 'Balloon sticking to wall'],
            'vanDeGraaffGeneratorApparatus': ['Lightning building up charge', 'Hair standing on end'],
            'electricMotorApparatus': ['Fan spinning from electricity', 'Electric drill operation'],
            'electricGeneratorApparatus': ['Bicycle dynamo lighting lamp', 'Hydroelectric dam turbine'],
            
            // Optics
            'planeMirrorRayDiagram': ['Looking at yourself in bathroom mirror', 'Camera viewfinder'],
            'convexLensRayDiagram': ['Magnifying glass focusing sunlight', 'Camera lens focusing image'],
            'prismDispersion': ['Rainbow after rain', 'CD reflecting light'],
            'pinholeCameraApparatus': ['Simple box camera', 'Eclipse viewing box'],
            'microscopeApparatus': ['Examining tiny organisms', 'Lab microscope for cells'],
            'telescopeApparatus': ['Stargazing equipment', 'Binoculars for distant objects'],
            
            // Modern Physics
            'photoelectricEffect': ['Coins popping out of slot machine', 'Kicking ball off a platform'],
            'millikanOilDropApparatus': ['Droplets suspended in air', 'Charged dust particles floating'],
            'photoelectricEffectApparatus': ['Solar cell converting light', 'Automatic door sensor'],
            'xRayTubeApparatus': ['Medical X-ray machine', 'Airport security scanner'],
            
            // Relativity
            'spacetimeDiagram': ['Map with time as vertical axis', 'Trajectory of airplane on map over time'],
            'curvedSpacetime': ['Rubber sheet with bowling ball', 'Trampoline with heavy weight'],
            
            // Nuclear Physics
            'nuclearFissionDiagram': ['Splitting firewood releases energy', 'Breaking apart large molecule'],
            'nuclearFusionDiagram': ['Two magnets forced together', 'Pressing clay balls together'],
            'halfLifeGraph': ['Half the sand in hourglass dropping each time', 'Population decay'],
            'geigerCounterApparatus': ['Radiation detector clicking', 'Metal detector beeping'],
            'cloudChamberApparatus': ['Airplane contrails in sky', 'Vapor trails from particles'],
            
            // Particle Physics
            'quarkStructure': ['Legos building larger structures', 'Atoms making molecules'],
            'bubbleChamberApparatus': ['Tracks in bubble chamber like tire tracks in mud', 'Contrails showing flight path'],
            'cyclotronApparatus': ['Particle spiraling outward', 'Spinning ice skater pulling arms in']
        };
        return analogies[diagramKey] || [];
    }

    static getGoldenQuestions(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (diagram && diagram.defaultOptions && diagram.defaultOptions.goldenQuestions) {
            return diagram.defaultOptions.goldenQuestions;
        }
        return null;
    }

    static getDiagramPedagogy(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (!diagram) return null;

        const isApparatus = diagram.type === 'apparatus_diagram';
        
        return {
            name: diagram.name,
            category: diagram.category,
            type: isApparatus ? 'Read-as-you-draw (Apparatus)' : 'Solve-as-you-draw',
            approach: isApparatus ? 
                'Draw real object → Label quantities → Identify relationships → Write equations' :
                'Abstract representation → Apply laws → Solve numerically',
            goldenQuestions: this.getGoldenQuestions(diagramKey),
            analogies: this.getAnalogies(diagramKey),
            learningValue: isApparatus ?
                'Visual-first reasoning: the diagram itself reveals the physics' :
                'Problem-solving tool: visualize to solve'
        };
    }

    static getCategorySummary() {
        const categories = this.getAllCategories();
        const summary = {};
        
        categories.forEach(category => {
            const diagrams = this.getDiagramsByCategory(category);
            const apparatusCount = Object.values(diagrams)
                .filter(d => d.type === 'apparatus_diagram').length;
            const solveCount = Object.keys(diagrams).length - apparatusCount;
            
            summary[category] = {
                description: this.getCategoryDescription(category),
                totalDiagrams: Object.keys(diagrams).length,
                apparatusDiagrams: apparatusCount,
                solveDiagrams: solveCount,
                diagramKeys: Object.keys(diagrams)
            };
        });
        
        return summary;
    }

    static getCompleteDiagramList() {
        const categories = this.getAllCategories();
        const list = [];
        
        categories.forEach(category => {
            list.push(`\n=== ${category.toUpperCase()} ===`);
            const diagrams = this.getDiagramsByCategory(category);
            
            Object.entries(diagrams).forEach(([key, diagram]) => {
                const type = diagram.type === 'apparatus_diagram' ? '[APPARATUS]' : '[SOLVE]';
                list.push(`${type} ${diagram.name} - ${diagram.description}`);
            });
        });
        
        return list.join('\n');
    }

    static validateDiagram(diagramKey) {
        const diagram = this.diagrams[diagramKey];
        if (!diagram) {
            return { valid: false, error: 'Diagram not found' };
        }

        const required = ['name', 'category', 'description', 'type', 'defaultOptions'];
        const missing = required.filter(field => !diagram[field]);
        
        if (missing.length > 0) {
            return { valid: false, error: `Missing required fields: ${missing.join(', ')}` };
        }

        if (diagram.type === 'apparatus_diagram') {
            if (!diagram.apparatusType) {
                return { valid: false, error: 'Apparatus diagram missing apparatusType' };
            }
            if (!diagram.defaultOptions.goldenQuestions) {
                return { valid: false, error: 'Apparatus diagram missing goldenQuestions' };
            }
        }

        return { valid: true };
    }

    static getRandomDiagram(category = null) {
        let diagrams;
        if (category) {
            diagrams = this.getDiagramsByCategory(category);
        } else {
            diagrams = this.diagrams;
        }
        
        const keys = Object.keys(diagrams);
        const randomKey = keys[Math.floor(Math.random() * keys.length)];
        return { key: randomKey, diagram: diagrams[randomKey] };
    }

    static exportToJSON() {
        return JSON.stringify(this.diagrams, null, 2);
    }

    static getTotalCount() {
        return Object.keys(this.diagrams).length;
    }

    static getApparatusCount() {
        return Object.values(this.diagrams)
            .filter(d => d.type === 'apparatus_diagram').length;
    }

    static getSolveCount() {
        return this.getTotalCount() - this.getApparatusCount();
    }

    static getStatistics() {
        return {
            totalDiagrams: this.getTotalCount(),
            apparatusDiagrams: this.getApparatusCount(),
            solveDiagrams: this.getSolveCount(),
            categories: this.getAllCategories().length,
            categorySummary: this.getCategorySummary()
        };
    }
}


export { PhysicsDiagramsRegistry};
