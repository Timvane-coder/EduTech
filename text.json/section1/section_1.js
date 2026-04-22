

cellBiology: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about cell structure, membrane transport, the cell cycle, and signalling from memory without requiring understanding of mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Recall"],
            whatDistinguishesThisLevel: "A remember-level response reproduces a correct fact with no explanation. 'The Na⁺/K⁺-ATPase uses ATP to move ions against their gradient' is remember-level. Adding 'because the concentration gradient opposes movement' crosses into understand.",
            examples: {
                cellStructure:    "List five structural differences between prokaryotic and eukaryotic cells. Name two organelles involved in protein secretion.",
                membraneTransport: "State which transport processes require ATP and which do not. Define osmosis.",
                cellDivision:     "List the four phases of mitosis in order. Name the checkpoint that monitors spindle attachment.",
                cellSignalling:   "Name the second messenger produced by adenylyl cyclase. State what GPCR stands for and its general structure."
            }
        },

        understand: {
            description: "Explain why structural features of cells produce their functional properties. Connect molecular events to physiological outcomes.",
            cognitiveDemand: "The student must supply the causal link — not just the fact but the reason behind it.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or a reason. 'Facilitated diffusion doesn't require ATP' is remember. 'Facilitated diffusion doesn't require ATP because the molecule moves down its pre-existing concentration gradient — thermodynamically spontaneous' is understand.",
            examples: {
                cellStructure:    "Explain why the compartmentalisation of lysosomes at pH 5 is essential for their function — and why releasing lysosomal contents into the cytoplasm (pH 7.2) is harmful.",
                membraneTransport: "Explain why water moves from a hypotonic to a hypertonic solution, using the concept of osmotic pressure and solute concentration.",
                cellDivision:     "Explain why the spindle assembly checkpoint must be satisfied before anaphase can begin, and what happens to cells that proceed without it.",
                cellSignalling:   "Explain how one adrenaline molecule can activate thousands of downstream enzyme molecules — trace the amplification through each step of the GPCR cascade."
            }
        },

        apply: {
            description: "Use principles of cell biology to predict outcomes, solve problems, or interpret a new experimental or clinical scenario.",
            cognitiveDemand: "Procedure execution or prediction in a novel situation — the student selects the correct concept and applies it correctly to a case they have not seen before.",
            verbs: ["Predict", "Determine", "Calculate", "Apply", "Solve", "Use", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict what happens to a red blood cell placed in 0.1% NaCl' requires application of osmosis to a novel concentration scenario — not just stating the definition of hypotonic.",
            examples: {
                cellStructure:    "A researcher treats cells with an inhibitor of Golgi vesicle formation. Predict what happens to: (a) newly synthesised membrane proteins; (b) lysosomal enzymes; (c) secreted proteins. Explain each prediction using the endomembrane system.",
                membraneTransport: "A plant cell is placed in a solution three times more concentrated than its cytoplasm. Predict and explain: (a) the direction of water movement; (b) whether this kills the cell; (c) what the equivalent effect would be on an animal cell.",
                cellDivision:     "A drug inhibits CDK4/6 (preventing Rb phosphorylation). Predict the effect on the cell cycle, naming the specific phase where arrest will occur and the molecular reason for arrest.",
                cellSignalling:   "Pertussis toxin permanently inactivates Gαi. Predict the effect on intracellular cAMP levels in an affected cell, and describe one physiological consequence."
            }
        },

        analyze: {
            description: "Interpret experimental data about cell biology to draw conclusions about cell structure, transport, division, or signalling that were not given.",
            cognitiveDemand: "Decomposition and inference from evidence — the student works from data to conclusion rather than from a rule to an answer.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires the student to examine evidence and derive a conclusion. Given a graph showing that cell volume increases in solution X and decreases in solution Y, the student must deduce the tonicity of each solution — the answer is not given, it must be reasoned from the data.",
            examples: {
                cellStructure:    "An electron micrograph shows a cell with abundant rough ER, a large Golgi apparatus, and many secretory vesicles but no lysosomes. Analyse what type of cell this likely is, what it probably does, and what would happen to its function if the Golgi were disrupted.",
                membraneTransport: "A cell is exposed to ouabain (a Na⁺/K⁺-ATPase inhibitor). Analyse: (a) what happens to intracellular Na⁺ and K⁺ concentrations; (b) how this affects the Na⁺-glucose cotransporter in intestinal cells; (c) the eventual effect on cell volume.",
                cellDivision:     "Flow cytometry data shows the following DNA content distribution in a cell population: 40% cells at 2N, 15% at values between 2N and 4N, 30% at 4N, 15% at values below 2N. Identify which cell cycle phases are represented and analyse whether these proportions suggest normal or abnormal cell cycle progression.",
                cellSignalling:   "A signalling molecule causes a rapid (seconds) transient increase in intracellular Ca²⁺ followed by a prolonged (minutes) activation of a protein kinase. Analyse whether this pattern is more consistent with GPCR signalling via IP₃ or receptor tyrosine kinase signalling via MAP kinase — justify using the known time courses of each pathway."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, experimental design, or interpretation in cell biology.",
            cognitiveDemand: "Judgement with justification — the student identifies what is wrong or incomplete, applies the correct criterion, and states the correct interpretation.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Verify", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires engagement with a specific claim. 'A student says facilitated diffusion is a form of active transport because it uses protein channels' — the student must identify the error (proteins facilitate movement but no energy is used), explain the correct criterion for active transport (movement against gradient requiring ATP), and correct the claim.",
            examples: {
                cellStructure:    "A textbook states: 'Prokaryotes cannot perform membrane transport because they lack a nucleus.' Evaluate this claim — identify the factual errors and restate the accurate relationship between nuclear presence and membrane transport capability.",
                membraneTransport: "Evaluate the following claim: 'Osmosis is a form of active transport because it involves water movement across a membrane protein (aquaporin).' Identify each error in this claim and provide the correct description of osmosis, including the role of aquaporins.",
                cellDivision:     "A researcher claims that a drug causing cell cycle arrest at the G2/M checkpoint would be an effective anticancer agent, because cancer cells divide more rapidly than normal cells and would therefore accumulate more frequently at the checkpoint. Evaluate this reasoning — identify what is valid, what is flawed, and what additional information would be needed.",
                cellSignalling:   "Evaluate the claim: 'Because kinase inhibitors block phosphorylation, they will always inhibit cell proliferation.' Assess whether this is universally true, identify examples where it fails, and state what additional information is needed to predict the cellular effect of a given kinase inhibitor."
            }
        },

        create: {
            description: "Design an experiment, construct a regulatory model, or formulate a novel strategy that integrates multiple cell biology concepts into an original, coherent output.",
            cognitiveDemand: "Synthesis and original production — the student combines concepts from multiple areas to produce something that did not exist before in the form required.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Plan", "Develop", "Derive"],
            whatDistinguishesThisLevel: "Create requires genuine integration. 'Design an experiment to determine whether a novel compound inhibits Na⁺/K⁺-ATPase' requires the student to specify the measurement method, controls, expected results for positive and negative outcomes, and a strategy to distinguish ATPase inhibition from general cell toxicity — combining transport concepts, experimental design, and controls into an original plan.",
            examples: {
                cellStructure:    "Design a cell fractionation experiment to isolate pure lysosomes from liver cells. Specify: (a) the homogenisation and centrifugation strategy; (b) how you would verify lysosomal purity using a marker enzyme; (c) what controls you would use to check for contamination by other organelles.",
                membraneTransport: "Propose an experimental strategy to determine whether a novel drug inhibits Na⁺/K⁺-ATPase, GLUT transporters, or both in intestinal epithelial cells. Include: (a) the measurements you would make; (b) the controls; (c) the expected results if only Na⁺/K⁺-ATPase is inhibited; (d) the expected results if only GLUT is inhibited.",
                cellDivision:     "Formulate a drug combination strategy to treat a cancer with: (i) CDK4/6 amplification; (ii) wild-type p53; (iii) high VEGF expression. For each drug in your combination, specify the target, mechanism of action, and the expected effect on the cancer cell. Explain why you chose a combination rather than monotherapy.",
                cellSignalling:   "Construct a fully annotated signalling pathway diagram from β-adrenergic receptor activation to glycogen phosphorylase activation. Include every molecular step, annotate each step as activation or inhibition, and mark two points where inhibitory drugs could be placed to reduce glycogen breakdown. Explain your rationale for each drug target."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name major organelles but cannot connect structure to function",
                "Knows diffusion moves molecules 'from high to low concentration' but cannot distinguish simple diffusion from facilitated diffusion",
                "Knows mitosis produces 'identical daughter cells' but cannot name the phases or describe what happens at each",
                "Treats all membrane transport as diffusion; does not yet understand that active transport requires ATP",
                "Conflates osmosis with diffusion — does not identify water as the specific molecule in osmosis"
            ],
            immediateNextSteps: [
                "Build an organelle function table with three columns: organelle name, key structural feature, one-sentence function. Complete it without copying — test recall after 24 hours.",
                "Draw a cell membrane cross-section with three examples of molecules on each side: one that crosses freely (O₂), one that uses a channel (Na⁺), one that needs a pump (Na⁺ against gradient). Label each with its transport type and energy requirement.",
                "Draw the cell cycle as a clock face with G1 (longest), S, G2, and M phases. Mark checkpoints with a stop sign icon. Write one key event for each phase.",
                "Memorise the osmosis anchor: 'water moves TOWARDS solute.' Draw a U-tube with pure water on one side and salt solution on the other; draw water-level arrows. Repeat with different concentrations until the direction is automatic."
            ],
            misconceptionsToAddress: [
                "All transport = diffusion → build the three-transport comparison table (see study tips)",
                "Osmosis = general diffusion → U-tube diagram with water-level arrows",
                "Organelle names without functions → organelle function table"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly classify transport types for familiar examples but makes errors with unfamiliar molecules",
                "Distinguishes mitosis from meiosis but cannot describe checkpoint molecular mechanisms",
                "Understands that GPCRs signal through second messengers but cannot trace the cascade beyond cAMP",
                "Correctly states that hypotonic causes swelling but makes errors predicting effects on plant vs animal cells",
                "Knows prokaryotes lack a nucleus but does not use this to explain antibiotic selectivity"
            ],
            immediateNextSteps: [
                "For transport: practice classifying 10 unfamiliar molecules (insulin, aquaporin-mediated water, amino acids via neutral amino acid transporters) using a decision tree: Is it moving down its gradient? If yes → passive. Does it need a protein? If yes → facilitated diffusion. If no protein needed → simple diffusion. If moving against gradient → active.",
                "For checkpoints: draw the CDK-cyclin wheel with all four checkpoints marked. For each, write the question the checkpoint asks and the consequence of checkpoint failure.",
                "For GPCR signalling: trace the complete cascade from adrenaline to glycogen phosphorylase activation in 10 numbered steps. Annotate where amplification occurs at each enzymatic step.",
                "For plant vs animal cells: draw both cell types in hypo-, iso-, and hypertonic solutions (six diagrams). Label turgid, plasmolysed, crenated, and lysed states. Identify which states are lethal."
            ],
            misconceptionsToAddress: [
                "Plant and animal cells respond identically to tonicity changes → six-panel diagram (above)",
                "Checkpoint = passive → CDK-cyclin wheel with checkpoint questions",
                "GPCR signalling ends at cAMP → full cascade trace with amplification annotation"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately traces signalling cascades from receptor activation to cellular effect",
                "Predicts effects of transport inhibitors on cell volume, ion gradients, and downstream transporters",
                "Explains cell cycle checkpoint molecular mechanisms using cyclin-CDK-substrate logic",
                "Connects cancer mechanisms to specific checkpoint failures and tumour suppressor/oncogene roles",
                "Explains endosymbiotic theory using molecular evidence (70S ribosomes, circular genome)"
            ],
            immediateNextSteps: [
                "Apply signalling concepts to pharmacology: for five drugs with known targets (propranolol, atenolol, metformin, bevacizumab, imatinib), trace the exact signalling step each drug blocks and predict the downstream consequences.",
                "Analyse published cell cycle flow cytometry data: given a DNA histogram, calculate the proportion of cells in G1, S, G2/M; determine whether the distribution indicates a checkpoint block and at which phase.",
                "Connect membrane transport to inherited disease: for cystic fibrosis (CFTR), familial hypercholesterolaemia (LDL receptor), and glucose-galactose malabsorption (SGLT1), describe the specific transport defect and how it produces the clinical phenotype.",
                "Evaluate endosymbiotic theory evidence: list five molecular features of mitochondria that support endosymbiotic origin; for each, state what the null hypothesis (non-endosymbiotic origin) would predict and why the evidence refutes it."
            ],
            misconceptionsToAddress: [
                "Signalling pathway targets are interchangeable → pharmacology application exercise (above)",
                "Endosymbiotic theory as speculation → evidence evaluation exercise (above)"
            ]
        },

        expert: {
            characteristics: [
                "Designs multi-parameter experiments to dissect signalling pathway components",
                "Interprets complex cell biology datasets (proteomics, flow cytometry, live imaging) at mechanistic level",
                "Evaluates published cell biology papers — identifies appropriate controls, statistical validity, mechanistic claims beyond data",
                "Connects cell biology mechanisms to systems-level properties (tissue homeostasis, tumour microenvironment, developmental patterning)"
            ],
            immediateNextSteps: [
                "Critically evaluate a primary research paper on cell signalling: identify the key claim, the experimental approach used to support it, the key controls, any alternative interpretations the authors did not exclude, and what follow-up experiment would most strengthen the conclusion.",
                "Design a CRISPR screen experiment to identify novel regulators of the G1/S checkpoint: specify the guide RNA library, the selection strategy (what phenotype distinguishes checkpoint-deficient cells), the validation approach, and the statistical method for hit identification.",
                "Model the quantitative relationship between receptor occupancy and downstream cAMP production using Hill equation analogies — explore how receptor reserve (spare receptors) allows full response at subsaturating ligand concentrations."
            ],
            misconceptionsToAddress: [
                "Published data = settled truth → paper critique exercise (above)",
                "Single-pathway thinking → multi-pathway integration through systems exercises"
            ]
        }
    }
},

molecularBiology: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about DNA structure, replication, transcription, translation, and gene regulation without requiring understanding of mechanisms.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "List", "Write", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces a correct fact with no explanation. 'AUG is the start codon' is remember-level. 'AUG is the start codon because it specifies methionine and is recognised by the initiator tRNA' begins to cross into understand.",
            examples: {
                dnaStructure:   "State the base pairing rules for DNA. Identify the sugar present in RNA but not in DNA.",
                dnaReplication: "List the key enzymes in DNA replication and state one function for each.",
                transcription:  "Write the three types of RNA and state one function for each. Name the promoter element common to eukaryotic genes transcribed by RNA Pol II.",
                translation:    "State the function of the A, P, and E sites in the ribosome. Write the codon for Met (start) and the three stop codons.",
                geneRegulation: "Name the two proteins that regulate the lac operon. State what allolactose does to the lac repressor."
            }
        },

        understand: {
            description: "Explain why molecular processes produce their outcomes — connect sequence to function, connect structure to catalytic mechanism, connect regulation to metabolic logic.",
            cognitiveDemand: "The student must supply the causal link — the mechanism or the reason, not just the fact.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Contrast", "Connect", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires mechanism. 'DNA polymerase reads 3'→5'' is remember. 'DNA polymerase reads the template 3'→5' because it adds nucleotides only to a free 3'-OH, so synthesis must proceed 5'→3' — requiring the template to be read antiparallel' is understand.",
            examples: {
                dnaStructure:   "Explain why G≡C base pairs make DNA more thermally stable than A=T base pairs — connect the number of hydrogen bonds to denaturation temperature.",
                dnaReplication: "Explain why the lagging strand must be synthesised discontinuously as Okazaki fragments — connect the directionality constraint of DNA polymerase to the antiparallel nature of the template.",
                transcription:  "Explain why eukaryotic mRNA must be processed (capped, spliced, polyadenylated) before translation, while prokaryotic mRNA does not require processing — connect to the structural difference between the two cell types.",
                translation:    "Explain why aminoacyl-tRNA synthetases are called 'the second genetic code' — what is the consequence if a synthetase charges the wrong tRNA?",
                geneRegulation: "Explain the metabolic logic of catabolite repression in the lac operon — why does glucose presence suppress lac operon expression even when lactose is present?"
            }
        },

        apply: {
            description: "Use knowledge of molecular biology processes to predict outcomes, solve sequence problems, or interpret a novel experimental or clinical scenario.",
            cognitiveDemand: "Procedure execution in a novel situation — the student applies the correct rule or sequence logic to produce a specific answer.",
            verbs: ["Predict", "Determine", "Write", "Apply", "Derive", "Solve", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Given the DNA template strand 3'-ATCGTA-5', write the mRNA sequence and the amino acid sequence encoded' requires applying base pairing rules and codon table to a novel sequence — not retrieval of a memorised answer.",
            examples: {
                dnaStructure:   "Given the DNA sequence 5'-ATGCCTGAA-3' (coding strand), write: (a) the complementary template strand; (b) the mRNA sequence produced by transcription; (c) the amino acid sequence translated from the mRNA.",
                dnaReplication: "A circular bacterial chromosome is being replicated. Identify: (a) the leading strand and lagging strand at one replication fork; (b) the direction of synthesis for each; (c) where RNA primers are located on each strand.",
                transcription:  "A eukaryotic gene has the structure: Exon1 – Intron1 – Exon2 – Intron2 – Exon3. The pre-mRNA is 2400 nt. Exon1 = 300 nt, Exon2 = 450 nt, Exon3 = 600 nt. Calculate the total intron length. State what happens to the intron sequences after transcription.",
                translation:    "A mutation changes the codon CAG (Gln) to UAG. Classify the mutation type and predict its effect on the protein produced.",
                geneRegulation: "Predict the level of lac operon transcription (none / low / high) and the molecular state of the repressor and CAP under each condition: (a) glucose absent, lactose absent; (b) glucose absent, lactose present; (c) glucose present, lactose absent; (d) glucose present, lactose present."
            }
        },

        analyze: {
            description: "Interpret experimental data about molecular processes — sequencing results, gel electrophoresis patterns, gene expression data — to draw mechanistic conclusions.",
            cognitiveDemand: "Decomposition and inference from evidence — the student works from molecular data to a conclusion that was not given.",
            verbs: ["Identify", "Deduce", "Analyse", "Interpret", "Determine", "Classify", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a gel showing that a mutant protein is 40% shorter than wild-type, the student must deduce this is consistent with a nonsense mutation creating a premature stop codon — reasoning not retrieval.",
            examples: {
                dnaStructure:   "A DNA sample has a G+C content of 72%. Predict its melting temperature relative to a sample with 40% G+C, explaining your reasoning using base-pair hydrogen bonding. State what practical technique could exploit this difference to purify the two samples.",
                dnaReplication: "An experiment uses ¹⁵N-labelled DNA replicated once in ¹⁴N medium. Density gradient ultracentrifugation shows a single band at intermediate density. After a second replication in ¹⁴N, two bands appear: one at intermediate and one at low density. Analyse what these results demonstrate and why they disprove conservative replication.",
                transcription:  "RNA-seq data show that a gene is expressed in liver but not in muscle cells, despite identical DNA sequences in both cell types. Analyse three molecular mechanisms that could produce tissue-specific expression, specifying what molecular change you would look for (methylation, histone modification, transcription factor occupancy) to distinguish between them.",
                translation:    "SDS-PAGE shows that a mutant protein migrates at a position corresponding to 60% of the wild-type molecular weight. Northern blot shows that mRNA length is unchanged. Analyse what type of mutation is most consistent with these findings, and why an mRNA of normal length can produce a shorter protein.",
                geneRegulation: "A patient's cancer cells overexpress a gene involved in cell division. ChIP-seq analysis shows that the promoter of this gene has increased H3K27ac marks and decreased H3K27me3 marks compared to normal cells. Analyse what these histone modifications indicate about chromatin state and transcriptional activity at this locus."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, experimental design, or interpretation in molecular biology.",
            cognitiveDemand: "Judgement with justification — the student applies the correct molecular biology principle as a criterion and reaches a specific verdict.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a specific verdict with justification. 'A student claims that because DNA polymerase proofreads errors, mutations never occur in dividing cells — evaluate this.' The student must identify what is correct (proofreading dramatically reduces errors), what is wrong (it reduces but does not eliminate errors — ~1 in 10⁹ bases still errors; and proofreading does not address all mutation types such as UV-induced dimers), and state the correct conclusion.",
            examples: {
                dnaStructure:   "A student claims: 'RNA is less stable than DNA because it is single-stranded.' Evaluate this claim — identify what is correct, what is incomplete, and state the primary molecular reason for RNA's greater chemical instability compared to DNA.",
                dnaReplication: "Evaluate the following student claim: 'Because DNA polymerase proofreads in the 3'→5' direction, no mutations can occur during DNA replication.' Identify the error in reasoning, state the correct error rate and its basis, and name two processes that contribute to residual errors after proofreading.",
                transcription:  "A researcher uses a plasmid without a poly-A signal sequence to express a protein in human cells. They obtain no detectable protein expression despite confirmed plasmid delivery. Evaluate the likely molecular cause, referencing mRNA stability, nuclear export, and translation initiation.",
                translation:    "Evaluate the claim: 'A synonymous mutation cannot affect protein function because it encodes the same amino acid.' Identify the circumstances under which this claim is false — provide at least two molecular mechanisms by which synonymous mutations can alter gene expression or protein function.",
                geneRegulation: "A company claims that a drug that globally demethylates DNA will treat cancer by re-expressing silenced tumour suppressor genes. Evaluate this strategy — identify the specific mechanism claimed, state what else would be demethylated and why this causes problems, and propose a more targeted alternative approach."
            }
        },

        create: {
            description: "Design an experiment, derive a molecular sequence, formulate a gene regulation model, or propose a biotechnology strategy that integrates multiple molecular biology concepts.",
            cognitiveDemand: "Synthesis and original production — the student integrates multiple molecular biology concepts into a novel, coherent output.",
            verbs: ["Design", "Propose", "Derive", "Formulate", "Construct", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original integration. 'Design a PCR experiment to detect a specific point mutation' requires the student to specify primer design, annealing temperature rationale, product size, and how to distinguish mutant from wild-type allele — combining knowledge of replication, DNA structure, and enzyme specificity into a novel experimental plan.",
            examples: {
                dnaStructure:   "Design a PCR experiment to detect a single nucleotide polymorphism (SNP) that causes a missense mutation in a disease gene. Specify: (a) primer design strategy, including where primers anneal relative to the SNP; (b) how you would distinguish the wild-type and mutant alleles; (c) a gel electrophoresis interpretation scheme for homozygous wild-type, heterozygous, and homozygous mutant genotypes.",
                dnaReplication: "Propose an experiment using BrdU (a thymidine analogue incorporated during replication) to determine the proportion of cells in S phase in a tumour sample versus normal tissue. Include: (a) the labelling procedure; (b) how BrdU incorporation is detected; (c) controls; (d) how you would interpret different proportions of BrdU-positive cells.",
                transcription:  "A gene is expressed only in neurons. Design a strategy using your knowledge of transcriptional regulation to identify the transcription factors responsible for neuron-specific expression. Include: (a) the promoter analysis approach; (b) how you would identify candidate transcription factor binding sites; (c) how you would validate that a candidate transcription factor actually regulates this gene in neurons.",
                translation:    "Derive the expected effect on translation efficiency of the following changes to an mRNA, justifying each from first principles: (a) removal of the 5' cap; (b) insertion of a stable hairpin loop 10 nt downstream of the start codon; (c) mutation of the Kozak sequence; (d) addition of premature stop codons via a nonsense mutation at 25% of the way through the coding sequence.",
                geneRegulation: "Construct a synthetic gene circuit using lac operon regulatory elements that would express a therapeutic protein only when both: (i) a tetracycline analogue is present (to remove TetR repressor), AND (ii) lactose is present (to remove lac repressor from a second operator). Draw the circuit, label all regulatory elements, and explain the logic gate behaviour (AND gate) that your design implements."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Knows DNA is a double helix but cannot write a complementary strand or explain antiparallel orientation",
                "Knows 'DNA makes RNA makes protein' but cannot describe any of the three steps mechanistically",
                "Cannot distinguish the template strand from the coding strand",
                "Confuses codons (on mRNA) with anticodons (on tRNA) and cannot use a codon table",
                "Treats gene regulation as an on/off switch — does not understand graded or combinatorial control"
            ],
            immediateNextSteps: [
                "Antiparallel practice: given any 5'→3' sequence, practice writing the complementary strand in the 3'→5' direction by base-pairing each nucleotide. Check by reading the complement 5'→3' and confirming it matches the original complement. Repeat 10 times with different sequences.",
                "Central dogma sequence: draw three connected arrows: DNA→RNA→Protein. Under each arrow, write the enzyme (DNA polymerase, RNA polymerase, ribosome), the template, and the product. Do not proceed to mechanism until this framework is automatic.",
                "Codon table practice: take any 9-nucleotide mRNA sequence and translate it to 3 amino acids using the table. Check template vs coding strand identification by verifying the mRNA matches the coding strand (with U instead of T).",
                "Template vs coding strand anchor: 'The template is the one RNA polymerase reads — its sequence is the COMPLEMENT of the mRNA. The coding strand has the SAME sequence as the mRNA (with T instead of U).'"
            ],
            misconceptionsToAddress: [
                "Coding strand = template strand → coding/template strand anchor (above)",
                "Codon = anticodon → codon table practice with explicit anticodon identification",
                "Gene regulation is binary → introduce the lac operon four-condition table"
            ]
        },

        developing: {
            characteristics: [
                "Can write complementary DNA strands and mRNA sequences but makes errors with strand direction",
                "Can describe transcription and translation in general terms but cannot specify enzyme activities or processing steps",
                "Understands that introns are removed but does not know which molecule performs splicing or why",
                "Can state that competitive inhibitors increase Km but cannot apply this to antibiotic mechanisms",
                "Knows the lac operon involves repressor and inducer but cannot predict expression under all four glucose/lactose combinations"
            ],
            immediateNextSteps: [
                "Strand directionality drill: given 10 double-stranded DNA sequences, identify the template strand for each, write the mRNA, and translate the first three codons. Do this without looking at notes, then check each step against the rule.",
                "mRNA processing steps: write the three processing steps (5' cap, splicing, poly-A) with the enzyme responsible and the function of each modification. Test by covering the function column and restating it from the enzyme column.",
                "lac operon four-condition table: draw a 2×2 grid (glucose: present/absent × lactose: present/absent). For each quadrant, fill in: repressor state, CAP state, transcription level (none/low/high), and biological logic. Practise until all 16 cells are correct without reference.",
                "For antibiotic mechanism: use the template 'Drug X inhibits [molecular process] by [mechanism] in bacteria because [structural difference from eukaryotic equivalent].' Apply this template to streptomycin, rifampicin, and ampicillin."
            ],
            misconceptionsToAddress: [
                "Splicing is spontaneous → identify the spliceosome and its RNA catalytic activity",
                "lac operon logic confusion → four-condition table (above)",
                "Strand direction errors → directionality drill (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly transcribes and translates any DNA sequence, including predicting effects of specific mutations",
                "Explains all steps of replication, transcription, and translation with correct enzyme assignments",
                "Connects lac operon regulation to broader principles of transcription factor logic",
                "Can predict mutation effects (synonymous/missense/nonsense/frameshift) for a given sequence change",
                "Understands alternative splicing as a source of protein diversity from a single gene"
            ],
            immediateNextSteps: [
                "Mutation consequence analysis: given 10 specific single-base changes, classify each as synonymous, missense, or nonsense, and predict whether protein function is likely preserved, altered, or abolished — justify each prediction using the genetic code and protein structure principles.",
                "Alternative splicing: research three genes with well-characterised alternative splicing (Drosophila DSCAM, human BRCA1, troponin T). For each, describe what different protein isoforms are produced, what tissues express each isoform, and what functional difference the isoforms have.",
                "Epigenetic regulation: compare DNA methylation, histone acetylation, and histone methylation as regulatory mechanisms — for each, specify the writer, reader, and eraser enzymes, and describe one disease context where each mechanism is dysregulated."
            ],
            misconceptionsToAddress: [
                "Synonymous mutations are always silent → identify codon usage bias and splicing-regulatory sequences",
                "Epigenetics = vague concept → writer-reader-eraser framework (above)"
            ]
        },

        expert: {
            characteristics: [
                "Designs molecular experiments using replication, transcription, or translation as analytical tools",
                "Interprets complex molecular biology datasets (RNA-seq, ChIP-seq, CRISPR screens, ribosome profiling)",
                "Evaluates claims about gene regulation using mechanistic criteria",
                "Applies molecular biology to biotechnology design — mRNA therapeutics, CRISPR strategies, synthetic gene circuits"
            ],
            immediateNextSteps: [
                "Ribosome profiling: read the original Ingolia et al. (2009) paper describing ribosome profiling — understand how it uses translation as a readout to map the ribosome-protected RNA footprint, and how this reveals translation efficiency across the transcriptome.",
                "CRISPR mechanism deep-dive: understand the PAM sequence requirement, the role of RuvC and HNH nuclease domains in Cas9, the mechanism of DSB repair by NHEJ vs HDR, and how each repair pathway produces different editing outcomes. Apply this to design a precise base-editing vs HDR-mediated correction strategy for a specific mutation.",
                "Synthetic biology design: construct a toggle switch (Gardner et al., 2000 model) using lac and lambda repressor elements — trace the bistable logic and explain how it could be applied to a therapeutic context (drug-controlled gene expression)."
            ],
            misconceptionsToAddress: [
                "CRISPR always produces precise edits → HDR vs NHEJ outcome analysis (above)",
                "Translation is uniform across the mRNA → ribosome profiling reveals 5' UTR upstream ORFs, pausing, and differential elongation rates"
            ]
        }
    }
},


integumentarySystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about integumentary system anatomy and terminology from memory without requiring explanation of why they are true. The student reproduces labels, definitions, and lists accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot do this reliably cannot access any higher cognitive level for this topic.",
            verbs: ["State", "Name", "List", "Label", "Identify", "Define", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'The stratum basale is the deepest epidermal layer' is remember-level. Adding 'because it contains mitotically active cells that replenish all overlying strata' crosses into understand.",
            examples: {
                skinStructure:    "Name the five layers of the epidermis in order from deepest to most superficial. State which layer is only present in thick skin.",
                skinFunctions:    "List six functions of the integumentary system. Name the pigment that provides UV protection and state which cell produces it.",
                thermoregulation: "Name two mechanisms by which skin loses heat and two by which it conserves heat.",
                woundHealing:     "List the four phases of wound healing in the correct sequence. Name the primary cell type active in each phase.",
                appendages:       "Name the two types of sweat gland, state the secretory mechanism of each, and identify their primary functions."
            }
        },

        understand: {
            description: "Explain the biological meaning behind anatomical facts — connect structure to function, explain mechanisms, and interpret why a feature has the form it does. The student must supply causal links, not just facts.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, explains, or connects rather than repeating. A correct mechanistic explanation that could not be produced by memorising a question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'The epidermis is avascular' is remember. 'The epidermis is avascular because stratified squamous epithelium lacks the space for capillaries; nutrients instead diffuse from dermal papillary capillaries through the basement membrane' is understand. The student must supply the functional logic.",
            examples: {
                skinStructure:    "Explain why the epidermis can act as a waterproof barrier despite being made of cells. Your answer must identify which layer provides the primary waterproofing and describe the molecular mechanism.",
                skinFunctions:    "Explain why all humans have approximately the same number of melanocytes but different skin colours. Your answer must describe how melanin production and transfer to keratinocytes differs between individuals.",
                thermoregulation: "Explain the negative feedback loop that maintains core body temperature at 37°C when environmental temperature rises. Identify the receptor, integration centre, and two effector responses in the skin.",
                woundHealing:     "Explain why the inflammatory phase of wound healing — although producing pain, redness, and swelling — is essential for effective repair. Identify the specific cellular events that would be absent if inflammation were completely suppressed.",
                appendages:       "Explain why sebaceous glands are classified as holocrine glands and why this secretion mechanism is appropriate for producing sebum."
            }
        },

        apply: {
            description: "Use known anatomical principles, physiological rules, or clinical criteria to solve a new problem or make a specific prediction. The student selects the correct concept and applies it correctly to an unfamiliar scenario.",
            cognitiveDemand: "Procedure execution in a novel context. The student must identify which concept applies, deploy it correctly, and produce a specific answer — a prediction, classification, or calculation. Failure often occurs at the selection step.",
            verbs: ["Predict", "Classify", "Determine", "Apply", "Sketch", "Use", "Calculate"],
            whatDistinguishesThisLevel: "Apply requires a new scenario. 'Classify a burn that presents with blistering, moist surface, and extreme pain' requires the student to match symptoms to the partial-thickness burn criteria and justify. 'List the burn classification types' is remember.",
            examples: {
                skinStructure:    "A histology slide shows a region of skin with no stratum lucidum and only 4–5 epidermal cell layers. Determine whether this sample is from thick or thin skin and justify your classification using two structural criteria.",
                skinFunctions:    "Predict what would happen to an individual's vitamin D synthesis if they were to cover all their skin completely for one year in a high-latitude region. Apply each step of the UV-D3-calcitriol pathway to produce a specific physiological prediction.",
                thermoregulation: "A patient presents with an inability to sweat (anhidrosis) due to a genetic eccrine gland defect. Predict two specific physiological consequences in a hot environment and identify one compensatory thermoregulatory mechanism that would be overloaded as a result.",
                woundHealing:     "Apply the wound healing phase sequence to predict what would happen to a wound if the patient were started on high-dose systemic corticosteroids on day 3 post-injury. Specify which phase would be most severely disrupted and what the wound would look like at day 14.",
                burnClassification: "A patient sustains a burn: the wound is white, dry, leathery, and the patient reports no pain at the wound site despite appearing to have significant injury. Classify the burn, justify using all four clinical signs, and state whether skin grafting will be required."
            }
        },

        analyze: {
            description: "Break down experimental observations, clinical data, or histological images into components, identify patterns, and draw justified conclusions from evidence. The student works from evidence to interpretation — the conclusion is not given.",
            cognitiveDemand: "Decomposition and inference from evidence. The student receives data or a scenario and must determine what it means. The key marker: the conclusion is derived by the student, not retrieved from memory.",
            verbs: ["Identify", "Deduce", "Analyse", "Distinguish", "Classify", "Interpret", "Determine"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given a Lineweaver-Burk-style plot of sweat rate vs core temperature, identify the threshold and maximum sweat rate' requires reading data and deducing physiological parameters — the student must derive the answer, not recall it.",
            examples: {
                skinStructure:    "A biopsy from a patient with psoriasis shows: markedly thickened stratum spinosum, reduced stratum granulosum, parakeratosis (nuclei retained in stratum corneum), and elongated dermal papillae. Analyse each histological finding, identify which step of normal epidermal maturation is disrupted in each case, and explain what drives the elongated papillae.",
                skinFunctions:    "Two individuals with the same body mass and body surface area are exercising in the same conditions. Person A is acclimatised to heat (trained athlete) and begins sweating at a core temperature of 37.2°C. Person B (unacclimatised) begins sweating at 37.8°C. Analyse the physiological significance of this difference and deduce what structural or functional change in the eccrine glands accounts for it.",
                thermoregulation: "A patient with autonomic neuropathy (loss of sympathetic innervation to the skin) is exposed to 40°C ambient temperature. Analyse which specific thermoregulatory mechanisms will be impaired, which will be intact, and predict the clinical consequence if the patient remains in the heat for 2 hours.",
                woundHealing:     "A wound biopsy at day 5 post-injury shows abundant neutrophils, few macrophages, no fibroblasts, and no new blood vessel formation. Analyse whether this wound healing is progressing normally or is impaired. Identify which phase the wound should have entered by day 5, which cell types should predominate, and propose two systemic conditions that could account for the observed picture.",
                skinCancer:       "A patient presents with a pigmented lesion: 1.2 cm diameter, irregular and asymmetric border, colour ranging from tan to dark brown to black within the same lesion, and the patient reports it has changed in size over 6 weeks. Analyse the lesion using the ABCDE criteria and determine which cancer type this most likely represents and why it carries a higher mortality risk than basal cell carcinoma."
            }
        },

        evaluate: {
            description: "Make a supported judgement about a claim, clinical decision, experimental conclusion, or treatment approach — applying specific criteria, identifying flaws, and defending a position with mechanistic reasoning.",
            cognitiveDemand: "Judgement with justification. The student must state a judgement, identify the criterion by which it succeeds or fails, and provide the correct alternative where appropriate. Simply identifying an error without explaining why it is wrong is insufficient.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Justify", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student states that darker skin has more melanocytes than lighter skin — evaluate this claim.' The student must: state the claim is false (judgement), explain that melanocyte number is equal across all skin tones and the difference lies in melanin type, quantity, and packaging (criterion), and state the correct mechanism (correction).",
            examples: {
                skinStructure:    "A medical student states: 'The hypodermis is the deepest layer of the skin and plays no role in thermoregulation — it is simply structural padding.' Evaluate this claim fully: identify which parts are correct, which are incorrect, explain the true role of the hypodermis in thermoregulation with reference to its composition, and correct the student's definition of 'skin.'",
                skinFunctions:    "A cosmetics company claims its product 'penetrates all layers of the skin to reach the dermis and repair collagen.' Evaluate this claim using your knowledge of the epidermal barrier. Identify the specific layer and mechanism that would resist penetration by most topical products, and state what chemical property a molecule would need to have to genuinely reach the dermis.",
                thermoregulation: "Evaluate the following statement: 'Shivering is a function of the integumentary system.' Assess whether this is correct by identifying where the effector mechanism for shivering resides, what the integumentary system's actual contribution to heat conservation is, and whether the statement could be made partially correct with appropriate qualification.",
                woundHealing:     "A nurse proposes applying a dry, occlusive dressing to a partial-thickness burn wound, reasoning that 'keeping the wound dry will prevent infection.' Evaluate this clinical decision against the biology of the proliferation phase. Address: the role of moisture in keratinocyte migration, the effect of desiccation on granulation tissue, and what type of dressing the evidence base supports for partial-thickness wounds.",
                skinCancer:       "Evaluate the claim: 'Basal cell carcinoma is not a serious cancer because it never spreads to other organs.' Assess this statement against the known behaviour of BCC, identify the specific risk it does carry, and explain why its clinical significance should not be dismissed despite low metastatic potential."
            }
        },

        create: {
            description: "Generate an original, coherent output — an experimental design, an annotated diagram, a patient education resource, a mechanistic model, or an integrated management plan — by synthesising multiple concepts from the lesson into a new, purposeful product.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before and requires combining concepts from multiple sections of the lesson. A strong create-level response is internally consistent, scientifically accurate, and addresses every element of the brief.",
            verbs: ["Design", "Construct", "Develop", "Plan", "Propose", "Formulate", "Create"],
            whatDistinguishesThisLevel: "Create cannot be answered by recalling a procedure. 'Design a patient education leaflet explaining why people with darker skin need more sun exposure to maintain vitamin D levels, without causing increased skin cancer risk' requires integrating melanin biology, vitamin D synthesis, UV damage mechanisms, and behavioural risk communication — none of which is pre-assembled in this form.",
            examples: {
                skinStructure:    "Design a fully annotated cross-sectional diagram of skin that a first-year medical student could use as a revision resource. Include: all five epidermal strata (labelled with cell types and key events at each), papillary and reticular dermis (labelled with structural proteins and receptor types found at each depth), hypodermis, and at least four skin appendages. Annotate where mitosis occurs, where keratinisation begins, and where the primary waterproofing barrier is located.",
                skinFunctions:    "Develop a patient education plan for a patient with vitiligo (loss of melanocytes in patches) who is asking about sun protection and vitamin D. Your plan must: (a) explain what melanocytes do in normal skin and why their absence in vitiligo patches specifically increases UV damage risk; (b) explain the vitamin D synthesis paradox (need UV but must protect skin); (c) provide a specific, evidence-based recommendation for sun exposure and supplementation; (d) explain the risk of melanoma in affected vs unaffected skin areas.",
                thermoregulation: "Propose a physiological monitoring protocol for a military recruit undergoing heat acclimatisation training over 14 days. Your protocol must specify: (a) which integumentary parameters you would measure (sweat rate, sweat onset threshold, skin temperature, dermal blood flow) and how; (b) what changes you predict over the 14-day period and the physiological mechanism driving each change; (c) criteria for stopping training due to heat illness risk; (d) how you would confirm that acclimatisation is complete.",
                woundHealing:     "Construct a detailed wound management plan for a 65-year-old patient with type 2 diabetes presenting with a 3 cm × 3 cm plantar foot ulcer (wound base pink but no granulation tissue; wound edges undermined; no signs of systemic infection). Your plan must: (a) identify which phase of healing is impaired and explain the diabetic mechanism; (b) select and justify an appropriate dressing type for each wound healing phase; (c) specify two systemic interventions to support healing; (d) set a measurable outcome milestone at 4 weeks and explain what you would do if it is not met.",
                skinCancer:       "Formulate a population-level skin cancer prevention strategy for a country with a predominantly light-skinned population and high annual UV index. Your strategy must: (a) explain the molecular mechanism by which UV radiation causes DNA damage leading to carcinogenesis (specifically identifying the mutation type); (b) target all three skin cancer types with different primary prevention messages matched to their pathogenesis; (c) design a secondary prevention programme using the ABCDE criteria; (d) address the vitamin D synthesis trade-off explicitly in your sunscreen advice."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three main layers of skin (epidermis, dermis, hypodermis) but cannot name the five epidermal strata in order",
                "Knows skin has a protective function but cannot specify the molecular or structural basis of any single protection mechanism",
                "Confuses melanocyte number (equal in all skin tones) with melanin quantity (variable) as the basis of skin colour",
                "Cannot sequence the four phases of wound healing reliably",
                "Treats the stratum corneum as 'dead skin' without understanding its functional architecture",
                "Does not distinguish between eccrine and apocrine glands"
            ],
            immediateNextSteps: [
                "Before memorising strata names: draw a simple ladder with five rungs and label from bottom (stratum basale — 'base') to top (stratum corneum — 'corn' = tough outer layer). Use one functional word per rung. Reproduce this ladder from memory three times per day for three days.",
                "For melanocyte confusion: write once and anchor: 'SAME number of melanocytes. DIFFERENT amount of melanin.' Draw two stick figures — identical melanocytes in both, but more and darker melanosomes in the darker figure. Never conflate number with activity.",
                "For wound healing sequence: use the mnemonic HIPR (Haemostasis, Inflammation, Proliferation, Remodelling) and assign one dominant cell to each: platelets, neutrophils/macrophages, fibroblasts, collagen-remodelling fibroblasts.",
                "For the stratum corneum: use the 'brick and mortar' analogy — corneocytes are bricks (dead but structural); intercellular lipids are mortar (waterproofing). Actively functional, not merely dead.",
                "For sweat glands: draw two glands side by side — eccrine (everywhere on body, merocrine secretion, thermoregulation) and apocrine (armpits/groin, modified merocrine, stress-related). Label both with location and function before touching any other detail."
            ],
            misconceptionsToAddress: [
                "Melanocyte number = skin colour → equal-number diagram (above)",
                "Stratum corneum = inactive dead skin → brick and mortar functional model (above)",
                "Wound healing is a single continuous process → HIPR four-cell-type sequence (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can name all five epidermal strata but sometimes reverses the order of the middle strata",
                "Understands keratinisation as a process but cannot explain the molecular events at the stratum granulosum (lamellar granule secretion)",
                "Knows melanin provides UV protection but cannot connect this to vitamin D synthesis trade-off",
                "Can name the four wound healing phases but confuses the timeline and cell types of inflammation vs proliferation",
                "Distinguishes eccrine from apocrine glands by location but not by secretory mechanism",
                "Classifies burns by degree but not by the current superficial/partial/full-thickness terminology"
            ],
            immediateNextSteps: [
                "For stratum order errors: use the mnemonic 'Britney Spears Goes to LA Clubs' — Basale, Spinosum, Granulosum, Lucidum (thick only), Corneum. Write this vertically on every diagram with the strata alongside, and never write a stratum diagram without the mnemonic visible until the order is automatic.",
                "For lamellar granules: connect to the enzyme lesson concept of secretory products — lamellar granules are lysosomes that fuse with the cell membrane and secrete lipid bilayers into the intercellular space, forming the waterproof mortar. Draw this at the cellular level once.",
                "For vitamin D trade-off: draw a two-headed arrow: UV → melanin absorbs → less vitamin D synthesis (in dark skin at high latitude). The same protection that prevents UV damage also reduces vitamin D. This is the evolutionary tension that shaped global skin colour distributions.",
                "For wound healing cell-type confusion: attach each phase to a clinical observation — inflammation: redness/swelling/warmth (day 1–3); proliferation: pink granulation tissue forming (day 4–14); remodelling: scar paling and flattening (weeks to months). Clinical timeline anchors the cell biology.",
                "For burn terminology: retire first/second/third degree entirely from active use. Practice only: superficial (epidermis only), partial-thickness (epidermis + partial dermis), full-thickness (entire dermis). Draw a cross-section of skin and shade the depth of each."
            ],
            misconceptionsToAddress: [
                "Stratum order confusion → BSGLC mnemonic (above)",
                "Old burn degree terminology → superficial/partial/full cross-section diagram (above)",
                "UV protection vs vitamin D trade-off → two-headed arrow diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Describes all five epidermal strata with correct cell types, key events, and structural proteins at each",
                "Explains keratinisation from mitosis in the basale to desquamation at the corneum as a continuous conveyor",
                "Correctly applies the ABCDE rule to differentiate melanoma from benign lesions",
                "Accurately sequences wound healing with correct cell types and explains what each cell type does molecularly",
                "Connects dermal collagen and elastin to skin mechanical properties and explains age-related changes",
                "Calculates or estimates the turnover time of epidermal cells (~25–45 days) from the structure of the strata"
            ],
            immediateNextSteps: [
                "Connect integumentary to other systems: trace vitamin D from UV exposure through skin → liver → kidney → gut → calcium absorption → bone. Write the six-step pathway from memory with the molecule at each step.",
                "Study sensory receptors in depth: for each of the five receptor types, link location (epidermal/dermal papillary/deep dermis) to the stimulus detected and the nerve fibre type carrying the signal (Aβ for light touch/vibration, Aδ and C for pain/temperature). Create a three-column table.",
                "Investigate wound healing growth factors: identify TGF-β, PDGF, VEGF, and EGF — for each, state which cell produces it, which cell responds to it, and which phase of healing it drives. Connect this to the diabetic wound healing scenario.",
                "Apply burn management biology: for each burn depth, predict which cell types are destroyed, whether epidermal stem cells survive, and therefore whether spontaneous re-epithelialisation is possible — this is the biological basis of the grafting decision.",
                "Study Fitzpatrick skin phototype scale and connect each phototype to melanin type, UV damage risk, and vitamin D synthesis capacity — integrating melanocyte biology with clinical dermatology."
            ],
            misconceptionsToAddress: [
                "Vmax-analogous error: 'more sun always means more vitamin D' → vitamin D synthesis saturates within 15–20 minutes of UV exposure; excess UV only increases DNA damage risk, not vitamin D yield",
                "Wound healing 'completion' → remodelling continues for up to 2 years; a scar at 6 weeks is not a healed wound"
            ]
        },

        expert: {
            characteristics: [
                "Explains keratinisation at the molecular level: cornified envelope proteins (involucrin, loricrin), transglutaminase cross-linking, ceramide secretion from lamellar granules",
                "Interprets complex wound biopsy findings and identifies which healing phase has failed and the likely systemic cause",
                "Analyses the molecular basis of skin cancer (UV-induced thymine dimers → p53 mutation → loss of apoptotic control → carcinogenesis) and connects to pharmacological targets",
                "Evaluates published clinical trials of wound care products using wound healing biology as the critical framework",
                "Connects integumentary physiology to pharmacokinetic modelling of transdermal drug delivery"
            ],
            immediateNextSteps: [
                "Study the molecular biology of cornification: research the cornified envelope — the protein scaffold (involucrin, loricrin, small proline-rich proteins) cross-linked by transglutaminase 1, coated with ceramide-rich lipids from lamellar granules. Understand why mutations in any of these components (e.g. filaggrin in eczema) produce barrier failure.",
                "Analyse melanoma molecular pathways: the BRAF V600E mutation (present in ~50% of melanomas) → constitutive MAPK/ERK signalling → uncontrolled proliferation. Investigate how vemurafenib (a BRAF inhibitor) exploits this. Connect this to the general principle of oncogene-targeted therapy.",
                "Critically evaluate a wound care clinical trial: identify the primary endpoint (wound closure by day 28 is standard), assess whether the intervention is biologically plausible for the healing phase studied, and evaluate whether the control arm received standard of care.",
                "Model transdermal drug delivery quantitatively: study Fick's first law of diffusion as applied to skin (flux = permeability coefficient × concentration gradient × area). Identify the physicochemical properties that maximise skin permeability (molecular weight <500 Da, log P 1–3, lack of ionisation) and apply these to evaluate whether a given drug is a transdermal candidate."
            ],
            misconceptionsToAddress: [
                "Filaggrin deficiency as 'just dry skin' → filaggrin is the major structural protein of the cornified envelope and its loss fundamentally compromises the physical barrier, allowing allergen penetration and IgE sensitisation — the molecular basis of eczema-asthma-rhinitis atopic march"
            ]
        }
    }
},


excretorySystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about the excretory system from memory without requiring understanding of mechanisms or relationships. The student reproduces definitions, lists, and labels accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot do this cannot access any higher level.",
            verbs: ["State", "Name", "List", "Define", "Label", "Identify", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains accurate facts with no mechanistic explanation. 'ADH increases water reabsorption in the collecting duct' is remember-level. Adding why ADH does this crosses into understand.",
            examples: {
                excretoryBasics:  "State the difference between excretion and egestion. Name four metabolic waste products removed by excretion.",
                nephronFunction:  "List the four processes that occur in the nephron in the correct sequence. Name the region of the nephron where each process primarily occurs.",
                osmoregulation:   "Name the hormone that regulates water reabsorption in the collecting duct. State its source organ.",
                hormoneControl:   "List the five steps of the RAAS cascade from renin release to aldosterone production. Name the enzyme targeted by ACE inhibitors."
            }
        },

        understand: {
            description: "Explain mechanisms, connect cause to effect, and interpret the meaning of physiological events. The student demonstrates they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student explains a mechanism, connects structure to function, or interprets what a result means — they cannot produce this by repeating memorised question-answer pairs.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "'ADH increases water reabsorption' is remember. 'ADH increases water reabsorption by triggering insertion of aquaporin-2 channels into the collecting duct apical membrane, allowing water to follow the osmotic gradient created by the loop of Henle' is understand — the student supplies the molecular mechanism.",
            examples: {
                excretoryBasics:  "Explain why the kidney filters 180 L/day but excretes only 1.5 L as urine. Your answer must explain the purpose and mechanism of selective reabsorption.",
                nephronFunction:  "Explain why the ascending limb of the loop of Henle must be impermeable to water. Connect this impermeability to the creation of the medullary osmotic gradient.",
                osmoregulation:   "Explain the negative feedback loop that controls ADH secretion. Identify the stimulus, receptor, effector, and response, and explain what happens when osmolarity returns to normal.",
                hormoneControl:   "Explain why ACE inhibitors reduce blood pressure. Your answer must name the step in the RAAS that is blocked and trace the downstream effects on vascular tone and blood volume."
            }
        },

        apply: {
            description: "Use known principles, processes, and relationships to solve unfamiliar problems, make predictions, or perform calculations in new contexts.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the right concept, applies it correctly, and produces a specific prediction, calculation, or trace.",
            verbs: ["Calculate", "Predict", "Trace", "Apply", "Determine", "Sketch", "Use"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict urine concentration if ADH levels are very low' requires applying the ADH-aquaporin mechanism to a specific scenario — producing dilute, large-volume urine. Simply explaining what ADH does is understand-level.",
            examples: {
                excretoryBasics:  "A healthy adult has a GFR of 125 mL/min and a plasma glucose concentration of 5 mM. Calculate the filtered load of glucose per minute and per day. Determine whether glycosuria would be expected.",
                nephronFunction:  "Trace the fate of a single urea molecule from the moment it enters the glomerular capillary to the moment it leaves the body in urine. Name every structure it passes through and the process occurring at each stage.",
                osmoregulation:   "Predict the change in urine volume, urine concentration, and ADH levels in a person who drinks 2 litres of pure water rapidly. Apply the osmoregulatory feedback loop in your answer.",
                hormoneControl:   "A patient is given a drug that blocks aldosterone receptors in the distal tubule. Predict the effect on: (a) Na⁺ concentration in urine; (b) K⁺ concentration in urine; (c) blood pressure. Justify each prediction."
            }
        },

        analyze: {
            description: "Break down data or complex scenarios into components, identify patterns and relationships, and draw conclusions from evidence — moving from data to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student derives a conclusion that was not given to them and justifies it from the information provided.",
            verbs: ["Identify", "Deduce", "Determine", "Analyse", "Classify", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given urine data showing glucose +++ and protein negative, identifying the likely diagnosis and the specific nephron failure requires analysis — not recall or calculation.",
            examples: {
                excretoryBasics:  "A urine sample shows: glucose +++, protein negative, ketones ++, blood negative. Analyse what each result indicates about nephron function and identify the most likely underlying condition. Justify each component of your analysis.",
                nephronFunction:  "The following data are collected from a patient: GFR = 40 mL/min (normal 125), creatinine clearance = 38 mL/min, plasma creatinine = 220 μmol/L (normal <110). Analyse what these values indicate about kidney function, and explain why creatinine clearance is used as a GFR estimate.",
                osmoregulation:   "Patient A produces 15 L/day of dilute urine. Their plasma ADH is undetectable. Patient B also produces 15 L/day of dilute urine but has very high plasma ADH. Analyse the difference between the two patients, identifying the site of the defect in each case.",
                hormoneControl:   "Blood tests on a hypertensive patient show: plasma renin activity elevated, aldosterone elevated, Na⁺ elevated, K⁺ low. Analyse the pattern of results, identify the most likely diagnosis, and explain the mechanistic link between each abnormality."
            }
        },

        evaluate: {
            description: "Make supported judgements about the validity, accuracy, or quality of a claim, experimental approach, or physiological conclusion — applying criteria and defending a position with evidence.",
            cognitiveDemand: "Judgement with justification. The student states a verdict, explains the criterion by which a claim fails or succeeds, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Appraise", "Judge", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating the correct information is understand-level. The student must engage with the claim, identify what is wrong and why, and state the correction with a mechanistic justification.",
            examples: {
                excretoryBasics:  "A student states: 'The kidneys produce urea by breaking down excess proteins.' Evaluate this claim — identify the error precisely, name the correct organ and process involved, and explain the kidney's actual role in urea handling.",
                nephronFunction:  "Evaluate the claim: 'The loop of Henle acts as a filter, removing waste from the filtrate as it passes through.' Identify what is wrong with this description, explain what the loop of Henle actually does, and state why the distinction matters for understanding urine concentration.",
                osmoregulation:   "A student claims: 'Drinking excess water causes the kidneys to produce more ADH so that the extra water can be excreted.' Evaluate this claim in full — identify the error in the ADH direction, explain the correct response to excess water intake, and state which hormone changes and in which direction.",
                hormoneControl:   "Evaluate the following treatment decision: 'A patient with bilateral renal artery stenosis and hypertension should be started on an ACE inhibitor because they have an activated RAAS.' Assess whether this is appropriate, identify the specific physiological danger, and propose an alternative approach."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, a labelled diagram, a regulatory model, an annotated pathway, or a clinical management plan — by integrating multiple concepts from the lesson into a coherent, novel product.",
            cognitiveDemand: "Synthesis and original production. The output addresses a specific brief and requires combining multiple lesson concepts. It cannot be produced by reproducing any single memorised piece of content.",
            verbs: ["Design", "Construct", "Propose", "Develop", "Formulate", "Plan", "Produce"],
            whatDistinguishesThisLevel: "Create requires an original, goal-directed output. 'Design an experiment to test whether a new drug affects GFR' requires specifying what to measure, what controls to use, how to analyse results, and what outcome would confirm or refute the hypothesis — assembling a plan that did not exist before.",
            examples: {
                excretoryBasics:  "Design a laboratory investigation to determine the effect of caffeine (a mild diuretic) on urine production, composition, and osmolarity in human volunteers. Specify: (a) what measurements you would take and when; (b) what controls you would include; (c) how you would analyse the data; (d) what ethical considerations apply; (e) what result would confirm a diuretic mechanism vs a direct nephrotoxic effect.",
                nephronFunction:  "Construct a fully annotated diagram of the nephron showing the movement of water, Na⁺, glucose, and urea at each segment. For each molecule at each segment, indicate: direction of movement (in or out of tubule), mechanism (osmosis/active transport/passive diffusion), and the hormonal or structural factor that controls it.",
                osmoregulation:   "Propose a complete osmoregulatory response model for a person who has lost 2 litres of blood in a road accident. Your model must include: (a) the immediate cardiovascular response; (b) the RAAS cascade in full with timing; (c) the ADH response; (d) the net effect on urine output, blood pressure, and plasma osmolarity; (e) why this response is a short-term solution and what longer-term mechanisms must follow.",
                hormoneControl:   "Formulate a pharmacological strategy for treating a patient with heart failure complicated by hyperkalaemia and CKD stage 3. Your strategy must: (a) identify which standard heart failure drugs are contraindicated and why; (b) propose alternatives that achieve the same physiological goals without worsening K⁺ or kidney function; (c) specify what monitoring parameters you would use and why; (d) connect each drug choice to its specific nephron target."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state that the kidney is the primary excretory organ but cannot name its structural regions",
                "Confuses excretion with egestion — does not distinguish metabolic waste from undigested food",
                "Knows the nephron exists but cannot identify its component parts or their sequence",
                "Associates ADH with 'water' but cannot explain the mechanism of aquaporin insertion",
                "Cannot distinguish ultrafiltration from selective reabsorption",
                "Believes urea is made by the kidneys rather than the liver"
            ],
            immediateNextSteps: [
                "Before any nephron physiology: draw the gross kidney anatomy (cortex, medulla, pelvis, ureter) and place one nephron within it — draw the loop of Henle extending into the medulla. Repeat from memory until the spatial arrangement is automatic.",
                "Excretion vs egestion: write a two-column table — left column: 'Excretion (metabolic waste)' with examples CO₂, urea, bile pigments; right column: 'Egestion (undigested food)' with examples fibre, gut bacteria. Never use these words interchangeably again.",
                "Nephron components: label a blank nephron diagram in order — Bowman's capsule → PCT → loop of Henle (descending then ascending) → DCT → collecting duct. Write the primary process occurring at each region. Memorise the sequence before attempting any physiology.",
                "Urea origin: write one sentence and repeat it ten times — 'Urea is produced by the LIVER in the urea cycle. The KIDNEY excretes it. The kidney does NOT make urea.'",
                "ADH foundation: draw a simple diagram — stimulus (high osmolarity) → hypothalamus detects → posterior pituitary releases ADH → collecting duct → water reabsorbed → concentrated urine. Do not add any more detail until this loop is automatic."
            ],
            misconceptionsToAddress: [
                "Excretion = egestion → two-column table (above)",
                "Urea made by kidney → sentence repetition (above)",
                "Nephron anatomy unknown → blank diagram labelling (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can name the regions of the nephron and the process at each but confuses the limbs of the loop of Henle",
                "Understands that ADH increases water reabsorption but cannot explain the aquaporin mechanism",
                "Can list the RAAS steps but confuses where renin, ACE, and aldosterone act",
                "Knows that the ascending limb is impermeable to water but cannot explain why this is essential for urine concentration",
                "Can state that protein in urine = problem but cannot identify which part of the nephron is damaged",
                "Confuses competitive and non-competitive inhibition concepts when applied to transport maximum for glucose"
            ],
            immediateNextSteps: [
                "Loop of Henle limb distinction: use a colour-coding rule — descending limb = BLUE (water leaves, like a waterfall going DOWN); ascending limb = RED (ions pumped OUT without water — energetic, like climbing UP stairs). Draw both limbs in these colours every time.",
                "ADH mechanism depth: draw the intracellular cascade — V2 receptor → Gs protein → adenylate cyclase → cAMP → PKA → aquaporin-2 vesicle phosphorylation → membrane fusion. Draw this once; thereafter, summarise as 'V2 → cAMP → AQP2 insertion'.",
                "RAAS sequence: create a flowchart with six boxes: [Low BP] → [Renin from JG cells] → [Angiotensinogen→AngI] → [ACE in lungs → AngII] → [Aldosterone from adrenal cortex] → [Na⁺ reabsorption/K⁺ secretion in DCT]. Write the anatomical location of each step in a different colour.",
                "Proteinuria localisation: draw the filtration barrier (fenestrated endothelium → basement membrane → podocyte slits). Annotate: 'Large proteins cannot pass here.' Then annotate the PCT: 'Any small proteins filtered are reabsorbed here.' Proteinuria = filtration barrier damaged, not tubular failure.",
                "Countercurrent multiplier: trace the osmolarity values along the loop — 300 mOsm at top descending → 1200 mOsm at bend → 100 mOsm at top ascending. Write these three numbers in sequence until the gradient pattern is automatic."
            ],
            misconceptionsToAddress: [
                "Loop limb confusion → colour-coding rule (above)",
                "RAAS step confusion → six-box flowchart (above)",
                "Proteinuria cause unknown → filtration barrier diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Explains the countercurrent multiplier mechanism with correct osmolarity values at each segment",
                "Traces the complete ADH and RAAS feedback loops with molecular detail",
                "Correctly interprets urine dipstick abnormalities in terms of nephron pathology",
                "Connects loop diuretic mechanism to medullary gradient disruption",
                "Calculates filtered load and predicts glycosuria based on transport maximum",
                "Distinguishes cortical from juxtamedullary nephrons and explains their different roles"
            ],
            immediateNextSteps: [
                "Calculate filtered loads for five different substances (glucose, urea, Na⁺, creatinine, albumin) using GFR × plasma concentration and compare these to urinary excretion rates — derive reabsorption fraction for each and annotate which nephron segment handles each.",
                "Extend the RAAS to include the role of ANP as its antagonist: draw both cascades on the same diagram with opposing arrows — identify where ANP inhibits renin release, aldosterone synthesis, and collecting duct responsiveness to ADH.",
                "Research the vasa recta countercurrent exchange mechanism: explain how the vasa recta maintains the medullary gradient without washing it away — then compare this to the loop of Henle's role in creating the gradient. These are complementary, not identical, processes.",
                "Apply the concept of tubuloglomerular feedback: explain how the macula densa detects NaCl delivery and signals juxtaglomerular cells to adjust renin release — connect this to SGLT2 inhibitor renoprotection.",
                "Investigate clearance calculations: use the formula C = (U × V) / P to calculate creatinine clearance from urine and plasma data, and explain why creatinine (not urea) is the preferred GFR marker."
            ],
            misconceptionsToAddress: [
                "Vasa recta confused with loop of Henle → draw both with different labels and functions side by side",
                "ANP role omitted from hormonal picture → extend RAAS diagram to include ANP"
            ]
        },

        expert: {
            characteristics: [
                "Derives the concept of clearance from first principles and uses it to assess segmental reabsorption of any substance",
                "Interprets complex clinical data (GFR, electrolytes, hormones, urine) to diagnose specific nephron pathology",
                "Designs experiments to measure GFR, tubular maximum, or hormonal response",
                "Connects pharmacological mechanisms to specific nephron transport proteins",
                "Applies RAAS physiology to explain the mechanism and adverse effects of antihypertensive drug classes"
            ],
            immediateNextSteps: [
                "Derive the Henderson-Hasselbalch equation and connect it to renal acid-base regulation — explain how the kidney adjusts HCO₃⁻ reabsorption and H⁺ secretion to correct respiratory acidosis and alkalosis.",
                "Critically evaluate a published clinical trial of an SGLT2 inhibitor in heart failure — identify the primary endpoint, analyse whether the renal mechanism proposed is supported by the data, and assess what alternative mechanisms might contribute.",
                "Investigate the pharmacokinetics of loop diuretics in renal failure — explain why furosemide dose must be increased in CKD, using the concept of tubular secretion impairment and protein binding as the mechanistic basis.",
                "Apply metabolic control analysis thinking to the RAAS: estimate the flux control coefficient of ACE in the cascade — at what point does partial ACE inhibition produce disproportionate effects on angiotensin II, and why does this relate to the non-linear pharmacodynamics of ACE inhibitors?"
            ],
            misconceptionsToAddress: [
                "Linearity assumed in dose-response of ACE inhibitors → explore non-linear pharmacodynamics of cascade blockade",
                "Renal acid-base regulation overlooked → derive HCO₃⁻ handling across the nephron"
            ]
        }
    }
},




digestiveSystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about the digestive system from memory without requiring understanding of why they are true. The student reproduces definitions, organ names, enzyme names, hormone names, and their immediate effects accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. If a student cannot do this, they cannot access any higher level.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response gives correct facts without explanation. 'CCK is secreted by I cells in the duodenum and stimulates gallbladder contraction' is remember. Adding 'because fat in the duodenum triggers I cells, and the resulting bile is needed for fat emulsification' crosses into understand.",
            examples: {
                digestionBasics:       "List the six main organs of the alimentary canal in order. State the difference between mechanical and chemical digestion.",
                enzymaticDigestion:    "Name the zymogen forms of pepsin, trypsin, and chymotrypsin. State where each is activated.",
                absorptionAndTransport:"Name the transporter used to absorb glucose across the apical membrane of enterocytes. State where dietary fats enter the bloodstream.",
                gutRegulation:         "Name the four main gastrointestinal hormones. For each, state the cell type that secretes it and one action it performs."
            }
        },

        understand: {
            description: "Explain the mechanisms behind facts — connect stimulus to response, structure to function, and pathology to physiology. The student must supply the causal link, not just the conclusion.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, explains mechanisms, or connects cause to effect in their own words.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism. 'Fats are absorbed via the lymphatic system' is remember. 'Fats are absorbed via the lymphatic system because they are too large and insoluble to enter blood capillaries directly — they must be packaged as chylomicrons which can only enter the more permeable lacteals' is understand.",
            examples: {
                digestionBasics:       "Explain why mechanical digestion must precede chemical digestion, using surface area as the central concept in your answer.",
                enzymaticDigestion:    "Explain why pancreatic proteases are secreted as zymogens. Your answer must identify the specific consequence that would occur if trypsin were secreted in its active form.",
                absorptionAndTransport:"Explain why glucose and fructose enter the bloodstream via different transporters despite both being monosaccharides, and connect this to their different concentrations inside the enterocyte.",
                gutRegulation:         "Explain why secretin is released specifically in response to acid rather than to food in general. Your answer must connect the stimulus to the physiological need being met."
            }
        },

        apply: {
            description: "Use known facts, mechanisms, and relationships to make specific predictions or solve problems in new contexts not previously encountered in exactly this form.",
            cognitiveDemand: "Procedure execution in novel situations. The student selects the correct concept, applies it, and produces a specific prediction, calculation, or diagram.",
            verbs: ["Predict", "Determine", "Calculate", "Apply", "Sketch", "Trace", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Trace the digestion and absorption of a triglyceride from the mouth to the lymphatic system' requires applying the correct sequence of steps — lingual lipase, gastric lipase, bile emulsification, pancreatic lipase, micelle formation, enterocyte uptake, chylomicron formation, lacteal entry — in a new but solvable context.",
            examples: {
                digestionBasics:       "Predict the effect on overall protein digestion if the stomach were surgically removed. State which steps would be affected and which would compensate.",
                enzymaticDigestion:    "Trace the complete digestion of a starch molecule from the moment it enters the mouth to the moment its products are absorbed. Name every enzyme, state its source, and identify where each hydrolysis step occurs.",
                absorptionAndTransport:"Apply your knowledge of lipid absorption to predict what would happen to chylomicron formation if a patient had a genetic defect in apolipoprotein B48 production.",
                gutRegulation:         "Predict the sequence of hormonal responses that occurs when a high-fat meal enters the duodenum. For each hormone named, state its source, stimulus, target organ, and effect."
            }
        },

        analyze: {
            description: "Break down data, experimental results, or complex scenarios to identify patterns, draw conclusions, and make inferences not stated in the question.",
            cognitiveDemand: "Decomposition and evidence-based inference. The student works from data or a scenario to reach an unstated conclusion, and can justify it.",
            verbs: ["Identify", "Deduce", "Distinguish", "Analyse", "Interpret", "Compare", "Infer"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'A patient has elevated faecal fat, normal gastric pH, and low plasma vitamin D — identify the most likely site of pathology and the mechanism' requires integrating three data points to deduce small intestinal lipase or absorption failure — not just recalling a definition.",
            examples: {
                digestionBasics:       "A patient has absent bowel sounds, severe abdominal distension, and failure to pass flatus. Analyse which component of gut regulation has failed and explain the mechanism using your knowledge of peristalsis and the enteric nervous system.",
                enzymaticDigestion:    "Enzyme activity data from duodenal aspirates shows normal amylase and lipase but absent trypsin and chymotrypsin. Analyse what this pattern suggests about the site and mechanism of the defect — is it in the pancreas, the duct, or the duodenum?",
                absorptionAndTransport:"A patient absorbs glucose normally but cannot absorb galactose. Given that both are absorbed via SGLT1, analyse what this paradox reveals about the specificity of the transporter and what alternative explanation should be investigated.",
                gutRegulation:         "An experiment measures gastric acid secretion in subjects given: (a) intravenous amino acids bypassing the gut; (b) oral amino acids. Acid secretion is higher in condition (b). Analyse what this difference reveals about the relative contributions of hormonal (gastrin) and neural (vagal) pathways to the gastric phase."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental interpretation, or clinical reasoning. The student must identify exactly what is wrong, explain the criterion by which it fails, and state what would be correct.",
            cognitiveDemand: "Judgement with justification. Identifying an error alone is not evaluate-level — the student must explain why it is wrong against a stated criterion.",
            verbs: ["Evaluate", "Critique", "Assess", "Justify", "Appraise", "Challenge", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims bile digests dietary fat — evaluate this.' The student must identify the error (bile does not break chemical bonds), explain the correct function (emulsification — physical dispersion to increase lipase access), identify who performs the chemical digestion (pancreatic lipase), and explain why the distinction matters clinically.",
            examples: {
                digestionBasics:       "A student states: 'The stomach is the primary site of nutrient absorption because it is the largest digestive organ.' Evaluate this claim in full — identify every error, correct each with evidence, and state what property of the small intestine makes it, rather than the stomach, the primary absorptive organ.",
                enzymaticDigestion:    "Evaluate the following claim: 'Cooking food is unnecessary for digestion because enzymes in the small intestine can digest any protein regardless of its conformation.' Identify the role of denaturation in digestion, assess whether any step of protein digestion depends on denatured substrate, and state whether the claim is always, sometimes, or never true.",
                absorptionAndTransport:"A clinician states: 'We can give fat-soluble vitamins orally to a patient with complete bile duct obstruction — they will absorb them just like water-soluble vitamins.' Evaluate this clinical reasoning in full, identifying every step of fat-soluble vitamin absorption that requires bile and concluding with the correct clinical recommendation.",
                gutRegulation:         "Evaluate the following experimental conclusion: 'Because vagotomy reduces gastric acid by 60%, the vagus nerve is responsible for all gastric acid secretion.' Identify the logical error in this conclusion, explain the other pathways contributing to acid secretion, and state what the 60% figure actually tells us."
            }
        },

        create: {
            description: "Generate an original, coherent output — an experimental design, a regulatory diagram, a patient management plan, or a derived explanation — that integrates multiple concepts from the lesson into a new, goal-directed product.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before by combining multiple lesson concepts. Strong create-level responses are internally consistent, biologically plausible, and address the brief completely.",
            verbs: ["Design", "Construct", "Propose", "Develop", "Formulate", "Plan", "Create"],
            whatDistinguishesThisLevel: "Create requires original integration. 'Design an experiment to test whether secretin or CCK is the primary regulator of pancreatic enzyme secretion' requires the student to specify controls, isolate variables, predict outcomes under each hypothesis, and define how they would distinguish between two simultaneously acting hormones — this cannot be answered by recalling a single fact.",
            examples: {
                digestionBasics:       "Design a complete experiment to test whether salivary amylase activity is pH-dependent. Specify: substrate, enzyme source, range of pH buffers, method of measuring product formation, controls, expected results if the hypothesis is confirmed, and expected results if it is not.",
                enzymaticDigestion:    "Construct a fully annotated flow diagram showing the complete activation cascade of pancreatic zymogens in the duodenum, starting from enteropeptidase. For each step, identify the enzyme doing the activating, the zymogen being activated, the site of cleavage, and what would happen if that step were blocked.",
                absorptionAndTransport:"Propose a mechanism-based explanation for why short-chain fatty acids (produced by colonic fermentation) can be absorbed by colonocytes without micelles or chylomicrons, whereas long-chain fatty acids require both. Your answer must reference chain length, solubility, membrane crossing, and lymphatic vs portal routing.",
                gutRegulation:         "Construct an annotated diagram of the complete hormonal and neural response to a mixed meal (fat, protein, and carbohydrate), beginning with the cephalic phase and ending with the post-absorptive state. For each regulatory event shown, label: the trigger, the hormone or neurotransmitter involved, the target organ, the effect, and whether it is stimulatory or inhibitory."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the main organs of the alimentary canal in order but cannot state the function of each",
                "Confuses mechanical and chemical digestion — uses the terms interchangeably",
                "Cannot name the digestive enzymes associated with each organ",
                "Believes the stomach is the primary absorption site",
                "Confuses bile with a digestive enzyme — believes bile 'digests' fat",
                "Cannot distinguish between a zymogen and an active enzyme"
            ],
            immediateNextSteps: [
                "Draw and label the alimentary canal as a single annotated diagram — mouth to anus. Under each organ, write one word: its primary function (e.g. 'stomach = breakdown'). Do not add detail until this map is automatic.",
                "Write the mechanical vs chemical distinction as two explicit definitions: mechanical = physical breakdown (no bond cleavage); chemical = enzymatic hydrolysis (covalent bond cleavage). Create one example of each for every organ before moving on.",
                "Build an enzyme table with four columns: enzyme name, organ that secretes it, substrate, product. Populate it for salivary amylase, pepsin, pancreatic lipase, and lactase only — four rows maximum at first.",
                "Fix the bile misconception immediately: write on paper 'BILE EMULSIFIES — it does NOT digest.' Emulsification = physical dispersion; digestion = chemical hydrolysis by lipase. Draw the difference.",
                "For zymogens: use the analogy of a safety pin — the zymogen is a 'locked' enzyme; activation clips the pin open. Draw pepsinogen → pepsin with a scissors symbol at the cleavage site."
            ],
            misconceptionsToAddress: [
                "Stomach as primary absorber → organ function table (above)",
                "Bile digests fat → bile/lipase distinction drawing (above)",
                "Mechanical = chemical → two-definition card (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can list digestive enzymes and their substrates but makes errors on products",
                "Understands that bile emulsifies fat but cannot explain the molecular mechanism",
                "Knows the names of gastrin, secretin, and CCK but confuses their stimuli and targets",
                "Can trace carbohydrate digestion correctly but struggles with lipid absorption pathway",
                "Understands villi increase surface area but cannot explain microvilli as a further level",
                "Cannot explain why fats enter the lymphatic system rather than the portal vein"
            ],
            immediateNextSteps: [
                "For bile: draw an amphipathic bile salt molecule with its hydrophilic and hydrophobic ends labelled. Draw it surrounding a fat droplet in water — hydrophobic tails inward, hydrophilic heads outward. This is the structural basis of emulsification. Never describe emulsification without drawing this diagram.",
                "For hormones: make a three-column table — stimulus | hormone | effect. Fill in one row per hormone: gastrin (protein/distension → gastrin → HCl + pepsinogen), secretin (acid → secretin → bicarbonate), CCK (fat/protein → CCK → bile + enzymes). Memorise the table as a sequence, not as isolated facts.",
                "For lipid absorption: draw the complete fat absorption pathway as a flow diagram — fat → emulsification by bile → micelle formation → diffusion into enterocyte → chylomicron assembly → lacteal → lymph → thoracic duct → blood. Draw it five times until it is automatic.",
                "For surface area: draw three concentric scales — circular folds (visible to naked eye), villi (1 mm, magnifying glass), microvilli (0.1 mm, electron microscope). Label the fold increase at each level (×3, ×10, ×20). Connect to why removal of any one level (as in coeliac disease) substantially impairs absorption.",
                "For fats vs portal route: write the rule explicitly — 'Fat → lymphatics because chylomicrons are too large for capillaries. Sugar and amino acids → portal vein because they are small and water-soluble.' Write this before every lipid absorption question until it is automatic."
            ],
            misconceptionsToAddress: [
                "Bile mechanism confusion → amphipathic diagram (above)",
                "Hormone stimulus/target confusion → three-column hormone table (above)",
                "Portal vs lymphatic route confusion → rule card (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly traces the digestion and absorption of all three macronutrients with correct enzyme names and transporters",
                "Explains the zymogen activation cascade including the role of enteropeptidase",
                "Can connect each gastrointestinal hormone to its stimulus, target, and effect correctly",
                "Explains the three levels of small intestinal surface area amplification and their contributions",
                "Can explain the brush-border enzyme concept and why digestion and absorption are spatially coupled",
                "Makes occasional errors when explaining the enteric nervous system's two plexuses"
            ],
            immediateNextSteps: [
                "Master the two plexuses of the enteric nervous system: Meissner's (submucosal) = secretion and blood flow; Auerbach's (myenteric) = motility. Build one clinical example for each: Auerbach's plexus destruction by H. pylori → gastroparesis; Meissner's plexus dysregulation → secretory diarrhoea.",
                "Extend hormone knowledge to GIP and motilin: GIP (K cells, glucose/fat → insulin release + acid inhibition); motilin (M cells, fasting → migrating motor complex). These are frequently tested at higher levels and are the basis of GLP-1 pharmacology.",
                "Practise connecting pathology to mechanism: for each clinical condition (coeliac, pancreatitis, gallstones, PPI overuse), write a one-paragraph mechanistic explanation connecting the structural or biochemical defect to each symptom. This bridges proficient to analyze level.",
                "Learn the enterohepatic circulation of bile salts: bile acids synthesised in liver → secreted in bile → emulsify fat in duodenum → reabsorbed in ileum → portal vein → liver recycling. Calculate that each bile salt molecule makes approximately 20 cycles. Connect to why ileal disease (Crohn's) causes fat malabsorption.",
                "Practise designing simple digestive physiology experiments: how would you measure gastric acid secretion in response to a protein meal? How would you determine the Km of lactase for lactose in a brush-border preparation? This prepares for the create assessment level."
            ],
            misconceptionsToAddress: [
                "Auerbach's vs Meissner's plexus function confusion → plexus clinical example card (above)",
                "Incomplete hormone list → GIP/motilin addition (above)"
            ]
        },

        expert: {
            characteristics: [
                "Can construct complete regulatory diagrams of the cephalic, gastric, and intestinal phases with all hormones and neural pathways",
                "Explains the molecular basis of enteropeptidase activation of trypsinogen and the autocatalytic cascade",
                "Connects gut hormone pharmacology (GLP-1 agonists, PPIs) to underlying digestive physiology",
                "Analyses clinical cases involving multiple concurrent digestive defects (e.g. Crohn's disease affecting ileum → bile salt malabsorption + B₁₂ deficiency + fat malabsorption)",
                "Can evaluate experimental data on intestinal transport kinetics using Michaelis-Menten concepts applied to transporter saturation"
            ],
            immediateNextSteps: [
                "Apply Michaelis-Menten kinetics to intestinal transporters: SGLT1 has a Km for glucose of approximately 0.5 mM. At portal glucose concentrations of 5 mM, what fraction of Vmax is SGLT1 operating at? What happens to transport efficiency during hyperglycaemia? This bridges enzyme kinetics and digestive physiology.",
                "Research the gut-brain axis: GLP-1, CCK, and ghrelin all act on vagal afferents to modulate appetite via the hypothalamus. Map out this circuit and connect it to the pharmacology of GLP-1 receptor agonists and the mechanisms of bariatric surgery.",
                "Critically evaluate a paper on microbiome and metabolic disease: identify how gut microbiome dysbiosis is measured (16S rRNA sequencing), assess the strength of causal evidence vs association, and identify a confounding variable the study may not have controlled for.",
                "Integrate digestive physiology with pharmacokinetics: for an oral drug that is a substrate of cytochrome P450 3A4, trace its journey from ingestion to systemic circulation — first-pass metabolism in gut epithelium and liver, effect of gastric pH on absorption, and transporter-mediated efflux. Connect each step to a specific anatomical structure."
            ],
            misconceptionsToAddress: [
                "Gut hormones as isolated entities → gut-brain axis circuit diagram (above)",
                "Michaelis-Menten as only applicable to enzymes → transporter kinetics application (above)"
            ]
        }
    }
},

respiratorySystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about respiratory anatomy, physiology, and volumes from memory without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required.",
            verbs: ["State", "List", "Name", "Define", "Label", "Identify", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no mechanism. 'Inspiration occurs when intrapulmonary pressure falls below atmospheric' is remember-level. Adding 'because diaphragm contraction increases thoracic volume, which by Boyle's law decreases pressure' crosses into understand.",
            examples: {
                ventilation:    "State the four lung volumes that make up total lung capacity. List the muscles active during resting inspiration.",
                gasExchange:    "Define partial pressure. List the four variables in Fick's law of diffusion.",
                gasTransport:   "State the three forms in which CO₂ is transported in blood and the approximate percentage of each.",
                control:        "Name the two locations of peripheral chemoreceptors. State the primary stimulus for central chemoreceptors."
            }
        },

        understand: {
            description: "Explain mechanisms — connect structure to function, stimulus to response, and disease to physiological deficit.",
            cognitiveDemand: "Translation and interpretation: the student explains WHY, not just WHAT.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism. 'Resting expiration is passive' is remember. 'Resting expiration is passive because the elastic recoil of lung tissue and the chest wall provides the driving pressure without requiring muscular contraction' is understand — the student supplies the causal mechanism.",
            examples: {
                ventilation:    "Explain how Boyle's law underlies the pressure changes that drive inspiration. Your answer must specify which muscles contract, what happens to thoracic volume, and how this changes intrapulmonary pressure relative to atmospheric.",
                gasExchange:    "Explain why pulmonary fibrosis impairs gas exchange during exercise more than at rest, using Fick's law to identify the affected variable and the transit-time concept to explain the exercise dependence.",
                gasTransport:   "Explain the Bohr effect — identify the conditions that cause it, the direction of dissociation curve shift, and why this is beneficial at exercising tissues.",
                control:        "Explain why CO₂ is the primary driver of ventilation at rest rather than O₂, with reference to the sensitivity of central vs peripheral chemoreceptors under normal physiological conditions."
            }
        },

        apply: {
            description: "Use equations, rules, and principles to solve novel problems or make specific predictions in new contexts.",
            cognitiveDemand: "Procedure execution in a novel situation — correct tool selection and correct execution.",
            verbs: ["Calculate", "Predict", "Determine", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate alveolar ventilation given TV = 600 mL, dead space = 150 mL, RR = 14' requires correct substitution and arithmetic. Explaining alveolar ventilation conceptually is understand-level.",
            examples: {
                ventilation:    "Calculate alveolar ventilation (V_A) for a patient with TV = 550 mL, anatomical dead space = 150 mL, and respiratory rate = 16 breaths/min. Then calculate what happens to V_A if the patient breathes at 8 breaths/min with TV = 1000 mL.",
                gasExchange:    "Using Fick's law, predict the effect on gas exchange rate of: (a) doubling membrane thickness; (b) halving surface area; (c) increasing the partial pressure gradient by supplemental oxygen.",
                gasTransport:   "A patient's haemoglobin is 15 g/dL, SaO₂ is 95%, and PaO₂ is 85 mmHg. Calculate arterial O₂ content (CaO₂) using CaO₂ = (Hb × 1.34 × SaO₂) + (0.003 × PaO₂). Show all working.",
                control:        "Predict the ventilatory response to each of the following: (a) ascent to high altitude (low PO₂, low PCO₂); (b) breath-holding (rising CO₂, falling O₂); (c) administration of 100% O₂ to a COPD patient with chronic hypercapnia."
            }
        },

        analyze: {
            description: "Interpret data, ABG results, spirometry patterns, or clinical scenarios to reach a conclusion not explicitly given.",
            cognitiveDemand: "Evidence to conclusion — the student derives an interpretation rather than applying a formula.",
            verbs: ["Interpret", "Identify", "Deduce", "Classify", "Analyse", "Distinguish", "Determine"],
            whatDistinguishesThisLevel: "Analyze requires deriving a conclusion from data. 'Given FEV₁ = 58% predicted, FVC = 90% predicted, FEV₁/FVC = 0.54 — identify the pattern and likely diagnosis' requires the student to classify the spirometric pattern and reason to a diagnosis. Defining FEV₁ is remember; explaining what a low FEV₁/FVC means is understand.",
            examples: {
                ventilation:    "Spirometry results: FVC = 3.1 L (78% predicted), FEV₁ = 1.7 L (60% predicted), FEV₁/FVC = 0.55. Interpret the pattern, classify as obstructive or restrictive, and identify which lung volume is most reduced and why.",
                gasExchange:    "ABG: pH 7.38, PaO₂ 62 mmHg, PaCO₂ 40 mmHg, SaO₂ 91%. PAO₂ calculated as 100 mmHg. Calculate the A-a gradient, classify as normal or elevated, and deduce the most likely cause of hypoxia.",
                gasTransport:   "Two haemoglobin dissociation curves are shown. Curve A: P50 = 26 mmHg. Curve B: P50 = 32 mmHg. Analyse which curve represents blood from exercising muscle, identify all four physiological variables responsible for this shift, and explain why this shift is advantageous.",
                control:        "A patient with chronic COPD has PaO₂ 52 mmHg, PaCO₂ 60 mmHg, and pH 7.38 at baseline. After receiving high-flow O₂, PaCO₂ rises to 80 mmHg and GCS falls. Analyse the mechanism of CO₂ rise, identifying all three contributing physiological processes."
            }
        },

        evaluate: {
            description: "Judge the validity of a claim, the adequacy of an experimental design, or the appropriateness of a clinical decision using defined physiological criteria.",
            cognitiveDemand: "Judgement with justification — identify the flaw or merit, explain the criterion, and state the correct position.",
            verbs: ["Evaluate", "Critique", "Assess", "Appraise", "Judge", "Defend", "Justify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims O₂ is the primary stimulus for ventilation — evaluate this.' The student must identify the claim as incorrect, state that CO₂/pH is the primary stimulus via central chemoreceptors, explain why O₂ only becomes the primary driver in specific pathological conditions (chronic hypercapnia), and state when the student's claim would be correct.",
            examples: {
                ventilation:    "A student states: 'Breathing faster always increases alveolar ventilation.' Evaluate this claim fully — identify the condition under which it is false, calculate a specific counterexample using the alveolar ventilation equation, and state what the correct relationship is.",
                gasExchange:    "Evaluate the claim: 'Emphysema and pulmonary fibrosis both impair gas exchange and therefore produce the same pattern on spirometry.' Identify what is correct, what is incorrect, specify the spirometric pattern produced by each disease, and explain the physiological reason they differ.",
                gasTransport:   "A nurse states that haemoglobin transports CO₂ by the same mechanism as O₂ — binding to the iron in the haem group. Evaluate this claim fully. Identify the error, describe the correct mechanism of CO₂ binding to haemoglobin, and explain why the correct binding site matters clinically.",
                control:        "Evaluate whether pulse oximetry is an adequate monitor for ventilation in a postoperative patient receiving supplemental oxygen. Identify the specific physiological scenario where SaO₂ remains normal despite dangerous hypoventilation, and state what additional monitoring is required."
            }
        },

        create: {
            description: "Produce an original output — experimental design, annotated diagram, patient management plan, or derived calculation — by integrating multiple concepts from the topic.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before and requires combining multiple concepts coherently.",
            verbs: ["Design", "Construct", "Propose", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires a novel integrated output. 'Design an experiment to determine whether a drug impairs hypoxic ventilatory response in healthy volunteers' requires specifying subject selection, baseline measurement, drug administration, hypoxic exposure protocol, measurements, controls, safety monitoring, and statistical analysis — no part of this can be answered by reproducing a memorised procedure.",
            examples: {
                ventilation:    "Design a spirometry study to distinguish obstructive from restrictive lung disease in a cohort of 50 industrial workers. Specify: (a) which spirometric indices you would measure and why; (b) the criteria you would use to classify each pattern; (c) what additional tests would be needed to fully characterise restriction; (d) how you would control for age, sex, and height in interpreting the results.",
                gasExchange:    "Construct a fully annotated diagram of the alveolar-capillary unit showing: gas partial pressures on both sides of the membrane; the three components of the membrane and their typical thickness; the direction of O₂ and CO₂ diffusion; the effect of exercise on capillary transit time; and how fibrosis would alter each variable in Fick's law.",
                gasTransport:   "Derive the oxygen content equation CaO₂ = (Hb × 1.34 × SaO₂) + (0.003 × PaO₂) from first principles. Explain the origin of the constant 1.34, the meaning of each term, and calculate the CaO₂ for: (a) a healthy subject; (b) a severely anaemic patient (Hb 5 g/dL, SaO₂ 98%, PaO₂ 95 mmHg); (c) a CO-poisoned patient (Hb 15 g/dL, functional SaO₂ 60%, PaO₂ 110 mmHg on O₂). Explain what each result means clinically.",
                control:        "Propose a clinical protocol for oxygen administration in acute COPD exacerbation. Your protocol must specify: (a) target SaO₂ range and physiological rationale; (b) initial oxygen delivery device and flow rate; (c) the ABG parameters that would trigger escalation to NIV; (d) the physiological mechanism by which NIV supports ventilation when chemoreceptor drive is insufficient; (e) one monitoring parameter beyond pulse oximetry and why it is required."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the main structures of the respiratory tract in sequence",
                "Understands that breathing brings oxygen in and removes carbon dioxide",
                "Cannot explain the pressure changes driving inspiration and expiration",
                "Confuses ventilation (breathing) with respiration (cellular gas exchange)",
                "Cannot interpret spirometry values — treats all reduced lung function as the same",
                "Believes oxygen is the primary stimulus for breathing"
            ],
            immediateNextSteps: [
                "Start with one clear diagram of the thorax during inspiration and expiration — draw both states side by side, labelling diaphragm position, thoracic volume, and the direction of pressure change. Add Boyle's law as an annotation. Do not proceed to gas exchange until this is automatic.",
                "Clarify the vocabulary hierarchy immediately: ventilation = moving air; gas exchange = diffusion across alveolar membrane; respiration = cellular use of O₂. Write one sentence example of each and never use them interchangeably.",
                "Address the O₂/CO₂ control misconception directly with one sentence: 'The brain monitors CO₂ (not O₂) to control breathing — CO₂ rising is the alarm signal.' Pair this with one clinical example (breath-holding — CO₂ drives the urge to breathe, not O₂ depletion).",
                "Introduce lung volumes using a simple block diagram of TV, IRV, ERV, RV stacked vertically. Practise adding them in combinations to get VC and TLC before touching spirometry patterns.",
                "For the V vs R confusion: use the 'ventilation is like traffic; respiration is like fuel burning' — the road (ventilation) moves cars (gas) to the engine (cell), where fuel is burned (respiration). They are different processes on different scales."
            ],
            misconceptionsToAddress: [
                "Ventilation = respiration → vocabulary clarification (above)",
                "O₂ drives breathing → CO₂/pH correction (above)",
                "Expiration requires muscle contraction → elastic recoil diagram (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can explain inspiration and expiration using pressure gradients and Boyle's law",
                "Understands that gas exchange occurs by diffusion but cannot apply Fick's law quantitatively",
                "Can interpret FEV₁/FVC ratio as obstructive or restrictive but confuses which is which under pressure",
                "Understands that haemoglobin carries O₂ but cannot explain the sigmoidal dissociation curve shape",
                "Can name the Bohr effect but cannot explain the direction of shift or its functional significance",
                "Cannot calculate alveolar ventilation or O₂ content"
            ],
            immediateNextSteps: [
                "For Fick's law: build a table with four rows (A, D, ΔP, T) and two columns (increased → effect on rate; decreased → effect on rate). Fill every cell. Then apply it to three diseases: fibrosis (T increases), emphysema (A decreases), PE (ΔP unaffected but V/Q mismatched). Never discuss gas exchange disease without first mapping it to Fick's law.",
                "For spirometry pattern confusion: create a decision rule — 'FEV₁/FVC below 0.7 = obstruction (airways narrowed). FEV₁/FVC above 0.7 with reduced VC = restriction (lung shrunk).' Write this on every spirometry question before interpreting the numbers.",
                "For the dissociation curve shape: use the cooperativity analogy from haemoglobin (not enzyme kinetics) — first O₂ binds, changes shape, next binds more easily. Draw the sigmoidal curve and mark P50 (~26 mmHg). Mark the loading zone (lungs, flat upper portion) and unloading zone (tissues, steep middle portion). Explain why the plateau at high PO₂ means small changes in lung PO₂ barely affect loading; the steep part at tissue PO₂ means small changes in tissue conditions greatly affect unloading.",
                "For Bohr effect direction: use the tissue mnemonic — 'tissues produce CO₂ and acid — the curve shifts RIGHT so haemoglobin releases O₂ there. Lungs remove CO₂ — curve shifts LEFT so haemoglobin loads O₂ there.' Never say 'Bohr effect' without also stating the direction and functional consequence.",
                "For alveolar ventilation calculation: practise the equation (TV − VD) × RR = V_A with five different TV/RR combinations to illustrate that rapid shallow breathing is less efficient than slow deep breathing at the same minute ventilation."
            ],
            misconceptionsToAddress: [
                "Spirometry pattern confusion → FEV₁/FVC decision rule (above)",
                "Bohr effect direction error → tissue mnemonic (above)",
                "Dissociation curve shape not understood → cooperativity annotation (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Applies Fick's law and the alveolar gas equation accurately",
                "Interprets ABG results including A-a gradient calculation",
                "Correctly explains and draws Bohr effect shifts with quantitative understanding",
                "Can calculate CaO₂ and interpret clinical implications of anaemia vs hypoxaemia",
                "Explains V/Q mismatch including dead space and shunt as opposite extremes",
                "Connects respiratory control to COPD pathophysiology and oxygen therapy rationale"
            ],
            immediateNextSteps: [
                "Extend V/Q analysis: research the West zones of the lung (zones 1–3) and explain how gravity creates a V/Q gradient from apex to base. Connect this to why pulmonary emboli preferentially affect the lower lobes and why ARDS causes heterogeneous V/Q mismatch.",
                "Derive the alveolar gas equation (PAO₂ = PiO₂ − PaCO₂/RQ) from first principles: identify what RQ represents, why it is typically 0.8, and calculate PAO₂ for a patient breathing 40% O₂ at sea level with PaCO₂ 50 mmHg.",
                "Connect CO₂ transport to acid-base physiology: work through a full ABG interpretation sequence (pH → primary disorder → compensation → anion gap → delta-delta). Apply this to three cases: acute asthma (respiratory alkalosis), COPD exacerbation (respiratory acidosis with metabolic compensation), and diabetic ketoacidosis (metabolic acidosis with respiratory compensation).",
                "Calculate the oxygen delivery equation (DO₂ = CaO₂ × CO × 10) for three clinical scenarios: anaemia, hypoxaemia, and low cardiac output. Identify which parameter has the greatest impact on O₂ delivery and why haemoglobin is a more efficient O₂ carrier than increasing FiO₂.",
                "Explore the Haldane effect mechanistically: explain why deoxygenated haemoglobin is a better buffer and CO₂ carrier, and how this creates a virtuous cycle at the tissues (unloading O₂ promotes CO₂ loading) and at the lungs (loading O₂ promotes CO₂ unloading)."
            ],
            misconceptionsToAddress: [
                "O₂ content vs saturation confusion → CaO₂ equation practice (above)",
                "Dead space vs shunt confusion → V/Q continuum diagram from 0 to ∞"
            ]
        },

        expert: {
            characteristics: [
                "Derives respiratory equations from first principles including the alveolar gas equation",
                "Designs and critically evaluates respiratory physiology experiments",
                "Applies quantitative V/Q analysis to interpret complex clinical ABG patterns",
                "Connects respiratory physiology to pharmacokinetics (anaesthetic gas uptake, O₂ toxicity)",
                "Analyses population-level data on lung function decline and its determinants"
            ],
            immediateNextSteps: [
                "Critically evaluate the limitations of the Fick model for gas exchange: identify conditions where equilibration is incomplete (diffusion limitation vs perfusion limitation), explain why CO is diffusion-limited while O₂ is perfusion-limited under normal conditions but becomes diffusion-limited in disease.",
                "Apply respiratory physiology to anaesthetic gas uptake: explain why nitrous oxide (blood:gas partition coefficient 0.47) achieves equilibration faster than halothane (2.4), using the concept of partial pressure gradients and the blood-gas partition coefficient.",
                "Model respiratory control mathematically: sketch the ventilatory response curve to CO₂ (VE vs PaCO₂) and to O₂ (the hypoxic ventilatory response), identify how each is altered by opioids, sedatives, and acclimatisation to altitude.",
                "Investigate metabolic control of breathing: research the contribution of non-chemical inputs (cortical drive, proprioception from exercising muscles, temperature) to the ventilatory response to exercise, and explain why PaCO₂ remains remarkably constant during moderate exercise despite enormous increases in CO₂ production."
            ],
            misconceptionsToAddress: [
                "Oversimplified two-variable CO₂ control model → multivariate ventilatory response curves",
                "Diffusion vs perfusion limitation distinction → quantitative transit time analysis"
            ]
        }
    }
},

circulatorySystem: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about the circulatory system from memory without requiring understanding of why they are true. The student reproduces definitions, names, sequences, and values accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot perform at this level, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Cardiac output equals heart rate multiplied by stroke volume' is remember-level. Adding 'which means that...' crosses into understand.",
            examples: {
                heartStructure:  "Name the four chambers of the heart and state the direction of blood flow through each. List the four valves and state where each is located.",
                bloodFlow:       "State the correct sequence of vessel types from aorta to vena cava. Name the two circulation loops and identify which side of the heart drives each.",
                bloodPressure:   "Write the equation for cardiac output. State the normal resting values for systolic pressure, diastolic pressure, heart rate, and stroke volume.",
                bloodComposition:"List the four components of blood and state the approximate percentage of blood volume occupied by erythrocytes. Define haematocrit."
            }
        },

        understand: {
            description: "Explain the meaning behind facts — connect structure to function, cause to effect, and interpret what a result means in physiological terms. The student demonstrates they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct explanation that the student could not have produced by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or a reason. 'The left ventricle wall is thicker than the right' is remember. 'The left ventricle wall is thicker because it must pump against the high resistance of the systemic circulation, generating pressures of ~120 mmHg compared to the pulmonary circulation's ~25 mmHg' is understand.",
            examples: {
                heartStructure:  "Explain why the left ventricle has a much thicker muscular wall than the right ventricle, even though both chambers pump identical volumes of blood with each beat.",
                bloodFlow:       "Explain why capillaries are the only site of effective gas and nutrient exchange, with specific reference to their wall structure and the physical factors that govern diffusion rate.",
                bloodPressure:   "Explain the baroreceptor reflex — from the initial stimulus (raised blood pressure) through every step of the neural pathway to the effector response that restores normal pressure.",
                bloodComposition:"Explain why mature erythrocytes lack a nucleus and mitochondria, and describe how these absences are functionally advantageous for oxygen transport."
            }
        },

        apply: {
            description: "Use known equations, rules, and concepts to solve a problem or make a specific prediction in a new context. The student selects the right tool and uses it correctly.",
            cognitiveDemand: "Procedure execution in a novel situation. The student must decide which concept or equation applies, set it up correctly, and carry it through to a specific answer.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Calculate cardiac output when HR = 85 bpm and SV = 75 mL' requires correct substitution into CO = HR × SV. 'Explain what cardiac output is' is understand, not apply.",
            examples: {
                heartStructure:  "A patient's resting heart rate is 55 bpm and stroke volume is 80 mL. Calculate resting cardiac output. During exercise, HR rises to 170 bpm and SV rises to 110 mL. Calculate exercise cardiac output and determine the fold-increase.",
                bloodFlow:       "Using Poiseuille's Law (flow ∝ r⁴), predict the fold-change in blood flow if an arteriole's radius is reduced by 50% due to vasoconstriction. Show your calculation.",
                bloodPressure:   "A patient has systolic pressure 150 mmHg and diastolic pressure 95 mmHg. Calculate MAP using MAP ≈ DBP + ⅓(SBP − DBP). State whether this patient is hypertensive.",
                bloodComposition:"The oxygen-dissociation curve shows haemoglobin is 98% saturated at arterial pO₂ (100 mmHg) and 75% saturated at venous pO₂ (40 mmHg). Calculate the percentage of loaded oxygen that is unloaded to tissues per circulation."
            }
        },

        analyze: {
            description: "Break down data or a complex scenario into components, identify patterns and relationships, and draw conclusions from evidence. The student moves from data to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or a scenario and must determine what it means. A key marker: the student reaches a conclusion that was not given to them and justifies it from the evidence.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given these pressure and flow measurements, identify where in the circulation the recording was taken and justify your answer from two features of the data' is analyze. Being told where and then asked to describe it is remember/understand.",
            examples: {
                heartStructure:  "An ECG recording shows regular P waves at 80 bpm, but QRS complexes at 35 bpm with no fixed relationship to P waves. Analyse what this pattern indicates about the cardiac conduction system, and explain the expected haemodynamic consequences.",
                bloodFlow:       "Blood pressure measurements are taken at three points in the systemic circulation: aorta (120/80), femoral artery (115/78), and femoral vein (12/8). Analyse these data to identify the point of greatest pressure drop and explain what anatomical structure is responsible.",
                bloodPressure:   "A patient's CO is measured as 3.2 L/min (normal 5 L/min) and MAP is 95 mmHg (normal 93 mmHg). Calculate TPR. Analyse what these data reveal about the patient's cardiovascular state and propose two possible diagnoses.",
                bloodComposition:"A blood film shows: haematocrit 30%, microcytic hypochromic erythrocytes, low serum ferritin. Analyse these findings systematically, identify the type of anaemia, explain the mechanism, and predict the effect on the oxygen-dissociation curve."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion. The student must apply criteria, weigh evidence, and defend a position.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or limitation, explains the criterion by which it fails, and states what would be correct. Simply identifying an error without explaining why it is wrong is not evaluate-level.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims pulmonary arteries carry oxygenated blood — evaluate this.' The student must state the claim is incorrect, explain that arteries are defined by direction of flow (away from heart) not oxygen content, and state the correct fact — not merely define arteries.",
            examples: {
                heartStructure:  "A student states: 'The right ventricle must be weaker than the left because it has thinner walls.' Evaluate this claim — identify the assumption being made, explain why wall thickness reflects pressure requirements rather than pumping strength, and clarify what the correct relationship between wall thickness and function is.",
                bloodFlow:       "Evaluate the following claim: 'Veins always carry deoxygenated blood.' State whether this is always, sometimes, or never true. For each exception, identify the specific vessel and the reason it contradicts the claim. Explain the correct definition of a vein.",
                bloodPressure:   "A researcher reports that a new drug lowers blood pressure by reducing heart rate from 75 to 60 bpm, without changing stroke volume or TPR. Evaluate whether this mechanism alone would be sufficient to explain a clinically significant reduction in MAP. Show the calculation and assess the magnitude of the effect.",
                bloodComposition:"Evaluate the claim that haematocrit is the best single measure of blood oxygen-carrying capacity. Identify at least two situations where haematocrit would give a misleading estimate of oxygen delivery, and propose a more accurate measure."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a patient management plan, a regulatory pathway diagram, or a derived physiological model. The student integrates multiple concepts into a coherent, original output.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and that requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and addresses the brief completely.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design a stepwise investigation to determine why a patient has a MAP of 110 mmHg' requires selecting measurements, interpreting results, and proposing a management strategy — integrating anatomy, physiology, pharmacology, and clinical reasoning.",
            examples: {
                heartStructure:  "Design a complete investigation for a patient presenting with breathlessness and a loud systolic heart murmur. Your plan must specify: (a) what the murmur indicates about valve function; (b) which investigations you would request and what each would show; (c) how the haemodynamic consequences of the valvular lesion explain each symptom; (d) two possible treatment strategies and their physiological rationale.",
                bloodFlow:       "Construct a fully annotated diagram tracing a single erythrocyte from the right atrium through the complete double circulation back to the right atrium. For each segment, annotate: vessel type, approximate pressure, oxygen saturation, and one key structural feature of the vessel wall that matches its function.",
                bloodPressure:   "Propose a comprehensive management plan for a 55-year-old patient with MAP of 115 mmHg, elevated TPR (calculated from CO and MAP measurements), and normal cardiac output. Your plan must include: (a) the physiological target for each drug class you would use; (b) the specific component of MAP = CO × TPR that each drug addresses; (c) one lifestyle intervention and its mechanism; (d) one monitoring parameter and the rationale for choosing it.",
                bloodComposition:"Formulate a decision-tree algorithm for diagnosing the cause of anaemia from four initial investigations: haematocrit, MCV (mean corpuscular volume), reticulocyte count, and serum ferritin. The algorithm must correctly classify: iron-deficiency anaemia, vitamin B12/folate deficiency, haemolytic anaemia, and anaemia of chronic disease. Justify each branch point with the underlying pathophysiology."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the four heart chambers but cannot state the direction of blood flow through each",
                "Confuses pulmonary and systemic circulation — does not know which side of the heart drives each",
                "Believes arteries always carry oxygenated blood and veins always carry deoxygenated blood",
                "Cannot apply CO = HR × SV; unsure which variable is which",
                "Does not understand the structural basis for capillary exchange",
                "Treats blood pressure as a single number rather than a systolic/diastolic pair with distinct physiological meanings"
            ],
            immediateNextSteps: [
                "Before any physiology: draw and label a simple heart diagram with four chambers, four valves, and arrows showing the direction of blood flow — trace the path of one drop of deoxygenated blood from right atrium all the way to left atrium and back. Repeat until the route is automatic.",
                "Fix the artery/vein oxygen misconception immediately: write on paper — 'Arteries carry blood AWAY from the heart (not necessarily oxygenated). Veins carry blood TOWARD the heart (not necessarily deoxygenated).' Cite pulmonary artery and pulmonary vein as the key exceptions.",
                "Practise CO = HR × SV with three numerical examples before attempting any conceptual questions. Confirm: if HR = 70 and SV = 70, CO = 4,900 mL/min ≈ 5 L/min.",
                "Draw one capillary cross-section showing the single endothelial cell layer, one red blood cell passing through, and arrows for O₂ moving out and CO₂ moving in. Label the diffusion gradient. Do not proceed to exchange physiology without this image internalised.",
                "Learn systolic and diastolic pressure as two separate events: systolic = pressure when ventricle contracts and ejects blood; diastolic = pressure when ventricle relaxes and fills. Associate 120 with 'squeeze' and 80 with 'fill' before introducing MAP."
            ],
            misconceptionsToAddress: [
                "Arteries = oxygenated → define by direction, not oxygen content; pulmonary artery example",
                "Confusion about which ventricle drives which loop → diagram with colour-coded loops (blue deoxygenated, red oxygenated)",
                "Blood pressure as one number → distinguish systolic, diastolic, and MAP with definitions"
            ]
        },

        developing: {
            characteristics: [
                "Can trace blood flow through the double circulation with occasional errors at valve names",
                "Understands CO = HR × SV and can perform simple calculations",
                "Knows the baroreceptor reflex exists but cannot trace the complete neural pathway",
                "Can distinguish arteries from capillaries from veins structurally but struggles to explain why each structure matches its function",
                "Understands the oxygen-dissociation curve is sigmoidal but cannot explain the Bohr effect or predict the direction of shift",
                "Confuses preload and afterload; knows the terms but cannot define them precisely"
            ],
            immediateNextSteps: [
                "For the baroreceptor reflex: draw a flow diagram with eight boxes — stimulus (BP rises) → baroreceptors fire → cardiovascular centre (medulla) → parasympathetic output (vagus nerve) → SA node slows → HR falls → CO falls → MAP restored. Cover and reproduce until all eight steps come automatically.",
                "For the oxygen-dissociation curve Bohr effect: learn the mnemonic CADET (CO₂, Acid, DPG, Exercise, Temperature all right-shift the curve). For each factor, draw a small arrow showing direction of shift and write one sentence explaining why active tissues experience this condition.",
                "For preload vs afterload: preload = the volume stretching the ventricle BEFORE contraction (venous return); afterload = the pressure the ventricle must overcome to EJECT blood (aortic pressure). Write one sentence for each with a simple analogy: preload = how full the balloon is before you squeeze; afterload = how tight the opening is.",
                "For vessel structure-function: build a three-row table — artery (thick elastic wall for high pressure conduction), capillary (one cell thick for exchange), vein (thin wall with valves for low-pressure return). For each, write the structural feature first, then derive the function from it.",
                "For MAP calculation: practise MAP ≈ DBP + ⅓(SBP − DBP) with five different BP readings until the arithmetic is automatic, then connect to MAP = CO × TPR by identifying what changes when MAP changes."
            ],
            misconceptionsToAddress: [
                "Baroreceptor reflex gaps → eight-step flow diagram (above)",
                "Bohr effect direction confusion → CADET mnemonic (above)",
                "Preload/afterload conflation → balloon analogy with precise definitions (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Traces blood flow and all valve events through the complete cardiac cycle accurately",
                "Applies CO = HR × SV and MAP = CO × TPR to predict effects of interventions",
                "Explains the baroreceptor reflex and RAAS pathways correctly and connects them to antihypertensive drug mechanisms",
                "Interprets oxygen-dissociation curve shifts using the Bohr effect and predicts clinical consequences",
                "Explains Starling's Law and its application to heart failure",
                "Classifies all four vessel types by structure, pressure, and function"
            ],
            immediateNextSteps: [
                "Derive Starling's Law quantitatively: look up the Frank-Starling curve (SV vs end-diastolic volume) and explain why the relationship becomes flat at high preloads — connecting sarcomere length-tension relationships to cardiac pump function.",
                "Apply Poiseuille's Law numerically: calculate the fold-change in flow for radius reductions of 25%, 50%, and 75% (r⁴ calculation). Then connect to clinical scenarios: what radius reduction would abolish all flow? What does this mean for coronary artery stenosis?",
                "Integrate the two blood pressure regulatory systems: construct a timeline showing how baroreceptors respond within seconds while RAAS takes hours-days. For each system, identify the effector molecules (noradrenaline vs angiotensin II vs aldosterone) and their specific target tissues.",
                "Calculate oxygen delivery: DO₂ = CO × CaO₂ (arterial oxygen content). Use CaO₂ = (Hb × SaO₂ × 1.34) + (0.003 × PaO₂). Interpret how changes in each variable affect overall oxygen delivery — connect to anaemia and heart failure scenarios.",
                "Extend the cardiac cycle: learn the pressure-volume loop. Draw left ventricular pressure vs volume through all four phases (filling, isovolumetric contraction, ejection, isovolumetric relaxation). Identify where the four valves open and close on the loop."
            ],
            misconceptionsToAddress: [
                "Starling's Law as unlimited → show the flat/descending portion of the curve representing overstretching in heart failure",
                "Oxygen delivery depending only on haemoglobin → calculate DO₂ to show CO, saturation, and Hb all contribute"
            ]
        },

        expert: {
            characteristics: [
                "Derives MAP = CO × TPR from first principles and connects each variable to its determinants three levels deep",
                "Designs experiments to measure cardiac output using Fick's principle and interprets pressure-volume loops",
                "Critically evaluates clinical data — identifies whether elevated MAP is driven by CO or TPR, and selects pharmacological targets accordingly",
                "Connects molecular mechanisms (ion channels, receptor subtypes) to macroscopic cardiovascular effects",
                "Integrates cardiovascular with renal, endocrine, and respiratory physiology in multi-system clinical scenarios"
            ],
            immediateNextSteps: [
                "Apply Fick's principle to measure cardiac output: CO = VO₂ / (CaO₂ − CvO₂). Obtain published values for VO₂ (250 mL/min at rest) and arteriovenous O₂ difference (5 mL/dL) and verify the calculated CO matches the expected 5 L/min. Then repeat for a patient with heart failure and a trained athlete.",
                "Investigate the pressure-volume loop in detail: identify the work done by the ventricle (area of the loop), the effects of increased preload (loop widens rightward), increased afterload (loop narrows and rises), and positive inotropy (loop widens upward). Explain how each alteration affects stroke volume and ejection fraction.",
                "Critically appraise a published trial of an antihypertensive drug: identify what haemodynamic endpoints were measured (CO, TPR, HR, SV), assess whether the proposed mechanism is supported by the data, and identify which variables were not measured and how this limits interpretation.",
                "Model the integrated response to haemorrhage: trace the changes in MAP, CO, HR, SV, TPR, RAAS activation, ADH release, and baroreceptor reflex firing over the first hour after 1 L blood loss — creating a timeline that integrates all regulatory systems simultaneously."
            ],
            misconceptionsToAddress: [
                "MAP as a simple average of systolic and diastolic → derive the correct approximation MAP ≈ DBP + ⅓PP and explain why diastole occupies two-thirds of the cardiac cycle at rest",
                "TPR as fixed → show that TPR is dynamically regulated by arteriolar tone, which is itself controlled by at least five parallel mechanisms simultaneously"
            ]
        }
    }
},

const EndSection1 = "close"