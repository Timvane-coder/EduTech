
// ============================================================================
// LABORATORY CHEMISTRY GENERATORS (4 generators)
// ============================================================================

generateRelatedLabSafetyDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Hazard Symbol Identification',
        problem: 'Identify the hazard symbols shown and explain the precautions needed for each chemical type.',
        parameters: {
            symbols: ['flammable', 'corrosive', 'toxic', 'oxidizing'],
            precautions: 'safety equipment and handling'
        },
        type: 'lab_safety',
        subparts: [
            'FLAMMABLE (flame symbol):',
            '- Catches fire easily',
            '- Keep away from heat, sparks, open flames',
            '- Store in cool, ventilated area',
            'CORROSIVE (hand/material damage):',
            '- Burns skin, damages materials',
            '- Wear gloves, goggles, lab coat',
            '- Use fume hood if vapors present',
            'TOXIC (skull and crossbones):',
            '- Poisonous if inhaled, ingested, or absorbed',
            '- Avoid contact, use fume hood',
            '- Know antidote and first aid',
            'OXIDIZING (flame over circle):',
            '- Provides oxygen, intensifies fires',
            '- Keep away from flammable materials',
            '- Store separately from organic compounds'
        ],
        helper: 'Always read MSDS (Material Safety Data Sheet) before use',
        realWorldContext: 'GHS (Globally Harmonized System) standardizes hazard symbols worldwide',
        diagramInfo: {
            type: 'hazardSymbols',
            registryKey: 'hazardSymbols',
            renderOptions: {
                title: 'Chemical Hazard Symbols',
                showDescriptions: true,
                showGrid: true,
                symbols: ['flammable', 'corrosive', 'toxic', 'oxidizing', 'explosive', 'harmful']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hazard_symbols_identification_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Personal Protective Equipment (PPE)',
        problem: 'List and explain the purpose of essential safety equipment in a chemistry laboratory.',
        parameters: {
            equipment: ['goggles', 'gloves', 'lab_coat', 'fume_hood'],
            purpose: 'protection'
        },
        type: 'lab_safety',
        subparts: [
            'SAFETY GOGGLES:',
            '- Protect eyes from splashes, fumes, flying debris',
            '- Must be worn at ALL times in lab',
            '- Regular glasses NOT sufficient',
            'LAB COAT:',
            '- Protects skin and clothing from chemicals',
            '- Should be buttoned/fastened',
            '- Made of flame-resistant material',
            'GLOVES:',
            '- Protect hands from chemicals, heat, sharp objects',
            '- Type depends on chemical (nitrile, latex, heat-resistant)',
            '- Remove before touching face or leaving lab',
            'FUME HOOD:',
            '- Ventilated enclosure for toxic/flammable vapors',
            '- Work inside with sash lowered',
            '- Do NOT block airflow',
            'OTHER: Fire extinguisher, eye wash station, safety shower, first aid kit'
        ],
        helper: 'PPE is your first line of defense against laboratory hazards',
        realWorldContext: 'Many lab accidents preventable with proper PPE',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Laboratory Safety Equipment',
                showLabels: true,
                showUsage: true,
                items: ['goggles', 'gloves', 'lab_coat', 'fire_extinguisher', 'eye_wash', 'fume_hood']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `safety_equipment_ppe_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Emergency Response Procedures',
        problem: 'Describe the proper response to: (a) acid spill on skin, (b) fire in beaker, (c) chemical in eyes.',
        parameters: {
            emergencies: ['acid_spill', 'fire', 'eye_contact'],
            responses: ['first_aid', 'containment', 'evacuation']
        },
        type: 'lab_safety',
        subparts: [
            '(a) ACID SPILL ON SKIN:',
            '1. Immediately rinse with water for 15-20 minutes',
            '2. Remove contaminated clothing while rinsing',
            '3. Use safety shower if large area affected',
            '4. Do NOT use neutralizers (generates heat)',
            '5. Seek medical attention',
            '6. Report incident to instructor',
            '(b) FIRE IN BEAKER:',
            '1. If small: cover with watch glass to cut oxygen',
            '2. Turn off gas/heat sources nearby',
            '3. Do NOT use water on organic solvent fires',
            '4. If spreads: evacuate and pull fire alarm',
            '5. Use fire extinguisher: PASS method',
            '   Pull pin, Aim at base, Squeeze, Sweep',
            '(c) CHEMICAL IN EYES:',
            '1. Immediately go to eye wash station',
            '2. Hold eyelids open, flush 15-20 minutes',
            '3. Remove contact lenses if present',
            '4. Continue flushing even if painful',
            '5. Seek medical attention immediately',
            '6. Bring chemical MSDS to medical facility'
        ],
        helper: 'Know locations: eye wash, safety shower, fire extinguisher, exits',
        realWorldContext: 'Quick response critical - permanent damage can occur in seconds',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Emergency Response Equipment',
                showLabels: true,
                showUsage: true,
                highlightEmergency: true,
                items: ['eye_wash', 'safety_shower', 'fire_extinguisher', 'first_aid']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `emergency_response_procedures_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Chemical Storage and Compatibility',
        problem: 'Explain why acids and bases should be stored separately. What other incompatible pairs exist?',
        parameters: {
            incompatible: ['acids_bases', 'oxidizers_flammables', 'water_reactive'],
            storage: 'segregation'
        },
        type: 'lab_safety',
        subparts: [
            'ACIDS & BASES - SEPARATE:',
            '- Mixing causes violent exothermic reaction',
            '- Generates heat, can boil/splatter',
            '- Example: HCl + NaOH → heat + steam',
            '- Store in different cabinets',
            'OXIDIZERS & FLAMMABLES - SEPARATE:',
            '- Oxidizers provide O₂, intensify fires',
            '- Flammables easily ignited',
            '- Together: fire/explosion risk',
            '- Example: Keep HNO₃ away from ethanol',
            'WATER-REACTIVE - SEPARATE:',
            '- Some chemicals react violently with water',
            '- Example: alkali metals (Na, K), metal hydrides',
            '- Store in dry location, use inert atmosphere',
            'GENERAL RULES:',
            '- Alphabetical storage can be dangerous!',
            '- Store by compatibility class',
            '- Keep flammables in flammable cabinet',
            '- Corrosives in corrosion-resistant cabinet',
            '- Check MSDS for storage requirements'
        ],
        helper: 'Incompatible chemicals: never store together or on same shelf',
        realWorldContext: 'Improper storage has caused lab explosions and fires',
        diagramInfo: {
            type: 'hazardSymbols',
            registryKey: 'hazardSymbols',
            renderOptions: {
                title: 'Chemical Storage and Compatibility',
                showDescriptions: true,
                showGrid: true,
                showIncompatibilities: true,
                symbols: ['flammable', 'corrosive', 'oxidizing', 'water_reactive']
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `chemical_storage_compatibility_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'General Lab Safety Rules',
        problem: 'List 10 essential safety rules that must be followed in a chemistry laboratory.',
        parameters: {
            category: 'general_safety',
            rules: 10
        },
        type: 'lab_safety',
        subparts: [
            '1. Always wear safety goggles (no exceptions)',
            '2. No food, drinks, or gum in lab',
            '3. Tie back long hair, secure loose clothing',
            '4. Know locations: exits, fire extinguisher, eye wash',
            '5. Never work alone in laboratory',
            '6. Read all labels before using chemicals',
            '7. Never pipette by mouth - use pipette bulb',
            '8. Add acid to water (not water to acid)',
            '   "Do as you oughta, add acid to water"',
            '9. Dispose of chemicals properly - not down sink',
            '10. Wash hands before leaving lab',
            'ADDITIONAL:',
            '- Report all accidents/spills immediately',
            '- Never smell chemicals directly (waft)',
            '- Point test tubes away from people when heating',
            '- Clean up spills immediately',
            '- Follow all written and verbal instructions'
        ],
        helper: 'When in doubt: ASK! Never guess with safety',
        realWorldContext: 'Most lab accidents are preventable with proper procedures',
        diagramInfo: {
            type: 'safetyEquipment',
            registryKey: 'safetyEquipment',
            renderOptions: {
                title: 'Laboratory Safety Rules',
                showLabels: true,
                showUsage: true,
                showRules: true,
                items: ['goggles', 'gloves', 'lab_coat', 'fume_hood', 'eye_wash', 'fire_extinguisher']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `general_lab_safety_rules_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedLabApparatusDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Glassware Identification and Uses',
        problem: 'Identify each piece of glassware shown and state its primary use in the laboratory.',
        parameters: {
            glassware: ['beaker', 'flask', 'cylinder', 'burette', 'pipette', 'test_tube'],
            purposes: 'measurement and reactions'
        },
        type: 'lab_apparatus',
        subparts: [
            'BEAKER (cylindrical, flat bottom, spout):',
            '- Holding, mixing, heating liquids',
            '- NOT for accurate measurement',
            '- Graduations are approximate (±5%)',
            'ERLENMEYER FLASK (conical):',
            '- Mixing, heating, titrations',
            '- Narrow top reduces splashing',
            '- Can be swirled without spilling',
            'GRADUATED CYLINDER (tall, narrow):',
            '- Measuring liquid volumes',
            '- More accurate than beaker (±1%)',
            '- Read at meniscus (bottom of curve)',
            'BURETTE (long tube with stopcock):',
            '- Dispensing precise volumes in titrations',
            '- Very accurate (±0.05 mL)',
            '- Read from top down',
            'PIPETTE (narrow tube with bulb):',
            '- Transferring precise volumes',
            '- Volumetric pipette: one volume only',
            '- Very accurate (±0.02 mL)',
            'TEST TUBE:',
            '- Small-scale reactions and tests',
            '- Heating small samples',
            '- Qualitative analysis'
        ],
        helper: 'Accuracy: Volumetric flask = Pipette = Burette > Graduated cylinder > Beaker',
        realWorldContext: 'Choosing correct glassware ensures accurate results',
        diagramInfo: {
            type: 'glasswareCollection',
            registryKey: 'laboratoryGlassware',
            renderOptions: {
                title: 'Common Laboratory Glassware',
                showLabels: true,
                showVolumes: true,
                items: ['beaker', 'flask', 'cylinder', 'burette', 'pipette', 'test_tube']
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `glassware_identification_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Titration Setup',
        problem: 'Using the diagram, identify each component of a titration setup and explain its role.',
        parameters: {
            apparatus: 'titration',
            components: ['burette', 'flask', 'clamp', 'indicator']
        },
        type: 'lab_apparatus',
        subparts: [
            'TITRATION SETUP COMPONENTS:',
            '1. BURETTE (vertical tube with stopcock):',
            '   - Holds titrant (known concentration)',
            '   - Allows precise drop-by-drop addition',
            '   - Read volume before and after',
            '2. RING STAND & CLAMP:',
            '   - Holds burette vertically',
            '   - Keeps setup stable and secure',
            '3. ERLENMEYER FLASK:',
            '   - Contains analyte (unknown concentration)',
            '   - Conical shape allows swirling',
            '   - White paper underneath shows color change',
            '4. INDICATOR (in flask):',
            '   - Phenolphthalein, methyl orange, etc.',
            '   - Changes color at equivalence point',
            '   - Signals when to stop adding titrant',
            'PROCEDURE:',
            '- Record initial burette reading',
            '- Add titrant dropwise while swirling',
            '- Stop at color change (endpoint)',
            '- Record final burette reading',
            '- Volume used = final - initial'
        ],
        helper: 'Endpoint should match equivalence point (where moles equal)',
        realWorldContext: 'Titrations determine unknown concentrations precisely',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'titrationSetup',
            renderOptions: {
                title: 'Titration Setup',
                showBurette: true,
                showFlask: true,
                showLabels: true,
                apparatus: 'titration'
            },
            canvasSize: { width: 700, height: 900 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `titration_setup_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Distillation Apparatus Setup',
        problem: 'Identify all components of the distillation setup shown and explain the purpose of each.',
        parameters: {
            apparatus: 'distillation',
            type: 'simple',
            components: 7
        },
        type: 'lab_apparatus',
        subparts: [
            'SIMPLE DISTILLATION COMPONENTS:',
            '1. ROUND-BOTTOM FLASK:',
            '   - Contains liquid mixture to be separated',
            '   - Round shape distributes heat evenly',
            '   - Prevents superheating/bumping',
            '2. HEATING MANTLE/BUNSEN BURNER:',
            '   - Heat source to boil liquid',
            '   - Controlled temperature increase',
            '3. THERMOMETER:',
            '   - Measures vapor temperature',
            '   - Bulb at top of distillation flask',
            '   - Indicates which component is distilling',
            '4. DISTILLATION HEAD/ADAPTER:',
            '   - Connects flask to condenser',
            '   - Has thermometer port',
            '5. CONDENSER (Liebig condenser):',
            '   - Cold water jacket cools vapor to liquid',
            '   - Water IN at bottom, OUT at top',
            '   - Vapor travels through inner tube',
            '6. RECEIVING FLASK:',
            '   - Collects purified distillate',
            '   - Distillate = lower boiling point component',
            '7. CLAMPS & STANDS:',
            '   - Support apparatus securely',
            'PRINCIPLE:',
            '- Separates by boiling point difference',
            '- Lower bp component vaporizes first',
            '- Vapor cools in condenser → liquid',
            '- Collects in receiving flask'
        ],
        helper: 'Simple distillation: bp difference >25°C; Fractional: bp difference <25°C',
        realWorldContext: 'Distillation purifies liquids and separates mixtures',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'distillationApparatus',
            renderOptions: {
                title: 'Simple Distillation Apparatus',
                showLabels: true,
                showHeatSource: true,
                apparatus: 'distillation'
            },
            canvasSize: { width: 900, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `distillation_apparatus_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Filtration Apparatus',
        problem: 'Describe the setup and procedure for gravity filtration. What is each component\'s role?',
        parameters: {
            apparatus: 'filtration',
            type: 'gravity',
            purpose: 'separate solid from liquid'
        },
        type: 'lab_apparatus',
        subparts: [
            'GRAVITY FILTRATION SETUP:',
            '1. FILTER PAPER (circular):',
            '   - Folded into cone shape',
            '   - Porous - allows liquid through, traps solid',
            '   - Choose appropriate pore size',
            '2. FUNNEL (conical glass):',
            '   - Holds filter paper',
            '   - Filter paper should fit snugly',
            '   - Stem touches beaker side',
            '3. RING STAND & RING:',
            '   - Supports funnel above beaker',
            '   - Adjustable height',
            '4. BEAKER (receiving vessel):',
            '   - Collects filtrate (liquid that passes through)',
            '   - Must be large enough for volume',
            'FOLDING FILTER PAPER:',
            '- Fold circle in half',
            '- Fold in half again (quarter)',
            '- Tear small corner off one layer',
            '- Open to form cone',
            '- Fit in funnel, moisten with solvent',
            'PROCEDURE:',
            '- Pour mixture slowly down glass rod',
            '- Rod directs flow to paper, prevents splashing',
            '- Residue (solid) stays on paper',
            '- Filtrate (liquid) collects in beaker'
        ],
        helper: 'Vacuum filtration faster than gravity for fine precipitates',
        realWorldContext: 'Filtration isolates precipitates from reactions',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'filtrationSetup',
            renderOptions: {
                title: 'Filtration Setup',
                showLabels: true,
                showProcess: true,
                apparatus: 'filtration'
            },
            canvasSize: { width: 700, height: 800 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `filtration_apparatus_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gas Collection Over Water',
        problem: 'Explain the setup for collecting gas over water. Why must vapor pressure be considered?',
        parameters: {
            apparatus: 'gas_collection',
            method: 'water_displacement',
            correction: 'vapor_pressure'
        },
        type: 'lab_apparatus',
        subparts: [
            'GAS COLLECTION OVER WATER SETUP:',
            '1. REACTION VESSEL:',
            '   - Where gas is generated',
            '   - Example: Zn + HCl → H₂ + ZnCl₂',
            '2. DELIVERY TUBE:',
            '   - Carries gas from reaction to collection',
            '   - Rubber tubing or glass tube',
            '3. PNEUMATIC TROUGH:',
            '   - Container filled with water',
            '4. COLLECTION TUBE (inverted):',
            '   - Initially filled with water',
            '   - Inverted over water',
            '   - Gas rises, displaces water',
            '5. WATER:',
            '   - Seals system, prevents gas escape',
            '   - Gas collected is saturated with water vapor',
            'VAPOR PRESSURE CORRECTION:',
            '- Collected gas contains water vapor',
            '- Total pressure: P_total = P_gas + P_H₂O',
            '- Must subtract water vapor pressure',
            '- P_gas = P_total - P_H₂O(vapor)',
            '- Vapor pressure depends on temperature',
            '- Example at 25°C: P_H₂O = 23.8 mmHg',
            'ADVANTAGES:',
            '- Simple, inexpensive setup',
            '- Good for insoluble gases (H₂, O₂, N₂)',
            'LIMITATIONS:',
            '- Cannot use for water-soluble gases (HCl, NH₃)',
            '- Cannot use for gases that react with water'
        ],
        helper: 'Gas must be insoluble in water for this method',
        realWorldContext: 'Lavoisier used this to discover oxygen\'s role in combustion',
        diagramInfo: {
            type: 'labApparatus',
            registryKey: 'gasCollection',
            renderOptions: {
                title: 'Gas Collection Over Water',
                showWater: true,
                showGas: true,
                showLabels: true,
                apparatus: 'gas_collection'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `gas_collection_water_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

const EndSection5 = "close";