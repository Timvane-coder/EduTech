


// ========================================================================
    // NEW: TRACK PROBLEMS USED IN EXAM PAPER
    // ========================================================================

    trackProblemsInExamPaper(examPaper) {
        const usedProblems = {
            topics: new Set(),
            problemsByTopic: {},
            problemDetails: []
        };

        examPaper.questionSections.forEach(section => {
            section.questions.forEach(question => {
                // Extract topic from question
                const topic = question.topic;
                const problemType = question.parameters?.type || question.type;
                
                usedProblems.topics.add(topic);
                
                if (!usedProblems.problemsByTopic[topic]) {
                    usedProblems.problemsByTopic[topic] = [];
                }
                
                usedProblems.problemsByTopic[topic].push({
                    questionNumber: question.number,
                    scenario: question.scenario,
                    problemText: question.problemText,
                    difficulty: question.difficulty,
                    marks: question.marks,
                    helper: question.helper,
                    subparts: question.subparts,
                    parameters: question.parameters,
                    type: problemType,
                    realWorldContext: question.realWorldContext
                });

                usedProblems.problemDetails.push({
                    questionNumber: question.number,
                    topic: topic,
                    type: problemType,
                    scenario: question.scenario,
                    difficulty: question.difficulty,
                    problem: question.problemText,
                    parameters: question.parameters,
                    helper: question.helper,
                    subparts: question.subparts,
                    marks: question.marks
                });
            });
        });

        return usedProblems;
    }

    // ========================================================================
    // NEW: GET SOLVER FUNCTION FOR PROBLEM TYPE
    // ========================================================================

    // ========================================================================
// CHEMISTRY INTEGRATION - Add to existing getSolverFunctionForProblemType
// ========================================================================

getSolverFunctionForProblemType(problemType) {
    // Remove any '_diagram' suffix if present
    const cleanType = problemType ? problemType.replace(/_diagram$/, '') : '';
    
    const solverMapping = {
        // ============== EXISTING BIOLOGY SOLVERS (keep all) ==============
        'cell_types': 'solveCellStructureProblems',
        'cell_structure': 'solveCellStructureProblems',
        'cell_membrane': 'solveCellMembraneProblems',
        'membrane_structure': 'solveCellMembraneProblems',
        'membrane_components': 'solveCellMembraneProblems',
        'phospholipid': 'solveCellMembraneProblems',
        'organelles': 'solveOrganellesProblems',
        'cell_division': 'solveCellDivisionProblems',
        'cell_cycle': 'solveCellDivisionProblems',
        'mitosis': 'solveMitosisMeiosisProblems',
        'meiosis': 'solveMitosisMeiosisProblems',
        'mitosis_meiosis': 'solveMitosisMeiosisProblems',
        'cell_transport': 'solveCellTransportProblems',
        'cellular_respiration': 'solveCellularRespirationProblems',
        'photosynthesis': 'solvePhotosynthesisProblems',
        'mendelian_genetics': 'solveMendelianGeneticsProblems',
        'mendelian': 'solveMendelianGeneticsProblems',
        'genetics_basics': 'solveMendelianGeneticsProblems',
        'genotype_phenotype': 'solveMendelianGeneticsProblems',
        'punnett_squares': 'solvePunnettSquaresProblems',
        'punnett': 'solvePunnettSquaresProblems',
        'monohybridCross': 'solvePunnettSquaresProblems',
        'dihybridCross': 'solvePunnettSquaresProblems',
        'law': 'solveMendelianGeneticsProblems',
        'segregation': 'solveMendelianGeneticsProblems',
        'independent_assortment': 'solveMendelianGeneticsProblems',
        'dna_structure': 'solveDNAStructureProblems',
        'dna': 'solveDNAStructureProblems',
        'structure': 'solveDNAStructureProblems',
        'dna_replication': 'solveDNAReplicationProblems',
        'replication': 'solveDNAReplicationProblems',
        'transcription': 'solveTranscriptionProblems',
        'translation': 'solveTranslationProblems',
        'mutations': 'solveMutationsProblems',
        'gene_expression': 'solveGeneExpressionProblems',
        'inheritance_patterns': 'solveInheritancePatternsProblems',
        'crossing_over': 'solveMitosisMeiosisProblems',
        'plant_structure': 'solvePlantStructureProblems',
        'plant_transport': 'solvePlantTransportProblems',
        'plant_reproduction': 'solvePlantReproductionProblems',
        'plant_hormones': 'solvePlantHormoneProblems',
        'tropisms': 'solveTropismsProblems',
        'plant_anatomy': 'solvePlantAnatomyProblems',
        'ecosystems': 'solveEcosystemsProblems',
        'food_webs': 'solveFoodWebsProblems',
        'energy_flow': 'solveEnergyFlowProblems',
        'nutrient_cycles': 'solveNutrientCyclesProblems',
        'population_dynamics': 'solvePopulationDynamicsProblems',
        'biomes': 'solveBiomesProblems',
        'symbiosis': 'solveSymbiosisProblems',
        'ecological_succession': 'solveEcologicalSuccessionProblems',
        'circulatory_system': 'solveCirculatorySystemProblems',
        'circulatory': 'solveCirculatorySystemProblems',
        'heart': 'solveCirculatorySystemProblems',
        'respiratory_system': 'solveRespiratorySystemProblems',
        'respiratory': 'solveRespiratorySystemProblems',
        'lungs': 'solveRespiratorySystemProblems',
        'digestive_system': 'solveDigestiveSystemProblems',
        'digestive': 'solveDigestiveSystemProblems',
        'digestion': 'solveDigestiveSystemProblems',
        'digestive_tract': 'solveDigestiveSystemProblems',
        'liver_pancreas': 'solveDigestiveSystemProblems',
        'nervous_system': 'solveNervousSystemProblems',
        'nervous': 'solveNervousSystemProblems',
        'brain': 'solveNervousSystemProblems',
        'endocrine_system': 'solveEndocrineSystemProblems',
        'endocrine': 'solveEndocrineSystemProblems',
        'hormones': 'solveEndocrineSystemProblems',
        'skeletal_system': 'solveSkeletalSystemProblems',
        'skeletal': 'solveSkeletalSystemProblems',
        'bones': 'solveSkeletalSystemProblems',
        'muscular_system': 'solveMuscularSystemProblems',
        'muscular': 'solveMuscularSystemProblems',
        'muscles': 'solveMuscularSystemProblems',
        'excretory_system': 'solveExcretorySystemProblems',
        'excretory': 'solveExcretorySystemProblems',
        'kidney': 'solveExcretorySystemProblems',
        'urinary': 'solveExcretorySystemProblems',
        'homeostasis': 'solveHomeostasisProblems',
        'thermoregulation': 'solveThermoregulationProblems',
        'osmoregulation': 'solveOsmoregulationProblems',
        'blood_glucose': 'solveBloodGlucoseProblems',
        'feedback_mechanisms': 'solveFeedbackMechanismsProblems',
        'feedback': 'solveFeedbackMechanismsProblems',
        'bacteria': 'solveBacteriaProblems',
        'viruses': 'solveVirusesProblems',
        'fungi': 'solveFungiProblems',
        'protists': 'solveProtistsProblems',
        'microbial_growth': 'solveMicrobialGrowthProblems',
        'immune_system': 'solveImmuneSystemProblems',
        'pathogens': 'solvePathogenProblems',
        'vaccines': 'solveVaccineProblems',
        'antibodies': 'solveAntibodyProblems',
        'diseases': 'solveDiseaseProblems',
        'immune_response': 'solveImmuneResponseProblems',
        'asexual_reproduction': 'solveAsexualReproductionProblems',
        'sexual_reproduction': 'solveSexualReproductionProblems',
        'embryonic_development': 'solveEmbryonicDevelopmentProblems',
        'human_reproduction': 'solveHumanReproductionProblems',
        'natural_selection': 'solveNaturalSelectionProblems',
        'evolution_mechanisms': 'solveEvolutionMechanismsProblems',
        'hardy_weinberg': 'solveHardyWeinbergProblems',
        'speciation': 'solveSpeciationProblems',
        'evidence_evolution': 'solveEvidenceEvolutionProblems',
        'adaptation': 'solveAdaptationProblems',
        'classification_systems': 'solveClassificationSystemProblems',
        'phylogeny': 'solvePhylogenyProblems',
        'domains_kingdoms': 'solveDomainsKingdomsProblems',
        'binomial_nomenclature': 'solveBinomialNomenclatureProblems',
        'atp': 'solveATPProblems',
        'glycolysis': 'solveGlycolysisProblems',
        'krebs_cycle': 'solveKrebsCycleProblems',
        'electron_transport': 'solveElectronTransportProblems',
        'fermentation': 'solveFermentationProblems',
        'light_reactions': 'solveLightReactionsProblems',
        'calvin_cycle': 'solveCalvinCycleProblems',
        'apoptosis': 'solveCellDivisionProblems',
        'programmed_death': 'solveCellDivisionProblems',

        // ============== CHEMISTRY SOLVERS (NEW) ==============
        
        // Stoichiometry
        'mole_calculations': 'solveMoleCalculationProblems',
        'moles': 'solveMoleCalculationProblems',
        'molar_mass': 'solveMoleCalculationProblems',
        'equation_balancing': 'solveEquationBalancingProblems',
        'balancing': 'solveEquationBalancingProblems',
        'mass_mass_stoichiometry': 'solveMassMassProblems',
        'mass_mass': 'solveMassMassProblems',
        'limiting_reagent': 'solveLimitingReagentProblems',
        'limiting_reactant': 'solveLimitingReagentProblems',
        'percent_yield': 'solvePercentYieldProblems',
        'yield': 'solvePercentYieldProblems',
        'gas_stoichiometry': 'solveGasStoichiometryProblems',
        'solution_stoichiometry': 'solveSolutionStoichiometryProblems',
        'molarity': 'solveSolutionStoichiometryProblems',
        'concentration': 'solveSolutionStoichiometryProblems',
        'thermochemical_stoichiometry': 'solveThermochemicalProblems',
        'enthalpy': 'solveThermochemicalProblems',
        'empirical_formula': 'solveEmpiricalFormulaProblems',
        'molecular_formula': 'solveEmpiricalFormulaProblems',

        // Organic Chemistry
        'alkanes': 'solveAlkanesRelatedProblems',
        'alkenes': 'solveAlkenesRelatedProblems',
        'alkynes': 'solveAlkynesRelatedProblems',
        'aromatic_compounds': 'solveAromaticRelatedProblems',
        'aromatic': 'solveAromaticRelatedProblems',
        'benzene': 'solveAromaticRelatedProblems',
        'functional_groups': 'solveFunctionalGroupsRelatedProblems',
        'isomerism': 'solveIsomerismRelatedProblems',
        'isomers': 'solveIsomerismRelatedProblems',
        'organic_reactions': 'solveOrganicReactionsRelatedProblems',
        'nomenclature': 'solveNomenclatureRelatedProblems',
        'iupac': 'solveNomenclatureRelatedProblems',
        'naming': 'solveNomenclatureRelatedProblems',
        'reaction_mechanisms': 'solveMechanismsRelatedProblems',
        'mechanisms': 'solveMechanismsRelatedProblems',
        'polymers': 'solvePolymersRelatedProblems',
        'polymerization': 'solvePolymersRelatedProblems',

        // Kinetics and Thermodynamics
        'reaction_kinetics': 'solveReactionKineticsProblems',
        'kinetics': 'solveReactionKineticsProblems',
        'rate_laws': 'solveRateLawsProblems',
        'reaction_rate': 'solveRateLawsProblems',
        'activation_energy': 'solveActivationEnergyProblems',
        'entropy': 'solveEntropyProblems',
        'gibbs_free_energy': 'solveGibbsEnergyProblems',
        'gibbs': 'solveGibbsEnergyProblems',
        'free_energy': 'solveGibbsEnergyProblems',
        'spontaneity': 'solveSpontaneityProblems',

        // States of Matter
        'states_of_matter': 'solveStatesOfMatterRelatedProblems',
        'phase_changes': 'solvePhaseChangesRelatedProblems',
        'phase_transitions': 'solvePhaseChangesRelatedProblems',
        'gas_laws': 'solveGasLawsRelatedProblems',
        'ideal_gas': 'solveGasLawsRelatedProblems',
        'kinetic_molecular_theory': 'solveKineticMolecularTheoryRelatedProblems',

        // Equilibrium
        'equilibrium_constants': 'solveEquilibriumConstantsProblems',
        'equilibrium': 'solveEquilibriumConstantsProblems',
        'kc': 'solveEquilibriumConstantsProblems',
        'kp': 'solveEquilibriumConstantsProblems',
        'le_chatelier': 'solveLeChatelierProblems',
        'le_chatelier_principle': 'solveLeChatelierProblems',
        'solubility_equilibria': 'solveSolubilityProblems',
        'solubility': 'solveSolubilityProblems',
        'ksp': 'solveSolubilityProblems',
        'complex_ions': 'solveComplexIonProblems',
        'coordination': 'solveComplexIonProblems',
        'gas_equilibrium': 'solveGasEquilibriumProblems',

        // Atomic Structure and Bonding
        'atomic_structure': 'solveAtomicStructureProblems',
        'atom': 'solveAtomicStructureProblems',
        'quantum_numbers': 'solveQuantumNumbersProblems',
        'electron_configuration': 'solveElectronConfigurationProblems',
        'periodic_trends': 'solvePeriodicTrendsProblems',
        'periodic_table': 'solvePeriodicTrendsProblems',
        'bonding': 'solveBondingProblems',
        'chemical_bonds': 'solveBondingProblems',
        'molecular_geometry': 'solveMolecularGeometryProblems',
        'geometry': 'solveMolecularGeometryProblems',
        'hybridization': 'solveHybridizationProblems',
        'lewis_structures': 'solveLewisStructuresProblems',
        'lewis_dot': 'solveLewisStructuresProblems',
        'vsepr_theory': 'solveVSEPRProblems',
        'vsepr': 'solveVSEPRProblems',
        'bond_polarity': 'solveBondPolarityProblems',
        'polarity': 'solveBondPolarityProblems',
        'intermolecular_forces': 'solveIntermolecularForcesProblems',
        'imf': 'solveIntermolecularForcesProblems',

        // Acid-Base Chemistry
        'acid_base_neutralization': 'solveAcidBaseRelatedProblems',
        'acid_base': 'solveAcidBaseRelatedProblems',
        'neutralization': 'solveAcidBaseRelatedProblems',
        'ph_calculations': 'solvepHCalculationsRelatedProblems',
        'ph': 'solvepHCalculationsRelatedProblems',
        'poh': 'solvepHCalculationsRelatedProblems',
        'buffers': 'solveBuffersRelatedProblems',
        'buffer_solution': 'solveBuffersRelatedProblems',
        'titrations': 'solveTitrationsRelatedProblems',
        'titration': 'solveTitrationsRelatedProblems',
        'polyprotic_acids': 'solvePolyproticAcidsRelatedProblems',

        // Redox and Electrochemistry
        'redox_stoichiometry': 'solveRedoxStoichiometryProblems',
        'redox': 'solveRedoxStoichiometryProblems',
        'oxidation_states': 'solveOxidationStatesProblems',
        'oxidation_number': 'solveOxidationStatesProblems',
        'half_reactions': 'solveHalfReactionsProblems',
        'half_reaction': 'solveHalfReactionsProblems',
        'electrochemistry': 'solveElectrochemistryProblems',
        'galvanic_cells': 'solveGalvaniCellProblems',
        'voltaic_cells': 'solveGalvaniCellProblems',
        'electrolysis': 'solveElectrolysisProblems',
        'electrolytic_cells': 'solveElectrolysisProblems',

        // ==================== PHYSICS SOLVERS (NEW) ====================
        
        // Mechanics
        'kinematics_1d': 'solveKinematics1DProblems',
        'kinematics_2d': 'solveKinematics2DProblems',
        'projectile_motion': 'solveProjectileMotionProblems',
        'projectile': 'solveProjectileMotionProblems',
        'newtons_laws': 'solveNewtonsLawsProblems',
        'newton': 'solveNewtonsLawsProblems',
        'force': 'solveNewtonsLawsProblems',
        'friction': 'solveFrictionProblems',
        'circular_motion': 'solveCircularMotionProblems',
        'circular': 'solveCircularMotionProblems',
        'centripetal': 'solveCircularMotionProblems',
        'work_energy': 'solveWorkEnergyProblems',
        'work': 'solveWorkEnergyProblems',
        'energy': 'solveWorkEnergyProblems',
        'kinetic_energy': 'solveWorkEnergyProblems',
        'potential_energy': 'solveWorkEnergyProblems',
        'momentum_collisions': 'solveMomentumCollisionsProblems',
        'momentum': 'solveMomentumCollisionsProblems',
        'collision': 'solveMomentumCollisionsProblems',
        'rotational_motion': 'solveRotationalMotionProblems',
        'rotation': 'solveRotationalMotionProblems',
        'angular': 'solveRotationalMotionProblems',
        'gravitation': 'solveGravitationProblems',
        'gravity': 'solveGravitationProblems',
        'orbital': 'solveGravitationProblems',

        // Waves and Sound
        'wave_properties': 'solveWavePropertiesRelatedProblems',
        'waves': 'solveWavePropertiesRelatedProblems',
        'wave': 'solveWavePropertiesRelatedProblems',
        'wave_interference': 'solveWaveInterferenceRelatedProblems',
        'interference': 'solveWaveInterferenceRelatedProblems',
        'sound_waves': 'solveSoundWavesRelatedProblems',
        'sound': 'solveSoundWavesRelatedProblems',
        'acoustic': 'solveSoundWavesRelatedProblems',
        'doppler_effect': 'solveDopplerEffectRelatedProblems',
        'doppler': 'solveDopplerEffectRelatedProblems',
        'standing_waves': 'solveStandingWavesRelatedProblems',
        'standing': 'solveStandingWavesRelatedProblems',
        'resonance': 'solveResonanceRelatedProblems',

        // Thermodynamics
        'temperature_heat': 'solveTemperatureHeatRelatedProblems',
        'temperature': 'solveTemperatureHeatRelatedProblems',
        'heat': 'solveTemperatureHeatRelatedProblems',
        'thermal_expansion': 'solveThermalExpansionRelatedProblems',
        'expansion': 'solveThermalExpansionRelatedProblems',
        'calorimetry': 'solveCalorimetryRelatedProblems',
        'specific_heat': 'solveCalorimetryRelatedProblems',
        'heat_transfer': 'solveHeatTransferRelatedProblems',
        'conduction': 'solveHeatTransferRelatedProblems',
        'convection': 'solveHeatTransferRelatedProblems',
        'radiation': 'solveHeatTransferRelatedProblems',
        'gas_laws_physics': 'solveGasLawsRelatedProblems',
        'gas_laws': 'solveGasLawsRelatedProblems',
        'ideal_gas': 'solveGasLawsRelatedProblems',
        'thermodynamic_processes': 'solveThermodynamicProcessesRelatedProblems',
        'isothermal': 'solveThermodynamicProcessesRelatedProblems',
        'adiabatic': 'solveThermodynamicProcessesRelatedProblems',
        'heat_engines': 'solveHeatEnginesRelatedProblems',
        'carnot': 'solveHeatEnginesRelatedProblems',
        'efficiency': 'solveHeatEnginesRelatedProblems',

        // Electricity and Magnetism
        'electrostatics': 'solveElectrostaticsProblems',
        'charge': 'solveElectrostaticsProblems',
        'coulomb': 'solveElectrostaticsProblems',
        'electric_fields': 'solveElectricFieldsProblems',
        'electric_field': 'solveElectricFieldsProblems',
        'field': 'solveElectricFieldsProblems',
        'electric_potential': 'solveElectricPotentialProblems',
        'potential': 'solveElectricPotentialProblems',
        'voltage': 'solveElectricPotentialProblems',
        'capacitance': 'solveCapacitanceProblems',
        'capacitor': 'solveCapacitanceProblems',
        'current_resistance': 'solveCurrentResistanceProblems',
        'current': 'solveCurrentResistanceProblems',
        'resistance': 'solveCurrentResistanceProblems',
        'ohm': 'solveCurrentResistanceProblems',
        'dc_circuits': 'solveDCCircuitsProblems',
        'circuit': 'solveDCCircuitsProblems',
        'series': 'solveDCCircuitsProblems',
        'parallel': 'solveDCCircuitsProblems',
        'magnetic_fields': 'solveMagneticFieldsProblems',
        'magnetic': 'solveMagneticFieldsProblems',
        'magnetism': 'solveMagneticFieldsProblems',
        'electromagnetic_induction': 'solveEMInductionProblems',
        'induction': 'solveEMInductionProblems',
        'faraday': 'solveEMInductionProblems',
        'ac_circuits': 'solveACCircuitsProblems',
        'ac': 'solveACCircuitsProblems',
        'alternating': 'solveACCircuitsProblems',

        // Optics
        'reflection': 'solveReflectionRelatedProblems',
        'mirror': 'solveReflectionRelatedProblems',
        'refraction': 'solveRefractionRelatedProblems',
        'snell': 'solveRefractionRelatedProblems',
        'lenses': 'solveLensesRelatedProblems',
        'lens': 'solveLensesRelatedProblems',
        'focal': 'solveLensesRelatedProblems',
        'mirrors': 'solveMirrorsRelatedProblems',
        'concave': 'solveMirrorsRelatedProblems',
        'convex': 'solveMirrorsRelatedProblems',
        'optical_instruments': 'solveOpticalInstrumentsRelatedProblems',
        'microscope': 'solveOpticalInstrumentsRelatedProblems',
        'telescope': 'solveOpticalInstrumentsRelatedProblems',
        'wave_optics': 'solveWaveOpticsRelatedProblems',
        'diffraction': 'solveDiffractionRelatedProblems',
        'grating': 'solveDiffractionRelatedProblems',

        // Modern Physics
        'photoelectric_effect': 'solvePhotoelectricRelatedProblems',
        'photoelectric': 'solvePhotoelectricRelatedProblems',
        'compton_scattering': 'solveComptonRelatedProblems',
        'compton': 'solveComptonRelatedProblems',
        'atomic_spectra': 'solveAtomicSpectraRelatedProblems',
        'spectra': 'solveAtomicSpectraRelatedProblems',
        'emission': 'solveAtomicSpectraRelatedProblems',
        'bohr_model': 'solveBohrModelRelatedProblems',
        'bohr': 'solveBohrModelRelatedProblems',
        'quantum_mechanics': 'solveQuantumMechanicsRelatedProblems',
        'quantum': 'solveQuantumMechanicsRelatedProblems',
        'wave_particle_duality': 'solveWaveParticleDualityRelatedProblems',
        'duality': 'solveWaveParticleDualityRelatedProblems',

        // Relativity
        'time_dilation': 'solveTimeDilationRelatedProblems',
        'dilation': 'solveTimeDilationRelatedProblems',
        'length_contraction': 'solveLengthContractionRelatedProblems',
        'contraction': 'solveLengthContractionRelatedProblems',
        'relativistic_momentum': 'solveRelativisticMomentumRelatedProblems',
        'relativistic': 'solveRelativisticMomentumRelatedProblems',
        'mass_energy_equivalence': 'solveMassEnergyEquivalenceRelatedProblems',
        'mass_energy': 'solveMassEnergyEquivalenceRelatedProblems',
        'lorentz_transformations': 'solveLorentzTransformationsRelatedProblems',
        'lorentz': 'solveLorentzTransformationsRelatedProblems',

        // Nuclear Physics
        'radioactive_decay_physics': 'solveRadioactiveDecayRelatedProblems',
        'radioactive': 'solveRadioactiveDecayRelatedProblems',
        'decay': 'solveRadioactiveDecayRelatedProblems',
        'nuclear_reactions_physics': 'solveNuclearReactionsRelatedProblems',
        'nuclear': 'solveNuclearReactionsRelatedProblems',
        'binding_energy': 'solveBindingEnergyRelatedProblems',
        'binding': 'solveBindingEnergyRelatedProblems',
        'fission_fusion': 'solveFissionFusionRelatedProblems',
        'fission': 'solveFissionFusionRelatedProblems',
        'fusion': 'solveFissionFusionRelatedProblems',
        'radiation_detection': 'solveRadiationDetectionRelatedProblems',
        'detection': 'solveRadiationDetectionRelatedProblems',


         // ==================== MATHEMATICS SOLVERS (NEW) ====================
        
        // Number Theory
        'number_properties': 'solveNumberPropertiesRelatedProblems',
        'prime_numbers': 'solvePrimeNumbersRelatedProblems',
        'prime': 'solvePrimeNumbersRelatedProblems',
        'hcf_lcm': 'solveHCFLCMRelatedProblems',
        'hcf': 'solveHCFLCMRelatedProblems',
        'lcm': 'solveHCFLCMRelatedProblems',
        'gcd': 'solveHCFLCMRelatedProblems',
        'modular_arithmetic': 'solveModularArithmeticRelatedProblems',
        'modular': 'solveModularArithmeticRelatedProblems',
        'divisibility': 'solveDivisibilityRelatedProblems',
        'rational_irrational': 'solveRationalIrrationalRelatedProblems',

        // Algebra
        'algebraic_expressions': 'solveAlgebraicRelatedProblems',
        'algebraic': 'solveAlgebraicRelatedProblems',
        'simplify': 'solveAlgebraicRelatedProblems',
        'linear_equations': 'solveLinearRelatedProblems',
        'linear': 'solveLinearRelatedProblems',
        'quadratic_equations': 'solveQuadraticRelatedProblems',
        'quadratic': 'solveQuadraticRelatedProblems',
        'simultaneous_equations': 'solveSimultaneousRelatedProblems',
        'simultaneous': 'solveSimultaneousRelatedProblems',
        'system': 'solveSimultaneousRelatedProblems',
        'polynomials': 'solvePolynomialRelatedProblems',
        'polynomial': 'solvePolynomialRelatedProblems',
        'rational_expressions': 'solveRationalRelatedProblems',
        'rational': 'solveRationalRelatedProblems',
        'exponential_logarithmic': 'solveExponentialRelatedProblems',
        'exponential': 'solveExponentialRelatedProblems',
        'logarithmic': 'solveExponentialRelatedProblems',
        'logarithm': 'solveExponentialRelatedProblems',

        // Functions & Graphs
        'function_basics': 'solveFunctionBasicsRelatedProblems',
        'function': 'solveFunctionBasicsRelatedProblems',
        'domain_range': 'solveDomainRangeRelatedProblems',
        'domain': 'solveDomainRangeRelatedProblems',
        'range': 'solveDomainRangeRelatedProblems',
        'function_types': 'solveFunctionTypesRelatedProblems',
        'transformations': 'solveTransformationsRelatedProblems',
        'transformation': 'solveTransformationsRelatedProblems',
        'inverse_functions': 'solveInverseFunctionsRelatedProblems',
        'inverse': 'solveInverseFunctionsRelatedProblems',
        'piecewise_functions': 'solvePiecewiseFunctionsRelatedProblems',
        'piecewise': 'solvePiecewiseFunctionsRelatedProblems',

        // Geometry
        'angles': 'solveAngleRelatedProblems',
        'angle': 'solveAngleRelatedProblems',
        'triangles': 'solveTriangleRelatedProblems',
        'triangle': 'solveTriangleRelatedProblems',
        'similarity_congruence': 'solveSimilarityCongruenceRelatedProblems',
        'similarity': 'solveSimilarityCongruenceRelatedProblems',
        'congruence': 'solveSimilarityCongruenceRelatedProblems',
        'quadrilaterals': 'solveQuadrilateralRelatedProblems',
        'quadrilateral': 'solveQuadrilateralRelatedProblems',
        'rectangle': 'solveQuadrilateralRelatedProblems',
        'square': 'solveQuadrilateralRelatedProblems',
        'parallelogram': 'solveQuadrilateralRelatedProblems',
        'rhombus': 'solveQuadrilateralRelatedProblems',
        'trapezoid': 'solveQuadrilateralRelatedProblems',
        'circles': 'solveCircleRelatedProblems',
        'circle': 'solveCircleRelatedProblems',
        'coordinate_geometry': 'solveCoordinateGeometryRelatedProblems',
        'coordinates': 'solveCoordinateGeometryRelatedProblems',
        'solid_geometry': 'solveSolidGeometryRelatedProblems',
        'solid': 'solveSolidGeometryRelatedProblems',
        'surface_area_volume': 'solveSurfaceAreaVolumeRelatedProblems',
        'surface_area': 'solveSurfaceAreaVolumeRelatedProblems',
        'volume': 'solveSurfaceAreaVolumeRelatedProblems',

        // Trigonometry
        'trig_ratios': 'solveTrigRatiosRelatedProblems',
        'trig': 'solveTrigRatiosRelatedProblems',
        'sine': 'solveTrigRatiosRelatedProblems',
        'cosine': 'solveTrigRatiosRelatedProblems',
        'tangent': 'solveTrigRatiosRelatedProblems',
        'special_angles': 'solveSpecialAnglesRelatedProblems',
        'trig_identities': 'solveTrigIdentitiesRelatedProblems',
        'identity': 'solveTrigIdentitiesRelatedProblems',
        'sine_cosine_rules': 'solveSineCosineRulesRelatedProblems',
        'sine_rule': 'solveSineCosineRulesRelatedProblems',
        'cosine_rule': 'solveSineCosineRulesRelatedProblems',
        'radian_measure': 'solveRadianMeasureRelatedProblems',
        'radian': 'solveRadianMeasureRelatedProblems',
        'trig_equations': 'solveTrigEquationsRelatedProblems',
        'trig_graphs': 'solveTrigGraphsRelatedProblems',

        // Vectors
        'vector_basics': 'solveVectorBasicsRelatedProblems',
        'vector': 'solveVectorBasicsRelatedProblems',
        'vector_operations': 'solveVectorOperationsRelatedProblems',
        'dot_product': 'solveDotProductRelatedProblems',
        'scalar_product': 'solveDotProductRelatedProblems',
        'cross_product': 'solveCrossProductRelatedProblems',
        'vector_product': 'solveCrossProductRelatedProblems',
        'vector_equations': 'solveVectorEquationsRelatedProblems',

        // Matrices
        'matrix_operations': 'solveMatrixOperationsProblems',
        'matrix': 'solveMatrixOperationsProblems',
        'determinants': 'solveDeterminantProblems',
        'determinant': 'solveDeterminantProblems',
        'inverse_matrices': 'solveInverseMatrixProblems',
        'matrix_transformations': 'solveMatrixTransformationProblems',

        // Sequences & Series
        'arithmetic_sequences': 'solveArithmeticRelatedProblems',
        'arithmetic': 'solveArithmeticRelatedProblems',
        'geometric_sequences': 'solveGeometricRelatedProblems',
        'geometric': 'solveGeometricRelatedProblems',
        'series_sums': 'solveSeriesSumsRelatedProblems',
        'series': 'solveSeriesSumsRelatedProblems',
        'binomial_theorem': 'solveBinomialRelatedProblems',
        'binomial': 'solveBinomialRelatedProblems'


    };

    const solver = solverMapping[cleanType];
    
    if (!solver) {
        console.warn(`⚠ No solver mapping found for type: "${problemType}" (cleaned: "${cleanType}")`);
    }
    
    return solver || null;
}
    // ========================================================================
    // NEW: SOLVE ONLY PROBLEMS USED IN EXAM
    // ========================================================================

    solveProblemsFromExam(usedProblems) {
        const solvedProblems = {};

        console.log('\n' + '='.repeat(80));
        console.log('SOLVING PROBLEMS FROM EXAMINATION PAPER');
        console.log('='.repeat(80) + '\n');

        usedProblems.problemDetails.forEach((problem, index) => {
            const solverFunctionName = this.getSolverFunctionForProblemType(problem.type);
            
            if (!solverFunctionName) {
                console.warn(`⚠ No solver found for problem type: ${problem.type}`);
                return;
            }

            console.log(`Solving Question ${problem.questionNumber}: ${problem.scenario}`);
            console.log(`  Topic: ${problem.topic}`);
            console.log(`  Type: ${problem.type}`);
            console.log(`  Solver: ${solverFunctionName}`);

            try {
                // Create workbook instance based on topic
                const workbook = this.createWorkbookForProblem(problem);

                if (!solvedProblems[problem.topic]) {
                    solvedProblems[problem.topic] = [];
                }

                solvedProblems[problem.topic].push({
                    questionNumber: problem.questionNumber,
                    problem: problem,
                    workbook: workbook,
                    solverFunction: solverFunctionName
                });

                console.log(`  ✓ Solved successfully\n`);

            } catch (error) {
                console.error(`  ❌ Error solving: ${error.message}\n`);
            }
        });

        return solvedProblems;
    }

