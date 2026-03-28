generateRelatedAlkanesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkane Structure - Butane',
        problem: 'Draw the structural formula and skeletal formula for butane (C₄H₁₀).',
        parameters: {
            alkane: 'butane',
            carbons: 4,
            drawStructural: true,
            drawSkeletal: true
        },
        type: 'alkanes',
        subparts: [
            'Butane: straight chain of 4 carbon atoms',
            'General formula: CₙH₂ₙ₊₂, so C₄H₁₀',
            'Structural: CH₃-CH₂-CH₂-CH₃',
            'Skeletal: zigzag line with 4 vertices (carbons implied)'
        ],
        helper: 'Alkanes: single bonds only (saturated); CₙH₂ₙ₊₂ formula',
        realWorldContext: 'Butane lighter fuel',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'butane',
                formula: 'C4H10'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `butane_structural_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Alkane Naming',
        problem: 'Name the alkane C₆H₁₄ and draw its skeletal formula.',
        parameters: {
            formula: 'C6H14',
            nameAlkane: true,
            drawSkeletal: true
        },
        type: 'alkanes',
        subparts: [
            'Count carbons: 6 carbons = hexane',
            'Verify formula: C₆H₂₍₆₎₊₂ = C₆H₁₄ ✓',
            'Name: hexane',
            'Draw: zigzag chain with 6 vertices'
        ],
        helper: 'Alkane prefixes: meth(1), eth(2), prop(3), but(4), pent(5), hex(6), hept(7), oct(8)',
        realWorldContext: 'Hexane in gasoline',
        diagramInfo: {
            type: 'skeletalFormula',
            registryKey: 'skeletalFormula',
            renderOptions: {
                showLabels: false,
                zigzag: true,
                molecule: 'hexane',
                carbons: 6
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `hexane_skeletal_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Branched Alkane',
        problem: 'Draw 2-methylpentane showing structural and skeletal formulas.',
        parameters: {
            alkane: '2-methylpentane',
            branched: true,
            drawBoth: true
        },
        type: 'alkanes',
        subparts: [
            'Parent chain: pentane (5 carbons)',
            'Branch: methyl group (CH₃) on carbon 2',
            'Structural: CH₃-CH(CH₃)-CH₂-CH₂-CH₃',
            'Skeletal: 5-carbon chain with branch at 2nd carbon'
        ],
        helper: 'IUPAC naming: number + branch name + parent alkane',
        realWorldContext: 'Branched alkanes in petrol octane rating',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showBranch: true,
                molecule: '2-methylpentane'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `methylpentane_structural_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Alkane Combustion',
        problem: 'Write balanced equation for complete combustion of propane (C₃H₈).',
        parameters: {
            alkane: 'propane',
            formula: 'C3H8',
            combustion: true,
            balanceEquation: true
        },
        type: 'alkanes',
        subparts: [
            'Complete combustion: alkane + O₂ → CO₂ + H₂O',
            'C₃H₈ + O₂ → CO₂ + H₂O (unbalanced)',
            'Balance C: → 3CO₂',
            'Balance H: → 4H₂O',
            'Balance O: 5O₂ →',
            'Final: C₃H₈ + 5O₂ → 3CO₂ + 4H₂O'
        ],
        helper: 'Combustion products: CO₂ and H₂O; Balance C, then H, then O',
        realWorldContext: 'Propane gas combustion',
        diagramInfo: {
            type: 'balancingEquations',
            registryKey: 'balancingEquations',
            renderOptions: {
                showParticles: true,
                showCoefficients: true,
                equation: 'C3H8 + O2 → CO2 + H2O'
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `propane_combustion_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Structural Isomers',
        problem: 'Draw all structural isomers of C₅H₁₂ (pentane). Show differences.',
        parameters: {
            formula: 'C5H12',
            drawIsomers: true,
            compareStructures: true
        },
        type: 'alkanes',
        subparts: [
            'Isomer 1: n-pentane (straight chain)',
            'Isomer 2: 2-methylbutane (one branch)',
            'Isomer 3: 2,2-dimethylpropane (two branches)',
            'All have same formula C₅H₁₂ but different structures'
        ],
        helper: 'Structural isomers: same formula, different connectivity',
        realWorldContext: 'Isomers have different physical properties',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C5H12',
                isomerType: 'structural'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `pentane_isomers_${Date.now()}.png`;
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

generateRelatedAlkenesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkene Structure - Propene',
        problem: 'Draw structural formula for propene (C₃H₆) showing the double bond.',
        parameters: {
            alkene: 'propene',
            carbons: 3,
            drawStructural: true,
            showDoubleBond: true
        },
        type: 'alkenes',
        subparts: [
            'Alkenes: contain C=C double bond',
            'General formula: CₙH₂ₙ',
            'Propene: 3 carbons, 6 hydrogens',
            'Structure: CH₂=CH-CH₃',
            'Double bond between C1 and C2'
        ],
        helper: 'Alkenes: CₙH₂ₙ; unsaturated (can add more H); named with -ene suffix',
        realWorldContext: 'Propene for polypropylene plastic',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightDoubleBond: true,
                molecule: 'propene',
                formula: 'C3H6'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `propene_structural_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Alkene Identification',
        problem: 'Identify the alkene with formula C₄H₈ and draw its structure.',
        parameters: {
            formula: 'C4H8',
            identifyAlkene: true,
            drawStructure: true
        },
        type: 'alkenes',
        subparts: [
            'Formula CₙH₂ₙ confirms it\'s an alkene',
            '4 carbons = butene',
            'Main isomer: but-1-ene CH₂=CH-CH₂-CH₃',
            'Double bond between C1 and C2'
        ],
        helper: 'Alkene naming: but-1-ene (number shows where double bond starts)',
        realWorldContext: 'Butene in chemical synthesis',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'but-1-ene',
                formula: 'C4H8'
            },
            canvasSize: { width: 850, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `butene_structural_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Addition Reaction',
        problem: 'Show addition of HBr to ethene (C₂H₄). Draw mechanism with curved arrows.',
        parameters: {
            alkene: 'ethene',
            reagent: 'HBr',
            reactionType: 'addition',
            showMechanism: true
        },
        type: 'alkenes',
        subparts: [
            'Ethene: CH₂=CH₂',
            'HBr adds across double bond',
            'π bond breaks, forms σ bonds to H and Br',
            'Product: CH₃-CH₂Br (bromoethane)',
            'Mechanism: electrophilic addition'
        ],
        helper: 'Addition reactions: double bond opens to add atoms across it',
        realWorldContext: 'Halogenation of alkenes',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'addition',
                reactants: ['C2H4', 'HBr'],
                product: 'C2H5Br'
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `alkene_addition_mechanism_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Alkene Polymerization',
        problem: 'Show polymerization of ethene to polyethylene. Draw repeating unit.',
        parameters: {
            monomer: 'ethene',
            polymer: 'polyethylene',
            showPolymerization: true
        },
        type: 'alkenes',
        subparts: [
            'Monomer: CH₂=CH₂ (ethene)',
            'Double bond opens: -CH₂-CH₂-',
            'Repeating unit: [-CH₂-CH₂-]ₙ',
            'n = large number (thousands)',
            'Polymer: polyethylene (plastic)'
        ],
        helper: 'Polymerization: many small molecules (monomers) → large molecule (polymer)',
        realWorldContext: 'Plastic bag production',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'ethene',
                polymer: 'polyethylene'
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ethene_polymerization_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Geometric Isomers',
        problem: 'Draw cis and trans isomers of but-2-ene. Explain difference.',
        parameters: {
            alkene: 'but-2-ene',
            showGeometricIsomers: true,
            explainDifference: true
        },
        type: 'alkenes',
        subparts: [
            'But-2-ene: CH₃-CH=CH-CH₃',
            'cis isomer: both CH₃ groups on same side',
            'trans isomer: CH₃ groups on opposite sides',
            'Double bond prevents rotation',
            'Geometric isomers have different physical properties'
        ],
        helper: 'cis = same side; trans = opposite sides; Double bond rigid (no rotation)',
        realWorldContext: 'Geometric isomers in vision (retinal)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                isomerType: 'geometric',
                molecule: 'but-2-ene'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometric_isomers_butene_${Date.now()}.png`;
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

generateRelatedAlkynesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Alkyne Structure - Propyne',
        problem: 'Draw structural formula for propyne (C₃H₄) showing the triple bond.',
        parameters: {
            alkyne: 'propyne',
            carbons: 3,
            drawStructural: true,
            showTripleBond: true
        },
        type: 'alkynes',
        subparts: [
            'Alkynes: contain C≡C triple bond',
            'General formula: CₙH₂ₙ₋₂',
            'Propyne: 3 carbons, 4 hydrogens',
            'Structure: HC≡C-CH₃',
            'Triple bond between C1 and C2'
        ],
        helper: 'Alkynes: CₙH₂ₙ₋₂; most unsaturated; named with -yne suffix',
        realWorldContext: 'Propyne in organic synthesis',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightTripleBond: true,
                molecule: 'propyne',
                formula: 'C3H4'
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `propyne_structural_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Ethyne (Acetylene)',
        problem: 'Draw ethyne (C₂H₂) and explain why it\'s the simplest alkyne.',
        parameters: {
            alkyne: 'ethyne',
            carbons: 2,
            simplestAlkyne: true
        },
        type: 'alkynes',
        subparts: [
            'Ethyne (acetylene): HC≡CH',
            'Only 2 carbons possible with triple bond',
            'Formula: C₂H₂',
            'Linear geometry (180° bond angle)',
            'Common name: acetylene'
        ],
        helper: 'Ethyne is simplest alkyne; used in welding torches',
        realWorldContext: 'Acetylene welding and cutting',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showLinearGeometry: true,
                molecule: 'ethyne',
                formula: 'C2H2'
            },
            canvasSize: { width: 700, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ethyne_structural_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Alkyne Bonding',
        problem: 'Explain bonding in ethyne: σ and π bonds. Show orbital overlap.',
        parameters: {
            alkyne: 'ethyne',
            explainBonding: true,
            showOrbitals: true
        },
        type: 'alkynes',
        subparts: [
            'Triple bond = 1 σ bond + 2 π bonds',
            'σ bond: sp-sp overlap (head-on)',
            'Two π bonds: p-p overlap (sideways)',
            'sp hybridization: linear geometry (180°)',
            'Very strong bond (bond energy ~839 kJ/mol)'
        ],
        helper: 'Triple bond: strongest C-C bond; 1 sigma + 2 pi bonds',
        realWorldContext: 'Understanding alkyne reactivity',
        diagramInfo: {
            type: 'sigmaPiBonds',
            registryKey: 'sigmaPiBonds',
            renderOptions: {
                show3D: true,
                showOverlap: true,
                molecule: 'C2H2',
                bondTypes: ['sigma', 'pi', 'pi']
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `alkyne_bonding_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Comparing Hydrocarbons',
        problem: 'Compare formulas: ethane, ethene, ethyne. Show saturation differences.',
        parameters: {
            compareHydrocarbons: true,
            molecules: ['ethane', 'ethene', 'ethyne'],
            showSaturation: true
        },
        type: 'alkynes',
        subparts: [
            'Ethane (C₂H₆): single bond, saturated',
            'Ethene (C₂H₄): double bond, unsaturated',
            'Ethyne (C₂H₂): triple bond, most unsaturated',
            'As unsaturation increases, H count decreases',
            'Formula pattern: C₂H₆ → C₂H₄ → C₂H₂'
        ],
        helper: 'Saturation: alkane > alkene > alkyne; More bonds = fewer H atoms',
        realWorldContext: 'Understanding hydrocarbon types',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                compareMultiple: true,
                molecules: ['ethane', 'ethene', 'ethyne']
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `comparing_hydrocarbons_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Alkyne Hydrogenation',
        problem: 'Show stepwise addition of H₂ to ethyne: ethyne → ethene → ethane.',
        parameters: {
            alkyne: 'ethyne',
            reaction: 'hydrogenation',
            showSteps: true
        },
        type: 'alkynes',
        subparts: [
            'Step 1: HC≡CH + H₂ → CH₂=CH₂ (ethene)',
            'Adds across triple bond first',
            'Step 2: CH₂=CH₂ + H₂ → CH₃-CH₃ (ethane)',
            'Adds across double bond',
            'Full hydrogenation: HC≡CH + 2H₂ → CH₃-CH₃'
        ],
        helper: 'Hydrogenation: addition of H₂; Requires catalyst (Pt, Pd, or Ni)',
        realWorldContext: 'Alkyne reduction in synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                showStepwise: true,
                mechanism: 'hydrogenation'
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `alkyne_hydrogenation_${Date.now()}.png`;
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

generateRelatedAromaticDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Benzene Structure',
        problem: 'Draw benzene (C₆H₆) showing resonance structures and delocalized electrons.',
        parameters: {
            molecule: 'benzene',
            showResonance: true,
            showDelocalization: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Benzene: hexagonal ring of 6 carbons',
            'Alternating double bonds (Kekulé structure)',
            'Two resonance forms ↔',
            'Reality: delocalized π electron cloud',
            'Symbol: hexagon with circle inside'
        ],
        helper: 'Aromatic: planar, cyclic, conjugated π system; 4n+2 π electrons (Hückel\'s rule)',
        realWorldContext: 'Benzene in petrochemicals',
        diagramInfo: {
            type: 'aromaticRing',
            registryKey: 'aromaticRing',
            renderOptions: {
                showResonance: true,
                showElectronCloud: true,
                molecule: 'benzene'
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `benzene_resonance_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Naming Aromatic Compounds',
        problem: 'Draw toluene (methylbenzene, C₇H₈). Show methyl group attachment.',
        parameters: {
            molecule: 'toluene',
            formula: 'C7H8',
            showSubstituent: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Toluene = benzene + methyl group (CH₃)',
            'Methyl attached to benzene ring',
            'Also called methylbenzene',
            'Formula: C₆H₅-CH₃',
            'Common solvent in chemistry'
        ],
        helper: 'Substituted benzenes: named as benzene derivatives or common names',
        realWorldContext: 'Toluene as industrial solvent',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                molecule: 'toluene',
                showAromaticRing: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `toluene_structure_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Aromatic Stability',
        problem: 'Explain why benzene is more stable than expected. Compare energies.',
        parameters: {
            molecule: 'benzene',
            explainStability: true,
            compareEnergies: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Expected: 3 isolated double bonds',
            'Actual: resonance stabilization',
            'Delocalization energy ≈ 150 kJ/mol',
            'Benzene more stable than predicted',
            'Result: less reactive than alkenes'
        ],
        helper: 'Aromatic stability: resonance energy makes benzene unreactive',
        realWorldContext: 'Why benzene doesn\'t undergo addition easily',
        diagramInfo: {
            type: 'energyProfile',
            registryKey: 'energyProfile',
            renderOptions: {
                showActivationEnergy: false,
                showDeltaH: true,
                showStabilization: true,
                molecule: 'benzene'
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `benzene_stability_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Electrophilic Substitution',
        problem: 'Show nitration of benzene: C₆H₆ + HNO₃ → C₆H₅NO₂ + H₂O.',
        parameters: {
            reaction: 'nitration',
            substrate: 'benzene',
            product: 'nitrobenzene'
        },
        type: 'aromatic_compounds',
        subparts: [
            'Benzene undergoes substitution (not addition)',
            'Reagents: HNO₃ + H₂SO₄ (catalyst)',
            'Electrophile: NO₂⁺ (nitronium ion)',
            'Product: nitrobenzene (C₆H₅NO₂)',
            'Aromatic ring preserved'
        ],
        helper: 'Aromatic substitution: replaces H but keeps ring intact',
        realWorldContext: 'Nitrobenzene synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'electrophilic_substitution',
                substrate: 'benzene'
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `benzene_nitration_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Hückel\'s Rule',
        problem: 'Apply Hückel\'s rule: Which is aromatic - C₄H₄²⁻ or C₈H₈? Explain.',
        parameters: {
            applyHuckelsRule: true,
            molecules: ['C4H4_2minus', 'C8H8'],
            determineAromaticity: true
        },
        type: 'aromatic_compounds',
        subparts: [
            'Hückel\'s rule: 4n+2 π electrons (aromatic)',
            'C₄H₄²⁻: 4+2 = 6 π electrons → aromatic ✓',
            'C₈H₈: 8 π electrons (4n, not 4n+2) → antiaromatic ✗',
            'Must be cyclic, planar, fully conjugated',
            'C₄H₄²⁻ is aromatic despite small ring'
        ],
        helper: 'Aromatic: 4n+2 π electrons; Antiaromatic: 4n π electrons; n = 0,1,2...',
        realWorldContext: 'Predicting aromatic stability',
        diagramInfo: {
            type: 'aromaticRing',
            registryKey: 'aromaticRing',
            renderOptions: {
                showResonance: false,
                showElectronCloud: true,
                compareAromaticity: true,
                molecules: ['C4H4_2minus', 'C8H8']
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `huckels_rule_${Date.now()}.png`;
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

generateRelatedFunctionalGroupsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Identifying Functional Groups',
        problem: 'Identify all functional groups in CH₃CH₂OH (ethanol).',
        parameters: {
            molecule: 'ethanol',
            formula: 'CH3CH2OH',
            identifyGroups: true
        },
        type: 'functional_groups',
        subparts: [
            'Structure: CH₃-CH₂-OH',
            'Functional group: hydroxyl (-OH)',
            'Class: alcohol',
            'Primary alcohol (OH on terminal carbon)',
            'Suffix: -ol (ethanol)'
        ],
        helper: 'Alcohol: -OH group; Primary (1°), Secondary (2°), or Tertiary (3°)',
        realWorldContext: 'Ethanol in alcoholic beverages',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                highlightGroup: 'alcohol',
                molecule: 'ethanol'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `functional_groups_ethanol_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Functional Group Table',
        problem: 'Draw structures for: alcohol, aldehyde, ketone, carboxylic acid.',
        parameters: {
            groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylicAcid'],
            drawStructures: true,
            showTable: true
        },
        type: 'functional_groups',
        subparts: [
            'Alcohol: R-OH (hydroxyl)',
            'Aldehyde: R-CHO (carbonyl at end)',
            'Ketone: R-CO-R (carbonyl in middle)',
            'Carboxylic acid: R-COOH (carboxyl)'
        ],
        helper: 'Carbonyl group (C=O) in aldehydes, ketones, acids',
        realWorldContext: 'Common organic functional groups',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                groups: ['alcohol', 'aldehyde', 'ketone', 'carboxylicAcid']
            },
            canvasSize: { width: 1100, height: 900 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `functional_groups_table_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Multiple Functional Groups',
        problem: 'Identify all functional groups in CH₃COCH₂CH₂COOH.',
        parameters: {
            molecule: 'levulinic_acid',
            formula: 'CH3COCH2CH2COOH',
            multipleGroups: true
        },
        type: 'functional_groups',
        subparts: [
            'Structure analysis from left to right:',
            'CH₃-CO- : ketone group (carbonyl)',
            '-CH₂-CH₂- : alkyl chain',
            '-COOH : carboxylic acid group',
            'Two functional groups: ketone + carboxylic acid'
        ],
        helper: 'Molecules can have multiple functional groups; Priority: acid > ketone',
        realWorldContext: 'Levulinic acid in biomass conversion',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightMultipleGroups: true,
                molecule: 'CH3COCH2CH2COOH'
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `multiple_functional_groups_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Ester Functional Group',
        problem: 'Draw ethyl acetate (CH₃COOCH₂CH₃). Identify ester group.',
        parameters: {
            molecule: 'ethyl_acetate',
            formula: 'CH3COOCH2CH3',
            functionalGroup: 'ester'
        },
        type: 'functional_groups',
        subparts: [
            'Ester functional group: -COO-',
            'Structure: CH₃-CO-O-CH₂-CH₃',
            'Formed from acid + alcohol',
            'Characteristic sweet smell',
            'Named: alkyl alkanoate'
        ],
        helper: 'Ester: -COOR; Formed by condensation of acid + alcohol',
        realWorldContext: 'Ethyl acetate as solvent (nail polish remover)',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                highlightGroup: 'ester',
                molecule: 'ethyl_acetate'
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `ester_functional_group_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Functional Group Priority',
        problem: 'Name: HOCH₂CH₂CHO (has both alcohol and aldehyde). Which takes priority?',
        parameters: {
            molecule: '3-hydroxypropanal',
            hasMultipleGroups: true,
            determinePriority: true
        },
        type: 'functional_groups',
        subparts: [
            'Two groups: -OH (alcohol) and -CHO (aldehyde)',
            'Priority order: aldehyde > alcohol',
            'Name as aldehyde with alcohol as substituent',
            'Correct name: 3-hydroxypropan-1-al',
            'Aldehyde determines suffix (-al)'
        ],
        helper: 'Priority: acid > ester > amide > aldehyde > ketone > alcohol > amine',
        realWorldContext: 'IUPAC nomenclature rules',
        diagramInfo: {
            type: 'functionalGroups',
            registryKey: 'functionalGroups',
            renderOptions: {
                showExamples: true,
                showNames: true,
                showPriority: true,
                molecule: 'HOCH2CH2CHO'
            },
            canvasSize: { width: 1000, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `functional_group_priority_${Date.now()}.png`;
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

generateRelatedIsomerismDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Structural Isomers - C₄H₁₀',
        problem: 'Draw all structural isomers of butane (C₄H₁₀). Show differences in connectivity.',
        parameters: {
            formula: 'C4H10',
            isomerType: 'structural',
            drawAll: true
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: n-butane (straight chain) CH₃-CH₂-CH₂-CH₃',
            'Isomer 2: 2-methylpropane (branched) CH₃-CH(CH₃)-CH₃',
            'Both have same formula C₄H₁₀',
            'Different connectivity = structural isomers',
            'Different physical properties (bp, mp)'
        ],
        helper: 'Structural isomers: same formula, different atom connectivity',
        realWorldContext: 'Butane isomers in lighter fuel',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C4H10',
                isomerType: 'structural'
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `structural_isomers_butane_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Position Isomers',
        problem: 'Draw position isomers of propanol (C₃H₈O). Show difference in -OH location.',
        parameters: {
            formula: 'C3H8O',
            isomerType: 'positional',
            functionalGroup: 'alcohol'
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: propan-1-ol CH₃-CH₂-CH₂-OH',
            'OH on carbon 1 (primary alcohol)',
            'Isomer 2: propan-2-ol CH₃-CH(OH)-CH₃',
            'OH on carbon 2 (secondary alcohol)',
            'Same functional group, different position'
        ],
        helper: 'Position isomers: functional group in different positions',
        realWorldContext: 'Isopropyl alcohol (propan-2-ol) as rubbing alcohol',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C3H8O',
                isomerType: 'positional',
                highlightFunctionalGroup: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `positional_isomers_propanol_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Functional Group Isomers',
        problem: 'Draw functional group isomers of C₂H₆O. Show alcohol vs ether.',
        parameters: {
            formula: 'C2H6O',
            isomerType: 'functional',
            groups: ['alcohol', 'ether']
        },
        type: 'isomerism',
        subparts: [
            'Isomer 1: ethanol CH₃-CH₂-OH (alcohol)',
            'Contains -OH functional group',
            'Isomer 2: dimethyl ether CH₃-O-CH₃ (ether)',
            'Contains C-O-C functional group',
            'Different functional groups = functional isomers'
        ],
        helper: 'Functional isomers: same formula, different functional groups',
        realWorldContext: 'Ethanol (drinking) vs dimethyl ether (propellant)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                formula: 'C2H6O',
                isomerType: 'functional',
                showFunctionalGroups: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `functional_isomers_C2H6O_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Geometric Isomers - But-2-ene',
        problem: 'Draw cis and trans isomers of but-2-ene. Explain stereochemistry.',
        parameters: {
            molecule: 'but-2-ene',
            isomerType: 'geometric',
            showStereochemistry: true
        },
        type: 'isomerism',
        subparts: [
            'But-2-ene: CH₃-CH=CH-CH₃',
            'cis-but-2-ene: both CH₃ on same side of double bond',
            'trans-but-2-ene: CH₃ on opposite sides',
            'Double bond prevents rotation',
            'Geometric isomers (also called E/Z isomers)'
        ],
        helper: 'Geometric isomers: cis (same side) vs trans (opposite); requires restricted rotation',
        realWorldContext: 'Cis/trans isomers have different melting points',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                molecule: 'but-2-ene',
                isomerType: 'geometric',
                show3D: true
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `geometric_isomers_but2ene_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Optical Isomers (Enantiomers)',
        problem: 'Draw mirror image isomers of CHFClBr (chiral carbon). Show non-superimposability.',
        parameters: {
            molecule: 'CHFClBr',
            isomerType: 'optical',
            showChirality: true,
            showMirrorImages: true
        },
        type: 'isomerism',
        subparts: [
            'Chiral carbon: 4 different groups attached',
            'Groups: H, F, Cl, Br (all different)',
            'Two non-superimposable mirror images',
            'Called enantiomers (optical isomers)',
            'Rotate plane-polarized light in opposite directions'
        ],
        helper: 'Optical isomers: mirror images, non-superimposable; require chiral center',
        realWorldContext: 'Drug enantiomers can have different effects (thalidomide)',
        diagramInfo: {
            type: 'isomers',
            registryKey: 'isomers',
            renderOptions: {
                showLabels: true,
                compareStructures: true,
                molecule: 'CHFClBr',
                isomerType: 'optical',
                show3D: true,
                showMirrorPlane: true
            },
            canvasSize: { width: 1100, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `optical_isomers_CHFClBr_${Date.now()}.png`;
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

generateRelatedOrganicReactionsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Substitution Reaction',
        problem: 'Show substitution: CH₃Br + OH⁻ → CH₃OH + Br⁻. Draw mechanism.',
        parameters: {
            reactionType: 'substitution',
            substrate: 'CH3Br',
            nucleophile: 'OH-',
            mechanism: 'SN2'
        },
        type: 'organic_reactions',
        subparts: [
            'SN2 mechanism: nucleophilic substitution, bimolecular',
            'OH⁻ attacks carbon from backside',
            'Br⁻ leaves as leaving group',
            'Product: CH₃OH (methanol)',
            'One-step concerted mechanism'
        ],
        helper: 'SN2: backside attack, inversion of configuration, 1° substrates best',
        realWorldContext: 'Williamson ether synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'SN2',
                reactants: ['CH3Br', 'OH-'],
                product: 'CH3OH'
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `substitution_mechanism_SN2_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Addition to Alkene',
        problem: 'Add HBr to propene: CH₃CH=CH₂ + HBr → ?. Show product.',
        parameters: {
            reactionType: 'addition',
            substrate: 'propene',
            reagent: 'HBr',
            applyMarkovnikov: true
        },
        type: 'organic_reactions',
        subparts: [
            'Propene: CH₃-CH=CH₂',
            'HBr adds across double bond',
            'Markovnikov\'s rule: H to carbon with more H',
            'H adds to CH₂, Br to CH',
            'Product: CH₃-CHBr-CH₃ (2-bromopropane)'
        ],
        helper: 'Markovnikov: H adds to less substituted carbon, X to more substituted',
        realWorldContext: 'Halogenation of alkenes',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'addition',
                reactants: ['propene', 'HBr'],
                product: '2-bromopropane',
                showMarkovnikov: true
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `addition_markovnikov_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Elimination Reaction',
        problem: 'Show E2 elimination: CH₃CH₂Br + OH⁻ → CH₂=CH₂. Draw mechanism with curved arrows.',
        parameters: {
            reactionType: 'elimination',
            substrate: 'CH3CH2Br',
            base: 'OH-',
            mechanism: 'E2'
        },
        type: 'organic_reactions',
        subparts: [
            'E2: elimination, bimolecular, one-step',
            'OH⁻ abstracts H from β-carbon',
            'C-H and C-Br bonds break simultaneously',
            'Double bond forms: C=C',
            'Product: ethene CH₂=CH₂'
        ],
        helper: 'E2: anti-periplanar geometry, strong base, forms alkene',
        realWorldContext: 'Alkene synthesis',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'E2',
                reactants: ['CH3CH2Br', 'OH-'],
                product: 'CH2=CH2'
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `elimination_E2_mechanism_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Esterification',
        problem: 'Show ester formation: CH₃COOH + CH₃OH → CH₃COOCH₃ + H₂O.',
        parameters: {
            reactionType: 'esterification',
            acid: 'CH3COOH',
            alcohol: 'CH3OH',
            catalyst: 'H+'
        },
        type: 'organic_reactions',
        subparts: [
            'Condensation reaction: acid + alcohol',
            'Requires acid catalyst (H₂SO₄)',
            'Water eliminated',
            'Product: ester CH₃COOCH₃ (methyl acetate)',
            'Equilibrium reaction (reversible)'
        ],
        helper: 'Esterification: RCOOH + R\'OH ⇌ RCOOR\' + H₂O (acid catalyst)',
        realWorldContext: 'Ester synthesis for fragrances',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'esterification',
                reactants: ['CH3COOH', 'CH3OH'],
                product: 'CH3COOCH3',
                showWaterElimination: true
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `esterification_reaction_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Oxidation of Alcohols',
        problem: 'Show oxidation: CH₃CH₂OH → CH₃CHO → CH₃COOH. Identify reagents.',
        parameters: {
            reactionType: 'oxidation',
            substrate: 'ethanol',
            products: ['ethanal', 'ethanoic acid'],
            reagent: 'K2Cr2O7/H+'
        },
        type: 'organic_reactions',
        subparts: [
            '1° alcohol → aldehyde → carboxylic acid',
            'Reagent: K₂Cr₂O₇/H⁺ or KMnO₄',
            'Step 1: CH₃CH₂OH → CH₃CHO (partial oxidation)',
            'Step 2: CH₃CHO → CH₃COOH (full oxidation)',
            'Color change: orange Cr₂O₇²⁻ → green Cr³⁺'
        ],
        helper: '1° alcohol → aldehyde → acid; 2° alcohol → ketone; 3° alcohol → no oxidation',
        realWorldContext: 'Alcohol metabolism in liver',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'oxidation',
                showStepwise: true,
                reactants: ['CH3CH2OH'],
                products: ['CH3CHO', 'CH3COOH']
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `alcohol_oxidation_${Date.now()}.png`;
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

generateRelatedNomenclatureDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'IUPAC Naming - Alkane',
        problem: 'Name: CH₃-CH₂-CH(CH₃)-CH₂-CH₃. Show systematic approach.',
        parameters: {
            structure: 'CH3-CH2-CH(CH3)-CH2-CH3',
            compoundType: 'alkane',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Find longest carbon chain (5 carbons = pentane)',
            'Step 2: Number from end nearest branch (1,2,3,4,5)',
            'Step 3: Identify substituent: methyl at position 3',
            'Step 4: Name: 3-methylpentane',
            'Check: lowest number for substituent'
        ],
        helper: 'IUPAC: longest chain + position-substituent + parent name',
        realWorldContext: 'Systematic organic nomenclature',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '3-methylpentane',
                highlightLongestChain: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `iupac_naming_alkane_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Naming Alkenes',
        problem: 'Name: CH₃-CH=CH-CH₃. Specify double bond position.',
        parameters: {
            structure: 'CH3-CH=CH-CH3',
            compoundType: 'alkene',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Identify 4 carbons with double bond (butene)',
            'Step 2: Number chain to give lowest number to C=C',
            'Step 3: Double bond between C2 and C3',
            'Step 4: Name: but-2-ene',
            'Suffix: -ene for alkene'
        ],
        helper: 'Alkene naming: but-2-ene (number shows first carbon of double bond)',
        realWorldContext: 'Naming unsaturated hydrocarbons',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: 'but-2-ene',
                highlightDoubleBond: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `naming_alkene_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Complex Branched Alkane',
        problem: 'Name: CH₃-CH(CH₃)-CH₂-C(CH₃)₂-CH₃. Multiple substituents.',
        parameters: {
            structure: 'CH3-CH(CH3)-CH2-C(CH3)2-CH3',
            compoundType: 'alkane',
            multipleBranches: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Longest chain = 5 carbons (pentane)',
            'Step 2: Number 1,2,3,4,5',
            'Step 3: Methyl at C2 and two methyls at C4',
            'Step 4: Use di- for two identical groups',
            'Name: 2,4,4-trimethylpentane'
        ],
        helper: 'Multiple substituents: use di-, tri-, tetra-; list alphabetically; use commas between numbers',
        realWorldContext: 'Complex organic molecule naming',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '2,4,4-trimethylpentane',
                highlightSubstituents: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `complex_branched_alkane_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Naming Alcohols',
        problem: 'Name: CH₃-CH₂-CH(OH)-CH₃. Specify OH position.',
        parameters: {
            structure: 'CH3-CH2-CH(OH)-CH3',
            functionalGroup: 'alcohol',
            nameCompound: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Longest chain = 4 carbons (butane → butanol)',
            'Step 2: Number to give OH lowest number',
            'Step 3: OH on carbon 2',
            'Step 4: Name: butan-2-ol',
            'Suffix: -ol for alcohol'
        ],
        helper: 'Alcohol naming: number-parent-ol (OH gets priority in numbering)',
        realWorldContext: 'Naming alcohols systematically',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: 'butan-2-ol',
                highlightFunctionalGroup: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `naming_alcohol_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Naming with Multiple Functional Groups',
        problem: 'Name: HOCH₂CH₂CHO (contains alcohol and aldehyde). Apply priority rules.',
        parameters: {
            structure: 'HOCH2CH2CHO',
            functionalGroups: ['alcohol', 'aldehyde'],
            applyPriority: true
        },
        type: 'nomenclature',
        subparts: [
            'Step 1: Identify groups: -OH (alcohol) and -CHO (aldehyde)',
            'Step 2: Priority: aldehyde > alcohol',
            'Step 3: Name as aldehyde with alcohol as prefix',
            'Step 4: 3 carbons with aldehyde = propanal',
            'Name: 3-hydroxypropanal'
        ],
        helper: 'Priority order: COOH > aldehyde > ketone > alcohol > amine; Highest priority = suffix',
        realWorldContext: 'Complex molecule nomenclature',
        diagramInfo: {
            type: 'organicStructuralFormula',
            registryKey: 'organicStructuralFormula',
            renderOptions: {
                showHydrogens: true,
                showBonds: true,
                showNumbering: true,
                molecule: '3-hydroxypropanal',
                highlightMultipleFunctionalGroups: true,
                showPriority: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `naming_multiple_groups_${Date.now()}.png`;
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

generateRelatedMechanismsDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nucleophilic Attack Mechanism',
        problem: 'Draw mechanism for OH⁻ attacking CH₃Br. Show curved arrows for electron flow.',
        parameters: {
            mechanism: 'nucleophilic_attack',
            nucleophile: 'OH-',
            electrophile: 'CH3Br',
            showElectronFlow: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: OH⁻ has lone pair (nucleophile)',
            'Step 2: Curved arrow from OH⁻ lone pair to C',
            'Step 3: Curved arrow from C-Br bond to Br',
            'Step 4: Forms CH₃-OH and Br⁻',
            'Concerted SN2 mechanism (one step)'
        ],
        helper: 'Curved arrow: shows movement of electron pair; Start at electron source, end at electron sink',
        realWorldContext: 'Nucleophilic substitution mechanism',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: true,
                mechanism: 'SN2',
                reactants: ['CH3Br', 'OH-'],
                product: 'CH3OH',
                showElectronPairs: true
            },
            canvasSize: { width: 1100, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `nucleophilic_attack_mechanism_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Carbocation Formation',
        problem: 'Show (CH₃)₃CBr ionization to form carbocation. Draw mechanism.',
        parameters: {
            mechanism: 'carbocation_formation',
            substrate: '(CH3)3CBr',
            showIonization: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: C-Br bond breaks heterolytically',
            'Step 2: Both electrons go to Br (becomes Br⁻)',
            'Step 3: Carbon becomes positively charged',
            'Step 4: Forms (CH₃)₃C⁺ carbocation',
            'Tertiary carbocation (most stable)'
        ],
        helper: 'Carbocation stability: 3° > 2° > 1° > methyl (due to hyperconjugation)',
        realWorldContext: 'SN1 and E1 reaction intermediates',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'ionization',
                substrate: '(CH3)3CBr',
                intermediate: '(CH3)3C+',
                showStability: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `carbocation_formation_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Electrophilic Addition Mechanism',
        problem: 'Draw complete mechanism: CH₂=CH₂ + HBr → CH₃CH₂Br. Show all intermediates.',
        parameters: {
            mechanism: 'electrophilic_addition',
            alkene: 'CH2=CH2',
            reagent: 'HBr',
            showIntermediates: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Step 1: π electrons attack H of HBr',
            'Step 2: Forms carbocation CH₃CH₂⁺ and Br⁻',
            'Step 3: Br⁻ attacks carbocation',
            'Step 4: Product: CH₃CH₂Br',
            'Two-step mechanism with carbocation intermediate'
        ],
        helper: 'Electrophilic addition: π bond attacks electrophile → carbocation → nucleophile attacks',
        realWorldContext: 'Alkene halogenation mechanism',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'electrophilic_addition',
                reactants: ['CH2=CH2', 'HBr'],
                intermediate: 'CH3CH2+',
                product: 'CH3CH2Br',
                showSteps: true
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `electrophilic_addition_mechanism_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'Resonance Stabilization',
        problem: 'Draw resonance structures for allyl carbocation CH₂=CH-CH₂⁺. Show electron delocalization.',
        parameters: {
            molecule: 'allyl_carbocation',
            showResonance: true,
            showDelocalization: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Structure 1: CH₂=CH-CH₂⁺ (+ on C3)',
            'Move π electrons toward positive charge',
            'Structure 2: ⁺CH₂-CH=CH₂ (+ on C1)',
            'Resonance hybrid: positive charge delocalized',
            'Stabilized carbocation due to resonance'
        ],
        helper: 'Resonance: delocalization of electrons increases stability',
        realWorldContext: 'Understanding carbocation stability',
        diagramInfo: {
            type: 'resonance',
            registryKey: 'resonanceStructures',
            renderOptions: {
                showArrows: true,
                showHybrid: true,
                molecule: 'allyl_carbocation',
                structures: 2
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `resonance_allyl_carbocation_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Free Radical Mechanism',
        problem: 'Show free radical chlorination: CH₄ + Cl₂ → CH₃Cl + HCl. Draw initiation, propagation, termination.',
        parameters: {
            mechanism: 'free_radical',
            substrate: 'CH4',
            reagent: 'Cl2',
            showAllSteps: true
        },
        type: 'reaction_mechanisms',
        subparts: [
            'Initiation: Cl₂ → 2Cl· (homolytic cleavage by UV light)',
            'Propagation 1: Cl· + CH₄ → HCl + CH₃·',
            'Propagation 2: CH₃· + Cl₂ → CH₃Cl + Cl·',
            'Termination: Cl· + Cl· → Cl₂ (or other radical combinations)',
            'Chain reaction mechanism'
        ],
        helper: 'Free radical: single electron shown with dot (·); homolytic cleavage',
        realWorldContext: 'Industrial chlorination of methane',
        diagramInfo: {
            type: 'reactionMechanism',
            registryKey: 'reactionMechanism',
            renderOptions: {
                showArrows: true,
                showTransitionState: false,
                mechanism: 'free_radical',
                reactants: ['CH4', 'Cl2'],
                product: 'CH3Cl',
                showAllPhases: true
            },
            canvasSize: { width: 1200, height: 800 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `free_radical_chlorination_${Date.now()}.png`;
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

generateRelatedPolymersDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Addition Polymerization - Ethene',
        problem: 'Show polymerization of ethene to polyethylene. Draw repeating unit.',
        parameters: {
            monomer: 'ethene',
            polymer: 'polyethylene',
            polymerizationType: 'addition'
        },
        type: 'polymers',
        subparts: [
            'Monomer: CH₂=CH₂ (ethene)',
            'Double bond opens under heat/pressure/catalyst',
            'Forms -CH₂-CH₂- repeating unit',
            'Polymer: [-CH₂-CH₂-]ₙ where n = thousands',
            'Addition polymerization (no small molecule lost)'
        ],
        helper: 'Addition polymer: double bond opens, monomers link; formula: [-monomer-]ₙ',
        realWorldContext: 'Plastic bags and bottles',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'ethene',
                polymer: 'polyethylene'
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `polyethylene_formation_${Date.now()}.png`;
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
        difficulty: 'easier',
        scenario: 'Naming Polymers',
        problem: 'Name the polymer formed from propene (CH₃CH=CH₂). Draw structure.',
        parameters: {
            monomer: 'propene',
            namePolymer: true,
            drawStructure: true
        },
        type: 'polymers',
        subparts: [
            'Monomer: propene CH₃-CH=CH₂',
            'Polymer name: poly(propene) or polypropylene',
            'Repeating unit: [-CH₂-CH(CH₃)-]ₙ',
            'Systematic naming: poly + (monomer name)',
            'Common name: polypropylene (PP)'
        ],
        helper: 'Polymer naming: poly(monomer name) in parentheses',
        realWorldContext: 'Polypropylene in food containers',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'propene',
                polymer: 'polypropylene',
                showNaming: true
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `polypropylene_naming_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Condensation Polymerization',
        problem: 'Show polyester formation from HOOC-COOH + HO-CH₂-CH₂-OH. Identify eliminated molecule.',
        parameters: {
            monomer1: 'dicarboxylic_acid',
            monomer2: 'diol',
            polymerizationType: 'condensation',
            identifyByproduct: true
        },
        type: 'polymers',
        subparts: [
            'Monomers: diacid + diol',
            'Ester linkage forms: -COO-',
            'Water eliminated at each linkage',
            'Repeating unit: [-OC-CO-O-CH₂-CH₂-]ₙ',
            'Condensation polymer: small molecule (H₂O) eliminated'
        ],
        helper: 'Condensation: two different monomers react, eliminating H₂O (or HCl, NH₃)',
        realWorldContext: 'Polyester (PET) in clothing and bottles',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                polymerizationType: 'condensation',
                showByproduct: true,
                showEsterLinkage: true
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `condensation_polyester_${Date.now()}.png`;
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
        difficulty: 'similar',
        scenario: 'PVC Formation',
        problem: 'Show formation of PVC from vinyl chloride (CH₂=CHCl). Draw repeating unit.',
        parameters: {
            monomer: 'vinyl_chloride',
            polymer: 'PVC',
            drawRepeatingUnit: true
        },
        type: 'polymers',
        subparts: [
            'Monomer: vinyl chloride CH₂=CHCl',
            'Addition polymerization',
            'Repeating unit: [-CH₂-CHCl-]ₙ',
            'Polymer: poly(vinyl chloride) = PVC',
            'Used in pipes and insulation'
        ],
        helper: 'PVC: common polymer for construction materials',
        realWorldContext: 'PVC pipes and vinyl records',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                monomer: 'vinyl_chloride',
                polymer: 'PVC'
            },
            canvasSize: { width: 1100, height: 600 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `pvc_formation_${Date.now()}.png`;
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
        difficulty: 'harder',
        scenario: 'Nylon Formation',
        problem: 'Show nylon-6,6 synthesis from hexanedioic acid + hexane-1,6-diamine. Identify linkage type.',
        parameters: {
            monomer1: 'hexanedioic_acid',
            monomer2: 'hexanediamine',
            polymer: 'nylon-6,6',
            identifyLinkage: true
        },
        type: 'polymers',
        subparts: [
            'Monomers: 6-carbon diacid + 6-carbon diamine',
            'Amide linkage forms: -CONH-',
            'Water eliminated at each linkage',
            'Repeating unit: [-OC-(CH₂)₄-CO-NH-(CH₂)₆-NH-]ₙ',
            'Polyamide: contains amide groups'
        ],
        helper: 'Nylon: condensation polymer with amide linkages; strong fibers',
        realWorldContext: 'Nylon in clothing, ropes, parachutes',
        diagramInfo: {
            type: 'polymerization',
            registryKey: 'polymerization',
            renderOptions: {
                showRepeatingUnit: true,
                showArrows: true,
                polymerizationType: 'condensation',
                showByproduct: true,
                showAmideLinkage: true,
                polymer: 'nylon-6,6'
            },
            canvasSize: { width: 1200, height: 700 }
        },
        generateDiagram: async function() {
            try {
                console.log('Starting diagram generation for:', this.scenario);
                const renderer = new ChemistryDiagramRenderer();
                const canvas = await renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = await canvas.encode('png');
                const filename = `nylon_66_formation_${Date.now()}.png`;
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


