
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
        // ===== MECHANICS — KINEMATICS ================================
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
        // ===== MECHANICS — ENERGY, WORK & POWER =====================
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
        // ===== MECHANICS — MOMENTUM & COLLISIONS ====================
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
        // ===== MECHANICS — CIRCULAR MOTION ==========================
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
        // ===== MECHANICS — OSCILLATIONS =============================
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
        // ===== WAVES & SOUND — EXISTING ENTRIES (unchanged) =========
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
        },

        // ============================================================
        // ===== WAVES & SOUND — PROGRESSIVE WAVES (NEW) ==============
        // ============================================================

        'displacementPositionGraph': {
            name: 'Displacement-Position Graph',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Displacement of particles vs position along a progressive wave at a snapshot in time',
            type: 'displacement_position_graph',
            wavelength: 0.4,
            amplitude: 0.05,
            frequency: 5,
            defaultOptions: {
                title: 'Displacement-Position Graph',
                showWavelength: true,
                showAmplitude: true,
                showGrid: true,
                showDirection: true,
                xLabel: 'x (m)',
                yLabel: 'y (m)',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'transverseWaveDiagram': {
            name: 'Transverse Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Transverse wave showing particle displacement perpendicular to wave travel',
            type: 'transverse_wave_diagram',
            wavelength: 80,
            amplitude: 30,
            numCycles: 2,
            defaultOptions: {
                title: 'Transverse Wave',
                showParticleMotion: true,
                showWaveDirection: true,
                showCrestsTroughs: true,
                showLabels: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'longitudinalWaveDiagram': {
            name: 'Longitudinal Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Longitudinal wave showing compressions and rarefactions with particle displacement',
            type: 'longitudinal_wave_diagram',
            wavelength: 80,
            amplitude: 20,
            numCycles: 2,
            defaultOptions: {
                title: 'Longitudinal Wave',
                showCompressions: true,
                showRarefactions: true,
                showParticleMotion: true,
                showWaveDirection: true,
                animate: false,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'wavePhaseDifference': {
            name: 'Wave Phase Difference Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Two waves showing phase difference in fractions of a cycle and radians',
            type: 'wave_phase_difference',
            wavelength: 100,
            amplitude: 30,
            phaseDifference: 90,
            defaultOptions: {
                title: 'Phase Difference Between Two Waves',
                showPhaseDiff: true,
                showBothWaves: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'x (m)',
                yLabel: 'displacement',
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'electroMagneticWave': {
            name: 'Electromagnetic Wave Diagram',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'EM wave showing perpendicular E and B field oscillations propagating in 3D',
            type: 'electromagnetic_wave',
            wavelength: 120,
            amplitude: 40,
            defaultOptions: {
                title: 'Electromagnetic Wave',
                showEField: true,
                showBField: true,
                showPropagationDirection: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'intensityDistanceGraph': {
            name: 'Intensity-Distance Graph',
            category: 'Waves & Sound',
            subcategory: 'Progressive Waves',
            description: 'Intensity vs distance showing inverse square law for a point source',
            type: 'intensity_distance_graph',
            sourceIntensity: 1000,
            referenceDistance: 1,
            defaultOptions: {
                title: 'Intensity vs Distance (Inverse Square Law)',
                showInverseSquareCurve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'r (m)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — STATIONARY WAVES (NEW) ===============
        // ============================================================

        'stationaryWaveFormation': {
            name: 'Stationary Wave Formation',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Formation of a stationary wave by superposition of two identical waves travelling in opposite directions',
            type: 'stationary_wave_formation',
            wavelength: 100,
            amplitude: 35,
            defaultOptions: {
                title: 'Stationary Wave Formation by Superposition',
                showIncidentWave: true,
                showReflectedWave: true,
                showResultant: true,
                showNodes: true,
                showAntinodes: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nodesAntinodesDiagram': {
            name: 'Nodes and Antinodes Diagram',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Stationary wave clearly labelled with nodes, antinodes, and amplitude',
            type: 'nodes_antinodes_diagram',
            harmonic: 2,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: 'Nodes and Antinodes in a Stationary Wave',
                showNodes: true,
                showAntinodes: true,
                showAmplitude: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics1st': {
            name: 'String — 1st Harmonic (Fundamental)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Fundamental mode of vibration on a fixed string: one antinode, two nodes',
            type: 'string_harmonics',
            harmonic: 1,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '1st Harmonic — Fundamental Mode',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics2nd': {
            name: 'String — 2nd Harmonic (1st Overtone)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: '2nd harmonic on a fixed string: two antinodes, three nodes',
            type: 'string_harmonics',
            harmonic: 2,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '2nd Harmonic — 1st Overtone',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'stringHarmonics3rd': {
            name: 'String — 3rd Harmonic (2nd Overtone)',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: '3rd harmonic on a fixed string: three antinodes, four nodes',
            type: 'string_harmonics',
            harmonic: 3,
            length: 300,
            amplitude: 40,
            defaultOptions: {
                title: '3rd Harmonic — 2nd Overtone',
                showNodes: true,
                showAntinodes: true,
                showWavelength: true,
                showFrequencyFormula: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'openPipeHarmonics': {
            name: 'Open Pipe Harmonics',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Harmonics in an open pipe showing antinodes at both open ends',
            type: 'open_pipe_harmonics',
            pipeLength: 300,
            harmonics: [1, 2, 3],
            defaultOptions: {
                title: 'Open Pipe — Harmonics',
                showNodes: true,
                showAntinodes: true,
                showWavelengths: true,
                showFrequencies: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'closedPipeHarmonics': {
            name: 'Closed Pipe Harmonics',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Harmonics in a closed pipe showing a node at closed end and antinode at open end',
            type: 'closed_pipe_harmonics',
            pipeLength: 300,
            harmonics: [1, 3, 5],
            defaultOptions: {
                title: 'Closed Pipe — Odd Harmonics Only',
                showNodes: true,
                showAntinodes: true,
                showWavelengths: true,
                showFrequencies: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'progressiveVsStationaryComparison': {
            name: 'Progressive vs Stationary Wave Comparison',
            category: 'Waves & Sound',
            subcategory: 'Stationary Waves',
            description: 'Side-by-side comparison of progressive and stationary wave properties',
            type: 'progressive_vs_stationary',
            wavelength: 100,
            amplitude: 30,
            defaultOptions: {
                title: 'Progressive vs Stationary Waves',
                showEnergyTransfer: true,
                showPhase: true,
                showAmplitude: true,
                showNodesAntinodes: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — SUPERPOSITION & INTERFERENCE (NEW) ===
        // ============================================================

        'superpositionPrinciple': {
            name: 'Superposition Principle Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves superimposing to form a resultant wave showing the principle of superposition',
            type: 'superposition_principle',
            wave1Amplitude: 30,
            wave2Amplitude: 20,
            wave1Wavelength: 100,
            wave2Wavelength: 100,
            phaseDifference: 0,
            defaultOptions: {
                title: 'Principle of Superposition',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showGrid: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'constructiveInterference': {
            name: 'Constructive Interference',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves in phase combining to produce a resultant of maximum amplitude',
            type: 'constructive_interference',
            amplitude: 30,
            wavelength: 100,
            defaultOptions: {
                title: 'Constructive Interference — Waves in Phase',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showPathDifference: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'destructiveInterference': {
            name: 'Destructive Interference',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two waves in antiphase combining to produce zero resultant amplitude',
            type: 'destructive_interference',
            amplitude: 30,
            wavelength: 100,
            defaultOptions: {
                title: 'Destructive Interference — Waves in Antiphase',
                showWave1: true,
                showWave2: true,
                showResultant: true,
                showPathDifference: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'youngDoubleSlitSetup': {
            name: "Young's Double Slit Setup",
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: "Young's double slit experiment showing light source, slits, and fringe pattern on screen",
            type: 'young_double_slit_setup',
            slitSeparation: 0.5,
            slitToScreen: 1.0,
            wavelength: 600,
            defaultOptions: {
                title: "Young's Double Slit Experiment",
                showSlits: true,
                showFringes: true,
                showPathDifference: true,
                showFringeSpacing: true,
                showGeometry: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'interferencePattern': {
            name: 'Interference Pattern',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Two-source interference pattern showing bright and dark fringes',
            type: 'interference_pattern',
            separation: 100,
            wavelength: 30,
            defaultOptions: {
                title: 'Two-Source Interference Pattern',
                showBrightFringes: true,
                showDarkFringes: true,
                showPathLines: true,
                showIntensityProfile: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionGratingDiagram': {
            name: 'Diffraction Grating Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Diffraction grating producing sharp maxima at multiple orders',
            type: 'diffraction_grating',
            gratingSpacing: 1.67e-6,
            wavelength: 500e-9,
            numSlits: 5,
            defaultOptions: {
                title: 'Diffraction Grating',
                showOrders: true,
                showAngles: true,
                showFormula: true,
                showGrating: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'singleSlitDiffraction': {
            name: 'Single Slit Diffraction',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Single slit diffraction showing intensity pattern with central maximum',
            type: 'single_slit_diffraction',
            slitWidth: 0.1e-3,
            wavelength: 600e-9,
            screenDistance: 1.0,
            defaultOptions: {
                title: 'Single Slit Diffraction Pattern',
                showIntensityPattern: true,
                showCentralMaximum: true,
                showMinima: true,
                showAngles: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'pathDifferenceDiagram': {
            name: 'Path Difference Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Geometric path difference between two sources to a point on a screen',
            type: 'path_difference_diagram',
            slitSeparation: 80,
            screenDistance: 400,
            wavelength: 30,
            defaultOptions: {
                title: 'Path Difference Geometry',
                showPathDifference: true,
                showConstructive: true,
                showDestructive: true,
                showGeometry: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'polarisationDiagram': {
            name: 'Polarisation Diagram',
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: 'Polarisation of transverse waves using a polarising filter',
            type: 'polarisation_diagram',
            initialAngle: 0,
            analyserAngle: 45,
            defaultOptions: {
                title: 'Polarisation of Light',
                showUnpolarised: true,
                showPolariser: true,
                showPolarised: true,
                showAnalyser: true,
                showIntensity: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'malusLawGraph': {
            name: "Malus's Law Graph",
            category: 'Waves & Sound',
            subcategory: 'Superposition & Interference',
            description: "Intensity vs angle graph following Malus's Law I = I₀ cos²θ",
            type: 'malus_law_graph',
            initialIntensity: 100,
            defaultOptions: {
                title: "Malus's Law — I = I₀ cos²θ",
                showCosSquaredCurve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'θ (degrees)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — SOUND WAVES (NEW) ====================
        // ============================================================

        'longitudinalSoundWave': {
            name: 'Longitudinal Sound Wave',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Longitudinal sound wave showing particle displacement, pressure, and wave propagation',
            type: 'longitudinal_sound_wave',
            frequency: 440,
            wavelength: 0.78,
            amplitude: 25,
            defaultOptions: {
                title: 'Longitudinal Sound Wave',
                showParticles: true,
                showDisplacementGraph: true,
                showPressureGraph: true,
                showWaveDirection: true,
                animate: false,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'compressionRarefaction': {
            name: 'Compression and Rarefaction Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Sound wave showing regions of compression (high pressure) and rarefaction (low pressure)',
            type: 'compression_rarefaction',
            wavelength: 120,
            numCycles: 2,
            defaultOptions: {
                title: 'Compressions and Rarefactions in Sound',
                showCompressions: true,
                showRarefactions: true,
                showPressureVariation: true,
                showParticleSpacing: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffectApproaching': {
            name: 'Doppler Effect — Source Approaching',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Moving source approaching observer showing compressed wavefronts and increased frequency',
            type: 'doppler_effect_approaching',
            sourceVelocity: 0.5,
            soundSpeed: 340,
            sourceFrequency: 500,
            defaultOptions: {
                title: 'Doppler Effect — Approaching Source',
                showWavefronts: true,
                showObserver: true,
                showFrequencyShift: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dopplerEffectReceding': {
            name: 'Doppler Effect — Source Receding',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Moving source receding from observer showing stretched wavefronts and decreased frequency',
            type: 'doppler_effect_receding',
            sourceVelocity: 0.5,
            soundSpeed: 340,
            sourceFrequency: 500,
            defaultOptions: {
                title: 'Doppler Effect — Receding Source',
                showWavefronts: true,
                showObserver: true,
                showFrequencyShift: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavefrontCompression': {
            name: 'Wavefront Compression Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Circular wavefronts from a moving source showing compression ahead and expansion behind',
            type: 'wavefront_compression',
            sourceVelocity: 0.6,
            numWavefronts: 6,
            defaultOptions: {
                title: 'Wavefront Compression from Moving Source',
                showSourcePosition: true,
                showWavefronts: true,
                showVelocityVector: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'intensityInverseSquare': {
            name: 'Intensity Inverse Square Law',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Sound intensity decreasing with distance following the inverse square law',
            type: 'intensity_inverse_square',
            sourceIntensity: 1.0,
            referenceDistance: 1,
            defaultOptions: {
                title: 'Sound Intensity — Inverse Square Law',
                showInverseSquareCurve: true,
                showWavefronts: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'r (m)',
                yLabel: 'I (W/m²)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'decibelScaleChart': {
            name: 'Decibel Scale Chart',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Decibel scale showing common sound intensities from threshold of hearing to jet engine',
            type: 'decibel_scale_chart',
            levels: [
                { dB: 0,   label: 'Threshold of hearing' },
                { dB: 20,  label: 'Whisper' },
                { dB: 60,  label: 'Normal conversation' },
                { dB: 80,  label: 'Traffic' },
                { dB: 110, label: 'Rock concert' },
                { dB: 130, label: 'Threshold of pain' },
                { dB: 160, label: 'Jet engine' }
            ],
            defaultOptions: {
                title: 'Decibel Scale',
                showIntensityValues: true,
                showLogScale: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ultrasoundPulseEcho': {
            name: 'Ultrasound Pulse-Echo Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Ultrasound pulse-echo technique showing transmitted and reflected pulses for distance measurement',
            type: 'ultrasound_pulse_echo',
            medium1Speed: 1500,
            medium2Speed: 3500,
            defaultOptions: {
                title: 'Ultrasound Pulse-Echo Technique',
                showTransmitted: true,
                showReflected: true,
                showTimeline: true,
                showDistanceCalc: true,
                showBoundary: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'acousticImpedance': {
            name: 'Acoustic Impedance Diagram',
            category: 'Waves & Sound',
            subcategory: 'Sound Waves',
            description: 'Acoustic impedance mismatch at a boundary showing reflection and transmission coefficients',
            type: 'acoustic_impedance',
            Z1: 1.5e6,
            Z2: 7.0e6,
            defaultOptions: {
                title: 'Acoustic Impedance at a Boundary',
                showIncident: true,
                showReflected: true,
                showTransmitted: true,
                showCoefficients: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== WAVES & SOUND — EM SPECTRUM & OPTICS (NEW) ===========
        // ============================================================

        'electromagneticSpectrum': {
            name: 'Electromagnetic Spectrum',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Full electromagnetic spectrum from radio waves to gamma rays with wavelength and frequency scales',
            type: 'electromagnetic_spectrum',
            defaultOptions: {
                title: 'The Electromagnetic Spectrum',
                showWavelengthScale: true,
                showFrequencyScale: true,
                showRegionLabels: true,
                showApplications: true,
                showVisibleExpanded: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'refractionDiagram': {
            name: 'Refraction Diagram',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Ray of light refracting at a boundary between two optical media',
            type: 'refraction_diagram',
            incidentAngle: 40,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: 'Refraction at an Optical Boundary',
                showNormal: true,
                showAngles: true,
                showSnellsLaw: true,
                showMedia: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'snelLawDiagram': {
            name: "Snell's Law Diagram",
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: "Snell's law diagram with labelled angles of incidence and refraction and refractive indices",
            type: 'snell_law_diagram',
            incidentAngle: 35,
            n1: 1.0,
            n2: 1.6,
            defaultOptions: {
                title: "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
                showFormula: true,
                showAngles: true,
                showNormal: true,
                showRefractiveIndices: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'totalInternalReflection': {
            name: 'Total Internal Reflection',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Total internal reflection occurring when angle of incidence exceeds the critical angle',
            type: 'total_internal_reflection',
            criticalAngle: 42,
            n1: 1.5,
            n2: 1.0,
            defaultOptions: {
                title: 'Total Internal Reflection',
                showCriticalAngle: true,
                showReflectedRay: true,
                showAngles: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'criticalAngleDiagram': {
            name: 'Critical Angle Diagram',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Three rays showing below critical angle (refraction), at critical angle, and above (TIR)',
            type: 'critical_angle_diagram',
            criticalAngle: 42,
            n1: 1.5,
            n2: 1.0,
            defaultOptions: {
                title: 'Critical Angle and Total Internal Reflection',
                showThreeRays: true,
                showAngles: true,
                showCriticalAngleLabel: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFibreStructure': {
            name: 'Optical Fibre Structure',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Cross-section of an optical fibre showing core, cladding, and total internal reflection path',
            type: 'optical_fibre_structure',
            coreRadius: 50,
            claddingThickness: 20,
            coreN: 1.5,
            claddingN: 1.45,
            defaultOptions: {
                title: 'Optical Fibre — Total Internal Reflection',
                showCore: true,
                showCladding: true,
                showRayPath: true,
                showAngles: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'dispersionPrism': {
            name: 'Dispersion by a Prism',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'White light dispersed by a prism into component colours of the visible spectrum',
            type: 'dispersion_prism',
            prismAngle: 60,
            incidentAngle: 45,
            defaultOptions: {
                title: 'Dispersion of White Light by a Prism',
                showVisibleSpectrum: true,
                showRefractedRays: true,
                showWavelengthLabels: true,
                showPrism: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramLens': {
            name: 'Ray Diagram — Converging Lens',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Ray diagram for a converging lens showing three principal rays and image formation',
            type: 'ray_diagram_lens',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 40,
            defaultOptions: {
                title: 'Ray Diagram — Converging Lens',
                showPrincipalRays: true,
                showImage: true,
                showFocalPoints: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wavelengthFrequencySpectrum': {
            name: 'Wavelength-Frequency Spectrum',
            category: 'Waves & Sound',
            subcategory: 'EM Spectrum & Optics',
            description: 'Graph showing the relationship between wavelength and frequency across the EM spectrum',
            type: 'wavelength_frequency_spectrum',
            defaultOptions: {
                title: 'Wavelength vs Frequency in the EM Spectrum',
                showInverseRelationship: true,
                showRegionColours: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'Wavelength (m)',
                yLabel: 'Frequency (Hz)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — CHARGE & CURRENT (NEW) =================
        // ============================================================

        'currentFlowDiagram': {
            name: 'Current Flow Diagram',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Simple circuit showing conventional current direction and electron flow direction',
            type: 'current_flow_diagram',
            voltage: 12,
            resistance: 4,
            defaultOptions: {
                title: 'Current Flow in a Circuit',
                showConventionalCurrent: true,
                showElectronFlow: true,
                showCircuit: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'driftVelocityModel': {
            name: 'Drift Velocity Model',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Microscopic model of current flow showing electron drift velocity in a conductor',
            type: 'drift_velocity_model',
            crossSectionArea: 1e-6,
            numberDensity: 8.5e28,
            driftVelocity: 1e-4,
            defaultOptions: {
                title: 'Drift Velocity Model: I = nAqv',
                showElectrons: true,
                showDriftDirection: true,
                showCrossSectionArea: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'chargeCarrierMovement': {
            name: 'Charge Carrier Movement',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Positive and negative charge carriers in different conductor types showing current direction',
            type: 'charge_carrier_movement',
            defaultOptions: {
                title: 'Charge Carrier Movement',
                showPositiveCarriers: true,
                showNegativeCarriers: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'currentTimeGraph': {
            name: 'Current-Time Graph',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Current vs time graph with area under curve representing charge flow',
            type: 'current_time_graph',
            segments: [
                { time: 0, current: 0 },
                { time: 1, current: 3 },
                { time: 4, current: 3 },
                { time: 5, current: 0 }
            ],
            defaultOptions: {
                title: 'Current-Time Graph (Area = Charge)',
                showArea: true,
                showChargeValue: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (s)',
                yLabel: 'I (A)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chargeTimeGraph': {
            name: 'Charge-Time Graph',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Charge vs time graph with slope representing current',
            type: 'charge_time_graph',
            chargeRate: 3,
            totalTime: 5,
            defaultOptions: {
                title: 'Charge-Time Graph (Slope = Current)',
                showSlope: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 't (s)',
                yLabel: 'Q (C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electronFlowVsConventional': {
            name: 'Electron Flow vs Conventional Current',
            category: 'Electricity',
            subcategory: 'Charge & Current',
            description: 'Comparison diagram of electron flow (negative to positive) vs conventional current (positive to negative)',
            type: 'electron_flow_vs_conventional',
            defaultOptions: {
                title: 'Electron Flow vs Conventional Current',
                showBothDirections: true,
                showBattery: true,
                showLabels: true,
                showAnnotations: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — POTENTIAL DIFFERENCE & EMF (NEW) =======
        // ============================================================

        'emfInternalResistanceCircuit': {
            name: 'EMF and Internal Resistance Circuit',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Circuit showing EMF source with internal resistance and external load',
            type: 'emf_internal_resistance_circuit',
            emf: 12,
            internalResistance: 1,
            externalResistance: 5,
            defaultOptions: {
                title: 'EMF and Internal Resistance',
                showEMF: true,
                showInternalR: true,
                showTerminalVoltage: true,
                showLostVolts: true,
                showFormulas: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'terminalVoltageGraph': {
            name: 'Terminal Voltage Graph',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Terminal voltage vs current graph showing EMF intercept and internal resistance from slope',
            type: 'terminal_voltage_graph',
            emf: 12,
            internalResistance: 1.5,
            defaultOptions: {
                title: 'Terminal Voltage vs Current',
                showEMFIntercept: true,
                showSlope: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'I (A)',
                yLabel: 'V (V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vVsIGraph': {
            name: 'V-I Characteristic Graph',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'V vs I graph for a source showing how terminal voltage varies with load current',
            type: 'v_vs_i_graph',
            emf: 9,
            internalResistance: 2,
            defaultOptions: {
                title: 'V-I Graph for an EMF Source',
                showEMF: true,
                showShortCircuitCurrent: true,
                showGrid: true,
                showWorkingPoint: true,
                xLabel: 'I (A)',
                yLabel: 'V (V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'cellEnergyDiagram': {
            name: 'Cell Energy Diagram',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Energy transfer diagram showing chemical energy converted to electrical energy per unit charge in a cell',
            type: 'cell_energy_diagram',
            emf: 6,
            internalResistance: 0.5,
            externalResistance: 3,
            defaultOptions: {
                title: 'Energy Transfer in a Cell',
                showChemicalEnergy: true,
                showElectricalEnergy: true,
                showHeatDissipation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lostVoltsDiagram': {
            name: 'Lost Volts Diagram',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Circuit diagram illustrating lost volts across internal resistance and terminal voltage across external circuit',
            type: 'lost_volts_diagram',
            emf: 10,
            internalResistance: 2,
            externalResistance: 8,
            defaultOptions: {
                title: 'Lost Volts and Terminal Voltage',
                showVoltageDrops: true,
                showLabels: true,
                showFormula: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'openVsClosedCircuit': {
            name: 'Open vs Closed Circuit',
            category: 'Electricity',
            subcategory: 'Potential Difference & EMF',
            description: 'Comparison of open circuit (voltmeter reads EMF) and closed circuit (terminal voltage is less)',
            type: 'open_vs_closed_circuit',
            emf: 9,
            internalResistance: 1,
            externalResistance: 4,
            defaultOptions: {
                title: 'Open Circuit vs Closed Circuit Voltage',
                showOpenCircuit: true,
                showClosedCircuit: true,
                showVoltmeterReadings: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — RESISTANCE & RESISTIVITY (NEW) =========
        // ============================================================

        'ivCharacteristicOhmic': {
            name: 'I-V Characteristic — Ohmic Resistor',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic showing straight line through origin for an ohmic conductor',
            type: 'iv_characteristic_ohmic',
            resistance: 10,
            defaultOptions: {
                title: 'I-V Characteristic — Ohmic Resistor',
                showLinear: true,
                showGrid: true,
                showSlope: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicLamp': {
            name: 'I-V Characteristic — Filament Lamp',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic showing non-linear curve for a filament lamp due to increasing temperature',
            type: 'iv_characteristic_lamp',
            defaultOptions: {
                title: 'I-V Characteristic — Filament Lamp',
                showNonLinear: true,
                showGrid: true,
                showAnnotations: true,
                showResistanceChange: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicDiode': {
            name: 'I-V Characteristic — Diode',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic of a semiconductor diode showing forward bias conduction and reverse bias blocking',
            type: 'iv_characteristic_diode',
            forwardVoltage: 0.7,
            defaultOptions: {
                title: 'I-V Characteristic — Diode',
                showForwardBias: true,
                showReverseBias: true,
                showThresholdVoltage: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ivCharacteristicThermistor': {
            name: 'I-V Characteristic — Thermistor',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'I-V characteristic of an NTC thermistor showing resistance decrease with increasing temperature',
            type: 'iv_characteristic_thermistor',
            defaultOptions: {
                title: 'I-V Characteristic — NTC Thermistor',
                showIVCurve: true,
                showTemperatureEffect: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'V (V)',
                yLabel: 'I (A)',
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'resistivityFormulaDiagram': {
            name: 'Resistivity Formula Diagram',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Conductor diagram illustrating resistivity formula R = ρL/A with labelled dimensions',
            type: 'resistivity_formula_diagram',
            length: 2.0,
            crossSectionArea: 1e-6,
            resistivity: 1.7e-8,
            defaultOptions: {
                title: 'Resistivity: R = ρL/A',
                showConductor: true,
                showLength: true,
                showArea: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureResistanceGraphs': {
            name: 'Temperature-Resistance Graphs',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Resistance vs temperature graphs for a metal conductor and an NTC thermistor',
            type: 'temperature_resistance_graphs',
            defaultOptions: {
                title: 'Resistance vs Temperature',
                showMetalConductor: true,
                showNTCThermistor: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'T (°C)',
                yLabel: 'R (Ω)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'conductorStructure': {
            name: 'Conductor Structure Diagram',
            category: 'Electricity',
            subcategory: 'Resistance & Resistivity',
            description: 'Microscopic structure of a conductor showing lattice ions and free electrons',
            type: 'conductor_structure',
            defaultOptions: {
                title: 'Metallic Conductor Structure',
                showLatticeIons: true,
                showFreeElectrons: true,
                showElectronMotion: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — DC CIRCUITS (NEW) ======================
        // ============================================================

        'seriesCircuitDiagram': {
            name: 'Series Circuit Diagram',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Series circuit with multiple resistors showing current and voltage distribution',
            type: 'series_circuit_diagram',
            emf: 12,
            resistors: [4, 3, 5],
            defaultOptions: {
                title: 'Series Circuit',
                showCurrentValues: true,
                showVoltageDrops: true,
                showTotalResistance: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelCircuitDiagram': {
            name: 'Parallel Circuit Diagram',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Parallel circuit with multiple branches showing current splitting and equal voltage',
            type: 'parallel_circuit_diagram',
            emf: 12,
            resistors: [6, 4, 12],
            defaultOptions: {
                title: 'Parallel Circuit',
                showBranchCurrents: true,
                showVoltages: true,
                showTotalResistance: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mixedCircuitDiagram': {
            name: 'Mixed (Series-Parallel) Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Circuit combining series and parallel sections for stepwise resistance calculation',
            type: 'mixed_circuit_diagram',
            emf: 15,
            seriesResistor: 3,
            parallelResistors: [6, 6],
            defaultOptions: {
                title: 'Mixed Series-Parallel Circuit',
                showCurrentPaths: true,
                showVoltageDrops: true,
                showSimplificationSteps: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'potentialDividerCircuit': {
            name: 'Potential Divider Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider with two resistors showing output voltage calculation',
            type: 'potential_divider_circuit',
            inputVoltage: 12,
            R1: 4,
            R2: 8,
            defaultOptions: {
                title: 'Potential Divider',
                showOutputVoltage: true,
                showFormula: true,
                showVoltageDrops: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kirchhoffCurrentLaw': {
            name: "Kirchhoff's Current Law",
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Junction diagram illustrating KCL: sum of currents into a node equals sum of currents out',
            type: 'kirchhoff_current_law',
            currentsIn: [3, 2],
            currentsOut: [4, 1],
            defaultOptions: {
                title: "Kirchhoff's Current Law (KCL)",
                showJunction: true,
                showCurrentArrows: true,
                showEquation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'kirchhoffVoltageLaw': {
            name: "Kirchhoff's Voltage Law",
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Loop diagram illustrating KVL: sum of EMFs equals sum of potential drops around a loop',
            type: 'kirchhoff_voltage_law',
            emf: 12,
            resistors: [3, 5, 4],
            defaultOptions: {
                title: "Kirchhoff's Voltage Law (KVL)",
                showLoop: true,
                showVoltageDrops: true,
                showEquation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'wheatstoneBridge': {
            name: 'Wheatstone Bridge',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Wheatstone bridge circuit used for precise resistance measurement with balance condition',
            type: 'wheatstone_bridge',
            R1: 10,
            R2: 20,
            R3: 15,
            R4: 30,
            defaultOptions: {
                title: 'Wheatstone Bridge',
                showBalanceCondition: true,
                showGalvanometer: true,
                showLabels: true,
                showFormula: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'ldrSensorCircuit': {
            name: 'LDR Sensor Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider circuit with LDR showing output voltage variation with light intensity',
            type: 'ldr_sensor_circuit',
            supplyVoltage: 9,
            fixedResistance: 10000,
            defaultOptions: {
                title: 'LDR Potential Divider Circuit',
                showLDR: true,
                showOutputVoltage: true,
                showLightEffect: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermistorSensorCircuit': {
            name: 'Thermistor Sensor Circuit',
            category: 'Electricity',
            subcategory: 'DC Circuits',
            description: 'Potential divider circuit with NTC thermistor showing output voltage variation with temperature',
            type: 'thermistor_sensor_circuit',
            supplyVoltage: 9,
            fixedResistance: 10000,
            defaultOptions: {
                title: 'Thermistor Potential Divider Circuit',
                showThermistor: true,
                showOutputVoltage: true,
                showTemperatureEffect: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — ELECTRICAL POWER & ENERGY (NEW) ========
        // ============================================================

        'powerEquationsTriangle': {
            name: 'Power Equations Triangle',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Triangle diagram showing P = IV, P = I²R, and P = V²/R relationships',
            type: 'power_equations_triangle',
            defaultOptions: {
                title: 'Electrical Power Equations',
                showAllFormulas: true,
                showTriangle: true,
                showDerivations: true,
                width: 700,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyTransferDiagram': {
            name: 'Energy Transfer Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Sankey-style energy transfer diagram for an electrical device showing useful and wasted energy',
            type: 'energy_transfer_diagram',
            inputPower: 100,
            usefulPower: 75,
            wastedPower: 25,
            defaultOptions: {
                title: 'Electrical Energy Transfer',
                showUsefulOutput: true,
                showWastedHeat: true,
                showEfficiency: true,
                showLabels: true,
                width: 800,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'sankeyDiagramElectrical': {
            name: 'Sankey Diagram — Electrical',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Sankey diagram for an electrical appliance showing input, useful output, and wasted energy flows',
            type: 'sankey_diagram_electrical',
            inputEnergy: 200,
            usefulEnergy: 150,
            wastedHeat: 35,
            wastedSound: 15,
            defaultOptions: {
                title: 'Sankey Diagram — Electrical Appliance',
                showArrowWidths: true,
                showEnergyValues: true,
                showEfficiency: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'transmissionLineDiagram': {
            name: 'Transmission Line Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Power transmission system with step-up and step-down transformers showing voltage, current and power loss',
            type: 'transmission_line_diagram',
            generatorVoltage: 25000,
            transmissionVoltage: 400000,
            lineResistance: 10,
            defaultOptions: {
                title: 'Electrical Power Transmission',
                showStepUpTransformer: true,
                showStepDownTransformer: true,
                showPowerLoss: true,
                showVoltageCurrentValues: true,
                showLabels: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'fuseCircuitDiagram': {
            name: 'Fuse Circuit Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Circuit showing fuse placement and operation in a domestic appliance circuit',
            type: 'fuse_circuit_diagram',
            fuseRating: 13,
            appliancePower: 2300,
            supplyVoltage: 230,
            defaultOptions: {
                title: 'Fuse in a Circuit',
                showFusePlacement: true,
                showCurrentPath: true,
                showEarth: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stepUpTransformer': {
            name: 'Step-Up Transformer Diagram',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Step-up transformer showing primary and secondary coils, core, and voltage/turns ratio',
            type: 'step_up_transformer',
            primaryTurns: 100,
            secondaryTurns: 1000,
            primaryVoltage: 230,
            defaultOptions: {
                title: 'Step-Up Transformer',
                showCoils: true,
                showCore: true,
                showTurnsRatio: true,
                showVoltages: true,
                showFormula: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'powerLossGraph': {
            name: 'Power Loss Graph',
            category: 'Electricity',
            subcategory: 'Electrical Power & Energy',
            description: 'Graph showing how transmission power loss varies with transmission voltage for a fixed power output',
            type: 'power_loss_graph',
            transmittedPower: 1e6,
            lineResistance: 10,
            defaultOptions: {
                title: 'Power Loss vs Transmission Voltage',
                showInverseSquareCurve: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 'V (V)',
                yLabel: 'P_loss (W)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== ELECTRICITY — CAPACITANCE (NEW) ======================
        // ============================================================

        'capacitorStructure': {
            name: 'Capacitor Structure Diagram',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Parallel plate capacitor structure showing plates, charge distribution, and electric field',
            type: 'capacitor_structure',
            plateArea: 0.01,
            plateSeparation: 0.001,
            charge: 1e-5,
            defaultOptions: {
                title: 'Capacitor — Structure and Electric Field',
                showPlates: true,
                showCharges: true,
                showElectricField: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'parallelPlateCapacitor': {
            name: 'Parallel Plate Capacitor',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Parallel plate capacitor showing C = ε₀εᵣA/d with labelled dimensions',
            type: 'parallel_plate_capacitor',
            plateArea: 0.01,
            plateSeparation: 0.002,
            relativePermittivity: 1,
            defaultOptions: {
                title: 'Parallel Plate Capacitor: C = ε₀εᵣA/d',
                showDimensions: true,
                showFormula: true,
                showElectricField: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorSymbols': {
            name: 'Capacitor Circuit Symbols',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit symbols for unpolarised and polarised (electrolytic) capacitors',
            type: 'capacitor_symbols',
            defaultOptions: {
                title: 'Capacitor Circuit Symbols',
                showUnpolarised: true,
                showPolarised: true,
                showLabels: true,
                width: 700,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        'rcChargingCircuit': {
            name: 'RC Charging Circuit',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'RC circuit diagram for capacitor charging showing switch, resistor, capacitor, and voltage source',
            type: 'rc_charging_circuit',
            emf: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'RC Charging Circuit',
                showSwitch: true,
                showComponents: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rcDischargingCircuit': {
            name: 'RC Discharging Circuit',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'RC circuit diagram for capacitor discharging through a resistor',
            type: 'rc_discharging_circuit',
            resistance: 10000,
            capacitance: 470e-6,
            initialVoltage: 12,
            defaultOptions: {
                title: 'RC Discharging Circuit',
                showSwitch: true,
                showComponents: true,
                showCurrentDirection: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chargingGraphs': {
            name: 'Capacitor Charging Graphs',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Voltage and current vs time graphs during capacitor charging showing exponential approach',
            type: 'charging_graphs',
            emf: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'Capacitor Charging: V and I vs Time',
                showVoltageGraph: true,
                showCurrentGraph: true,
                showTimeConstant: true,
                showEquations: true,
                showGrid: true,
                xLabel: 't (s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dischargingGraphs': {
            name: 'Capacitor Discharging Graphs',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Voltage, current, and charge vs time graphs during capacitor discharge showing exponential decay',
            type: 'discharging_graphs',
            initialVoltage: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'Capacitor Discharging: V, I and Q vs Time',
                showVoltageGraph: true,
                showCurrentGraph: true,
                showChargeGraph: true,
                showTimeConstant: true,
                showEquations: true,
                showGrid: true,
                xLabel: 't (s)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lnVVsTGraph': {
            name: 'ln(V) vs t Graph',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Linearised discharge graph of ln(V) vs t giving a straight line with gradient -1/RC',
            type: 'ln_v_vs_t_graph',
            initialVoltage: 12,
            resistance: 10000,
            capacitance: 470e-6,
            defaultOptions: {
                title: 'ln(V) vs t — Linearising Exponential Decay',
                showLinearGraph: true,
                showGradient: true,
                showTimeConstant: true,
                showGrid: true,
                xLabel: 't (s)',
                yLabel: 'ln(V)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorsInSeries': {
            name: 'Capacitors in Series',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit with capacitors in series showing charge equality and voltage sharing',
            type: 'capacitors_in_series',
            capacitors: [100e-6, 220e-6, 470e-6],
            defaultOptions: {
                title: 'Capacitors in Series',
                showChargeEquality: true,
                showVoltageSharing: true,
                showFormula: true,
                showEquivalentC: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'capacitorsInParallel': {
            name: 'Capacitors in Parallel',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Circuit with capacitors in parallel showing voltage equality and charge sharing',
            type: 'capacitors_in_parallel',
            capacitors: [100e-6, 220e-6, 470e-6],
            defaultOptions: {
                title: 'Capacitors in Parallel',
                showVoltageEquality: true,
                showChargeSharing: true,
                showFormula: true,
                showEquivalentC: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyStorageDiagram': {
            name: 'Capacitor Energy Storage Diagram',
            category: 'Electricity',
            subcategory: 'Capacitance',
            description: 'Q-V graph for a capacitor showing energy stored as area under the line (E = ½QV = ½CV²)',
            type: 'energy_storage_diagram',
            capacitance: 470e-6,
            voltage: 12,
            defaultOptions: {
                title: 'Energy Stored in a Capacitor: E = ½CV²',
                showQVGraph: true,
                showAreaShading: true,
                showFormulas: true,
                showGrid: true,
                xLabel: 'V (V)',
                yLabel: 'Q (C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFLECTION (NEW) ============================
        // ============================================================

        'lawOfReflectionDiagram': {
            name: 'Law of Reflection Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Ray diagram showing angle of incidence equals angle of reflection at a plane mirror',
            type: 'law_of_reflection',
            incidentAngle: 40,
            defaultOptions: {
                title: 'Law of Reflection: θᵢ = θᵣ',
                showNormal: true,
                showAngles: true,
                showMirror: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'planeMirrorImage': {
            name: 'Plane Mirror Image Formation',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Plane mirror showing virtual image formation with equal object and image distances',
            type: 'plane_mirror_image',
            objectDistance: 5,
            objectHeight: 2,
            defaultOptions: {
                title: 'Image Formation in a Plane Mirror',
                showObject: true,
                showImage: true,
                showRays: true,
                showDistances: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'concaveMirrorRays': {
            name: 'Concave Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Concave mirror showing three principal rays and image formation for object beyond focal point',
            type: 'concave_mirror_rays',
            focalLength: 80,
            objectDistance: 160,
            objectHeight: 30,
            defaultOptions: {
                title: 'Concave Mirror — Ray Diagram',
                showPrincipalRays: true,
                showFocalPoint: true,
                showCentreOfCurvature: true,
                showImage: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'convexMirrorRays': {
            name: 'Convex Mirror Ray Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Convex mirror showing principal rays and virtual image formation',
            type: 'convex_mirror_rays',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 30,
            defaultOptions: {
                title: 'Convex Mirror — Ray Diagram',
                showPrincipalRays: true,
                showVirtualFocus: true,
                showImage: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'mirrorEquationDiagram': {
            name: 'Mirror Equation Diagram',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Labelled mirror diagram illustrating the mirror equation 1/f = 1/u + 1/v',
            type: 'mirror_equation_diagram',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Mirror Equation: 1/f = 1/u + 1/v',
                showDistanceLabels: true,
                showFormula: true,
                showImage: true,
                showMagnification: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramConcaveObjectPositions': {
            name: 'Concave Mirror — Object at Different Positions',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Multiple ray diagrams for concave mirror showing image changes as object moves from beyond 2f to within f',
            type: 'ray_diagram_concave_positions',
            focalLength: 80,
            objectPositions: ['beyond_2f', 'at_2f', 'between_f_2f', 'at_f', 'within_f'],
            defaultOptions: {
                title: 'Concave Mirror — Image at Different Object Positions',
                showAllPositions: true,
                showImageProperties: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'focalPointIllustration': {
            name: 'Focal Point Illustration',
            category: 'Optics',
            subcategory: 'Reflection',
            description: 'Concave mirror showing parallel rays converging at the focal point',
            type: 'focal_point_illustration',
            focalLength: 80,
            numRays: 5,
            defaultOptions: {
                title: 'Focal Point of a Concave Mirror',
                showParallelRays: true,
                showFocalPoint: true,
                showFocalLength: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — REFRACTION (NEW) ============================
        // ============================================================

        'snellsLawDiagram': {
            name: "Snell's Law Diagram",
            category: 'Optics',
            subcategory: 'Refraction',
            description: "Detailed Snell's law diagram with labelled media, angles, normal, and formula",
            type: 'snells_law_diagram',
            incidentAngle: 40,
            n1: 1.0,
            n2: 1.5,
            defaultOptions: {
                title: "Snell's Law: n₁sinθ₁ = n₂sinθ₂",
                showNormal: true,
                showAngles: true,
                showRefractiveIndices: true,
                showFormula: true,
                showMediaLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'refractionAtBoundary': {
            name: 'Refraction at a Boundary',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray bending at an optical boundary showing both denser and less dense medium cases',
            type: 'refraction_at_boundary',
            incidentAngle: 35,
            n1: 1.0,
            n2: 1.6,
            defaultOptions: {
                title: 'Refraction at an Optical Boundary',
                showBending: true,
                showNormal: true,
                showAngles: true,
                showSpeedChange: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'opticalFibreCrossSection': {
            name: 'Optical Fibre Cross Section',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Cross-section of optical fibre with labelled core, cladding, and protective jacket',
            type: 'optical_fibre_cross_section',
            coreRadius: 25,
            claddingRadius: 62.5,
            jacketRadius: 125,
            coreN: 1.48,
            claddingN: 1.46,
            defaultOptions: {
                title: 'Optical Fibre Cross Section',
                showCore: true,
                showCladding: true,
                showJacket: true,
                showRefractiveIndices: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'prismRefraction': {
            name: 'Prism Refraction Diagram',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray of light refracting through a glass prism showing deviation',
            type: 'prism_refraction',
            prismAngle: 60,
            incidentAngle: 40,
            refractiveIndex: 1.5,
            defaultOptions: {
                title: 'Refraction Through a Prism',
                showAngles: true,
                showNormals: true,
                showDeviation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'glassBlockRayPath': {
            name: 'Glass Block Ray Path',
            category: 'Optics',
            subcategory: 'Refraction',
            description: 'Ray of light entering and exiting a rectangular glass block showing lateral displacement',
            type: 'glass_block_ray_path',
            incidentAngle: 45,
            refractiveIndex: 1.5,
            blockWidth: 100,
            defaultOptions: {
                title: 'Ray Through a Rectangular Glass Block',
                showEntryRefraction: true,
                showExitRefraction: true,
                showLateralDisplacement: true,
                showAngles: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — LENSES (NEW) ================================
        // ============================================================

        'convergingLensRays': {
            name: 'Converging Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Converging (convex) lens showing three principal rays and real image formation',
            type: 'converging_lens_rays',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Converging Lens — Ray Diagram',
                showPrincipalRays: true,
                showFocalPoints: true,
                showImage: true,
                showMeasurements: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'divergingLensRays': {
            name: 'Diverging Lens Ray Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diverging (concave) lens showing three principal rays and virtual image formation',
            type: 'diverging_lens_rays',
            focalLength: 80,
            objectDistance: 150,
            objectHeight: 40,
            defaultOptions: {
                title: 'Diverging Lens — Ray Diagram',
                showPrincipalRays: true,
                showVirtualFocus: true,
                showImage: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thinLensDiagram': {
            name: 'Thin Lens Equation Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Labelled lens diagram illustrating the thin lens equation 1/f = 1/u + 1/v',
            type: 'thin_lens_diagram',
            focalLength: 80,
            objectDistance: 200,
            objectHeight: 40,
            defaultOptions: {
                title: 'Thin Lens Equation: 1/f = 1/u + 1/v',
                showDistanceLabels: true,
                showFormula: true,
                showImage: true,
                showMagnification: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lensImageFormation': {
            name: 'Lens Image Formation — Multiple Positions',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Series of ray diagrams showing image properties as object moves from beyond 2f to within f',
            type: 'lens_image_formation',
            focalLength: 80,
            objectPositions: ['beyond_2f', 'at_2f', 'between_f_2f', 'at_f', 'within_f'],
            defaultOptions: {
                title: 'Image Formation for Different Object Positions',
                showAllPositions: true,
                showImageProperties: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'compoundMicroscopeDiagram': {
            name: 'Compound Microscope Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram of a compound microscope showing objective and eyepiece lenses and final image',
            type: 'compound_microscope_diagram',
            objectiveFocalLength: 10,
            eyepieceFocalLength: 25,
            tubeLength: 160,
            defaultOptions: {
                title: 'Compound Microscope',
                showObjectiveLens: true,
                showEyepieceLens: true,
                showIntermediate: true,
                showFinalImage: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'telescopeDiagram': {
            name: 'Refracting Telescope Diagram',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Ray diagram of a refracting telescope showing objective and eyepiece lenses',
            type: 'telescope_diagram',
            objectiveFocalLength: 200,
            eyepieceFocalLength: 25,
            defaultOptions: {
                title: 'Refracting Telescope',
                showObjectiveLens: true,
                showEyepieceLens: true,
                showFocalPoints: true,
                showAngularMagnification: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'eyeDiagramDefects': {
            name: 'Eye Diagram — Vision Defects',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Diagrams of normal eye, short-sightedness, long-sightedness, and corrective lenses',
            type: 'eye_diagram_defects',
            defaultOptions: {
                title: 'Vision Defects and Correction',
                showNormalVision: true,
                showMyopia: true,
                showHyperopia: true,
                showCorrection: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rayDiagramLensPositions': {
            name: 'Lens Ray Diagram — All Object Positions',
            category: 'Optics',
            subcategory: 'Lenses',
            description: 'Combined summary diagram showing how image type, size and position change with object distance for a converging lens',
            type: 'ray_diagram_lens_positions',
            focalLength: 80,
            defaultOptions: {
                title: 'Converging Lens — Image Summary for All Positions',
                showSummaryTable: true,
                showAllRayDiagrams: true,
                showLabels: true,
                width: 1000,
                height: 800,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — WAVE OPTICS (NEW) ===========================
        // ============================================================

        'youngsDoubleSlitSetup': {
            name: "Young's Double Slit Setup",
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: "Young's double slit experiment showing monochromatic source, double slit, and fringe pattern",
            type: 'youngs_double_slit_setup',
            slitSeparation: 0.5e-3,
            slitToScreen: 1.5,
            wavelength: 589e-9,
            defaultOptions: {
                title: "Young's Double Slit Experiment",
                showSlits: true,
                showFringes: true,
                showGeometry: true,
                showFringeSpacingFormula: true,
                showLabels: true,
                width: 1000,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'diffractionGratingSetup': {
            name: 'Diffraction Grating Setup',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Diffraction grating producing sharp intensity maxima at multiple orders with labelled angles',
            type: 'diffraction_grating_setup',
            gratingSpacing: 1.67e-6,
            wavelength: 589e-9,
            defaultOptions: {
                title: 'Diffraction Grating: d sinθ = nλ',
                showOrders: true,
                showAngles: true,
                showFormula: true,
                showIntensityPattern: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fringeSpacingGeometry': {
            name: 'Fringe Spacing Geometry',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Geometric diagram deriving fringe spacing formula w = λD/s for double slit experiment',
            type: 'fringe_spacing_geometry',
            slitSeparation: 0.5e-3,
            screenDistance: 1.5,
            wavelength: 589e-9,
            defaultOptions: {
                title: 'Fringe Spacing: w = λD/s',
                showGeometry: true,
                showFormula: true,
                showLabels: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'coherentSourcesDiagram': {
            name: 'Coherent Sources Diagram',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Two coherent sources emitting waves with constant phase difference',
            type: 'coherent_sources_diagram',
            separation: 100,
            wavelength: 40,
            defaultOptions: {
                title: 'Coherent Sources',
                showWavefronts: true,
                showPhaseRelationship: true,
                showConstantPhaseDiff: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'thinFilmInterference': {
            name: 'Thin Film Interference',
            category: 'Optics',
            subcategory: 'Wave Optics',
            description: 'Thin film showing partial reflection and transmission at each surface causing interference',
            type: 'thin_film_interference',
            filmThickness: 500e-9,
            filmN: 1.4,
            wavelength: 550e-9,
            defaultOptions: {
                title: 'Thin Film Interference',
                showIncidentRay: true,
                showReflectedRays: true,
                showPhaseChange: true,
                showPathDifference: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== OPTICS — DISPERSION & SPECTRA (NEW) ==================
        // ============================================================

        'prismDispersionDiagram': {
            name: 'Prism Dispersion Diagram',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'White light entering a prism and dispersed into the visible spectrum colours',
            type: 'prism_dispersion_diagram',
            prismAngle: 60,
            incidentAngle: 45,
            defaultOptions: {
                title: 'Dispersion of White Light by a Prism',
                showVisibleColours: true,
                showAngleOfDeviation: true,
                showWavelengthLabels: true,
                showWhiteLight: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'electromagneticSpectrumChart': {
            name: 'Electromagnetic Spectrum Chart',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Full EM spectrum chart with wavelength, frequency, and photon energy scales',
            type: 'electromagnetic_spectrum_chart',
            defaultOptions: {
                title: 'Electromagnetic Spectrum',
                showWavelength: true,
                showFrequency: true,
                showPhotonEnergy: true,
                showRegionColours: true,
                showApplications: true,
                width: 1000,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'emissionSpectrumLines': {
            name: 'Emission Spectrum Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Emission line spectrum of hydrogen showing discrete bright lines on a dark background',
            type: 'emission_spectrum_lines',
            element: 'hydrogen',
            series: 'visible',
            defaultOptions: {
                title: 'Hydrogen Emission Spectrum (Visible)',
                showSpectralLines: true,
                showWavelengths: true,
                showDarkBackground: true,
                showLabels: true,
                width: 900,
                height: 300,
                backgroundColor: '#000000'
            }
        },

        'absorptionSpectrumLines': {
            name: 'Absorption Spectrum Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Absorption spectrum showing dark lines on a continuous background spectrum',
            type: 'absorption_spectrum_lines',
            element: 'hydrogen',
            defaultOptions: {
                title: 'Hydrogen Absorption Spectrum',
                showSpectralLines: true,
                showWavelengths: true,
                showContinuousBackground: true,
                showLabels: true,
                width: 900,
                height: 300,
                backgroundColor: '#ffffff'
            }
        },

        'hydrogenEnergyLevels': {
            name: 'Hydrogen Energy Levels',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Energy level diagram for hydrogen atom showing electron transitions producing spectral lines',
            type: 'hydrogen_energy_levels',
            numLevels: 6,
            defaultOptions: {
                title: 'Hydrogen Atom Energy Levels',
                showEnergyValues: true,
                showTransitions: true,
                showSeries: true,
                showPhotonEnergy: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'rainbowFormationDiagram': {
            name: 'Rainbow Formation Diagram',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Ray diagram showing sunlight entering a water droplet, undergoing total internal reflection and dispersion to form a rainbow',
            type: 'rainbow_formation_diagram',
            defaultOptions: {
                title: 'Rainbow Formation in a Water Droplet',
                showEntryRefraction: true,
                showInternalReflection: true,
                showExitDispersion: true,
                showColourSeparation: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'continuousVsLineSpectrum': {
            name: 'Continuous vs Line Spectrum',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Side-by-side comparison of a continuous spectrum and a discrete line emission spectrum',
            type: 'continuous_vs_line_spectrum',
            defaultOptions: {
                title: 'Continuous Spectrum vs Line Spectrum',
                showContinuous: true,
                showLineSpectrum: true,
                showAnnotations: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'fraunhoferLines': {
            name: 'Fraunhofer Lines',
            category: 'Optics',
            subcategory: 'Dispersion & Spectra',
            description: 'Solar absorption spectrum showing dark Fraunhofer lines corresponding to elements in the solar atmosphere',
            type: 'fraunhofer_lines',
            defaultOptions: {
                title: 'Fraunhofer Absorption Lines in Solar Spectrum',
                showSpectrum: true,
                showAbsorptionLines: true,
                showElementLabels: true,
                showWavelengths: true,
                width: 1000,
                height: 400,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — TEMPERATURE & HEAT (NEW) ===========
        // ============================================================

        'temperatureTimeGraph': {
            name: 'Temperature-Time Graph',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Temperature vs time graph showing heating of a substance with phase change plateaus',
            type: 'temperature_time_graph',
            substance: 'water',
            mass: 1.0,
            heatRate: 500,
            defaultOptions: {
                title: 'Heating Curve — Temperature vs Time',
                showPhaseChanges: true,
                showPlateaus: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 't (min)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'phaseChangeDiagram': {
            name: 'Phase Change Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Diagram showing phase transitions between solid, liquid, and gas with energy changes',
            type: 'phase_change_diagram',
            defaultOptions: {
                title: 'Phase Changes and Energy',
                showSolidLiquidGas: true,
                showFusionVaporisation: true,
                showEnergyArrows: true,
                showLatentHeat: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatingCurveIceToSteam': {
            name: 'Heating Curve: Ice to Steam',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Complete heating curve for water from ice at -20°C to steam above 100°C',
            type: 'heating_curve_ice_to_steam',
            mass: 1.0,
            defaultOptions: {
                title: 'Heating Curve: Ice → Water → Steam',
                showAllPhases: true,
                showPhasePlateaus: true,
                showLatentHeat: true,
                showSpecificHeat: true,
                showAnnotations: true,
                xLabel: 'Heat added (kJ)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'calorimetrySetup': {
            name: 'Calorimetry Setup Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Calorimetry experiment setup showing insulated container, thermometer, heater, and sample',
            type: 'calorimetry_setup',
            defaultOptions: {
                title: 'Calorimetry Experiment Setup',
                showContainer: true,
                showHeater: true,
                showThermometer: true,
                showInsulation: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermalEquilibrium': {
            name: 'Thermal Equilibrium Diagram',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Two objects at different temperatures reaching thermal equilibrium over time',
            type: 'thermal_equilibrium',
            temp1Initial: 80,
            temp2Initial: 20,
            equilibriumTemp: 45,
            defaultOptions: {
                title: 'Thermal Equilibrium',
                showTemperatureVsTime: true,
                showHeatTransfer: true,
                showEquilibriumPoint: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'specificHeatComparison': {
            name: 'Specific Heat Capacity Comparison',
            category: 'Thermal Physics',
            subcategory: 'Temperature & Heat',
            description: 'Bar chart comparing specific heat capacities of common substances',
            type: 'specific_heat_comparison',
            substances: [
                { name: 'Water',     c: 4200 },
                { name: 'Aluminium', c: 900  },
                { name: 'Copper',    c: 385  },
                { name: 'Iron',      c: 450  },
                { name: 'Glass',     c: 840  }
            ],
            defaultOptions: {
                title: 'Specific Heat Capacities of Common Substances',
                showValues: true,
                showUnits: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — GAS LAWS (NEW) =====================
        // ============================================================

        'pvDiagramBoyle': {
            name: "Boyle's Law P-V Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "P-V diagram showing Boyle's Law: pressure inversely proportional to volume at constant temperature",
            type: 'pv_diagram_boyle',
            temperature: 300,
            moles: 0.01,
            defaultOptions: {
                title: "Boyle's Law: pV = constant (T constant)",
                showHyperbola: true,
                showGrid: true,
                showAnnotations: true,
                showFormula: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'vtDiagramCharles': {
            name: "Charles's Law V-T Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "V-T diagram showing Charles's Law: volume proportional to absolute temperature at constant pressure",
            type: 'vt_diagram_charles',
            pressure: 101325,
            moles: 0.01,
            defaultOptions: {
                title: "Charles's Law: V/T = constant (p constant)",
                showLinearGraph: true,
                showAbsoluteZero: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'T (K)',
                yLabel: 'V (m³)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'ptDiagramGayLussac': {
            name: "Gay-Lussac's Law P-T Diagram",
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: "P-T diagram showing Gay-Lussac's Law: pressure proportional to absolute temperature at constant volume",
            type: 'pt_diagram_gay_lussac',
            volume: 0.001,
            moles: 0.01,
            defaultOptions: {
                title: "Gay-Lussac's Law: p/T = constant (V constant)",
                showLinearGraph: true,
                showAbsoluteZero: true,
                showGrid: true,
                showFormula: true,
                xLabel: 'T (K)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'isothermalProcess': {
            name: 'Isothermal Process Diagram',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'P-V diagram showing isothermal processes at different temperatures as a family of hyperbolas',
            type: 'isothermal_process',
            temperatures: [200, 300, 400],
            moles: 0.01,
            defaultOptions: {
                title: 'Isothermal Processes — Family of Curves',
                showMultipleCurves: true,
                showTemperatureLabels: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'combinedGasLaw': {
            name: 'Combined Gas Law Diagram',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'Diagram illustrating the combined gas law pV/T = constant connecting initial and final states',
            type: 'combined_gas_law',
            state1: { p: 100000, V: 0.002, T: 300 },
            state2: { p: 200000, V: 0.001, T: 300 },
            defaultOptions: {
                title: 'Combined Gas Law: p₁V₁/T₁ = p₂V₂/T₂',
                showInitialState: true,
                showFinalState: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'idealGasCubeModel': {
            name: 'Ideal Gas Cube Model',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'Cubic container model of ideal gas showing molecules, pressure from collisions, and kinetic theory',
            type: 'ideal_gas_cube_model',
            numMolecules: 20,
            temperature: 300,
            defaultOptions: {
                title: 'Ideal Gas — Molecular Model',
                showMolecules: true,
                showCollisions: true,
                showPressureArrows: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureVolumeHyperbola': {
            name: 'Pressure-Volume Hyperbola',
            category: 'Thermal Physics',
            subcategory: 'Gas Laws',
            description: 'p vs V hyperbola and p vs 1/V straight line demonstrating inverse proportionality',
            type: 'pressure_volume_hyperbola',
            temperature: 300,
            moles: 0.01,
            defaultOptions: {
                title: 'p-V and p-1/V Graphs',
                showHyperbola: true,
                showLinearGraph: true,
                showGrid: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — KINETIC THEORY (NEW) ===============
        // ============================================================

        'maxwellBoltzmannDistribution': {
            name: 'Maxwell-Boltzmann Distribution',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Maxwell-Boltzmann speed distribution curves showing molecular speed distribution at different temperatures',
            type: 'maxwell_boltzmann_distribution',
            temperatures: [300, 600, 1200],
            molarMass: 0.002,
            defaultOptions: {
                title: 'Maxwell-Boltzmann Speed Distribution',
                showMultipleTemperatures: true,
                showMostProbableSpeed: true,
                showRMSSpeed: true,
                showGrid: true,
                showLabels: true,
                xLabel: 'Speed (m/s)',
                yLabel: 'Number of molecules',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'molecularSpeedDistribution': {
            name: 'Molecular Speed Distribution',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Speed distribution of gas molecules showing mean, most probable, and RMS speeds',
            type: 'molecular_speed_distribution',
            temperature: 300,
            molarMass: 0.028,
            defaultOptions: {
                title: 'Molecular Speed Distribution',
                showDistributionCurve: true,
                showMeanSpeed: true,
                showRMSSpeed: true,
                showMostProbable: true,
                showGrid: true,
                xLabel: 'v (m/s)',
                yLabel: 'f(v)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gasMoleculeCollisions': {
            name: 'Gas Molecule Collisions',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Diagram showing random gas molecule motion, elastic collisions with walls, and pressure generation',
            type: 'gas_molecule_collisions',
            numMolecules: 15,
            containerSize: 300,
            defaultOptions: {
                title: 'Kinetic Theory — Gas Molecule Collisions',
                showRandomMotion: true,
                showWallCollisions: true,
                showVelocityVectors: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pressureDerivationDiagram': {
            name: 'Pressure Derivation Diagram',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Diagram illustrating the derivation of pV = ⅓Nm<c²> showing momentum change at a wall',
            type: 'pressure_derivation_diagram',
            defaultOptions: {
                title: 'Kinetic Theory Pressure Derivation',
                showMolecule: true,
                showMomentumChange: true,
                showForceOnWall: true,
                showFormula: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'temperatureEnergyRelationship': {
            name: 'Temperature-Energy Relationship',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Graph showing mean kinetic energy of gas molecules proportional to absolute temperature',
            type: 'temperature_energy_relationship',
            defaultOptions: {
                title: 'Mean KE vs Absolute Temperature: ½m<c²> = 3/2 kT',
                showLinearGraph: true,
                showFormula: true,
                showAbsoluteZero: true,
                showGrid: true,
                xLabel: 'T (K)',
                yLabel: '½m<c²> (J)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rmsSpeedComparison': {
            name: 'RMS Speed Comparison',
            category: 'Thermal Physics',
            subcategory: 'Kinetic Theory',
            description: 'Bar chart comparing RMS speeds of different gas molecules at the same temperature',
            type: 'rms_speed_comparison',
            gases: [
                { name: 'H₂',  molarMass: 0.002, temperature: 300 },
                { name: 'He',  molarMass: 0.004, temperature: 300 },
                { name: 'N₂',  molarMass: 0.028, temperature: 300 },
                { name: 'O₂',  molarMass: 0.032, temperature: 300 },
                { name: 'CO₂', molarMass: 0.044, temperature: 300 }
            ],
            defaultOptions: {
                title: 'RMS Speed Comparison at 300 K',
                showValues: true,
                showFormula: true,
                showAnnotations: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — LAWS OF THERMODYNAMICS (NEW) =======
        // ============================================================

        'pvDiagramCycles': {
            name: 'P-V Diagram — Thermodynamic Cycles',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram showing a complete thermodynamic cycle with labelled processes',
            type: 'pv_diagram_cycles',
            cycleType: 'rectangular',
            defaultOptions: {
                title: 'P-V Diagram — Thermodynamic Cycle',
                showCycleArea: true,
                showProcessLabels: true,
                showWorkDone: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'carnotCycleDiagram': {
            name: 'Carnot Cycle Diagram',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram of the Carnot cycle showing two isothermals and two adiabatics',
            type: 'carnot_cycle_diagram',
            hotTemperature: 600,
            coldTemperature: 300,
            defaultOptions: {
                title: 'Carnot Cycle on P-V Diagram',
                showIsothermals: true,
                showAdiabatics: true,
                showEfficiency: true,
                showGrid: true,
                showLabels: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'heatEngineSchematic': {
            name: 'Heat Engine Schematic',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Schematic of a heat engine showing heat input from hot reservoir, work output, and heat rejected to cold reservoir',
            type: 'heat_engine_schematic',
            hotTemp: 600,
            coldTemp: 300,
            heatIn: 1000,
            workOut: 500,
            defaultOptions: {
                title: 'Heat Engine Schematic',
                showHotReservoir: true,
                showColdReservoir: true,
                showWorkOutput: true,
                showEfficiency: true,
                showEnergyFlow: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'refrigeratorSchematic': {
            name: 'Refrigerator Schematic',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Schematic of a refrigerator showing work input, heat extracted from cold reservoir, and heat rejected to hot reservoir',
            type: 'refrigerator_schematic',
            hotTemp: 300,
            coldTemp: 250,
            heatExtracted: 600,
            workIn: 200,
            defaultOptions: {
                title: 'Refrigerator Schematic',
                showHotReservoir: true,
                showColdReservoir: true,
                showWorkInput: true,
                showCOP: true,
                showEnergyFlow: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'isothermalVsAdiabatic': {
            name: 'Isothermal vs Adiabatic Process',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram comparing isothermal and adiabatic expansion curves from the same starting point',
            type: 'isothermal_vs_adiabatic',
            temperature: 400,
            moles: 0.1,
            gamma: 1.4,
            defaultOptions: {
                title: 'Isothermal vs Adiabatic Expansion',
                showIsothermal: true,
                showAdiabatic: true,
                showAnnotations: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'entropyIncreaseDiagram': {
            name: 'Entropy Increase Diagram',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'Diagram illustrating the second law of thermodynamics through entropy increase in isolated systems',
            type: 'entropy_increase_diagram',
            defaultOptions: {
                title: 'Second Law — Entropy Increase',
                showOrderedDisordered: true,
                showEntropyArrow: true,
                showExamples: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermodynamicProcessesComparison': {
            name: 'Thermodynamic Processes Comparison',
            category: 'Thermal Physics',
            subcategory: 'Laws of Thermodynamics',
            description: 'P-V diagram showing isothermal, isobaric, isochoric, and adiabatic processes from the same starting state',
            type: 'thermodynamic_processes_comparison',
            initialP: 200000,
            initialV: 0.001,
            initialT: 300,
            defaultOptions: {
                title: 'Comparison of Thermodynamic Processes',
                showIsothermal: true,
                showIsobaric: true,
                showIsochoric: true,
                showAdiabatic: true,
                showLegend: true,
                showGrid: true,
                xLabel: 'V (m³)',
                yLabel: 'p (Pa)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== THERMAL PHYSICS — HEAT TRANSFER (NEW) ================
        // ============================================================

        'conductionDiagram': {
            name: 'Conduction Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Heat conduction through a solid bar showing temperature gradient and energy transfer',
            type: 'conduction_diagram',
            hotTemp: 100,
            coldTemp: 20,
            barLength: 0.5,
            thermalConductivity: 200,
            crossSectionArea: 0.001,
            defaultOptions: {
                title: 'Thermal Conduction Through a Solid',
                showTemperatureGradient: true,
                showHeatFlow: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'convectionCurrents': {
            name: 'Convection Currents Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Diagram showing convection current circulation in a fluid heated from below',
            type: 'convection_currents',
            defaultOptions: {
                title: 'Convection Currents in a Fluid',
                showCirculation: true,
                showHeatSource: true,
                showTemperatureGradient: true,
                showArrows: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'radiationEmission': {
            name: 'Radiation Emission Diagram',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Object emitting thermal radiation as electromagnetic waves showing Stefan-Boltzmann law',
            type: 'radiation_emission',
            temperature: 500,
            emissivity: 0.9,
            defaultOptions: {
                title: 'Thermal Radiation Emission',
                showRadiationWaves: true,
                showTemperature: true,
                showFormula: true,
                showBlackbodyCurve: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermalResistanceLayers': {
            name: 'Thermal Resistance Layers',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Multi-layer wall showing thermal resistance in series and total heat flow',
            type: 'thermal_resistance_layers',
            layers: [
                { material: 'Brick',       thickness: 0.1,   conductivity: 0.7  },
                { material: 'Insulation',  thickness: 0.05,  conductivity: 0.04 },
                { material: 'Plasterboard',thickness: 0.015, conductivity: 0.25 }
            ],
            defaultOptions: {
                title: 'Thermal Resistance of a Composite Wall',
                showLayers: true,
                showTemperatureProfile: true,
                showResistances: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'lesliesCube': {
            name: "Leslie's Cube Diagram",
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: "Leslie's cube showing different surface emissivities and radiation detection",
            type: 'leslies_cube',
            defaultOptions: {
                title: "Leslie's Cube — Surface Emissivity",
                showCubeSurfaces: true,
                showDetector: true,
                showEmissivityComparison: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'thermosFlaskCrossSection': {
            name: 'Thermos Flask Cross Section',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Cross section of a vacuum flask showing features that reduce conduction, convection, and radiation',
            type: 'thermos_flask_cross_section',
            defaultOptions: {
                title: 'Vacuum Flask — Minimising Heat Transfer',
                showVacuumLayer: true,
                showSilveredWalls: true,
                showStopper: true,
                showAnnotations: true,
                showLabels: true,
                width: 700,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'newtonCoolingCurve': {
            name: "Newton's Law of Cooling Curve",
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: "Temperature vs time curve showing Newton's Law of Cooling with exponential decay",
            type: 'newton_cooling_curve',
            initialTemp: 80,
            ambientTemp: 20,
            coolingConstant: 0.05,
            defaultOptions: {
                title: "Newton's Law of Cooling",
                showExponentialDecay: true,
                showAmbientTemperature: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 't (min)',
                yLabel: 'T (°C)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'stefanBoltzmannGraph': {
            name: 'Stefan-Boltzmann Graph',
            category: 'Thermal Physics',
            subcategory: 'Heat Transfer',
            description: 'Power radiated vs temperature graph showing P ∝ T⁴ relationship for a black body',
            type: 'stefan_boltzmann_graph',
            emissivity: 1.0,
            surfaceArea: 1.0,
            defaultOptions: {
                title: 'Stefan-Boltzmann Law: P = σAT⁴',
                showT4Curve: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'T (K)',
                yLabel: 'P (W)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — NUCLEAR STRUCTURE (NEW) ============
        // ============================================================

        'nuclearNotationDiagram': {
            name: 'Nuclear Notation Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Standard nuclear notation diagram showing mass number, proton number, and element symbol',
            type: 'nuclear_notation_diagram',
            element: 'Carbon',
            symbol: 'C',
            massNumber: 12,
            protonNumber: 6,
            defaultOptions: {
                title: 'Nuclear Notation: ᴬ_Z X',
                showMassNumber: true,
                showProtonNumber: true,
                showNeutronNumber: true,
                showLabels: true,
                width: 700,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'isotopeComparison': {
            name: 'Isotope Comparison Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Side-by-side comparison of isotopes showing same proton number but different neutron numbers',
            type: 'isotope_comparison',
            element: 'Carbon',
            isotopes: [
                { massNumber: 12, neutrons: 6 },
                { massNumber: 13, neutrons: 7 },
                { massNumber: 14, neutrons: 8 }
            ],
            defaultOptions: {
                title: 'Carbon Isotopes Comparison',
                showNuclei: true,
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bandOfStability': {
            name: 'Band of Stability',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'N vs Z plot showing the band of stable nuclei and regions of radioactive decay modes',
            type: 'band_of_stability',
            defaultOptions: {
                title: 'Band of Stability — N vs Z',
                showStableBand: true,
                showAlphaRegion: true,
                showBetaMinusRegion: true,
                showBetaPlusRegion: true,
                showN_equals_Z: true,
                showGrid: true,
                xLabel: 'Z (proton number)',
                yLabel: 'N (neutron number)',
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearForcesGraph': {
            name: 'Nuclear Forces Graph',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Potential energy vs separation graph showing nuclear strong force and electrostatic repulsion',
            type: 'nuclear_forces_graph',
            defaultOptions: {
                title: 'Nuclear Force vs Nucleon Separation',
                showStrongForce: true,
                showElectrostaticRepulsion: true,
                showResultant: true,
                showEquilibriumSeparation: true,
                showGrid: true,
                xLabel: 'r (fm)',
                yLabel: 'PE (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearRadiusVsMass': {
            name: 'Nuclear Radius vs Mass Number',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Graph of nuclear radius vs mass number showing R = R₀A^(1/3) relationship',
            type: 'nuclear_radius_vs_mass',
            R0: 1.2e-15,
            defaultOptions: {
                title: 'Nuclear Radius: R = R₀A^(1/3)',
                showCubeRootRelation: true,
                showGrid: true,
                showFormula: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'R (fm)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearDensityDiagram': {
            name: 'Nuclear Density Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Diagram illustrating approximately constant nuclear density across all nuclides',
            type: 'nuclear_density_diagram',
            defaultOptions: {
                title: 'Nuclear Density — Approximately Constant',
                showDensityVsA: true,
                showConstantLine: true,
                showNucleonPacking: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'rutherfordScatteringSetup': {
            name: 'Rutherford Scattering Setup',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Rutherford alpha particle scattering experiment showing source, gold foil, and detector positions',
            type: 'rutherford_scattering_setup',
            defaultOptions: {
                title: 'Rutherford Scattering Experiment',
                showSource: true,
                showGoldFoil: true,
                showDetector: true,
                showScatteringAngles: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'alphaParticleTracks': {
            name: 'Alpha Particle Scattering Tracks',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Structure',
            description: 'Alpha particle trajectories near a gold nucleus showing deflection at different impact parameters',
            type: 'alpha_particle_tracks',
            numTracks: 6,
            defaultOptions: {
                title: 'Alpha Particle Scattering Tracks',
                showNucleus: true,
                showTracks: true,
                showDeflectionAngles: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — RADIOACTIVITY (NEW) ================
        // ============================================================

        'alphaDecayDiagram': {
            name: 'Alpha Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Alpha decay diagram showing parent nucleus emitting alpha particle to form daughter nucleus',
            type: 'alpha_decay_diagram',
            parentSymbol: 'Ra',
            parentZ: 88,
            parentA: 226,
            defaultOptions: {
                title: 'Alpha Decay: ᴬ_Z X → ᴬ⁻⁴_Z₋₂ Y + ⁴_₂He',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showAlphaParticle: true,
                showEquation: true,
                showEnergyRelease: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaMinusDecay': {
            name: 'Beta-Minus Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Beta-minus decay showing neutron converting to proton with emission of electron and antineutrino',
            type: 'beta_minus_decay',
            parentSymbol: 'C',
            parentZ: 6,
            parentA: 14,
            defaultOptions: {
                title: 'β⁻ Decay: n → p + e⁻ + ν̄ₑ',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showElectron: true,
                showAntineutrino: true,
                showQuarkLevel: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'betaPlusDecay': {
            name: 'Beta-Plus Decay Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Beta-plus decay showing proton converting to neutron with emission of positron and neutrino',
            type: 'beta_plus_decay',
            parentSymbol: 'Na',
            parentZ: 11,
            parentA: 22,
            defaultOptions: {
                title: 'β⁺ Decay: p → n + e⁺ + νₑ',
                showParentNucleus: true,
                showDaughterNucleus: true,
                showPositron: true,
                showNeutrino: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'gammaEmission': {
            name: 'Gamma Emission Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Gamma emission from excited nucleus showing energy level transition and photon release',
            type: 'gamma_emission',
            defaultOptions: {
                title: 'Gamma Emission — Nuclear De-excitation',
                showExcitedState: true,
                showGroundState: true,
                showGammaPhoton: true,
                showEnergyLevelDrop: true,
                showEquation: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'decayCurveExponential': {
            name: 'Radioactive Decay Curve',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Exponential decay curve of number of undecayed nuclei vs time',
            type: 'decay_curve_exponential',
            halfLife: 5.27,
            initialN: 1000,
            defaultOptions: {
                title: 'Radioactive Decay: N = N₀e^(−λt)',
                showExponentialCurve: true,
                showHalfLives: true,
                showGrid: true,
                showFormula: true,
                xLabel: 't (years)',
                yLabel: 'N (undecayed nuclei)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'halfLifeGraph': {
            name: 'Half-Life Graph',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Decay curve with half-life intervals clearly marked showing successive halving',
            type: 'half_life_graph',
            halfLife: 3.8,
            initialN: 800,
            defaultOptions: {
                title: 'Half-Life — Successive Halving',
                showHalfLifeMarkers: true,
                showHalfingLines: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 't (days)',
                yLabel: 'N',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'activityVsTime': {
            name: 'Activity vs Time Graph',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Radioactive activity vs time showing exponential decrease A = A₀e^(−λt)',
            type: 'activity_vs_time',
            halfLife: 5.0,
            initialActivity: 1000,
            defaultOptions: {
                title: 'Activity vs Time: A = A₀e^(−λt)',
                showExponentialCurve: true,
                showHalfLives: true,
                showGrid: true,
                showFormula: true,
                xLabel: 't (years)',
                yLabel: 'A (Bq)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'penetrationComparison': {
            name: 'Radiation Penetration Comparison',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Diagram comparing penetrating power of alpha, beta, and gamma radiation through different materials',
            type: 'penetration_comparison',
            defaultOptions: {
                title: 'Penetrating Power of α, β, and γ Radiation',
                showAlpha: true,
                showBeta: true,
                showGamma: true,
                showMaterials: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'ionisationTracks': {
            name: 'Ionisation Tracks',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Cloud chamber tracks showing characteristic paths of alpha, beta, and gamma radiation',
            type: 'ionisation_tracks',
            defaultOptions: {
                title: 'Cloud Chamber Tracks',
                showAlphaTrack: true,
                showBetaTrack: true,
                showGammaTrack: true,
                showAnnotations: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#1a1a2e'
            }
        },

        'backgroundRadiationSources': {
            name: 'Background Radiation Sources',
            category: 'Nuclear Physics',
            subcategory: 'Radioactivity',
            description: 'Pie chart showing sources of background radiation in the UK',
            type: 'background_radiation_sources',
            sources: [
                { label: 'Radon gas',         percentage: 50 },
                { label: 'Medical',           percentage: 15 },
                { label: 'Ground & buildings',percentage: 14 },
                { label: 'Food & drink',      percentage: 12 },
                { label: 'Cosmic rays',       percentage: 10 },
                { label: 'Nuclear industry',  percentage:  1 },
                { label: 'Other',             percentage:  1 }
            ],
            defaultOptions: {
                title: 'Sources of Background Radiation',
                showPieChart: true,
                showPercentages: true,
                showLegend: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — NUCLEAR REACTIONS (NEW) ============
        // ============================================================

        'massDefectDiagram': {
            name: 'Mass Defect Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Diagram showing mass defect as difference between sum of nucleon masses and actual nuclear mass',
            type: 'mass_defect_diagram',
            element: 'Helium-4',
            protons: 2,
            neutrons: 2,
            actualMass: 4.002602,
            defaultOptions: {
                title: 'Mass Defect: Δm = Zm_p + Nm_n − M',
                showNucleonMasses: true,
                showNuclearMass: true,
                showMassDefect: true,
                showFormula: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyCurve': {
            name: 'Binding Energy Curve',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Total binding energy vs mass number showing iron peak',
            type: 'binding_energy_curve',
            defaultOptions: {
                title: 'Nuclear Binding Energy vs Mass Number',
                showCurve: true,
                showIronPeak: true,
                showGrid: true,
                xLabel: 'A (mass number)',
                yLabel: 'Binding Energy (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyPerNucleon': {
            name: 'Binding Energy per Nucleon Curve',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Binding energy per nucleon vs mass number showing iron-56 as most stable nucleus',
            type: 'binding_energy_per_nucleon',
            defaultOptions: {
                title: 'Binding Energy per Nucleon vs Mass Number',
                showCurve: true,
                showFe56Peak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'BE/A (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'einsteinMassEnergy': {
            name: 'Einstein Mass-Energy Equivalence',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Diagram illustrating E = mc² and its application to mass defect and binding energy',
            type: 'einstein_mass_energy',
            defaultOptions: {
                title: 'Mass-Energy Equivalence: E = mc²',
                showFormula: true,
                showMassDefectLink: true,
                showEnergyScale: true,
                showConversionFactor: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearEquationBalancing': {
            name: 'Nuclear Equation Balancing',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Nuclear equation with conservation of mass number and proton number illustrated',
            type: 'nuclear_equation_balancing',
            reactionType: 'alpha_decay',
            parentA: 238,
            parentZ: 92,
            parentSymbol: 'U',
            defaultOptions: {
                title: 'Balancing Nuclear Equations',
                showConservationRules: true,
                showMassNumbers: true,
                showProtonNumbers: true,
                showEquation: true,
                showLabels: true,
                width: 900,
                height: 500,
                backgroundColor: '#ffffff'
            }
        },

        'qValueDiagram': {
            name: 'Q-Value Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Energy level diagram showing Q-value as energy released or absorbed in a nuclear reaction',
            type: 'q_value_diagram',
            qValue: 4.8,
            defaultOptions: {
                title: 'Q-Value of a Nuclear Reaction',
                showReactantEnergy: true,
                showProductEnergy: true,
                showQValue: true,
                showFormula: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'energyLevelTransitions': {
            name: 'Nuclear Energy Level Transitions',
            category: 'Nuclear Physics',
            subcategory: 'Nuclear Reactions',
            description: 'Nuclear energy level diagram showing transitions with gamma ray emission',
            type: 'energy_level_transitions',
            levels: [
                { energy: 0,    label: 'Ground state' },
                { energy: 1.17, label: 'First excited' },
                { energy: 2.51, label: 'Second excited' }
            ],
            defaultOptions: {
                title: 'Nuclear Energy Level Transitions',
                showEnergyLevels: true,
                showTransitionArrows: true,
                showGammaEnergies: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — FISSION & FUSION (NEW) =============
        // ============================================================

        'fissionProcessDiagram': {
            name: 'Nuclear Fission Process',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Diagram showing neutron-induced fission of uranium-235 producing daughter nuclei, neutrons, and energy',
            type: 'fission_process_diagram',
            parentA: 235,
            parentZ: 92,
            parentSymbol: 'U',
            defaultOptions: {
                title: 'Neutron-Induced Fission of U-235',
                showIncidentNeutron: true,
                showCompoundNucleus: true,
                showFissionFragments: true,
                showNeutronRelease: true,
                showEnergyRelease: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'chainReactionBranching': {
            name: 'Chain Reaction Branching Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Branching diagram of nuclear chain reaction showing neutron multiplication',
            type: 'chain_reaction_branching',
            generations: 4,
            defaultOptions: {
                title: 'Nuclear Chain Reaction',
                showBranchingTree: true,
                showNeutronMultiplication: true,
                showCriticalMass: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'nuclearReactorSchematic': {
            name: 'Nuclear Reactor Schematic',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Schematic diagram of a nuclear reactor showing core components and energy conversion',
            type: 'nuclear_reactor_schematic',
            defaultOptions: {
                title: 'Nuclear Fission Reactor — Schematic',
                showFuelRods: true,
                showControlRods: true,
                showModerator: true,
                showCoolant: true,
                showHeatExchanger: true,
                showTurbine: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pwrReactorDiagram': {
            name: 'PWR Reactor Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Pressurised Water Reactor diagram showing primary and secondary cooling circuits',
            type: 'pwr_reactor_diagram',
            defaultOptions: {
                title: 'Pressurised Water Reactor (PWR)',
                showPrimaryCircuit: true,
                showSecondaryCircuit: true,
                showSteamGenerator: true,
                showTurbineGenerator: true,
                showLabels: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'controlRodMechanism': {
            name: 'Control Rod Mechanism',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Reactor core diagram showing control rod insertion and withdrawal to regulate neutron flux',
            type: 'control_rod_mechanism',
            defaultOptions: {
                title: 'Control Rod Mechanism in a Reactor',
                showFuelRods: true,
                showControlRods: true,
                showInsertedPosition: true,
                showWithdrawnPosition: true,
                showNeutronFlux: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'fusionCoulombBarrier': {
            name: 'Fusion Coulomb Barrier',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Potential energy vs separation for two nuclei showing Coulomb barrier that must be overcome for fusion',
            type: 'fusion_coulomb_barrier',
            Z1: 1,
            Z2: 1,
            defaultOptions: {
                title: 'Coulomb Barrier for Nuclear Fusion',
                showCoulombRepulsion: true,
                showStrongAttraction: true,
                showBarrierPeak: true,
                showTunnelingArrow: true,
                showGrid: true,
                xLabel: 'r (fm)',
                yLabel: 'PE (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'dtFusionReaction': {
            name: 'D-T Fusion Reaction Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Deuterium-tritium fusion reaction showing reactants, products, and energy release',
            type: 'dt_fusion_reaction',
            defaultOptions: {
                title: 'D-T Fusion: ²H + ³H → ⁴He + n + 17.6 MeV',
                showDeuterium: true,
                showTritium: true,
                showHelium4: true,
                showNeutron: true,
                showEnergyRelease: true,
                showEquation: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'tokamakDiagram': {
            name: 'Tokamak Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Cross-section of a tokamak fusion reactor showing plasma confinement by magnetic fields',
            type: 'tokamak_diagram',
            defaultOptions: {
                title: 'Tokamak — Magnetic Confinement Fusion',
                showToroidalShape: true,
                showMagneticCoils: true,
                showPlasma: true,
                showFieldLines: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'stellarFusionCycle': {
            name: 'Stellar Fusion Cycle',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Proton-proton chain reaction in stars showing hydrogen fusion to helium with energy release',
            type: 'stellar_fusion_cycle',
            defaultOptions: {
                title: 'Proton-Proton Chain in Stars',
                showReactionSteps: true,
                showParticlesEmitted: true,
                showEnergyRelease: true,
                showLabels: true,
                width: 900,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'bindingEnergyFissionFusion': {
            name: 'Binding Energy — Fission and Fusion',
            category: 'Nuclear Physics',
            subcategory: 'Fission & Fusion',
            description: 'Binding energy per nucleon curve annotated to show energy release regions for fission and fusion',
            type: 'binding_energy_fission_fusion',
            defaultOptions: {
                title: 'BE/A Curve — Fission and Fusion Energy Release',
                showCurve: true,
                showFissionArrow: true,
                showFusionArrow: true,
                showFe56Peak: true,
                showEnergyReleaseShading: true,
                showGrid: true,
                showAnnotations: true,
                xLabel: 'A (mass number)',
                yLabel: 'BE/A (MeV)',
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        // ============================================================
        // ===== NUCLEAR PHYSICS — PARTICLE PHYSICS (NEW) =============
        // ============================================================

        'standardModelTable': {
            name: 'Standard Model Table',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Table of fundamental particles in the Standard Model showing quarks, leptons, and bosons',
            type: 'standard_model_table',
            defaultOptions: {
                title: 'The Standard Model of Particle Physics',
                showQuarks: true,
                showLeptons: true,
                showGaugeBosons: true,
                showHiggs: true,
                showCharges: true,
                showMasses: true,
                width: 1000,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'quarkComposition': {
            name: 'Quark Composition Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagrams showing quark composition of proton (uud) and neutron (udd)',
            type: 'quark_composition',
            particles: [
                { name: 'Proton',  quarks: ['u', 'u', 'd'], charge: +1 },
                { name: 'Neutron', quarks: ['u', 'd', 'd'], charge:  0 }
            ],
            defaultOptions: {
                title: 'Quark Composition of Proton and Neutron',
                showQuarks: true,
                showCharges: true,
                showColourCharge: false,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'hadronClassification': {
            name: 'Hadron Classification Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Classification tree showing hadrons divided into baryons and mesons with examples',
            type: 'hadron_classification',
            defaultOptions: {
                title: 'Hadron Classification',
                showBaryons: true,
                showMesons: true,
                showQuarkContent: true,
                showExamples: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'feynmanDiagramBetaDecay': {
            name: 'Feynman Diagram — Beta Decay',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Feynman diagram for beta-minus decay showing d quark → u quark via W⁻ boson',
            type: 'feynman_diagram_beta_decay',
            decayType: 'beta_minus',
            defaultOptions: {
                title: 'Feynman Diagram — β⁻ Decay',
                showQuarkLines: true,
                showWBoson: true,
                showLeptons: true,
                showVertices: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#ffffff'
            }
        },

        'pairProductionDiagram': {
            name: 'Pair Production Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagram showing gamma photon converting to electron-positron pair near a nucleus',
            type: 'pair_production_diagram',
            photonEnergy: 1.022,
            defaultOptions: {
                title: 'Pair Production: γ → e⁻ + e⁺',
                showGammaPhoton: true,
                showElectron: true,
                showPositron: true,
                showNucleus: true,
                showEnergyCondition: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'annihilationDiagram': {
            name: 'Annihilation Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Diagram showing electron-positron annihilation producing two gamma photons',
            type: 'annihilation_diagram',
            defaultOptions: {
                title: 'Annihilation: e⁻ + e⁺ → 2γ',
                showElectron: true,
                showPositron: true,
                showGammaPhotons: true,
                showEnergyConservation: true,
                showLabels: true,
                width: 900,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'exchangeParticleDiagram': {
            name: 'Exchange Particle Diagram',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Feynman-style diagram showing force mediated by exchange of a virtual boson between two particles',
            type: 'exchange_particle_diagram',
            forceType: 'weak',
            defaultOptions: {
                title: 'Force via Exchange Particle',
                showIncomingParticles: true,
                showExchangeParticle: true,
                showOutgoingParticles: true,
                showForceType: true,
                showLabels: true,
                width: 800,
                height: 600,
                backgroundColor: '#ffffff'
            }
        },

        'particleTracksCloudChamber': {
            name: 'Particle Tracks — Cloud Chamber',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Cloud chamber image showing characteristic curved tracks of different particles in a magnetic field',
            type: 'particle_tracks_cloud_chamber',
            magneticField: 0.5,
            defaultOptions: {
                title: 'Particle Tracks in a Cloud Chamber',
                showAlphaTrack: true,
                showBetaTrack: true,
                showProtonTrack: true,
                showMagneticField: true,
                showLabels: true,
                width: 800,
                height: 700,
                backgroundColor: '#1a1a2e'
            }
        },

        'baryonMesonDistinction': {
            name: 'Baryon vs Meson Distinction',
            category: 'Nuclear Physics',
            subcategory: 'Particle Physics',
            description: 'Comparison diagram showing baryons (3 quarks) and mesons (quark-antiquark pair)',
            type: 'baryon_meson_distinction',
            defaultOptions: {
                title: 'Baryons vs Mesons',
                showBaryonStructure: true,
                showMesonStructure: true,
                showQuarkContent: true,
                showExamples: true,
                showCharges: true,
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
