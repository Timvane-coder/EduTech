
// ==================== MECHANICS GENERATORS WITH DIAGRAMS ====================

generateRelatedKinematics1DDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    

    // NEW: Problem with velocity-time graph
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Motion Analysis with v-t Graph',
        problem: 'Analyze the velocity-time graph showing a car that accelerates for 2s to 10 m/s, travels at constant velocity for 3s, then decelerates to rest in 2s. Find total displacement.',
        parameters: {
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ]
        },
        type: 'kinematics_1d',
        subparts: [
            'Displacement = area under v-t graph',
            'Phase 1 (0-2s): Triangle area = ½ × 2 × 10 = 10 m',
            'Phase 2 (2-5s): Rectangle area = 3 × 10 = 30 m',
            'Phase 3 (5-7s): Triangle area = ½ × 2 × 10 = 10 m',
            'Total displacement = 10 + 30 + 10 = 50 m'
        ],
        helper: 'Area under v-t graph gives displacement; Slope of v-t graph gives acceleration',
        realWorldContext: 'Trip analysis using graphs',
        diagramInfo: {
            type: 'motion_graphs',
            registryKey: 'motionGraphs',
            renderOptions: {
                graphType: 'velocity-time',
                segments: [
                    { time: 0, value: 0, label: 'Rest' },
                    { time: 2, value: 10, label: 'Accelerating' },
                    { time: 5, value: 10, label: 'Constant velocity' },
                    { time: 7, value: 0, label: 'Decelerating' }
                ],
                showArea: true,
                showSlope: true,
                showGrid: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_motion_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedKinematics2DDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Vector Addition in 2D Motion',
        problem: 'A boat travels 40 m east, then 30 m north. Find the resultant displacement vector and direction.',
        parameters: {
            vectors: [
                { x: 40, y: 0, label: 'East', color: '#E74C3C' },
                { x: 0, y: 30, label: 'North', color: '#3498DB' }
            ],
            showResultant: true
        },
        type: 'kinematics_2d',
        subparts: [
            'Draw displacement vectors tip-to-tail',
            'Resultant magnitude: R = √(40² + 30²) = √(1600 + 900) = 50 m',
            'Direction: θ = tan⁻¹(30/40) = tan⁻¹(0.75) = 36.9° north of east',
            'Resultant: 50 m at 36.9° from east'
        ],
        helper: 'Use Pythagorean theorem for magnitude; Use tan⁻¹(y/x) for angle',
        realWorldContext: 'Navigation and displacement problems',
        diagramInfo: {
            type: 'vector_diagram',
            registryKey: 'vectorDiagram',
            renderOptions: {
                vectors: [
                    { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                    { x: 30, y: -20, label: 'B', color: '#3498DB' }
                ],
                showComponents: true,
                showResultant: true,
                showGrid: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_vector_diagram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedProjectileMotionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Projectile Motion Trajectory',
        problem: 'A ball is thrown at 20 m/s at 45° above horizontal. Draw the trajectory and find maximum height and range. (g = 10 m/s²)',
        parameters: {
            initialVelocity: 20,
            launchAngle: 45,
            gravity: 10
        },
        type: 'projectile_motion',
        subparts: [
            'Horizontal component: vₓ = 20 cos(45°) = 14.14 m/s',
            'Vertical component: vᵧ = 20 sin(45°) = 14.14 m/s',
            'Maximum height: H = vᵧ²/(2g) = (14.14)²/20 = 10 m',
            'Time of flight: T = 2vᵧ/g = 2(14.14)/10 = 2.83 s',
            'Range: R = vₓ × T = 14.14 × 2.83 = 40 m'
        ],
        helper: 'Horizontal motion: uniform velocity; Vertical motion: uniformly accelerated (a = -g)',
        realWorldContext: 'Sports projectiles, ballistics',
        diagramInfo: {
            type: 'projectile_motion',
            registryKey: 'projectileMotion',
            renderOptions: {
                initialVelocity: 20,
                launchAngle: 45,
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_projectile_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedNewtonsLawsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Free Body Diagram Analysis',
        problem: 'A 5 kg box rests on a table. Draw the free body diagram showing all forces. If a 20 N horizontal force is applied, find acceleration.',
        parameters: {
            mass: 5,
            appliedForce: 20,
            forces: [
                { name: 'Weight', magnitude: 49, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 49, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 20, angle: 0, color: '#2ECC71' }
            ]
        },
        type: 'newtons_laws',
        subparts: [
            'Weight: W = mg = 5 × 9.8 = 49 N (downward)',
            'Normal force: N = 49 N (upward)',
            'Applied force: F = 20 N (horizontal)',
            'Net force: Fₙₑₜ = 20 N (horizontal)',
            'Acceleration: a = F/m = 20/5 = 4 m/s²'
        ],
        helper: 'Newton\'s 2nd Law: F = ma; Forces in equilibrium: ΣF = 0',
        realWorldContext: 'Understanding forces on objects',
        diagramInfo: {
            type: 'free_body_diagram',
            registryKey: 'freeBodyDiagram',
            renderOptions: {
                forces: [
                    { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                    { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                    { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
                ],
                showLabels: true,
                showMagnitudes: true,
                showAngles: false
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_free_body_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedFrictionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Friction on Inclined Plane',
        problem: 'A 10 kg box rests on a 30° incline. Draw forces and find friction force if μₛ = 0.4. (g = 10 m/s²)',
        parameters: {
            mass: 10,
            angle: 30,
            frictionCoeff: 0.4,
            includeComponents: true
        },
        type: 'friction',
        subparts: [
            'Weight: W = mg = 10 × 10 = 100 N',
            'Component parallel to incline: W∥ = mg sin(30°) = 100 × 0.5 = 50 N',
            'Component perpendicular: W⊥ = mg cos(30°) = 100 × 0.866 = 86.6 N',
            'Normal force: N = W⊥ = 86.6 N',
            'Maximum static friction: fₛ = μₛN = 0.4 × 86.6 = 34.6 N',
            'Since W∥ (50N) > fₛ (34.6N), box will slide'
        ],
        helper: 'Resolve weight into components; Normal force N = W⊥; Friction f = μN',
        realWorldContext: 'Objects on slopes and ramps',
        diagramInfo: {
            type: 'inclined_plane',
            registryKey: 'inclinedPlane',
            renderOptions: {
                angle: 30,
                mass: 10,
                showForceComponents: true,
                showAngles: true,
                showFriction: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_inclined_plane_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCircularMotionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Centripetal Force in Circular Motion',
        problem: 'A 2 kg ball moves in a circle of radius 1.5 m at 6 m/s. Draw the motion and find centripetal force and acceleration.',
        parameters: {
            mass: 2,
            radius: 1.5,
            velocity: 6
        },
        type: 'circular_motion',
        subparts: [
            'Centripetal acceleration: aᴄ = v²/r = 6²/1.5 = 36/1.5 = 24 m/s²',
            'Centripetal force: Fᴄ = maᴄ = 2 × 24 = 48 N',
            'Direction: Always toward center of circle',
            'Velocity is tangent to circle, acceleration points to center'
        ],
        helper: 'Centripetal force: Fᴄ = mv²/r; Centripetal acceleration: aᴄ = v²/r',
        realWorldContext: 'Cars turning corners, satellites orbiting',
        diagramInfo: {
            type: 'circular_motion',
            registryKey: 'circularMotion',
            renderOptions: {
                radius: 100,
                velocity: 15,
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_circular_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWorkEnergyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Work-Energy Transformation',
        problem: 'A 5 kg object slides down from 10 m height. Initial KE = 0, find final KE and velocity at bottom. Show energy transformation. (g = 10 m/s²)',
        parameters: {
            mass: 5,
            height: 10,
            initialKE: 0,
            initialPE: 500,
            finalKE: 500,
            finalPE: 0
        },
        type: 'work_energy',
        subparts: [
            'Initial PE: PEᵢ = mgh = 5 × 10 × 10 = 500 J',
            'Initial KE: KEᵢ = 0 J (starts from rest)',
            'Final PE: PEf = 0 J (at ground level)',
            'By conservation: KEf = PEᵢ = 500 J',
            'Final velocity: ½mv² = 500 → v = √(2×500/5) = √200 = 14.14 m/s'
        ],
        helper: 'Conservation of energy: KEᵢ + PEᵢ = KEf + PEf; PE = mgh; KE = ½mv²',
        realWorldContext: 'Energy conversion in falling objects, roller coasters',
        diagramInfo: {
            type: 'work_energy_chart',
            registryKey: 'workEnergyBarChart',
            renderOptions: {
                initialKE: 0,
                initialPE: 500,
                finalKE: 500,
                finalPE: 0,
                workDone: 0,
                showValues: true,
                showTotal: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_work_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMomentumCollisionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Elastic Collision Analysis',
        problem: 'Two carts collide: Cart A (2 kg, 5 m/s) hits Cart B (3 kg, -3 m/s). Show before/after and find final velocities in elastic collision.',
        parameters: {
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ]
        },
        type: 'momentum_collisions',
        subparts: [
            'Initial momentum: pᵢ = m₁v₁ + m₂v₂ = 2(5) + 3(-3) = 10 - 9 = 1 kg·m/s',
            'Initial KE: KEᵢ = ½(2)(5²) + ½(3)(-3²) = 25 + 13.5 = 38.5 J',
            'For elastic collision: Both momentum and KE conserved',
            'Using elastic collision formulas:',
            'v₁f = [(m₁-m₂)v₁ + 2m₂v₂]/(m₁+m₂) = [(2-3)(5) + 2(3)(-3)]/(5) = -5.8 m/s',
            'v₂f = [(m₂-m₁)v₂ + 2m₁v₁]/(m₁+m₂) = [(3-2)(-3) + 2(2)(5)]/(5) = 3.4 m/s'
        ],
        helper: 'Momentum: p = mv; Elastic: both p and KE conserved; Inelastic: only p conserved',
        realWorldContext: 'Collisions in sports, car crashes',
        diagramInfo: {
            type: 'momentum_collision',
            registryKey: 'momentumCollision',
            renderOptions: {
                collisionType: 'elastic',
                objects: [
                    { mass: 2, velocity: 5, color: '#E74C3C' },
                    { mass: 3, velocity: -3, color: '#3498DB' }
                ],
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_collision_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRotationalMotionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Torque on a Lever',
        problem: 'A 2 m lever has fulcrum at 0.6 m from left end. 50 N force applied at left end, find force needed at right end for balance.',
        parameters: {
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30
        },
        type: 'rotational_motion',
        subparts: [
            'Left moment arm: r₁ = 0.6 m',
            'Right moment arm: r₂ = 2 - 0.6 = 1.4 m',
            'For equilibrium: τ₁ = τ₂',
            'F₁ × r₁ = F₂ × r₂',
            '50 × 0.6 = F₂ × 1.4',
            'F₂ = 30/1.4 = 21.4 N'
        ],
        helper: 'Torque: τ = rF sin(θ); For equilibrium: Στ = 0',
        realWorldContext: 'Seesaws, crowbars, door handles',
        diagramInfo: {
            type: 'torque_lever',
            registryKey: 'torqueLeverDiagram',
            renderOptions: {
                leverLength: 200,
                fulcrumPosition: 0.3,
                force1: 50,
                force2: 30,
                showMomentArms: true,
                showForces: true,
                showRotation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_torque_lever_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simple Harmonic Motion - Spring',
        problem: 'A 2 kg mass on spring (k = 100 N/m) oscillates with amplitude 0.5 m. Find period, frequency, and maximum velocity.',
        parameters: {
            mass: 2,
            springConstant: 100,
            amplitude: 0.5
        },
        type: 'rotational_motion',
        subparts: [
            'Period: T = 2π√(m/k) = 2π√(2/100) = 2π√0.02 = 0.89 s',
            'Frequency: f = 1/T = 1/0.89 = 1.12 Hz',
            'Angular frequency: ω = √(k/m) = √(100/2) = 7.07 rad/s',
            'Maximum velocity: vₘₐₓ = Aω = 0.5 × 7.07 = 3.54 m/s',
            'Maximum velocity occurs at equilibrium position'
        ],
        helper: 'SHM: T = 2π√(m/k), vₘₐₓ = Aω, aₘₐₓ = Aω²',
        realWorldContext: 'Mass-spring systems, oscillations',
        diagramInfo: {
            type: 'spring_harmonic',
            registryKey: 'springHarmonicMotion',
            renderOptions: {
                amplitude: 50,
                springConstant: 10,
                mass: 2,
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_spring_harmonic_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

const EndSection1 = "close";