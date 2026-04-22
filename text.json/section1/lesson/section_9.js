

antibodies: {
    title: "Antibodies: Structure, Function, and Immunological Specificity",

    databaseLinks: {
        misconceptions: [
            'antibodyStructure',
            'antibodyFunction',
            'antibodyDiversity',
            'immunologicalMemory',
            'antibodyApplications'
        ],
        contextualScenarios: [
            'antibodyStructure',
            'antibodyFunction',
            'antibodyDiversity',
            'immunologicalMemory'
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
            'antibodyStructure',
            'antibodyFunction',
            'antibodyDiversity',
            'immunologicalMemory'
        ]
    },

    conceptLinks: {
        "Antibodies are Y-shaped glycoproteins produced by B cells": {
            misconceptions:      ['antibodyStructure'],
            scenarios:           ['antibodyStructure'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['antibodyStructure']
        },
        "Antibody specificity is determined by the variable region": {
            misconceptions:      ['antibodyStructure', 'antibodyFunction'],
            scenarios:           ['antibodyStructure'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['antibodyStructure']
        },
        "Five immunoglobulin classes differ in structure and function": {
            misconceptions:      ['antibodyFunction'],
            scenarios:           ['antibodyFunction'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['antibodyFunction']
        },
        "Clonal selection generates antibody diversity and specificity": {
            misconceptions:      ['antibodyDiversity'],
            scenarios:           ['antibodyDiversity'],
            studyTips:           ['diagrams', 'comparisonTables', 'practiceRoutines'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['antibodyDiversity']
        },
        "Immunological memory enables faster secondary responses": {
            misconceptions:      ['immunologicalMemory'],
            scenarios:           ['immunologicalMemory'],
            studyTips:           ['diagrams', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['immunologicalMemory']
        },
        "Antibodies function through neutralisation, opsonisation, and complement activation": {
            misconceptions:      ['antibodyFunction'],
            scenarios:           ['antibodyFunction', 'antibodyApplications'],
            studyTips:           ['comparisonTables', 'flashcards', 'dissectionAndExperiment'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['antibodyFunction']
        }
    },

    topicIntroduction: {
        overview: "Antibodies — also called immunoglobulins — are the precision-guided weapons of the adaptive immune system. Produced by plasma cells (differentiated B lymphocytes), they are Y-shaped glycoproteins capable of binding to virtually any molecular target with extraordinary specificity. Each antibody recognises a unique three-dimensional shape called an epitope, and that recognition triggers a cascade of immune effector mechanisms that neutralise, tag, or destroy the threat. In this lesson, we explore the molecular architecture of antibodies, the genetic mechanisms that generate their almost limitless diversity, the functional differences between the five immunoglobulin classes, and how this biology underpins vaccination, diagnostics, and monoclonal antibody therapeutics.",
        whyItMatters: "Antibodies are at the intersection of immunology, medicine, and biotechnology. They are the basis of vaccination (which has eliminated smallpox and nearly eliminated polio), of modern diagnostics (pregnancy tests, COVID-19 lateral flow assays, ELISA), and of the fastest-growing class of therapeutics — monoclonal antibodies — used to treat cancer, autoimmune diseases, and infectious diseases. Understanding how antibodies work is essential for understanding both protective immunity and the pathology of allergies, autoimmunity, and immunodeficiency.",
        bigPicture: "The immune system faces an almost impossible combinatorial problem: it must be able to recognise any of billions of possible pathogen shapes, most of which it has never encountered before, while not attacking the body's own tissues. Antibodies solve this through a remarkable genetic strategy — V(D)J recombination and somatic hypermutation — that generates a repertoire of over 10¹¹ unique binding specificities from a genome with fewer than 25,000 genes. The clonal selection principle then ensures that only B cells with the right specificity proliferate and persist as memory cells.",
        priorKnowledge: [
            "Cell biology: cell surface receptors and signal transduction",
            "Protein structure: primary through quaternary, disulfide bonds, glycosylation",
            "Basic immunology: innate vs adaptive immunity, B and T lymphocytes",
            "Genetics: gene expression, alternative splicing, somatic mutation",
            "Basic biochemistry: antigen-antibody non-covalent interactions"
        ],
        topicRoadmap: [
            "Antibody structure: heavy and light chains, variable and constant regions, domain organisation",
            "The antigen-binding site: CDRs, epitope-paratope complementarity, binding forces",
            "The five immunoglobulin classes: IgG, IgA, IgM, IgD, IgE — structure and function",
            "Antibody effector functions: neutralisation, opsonisation, complement activation, ADCC",
            "Generation of diversity: V(D)J recombination, junctional diversity, somatic hypermutation",
            "Clonal selection and the primary vs secondary immune response",
            "Immunological memory and the basis of vaccination",
            "Monoclonal antibodies: production, engineering, and therapeutic applications"
        ]
    },

    concepts: [
        "Antibodies are Y-shaped glycoproteins produced by B cells",
        "Antibody specificity is determined by the variable region",
        "Five immunoglobulin classes differ in structure and function",
        "Clonal selection generates antibody diversity and specificity",
        "Immunological memory enables faster secondary responses",
        "Antibodies function through neutralisation, opsonisation, and complement activation"
    ],

    theory: "Antibodies are immunoglobulin proteins that form the humoral arm of adaptive immunity. Their exquisite antigen specificity, structural diversity, and multi-modal effector functions make them central to host defence and the foundation of vaccine-induced protection.",

    keyDefinitions: {
        "Antibody (Immunoglobulin)": "Y-shaped glycoprotein produced by plasma cells that binds specifically to an antigen",
        "Antigen": "Any molecule (usually foreign) that elicits an immune response and is recognised by an antibody",
        "Epitope": "The specific molecular region on an antigen recognised and bound by an antibody (antigenic determinant)",
        "Paratope": "The antigen-binding site on the antibody that is complementary to the epitope",
        "Heavy Chain": "The larger of the two polypeptide chain types in an antibody; determines immunoglobulin class",
        "Light Chain": "The smaller polypeptide chain (kappa or lambda) present in all immunoglobulin classes",
        "Variable Region (V)": "The N-terminal portion of both heavy and light chains; contains the antigen-binding site; unique to each antibody clone",
        "Constant Region (C)": "The C-terminal portion; determines antibody class, effector function, and half-life",
        "Complementarity-Determining Regions (CDRs)": "Hypervariable loops within the variable region that directly contact the antigen; three per chain, six per binding site",
        "Framework Regions": "Relatively conserved sequences flanking the CDRs that maintain the immunoglobulin fold scaffold",
        "Fc Region": "The 'stem' of the Y; composed of constant domains; mediates effector functions by binding Fc receptors on immune cells and complement",
        "Fab Region": "Each 'arm' of the Y (Fragment antigen-binding); contains one complete antigen-binding site",
        "Hinge Region": "Flexible proline-rich segment between Fab and Fc; allows independent movement of Fab arms",
        "Valency": "Number of antigen-binding sites per antibody molecule (IgG = bivalent; IgM = decavalent)",
        "Affinity": "Strength of a single antibody-epitope binding interaction",
        "Avidity": "Total binding strength of a multivalent antibody to a multivalent antigen; greater than affinity alone",
        "Isotype": "Antibody class (IgG, IgA, IgM, IgD, IgE) determined by heavy chain constant region",
        "Opsonisation": "Coating of a pathogen with antibodies (or complement) to enhance phagocytosis",
        "Neutralisation": "Direct blocking of pathogen infectivity or toxin activity by antibody binding",
        "Somatic Hypermutation": "High-rate mutation of variable region genes in germinal centres, enabling affinity maturation",
        "Clonal Selection": "The process by which antigens select and activate B cells bearing complementary receptors, causing clonal expansion",
        "Plasma Cell": "Terminally differentiated B cell that secretes large quantities of antibody",
        "Memory B Cell": "Long-lived B cell clone retained after primary response; mediates rapid secondary response"
    },

    antibodyStructure: {
        overview: "Each antibody molecule consists of four polypeptide chains — two identical heavy chains (H) and two identical light chains (L) — held together by disulfide bonds and non-covalent interactions. The overall shape is a Y, with two antigen-binding arms (Fab) and an effector stem (Fc).",
        chainComposition: {
            heavyChain: {
                domains: "VH + CH1 + hinge + CH2 + CH3 (for IgG); IgM and IgE have CH4 instead of hinge",
                molecularWeight: "~50 kDa (IgG)",
                role: "Determines antibody class (isotype) via constant region sequence"
            },
            lightChain: {
                types: "Kappa (κ) or Lambda (λ) — functionally equivalent, differ in constant region sequence",
                domains: "VL + CL",
                molecularWeight: "~25 kDa",
                rule: "Each antibody has either all κ or all λ light chains — never mixed"
            }
        },
        antigenBindingSite: {
            composition: "Formed by VH and VL domains together — six CDR loops (three from each chain)",
            CDRs: "Complementarity-Determining Regions: CDR1, CDR2, CDR3 on each chain; CDR3 is most variable and makes the most contacts",
            bindingForces: [
                "Hydrogen bonds",
                "Electrostatic (ionic) interactions",
                "Van der Waals forces",
                "Hydrophobic interactions",
                "No covalent bonds — all interactions are reversible"
            ],
            specificity: "Shape and charge complementarity between paratope (CDRs) and epitope determines specificity — analogous to enzyme induced fit"
        },
        proteolysisFragments: {
            papain: "Cleaves above hinge → two Fab fragments + one Fc fragment",
            pepsin: "Cleaves below hinge → one F(ab')₂ fragment (bivalent) + pFc' (degraded)",
            use: "Papain/pepsin digestion was historically used to define antibody domain structure; F(ab')₂ fragments used therapeutically to retain binding without Fc-mediated immune activation"
        }
    },

    immunoglobulinClasses: {
        IgG: {
            heavyChain: "γ (gamma)",
            subclasses: "IgG1, IgG2, IgG3, IgG4",
            structure: "Monomer",
            valency: 2,
            serumConcentration: "Most abundant (~75% of serum immunoglobulins)",
            halfLife: "~21 days (longest of all isotypes)",
            functions: [
                "Neutralisation of toxins and viruses",
                "Opsonisation (binds FcγR on phagocytes)",
                "Complement activation (IgG1 and IgG3)",
                "Antibody-dependent cellular cytotoxicity (ADCC)",
                "Neonatal immunity — only isotype to cross the placenta (via FcRn)",
                "Secondary immune response — dominant isotype after class switching"
            ],
            clinicalRelevance: "Most therapeutic monoclonal antibodies are IgG; basis of maternal-fetal passive immunity"
        },
        IgA: {
            heavyChain: "α (alpha)",
            subclasses: "IgA1, IgA2",
            structure: "Monomer in serum; dimer with J chain and secretory component in secretions",
            valency: "2 (monomer) or 4 (secretory dimer)",
            location: "Second most abundant in serum; predominant in mucosal secretions (saliva, tears, breast milk, colostrum, gut, respiratory tract)",
            functions: [
                "Mucosal immunity — first line of defence at mucosal surfaces",
                "Neutralisation of pathogens before systemic entry",
                "Immune exclusion — trapping pathogens in mucus",
                "Passive neonatal immunity via breast milk (colostrum)"
            ],
            clinicalRelevance: "IgA deficiency is the most common primary immunodeficiency; associated with recurrent mucosal infections"
        },
        IgM: {
            heavyChain: "μ (mu)",
            structure: "Pentamer (five monomers joined by J chain and disulfide bonds)",
            valency: 10,
            serumConcentration: "~10% of serum immunoglobulins",
            halfLife: "~5 days",
            functions: [
                "First antibody produced in primary immune response",
                "Most efficient complement activator (one IgM pentamer can activate classical pathway)",
                "Expressed on naïve B cell surface as the B cell receptor (BCR)",
                "Agglutination of pathogens (high valency)",
                "Natural antibodies (produced without prior antigen exposure — against blood group antigens)"
            ],
            clinicalRelevance: "Elevated IgM = recent/active infection; IgM anti-A and anti-B cause ABO transfusion reactions; Waldenström macroglobulinaemia is IgM-secreting malignancy"
        },
        IgD: {
            heavyChain: "δ (delta)",
            structure: "Monomer",
            valency: 2,
            serumConcentration: "Trace amounts in serum",
            functions: [
                "Co-expressed with IgM on surface of naïve B cells as BCR",
                "Role in B cell activation and differentiation signalling",
                "Serum function remains incompletely understood"
            ],
            clinicalRelevance: "IgD myeloma is rare; IgD's primary role is as a BCR co-receptor"
        },
        IgE: {
            heavyChain: "ε (epsilon)",
            structure: "Monomer",
            valency: 2,
            serumConcentration: "Lowest of all isotypes (~0.003% of serum immunoglobulins)",
            halfLife: "~2 days in serum; weeks bound to mast cells",
            functions: [
                "Anti-parasitic immunity — binds eosinophils via FcεRI for ADCC against helminths",
                "Allergic response — binds mast cells and basophils via FcεRI; cross-linking by antigen triggers degranulation (histamine, leukotrienes)",
                "Sensitisation phase of type I hypersensitivity (allergy)"
            ],
            clinicalRelevance: "Elevated IgE in allergic disease (asthma, atopic dermatitis, anaphylaxis) and parasitic infection; omalizumab (anti-IgE monoclonal antibody) treats severe asthma"
        }
    },

    effectorFunctions: {
        neutralisation: {
            mechanism: "Antibody physically blocks the site on a pathogen or toxin used for cell entry or receptor binding",
            examples: [
                "Anti-influenza antibodies block haemagglutinin binding to sialic acid receptors",
                "Anti-tetanus toxin antibodies block toxin's neuronal binding domain",
                "Neutralising antibodies against SARS-CoV-2 spike protein block ACE2 binding"
            ],
            isotypes: "All isotypes can neutralise; IgG and IgA are most important in vivo"
        },
        opsonisation: {
            mechanism: "Fc region of antigen-bound antibody is recognised by FcγR receptors on phagocytes (macrophages, neutrophils), triggering phagocytosis",
            enhancement: "Combined opsonisation by IgG and complement component C3b acts synergistically",
            isotypes: "IgG (especially IgG1 and IgG3) most effective"
        },
        complementActivation: {
            pathway: "Classical complement pathway",
            trigger: "IgM or IgG (clustered) binds antigen → C1q binds Fc → C1 activated → C4, C2, C3 cascade → membrane attack complex (MAC)",
            outcomes: [
                "Direct lysis of pathogens via MAC",
                "Opsonisation by C3b deposition",
                "Inflammation via C3a and C5a anaphylatoxins",
                "Clearance of immune complexes"
            ],
            isotypes: "IgM most efficient (one pentamer sufficient); IgG1 and IgG3 activate; IgG2 weakly; IgG4, IgA, IgD, IgE do not activate classical pathway"
        },
        ADCC: {
            fullName: "Antibody-Dependent Cellular Cytotoxicity",
            mechanism: "IgG-coated target cells are recognised by NK cells via FcγRIII (CD16) → NK cell kills target",
            relevance: "Important for tumour immunity and viral-infected cell killing; mechanism exploited by anti-cancer monoclonal antibodies (e.g. trastuzumab)"
        },
        mastCellDegranulation: {
            mechanism: "IgE binds mast cells/basophils via FcεRI → antigen cross-links adjacent IgE molecules → degranulation of histamine and other mediators",
            physiological: "Anti-parasitic defence",
            pathological: "Type I hypersensitivity (allergy, anaphylaxis)"
        }
    },

    generationOfDiversity: {
        VDJRecombination: {
            mechanism: "Somatic recombination of V (variable), D (diversity), and J (joining) gene segments during B cell development in bone marrow",
            heavyChain: "VH + DH + JH recombination (~40 VH × 25 DH × 6 JH = ~6,000 combinations)",
            lightChain: "VL + JL recombination (no D segment; ~200 combinations)",
            junctionalDiversity: "Imprecise joining adds/removes nucleotides at V-D and D-J junctions (P-nucleotides, N-nucleotides) — creates enormous additional diversity at CDR3",
            combinatorialAssembly: "Random pairing of heavy and light chains multiplies diversity further",
            totalDiversity: "Theoretical diversity of >10¹¹ unique specificities from ~400 gene segments"
        },
        somaticHypermutation: {
            location: "Germinal centres of secondary lymphoid organs (lymph nodes, spleen)",
            mechanism: "Activation-induced cytidine deaminase (AID) introduces point mutations into variable region genes at ~10⁶× the normal somatic mutation rate",
            outcome: "Produces B cell variants with higher or lower affinity for antigen",
            affinityMaturation: "High-affinity variants are positively selected by limited antigen on follicular dendritic cells; low-affinity variants undergo apoptosis",
            result: "Progressive increase in antibody affinity during the course of an immune response"
        },
        classSwitch: {
            mechanism: "AID-mediated recombination of heavy chain constant region genes (switch recombination) — replaces Cμ with Cγ, Cα, or Cε",
            regulation: "Cytokine environment determines class switched to: IL-4 → IgE; TGF-β → IgA; IFN-γ → IgG",
            result: "Same variable region (same antigen specificity) expressed with different constant region (different isotype and effector function)",
            irreversibility: "Class switching is irreversible — once switched, the cell cannot revert to an earlier class"
        },
        clonalSelection: {
            principle: "The antigen does not instruct the antibody — it selects pre-existing B cells whose randomly generated receptors happen to match",
            steps: [
                "Naïve B cells each express a unique BCR (surface IgM/IgD)",
                "Antigen binds only to B cells with complementary BCR",
                "Selected B cells are activated (with T cell help) and undergo clonal expansion",
                "Expanded clone differentiates into plasma cells (antibody secretion) and memory B cells",
                "Unselected B cells remain quiescent"
            ],
            burnetOriginal: "Proposed by Frank Macfarlane Burnet (1957); Nobel Prize 1960"
        }
    },

    immunologicalMemory: {
        primaryResponse: {
            lag: "5–14 days before detectable antibody",
            isotype: "IgM first, then IgG after class switching",
            affinity: "Relatively low affinity (early V(D)J products, limited somatic hypermutation)",
            magnitude: "Lower peak antibody titre",
            cellsGenerated: "Plasma cells + memory B cells"
        },
        secondaryResponse: {
            lag: "1–3 days before detectable antibody (faster due to memory B cells)",
            isotype: "Predominantly IgG (class switched during primary response)",
            affinity: "High affinity (memory cells carry hypermutated variable regions)",
            magnitude: "10–100× higher peak antibody titre",
            duration: "Longer lasting antibody production",
            basis: "Memory B cells have lower activation threshold, pre-switched isotype, affinity-matured BCR"
        },
        vaccinationBasis: {
            principle: "Vaccines prime the immune system with antigen (attenuated pathogen, protein subunit, mRNA-encoded protein) without causing disease, generating memory cells",
            boosterDoses: "Subsequent doses (boosters) drive further somatic hypermutation and affinity maturation, increasing memory B cell numbers and antibody quality",
            herdImmunity: "When sufficient population fraction is immune, transmission chains are broken — protecting unimmunised individuals"
        }
    },

    monoclonalAntibodies: {
        definition: "Antibodies produced by a single B cell clone — all molecules are identical, with the same specificity and isotype",
        hybridomatechnology: {
            steps: [
                "Immunise mouse with antigen of interest",
                "Harvest spleen B cells (antibody-producing but mortal)",
                "Fuse with immortal myeloma cells using PEG → hybridoma cells",
                "Select hybridomas in HAT medium (unfused myeloma cells die; unfused B cells die naturally)",
                "Screen for antigen-specific antibody secretion",
                "Clone positive hybridomas and culture indefinitely"
            ],
            proposed: "Köhler and Milstein (1975); Nobel Prize 1984"
        },
        engineering: {
            chimeric: "Mouse variable regions + human constant regions (reduces immunogenicity)",
            humanised: "Only mouse CDRs grafted onto human framework + constant regions (further reduces immunogenicity)",
            fullyHuman: "Generated by phage display or transgenic mice with human Ig loci — no mouse sequences",
            namingConvention: "-omab (mouse), -ximab (chimeric), -zumab (humanised), -umab (fully human)"
        },
        therapeuticExamples: [
            "Trastuzumab (Herceptin) — anti-HER2; breast cancer",
            "Rituximab — anti-CD20; B cell lymphoma, rheumatoid arthritis",
            "Adalimumab (Humira) — anti-TNFα; rheumatoid arthritis, Crohn's disease",
            "Pembrolizumab (Keytruda) — anti-PD-1; multiple cancers (checkpoint inhibitor)",
            "Omalizumab — anti-IgE; severe allergic asthma",
            "Nivolumab — anti-PD-1; melanoma, lung cancer"
        ],
        diagnosticApplications: [
            "ELISA (enzyme-linked immunosorbent assay)",
            "Lateral flow assays (pregnancy tests, COVID-19 rapid tests)",
            "Flow cytometry (cell surface marker identification)",
            "Immunohistochemistry (tissue staining for pathology)",
            "Western blot (protein identification)"
        ]
    },

    topicSummary: {
        coreInsights: [
            "Antibodies are bivalent (or higher valency) Y-shaped glycoproteins composed of two heavy and two light chains, each subdivided into variable and constant domains — specificity resides entirely in the variable region CDRs.",
            "The five isotypes (IgG, IgA, IgM, IgD, IgE) share the same variable-region architecture but differ in their constant regions, determining effector function, anatomical location, and serum half-life.",
            "Antibody diversity — sufficient to bind any possible epitope — is generated by V(D)J recombination before antigen encounter, then refined by somatic hypermutation and affinity maturation after antigen stimulation.",
            "Clonal selection means the antigen does NOT instruct antibody production — it selects pre-existing specificities from a vast pre-formed repertoire.",
            "The secondary immune response is faster, larger, higher-affinity, and dominated by IgG — a direct consequence of memory B cells carrying affinity-matured, class-switched BCRs.",
            "Antibodies exert effector functions not through their variable regions but through their Fc region — binding Fc receptors on phagocytes, NK cells, and mast cells, and activating the classical complement pathway.",
            "Monoclonal antibodies produced by hybridoma technology (or phage display) are now the largest class of biopharmaceuticals, with applications spanning oncology, autoimmunity, and infectious disease."
        ],
        keyComparisons: {
            primaryVsSecondaryResponse: {
                lag:       { primary: "5–14 days", secondary: "1–3 days" },
                isotype:   { primary: "IgM then IgG", secondary: "Predominantly IgG" },
                affinity:  { primary: "Low-moderate", secondary: "High (affinity matured)" },
                magnitude: { primary: "Low titre", secondary: "10–100× higher titre" }
            },
            isotypeFunctions: {
                IgG: "Systemic immunity, opsonisation, placental transfer, ADCC",
                IgA: "Mucosal immunity, secretory defence, breast milk transfer",
                IgM: "First responder, complement activation, natural antibodies",
                IgD: "Naïve B cell receptor, activation signalling",
                IgE: "Anti-parasitic defence, allergic response (mast cell degranulation)"
            }
        },
        commonMistakesToAvoid: [
            "Antibody specificity is NOT determined by the constant region — it is determined entirely by the CDRs within the variable region",
            "Clonal selection does NOT mean the antigen shapes the antibody — the antibody pre-exists; the antigen selects it",
            "IgM is NOT the strongest antibody per binding site — its high avidity comes from having 10 binding sites (pentamer), not high individual affinity",
            "Class switching changes the isotype but NOT the antigen specificity — the variable region is preserved",
            "Memory B cells do NOT produce antibody constitutively — they rapidly differentiate into plasma cells upon re-exposure to antigen",
            "Fc receptors on phagocytes bind the Fc of antibody-COATED antigen — they do not recognise free antibody"
        ],
        connections: [
            "Vaccinology: the primary/secondary response difference is the entire mechanistic basis of vaccination and booster doses",
            "Genetics: V(D)J recombination uses the same RAG recombinase machinery studied in genome stability and cancer",
            "Pharmacology: monoclonal antibodies now exceed small-molecule drugs in revenue globally",
            "Pathology: antibody-mediated hypersensitivity (Type I–III) underlies allergy, transfusion reactions, and autoimmune disease",
            "Evolution: the immunoglobulin fold is one of the most evolutionarily successful protein architectures — present in cell adhesion molecules, T cell receptors, and MHC proteins"
        ],
        examReadinessChecklist: [
            "Can you draw and label a complete antibody structure including all domains, disulfide bonds, Fab and Fc regions?",
            "Can you compare all five immunoglobulin classes in a table with columns for structure, valency, location, and function?",
            "Can you explain V(D)J recombination, junctional diversity, and somatic hypermutation as three separate mechanisms?",
            "Can you sketch primary and secondary immune response curves on the same axes, annotating the differences in lag, magnitude, isotype, and affinity?",
            "Can you explain clonal selection without using the word 'instruct' — and correct someone who says 'the antigen teaches the B cell'?",
            "Can you connect each effector function (neutralisation, opsonisation, complement, ADCC, degranulation) to the isotype and molecular mechanism responsible?"
        ]
    }
},

vaccines: {
    title: "Vaccines and Immunological Memory: Active Immunisation",

    databaseLinks: {
        misconceptions: [
            'vaccineBasics',
            'immuneResponse',
            'herdImmunity',
            'vaccineTypes',
            'vaccineSafety'
        ],
        contextualScenarios: [
            'vaccineBasics',
            'immuneResponse',
            'herdImmunity',
            'vaccineTypes'
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
            'vaccineBasics',
            'immuneResponse',
            'herdImmunity',
            'vaccineTypes'
        ]
    },

    conceptLinks: {
        "Vaccines stimulate the immune system without causing disease": {
            misconceptions:      ['vaccineBasics', 'vaccineSafety'],
            scenarios:           ['vaccineBasics'],
            studyTips:           ['diagrams', 'specimens'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['vaccineBasics']
        },
        "Antigens trigger B and T lymphocyte activation and clonal selection": {
            misconceptions:      ['immuneResponse'],
            scenarios:           ['immuneResponse'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['immuneResponse']
        },
        "Memory cells enable faster, stronger secondary immune responses": {
            misconceptions:      ['immuneResponse', 'vaccineBasics'],
            scenarios:           ['vaccineBasics', 'immuneResponse'],
            studyTips:           ['diagrams', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['vaccineBasics', 'immuneResponse']
        },
        "Herd immunity protects unvaccinated individuals when coverage exceeds threshold": {
            misconceptions:      ['herdImmunity'],
            scenarios:           ['herdImmunity'],
            studyTips:           ['comparisonTables', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['herdImmunity']
        },
        "Different vaccine types use different antigenic material and carry different risk profiles": {
            misconceptions:      ['vaccineTypes', 'vaccineSafety'],
            scenarios:           ['vaccineTypes'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['vaccineTypes']
        }
    },

    topicIntroduction: {
        overview: "Vaccines are one of the most effective public health interventions in human history, responsible for the eradication of smallpox, near-elimination of polio, and dramatic reductions in childhood mortality worldwide. They work by presenting the immune system with a harmless form of an antigen — triggering adaptive immunity and generating long-lived memory cells without causing disease. In this lesson, we examine the immunological basis of vaccination, the mechanisms behind different vaccine platforms, the population-level concept of herd immunity, and the evidence base surrounding vaccine safety.",
        whyItMatters: "Vaccines underpin the control of infectious disease at both individual and population levels. Understanding their mechanisms is essential for evaluating public health policy, understanding outbreak dynamics, interpreting clinical trial data, and engaging critically with misinformation. Every healthcare professional, biologist, and informed citizen needs a mechanistic understanding of how and why vaccines work.",
        bigPicture: "Vaccines exploit the adaptive immune system's capacity for immunological memory. The first exposure to an antigen — whether from infection or vaccination — produces a primary immune response and generates memory B and T cells. A second exposure (or booster) triggers a faster, larger secondary response. Vaccines safely provide that first antigenic exposure, so the immune system is primed before natural infection occurs.",
        priorKnowledge: [
            "Innate vs adaptive immunity: first-line defences and specific responses",
            "Lymphocytes: B cells (antibody production) and T cells (cell-mediated immunity)",
            "Antigens and antibodies: structure, specificity, and binding",
            "Clonal selection and expansion",
            "Basic microbiology: bacteria, viruses, and their surface structures",
            "Inflammation and the role of cytokines"
        ],
        topicRoadmap: [
            "What vaccines are and the immunological principles behind them",
            "Primary vs secondary immune responses and the role of memory cells",
            "Types of vaccines: live-attenuated, inactivated, subunit, toxoid, viral vector, mRNA",
            "Adjuvants and their role in enhancing vaccine immunogenicity",
            "Herd immunity: threshold, R₀, and population coverage calculations",
            "Vaccine safety: adverse events, causality assessment, and the risk-benefit framework",
            "Global vaccination programmes and the challenges of vaccine equity"
        ]
    },

    concepts: [
        "Vaccines stimulate the immune system without causing disease",
        "Antigens trigger B and T lymphocyte activation and clonal selection",
        "Memory cells enable faster, stronger secondary immune responses",
        "Herd immunity protects unvaccinated individuals when coverage exceeds threshold",
        "Different vaccine types use different antigenic material and carry different risk profiles",
        "Adjuvants enhance vaccine immunogenicity by stimulating innate immune pathways"
    ],

    theory: "Vaccines confer active immunity by presenting antigen to the adaptive immune system, driving clonal selection, effector cell differentiation, and memory cell formation — without the risks of natural infection.",

    keyDefinitions: {
        "Vaccine":             "Biological preparation that stimulates active immunity against a specific pathogen or toxin",
        "Antigen":             "Molecule (usually protein or polysaccharide) recognised by the adaptive immune system",
        "Epitope":             "Specific region of an antigen that binds to an antibody or T-cell receptor",
        "Antibody":            "Immunoglobulin protein produced by plasma cells that binds specifically to an antigen",
        "B Cell":              "Lymphocyte that differentiates into antibody-secreting plasma cells on antigen stimulation",
        "T Cell":              "Lymphocyte involved in cell-mediated immunity; includes helper (CD4+) and cytotoxic (CD8+) subtypes",
        "Memory Cell":         "Long-lived B or T lymphocyte generated after primary immune response; enables rapid secondary response",
        "Clonal Selection":    "Process by which antigen selects and activates the specific lymphocyte clone bearing a complementary receptor",
        "Clonal Expansion":    "Rapid proliferation of the selected lymphocyte clone to generate large numbers of effector and memory cells",
        "Primary Response":    "First immune response to a novel antigen: slow onset, lower antibody titre, dominated by IgM",
        "Secondary Response":  "Subsequent immune response to the same antigen: rapid onset, higher titre, dominated by IgG — mediated by memory cells",
        "Herd Immunity":       "Indirect protection of unvaccinated individuals when sufficient proportion of population is immune",
        "R₀":                  "Basic reproduction number — average number of secondary infections caused by one infected individual in a fully susceptible population",
        "Herd Immunity Threshold": "Minimum proportion of immune individuals required to halt epidemic spread: 1 − 1/R₀",
        "Adjuvant":            "Substance added to vaccine to enhance the magnitude and duration of the immune response",
        "Seroconversion":      "Development of detectable specific antibodies in serum following vaccination or infection",
        "Vaccine Efficacy":    "Percentage reduction in disease incidence in vaccinated vs unvaccinated groups under controlled trial conditions",
        "Vaccine Effectiveness": "Reduction in disease incidence in vaccinated vs unvaccinated individuals under real-world conditions",
        "Attenuated":          "Weakened but viable pathogen that cannot cause disease in immunocompetent individuals",
        "Inactivated":         "Killed pathogen that cannot replicate but retains antigenic structure"
    },

    mechanismOfAction: {
        antigenPresentation: {
            description: "Vaccine antigen is taken up by antigen-presenting cells (APCs — especially dendritic cells). APCs process the antigen into peptide fragments and present them on MHC molecules (MHC II for CD4+ T cells; MHC I for CD8+ T cells in the case of replicating vaccines).",
            keySteps: [
                "Vaccine administered (injection, oral, or intranasal route)",
                "Antigen taken up by dendritic cells at injection site or mucosal surface",
                "Dendritic cells migrate to draining lymph node",
                "Antigen peptides presented on MHC II to CD4+ T helper cells",
                "CD4+ T cells activated, proliferate, and provide co-stimulation to B cells",
                "B cells activated, undergo clonal expansion and affinity maturation",
                "Plasma cells secrete specific antibodies; memory B cells formed",
                "CD8+ cytotoxic T cells activated (if antigen presented on MHC I)",
                "Memory T cells formed for long-term cellular immunity"
            ]
        },
        primaryVsSecondaryResponse: {
            primary: {
                lag:         "5–14 days before detectable antibody",
                peak:        "Lower antibody titre",
                isotype:     "Predominantly IgM, then class-switching to IgG",
                affinity:    "Lower affinity (affinity maturation incomplete)",
                duration:    "Antibody titre declines over weeks to months",
                memory:      "Memory B and T cells generated"
            },
            secondary: {
                lag:         "1–3 days before detectable antibody (memory cells pre-positioned)",
                peak:        "10–100× higher antibody titre",
                isotype:     "Predominantly IgG (class switching already occurred)",
                affinity:    "Higher affinity (affinity maturation completed)",
                duration:    "Antibody titre sustained for months to years",
                memory:      "Memory pool expanded further"
            }
        },
        boosterDoses: {
            purpose:     "Simulate secondary response: rapidly raise antibody titres and expand memory pool",
            timing:      "Given after titre has waned but memory cells persist",
            effect:      "Restores and elevates protective antibody levels; extends duration of protection"
        }
    },

    vaccineTypes: {
        liveAttenuated: {
            description:   "Contains live but weakened pathogen that replicates in host",
            examples:      "MMR (measles, mumps, rubella), yellow fever, varicella, oral polio (Sabin)",
            advantages:    ["Strong, long-lasting immunity", "Both humoral and cellular responses", "Often single dose sufficient"],
            disadvantages: ["Risk of reversion to virulence (rare)", "Contraindicated in immunocompromised", "Requires cold chain"],
            immuneResponse: "Full antigen presentation including MHC I; mirrors natural infection"
        },
        inactivated: {
            description:   "Contains killed pathogen; cannot replicate",
            examples:      "Influenza (injection), hepatitis A, inactivated polio (Salk), rabies",
            advantages:    ["Cannot cause disease", "Stable — less cold-chain dependent"],
            disadvantages: ["Weaker immunity — often requires adjuvant and multiple doses", "Primarily humoral response"],
            immuneResponse: "Primarily MHC II pathway; limited cellular immunity"
        },
        subunit: {
            description:   "Contains only specific antigenic proteins or polysaccharides, not whole pathogen",
            examples:      "Hepatitis B (HBsAg), pertussis (acellular), HPV (VLP), pneumococcal (polysaccharide/conjugate)",
            advantages:    ["Very safe — no pathogen material", "Highly targeted immune response"],
            disadvantages: ["Weaker response — adjuvant required", "May not cover all strains"],
            immuneResponse: "Humoral; conjugate vaccines also stimulate T-cell help"
        },
        toxoid: {
            description:   "Contains inactivated bacterial toxin (toxin rendered harmless but antigenic)",
            examples:      "Tetanus toxoid, diphtheria toxoid",
            advantages:    ["Very safe", "Durable immunity to toxin"],
            disadvantages: ["Protects only against toxin, not the bacterium itself"],
            immuneResponse: "Neutralising antibodies against toxin epitopes"
        },
        viralVector: {
            description:   "Uses a harmless virus (vector) to deliver antigen genes into host cells",
            examples:      "Oxford-AstraZeneca COVID-19 (ChAdOx1), Johnson & Johnson (Ad26), Ebola vaccine",
            advantages:    ["Strong cellular and humoral response", "Can deliver large antigens"],
            disadvantages: ["Pre-existing immunity to vector may reduce efficacy", "Manufacturing complexity"],
            immuneResponse: "Antigen expressed intracellularly → MHC I presentation → strong CD8+ response"
        },
        mRNA: {
            description:   "Delivers mRNA encoding antigen; host cells translate mRNA into antigen protein",
            examples:      "Pfizer-BioNTech BNT162b2 (COVID-19), Moderna mRNA-1273 (COVID-19)",
            advantages:    ["Rapid development", "No live pathogen", "Strong humoral and cellular response", "Scalable manufacturing"],
            disadvantages: ["Ultra-cold storage required (for early formulations)", "Novel platform — longer-term data still accumulating"],
            immuneResponse: "mRNA translated in cytoplasm → antigen presented on MHC I → CD8+ and CD4+ activation"
        }
    },

    adjuvants: {
        definition:  "Substances that enhance the immunogenicity of co-administered antigens without being antigenic themselves",
        mechanism:   "Stimulate pattern recognition receptors (PRRs) on innate immune cells → cytokine release → enhanced APC activation → stronger adaptive response",
        examples: {
            aluminiumSalts: "Alum (Al(OH)₃ or AlPO₄) — most widely used; stimulates Th2 response and antibody production",
            AS04:           "Alum + MPL (monophosphoryl lipid A) — TLR4 agonist; used in hepatitis B and HPV vaccines",
            MF59:           "Oil-in-water emulsion; used in influenza vaccines for elderly",
            CpGMotifs:      "TLR9 agonist; stimulates strong Th1 response and cellular immunity"
        },
        purpose:     "Allow lower antigen doses, fewer doses, and stronger responses — particularly important in elderly and immunocompromised populations"
    },

    herdImmunity: {
        definition:       "When a sufficient proportion of a population is immune (by vaccination or prior infection), the chain of transmission is broken, protecting even unvaccinated individuals",
        mechanism:        "Each infectious person contacts fewer susceptible individuals → R_effective drops below 1 → epidemic cannot be sustained",
        threshold:        {
            formula:      "p_c = 1 − 1/R₀",
            interpretation: "p_c is the critical proportion immune needed to halt spread",
            examples: {
                measles:    "R₀ ≈ 12–18 → threshold ≈ 92–94%",
                polio:      "R₀ ≈ 5–7 → threshold ≈ 80–85%",
                COVID19:    "R₀ ≈ 2–3 (original strain) → threshold ≈ 50–67%; higher for variants"
            }
        },
        whoIsProtected:   "Infants too young to vaccinate, immunocompromised individuals who cannot mount a response, those for whom vaccine failed to produce immunity",
        limitations: [
            "Requires very high coverage for high-R₀ pathogens (e.g. measles needs >92%)",
            "Vaccine hesitancy creates geographical clusters of susceptibility",
            "New variants with higher R₀ raise the required threshold",
            "Herd immunity via infection carries unacceptable mortality cost"
        ]
    },

    vaccineSafety: {
        adverseEvents: {
            common:      "Soreness at injection site, fever, fatigue — expected innate immune activation; resolve within 1–2 days",
            uncommon:    "Febrile convulsions (rare), allergic reactions (1–2 per 100,000 doses)",
            rare:        "Anaphylaxis (~1 per million doses), myocarditis with mRNA vaccines (1–5 per 100,000 in young males, mostly mild and self-resolving), VIPIT with adenoviral vector vaccines (extremely rare)"
        },
        causalityAssessment: {
            Bradford_Hill: "Criteria used to assess whether vaccine exposure causes an adverse outcome: strength of association, temporality, biological plausibility, consistency across studies",
            VAERS:         "Vaccine Adverse Event Reporting System — passive surveillance; reports association not causation",
            Brighton:      "Brighton Collaboration case definitions — standardise adverse event reporting globally"
        },
        riskBenefitFramework: {
            principle:   "Vaccines are approved when benefit (prevented disease, disability, death) clearly exceeds risk (adverse events at population level)",
            comparison:  "Risk of adverse event from vaccine must be compared to risk of the same outcome from natural infection",
            example:     "Myocarditis risk from COVID-19 mRNA vaccine in young males: ~5 per 100,000. Myocarditis risk from COVID-19 infection in same group: ~150 per 100,000 — vaccine risk is ~30× lower"
        }
    },

    globalVaccinationProgrammes: {
        WHO_EPI:          "Expanded Programme on Immunisation (1974) — established universal childhood vaccination globally",
        GAVI:             "Vaccine Alliance supporting vaccination in low-income countries",
        COVAX:            "COVID-19 Vaccines Global Access — aimed at equitable global distribution of COVID-19 vaccines",
        eradicationSuccess: "Smallpox eradicated 1980 — only human disease ever eradicated by vaccination",
        nearElimination:  ["Polio (endemic in only 2 countries as of 2024)", "Measles (eliminated in many regions)"]
    },

    applications: [
        "Prevention of infectious disease at individual and population level",
        "Eradication and elimination of pathogens (smallpox eradicated; polio near-eradicated)",
        "Cancer prevention (HPV vaccine reduces cervical cancer risk by >90%)",
        "Pandemic response (mRNA platform enabled COVID-19 vaccines within 12 months of genome publication)",
        "Therapeutic vaccines (cancer immunotherapy, HIV — emerging applications)",
        "Biodefence (anthrax, smallpox stockpile vaccines)"
    ],

    topicSummary: {
        coreInsights: [
            "Vaccines work by exploiting the adaptive immune system's capacity for memory — they safely provide antigenic experience so the immune system is pre-armed before natural infection.",
            "The secondary immune response is faster, larger, and of higher affinity than the primary response — this is the immunological basis of protective vaccination.",
            "Different vaccine platforms (live-attenuated, inactivated, subunit, toxoid, viral vector, mRNA) differ in what antigenic material they deliver, which arms of immunity they stimulate, and what safety tradeoffs they carry.",
            "Adjuvants activate innate immune pathways to enhance adaptive responses — they are not inert additives but pharmacologically important components of the vaccine formulation.",
            "Herd immunity threshold is calculated as 1 − 1/R₀ — pathogens with high R₀ (like measles) require very high population coverage (>92%) to break transmission chains.",
            "Vaccine safety is evaluated by comparing adverse event rates in vaccinated vs unvaccinated populations, and must always be contextualised against the risks of natural infection.",
            "mRNA vaccines represent a platform shift — antigen sequence can be designed and manufactured within days of a pathogen's genome being published, compressing vaccine development timelines from decades to months.",
            "Vaccine equity — ensuring access regardless of geography or income — is as important as vaccine development for achieving global disease control."
        ],
        keyEquations: {
            herdImmunityThreshold: "p_c = 1 − 1/R₀",
            effectiveReproductionNumber: "R_eff = R₀ × (1 − p) where p = proportion immune",
            vaccineEfficacy: "VE = 1 − (Risk in vaccinated / Risk in unvaccinated) × 100%",
            numberNeededToVaccinate: "NNV = 1 / (Risk_unvaccinated − Risk_vaccinated)"
        },
        vaccineTypeComparison: {
            liveAttenuated:  { antigenType: "Live weakened pathogen",   immuneArms: "Humoral + cellular", doses: "Usually 1",       safetyFlag: "Avoid in immunocompromised" },
            inactivated:     { antigenType: "Killed pathogen",          immuneArms: "Mainly humoral",     doses: "2–3 + booster",  safetyFlag: "Very safe" },
            subunit:         { antigenType: "Purified proteins/VLPs",   immuneArms: "Humoral (± cellular)", doses: "2–3",          safetyFlag: "Very safe" },
            toxoid:          { antigenType: "Inactivated toxin",        immuneArms: "Humoral (anti-toxin)", doses: "2–3 + booster", safetyFlag: "Very safe" },
            viralVector:     { antigenType: "Vector-delivered gene",    immuneArms: "Humoral + cellular", doses: "1–2",            safetyFlag: "Vector immunity may reduce re-dosing" },
            mRNA:            { antigenType: "Lipid nanoparticle-mRNA",  immuneArms: "Humoral + cellular", doses: "2 + booster",    safetyFlag: "Very safe; cold chain needed" }
        },
        commonMistakesToAvoid: [
            "Vaccines do NOT contain the live disease-causing form of a pathogen — live-attenuated vaccines are weakened and cannot cause disease in immunocompetent individuals",
            "Antibody titre alone does not define protection — cellular immunity (memory T cells) is critical for long-term defence even when circulating antibodies wane",
            "Herd immunity does NOT mean 100% of the population must be vaccinated — the threshold depends on R₀ and is always below 100%",
            "The herd immunity threshold for measles (~92–94%) is exceptionally high — students frequently underestimate how much coverage high-R₀ pathogens require",
            "Correlation is not causation — temporal association between vaccination and an adverse event does not establish that the vaccine caused it",
            "mRNA vaccines do NOT alter DNA — mRNA never enters the nucleus and is degraded within days; reverse transcription into host DNA does not occur under normal cellular conditions",
            "Adjuvants are not contaminants or toxins — they are intentional, well-characterised components that improve vaccine efficacy"
        ],
        connections: [
            "Immunology: vaccines apply the core adaptive immunity concepts of clonal selection, affinity maturation, and immunological memory",
            "Epidemiology: herd immunity, R₀, and vaccination coverage connect vaccine science to outbreak dynamics and public health modelling",
            "Molecular biology: mRNA vaccine platform relies on mRNA stability engineering, lipid nanoparticle delivery, and spike protein structural biology",
            "Pharmacology: adjuvant design draws on innate immune receptor pharmacology (Toll-like receptors, NLRP3 inflammasome)",
            "Evolution: pathogen antigenic variation (influenza drift and shift, SARS-CoV-2 variants) drives the need for vaccine updating",
            "Ethics and public health: vaccine mandates, equity, and hesitancy connect vaccine science to bioethics and social determinants of health"
        ],
        examReadinessChecklist: [
            "Can you draw and annotate primary vs secondary immune response curves on the same axes?",
            "Can you classify each of the six vaccine types by antigen, immune arms stimulated, and key safety consideration?",
            "Can you calculate the herd immunity threshold for a pathogen given its R₀?",
            "Can you explain why mRNA vaccines do not alter the genome?",
            "Can you explain why adjuvants are needed in inactivated and subunit vaccines but not in live-attenuated vaccines?",
            "Can you distinguish vaccine efficacy (trial) from vaccine effectiveness (real-world) and explain why they differ?"
        ]
    }
},



pathogens: {
    title: "Pathogens and Infectious Disease: Mechanisms of Infection and Host Defence",

    databaseLinks: {
        misconceptions: [
            'pathogenTypes',
            'bacteriaVsViruses',
            'immuneResponse',
            'transmission',
            'antibioticsAndResistance'
        ],
        contextualScenarios: [
            'pathogenTypes',
            'bacteriaVsViruses',
            'immuneResponse',
            'antibioticsAndResistance'
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
            'pathogenTypes',
            'bacteriaVsViruses',
            'immuneResponse',
            'antibioticsAndResistance'
        ]
    },

    conceptLinks: {
        "Pathogens are microorganisms that cause disease": {
            misconceptions:      ['pathogenTypes'],
            scenarios:           ['pathogenTypes'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['pathogenTypes']
        },
        "Bacteria and viruses differ fundamentally in structure and replication": {
            misconceptions:      ['bacteriaVsViruses'],
            scenarios:           ['bacteriaVsViruses'],
            studyTips:           ['comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['bacteriaVsViruses']
        },
        "Pathogens are transmitted by specific routes that can be interrupted": {
            misconceptions:      ['transmission'],
            scenarios:           ['pathogenTypes'],
            studyTips:           ['diagrams', 'mnemonics'],
            assessmentRubrics:   ['understand', 'apply'],
            assessmentQuestions: ['pathogenTypes']
        },
        "The immune system deploys non-specific and specific defences": {
            misconceptions:      ['immuneResponse'],
            scenarios:           ['immuneResponse'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['immuneResponse']
        },
        "Antibiotics target bacteria and resistance arises through natural selection": {
            misconceptions:      ['antibioticsAndResistance'],
            scenarios:           ['antibioticsAndResistance'],
            studyTips:           ['comparisonTables', 'flashcards', 'mnemonics', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate', 'create'],
            assessmentQuestions: ['antibioticsAndResistance']
        }
    },

    topicIntroduction: {
        overview: "Pathogens are agents capable of causing disease in a host. They span an enormous range of biological complexity — from prions (misfolded proteins with no genetic material) through viruses (non-cellular obligate intracellular parasites), bacteria (prokaryotic cells), fungi, and protists (eukaryotic microorganisms), up to macroscopic parasitic worms (helminths). Each category exploits host biology in distinct ways, and understanding those mechanisms is the foundation for designing treatments, vaccines, and public health interventions.",
        whyItMatters: "Infectious diseases remain the leading cause of death globally. COVID-19, antibiotic-resistant tuberculosis, malaria, and HIV illustrate that pathogens continually evolve to defeat both host immunity and medical countermeasures. Every vaccine, antibiotic, antiviral, and infection-control protocol rests on understanding how pathogens cause disease and how hosts respond.",
        bigPicture: "Infection is a dynamic arms race: pathogens evolve mechanisms to enter, colonise, evade immunity, replicate, and exit hosts; hosts evolve physical barriers, non-specific inflammation, and precise antibody-mediated responses. The outcome — clearance, chronic infection, or death — depends on the balance between pathogen virulence and host defence. Public health interrupts transmission; medicine tips the balance toward host survival.",
        priorKnowledge: [
            "Cell biology: prokaryotic vs eukaryotic cell structure",
            "DNA and RNA: replication, transcription, translation",
            "Proteins: structure and function",
            "Basic evolution: natural selection, mutation, inheritance",
            "Body systems: skin, respiratory tract, digestive tract as barriers"
        ],
        topicRoadmap: [
            "Types of pathogens: viruses, bacteria, fungi, protists, helminths, prions",
            "Transmission routes: direct contact, droplet, airborne, vector-borne, faecal-oral, vertical",
            "Bacterial structure, growth, and pathogenicity mechanisms",
            "Viral structure, replication cycle (lytic and lysogenic), and cell damage",
            "Non-specific (innate) host defences: physical barriers, phagocytosis, inflammation",
            "Specific (adaptive) immune response: B cells, T cells, antibodies, immunological memory",
            "Antibiotics: modes of action, selectivity, and resistance mechanisms",
            "Antivirals and vaccines: principles and limitations",
            "Epidemiology: R number, herd immunity, disease prevention strategies"
        ]
    },

    concepts: [
        "Pathogens are microorganisms that cause disease",
        "Bacteria and viruses differ fundamentally in structure and replication",
        "Pathogens are transmitted by specific routes that can be interrupted",
        "The immune system deploys non-specific and specific defences",
        "Antibiotics target bacteria and resistance arises through natural selection",
        "Vaccines stimulate immunological memory without causing disease"
    ],

    theory: "Pathogens cause disease by colonising host tissues, secreting toxins, triggering damaging immune responses, or directly destroying host cells. The host counters with layered defences. Medical interventions — antibiotics, antivirals, vaccines — exploit differences between pathogen and host biology.",

    keyDefinitions: {
        "Pathogen":              "An organism or agent capable of causing disease in a host",
        "Infection":             "Successful colonisation of a host by a pathogen",
        "Disease":               "Disruption of normal physiological function caused by infection (or other factors)",
        "Virulence":             "The relative ability of a pathogen to cause severe disease",
        "Transmission":          "Movement of a pathogen from one host to another",
        "Vector":                "An organism (often an arthropod) that transmits a pathogen between hosts",
        "Reservoir":             "The natural habitat in which a pathogen normally lives and multiplies",
        "Incubation Period":     "Time between infection and appearance of symptoms",
        "Antigen":               "A molecule (usually on pathogen surface) recognised by the immune system",
        "Antibody":              "Protein produced by B cells that binds specifically to one antigen",
        "Phagocytosis":          "Engulfment and destruction of pathogens by white blood cells",
        "Pathogenicity":         "The ability of a pathogen to cause disease",
        "Opportunistic Pathogen":"Causes disease only when host immunity is compromised",
        "Commensal":             "Organism living on/in a host without causing harm",
        "Prokaryote":            "Unicellular organism lacking a membrane-bound nucleus (e.g. bacteria)",
        "Obligate Intracellular Parasite": "Organism that can only replicate inside a host cell (e.g. viruses)"
    },

    pathogenTypes: {
        viruses: {
            structure:     "Nucleic acid (DNA or RNA) surrounded by protein coat (capsid); some have lipid envelope",
            size:          "20–300 nm — smaller than bacteria; only visible by electron microscopy",
            cellular:      "Non-cellular — no ribosomes, no metabolism of their own",
            replication:   "Obligate intracellular — must hijack host cell machinery",
            examples:      "Influenza (RNA), HIV (RNA retrovirus), SARS-CoV-2 (RNA), Herpes simplex (DNA), Bacteriophage (DNA)",
            diseaseEffect: "Destroy host cells (lysis), cause immune-mediated damage, or transform cells (oncogenic viruses)"
        },
        bacteria: {
            structure:     "Prokaryotic cell: cell wall (peptidoglycan), cell membrane, circular chromosome, ribosomes (70S), no nucleus",
            size:          "1–10 μm — visible by light microscopy",
            cellular:      "Unicellular prokaryotes — fully capable of independent metabolism and reproduction",
            replication:   "Binary fission — can divide every 20 minutes under optimal conditions",
            examples:      "Mycobacterium tuberculosis, Staphylococcus aureus, Vibrio cholerae, Salmonella typhi, Clostridium tetani",
            diseaseEffect: "Toxin production (exotoxins, endotoxins), direct tissue invasion, competition with normal flora"
        },
        fungi: {
            structure:     "Eukaryotic; cell wall of chitin (not peptidoglycan); may exist as unicellular yeasts or multicellular hyphae",
            replication:   "Sexual and asexual spore production; budding (yeasts)",
            examples:      "Candida albicans (thrush), Aspergillus fumigatus (aspergillosis), Tinea species (ringworm/athlete's foot)",
            diseaseEffect: "Surface infections (skin, mucosae) or systemic disease in immunocompromised patients",
            treatmentNote: "Antifungals target ergosterol (fungal membrane sterol) — absent in human cells"
        },
        protists: {
            structure:     "Eukaryotic, unicellular; diverse morphology",
            examples:      "Plasmodium falciparum (malaria), Trypanosoma brucei (sleeping sickness), Giardia lamblia (giardiasis)",
            diseaseEffect: "Intracellular or extracellular parasitism; immune evasion by antigen switching",
            vector:        "Many transmitted by arthropod vectors (Anopheles mosquito for malaria)"
        },
        helminths: {
            structure:     "Multicellular eukaryotic worms; visible to naked eye",
            examples:      "Ascaris lumbricoides (roundworm), Schistosoma (blood fluke), Taenia (tapeworm)",
            diseaseEffect: "Mechanical damage, nutrient competition, immune modulation",
            treatmentNote: "Treated with antihelminthic drugs; too large for phagocytosis"
        },
        prions: {
            structure:     "Misfolded protein (PrPSc) — no nucleic acid",
            replication:   "Induces normal host prion protein (PrPC) to misfold — exponential cascade",
            examples:      "Creutzfeldt-Jakob disease (CJD), bovine spongiform encephalopathy (BSE), scrapie",
            diseaseEffect: "Progressive neurodegeneration — spongiform (sponge-like) brain lesions",
            treatmentNote: "No effective treatment; cannot be destroyed by standard sterilisation"
        }
    },

    transmissionRoutes: {
        directContact:  "Skin-to-skin or bodily fluid contact — herpes simplex, HIV, syphilis",
        droplet:        "Large droplets (>5 μm) from coughing/sneezing — influenza, COVID-19, meningococcal disease",
        airborne:       "Fine aerosol particles (<5 μm) remain suspended — tuberculosis, measles, chickenpox",
        faecalOral:     "Contaminated food or water — cholera, Salmonella, Giardia, hepatitis A",
        vectorBorne:    "Arthropod vector carries pathogen between hosts — malaria (Anopheles), dengue (Aedes), Lyme disease (Ixodes tick)",
        vertical:       "Mother to child — in utero (rubella, HIV), during birth (GBS), or breastfeeding (HIV)",
        fomite:         "Contaminated inanimate surface — norovirus, MRSA on hospital surfaces",
        iatrogenic:     "Via medical procedures — blood transfusion (hepatitis C historically), surgical site infections"
    },

    bacterialPathogenicity: {
        adhesion:        "Fimbriae and pili attach bacteria to host cell surfaces — required for colonisation",
        invasion:        "Some bacteria enter host cells (Salmonella triggers own uptake via actin rearrangement)",
        toxinProduction: {
            exotoxins:   "Proteins secreted by living bacteria — highly potent and specific; e.g. cholera toxin (activates adenylate cyclase → massive fluid loss), tetanus toxin (blocks inhibitory neurotransmission → muscle spasm)",
            endotoxins:  "Lipopolysaccharide (LPS) from Gram-negative outer membrane — released on cell death; triggers systemic inflammation (septic shock)"
        },
        immuneEvasion:   "Capsules (prevent phagocytosis), enzyme secretion (IgA protease, catalase), intracellular survival",
        biofilms:        "Structured communities of bacteria in polysaccharide matrix — resistant to antibiotics and immune clearance; responsible for chronic infections (e.g. Pseudomonas in cystic fibrosis)"
    },

    viralReplicationCycle: {
        lytic: {
            steps: [
                "Attachment: viral surface protein binds specific host receptor",
                "Entry: fusion with cell membrane or receptor-mediated endocytosis",
                "Uncoating: release of viral nucleic acid into cytoplasm",
                "Replication: viral genome replicated using host and viral enzymes",
                "Transcription and translation: viral mRNA produced; host ribosomes make viral proteins",
                "Assembly: new viral particles assembled",
                "Release: cell lysis releases hundreds of new virions; host cell is destroyed"
            ],
            outcome: "Host cell destroyed; acute infection"
        },
        lysogenic: {
            steps: [
                "Attachment and entry (as above)",
                "Integration: viral DNA (provirus) integrates into host chromosome",
                "Replication with host: provirus replicated every time host cell divides",
                "Induction: environmental trigger activates provirus → switches to lytic cycle"
            ],
            outcome: "Latent infection; cell survives until induction; example: herpes viruses (HSV), HIV provirus"
        },
        retroviruses: {
            uniqueFeature: "RNA genome → reverse transcribed into DNA by reverse transcriptase → integrated into host genome",
            example:       "HIV: infects CD4+ T helper cells, progressively depleting them → AIDS"
        }
    },

    hostDefences: {
        nonSpecific: {
            physical: [
                "Skin: waterproof keratin layer; low pH; antimicrobial sebum and sweat",
                "Mucus: traps pathogens in respiratory and digestive tracts",
                "Cilia: sweep mucus and trapped pathogens toward throat (mucociliary escalator)",
                "Stomach acid: pH 2 destroys most ingested pathogens",
                "Tears and saliva: contain lysozyme (breaks down bacterial peptidoglycan)"
            ],
            inflammation: {
                trigger:    "Tissue damage or pathogen-associated molecular patterns (PAMPs) detected by toll-like receptors",
                steps:      ["Vasodilation → increased blood flow → redness and heat", "Increased capillary permeability → fluid leaks into tissue → swelling", "Neutrophils and macrophages recruited by chemokines", "Phagocytosis of pathogens and debris", "Clot formation to contain infection"],
                purpose:    "Contain infection, recruit immune cells, initiate repair"
            },
            phagocytosis:   "Neutrophils and macrophages engulf pathogens → phagolysosome fusion → destruction by reactive oxygen species and enzymes",
            interferons:    "Signalling proteins released by virus-infected cells → warn neighbouring cells to upregulate antiviral defences → reduce viral spread"
        },
        specific: {
            antigenPresentation: "Phagocytes display pathogen fragments (antigens) on MHC proteins → activate lymphocytes",
            cellularImmunity: {
                Tcells:    "T helper cells (CD4+) coordinate response; cytotoxic T cells (CD8+) kill infected host cells displaying viral antigens on MHC I",
                clonalSelection: "Lymphocytes with matching receptor are selected and clonally expanded"
            },
            humoralImmunity: {
                Bcells:    "B cells bind antigen → activated by T helper cells → differentiate into plasma cells",
                plasmaCells: "Produce large quantities of specific antibodies",
                antibodyFunctions: [
                    "Neutralisation: block pathogen surface proteins (prevent attachment)",
                    "Opsonisation: coat pathogen surface → enhance phagocytosis",
                    "Complement activation: trigger lysis of bacterial cells",
                    "Agglutination: clump pathogens → reduce infective dose"
                ]
            },
            memory: {
                mechanism:  "Some activated B and T cells differentiate into long-lived memory cells",
                secondaryResponse: "Faster, larger, longer-lasting antibody response on re-exposure — basis of vaccination",
                vaccineLink: "Vaccination introduces antigens (attenuated pathogen, subunit, mRNA) to generate memory without disease"
            }
        }
    },

    antibioticsAndResistance: {
        modesOfAction: {
            cellWallSynthesis:    "Inhibit peptidoglycan cross-linking — penicillins, cephalosporins (β-lactams); vancomycin",
            proteinSynthesis70S:  "Target 70S (prokaryotic) ribosome — aminoglycosides (30S), tetracyclines (30S), macrolides (50S), chloramphenicol (50S)",
            DNAReplication:       "Inhibit DNA gyrase (topoisomerase II) — fluoroquinolones (e.g. ciprofloxacin)",
            cellMembrane:         "Disrupt bacterial membrane — polymyxins (e.g. colistin)",
            folateMetabolism:     "Inhibit folic acid synthesis (essential in bacteria, not humans) — sulfonamides, trimethoprim"
        },
        selectiveToxicity:        "Antibiotics exploit structural differences between prokaryotic and eukaryotic cells — 70S vs 80S ribosomes, peptidoglycan wall (absent in eukaryotes), different DNA gyrase structure",
        resistanceMechanisms: {
            enzymatic:            "Enzyme degrades antibiotic — β-lactamase cleaves penicillin β-lactam ring",
            targetModification:   "Mutation alters antibiotic binding site — mutated penicillin-binding protein in MRSA (methicillin-resistant S. aureus)",
            effluxPumps:          "Membrane pumps actively expel antibiotic from bacterial cell before it reaches its target",
            reducedPermeability:  "Mutation reduces uptake of antibiotic through outer membrane porins",
            bypassPathway:        "Bacteria acquire alternative enzyme not inhibited by antibiotic — e.g. alternative DHFR in trimethoprim resistance"
        },
        spreadOfResistance: {
            vertical:             "Resistance gene passed from parent to daughter cells during binary fission",
            horizontal:           "Resistance genes transferred between bacteria by conjugation (plasmids), transformation (uptake of free DNA), or transduction (bacteriophage-mediated transfer)",
            naturalSelection:     "Antibiotic use kills susceptible bacteria; resistant mutants survive and reproduce — accelerated by incomplete courses, overuse in agriculture"
        },
        antivirals: {
            mechanism:            "Target virus-specific proteins (reverse transcriptase, protease, neuraminidase) without affecting host cell equivalents",
            examples:             "Oseltamivir (Tamiflu) — inhibits influenza neuraminidase; antiretrovirals (ART) — combination therapy targeting HIV reverse transcriptase, protease, and integrase",
            challenge:            "High viral mutation rate generates resistant variants; HIV requires combination therapy (HAART) to prevent resistance"
        }
    },

    vaccination: {
        principle:        "Introduce antigen to stimulate primary immune response and generate immunological memory — without causing disease",
        types: {
            liveAttenuated: "Weakened pathogen — MMR, yellow fever; strong immune response but contraindicated in immunocompromised",
            inactivated:    "Killed pathogen — influenza (injection), polio (Salk); safer but weaker response, boosters often needed",
            subunit:        "Purified pathogen proteins — hepatitis B, pertussis component; very safe, limited antigens",
            toxoid:         "Inactivated toxin — tetanus, diphtheria; generates antitoxin antibodies",
            mRNA:           "Encodes viral antigen — COVID-19 (Pfizer/Moderna); host cells produce antigen and generate immune response; no live virus involved",
            viralVector:    "Adenovirus carries antigen gene — COVID-19 (AstraZeneca); strong immune response"
        },
        herdImmunity: {
            definition:   "When sufficient proportion of population is immune, transmission chains are broken — unvaccinated individuals are indirectly protected",
            threshold:    "Depends on R₀ (basic reproduction number): herd immunity threshold = 1 − 1/R₀",
            examples:     "Measles R₀ ≈ 12–18 → herd immunity requires ~95% immunity; COVID-19 original R₀ ≈ 2–3 → ~50–67%"
        }
    },

    epidemiology: {
        R0:               "Basic reproduction number — average number of secondary cases from one infectious individual in a fully susceptible population",
        Rt:               "Effective reproduction number — R₀ modified by current population immunity and interventions; if Rt < 1, epidemic declines",
        diseaseControl: [
            "Vaccination — reduce susceptible population",
            "Quarantine and isolation — interrupt transmission chains",
            "Contact tracing — identify and quarantine exposed individuals",
            "Hygiene and sanitation — interrupt faecal-oral and contact transmission",
            "Vector control — reduce mosquito breeding sites (malaria, dengue)",
            "Surveillance — monitor incidence for early outbreak detection"
        ]
    },

    topicSummary: {
        coreInsights: [
            "Pathogens span from acellular prions and viruses through prokaryotic bacteria to eukaryotic fungi, protists, and helminths — each requiring different treatment strategies because of their distinct biology.",
            "Viruses are obligate intracellular parasites with no ribosomes or metabolism — they cannot be killed by antibiotics and must be treated with antivirals targeting virus-specific proteins.",
            "Bacteria cause disease by toxin production, direct invasion, and immune evasion — their prokaryotic features (peptidoglycan wall, 70S ribosomes, DNA gyrase) are the selective targets of antibiotics.",
            "The innate immune system provides rapid, non-specific defence (barriers, phagocytosis, inflammation); the adaptive immune system provides slow but precise, memory-generating defence (B cells, T cells, antibodies).",
            "Antibiotic resistance arises through natural selection — resistant mutants survive treatment and reproduce — and spreads rapidly via horizontal gene transfer (plasmids, conjugation).",
            "Vaccination exploits immunological memory: primary exposure to antigen (without disease) generates memory B and T cells that mount a fast, amplified response on real infection.",
            "The R₀ value determines the herd immunity threshold: diseases with high R₀ (measles) require very high vaccination coverage to interrupt transmission."
        ],
        keyEquations: {
            herdImmunityThreshold: "H = 1 − 1/R₀ (proportion of population that must be immune to halt transmission)",
            doublingTime:          "t_d = ln(2) / growth rate constant (for exponential bacterial growth)",
            RtFromR0:              "Rt = R₀ × s (where s = proportion still susceptible)"
        },
        pathogenComparison: {
            virus:     { cellular: "No", nucleicAcid: "DNA or RNA (not both)", ribosome: "None", treatmentTarget: "Virus-specific enzymes (reverse transcriptase, neuraminidase, protease)" },
            bacteria:  { cellular: "Yes (prokaryote)", nucleicAcid: "DNA + RNA", ribosome: "70S", treatmentTarget: "Cell wall, 70S ribosome, DNA gyrase, folate synthesis" },
            fungi:     { cellular: "Yes (eukaryote)", nucleicAcid: "DNA + RNA", ribosome: "80S", treatmentTarget: "Ergosterol (fungal-specific membrane sterol)" },
            protist:   { cellular: "Yes (eukaryote)", nucleicAcid: "DNA + RNA", ribosome: "80S", treatmentTarget: "Parasite-specific metabolic enzymes" }
        },
        commonMistakesToAvoid: [
            "Antibiotics do NOT work against viruses — they target prokaryotic features absent in viruses",
            "Viruses are NOT alive in the conventional sense — they have no metabolism, no ribosomes, and cannot reproduce independently",
            "All bacteria are NOT harmful — the vast majority are commensal or beneficial; only a minority are pathogens",
            "Antibiotic resistance is NOT acquired by the individual patient — it is selected in the bacterial population",
            "The immune response does NOT occur instantly — the primary response takes 1–2 weeks; the secondary (memory) response is faster",
            "Vaccination does NOT cause the disease it prevents — live attenuated vaccines use weakened strains incapable of causing full disease in healthy individuals",
            "Endotoxins are NOT secreted — they are structural components (LPS) released only when Gram-negative bacteria die",
            "Non-specific immunity is NOT weaker — it responds faster and is essential for surviving long enough for specific immunity to act"
        ],
        connections: [
            "Evolution: antibiotic resistance is one of the clearest real-time examples of natural selection operating in bacterial populations",
            "Cell biology: understanding prokaryotic vs eukaryotic cell structure directly explains why antibiotics can selectively kill bacteria without harming host cells",
            "Genetics: horizontal gene transfer (conjugation, transformation, transduction) moves resistance genes across species — a major driver of the resistance crisis",
            "Biochemistry: viral reverse transcriptase, bacterial β-lactamase, and neuraminidase are enzymes whose kinetics and inhibition underlie drug design",
            "Epidemiology: R₀, herd immunity thresholds, and contact tracing connect individual infection biology to population-level disease dynamics",
            "Immunology: the clonal selection theory, MHC antigen presentation, and memory cell generation underpin both our understanding of infection and vaccine design"
        ],
        examReadinessChecklist: [
            "Can you compare viruses, bacteria, fungi, and protists across five structural and functional features?",
            "Can you describe the lytic and lysogenic replication cycles with a diagram, including all stages?",
            "Can you explain how each class of antibiotic achieves selective toxicity, using specific structural differences?",
            "Can you explain the four mechanisms of antibiotic resistance and how horizontal gene transfer spreads them?",
            "Can you trace the sequence of events in both the innate and adaptive immune responses to a bacterial infection?",
            "Can you calculate the herd immunity threshold from R₀ and explain what determines R₀?",
            "Can you explain why completing a full antibiotic course reduces resistance selection pressure?"
        ]
    }
},


immunodeficiency: {
    title: "Immunodeficiency: Primary and Secondary Immune Failure",

    databaseLinks: {
        misconceptions: [
            'immuneSystemOverview',
            'primaryImmunodeficiency',
            'secondaryImmunodeficiency',
            'diagnosticsAndTreatment',
            'opportunisticInfections'
        ],
        contextualScenarios: [
            'immuneSystemOverview',
            'primaryImmunodeficiency',
            'secondaryImmunodeficiency',
            'diagnosticsAndTreatment'
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
            'immuneSystemOverview',
            'primaryImmunodeficiency',
            'secondaryImmunodeficiency',
            'diagnosticsAndTreatment'
        ]
    },

    conceptLinks: {
        "The immune system comprises innate and adaptive branches with distinct roles": {
            misconceptions:      ['immuneSystemOverview'],
            scenarios:           ['immuneSystemOverview'],
            studyTips:           ['diagrams', 'comparisonTables'],
            assessmentRubrics:   ['remember', 'understand'],
            assessmentQuestions: ['immuneSystemOverview']
        },
        "Primary immunodeficiencies arise from genetic defects in immune cell development or function": {
            misconceptions:      ['primaryImmunodeficiency'],
            scenarios:           ['primaryImmunodeficiency'],
            studyTips:           ['diagrams', 'comparisonTables', 'flashcards'],
            assessmentRubrics:   ['remember', 'understand', 'apply'],
            assessmentQuestions: ['primaryImmunodeficiency']
        },
        "Secondary immunodeficiencies result from extrinsic factors that damage an intact immune system": {
            misconceptions:      ['secondaryImmunodeficiency'],
            scenarios:           ['secondaryImmunodeficiency'],
            studyTips:           ['comparisonTables', 'mnemonics', 'flashcards'],
            assessmentRubrics:   ['understand', 'apply', 'analyze'],
            assessmentQuestions: ['secondaryImmunodeficiency']
        },
        "HIV targets CD4+ T cells, progressively dismantling adaptive immunity": {
            misconceptions:      ['secondaryImmunodeficiency', 'opportunisticInfections'],
            scenarios:           ['secondaryImmunodeficiency'],
            studyTips:           ['diagrams', 'specimens', 'practiceRoutines'],
            assessmentRubrics:   ['apply', 'analyze', 'evaluate'],
            assessmentQuestions: ['secondaryImmunodeficiency']
        },
        "Opportunistic infections define clinical immunodeficiency and guide diagnosis": {
            misconceptions:      ['opportunisticInfections'],
            scenarios:           ['diagnosticsAndTreatment'],
            studyTips:           ['flashcards', 'mnemonics', 'comparisonTables'],
            assessmentRubrics:   ['apply', 'analyze'],
            assessmentQuestions: ['diagnosticsAndTreatment']
        },
        "Treatment strategies target the underlying deficit: replacement, reconstitution, or pathogen suppression": {
            misconceptions:      ['diagnosticsAndTreatment'],
            scenarios:           ['diagnosticsAndTreatment'],
            studyTips:           ['comparisonTables', 'practiceRoutines', 'dissectionAndExperiment'],
            assessmentRubrics:   ['evaluate', 'create'],
            assessmentQuestions: ['diagnosticsAndTreatment']
        }
    },

    topicIntroduction: {
        overview: "Immunodeficiency occurs when one or more components of the immune system fail to function adequately, leaving the host vulnerable to infections and malignancies that a healthy immune system would control. Deficiencies may be primary — arising from inherited genetic mutations affecting immune cell development or function — or secondary — acquired as a consequence of infection, malnutrition, malignancy, or immunosuppressive therapy. Understanding immunodeficiency requires first understanding the normal architecture of immunity, and then identifying precisely which component has failed and what downstream consequences follow.",
        whyItMatters: "Immunodeficiency is one of the most clinically significant areas of immunology. HIV/AIDS has killed over 40 million people globally. Primary immunodeficiencies, though individually rare, collectively affect 1 in 1,200 people. Beyond these conditions, iatrogenic immunosuppression — deliberately induced to prevent transplant rejection or treat autoimmunity — affects millions more. Every clinician must be able to recognise the patterns of infection that signal immune failure and understand the rationale for treatment.",
        bigPicture: "The immune system is a layered defence: physical barriers, innate immunity (rapid, non-specific), and adaptive immunity (slow, specific, memory-forming). Immunodeficiency at each layer produces a characteristic pattern of pathogen vulnerability. The nature of opportunistic infections is the clinician's guide to which layer has failed: recurrent bacterial infections suggest antibody deficiency; fungal and viral infections suggest T cell deficiency; pyogenic bacterial infections suggest complement or phagocyte deficiency.",
        priorKnowledge: [
            "Innate immunity: physical barriers, pattern recognition receptors, neutrophils, macrophages, NK cells",
            "Adaptive immunity: B cells, T cells, antibody classes, MHC molecules, antigen presentation",
            "Lymphocyte development: bone marrow (B cells), thymus (T cells), positive and negative selection",
            "Complement system: classical, lectin, and alternative pathways; membrane attack complex",
            "Cytokines: interleukins, interferons, TNF — signalling molecules that coordinate immune responses",
            "Basic virology: HIV structure, retroviral life cycle, reverse transcription"
        ],
        topicRoadmap: [
            "Normal immune system architecture: innate vs adaptive, cellular vs humoral",
            "Classification of immunodeficiency: primary vs secondary, humoral vs cellular vs combined vs phagocytic vs complement",
            "Major primary immunodeficiencies: XLA, CVID, DiGeorge syndrome, SCID, CGD, complement deficiencies",
            "HIV/AIDS: pathogenesis, CD4 decline, AIDS-defining conditions, antiretroviral therapy",
            "Other secondary immunodeficiencies: malnutrition, malignancy, immunosuppressive drugs",
            "Diagnosis: clinical patterns, laboratory investigations, flow cytometry, immunoglobulin levels",
            "Treatment: immunoglobulin replacement, haematopoietic stem cell transplant, gene therapy, antiretrovirals"
        ]
    },

    concepts: [
        "The immune system comprises innate and adaptive branches with distinct roles",
        "Primary immunodeficiencies arise from genetic defects in immune cell development or function",
        "Secondary immunodeficiencies result from extrinsic factors that damage an intact immune system",
        "HIV targets CD4+ T cells, progressively dismantling adaptive immunity",
        "Opportunistic infections define clinical immunodeficiency and guide diagnosis",
        "Treatment strategies target the underlying deficit: replacement, reconstitution, or pathogen suppression"
    ],

    theory: "Immunodeficiency represents failure at one or more levels of the host defence hierarchy. The clinical consequence — the pattern of opportunistic infection — reflects precisely which immune component has been lost. This principle, the 'infection pattern as diagnostic clue', is the conceptual core of clinical immunodeficiency.",

    keyDefinitions: {
        "Immunodeficiency":              "Failure of one or more components of the immune system to function adequately",
        "Primary Immunodeficiency (PID)": "Immunodeficiency caused by a genetic defect in immune system development or function; present from birth",
        "Secondary Immunodeficiency":    "Immunodeficiency acquired as a consequence of an extrinsic factor (infection, malnutrition, drugs, malignancy)",
        "Opportunistic Infection":       "Infection caused by a pathogen that does not normally cause disease in immunocompetent individuals",
        "B Cell (Humoral) Deficiency":   "Failure to produce adequate functional antibodies; leads to recurrent bacterial infections",
        "T Cell (Cellular) Deficiency":  "Failure of cell-mediated immunity; leads to susceptibility to viruses, fungi, and intracellular bacteria",
        "Combined Immunodeficiency":     "Deficiency affecting both T and B cell arms of adaptive immunity",
        "SCID":                          "Severe Combined Immunodeficiency — absence of both functional T and B cells; fatal without treatment",
        "XLA":                           "X-linked Agammaglobulinaemia — absence of mature B cells due to BTK mutation; no antibody production",
        "CVID":                          "Common Variable Immunodeficiency — low immunoglobulins with failure of B cell differentiation; most common symptomatic PID",
        "DiGeorge Syndrome":             "Thymic aplasia due to 22q11 deletion; absent or reduced T cells; combined features",
        "CGD":                           "Chronic Granulomatous Disease — defective NADPH oxidase in phagocytes; cannot kill catalase-positive bacteria and fungi",
        "HIV":                           "Human Immunodeficiency Virus — retrovirus that infects and destroys CD4+ T cells",
        "AIDS":                          "Acquired Immunodeficiency Syndrome — advanced HIV infection with CD4 count <200 cells/μL or AIDS-defining illness",
        "CD4+ T Cell":                   "Helper T lymphocyte expressing CD4 co-receptor; the primary target of HIV; coordinates adaptive immune responses",
        "Antiretroviral Therapy (ART)":  "Drug regimens that suppress HIV replication; prevent progression to AIDS",
        "HAART":                         "Highly Active Antiretroviral Therapy — combination of ≥3 antiretroviral drugs from ≥2 classes",
        "Immunoglobulin Replacement":    "Intravenous or subcutaneous IgG infusion for patients with antibody deficiencies",
        "HSCT":                          "Haematopoietic Stem Cell Transplantation — curative option for many PIDs including SCID",
        "Gene Therapy":                  "Correction of the causative genetic defect in patient's own haematopoietic stem cells ex vivo"
    },

    immuneSystemArchitecture: {
        innateImmunity: {
            components: [
                "Physical barriers: skin, mucous membranes, ciliary clearance",
                "Phagocytes: neutrophils (first responders), macrophages (tissue-resident)",
                "Natural killer cells: destroy virus-infected and tumour cells without prior sensitisation",
                "Complement system: cascade of proteins that opsonise, lyse, and recruit immune cells",
                "Pattern recognition receptors: Toll-like receptors detect pathogen-associated molecular patterns"
            ],
            responseTime: "Minutes to hours",
            specificity: "Broad — recognises conserved pathogen patterns",
            memory: "None"
        },
        adaptiveImmunity: {
            humoralArm: {
                cellType: "B lymphocytes → plasma cells",
                product: "Antibodies (IgM, IgG, IgA, IgE, IgD)",
                function: "Neutralise pathogens, opsonise for phagocytosis, activate complement",
                memoryCell: "Long-lived memory B cells",
                developmentSite: "Bone marrow"
            },
            cellularArm: {
                cellTypes: {
                    "CD4+ helper T cells": "Coordinate immune response; activate B cells, macrophages, CD8+ T cells via cytokines",
                    "CD8+ cytotoxic T cells": "Kill virus-infected and tumour cells directly via perforin/granzyme",
                    "Regulatory T cells": "Suppress excessive immune responses; maintain self-tolerance"
                },
                developmentSite: "Bone marrow (origin) → thymus (maturation)"
            },
            responseTime: "Days to weeks (primary); hours (secondary/memory)",
            specificity: "Exquisite — recognises specific antigens via clonal selection",
            memory: "Immunological memory — faster, stronger secondary response"
        }
    },

    classificationOfImmunodeficiency: {
        byOrigin: {
            primary: "Genetic; present from birth; often presents in infancy with recurrent severe infections",
            secondary: "Acquired; develops at any age; reversible if underlying cause is treated"
        },
        byComponentAffected: {
            humoral:   "B cell / antibody deficiency → recurrent encapsulated bacterial infections (Streptococcus, Haemophilus)",
            cellular:  "T cell deficiency → viral, fungal, intracellular bacterial infections; PCP, CMV, candidiasis",
            combined:  "Both T and B cell failure → broadest vulnerability; most severe",
            phagocytic: "Neutrophil or macrophage defect → catalase-positive bacterial and fungal infections (Aspergillus, Staphylococcus)",
            complement: "Complement component deficiency → encapsulated bacteria (especially Neisseria); SLE-like syndrome"
        }
    },

    primaryImmunodeficiencies: {
        XLA: {
            fullName: "X-linked Agammaglobulinaemia",
            geneticDefect: "Mutation in BTK (Bruton's tyrosine kinase) gene on X chromosome",
            mechanism: "BTK required for pre-B cell maturation; arrest at pro-B cell stage → no mature B cells → no antibodies",
            inheritance: "X-linked recessive (affects males; females are carriers)",
            clinicalFeatures: [
                "Recurrent sinopulmonary infections with encapsulated bacteria (Streptococcus pneumoniae, Haemophilus influenzae)",
                "Onset after 6 months (when maternal antibodies wane)",
                "Absent lymphoid tissue (no tonsillar tissue, no palpable lymph nodes)",
                "Severe enteroviral infections (paralytic polio risk — live vaccines contraindicated)",
                "No antibody response to vaccines"
            ],
            laboratoryFindings: "Absent B cells (flow cytometry), all immunoglobulin classes undetectable, normal T cell count",
            treatment: "Lifelong intravenous or subcutaneous immunoglobulin replacement (IVIg/SCIg)"
        },
        CVID: {
            fullName: "Common Variable Immunodeficiency",
            geneticDefect: "Heterogeneous — mutations in ICOS, TACI, BAFF-R, CD19, CD20, CD81 among others; many cases idiopathic",
            mechanism: "B cells present but fail to differentiate into antibody-secreting plasma cells; pan-hypogammaglobulinaemia",
            inheritance: "Variable; often sporadic",
            clinicalFeatures: [
                "Recurrent bacterial sinopulmonary infections",
                "Onset typically in second or third decade (unlike XLA)",
                "Autoimmune complications: haemolytic anaemia, thrombocytopenia",
                "Lymphoid hyperplasia and splenomegaly (paradoxically enlarged lymph nodes)",
                "Increased risk of lymphoma and gastric carcinoma",
                "Malabsorption and Giardia infection (IgA-dependent gut protection lost)"
            ],
            laboratoryFindings: "Low IgG, IgA, IgM; B cells present but non-functional; poor vaccine responses",
            treatment: "Immunoglobulin replacement; treat autoimmune complications"
        },
        DiGeorgeSyndrome: {
            fullName: "DiGeorge Syndrome (22q11.2 deletion syndrome)",
            geneticDefect: "Deletion of chromosome 22q11.2 → failure of third and fourth pharyngeal pouch development",
            mechanism: "Absent or hypoplastic thymus → T cell maturation arrested → T cell lymphopenia; also absent parathyroids",
            inheritance: "Usually de novo; autosomal dominant when inherited",
            clinicalFeatures: [
                "Cardiac defects (conotruncal abnormalities — tetralogy of Fallot, interrupted aortic arch)",
                "Hypocalcaemia and tetany (absent parathyroids → no PTH → low calcium)",
                "Characteristic facies: low-set ears, hypertelorism, micrognathia, cleft palate",
                "T cell lymphopenia → viral and fungal infections",
                "Partial DiGeorge: some T cells present; complete DiGeorge: no T cells (SCID phenotype)",
                "Learning difficulties and psychiatric disorders (schizophrenia risk elevated)"
            ],
            laboratoryFindings: "Low or absent T cells; low calcium; normal or low immunoglobulins (B cells present but T cell help absent)",
            treatment: "Thymus transplantation for complete DiGeorge; calcium supplementation; cardiac surgery"
        },
        SCID: {
            fullName: "Severe Combined Immunodeficiency",
            geneticDefect: "Multiple forms: ADA deficiency (autosomal recessive), γc chain mutation (X-linked SCID most common), RAG1/RAG2 mutations, JAK3 deficiency",
            mechanism: {
                "X-linked SCID (γc mutation)": "Common gamma chain shared by IL-2, IL-4, IL-7, IL-15, IL-21 receptors; absent signalling blocks T and NK cell development",
                "ADA-SCID": "Adenosine deaminase deficiency → toxic accumulation of dATP → lymphocyte apoptosis",
                "RAG-SCID": "Absent V(D)J recombination → no T or B cell receptor assembly"
            },
            clinicalFeatures: [
                "Presents in first months of life with failure to thrive, recurrent severe infections",
                "Susceptibility to ALL pathogen classes: bacteria, viruses, fungi, protozoa",
                "Opportunistic infections: PCP, CMV, candidiasis, RSV",
                "Absent lymphoid tissue; absent thymic shadow on chest X-ray",
                "Fatal without treatment — historically called 'bubble boy disease'",
                "Live vaccines (BCG, rotavirus) can cause fatal disseminated infection — absolutely contraindicated"
            ],
            laboratoryFindings: "Absent or very low T cells, B cells (most forms), NK cells; undetectable immunoglobulins; absent lymphocyte proliferation to mitogens",
            treatment: "HSCT (curative if matched donor); gene therapy (ADA-SCID: first successful gene therapy in humans); ADA enzyme replacement (PEG-ADA)"
        },
        CGD: {
            fullName: "Chronic Granulomatous Disease",
            geneticDefect: "Mutations in NADPH oxidase components: CYBB (most common, X-linked), NCF1, NCF2, CYBA",
            mechanism: "Phagocytes cannot generate reactive oxygen species (respiratory burst absent) → cannot kill catalase-positive organisms (which destroy their own H₂O₂)",
            inheritance: "X-linked (most common) or autosomal recessive",
            clinicalFeatures: [
                "Recurrent life-threatening infections with catalase-positive bacteria: Staphylococcus aureus, Burkholderia cepacia, Serratia marcescens",
                "Fungal infections: Aspergillus species (particularly dangerous — commonest cause of death)",
                "Granuloma formation: excessive inflammatory response attempting to contain organisms it cannot kill",
                "Lymphadenitis, liver abscesses, osteomyelitis",
                "Inflammatory bowel disease-like symptoms (granulomatous colitis)",
                "Onset in childhood; males more severely affected"
            ],
            laboratoryFindings: "Normal lymphocyte counts and immunoglobulins; abnormal dihydrorhodamine (DHR) flow cytometry test — gold standard (phagocytes fail to oxidise DHR to fluorescent rhodamine)",
            treatment: "Prophylactic antibiotics (trimethoprim-sulfamethoxazole) and antifungals (itraconazole); IFN-γ reduces infection frequency; HSCT (curative)"
        },
        complementDeficiencies: {
            earlyComponents: {
                deficiency: "C1q, C1r, C1s, C4, C2 deficiency",
                consequence: "Impaired classical pathway activation; failure to clear immune complexes",
                clinicalFeature: "SLE-like autoimmune disease (most common presentation of C1q deficiency)"
            },
            C3deficiency: {
                consequence: "Absent opsonisation and complement activation downstream",
                clinicalFeature: "Severe recurrent infections with all encapsulated bacteria; most severe complement deficiency"
            },
            terminalComponents: {
                deficiency: "C5–C9 deficiency (membrane attack complex components)",
                consequence: "Cannot form MAC; cannot lyse gram-negative bacteria",
                clinicalFeature: "Recurrent Neisseria meningitidis and Neisseria gonorrhoeae infections — the hallmark"
            },
            properdinAndMBL: {
                deficiency: "Properdin (alternative pathway stabiliser) or mannose-binding lectin (lectin pathway)",
                clinicalFeature: "Meningococcal disease; recurrent bacterial infections"
            }
        }
    },

    secondaryImmunodeficiency: {
        HIV_AIDS: {
            virus: "Human Immunodeficiency Virus (HIV-1, HIV-2) — lentivirus (retrovirus subfamily)",
            structure: "Enveloped virus; gp120 and gp41 envelope glycoproteins; gp120 binds CD4 and CCR5/CXCR4 co-receptors",
            lifecycle: [
                "Attachment: gp120 binds CD4 + co-receptor (CCR5 for M-tropic; CXCR4 for T-tropic strains)",
                "Fusion: gp41 mediates membrane fusion; viral core enters cytoplasm",
                "Reverse transcription: RNA genome → DNA (by reverse transcriptase; error-prone, generating diversity)",
                "Integration: viral DNA → host genome as provirus (by integrase); permanent",
                "Transcription and translation: host machinery produces viral proteins",
                "Assembly: Gag, Pol, Env proteins assemble at membrane",
                "Budding and maturation: protease cleaves polyproteins → infectious virus"
            ],
            pathogenesis: {
                acuteInfection: "Flu-like illness 2–4 weeks after infection; massive viral replication; CD4 count drops sharply then partially recovers",
                chronicInfection: "Years of clinical latency; ongoing viral replication and CD4 decline (~50–100 cells/μL/year untreated)",
                AIDSStage: "CD4 <200 cells/μL or AIDS-defining illness; immune system too depleted to prevent opportunistic infections"
            },
            cd4CountAndRisk: {
                ">500": "Normal immunity; at risk for typical infections only",
                "200–500": "Increased risk; bacterial infections (TB), herpes zoster, oral candidiasis begin",
                "100–200": "AIDS-defining threshold; PCP, toxoplasmosis risk",
                "50–100": "CMV retinitis, cryptococcal meningitis",
                "<50": "MAC (Mycobacterium avium complex), progressive multifocal leukoencephalopathy (PML)"
            },
            aidsDdefiningConditions: [
                "Pneumocystis jirovecii pneumonia (PCP)",
                "Cerebral toxoplasmosis",
                "Cryptococcal meningitis",
                "CMV retinitis",
                "Oesophageal candidiasis",
                "Kaposi's sarcoma (HHV-8 associated)",
                "Primary CNS lymphoma",
                "MAC disseminated infection",
                "HIV encephalopathy (AIDS dementia complex)",
                "Progressive multifocal leukoencephalopathy (JC virus)"
            ],
            monitoring: {
                CD4count: "Measures immune status; guides prophylaxis thresholds",
                viralLoad: "Measures HIV RNA copies/mL; guides ART efficacy; goal is undetectable (<50 copies/mL)"
            },
            antiretroviralClasses: {
                NRTI:  "Nucleoside/nucleotide reverse transcriptase inhibitors — tenofovir, emtricitabine, abacavir; competitive inhibitors of reverse transcriptase",
                NNRTI: "Non-nucleoside reverse transcriptase inhibitors — efavirenz, rilpivirine; allosteric inhibitors of reverse transcriptase",
                PI:    "Protease inhibitors — atazanavir, darunavir; prevent polyprotein cleavage → non-infectious virions",
                INSTI: "Integrase strand transfer inhibitors — dolutegravir, bictegravir; prevent proviral integration — now preferred first-line",
                CCR5:  "CCR5 antagonists — maraviroc; block viral co-receptor entry (M-tropic strains only)",
                FI:    "Fusion inhibitors — enfuvirtide; block gp41-mediated membrane fusion"
            },
            preventionAndUK: "U=U: Undetectable = Untransmittable — suppressed viral load prevents sexual transmission; PrEP (pre-exposure prophylaxis with tenofovir/emtricitabine) prevents acquisition"
        },

        malnutritionImmunodeficiency: {
            mechanism: "Protein-energy malnutrition depletes lymphocyte precursors; micronutrient deficiencies (zinc, vitamin A, vitamin D) impair specific immune functions",
            effects: [
                "Thymic atrophy → T cell lymphopenia",
                "Impaired neutrophil and macrophage function",
                "Reduced secretory IgA → mucosal barrier failure",
                "Vitamin A deficiency → impaired epithelial integrity and NK cell function",
                "Zinc deficiency → impaired T cell development and thymulin activity"
            ],
            clinicalContext: "Leading cause of immunodeficiency globally — more common than all PIDs and HIV combined; major contributor to child mortality in low-income countries"
        },

        iatrogenicImmunodeficiency: {
            corticosteroids: {
                mechanism: "Suppress NF-κB → reduce cytokine production; redistribute lymphocytes from circulation; impair neutrophil adhesion and migration",
                clinicalRisk: "Bacterial infections, reactivation of latent TB, fungal infections (Aspergillus, PCP) with prolonged high-dose use"
            },
            chemotherapy: {
                mechanism: "Cytotoxic agents kill rapidly dividing cells including bone marrow progenitors → neutropenia (nadir at 10–14 days) and lymphopenia",
                clinicalRisk: "Febrile neutropenia — medical emergency; bacterial and fungal sepsis"
            },
            biologicsAndImmunosuppressants: {
                antiTNF: "Infliximab, adalimumab — risk of TB reactivation, fungal infections; TB screening mandatory before use",
                calcineurinInhibitors: "Ciclosporin, tacrolimus — impair T cell activation via calcineurin-NFAT pathway; risk of viral infections (CMV, EBV) and lymphoma",
                antiCD20: "Rituximab — depletes all B cells for 6–12 months; risk of PML (JC virus reactivation) and hypogammaglobulinaemia"
            }
        },

        malignancyAssociated: {
            haematologicalMalignancies: "Chronic lymphocytic leukaemia: hypogammaglobulinaemia; Multiple myeloma: paraprotein does not protect, functional antibody low; lymphoma: T cell failure",
            splenectomy: "Spleen filters encapsulated bacteria; post-splenectomy risk of overwhelming post-splenectomy infection (OPSI) with Streptococcus pneumoniae, Haemophilus influenzae, Neisseria meningitidis — vaccinate and give lifelong prophylactic penicillin"
        }
    },

    diagnosisOfImmunodeficiency: {
        clinicalClues: {
            whenToSuspect: [
                "≥8 new ear infections per year",
                "≥2 serious sinus infections per year",
                "≥2 pneumonias per year",
                "Recurrent deep skin or organ abscesses",
                "Infections with unusual organisms (PCP, Aspergillus, Serratia, Nocardia)",
                "Family history of PID",
                "Failure to thrive in infancy with infections",
                "Persistent oral/cutaneous candidiasis beyond infancy"
            ],
            infectionPatternGuide: {
                encapsulatedBacteria: "Antibody deficiency (XLA, CVID) or complement deficiency or splenectomy",
                viralAndFungal:       "T cell deficiency (DiGeorge, HIV, SCID)",
                catalasePositiveBacteria: "Phagocyte defect (CGD)",
                Neisseria:            "Terminal complement deficiency (C5–C9)",
                allPathogens:         "SCID or advanced AIDS"
            }
        },
        laboratoryInvestigations: {
            firstLine: [
                "Full blood count with differential: lymphocyte and neutrophil counts",
                "Serum immunoglobulins: IgG, IgA, IgM, IgE",
                "Specific antibody levels: post-vaccine titres to tetanus, pneumococcus",
                "HIV serology: fourth-generation ELISA (p24 antigen + anti-HIV antibody)"
            ],
            secondLine: [
                "Lymphocyte subset analysis by flow cytometry: CD3+ (T cells), CD4+, CD8+, CD19+ (B cells), CD16+CD56+ (NK cells)",
                "T cell function: lymphocyte proliferation assay to mitogens (PHA) and antigens",
                "Complement: CH50 (classical pathway), AH50 (alternative pathway), C3, C4 levels",
                "Dihydrorhodamine (DHR) test: assesses neutrophil oxidative burst — gold standard for CGD"
            ],
            genetic: [
                "Gene panel sequencing for PIDs",
                "BTK gene sequencing for XLA",
                "22q11 FISH or chromosomal microarray for DiGeorge",
                "ADA enzyme activity for ADA-SCID"
            ],
            newbornScreening: "T cell receptor excision circles (TRECs) — detect SCID on newborn blood spot in countries with universal screening"
        }
    },

    treatmentPrinciples: {
        replacementStrategies: {
            immunoglobulinReplacement: "IVIg or SCIg for XLA, CVID, and antibody deficiency; provides IgG; dosing every 3–4 weeks (IVIg) or weekly (SCIg); does not provide IgA or IgM",
            enzymeReplacement: "PEG-ADA for ADA-SCID — pegylated ADA enzyme reduces toxic metabolite accumulation"
        },
        reconstitutionStrategies: {
            HSCT: "Allogeneic haematopoietic stem cell transplantation — curative for SCID, CGD, WAS (Wiskott-Aldrich syndrome); best outcomes in matched sibling donors; requires conditioning in most cases",
            thymusTransplantation: "For complete DiGeorge syndrome — cultured postnatal thymus tissue implanted into quadriceps muscle",
            geneTherapy: "Ex vivo correction of HSC defect using retroviral or lentiviral vector; successful for ADA-SCID, X-linked SCID, CGD, WAS; risk of insertional mutagenesis (earlier γ-retroviral vectors caused T-ALL)"
        },
        preventionStrategies: {
            prophylacticAntimicrobials: "Trimethoprim-sulfamethoxazole for PCP prophylaxis (CD4 <200); fluconazole for fungal prophylaxis; aciclovir for HSV/VZV",
            vaccinations: {
                indicated: "Killed/inactivated vaccines — pneumococcal, meningococcal, Hib, influenza (inactivated), HPV — safe in most immunodeficient patients",
                contraindicated: "Live attenuated vaccines — BCG, MMR, varicella, oral polio, rotavirus — contraindicated in severe immunodeficiency (risk of vaccine-strain infection)"
            },
            postSplenectomy: "Vaccinate against encapsulated organisms; lifelong prophylactic penicillin V; educate about OPSI risk"
        },
        antiretroviralTherapy: {
            goal: "Viral load undetectable (<50 copies/mL); CD4 recovery; prevent AIDS-defining illness",
            firstLine: "Preferred regimen: 2 NRTIs + 1 INSTI (e.g. tenofovir + emtricitabine + dolutegravir)",
            whenToStart: "All HIV-positive individuals regardless of CD4 count",
            drugResistance: "Resistance testing before starting ART; high-level resistance to multiple classes managed with salvage regimens"
        }
    },

    topicSummary: {
        coreInsights: [
            "Immunodeficiency is diagnosed by the pattern of opportunistic infections — the pathogen reveals which immune component has failed.",
            "Primary immunodeficiencies are genetic; secondary immunodeficiencies are acquired. Both present with recurrent, severe, or unusual infections.",
            "Antibody deficiency produces susceptibility to encapsulated bacteria; T cell deficiency produces susceptibility to viruses, fungi, and intracellular pathogens; combined deficiency produces vulnerability to all.",
            "HIV destroys CD4+ T helper cells — the conductor of adaptive immunity — progressively dismantling coordinated immune responses until AIDS-defining opportunistic infections emerge.",
            "The CD4 count is the clinical thermometer of HIV-related immunodeficiency; viral load is the measure of treatment efficacy.",
            "SCID is the most severe primary immunodeficiency — absence of T and B cells is fatal without reconstitution; HSCT or gene therapy are curative.",
            "ADA-SCID was the first human disease treated successfully by gene therapy, marking a pivotal moment in medicine.",
            "Iatrogenic immunodeficiency — from steroids, chemotherapy, biologics — is the most prevalent form of immunodeficiency in high-income countries."
        ],
        keyFacts: {
            XLA: "BTK mutation → no B cells → no antibodies → encapsulated bacterial infections after 6 months; treat with IgG replacement",
            CVID: "Most common symptomatic PID; B cells present but non-functional; low all immunoglobulin classes; onset in 2nd–3rd decade",
            DiGeorge: "22q11 deletion → no thymus → no T cells; also cardiac defects and hypocalcaemia; treat complete form with thymus transplant",
            SCID: "No T and B cells; all pathogens dangerous; live vaccines lethal; treat with HSCT or gene therapy",
            CGD: "NADPH oxidase defect → no respiratory burst → catalase-positive bacteria and Aspergillus; diagnose with DHR test",
            TerminalComplement: "C5–C9 deficiency → no MAC → Neisseria infections; also SLE-like disease with early component deficiency",
            HIV: "gp120 binds CD4+CCR5 → reverse transcription → integration → CD4 destruction; ART: 2 NRTI + INSTI; AIDS: CD4 <200 or AIDS-defining illness"
        },
        infectionPatternSummary: {
            "Encapsulated bacteria (Strep, H. influenzae)": "Antibody deficiency or complement deficiency or splenectomy",
            "Viruses + fungi + intracellular bacteria":       "T cell deficiency (HIV, DiGeorge, SCID)",
            "Catalase-positive bacteria + Aspergillus":       "CGD (phagocyte oxidase defect)",
            "Neisseria specifically":                         "Terminal complement deficiency (C5–C9)",
            "All pathogens":                                  "SCID or advanced AIDS (CD4 <50)"
        },
        commonMistakesToAvoid: [
            "XLA has NO B cells — CVID has B cells that do not function; distinguish these clearly on flow cytometry",
            "DiGeorge is a T cell deficiency, not a B cell deficiency — the lymphopenia is T cell lymphopenia",
            "CD4 count measures immune status; viral load measures treatment efficacy — do not conflate these two investigations",
            "HIV does not directly kill B cells — humoral immunity is impaired because T cell help is lost, not because B cells are absent",
            "Live vaccines are contraindicated in immunodeficiency — not just 'less effective'; they can cause fatal disseminated infection",
            "CGD neutrophils are normal in number — the defect is in killing ability, not recruitment; WBC can be normal or elevated",
            "AIDS is defined by CD4 <200 OR an AIDS-defining illness — a patient with CD4 of 350 but PCP still has AIDS"
        ],
        connections: [
            "Genetics: PIDs are Mendelian disorders — X-linked (XLA, CGD), autosomal recessive (ADA-SCID), autosomal dominant (some CVID)",
            "Cell biology: HIV exploits reverse transcriptase (error-prone DNA polymerase without proofreading) — generating the viral diversity that drives resistance",
            "Pharmacology: ART drug classes map to HIV lifecycle stages — each class targets a different enzyme or step",
            "Immunology: complement system links innate and adaptive immunity — C3b opsonisation bridges phagocytosis and antibody function",
            "Global health: malnutrition is the world's commonest immunodeficiency — vitamin A supplementation alone prevents millions of child deaths",
            "Oncology: immunosuppression drives lymphomagenesis — EBV-driven lymphoma in transplant recipients, Kaposi's sarcoma in AIDS"
        ],
        examReadinessChecklist: [
            "Can you classify any given immunodeficiency as primary vs secondary and by component affected?",
            "Can you name the genetic defect, mechanism, clinical features, and treatment for XLA, CVID, DiGeorge, SCID, and CGD?",
            "Can you describe the HIV lifecycle and identify which ART class targets each step?",
            "Can you interpret a CD4 count and predict which opportunistic infections are likely at each threshold?",
            "Can you construct the infection-pattern diagnostic table from memory?",
            "Can you explain why live vaccines are contraindicated and which vaccines are safe?",
            "Can you distinguish HSCT from gene therapy in terms of mechanism, indication, and risk?"
        ]
    }
},


const EndSection9 = "close"