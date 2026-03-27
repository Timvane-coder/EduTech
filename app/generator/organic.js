
// ============================================================================
// ORGANIC CHEMISTRY GENERATORS (10 generators)
// ============================================================================

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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `butane_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `hexane_skeletal_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `methylpentane_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `propane_combustion_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `pentane_isomers_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `propene_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `butene_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alkene_addition_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ethene_polymerization_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `geometric_isomers_butene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `propyne_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ethyne_structural_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alkyne_bonding_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `comparing_hydrocarbons_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alkyne_hydrogenation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `benzene_resonance_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `toluene_structure_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `benzene_stability_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `benzene_nitration_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `huckels_rule_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_groups_ethanol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_groups_table_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `multiple_functional_groups_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `ester_functional_group_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Functional Group Priority',
        problem: 'Name: HOCH₂CH₂CHO (has both alcohol and aldehyde). Which takes priority?',
        parameters: {
            molecule: '3-hydroxypropanal',
            hasMultipleGroups: true,
            determinePriority:
            true
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_group_priority_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

const EndSection6 = "close";