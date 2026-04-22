

microbialMetabolism: {
    title: "Microbial Metabolism: Energy, Catabolism, and Biosynthesis",

    databaseLinks: {
        misconceptions: [
            'energyBasics',
            'catabolism',
            'anabolism',
            'electrontransport',
            'metabolicDiversity'
        ],
        contextualScenarios: [
            'energyBasics',
            'catabolism',
            'anabolism',
            'metabolicDiversity'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'energyBasics',
            'catabolism',
            'anabolism',
            'metabolicDiversity'
        ]
    },

    conceptLinks: {
        "Microbial metabolism encompasses all chemical reactions in microbial cells": {
            misconceptions:      ['energyBasics'],
            scenarios:           ['energyBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['energyBasics']
        },
        "ATP is the universal energy currency linking catabolism and anabolism": {
            misconceptions:      ['energyBasics'],
            scenarios:           ['energyBasics'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['energyBasics']
        },
        "Glycolysis, the TCA cycle, and oxidative phosphorylation are the central catabolic pathways": {
            misconceptions:      ['catabolism'],
            scenarios:           ['catabolism'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['catabolism']
        },
        "The electron transport chain couples redox reactions to ATP synthesis via chemiosmosis": {
            misconceptions:      ['electrontransport'],
            scenarios:           ['catabolism'],
            studyTips:           ['diagrams', 'comparisonTables', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['catabolism']
        },
        "Microorganisms display extraordinary metabolic diversity in energy sources and electron donors": {
            misconceptions:      ['metabolicDiversity'],
            scenarios:           ['metabolicDiversity'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['metabolicDiversity']
        },
        "Anabolism requires energy and reducing power to synthesise macromolecules from precursors": {
            misconceptions:      ['anabolism'],
            scenarios:           ['anabolism'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['anabolism']
        }
    },

    topicIntroduction: {
        overview: "Microbial metabolism refers to the complete network of chemical reactions that microorganisms use to obtain energy, build cellular components, and maintain life. Microbes are the most metabolically diverse organisms on Earth — they occupy ecological niches ranging from deep-sea hydrothermal vents to acid mine drainage and the human gut, sustained by metabolic strategies unavailable to multicellular organisms. Understanding microbial metabolism is foundational to microbiology, infectious disease, biotechnology, and environmental science.",
        whyItMatters: "Every antibiotic targets a metabolic process unique to bacteria. Every fermentation product — from bread and yoghurt to insulin and biofuels — depends on microbial metabolic pathways. Microbial metabolism drives global biogeochemical cycles, fixing carbon, cycling nitrogen, and producing oxygen. Understanding these pathways reveals how pathogens survive, how we can kill them selectively, and how we can harness them industrially.",
        bigPicture: "Metabolism divides into catabolism (breaking molecules down to release energy, stored as ATP) and anabolism (using energy to build macromolecules). These two halves are coupled by ATP, NADH, and NADPH. Microbes extend this framework through extraordinary diversity: they can use light, inorganic molecules, or organic compounds as energy sources, and oxygen, nitrate, sulfate, or organic molecules as terminal electron acceptors.",
        priorKnowledge: [
            "Cell biology: prokaryotic cell structure, membranes, and compartmentalisation",
            "Chemistry: oxidation-reduction reactions, electron transfer, and electronegativity",
            "Biochemistry: structure of ATP, NAD⁺/NADH, and coenzyme A",
            "Enzyme kinetics: how enzymes catalyse reactions and are regulated",
            "Basic thermodynamics: Gibbs free energy, exergonic and endergonic reactions"
        ],
        topicRoadmap: [
            "Energy fundamentals: ATP, redox reactions, and the role of electron carriers",
            "Glycolysis: the universal pathway for glucose catabolism",
            "Pyruvate processing: fermentation vs aerobic respiration",
            "The TCA cycle: complete oxidation of acetyl-CoA",
            "The electron transport chain and chemiosmosis: ATP synthesis",
            "Fermentation pathways and their products",
            "Metabolic diversity: phototrophy, lithotrophy, and anaerobic respiration",
            "Anabolism: biosynthesis of carbohydrates, lipids, amino acids, and nucleotides",
            "Regulation of microbial metabolism",
            "Applications in biotechnology, medicine, and environmental science"
        ]
    },

    concepts: [
        "Microbial metabolism encompasses all chemical reactions in microbial cells",
        "ATP is the universal energy currency linking catabolism and anabolism",
        "Glycolysis, the TCA cycle, and oxidative phosphorylation are the central catabolic pathways",
        "The electron transport chain couples redox reactions to ATP synthesis via chemiosmosis",
        "Microorganisms display extraordinary metabolic diversity in energy sources and electron donors",
        "Anabolism requires energy and reducing power to synthesise macromolecules from precursors"
    ],

    theory: "Microbial metabolism encompasses the catabolic pathways that extract energy from chemical or light sources and the anabolic pathways that use that energy to synthesise cellular components. The coupling of these processes through ATP and electron carriers allows microorganisms to thrive in virtually every environment on Earth.",

    keyDefinitions: {
        "Metabolism": "The sum of all chemical reactions occurring within a cell",
        "Catabolism": "Metabolic reactions that break down molecules and release energy (exergonic)",
        "Anabolism": "Metabolic reactions that synthesise molecules using energy (endergonic)",
        "ATP (Adenosine Triphosphate)": "The universal energy currency of cells; hydrolysis releases ~30.5 kJ/mol",
        "NAD⁺/NADH": "Oxidised/reduced nicotinamide adenine dinucleotide; primary electron carrier in catabolism",
        "NADP⁺/NADPH": "Phosphorylated form; primary electron donor in anabolic reactions",
        "Oxidation": "Loss of electrons (or hydrogen); increases oxidation state",
        "Reduction": "Gain of electrons (or hydrogen); decreases oxidation state",
        "Substrate-Level Phosphorylation": "ATP synthesis by direct transfer of a phosphate group from a high-energy substrate to ADP",
        "Oxidative Phosphorylation": "ATP synthesis driven by the proton motive force generated by the electron transport chain",
        "Chemiosmosis": "ATP synthesis using the proton gradient across a membrane (Mitchell's hypothesis)",
        "Proton Motive Force (PMF)": "Electrochemical gradient of protons across the membrane driving ATP synthase",
        "Electron Transport Chain (ETC)": "Series of membrane-bound redox carriers transferring electrons to a terminal acceptor",
        "Terminal Electron Acceptor": "The final molecule accepting electrons in the ETC (O₂ in aerobic respiration)",
        "Fermentation": "Anaerobic catabolism using organic molecules as terminal electron acceptors; no net oxidation of NADH via ETC",
        "Autotroph": "Organism using CO₂ as sole carbon source",
        "Heterotroph": "Organism using organic compounds as carbon source",
        "Phototroph": "Organism using light as energy source",
        "Chemotroph": "Organism using chemical compounds as energy source",
        "Lithotroph (Chemoautotroph)": "Chemotroph using inorganic compounds as electron donors",
        "Organotroph": "Chemotroph using organic compounds as electron donors",
        "Amphibolic Pathway": "Pathway serving both catabolic and anabolic functions (e.g. TCA cycle)"
    },

    energyFundamentals: {
        ATP: {
            structure: "Adenosine with three phosphate groups; energy stored in anhydride bonds",
            hydrolysis: "ATP + H₂O → ADP + Pᵢ + ~30.5 kJ/mol (standard conditions)",
            roles: [
                "Powers active transport, motility, biosynthesis, and signal transduction",
                "Couples exergonic (catabolic) to endergonic (anabolic) reactions"
            ],
            regeneration: "Via substrate-level and oxidative phosphorylation during catabolism"
        },
        redoxReactions: {
            principle: "Electrons always flow from lower to higher reduction potential (more positive E°')",
            electronCarriers: {
                "NAD⁺/NADH": "E°' = −0.32 V; carries electrons from glycolysis and TCA cycle to ETC",
                "FAD/FADH₂": "E°' = −0.18 V; reduced in TCA cycle; enters ETC at Complex II",
                "NADP⁺/NADPH": "E°' = −0.32 V; primarily used in anabolic reactions",
                "Ubiquinone (CoQ)": "Mobile carrier in inner membrane; carries electrons between Complexes I/II and III",
                "Cytochrome c": "Small mobile protein; carries electrons between Complexes III and IV"
            },
            freeEnergyRelationship: "ΔG°' = −nFΔE°' (n = electrons transferred; F = Faraday constant 96.5 kJ/V/mol)"
        }
    },

    glycolysis: {
        overview: "Universal pathway converting glucose (6C) to two pyruvate (3C) molecules; occurs in cytoplasm; present in virtually all organisms",
        stages: {
            energyInvestment: {
                steps: "Steps 1–5: Two ATP consumed to phosphorylate glucose and produce two glyceraldehyde-3-phosphate (G3P)",
                keyEnzymes: ["Hexokinase (step 1)", "Phosphofructokinase (step 3, rate-limiting)", "Aldolase (step 4)"]
            },
            energyPayoff: {
                steps: "Steps 6–10: Two G3P oxidised to two pyruvate; four ATP and two NADH produced per glucose",
                keyEnzymes: ["Glyceraldehyde-3-phosphate dehydrogenase (step 6)", "Pyruvate kinase (step 10)"]
            }
        },
        netYield: {
            ATP: "2 ATP net (4 produced − 2 invested)",
            NADH: "2 NADH",
            pyruvate: "2 pyruvate"
        },
        regulation: {
            phosphofructokinase: "Inhibited by ATP and citrate; activated by AMP and ADP — the key regulatory step",
            hexokinase: "Inhibited by its product glucose-6-phosphate",
            pyruvateKinase: "Inhibited by ATP; activated by fructose-1,6-bisphosphate (feedforward)"
        },
        alternatives: {
            EntnerDoudoroff: "Used by Pseudomonas and other Gram-negative bacteria; net yield 1 ATP, 1 NADH, 1 NADPH per glucose",
            PentosePhosphate: "Parallel pathway producing NADPH and ribose-5-phosphate for anabolism; no direct ATP production"
        }
    },

    pyruvateProcessing: {
        aerobicConditions: {
            reaction: "Pyruvate → Acetyl-CoA + CO₂ + NADH",
            enzyme: "Pyruvate dehydrogenase complex (PDC)",
            location: "Cytoplasm in prokaryotes; mitochondrial matrix in eukaryotes",
            cofactors: ["Thiamine pyrophosphate (TPP)", "Lipoic acid", "CoA", "FAD", "NAD⁺"]
        },
        anaerobicConditions: "Pyruvate reduced to regenerate NAD⁺ via fermentation (see fermentationPathways)"
    },

    tcaCycle: {
        overview: "Also called the Krebs cycle or citric acid cycle; oxidises acetyl-CoA (2C) completely to CO₂; produces electron carriers for the ETC",
        location: "Cytoplasm in prokaryotes; mitochondrial matrix in eukaryotes",
        netYieldPerAcetylCoA: {
            CO2: "2 molecules",
            NADH: "3 molecules",
            FADH2: "1 molecule",
            GTP: "1 molecule (substrate-level phosphorylation via succinyl-CoA synthetase)",
            total: "Per glucose: 6 NADH + 2 FADH₂ + 2 GTP from two turns of the cycle"
        },
        keyReactions: [
            "Citrate synthase: acetyl-CoA + oxaloacetate → citrate (condensation, irreversible)",
            "Isocitrate dehydrogenase: isocitrate → α-ketoglutarate + CO₂ + NADH (first decarboxylation, regulated)",
            "α-Ketoglutarate dehydrogenase: α-ketoglutarate → succinyl-CoA + CO₂ + NADH (second decarboxylation)",
            "Succinate dehydrogenase: succinate → fumarate + FADH₂ (embedded in membrane, also Complex II of ETC)",
            "Malate dehydrogenase: malate → oxaloacetate + NADH (regenerates oxaloacetate)"
        ],
        amphibolicRole: [
            "Provides carbon skeletons for amino acid synthesis (α-ketoglutarate → glutamate)",
            "Provides succinyl-CoA for porphyrin and haem synthesis",
            "Provides oxaloacetate for gluconeogenesis",
            "Replenished by anaplerotic reactions (e.g. CO₂ fixation by pyruvate carboxylase)"
        ],
        regulation: {
            citratesynthase: "Inhibited by ATP, NADH, and succinyl-CoA",
            isocitrateDehydrogenase: "Inhibited by ATP and NADH; activated by ADP",
            alphaKetoglutarateDehydrogenase: "Inhibited by NADH and succinyl-CoA"
        }
    },

    electronTransportChain: {
        overview: "Series of membrane-embedded protein complexes transferring electrons from NADH/FADH₂ to a terminal electron acceptor, generating proton motive force for ATP synthesis",
        location: "Inner mitochondrial membrane (eukaryotes); plasma membrane (prokaryotes)",
        complexes: {
            complexI: "NADH dehydrogenase: oxidises NADH, pumps 4H⁺ per 2e⁻",
            complexII: "Succinate dehydrogenase: oxidises FADH₂, does NOT pump protons",
            complexIII: "Cytochrome bc₁: transfers electrons from CoQ to cytochrome c, pumps 4H⁺ per 2e⁻",
            complexIV: "Cytochrome c oxidase: transfers electrons to O₂ (terminal acceptor), pumps 2H⁺ per 2e⁻",
            ATPsynthase: "Complex V: F₀F₁ ATP synthase; uses proton re-entry to synthesise ATP (3H⁺ per ATP)"
        },
        protonMotiveForce: {
            components: "Electrical gradient (ΔΨ, inside negative) + chemical gradient (ΔpH, inside acidic)",
            formula: "PMF = ΔΨ − (2.3RT/F) × ΔpH",
            use: "Powers ATP synthesis, active transport, and flagellar rotation"
        },
        ATPyield: {
            fromNADH: "~2.5 ATP per NADH (modern P/O ratio estimate)",
            fromFADH2: "~1.5 ATP per FADH₂",
            perGlucoseAerobic: "~30–32 ATP total (glycolysis + PDC + TCA + ETC)",
            perGlucoseFermentation: "2 ATP only (glycolysis, no ETC)"
        },
        prokaryoticVariations: {
            alternativeAcceptors: "Nitrate (NO₃⁻), sulfate (SO₄²⁻), fumarate, Fe³⁺ used by anaerobic respirers",
            fewerComplexes: "Many bacteria lack Complex I or use alternative dehydrogenases",
            branching: "Bacterial ETCs often branch at the quinone level, allowing multiple terminal oxidases"
        }
    },

    fermentationPathways: {
        overview: "Anaerobic catabolism in which organic molecules serve as terminal electron acceptors to regenerate NAD⁺ from NADH; substrate-level phosphorylation only; net 2 ATP per glucose",
        purpose: "Regenerate NAD⁺ to allow glycolysis to continue in absence of ETC",
        keyPathways: {
            lacticAcid: {
                organism: "Lactobacillus, Streptococcus, skeletal muscle",
                reaction: "Pyruvate + NADH + H⁺ → Lactate + NAD⁺",
                enzyme: "Lactate dehydrogenase",
                products: "Lactic acid (used in yoghurt, cheese, sauerkraut)"
            },
            alcoholic: {
                organism: "Saccharomyces cerevisiae, some bacteria",
                reactions: "Pyruvate → Acetaldehyde + CO₂ (pyruvate decarboxylase); Acetaldehyde + NADH → Ethanol + NAD⁺ (alcohol dehydrogenase)",
                products: "Ethanol and CO₂ (bread, wine, beer, bioethanol)"
            },
            mixedAcid: {
                organism: "Escherichia coli and other enteric bacteria",
                products: "Acetate, formate, ethanol, succinate, H₂, CO₂ (proportions vary by conditions)",
                diagnosticTest: "Methyl red test (positive = mixed acid fermentation, low pH)"
            },
            butanediol: {
                organism: "Enterobacter, Klebsiella",
                products: "2,3-Butanediol, CO₂ (less acidic than mixed acid)",
                diagnosticTest: "Voges-Proskauer test (positive = acetoin/butanediol production)"
            },
            butyric: {
                organism: "Clostridium species",
                products: "Butyrate, butanol, acetone, H₂, CO₂",
                industrialUse: "Acetone-butanol-ethanol (ABE) fermentation"
            }
        }
    },

    metabolicDiversity: {
        classificationMatrix: {
            energySource: {
                phototroph: "Light",
                chemotroph: "Chemical compounds"
            },
            electronDonor: {
                lithotroph: "Inorganic compounds (H₂, H₂S, NH₃, Fe²⁺)",
                organotroph: "Organic compounds"
            },
            carbonSource: {
                autotroph: "CO₂",
                heterotroph: "Organic carbon"
            }
        },
        nutritionalTypes: {
            photoautotroph: {
                energySource: "Light",
                electronDonor: "H₂O (oxygenic) or H₂S, H₂ (anoxygenic)",
                carbonSource: "CO₂",
                examples: "Cyanobacteria (oxygenic), purple sulfur bacteria (anoxygenic)",
                significance: "Oxygenic photosynthesis produced Earth's atmospheric oxygen"
            },
            photoheterotroph: {
                energySource: "Light",
                electronDonor: "Organic compounds",
                carbonSource: "Organic carbon",
                examples: "Purple non-sulfur bacteria (Rhodospirillum), green non-sulfur bacteria",
                significance: "Common in marine and freshwater environments"
            },
            chemoautotroph: {
                energySource: "Inorganic chemical oxidation",
                electronDonor: "H₂, NH₃, NO₂⁻, H₂S, Fe²⁺, S⁰",
                carbonSource: "CO₂",
                examples: "Nitrosomonas (NH₃ → NO₂⁻), Nitrobacter (NO₂⁻ → NO₃⁻), Thiobacillus (S → SO₄²⁻), Acidithiobacillus",
                significance: "Drive nitrification, sulfur oxidation, and iron cycling"
            },
            chemoheterotroph: {
                energySource: "Organic chemical oxidation",
                electronDonor: "Organic compounds",
                carbonSource: "Organic carbon",
                examples: "Most bacteria, all fungi, most pathogens",
                significance: "Largest group; responsible for decomposition, disease, and fermentation"
            }
        },
        anaerobicRespiration: {
            principle: "Uses alternative terminal electron acceptors instead of O₂; ETC still operates; more ATP than fermentation",
            acceptors: {
                nitrate: "NO₃⁻ → NO₂⁻ → N₂ (denitrification); organisms: Pseudomonas, Paracoccus",
                sulfate: "SO₄²⁻ → H₂S; organisms: Desulfovibrio; produces 'rotten egg' odour",
                fumarate: "Fumarate → Succinate; organisms: E. coli under anaerobic conditions",
                carbonDioxide: "CO₂ → CH₄ (methanogenesis); organisms: methanogens (Archaea); significant greenhouse gas source",
                ferricIron: "Fe³⁺ → Fe²⁺; organisms: Geobacter; exploited in bioremediation"
            }
        },
        carbonFixation: {
            calvinCycle: {
                overview: "Primary autotrophic CO₂ fixation pathway; three phases: carboxylation, reduction, regeneration",
                keyEnzyme: "RuBisCO (ribulose-1,5-bisphosphate carboxylase/oxygenase) — most abundant enzyme on Earth",
                ATPandNADPH: "3 ATP and 2 NADPH consumed per CO₂ fixed",
                organisms: "Cyanobacteria, purple bacteria, most chemoautotrophs"
            },
            reverseKrebsCycle: "Used by green sulfur bacteria and some archaea; reverse TCA cycle fixes CO₂",
            woodLjungdahlPathway: "Used by acetogens and methanogens; highly energy-efficient anaerobic CO₂ fixation"
        }
    },

    anabolism: {
        overview: "Biosynthesis of cellular macromolecules from small precursor molecules; requires ATP (energy) and NADPH (reducing power)",
        gluconeogenesis: {
            overview: "Synthesis of glucose from non-carbohydrate precursors (pyruvate, oxaloacetate, lactate, amino acids)",
            keyBypassEnzymes: [
                "Pyruvate carboxylase: pyruvate → oxaloacetate (bypasses pyruvate kinase)",
                "PEPCK: oxaloacetate → PEP (bypasses pyruvate kinase)",
                "Fructose-1,6-bisphosphatase (bypasses PFK)",
                "Glucose-6-phosphatase (bypasses hexokinase)"
            ],
            regulation: "Reciprocally regulated with glycolysis — active when ATP is high, AMP is low"
        },
        lipidBiosynthesis: {
            fattyAcidSynthesis: {
                precursor: "Acetyl-CoA (converted to malonyl-CoA by acetyl-CoA carboxylase, the committed step)",
                carrier: "Acyl carrier protein (ACP)",
                reductant: "NADPH (2 per cycle)",
                elongation: "Two carbons added per cycle (from malonyl-ACP)",
                antibioticTarget: "Bacterial FAS II system targeted by triclosan and platensimycin"
            }
        },
        aminoAcidBiosynthesis: {
            families: {
                glutamateFamily: "α-Ketoglutarate → glutamate → glutamine, proline, arginine",
                aspartateFamily: "Oxaloacetate → aspartate → threonine, lysine, methionine, isoleucine",
                pyruvateFamily: "Pyruvate → alanine, valine, leucine",
                aromaticFamily: "Chorismate → phenylalanine, tyrosine, tryptophan (shikimate pathway — absent in humans, antibiotic target)"
            },
            nitrogenFixation: {
                overview: "Conversion of atmospheric N₂ to NH₃; reaction: N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pᵢ",
                enzyme: "Nitrogenase complex (dinitrogenase + dinitrogenase reductase)",
                oxygenSensitivity: "Nitrogenase is irreversibly inactivated by O₂; protected by heterocysts (Anabaena) or by respiring O₂ rapidly",
                organisms: "Rhizobium (symbiotic), Azotobacter (free-living aerobe), Clostridium (free-living anaerobe)"
            }
        },
        nucleotideBiosynthesis: {
            purines: "Synthesised de novo on a ribose-5-phosphate scaffold (from pentose phosphate pathway); energy-costly (6 ATP per purine)",
            pyrimidines: "Ring synthesised before attachment to ribose; regulated by ATCase (aspartate transcarbamoylase) — the classic allosteric enzyme example",
            salvagePathway: "Recycles free bases from nucleic acid degradation; energy-efficient alternative to de novo synthesis"
        }
    },

    metabolicRegulation: {
        enzymaticRegulation: [
            "Allosteric regulation: key metabolic enzymes regulated by ATP/ADP/AMP ratio",
            "Feedback inhibition: end products inhibit first committed step",
            "Covalent modification: phosphorylation cascades linked to environmental signals"
        ],
        transcriptionalRegulation: [
            "Induction: substrate activates transcription of catabolic genes (e.g. lac operon induced by lactose/allolactose)",
            "Repression: end product represses transcription of biosynthetic genes (e.g. trp operon repressed by tryptophan)",
            "Catabolite repression (carbon catabolite repression): glucose represses expression of alternative carbon source pathways via cAMP-CRP system"
        ],
        globalRegulation: {
            stringentResponse: "ppGpp accumulates during amino acid starvation; globally downregulates rRNA synthesis and upregulates amino acid biosynthesis",
            twoComponentSystems: "Sensor histidine kinase + response regulator; link environmental signals to gene expression changes",
            quorumSensing: "Cell-density-dependent regulation via autoinducers; coordinates metabolic switching in populations"
        }
    },

    applications: [
        "Industrial fermentation: ethanol, acetone, butanol, organic acid production",
        "Pharmaceutical production: insulin, antibiotics, vitamins via microbial biosynthesis",
        "Bioremediation: degradation of pollutants via diverse catabolic pathways",
        "Wastewater treatment: aerobic and anaerobic decomposition of organic waste",
        "Antibiotic targeting: metabolic pathways unique to bacteria (cell wall synthesis, FAS II, shikimate pathway)",
        "Biogeochemical cycles: nitrogen fixation, nitrification, denitrification, sulfur cycling",
        "Metagenomics: metabolic pathway reconstruction from environmental DNA"
    ],

    topicSummary: {
        coreInsights: [
            "Metabolism divides into catabolism (energy-releasing) and anabolism (energy-consuming); they are coupled through ATP, NADH, and NADPH.",
            "Glycolysis yields only 2 ATP per glucose by substrate-level phosphorylation; the ETC amplifies this to ~30–32 ATP by harnessing the proton motive force.",
            "The TCA cycle is amphibolic — it both oxidises acetyl-CoA for energy and supplies carbon skeletons for biosynthesis.",
            "The proton motive force, generated by sequential electron transfer through the ETC, drives ATP synthesis via chemiosmosis — Mitchell's chemiosmotic theory.",
            "Fermentation regenerates NAD⁺ to sustain glycolysis under anaerobic conditions; it produces only 2 ATP but enables rapid growth without oxygen.",
            "Microorganisms are classified by energy source (photo/chemo), electron donor (litho/organo), and carbon source (auto/hetero) — combinations explain their ecological roles.",
            "Chemoautotrophs drive global biogeochemical cycles by coupling inorganic oxidation to CO₂ fixation with no dependence on organic carbon or light.",
            "Anabolism uses NADPH (not NADH) as reducing power and consumes ATP; the shikimate pathway and FAS II system are exclusive to prokaryotes and represent antibiotic targets."
        ],
        keyEquations: {
            aerobicRespiration: "C₆H₁₂O₆ + 6O₂ → 6CO₂ + 6H₂O + ~30–32 ATP",
            lacticAcidFermentation: "C₆H₁₂O₆ → 2 Lactate + 2H⁺ + 2 ATP",
            ethanolFermentation: "C₆H₁₂O₆ → 2 Ethanol + 2CO₂ + 2 ATP",
            nitrogenFixation: "N₂ + 8H⁺ + 8e⁻ + 16ATP → 2NH₃ + H₂ + 16ADP + 16Pᵢ",
            freeEnergyRedox: "ΔG°' = −nFΔE°' (n = electrons; F = 96.5 kJ/V/mol)",
            calvinCycle: "3CO₂ + 9ATP + 6NADPH → G3P + 9ADP + 8Pᵢ + 6NADP⁺"
        },
        metabolicYieldComparison: {
            aerobicRespiration:   { ATP: "~30–32",  electronAcceptor: "O₂",              pathway: "Glycolysis + PDC + TCA + ETC" },
            anaerobicRespiration: { ATP: "~15–25",  electronAcceptor: "NO₃⁻, SO₄²⁻ etc.", pathway: "Glycolysis + PDC + TCA + ETC (partial)" },
            fermentation:         { ATP: "2",       electronAcceptor: "Organic molecule", pathway: "Glycolysis only" }
        },
        nutritionalTypeComparison: {
            photoautotroph:   { energy: "Light",     carbon: "CO₂",     electronDonor: "H₂O / H₂S",  examples: "Cyanobacteria, purple sulfur bacteria" },
            photoheterotroph: { energy: "Light",     carbon: "Organic", electronDonor: "Organic",     examples: "Purple non-sulfur bacteria" },
            chemoautotroph:   { energy: "Inorganic", carbon: "CO₂",     electronDonor: "H₂, NH₃, S⁰", examples: "Nitrosomonas, Thiobacillus" },
            chemoheterotroph: { energy: "Organic",   carbon: "Organic", electronDonor: "Organic",     examples: "E. coli, Staphylococcus, most pathogens" }
        },
        commonMistakesToAvoid: [
            "Fermentation does NOT mean any anaerobic process — anaerobic respiration uses an ETC with a non-oxygen acceptor; fermentation does not use an ETC at all",
            "NADH and NADPH are NOT interchangeable — NADH feeds the ETC (catabolism); NADPH is the reductant for biosynthesis (anabolism)",
            "The TCA cycle does NOT directly produce most ATP — it produces NADH and FADH₂ which then feed the ETC",
            "Glycolysis produces pyruvate, NOT acetyl-CoA — pyruvate dehydrogenase is a separate committed step for aerobic respiration",
            "Chemoautotrophs fix CO₂ using chemical energy, NOT light — they are entirely independent of photosynthesis",
            "ATP yield figures (~30–32 per glucose) are theoretical maxima — actual in vivo yields are lower due to proton leakage and membrane inefficiencies",
            "The electron transport chain in bacteria is in the plasma membrane, NOT in mitochondria — prokaryotes have no mitochondria"
        ],
        connections: [
            "Enzyme kinetics: every step in glycolysis, the TCA cycle, and the ETC is enzyme-catalysed and regulated by the principles covered in the enzyme lesson",
            "Cell biology: the proton motive force requires an intact, impermeable membrane — membrane structure directly determines metabolic efficiency",
            "Infectious disease: most antibiotics target metabolic pathways unique to bacteria (cell wall, FAS II, shikimate)",
            "Ecology: chemoautotrophs and phototrophs are the primary producers at the base of many food chains in extreme environments",
            "Biotechnology: understanding metabolic pathways enables rational engineering of production strains for fermentation products",
            "Evolution: the last universal common ancestor likely had glycolysis and a rudimentary ETC — metabolic diversity evolved from this foundation"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate the complete flow of electrons from glucose through glycolysis, PDC, TCA, and ETC to O₂?",
            "Can you explain why fermentation yields only 2 ATP while aerobic respiration yields ~30–32?",
            "Can you classify a microorganism into one of four nutritional types given a description of its energy, carbon, and electron donor sources?",
            "Can you explain chemiosmosis and the role of the proton motive force in ATP synthesis?",
            "Can you name three industrial or environmental applications of specific microbial metabolic pathways?",
            "Can you explain why NAD⁺ regeneration is essential for continued glycolysis under anaerobic conditions?"
        ]
    }
},


geneticDisorders: {
    title: "Genetic Disorders: Inheritance, Mutation, and Molecular Basis",

    databaseLinks: {
        misconceptions: [
            'inheritancePatterns',
            'mutationTypes',
            'chromosomalAbnormalities',
            'molecularGenetics',
            'expressivityAndPenetrance'
        ],
        contextualScenarios: [
            'inheritancePatterns',
            'mutationTypes',
            'chromosomalAbnormalities',
            'molecularGenetics'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'inheritancePatterns',
            'mutationTypes',
            'chromosomalAbnormalities',
            'molecularGenetics'
        ]
    },

    conceptLinks: {
        "Genetic disorders arise from mutations or chromosomal abnormalities": {
            misconceptions:      ['mutationTypes', 'chromosomalAbnormalities'],
            scenarios:           ['mutationTypes', 'chromosomalAbnormalities'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['mutationTypes']
        },
        "Mendelian inheritance patterns determine disorder transmission": {
            misconceptions:      ['inheritancePatterns'],
            scenarios:           ['inheritancePatterns'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['inheritancePatterns']
        },
        "Mutations alter DNA sequence and can affect protein function": {
            misconceptions:      ['mutationTypes', 'molecularGenetics'],
            scenarios:           ['mutationTypes', 'molecularGenetics'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['mutationTypes', 'molecularGenetics']
        },
        "Chromosomal abnormalities arise from errors in cell division": {
            misconceptions:      ['chromosomalAbnormalities'],
            scenarios:           ['chromosomalAbnormalities'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['chromosomalAbnormalities']
        },
        "Penetrance and expressivity explain variable phenotypic outcomes": {
            misconceptions:      ['expressivityAndPenetrance', 'inheritancePatterns'],
            scenarios:           ['inheritancePatterns'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['inheritancePatterns']
        }
    },

    topicIntroduction: {
        overview: "Genetic disorders are conditions caused by abnormalities in an individual's genome — ranging from single nucleotide changes to entire chromosomal duplications or deletions. Understanding genetic disorders requires integrating knowledge of DNA structure, gene expression, cell division, and inheritance patterns. In this lesson, we explore the molecular origins of mutation, the rules governing inheritance, chromosomal disorders, and the tools used to diagnose and understand genetic disease.",
        whyItMatters: "Genetic disorders collectively affect millions of people worldwide and are among the leading causes of childhood mortality and lifelong disability. From prenatal screening to personalised cancer therapy, understanding the molecular and inheritance basis of genetic disorders is central to modern medicine, genetic counselling, and biotechnology. Every healthcare professional and biological scientist will encounter genetic disorders in their career.",
        bigPicture: "Genetic disorders arise when changes in DNA sequence or chromosome structure disrupt the normal production, structure, or regulation of proteins. Whether inherited across generations following Mendelian rules or arising de novo from errors in replication or cell division, all genetic disorders ultimately trace back to a change in the information content of DNA and its consequences for cellular function.",
        priorKnowledge: [
            "DNA structure: double helix, base pairing (A-T, G-C), antiparallel strands",
            "DNA replication: semiconservative, role of DNA polymerase, proofreading",
            "Transcription and translation: central dogma, codons, amino acids",
            "Mitosis and meiosis: purpose, stages, and outcomes",
            "Basic cell biology: chromosomes, homologous pairs, karyotype",
            "Mendelian genetics: alleles, dominant, recessive, homozygous, heterozygous"
        ],
        topicRoadmap: [
            "Types of mutation: point mutations, frameshift mutations, and their molecular consequences",
            "Chromosomal abnormalities: aneuploidy, deletions, duplications, inversions, translocations",
            "Autosomal dominant inheritance: patterns, pedigree analysis, examples",
            "Autosomal recessive inheritance: carriers, consanguinity, examples",
            "X-linked inheritance: X-linked recessive and dominant patterns",
            "Non-Mendelian inheritance: codominance, incomplete dominance, polygenic traits, mitochondrial inheritance",
            "Penetrance and expressivity: why genotype does not always predict phenotype",
            "Molecular diagnosis: karyotyping, PCR, DNA sequencing, FISH, microarray",
            "Genetic counselling: risk calculation, ethical considerations"
        ]
    },

    concepts: [
        "Genetic disorders arise from mutations or chromosomal abnormalities",
        "Mendelian inheritance patterns determine disorder transmission",
        "Mutations alter DNA sequence and can affect protein function",
        "Chromosomal abnormalities arise from errors in cell division",
        "Penetrance and expressivity explain variable phenotypic outcomes",
        "Molecular diagnostic tools identify genetic variants"
    ],

    theory: "Genetic disorders result from heritable or de novo alterations in genomic DNA — including point mutations, insertions, deletions, duplications, and chromosomal rearrangements — that disrupt gene function and manifest as clinical phenotypes transmitted according to Mendelian or non-Mendelian inheritance rules.",

    keyDefinitions: {
        "Mutation": "A heritable change in DNA sequence",
        "Point Mutation": "Change in a single nucleotide base pair",
        "Missense Mutation": "Point mutation causing substitution of one amino acid for another",
        "Nonsense Mutation": "Point mutation creating a premature stop codon, truncating the protein",
        "Silent Mutation": "Point mutation that does not change the amino acid (due to codon degeneracy)",
        "Frameshift Mutation": "Insertion or deletion of nucleotides not in multiples of three, altering the reading frame",
        "Aneuploidy": "Abnormal number of chromosomes (e.g. trisomy, monosomy)",
        "Nondisjunction": "Failure of chromosomes to separate during meiosis or mitosis",
        "Trisomy": "Presence of three copies of a chromosome instead of two",
        "Monosomy": "Presence of only one copy of a chromosome",
        "Deletion": "Loss of a chromosomal segment",
        "Duplication": "Extra copy of a chromosomal segment",
        "Inversion": "Reversal of a chromosomal segment's orientation",
        "Translocation": "Transfer of a segment from one chromosome to a non-homologous chromosome",
        "Autosomal Dominant": "One mutant allele is sufficient to cause the disorder",
        "Autosomal Recessive": "Two mutant alleles required; one copy produces a carrier",
        "X-linked Recessive": "Mutant allele on X chromosome; males (XY) are more severely affected",
        "Carrier": "Heterozygous individual who carries one recessive allele without expressing the disorder",
        "Penetrance": "Proportion of individuals with a genotype who show any phenotype at all",
        "Expressivity": "Degree of phenotypic expression in individuals who do show the phenotype",
        "Locus Heterogeneity": "Same phenotype caused by mutations at different genetic loci",
        "Allelic Heterogeneity": "Different mutations at the same locus producing the same or different phenotypes",
        "De Novo Mutation": "New mutation arising in an individual, not inherited from parents",
        "Proband": "The affected individual through whom a family is ascertained",
        "Karyotype": "Photographic display of chromosomes arranged by size and banding pattern"
    },

    mutationTypes: {
        pointMutations: {
            transitions: "Purine-to-purine or pyrimidine-to-pyrimidine substitution (A↔G, C↔T) — more common",
            transversions: "Purine-to-pyrimidine or vice versa (A/G ↔ C/T) — less common",
            consequences: {
                missense: "Amino acid change — may be benign, damaging, or disease-causing depending on position and physicochemical change",
                nonsense: "Premature stop codon — truncated, usually non-functional protein",
                silent: "Same amino acid — usually no phenotypic effect (codon degeneracy)",
                splicesite: "Disrupts pre-mRNA splicing — intron retained or exon skipped, frameshifting or abnormal protein"
            }
        },
        insertionsDeletions: {
            frameshift: "Number not divisible by three — alters downstream reading frame, often produces premature stop codon",
            inFrame: "Number divisible by three — adds or removes amino acids without altering reading frame",
            example: "Cystic fibrosis most common allele ΔF508 — in-frame deletion of three nucleotides removing phenylalanine 508"
        },
        expandingRepeats: {
            mechanism: "Tandem repeat sequences that expand beyond a threshold during replication",
            examples: {
                huntingtons: "CAG repeat expansion in HTT gene (>36 repeats) — toxic gain-of-function polyglutamine protein",
                fragilex: "CGG repeat expansion in FMR1 gene (>200 repeats) — methylation and gene silencing"
            },
            anticipation: "Tendency for repeat expansions to worsen in successive generations as repeat length increases during gametogenesis"
        },
        chromosomalMutations: {
            nondisjunction: "Failure of homologs or sister chromatids to separate — produces aneuploid gametes",
            deletionSyndrome: "e.g. cri du chat (5p deletion), DiGeorge syndrome (22q11 deletion)",
            translocation: "Robertsonian translocation most common — acrocentric chromosomes fuse, predisposing to trisomy 21"
        }
    },

    inheritancePatterns: {
        autosomalDominant: {
            rules: [
                "One mutant allele sufficient for phenotype",
                "Affected individuals usually have one affected parent (vertical transmission)",
                "Males and females equally affected",
                "50% offspring of affected × unaffected cross are affected"
            ],
            mechanisms: [
                "Haploinsufficiency: one functional copy insufficient for normal function",
                "Dominant negative: mutant protein interferes with wild-type protein function",
                "Gain of function: mutant protein acquires toxic new activity"
            ],
            examples: {
                huntingtonDisease: "CAG repeat expansion — gain-of-function toxic polyglutamine",
                marfanSyndrome: "FBN1 mutation — dominant negative fibrillin-1 in connective tissue",
                achondroplasia: "FGFR3 gain-of-function — constitutively active receptor inhibits bone growth",
                brca1: "BRCA1 — tumour suppressor, haploinsufficiency predisposes to cancer"
            }
        },
        autosomalRecessive: {
            rules: [
                "Two mutant alleles required for phenotype",
                "Carriers (heterozygotes) are phenotypically normal",
                "25% of offspring from carrier × carrier cross are affected",
                "More common in consanguineous families",
                "Can appear to skip generations (horizontal pattern)"
            ],
            mechanisms: [
                "Loss of function in both alleles — no functional protein produced",
                "Enzyme deficiencies most common: substrate accumulates, product absent"
            ],
            examples: {
                cysticFibrosis: "CFTR mutation — defective chloride channel; thick mucus in airways and pancreas",
                phenylketonuria: "PAH mutation — phenylalanine hydroxylase deficiency; toxic phenylalanine accumulation",
                sickleCellDisease: "HBB Glu6Val missense — abnormal haemoglobin polymerises under low oxygen",
                taysachs: "HEXA mutation — hexosaminidase A deficiency; GM2 ganglioside accumulation in neurons"
            }
        },
        xLinked: {
            recessive: {
                rules: [
                    "Males (XY) have one X — a single mutant allele causes disease",
                    "Females (XX) are usually carriers — one normal allele compensates",
                    "Affected males cannot pass disorder to sons (sons receive Y)",
                    "All daughters of affected males are obligate carriers"
                ],
                examples: {
                    duchenneMusularDystrophy: "DMD mutation — absent dystrophin; progressive muscle degeneration",
                    haemophiliaA: "F8 mutation — absent factor VIII; impaired blood clotting",
                    g6pdDeficiency: "G6PD mutation — haemolytic anaemia triggered by oxidative stress"
                }
            },
            dominant: {
                rules: [
                    "One mutant allele on X is sufficient",
                    "Affects both males and females — males often more severely affected",
                    "Affected father passes to all daughters but no sons"
                ],
                examples: {
                    rettSyndrome: "MECP2 mutation — neurological disorder almost exclusively in females (lethal in males)"
                }
            }
        },
        nonMendelian: {
            codominance: "Both alleles expressed simultaneously — ABO blood group (IA and IB both expressed in IAIB)",
            incompleteDominance: "Heterozygote shows intermediate phenotype — familial hypercholesterolaemia heterozygotes have intermediate LDL levels",
            mitochondrialInheritance: {
                rules: [
                    "Inherited exclusively through the maternal line",
                    "All children of affected mother may be affected",
                    "Affected father cannot transmit to any child",
                    "Heteroplasmy: mixture of normal and mutant mitochondria"
                ],
                examples: "MELAS syndrome, Leber's hereditary optic neuropathy (LHON)"
            },
            genomicImprinting: {
                mechanism: "Gene expression depends on parent of origin due to epigenetic methylation",
                examples: {
                    praderWilli: "Loss of paternally expressed genes on chromosome 15q11-13",
                    angelman: "Loss of maternally expressed UBE3A on chromosome 15q11-13"
                }
            },
            uniparentalDisomy: "Both copies of a chromosome pair inherited from one parent — can unmask recessive alleles or cause imprinting disorders"
        }
    },

    chromosomalAbnormalities: {
        numerical: {
            trisomy21: {
                cause: "Nondisjunction in meiosis I (most common), producing trisomy 21",
                features: "Down syndrome — intellectual disability, characteristic facial features, cardiac defects, increased Alzheimer's risk",
                riskFactor: "Maternal age — increases with age due to prolonged meiotic arrest"
            },
            trisomy18: {
                cause: "Nondisjunction producing trisomy 18",
                features: "Edwards syndrome — severe intellectual disability, cardiac and renal defects; poor prognosis"
            },
            trisomy13: {
                cause: "Nondisjunction producing trisomy 13",
                features: "Patau syndrome — severe malformations including holoprosencephaly; poor prognosis"
            },
            turnSyndrome: {
                karyotype: "45,X — monosomy X",
                features: "Female phenotype, short stature, gonadal dysgenesis, webbed neck, cardiac defects",
                cause: "Loss of one sex chromosome, often paternal X"
            },
            klinefelter: {
                karyotype: "47,XXY",
                features: "Male phenotype, tall stature, hypogonadism, infertility, mild learning difficulties"
            }
        },
        structural: {
            robertsonianTranslocation: {
                mechanism: "Two acrocentric chromosomes (13, 14, 15, 21, 22) fuse at centromere — carrier has 45 chromosomes but usually normal phenotype",
                risk: "Carrier of rob(14;21) has 10–15% risk of Down syndrome offspring"
            },
            deletionSyndromes: {
                cri_du_chat: "5p deletion — high-pitched cry, intellectual disability",
                digeorge: "22q11.2 deletion — cardiac defects, immune deficiency, hypocalcaemia, palatal abnormalities"
            },
            microdeletionSyndromes: "Detected by FISH or microarray, too small for standard karyotype — Williams syndrome (7q11.23), Smith-Magenis syndrome (17p11.2)"
        }
    },

    penetranceAndExpressivity: {
        penetrance: {
            definition: "Proportion of individuals with the disease genotype who show ANY signs of the disorder",
            complete: "100% penetrance — every carrier of the genotype shows the phenotype",
            incomplete: "Less than 100% — some carriers show no signs at all",
            example: "BRCA1 — ~72% lifetime penetrance for breast cancer; not all carriers develop cancer",
            clinicalImplication: "Incomplete penetrance explains apparent skipping of generations in pedigrees"
        },
        expressivity: {
            definition: "Degree of phenotypic expression AMONG those who do show the phenotype",
            variable: "Different affected individuals show different severity",
            example: "Neurofibromatosis type 1 — some individuals have only café-au-lait spots; others develop multiple neurofibromas and complications",
            clinicalImplication: "Variable expressivity explains why family members with the same mutation are not equally affected"
        },
        modifyingFactors: [
            "Modifier genes at other loci",
            "Epigenetic regulation",
            "Environmental exposures",
            "Stochastic (random) developmental variation",
            "Age-dependent penetrance (e.g. Huntington's onset typically in 30s–50s)"
        ]
    },

    molecularDiagnosis: {
        karyotyping: {
            method: "Chromosomes stained (G-banding) and photographed at metaphase; arranged in pairs by size",
            resolution: "Detects abnormalities >5–10 Mb; misses small deletions and point mutations",
            uses: "Numerical abnormalities, large structural rearrangements, translocations"
        },
        fish: {
            method: "Fluorescent DNA probe hybridises to specific chromosomal region",
            resolution: "Detects deletions/duplications ~100 kb–5 Mb",
            uses: "Microdeletion syndromes (DiGeorge, Williams), translocation confirmation"
        },
        pcr: {
            method: "Amplifies specific DNA sequence for analysis",
            uses: "Detect known point mutations, repeat expansions, presence/absence of a sequence",
            limitation: "Only detects what you test for — requires prior knowledge of mutation"
        },
        sangerSequencing: {
            method: "Dideoxy chain-termination sequencing of a single gene or region",
            resolution: "Single nucleotide resolution",
            uses: "Confirm specific mutations, sequence candidate genes"
        },
        nextGenerationSequencing: {
            wholeExomeSequencing: "Sequences all protein-coding exons — identifies novel mutations",
            wholeGenomeSequencing: "Sequences entire genome — detects structural variants, intronic mutations",
            panelTesting: "Targeted sequencing of disease-relevant genes — used clinically for inherited cancer, cardiac, neurological panels"
        },
        chromosomalMicroarray: {
            method: "Hybridisation of DNA to thousands of probes across genome — detects copy number variants",
            resolution: "Kilobase range — far more sensitive than karyotype for deletions/duplications",
            uses: "First-line test for developmental delay, autism, congenital abnormalities"
        }
    },

    applications: [
        "Genetic counselling: recurrence risk calculation for families",
        "Prenatal diagnosis: amniocentesis, chorionic villus sampling, cell-free fetal DNA",
        "Newborn screening: Guthrie card — PKU, congenital hypothyroidism, metabolic disorders",
        "Cascade testing: identifying at-risk relatives of a diagnosed proband",
        "Pharmacogenomics: genotype-guided drug selection and dosing",
        "Gene therapy: correcting disease-causing mutations — approved therapies for SMA, haemophilia, RPE65 blindness",
        "Cancer genetics: somatic mutation profiling for targeted therapy",
        "Forensic genetics: STR profiling for identification"
    ],

    topicSummary: {
        coreInsights: [
            "Genetic disorders arise from mutations ranging in scale from a single nucleotide change to entire chromosomal abnormalities — the molecular consequence determines the clinical severity.",
            "The type of mutation (missense, nonsense, frameshift, splice site) predicts the likely effect on protein: nonsense and frameshift mutations typically produce non-functional protein; missense mutations vary widely in effect.",
            "Mendelian inheritance rules predict the probability of disorder transmission — autosomal dominant (50%), autosomal recessive from two carriers (25%), X-linked recessive in males (50% of sons of a carrier mother).",
            "Chromosomal aneuploidy arises from nondisjunction during meiosis and is the leading cause of pregnancy loss; surviving aneuploidies (trisomy 21, 18, 13; sex chromosome abnormalities) cause recognisable clinical syndromes.",
            "Penetrance and expressivity explain why the same genotype does not always produce the same phenotype — these concepts are essential for genetic counselling and interpreting pedigrees.",
            "Non-Mendelian inheritance — mitochondrial, imprinting, trinucleotide repeat expansion with anticipation — produces patterns that deviate from simple dominant/recessive rules and require separate explanatory frameworks.",
            "Molecular diagnosis has been transformed by next-generation sequencing — whole exome sequencing can identify causative mutations in previously undiagnosed disorders.",
            "Genetic counselling integrates molecular diagnosis, recurrence risk, penetrance data, and ethical considerations to support informed decision-making."
        ],
        keyEquations: {
            carrierFrequency: "Hardy-Weinberg: q² = disease frequency; q = allele frequency; carrier frequency = 2pq ≈ 2q (when p ≈ 1)",
            riskFromCarrierCross: "Carrier × carrier: 1/4 affected, 1/2 carriers, 1/4 homozygous normal",
            xLinkedRisk: "Carrier female × normal male: 1/2 sons affected, 1/2 daughters carriers",
            bayesianRisk: "Posterior probability = (prior × conditional) / sum of all (prior × conditional)"
        },
        inheritanceComparison: {
            autosomalDominant:  { allelesRequired: "1", carriersAffected: "Yes", sexBias: "None",         generationalPattern: "Vertical — every generation",   exampleDisorder: "Huntington's disease" },
            autosomalRecessive: { allelesRequired: "2", carriersAffected: "No",  sexBias: "None",         generationalPattern: "Horizontal — siblings affected",  exampleDisorder: "Cystic fibrosis" },
            xLinkedRecessive:   { allelesRequired: "1 (males)", carriersAffected: "No (females)",  sexBias: "Males>>females", generationalPattern: "Skip generation via carrier female", exampleDisorder: "Duchenne MD" },
            mitochondrial:      { allelesRequired: "Variable (heteroplasmy)", carriersAffected: "Yes", sexBias: "Maternal only", generationalPattern: "All children of affected mother", exampleDisorder: "MELAS" }
        },
        commonMistakesToAvoid: [
            "Autosomal recessive does NOT mean the disorder skips a generation because of a pattern rule — it does so because carriers are phenotypically normal and only manifest when two carriers mate",
            "X-linked recessive daughters of an affected father are NOT affected — they are obligate carriers (they receive the mutant X but also a normal X from their mother)",
            "Penetrance and expressivity are NOT the same — penetrance is whether the phenotype appears at all; expressivity is how severely it appears in those who are affected",
            "A de novo mutation means neither parent carries the allele — this is not the same as autosomal recessive with undetected carrier parents",
            "Mitochondrial inheritance is maternal, NOT X-linked — affected fathers cannot transmit mtDNA disorders to any children",
            "Chromosomal translocation carriers have 45 chromosomes but are usually phenotypically normal — they are at risk for unbalanced offspring, not personally affected"
        ],
        connections: [
            "Biochemistry: enzyme deficiency disorders (PKU, Gaucher's, Tay-Sachs) directly connect mutation → absent enzyme → substrate accumulation",
            "Cell biology: meiotic nondisjunction connects to aneuploidy; mitotic errors produce somatic mosaicism",
            "Pharmacology: pharmacogenomics connects genetic variation to drug metabolism (CYP2D6, TPMT) and targeted cancer therapy",
            "Embryology: imprinting and developmental gene regulation connect to Prader-Willi and Angelman syndromes",
            "Immunology: DiGeorge syndrome (22q11 deletion) connects chromosomal deletion to thymic aplasia and T-cell deficiency",
            "Oncology: tumour suppressor genes (BRCA1, RB1, TP53) connect inherited predisposition mutations to two-hit hypothesis"
        ],
        examReadinessChecklist: [
            "Can you draw and interpret a pedigree for each of the four main Mendelian inheritance patterns?",
            "Can you predict offspring ratios from a carrier × carrier cross and a carrier × affected cross?",
            "Can you explain the molecular consequence of each mutation type (missense, nonsense, frameshift, splice site)?",
            "Can you distinguish penetrance from expressivity with a clinical example of each?",
            "Can you name the cause, karyotype, and key features of trisomy 21, 18, 13, Turner's, and Klinefelter syndromes?",
            "Can you explain why X-linked recessive disorders predominantly affect males?",
            "Can you identify the appropriate molecular diagnostic test for a given clinical scenario?",
            "Can you apply Hardy-Weinberg to calculate carrier frequency from disease incidence?"
        ]
    }
},



chromosomesKaryotypes: {
    title: "Chromosomes and Karyotypes: Genome Organisation and Analysis",

    databaseLinks: {
        misconceptions: [
            'chromosomeStructure',
            'karyotypeAnalysis',
            'chromosomalAbnormalities',
            'meiosisAndSegregation',
            'sexDetermination'
        ],
        contextualScenarios: [
            'chromosomeStructure',
            'karyotypeAnalysis',
            'chromosomalAbnormalities',
            'meiosisAndSegregation'
        ],
        studyTips: [
            'diagrams',
            'comparisonTables',
            'specimens',
            'flashcards',
            'mnemonics',
            'practiceRoutines',
            'dissectionAndExperiment'
        ],
        assessmentRubrics: [
            'remember',
            'understand',
            'apply',
            'analyze',
            'evaluate',
            'create'
        ],
        assessmentQuestions: [
            'chromosomeStructure',
            'karyotypeAnalysis',
            'chromosomalAbnormalities',
            'meiosisAndSegregation'
        ]
    },

    conceptLinks: {
        "Chromosomes are organised structures of DNA and protein": {
            misconceptions:      ['chromosomeStructure'],
            scenarios:           ['chromosomeStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['chromosomeStructure']
        },
        "Karyotypes display chromosomes arranged by size, shape, and banding pattern": {
            misconceptions:      ['karyotypeAnalysis'],
            scenarios:           ['karyotypeAnalysis'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['karyotypeAnalysis']
        },
        "Chromosomal abnormalities arise from errors in number or structure": {
            misconceptions:      ['chromosomalAbnormalities'],
            scenarios:           ['chromosomalAbnormalities'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['chromosomalAbnormalities']
        },
        "Meiotic non-disjunction is the primary cause of aneuploidy": {
            misconceptions:      ['meiosisAndSegregation', 'chromosomalAbnormalities'],
            scenarios:           ['meiosisAndSegregation'],
            studyTips:           ['diagrams', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['meiosisAndSegregation']
        },
        "Sex chromosome systems determine biological sex in humans": {
            misconceptions:      ['sexDetermination'],
            scenarios:           ['karyotypeAnalysis'],
            studyTips:           ['comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['karyotypeAnalysis']
        }
    },

    topicIntroduction: {
        overview: "Chromosomes are the physical carriers of hereditary information — highly organised complexes of DNA and protein that condense, segregate, and replicate with extraordinary fidelity during every cell division. The karyotype is the complete visual representation of an organism's chromosome complement, arranged by size, centromere position, and banding pattern. In this lesson, we explore chromosome structure from the nucleosome to the chromatid, the methodology and clinical use of karyotyping, and the consequences of chromosomal abnormalities in number and structure.",
        whyItMatters: "Karyotyping is one of the most powerful diagnostic tools in clinical genetics. Down syndrome, Turner syndrome, Klinefelter syndrome, and numerous structural rearrangements are identified directly from karyotype analysis. Prenatal karyotyping guides clinical decisions for millions of families globally. Understanding chromosome organisation also underpins our understanding of cancer cytogenetics, where chromosomal rearrangements drive oncogenesis — the Philadelphia chromosome in CML being a landmark example.",
        bigPicture: "DNA alone is not a chromosome. The journey from a 2-metre linear DNA molecule to a compact, segregable chromosome involves multiple levels of compaction — nucleosome, 30 nm fibre, loop domains, and ultimately the fully condensed metaphase chromosome visible under the light microscope. The karyotype captures this fully condensed state. Errors in chromosome number or structure — whether inherited or arising de novo — produce predictable phenotypic consequences that connect chromosome biology to clinical medicine, developmental biology, and evolutionary genomics.",
        priorKnowledge: [
            "DNA structure: double helix, base pairing, antiparallel strands",
            "Cell cycle: G1, S, G2, M phases and their significance",
            "Mitosis: stages, sister chromatid separation, ploidy maintenance",
            "Meiosis: two divisions, crossing over, haploid gamete production",
            "Basic genetics: alleles, homologous chromosomes, dominant/recessive inheritance",
            "Protein structure: histones as basic proteins with positive charge"
        ],
        topicRoadmap: [
            "Chromosome structure: DNA compaction from nucleosome to metaphase chromosome",
            "Chromosome anatomy: centromere, telomere, chromatid, arms, banding",
            "Karyotype construction: G-banding, FISH, spectral karyotyping",
            "Human karyotype: autosomes, sex chromosomes, chromosome nomenclature",
            "Numerical abnormalities: polyploidy, aneuploidy, non-disjunction",
            "Structural abnormalities: deletion, duplication, inversion, translocation",
            "Clinical syndromes: Down, Turner, Klinefelter, Patau, Edwards",
            "Prenatal diagnosis: amniocentesis, CVS, NIPT",
            "Cancer cytogenetics: chromosomal rearrangements in malignancy"
        ]
    },

    concepts: [
        "Chromosomes are organised structures of DNA and protein",
        "DNA is compacted through multiple levels of organisation to form chromosomes",
        "Karyotypes display chromosomes arranged by size, shape, and banding pattern",
        "Human somatic cells contain 46 chromosomes (44 autosomes + 2 sex chromosomes)",
        "Chromosomal abnormalities arise from errors in number or structure",
        "Meiotic non-disjunction is the primary cause of aneuploidy",
        "Sex chromosome systems determine biological sex in humans",
        "Structural rearrangements include deletions, duplications, inversions, and translocations"
    ],

    theory: "Chromosomes are the physical basis of heredity — linear complexes of DNA and histone proteins packaged into increasingly compact structures. Their accurate replication and segregation during cell division ensures genomic stability. Deviations in chromosome number or structure, whether constitutional or somatic, underlie a spectrum of developmental disorders and malignancies.",

    keyDefinitions: {
        "Chromosome": "A linear DNA molecule complexed with histone and non-histone proteins, visible as a distinct structure during cell division",
        "Chromatid": "One of two identical copies of a replicated chromosome, joined at the centromere prior to separation",
        "Centromere": "Constricted region of the chromosome where spindle fibres attach; point of sister chromatid cohesion",
        "Telomere": "Repetitive DNA sequence (TTAGGG in humans) capping chromosome ends, protecting against degradation and end-fusion",
        "Nucleosome": "Fundamental unit of chromatin: ~146 bp of DNA wound around an octamer of histone proteins (H2A, H2B, H3, H4, × 2)",
        "Chromatin": "Complex of DNA and protein (histones and non-histones) that constitutes chromosomes",
        "Euchromatin": "Loosely packed, transcriptionally active chromatin",
        "Heterochromatin": "Tightly packed, transcriptionally inactive chromatin (constitutive: always condensed; facultative: conditionally condensed)",
        "Karyotype": "The complete chromosome complement of a cell, arranged by size, centromere position, and banding pattern",
        "Diploid (2n)": "Cell containing two complete sets of chromosomes (somatic cells in humans: 2n = 46)",
        "Haploid (n)": "Cell containing one complete set of chromosomes (gametes in humans: n = 23)",
        "Autosome": "Any chromosome other than the sex chromosomes (humans have 22 pairs of autosomes)",
        "Aneuploid": "Cell with a chromosome number that is not an exact multiple of the haploid number",
        "Polyploid": "Cell with more than two complete chromosome sets (e.g. triploid 3n, tetraploid 4n)",
        "Non-disjunction": "Failure of homologous chromosomes (meiosis I) or sister chromatids (meiosis II or mitosis) to separate correctly",
        "Trisomy": "Presence of three copies of a particular chromosome (2n + 1)",
        "Monosomy": "Presence of only one copy of a particular chromosome (2n − 1)",
        "Translocation": "Transfer of chromosomal segment from one chromosome to a non-homologous chromosome",
        "Inversion": "Reversal of a chromosomal segment; may be paracentric (excludes centromere) or pericentric (includes centromere)",
        "Deletion": "Loss of a chromosomal segment",
        "Duplication": "Presence of an additional copy of a chromosomal segment"
    },

    chromosomeStructure: {
        levelOfCompaction: {
            level1_nucleosome: {
                description: "147 bp DNA wound ~1.7 times around a histone octamer (H2A×2, H2B×2, H3×2, H4×2); linker DNA (~20–80 bp) connects nucleosomes; H1 histone seals the DNA at the entry/exit point",
                diameter: "~11 nm ('beads on a string')",
                compactionRatio: "~7-fold relative to naked DNA"
            },
            level2_30nmFibre: {
                description: "Nucleosomes folded into a higher-order helical or zigzag fibre; exact structure debated",
                diameter: "~30 nm",
                compactionRatio: "~40-fold"
            },
            level3_loopDomains: {
                description: "30 nm fibre organised into loops of 40–100 kb anchored to a protein scaffold (loop domains); basis of topologically associating domains (TADs)",
                compactionRatio: "~1000-fold"
            },
            level4_metaphaseChromosome: {
                description: "Maximum compaction achieved in mitosis/meiosis; loops further coiled and stacked",
                diameter: "~700 nm",
                compactionRatio: "~10,000–20,000-fold relative to naked DNA"
            }
        },
        chromosomeAnatomy: {
            centromere: {
                function: "Attachment site for kinetochore and spindle microtubules; ensures accurate chromosome segregation",
                sequence: "Composed largely of repetitive alpha-satellite DNA in humans",
                position: "Defines chromosome type: metacentric (middle), submetacentric (off-centre), acrocentric (near end), telocentric (at end — rare in humans)"
            },
            telomere: {
                sequence: "TTAGGG repeats (hundreds to thousands) in humans",
                function: "Protects chromosome ends from degradation, fusion, and end-replication problem",
                telomerase: "Enzyme (RNA-dependent DNA polymerase) that extends telomeres in germline and stem cells; repressed in most somatic cells; reactivated in ~90% of cancers"
            },
            chromosomeArms: {
                pArm: "Short arm (from French 'petit')",
                qArm: "Long arm",
                nomenclature: "e.g. 5p15.3 = chromosome 5, short arm, region 1, band 5, sub-band 3"
            }
        },
        histoneCode: {
            description: "Post-translational modifications of histone tails (acetylation, methylation, phosphorylation, ubiquitination) regulate chromatin accessibility and gene expression",
            acetylation: "Generally activates transcription by neutralising positive histone charge, loosening DNA binding",
            methylation: "Can activate or repress depending on the residue and degree of methylation",
            significance: "Epigenetic regulation — gene expression changes without DNA sequence change"
        }
    },

    karyotypeAnalysis: {
        methodology: {
            cellSource: "Peripheral blood lymphocytes (most common), bone marrow, amniocytes (prenatal), chorionic villi, skin fibroblasts",
            cellCulture: "Cells stimulated to divide (e.g. PHA for lymphocytes), cultured 48–72 hours",
            arrest: "Colchicine/colcemid added to arrest cells in metaphase (depolymerises spindle, prevents separation)",
            hypotonicTreatment: "Hypotonic solution (e.g. 0.075 M KCl) causes cells to swell, spreading chromosomes",
            fixation: "Carnoy's fixative (methanol:acetic acid 3:1) preserves chromosome morphology",
            spreading: "Cell suspension dropped onto slides; air-drying spreads chromosomes",
            staining: "G-banding (Giemsa after trypsin treatment) produces characteristic dark (AT-rich, late-replicating) and light (GC-rich, early-replicating) bands"
        },
        bandingTechniques: {
            Gbanding: {
                method: "Trypsin digestion followed by Giemsa stain",
                result: "~400–800 bands per haploid set; dark bands = AT-rich, heterochromatic; light bands = GC-rich, euchromatic",
                use: "Standard clinical karyotype"
            },
            Rbanding: {
                method: "Reverse of G-banding (heat denaturation + Giemsa)",
                result: "Dark bands are the G-band light regions; highlights GC-rich regions",
                use: "Useful for detecting subtle abnormalities near chromosome ends"
            },
            Cbanding: {
                method: "Barium hydroxide treatment + Giemsa",
                result: "Stains constitutive heterochromatin (centromeres, chromosome 1, 9, 16 heterochromatin, Yq12)",
                use: "Identifies centromeric regions and heterochromatin polymorphisms"
            },
            FISH: {
                method: "Fluorescence In Situ Hybridisation — fluorescently labelled DNA probes hybridise to complementary chromosomal sequences",
                types: "Whole chromosome paints, centromere probes, locus-specific probes",
                use: "Detects microdeletions, translocations, gene amplification; can be applied to non-dividing cells",
                advantage: "Far higher resolution than standard karyotyping; detects abnormalities below the light microscope limit"
            },
            spectralKaryotyping: {
                method: "24-colour FISH using combinatorial fluorescent labelling of all 24 human chromosomes",
                use: "Identifies all chromosomes simultaneously; ideal for detecting complex rearrangements and translocations in cancer"
            },
            arrayComparativeGenomicHybridisation: {
                method: "Patient and reference DNA differentially labelled and hybridised to DNA microarray",
                resolution: "Detects copy number variants (CNVs) at kilobase resolution",
                limitation: "Does not detect balanced rearrangements (inversions, balanced translocations)"
            }
        },
        humanKaryotypeConventions: {
            totalChromosomes: "46 in diploid somatic cells",
            autosomes: "22 pairs, numbered 1–22 in descending order of size (approximately)",
            sexChromosomes: "XX (female) or XY (male)",
            notation: {
                normal: "46,XX (normal female) or 46,XY (normal male)",
                trisomy21: "47,XX,+21 or 47,XY,+21",
                turnerSyndrome: "45,X",
                klinefelter: "47,XXY",
                translocation: "46,XX,t(9;22)(q34;q11.2) — Philadelphia chromosome carrier"
            },
            groupings: {
                A: "Chromosomes 1–3 (large metacentric/submetacentric)",
                B: "Chromosomes 4–5 (large submetacentric)",
                C: "Chromosomes 6–12 and X (medium submetacentric)",
                D: "Chromosomes 13–15 (medium acrocentric with satellites)",
                E: "Chromosomes 16–18 (smaller)",
                F: "Chromosomes 19–20 (small metacentric)",
                G: "Chromosomes 21–22 and Y (small acrocentric with satellites)"
            }
        }
    },

    numericalAbnormalities: {
        polyploidy: {
            definition: "Complete extra sets of chromosomes",
            triploidy: {
                number: "3n = 69",
                origin: "Failure of one meiotic division (digyny) or fertilisation by two sperm (diandry)",
                outcome: "Incompatible with postnatal survival in humans; causes early miscarriage"
            },
            tetraploidy: {
                number: "4n = 92",
                origin: "Failure of cleavage after fertilisation or endoreduplication",
                outcome: "Lethal; found rarely in spontaneous abortuses"
            },
            note: "Polyploidy is common and often beneficial in plants (e.g. wheat is hexaploid, 6n = 42)"
        },
        aneuploidy: {
            definition: "Chromosome number is not a multiple of the haploid number",
            mechanism: "Non-disjunction during meiosis I or II (most common) or mitosis (somatic mosaicism)",
            trisomy: {
                definition: "2n + 1 = 47 in humans",
                viableTrisomies: "Trisomy 21 (most common live-born), trisomy 18, trisomy 13; sex chromosome trisomies (XXX, XXY, XYY)",
                maternalAgeEffect: "Risk increases with maternal age — primarily due to extended meiotic arrest in oocytes (dictyotene stage) leading to premature cohesion loss"
            },
            monosomy: {
                definition: "2n − 1 = 45 in humans",
                viableMonosomy: "Monosomy X (Turner syndrome, 45,X) is the only viable autosomal/sex chromosome monosomy; all autosomal monosomies are lethal",
                reason: "Haplo-insufficiency of autosomal genes is generally lethal; the X chromosome has dosage compensation (X-inactivation)"
            },
            mosaicism: {
                definition: "Two or more cell populations with different chromosome complements in the same individual",
                origin: "Mitotic non-disjunction after fertilisation",
                clinicalEffect: "Often milder phenotype than full aneuploidy; degree depends on proportion of abnormal cells and tissue distribution"
            }
        },
        nonDisjunctionMechanisms: {
            meiosisI: {
                description: "Homologous chromosomes fail to separate at meiosis I",
                result: "Both secondary oocytes/spermatocytes receive both homologues of the affected pair; the other receives neither",
                gametes: "n+1 (both homologues) and n−1 (no copy) gametes; if fertilised by normal n gamete: trisomy or monosomy"
            },
            meiosisII: {
                description: "Sister chromatids fail to separate at meiosis II",
                result: "One gamete receives two copies of the same chromatid; another receives no copy; two normal gametes also produced",
                gametes: "n+1 (two identical chromatids) and n−1 gametes; if fertilised: trisomy with identical copies, or monosomy"
            },
            distinction: "Meiosis I non-disjunction produces gametes with both homologues (heterozygous trisomy after fertilisation); meiosis II produces gametes with two identical chromatids (homozygous for the extra copy)"
        }
    },

    structuralAbnormalities: {
        deletion: {
            definition: "Loss of a chromosome segment",
            terminal: "Loss of the segment from one chromosome end",
            interstitial: "Loss of an internal segment with repair of the remaining ends",
            examples: [
                "Cri-du-chat syndrome: deletion of 5p (46,XX or XY, del(5p)); characteristic high-pitched cry",
                "Williams syndrome: microdeletion of 7q11.23 (elastin gene region)",
                "DiGeorge syndrome: microdeletion of 22q11.2 (often below conventional karyotype resolution; requires FISH)"
            ]
        },
        duplication: {
            definition: "Extra copy of a chromosomal segment (direct or inverted)",
            consequence: "Gene dosage increase; generally less harmful than deletion of equivalent segment",
            example: "Charcot-Marie-Tooth disease type 1A: duplication of 17p12 (PMP22 gene)"
        },
        inversion: {
            definition: "Segment excised and reinserted in reversed orientation",
            paracentric: {
                definition: "Both break points on the same arm; does not include centromere",
                consequence: "Carrier usually phenotypically normal; recombinant chromosomes from crossover within inversion loop produce acentric or dicentric chromosomes — often lethal in progeny"
            },
            pericentric: {
                definition: "Break points on both arms; includes centromere",
                consequence: "Carrier usually normal; crossover within inversion loop produces recombinant chromosomes with duplicated and deleted segments — risk of abnormal offspring"
            }
        },
        translocation: {
            reciprocal: {
                definition: "Exchange of segments between two non-homologous chromosomes",
                carrierStatus: "Balanced carriers phenotypically normal (no net gain or loss of genetic material); at risk of unbalanced offspring",
                example: "t(9;22)(q34;q11.2) — Philadelphia chromosome (balanced in CML cells: BCR-ABL fusion oncogene)"
            },
            robertsonian: {
                definition: "Fusion of two acrocentric chromosomes (13, 14, 15, 21, 22) at their centromeres; short arms lost",
                karyotype: "Carrier has 45 chromosomes (two acrocentrics replaced by one large chromosome)",
                clinicalImportance: "Rob(14;21) carrier has elevated risk of trisomy 21 offspring — translocation Down syndrome",
                inheritance: "Unlike standard trisomy 21, translocation Down syndrome can be familial"
            }
        },
        isochromosome: {
            definition: "Chromosome with two identical arms (both p-arms or both q-arms) — formed by misdivision of centromere",
            example: "i(17q) in medulloblastoma and other cancers; i(Xq) in some Turner syndrome variants"
        },
        ringChromosome: {
            definition: "Both telomeres lost and chromosome ends fuse to form a ring",
            consequence: "Instability during cell division; variable phenotype depending on how much material was lost"
        }
    },

    clinicalSyndromes: {
        trisomy21_downSyndrome: {
            karyotype: "47,XX,+21 or 47,XY,+21 (95% of cases); translocation (4%); mosaic (1%)",
            frequency: "~1 in 700 live births; most common viable autosomal trisomy",
            maternalAgeRisk: "~1 in 1500 at age 20; ~1 in 100 at age 40; ~1 in 30 at age 45",
            features: "Intellectual disability, characteristic facial features, hypotonia, congenital heart defects (~50%), increased risk of leukaemia and early-onset Alzheimer's disease",
            origin: "~95% due to maternal meiosis I non-disjunction"
        },
        trisomy18_edwardsSyndrome: {
            karyotype: "47,XX,+18 or 47,XY,+18",
            frequency: "~1 in 5000 live births",
            features: "Severe intellectual disability, clenched fists with overlapping fingers, rocker-bottom feet, cardiac defects; 90% die within first year"
        },
        trisomy13_patauSyndrome: {
            karyotype: "47,XX,+13 or 47,XY,+13",
            frequency: "~1 in 10,000 live births",
            features: "Holoprosencephaly, midline facial defects, polydactyly, cardiac defects; 80% die within first month"
        },
        turnerSyndrome: {
            karyotype: "45,X (most common); mosaics (45,X/46,XX); isochromosome Xq; ring X",
            frequency: "~1 in 2500 female live births; most 45,X conceptuses miscarry (~99%)",
            features: "Short stature, gonadal dysgenesis (streak gonads → infertility), webbed neck, shield chest, coarctation of aorta; normal intelligence in most",
            xInactivation: "45,X individuals cannot inactivate one X (there is only one) — haplo-insufficiency of SHOX gene on Xp explains short stature"
        },
        klinefelterSyndrome: {
            karyotype: "47,XXY (most common); variants: 48,XXXY; 48,XXYY",
            frequency: "~1 in 650 male live births; most common sex chromosome aneuploidy",
            features: "Small testes, azoospermia, gynaecomastia, tall stature, learning difficulties in some; often undiagnosed until investigated for infertility",
            xInactivation: "Extra X chromosomes are inactivated (Barr bodies visible: n−1 Barr bodies per cell)"
        },
        tripleX: {
            karyotype: "47,XXX",
            frequency: "~1 in 1000 female live births",
            features: "Usually phenotypically normal or mild learning difficulties; fertile; often undiagnosed"
        },
        xyyMale: {
            karyotype: "47,XYY",
            frequency: "~1 in 1000 male live births",
            features: "Tall stature, often undiagnosed; normal fertility; mild learning difficulties in some; historical association with criminality was a statistical artefact"
        }
    },

    prenatalDiagnosis: {
        indications: [
            "Advanced maternal age (≥35 years at delivery)",
            "Previous child with chromosomal abnormality",
            "Parent carrying balanced translocation or inversion",
            "Abnormal ultrasound findings",
            "Abnormal maternal serum screening"
        ],
        methods: {
            amniocentesis: {
                timing: "15–20 weeks gestation",
                procedure: "Ultrasound-guided needle aspiration of amniotic fluid; amniocytes cultured for karyotype",
                risk: "~0.5–1% procedure-related miscarriage risk",
                result: "Full karyotype in 2–3 weeks; FISH result in 24–48 hours for common aneuploidies"
            },
            chorionicVillusSampling: {
                timing: "10–13 weeks gestation",
                procedure: "Transabdominal or transcervical biopsy of chorionic villi (placental tissue)",
                advantage: "Earlier diagnosis than amniocentesis",
                risk: "~1–2% miscarriage risk; small risk of confined placental mosaicism",
                result: "Direct preparation (24 hours) or culture (1–2 weeks)"
            },
            NIPT: {
                fullName: "Non-Invasive Prenatal Testing",
                method: "Analysis of cell-free foetal DNA (cfDNA) from maternal blood",
                timing: "From 10 weeks gestation",
                detects: "Trisomy 21 (sensitivity >99%), trisomy 18, trisomy 13, sex chromosome aneuploidies",
                advantage: "No miscarriage risk",
                limitation: "Screening test only — positive result must be confirmed by invasive karyotyping; does not detect balanced rearrangements or low-level mosaicism reliably"
            }
        }
    },

    cancerCytogenetics: {
        overview: "Chromosomal rearrangements are hallmarks of many cancers. Some are pathognomonic (specific to one cancer type) and directly drive oncogenesis by creating fusion genes or altering gene expression.",
        examples: {
            philadelphiaChromosome: {
                rearrangement: "t(9;22)(q34;q11.2) — reciprocal translocation",
                fusionGene: "BCR-ABL1 — constitutively active tyrosine kinase",
                cancer: "Chronic myeloid leukaemia (CML); also acute lymphoblastic leukaemia",
                treatment: "Imatinib (Gleevec) — targeted BCR-ABL1 kinase inhibitor; landmark example of targeted therapy guided by cytogenetics"
            },
            myc_amplification: {
                rearrangement: "Double minutes or homogeneously staining regions (HSRs) containing amplified MYC",
                cancer: "Neuroblastoma (MYCN), Burkitt lymphoma (t(8;14) MYC-IGH)",
                consequence: "Massively increased MYC transcription factor expression — drives uncontrolled proliferation"
            }
        },
        karyotypicInstability: "Many cancers show chromothripsis (massive chromosomal shattering and reassembly in a single catastrophic event) or aneuploidy as a general feature, reflecting loss of chromosome segregation fidelity"
    },

    xInactivation: {
        lyonHypothesis: "Mary Lyon (1961) proposed that one X chromosome in each somatic cell of female mammals is randomly inactivated early in embryonic development",
        mechanism: "Xist RNA (X-inactive specific transcript) coats the future inactive X; progressive recruitment of Polycomb repressive complexes; histone modifications; DNA methylation",
        features: [
            "Occurs at ~day 16 of human embryonic development",
            "Random in each cell (paternal or maternal X inactivated)",
            "Clonal — all daughter cells of that cell maintain the same inactive X",
            "Not complete — ~15–25% of genes on the inactive X escape inactivation"
        ],
        barrBody: "The condensed, inactive X visible as a darkly staining body at the nuclear periphery; number of Barr bodies = n − 1 (where n = number of X chromosomes)",
        clinicalRelevance: "Explains why 47,XXY males have one Barr body; why Turner syndrome (45,X) females have no Barr body; why carrier females for X-linked disorders show variable expression (skewed X-inactivation)"
    },

    topicSummary: {
        coreInsights: [
            "A chromosome is not simply a DNA molecule — it is DNA packaged through four successive levels of compaction (nucleosome → 30 nm fibre → loop domains → metaphase chromosome), achieving up to 20,000-fold compaction.",
            "The karyotype is constructed from metaphase-arrested cells, stained to reveal G-band patterns; each chromosome pair has a unique and reproducible banding signature enabling identification of every structural and numerical abnormality.",
            "Non-disjunction at meiosis I produces gametes carrying both homologues or neither; at meiosis II it produces gametes with two identical chromatids or none — the distinction has diagnostic significance.",
            "Viable human aneuploidies are limited: trisomies 21, 18, 13 among autosomes; sex chromosome aneuploidies (45,X; 47,XXY; 47,XXX; 47,XYY) survive because the X is subject to dosage compensation and autosomes 21, 18, 13 carry relatively few essential genes.",
            "Balanced structural rearrangements (reciprocal translocations, inversions) are often phenotypically silent in carriers but generate unbalanced gametes at meiosis, producing offspring with deletions and duplications.",
            "X-inactivation is the mechanism by which females achieve dosage compensation for X-linked genes — but ~15–25% of X genes escape inactivation, explaining why 45,X (Turner) females are not phenotypically normal.",
            "The Philadelphia chromosome (t(9;22)) is the paradigm case connecting cytogenetics directly to targeted molecular therapy — demonstrating that understanding chromosomal rearrangements has direct therapeutic implications."
        ],
        keyFacts: {
            humanDiploidNumber: "2n = 46 (22 pairs autosomes + 1 pair sex chromosomes)",
            humanHaploidNumber: "n = 23",
            nucleosomeDNA: "~147 bp per nucleosome",
            telomereRepeat: "TTAGGG (human)",
            trisomy21Frequency: "~1 in 700 live births",
            turnerFrequency: "~1 in 2500 female live births",
            barrBodyFormula: "Barr bodies = number of X chromosomes − 1",
            PhiladelphiaChromosome: "t(9;22)(q34;q11.2) → BCR-ABL1"
        },
        abnormalityComparison: {
            trisomy21:  { type: "Numerical",   mechanism: "Non-disjunction (usually meiosis I, maternal)", karyotype: "47,+21",  viability: "Viable",   syndrome: "Down syndrome" },
            trisomy18:  { type: "Numerical",   mechanism: "Non-disjunction",                               karyotype: "47,+18",  viability: "Mostly lethal in first year", syndrome: "Edwards syndrome" },
            trisomy13:  { type: "Numerical",   mechanism: "Non-disjunction",                               karyotype: "47,+13",  viability: "Mostly lethal neonatally", syndrome: "Patau syndrome" },
            turnerXO:   { type: "Numerical",   mechanism: "Non-disjunction or anaphase lag",               karyotype: "45,X",    viability: "Viable (only viable autosomal/sex monosomy)", syndrome: "Turner syndrome" },
            klinefelter:{ type: "Numerical",   mechanism: "Non-disjunction",                               karyotype: "47,XXY",  viability: "Viable",   syndrome: "Klinefelter syndrome" },
            cri_du_chat:{ type: "Structural",  mechanism: "Deletion 5p",                                   karyotype: "del(5p)", viability: "Viable",   syndrome: "Cri-du-chat" },
            philadelphia:{type: "Structural",  mechanism: "Reciprocal translocation t(9;22)",              karyotype: "t(9;22)", viability: "Viable (somatic, not germline)", syndrome: "CML driver" }
        },
        commonMistakesToAvoid: [
            "Sister chromatids are NOT separate chromosomes — they are two identical copies of one replicated chromosome, joined at the centromere until anaphase",
            "A diploid cell with 46 chromosomes in G2 still has 46 chromosomes — it has 92 chromatids; chromosome number does not double in S phase, only DNA content does",
            "Non-disjunction at meiosis I and meiosis II produce different gamete types — do not conflate them",
            "Turner syndrome (45,X) is a sex chromosome monosomy, not an autosomal monosomy — its viability is explained by X-inactivation and the relative gene poverty of the X vs autosomes",
            "Balanced translocation carriers have 46 chromosomes (or 45 in Robertsonian) and are phenotypically normal — abnormality appears in their offspring through unbalanced segregation",
            "Barr bodies = X chromosomes − 1, not X chromosomes (a 46,XX cell has 1 Barr body; a 47,XXY cell has 1 Barr body)",
            "NIPT is a screening test — it does not replace diagnostic karyotyping; a positive NIPT requires invasive confirmation"
        ],
        connections: [
            "Cell biology: chromosome segregation depends on spindle checkpoint proteins (BubR1, Mad2) — their failure leads to non-disjunction and aneuploidy",
            "Molecular biology: telomerase reactivation in cancer reverses the proliferative limit imposed by telomere shortening — connecting chromosome end biology to oncology",
            "Epigenetics: the histone code on chromosome arms determines which genes are expressed — chromosome structure and gene regulation are inseparable",
            "Evolution: polyploidy in plants has been a major driver of speciation (e.g. wheat, cotton, coffee); chromosomal rearrangements underlie human-chimpanzee karyotypic differences",
            "Pharmacology: the Philadelphia chromosome discovery led directly to the development of imatinib — a model for precision oncology",
            "Genetics: Robertsonian translocations explain why Down syndrome can be familial despite a karyotype of 46 chromosomes in the proband's parent"
        ],
        examReadinessChecklist: [
            "Can you draw and label a fully compacted metaphase chromosome including centromere, p arm, q arm, telomeres, and sister chromatids?",
            "Can you describe the four levels of DNA compaction from nucleosome to metaphase chromosome?",
            "Can you write the ISCN karyotype notation for normal male, normal female, trisomy 21, Turner syndrome, and a balanced reciprocal translocation?",
            "Can you draw and explain the outcomes of non-disjunction at meiosis I vs meiosis II for a single chromosome pair?",
            "Can you construct a comparison table of all major clinical syndromes with karyotype, mechanism, and key features?",
            "Can you explain why balanced translocation carriers are phenotypically normal but at risk for abnormal offspring?",
            "Can you explain the Barr body formula and apply it to any karyotype?"
        ]
    }
},


mendelianGenetics: {
            title: "Mendelian Genetics: Inheritance, Probability, and Genetic Analysis",

            // ── LAYER 1: DATABASE LINKAGE ──────────────────────────────────────────

            databaseLinks: {
                misconceptions: [
                    'basicInheritance',
                    'dominanceAndRecessiveness',
                    'dihybridInheritance',
                    'sexLinkedInheritance',
                    'probabilityAndRatios'
                ],
                contextualScenarios: [
                    'basicInheritance',
                    'dihybridInheritance',
                    'sexLinkedInheritance',
                    'extendedInheritance'
                ],
                studyTips: [
                    'diagrams',
                    'comparisonTables',
                    'models',
                    'timelines',
                    'observations',
                    'flashcards',
                    'mnemonics',
                    'practiceRoutines',
                    'dissectionAndExperiment'
                ],
                assessmentRubrics: [
                    'remember',
                    'understand',
                    'apply',
                    'analyze',
                    'evaluate',
                    'create'
                ],
                assessmentQuestions: [
                    'basicInheritance',
                    'dihybridInheritance',
                    'sexLinkedInheritance',
                    'extendedInheritance'
                ]
            },

            conceptLinks: {
                "Alleles are alternative forms of a gene at a locus": {
                    misconceptions:      ['basicInheritance', 'dominanceAndRecessiveness'],
                    scenarios:           ['basicInheritance'],
                    studyTips:           ['diagrams', 'flashcards', 'models'],
                    assessmentRubrics:   ['remember', 'understand'],
                    assessmentQuestions: ['basicInheritance']
                },
                "Dominant alleles mask recessive alleles in heterozygotes": {
                    misconceptions:      ['dominanceAndRecessiveness'],
                    scenarios:           ['basicInheritance'],
                    studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
                    assessmentRubrics:   ['remember', 'understand', 'apply'],
                    assessmentQuestions: ['basicInheritance']
                },
                "Law of Segregation: allele pairs separate during gamete formation": {
                    misconceptions:      ['basicInheritance', 'probabilityAndRatios'],
                    scenarios:           ['basicInheritance'],
                    studyTips:           ['diagrams', 'models', 'practiceRoutines'],
                    assessmentRubrics:   ['understand', 'apply'],
                    assessmentQuestions: ['basicInheritance']
                },
                "Law of Independent Assortment: genes on different chromosomes segregate independently": {
                    misconceptions:      ['dihybridInheritance'],
                    scenarios:           ['dihybridInheritance'],
                    studyTips:           ['diagrams', 'comparisonTables', 'models', 'practiceRoutines'],
                    assessmentRubrics:   ['understand', 'apply', 'analyze'],
                    assessmentQuestions: ['dihybridInheritance']
                },
                "Punnett squares predict genotypic and phenotypic ratios": {
                    misconceptions:      ['probabilityAndRatios'],
                    scenarios:           ['basicInheritance', 'dihybridInheritance'],
                    studyTips:           ['diagrams', 'practiceRoutines', 'mnemonics'],
                    assessmentRubrics:   ['apply', 'analyze'],
                    assessmentQuestions: ['basicInheritance', 'dihybridInheritance']
                },
                "Sex-linked traits are carried on sex chromosomes and show different inheritance patterns": {
                    misconceptions:      ['sexLinkedInheritance'],
                    scenarios:           ['sexLinkedInheritance'],
                    studyTips:           ['diagrams', 'comparisonTables', 'timelines', 'flashcards'],
                    assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
                    assessmentQuestions: ['sexLinkedInheritance']
                },
                "Extensions to Mendel include codominance, incomplete dominance, and polygenic inheritance": {
                    misconceptions:      ['dominanceAndRecessiveness'],
                    scenarios:           ['extendedInheritance'],
                    studyTips:           ['comparisonTables', 'observations', 'models'],
                    assessmentRubrics:   ['understand', 'apply', 'evaluate'],
                    assessmentQuestions: ['extendedInheritance']
                }
            },

            // ── LAYER 2: TOPIC FRAMING ─────────────────────────────────────────────

            topicIntroduction: {
                overview: "Mendelian genetics is the foundation of our understanding of heredity — the rules by which biological traits are transmitted from parents to offspring across generations. Gregor Mendel's meticulous pea plant experiments in the 1860s revealed that inheritance is particulate, not blended, and follows predictable mathematical laws. In this lesson, we explore those laws, how to apply them to predict offspring ratios, how sex-linked and non-Mendelian patterns extend beyond the classical model, and how genetic analysis is performed in practice.",
                whyItMatters: "Mendelian genetics underpins genetic counselling, the understanding of inherited diseases, agriculture, forensic science, and evolutionary biology. Every time a genetic test predicts disease risk, every time plant breeders develop a new crop variety, and every time a family asks about the odds of inheriting a condition — Mendelian principles are at work. These are not merely historical ideas: they remain the daily toolkit of geneticists, clinicians, and molecular biologists.",
                bigPicture: "Mendel showed that traits are controlled by discrete heritable units (now called genes) that occur in pairs (alleles), one inherited from each parent. During gamete formation these allele pairs separate (segregate) so each gamete carries only one allele. Genes on different chromosomes assort independently. These two laws generate predictable ratios — 3:1 for monohybrids, 9:3:3:1 for dihybrids — that can be calculated using probability and Punnett squares. Extensions to Mendel (codominance, incomplete dominance, multiple alleles, polygenic inheritance, epistasis) refine the model but do not overturn it.",
                priorKnowledge: [
                    "Cell division: mitosis and meiosis, including the stages of meiosis I and II",
                    "Chromosome structure: homologous pairs, sister chromatids, loci",
                    "DNA as the molecule of heredity: gene concept and allele concept",
                    "Basic probability: independent events, the product rule, the sum rule",
                    "Sex determination: XX/XY system in humans and X-linked genes"
                ],
                topicRoadmap: [
                    "Key terminology: gene, allele, locus, genotype, phenotype, homozygous, heterozygous",
                    "Mendel's experimental approach and why pea plants were ideal",
                    "Law of Segregation and monohybrid crosses",
                    "Dominance relationships: complete, incomplete, and codominance",
                    "Law of Independent Assortment and dihybrid crosses",
                    "Probability rules applied to genetics: product rule and sum rule",
                    "Sex determination and sex-linked inheritance",
                    "Extensions: multiple alleles, polygenic inheritance, epistasis, lethal alleles",
                    "Pedigree analysis and genetic counselling applications",
                    "Chi-squared test: evaluating whether results fit expected Mendelian ratios"
                ]
            },

            concepts: [
                "Alleles are alternative forms of a gene at a locus",
                "Dominant alleles mask recessive alleles in heterozygotes",
                "Law of Segregation: allele pairs separate during gamete formation",
                "Law of Independent Assortment: genes on different chromosomes segregate independently",
                "Punnett squares predict genotypic and phenotypic ratios",
                "Sex-linked traits are carried on sex chromosomes and show different inheritance patterns",
                "Extensions to Mendel include codominance, incomplete dominance, and polygenic inheritance",
                "Probability rules (product and sum) apply directly to genetic crosses",
                "Pedigree analysis reveals inheritance patterns across generations",
                "Chi-squared tests assess whether observed ratios fit Mendelian predictions"
            ],

            // ── LAYER 3: CORE LESSON CONTENT ──────────────────────────────────────

            theory: "Mendelian genetics describes the particulate inheritance of traits through discrete heritable units (genes), governed by two fundamental laws: Segregation and Independent Assortment. These laws, derived from Mendel's pea plant experiments, generate predictable offspring ratios that can be calculated using probability and Punnett squares, and extended to accommodate sex-linked, codominant, and polygenic traits.",

            keyDefinitions: {
                "Gene": "A heritable unit of information at a specific chromosomal location (locus) that influences a trait",
                "Allele": "One of two or more alternative forms of a gene at a given locus",
                "Locus": "The specific chromosomal position occupied by a gene",
                "Genotype": "The specific combination of alleles an organism carries (e.g. Aa, BB, Cc)",
                "Phenotype": "The observable expression of the genotype (physical, biochemical, or behavioural trait)",
                "Homozygous": "Carrying two identical alleles at a locus (AA or aa)",
                "Heterozygous": "Carrying two different alleles at a locus (Aa)",
                "Dominant": "An allele whose phenotypic effect is expressed in heterozygotes (masks the other allele)",
                "Recessive": "An allele whose phenotypic effect is only expressed in homozygotes (masked by dominant in heterozygotes)",
                "P generation": "The parental generation; homozygous individuals used to begin a cross",
                "F1 generation": "First filial generation; offspring of the P cross",
                "F2 generation": "Second filial generation; offspring of an F1 × F1 cross",
                "Monohybrid cross": "A cross between individuals differing in one character",
                "Dihybrid cross": "A cross between individuals differing in two characters",
                "Test cross": "A cross of an unknown genotype individual with a homozygous recessive individual to determine genotype",
                "Carrier": "A heterozygous individual who carries one copy of a recessive allele without showing the trait",
                "Codominance": "Both alleles are fully expressed in heterozygotes (e.g. blood type AB)",
                "Incomplete dominance": "Heterozygote shows an intermediate phenotype between the two homozygotes",
                "Multiple alleles": "More than two alleles existing in a population for a single gene (though each individual still carries only two)",
                "Polygenic inheritance": "A trait controlled by two or more genes, producing a continuous range of phenotypes",
                "Epistasis": "Interaction between genes at different loci where one gene masks or modifies the expression of another",
                "Sex-linked gene": "A gene located on a sex chromosome (usually the X chromosome)",
                "Hemizygous": "Having only one copy of a gene (e.g. males with X-linked genes, having one X chromosome)"
            },

            mendelExperiment: {
                organism: "Pisum sativum (garden pea)",
                advantagesOfPeas: [
                    "Short generation time (one season)",
                    "Large number of offspring (powerful statistical analysis)",
                    "Naturally self-fertilising (easy to establish true-breeding lines)",
                    "Can be manually cross-fertilised (controlled mating)",
                    "Seven clearly contrasting, easily scored traits",
                    "Diploid organism with seven chromosome pairs"
                ],
                sevenTraitsStudied: {
                    seedShape:      { dominant: "Round",    recessive: "Wrinkled" },
                    seedColour:     { dominant: "Yellow",   recessive: "Green" },
                    podShape:       { dominant: "Inflated", recessive: "Constricted" },
                    podColour:      { dominant: "Green",    recessive: "Yellow" },
                    flowerColour:   { dominant: "Purple",   recessive: "White" },
                    flowerPosition: { dominant: "Axial",    recessive: "Terminal" },
                    stemLength:     { dominant: "Tall",     recessive: "Dwarf" }
                },
                experimentalDesign: [
                    "Established true-breeding (homozygous) P lines for each trait",
                    "Made reciprocal crosses between contrasting P lines",
                    "Observed F1 (all showed dominant phenotype)",
                    "Self-fertilised F1 to produce F2",
                    "Counted and categorised F2 offspring across thousands of plants",
                    "Observed consistent 3:1 phenotypic ratio in F2"
                ],
                keyObservation: "The recessive trait disappeared in F1 but reappeared in F2 at approximately 1/4 of offspring — demonstrating that traits are inherited as discrete units, not blended"
            },

            lawsOfMendel: {
                lawOfSegregation: {
                    statement: "The two alleles for each heritable character separate (segregate) during gamete formation so that each gamete carries only one allele for each gene",
                    chromosomalBasis: "Homologous chromosomes (carrying the two alleles) separate during meiosis I; each gamete receives one homologue",
                    prediction: "Monohybrid cross Aa × Aa produces 1 AA : 2 Aa : 1 aa genotype ratio and 3 dominant : 1 recessive phenotype ratio",
                    testCross: "Aa × aa produces 1 Aa : 1 aa — used to confirm a dominant phenotype is heterozygous rather than homozygous dominant"
                },
                lawOfIndependentAssortment: {
                    statement: "Alleles of different genes assort independently of each other during gamete formation",
                    chromosomalBasis: "Non-homologous chromosomes align independently at the metaphase I plate; their separation is random and independent",
                    condition: "Applies to genes on DIFFERENT (non-homologous) chromosomes, or genes far apart on the same chromosome",
                    prediction: "Dihybrid cross AaBb × AaBb produces 9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb phenotype ratio",
                    limitation: "Genes on the same chromosome (linked genes) violate independent assortment — they tend to be inherited together"
                }
            },

            punnettSquares: {
                monohybrid: {
                    setup: "One row of gametes from parent 1 (A or a), one column from parent 2 (A or a) — 2×2 grid",
                    AaXAa: {
                        genotypeRatio: "1 AA : 2 Aa : 1 aa",
                        phenotypeRatio: "3 dominant : 1 recessive"
                    },
                    AaXaa: {
                        genotypeRatio: "1 Aa : 1 aa",
                        phenotypeRatio: "1 dominant : 1 recessive (test cross)"
                    }
                },
                dihybrid: {
                    setup: "Parent 1 gametes (AB, Ab, aB, ab) form rows; parent 2 gametes form columns — 4×4 = 16 cell grid",
                    AaBbXAaBb: {
                        genotypeRatios: "1 AABB : 2 AABb : 2 AaBB : 4 AaBb : 1 AAbb : 2 Aabb : 1 aaBB : 2 aaBb : 1 aabb",
                        phenotypeRatio: "9 A_B_ : 3 A_bb : 3 aaB_ : 1 aabb"
                    }
                },
                probabilityShortcut: {
                    productRule: "Probability of two independent events both occurring = P(A) × P(B)",
                    sumRule: "Probability of either of two mutually exclusive events occurring = P(A) + P(B)",
                    application: "For a dihybrid cross, calculate each gene separately using monohybrid ratios, then multiply: P(A_B_) = 3/4 × 3/4 = 9/16"
                }
            },

            dominanceRelationships: {
                completeDominance: {
                    description: "One allele is fully dominant; heterozygote is phenotypically identical to dominant homozygote",
                    example: "Pea seed colour: Yy (yellow) is indistinguishable from YY (yellow)",
                    phenotypeRatio: "3:1 in F2"
                },
                incompleteDominance: {
                    description: "Neither allele is fully dominant; heterozygote shows an intermediate phenotype",
                    example: "Snapdragon flower colour: RR (red) × WW (white) → Rw (pink) F1; F2 shows 1 red : 2 pink : 1 white",
                    phenotypeRatio: "1:2:1 in F2 (phenotype ratio matches genotype ratio)",
                    note: "Genotype ratio remains 1:2:1 — the law of segregation still holds"
                },
                codominance: {
                    description: "Both alleles are fully and simultaneously expressed in heterozygotes",
                    example: "ABO blood type: I^A I^B produces blood type AB — both A and B antigens present on red blood cells",
                    phenotypeRatio: "1:2:1 in F2 (three distinct phenotypes)",
                    distinction: "Unlike incomplete dominance, codominance produces BOTH phenotypes, not an intermediate one"
                },
                multipleAlleles: {
                    description: "More than two alleles exist in the population for one gene (though each individual carries at most two)",
                    example: "ABO blood group: three alleles (I^A, I^B, i) produce four blood types (A, B, AB, O)",
                    dominanceHierarchy: "I^A and I^B are codominant; both are dominant over i (recessive)"
                }
            },

            sexLinkedInheritance: {
                sexDetermination: {
                    human: "Females: XX; Males: XY",
                    sryGene: "Sex-determining region Y (SRY) on Y chromosome triggers male development",
                    xInactivation: "In females, one X chromosome per cell is randomly inactivated (Barr body) to equalize gene dosage"
                },
                xLinkedRecessive: {
                    mechanism: "Gene carried on X chromosome; males (XY) are hemizygous — a single recessive allele produces the trait",
                    pattern: [
                        "Affected males far more common than affected females",
                        "Carrier females (X^A X^a) are phenotypically normal but pass the allele to offspring",
                        "Sons of carrier females have 50% chance of being affected",
                        "Daughters of affected males are all carriers (receive X^a from father)",
                        "Trait appears to skip generations (grandfather → carrier daughter → affected grandson)"
                    ],
                    examples: ["Colour blindness (red-green)", "Haemophilia A (factor VIII deficiency)", "Duchenne muscular dystrophy"]
                },
                xLinkedDominant: {
                    mechanism: "Dominant allele on X chromosome; one copy sufficient for phenotype",
                    pattern: [
                        "Affected females more common (two X chromosomes, more chances to carry allele)",
                        "Affected fathers pass trait to ALL daughters but NO sons",
                        "Affected mothers (heterozygous) pass to 50% of children of either sex"
                    ],
                    examples: ["Hypophosphataemia (vitamin D-resistant rickets)", "Rett syndrome"]
                },
                yLinked: {
                    mechanism: "Gene on Y chromosome passes from father to ALL sons, never daughters",
                    examples: ["SRY gene", "Most Y-linked traits cause infertility (few well-characterised examples)"]
                }
            },

            extendedMendelianInheritance: {
                polygenicInheritance: {
                    description: "Trait determined by additive effects of alleles at two or more loci",
                    characteristics: [
                        "Continuous range of phenotypes (bell-shaped distribution in population)",
                        "Each contributing allele adds a small increment to the phenotype",
                        "Strongly influenced by environment",
                        "Cannot be tracked in simple Punnett square ratios"
                    ],
                    examples: ["Human skin colour (multiple genes)", "Height", "Intelligence", "Wheat grain colour (3 genes, 7 phenotype classes)"]
                },
                epistasis: {
                    description: "One gene masks or modifies the phenotypic expression of another gene",
                    types: {
                        recessive: "Homozygous recessive at one locus masks the other gene — 9:3:4 ratio",
                        dominant: "One dominant allele at one locus masks the other gene — 12:3:1 ratio",
                        duplicate: "Dominant allele at either locus produces same phenotype — 15:1 ratio"
                    },
                    example: "Labrador coat colour: B gene (black/brown) epistatic to E gene — ee is always yellow regardless of B genotype; produces 9 black : 3 brown : 4 yellow from BbEe × BbEe"
                },
                lethalAlleles: {
                    description: "Alleles whose homozygous expression causes death (often in utero)",
                    example: "Yellow coat in mice: A^Y A^Y is lethal; A^Y a is viable yellow; aa is agouti — cross A^Y a × A^Y a gives 2 yellow : 1 agouti (not 3:1) because A^Y A^Y die",
                    note: "The 3:1 ratio appears to be 2:1 when one homozygote class is lethal"
                },
                pleiotropy: {
                    description: "A single gene affects multiple seemingly unrelated phenotypic traits",
                    examples: [
                        "Cystic fibrosis: one gene (CFTR) causes lung disease, pancreatic insufficiency, infertility",
                        "Sickle cell disease: one allele causes anaemia, organ damage, resistance to malaria"
                    ]
                }
            },

            pedigreeAnalysis: {
                symbols: {
                    circle: "Female",
                    square: "Male",
                    filledSymbol: "Affected individual",
                    halfFilledCircle: "Carrier female (X-linked recessive)",
                    horizontalLine: "Mating/couple",
                    verticalLine: "Offspring connection",
                    roman: "Generation labels (I, II, III...)",
                    arabic: "Individual labels within generation (1, 2, 3...)"
                },
                determiningInheritancePattern: {
                    autosomalDominant: [
                        "Trait appears in every generation (no skipping)",
                        "Affected individuals have at least one affected parent",
                        "Approximately 50% of offspring of affected × unaffected are affected",
                        "Males and females equally affected"
                    ],
                    autosomalRecessive: [
                        "Trait can skip generations (carrier parents unaffected)",
                        "Both parents of affected individual may be unaffected carriers",
                        "Increased incidence with consanguinity (related parents)",
                        "Males and females equally affected"
                    ],
                    xLinkedRecessive: [
                        "Predominantly affects males",
                        "Carrier females phenotypically normal",
                        "No father-to-son transmission of the trait",
                        "Affected grandfather can pass trait through carrier daughter to grandson"
                    ],
                    xLinkedDominant: [
                        "Affected father passes trait to all daughters, no sons",
                        "Affected mothers pass to 50% of children of either sex",
                        "More females affected than males"
                    ]
                }
            },

            chiSquaredTest: {
                purpose: "Statistical test to determine whether observed offspring ratios are consistent with (or significantly deviate from) expected Mendelian ratios",
                formula: "χ² = Σ [(Observed − Expected)² / Expected]",
                steps: [
                    "State the null hypothesis: 'Observed ratios do not differ significantly from expected Mendelian ratios'",
                    "Calculate expected numbers from the total and predicted ratio",
                    "For each class: calculate (O − E)² / E",
                    "Sum all values to get χ²",
                    "Determine degrees of freedom: df = number of phenotypic classes − 1",
                    "Compare χ² to critical value at p = 0.05 for that df",
                    "If χ² < critical value: fail to reject null hypothesis (results consistent with Mendel)",
                    "If χ² > critical value: reject null hypothesis (results significantly deviate from prediction)"
                ],
                criticalValues: {
                    df1: 3.841,
                    df2: 5.991,
                    df3: 7.815
                },
                example: "F2 monohybrid cross with 100 plants: 72 dominant, 28 recessive. Expected (3:1): 75 dominant, 25 recessive. χ² = (72−75)²/75 + (28−25)²/25 = 0.12 + 0.36 = 0.48. df = 1. Critical value = 3.841. Since 0.48 < 3.841, fail to reject — results consistent with 3:1 ratio."
            },

            applications: [
                "Genetic counselling: predicting risk of inherited disease in families",
                "Prenatal diagnosis: using pedigree analysis to calculate carrier probabilities",
                "Plant and animal breeding: selecting for desirable traits",
                "Forensic genetics: paternity testing and identity verification",
                "Population genetics: tracking allele frequencies across generations",
                "Drug development: targeting genes underlying Mendelian disorders",
                "Understanding evolution: natural selection acts on heritable variation explained by Mendel's laws"
            ],

            // ── LAYER 2 (CONTINUED): TOPIC SUMMARY ────────────────────────────────

            topicSummary: {
                coreInsights: [
                    "Traits are inherited as discrete particles (alleles), not as blends — Mendel's revolutionary insight that overturned the blending inheritance view dominant before his work.",
                    "The Law of Segregation means each parent contributes exactly one allele to each offspring — gametes are haploid, and fertilisation restores diploidy.",
                    "The Law of Independent Assortment generates new allele combinations (genetic recombination) in dihybrid crosses — this is a major source of genetic variation.",
                    "Dominance does not mean 'stronger' or 'more common' — it is simply which allele's phenotypic effect is expressed in the heterozygote.",
                    "Punnett squares are systematic probability tools — but the product rule (multiply probabilities for independent genes) is faster for complex crosses.",
                    "Sex-linked inheritance breaks the equal-expression-in-both-sexes pattern because males are hemizygous for X-linked genes — one copy determines the phenotype regardless of dominance.",
                    "Non-Mendelian patterns (codominance, incomplete dominance, polygenic inheritance, epistasis) do not violate Mendel's laws — they extend them to account for more complex allele interactions.",
                    "Pedigree analysis translates family history into genetic logic — the pattern of affected individuals across generations reveals the inheritance mode.",
                    "The chi-squared test distinguishes genuine deviations from Mendelian ratios from random sampling variation — an essential tool for evaluating genetic hypotheses."
                ],
                keyRatios: {
                    monohybridF2Phenotype: "3 dominant : 1 recessive",
                    monohybridF2Genotype: "1 AA : 2 Aa : 1 aa",
                    testCross: "1 dominant : 1 recessive",
                    incompleteDominanceF2: "1 : 2 : 1 (three phenotypes)",
                    dihybridF2Phenotype: "9 : 3 : 3 : 1",
                    xLinkedCarrierMother: "50% of sons affected, 50% of daughters carrier",
                    epistasisRecessive: "9 : 3 : 4",
                    lethalAllele: "2 : 1 (apparent)"
                },
                inheritancePatternComparison: {
                    autosomalDominant:  { skipsGenerations: "Never",     sexBias: "None",        carrierState: "Not applicable" },
                    autosomalRecessive: { skipsGenerations: "Yes",       sexBias: "None",        carrierState: "Heterozygote carrier" },
                    xLinkedRecessive:   { skipsGenerations: "Yes",       sexBias: "Males mainly", carrierState: "Carrier female" },
                    xLinkedDominant:    { skipsGenerations: "Never",     sexBias: "More females", carrierState: "Not applicable" },
                    yLinked:            { skipsGenerations: "Never",     sexBias: "Males only",   carrierState: "Not applicable" }
                },
                commonMistakesToAvoid: [
                    "Dominant does NOT mean more common in a population — a dominant allele can be rare (e.g. Huntington's disease allele)",
                    "Recessive does NOT mean the allele disappears — it is maintained in carriers and resurfaces in homozygous offspring",
                    "Independent assortment does NOT apply to linked genes — genes on the same chromosome tend to be inherited together",
                    "A 3:1 ratio is an expectation across many offspring — small samples routinely deviate due to chance alone (chi-squared tests evaluate significance)",
                    "Males with X-linked recessive traits are not 'carriers' — they are hemizygous and always express the trait",
                    "Incomplete dominance is not the same as codominance — intermediate phenotype (blend) vs both phenotypes simultaneously expressed",
                    "Pedigrees show phenotypes not genotypes — inferring genotypes requires analysis of the inheritance pattern",
                    "Mendel's laws apply to genes, not to chromosomes — one chromosome carries hundreds of linked genes that do NOT assort independently"
                ],
                connections: [
                    "Meiosis: the chromosomal mechanism that physically enacts the Laws of Segregation and Independent Assortment",
                    "Molecular biology: alleles differ in DNA sequence; dominant/recessive relationships often reflect functional vs non-functional protein products",
                    "Population genetics: Hardy-Weinberg equilibrium describes allele frequencies in populations governed by Mendelian inheritance",
                    "Genetic disorders: cystic fibrosis (autosomal recessive), Huntington's (autosomal dominant), haemophilia (X-linked recessive) all follow Mendelian patterns",
                    "Evolutionary biology: Mendelian inheritance preserves allele variation that natural selection acts upon — resolving the 'blending problem' that threatened Darwinism",
                    "Epigenetics: gene expression can be modified without allele changes, showing Mendelian genotype is not the only determinant of phenotype"
                ],
                examReadinessChecklist: [
                    "Can you state and explain both of Mendel's laws using chromosomal diagrams?",
                    "Can you construct a Punnett square for a monohybrid and a dihybrid cross and extract both genotype and phenotype ratios?",
                    "Can you use the product rule to calculate offspring probabilities without drawing a full Punnett square?",
                    "Can you distinguish complete dominance, incomplete dominance, and codominance with an example of each?",
                    "Can you work through an X-linked recessive cross showing genotypes for both sexes?",
                    "Can you read a pedigree and identify the most likely inheritance pattern with justification?",
                    "Can you perform a chi-squared test on F2 data and correctly interpret the result?",
                    "Can you explain why a 2:1 ratio in offspring suggests a lethal allele?"
                ]
            }
        },



const EndSection14 = "close"