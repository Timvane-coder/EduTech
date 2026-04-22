



nucleicAcids: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about nucleic acid structure, the central dogma, and key molecular players from memory without requiring explanation of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, no higher level is accessible.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'DNA polymerase adds nucleotides in the 5'→3' direction' is remember-level. Adding 'because it requires a free 3'-OH' crosses into understand.",
            examples: {
                structure:      "Name the three components of a nucleotide. State which bases are purines and which are pyrimidines.",
                replication:    "List four enzymes involved in DNA replication and state the function of each.",
                transcription:  "State the sequence differences between the template strand, coding strand, and mRNA for a given DNA sequence.",
                translation:    "Identify the three ribosomal sites (A, P, E) and state what occupies each during elongation.",
                code:           "Write the start codon and all three stop codons. State what is meant by a degenerate genetic code."
            }
        },

        understand: {
            description: "Explain the reasoning behind facts — connect structure to function, cause to effect, and molecular event to biological consequence.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct causal explanation demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism. 'The lagging strand is synthesised discontinuously' is remember. 'The lagging strand is synthesised discontinuously because DNA polymerase can only work 5'→3' — which on the lagging strand means away from the fork — so new primers must be laid down repeatedly as the fork advances' is understand.",
            examples: {
                structure:      "Explain why DNA is more chemically stable than RNA, connecting your answer to a specific structural difference between deoxyribose and ribose.",
                replication:    "Explain why the lagging strand must be synthesised as Okazaki fragments, connecting the explanation to the directionality constraint of DNA polymerase.",
                transcription:  "Explain why eukaryotic mRNA must be processed before export from the nucleus, and connect each processing step (cap, tail, splicing) to its specific function.",
                translation:    "Explain why the ribosome's peptidyl transferase activity resides in the rRNA rather than a protein, and what this implies about the evolutionary origin of the ribosome.",
                regulation:     "Explain how the lac operon switches on in the presence of lactose and off when glucose is available, connecting the molecular events at the operator and promoter to the cellular metabolic logic."
            }
        },

        apply: {
            description: "Use known rules, base-pairing logic, and the genetic code to solve novel problems — predict sequences, trace mutations, or determine protein sequences from mRNA.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects and applies the correct rule to a new sequence or scenario.",
            verbs: ["Determine", "Predict", "Transcribe", "Translate", "Calculate", "Construct", "Identify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Determine the mRNA sequence transcribed from 3'-TACGGA-5' template strand and then determine the amino acid sequence' requires correctly applying antiparallel complementarity, T→U substitution, and codon table lookup — a multi-step procedure applied to a novel sequence.",
            examples: {
                structure:      "Given a DNA sequence, determine the complementary antiparallel strand, labelling 5' and 3' ends on both strands.",
                replication:    "A DNA template strand reads 3'-ATCGGCTA-5'. Determine the sequence of the newly synthesised strand, its polarity, and identify which strand is template and which is coding.",
                transcription:  "A gene's coding strand reads 5'-ATGAAAGCCTAA-3'. Write the mRNA sequence (including polarity), identify the start codon, and predict the number of amino acids in the protein product.",
                translation:    "Using a codon table, translate the mRNA sequence 5'-AUGUUCAAAGGUUAA-3'. Identify all functional elements (start codon, codons, stop codon) and state the polypeptide sequence.",
                mutation:       "A point mutation changes the third base of the codon GGU to GGC. Predict the effect on the amino acid sequence and classify the mutation type. Then change the first base from G to A and predict the consequence."
            }
        },

        analyze: {
            description: "Interpret experimental data, mutation effects, or sequence information to draw conclusions about mechanism, function, or evolutionary relationships.",
            cognitiveDemand: "Decomposition and inference from evidence. The student derives a conclusion from data rather than applying a formula to get an answer.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Interpret", "Classify", "Distinguish"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a density gradient result after two rounds of replication, the student must deduce which replication model is supported — the answer is not given and must be derived from the pattern of bands.",
            examples: {
                structure:      "Given the base composition data for four organisms (% A, T, G, C provided), identify which samples are DNA and which are RNA, which organisms are most closely related, and which DNA sample has the highest melting temperature. Justify each conclusion.",
                replication:    "Meselson-Stahl experiment data: after round 1, one band at hybrid density; after round 2, one hybrid + one light band. Analyse what each result eliminates and which model it uniquely supports. Explain why two rounds were necessary rather than one.",
                transcription:  "A researcher finds that treating cells with alpha-amanitin at low doses inhibits RNA polymerase II but not I or III. Analyse what this predicts about the cellular effect on mRNA vs rRNA and tRNA production, and the downstream consequence for protein synthesis.",
                translation:    "Two proteins differ in a single amino acid at position 23 (Glu vs Val). Analyse what minimum nucleotide change at the DNA level could cause this difference, classify the mutation type, and predict whether each sequence change would be detected in a standard amino acid analysis.",
                regulation:     "E. coli cells are grown in the presence of both glucose and lactose. Analyse the expected expression level of lac operon genes, explaining the contribution of both the lac repressor system and catabolite repression. Predict what changes when glucose is removed."
            }
        },

        evaluate: {
            description: "Judge the validity of a claim, experimental interpretation, or model, supporting the verdict with mechanistic reasoning and identifying precisely what is wrong and what would be correct.",
            cognitiveDemand: "Judgement with justification against a molecular standard. Simply identifying an error is insufficient — the student must explain the criterion by which it fails.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Defend", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "A student who says 'this claim is wrong' without explaining why is at understand-level. Evaluate requires: identify the error, state the correct principle, explain the mechanism, and often address the student's implicit reasoning to show where it breaks down.",
            examples: {
                structure:      "A student states: 'G-C base pairs are stronger than A-T pairs because guanine is a larger molecule than adenine.' Evaluate this claim: identify the correct molecular reason for G-C stability, explain why size is irrelevant, and state what structural feature actually accounts for the difference.",
                replication:    "A student concludes from a density gradient showing one band of hybrid density after one replication round that both conservative and semi-conservative models are possible explanations. Evaluate this conclusion — state whether it is correct or incorrect, justify your verdict using the predictions of each model, and explain what additional evidence would distinguish them.",
                transcription:  "A student claims: 'Since the mRNA sequence is the same as the coding strand of DNA (with U for T), the coding strand serves as the template for RNA polymerase.' Evaluate this claim, identify the strand terminology error, and explain which strand is actually used as template and in which direction it is read.",
                translation:    "Evaluate the statement: 'The ribosome reads mRNA in the 3'→5' direction.' Identify whether this is true or false, explain the directionality of ribosome movement and mRNA reading, and explain why this direction is functionally coupled to the direction of transcription and translation in prokaryotes.",
                mutation:       "A student claims that synonymous (silent) mutations are completely harmless because they do not change the amino acid sequence. Evaluate this claim: identify the conditions under which it is true, and describe at least two mechanisms by which a synonymous mutation could have functional consequences."
            }
        },

        create: {
            description: "Design experiments, propose molecular mechanisms, construct annotated pathway diagrams, or derive predictions that integrate multiple concepts into a coherent original output.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before and requires combining multiple concepts. It must be internally consistent, scientifically plausible, and address the brief completely.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. Designing an experiment to test whether a new drug inhibits transcription or translation requires assembling a multi-step experimental plan from scratch — not replicating a memorised procedure.",
            examples: {
                structure:      "Design an experiment to determine the G+C content of an unknown bacterium's genome using only a UV spectrophotometer and the knowledge that DNA absorbance at 260 nm increases as strands separate (hyperchromic effect). Specify the procedure, the measurement, how you would calculate G+C content, and what control you would include.",
                replication:    "Propose a molecular mechanism by which a cell could replicate a circular bacterial chromosome completely, despite DNA polymerase's inability to synthesise de novo. Your proposal must address: (a) how the first primer is placed; (b) how Okazaki fragments are processed; (c) how the chromosome is fully replicated without leaving a gap; (d) why circular chromosomes do not face the 'end replication problem' that linear chromosomes do.",
                transcription:  "Construct a fully annotated diagram of the complete path from gene to mature mRNA in a eukaryotic cell. Include: promoter, transcription start site, pre-mRNA, 5' capping, 3' cleavage and polyadenylation, splicing (marking introns and exons), nuclear export, and the mature mRNA structure. For each step, annotate the key enzyme or complex responsible.",
                translation:    "Design an experiment to determine whether a novel compound inhibits translation at the initiation, elongation, or termination stage. Your design must include: (a) the cell-free translation system you would use; (b) at least three assays distinguishing the three stages; (c) controls for each assay; (d) the expected results under each inhibition scenario.",
                regulation:     "Formulate a regulatory circuit for a hypothetical eukaryotic gene that must: (a) be expressed only in the presence of signal molecule X; (b) be silenced by epigenetic modification when X is absent for more than 24 hours; (c) be amplified by a positive feedback loop once activated. For each component of your circuit, specify the molecular mechanism (transcription factor, histone modification, miRNA, etc.) and whether it is fast or slow, reversible or irreversible."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name DNA and RNA but cannot distinguish their structural components reliably",
                "Knows that DNA replication is semi-conservative but cannot explain what this means",
                "Confuses template strand with coding strand — uses them interchangeably",
                "Cannot apply base-pairing rules consistently, especially when converting DNA to mRNA",
                "Knows that ribosomes make proteins but cannot describe the A, P, E site cycle",
                "Treats transcription and translation as a single continuous process"
            ],
            immediateNextSteps: [
                "Before anything else: draw a nucleotide from scratch three times — phosphate, sugar (label the carbons 1'–5'), and base. Then draw deoxyribose vs ribose side by side, circling the difference at C2'. Repeat until automatic.",
                "Build a physical antiparallel strand: write 5'-ATCG-3' on a strip of paper; write the complement 3'-TAGC-5' on another strip. Physically align them antiparallel. Then convert the bottom strand to mRNA by replacing T with U and reversing to 5'→3'. Do this for five different sequences.",
                "Separate transcription and translation into two entirely separate diagrams on two separate pages — never combine them. On each page, write: WHERE it happens (nucleus vs cytoplasm), WHAT is made (mRNA vs protein), and WHO does it (RNA polymerase vs ribosome).",
                "For the A, P, E sites: use three chairs in a row to physically act out ribosome function. Chair A = new tRNA arrives; chair P = growing chain; chair E = leaving. Move a physical object (eraser = growing chain) from P to... wait, the new amino acid joins in A, chain transferred from P-tRNA to A-tRNA, then translocation shifts everything one position. Do this with your hands five times.",
                "Write the central dogma as a one-way road with three lanes: DNA → RNA → Protein. Annotate each arrow with the enzyme and the direction (5'→3'). This map must be drawn from memory before every practice session."
            ],
            misconceptionsToAddress: [
                "Template strand = coding strand → antiparallel strand exercise (above)",
                "Transcription and translation are one process → two-page separation (above)",
                "RNA is just a copy of DNA → structural comparison table: deoxyribose/ribose, T/U, double/single stranded"
            ]
        },

        developing: {
            characteristics: [
                "Applies base-pairing rules correctly for DNA→DNA but makes errors on DNA→RNA conversion",
                "Can describe leading and lagging strand synthesis but confuses which requires Okazaki fragments",
                "Understands that the genetic code is read as triplets but misreads ORFs by starting at the wrong position",
                "Can identify the start and stop codons but makes errors when counting amino acids in a sequence",
                "Understands that introns are removed but confuses whether they are in the pre-mRNA or mature mRNA",
                "Can describe negative regulation by the lac repressor but cannot explain catabolite repression"
            ],
            immediateNextSteps: [
                "For DNA→RNA conversion: practise five sequences per session — write the template strand (3'→5'), apply base-pairing (A→U, T→A, G→C, C→G) reading 3'→5', write the mRNA 5'→3'. Do not proceed to translation practice until DNA→RNA is error-free.",
                "For leading vs lagging strand: draw the replication fork with the fork moving LEFT. On the upper strand running 3'→5' toward the fork — this is continuous (leading). On the lower strand running 5'→3' toward the fork — this is discontinuous (lagging). Redraw with fork moving RIGHT. Recognise that which strand is leading depends on fork direction, not strand identity.",
                "For ORF reading: always underline the start codon (AUG) before reading any further. Then group the next bases in triplets strictly — NEVER restart triplet counting mid-sequence. Count AUG as codon 1 and include it in your amino acid count (it codes for methionine).",
                "For introns/exons: use a physical analogy — pre-mRNA is a rough cut film; introns are the deleted scenes; exons are the scenes that remain in the final cut. The spliceosome is the editor. The mature mRNA is the final film. Draw this as a film-strip diagram.",
                "For catabolite repression: add it as a second layer ON TOP of the existing lac repressor diagram. Draw the CRP-cAMP complex binding the promoter separately from the repressor-operator interaction. Label: when glucose is HIGH → cAMP LOW → CRP inactive → low transcription even if lactose present."
            ],
            misconceptionsToAddress: [
                "Okazaki fragment confusion → replication fork redrawn in two orientations (above)",
                "ORF miscounting → AUG-first discipline (above)",
                "Introns in mature mRNA → film-strip analogy (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Applies base-pairing, transcription, and translation rules fluently and accurately for multi-step problems",
                "Correctly predicts mutation consequences for silent, missense, nonsense, and frameshift mutations",
                "Interprets Meselson-Stahl-style experiments and other molecular genetics data correctly",
                "Connects DNA structure to properties (melting temperature, drug binding, protein binding at major groove)",
                "Explains eukaryotic mRNA processing and connects each step to mRNA function",
                "Can trace the lac operon response to changing lactose and glucose conditions"
            ],
            immediateNextSteps: [
                "Expand mutation analysis to the promoter region: predict what happens when a promoter mutation reduces RNA polymerase affinity — how does this affect transcription rate, mRNA level, and protein output? Connect to the concept of transcription factor binding and disease (e.g. promoter mutations in cancer).",
                "Work through alternative splicing: look up one gene that produces multiple protein isoforms from one pre-mRNA (e.g. tropomyosin) and map which exons are included in each isoform — then connect this to the proteome size paradox (more proteins than genes in humans).",
                "Calculate kcat-equivalent thinking for translation: if a ribosome adds ~20 amino acids per second and an average protein is 400 amino acids, how long does one translation event take? How many ribosomes (polysome) would be needed to produce 1000 proteins per minute? Connect to mRNA half-life.",
                "Explore CRISPR-Cas9 at the molecular level: trace the guide RNA design from a target DNA sequence — write the 20 nt protospacer, the PAM sequence requirement, and predict the Cas9 cut site. Connect to homology-directed repair vs NHEJ outcomes.",
                "Investigate epigenetic regulation: research what histone H3K27 trimethylation does to gene expression, connect to Polycomb repressor complexes, and compare this mechanism to lac operon repression in terms of speed, reversibility, and heritability."
            ],
            misconceptionsToAddress: [
                "Silent mutations are always harmless → research codon usage bias and splicing regulatory sequences",
                "One gene = one protein → alternative splicing cases (above)"
            ]
        },

        expert: {
            characteristics: [
                "Derives predictions about any step of the central dogma from first principles without reference",
                "Designs multi-step molecular biology experiments with appropriate controls and quantitative readouts",
                "Connects nucleic acid biochemistry to pharmacology (drug targets, resistance mechanisms, therapeutic strategies)",
                "Analyses published molecular biology data — gel images, sequencing traces, density gradients — critically",
                "Integrates regulation at multiple levels (chromatin, transcription, post-transcription, translation) into a coherent cell-state model"
            ],
            immediateNextSteps: [
                "Derive the maximum theoretical information content of the genetic code: with 4 bases in triplets, 64 codons exist for 20 amino acids + 3 stops. Calculate how much degeneracy exists at each codon position (wobble position analysis). Connect to the error-buffering role of third-position degeneracy.",
                "Critically evaluate a published RNA-seq dataset: given differential expression data (fold-change and p-values), identify the assumptions that must hold for the analysis to be valid (library depth, housekeeping gene stability, biological replicates), and identify what additional experiments would be needed to move from correlation to mechanism.",
                "Explore the thermodynamics of DNA melting: given the nearest-neighbour model for DNA stability, calculate the melting temperature of a 20-mer oligonucleotide. Compare to the simple G+C content method and assess the accuracy gain from the more complex model.",
                "Investigate the structural basis of ribosome function: read the primary literature on the structure of the peptidyl transferase centre and identify which 23S rRNA residues are critical for catalysis. Connect to the concept of RNA as an ancient catalyst (RNA World hypothesis)."
            ],
            misconceptionsToAddress: [
                "Ribosomes as passive scaffolds → peptidyl transferase ribozyme literature (above)",
                "Central dogma as absolute → research reverse transcription, RNA-directed DNA methylation, and prions as examples of information flow beyond the simple dogma"
            ]
        }
    }
},

proteins: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about protein structure, amino acids, and structural levels from memory without requiring understanding of mechanism or consequence.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. The student reproduces definitions, lists, and classifications accurately.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'Secondary structure is stabilised by hydrogen bonds' is remember-level. Adding 'because backbone C=O and N–H groups are positioned to form H-bonds at regular intervals' crosses into understand.",
            examples: {
                proteinBasics:    "List the four levels of protein structure in order. Define primary structure.",
                aminoAcids:       "Name the five R-group categories of the 20 amino acids. State which amino acid has no chiral centre and why.",
                secondaryStr:     "State what type of bond stabilises α-helices and β-sheets. Name the two amino acids that commonly disrupt α-helices.",
                tertiaryStr:      "List five types of interaction that stabilise tertiary structure.",
                quaternaryStr:    "State the subunit composition of haemoglobin. Define quaternary structure."
            }
        },

        understand: {
            description: "Explain the meaning behind structural facts — connect chemical properties to structural consequences, and connect structural levels to each other causally.",
            cognitiveDemand: "Translation and interpretation. The student explains mechanisms, not just states outcomes. A correct causal explanation that could not have been produced by memorising the Q-A pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or reason. 'Hydrophobic residues are found in the protein interior' is remember. 'Hydrophobic residues are buried in the interior because their presence at the surface would force surrounding water molecules into an ordered (low-entropy) cage, which is thermodynamically unfavourable — burial releases that water, increasing entropy' is understand.",
            examples: {
                proteinBasics:    "Explain why the peptide bond has partial double-bond character and why this makes it planar. Connect planarity to the constraints on backbone conformation.",
                aminoAcids:       "Explain why proline is called a helix breaker. Your answer must reference the specific geometric constraint proline's ring imposes on the backbone.",
                secondaryStr:     "Explain why α-helix hydrogen bonds form between residues n and n+4, rather than between adjacent residues. Justify this spacing using the geometry of the helix.",
                tertiaryStr:      "Explain the hydrophobic effect as the driving force for protein folding. Your answer must reference entropy, not simply state that non-polar groups dislike water.",
                denaturation:     "Explain why denaturation abolishes protein function even though it does not break peptide bonds. Your answer must connect 3D shape to the existence of a functional binding site."
            }
        },

        apply: {
            description: "Use known principles about protein structure to predict outcomes, interpret new scenarios, or solve problems not previously encountered in exactly this form.",
            cognitiveDemand: "Procedure or principle execution in a novel context. The student selects the correct concept, applies it correctly, and produces a specific prediction, answer, or diagram.",
            verbs: ["Predict", "Determine", "Sketch", "Apply", "Use", "Classify", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a novel situation. 'Predict the effect on collagen stability of deleting all hydroxyproline residues' requires the student to apply knowledge of H-bond stabilisation by hydroxyproline to a new situation — the answer cannot be reproduced from memory of a specific example.",
            examples: {
                proteinBasics:    "A protein has 30% of its residues as glycine and proline. Predict whether it is likely to form regular α-helices and justify your prediction.",
                aminoAcids:       "The active site of an enzyme contains Asp, His, and Ser residues. Predict how the activity would change if the solution pH were shifted from 7 to pH 3, and justify using the ionisation states of each residue.",
                secondaryStr:     "Sketch the hydrogen bonding pattern for a three-stranded antiparallel β-sheet. Label the donor and acceptor atoms for three specific H-bonds.",
                tertiaryStr:      "A protein is exposed to beta-mercaptoethanol (a reducing agent) and then to urea (which disrupts all non-covalent interactions). Predict the order in which the four structural levels would be disrupted and justify each step.",
                quaternaryStr:    "Using the T-state/R-state model, predict whether 2,3-BPG (which binds and stabilises the T-state of haemoglobin) would increase or decrease oxygen affinity, and whether the O₂ dissociation curve would shift left or right."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into components, identify patterns, and derive conclusions from evidence rather than from a given framework.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion not given to them and justifies it using the evidence provided.",
            verbs: ["Identify", "Determine", "Deduce", "Distinguish", "Analyse", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given this circular dichroism spectrum showing a strong minimum at 208 and 222 nm, determine the dominant secondary structure element and justify' requires the student to interpret spectroscopic evidence — not to recall a formula.",
            examples: {
                proteinBasics:    "Amino acid analysis of an unknown protein shows 33% glycine, 22% proline, 15% hydroxyproline, and 8% alanine. Deduce as specifically as possible what type of protein this is, justifying each conclusion from the compositional data.",
                secondaryStr:     "A protein's circular dichroism spectrum shows minima at 208 nm and 222 nm. A second protein shows a minimum at 216 nm only. Analyse what these spectra reveal about the dominant secondary structure of each protein.",
                tertiaryStr:      "SDS-PAGE under reducing conditions shows a band at 25 kDa. Non-reducing SDS-PAGE shows a band at 50 kDa. Analyse what this result reveals about the quaternary structure and disulfide bond connectivity of this protein.",
                folding:          "A mutant protein has a substitution of isoleucine (non-polar) to aspartate (negatively charged) at position 42, which is located in the hydrophobic core of the wild-type protein. Analyse the likely consequences of this substitution for protein folding stability, and predict whether the mutation would be pathogenic.",
                haemoglobin:      "Haemoglobin from a patient shows a right-shifted O₂ dissociation curve (lower O₂ affinity at all pO₂ values). Analyse two structural explanations that could account for this observation."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the quality of an experimental result, or the appropriateness of a structural interpretation. The student must apply criteria and defend a position.",
            cognitiveDemand: "Judgement with justification against a criterion. Simply identifying that something is wrong is not enough — the student must state why it fails and what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims that denatured proteins always have lower molecular weight because their structure is disrupted — evaluate this claim.' The student must state the claim is incorrect (judgement), explain that denaturation does not break peptide bonds so molecular weight is unchanged (criterion), and explain what does change — the hydrodynamic radius and loss of function (correction and extension).",
            examples: {
                proteinBasics:    "A student states: 'Denaturation reduces the molecular weight of a protein because it breaks the bonds holding the structure together.' Evaluate this claim fully — identify the error, explain which bonds denaturation does and does not break, and state what actually changes upon denaturation.",
                folding:          "Evaluate Anfinsen's conclusion that the primary sequence contains all information needed for protein folding. Identify the evidence that supports this conclusion, and then identify an important caveat — a class of proteins whose in vivo folding Anfinsen's experiment alone cannot explain.",
                structure:        "A researcher claims that a protein with 40% α-helical content must have its helices packed in an antiparallel arrangement to maximise stability. Evaluate this reasoning — identify what determines helix packing arrangement in reality and why the researcher's logic is flawed.",
                haemoglobin:      "Evaluate the claim that haemoglobin is simply four myoglobin molecules assembled together. Your evaluation must compare: oxygen-binding curve shape, cooperative behaviour, Bohr effect, and allosteric regulation, concluding with a reasoned verdict.",
                techniques:       "A student uses SDS-PAGE to determine the native molecular weight and subunit composition of a protein. Evaluate whether SDS-PAGE alone is sufficient for both purposes, identifying what additional experiment would be needed and why."
            }
        },

        create: {
            description: "Generate something new: an experimental strategy, a mechanistic model, a designed protein, an annotated diagram integrating multiple structural levels, or a novel hypothesis about structure-function relationships.",
            cognitiveDemand: "Synthesis and original production requiring integration of multiple concepts. The output did not exist before and cannot be produced by retrieval or calculation alone.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to determine whether a protein's tertiary structure is stabilised predominantly by hydrophobic interactions or by disulfide bonds' requires the student to devise specific experimental conditions (reducing agents, detergents, thermal denaturation), predict outcomes under each hypothesis, and specify controls — an assembly of concepts into a coherent original plan.",
            examples: {
                proteinBasics:    "Design a complete experiment to determine the primary structure of an unknown 50-amino-acid peptide using chemical and mass spectrometric methods. Specify: (a) how you would cleave the peptide into overlapping fragments; (b) how you would sequence each fragment; (c) how you would use overlapping sequences to reconstruct the full sequence; (d) how you would confirm the N- and C-termini.",
                structure:        "Construct a fully annotated diagram showing the hierarchy of protein structural organisation from primary to quaternary, using haemoglobin as the specific example at every level. For each level, annotate: the bond type responsible, the method used to determine that level, and one clinical consequence of a mutation at that level.",
                folding:          "Propose a hypothesis for how a small molecule drug might stabilise the native fold of a misfolding disease protein (choose a specific disease). Your proposal must: (a) identify the protein and the misfolded conformation it adopts; (b) specify what structural feature of the drug would interact with the native protein; (c) propose an experimental method to confirm the drug stabilises the fold; (d) predict what effect the drug would have on protein aggregation.",
                function:         "Design a protein engineering strategy to modify the oxygen-binding properties of haemoglobin to improve its use as an acellular oxygen carrier for emergency blood substitutes. Address: (a) the problem with unmodified haemoglobin outside red blood cells; (b) two specific modifications (with structural justification) that would improve stability and O₂-release properties; (c) how you would test the modified protein in vitro.",
                techniques:       "Formulate a complete analytical strategy to characterise an unknown secreted glycoprotein including: (a) determination of its molecular weight and subunit composition; (b) identification of its disulfide bond connectivity; (c) determination of its secondary structure content; (d) localisation of its glycosylation sites. Specify the technique used for each step and justify your choice."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the four structural levels but cannot explain what stabilises each",
                "Confuses denaturation with proteolysis — believes peptide bonds are broken",
                "Cannot distinguish α-helix from β-sheet hydrogen bonding patterns",
                "Believes all proteins have quaternary structure",
                "Cannot connect R-group properties to protein interior vs surface location",
                "Treats the hydrophobic effect as a simple 'like dissolves like' rule rather than an entropy-driven phenomenon"
            ],
            immediateNextSteps: [
                "Draw the four structural levels as a nested diagram: sequence → local fold → global fold → subunit assembly. For each level, write only the stabilising bond type. Do not proceed to mechanisms until this framework is automatic.",
                "Draw a denaturation diagram explicitly showing peptide bonds intact after denaturation — use a coiled spring (native) becoming an uncoiled spring (denatured) where all links (peptide bonds) remain connected. Never use the word 'break' without specifying which bond.",
                "Draw α-helix and β-sheet side by side with H-bond donors and acceptors explicitly labelled on backbone atoms. Use two colours: one for C=O, one for N–H. Draw arrows showing H-bond direction.",
                "Build a two-column table: R-group property (hydrophobic / hydrophilic / charged) vs protein location (interior / surface / active site). Populate with five amino acid examples in each row.",
                "Start with only two amino acid classes: hydrophobic (Leu, Val, Ile, Phe) and charged (Asp, Glu, Lys, Arg). Learn their one-letter codes and locations before adding the others."
            ],
            misconceptionsToAddress: [
                "Denaturation breaks peptide bonds → denaturation diagram with intact backbone",
                "All proteins have quaternary structure → explicitly list three monomeric proteins (myoglobin, lysozyme, ribonuclease)",
                "Hydrophobic = repelled by water actively → entropy explanation: water ordering drives burial"
            ]
        },

        developing: {
            characteristics: [
                "Correctly identifies the four structural levels and their stabilising interactions",
                "Understands that denaturation does not break peptide bonds",
                "Can draw α-helix H-bond pattern but struggles with β-sheet strand directionality",
                "Understands that hydrophobic residues prefer the interior but cannot explain the thermodynamic basis",
                "Can name disulfide bonds as a tertiary structure stabiliser but cannot explain why they are important in extracellular proteins",
                "Cannot yet connect cooperativity to quaternary structure at a mechanistic level"
            ],
            immediateNextSteps: [
                "For β-sheet directionality: draw parallel and antiparallel β-sheets with N→C arrows on each strand. Count H-bonds in each arrangement — antiparallel H-bonds are straight (strong), parallel are slightly distorted (weaker). Always draw the arrows before drawing H-bonds.",
                "For the hydrophobic effect: use the entropy argument explicitly. Write: 'Non-polar group on surface → water molecules forced to order around it → entropy decreases → ΔG unfavourable. Burial → water freed → entropy increases → ΔG favourable.' Repeat this reasoning for five different non-polar residues.",
                "For disulfide bonds in extracellular proteins: contrast the redox environment. Cytoplasm is reducing (glutathione keeps –SH reduced); ER and extracellular space are oxidising (allow –S–S– formation). Draw a secretory pathway with a disulfide bond forming specifically in the ER lumen — connect the oxidising environment to the bond's existence.",
                "For cooperativity: draw the T-state and R-state of haemoglobin as two separate quaternary conformations. Draw one O₂ molecule binding to one subunit, then show the quaternary rearrangement that follows. Only after drawing this mechanism should you attempt to explain why the curve is sigmoidal.",
                "For Anfinsen's experiment: draw the experiment as a flowchart — native → denature (add urea + mercaptoethanol) → remove agents → refold → measure activity. Write the conclusion and the implication separately."
            ],
            misconceptionsToAddress: [
                "Parallel β-sheets are stronger than antiparallel → H-bond geometry diagram",
                "Cooperativity is a general protein property → restrict to multi-subunit proteins with quaternary structure",
                "Disulfide bonds form anywhere in the cell → redox environment diagram"
            ]
        },

        proficient: {
            characteristics: [
                "Explains all four structural levels with correct stabilising interactions and mechanisms",
                "Correctly applies the hydrophobic effect thermodynamically",
                "Interprets SDS-PAGE and native PAGE data to deduce subunit composition and disulfide bonding",
                "Explains cooperativity and the Bohr effect using T/R-state model",
                "Can predict the consequence of specific amino acid substitutions on protein stability",
                "Understands Anfinsen's experiment and its caveats (chaperone requirement in vivo)"
            ],
            immediateNextSteps: [
                "Calculate the number of possible disulfide bond arrangements for a protein with six Cys residues — (6-1)!! = 15 possible pairings — and connect this to why proinsulin is needed for correct insulin disulfide bond formation.",
                "Work through the Ramachandran plot: look up φ and ψ angle definitions, identify which regions correspond to α-helix and β-sheet, and explain why certain angle combinations are sterically forbidden. Connect to why proline is a helix-breaker.",
                "Interpret a real circular dichroism spectrum: look up reference spectra for pure α-helix and pure β-sheet and use them to estimate the secondary structure content of a mixed protein. Connect spectroscopic features to molecular geometry.",
                "Research the cryo-EM revolution: compare the number of protein structures deposited in the PDB before and after 2013. Identify one protein whose structure could only be determined by cryo-EM and explain why (large complex, membrane protein, flexible).",
                "Derive the Hill equation from scratch and compare it with Michaelis-Menten. Apply it to haemoglobin oxygen binding (n ≈ 2.8) and explain what a Hill coefficient less than 1, exactly 1, and greater than 1 each means about cooperativity."
            ],
            misconceptionsToAddress: [
                "Anfinsen's experiment proves chaperones are unnecessary → add the in vivo caveat explicitly",
                "SDS-PAGE alone determines native molecular weight → explain that SDS denatures and cannot reveal native oligomeric state"
            ]
        },

        expert: {
            characteristics: [
                "Derives thermodynamic arguments for folding stability from first principles",
                "Interprets experimental data from multiple techniques (CD, SDS-PAGE, native PAGE, SEC, ITC) to build a complete picture of protein structure",
                "Connects protein structure to pharmacological strategies (structure-based drug design, protein engineering)",
                "Analyses the relationship between evolutionary sequence conservation and structural/functional importance",
                "Critically evaluates primary literature on protein misfolding diseases"
            ],
            immediateNextSteps: [
                "Derive the two-state folding model: ΔGfold = ΔHfold − TΔSfold. Explain why proteins are only marginally stable (ΔG ≈ −20 to −40 kJ/mol) and why this marginal stability is biologically important for regulated unfolding during protein degradation and quality control.",
                "Critically evaluate a published paper reporting the cryo-EM structure of a disease-relevant protein: identify the resolution, assess whether the map quality is sufficient to place side chains confidently, evaluate whether the authors' functional conclusions are supported by the structural data alone.",
                "Apply evolutionary co-variation analysis: look up DCA (direct coupling analysis) and understand how co-evolving residue pairs across a protein family predict contacts in the 3D structure — the conceptual basis for structure prediction from sequence alone (AlphaFold).",
                "Investigate the limits of Anfinsen's theorem: research proteins that require helper proteins not just for kinetics (chaperones) but for final structure (pilin chaperones, intein-mediated splicing) — cases where the mature structure depends on factors absent from the final product."
            ],
            misconceptionsToAddress: [
                "AlphaFold 'solved' protein folding → distinguish structure prediction from folding mechanism understanding",
                "X-ray crystallography gives the true structure → discuss crystal packing effects, cryogenic artefacts, and the ensemble nature of protein conformation"
            ]
        }
    }
},


lipids: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about lipid classes, fatty acid nomenclature, metabolic pathways, and structural features from memory without requiring understanding of mechanism or significance.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces facts without explanation. 'Phospholipids are amphipathic' is remember-level. Adding 'because they have a polar head and nonpolar tails, which causes bilayer formation' crosses into understand.",
            examples: {
                lipidBasics:       "Define 'amphipathic'. List the five major lipid classes. State the property that unifies all lipids.",
                fattyAcids:        "Write the shorthand notation for palmitic acid, oleic acid, and arachidonic acid. State what a Δ9 designation means.",
                membraneStructure: "Name the two models of membrane structure in historical order. List three factors that affect membrane fluidity.",
                lipidMetabolism:   "Name the four steps of beta-oxidation in order. State where in the cell beta-oxidation occurs. Name the rate-limiting enzyme of cholesterol synthesis.",
                lipidClasses:      "Identify the lipid class used primarily for energy storage. Name the two essential fatty acids that humans cannot synthesise."
            }
        },

        understand: {
            description: "Explain mechanisms and causal relationships — why amphipathic molecules form bilayers, why cis double bonds reduce melting point, why beta-oxidation yields more ATP per gram than glucose oxidation.",
            cognitiveDemand: "Translation and interpretation. The student explains a cause-and-effect relationship or interprets what a structural feature means for function. A correct answer cannot be produced by memorising the question-answer pair.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a causal link. 'Cis double bonds lower melting point' is remember. 'Cis double bonds introduce a rigid kink in the carbon chain that prevents neighbouring chains from packing tightly via van der Waals forces, which reduces the energy needed to separate chains and therefore lowers the melting point' is understand.",
            examples: {
                lipidBasics:       "Explain why lipids are defined by solubility rather than by a shared chemical bond, using two structurally different lipids as examples to support your argument.",
                fattyAcids:        "Explain why cis-unsaturated fatty acids are liquid at room temperature while saturated fatty acids of similar chain length are solid. Your explanation must reference molecular geometry and intermolecular forces.",
                membraneStructure: "Explain why phospholipids spontaneously form bilayers rather than micelles in biological membranes. Your answer must reference the shape of the phospholipid molecule and the thermodynamics of the hydrophobic effect.",
                lipidMetabolism:   "Explain why fatty acids yield more ATP per gram than glucose. Your answer must reference the oxidation state of carbon atoms in each molecule.",
                cholesterol:       "Explain how cholesterol can both decrease and increase membrane fluidity depending on temperature. Your answer must describe what happens at the molecular level in each case."
            }
        },

        apply: {
            description: "Use knowledge of lipid structure, fatty acid nomenclature, and metabolic calculations in novel problems — calculate ATP yields, predict membrane properties from lipid composition, or classify a lipid from its structural description.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct approach and executes it accurately on unfamiliar data.",
            verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
            whatDistinguishesThisLevel: "Apply requires a novel problem. 'Calculate the ATP yield from complete oxidation of stearic acid (C18:0)' requires correct identification of cycles (8), products (9 acetyl-CoA, 8 FADH₂, 8 NADH), and arithmetic. This cannot be answered by recalling a worked example unless the exact molecule was studied.",
            examples: {
                lipidBasics:       "A lipid is described as having a glycerol backbone, two fatty acid chains, and a phosphocholine head group. Identify its class, draw its schematic structure, and predict whether it would be found on the inner or outer leaflet of a mammalian plasma membrane.",
                fattyAcids:        "Calculate the number of degrees of unsaturation in arachidonic acid (C20:4). Predict whether arachidonic acid is solid or liquid at 37°C and explain your reasoning using chain geometry.",
                membraneStructure: "A researcher replaces 30% of the phosphatidylcholine in a liposome with sphingomyelin and cholesterol. Predict three specific changes in membrane properties and explain each change mechanistically.",
                lipidMetabolism:   "Calculate the net ATP yield from complete oxidation of stearic acid (C18:0, 18 carbons). Show the cycle count, products per cycle, and final calculation. Subtract the activation cost.",
                lipidClasses:      "Classify the following molecules as triacylglycerol, phospholipid, sphingolipid, glycolipid, or sterol, and justify each: (a) ceramide + glucose; (b) glycerol + 3 fatty acids; (c) sphingosine + phosphocholine; (d) four-ring carbon structure with –OH at C3."
            }
        },

        analyze: {
            description: "Interpret experimental data, identify patterns in lipid compositions, deduce structure-function relationships from evidence, and draw conclusions about metabolic status from biochemical data.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data and must determine what it means — the answer is not given and must be derived.",
            verbs: ["Identify", "Determine", "Deduce", "Distinguish", "Analyse", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a table of membrane lipid compositions from three organisms at different temperatures, the student must deduce which organism lives at the coldest temperature by comparing unsaturation levels — this is not a calculation from a formula but an inference from a pattern.",
            examples: {
                lipidBasics:       "Three organisms have the following membrane phospholipid fatty acid compositions: Organism A: 80% saturated, 20% monounsaturated. Organism B: 40% saturated, 60% polyunsaturated. Organism C: 20% saturated, 80% polyunsaturated. Deduce the likely habitat temperature of each organism, justify your reasoning using membrane biophysics, and identify which organism would have the highest membrane fluidity at 10°C.",
                fattyAcids:        "A patient's plasma fatty acid profile shows elevated trans-palmitelaidic acid and normal cis-palmitoleic acid. Analyse what dietary habit this suggests, what cardiovascular risk it implies, and what the molecular basis of that risk is.",
                membraneStructure: "A cell biologist treats cells with methyl-β-cyclodextrin (which extracts cholesterol from membranes) and observes that lipid raft-associated receptor signalling is abolished. Analyse what this result reveals about the role of cholesterol in raft organisation and receptor function, and propose a control experiment.",
                lipidMetabolism:   "A patient presents with hypoketotic hypoglycaemia during fasting, elevated C8-acylcarnitine on plasma acylcarnitine profiling, and normal blood glucose after glucose infusion. Analyse these findings to identify the metabolic defect, explaining why each abnormality arises from that specific defect.",
                lipidClasses:      "Thin-layer chromatography of a lipid extract from brain tissue shows three major bands: a non-polar band at the solvent front, a moderately polar band in the middle, and a polar band near the origin. Analyse what lipid classes each band likely represents, what structural feature determines their polarity, and why brain tissue specifically would show all three classes."
            }
        },

        evaluate: {
            description: "Make supported judgements about the validity of claims, experimental designs, or interpretations related to lipid biology. The student identifies errors, applies criteria, and defends a reasoned position.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or limitation, explains the criterion by which it fails, and states what would be correct or better.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard, not just a correction. 'A student claims saturated fats are always harmful — evaluate this.' The student must identify that this is context-dependent (some saturated fats are essential membrane components), explain the criterion (dietary cardiovascular risk vs structural function), and qualify the claim appropriately.",
            examples: {
                lipidBasics:       "Evaluate the claim: 'Lipids are defined by the presence of ester bonds.' Identify whether this is correct, cite two specific lipid classes that support or refute it, and state the correct definition with justification.",
                fattyAcids:        "Evaluate the following dietary advice: 'Replace all saturated fats with unsaturated fats for better health.' Assess whether this is always true, identify the specific exception (trans unsaturated fats), and explain the molecular basis for why trans fats are metabolically harmful despite being unsaturated.",
                membraneStructure: "Evaluate the fluid mosaic model as a complete description of membrane structure. Identify two phenomena it accurately explains, two phenomena it fails to explain or oversimplifies (e.g. membrane asymmetry, lipid rafts), and describe what modifications to the model have been proposed.",
                lipidMetabolism:   "A researcher claims that beta-oxidation and fatty acid synthesis are simply the reverse of each other and can be controlled by the same regulatory switch. Evaluate this claim fully — identify which aspects are superficially similar, list the four dimensions on which they differ fundamentally, and explain why cells maintain separate pathways.",
                lipidClasses:      "Evaluate the common clinical shorthand that LDL is 'bad cholesterol' and HDL is 'good cholesterol.' Assess whether this distinction is biochemically accurate, identify what LDL and HDL actually transport and in which direction, and explain what clinical scenario would make high HDL harmful or low LDL insufficient."
            }
        },

        create: {
            description: "Generate original outputs: experimental designs to probe membrane properties, metabolic pathway diagrams incorporating regulatory logic, drug development proposals targeting lipid enzymes, or novel hypotheses connecting lipid composition to function.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before by combining multiple concepts. The output must be internally consistent, scientifically plausible, and address the brief completely.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original construction, not recall or calculation. 'Design an experiment to determine how increasing membrane cholesterol affects the diffusion rate of a fluorescently labelled phospholipid' requires the student to specify: the model membrane system, the cholesterol-loading method, the FRAP or SPT measurement approach, controls, variables, and expected results — integrating membrane biophysics, experimental design, and lipid chemistry.",
            examples: {
                lipidBasics:       "Design a thin-layer chromatography experiment to separate and identify the major lipid classes in a liver extract. Specify: (a) the solvent system you would use and why (polar vs non-polar solvents for different lipid classes); (b) how you would visualise the spots; (c) what reference standards you would run alongside; (d) how you would interpret the Rf values in terms of lipid polarity.",
                fattyAcids:        "Propose a cell culture experiment to test whether replacing oleic acid (18:1 cis) with elaidic acid (18:1 trans) in membrane phospholipids alters membrane fluidity and cell viability. Specify: (a) how you would load each fatty acid into cells; (b) how you would measure membrane fluidity; (c) what viability assays you would use; (d) what controls would confirm the fatty acid was incorporated into membrane phospholipids.",
                membraneStructure: "Construct a fully annotated diagram of the plasma membrane incorporating: (a) phospholipid bilayer asymmetry with specific lipids labelled in each leaflet; (b) a lipid raft domain with cholesterol and sphingomyelin; (c) an integral membrane protein with transmembrane helices; (d) a peripheral membrane protein; (e) a glycolipid with its sugar residues; (f) annotations showing how each component contributes to membrane function.",
                lipidMetabolism:   "Design a drug targeting the carnitine shuttle for treatment of a metabolic disorder where fatty acid oxidation is excessive and must be reduced (e.g. a condition of uncontrolled lipolysis). Specify: (a) which enzyme in the carnitine shuttle you would target; (b) whether you would use a competitive or irreversible inhibitor and why; (c) what biochemical markers you would monitor to confirm target engagement; (d) what metabolic consequences you would predict and how you would manage them.",
                lipidClasses:      "Formulate a classification scheme for lipids that a first-year student could use to identify any lipid from a structural description. The scheme must: (a) correctly distinguish all five major classes using no more than four yes/no questions; (b) handle structural edge cases (e.g. sphingomyelin has phosphate but not glycerol); (c) be presented as a decision tree with clearly labelled branch points."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can define lipid as 'fat' or 'hydrophobic molecule' but cannot distinguish major lipid classes by structure",
                "Knows that unsaturated fats are 'healthier' but cannot explain the structural basis or the trans fat exception",
                "Cannot distinguish the two oxidation steps of beta-oxidation by their cofactors (FAD vs NAD⁺)",
                "Confuses the location of beta-oxidation (mitochondria) with fatty acid synthesis (cytosol)",
                "Cannot explain why phospholipids form bilayers rather than aggregating randomly"
            ],
            immediateNextSteps: [
                "Draw a single phospholipid molecule from scratch, labelling: glycerol backbone, fatty acid tails (one saturated, one unsaturated with kink), phosphate group, head group, hydrophilic region, and hydrophobic region. Do not proceed until this diagram is automatic.",
                "Use the 'packing' analogy for saturation: straight spaghetti strands (saturated, pack tightly, solid) vs curly noodles (cis-unsaturated, cannot pack, liquid). Write this analogy on every practice problem involving saturation and melting point.",
                "Memorise beta-oxidation location first, synthesis location second. Anchor: 'Beta breaks bonds in the BIG mitochondria; Synthesis happens in the SMALL cytosol.' Write this before every metabolism question.",
                "Learn the two cofactors in beta-oxidation in order: step 1 uses FAD (forms FADH₂), step 3 uses NAD⁺ (forms NADH). Connect to the order: FAD first, NAD second, because F comes before N in the alphabet.",
                "Practise bilayer formation using the amphipathic analogy: soap molecules in water. Look up a simple animation of micelle vs bilayer formation and explain in your own words why two-tailed molecules favour bilayers over micelles."
            ],
            misconceptionsToAddress: [
                "All unsaturated fats are healthy → trans fat exception (above)",
                "Beta-oxidation in cytosol → location anchor (above)",
                "Lipids = fats = triglycerides → five-class overview diagram needed"
            ]
        },

        developing: {
            characteristics: [
                "Correctly identifies the five major lipid classes and their primary functions",
                "Can interpret fatty acid shorthand notation (e.g. 18:2Δ9,12) and predict physical state",
                "Understands that bilayer formation is thermodynamically driven but cannot quantify the free energy terms",
                "Can name the four steps of beta-oxidation but sometimes confuses the sequence or cofactors",
                "Can calculate ATP yield from palmitate with prompting but makes arithmetic errors for other chain lengths",
                "Confuses phosphatidylserine (inner leaflet) and phosphatidylcholine (outer leaflet) locations"
            ],
            immediateNextSteps: [
                "For beta-oxidation sequence: practise writing all four steps from memory as a flowchart: (1) oxidation/FAD → (2) hydration → (3) oxidation/NAD⁺ → (4) thiolysis/acetyl-CoA released. Drill until reproducible in under 60 seconds without reference.",
                "For ATP calculations: derive the formula for any saturated even-chain fatty acid: cycles = (n/2 − 1); acetyl-CoA = n/2; FADH₂ = NADH = cycles. Practise with C14, C16, C18, C20 until the formula is automatic.",
                "For membrane leaflet asymmetry: use the mnemonic 'PS is INside' (PS = phosphatidylserine; IN = inner leaflet). PC faces outside because it forms the majority of the outer leaflet that contacts the extracellular space.",
                "For fatty acid shorthand: cover the name column in a nomenclature table and reconstruct the name from notation alone. Focus on omega-3 vs omega-6 designation — remember omega counts from the methyl end (opposite to delta, which counts from carboxyl end).",
                "For bilayer vs micelle: draw both structures side by side, label the packing geometry difference (cylindrical phospholipids → planar bilayer; cone-shaped lysophospholipids → micelles), and connect to the critical packing parameter concept."
            ],
            misconceptionsToAddress: [
                "Beta-oxidation step sequence confusion → flowchart drill (above)",
                "PS is on outer leaflet → PS IN mnemonic (above)",
                "Omega and delta count from the same end → diagram with both numbering systems shown simultaneously"
            ]
        },

        proficient: {
            characteristics: [
                "Fluently calculates ATP yield from any saturated or unsaturated fatty acid with correct adjustments",
                "Correctly predicts membrane fluidity changes from lipid composition data",
                "Understands and can explain the four-way comparison between beta-oxidation and fatty acid synthesis",
                "Can connect lipoprotein classes to their metabolic roles and clinical significance",
                "Understands cholesterol as both a fluidity regulator and a hormone precursor",
                "Can describe eicosanoid synthesis from arachidonic acid and connect to NSAID pharmacology"
            ],
            immediateNextSteps: [
                "Extend ATP calculations to odd-chain fatty acids: identify that the final cycle produces propionyl-CoA, trace its conversion to succinyl-CoA via propionyl-CoA carboxylase and methylmalonyl-CoA mutase (requiring B12), and calculate the adjusted ATP yield.",
                "Extend ATP calculations to unsaturated fatty acids: identify that each cis double bond at an even-numbered carbon eliminates one FADH₂ (no FAD-dependent step needed), and each double bond at an odd-numbered carbon requires a reductase consuming one NADPH.",
                "Work through the complete cholesterol synthesis pathway from acetyl-CoA to cholesterol: identify the three major stages (synthesis of mevalonate, synthesis of squalene, cyclisation to steroid), locate the HMG-CoA reductase step, and explain statin mechanism in full kinetic terms.",
                "Map the phosphatidylinositol signalling pathway: PI(4,5)P₂ → phospholipase C → IP₃ + DAG → Ca²⁺ release + PKC activation. Connect to a specific downstream physiological response (e.g. smooth muscle contraction).",
                "Research the PCSK9 inhibitors as a second-generation cholesterol-lowering drug class: understand how PCSK9 targets LDL receptors for degradation and how its inhibition (by alirocumab, evolocumab) increases LDL receptor recycling — compare this mechanism to statins."
            ],
            misconceptionsToAddress: [
                "Unsaturated fatty acids always yield the same ATP as saturated → unsaturation adjustment calculations (above)",
                "Fatty acid synthesis simply reverses beta-oxidation → four-way comparison table review"
            ]
        },

        expert: {
            characteristics: [
                "Derives fatty acid beta-oxidation ATP yield formula from biochemical first principles without reference",
                "Designs experiments to probe membrane protein-lipid interactions in model membranes",
                "Analyses published lipidomics data: interprets changes in phospholipid species, acyl chain profiles, and lipid mediator levels",
                "Connects lipid raft composition to signal transduction efficiency using quantitative arguments",
                "Understands the systems-level regulation of lipid metabolism by SREBP transcription factors and AMPK"
            ],
            immediateNextSteps: [
                "Study the SREBP (sterol regulatory element binding protein) pathway in full: how cholesterol depletion releases SCAP-SREBP from the ER, how SREBP is processed in the Golgi, and how it transcriptionally activates both cholesterol synthesis and LDL receptor expression — connecting membrane cholesterol sensing to gene expression.",
                "Critically evaluate a lipidomics paper: identify the extraction method used, assess whether the ionisation efficiency differences between lipid classes have been corrected for, and evaluate whether the statistical approach accounts for the compositional nature of lipid mol% data.",
                "Study membrane curvature and lipid geometry: calculate the critical packing parameter for phosphatidylcholine vs lyso-PC vs cardiolipin; predict the preferred self-assembled structure for each; connect to the role of cardiolipin in maintaining the highly curved cristae of the inner mitochondrial membrane.",
                "Explore the lipid droplet proteome: research how lipid droplets are coated by perilipins, how hormone-sensitive lipase is activated by PKA-mediated phosphorylation of perilipin, and how this connects to the fight-or-flight lipolytic response at the whole-body level."
            ],
            misconceptionsToAddress: [
                "Lipidomics data interpreted as absolute concentrations → compositional data analysis requires different statistical approaches (above)"
            ]
        }
    }
},




carbohydrates: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about carbohydrate structure, nomenclature, and classification from memory without requiring understanding of mechanisms or functions. The student accurately reproduces definitions, formulae, and classification criteria.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level of the carbohydrates topic.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces correct facts with no explanation. 'Cellulose has β(1→4) glycosidic bonds' is remember-level. 'Cellulose has β(1→4) bonds, which produce straight chains that stack into microfibrils, making it rigid' crosses into understand.",
            examples: {
                carbohydrateBasics:          "State the empirical formula of carbohydrates. Name the three classes of carbohydrates by polymer size.",
                monosaccharides:             "List the four biologically important hexoses. For each, state whether it is an aldose or ketose.",
                disaccharides:               "State the glycosidic bond type and monomers of maltose, sucrose, and lactose. Identify which is non-reducing.",
                polysaccharides:             "Name the two storage polysaccharides and the two structural polysaccharides covered in this lesson. For each, state the organism in which it is found.",
                metabolism:                  "State the net ATP yield of glycolysis. Name the two hormones that regulate blood glucose and the cell type that secretes each."
            }
        },

        understand: {
            description: "Explain the relationship between carbohydrate structure and function — connect glycosidic bond type to polymer geometry, connect branching to mobilisation speed, and interpret why the same monomer produces fundamentally different polymers.",
            cognitiveDemand: "Translation and interpretation. The student explains why structural features produce functional consequences, rather than simply listing those features.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a causal explanation, not a list. 'Glycogen is more branched than starch' is remember. 'Glycogen is more branched than starch because more non-reducing ends allow more simultaneous phosphorylase action, enabling faster glucose release to meet sudden metabolic demands in animals' is understand.",
            examples: {
                carbohydrateBasics:          "Explain why sucrose is a non-reducing sugar, with specific reference to the bond type between its monomers.",
                polysaccharideStructure:     "Explain, from the geometry of the glycosidic bond, why β(1→4) cellulose forms rigid fibres while α(1→4) starch forms soluble coils.",
                bloodGlucoseRegulation:      "Explain the reciprocal regulation of glycogen synthase and glycogen phosphorylase by insulin, connecting each molecular effect to its physiological consequence.",
                anomers:                     "Explain what mutarotation is and why it does not occur in sucrose.",
                fiberDigestion:              "Explain why humans cannot digest cellulose despite possessing amylase, connecting the answer to enzyme specificity and glycosidic bond type."
            }
        },

        apply: {
            description: "Use carbohydrate chemistry rules and metabolic principles to solve a novel problem: predict the result of a chemical test, calculate a product yield, trace a metabolic pathway, or classify an unknown sugar.",
            cognitiveDemand: "Procedure execution in a novel context. The student selects the applicable rule or principle, applies it correctly, and produces a specific prediction, classification, or numerical result.",
            verbs: ["Predict", "Classify", "Calculate", "Determine", "Trace", "Apply", "Identify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'List the Benedict's test results for glucose, sucrose, and lactose' is a recall task if memorised. 'Predict the Benedict's test result for trehalose (α(1→1)α) and justify your prediction' is apply — the student must use the rule about anomeric carbons to derive the answer for an unfamiliar sugar.",
            examples: {
                reducingSugars:              "Predict whether cellobiose (two glucose units linked β(1→4)) would give a positive or negative Benedict's test. Show your reasoning step by step.",
                glycolysis:                  "Trace the fate of carbons 1–3 of glucose through glycolysis to pyruvate, identifying at which step they are incorporated.",
                iodineTest:                  "Predict whether amylopectin, glycogen, or cellulose would give the strongest colour reaction with iodine. Justify using molecular geometry.",
                bloodGlucose:               "A patient eats a meal rich in simple carbohydrates. Trace the hormonal and cellular events from blood glucose rise to glycogen storage in skeletal muscle, naming each molecule, receptor, and enzyme involved.",
                sugarClassification:         "Classify each of the following as aldose or ketose, and by carbon number: ribose, xylulose, galactose, erythrose. Identify which are pentoses."
            }
        },

        analyze: {
            description: "Break down experimental or clinical data involving carbohydrates, identify patterns in structural or metabolic information, and draw conclusions that were not given. The student works from evidence to interpretation.",
            cognitiveDemand: "Decomposition and inference. The student is given data or a scenario and must determine what it means — reaching a conclusion that was not stated and justifying it from the evidence.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Compare"],
            whatDistinguishesThisLevel: "Analyze requires reasoning from evidence to conclusion. Given a table showing that an unknown polysaccharide stains blue-black with iodine, is digested by amylase, and forms a precipitate with Fehling's after hydrolysis, deduce its identity — this requires using multiple evidence streams simultaneously, not applying a single formula.",
            examples: {
                unknownSugar:                "An unknown disaccharide gives a positive Benedict's test, is hydrolysed by β-galactosidase into two hexoses, and has a specific rotation indicating one galactose unit. Identify the disaccharide and justify your reasoning using all three pieces of evidence.",
                polysaccharideData:          "An unknown polysaccharide is resistant to human amylase, gives no colour with iodine, forms straight chains visible by electron microscopy, and contains only glucose. Analyse the data to identify the polysaccharide and determine its glycosidic bond type.",
                metabolicData:              "A patient has persistently elevated blood glucose, elevated HbA1c, normal fasting glucagon levels, and impaired GLUT4 surface expression in muscle biopsies. Analyse these findings to identify the most likely metabolic disorder and the step at which regulation has failed.",
                anomericAnalysis:            "Freshly dissolved glucose has an optical rotation of +112°. After 24 hours in solution, the rotation stabilises at +52.7°. Analyse what has happened, identify the two species present at equilibrium, and calculate the approximate ratio of α to β anomer.",
                glycogenData:               "Liver glycogen from a fasting patient shows normal total glycogen content but abnormally long branch chains (branching every ~30 residues instead of every ~10). Identify the most likely enzyme deficiency and predict the clinical consequence for glucose mobilisation speed."
            }
        },

        evaluate: {
            description: "Make a supported judgement about a claim, experimental conclusion, or clinical strategy involving carbohydrates. The student applies criteria, identifies flaws, and defends a position with molecular justification.",
            cognitiveDemand: "Judgement with justification. The student identifies errors or limitations, explains the criterion by which they fail, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Defend", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires engagement with a claim, not just restatement of correct information. 'A student claims cellulose and starch are nutritionally equivalent because they are both glucose polymers — evaluate this claim' requires the student to identify the flaw (β vs α bond type, digestibility), explain the criterion (humans lack cellulase), state the functional consequence (cellulose is indigestible fibre), and conclude whether the claim is valid and in what respect.",
            examples: {
                claimEvaluation:             "A student claims: 'Glycogen is a better long-term energy store than starch because it is more branched.' Evaluate this claim — assess whether branching improves energy storage capacity or mobilisation speed, and determine whether the conclusion (better long-term store) follows from the evidence.",
                testLimitation:              "Evaluate the Benedict's test as a diagnostic tool for all reducing sugars, identifying two circumstances in which it could give false negative results and two in which it could give misleading results.",
                dietaryClaim:               "Evaluate the claim that 'fructose is healthier than glucose because it has a lower glycaemic index.' Your evaluation must address: glycaemic index as a measure, hepatic fructose metabolism, and the distinction between short-term blood glucose response and long-term metabolic consequence.",
                sucroseExperiment:           "A researcher concludes that sucrose is 'safer' for diabetics than glucose because it fails the Benedict's test. Evaluate this conclusion in terms of what the Benedict's test actually measures, what happens when sucrose is digested, and whether the reasoning is valid.",
                glycogenStorageDisease:      "Evaluate whether enzyme replacement therapy (ERT) is mechanistically appropriate for Von Gierke disease (glucose-6-phosphatase deficiency). Consider where the deficient enzyme acts, the subcellular compartment involved, and the challenges of delivering the replacement enzyme to the correct location — and compare this to why ERT works in Pompe disease."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a mechanistic diagram, a clinical management plan, a derived model, or a novel explanatory framework that integrates multiple carbohydrate concepts.",
            cognitiveDemand: "Synthesis and original production. The student produces an internally consistent, scientifically plausible output that combines multiple concepts and directly addresses a specific goal.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original synthesis. 'Design an experiment to determine whether an unknown polysaccharide is a storage or structural polymer' requires the student to specify iodine test, amylase susceptibility, solubility assay, electron microscopy, and acid hydrolysis followed by monosaccharide identification — integrating multiple techniques and reasoning about what each result would mean.",
            examples: {
                experimentalDesign:          "Design a complete experiment to determine whether an unknown polysaccharide from a newly discovered marine organism is: (a) composed of glucose or another monomer; (b) linked by α or β bonds; (c) branched or unbranched; (d) digestible by humans. Specify the test or technique for each question, the expected positive and negative results, and appropriate controls.",
                metabolicPathwayDiagram:     "Construct a fully annotated diagram of blood glucose regulation showing the complete response to: (a) ingestion of a high-carbohydrate meal; (b) a 24-hour fast. For each phase, indicate hormone levels, direction of glycogen flux, GLUT4 localisation, and net effect on blood glucose. Annotate each regulatory step as fast/slow and reversible/irreversible.",
                drugTargetProposal:          "Propose a drug strategy for managing type 2 diabetes by targeting carbohydrate digestion rather than insulin signalling. Your proposal must: (a) identify the specific digestive enzyme to inhibit; (b) explain the expected effect on blood glucose kinetics after a meal; (c) predict side effects from the accumulation of undigested carbohydrate in the colon; (d) classify the inhibition type and explain why it should be competitive rather than irreversible.",
                classificationKey:           "Construct a decision-tree classification key that a student could use to identify any carbohydrate as a monosaccharide, disaccharide, or polysaccharide, and further classify it as storage or structural, reducing or non-reducing, digestible or indigestible. Use only yes/no questions and ensure the key correctly classifies: glucose, sucrose, lactose, amylose, cellulose, glycogen, and chitin.",
                glycanPathwayMap:            "Design a concept map connecting: monosaccharide structure → glycosidic bond type → polymer geometry → digestibility → metabolic fate → blood glucose impact → hormonal response. For each arrow, write a one-sentence mechanistic explanation. The map must be consistent across all seven nodes."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name glucose, sucrose, and starch as carbohydrates but cannot classify them by polymer size",
                "Knows that starch is 'energy storage' without understanding why the α(1→4) bond enables this",
                "Confuses cellulose and starch as interchangeable glucose polymers",
                "Cannot explain why sucrose is non-reducing",
                "Does not connect glycogen branching to mobilisation speed",
                "Treats carbohydrate digestion as beginning in the stomach"
            ],
            immediateNextSteps: [
                "Draw glucose in both open-chain (Fischer) and ring (Haworth) form. Label: anomeric carbon (C1), hydroxyl positions, α vs β configuration. Practise until you can reproduce both without looking.",
                "Build the mono/di/polysaccharide ladder: write the three sizes, the number of units in each, and one example of each. Test yourself by naming the building blocks of starch, sucrose, and lactose from memory.",
                "Cement the α vs β bond rule with a single memorable sentence: 'Alpha coils (starch/glycogen — digestible); Beta bars (cellulose/chitin — structural, indigestible).' Write this on every polysaccharide question until automatic.",
                "For reducing vs non-reducing: draw sucrose and circle both anomeric carbons engaged in the glycosidic bond. Draw lactose and circle only the galactose anomeric carbon — point to the free glucose anomeric OH. One diagram explains the difference more powerfully than any definition.",
                "Locate salivary amylase, pancreatic amylase, and brush-border disaccharidases on a diagram of the gastrointestinal tract. Connect each enzyme to its substrate and product. Digestion of starch begins in the mouth, not the stomach."
            ],
            misconceptionsToAddress: [
                "Cellulose and starch are both just glucose → α/β rule above",
                "Sucrose is reducing because it contains two sugars → anomeric carbon diagram above",
                "Starch digestion begins in the stomach → GI tract enzyme localisation diagram above"
            ]
        },

        developing: {
            characteristics: [
                "Correctly states glycosidic bond types for major disaccharides and polysaccharides",
                "Distinguishes reducing from non-reducing sugars in most cases but struggles with novel disaccharides",
                "Understands that α and β bonds differ in geometry but cannot explain the structural consequence for polymer shape",
                "Knows insulin promotes glycogen synthesis and glucagon promotes breakdown but cannot trace the molecular mechanism",
                "Can name the two components of starch (amylose and amylopectin) but confuses their relative proportions and structure",
                "Describes cellulose as 'indigestible' without connecting this to lack of cellulase enzyme specificity"
            ],
            immediateNextSteps: [
                "For α vs β structural consequences: draw two glucose units linked α(1→4) and show they point in the same direction (coil). Draw two linked β(1→4) and show the alternating 180° flip (flat chain). This one drawing converts abstract bond-type knowledge into spatial understanding.",
                "For reducing sugar predictions in novel cases: establish the one-step rule — 'Is the anomeric carbon (C1 in aldoses) involved in the glycosidic bond? If yes → non-reducing. If no → reducing.' Apply this rule to three unfamiliar disaccharides before moving on.",
                "For amylose vs amylopectin: create a two-entry table with columns: unbranched/branched; bond types; percentage of starch; helix-forming (iodine reaction). Amylose: unbranched, α(1→4) only, ~20%, helix (blue-black with iodine). Amylopectin: branched, α(1→4) with α(1→6), ~80%, partial helix (purple/reddish with iodine).",
                "For insulin-glucagon mechanism: draw the cascade for glucagon alone. Glucagon → receptor → adenylyl cyclase → cAMP → PKA → phosphorylate glycogen phosphorylase (activate) AND glycogen synthase (inactivate). Draw arrows in both directions from PKA. Add insulin as PKA's opponent (activates phosphatase, reverses phosphorylation). Master one direction before adding the other.",
                "For cellulase specificity: connect to the enzyme lesson — cellulase would need a β-specific active site; human amylase has an α-specific active site. Use the induced-fit model to explain why amylase cannot cleave β bonds even though both are glucose polymers."
            ],
            misconceptionsToAddress: [
                "α and β bonds differ only in name, not structure → two-unit geometry drawing above",
                "Amylose is ~80% of starch → correct to ~20%; amylopectin is ~80%",
                "Insulin directly activates glycogen synthase → it activates by triggering dephosphorylation via a kinase cascade, not by binding glycogen synthase directly"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly draws Haworth projections of α and β anomers of glucose and labels all positions",
                "Explains the structural basis of cellulose rigidity and starch solubility from glycosidic bond geometry",
                "Traces the insulin signalling cascade from receptor to GLUT4 surface expression and glycogen synthase activation",
                "Predicts the result of Benedict's and iodine tests for any carbohydrate given its structure",
                "Connects glycogen branching frequency to mobilisation speed with mechanistic reasoning",
                "Classifies the six enzyme classes relevant to carbohydrate metabolism and names specific examples"
            ],
            immediateNextSteps: [
                "Extend to glycoconjugates: investigate N-linked vs O-linked glycosylation — where each occurs (ER/Golgi), what amino acid accepts the sugar, and one functional example of each type. Connect to ABO blood groups.",
                "Explore the Leloir pathway of galactose metabolism: galactose → galactose-1-phosphate → glucose-1-phosphate via galactose-1-phosphate uridylyltransferase. Identify where this pathway fails in galactosaemia and predict the accumulated metabolite and its toxic consequences.",
                "Investigate the pentose phosphate pathway as an alternative fate for glucose-6-phosphate: identify its two products (NADPH and ribose-5-phosphate) and explain why RBCs depend on it for glutathione regeneration.",
                "Calculate the theoretical ATP yield from complete oxidation of one glucose molecule (glycolysis + TCA + oxidative phosphorylation) and evaluate how accurate the traditional '38 ATP' figure is under realistic mitochondrial conditions.",
                "Investigate the glycaemic index of amylose vs amylopectin: predict which would have a higher GI and explain using the relationship between branching, surface area available for amylase, and rate of glucose release."
            ],
            misconceptionsToAddress: [
                "Glycogen is stored primarily in muscle → liver glycogen is the blood glucose reserve; muscle glycogen is local fuel only",
                "All dietary carbohydrates are equivalent metabolically → fructose bypasses PFK-1 and is metabolised differently from glucose"
            ]
        },

        expert: {
            characteristics: [
                "Explains the anomeric effect and chair conformations of pyranose rings without reference to notes",
                "Derives the expected NMR or optical rotation changes during mutarotation and connects them to α/β equilibrium constants",
                "Analyses glycogen storage disease phenotypes from enzyme function principles",
                "Connects carbohydrate metabolism to lipid metabolism through acetyl-CoA and malonyl-CoA",
                "Critically evaluates clinical studies on glycaemic index, dietary fibre, and carbohydrate restriction"
            ],
            immediateNextSteps: [
                "Derive the chair conformation of β-D-glucopyranose and explain why it is more stable than α-D-glucopyranose (all large substituents equatorial in β form vs one axial in α form). Connect this to why β-glucose is the predominant anomer in solution.",
                "Investigate the biosynthesis of glycogen using UDP-glucose as the activated donor: write the two-step reaction (glucose-1-phosphate + UTP → UDP-glucose + PPi; UDP-glucose + glycogen(n) → glycogen(n+1) + UDP). Explain why pyrophosphate hydrolysis drives the reaction forward.",
                "Critically evaluate the evidence for and against dietary carbohydrate restriction (ketogenic diet) for type 2 diabetes management — assess the metabolic rationale, the quality of randomised controlled trial evidence, and the long-term sustainability concerns.",
                "Investigate the glycan shield of SARS-CoV-2 spike protein: how dense N-linked glycosylation on the spike protein shields epitopes from antibody recognition, and how this affects vaccine design — connecting glycoprotein biochemistry to immunology."
            ],
            misconceptionsToAddress: [
                "Cellulose is completely inert in the colon → gut bacteria ferment soluble dietary fibre to short-chain fatty acids (acetate, propionate, butyrate) with significant metabolic and immune effects",
                "Insulin simply 'lowers blood sugar' → trace the full GLUT4 exocytosis pathway and glycogen synthase dephosphorylation cascade to appreciate the complexity of insulin action"
            ]
        }
    }
},


plantReproduction: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about plant reproductive structures, processes, and terminology from memory without requiring understanding of why they are true.",
                    cognitiveDemand: "Verbatim or near-verbatim recall of definitions, names, sequences, and structural components. No reasoning required.",
                    verbs: ["State", "Name", "List", "Identify", "Label", "Define", "Write"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'The stigma is where pollen lands' is remember-level. 'The stigma is where pollen lands because its sticky surface traps pollen grains, initiating germination' crosses into understand.",
                    examples: {
                        flowerStructure:   "Name the four whorls of a typical angiosperm flower in order from outermost to innermost. For each, state its function in one word.",
                        pollination:       "State the difference between self-pollination and cross-pollination. List three structural features of a wind-pollinated flower.",
                        fertilisation:     "Define double fertilisation. State the ploidy of the zygote and the primary endosperm nucleus produced.",
                        seedAndFruit:      "Name the three main components of a seed. State which part of the flower develops into the fruit.",
                        asexualReproduction: "List five methods of natural vegetative propagation. For each, name one example plant species."
                    }
                },

                understand: {
                    description: "Explain the meaning behind facts — connect structure to function, cause to effect, and explain WHY a biological process occurs as it does.",
                    cognitiveDemand: "Translation and interpretation. The student must supply the causal link, not merely reproduce the fact. A correct explanation that could not be produced by memorising a question-answer pair demonstrates understanding.",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
                    whatDistinguishesThisLevel: "Understand requires mechanism or reason. 'Wind-pollinated flowers have feathery stigmas' is remember. 'Wind-pollinated flowers have large, feathery stigmas that protrude from the flower to maximise the surface area available to intercept airborne pollen grains carried passively by air currents' is understand.",
                    examples: {
                        flowerStructure:   "Explain why insect-pollinated and wind-pollinated flowers have such different structural features. Your answer must connect each feature to the physical requirements of its pollination mechanism.",
                        pollination:       "Explain why cross-pollination is generally favoured over self-pollination in evolutionary terms, identifying the genetic consequence of each.",
                        fertilisation:     "Explain why double fertilisation is considered an evolutionary advantage for angiosperms over gymnosperms. Your answer must address the function of endosperm and why its timing is important.",
                        seedAndFruit:      "Explain how the structure of a seed is related to its function of surviving dormancy and enabling germination. Address testa, endosperm, and cotyledons specifically.",
                        asexualReproduction: "Explain why clonal populations produced by asexual reproduction are more vulnerable to disease than genetically diverse sexually reproducing populations."
                    }
                },

                apply: {
                    description: "Use known concepts, classifications, and principles to solve a new problem or make a prediction in an unfamiliar context.",
                    cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct concept and applies it to produce a specific answer, prediction, or classification.",
                    verbs: ["Predict", "Classify", "Determine", "Apply", "Calculate", "Identify from description"],
                    whatDistinguishesThisLevel: "Apply requires a new context. 'Classify a described flower as insect- or wind-pollinated based on given features' requires the student to match features to the correct category — they cannot answer by reproducing a memorised example.",
                    examples: {
                        flowerStructure:   "A plant biologist describes a flower as follows: petals absent; anthers hanging on long, loose filaments; stigma large and feathery; pollen smooth and produced in large quantities; no scent or nectar. Classify this flower as insect- or wind-pollinated and justify your classification using each described feature.",
                        pollination:       "Predict what would happen to fruit production in an apple orchard if all pollinating insects were removed from the orchard during flowering season. Apply your knowledge of apple flower structure and pollination mechanism to your answer.",
                        fertilisation:     "A pollen grain lands on the stigma of a compatible flower. Describe in order the sequence of events from pollen landing to the completion of double fertilisation, naming every structure involved.",
                        seedAndFruit:      "A student finds a fruit with a hard, stony layer surrounding a single seed, enclosed in a fleshy outer layer. Identify the fruit type, name the layers of the pericarp, and suggest a likely dispersal mechanism.",
                        asexualReproduction: "A horticulturalist wishes to produce 10,000 genetically identical plants of a rare orchid variety in six months. Identify the most appropriate method of vegetative propagation, stating two reasons why this method is preferred over alternatives."
                    }
                },

                analyze: {
                    description: "Break down experimental data or a complex scenario into its components, identify patterns, and draw conclusions from evidence. The student moves from data to interpretation.",
                    cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion that was not given to them and justifies it from provided evidence.",
                    verbs: ["Deduce", "Analyse", "Identify from data", "Determine from evidence", "Distinguish", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion, not from formula to answer. 'Given pollen germination data across pH levels, determine the optimal conditions and explain the pattern' requires the student to read data, identify a pattern, and connect it to biological mechanism.",
                    examples: {
                        flowerStructure:   "A study records pollen tube germination rates for four plant species across pH 4–10 and temperatures 10–40°C, with data shown in a table. For each species, identify the optimal conditions. Compare the optimal conditions across species and deduce whether the species are adapted to the same or different habitats.",
                        pollination:       "Pollen traps placed in three locations (woodland, meadow, roadside) show the following pollen grain counts per cubic metre of air over five days in June. Analyse the data to determine which location has the greatest wind-pollinated plant diversity, and what the implications are for hay fever sufferers in each location.",
                        fertilisation:     "An experiment tracks radioactively labelled carbon-14 from a ¹⁴C-labelled glucose solution applied to leaves, following its incorporation into developing seeds over 14 days post-pollination. The data show ¹⁴C first appears in the endosperm, then in the embryo, then in the cotyledons. Analyse what this pattern reveals about the sequence and direction of nutrient flow during seed development.",
                        seedAndFruit:      "Seeds of three species are tested for germination rate at different temperatures (5°C, 15°C, 25°C, 35°C) and light conditions (light vs dark). Analyse the data to classify each seed as requiring warm stratification, cold stratification, or light for germination, and connect each requirement to the likely ecological conditions under which the species naturally germinates.",
                        asexualReproduction: "A strawberry grower records fruit yield (kg per plant) and runner production (number per plant) over four years in an unmanaged bed. Analyse the data showing declining yield alongside increasing runner production and explain the biological mechanism responsible for the observed trade-off."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity of a claim, the adequacy of an experimental design, or the suitability of a reproductive strategy for a given context.",
                    cognitiveDemand: "Judgement with justification. The student identifies an error, limitation, or trade-off; explains the criterion by which it fails or succeeds; and often states what would be better.",
                    verbs: ["Evaluate", "Critique", "Assess", "Judge", "Justify a choice", "Defend", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating a correct fact is understand-level. Evaluate means: identifying a position, weighing evidence against criteria, and concluding with a justified verdict.",
                    examples: {
                        flowerStructure:   "A student claims that insect-pollinated flowers are more evolutionarily advanced than wind-pollinated flowers because they are more complex. Evaluate this claim, addressing what 'evolutionary advancement' means biologically and whether complexity is an appropriate criterion.",
                        pollination:       "A conservationist proposes hand-pollinating apple trees in an orchard suffering from bee decline, modelling the approach used in commercial vanilla production. Evaluate whether this is a scalable or sustainable long-term solution for apple orchards, using biological and practical criteria.",
                        fertilisation:     "Evaluate whether the endosperm of angiosperms represents an evolutionary improvement over the equivalent nutritive tissue of gymnosperms. Your evaluation must address the timing of nutritive tissue development, the energy cost to the parent plant, and the developmental flexibility conferred.",
                        seedAndFruit:      "Two crop breeders debate whether to develop a seedless (parthenocarpic) variety of a fruit crop vs maintaining a seeded variety. Evaluate the biological advantages and disadvantages of each approach from the perspective of the plant, the farmer, and the consumer.",
                        asexualReproduction: "Evaluate the claim: 'Tissue culture is the superior method of vegetative propagation for all commercially important plant species.' Your evaluation must address genetic diversity, disease risk, scalability, cost, and at least two specific crop examples where tissue culture is and is not the best choice."
                    }
                },

                create: {
                    description: "Generate something new: an experimental design, a management strategy, an annotated diagram, a comparative analysis, or an original biological model integrating multiple concepts.",
                    cognitiveDemand: "Synthesis and original production. The student produces an output that integrates multiple concepts, is internally consistent, scientifically plausible, and addresses the brief completely.",
                    verbs: ["Design", "Propose", "Construct", "Develop", "Plan", "Formulate", "Produce"],
                    whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design an experiment to determine whether a plant species is self- or cross-pollinated' requires the student to specify controls, measurements, replication, and interpretation — integrating flower biology, pollination, and experimental design.",
                    examples: {
                        flowerStructure:   "Design a dichotomous identification key that a student could use to classify an unknown flowering plant as insect-pollinated or wind-pollinated using only macroscopic floral features observable without a microscope. The key must correctly classify at least four species from each category.",
                        pollination:       "Propose an experiment to determine whether a given plant species is obligately cross-pollinating, capable of self-pollination, or self-incompatible. Specify: treatments, controls, measurements, replication, and how you would interpret each possible outcome.",
                        fertilisation:     "Construct a fully annotated step-by-step diagram of double fertilisation in an angiosperm, from pollen grain arrival on the stigma to formation of the zygote and endosperm. Include the ploidy level at every stage, the name of every structure, and an arrow for each cellular event.",
                        seedAndFruit:      "Design a comparative study to test whether seed dispersal mechanism (wind vs animal-internal vs animal-external vs explosive) affects the distance of offspring establishment from the parent plant. Specify: plant species selection criteria, measurement methodology, sample size, statistical analysis, and expected outcomes based on biological reasoning.",
                        asexualReproduction: "Formulate a five-year propagation and disease management plan for a commercial banana plantation facing the threat of Tropical Race 4. Your plan must incorporate: choice of propagation method, genetic diversity strategy, disease monitoring, contingency for outbreak, and integration of biotechnology approaches where appropriate."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can name some flower parts (petal, stamen, carpel) but confuses anther with stamen and stigma with style",
                        "Equates pollination with fertilisation — does not recognise them as separate sequential events",
                        "Cannot explain double fertilisation or state the ploidy of endosperm",
                        "Confuses bulb, tuber, corm, and rhizome as 'all underground roots'",
                        "Understands that seeds contain an embryo but cannot describe testa or endosperm roles",
                        "Cannot explain why asexual reproduction reduces genetic diversity"
                    ],
                    immediateNextSteps: [
                        "Before anything else: draw and label a simple flower cross-section from memory using only five labels — anther, filament, stigma, style, ovary. Do not add more until these five are automatic. Check that anther is always on the stamen and stigma is always on the carpel.",
                        "Write the sequence 'pollination → pollen tube growth → fertilisation' on every question involving reproduction until the separation of these events is internalised. Pollination = pollen landing; fertilisation = gamete fusion inside ovule.",
                        "For underground storage organs: draw all five side by side (bulb, corm, tuber, rhizome, stolon) with one defining feature labelled. Key distinction: bulb has fleshy leaf scales; corm is solid; tuber is swollen stem with 'eyes'; rhizome is horizontal stem; stolon is above-ground runner.",
                        "For double fertilisation: use the '1+2=3' memory anchor. One sperm + one egg = zygote (2n). One sperm + two polar nuclei = endosperm (3n). Write the numbers every time until ploidy is automatic.",
                        "For asexual reproduction and diversity: use the photocopier analogy. A photocopier produces identical copies — any defect in the original is reproduced in every copy. Sexual reproduction shuffles the deck."
                    ],
                    misconceptionsToAddress: [
                        "Pollination = fertilisation → sequence writing exercise (above)",
                        "Underground storage organs are roots → five-organ drawing (above)",
                        "Endosperm is diploid → '1+2=3' anchor (above)"
                    ]
                },

                developing: {
                    characteristics: [
                        "Correctly names and locates all four floral whorls and their components",
                        "Distinguishes pollination from fertilisation but cannot describe pollen tube growth in detail",
                        "Can state the two events of double fertilisation and their ploidy but cannot explain the significance of endosperm",
                        "Correctly classifies most methods of vegetative propagation with examples",
                        "Can list advantages of asexual vs sexual reproduction but struggles to evaluate which is better in a given scenario",
                        "Cannot connect alternation of generations to the specific structures of the angiosperm life cycle"
                    ],
                    immediateNextSteps: [
                        "For pollen tube growth: draw the sequence as a six-panel comic strip — pollen on stigma; germination; tube enters style; generative cell divides; tube enters micropyle; double fertilisation. Add one label per panel.",
                        "For endosperm significance: connect to the gymnosperm comparison. In gymnosperms, nutritive tissue (megagametophyte) forms before fertilisation — wasted if fertilisation does not occur. Endosperm forms only after fertilisation — energetically economical. Write this comparison once for each exam review.",
                        "For alternation of generations: draw two circles labelled 'sporophyte (2n)' and 'gametophyte (n)'. In the angiosperm circle for gametophyte, write only 'pollen grain (3 cells)' and 'embryo sac (7 cells)'. This visualises how reduced the gametophyte is without needing the full moss/fern comparison.",
                        "For scenario-based evaluation: practice the 'stable vs changing environment' decision rule. Stable, favourable environment → asexual faster and more efficient. Changing environment or new disease → sexual better due to diversity. Apply this rule to five novel scenarios."
                    ],
                    misconceptionsToAddress: [
                        "Pollen tube detail gaps → six-panel drawing (above)",
                        "Endosperm timing significance → gymnosperm comparison (above)",
                        "Alternation of generations abstraction → reduced circle diagram (above)"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Fully describes double fertilisation including ploidy at every stage",
                        "Compares insect- and wind-pollinated flowers across five or more structural features",
                        "Accurately explains all five natural vegetative propagation methods and tissue culture",
                        "Connects seed dormancy mechanisms to ecological context",
                        "Correctly identifies fruit types from descriptions and connects pericarp layers to floral origins",
                        "Can evaluate advantages and disadvantages of sexual vs asexual reproduction in a specific ecological scenario"
                    ],
                    immediateNextSteps: [
                        "Extend fruit knowledge to pericarp layer anatomy: for a drupe (cherry), identify exocarp (skin), mesocarp (fleshy part), and endocarp (stone) and connect each layer to the ovary wall layers. This is the detail that distinguishes proficient from expert at exam level.",
                        "Research self-incompatibility mechanisms: S-locus genetics in Brassica (sporophytic SI) vs Solanaceae (gametophytic SI). Understand how the stigma 'rejects' self-pollen biochemically — this extends understanding of cross-pollination from descriptive to mechanistic.",
                        "Practice analysing germination data: given a table of germination percentage vs temperature and light conditions for five species, identify the dormancy mechanism and ecological niche of each. This bridges seed biology to ecology.",
                        "Connect tissue culture hormone ratios to organ development: high auxin:cytokinin → roots; high cytokinin:auxin → shoots. Derive why the ratio must change at each stage of tissue culture. This is the biochemical mechanism behind the practical technique."
                    ],
                    misconceptionsToAddress: [
                        "Pericarp = just 'fruit flesh' → three-layer anatomy of drupe (above)",
                        "Self-incompatibility as 'just a barrier' → S-locus mechanism (above)"
                    ]
                },

                expert: {
                    characteristics: [
                        "Integrates plant reproductive biology with genetics, ecology, and biotechnology",
                        "Can design experiments to test pollination mechanisms, germination requirements, or propagation efficiency",
                        "Analyses published data on pollinator decline, crop yield, and genetic diversity of clonal crops",
                        "Connects alternation of generations to evolutionary trends across land plant lineages",
                        "Evaluates biotechnological interventions (tissue culture, GM crops, synthetic pollination) against biological, ethical, and practical criteria"
                    ],
                    immediateNextSteps: [
                        "Investigate the molecular biology of pollen-stigma recognition: read a primary paper on LURE peptides and pollen tube guidance. Understand the calcium gradient signalling mechanism and how it fails in interspecific crosses.",
                        "Analyse a case study of crop genetic erosion: research the history of the Irish potato famine in the context of clonal propagation and disease. Connect the 1840s disaster to modern banana TR4 concerns — what has and has not been learned?",
                        "Explore epigenetic inheritance in clonally propagated plants: investigate whether tissue culture-produced plants can show somaclonal variation and what causes it. This challenges the assumption that asexual reproduction always produces genetically identical offspring.",
                        "Evaluate CRISPR applications in plant reproduction: how can CRISPR be used to introduce resistance genes without the full sexual cycle? What are the implications for the 'asexual cloning' paradigm in modern crop production?"
                    ],
                    misconceptionsToAddress: [
                        "Clonal plants are always genetically identical → somaclonal variation and epigenetic drift (above)",
                        "GM crops are a simple extension of traditional breeding → contrast mechanisms of sexual hybridisation vs Agrobacterium transformation (above)"
                    ]
                }
            }
        },




plantAnatomy: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about plant cell types, tissue systems, and organ anatomy from memory without requiring understanding of why they are true. The student reproduces accurate labels, definitions, and lists.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. Correct identification of cell type from a name, or correct naming of a structural feature from its label, is the benchmark.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response names or defines correctly but provides no explanation. 'The Casparian strip is a band of suberin in the endodermis' is remember. 'The Casparian strip forces water through the symplast because it blocks the apoplastic pathway' crosses into understand.",
            examples: {
                cellTypesAndTissues: "List the three cell types found in ground tissue and state whether each is living or dead at maturity.",
                rootStructure:       "Label the following structures on a root cross-section diagram: epidermis, cortex, endodermis, pericycle, xylem, phloem.",
                stemStructure:       "State two differences between the arrangement of vascular bundles in a dicot stem and a monocot stem.",
                leafStructure:       "Name the two layers of mesophyll tissue and state which is closer to the upper epidermis.",
                transportSystems:    "List the cell types that make up xylem tissue. For each, state whether it is living or dead at functional maturity."
            }
        },

        understand: {
            description: "Explain the relationship between a structural feature and its function — connect anatomy to physiology. The student must supply a causal mechanism, not merely reproduce a definition.",
            cognitiveDemand: "Translation and interpretation. The student explains WHY a structure is shaped or positioned as it is, or what would go wrong if it were absent. A correct mechanistic explanation that could not have been produced by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a mechanism or a causal link. 'The palisade mesophyll is near the upper epidermis' is remember. 'The palisade mesophyll is positioned near the upper epidermis because it receives the most direct sunlight, maximising light capture for photosynthesis' is understand. The student must supply the functional reason.",
            examples: {
                cellTypesAndTissues: "Explain why collenchyma is an appropriate support tissue for young, elongating stems but sclerenchyma is not. Your answer must address cell wall chemistry and the requirements of a growing organ.",
                rootStructure:       "Explain how the Casparian strip enables the plant to regulate ion uptake selectively. Your answer must describe both the apoplastic and symplastic pathways and identify which one the Casparian strip blocks.",
                stemStructure:       "Explain why the peripheral location of vascular bundles in a dicot stem provides greater mechanical resistance to bending than a central location would, using the concept of stress distribution.",
                leafStructure:       "Explain why the spongy mesophyll contains large intercellular air spaces and why this is essential for photosynthesis. Identify the specific gas exchange process that depends on these spaces.",
                transportSystems:    "Explain why xylem vessel elements are dead at maturity and why this is a functional requirement rather than a limitation. Your answer must reference the physics of water transport."
            }
        },

        apply: {
            description: "Use anatomical principles, structural rules, or transport mechanisms to solve a problem in a new context. The student selects the correct concept and applies it to produce a prediction, diagram, or calculation.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which anatomical principle applies, sets up the reasoning correctly, and draws a specific conclusion. A common failure: knowing the structure but applying it to the wrong context.",
            verbs: ["Predict", "Determine", "Sketch", "Apply", "Use", "Identify", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new context. 'Predict the effect on ion uptake if the Casparian strip is experimentally destroyed' requires the student to apply the apoplast/symplast concept to a scenario not given in notes. This is different from understanding, which would simply explain the Casparian strip's normal function.",
            examples: {
                cellTypesAndTissues: "A botanist examines a cross-section and identifies cells with unevenly thickened walls (corners only), no lignin, and living cytoplasm. Classify these cells and predict where in the plant they are most likely found.",
                rootStructure:       "Predict three anatomical changes you would observe in the roots of a plant adapted to highly saline soils, and explain how each change helps the plant survive ionic stress.",
                stemStructure:       "A student is given an unlabelled stem cross-section showing vascular bundles scattered throughout the ground tissue with no pith or cortex distinction. Determine whether the plant is a dicot or monocot and justify your answer with two pieces of anatomical evidence.",
                leafStructure:       "Predict how the leaf anatomy of a deep-shade plant would differ from a full-sun plant in three specific features. For each predicted difference, apply the principle of light capture or gas exchange.",
                transportSystems:    "Apply the pressure flow hypothesis to predict what will happen to phloem transport in a leaf that has been kept in complete darkness for 48 hours. Identify specifically which part of the source-to-sink mechanism is disrupted."
            }
        },

        analyze: {
            description: "Break down anatomical data, micrographs, or experimental results into components, identify patterns, and draw conclusions from evidence. The student moves from observation to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or images and must derive what they mean. Key marker: the student reaches a conclusion not given to them and justifies it from the evidence presented.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given a leaf cross-section micrograph, identify the plant's water availability environment' requires the student to examine features (cuticle thickness, stomatal position, mesophyll arrangement, trichomes) and deduce the habitat — a conclusion not directly labelled on the image.",
            examples: {
                cellTypesAndTissues: "A micrograph shows cells with very thick walls that occupy most of the cell volume, virtually no visible cytoplasm, and a small dark-stained lumen. Analyse what cell type this is, justify using three visible features, and state the functional implication of the near-zero lumen volume.",
                rootStructure:       "Two root cross-sections are provided: Section A has a large pith, numerous xylem poles, and no visible separation of cortex. Section B has a star-shaped xylem core with 4 arms, no pith, and a clearly defined endodermis. Analyse which belongs to a monocot and which to a dicot. Justify using the xylem arrangement specifically.",
                stemStructure:       "Annual ring data from a tree core show: rings 1–10 average 3.2 mm; rings 11–13 average 0.8 mm; rings 14–20 average 3.0 mm. Analyse what these data suggest about the environmental history of the tree. Identify what additional information you would need to confirm your interpretation.",
                leafStructure:       "A leaf cross-section micrograph shows: stomata only on the lower surface, deeply sunken below the epidermal surface, with numerous unicellular hairs filling the crypt, a very thick cuticle on the upper surface, and dense palisade tissue extending nearly three-quarters of the leaf depth. Analyse the likely habitat of this plant and identify which specific feature provides the strongest evidence.",
                transportSystems:    "An experiment measures the solute concentration in xylem sap collected from a cut stem at different times of day: 6 AM: 0.3 mM K⁺; 12 noon: 0.8 mM K⁺; 6 PM: 0.5 mM K⁺; midnight: 0.2 mM K⁺. Analyse what drives the midday peak in K⁺ concentration and explain how root anatomy contributes to the diel (daily) pattern."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, the adequacy of a structure-function explanation, or the quality of experimental reasoning. The student must identify what is wrong or incomplete, explain why using anatomical criteria, and state what would be correct.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw, explains the criterion by which it fails, and states the correct interpretation. Simply saying 'this is wrong' is not evaluate-level — the student must say why and how.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims xylem is living tissue — evaluate this.' The response must state it is incorrect (judgement), explain that xylem vessel elements and tracheids are dead at functional maturity because they undergo programmed cell death and wall lignification (criterion), and explain why being dead is functionally necessary (correction). Merely restating the definition without engaging with the claim is understand, not evaluate.",
            examples: {
                cellTypesAndTissues: "A student states: 'Sclerenchyma and collenchyma are both support tissues with thickened walls, so they can be used interchangeably in plant organs.' Evaluate this claim in full — identify what is correct, what is incorrect, explain the key chemical and functional differences, and give a specific example where substituting one for the other would fail.",
                rootStructure:       "A researcher claims: 'The Casparian strip prevents all water and mineral absorption by the plant.' Evaluate whether this claim is fully accurate, partially accurate, or entirely incorrect. Identify the specific error, explain what the Casparian strip actually controls, and state what the researcher has conflated.",
                stemStructure:       "Evaluate the claim: 'Annual rings can always be used to determine the precise age of any tree.' Identify the conditions under which this is valid, the conditions under which it fails, and give a specific anatomical reason why ring-counting is unreliable in certain climates.",
                leafStructure:       "A student examining a leaf cross-section states: 'This plant must be a xerophyte because it has a thick cuticle.' Evaluate whether this is sufficient evidence to classify the plant as a xerophyte. Identify what additional anatomical features you would require as supporting evidence, and explain why any single feature is insufficient.",
                transportSystems:    "Evaluate the following statement: 'Phloem transport is passive because it moves solutes from high concentration (source) to low concentration (sink) along a concentration gradient, like diffusion.' Identify precisely what is correct and what is incorrect about this reasoning, and explain at the molecular and anatomical level where metabolic energy is required."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, an annotated diagram, a comparative model, or a novel adaptation proposal — by integrating multiple anatomical and physiological concepts. The output must be internally consistent, scientifically plausible, and address the brief completely.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, combining multiple concepts into a coherent whole. A strong create-level response cannot be produced by retrieving or calculating — it requires assembling a new plan or model.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output. 'Design an experiment to determine whether a plant's stomatal distribution is a xerophytic adaptation' requires specifying: which anatomical measurements to make, what comparison group to use, what controls are needed, how to quantify stomatal distribution, and what statistical test to apply. This cannot be answered by reproducing a memorised protocol.",
            examples: {
                cellTypesAndTissues: "Design an experiment using a dicot seedling to demonstrate that collenchyma provides flexible support while sclerenchyma provides rigid support. Specify: (a) what measurements you would make; (b) what treatments or manipulations you would apply; (c) what controls are needed; (d) what result would support the hypothesis that the two tissues serve distinct mechanical roles.",
                rootStructure:       "Construct a fully annotated diagram of a dicot root cross-section at the maturation zone. Your diagram must include and explain: the function of root hairs, the apoplastic and symplastic pathways from epidermis to xylem, the location and function of the Casparian strip, and the origin of lateral roots from the pericycle.",
                stemStructure:       "Propose a hypothesis explaining why monocots (e.g. grasses, palms) can achieve very tall growth despite lacking secondary thickening from a vascular cambium. Your proposal must reference specific anatomical features of monocot stems and calculate or estimate how vascular bundle density contributes to compressive strength.",
                leafStructure:       "Design the anatomy of an idealised leaf for a plant growing in a hot, dry, high-altitude environment with intense UV radiation. Specify the adaptive features of: (a) the epidermis and cuticle; (b) the mesophyll organisation; (c) the stomatal distribution and structure; (d) the vascular supply. For each feature, state the specific stress it addresses.",
                transportSystems:    "Construct a fully annotated flow diagram of the transpiration stream from soil water to atmospheric water vapour. At each stage, specify: the anatomical structure involved, the driving force (osmosis, cohesion-tension, diffusion), whether the pathway is apoplastic or symplastic, and one anatomical feature that regulates flow at that stage."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three tissue systems but cannot explain which cell types belong to each",
                "Confuses collenchyma and sclerenchyma; does not connect wall chemistry to mechanical properties",
                "Knows that roots absorb water but cannot explain the role of the endodermis or Casparian strip",
                "Can label 'xylem' and 'phloem' on a diagram but cannot state what distinguishes their cells",
                "Treats xylem and phloem as equivalent tubes; does not know that xylem cells are dead at maturity",
                "Cannot distinguish a dicot from a monocot cross-section"
            ],
            immediateNextSteps: [
                "Before any microscopy or diagrams, build a three-column table: tissue system | cell types | function. Fill it with only three rows (dermal, ground, vascular). Practise reproducing this table from memory before moving on.",
                "For collenchyma vs sclerenchyma: use one physical analogy — collenchyma = rubber (flexible, living); sclerenchyma = metal rod (rigid, dead). Write this on every diagram until the distinction is automatic.",
                "For the Casparian strip: draw the root as a castle — the endodermis is the castle wall. The Casparian strip is the sealed mortar that forces all visitors (water and ions) through the guarded gate (the cell membrane). Draw this analogy explicitly.",
                "For xylem: draw a cross-section and write 'DEAD' across the vessel elements in red. Then write: dead = hollow = efficient pipe. Do this three times before moving to transport mechanisms.",
                "For dicot vs monocot stems: draw one cross-section of each side-by-side with only vascular bundle positions marked. Use one rule: ring = dicot; scattered = monocot. Apply to five practice images before adding further detail."
            ],
            misconceptionsToAddress: [
                "Xylem cells are living → draw dead vessel elements (above)",
                "Collenchyma = sclerenchyma → rubber vs metal analogy (above)",
                "Casparian strip blocks all water → castle gate analogy (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can describe the Casparian strip and its function but confuses apoplastic and symplastic pathways under pressure",
                "Distinguishes collenchyma and sclerenchyma correctly most of the time but still confuses sclereids with fibres",
                "Can identify dicot vs monocot stem from a diagram but cannot explain the mechanical consequence of each arrangement",
                "Knows that stomata open and close but cannot connect guard cell turgor to the anatomy of the pore",
                "Can name xylem components (vessel elements, tracheids) but cannot explain why vessel elements are more efficient than tracheids"
            ],
            immediateNextSteps: [
                "For apoplast vs symplast: draw a root cell with two highlighted pathways in different colours — blue for apoplast (cell walls only), red for symplast (cytoplasm, plasmodesmata). Then add the Casparian strip as a physical barrier that blocks the blue pathway only. Practise annotating three diagrams this way.",
                "For fibres vs sclereids: use shape as the distinguishing rule — fibres are long and thin (like pencils); sclereids are short and variously shaped (like pebbles). Examine and sketch one of each under the microscope before memorising the definition.",
                "For guard cell anatomy: draw a kidney-shaped guard cell pair with the thick inner wall (facing the pore) explicitly labelled. Add arrows showing K⁺ entry → water entry by osmosis → cell swells → pore opens. Do not attempt to memorise the mechanism without first understanding the asymmetric wall thickness.",
                "For vessel elements vs tracheids: draw both side by side and label the perforation plate (absent in tracheids, present in vessel elements). Write: 'perforation plate = no barrier to flow = more efficient'. Confirm by calculating relative flow resistance (wide bore = lower resistance by Poiseuille's law).",
                "For mechanical arrangement in stems: draw a cross-beam diagram from engineering — place supports at the edges vs in the centre and show which bends less. Apply the same logic to peripheral vascular bundles in dicots."
            ],
            misconceptionsToAddress: [
                "Apoplast and symplast confusion → two-colour pathway diagram (above)",
                "Fibres vs sclereids confusion → shape rule + microscope sketch (above)",
                "Guard cell mechanism unclear → asymmetric wall thickness diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly explains the transpiration-cohesion-tension mechanism step by step from soil to atmosphere",
                "Identifies inhibition type — applies structure-function reasoning to unfamiliar plant cross-sections",
                "Distinguishes C3 from C4 leaf anatomy and explains the functional significance of Kranz anatomy",
                "Connects secondary growth anatomy (annual rings, early vs late wood) to physiological events",
                "Can design a simple experiment to test a structure-function hypothesis in plant anatomy"
            ],
            immediateNextSteps: [
                "Derive the water potential equation (Ψ = Ψs + Ψp) and apply it to each step of the transpiration stream — calculate or estimate Ψ at soil, root cortex, xylem, and leaf mesophyll to confirm the gradient is maintained.",
                "Compare C3 and C4 leaf anatomy quantitatively: measure bundle sheath cell area relative to mesophyll cell area in published micrographs of wheat vs maize leaves — connect to the CO₂ concentration factor.",
                "Explore secondary growth timing: research early wood vs late wood vessel diameter in ring-porous vs diffuse-porous species, and explain why ring-porous species are more vulnerable to spring frost.",
                "Calculate stomatal density from a real epidermal peel microscope image — count stomata in a defined area, express as stomata per mm², and compare upper vs lower surfaces. Connect to predicted water loss rate.",
                "Apply Poiseuille's law qualitatively: explain why doubling vessel radius increases flow by 16-fold, and discuss the trade-off between conducting efficiency and vulnerability to cavitation in xylem vessel design."
            ],
            misconceptionsToAddress: [
                "Transpiration is passive in all respects → clarify that stomatal opening requires active K⁺ transport (metabolic energy) even though bulk flow is passive",
                "C4 anatomy is only a biochemical difference → reinforce the essential structural component (Kranz anatomy) and why it cannot function without spatial separation"
            ]
        },

        expert: {
            characteristics: [
                "Derives the pressure flow hypothesis quantitatively, connecting osmotic pressure at source and sink to flow rate",
                "Critically evaluates published plant anatomy data — identifies preparation artefacts, assesses section quality, and identifies species-level variation",
                "Connects anatomical features to molecular mechanisms (e.g. aquaporins in water transport, sucrose transporters in phloem loading)",
                "Applies plant anatomy to real-world problems in crop physiology, climate change responses, and forensic botany"
            ],
            immediateNextSteps: [
                "Read a primary research paper on phloem loading mechanisms (apoplastic vs symplastic loading) and evaluate whether the anatomical evidence (plasmodesmata frequency, companion cell type) supports the authors' conclusion.",
                "Investigate the anatomy of parasitic plants (e.g. Cuscuta) — how does their haustorial anatomy allow them to tap into host xylem and phloem? What anatomical adaptations distinguish their modified roots?",
                "Apply metabolic control analysis concepts to the transpiration stream: identify which anatomical 'resistances' (soil-root, root-xylem, xylem-mesophyll, stomata-atmosphere) contribute most to total resistance, and evaluate which is most controllable by the plant.",
                "Critically evaluate dendrochronological data from a published climate reconstruction: assess the anatomical basis of the proxy, identify confounding factors (e.g. CO₂ fertilisation effects on ring width), and evaluate the uncertainty estimates."
            ],
            misconceptionsToAddress: [
                "All phloem loading is apoplastic → review symplastic loading via plasmodesmata in some species; recognise that loading mechanism varies with companion cell type (transfer cell vs intermediary cell)",
                "Xylem transport is entirely passive → address the role of root pressure (driven by active ion pumping into xylem at night) as an additional, minor driving force"
            ]
        }
    }
},

const EndSection4 = "close"