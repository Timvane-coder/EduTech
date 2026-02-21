Here are the matching helper methods for the NuclearPhysicsWorkbook class:
// ========================================
// NUCLEAR PHYSICS SPECIFIC HELPER METHODS
// ========================================

getRelevantNuclearDiagrams(topicType) {
    const diagramMap = {
        nuclear_structure: [
            "nuclear_notation_diagram",
            "isotope_comparison",
            "band_of_stability",
            "nuclear_forces_graph",
            "nuclear_radius_vs_mass",
            "nuclear_density_diagram",
            "rutherford_scattering_setup",
            "alpha_particle_tracks"
        ],
        radioactivity: [
            "alpha_decay_diagram",
            "beta_minus_decay",
            "beta_plus_decay",
            "gamma_emission",
            "decay_curve_exponential",
            "half_life_graph",
            "activity_vs_time",
            "penetration_comparison",
            "ionisation_tracks",
            "background_radiation_sources"
        ],
        nuclear_reactions: [
            "mass_defect_diagram",
            "binding_energy_curve",
            "binding_energy_per_nucleon",
            "einstein_mass_energy",
            "nuclear_equation_balancing",
            "q_value_diagram",
            "energy_level_transitions"
        ],
        fission_fusion: [
            "fission_process_diagram",
            "chain_reaction_branching",
            "nuclear_reactor_schematic",
            "pwr_reactor_diagram",
            "control_rod_mechanism",
            "fusion_coulomb_barrier",
            "dt_fusion_reaction",
            "tokamak_diagram",
            "stellar_fusion_cycle",
            "binding_energy_fission_fusion"
        ],
        particle_physics: [
            "standard_model_table",
            "quark_composition",
            "hadron_classification",
            "feynman_diagram_beta_decay",
            "pair_production_diagram",
            "annihilation_diagram",
            "exchange_particle_diagram",
            "particle_tracks_cloud_chamber",
            "baryon_meson_distinction"
        ]
    };

    return diagramMap[topicType] || [];
}

getTopicRelevance(topicType) {
    const relevance = {
        nuclear_structure: "Nuclear structure is fundamental to understanding radioactivity, nuclear energy, and the composition of matter",
        radioactivity: "Radioactive decay underpins nuclear medicine, dating techniques, and nuclear waste management",
        nuclear_reactions: "Understanding binding energy and mass-energy equivalence explains why nuclear reactions release enormous energy",
        fission_fusion: "Fission and fusion are the energy sources of nuclear power and stars; critical for energy policy and astrophysics",
        particle_physics: "Particle physics reveals the fundamental constituents of matter and the forces that govern the universe"
    };

    return relevance[topicType] || "Important nuclear physics concept";
}

suggestRelatedTopics() {
    if (!this.currentProblem) return [];

    const relatedTopicsMap = {
        nuclear_structure: ['radioactivity', 'nuclear_reactions'],
        radioactivity: ['nuclear_structure', 'particle_physics'],
        nuclear_reactions: ['nuclear_structure', 'fission_fusion'],
        fission_fusion: ['nuclear_reactions', 'particle_physics'],
        particle_physics: ['radioactivity', 'nuclear_reactions']
    };

    const relatedTypes = relatedTopicsMap[this.currentProblem.type] || [];

    return relatedTypes.map(type => ({
        type: type,
        name: this.nuclearTopics[type]?.name,
        description: this.nuclearTopics[type]?.description
    }));
}

generateNuclearDiagramData() {
    if (!this.currentContent) return;

    const { type } = this.currentProblem;

    this.diagramData = {
        type: type,
        diagrams: this.getRelevantNuclearDiagrams(type),
        placeholder: true,
        note: "Nuclear physics diagram generation will be implemented with actual nuclear diagrams"
    };
}

generateGlossary() {
    if (!this.currentContent) return {};

    const glossary = {};

    // Extract from definitions
    if (this.currentContent.definitions) {
        Object.entries(this.currentContent.definitions).forEach(([term, def]) => {
            if (typeof def === 'object' && def.definition) {
                glossary[term] = def.definition;
            } else if (typeof def === 'string') {
                glossary[term] = def;
            }
        });
    }

    // Extract from decay types
    if (this.currentContent.decayTypes) {
        Object.entries(this.currentContent.decayTypes).forEach(([term, decay]) => {
            if (decay.definition) {
                glossary[term] = decay.definition;
            } else if (decay.composition) {
                glossary[term] = decay.composition;
            }
        });
    }

    // Extract from fundamental particles
    if (this.currentContent.quarks || this.currentContent.leptons) {
        if (this.currentContent.quarks?.definition) {
            glossary['quarks'] = this.currentContent.quarks.definition;
        }
        if (this.currentContent.leptons?.definition) {
            glossary['leptons'] = this.currentContent.leptons.definition;
        }
    }

    return glossary;
}

generateNuclearAnalogy(concept) {
    const analogies = {
        // Nuclear Structure
        nucleus: "Like the tiny, dense pit of a peach compared to the whole fruit (the atom)",
        isotope: "Like different versions of the same car model — same make (element) but different weight",
        strong_force: "Like super-strong glue that only works when nucleons are very close together",
        nuclear_radius: "Like a marble in a football stadium — nucleus is tiny compared to atom",
        
        // Radioactivity
        alpha_decay: "Like the nucleus spitting out a helium nucleus to become more stable",
        beta_decay: "Like a neutron transforming into a proton (or vice versa) inside the nucleus",
        gamma_emission: "Like the nucleus releasing excess energy as a high-energy light photon",
        half_life: "Like a room of randomly popping balloons — half pop in each fixed time interval",
        decay_constant: "Like the probability that any one balloon will pop per second",
        
        // Nuclear Reactions
        mass_defect: "Like the 'missing mass' when nucleons bind together — converted to energy",
        binding_energy: "Like the energy you'd need to pull apart all the nucleons in a nucleus",
        e_equals_mc_squared: "Like converting a tiny amount of mass into a huge amount of energy",
        
        // Fission and Fusion
        fission: "Like splitting a large water droplet into two smaller ones — surface tension analogy",
        chain_reaction: "Like a room full of mousetraps with ping-pong balls — one triggers many",
        critical_mass: "Like the minimum number of mousetraps needed for a self-sustaining cascade",
        fusion: "Like forcing two magnets (positive nuclei) together against their repulsion",
        coulomb_barrier: "Like the hill you must climb to get two repelling nuclei close enough to fuse",
        
        // Particle Physics
        quarks: "Like the Lego bricks that build protons and neutrons",
        leptons: "Like fundamental particles that don't feel the strong force — electrons and neutrinos",
        hadrons: "Like composite particles made of quarks stuck together",
        antimatter: "Like the mirror image of normal matter — same mass, opposite charge",
        pair_production: "Like creating a matter-antimatter pair from pure energy",
        annihilation: "Like matter and antimatter destroying each other in a flash of gamma rays"
    };

    return analogies[concept] || "An important nuclear physics concept";
}

adaptNuclearLanguage(text, level) {
    if (!text) return '';

    const adaptations = {
        basic: {
            replacements: {
                'nuclide': 'type of nucleus',
                'nucleon': 'proton or neutron',
                'isotope': 'different version of same element',
                'decay constant': 'decay rate',
                'activity': 'number of decays per second',
                'binding energy per nucleon': 'stability of nucleus',
                'mass defect': 'missing mass',
                'fissile': 'able to undergo fission',
                'hadron': 'particle made of quarks',
                'lepton': 'fundamental particle like electron'
            }
        },
        intermediate: {
            replacements: {
                'nuclide': 'nucleus (with specific Z and A)',
                'decay constant': 'λ (decay probability per second)',
                'binding energy': 'E_B (energy to separate nucleus)',
                'fissile': 'fissile (can sustain chain reaction)'
            }
        },
        advanced: {
            replacements: {
                'nuclide': 'nuclide ᴬ_Z X',
                'decay constant': 'λ (s⁻¹) from N = N₀e^(−λt)',
                'binding energy': 'E_B = Δm·c² (MeV)',
                'mass defect': 'Δm = (Zm_p + Nm_n − M_nucleus)',
                'activity': 'A = λN (Bq)',
                'hadron': 'hadron (composite: baryon qqq or meson qq̄)'
            }
        }
    };

    const levelAdaptation = adaptations[level] || adaptations.intermediate;
    let adaptedText = text;

    for (const [term, replacement] of Object.entries(levelAdaptation.replacements)) {
        const regex = new RegExp(`\\b${term}\\b`, 'gi');
        adaptedText = adaptedText.replace(regex, replacement);
    }

    return adaptedText;
}

addNuclearConceptualConnections(content) {
    if (!this.includeConceptualConnections) return content;

    const connections = {
        nuclear_structure: "Nuclear structure explains isotopes, stability, and why nuclei exist. It connects to radioactivity (unstable nuclei decay) and binding energy (mass defect explains nuclear forces).",
        radioactivity: "Radioactive decay is a spontaneous nuclear reaction. It connects to nuclear structure (which nuclei are unstable), particle physics (beta decay involves quarks and weak force), and applications (medicine, dating).",
        nuclear_reactions: "Nuclear reactions conserve nucleon number and charge. Mass-energy equivalence (E = mc²) connects to binding energy. The binding energy curve explains both fission and fusion energy release.",
        fission_fusion: "Fission and fusion both move nuclei toward peak binding energy at Fe-56. Both demonstrate E = mc² on a large scale. Fission powers reactors; fusion powers stars and is the energy source of the future.",
        particle_physics: "Particle physics reveals that protons and neutrons are composite (made of quarks). Beta decay is a weak interaction at the quark level. Antimatter and pair production demonstrate E = mc²."
    };

    content.conceptualConnections = connections[this.currentProblem.type] || 
        "This topic connects to fundamental principles of nuclear physics and quantum mechanics";

    return content;
}

enrichWithNuclearExamples(content) {
    if (!this.includeExamples || content.workedExamples) return content;

    // Examples already included in handler methods
    return content;
}

addNuclearComparativeContext(content) {
    if (!this.includeComparisons) return content;

    const comparativeData = {
        nuclear_structure: {
            isotopes_vs_isobars: "Isotopes: same Z, different A (same element); Isobars: same A, different Z (different elements)",
            forces: "Strong force: short-range, attractive; Electrostatic: long-range, repulsive between protons"
        },
        radioactivity: {
            decay_types: "Alpha: helium nucleus, low penetration; Beta: electron/positron, medium; Gamma: photon, high penetration",
            activity_vs_number: "Activity A = λN decreases as N decreases; both follow exponential decay law"
        },
        nuclear_reactions: {
            fission_vs_fusion: "Fission: heavy → light (U-235); Fusion: light → heavier (D + T → He); both release energy",
            binding_energy: "Total E_B increases with A; E_B/A peaks at Fe-56 — use E_B/A to compare stability"
        },
        fission_fusion: {
            reactor_types: "PWR: water moderator and coolant; Fast reactor: no moderator, liquid sodium coolant",
            confinement: "Magnetic (tokamak): toroidal field confines plasma; Inertial (ICF): lasers compress pellet"
        },
        particle_physics: {
            quarks_vs_leptons: "Quarks: feel strong force, confined in hadrons; Leptons: no strong force, can be free (electron)",
            baryons_vs_mesons: "Baryons: 3 quarks (qqq), B = +1; Mesons: quark-antiquark (qq̄), B = 0"
        }
    };

    if (comparativeData[this.currentProblem.type]) {
        content.comparativeContext = comparativeData[this.currentProblem.type];
    }

    return content;
}

validateNuclearContent(content) {
    const validationResults = {
        isValid: true,
        warnings: [],
        suggestions: []
    };

    if (!content.topic) {
        validationResults.warnings.push("Missing topic title");
        validationResults.isValid = false;
    }

    if (!content.summary) {
        validationResults.suggestions.push("Consider adding a summary");
    }

    const hasSubstantiveContent = 
        content.definitions ||
        content.decayTypes ||
        content.workedExamples ||
        content.bindingEnergy ||
        content.quarks ||
        content.leptons;

    if (!hasSubstantiveContent) {
        validationResults.warnings.push("Limited substantive content");
    }

    if (!content.workedExamples) {
        validationResults.suggestions.push("Consider adding worked examples");
    }

    if (content.decayTypes && !content.decayTypes.alpha && !content.decayTypes.betaMinus) {
        validationResults.suggestions.push("Consider adding more decay type details");
    }

    return validationResults;
}

calculateNuclearContentCompleteness() {
    if (!this.currentContent) return 0;

    let score = 0;
    const maxScore = 10;

    if (this.currentContent.topic) score += 1;
    if (this.currentContent.summary) score += 1;
    if (this.currentContent.workedExamples) score += 2;
    if (this.currentContent.applications) score += 1;
    
    const hasMainContent = 
        this.currentContent.definitions ||
        this.currentContent.decayTypes ||
        this.currentContent.bindingEnergy ||
        this.currentContent.quarks ||
        this.currentContent.fission ||
        this.currentContent.fusion;
    if (hasMainContent) score += 3;

    if (this.currentContent.assessmentQuestions) score += 1;
    if (this.currentContent.relatedExperiments) score += 1;

    return Math.round((score / maxScore) * 100);
}

getNuclearContentQualityMetrics() {
    return {
        completeness: this.calculateNuclearContentCompleteness(),
        hasExamples: !!this.currentContent?.workedExamples,
        hasApplications: !!this.currentContent?.applications,
        hasRelatedExperiments: !!this.currentContent?.relatedExperiments,
        detailLevel: this.explanationLevel,
        includesVisualizations: this.includeVisualizations,
        includesMisconceptions: this.includeCommonMisconceptions,
        includesExperiments: this.includeExperiments,
        adaptiveDifficulty: this.adaptiveDifficulty,
        metacognitiveSupport: this.metacognitiveSupport
    };
}

generateNuclearContentSummary() {
    if (!this.currentContent) return null;

    const summary = {
        topic: this.currentContent.topic,
        category: this.currentContent.category,
        summary: this.currentContent.summary,
        keyPoints: [],
        coverage: {},
        difficulty: this.currentProblem?.difficulty
    };

    if (this.currentContent.definitions) {
        summary.keyPoints.push("Key definitions covered");
        summary.coverage.definitions = Object.keys(this.currentContent.definitions).length;
    }

    if (this.currentContent.workedExamples) {
        summary.keyPoints.push("Worked examples included");
        summary.coverage.examples = this.currentContent.workedExamples.length;
    }

    if (this.currentContent.decayTypes) {
        summary.keyPoints.push("Decay types explained in detail");
        summary.coverage.decayTypes = Object.keys(this.currentContent.decayTypes).length;
    }

    if (this.currentContent.applications || this.currentContent.realWorldApplications) {
        summary.keyPoints.push("Real-world applications discussed");
        summary.coverage.applications = true;
    }

    if (this.currentContent.relatedExperiments) {
        summary.keyPoints.push("Related experiments referenced");
        summary.coverage.experiments = this.currentContent.relatedExperiments.length;
    }

    return summary;
}

assessNuclearContentDifficulty() {
    if (!this.currentContent) return 'unknown';

    let difficultyScore = 0;

    const intermediateTopics = ['nuclear_structure', 'radioactivity'];
    const advancedTopics = ['nuclear_reactions', 'fission_fusion', 'particle_physics'];

    if (intermediateTopics.includes(this.currentProblem.type)) {
        difficultyScore += 2;
    } else if (advancedTopics.includes(this.currentProblem.type)) {
        difficultyScore += 3;
    }

    if (this.explanationLevel === 'advanced') difficultyScore += 1;
    if (this.explanationLevel === 'basic') difficultyScore -= 1;

    // Nuclear physics generally more advanced than mechanics
    if (difficultyScore <= 2) return 'intermediate';
    if (difficultyScore <= 4) return 'advanced';
    return 'very advanced';
}

generateNuclearLearningObjectives() {
    if (!this.currentProblem) return [];

    const objectivesDatabase = {
        nuclear_structure: [
            "Define atomic number Z, mass number A, and neutron number N",
            "Write nuclear notation and identify isotopes",
            "Calculate nuclear radius using r = r₀A^(1/3) and explain nuclear density",
            "Describe the properties of the strong nuclear force and explain nuclear stability"
        ],
        radioactivity: [
            "Describe the three main types of radioactive decay (α, β, γ) and write balanced equations",
            "State and apply the exponential decay law N = N₀e^(−λt)",
            "Define and calculate half-life and decay constant",
            "Compare penetrating power and ionising ability of different radiation types",
            "Calculate absorbed dose and equivalent dose in radiation safety contexts"
        ],
        nuclear_reactions: [
            "Apply conservation laws (A, Z, mass-energy, momentum) to nuclear reactions",
            "Calculate mass defect and binding energy using E = Δm·c²",
            "Interpret the binding energy per nucleon curve and explain nuclear stability",
            "Calculate Q-values for nuclear reactions and determine if energy is released or absorbed"
        ],
        fission_fusion: [
            "Explain the fission process and write balanced fission equations",
            "Describe the role of moderator, control rods, and coolant in a nuclear reactor",
            "Define critical mass and multiplication factor k",
            "Explain the conditions required for nuclear fusion and the Lawson criterion",
            "Compare fission and fusion as energy sources in terms of fuel, waste, and safety"
        ],
        particle_physics: [
            "Classify fundamental particles as quarks, leptons, or gauge bosons",
            "State the quark composition of protons, neutrons, and pions",
            "Apply conservation laws (charge, baryon number, lepton number) to particle reactions",
            "Explain pair production and annihilation using E = mc²",
            "Draw and interpret Feynman diagrams for simple particle interactions"
        ]
    };

    return objectivesDatabase[this.currentProblem.type] || [
        "Understand the key nuclear physics concepts",
        "Apply principles to problem solving",
        "Connect theory to real-world applications and experiments"
    ];
}

identifyNuclearPrerequisites() {
    if (!this.currentProblem) return [];

    const prerequisitesDatabase = {
        nuclear_structure: [
            "Atomic structure (electrons, protons, neutrons)",
            "Algebra (basic rearrangement, powers, cube roots)",
            "Scientific notation and significant figures"
        ],
        radioactivity: [
            "Nuclear structure and isotope notation",
            "Exponential functions and natural logarithms",
            "Algebra (rearranging equations)",
            "Understanding of probability and randomness"
        ],
        nuclear_reactions: [
            "Nuclear structure (Z, A, N)",
            "Conservation laws in physics",
            "E = mc² and units conversion (u to MeV/c²)",
            "Algebra and equation balancing"
        ],
        fission_fusion: [
            "Nuclear reactions and binding energy",
            "Exponential growth (chain reactions)",
            "Energy conservation",
            "Understanding of E = mc²"
        ],
        particle_physics: [
            "Nuclear structure and radioactivity (especially beta decay)",
            "Conservation laws",
            "Quarks and fundamental particles",
            "E = mc² and pair production/annihilation concepts"
        ]
    };

    return prerequisitesDatabase[this.currentProblem.type] || [
        "Basic atomic structure",
        "Algebra and scientific notation",
        "Understanding of physical quantities and units"
    ];
}

generateNuclearStudyTips() {
    if (!this.currentProblem) return [];

    const studyTipsDatabase = {
        nuclear_structure: [
            "Always write nuclear notation as ᴬ_Z X with A on top, Z on bottom",
            "Remember: N = A − Z (neutrons = mass number minus atomic number)",
            "Use periodic table to check Z values match element symbols",
            "For nuclear radius: r ∝ A^(1/3), NOT r ∝ A (because volume ∝ A)"
        ],
        radioactivity: [
            "For alpha decay: A decreases by 4, Z decreases by 2",
            "For beta-minus: A unchanged, Z increases by 1 (neutron → proton)",
            "Always subtract background radiation in experiments before applying decay law",
            "For half-life problems: use t½ = ln2/λ = 0.693/λ",
            "To find λ from graph: plot ln(A) vs t; gradient = −λ"
        ],
        nuclear_reactions: [
            "ALWAYS check both A and Z balance on each side of equation",
            "Use atomic masses (not nuclear masses) with M(¹H) for binding energy",
            "1 u = 931.5 MeV/c² is the key conversion for E = mc² calculations",
            "Binding energy per nucleon (E_B/A) peaks at Fe-56 — memorise this",
            "Q > 0: energy released; Q < 0: energy absorbed (endothermic)"
        ],
        fission_fusion: [
            "Fission splits heavy nuclei (U-235); fusion combines light nuclei (D + T)",
            "Both processes move toward Fe-56 on binding energy curve → release energy",
            "k = 1: critical (reactor); k > 1: supercritical (bomb); k < 1: dies out",
            "Fusion needs extreme temperature (~10⁸ K) to overcome Coulomb repulsion",
            "Remember typical energy: fission ~200 MeV; D-T fusion 17.6 MeV per reaction"
        ],
        particle_physics: [
            "Quarks: confined in hadrons; charges +2/3 or −1/3",
            "Baryons: 3 quarks (qqq), B = +1; Mesons: quark-antiquark (qq̄), B = 0",
            "Check ALL conservation laws: Q, B, Lₑ, Lᵤ, Lτ for every reaction",
            "For pair production: minimum photon energy = 2m₀c²",
            "For annihilation: e⁺ + e⁻ → 2γ (TWO photons to conserve momentum)"
        ]
    };

    return studyTipsDatabase[this.currentProblem.type] || [
        "Practice writing and balancing nuclear equations regularly",
        "Always check units and conservation laws",
        "Show all working clearly with symbols before numbers",
        "Check answers for physical reasonableness"
    ];
}

generateNuclearProcessTimeline(processName) {
    const timelines = {
        'Radioactive Decay Problem Solving': [
            { step: '1. Identify', action: 'Identify N₀ or A₀, t½ (or λ), and what to find' },
            { step: '2. Formula selection', action: 'Choose N = N₀e^(−λt) or A = A₀e^(−λt) or half-life version' },
            { step: '3. Convert if needed', action: 'Convert t½ ↔ λ using λ = 0.693/t½' },
            { step: '4. Substitute', action: 'Insert values with units' },
            { step: '5. Solve', action: 'Calculate using calculator (ln and e^x functions)' },
            { step: '6. Check', action: 'Verify units; check if answer makes physical sense (e.g., N < N₀)' }
        ],
        'Binding Energy Calculation': [
            { step: '1. Identify Z, N, A', action: 'From notation ᴬ_Z X, find Z (protons), N = A − Z (neutrons)' },
            { step: '2. Find masses', action: 'Look up M(¹H), mₙ, M(atom) from data table' },
            { step: '3. Calculate Msep', action: 'Msep = Z × M(¹H) + N × mₙ (in atomic mass units u)' },
            { step: '4. Mass defect', action: 'Δm = Msep − M(atom)' },
            { step: '5. Binding energy', action: 'E_B = Δm × 931.5 MeV' },
            { step: '6. Per nucleon', action: 'E_B/A = E_B / A (MeV/nucleon)' }
        ],
        'Balancing Nuclear Equations': [
            { step: '1. Write known', action: 'Write all particles with A and Z values' },
            { step: '2. Sum A (left)', action: 'Add all A values on reactant side' },
            { step: '3. Sum A (right)', action: 'Add all A values on product side (including unknown)' },
            { step: '4. Solve for A', action: 'Set sums equal; solve for unknown A' },
            { step: '5. Repeat for Z', action: 'Repeat steps 2-4 for Z values' },
            { step: '6. Identify element', action: 'Use Z to find element from periodic table; write ᴬ_Z X' },
            { step: '7. Verify', action: 'Check both A and Z balance exactly' }
        ],
        'Conservation Law Check (Particle Physics)': [
            { step: '1. List all particles', action: 'Write reactants and products clearly' },
            { step: '2. Check charge Q', action: 'Sum charges on each side; must be equal' },
            { step: '3. Check baryon number B', action: 'B = +1 for baryons, −1 for antibaryons, 0 for mesons and leptons' },
            { step: '4. Check lepton numbers', action: 'Check Lₑ, Lᵤ, Lτ separately for each family' },
            { step: '5. Check strangeness', action: '(For strong/EM interactions only); S conserved' },
            { step: '6. Verdict', action: 'If ANY law violated → reaction FORBIDDEN; if all conserved → ALLOWED' }
        ]
    };

    return timelines[processName] || [];
}

generateNuclearContentHierarchy() {
    if (!this.currentContent) return null;

    const hierarchy = {
        root: this.currentContent.topic,
        children: []
    };

    if (this.currentContent.definitions) {
        hierarchy.children.push({
            name: 'Definitions and Key Concepts',
            type: 'section',
            count: Object.keys(this.currentContent.definitions).length
        });
    }

    if (this.currentContent.decayTypes) {
        hierarchy.children.push({
            name: 'Types of Radioactive Decay',
            type: 'section',
            count: Object.keys(this.currentContent.decayTypes).length
        });
    }

    if (this.currentContent.decayLaw || this.currentContent.bindingEnergy || this.currentContent.conservationLaws) {
        hierarchy.children.push({
            name: 'Core Principles and Laws',
            type: 'section'
        });
    }

    if (this.currentContent.workedExamples) {
        hierarchy.children.push({
            name: 'Worked Examples',
            type: 'section',
            count: this.currentContent.workedExamples.length
        });
    }

    if (this.currentContent.applications || this.currentContent.realWorldApplications) {
        hierarchy.children.push({
            name: 'Applications and Real-World Contexts',
            type: 'section'
        });
    }

    if (this.currentContent.relatedExperiments) {
        hierarchy.children.push({
            name: 'Related Experiments',
            type: 'section',
            count: this.currentContent.relatedExperiments.length
        });
    }

    if (this.currentContent.assessmentQuestions) {
        hierarchy.children.push({
            name: 'Assessment Questions',
            type: 'section'
        });
    }

    return hierarchy;
}

generateSafetyGuidelines(topicType) {
    const safetyGuidelines = {
        nuclear_structure: [
            "When studying nuclear structure, always handle sealed radioactive sources with tongs",
            "Never attempt to open or damage a sealed source",
            "Follow school/institution radiation protection policy at all times"
        ],
        radioactivity: [
            "CRITICAL: Use only sealed sources; never open source containers",
            "Handle all radioactive sources with long forceps/tongs",
            "Minimise time of exposure; maximise distance from source",
            "Store sources in lead-lined containers when not in use",
            "Never point sources at people",
            "Wash hands thoroughly after handling sources",
            "Follow ALARA principle: As Low As Reasonably Achievable",
            "Monitor exposure with dosimeter badges if available",
            "Report any damaged sources immediately to radiation safety officer"
        ],
        nuclear_reactions: [
            "When performing calculations involving nuclear reactions, be aware of the enormous energy scales",
            "Understand radiation safety principles even for theoretical studies",
            "In experimental contexts, follow radiation protection guidelines"
        ],
        fission_fusion: [
            "Study of fission and fusion is theoretical at school level",
            "Any experimental work with neutron sources requires specialist facilities and licensing",
            "Never attempt to replicate fission experiments outside certified facilities"
        ],
        particle_physics: [
            "Cloud chamber experiments: handle dry ice with insulated gloves (cryogenic burns)",
            "Isopropanol/methanol vapours are flammable — no naked flames",
            "Ensure adequate ventilation when using alcohol vapours",
            "Sealed radioactive sources for cloud chamber: follow radioactivity safety guidelines above"
        ]
    };

    return safetyGuidelines[topicType] || [
        "Always follow laboratory safety guidelines",
        "Handle radioactive materials only under qualified supervision",
        "Follow institution radiation protection policy"
    ];
}

formatKey(key) {
    return key
        .replace(/_/g, ' ')
        .replace(/([A-Z])/g, ' $1')
        .trim()
        .replace(/\b\w/g, c => c.toUpperCase());
}

generateNuclearPhysicsTimeline() {
    return [
        { year: 1896, event: "Henri Becquerel discovers radioactivity", significance: "First observation of nuclear radiation" },
        { year: 1898, event: "Marie and Pierre Curie isolate polonium and radium", significance: "Identified new radioactive elements" },
        { year: 1899, event: "Rutherford identifies alpha and beta radiation", significance: "Classified radiation types" },
        { year: 1900, event: "Paul Villard discovers gamma rays", significance: "Identified third type of radiation" },
        { year: 1902, event: "Rutherford and Soddy discover exponential decay law", significance: "Quantitative law of radioactivity" },
        { year: 1909, event: "Geiger-Marsden alpha scattering experiment", significance: "Evidence for atomic nucleus" },
        { year: 1911, event: "Rutherford proposes nuclear model of atom", significance: "Established nuclear physics" },
        { year: 1919, event: "Rutherford achieves first artificial transmutation", significance: "First induced nuclear reaction" },
        { year: 1932, event: "Chadwick discovers the neutron", significance: "Completed understanding of nuclear composition" },
        { year: 1932, event: "Anderson discovers the positron", significance: "First antimatter particle" },
        { year: 1938, event: "Hahn and Strassmann discover nuclear fission", significance: "Opened path to nuclear energy and weapons" },
        { year: 1942, event: "Fermi achieves first controlled chain reaction", significance: "Chicago Pile-1; dawn of nuclear age" },
        { year: 1945, event: "First nuclear weapons used", significance: "Trinity test; Hiroshima and Nagasaki" },
        { year: 1951, event: "First electricity from nuclear power", significance: "EBR-I reactor, Idaho, USA" },
        { year: 1956, event: "First commercial nuclear power station", significance: "Calder Hall, UK" },
        { year: 1964, event: "Gell-Mann and Zweig propose quark model", significance: "Fundamental constituents of hadrons" },
        { year: 1983, event: "W and Z bosons discovered at CERN", significance: "Confirmed electroweak theory" },
        { year: 1995, event: "Top quark discovered at Fermilab", significance: "Completed quark family" },
        { year: 2012, event: "Higgs boson discovered at CERN", significance: "Completed Standard Model" },
        { year: 2022, event: "NIF achieves fusion ignition", significance: "First net energy gain from fusion" }
    ];
}

generateHistoricalContext(topicType) {
    const contexts = {
        nuclear_structure: "The discovery of the nuclear atom by Rutherford (1911) revolutionised physics and chemistry. The Geiger-Marsden experiment showed atoms are mostly empty space with a tiny, dense, positive nucleus.",
        radioactivity: "Radioactivity was discovered by chance by Becquerel in 1896. The Curies' isolation of radium and Rutherford's characterisation of decay types laid the foundation for nuclear physics and medicine.",
        nuclear_reactions: "Einstein's E = mc² (1905) predicted mass-energy equivalence. Aston's precise mass measurements (1920s) confirmed that binding energy could be calculated from mass defects.",
        fission_fusion: "Fission was discovered in 1938 by Hahn and Strassmann. Fermi achieved the first controlled chain reaction in 1942. Fusion has been understood since the 1920s–30s but remains experimentally challenging.",
        particle_physics: "The quark model (1964) explained hadron structure. The Standard Model was developed through the 1960s–70s and confirmed by discovery of W, Z (1983), top quark (1995), and Higgs boson (2012)."
    };

    return contexts[topicType] || "This topic has rich historical development in 20th century physics.";
}
