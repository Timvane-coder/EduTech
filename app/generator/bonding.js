

// ============================================================================
// CHEMICAL BONDING GENERATORS (4 generators)
// ============================================================================

generateRelatedLewisStructuresDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Ammonia',
        problem: 'Draw the Lewis structure for NH₃. How many bonding and lone pairs does nitrogen have?',
        parameters: {
            molecule: 'NH3',
            centralAtom: 'N',
            valenceElectrons: 8,
            bondingPairs: 3,
            lonePairs: 1
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence electrons: N(5) + H(1×3) = 8',
            'N is central atom',
            'Form 3 N-H single bonds: uses 6 electrons',
            'Remaining: 8 - 6 = 2 electrons',
            'Place as lone pair on N: 1 lone pair',
            'Answer: 3 bonding pairs, 1 lone pair',
            'N has complete octet (8e⁻)'
        ],
        helper: 'Steps: 1) Count valence e⁻, 2) Draw skeleton, 3) Distribute e⁻, 4) Check octets',
        realWorldContext: 'Ammonia structure affects its basicity',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - NH₃',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'NH3'
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
            const filename = `lewis_structure_ammonia_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Lewis Structure - Simple Molecule',
        problem: 'Draw the Lewis structure for Cl₂. What type of bond is present?',
        parameters: {
            molecule: 'Cl2',
            valenceElectrons: 14,
            bondType: 'single covalent',
            lonePairsPerAtom: 3
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: Cl(7) + Cl(7) = 14 electrons',
            'Each Cl needs 8 electrons (octet)',
            'Share 2 electrons: Cl-Cl single bond',
            'Remaining: 14 - 2 = 12 electrons',
            'Distribute as lone pairs: 3 on each Cl',
            'Bond type: single covalent bond',
            'Each Cl: 2(bond) + 6(lone) = 8e⁻ ✓'
        ],
        helper: 'Diatomic molecules: share electrons to complete octets',
        realWorldContext: 'Chlorine gas molecule',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - Cl₂',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'Cl2'
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
            const filename = `lewis_structure_cl2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lewis Structure - CO₂',
        problem: 'Draw the Lewis structure for CO₂. Explain why carbon forms double bonds with oxygen.',
        parameters: {
            molecule: 'CO2',
            centralAtom: 'C',
            valenceElectrons: 16,
            bondType: 'double bonds',
            geometry: 'linear'
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: C(4) + O(6×2) = 16 electrons',
            'C is central (less electronegative)',
            'Try single bonds: O-C-O uses 4 electrons',
            'Distribute remaining 12: fills O octets',
            'C only has 4 electrons (incomplete octet)',
            'Form double bonds: O=C=O',
            'Now all atoms have octets',
            'Structure: O=C=O (linear)'
        ],
        helper: 'If central atom lacks octet, try multiple bonds',
        realWorldContext: 'CO₂ linear structure makes it nonpolar',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - CO₂',
                showLonePairs: true,
                showFormalCharges: false,
                molecule: 'CO2',
                showMultipleBonds: true
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
            const filename = `lewis_structure_co2_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Formal Charge Calculation',
        problem: 'For CO₂, calculate the formal charge on each atom. Is the structure stable?',
        parameters: {
            molecule: 'CO2',
            formalCharges: { C: 0, O1: 0, O2: 0 },
            stable: true
        },
        type: 'lewis_structures',
        subparts: [
            'Formal charge = V - (L + ½B)',
            'V=valence, L=lone pairs, B=bonding electrons',
            'Carbon: FC = 4 - (0 + ½×8) = 4 - 4 = 0',
            'Each Oxygen: FC = 6 - (4 + ½×4) = 6 - 6 = 0',
            'All formal charges = 0',
            'Result: stable structure ✓',
            'Best structure has FC closest to zero'
        ],
        helper: 'FC = valence e⁻ - lone e⁻ - ½(bonding e⁻)',
        realWorldContext: 'Formal charges predict most stable resonance form',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - CO₂ with Formal Charges',
                showLonePairs: true,
                showFormalCharges: true,
                molecule: 'CO2'
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
            const filename = `lewis_structure_formal_charge_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Lewis Structure - Polyatomic Ion',
        problem: 'Draw the Lewis structure for NH₄⁺ (ammonium ion). Where is the positive charge?',
        parameters: {
            molecule: 'NH4+',
            centralAtom: 'N',
            valenceElectrons: 8,
            charge: 1,
            coordinateBond: true
        },
        type: 'lewis_structures',
        subparts: [
            'Count valence: N(5) + H(1×4) - 1(charge) = 8',
            'N is central, 4 H atoms around it',
            'Form 4 N-H single bonds: uses 8 electrons',
            'All electrons used, no lone pairs',
            'N has 8 electrons (4 bonds × 2)',
            'Positive charge is on entire ion',
            'One bond is coordinate (N donated both e⁻)'
        ],
        helper: 'For cations: subtract charge from valence electrons',
        realWorldContext: 'Ammonium ion in fertilizers',
        diagramInfo: {
            type: 'lewisStructure',
            registryKey: 'lewisStructureWater',
            renderOptions: {
                title: 'Lewis Structure - NH₄⁺',
                showLonePairs: false,
                showFormalCharges: true,
                molecule: 'NH4+',
                showCharge: true
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
            const filename = `lewis_structure_ammonium_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}



generateRelatedVSEPRDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR - Ammonia Geometry',
        problem: 'Using VSEPR theory, predict the molecular geometry of NH₃.',
        parameters: {
            molecule: 'NH3',
            centralAtom: 'N',
            electronPairs: 4,
            bondingPairs: 3,
            lonePairs: 1,
            electronGeometry: 'tetrahedral',
            molecularGeometry: 'trigonal pyramidal'
        },
        type: 'vsepr_theory',
        subparts: [
            'Count electron pairs on N: 3 bonds + 1 lone = 4',
            'Electron geometry: tetrahedral (4 pairs)',
            'Molecular geometry: ignore lone pairs',
            'With 1 lone pair: trigonal pyramidal',
            'Bond angle: ~107° (less than 109.5°)',
            'Lone pair pushes bonds closer together'
        ],
        helper: 'Molecular shape = electron geometry minus lone pairs',
        realWorldContext: 'NH₃ pyramidal shape makes it polar',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Trigonal Pyramidal (NH₃)',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                molecule: 'NH3',
                geometry: 'trigonal_pyramidal'
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
            const filename = `vsepr_ammonia_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'VSEPR - Linear Molecule',
        problem: 'Why is CO₂ linear? Use VSEPR theory to explain.',
        parameters: {
            molecule: 'CO2',
            centralAtom: 'C',
            electronPairs: 2,
            bondingPairs: 2,
            lonePairs: 0,
            geometry: 'linear',
            bondAngle: 180
        },
        type: 'vsepr_theory',
        subparts: [
            'Carbon has 2 double bonds (2 electron groups)',
            'Double bond counts as 1 electron group',
            'Total: 2 electron groups',
            'No lone pairs on C',
            'Electron geometry: linear',
            'Molecular geometry: linear',
            'Bond angle: 180° (maximum separation)'
        ],
        helper: 'Multiple bonds count as ONE electron group',
        realWorldContext: 'CO₂ linear → nonpolar despite polar bonds',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Linear (CO₂)',
                show3D: true,
                showBondAngles: true,
                molecule: 'CO2',
                geometry: 'linear'
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
            const filename = `vsepr_co2_linear_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'VSEPR - T-Shaped Molecule',
        problem: 'Predict the molecular geometry of ClF₃. Explain why it is T-shaped.',
        parameters: {
            molecule: 'ClF3',
            centralAtom: 'Cl',
            electronPairs: 5,
            bondingPairs: 3,
            lonePairs: 2,
            electronGeometry: 'trigonal bipyramidal',
            molecularGeometry: 'T-shaped'
        },
        type: 'vsepr_theory',
        subparts: [
            'Cl has 7 valence, 3 bonds to F',
            'Electron pairs: 3 bonds + 2 lone = 5 total',
            'Electron geometry: trigonal bipyramidal',
            'Lone pairs prefer equatorial positions',
            '2 lone pairs (equatorial) + 3 bonds',
            'Molecular geometry: T-shaped',
            'Bond angles: ~87.5° (less than 90°)'
        ],
        helper: '5 pairs: lone pairs occupy equatorial first (more room)',
        realWorldContext: 'ClF₃ is a powerful fluorinating agent',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - T-Shaped (ClF₃)',
                show3D: true,
                showBondAngles: true,
                showLonePairs: true,
                molecule: 'ClF3',
                geometry: 't_shaped'
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
            const filename = `vsepr_clf3_tshaped_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'VSEPR - Trigonal Planar',
        problem: 'Determine the molecular geometry of BF₃ using VSEPR theory.',
        parameters: {
            molecule: 'BF3',
            centralAtom: 'B',
            electronPairs: 3,
            bondingPairs: 3,
            lonePairs: 0,
            geometry: 'trigonal planar',
            bondAngle: 120
        },
        type: 'vsepr_theory',
        subparts: [
            'B has 3 valence electrons',
            '3 bonds to F atoms',
            'Total electron groups: 3',
            'No lone pairs on B',
            'Electron geometry: trigonal planar',
            'Molecular geometry: trigonal planar',
            'Bond angle: 120° (equal separation)',
            'Note: B has incomplete octet (6e⁻)'
        ],
        helper: 'B and Be are exceptions to octet rule',
        realWorldContext: 'BF₃ is a Lewis acid (electron acceptor)',
        diagramInfo: {
            type: 'vseprGeometry',
            registryKey: 'vsepGeometry',
            renderOptions: {
                title: 'VSEPR - Trigonal Planar (BF₃)',
                show3D: true,
                showBondAngles: true,
                molecule: 'BF3',
                geometry: 'trigonal_planar'
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
            const filename = `vsepr_bf3_trigonal_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedBondPolarityDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Bond Polarity - HCl',
        problem: 'Determine if the H-Cl bond is polar or nonpolar. Show the dipole moment.',
        parameters: {
            molecule: 'HCl',
            atom1: { element: 'H', en: 2.20 },
            atom2: { element: 'Cl', en: 3.16 },
            enDifference: 0.96,
            bondType: 'polar covalent'
        },
        type: 'bond_polarity',
        subparts: [
            'Electronegativity: H = 2.20, Cl = 3.16',
            'Calculate difference: |3.16 - 2.20| = 0.96',
            '0.5 < ΔEN < 1.7 → polar covalent',
            'Cl is more electronegative',
            'Cl end is δ⁻ (partial negative)',
            'H end is δ⁺ (partial positive)',
            'Dipole moment: H→Cl (arrow toward Cl)'
        ],
        helper: 'Nonpolar: ΔEN < 0.5; Polar: 0.5-1.7; Ionic: > 1.7',
        realWorldContext: 'HCl polarity makes it dissolve in water',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Polar Bond - HCl',
                showDipole: true,
                showDelta: true,
                showElectronegativity: true,
                molecule: 'HCl'
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
            const filename = `bond_polarity_hcl_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Nonpolar Bond - Cl₂',
        problem: 'Explain why the Cl-Cl bond in Cl₂ is nonpolar.',
        parameters: {
            molecule: 'Cl2',
            atom1: { element: 'Cl', en: 3.16 },
            atom2: { element: 'Cl', en: 3.16 },
            enDifference: 0,
            bondType: 'nonpolar covalent'
        },
        type: 'bond_polarity',
        subparts: [
            'Both atoms are chlorine',
            'Same electronegativity: 3.16 = 3.16',
            'ΔEN = 0',
            'Electrons shared equally',
            'No partial charges (no δ⁺ or δ⁻)',
            'Result: nonpolar covalent bond',
            'No dipole moment'
        ],
        helper: 'Diatomic molecules of same element are always nonpolar',
        realWorldContext: 'All diatomic elements (H₂, O₂, N₂) are nonpolar',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Nonpolar Bond - Cl₂',
                showDipole: false,
                showDelta: false,
                showElectronegativity: true,
                molecule: 'Cl2',
                showEqualSharing: true
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
            const filename = `bond_polarity_cl2_nonpolar_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Molecular Polarity - CO₂ vs H₂O',
        problem: 'Both CO₂ and H₂O have polar bonds. Explain why CO₂ is nonpolar but H₂O is polar.',
        parameters: {
            molecule1: 'CO2',
            molecule2: 'H2O',
            geometry1: 'linear',
            geometry2: 'bent'
        },
        type: 'bond_polarity',
        subparts: [
            'CO₂: Two C=O polar bonds',
            'Geometry: linear (180°)',
            'Dipoles equal and opposite → cancel out',
            'Net dipole = 0 → nonpolar molecule',
            'H₂O: Two O-H polar bonds',
            'Geometry: bent (~104.5°)',
            'Dipoles do NOT cancel → add up',
            'Net dipole ≠ 0 → polar molecule',
            'Shape determines molecular polarity'
        ],
        helper: 'Molecular polarity = vector sum of bond dipoles',
        realWorldContext: 'Water polarity is why it is universal solvent',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Molecular Polarity - CO₂ vs H₂O',
                showDipole: true,
                showNetDipole: true,
                showComparison: true,
                molecules: ['CO2', 'H2O']
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
            const filename = `molecular_polarity_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Predicting Polarity',
        problem: 'Predict whether NH₃ is polar or nonpolar. Explain your reasoning.',
        parameters: {
            molecule: 'NH3',
            geometry: 'trigonal pyramidal',
            symmetrical: false,
            polar: true
        },
        type: 'bond_polarity',
        subparts: [
            'NH₃ has 3 N-H polar bonds',
            'N (EN=3.04) > H (EN=2.20)',
            'Each bond is polar (ΔEN = 0.84)',
            'Geometry: trigonal pyramidal (asymmetrical)',
            'Lone pair on top creates asymmetry',
            'Bond dipoles do NOT cancel',
            'Net dipole points toward N',
            'Result: NH₃ is polar'
        ],
        helper: 'Asymmetrical molecules with polar bonds → polar',
        realWorldContext: 'NH₃ polarity allows it to dissolve in water',
        diagramInfo: {
            type: 'polarBonds',
            registryKey: 'polarBonds',
            renderOptions: {
                title: 'Molecular Polarity - NH₃',
                showDipole: true,
                showNetDipole: true,
                showGeometry: true,
                molecule: 'NH3'
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
            const filename = `molecular_polarity_nh3_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}

generateRelatedIntermolecularForcesDiagram(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Intermolecular Forces - Types',
        problem: 'Identify the strongest intermolecular force in: (a) CH₄ (b) HCl (c) H₂O',
        parameters: {
            molecules: [
                { formula: 'CH4', force: 'London dispersion' },
                { formula: 'HCl', force: 'Dipole-dipole' },
                { formula: 'H2O', force: 'Hydrogen bonding' }
            ]
        },
        type: 'intermolecular_forces',
        subparts: [
            '(a) CH₄: nonpolar molecule',
            'Only London dispersion forces',
            '(b) HCl: polar molecule',
            'Dipole-dipole forces (stronger than London)',
            '(c) H₂O: H bonded to O (very electronegative)',
            'Hydrogen bonding (strongest IMF)',
            'Strength order: H-bond > dipole > London',
            'H₂O has highest boiling point'
        ],
        helper: 'H-bonding: H attached to N, O, or F',
        realWorldContext: 'IMF strength determines boiling points',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Types of Intermolecular Forces',
                showStrength: true,
                showExamples: true,
                forces: ['london', 'dipole', 'hydrogen']
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
            const filename = `intermolecular_forces_types_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'London Dispersion Forces',
        problem: 'Explain why all molecules have London dispersion forces.',
        parameters: {
            force: 'London dispersion',
            molecules: 'all',
            cause: 'temporary dipoles'
        },
        type: 'intermolecular_forces',
        subparts: [
            'Electrons are constantly moving',
            'Temporary uneven distribution creates instant dipole',
            'Induces dipole in neighboring molecule',
            'Weak attraction between temporary dipoles',
            'Present in ALL molecules (even nonpolar)',
            'Strength increases with molecular size',
            'More electrons → stronger London forces',
            'Example: I₂ (solid) vs Cl₂ (gas) at room temp'
        ],
        helper: 'London forces ↑ with molar mass and surface area',
        realWorldContext: 'Geckos use London forces to stick to walls',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'London Dispersion Forces',
                showStrength: true,
                showExamples: true,
                highlightForce: 'london',
                showElectronCloud: true
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
            const filename = `london_dispersion_forces_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Hydrogen Bonding - Boiling Points',
        problem: 'Explain why H₂O (bp 100°C) has a much higher boiling point than H₂S (bp -60°C).',
        parameters: {
            molecule1: { formula: 'H2O', bp: 100, imf: 'hydrogen bonding' },
            molecule2: { formula: 'H2S', bp: -60, imf: 'dipole-dipole' }
        },
        type: 'intermolecular_forces',
        subparts: [
            'H₂O: H bonded to O (highly electronegative)',
            'Strong hydrogen bonding between molecules',
            'H-bonds are strongest IMF (~20 kJ/mol)',
            'H₂S: H bonded to S (less electronegative)',
            'S is Period 3, not in N-O-F group',
            'Only dipole-dipole forces (~5 kJ/mol)',
            'Stronger IMF → more energy to break',
            'Result: H₂O bp >> H₂S bp'
        ],
        helper: 'H-bonding only with N, O, F (small, highly electronegative)',
        realWorldContext: 'H-bonding makes water liquid at room temperature',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Hydrogen Bonding vs Dipole-Dipole',
                showStrength: true,
                showExamples: true,
                highlightForce: 'hydrogen',
                showComparison: true,
                molecules: ['H2O', 'H2S']
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
            const filename = `hydrogen_bonding_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'IMF Strength Comparison',
        problem: 'Rank these molecules by increasing boiling point: Ne, HF, CH₄, NH₃',
        parameters: {
            molecules: [
                { formula: 'Ne', imf: 'London', size: 'small', bp: -246 },
                { formula: 'CH4', imf: 'London', size: 'small', bp: -162 },
                { formula: 'NH3', imf: 'H-bonding', bp: -33 },
                { formula: 'HF', imf: 'H-bonding', bp: 20 }
            ]
        },
        type: 'intermolecular_forces',
        subparts: [
            'Ne: only London forces (single atom)',
            'CH₄: only London forces (nonpolar)',
            'NH₃: hydrogen bonding (H-N)',
            'HF: hydrogen bonding (H-F, strongest)',
            'London < H-bonding',
            'Among London: larger molecule → higher bp',
            'Among H-bonds: stronger polarity → higher bp',
            'Order: Ne < CH₄ < NH₃ < HF'
        ],
        helper: 'bp ∝ IMF strength: H-bond > dipole > London',
        realWorldContext: 'Predicting physical properties from structure',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'IMF Strength and Boiling Points',
                showStrength: true,
                showExamples: true,
                showBoilingPoints: true,
                molecules: ['Ne', 'CH4', 'NH3', 'HF']
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
            const filename = `imf_strength_comparison_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Ion-Dipole Forces',
        problem: 'Explain the ion-dipole interactions when NaCl dissolves in water. Why is this force strong?',
        parameters: {
            solute: 'NaCl',
            solvent: 'H2O',
            force: 'ion-dipole',
            process: 'dissolution'
        },
        type: 'intermolecular_forces',
        subparts: [
            'NaCl dissociates: Na⁺ + Cl⁻ ions',
            'Water is polar (δ⁺ on H, δ⁻ on O)',
            'Na⁺ attracts δ⁻ oxygen ends of water',
            'Cl⁻ attracts δ⁺ hydrogen ends of water',
            'Ion-dipole: full charge ↔ partial charge',
            'Stronger than dipole-dipole forces',
            'Hydration releases energy',
            'Result: NaCl dissolves readily in water'
        ],
        helper: 'Ion-dipole is strongest IMF (but not a bond)',
        realWorldContext: 'Why ionic compounds dissolve in polar solvents',
        diagramInfo: {
            type: 'intermolecularForces',
            registryKey: 'intermolecularForces',
            renderOptions: {
                title: 'Ion-Dipole Forces - NaCl in Water',
                showStrength: true,
                showExamples: true,
                highlightForce: 'ion-dipole',
                showHydration: true
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
            const filename = `ion_dipole_forces_${Date.now()}.png`;
            fs.writeFileSync(filename, buffer);
            return { success: true, filename: filename, path: `./${filename}` };
        }
    });

    return relatedProblems;
}


const EndSection2 = "close";