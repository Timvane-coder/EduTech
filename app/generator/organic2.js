

// ============================================================================
// ORGANIC CHEMISTRY GENERATORS (Continued)
// ============================================================================

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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `structural_isomers_butane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `positional_isomers_propanol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `functional_isomers_C2H6O_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `geometric_isomers_but2ene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `optical_isomers_CHFClBr_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `substitution_mechanism_SN2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `addition_markovnikov_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `elimination_E2_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `esterification_reaction_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `alcohol_oxidation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `iupac_naming_alkane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `naming_alkene_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `complex_branched_alkane_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `naming_alcohol_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `naming_multiple_groups_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nucleophilic_attack_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `carbocation_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `electrophilic_addition_mechanism_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `resonance_allyl_carbocation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `free_radical_chlorination_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `polyethylene_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `polypropylene_naming_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `condensation_polyester_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `pvc_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
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
        generateDiagram: function() {
            const canvas = createCanvas(this.diagramInfo.canvasSize.width, this.diagramInfo.canvasSize.height);
            const renderer = new ChemistryDiagramRenderer(canvas);
            renderer.renderDiagram(this.diagramInfo.registryKey, 0, 0,
                this.diagramInfo.canvasSize.width,
                this.diagramInfo.canvasSize.height,
                this.diagramInfo.renderOptions);
            const buffer = canvas.toBuffer('image/png');
            const filename = `nylon_66_formation_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

const EndSection8 = "close";