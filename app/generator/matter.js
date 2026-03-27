

// ============================================================================
// STATES OF MATTER GENERATORS (4 generators)
// ============================================================================

generateRelatedStatesOfMatterDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Particle Arrangement - Three States',
        problem: 'Using the particle diagram, describe how particle arrangement differs in solid, liquid, and gas.',
        parameters: {
            states: ['solid', 'liquid', 'gas'],
            showParticles: true
        },
        type: 'states_of_matter',
        subparts: [
            'SOLID: particles tightly packed in fixed positions',
            'Regular pattern, vibrate in place',
            'Fixed shape and volume',
            'LIQUID: particles close but can slide past each other',
            'No fixed pattern, can move freely',
            'Fixed volume, takes shape of container',
            'GAS: particles far apart, move rapidly',
            'Random motion, fills entire container',
            'No fixed shape or volume'
        ],
        helper: 'Solid: fixed shape/volume; Liquid: fixed volume only; Gas: neither fixed',
        realWorldContext: 'Ice, water, steam show all three states',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'States of Matter - Particle View',
                showMotion: false,
                showLabels: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `particle_states_three_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Particle Motion and Energy',
        problem: 'Explain how particle motion differs between solids, liquids, and gases.',
        parameters: {
            property: 'particle motion',
            energyOrder: 'solid < liquid < gas'
        },
        type: 'states_of_matter',
        subparts: [
            'SOLID: particles vibrate around fixed positions',
            'Lowest kinetic energy',
            'Strong attractive forces hold particles',
            'LIQUID: particles slide and rotate',
            'Medium kinetic energy',
            'Weaker forces allow movement',
            'GAS: particles move rapidly in all directions',
            'Highest kinetic energy',
            'Very weak/no attractive forces',
            'KE order: gas > liquid > solid'
        ],
        helper: 'Higher temperature → more kinetic energy → more motion',
        realWorldContext: 'Temperature measures average kinetic energy',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Particle Motion in States of Matter',
                showMotion: true,
                showLabels: true,
                showEnergy: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `particle_motion_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diffusion in Different States',
        problem: 'Using the diffusion diagram, explain why gases diffuse faster than liquids.',
        parameters: {
            process: 'diffusion',
            rates: { gas: 'fastest', liquid: 'medium', solid: 'slowest' }
        },
        type: 'states_of_matter',
        subparts: [
            'Diffusion: movement of particles from high to low concentration',
            'GASES: particles far apart, fast moving',
            'Lots of space between particles',
            'Little/no attraction between particles',
            'Can move freely → fastest diffusion',
            'LIQUIDS: particles closer, slower moving',
            'Less space, more collisions',
            'Moderate attraction → slower diffusion',
            'SOLIDS: particles fixed, only vibrate',
            'No movement through structure → slowest/no diffusion'
        ],
        helper: 'Diffusion rate ∝ particle speed and space available',
        realWorldContext: 'Perfume smell spreads quickly (gas diffusion)',
        diagramInfo: {
            type: 'diffusion',
            registryKey: 'diffusion',
            renderOptions: {
                title: 'Diffusion of Particles',
                showTime: true,
                animate: false,
                particles: 50,
                showConcentrationGradient: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `diffusion_diagram_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Brownian Motion',
        problem: 'Describe Brownian motion using the particle diagram. What causes this random movement?',
        parameters: {
            process: 'brownian motion',
            particles: 30,
            cause: 'collisions with smaller particles'
        },
        type: 'states_of_matter',
        subparts: [
            'Brownian motion: random zigzag movement of particles',
            'Observed in liquids and gases',
            'Caused by collisions with smaller, invisible particles',
            'Large particle surrounded by fast-moving molecules',
            'Molecules hit from all directions randomly',
            'Uneven collisions cause zigzag path',
            'Evidence for kinetic molecular theory',
            'Proof that particles are always moving'
        ],
        helper: 'Brownian motion shows particles never stop moving',
        realWorldContext: 'Dust particles in sunlight show Brownian motion',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Brownian Motion',
                showPaths: true,
                showCollisions: true,
                particleCount: 30
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `brownian_motion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Compressibility of States',
        problem: 'Explain why gases are compressible but solids and liquids are not.',
        parameters: {
            property: 'compressibility',
            compressible: ['gas'],
            incompressible: ['solid', 'liquid']
        },
        type: 'states_of_matter',
        subparts: [
            'GASES: large spaces between particles',
            'Particles far apart (low density)',
            'Applying pressure pushes particles closer',
            'Can compress significantly',
            'LIQUIDS: particles close together',
            'Little space between particles',
            'Cannot push particles much closer',
            'Nearly incompressible',
            'SOLIDS: particles tightly packed',
            'No space between particles',
            'Cannot compress at all'
        ],
        helper: 'Compressibility depends on space between particles',
        realWorldContext: 'Air can be compressed in bicycle pump',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Compressibility of States',
                showMotion: false,
                showLabels: true,
                showCompression: true,
                states: ['solid', 'liquid', 'gas']
            },
            canvasSize: { width: 1200, height: 500 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `compressibility_states_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedPhaseChangesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heating Curve - Water',
        problem: 'Using the heating curve, identify the phase changes and explain the flat regions.',
        parameters: {
            substance: 'water',
            phaseChanges: ['melting', 'vaporization'],
            plateaus: [0, 100]
        },
        type: 'phase_changes',
        subparts: [
            'Heating curve shows temperature vs time as heat added',
            'Sloped regions: temperature increases (single phase)',
            'Flat region 1 (0°C): melting (solid → liquid)',
            'Temperature constant during phase change',
            'Energy breaks bonds, not increasing KE',
            'Flat region 2 (100°C): vaporization (liquid → gas)',
            'Again, temperature constant',
            'Energy used to overcome IMF completely',
            'After phase change: temperature rises again'
        ],
        helper: 'Phase changes occur at constant temperature',
        realWorldContext: 'Ice water stays at 0°C until all ice melts',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Heating Curve - Water',
                showPhases: true,
                showPlateaus: true,
                substance: 'water'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `heating_curve_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Six Phase Changes',
        problem: 'Name and classify all six phase changes as endothermic or exothermic.',
        parameters: {
            phaseChanges: [
                { name: 'melting', from: 'solid', to: 'liquid', type: 'endothermic' },
                { name: 'freezing', from: 'liquid', to: 'solid', type: 'exothermic' },
                { name: 'vaporization', from: 'liquid', to: 'gas', type: 'endothermic' },
                { name: 'condensation', from: 'gas', to: 'liquid', type: 'exothermic' },
                { name: 'sublimation', from: 'solid', to: 'gas', type: 'endothermic' },
                { name: 'deposition', from: 'gas', to: 'solid', type: 'exothermic' }
            ]
        },
        type: 'phase_changes',
        subparts: [
            'ENDOTHERMIC (absorb energy):',
            '1. Melting: solid → liquid (ice → water)',
            '2. Vaporization: liquid → gas (water → steam)',
            '3. Sublimation: solid → gas (dry ice → CO₂ gas)',
            'EXOTHERMIC (release energy):',
            '4. Freezing: liquid → solid (water → ice)',
            '5. Condensation: gas → liquid (steam → water)',
            '6. Deposition: gas → solid (water vapor → frost)',
            'Endo: breaking IMF (requires energy)',
            'Exo: forming IMF (releases energy)'
        ],
        helper: 'Moving UP in states requires energy (endo); moving DOWN releases energy (exo)',
        realWorldContext: 'Sweating cools you (vaporization = endothermic)',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Phase Changes - Endothermic vs Exothermic',
                showPhases: true,
                showAllTransitions: true,
                showEnergyFlow: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `phase_changes_six_types_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cooling Curve Analysis',
        problem: 'Analyze the cooling curve for a substance. Why does the freezing plateau last longer than expected?',
        parameters: {
            substance: 'water',
            curve: 'cooling',
            anomaly: 'supercooling'
        },
        type: 'phase_changes',
        subparts: [
            'Cooling curve: temperature vs time as heat removed',
            'Gas cools down (temperature drops)',
            'Condensation: gas → liquid (100°C plateau)',
            'Liquid cools down',
            'Freezing: liquid → solid (0°C plateau)',
            'If plateau is longer: more mass present',
            'Or: heat of fusion released slows cooling',
            'Freezing releases energy (exothermic)',
            'Released heat must be removed to continue cooling',
            'Longer plateau = larger heat of fusion'
        ],
        helper: 'Cooling curve is reverse of heating curve',
        realWorldContext: 'Lakes freeze slowly (large heat capacity)',
        diagramInfo: {
            type: 'coolingCurve',
            registryKey: 'coolingCurve',
            renderOptions: {
                title: 'Cooling Curve - Water',
                showPhases: true,
                showPlateaus: true,
                substance: 'water',
                showHeatRelease: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `cooling_curve_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Sublimation - Dry Ice',
        problem: 'Explain why dry ice (solid CO₂) sublimates at room temperature instead of melting.',
        parameters: {
            substance: 'CO2',
            phaseChange: 'sublimation',
            pressure: 1,
            temperature: 'room temp'
        },
        type: 'phase_changes',
        subparts: [
            'Sublimation: solid → gas (skips liquid phase)',
            'Dry ice: solid CO₂ at -78°C',
            'At normal pressure (1 atm), CO₂ cannot exist as liquid',
            'Triple point of CO₂ is at high pressure (5.1 atm)',
            'At 1 atm: heating solid CO₂ → directly to gas',
            'No melting occurs',
            'Sublimation requires energy (endothermic)',
            'Creates fog effect (cold gas condenses water vapor)'
        ],
        helper: 'Sublimation bypasses liquid phase',
        realWorldContext: 'Dry ice used for special effects and cooling',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Sublimation - Dry Ice (CO₂)',
                showPhases: true,
                showSublimation: true,
                substance: 'CO2',
                highlightTransition: 'sublimation'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `sublimation_dry_ice_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat of Vaporization vs Fusion',
        problem: 'Why is the heat of vaporization for water (2260 J/g) much larger than heat of fusion (334 J/g)?',
        parameters: {
            substance: 'water',
            heatOfFusion: 334,
            heatOfVaporization: 2260,
            units: 'J/g'
        },
        type: 'phase_changes',
        subparts: [
            'Heat of fusion: energy to melt (solid → liquid)',
            'Breaks some IMF, particles stay close',
            'Water: 334 J/g needed',
            'Heat of vaporization: energy to boil (liquid → gas)',
            'Breaks ALL IMF, particles separate completely',
            'Much more energy required',
            'Water: 2260 J/g needed (6.8× larger)',
            'Vaporization plateau longer on heating curve',
            'Stronger IMF → larger heats of phase change'
        ],
        helper: 'ΔH_vap > ΔH_fus always (complete vs partial IMF breaking)',
        realWorldContext: 'Burns from steam worse than boiling water',
        diagramInfo: {
            type: 'heatingCurve',
            registryKey: 'heatingCurve',
            renderOptions: {
                title: 'Heat of Fusion vs Vaporization - Water',
                showPhases: true,
                showPlateaus: true,
                showEnergyValues: true,
                substance: 'water',
                highlightEnergy: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `heat_fusion_vaporization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedGasLawsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Boyle\'s Law - Pressure and Volume',
        problem: 'A gas occupies 2.0 L at 1.0 atm. What is the volume at 4.0 atm (constant T)?',
        parameters: {
            law: 'Boyles',
            P1: 1.0,
            V1: 2.0,
            P2: 4.0,
            V2: 0.5,
            constant: 'T, n'
        },
        type: 'gas_laws',
        subparts: [
            'Boyle\'s Law: P₁V₁ = P₂V₂ (at constant T, n)',
            'Given: P₁ = 1.0 atm, V₁ = 2.0 L',
            'P₂ = 4.0 atm, V₂ = ?',
            'Substitute: (1.0)(2.0) = (4.0)(V₂)',
            '2.0 = 4.0 × V₂',
            'V₂ = 2.0/4.0 = 0.5 L',
            'Pressure increased 4×, volume decreased to ¼',
            'Inverse relationship: P ↑ → V ↓'
        ],
        helper: 'Boyle\'s Law: P and V are inversely proportional',
        realWorldContext: 'Syringe: push plunger → volume ↓, pressure ↑',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Boyle\'s Law - P₁V₁ = P₂V₂',
                law: 'Boyle',
                showVariables: true,
                showContainer: true,
                showGraph: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `boyles_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Charles\' Law - Volume and Temperature',
        problem: 'A balloon has volume 1.5 L at 27°C. What is the volume at 127°C (constant P)?',
        parameters: {
            law: 'Charles',
            V1: 1.5,
            T1: 300,
            T2: 400,
            V2: 2.0,
            constant: 'P, n'
        },
        type: 'gas_laws',
        subparts: [
            'Charles\' Law: V₁/T₁ = V₂/T₂ (at constant P, n)',
            'Convert to Kelvin: T₁ = 27 + 273 = 300 K',
            'T₂ = 127 + 273 = 400 K',
            'Given: V₁ = 1.5 L, T₁ = 300 K, T₂ = 400 K',
            'Substitute: 1.5/300 = V₂/400',
            'V₂ = (1.5 × 400)/300',
            'V₂ = 600/300 = 2.0 L',
            'Temperature increased 1.33×, volume increased 1.33×',
            'Direct relationship: T ↑ → V ↑'
        ],
        helper: 'Charles\' Law: V and T are directly proportional (use Kelvin!)',
        realWorldContext: 'Hot air balloon: heat air → volume expands → rises',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Charles\' Law - V₁/T₁ = V₂/T₂',
                law: 'Charles',
                showVariables: true,
                showContainer: true,
                showTemperature: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `charles_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Gas Law',
        problem: 'A gas at 2.0 atm, 3.0 L, and 300 K is changed to 1.0 atm and 400 K. Find the new volume.',
        parameters: {
            law: 'Combined',
            P1: 2.0,
            V1: 3.0,
            T1: 300,
            P2: 1.0,
            T2: 400,
            V2: 8.0,
            constant: 'n'
        },
        type: 'gas_laws',
        subparts: [
            'Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂',
            'Given: P₁=2.0 atm, V₁=3.0 L, T₁=300 K',
            'P₂=1.0 atm, T₂=400 K, V₂=?',
            'Substitute: (2.0)(3.0)/300 = (1.0)(V₂)/400',
            '6.0/300 = V₂/400',
            '0.02 = V₂/400',
            'V₂ = 0.02 × 400 = 8.0 L',
            'Check: P↓ (2→1) and T↑ (300→400) both increase V',
            'Result makes sense'
        ],
        helper: 'Combined law: use when 3 variables change',
        realWorldContext: 'Weather balloons expand as they rise (P↓, T↓)',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Combined Gas Law - P₁V₁/T₁ = P₂V₂/T₂',
                law: 'Combined',
                showVariables: true,
                showContainer: true,
                showAllChanges: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `combined_gas_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ideal Gas Law - Moles Calculation',
        problem: 'How many moles of gas are in a 5.0 L container at 2.0 atm and 300 K? (R = 0.0821 L·atm/mol·K)',
        parameters: {
            law: 'Ideal',
            P: 2.0,
            V: 5.0,
            T: 300,
            R: 0.0821,
            n: 0.406
        },
        type: 'gas_laws',
        subparts: [
            'Ideal Gas Law: PV = nRT',
            'Given: P = 2.0 atm, V = 5.0 L, T = 300 K',
            'R = 0.0821 L·atm/(mol·K)',
            'Solve for n: n = PV/RT',
            'n = (2.0)(5.0)/(0.0821)(300)',
            'n = 10.0/24.63',
            'n = 0.406 mol',
            'Always use Kelvin for temperature'
        ],
        helper: 'PV = nRT; R value depends on units!',
        realWorldContext: 'Calculate amount of gas in tire',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Ideal Gas Law - PV = nRT',
                law: 'ideal',
                showVariables: true,
                showContainer: true,
                showFormula: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ideal_gas_law_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Stoichiometry with Ideal Gas Law',
        problem: 'What volume of O₂ gas at STP is needed to completely burn 2.0 moles of CH₄? CH₄ + 2O₂ → CO₂ + 2H₂O',
        parameters: {
            reaction: 'CH4 + 2O2 → CO2 + 2H2O',
            molesReactant: 2.0,
            stoichiometricRatio: 2,
            STP: { T: 273, P: 1.0 },
            volume: 89.6
        },
        type: 'gas_laws',
        subparts: [
            'Balanced equation: CH₄ + 2O₂ → CO₂ + 2H₂O',
            'Mole ratio: 1 mol CH₄ : 2 mol O₂',
            'Given: 2.0 mol CH₄',
            'Moles O₂ needed: 2.0 mol × (2 mol O₂/1 mol CH₄) = 4.0 mol',
            'At STP: T = 273 K, P = 1.0 atm',
            'Use PV = nRT: V = nRT/P',
            'V = (4.0)(0.0821)(273)/1.0',
            'V = 89.6 L of O₂',
            'Alternative: at STP, 1 mol gas = 22.4 L',
            'V = 4.0 mol × 22.4 L/mol = 89.6 L'
        ],
        helper: 'At STP: 1 mole gas = 22.4 L (molar volume)',
        realWorldContext: 'Calculating oxygen needs for combustion',
        diagramInfo: {
            type: 'gasLaws',
            registryKey: 'gasLawsDiagram',
            renderOptions: {
                title: 'Gas Stoichiometry - Ideal Gas Law',
                law: 'ideal',
                showVariables: true,
                showContainer: true,
                showStoichiometry: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `gas_stoichiometry_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedKineticMolecularTheoryDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'KMT Postulates - Gas Behavior',
        problem: 'State the five postulates of Kinetic Molecular Theory and explain how they relate to gas behavior.',
        parameters: {
            postulates: 5,
            theory: 'KMT'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            '1. Gas particles are in constant, random motion',
            'Explains diffusion and pressure',
            '2. Gas particles are negligibly small',
            'Volume of particles << volume of container',
            'Explains compressibility',
            '3. No attractive/repulsive forces between particles',
            'Explains ideal gas behavior',
            '4. Collisions are perfectly elastic',
            'No energy lost; temperature constant without heating',
            '5. Average KE proportional to absolute temperature',
            'KE_avg = (3/2)kT; higher T → faster particles'
        ],
        helper: 'KMT explains macroscopic gas properties from particle behavior',
        realWorldContext: 'KMT is foundation for understanding gas laws',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Kinetic Molecular Theory - Gas Particles',
                showMotion: true,
                showLabels: true,
                showCollisions: true,
                states: ['gas']
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `kmt_postulates_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Temperature and Kinetic Energy',
        problem: 'Explain the relationship between temperature and average kinetic energy of gas particles.',
        parameters: {
            relationship: 'direct proportional',
            equation: 'KE_avg = (3/2)kT'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Temperature measures average kinetic energy',
            'KE_avg = (3/2)kT (k = Boltzmann constant)',
            'Higher temperature → higher average KE',
            'Higher KE → faster particle motion',
            'At same T: all gases have same average KE',
            'But lighter gases move faster',
            'Example: H₂ moves faster than O₂ at same T',
            'Root mean square velocity: v_rms = √(3RT/M)',
            'M is molar mass; lighter M → faster v'
        ],
        helper: 'T ∝ KE_avg; at constant T, KE is constant',
        realWorldContext: 'Absolute zero (0 K): all molecular motion stops',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Temperature and Kinetic Energy',
                showPaths: true,
                showCollisions: true,
                showSpeed: true,
                particleCount: 30
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `temperature_kinetic_energy_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Real vs Ideal Gases',
        problem: 'Explain why real gases deviate from ideal behavior at high pressure and low temperature.',
        parameters: {
            deviations: ['high pressure', 'low temperature'],
            idealConditions: ['low pressure', 'high temperature']
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Ideal gas assumptions: no volume, no IMF',
            'HIGH PRESSURE: gas compressed',
            'Particle volume becomes significant',
            'Less free space than expected',
            'Actual volume < ideal volume',
            'LOW TEMPERATURE: particles slow down',
            'Intermolecular forces become significant',
            'Attraction reduces pressure on walls',
            'Actual pressure < ideal pressure',
            'Van der Waals equation corrects for these:',
            '(P + an²/V²)(V - nb) = nRT',
            'Best ideal behavior: high T, low P'
        ],
        helper: 'Real gases approach ideal at high T and low P',
        realWorldContext: 'He and H₂ most ideal (small, weak IMF)',
        diagramInfo: {
            type: 'particleStates',
            registryKey: 'particleStates',
            renderOptions: {
                title: 'Real vs Ideal Gas Behavior',
                showMotion: true,
                showLabels: true,
                showIMF: true,
                showComparison: true,
                states: ['gas']
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `real_vs_ideal_gases_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Effusion and Graham\'s Law',
        problem: 'Compare the rate of effusion of H₂ (M=2) and O₂ (M=32). Which is faster and by how much?',
        parameters: {
            gas1: { formula: 'H2', M: 2 },
            gas2: { formula: 'O2', M: 32 },
            law: 'Graham'
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Graham\'s Law: rate₁/rate₂ = √(M₂/M₁)',
            'Effusion: gas escaping through tiny hole',
            'Lighter gases effuse faster',
            'Given: M(H₂) = 2 g/mol, M(O₂) = 32 g/mol',
            'rate(H₂)/rate(O₂) = √(32/2)',
            '= √16 = 4',
            'H₂ effuses 4 times faster than O₂',
            'Lighter molecules have higher average speed'
        ],
        helper: 'Graham\'s Law: rate ∝ 1/√M (inverse of square root)',
        realWorldContext: 'Helium balloons deflate faster than air balloons',
        diagramInfo: {
            type: 'diffusion',
            registryKey: 'diffusion',
            renderOptions: {
                title: 'Graham\'s Law - Effusion Rates',
                showTime: true,
                animate: false,
                particles: 50,
                showRateComparison: true,
                gases: ['H2', 'O2']
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `grahams_law_effusion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Pressure from Particle Collisions',
        problem: 'Using KMT, explain how gas particles create pressure on container walls.',
        parameters: {
            concept: 'pressure from collisions',
            factors: ['particle speed', 'collision frequency']
        },
        type: 'kinetic_molecular_theory',
        subparts: [
            'Gas particles move randomly in all directions',
            'Particles collide with container walls',
            'Each collision exerts force on wall',
            'Pressure = total force / area',
            'More collisions → higher pressure',
            'Factors increasing pressure:',
            '1. More particles (higher n)',
            '2. Faster particles (higher T)',
            '3. Smaller volume (more frequent collisions)',
            'Explains why: P ∝ nT/V (ideal gas law)',
            'Elastic collisions: no energy lost'
        ],
        helper: 'Pressure is result of billions of particle impacts per second',
        realWorldContext: 'Tire pressure from air molecules hitting inside',
        diagramInfo: {
            type: 'brownianMotion',
            registryKey: 'brownianMotion',
            renderOptions: {
                title: 'Gas Pressure from Collisions',
                showPaths: true,
                showCollisions: true,
                showWalls: true,
                highlightWallCollisions: true,
                particleCount: 30
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `pressure_from_collisions_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

const EndSection3 = "close";