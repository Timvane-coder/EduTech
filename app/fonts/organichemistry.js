// Enhanced Organic Chemistry Mathematical Workbook - Improved Step-by-Step Explanations
import * as math from 'mathjs';

export class EnhancedOrganicChemistryMathematicalWorkbook {
    constructor(options = {}) {
        this.width = options.width || 1400;
        this.height = options.height || 2000;
        this.theme = options.theme || "excel";
        this.cellWidth = 200;
        this.cellHeight = 28;
        this.headerHeight = 35;
        this.mathHeight = 40;
        this.rowLabelWidth = 60;
        this.fontSize = 12;
        this.mathFontSize = 14;

        this.currentProblem = null;
        this.currentSolution = null;
        this.solutionSteps = [];
        this.currentWorkbook = null;
        this.diagramData = null;

        // Enhanced explanation options
        this.explanationLevel = options.explanationLevel || 'intermediate'; // 'basic', 'intermediate', 'detailed', 'scaffolded'
        this.includeVerificationInSteps = options.includeVerificationInSteps !== false;
        this.includeConceptualConnections = options.includeConceptualConnections !== false;
        this.includeAlternativeMethods = options.includeAlternativeMethods !== false;
        this.includeErrorPrevention = options.includeErrorPrevention !== false;
        this.includeCommonMistakes = options.includeCommonMistakes !== false;
        this.includePedagogicalNotes = options.includePedagogicalNotes !== false;
        this.verificationDetail = options.verificationDetail || 'detailed';
        this.includeMechanisms = options.includeMechanisms !== false;
        this.includeStereochemistry = options.includeStereochemistry !== false;

        this.organicSymbols = this.initializeOrganicSymbols();
        this.setThemeColors();
        this.initializeOrganicChemistrySolvers();
        this.initializeErrorDatabase();
        this.initializeExplanationTemplates();
        this.initializeFunctionalGroups();
        this.initializeReactionMechanisms();
        this.initializeNomenclatureRules();
    }

    initializeOrganicChemistryLessons() {
        this.lessons = {
            nomenclature_alkanes: {
                title: "IUPAC Nomenclature - Alkanes",
                concepts: [
                    "Identify the longest continuous carbon chain (parent chain)",
                    "Number carbons to give substituents lowest numbers",
                    "Name substituents alphabetically (ignoring prefixes like di-, tri-)",
                    "Use prefixes: meth- (1C), eth- (2C), prop- (3C), but- (4C), pent- (5C), hex- (6C), hept- (7C), oct- (8C), non- (9C), dec- (10C)"
                ],
                theory: "IUPAC nomenclature provides a systematic method to name organic compounds. The name reveals the structure, allowing chemists worldwide to communicate unambiguously about specific molecules.",
                keyFormulas: {
                    "Parent Chain": "Longest continuous carbon chain determines base name",
                    "Numbering": "Start from end giving substituents lowest position numbers",
                    "Substituent Naming": "Position-prefix (methyl, ethyl, etc.)",
                    "Multiple Substituents": "Use di-, tri-, tetra- for identical groups"
                },
                solvingSteps: [
                    "Find and number the longest continuous carbon chain",
                    "Identify and name all substituents",
                    "Assign numbers to each substituent",
                    "Arrange substituents alphabetically",
                    "Combine: position-substituent-position-substituent...parent-ane"
                ],
                applications: [
                    "Naming hydrocarbons in petroleum industry",
                    "Pharmaceutical compound identification",
                    "Chemical database searching",
                    "Patent documentation"
                ]
            },

            nomenclature_functional_groups: {
                title: "Functional Group Nomenclature",
                concepts: [
                    "Identify highest priority functional group (suffix)",
                    "Other functional groups become prefixes",
                    "Priority order: carboxylic acid > ester > amide > aldehyde > ketone > alcohol > amine > alkene > alkyne > alkane",
                    "Numbering gives highest priority group lowest number"
                ],
                theory: "Functional groups determine chemical reactivity. Proper nomenclature identifies all functional groups and their positions, predicting chemical behavior and synthesis pathways.",
                keyFormulas: {
                    "Alcohol": "-ol suffix (hydroxyl -OH)",
                    "Aldehyde": "-al suffix (formyl -CHO)",
                    "Ketone": "-one suffix (carbonyl C=O)",
                    "Carboxylic Acid": "-oic acid suffix (-COOH)",
                    "Amine": "-amine suffix or amino- prefix (-NH₂)",
                    "Alkene": "-ene suffix (C=C)",
                    "Alkyne": "-yne suffix (C≡C)"
                },
                solvingSteps: [
                    "Identify all functional groups present",
                    "Determine highest priority group (suffix)",
                    "Find longest chain containing the priority group",
                    "Number to give priority group lowest number",
                    "Name other groups as prefixes",
                    "Assemble complete name with proper formatting"
                ],
                applications: [
                    "Drug naming and classification",
                    "Synthesis planning",
                    "Spectroscopic identification",
                    "Regulatory compliance"
                ]
            },

            stereochemistry_chirality: {
                title: "Stereochemistry and Chirality",
                concepts: [
                    "Chirality: non-superimposable mirror images (enantiomers)",
                    "Chiral center: carbon with 4 different substituents",
                    "R/S nomenclature: Cahn-Ingold-Prelog priority rules",
                    "Optical activity: rotation of plane-polarized light"
                ],
                theory: "Stereochemistry describes 3D molecular arrangements. Enantiomers have identical physical properties except optical rotation, but often different biological activities. Understanding stereochemistry is crucial in drug design.",
                keyFormulas: {
                    "Enantiomers": "2ⁿ where n = number of chiral centers",
                    "Specific Rotation": "[α] = α / (l × c)",
                    "Priority Rules": "Higher atomic number = higher priority",
                    "R/S Assignment": "1→2→3→4 clockwise = R, counterclockwise = S"
                },
                solvingSteps: [
                    "Identify chiral centers (C with 4 different groups)",
                    "Assign priorities to substituents (atomic number)",
                    "Orient molecule with lowest priority pointing away",
                    "Trace path 1→2→3",
                    "Clockwise = R configuration, counterclockwise = S"
                ],
                applications: [
                    "Pharmaceutical development (one enantiomer often active)",
                    "Understanding enzyme specificity",
                    "Synthesis of optically pure compounds",
                    "Chiral chromatography"
                ]
            },

            reaction_mechanisms_sn2: {
                title: "SN2 Reaction Mechanism",
                concepts: [
                    "Bimolecular nucleophilic substitution",
                    "One-step concerted mechanism",
                    "Backside attack causes inversion of configuration",
                    "Rate = k[substrate][nucleophile] (second order)",
                    "Favored by: primary substrates, strong nucleophiles, polar aprotic solvents"
                ],
                theory: "SN2 reactions proceed through a single transition state where bond breaking and forming occur simultaneously. The nucleophile attacks from the side opposite to the leaving group, resulting in stereochemical inversion (Walden inversion).",
                keyFormulas: {
                    "Rate Law": "Rate = k[RX][Nu⁻]",
                    "Transition State": "[Nu---R---X]‡ (pentacoordinate)",
                    "Stereochemistry": "Inversion of configuration",
                    "Energy Diagram": "Single energy barrier"
                },
                solvingSteps: [
                    "Identify substrate (RX) and nucleophile (Nu⁻)",
                    "Draw nucleophile attacking from backside",
                    "Show transition state with partial bonds",
                    "Show product with inverted stereochemistry",
                    "Indicate leaving group departure"
                ],
                applications: [
                    "Williamson ether synthesis",
                    "Gabriel synthesis of amines",
                    "Laboratory substitutions",
                    "Synthesis planning with stereochemical control"
                ]
            },

            reaction_mechanisms_sn1: {
                title: "SN1 Reaction Mechanism",
                concepts: [
                    "Unimolecular nucleophilic substitution",
                    "Two-step mechanism: ionization then nucleophile attack",
                    "Carbocation intermediate formation",
                    "Rate = k[substrate] (first order, independent of nucleophile)",
                    "Favored by: tertiary substrates, weak nucleophiles, polar protic solvents"
                ],
                theory: "SN1 reactions proceed through a planar carbocation intermediate. The rate-determining step is carbocation formation. The nucleophile can attack from either face, leading to racemization (though with some retention due to ion pairing).",
                keyFormulas: {
                    "Rate Law": "Rate = k[RX]",
                    "Step 1": "R-X → R⁺ + X⁻ (slow, rate-determining)",
                    "Step 2": "R⁺ + Nu⁻ → R-Nu (fast)",
                    "Stereochemistry": "Racemization (mostly)"
                },
                solvingSteps: [
                    "Show substrate ionization to carbocation (slow step)",
                    "Draw planar carbocation intermediate",
                    "Show nucleophile attacking from both faces",
                    "Draw both enantiomeric products (if chiral)",
                    "Indicate energy diagram with two barriers"
                ],
                applications: [
                    "Solvolysis reactions",
                    "Hydrolysis of tertiary alkyl halides",
                    "Understanding carbocation stability",
                    "Predicting reaction conditions"
                ]
            },

            reaction_mechanisms_e2: {
                title: "E2 Elimination Mechanism",
                concepts: [
                    "Bimolecular elimination (concerted)",
                    "Requires anti-periplanar geometry (H and X 180° apart)",
                    "One-step mechanism: H removal and X departure simultaneous",
                    "Rate = k[substrate][base] (second order)",
                    "Forms alkene following Zaitsev's rule (most substituted)"
                ],
                theory: "E2 eliminations are stereospecific, requiring anti-periplanar arrangement of the β-hydrogen and leaving group. Strong bases favor E2 over SN2. The mechanism forms a π bond as the leaving group departs.",
                keyFormulas: {
                    "Rate Law": "Rate = k[RX][Base]",
                    "Zaitsev's Rule": "Major product = most substituted alkene",
                    "Stereochemistry": "Anti elimination required",
                    "Transition State": "Partial C-H break, partial C=C formation, partial C-X break"
                },
                solvingSteps: [
                    "Identify β-hydrogens anti to leaving group",
                    "Show base removing β-H as X departs",
                    "Draw transition state with forming π bond",
                    "Show alkene product formation",
                    "Predict major product by Zaitsev's rule"
                ],
                applications: [
                    "Alkene synthesis from alkyl halides",
                    "Dehydration of alcohols",
                    "Dehydrohalogenation reactions",
                    "Synthesis of conjugated systems"
                ]
            },

            reaction_mechanisms_e1: {
                title: "E1 Elimination Mechanism",
                concepts: [
                    "Unimolecular elimination (two-step)",
                    "Carbocation intermediate formation (same as SN1)",
                    "Rate = k[substrate] (first order)",
                    "Competes with SN1 mechanism",
                    "No stereochemical requirement"
                ],
                theory: "E1 eliminations proceed through the same carbocation intermediate as SN1. The mechanism is favored by heat, weak bases, and stable carbocations. Zaitsev's rule applies to product distribution.",
                keyFormulas: {
                    "Rate Law": "Rate = k[RX]",
                    "Step 1": "R-X → R⁺ + X⁻ (slow)",
                    "Step 2": "Base removes β-H from R⁺ → alkene (fast)",
                    "Product": "Zaitsev product (most substituted alkene)"
                },
                solvingSteps: [
                    "Show carbocation formation (slow step)",
                    "Identify all β-hydrogens available for removal",
                    "Show base abstracting β-H",
                    "Draw all possible alkene products",
                    "Predict major product using Zaitsev's rule"
                ],
                applications: [
                    "Dehydration of alcohols with acid",
                    "Heated reactions of tertiary halides",
                    "Understanding elimination vs substitution competition",
                    "Synthesis when stereochemistry not critical"
                ]
            },

            addition_reactions_alkenes: {
                title: "Electrophilic Addition to Alkenes",
                concepts: [
                    "π bond acts as nucleophile",
                    "Electrophile adds first (often H⁺)",
                    "Carbocation intermediate formation",
                    "Markovnikov's rule: H adds to less substituted carbon",
                    "Anti-Markovnikov with peroxides (radical mechanism)"
                ],
                theory: "Alkenes undergo electrophilic addition reactions due to the electron-rich π bond. The reaction proceeds through a carbocation intermediate (except radical additions), with the more stable carbocation determining regiochemistry.",
                keyFormulas: {
                    "Markovnikov": "H → less substituted C, X → more substituted C",
                    "Hydrogenation": "Alkene + H₂ + catalyst → alkane",
                    "Halogenation": "Alkene + X₂ → dihalide (anti addition)",
                    "Hydration": "Alkene + H₂O/H⁺ → alcohol",
                    "Hydroboration": "Alkene + BH₃ then H₂O₂/OH⁻ → anti-Markovnikov alcohol"
                },
                solvingSteps: [
                    "Identify alkene and electrophile",
                    "Show π electrons attacking electrophile",
                    "Draw more stable carbocation intermediate",
                    "Show nucleophile attacking carbocation",
                    "Predict regiochemistry and stereochemistry"
                ],
                applications: [
                    "Alcohol synthesis from alkenes",
                    "Polymer production (addition polymerization)",
                    "Industrial hydrogenation processes",
                    "Pharmaceutical intermediate synthesis"
                ]
            },

            carbonyl_chemistry_nucleophilic: {
                title: "Nucleophilic Addition to Carbonyls",
                concepts: [
                    "C=O bond polarized: δ⁺C and δ⁻O",
                    "Nucleophiles attack electrophilic carbonyl carbon",
                    "Tetrahedral intermediate formation",
                    "Aldehydes more reactive than ketones",
                    "Acid/base catalysis common"
                ],
                theory: "The carbonyl carbon is electrophilic due to oxygen's electronegativity. Nucleophiles add to form tetrahedral intermediates. In aldehydes and ketones, the addition is often reversible; in carboxylic acid derivatives, the intermediate collapses by losing a leaving group.",
                keyFormulas: {
                    "General": "R₂C=O + Nu⁻ → R₂C(Nu)O⁻",
                    "Grignard": "R-MgX + R'₂C=O → R-R'₂C-O⁻ → alcohol",
                    "Hydride Reduction": "LiAlH₄ or NaBH₄ → alcohol",
                    "Cyanohydrin": "HCN + R₂C=O → R₂C(OH)(CN)",
                    "Acetal Formation": "R₂C=O + 2ROH/H⁺ → R₂C(OR)₂"
                },
                solvingSteps: [
                    "Identify carbonyl compound and nucleophile",
                    "Show nucleophile attacking carbonyl carbon",
                    "Draw tetrahedral intermediate with O⁻",
                    "Show protonation of O⁻",
                    "Draw final product structure"
                ],
                applications: [
                    "Grignard synthesis of alcohols",
                    "Reduction of aldehydes/ketones",
                    "Protective group chemistry (acetals)",
                    "Industrial alcohol production"
                ]
            },

            aromatic_chemistry_electrophilic: {
                title: "Electrophilic Aromatic Substitution",
                concepts: [
                    "Benzene ring: delocalized π electrons (aromatic)",
                    "Electrophile attacks ring, H⁺ expelled",
                    "Arenium ion (sigma complex) intermediate",
                    "Substituents direct and activate/deactivate",
                    "Ortho/para directors: -OH, -OR, -NH₂, alkyl",
                    "Meta directors: -NO₂, -CN, -CO₂H, -CHO"
                ],
                theory: "Aromatic substitution preserves the stable aromatic system. The mechanism involves temporary loss of aromaticity through an arenium ion intermediate. Substituents affect both reactivity and orientation through resonance and inductive effects.",
                keyFormulas: {
                    "Nitration": "Benzene + HNO₃/H₂SO₄ → nitrobenzene",
                    "Halogenation": "Benzene + X₂/FeX₃ → halobenzene",
                    "Sulfonation": "Benzene + SO₃/H₂SO₄ → benzenesulfonic acid",
                    "Friedel-Crafts Alkylation": "Benzene + RX/AlCl₃ → alkylbenzene",
                    "Friedel-Crafts Acylation": "Benzene + RCOCl/AlCl₃ → ketone"
                },
                solvingSteps: [
                    "Generate electrophile (E⁺)",
                    "Show electrophile attacking benzene π system",
                    "Draw arenium ion resonance structures",
                    "Show loss of H⁺ to restore aromaticity",
                    "Predict orientation based on existing substituents"
                ],
                applications: [
                    "Pharmaceutical synthesis",
                    "Dye and pigment production",
                    "Polymer precursor synthesis",
                    "Industrial chemical manufacturing"
                ]
            },

            oxidation_reduction: {
                title: "Oxidation and Reduction Reactions",
                concepts: [
                    "Oxidation: increase in C-O bonds or decrease in C-H bonds",
                    "Reduction: decrease in C-O bonds or increase in C-H bonds",
                    "Oxidation levels: alkane < alcohol < aldehyde < carboxylic acid",
                    "Common oxidants: CrO₃, KMnO₄, PCC, Swern, DMP",
                    "Common reductants: LiAlH₄, NaBH₄, H₂/catalyst"
                ],
                theory: "Oxidation and reduction are complementary processes that interconvert functional groups. Understanding oxidation states helps predict reaction products and design synthesis pathways. Selective reagents allow targeted functional group transformations.",
                keyFormulas: {
                    "Primary Alcohol": "RCH₂OH → RCHO (aldehyde) → RCO₂H (acid)",
                    "Secondary Alcohol": "R₂CHOH → R₂C=O (ketone)",
                    "Aldehyde Reduction": "RCHO + [H] → RCH₂OH",
                    "Ketone Reduction": "R₂C=O + [H] → R₂CHOH",
                    "Alkene Oxidation": "R-CH=CH-R + KMnO₄ → cleavage products"
                },
                solvingSteps: [
                    "Identify functional group to be oxidized/reduced",
                    "Determine appropriate reagent for transformation",
                    "Consider oxidation state changes",
                    "Draw product with new functional group",
                    "Verify other functional groups unaffected"
                ],
                applications: [
                    "Alcohol to carbonyl conversions",
                    "Carbonyl to alcohol reductions",
                    "Aldehyde synthesis from alcohols",
                    "Carboxylic acid synthesis"
                ]
            },

            protecting_groups: {
                title: "Protecting Group Strategies",
                concepts: [
                    "Temporarily mask reactive functional groups",
                    "Allow selective reactions at other sites",
                    "Must be: easy to install, stable to reaction conditions, easy to remove",
                    "Common: acetals for carbonyls, silyl ethers for alcohols, Boc/Cbz for amines"
                ],
                theory: "Protecting groups enable multi-step syntheses by preventing unwanted reactions at sensitive sites. Strategic use of orthogonal protecting groups (removed under different conditions) allows sequential deprotection in complex molecules.",
                keyFormulas: {
                    "Acetal Protection": "R₂C=O + 2ROH/H⁺ → R₂C(OR)₂",
                    "Acetal Deprotection": "R₂C(OR)₂ + H₃O⁺ → R₂C=O",
                    "Silyl Ether": "ROH + R₃SiCl → ROSiR₃",
                    "Silyl Deprotection": "ROSiR₃ + F⁻ → ROH",
                    "Boc Protection": "RNH₂ + Boc₂O → RNHBoc"
                },
                solvingSteps: [
                    "Identify functional groups needing protection",
                    "Choose compatible protecting groups",
                    "Install protection before key reaction",
                    "Perform desired transformation",
                    "Remove protecting group(s) in correct order"
                ],
                applications: [
                    "Multi-step organic synthesis",
                    "Peptide synthesis",
                    "Natural product total synthesis",
                    "Pharmaceutical intermediate preparation"
                ]
            },

            retrosynthetic_analysis: {
                title: "Retrosynthetic Analysis",
                concepts: [
                    "Work backward from target to available starting materials",
                    "Identify key disconnections (break bonds strategically)",
                    "Recognize functional group interconversions",
                    "Consider synthetic equivalents",
                    "Evaluate route: steps, yield, selectivity, cost"
                ],
                theory: "Retrosynthesis simplifies complex synthesis planning by breaking the target into simpler precursors. The double arrow (⇒) indicates retrosynthetic disconnection. Good disconnections create stable, synthetically accessible intermediates.",
                keyFormulas: {
                    "Disconnection": "Target ⇒ Simpler Precursors",
                    "Synthon": "Idealized fragment (may not exist)",
                    "Synthetic Equivalent": "Real reagent representing synthon",
                    "Functional Group Interconversion": "FGI transforms"
                },
                solvingSteps: [
                    "Analyze target structure and functional groups",
                    "Identify strategic bonds to disconnect",
                    "Write retrosynthetic steps with ⇒",
                    "Find synthetic equivalents for each synthon",
                    "Write forward synthesis with actual reagents"
                ],
                applications: [
                    "Drug synthesis planning",
                    "Natural product synthesis",
                    "Industrial process optimization",
                    "Academic synthesis challenges"
                ]
            },

            spectroscopy_nmr: {
                title: "NMR Spectroscopy Interpretation",
                concepts: [
                    "¹H NMR: number of signals = number of H environments",
                    "Chemical shift (δ ppm): electron density around H",
                    "Integration: ratio of H atoms",
                    "Splitting (n+1 rule): neighboring H atoms",
                    "¹³C NMR: one signal per carbon environment"
                ],
                theory: "NMR detects nuclei in magnetic fields. Chemical shift reflects electronic environment. Spin-spin coupling (splitting) reveals adjacent protons. Together with integration, NMR determines molecular structure.",
                keyFormulas: {
                    "Chemical Shift": "δ = (ν_sample - ν_ref) / ν_spectrometer × 10⁶",
                    "Splitting Pattern": "n+1 rule: n = number of adjacent H",
                    "Doublet": "1 adjacent H",
                    "Triplet": "2 adjacent H",
                    "Quartet": "3 adjacent H"
                },
                solvingSteps: [
                    "Count number of signals → number of environments",
                    "Analyze chemical shifts → functional groups present",
                    "Integration ratios → relative H count",
                    "Splitting patterns → connectivity (n+1 rule)",
                    "Assemble structure from all data"
                ],
                applications: [
                    "Structure determination",
                    "Purity assessment",
                    "Reaction monitoring",
                    "Conformational analysis"
                ]
            },

            spectroscopy_ir: {
                title: "IR Spectroscopy Interpretation",
                concepts: [
                    "IR absorption: molecular vibrations (stretching, bending)",
                    "Fingerprint region (1500-500 cm⁻¹): complex, unique to molecule",
                    "Functional group region (4000-1500 cm⁻¹): diagnostic peaks",
                    "Key peaks: O-H (broad, 3300-3500), N-H (3300-3500), C=O (sharp, 1700-1750), C=C (1600-1680)"
                ],
                theory: "IR spectroscopy measures molecular vibrations. Different bonds absorb at characteristic frequencies. Functional groups have diagnostic absorption bands, making IR excellent for identifying functional groups present.",
                keyFormulas: {
                    "Wavenumber": "ν̃ = 1/λ (cm⁻¹)",
                    "Energy": "E = hν = hc/λ",
                    "Hooke's Law": "ν ∝ √(k/μ)",
                    "O-H": "3200-3600 cm⁻¹ (broad)",
                    "C=O": "1680-1750 cm⁻¹ (strong, sharp)",
                    "C=C": "1600-1680 cm⁻¹",
                    "C≡C": "2100-2260 cm⁻¹"
                },
                solvingSteps: [
                    "Scan for broad O-H or N-H peaks (3200-3600 cm⁻¹)",
                    "Check for C=O peak around 1700 cm⁻¹",
                    "Look for C=C (1600-1680) or C≡C (2100-2260)",
                    "Examine C-H stretches (2850-3000 cm⁻¹)",
                    "Combine with other spectroscopic data"
                ],
                applications: [
                    "Functional group identification",
                    "Quality control",
                    "Compound verification",
                    "Monitoring reaction progress"
                ]
            },

            spectroscopy_mass_spec: {
                title: "Mass Spectrometry Interpretation",
                concepts: [
                    "M⁺ peak (molecular ion): gives molecular weight",
                    "M+1 peak: ¹³C isotope (1.1% per C)",
                    "Fragmentation patterns: characteristic for functional groups",
                    "Base peak: most abundant fragment (100%)",
                    "Nitrogen rule: odd M⁺ if odd number of N atoms"
                ],
                theory: "Mass spectrometry ionizes molecules and measures mass-to-charge ratios (m/z). Fragmentation patterns reveal structural information. The molecular ion peak gives molecular weight; fragments help identify functional groups and connectivity.",
                keyFormulas: {
                    "m/z": "mass/charge ratio",
                    "Molecular Ion": "M⁺ (radical cation)",
                    "M+1 Intensity": "1.1% × number of carbons",
                    "McLafferty Rearrangement": "γ-H transfer in carbonyls",
                    "Nitrogen Rule": "Odd M⁺ → odd # N; Even M⁺ → even # N or no N"
                },
                solvingSteps: [
                    "Identify M⁺ peak → molecular weight",
                    "Check M+1, M+2 → isotope ratios (# of C, presence of Cl/Br)",
                    "Analyze fragmentation pattern → functional groups",
                    "Identify base peak and major fragments",
                    "Propose structure consistent with all data"
                ],
                applications: [
                    "Molecular weight determination",
                    "Structural elucidation",
                    "Mixture analysis (GC-MS, LC-MS)",
                    "Isotope labeling studies"
                ]
            }
        };
    }

    setThemeColors() {
        const themes = {
            excel: {
                background: '#ffffff',
                gridColor: '#c0c0c0',
                headerBg: '#4472c4',
                headerText: '#ffffff',
                sectionBg: '#d9e2f3',
                sectionText: '#000000',
                cellBg: '#ffffff',
                cellText: '#000000',
                resultBg: '#e2efda',
                resultText: '#000000',
                formulaBg: '#fff2cc',
                formulaText: '#7f6000',
                stepBg: '#f2f2f2',
                stepText: '#333333',
                borderColor: '#808080',
                mathBg: '#fef7e0',
                mathText: '#b06000',
                diagramBg: '#f8f9fa',
                mechanismBg: '#e8f5e9',
                moleculeBg: '#ffe6e6',
                reactionBg: '#e6f3ff',
                stereoBg: '#f3e5f5'
            },
            scientific: {
                background: '#f8f9fa',
                gridColor: '#4682b4',
                headerBg: '#2c5aa0',
                headerText: '#ffffff',
                sectionBg: '#e1ecf4',
                sectionText: '#2c5aa0',
                cellBg: '#ffffff',
                cellText: '#2c5aa0',
                resultBg: '#d4edda',
                resultText: '#155724',
                formulaBg: '#fff3cd',
                formulaText: '#856404',
                stepBg: '#e9ecef',
                stepText: '#495057',
                borderColor: '#4682b4',
                mathBg: '#e3f2fd',
                mathText: '#1565c0',
                diagramBg: '#f1f8ff',
                mechanismBg: '#e0f2f1',
                moleculeBg: '#ffe0e6',
                reactionBg: '#e0f7ff',
                stereoBg: '#f8bbd0'
            }
        };

        this.colors = themes[this.theme] || themes.excel;
    }

initializeOrganicSymbols() {
        return {
            // Bonds and arrows
            'single_bond': '−',
            'double_bond': '=',
            'triple_bond': '≡',
            'wedge': '⟋', // solid wedge (coming out)
            'dash': '⋯', // dashed wedge (going back)
            'wavy': '∼', // wavy bond (undefined stereochemistry)
            
            // Reaction arrows
            'forward': '→',
            'backward': '←',
            'equilibrium': '⇌',
            'resonance': '↔',
            'retrosynthesis': '⇒',
            'mechanism_arrow': '⟶',
            'curved_arrow': '↷',
            
            // Charges and electrons
            'positive': '⁺',
            'negative': '⁻',
            'radical': '·',
            'lone_pair': ':',
            'partial_positive': 'δ⁺',
            'partial_negative': 'δ⁻',
            
            // Greek letters
            'alpha': 'α',
            'beta': 'β',
            'gamma': 'γ',
            'delta': 'δ',
            'Delta': 'Δ',
            'pi': 'π',
            'sigma': 'σ',
            
            // Stereochemistry
            'R_config': '(R)',
            'S_config': '(S)',
            'E_config': '(E)',
            'Z_config': '(Z)',
            'cis': 'cis',
            'trans': 'trans',
            'racemic': '(±)',
            
            // Special notations
            'benzene_ring': '⬡',
            'phenyl': 'Ph',
            'methyl': 'Me',
            'ethyl': 'Et',
            'propyl': 'Pr',
            'butyl': 'Bu',
            'tert_butyl': 't-Bu',
            'isopropyl': 'i-Pr'
        };
    }

    initializeFunctionalGroups() {
        this.functionalGroups = {
            'alkane': {
                formula: 'C-C',
                suffix: '-ane',
                priority: 1,
                characteristic: 'sp³ C-C single bonds'
            },
            'alkene': {
                formula: 'C=C',
                suffix: '-ene',
                priority: 2,
                characteristic: 'sp² C=C double bond'
            },
            'alkyne': {
                formula: 'C≡C',
                suffix: '-yne',
                priority: 3,
                characteristic: 'sp C≡C triple bond'
            },
            'alcohol': {
                formula: '-OH',
                suffix: '-ol',
                prefix: 'hydroxy-',
                priority: 8,
                characteristic: 'hydroxyl group'
            },
            'ether': {
                formula: 'R-O-R',
                suffix: 'ether',
                prefix: 'alkoxy-',
                priority: 4,
                characteristic: 'oxygen between two carbons'
            },
            'aldehyde': {
                formula: '-CHO',
                suffix: '-al',
                prefix: 'oxo- or formyl-',
                priority: 10,
                characteristic: 'carbonyl at terminal carbon'
            },
            'ketone': {
                formula: 'R-CO-R',
                suffix: '-one',
                prefix: 'oxo-',
                priority: 9,
                characteristic: 'carbonyl between two carbons'
            },
            'carboxylic_acid': {
                formula: '-COOH',
                suffix: '-oic acid',
                priority: 12,
                characteristic: 'carbonyl with OH'
            },
            'ester': {
                formula: '-COO-',
                suffix: '-oate',
                priority: 11,
                characteristic: 'carbonyl with OR'
            },
            'amide': {
                formula: '-CONH2',
                suffix: '-amide',
                priority: 11,
                characteristic: 'carbonyl with NH₂'
            },
            'amine': {
                formula: '-NH2',
                suffix: '-amine',
                prefix: 'amino-',
                priority: 7,
                characteristic: 'nitrogen with H or R groups'
            },
            'nitrile': {
                formula: '-C≡N',
                suffix: '-nitrile',
                prefix: 'cyano-',
                priority: 10,
                characteristic: 'carbon-nitrogen triple bond'
            },
            'halide': {
                formula: '-X (F, Cl, Br, I)',
                prefix: 'fluoro-, chloro-, bromo-, iodo-',
                priority: 5,
                characteristic: 'carbon-halogen bond'
            },
            'aromatic': {
                formula: 'benzene ring',
                suffix: 'benzene',
                characteristic: 'aromatic ring system'
            }
        };

        // Priority order for nomenclature (highest to lowest)
        this.functionalGroupPriority = [
            'carboxylic_acid',
            'ester',
            'amide',
            'aldehyde',
            'ketone',
            'alcohol',
            'amine',
            'alkyne',
            'alkene',
            'ether',
            'halide',
            'alkane'
        ];
    }

    initializeReactionMechanisms() {
        this.reactionMechanisms = {
            'SN2': {
                name: 'Bimolecular Nucleophilic Substitution',
                steps: 1,
                rateOrder: 2,
                stereochemistry: 'inversion',
                conditions: 'Strong nucleophile, polar aprotic solvent, primary substrate'
            },
            'SN1': {
                name: 'Unimolecular Nucleophilic Substitution',
                steps: 2,
                rateOrder: 1,
                stereochemistry: 'racemization',
                conditions: 'Weak nucleophile, polar protic solvent, tertiary substrate'
            },
            'E2': {
                name: 'Bimolecular Elimination',
                steps: 1,
                rateOrder: 2,
                stereochemistry: 'anti-periplanar',
                conditions: 'Strong base, high temperature'
            },
            'E1': {
                name: 'Unimolecular Elimination',
                steps: 2,
                rateOrder: 1,
                stereochemistry: 'no requirement',
                conditions: 'Weak base, heat, tertiary substrate'
            },
            'electrophilic_addition': {
                name: 'Electrophilic Addition to Alkenes',
                steps: 2,
                intermediate: 'carbocation',
                stereochemistry: 'variable',
                conditions: 'Electrophile (H⁺, Br₂, etc.)'
            },
            'nucleophilic_addition': {
                name: 'Nucleophilic Addition to Carbonyls',
                steps: 2,
                intermediate: 'tetrahedral',
                stereochemistry: 'none (unless chiral)',
                conditions: 'Nucleophile (RMgX, LiAlH₄, etc.)'
            },
            'electrophilic_aromatic_substitution': {
                name: 'Electrophilic Aromatic Substitution',
                steps: 2,
                intermediate: 'arenium ion (sigma complex)',
                stereochemistry: 'none',
                conditions: 'Electrophile + Lewis acid catalyst'
            },
            'radical_halogenation': {
                name: 'Free Radical Halogenation',
                steps: 3,
                mechanism: 'chain reaction (initiation, propagation, termination)',
                conditions: 'Light or heat, X₂'
            }
        };
    }

    initializeNomenclatureRules() {
        this.nomenclatureRules = {
            alkane_prefixes: [
                { n: 1, prefix: 'meth' },
                { n: 2, prefix: 'eth' },
                { n: 3, prefix: 'prop' },
                { n: 4, prefix: 'but' },
                { n: 5, prefix: 'pent' },
                { n: 6, prefix: 'hex' },
                { n: 7, prefix: 'hept' },
                { n: 8, prefix: 'oct' },
                { n: 9, prefix: 'non' },
                { n: 10, prefix: 'dec' },
                { n: 11, prefix: 'undec' },
                { n: 12, prefix: 'dodec' }
            ],
            
            multiplicity_prefixes: {
                2: 'di',
                3: 'tri',
                4: 'tetra',
                5: 'penta',
                6: 'hexa',
                7: 'hepta',
                8: 'octa',
                9: 'nona',
                10: 'deca'
            },

            common_substituents: {
                'CH3': 'methyl',
                'C2H5': 'ethyl',
                'C3H7': 'propyl',
                'C(CH3)3': 'tert-butyl',
                'CH(CH3)2': 'isopropyl',
                'C6H5': 'phenyl',
                'CH2C6H5': 'benzyl',
                'OH': 'hydroxy',
                'NH2': 'amino',
                'F': 'fluoro',
                'Cl': 'chloro',
                'Br': 'bromo',
                'I': 'iodo',
                'NO2': 'nitro',
                'CN': 'cyano'
            }
        };
    }

    initializeOrganicChemistrySolvers() {
        this.organicChemistryTypes = {
            // Nomenclature problems
            iupac_naming: {
                patterns: [
                    /name.*compound/i,
                    /IUPAC.*name/i,
                    /systematic.*name/i,
                    /nomenclature/i
                ],
                solver: this.solveIUPACNaming.bind(this),
                name: 'IUPAC Nomenclature',
                category: 'nomenclature_alkanes',
                description: 'Name organic compounds using IUPAC rules'
            },

            structure_from_name: {
                patterns: [
                    /draw.*structure/i,
                    /structure.*from.*name/i,
                    /draw.*compound/i
                ],
                solver: this.solveStructureFromName.bind(this),
                name: 'Draw Structure from Name',
                category: 'nomenclature_alkanes',
                description: 'Draw structure given IUPAC name'
            },

            // Stereochemistry problems
            rs_configuration: {
                patterns: [
                    /R.*S.*configuration/i,
                    /assign.*configuration/i,
                    /Cahn.*Ingold.*Prelog/i,
                    /chiral.*center/i
                ],
                solver: this.solveRSConfiguration.bind(this),
                name: 'R/S Configuration Assignment',
                category: 'stereochemistry_chirality',
                description: 'Assign R or S configuration to chiral centers'
            },

            ez_configuration: {
                patterns: [
                    /E.*Z.*configuration/i,
                    /alkene.*stereochemistry/i,
                    /cis.*trans/i
                ],
                solver: this.solveEZConfiguration.bind(this),
                name: 'E/Z Configuration Assignment',
                category: 'stereochemistry_chirality',
                description: 'Assign E or Z configuration to alkenes'
            },

            enantiomer_count: {
                patterns: [
                    /number.*enantiomers/i,
                    /stereoisomers/i,
                    /chiral.*centers/i
                ],
                solver: this.solveEnantiomerCount.bind(this),
                name: 'Count Stereoisomers',
                category: 'stereochemistry_chirality',
                description: 'Calculate number of possible stereoisomers'
            },

            // Reaction mechanism problems
            mechanism_sn2: {
                patterns: [
                    /SN2.*mechanism/i,
                    /nucleophilic.*substitution.*bimolecular/i,
                    /backside.*attack/i
                ],
                solver: this.solveMechanismSN2.bind(this),
                name: 'SN2 Mechanism',
                category: 'reaction_mechanisms_sn2',
                description: 'Draw and explain SN2 mechanism'
            },

            mechanism_sn1: {
                patterns: [
                    /SN1.*mechanism/i,
                    /nucleophilic.*substitution.*unimolecular/i,
                    /carbocation.*substitution/i
                ],
                solver: this.solveMechanismSN1.bind(this),
                name: 'SN1 Mechanism',
                category: 'reaction_mechanisms_sn1',
                description: 'Draw and explain SN1 mechanism'
            },

            mechanism_e2: {
                patterns: [
                    /E2.*mechanism/i,
                    /elimination.*bimolecular/i,
                    /anti.*periplanar/i
                ],
                solver: this.solveMechanismE2.bind(this),
                name: 'E2 Mechanism',
                category: 'reaction_mechanisms_e2',
                description: 'Draw and explain E2 mechanism'
            },

            mechanism_e1: {
                patterns: [
                    /E1.*mechanism/i,
                    /elimination.*unimolecular/i,
                    /carbocation.*elimination/i
                ],
                solver: this.solveMechanismE1.bind(this),
                name: 'E1 Mechanism',
                category: 'reaction_mechanisms_e1',
                description: 'Draw and explain E1 mechanism'
            },

            mechanism_addition: {
                patterns: [
                    /electrophilic.*addition/i,
                    /addition.*alkene/i,
                    /Markovnikov/i
                ],
                solver: this.solveMechanismAddition.bind(this),
                name: 'Electrophilic Addition',
                category: 'addition_reactions_alkenes',
                description: 'Draw addition mechanism to alkenes'
            },

            mechanism_carbonyl: {
                patterns: [
                    /nucleophilic.*addition.*carbonyl/i,
                    /Grignard.*mechanism/i,
                    /addition.*ketone/i,
                    /addition.*aldehyde/i
                ],
                solver: this.solveMechanismCarbonyl.bind(this),
                name: 'Nucleophilic Addition to Carbonyl',
                category: 'carbonyl_chemistry_nucleophilic',
                description: 'Draw nucleophilic addition to C=O'
            },

            mechanism_aromatic: {
                patterns: [
                    /electrophilic.*aromatic.*substitution/i,
                    /EAS.*mechanism/i,
                    /arenium.*ion/i,
                    /benzene.*reaction/i
                ],
                solver: this.solveMechanismAromatic.bind(this),
                name: 'Electrophilic Aromatic Substitution',
                category: 'aromatic_chemistry_electrophilic',
                description: 'Draw EAS mechanism'
            },

            // Reaction prediction
            predict_product: {
                patterns: [
                    /predict.*product/i,
                    /major.*product/i,
                    /product.*reaction/i,
                    /what.*forms/i
                ],
                solver: this.solvePredictProduct.bind(this),
                name: 'Product Prediction',
                category: 'reaction_mechanisms_sn2',
                description: 'Predict products of organic reactions'
            },

            predict_reagents: {
                patterns: [
                    /what.*reagent/i,
                    /synthesis/i,
                    /how.*make/i,
                    /convert.*to/i
                ],
                solver: this.solvePredictReagents.bind(this),
                name: 'Reagent Selection',
                category: 'retrosynthetic_analysis',
                description: 'Identify reagents for transformation'
            },

            // Synthesis problems
            synthesis_multi_step: {
                patterns: [
                    /multi.*step.*synthesis/i,
                    /synthesis.*pathway/i,
                    /retrosynthesis/i,
                    /synthetic.*route/i
                ],
                solver: this.solveMultiStepSynthesis.bind(this),
                name: 'Multi-Step Synthesis',
                category: 'retrosynthetic_analysis',
                description: 'Design multi-step synthetic routes'
            },

            retrosynthetic_analysis: {
                patterns: [
                    /retrosynthetic.*analysis/i,
                    /disconnection/i,
                    /synthon/i
                ],
                solver: this.solveRetrosynthesis.bind(this),
                name: 'Retrosynthetic Analysis',
                category: 'retrosynthetic_analysis',
                description: 'Perform retrosynthetic analysis'
            },

            // Spectroscopy problems
            nmr_interpretation: {
                patterns: [
                    /NMR.*spectrum/i,
                    /interpret.*NMR/i,
                    /proton.*NMR/i,
                    /chemical.*shift/i
                ],
                solver: this.solveNMRInterpretation.bind(this),
                name: 'NMR Interpretation',
                category: 'spectroscopy_nmr',
                description: 'Interpret NMR spectroscopic data'
            },

            ir_interpretation: {
                patterns: [
                    /IR.*spectrum/i,
                    /infrared.*spectroscopy/i,
                    /interpret.*IR/i
                ],
                solver: this.solveIRInterpretation.bind(this),
                name: 'IR Interpretation',
                category: 'spectroscopy_ir',
                description: 'Interpret IR spectroscopic data'
            },

            mass_spec_interpretation: {
                patterns: [
                    /mass.*spectrum/i,
                    /MS.*interpretation/i,
                    /molecular.*ion/i,
                    /fragmentation/i
                ],
                solver: this.solveMassSpecInterpretation.bind(this),
                name: 'Mass Spec Interpretation',
                category: 'spectroscopy_mass_spec',
                description: 'Interpret mass spectrometry data'
            },

            structure_elucidation: {
                patterns: [
                    /structure.*elucidation/i,
                    /determine.*structure/i,
                    /combined.*spectroscopy/i,
                    /unknown.*compound/i
                ],
                solver: this.solveStructureElucidation.bind(this),
                name: 'Structure Elucidation',
                category: 'spectroscopy_nmr',
                description: 'Determine structure from spectroscopic data'
            },

            // Functional group transformations
            oxidation_reaction: {
                patterns: [
                    /oxidation/i,
                    /oxidize/i,
                    /KMnO4|CrO3|PCC|DMP/i
                ],
                solver: this.solveOxidation.bind(this),
                name: 'Oxidation Reactions',
                category: 'oxidation_reduction',
                description: 'Predict oxidation products'
            },

            reduction_reaction: {
                patterns: [
                    /reduction/i,
                    /reduce/i,
                    /LiAlH4|NaBH4|hydrogenation/i
                ],
                solver: this.solveReduction.bind(this),
                name: 'Reduction Reactions',
                category: 'oxidation_reduction',
                description: 'Predict reduction products'
            },

            protecting_group: {
                patterns: [
                    /protecting.*group/i,
                    /protection.*strategy/i,
                    /acetal|silyl|Boc/i
                ],
                solver: this.solveProtectingGroup.bind(this),
                name: 'Protecting Group Strategy',
                category: 'protecting_groups',
                description: 'Design protecting group strategies'
            },

            // Acidity/basicity
            acidity_comparison: {
                patterns: [
                    /more.*acidic/i,
                    /pKa.*comparison/i,
                    /acid.*strength/i,
                    /rank.*acidity/i
                ],
                solver: this.solveAcidityComparison.bind(this),
                name: 'Acidity Comparison',
                category: 'nomenclature_functional_groups',
                description: 'Compare relative acidities'
            },

            basicity_comparison: {
                patterns: [
                    /more.*basic/i,
                    /base.*strength/i,
                    /rank.*basicity/i
                ],
                solver: this.solveBasicityComparison.bind(this),
                name: 'Basicity Comparison',
                category: 'nomenclature_functional_groups',
                description: 'Compare relative basicities'
            }
        };
    }

    initializeErrorDatabase() {
        this.commonMistakes = {
            nomenclature_alkanes: {
                'Find longest chain': [
                    'Choosing a shorter, more obvious chain instead of longest',
                    'Missing chains that zigzag',
                    'Not considering all possible continuous chains'
                ],
                'Number the chain': [
                    'Numbering from wrong end',
                    'Not giving substituents lowest numbers',
                    'Forgetting to check both directions'
                ],
                'Name substituents': [
                    'Alphabetizing with di-, tri- prefixes',
                    'Forgetting to use di-, tri- for multiple identical groups',
                    'Misspelling substituent names'
                ]
            },

            stereochemistry_chirality: {
                'Assign priorities': [
                    'Using mass instead of atomic number',
                    'Not going to next atom when tied',
                    'Incorrectly handling double bonds'
                ],
                'Determine R/S': [
                    'Not orienting lowest priority away',
                    'Confusing clockwise with counterclockwise',
                    'Forgetting to check orientation'
                ]
            },

            reaction_mechanisms_sn2: {
                'Draw mechanism': [
                    'Showing frontside attack instead of backside',
                    'Forgetting to show lone pairs on nucleophile',
                    'Not showing leaving group departure',
                    'Incorrect stereochemistry (not showing inversion)'
                ],
                'Identify conditions': [
                    'Confusing SN2 with SN1 conditions',
                    'Not recognizing substrate effects (1° vs 3°)',
                    'Forgetting solvent effects'
                ]
            },

            reaction_mechanisms_sn1: {
                'Draw carbocation': [
                    'Drawing carbocation with too many bonds',
                    'Not showing planar geometry',
                    'Forgetting positive charge'
                ],
                'Show stereochemistry': [
                    'Expecting complete inversion (should be racemization)',
                    'Not showing both enantiomers formed',
                    'Forgetting about ion pairing'
                ]
            },

            addition_reactions_alkenes: {
                'Apply Markovnikov': [
                    'Adding H to more substituted carbon',
                    'Forgetting carbocation stability drives regiochemistry',
                    'Not considering anti-Markovnikov with peroxides'
                ],
                'Show stereochemistry': [
                    'Not recognizing syn vs anti addition',
                    'Forgetting halogenation is anti',
                    'Missing stereoisomer possibilities'
                ]
            },

            aromatic_chemistry_electrophilic: {
                'Predict orientation': [
                    'Using wrong directing effects',
                    'Forgetting deactivating groups are meta directors',
                    'Not considering multiple substituents'
                ],
                'Draw arenium ion': [
                    'Not showing resonance structures',
                    'Missing positive charge',
                    'Incorrect placement of positive charge'
                ]
            },

            spectroscopy_nmr: {
                'Count signals': [
                    'Counting hydrogens instead of environments',
                    'Missing equivalent hydrogens',
                    'Not recognizing symmetry'
                ],
                'Apply n+1 rule': [
                    'Counting wrong neighboring hydrogens',
                    'Forgetting OH, NH don\'t always couple',
                    'Misidentifying splitting patterns'
                ]
            }
        };

        this.errorPrevention = {
            stereochemistry_tracking: {
                reminder: 'Always track stereochemistry through mechanisms',
                method: 'Use wedge/dash notation consistently'
            },
            electron_accounting: {
                reminder: 'Count electrons and formal charges at each step',
                method: 'Use curved arrows to show electron movement'
            },
            nomenclature_verification: {
                reminder: 'Always verify IUPAC name by working backwards',
                method: 'Draw structure from your name to check'
            },
            mechanism_arrows: {
                reminder: 'Curved arrows show electron movement, not atom movement',
                method: 'Start arrow at electron source (lone pair or bond)'
            }
        };
    }

    initializeExplanationTemplates() {
        this.explanationStyles = {
            conceptual: {
                focus: 'Why reactions occur and structural relationships',
                language: 'intuitive with molecular-level thinking'
            },
            procedural: {
                focus: 'Exact sequence of steps to solve problems',
                language: 'step-by-step instructions'
            },
            visual: {
                focus: 'Molecular structures and 3D arrangements',
                language: 'spatial and structural descriptions'
            },
            mathematical: {
                focus: 'Quantitative relationships and calculations',
                language: 'precise mathematical terminology'
            },
            mechanistic: {
                focus: 'Electron flow and bond changes',
                language: 'arrow-pushing and orbital interactions'
            }
        };

        this.difficultyLevels = {
            basic: {
                vocabulary: 'simple, everyday language',
                detail: 'essential steps only',
                examples: 'simple molecules (methane, ethanol, etc.)',
                mechanisms: 'overview only'
            },
            intermediate: {
                vocabulary: 'standard organic chemistry terminology',
                detail: 'main steps with brief explanations',
                examples: 'common functional group compounds',
                mechanisms: 'step-by-step with arrows'
            },
            detailed: {
                vocabulary: 'full technical vocabulary',
                detail: 'comprehensive explanations with theory',
                examples: 'complex multi-functional molecules',
                mechanisms: 'complete with orbital pictures and resonance'
            },
            scaffolded: {
                vocabulary: 'progressive from simple to complex',
                detail: 'guided discovery with questions',
                examples: 'carefully sequenced difficulty progression',
                mechanisms: 'built up step-by-step with reasoning'
            }
        };
    }

    // MAIN SOLVER METHOD
    solveOrganicChemistryProblem(config) {
        const { structure, problemType, parameters, context } = config;

        try {
            // Parse the problem
            this.currentProblem = this.parseOrganicChemistryProblem(
                structure, problemType, parameters, context
            );

            // Solve the problem
            this.currentSolution = this.solveOrganicChemistryProblem_Internal(this.currentProblem);

            // Generate solution steps
            this.solutionSteps = this.generateOrganicChemistrySteps(
                this.currentProblem, this.currentSolution
            );

            // Generate diagram data
            this.generateOrganicChemistryDiagramData();

            // Generate workbook
            this.generateOrganicChemistryWorkbook();

            return {
                workbook: this.currentWorkbook,
                solution: this.currentSolution,
                steps: this.solutionSteps,
                diagram: this.diagramData
            };

        } catch (error) {
            throw new Error(`Failed to solve organic chemistry problem: ${error.message}`);
        }
    }

    parseOrganicChemistryProblem(structure, problemType = null, parameters = {}, context = {}) {
        const cleanInput = structure ? this.cleanOrganicExpression(structure) : '';

        // If problem type is specified, use it directly
        if (problemType && this.organicChemistryTypes[problemType]) {
            return {
                originalInput: structure || `${problemType} problem`,
                cleanInput: cleanInput,
                type: problemType,
                structure: structure,
                parameters: { ...parameters },
                context: { ...context },
                parsedAt: new Date().toISOString()
            };
        }

        // Auto-detect organic chemistry problem type
        for (const [type, config] of Object.entries(this.organicChemistryTypes)) {
            for (const pattern of config.patterns) {
                if (pattern.test(cleanInput) || pattern.test(JSON.stringify(parameters))) {
                    return {
                        originalInput: structure,
                        cleanInput: cleanInput,
                        type: type,
                        structure: structure,
                        parameters: { ...parameters },
                        context: { ...context },
                        parsedAt: new Date().toISOString()
                    };
                }
            }
        }

        throw new Error(`Unable to recognize organic chemistry problem type from: ${structure}`);
    }

    cleanOrganicExpression(expression) {
        return expression
            .replace(/\s+/g, ' ')
            .replace(/-->/g, '→')
            .replace(/->/g, '→')
            .replace(/<-->/g, '⇌')
            .replace(/==>/g, '⇒')
            .trim();
    }

    solveOrganicChemistryProblem_Internal(problem) {
        const solver = this.organicChemistryTypes[problem.type]?.solver;
        if (!solver) {
            throw new Error(`No solver available for organic chemistry problem type: ${problem.type}`);
        }

        return solver(problem);
    }

    // ORGANIC CHEMISTRY SOLVERS

    solveIUPACNaming(problem) {
        const { structure, smiles, molecularFormula } = problem.parameters;
        
        // Parse structure to identify components
        const analysis = this.analyzeOrganicStructure(structure || smiles);
        
        return {
            problemType: 'IUPAC Nomenclature',
            structure: structure,
            analysis: analysis,
            longestChain: analysis.longestChain,
            substituents: analysis.substituents,
            functionalGroups: analysis.functionalGroups,
            iupacName: this.constructIUPACName(analysis),
            namingSteps: this.getN amingSteps(analysis),
            category: 'nomenclature_alkanes'
        };
    }

    solveStructureFromName(problem) {
        const { iupacName } = problem.parameters;
        
        const parsed = this.parseIUPACName(iupacName);
        const structure = this.constructStructure(parsed);
        
        return {
            problemType: 'Draw Structure from Name',
            iupacName: iupacName,
            parsedComponents: parsed,
            structure: structure,
            molecularFormula: this.calculateMolecularFormula(structure),
            category:category: 'nomenclature_alkanes',
            drawingSteps: this.getStructureDrawingSteps(parsed)
        };
    }

    solveRSConfiguration(problem) {
        const { chiralCenter, substituents } = problem.parameters;
        
        // Assign priorities using CIP rules
        const priorities = this.assignCIPPriorities(substituents);
        
        // Determine configuration
        const configuration = this.determineRSConfiguration(priorities, chiralCenter);
        
        return {
            problemType: 'R/S Configuration Assignment',
            chiralCenter: chiralCenter,
            substituents: substituents,
            priorities: priorities,
            configuration: configuration,
            reasoning: this.explainRSAssignment(priorities, configuration),
            category: 'stereochemistry_chirality'
        };
    }

    solveEZConfiguration(problem) {
        const { alkene, substituents } = problem.parameters;
        
        // Assign priorities for each side of double bond
        const priorities = this.assignEZPriorities(substituents);
        
        // Determine E or Z
        const configuration = this.determineEZConfiguration(priorities);
        
        return {
            problemType: 'E/Z Configuration Assignment',
            alkene: alkene,
            substituents: substituents,
            priorities: priorities,
            configuration: configuration,
            reasoning: this.explainEZAssignment(priorities, configuration),
            category: 'stereochemistry_chirality'
        };
    }

    solveEnantiomerCount(problem) {
        const { structure, chiralCenters } = problem.parameters;
        
        const numChiral = chiralCenters || this.countChiralCenters(structure);
        const hasMesoForm = this.checkForMesoForm(structure);
        
        let numStereoisomers;
        if (hasMesoForm) {
            numStereoisomers = Math.pow(2, numChiral) - 1;
        } else {
            numStereoisomers = Math.pow(2, numChiral);
        }
        
        const numEnantiomerPairs = numStereoisomers / 2;
        
        return {
            problemType: 'Count Stereoisomers',
            structure: structure,
            numberOfChiralCenters: numChiral,
            hasMesoForm: hasMesoForm,
            totalStereoisomers: numStereoisomers,
            enantiomerPairs: numEnantiomerPairs,
            calculation: `2^n = 2^${numChiral} = ${Math.pow(2, numChiral)}`,
            category: 'stereochemistry_chirality'
        };
    }

    solveMechanismSN2(problem) {
        const { substrate, nucleophile, leavingGroup, solvent } = problem.parameters;
        
        // Analyze reaction conditions
        const conditions = this.analyzeSN2Conditions(substrate, nucleophile, solvent);
        
        // Generate mechanism steps
        const mechanismSteps = [
            {
                step: 1,
                description: 'Nucleophile approaches from backside',
                structure: this.drawBacksideAttack(substrate, nucleophile),
                electronMovement: 'Nucleophile lone pair attacks C-X σ* orbital'
            },
            {
                step: 2,
                description: 'Transition state formation',
                structure: this.drawSN2TransitionState(substrate, nucleophile, leavingGroup),
                electronMovement: 'Pentacoordinate carbon with partial bonds',
                geometry: 'Trigonal bipyramidal'
            },
            {
                step: 3,
                description: 'Product formation with inversion',
                structure: this.drawSN2Product(substrate, nucleophile),
                electronMovement: 'C-X bond breaks, leaving group departs',
                stereochemistry: 'Complete inversion of configuration'
            }
        ];
        
        return {
            problemType: 'SN2 Mechanism',
            substrate: substrate,
            nucleophile: nucleophile,
            leavingGroup: leavingGroup,
            mechanism: mechanismSteps,
            rateEquation: 'Rate = k[RX][Nu⁻]',
            rateOrder: 2,
            stereochemistry: 'Inversion (Walden inversion)',
            energyDiagram: this.generateSN2EnergyDiagram(),
            conditions: conditions,
            favorableFactors: [
                'Primary substrate (least steric hindrance)',
                'Strong nucleophile',
                'Good leaving group',
                'Polar aprotic solvent (doesn\'t solvate nucleophile)'
            ],
            category: 'reaction_mechanisms_sn2'
        };
    }

    solveMechanismSN1(problem) {
        const { substrate, nucleophile, leavingGroup, solvent } = problem.parameters;
        
        const mechanismSteps = [
            {
                step: 1,
                description: 'Ionization to form carbocation (slow, rate-determining)',
                structure: this.drawCarbocationFormation(substrate, leavingGroup),
                electronMovement: 'C-X bond breaks heterolytically',
                rateStep: true
            },
            {
                step: 2,
                description: 'Carbocation intermediate',
                structure: this.drawCarbocation(substrate),
                geometry: 'Planar (sp² hybridization)',
                stability: this.assessCarbocationStability(substrate)
            },
            {
                step: 3,
                description: 'Nucleophile attacks from both faces',
                structure: this.drawSN1Attack(substrate, nucleophile),
                electronMovement: 'Nucleophile attacks empty p orbital'
            },
            {
                step: 4,
                description: 'Products (racemic mixture)',
                structure: this.drawSN1Products(substrate, nucleophile),
                stereochemistry: 'Racemization (both enantiomers formed)'
            }
        ];
        
        return {
            problemType: 'SN1 Mechanism',
            substrate: substrate,
            nucleophile: nucleophile,
            leavingGroup: leavingGroup,
            mechanism: mechanismSteps,
            rateEquation: 'Rate = k[RX]',
            rateOrder: 1,
            stereochemistry: 'Racemization (mostly, some retention due to ion pairing)',
            energyDiagram: this.generateSN1EnergyDiagram(),
            favorableFactors: [
                'Tertiary substrate (stable carbocation)',
                'Good leaving group',
                'Polar protic solvent (stabilizes ions)',
                'Weak/neutral nucleophile'
            ],
            carbocationStability: this.explainCarbocationStability(substrate),
            category: 'reaction_mechanisms_sn1'
        };
    }

    solveMechanismE2(problem) {
        const { substrate, base, leavingGroup } = problem.parameters;
        
        // Check for anti-periplanar geometry
        const geometry = this.analyzeE2Geometry(substrate, leavingGroup);
        
        const mechanismSteps = [
            {
                step: 1,
                description: 'Concerted elimination (one step)',
                structure: this.drawE2Mechanism(substrate, base, leavingGroup),
                electronMovement: 'Base removes β-H as C-X bond breaks',
                geometry: 'Anti-periplanar (H and X 180° apart)',
                requirement: 'H and leaving group must be anti'
            },
            {
                step: 2,
                description: 'Transition state',
                structure: this.drawE2TransitionState(substrate, base, leavingGroup),
                bondChanges: 'C-H breaking, C=C forming, C-X breaking'
            },
            {
                step: 3,
                description: 'Alkene product',
                structure: this.drawE2Product(substrate),
                regiochemistry: this.applyZaitsevRule(substrate)
            }
        ];
        
        return {
            problemType: 'E2 Elimination',
            substrate: substrate,
            base: base,
            leavingGroup: leavingGroup,
            mechanism: mechanismSteps,
            rateEquation: 'Rate = k[RX][Base]',
            rateOrder: 2,
            stereochemistry: 'Anti elimination (anti-periplanar)',
            zaitsevProduct: this.identifyZaitsevProduct(substrate),
            hofmannProduct: this.identifyHofmannProduct(substrate),
            majorProduct: this.predictMajorE2Product(substrate, base),
            energyDiagram: this.generateE2EnergyDiagram(),
            category: 'reaction_mechanisms_e2'
        };
    }

    solveMechanismE1(problem) {
        const { substrate, base, leavingGroup } = problem.parameters;
        
        const mechanismSteps = [
            {
                step: 1,
                description: 'Ionization to carbocation (slow)',
                structure: this.drawE1Ionization(substrate, leavingGroup),
                rateStep: true
            },
            {
                step: 2,
                description: 'Carbocation intermediate',
                structure: this.drawCarbocation(substrate),
                geometry: 'Planar sp² carbon'
            },
            {
                step: 3,
                description: 'Base removes β-hydrogen',
                structure: this.drawE1Deprotonation(substrate, base),
                electronMovement: 'C-H bond breaks, π bond forms'
            },
            {
                step: 4,
                description: 'Alkene products',
                structure: this.drawE1Products(substrate),
                regiochemistry: 'Zaitsev product predominates'
            }
        ];
        
        return {
            problemType: 'E1 Elimination',
            substrate: substrate,
            base: base,
            mechanism: mechanismSteps,
            rateEquation: 'Rate = k[RX]',
            rateOrder: 1,
            stereochemistry: 'No stereochemical requirement',
            zaitsevProduct: this.identifyZaitsevProduct(substrate),
            competesWithSN1: true,
            favoredBy: 'High temperature, weak base',
            category: 'reaction_mechanisms_e1'
        };
    }

    solveMechanismAddition(problem) {
        const { alkene, electrophile, conditions } = problem.parameters;
        
        const additionType = this.identifyAdditionType(electrophile);
        
        const mechanismSteps = [
            {
                step: 1,
                description: 'Electrophile attacks π bond',
                structure: this.drawElectrophilicAttack(alkene, electrophile),
                electronMovement: 'π electrons attack electrophile'
            },
            {
                step: 2,
                description: 'Carbocation intermediate formation',
                structure: this.drawAdditionCarbocation(alkene, electrophile),
                regiochemistry: this.applyMarkovnikovRule(alkene),
                stability: 'More substituted carbocation forms'
            },
            {
                step: 3,
                description: 'Nucleophile attacks carbocation',
                structure: this.drawNucleophileAddition(alkene, electrophile),
                product: this.drawAdditionProduct(alkene, electrophile)
            }
        ];
        
        return {
            problemType: 'Electrophilic Addition',
            alkene: alkene,
            electrophile: electrophile,
            additionType: additionType,
            mechanism: mechanismSteps,
            regiochemistry: this.explainMarkovnikov(alkene),
            stereochemistry: this.predictAdditionStereochemistry(additionType),
            product: this.drawAdditionProduct(alkene, electrophile),
            markovnikovProduct: this.drawMarkovnikovProduct(alkene, electrophile),
            antiMarkovnikovConditions: this.getAntiMarkovnikovConditions(),
            category: 'addition_reactions_alkenes'
        };
    }

    solveMechanismCarbonyl(problem) {
        const { carbonyl, nucleophile, conditions } = problem.parameters;
        
        const mechanismSteps = [
            {
                step: 1,
                description: 'Nucleophile attacks carbonyl carbon',
                structure: this.drawCarbonylAttack(carbonyl, nucleophile),
                electronMovement: 'Nu⁻ attacks electrophilic C, π electrons move to O'
            },
            {
                step: 2,
                description: 'Tetrahedral intermediate',
                structure: this.drawTetrahedralIntermediate(carbonyl, nucleophile),
                geometry: 'sp³ tetrahedral carbon with O⁻'
            },
            {
                step: 3,
                description: 'Protonation',
                structure: this.drawCarbonylProtonation(carbonyl, nucleophile),
                product: this.drawCarbonylProduct(carbonyl, nucleophile)
            }
        ];
        
        return {
            problemType: 'Nucleophilic Addition to Carbonyl',
            carbonyl: carbonyl,
            nucleophile: nucleophile,
            mechanism: mechanismSteps,
            product: this.drawCarbonylProduct(carbonyl, nucleophile),
            reversibility: this.assessReversibility(carbonyl, nucleophile),
            reactivityOrder: 'Aldehyde > Ketone (less steric hindrance, less e⁻ donation)',
            category: 'carbonyl_chemistry_nucleophilic'
        };
    }

    solveMechanismAromatic(problem) {
        const { arene, electrophile, catalyst } = problem.parameters;
        
        // Generate electrophile
        const electrophileGeneration = this.generateElectrophile(electrophile, catalyst);
        
        const mechanismSteps = [
            {
                step: 0,
                description: 'Electrophile generation',
                reaction: electrophileGeneration,
                electrophile: electrophileGeneration.product
            },
            {
                step: 1,
                description: 'Electrophile attacks aromatic ring',
                structure: this.drawAromaticAttack(arene, electrophile),
                electronMovement: 'π electrons attack E⁺'
            },
            {
                step: 2,
                description: 'Arenium ion (sigma complex) formation',
                structure: this.drawAreniumIon(arene, electrophile),
                resonance: this.drawAreniumResonance(arene, electrophile),
                aromaticityLost: true
            },
            {
                step: 3,
                description: 'Deprotonation restores aromaticity',
                structure: this.drawAromaticDeprotonation(arene, electrophile),
                electronMovement: 'H⁺ removed, π system restored',
                aromaticityRestored: true
            }
        ];
        
        // Determine directing effects if substituents present
        const directing = this.analyzeDirectingEffects(arene);
        
        return {
            problemType: 'Electrophilic Aromatic Substitution',
            arene: arene,
            electrophile: electrophile,
            catalyst: catalyst,
            mechanism: mechanismSteps,
            product: this.drawAromaticProduct(arene, electrophile),
            directingEffects: directing,
            regiochemistry: this.predictAromaticRegiochemistry(arene, electrophile),
            energyDiagram: this.generateEASEnergyDiagram(),
            category: 'aromatic_chemistry_electrophilic'
        };
    }

    solvePredictProduct(problem) {
        const { reactant, reagents, conditions } = problem.parameters;
        
        // Identify reaction type
        const reactionType = this.identifyReactionType(reactant, reagents, conditions);
        
        // Predict products
        const products = this.predictProducts(reactant, reagents, reactionType);
        
        return {
            problemType: 'Product Prediction',
            reactant: reactant,
            reagents: reagents,
            conditions: conditions,
            reactionType: reactionType,
            majorProduct: products.major,
            minorProducts: products.minor || [],
            mechanism: this.getSummaryMechanism(reactionType),
            reasoning: this.explainProductFormation(reactant, products, reactionType),
            category: this.getCategoryFromReaction(reactionType)
        };
    }

    solvePredictReagents(problem) {
        const { startingMaterial, product } = problem.parameters;
        
        // Analyze transformation
        const transformation = this.analyzeTransformation(startingMaterial, product);
        
        // Find appropriate reagents
        const reagents = this.selectReagents(transformation);
        
        return {
            problemType: 'Reagent Selection',
            startingMaterial: startingMaterial,
            product: product,
            transformation: transformation,
            recommendedReagents: reagents,
            alternatives: this.findAlternativeReagents(transformation),
            mechanism: this.getMechanismForReagents(reagents),
            category: 'retrosynthetic_analysis'
        };
    }

    solveMultiStepSynthesis(problem) {
        const { startingMaterial, target } = problem.parameters;
        
        // Perform retrosynthetic analysis
        const retrosynthesis = this.performRetrosynthesis(startingMaterial, target);
        
        // Convert to forward synthesis
        const forwardSynthesis = this.convertToForwardSynthesis(retrosynthesis);
        
        return {
            problemType: 'Multi-Step Synthesis',
            startingMaterial: startingMaterial,
            target: target,
            retrosynthesis: retrosynthesis,
            forwardSynthesis: forwardSynthesis,
            numberOfSteps: forwardSynthesis.length,
            keyTransformations: this.identifyKeySteps(forwardSynthesis),
            alternativeRoutes: this.findAlternativeRoutes(startingMaterial, target),
            category: 'retrosynthetic_analysis'
        };
    }

    solveRetrosynthesis(problem) {
        const { target, availableStartingMaterials } = problem.parameters;
        
        // Analyze target structure
        const targetAnalysis = this.analyzeTargetStructure(target);
        
        // Identify strategic disconnections
        const disconnections = this.identifyDisconnections(target);
        
        // Evaluate each disconnection
        const evaluatedRoutes = disconnections.map(d => 
            this.evaluateDisconnection(d, availableStartingMaterials)
        );
        
        // Rank routes
        const rankedRoutes = this.rankSyntheticRoutes(evaluatedRoutes);
        
        return {
            problemType: 'Retrosynthetic Analysis',
            target: target,
            targetAnalysis: targetAnalysis,
            disconnections: disconnections,
            recommendedRoute: rankedRoutes[0],
            alternativeRoutes: rankedRoutes.slice(1),
            synthons: this.identifySynthons(disconnections),
            syntheticEquivalents: this.findSyntheticEquivalents(this.identifySynthons(disconnections)),
            category: 'retrosynthetic_analysis'
        };
    }

    solveNMRInterpretation(problem) {
        const { spectrum, peaks, integration, splitting } = problem.parameters;
        
        // Analyze each signal
        const signalAnalysis = peaks.map(peak => ({
            shift: peak.shift,
            integration: peak.integration,
            splitting: peak.splitting,
            assignment: this.assignNMRSignal(peak),
            reasoning: this.explainNMRSignal(peak)
        }));
        
        // Deduce structure
        const proposedStructure = this.deduceStructureFromNMR(signalAnalysis);
        
        return {
            problemType: 'NMR Interpretation',
            spectrum: spectrum,
            signalAnalysis: signalAnalysis,
            numberOfEnvironments: peaks.length,
            proposedStructure: proposedStructure,
            verification: this.verifyNMRAssignment(proposedStructure, peaks),
            category: 'spectroscopy_nmr'
        };
    }

    solveIRInterpretation(problem) {
        const { spectrum, peaks } = problem.parameters;
        
        // Identify functional groups from peaks
        const functionalGroups = this.identifyFunctionalGroupsIR(peaks);
        
        // Analyze key peaks
        const peakAnalysis = peaks.map(peak => ({
            wavenumber: peak.wavenumber,
            intensity: peak.intensity,
            shape: peak.shape,
            assignment: this.assignIRPeak(peak),
            functionalGroup: this.getFunctionalGroupFromIR(peak)
        }));
        
        return {
            problemType: 'IR Interpretation',
            spectrum: spectrum,
            peakAnalysis: peakAnalysis,
            functionalGroups: functionalGroups,
            absentPeaks: this.identifyAbsentPeaks(peaks),
            structuralInferences: this.inferStructureFromIR(functionalGroups),
            category: 'spectroscopy_ir'
        };
    }

    solveMassSpecInterpretation(problem) {
        const { spectrum, molecularIon, fragments } = problem.parameters;
        
        // Analyze molecular ion
        const molecularWeight = molecularIon.mz;
        const molecularFormula = this.deduceMolecularFormula(molecularIon, fragments);
        
        // Analyze fragmentation pattern
        const fragmentAnalysis = fragments.map(frag => ({
            mz: frag.mz,
            intensity: frag.intensity,
            loss: molecularWeight - frag.mz,
            assignment: this.assignFragment(frag, molecularWeight),
            structuralInfo: this.inferStructureFromFragment(frag)
        }));
        
        return {
            problemType: 'Mass Spec Interpretation',
            spectrum: spectrum,
            molecularIon: molecularIon,
            molecularWeight: molecularWeight,
            molecularFormula: molecularFormula,
            fragmentAnalysis: fragmentAnalysis,
            basePeak: this.identifyBasePeak(fragments),
            proposedStructure: this.proposeStructureFromMS(molecularFormula, fragmentAnalysis),
            category: 'spectroscopy_mass_spec'
        };
    }

    solveStructureElucidation(problem) {
        const { molecularFormula, nmr, ir, ms, other } = problem.parameters;
        
        // Calculate degree of unsaturation
        const dbu = this.calculateDegreesOfUnsaturation(molecularFormula);
        
        // Combine all spectroscopic data
        const combinedAnalysis = {
            molecularFormula: molecularFormula,
            degreesOfUnsaturation: dbu,
            nmrInfo: this.extractNMRInfo(nmr),
            irInfo: this.extractIRInfo(ir),
            msInfo: this.extractMSInfo(ms)
        };
        
        // Propose structure
        const proposedStructure = this.proposeStructure(combinedAnalysis);
        
        // Verify against all data
        const verification = this.verifyProposedStructure(proposedStructure, combinedAnalysis);
        
        return {
            problemType: 'Structure Elucidation',
            molecularFormula: molecularFormula,
            degreesOfUnsaturation: dbu,
            combinedAnalysis: combinedAnalysis,
            proposedStructure: proposedStructure,
            verification: verification,
            confidence: this.assessConfidence(verification),
            alternativeStructures: this.proposeAlternatives(combinedAnalysis),
            category: 'spectroscopy_nmr'
        };
    }

    solveOxidation(problem) {
        const { substrate, oxidant } = problem.parameters;
        
        // Identify functional group to oxidize
        const functionalGroup = this.identifyOxidizableFunctionalGroup(substrate);
        
        // Determine oxidation level change
        const oxidationChange = this.determineOxidationChange(functionalGroup, oxidant);
        
        // Predict product
        const product = this.predictOxidationProduct(substrate, oxidant);
        
        return {
            problemType: 'Oxidation Reaction',
            substrate: substrate,
            oxidant: oxidant,
            functionalGroup: functionalGroup,
            oxidationChange: oxidationChange,
            product: product,
            mechanism: this.getOxidationMechanism(oxidant),
            selectivity: this.assessOxidationSelectivity(substrate, oxidant),
            category: 'oxidation_reduction'
        };
    }

    solveReduction(problem) {
        const { substrate, reductant } = problem.parameters;
        
        // Identify functional group to reduce
        const functionalGroup = this.identifyReducibleFunctionalGroup(substrate);
        
        // Determine reduction level change
        const reductionChange = this.determineReductionChange(functionalGroup, reductant);
        
        // Predict product
        const product = this.predictReductionProduct(substrate, reductant);
        
        return {
            problemType: 'Reduction Reaction',
            substrate: substrate,
            reductant: reductant,
            functionalGroup: functionalGroup,
            reductionChange: reductionChange,
            product: product,
            mechanism: this.getReductionMechanism(reductant),
            selectivity: this.assessReductionSelectivity(substrate, reductant),
            category: 'oxidation_reduction'
        };
    }

    solveProtectingGroup(problem) {
        const { substrate, targetSite, reaction } = problem.parameters;
        
        // Identify groups needing protection
        const groupsToProtect = this.identifyGroupsNeedingProtection(substrate, reaction);
        
        // Select appropriate protecting groups
        const protectingGroups = groupsToProtect.map(group => ({
            functionalGroup: group,
            recommendedProtection: this.selectProtectingGroup(group, reaction),
            installationConditions: this.getProtectionConditions(group),
            removalConditions: this.getDeprotectionConditions(group)
        }));
        
        // Design protection strategy
        const strategy = this.designProtectionStrategy(substrate, protectingGroups, reaction);
        
        return {
            problemType: 'Protecting Group Strategy',
            substrate: substrate,
            targetSite: targetSite,
            reaction: reaction,
            groupsToProtect: groupsToProtect,
            protectingGroups: protectingGroups,
            strategy: strategy,
            fullSequence: this.generateProtectionSequence(substrate, strategy, reaction),
            category: 'protecting_groups'
        };
    }

    solveAcidityComparison(problem) {
        const { compounds } = problem.parameters;
        
        // Analyze each compound
        const acidityAnalysis = compounds.map(compound => ({
            compound: compound,
            conjugateBase: this.drawConjugateBase(compound),
            stabilityFactors: this.analyzeConjugateBaseStability(compound),
            pKaEstimate: this.estimatePKa(compound),
            reasoning: this.explainAcidity(compound)
        }));
        
        // Rank by acidity
        const rankedByAcidity = this.rankByAcidity(acidityAnalysis);
        
        return {
            problemType: 'Acidity Comparison',
            compounds: compounds,
            acidityAnalysis: acidityAnalysis,
            rankedByAcidity: rankedByAcidity,
            mostAcidic: rankedByAcidity[0],
            leastAcidic: rankedByAcidity[rankedByAcidity.length - 1],
            keyFactors: this.identifyKeyAcidityFactors(acidityAnalysis),
            category: 'nomenclature_functional_groups'
        };
    }

    solveBasicityComparison(problem) {
        const { compounds } = problem.parameters;
        
        // Analyze each compound
        const basicityAnalysis = compounds.map(compound => ({
            compound: compound,
            conjugateAcid: this.drawConjugateAcid(compound),
            stabilityFactors: this.analyzeConjugateAcidStability(compound),
            pKbEstimate: this.estimatePKb(compound),
            reasoning: this.explainBasicity(compound)
        }));
        
        // Rank by basicity
        const rankedByBasicity = this.rankByBasicity(basicityAnalysis);
        
        return {
            problemType: 'Basicity Comparison',
            compounds: compounds,
            basicityAnalysis: basicityAnalysis,
            rankedByBasicity: rankedByBasicity,
            mostBasic: rankedByBasicity[0],
            leastBasic: rankedByBasicity[rankedByBasicity.length - 1],
            keyFactors: this.identifyKeyBasicityFactors(basicityAnalysis),
            category: 'nomenclature_functional_groups'
        };
    }

    // HELPER METHODS FOR ORGANIC CHEMISTRY

    analyzeOrganicStructure(structure) {
        // Placeholder - would need actual structure parsing
        return {
            longestChain: this.findLongestChain(structure),
            substituents: this.identifySubstituents(structure),
            functionalGroups: this.identifyFunctionalGroups(structure),
            chiralCenters: this.findChiralCenters(structure),
            aromaticRings: this.findAromaticRings(structure)
        };
    }

    findLongestChain(structure) {
        // Simplified - real implementation would parse structure
        return {
            length: 6,
            carbons: ['C1', 'C2', 'C3', 'C4', 'C5', 'C6'],
            numbering: [1, 2, 3, 4, 5, 6]
        };
    }

    identifySubstituents(structure) {
        // Simplified placeholder
        return [
            { name: 'methyl', position: 2 },
            { name: 'ethyl', position: 4 }
        ];
    }

    identifyFunctionalGroups(structure) {
        // Simplified placeholder
        return [
            { type: 'alcohol', position: 1, priority: 8 }
        ];
    }

    constructIUPACName(analysis) {
        const { longestChain, substituents, functionalGroups } = analysis;
        
        // Get base name
        const chainLength = longestChain.length;
        const baseName = this.getAlkanePrefix(chainLength);
        
        // Add functional group suffix
        let suffix = 'ane';
        if (functionalGroups.length > 0) {
            const highestPriority = this.getHighestPriorityGroup(functionalGroups);
            suffix = this.functionalGroups[highestPriority.type].suffix;
        }
        
        // Build substituent prefix
        const substituentString = this.buildSubstituentString(substituents);
        
        return substituentString ? `${substituentString}${baseName}${suffix}` : `${baseName}${suffix}`;
    }

    getAlkanePrefix(n) {
        const prefixes = this.nomenclatureRules.alkane_prefixes;
        const match = prefixes.find(p => p.n === n);
        return match ? match.prefix : `C${n}`;
    }

    getHighestPriorityGroup(groups) {
        return groups.reduce((highest, current) => 
            current.priority > highest.priority ? current : highest
        );
    }

    buildSubstituentString(substituents) {
        if (substituents.length === 0) return '';
        
        // Group identical substituents
        const grouped = this.groupSubstituents(substituents);
        
        // Sort alphabetically (ignoring multiplicity prefixes)
        const sorted = Object.keys(grouped).sort();
        
        // Build string
        const parts = sorted.map(name => {
            const positions = grouped[name].sort((a, b) => a - b);
            const posString = positions.join(',');
            const prefix = positions.length > 1 ? 
                this.nomenclatureRules.multiplicity_prefixes[positions.length] : '';
            return `${posString}-${prefix}${name}`;
        });
        
        return parts.join('-');
    }

    groupSubstituents(substituents) {
        const grouped = {};
        substituents.forEach(sub => {
            if (!grouped[sub.name]) {
                grouped[sub.name] = [];
            }
            grouped[sub.name].push(sub.position);
        });
        return grouped;
    }

    getNamingSteps(analysis) {
        return [
            {
                step: 1,
                action: 'Identify longest continuous carbon chain',
                result: `${analysis.longestChain.length} carbons`,
                reasoning: 'This determines the parent chain name'
            },
            {
                step: 2,
                action: 'Number the chain',
                result: `Numbering: ${analysis.longestChain.numbering.join('-')}`,
                reasoning: 'Number to give substituents/functional groups lowest numbers'
            },
            {
                step: 3,
                action: 'Identify and name substituents',
                result: analysis.substituents.map(s => `${s.name} at position ${s.position}`).join(', '),
                reasoning: 'All branches off main chain are substituents'
            },
            {
                step: 4,
                action: 'Identify functional groups',
                result: analysis.functionalGroups.map(f => f.type).join(', '),
                reasoning: 'Highest priority group determines suffix'
            },
            {
                step: 5,
                action: 'Assemble IUPAC name',
                result: this.constructIUPACName(analysis),
                reasoning: 'Combine: position-substituents (alphabetical) + parent + suffix'
            }
        ];
    }

    parseIUPACName(name) {
        // Simplified parser
        return {
            substituents: this.extractSubstituentsFromName(name),
            parentChain: this.extractParentChain(name),
            functionalGroup: this.extractFunctionalGroup(name),
            positions: this.extractPositions(name)
        };
    }

    extractSubstituentsFromName(name) {
        // Simplified - real parser would be more complex
        const substituents = [];
        const pattern = /(\d+)-(\w+)/g;
        let match;
        while ((match = pattern.exec(name)) !== null) {
            substituents.push({
                position: parseInt(match[1]),
                name: match[2]
            });
        }
        return substituents;
    }

    extractParentChain(name) {
        // Extract the base alkane name
        const alkanes = ['meth', 'eth', 'prop', 'but', 'pent', 'hex', 'hept', 'oct', 'non', 'dec'];
        for (const alkane of alkanes) {
            if (name.includes(alkane)) {
                const index = alkanes.indexOf(alkane);
                return { name: alkane, length: index + 1 };
            }
        }
        return { name: 'unknown', length: 0 };
    }

    extractFunctionalGroup(name) {
        if (name.endsWith('ol')) return 'alcohol';
        if (name.endsWith('al')) return 'aldehyde';
        if (name.endsWith('one')) return 'ketone';
        if (name.endsWith('oic acid')) return 'carboxylic_acid';
        if (name.endsWith('amine')) return 'amine';
        if (name.endsWith('ene')) return 'alkene';
        if (name.endsWith('yne')) return 'alkyne';
        return 'alkane';
    }

    extractPositions(name) {
        const positions = [];
        const pattern = /(\d+)/g;
        let match;
        while ((match = pattern.exec(name)) !== null) {
            positions.push(parseInt(match[1]));
        }
        return positions;
    }

    constructStructure(parsed) {
        // Simplified - would generate actual structure representation
        return {
            type: 'structure',
            parentChain: parsed.parentChain,
            substituents: parsed.substituents,
            functionalGroup: parsed.functionalGroup,
            representation: 'CH3-CH2-...' // Placeholder
        };
    }

    calculateMolecularFormula(structure) {
        // Simplified calculation
        return 'C6H14O'; // Placeholder
    }

    getStructureDrawingSteps(parsed) {
        return [
            {
                step: 1,
                action: 'Draw parent carbon chain',
                result: `Draw ${parsed.parentChain.length} carbons in a row`,
                tip: 'Use zigzag line for clarity'
            },
            {
                step: 2,
                action: 'Number the carbons',
                result: 'Label carbons 1, 2, 3, ...',
                tip: 'Number from end giving substituents lowest numbers'
            },
            {
                step: 3,
                action: 'Add substituents',
                result: parsed.substituents.map(s => `Add ${s.name} at position ${s.position}`).join('; '),
                tip: 'Attach branches at specified positions'
            },
            {
                step: 4,
                action: 'Add functional group',
                result: `Add ${parsed.functionalGroup} at specified position`,
                tip: 'Highest priority group determines numbering'
            },
            {
                step: 5,
                action: 'Add hydrogens',
                result: 'Complete valence with H atoms',
                tip: 'Each carbon needs 4 bonds total'
            }
        ];
    }

    assignCIPPriorities(substituents) {
        // Simplified CIP priority assignment
        return substituents.map(sub => ({
            substituent: sub,
            atomicNumber: this.getAtomicNumber(sub),
            priority: this.calculateCIPPriority(sub)
        })).sort((a, b) => b.priority - a.priority);
    }

    getAtomicNumber(substituent) {
        // Map first atom of substituent to atomic number
        const atomMap = { 'H': 1, 'C': 6, 'N': 7, 'O': 8, 'F': 9, 'Cl': 17, 'Br': 35, 'I': 53 };
        const firstAtom = typeof substituent === 'string' ? substituent.charAt(0) : 'C';
        return atomMap[firstAtom] || 6;
    }

    calculateCIPPriority(substituent) {
        // Simplified priority calculation
        // Higher atomic number = higher priority
        return this.getAtomicNumber(substituent);
    }

    determineRSConfiguration(priorities, chiralCenter) {
        // Simplified R/S determination
        // Would need 3D structure information in real implementation
        const orientation = this.getSubstituentOrientation(priorities, chiralCenter);
        
        // If lowest priority is pointing away and 1→2→3 is clockwise: R
        // If counterclockwise: S
        return orientation === 'clockwise' ? 'R' : 'S';
    }

    getSubstituentOrientation(priorities, chiralCenter) {
        // Placeholder - would need actual 3D structure analysis
        return 'clockwise'; // or 'counterclockwise'
    }

    explainRSAssignment(priorities, configuration) {
        return {
            step1: 'Assign priorities using Cahn-Ingold-Prelog rules (atomic number)',
            step2: `Priority order: ${priorities.map(p => p.substituent).join(' > ')}`,
            step3: 'Orient lowest priority group away from viewer',
            step4: `Trace path 1→2→3: ${configuration === 'R' ? 'clockwise' : 'counterclockwise'}`,
            conclusion: `Configuration is (${configuration})`
        };
    }

    assignEZPriorities(substituents) {
        // Similar to CIP but for E/Z
        return {
            side1: this.assignCIPPriorities(substituents.side1),
            side2: this.assignCIPPriorities(substituents.side2)
        };
    }

    determineEZConfiguration(priorities) {
        // If higher priority groups on same side: Z
        // If on opposite sides: E
        const highPrioritySameSide = this.areHighPrioritiesSameSide(priorities);
        return highPrioritySameSide ? 'Z' : 'E';
    }

    areHighPrioritiesSameSide(priorities) {
        // Placeholder - would need actual geometry analysis
        return false; // Returns true for Z, false for E
    }

    explainEZAssignment(priorities, configuration) {
        return {
            step1: 'Assign priorities to each side of double bond',
            step2: `Side 1: ${priorities.side1[0].substituent} > ${priorities.side1[1].substituent}`,
            step3: `Side 2: ${priorities.side2[0].substituent} > ${priorities.side2[1].substituent}`,
            step4: `Higher priority groups are on ${configuration === 'Z' ? 'same side (zusammen)' : 'opposite sides (entgegen)'}`,
            conclusion: `Configuration is (${configuration})`
        };
    }

    countChiralCenters(structure) {
        // Simplified - would parse actual structure
        return 2; // Placeholder
    }

    checkForMesoForm(structure) {
        // Check for internal plane of symmetry
        // Placeholder implementation
        return false;
    }

    findChiralCenters(structure) {
        // Identify all sp³ carbons with 4 different substituents
        // Placeholder
        return ['C2', 'C4'];
    }

    analyzeSN2Conditions(substrate, nucleophile, solvent) {
        return {
            substrateType: this.classifySubstrate(substrate),
            nucleophileStrength: this.assessNucleophileStrength(nucleophile),
            solventType: this.classifySolvent(solvent),
            favorability: this.assessSN2Favorability(substrate, nucleophile, solvent),
            expectedRate: 'Fast for primary, slow for secondary, very slow for tertiary'
        };
    }

    classifySubstrate(substrate) {
        // Determine if primary, secondary, or tertiary
        // Placeholder
        return 'primary'; // or 'secondary', 'tertiary'
    }

    assessNucleophileStrength(nucleophile) {
        const strongNucleophiles = ['CN⁻', 'RS⁻', 'I⁻', 'HO⁻', 'RO⁻'];
        const moderateNucleophiles = ['Br⁻', 'N₃⁻', 'NH₃'];
        const weakNucleophiles = ['H₂O', 'ROH', 'Cl⁻'];
        
        if (strongNucleophiles.includes(nucleophile)) return 'strong';
        if (moderateNucleophiles.includes(nucleophile)) return 'moderate';
        return 'weak';
    }

    classifySolvent(solvent) {
        const polarAprotic = ['DMSO', 'DMF', 'acetone', 'acetonitrile'];
        const polarProtic = ['water', 'methanol', 'ethanol', 'acetic acid'];
        
        if (polarAprotic.includes(solvent)) return 'polar aprotic (favorable for SN2)';
        if (polarProtic.includes(solvent)) return 'polar protic (less favorable for SN2)';
        return 'unknown';
    }

    assessSN2Favorability(substrate, nucleophile, solvent) {
        const subType = this.classifySubstrate(substrate);
        const nucStrength = this.assessNucleophileStrength(nucleophile);
        const solvType = this.classifySolvent(solvent);
        
        if (subType === 'primary' && nucStrength === 'strong' && solvType.includes('aprotic')) {
            return 'highly favorable';
        } else if (subType === 'tertiary') {
            return 'unfavorable (steric hindrance too great)';
        }
        return 'moderate';
    }

    drawBacksideAttack(substrate, nucleophile) {
        return {
            description: 'Nucleophile approaching from backside (180° from leaving group)',
            structure: `${nucleophile}⁻ -----> C-X (with proper 3D orientation)`,
            geometry: 'Linear approach along C-X bond axis'
        };
    }

    drawSN2TransitionState(substrate, nucleophile, leavingGroup) {
        return {
            description: 'Pentacoordinate transition state',
            structure: `[Nu---C---X]‡`,
            geometry: 'Trigonal bipyramidal with Nu and X at apices',
            bonds: 'Partial Nu-C and C-X bonds'
        };
    }

    drawSN2Product(substrate, nucleophile) {
        return {
            description: 'Product with inverted configuration',
            structure: 'Nu-C with stereochemistry inverted',
            stereochemistry: 'Complete Walden inversion'
        };
    }

    generateSN2EnergyDiagram() {
        return {
            type: 'single_barrier',
            stages: [
                { name: 'Reactants', energy: 0, description: 'Nu⁻ + RX' },
                { name: 'Transition State', energy: 15, description: '[Nu---R---X]‡' },
                { name: 'Products', energy: -5, description: 'Nu-R + X⁻' }
            ],
            activationEnergy: 15,
            reactionEnergy: -5
        };
    }

    drawCarbocationFormation(substrate, leavingGroup) {
        return {
            description: 'Heterolytic cleavage of C-X bond',
            structure: 'R-X → R⁺ + X⁻',
            mechanism: 'Both electrons go to leaving group'
        };
    }

    drawCarbocation(substrate) {
        return {
            description: 'Planar carbocation intermediate',
            structure: 'R₃C⁺ (sp² hybridized)',
            geometry: 'Trigonal planar with empty p orbital',
            stability: this.assessCarbocationStability(substrate)
        };
    }

    assessCarbocationStability(substrate) {
        // Stability order: 3° > 2° > 1° > methyl
        const type = this.classifySubstrate(substrate);
        const stabilityMap = {
            'tertiary': 'Most stable (3 alkyl groups donate electrons)',
            'secondary': 'Moderately stable (2 alkyl groups)',
            'primary': 'Unstable (1 alkyl group)',
            'methyl': 'Very unstable (no alkyl groups)'
        };
        return stabilityMap[type] || 'Unknown';
    }

    drawSN1Attack(substrate, nucleophile) {
        return {
            description: 'Nucleophile attacks planar carbocation from both faces',
            structure: 'Nu⁻ attacking R⁺ from top and bottom',
            result: 'Both enantiomers formed'
        };
    }

    drawSN1Products(substrate, nucleophile) {
        return {
            description: 'Racemic mixture (or partial racemization)',
            products: ['(R)-product (50%)', '(S)-product (50%)'],
            note: 'Some retention possible due to ion pairing'
        };
    }

    generateSN1EnergyDiagram() {
        return {
            type: 'two_barriers',
            stages: [
                { name: 'Reactants', energy: 0, description: 'RX' },
                { name: 'TS1', energy: 20, description: 'Ionization transition state' },
                { name: 'Carbocation', energy: 18, description: 'R⁺ + X⁻' },
                { name: 'TS2', energy: 19, description: 'Nucleophile attack' },
                { name: 'Products', energy: -3, description: 'R-Nu' }
            ],
            rateStep: 'Carbocation formation (Step 1)',
            activationEnergy: 20
        };
    }

    explainCarbocationStability(substrate) {
        return {
            factors: [
                'Hyperconjugation: More alkyl groups = more stability',
                'Inductive effect: Electron-donating groups stabilize (+)',
                'Resonance: Allylic and benzylic carbocations highly stabilized',
                'Hybridization: sp² is more stable than sp³ with (+) charge'
            ],
            order: '3° > 2° > 1° > methyl',
            reasoning: 'Alkyl groups donate electron density through σ bonds'
        };
    }

    analyzeE2Geometry(substrate, leavingGroup) {
        return {
            requirement: 'Anti-periplanar geometry',
            description: 'H and X must be 180° apart (anti)',
            dihedral: '180°',
            reasoning: 'Allows best orbital overlap for π bond formation',
            newman: 'H and X in anti positions on Newman projection'
        };
    }

    drawE2Mechanism(substrate, base, leavingGroup) {
        return {
            description: 'Concerted elimination',
            structure: 'Base removes H as X leaves',
            arrows: [
                'Base attacks H (curved arrow from base to H)',
                'C-H electrons form π bond (curved arrow from C-H to C-C)',
                'C-X bond breaks (curved arrow from C-X to X)'
            ]
        };
    }

    drawE2TransitionState(substrate, base, leavingGroup) {
        return {
            description: 'Single transition state',
            structure: 'Partial bonds: C-H breaking, C=C forming, C-X breaking',
            geometry: 'Anti-periplanar arrangement maintained'
        };
    }

    drawE2Product(substrate) {
        return {
            description: 'Alkene product',
            structure: 'C=C double bond formed',
            regiochemistry: this.applyZaitsevRule(substrate)
        };
    }

    applyZaitsevRule(substrate) {
        return {
            rule: 'Most substituted alkene is major product',
            reasoning: 'More substituted = more stable (hyperconjugation)',
            exception: 'Bulky bases favor Hofmann product (less substituted)'
        };
    }

    identifyZaitsevProduct(substrate) {
        return {
            product: 'Most substituted alkene',
            stability: 'Most thermodynamically stable'
        };
    }

    identifyHofmannProduct(substrate) {
        return {
            product: 'Least substituted alkene',
            conditions: 'Bulky base (e.g., t-BuO⁻) favors this'
        };
    }

    predictMajorE2Product(substrate, base) {
        const isBulkyBase = ['t-BuO⁻', 'LDA', 'DBU'].includes(base);
        return isBulkyBase ? this.identifyHofmannProduct(substrate) : this.identifyZaitsevProduct(substrate);
    }

    generateE2EnergyDiagram() {
        return {
            type: 'single_barrier',
            stages: [
                { name: 'Reactants', energy: 0, description: 'RX + Base' },
                { name: 'Transition State', energy: 18, description: 'Concerted TS' },
                { name: 'Products', energy: -8, description: 'Alkene + HB + X⁻' }
            ],
            activationEnergy: 18
        };
    }

    drawE1Ionization(substrate, leavingGroup) {
        return {
            description: 'Same as SN1 first step',
            structure: 'R-X → R⁺ + X⁻',
            rateStep: true
        };
    }

    drawE1Deprotonation(substrate, base) {
        return {
            description: 'Base removes β-hydrogen from carbocation',
            structure: 'Base abstracts H⁺, electrons form π bond',
            multiple_products: 'Can remove H from different β-carbons'
        };
    }

    drawE1Products(substrate) {
        return {
            description: 'Mixture of alkene products',
            major: 'Zaitsev product predominates',
            minor: 'Less substituted alkenes also formed'
        };
    }

    identifyAdditionType(electrophile) {
        const additionTypes = {
            'HBr': 'hydrohalogenation',
            'HCl': 'hydrohalogenation',
            'H2O/H+': 'hydration',
            'Br2': 'halogenation',
            'Cl2': 'halogenation',
            'BH3': 'hydroboration',
            'H2/Pt': 'hydrogenation'
        };
        return additionTypes[electrophile] || 'general electrophilic addition';
    }

    drawElectrophilicAttack(alkene, electrophile) {
        return {
            description: 'π electrons attack electrophile',
            structure: 'C=C → E⁺',
            electronFlow: 'π electrons form bond to electrophile'
        };
    }

    drawAdditionCarbocation(alkene, electrophile) {
        return {
            description: 'Carbocation intermediate',
            structure: 'More stable carbocation forms',
            regiochemistry: 'Markovnikov: H to less substituted C'
        };
    }

    drawNucleophileAddition(alkene, electrophile) {
        return {
            description: 'Nucleophile attacks carbocation',
            structure: 'Nu⁻ → C⁺'
        };
    }

    drawAdditionProduct(alkene, electrophile) {
        return {
            description: 'Final addition product',
            regiochemistry: 'Markovnikov product'
        };
    }

    applyMarkovnikovRule(alkene) {
        return {
            rule: 'H adds to carbon with more H atoms already',
            equivalently: 'Positive charge goes to more substituted carbon',
            reasoning: 'More stable carbocation intermediate forms'
        };
    }

    explainMarkovnikov(alkene) {
        return {
            statement: 'In addition of HX to alkenes, H adds to less substituted carbon',
            mechanism: 'Reaction proceeds through more stable carbocation',
            thermodynamics: '3° carbocation > 2° > 1°',
            product: 'More substituted halide/alcohol/etc.'
        };
    }

    predictAdditionStereochemistry(additionType) {
        const stereoMap = {
            'halogenation': 'anti addition (bromonium ion intermediate)',
            'hydroboration': 'syn addition (concerted)',
            'hydrogenation': 'syn addition (both H from same catalyst surface)',
            'hydration': 'racemic (if chiral center formed via planar carbocation)',
            'hydrohalogenation': 'racemic (if chiral center formed)'
        };
        return stereoMap[additionType] || 'depends on mechanism';
    }

    drawMarkovnikovProduct(alkene, electrophile) {
        return {
            description: 'Major product following Markovnikov rule',
            structure: 'Product with E on more substituted carbon'
        };
    }

    getAntiMarkovnikovConditions() {
        return {
            reagent: 'HBr + peroxides (ROOR)',
            mechanism: 'Free radical',
            product: 'Anti-Markovnikov (H to more substituted C)',
            reasoning: 'More stable radical intermediate (opposite of carbocation)'
        };
    }

    drawCarbonylAttack(carbonyl, nucleophile) {
        return {
            description: 'Nucleophile attacks electrophilic carbonyl carbon',
            structure: 'Nu⁻ → C=O',
            electronFlow: 'π electrons move to oxygen'
        };
    }

    drawTetrahedralIntermediate(carbonyl, nucleophile) {
        return {
            description: 'Tetrahedral intermediate with O⁻',
            structure: 'R₂C(Nu)(O⁻)',
            geometry: 'sp³ tetrahedral carbon'
        };
    }

    drawCarbonylProtonation(carbonyl, nucleophile) {
        return {
            description: 'Protonation of alkoxide',
            structure: 'O⁻ + H⁺ → OH'
        };
    }

    drawCarbonylProduct(carbonyl, nucleophile) {
        return {
            description: 'Alcohol product (from aldehyde/ketone)',
            structure: 'R₂C(Nu)(OH)'
        };
    }

    assessReversibility(carbonyl, nucleophile) {
        return {
            aldehydesKetones: 'Often reversible',
            carboxylicDerivatives: 'Irreversible (tetrahedral intermediate collapses)',
            factors: 'Depends on nucleophile strength and leaving group ability'
        };
    }

    generateElectrophile(electrophile, catalyst) {
        const generations = {
            'Br2/FeBr3': { product: 'Br⁺', mechanism: 'FeBr₃ + Br₂ → FeBr₄⁻ + Br⁺' },
            'HNO3/H2SO4': { product: 'NO₂⁺', mechanism: 'HNO₃ + 2H₂SO₄ → NO₂⁺ + H₃O⁺ + 2HSO₄⁻' },
            'RCl/AlCl3': { product: 'R⁺', mechanism: 'AlCl₃ + RCl → AlCl₄⁻ + R⁺' }
        };
        return generations[`${electrophile}/${catalyst}`] || { product: electrophile, mechanism: 'Direct' };
    }

    drawAromaticAttack(arene, electrophile) {
        return {
            description: 'Electrophile attacks aromatic π system',
            structure: 'Benzene + E⁺'
        };
    }

    drawAreniumIon(arene, electrophile) {
        return {
            description: 'Sigma complex (arenium ion)',
            structure: 'Cyclohexadienyl cation with E attached',
            aromaticity: 'Temporarily lost'
        };
    }

    drawAreniumResonance(arene, electrophile) {
        return {
            description: 'Three resonance structures of arenium ion',
            structures: [
                'Positive charge ortho to E',
                'Positive charge meta to E',
                'Positive charge para to E'
            ]
        };
    }

    drawAromaticDeprotonation(arene, electrophile) {
        return {
            description: 'Loss of H⁺ restores aromaticity',
            structure: 'Base removes H, aromaticity restored'
        };
    }

    analyzeDirectingEffects(arene) {
        return {
            activating_ortho_para: ['-OH', '-OR', '-NH₂', '-NHR', '-R'],
            deactivating_meta: ['-NO₂', '-CN', '-CHO', '-COR', '-COOH', '-SO₃H'],
            deactivating_ortho_para: ['-F', '-Cl', '-Br', '-I'],
            reasoning: 'Resonance donation vs. inductive withdrawal'
        };
    }

    predictAromaticRegiochemistry(arene, electrophile) {
        const substituents = this.identifyAromaticSubstituents(arene);
        if (substituents.length === 0) return 'No directing effects';
        
        const director = substituents[0];
        const effects = this.analyzeDirectingEffects(arene);
        
        if (effects.activating_ortho_para.includes(director)) {
            return { positions: ['ortho', 'para'], reasoning: 'Activating ortho/para director' };
        } else if (effects.deactivating_meta.includes(director)) {
            return { positions: ['meta'], reasoning: 'Deactivating meta director' };
        }
        return { positions: ['ortho', 'para'], reasoning: 'Halogen: deactivating but ortho/para' };
    }

    identifyAromaticSubstituents(arene) {
        // Placeholder
        return ['-OH']; // Would parse actual structure
    }

    drawAromaticProduct(arene, electrophile) {
        return {
            description: 'Substituted aromatic product',
            structure: 'Benzene with E substituent',
            aromaticity: 'Fully restored'
        };
    }

    generateEASEnergyDiagram() {
        return {
            type: 'two_barriers',
            stages: [
                { name: 'Reactants', energy: 0, description: 'Arene + E⁺' },
                { name: 'TS1', energy: 22, description: 'E⁺ attacking' },
                { name: 'Arenium Ion', energy: 20, description: 'Sigma complex' },
                { name: 'TS2', energy: 21, description: 'Deprotonation' },
                { name: 'Products', energy: -2, description: 'Substituted arene' }
            ],
            rateStep: 'Arenium ion formation (Step 1)'
        };
    }

    identifyReactionType(reactant, reagents, conditions) {
        // Pattern matching for common reactions
        if (reagents.includes('NaOH') && conditions.includes('heat')) return 'E2';
        if (reagents.includes('H2O') && conditions.includes('H+')) return 'SN1';
        if (reagents.includes('CN-') && conditions.includes('DMSO')) return 'SN2';
        if (reagents.includes('Br2')) return 'halogenation';
        if (reagents.includes('H2') && conditions.includes('Pt')) return 'hydrogenation';
        return 'unknown';
    }

    predictProducts(reactant, reagents, reactionType) {
        // Simplified product prediction
        return {
            major: this.getMajorProduct(reactant, reagents, reactionType),
            minor: this.getMinorProducts(reactant, reagents, reactionType),
            stereochemistry: this.predictProductStereochemistry(reactionType),
            mechanism: reactionType
        };
    }

    getMajorProduct(reactant, reagents, reactionType) {
        // Placeholder - would do actual structure transformation
        return {
            structure: 'Product structure',
            yield: '75-85%',
            reasoning: 'Most thermodynamically stable / kinetically favored'
        };
    }

    getMinorProducts(reactant, reagents, reactionType) {
        return [
            {
                structure: 'Minor product 1',
                yield: '10-15%',
                reasoning: 'Alternative pathway'
            }
        ];
    }

    predictProductStereochemistry(reactionType) {
        const stereoMap = {
            'SN2': 'inversion',
            'SN1': 'racemization',
            'E2': 'anti elimination',
            'E1': 'no requirement',
            'halogenation': 'anti addition'
        };
        return stereoMap[reactionType] || 'depends on mechanism';
    }

    getSummaryMechanism(reactionType) {
        return {
            type: reactionType,
            steps: this.getMechanismSteps(reactionType),
            keyIntermediate: this.getKeyIntermediate(reactionType),
            rateEquation: this.getRateEquation(reactionType)
        };
    }

    getMechanismSteps(reactionType) {
        const mechanisms = {
            'SN2': ['Backside nucleophilic attack', 'Concerted displacement'],
            'SN1': ['Ionization to carbocation', 'Nucleophile attack'],
            'E2': ['Concerted elimination', 'Anti-periplanar geometry'],
            'E1': ['Ionization to carbocation', 'Base removes β-H']
        };
        return mechanisms[reactionType] || ['General mechanism'];
    }

    getKeyIntermediate(reactionType) {
        const intermediates = {
            'SN1': 'carbocation',
            'E1': 'carbocation',
            'SN2': 'transition state (no intermediate)',
            'E2': 'transition state (no intermediate)',
            'addition': 'carbocation'
        };
        return intermediates[reactionType] || 'none';
    }

    getRateEquation(reactionType) {
        const rates = {
            'SN2': 'Rate = k[RX][Nu⁻]',
            'SN1': 'Rate = k[RX]',
            'E2': 'Rate = k[RX][Base]',
            'E1': 'Rate = k[RX]'
        };
        return rates[reactionType] || 'Variable';
    }

    explainProductFormation(reactant, products, reactionType) {
        return {
            mechanism: reactionType,
            keyStep: this.getKeyIntermediate(reactionType),
            selectivity: this.explainSelectivity(products),
            stereochemistry: this.explainStereochemicalOutcome(reactionType)
        };
    }

    explainSelectivity(products) {
        if (products.minor && products.minor.length > 0) {
            return 'Multiple products possible; major product favored by stability/sterics';
        }
        return 'Single product expected under these conditions';
    }

    explainStereochemicalOutcome(reactionType) {
        return {
            'SN2': 'Complete inversion at stereocenter',
            'SN1': 'Racemic mixture from planar carbocation',
            'E2': 'Anti elimination gives specific alkene geometry',
            'addition': 'Depends on mechanism (syn or anti)'
        }[reactionType] || 'No stereochemical change';
    }

    getCategoryFromReaction(reactionType) {
        const categoryMap = {
            'SN2': 'reaction_mechanisms_sn2',
            'SN1': 'reaction_mechanisms_sn1',
            'E2': 'reaction_mechanisms_e2',
            'E1': 'reaction_mechanisms_e1',
            'addition': 'addition_reactions_alkenes',
            'aromatic': 'aromatic_chemistry_electrophilic'
        };
        return categoryMap[reactionType] || 'nomenclature_alkanes';
    }

    analyzeTransformation(startingMaterial, product) {
        return {
            functionalGroupChange: this.identifyFunctionalGroupChange(startingMaterial, product),
            carbonSkeleton: this.compareCarbonSkeletons(startingMaterial, product),
            stereochemistry: this.compareStereochemistry(startingMaterial, product),
            oxidationState: this.compareOxidationStates(startingMaterial, product)
        };
    }

    identifyFunctionalGroupChange(start, product) {
        return {
            starting: this.identifyFunctionalGroups(start),
            product: this.identifyFunctionalGroups(product),
            transformation: 'alcohol → aldehyde (example)'
        };
    }

    compareCarbonSkeletons(start, product) {
        return {
            same: true, // or false if carbon chain changes
            changes: 'No carbon chain changes' // or description of changes
        };
    }

    compareStereochemistry(start, product) {
        return {
            retained: false,
            inverted: true,
            racemized: false
        };
    }

    compareOxidationStates(start, product) {
        return {
            change: '+2',
            direction: 'oxidation',
            example: 'alcohol (−1) → aldehyde (+1)'
        };
    }

    selectReagents(transformation) {
        // Match transformation to reagent database
        const reagentDatabase = {
            'alcohol_to_aldehyde': ['PCC', 'or DMP', 'or Swern oxidation'],
            'alcohol_to_ketone': ['PCC', 'or Jones oxidation (CrO₃)'],
            'aldehyde_to_alcohol': ['NaBH₄', 'or LiAlH₄'],
            'alkene_to_alkane': ['H₂/Pt', 'or H₂/Pd'],
            'alkane_to_alkyl_halide': ['Br₂/hν', 'or NBS/hν']
        };
        
        const transType = transformation.functionalGroupChange.transformation;
        return reagentDatabase[transType] || ['Consult reagent guide'];
    }

    findAlternativeReagents(transformation) {
        return [
            { reagents: 'Alternative method 1', conditions: 'Different conditions' },
            { reagents: 'Alternative method 2', conditions: 'Different selectivity' }
        ];
    }

    getMechanismForReagents(reagents) {
        return {
            summary: `Mechanism using ${reagents}`,
            type: 'Specific to reagent choice',
            keySteps: ['Step 1', 'Step 2', 'Step 3']
        };
    }

    performRetrosynthesis(startingMaterial, target) {
        const disconnections = this.identifyDisconnections(target);
        const steps = [];
        
        let currentTarget = target;
        let stepNumber = 0;
        
        while (!this.isAvailableStartingMaterial(currentTarget, startingMaterial) && stepNumber < 5) {
            stepNumber++;
            const bestDisconnection = this.selectBestDisconnection(currentTarget, disconnections);
            steps.push({
                step: stepNumber,
                target: currentTarget,
                disconnection: bestDisconnection,
                precursors: bestDisconnection.precursors,
                reasoning: bestDisconnection.reasoning
            });
            currentTarget = bestDisconnection.precursors[0]; // Simplified - would handle multiple precursors
        }
        
        return {
            steps: steps,
            finalPrecursor: currentTarget,
            reachesStartingMaterial: this.isAvailableStartingMaterial(currentTarget, startingMaterial)
        };
    }

    identifyDisconnections(target) {
        // Analyze target for strategic bond breaks
        return [
            {
                bond: 'C-C bond α to carbonyl',
                type: 'aldol disconnection',
                precursors: ['aldehyde/ketone 1', 'aldehyde/ketone 2'],
                reasoning: 'Aldol condensation can form this C-C bond',
                synthons: ['enolate', 'carbonyl']
            },
            {
                bond: 'C-O bond',
                type: 'ether formation',
                precursors: ['alcohol', 'alkyl halide'],
                reasoning: 'Williamson ether synthesis',
                synthons: ['alkoxide', 'alkyl halide']
            }
        ];
    }

    selectBestDisconnection(target, disconnections) {
        // Evaluate and rank disconnections
        return disconnections[0]; // Simplified - would use sophisticated ranking
    }

    isAvailableStartingMaterial(structure, startingMaterial) {
        // Check if structure matches available starting material
        return structure === startingMaterial; // Simplified comparison
    }

    evaluateDisconnection(disconnection, availableStartingMaterials) {
        return {
            disconnection: disconnection,
            score: this.scoreDisconnection(disconnection),
            availability: this.checkPrecursorAvailability(disconnection.precursors, availableStartingMaterials),
            difficulty: this.assessSyntheticDifficulty(disconnection)
        };
    }

    scoreDisconnection(disconnection) {
        // Score based on: simplicity, availability, yield, selectivity
        return 85; // Out of 100
    }

    checkPrecursorAvailability(precursors, available) {
        return {
            allAvailable: true, // or false
            missing: []
        };
    }

    assessSyntheticDifficulty(disconnection) {
        return {
            level: 'moderate',
            factors: ['Number of steps', 'Selectivity issues', 'Yield considerations']
        };
    }

    convertToForwardSynthesis(retrosynthesis) {
        // Reverse the retrosynthetic steps
        const forwardSteps = [];
        const retroSteps = retrosynthesis.steps.slice().reverse();
        
        retroSteps.forEach((retroStep, index) => {
            forwardSteps.push({
                step: index + 1,
                startingMaterials: retroStep.precursors,
                reagents: this.getReagentsForTransformation(retroStep.disconnection),
                product: retroStep.target,
                conditions: this.getConditionsForTransformation(retroStep.disconnection)
            });
        });
        
        return forwardSteps;
    }

    getReagentsForTransformation(disconnection) {
        const reagentMap = {
            'aldol disconnection': 'NaOH or LDA, then H₃O⁺',
            'ether formation': 'NaH, then RX (Williamson)',
            'Grignard addition': 'RMgBr, then H₃O⁺'
        };
        return reagentMap[disconnection.type] || 'Appropriate reagents';
    }

    getConditionsForTransformation(disconnection) {
        const conditionMap = {
            'aldol disconnection': 'Base, then acid workup',
            'ether formation': 'Polar aprotic solvent (DMF, DMSO)',
            'Grignard addition': 'Dry ether, then aqueous workup'
        };
        return conditionMap[disconnection.type] || 'Standard conditions';
    }

    identifyKeySteps(forwardSynthesis) {
        return forwardSynthesis.filter(step => 
            step.reagents.includes('critical') || 
            step.conditions.includes('difficult')
        );
    }

    findAlternativeRoutes(startingMaterial, target) {
        return [
            {
                route: 'Alternative Route 1',
                steps: 4,
                advantages: 'Fewer steps',
                disadvantages: 'Lower yield'
            },
            {
                route: 'Alternative Route 2',
                steps: 6,
                advantages: 'Higher selectivity',
                disadvantages: 'More steps'
            }
        ];
    }

    analyzeTargetStructure(target) {
        return {
            functionalGroups: this.identifyFunctionalGroups(target),
            chiralCenters: this.findChiralCenters(target),
            ringSystems: this.identifyRingSystems(target),
            complexity: this.assessMolecularComplexity(target)
        };
    }

    identifyRingSystems(structure) {
        // Identify cyclic structures
        return [
            { type: 'benzene', count: 1 },
            { type: 'cyclohexane', count: 0 }
        ];
    }

    assessMolecularComplexity(structure) {
        return {
            score: 7, // out of 10
            factors: ['Multiple functional groups', 'Stereochemistry', 'Ring systems']
        };
    }

    rankSyntheticRoutes(evaluatedRoutes) {
        return evaluatedRoutes.sort((a, b) => b.score - a.score);
    }

    identifySynthons(disconnections) {
        return disconnections.map(d => d.synthons).flat();
    }

    findSyntheticEquivalents(synthons) {
        const equivalents = {
            'enolate': ['LDA + ketone', 'NaOEt + ester'],
            'alkoxide': ['NaH + alcohol', 'NaOEt'],
            'acyl cation': ['acid chloride', 'anhydride'],
            'nucleophilic carbon': ['Grignard reagent', 'organolithium']
        };
        
        return synthons.map(synthon => ({
            synthon: synthon,
            equivalents: equivalents[synthon] || ['No common equivalent listed']
        }));
    }

    assignNMRSignal(peak) {
        const { shift, integration, splitting } = peak;
        
        // Chemical shift ranges
        if (shift > 9 && shift < 10) return 'Aldehyde H';
        if (shift > 7 && shift < 8) return 'Aromatic H';
        if (shift > 4 && shift < 5) return 'H on C next to O';
        if (shift > 2 && shift < 3) return 'H α to carbonyl';
        if (shift > 1 && shift < 2) return 'Alkyl H';
        if (shift > 0 && shift < 1) return 'CH₃ far from functional groups';
        
        return 'General alkyl H';
    }

    explainNMRSignal(peak) {
        return {
            shift: `δ ${peak.shift} ppm indicates ${this.assignNMRSignal(peak)}`,
            integration: `Integration of ${peak.integration} suggests ${peak.integration} H atoms`,
            splitting: `Splitting pattern ${peak.splitting} indicates ${this.interpretSplitting(peak.splitting)} adjacent H`
        };
    }

    interpretSplitting(splitting) {
        const patterns = {
            'singlet': '0',
            'doublet': '1',
            'triplet': '2',
            'quartet': '3',
            'quintet': '4',
            'multiplet': 'several'
        };
        return patterns[splitting] || 'unknown number of';
    }

    deduceStructureFromNMR(signalAnalysis) {
        // Combine all signal information to propose structure
        return {
            proposedStructure: 'Structure based on NMR data',
            reasoning: 'Signals consistent with this structure',
            confidence: 'high' // or 'medium', 'low'
        };
    }

    verifyNMRAssignment(structure, peaks) {
        return {
            consistent: true,
            discrepancies: [],
            confidence: 95 // percentage
        };
    }

    identifyFunctionalGroupsIR(peaks) {
        const groups = [];
        
        peaks.forEach(peak => {
            if (peak.wavenumber > 3200 && peak.wavenumber < 3600) {
                if (peak.shape === 'broad') groups.push('O-H (alcohol/carboxylic acid)');
                else groups.push('N-H (amine)');
            }
            if (peak.wavenumber > 1680 && peak.wavenumber < 1750) {
                groups.push('C=O (carbonyl)');
            }
            if (peak.wavenumber > 1600 && peak.wavenumber < 1680) {
                groups.push('C=C (alkene) or aromatic');
            }
            if (peak.wavenumber > 2100 && peak.wavenumber < 2260) {
                groups.push('C≡C (alkyne) or C≡N (nitrile)');
            }
        });
        
        return groups;
    }

    assignIRPeak(peak) {
        if (peak.wavenumber > 3200 && peak.wavenumber < 3600) return 'O-H or N-H stretch';
        if (peak.wavenumber > 2850 && peak.wavenumber < 3000) return 'C-H stretch (alkyl)';
        if (peak.wavenumber > 1680 && peak.wavenumber < 1750) return 'C=O stretch';
        if (peak.wavenumber > 1600 && peak.wavenumber < 1680) return 'C=C stretch';
        if (peak.wavenumber > 1000 && peak.wavenumber < 1300) return 'C-O stretch';
        return 'Fingerprint region';
    }

    getFunctionalGroupFromIR(peak) {
        if (peak.wavenumber > 1680 && peak.wavenumber < 1750 && peak.intensity === 'strong') {
            return { group: 'carbonyl', confidence: 'high' };
        }
        if (peak.wavenumber > 3200 && peak.wavenumber < 3600 && peak.shape === 'broad') {
            return { group: 'alcohol or acid', confidence: 'high' };
        }
        return { group: 'unknown', confidence: 'low' };
    }

    identifyAbsentPeaks(peaks) {
        const expectedPeaks = {
            'carbonyl': { range: '1680-1750', significance: 'No carbonyl group present' },
            'OH': { range: '3200-3600 broad', significance: 'No alcohol/carboxylic acid' },
            'NH': { range: '3300-3500', significance: 'No amine' }
        };
        
        const absent = [];
        Object.entries(expectedPeaks).forEach(([group, info]) => {
            if (!this.hasPeakInRange(peaks, info.range)) {
                absent.push({ group: group, significance: info.significance });
            }
        });
        
        return absent;
    }

    hasPeakInRange(peaks, range) {
        const [min, max] = range.split('-').map(s => parseFloat(s));
        return peaks.some(peak => peak.wavenumber >= min && peak.wavenumber <= max);
    }

    inferStructureFromIR(functionalGroups) {
        return {
            mustHave: functionalGroups,
            cannotHave: this.determineAbsentGroups(functionalGroups),
            structuralHints: 'Combine with other spectroscopy for full structure'
        };
    }

    determineAbsentGroups(present) {
        const allGroups = ['alcohol', 'aldehyde', 'ketone', 'carboxylic acid', 'amine', 'alkene'];
        return allGroups.filter(g => !present.includes(g));
    }

    deduceMolecularFormula(molecularIon, fragments) {
        const mz = molecularIon.mz;
        const m1 = molecularIon.m1_intensity || 0;
        
        // Estimate number of carbons from M+1 peak
        const numCarbons = Math.round(m1 / 1.1);
        
        // Use nitrogen rule: odd m/z means odd number of nitrogens
        const oddMass = mz % 2 === 1;
        
        return {
            estimatedFormula: `C${numCarbons}H${mz - numCarbons * 12}`, // Simplified
            nitrogenPresent: oddMass,
            reasoning: 'Based on M+1 peak and nitrogen rule'
        };
    }

    assignFragment(fragment, molecularWeight) {
        const loss = molecularWeight - fragment.mz;
        
        const commonLosses = {
            15: 'CH₃ (methyl)',
            17: 'OH (hydroxyl)',
            18: 'H₂O (water)',
            28: 'CO (carbon monoxide)',
            29: 'CHO (formyl) or C₂H₅',
            31: 'CH₂OH or OCH₃',
            43: 'C₃H₇ or CH₃CO (acetyl)',
            45: 'CO₂H (carboxyl)',
            77: 'C₆H₅ (phenyl)'
        };
        
        return {
            fragment: fragment.mz,
            loss: loss,
            lostGroup: commonLosses[loss] || 'Unknown group',
            remaining: `Fragment with m/z = ${fragment.mz}`
        };
    }

    inferStructureFromFragment(fragment) {
        if (fragment.mz === 77) return 'Likely contains phenyl group';
        if (fragment.mz === 91) return 'Likely benzyl cation (tropylium)';
        if (fragment.mz === 43) return 'Likely acetyl cation or propyl';
        return 'Fragment provides structural clue';
    }

    identifyBasePeak(fragments) {
        return fragments.reduce((max, current) => 
            current.intensity > max.intensity ? current : max
        );
    }

    proposeStructureFromMS(molecularFormula, fragmentAnalysis) {
        return {
            proposedStructure: 'Structure consistent with MS data',
            molecularFormula: molecularFormula,
            keyFragments: fragmentAnalysis.filter(f => f.intensity > 30),
            reasoning: 'Fragmentation pattern supports this structure'
        };
    }

    calculateDegreesOfUnsaturation(molecularFormula) {
        // Parse formula to count atoms
        const atoms = this.parseFormula(molecularFormula);
        const C = atoms.C || 0;
        const H = atoms.H || 0;
        const N = atoms.N || 0;
        const X = (atoms.F || 0) + (atoms.Cl || 0) + (atoms.Br || 0) + (atoms.I || 0);
        
        // DBU = (2C + 2 + N - H - X) / 2
        const dbu = (2 * C + 2 + N - H - X) / 2;
        
        return {
            value: dbu,
            interpretation: this.interpretDBU(dbu),
            formula: `DBU = (2C + 2 + N - H - X) / 2 = (${2*C} + 2 + ${N} - ${H} - ${X}) / 2 = ${dbu}`
        };
    }

    parseFormula(formula) {
        const atoms = {};
        const pattern = /([A-Z][a-z]?)(\d*)/g;
        let match;
        
        while ((match = pattern.exec(formula)) !== null) {
            const element = match[1];
            const count = match[2] ? parseInt(match[2]) : 1;
            atoms[element] = count;
        }
        
        return atoms;
    }

    interpretDBU(dbu) {
        if (dbu === 0) return 'Saturated (no rings or double bonds)';
        if (dbu === 1) return 'One ring or one double bond';
        if (dbu === 2) return 'Two rings/double bonds or one triple bond';
        if (dbu === 4) return 'Likely benzene ring (4 DBU)';
        if (dbu >= 5) return `${dbu} degrees of unsaturation - multiple rings/double bonds`;
        return `${dbu} ring(s) and/or double bond(s)`;
    }

    extractNMRInfo(nmr) {
        if (!nmr) return null;
        return {
            numberOfSignals: nmr.peaks ? nmr.peaks.length : 0,
            chemicalShifts: nmr.peaks ? nmr.peaks.map(p => p.shift) : [],
            integrations: nmr.peaks ? nmr.peaks.map(p => p.integration) : [],
            splittingPatterns: nmr.peaks ? nmr.peaks.map(p => p.splitting) : []
        };
    }

    extractIRInfo(ir) {
        if (!ir) return null;
        return {
            functionalGroups: this.identifyFunctionalGroupsIR(ir.peaks || []),
            keyPeaks: ir.peaks ? ir.peaks.filter(p => p.intensity === 'strong') : []
        };
    }

    extractMSInfo(ms) {
        if (!ms) return null;
        return {
            molecularIon: ms.molecularIon,
            molecularWeight: ms.molecularIon ? ms.molecularIon.mz : 0,
            basePeak: ms.fragments ? this.identifyBasePeak(ms.fragments) : null,
            fragmentPattern: ms.fragments || []
        };
    }

    proposeStructure(combinedAnalysis) {
        // Integrate all spectroscopic data
        const { molecularFormula, degreesOfUnsaturation, nmrInfo, irInfo, msInfo } = combinedAnalysis;
        
        return {
            proposedStructure: 'Complete structure based on all data',
            molecularFormula: molecularFormula,
            dbu: degreesOfUnsaturation,
            functionalGroups: irInfo?.functionalGroups || [],
            connectivity: 'From NMR coupling patterns',
            stereochemistry: 'From NMR or other data if applicable'
        };
    }

    verifyProposedStructure(structure, combinedAnalysis) {
        return {
            nmrConsistency: this.checkNMRConsistency(structure, combinedAnalysis.nmrInfo),
            irConsistency: this.checkIRConsistency(structure, combinedAnalysis.irInfo),
            msConsistency: this.checkMSConsistency(structure, combinedAnalysis.msInfo),
            dbuConsistency: this.checkDBUConsistency(structure, combinedAnalysis.degreesOfUnsaturation),
            overallConsistency: 'high' // or 'medium', 'low'
        };
    }

    checkNMRConsistency(structure, nmrInfo) {
        return { consistent: true, notes: 'NMR signals match proposed structure' };
    }

    checkIRConsistency(structure, irInfo) {
        return { consistent: true, notes: 'IR peaks match functional groups' };
    }

    checkMSConsistency(structure, msInfo) {
        return { consistent: true, notes: 'Fragmentation pattern matches structure' };
    }

    checkDBUConsistency(structure, dbu) {
        return { consistent: true, notes: 'DBU matches rings and double bonds' };
    }

    assessConfidence(verification) {
        if (verification.nmrConsistency.consistent && 
            verification.irConsistency.consistent && 
            verification.msConsistency.consistent) {
            return 'Very High';
        }
        return 'Medium';
    }

    proposeAlternatives(combinedAnalysis) {
        return [
            {
                structure: 'Alternative structure 1',
                reasoning: 'Isomeric possibility',
                confidence: 'low'
            }
        ];
    }

    identifyOxidizableFunctionalGroup(substrate) {
        const groups = this.identifyFunctionalGroups(substrate);
        const oxidizable = ['alcohol', 'aldehyde', 'alkene'];
        return groups.find(g => oxidizable.includes(g.type)) || groups[0];
    }

    determineOxidationChange(functionalGroup, oxidant) {
        const changes = {
            'alcohol_primary': 'alcohol → aldehyde (or carboxylic acid with strong oxidant)',
            'alcohol_secondary': 'alcohol → ketone',
            'aldehyde': 'aldehyde → carboxylic acid',
            'alkene': 'alkene → epoxide or diol or cleavage products'
        };
        return changes[`${functionalGroup.type}_${functionalGroup.classification || ''}`] || 'oxidation';
    }

    predictOxidationProduct(substrate, oxidant) {
        const fg = this.identifyOxidizableFunctionalGroup(substrate);
        
        if (fg.type === 'alcohol') {
            if (oxidant === 'PCC' || oxidant === 'DMP') {
                return { structure: 'Aldehyde (from 1°) or Ketone (from 2°)', selectivity: 'Stops at aldehyde' };
            } else if (oxidant.includes('CrO3') || oxidant.includes('KMnO4')) {
                return { structure: 'Carboxylic acid (from 1°) or Ketone (from 2°)', selectivity: 'Full oxidation' };
            }
        }
        
        return { structure: 'Oxidized product', selectivity: 'Depends on oxidant' };
    }

    getOxidationMechanism(oxidant) {
        const mechanisms = {
            'PCC': 'Chromium-based oxidation via chromate ester',
            'DMP': 'Dess-Martin periodinane mechanism',
            'KMnO4': 'Permanganate oxidation (strong)',
            'Swern': 'DMSO-based oxidation with oxalyl chloride'
        };
        return mechanisms[oxidant] || 'General oxidation mechanism';
    }

    assessOxidationSelectivity(substrate, oxidant) {
        if (oxidant === 'PCC' || oxidant === 'DMP') {
            return 'Selective for aldehydes; does not over-oxidize';
        }
        return 'May oxidize multiple sites';
    }

    identifyReducibleFunctionalGroup(substrate) {
        const groups = this.identifyFunctionalGroups(substrate);
        const reducible = ['aldehyde', 'ketone', 'carboxylic_acid', 'ester', 'alkene', 'alkyne'];
        return groups.find(g => reducible.includes(g.type)) || groups[0];
    }

    determineReductionChange(functionalGroup, reductant) {
        const changes = {
            'aldehyde': 'aldehyde → primary alcohol',
            'ketone': 'ketone → secondary alcohol',
            'carboxylic_acid': 'carboxylic acid → aldehyde (or primary alcohol)',
            'ester': 'ester → 2 alcohols',
            'alkene': 'alkene → alkane',
                             'alkyne': 'alkyne → alkene or alkane',
            'nitrile': 'nitrile → amine'
        };
        return changes[functionalGroup.type] || 'reduction';
    }

    predictReductionProduct(substrate, reductant) {
        const fg = this.identifyReducibleFunctionalGroup(substrate);
        
        if (reductant === 'LiAlH₄' || reductant === 'LiAlH4') {
            return { 
                structure: 'Fully reduced to alcohol',
                selectivity: 'Strong reductant; reduces carbonyls, esters, acids'
            };
        } else if (reductant === 'NaBH₄' || reductant === 'NaBH4') {
            return { 
                structure: 'Aldehyde/ketone → alcohol',
                selectivity: 'Selective for aldehydes and ketones; does not reduce esters/acids'
            };
        } else if (reductant.includes('H2')) {
            return { 
                structure: 'Alkene/alkyne → alkane',
                selectivity: 'Catalytic hydrogenation of C=C and C≡C'
            };
        }
        
        return { structure: 'Reduced product', selectivity: 'Depends on reductant' };
    }

    getReductionMechanism(reductant) {
        const mechanisms = {
            'LiAlH₄': 'Hydride transfer from AlH₄⁻ to carbonyl carbon',
            'NaBH₄': 'Mild hydride transfer; selective for aldehydes/ketones',
            'H₂/Pt': 'Catalytic hydrogenation; syn addition of H₂',
            'H₂/Pd': 'Catalytic hydrogenation; can be poisoned for selectivity',
            'DIBAL-H': 'Reduces esters to aldehydes at low temperature'
        };
        return mechanisms[reductant] || 'General reduction mechanism';
    }

    assessReductionSelectivity(substrate, reductant) {
        if (reductant === 'NaBH₄' || reductant === 'NaBH4') {
            return 'Selective for aldehydes and ketones; leaves esters, acids, amides intact';
        }
        if (reductant === 'LiAlH₄' || reductant === 'LiAlH4') {
            return 'Non-selective; reduces most carbonyl compounds';
        }
        if (reductant.includes('Pd/C') && substrate.includes('alkene')) {
            return 'Selective for least hindered double bond first';
        }
        return 'Variable selectivity';
    }

    identifyGroupsNeedingProtection(substrate, reaction) {
        const allGroups = this.identifyFunctionalGroups(substrate);
        const reactive = this.identifyReactiveGroups(reaction);
        
        return allGroups.filter(group => 
            reactive.includes(group.type) && 
            !this.isTargetSite(group, reaction)
        );
    }

    identifyReactiveGroups(reaction) {
        const reactivityMap = {
            'Grignard': ['alcohol', 'carboxylic_acid', 'amine', 'aldehyde', 'ketone'],
            'LiAlH₄': ['ester', 'carboxylic_acid', 'aldehyde', 'ketone'],
            'oxidation': ['alcohol', 'alkene'],
            'base': ['carboxylic_acid', 'phenol', 'amine']
        };
        return reactivityMap[reaction] || [];
    }

    isTargetSite(group, reaction) {
        // Simplified - would need more context
        return false; // Assume all identified groups need protection
    }

    selectProtectingGroup(functionalGroup, reaction) {
        const protectionStrategies = {
            'alcohol': {
                'Grignard': 'TBS (tert-butyldimethylsilyl) or THP',
                'oxidation': 'Benzyl or MOM',
                'base': 'Silyl ether'
            },
            'aldehyde': {
                'Grignard': 'Acetal (with ethylene glycol)',
                'LiAlH₄': 'Acetal',
                'base': 'Acetal'
            },
            'ketone': {
                'Grignard': 'Acetal or ketal',
                'LiAlH₄': 'Acetal',
                'base': 'Ketal'
            },
            'amine': {
                'Grignard': 'Boc or Cbz',
                'oxidation': 'Boc or Fmoc',
                'acylation': 'Boc'
            },
            'carboxylic_acid': {
                'Grignard': 'Ester (methyl or ethyl)',
                'LiAlH₄': 'Avoid LiAlH₄ or protect as ester',
                'base': 'Already ionized, may not need protection'
            }
        };
        
        const strategy = protectionStrategies[functionalGroup.type];
        return strategy ? strategy[reaction] : 'Appropriate protecting group';
    }

    getProtectionConditions(functionalGroup) {
        const conditions = {
            'alcohol_TBS': 'TBSCl, imidazole, DMF',
            'alcohol_THP': 'DHP, PPTS, CH₂Cl₂',
            'alcohol_benzyl': 'BnBr, NaH, DMF',
            'aldehyde_acetal': 'HOCH₂CH₂OH, TsOH (cat.), benzene (Dean-Stark)',
            'ketone_acetal': 'HOCH₂CH₂OH, TsOH (cat.), benzene (Dean-Stark)',
            'amine_Boc': 'Boc₂O, Et₃N, CH₂Cl₂',
            'amine_Cbz': 'CbzCl, NaHCO₃, H₂O/THF'
        };
        return conditions[`${functionalGroup.type}_${this.getProtectingGroupType(functionalGroup)}`] || 
               'Standard protection conditions';
    }

    getProtectingGroupType(functionalGroup) {
        // Simplified - would select based on synthetic plan
        if (functionalGroup.type === 'alcohol') return 'TBS';
        if (functionalGroup.type === 'aldehyde' || functionalGroup.type === 'ketone') return 'acetal';
        if (functionalGroup.type === 'amine') return 'Boc';
        return 'standard';
    }

    getDeprotectionConditions(functionalGroup) {
        const conditions = {
            'alcohol_TBS': 'TBAF in THF or HF·pyridine',
            'alcohol_THP': 'Aqueous acid (TsOH or HCl)',
            'alcohol_benzyl': 'H₂, Pd/C (hydrogenolysis)',
            'aldehyde_acetal': 'Aqueous acid (H₃O⁺)',
            'ketone_acetal': 'Aqueous acid (H₃O⁺)',
            'amine_Boc': 'TFA (trifluoroacetic acid) or HCl',
            'amine_Cbz': 'H₂, Pd/C or HBr/AcOH'
        };
        return conditions[`${functionalGroup.type}_${this.getProtectingGroupType(functionalGroup)}`] || 
               'Standard deprotection conditions';
    }

    designProtectionStrategy(substrate, protectingGroups, reaction) {
        return {
            step1: 'Install protecting groups',
            protectionOrder: this.determineProtectionOrder(protectingGroups),
            step2: 'Perform main reaction',
            step3: 'Remove protecting groups',
            deprotectionOrder: this.determineDeprotectionOrder(protectingGroups),
            orthogonality: 'Use orthogonal protecting groups if multiple protections needed'
        };
    }

    determineProtectionOrder(protectingGroups) {
        // Most sensitive groups protected first
        return protectingGroups.sort((a, b) => {
            const sensitivity = { 'aldehyde': 3, 'alcohol': 2, 'amine': 1 };
            return (sensitivity[b.functionalGroup.type] || 0) - (sensitivity[a.functionalGroup.type] || 0);
        });
    }

    determineDeprotectionOrder(protectingGroups) {
        // Usually reverse of protection, but consider orthogonality
        return protectingGroups.reverse();
    }

    generateProtectionSequence(substrate, strategy, reaction) {
        return [
            {
                step: 1,
                action: 'Protect sensitive groups',
                details: strategy.protectionOrder,
                reagents: strategy.protectionOrder.map(pg => pg.installationConditions)
            },
            {
                step: 2,
                action: 'Perform main transformation',
                details: reaction,
                reagents: 'Reagents for main reaction'
            },
            {
                step: 3,
                action: 'Deprotect',
                details: strategy.deprotectionOrder,
                reagents: strategy.deprotectionOrder.map(pg => pg.removalConditions)
            }
        ];
    }

    drawConjugateBase(compound) {
        return {
            structure: 'Conjugate base (after H⁺ removal)',
            charge: -1,
            resonanceStructures: this.getResonanceStructures(compound, 'base')
        };
    }

    analyzeConjugateBaseStability(compound) {
        return {
            resonance: this.assessResonanceStabilization(compound),
            inductive: this.assessInductiveEffects(compound),
            hybridization: this.assessHybridizationEffect(compound),
            solvation: this.assessSolvationStabilization(compound)
        };
    }

    assessResonanceStabilization(compound) {
        // Check for resonance structures that stabilize negative charge
        return {
            present: true,
            structures: 2,
            effect: 'Stabilizes conjugate base significantly'
        };
    }

    assessInductiveEffects(compound) {
        // Electron-withdrawing groups stabilize negative charge
        return {
            ewg: ['Cl', 'NO₂', 'CN'], // Example
            effect: 'EWG stabilize anion inductively'
        };
    }

    assessHybridizationEffect(compound) {
        // sp > sp² > sp³ for stabilizing negative charge
        return {
            hybridization: 'sp²',
            effect: 'More s character = more stable anion'
        };
    }

    assessSolvationStabilization(compound) {
        return {
            polarProtic: 'Stabilizes small, localized charges',
            polarAprotic: 'Better for delocalized charges'
        };
    }

    estimatePKa(compound) {
        // Rough pKa estimation based on functional group
        const pKaValues = {
            'carboxylic_acid': 4.5,
            'phenol': 10,
            'alcohol': 16,
            'water': 15.7,
            'alkyne_terminal': 25,
            'amine': 35,
            'alkane': 50
        };
        
        const fg = this.identifyFunctionalGroups(compound)[0];
        return pKaValues[fg?.type] || 'Unknown';
    }

    explainAcidity(compound) {
        const conjugateBase = this.drawConjugateBase(compound);
        const stability = this.analyzeConjugateBaseStability(compound);
        
        return {
            principle: 'Acidity correlates with conjugate base stability',
            factors: [
                stability.resonance.present ? 'Resonance stabilization of conjugate base' : null,
                stability.inductive.ewg.length > 0 ? 'Inductive stabilization from EWG' : null,
                'Hybridization effect',
                'Solvation factors'
            ].filter(f => f !== null),
            conclusion: 'More stable conjugate base = stronger acid'
        };
    }

    rankByAcidity(acidityAnalysis) {
        return acidityAnalysis.sort((a, b) => a.pKaEstimate - b.pKaEstimate);
    }

    identifyKeyAcidityFactors(acidityAnalysis) {
        return [
            'Resonance stabilization of conjugate base',
            'Inductive effects (electron-withdrawing groups)',
            'Hybridization (sp > sp² > sp³)',
            'Electronegativity of atom bearing H',
            'Charge delocalization'
        ];
    }

    drawConjugateAcid(compound) {
        return {
            structure: 'Conjugate acid (after H⁺ addition)',
            charge: +1,
            site: 'Lone pair site'
        };
    }

    analyzeConjugateAcidStability(compound) {
        return {
            resonance: this.assessConjugateAcidResonance(compound),
            inductive: this.assessConjugateAcidInductive(compound),
            hybridization: this.assessConjugateAcidHybridization(compound)
        };
    }

    assessConjugateAcidResonance(compound) {
        return {
            present: false,
            effect: 'Less resonance = more basic (less stable conjugate acid)'
        };
    }

    assessConjugateAcidInductive(compound) {
        // Electron-donating groups destabilize positive charge (increase basicity)
        return {
            edg: ['CH₃', 'C₂H₅'],
            effect: 'EDG destabilize conjugate acid, increase basicity'
        };
    }

    assessConjugateAcidHybridization(compound) {
        return {
            hybridization: 'sp³',
            effect: 'Less s character = more basic'
        };
    }

    estimatePKb(compound) {
        const pKa = this.estimatePKa(compound);
        if (typeof pKa === 'number') {
            return 14 - pKa; // pKb = 14 - pKa for conjugate acid
        }
        return 'Unknown';
    }

    explainBasicity(compound) {
        const conjugateAcid = this.drawConjugateAcid(compound);
        const stability = this.analyzeConjugateAcidStability(compound);
        
        return {
            principle: 'Basicity correlates inversely with conjugate acid stability',
            factors: [
                'Availability of lone pair',
                stability.inductive.edg.length > 0 ? 'EDG increase basicity' : null,
                'Hybridization effect (sp³ > sp² > sp)',
                'Steric effects around basic site'
            ].filter(f => f !== null),
            conclusion: 'Less stable conjugate acid = stronger base'
        };
    }

    rankByBasicity(basicityAnalysis) {
        return basicityAnalysis.sort((a, b) => a.pKbEstimate - b.pKbEstimate);
    }

    identifyKeyBasicityFactors(basicityAnalysis) {
        return [
            'Availability of lone pair electrons',
            'Inductive effects (electron-donating groups increase basicity)',
            'Resonance (delocalization decreases basicity)',
            'Hybridization (sp³ > sp² > sp)',
            'Steric hindrance around basic site'
        ];
    }

    getResonanceStructures(compound, type) {
        // Simplified resonance structure generation
        return [
            { structure: 'Resonance form 1', contribution: '50%' },
            { structure: 'Resonance form 2', contribution: '50%' }
        ];
    }

    findAromaticRings(structure) {
        // Identify benzene rings and other aromatic systems
        return [
            { type: 'benzene', count: 1, positions: [1] }
        ];
    }

    // ENHANCED STEP GENERATION FOR ORGANIC CHEMISTRY

    generateOrganicChemistrySteps(problem, solution) {
        let baseSteps = this.generateBaseOrganicChemistrySteps(problem, solution);

        // Apply enhancements based on options
        if (this.explanationLevel !== 'basic') {
            baseSteps = baseSteps.map((step, index, array) =>
                this.enhanceStepExplanation(step, problem, solution, index, array.length)
            );
        }

        if (this.includeConceptualConnections) {
            baseSteps = this.addStepBridges(baseSteps, problem);
        }

        if (this.includeErrorPrevention) {
            baseSteps = baseSteps.map(step =>
                this.addErrorPrevention(step, problem.type)
            );
        }

        if (this.explanationLevel === 'scaffolded') {
            baseSteps = this.addScaffolding(baseSteps, problem);
        }

        if (this.includeMechanisms && this.isMechanismProblem(problem.type)) {
            baseSteps = this.enhanceWithMechanisticDetails(baseSteps, solution);
        }

        return baseSteps;
    }

    generateBaseOrganicChemistrySteps(problem, solution) {
        const { type } = problem;

        switch (type) {
            case 'iupac_naming':
                return this.generateNamingSteps(problem, solution);
            case 'rs_configuration':
                return this.generateRSSteps(problem, solution);
            case 'mechanism_sn2':
                return this.generateSN2Steps(problem, solution);
            case 'mechanism_sn1':
                return this.generateSN1Steps(problem, solution);
            case 'mechanism_e2':
                return this.generateE2Steps(problem, solution);
            case 'mechanism_addition':
                return this.generateAdditionSteps(problem, solution);
            case 'mechanism_aromatic':
                return this.generateAromaticSteps(problem, solution);
            case 'nmr_interpretation':
                return this.generateNMRSteps(problem, solution);
            case 'synthesis_multi_step':
                return this.generateSynthesisSteps(problem, solution);
            default:
                return this.generateGenericOrganicSteps(problem, solution);
        }
    }

    generateNamingSteps(problem, solution) {
        if (!solution.namingSteps) return [];
        return solution.namingSteps.map((step, index) => ({
            stepNumber: step.step,
            step: step.action,
            description: step.result,
            reasoning: step.reasoning,
            visualHint: this.getVisualHintForNaming(step.action),
            category: 'nomenclature'
        }));
    }

    getVisualHintForNaming(action) {
        const hints = {
            'Identify longest continuous carbon chain': 'Trace all possible paths, choose longest',
            'Number the chain': 'Try both directions, choose lower numbers for substituents',
            'Identify and name substituents': 'All branches off main chain',
            'Identify functional groups': 'Look for characteristic atoms: O, N, halogens',
            'Assemble IUPAC name': 'Format: position-substituent(alphabetical)-parent-suffix'
        };
        return hints[action] || 'Follow IUPAC rules systematically';
    }

    generateRSSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify the chiral center',
            description: `Carbon atom bonded to 4 different groups`,
            chiralCenter: solution.chiralCenter,
            reasoning: 'Chiral centers are sp³ carbons with 4 different substituents',
            visualHint: 'Look for carbon with no duplicate groups'
        });

        steps.push({
            stepNumber: 2,
            step: 'Assign priorities using CIP rules',
            description: 'Rank substituents by atomic number',
            priorities: solution.priorities,
            rule: 'Higher atomic number = higher priority',
            reasoning: 'Cahn-Ingold-Prelog system ranks by atomic number',
            visualHint: 'If tied, go to next atom out from chiral center'
        });

        steps.push({
            stepNumber: 3,
            step: 'Orient lowest priority away',
            description: 'View molecule with group #4 pointing away from you',
            orientation: 'Lowest priority (usually H) pointing back',
            reasoning: 'Standard viewing orientation for R/S assignment',
            visualHint: 'Imagine rotating molecule so #4 points into page'
        });

        steps.push({
            stepNumber: 4,
            step: 'Trace path 1→2→3',
            description: `Trace from highest to third-highest priority`,
            direction: solution.configuration === 'R' ? 'clockwise' : 'counterclockwise',
            reasoning: 'Direction of this path determines R or S',
            finalAnswer: true
        });

        steps.push({
            stepNumber: 5,
            step: 'Assign configuration',
            description: `Configuration is (${solution.configuration})`,
            configuration: solution.configuration,
            rule: 'Clockwise = R (rectus), Counterclockwise = S (sinister)',
            finalAnswer: true
        });

        return steps;
    }

    generateSN2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify substrate and nucleophile',
            description: 'Substrate = alkyl halide (RX), Nucleophile = negatively charged or lone pair species',
            substrate: solution.substrate,
            nucleophile: solution.nucleophile,
            reasoning: 'SN2 requires good nucleophile and substrate with accessible carbon'
        });

        steps.push({
            stepNumber: 2,
            step: 'Check substrate structure',
            description: 'SN2 favored by primary (1°) substrates',
            substrateType: this.classifySubstrate(solution.substrate),
            reasoning: 'Less steric hindrance allows backside attack',
            warning: 'SN2 very slow or impossible with tertiary substrates'
        });

        steps.push({
            stepNumber: 3,
            step: 'Draw backside attack',
            description: 'Nucleophile attacks from side opposite to leaving group',
            mechanism: solution.mechanism[0],
            electronMovement: 'Lone pair → C, C-X electrons → X',
            geometry: 'Linear approach: Nu⁻----C-X at 180°',
            visualHint: 'Think of umbrella inverting in wind'
        });

        steps.push({
            stepNumber: 4,
            step: 'Show transition state',
            description: 'Pentacoordinate carbon with partial bonds',
            mechanism: solution.mechanism[1],
            structure: '[Nu---C---X]‡',
            reasoning: 'Highest energy point with bonds partially formed/broken',
            geometry: 'Trigonal bipyramidal'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw product with inversion',
            description: 'Product has inverted stereochemistry (Walden inversion)',
            mechanism: solution.mechanism[2],
            stereochemistry: solution.stereochemistry,
            reasoning: 'Backside attack causes complete inversion at stereocenter',
            finalAnswer: true
        });

        return steps;
    }

    generateSN1Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Verify substrate is capable of forming stable carbocation',
            description: 'SN1 requires tertiary (3°) or secondary (2°) substrate',
            substrate: solution.substrate,
            reasoning: 'Reaction proceeds through carbocation; must be stable',
            stability: solution.carbocationStability
        });

        steps.push({
            stepNumber: 2,
            step: 'Step 1: Ionization (slow, rate-determining)',
            description: 'C-X bond breaks heterolytically to form carbocation',
            mechanism: solution.mechanism[0],
            electronMovement: 'Both electrons from C-X bond go to X',
            rateStep: true,
            reasoning: 'Slowest step determines overall reaction rate'
        });

        steps.push({
            stepNumber: 3,
            step: 'Show carbocation intermediate',
            description: 'Planar sp² carbocation with empty p orbital',
            mechanism: solution.mechanism[1],
            geometry: 'Trigonal planar (120° bond angles)',
            stability: solution.carbocationStability,
            reasoning: 'Intermediate can be attacked from either face'
        });

        steps.push({
            stepNumber: 4,
            step: 'Step 2: Nucleophilic attack (fast)',
            description: 'Nucleophile attacks planar carbocation from both faces',
            mechanism: solution.mechanism[2],
            electronMovement: 'Lone pair from Nu⁻ to empty p orbital',
            reasoning: 'Planar intermediate allows attack from top or bottom'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw products (racemic mixture)',
            description: 'Both enantiomers formed in approximately equal amounts',
            mechanism: solution.mechanism[3],
            stereochemistry: solution.stereochemistry,
            ratio: '~50:50 (some retention due to ion pairing)',
            finalAnswer: true
        });

        return steps;
    }

    generateE2Steps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Check for anti-periplanar geometry',
            description: 'H and leaving group must be 180° apart',
            geometry: solution.zaitsevProduct,
            reasoning: 'Anti arrangement allows proper orbital overlap',
            requirement: 'Draw Newman projection to verify'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify β-hydrogens',
            description: 'Hydrogens on carbon adjacent to C-X',
            betaHydrogens: 'Multiple β-H may be present',
            reasoning: 'E2 removes β-H; different β-H give different products'
        });

        steps.push({
            stepNumber: 3,
            step: 'Draw concerted mechanism',
            description: 'All bond changes occur simultaneously',
            mechanism: solution.mechanism[0],
            electronMovement: ['Base → H', 'C-H → C=C', 'C-X → X'],
            concerted: true,
            reasoning: 'One-step mechanism through single transition state'
        });

        steps.push({
            stepNumber: 4,
            step: 'Apply Zaitsev\'s rule',
            description: 'Most substituted alkene is major product',
            zaitsevProduct: solution.zaitsevProduct,
            hofmannProduct: solution.hofmannProduct,
            reasoning: 'More substituted alkene is more thermodynamically stable',
            exception: 'Bulky bases favor Hofmann (less substituted) product'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw alkene product',
            description: 'Double bond forms between α and β carbons',
            product: solution.majorProduct,
            stereochemistry: 'E/Z if applicable',
            finalAnswer: true
        });

        return steps;
    }

    generateAdditionSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Identify alkene and electrophile',
            description: 'Alkene π bond = nucleophile, Electrophile = H⁺ or Br⁺',
            alkene: solution.alkene,
            electrophile: solution.electrophile,
            additionType: solution.additionType
        });

        steps.push({
            stepNumber: 2,
            step: 'Show π bond attacking electrophile',
            description: 'Electrons from π bond form new σ bond to electrophile',
            mechanism: solution.mechanism[0],
            electronMovement: 'π electrons → E⁺',
            reasoning: 'Alkene acts as nucleophile (electron-rich π bond)'
        });

        steps.push({
            stepNumber: 3,
            step: 'Form more stable carbocation (Markovnikov)',
            description: 'Positive charge on more substituted carbon',
            mechanism: solution.mechanism[1],
            carbocation: solution.markovnikovProduct,
            reasoning: '3° > 2° > 1° carbocation stability',
            rule: 'Markovnikov: H adds to less substituted C'
        });

        steps.push({
            stepNumber: 4,
            step: 'Nucleophile attacks carbocation',
            description: 'Nucleophile (Br⁻, H₂O, etc.) attacks positive carbon',
            mechanism: solution.mechanism[2],
            electronMovement: 'Lone pair → C⁺',
            reasoning: 'Carbocation is electrophilic, attracts nucleophile'
        });

        steps.push({
            stepNumber: 5,
            step: 'Draw final addition product',
            description: 'Both groups added across double bond',
            product: solution.product,
            regiochemistry: solution.regiochemistry,
            stereochemistry: solution.stereochemistry,
            finalAnswer: true
        });

        return steps;
    }

    generateAromaticSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Generate electrophile',
            description: 'Use Lewis acid catalyst to generate strong electrophile',
            electrophileGeneration: solution.mechanism[0],
            catalyst: solution.catalyst,
            reasoning: 'Benzene π system not reactive enough for weak electrophiles'
        });

        steps.push({
            stepNumber: 2,
            step: 'Electrophile attacks aromatic ring',
            description: 'π electrons attack E⁺, breaking aromaticity temporarily',
            mechanism: solution.mechanism[1],
            electronMovement: 'π electrons → E⁺',
            aromaticityLost: true,
            reasoning: 'High cost of losing aromaticity makes this slow step'
        });

        steps.push({
            stepNumber: 3,
            step: 'Form arenium ion (sigma complex)',
            description: 'Cyclohexadienyl cation with electrophile attached',
            mechanism: solution.mechanism[2],
            resonance: solution.mechanism[2].resonance,
            geometry: 'sp³ carbon at site of attack',
            reasoning: 'Positive charge delocalized over 3 carbons (resonance)'
        });

        steps.push({
            stepNumber: 4,
            step: 'Deprotonation restores aromaticity',
            description: 'Base removes H⁺, reforming aromatic system',
            mechanism: solution.mechanism[3],
            electronMovement: 'C-H electrons → aromatic π system',
            aromaticityRestored: true,
            reasoning: 'Driving force = restoration of stable aromatic system'
        });

        steps.push({
            stepNumber: 5,
            step: 'Predict orientation (if substituents present)',
            description: 'Existing substituents direct incoming electrophile',
            directing: solution.directingEffects,
            product: solution.product,
            regiochemistry: solution.regiochemistry,
            reasoning: 'Ortho/para directors: EDG, Meta directors: EWG',
            finalAnswer: true
        });

        return steps;
    }

    generateNMRSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Count number of signals',
            description: 'Number of signals = number of unique H environments',
            numberOfSignals: solution.numberOfEnvironments,
            reasoning: 'Equivalent H atoms give one signal',
            symmetry: 'Look for molecular symmetry'
        });

        steps.push({
            stepNumber: 2,
            step: 'Analyze chemical shifts',
            description: 'Chemical shift (δ ppm) indicates electronic environment',
            signalAnalysis: solution.signalAnalysis,
            ranges: {
                '9-10 ppm': 'Aldehyde H',
                '7-8 ppm': 'Aromatic H',
                '4-5 ppm': 'H on C-O',
                '2-3 ppm': 'H α to carbonyl',
                '0-2 ppm': 'Alkyl H'
            },
            reasoning: 'Electron-withdrawing groups cause downfield shift'
        });

        steps.push({
            stepNumber: 3,
            step: 'Examine integration ratios',
            description: 'Integration = relative number of H atoms',
            integrations: solution.signalAnalysis.map(s => s.integration),
            reasoning: 'Peak area proportional to number of H',
            tip: 'Simplify ratios to smallest whole numbers'
        });

        steps.push({
            stepNumber: 4,
            step: 'Interpret splitting patterns',
            description: 'Splitting = n+1 rule (n = adjacent H atoms)',
            splittingPatterns: solution.signalAnalysis.map(s => s.splitting),
            rule: 'n+1: singlet (0), doublet (1), triplet (2), quartet (3)',
            reasoning: 'Spin-spin coupling with adjacent H atoms',
            exception: 'OH and NH often don\'t couple (exchange)'
        });

        steps.push({
            stepNumber: 5,
            step: 'Propose structure',
            description: 'Combine all NMR data to deduce structure',
            proposedStructure: solution.proposedStructure,
            verification: solution.verification,
            reasoning: 'Structure must be consistent with ALL spectroscopic data',
            finalAnswer: true
        });

        return steps;
    }

    generateSynthesisSteps(problem, solution) {
        const steps = [];

        steps.push({
            stepNumber: 1,
            step: 'Perform retrosynthetic analysis',
            description: 'Work backward from target to starting material',
            retrosynthesis: solution.retrosynthesis,
            disconnections: solution.retrosynthesis.steps,
            reasoning: 'Break target into simpler precursors strategically',
            arrow: '⇒ (retrosynthetic arrow)'
        });

        steps.push({
            stepNumber: 2,
            step: 'Identify key disconnections',
            description: 'Choose strategic bonds to break',
            keyTransformations: solution.keyTransformations,
            reasoning: 'Good disconnections create stable, accessible intermediates',
            criteria: 'Consider: availability, stability, selectivity'
        });

        steps.push({
            stepNumber: 3,
            step: 'Find synthetic equivalents',
            description: 'Match synthons to real reagents',
            synthons: solution.retrosynthesis.synthons || [],
            equivalents: solution.retrosynthesis.syntheticEquivalents || [],
            reasoning: 'Synthons are idealized; need actual reagents for synthesis'
        });

        steps.push({
            stepNumber: 4,
            step: 'Write forward synthesis',
            description: 'Reverse retrosynthetic steps to get forward synthesis',
            forwardSynthesis: solution.forwardSynthesis,
            numberOfSteps: solution.numberOfSteps,
            reasoning: 'Forward synthesis shows actual reagents and conditions'
        });

        solution.forwardSynthesis.forEach((synthStep, index) => {
            steps.push({
                stepNumber: 5 + index,
                step: `Synthesis Step ${index + 1}`,
                description: `Transform: ${synthStep.startingMaterials} → ${synthStep.product}`,
                reagents: synthStep.reagents,
                conditions: synthStep.conditions,
                mechanism: 'See mechanism section for details',
                reasoning: this.explainSynthesisStep(synthStep)
            });
        });

        steps.push({
            stepNumber: 5 + solution.forwardSynthesis.length,
            step: 'Evaluate synthesis',
            description: 'Assess overall route quality',
            evaluation: {
                steps: solution.numberOfSteps,
                overallYield: this.estimateOverallYield(solution.forwardSynthesis),
                advantages: 'List strengths of this route',
                disadvantages: 'List weaknesses'
            },
            alternatives: solution.alternativeRoutes,
            finalAnswer: true
        });

        return steps;
    }

    explainSynthesisStep(synthStep) {
        return `Reagents: ${synthStep.reagents}. Conditions: ${synthStep.conditions}. This transformation is necessary to install required functional groups or carbon skeleton.`;
    }

    estimateOverallYield(forwardSynthesis) {
        // Assume 80% yield per step as estimate
        const yieldPerStep = 0.80;
        const overallYield = Math.pow(yieldPerStep, forwardSynthesis.length) * 100;
        return `~${overallYield.toFixed(1)}% (assuming 80% per step)`;
    }

    generateGenericOrganicSteps(problem, solution) {
        return [{
            stepNumber: 1,
            step: 'Solve organic chemistry problem',
            description: 'Apply appropriate organic chemistry principles',
            solution: solution,
            reasoning: 'Use relevant mechanisms, rules, and concepts'
        }];
    }

    isMechanismProblem(type) {
        return type.includes('mechanism') || type.includes('predict_product');
    }

    enhanceWithMechanisticDetails(steps, solution) {
        return steps.map(step => {
            if (step.mechanism) {
                return {
                    ...step,
                    mechanismDetails: {
                        electronFlow: this.describeElectronFlow(step.mechanism),
                        orbitalInteractions: this.describeOrbitalInteractions(step.mechanism),
                        energetics: this.describeEnergetics(step.mechanism),
                        curvedArrows: this.generateCurvedArrowNotation(step.mechanism)
                    }
                };
            }
            return step;
        });
    }

    describeElectronFlow(mechanism) {
        return {
            source: 'Electron-rich species (nucleophile, π bond, lone pair)',
            destination: 'Electron-poor species (electrophile, carbocation)',
            arrowNotation: 'Curved arrow from electron source to destination'
        };
    }

    describeOrbitalInteractions(mechanism) {
        return {
            HOMO: 'Highest Occupied Molecular Orbital (nucleophile)',
            LUMO: 'Lowest Unoccupied Molecular Orbital (electrophile)',
            interaction: 'HOMO-LUMO interaction drives reaction'
        };
    }

    describeEnergetics(mechanism) {
        return {
            activation: 'Energy barrier to reach transition state',
            thermodynamics: 'Overall energy change (ΔG)',
            stability: 'Relative stability of reactants, intermediates, products'
        };
    }

    generateCurvedArrowNotation(mechanism) {
        return {
            fullArrow: 'Shows movement of electron pair (2 electrons)',
            halfArrow: 'Shows movement of single electron (radical)',
            convention: 'Arrow starts at electron source, points to destination'
        };
    }

    // METHODS FROM STOICHIOMETRY WORKBOOK ADAPTED FOR ORGANIC CHEMISTRY

    enhanceStepExplanation(step, problem, solution, stepIndex, totalSteps) {
        const enhanced = {
            ...step,
            stepNumber: stepIndex + 1,
            totalSteps: totalSteps,

            explanations: {
                conceptual: this.getConceptualExplanation(step, problem),
                procedural: this.getProceduralExplanation(step),
                visual: this.getVisualExplanation(step, problem),
                mechanistic: this.getMechanisticExplanation(step)
            },

            adaptiveExplanation: this.getAdaptiveExplanation(step, this.explanationLevel),

            learningSupport: {
                prerequisiteSkills: this.identifyPrerequisites(step, problem.type),
                keyVocabulary: this.identifyKeyVocabulary(step),
                connectionsToPrevious: stepIndex > 0 ? this.connectToPreviousStep(step, stepIndex) : null
            }
        };

        return enhanced;
    }

    getConceptualExplanation(step, problem) {
        const conceptualExplanations = {
            'Identify the chiral center': 'Chirality is the property of non-superimposability on its mirror image. It\'s fundamental to understanding 3D molecular structure.',
            'Assign priorities using CIP rules': 'The CIP system provides unambiguous stereochemical descriptors that communicate 3D structure precisely.',
            'Draw backside attack': 'Backside attack is the defining feature of SN2 - it explains both the mechanism and stereochemical outcome.',
            'Form more stable carbocation': 'Carbocation stability drives regiochemistry - more substituted carbocations are more stable due to hyperconjugation.',
            'Deprotonation restores aromaticity': 'Aromaticity is so stable that its restoration is the driving force for the second step of EAS.',
            'Analyze chemical shifts': 'Chemical shift reveals the electronic environment around each hydrogen - it\'s like a molecular fingerprint.'
        };

        return conceptualExplanations[step.step] || 'This step applies fundamental organic chemistry principles to solve the problem.';
    }

    getProceduralExplanation(step) {
        if (step.mechanism) {
            return `1. Identify electron-rich and electron-poor sites
2. Draw curved arrow(s) showing electron movement
3. Show bond breaking/forming
4. Verify all atoms have correct formal charges and octets`;
        }
        return 'Follow the systematic procedure for this operation.';
    }

    getVisualExplanation(step, problem) {
        const visualExplanations = {
            'nomenclature': 'Draw the structure and trace the longest chain with your finger. Number both directions and choose the one giving lower numbers.',
            'stereochemistry': 'Build a molecular model or use your hands to visualize 3D orientation. Right hand = R, left hand = S (mnemonic).',
            'mechanism': 'Draw all electrons (lone pairs and π electrons). Curved arrows show where electrons flow, like water flowing downhill toward positive charge.',
            'spectroscopy': 'Visualize the molecule responding to energy: NMR = nuclei flipping, IR = bonds vibrating, MS = molecule fragmenting.'
        };

        const category = this.getOrganicCategoryFromType(problem.type);
        return visualExplanations[category] || 'Visualize the molecular structure and electron distribution.';
    }

    getMechanisticExplanation(step) {
        if (step.electronMovement) {
            return {
                electronFlow: step.electronMovement,
                bondChanges: 'Track each bond formed and broken',
                formalCharges: 'Verify charges at each step',
                arrowPushing: 'Curved arrows = electron movement (not atom movement)'
            };
        }
        return 'Apply mechanistic thinking: where are the electrons? Where do they go?';
    }

    getAdaptiveExplanation(step, explanationLevel) {
        const levelConfig = typeof explanationLevel === 'string' ? 
            this.difficultyLevels[explanationLevel] : 
            this.difficultyLevels.intermediate;

        if (!levelConfig) {
            return {
                adaptedDescription: step.description,
                adaptedReasoning: step.reasoning,
                complexityLevel: 'intermediate'
            };
        }

        const adaptedDescription = this.adaptLanguageLevel(
            step.description || '', 
            { vocabulary: levelConfig.vocabulary }
        );

        const adaptedReasoning = this.adaptLanguageLevel(
            step.reasoning || '', 
            { vocabulary: levelConfig.vocabulary }
        );

        let additionalExplanation = '';
        let scaffoldingQuestions = [];

        switch (explanationLevel) {
            case 'basic':
                additionalExplanation = this.getBasicOrganicExplanation(step);
                break;
            case 'intermediate':
                additionalExplanation = this.getIntermediateOrganicExplanation(step);
                break;
            case 'detailed':
                additionalExplanation = this.getDetailedOrganicExplanation(step);
                break;
            case 'scaffolded':
                scaffoldingQuestions = this.getOrganicScaffoldingQuestions(step);
                additionalExplanation = this.getScaffoldedOrganicExplanation(step);
                break;
        }

        return {
            adaptedDescription: adaptedDescription,
            adaptedReasoning: adaptedReasoning,
            additionalExplanation: additionalExplanation,
            scaffoldingQuestions: scaffoldingQuestions,
            complexityLevel: explanationLevel,
            vocabulary: levelConfig.vocabulary,
            examples: this.getOrganicExamplesForLevel(step, explanationLevel)
        };
    }

    getBasicOrganicExplanation(step) {
        const basicExplanations = {
            'Identify the chiral center': 'Find a carbon with 4 different groups attached.',
            'Assign priorities': 'Higher atomic number = higher priority. H is always lowest.',
            'Draw backside attack': 'Nucleophile approaches from opposite side of leaving group.',
            'Form carbocation': 'Carbon loses the leaving group and gets a positive charge.',
            'Count signals': 'Different types of H atoms give different peaks.',
            'Predict orientation': 'Groups on benzene ring tell where new group will attach.'
        };
        return basicExplanations[step.step] || 'Follow the procedure step by step.';
    }

    getIntermediateOrganicExplanation(step) {
        const intermediateExplanations = {
            'Identify the chiral center': 'A chiral center is an sp³ carbon with four different substituents. This creates non-superimposable mirror images (enantiomers).',
            'Assign priorities': 'Use Cahn-Ingold-Prelog rules: compare atomic numbers of directly attached atoms. If tied, move to the next atoms out.',
            'Draw backside attack': 'In SN2, the nucleophile attacks from 180° opposite the leaving group. This causes inversion of configuration (Walden inversion).',
            'Form carbocation': 'The C-X bond breaks heterolytically (both electrons go to X), leaving a planar sp² carbocation intermediate with an empty p orbital.',
            'Count signals': 'Each unique hydrogen environment produces one NMR signal. Symmetry reduces the number of signals.',
            'Predict orientation': 'Electron-donating groups (OH, OR, NH₂, alkyl) direct ortho/para. Electron-withdrawing groups (NO₂, CN, COOH) direct meta.'
        };
        return intermediateExplanations[step.step] || 'Apply standard organic chemistry principles.';
    }

    getDetailedOrganicExplanation(step) {
        const detailedExplanations = {
            'Identify the chiral center': 'A stereogenic center (chiral center) is a tetrahedral (sp³) atom bonded to four different substituents. The presence of a chiral center makes a molecule chiral (non-superimposable on its mirror image). Molecules with n chiral centers can have up to 2ⁿ stereoisomers (fewer if meso forms exist due to internal planes of symmetry). Chirality is fundamental in biology - enzymes and receptors are chiral and often interact with only one enantiomer.',

            'Assign priorities': 'The Cahn-Ingold-Prelog priority rules systematically rank substituents: (1) Higher atomic number atoms have priority (O > N > C > H). (2) If tied at first atom, move to the second atoms and compare. (3) Multiple bonds are treated as multiple single bonds: C=O counts as C bonded to two O atoms. (4) Isotopes: higher mass number has priority (D > H). These rules allow unambiguous R/S assignment for any chiral center.',

            'Draw backside attack': 'SN2 proceeds through a concerted mechanism with a single transition state. The nucleophile\'s HOMO (highest occupied molecular orbital, typically a lone pair) overlaps with the σ* antibonding orbital of the C-X bond. This backside approach (180° from X) is required for optimal orbital overlap. As the Nu-C bond forms, the C-X bond breaks, with both processes occurring simultaneously. The carbon undergoes inversion like an umbrella flipping inside-out, resulting in complete stereochemical inversion (Walden inversion). This mechanism explains why SN2 is second-order and why tertiary substrates don\'t undergo SN2 (severe steric hindrance blocks backside approach).',

            'Form carbocation': 'Carbocation formation involves heterolytic cleavage of the C-X bond. The carbon becomes sp² hybridized with an empty p orbital perpendicular to the plane of the three substituents. Carbocation stability follows the order: 3° > 2° > 1° > methyl, due to hyperconjugation (σ C-H bonds of adjacent alkyl groups donate electron density into the empty p orbital) and inductive effects (alkyl groups are weakly electron-donating). Resonance can dramatically stabilize carbocations - allylic and benzylic carbocations have additional resonance structures that delocalize the positive charge. The planar geometry means nucleophiles can attack from either face, leading to racemization in SN1 reactions.',

            'Count signals': 'In ¹H NMR spectroscopy, each magnetically unique hydrogen environment produces a distinct signal. Hydrogens are equivalent if they can be interchanged by symmetry operations (rotation, reflection, or rapid processes like bond rotation). Molecular symmetry reduces the number of signals: benzene (6 equivalent H) shows only one signal, while para-dimethylbenzene shows only two signals. Chemical exchange (OH, NH protons) can make apparently different H atoms equivalent on the NMR timescale.',

            'Predict orientation': 'Substituent effects on electrophilic aromatic substitution arise from resonance and inductive effects. Electron-donating groups (EDG: -OH, -OR, -NH₂, -R) activate the ring and direct ortho/para through resonance donation of electron density (making positions 2,4,6 more electron-rich). Halogens are deactivating (inductive withdrawal) but ortho/para directing (resonance donation from lone pairs). Electron-withdrawing groups (EWG: -NO₂, -CN, -CHO, -COOH) deactivate and direct meta because they withdraw electrons by resonance, making positions 2,4,6 electron-poor (leaving position 3 relatively electron-rich by comparison).'
        };
        return detailedExplanations[step.step] || 'This step embodies core organic chemistry principles including electron flow, molecular orbital theory, thermodynamics, and stereochemical considerations.';
    }

    getScaffoldedOrganicExplanation(step) {
        const scaffoldedExplanations = {
            'Identify the chiral center': 'Let\'s find chiral centers together. A chiral center is a carbon with 4 different groups. Look at each carbon - does it have 4 different things attached? If yes, mark it with a star. Try this yourself before moving on.',

            'Assign priorities': 'Now we\'ll rank the groups. Start by looking at the atoms directly attached to the chiral center. Which has the highest atomic number? That\'s #1. If two atoms are the same, we move one atom further out and compare again. Work through this systematically.',

            'Draw backside attack': 'Picture this: the nucleophile is like a ball approaching the carbon from behind. The leaving group is leaving from the front. They can\'t both be there at once, so as one comes in from behind, the other must leave from the front. This causes the stereochemistry to flip. Can you visualize why the configuration must invert?',

            'Form carbocation': 'When the leaving group departs, what happens to the carbon? It loses two electrons (they go with the leaving group). Now carbon only has 6 electrons around it - it needs 8! This makes it very reactive and positively charged. The geometry changes from tetrahedral to planar. Why planar? Because sp² carbons have 120° angles.',

            'Count signals': 'Let\'s count the types of hydrogens. Are these two hydrogens the same type? Ask: can I swap them by rotating the molecule? If I can swap them and the molecule looks identical, they\'re the same type and will give ONE signal together. Work through the molecule and group equivalent hydrogens.'
        };
        return scaffoldedExplanations[step.step] || 'Let\'s work through this step together, thinking about what\'s happening at the molecular level.';
    }

    getOrganicScaffoldingQuestions(step) {
        const questionSets = {
            'Identify the chiral center': [
                'Which carbons in this molecule are sp³ hybridized?',
                'Does this carbon have 4 different groups attached?',
                'What happens if two groups are the same - is it still chiral?',
                'Can you find all chiral centers in this molecule?'
            ],
            'Assign priorities': [
                'What is the atomic number of each atom attached to the chiral center?',
                'Which atom has the highest atomic number?',
                'If two atoms are tied, where do we look next?',
                'How do we handle double bonds in CIP rules?'
            ],
            'Draw backside attack': [
                'Why can\'t the nucleophile attack from the front (same side as X)?',
                'What does "concerted" mean for this mechanism?',
                'Why does the carbon undergo inversion?',
                'What would happen if the nucleophile attacked from the side?'
            ],
            'Form carbocation': [
                'Why does the leaving group take both electrons?',
                'How many bonds does the carbocation have?',
                'Why is the carbocation planar instead of tetrahedral?',
                'Why is a tertiary carbocation more stable than primary?'
            ],
            'Count signals': [
                'How many different types of hydrogen are there?',
                'Which hydrogens are equivalent by symmetry?',
                'Does this molecule have a plane of symmetry?',
                'How does symmetry reduce the number of signals?'
            ]
        };
        return questionSets[step.step] || [
            'What is the goal of this step?',
            'What chemical principle applies here?',
            'How do we know this is correct?'
        ];
    }

    getOrganicExamplesForLevel(step, level) {
        const examples = {
            basic: {
                'Assign priorities': 'In CH₃-CHBr-OH, the chiral carbon has: Br (atomic # 35), O (16), C (6), H (1). So priority is Br > O > C > H.',
                'Draw backside attack': 'If X is on the right, Nu⁻ attacks from the left. Like pushing through a swinging door from the back.'
            },
            intermediate: {
                'Assign priorities': 'For (R)-2-butanol: priorities are OH (#1, O=8) > CH₂CH₃ (#2, C then C,H,H) > CH₃ (#3, C then H,H,H) > H (#4)',
                'Draw backside attack': 'In the SN2 reaction of (R)-2-bromobutane with CN⁻, the product is (S)-2-cyanobutane due to inversion.'
            },
            detailed: {
                'Assign priorities': 'For a chiral center with -CH=CH₂ and -CH₂CH₃: the vinyl group C=C is treated as C(C,C,H) while ethyl is C(C,H,H), so vinyl > ethyl by CIP rules.',
                'Draw backside attack': 'The SN2 transition state has trigonal bipyramidal geometry with Nu and X at apices (180° apart), and the three remaining groups in the equatorial plane.'
            }
        };
        const levelExamples = examples[level] || examples.intermediate;
        return levelExamples[step.step] || 'Work through similar examples to build understanding.';
    }

    getOrganicCategoryFromType(type) {
        const categoryMap = {
            'iupac_naming': 'nomenclature',
            'structure_from_name': 'nomenclature',
            'rs_configuration': 'stereochemistry',
            'ez_configuration': 'stereochemistry',
            'mechanism_sn2': 'mechanism',
            'mechanism_sn1': 'mechanism',
            'mechanism_e2': 'mechanism',
            'mechanism_addition': 'mechanism',
            'mechanism_aromatic': 'mechanism',
            'nmr_interpretation': 'spectroscopy',
            'ir_interpretation': 'spectroscopy',
            'synthesis_multi_step': 'synthesis'
        };
        return categoryMap[type] || 'general';
    }

    addStepBridges(steps, problem) {
        const enhancedSteps = [];

        for (let i = 0; i < steps.length; i++) {
            enhancedSteps.push(steps[i]);

            if (i < steps.length - 1) {
                enhancedSteps.push({
                    stepType: 'bridge',
                    title: 'Connecting to Next Step',
                    explanation: this.generateOrganicStepBridge(steps[i], steps[i + 1]),
                    reasoning: this.explainOrganicStepProgression(steps[i], steps[i + 1]),
                    strategicThinking: this.explainOrganicStepStrategy(steps[i + 1])
                });
            }
        }

        return enhancedSteps;
    }

    generateOrganicStepBridge(currentStep, nextStep) {
        return `Having completed ${currentStep.step}, we now move to ${nextStep.step}. This progression is logical because each step builds on the previous molecular understanding or transformation.`;
    }

    explainOrganicStepProgression(currentStep, nextStep) {
        return `${currentStep.step} establishes the foundation for ${nextStep.step} by providing necessary structural or mechanistic information.`;
    }

    explainOrganicStepStrategy(nextStep) {
        return `The strategy in ${nextStep.step} is to apply the information gathered so far to advance toward the solution.`;
    }

    addErrorPrevention(step, problemType) {
        const mistakes = this.commonMistakes[this.getOrganicCategoryFromType(problemType)]?.[step.step] || [];

        return {
            ...step,
            errorPrevention: {
                commonMistakes: mistakes,
                preventionTips: this.generateOrganicPreventionTips(step, problemType),
                checkPoints: this.generateOrganicCheckPoints(step),
                warningFlags: this.identifyOrganicWarningFlags(step, problemType)
            },
            validation: {
                selfCheck: this.generateOrganicSelfCheckQuestion(step),
                expectedResult: this.describeOrganicExpectedResult(step),
                troubleshooting: this.generateOrganicTroubleshootingTips(step)
            }
        };
    }

    generateOrganicPreventionTips(step, problemType) {
        return [
            'Draw all lone pairs and formal charges explicitly',
            'Check hybridization and geometry at each atom',
            'Verify arrow-pushing shows electron movement correctly',
            'Count electrons to ensure no violations of octet rule'
        ];
    }

    generateOrganicCheckPoints(step) {
        return [
            'Are all atoms properly bonded?',
            'Do formal charges add up correctly?',
            'Is stereochemistry indicated where relevant?',
            'Are curved arrows drawn from electron source to destination?'
        ];
    }

    identifyOrganicWarningFlags(step, problemType) {
        return [
            'Carbon with 5 bonds (impossible)',
            'Curved arrow pointing wrong direction',
            'Forgetting stereochemistry in mechanism',
            'Not showing all resonance structures'
        ];
    }

    generateOrganicSelfCheckQuestion(step) {
        const questions = {
            'Assign priorities': 'Did you compare atomic numbers first, then move outward if tied?',
            'Draw backside attack': 'Is the nucleophile approaching from exactly opposite the leaving group (180°)?',
            'Form carbocation': 'Is the carbocation drawn as planar with correct formal charge (+1)?',
            'Count signals': 'Did you identify all symmetry-equivalent hydrogens?'
        };
        return questions[step.step] || 'Does this step make chemical sense?';
    }

    describeOrganicExpectedResult(step) {
        return `After ${step.step}, you should have a clear understanding of the molecular structure or transformation at this stage.`;
    }

    generateOrganicTroubleshootingTips(step) {
        return [
            'If stuck, draw the molecule in 3D',
            'Check your work against the rules for this step',
            'Look for symmetry to simplify the problem',
            'Consult a mechanism reference if needed'
        ];
    }

    addScaffolding(steps, problem) {
        return steps.map((step, index) => ({
            ...step,
            scaffolding: {
                guidingQuestions: this.generateOrganicGuidingQuestions(step, problem),
                subSteps: this.breakIntoOrganicSubSteps(step),
                hints: this.generateOrganicProgressiveHints(step),
                practiceVariation: this.generateOrganicPracticeVariation(step, problem)
            },
            metacognition: {
                thinkingProcess: this.explainOrganicThinkingProcess(step),
                decisionPoints: this.identifyOrganicDecisionPoints(step),
                alternativeApproaches: this.suggestOrganicAlternativeMethods(step, problem)
            }
        }));
    }

    generateOrganicGuidingQuestions(step, problem) {
        return [
            'What molecular feature are we focusing on in this step?',
            'How does this step move us toward the solution?',
            'What chemical principle is being applied here?'
        ];
    }

    breakIntoOrganicSubSteps(step) {
        return [
            `${step.step} - Part A: Identify relevant features`,
            `${step.step} - Part B: Apply rules/principles`,
            `${step.step} - Part C: Verify result`
        ];
    }

    generateOrganicProgressiveHints(step) {
        return [
            {level: 1, hint: 'Start by identifying the key atoms or bonds'},
            {level: 2, hint: 'Apply the relevant rules systematically'},
            {level: 3, hint: 'Draw the result and check it makes chemical sense'}
        ];
    }

    generateOrganicPracticeVariation(step, problem) {
        return {
            variation: 'Try a similar problem with a different molecule',
            difficulty: 'Same concept, different substrate'
        };
    }

    explainOrganicThinkingProcess(step) {
        return `For ${step.step}, think about: (1) What information do I have? (2) What chemical principle applies? (3) How do I apply it systematically?`;
    }

    identifyOrganicDecisionPoints(step) {
        return [
            'Which rule or principle to apply?',
            'How to interpret the molecular structure?',
            'What is the most logical next move?'
        ];
    }

    suggestOrganicAlternativeMethods(step, problem) {
        return [
            {
                method: 'Alternative approach 1',
                description: 'Different way to arrive at same answer',
                whenToUse: 'When standard method is unclear'
            }
        ];
    }

    identifyPrerequisites(step, problemType) {
        const prerequisites = {
            'nomenclature_alkanes': ['Drawing Lewis structures', 'Understanding carbon chains', 'Recognizing substituents'],
            'stereochemistry_chirality': ['Understanding tetrahedral geometry', '3D visualization', 'Mirror images'],
            'reaction_mechanisms_sn2': ['Lewis structures', 'Formal charges', 'Nucleophilicity', 'Leaving groups'],
            'reaction_mechanisms_sn1': ['Carbocation stability', 'Lewis structures', 'Resonance'],
            'spectroscopy_nmr': ['Molecular symmetry', 'Chemical environments', 'Electron-withdrawing effects']
        };

        const category = this.getOrganicCategoryFromType(problemType);
        return prerequisites[category] || ['Basic organic chemistry knowledge'];
    }

    identifyKeyVocabulary(step) {
        const vocabulary = {
            'Identify the chiral center': ['chiral', 'stereogenic center', 'enantiomer', 'sp³ hybridization', 'non-superimposable'],
            'Assign priorities': ['Cahn-Ingold-Prelog', 'atomic number', 'priority', 'stereodescriptor'],
            'Draw backside attack': ['nucleophile', 'leaving group', 'backside attack', 'inversion', 'concerted', 'Walden inversion'],
            'Form carbocation': ['carbocation', 'intermediate', 'sp² hybridization', 'planar', 'hyperconjugation', 'heterolytic cleavage'],
            'Count signals': ['chemical shift', 'equivalent hydrogens', 'magnetic environment', 'symmetry'],
            'Deprotonation restores aromaticity': ['aromaticity', 'arenium ion', 'sigma complex', 'resonance stabilization']
        };
        return vocabulary[step.step] || ['organic chemistry', 'molecular structure', 'reaction'];
    }

    connectToPreviousStep(step, stepIndex) {
        return {
            previousStep: stepIndex - 1,
            connection: `Step ${stepIndex + 1} builds directly on the results of Step ${stepIndex}`,
            information_flow: 'The output from the previous step becomes input for this step'
        };
    }

    adaptLanguageLevel(text, options) {
        // Simplified language adaptation
        if (!text) return text;
        
        if (options.vocabulary === 'simple, everyday language') {
            return text
                .replace(/carbocation/g, 'carbon with positive charge')
                .replace(/nucleophile/g, 'electron-rich species')
                .replace(/electrophile/g, 'electron-poor species')
                .replace(/sp³/g, 'tetrahedral')
                .replace(/sp²/g, 'flat/trigonal');
        }
        
        return text; // Return unchanged for higher levels
    }

    // DIAGRAM AND VISUALIZATION GENERATION

    generateOrganicChemistryDiagramData() {
        if (!this.currentSolution) return;

        const { type } = this.currentProblem;
        const solution = this.currentSolution;

        switch(type) {
            case 'iupac_naming':
            case 'structure_from_name':
                this.diagramData = this.generateStructureDiagram(solution);
                break;

            case 'rs_configuration':
            case 'ez_configuration':
                this.diagramData = this.generateStereochemistryDiagram(solution);
                break;

            case 'mechanism_sn2':
            case 'mechanism_sn1':
            case 'mechanism_e2':
            case 'mechanism_e1':
            case 'mechanism_addition':
            case 'mechanism_carbonyl':
            case 'mechanism_aromatic':
                this.diagramData = this.generateMechanismDiagram(solution);
                break;

            case 'nmr_interpretation':
                this.diagramData = this.generateNMRDiagram(solution);
                break;

            case 'ir_interpretation':
                this.diagramData = this.generateIRDiagram(solution);
                break;

            case 'synthesis_multi_step':
            case 'retrosynthetic_analysis':
                this.diagramData = this.generateSynthesisDiagram(solution);
                break;

            default:
                this.diagramData = this.generateGenericOrganicDiagram(solution);
        }
    }

    generateStructureDiagram(solution) {
        return {
            type: 'structure_diagram',
            title: 'Molecular Structure',
            structure: solution.structure || solution.proposedStructure,
            iupacName: solution.iupacName,
            molecularFormula: solution.molecularFormula,
            features: {
                longestChain: solution.longestChain,
                substituents: solution.substituents,
                functionalGroups: solution.functionalGroups
            },
            visualization: 'skeletal_structure'
        };
    }

    generateStereochemistryDiagram(solution) {
        return {
            type: 'stereochemistry_diagram',
            title: 'Stereochemical Analysis',
            chiralCenter: solution.chiralCenter,
            configuration: solution.configuration,
            priorities: solution.priorities,
            newman_projection: this.generateNewmanProjection(solution),
            fischer_projection: this.generateFischerProjection(solution),
            wedge_dash: this.generateWedgeDashStructure(solution),
            visualization: '3d_structure'
        };
    }

    generateNewmanProjection(solution) {
        return {
            description: 'Newman projection looking down C-C bond',
            view: 'Down specified bond axis',
            groups: 'Front and back substituents shown'
        };
    }

    generateFischerProjection(solution) {
        return {
            description: 'Fischer projection (2D representation)',
            convention: 'Horizontal = wedge, Vertical = dash',
            configuration: solution.configuration
        };
    }

    generateWedgeDashStructure(solution) {
        return {
            description: 'Wedge-dash notation for stereochemistry',
            wedge: 'Coming out of page',
            dash: 'Going behind page',
            planar: 'In plane of page'
        };
    }

    generateMechanismDiagram(solution) {
        return {
            type: 'mechanism_diagram',
            title: `${solution.problemType} Mechanism`,
            mechanism: solution.mechanism || [],
            energyDiagram: solution.energyDiagram,
            curvedArrows: this.extractCurvedArrows(solution.mechanism),
            intermediates: this.extractIntermediates(solution.mechanism),
            transitionStates: this.extractTransitionStates(solution.mechanism),
            rateEquation: solution.rateEquation,
            stereochemistry: solution.stereochemistry,
            visualization: 'mechanism_with_arrows'
        };
    }

    extractCurvedArrows(mechanism) {
        if (!mechanism || !Array.isArray(mechanism)) return [];
        
        return mechanism.map(step => ({
            step: step.step,
            arrows: step.electronMovement || 'Electron movement description',
            from: 'Electron source',
            to: 'Electron destination'
        }));
    }

    extractIntermediates(mechanism) {
        if (!mechanism || !Array.isArray(mechanism)) return [];
        
        return mechanism
            .filter(step => step.description && step.description.toLowerCase().includes('intermediate'))
            .map(step => ({
                step: step.step,
                structure: step.structure,
                description: step.description
            }));
    }

    extractTransitionStates(mechanism) {
        if (!mechanism || !Array.isArray(mechanism)) return [];
        
        return mechanism
            .filter(step => step.description && 
                   (step.description.toLowerCase().includes('transition') || 
                    step.structure && step.structure.includes('‡')))
            .map(step => ({
                step: step.step,
                structure: step.structure,
                description: step.description
            }));
    }

    generateNMRDiagram(solution) {
        return {
            type: 'nmr_spectrum_diagram',
            title: '¹H NMR Spectrum Analysis',
            numberOfSignals: solution.numberOfEnvironments,
            signals: solution.signalAnalysis || [],
            spectrum: {
                xAxis: 'Chemical Shift (δ ppm)',
                yAxis: 'Intensity',
                range: '0-10 ppm'
            },
            proposedStructure: solution.proposedStructure,
            assignments: this.mapNMRAssignments(solution),
            visualization: 'spectrum_with_assignments'
        };
    }

    mapNMRAssignments(solution) {
        if (!solution.signalAnalysis) return [];
        
        return solution.signalAnalysis.map(signal => ({
            shift: signal.shift,
            assignment: signal.assignment,
            integration: signal.integration,
            splitting: signal.splitting,
            structure: 'H atoms at this position'
        }));
    }

    generateIRDiagram(solution) {
        return {
            type: 'ir_spectrum_diagram',
            title: 'IR Spectrum Analysis',
            functionalGroups: solution.functionalGroups || [],
            peakAnalysis: solution.peakAnalysis || [],
            spectrum: {
                xAxis: 'Wavenumber (cm⁻¹)',
                yAxis: 'Transmittance (%)',
                range: '4000-500 cm⁻¹'
            },
            keyPeaks: this.identifyKeyIRPeaks(solution),
            absentPeaks: solution.absentPeaks || [],
            visualization: 'ir_spectrum_annotated'
        };
    }

    identifyKeyIRPeaks(solution) {
        if (!solution.peakAnalysis) return [];
        
        return solution.peakAnalysis
            .filter(peak => peak.intensity === 'strong')
            .map(peak => ({
                wavenumber: peak.wavenumber,
                assignment: peak.assignment,
                functionalGroup: peak.functionalGroup
            }));
    }

    generateSynthesisDiagram(solution) {
        return {
            type: 'synthesis_scheme',
            title: 'Synthetic Route',
            startingMaterial: solution.startingMaterial,
            target: solution.target,
            retrosynthesis: solution.retrosynthesis,
            forwardSynthesis: solution.forwardSynthesis || [],
            numberOfSteps: solution.numberOfSteps,
            keyTransformations: solution.keyTransformations || [],
            reagents: this.extractAllReagents(solution.forwardSynthesis),
            visualization: 'synthesis_flowchart'
        };
    }

    extractAllReagents(forwardSynthesis) {
        if (!forwardSynthesis || !Array.isArray(forwardSynthesis)) return [];
        
        return forwardSynthesis.map(step => ({
            step: step.step,
            reagents: step.reagents,
            conditions: step.conditions
        }));
    }

    generateGenericOrganicDiagram(solution) {
        return {
            type: 'generic_organic_diagram',
            title: solution.problemType || 'Organic Chemistry Problem',
            solution: solution,
            visualization: 'text_summary'
        };
    }

    // WORKBOOK GENERATION

    generateOrganicChemistryWorkbook() {
        if (!this.currentSolution || !this.currentProblem) {
            console.warn('Cannot generate workbook: missing solution or problem data');
            return;
        }

        const workbook = this.createOrganicWorkbookStructure();

        workbook.sections = [
            this.createProblemSection(),
            this.createGivenDataSection(),
            this.createConceptualOverviewSection(),
            this.createEnhancedStepsSection(),
            this.createLessonSection(),
            this.createSolutionSection(),
            this.createMechanismSection(),
            this.createStereochemistrySection(),
            this.createDiagramSection(),
            this.createKeyConceptsSection(),
            this.createCommonMistakesSection(),
            this.createPedagogicalNotesSection(),
            this.createAlternativeMethodsSection(),
            this.createPracticeProblemsSection(),
            this.createReferenceSection()
        ].filter(section => section !== null);

        this.currentWorkbook = workbook;
        return workbook;
    }

    createOrganicWorkbookStructure() {
        return {
            title: 'Enhanced Organic Chemistry Mathematical Workbook',
            subtitle: this.organicChemistryTypes[this.currentProblem.type]?.name || 'Organic Chemistry Problem',
            timestamp: new Date().toISOString(),
            theme: this.theme,
            dimensions: { width: this.width, height: this.height },
            explanationLevel: this.explanationLevel,
            features: {
                mechanisms: this.includeMechanisms,
                stereochemistry: this.includeStereochemistry,
                verification: this.includeVerificationInSteps,
                errorPrevention: this.includeErrorPrevention,
                pedagogicalNotes: this.includePedagogicalNotes,
                alternativeMethods: this.includeAlternativeMethods
            },
            sections: []
        };
    }

    createProblemSection() {
        return {
            title: 'Problem Statement',
            type: 'problem',
            content: {
                problemType: this.currentProblem.type,
                description: this.organicChemistryTypes[this.currentProblem.type]?.description,
                structure: this.currentProblem.structure,
                parameters: this.currentProblem.parameters,
                context: this.currentProblem.context
            }
        };
    }

    createGivenDataSection() {
        return {
            title: 'Given Information',
            type: 'data',
            content: {
                structure: this.currentProblem.structure,
                parameters: this.formatParameters(this.currentProblem.parameters),
                relevantData: this.extractRelevantData(this.currentProblem)
            }
        };
    }

    formatParameters(parameters) {
        return Object.entries(parameters).map(([key, value]) => ({
            parameter: key,
            value: value,
            type: typeof value
        }));
    }

    extractRelevantData(problem) {
        return {
            molecularFormula: problem.parameters.molecularFormula,
            structure: problem.structure,
            reagents: problem.parameters.reagents,
            conditions: problem.parameters.conditions
        };
    }

    createConceptualOverviewSection() {
        const category = this.getOrganicCategoryFromType(this.currentProblem.type);
        const lesson = this.lessons ? this.lessons[category] : null;

        if (!lesson) return null;

        return {
            title: 'Conceptual Overview',
            type: 'theory',
            content: {
                topic: lesson.title,
                keyConcepts: lesson.concepts,
                theory: lesson.theory,
                applications: lesson.applications
            }
        };
    }

    createEnhancedStepsSection() {
        return {
            title: 'Step-by-Step Solution',
            type: 'steps',
            content: {
                steps: this.solutionSteps,
                totalSteps: this.solutionSteps.length,
                explanationLevel: this.explanationLevel
            }
        };
    }

    createLessonSection() {
        const category = this.getOrganicCategoryFromType(this.currentProblem.type);
        const lesson = this.lessons ? this.lessons[category] : null;

        if (!lesson) return null;

        return {
            title: `Lesson: ${lesson.title}`,
            type: 'lesson',
            content: lesson
        };
    }

    createSolutionSection() {
        return {
            title: 'Complete Solution',
            type: 'solution',
            content: this.currentSolution
        };
    }

    createMechanismSection() {
        if (!this.includeMechanisms || !this.isMechanismProblem(this.currentProblem.type)) {
            return null;
        }

        return {
            title: 'Detailed Mechanism',
            type: 'mechanism',
            content: {
                mechanism: this.currentSolution.mechanism,
                energyDiagram: this.currentSolution.energyDiagram,
                curvedArrows: this.extractCurvedArrows(this.currentSolution.mechanism),
                rateEquation: this.currentSolution.rateEquation,
                stereochemistry: this.currentSolution.stereochemistry
            }
        };
    }

    createStereochemistrySection() {
        if (!this.includeStereochemistry) return null;

        const hasStereochemistry = this.currentSolution.stereochemistry || 
                                   this.currentSolution.configuration ||
                                   this.currentSolution.chiralCenter;

        if (!hasStereochemistry) return null;

        return {
            title: 'Stereochemical Analysis',
            type: 'stereochemistry',
            content: {
                configuration: this.currentSolution.configuration,
                chiralCenters: this.currentSolution.chiralCenter,
                stereochemistry: this.currentSolution.stereochemistry,
                enantiomers: this.currentSolution.numberOfEnantiomers
            }
        };
    }

    createDiagramSection() {
        if (!this.diagramData) return null;

        return {
            title: 'Visual Diagrams',
            type: 'diagrams',
            content: this.diagramData
        };
    }

    createKeyConceptsSection() {
        const category = this.getOrganicCategoryFromType(this.currentProblem.type);
        const lesson = this.lessons ? this.lessons[category] : null;

        if (!lesson) return null;

        return {
            title: 'Key Concepts & Formulas',
            type: 'reference',
            content: {
                keyFormulas: lesson.keyFormulas,
                solvingSteps: lesson.solvingSteps,
                mechanismInfo: this.reactionMechanisms[this.currentProblem.type]
            }
        };
    }

    createCommonMistakesSection() {
        if (!this.includeCommonMistakes) return null;

        const category = this.getOrganicCategoryFromType(this.currentProblem.type);
        const mistakes = this.commonMistakes[category];

        if (!mistakes) return null;

        return {
            title: 'Common Mistakes to Avoid',
            type: 'errors',
            content: mistakes
        };
    }

    createPedagogicalNotesSection() {
        if (!this.includePedagogicalNotes) return null;

        return {
            title: 'Teaching Notes',
            type: 'pedagogy',
            content: {
                learningObjectives: this.generateLearningObjectives(),
                difficultyConcepts: this.identifyDifficultConcepts(),
                teachingTips: this.generateTeachingTips(),
                assessmentQuestions: this.generateAssessmentQuestions()
            }
        };
    }

    generateLearningObjectives() {
        const category = this.getOrganicCategoryFromType(this.currentProblem.type);
        const objectives = {
            'nomenclature': [
                'Apply IUPAC naming rules systematically',
                'Identify longest carbon chain and functional groups',
                'Draw structures from IUPAC names'
            ],
            'stereochemistry': [
                'Identify chiral centers in molecules',
                'Assign R/S configuration using CIP rules',
                'Recognize enantiomers and diastereomers'
            ],
            'mechanism': [
                'Draw complete reaction mechanisms with curved arrows',
                'Predict products based on mechanism',
                'Explain stereochemical outcomes'
            ],
            'spectroscopy': [
                'Interpret spectroscopic data',
                'Assign signals to molecular features',
                'Propose structures from combined data'
            ]
        };
        return objectives[category] || ['Solve organic chemistry problems systematically'];
    }

    identifyDifficultConcepts() {
        return [
            '3D visualization of stereochemistry',
            'Curved arrow notation in mechanisms',
            'Predicting regiochemistry and stereochemistry',
            'Integrating multiple spectroscopic techniques'
        ];
    }

    generateTeachingTips() {
        return [
            'Use molecular models for stereochemistry',
            'Practice drawing mechanisms repeatedly',
            'Start with simple examples before complex ones',
            'Connect concepts to real-world applications'
        ];
    }

    generateAssessmentQuestions() {
        return [
            'Can you explain why this mechanism proceeds this way?',
            'What would happen if we changed this substituent?',
            'How would you verify this answer experimentally?',
            'What are alternative approaches to this problem?'
        ];
    }

    createAlternativeMethodsSection() {
        if (!this.includeAlternativeMethods) return null;

        return {
            title: 'Alternative Approaches',
            type: 'alternatives',
            content: {
                methods: this.generateAlternativeMethods(),
                comparison: this.compareMethodologies()
            }
        };
    }

    generateAlternativeMethods() {
        return [
            {
                method: 'Alternative Method 1',
                description: 'Different approach to same problem',
                advantages: 'May be simpler in certain cases',
                disadvantages: 'May be less general'
            }
        ];
    }

    compareMethodologies() {
        return {
            standardMethod: 'Primary approach taught',
            alternatives: 'Other valid approaches',
            recommendation: 'When to use each method'
        };
    }

    createPracticeProblemsSection() {
        return {
            title: 'Practice Problems',
            type: 'practice',
            content: {
                similarProblems: this.generateSimilarProblems(),
                difficulty: 'Progressive from basic to advanced',
                solutions: 'Available separately'
            }
        };
    }

    generateSimilarProblems() {
        return [
            {
                problem: 'Similar problem with different molecule',
                difficulty: 'Same level',
                topic: this.currentProblem.type
            },
            {
                problem: 'More complex variation',
                difficulty: 'Higher level',
                topic: this.currentProblem.type
            }
        ];
    }

    createReferenceSection() {
        return {
            title: 'References & Resources',
            type: 'references',
            content: {
                textbooks: [
                    'Organic Chemistry by Clayden, Greeves, Warren',
                    'Organic Chemistry by Wade',
                    'Organic Chemistry by Klein'
                ],
                mechanismResources: [
                    'Named Reactions and Mechanisms',
                    'Arrow-Pushing in Organic Chemistry'
                ],
                spectroscopyReferences: [
                    'Spectrometric Identification of Organic Compounds',
                    'Organic Spectroscopy'
                ]
            }
        };
    }
}

// Export the class
export default EnhancedOrganicChemistryMathematicalWorkbook;
