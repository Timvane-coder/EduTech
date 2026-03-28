Here are all the updated generators with async diagram generation:
generateRelatedKinematics1DDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_motion_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_vector_diagram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_projectile_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_free_body_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_inclined_plane_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_circular_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_work_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_collision_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_torque_lever_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
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
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_spring_harmonic_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectrostaticsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coulomb\'s Law',
        problem: 'Two charges +3 μC and -5 μC separated by 0.2 m. Find force between them. (k = 9×10⁹ N·m²/C²)',
        parameters: { q1: 3e-6, q2: -5e-6, distance: 0.2, k: 9e9, findForce: true },
        type: 'electrostatics',
        subparts: [
            'Coulomb\'s Law: F = k|q₁q₂|/r²',
            'Calculate: F = 9×10⁹ × |3×10⁻⁶ × (-5×10⁻⁶)| / (0.2)²',
            'F = 9×10⁹ × 15×10⁻¹² / 0.04',
            'F = 135×10⁻³ / 0.04 = 3.375 N',
            'Force is attractive (opposite charges)'
        ],
        helper: 'Coulomb\'s Law: F = k|q₁q₂|/r², k = 8.99×10⁹ N·m²/C²',
        realWorldContext: 'Electrostatic forces between charges'
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Field Line Pattern',
        problem: 'Draw electric field lines for a +Q and -Q charge separated by distance d. Describe the field pattern.',
        parameters: {
            charges: [
                { x: -100, y: 0, charge: 1, label: '+Q' },
                { x: 100, y: 0, charge: -1, label: '-Q' }
            ]
        },
        type: 'electrostatics',
        subparts: [
            'Field lines start on positive charge, end on negative charge',
            'Lines never cross each other',
            'Density of lines indicates field strength',
            'Strong field between charges',
            'Field pattern shows dipole configuration',
            'Electric field points from + to -'
        ],
        helper: 'Field lines show direction of force on positive test charge',
        realWorldContext: 'Understanding electric fields, dipoles',
        diagramInfo: {
            type: 'electric_field',
            registryKey: 'electricFieldLines',
            renderOptions: {
                charges: [
                    { x: -100, y: 0, charge: 1, label: '+Q' },
                    { x: 100, y: 0, charge: -1, label: '-Q' }
                ],
                showCharges: true,
                showFieldLines: true,
                numLines: 16
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_electric_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricFieldsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential vs Distance',
        problem: 'A point charge Q = 10 μC creates an electric potential. Draw V vs r graph and find potential at r = 2 m.',
        parameters: {
            chargeQ: 10
        },
        type: 'electric_fields',
        subparts: [
            'Electric potential: V = kQ/r',
            'At r = 2 m: V = (9×10⁹)(10×10⁻⁶)/2',
            'V = 90,000/2 = 45,000 V',
            'Potential decreases as 1/r (inverse relationship)',
            'Potential is scalar (no direction)',
            'V → 0 as r → ∞'
        ],
        helper: 'Electric potential: V = kQ/r; Electric field: E = kQ/r²',
        realWorldContext: 'Voltage around charged objects',
        diagramInfo: {
            type: 'potential_distance',
            registryKey: 'potentialDistanceGraph',
            renderOptions: {
                chargeQ: 10,
                showFieldStrength: false,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_potential_distance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedACCircuitsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'AC Voltage and Current',
        problem: 'Draw AC voltage waveform with Vₘₐₓ = 170 V, f = 60 Hz. Calculate RMS voltage and period.',
        parameters: {
            vMax: 170,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'AC voltage: V(t) = Vₘₐₓ sin(2πft)',
            'Peak voltage: Vₘₐₓ = 170 V',
            'RMS voltage: Vᵣₘₛ = Vₘₐₓ/√2 = 170/1.414 = 120 V',
            'Period: T = 1/f = 1/60 = 0.0167 s = 16.7 ms',
            'Angular frequency: ω = 2πf = 377 rad/s',
            'RMS value is effective DC equivalent'
        ],
        helper: 'AC: Vᵣₘₛ = Vₘₐₓ/√2, Iᵣₘₛ = Iₘₐₓ/√2; Period T = 1/f',
        realWorldContext: 'Household electricity (120V RMS, 60 Hz)',
        diagramInfo: {
            type: 'ac_waveform',
            registryKey: 'acVoltageWaveform',
            renderOptions: {
                vMax: 170,
                frequency: 60,
                showRMS: true,
                showPeriod: true,
                showPhase: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_ac_waveform_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'RLC Circuit Impedance',
        problem: 'AC circuit with R=100Ω, L=0.5H, C=10μF at f=60Hz. Draw phasor diagram and find impedance.',
        parameters: {
            resistance: 100,
            inductance: 0.5,
            capacitance: 10e-6,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'Angular frequency: ω = 2πf = 2π(60) = 377 rad/s',
            'Inductive reactance: Xₗ = ωL = 377 × 0.5 = 188.5 Ω',
            'Capacitive reactance: Xᴄ = 1/(ωC) = 1/(377×10×10⁻⁶) = 265 Ω',
            'Net reactance: X = Xₗ - Xᴄ = 188.5 - 265 = -76.5 Ω',
            'Impedance: Z = √(R² + X²) = √(100² + 76.5²) = 126 Ω',
            'Phase angle: φ = tan⁻¹(X/R) = tan⁻¹(-76.5/100) = -37.4°',
            'Current leads voltage (capacitive circuit)'
        ],
        helper: 'Impedance: Z = √(R² + (Xₗ - Xᴄ)²); Xₗ = ωL, Xᴄ = 1/(ωC)',
        realWorldContext: 'AC power systems, filters, resonance',
        diagramInfo: {
            type: 'rlc_circuit',
            registryKey: 'rlcCircuitDiagram',
            renderOptions: {
                resistance: 100,
                inductance: 0.5,
                capacitance: 10e-6,
                frequency: 60,
                showPhasorDiagram: true,
                showImpedance: true,
                showPhase: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_rlc_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Resonance in AC Circuits',
        problem: 'LC circuit with L=0.1H, C=100μF. Draw resonance curve and find resonant frequency.',
        parameters: {
            inductance: 0.1,
            capacitance: 100e-6
        },
        type: 'ac_circuits',
        subparts: [
            'Resonance occurs when Xₗ = Xᴄ',
            'At resonance: ωL = 1/(ωC)',
            'ω² = 1/(LC)',
            'ω = 1/√(LC) = 1/√(0.1 × 100×10⁻⁶)',
            'ω = 1/√(10⁻⁵) = 316.2 rad/s',
            'Resonant frequency: f₀ = ω/(2π) = 316.2/(2π) = 50.3 Hz',
            'At resonance: Z = R (minimum), maximum current'
        ],
        helper: 'Resonance: f₀ = 1/(2π√LC); Z minimum, current maximum',
        realWorldContext: 'Radio tuning, filters, oscillators',
        diagramInfo: {
            type: 'resonance_curve',
            registryKey: 'acResonanceCurve',
            renderOptions: {
                inductance: 0.1,
                capacitance: 100e-6,
                showResonantFrequency: true,
                showBandwidth: true,
                showQFactor: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_ac_resonance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricPotentialDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Equipotential Lines',
        problem: 'Draw equipotential lines around +Q and -Q charges separated by distance d. Show relationship to electric field.',
        parameters: {
            charges: [
                { q: 1, x: -50, y: 0, label: '+Q' },
                { q: -1, x: 50, y: 0, label: '-Q' }
            ]
        },
        type: 'electric_potential',
        subparts: [
            'Equipotential lines: surfaces of constant potential',
            'Electric field perpendicular to equipotential lines',
            'Lines closer together → stronger field',
            'Potential: V = kQ/r (point charge)',
            'Between charges: potential varies continuously',
            'No work done moving charge along equipotential',
            'Field points from high to low potential'
        ],
        helper: 'Equipotentials: ⊥ to E field; E = -∇V (field = negative gradient of potential)',
        realWorldContext: 'Understanding electric fields and potential energy',
        diagramInfo: {
            type: 'equipotential_lines',
            registryKey: 'equipotentialLinesDiagram',
            renderOptions: {
                charges: [
                    { q: 1, x: -50, y: 0, label: '+Q' },
                    { q: -1, x: 50, y: 0, label: '-Q' }
                ],
                showEquipotentials: true,
                showFieldLines: true,
                showValues: true,
                numEquipotentials: 10
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_equipotential_lines_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential Energy',
        problem: 'Two charges +2μC and +3μC are 0.5 m apart. Find potential energy of the system and work to bring them to 0.2 m apart.',
        parameters: {
            q1: 2e-6,
            q2: 3e-6,
            r1: 0.5,
            r2: 0.2,
            k: 9e9
        },
        type: 'electric_potential',
        subparts: [
            'Electric potential energy: U = kq₁q₂/r',
            'Initial: U₁ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.5',
            'U₁ = 54×10⁻³/0.5 = 0.108 J',
            'Final: U₂ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.2',
            'U₂ = 54×10⁻³/0.2 = 0.270 J',
            'Work done: W = ΔU = U₂ - U₁ = 0.270 - 0.108 = 0.162 J',
            'Positive work (both charges positive, repel)'
        ],
        helper: 'Potential energy: U = kq₁q₂/r; Work = ΔU; Same sign → repel (U > 0)',
        realWorldContext: 'Electrostatic energy, ion interactions'
    });

    return relatedProblems;
}

generateRelatedCapacitanceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Capacitor Charging Curve',
        problem: 'A 100 μF capacitor charges through 1 kΩ resistor to 12 V. Draw charging curve and find time to reach 63% of max voltage.',
        parameters: {
            capacitance: 100,
            resistance: 1000,
            voltage: 12,
            curveType: 'charging'
        },
        type: 'capacitance',
        subparts: [
            'Time constant: τ = RC = (1000)(100×10⁻⁶) = 0.1 s',
            'Charging equation: V(t) = V₀(1 - e^(-t/τ))',
            'At t = τ: V(τ) = V₀(1 - e⁻¹) = V₀(0.632) = 63.2% of V₀',
            'Time to reach 63%: t = τ = 0.1 s',
            'After 5τ: capacitor ~99% charged',
            'Exponential approach to final voltage'
        ],
        helper: 'Time constant τ = RC; V(t) = V₀(1 - e^(-t/τ)) for charging',
        realWorldContext: 'Camera flash circuits, timing circuits',
        diagramInfo: {
            type: 'capacitor_curve',
            registryKey: 'capacitorChargeCurve',
            renderOptions: {
                capacitance: 100,
                resistance: 1000,
                voltage: 12,
                curveType: 'charging',
                showTimeConstant: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_capacitor_curve_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCurrentResistanceDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Basic Circuit Analysis',
        problem: 'Draw a circuit with 12V battery, 100Ω resistor, 200Ω resistor, 10μF capacitor, and closed switch. Analyze the circuit.',
        parameters: {
            components: [
                { type: 'battery', voltage: 12 },
                { type: 'resistor', resistance: 100 },
                { type: 'capacitor', capacitance: 10 },
                { type: 'switch', state: 'closed' }
            ],
            configuration: 'series'
        },
        type: 'current_resistance',
        subparts: [
            'Total resistance (series): R = 100 + 200 = 300 Ω',
            'Current (Ohm\'s Law): I = V/R = 12/300 = 0.04 A = 40 mA',
            'Voltage across 100Ω: V₁ = IR = 0.04 × 100 = 4 V',
            'Voltage across 200Ω: V₂ = IR = 0.04 × 200 = 8 V',
            'Total voltage: 4 + 8 = 12 V (check)',
            'Capacitor will charge to 12 V'
        ],
        helper: 'Ohm\'s Law: V = IR; Series: same current, voltages add',
        realWorldContext: 'Basic electrical circuits',
        diagramInfo: {
            type: 'circuit_diagram',
            registryKey: 'circuitDiagram',
            renderOptions: {
                components: [
                    { type: 'battery', voltage: 12 },
                    { type: 'resistor', resistance: 100 },
                    { type: 'capacitor', capacitance: 10 },
                    { type: 'switch', state: 'closed' }
                ],
                configuration: 'series',
                showValues: true,
                showCurrent: true,
                showSymbols: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDCCircuitsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Series vs Parallel Circuit Comparison',
        problem: 'Compare circuits with three resistors (100Ω, 200Ω, 150Ω) connected to 12V battery in series vs parallel configurations.',
        parameters: {
            voltage: 12,
            resistors: [100, 200, 150],
            compareCircuits: true
        },
        type: 'dc_circuits',
        subparts: [
            'Series: R_total = 100 + 200 + 150 = 450 Ω',
            'Series current: I = 12/450 = 0.027 A (same through all)',
            'Parallel: 1/R_total = 1/100 + 1/200 + 1/150 = 0.0233',
            'R_total = 42.9 Ω',
            'Parallel current: I = 12/42.9 = 0.28 A',
            'Parallel has lower resistance, higher current'
        ],
        helper: 'Series: R_total = ΣR, same I; Parallel: 1/R_total = Σ(1/R), same V',
        realWorldContext: 'Household circuits, Christmas lights',
        diagramInfo: {
            type: 'series_parallel',
            registryKey: 'seriesParallelCircuits',
            renderOptions: {
                voltage: 12,
                resistors: [100, 200, 150],
                showBoth: true,
                showCalculations: true,
                showCurrent: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_series_parallel_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMagneticFieldsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Magnetic Field Lines of Bar Magnet',
        problem: 'Draw the magnetic field line pattern around a bar magnet. Explain the field direction and where field is strongest.',
        parameters: {
            sourceType: 'bar_magnet'
        },
        type: 'magnetic_fields',
        subparts: [
            'Field lines emerge from North pole',
            'Field lines enter South pole',
            'Lines form closed loops',
            'Never cross each other',
            'Strongest field near poles (lines closest together)',
            'Field direction: North to South outside magnet'
        ],
        helper: 'Magnetic field lines show direction of force on North pole',
        realWorldContext: 'Permanent magnets, compass behavior',
        diagramInfo: {
            type: 'magnetic_field',
            registryKey: 'magneticFieldLines',
            renderOptions: {
                sourceType: 'bar_magnet',
                showPoles: true,
                showFieldLines: true,
                showCompass: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_magnetic_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Lorentz Force on Moving Charge',
        problem: 'An electron (q = -e) moves at 50 m/s eastward through a magnetic field of 1 T pointing into the page. Find force magnitude and direction.',
        parameters: {
            charge: -1,
            velocity: { x: 50, y: 0 },
            magneticField: { direction: 'into_page', magnitude: 1 }
        },
        type: 'magnetic_fields',
        subparts: [
            'Lorentz force: F = qvB sin(θ)',
            'Angle between v and B: θ = 90° (perpendicular)',
            'F = (1.6×10⁻¹⁹)(50)(1) sin(90°)',
            'F = 8×10⁻¹⁸ N',
            'Direction: Use right-hand rule (for positive charge)',
            'For electron (negative): force is southward (opposite)',
            'Force perpendicular to both v and B'
        ],
        helper: 'Lorentz force: F = qvB sin(θ); Use right-hand rule for direction',
        realWorldContext: 'Particle accelerators, mass spectrometers',
        diagramInfo: {
            type: 'lorentz_force',
            registryKey: 'lorentzForce',
            renderOptions: {
                velocity: { x: 50, y: 0 },
                magneticField: { direction: 'into_page', magnitude: 1 },
                charge: 1,
                showVelocity: true,
                showField: true,
                showForce: true,
                showRightHandRule: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_lorentz_force_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

generateRelatedEMInductionDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electromagnetic Induction',
        problem: 'A magnet moves toward a 5-turn coil. Draw the setup and explain how current is induced. What determines current direction?',
        parameters: {
            coilTurns: 5,
            magnetMoving: true
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Moving magnet changes magnetic flux through coil',
            'Faraday\'s Law: ε = -N(ΔΦ/Δt)',
            'Changing flux induces EMF',
            'Induced current creates its own magnetic field',
            'Lenz\'s Law: Induced current opposes the change',
            'If magnet approaches: induced field repels magnet',
            'Current direction: use right-hand rule'
        ],
        helper: 'Faraday: ε = -N(ΔΦ/Δt); Lenz: induced effect opposes cause',
        realWorldContext: 'Generators, transformers, induction cooktops',
        diagramInfo: {
            type: 'em_induction',
            registryKey: 'electromagneticInduction',
            renderOptions: {
                coilTurns: 5,
                magnetMoving: true,
                showMagnet: true,
                showCoil: true,
                showCurrent: true,
                showFlux: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_em_induction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Transformer Operation',
        problem: 'A transformer has 100 turns on primary and 500 turns on secondary. Input voltage is 120 V. Draw transformer and find output voltage.',
        parameters: {
            primaryTurns: 100,
            secondaryTurns: 500,
            inputVoltage: 120
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Transformer ratio: Vₛ/Vₚ = Nₛ/Nₚ',
            'Vₛ/120 = 500/100',
            'Vₛ = 120 × 5 = 600 V',
            'Step-up transformer (increases voltage)',
            'Power conservation: VₚIₚ = VₛIₛ (ideal)',
            'Current decreases as voltage increases'
        ],
        helper: 'Transformer: Vₛ/Vₚ = Nₛ/Nₚ; Iₛ/Iₚ = Nₚ/Nₛ',
        realWorldContext: 'Power distribution, voltage conversion',
        diagramInfo: {
            type: 'transformer',
            registryKey: 'transformer',
            renderOptions: {
                primaryTurns: 100,
                secondaryTurns: 500,
                inputVoltage: 120,
                showCore: true,
                showTurns: true,
                showVoltages: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);

                const renderer = new PhysicsDiagramRenderer();

                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );

                const buffer = await canvas.encode('png');
                const filename = `physics_transformer_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);

                console.log(`✓ Successfully generated: ${filename}`);

                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                console.error(`✗ Error generating diagram:`, error);
                return { success: false, error: error.message, stack: error.stack };
            }
        }
    });

    return relatedProblems;
}

