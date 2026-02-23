class PhysicsDiagramsRegistry {
    static diagrams = {

        // ============================================================
        // ===== MECHANICS — EXISTING ENTRIES (unchanged) =============
        // ============================================================

        'freeBodyDiagram': {
            name: 'Free Body Diagram',
            category: 'Mechanics',
            subcategory: 'Dynamics',
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
            subcategory: 'Dynamics',
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
            subcategory: 'Dynamics',
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
            subcategory: 'Kinematics',
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
            subcategory: 'Dynamics',
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
            subcategory: 'Momentum & Collisions',
            description: 'Before and after elastic collision comparison',
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
            subcategory: 'Circular Motion',
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
            subcategory: 'Energy, Work & Power',
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
            subcategory: 'Oscillations',
            description: 'Simple harmonic motion of a spring-mass system',
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
            subcategory: 'Dynamics',
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

        // ============================================================
        // ===== MECHANICS — KINEMATICS (NEW) =========================
        // ============================================================

        'displacementTimeGraph': {
            name: 'Displacement-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Displacement vs time showing different motion phases',
            type: 'displacement_time_graph',
            segments: [
                { time: 0, value: 0, label: 'Start' },
                { time: 3, value: 30, label: 'Moving forward' },
                { time: 5, value: 30, label: 'Stationary' },
                { time: 8, value: 0, label: 'Returning' }
            ],
            defaultOptions: {
                title: 'Displacement-Time Graph',
                showSlope: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 's (m)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'velocityTimeGraph': {
            name: 'Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Velocity vs time with area shading for displacement',
            type: 'velocity_time_graph',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 3, value: 12, label: 'Accelerating' },
                { time: 6, value: 12, label: 'Constant v' },
                { time: 9, value: 0, label: 'Decelerating' }
            ],
            defaultOptions: {
                title: 'Velocity-Time Graph',
                showArea: true,
                showSlope: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'v (m/s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'accelerationTimeGraph': {
            name: 'Acceleration-Time Graph',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Acceleration vs time showing constant and zero acceleration phases',
            type: 'acceleration_time_graph',
            segments: [
                { time: 0, value: 4, label: 'Constant a' },
                { time: 3, value: 4, label: 'Constant a' },
                { time: 3, value: 0, label: 'a=0' },
                { time: 6, value: 0, label: 'a=0' },
                { time: 6, value: -4, label: 'Deceleration' },
                { time: 9, value: -4, label: 'Deceleration' }
            ],
            defaultOptions: {
                title: 'Acceleration-Time Graph',
                showArea: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 'a (m/s²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vectorComponents': {
            name: 'Vector Components Diagram',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Resolution of a vector into horizontal and vertical components',
            type: 'vector_components',
            magnitude: 50,
            angle: 37,
            defaultOptions: {
                title: 'Vector Components',
                showComponents: true,
                showAngles: true,
                showMagnitudes: true,
                showGrid: false,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'trajectoryParabola': {
            name: 'Trajectory Parabola Comparison',
            category: 'Mechanics',
            subcategory: 'Kinematics',
            description: 'Multiple projectile trajectories at different launch angles',
            type: 'trajectory_parabola',
            initialVelocity: 20,
            angles: [30, 45, 60],
            defaultOptions: {
                title: 'Projectile Trajectories at Different Angles',
                showAngles: true,
                showPeaks: true,
                showRanges: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — ENERGY, WORK & POWER (NEW) ===============
        // ============================================================

        'workDoneDiagram': {
            name: 'Work Done Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Work done by a force acting at an angle to displacement',
            type: 'work_done',
            force: 60,
            angle: 30,
            displacement: 8,
            defaultOptions: {
                title: 'Work Done by a Force',
                showComponents: true,
                showAngle: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyBarChart': {
            name: 'Energy Bar Chart',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Kinetic and potential energy at different positions',
            type: 'energy_bar_chart',
            positions: [
                { label: 'Top', KE: 0, PE: 100, height: 10 },
                { label: 'Mid', KE: 50, PE: 50, height: 5 },
                { label: 'Bottom', KE: 100, PE: 0, height: 0 }
            ],
            defaultOptions: {
                title: 'Energy Bar Chart — Conservation of Energy',
                showKE: true,
                showPE: true,
                showTotal: true,
                showValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'springCompression': {
            name: 'Spring Compression Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Spring showing compression, extension, and elastic potential energy',
            type: 'spring_compression',
            naturalLength: 120,
            compression: 40,
            extension: 40,
            springConstant: 800,
            defaultOptions: {
                title: 'Spring Compression and Extension',
                showNaturalLength: true,
                showForceArrows: true,
                showEPE: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rollerCoasterEnergy': {
            name: 'Roller Coaster Energy Diagram',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Energy transformation along a roller coaster track',
            type: 'roller_coaster_energy',
            mass: 500,
            points: [
                { x: 0,   height: 40, label: 'Start' },
                { x: 100, height: 0,  label: 'Bottom' },
                { x: 200, height: 25, label: 'Hill 2' },
                { x: 300, height: 0,  label: 'Valley' },
                { x: 400, height: 10, label: 'End' }
            ],
            defaultOptions: {
                title: 'Roller Coaster — Energy Transformation',
                showKE: true,
                showPE: true,
                showVelocity: true,
                showHeights: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'forceDisplacementGraph': {
            name: 'Force-Displacement Graph',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Force vs displacement graph showing work as area under curve',
            type: 'force_displacement_graph',
            points: [
                { x: 0, F: 0 },
                { x: 2, F: 20 },
                { x: 4, F: 20 },
                { x: 6, F: 10 },
                { x: 8, F: 0 }
            ],
            defaultOptions: {
                title: 'Force-Displacement Graph',
                showArea: true,
                showGrid: true,
                showWorkValue: true,
                xLabel: 'x (m)',
                yLabel: 'F (N)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'potentialEnergyCurve': {
            name: 'Potential Energy Curve',
            category: 'Mechanics',
            subcategory: 'Energy, Work & Power',
            description: 'Potential energy as a function of position showing equilibrium points',
            type: 'potential_energy_curve',
            equilibriumX: 3,
            wellDepth: 80,
            defaultOptions: {
                title: 'Potential Energy vs Position',
                showEquilibrium: true,
                showForceDirection: true,
                showStableUnstable: true,
                showGrid: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — MOMENTUM & COLLISIONS (NEW) ==============
        // ============================================================

        'collisionDiagram': {
            name: 'Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'General collision showing before and after with momentum vectors',
            type: 'collision_diagram',
            objects: [
                { mass: 4, velocity: 6, color: '#333333' },
                { mass: 2, velocity: -2, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Collision — Momentum Conservation',
                showBefore: true,
                showAfter: true,
                showMomentumVectors: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'momentumVectors': {
            name: 'Momentum Vectors Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Vector representation of momentum before and after collision',
            type: 'momentum_vectors',
            objects: [
                { mass: 3, velocity: 4, label: 'p₁', color: '#333333' },
                { mass: 2, velocity: -3, label: 'p₂', color: '#555555' }
            ],
            defaultOptions: {
                title: 'Momentum Vector Diagram',
                showScale: true,
                showResultant: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'elasticCollision': {
            name: 'Elastic Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Elastic collision with both momentum and kinetic energy conserved',
            type: 'elastic_collision',
            objects: [
                { mass: 3, velocity: 6, color: '#333333' },
                { mass: 3, velocity: 0, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Elastic Collision (equal masses)',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showKineticEnergy: true,
                width: 900,
                height: 580,
                backgroundColor: '#ffffff'
            }
        },

        'inelasticCollision': {
            name: 'Inelastic Collision Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Perfectly inelastic collision where objects stick together',
            type: 'inelastic_collision',
            objects: [
                { mass: 4, velocity: 5, color: '#333333' },
                { mass: 2, velocity: 0, color: '#777777' }
            ],
            defaultOptions: {
                title: 'Perfectly Inelastic Collision',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showKELost: true,
                width: 900,
                height: 580,
                backgroundColor: '#ffffff'
            }
        },

        'impulseForceTimeGraph': {
            name: 'Impulse Force-Time Graph',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Force vs time graph showing impulse as area under curve',
            type: 'impulse_force_time',
            peakForce: 800,
            contactTime: 0.05,
            initialMomentum: 0,
            defaultOptions: {
                title: 'Impulse — Force-Time Graph',
                showArea: true,
                showImpulseValue: true,
                showGrid: true,
                showMomentumChange: true,
                xLabel: 't (s)',
                yLabel: 'F (N)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'explosionDiagram': {
            name: 'Explosion Diagram',
            category: 'Mechanics',
            subcategory: 'Momentum & Collisions',
            description: 'Explosion showing conservation of momentum from rest',
            type: 'explosion_diagram',
            fragments: [
                { mass: 2, velocity: 15, label: 'A', color: '#333333' },
                { mass: 3, velocity: -10, label: 'B', color: '#777777' }
            ],
            defaultOptions: {
                title: 'Explosion — Conservation of Momentum',
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showVelocities: true,
                width: 900,
                height: 550,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — CIRCULAR MOTION (NEW) ====================
        // ============================================================

        'centripetalForce': {
            name: 'Centripetal Force Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Forces on an object in circular motion with centripetal analysis',
            type: 'centripetal_force',
            mass: 0.5,
            radius: 1.2,
            speed: 3,
            defaultOptions: {
                title: 'Centripetal Force in Circular Motion',
                showForceVectors: true,
                showVelocity: true,
                showAcceleration: true,
                showFormulas: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'verticalCircle': {
            name: 'Vertical Circle Motion',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Object moving in a vertical circle showing forces at key positions',
            type: 'vertical_circle',
            mass: 0.3,
            radius: 0.8,
            speed: 4,
            defaultOptions: {
                title: 'Motion in a Vertical Circle',
                showTopForces: true,
                showBottomForces: true,
                showSideForces: true,
                showMinSpeed: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'conicalPendulum': {
            name: 'Conical Pendulum Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Conical pendulum showing tension components and circular path',
            type: 'conical_pendulum',
            stringLength: 0.5,
            halfAngle: 30,
            mass: 0.2,
            defaultOptions: {
                title: 'Conical Pendulum',
                showTension: true,
                showAngle: true,
                showCircularPath: true,
                showForceComponents: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bankedCurve': {
            name: 'Banked Curve Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Vehicle on a banked road showing forces for circular motion',
            type: 'banked_curve',
            bankAngle: 25,
            mass: 1000,
            radius: 50,
            defaultOptions: {
                title: 'Banked Curve',
                showNormal: true,
                showWeight: true,
                showComponents: true,
                showAngle: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'satelliteOrbit': {
            name: 'Satellite Orbit Diagram',
            category: 'Mechanics',
            subcategory: 'Circular Motion',
            description: 'Satellite in circular orbit showing gravitational force and velocity',
            type: 'satellite_orbit',
            orbitRadius: 200,
            planetRadius: 60,
            defaultOptions: {
                title: 'Satellite in Circular Orbit',
                showGravity: true,
                showVelocity: true,
                showOrbitPath: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== MECHANICS — OSCILLATIONS (NEW) =======================
        // ============================================================

        'shmDisplacementGraph': {
            name: 'SHM Displacement-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Displacement vs time for simple harmonic motion x = A cos(ωt)',
            type: 'shm_displacement_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Displacement vs Time',
                showAmplitude: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'x (m)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'shmVelocityGraph': {
            name: 'SHM Velocity-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Velocity vs time for SHM: v = -Aω sin(ωt)',
            type: 'shm_velocity_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Velocity vs Time',
                showMaxVelocity: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'v (m/s)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'shmAccelerationGraph': {
            name: 'SHM Acceleration-Time Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Acceleration vs time for SHM: a = -Aω² cos(ωt)',
            type: 'shm_acceleration_graph',
            amplitude: 0.1,
            period: 2.0,
            numCycles: 2,
            defaultOptions: {
                title: 'SHM — Acceleration vs Time',
                showMaxAcceleration: true,
                showPeriod: true,
                showGrid: true,
                showEquation: true,
                xLabel: 't (s)',
                yLabel: 'a (m/s²)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'simplePendulum': {
            name: 'Simple Pendulum Diagram',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Simple pendulum showing forces, angle, and restoring force',
            type: 'simple_pendulum',
            length: 1.0,
            mass: 0.2,
            angle: 20,
            defaultOptions: {
                title: 'Simple Pendulum',
                showForces: true,
                showAngle: true,
                showRestoring: true,
                showPeriodFormula: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'energyInShm': {
            name: 'Energy in SHM Graph',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'KE, PE, and total energy as functions of displacement in SHM',
            type: 'energy_in_shm',
            amplitude: 0.1,
            springConstant: 50,
            defaultOptions: {
                title: 'Energy in SHM vs Displacement',
                showKE: true,
                showPE: true,
                showTotal: true,
                showGrid: true,
                showValues: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resonanceCurve': {
            name: 'Resonance Curve',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Amplitude vs driving frequency showing resonance peak',
            type: 'resonance_curve',
            naturalFrequency: 5,
            dampingLevels: [0.1, 0.3, 0.6],
            defaultOptions: {
                title: 'Resonance Curves for Different Damping',
                showResonanceFreq: true,
                showDampingLabels: true,
                showGrid: true,
                xLabel: 'f (Hz)',
                yLabel: 'Amplitude',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dampingCurves': {
            name: 'Damping Curves',
            category: 'Mechanics',
            subcategory: 'Oscillations',
            description: 'Displacement vs time for underdamped, critically damped, and overdamped oscillations',
            type: 'damping_curves',
            amplitude: 1.0,
            period: 2.0,
            dampingTypes: ['underdamped', 'critical', 'overdamped'],
            defaultOptions: {
                title: 'Damped Oscillations',
                showEnvelope: true,
                showLabels: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'x (m)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== 2. WAVES & SOUND (unchanged) =========================
        // ============================================================

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

    static getDiagramsBySubcategory(subcategory) {
        return Object.entries(this.diagrams)
            .filter(([_, diagram]) => diagram.subcategory === subcategory)
            .reduce((acc, [key, diagram]) => {
                acc[key] = diagram;
                return acc;
            }, {});
    }

    static getAllCategories() {
        return [...new Set(Object.values(this.diagrams).map(d => d.category))];
    }

    static getAllSubcategories() {
        return [...new Set(Object.values(this.diagrams)
            .filter(d => d.subcategory)
            .map(d => d.subcategory))];
    }

    static searchDiagrams(query) {
        const lowerQuery = query.toLowerCase();
        return Object.entries(this.diagrams)
            .filter(([key, diagram]) =>
                diagram.name.toLowerCase().includes(lowerQuery) ||
                diagram.description.toLowerCase().includes(lowerQuery) ||
                diagram.category.toLowerCase().includes(lowerQuery) ||
                (diagram.subcategory || '').toLowerCase().includes(lowerQuery) ||
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
}

export { PhysicsDiagramsRegistry };
