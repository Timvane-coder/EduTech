

microbialEcology: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about microbial ecology from memory without requiring understanding of mechanisms or significance. The student reproduces terminology, organism names, process names, and simple definitions accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot do this, they cannot access any higher level.",
            verbs: ["State", "List", "Name", "Define", "Identify", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation of mechanism or significance. 'Nitrogen fixation converts N₂ to NH₃' is remember-level. 'Nitrogen fixation converts N₂ to NH₃, which is essential because N₂ is unavailable to most organisms despite being the most abundant atmospheric gas' crosses into understand.",
            examples: {
                microbialDiversity:    "Name the three domains of life. State which domain contains the methanogens and which contains organisms with peptidoglycan cell walls.",
                nutrientCycling:       "List the four key steps of the nitrogen cycle. For each, name the microbial process and the chemical transformation.",
                microbialInteractions: "Define mutualism, commensalism, and parasitism. Give one organism example for each.",
                microbialAdaptations:  "State the definition of an extremophile. Name the six categories of extremophile and give one organism example for each.",
                biofilms:              "List the five stages of biofilm formation in order."
            }
        },

        understand: {
            description: "Explain the biological meaning behind facts — connect process to outcome, connect adaptation to environment, and interpret what a result means ecologically. The student demonstrates they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student rephrases, connects, and explains rather than repeating. A correct explanation the student could not have produced by memorising the question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand goes beyond remember by requiring causality or mechanism. 'Biofilm cells resist antibiotics' is remember. 'Biofilm cells resist antibiotics because the EPS matrix limits antibiotic diffusion, and slow-growing cells in the biofilm interior are inherently less susceptible to antibiotics that target active processes' is understand — the student has supplied the mechanism.",
            examples: {
                microbialDiversity:    "Explain why fewer than 1% of environmental microorganisms can be cultured on standard media. Your answer must identify at least three specific reasons why culturability fails for most environmental microbes.",
                nutrientCycling:       "Explain why the nitrogen cycle requires multiple distinct microbial guilds rather than a single organism performing all steps. Connect your answer to differences in metabolic strategy (aerobic vs anaerobic, autotrophic vs heterotrophic) between guilds.",
                microbialInteractions: "Explain why syntrophy is described as 'obligate' — what would happen to each partner in the absence of the other, and what thermodynamic principle underlies this obligate relationship?",
                microbialAdaptations:  "Explain why a thermophilic enzyme retains activity at 90°C while a mesophilic homologue denatures at 50°C. Your answer must identify specific types of stabilising molecular interactions and explain what happens to each at high temperature.",
                biofilms:              "Explain why quorum sensing is necessary for biofilm maturation — connect cell density detection to the collective behaviours that could not function at low cell density."
            }
        },

        apply: {
            description: "Use known concepts, cycles, and ecological principles to predict, calculate, or explain outcomes in novel scenarios not seen before in exactly this form. The student selects the right concept and applies it correctly.",
            cognitiveDemand: "Procedure execution in a novel situation. The student determines which concept applies, applies it correctly, and produces a specific prediction, classification, or calculation.",
            verbs: ["Predict", "Calculate", "Classify", "Apply", "Determine", "Sketch", "Use"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Predict what happens to nitrification rate when soil is flooded' requires the student to apply knowledge of aerobic/anaerobic metabolism to a specific environmental change. 'Explain what nitrification is' is understand, not apply. The output is a specific prediction or result.",
            examples: {
                microbialDiversity:    "A soil sample has a Shannon diversity index H' = 4.1 and an adjacent degraded soil has H' = 1.8. Predict two functional consequences for the degraded soil's nutrient cycling capacity. Apply the concept of functional redundancy in your answer.",
                nutrientCycling:       "A wetland is drained and converted to farmland. Predict what will happen to: (a) denitrification rates; (b) methane emissions; (c) nitrogen leaching into adjacent waterways. Apply the relevant microbial processes to each prediction.",
                microbialInteractions: "Classify each of the following as mutualism, commensalism, competition, parasitism, amensalism, or syntrophy: (a) Streptomyces producing streptomycin in soil; (b) acetate-oxidising bacteria + methanogens degrading acetate together; (c) two Pseudomonas strains competing for the same iron-siderophore receptor.",
                microbialAdaptations:  "A deep-sea bacterium is found at 600 atm pressure and 2°C. Predict two specific membrane adaptations it would have and explain why each is necessary given the physical conditions.",
                biofilms:              "A hospital is trying to reduce catheter-associated biofilm infections. Apply knowledge of biofilm formation stages to identify at which two stages intervention would be most effective and justify your selection."
            }
        },

        analyze: {
            description: "Break down experimental data or a complex scenario into components, identify patterns, and draw conclusions from evidence. The student moves from data to interpretation without being told what the answer is.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion that was not given to them and justifies it from provided evidence. The analysis is systematic, not impressionistic.",
            verbs: ["Identify", "Determine", "Deduce", "Analyse", "Distinguish", "Interpret", "Examine"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given these 16S rRNA sequencing data showing dramatic reduction in Firmicutes and increase in Proteobacteria after antibiotic treatment — analyse what this means for gut function' requires the student to identify the community shift, connect it to known functional roles, and infer consequences. This is not answerable by formula.",
            examples: {
                microbialDiversity:    "16S rRNA sequencing of two soil samples yields: Sample A — 180 OTUs, Shannon H' = 3.9, dominated by Acidobacteria (42%). Sample B — 210 OTUs, Shannon H' = 2.1, dominated by Proteobacteria (78%). Analyse which sample is ecologically healthier, justifying your answer using both diversity indices and the ecological significance of the dominant taxa.",
                nutrientCycling:       "A lake receives high nitrogen fertiliser runoff in spring. By August, a large algal bloom has died, and dissolved oxygen in bottom waters has dropped from 9 mg/L to 1 mg/L. Analyse the microbial processes responsible for each stage: bloom growth, bloom collapse, and oxygen depletion. Identify which microbial guilds are active at each stage and what metabolic process each is performing.",
                microbialInteractions: "Two experimental flask cultures are set up: Flask 1 contains only an acetate-oxidising bacterium in anaerobic medium — no growth is observed. Flask 2 contains the same bacterium plus a methanogen — vigorous growth of both organisms occurs. Analyse what these observations reveal about the thermodynamic basis of syntrophy and identify what the methanogen is providing to enable the reaction.",
                microbialAdaptations:  "An enzyme isolated from a halophile has optimal activity at 4 M NaCl and loses 90% of activity when diluted to 0.1 M NaCl. The enzyme from a closely related mesophile is maximally active at 0.15 M NaCl and is unaffected by dilution. Analyse what structural features of the halophilic enzyme account for its salt dependence and why these same features would be deleterious in a low-salt environment.",
                biofilms:              "A clinical isolate of Staphylococcus aureus forms robust biofilms on polystyrene plates in vitro. When treated with 10× the MIC of vancomycin, 99.9% of cells are killed but the infection recurs within 48 hours from surviving cells. Analyse the two mechanisms by which the surviving 0.1% persisted and predict what would need to be targeted by a therapy to achieve sterilisation."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, accuracy, or quality of a claim, study, or ecological interpretation. The student applies criteria, weighs evidence, and defends a position with justification.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or limitation, explains the criterion by which it fails, and states what would be correct or better. Simply identifying that something is wrong is not evaluate-level — the student must explain why using biological criteria.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'Evaluate the claim that metagenomics has made culturing obsolete.' The student must engage with the specific capabilities and limitations of both approaches, weigh them against each other, and reach a reasoned conclusion — not merely describe both methods.",
            examples: {
                microbialDiversity:    "A researcher concludes: 'Since metagenomics detects all organisms in a sample, culturing is no longer necessary in environmental microbiology.' Evaluate this claim fully — identify what metagenomics can and cannot tell you that culturing can, and defend a position on whether this conclusion is justified.",
                nutrientCycling:       "Evaluate the strategy of adding nitrification inhibitors to agricultural fertilisers as a method to reduce waterway eutrophication. Assess the evidence for effectiveness, identify at least two limitations or unintended consequences, and conclude whether it is a sufficient strategy or whether additional interventions are needed.",
                microbialInteractions: "Evaluate Gause's competitive exclusion principle in the context of natural microbial communities, where hundreds of species coexist in the same soil. Identify the conditions under which the principle applies strictly, explain the mechanisms by which apparent violations occur in nature, and assess whether the principle requires modification or simply better contextualisation.",
                microbialAdaptations:  "Evaluate the claim that extremophiles represent evolutionary relics that have remained unchanged since early Earth, and that studying them reveals what the earliest life forms were like. Assess the evidence for and against this interpretation, and conclude whether extremophile biology is a reliable window into the origin of life.",
                biofilms:              "A pharmaceutical company proposes to add a quorum sensing inhibitor to all antibiotic formulations to prevent biofilm formation. Evaluate this proposal — assess the potential benefit, identify at least two biological mechanisms that might limit effectiveness, and appraise whether clinical evidence supports this strategy."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a novel monitoring strategy, a metabolic pathway diagram, or an applied ecological intervention. The student integrates multiple concepts into a coherent, original output addressing a specific goal.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before, combining multiple concepts from the lesson. A strong create-level response is scientifically plausible, internally consistent, and completely addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Plan", "Create"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design a metagenomics study to characterise nitrogen-cycling communities in a fertilised vs unfertilised soil' requires the student to specify sampling strategy, DNA extraction method, sequencing approach, bioinformatic pipeline, functional annotation, statistical comparison, and how results would be interpreted — integrating microbial diversity methods, nitrogen cycle biology, and experimental design. This cannot be answered by reproducing a memorised procedure.",
            examples: {
                microbialDiversity:    "Design a study to determine whether a proposed wind farm site has unusual or rare microbial diversity that should influence the environmental impact assessment. Specify: (a) which habitats you would sample; (b) which molecular methods you would use and why; (c) how you would define and measure 'rare' or 'unusual' diversity; (d) what the study's results would need to show to justify modifying the construction plan; (e) what limitations your study would have.",
                nutrientCycling:       "Construct an annotated diagram of the complete nitrogen cycle for a temperate agricultural soil, incorporating all six microbial processes. For each process, specify: the organism group responsible, the chemical transformation, the environmental conditions required, and one human management action that increases or decreases that process. Use the diagram to identify the single intervention that would most reduce N₂O emissions from the system.",
                microbialInteractions: "Propose a synthetic ecology experiment to determine whether a specific syntrophic partnership between two organisms is truly obligate or merely facultative. Your proposal must: (a) describe the experimental conditions under which each organism is grown alone and in co-culture; (b) specify what measurements would confirm or refute obligate interdependence; (c) identify a thermodynamic prediction you would test; (d) explain what result would indicate the relationship is mutualistic rather than strictly syntrophic.",
                microbialAdaptations:  "Design a directed evolution experiment to engineer a mesophilic lipase enzyme for stability at 80°C for industrial biodiesel production. Specify: (a) the mutagenesis strategy you would use; (b) the selection or screening method for thermostable variants; (c) how many rounds of evolution you would perform and why; (d) what structural analysis you would perform on the final variant to understand the molecular basis of thermostability; (e) what trade-offs in activity or substrate specificity you would watch for.",
                biofilms:              "Develop a multi-target strategy to prevent P. aeruginosa biofilm formation on urinary catheters. Your strategy must address at least three different stages of biofilm formation, specify the mechanism of each intervention, cite the biological rationale, and address the risk of selecting for resistance against each component of the strategy."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name the three domains but cannot explain the metabolic or structural differences between bacteria and archaea",
                "Knows that microbes drive nutrient cycles but cannot name the specific organisms or reactions for any single cycle",
                "Conflates bacteria with all microorganisms — unaware of archaea, protists, fungi, and viruses as ecological components",
                "Cannot distinguish nitrogen fixation from nitrification",
                "Treats 'microbiome' and 'microorganism' as synonyms",
                "Believes all bacteria are harmful pathogens"
            ],
            immediateNextSteps: [
                "Before any nitrogen cycle content: draw and label the cycle as a loop with six labelled arrows, each annotated with the process name, the chemical transformation, and the organism group. Do not proceed to mechanisms until the loop is drawn correctly from memory.",
                "Build a three-column domain comparison table: bacteria vs archaea vs eukarya — columns: cell wall composition, membrane lipid type, ribosome sensitivity (antibiotic targets), and one ecological role. Use this to establish that archaea are not bacteria.",
                "Correct the 'all bacteria are harmful' misconception immediately: list five essential roles of bacteria (nitrogen fixation, decomposition, gut symbiosis, photosynthesis, antibiotic production) before discussing any pathogenic bacteria.",
                "Create a dedicated nitrogen fixation vs nitrification comparison card: fixation (N₂ → NH₃, diazotrophs, uses nitrogenase) vs nitrification (NH₄⁺ → NO₃⁻, nitrifiers, uses ammonia monooxygenase). Write one sentence for each that could not describe the other.",
                "Introduce the great plate count anomaly early and repeat it: 'less than 1% of environmental microbes can be cultured.' Use this to motivate why molecular methods exist — culture results alone give a profoundly misleading picture of microbial diversity."
            ],
            misconceptionsToAddress: [
                "Bacteria = all microbes → three-domain comparison table (above)",
                "Nitrogen fixation = nitrification → dedicated comparison card (above)",
                "All bacteria are harmful → five beneficial roles list (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can draw the nitrogen cycle with process names but confuses the organisms responsible for nitrification vs denitrification",
                "Understands that biofilms are more resistant to antibiotics but cannot explain the mechanisms",
                "Can define alpha and beta diversity but cannot calculate or interpret Shannon index values",
                "Understands mutualism and competition but struggles to explain syntrophy and the thermodynamic basis of obligate interdependence",
                "Knows extremophiles exist and can name categories but cannot explain the molecular adaptations for more than one type"
            ],
            immediateNextSteps: [
                "For nitrogen cycle organism confusion: build a five-row organism-to-process table specifically for the nitrogen cycle. Rows: Rhizobium, Nitrosomonas, Nitrobacter, Pseudomonas, Desulfovibrio. Columns: organism name, domain, process performed, aerobic or anaerobic, ecological habitat. Do not move on until all 25 cells are correctly filled from memory.",
                "For biofilm resistance mechanisms: separate them into three categories — physical (EPS diffusion barrier), physiological (slow growth = low target activity), and cellular (persister cells). Draw each as a separate diagram. Practise explaining each mechanism in one sentence before combining them.",
                "For Shannon index: calculate H' for three simple communities by hand — one with equal abundance of 5 species, one with 5 species but 90% dominated by one, and one with 2 species at 50:50. Compare the values and articulate why equal abundance maximises H'.",
                "For syntrophy: draw the syntrophic relationship as a flow diagram with gibbs free energy values — show that the acetate oxidation reaction alone is thermodynamically unfavourable (ΔG > 0), then show that with H₂ removal by the methanogen, the combined reaction is favourable (ΔG < 0). This makes the thermodynamic basis concrete.",
                "For extremophile adaptations: master thermophiles and acidophiles before adding others. For each, complete the sentence: 'At [extreme condition], [specific molecule] is damaged by [mechanism]; the adaptation is [specific molecular change] because [why this counteracts the damage].' Repeat for each adaptation."
            ],
            misconceptionsToAddress: [
                "Nitrification and denitrification organism confusion → five-row organism-to-process table (above)",
                "Biofilm resistance = genetic antibiotic resistance → three-mechanism separation (above)",
                "Syntrophy = regular mutualism → Gibbs free energy flow diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Draws the complete nitrogen cycle correctly with organisms, reactions, and aerobic/anaerobic conditions for each step",
                "Explains biofilm resistance through all three mechanisms (diffusion, slow growth, persisters) and connects each to clinical challenge",
                "Calculates and interprets Shannon diversity index and Bray-Curtis dissimilarity for simple datasets",
                "Explains the thermodynamic basis of syntrophy using Gibbs free energy reasoning",
                "Connects extremophile adaptations to specific molecular consequences of the extreme condition",
                "Distinguishes 16S rRNA amplicon sequencing from metagenomics by capabilities and limitations"
            ],
            immediateNextSteps: [
                "Connect microbial ecology to ecosystem function quantitatively: research published rates of nitrogen fixation (kg N/ha/year) for different ecosystems and calculate what fraction of agricultural nitrogen demand could be met by biological fixation vs synthetic fertiliser. Connect the shortfall to the Haber-Bosch process.",
                "Extend quorum sensing beyond biofilms: research two non-biofilm behaviours regulated by quorum sensing (e.g. bioluminescence in Vibrio fischeri, virulence factor production in Staphylococcus aureus) and explain why density-dependent regulation is advantageous for each.",
                "Apply community ecology theory: research the intermediate disturbance hypothesis and evaluate whether it predicts the diversity patterns seen in perturbed vs stable microbial communities in any two published metagenomics datasets.",
                "Explore the viral shunt quantitatively: research estimates of the fraction of marine bacterial production channelled through the viral shunt vs the microbial loop. Calculate the impact on the biological carbon pump and assess the significance for ocean carbon sequestration.",
                "Analyse a published Lineweaver-Burk-equivalent for microbial growth: examine the Monod equation (μ = μmax[S]/(Ks + [S])) and compare it structurally to the Michaelis-Menten equation — identify what μmax, Ks, and [S] correspond to and why the same mathematical framework describes both enzyme kinetics and microbial growth kinetics."
            ],
            misconceptionsToAddress: [
                "Metagenomics as complete solution → 'functional activity' limitation discussion (metatranscriptomics needed for expression)",
                "Biofilm resistance = genetic resistance → reinforce the physiological/structural distinction"
            ]
        },

        expert: {
            characteristics: [
                "Designs metagenomics studies including appropriate controls, sequencing depth calculations, and bioinformatic pipelines",
                "Analyses published microbial community data using diversity indices and interprets ecological meaning",
                "Connects biogeochemical cycling rates to climate models — understands microbial contributions to radiative forcing",
                "Applies Monod kinetics to model microbial growth in continuous culture systems",
                "Critiques published microbial ecology papers — identifies sampling biases, diversity estimation artefacts, and confounding variables"
            ],
            immediateNextSteps: [
                "Critically evaluate a published metagenomics paper: identify the sequencing depth, assess whether rarefaction curves plateau (indicating sufficient sampling), evaluate whether functional annotation used validated databases, and assess whether 16S or shotgun sequencing was more appropriate for the stated research question.",
                "Apply metabolic control analysis to a microbial community: for the nitrogen cycle in a specific ecosystem (e.g. marine oxygen minimum zone), identify which step is rate-limiting for nitrogen loss and what environmental variable most strongly controls the flux control coefficient.",
                "Explore the Monod equation as the community-level analogue of Michaelis-Menten: derive the steady-state cell density in a chemostat using the Monod equation and the mass balance equation. Identify what Ks and μmax determine about competitive outcomes between two species in the same chemostat.",
                "Investigate microbiome-host co-evolution: research examples where the host has evolved specific mechanisms to select or maintain particular microbiome members (e.g. IgA coating of gut bacteria, antimicrobial peptide gradients) and evaluate whether the microbiome should be treated as an organ or as an ecological community for the purposes of medical intervention."
            ],
            misconceptionsToAddress: [
                "16S rRNA as reliable quantitative tool → discuss copy number variation between species and its effect on relative abundance estimates",
                "The microbiome as fully characterised → discuss the 'dark microbiome' of uncultured and functionally uncharacterised taxa that dominate many environments"
            ]
        }
    }
},

pathogenicMicrobes: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about pathogens, immune responses, and antimicrobials from memory. No explanation or reasoning required — only accurate reproduction of definitions, lists, and classifications.",
            cognitiveDemand: "Verbatim or near-verbatim recall. If a student cannot do this, they cannot access any higher level of the topic.",
            verbs: ["State", "List", "Name", "Identify", "Define", "Label", "Classify"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts with no explanation. 'Antibiotics target peptidoglycan cell walls' is remember-level. 'Antibiotics target peptidoglycan cell walls, which are absent in human cells, explaining selective toxicity' crosses into understand.",
            examples: {
                pathogenBasics:    "Name the five major classes of pathogen. For each, state whether it is cellular or acellular, and give one example.",
                bacterialInfection:"List three mechanisms of antibiotic action, stating one antibiotic class for each mechanism.",
                viralInfection:    "State the six sequential steps of the viral lytic replication cycle in order.",
                immuneResponse:    "Name two cells of the innate immune system and two cells of the adaptive immune system. State one function of each."
            }
        },

        understand: {
            description: "Explain why facts are true — connect structure to function, mechanism to outcome, and cause to effect. The student must demonstrate they understand the biological reason behind each fact.",
            cognitiveDemand: "Translation and interpretation. The student explains, connects, and paraphrases rather than repeating. A correct mechanistic explanation the student could not produce by memorising the Q&A pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Distinguish", "Connect", "Interpret", "Contrast"],
            whatDistinguishesThisLevel: "'Antibiotics are ineffective against viruses' is remember. 'Antibiotics are ineffective against viruses because antibiotics target structures specific to bacteria — cell walls, 70S ribosomes, bacterial DNA gyrase — that viruses do not possess, having no independent metabolism or ribosomes' is understand. The causal link must be supplied.",
            examples: {
                pathogenBasics:    "Explain why viruses are not considered living organisms, referencing the specific cell processes they lack when outside a host cell.",
                bacterialInfection:"Explain why Gram-positive and Gram-negative bacteria respond differently to the same antibiotic, connecting the structural difference in cell wall composition to antibiotic access.",
                viralInfection:    "Explain why antivirals are harder to design than antibiotics, using the concept of selective toxicity and the differences between viral and bacterial biology.",
                immuneResponse:    "Explain why the secondary antibody response is faster and larger than the primary response. Your answer must name the specific cell type responsible and describe what happens to it during the primary response."
            }
        },

        apply: {
            description: "Use known concepts, equations, and rules to solve problems or make predictions in new contexts not previously encountered in exactly this form.",
            cognitiveDemand: "Procedure execution or concept application in a novel situation. The student selects the correct tool and applies it accurately.",
            verbs: ["Calculate", "Predict", "Determine", "Apply", "Use", "Sketch", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Calculate the herd immunity threshold for a pathogen with R₀ = 8' requires substitution into HIT = 1 − (1/R₀) and interpretation. 'Explain what R₀ means' is understand. The output is a numerical answer, a specific prediction, or a classification.",
            examples: {
                pathogenBasics:    "A pathogen has R₀ = 5. Calculate the herd immunity threshold. State the minimum vaccination coverage required to prevent epidemic spread, assuming 100% vaccine efficacy.",
                bacterialInfection:"A bacterium isolated from a patient is Gram-positive and produces an exotoxin that irreversibly inhibits ACh release at neuromuscular junctions. Identify the most likely organism and predict the clinical presentation.",
                viralInfection:    "An enveloped RNA virus infects respiratory epithelium. Predict what would happen to its infectivity if its lipid envelope were disrupted by an alcohol-based hand sanitiser. Explain using the biology of the envelope.",
                immuneResponse:    "A patient receives a second dose of MMR vaccine 10 years after their first. Predict the shape of their antibody response curve compared to their first dose, and identify which immune cells produce the response."
            }
        },

        analyze: {
            description: "Break down experimental data, clinical scenarios, or complex situations to identify patterns, draw conclusions from evidence, and determine mechanisms. The conclusion is not given — the student derives it.",
            cognitiveDemand: "Decomposition and inference from evidence. The student works from data to interpretation without being told the answer.",
            verbs: ["Identify", "Deduce", "Determine", "Analyse", "Distinguish", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyze requires the student to reach a conclusion from evidence. 'Given this pattern of Km and Vmax changes, identify the inhibition type' is analyze for enzymes; 'Given these clinical data and microbiological results, determine the most likely pathogen and resistance mechanism' is the equivalent for this topic.",
            examples: {
                pathogenBasics:    "A novel pathogen causes disease but cannot be grown in pure culture, infects only humans, and can be transmitted experimentally only by injecting filtered (bacteria-free) tissue homogenate. Analyse which pathogen class this most likely belongs to, apply Koch's Postulates to each step of the evidence, and identify which postulate cannot be fulfilled and why.",
                bacterialInfection:"An antibiotic-susceptible bacterium is exposed to sub-inhibitory concentrations of antibiotic for 30 days. Serial MIC measurements are taken. MIC doubles on day 5, doubles again on day 14, and doubles again on day 27. Analyse what is happening at the population level, identify what process is driving the MIC increase, and determine whether this pattern is more consistent with chromosomal mutation or plasmid acquisition.",
                viralInfection:    "A patient with HIV has a CD4⁺ count of 180 cells/μL (normal >500). They develop a pulmonary infection with an organism that grows inside macrophages and cannot be cleared without CD4⁺-mediated macrophage activation. Identify the most likely pathogen class and organism, and analyse why the patient cannot clear it using the specific arm of immunity they are deficient in.",
                immuneResponse:    "Serum antibody titres are measured in two individuals: Person A (never vaccinated) and Person B (vaccinated 5 years ago). Both are exposed to influenza on day 0. Person A develops symptomatic influenza; Person B does not. On day 3, antibody titres are measured: Person A shows low IgM titre; Person B shows rapidly rising high IgG titre. Analyse the immunological basis for each pattern and identify which immune cells are responsible for Person B's rapid response."
            }
        },

        evaluate: {
            description: "Make supported judgements about claims, experimental designs, or conclusions. Identify specific errors, explain the criterion by which they fail, and state what is correct.",
            cognitiveDemand: "Judgement with justification. The student engages with a specific claim or design and explains why it is correct, incorrect, or limited — not just what is correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires engaging with someone else's reasoning. 'A student claims vaccines cause the diseases they prevent — evaluate this claim.' The student must state for each vaccine type whether this is possible (live attenuated: theoretical but vanishingly rare; inactivated, subunit, mRNA: impossible) and explain the molecular reason for each verdict.",
            examples: {
                pathogenBasics:    "Evaluate the claim: 'Koch's Postulates are sufficient criteria for establishing that a microorganism causes a specific disease.' Address at least three specific situations where the Postulates cannot be fulfilled, explain why in each case, and propose what evidence should be used instead.",
                bacterialInfection:"A patient requests antibiotics for a cold. Their GP refuses. The patient argues: 'But I had antibiotics last time and I got better — so they clearly work for colds.' Evaluate this argument. Identify the logical fallacy involved, explain the correct biological reason why antibiotics are ineffective for colds, and evaluate what evidence the GP should cite.",
                viralInfection:    "Evaluate the design of the following vaccine trial: 500 participants receive the experimental vaccine; 500 receive saline placebo; all are monitored for influenza infection for 6 months. Assess what information this design can provide, identify two specific weaknesses in the methodology, and propose how each should be addressed in a Phase III clinical trial.",
                immuneResponse:    "Evaluate the following public health claim: 'Once herd immunity is achieved, vaccination is no longer necessary.' Assess this claim using the concepts of herd immunity threshold, vaccine coverage maintenance, and the consequence of declining vaccination rates. Conclude with a specific example where this assumption led to measurable harm."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, a disease management protocol, an epidemic model, a vaccine strategy, or an annotated mechanistic diagram — by integrating multiple concepts from the lesson.",
            cognitiveDemand: "Synthesis and original production. The student assembles an output that did not previously exist by combining concepts in a coherent, scientifically defensible way.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Derive"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design a strategy to limit the spread of a novel airborne pathogen with R₀ = 4 in a hospital ward' requires the student to combine transmission biology, R₀ mathematics, infection control principles, and immune response knowledge into a coherent action plan. It cannot be answered by reproducing memorised content.",
            examples: {
                pathogenBasics:    "A novel pathogen emerges with the following characteristics: airborne transmission, R₀ = 6, 14-day incubation period, 30% of infections are asymptomatic but infectious. Design a public health response strategy. Your plan must include: (a) calculation of the herd immunity threshold; (b) the infection control measures appropriate for the transmission route; (c) the surveillance strategy to identify both symptomatic and asymptomatic cases; (d) the vaccine type you would prioritise developing and why.",
                bacterialInfection:"Propose an antibiotic stewardship programme for a hospital experiencing rising rates of ESBL-producing Enterobacteriaceae. Your programme must address: (a) prescribing guidelines specifying which antibiotics should be restricted and why; (b) a microbiological testing protocol for identifying and reporting resistance; (c) a patient education component targeting course completion; (d) a monitoring metric to assess whether the programme is reducing selection pressure.",
                viralInfection:    "Design a new antiviral drug targeting HIV reverse transcriptase. Your design must specify: (a) the molecular mechanism of inhibition (use your knowledge of nucleoside analogue or non-nucleoside mechanisms); (b) why this target offers selective toxicity over host cells; (c) two specific mutations in reverse transcriptase that could confer resistance, and how you would design the drug to minimise resistance development; (d) how you would confirm the drug's mechanism in vitro before animal trials.",
                immuneResponse:    "Construct a fully annotated flow diagram of the adaptive immune response to a first-time bacterial infection, from antigen presentation through to long-term memory formation. Your diagram must include: (a) the APC, MHC class, and T-cell type involved in initiating the response; (b) the signals required for B-cell activation and class switching; (c) the formation of germinal centres and the process of affinity maturation; (d) the cell types that persist as memory; (e) an annotation of which steps are accelerated during a secondary response."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name bacteria and viruses as pathogen types but cannot distinguish them structurally",
                "Believes antibiotics treat all infections including viral",
                "Conflates infection with disease — does not recognise asymptomatic infection",
                "Cannot sequence the viral replication cycle",
                "Knows 'the immune system fights infection' but cannot name specific cell types or mechanisms",
                "Cannot explain what R₀ means or calculate the herd immunity threshold"
            ],
            immediateNextSteps: [
                "Before anything else: build the bacteria vs virus comparison table — three rows only (cell type, cell wall, ribosomes) until automatic, then add genetic material, reproduction, treatment. Never move past this table until it is error-free from memory.",
                "Establish the infection ≠ disease distinction using the latent TB example: write on paper 'infected = microbe present; disease = microbe causing symptoms' and apply this to three different scenarios (latent TB, H. pylori carrier, asymptomatic HIV).",
                "Learn the viral replication cycle as a numbered sequence of six steps with one keyword each: (1) Attach, (2) Penetrate, (3) Uncoat, (4) Replicate, (5) Assemble, (6) Release. Practise reciting the sequence before adding detail.",
                "For immune system basics: learn only two cell types at each level first — macrophage and neutrophil (innate); B cell and T cell (adaptive). Add specificity (CD4, CD8, plasma cell, memory cell) only after these four are secure.",
                "For R₀: apply the formula to three pathogens (measles R₀=15, influenza R₀=1.3, Ebola R₀=2) and calculate HIT for each. Plot the results to see that higher R₀ requires higher vaccination coverage."
            ],
            misconceptionsToAddress: [
                "Antibiotics treat viral infections → bacteria-vs-virus structural comparison table (above)",
                "Infection = disease → latent TB and H. pylori scenarios (above)",
                "All microbes are the same → five pathogen class table"
            ]
        },

        developing: {
            characteristics: [
                "Correctly distinguishes bacteria from viruses but confuses Gram-positive and Gram-negative structures",
                "Understands antibiotics target bacteria-specific structures but cannot name specific mechanisms",
                "Can sequence the viral replication cycle but confuses where DNA vs RNA viruses replicate",
                "Distinguishes innate from adaptive immunity but cannot explain MHC restriction or the role of CD4 vs CD8",
                "Can state what R₀ means but makes arithmetic errors calculating HIT",
                "Confuses bactericidal and bacteriostatic agents"
            ],
            immediateNextSteps: [
                "For Gram staining: draw the Gram-positive and Gram-negative cell wall side by side — thick peptidoglycan (purple) vs thin peptidoglycan + outer membrane with LPS (pink). Add one arrow pointing to the site of each major antibiotic class. Practise identifying which layer is targeted.",
                "For antibiotic mechanisms: build the five-mechanism table (cell wall, 30S ribosome, 50S ribosome, DNA gyrase, metabolite pathway) with one drug example for each. Then add a selectivity column explaining why each mechanism does not harm human cells.",
                "For MHC restriction: draw two diagrams side by side — MHC I on all nucleated cells presenting to CD8⁺ T cells (killing virus-infected cells); MHC II on APCs presenting to CD4⁺ T cells (activating the immune response). Use different colours and practise redrawing from memory.",
                "For HIT arithmetic: practice five calculations with different R₀ values. Write the formula at the top of each: HIT = 1 − (1/R₀). Confirm by asking: does higher R₀ give higher HIT? If not, recheck.",
                "For bactericidal vs bacteriostatic: write a one-sentence distinction — bactericidal kills; bacteriostatic stops growth — then give one example of each and explain why this distinction matters clinically (immunocompromised patients need bactericidal agents)."
            ],
            misconceptionsToAddress: [
                "Gram stain confusion → dual cell wall diagram (above)",
                "MHC I/II and CD4/CD8 inversion → two-diagram MHC approach (above)",
                "HIT arithmetic errors → structured formula-first calculation practice (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately explains antibiotic mechanisms and resistance mechanisms with specific examples",
                "Can compare all five vaccine types with advantages, disadvantages, and examples",
                "Explains MHC restriction, T-cell help for B cells, and affinity maturation",
                "Applies R₀ and HIT correctly including adjusting for imperfect vaccine efficacy",
                "Distinguishes the specific immune evasion strategies of intracellular vs extracellular pathogens",
                "Can connect antibiotic resistance mechanisms to horizontal gene transfer routes"
            ],
            immediateNextSteps: [
                "Work through horizontal gene transfer in detail: for each of transformation, transduction, and conjugation, draw the mechanism and name one clinically relevant resistance gene transferred by each. Identify which is most epidemiologically important for antibiotic resistance spread.",
                "Explore the complement system in detail: draw the three activation pathways (classical, lectin, alternative) and the terminal common pathway leading to the membrane attack complex. Annotate where bacteria evade complement (capsule prevents opsonisation; S. aureus produces SCIN to block C3b).",
                "Calculate the effective reproduction number Rₑ = R₀ × (1 − p) where p = proportion immune. Apply this to a measles outbreak where vaccination coverage has declined from 97% to 88% and determine whether Rₑ > 1.",
                "Apply the concept of herd immunity non-uniformity: in a population with vaccine-hesitant clusters, even if overall coverage exceeds HIT, localised outbreaks can still occur. Research the 2019 Samoa measles outbreak as a case study.",
                "Connect viral evolution to vaccine design: explain why influenza vaccines must be reformulated annually (antigenic drift of haemagglutinin and neuraminidase) but measles vaccines confer lifelong immunity (no antigenic variation in measles F and H proteins)."
            ],
            misconceptionsToAddress: [
                "R₀ as fixed property → introduce Rₑ and the effect of population immunity on effective reproduction number",
                "All vaccines work the same way → five vaccine type comparison with mechanistic distinction"
            ]
        },

        expert: {
            characteristics: [
                "Designs infection control interventions drawing on transmission biology, R₀ modelling, and immune response principles simultaneously",
                "Critically evaluates clinical microbiology data including MIC distributions, resistance prevalence, and susceptibility testing",
                "Analyses vaccine trial data including immunogenicity endpoints, correlates of protection, and waning immunity kinetics",
                "Connects molecular pathogen biology to public health policy — e.g. linking mecA spread to hospital infection control protocols",
                "Understands the molecular basis of adaptive immune evasion (antigenic variation, MHC downregulation, apoptosis inhibition)"
            ],
            immediateNextSteps: [
                "Analyse a published vaccine efficacy trial: identify the primary endpoint, calculate vaccine efficacy (VE = 1 − RR where RR = attack rate in vaccinated/attack rate in unvaccinated), assess whether immune correlates of protection were measured, and evaluate the duration of follow-up for waning immunity.",
                "Model a two-pathogen antibiotic resistance scenario: if a hospital introduces broad-spectrum carbapenem use, use the principles of competitive release and selection pressure to predict what happens to carbapenem-resistant Enterobacteriaceae prevalence over 12 months.",
                "Research antigenic variation in detail for three pathogens: Neisseria gonorrhoeae (gene conversion of pilin genes), Trypanosoma brucei (VSG switching), and influenza (antigenic drift vs shift). Compare the molecular mechanism of variation in each case.",
                "Evaluate the OneHealth framework: explain why antibiotic resistance in agriculture and human medicine cannot be addressed independently, and identify specific policies (e.g. banning prophylactic antibiotic use in livestock) justified by the biology of resistance gene spread."
            ],
            misconceptionsToAddress: [
                "Vaccine efficacy = vaccine effectiveness → distinguish trial-measured efficacy (controlled conditions) from real-world effectiveness (varied populations, circulating strains)",
                "Antibiotic resistance as reversible → explore the ratchet effect — resistance genes persist in microbial populations even after antibiotic pressure is removed, because they carry no fitness cost on conjugative plasmids"
            ]
        }
    }
},

microbialControl: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about microbial control terminology, methods, and drug classes from memory. No explanation or application required — accurate reproduction of definitions and classifications.",
            cognitiveDemand: "Verbatim or near-verbatim recall. If a student cannot yet do this, they cannot access any higher level.",
            verbs: ["State", "List", "Define", "Name", "Identify", "Label", "Write"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no mechanism. 'Sterilisation destroys all microorganisms including spores' is remember-level. Explaining why spores are hardest to destroy crosses into understand.",
            examples: {
                microbialControlBasics:     "Define sterilisation, disinfection, antisepsis, and sanitisation. State what bacteriostatic and bactericidal mean.",
                sterilisationAndDisinfection:"List three physical methods of sterilisation. For each, state the temperature and time conditions required.",
                antimicrobialAgents:         "Name two antibiotic classes that inhibit cell wall synthesis. For each, name one specific drug example.",
                resistanceMechanisms:        "List four mechanisms by which bacteria develop antimicrobial resistance. State one specific example of each."
            }
        },

        understand: {
            description: "Explain mechanisms and causal relationships — why a method works, why a drug is selective, why resistance develops. The student must supply the causal link, not merely reproduce a fact.",
            cognitiveDemand: "Translation and interpretation. The student explains mechanism, connects structure to function, or interprets what a result means biologically.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires a mechanism. 'Beta-lactams inhibit cell wall synthesis' is remember. 'Beta-lactams inhibit transpeptidase, preventing peptidoglycan cross-linking, causing osmotic lysis because the weakened wall cannot withstand internal osmotic pressure' is understand.",
            examples: {
                microbialControlBasics:     "Explain why endospores are the most resistant form of microbial life, specifically addressing what structural features make them resistant to heat, chemicals, and desiccation.",
                sterilisationAndDisinfection:"Explain why moist heat (autoclaving) sterilises more efficiently than dry heat at the same temperature, with specific reference to the role of water in protein denaturation.",
                antimicrobialAgents:        "Explain the concept of selective toxicity in antimicrobial drug design. Use the 70S vs 80S ribosome distinction as a specific example.",
                resistanceMechanisms:       "Explain why bacteria with the mecA gene (encoding PBP2a) are resistant to all beta-lactam antibiotics, including carbapenems, regardless of their specific structure."
            }
        },

        apply: {
            description: "Use microbial control principles, classification frameworks, and drug mechanisms to solve a novel problem or make a specific prediction. The student selects the right concept and applies it correctly.",
            cognitiveDemand: "Procedure execution in a novel context. The student must decide which concept applies and use it correctly — not recall a worked example.",
            verbs: ["Apply", "Select", "Predict", "Determine", "Choose", "Calculate", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem. 'Using the Spaulding classification, determine the required decontamination level for a flexible endoscope' requires the student to retrieve the framework, identify the device category, and select the correct method — this cannot be answered by repeating a memorised sentence.",
            examples: {
                microbialControlBasics:     "A food manufacturer uses a 90°C, 30-second pasteurisation process. Predict whether this achieves sterilisation or disinfection and justify your answer using thermal death concepts.",
                sterilisationAndDisinfection:"Apply the Spaulding classification to determine the appropriate decontamination level for: (a) a blood pressure cuff; (b) a urinary catheter; (c) a surgical drill bit used in bone.",
                antimicrobialAgents:        "A patient with a penicillin allergy needs treatment for a Gram-positive infection. Apply your knowledge of antibiotic targets to identify an alternative class that does not share the beta-lactam mechanism.",
                resistanceMechanisms:       "A clinical isolate of E. coli is resistant to ampicillin but susceptible when ampicillin is combined with clavulanate. Apply your knowledge of resistance mechanisms to identify the most likely mechanism and explain why the combination restores susceptibility."
            }
        },

        analyze: {
            description: "Break down experimental data, clinical scenarios, or resistance profiles into components, identify patterns, and draw conclusions from evidence. The student derives a conclusion that was not given.",
            cognitiveDemand: "Decomposition and inference. The student is given data or a scenario and must determine what it means — moving from evidence to interpretation without being told the answer.",
            verbs: ["Analyse", "Identify", "Deduce", "Interpret", "Classify", "Distinguish", "Determine"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given that this isolate is resistant to all penicillins and cephalosporins but susceptible to carbapenems and vancomycin — identify the most likely resistance mechanism and rule out others' requires analysis of the resistance pattern, not recall of a definition.",
            examples: {
                microbialControlBasics:     "Kill curve data show a biphasic pattern: rapid initial kill followed by a persistent tail of survivors at sub-lethal antibiotic concentrations. Analyse what population of bacteria the tail represents and what implications this has for antibiotic treatment duration.",
                sterilisationAndDisinfection:"Spore strip biological indicators show growth after a 15-minute autoclave cycle but not after an 18-minute cycle at 121°C. Analyse what this reveals about the D-value of the test organism and what safety margin the 18-minute cycle provides.",
                antimicrobialAgents:        "An organism has MIC = 0.25 mg/L and MBC = 32 mg/L for antibiotic X. Analyse what these values reveal about the drug's mechanism of action against this organism and what clinical implications follow for treatment of a severe infection.",
                resistanceMechanisms:       "An organism is resistant to fluoroquinolones. MIC testing with and without an efflux pump inhibitor shows MIC drops from 16 mg/L to 1 mg/L in the presence of the inhibitor. Analyse what this reveals about the resistance mechanism and what it does NOT rule out."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, appropriateness, or adequacy of a microbial control method, clinical decision, or resistance management strategy. The student must apply criteria, weigh evidence, and defend a position.",
            cognitiveDemand: "Judgement with justification. The student identifies a flaw or makes a recommendation against explicit criteria — not just restating the correct answer but engaging with why the approach fails or succeeds.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Justify", "Appraise", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A nurse wipes an endoscope with 70% alcohol — evaluate this.' The student must identify it as insufficient (judgement), explain that the scope is semi-critical requiring HLD (criterion), explain why alcohol does not achieve HLD (mechanism), and state what should be done instead (correction). Merely saying 'alcohol is not enough' is not evaluate-level.",
            examples: {
                microbialControlBasics:     "A laboratory technician states: 'I always use 100% ethanol because a higher concentration must be more effective.' Evaluate this claim — identify the error in reasoning, explain the optimal concentration and mechanism, and state what the consequence of using 100% ethanol might be in practice.",
                sterilisationAndDisinfection:"Evaluate whether UV light is an appropriate sterilisation method for the interior surfaces of a biosafety cabinet between experiments. Address: mechanism, limitations, what it achieves vs what sterilisation requires, and what additional measures should be used.",
                antimicrobialAgents:        "A GP prescribes a 3-day course of broad-spectrum antibiotics for a patient with a viral upper respiratory tract infection 'just in case.' Evaluate this decision from the perspectives of: (a) clinical efficacy; (b) contribution to antimicrobial resistance; (c) disruption of normal microbiome.",
                resistanceMechanisms:       "Evaluate the claim: 'The solution to antimicrobial resistance is simply to develop new antibiotics faster.' Address whether new drug development alone can solve the resistance problem, with specific reference to the mechanisms and timescales of resistance emergence."
            }
        },

        create: {
            description: "Generate an original output: an experimental design, a stewardship protocol, a decontamination policy, or a resistance management strategy. The student integrates multiple concepts from the lesson into a coherent, novel, and scientifically plausible plan.",
            cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, requiring assembly of multiple concepts. A strong create-level response is internally consistent, addresses all aspects of the brief, and reflects genuine integration.",
            verbs: ["Design", "Propose", "Construct", "Formulate", "Develop", "Plan", "Draft"],
            whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design a decontamination protocol for a ward experiencing a C. difficile outbreak' requires the student to specify hand hygiene measures, environmental cleaning agents, isolation precautions, patient cohorting, and antibiotic stewardship measures — integrating microbiology, infection control, pharmacology, and public health principles into a novel plan.",
            examples: {
                microbialControlBasics:     "Design an experiment to determine the D-value of a bacterial endospore preparation at 110°C. Specify: inoculum preparation, exposure method, sampling time points, recovery medium, viable count method, how you would plot the data, and how you would calculate the D-value from the graph.",
                sterilisationAndDisinfection:"Draft a decontamination standard operating procedure (SOP) for a flexible bronchoscope following use on a patient with suspected pulmonary TB. Include pre-cleaning, manual cleaning, high-level disinfection method and agent selection, rinsing, drying, and storage — with justification for each step.",
                antimicrobialAgents:        "Propose a drug combination strategy for treating a suspected NDM-1-producing Klebsiella pneumoniae bacteraemia in a critically ill patient while awaiting definitive sensitivity results. Justify each drug's inclusion by mechanism, specify what sensitivity data you require to refine therapy, and explain how you would monitor for toxicity.",
                resistanceMechanisms:       "Formulate an antimicrobial stewardship intervention for a hospital with a rising rate of ESBL-producing E. coli urinary tract infections. Your proposal must address: empirical prescribing guidelines based on local antibiogram data, a review and de-escalation protocol once culture results are available, staff education components, and two metrics you would use to evaluate whether the intervention has been effective."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can define sterilisation and disinfection but cannot reliably distinguish them when given a clinical scenario",
                "Knows antibiotics treat bacterial infections but cannot explain the concept of selective toxicity or why antibiotics do not kill viruses",
                "Confuses bacteriostatic and bactericidal — often states that bacteriostatic drugs 'don't work' or 'are weaker'",
                "Cannot explain why endospores are more resistant than vegetative cells",
                "Associates 'resistance' with a patient becoming resistant to an antibiotic rather than the bacterium"
            ],
            immediateNextSteps: [
                "Build the microbial control spectrum as a visual ladder: sanitisation → disinfection → sterilisation. For each rung, write: (a) what it kills; (b) what it does not kill; (c) one method example. Master this ladder before any other content.",
                "Draw the bacterial endospore structure: cortex, coat, core — and annotate why each layer contributes to resistance. Then write: 'Only sterilisation kills spores' ten times, followed by one example of a method that does and one that does not.",
                "For bacteriostatic vs bactericidal: use the analogy — bacteriostatic = pressing pause on the bacteria; the immune system presses stop. Draw this as two separate diagrams showing what happens to cell count over time under each condition.",
                "For selective toxicity: always ask 'what is the target?' then 'does the human body have this target?' Practise with three drug classes: cell wall synthesis inhibitors (humans have no peptidoglycan — high selectivity), protein synthesis inhibitors (70S vs 80S — moderate selectivity), membrane disruptors (ergosterol vs cholesterol — variable selectivity).",
                "For resistance: replace the phrase 'the patient became resistant' with 'the bacteria became resistant' in every sentence — write this correction three times after every practice question that touches on resistance."
            ],
            misconceptionsToAddress: [
                "Patient becomes resistant to antibiotics → bacteria become resistant (see above)",
                "Bacteriostatic drugs are weaker → bacteriostatic drugs rely on immune system; choice depends on clinical context",
                "Disinfection and sterilisation are interchangeable → spectrum ladder above"
            ]
        },

        developing: {
            characteristics: [
                "Correctly applies sterilisation vs disinfection distinction in most scenarios but struggles with the Spaulding classification for semi-critical items",
                "Can name antibiotic classes and their general targets but cannot explain the molecular mechanism of selectivity for more than one or two classes",
                "Understands beta-lactamase as a resistance mechanism but cannot explain target modification or efflux pumps",
                "Knows MIC is 'the lowest concentration that works' but cannot explain MBC or interpret MIC/MBC ratios",
                "Cannot connect biofilm formation to the clinical problem of device-associated infections"
            ],
            immediateNextSteps: [
                "For Spaulding classification: create three cards — critical (sterile tissue contact → sterilisation), semi-critical (mucous membrane contact → HLD), non-critical (intact skin contact → low-level disinfection). Practice classifying ten different medical devices before checking answers.",
                "For antibiotic mechanisms: build a one-page target map — draw a bacterial cell and label five target zones: cell wall (beta-lactams, vancomycin), 30S ribosome (aminoglycosides, tetracyclines), 50S ribosome (macrolides, chloramphenicol), DNA gyrase (fluoroquinolones), folate pathway (sulfonamides, trimethoprim). Colour each zone and its drug class consistently in all notes.",
                "For resistance: add efflux pumps and target modification to your understanding as two additional columns in the beta-lactamase resistance table you already have. Use specific examples: MRSA (PBP2a = target modification), Pseudomonas MexAB (efflux), E. coli OprF loss (permeability).",
                "For MIC/MBC: practise the ratio rule — MBC/MIC ≤4 = bactericidal; >4 = bacteriostatic. Apply to five drug-organism pairs and connect to clinical context: why does it matter for endocarditis treatment?",
                "For biofilms: draw the four stages of biofilm formation (attachment, microcolony, maturation, dispersal) and annotate at which stage antibiotic penetration is most impaired. Then write one sentence about clinical implication."
            ],
            misconceptionsToAddress: [
                "Efflux pumps as unfamiliar concept → add to resistance comparison table alongside beta-lactamase",
                "MIC as the only relevant kinetic measure → MBC ratio rule above",
                "Biofilm resistance as antibiotic resistance → distinguish phenotypic biofilm protection from genetic resistance"
            ]
        },

        proficient: {
            characteristics: [
                "Correctly applies all Spaulding classification categories and selects appropriate decontamination agents",
                "Explains mechanisms of selective toxicity for all major antibiotic classes",
                "Identifies inhibition type from MIC data and sensitivity patterns with and without efflux pump inhibitors",
                "Connects resistance mechanisms to specific clinical organisms (MRSA, VRE, ESBL, NDM-1)",
                "Can interpret MIC, MBC, and kill curve data and draw clinical conclusions",
                "Understands biofilm formation stages and why device removal is often required"
            ],
            immediateNextSteps: [
                "Investigate the pharmacodynamic parameters — time-dependent vs concentration-dependent killing. For beta-lactams (time-dependent), the relevant parameter is time above MIC. For aminoglycosides (concentration-dependent), it is Cmax/MIC. Connect these to dosing strategies (continuous infusion for beta-lactams, once-daily dosing for aminoglycosides).",
                "Explore combination antibiotic therapy: research the mechanism of synergy between sulfonamides and trimethoprim (sequential block of same pathway) and between a beta-lactam and aminoglycoside against Gram-positive organisms. Understand synergy, additivity, and antagonism.",
                "Analyse a real hospital antibiogram: identify which drugs have resistance rates above 20% for common organisms in your local hospital and explain which drugs you would therefore avoid for empirical use.",
                "Research the van gene cluster in detail: draw the VanA pathway showing D-Ala-D-Ala → D-Ala-D-Lac substitution and explain precisely which hydrogen bond is lost and how that accounts for 1000-fold reduction in vancomycin affinity.",
                "Connect stewardship to resistance trajectory: review published data on the relationship between antibiotic consumption (defined daily doses per 1000 population) and resistance rates across European countries — this is the epidemiological evidence for stewardship."
            ],
            misconceptionsToAddress: [
                "All antibiotics treated the same in dosing → pharmacodynamic parameters differ; dosing strategy must match killing behaviour",
                "Stewardship as only a prescribing issue → connect to lab reporting, nursing administration, patient education, and agricultural use"
            ]
        },

        expert: {
            characteristics: [
                "Derives D-value calculations and sterility assurance level from first principles",
                "Critically evaluates published MIC data for methodological limitations (inoculum effect, medium composition, incubation conditions)",
                "Designs novel decontamination protocols applying evidence-based principles to non-standard settings",
                "Interprets whole-genome sequencing resistance data and connects genotype to phenotype",
                "Evaluates antibiotic stewardship interventions using quantitative metrics (defined daily doses, days of therapy, resistance rates)"
            ],
            immediateNextSteps: [
                "Critically read a published paper testing a novel disinfectant protocol: evaluate whether the organism tested is clinically representative, whether the contact time is realistic, whether organic load was included in the test system, and whether the outcome measure is appropriate.",
                "Apply pharmacokinetic/pharmacodynamic (PK/PD) modelling: use Monte Carlo simulation concepts to understand why a drug with MIC of 2 mg/L may achieve therapeutic target attainment in only 60% of patients at standard dosing — and what dose adjustment achieves 90% target attainment.",
                "Evaluate the evidence base for FMT in recurrent C. difficile: review the randomised trial data and assess the limitations (donor selection, standardisation, long-term safety). Connect to the concept of colonisation resistance as microbial control.",
                "Investigate CRISPR-Cas antimicrobials: understand the mechanism by which CRISPR-based bacteriophage-delivered systems could selectively eliminate specific resistance genes or specific bacterial strains — and evaluate the current barriers to clinical translation."
            ],
            misconceptionsToAddress: [
                "MIC as a fixed biological constant → MIC is assay-dependent; variations in inoculum, medium, pH, incubation time all affect the measured value — clinical breakpoints incorporate these uncertainties"
            ]
        }
    }
},

geneticDisorders: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about genetic disorders from memory. No explanation, connection, or application is required — only accurate reproduction of definitions, names, and stated facts.",
            cognitiveDemand: "Verbatim or near-verbatim recall. If a student cannot do this, they cannot access any higher level.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember response contains correct facts with no reasoning. 'Autosomal recessive requires two mutant alleles' is remember-level. Adding 'because one functional copy provides sufficient gene product' crosses into understand.",
            examples: {
                inheritancePatterns:        "List the four main Mendelian inheritance patterns. For each, state how many mutant alleles are required to produce the phenotype.",
                mutationTypes:              "Define missense mutation, nonsense mutation, frameshift mutation, and silent mutation.",
                chromosomalAbnormalities:   "Name the karyotype, syndrome name, and one clinical feature for trisomy 21, trisomy 18, Turner syndrome, and Klinefelter syndrome.",
                molecularGenetics:          "Name three molecular diagnostic techniques used to detect genetic disorders and state what each detects."
            }
        },

        understand: {
            description: "Explain the biological reasoning behind facts — connect cause and effect, genotype to phenotype, or mechanism to clinical outcome. The student must supply the 'why', not just the 'what'.",
            cognitiveDemand: "Translation and interpretation. A correct explanation that could not be produced by memorising a question-answer pair demonstrates understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires a causal link. 'X-linked recessive predominantly affects males' is remember. 'X-linked recessive predominantly affects males because males are hemizygous — they carry only one X chromosome, so a single mutant allele has no normal allele to compensate' is understand.",
            examples: {
                inheritancePatterns:        "Explain why autosomal recessive disorders can appear to skip generations, making specific reference to the phenotype of carriers.",
                mutationTypes:              "Explain why frameshift mutations are generally more damaging than missense mutations. Your answer must reference what each does to the downstream reading frame and protein.",
                chromosomalAbnormalities:   "Explain why maternal age is a risk factor for trisomy 21, connecting the mechanism to what happens to primary oocytes between fetal development and ovulation.",
                molecularGenetics:          "Explain why chromosomal microarray has largely replaced karyotyping as a first-line test for children with developmental delay, comparing the resolution and types of abnormality each detects."
            }
        },

        apply: {
            description: "Use inheritance rules, risk calculation methods, and mutation concepts to solve a new problem not seen in exactly this form before.",
            cognitiveDemand: "Procedure execution in a novel context. The student selects the correct rule or calculation, applies it correctly, and produces a specific numerical answer or pedigree interpretation.",
            verbs: ["Calculate", "Determine", "Predict", "Draw", "Apply", "Use", "Construct"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. Drawing a pedigree for an autosomal recessive family and calculating offspring probabilities is apply; stating that AR requires two alleles is remember.",
            examples: {
                inheritancePatterns:        "In a family where both parents are unaffected carriers of an autosomal recessive condition, calculate the probability that their next child will be: (a) affected; (b) a phenotypically normal carrier; (c) homozygous normal.",
                mutationTypes:              "A deletion removes 7 nucleotides from exon 5 of a gene. Predict whether this will produce a truncated protein, a frameshifted protein with a premature stop, or a full-length altered protein. Show your reasoning using the reading frame rule.",
                chromosomalAbnormalities:   "A carrier of a Robertsonian translocation rob(14;21) undergoes meiosis. Draw all possible gamete combinations for chromosomes 14 and 21, and predict the probability of viable Down syndrome offspring.",
                molecularGenetics:          "A clinical geneticist suspects a microdeletion syndrome in a child with developmental delay and dysmorphic features. The karyotype is normal. List in order the next two investigations you would recommend, with a one-sentence justification for each."
            }
        },

        analyze: {
            description: "Interpret pedigree data, mutation data, or clinical scenarios to deduce the most likely inheritance pattern, mutation type, or molecular mechanism from evidence provided.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data and must derive a conclusion that was not given to them, then justify it.",
            verbs: ["Identify", "Determine", "Deduce", "Distinguish", "Analyse", "Interpret", "Classify"],
            whatDistinguishesThisLevel: "Analyse requires the student to work from evidence to conclusion. 'Given this pedigree, identify the most likely inheritance pattern and justify your answer using three features of the pedigree' is analysis — the student examines the pattern and reasons systematically.",
            examples: {
                inheritancePatterns:        "A pedigree shows: both sexes affected in every generation; affected individuals always have one affected parent; one affected individual has an unaffected child. Analyse this pedigree — state the most likely inheritance pattern, justify using three specific pedigree features, and state one alternative pattern that cannot be fully excluded and why.",
                mutationTypes:              "A patient with suspected PKU has two PAH alleles sequenced: Allele 1 — c.1222C>T (p.Arg408Trp); Allele 2 — a deletion of exon 11. Analyse the likely effect of each allele on PAH protein and predict which will contribute more residual enzyme activity, with molecular justification for both.",
                chromosomalAbnormalities:   "A couple has had two children with Down syndrome. Standard karyotyping of both children shows trisomy 21 in all cells. Analyse whether this pattern should prompt parental karyotyping, what you are looking for, and how a positive parental finding would change the recurrence risk.",
                molecularGenetics:          "A whole exome sequencing report identifies a heterozygous missense variant of uncertain significance (VUS) in the BRCA1 gene in a woman with breast cancer. Analyse what additional lines of evidence would be needed to reclassify this variant as pathogenic or benign."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a claim, accuracy of a pedigree interpretation, appropriateness of a diagnostic strategy, or correctness of a stated risk. The student must apply criteria, identify errors, and defend a position.",
            cognitiveDemand: "Judgement with justification. The student identifies what is wrong, explains the criterion by which it fails, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Defend", "Appraise", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires judgement against a standard. Simply restating the correct fact is understand-level, not evaluate. The student must engage with the specific error, explain why it is wrong, and provide the correct reasoning.",
            examples: {
                inheritancePatterns:        "A student analyses a pedigree showing affected males in every generation linked through unaffected females and concludes: 'This is autosomal dominant because every generation is affected.' Evaluate this conclusion — state what the student got right, identify the specific error in their reasoning, state the most likely correct inheritance pattern, and give two pedigree features the student failed to consider.",
                mutationTypes:              "Evaluate the statement: 'Silent mutations have no biological effect and are therefore unimportant in genetic disorders.' Construct a specific counter-argument using at least two molecular mechanisms by which silent mutations can influence gene expression or disease.",
                chromosomalAbnormalities:   "A genetic counsellor tells a couple that because their previous child had trisomy 21 (free trisomy confirmed), their recurrence risk for Down syndrome is the same as any couple their age. Evaluate whether this advice is complete and accurate. Identify any important caveats the counsellor should have addressed.",
                molecularGenetics:          "Evaluate whether karyotyping alone is an appropriate first-line investigation for a 3-year-old with severe intellectual disability and autism spectrum disorder, but no dysmorphic features. Identify the limitations of karyotyping in this context and state what investigation should be used instead."
            }
        },

        create: {
            description: "Generate an original output — a pedigree, a risk calculation framework, a diagnostic strategy, or an experimental design — that integrates multiple concepts from the topic and addresses a specific clinical or scientific brief.",
            cognitiveDemand: "Synthesis and original production. The output must be internally consistent, scientifically plausible, and address the brief completely. It cannot be produced by retrieving memorised content.",
            verbs: ["Design", "Construct", "Propose", "Formulate", "Develop", "Plan", "Draft"],
            whatDistinguishesThisLevel: "Create requires original integration across multiple concepts. 'Design a genetic counselling strategy for a family with a newly diagnosed autosomal recessive disorder' requires combining inheritance risk, carrier testing, penetrance, diagnostic tools, and ethical principles — it cannot be answered from a single memorised procedure.",
            examples: {
                inheritancePatterns:        "Construct a complete pedigree spanning three generations for a family in which an autosomal recessive disorder appears in two siblings in generation III, both parents in generation II are unaffected, and one grandparent in generation I is an obligate carrier. Label all genotypes, indicate the proband, and calculate the probability that an unaffected sibling of the affected individuals is a carrier.",
                mutationTypes:              "Design an experiment using patient-derived fibroblasts to determine whether a novel VUS in a disease gene causes loss of protein function. Your design must specify: the molecular techniques used to assess protein levels and activity, appropriate controls, and what result would support pathogenicity versus benign classification.",
                chromosomalAbnormalities:   "A couple in which the woman is a known Robertsonian translocation carrier rob(13;21) seeks preconception counselling. Formulate a complete counselling framework that covers: the range of possible outcomes at conception, which outcomes are viable, the empirical recurrence risks, available screening and diagnostic options, and the relative merits of preimplantation genetic testing versus prenatal diagnosis.",
                molecularGenetics:          "Propose a complete molecular diagnostic pathway for a child presenting with developmental delay, seizures, and autistic features in whom standard karyotype is normal. Your proposal must specify: (a) the first-line genomic test and its rationale; (b) what to do if this is uninformative; (c) how you would interpret a variant of uncertain significance; (d) the role of parental testing; (e) when whole genome sequencing would be indicated."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can name dominant and recessive but cannot apply the distinction to a pedigree",
                "Knows that mutations change DNA but cannot distinguish the functional consequence of missense vs frameshift",
                "Confuses penetrance with expressivity — treats them as synonyms",
                "Cannot explain why X-linked recessive disorders predominantly affect males",
                "Cannot calculate offspring risk probabilities even for simple Aa × Aa crosses",
                "Treats chromosomal and gene-level disorders as the same category"
            ],
            immediateNextSteps: [
                "Before any pedigree work: master the Punnett square for Aa × Aa and Aa × aa. Practise until offspring ratios (1:2:1 and 1:1) are automatic. Draw every cross as a Punnett square until the pattern is internalised.",
                "Draw the four inheritance patterns as distinct pedigree shapes: AD (vertical chain), AR (horizontal affected siblings with unaffected parents), XLR (affected males connected through carrier females), mitochondrial (all children of affected mother). Name the visual signature of each before working on specific disorders.",
                "For penetrance vs expressivity: write one sentence for each using a different word class — 'Penetrance = whether; Expressivity = how much.' Draw two diagrams: one showing 5/10 genotype carriers with any phenotype (penetrance 50%); one showing those 5 with varying severity (variable expressivity).",
                "For X-linked recessive: draw a male karyotype (XY) and a female karyotype (XX) side by side. Write the genotype for a carrier female (X^A X^a) and an affected male (X^a Y). Explain in one sentence why the male has no compensating allele.",
                "For mutation types: draw a six-codon mRNA sequence and manually apply each mutation type — change one base (missense), create a stop codon (nonsense), delete one base (frameshift). Observe downstream consequences for each."
            ],
            misconceptionsToAddress: [
                "Dominant means more common → frequency vs dominance distinction (address explicitly)",
                "Carriers of AR disorders are ill → draw carrier phenotype as normal in pedigree",
                "X-linked = only affects females → correct using hemizygosity concept"
            ]
        },

        developing: {
            characteristics: [
                "Correctly constructs Punnett squares for autosomal crosses but makes errors on X-linked crosses",
                "Can identify inheritance pattern in straightforward pedigrees but fails with incomplete penetrance",
                "Distinguishes missense from frameshift in principle but cannot predict protein consequence for a specific mutation",
                "Can name trisomy 21 clinical features but cannot explain the mechanism of nondisjunction",
                "Confuses Robertsonian translocation carriers (phenotypically normal) with affected individuals",
                "Cannot apply Hardy-Weinberg to calculate carrier frequency from disease incidence"
            ],
            immediateNextSteps: [
                "For X-linked crosses: practise X^A X^a (carrier mother) × X^A Y (normal father) using an X-chromosome Punnett square — write the X and Y chromosomes explicitly on both axes. Calculate the probability that each son is affected and each daughter is a carrier. Repeat ten times with different X-linked disorders.",
                "For Hardy-Weinberg: practise from disease frequency → q² → q → p → 2pq (carrier frequency) using five autosomal recessive disorders with known frequencies. Write the five-step calculation explicitly each time until it is automatic.",
                "For nondisjunction: draw meiosis I with homologous pairs failing to separate. Show the four resulting cells: two disomic (n+1) and two nullisomic (n-1). Annotate what happens when each fertilises a normal haploid gamete.",
                "For Robertsonian translocation: draw the carrier karyotype (45 chromosomes — two acrocentrics fused). Draw all six possible meiotic segregation products and label which produce normal, carrier, trisomy, or monosomy offspring. Annotate which are viable.",
                "For incomplete penetrance in pedigrees: take a pedigree showing an apparently 'skipped' generation. Practise distinguishing between autosomal dominant with incomplete penetrance (obligate carrier present in skipped generation) and autosomal recessive (true skip). List the distinguishing features of each."
            ],
            misconceptionsToAddress: [
                "Translocation carrier is affected → draw translocation carrier pedigree with normal phenotype and affected trisomy offspring separately",
                "Hardy-Weinberg inversion (q = disease frequency) → practise q² → q sequence explicitly",
                "Nondisjunction always occurs at meiosis II → draw both meiosis I and II errors with different chromosomal outcomes"
            ]
        },

        proficient: {
            characteristics: [
                "Constructs and interprets pedigrees for all four Mendelian patterns plus mitochondrial and imprinting disorders",
                "Applies Hardy-Weinberg correctly for autosomal recessive disorders and can incorporate Bayesian risk revision",
                "Predicts molecular consequence of each mutation type for a given DNA sequence",
                "Correctly identifies nondisjunction stage from parental origin of extra chromosome",
                "Can distinguish penetrance from expressivity in a clinical scenario and apply each to risk communication",
                "Understands the two-hit hypothesis and can apply it to tumour suppressor gene disorders"
            ],
            immediateNextSteps: [
                "Practise Bayesian risk revision: given a woman who is the daughter of a carrier (prior risk 1/2) and who has two unaffected sons (conditional evidence), calculate the posterior probability that she is a carrier using a Bayesian table. Repeat with three unaffected sons.",
                "Apply locus heterogeneity: for a disorder with two causative genes (e.g. autosomal recessive non-syndromic hearing loss — GJB2, SLC26A4 etc.), calculate the probability that an affected child of two unrelated affected parents has mutations in the same vs different genes — and predict whether their children will be affected.",
                "Explore anticipation quantitatively: for a trinucleotide repeat disorder, graph repeat length against age of onset from published data. Identify the threshold above which penetrance approaches 100%. Connect this to the molecular mechanism of repeat expansion during DNA replication.",
                "Connect mutation type to therapy: for each of the following strategies — enzyme replacement (Gaucher's), exon skipping (DMD), stop codon readthrough (nonsense mutations in some CF alleles), antisense oligonucleotides (HD) — identify which mutation type each is designed to address and why the strategy matches the molecular defect.",
                "Analyse a published pedigree with apparent incomplete penetrance: use the pedigree to estimate penetrance as a proportion, then discuss how this affects genetic counselling risk statements."
            ],
            misconceptionsToAddress: [
                "Bayesian risk is intuitive → use structured table format to show how prior and conditional probabilities combine",
                "Therapy works for any mutation in the gene → connect each therapy explicitly to which mutation types it can address"
            ]
        },

        expert: {
            characteristics: [
                "Performs complete Bayesian risk analysis including carrier probability revision from negative test results",
                "Interprets whole exome or whole genome sequencing reports including VUS classification criteria (ACMG guidelines)",
                "Connects molecular pathogenesis to clinical phenotype at the level of specific protein domain, cellular pathway, and tissue distribution",
                "Designs diagnostic strategies selecting appropriate molecular tools matched to clinical presentation",
                "Applies population genetics (Hardy-Weinberg, founder effects, consanguinity) to interpret carrier frequencies and disease clustering"
            ],
            immediateNextSteps: [
                "Study the ACMG/AMP variant classification framework (2015): understand the five-tier classification (pathogenic, likely pathogenic, VUS, likely benign, benign) and the evidence criteria used to assign each — functional data, segregation, population frequency, in silico prediction, literature reports. Apply the framework to classify a novel BRCA2 missense variant using published resources.",
                "Explore somatic mosaicism: understand how a de novo mutation arising after fertilisation in a somatic cell produces clinical features in only some tissues, why the standard karyotype may be negative, and what level of mosaicism is detectable by different sequencing depths.",
                "Investigate pharmacogenomics as applied genetics: examine how variants in CYP2D6 (codeine metabolism) and TPMT (thiopurine toxicity) are used to guide drug dosing — connecting population allele frequencies, heterozygote effects, and clinical risk thresholds.",
                "Critically evaluate a published whole exome sequencing study in a rare disease cohort: assess the diagnostic yield, the proportion of VUS reported, the criteria used to prioritise candidate variants, and the biological validation performed."
            ],
            misconceptionsToAddress: [
                "Next-generation sequencing always gives a definitive answer → address diagnostic yield (~25–50% for rare disease WES) and the VUS problem",
                "Published pathogenicity classifications are permanent → review that ~10–20% of ClinVar variants are reclassified over time"
            ]
        }
    }
},


chromosomesKaryotypes: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about chromosome structure, karyotype conventions, and clinical syndromes from memory without requiring understanding of mechanism. The student reproduces correct information accurately.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No mechanistic reasoning required. If a student cannot do this, they cannot access higher levels.",
            verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Trisomy 21 is caused by three copies of chromosome 21' is remember-level. 'Trisomy 21 arises because maternal meiosis I non-disjunction fails to separate homologous chromosomes 21, producing an n+1 gamete which...' crosses into understand.",
            examples: {
                chromosomeStructure: "State the number of base pairs of DNA wrapped around one nucleosome. Name the four core histone proteins and state how many copies of each are present.",
                karyotypeAnalysis:   "Write the ISCN karyotype notation for a normal human female, a male with trisomy 21, and a female with Turner syndrome.",
                abnormalities:       "List the five acrocentric chromosome pairs in the human karyotype. State which types of chromosomes participate in Robertsonian translocations.",
                clinicalSyndromes:   "Name the syndrome associated with each karyotype: 47,+21; 45,X; 47,XXY; 47,XX,+18; del(5p).",
                sexChromosomes:      "State the Barr body formula. Calculate the number of Barr bodies in cells with the following karyotypes: 46,XX; 47,XXX; 47,XXY; 45,X."
            }
        },

        understand: {
            description: "Explain the biological meaning and mechanistic basis of chromosome facts — connect cause to effect, structure to function, and mechanism to clinical outcome. The student must supply the causal link, not merely reproduce it.",
            cognitiveDemand: "Translation and interpretation. The student rephrases mechanisms or explains consequences rather than reciting facts. Correct explanations that could not be produced by memorising question-answer pairs demonstrate understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
            whatDistinguishesThisLevel: "Understand requires mechanism or reason. 'Turner syndrome karyotype is 45,X' is remember. 'Turner syndrome presents with short stature because SHOX on Xp22 normally escapes X-inactivation and is expressed from both X chromosomes; in 45,X there is only one copy, causing haploinsufficiency' is understand.",
            examples: {
                chromosomeStructure: "Explain why the DNA in a human cell must be compacted through multiple levels of organisation rather than existing as naked double-stranded DNA in the nucleus. Your answer must reference the ratio of DNA length to nuclear diameter.",
                karyotypeAnalysis:   "Explain why cells must be arrested in metaphase for karyotype preparation. State specifically what happens to chromosome morphology at other stages of the cell cycle and why those stages are unsuitable.",
                abnormalities:       "Explain why balanced translocation carriers are phenotypically normal but at risk for chromosomally abnormal offspring. Your answer must describe what happens during meiosis in a carrier.",
                clinicalSyndromes:   "Explain why autosomal monosomies are lethal in humans while monosomy X (Turner syndrome) is compatible with life. Your answer must reference dosage compensation and X-inactivation.",
                nonDisjunction:      "Explain why the risk of trisomy 21 increases with maternal age. Your answer must describe the mechanism of meiotic arrest and the specific molecular event that becomes more error-prone over time."
            }
        },

        apply: {
            description: "Use chromosome biology knowledge and karyotype conventions to solve specific problems that have not been seen before in exactly this form. The student selects the correct approach and applies it accurately.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which rule or method applies, sets it up correctly, and reaches a specific answer — numerical, notational, or predictive.",
            verbs: ["Calculate", "Determine", "Predict", "Write", "Construct", "Apply", "Classify"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Write the ISCN notation for a female with a Robertsonian translocation between chromosomes 14 and 21' requires applying ISCN rules to a specific case the student has not seen written out before.",
            examples: {
                chromosomeStructure: "A human chromosome contains 1.5 × 10⁸ bp of DNA. Calculate the length of this DNA as naked B-form double helix (use 0.34 nm per base pair). Calculate the compaction factor required to produce a metaphase chromosome 5 μm in length.",
                karyotypeAnalysis:   "Write the full ISCN karyotype notation for each of the following: (a) a female carrier of a balanced reciprocal translocation between the long arm of chromosome 9 at band q34 and the long arm of chromosome 22 at band q11.2; (b) a male with mosaic Down syndrome (47,+21 in 80% of cells, 46 in 20%).",
                abnormalities:       "A woman carries a Robertsonian translocation rob(14;21). Draw the trivalent she forms at meiosis I and list all possible gamete types. For each gamete type, state the resulting zygote constitution after fertilisation by a chromosomally normal sperm.",
                clinicalSyndromes:   "Predict the number of Barr bodies visible in somatic cells from each of the following individuals: 45,X; 46,XX; 47,XXX; 47,XXY; 48,XXXY; 49,XXXXY. Apply the Barr body formula and state the expected sex phenotype for each.",
                nonDisjunction:      "A trisomy 21 child has microsatellite markers on chromosome 21 typed as follows: maternal grandmother alleles A1 and A2; maternal grandfather alleles A3 and A4; the child carries A1, A3, and A4. Determine at which stage of meiosis, and in which parent, non-disjunction occurred. Justify your answer."
            }
        },

        analyze: {
            description: "Break down karyotype data, clinical information, or experimental results into components; identify patterns; and reach conclusions from evidence. The student works from data to interpretation without being told the answer.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data or a scenario and must determine what it means — reaching a conclusion not explicitly provided and justifying it from the available information.",
            verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. 'Given a karyotype showing 45 chromosomes with a large metacentric chromosome replacing two acrocentrics in a phenotypically normal man, identify the abnormality and explain its meiotic consequences' — the student must examine the pattern and deduce the Robertsonian translocation, without being told what to look for.",
            examples: {
                chromosomeStructure: "A chromatin immunoprecipitation (ChIP) experiment shows high levels of H3K27 trimethylation across a 2 Mb region of chromosome 11 in fibroblasts. Analyse what this implies about chromatin state, transcriptional activity, and the underlying biological regulation in that region.",
                karyotypeAnalysis:   "A karyotype report shows: 46 chromosomes total; one chromosome 22 is abnormally small; one chromosome 9 is abnormally large; G-band pattern analysis shows material from 9q34 has been translocated to 22q11.2. Analyse this finding — identify the abnormality type, write the ISCN notation, and determine whether this is likely to be a germline or somatic finding given the clinical context (a patient with CML).",
                abnormalities:       "Microsatellite analysis of a trisomy 18 child reveals: two maternal alleles (identical) and one paternal allele on chromosome 18. Analyse whether non-disjunction occurred at meiosis I or meiosis II, in which parent, and what the gamete constitution must have been to produce this result.",
                clinicalSyndromes:   "A 30-year-old woman presents with primary infertility. Karyotype: 46,XX in 70% of lymphocytes and 45,X in 30%. FSH is elevated (45 IU/L). Analyse the likely diagnosis, explain why mosaic individuals can have milder phenotypes than full monosomy X, and assess what the elevated FSH indicates about ovarian function.",
                nonDisjunction:      "Three siblings each have a child with Down syndrome. The children have karyotypes of 47,XX,+21; 46,XX; and 46,XY,rob(14;21) respectively. Analyse what these three karyotypes together imply about the family's chromosomal constitution, and identify which parent(s) should be karyotyped and why."
            }
        },

        evaluate: {
            description: "Make supported judgements about the validity, accuracy, or appropriateness of a chromosomal interpretation, clinical claim, diagnostic approach, or experimental conclusion. The student identifies what is wrong, explains the criterion by which it fails, and states what would be correct.",
            cognitiveDemand: "Judgement with justification. Not just identification of error but explanation of why it is wrong and what the correct interpretation or approach should be.",
            verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A genetic counsellor tells a couple that their NIPT result showing high risk for trisomy 21 is diagnostic — evaluate this claim' requires the student to identify the error (NIPT is screening, not diagnostic), explain why (cfDNA analysis has limitations including confined placental mosaicism and false positives), and state what should be done (invasive diagnostic karyotyping). Simply restating that NIPT is a screening test without engaging with the counsellor's specific claim is understand-level.",
            examples: {
                chromosomeStructure: "Evaluate the claim: 'Since females inactivate one X chromosome, they are functionally equivalent to males with respect to X-linked gene dosage.' Identify the specific aspect of X-inactivation that makes this claim incorrect, quantify the proportion of X-linked genes for which females maintain biallelic expression, and state the clinical consequence that demonstrates the claim's inadequacy.",
                karyotypeAnalysis:   "A laboratory reports that array CGH has replaced conventional G-banded karyotyping for all prenatal diagnostic purposes. Evaluate whether this statement is justified. Assess what array CGH detects better than G-banding, what G-banding detects that array CGH misses, and conclude which method is appropriate for which clinical indication.",
                abnormalities:       "A genetic counsellor advises a couple that their risk of having a child with Down syndrome is low because 'the mother's NIPT was negative.' The mother is a known carrier of rob(14;21). Evaluate this counselling — identify the specific error, explain why it is wrong with reference to the mechanism of translocation Down syndrome, and state what the appropriate investigation and counselling should be.",
                clinicalSyndromes:   "Evaluate the claim that '47,XYY males are predisposed to violent and antisocial behaviour.' Assess the quality of evidence used to support this claim historically, identify the methodological flaw in the original studies, and state the current scientific consensus on the phenotype of 47,XYY individuals.",
                nonDisjunction:      "A researcher claims that because meiosis II non-disjunction produces two normal gametes alongside the two abnormal gametes, it is 'half as dangerous' as meiosis I non-disjunction, which produces only abnormal gametes. Evaluate this mathematical reasoning — assess whether it is factually correct about gamete proportions, and evaluate whether 'dangerousness' can be equated to the proportion of abnormal gametes produced."
            }
        },

        create: {
            description: "Generate something new: an experimental design, a decision algorithm, a mechanistic model, an annotated pathway, or a novel counselling framework. The student integrates multiple concepts into a coherent, original output that addresses a specific goal.",
            cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and that requires combining multiple concepts. A strong create-level response is internally consistent, scientifically plausible, and completely addresses the brief.",
            verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
            whatDistinguishesThisLevel: "Create requires original output — not retrieval or calculation. 'Design a diagnostic algorithm for a couple referred for recurrent miscarriage, incorporating karyotyping, FISH, array CGH, and NIPT in the correct sequence with decision points' requires assembling multiple methodologies into a new clinical workflow. It cannot be answered by reproducing a memorised procedure.",
            examples: {
                chromosomeStructure: "Design an experiment to determine whether a novel histone modification (H3K18 butyrylation) activates or represses transcription in human fibroblasts. Your design must specify: (a) the ChIP method to detect the modification genome-wide; (b) a complementary transcriptomic approach (RNA-seq); (c) how you would correlate the two datasets; (d) a functional test to confirm causality (not just correlation); (e) appropriate controls.",
                karyotypeAnalysis:   "Construct a decision algorithm for a cytogenetics laboratory receiving a prenatal sample. The algorithm must specify: (a) which technique to use first (G-banding vs FISH vs array CGH vs NIPT) based on clinical indication; (b) decision points after each result; (c) when additional techniques are triggered; (d) what constitutes a reportable result vs a variant of uncertain significance. The algorithm must cover at least five distinct clinical scenarios.",
                abnormalities:       "Propose a genetic counselling session structure for a couple where the woman carries rob(14;21). Your proposal must: (a) explain in lay terms what the translocation is and why she is healthy; (b) explain the mechanism of unbalanced segregation at meiosis using a visual aid you would design; (c) quantify recurrence risk accurately; (d) present all available reproductive options (natural conception with prenatal testing, PGT, donor eggs, adoption) with their associated detection rates, risks, and limitations; (e) specify which family members should be offered karyotyping and why.",
                clinicalSyndromes:   "Develop a structured differential diagnosis framework for a paediatrician encountering a newborn with hypotonia, unusual facial features, and congenital heart defect. Your framework must: (a) list the chromosomal syndromes that should be considered and the distinguishing features of each; (b) specify the order and rationale for genetic investigations (karyotype, FISH, array CGH, specific gene panel); (c) identify at what point a chromosomal vs single-gene vs epigenetic aetiology becomes more or less likely; (d) propose a follow-up investigation plan for a result showing a chromosome 22q11.2 microdeletion.",
                nonDisjunction:      "Design a research project to test the hypothesis that a specific cohesin subunit (REC8) deteriorates at a faster rate in oocytes from women over 38 than in oocytes from women under 30. Your design must include: (a) sample collection strategy and ethical considerations; (b) molecular method to quantify REC8 at chromosome arm regions specifically during meiosis I arrest; (c) a parallel outcome measure (aneuploidy rate in produced embryos using PGT-A); (d) statistical analysis plan including sample size justification; (e) expected results if the hypothesis is correct and one alternative explanation you would need to rule out."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can state the human diploid number (46) and haploid number (23)",
                "Knows chromosomes contain DNA but cannot describe compaction levels",
                "Can name Down syndrome and associate it with an extra chromosome but cannot write karyotype notation",
                "Confuses chromosome and chromatid freely",
                "Cannot distinguish numerical from structural abnormalities",
                "Does not know the Barr body formula"
            ],
            immediateNextSteps: [
                "Before anything else: draw a replicated chromosome with two sister chromatids labelled, showing the centromere joining them. Write 'THIS IS ONE CHROMOSOME' next to it. Repeat until the chromosome-vs-chromatid distinction is fully internalised.",
                "Learn ISCN notation for five core karyotypes before learning any syndrome features: 46,XX; 46,XY; 47,XX,+21; 45,X; 47,XXY. Write each 10 times with the notation rule (Total, Sex, Abnormality — TSA) written above.",
                "Build the Barr body formula from first principles: X-inactivation silences all X chromosomes beyond the first. One X remains active. Each silenced X = one Barr body. Write: Barr bodies = X chromosomes − 1 and verify it for 46,XX (1 body) and 46,XY (0 bodies) immediately.",
                "Draw a single nucleosome from memory — DNA wrapped around a cylinder of eight histones. Write 147 bp and 11 nm next to it. Do not proceed to 30 nm fibre until this drawing is automatic.",
                "Use one clinical anchor per syndrome before memorising feature lists: Down = 'extra 21'; Turner = 'missing second sex chromosome'; Klinefelter = 'extra X in a male'. Lock in the karyotype notation for each anchor before adding clinical features."
            ],
            misconceptionsToAddress: [
                "Chromosome = chromatid → sister chromatid diagram (above)",
                "Replication doubles chromosome number → draw before/after replication showing 46 chromosomes becoming 46 chromosomes with 92 chromatids",
                "All Down syndrome is the same → introduce trisomy vs translocation Down syndrome early"
            ]
        },

        developing: {
            characteristics: [
                "Can write ISCN notation for common aneuploidies correctly most of the time",
                "Understands non-disjunction as a concept but cannot reliably distinguish meiosis I vs II outcomes",
                "Can name clinical features of Down, Turner, and Klinefelter syndromes",
                "Applies Barr body formula correctly for simple cases but errors on 48,XXXY or 49,XXXXY",
                "Cannot explain why balanced translocation carriers are phenotypically normal",
                "Confuses paracentric and pericentric inversions"
            ],
            immediateNextSteps: [
                "For meiosis I vs II non-disjunction: draw both processes side by side with the gamete products of each. Use the anchor: 'Meiosis I = Both or Neither (two different homologues); Meiosis II = Twins or None (two identical chromatids).' Practise identifying which occurred from microsatellite data (same alleles vs different alleles in the trisomic pair).",
                "For balanced translocations: draw the pachytene configuration showing both derivative chromosomes paired with their normal homologues. Show all four segregation outcomes. Conclude in writing: 'The carrier has all the same genes — just rearranged. The offspring may have duplications or deletions.' Repeat for both reciprocal and Robertsonian types.",
                "For inversion types: use the centromere as the anchor. Paracentric = both breaks on the SAME arm (centromere NOT included). Pericentric = breaks on BOTH arms (centromere IS included). Draw a chromosome with both break points marked and ask: 'Does the segment that flips include the centromere?' If yes = pericentric.",
                "For complex Barr body calculations: always write X − 1 = Barr bodies BEFORE counting. For 48,XXXY: 3 X chromosomes − 1 = 2 Barr bodies. For 49,XXXXY: 4 − 1 = 3. Practise with all unusual karyotypes until the formula overrides any intuitive counting.",
                "For clinical syndrome feature consolidation: use your comparison table (from comparisonTables study tips) as a self-test grid. Cover all columns except syndrome name. Reconstruct every cell from memory. Identify the two syndromes you most frequently confuse and write a one-sentence distinction between them."
            ],
            misconceptionsToAddress: [
                "Meiosis I vs II outcomes → Both/Neither and Twins/None anchors (above)",
                "Balanced carrier = affected → derivative chromosome drawing showing no net DNA loss",
                "Paracentric vs pericentric confusion → centromere-inclusion rule (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Writes ISCN notation correctly for all common and uncommon karyotypes including translocations and deletions",
                "Correctly predicts gamete types and offspring risks for Robertsonian and reciprocal translocation carriers",
                "Accurately applies the Barr body formula to all karyotypes",
                "Explains X-inactivation mechanism including Xist, clonal inheritance, and escape from inactivation",
                "Connects clinical syndromes to mechanisms at the level of specific genes (SHOX in Turner, BCR-ABL1 in CML)",
                "Distinguishes the resolution limits of G-banding, FISH, array CGH, and NIPT"
            ],
            immediateNextSteps: [
                "Investigate the molecular basis of X-inactivation beyond Xist: research Polycomb repressive complex recruitment, H3K27 trimethylation, and DNA methylation at CpG islands on the inactive X — understand why these three layers ensure stable, clonal inheritance of the silent state.",
                "Work through quantitative non-disjunction risk modelling: given maternal age-specific trisomy 21 frequencies (look up published tables), calculate absolute risk at ages 25, 35, 40, and 45. Understand why NIPT positive predictive value (PPV) is low even at high sensitivity in younger women (Bayes' theorem applied to low prior probability).",
                "Explore chromothripsis: research this phenomenon where massive chromosomal shattering and reassembly occurs in a single catastrophic event in cancer cells. Connect it to the general principle of chromosomal instability and its role in tumour evolution.",
                "Connect cytogenetics to pharmacology: for the Philadelphia chromosome (t(9;22) → BCR-ABL1), trace the logic from chromosomal rearrangement → fusion protein → constitutive kinase activity → imatinib design → resistance mechanism (ABL1 kinase domain mutations). This is the complete precision oncology chain from karyotype to bedside.",
                "Investigate confined placental mosaicism and its implications for NIPT interpretation — understand why cfDNA in maternal blood primarily reflects placental (trophoblast) DNA and why discordance between NIPT result and foetal karyotype can occur."
            ],
            misconceptionsToAddress: [
                "X-inactivation = complete silencing → investigate the 15–25% escape genes and connect to Turner syndrome phenotype",
                "NIPT as diagnostic → Bayesian analysis showing PPV limitations even with 99% sensitivity"
            ]
        },

        expert: {
            characteristics: [
                "Derives the expected gamete frequencies for Robertsonian translocation carriers from first principles and compares to empirical frequencies, explaining the discrepancy",
                "Evaluates published cytogenetics studies critically — assesses resolution limits, statistical power, and appropriate diagnostic method selection",
                "Connects molecular mechanisms of chromosome segregation (cohesin, kinetochore, spindle assembly checkpoint) to clinical aneuploidy",
                "Designs multi-step investigations for complex clinical genetics cases integrating karyotype, FISH, array CGH, sequencing, and clinical phenotype",
                "Applies population genetics concepts (Hardy-Weinberg, selection against aneuploid embryos) to interpret observed frequencies of chromosomal syndromes"
            ],
            immediateNextSteps: [
                "Critically evaluate the clinical utility of PGT-A (Preimplantation Genetic Testing for Aneuploidy) in IVF — assess the evidence that selecting euploid embryos improves live birth rates vs the evidence for harm from biopsy, mosaicism misclassification, and exclusion of potentially viable aneuploid embryos. This requires engaging with contradictory RCT evidence.",
                "Apply the spindle assembly checkpoint (SAC) mechanism to explain why its partial failure in ageing oocytes produces aneuploidy — research the role of BubR1, Mad2, and the mitotic checkpoint complex in detecting kinetochore tension, and the evidence for SAC weakening with maternal age.",
                "Investigate the population genetics of trisomy 21 viability: starting from the estimated ~80% in-utero loss rate of trisomy 21 conceptuses, calculate the expected birth prevalence from the known maternal age-specific conception rates. Compare to observed birth prevalence and explain any discrepancy in terms of selection pressure and prenatal diagnosis termination rates.",
                "Research the long-range chromosomal architecture beyond loop domains — explore topologically associating domains (TADs), compartments A and B, and how disruption of TAD boundaries by chromosomal rearrangements can activate proto-oncogenes without directly disrupting their coding sequences (enhancer hijacking). This connects karyotype-level rearrangements to molecular oncology."
            ],
            misconceptionsToAddress: [
                "Theoretical Robertsonian segregation ratios = empirical ratios → investigate gametic selection and embryonic lethality as the source of discrepancy",
                "Array CGH has replaced karyotyping → identify the specific clinical scenarios where G-banding still provides information array CGH cannot (balanced rearrangements, ploidy)"
            ]
        }
    }
},

inheritancePatterns: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about inheritance — definitions, laws, ratios, and symbols — from memory without requiring explanation of mechanism or application.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'A monohybrid F2 cross gives a 3:1 phenotypic ratio' is remember. 'The 3:1 ratio arises because...' crosses into understand.",
                    examples: {
                        mendelianBasics:     "State Mendel's Law of Segregation and Law of Independent Assortment. Define homozygous and heterozygous.",
                        dominance:           "List the three types of dominance relationship. For each, state the expected phenotypic ratio in an F2 cross.",
                        sexLinkage:          "State the genotypes possible for a human female and male at the X-linked locus for colour blindness.",
                        extensions:          "Name three extensions of Mendelian genetics that produce non-3:1 ratios. List the expected phenotypic ratio for each.",
                        pedigree:            "Label the symbols used in a pedigree diagram: affected individual, carrier, mating line, offspring line."
                    }
                },

                understand: {
                    description: "Explain the biological mechanism behind Mendelian patterns — connect chromosome behaviour to phenotypic ratios, and dominance relationships to molecular function.",
                    cognitiveDemand: "Translation and interpretation. The student supplies causal links, not memorised facts.",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
                    whatDistinguishesThisLevel: "Understand requires a mechanism. '3:1 ratio' is remember. 'The 3:1 ratio arises because heterozygous parents produce gametes carrying either allele with equal probability, and random fusion means the recessive phenotype appears only when two recessive gametes combine' is understand.",
                    examples: {
                        mendelianBasics:     "Explain why the Law of Segregation is a direct consequence of meiosis I chromosome behaviour. Your answer must connect homologous chromosome separation to allele separation in gametes.",
                        dominance:           "Explain the molecular basis of incomplete dominance — why does a heterozygote show an intermediate phenotype rather than the dominant phenotype?",
                        sexLinkage:          "Explain why X-linked recessive traits are expressed much more frequently in males than females. Your answer must reference hemizygosity specifically.",
                        extensions:          "Explain how the 9:3:4 ratio in recessive epistasis arises from a 9:3:3:1 dihybrid ratio. Identify which class collapses into which, and explain the molecular reason.",
                        pedigree:            "Explain how the presence of two unaffected parents with an affected child narrows the possible inheritance patterns. Which patterns are excluded and why?"
                    }
                },

                apply: {
                    description: "Use Mendelian rules and probability calculations to solve a novel cross problem or pedigree — select the correct tool and execute it accurately.",
                    cognitiveDemand: "Procedure execution in a new context. The student decides which rule applies, sets it up, and carries it through to a specific answer.",
                    verbs: ["Calculate", "Predict", "Construct", "Determine", "Perform", "Solve", "Use"],
                    whatDistinguishesThisLevel: "Apply requires a new problem, not a repeated worked example. The output is a probability, a Punnett square result, or a specific genotype determination.",
                    examples: {
                        mendelianBasics:     "Two carriers of an autosomal recessive disease (Ff × Ff) are expecting a child. Calculate: (a) the probability the child has the disease; (b) the probability the child is a carrier; (c) given the child is unaffected, the probability that child is a carrier.",
                        dominance:           "Cross a red snapdragon (R^R R^R) with a white snapdragon (R^W R^W). Predict the F1 phenotype. Then cross two F1 plants and predict the F2 phenotypic ratio. Use the correct dominance relationship.",
                        sexLinkage:          "A carrier woman (X^H X^h) and a normal man (X^H Y) have children. Construct the Punnett square. Calculate the probability that: (a) a son is affected; (b) a daughter is a carrier; (c) their next child is an affected son.",
                        extensions:          "Given an ABO blood group cross I^A i × I^B i, predict all possible offspring blood types and calculate the probability of each phenotype.",
                        pedigree:            "A pedigree shows an autosomal trait: two unaffected parents, one affected son, and one unaffected daughter. Determine the inheritance pattern, assign genotypes to all four individuals, and calculate the probability that the unaffected daughter is a carrier."
                    }
                },

                analyze: {
                    description: "Examine phenotypic ratios, pedigree data, or genotypic outcomes and derive conclusions about inheritance pattern, genotype, or gene interaction from the evidence.",
                    cognitiveDemand: "Decomposition and inference. The student is given data and must determine what it means — not told the answer.",
                    verbs: ["Identify", "Deduce", "Determine", "Classify", "Analyse", "Distinguish", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires working from evidence to conclusion. Given a pedigree with specific affected individuals, the student must deduce the pattern — not apply a known pattern to a known example.",
                    examples: {
                        mendelianBasics:     "A cross between two plants with purple flowers produces 42 purple and 58 white offspring. Determine the most likely genotypes of the parents and identify the inheritance pattern. Explain any deviation from expected ratio.",
                        dominance:           "A cross between two individuals of the same phenotype produces offspring in a 1:2:1 phenotypic ratio (not 3:1). Analyse what type of dominance is operating and determine the parental genotypes.",
                        sexLinkage:          "Analyse the following pedigree data: all affected individuals are male; no affected male has an affected father; some carrier females have affected sons. Identify the most likely inheritance pattern, justify your conclusion using all three observations, and assign genotypes to the key individuals.",
                        extensions:          "Two black Labrador parents produce offspring in a ratio of 9 black : 3 brown : 4 yellow. Analyse what type of gene interaction this represents, identify which class has merged, and explain the molecular basis for the epistatic interaction.",
                        pedigree:            "A pedigree spanning four generations shows the following: trait appears in every generation; both males and females are affected in roughly equal numbers; affected individuals always have at least one affected parent. Analyse the possible inheritance patterns, eliminate those inconsistent with the data, and state the most probable pattern."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity of a genetic claim, inheritance pattern assignment, or reasoning about probability — identify errors and correct them with justification.",
                    cognitiveDemand: "Judgement with justification. The student applies criteria, identifies flaws, and defends a correct position.",
                    verbs: ["Evaluate", "Critique", "Assess", "Judge", "Verify", "Defend", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. Simply restating the correct answer without engaging with the error is understand-level, not evaluate.",
                    examples: {
                        mendelianBasics:     "A student states: 'Since the expected ratio is 3:1, if a couple has four children, exactly three will be dominant phenotype and one will be recessive.' Evaluate this claim — identify the conceptual error precisely, explain the correct interpretation of phenotypic ratios, and state what would actually be correct.",
                        dominance:           "A student classifies a trait as incomplete dominance because 'the heterozygote is slightly different from the homozygous dominant.' Evaluate whether this is sufficient evidence. State what additional data would be needed to confirm incomplete dominance vs reduced expressivity of complete dominance.",
                        sexLinkage:          "A student concludes from a pedigree that a trait is X-linked recessive because 'there are more affected males than females.' Evaluate this claim — identify whether this single observation is sufficient for a definitive conclusion, state what additional pedigree features would be needed, and explain why.",
                        extensions:          "A student claims: 'Since the ABO blood group system involves three alleles, it cannot follow Mendelian genetics.' Evaluate and refute this claim, explaining how multiple alleles remain consistent with Mendel's laws at the level of any individual diploid organism.",
                        pedigree:            "Two geneticists examine the same pedigree. Geneticist A concludes autosomal recessive. Geneticist B concludes X-linked recessive. Evaluate both conclusions against the pedigree data provided — state which is better supported, identify which pedigree feature(s) distinguish the two models, and explain what single additional piece of information would definitively resolve the disagreement."
                    }
                },

                create: {
                    description: "Design a breeding experiment, construct a diagnostic pedigree, formulate a genetic counselling scenario, or derive a probability model — integrating multiple inheritance concepts into an original, coherent output.",
                    cognitiveDemand: "Synthesis and original production. The student produces something that did not exist before, combining concepts from across the lesson.",
                    verbs: ["Design", "Construct", "Formulate", "Propose", "Develop", "Plan", "Generate"],
                    whatDistinguishesThisLevel: "Create requires original output. Designing a multi-generation breeding scheme or constructing a pedigree that can only be explained by one inheritance pattern both require assembly of multiple concepts into a new product.",
                    examples: {
                        mendelianBasics:     "Design a three-generation breeding scheme to produce a true-breeding line of pea plants that are homozygous dominant for both seed shape and seed colour from dihybrid parents. Specify each cross, the expected offspring ratios, and how you would identify true-breeding individuals at each stage.",
                        dominance:           "Construct a hypothetical cross scenario involving two genes where the F2 ratio would be 1:2:1 at both loci simultaneously. Specify the dominance type, parental genotypes, F1 genotype, and all F2 genotype and phenotype classes. Confirm your design is internally consistent.",
                        sexLinkage:          "Design a pedigree spanning three generations that is consistent ONLY with X-linked recessive inheritance and cannot be explained by autosomal recessive inheritance. Specify the exact individuals, their affected/unaffected status, and the feature(s) of your pedigree that rule out the autosomal recessive explanation.",
                        extensions:          "Formulate a genetic counselling report for a couple where the man has blood type AB and the woman has blood type O. Predict all possible blood types of their children, calculate the probability of each, and explain the implications for any future paternity dispute involving a child with blood type B.",
                        pedigree:            "Construct a decision-tree that a student could use to determine the inheritance pattern of any trait from a pedigree alone. The tree must correctly distinguish among all five patterns: autosomal dominant, autosomal recessive, X-linked dominant, X-linked recessive, and Y-linked, using yes/no questions applied to pedigree features."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can define gene, allele, dominant, recessive, homozygous, heterozygous",
                        "Can construct a monohybrid Punnett square when explicitly told the cross",
                        "Knows the 3:1 ratio but cannot explain why it arises",
                        "Cannot distinguish between genotypic and phenotypic ratios",
                        "Conflates dominance with frequency — believes dominant alleles are more common",
                        "Does not know the difference between incomplete dominance and codominance"
                    ],
                    immediateNextSteps: [
                        "Before Punnett squares: draw the gamete formation step explicitly — take Aa, draw the two gametes (A and a) separately, repeat for the other parent, then construct the square. Never go straight to the grid without showing gamete separation.",
                        "Phenotypic vs genotypic ratio: colour-code the Punnett square — one colour for all dominant phenotype genotypes (AA and Aa), another for recessive (aa). Count the colours, not the cells. Practise until automatic.",
                        "Dominance ≠ frequency: introduce Hardy-Weinberg preview — 'dominant alleles can be rare; recessive alleles can be common.' Use the example of achondroplasia (dominant dwarfism) which is rare despite being dominant.",
                        "Incomplete dominance vs codominance: draw side-by-side diagrams — incomplete dominance shows a test tube with pink pigment (blend); codominance shows a test tube with discrete red and white beads (both present, not blended). Use MN blood group (codominance) and snapdragon flower colour (incomplete dominance) as paired examples."
                    ],
                    misconceptionsToAddress: [
                        "Dominant = more common → Hardy-Weinberg preview",
                        "3:1 guaranteed in every family → probability reframe",
                        "Incomplete dominance = codominance → side-by-side diagram"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can complete dihybrid Punnett squares with occasional errors in filling cells",
                        "Understands 3:1 and 9:3:3:1 ratios but cannot extend to modified ratios",
                        "Can identify X-linked recessive from a pedigree when told to look for it, but struggles to initiate pedigree analysis independently",
                        "Uses probability rules inconsistently — applies product rule but forgets sum rule",
                        "Cannot assign genotypes to all individuals in a pedigree — assigns phenotype labels instead",
                        "Confuses epistasis with dominance between alleles of the same gene"
                    ],
                    immediateNextSteps: [
                        "For dihybrid Punnett squares: practise generating the four gamete types first (AB, Ab, aB, ab) from AaBb before filling any cells. The 4×4 grid error almost always originates at the gamete generation step.",
                        "For modified ratios: always start from the standard 9:3:3:1 and ask 'which classes are collapsing together and why?' — never memorise the modified ratio without deriving it from the standard one.",
                        "For pedigree analysis: use a four-step protocol — (1) is it sex-biased? (2) does it skip generations? (3) can two unaffecteds have an affected child? (4) does affected father ever have affected son? Apply this protocol systematically before reaching any conclusion.",
                        "For epistasis vs dominance: epistasis involves TWO different genes (different loci); dominance involves TWO alleles of ONE gene (same locus). Draw this on every epistasis problem: two separate chromosomes with one gene each."
                    ],
                    misconceptionsToAddress: [
                        "Gamete generation errors → pre-grid gamete step",
                        "Modified ratio memorisation without derivation → collapse-from-9:3:3:1 method",
                        "Epistasis confused with dominance → locus diagram"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Constructs and interprets monohybrid, dihybrid, and test cross Punnett squares fluently",
                        "Correctly identifies all five inheritance patterns from a pedigree using diagnostic criteria",
                        "Calculates offspring probabilities using product and sum rules accurately",
                        "Predicts modified ratios for epistasis and connects them to molecular gene interaction",
                        "Determines ABO blood group genotypes and predicts offspring distributions",
                        "Can assign genotypes to all individuals in a three-generation pedigree"
                    ],
                    immediateNextSteps: [
                        "Extend to three-gene crosses: calculate probabilities using the product rule (3/4 × 3/4 × 3/4 = 27/64 for all dominant phenotype in AaBbCc × AaBbCc) rather than 8×8 Punnett squares.",
                        "Study penetrance and expressivity: find published examples (BRCA1, Huntington's) where genotype does not deterministically produce phenotype — and connect this to why pedigrees sometimes show unexpected gaps.",
                        "Explore linkage and recombination: calculate recombination frequency from testcross data to construct a simple genetic map — understand why linked genes deviate from independent assortment.",
                        "Connect inheritance patterns to molecular biology: for each pattern, identify the protein-level explanation (e.g. autosomal recessive = loss of function requiring both copies to be absent; autosomal dominant = haploinsufficiency or gain of function)."
                    ],
                    misconceptionsToAddress: [
                        "Three-gene crosses attempted with Punnett squares → product rule method",
                        "Penetrance treated as 100% by default → BRCA1/Huntington's examples"
                    ]
                },

                expert: {
                    characteristics: [
                        "Derives expected offspring ratios for novel epistasis combinations without memorising the result",
                        "Constructs multi-generation pedigrees consistent with specified inheritance patterns",
                        "Applies chi-squared test to determine whether observed ratios fit expected Mendelian ratios",
                        "Analyses quantitative trait loci (QTL) logic as extension of polygenic inheritance",
                        "Integrates penetrance, expressivity, and epistasis into pedigree interpretation simultaneously"
                    ],
                    immediateNextSteps: [
                        "Apply chi-squared analysis to Mendel's published data: calculate χ² for each of his seven traits and interpret the p-values. Investigate R.A. Fisher's critique and evaluate the statistical argument.",
                        "Study imprinting as a departure from Mendelian symmetry: Prader-Willi and Angelman syndromes arise from the same chromosomal deletion depending on which parent contributed it — demonstrating that allele identity alone does not determine expression.",
                        "Derive the Hardy-Weinberg equilibrium from first principles: show that allele frequencies remain constant across generations under specific assumptions, and connect each assumption to a violation that drives evolution.",
                        "Construct a QTL mapping argument: given a cross between two inbred lines differing in a quantitative trait, explain how molecular markers allow dissection of the polygenic architecture."
                    ],
                    misconceptionsToAddress: [
                        "Mendelian genetics as deterministic → penetrance, expressivity, and stochastic development",
                        "Independent assortment as universal → linkage and map distance"
                    ]
                }
            }
        },

punnettSquares: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve stored facts about Mendelian inheritance and Punnett square terminology from memory without requiring understanding of why they are true.",
            cognitiveDemand: "Verbatim or near-verbatim recall of definitions, laws, and ratios. No reasoning required.",
            verbs: ["State", "Write", "List", "Name", "Define", "Identify", "Label"],
            whatDistinguishesThisLevel: "A remember-level response reproduces correct information without explanation. 'The F₂ phenotypic ratio from a monohybrid cross is 3:1' is remember-level. Adding 'because heterozygotes are phenotypically identical to homozygous dominant' crosses into understand.",
            examples: {
                punnettBasics:             "State Mendel's Law of Segregation. Define homozygous, heterozygous, dominant, and recessive.",
                probabilityAndRatios:      "Write the expected genotypic ratio from an Aa × Aa cross. State the expected phenotypic ratio.",
                diHybridCrosses:           "List the four gamete types produced by an AaBb individual. Write the phenotypic ratio expected from an AaBb × AaBb cross.",
                sexLinkageAndSpecialCases: "Name two X-linked recessive conditions in humans. State the genotype of a carrier female for an X-linked trait."
            }
        },

        understand: {
            description: "Explain the biological basis of inheritance patterns — connect chromosomal behaviour during meiosis to Punnett square outcomes, and interpret what a ratio means in terms of individual probability.",
            cognitiveDemand: "Translation and interpretation. The student explains WHY a ratio occurs, not just WHAT the ratio is.",
            verbs: ["Explain", "Justify", "Interpret", "Describe", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "Understand requires causal explanation. '3:1 is the F₂ phenotypic ratio' is remember. 'The 3:1 ratio arises because heterozygotes (Aa) express the same phenotype as homozygous dominants (AA), so three genotype classes produce only two phenotype classes' is understand.",
            examples: {
                punnettBasics:             "Explain why a test cross with a homozygous recessive individual reveals whether a dominant phenotype individual is AA or Aa. Your answer must reference what gametes each genotype produces.",
                probabilityAndRatios:      "Explain why having two children with the dominant phenotype does not reduce the probability that the third child will show the recessive phenotype. Reference the concept of independent events.",
                diHybridCrosses:           "Explain why the dihybrid F₂ ratio (9:3:3:1) is the mathematical product of two independent monohybrid ratios (3:1 × 3:1). Your answer must reference Mendel's Law of Independent Assortment.",
                sexLinkageAndSpecialCases: "Explain why males are affected by X-linked recessive conditions more frequently than females. Your answer must reference hemizygosity and the number of X chromosomes in each sex."
            }
        },

        apply: {
            description: "Construct Punnett squares and use probability rules to solve inheritance problems not seen in exactly this form before.",
            cognitiveDemand: "Procedure execution in a novel situation. The student selects the correct cross type, constructs the grid correctly, and interprets the outcome.",
            verbs: ["Calculate", "Construct", "Predict", "Determine", "Solve", "Set up", "Work out"],
            whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. The student must decide what type of cross applies, set it up, and carry it through to a specific numerical answer or prediction.",
            examples: {
                punnettBasics:             "Two parents, both with the dominant phenotype for trait T, have a child with the recessive phenotype. Determine the genotypes of both parents and construct the Punnett square for their cross. Calculate the probability that their next child will show the dominant phenotype.",
                probabilityAndRatios:      "A couple, both carriers of an autosomal recessive condition, plans to have three children. Calculate the probability that: (a) all three are unaffected; (b) exactly one is affected. Show all working.",
                diHybridCrosses:           "Construct the full 4×4 Punnett square for AaBb × Aabb. Determine the phenotypic ratio of offspring. Do not assume the standard 9:3:3:1 — derive the ratio from the actual cross.",
                sexLinkageAndSpecialCases: "A carrier woman (Xᴴ Xʰ, where h is haemophilia A) and an unaffected man (Xᴴ Y) plan to have children. Construct the Punnett square using correct sex-linked notation. State the probability that each son will have haemophilia and the probability that each daughter will be a carrier."
            }
        },

        analyze: {
            description: "Interpret pedigree data or phenotypic ratio data to deduce inheritance patterns, parental genotypes, or the mode of inheritance — working from evidence to conclusion.",
            cognitiveDemand: "Decomposition and inference from evidence. The student is given data and must determine the mode of inheritance, genotypes, or probability — without being told which approach to use.",
            verbs: ["Deduce", "Determine", "Identify", "Analyse", "Infer", "Classify", "Interpret"],
            whatDistinguishesThisLevel: "Analyze requires working from data to conclusion. 'Given a pedigree where all affected individuals are male and the condition skips generations, identify the inheritance pattern' requires the student to apply diagnostic criteria systematically — this cannot be answered by recall alone.",
            examples: {
                punnettBasics:             "A cross between two individuals with the dominant phenotype produces 28 dominant-phenotype and 9 recessive-phenotype offspring. Analyse the data: determine whether the ratio is consistent with a monohybrid cross of two heterozygotes, identify the parental genotypes, and state what further evidence would confirm your conclusion.",
                probabilityAndRatios:      "A pedigree shows a condition that appears in both sexes, skips generations, and appears in offspring of two unaffected parents. Analyse the inheritance pattern — state whether it is autosomal dominant, autosomal recessive, or X-linked, and justify each conclusion with specific evidence from the pedigree description.",
                diHybridCrosses:           "A cross produces offspring in a 9:3:4 ratio rather than 9:3:3:1. Analyse what this deviation indicates about the relationship between the two genes. Name the type of gene interaction responsible and explain at the phenotypic level why two genotypic classes have merged.",
                sexLinkageAndSpecialCases: "A woman with normal colour vision has a father who is colour blind and a mother who is also colour blind. Analyse whether it is possible for the woman to have normal vision, using X-linked inheritance logic. State her genotype and the probability that her sons will be colour blind."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity of a genetic claim, inheritance model, or experimental conclusion. Identify errors and explain why they are errors, using genetic principles as the evaluative criterion.",
            cognitiveDemand: "Judgement with justification. The student applies genetic principles to assess a claim, identifies flaws, and states what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Verify", "Defend"],
            whatDistinguishesThisLevel: "Evaluate requires engagement with a specific claim or conclusion. Simply restating correct genetics without addressing the claim is understand-level. The student must identify what is wrong, why it is wrong, and what would be correct.",
            examples: {
                punnettBasics:             "A student states: 'If a monohybrid cross gives a 3:1 ratio, then in a family of four children, exactly three will have the dominant phenotype and one will have the recessive phenotype.' Evaluate this statement — identify the conceptual error precisely and restate the correct interpretation of the 3:1 ratio.",
                probabilityAndRatios:      "Evaluate the following claim: 'Because the previous two children in this family were both affected by the recessive condition, the next child is less likely to be affected because the family has already had its quota of affected children.' Identify the probabilistic fallacy, name it, and explain why each conception is independent using Mendelian genetics.",
                diHybridCrosses:           "A student performs an AaBb × AaBb cross and obtains a 9:4:3 ratio rather than 9:3:3:1. They conclude: 'I must have made an error, because independent assortment always gives 9:3:3:1.' Evaluate this conclusion — explain whether the result necessarily indicates an error, and describe at least one genetic mechanism that could legitimately produce a 9:4:3 ratio.",
                sexLinkageAndSpecialCases: "A student states: 'A colour-blind woman must have a colour-blind father and a colour-blind mother, because she needs two Xᶜ alleles and must get one from each parent.' Evaluate this claim — is it necessarily true that the mother must be colour blind? Determine the minimum and maximum conditions required on the mother's side, showing your Punnett square reasoning."
            }
        },

        create: {
            description: "Design an experiment, construct a pedigree from described family history, derive a cross strategy to achieve a breeding goal, or produce a novel analytical tool for inheritance problems.",
            cognitiveDemand: "Synthesis and original production. The student assembles multiple concepts into a coherent, original output addressing a defined goal.",
            verbs: ["Design", "Construct", "Derive", "Formulate", "Develop", "Plan", "Propose"],
            whatDistinguishesThisLevel: "Create requires original output that integrates multiple concepts. 'Design a breeding programme to produce a true-breeding crop variety with two dominant traits' requires knowledge of dihybrid crosses, test crossing, and the logic of selecting homozygotes — it cannot be answered by recalling a procedure.",
            examples: {
                punnettBasics:             "Design a genetic counselling assessment for a couple where one partner has a dominant inherited condition (autosomal dominant, full penetrance) and the other is unaffected. Your assessment must: (a) determine the affected partner's possible genotypes; (b) construct Punnett squares for each possible genotype; (c) calculate the probability of an affected child for each scenario; (d) explain what additional information (e.g. family history) would resolve the genotype uncertainty.",
                probabilityAndRatios:      "Construct a decision flowchart that a student could use to determine whether to apply the multiplication rule, the addition rule, or the binomial formula to a genetics probability problem. The flowchart must correctly route problems involving: (a) two independent traits simultaneously; (b) either of two mutually exclusive genotypes; (c) a specific number of affected children out of a defined family size.",
                diHybridCrosses:           "Propose a three-generation breeding programme to produce a true-breeding plant line homozygous dominant for two independently assorting traits (RRDD) from parents that are each true-breeding for only one trait (RRDD × rrdd foundation cross). Specify: (a) which cross produces the F₁; (b) which cross produces F₂ candidates; (c) how to identify RRDD individuals from F₂; (d) what test cross confirms true-breeding status; (e) the minimum number of plants needed at each generation to give high confidence of obtaining at least one RRDD plant.",
                sexLinkageAndSpecialCases: "Formulate a systematic set of diagnostic criteria for distinguishing autosomal recessive, autosomal dominant, X-linked recessive, and X-linked dominant inheritance from pedigree data alone. For each mode of inheritance, specify: (a) the key pedigree feature that confirms it; (b) the key pedigree feature that excludes it; (c) one historical or clinical example. Organise your answer as an annotated decision tree."
            }
        }
    },

    understandingLevels: {
        novice: {
            characteristics: [
                "Can define gene, allele, dominant, recessive, homozygous, and heterozygous from memory",
                "Can complete a 2×2 Punnett square when explicitly told the parental genotypes",
                "States the 3:1 phenotypic ratio but cannot explain why it occurs",
                "Confuses genotypic ratio (1:2:1) with phenotypic ratio (3:1)",
                "Treats Punnett square ratios as exact outcomes rather than probabilities",
                "Cannot set up a dihybrid cross — does not know how to determine the four gamete types"
            ],
            immediateNextSteps: [
                "Before touching any Punnett square: draw the gamete formation step explicitly — write the parent genotype (e.g. Aa), draw a line dividing the two alleles, and label each resulting gamete (A and a). Do this for every parent before drawing the grid.",
                "Draw the 2×2 Punnett square for Aa × Aa and colour-code: shade all cells with at least one A in blue (dominant phenotype) and the aa cell in red. Count: 3 blue, 1 red. Write '3:1 phenotypic ratio' as a consequence of this colouring — not a memorised fact.",
                "Write on every practice problem: 'Each cell = one fertilisation event with equal probability. The ratio is a probability, not a guarantee.' Do not proceed past this sentence until it is automatic.",
                "For dihybrid gametes: practise FOIL on AaBb — (A+a)(B+b) = AB + Ab + aB + ab. Write all four gametes before drawing the grid. Repeat with AaBB, AABb, and aabb to see how gamete number changes with genotype.",
                "Use a two-column table (genotypic ratio | phenotypic ratio) for every cross. Never write one without the other. Always ask: 'Do any genotypes have the same phenotype?' If yes, add those cell counts together for the phenotypic ratio."
            ],
            misconceptionsToAddress: [
                "Ratio = exact outcome → 'probability' framing exercise (above)",
                "Confusion of 1:2:1 and 3:1 → colour-coding exercise (above)",
                "Gamete formation step skipped → explicit gamete derivation before every grid (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can construct monohybrid Punnett squares correctly for most parental genotype combinations",
                "Correctly states 3:1 and 1:2:1 ratios and can explain the difference between phenotypic and genotypic",
                "Can identify the purpose of a test cross but sometimes applies it incorrectly (crosses with Aa rather than aa)",
                "Struggles with dihybrid crosses — either lists fewer than four gamete types or sets up a 2×2 instead of 4×4 grid",
                "Does not yet apply the multiplication rule to multi-trait problems",
                "Sets up X-linked Punnett squares without using correct Xᴬ/Xᵃ notation, leading to errors"
            ],
            immediateNextSteps: [
                "For test cross errors: write the definition on every test cross problem — 'test cross = unknown genotype × homozygous RECESSIVE (always lowercase aa, never Aa).' Practise identifying which genotype is unknown and which is the tester.",
                "For dihybrid gametes: use the FOIL mnemonic and practise with six different AaBb-type genotypes until listing all four gamete types is automatic. Check by confirming each gamete has exactly one allele from each gene.",
                "For X-linked notation: write Xᴬ and Xᵃ on every sex-linked problem. Never use 'A' without the X superscript in sex-linkage questions. After writing gametes, check: does each male gamete have either one X or one Y? Never both.",
                "For the multiplication rule: practise three 'two-trait' probability problems using P(A_) × P(B_) before setting up any dihybrid Punnett square. Verify that 3/4 × 3/4 = 9/16 each time. This builds the intuition before the grid.",
                "For dihybrid grid setup: draw the 4×4 grid with all gametes written on both axes before filling any cells. Check that all 16 cells are filled and that no gamete type appears more than once on each axis."
            ],
            misconceptionsToAddress: [
                "Test cross with heterozygote → definition anchor (above)",
                "Dihybrid grid as 2×2 → FOIL gamete drill (above)",
                "X-linked notation errors → mandatory Xᴬ/Xᵃ notation (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Constructs both monohybrid and dihybrid Punnett squares accurately and efficiently",
                "Applies the multiplication rule fluently to multi-gene probability problems without drawing a full 4×4 grid",
                "Correctly interprets pedigrees for autosomal recessive and X-linked recessive patterns",
                "Can set up and interpret test crosses for both mono- and dihybrid genotypes",
                "Understands codominance and incomplete dominance and can predict their phenotypic ratios",
                "Accurately works out carrier probabilities using conditional probability"
            ],
            immediateNextSteps: [
                "Practise pedigree analysis for autosomal dominant and X-linked dominant conditions — these are less commonly practised and are a reliable exam discriminator.",
                "Work through ABO blood group inheritance problems using multiple allele notation — practise all possible parental crosses and their outcomes systematically.",
                "Extend to three-gene crosses: use the multiplication rule P(A_) × P(B_) × P(C_) = 27/64 for three independently assorting heterozygous loci — do not draw a 8×8 grid; use probability rules.",
                "Practise chi-squared (χ²) goodness-of-fit tests on genetics data: given observed offspring counts, test whether they are consistent with the expected Mendelian ratio.",
                "Investigate epistasis systematically: research and construct Punnett squares for all five classical epistasis types (recessive epistasis, dominant epistasis, duplicate dominant, duplicate recessive, dominant-recessive) and their resulting ratios."
            ],
            misconceptionsToAddress: [
                "Dominant = common in population → population genetics problem distinguishing allele frequency from dominance",
                "Carrier females always unaffected for X-linked → introduce X-linked dominant and lyonisation as extensions"
            ]
        },

        expert: {
            characteristics: [
                "Derives expected phenotypic ratios for novel epistatic interactions from first principles",
                "Designs multi-generation breeding schemes to achieve specific homozygous genotypes",
                "Applies chi-squared analysis to genetics data and interprets results in the context of Mendelian ratios",
                "Connects Mendelian probability rules to Hardy-Weinberg equilibrium for population-level allele frequency predictions",
                "Identifies the limits of the Punnett square model (linked genes, incomplete penetrance, polygenic traits)"
            ],
            immediateNextSteps: [
                "Derive Hardy-Weinberg equilibrium from first principles — show how Mendel's probability rules, applied to a randomly mating population, produce stable allele frequencies in the absence of selection, drift, mutation, and migration.",
                "Investigate genetic linkage: research how recombination frequency is measured and how it can be used to map genes on chromosomes — understand why linked genes deviate from independent assortment and what ratio modifications result.",
                "Critically evaluate the assumptions underlying the Punnett square model: complete penetrance, no environmental effects, no epistasis, independent assortment, random mating — identify one real genetic system that violates each assumption.",
                "Explore quantitative genetics: understand why traits like height and IQ are not Mendelian — connect polygenic inheritance to the concept that many loci each contribute small additive effects, producing a normal distribution rather than discrete phenotypic classes."
            ],
            misconceptionsToAddress: [
                "Mendel's laws apply universally → investigate penetrance, expressivity, and polygenic inheritance as boundary conditions"
            ]
        }

     }
},
 

microbialMetabolism: {
    knowledgeLevel: {

        remember: {
            description: "Retrieve and reproduce stored facts about microbial metabolic pathways, definitions, and classifications without requiring explanation of mechanisms or relationships.",
            cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. A student who cannot yet do this cannot access any higher level.",
            verbs: ["State", "List", "Name", "Define", "Identify", "Write", "Label"],
            whatDistinguishesThisLevel: "A remember-level response contains correct facts but no causal explanation. 'Glycolysis produces 2 ATP net' is remember-level. 'Glycolysis produces 2 ATP net because 4 are produced in the payoff phase but 2 are invested in the priming phase' crosses into understand.",
            examples: {
                energyBasics:        "Define catabolism and anabolism. State the function of NAD⁺ in catabolic reactions.",
                glycolysis:          "State the net ATP yield of glycolysis. Name the rate-limiting enzyme.",
                tcaCycle:            "List the electron carriers produced per turn of the TCA cycle.",
                ETC:                 "Name the four complexes of the electron transport chain in order. State which terminal electron acceptor is used in aerobic respiration.",
                fermentation:        "Name two fermentation pathways, their products, and an example organism for each.",
                metabolicDiversity:  "Define chemoautotroph and give one example organism and energy-yielding reaction."
            }
        },

        understand: {
            description: "Explain why metabolic processes work as they do — connect structure to function, cause to effect, and pathway to physiological outcome. The student must demonstrate they know WHY, not just WHAT.",
            cognitiveDemand: "Translation and interpretation. The student must supply causal links, not reproduce memorised answers. Correct explanations that cannot be produced by memorising question-answer pairs demonstrate understanding.",
            verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Distinguish"],
            whatDistinguishesThisLevel: "'Fermentation produces less ATP than aerobic respiration' is remember. 'Fermentation produces less ATP because it uses only substrate-level phosphorylation in glycolysis and cannot use the ETC — which is responsible for the majority of ATP production via chemiosmosis' is understand.",
            examples: {
                energyBasics:        "Explain why NADH feeds the ETC while NADPH is used for biosynthesis — connect the function of each to its metabolic role.",
                glycolysis:          "Explain why phosphofructokinase is the key regulatory enzyme of glycolysis rather than hexokinase or pyruvate kinase.",
                tcaCycle:            "Explain the amphibolic role of the TCA cycle — describe how the same pathway simultaneously serves energy generation and biosynthesis.",
                ETC:                 "Explain how the proton motive force is generated and used to synthesise ATP. Your answer must describe the direction of proton movement at each stage.",
                fermentation:        "Explain why cells need to regenerate NAD⁺ under anaerobic conditions and how fermentation achieves this without an ETC.",
                metabolicDiversity:  "Explain why chemoautotrophic growth yields are lower than chemoheterotrophic growth yields despite both using an ETC."
            }
        },

        apply: {
            description: "Use metabolic concepts, pathways, and equations to solve novel quantitative or predictive problems. The student selects the correct framework and uses it accurately in an unfamiliar context.",
            cognitiveDemand: "Procedure execution in a novel situation. The student decides which pathway, equation, or concept applies and carries it through to a numerical answer or specific prediction.",
            verbs: ["Calculate", "Predict", "Determine", "Classify", "Sketch", "Apply", "Use"],
            whatDistinguishesThisLevel: "'Fermentation produces 2 ATP per glucose' is remember. 'Calculate the total ATP yield for E. coli growing anaerobically on 0.5 mmol glucose using the mixed acid fermentation pathway' is apply — the student must use the formula, account for substrate concentrations, and give a specific numerical answer.",
            examples: {
                energyBasics:        "Using ΔG°' = −nFΔE°', calculate the free energy released when NADH (E°' = −0.32 V) is oxidised by O₂ (E°' = +0.82 V). Show all working.",
                glycolysis:          "Predict the immediate effect on glycolytic flux of a mutation abolishing ATP inhibition of phosphofructokinase. Specify which regulation is lost and what happens to each regulatory substrate's effect.",
                tcaCycle:            "Calculate the total NADH, FADH₂, and GTP produced from two acetyl-CoA molecules (one glucose equivalent) passing through the TCA cycle.",
                ETC:                 "A bacterium growing on glucose generates 10 NADH and 2 FADH₂ from glycolysis + TCA per glucose. Using P/O ratios of 2.5 and 1.5 respectively, calculate the ATP from oxidative phosphorylation.",
                fermentation:        "A brewery yeast ferments 100 g of glucose. Calculate the theoretical mass of ethanol and CO₂ produced. (MW glucose = 180; ethanol = 46; CO₂ = 44.)",
                metabolicDiversity:  "Classify each of the following organisms based on the description given: (a) uses H₂ as energy source and CO₂ as carbon source; (b) uses light and fixes CO₂ using H₂S as electron donor; (c) uses glucose as energy and carbon source aerobically."
            }
        },

        analyze: {
            description: "Examine experimental data, metabolic patterns, or complex scenarios to identify relationships, deduce mechanisms, and draw evidence-based conclusions that were not provided to the student.",
            cognitiveDemand: "Decomposition and inference from evidence. The student reaches a conclusion from data or observations, not from a formula. A key marker: the conclusion was not given and must be derived.",
            verbs: ["Identify", "Deduce", "Analyse", "Distinguish", "Interpret", "Classify", "Infer"],
            whatDistinguishesThisLevel: "Apply provides a formula and asks for a calculation. Analyze provides data and asks for an interpretation. 'Given O₂ consumption rates and ATP yields under three growth conditions, determine which terminal electron acceptor is being used and explain the evidence' requires analysis — the student deduces the acceptor from the data pattern.",
            examples: {
                energyBasics:        "A protonophore is added to a bacterial culture. O₂ consumption increases but ATP production decreases. Analyse these two observations together and deduce the mechanism of action of the compound.",
                glycolysis:          "Enzyme assays show that PFK activity is high when [AMP] = 2 mM and low when [ATP] = 5 mM. Analyse what this pattern reveals about the energy status signals that control glycolytic flux.",
                tcaCycle:            "¹³C-labelling shows that when 1-¹³C-acetate is fed to a bacterium, the first ¹³CO₂ is released at isocitrate dehydrogenase rather than at α-ketoglutarate dehydrogenase. Analyse whether this is consistent with the standard TCA mechanism and explain which carbon atoms of acetate are tracked through each step.",
                ETC:                 "Growth yields (g dry weight per mmol substrate) are measured: glucose aerobic = 0.45; glucose + nitrate = 0.32; glucose fermentation = 0.11. Analyse the pattern — connect each yield to the likely ATP production route and explain the decreasing trend.",
                fermentation:        "A diagnostic laboratory uses methyl red and Voges-Proskauer tests on two bacterial isolates. Isolate A: methyl red +, VP −. Isolate B: methyl red −, VP +. Analyse the metabolic basis for each result and identify which genera are consistent with each pattern.",
                metabolicDiversity:  "A novel bacterial isolate grows only in the dark, requires no organic carbon, grows on a medium containing only FeS₂ and CO₂, and is inhibited by azide (an ETC inhibitor). Analyse all four observations to deduce its nutritional type, energy source, and carbon fixation pathway."
            }
        },

        evaluate: {
            description: "Make a supported judgement about the validity, completeness, or quality of a metabolic claim, experimental conclusion, or proposed mechanism. The student must apply criteria, identify flaws, and defend a position.",
            cognitiveDemand: "Judgement with justification against explicit criteria. Simply identifying what is wrong is insufficient — the student must explain why it is wrong and what would be correct.",
            verbs: ["Evaluate", "Critique", "Assess", "Judge", "Appraise", "Defend", "Verify"],
            whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims fermentation is a type of anaerobic respiration — evaluate this.' The student must identify the claim is incorrect (judgement), explain that fermentation does not use an ETC while anaerobic respiration does (criterion), and state the correct distinction (correction). Merely restating the correct definition without engaging with the error is understand-level.",
            examples: {
                energyBasics:        "Evaluate the claim: 'Uncouplers are metabolic poisons that kill cells by stopping the ETC.' Identify what is accurate, what is inaccurate, and what the actual mechanism of toxicity is at the molecular level.",
                glycolysis:          "A student claims that 'glycolysis is inefficient because it only captures 2 ATP from a glucose molecule.' Evaluate whether this is a fair assessment — consider what glycolysis achieves beyond ATP, under what conditions it is advantageous, and how its efficiency compares to fermentation overall.",
                tcaCycle:            "A textbook states: 'The TCA cycle is a catabolic pathway.' Evaluate whether this is a complete or misleading description. Your evaluation must address the cycle's anabolic functions with specific examples.",
                ETC:                 "A research paper reports that a bacterium growing anaerobically on glucose produces 28 ATP per glucose using nitrate as terminal acceptor. Evaluate whether this claim is plausible, stating the theoretical maximum for nitrate-based anaerobic respiration and identifying what assumptions would need to hold for the reported value to be achievable.",
                fermentation:        "Evaluate the following statement: 'Lactic acid fermentation is simply a less efficient version of aerobic respiration and serves no unique biological purpose.' Address this from the perspectives of NAD⁺ regeneration, ecological niche, industrial application, and evolutionary context.",
                metabolicDiversity:  "Evaluate the claim that cyanobacteria are the most metabolically significant microorganisms on Earth. Assess this claim against: contribution to atmospheric oxygen, nitrogen fixation capacity, role as primary producers, and evolutionary significance of their metabolic innovations."
            }
        },

        create: {
            description: "Generate an original output — an experimental design, a metabolic engineering strategy, a pathway diagram, a novel hypothesis, or a derived quantitative model — that integrates multiple concepts from the lesson to address a specific goal.",
            cognitiveDemand: "Synthesis and original production. The output did not exist before and cannot be generated by retrieval or calculation alone. A strong create-level response is scientifically plausible, internally consistent, and addresses all components of the brief.",
            verbs: ["Design", "Propose", "Construct", "Develop", "Formulate", "Engineer", "Derive"],
            whatDistinguishesThisLevel: "Create requires an original output that combines multiple concepts. 'Design a metabolic engineering strategy to overproduce ethanol in E. coli' requires the student to identify the relevant pathway, pinpoint the competing reactions that divert flux, propose specific genetic modifications (gene deletions, promoter swaps, feedback-resistant enzymes), predict the metabolic consequences, and anticipate trade-offs. This cannot be answered from a single memorised concept.",
            examples: {
                energyBasics:        "Derive the theoretical ATP yield of aerobic glucose catabolism from first principles: list every ATP-producing and ATP-consuming step in glycolysis, PDC, TCA, and oxidative phosphorylation; apply current P/O ratios; sum the total; and explain why the actual in vivo yield is lower.",
                glycolysis:          "Design a genetic experiment in E. coli to determine whether phosphofructokinase or pyruvate kinase is more rate-limiting for glycolytic flux under aerobic high-glucose conditions. Specify: gene perturbations, flux measurements, controls, and how the results would distinguish the two possibilities.",
                tcaCycle:            "Construct a fully annotated diagram of the TCA cycle showing: all eight intermediates, all electron carrier outputs (labelled as NADH, FADH₂, or GTP), the two CO₂ release steps, all three regulated enzymes with their allosteric inhibitors, and four biosynthetic withdrawal points with the products they supply.",
                ETC:                 "Propose a research strategy to identify the terminal oxidase used by a novel anaerobic bacterium isolated from a sulfur-rich hot spring. Your strategy must include: (a) growth experiments to identify candidate electron acceptors; (b) inhibitor studies to identify ETC components; (c) genomic approaches to identify genes; (d) biochemical confirmation of the proposed terminal reductase.",
                fermentation:        "Formulate a complete metabolic engineering plan to maximise succinic acid production (a TCA cycle intermediate) by an engineered E. coli under anaerobic conditions. Identify: (a) the metabolic precursor and the pathway from glucose to succinate; (b) competing pathways to block; (c) anaplerotic reactions to enhance; (d) the terminal electron acceptor; (e) how you would validate increased flux to succinate.",
                metabolicDiversity:  "Design a synthetic microbial consortium of two organisms (one photoautotroph and one chemoheterotroph) that together perform a complete conversion of sunlight + CO₂ + N₂ into a useful product (specify the product). For each organism, specify its nutritional type, metabolic role, the metabolites exchanged between them, and the design principles that would prevent one organism from outcompeting the other."
            }
        }
    },

    understandingLevels: {

        novice: {
            characteristics: [
                "Can define catabolism and anabolism but cannot yet connect them through ATP",
                "Knows glycolysis produces ATP but does not know the net yield or why investment phase precedes payoff phase",
                "Confuses fermentation with anaerobic respiration — treats both as simply 'growing without oxygen'",
                "Cannot explain what the electron transport chain does beyond 'it makes ATP'",
                "Treats all microorganisms as heterotrophs; unaware of chemoautotrophs or their ecological significance",
                "Confuses NADH and NADPH — uses them interchangeably"
            ],
            immediateNextSteps: [
                "Draw the ATP cycle first — glucose → catabolism → ATP → anabolism → cellular components → back to needing more ATP. This single diagram establishes the coupling of catabolism and anabolism before any pathway detail is introduced.",
                "For glycolysis, introduce the investment/payoff framework using a physical analogy: you spend 2 coins (ATP) to buy a machine that generates 4 coins. Net profit = 2. Practice writing '4 produced − 2 invested = 2 net' for five different problems before moving to any other glycolysis detail.",
                "For fermentation vs anaerobic respiration: draw a Y-fork diagram. Left branch: 'uses ETC + non-O₂ acceptor = anaerobic respiration'. Right branch: 'no ETC, organic acceptor = fermentation'. Place the key difference (ETC yes/no) at the fork. Do not proceed to pathway details until this fork is memorised.",
                "For the ETC: introduce it as a proton pump — three pumps push protons out; one turbine (ATP synthase) lets them back in and makes ATP. Draw only this; do not introduce complex names or electron carriers yet.",
                "NADH vs NADPH: use a colour code — NADH is red (carries energy to ETC, catabolic), NADPH is blue (carries electrons to build things, anabolic). Colour-code every metabolic diagram with these colours until the distinction is automatic."
            ],
            misconceptionsToAddress: [
                "Fermentation = any anaerobic process → Y-fork diagram (above)",
                "NADH = NADPH → colour-code system (above)",
                "ETC directly makes ATP → proton pump + turbine analogy (above)"
            ]
        },

        developing: {
            characteristics: [
                "Can correctly state net ATP yield for glycolysis and total aerobic respiration but often confuses which stage produces NADH vs FADH₂",
                "Distinguishes fermentation from anaerobic respiration on direct questioning but reverts to conflating them in novel scenarios",
                "Can name the four nutritional types but cannot explain why a chemoautotroph needs reverse electron transport",
                "Understands the TCA cycle produces NADH but incorrectly attributes most ATP production to the TCA cycle rather than the ETC",
                "Can identify the electron transport chain components but cannot explain how proton pumping leads to ATP synthesis",
                "Aware of metabolic regulation but cannot connect allosteric signals (ATP/AMP) to specific regulatory enzymes"
            ],
            immediateNextSteps: [
                "For TCA cycle vs ETC ATP confusion: draw a two-column table — left column 'TCA cycle direct products per glucose (0 ATP, 2 GTP, 6 NADH, 2 FADH₂)', right column 'ETC ATP from those carriers (~25 ATP)'. Write: 'TCA makes carriers; ETC cashes them in.' Repeat until automatic.",
                "For chemiosmosis: use the dam analogy — the ETC is a pump that fills a reservoir (proton gradient) above a dam; ATP synthase is the turbine through which water flows to make electricity. Three pumps fill the reservoir; one turbine generates power. Draw and label before returning to the molecular detail.",
                "For chemoautotrophic reverse electron transport: use the 'uphill' analogy — electrons from NH₃ oxidation are at the bottom of a hill; NAD⁺ is at the top. ATP is needed to push electrons uphill. Draw the redox tower with NH₄⁺/NO₂⁻ at the bottom (+0.34V) and NAD⁺/NADH at the top (−0.32V) and mark the direction of spontaneous vs reverse electron flow.",
                "For regulatory signals: make a card with 'HIGH ATP = plenty of energy = slow down catabolism = inhibit PFK'. Opposite card: 'HIGH AMP = energy deficit = speed up catabolism = activate PFK'. Apply to three different metabolic scenarios before moving on.",
                "For FADH₂ vs NADH: associate FADH₂ exclusively with succinate dehydrogenase (TCA step 6) and β-oxidation — both involve direct hydrogen abstraction from a C-C bond. NADH comes from all other dehydrogenases. Colour-code one diagram with NADH = red, FADH₂ = orange."
            ],
            misconceptionsToAddress: [
                "TCA produces most ATP → two-column table (above)",
                "Chemiosmosis poorly understood → dam/turbine analogy (above)",
                "Chemoautotrophic reverse ET → redox tower diagram (above)"
            ]
        },

        proficient: {
            characteristics: [
                "Accurately calculates ATP yields using current P/O ratios and accounts for investment and payoff phases",
                "Correctly explains chemiosmosis, the proton motive force, and ATP synthase mechanism",
                "Classifies microorganisms by nutritional type in novel scenarios and explains the metabolic basis for each classification",
                "Distinguishes all fermentation types by products, organisms, and diagnostic tests",
                "Explains TCA cycle regulation and its amphibolic role with specific examples",
                "Understands that actual ATP yields are lower than theoretical due to membrane inefficiency and proton leak"
            ],
            immediateNextSteps: [
                "Explore the P/O ratio debate: research why the historical 3 ATP per NADH was revised to ~2.5, and what the mechanistic basis for the non-integer ratio is (H⁺ stoichiometry of ATP synthase is ~3H⁺/ATP; H⁺ per NADH is ~10; 10/3 ≈ 3.3 but transport costs reduce this to ~2.5). Connect to real in vivo measurements.",
                "Study anaplerotic reactions: identify the four main reactions that replenish TCA intermediates (pyruvate carboxylase, PEP carboxylase, malic enzyme, glyoxylate cycle). For each, state when it is needed and what metabolic state triggers it.",
                "Investigate the redox tower quantitatively: look up reduction potentials for five electron donor-acceptor pairs used in microbial respiration (O₂, NO₃⁻, SO₄²⁻, fumarate, CO₂). Calculate ΔG°' for each and rank organisms by energy yield. Connect to growth yield data.",
                "Study carbon catabolite repression at the molecular level: map the cAMP-CRP system in E. coli, identify where glucose suppresses adenylate cyclase, and explain how lactose induction and catabolite repression interact to control the lac operon. Draw the regulatory circuit.",
                "Calculate the ATP cost of biosynthesis: look up the ATP cost to synthesise one amino acid (e.g. glutamate: ~3 ATP), one nucleotide (e.g. AMP: ~6 ATP), and one fatty acid (e.g. palmitate: ~7 ATP net). Compare total anabolic ATP demand to total catabolic supply for a bacterium doubling in mass."
            ],
            misconceptionsToAddress: [
                "Theoretical ATP yield = actual yield → P/O ratio discussion (above)",
                "TCA cycle as purely catabolic → anaplerotic reactions study (above)"
            ]
        },

        expert: {
            characteristics: [
                "Derives ATP yield from first principles using P/O ratios, H⁺ stoichiometry, and accounts for transport costs",
                "Critically evaluates published metabolic flux data and assesses whether steady-state assumptions were met",
                "Connects metabolic pathway regulation to global regulatory networks (stringent response, two-component systems, quorum sensing)",
                "Applies metabolic control analysis to predict the effect of enzyme perturbations on pathway flux",
                "Designs metabolic engineering strategies integrating pathway modification, regulatory rewiring, and product export"
            ],
            immediateNextSteps: [
                "Apply metabolic flux analysis (MFA): use ¹³C-MFA principles to understand how isotope labelling patterns in TCA intermediates can reveal the relative contributions of anaplerosis, TCA flux, and gluconeogenesis simultaneously in a single experiment.",
                "Investigate the Mitchell chemiosmotic hypothesis historically: read Mitchell's original 1961 paper (or a detailed secondary source) and understand why the proton gradient mechanism was controversial and what evidence was required to establish it. Connect to current understanding of rotor mechanism of ATP synthase.",
                "Apply metabolic control analysis coefficients: calculate the flux control coefficient for phosphofructokinase in glycolysis using published data, and interpret what a coefficient of 0.8 vs 0.1 implies for the utility of PFK as an engineering target.",
                "Investigate synthetic biology approaches to novel metabolic pathways: research one example of a non-natural metabolic pathway engineered into E. coli (e.g. 1,4-butanediol production or itaconate synthesis) and map it onto central metabolism — identify which native enzymes were repurposed, which new enzymes were introduced, and which competing pathways were blocked."
            ],
            misconceptionsToAddress: [
                "Single enzyme control of pathway flux → metabolic control analysis (above)",
                "Chemiosmosis as settled, simple mechanism → historical controversy and molecular detail (above)"
            ]
        }
    }
},




      // ─────────────────────────────────────────────────────────────────────
        // ENZYMES — KNOWLEDGE LEVEL RUBRIC
        // ─────────────────────────────────────────────────────────────────────

        enzymes: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about enzymes from memory without requiring understanding of why they are true. The student is not yet expected to explain, connect, or use the information — only to reproduce it accurately.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No reasoning required. If a student cannot yet do this, they cannot access any higher level.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response contains correct facts but no explanation. 'Km is the substrate concentration at half Vmax' is remember-level. 'Km is the substrate concentration at half Vmax, which means a low Km indicates high affinity because...' crosses into understand.",
                    examples: {
                        enzymeBasics:    "State the definition of Km. State what a low Km value indicates about enzyme-substrate affinity.",
                        inhibition:      "List the four types of enzyme inhibition. For each, name its effect on Km and Vmax.",
                        kinetics:        "Write the Michaelis-Menten equation and identify what each symbol represents.",
                        regulation:      "Name two mechanisms by which enzyme activity is regulated post-translationally.",
                        classification:  "Identify the enzyme class that catalyses oxidation-reduction reactions. Name one example enzyme from each of the six classes."
                    }
                },

                understand: {
                    description: "Explain the meaning behind facts — connect cause to effect, connect structure to function, and interpret what a result means in biological terms. The student must demonstrate they know WHY, not just WHAT.",
                    cognitiveDemand: "Translation and interpretation. The student rephrases, connects, or explains rather than repeating. A correct explanation that the student could not have produced by memorising the question-answer pair demonstrates understanding.",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand goes beyond remember by requiring a mechanism or a reason. 'Competitive inhibition increases Km' is remember. 'Competitive inhibition increases apparent Km because the inhibitor occupies the active site, reducing the probability of substrate binding, so more substrate is needed to reach half-Vmax' is understand. The student must supply the causal link.",
                    examples: {
                        enzymeBasics:    "Explain why the induced fit model is preferred over lock-and-key — specifically what experimental observation the lock-and-key model fails to account for.",
                        inhibition:      "Explain why competitive inhibition can be overcome by adding more substrate, but non-competitive inhibition cannot. Your answer must reference where each inhibitor binds and how that determines whether substrate can displace it.",
                        kinetics:        "Justify why Vmax cannot be read accurately from a Michaelis-Menten curve by inspection, and explain how the Lineweaver-Burk transformation solves this problem mathematically.",
                        regulation:      "Explain why feedback inhibition targets the FIRST enzyme in a biosynthetic pathway rather than the last, using the logic of metabolic economy.",
                        classification:  "Explain why ligases require ATP hydrolysis while hydrolases do not — connect the energy requirement to the type of bond being formed or broken."
                    }
                },

                apply: {
                    description: "Use known equations, rules, and concepts to solve a problem that has not been seen before in exactly this form. The student selects the right tool and uses it correctly in a new context.",
                    cognitiveDemand: "Procedure execution in a novel situation. The student must decide which concept or equation applies, set it up correctly, and carry it through. A common failure at this level is knowing the equation but substituting values incorrectly or misidentifying which case applies.",
                    verbs: ["Calculate", "Determine", "Predict", "Sketch", "Apply", "Use", "Solve"],
                    whatDistinguishesThisLevel: "Apply requires a new problem — not a repeated worked example. 'Calculate v when [S] = 3Km' requires the student to substitute correctly and simplify, producing 3Vmax/4. 'Explain what Km is' is understand, not apply. The output is a numerical answer, a sketch, or a specific prediction.",
                    examples: {
                        enzymeBasics:    "Calculate the reaction rate as a fraction of Vmax when [S] = 3Km. Show all substitution steps.",
                        inhibition:      "A Lineweaver-Burk plot shows two lines: one without inhibitor (y-intercept = 0.01, x-intercept = −0.4) and one with inhibitor (y-intercept = 0.01, x-intercept = −0.2). Determine the inhibition type and calculate Km and Vmax for both conditions.",
                        kinetics:        "Given a Lineweaver-Burk plot with slope = 0.05 and y-intercept = 0.025, calculate Km and Vmax. Show all working.",
                        regulation:      "Predict what will happen to flux through the isoleucine biosynthetic pathway 30 seconds after isoleucine is added to the cell at high concentration. Apply the concept of feedback inhibition specifically.",
                        classification:  "Classify each of the following reactions as oxidoreductase, transferase, hydrolase, lyase, isomerase, or ligase: (a) glucose → fructose; (b) glucose + ATP → glucose-6-phosphate + ADP; (c) peptide bond cleavage by trypsin."
                    }
                },

                analyze: {
                    description: "Break down experimental data or a complex scenario into its components, identify patterns and relationships, and draw conclusions from evidence. The student moves from data to interpretation — they are not told what the answer is and must derive it.",
                    cognitiveDemand: "Decomposition and inference from evidence. The student is given data or a scenario and must determine what it means. A key marker: the student reaches a conclusion that was not given to them and can justify it from the evidence provided.",
                    verbs: ["Identify", "Determine", "Classify", "Analyse", "Deduce", "Distinguish", "Interpret"],
                    whatDistinguishesThisLevel: "Analyze requires the student to work from evidence to conclusion rather than from a formula to an answer. 'Given these two Lineweaver-Burk lines, identify the inhibition type' is analyze — the student must examine the pattern of intersection and changes in intercepts, then deduce the type. This is different from apply, where the method is given.",
                    examples: {
                        enzymeBasics:    "The following v vs [S] data are provided: [S] = 1 mM → v = 20; [S] = 2 mM → v = 33; [S] = 5 mM → v = 50; [S] = 10 mM → v = 67. Transform into a Lineweaver-Burk plot, determine Km and Vmax, and evaluate whether the data fit Michaelis-Menten kinetics.",
                        inhibition:      "Two Lineweaver-Burk lines are given. With inhibitor: slope is steeper, y-intercept unchanged, x-intercept shifts toward zero. Without inhibitor: standard slope and intercepts. Identify the inhibition type, justify using both intercept changes, and state the clinical implication.",
                        kinetics:        "Enzyme A: Km = 0.05 mM, kcat = 200 s⁻¹. Enzyme B: Km = 2 mM, kcat = 800 s⁻¹. Analyse which enzyme is more efficient under physiological conditions where [S] ≈ 0.1 mM. Use kcat/Km in your reasoning.",
                        regulation:      "An enzyme shows sigmoidal v vs [S] kinetics rather than a hyperbolic Michaelis-Menten curve. Analyse what this reveals about the enzyme's subunit structure, substrate binding behaviour, and likely regulatory role in the cell.",
                        classification:  "A student is given an unknown enzyme and the following data: it transfers an acetyl group from acetyl-CoA to a histone protein, requiring no water and no ATP. Deduce the enzyme class and the subclass, justifying each step of your reasoning."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the validity, accuracy, or quality of a claim, experimental design, or conclusion. The student must apply criteria, weigh evidence, and defend a position — not just identify what is wrong but explain why it is wrong and what would be correct.",
                    cognitiveDemand: "Judgement with justification. The student identifies a flaw, limitation, or error; explains the criterion by which it fails; and often states what would be correct. Simply saying 'this is wrong' is not evaluate-level — the student must say why and how.",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires a judgement against a standard. 'A student claims low Km means low affinity — evaluate this.' The student must state the claim is incorrect (judgement), explain that Km is the [S] at half-Vmax so lower Km means the enzyme reaches half-Vmax at lower substrate concentration indicating HIGHER affinity (criterion), and state the correct relationship (correction). Merely restating the correct definition without engaging with the student's claim is understand-level, not evaluate.",
                    examples: {
                        enzymeBasics:    "A student states: 'An enzyme with Km = 0.01 mM has very low affinity for its substrate because the Km value is very small.' Evaluate this claim in full — identify the error, explain the correct interpretation of Km, and state what a Km of 0.01 mM actually implies about affinity.",
                        inhibition:      "Evaluate the claim: 'Increasing substrate concentration will always overcome enzyme inhibition.' State whether this is always, sometimes, or never true. For each inhibition type, justify whether it is or is not overcome by excess substrate, and explain the molecular reason in each case.",
                        kinetics:        "A researcher uses a Michaelis-Menten curve to estimate Vmax by eye as the plateau of the curve. Evaluate whether this is an acceptable method, identifying the mathematical reason for the difficulty and explaining what approach should be used instead.",
                        regulation:      "Evaluate whether allosteric inhibition or covalent phosphorylation is a more appropriate regulatory mechanism for an enzyme that must respond to a hormonal signal within seconds. Assess both mechanisms against the criteria of speed, reversibility, and signal amplification.",
                        classification:  "A student classifies hexokinase (which transfers a phosphate group from ATP to glucose) as a hydrolase because 'it uses ATP as a water-like donor.' Evaluate and correct this reasoning in full, identifying what class hexokinase belongs to and why."
                    }
                },

                create: {
                    description: "Generate something new: an experimental design, a mechanistic model, a novel regulatory pathway diagram, a derived equation, or an original drug strategy. The student integrates multiple concepts into a coherent, original output that addresses a specific goal.",
                    cognitiveDemand: "Synthesis and original production. The student produces an output that did not exist before and that requires combining multiple concepts from the lesson. A strong create-level response is internally consistent, scientifically plausible, and addresses the brief completely.",
                    verbs: ["Design", "Propose", "Construct", "Derive", "Formulate", "Develop", "Plan"],
                    whatDistinguishesThisLevel: "Create requires original output, not retrieval or calculation. 'Design an experiment to determine Km and Vmax for an unknown enzyme' requires the student to specify substrate concentration range, measurement method, controls, data transformation, and statistical analysis — integrating kinetics, experimental design, and data analysis. This cannot be answered by reproducing a memorised procedure; it requires assembling a new plan.",
                    examples: {
                        enzymeBasics:    "Design a complete experiment to characterise an unknown enzyme from a thermophilic bacterium. Specify: (a) how you would determine optimal temperature and pH; (b) how you would collect v vs [S] data across at least six substrate concentrations; (c) how you would transform the data and calculate Km and Vmax; (d) what controls you would include and why.",
                        inhibition:      "Propose a drug targeting a bacterial enzyme using the principle of suicide inhibition. Your proposal must specify: (a) what type of bacterial enzyme you are targeting and why it is a good drug target; (b) how the suicide inhibitor exploits the enzyme's own catalytic mechanism; (c) how you would confirm irreversibility experimentally; (d) why this mechanism is likely to reduce resistance development compared to competitive inhibition.",
                        kinetics:        "Derive the Lineweaver-Burk equation from the Michaelis-Menten equation step by step. For each algebraic transformation, state what you are doing and why. At the end, label the gradient and both intercepts of the resulting linear equation in terms of Km and Vmax.",
                        regulation:      "Construct a fully annotated diagram of a four-enzyme metabolic pathway (A→B→C→D→E) that incorporates: (a) feedback inhibition of enzyme 1 by product E; (b) allosteric activation of enzyme 3 by product C; (c) covalent phosphorylation of enzyme 2 by a protein kinase activated by an external hormone signal. For each regulatory interaction, state whether it is fast or slow, reversible or irreversible, and what happens to flux when the hormone signal is removed.",
                        classification:  "Formulate a decision-tree classification key that a student could use to determine the EC class of any enzyme given only a word description of its reaction. The key must correctly classify all six classes using yes/no questions about bond type, bond-breaking mechanism, and energy requirement."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can reproduce definitions of enzyme, substrate, active site, product, and catalyst",
                        "Understands that enzymes lower activation energy and are not consumed in the reaction",
                        "Can complete a simple Michaelis-Menten calculation only when [S] = Km (v = Vmax/2) — other substitutions cause errors",
                        "Cannot distinguish between the four inhibition types without a reference table",
                        "Confuses Km with Vmax; does not yet connect Km to the concept of affinity",
                        "Treats denaturation and inhibition as interchangeable"
                    ],
                    immediateNextSteps: [
                        "Before touching any equation: draw and label the full catalytic cycle — enzyme + substrate → ES complex → enzyme + product — annotating that the enzyme is unchanged at the end. Repeat until automatic.",
                        "Practise the single substitution [S] = Km → v = Vmax/2 ten times with different Vmax values until the pattern is internalised, then move to [S] = 2Km and [S] = 0.5Km.",
                        "Build a two-column table of competitive vs non-competitive inhibition with only three rows: where it binds, Km effect, Vmax effect. Master this table before introducing uncompetitive and irreversible.",
                        "Use the 'price' anchor for Km direction: low Km = low price = enzyme easily satisfied = high affinity. Write it on every practice problem until it becomes automatic.",
                        "Draw denaturation vs inhibition as two separate diagrams: inhibition shows a blocked but intact active site; denaturation shows a completely unfolded protein with no recognisable structure. Never use the same diagram for both."
                    ],
                    misconceptionsToAddress: [
                        "Enzyme consumed in reaction → catalytic cycle diagram (above)",
                        "Low Km = low affinity → price anchor (above)",
                        "Denaturation = reversible inhibition → denaturation diagram (above)"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can apply the Michaelis-Menten equation for any [S] value with occasional arithmetic errors",
                        "Distinguishes competitive from non-competitive inhibition correctly on most questions",
                        "Understands Km as an affinity measure but still sometimes inverts the direction under pressure",
                        "Can read Vmax from a Lineweaver-Burk y-intercept but struggles to read Km from the x-intercept",
                        "Can name allosteric regulation and feedback inhibition but cannot explain the molecular mechanism of allostery",
                        "Classifies enzyme classes correctly for oxidoreductases and hydrolases but confuses transferases with lyases"
                    ],
                    immediateNextSteps: [
                        "For Lineweaver-Burk: practise reading x-intercepts specifically — take five published plots, cover the labels, and calculate −1/Km from the x-intercept alone. Verify by substituting back into the equation.",
                        "For the Km direction error: before every exam question involving Km, write the anchor sentence: 'Low Km = high affinity. High Km = low affinity.' Do not proceed until it is written.",
                        "For allostery: draw the allosteric enzyme with both sites (active site and allosteric site) in different colours. Draw the conformational change separately for activator and inhibitor binding. Never describe allostery without first pointing to both sites on a diagram.",
                        "For enzyme classification: focus on the three most confused classes. Transferase: moves a group FROM one molecule TO another (no water, no bond breaking). Lyase: breaks a bond WITHOUT water and WITHOUT redox. Hydrolase: breaks a bond USING water. Construct one clear reaction example for each.",
                        "For uncompetitive inhibition: add it only after competitive and non-competitive are solid. Introduce it as 'the inhibitor that waits for substrate to bind first' — it binds only the ES complex, so it decreases both Km and Vmax."
                    ],
                    misconceptionsToAddress: [
                        "Lineweaver-Burk x-intercept confusion → dedicated x-intercept practice (above)",
                        "Transferase vs lyase confusion → three-class comparison table (above)",
                        "Allostery = active site inhibition → two-site diagram (above)"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Applies both Michaelis-Menten and Lineweaver-Burk equations fluently and accurately",
                        "Correctly predicts and explains the effect of all four inhibition types on Km and Vmax",
                        "Reads and interprets Lineweaver-Burk plots to identify inhibition type from the intersection point pattern",
                        "Connects allosteric regulation, feedback inhibition, and covalent modification to their metabolic contexts",
                        "Classifies all six enzyme classes correctly and can provide mechanistic justification",
                        "Can calculate kcat from Vmax and [E]total and interpret catalytic efficiency as kcat/Km"
                    ],
                    immediateNextSteps: [
                        "Calculate kcat/Km for five enzyme-substrate pairs and rank them by catalytic efficiency — then explain why a high kcat alone does not make an enzyme efficient if Km is also high.",
                        "Work through two-substrate enzyme kinetics: research ping-pong vs sequential mechanisms and draw the kinetic scheme for each — identify how the Lineweaver-Burk plot looks different for each mechanism.",
                        "Connect inhibition type to pharmacology: for aspirin (irreversible), statins (competitive), and a non-competitive heavy metal inhibitor, derive what the Lineweaver-Burk plot would look like for each — then verify against published data.",
                        "Derive kcat from first principles: starting from Vmax = kcat × [E]total, rearrange and calculate kcat for an enzyme at known concentration — then compare your value to published turnover numbers.",
                        "Explore cooperativity: look up the Hill equation and compare it to Michaelis-Menten. Explain what a Hill coefficient greater than 1 means about subunit interaction and why allosteric enzymes often show this."
                    ],
                    misconceptionsToAddress: [
                        "Vmax as enzyme-only property → derive from Vmax = kcat × [E]total to show enzyme concentration dependence",
                        "kcat alone as efficiency measure → calculate kcat/Km pairs to show why both parameters matter"
                    ]
                },

                expert: {
                    characteristics: [
                        "Derives Michaelis-Menten and Lineweaver-Burk equations from the steady-state assumption without reference to notes",
                        "Designs kinetic experiments including substrate concentration range selection, replicate number, and error analysis",
                        "Analyses and critiques published kinetic data — identifies outliers, evaluates whether steady-state conditions were met, and assesses whether Vmax was truly reached",
                        "Connects enzyme mechanism to protein structure at the level of specific catalytic residues (e.g. serine protease catalytic triad)",
                        "Applies enzyme kinetics to pharmacokinetic modelling (IC₅₀, Ki relationship, drug dosing implications)"
                    ],
                    immediateNextSteps: [
                        "Derive the Michaelis-Menten equation from first principles using the steady-state assumption: set up the rate equations for [ES] formation and breakdown, apply the steady-state condition d[ES]/dt = 0, and solve for v. This is the derivation Michaelis and Menten actually performed.",
                        "Critically evaluate a published enzyme kinetics paper: identify the substrate concentration range used, assess whether Vmax was truly approached, calculate whether the lowest [S] tested is sufficiently below Km for linear-range accuracy, and assess whether the inhibition type claimed is supported by the Lineweaver-Burk data shown.",
                        "Apply the Cheng-Prusoff equation to relate IC₅₀ (measured in whole-cell assays) to Ki (true inhibition constant) — understand why IC₅₀ depends on substrate concentration and why Ki is the more fundamental parameter.",
                        "Investigate metabolic control analysis: look up flux control coefficients and understand how enzyme kinetics connects to the control of metabolic flux in a pathway — this is the systems-level extension of individual enzyme kinetics."
                    ],
                    misconceptionsToAddress: [
                        "Lineweaver-Burk as the gold standard → explore non-linear regression as the modern preferred method and understand why double-reciprocal plots amplify error at low [S]"
                    ]
                }
            }
        },

        // ─────────────────────────────────────────────────────────────────────
        // MENDELIAN GENETICS — KNOWLEDGE LEVEL RUBRIC
        // ─────────────────────────────────────────────────────────────────────

        mendelianGenetics: {
            knowledgeLevel: {

                remember: {
                    description: "Retrieve stored facts about Mendelian inheritance from memory — terminology, ratios, laws, and inheritance pattern hallmarks — without requiring explanation of why they are true.",
                    cognitiveDemand: "Verbatim or near-verbatim recall. No causal reasoning required. A student who can do this but cannot explain WHY the 3:1 ratio occurs is operating at this level.",
                    verbs: ["State", "Write", "List", "Name", "Identify", "Define", "Label"],
                    whatDistinguishesThisLevel: "A remember-level response reproduces information. 'The F2 phenotype ratio from a monohybrid cross is 3:1' is remember. 'The 3:1 ratio occurs because heterozygous F1 parents produce gametes in equal proportions, and the recessive phenotype only appears when two recessive alleles combine...' is understand.",
                    examples: {
                        basicInheritance:    "State Mendel's Law of Segregation. List the genotypic ratio produced by an Aa × Aa cross.",
                        dihybridCrosses:     "Write the expected phenotypic ratio for an F2 dihybrid cross. Name the law that produces this ratio.",
                        sexLinked:           "List the expected genotype and phenotype classes from a carrier female (X^B X^b) × normal male (X^B Y) cross, including the sex of each class.",
                        extendedInheritance: "Name three patterns of inheritance that extend Mendel's original model. For each, state one distinguishing feature.",
                        pedigrees:           "Identify the standard symbols for: affected male, unaffected female, carrier female, mating pair, and sibling group in a pedigree diagram."
                    }
                },

                understand: {
                    description: "Explain why Mendelian ratios and inheritance patterns arise — connect the physical events of meiosis to the mathematical predictions, and connect dominance relationships to their molecular basis.",
                    cognitiveDemand: "Causal explanation and interpretation. The student explains mechanisms, not just outcomes. The test: could the student reconstruct the answer from understanding rather than from memorising this specific question?",
                    verbs: ["Explain", "Describe", "Justify", "Interpret", "Connect", "Contrast", "Paraphrase"],
                    whatDistinguishesThisLevel: "Understand requires mechanism. 'Recessive traits skip generations' is a remember-level fact. 'Recessive traits skip generations because heterozygous carriers have one functional allele that produces sufficient protein for the normal phenotype, so the recessive allele is phenotypically silent until two copies come together' is understand — it gives the WHY.",
                    examples: {
                        basicInheritance:    "Explain why two phenotypically normal parents can have an affected child with an autosomal recessive condition. Your explanation must specify the parents' genotypes, what gametes they produce, and why the affected genotype is possible.",
                        dihybridCrosses:     "Explain the chromosomal event during meiosis that physically enacts the Law of Independent Assortment. State explicitly what condition must be met for two genes to assort independently.",
                        sexLinked:           "Explain why X-linked recessive conditions affect males far more frequently than females. Your answer must reference hemizygosity and contrast it with the situation in heterozygous females.",
                        extendedInheritance: "Explain the molecular difference between incomplete dominance and codominance. For each, describe what is happening at the level of protein production in the heterozygote.",
                        pedigrees:           "Explain how you would distinguish autosomal recessive from X-linked recessive inheritance using pedigree evidence alone. State three specific observations that would differentiate them."
                    }
                },

                apply: {
                    description: "Use Mendelian rules, probability laws, and Punnett square methods to solve novel cross problems and pedigree questions that have not been seen in exactly this form before.",
                    cognitiveDemand: "Correct procedure execution in a new context. The student selects the right method, sets it up correctly (correct gamete types, correct grid, correct notation), and reaches the correct answer. A common apply-level failure: setting up the Punnett square correctly but misreading the phenotype ratio.",
                    verbs: ["Calculate", "Determine", "Predict", "Construct", "Apply", "Use", "Solve"],
                    whatDistinguishesThisLevel: "Apply requires a new problem, not a repeated template. 'Construct the Punnett square for AaBb × Aabb and determine the phenotypic ratio' is apply — the student must generate all parental gametes, fill the grid, and classify offspring. 'State what a Punnett square is' is remember.",
                    examples: {
                        basicInheritance:    "Two heterozygous carriers (Aa) have four children. Using probability: (a) calculate the probability that all four children are unaffected; (b) calculate the probability that exactly one child is affected. Show all working using the product and sum rules.",
                        dihybridCrosses:     "Using the product rule only (no Punnett square), calculate the probability of each of the four phenotypic classes from an AaBb × AaBb cross. Verify that your four probabilities sum to 1.",
                        sexLinked:           "A colour-blind man (X^b Y) marries a carrier woman (X^B X^b). Construct the cross in full using X superscript notation. State the probability of colour blindness in (a) all daughters, (b) all sons, (c) all children.",
                        extendedInheritance: "Parents with blood types I^A i and I^B i have a child. Predict all possible blood types of their offspring and state the probability of each.",
                        pedigrees:           "In a given pedigree, individual II-3 is affected with an autosomal recessive condition. Her parents (I-1 and I-2) are unaffected. Determine the genotype of I-1, I-2, and state the probability that II-3's unaffected brother (II-1) is a carrier."
                    }
                },

                analyze: {
                    description: "Work from genetic data or pedigree evidence to determine inheritance patterns, genotypes, and the nature of allele interactions — without being told the answer. The student dismantles a complex genetic scenario and draws justified conclusions.",
                    cognitiveDemand: "Decomposition and evidence-based inference. The student is given raw data (offspring counts, pedigree layout, or cross results) and must determine what it means. A key marker of this level: the student reaches a conclusion that was not stated in the question.",
                    verbs: ["Identify", "Determine", "Deduce", "Analyse", "Classify", "Interpret", "Distinguish"],
                    whatDistinguishesThisLevel: "Analyze requires the student to move from evidence to conclusion. 'Given 160 offspring (120 dominant, 40 recessive), perform a chi-squared test and determine whether the ratio is consistent with 3:1' is analyze — the student performs the calculation AND interprets what the result means. Simply performing the calculation and reporting the number without interpreting it is apply, not analyze.",
                    examples: {
                        basicInheritance:    "F2 offspring from a monohybrid cross total 200: 142 dominant phenotype, 58 recessive. (a) Perform a chi-squared test. (b) State whether results are consistent with 3:1. (c) If they are not, propose one genetic explanation for the deviation.",
                        dihybridCrosses:     "A dihybrid cross produces offspring in a 9:3:4 ratio rather than 9:3:3:1. Identify the type of epistasis, state which genotype class has been merged, and propose the simplest molecular explanation for why one gene masks the other.",
                        sexLinked:           "A pedigree shows: generation I — unaffected parents; generation II — three unaffected daughters, two unaffected sons, one affected son; generation III — one affected grandson (son of an unaffected daughter). Analyse the inheritance pattern, list the observations that support your conclusion, and state any observation that would be inconsistent with an autosomal recessive pattern.",
                        extendedInheritance: "Two black Labrador Retrievers (BbEe × BbEe) produce 64 puppies: 36 black, 12 brown, 16 yellow. Analyse these results using chi-squared (df = 2, critical value = 5.991) and evaluate whether they are consistent with the expected 9:3:4 epistatic ratio.",
                        pedigrees:           "A pedigree shows an affected individual (III-2) whose parents are both unaffected. III-2's maternal grandfather (I-1) was affected. No females in the pedigree are affected. Determine the most likely inheritance pattern with full justification, and state which individuals can be assigned a definite carrier genotype."
                    }
                },

                evaluate: {
                    description: "Make a supported judgement about the correctness of a genetic claim, the validity of a hypothesis, the adequacy of evidence, or the quality of a genetic argument. The student identifies errors, applies the correct criterion, and explains what the correct answer is and why.",
                    cognitiveDemand: "Judgement against a standard, with justification. Simply identifying that something is wrong is insufficient. The student must explain the criterion by which it is wrong and supply the correct interpretation.",
                    verbs: ["Evaluate", "Critique", "Assess", "Verify", "Judge", "Defend", "Appraise"],
                    whatDistinguishesThisLevel: "Evaluate requires taking a position and defending it with reasoning. 'Evaluate the claim that dominant alleles are always more common than recessive alleles in a population.' The student must state the claim is false (judgement), explain that dominance describes expression in the heterozygote not population frequency (criterion), and give a counter-example such as Huntington's disease (evidence). Merely restating the definition of dominance is understand-level.",
                    examples: {
                        basicInheritance:    "A student argues: 'Since both parents are unaffected and all four of their children are unaffected, the parents must be homozygous dominant.' Evaluate this claim in full — identify the logical error, state what additional cross or information would be needed to confirm homozygosity, and explain what probability reasoning the student has neglected.",
                        dihybridCrosses:     "Evaluate the claim: 'A 9:3:3:1 ratio in F2 offspring proves that the two genes are on different chromosomes.' Is this always, sometimes, or never true? What additional evidence would confirm independent assortment?",
                        sexLinked:           "Evaluate the following student conclusion from a pedigree: 'Because no females are affected, the condition must be X-linked recessive.' Assess whether this is sufficient evidence alone, identify what other pedigree features would confirm or refute the conclusion, and state what would make autosomal recessive inheritance more or less likely.",
                        extendedInheritance: "Evaluate the claim: 'Polygenic traits do not follow Mendelian laws.' Is this accurate? Explain precisely what polygenic inheritance is, how it relates to Mendel's laws at the individual gene level, and why the phenotypic output appears to break the rules.",
                        pedigrees:           "A geneticist proposes autosomal dominant inheritance for a trait based on the fact that it appears in every generation. Evaluate this reasoning — identify what other inheritance patterns can also show trait expression in every generation, and state what additional pedigree features would strengthen the autosomal dominant conclusion."
                    }
                },

                create: {
                    description: "Produce an original genetic output: a multi-generation breeding scheme, a fully annotated pedigree, a novel hypothesis about an unusual ratio, a genetic counselling report, or a designed experiment to test a Mendelian hypothesis.",
                    cognitiveDemand: "Synthesis and original production integrating multiple concepts. The student assembles knowledge from multiple parts of the lesson into a coherent new structure that addresses a specific biological or clinical goal.",
                    verbs: ["Design", "Construct", "Propose", "Formulate", "Develop", "Plan", "Draft"],
                    whatDistinguishesThisLevel: "Create requires that the output did not exist before and cannot be produced by recalling or calculating a single thing. 'Design a crossing scheme to produce a true-breeding round-yellow pea strain from two true-breeding single-trait strains' requires the student to plan the P cross, predict F1, plan the F1 × F1 cross, identify the target F2 genotype, and specify how they would confirm true-breeding — this integrates dihybrid crosses, probability, and test cross design.",
                    examples: {
                        basicInheritance:    "Design a two-generation crossing scheme to conclusively prove that a dominant-phenotype organism is heterozygous rather than homozygous dominant. State: (a) what crosses you perform at each generation; (b) what genotypes you expect if the organism is heterozygous; (c) what genotypes you expect if it is homozygous dominant; (d) how many offspring you would need to be statistically confident in your conclusion and why.",
                        dihybridCrosses:     "A plant breeder has two true-breeding strains: one round-green (RRyy) and one wrinkled-yellow (rrYY). Develop a complete breeding programme to produce a true-breeding round-yellow strain. State all crosses, the expected genotype frequencies at each generation, how you would identify the desired genotype among F2 plants, and how many F2 plants you would need to screen to have a 95% chance of finding at least one RRYY plant.",
                        sexLinked:           "Construct a fully labelled three-generation pedigree consistent with X-linked recessive inheritance that includes: an unaffected carrier grandmother (I-2), two carrier daughters (II-1 and II-3), one affected grandson (III-2), one unaffected grandson (III-1), and one affected son (II-5). Label every individual with their deduced genotype using X superscript notation.",
                        extendedInheritance: "A cross between two white-flowered plants produces all white-flowered F1 offspring. When F1 plants are crossed with each other, F2 offspring appear in a 9:7 ratio of white to purple. Formulate a hypothesis to explain this ratio in terms of a specific gene interaction, design the cross that would test your hypothesis, and state the expected results if your hypothesis is correct.",
                        pedigrees:           "Draft a genetic counselling report for a couple (both phenotypically normal) whose first child has been diagnosed with an autosomal recessive condition. The report must: (a) explain the inheritance pattern in non-technical language; (b) state the probability of the condition in each future pregnancy with working shown; (c) state the probability that any unaffected future child is a carrier; (d) describe what further genetic testing options are available and what each would reveal."
                    }
                }
            },

            understandingLevels: {
                novice: {
                    characteristics: [
                        "Can define gene, allele, dominant, recessive, genotype, and phenotype when prompted",
                        "Understands that offspring receive one allele from each parent but cannot explain why (does not yet connect to meiosis)",
                        "Can complete a 2×2 Punnett square for Aa × Aa with guidance but makes gamete errors (e.g. writing Aa as a gamete)",
                        "Cannot distinguish between autosomal and sex-linked inheritance without explicit prompting",
                        "Conflates dominant with 'more common' or 'stronger'",
                        "Cannot yet use probability rules — relies entirely on completed Punnett squares"
                    ],
                    immediateNextSteps: [
                        "Before any Punnett square: practise writing gametes ONLY. Given parent genotype Aa, list the two possible gametes (A and a). Repeat for BB, bb, Bb, AaBb. Do not draw any grid until gamete formation is automatic.",
                        "Draw meiosis I and II alongside each cross — physically show the homologous pair separating at anaphase I — so the student connects 'allele segregation' to a real cellular event rather than an abstract rule.",
                        "Address dominant ≠ common immediately with a single powerful counter-example: Huntington's disease (dominant, affects 1 in 10,000 people). Write this example at the top of every early worksheet.",
                        "Introduce sex-linked inheritance ONLY after autosomal monohybrid crosses are solid. When introducing it, draw the X chromosome explicitly as a long chromosome and the Y as a short one — show physically that males have no second copy of X-linked genes.",
                        "Hold off on probability rules (product/sum) until Punnett squares are fluent — introduce them as a faster method AFTER the student can verify their results with a Punnett square."
                    ],
                    misconceptionsToAddress: [
                        "Gamete = parental genotype → gamete-only practice (above)",
                        "Dominant = more common → Huntington's counter-example (above)",
                        "Allele segregation as abstract rule → meiosis diagram alongside every cross (above)"
                    ]
                },

                developing: {
                    characteristics: [
                        "Can complete monohybrid and dihybrid Punnett squares independently with correct gametes",
                        "Understands the 3:1 and 9:3:3:1 ratios and can state when each applies",
                        "Can identify autosomal recessive inheritance from a straightforward pedigree",
                        "Struggles to distinguish codominance from incomplete dominance — uses the terms interchangeably",
                        "Writes X-linked crosses in non-standard notation (using letters instead of X superscripts), leading to errors in phenotype assignment",
                        "Applies probability intuitively but cannot set up the product or sum rule formally for multi-child scenarios"
                    ],
                    immediateNextSteps: [
                        "For codominance vs incomplete dominance: draw three cells side by side — one showing only A antigen (type A), one showing both A and B antigens simultaneously (type AB = codominance), one showing a uniformly pale pink colour (incomplete dominance). Ask: 'do you see the original two phenotypes, or a new intermediate one?' This single question separates the two concepts.",
                        "For X-linked notation: enforce X^B and X^b notation from the start of every X-linked problem. Before drawing the Punnett square, write the two parental genotypes explicitly in full X notation — do not abbreviate. Make the Y chromosome visible as a separate symbol.",
                        "For the product rule: introduce it first with coins (P(heads AND heads) = 0.5 × 0.5 = 0.25), then with independent genetic crosses (P(Aa) × P(Bb) = 0.5 × 0.5 = 0.25). Only apply to genetics once the coin version is understood.",
                        "For pedigree interpretation: work through five pedigrees using elimination — for each pattern, write what it predicts and cross it off if any pedigree feature contradicts it. Build the habit of eliminating wrong patterns rather than guessing the right one.",
                        "For chi-squared: introduce it as a yes/no decision tool, not as a calculation exercise. Practise interpreting the result ('fail to reject' vs 'reject') from completed chi-squared tables before requiring the student to calculate χ² independently."
                    ],
                    misconceptionsToAddress: [
                        "Codominance = incomplete dominance → three-cell visual (above)",
                        "X-linked notation errors → enforce X superscript notation strictly (above)",
                        "Gambler's fallacy in multi-child probability → product rule with coins first (above)"
                    ]
                },

                proficient: {
                    characteristics: [
                        "Applies the product and sum rules fluently for multi-gene, multi-offspring probability problems",
                        "Interprets pedigrees for all five inheritance patterns with full justification",
                        "Correctly distinguishes all three dominance relationships and predicts F2 ratios for each",
                        "Performs chi-squared tests independently and correctly interprets the statistical decision",
                        "Recognises recessive and dominant epistasis and predicts the modified dihybrid ratios",
                        "Assigns definite and probable genotypes to pedigree individuals systematically"
                    ],
                    immediateNextSteps: [
                        "Calculate carrier probability using Bayesian updating: given that an individual's parent is a known carrier, update the probability that the individual is a carrier based on the phenotypes of their children. This is how genetic counselling works in practice.",
                        "Work through penetrance and expressivity as extensions of the Mendelian model — research one clinical example of each (e.g. BRCA1 for incomplete penetrance, neurofibromatosis for variable expressivity) and explain how each causes pedigrees to appear to deviate from Mendelian patterns without violating the underlying genetics.",
                        "Investigate linkage: cross two dihybrid organisms and observe offspring ratios significantly different from 9:3:3:1. Calculate recombination frequency as a measure of map distance between two linked genes. This directly challenges independent assortment and deepens understanding of its conditions.",
                        "Apply Hardy-Weinberg to a Mendelian disorder: given population carrier frequency, calculate allele frequencies using p² + 2pq + q² = 1 — then interpret what happens to allele frequencies across generations without selection."
                    ],
                    misconceptionsToAddress: [
                        "Independent assortment as universal rule → linkage exercise showing when it breaks down (above)",
                        "Chi-squared as a proof tool → reinforce that chi-squared only fails to disprove, never proves"
                    ]
                },

                expert: {
                    characteristics: [
                        "Derives expected offspring ratios from first principles for novel epistatic interactions not seen before",
                        "Designs multi-generation crossing schemes to resolve complex inheritance questions with statistical power analysis",
                        "Connects classical Mendelian allele relationships to molecular mechanisms (loss-of-function vs gain-of-function mutations, haploinsufficiency)",
                        "Applies Bayesian probability to update carrier risk estimates from sequential pedigree information",
                        "Critically evaluates published pedigree data for consistency with claimed inheritance patterns and identifies alternative explanations"
                    ],
                    immediateNextSteps: [
                        "Work through the molecular basis of dominance relationships: research why loss-of-function mutations are usually recessive (one functional copy sufficient), why gain-of-function mutations are usually dominant (the abnormal protein product actively disrupts normal function), and why haploinsufficiency causes dominant inheritance (one copy insufficient for normal phenotype). Classify five Mendelian disorders by this molecular logic.",
                        "Apply Lod score analysis: understand how Lod scores extend chi-squared logic to family-based linkage analysis — study one published linkage analysis paper and identify how the Lod score threshold of 3.0 was used to declare linkage.",
                        "Investigate genomic imprinting as a Mendelian exception: research Prader-Willi and Angelman syndromes, where the same chromosomal deletion causes different disorders depending on parental origin. Explain why classical Mendelian analysis would fail to predict this pattern.",
                        "Design a GWAS study for a polygenic trait of interest: specify the sample size needed, the SNP density required, the statistical threshold for genome-wide significance (p < 5 × 10⁻⁸), and how results would be interpreted in terms of Mendelian allele contributions at individual loci."
                    ],
                    misconceptionsToAddress: [
                        "Mendelian genetics as complete model → genomic imprinting as a well-documented exception that requires epigenetic explanation"
                    ]
                }
            }
        }

};

const EndSection10 = "close"