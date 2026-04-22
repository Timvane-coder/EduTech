

nucleicAcids: {
    title: "Nucleic Acids: Structure, Function, and Information Flow",

    databaseLinks: {
        misconceptions: [
            'nucleicAcidStructure',
            'dnaReplication',
            'transcription',
            'translation',
            'geneExpression'
        ],
        contextualScenarios: [
            'nucleicAcidStructure',
            'dnaReplication',
            'transcription',
            'translation'
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
            'nucleicAcidStructure',
            'dnaReplication',
            'transcription',
            'translation'
        ]
    },

    conceptLinks: {
        "DNA is a double helix composed of complementary antiparallel strands": {
            misconceptions:      ['nucleicAcidStructure'],
            scenarios:           ['nucleicAcidStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['nucleicAcidStructure']
        },
        "Nucleotides are the monomers of nucleic acids": {
            misconceptions:      ['nucleicAcidStructure'],
            scenarios:           ['nucleicAcidStructure'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['nucleicAcidStructure']
        },
        "DNA replication is semi-conservative and proceeds 5' to 3'": {
            misconceptions:      ['dnaReplication'],
            scenarios:           ['dnaReplication'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['dnaReplication']
        },
        "Transcription produces RNA from a DNA template": {
            misconceptions:      ['transcription'],
            scenarios:           ['transcription'],
            studyTips:           ['diagrams', 'comparisonTables', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['transcription']
        },
        "Translation decodes mRNA into a polypeptide at the ribosome": {
            misconceptions:      ['translation'],
            scenarios:           ['translation'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics', 'specimens'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['translation']
        },
        "Gene expression is regulated at multiple levels": {
            misconceptions:      ['geneExpression'],
            scenarios:           ['transcription', 'translation'],
            studyTips:           ['comparisonTables', 'diagrams', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['transcription', 'translation']
        }
    },

    topicIntroduction: {
        overview: "Nucleic acids — DNA and RNA — are the informational molecules of life. DNA stores the genetic blueprint in every cell, while RNA serves as the working copy that is read, processed, and translated into proteins. Together, they underpin the central dogma of molecular biology: DNA is transcribed into RNA, and RNA is translated into protein. Understanding nucleic acid structure and function is foundational to genetics, medicine, evolution, and biotechnology.",
        whyItMatters: "Every inherited disease, every cancer mutation, every vaccine, and every CRISPR-based gene therapy depends on understanding nucleic acids. The COVID-19 mRNA vaccines, the sequencing of the human genome, forensic DNA profiling, and the diagnosis of genetic disorders all flow directly from the molecular principles covered in this lesson.",
        bigPicture: "The structure of DNA encodes information in the sequence of its bases. This sequence is faithfully copied during replication, transcribed into mRNA, and decoded by ribosomes into proteins. The fidelity of these processes — and the consequences when they fail — connects molecular structure directly to inheritance, disease, and evolution.",
        priorKnowledge: [
            "Cell biology: nucleus, ribosomes, endoplasmic reticulum",
            "Protein structure: amino acids, polypeptide chains",
            "Basic chemistry: covalent bonds, hydrogen bonds, polarity",
            "Enzyme function: polymerases as catalysts",
            "Basic genetics: genes, chromosomes, inheritance"
        ],
        topicRoadmap: [
            "Structure of nucleotides: bases, sugars, phosphate groups",
            "DNA double helix: base pairing, antiparallel strands, hydrogen bonds",
            "Comparison of DNA and RNA: structure and functional roles",
            "DNA replication: semi-conservative model, key enzymes, leading and lagging strands",
            "Transcription: RNA polymerase, promoters, mRNA processing in eukaryotes",
            "The genetic code: codons, degeneracy, start and stop signals",
            "Translation: ribosomes, tRNA, elongation, termination",
            "Gene expression regulation: operons (prokaryotes), transcription factors (eukaryotes)",
            "Mutations: types, consequences, repair mechanisms",
            "Applications: PCR, sequencing, gene therapy, CRISPR"
        ]
    },

    concepts: [
        "DNA is a double helix composed of complementary antiparallel strands",
        "Nucleotides are the monomers of nucleic acids",
        "Base pairing is specific: A-T (two H-bonds) and G-C (three H-bonds) in DNA",
        "DNA replication is semi-conservative and proceeds 5' to 3'",
        "Transcription produces RNA from a DNA template",
        "The genetic code is a triplet, degenerate, and nearly universal",
        "Translation decodes mRNA into a polypeptide at the ribosome",
        "Gene expression is regulated at multiple levels"
    ],

    theory: "Nucleic acids are polymers of nucleotides that store, transmit, and express genetic information. The central dogma describes the directional flow of information: DNA → RNA → protein. This unidirectional flow (with exceptions such as reverse transcription) underpins heredity, development, and cellular function.",

    keyDefinitions: {
        "Nucleotide": "Monomer of nucleic acids: phosphate group + pentose sugar + nitrogenous base",
        "Purine": "Double-ring nitrogenous base: adenine (A) and guanine (G)",
        "Pyrimidine": "Single-ring nitrogenous base: cytosine (C), thymine (T), uracil (U)",
        "Phosphodiester Bond": "Covalent bond linking the 3' carbon of one nucleotide to the 5' carbon of the next — forms the sugar-phosphate backbone",
        "Antiparallel": "The two DNA strands run in opposite 5'→3' directions",
        "Chargaff's Rules": "In any DNA sample, [A] = [T] and [G] = [C]",
        "Semi-conservative Replication": "Each new DNA molecule retains one parental strand and one newly synthesised strand",
        "Promoter": "DNA sequence upstream of a gene where RNA polymerase binds to initiate transcription",
        "Codon": "Three-base sequence on mRNA that specifies one amino acid",
        "Anticodon": "Three-base sequence on tRNA complementary to the mRNA codon",
        "Reading Frame": "The partitioning of mRNA sequence into successive codons from a fixed start point",
        "Open Reading Frame (ORF)": "A sequence of codons between a start codon and an in-frame stop codon",
        "Central Dogma": "The directional flow of genetic information: DNA → RNA → protein",
        "Reverse Transcriptase": "Enzyme that synthesises DNA from an RNA template (retroviruses)",
        "Exon": "Coding sequence retained in mature mRNA after splicing",
        "Intron": "Non-coding sequence removed from pre-mRNA during splicing"
    },

    nucleotideStructure: {
        components: {
            phosphateGroup: "One or more phosphate groups attached to the 5' carbon of the sugar",
            pentoseSugar: "Deoxyribose (DNA) or ribose (RNA) — differ by presence/absence of 2'-OH group",
            nitrogenousBase: "Purine (A, G) or pyrimidine (C, T, U) — encodes genetic information"
        },
        dnaVsRna: {
            sugar: { DNA: "Deoxyribose (no 2'-OH)", RNA: "Ribose (has 2'-OH)" },
            bases: { DNA: "A, T, G, C", RNA: "A, U, G, C" },
            strands: { DNA: "Double-stranded", RNA: "Usually single-stranded" },
            location: { DNA: "Nucleus (primarily)", RNA: "Nucleus and cytoplasm" },
            stability: { DNA: "More stable (no 2'-OH)", RNA: "Less stable (2'-OH enables hydrolysis)" },
            function: { DNA: "Long-term information storage", RNA: "Information transfer and expression" }
        },
        basePairing: {
            DNADNA: { AT: "2 hydrogen bonds", GC: "3 hydrogen bonds" },
            DNARule: "Complementarity: A pairs with T; G pairs with C",
            RNARule: "A pairs with U; G pairs with C (in RNA-RNA and DNA-RNA hybrids)",
            significance: "Three G-C pairs make DNA more thermally stable than regions rich in A-T pairs"
        }
    },

    dnaStructure: {
        doubleHelix: {
            discoveredBy: "Watson and Crick (1953), informed by Franklin's X-ray crystallography and Chargaff's rules",
            features: [
                "Two antiparallel polynucleotide strands wound around a common axis",
                "Sugar-phosphate backbone on the outside; bases on the inside",
                "Right-handed helix with major and minor grooves",
                "Base pairs stacked 0.34 nm apart; one full turn every 3.4 nm (10 base pairs per turn)",
                "Strands held together by hydrogen bonds between complementary bases and by base stacking interactions"
            ],
            grooves: {
                major: "Wider groove — accessible to transcription factors and DNA-binding proteins",
                minor: "Narrower groove — some proteins and drugs also bind here"
            }
        },
        chromosomalOrganisation: {
            histone: "Protein around which DNA is wound to form nucleosomes",
            nucleosome: "~147 bp of DNA wrapped around an octamer of histone proteins",
            chromatin: "Complex of DNA and proteins; can be condensed (heterochromatin) or open (euchromatin)",
            chromosome: "Fully condensed chromatin visible during cell division"
        }
    },

    dnaReplication: {
        model: "Semi-conservative: each strand serves as a template; each daughter molecule retains one original strand",
        evidence: "Meselson-Stahl experiment (1958) using 15N/14N density labelling",
        keyEnzymes: {
            helicase: "Unwinds and separates the double helix at the replication fork",
            primase: "Synthesises a short RNA primer to provide a free 3'-OH for DNA polymerase",
            DNAPolymeraseIII: "Main replicative polymerase in prokaryotes — adds nucleotides 5'→3', has proofreading (3'→5' exonuclease)",
            DNAPolymeraseI: "Removes RNA primers and replaces with DNA",
            DNALigase: "Joins Okazaki fragments by sealing nicks in the sugar-phosphate backbone",
            SSBProteins: "Single-strand binding proteins — stabilise separated strands",
            topoisomerase: "Relieves torsional stress ahead of the replication fork"
        },
        leadingVsLagging: {
            leading: "Synthesised continuously 5'→3' in the direction of fork movement",
            lagging: "Synthesised discontinuously as Okazaki fragments (5'→3' away from fork)",
            OkazakiFragments: "Short DNA fragments on the lagging strand, later joined by ligase"
        },
        fidelity: {
            errorRate: "~1 error per 10⁷–10⁹ nucleotides incorporated (after proofreading)",
            proofreading: "3'→5' exonuclease activity of DNA polymerase removes mismatched nucleotides",
            mismatchRepair: "Post-replication repair system corrects remaining errors"
        },
        eukaryoticFeatures: {
            origins: "Multiple origins of replication per chromosome (faster replication)",
            telomeres: "Repetitive sequences at chromosome ends; replicated by telomerase",
            histones: "Must be disassembled ahead of fork and reassembled on both daughter strands"
        }
    },

    transcription: {
        overview: "The synthesis of RNA from a DNA template, catalysed by RNA polymerase. Occurs in the nucleus (eukaryotes) or cytoplasm (prokaryotes).",
        stages: {
            initiation: {
                description: "RNA polymerase binds to the promoter (consensus sequences: TATA box in eukaryotes, -10 and -35 boxes in prokaryotes)",
                prokaryotes: "Sigma factor guides RNA polymerase to the promoter",
                eukaryotes: "General transcription factors assemble at the promoter and recruit RNA polymerase II"
            },
            elongation: {
                description: "RNA polymerase unwinds DNA, reads the template strand 3'→5', and synthesises RNA 5'→3'",
                ruleOfSynthesis: "RNA is complementary and antiparallel to the template strand; identical in sequence to the coding (non-template) strand, with U replacing T"
            },
            termination: {
                prokaryotes: "Rho-independent: stem-loop structure in RNA causes polymerase to stop; Rho-dependent: Rho protein chases and displaces polymerase",
                eukaryotes: "Polyadenylation signal (AAUAAA) triggers cleavage and poly-A tail addition; transcription continues until terminated"
            }
        },
        eukaryoticProcessing: {
            fivePrimeCap: "7-methylguanosine cap added to 5' end — protects mRNA from degradation and assists ribosome binding",
            polyATail: "Poly-A tail (150–250 adenine residues) added to 3' end — promotes export and stability",
            splicing: "Introns removed and exons joined by the spliceosome (snRNPs)",
            significance: "Pre-mRNA → mature mRNA (mRNA exported from nucleus for translation)"
        },
        rnaTypes: {
            mRNA: "Messenger RNA — carries coding sequence from DNA to ribosome",
            tRNA: "Transfer RNA — adaptor molecule carrying amino acids to ribosome; anticodon recognises codon",
            rRNA: "Ribosomal RNA — structural and catalytic component of the ribosome",
            snRNA: "Small nuclear RNA — component of the spliceosome",
            miRNA: "MicroRNA — post-transcriptional gene regulation via mRNA degradation/silencing"
        }
    },

    geneticCode: {
        properties: {
            triplet: "Each codon is three nucleotides long — 64 possible codons for 20 amino acids",
            degenerate: "Most amino acids are encoded by more than one codon (synonymous codons)",
            nonOverlapping: "Each nucleotide belongs to only one codon",
            nonAmbiguous: "Each codon specifies only one amino acid",
            nearlyUniversal: "Same codons specify the same amino acids in almost all organisms (exceptions: mitochondria, some protists)",
            startCodon: "AUG — methionine; defines the reading frame",
            stopCodons: "UAA, UAG, UGA — do not code for amino acids; signal termination"
        },
        degeneracySignificance: "Wobble at the third codon position means synonymous mutations (silent mutations) often do not change the amino acid sequence"
    },

    translation: {
        overview: "The decoding of mRNA sequence into a polypeptide chain, occurring at ribosomes in the cytoplasm (or on rough ER for secreted proteins).",
        ribosome: {
            structure: "Two subunits (large and small): in prokaryotes, 50S + 30S = 70S; in eukaryotes, 60S + 40S = 80S",
            sites: {
                A: "Aminoacyl site — incoming charged tRNA binds here",
                P: "Peptidyl site — tRNA carrying the growing polypeptide chain",
                E: "Exit site — discharged tRNA leaves the ribosome"
            }
        },
        stages: {
            initiation: {
                prokaryotes: "Small subunit binds Shine-Dalgarno sequence upstream of AUG; initiator tRNA (fMet-tRNA) binds AUG in P site",
                eukaryotes: "Small subunit with initiator tRNA (Met-tRNA) scans mRNA from 5' cap to first AUG (Kozak consensus)"
            },
            elongation: {
                aminoacylation: "tRNA charged with amino acid by aminoacyl-tRNA synthetase (one per amino acid)",
                steps: [
                    "Charged tRNA binds A site (codon-anticodon recognition)",
                    "Peptide bond forms between growing chain (P site) and incoming amino acid (A site) — catalysed by peptidyl transferase (23S rRNA ribozyme)",
                    "Translocation: ribosome moves 3 nucleotides (one codon) in 5'→3' direction; tRNAs shift E→P→A"
                ]
            },
            termination: {
                mechanism: "Stop codon (UAA, UAG, UGA) in A site is recognised by release factors (not tRNA)",
                outcome: "Polypeptide released; ribosome dissociates from mRNA"
            }
        },
        postTranslationalModification: [
            "Folding (assisted by chaperones)",
            "Cleavage of signal peptide",
            "Glycosylation, phosphorylation, ubiquitination",
            "Disulfide bond formation"
        ]
    },

    geneExpressionRegulation: {
        prokaryotic: {
            operon: "Cluster of functionally related genes under control of one promoter",
            lacOperon: {
                structure: "lacZ, lacY, lacA genes encoding lactose-metabolising enzymes",
                repressor: "Lac repressor binds operator and blocks transcription in absence of lactose",
                inducer: "Allolactose (lactose metabolite) binds repressor, inactivates it, allowing transcription",
                cataboliteRepression: "CRP-cAMP complex required for full activation when glucose is absent"
            },
            principle: "Negative regulation (repressor) and positive regulation (activator) control transcription in response to environmental signals"
        },
        eukaryotic: {
            levels: [
                "Chromatin remodelling: histone acetylation opens chromatin; methylation closes it",
                "Transcriptional: transcription factors bind enhancers/silencers and interact with RNA polymerase II",
                "Post-transcriptional: alternative splicing, mRNA stability, miRNA",
                "Translational: ribosome access, initiation factor regulation",
                "Post-translational: protein modification, degradation"
            ],
            enhancers: "DNA sequences that increase transcription even when far from the gene (looping model)",
            epigenetics: "Heritable changes in gene expression without change in DNA sequence (methylation, histone modification)"
        }
    },

    mutations: {
        types: {
            pointMutation: {
                transition: "Purine → purine or pyrimidine → pyrimidine substitution",
                transversion: "Purine → pyrimidine or vice versa"
            },
            consequences: {
                silent: "Synonymous codon change — same amino acid (degeneracy of code)",
                missense: "Different amino acid — may alter protein function",
                nonsense: "Premature stop codon — truncated, usually non-functional protein",
                frameshift: "Insertion or deletion shifts the reading frame — garbled protein sequence downstream"
            }
        },
        mutagens: {
            chemical: "Base analogues, alkylating agents, intercalating agents",
            physical: "UV radiation (thymine dimers), ionising radiation (double-strand breaks)",
            biological: "Transposons, viral insertions"
        },
        repairMechanisms: {
            baseExcisionRepair: "Removes damaged single bases (e.g. deaminated cytosine)",
            nucleotideExcisionRepair: "Removes bulky lesions (e.g. thymine dimers)",
            mismatchRepair: "Corrects replication errors after the fact",
            homologousRecombination: "Repairs double-strand breaks using sister chromatid as template"
        }
    },

    applications: [
        "PCR (polymerase chain reaction): amplify specific DNA sequences for diagnostics and research",
        "DNA sequencing: Sanger method and next-generation sequencing (NGS)",
        "CRISPR-Cas9: targeted genome editing using guide RNA",
        "mRNA vaccines: deliver mRNA encoding viral antigen (e.g. COVID-19 vaccines)",
        "Gene therapy: replace or silence defective genes",
        "Forensic DNA profiling: STR analysis for identification",
        "Recombinant DNA technology: insert genes into vectors for protein production"
    ],

    topicSummary: {
        coreInsights: [
            "DNA's double-helical structure — antiparallel strands, specific base pairing, hydrogen bonds — directly explains how genetic information is stored and faithfully copied.",
            "Semi-conservative replication ensures that every daughter cell receives an exact copy of the genome; the Meselson-Stahl experiment is the definitive proof of this model.",
            "Transcription is not simple copying — eukaryotic pre-mRNA is extensively processed (5' cap, poly-A tail, splicing) before it is exported as mature mRNA.",
            "The genetic code is the Rosetta Stone of molecular biology: a degenerate, non-ambiguous, nearly universal triplet code that connects nucleotide sequence to amino acid sequence.",
            "Translation is a molecular factory: the ribosome coordinates codon-anticodon recognition, peptide bond formation (by rRNA, not protein), and directional translocation in an elegant three-site cycle.",
            "Gene expression is regulated at every level from chromatin structure to protein degradation — cells do not express all genes all the time; selective regulation is essential for development and response to environment.",
            "Mutations alter gene sequence; the consequence depends entirely on where in the coding sequence the change occurs and whether the amino acid is altered — degeneracy provides a buffer against silent mutations."
        ],
        keyEquations: {
            codonPossibilities: "4³ = 64 possible codons for 20 amino acids — explains degeneracy",
            complementarity: "5'-ATGC-3' paired with 3'-TACG-5' — antiparallel complementary strand rule",
            replicationFidelity: "~1 error per 10⁹ bp (after mismatch repair) — error rate calculation basis"
        },
        dnaVsRnaComparison: {
            DNA: { sugar: "Deoxyribose", bases: "A T G C", strands: "Double", function: "Information storage", location: "Nucleus" },
            RNA: { sugar: "Ribose", bases: "A U G C", strands: "Single (usually)", function: "Information transfer/expression", location: "Nucleus + cytoplasm" }
        },
        commonMistakesToAvoid: [
            "The template strand is read 3'→5' by RNA polymerase — the RNA product is 5'→3' and matches the coding strand (with U for T)",
            "AUG is both the start codon AND codes for methionine — it does not just signal 'start'",
            "Ribosomes are not passive scaffolds — the peptidyl transferase activity resides in the 23S rRNA (a ribozyme), not in a protein",
            "Splicing removes introns — not exons; the word 'intron' contains 'in' = 'inside' (removed); 'exon' = 'expressed'",
            "Semi-conservative means each new molecule has one old + one new strand — NOT that half the molecules are old and half are new",
            "The genetic code being degenerate does NOT mean it is ambiguous — each codon specifies exactly one amino acid; degeneracy means one amino acid can be specified by multiple codons"
        ],
        connections: [
            "Enzymes: DNA polymerase, RNA polymerase, ligase, helicase — all the central dogma machinery are enzymes subject to kinetic and regulatory principles",
            "Evolution: mutations in DNA are the raw material of natural selection; the near-universality of the genetic code is evidence of common ancestry",
            "Medicine: antibiotics targeting bacterial ribosomes (70S vs 80S selectivity), antiviral drugs targeting reverse transcriptase, cancer arising from mutations in proto-oncogenes and tumour suppressors",
            "Biotechnology: PCR, CRISPR, mRNA vaccines, recombinant protein production all exploit nucleic acid biochemistry directly",
            "Epigenetics: chromatin remodelling connects gene expression to environment and development without changing DNA sequence"
        ],
        examReadinessChecklist: [
            "Can you draw a nucleotide and label all three components? Can you distinguish deoxyribose from ribose?",
            "Can you sketch the DNA double helix with correct antiparallel orientation and base-pair hydrogen bonds?",
            "Can you describe and explain the leading and lagging strand mechanism at the replication fork?",
            "Can you trace the journey from gene to protein through transcription, processing, and translation?",
            "Can you predict the consequence of a frameshift mutation vs a silent mutation?",
            "Can you explain how the lac operon responds to lactose and glucose levels?",
            "Can you connect ribosome A, P, and E sites to the elongation cycle?"
        ]
    }
},


proteins: {
    title: "Protein Structure and Function: From Sequence to Shape to Role",

    databaseLinks: {
        misconceptions: [
            'proteinBasics',
            'proteinStructure',
            'proteinFolding',
            'proteinFunction',
            'proteinDenaturation'
        ],
        contextualScenarios: [
            'proteinBasics',
            'proteinStructure',
            'proteinFolding',
            'proteinFunction'
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
            'proteinBasics',
            'proteinStructure',
            'proteinFolding',
            'proteinFunction'
        ]
    },

    conceptLinks: {
        "Proteins are polymers of amino acids linked by peptide bonds": {
            misconceptions:      ['proteinBasics'],
            scenarios:           ['proteinBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['proteinBasics']
        },
        "Protein structure is organised into four hierarchical levels": {
            misconceptions:      ['proteinStructure'],
            scenarios:           ['proteinStructure'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['proteinStructure']
        },
        "Primary sequence determines three-dimensional structure": {
            misconceptions:      ['proteinFolding'],
            scenarios:           ['proteinFolding'],
            studyTips:           ['diagrams', 'specimens', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['proteinFolding']
        },
        "Protein function depends on precise three-dimensional shape": {
            misconceptions:      ['proteinFunction', 'proteinDenaturation'],
            scenarios:           ['proteinFunction'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['proteinFunction']
        },
        "Denaturation disrupts structure and abolishes function": {
            misconceptions:      ['proteinDenaturation'],
            scenarios:           ['proteinFolding'],
            studyTips:           ['specimens', 'dissectionAndExperiment'],
            assessmentRubrics:   ['understand', 'apply', 'evaluate'],
            assessmentQuestions: ['proteinStructure']
        }
    },

    topicIntroduction: {
        overview: "Proteins are the molecular workhorses of every living cell. They are involved in virtually every biological process: catalysing reactions as enzymes, transporting molecules, defending against pathogens, providing structural support, relaying signals, and regulating gene expression. Their extraordinary functional diversity arises from a deceptively simple building principle — a linear chain of amino acids that folds into a precise three-dimensional shape. Understanding protein structure is therefore the foundation for understanding how life works at the molecular level.",
        whyItMatters: "Every inherited disease caused by a single amino acid change (sickle cell anaemia, cystic fibrosis, PKU), every antibody that neutralises a pathogen, every drug that binds its target protein, and every structural material in the human body from collagen to keratin — all depend on the relationship between amino acid sequence and three-dimensional protein structure. Protein misfolding underlies Alzheimer's, Parkinson's, and prion diseases. The ability to engineer proteins is revolutionising medicine and biotechnology.",
        bigPicture: "The central principle of protein biology is sequence-structure-function: the linear sequence of amino acids (encoded by DNA) determines how the protein folds, and the fold determines what the protein does. This hierarchy — from gene to sequence to structure to function — is one of the deepest organising principles in all of molecular biology.",
        priorKnowledge: [
            "Organic chemistry basics: carbon bonding, functional groups, condensation and hydrolysis reactions",
            "Cell biology: organelles, ribosomes, endomembrane system",
            "Molecular biology: DNA, RNA, translation (genetic code)",
            "Basic thermodynamics: free energy, entropy, hydrophobic effect",
            "Acids and bases: pH, pKa, ionisation of functional groups"
        ],
        topicRoadmap: [
            "Amino acid structure: general structure, R-group classification, ionisation",
            "The peptide bond: formation by condensation, planarity, directionality (N- to C-terminus)",
            "Primary structure: sequence, one-letter and three-letter codes, sequence databases",
            "Secondary structure: α-helix and β-sheet — hydrogen bonding patterns and geometric constraints",
            "Tertiary structure: all non-covalent interactions and disulfide bonds that fold the polypeptide",
            "Quaternary structure: assembly of multiple subunits, cooperativity",
            "Protein folding: thermodynamic principles, chaperones, folding diseases",
            "Fibrous vs globular proteins: structural vs functional proteins",
            "Post-translational modifications: glycosylation, phosphorylation, cleavage",
            "Protein function categories: enzymes, transport, structural, signalling, immune",
            "Techniques: SDS-PAGE, Western blot, X-ray crystallography, cryo-EM"
        ]
    },

    concepts: [
        "Proteins are polymers of amino acids linked by peptide bonds",
        "Protein structure is organised into four hierarchical levels",
        "Primary sequence determines three-dimensional structure",
        "Secondary structure arises from hydrogen bonding along the backbone",
        "Tertiary structure is stabilised by multiple non-covalent interactions and disulfide bonds",
        "Quaternary structure involves association of multiple polypeptide subunits",
        "Protein function depends on precise three-dimensional shape",
        "Denaturation disrupts structure and abolishes function"
    ],

    theory: "Proteins are the molecular executors of biological function. Their extraordinary diversity — from the rigid collagen fibres of tendons to the catalytic precision of enzymes to the specificity of antibodies — emerges entirely from the sequence of twenty amino acids and the physical chemistry that governs how that sequence folds in an aqueous environment.",

    keyDefinitions: {
        "Amino Acid":           "Monomer unit of proteins; contains amino group, carboxyl group, hydrogen, and R-group on a central α-carbon",
        "Peptide Bond":         "Covalent bond between carboxyl group of one amino acid and amino group of the next; formed by condensation",
        "Polypeptide":          "Chain of amino acids linked by peptide bonds; has N-terminus and C-terminus",
        "Primary Structure":    "Sequence of amino acids in the polypeptide chain",
        "Secondary Structure":  "Local regular folding stabilised by hydrogen bonds between backbone atoms (α-helix, β-sheet)",
        "Tertiary Structure":   "Overall 3D shape of a single polypeptide, stabilised by interactions between R-groups",
        "Quaternary Structure": "Association of two or more polypeptide subunits to form a functional protein",
        "Denaturation":         "Disruption of protein structure (secondary, tertiary, quaternary) by heat, pH extremes, or chemicals, without breaking peptide bonds",
        "Chaperone":            "Protein that assists correct folding of other proteins without being part of the final structure",
        "Proteome":             "The complete set of proteins expressed by a cell, tissue, or organism at a given time",
        "Domain":               "Independently folding structural and functional unit within a protein",
        "Motif":                "Small recurring structural element found in many proteins (e.g. zinc finger, helix-loop-helix)",
        "Isoelectric Point (pI)": "pH at which a protein carries zero net charge and has minimum solubility"
    },

    aminoAcidStructure: {
        generalStructure: {
            components: [
                "Central α-carbon",
                "Amino group (–NH₂) — basic, accepts proton at physiological pH",
                "Carboxyl group (–COOH) — acidic, donates proton at physiological pH",
                "Hydrogen atom",
                "R-group (side chain) — determines identity, properties, and interactions"
            ],
            chiralityNote: "All amino acids (except glycine) are L-isomers in proteins — biological specificity requires a single enantiomer"
        },
        rGroupClassification: {
            nonpolarAliphatic:  { examples: ["Glycine (G)", "Alanine (A)", "Valine (V)", "Leucine (L)", "Isoleucine (I)", "Proline (P)", "Methionine (M)"], property: "Hydrophobic; prefer interior of globular proteins" },
            aromaticNonpolar:   { examples: ["Phenylalanine (F)", "Tryptophan (W)", "Tyrosine (Y — partially)"], property: "Hydrophobic; contribute to core packing; Trp absorbs UV at 280 nm" },
            polarUncharged:     { examples: ["Serine (S)", "Threonine (T)", "Asparagine (N)", "Glutamine (Q)", "Cysteine (C)", "Tyrosine (Y)"], property: "Can form hydrogen bonds; often on protein surface or active sites" },
            positivelycharged:  { examples: ["Lysine (K)", "Arginine (R)", "Histidine (H)"], property: "Carry positive charge at pH 7; form ionic interactions and H-bonds" },
            negativelycharged:  { examples: ["Aspartate (D)", "Glutamate (E)"], property: "Carry negative charge at pH 7; form ionic interactions; often in active sites" },
            special: {
                glycine:  "Smallest — no chiral centre; allows backbone flexibility",
                proline:  "Secondary amine — rigid ring constrains backbone; helix breaker",
                cysteine: "–SH group; forms disulfide bonds; crucial for tertiary and quaternary structure"
            }
        }
    },

    peptideBond: {
        formation: "Condensation reaction between α-carboxyl of one amino acid and α-amino of the next; water is released",
        properties: [
            "Partial double bond character — electrons delocalised across C–N bond",
            "Planar — all four atoms (Cα–C=O–N–Cα) lie in the same plane",
            "Trans configuration energetically favoured (R-groups on opposite sides)",
            "Cannot freely rotate — only φ (phi) and ψ (psi) angles of the backbone can rotate",
            "Slightly polar — C=O and N–H can form hydrogen bonds"
        ],
        ramachandranPlot: "Plots φ vs ψ angles; allowed regions correspond to α-helix and β-sheet; sterically forbidden regions are avoided"
    },

    proteinStructure: {
        primary: {
            definition: "The linear sequence of amino acids from N-terminus to C-terminus",
            determinedBy: "Gene sequence (codon-by-codon translation)",
            importance: "Determines all higher levels of structure; a single amino acid change can abolish function (e.g. sickle cell disease — Glu6→Val in β-globin)",
            databases: "UniProt, NCBI Protein — millions of known sequences"
        },
        secondary: {
            alphaHelix: {
                structure: "Right-handed spiral; 3.6 residues per turn; rise of 0.54 nm per turn",
                stabilisation: "Hydrogen bonds between backbone C=O of residue n and N–H of residue n+4",
                R_groups: "Project outward from helix backbone",
                helixBreakers: "Proline (rigid ring prevents required φ angle); glycine (too flexible, destabilises helix)",
                examples: "Myoglobin (8 helices), transmembrane helices in membrane proteins"
            },
            betaSheet: {
                structure: "Extended strands hydrogen-bonded side-by-side; parallel or antiparallel",
                stabilisation: "Hydrogen bonds between backbone atoms of adjacent strands",
                parallel: "Strands run N→C in same direction; slightly weaker H-bonds",
                antiparallel: "Strands run in opposite directions; stronger H-bonds; more stable",
                R_groups: "Alternate above and below the sheet plane",
                examples: "Silk fibroin (β-sheet rich), immunoglobulin β-sandwich domains"
            },
            loops: "Non-regular connecting regions; often on protein surface; frequently form binding sites; less constrained by backbone geometry"
        },
        tertiary: {
            definition: "The complete three-dimensional fold of a single polypeptide chain",
            stabilisedBy: {
                hydrophobicEffect:    "Non-polar R-groups cluster in the protein interior away from water — the dominant driving force for folding",
                hydrogenBonds:        "Between polar R-groups and between R-groups and backbone",
                ionicInteractions:    "Between oppositely charged R-groups (salt bridges)",
                vanDerWaalsForces:    "Weak but numerous short-range attractions between atoms in close contact",
                disulfideBonds:       "Covalent bond between two Cys –SH groups; very strong; important in secreted and extracellular proteins; formed in endoplasmic reticulum"
            },
            domains: "Independently folding units within a protein; can be shuffled by evolution to create new proteins; often correspond to distinct functions"
        },
        quaternary: {
            definition: "The arrangement of two or more polypeptide subunits (protomers) in a multi-subunit protein",
            types: {
                homodimer:  "Two identical subunits",
                heterodimer: "Two different subunits",
                tetramer:   "Four subunits (e.g. haemoglobin: 2α + 2β)",
            },
            stabilisedBy: "Same non-covalent interactions as tertiary structure; sometimes disulfide bonds between subunits",
            advantages: [
                "Cooperativity — subunit interactions enable allosteric regulation",
                "Error correction — misfolded subunit less likely to be incorporated",
                "Economy — large structures built from repeated small subunits",
                "Active sites can form at subunit interfaces"
            ],
            example: "Haemoglobin — T-state (deoxygenated, low O₂ affinity) and R-state (oxygenated, high affinity) interconvert due to quaternary structural change"
        }
    },

    proteinFolding: {
        thermodynamics: {
            drivingForce: "Hydrophobic effect — burial of non-polar groups is enthalpically and entropically favourable overall; net decrease in system free energy",
            anfinsensExperiment: {
                year: 1961,
                finding: "Denatured ribonuclease refolds spontaneously in vitro, recovering full activity — proving that primary sequence contains all information needed for folding",
                implication: "Folding is encoded in the sequence; no external template needed"
            },
            freeEnergy: "Native state is typically only marginally more stable than unfolded state (ΔG ≈ −20 to −40 kJ/mol) — small, allowing regulated unfolding"
        },
        foldingPathway: {
            nucleation:  "Formation of initial secondary structure elements (early, fast)",
            collapse:    "Hydrophobic collapse draws non-polar regions inward",
            refinement:  "Final packing, loop placement, and tertiary contact formation"
        },
        molecularChaperones: {
            function:  "Bind exposed hydrophobic regions of partially folded proteins, preventing aggregation; do not encode final structure",
            mechanism: "ATP-dependent cycles of binding and release give protein repeated opportunities to fold correctly",
            classes:   ["Hsp70 — binds extended hydrophobic segments; prevents premature folding", "Hsp60/GroEL — barrel-shaped cavity; provides protected environment for folding", "Hsp90 — assists folding of signal transduction proteins"],
            induction: "Heat shock response — cells upregulate chaperones when proteins are denatured by stress"
        },
        misfoldingDiseases: {
            prionDiseases:   "PrPᶜ (normal α-helix rich) converts to PrPˢᶜ (β-sheet rich, insoluble); propagates misfolding; CJD, BSE, scrapie",
            amyloidDiseases: "Proteins misfold into insoluble β-sheet-rich fibrils; Alzheimer's (amyloid-β, tau), Parkinson's (α-synuclein), type 2 diabetes (IAPP)",
            mechanism:       "Hydrophobic regions exposed; aggregate into cross-β fibrils; toxic to cells",
            cftr:            "Cystic fibrosis most common mutation (ΔF508) — protein misfolds and is degraded by ER quality control before reaching cell surface"
        }
    },

    fibrosVsGlobular: {
        fibrousProteins: {
            definition:    "Extended, repetitive structures; insoluble in water; structural roles",
            collagen: {
                structure: "Triple helix of three polypeptides wound together; Gly-X-Y repeat (Gly every 3rd residue required for tight packing); stabilised by H-bonds and inter-chain crosslinks",
                function:  "Tensile strength in tendons, bone matrix, skin, blood vessel walls",
                disease:   "Scurvy — vitamin C deficiency prevents hydroxylation of proline; unstable collagen; bleeding gums, poor wound healing"
            },
            keratin: {
                structure: "α-helical coiled coil (two α-helices wound around each other); extensively crosslinked by disulfide bonds (hard keratin: nails, hair)",
                function:  "Structural protein of hair, nails, skin epidermis, horns, feathers",
                types:     "Soft keratin (skin) — fewer disulfide bonds; hard keratin (nails, hair) — extensive disulfide crosslinks"
            },
            silk: {
                structure: "Antiparallel β-sheets stacked; Gly-Ala repeats allow tight packing",
                function:  "Tensile strength with flexibility in spider silk and silkworm cocoons"
            }
        },
        globularProteins: {
            definition:    "Compact, roughly spherical; soluble in water; functional roles (enzymes, transport, signalling, immune)",
            examples:      ["Haemoglobin — O₂ transport", "Myoglobin — O₂ storage", "Immunoglobulins — immune defence", "Enzymes — catalysis", "Insulin — hormonal signalling"],
            generalFeatures: [
                "Hydrophobic core buried; hydrophilic surface exposed to solvent",
                "Binding sites (active sites, receptor sites) often in clefts or pockets",
                "Often undergo conformational change on ligand binding"
            ]
        }
    },

    haemoglobinAsModel: {
        structure:      "Tetramer: 2α-chains + 2β-chains; each subunit contains one haem group with central Fe²⁺; Fe²⁺ binds O₂ reversibly",
        cooperativity:  "O₂ binding to one subunit increases affinity of remaining subunits (positive cooperativity); produces sigmoidal O₂-dissociation curve",
        tAndRState:     "T-state (tense, low O₂ affinity) ↔ R-state (relaxed, high O₂ affinity); O₂ binding shifts equilibrium toward R-state",
        bohrEffect:     "Increased CO₂ / decreased pH stabilises T-state → reduced O₂ affinity → O₂ released in metabolically active tissues",
        sickleCellDisease: {
            mutation:   "Glu6→Val in β-globin (A→T in codon 6) — single nucleotide polymorphism",
            effect:     "Valine is hydrophobic; deoxyhaemoglobin S aggregates into rigid fibres; red blood cells sickle",
            consequence: "Vaso-occlusion, haemolytic anaemia, organ damage",
            heterozygoteAdvantage: "HbA/HbS heterozygotes have partial protection against Plasmodium falciparum malaria — classic example of balancing selection"
        }
    },

    postTranslationalModifications: {
        glycosylation:    "Addition of carbohydrate chains; increases solubility, assists folding, cell-surface recognition (N-linked in ER; O-linked in Golgi)",
        phosphorylation:  "Addition of phosphate (Ser, Thr, Tyr); activates or inhibits; reversible signal transduction mechanism",
        ubiquitination:   "Addition of ubiquitin chain; marks proteins for proteasomal degradation",
        cleavage:         "Removal of signal peptide or propeptide to activate protein (e.g. proinsulin → insulin; zymogens → active proteases)",
        hydroxylation:    "Proline and lysine in collagen; requires vitamin C; essential for triple helix stability",
        acetylation:      "N-terminal acetylation or histone acetylation; affects stability and gene expression"
    },

    proteinTechniques: {
        sdsPage: {
            principle: "SDS denatures proteins and coats them with uniform negative charge; polyacrylamide gel separates by size only; smaller proteins migrate faster",
            use:       "Determine molecular weight; assess purity; compare protein profiles"
        },
        westernBlot: {
            principle: "SDS-PAGE + transfer to membrane + probing with specific antibody + detection",
            use:       "Identify specific protein in a complex mixture; assess expression levels"
        },
        xRayCrystallography: {
            principle: "Protein crystal diffracts X-rays; electron density map calculated; atomic model built",
            use:       "Determine 3D structure at atomic resolution; basis for structure-based drug design",
            limitation: "Requires crystal; static snapshot; not all proteins crystallise"
        },
        cryoEM: {
            principle: "Proteins frozen in vitreous ice; electron microscope images from multiple angles; computational 3D reconstruction",
            use:       "Structure determination without crystals; captures multiple conformations; excellent for large complexes",
            advantage: "Revolution in structural biology since ~2013 ('resolution revolution')"
        },
        nmrSpectroscopy: {
            principle: "Nuclear spin resonance gives distance constraints; structure calculated from constraints",
            use:       "Solution structure; protein dynamics; smaller proteins (< ~50 kDa)"
        }
    },

    applications: [
        "Drug design: structure-based targeting of disease-causing proteins",
        "Protein engineering and directed evolution for industrial and therapeutic proteins",
        "Monoclonal antibodies as therapeutics (cancer, autoimmune disease)",
        "Recombinant protein production (insulin, growth hormone, erythropoietin)",
        "Gene therapy vectors: viral capsid proteins engineered for cell targeting",
        "Diagnostics: protein biomarkers for disease (troponin for heart attack, PSA for prostate cancer)",
        "Food science: protein denaturation in cooking, cheese-making, bread baking",
        "Biomaterials: silk, collagen scaffolds for tissue engineering"
    ],

    topicSummary: {
        coreInsights: [
            "Proteins are built from twenty amino acids whose R-groups determine chemical properties — hydrophobic, polar, charged — and thus govern how and where each residue sits in the folded protein.",
            "The peptide bond has partial double-bond character, making it planar and restricting rotation — only φ and ψ backbone angles are free, constraining the conformational space available to a polypeptide.",
            "Secondary structure (α-helix and β-sheet) arises from hydrogen bonding between backbone atoms, not R-groups — it is a universal feature independent of sequence specifics.",
            "Tertiary structure is driven primarily by the hydrophobic effect — non-polar residues cluster inward to minimise contact with water, with other interactions (H-bonds, ionic, van der Waals, disulfide) providing specificity and stability.",
            "Anfinsen's experiment proved that primary sequence encodes all information for folding — but in the cell, chaperones are needed to prevent aggregation during the slow and error-prone folding process.",
            "Quaternary structure enables cooperativity and allostery — haemoglobin's sigmoidal O₂-binding curve is entirely a consequence of its four-subunit quaternary structure.",
            "Denaturation disrupts non-covalent interactions and unfolds the protein — function is lost because shape is lost — but peptide bonds remain intact.",
            "A single amino acid substitution can abolish function (sickle cell disease) or dramatically alter it — sequence → structure → function is not merely a slogan but a causally precise chain."
        ],
        keyRelationships: {
            sequenceToStructure:    "Primary sequence determines folding; thermodynamic minimum is the native state",
            structureToFunction:    "3D shape creates binding sites, catalytic residues, structural frameworks",
            modificationToFunction: "PTMs modulate activity, localisation, and stability post-translation",
            misfoldingToDisease:    "Loss of correct fold = loss of function + often gain of toxic aggregation"
        },
        structuralLevelComparison: {
            primary:    { bond: "Peptide bond (covalent)", stabilisedBy: "Covalent chemistry", canDenature: "No — sequence is retained after denaturation" },
            secondary:  { bond: "Hydrogen bonds (backbone)", stabilisedBy: "H-bonds between C=O and N–H", canDenature: "Yes" },
            tertiary:   { bond: "Multiple non-covalent + disulfide", stabilisedBy: "Hydrophobic effect, H-bonds, ionic, vdW, S–S", canDenature: "Yes (except disulfide bonds)" },
            quaternary: { bond: "Non-covalent between subunits", stabilisedBy: "Same as tertiary", canDenature: "Yes — subunits dissociate" }
        },
        commonMistakesToAvoid: [
            "Denaturation does NOT break peptide bonds — primary structure is preserved; only 3D structure is lost",
            "Hydrogen bonds in secondary structure form between BACKBONE atoms, not R-groups — this is why secondary structure is sequence-independent in principle",
            "The hydrophobic effect is NOT the same as hydrophobic bonds — it is an entropy-driven phenomenon: water molecules become ordered around non-polar groups, so burying them releases water entropy",
            "Quaternary structure is NOT present in all proteins — only multi-subunit proteins have it; myoglobin (monomer) has no quaternary structure",
            "Chaperones do NOT encode the final folded structure — they prevent misfolding and aggregation; the native fold is determined by sequence alone",
            "Proline does not simply 'break' helices — it introduces a rigid kink; it is structurally disruptive because its ring prevents the standard φ angle required in an α-helix"
        ],
        connections: [
            "Enzymes: all enzymes are proteins; their catalytic mechanism depends entirely on tertiary and quaternary structure",
            "Genetics: every protein sequence is encoded by a gene; mutations alter sequence, alter structure, alter function — the molecular basis of inherited disease",
            "Cell signalling: receptor proteins, kinases, and transcription factors are all proteins whose function depends on precise conformational changes",
            "Immunology: antibodies are proteins with a quaternary structure that generates enormous binding diversity through variable domain sequences",
            "Evolution: protein families share structural domains despite divergent sequences — protein structure is more conserved than sequence across evolutionary time"
        ],
        examReadinessChecklist: [
            "Can you classify all 20 amino acids by R-group property and explain the consequence for protein structure?",
            "Can you draw a peptide bond and explain why it is planar?",
            "Can you draw α-helix and β-sheet hydrogen bonding patterns from memory?",
            "Can you list all tertiary structure-stabilising interactions and give one example R-group pair for each?",
            "Can you explain Anfinsen's experiment and its implications for folding?",
            "Can you explain haemoglobin cooperativity using T-state/R-state terminology?",
            "Can you explain how a single amino acid change causes sickle cell disease at every level from mutation to phenotype?",
            "Can you describe the principle and application of SDS-PAGE and Western blotting?"
        ]
    }
},

lipids: {
    title: "Lipid Structure and Function: Fats, Membranes, and Signalling Molecules",

    databaseLinks: {
        misconceptions: [
            'lipidBasics',
            'fattyAcids',
            'membraneStructure',
            'lipidMetabolism',
            'sterols'
        ],
        contextualScenarios: [
            'lipidBasics',
            'fattyAcids',
            'membraneStructure',
            'lipidMetabolism'
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
            'lipidBasics',
            'fattyAcids',
            'membraneStructure',
            'lipidMetabolism'
        ]
    },

    conceptLinks: {
        "Lipids are defined by hydrophobicity, not by a common chemical bond": {
            misconceptions:      ['lipidBasics'],
            scenarios:           ['lipidBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['lipidBasics']
        },
        "Fatty acid saturation determines physical state and membrane fluidity": {
            misconceptions:      ['fattyAcids'],
            scenarios:           ['fattyAcids'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['fattyAcids']
        },
        "Phospholipids form bilayers due to amphipathic structure": {
            misconceptions:      ['membraneStructure'],
            scenarios:           ['membraneStructure'],
            studyTips:           ['diagrams', 'specimens', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['membraneStructure']
        },
        "Cholesterol modulates membrane fluidity and is precursor to steroids": {
            misconceptions:      ['sterols'],
            scenarios:           ['membraneStructure'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply', 'evaluate'],
            assessmentQuestions: ['lipidBasics']
        },
        "Lipid metabolism involves beta-oxidation and fatty acid synthesis": {
            misconceptions:      ['lipidMetabolism'],
            scenarios:           ['lipidMetabolism'],
            studyTips:           ['comparisonTables', 'practiceRoutines', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['lipidMetabolism']
        }
    },

    topicIntroduction: {
        overview: "Lipids are a chemically diverse group of hydrophobic or amphipathic molecules that serve as the structural foundation of biological membranes, the most energy-dense fuel storage molecules in biology, essential signalling messengers, and precursors to steroid hormones and vitamins. Unlike proteins or nucleic acids, lipids are not defined by a shared chemical bond but by their physical property: insolubility in water and solubility in organic solvents. This lesson covers the major lipid classes — fatty acids, triacylglycerols, phospholipids, sphingolipids, and sterols — their structural logic, biological roles, and the metabolic pathways that synthesise and degrade them.",
        whyItMatters: "Lipid biology is central to human health and disease. Atherosclerosis, obesity, type 2 diabetes, and many neurological conditions involve lipid dysregulation. Every drug that crosses a cell membrane must navigate the lipid bilayer. Dietary fats — saturated, unsaturated, trans — directly influence membrane composition and cardiovascular risk. Understanding lipids is not merely academic: it underpins nutritional science, drug delivery, metabolic medicine, and our understanding of how cells are built and how they communicate.",
        bigPicture: "All lipid functions arise from one fundamental property: the hydrophobic effect. When nonpolar lipid tails avoid water, they spontaneously organise into structures — bilayers, micelles, droplets — that are thermodynamically stable. This self-assembly principle explains membrane formation, lipoprotein packaging, and the phase behaviour of fats without requiring any additional energy input from the cell.",
        priorKnowledge: [
            "Basic organic chemistry: carbon chains, double bonds, functional groups (carboxyl, hydroxyl, ester, phosphate)",
            "Thermodynamics: hydrophobic effect, Gibbs free energy, entropy",
            "Cell biology: membrane structure, organelles",
            "Biochemistry: esterification, hydrolysis, oxidation-reduction reactions",
            "Metabolism basics: ATP production, mitochondrial function, acetyl-CoA"
        ],
        topicRoadmap: [
            "Lipid classification: the unifying property of hydrophobicity",
            "Fatty acid structure: chain length, saturation, cis/trans geometry",
            "Triacylglycerols: structure, storage, and mobilisation",
            "Phospholipids and glycolipids: building the bilayer",
            "Cholesterol and sterols: fluidity buffers and hormone precursors",
            "Lipid digestion, transport, and lipoproteins",
            "Beta-oxidation: fatty acid catabolism and ATP yield",
            "Fatty acid synthesis: the fatty acid synthase complex",
            "Eicosanoids and lipid signalling",
            "Lipids in disease: atherosclerosis, obesity, and lipid storage disorders"
        ]
    },

    concepts: [
        "Lipids are defined by hydrophobicity, not by a common chemical bond",
        "Fatty acid chain length and saturation determine physical properties",
        "Phospholipids are amphipathic and spontaneously form bilayers",
        "Triacylglycerols are the primary energy storage form",
        "Cholesterol modulates membrane fluidity and is a steroid precursor",
        "Beta-oxidation catabolises fatty acids to acetyl-CoA",
        "Fatty acid synthesis is distinct from and opposite to beta-oxidation",
        "Lipid signalling molecules include eicosanoids, sphingosine-1-phosphate, and DAG"
    ],

    theory: "Lipids are a heterogeneous class of biological molecules unified by hydrophobicity. Their remarkable structural diversity — from simple fatty acids to complex glycosphingolipids — underpins their equally diverse functions: energy storage, membrane architecture, cellular signalling, and hormone biosynthesis.",

    keyDefinitions: {
        "Lipid": "Biomolecule defined by hydrophobicity; soluble in organic solvents, insoluble in water",
        "Fatty Acid": "Long-chain carboxylic acid; the basic building block of most complex lipids",
        "Saturated Fatty Acid": "Fatty acid with no carbon-carbon double bonds; maximum hydrogen content",
        "Unsaturated Fatty Acid": "Fatty acid with one or more C=C double bonds; monounsaturated (one) or polyunsaturated (many)",
        "Triacylglycerol (TAG)": "Three fatty acids esterified to glycerol; primary form of energy storage",
        "Phospholipid": "Glycerol backbone with two fatty acids and a phosphate-linked head group; major membrane component",
        "Sphingolipid": "Lipid based on sphingosine backbone; includes sphingomyelin and cerebrosides",
        "Amphipathic": "Having both hydrophilic (polar) and hydrophobic (nonpolar) regions",
        "Micelle": "Spherical aggregation of amphipathic molecules in water with hydrophobic tails inward",
        "Lipid Bilayer": "Two leaflets of phospholipids with tails facing inward; the basis of cell membranes",
        "Cholesterol": "Sterol lipid with a four-ring structure; regulates membrane fluidity and is a hormone precursor",
        "Beta-Oxidation": "Mitochondrial pathway that progressively cleaves two-carbon units from fatty acids as acetyl-CoA",
        "Lipoprotein": "Complex of lipids and proteins for lipid transport in blood (VLDL, LDL, HDL)",
        "Eicosanoid": "C20 lipid signalling molecule derived from arachidonic acid; includes prostaglandins, thromboxanes, leukotrienes",
        "Saponification": "Alkaline hydrolysis of ester bonds in fats to produce glycerol and fatty acid salts (soaps)"
    },

    fattyAcidStructure: {
        nomenclature: {
            system: "Carbon chain length : number of double bonds (position of first double bond from omega end)",
            examples: {
                "16:0": "Palmitic acid — 16 carbons, no double bonds (saturated)",
                "18:1(Δ9)": "Oleic acid — 18 carbons, one double bond at C9 (monounsaturated)",
                "18:2(Δ9,12)": "Linoleic acid — 18 carbons, two double bonds (omega-6 essential)",
                "20:4(Δ5,8,11,14)": "Arachidonic acid — 20 carbons, four double bonds (eicosanoid precursor)",
                "22:6(Δ4,7,10,13,16,19)": "DHA — 22 carbons, six double bonds (omega-3, neuronal membranes)"
            }
        },
        saturationEffects: {
            saturated: {
                geometry: "Straight, fully extended chain",
                packing: "Pack tightly together; high melting point; solid at room temperature",
                examples: "Palmitic (C16), stearic (C18) — found in butter, lard, coconut oil"
            },
            cisUnsaturated: {
                geometry: "Kink at each double bond; cannot pack tightly",
                packing: "Loose packing; low melting point; liquid at room temperature",
                examples: "Oleic (C18:1), linoleic (C18:2) — found in olive oil, sunflower oil"
            },
            transUnsaturated: {
                geometry: "Double bond present but in trans configuration; nearly straight chain",
                packing: "Packs more like saturated fats; higher melting point than cis equivalent",
                health: "Associated with increased cardiovascular risk; formed by industrial partial hydrogenation",
                examples: "Elaidic acid (trans-18:1) — found in partially hydrogenated vegetable oils"
            }
        },
        essentialFattyAcids: {
            definition: "Fatty acids that cannot be synthesised by humans and must be obtained from diet",
            omega6: "Linoleic acid (18:2) — precursor to arachidonic acid and pro-inflammatory eicosanoids",
            omega3: "Alpha-linolenic acid (18:3) — precursor to EPA and DHA; anti-inflammatory eicosanoids"
        }
    },

    lipidClasses: {
        triacylglycerols: {
            structure: "Glycerol backbone with fatty acids esterified at sn-1, sn-2, and sn-3 positions",
            function: "Primary energy storage; stored in adipocytes as lipid droplets",
            caloric: "9 kcal/g (more than twice the energy density of carbohydrates or proteins)",
            mobilisation: "Hormone-sensitive lipase cleaves TAGs to fatty acids and glycerol for transport and oxidation",
            synthesis: "Requires glycerol-3-phosphate and acyl-CoA; occurs in liver, intestine, and adipose tissue"
        },
        phospholipids: {
            glycerophospholipids: {
                backbone: "Glycerol with two fatty acids at sn-1 and sn-2; phosphate-linked head group at sn-3",
                headGroups: {
                    "Phosphatidylcholine (PC)": "Most abundant; outer leaflet of plasma membrane",
                    "Phosphatidylethanolamine (PE)": "Inner leaflet; involved in membrane curvature",
                    "Phosphatidylserine (PS)": "Inner leaflet; flips to outer in apoptosis (eat-me signal)",
                    "Phosphatidylinositol (PI)": "Inner leaflet; source of second messengers (IP3, DAG)",
                    "Cardiolipin": "Mitochondrial inner membrane; two phosphate groups; unique to mitochondria"
                }
            },
            sphingomyelin: {
                backbone: "Sphingosine (amino alcohol) instead of glycerol",
                function: "Abundant in myelin sheath; found in lipid rafts with cholesterol",
                structure: "Ceramide + phosphocholine head group"
            }
        },
        glycolipids: {
            cerebrosides: "Ceramide + single sugar (glucose or galactose); abundant in neuronal membranes",
            gangliosides: "Ceramide + oligosaccharide including sialic acid; cell recognition and signalling",
            function: "Cell-cell recognition, immune function, ABO blood group antigens"
        },
        sterols: {
            cholesterol: {
                structure: "Four fused carbon rings (steroid nucleus) with hydroxyl group at C3 and hydrocarbon tail",
                membraneRole: "Inserts between phospholipids; reduces fluidity at high temperature, prevents gel formation at low temperature — acts as fluidity buffer",
                precursor: "Bile acids, steroid hormones (cortisol, testosterone, oestrogen), vitamin D",
                transport: "Carried in blood as LDL and HDL",
                synthesis: "HMG-CoA reductase (rate-limiting enzyme) — target of statin drugs"
            }
        },
        waxes: {
            structure: "Long-chain fatty acid esterified to long-chain alcohol",
            function: "Waterproofing: plant cuticles, insect exoskeletons, earwax, whale spermaceti"
        }
    },

    membraneStructure: {
        bilayerFormation: {
            driving: "Hydrophobic effect: nonpolar tails avoid water; polar heads face aqueous environment",
            thermodynamics: "Spontaneous (negative ΔG); driven by increased entropy of water molecules released from solvation of hydrophobic tails",
            self_assembly: "No template or energy input required; determined entirely by amphipathic structure"
        },
        fluidMosaicModel: {
            proposed: "Singer and Nicolson (1972)",
            features: [
                "Phospholipid bilayer is a two-dimensional fluid — lipids and proteins can diffuse laterally",
                "Membrane proteins embedded in or associated with the bilayer (integral vs peripheral)",
                "Asymmetry: different lipid composition in inner and outer leaflets",
                "Cholesterol distributed throughout both leaflets"
            ]
        },
        fluidityDeterminants: {
            temperature: "Higher temperature increases fluidity (more kinetic energy)",
            chainLength: "Longer chains: more van der Waals interactions, lower fluidity",
            saturation: "More double bonds (cis): more kinks, less tight packing, higher fluidity",
            cholesterol: {
                highTemp: "Restrains phospholipid movement — reduces fluidity",
                lowTemp: "Prevents gel formation — maintains fluidity",
                conclusion: "Acts as fluidity buffer across physiological temperature range"
            }
        },
        lipidRafts: {
            description: "Microdomains enriched in sphingomyelin, cholesterol, and specific proteins",
            function: "Organise signalling receptors; involved in endocytosis and signal transduction"
        }
    },

    lipidMetabolism: {
        digestionAndAbsorption: {
            emulsification: "Bile salts (made from cholesterol) emulsify dietary fat into micelles in small intestine",
            digestion: "Pancreatic lipase cleaves TAG to 2-monoacylglycerol and two free fatty acids",
            absorption: "Micelles deliver products to enterocytes; TAGs reassembled and packaged into chylomicrons",
            transport: "Chylomicrons → lymph → blood; lipoprotein lipase releases fatty acids in tissues"
        },
        lipoproteins: {
            chylomicrons:  "Largest; carry dietary TAG from intestine to tissues",
            VLDL:          "Carry hepatic TAG to peripheral tissues; become LDL after TAG removal",
            LDL:           "Carry cholesterol to tissues; taken up by LDL receptor; high levels → atherosclerosis",
            HDL:           "Reverse cholesterol transport — removes cholesterol from tissues back to liver",
            densityLogic:  "Higher protein content → higher density (HDL > LDL > VLDL > chylomicrons)"
        },
        betaOxidation: {
            location: "Mitochondrial matrix",
            activation: "Fatty acid + CoA + ATP → Fatty acyl-CoA (by acyl-CoA synthetase); costs 2 ATP equivalents",
            transport: "Carnitine shuttle transports fatty acyl-CoA into mitochondria (long-chain only)",
            fourSteps: [
                "Oxidation: FAD-dependent; forms trans-Δ2-enoyl-CoA; yields FADH₂",
                "Hydration: adds water across double bond; forms L-3-hydroxyacyl-CoA",
                "Oxidation: NAD⁺-dependent; forms 3-ketoacyl-CoA; yields NADH",
                "Thiolysis: CoA cleaves bond; releases acetyl-CoA and shortened acyl-CoA (2C shorter)"
            ],
            yieldCalculation: {
                example: "Palmitoyl-CoA (C16): 7 cycles → 8 acetyl-CoA + 7 FADH₂ + 7 NADH",
                netATP: "8 × 10 (acetyl-CoA via TCA) + 7 × 1.5 (FADH₂) + 7 × 2.5 (NADH) − 2 (activation) = 106 ATP"
            },
            oddChain: "Produces propionyl-CoA (C3) in final cycle → converted to succinyl-CoA → enters TCA cycle",
            unsaturated: "Require additional isomerase and/or reductase enzymes; yield slightly less ATP"
        },
        fattyAcidSynthesis: {
            location: "Cytoplasm (cytosol)",
            enzyme: "Fatty acid synthase (FAS) complex — multifunctional enzyme",
            startingMaterial: "Acetyl-CoA (from mitochondria via citrate shuttle — citrate exported and cleaved by ATP-citrate lyase)",
            buildingBlock: "Malonyl-CoA (acetyl-CoA + CO₂, catalysed by acetyl-CoA carboxylase — rate-limiting step)",
            cycle: "Each cycle adds 2 carbons; requires 1 NADPH for each reduction step (2 NADPH per cycle)",
            product: "Palmitate (C16) after 7 elongation cycles",
            comparisonToBetaOxidation: {
                location: "Synthesis: cytosol; Oxidation: mitochondria",
                cofactors: "Synthesis: NADPH; Oxidation: FAD and NAD⁺",
                carrier: "Synthesis: ACP (acyl carrier protein); Oxidation: CoA",
                direction: "Synthesis: adds 2C at a time; Oxidation: removes 2C at a time",
                regulation: "Synthesis activated by insulin/citrate; Oxidation activated by glucagon/fasting"
            }
        },
        eicosanoids: {
            precursor: "Arachidonic acid (C20:4) released from membrane phospholipids by phospholipase A2",
            pathways: {
                COX: "Cyclooxygenase → prostaglandins and thromboxanes (inflammation, platelet aggregation, fever)",
                LOX: "Lipoxygenase → leukotrienes (bronchoconstriction, allergic responses)"
            },
            pharmacology: "NSAIDs (aspirin, ibuprofen) inhibit COX; corticosteroids inhibit phospholipase A2"
        }
    },

    lipidsInDisease: {
        atherosclerosis: "LDL oxidation and macrophage foam cell formation in arterial walls; statins lower LDL by inhibiting HMG-CoA reductase",
        obesity: "Excess caloric intake stored as TAG in adipose; adipokine dysregulation leads to insulin resistance",
        lipidStorageDisorders: "Lysosomal enzyme deficiencies preventing sphingolipid degradation (Gaucher: glucocerebrosidase; Niemann-Pick: sphingomyelinase; Tay-Sachs: hexosaminidase A)",
        familialHypercholesterolaemia: "LDL receptor mutations → failure to clear LDL from blood → premature atherosclerosis",
        transfattyAcids: "Raise LDL, lower HDL, increase inflammatory markers — now banned in many countries"
    },

    applications: [
        "Statin drugs target HMG-CoA reductase to lower LDL cholesterol",
        "Omega-3 supplementation reduces cardiovascular inflammation",
        "Drug bioavailability depends on lipid solubility (lipophilicity)",
        "Liposome technology used for drug delivery (e.g. lipid nanoparticles for mRNA vaccines)",
        "Understanding lipid rafts informs receptor signalling and viral entry",
        "Lipid profile tests (LDL, HDL, TAG, cholesterol) guide cardiovascular risk assessment"
    ],

    topicSummary: {
        coreInsights: [
            "Lipids are unified by hydrophobicity, not structure — this explains their chemical diversity and their spontaneous self-assembly into membranes.",
            "The cis double bond in unsaturated fatty acids creates a permanent kink that prevents tight packing — this single structural feature explains why vegetable oils are liquid and saturated fats are solid.",
            "Phospholipids are amphipathic: they spontaneously form bilayers in water because this arrangement satisfies both their hydrophilic head and hydrophobic tail in a thermodynamically stable structure.",
            "Cholesterol is the membrane's thermostat — at high temperatures it restrains fluidity, at low temperatures it prevents gelling, maintaining the membrane in a functional liquid-crystalline phase.",
            "Beta-oxidation is the mirror image of fatty acid synthesis: it occurs in the mitochondria using CoA and FAD/NAD⁺, while synthesis occurs in the cytosol using ACP and NADPH.",
            "Triacylglycerols store more than twice the energy per gram of carbohydrates because the carbon atoms in fatty acids are more reduced (carry more hydrogen atoms, releasing more energy on oxidation).",
            "Lipid signalling molecules — prostaglandins, DAG, IP3, ceramide — are not stored in vesicles like proteins but are generated on demand by membrane lipid cleavage.",
            "Lipoprotein classification by density reflects protein-to-lipid ratio: the more lipid, the lower the density — chylomicrons are largest and least dense, HDL is smallest and most dense."
        ],
        keyEquations: {
            betaOxidationYield: "For a saturated even-chain fatty acid CₙH(2n)O₂: cycles = (n/2 − 1); acetyl-CoA = n/2; FADH₂ = NADH = n/2 − 1",
            palmitateSynthesis: "8 Acetyl-CoA + 7 ATP + 14 NADPH → Palmitate + 8 CoA + 7 ADP + 7 Pi + 14 NADP⁺ + 6 H₂O",
            netATPPalmitate: "Complete oxidation of palmitate: ~106 ATP net",
            fattyAcidNomenclature: "Chain:doublebonds(ΔPosition) — e.g. 18:2(Δ9,12) = linoleic acid"
        },
        lipidClassComparison: {
            triacylglycerol:  { backbone: "Glycerol", headGroup: "None", function: "Energy storage", location: "Adipose, liver" },
            phospholipid:     { backbone: "Glycerol", headGroup: "Phosphate + alcohol", function: "Membrane structure", location: "All cell membranes" },
            sphingomyelin:    { backbone: "Sphingosine", headGroup: "Phosphocholine", function: "Myelin, lipid rafts", location: "Neural membranes" },
            glycolipid:       { backbone: "Sphingosine/Glycerol", headGroup: "Sugar(s)", function: "Cell recognition", location: "Outer membrane leaflet" },
            cholesterol:      { backbone: "Steroid ring", headGroup: "–OH at C3", function: "Fluidity buffer, hormone precursor", location: "All membranes, bile" }
        },
        commonMistakesToAvoid: [
            "Lipids are not defined by having ester bonds — waxes, sterols, and terpenes are lipids but have different chemistry",
            "Unsaturated does NOT mean healthier in all contexts — trans unsaturated fats are more harmful than saturated fats",
            "Beta-oxidation does NOT occur in the cytoplasm — it is exclusively mitochondrial (long-chain); medium-chain fatty acids use peroxisomes for initial steps",
            "Cholesterol does NOT always decrease membrane fluidity — it buffers fluidity both up and down depending on temperature",
            "HDL being 'good' and LDL being 'bad' is an oversimplification — both transport cholesterol; it is the direction and destination that matter",
            "Fatty acid synthesis does NOT simply reverse beta-oxidation — entirely different enzymes, cofactors, compartment, and regulation"
        ],
        connections: [
            "Metabolism: fatty acid oxidation feeds acetyl-CoA into TCA cycle and electron transport chain",
            "Pharmacology: COX inhibition by NSAIDs directly follows arachidonic acid pathway; statins target cholesterol biosynthesis",
            "Cell signalling: PI(4,5)P₂ cleavage by phospholipase C generates IP₃ and DAG — two key second messengers",
            "Genetics: lipid storage disorders (Gaucher, Tay-Sachs) are caused by single-gene lysosomal enzyme deficiencies",
            "Nutrition: essential fatty acids (omega-3, omega-6) cannot be synthesised and must come from diet — connects to prostaglandin biology",
            "Biotechnology: lipid nanoparticles are the delivery vehicle for mRNA COVID vaccines — lipid chemistry is directly clinically relevant"
        ],
        examReadinessChecklist: [
            "Can you draw the structure of a saturated vs cis-unsaturated fatty acid and explain how the geometry affects packing?",
            "Can you draw a phospholipid bilayer and explain why it forms spontaneously?",
            "Can you calculate the ATP yield from complete oxidation of palmitate (C16:0)?",
            "Can you list the four steps of beta-oxidation with the correct cofactor for each oxidation step?",
            "Can you compare beta-oxidation and fatty acid synthesis across all four dimensions (location, cofactors, carrier, direction)?",
            "Can you explain how cholesterol buffers membrane fluidity at both high and low temperatures?",
            "Can you classify the major lipoprotein classes by density and function?"
        ]
    }
},


carbohydrates: {
    title: "Carbohydrates: Structure, Function, and Metabolism",

    databaseLinks: {
        misconceptions: [
            'carbohydrateBasics',
            'monosaccharides',
            'disaccharidesAndPolysaccharides',
            'carbohydrateMetabolism',
            'fiberAndDigestion'
        ],
        contextualScenarios: [
            'carbohydrateBasics',
            'polysaccharideStructure',
            'carbohydrateMetabolism',
            'carbohydrateRegulation'
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
            'carbohydrateBasics',
            'polysaccharideStructure',
            'carbohydrateMetabolism',
            'carbohydrateRegulation'
        ]
    },

    conceptLinks: {
        "Carbohydrates are composed of carbon, hydrogen, and oxygen in a 1:2:1 ratio": {
            misconceptions:      ['carbohydrateBasics'],
            scenarios:           ['carbohydrateBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['carbohydrateBasics']
        },
        "Monosaccharides are the monomeric units classified by carbon number and functional group": {
            misconceptions:      ['monosaccharides'],
            scenarios:           ['carbohydrateBasics'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['carbohydrateBasics']
        },
        "Glycosidic bonds link monosaccharides; bond type determines polysaccharide properties": {
            misconceptions:      ['disaccharidesAndPolysaccharides'],
            scenarios:           ['polysaccharideStructure'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['polysaccharideStructure']
        },
        "Polysaccharides serve structural or storage roles depending on linkage and branching": {
            misconceptions:      ['disaccharidesAndPolysaccharides'],
            scenarios:           ['polysaccharideStructure'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['polysaccharideStructure']
        },
        "Carbohydrate metabolism is regulated to maintain blood glucose homeostasis": {
            misconceptions:      ['carbohydrateMetabolism', 'fiberAndDigestion'],
            scenarios:           ['carbohydrateMetabolism', 'carbohydrateRegulation'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['carbohydrateMetabolism', 'carbohydrateRegulation']
        }
    },

    topicIntroduction: {
        overview: "Carbohydrates are the most abundant organic molecules on Earth and the primary fuel source for living cells. From the glucose powering your neurons to the cellulose forming plant cell walls, carbohydrates display remarkable structural diversity arising from simple variations in monomer configuration and linkage chemistry. In this lesson, we explore carbohydrate structure at every level — from monosaccharide stereochemistry to the architecture of polysaccharides — and connect structure to metabolic function, storage, and signalling.",
        whyItMatters: "Carbohydrates underpin human nutrition, metabolic disease, biotechnology, and materials science. Type 2 diabetes, one of the world's most prevalent diseases, is fundamentally a disorder of carbohydrate metabolism and glucose homeostasis. Dietary fibre, derived from indigestible polysaccharides, profoundly influences gut microbiome composition and disease risk. In biotechnology, engineered polysaccharides and glycoproteins are used as scaffolds, drug delivery vehicles, and diagnostic tools.",
        bigPicture: "All carbohydrate complexity traces back to one principle: the same six-carbon sugar can adopt different configurations, form different bonds, and assemble into polymers with radically different properties — hard cellulose vs soft starch, compact glycogen vs extended chitin. Understanding carbohydrates means understanding how small structural differences produce large functional differences.",
        priorKnowledge: [
            "Organic chemistry basics: functional groups (aldehyde, ketone, hydroxyl), structural formulae",
            "Stereochemistry: chirality, enantiomers, D/L configuration",
            "Covalent bonding: condensation reactions and hydrolysis",
            "Basic biochemistry: macromolecules, polymers, and monomers",
            "Cell biology: organelles involved in metabolism (cytoplasm, mitochondria)"
        ],
        topicRoadmap: [
            "Empirical formula and classification of carbohydrates",
            "Monosaccharide structure: open-chain and ring (Haworth) forms, anomers, epimers",
            "Disaccharides: glycosidic bond formation, reducing vs non-reducing sugars",
            "Polysaccharides: starch, glycogen, cellulose, chitin — structure and function",
            "Carbohydrate digestion and absorption",
            "Glycolysis: glucose catabolism overview",
            "Blood glucose regulation: insulin, glucagon, glycogen synthesis and breakdown",
            "Glycoproteins and glycolipids: carbohydrates as cell-surface signals"
        ]
    },

    concepts: [
        "Carbohydrates are composed of carbon, hydrogen, and oxygen in a 1:2:1 ratio",
        "Monosaccharides are the monomeric units classified by carbon number and functional group",
        "Ring closure of monosaccharides produces anomers (α and β configurations)",
        "Glycosidic bonds link monosaccharides; bond type determines polysaccharide properties",
        "Polysaccharides serve structural or storage roles depending on linkage and branching",
        "Carbohydrate metabolism is regulated to maintain blood glucose homeostasis"
    ],

    theory: "Carbohydrates (saccharides) are polyhydroxy aldehydes or ketones, or substances that yield these on hydrolysis. Their general formula is (CH₂O)ₙ. They function as energy sources, structural materials, cell-surface recognition molecules, and precursors to nucleotides and amino acids.",

    keyDefinitions: {
        "Carbohydrate": "Polyhydroxy aldehyde or ketone with empirical formula (CH₂O)ₙ",
        "Monosaccharide": "Single sugar unit; cannot be hydrolysed further",
        "Disaccharide": "Two monosaccharides joined by a glycosidic bond",
        "Oligosaccharide": "3–10 monosaccharide units",
        "Polysaccharide": "Many monosaccharide units (>10) joined by glycosidic bonds",
        "Glycosidic Bond": "Covalent bond formed between the anomeric carbon of one sugar and a hydroxyl group of another, with loss of water",
        "Anomer": "Stereoisomers differing only at the anomeric carbon (C1); α (axial OH) vs β (equatorial OH)",
        "Epimer": "Sugars differing in configuration at only one carbon other than the anomeric carbon",
        "Reducing Sugar": "Sugar with a free anomeric hydroxyl group capable of reducing oxidising agents (e.g. glucose, maltose)",
        "Non-reducing Sugar": "Sugar with no free anomeric hydroxyl (e.g. sucrose — anomeric carbons of both monomers are involved in the bond)",
        "Mutarotation": "Spontaneous interconversion of α and β anomers in solution via the open-chain form",
        "Haworth Projection": "2D representation of cyclic sugars showing ring structure and substituent positions above/below the ring",
        "Glycoprotein": "Protein with covalently attached oligosaccharide chains",
        "Glycolipid": "Lipid with a covalently attached carbohydrate moiety"
    },

    monosaccharideStructure: {
        classification: {
            byCarbon: {
                triose: "3 carbons (e.g. glyceraldehyde, dihydroxyacetone)",
                tetrose: "4 carbons (e.g. erythrose)",
                pentose: "5 carbons (e.g. ribose, deoxyribose, ribulose)",
                hexose: "6 carbons (e.g. glucose, fructose, galactose, mannose)"
            },
            byFunctionalGroup: {
                aldose: "Aldehyde at C1 (e.g. glucose, galactose, ribose)",
                ketose: "Ketone at C2 (e.g. fructose, ribulose)"
            }
        },
        stereochemistry: {
            DLconfiguration: "Based on configuration at the highest-numbered chiral carbon relative to D-glyceraldehyde; most biological sugars are D-form",
            chiralCentres: "Glucose has 4 chiral centres (C2, C3, C4, C5) giving 16 possible stereoisomers (2⁴); only D-glucose is biologically predominant",
            epimers: {
                galactose: "Differs from glucose at C4",
                mannose: "Differs from glucose at C2"
            }
        },
        ringFormation: {
            pyranose: "6-membered ring formed when C5-OH attacks C1 aldehyde (hexoses); named after pyran",
            furanose: "5-membered ring formed when C4-OH attacks C1 (pentoses) or C5-OH attacks C2 ketone (fructose); named after furan",
            anomericCarbon: "C1 in aldoses or C2 in ketoses — becomes a new chiral centre upon ring closure",
            alphaAnomer: "Anomeric OH is axial (same side as ring oxygen in Haworth: below the ring for D-sugars)",
            betaAnomer: "Anomeric OH is equatorial (opposite side to ring oxygen in Haworth: above the ring for D-sugars)"
        },
        biologicallyImportantMonosaccharides: {
            glucose: "Primary metabolic fuel; substrate for glycolysis; blood sugar",
            fructose: "Sweetest monosaccharide; found in fruit; metabolised primarily in liver",
            galactose: "Component of lactose; converted to glucose in liver (galactose metabolism)",
            ribose: "Pentose sugar; component of RNA, ATP, NAD+, FAD",
            deoxyribose: "2-deoxyribose; component of DNA (lacks 2-OH group)"
        }
    },

    disaccharides: {
        formation: "Condensation reaction between anomeric carbon of one monosaccharide and any hydroxyl of another, releasing water",
        importantDisaccharides: {
            maltose: {
                monomers: "Glucose + Glucose",
                bond: "α(1→4) glycosidic bond",
                reducing: true,
                source: "Starch hydrolysis; malted barley (beer brewing)"
            },
            sucrose: {
                monomers: "Glucose + Fructose",
                bond: "α(1→2)β glycosidic bond (both anomeric carbons involved)",
                reducing: false,
                source: "Cane sugar, beet sugar; primary plant transport carbohydrate"
            },
            lactose: {
                monomers: "Galactose + Glucose",
                bond: "β(1→4) glycosidic bond",
                reducing: true,
                source: "Mammalian milk; substrate for lactase"
            },
            trehalose: {
                monomers: "Glucose + Glucose",
                bond: "α(1→1)α glycosidic bond",
                reducing: false,
                source: "Insect haemolymph; fungi; anhydrobiotic organisms; protects against desiccation"
            }
        },
        reducingSugarTest: "Benedict's reagent — Cu²⁺ reduced to Cu₂O (brick-red precipitate) by free anomeric OH of reducing sugars. Sucrose is non-reducing and gives no colour change."
    },

    polysaccharides: {
        storagePolysaccharides: {
            starch: {
                organism: "Plants",
                components: {
                    amylose: {
                        structure: "Unbranched; α(1→4) glycosidic bonds only",
                        helical: true,
                        percentageOfStarch: "~20%"
                    },
                    amylopectin: {
                        structure: "Branched; α(1→4) with α(1→6) branches every 24–30 residues",
                        percentageOfStarch: "~80%"
                    }
                },
                digestion: "Salivary and pancreatic amylase cleave α(1→4) bonds; debranching enzyme cleaves α(1→6) bonds"
            },
            glycogen: {
                organism: "Animals and fungi",
                structure: "Highly branched; α(1→4) with α(1→6) branches every 8–12 residues (more branched than amylopectin)",
                location: "Liver (glucose reserve for blood glucose regulation) and muscle (local fuel for contraction)",
                advantage: "High branching provides many non-reducing ends for simultaneous phosphorolysis — rapid glucose release"
            }
        },
        structuralPolysaccharides: {
            cellulose: {
                organism: "Plants (primary cell wall component)",
                structure: "Unbranched; β(1→4) glycosidic bonds",
                conformation: "β-glucose adopts alternating 180° rotation — each residue is flipped relative to adjacent ones, producing straight chains that stack via hydrogen bonds into microfibrils",
                humanDigestion: "Cannot be digested — humans lack cellulase; passes through as dietary fibre",
                industrialUse: "Paper, textiles (cotton), biofuel feedstock"
            },
            chitin: {
                organism: "Fungi (cell walls), arthropod exoskeletons",
                monomer: "N-acetylglucosamine (GlcNAc) — glucose with an acetylamino group at C2",
                structure: "Unbranched; β(1→4) glycosidic bonds (same linkage as cellulose but different monomer)",
                properties: "Strong, lightweight, nitrogen-containing structural polymer"
            },
            pectin: {
                organism: "Plants (middle lamella, primary cell wall)",
                monomer: "Primarily galacturonic acid",
                function: "Cell wall cohesion; forms gels in food industry (jams, jellies)"
            }
        },
        comparisonKeyPoint: "α(1→4) bonds in starch and glycogen allow coiled, soluble, digestible structures. β(1→4) bonds in cellulose and chitin produce extended, rigid, indigestible fibres. Same monomer (glucose), different bond configuration, completely different biological role."
    },

    glycoconjugates: {
        glycoproteins: {
            definition: "Proteins with covalently attached oligosaccharide chains",
            Nlinked: "Oligosaccharide attached to asparagine residue via N-acetylglucosamine",
            Olinked: "Oligosaccharide attached to serine or threonine residue",
            functions: [
                "Cell-surface recognition and signalling (ABO blood groups)",
                "Protein folding quality control (ER calnexin-calreticulin cycle)",
                "Protection against proteolysis",
                "Receptor ligands"
            ]
        },
        glycolipids: {
            definition: "Lipids with a covalently attached carbohydrate moiety",
            gangliosides: "Complex glycolipids with sialic acid; abundant in neural tissue; GM1 is the toxin receptor for cholera toxin",
            ABO_bloodGroups: "Cell-surface glycolipid and glycoprotein antigens; A and B antigens differ by a single sugar residue added by blood-group-specific glycosyltransferases"
        },
        proteoglycans: {
            definition: "Proteins with large, highly sulphated glycosaminoglycan chains attached",
            glycosaminoglycans: "Long unbranched polysaccharides of repeating disaccharide units (e.g. hyaluronic acid, chondroitin sulphate, heparan sulphate)",
            function: "Extracellular matrix scaffolding, lubrication of joints (synovial fluid), heparin as anticoagulant"
        }
    },

    carbohydrateMetabolism: {
        digestion: {
            mouth: "Salivary amylase begins starch hydrolysis",
            stomach: "Amylase inactivated by low pH",
            smallIntestine: "Pancreatic amylase (lumen); brush border disaccharidases (maltase, sucrase, lactase) at enterocyte surface",
            absorption: "Glucose and galactose: active transport via SGLT1 (sodium-glucose co-transporter). Fructose: facilitated diffusion via GLUT5",
            portal: "Monosaccharides enter portal blood and reach liver"
        },
        glycolysis: {
            overview: "10-step cytoplasmic pathway converting glucose to 2 pyruvate",
            netYield: "2 ATP, 2 NADH, 2 pyruvate per glucose",
            keyRegulatedSteps: [
                "Hexokinase/glucokinase (step 1): glucose → glucose-6-phosphate; inhibited by G6P",
                "Phosphofructokinase-1 (step 3): rate-limiting step; inhibited by ATP and citrate; activated by AMP and fructose-2,6-bisphosphate",
                "Pyruvate kinase (step 10): inhibited by ATP and alanine; activated by fructose-1,6-bisphosphate"
            ]
        },
        glycogenMetabolism: {
            glycogenSynthesis: {
                keyEnzyme: "Glycogen synthase — adds glucose via α(1→4) bonds; activated by insulin signalling (dephosphorylation)",
                branchingEnzyme: "Transfers 6–7 residues to create α(1→6) branch points"
            },
            glycogenolysis: {
                keyEnzyme: "Glycogen phosphorylase — releases glucose-1-phosphate from non-reducing ends via phosphorolysis; activated by glucagon and adrenaline (phosphorylation)",
                debranchingEnzyme: "Cleaves α(1→6) branches, releasing free glucose"
            }
        },
        bloodGlucoseRegulation: {
            normalRange: "4–6 mM fasting; up to 8 mM postprandial",
            insulin: {
                stimulus: "High blood glucose; secreted by pancreatic β-cells",
                effects: [
                    "Stimulates GLUT4 translocation to muscle and adipose cell surface",
                    "Activates glycogen synthase (promotes glycogen storage)",
                    "Inhibits glycogen phosphorylase",
                    "Promotes glycolysis and fatty acid synthesis"
                ]
            },
            glucagon: {
                stimulus: "Low blood glucose; secreted by pancreatic α-cells",
                effects: [
                    "Activates glycogen phosphorylase in liver (releases glucose to blood)",
                    "Inhibits glycogen synthase",
                    "Stimulates gluconeogenesis in liver"
                ]
            }
        }
    },

    applications: [
        "Clinical: management of diabetes mellitus (blood glucose monitoring, insulin therapy)",
        "Nutrition: glycaemic index, dietary fibre recommendations",
        "Biotechnology: recombinant glycoprotein production (e.g. erythropoietin, monoclonal antibodies)",
        "Medicine: heparin as anticoagulant; hyaluronic acid in joint treatment",
        "Industry: bioethanol from cellulose hydrolysis; paper from cellulose",
        "Forensics and archaeology: collagen and chitin preservation in ancient specimens",
        "Immunology: ABO blood typing; glycan shields on viral surface proteins (e.g. HIV, SARS-CoV-2)"
    ],

    topicSummary: {
        coreInsights: [
            "The empirical formula (CH₂O)ₙ belies enormous structural diversity — the same six atoms, arranged differently, produce glucose, fructose, and galactose with completely different metabolic fates.",
            "Ring closure is the key structural event in sugar chemistry: it creates the anomeric carbon, generates α and β anomers, and determines whether a sugar is reducing or non-reducing.",
            "The type of glycosidic bond — α vs β, and the position (1→4 vs 1→6) — dictates everything about a polysaccharide's shape, digestibility, and function.",
            "Glycogen's extreme branching is a functional adaptation for speed, not storage capacity: many non-reducing ends allow simultaneous phosphorylase action for rapid glucose release during acute energy demand.",
            "Cellulose and starch are both glucose polymers, but β(1→4) vs α(1→4) linkage produces indigestible fibre vs digestible fuel — a single bond configuration difference with profound biological consequences.",
            "Blood glucose homeostasis is a continuously regulated balance between glycogen synthesis (insulin-driven) and glycogenolysis (glucagon/adrenaline-driven) — disruption underlies diabetes mellitus.",
            "Glycoconjugates (glycoproteins, glycolipids) are not mere decorations — they are the primary language of cell-surface recognition, determining blood group compatibility, immune responses, and viral entry."
        ],
        keyRelationships: {
            alphaBondEffect: "α-glycosidic bonds → coiled, soluble, digestible → energy storage (starch, glycogen)",
            betaBondEffect: "β-glycosidic bonds → extended, rigid, indigestible → structural support (cellulose, chitin)",
            branchingEffect: "More branching → more non-reducing ends → faster mobilisation of glucose",
            anomericEffect: "Free anomeric OH → reducing sugar; both anomeric carbons occupied → non-reducing (sucrose, trehalose)"
        },
        inhibitionComparison: {
            starchVsGlycogen:  { linkage: "Both α(1→4) backbone", difference: "Glycogen branches every 8–12 residues vs starch every 24–30; glycogen more compact and faster to mobilise" },
            celluloseVsChitin: { linkage: "Both β(1→4)", difference: "Cellulose monomer: glucose; chitin monomer: N-acetylglucosamine; both indigestible to humans but chitin contains nitrogen" },
            amyloseVsAmylopectin: { linkage: "Both α(1→4)", difference: "Amylose unbranched (~20% of starch); amylopectin branched at α(1→6) (~80%)" }
        },
        commonMistakesToAvoid: [
            "Starch and glycogen are NOT interchangeable — starch is the plant storage form, glycogen the animal form; glycogen is more branched and more rapidly mobilised",
            "Sucrose is NOT a reducing sugar — both anomeric carbons are involved in the glycosidic bond, leaving no free anomeric OH",
            "β(1→4) bonds in cellulose are NOT simply 'stronger' than α(1→4) bonds — they produce different chain geometry (straight vs coiled) which drives structural vs storage function",
            "Fructose is NOT metabolised identically to glucose — it bypasses the key regulatory step of glycolysis (PFK-1) and is processed primarily by the liver",
            "Dietary fibre is NOT nutritionally inert — it is fermented by colonic bacteria producing short-chain fatty acids and profoundly influences the gut microbiome",
            "Glycogen phosphorylase does NOT use water to cleave glycogen — it uses inorganic phosphate (phosphorolysis), releasing glucose-1-phosphate directly, which is more energetically efficient than hydrolysis"
        ],
        connections: [
            "Metabolism: glucose from carbohydrate digestion enters glycolysis, providing pyruvate for the TCA cycle and oxidative phosphorylation",
            "Endocrinology: insulin and glucagon form a hormonal axis regulating blood glucose; failure of this axis is the basis of diabetes mellitus",
            "Immunology: glycans on cell surfaces and pathogens are primary recognition signals for the immune system; ABO blood groups are carbohydrate antigens",
            "Genetics: deoxyribose is the backbone sugar of DNA; ribose is the backbone of RNA — pentose sugar structure is essential to nucleic acid function",
            "Ecology: cellulose is the most abundant organic polymer on Earth; its breakdown by cellulase-producing organisms (bacteria, fungi, termites) drives terrestrial carbon cycling"
        ],
        examReadinessChecklist: [
            "Can you draw α-D-glucopyranose and β-D-glucopyranose in Haworth projection and identify the anomeric carbon?",
            "Can you write the glycosidic bond type for maltose, sucrose, lactose, and explain which is non-reducing and why?",
            "Can you compare starch, glycogen, and cellulose in terms of linkage, branching, organism, and function?",
            "Can you predict whether a disaccharide is reducing or non-reducing given its structure?",
            "Can you explain why glycogen is more highly branched than starch in terms of functional advantage?",
            "Can you trace the hormonal response to a meal from blood glucose rise through insulin release to glycogen synthesis?"
        ]
    }
},


plantReproduction: {
    title: "Plant Reproduction: Sexual and Asexual Strategies",

    databaseLinks: {
        misconceptions: [
            'flowerStructure',
            'pollination',
            'fertilisation',
            'seedAndFruit',
            'asexualReproduction',
            'alternationOfGenerations'
        ],
        contextualScenarios: [
            'flowerStructure',
            'pollination',
            'fertilisation',
            'asexualReproduction'
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
            'flowerStructure',
            'pollination',
            'fertilisation',
            'seedAndFruit',
            'asexualReproduction'
        ]
    },

    conceptLinks: {
        "Flowers are the reproductive organs of angiosperms": {
            misconceptions:      ['flowerStructure'],
            scenarios:           ['flowerStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['flowerStructure']
        },
        "Pollination transfers pollen from anther to stigma": {
            misconceptions:      ['pollination'],
            scenarios:           ['pollination'],
            studyTips:           ['diagrams', 'comparisonTables', 'specimens'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['pollination']
        },
        "Double fertilisation is unique to angiosperms": {
            misconceptions:      ['fertilisation'],
            scenarios:           ['fertilisation'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['fertilisation']
        },
        "Seeds and fruits develop from fertilised ovules and ovary wall": {
            misconceptions:      ['seedAndFruit'],
            scenarios:           ['fertilisation'],
            studyTips:           ['comparisonTables', 'specimens', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['seedAndFruit']
        },
        "Asexual reproduction produces genetically identical offspring": {
            misconceptions:      ['asexualReproduction'],
            scenarios:           ['asexualReproduction'],
            studyTips:           ['comparisonTables', 'specimens', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['asexualReproduction']
        },
        "Alternation of generations alternates haploid and diploid phases": {
            misconceptions:      ['alternationOfGenerations'],
            scenarios:           ['flowerStructure'],
            studyTips:           ['diagrams', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['flowerStructure']
        }
    },

    topicIntroduction: {
        overview: "Plant reproduction encompasses the full range of strategies by which plants perpetuate their species — from the elaborate co-evolutionary dance of insect pollination to the quiet efficiency of a strawberry runner colonising bare soil. In angiosperms (flowering plants), sexual reproduction involves the flower as the specialised reproductive organ, pollen as the male gametophyte, and double fertilisation as a uniquely angiosperm innovation. Asexual reproduction, by contrast, exploits vegetative structures to produce clonal offspring without gamete fusion. Both strategies have profound implications for genetics, ecology, agriculture, and conservation.",
        whyItMatters: "Understanding plant reproduction underpins modern agriculture (crop breeding, hybridisation, grafting), horticulture (vegetative propagation, tissue culture), ecology (pollinator conservation, invasive species management), and biotechnology (genetic modification of crops). Every fruit you eat, every grain of wheat in bread, and every medicinal plant compound derives from a reproductive process covered in this lesson.",
        bigPicture: "Plants face the fundamental biological challenge of gene dispersal in a sessile organism. Evolution has produced two broad solutions: sexual reproduction (via flowers, pollen, and seeds) maximises genetic diversity and long-range dispersal; asexual reproduction (via runners, bulbs, tubers, rhizomes) maximises local exploitation and clonal fidelity. Both strategies can occur in the same species.",
        priorKnowledge: [
            "Cell division: mitosis and meiosis — when each is used",
            "Genetics: haploid (n) vs diploid (2n) chromosome number",
            "Basic plant anatomy: roots, stems, leaves",
            "Photosynthesis: why plants need sunlight and CO₂",
            "Evolution: natural selection and adaptation"
        ],
        topicRoadmap: [
            "Flower structure: sepals, petals, stamens (anther + filament), carpel (stigma, style, ovary, ovule)",
            "Pollination: self vs cross-pollination; wind vs insect vs other vectors",
            "Pollen tube growth and double fertilisation",
            "Seed structure: testa, embryo, endosperm, cotyledons",
            "Fruit types and dispersal mechanisms",
            "Asexual reproduction: runners, bulbs, tubers, rhizomes, corms, tissue culture",
            "Alternation of generations: sporophyte (2n) vs gametophyte (n) in angiosperms",
            "Comparison of sexual vs asexual reproduction: advantages and disadvantages"
        ]
    },

    concepts: [
        "Flowers are the reproductive organs of angiosperms",
        "Pollination transfers pollen from anther to stigma",
        "Double fertilisation is unique to angiosperms",
        "Seeds and fruits develop from fertilised ovules and ovary wall",
        "Asexual reproduction produces genetically identical offspring",
        "Alternation of generations alternates haploid and diploid phases"
    ],

    theory: "Plant reproduction involves both sexual reproduction (via flowers, pollen, and seeds) and asexual reproduction (via vegetative structures). Angiosperms uniquely perform double fertilisation, producing both an embryo and nutritive endosperm. Alternation of generations describes the life cycle alternating between diploid sporophyte and haploid gametophyte phases.",

    keyDefinitions: {
        "Angiosperm": "Flowering plant in which seeds are enclosed within a fruit",
        "Gymnosperm": "Seed plant in which seeds are not enclosed — borne on open cone scales",
        "Sepal": "Leaf-like structure forming the outermost whorl of a flower; protects the bud",
        "Petal": "Coloured, often scented structure attracting pollinators; second whorl",
        "Stamen": "Male reproductive organ consisting of anther (pollen-producing) and filament (stalk)",
        "Anther": "Structure at the tip of the stamen where pollen grains are produced by meiosis",
        "Carpel (Pistil)": "Female reproductive organ consisting of stigma, style, and ovary",
        "Stigma": "Sticky surface at the top of the carpel where pollen grains land",
        "Style": "Stalk connecting stigma to ovary through which the pollen tube grows",
        "Ovary": "Swollen base of carpel containing one or more ovules; develops into fruit",
        "Ovule": "Structure within the ovary containing the egg cell; develops into seed after fertilisation",
        "Pollen Grain": "Male gametophyte; contains two cells — a tube cell and a generative cell",
        "Pollination": "Transfer of pollen from anther to stigma",
        "Fertilisation": "Fusion of male and female gametes to form a zygote",
        "Double Fertilisation": "Angiosperm-specific process: one sperm fuses with egg (→ zygote); second sperm fuses with two polar nuclei (→ triploid endosperm)",
        "Endosperm": "Triploid (3n) nutritive tissue that feeds the developing embryo",
        "Testa": "Hard, protective outer seed coat derived from the integuments of the ovule",
        "Cotyledon": "Seed leaf within the embryo — one in monocots, two in dicots",
        "Fruit": "Mature ovary wall (pericarp) surrounding the seed(s); aids dispersal",
        "Germination": "Resumption of growth of a seed embryo under favourable conditions",
        "Vegetative Propagation": "Asexual reproduction using plant organs (stems, roots, leaves)",
        "Stolon (Runner)": "Horizontal stem that grows along the soil surface producing new plants at nodes",
        "Rhizome": "Horizontal underground stem that produces shoots and roots at intervals",
        "Tuber": "Swollen underground stem (e.g. potato) storing nutrients; bears buds ('eyes')",
        "Bulb": "Short vertical underground stem surrounded by fleshy leaves (e.g. onion)",
        "Corm": "Swollen underground stem base surrounded by papery scale leaves (e.g. crocus)",
        "Sporophyte": "Diploid (2n) multicellular phase of the plant life cycle; produces spores by meiosis",
        "Gametophyte": "Haploid (n) multicellular phase; produces gametes by mitosis",
        "Pollen Tube": "Tube grown by the germinating pollen grain through the style to deliver sperm to the ovule"
    },

    flowerStructure: {
        whorls: {
            calyx: "Collective term for all sepals; outermost whorl; green and leaf-like; protects bud",
            corolla: "Collective term for all petals; often brightly coloured; attracts pollinators",
            androecium: "Collective term for all stamens (male organs); each stamen = anther + filament",
            gynoecium: "Collective term for carpel(s) (female organ); stigma + style + ovary + ovules"
        },
        insectPollinated: {
            petals: "Large, brightly coloured, often with UV nectar guides",
            scent: "Fragrant to attract pollinators",
            nectar: "Sugary reward produced by nectaries at petal base",
            pollen: "Sticky or spiky surface; attaches to insect body",
            stigma: "Sticky surface; positioned to contact visiting insect",
            examples: "Buttercup, foxglove, orchid, sunflower"
        },
        windPollinated: {
            petals: "Small, reduced, often absent — no need to attract insects",
            scent: "No scent",
            nectar: "Absent",
            pollen: "Smooth, lightweight, produced in enormous quantities",
            stigma: "Large, feathery, hangs outside flower to catch airborne pollen",
            anthers: "Loose, hanging on long filaments — exposed to wind",
            examples: "Grass, hazel, oak, wheat, maize"
        }
    },

    pollination: {
        selfPollination: {
            definition: "Pollen transferred from anther to stigma of the SAME flower or same plant",
            advantages: ["Reliable when pollinators are absent", "Preserves well-adapted genotypes", "No energy cost of producing pollinator rewards"],
            disadvantages: ["Reduces genetic diversity", "Accumulates deleterious mutations", "No adaptation to new environments"]
        },
        crossPollination: {
            definition: "Pollen transferred from anther of one plant to stigma of a DIFFERENT plant of the same species",
            advantages: ["Generates genetic diversity", "Reduces expression of recessive deleterious alleles", "Enables adaptation to changing environments"],
            disadvantages: ["Requires vector (insect, wind, water, animal)", "Less reliable — pollen may not reach compatible stigma"],
            mechanisms: ["Dichogamy: anthers and stigma mature at different times", "Herkogamy: physical separation of anthers and stigma", "Self-incompatibility: biochemical recognition system prevents self-pollen germination"]
        },
        pollinationVectors: {
            entomophily: "Insect pollination — bees, butterflies, moths, beetles",
            anemophily: "Wind pollination — grasses, conifers, hazel",
            ornithophily: "Bird pollination — hummingbirds (tubular red flowers)",
            chiropterophily: "Bat pollination — night-blooming, white, strongly scented flowers",
            hydrophily: "Water pollination — aquatic plants (e.g. water starwort)"
        }
    },

    fertilisation: {
        pollenGermination: {
            steps: [
                "Pollen grain lands on compatible stigma",
                "Stigma surface proteins recognise compatible pollen (species and self/non-self recognition)",
                "Pollen grain absorbs water and germinates — pollen tube emerges",
                "Pollen tube grows down through style, guided by chemical signals (calcium gradient)",
                "Generative cell divides by mitosis to produce two sperm nuclei",
                "Pollen tube enters ovule through the micropyle"
            ]
        },
        doubleFertilisation: {
            description: "Uniquely angiosperm mechanism involving two separate fusion events",
            event1: "First sperm nucleus fuses with egg nucleus → diploid zygote (2n) → develops into embryo",
            event2: "Second sperm nucleus fuses with two polar nuclei → triploid primary endosperm nucleus (3n) → develops into endosperm",
            significance: "Endosperm provides nutritive tissue timed exactly to embryo development — more efficient than pre-formed nutritive tissue in gymnosperms"
        },
        postFertilisation: {
            ovule: "→ Seed (testa from integuments; embryo from zygote; endosperm from primary endosperm nucleus)",
            ovary: "→ Fruit (pericarp from ovary wall)",
            petals: "→ Wither and fall (no longer needed to attract pollinators)",
            sepals: "→ Typically wither (some persist, e.g. tomato)",
            style: "→ Withers"
        }
    },

    seedStructure: {
        components: {
            testa: "Hard outer seed coat; derived from integuments; prevents desiccation and mechanical damage",
            embryo: "Miniature plant: epicotyl (shoot tip), hypocotyl (stem), radicle (root), cotyledon(s)",
            endosperm: "Triploid nutritive tissue; present in monocots; largely absorbed into cotyledons in many dicots",
            cotyledons: "Seed leaves; one in monocots (e.g. grass), two in dicots (e.g. bean)"
        },
        dormancy: {
            definition: "Period of minimal metabolic activity allowing survival of unfavourable conditions",
            breakingDormancy: ["Water uptake (imbibition)", "Temperature change (vernalisation or stratification)", "Light exposure (phytochrome-mediated)", "Mechanical scarification of testa", "Fire (some species — serotinous cones)"]
        },
        germination: {
            conditions: ["Adequate water (for enzyme activation and cell expansion)", "Suitable temperature (for enzyme activity)", "Oxygen (for aerobic respiration to fuel growth)"],
            process: [
                "Imbibition — rapid water uptake causing seed to swell",
                "Activation of hydrolytic enzymes (amylases, proteases, lipases) — break down stored food",
                "Radicle emerges first (positive gravitropism, negative phototropism)",
                "Shoot (plumule) emerges second (positive phototropism)",
                "First true leaves expand — seedling becomes autotrophic"
            ]
        }
    },

    fruitTypes: {
        definition: "A fruit is a mature ovary, sometimes including other floral parts (accessory fruit)",
        simpleFleshyFruits: {
            berry: "Entire pericarp fleshy — tomato, grape, banana",
            drupe: "Stony endocarp ('stone') surrounding seed — cherry, peach, plum, olive",
            pome: "Accessory fruit — fleshy receptacle surrounds thin pericarp — apple, pear"
        },
        simpleDryFruits: {
            achene: "Small, single-seeded, pericarp not fused to seed — sunflower 'seed', buttercup",
            nut: "Hard pericarp, single seed — acorn, hazelnut",
            capsule: "Dry, multi-seeded, splits open — poppy, iris",
            legume: "Pod splits along two sutures — pea, bean",
            samara: "Winged fruit for wind dispersal — maple, ash"
        },
        dispersalMechanisms: {
            wind: "Lightweight, wings or parachutes — dandelion (pappus), maple (samara), poppy (pepper-pot capsule)",
            animal_external: "Hooks or burrs attach to fur/feathers — burdock, cleavers",
            animal_internal: "Edible fruits; seeds pass through gut — berry, drupe",
            water: "Buoyant fruits — coconut (fibrous mesocarp), waterlily",
            explosive: "Tension mechanisms eject seeds — squirting cucumber, witch hazel, gorse",
            self: "Gravity — acorn, coconut dropping vertically"
        }
    },

    asexualReproduction: {
        naturalMethods: {
            stolons: {
                description: "Horizontal stems growing along soil surface; nodes produce new plants",
                examples: ["Strawberry (runners)", "Spider plant", "Creeping buttercup"],
                advantage: "Rapid colonisation of available space"
            },
            rhizomes: {
                description: "Horizontal underground stems; produce shoots and roots at nodes",
                examples: ["Couch grass (problematic weed)", "Iris", "Ginger", "Mint"],
                advantage: "Persistence underground; difficult to eradicate"
            },
            tubers: {
                description: "Swollen underground stems storing starch; 'eyes' are axillary buds",
                examples: ["Potato (stem tuber)", "Jerusalem artichoke"],
                note: "Sweet potato is a root tuber — not the same structure"
            },
            bulbs: {
                description: "Short vertical stem surrounded by fleshy scale leaves storing food",
                examples: ["Onion", "Daffodil", "Tulip", "Garlic (compound bulb)"],
                structure: "Fleshy leaves, apical bud, adventitious roots"
            },
            corms: {
                description: "Swollen stem base, solid (unlike bulb which has distinct leaves), covered by papery scale leaves",
                examples: ["Crocus", "Gladiolus", "Taro"],
                distinction: "Solid; food stored in stem tissue, not leaf scales"
            },
            vegetativeReproductionFromLeaves: {
                examples: ["Bryophyllum (plantlets on leaf margins)", "Begonia (leaf cuttings)"]
            }
        },
        artificialMethods: {
            cuttings: {
                description: "Section of stem, leaf, or root placed in compost/water to root",
                examples: ["Rose (hardwood cutting)", "Geranium (softwood cutting)", "African violet (leaf cutting)"],
                conditions: "High humidity, rooting hormone (auxin), warmth"
            },
            grafting: {
                description: "Joining shoot (scion) of desired variety to rooted stock of compatible species",
                use: "Fruit trees — apple, rose; combines disease-resistant roots with high-yield shoots",
                requirement: "Cambium layers must align for vascular connection"
            },
            layering: {
                description: "Stem is bent to ground and partially buried; roots form before separation",
                examples: ["Blackberry", "Gooseberry", "Air layering in houseplants"]
            },
            tissueCulture: {
                description: "Small explant (meristem or callus) grown on sterile agar medium with hormones",
                advantages: ["Produces millions of genetically identical plants rapidly", "Disease-free stock", "Year-round production", "Preservation of rare species"],
                stages: ["Explant selection", "Surface sterilisation", "Callus induction (high auxin:cytokinin)", "Shoot induction (low auxin:high cytokinin)", "Root induction (high auxin:low cytokinin)", "Hardening off and transplanting"],
                examples: ["Orchid production", "Banana propagation", "Restoration of endangered species"]
            }
        },
        advantages: [
            "Rapid colonisation — no need for pollinator, pollen transfer, or seed dispersal",
            "All offspring are genetically identical — preserves well-adapted genotype",
            "No energy cost of producing flowers, fruits, or seeds",
            "Established root systems give new plant head start"
        ],
        disadvantages: [
            "No genetic diversity — all offspring vulnerable to same diseases or environmental change",
            "Accumulation of somatic mutations across clonal generations",
            "Limited dispersal — new plants remain near parent, competing for same resources",
            "Pathogens can spread rapidly through entire clonal population"
        ]
    },

    alternationOfGenerations: {
        overview: "The plant life cycle alternates between two multicellular phases: the diploid sporophyte (2n) and the haploid gametophyte (n).",
        inAngiosperms: {
            sporophyte: "Dominant phase — the entire visible plant (roots, stems, leaves, flowers) is the diploid sporophyte",
            maleGametophyte: "The pollen grain — reduced to three cells; germination produces pollen tube (haploid)",
            femaleGametophyte: "The embryo sac within the ovule — typically seven cells including egg and two polar nuclei (haploid)",
            meiosisOccurrence: "In anthers (microspore mother cells → pollen) and in ovule (megaspore mother cell → embryo sac)",
            mitosisOccurrence: "Within gametophyte development; pollen tube growth; embryo development"
        },
        comparison: {
            mosses: "Gametophyte dominant — the leafy green moss is haploid; sporophyte is dependent on it",
            ferns: "Sporophyte dominant (fern frond) but free-living gametophyte (prothallus)",
            angiosperms: "Sporophyte overwhelmingly dominant; gametophyte reduced to a few cells entirely dependent on sporophyte"
        }
    },

    sexualVsAsexual: {
        sexual: {
            geneticVariation: "High — meiosis and random fertilisation generate unique offspring",
            dispersal: "Seeds and fruits can travel far from parent",
            environmentalAdaptation: "High — variation allows natural selection to act",
            energyCost: "High — flowers, nectar, pollen, fruits require significant resources",
            reliability: "Lower — dependent on pollinators and compatible mates",
            evolutionaryAdvantage: "Long-term adaptation to changing environments"
        },
        asexual: {
            geneticVariation: "None (barring somatic mutation)",
            dispersal: "Limited — new plants grow near parent",
            environmentalAdaptation: "Low — all offspring identical",
            energyCost: "Low — no flowers, pollinators, or seeds required",
            reliability: "High — independent of external vectors",
            evolutionaryAdvantage: "Rapid exploitation of stable, favourable environments"
        }
    },

    applications: [
        "Crop breeding: hybridisation exploits heterosis (hybrid vigour) in maize, wheat",
        "Horticulture: vegetative propagation preserves desirable cultivars (rose, orchid)",
        "Seed banks: conservation of genetic diversity (Svalbard Global Seed Vault)",
        "Tissue culture: mass propagation, disease-free planting stock, conservation of endangered species",
        "Forensic botany: pollen analysis (palynology) in crime scene investigation",
        "Pollinator conservation: decline of bees threatens global food security",
        "Genetic modification: Agrobacterium tumefaciens uses plant reproduction pathways for gene insertion"
    ],

    topicSummary: {
        coreInsights: [
            "The flower is a highly specialised reproductive shoot bearing four whorls: calyx, corolla, androecium, and gynoecium — each with a distinct reproductive role.",
            "Pollination is merely pollen transfer; fertilisation is gamete fusion — students must not conflate these as the same event.",
            "Double fertilisation is the defining innovation of angiosperms: one sperm produces the embryo (2n), the other produces the endosperm (3n) — a nutritive tissue uniquely timed to embryo development.",
            "The seed contains three entities derived from separate structures: testa (from integuments), embryo (from zygote), endosperm (from triploid fusion nucleus).",
            "Asexual reproduction produces clones — genetically identical individuals — which is advantageous in stable environments but catastrophic when a new pathogen arrives.",
            "Tissue culture exploits totipotency: every plant cell theoretically contains the full genome and can regenerate an entire plant under appropriate hormonal conditions.",
            "Alternation of generations in angiosperms is highly reduced: the gametophyte (pollen grain; embryo sac) is entirely dependent on the dominant diploid sporophyte."
        ],
        keyComparisons: {
            insectVsWindPollinated: {
                insect: { petals: "Large, coloured", pollen: "Sticky/spiky, less abundant", stigma: "Sticky, positioned centrally", scent: "Often present" },
                wind:   { petals: "Absent/reduced", pollen: "Smooth, lightweight, vast quantities", stigma: "Large, feathery, protruding", scent: "Absent" }
            },
            monocotVsDicot: {
                monocot: { cotyledons: "1", leafVenation: "Parallel", flowerParts: "Multiples of 3", examples: "Grass, wheat, maize, lily" },
                dicot:   { cotyledons: "2", leafVenation: "Reticulate (net)", flowerParts: "Multiples of 4 or 5", examples: "Rose, oak, bean, sunflower" }
            }
        },
        commonMistakesToAvoid: [
            "Pollination and fertilisation are NOT the same event — pollination is pollen transfer; fertilisation is gamete fusion inside the ovule",
            "The fruit develops from the OVARY WALL (pericarp), not the ovule — the ovule becomes the seed",
            "Endosperm is triploid (3n), not diploid — it results from fusion of one sperm nucleus with TWO polar nuclei",
            "Asexual reproduction does NOT involve meiosis or fertilisation — it is entirely mitotic",
            "A bulb is not a root — it is a compressed stem with fleshy leaf scales; a potato (tuber) is a stem, not a root",
            "Self-pollination still requires pollination to precede fertilisation — the pollen must still germinate and grow a pollen tube",
            "Wind-pollinated flowers are not 'primitive' — they are highly specialised in opposite directions from insect-pollinated flowers"
        ],
        connections: [
            "Genetics: meiosis during pollen and embryo sac formation introduces genetic variation via independent assortment and crossing over",
            "Ecology: plant-pollinator co-evolution; seed dispersal ecology; invasive species spread by vegetative propagation",
            "Evolution: reduction of gametophyte across land plant lineages (mosses → ferns → gymnosperms → angiosperms)",
            "Biotechnology: tissue culture, genetic transformation via Agrobacterium, CRISPR applications in crop improvement",
            "Medicine: many drugs are plant secondary metabolites; understanding plant reproduction aids sustainable harvesting and cultivation"
        ],
        examReadinessChecklist: [
            "Can you draw and fully label a cross-section of an insect-pollinated flower?",
            "Can you explain double fertilisation step by step, naming the ploidy of every nucleus involved?",
            "Can you compare insect- and wind-pollinated flowers across five structural features?",
            "Can you describe five types of vegetative propagation with examples?",
            "Can you outline the stages of seed germination and the conditions required?",
            "Can you evaluate the advantages and disadvantages of sexual vs asexual reproduction in a given ecological scenario?"
        ]
    }
},

const EndSection6 = "close"