import readline from 'readline';
import * as docx from "docx";
import PDFDocument from 'pdfkit';

import fs from 'fs';



class ChemistryExamPaperGenerator {
    constructor() {
        this.initializeRelatedProblemGenerators();
        this.initializeExamSettings();
    }




// ========================================================================
    // PROBLEM GENERATOR INTEGRATION (From ChemistryProblemSolver)
    // ========================================================================
initializeRelatedProblemGenerators() {
    this.relatedProblemGenerators = {
        // Stoichiometry Generators
        mole_calculations: this.generateRelatedMoleCalculations.bind(this),
        equation_balancing: this.generateRelatedEquationBalancing.bind(this),
        mass_mass_stoichiometry: this.generateRelatedMassMassStoichiometry.bind(this),
        limiting_reagent: this.generateRelatedLimitingReagent.bind(this),
        percent_yield: this.generateRelatedPercentYield.bind(this),
        gas_stoichiometry: this.generateRelatedGasStoichiometry.bind(this),
        solution_stoichiometry: this.generateRelatedSolutionStoichiometry.bind(this),
        thermochemical_stoichiometry: this.generateRelatedThermochemical.bind(this),
        empirical_formula: this.generateRelatedEmpiricalFormula.bind(this),

        // Organic Chemistry Generators
        alkanes: this.generateRelatedAlkanes.bind(this),
        alkenes: this.generateRelatedAlkenes.bind(this),
        alkynes: this.generateRelatedAlkynes.bind(this),
        aromatic_compounds: this.generateRelatedAromatic.bind(this),
        functional_groups: this.generateRelatedFunctionalGroups.bind(this),
        isomerism: this.generateRelatedIsomerism.bind(this),
        organic_reactions: this.generateRelatedOrganicReactions.bind(this),
        nomenclature: this.generateRelatedNomenclature.bind(this),
        reaction_mechanisms: this.generateRelatedMechanisms.bind(this),
        polymers: this.generateRelatedPolymers.bind(this),

        // Redox Chemistry Generators
        redox_stoichiometry: this.generateRelatedRedoxStoichiometry.bind(this),
        oxidation_states: this.generateRelatedOxidationStates.bind(this),
        half_reactions: this.generateRelatedHalfReactions.bind(this),
        electrochemistry: this.generateRelatedElectrochemistry.bind(this),
        galvanic_cells: this.generateRelatedGalvaniCells.bind(this),
        electrolysis: this.generateRelatedElectrolysis.bind(this),

        // Acid-Base Chemistry Generators
        acid_base_neutralization: this.generateRelatedAcidBase.bind(this),
        ph_calculations: this.generateRelatedpHCalculations.bind(this),
        buffers: this.generateRelatedBuffers.bind(this),
        titrations: this.generateRelatedTitrations.bind(this),
        polyprotic_acids: this.generateRelatedPolyproticAcids.bind(this),

        // Equilibrium Chemistry Generators
        equilibrium_constants: this.generateRelatedEquilibriumConstants.bind(this),
        le_chatelier: this.generateRelatedLeChatelir.bind(this),
        solubility_equilibria: this.generateRelatedSolubilityEquilibria.bind(this),
        complex_ions: this.generateRelatedComplexIons.bind(this),
        gas_equilibrium: this.generateRelatedGasEquilibrium.bind(this),

        // Kinetics & Thermodynamics Generators
        reaction_kinetics: this.generateRelatedReactionKinetics.bind(this),
        rate_laws: this.generateRelatedRateLaws.bind(this),
        activation_energy: this.generateRelatedActivationEnergy.bind(this),
        entropy: this.generateRelatedEntropy.bind(this),
        gibbs_free_energy: this.generateRelatedGibbsEnergy.bind(this),
        spontaneity: this.generateRelatedSpontaneity.bind(this),

        // Atomic Structure Generators
        atomic_structure: this.generateRelatedAtomicStructure.bind(this),
        quantum_numbers: this.generateRelatedQuantumNumbers.bind(this),
        electron_configuration: this.generateRelatedElectronConfiguration.bind(this),
        periodic_trends: this.generateRelatedPeriodicTrends.bind(this),
        bonding: this.generateRelatedBonding.bind(this),
        molecular_geometry: this.generateRelatedMolecularGeometry.bind(this),
        hybridization: this.generateRelatedHybridization.bind(this),

        // NEW: Chemical Bonding & Lewis Structures
        lewis_structures: this.generateRelatedLewisStructures.bind(this),
        vsepr_theory: this.generateRelatedVSEPR.bind(this),
        bond_polarity: this.generateRelatedBondPolarity.bind(this),
        intermolecular_forces: this.generateRelatedIntermolecularForces.bind(this),

        // NEW: States of Matter & Particle Theory
        states_of_matter: this.generateRelatedStatesOfMatter.bind(this),
        phase_changes: this.generateRelatedPhaseChanges.bind(this),
        gas_laws: this.generateRelatedGasLaws.bind(this),
        kinetic_molecular_theory: this.generateRelatedKineticMolecularTheory.bind(this),

        // NEW: Nuclear Chemistry
        radioactive_decay: this.generateRelatedRadioactiveDecay.bind(this),
        nuclear_equations: this.generateRelatedNuclearEquations.bind(this),
        half_life: this.generateRelatedHalfLife.bind(this),
        nuclear_reactions: this.generateRelatedNuclearReactions.bind(this),

        // NEW: Laboratory Chemistry
        lab_safety: this.generateRelatedLabSafety.bind(this),
        lab_apparatus: this.generateRelatedLabApparatus.bind(this),
        lab_techniques: this.generateRelatedLabTechniques.bind(this),
        experimental_design: this.generateRelatedExperimentalDesign.bind(this),


        
// ==================== PHYSICS GENERATORS ====================

// Mechanics Generators
kinematics_1d: this.generateRelatedKinematics1D.bind(this),
kinematics_2d: this.generateRelatedKinematics2D.bind(this),
projectile_motion: this.generateRelatedProjectileMotion.bind(this),
newtons_laws: this.generateRelatedNewtonsLaws.bind(this),
friction: this.generateRelatedFriction.bind(this),
circular_motion: this.generateRelatedCircularMotion.bind(this),
work_energy: this.generateRelatedWorkEnergy.bind(this),
momentum_collisions: this.generateRelatedMomentumCollisions.bind(this),
rotational_motion: this.generateRelatedRotationalMotion.bind(this),
gravitation: this.generateRelatedGravitation.bind(this),

// Waves and Sound Generators
wave_properties: this.generateRelatedWaveProperties.bind(this),
wave_interference: this.generateRelatedWaveInterference.bind(this),
sound_waves: this.generateRelatedSoundWaves.bind(this),
doppler_effect: this.generateRelatedDopplerEffect.bind(this),
standing_waves: this.generateRelatedStandingWaves.bind(this),
resonance: this.generateRelatedResonance.bind(this),

// Thermodynamics and Heat Generators
temperature_heat: this.generateRelatedTemperatureHeat.bind(this),
thermal_expansion: this.generateRelatedThermalExpansion.bind(this),
calorimetry: this.generateRelatedCalorimetry.bind(this),
heat_transfer: this.generateRelatedHeatTransfer.bind(this),
gas_laws_physics: this.generateRelatedGasLawsPhysics.bind(this),
thermodynamic_processes: this.generateRelatedThermodynamicProcesses.bind(this),
heat_engines: this.generateRelatedHeatEngines.bind(this),

// Electricity and Magnetism Generators
electrostatics: this.generateRelatedElectrostatics.bind(this),
electric_fields: this.generateRelatedElectricFields.bind(this),
electric_potential: this.generateRelatedElectricPotential.bind(this),
capacitance: this.generateRelatedCapacitance.bind(this),
current_resistance: this.generateRelatedCurrentResistance.bind(this),
dc_circuits: this.generateRelatedDCCircuits.bind(this),
magnetic_fields: this.generateRelatedMagneticFields.bind(this),
electromagnetic_induction: this.generateRelatedEMInduction.bind(this),
ac_circuits: this.generateRelatedACCircuits.bind(this),

// Optics Generators
reflection: this.generateRelatedReflection.bind(this),
refraction: this.generateRelatedRefraction.bind(this),
lenses: this.generateRelatedLenses.bind(this),
mirrors: this.generateRelatedMirrors.bind(this),
optical_instruments: this.generateRelatedOpticalInstruments.bind(this),
wave_optics: this.generateRelatedWaveOptics.bind(this),
diffraction: this.generateRelatedDiffraction.bind(this),

// Modern Physics Generators
photoelectric_effect: this.generateRelatedPhotoelectricEffect.bind(this),
compton_scattering: this.generateRelatedComptonScattering.bind(this),
atomic_spectra: this.generateRelatedAtomicSpectra.bind(this),
bohr_model: this.generateRelatedBohrModel.bind(this),
quantum_mechanics: this.generateRelatedQuantumMechanics.bind(this),
wave_particle_duality: this.generateRelatedWaveParticleDuality.bind(this),

// Relativity Generators
time_dilation: this.generateRelatedTimeDilation.bind(this),
length_contraction: this.generateRelatedLengthContraction.bind(this),
relativistic_momentum: this.generateRelatedRelativisticMomentum.bind(this),
mass_energy_equivalence: this.
generateRelatedMassEnergyEquivalence.bind(this),
lorentz_transformations: this.generateRelatedLorentzTransformations.bind(this),

// Nuclear Physics Generators
radioactive_decay_physics: this.generateRelatedRadioactiveDecayPhysics.bind(this),
nuclear_reactions_physics: this.generateRelatedNuclearReactionsPhysics.bind(this),
binding_energy: this.generateRelatedBindingEnergy.bind(this),
fission_fusion: this.generateRelatedFissionFusion.bind(this),
radiation_detection: this.generateRelatedRadiationDetection.bind(this),


        // Cell Biology Generators
        cell_structure: this.generateRelatedCellStructure.bind(this),
        cell_membrane: this.generateRelatedCellMembrane.bind(this),
        organelles: this.generateRelatedOrganelles.bind(this),
        cell_division: this.generateRelatedCellDivision.bind(this),
        mitosis_meiosis: this.generateRelatedMitosisMeiosis.bind(this),
        cell_transport: this.generateRelatedCellTransport.bind(this),
        cellular_respiration: this.generateRelatedCellularRespiration.bind(this),
        photosynthesis: this.generateRelatedPhotosynthesis.bind(this),

        // Genetics and Molecular Biology Generators
        mendelian_genetics: this.generateRelatedMendelianGenetics.bind(this),
        punnett_squares: this.generateRelatedPunnettSquares.bind(this),
        dna_structure: this.generateRelatedDNAStructure.bind(this),
        dna_replication: this.generateRelatedDNAReplication.bind(this),
        transcription: this.generateRelatedTranscription.bind(this),
        translation: this.generateRelatedTranslation.bind(this),
        mutations: this.generateRelatedMutations.bind(this),
        gene_expression: this.generateRelatedGeneExpression.bind(this),
        inheritance_patterns: this.generateRelatedInheritancePatterns.bind(this),

        // Evolution and Natural Selection Generators
        natural_selection: this.generateRelatedNaturalSelection.bind(this),
        evolution_mechanisms: this.generateRelatedEvolutionMechanisms.bind(this),
        hardy_weinberg: this.generateRelatedHardyWeinberg.bind(this),
        speciation: this.generateRelatedSpeciation.bind(this),
        evidence_evolution: this.generateRelatedEvidenceEvolution.bind(this),
        adaptation: this.generateRelatedAdaptation.bind(this),

        // Ecology Generators
        ecosystems: this.generateRelatedEcosystems.bind(this),
        food_webs: this.generateRelatedFoodWebs.bind(this),
        energy_flow: this.generateRelatedEnergyFlow.bind(this),
        nutrient_cycles: this.generateRelatedNutrientCycles.bind(this),
        population_dynamics: this.generateRelatedPopulationDynamics.bind(this),
        biomes: this.generateRelatedBiomes.bind(this),
        symbiosis: this.generateRelatedSymbiosis.bind(this),
        ecological_succession: this.generateRelatedEcologicalSuccession.bind(this),

        // Human Anatomy and Physiology Generators
        circulatory_system: this.generateRelatedCirculatorySystem.bind(this),
        respiratory_system: this.generateRelatedRespiratorySystem.bind(this),
        digestive_system: this.generateRelatedDigestiveSystem.bind(this),
        nervous_system: this.generateRelatedNervousSystem.bind(this),
        endocrine_system: this.generateRelatedEndocrineSystem.bind(this),
        skeletal_system: this.generateRelatedSkeletalSystem.bind(this),
        muscular_system: this.generateRelatedMuscularSystem.bind(this),
        excretory_system: this.generateRelatedExcretorySystem.bind(this),

        // Plants (Botany) Generators
        plant_structure: this.generateRelatedPlantStructure.bind(this),
        plant_transport: this.generateRelatedPlantTransport.bind(this),
        plant_reproduction: this.generateRelatedPlantReproduction.bind(this),
        plant_hormones: this.generateRelatedPlantHormones.bind(this),
        tropisms: this.generateRelatedTropisms.bind(this),
        plant_anatomy: this.generateRelatedPlantAnatomy.bind(this),

        // Microbiology Generators
        bacteria: this.generateRelatedBacteria.bind(this),
        viruses: this.generateRelatedViruses.bind(this),
        fungi: this.generateRelatedFungi.bind(this),
        protists: this.generateRelatedProtists.bind(this),
        microbial_growth: this.generateRelatedMicrobialGrowth.bind(this),

        // Biotechnology Generators
        genetic_engineering: this.generateRelatedGeneticEngineering.bind(this),
        cloning: this.generateRelatedCloning.bind(this),
        pcr: this.generateRelatedPCR.bind(this),
        gel_electrophoresis: this.generateRelatedGelElectrophoresis.bind(this),
        recombinant_dna: this.generateRelatedRecombinantDNA.bind(this),

        // Reproduction and Development Generators
        asexual_reproduction: this.generateRelatedAsexualReproduction.bind(this),
        sexual_reproduction: this.generateRelatedSexualReproduction.bind(this),
        embryonic_development: this.generateRelatedEmbryonicDevelopment.bind(this),
        human_reproduction: this.generateRelatedHumanReproduction.bind(this),

        // Health, Disease and Immunology Generators
        immune_system: this.generateRelatedImmuneSystem.bind(this),
        pathogens: this.generateRelatedPathogens.bind(this),
        vaccines: this.generateRelatedVaccines.bind(this),
        antibodies: this.generateRelatedAntibodies.bind(this),
        diseases: this.generateRelatedDiseases.bind(this),
        immune_response: this.generateRelatedImmuneResponse.bind(this),

        // Taxonomy and Classification Generators
        classification_systems: this.generateRelatedClassificationSystems.bind(this),
        phylogeny: this.generateRelatedPhylogeny.bind(this),
        domains_kingdoms: this.generateRelatedDomainsKingdoms.bind(this),
        binomial_nomenclature: this.generateRelatedBinomialNomenclature.bind(this),

        // Homeostasis and Regulation Generators
        homeostasis: this.generateRelatedHomeostasis.bind(this),
        thermoregulation: this.generateRelatedThermoregulation.bind(this),
        osmoregulation: this.generateRelatedOsmoregulation.bind(this),
        blood_glucose: this.generateRelatedBloodGlucose.bind(this),
        feedback_mechanisms: this.generateRelatedFeedbackMechanisms.bind(this),

        // Energy in Living Systems Generators
        atp: this.generateRelatedATP.bind(this),
        glycolysis: this.generateRelatedGlycolysis.bind(this),
        krebs_cycle: this.generateRelatedKrebsCycle.bind(this),
        electron_transport: this.generateRelatedElectronTransport.bind(this),
        fermentation: this.generateRelatedFermentation.bind(this),
        light_reactions: this.generateRelatedLightReactions.bind(this),
        calvin_cycle: this.generateRelatedCalvinCycle.bind(this),

        // DNA Technology and Forensics Generators
        dna_fingerprinting: this.generateRelatedDNAFingerprinting.bind(this),
        forensic_analysis: this.generateRelatedForensicAnalysis.bind(this),
        paternity_testing: this.generateRelatedPaternityTesting.bind(this),
        crispr: this.generateRelatedCRISPR.bind(this),
        gene_therapy: this.generateRelatedGeneTherapy.bind(this)



    };

    this.initializeChemistryDatabases();
}

getCategoryFromType(type) {
    const categories = {
        // Stoichiometry
        'mole_calculations': 'Stoichiometry',
        'equation_balancing': 'Stoichiometry',
        'mass_mass_stoichiometry': 'Stoichiometry',
        'limiting_reagent': 'Stoichiometry',
        'percent_yield': 'Stoichiometry',
        'gas_stoichiometry': 'Stoichiometry',
        'solution_stoichiometry': 'Stoichiometry',
        'thermochemical_stoichiometry': 'Stoichiometry',
        'empirical_formula': 'Stoichiometry',
        
        // Organic Chemistry
        'alkanes': 'Organic Chemistry',
        'alkenes': 'Organic Chemistry',
        'alkynes': 'Organic Chemistry',
        'aromatic_compounds': 'Organic Chemistry',
        'functional_groups': 'Organic Chemistry',
        'isomerism': 'Organic Chemistry',
        'organic_reactions': 'Organic Chemistry',
        'nomenclature': 'Organic Chemistry',
        'reaction_mechanisms': 'Organic Chemistry',
        'polymers': 'Organic Chemistry',
        
        // Redox Chemistry
        'redox_stoichiometry': 'Redox Chemistry',
        'oxidation_states': 'Redox Chemistry',
        'half_reactions': 'Redox Chemistry',
        'electrochemistry': 'Redox Chemistry',
        'galvanic_cells': 'Redox Chemistry',
        'electrolysis': 'Redox Chemistry',
        
        // Acid-Base Chemistry
        'acid_base_neutralization': 'Acid-Base Chemistry',
        'ph_calculations': 'Acid-Base Chemistry',
        'buffers': 'Acid-Base Chemistry',
        'titrations': 'Acid-Base Chemistry',
        'polyprotic_acids': 'Acid-Base Chemistry',
        
        // Equilibrium Chemistry
        'equilibrium_constants': 'Equilibrium Chemistry',
        'le_chatelier': 'Equilibrium Chemistry',
        'solubility_equilibria': 'Equilibrium Chemistry',
        'complex_ions': 'Equilibrium Chemistry',
        'gas_equilibrium': 'Equilibrium Chemistry',
        
        // Kinetics & Thermodynamics
        'reaction_kinetics': 'Kinetics & Thermodynamics',
        'rate_laws': 'Kinetics & Thermodynamics',
        'activation_energy': 'Kinetics & Thermodynamics',
        'entropy': 'Kinetics & Thermodynamics',
        'gibbs_free_energy': 'Kinetics & Thermodynamics',
        'spontaneity': 'Kinetics & Thermodynamics',
        
        // Atomic Structure
        'atomic_structure': 'Atomic Structure',
        'quantum_numbers': 'Atomic Structure',
        'electron_configuration': 'Atomic Structure',
        'periodic_trends': 'Atomic Structure',
        'bonding': 'Atomic Structure',
        'molecular_geometry': 'Atomic Structure',
        'hybridization': 'Atomic Structure',

        // Chemical Bonding & Lewis Structures
        'lewis_structures': 'Chemical Bonding',
        'vsepr_theory': 'Chemical Bonding',
        'bond_polarity': 'Chemical Bonding',
        'intermolecular_forces': 'Chemical Bonding',

        // States of Matter & Particle Theory
        'states_of_matter': 'States of Matter',
        'phase_changes': 'States of Matter',
        'gas_laws': 'States of Matter',
        'kinetic_molecular_theory': 'States of Matter',

        // Nuclear Chemistry
        'radioactive_decay': 'Nuclear Chemistry',
        'nuclear_equations': 'Nuclear Chemistry',
        'half_life': 'Nuclear Chemistry',
        'nuclear_reactions': 'Nuclear Chemistry',

        // Laboratory Chemistry
        'lab_safety': 'Laboratory Chemistry',
        'lab_apparatus': 'Laboratory Chemistry',
        'lab_techniques': 'Laboratory Chemistry',
        'experimental_design': 'Laboratory Chemistry',

        // Mechanics
'kinematics_1d': 'Mechanics',
'kinematics_2d': 'Mechanics',
'projectile_motion': 'Mechanics',
'newtons_laws': 'Mechanics',
'friction': 'Mechanics',
'circular_motion': 'Mechanics',
'work_energy': 'Mechanics',
'momentum_collisions': 'Mechanics',
'rotational_motion': 'Mechanics',
'gravitation': 'Mechanics',

// Waves and Sound
'wave_properties': 'Waves and Sound',
'wave_interference': 'Waves and Sound',
'sound_waves': 'Waves and Sound',
'doppler_effect': 'Waves and Sound',
'standing_waves': 'Waves and Sound',
'resonance': 'Waves and Sound',

// Thermodynamics and Heat
'temperature_heat': 'Thermodynamics and Heat',
'thermal_expansion': 'Thermodynamics and Heat',
'calorimetry': 'Thermodynamics and Heat',
'heat_transfer': 'Thermodynamics and Heat',
'gas_laws_physics': 'Thermodynamics and Heat',
'thermodynamic_processes': 'Thermodynamics and Heat',
'heat_engines': 'Thermodynamics and Heat',

// Electricity and Magnetism
'electrostatics': 'Electricity and Magnetism',
'electric_fields': 'Electricity and Magnetism',
'electric_potential': 'Electricity and Magnetism',
'capacitance': 'Electricity and Magnetism',
'current_resistance': 'Electricity and Magnetism',
'dc_circuits': 'Electricity and Magnetism',
'magnetic_fields': 'Electricity and Magnetism',
'electromagnetic_induction': 'Electricity and Magnetism',
'ac_circuits': 'Electricity and Magnetism',

// Optics
'reflection': 'Optics',
'refraction': 'Optics',
'lenses': 'Optics',
'mirrors': 'Optics',
'optical_instruments': 'Optics',
'wave_optics': 'Optics',
'diffraction': 'Optics',

// Modern Physics
'photoelectric_effect': 'Modern Physics',
'compton_scattering': 'Modern Physics',
'atomic_spectra': 'Modern Physics',
'bohr_model': 'Modern Physics',
'quantum_mechanics': 'Modern Physics',
'wave_particle_duality': 'Modern Physics',

// Relativity
'time_dilation': 'Relativity',
'length_contraction': 'Relativity',
'relativistic_momentum': 'Relativity',
'mass_energy_equivalence': 'Relativity',
'lorentz_transformations': 'Relativity',

// Nuclear Physics
'radioactive_decay_physics': 'Nuclear Physics',
'nuclear_reactions_physics': 'Nuclear Physics',
'binding_energy': 'Nuclear Physics',
'fission_fusion': 'Nuclear Physics',
'radiation_detection': 'Nuclear Physics',

     // Cell Biology
        'cell_structure': 'Cell Biology',
        'cell_membrane': 'Cell Biology',
        'organelles': 'Cell Biology',
        'cell_division': 'Cell Biology',
        'mitosis_meiosis': 'Cell Biology',
        'cell_transport': 'Cell Biology',
        'cellular_respiration': 'Cell Biology',
        'photosynthesis': 'Cell Biology',

        // Genetics and Molecular Biology
        'mendelian_genetics': 'Genetics and Molecular Biology',
        'punnett_squares': 'Genetics and Molecular Biology',
        'dna_structure': 'Genetics and Molecular Biology',
        'dna_replication': 'Genetics and Molecular Biology',
        'transcription': 'Genetics and Molecular Biology',
        'translation': 'Genetics and Molecular Biology',
        'mutations': 'Genetics and Molecular Biology',
        'gene_expression': 'Genetics and Molecular Biology',
        'inheritance_patterns': 'Genetics and Molecular Biology',

        // Evolution and Natural Selection
        'natural_selection': 'Evolution and Natural Selection',
        'evolution_mechanisms': 'Evolution and Natural Selection',
        'hardy_weinberg': 'Evolution and Natural Selection',
        'speciation': 'Evolution and Natural Selection',
        'evidence_evolution': 'Evolution and Natural Selection',
        'adaptation': 'Evolution and Natural Selection',

        // Ecology
        'ecosystems': 'Ecology',
        'food_webs': 'Ecology',
        'energy_flow': 'Ecology',
        'nutrient_cycles': 'Ecology',
        'population_dynamics': 'Ecology',
        'biomes': 'Ecology',
        'symbiosis': 'Ecology',
        'ecological_succession': 'Ecology',

        // Human Anatomy and Physiology
        'circulatory_system': 'Human Anatomy and Physiology',
        'respiratory_system': 'Human Anatomy and Physiology',
        'digestive_system': 'Human Anatomy and Physiology',
        'nervous_system': 'Human Anatomy and Physiology',
        'endocrine_system': 'Human Anatomy and Physiology',
        'skeletal_system': 'Human Anatomy and Physiology',
        'muscular_system': 'Human Anatomy and Physiology',
        'excretory_system': 'Human Anatomy and Physiology',

        // Plants (Botany)
        'plant_structure': 'Plants (Botany)',
        'plant_transport': 'Plants (Botany)',
        'plant_reproduction': 'Plants (Botany)',
        'plant_hormones': 'Plants (Botany)',
        'tropisms': 'Plants (Botany)',
        'plant_anatomy': 'Plants (Botany)',

        // Microbiology
        'bacteria': 'Microbiology',
        'viruses': 'Microbiology',
        'fungi': 'Microbiology',
        'protists': 'Microbiology',
        'microbial_growth': 'Microbiology',

        // Biotechnology
        'genetic_engineering': 'Biotechnology',
        'cloning': 'Biotechnology',
        'pcr': 'Biotechnology',
        'gel_electrophoresis': 'Biotechnology',
        'recombinant_dna': 'Biotechnology',

        // Reproduction and Development
        'asexual_reproduction': 'Reproduction and Development',
        'sexual_reproduction': 'Reproduction and Development',
        'embryonic_development': 'Reproduction and Development',
        'human_reproduction': 'Reproduction and Development',

        // Health, Disease and Immunology
        'immune_system': 'Health, Disease and Immunology',
        'pathogens': 'Health, Disease and Immunology',
        'vaccines': 'Health, Disease and Immunology',
        'antibodies': 'Health, Disease and Immunology',
        'diseases': 'Health, Disease and Immunology',
        'immune_response': 'Health, Disease and Immunology',

        // Taxonomy and Classification
        'classification_systems': 'Taxonomy and Classification',
        'phylogeny': 'Taxonomy and Classification',
        'domains_kingdoms': 'Taxonomy and Classification',
        'binomial_nomenclature': 'Taxonomy and Classification',

        // Homeostasis and Regulation
        'homeostasis': 'Homeostasis and Regulation',
        'thermoregulation': 'Homeostasis and Regulation',
        'osmoregulation': 'Homeostasis and Regulation',
        'blood_glucose': 'Homeostasis and Regulation',
        'feedback_mechanisms': 'Homeostasis and Regulation',

        // Energy in Living Systems
        'atp': 'Energy in Living Systems',
        'glycolysis': 'Energy in Living Systems',
        'krebs_cycle': 'Energy in Living Systems',
        'electron_transport': 'Energy in Living Systems',
        'fermentation': 'Energy in Living Systems',
        'light_reactions': 'Energy in Living Systems',
        'calvin_cycle': 'Energy in Living Systems',

        // DNA Technology and Forensics
        'dna_fingerprinting': 'DNA Technology and Forensics',
        'forensic_analysis': 'DNA Technology and Forensics',
        'paternity_testing': 'DNA Technology and Forensics',
        'crispr': 'DNA Technology and Forensics',
        'gene_therapy': 'DNA Technology and Forensics'


    };
    return categories[type] || 'General Chemistry';
}

initializeChemistryDatabases() {
    this.databases = {
        compounds: {
            simple_molecules: [
                { formula: 'H2O', name: 'water', molarMass: 18.02 },
                { formula: 'CO2', name: 'carbon dioxide', molarMass: 44.01 },
                { formula: 'NH3', name: 'ammonia', molarMass: 17.03 },
                { formula: 'CH4', name: 'methane', molarMass: 16.04 },
                { formula: 'H2SO4', name: 'sulfuric acid', molarMass: 98.08 },
                { formula: 'NaOH', name: 'sodium hydroxide', molarMass: 40.00 },
                { formula: 'HCl', name: 'hydrochloric acid', molarMass: 36.46 },
                { formula: 'CaCO3', name: 'calcium carbonate', molarMass: 100.09 }
            ],
            organic_compounds: [
                { formula: 'C6H12O6', name: 'glucose', molarMass: 180.16 },
                { formula: 'C2H5OH', name: 'ethanol', molarMass: 46.07 },
                { formula: 'C8H18', name: 'octane', molarMass: 114.23 },
                { formula: 'C2H4', name: 'ethene', molarMass: 28.05 },
                { formula: 'C6H6', name: 'benzene', molarMass: 78.11 },
                { formula: 'CH3COOH', name: 'acetic acid', molarMass: 60.05 }
            ],
            ionic_compounds: [
                { formula: 'NaCl', name: 'sodium chloride', molarMass: 58.44 },
                { formula: 'MgO', name: 'magnesium oxide', molarMass: 40.30 },
                { formula: 'Al2O3', name: 'aluminum oxide', molarMass: 101.96 },
                { formula: 'CuSO4', name: 'copper(II) sulfate', molarMass: 159.61 },
                { formula: 'Fe2O3', name: 'iron(III) oxide', molarMass: 159.69 },
                { formula: 'AgNO3', name: 'silver nitrate', molarMass: 169.87 }
            ]
        },

        organic: {
            alkanes: [
                { name: 'methane', formula: 'CH4', carbons: 1 },
                { name: 'ethane', formula: 'C2H6', carbons: 2 },
                { name: 'propane', formula: 'C3H8', carbons: 3 },
                { name: 'butane', formula: 'C4H10', carbons: 4 },
                { name: 'pentane', formula: 'C5H12', carbons: 5 },
                { name: 'hexane', formula: 'C6H14', carbons: 6 }
            ],
            alkenes: [
                { name: 'ethene', formula: 'C2H4', carbons: 2 },
                { name: 'propene', formula: 'C3H6', carbons: 3 },
                { name: 'butene', formula: 'C4H8', carbons: 4 },
                { name: 'pentene', formula: 'C5H10', carbons: 5 }
            ],
            alkynes: [
                { name: 'ethyne', formula: 'C2H2', carbons: 2 },
                { name: 'propyne', formula: 'C3H4', carbons: 3 },
                { name: 'butyne', formula: 'C4H6', carbons: 4 }
            ],
            aromatics: [
                { name: 'benzene', formula: 'C6H6' },
                { name: 'toluene', formula: 'C7H8' },
                { name: 'xylene', formula: 'C8H10' },
                { name: 'naphthalene', formula: 'C10H8' }
            ],
            functional_groups: [
                { name: 'alcohol', structure: '-OH', example: 'ethanol' },
                { name: 'aldehyde', structure: '-CHO', example: 'formaldehyde' },
                { name: 'ketone', structure: '-CO-', example: 'acetone' },
                { name: 'carboxylic acid', structure: '-COOH', example: 'acetic acid' },
                { name: 'ester', structure: '-COO-', example: 'ethyl acetate' },
                { name: 'ether', structure: '-O-', example: 'diethyl ether' },
                { name: 'amine', structure: '-NH2', example: 'aniline' },
                { name: 'amide', structure: '-CONH2', example: 'formamide' }
            ]
        },

        redox: {
            oxidation_states: {
                'H': '+1 (usually), -1 (in hydrides)',
                'O': '-2 (usually), -1 (in peroxides)',
                'N': '-3 to +5',
                'S': '-2 to +6',
                'Cl': '-1 to +7',
                'Mn': '+2 to +7',
                'Fe': '+2 to +3'
            },
            common_oxidizing_agents: [
                { formula: 'MnO4-', name: 'permanganate', color: 'purple' },
                { formula: 'Cr2O7^2-', name: 'dichromate', color: 'orange' },
                { formula: 'HNO3', name: 'nitric acid' },
                { formula: 'H2O2', name: 'hydrogen peroxide' },
                { formula: 'Cl2', name: 'chlorine gas', color: 'yellow-green' }
            ],
            common_reducing_agents: [
                { formula: 'Fe2+', name: 'iron(II)' },
                { formula: 'I-', name: 'iodide ion' },
                { formula: 'S2O3^2-', name: 'thiosulfate' },
                { formula: 'H2S', name: 'hydrogen sulfide' },
                { formula: 'Sn2+', name: 'tin(II)' }
            ]
        },

        acidBase: {
            strong_acids: [
                { formula: 'HCl', name: 'hydrochloric acid', Ka: null },
                { formula: 'HBr', name: 'hydrobromic acid', Ka: null },
                { formula: 'HI', name: 'hydroiodic acid', Ka: null },
                { formula: 'HNO3', name: 'nitric acid', Ka: null },
                { formula: 'H2SO4', name: 'sulfuric acid', Ka: null },
                { formula: 'HClO4', name: 'perchloric acid', Ka: null }
            ],
            strong_bases: [
                { formula: 'NaOH', name: 'sodium hydroxide', Kb: null },
                { formula: 'KOH', name: 'potassium hydroxide', Kb: null },
                { formula: 'Ba(OH)2', name: 'barium hydroxide', Kb: null },
                { formula: 'Ca(OH)2', name: 'calcium hydroxide', Kb: null }
            ],
            weak_acids: [
                { formula: 'CH3COOH', name: 'acetic acid', Ka: 1.8e-5 },
                { formula: 'HF', name: 'hydrofluoric acid', Ka: 3.5e-4 },
                { formula: 'HCN', name: 'hydrocyanic acid', Ka: 4.9e-10 },
                { formula: 'H2CO3', name: 'carbonic acid', Ka: 4.3e-7 }
            ],
            weak_bases: [
                { formula: 'NH3', name: 'ammonia', Kb: 1.8e-5 },
                { formula: 'C5H5N', name: 'pyridine', Kb: 1.7e-9 }
            ]
        },

        equilibrium: {
            le_chatelier_examples: [
                { equation: 'N2 + 3H2 ⇌ 2NH3', exothermic: true },
                { equation: 'CO + H2O ⇌ CO2 + H2', exothermic: true },
                { equation: 'SO2 + O2 ⇌ SO3', exothermic: true },
                { equation: 'CaCO3 ⇌ CaO + CO2', exothermic: false }
            ]
        },

        kinetics: {
            reaction_orders: [
                { type: 'zero-order', ratelaw: 'rate = k', halflife: 'linear with concentration' },
                { type: 'first-order', ratelaw: 'rate = k[A]', halflife: 'constant' },
                { type: 'second-order', ratelaw: 'rate = k[A]^2', halflife: 'inversely proportional' }
            ],
            catalyst_examples: [
                { reaction: 'H2O2 decomposition', catalyst: 'MnO2' },
                { reaction: 'N2 + H2 → NH3', catalyst: 'Fe' },
                { reaction: 'SO2 oxidation', catalyst: 'V2O5' }
            ]
        },

        atomicStructure: {
            quantumNumbers: {
                n: { description: 'principal quantum number', range: '1, 2, 3, ...' },
                l: { description: 'angular momentum', range: '0 to n-1' },
                ml: { description: 'magnetic quantum number', range: '-l to +l' },
                ms: { description: 'spin quantum number', values: ['+1/2', '-1/2'] }
            },
            orbitals: [
                { type: 's', shape: 'spherical', maxElectrons: 2 },
                { type: 'p', shape: 'dumbbell', maxElectrons: 6 },
                { type: 'd', shape: 'cloverleaf', maxElectrons: 10 },
                { type: 'f', shape: 'complex', maxElectrons: 14 }
            ]
        },

        // NEW: Chemical Bonding Database
        bonding: {
            bond_types: [
                { type: 'ionic', description: 'Transfer of electrons', example: 'NaCl' },
                { type: 'covalent', description: 'Sharing of electrons', example: 'H2O' },
                { type: 'metallic', description: 'Sea of electrons', example: 'Cu' },
                { type: 'coordinate', description: 'Dative bonding', example: 'NH4+' }
            ],
            intermolecular_forces: [
                { type: 'London dispersion', strength: 'weakest', example: 'CH4' },
                { type: 'dipole-dipole', strength: 'moderate', example: 'HCl' },
                { type: 'hydrogen bonding', strength: 'strongest', example: 'H2O' },
                { type: 'ion-dipole', strength: 'very strong', example: 'NaCl in water' }
            ],
            vsepr_shapes: [
                { electrons: 2, shape: 'linear', angle: 180, example: 'CO2' },
                { electrons: 3, shape: 'trigonal planar', angle: 120, example: 'BF3' },
                { electrons: 4, shape: 'tetrahedral', angle: 109.5, example: 'CH4' },
                { electrons: 5, shape: 'trigonal bipyramidal', angle: '90/120', example: 'PCl5' },
                { electrons: 6, shape: 'octahedral', angle: 90, example: 'SF6' }
            ]
        },

        // NEW: States of Matter Database
        statesOfMatter: {
            phases: [
                { state: 'solid', characteristics: 'fixed shape, fixed volume, vibrating particles' },
                { state: 'liquid', characteristics: 'variable shape, fixed volume, sliding particles' },
                { state: 'gas', characteristics: 'variable shape, variable volume, freely moving particles' },
                { state: 'plasma', characteristics: 'ionized gas, high energy' }
            ],
            phase_changes: [
                { change: 'melting', from: 'solid', to: 'liquid', endothermic: true },
                { change: 'freezing', from: 'liquid', to: 'solid', endothermic: false },
                { change: 'vaporization', from: 'liquid', to: 'gas', endothermic: true },
                { change: 'condensation', from: 'gas', to: 'liquid', endothermic: false },
                { change: 'sublimation', from: 'solid', to: 'gas', endothermic: true },
                { change: 'deposition', from: 'gas', to: 'solid', endothermic: false }
            ],
            gas_laws: [
                { law: 'Boyle\'s Law', equation: 'P₁V₁ = P₂V₂', constant: 'T, n' },
                { law: 'Charles\' Law', equation: 'V₁/T₁ = V₂/T₂', constant: 'P, n' },
                { law: 'Gay-Lussac\'s Law', equation: 'P₁/T₁ = P₂/T₂', constant: 'V, n' },
                { law: 'Combined Gas Law', equation: 'P₁V₁/T₁ = P₂V₂/T₂', constant: 'n' },
                { law: 'Ideal Gas Law', equation: 'PV = nRT', constant: 'none' }
            ]
        },

        // NEW: Nuclear Chemistry Database
        nuclear: {
            decay_types: [
                { type: 'alpha', symbol: 'α', particle: '⁴₂He', mass_change: -4, charge_change: -2 },
                { type: 'beta-minus', symbol: 'β⁻', particle: '⁰₋₁e', mass_change: 0, charge_change: +1 },
                { type: 'beta-plus', symbol: 'β⁺', particle: '⁰₊₁e', mass_change: 0, charge_change: -1 },
                { type: 'gamma', symbol: 'γ', particle: '⁰₀γ', mass_change: 0, charge_change: 0 }
            ],
            common_isotopes: [
                { element: 'Carbon-14', symbol: '¹⁴₆C', halfLife: '5730 years', decayType: 'beta-minus' },
                { element: 'Uranium-238', symbol: '²³⁸₉₂U', halfLife: '4.5 billion years', decayType: 'alpha' },
                { element: 'Iodine-131', symbol: '¹³¹₅₃I', halfLife: '8 days', decayType: 'beta-minus' },
                { element: 'Cobalt-60', symbol: '⁶⁰₂₇Co', halfLife: '5.27 years', decayType: 'beta-minus' }
            ]
        },

        // NEW: Laboratory Chemistry Database
        laboratory: {
            apparatus: [
                { name: 'beaker', use: 'holding and mixing liquids', volume_range: '50-1000 mL' },
                { name: 'volumetric flask', use: 'preparing precise volumes', accuracy: 'high' },
                { name: 'burette', use: 'dispensing precise volumes', accuracy: 'very high' },
                { name: 'pipette', use: 'transferring precise volumes', accuracy: 'very high' },
                { name: 'Erlenmeyer flask', use: 'mixing and heating', shape: 'conical' },
                { name: 'test tube', use: 'small-scale reactions', size: 'small' },
                { name: 'graduated cylinder', use: 'measuring volumes', accuracy: 'moderate' }
            ],
            techniques: [
                { technique: 'filtration', purpose: 'separate solid from liquid' },
                { technique: 'distillation', purpose: 'separate liquids by boiling point' },
                { technique: 'crystallization', purpose: 'purify solid compounds' },
                { technique: 'titration', purpose: 'determine concentration' },
                { technique: 'chromatography', purpose: 'separate mixtures' },
                { technique: 'extraction', purpose: 'separate using solubility' }
            ],
            safety: [
                { hazard: 'corrosive acids/bases', precaution: 'wear goggles, gloves, lab coat' },
                { hazard: 'flammable liquids', precaution: 'no open flames, use fume hood' },
                { hazard: 'toxic gases', precaution: 'use fume hood, proper ventilation' },
                { hazard: 'broken glass', precaution: 'sweep carefully, use dustpan' }
            ]
        }
    };
}


initializePhysicsDatabases() {
    this.physicsDatabases = {
        mechanics: {
            motion_types: [
                { type: 'uniform motion', acceleration: 0, equations: ['v = constant', 's = vt'] },
                { type: 'uniformly accelerated', acceleration: 'constant', equations: ['v = u + at', 's = ut + ½at²', 'v² = u² + 2as'] },
                { type: 'free fall', acceleration: 9.8, equations: ['same as uniformly accelerated with a = g'] },
                { type: 'projectile', components: 'horizontal + vertical', path: 'parabolic' }
            ],
            forces: [
                { name: 'gravitational', formula: 'F = mg', direction: 'downward' },
                { name: 'normal', formula: 'N = mg cosθ', direction: 'perpendicular to surface' },
                { name: 'friction', formula: 'f = μN', types: ['static', 'kinetic'] },
                { name: 'tension', formula: 'T', medium: 'string/rope' },
                { name: 'centripetal', formula: 'F = mv²/r', direction: 'toward center' }
            ],
            newtons_laws: [
                { law: 'First Law', statement: 'Object at rest stays at rest unless acted upon', concept: 'inertia' },
                { law: 'Second Law', statement: 'F = ma', concept: 'acceleration proportional to force' },
                { law: 'Third Law', statement: 'Action-reaction pairs', concept: 'equal and opposite forces' }
            ],
            collision_types: [
                { type: 'elastic', energy_conserved: true, momentum_conserved: true, formula: 'KE before = KE after' },
                { type: 'inelastic', energy_conserved: false, momentum_conserved: true, formula: 'objects stick together' },
                { type: 'perfectly inelastic', energy_loss: 'maximum', objects: 'stick together' }
            ],
            rotational_quantities: [
                { linear: 'displacement (s)', angular: 'angular displacement (θ)', relation: 's = rθ' },
                { linear: 'velocity (v)', angular: 'angular velocity (ω)', relation: 'v = rω' },
                { linear: 'acceleration (a)', angular: 'angular acceleration (α)', relation: 'a = rα' },
                { linear: 'force (F)', angular: 'torque (τ)', relation: 'τ = rF' },
                { linear: 'mass (m)', angular: 'moment of inertia (I)', relation: 'I = Σmr²' }
            ]
        },

        waves: {
            wave_types: [
                { type: 'mechanical', medium: 'required', examples: ['sound', 'water waves', 'seismic'] },
                { type: 'electromagnetic', medium: 'not required', examples: ['light', 'radio', 'X-rays'] },
                { type: 'transverse', oscillation: 'perpendicular to direction', examples: ['light', 'water'] },
                { type: 'longitudinal', oscillation: 'parallel to direction', examples: ['sound', 'compression'] }
            ],
            wave_properties: [
                { property: 'wavelength (λ)', unit: 'meters', definition: 'distance between crests' },
                { property: 'frequency (f)', unit: 'Hz', definition: 'cycles per second' },
                { property: 'period (T)', unit: 'seconds', relation: 'T = 1/f' },
                { property: 'amplitude (A)', unit: 'meters', definition: 'maximum displacement' },
                { property: 'wave speed (v)', formula: 'v = fλ', unit: 'm/s' }
            ],
            sound_characteristics: [
                { property: 'speed in air', value: '343 m/s at 20°C', factors: 'temperature, medium' },
                { property: 'audible range', value: '20 Hz - 20 kHz', human: true },
                { property: 'infrasound', value: '< 20 Hz', examples: 'earthquakes, elephants' },
                { property: 'ultrasound', value: '> 20 kHz', examples: 'bats, medical imaging' }
            ],
            interference: [
                { type: 'constructive', condition: 'Δφ = 2nπ', path_difference: 'nλ', amplitude: 'increases' },
                { type: 'destructive', condition: 'Δφ = (2n+1)π', path_difference: '(n+½)λ', amplitude: 'decreases' }
            ],
            standing_waves: [
                { instrument: 'string fixed both ends', condition: 'L = nλ/2', harmonics: 'f_n = nv/2L' },
                { instrument: 'pipe open both ends', condition: 'L = nλ/2', harmonics: 'f_n = nv/2L' },
                { instrument: 'pipe closed one end', condition: 'L = (2n-1)λ/4', harmonics: 'f_n = (2n-1)v/4L' }
            ]
        },

        thermodynamics: {
            temperature_scales: [
                { scale: 'Celsius', symbol: '°C', freezing: 0, boiling: 100 },
                { scale: 'Fahrenheit', symbol: '°F', freezing: 32, boiling: 212, conversion: 'F = 9/5C + 32' },
                { scale: 'Kelvin', symbol: 'K', freezing: 273.15, boiling: 373.15, conversion: 'K = C + 273.15' }
            ],
            thermal_expansion: [
                { type: 'linear', formula: 'ΔL = αLΔT', coefficient: 'α (linear expansion)' },
                { type: 'area', formula: 'ΔA = 2αAΔT', coefficient: '2α' },
                { type: 'volume', formula: 'ΔV = βVΔT', coefficient: 'β (volume expansion) = 3α' }
            ],
            heat_transfer: [
                { method: 'conduction', formula: 'Q/t = kAΔT/d', medium: 'solids', example: 'metal spoon in hot water' },
                { method: 'convection', mechanism: 'fluid motion', medium: 'liquids/gases', example: 'boiling water' },
                { method: 'radiation', mechanism: 'electromagnetic waves', medium: 'none needed', example: 'sun\'s heat' }
            ],
            specific_heat: [
                { substance: 'water', value: 4186, unit: 'J/(kg·K)', high: true },
                { substance: 'ice', value: 2100, unit: 'J/(kg·K)' },
                { substance: 'aluminum', value: 900, unit: 'J/(kg·K)' },
                { substance: 'copper', value: 387, unit: 'J/(kg·K)' },
                { substance: 'iron', value: 450, unit: 'J/(kg·K)' }
            ],
            thermodynamic_laws: [
                { law: 'Zeroth Law', statement: 'Thermal equilibrium is transitive', concept: 'temperature definition' },
                { law: 'First Law', statement: 'ΔU = Q - W', concept: 'energy conservation' },
                { law: 'Second Law', statement: 'Entropy always increases', concept: 'heat flows hot to cold' },
                { law: 'Third Law', statement: 'Entropy → 0 as T → 0 K', concept: 'absolute zero unattainable' }
            ],
            thermodynamic_processes: [
                { process: 'isothermal', constant: 'temperature', work: 'W = nRT ln(V₂/V₁)', ΔU: 0 },
                { process: 'isobaric', constant: 'pressure', work: 'W = PΔV', ΔU: 'Q - W' },
                { process: 'isochoric', constant: 'volume', work: 0, ΔU: 'Q' },
                { process: 'adiabatic', constant: 'no heat transfer (Q=0)', work: 'W = -ΔU', equation: 'PV^γ = constant' }
            ]
        },

        electricity: {
            charge: [
                { particle: 'electron', charge: '-1.6×10⁻¹⁹ C', mass: '9.11×10⁻³¹ kg' },
                { particle: 'proton', charge: '+1.6×10⁻¹⁹ C', mass: '1.67×10⁻²⁷ kg' },
                { property: 'quantization', statement: 'q = ne', fundamental: true }
            ],
            coulombs_law: {
                formula: 'F = k|q₁q₂|/r²',
                constant: 'k = 8.99×10⁹ N·m²/C²',
                permittivity: 'ε₀ = 8.85×10⁻¹² C²/(N·m²)',
                relation: 'k = 1/(4πε₀)'
            },
            electric_field: [
                { definition: 'E = F/q', unit: 'N/C or V/m' },
                { point_charge: 'E = kq/r²', direction: 'radially outward (positive)' },
                { uniform_field: 'E = V/d', between_plates: true }
            ],
            circuits: [
                { law: 'Ohm\'s Law', formula: 'V = IR', applies: 'resistors' },
                { law: 'Kirchhoff\'s Current Law', statement: 'Σ I_in = Σ I_out', node: true },
                { law: 'Kirchhoff\'s Voltage Law', statement: 'Σ V = 0', loop: true }
            ],
            resistors: [
                { configuration: 'series', resistance: 'R_total = R₁ + R₂ + ...', current: 'same', voltage: 'divides' },
                { configuration: 'parallel', resistance: '1/R_total = 1/R₁ + 1/R₂ + ...', current: 'divides', voltage: 'same' }
            ],
            capacitors: [
                { configuration: 'series', capacitance: '1/C_total = 1/C₁ + 1/C₂ + ...', voltage: 'divides', charge: 'same' },
                { configuration: 'parallel', capacitance: 'C_total = C₁ + C₂ + ...', voltage: 'same', charge: 'adds' }
            ],
            magnetism: [
                { force: 'on moving charge', formula: 'F = qvB sinθ', direction: 'right-hand rule' },
                { force: 'on current', formula: 'F = BIL sinθ', direction: 'right-hand rule' },
                { field: 'straight wire', formula: 'B = μ₀I/(2πr)', direction: 'right-hand rule' },
                { field: 'solenoid', formula: 'B = μ₀nI', uniform: 'inside' }
            ],
            electromagnetic_induction: [
                { law: 'Faraday\'s Law', formula: 'ε = -N(ΔΦ/Δt)', concept: 'induced emf' },
                { law: 'Lenz\'s Law', statement: 'Induced current opposes change', minus_sign: true },
                { flux: 'magnetic flux', formula: 'Φ = BA cosθ', unit: 'Weber (Wb)' }
            ]
        },

        optics: {
            reflection: [
                { law: 'Law of Reflection', statement: 'θ_incident = θ_reflected', plane: 'normal to surface' },
                { mirror: 'plane', image: 'virtual, upright, same size', formula: 'd_object = d_image' },
                { mirror: 'concave', focus: 'converging', real_images: 'possible' },
                { mirror: 'convex', focus: 'diverging', real_images: 'never' }
            ],
            refraction: [
                { law: 'Snell\'s Law', formula: 'n₁ sinθ₁ = n₂ sinθ₂' },
                { index: 'refractive index', formula: 'n = c/v', vacuum: 'n = 1' },
                { phenomenon: 'total internal reflection', condition: 'θ > critical angle, n₁ > n₂' },
                { critical_angle: 'formula', equation: 'sinθ_c = n₂/n₁' }
            ],
            refractive_indices: [
                { medium: 'vacuum', n: 1.0000 },
                { medium: 'air', n: 1.0003 },
                { medium: 'water', n: 1.333 },
                { medium: 'glass (crown)', n: 1.52 },
                { medium: 'glass (flint)', n: 1.66 },
                { medium: 'diamond', n: 2.42 }
            ],
            lenses: [
                { type: 'converging (convex)', focal_length: 'positive', images: 'real or virtual' },
                { type: 'diverging (concave)', focal_length: 'negative', images: 'virtual only' }
            ],
            lens_mirror_equation: {
                formula: '1/f = 1/d_o + 1/d_i',
                magnification: 'M = -d_i/d_o = h_i/h_o',
                sign_conventions: 'real (+), virtual (-)'
            },
            wave_optics: [
                { phenomenon: 'interference', condition: 'coherent sources', examples: 'double-slit' },
                { phenomenon: 'diffraction', definition: 'bending around obstacles', examples: 'single-slit' },
                { phenomenon: 'polarization', applies: 'transverse waves only', examples: 'sunglasses' }
            ],
            double_slit: {
                constructive: 'd sinθ = mλ (m = 0, 1, 2, ...)',
                destructive: 'd sinθ = (m + ½)λ',
                fringe_separation: 'y = mλL/d'
            }
        },

        modern_physics: {
            photoelectric_effect: {
                equation: 'KE_max = hf - φ',
                work_function: 'φ = hf₀ (threshold frequency)',
                stopping_potential: 'eV_s = KE_max',
                planck_constant: 'h = 6.626×10⁻³⁴ J·s'
            },
            photon_energy: [
                { formula: 'E = hf', frequency: 'f in Hz' },
                { formula: 'E = hc/λ', wavelength: 'λ in meters' },
                { relation: 'c = fλ', speed: '3×10⁸ m/s' }
            ],
            compton_scattering: {
                wavelength_shift: 'Δλ = (h/m_e c)(1 - cosθ)',
                compton_wavelength: 'λ_c = h/(m_e c) = 2.43×10⁻¹² m',
                demonstrates: 'particle nature of light'
            },
            bohr_model: [
                { postulate: 'quantized orbits', formula: 'L = nℏ (n = 1, 2, 3, ...)' },
                { energy_levels: 'E_n = -13.6/n² eV', ground_state: 'n = 1' },
                { photon_emission: 'ΔE = hf = E_initial - E_final' },
                { radius: 'r_n = n²r₀', bohr_radius: 'r₀ = 0.529 Å' }
            ],
            de_broglie: {
                wavelength: 'λ = h/p = h/(mv)',
                applies: 'all particles with momentum',
                significance: 'wave-particle duality'
            },
            uncertainty_principle: {
                position_momentum: 'Δx·Δp ≥ ℏ/2',
                energy_time: 'ΔE·Δt ≥ ℏ/2',
                reduced_planck: 'ℏ = h/(2π) = 1.055×10⁻³⁴ J·s'
            }
        },

        relativity: {
            postulates: [
                { postulate: 'First', statement: 'Laws of physics same in all inertial frames' },
                { postulate: 'Second', statement: 'Speed of light constant in all inertial frames', c: '3×10⁸ m/s' }
            ],
            lorentz_factor: {
                gamma: 'γ = 1/√(1 - v²/c²)',
                applies: ['time dilation', 'length contraction', 'mass increase']
            },
            time_dilation: {
                formula: 'Δt = γΔt₀',
                proper_time: 'Δt₀ (moving frame)',
                dilated_time: 'Δt (stationary observer)'
            },
            length_contraction: {
                formula: 'L = L₀/γ',
                proper_length: 'L₀ (rest frame)',
                contracted_length: 'L (moving observer)'
            },
            relativistic_momentum: {
                formula: 'p = γmv',
                classical_limit: 'v << c → p ≈ mv'
            },
            mass_energy: {
                einstein: 'E = mc²',
                total_energy: 'E = γmc²',
                kinetic_energy: 'KE = (γ - 1)mc²',
                rest_energy: 'E₀ = mc²'
            },
            energy_momentum: {
                relation: 'E² = (pc)² + (mc²)²',
                massless_particles: 'E = pc (photons)'
            }
        },

        nuclear_physics: {
            nuclear_notation: {
                format: 'ᴬ_Z X',
                A: 'mass number (protons + neutrons)',
                Z: 'atomic number (protons)',
                N: 'neutron number (A - Z)'
            },
            decay_types_physics: [
                { type: 'alpha (α)', particle: '⁴₂He', change: 'A-4, Z-2', penetration: 'low' },
                { type: 'beta-minus (β⁻)', particle: 'electron', change: 'A same, Z+1', penetration: 'medium' },
                { type: 'beta-plus (β⁺)', particle: 'positron', change: 'A same, Z-1', penetration: 'medium' },
                { type: 'gamma (γ)', particle: 'photon', change: 'no change', penetration: 'high' }
            ],
            decay_law: {
                activity: 'N(t) = N₀ e^(-λt)',
                decay_constant: 'λ = ln(2)/t₁/₂',
                half_life: 't₁/₂ = 0.693/λ',
                activity_formula: 'A = λN (Becquerels)'
            },
            binding_energy: {
                definition: 'Energy to disassemble nucleus',
                formula: 'BE = Δmc²',
                mass_defect: 'Δm = (Zm_p + Nm_n) - m_nucleus',
                per_nucleon: 'BE/A (stability indicator)'
            },
            fission: {
                process: 'Heavy nucleus splits',
                example: '²³⁵U + n → fission products + neutrons + energy',
                chain_reaction: 'neutrons cause more fissions',
                critical_mass: 'minimum for sustained reaction'
            },
            fusion: {
                process: 'Light nuclei combine',
                example: '²H + ³H → ⁴He + n + energy',
                requirement: 'high temperature/pressure',
                stars: 'primary energy source'
            },
            radiation_units: [
                { unit: 'Becquerel (Bq)', measures: 'activity', definition: '1 decay/second' },
                { unit: 'Gray (Gy)', measures: 'absorbed dose', definition: '1 J/kg' },
                { unit: 'Sievert (Sv)', measures: 'effective dose', definition: 'biological effect' },
                { unit: 'Curie (Ci)', measures: 'activity (old)', conversion: '1 Ci = 3.7×10¹⁰ Bq' }
            ]
        }
    };
}



initializeBiologyDatabases() {
    this.biologyDatabases = {
        cell_biology: {
            cell_types: [
                { type: 'prokaryotic', nucleus: false, examples: ['bacteria', 'archaea'], size: '1-10 μm' },
                { type: 'eukaryotic', nucleus: true, examples: ['animal', 'plant', 'fungi', 'protist'], size: '10-100 μm' }
            ],
            organelles: [
                { name: 'nucleus', function: 'stores genetic material (DNA)', membrane: 'double', location: 'eukaryotic cells' },
                { name: 'mitochondria', function: 'cellular respiration, ATP production', membrane: 'double', nickname: 'powerhouse' },
                { name: 'chloroplast', function: 'photosynthesis', membrane: 'double', location: 'plant cells' },
                { name: 'endoplasmic reticulum', function: 'protein and lipid synthesis', types: ['rough (with ribosomes)', 'smooth (no ribosomes)'] },
                { name: 'Golgi apparatus', function: 'modify, package, transport proteins', structure: 'stacked membranes' },
                { name: 'ribosome', function: 'protein synthesis', membrane: false, location: 'all cells' },
                { name: 'lysosome', function: 'digestion, waste removal', membrane: 'single', location: 'animal cells' },
                { name: 'vacuole', function: 'storage, support', size: 'large in plant cells' },
                { name: 'cell wall', function: 'protection, structure', composition: 'cellulose (plants), peptidoglycan (bacteria)' }
            ],
            cell_membrane: [
                { component: 'phospholipid bilayer', structure: 'hydrophilic heads, hydrophobic tails', function: 'selective barrier' },
                { component: 'proteins', types: ['integral', 'peripheral'], function: 'transport, recognition, signaling' },
                { component: 'cholesterol', function: 'membrane fluidity', location: 'animal cells' },
                { component: 'carbohydrates', function: 'cell recognition', location: 'outer surface' }
            ],
            transport_mechanisms: [
                { type: 'passive transport', energy: 'no ATP required', examples: ['diffusion', 'osmosis', 'facilitated diffusion'] },
                { type: 'active transport', energy: 'requires ATP', direction: 'against concentration gradient', examples: ['sodium-potassium pump'] },
                { type: 'endocytosis', process: 'taking in materials', types: ['phagocytosis', 'pinocytosis', 'receptor-mediated'] },
                { type: 'exocytosis', process: 'releasing materials', example: 'secretion of hormones' }
            ],
            cell_division: [
                { type: 'mitosis', purpose: 'growth, repair, asexual reproduction', daughter_cells: '2 identical diploid cells', phases: ['prophase', 'metaphase', 'anaphase', 'telophase'] },
                { type: 'meiosis', purpose: 'gamete formation', daughter_cells: '4 non-identical haploid cells', divisions: 2, phases: ['meiosis I', 'meiosis II'] },
                { type: 'binary fission', purpose: 'prokaryotic reproduction', cells: 'bacteria' }
            ],
            cellular_respiration: [
                { stage: 'glycolysis', location: 'cytoplasm', products: '2 ATP, 2 NADH, 2 pyruvate', oxygen: 'not required' },
                { stage: 'Krebs cycle', location: 'mitochondrial matrix', products: '2 ATP, 6 NADH, 2 FADH2, CO2', oxygen: 'required' },
                { stage: 'electron transport chain', location: 'inner mitochondrial membrane', products: '~32-34 ATP', oxygen: 'final electron acceptor' },
                { total: 'aerobic respiration', equation: 'C6H12O6 + 6O2 → 6CO2 + 6H2O + ~36-38 ATP' }
            ],
            photosynthesis: [
                { stage: 'light reactions', location: 'thylakoid membranes', products: 'ATP, NADPH, O2', requires: 'light' },
                { stage: 'Calvin cycle', location: 'stroma', products: 'glucose (C6H12O6)', requires: 'ATP, NADPH, CO2' },
                { equation: 'overall', formula: '6CO2 + 6H2O + light → C6H12O6 + 6O2' },
                { factors: 'limiting factors', list: ['light intensity', 'CO2 concentration', 'temperature'] }
            ]
        },

        genetics: {
            dna_structure: [
                { component: 'double helix', discovered: 'Watson & Crick (1953)', structure: 'two antiparallel strands' },
                { component: 'nucleotide', parts: ['phosphate group', 'deoxyribose sugar', '5-carbon nitrogenous base'] },
                { bases: 'purines', types: ['adenine (A)', 'guanine (G)'], rings: 2 },
                { bases: 'pyrimidines', types: ['cytosine (C)', 'thymine (T)'], rings: 1 },
                { pairing: 'base pairs', rules: 'A-T (2 hydrogen bonds), G-C (3 hydrogen bonds)', complementary: true }
            ],
            central_dogma: [
                { process: 'replication', template: 'DNA', product: 'DNA', location: 'nucleus', enzyme: 'DNA polymerase' },
                { process: 'transcription', template: 'DNA', product: 'mRNA', location: 'nucleus', enzyme: 'RNA polymerase' },
                { process: 'translation', template: 'mRNA', product: 'protein', location: 'ribosome', reads: 'codons (3 bases)' }
            ],
            rna_types: [
                { type: 'mRNA', function: 'messenger RNA, carries genetic code', location: 'nucleus to ribosome' },
                { type: 'tRNA', function: 'transfer RNA, brings amino acids', structure: 'cloverleaf with anticodon' },
                { type: 'rRNA', function: 'ribosomal RNA, part of ribosome', location: 'ribosome structure' }
            ],
            genetic_code: [
                { feature: 'triplet code', definition: '3 bases = 1 codon = 1 amino acid', total_codons: 64 },
                { feature: 'start codon', codon: 'AUG', amino_acid: 'methionine' },
                { feature: 'stop codons', codons: ['UAA', 'UAG', 'UGA'], amino_acid: 'none (terminate)' },
                { feature: 'degeneracy', definition: 'multiple codons for same amino acid', redundancy: true },
                { feature: 'universal', applies: 'nearly all organisms', exceptions: 'few mitochondrial variations' }
            ],
            mendelian_genetics: [
                { law: 'Law of Segregation', statement: 'allele pairs separate during gamete formation', applies: 'single trait' },
                { law: 'Law of Independent Assortment', statement: 'genes for different traits assort independently', applies: 'multiple traits' },
                { law: 'Law of Dominance', statement: 'dominant allele masks recessive', notation: 'A (dominant), a (recessive)' }
            ],
            inheritance_patterns: [
                { pattern: 'complete dominance', example: 'Aa shows dominant phenotype', ratio: '3:1 (F2)' },
                { pattern: 'incomplete dominance', example: 'red × white = pink', ratio: '1:2:1 (F2)' },
                { pattern: 'codominance', example: 'AB blood type', both_expressed: true },
                { pattern: 'sex-linked', location: 'X or Y chromosome', example: 'hemophilia, color blindness' },
                { pattern: 'polygenic', genes: 'multiple genes', example: 'height, skin color' },
                { pattern: 'multiple alleles', alleles: 'more than 2', example: 'ABO blood types (IA, IB, i)' }
            ],
            mutations: [
                { type: 'point mutation', change: 'single nucleotide', examples: ['silent', 'missense', 'nonsense'] },
                { type: 'frameshift', cause: 'insertion or deletion', effect: 'shifts reading frame', severity: 'usually severe' },
                { type: 'chromosomal', scale: 'large DNA segments', types: ['deletion', 'duplication', 'inversion', 'translocation'] }
            ]
        },

        evolution: {
            natural_selection: [
                { principle: 'variation', statement: 'individuals in population vary', source: 'mutations, sexual reproduction' },
                { principle: 'heritability', statement: 'traits passed to offspring', requires: 'genetic basis' },
                { principle: 'overproduction', statement: 'more offspring than survive', competition: true },
                { principle: 'differential survival', statement: 'better adapted survive and reproduce', result: 'evolution' }
            ],
            mechanisms_of_evolution: [
                { mechanism: 'natural selection', effect: 'increases favorable traits', directional: true },
                { mechanism: 'genetic drift', effect: 'random allele frequency changes', important_in: 'small populations' },
                { mechanism: 'gene flow', effect: 'migration between populations', increases: 'genetic diversity' },
                { mechanism: 'mutation', effect: 'new alleles', source: 'ultimate source of variation' },
                { mechanism: 'sexual selection', effect: 'traits for mating success', example: 'peacock tail' }
            ],
            hardy_weinberg: [
                { equation: 'allele frequencies', formula: 'p + q = 1', variables: 'p (dominant), q (recessive)' },
                { equation: 'genotype frequencies', formula: 'p² + 2pq + q² = 1', genotypes: 'AA, Aa, aa' },
                { conditions: 'equilibrium requires', list: ['no mutation', 'random mating', 'no gene flow', 'large population', 'no selection'] },
                { use: 'predicts equilibrium', interpretation: 'if deviates, evolution occurring' }
            ],
            evidence_for_evolution: [
                { type: 'fossil record', shows: 'species changes over time', examples: 'transitional fossils' },
                { type: 'comparative anatomy', includes: ['homologous structures', 'analogous structures', 'vestigial structures'] },
                { type: 'embryology', observation: 'similar early development', example: 'vertebrate embryos' },
                { type: 'molecular biology', compares: 'DNA/protein sequences', more_similar: 'more closely related' },
                { type: 'biogeography', studies: 'geographic distribution', example: 'island species' }
            ],
            speciation: [
                { type: 'allopatric', mechanism: 'geographic isolation', common: true },
                { type: 'sympatric', mechanism: 'reproductive isolation (same area)', examples: 'polyploidy in plants' },
                { type: 'reproductive barriers', categories: ['prezygotic', 'postzygotic'], prevent: 'interbreeding' }
            ]
        },

        ecology: {
            ecosystem_components: [
                { component: 'producers', trophic_level: 1, organisms: 'autotrophs (plants, algae)', energy: 'sun → chemical' },
                { component: 'primary consumers', trophic_level: 2, organisms: 'herbivores', energy: 'eat producers' },
                { component: 'secondary consumers', trophic_level: 3, organisms: 'carnivores', energy: 'eat herbivores' },
                { component: 'tertiary consumers', trophic_level: 4, organisms: 'top carnivores', energy: 'eat other carnivores' },
                { component: 'decomposers', role: 'break down dead matter', organisms: 'bacteria, fungi', recycling: true }
            ],
            energy_flow: [
                { rule: '10% rule', energy_transfer: 'only ~10% passes to next level', lost_as: 'heat, metabolism' },
                { pyramid: 'energy pyramid', shape: 'always upright', base: 'largest (producers)' },
                { pyramid: 'biomass pyramid', measures: 'total mass of organisms', usually: 'upright' },
                { pyramid: 'numbers pyramid', measures: 'number of individuals', can_be: 'inverted' }
            ],
            nutrient_cycles: [
                { cycle: 'carbon cycle', key_processes: ['photosynthesis', 'respiration', 'combustion', 'decomposition'], reservoirs: 'atmosphere, ocean, fossil fuels' },
                { cycle: 'nitrogen cycle', key_processes: ['nitrogen fixation', 'nitrification', 'denitrification'], importance: 'proteins, nucleic acids' },
                { cycle: 'water cycle', key_processes: ['evaporation', 'condensation', 'precipitation', 'transpiration'], continuous: true },
                { cycle: 'phosphorus cycle', key_processes: ['weathering', 'absorption', 'decomposition'], no_gas_phase: true }
            ],
            population_ecology: [
                { concept: 'carrying capacity (K)', definition: 'maximum population size environment can support', limits: 'resources' },
                { growth: 'exponential', model: 'J-curve', occurs: 'unlimited resources', formula: 'dN/dt = rN' },
                { growth: 'logistic', model: 'S-curve', occurs: 'limited resources', formula: 'dN/dt = rN(K-N)/K' },
                { factors: 'density-dependent', examples: ['competition', 'predation', 'disease'], increase_with: 'population density' },
                { factors: 'density-independent', examples: ['weather', 'natural disasters'], not_affected_by: 'population density' }
            ],
            symbiotic_relationships: [
                { type: 'mutualism', interaction: '+/+', example: 'bees and flowers', both_benefit: true },
                { type: 'commensalism', interaction: '+/0', example: 'barnacles on whale', one_benefits: 'other unaffected' },
                { type: 'parasitism', interaction: '+/-', example: 'tapeworm in host', one_benefits: 'other harmed' },
                { type: 'predation', interaction: '+/-', example: 'lion eating zebra', one_kills: 'other for food' },
                { type: 'competition', interaction: '-/-', example: 'trees for sunlight', both_harmed: true }
            ],
            biomes: [
                { biome: 'tropical rainforest', climate: 'hot, wet year-round', biodiversity: 'highest', location: 'equator' },
                { biome: 'desert', climate: 'hot days, cold nights, very dry', precipitation: '<25 cm/year', adaptations: 'water storage' },
                { biome: 'grassland', climate: 'seasonal rain', vegetation: 'grasses', examples: 'savanna, prairie' },
                { biome: 'temperate forest', climate: 'four seasons', trees: 'deciduous', location: 'mid-latitudes' },
                { biome: 'taiga', climate: 'long cold winters', trees: 'coniferous', location: 'northern regions' },
                { biome: 'tundra', climate: 'extremely cold', vegetation: 'low-growing', permafrost: true }
            ]
        },

        human_anatomy: {
            circulatory_system: [
                { component: 'heart', chambers: 4, function: 'pumps blood', parts: ['2 atria', '2 ventricles'] },
                { component: 'blood vessels', types: ['arteries (away from heart)', 'veins (toward heart)', 'capillaries (exchange)'] },
                { pathway: 'pulmonary circulation', route: 'heart → lungs → heart', oxygenation: true },
                { pathway: 'systemic circulation', route: 'heart → body → heart', delivers: 'oxygen and nutrients' },
                { blood_components: 'plasma', percentage: '~55%', contains: 'water, proteins, nutrients, wastes' },
                { blood_components: 'red blood cells', function: 'carry oxygen', protein: 'hemoglobin' },
                { blood_components: 'white blood cells', function: 'immune defense', types: 'multiple' },
                { blood_components: 'platelets', function: 'blood clotting', fragments: true }
            ],
            respiratory_system: [
                { organ: 'nose/mouth', function: 'air intake, filtering, warming', entry_point: true },
                { organ: 'trachea', function: 'air passage to lungs', structure: 'cartilage rings' },
                { organ: 'bronchi', function: 'branch into lungs', divide_into: 'bronchioles' },
                { organ: 'alveoli', function: 'gas exchange', structure: 'tiny air sacs', surface_area: 'large' },
                { organ: 'diaphragm', function: 'breathing muscle', contracts: 'inhalation' },
                { process: 'inhalation', diaphragm: 'contracts (down)', chest: 'expands', pressure: 'decreases' },
                { process: 'exhalation', diaphragm: 'relaxes (up)', chest: 'contracts', pressure: 'increases' },
                { gas_exchange: 'O2 and CO2', mechanism: 'diffusion', location: 'alveoli-capillary interface' }
            ],
            digestive_system: [
                { organ: 'mouth', processes: 'mechanical (chewing), chemical (saliva)', enzyme: 'amylase (starch)' },
                { organ: 'esophagus', function: 'transport to stomach', movement: 'peristalsis' },
                { organ: 'stomach', processes: 'churning, acid digestion', pH: '~2', enzyme: 'pepsin (protein)' },
                { organ: 'small intestine', parts: ['duodenum', 'jejunum', 'ileum'], function: 'nutrient absorption', length: '~6 meters' },
                { organ: 'large intestine', function: 'water absorption, feces formation', bacteria: 'beneficial microbiome' },
                { organ: 'liver', functions: ['bile production', 'detoxification', 'nutrient storage'], largest_gland: true },
                { organ: 'pancreas', secretes: ['digestive enzymes', 'insulin', 'glucagon'], dual_function: true },
                { organ: 'gallbladder', function: 'stores bile', releases: 'fat digestion' }
            ],
            nervous_system: [
                { division: 'central nervous system (CNS)', parts: ['brain', 'spinal cord'], function: 'control center' },
                { division: 'peripheral nervous system (PNS)', parts: ['nerves throughout body'], connects: 'CNS to body' },
                { subdivision: 'somatic', controls: 'voluntary movements', example: 'skeletal muscles' },
                { subdivision: 'autonomic', controls: 'involuntary functions', divisions: ['sympathetic', 'parasympathetic'] },
                { cell: 'neuron', parts: ['dendrites', 'cell body', 'axon', 'axon terminals'], function: 'transmit signals' },
                { process: 'action potential', type: 'electrical signal', speed: 'up to 120 m/s', all_or_none: true },
                { process: 'synapse', type: 'chemical signal', neurotransmitters: ['acetylcholine', 'dopamine', 'serotonin'] }
            ],
            endocrine_system: [
                { gland: 'pituitary', location: 'brain', role: 'master gland', hormones: 'multiple (growth hormone, etc.)' },
                { gland: 'thyroid', location: 'neck', hormone: 'thyroxine', regulates: 'metabolism' },
                { gland: 'adrenal', location: 'above kidneys', hormones: 'adrenaline, cortisol', response: 'stress' },
                { gland: 'pancreas', hormones: 'insulin, glucagon', regulates: 'blood glucose' },
                { gland: 'ovaries', sex: 'female', hormones: 'estrogen, progesterone', functions: 'reproduction, secondary sex characteristics' },
                { gland: 'testes', sex: 'male', hormone: 'testosterone', functions: 'reproduction, secondary sex characteristics' }
            ],
            excretory_system: [
                { organ: 'kidneys', function: 'filter blood, produce urine', units: 'nephrons (~1 million each)' },
                { organ: 'ureters', function: 'transport urine to bladder', number: 2 },
                { organ: 'bladder', function: 'store urine', capacity: '~400-600 mL' },
                { organ: 'urethra', function: 'eliminate urine', exit_pathway: true },
                { process: 'filtration', location: 'glomerulus', filters: 'blood plasma' },
                { process: 'reabsorption', location: 'tubules', recovers: 'water, glucose, ions' },
                { process: 'secretion', location: 'tubules', removes: 'wastes, excess ions' }
            ]
        },

        plants: {
            plant_structure: [
                { organ: 'roots', functions: ['anchor plant', 'absorb water/minerals', 'store food'], types: ['taproot', 'fibrous'] },
                { organ: 'stem', functions: ['support', 'transport', 'storage'], tissues: ['xylem', 'phloem'] },
                { organ: 'leaves', function: 'photosynthesis', parts: ['blade', 'petiole', 'veins'], openings: 'stomata' },
                { organ: 'flowers', function: 'reproduction', parts: ['sepals', 'petals', 'stamens', 'pistil'] }
            ],
            plant_tissues: [
                { tissue: 'xylem', transports: 'water and minerals', direction: 'roots → leaves', cells: 'dead (hollow tubes)' },
                { tissue: 'phloem', transports: 'sugars (nutrients)', direction: 'leaves → rest of plant', cells: 'living' },
                { tissue: 'meristem', function: 'growth regions', types: ['apical (length)', 'lateral (width)'], cells: 'undifferentiated' },
                { tissue: 'epidermis', function: 'protective outer layer', features: 'cuticle, stomata' },
                { tissue: 'ground tissue', functions: ['photosynthesis', 'storage', 'support'], types: ['parenchyma', 'collenchyma', 'sclerenchyma'] }
            ],
            plant_transport: [
                { process: 'transpiration', definition: 'water loss through stomata', creates: 'pull on water column' },
                { process: 'cohesion-tension', mechanism: 'water molecules stick together', pulls: 'water up xylem' },
                { process: 'root pressure', mechanism: 'active transport into roots', pushes: 'water up' },
                { process: 'translocation', definition: 'movement of sugars in phloem', mechanism: 'pressure flow model' },
                { structure: 'stomata', function: 'gas exchange (CO2 in, O2 out)', regulated_by: 'guard cells' }
            ],
            plant_hormones: [
                { hormone: 'auxin', functions: ['cell elongation', 'apical dominance', 'phototropism'], movement: 'away from light' },
                { hormone: 'gibberellin', functions: ['stem elongation', 'seed germination', 'flowering'], promotes: 'growth' },
                { hormone: 'cytokinin', functions: ['cell division', 'delays aging'], location: 'roots' },
                { hormone: 'abscisic acid (ABA)', functions: ['stomata closure', 'seed dormancy'], stress_hormone: true },
                { hormone: 'ethylene', functions: ['fruit ripening', 'leaf abscission'], gas: true }
            ],
            tropisms: [
                { type: 'phototropism', stimulus: 'light', response: 'grow toward light', mechanism: 'auxin redistribution' },
                { type: 'gravitropism', stimulus: 'gravity', response: 'roots down, shoots up', senses: 'statoliths' },
                { type: 'thigmotropism', stimulus: 'touch', response: 'coiling around support', example: 'vines' },
                { type: 'hydrotropism', stimulus: 'water', response: 'roots grow toward water', survival: true }
            ],
            plant_reproduction: [
                { type: 'sexual', structures: 'flowers', produces: 'seeds', genetic_variation: true },
                { process: 'pollination', agents: ['wind', 'insects', 'birds', 'water'], transfers: 'pollen to stigma' },
                { process: 'fertilization', occurs: 'pollen tube to ovule', forms: 'zygote (embryo)' },
                { process: 'seed formation', parts: ['embryo', 'endosperm (food)', 'seed coat'], develops_into: 'new plant' },
                { type: 'asexual', methods: ['runners', 'bulbs', 'tubers', 'fragmentation'], genetic_variation: false }
            ]
        },

        microbiology: {
            bacteria: [
                { characteristic: 'structure', type: 'prokaryotic', size: '0.5-5 μm', shapes: ['cocci (spherical)', 'bacilli (rod)', 'spirilla (spiral)'] },
                { characteristic: 'cell wall', component: 'peptidoglycan', gram_staining: ['gram-positive (thick)', 'gram-negative (thin)'] },
                { characteristic: 'reproduction', method: 'binary fission', speed: 'rapid (20 min - hours)', asexual: true },
                { characteristic: 'metabolism', types: ['aerobic', 'anaerobic', 'facultative'], energy: 'varied sources' },
                { characteristic: 'beneficial roles', examples: ['gut flora', 'nitrogen fixation', 'food production (yogurt)'], essential: true },
                { characteristic: 'harmful roles', examples: ['pathogens', 'food spoilage', 'infections'], antibiotics: 'treatment' }
            ],
            viruses: [
                { characteristic: 'structure', components: ['protein coat (capsid)', 'genetic material (DNA or RNA)'], envelope: 'some have lipid envelope' },
                { characteristic: 'size', range: '20-300 nm', smaller_than: 'bacteria', visible: 'electron microscope only' },
                { characteristic: 'living status', debate: 'not considered alive', requires: 'host cell to reproduce' },
                { cycle: 'lytic cycle', steps: ['attach', 'inject DNA', 'replicate', 'assemble', 'lyse (burst)'], host_cell: 'destroyed' },
                { cycle: 'lysogenic cycle', process: 'viral DNA integrates into host', latent: true, can_switch: 'to lytic' },
                { examples: 'diseases', list: ['influenza', 'HIV', 'COVID-19', 'common cold', 'measles'] }
            ],
            fungi: [
                { characteristic: 'structure', type: 'eukaryotic', body: 'mycelium (hyphae network)', cell_wall: 'chitin' },
                { characteristic: 'nutrition', mode: 'heterotrophic', method: 'absorption', types: ['saprophytes', 'parasites', 'mutualists'] },
                { characteristic: 'reproduction', methods: ['spores (asexual)', 'sexual reproduction'], dispersal: 'wind, water, animals' },
                { examples: 'beneficial', list: ['decomposers', 'food (mushrooms)', 'antibiotics (penicillin)', 'yeast (baking)'] },
                { examples: 'harmful', list: ['athlete\'s foot', 'ringworm', 'plant diseases', 'food spoilage'] }
            ],
            protists: [
                { group: 'animal-like (protozoa)', examples: ['amoeba', 'paramecium', 'euglena'], nutrition: 'heterotrophic', movement: 'varied' },
                { group: 'plant-like (algae)', examples: ['diatoms', 'kelp', 'seaweed'], nutrition: 'photosynthetic', importance: 'oxygen production' },
                { group: 'fungus-like', examples: ['slime molds', 'water molds'], nutrition: 'absorption', similar_to: 'fungi' },
                { characteristic: 'diversity', note: 'catch-all kingdom', mostly: 'unicellular', some: 'multicellular' }
            ]
        },

        biotechnology: {
            genetic_engineering: [
                { technique: 'recombinant DNA', process: 'combine DNA from different sources', tools: ['restriction enzymes', 'ligase'], creates: 'GMOs' },
                { technique: 'gene cloning', process: 'make copies of gene', uses: 'plasmids in bacteria', produces: 'proteins (insulin)' },
                { technique: 'transformation', process: 'insert foreign DNA into cell', methods: ['heat shock', 'electroporation'] },
                { application: 'medicine', examples: ['insulin production', 'growth hormone', 'vaccines'] },
                { application: 'agriculture', examples: ['pest-resistant crops', 'drought tolerance', 'golden rice (vitamin A)'] }
            ],
            pcr: [
                { full_name: 'Polymerase Chain Reaction', purpose: 'amplify DNA', result: 'millions of copies' },
                { step: '1. Denaturation', temperature: '94-96°C', action: 'separate DNA strands' },
                { step: '2. Annealing', temperature: '50-65°C', action: 'primers bind to DNA' },
                { step: '3. Extension', temperature: '72°C', action: 'DNA polymerase copies strand', enzyme: 'Taq polymerase' },
                { cycles: 'repeat', number: '25-35 cycles', exponential: 'doubling each cycle' },
                { applications: 'uses', list: ['forensics', 'medical diagnosis', 'paternity testing', 'research'] }
            ],
            gel_electrophoresis: [
                { purpose: 'separate DNA fragments', basis: 'size', movement: 'negative DNA to positive electrode' },
                { process: 'setup', components: ['gel (agarose)', 'buffer', 'electric field'], voltage: 'applied' },
                { process: 'migration', pattern: 'smaller fragments travel farther', bands: 'visible under UV light' },
                { application: 'DNA fingerprinting', compares: 'DNA patterns', uses: ['forensics', 'paternity', 'identification'] }
            ],
            crispr: [
                { full_name: 'Clustered Regularly Interspaced Short Palindromic Repeats', discovered: 'bacteria immune system' },
                { components: 'Cas9', function: 'enzyme that cuts DNA', guided_by: 'guide RNA (gRNA)' },
                { process: 'gene editing', steps: ['design gRNA', 'Cas9 cuts target', 'cell repairs DNA'], precision: 'high' },
                { applications: 'potential', list: ['cure genetic diseases', 'cancer treatment', 'agriculture improvement'] },
                { concerns: 'ethical', issues: ['designer babies', 'unintended effects', 'accessibility'] }
            ],
            cloning: [
                { type: 'reproductive cloning', goal: 'create organism', example: 'Dolly the sheep', method: 'SCNT' },
                { type: 'therapeutic cloning', goal: 'create stem cells', purpose: 'medical treatment', not: 'full organism' },
                { process: 'SCNT', full_name: 'Somatic Cell Nuclear Transfer', steps: ['remove egg nucleus', 'insert somatic cell nucleus', 'stimulate division'] }
            ]
        },

        reproduction_development: {
            asexual_reproduction: [
                { type: 'binary fission', organisms: 'bacteria, protists', process: 'cell splits in two', identical: true },
                { type: 'budding', organisms: 'yeast, hydra', process: 'outgrowth forms new individual', attached: 'initially' },
                { type: 'fragmentation', organisms: 'starfish, planaria', process: 'body breaks, each part regenerates', multiple: true },
                { type: 'vegetative propagation', organisms: 'plants', examples: ['runners', 'tubers', 'bulbs'], cuttings: 'possible' },
                { advantage: 'speed', note: 'rapid reproduction', no_mate: 'required' },
                { disadvantage: 'diversity', note: 'no genetic variation', adaptation: 'limited' }
            ],
            sexual_reproduction: [
                { process: 'gametogenesis', male: 'spermatogenesis (4 sperm)', female: 'oogenesis (1 egg)', meiosis: true },
                { process: 'fertilization', union: 'sperm + egg', forms: 'zygote (diploid)', restores: 'chromosome number' },
                { advantage: 'genetic variation', source: ['crossing over', 'independent assortment', 'random fertilization'], evolution: 'beneficial' },
                { disadvantage: 'energy', requires: ['finding mate', 'courtship', 'parental care'], slower: 'than asexual' }
            ],
            embryonic_development: [
                { stage: 'cleavage', process: 'rapid cell division', cells: 'get smaller', no_growth: true },
                { stage: 'blastula', structure: 'hollow ball of cells', cavity: 'blastocoel' },
                { stage: 'gastrulation', process: 'cells migrate inward', forms: 'three germ layers', critical: true },
                { germ_layer: 'ectoderm', develops_into: ['skin', 'nervous system', 'sense organs'], outer: true },
                { germ_layer: 'mesoderm', develops_into: ['muscles', 'bones', 'circulatory system', 'kidneys'], middle: true },
                { germ_layer: 'endoderm', develops_into: ['digestive tract', 'respiratory system', 'liver', 'pancreas'], inner: true },
                { stage: 'organogenesis', process: 'organs form from germ layers', differentiation: true }
            ],
            human_reproduction: [
                { male: 'testes', produces: 'sperm', hormone: 'testosterone', continuous: 'from puberty' },
                { male: 'pathway', route: 'testes → epididymis → vas deferens → urethra', glands: 'seminal vesicles, prostate' },
                { female: 'ovaries', produces: 'eggs (ova)', hormones: 'estrogen, progesterone', cyclic: true },
                { female: 'pathway', route: 'ovary → fallopian tube → uterus', fertilization: 'usually in fallopian tube' },
                { cycle: 'menstrual cycle', length: '~28 days', phases: ['menstruation', 'follicular', 'ovulation', 'luteal'] },
                { pregnancy: 'gestation', duration: '~40 weeks (9 months)', stages: ['1st trimester', '2nd trimester', '3rd trimester'] }
            ]
        },

        immunology: {
            immune_system_components: [
                { component: 'white blood cells', types: ['phagocytes', 'lymphocytes'], function: 'defense against pathogens' },
                { component: 'lymphocytes', types: ['B cells (antibodies)', 'T cells (cell-mediated)'], adaptive: true },
                { component: 'antibodies', structure: 'Y-shaped proteins', function: 'bind to antigens', produced_by: 'B cells' },
                { component: 'antigens', definition: 'foreign substances', trigger: 'immune response', examples: ['proteins', 'toxins', 'pathogens'] }
            ],
            immune_responses: [
                { type: 'innate immunity', response: 'immediate', specificity: 'non-specific', components: ['skin', 'mucus', 'phagocytes', 'inflammation'] },
                { type: 'adaptive immunity', response: 'slower (days)', specificity: 'specific', components: ['B cells', 'T cells'], memory: true },
                { process: 'cell-mediated', cells: 'T cells', targets: 'infected cells, cancer cells', cytotoxic: 'T cells kill' },
                { process: 'humoral', cells: 'B cells', produces: 'antibodies', targets: 'pathogens in body fluids' }
            ],
            immune_memory: [
                { exposure: 'primary response', timeline: '1-2 weeks', antibody_level: 'low initially', memory_cells: 'formed' },
                { exposure: 'secondary response', timeline: '2-7 days', antibody_level: 'much higher', faster: true, reason: 'memory cells' },
                { application: 'vaccination', contains: 'weakened/killed pathogen or parts', creates: 'memory cells', prevents: 'future disease' }
            ],
            vaccines: [
                { type: 'live attenuated', contains: 'weakened pathogen', examples: ['MMR', 'chickenpox'], immune_response: 'strong' },
                { type: 'inactivated', contains: 'killed pathogen', examples: ['polio (IPV)', 'flu shot'], boosters: 'may need' },
                { type: 'subunit', contains: 'pathogen parts', examples: ['HPV', 'hepatitis B'], specific: 'antigens only' },
                { type: 'mRNA', contains: 'genetic instructions', examples: ['COVID-19 (Pfizer, Moderna)'], novel: true },
                { concept: 'herd immunity', definition: 'enough people immune', protects: 'vulnerable individuals', threshold: 'varies by disease' }
            ],
            disorders: [
                { type: 'autoimmune', problem: 'attacks own cells', examples: ['type 1 diabetes', 'rheumatoid arthritis', 'lupus'] },
                { type: 'immunodeficiency', problem: 'weak immune system', examples: ['AIDS (HIV)', 'SCID'], vulnerable: 'infections' },
                { type: 'allergies', problem: 'overreaction to harmless substance', triggers: ['pollen', 'food', 'dust'], response: 'histamine release' }
            ]
        },

        taxonomy: {
            classification_hierarchy: [
                { level: 'Domain', largest: true, groups: ['Bacteria', 'Archaea', 'Eukarya'] },
                { level: 'Kingdom', examples: ['Animalia', 'Plantae', 'Fungi', 'Protista'] },
                { level: 'Phylum', example: 'Chordata (animals with notochord)' },
                { level: 'Class', example: 'Mammalia (mammals)' },
                { level: 'Order', example: 'Primates' },
                { level: 'Family', example: 'Hominidae (great apes)' },
                { level: 'Genus', example: 'Homo', capitalized: true },
                { level: 'Species', example: 'sapiens', smallest: true, lowercase: true },
                { mnemonic: 'Dear King Philip Came Over For Good Soup', helps: 'remember order' }
            ],
            binomial_nomenclature: [
                { system: 'two-part name', format: 'Genus species', example: 'Homo sapiens', developed_by: 'Linnaeus' },
                { rule: 'genus capitalized', example: 'Homo', italicized: true },
                { rule: 'species lowercase', example: 'sapiens', italicized: true },
                { purpose: 'universal naming', avoids: 'common name confusion', language: 'Latin/Greek' }
            ],
            domains: [
                { domain: 'Bacteria', cell_type: 'prokaryotic', examples: ['E. coli', 'Streptococcus'], peptidoglycan: true },
                { domain: 'Archaea', cell_type: 'prokaryotic', examples: ['methanogens', 'halophiles'], extreme_environments: 'often' },
                { domain: 'Eukarya', cell_type: 'eukaryotic', kingdoms: ['Protista', 'Fungi', 'Plantae', 'Animalia'], nucleus: true }
            ]
        },

        homeostasis: {
            definition: [
                { concept: 'homeostasis', definition: 'maintaining stable internal conditions', despite: 'external changes', essential: 'survival' },
                { regulated: 'body temperature', example: 'humans ~37°C (98.6°F)' },
                { regulated: 'blood glucose', range: '70-110 mg/dL', hormones: 'insulin, glucagon' },
                { regulated: 'pH', blood_pH: '~7.4', buffers: 'maintain' },
                { regulated: 'water balance', mechanisms: ['kidneys', 'ADH hormone'], osmosis: true }
            ],
            feedback_mechanisms: [
                { type: 'negative feedback', effect: 'reverses change', common: 'most homeostatic mechanisms', example: 'body temperature' },
                { example: 'temperature regulation', hot: 'sweating, vasodilation', cold: 'shivering, vasoconstriction', goal: 'return to set point' },
                { type: 'positive feedback', effect: 'amplifies change', rare: true, examples: ['childbirth (oxytocin)', 'blood clotting'] }
            ],
            thermoregulation: [
                { when: 'too hot', responses: ['sweating', 'vasodilation', 'decreased metabolism'], cools: 'body' },
                { when: 'too cold', responses: ['shivering', 'vasoconstriction', 'increased metabolism'], warms: 'body' },
                { animals: 'endotherms', regulation: 'internal', examples: ['mammals', 'birds'], constant: 'body temperature' },
                { animals: 'ectotherms', regulation: 'external (behavior)', examples: ['reptiles', 'fish'], variable: 'body temperature' }
            ],
            blood_glucose_regulation: [
                { condition: 'high blood sugar', hormone: 'insulin', source: 'pancreas beta cells', effect: 'cells take up glucose', storage: 'glycogen' },
                { condition: 'low blood sugar', hormone: 'glucagon', source: 'pancreas alpha cells', effect: 'liver releases glucose', breakdown: 'glycogen' },
                { disease: 'diabetes type 1', problem: 'no insulin production', treatment: 'insulin injections', autoimmune: true },
                { disease: 'diabetes type 2', problem: 'insulin resistance', treatment: 'diet, exercise, medication', lifestyle: 'related' }
            ],
            osmoregulation: [
                { organ: 'kidneys', function: 'filter blood, regulate water', units: 'nephrons' },
                { hormone: 'ADH (antidiuretic)', source: 'pituitary', effect: 'kidneys reabsorb more water', urine: 'concentrated' },
                { condition: 'dehydration', response: 'more ADH', result: 'less urine output', conserve: 'water' },
                { condition: 'overhydration', response: 'less ADH', result: 'more urine output', eliminate: 'excess water' }
            ]
        },

        energy_systems: {
            atp_structure: [
                { molecule: 'ATP', full_name: 'Adenosine Triphosphate', components: ['adenine', 'ribose', '3 phosphate groups'] },
                { bond: 'high-energy', location: 'between phosphates', breaks: 'releases energy', formula: 'ATP → ADP + Pi + energy' },
                { use: 'energy currency', powers: ['muscle contraction', 'active transport', 'synthesis reactions'], universal: true }
            ],
            cellular_respiration_detail: [
                { stage: 'glycolysis', location: 'cytoplasm', input: 'glucose', output: '2 pyruvate, 2 ATP, 2 NADH', oxygen: 'not required' },
                { stage: 'pyruvate oxidation', location: 'mitochondrial matrix', input: '2 pyruvate', output: '2 acetyl-CoA, 2 NADH, 2 CO2', transition: true },
                { stage: 'Krebs cycle', location: 'mitochondrial matrix', input: '2 acetyl-CoA', output: '4 CO2, 6 NADH, 2 FADH2, 2 ATP', circular: true },
                { stage: 'electron transport chain', location: 'inner mitochondrial membrane', input: 'NADH, FADH2', output: '~32-34 ATP, H2O', oxygen: 'final electron acceptor' },
                { total: 'complete aerobic', glucose_input: 1, atp_output: '~36-38 ATP', efficiency: '~40%' }
            ],
            fermentation: [
                { type: 'lactic acid fermentation', organisms: ['muscle cells', 'bacteria'], product: 'lactic acid', atp: '2 (from glycolysis only)' },
                { type: 'alcoholic fermentation', organisms: ['yeast', 'some bacteria'], products: 'ethanol + CO2', uses: 'bread, beer, wine' },
                { purpose: 'anaerobic', when: 'no oxygen', regenerates: 'NAD+ for glycolysis', inefficient: 'only 2 ATP' }
            ],
            photosynthesis_detail: [
                { stage: 'light-dependent reactions', location: 'thylakoid membranes', requires: 'light', produces: ['ATP', 'NADPH', 'O2'] },
                { process: 'photosystem II', action: 'splits water', releases: 'O2', energizes: 'electrons' },
                { process: 'photosystem I', action: 'further energizes electrons', produces: 'NADPH' },
                { stage: 'light-independent (Calvin cycle)', location: 'stroma', requires: ['CO2', 'ATP', 'NADPH'], produces: 'glucose (G3P)' },
                { cycle: 'CO2 fixation', enzyme: 'RuBisCO', combines: 'CO2 + RuBP' },
                { cycle: 'reduction', uses: 'ATP and NADPH', forms: 'G3P (3-carbon sugar)' },
                { cycle: 'regeneration', regenerates: 'RuBP', continues: 'cycle', requires: '3 CO2 for 1 G3P output' }
            ]
        },

        dna_technology: {
            dna_fingerprinting: [
                { technique: 'RFLP', full_name: 'Restriction Fragment Length Polymorphism', uses: 'restriction enzymes', older: true },
                { technique: 'STR analysis', full_name: 'Short Tandem Repeats', current_standard: true, regions: 'repetitive DNA' },
                { process: 'collect DNA', sources: ['blood', 'hair', 'saliva', 'skin cells'], crime_scene: 'evidence' },
                { process: 'amplify', method: 'PCR', creates: 'many copies' },
                { process: 'separate', method: 'gel electrophoresis', pattern: 'unique banding' },
                { process: 'compare', matches: 'suspect to evidence', probability: 'statistical analysis' }
            ],
            forensic_applications: [
                { use: 'crime scene investigation', identifies: 'suspects', evidence: 'biological material' },
                { use: 'paternity testing', compares: 'child and alleged father', accuracy: '>99%' },
                { use: 'identification', purposes: ['disaster victims', 'missing persons'], databases: 'CODIS (US)' },
                { use: 'exoneration', frees: 'wrongly convicted', evidence: 'DNA proves innocence' }
            ],
            gene_therapy: [
                { approach: 'gene replacement', replaces: 'defective gene with functional', delivery: 'virus vector' },
                { approach: 'gene augmentation', adds: 'normal gene copy', defective: 'remains but supplemented' },
                { approach: 'gene editing', uses: 'CRISPR', corrects: 'mutation directly' },
                { target: 'somatic cells', affects: 'individual only', not_inherited: true },
                { target: 'germline cells', affects: 'future generations', controversial: 'ethical concerns' },
                { challenges: 'current', issues: ['delivery efficiency', 'immune response', 'off-target effects', 'cost'] }
            ]
        }
    };
}


/**
//=========================================
PHYSICS GENERATORS
*/

//========================================================//


// ==================== MECHANICS GENERATORS WITH DIAGRAMS ====================

generateRelatedKinematics1D(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    
    // Original problems without diagrams (keep existing)
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Uniform Acceleration',
        problem: `A car accelerates from rest at 3 m/s² for 8 seconds. Find final velocity and distance traveled.`,
        parameters: { initialVelocity: 0, acceleration: 3, time: 8, findVelocityAndDistance: true },
        type: 'kinematics_1d',
        subparts: [
            'Identify given: u = 0, a = 3 m/s², t = 8 s',
            'Use v = u + at to find final velocity',
            'Use s = ut + ½at² to find distance',
            'Calculate v = 0 + 3(8) = 24 m/s',
            'Calculate s = 0 + ½(3)(8²) = 96 m'
        ],
        helper: 'formulas: v = u + at, s = ut + ½at², v² = u² + 2as',
        realWorldContext: 'Vehicle acceleration analysis'
    });

    // NEW: Problem with velocity-time graph
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Motion Analysis with v-t Graph',
        problem: 'Analyze the velocity-time graph showing a car that accelerates for 2s to 10 m/s, travels at constant velocity for 3s, then decelerates to rest in 2s. Find total displacement.',
        parameters: {
            graphType: 'velocity-time',
            segments: [
                { time: 0, value: 0, label: 'Rest' },
                { time: 2, value: 10, label: 'Accelerating' },
                { time: 5, value: 10, label: 'Constant velocity' },
                { time: 7, value: 0, label: 'Decelerating' }
            ]
        },
        type: 'kinematics_1d',
        subparts: [
            'Displacement = area under v-t graph',
            'Phase 1 (0-2s): Triangle area = ½ × 2 × 10 = 10 m',
            'Phase 2 (2-5s): Rectangle area = 3 × 10 = 30 m',
            'Phase 3 (5-7s): Triangle area = ½ × 2 × 10 = 10 m',
            'Total displacement = 10 + 30 + 10 = 50 m'
        ],
        helper: 'Area under v-t graph gives displacement; Slope of v-t graph gives acceleration',
        realWorldContext: 'Trip analysis using graphs',
        diagramInfo: {
            type: 'motion_graphs',
            registryKey: 'motionGraphs',
            renderOptions: {
                graphType: 'velocity-time',
                segments: [
                    { time: 0, value: 0, label: 'Rest' },
                    { time: 2, value: 10, label: 'Accelerating' },
                    { time: 5, value: 10, label: 'Constant velocity' },
                    { time: 7, value: 0, label: 'Decelerating' }
                ],
                showArea: true,
                showSlope: true,
                showGrid: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_motion_graph_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedKinematics2D(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Vector Addition in 2D Motion',
        problem: 'A boat travels 40 m east, then 30 m north. Find the resultant displacement vector and direction.',
        parameters: {
            vectors: [
                { x: 40, y: 0, label: 'East', color: '#E74C3C' },
                { x: 0, y: 30, label: 'North', color: '#3498DB' }
            ],
            showResultant: true
        },
        type: 'kinematics_2d',
        subparts: [
            'Draw displacement vectors tip-to-tail',
            'Resultant magnitude: R = √(40² + 30²) = √(1600 + 900) = 50 m',
            'Direction: θ = tan⁻¹(30/40) = tan⁻¹(0.75) = 36.9° north of east',
            'Resultant: 50 m at 36.9° from east'
        ],
        helper: 'Use Pythagorean theorem for magnitude; Use tan⁻¹(y/x) for angle',
        realWorldContext: 'Navigation and displacement problems',
        diagramInfo: {
            type: 'vector_diagram',
            registryKey: 'vectorDiagram',
            renderOptions: {
                vectors: [
                    { x: 40, y: 30, label: 'A', color: '#E74C3C' },
                    { x: 30, y: -20, label: 'B', color: '#3498DB' }
                ],
                showComponents: true,
                showResultant: true,
                showGrid: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_vector_diagram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedProjectileMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Projectile Motion Trajectory',
        problem: 'A ball is thrown at 20 m/s at 45° above horizontal. Draw the trajectory and find maximum height and range. (g = 10 m/s²)',
        parameters: {
            initialVelocity: 20,
            launchAngle: 45,
            gravity: 10
        },
        type: 'projectile_motion',
        subparts: [
            'Horizontal component: vₓ = 20 cos(45°) = 14.14 m/s',
            'Vertical component: vᵧ = 20 sin(45°) = 14.14 m/s',
            'Maximum height: H = vᵧ²/(2g) = (14.14)²/20 = 10 m',
            'Time of flight: T = 2vᵧ/g = 2(14.14)/10 = 2.83 s',
            'Range: R = vₓ × T = 14.14 × 2.83 = 40 m'
        ],
        helper: 'Horizontal motion: uniform velocity; Vertical motion: uniformly accelerated (a = -g)',
        realWorldContext: 'Sports projectiles, ballistics',
        diagramInfo: {
            type: 'projectile_motion',
            registryKey: 'projectileMotion',
            renderOptions: {
                initialVelocity: 20,
                launchAngle: 45,
                showVelocityVectors: true,
                showComponents: true,
                showTrajectory: true,
                showRange: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_projectile_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedNewtonsLaws(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Free Body Diagram Analysis',
        problem: 'A 5 kg box rests on a table. Draw the free body diagram showing all forces. If a 20 N horizontal force is applied, find acceleration.',
        parameters: {
            mass: 5,
            appliedForce: 20,
            forces: [
                { name: 'Weight', magnitude: 49, angle: 270, color: '#E74C3C' },
                { name: 'Normal', magnitude: 49, angle: 90, color: '#3498DB' },
                { name: 'Applied', magnitude: 20, angle: 0, color: '#2ECC71' }
            ]
        },
        type: 'newtons_laws',
        subparts: [
            'Weight: W = mg = 5 × 9.8 = 49 N (downward)',
            'Normal force: N = 49 N (upward)',
            'Applied force: F = 20 N (horizontal)',
            'Net force: Fₙₑₜ = 20 N (horizontal)',
            'Acceleration: a = F/m = 20/5 = 4 m/s²'
        ],
        helper: 'Newton\'s 2nd Law: F = ma; Forces in equilibrium: ΣF = 0',
        realWorldContext: 'Understanding forces on objects',
        diagramInfo: {
            type: 'free_body_diagram',
            registryKey: 'freeBodyDiagram',
            renderOptions: {
                forces: [
                    { name: 'Weight', magnitude: 50, angle: 270, color: '#E74C3C' },
                    { name: 'Normal', magnitude: 50, angle: 90, color: '#3498DB' },
                    { name: 'Applied', magnitude: 30, angle: 0, color: '#2ECC71' }
                ],
                showLabels: true,
                showMagnitudes: true,
                showAngles: false
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_free_body_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedFriction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Friction on Inclined Plane',
        problem: 'A 10 kg box rests on a 30° incline. Draw forces and find friction force if μₛ = 0.4. (g = 10 m/s²)',
        parameters: {
            mass: 10,
            angle: 30,
            frictionCoeff: 0.4,
            includeComponents: true
        },
        type: 'friction',
        subparts: [
            'Weight: W = mg = 10 × 10 = 100 N',
            'Component parallel to incline: W∥ = mg sin(30°) = 100 × 0.5 = 50 N',
            'Component perpendicular: W⊥ = mg cos(30°) = 100 × 0.866 = 86.6 N',
            'Normal force: N = W⊥ = 86.6 N',
            'Maximum static friction: fₛ = μₛN = 0.4 × 86.6 = 34.6 N',
            'Since W∥ (50N) > fₛ (34.6N), box will slide'
        ],
        helper: 'Resolve weight into components; Normal force N = W⊥; Friction f = μN',
        realWorldContext: 'Objects on slopes and ramps',
        diagramInfo: {
            type: 'inclined_plane',
            registryKey: 'inclinedPlane',
            renderOptions: {
                angle: 30,
                mass: 10,
                showForceComponents: true,
                showAngles: true,
                showFriction: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_inclined_plane_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCircularMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Centripetal Force in Circular Motion',
        problem: 'A 2 kg ball moves in a circle of radius 1.5 m at 6 m/s. Draw the motion and find centripetal force and acceleration.',
        parameters: {
            mass: 2,
            radius: 1.5,
            velocity: 6
        },
        type: 'circular_motion',
        subparts: [
            'Centripetal acceleration: aᴄ = v²/r = 6²/1.5 = 36/1.5 = 24 m/s²',
            'Centripetal force: Fᴄ = maᴄ = 2 × 24 = 48 N',
            'Direction: Always toward center of circle',
            'Velocity is tangent to circle, acceleration points to center'
        ],
        helper: 'Centripetal force: Fᴄ = mv²/r; Centripetal acceleration: aᴄ = v²/r',
        realWorldContext: 'Cars turning corners, satellites orbiting',
        diagramInfo: {
            type: 'circular_motion',
            registryKey: 'circularMotion',
            renderOptions: {
                radius: 100,
                velocity: 15,
                showCentripetalForce: true,
                showVelocity: true,
                showAcceleration: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_circular_motion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWorkEnergy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Work-Energy Transformation',
        problem: 'A 5 kg object slides down from 10 m height. Initial KE = 0, find final KE and velocity at bottom. Show energy transformation. (g = 10 m/s²)',
        parameters: {
            mass: 5,
            height: 10,
            initialKE: 0,
            initialPE: 500,
            finalKE: 500,
            finalPE: 0
        },
        type: 'work_energy',
        subparts: [
            'Initial PE: PEᵢ = mgh = 5 × 10 × 10 = 500 J',
            'Initial KE: KEᵢ = 0 J (starts from rest)',
            'Final PE: PEf = 0 J (at ground level)',
            'By conservation: KEf = PEᵢ = 500 J',
            'Final velocity: ½mv² = 500 → v = √(2×500/5) = √200 = 14.14 m/s'
        ],
        helper: 'Conservation of energy: KEᵢ + PEᵢ = KEf + PEf; PE = mgh; KE = ½mv²',
        realWorldContext: 'Energy conversion in falling objects, roller coasters',
        diagramInfo: {
            type: 'work_energy_chart',
            registryKey: 'workEnergyBarChart',
            renderOptions: {
                initialKE: 0,
                initialPE: 500,
                finalKE: 500,
                finalPE: 0,
                workDone: 0,
                showValues: true,
                showTotal: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_work_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMomentumCollisions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Elastic Collision Analysis',
        problem: 'Two carts collide: Cart A (2 kg, 5 m/s) hits Cart B (3 kg, -3 m/s). Show before/after and find final velocities in elastic collision.',
        parameters: {
            collisionType: 'elastic',
            objects: [
                { mass: 2, velocity: 5, color: '#E74C3C' },
                { mass: 3, velocity: -3, color: '#3498DB' }
            ]
        },
        type: 'momentum_collisions',
        subparts: [
            'Initial momentum: pᵢ = m₁v₁ + m₂v₂ = 2(5) + 3(-3) = 10 - 9 = 1 kg·m/s',
            'Initial KE: KEᵢ = ½(2)(5²) + ½(3)(-3²) = 25 + 13.5 = 38.5 J',
            'For elastic collision: Both momentum and KE conserved',
            'Using elastic collision formulas:',
            'v₁f = [(m₁-m₂)v₁ + 2m₂v₂]/(m₁+m₂) = [(2-3)(5) + 2(3)(-3)]/(5) = -5.8 m/s',
            'v₂f = [(m₂-m₁)v₂ + 2m₁v₁]/(m₁+m₂) = [(3-2)(-3) + 2(2)(5)]/(5) = 3.4 m/s'
        ],
        helper: 'Momentum: p = mv; Elastic: both p and KE conserved; Inelastic: only p conserved',
        realWorldContext: 'Collisions in sports, car crashes',
        diagramInfo: {
            type: 'momentum_collision',
            registryKey: 'momentumCollision',
            renderOptions: {
                collisionType: 'elastic',
                objects: [
                    { mass: 2, velocity: 5, color: '#E74C3C' },
                    { mass: 3, velocity: -3, color: '#3498DB' }
                ],
                showBefore: true,
                showAfter: true,
                showMomentum: true,
                showEnergy: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_collision_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRotationalMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Torque on a Lever',
        problem: 'A 2 m lever has fulcrum at 0.6 m from left end. 50 N force applied at left end, find force needed at right end for balance.',
        parameters: {
            leverLength: 200,
            fulcrumPosition: 0.3,
            force1: 50,
            force2: 30
        },
        type: 'rotational_motion',
        subparts: [
            'Left moment arm: r₁ = 0.6 m',
            'Right moment arm: r₂ = 2 - 0.6 = 1.4 m',
            'For equilibrium: τ₁ = τ₂',
            'F₁ × r₁ = F₂ × r₂',
            '50 × 0.6 = F₂ × 1.4',
            'F₂ = 30/1.4 = 21.4 N'
        ],
        helper: 'Torque: τ = rF sin(θ); For equilibrium: Στ = 0',
        realWorldContext: 'Seesaws, crowbars, door handles',
        diagramInfo: {
            type: 'torque_lever',
            registryKey: 'torqueLeverDiagram',
            renderOptions: {
                leverLength: 200,
                fulcrumPosition: 0.3,
                force1: 50,
                force2: 30,
                showMomentArms: true,
                showForces: true,
                showRotation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_torque_lever_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Simple Harmonic Motion - Spring',
        problem: 'A 2 kg mass on spring (k = 100 N/m) oscillates with amplitude 0.5 m. Find period, frequency, and maximum velocity.',
        parameters: {
            mass: 2,
            springConstant: 100,
            amplitude: 0.5
        },
        type: 'rotational_motion',
        subparts: [
            'Period: T = 2π√(m/k) = 2π√(2/100) = 2π√0.02 = 0.89 s',
            'Frequency: f = 1/T = 1/0.89 = 1.12 Hz',
            'Angular frequency: ω = √(k/m) = √(100/2) = 7.07 rad/s',
            'Maximum velocity: vₘₐₓ = Aω = 0.5 × 7.07 = 3.54 m/s',
            'Maximum velocity occurs at equilibrium position'
        ],
        helper: 'SHM: T = 2π√(m/k), vₘₐₓ = Aω, aₘₐₓ = Aω²',
        realWorldContext: 'Mass-spring systems, oscillations',
        diagramInfo: {
            type: 'spring_harmonic',
            registryKey: 'springHarmonicMotion',
            renderOptions: {
                amplitude: 50,
                springConstant: 10,
                mass: 2,
                showDisplacement: true,
                showForce: true,
                showEnergy: true,
                animate: false
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_spring_harmonic_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== WAVES AND SOUND GENERATORS WITH DIAGRAMS ====================

generateRelatedWaveProperties(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // Original problem without diagram
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Wave Speed Calculation',
        problem: 'Wave has frequency 50 Hz and wavelength 4 m. Find wave speed.',
        parameters: { frequency: 50, wavelength: 4, findSpeed: true },
        type: 'wave_properties',
        subparts: [
            'Wave equation: v = fλ',
            'Identify: f = 50 Hz, λ = 4 m',
            'Calculate: v = 50 × 4 = 200 m/s',
            'Wave speed depends on medium properties'
        ],
        helper: 'formula: v = fλ (wave speed = frequency × wavelength)',
        realWorldContext: 'All wave motion'
    });

    // NEW: Transverse vs Longitudinal waves with diagram
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Comparing Wave Types',
        problem: 'Compare transverse and longitudinal waves. A transverse wave has wavelength 2 m and a longitudinal sound wave has the same wavelength. If both travel at same speed 340 m/s, find their frequencies.',
        parameters: {
            wavelength: 2,
            speed: 340,
            showParticleMotion: true
        },
        type: 'wave_properties',
        subparts: [
            'Transverse: particle motion perpendicular to wave direction',
            'Longitudinal: particle motion parallel to wave direction',
            'For both waves: v = fλ',
            'Frequency: f = v/λ = 340/2 = 170 Hz',
            'Same frequency despite different particle motion'
        ],
        helper: 'Transverse: e.g. light, water waves; Longitudinal: e.g. sound waves',
        realWorldContext: 'Understanding different wave types in nature',
        diagramInfo: {
            type: 'wave_types',
            registryKey: 'transverseLongitudinalWaves',
            renderOptions: {
                wavelength: 100,
                amplitude: 30,
                showParticles: true,
                showLabels: true,
                animate: false
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wave_types_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveInterference(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Two-Source Wave Interference',
        problem: 'Two coherent sources 10 cm apart produce waves of wavelength 3 cm. Find positions of first three nodes and antinodes.',
        parameters: {
            separation: 100,
            wavelength: 30
        },
        type: 'wave_interference',
        subparts: [
            'Constructive interference (antinodes): path difference = nλ',
            'First antinode: Δd = 0 (center line)',
            'Second antinode: Δd = λ = 3 cm',
            'Third antinode: Δd = 2λ = 6 cm',
            'Destructive interference (nodes): path difference = (n + ½)λ',
            'First node: Δd = λ/2 = 1.5 cm',
            'Second node: Δd = 3λ/2 = 4.5 cm'
        ],
        helper: 'Constructive: Δd = nλ; Destructive: Δd = (n + ½)λ',
        realWorldContext: 'Sound interference, water wave patterns',
        diagramInfo: {
            type: 'wave_interference',
            registryKey: 'waveInterference',
            renderOptions: {
                separation: 100,
                wavelength: 30,
                showSources: true,
                showNodes: true,
                showAntinodes: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wave_interference_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedSoundWaves(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Sound Wave Pressure Variations',
        problem: 'A sound wave with frequency 440 Hz (musical note A) travels through air at 343 m/s. Draw the pressure variation and find wavelength.',
        parameters: {
            frequency: 440,
            speed: 343,
            amplitude: 50
        },
        type: 'sound_waves',
        subparts: [
            'Sound is longitudinal wave with compressions and rarefactions',
            'Wavelength: λ = v/f = 343/440 = 0.78 m',
            'Period: T = 1/f = 1/440 = 0.00227 s = 2.27 ms',
            'Compressions: regions of high pressure',
            'Rarefactions: regions of low pressure'
        ],
        helper: 'Sound speed in air ≈ 343 m/s at 20°C; v = fλ',
        realWorldContext: 'Musical notes, acoustic waves',
        diagramInfo: {
            type: 'sound_pressure',
            registryKey: 'soundWavePressure',
            renderOptions: {
                frequency: 440,
                amplitude: 50,
                showCompressions: true,
                showRarefactions: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_sound_pressure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDopplerEffect(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Doppler Effect Analysis',
        problem: 'A sound source emitting 500 Hz moves toward a stationary observer at 0.1c (speed of sound). Draw wavefront compression and find observed frequency.',
        parameters: {
            sourceFrequency: 500,
            sourceVelocity: 0.5,
            direction: 'right'
        },
        type: 'doppler_effect',
        subparts: [
            'Source moving toward observer: wavefronts compressed',
            'Observed frequency: f\' = f × [v/(v - vₛ)]',
            'Where v = speed of sound, vₛ = source velocity',
            'f\' = 500 × [343/(343 - 34.3)]',
            'f\' = 500 × [343/308.7] = 555.6 Hz',
            'Higher frequency (higher pitch) when approaching'
        ],
        helper: 'Approaching: f\' = f[v/(v-vₛ)]; Receding: f\' = f[v/(v+vₛ)]',
        realWorldContext: 'Ambulance sirens, train whistles',
        diagramInfo: {
            type: 'doppler_effect',
            registryKey: 'dopplerEffect',
            renderOptions: {
                sourceVelocity: 0.5,
                direction: 'right',
                showWavefronts: true,
                showVelocity: true,
                showFrequencyChange: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_doppler_effect_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedStandingWaves(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Standing Waves on String',
        problem: 'A 3 m string vibrates in 3rd harmonic. Wave speed is 60 m/s. Draw standing wave pattern and find frequency.',
        parameters: {
            harmonic: 3,
            length: 300,
            amplitude: 40,
            waveSpeed: 60
        },
        type: 'standing_waves',
        subparts: [
            'For string fixed at both ends: L = nλ/2',
            '3rd harmonic: n = 3',
            '3 = 3λ/2 → λ = 2 m',
            'Frequency: f = v/λ = 60/2 = 30 Hz',
            'Number of nodes: n + 1 = 4',
            'Number of antinodes: n = 3'
        ],
        helper: 'String fixed both ends: L = nλ/2, f = nv/(2L)',
        realWorldContext: 'Guitar strings, violin strings',
        diagramInfo: {
            type: 'standing_waves',
            registryKey: 'standingWaves',
            renderOptions: {
                harmonic: 3,
                length: 300,
                amplitude: 40,
                showNodes: true,
                showAntinodes: true,
                animate: false
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_standing_waves_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedResonance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Wavefront Propagation',
        problem: 'A point source produces circular wavefronts with wavelength 4 cm. Draw the wavefront pattern showing 5 wavefronts.',
        parameters: {
            wavelength: 40,
            numWavefronts: 5
        },
        type: 'resonance',
        subparts: [
            'Wavefronts are surfaces of constant phase',
            'For point source: circular wavefronts',
            'Spacing between wavefronts = wavelength = 4 cm',
            'Wave rays perpendicular to wavefronts',
            'Energy propagates along rays'
        ],
        helper: 'Wavefronts show wave propagation; spacing = wavelength',
        realWorldContext: 'Water ripples, sound propagation',
        diagramInfo: {
            type: 'wavefront',
            registryKey: 'wavefrontDiagram',
            renderOptions: {
                wavelength: 40,
                numWavefronts: 5,
                showSource: true,
                showRays: true
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_wavefront_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== THERMODYNAMICS GENERATORS WITH DIAGRAMS ====================

generateRelatedTemperatureHeat(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // Original problem without diagram
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Temperature Conversion',
        problem: 'Convert 77°F to Celsius and Kelvin.',
        parameters: { fahrenheit: 77, convertToCelsiusKelvin: true },
        type: 'temperature_heat',
        subparts: [
            'Fahrenheit to Celsius: C = (F - 32) × 5/9',
            'Calculate: C = (77 - 32) × 5/9 = 45 × 5/9 = 25°C',
            'Celsius to Kelvin: K = C + 273.15',
            'K = 25 + 273.15 = 298.15 K',
            'Room temperature is about 25°C or 298 K'
        ],
        helper: 'C = (F-32)×5/9, K = C + 273.15',
        realWorldContext: 'International temperature scales'
    });

    // NEW: Heating curve with diagram
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heating Curve Analysis',
        problem: 'Ice at -20°C is heated to steam at 120°C. Draw heating curve and identify phase changes. What happens during plateaus?',
        parameters: {
            substance: 'water',
            initialTemp: -20,
            finalTemp: 120
        },
        type: 'temperature_heat',
        subparts: [
            'Segment 1: Heating ice from -20°C to 0°C',
            'Plateau 1: Melting (ice → water) at 0°C, temperature constant',
            'Segment 2: Heating water from 0°C to 100°C',
            'Plateau 2: Boiling (water → steam) at 100°C, temperature constant',
            'Segment 3: Heating steam from 100°C to 120°C',
            'During plateaus: energy goes into phase change, not temperature increase'
        ],
        helper: 'Phase changes occur at constant temperature; Heat of fusion and vaporization',
        realWorldContext: 'Boiling water, melting ice',
        diagramInfo: {
            type: 'heating_curve_physics',
            registryKey: 'heatingCurvePhysics',
            renderOptions: {
                substance: 'water',
                showPhases: true,
                showPlateaus: true,
                showLabels: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_heating_curve_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedThermalExpansion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heat Transfer Modes',
        problem: 'Compare the three modes of heat transfer: conduction, convection, and radiation. Give examples of each.',
        parameters: {
            modes: ['conduction', 'convection', 'radiation']
        },
        type: 'thermal_expansion',
        subparts: [
            'Conduction: Heat transfer through direct contact (solid)',
            'Example: Metal spoon in hot coffee',
            'Convection: Heat transfer by fluid motion (liquid/gas)',
            'Example: Boiling water, air circulation',
            'Radiation: Heat transfer by electromagnetic waves (no medium needed)',
            'Example: Sun warming Earth, microwave oven'
        ],
        helper: 'Conduction: Q/t = kAΔT/d; Convection: fluid circulation; Radiation: all objects emit EM waves',
        realWorldContext: 'Cooking, heating systems, solar energy',
        diagramInfo: {
            type: 'heat_transfer',
            registryKey: 'heatTransferModes',
            renderOptions: {
                modes: ['conduction', 'convection', 'radiation'],
                showParticles: true,
                showArrows: true,
                showLabels: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_heat_transfer_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCalorimetry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Phase Diagram Analysis',
        problem: 'Examine the phase diagram for water. Identify the triple point, critical point, and explain phase transitions.',
        parameters: {
            substance: 'water'
        },
        type: 'calorimetry',
        subparts: [
            'Triple point: All three phases coexist (0.01°C, 611.657 Pa)',
            'Critical point: Above this, no distinct liquid-gas phase (374°C, 22.064 MPa)',
            'Solid-liquid line: Melting/freezing boundary',
            'Liquid-gas line: Boiling/condensation boundary',
            'Solid-gas line: Sublimation/deposition boundary',
            'Water\'s unusual property: solid-liquid line has negative slope'
        ],
        helper: 'Phase diagrams show P-T relationships and phase boundaries',
        realWorldContext: 'Understanding phase changes, pressure cookers',
        diagramInfo: {
            type: 'phase_diagram_physics',
            registryKey: 'phaseDiagramPhysics',
            renderOptions: {
                substance: 'water',
                showTriplePoint: true,
                showCriticalPoint: true,
                showPhaseRegions: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_phase_diagram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedHeatTransfer(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Kinetic Theory of Gases',
        problem: 'Draw gas particles in a container showing random motion. If temperature doubles, how does average kinetic energy change?',
        parameters: {
            numParticles: 50,
            temperature: 300
        },
        type: 'heat_transfer',
        subparts: [
            'Gas particles in random motion, colliding elastically',
            'Average kinetic energy: KE_avg = (3/2)kT',
            'If temperature doubles: T_new = 2T',
            'KE_new = (3/2)k(2T) = 2 × (3/2)kT',
            'Average kinetic energy doubles when temperature doubles',
            'Particle speed increases by factor of √2'
        ],
        helper: 'KE_avg ∝ T; Root-mean-square speed: v_rms = √(3kT/m)',
        realWorldContext: 'Understanding gas behavior, temperature meaning',
        diagramInfo: {
            type: 'kinetic_theory',
            registryKey: 'kineticTheoryParticles',
            renderOptions: {
                numParticles: 50,
                temperature: 300,
                showVelocityVectors: true,
                showCollisions: false,
                animate: false
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_kinetic_theory_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedGasLawsPhysics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'P-V Diagram for Gas Process',
        problem: 'Gas undergoes isothermal expansion from 50 L at 100 kPa to 150 L. Draw P-V diagram and find final pressure.',
        parameters: {
            processType: 'isothermal',
            initialP: 100,
            initialV: 50,
            finalV: 150
        },
        type: 'gas_laws_physics',
        subparts: [
            'Isothermal process: Temperature constant, PV = constant',
            'Initial state: P₁ = 100 kPa, V₁ = 50 L',
            'Final state: V₂ = 150 L, P₂ = ?',
            'Using P₁V₁ = P₂V₂',
            '100 × 50 = P₂ × 150',
            'P₂ = 5000/150 = 33.3 kPa',
            'Curve on P-V diagram is hyperbola'
        ],
        helper: 'Isothermal: PV = const; Isobaric: P = const; Isochoric: V = const',
        realWorldContext: 'Gas processes in engines, thermodynamics',
        diagramInfo: {
            type: 'pv_diagram',
            registryKey: 'pvDiagram',
            renderOptions: {
                processType: 'isothermal',
                initialP: 100,
                initialV: 50,
                finalV: 150,
                showWork: true,
                showCurve: true,
                showLabels: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_pv_diagram_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedThermodynamicProcesses(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Carnot Cycle Analysis',
        problem: 'Carnot engine operates between 500 K hot reservoir and 300 K cold reservoir. Draw the cycle and find efficiency.',
        parameters: {
            Th: 500,
            Tc: 300
        },
        type: 'thermodynamic_processes',
        subparts: [
            'Carnot cycle: Most efficient heat engine',
            '4 stages: isothermal expansion, adiabatic expansion, isothermal compression, adiabatic compression',
            'Efficiency: η = 1 - (Tc/Th)',
            'η = 1 - (300/500) = 1 - 0.6 = 0.4 = 40%',
            'Maximum possible efficiency between these temperatures',
            'Real engines have lower efficiency'
        ],
        helper: 'Carnot efficiency: η = 1 - (Tc/Th); Uses absolute temperatures (Kelvin)',
        realWorldContext: 'Ideal heat engines, thermodynamic limits',
        diagramInfo: {
            type: 'carnot_cycle',
            registryKey: 'carnotCycle',
            renderOptions: {
                Th: 500,
                Tc: 300,
                showStages: true,
                showEfficiency: true,
                showPVDiagram: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_carnot_cycle_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedHeatEngines(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Heat Engine Efficiency',
        problem: 'Heat engine absorbs 1000 J from hot reservoir at 600 K, rejects 600 J to cold reservoir at 300 K. Draw energy flow and find efficiency.',
        parameters: {
            Qh: 1000,
            Qc: 600,
            Th: 600,
            Tc: 300
        },
        type: 'heat_engines',
        subparts: [
            'Heat absorbed: Qₕ = 1000 J',
            'Heat rejected: Qᴄ = 600 J',
            'Work done: W = Qₕ - Qᴄ = 1000 - 600 = 400 J',
            'Actual efficiency: η = W/Qₕ = 400/1000 = 0.40 = 40%',
            'Carnot efficiency: ηᴄ = 1 - Tᴄ/Tₕ = 1 - 300/600 = 0.50 = 50%',
            'Actual < Carnot (real engines have irreversibilities)',
            'Cannot convert all heat to work (2nd law)'
        ],
        helper: 'Efficiency: η = W/Qₕ = 1 - Qᴄ/Qₕ; Max: ηᴄ = 1 - Tᴄ/Tₕ',
        realWorldContext: 'Car engines, power plants, refrigerators',
        diagramInfo: {
            type: 'heat_engine',
            registryKey: 'heatEngineDiagram',
            renderOptions: {
                Qh: 1000,
                Qc: 600,
                Th: 600,
                Tc: 300,
                showWork: true,
                showEfficiency: true,
                showReservoirs: true,
                showEnergyFlow: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_heat_engine_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Refrigerator Coefficient of Performance',
        problem: 'Refrigerator removes 800 J from cold space at 250 K, rejects heat to room at 300 K. If work input is 200 J, find COP. Compare to ideal.',
        parameters: {
            Qc: 800,
            W: 200,
            Tc: 250,
            Th: 300
        },
        type: 'heat_engines',
        subparts: [
            'Heat removed from cold: Qᴄ = 800 J',
            'Work input: W = 200 J',
            'Heat rejected to hot: Qₕ = Qᴄ + W = 800 + 200 = 1000 J',
            'Coefficient of Performance: COP = Qᴄ/W = 800/200 = 4',
            'Ideal COP: COPᴄ = Tᴄ/(Tₕ - Tᴄ) = 250/(300 - 250) = 5',
            'Actual COP < ideal (irreversibilities)',
            'Higher COP = more efficient refrigerator'
        ],
        helper: 'Refrigerator: COP = Qᴄ/W; Ideal: COPᴄ = Tᴄ/(Tₕ - Tᴄ)',
        realWorldContext: 'Refrigerators, air conditioners, heat pumps',
        diagramInfo: {
            type: 'refrigerator',
            registryKey: 'refrigeratorDiagram',
            renderOptions: {
                Qc: 800,
                Qh: 1000,
                W: 200,
                Tc: 250,
                Th: 300,
                showCOP: true,
                showEnergyFlow: true,
                showComparison: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_refrigerator_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== ELECTRICITY AND MAGNETISM GENERATORS WITH DIAGRAMS ====================

generateRelatedElectrostatics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    // Original problem without diagram
    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coulomb\'s Law',
        problem: 'Two charges +3 μC and -5 μC separated by 0.2 m. Find force between them. (k = 9×10⁹ N·m²/C²)',
        parameters: { q1: 3e-6, q2: -5e-6, distance: 0.2, k: 9e9, findForce: true },
        type: 'electrostatics',
        subparts: [
            'Coulomb\'s Law: F = k|q₁q₂|/r²',
            'Calculate: F = 9×10⁹ × |3×10⁻⁶ × (-5×10⁻⁶)| / (0.2)²',
            'F = 9×10⁹ × 15×10⁻¹² / 0.04',
            'F = 135×10⁻³ / 0.04 = 3.375 N',
            'Force is attractive (opposite charges)'
        ],
        helper: 'Coulomb\'s Law: F = k|q₁q₂|/r², k = 8.99×10⁹ N·m²/C²',
        realWorldContext: 'Electrostatic forces between charges'
    });

    // NEW: Electric field lines with diagram
    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Field Line Pattern',
        problem: 'Draw electric field lines for a +Q and -Q charge separated by distance d. Describe the field pattern.',
        parameters: {
            charges: [
                { x: -100, y: 0, charge: 1, label: '+Q' },
                { x: 100, y: 0, charge: -1, label: '-Q' }
            ]
        },
        type: 'electrostatics',
        subparts: [
            'Field lines start on positive charge, end on negative charge',
            'Lines never cross each other',
            'Density of lines indicates field strength',
            'Strong field between charges',
            'Field pattern shows dipole configuration',
            'Electric field points from + to -'
        ],
        helper: 'Field lines show direction of force on positive test charge',
        realWorldContext: 'Understanding electric fields, dipoles',
        diagramInfo: {
            type: 'electric_field',
            registryKey: 'electricFieldLines',
            renderOptions: {
                charges: [
                    { x: -100, y: 0, charge: 1, label: '+Q' },
                    { x: 100, y: 0, charge: -1, label: '-Q' }
                ],
                showCharges: true,
                showFieldLines: true,
                numLines: 16
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_electric_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricFields(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential vs Distance',
        problem: 'A point charge Q = 10 μC creates an electric potential. Draw V vs r graph and find potential at r = 2 m.',
        parameters: {
            chargeQ: 10
        },
        type: 'electric_fields',
        subparts: [
            'Electric potential: V = kQ/r',
            'At r = 2 m: V = (9×10⁹)(10×10⁻⁶)/2',
            'V = 90,000/2 = 45,000 V',
            'Potential decreases as 1/r (inverse relationship)',
            'Potential is scalar (no direction)',
            'V → 0 as r → ∞'
        ],
        helper: 'Electric potential: V = kQ/r; Electric field: E = kQ/r²',
        realWorldContext: 'Voltage around charged objects',
        diagramInfo: {
            type: 'potential_distance',
            registryKey: 'potentialDistanceGraph',
            renderOptions: {
                chargeQ: 10,
                showFieldStrength: false,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_potential_distance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedACCircuits(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'AC Voltage and Current',
        problem: 'Draw AC voltage waveform with Vₘₐₓ = 170 V, f = 60 Hz. Calculate RMS voltage and period.',
        parameters: {
            vMax: 170,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'AC voltage: V(t) = Vₘₐₓ sin(2πft)',
            'Peak voltage: Vₘₐₓ = 170 V',
            'RMS voltage: Vᵣₘₛ = Vₘₐₓ/√2 = 170/1.414 = 120 V',
            'Period: T = 1/f = 1/60 = 0.0167 s = 16.7 ms',
            'Angular frequency: ω = 2πf = 377 rad/s',
            'RMS value is effective DC equivalent'
        ],
        helper: 'AC: Vᵣₘₛ = Vₘₐₓ/√2, Iᵣₘₛ = Iₘₐₓ/√2; Period T = 1/f',
        realWorldContext: 'Household electricity (120V RMS, 60 Hz)',
        diagramInfo: {
            type: 'ac_waveform',
            registryKey: 'acVoltageWaveform',
            renderOptions: {
                vMax: 170,
                frequency: 60,
                showRMS: true,
                showPeriod: true,
                showPhase: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_ac_waveform_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'RLC Circuit Impedance',
        problem: 'AC circuit with R=100Ω, L=0.5H, C=10μF at f=60Hz. Draw phasor diagram and find impedance.',
        parameters: {
            resistance: 100,
            inductance: 0.5,
            capacitance: 10e-6,
            frequency: 60
        },
        type: 'ac_circuits',
        subparts: [
            'Angular frequency: ω = 2πf = 2π(60) = 377 rad/s',
            'Inductive reactance: Xₗ = ωL = 377 × 0.5 = 188.5 Ω',
            'Capacitive reactance: Xᴄ = 1/(ωC) = 1/(377×10×10⁻⁶) = 265 Ω',
            'Net reactance: X = Xₗ - Xᴄ = 188.5 - 265 = -76.5 Ω',
            'Impedance: Z = √(R² + X²) = √(100² + 76.5²) = 126 Ω',
            'Phase angle: φ = tan⁻¹(X/R) = tan⁻¹(-76.5/100) = -37.4°',
            'Current leads voltage (capacitive circuit)'
        ],
        helper: 'Impedance: Z = √(R² + (Xₗ - Xᴄ)²); Xₗ = ωL, Xᴄ = 1/(ωC)',
        realWorldContext: 'AC power systems, filters, resonance',
        diagramInfo: {
            type: 'rlc_circuit',
            registryKey: 'rlcCircuitDiagram',
            renderOptions: {
                resistance: 100,
                inductance: 0.5,
                capacitance: 10e-6,
                frequency: 60,
                showPhasorDiagram: true,
                showImpedance: true,
                showPhase: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_rlc_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Resonance in AC Circuits',
        problem: 'LC circuit with L=0.1H, C=100μF. Draw resonance curve and find resonant frequency.',
        parameters: {
            inductance: 0.1,
            capacitance: 100e-6
        },
        type: 'ac_circuits',
        subparts: [
            'Resonance occurs when Xₗ = Xᴄ',
            'At resonance: ωL = 1/(ωC)',
            'ω² = 1/(LC)',
            'ω = 1/√(LC) = 1/√(0.1 × 100×10⁻⁶)',
            'ω = 1/√(10⁻⁵) = 316.2 rad/s',
            'Resonant frequency: f₀ = ω/(2π) = 316.2/(2π) = 50.3 Hz',
            'At resonance: Z = R (minimum), maximum current'
        ],
        helper: 'Resonance: f₀ = 1/(2π√LC); Z minimum, current maximum',
        realWorldContext: 'Radio tuning, filters, oscillators',
        diagramInfo: {
            type: 'resonance_curve',
            registryKey: 'acResonanceCurve',
            renderOptions: {
                inductance: 0.1,
                capacitance: 100e-6,
                showResonantFrequency: true,
                showBandwidth: true,
                showQFactor: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_ac_resonance_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedElectricPotential(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Equipotential Lines',
        problem: 'Draw equipotential lines around +Q and -Q charges separated by distance d. Show relationship to electric field.',
        parameters: {
            charges: [
                { q: 1, x: -50, y: 0, label: '+Q' },
                { q: -1, x: 50, y: 0, label: '-Q' }
            ]
        },
        type: 'electric_potential',
        subparts: [
            'Equipotential lines: surfaces of constant potential',
            'Electric field perpendicular to equipotential lines',
            'Lines closer together → stronger field',
            'Potential: V = kQ/r (point charge)',
            'Between charges: potential varies continuously',
            'No work done moving charge along equipotential',
            'Field points from high to low potential'
        ],
        helper: 'Equipotentials: ⊥ to E field; E = -∇V (field = negative gradient of potential)',
        realWorldContext: 'Understanding electric fields and potential energy',
        diagramInfo: {
            type: 'equipotential_lines',
            registryKey: 'equipotentialLinesDiagram',
            renderOptions: {
                charges: [
                    { q: 1, x: -50, y: 0, label: '+Q' },
                    { q: -1, x: 50, y: 0, label: '-Q' }
                ],
                showEquipotentials: true,
                showFieldLines: true,
                showValues: true,
                numEquipotentials: 10
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_equipotential_lines_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electric Potential Energy',
        problem: 'Two charges +2μC and +3μC are 0.5 m apart. Find potential energy of the system and work to bring them to 0.2 m apart.',
        parameters: {
            q1: 2e-6,
            q2: 3e-6,
            r1: 0.5,
            r2: 0.2,
            k: 9e9
        },
        type: 'electric_potential',
        subparts: [
            'Electric potential energy: U = kq₁q₂/r',
            'Initial: U₁ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.5',
            'U₁ = 54×10⁻³/0.5 = 0.108 J',
            'Final: U₂ = (9×10⁹)(2×10⁻⁶)(3×10⁻⁶)/0.2',
            'U₂ = 54×10⁻³/0.2 = 0.270 J',
            'Work done: W = ΔU = U₂ - U₁ = 0.270 - 0.108 = 0.162 J',
            'Positive work (both charges positive, repel)'
        ],
        helper: 'Potential energy: U = kq₁q₂/r; Work = ΔU; Same sign → repel (U > 0)',
        realWorldContext: 'Electrostatic energy, ion interactions'
    });

    return relatedProblems;
}


generateRelatedCapacitance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Capacitor Charging Curve',
        problem: 'A 100 μF capacitor charges through 1 kΩ resistor to 12 V. Draw charging curve and find time to reach 63% of max voltage.',
        parameters: {
            capacitance: 100,
            resistance: 1000,
            voltage: 12,
            curveType: 'charging'
        },
        type: 'capacitance',
        subparts: [
            'Time constant: τ = RC = (1000)(100×10⁻⁶) = 0.1 s',
            'Charging equation: V(t) = V₀(1 - e^(-t/τ))',
            'At t = τ: V(τ) = V₀(1 - e⁻¹) = V₀(0.632) = 63.2% of V₀',
            'Time to reach 63%: t = τ = 0.1 s',
            'After 5τ: capacitor ~99% charged',
            'Exponential approach to final voltage'
        ],
        helper: 'Time constant τ = RC; V(t) = V₀(1 - e^(-t/τ)) for charging',
        realWorldContext: 'Camera flash circuits, timing circuits',
        diagramInfo: {
            type: 'capacitor_curve',
            registryKey: 'capacitorChargeCurve',
            renderOptions: {
                capacitance: 100,
                resistance: 1000,
                voltage: 12,
                curveType: 'charging',
                showTimeConstant: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_capacitor_curve_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedCurrentResistance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Basic Circuit Analysis',
        problem: 'Draw a circuit with 12V battery, 100Ω resistor, 200Ω resistor, 10μF capacitor, and closed switch. Analyze the circuit.',
        parameters: {
            components: [
                { type: 'battery', voltage: 12 },
                { type: 'resistor', resistance: 100 },
                { type: 'capacitor', capacitance: 10 },
                { type: 'switch', state: 'closed' }
            ],
            configuration: 'series'
        },
        type: 'current_resistance',
        subparts: [
            'Total resistance (series): R = 100 + 200 = 300 Ω',
            'Current (Ohm\'s Law): I = V/R = 12/300 = 0.04 A = 40 mA',
            'Voltage across 100Ω: V₁ = IR = 0.04 × 100 = 4 V',
            'Voltage across 200Ω: V₂ = IR = 0.04 × 200 = 8 V',
            'Total voltage: 4 + 8 = 12 V (check)',
            'Capacitor will charge to 12 V'
        ],
        helper: 'Ohm\'s Law: V = IR; Series: same current, voltages add',
        realWorldContext: 'Basic electrical circuits',
        diagramInfo: {
            type: 'circuit_diagram',
            registryKey: 'circuitDiagram',
            renderOptions: {
                components: [
                    { type: 'battery', voltage: 12 },
                    { type: 'resistor', resistance: 100 },
                    { type: 'capacitor', capacitance: 10 },
                    { type: 'switch', state: 'closed' }
                ],
                configuration: 'series',
                showValues: true,
                showCurrent: true,
                showSymbols: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_circuit_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDCCircuits(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Series vs Parallel Circuit Comparison',
        problem: 'Compare circuits with three resistors (100Ω, 200Ω, 150Ω) connected to 12V battery in series vs parallel configurations.',
        parameters: {
            voltage: 12,
            resistors: [100, 200, 150],
            compareCircuits: true
        },
        type: 'dc_circuits',
        subparts: [
            'Series: R_total = 100 + 200 + 150 = 450 Ω',
            'Series current: I = 12/450 = 0.027 A (same through all)',
            'Parallel: 1/R_total = 1/100 + 1/200 + 1/150 = 0.0233',
            'R_total = 42.9 Ω',
            'Parallel current: I = 12/42.9 = 0.28 A',
            'Parallel has lower resistance, higher current'
        ],
        helper: 'Series: R_total = ΣR, same I; Parallel: 1/R_total = Σ(1/R), same V',
        realWorldContext: 'Household circuits, Christmas lights',
        diagramInfo: {
            type: 'series_parallel',
            registryKey: 'seriesParallelCircuits',
            renderOptions: {
                voltage: 12,
                resistors: [100, 200, 150],
                showBoth: true,
                showCalculations: true,
                showCurrent: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_series_parallel_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMagneticFields(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Magnetic Field Lines of Bar Magnet',
        problem: 'Draw the magnetic field line pattern around a bar magnet. Explain the field direction and where field is strongest.',
        parameters: {
            sourceType: 'bar_magnet'
        },
        type: 'magnetic_fields',
        subparts: [
            'Field lines emerge from North pole',
            'Field lines enter South pole',
            'Lines form closed loops',
            'Never cross each other',
            'Strongest field near poles (lines closest together)',
            'Field direction: North to South outside magnet'
        ],
        helper: 'Magnetic field lines show direction of force on North pole',
        realWorldContext: 'Permanent magnets, compass behavior',
        diagramInfo: {
            type: 'magnetic_field',
            registryKey: 'magneticFieldLines',
            renderOptions: {
                sourceType: 'bar_magnet',
                showPoles: true,
                showFieldLines: true,
                showCompass: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_magnetic_field_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Lorentz Force on Moving Charge',
        problem: 'An electron (q = -e) moves at 50 m/s eastward through a magnetic field of 1 T pointing into the page. Find force magnitude and direction.',
        parameters: {
            charge: -1,
            velocity: { x: 50, y: 0 },
            magneticField: { direction: 'into_page', magnitude: 1 }
        },
        type: 'magnetic_fields',
        subparts: [
            'Lorentz force: F = qvB sin(θ)',
            'Angle between v and B: θ = 90° (perpendicular)',
            'F = (1.6×10⁻¹⁹)(50)(1) sin(90°)',
            'F = 8×10⁻¹⁸ N',
            'Direction: Use right-hand rule (for positive charge)',
            'For electron (negative): force is southward (opposite)',
            'Force perpendicular to both v and B'
        ],
        helper: 'Lorentz force: F = qvB sin(θ); Use right-hand rule for direction',
        realWorldContext: 'Particle accelerators, mass spectrometers',
        diagramInfo: {
            type: 'lorentz_force',
            registryKey: 'lorentzForce',
            renderOptions: {
                velocity: { x: 50, y: 0 },
                magneticField: { direction: 'into_page', magnitude: 1 },
                charge: 1,
                showVelocity: true,
                showField: true,
                showForce: true,
                showRightHandRule: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_lorentz_force_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedEMInduction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Electromagnetic Induction',
        problem: 'A magnet moves toward a 5-turn coil. Draw the setup and explain how current is induced. What determines current direction?',
        parameters: {
            coilTurns: 5,
            magnetMoving: true
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Moving magnet changes magnetic flux through coil',
            'Faraday\'s Law: ε = -N(ΔΦ/Δt)',
            'Changing flux induces EMF',
            'Induced current creates its own magnetic field',
            'Lenz\'s Law: Induced current opposes the change',
            'If magnet approaches: induced field repels magnet',
            'Current direction: use right-hand rule'
        ],
        helper: 'Faraday: ε = -N(ΔΦ/Δt); Lenz: induced effect opposes cause',
        realWorldContext: 'Generators, transformers, induction cooktops',
        diagramInfo: {
            type: 'em_induction',
            registryKey: 'electromagneticInduction',
            renderOptions: {
                coilTurns: 5,
                magnetMoving: true,
                showMagnet: true,
                showCoil: true,
                showCurrent: true,
                showFlux: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_em_induction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Transformer Operation',
        problem: 'A transformer has 100 turns on primary and 500 turns on secondary. Input voltage is 120 V. Draw transformer and find output voltage.',
        parameters: {
            primaryTurns: 100,
            secondaryTurns: 500,
            inputVoltage: 120
        },
        type: 'electromagnetic_induction',
        subparts: [
            'Transformer ratio: Vₛ/Vₚ = Nₛ/Nₚ',
            'Vₛ/120 = 500/100',
            'Vₛ = 120 × 5 = 600 V',
            'Step-up transformer (increases voltage)',
            'Power conservation: VₚIₚ = VₛIₛ (ideal)',
            'Current decreases as voltage increases'
        ],
        helper: 'Transformer: Vₛ/Vₚ = Nₛ/Nₚ; Iₛ/Iₚ = Nₚ/Nₛ',
        realWorldContext: 'Power distribution, voltage conversion',
        diagramInfo: {
            type: 'transformer',
            registryKey: 'transformer',
            renderOptions: {
                primaryTurns: 100,
                secondaryTurns: 500,
                inputVoltage: 120,
                showCore: true,
                showTurns: true,
                showVoltages: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_transformer_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}



// ==================== OPTICS GENERATORS WITH DIAGRAMS ====================

generateRelatedReflection(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'easy',
        scenario: 'Plane Mirror Image Formation',
        problem: 'Object 10 cm tall is placed 15 cm in front of plane mirror. Draw ray diagram and describe image characteristics.',
        parameters: {
            mirrorType: 'plane',
            objectDistance: 100,
            objectHeight: 50
        },
        type: 'reflection',
        subparts: [
            'Plane mirror produces virtual image',
            'Image distance = Object distance (15 cm behind mirror)',
            'Image height = Object height (10 cm)',
            'Image is upright (not inverted)',
            'Magnification: m = 1 (same size)',
            'Image appears to be behind mirror (virtual)'
        ],
        helper: 'Plane mirror: d_image = d_object, m = 1, virtual, upright',
        realWorldContext: 'Bathroom mirrors, reflection',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'planeMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'plane',
                objectDistance: 100,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showNormals: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_plane_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRefraction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Snell\'s Law Application',
        problem: 'Light travels from air (n=1.0) into glass (n=1.5) at 30° incident angle. Draw refraction and find refracted angle.',
        parameters: {
            n1: 1.0,
            n2: 1.5,
            incidentAngle: 30
        },
        type: 'refraction',
        subparts: [
            'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
            '1.0 × sin(30°) = 1.5 × sin(θ₂)',
            '0.5 = 1.5 × sin(θ₂)',
            'sin(θ₂) = 0.5/1.5 = 0.333',
            'θ₂ = sin⁻¹(0.333) = 19.5°',
            'Light bends toward normal (entering denser medium)'
        ],
        helper: 'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂); Toward normal if n₂ > n₁',
        realWorldContext: 'Light bending in water, lenses',
        diagramInfo: {
            type: 'snells_law',
            registryKey: 'snellsLawRefraction',
            renderOptions: {
                n1: 1.0,
                n2: 1.5,
                incidentAngle: 30,
                showAngles: true,
                showNormals: true,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_snells_law_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Total Internal Reflection',
        problem: 'Light travels from glass (n=1.5) to air (n=1.0). Draw the critical angle and explain total internal reflection.',
        parameters: {
            n1: 1.5,
            n2: 1.0,
            angle: 50
        },
        type: 'refraction',
        subparts: [
            'Critical angle: sin(θc) = n₂/n₁',
            'sin(θc) = 1.0/1.5 = 0.667',
            'θc = sin⁻¹(0.667) = 41.8°',
            'If θ > θc: Total internal reflection occurs',
            'No refracted ray, all light reflects back',
            'Used in optical fibers'
        ],
        helper: 'TIR occurs when: θ > θc and n₁ > n₂; θc = sin⁻¹(n₂/n₁)',
        realWorldContext: 'Fiber optics, prisms, diamonds',
        diagramInfo: {
            type: 'total_internal_reflection',
            registryKey: 'totalInternalReflection',
            renderOptions: {
                n1: 1.5,
                n2: 1.0,
                angle: 50,
                showCriticalAngle: true,
                showMultipleAngles: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_total_internal_reflection_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedLenses(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Convex Lens Image Formation',
        problem: 'Object 5 cm tall placed 15 cm from convex lens (f = 10 cm). Draw ray diagram and find image position and size.',
        parameters: {
            lensType: 'convex',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'lenses',
        subparts: [
            'Lens equation: 1/f = 1/d_o + 1/d_i',
            '1/10 = 1/15 + 1/d_i',
            '1/d_i = 1/10 - 1/15 = 3/30 - 2/30 = 1/30',
            'd_i = 30 cm (real image, opposite side)',
            'Magnification: m = -d_i/d_o = -30/15 = -2',
            'Image height: h_i = m × h_o = -2 × 5 = -10 cm (inverted, magnified)'
        ],
        helper: 'Lens equation: 1/f = 1/d_o + 1/d_i; m = -d_i/d_o = h_i/h_o',
        realWorldContext: 'Cameras, projectors, magnifying glasses',
        diagramInfo: {
            type: 'lens_ray_diagram',
            registryKey: 'convexLensRayDiagram',
            renderOptions: {
                lensType: 'convex',
                focalLength: 100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_convex_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Concave Lens Image Formation',
        problem: 'Object 5 cm tall placed 15 cm from concave lens (f = -10 cm). Draw ray diagram and describe image.',
        parameters: {
            lensType: 'concave',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'lenses',
        subparts: [
            'Lens equation: 1/f = 1/d_o + 1/d_i',
            '1/(-10) = 1/15 + 1/d_i',
            '1/d_i = -1/10 - 1/15 = -3/30 - 2/30 = -5/30',
            'd_i = -6 cm (virtual image, same side as object)',
            'Magnification: m = -d_i/d_o = -(-6)/15 = 0.4',
            'Image: virtual, upright, smaller (4 cm × 0.4 = 2 cm tall)'
        ],
        helper: 'Concave lens: always produces virtual, upright, diminished image',
        realWorldContext: 'Correcting nearsightedness, peepholes',
        diagramInfo: {
            type: 'lens_ray_diagram',
            registryKey: 'concaveLensRayDiagram',
            renderOptions: {
                lensType: 'concave',
                focalLength: -100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showPrincipalRays: true,
                showFocalPoints: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_concave_lens_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedMirrors(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Concave Mirror Image Formation',
        problem: 'Object 5 cm tall at 15 cm from concave mirror (f = 10 cm). Draw ray diagram and locate image.',
        parameters: {
            mirrorType: 'concave',
            focalLength: 100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'mirrors',
        subparts: [
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            '1/10 = 1/15 + 1/d_i',
            '1/d_i = 1/10 - 1/15 = 1/30',
            'd_i = 30 cm (real image, in front of mirror)',
            'Magnification: m = -d_i/d_o = -30/15 = -2',
            'Image: real, inverted, magnified (10 cm tall)'
        ],
        helper: 'Concave mirror can form real or virtual images depending on object position',
        realWorldContext: 'Telescopes, makeup mirrors, shaving mirrors',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'concaveMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'concave',
                focalLength: 100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true,
                showCenter: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_concave_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Convex Mirror Image Formation',
        problem: 'Object 5 cm tall at 15 cm from convex mirror (f = -10 cm). Draw ray diagram and describe image.',
        parameters: {
            mirrorType: 'convex',
            focalLength: -100,
            objectDistance: 150,
            objectHeight: 50
        },
        type: 'mirrors',
        subparts: [
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            '1/(-10) = 1/15 + 1/d_i',
            '1/d_i = -1/10 - 1/15 = -5/30',
            'd_i = -6 cm (virtual image, behind mirror)',
            'Magnification: m = -d_i/d_o = 6/15 = 0.4',
            'Image: virtual, upright, smaller (2 cm tall)'
        ],
        helper: 'Convex mirror always produces virtual, upright, diminished image',
        realWorldContext: 'Car side mirrors, security mirrors',
        diagramInfo: {
            type: 'mirror_ray_diagram',
            registryKey: 'convexMirrorRayDiagram',
            renderOptions: {
                mirrorType: 'convex',
                focalLength: -100,
                objectDistance: 150,
                objectHeight: 50,
                showObject: true,
                showImage: true,
                showRays: true,
                showFocalPoint: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_convex_mirror_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedOpticalInstruments(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Prism Dispersion',
        problem: 'White light passes through a 60° prism. Draw the dispersion pattern and explain why colors separate.',
        parameters: {
            prismAngle: 60
        },
        type: 'optical_instruments',
        subparts: [
            'White light contains all visible wavelengths',
            'Different wavelengths refract by different amounts',
            'Refractive index varies with wavelength (dispersion)',
            'Violet light: highest n, bends most',
            'Red light: lowest n, bends least',
            'Result: spectrum from red to violet'
        ],
        helper: 'Dispersion: n varies with λ; Short λ (violet) bends more than long λ (red)',
        realWorldContext: 'Rainbows, spectroscopy',
        diagramInfo: {
            type: 'prism_dispersion',
            registryKey: 'prismDispersion',
            renderOptions: {
                prismAngle: 60,
                showSpectrum: true,
                showAngles: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_prism_dispersion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Optical Fiber Total Internal Reflection',
        problem: 'Draw light propagation through a 30 cm optical fiber showing multiple total internal reflections.',
        parameters: {
            fiberLength: 300,
            numReflections: 5
        },
        type: 'optical_instruments',
        subparts: [
            'Fiber has high refractive index core',
            'Low refractive index cladding',
            'Light enters at shallow angle',
            'Repeatedly reflects at core-cladding boundary',
            'Total internal reflection keeps light inside',
            'Allows long-distance light transmission'
        ],
        helper: 'Optical fibers use TIR; n_core > n_cladding',
        realWorldContext: 'Internet fiber optics, medical endoscopes',
        diagramInfo: {
            type: 'optical_fiber',
            registryKey: 'opticalFiber',
            renderOptions: {
                fiberLength: 300,
                numReflections: 5,
                showCore: true,
                showCladding: true,
                showReflections: true
            },
            canvasSize: { width: 900, height: 400 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_optical_fiber_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveOptics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Light Polarization',
        problem: 'Unpolarized light passes through a polarizer. Draw the setup and explain how intensity changes.',
        parameters: {
            polarizationType: 'linear'
        },
        type: 'wave_optics',
        subparts: [
            'Unpolarized light: electric field vibrates in all directions',
            'Polarizer allows only one orientation to pass',
            'Intensity after polarizer: I = I₀/2',
            'Light is now linearly polarized',
            'Second polarizer at angle θ: I = I₀ cos²(θ) (Malus\'s Law)',
            'Crossed polarizers (90°): no light passes'
        ],
        helper: 'Malus\'s Law: I = I₀ cos²(θ); Polarization proves light is transverse wave',
        realWorldContext: 'Sunglasses, LCD screens, photography filters',
        diagramInfo: {
            type: 'polarization',
            registryKey: 'polarizationDiagram',
            renderOptions: {
                polarizationType: 'linear',
                showUnpolarized: true,
                showPolarizer: true,
                showPolarized: true
            },
            canvasSize: { width: 900, height: 500 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_polarization_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedDiffraction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Double Slit Interference Pattern',
        problem: 'Light (λ = 600 nm) passes through double slit with separation 0.5 mm. Screen is 1 m away. Draw interference pattern and find fringe spacing.',
        parameters: {
            slitType: 'double',
            slitSeparation: 0.5,
            wavelength: 600,
            screenDistance: 1000
        },
        type: 'diffraction',
        subparts: [
            'Double slit creates interference pattern',
            'Bright fringes: d sin(θ) = mλ (m = 0, 1, 2...)',
            'For small angles: sin(θ) ≈ tan(θ) = y/L',
            'Fringe spacing: Δy = λL/d',
            'Δy = (600×10⁻⁹)(1)/(0.5×10⁻³)',
            'Δy = 1.2×10⁻³ m = 1.2 mm'
        ],
        helper: 'Double slit: Bright at d sin(θ) = mλ; Dark at d sin(θ) = (m+½)λ',
        realWorldContext: 'Wave nature of light, diffraction gratings',
        diagramInfo: {
            type: 'diffraction',
            registryKey: 'diffractionPattern',
            renderOptions: {
                slitType: 'double',
                slitWidth: 20,
                slitSeparation: 80,
                wavelength: 10,
                showIntensity: true,
                showPattern: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_diffraction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== MODERN PHYSICS GENERATORS WITH DIAGRAMS ====================

generateRelatedPhotoelectricEffect(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Photoelectric Effect Analysis',
        problem: 'Photons of energy 3.0 eV strike metal surface with work function 2.0 eV. Draw the process and find maximum kinetic energy of ejected electrons.',
        parameters: {
            workFunction: 2.0,
            photonEnergy: 3.0
        },
        type: 'photoelectric_effect',
        subparts: [
            'Einstein\'s photoelectric equation: KE_max = hf - φ',
            'Photon energy: E = 3.0 eV',
            'Work function: φ = 2.0 eV',
            'KE_max = 3.0 - 2.0 = 1.0 eV',
            'Convert to joules: 1.0 eV × 1.6×10⁻¹⁹ J/eV = 1.6×10⁻¹⁹ J',
            'If hf < φ, no electrons ejected'
        ],
        helper: 'Photoelectric: KE_max = hf - φ; Threshold: f₀ = φ/h',
        realWorldContext: 'Solar cells, light sensors, quantum nature of light',
        diagramInfo: {
            type: 'photoelectric_effect',
            registryKey: 'photoelectricEffect',
            renderOptions: {
                workFunction: 2.0,
                photonEnergy: 3.0,
                showPhotons: true,
                showElectrons: true,
                showEnergyLevels: true,
                showEquation: true
            },
            canvasSize: { width: 800, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_photoelectric_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}



generateRelatedAtomicSpectra(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Hydrogen Emission Spectrum',
        problem: 'Hydrogen atom electron transitions from n=3 to n=2, n=4 to n=2, n=5 to n=2. Draw energy level diagram and emission spectrum.',
        parameters: {
            element: 'hydrogen',
            transitions: [
                { n1: 3, n2: 2, wavelength: 656 },
                { n1: 4, n2: 2, wavelength: 486 },
                { n1: 5, n2: 2, wavelength: 434 }
            ]
        },
        type: 'atomic_spectra',
        subparts: [
            'Energy levels: E_n = -13.6/n² eV',
            'Transition n=3→2: ΔE = E₃ - E₂ = -13.6(1/9 - 1/4) = 1.89 eV',
            'Photon wavelength: λ = hc/ΔE = 656 nm (red)',
            'n=4→2: ΔE = 2.55 eV, λ = 486 nm (cyan)',
            'n=5→2: ΔE = 2.86 eV, λ = 434 nm (violet)',
            'These form the Balmer series (visible light)'
        ],
        helper: 'Bohr model: E_n = -13.6/n² eV; ΔE = hf = hc/λ',
        realWorldContext: 'Spectroscopy, identifying elements, astronomy',
        diagramInfo: {
            type: 'emission_spectra',
            registryKey: 'lineEmissionSpectra',
            renderOptions: {
                element: 'hydrogen',
                transitions: [
                    { n1: 3, n2: 2, wavelength: 656 },
                    { n1: 4, n2: 2, wavelength: 486 },
                    { n1: 5, n2: 2, wavelength: 434 }
                ],
                showEnergyLevels: true,
                showSpectrum: true,
                showTransitions: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_emission_spectra_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBohrModel(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Bohr Model Energy Levels',
        problem: 'Draw Bohr model energy level diagram for hydrogen. Calculate energy and radius for n=1, 2, 3.',
        parameters: {
            atom: 'hydrogen',
            levels: [1, 2, 3]
        },
        type: 'bohr_model',
        subparts: [
            'Bohr energy levels: Eₙ = -13.6/n² eV',
            'n=1: E₁ = -13.6/1² = -13.6 eV (ground state)',
            'n=2: E₂ = -13.6/4 = -3.4 eV',
            'n=3: E₃ = -13.6/9 = -1.51 eV',
            'Bohr radius: rₙ = n²r₀, r₀ = 0.529 Å',
            'n=1: r₁ = 0.529 Å',
            'n=2: r₂ = 4(0.529) = 2.12 Å',
            'n=3: r₃ = 9(0.529) = 4.76 Å',
            'Higher n → higher energy, larger radius'
        ],
        helper: 'Bohr: Eₙ = -13.6/n² eV, rₙ = n²(0.529 Å); n = 1, 2, 3...',
        realWorldContext: 'Atomic structure, spectroscopy',
        diagramInfo: {
            type: 'bohr_energy_levels',
            registryKey: 'bohrEnergyLevelDiagram',
            renderOptions: {
                atom: 'hydrogen',
                showLevels: [1, 2, 3, 4, 5],
                showEnergies: true,
                showRadii: true,
                showTransitions: false
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_bohr_energy_levels_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Bohr Model Transitions',
        problem: 'Electron in hydrogen transitions from n=4 to n=2. Draw transition and calculate photon wavelength.',
        parameters: {
            n_initial: 4,
            n_final: 2
        },
        type: 'bohr_model',
        subparts: [
            'Initial energy: E₄ = -13.6/16 = -0.85 eV',
            'Final energy: E₂ = -13.6/4 = -3.4 eV',
            'Energy difference: ΔE = E₄ - E₂ = -0.85 - (-3.4) = 2.55 eV',
            'Convert to joules: 2.55 × 1.6×10⁻¹⁹ = 4.08×10⁻¹⁹ J',
            'Photon energy: E = hf = hc/λ',
            'Wavelength: λ = hc/E = (6.63×10⁻³⁴)(3×10⁸)/(4.08×10⁻¹⁹)',
            'λ = 4.87×10⁻⁷ m = 487 nm (blue-green light)',
            'This is part of Balmer series (visible light)'
        ],
        helper: 'ΔE = hf = hc/λ; Balmer series: transitions to n=2',
        realWorldContext: 'Emission spectra, hydrogen lamp',
        diagramInfo: {
            type: 'bohr_transitions',
            registryKey: 'bohrTransitionDiagram',
            renderOptions: {
                n_initial: 4,
                n_final: 2,
                showEnergyLevels: true,
                showPhoton: true,
                showWavelength: true,
                showCalculation: true
            },
            canvasSize: { width: 800, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_bohr_transition_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedComptonScattering(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Compton Scattering Event',
        problem: 'X-ray photon (λ₀ = 0.1 nm) scatters off electron at 90°. Draw scattering diagram and find scattered wavelength.',
        parameters: {
            initialWavelength: 0.1e-9,
            scatteringAngle: 90
        },
        type: 'compton_scattering',
        subparts: [
            'Compton equation: Δλ = λ - λ₀ = (h/mₑc)(1 - cos θ)',
            'Compton wavelength: λc = h/(mₑc) = 2.43×10⁻¹² m',
            'Angle: θ = 90°, cos(90°) = 0',
            'Δλ = 2.43×10⁻¹² (1 - 0) = 2.43×10⁻¹² m',
            'Scattered wavelength: λ = λ₀ + Δλ',
            'λ = 0.1×10⁻⁹ + 2.43×10⁻¹² = 1.0243×10⁻¹⁰ m',
            'λ ≈ 0.102 nm (slightly longer wavelength)',
            'Photon loses energy to recoil electron'
        ],
        helper: 'Compton: Δλ = (h/mₑc)(1 - cos θ); Demonstrates photon momentum',
        realWorldContext: 'X-ray scattering, particle nature of light',
        diagramInfo: {
            type: 'compton_scattering',
            registryKey: 'comptonScatteringDiagram',
            renderOptions: {
                initialWavelength: 0.1e-9,
                scatteringAngle: 90,
                showPhoton: true,
                showElectron: true,
                showMomentum: true,
                showWavelengthChange: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_compton_scattering_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Compton Scattering Energy Transfer',
        problem: 'Photon with energy 100 keV scatters at 180° (backscatter). Calculate energy of scattered photon and recoil electron.',
        parameters: {
            initialEnergy: 100e3,
            scatteringAngle: 180
        },
        type: 'compton_scattering',
        subparts: [
            'Electron rest energy: E₀ = mₑc² = 511 keV',
            'For backscatter (θ = 180°): cos(180°) = -1',
            'Energy of scattered photon: E\' = E/(1 + (E/E₀)(1 - cos θ))',
            'E\' = 100/(1 + (100/511)(1 - (-1)))',
            'E\' = 100/(1 + (100/511)(2))',
            'E\' = 100/(1 + 0.391) = 100/1.391 = 71.9 keV',
            'Energy transferred to electron: ΔE = 100 - 71.9 = 28.1 keV',
            'Maximum energy transfer occurs at 180° scattering'
        ],
        helper: 'Compton: E\' = E/[1 + (E/mₑc²)(1 - cos θ)]; mₑc² = 511 keV',
        realWorldContext: 'X-ray imaging, gamma ray astronomy',
        diagramInfo: {
            type: 'compton_energy',
            registryKey: 'comptonEnergyDiagram',
            renderOptions: {
                initialEnergy: 100,
                scatteringAngle: 180,
                showEnergyLevels: true,
                showBackscatter: true,
                showElectronRecoil: true,
                showConservation: true
            },
            canvasSize: { width: 900, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_compton_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedQuantumMechanics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Quantum Tunneling Through Barrier',
        problem: 'Particle with energy 7 eV encounters potential barrier of height 10 eV and width 5 nm. Draw potential well and explain tunneling.',
        parameters: {
            barrierHeight: 10,
            barrierWidth: 50,
            particleEnergy: 7
        },
        type: 'quantum_mechanics',
        subparts: [
            'Classically: particle cannot pass (E < V)',
            'Quantum mechanically: wavefunction penetrates barrier',
            'Probability of tunneling depends on barrier width and height',
            'Tunneling probability: T ∝ e^(-2αL), where α depends on (V-E)',
            'Wavefunction decays exponentially inside barrier',
            'Non-zero probability to find particle beyond barrier'
        ],
        helper: 'Quantum tunneling allows particles to pass through classically forbidden regions',
        realWorldContext: 'Radioactive decay, scanning tunneling microscope, nuclear fusion in stars',
        diagramInfo: {
            type: 'quantum_tunneling',
            registryKey: 'quantumTunneling',
            renderOptions: {
                barrierHeight: 10,
                barrierWidth: 50,
                particleEnergy: 7,
                showPotentialWell: true,
                showWavefunction: true,
                showProbability: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_quantum_tunneling_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedWaveParticleDuality(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'de Broglie Wavelength',
        problem: 'Electron accelerated through 100 V potential. Calculate de Broglie wavelength. (m_e = 9.11×10⁻³¹ kg, e = 1.6×10⁻¹⁹ C)',
        parameters: {
            particle: 'electron',
            voltage: 100
        },
        type: 'wave_particle_duality',
        subparts: [
            'Kinetic energy: KE = eV = 1.6×10⁻¹⁹ × 100 = 1.6×10⁻¹⁷ J',
            'Velocity: KE = ½mv² → v = √(2KE/m) = √(2×1.6×10⁻¹⁷/9.11×10⁻³¹)',
            'v = 5.93×10⁶ m/s',
            'Momentum: p = mv = 9.11×10⁻³¹ × 5.93×10⁶ = 5.4×10⁻²⁴ kg·m/s',
            'de Broglie wavelength: λ = h/p = 6.63×10⁻³⁴/5.4×10⁻²⁴',
            'λ = 1.23×10⁻¹⁰ m = 0.123 nm (similar to X-ray wavelengths)'
        ],
        helper: 'de Broglie: λ = h/p = h/(mv); All matter has wave properties',
        realWorldContext: 'Electron microscopes, electron diffraction',
        diagramInfo: {
            type: 'de_broglie',
            registryKey: 'deBroglieWavelength',
            renderOptions: {
                particle: 'electron',
                velocity: 1e6,
                showWaveform: true,
                showEquation: true,
                showComparison: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_de_broglie_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== RELATIVITY GENERATORS WITH DIAGRAMS ====================

generateRelatedTimeDilation(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Time Dilation Calculation',
        problem: 'Spacecraft travels at 0.8c. Draw time dilation graph and find time dilation factor. If 10 years pass on Earth, how much time passes on spacecraft?',
        parameters: {
            velocity: 0.8
        },
        type: 'time_dilation',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²)',
            'γ = 1/√(1 - 0.8²) = 1/√(1 - 0.64) = 1/√0.36',
            'γ = 1/0.6 = 1.667',
            'Time dilation: Δt = γΔt₀',
            'If Δt = 10 years (Earth), then Δt₀ = 10/1.667 = 6 years',
            'Only 6 years pass on spacecraft (moving clock runs slower)'
        ],
        helper: 'Time dilation: Δt = γΔt₀, where γ = 1/√(1 - v²/c²)',
        realWorldContext: 'GPS satellites, particle accelerators, twin paradox',
        diagramInfo: {
            type: 'time_dilation',
            registryKey: 'timeDilation',
            renderOptions: {
                showLorentzFactor: true,
                showEquation: true,
                showExample: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_time_dilation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedLengthContraction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Length Contraction Analysis',
        problem: 'Spaceship 100 m long (at rest) travels at 0.8c. Draw length contraction diagram and find observed length from Earth.',
        parameters: {
            properLength: 100,
            velocity: 0.8
        },
        type: 'length_contraction',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²) = 1.667 (from previous calculation)',
            'Length contraction: L = L₀/γ',
            'L = 100/1.667 = 60 m',
            'Spaceship appears 60 m long to Earth observer',
            'Contraction occurs only in direction of motion',
            'Perpendicular dimensions unchanged'
        ],
        helper: 'Length contraction: L = L₀/γ = L₀√(1 - v²/c²)',
        realWorldContext: 'High-speed particles, cosmic ray muons reaching Earth',
        diagramInfo: {
            type: 'length_contraction',
            registryKey: 'lengthContraction',
            renderOptions: {
                properLength: 100,
                velocity: 0.8,
                showRestFrame: true,
                showMovingFrame: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_length_contraction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRelativisticMomentum(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Spacetime Diagram',
        problem: 'Draw a spacetime diagram showing three events. Event A at (t=0, x=0), Event B at (t=100s, x=50ls), Event C at (t=80s, x=-30ls). Show worldlines.',
        parameters: {
            events: [
                { x: 0, t: 0, label: 'A' },
                { x: 50, t: 100, label: 'B' },
                { x: -30, t: 80, label: 'C' }
            ]
        },
        type: 'relativistic_momentum',
        subparts: [
            'Spacetime diagram: time on vertical axis, space on horizontal',
            'Event A at origin',
            'Event B: 50 light-seconds away, 100 seconds later',
            'Light cone: events within can be causally connected',
            'Worldline: path of object through spacetime',
            'Timelike separation: can be causally connected',
            'Spacelike separation: cannot be causally connected'
        ],
        helper: 'Spacetime diagrams show events in 4D spacetime; Light travels at 45° on diagram',
        realWorldContext: 'Understanding causality and relativity',
        diagramInfo: {
            type: 'spacetime_diagram',
            registryKey: 'spacetimeDiagram',
            renderOptions: {
                events: [
                    { x: 0, t: 0, label: 'A' },
                    { x: 50, t: 100, label: 'B' },
                    { x: -30, t: 80, label: 'C' }
                ],
                showLightCones: true,
                showWorldlines: true,
                showAxes: true
            },
            canvasSize: { width: 800, height: 800 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_spacetime_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}


generateRelatedMassEnergyEquivalence(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Mass-Energy Conversion',
        problem: 'Calculate energy released when 0.1 g of matter is completely converted to energy. Compare to TNT explosion (4.6 MJ/kg).',
        parameters: {
            mass: 0.0001,
            c: 3e8
        },
        type: 'mass_energy_equivalence',
        subparts: [
            'Einstein\'s equation: E = mc²',
            'mass: m = 0.1 g = 0.0001 kg',
            'E = 0.0001 × (3×10⁸)²',
            'E = 0.0001 × 9×10¹⁶ = 9×10¹² J = 9 TJ',
            'TNT comparison: 9×10¹² J / (4.6×10⁶ J/kg) = 1,957,000 kg',
            'Equivalent to ~2 million kg of TNT!',
            'Demonstrates enormous energy in small mass'
        ],
        helper: 'E = mc²; 1 kg of matter = 9×10¹⁶ J; c = 3×10⁸ m/s',
        realWorldContext: 'Nuclear reactions, particle-antiparticle annihilation',
        diagramInfo: {
            type: 'mass_energy',
            registryKey: 'massEnergyEquivalence',
            renderOptions: {
                showEquation: true,
                showConversion: true,
                showComparison: true,
                showApplications: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_mass_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Binding Energy',
        problem: 'Helium-4 nucleus has mass 4.0015 u. Calculate mass defect and binding energy. (1 u = 931.5 MeV/c²)',
        parameters: {
            protons: 2,
            neutrons: 2,
            nuclearMass: 4.0015,
            protonMass: 1.00728,
            neutronMass: 1.00867
        },
        type: 'mass_energy_equivalence',
        subparts: [
            'Expected mass: 2(1.00728) + 2(1.00867) = 4.0319 u',
            'Actual mass: 4.0015 u',
            'Mass defect: Δm = 4.0319 - 4.0015 = 0.0304 u',
            'Binding energy: BE = Δm × c² = 0.0304 × 931.5 MeV',
            'BE = 28.3 MeV',
            'Binding energy per nucleon: 28.3/4 = 7.08 MeV/nucleon',
            'Mass defect converted to binding energy holds nucleus together'
        ],
        helper: 'BE = Δmc²; Higher BE/nucleon = more stable nucleus',
        realWorldContext: 'Nuclear stability, fusion and fission energy'
    });

    return relatedProblems;
}

generateRelatedLorentzTransformations(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Lorentz Transformation Application',
        problem: 'Two events in frame S: Event A at (x=0, t=0) and Event B at (x=300 m, t=1 μs). Frame S\' moves at 0.6c. Find coordinates in S\'.',
        parameters: {
            eventA: { x: 0, t: 0 },
            eventB: { x: 300, t: 1e-6 },
            velocity: 0.6
        },
        type: 'lorentz_transformations',
        subparts: [
            'Lorentz factor: γ = 1/√(1 - v²/c²) = 1/√(1 - 0.36) = 1.25',
            'Lorentz transformations:',
            'x\' = γ(x - vt), t\' = γ(t - vx/c²)',
            'Event A: x\'ₐ = 0, t\'ₐ = 0 (both frames agree on origin)',
            'Event B: x\'ᵦ = 1.25(300 - 0.6×3×10⁸×10⁻⁶)',
            'x\'ᵦ = 1.25(300 - 180) = 150 m',
            't\'ᵦ = 1.25(10⁻⁶ - 0.6×300/(9×10¹⁶))',
            't\'ᵦ = 1.25(10⁻⁶ - 2×10⁻⁷) = 1.0×10⁻⁶ s'
        ],
        helper: 'Lorentz: x\' = γ(x - vt), t\' = γ(t - vx/c²); Simultaneity is relative',
        realWorldContext: 'Particle physics, relativity experiments',
        diagramInfo: {
            type: 'lorentz_transformation',
            registryKey: 'lorentzTransformationDiagram',
            renderOptions: {
                velocity: 0.6,
                showBothFrames: true,
                showEvents: true,
                showTransformations: true,
                showEquations: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_lorentz_transformation_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Relativistic Velocity Addition',
        problem: 'Spaceship moves at 0.8c relative to Earth. It fires missile at 0.6c relative to ship. Find missile speed relative to Earth. Draw velocity addition diagram.',
        parameters: {
            shipVelocity: 0.8,
            missileVelocity: 0.6
        },
        type: 'lorentz_transformations',
        subparts: [
            'Relativistic velocity addition: u = (v + u\')/(1 + vu\'/c²)',
            'v = 0.8c (ship), u\' = 0.6c (missile in ship frame)',
            'u = (0.8c + 0.6c)/(1 + 0.8×0.6)',
            'u = 1.4c/(1 + 0.48) = 1.4c/1.48',
            'u = 0.946c',
            'Note: u < c (never exceeds light speed)',
            'Classical: would be 0.8c + 0.6c = 1.4c (wrong!)'
        ],
        helper: 'Relativistic addition: u = (v + u\')/(1 + vu\'/c²); Result always < c',
        realWorldContext: 'Particle accelerators, cosmic ray velocities',
        diagramInfo: {
            type: 'velocity_addition',
            registryKey: 'velocityAddition',
            renderOptions: {
                v1: 0.8,
                v2: 0.6,
                showClassical: true,
                showRelativistic: true,
                showComparison: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_velocity_addition_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

// ==================== NUCLEAR PHYSICS GENERATORS WITH DIAGRAMS ====================

generateRelatedRadioactiveDecayPhysics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Alpha Decay Process',
        problem: 'Radium-226 undergoes alpha decay. Draw the nuclear process and write the decay equation.',
        parameters: {
            decayType: 'alpha',
            parentNucleus: 'Ra-226',
            daughterNucleus: 'Rn-222'
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Alpha particle: ⁴₂He (2 protons, 2 neutrons)',
            'Radium-226: ²²⁶₈₈Ra',
            'Alpha decay: ²²⁶₈₈Ra → ²²²₈₆Rn + ⁴₂He',
            'Mass number decreases by 4',
            'Atomic number decreases by 2',
            'Produces radon-222 and helium nucleus'
        ],
        helper: 'Alpha decay: A → (A-4) + ⁴He; Z → (Z-2)',
        realWorldContext: 'Radioactive dating, nuclear decay chains',
        diagramInfo: {
            type: 'nuclear_decay_physics',
            registryKey: 'alphaDecayDiagram',
            renderOptions: {
                decayType: 'alpha',
                parentNucleus: 'Ra-226',
                daughterNucleus: 'Rn-222',
                showParent: true,
                showProducts: true,
                showEquation: true,
                showEnergy: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_alpha_decay_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Beta Decay Process',
        problem: 'Carbon-14 undergoes beta-minus decay. Draw the process and explain neutrino emission.',
        parameters: {
            decayType: 'beta',
            parentNucleus: 'C-14',
            daughterNucleus: 'N-14'
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Beta-minus decay: neutron → proton + electron + antineutrino',
            '¹⁴₆C → ¹⁴₇N + ⁰₋₁e + ν̄ₑ',
            'Mass number stays same (14)',
            'Atomic number increases by 1 (6 → 7)',
            'Antineutrino carries away energy and momentum',
            'Used in radiocarbon dating'
        ],
        helper: 'Beta-minus: n → p + e⁻ + ν̄; Z increases by 1, A unchanged',
        realWorldContext: 'Carbon dating, medical tracers',
        diagramInfo: {
            type: 'nuclear_decay_physics',
            registryKey: 'betaDecayDiagram',
            renderOptions: {
                decayType: 'beta',
                parentNucleus: 'C-14',
                daughterNucleus: 'N-14',
                showParent: true,
                showProducts: true,
                showNeutrino: true,
                showEquation: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_beta_decay_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radioactive Half-Life',
        problem: 'Isotope has half-life of 5730 years (C-14). Starting with 100 g, draw decay curve and find amount after 11,460 years.',
        parameters: {
            isotope: 'C-14',
            halfLife: 5730,
            initialAmount: 100,
            timeElapsed: 11460
        },
        type: 'radioactive_decay_physics',
        subparts: [
            'Number of half-lives: n = t/t₁/₂ = 11,460/5,730 = 2',
            'After 1 half-life: 100/2 = 50 g',
            'After 2 half-lives: 50/2 = 25 g',
            'Formula: N(t) = N₀(½)^n = 100(½)² = 25 g',
            'Exponential decay: N(t) = N₀e^(-λt)',
            'Decay constant: λ = ln(2)/t₁/₂'
        ],
        helper: 'Half-life: N(t) = N₀(½)^(t/t₁/₂); λ = 0.693/t₁/₂',
        realWorldContext: 'Dating artifacts, medical isotopes',
        diagramInfo: {
            type: 'half_life_graph',
            registryKey: 'halfLifeGraph',
            renderOptions: {
                isotope: 'C-14',
                halfLife: 5730,
                initialAmount: 100,
                showHalfLives: true,
                showExponential: true,
                showPercentages: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_half_life_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedNuclearReactionsPhysics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Structure',
        problem: 'Draw the nuclear structure of Carbon-12 showing protons and neutrons. Calculate the nuclear radius.',
        parameters: {
            protons: 6,
            neutrons: 6,
            element: 'C-12'
        },
        type: 'nuclear_reactions_physics',
        subparts: [
            'Carbon-12: 6 protons, 6 neutrons',
            'Total nucleons: A = 12',
            'Nuclear radius: r = r₀A^(1/3), where r₀ = 1.2 fm',
            'r = 1.2 × 12^(1/3) = 1.2 × 2.29 = 2.75 fm',
            'Nuclear density extremely high: ~10¹⁷ kg/m³',
            'Protons and neutrons held by strong nuclear force'
        ],
        helper: 'Nuclear radius: r = r₀A^(1/3), r₀ = 1.2 fm = 1.2×10⁻¹⁵ m',
        realWorldContext: 'Understanding atomic nuclei',
        diagramInfo: {
            type: 'nuclear_structure_physics',
            registryKey: 'nuclearStructurePhysics',
            renderOptions: {
                protons: 6,
                neutrons: 6,
                element: 'C-12',
                showProtons: true,
                showNeutrons: true,
                showLabels: true,
                showForces: false
            },
            canvasSize: { width: 700, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_nuclear_structure_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedBindingEnergy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Binding Energy Curve',
        problem: 'Draw the binding energy per nucleon vs mass number curve. Identify regions favorable for fission and fusion.',
        parameters: {
            showPeak: true,
            showFissionRegion: true,
            showFusionRegion: true
        },
        type: 'binding_energy',
        subparts: [
            'Binding energy per nucleon: BE/A',
            'Peak at Fe-56 (Iron): most stable nucleus',
            'BE/A ≈ 8.8 MeV for Fe-56',
            'Light nuclei (A < 56): Fusion releases energy',
            'Heavy nuclei (A > 56): Fission releases energy',
            'Stars fuse light elements up to iron'
        ],
        helper: 'BE = Δmc²; Higher BE/A = more stable',
        realWorldContext: 'Nuclear stability, stellar nucleosynthesis',
        diagramInfo: {
            type: 'binding_energy_curve',
            registryKey: 'bindingEnergyCurve',
            renderOptions: {
                showPeak: true,
                showFissionRegion: true,
                showFusionRegion: true,
                showElements: true
            },
            canvasSize: { width: 900, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_binding_energy_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedFissionFusion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Fission Process',
        problem: 'U-235 absorbs a neutron and undergoes fission into Ba-141, Kr-92, and 3 neutrons. Draw the process and explain chain reaction.',
        parameters: {
            nucleus: 'U-235',
            products: ['Ba-141', 'Kr-92'],
            neutrons: 3
        },
        type: 'fission_fusion',
        subparts: [
            'Fission equation: ²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n + energy',
            'Check: 235 + 1 = 141 + 92 + 3 = 236 ✓',
            'Each fission releases ~200 MeV',
            'Produces 3 neutrons → can trigger 3 more fissions',
            'Chain reaction: self-sustaining if critical mass reached',
            'Used in nuclear reactors and weapons'
        ],
        helper: 'Fission: Heavy nucleus splits; releases neutrons and energy',
        realWorldContext: 'Nuclear power plants, atomic bombs',
        diagramInfo: {
            type: 'fission_diagram',
            registryKey: 'nuclearFissionDiagram',
            renderOptions: {
                nucleus: 'U-235',
                products: ['Ba-141', 'Kr-92'],
                neutrons: 3,
                showNeutron: true,
                showProducts: true,
                showNeutrons: true,
                showEnergy: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_fission_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Nuclear Fusion Process',
        problem: 'Deuterium and tritium fuse to form helium. Draw D-T fusion reaction and calculate energy release.',
        parameters: {
            reactants: ['H-2', 'H-3'],
            product: 'He-4'
        },
        type: 'fission_fusion',
        subparts: [
            'D-T fusion: ²H + ³H → ⁴He + n + energy',
            'Mass check: 2 + 3 = 4 + 1 = 5 ✓',
            'Energy released: ~17.6 MeV per reaction',
            'Requires very high temperature (millions of degrees)',
            'Occurs in stars and fusion reactors',
            'Clean energy source (no radioactive waste like fission)'
        ],
        helper: 'Fusion: Light nuclei combine; requires high temperature and pressure',
        realWorldContext: 'Stars, fusion reactors, hydrogen bombs',
        diagramInfo: {
            type: 'fusion_diagram',
            registryKey: 'nuclearFusionDiagram',
            renderOptions: {
                reactants: ['H-2', 'H-3'],
                product: 'He-4',
                showReactants: true,
                showProduct: true,
                showNeutron: true,
                showEnergy: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_fusion_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    relatedProblems.push({
        difficulty: 'hard',
        scenario: 'Nuclear Chain Reaction',
        problem: 'Draw a chain reaction diagram showing 3 generations with branching factor of 2. Explain criticality.',
        parameters: {
            generations: 3,
            branchingFactor: 2
        },
        type: 'fission_fusion',
        subparts: [
            'Generation 0: 1 fission event',
            'Generation 1: 2 fission events (branching factor = 2)',
            'Generation 2: 4 fission events',
            'Generation 3: 8 fission events',
            'Subcritical: k < 1 (reaction dies out)',
            'Critical: k = 1 (sustained reaction)',
            'Supercritical: k > 1 (exponential growth)'
        ],
        helper: 'Chain reaction: k = neutrons produced/neutrons absorbed',
        realWorldContext: 'Nuclear reactor control, critical mass',
        diagramInfo: {
            type: 'chain_reaction_diagram',
            registryKey: 'chainReactionDiagram',
            renderOptions: {
                generations: 3,
                branchingFactor: 2,
                showGenerations: true,
                showNeutrons: true,
                showFissions: true
            },
            canvasSize: { width: 1000, height: 700 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_chain_reaction_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedRadiationDetection(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'medium',
        scenario: 'Radiation Penetration Power',
        problem: 'Compare penetration of alpha, beta, and gamma radiation through materials. Draw penetration diagram.',
        parameters: {
            radiationTypes: ['alpha', 'beta', 'gamma']
        },
        type: 'radiation_detection',
        subparts: [
            'Alpha (α): Stopped by paper or skin',
            'Helium nuclei, +2 charge, heavy',
            'Beta (β): Stopped by aluminum foil',
            'Electrons, -1 charge, lighter than alpha',
            'Gamma (γ): Requires thick lead or concrete',
            'EM radiation, no charge, very penetrating',
            'Ionizing power: α > β > γ (inverse of penetration)'
        ],
        helper: 'Alpha: least penetrating, most ionizing; Gamma: most penetrating, least ionizing',
        realWorldContext: 'Radiation shielding, safety protocols',
        diagramInfo: {
            type: 'radiation_penetration',
            registryKey: 'radiationPenetration',
            renderOptions: {
                radiationTypes: ['alpha', 'beta', 'gamma'],
                showBarriers: true,
                showPaths: true,
                showLabels: true
            },
            canvasSize: { width: 1000, height: 600 }
        },
        generateDiagram: function() {
            try {
                const canvas = createCanvas(
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height
                );
                const renderer = new PhysicsDiagramRenderer(canvas);
                renderer.renderDiagram(
                    this.diagramInfo.registryKey,
                    0, 0,
                    this.diagramInfo.canvasSize.width,
                    this.diagramInfo.canvasSize.height,
                    this.diagramInfo.renderOptions
                );
                const buffer = canvas.toBuffer('image/png');
                const filename = `physics_radiation_penetration_${Date.now()}.png`;
                fs.writeFileSync(filename, buffer);
                return { success: true, filename: filename, path: `./${filename}` };
            } catch (error) {
                return { success: false, error: error.message };
            }
        }
    });

    return relatedProblems;
}

generateRelatedGravitation(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    
    // Could use curved spacetime diagram or gravitational field diagrams
    
    return relatedProblems;
}






// ======================================[[[[✓✓✓✓✓========

// ==================== REPRODUCTION & DEVELOPMENT GENERATORS WITH DIAGRAMS ====================




// ===============================



// ============================================================================
// ATOMIC STRUCTURE GENERATORS (7 generators)
// ============================================================================


// ============================================================================
// KINETICS & THERMODYNAMICS GENERATORS (6 generators)
// ============================================================================




// === STOICHIOMETRY PROBLEM GENERATORS ===
generateRelatedMoleCalculations(originalProblem, originalSolution, options) {




// ==================== MECHANICS GENERATORS ====================

generateRelatedKinematics1D(originalProblem, originalSolution, options) {
    const relatedProblems = [];
    const originalParams = originalProblem.parameters || {};

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Uniform Acceleration',
        problem: `A car accelerates from rest at 3 m/s² for 8 seconds. Find final velocity and distance traveled.`,
        parameters: { initialVelocity: 0, acceleration: 3, time: 8, findVelocityAndDistance: true },
        type: 'kinematics_1d',
        subparts: [
            'Identify given: u = 0, a = 3 m/s², t = 8 s',
            'Use v = u + at to find final velocity',
            'Use s = ut + ½at² to find distance',
            'Calculate v = 0 + 3(8) = 24 m/s',
            'Calculate s = 0 + ½(3)(8²) = 96 m'
        ],
        helper: 'formulas: v = u + at, s = ut + ½at², v² = u² + 2as',
        realWorldContext: 'Vehicle acceleration analysis'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Uniform Motion',
        problem: 'A train travels at constant velocity 25 m/s for 120 seconds. Find distance.',
        parameters: { velocity: 25, time: 120, uniformMotion: true },
        type: 'kinematics_1d',
        subparts: [
            'Identify: constant velocity (no acceleration)',
            'Use simple formula: distance = velocity × time',
            'Calculate: s = 25 × 120 = 3000 m = 3 km'
        ],
        helper: 'formula: s = vt (when velocity is constant)',
        realWorldContext: 'Cruise control in vehicles'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Braking Distance',
        problem: 'A car traveling at 30 m/s brakes with deceleration 5 m/s². Find stopping distance and time.',
        parameters: { initialVelocity: 30, finalVelocity: 0, acceleration: -5, findDistanceAndTime: true },
        type: 'kinematics_1d',
        subparts: [
            'Identify: u = 30 m/s, v = 0, a = -5 m/s²',
            'Use v² = u² + 2as to find stopping distance',
            '0² = 30² + 2(-5)s → s = 900/10 = 90 m',
            'Use v = u + at to find time',
            '0 = 30 + (-5)t → t = 6 s'
        ],
        helper: 'formula: v² = u² + 2as (no time), v = u + at',
        realWorldContext: 'Road safety and braking calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Free Fall',
        problem: 'Object dropped from 80 m height. Find time to hit ground and final velocity. (g = 10 m/s²)',
        parameters: { height: 80, initialVelocity: 0, acceleration: 10, freeFall: true },
        type: 'kinematics_1d',
        subparts: [
            'Identify: u = 0, s = 80 m, a = g = 10 m/s²',
            'Use s = ut + ½gt² to find time',
            '80 = 0 + ½(10)t² → t = 4 s',
            'Use v = u + gt to find final velocity',
            'v = 0 + 10(4) = 40 m/s'
        ],
        helper: 'Free fall: a = g = 9.8 m/s² (or 10 m/s² approximation)',
        realWorldContext: 'Dropping objects, skydiving'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Two-Stage Motion',
        problem: 'Car accelerates at 2 m/s² for 10 s, then travels at constant speed for 20 s. Find total distance.',
        parameters: { stage1_acceleration: 2, stage1_time: 10, stage2_time: 20, twoStage: true },
        type: 'kinematics_1d',
        subparts: [
            'Stage 1: Find distance during acceleration using s₁ = ½at²',
            's₁ = ½(2)(10²) = 100 m',
            'Find velocity after stage 1: v = at = 2(10) = 20 m/s',
            'Stage 2: Distance at constant velocity s₂ = vt = 20(20) = 400 m',
            'Total distance = s₁ + s₂ = 100 + 400 = 500 m'
        ],
        helper: 'Break into stages and analyze separately',
        realWorldContext: 'Real driving scenarios'
    });

    return relatedProblems;
}

generateRelatedKinematics2D(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: '2D Velocity Components',
        problem: 'Velocity 50 m/s at 37° above horizontal. Find horizontal and vertical components.',
        parameters: { velocity: 50, angle: 37, findComponents: true },
        type: 'kinematics_2d',
        subparts: [
            'Identify: v = 50 m/s, θ = 37°',
            'Horizontal component: vₓ = v cosθ = 50 cos(37°) ≈ 40 m/s',
            'Vertical component: vᵧ = v sinθ = 50 sin(37°) ≈ 30 m/s',
            'Use sin(37°) ≈ 0.6, cos(37°) ≈ 0.8'
        ],
        helper: 'Component formulas: vₓ = v cosθ, vᵧ = v sinθ',
        realWorldContext: 'Vector decomposition in navigation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Resultant Velocity',
        problem: 'Object has velocity 3 m/s east and 4 m/s north. Find magnitude and direction.',
        parameters: { vx: 3, vy: 4, findResultant: true },
        type: 'kinematics_2d',
        subparts: [
            'Draw vector diagram with perpendicular components',
            'Use Pythagorean theorem: v = √(vₓ² + vᵧ²)',
            'v = √(3² + 4²) = √25 = 5 m/s',
            'Find angle: tanθ = vᵧ/vₓ = 4/3 → θ = 53.1° north of east'
        ],
        helper: 'Pythagorean theorem: v = √(vₓ² + vᵧ²)',
        realWorldContext: 'Aircraft navigation with wind'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Relative Velocity',
        problem: 'Boat velocity 8 m/s north, river current 3 m/s east. Find resultant velocity and crossing time for 120 m wide river.',
        parameters: { boatVelocity: 8, currentVelocity: 3, riverWidth: 120, relativeMotion: true },
        type: 'kinematics_2d',
        subparts: [
            'Resultant velocity: v = √(8² + 3²) = √73 ≈ 8.54 m/s',
            'Direction: θ = tan⁻¹(3/8) ≈ 20.6° east of north',
            'Crossing time depends on perpendicular component only',
            't = width/v_perpendicular = 120/8 = 15 s',
            'Drift downstream: d = v_current × t = 3 × 15 = 45 m'
        ],
        helper: 'Relative velocity: v⃗_resultant = v⃗_object + v⃗_medium',
        realWorldContext: 'River crossing, airplane in wind'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Banked Curve Motion',
        problem: 'Car moving at 20 m/s on curved path radius 50 m. Find centripetal acceleration.',
        parameters: { velocity: 20, radius: 50, findCentripetalAcceleration: true },
        type: 'kinematics_2d',
        subparts: [
            'Identify: v = 20 m/s, r = 50 m',
            'Use centripetal acceleration formula: aꓲ = v²/r',
            'Calculate: aꓲ = (20²)/50 = 400/50 = 8 m/s²',
            'Direction: toward center of curve'
        ],
        helper: 'formula: aꓲ = v²/r (directed toward center)',
        realWorldContext: 'Car turning on curved roads'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Circular Motion Period',
        problem: 'Object in circular path radius 2 m with speed 10 m/s. Find period and frequency.',
        parameters: { radius: 2, speed: 10, findPeriodFrequency: true },
        type: 'kinematics_2d',
        subparts: [
            'Calculate circumference: C = 2πr = 2π(2) = 4π m',
            'Period T = distance/speed = 4π/10 ≈ 1.26 s',
            'Frequency f = 1/T = 1/1.26 ≈ 0.796 Hz',
            'Angular velocity ω = v/r = 10/2 = 5 rad/s'
        ],
        helper: 'Period T = 2πr/v, Frequency f = 1/T',
        realWorldContext: 'Rotating machinery, planets'
    });

    return relatedProblems;
}

generateRelatedProjectileMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Projectile Range',
        problem: 'Projectile launched at 40 m/s at 30° angle. Find maximum height and range. (g = 10 m/s²)',
        parameters: { velocity: 40, angle: 30, g: 10, findHeightAndRange: true },
        type: 'projectile_motion',
        subparts: [
            'Find components: v₀ₓ = 40cos(30°) = 34.6 m/s, v₀ᵧ = 40sin(30°) = 20 m/s',
            'Time to max height: t = v₀ᵧ/g = 20/10 = 2 s',
            'Max height: H = v₀ᵧ²/(2g) = 20²/20 = 20 m',
            'Total time of flight: T = 2v₀ᵧ/g = 2(20)/10 = 4 s',
            'Range: R = v₀ₓ × T = 34.6 × 4 = 138.4 m'
        ],
        helper: 'formulas: H = v₀ᵧ²/(2g), R = v₀²sin(2θ)/g',
        realWorldContext: 'Sports projectiles, artillery'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Horizontal Projectile',
        problem: 'Ball rolled off 20 m high cliff with horizontal velocity 15 m/s. Find time to hit ground and horizontal distance.',
        parameters: { height: 20, horizontalVelocity: 15, g: 10, horizontalLaunch: true },
        type: 'projectile_motion',
        subparts: [
            'Vertical motion: h = ½gt² (initial vertical velocity = 0)',
            '20 = ½(10)t² → t = 2 s',
            'Horizontal motion: x = vₓt (constant horizontal velocity)',
            'x = 15 × 2 = 30 m'
        ],
        helper: 'Horizontal and vertical motions are independent',
        realWorldContext: 'Objects falling from moving vehicles'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Projectile from Height',
        problem: 'Projectile launched at 25 m/s at 53° from 10 m high platform. Find range.',
        parameters: { velocity: 25, angle: 53, initialHeight: 10, g: 10, findRange: true },
        type: 'projectile_motion',
        subparts: [
            'Components: v₀ₓ = 25cos(53°) = 15 m/s, v₀ᵧ = 25sin(53°) = 20 m/s',
            'Vertical motion: y = y₀ + v₀ᵧt - ½gt²',
            'At ground: 0 = 10 + 20t - 5t²',
            'Solve quadratic: 5t² - 20t - 10 = 0 → t ≈ 4.45 s',
            'Range: R = v₀ₓ × t = 15 × 4.45 = 66.75 m'
        ],
        helper: 'Use quadratic formula for flight time from height',
        realWorldContext: 'Throwing from elevated position'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Projectile Velocity at Point',
        problem: 'Projectile launched at 50 m/s at 37°. Find velocity components after 3 seconds.',
        parameters: { velocity: 50, angle: 37, time: 3, g: 10, findVelocityAtTime: true },
        type: 'projectile_motion',
        subparts: [
            'Initial components: v₀ₓ = 50cos(37°) = 40 m/s, v₀ᵧ = 50sin(37°) = 30 m/s',
            'Horizontal velocity (constant): vₓ = 40 m/s',
            'Vertical velocity: vᵧ = v₀ᵧ - gt = 30 - 10(3) = 0 m/s',
            'Resultant velocity: v = √(40² + 0²) = 40 m/s (horizontal)',
            'At t=3s, projectile is at maximum height'
        ],
        helper: 'vₓ remains constant, vᵧ = v₀ᵧ - gt',
        realWorldContext: 'Tracking projectile trajectory'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Optimal Launch Angle',
        problem: 'Projectile launched at 30 m/s. What angle gives maximum range on level ground?',
        parameters: { velocity: 30, findOptimalAngle: true, g: 10 },
        type: 'projectile_motion',
        subparts: [
            'Range formula: R = v₀²sin(2θ)/g',
            'Maximum R when sin(2θ) = 1',
            'This occurs when 2θ = 90° → θ = 45°',
            'Maximum range: R_max = v₀²/g = 30²/10 = 90 m'
        ],
        helper: '45° gives maximum range on level ground',
        realWorldContext: 'Optimizing throw distance in sports'
    });

    return relatedProblems;
}

generateRelatedNewtonsLaws(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Newton\'s Second Law',
        problem: 'Force of 100 N applied to 20 kg mass on frictionless surface. Find acceleration.',
        parameters: { force: 100, mass: 20, frictionless: true },
        type: 'newtons_laws',
        subparts: [
            'Identify: F = 100 N, m = 20 kg',
            'Apply Newton\'s Second Law: F = ma',
            'Solve for acceleration: a = F/m = 100/20 = 5 m/s²',
            'Direction: same as applied force'
        ],
        helper: 'formula: F = ma (force causes acceleration)',
        realWorldContext: 'Pushing objects, vehicle acceleration'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Newton\'s First Law',
        problem: 'Hockey puck slides at 10 m/s on frictionless ice. What happens to its motion?',
        parameters: { initialVelocity: 10, frictionless: true, noForce: true },
        type: 'newtons_laws',
        subparts: [
            'Newton\'s First Law: Object in motion stays in motion without net force',
            'No friction means no net force',
            'Puck continues at constant 10 m/s indefinitely',
            'This demonstrates inertia'
        ],
        helper: 'Law of Inertia: v remains constant if F_net = 0',
        realWorldContext: 'Objects in space, air hockey'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Forces',
        problem: '50 kg box: 200 N force right, 80 N friction left, 500 N weight down, 500 N normal up. Find acceleration.',
        parameters: { mass: 50, forceRight: 200, frictionLeft: 80, weight: 500, normal: 500 },
        type: 'newtons_laws',
        subparts: [
            'Draw free body diagram',
            'Vertical forces: N - W = 0 (balanced, no vertical acceleration)',
            'Horizontal forces: F_net = 200 - 80 = 120 N (right)',
            'Apply F = ma: 120 = 50a',
            'Acceleration: a = 120/50 = 2.4 m/s² to the right'
        ],
        helper: 'F_net = ΣF (vector sum of all forces)',
        realWorldContext: 'Objects with multiple forces'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Newton\'s Third Law',
        problem: '1000 kg car pushes 500 kg car with force 3000 N. Find acceleration of each car.',
        parameters: { mass1: 1000, mass2: 500, force: 3000, actionReaction: true },
        type: 'newtons_laws',
        subparts: [
            'By Newton\'s Third Law: Force on car 2 = 3000 N forward',
            'Force on car 1 = 3000 N backward (reaction)',
            'Acceleration of car 2: a₂ = F/m₂ = 3000/500 = 6 m/s²',
            'Acceleration of car 1: a₁ = F/m₁ = 3000/1000 = 3 m/s² backward',
            'Action-reaction pairs: equal magnitude, opposite direction'
        ],
        helper: 'For every action, there\'s an equal and opposite reaction',
        realWorldContext: 'Collisions, rocket propulsion'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Weight and Mass',
        problem: '60 kg person. Find weight on Earth (g=10 m/s²) and on Moon (g=1.6 m/s²).',
        parameters: { mass: 60, gEarth: 10, gMoon: 1.6, findWeight: true },
        type: 'newtons_laws',
        subparts: [
            'Mass is constant: m = 60 kg everywhere',
            'Weight is force: W = mg',
            'Weight on Earth: W_E = 60 × 10 = 600 N',
            'Weight on Moon: W_M = 60 × 1.6 = 96 N',
            'Weight changes with gravity, mass doesn\'t'
        ],
        helper: 'Weight W = mg (varies), Mass m (constant)',
        realWorldContext: 'Space exploration, planetary physics'
    });

    return relatedProblems;
}

generateRelatedFriction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kinetic Friction',
        problem: '30 kg box sliding on floor with μₖ = 0.4. Find frictional force. (g = 10 m/s²)',
        parameters: { mass: 30, mu_k: 0.4, g: 10, findFriction: true },
        type: 'friction',
        subparts: [
            'Calculate normal force: N = mg = 30 × 10 = 300 N',
            'Kinetic friction formula: fₖ = μₖN',
            'Calculate: fₖ = 0.4 × 300 = 120 N',
            'Direction: opposite to motion'
        ],
        helper: 'formula: fₖ = μₖN (kinetic friction)',
        realWorldContext: 'Sliding objects, braking'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Static Friction Maximum',
        problem: 'Box on floor, μₛ = 0.6, mass = 25 kg. Find maximum static friction before sliding.',
        parameters: { mass: 25, mu_s: 0.6, g: 10, findMaxStatic: true },
        type: 'friction',
        subparts: [
            'Normal force: N = mg = 25 × 10 = 250 N',
            'Maximum static friction: f_s,max = μₛN',
            'f_s,max = 0.6 × 250 = 150 N',
            'Box starts sliding when applied force exceeds 150 N'
        ],
        helper: 'f_s ≤ μₛN (static friction adjusts up to maximum)',
        realWorldContext: 'Starting motion, preventing sliding'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Inclined Plane with Friction',
        problem: '20 kg box on 30° incline, μₖ = 0.3. Find acceleration down the incline.',
        parameters: { mass: 20, angle: 30, mu_k: 0.3, g: 10, findAcceleration: true },
        type: 'friction',
        subparts: [
            'Forces parallel to incline: F_parallel = mg sin(30°) = 20×10×0.5 = 100 N',
            'Normal force: N = mg cos(30°) = 20×10×0.866 = 173.2 N',
            'Friction force: fₖ = μₖN = 0.3×173.2 = 52 N (up incline)',
            'Net force: F_net = 100 - 52 = 48 N (down incline)',
            'Acceleration: a = F_net/m = 48/20 = 2.4 m/s²'
        ],
        helper: 'On incline: F_parallel = mg sinθ, N = mg cosθ',
        realWorldContext: 'Objects on ramps, skiing'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Applied Force with Friction',
        problem: '100 N horizontal force on 15 kg box, μₖ = 0.5. Find acceleration.',
        parameters: { appliedForce: 100, mass: 15, mu_k: 0.5, g: 10 },
        type: 'friction',
        subparts: [
            'Normal force: N = mg = 15 × 10 = 150 N',
            'Friction force: fₖ = μₖN = 0.5 × 150 = 75 N (opposes motion)',
            'Net force: F_net = 100 - 75 = 25 N',
            'Acceleration: a = F_net/m = 25/15 = 1.67 m/s²'
        ],
        helper: 'F_net = F_applied - f_friction',
        realWorldContext: 'Pushing objects across surfaces'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Minimum Force to Move',
        problem: '40 kg crate on floor, μₛ = 0.7. Find minimum horizontal force to start moving.',
        parameters: { mass: 40, mu_s: 0.7, g: 10, findMinForce: true },
        type: 'friction',
        subparts: [
            'Normal force: N = mg = 40 × 10 = 400 N',
            'Maximum static friction: f_s,max = μₛN = 0.7 × 400 = 280 N',
            'To overcome static friction: F_min = f_s,max',
            'Minimum force needed: F_min = 280 N',
            'Once moving, kinetic friction takes over (usually μₖ < μₛ)'
        ],
        helper: 'Must overcome maximum static friction to start motion',
        realWorldContext: 'Moving heavy furniture'
    });

    return relatedProblems;
}

generateRelatedCircularMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Centripetal Force',
        problem: '1000 kg car moving at 20 m/s around curve radius 50 m. Find centripetal force required.',
        parameters: { mass: 1000, velocity: 20, radius: 50, findCentripetalForce: true },
        type: 'circular_motion',
        subparts: [
            'Identify: m = 1000 kg, v = 20 m/s, r = 50 m',
            'Centripetal force formula: Fc = mv²/r',
            'Calculate: Fc = 1000 × 20² / 50',
            'Fc = 1000 × 400 / 50 = 8000 N',
            'Direction: toward center of curve'
        ],
        helper: 'formula: Fc = mv²/r = mω²r',
        realWorldContext: 'Car turning on curved road'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Period and Frequency',
        problem: 'Object completes 5 revolutions in 10 seconds. Find period and frequency.',
        parameters: { revolutions: 5, time: 10, findPeriodFrequency: true },
        type: 'circular_motion',
        subparts: [
            'Frequency: f = revolutions/time = 5/10 = 0.5 Hz',
            'Period: T = 1/f = 1/0.5 = 2 seconds',
            'Or directly: T = total time/revolutions = 10/5 = 2 s',
            'Period is time for one complete revolution'
        ],
        helper: 'f = 1/T, Period T = time per revolution',
        realWorldContext: 'Rotating machinery, fan blades'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Banked Curve',
        problem: 'Banked curve angle 20°, radius 100 m. Find speed for no friction needed. (g = 10 m/s²)',
        parameters: { angle: 20, radius: 100, g: 10, bankedCurve: true },
        type: 'circular_motion',
        subparts: [
            'For no friction: tan(θ) = v²/(rg)',
            'Rearrange: v² = rg tan(θ)',
            'v² = 100 × 10 × tan(20°) = 1000 × 0.364 = 364',
            'v = √364 ≈ 19.1 m/s',
            'At this speed, normal force provides all centripetal force'
        ],
        helper: 'Banked curve (no friction): tan(θ) = v²/(rg)',
        realWorldContext: 'Highway curve design'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Vertical Circle',
        problem: '0.5 kg ball on 1 m string swings in vertical circle. Find minimum speed at top. (g = 10 m/s²)',
        parameters: { mass: 0.5, radius: 1, g: 10, verticalCircle: true },
        type: 'circular_motion',
        subparts: [
            'At top of circle, both tension and weight point toward center',
            'Minimum speed when tension = 0 (gravity provides all centripetal force)',
            'Set Fc = mg: mv²/r = mg',
            'Simplify: v² = rg = 1 × 10 = 10',
            'v_min = √10 ≈ 3.16 m/s'
        ],
        helper: 'At top: Fc = T + mg. Minimum v when T = 0',
        realWorldContext: 'Loop-the-loop rides, pendulum'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Conical Pendulum',
        problem: 'Mass on string makes 30° angle with vertical while rotating. String length 2 m. Find speed. (g = 10 m/s²)',
        parameters: { angle: 30, stringLength: 2, g: 10, conicalPendulum: true },
        type: 'circular_motion',
        subparts: [
            'Radius of circular path: r = L sin(θ) = 2 sin(30°) = 1 m',
            'Vertical component: T cos(θ) = mg',
            'Horizontal component: T sin(θ) = mv²/r',
            'Divide equations: tan(θ) = v²/(rg)',
            'v² = rg tan(θ) = 1 × 10 × tan(30°) = 5.77',
            'v ≈ 2.4 m/s'
        ],
        helper: 'Conical pendulum: tan(θ) = v²/(rg)',
        realWorldContext: 'Rotating amusement rides'
    });

    return relatedProblems;
}

generateRelatedWorkEnergy(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Work Calculation',
        problem: '150 N force pushes box 8 m at 30° angle to horizontal. Calculate work done.',
        parameters: { force: 150, distance: 8, angle: 30, findWork: true },
        type: 'work_energy',
        subparts: [
            'Work formula: W = F d cos(θ)',
            'Identify: F = 150 N, d = 8 m, θ = 30°',
            'Calculate: W = 150 × 8 × cos(30°)',
            'W = 1200 × 0.866 = 1039.2 J',
            'Only force component parallel to motion does work'
        ],
        helper: 'formula: W = F d cos(θ) (θ = angle between F and d)',
        realWorldContext: 'Pushing objects, lifting loads'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Kinetic Energy',
        problem: '1200 kg car traveling at 25 m/s. Calculate kinetic energy.',
        parameters: { mass: 1200, velocity: 25, findKE: true },
        type: 'work_energy',
        subparts: [
            'Kinetic energy formula: KE = ½mv²',
            'Identify: m = 1200 kg, v = 25 m/s',
            'Calculate: KE = ½ × 1200 × 25²',
            'KE = 600 × 625 = 375,000 J = 375 kJ'
        ],
        helper: 'formula: KE = ½mv²',
        realWorldContext: 'Vehicle energy, moving objects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Work-Energy Theorem',
        problem: '800 kg car accelerates from 10 m/s to 30 m/s. Find net work done.',
        parameters: { mass: 800, initialVelocity: 10, finalVelocity: 30, findWork: true },
        type: 'work_energy',
        subparts: [
            'Work-Energy Theorem: W_net = ΔKE',
            'Initial KE:KE₁ = ½mv₁² = ½(800)(10²) = 40,000 J',
            'Final KE: KE₂ = ½mv₂² = ½(800)(30²) = 360,000 J',
            'Net work: W_net = KE₂ - KE₁ = 360,000 - 40,000 = 320,000 J',
            'W_net = 320 kJ'
        ],
        helper: 'Work-Energy Theorem: W_net = ΔKE = ½m(v₂² - v₁²)',
        realWorldContext: 'Vehicle acceleration, energy analysis'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Gravitational Potential Energy',
        problem: '50 kg object lifted from ground to 15 m height. Find change in PE and work done. (g = 10 m/s²)',
        parameters: { mass: 50, height: 15, g: 10, findPEAndWork: true },
        type: 'work_energy',
        subparts: [
            'Potential energy formula: PE = mgh',
            'Initial PE (at ground): PE₁ = 0 J',
            'Final PE (at 15 m): PE₂ = 50 × 10 × 15 = 7500 J',
            'Change in PE: ΔPE = 7500 - 0 = 7500 J',
            'Work done against gravity: W = ΔPE = 7500 J'
        ],
        helper: 'formula: PE = mgh (relative to reference point)',
        realWorldContext: 'Lifting objects, climbing stairs'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Conservation of Energy',
        problem: 'Ball dropped from 20 m height. Find velocity just before hitting ground. (g = 10 m/s²)',
        parameters: { height: 20, g: 10, useEnergyConservation: true },
        type: 'work_energy',
        subparts: [
            'Initial energy: E₁ = PE = mgh = m(10)(20) = 200m J',
            'Final energy: E₂ = KE = ½mv²',
            'Conservation: 200m = ½mv²',
            'Simplify: 200 = ½v² → v² = 400',
            'v = 20 m/s'
        ],
        helper: 'Energy conservation: PE₁ + KE₁ = PE₂ + KE₂',
        realWorldContext: 'Falling objects, roller coasters'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Power Calculation',
        problem: 'Motor lifts 500 kg load 12 m in 8 seconds. Find average power output. (g = 10 m/s²)',
        parameters: { mass: 500, height: 12, time: 8, g: 10, findPower: true },
        type: 'work_energy',
        subparts: [
            'Work done: W = mgh = 500 × 10 × 12 = 60,000 J',
            'Power formula: P = W/t',
            'Calculate: P = 60,000/8 = 7500 W',
            'P = 7.5 kW',
            'Power is rate of doing work'
        ],
        helper: 'Power: P = W/t = ΔE/t (measured in Watts)',
        realWorldContext: 'Motors, engines, human power output'
    });

    return relatedProblems;
}

generateRelatedMomentumCollisions(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Linear Momentum',
        problem: '1500 kg car traveling at 20 m/s. Calculate momentum.',
        parameters: { mass: 1500, velocity: 20, findMomentum: true },
        type: 'momentum_collisions',
        subparts: [
            'Momentum formula: p = mv',
            'Identify: m = 1500 kg, v = 20 m/s',
            'Calculate: p = 1500 × 20 = 30,000 kg·m/s',
            'Momentum is a vector (direction same as velocity)'
        ],
        helper: 'formula: p = mv (momentum in kg·m/s)',
        realWorldContext: 'Vehicle motion, moving objects'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Impulse',
        problem: '60 N force acts on object for 5 seconds. Find impulse and change in momentum.',
        parameters: { force: 60, time: 5, findImpulse: true },
        type: 'momentum_collisions',
        subparts: [
            'Impulse formula: J = FΔt',
            'Calculate: J = 60 × 5 = 300 N·s',
            'Impulse-Momentum Theorem: J = Δp',
            'Change in momentum: Δp = 300 kg·m/s'
        ],
        helper: 'Impulse J = FΔt = Δp (change in momentum)',
        realWorldContext: 'Collisions, catching/throwing'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Elastic Collision',
        problem: '2 kg ball at 4 m/s collides head-on with 3 kg ball at rest. Find final velocities (elastic collision).',
        parameters: { mass1: 2, velocity1: 4, mass2: 3, velocity2: 0, elasticCollision: true },
        type: 'momentum_collisions',
        subparts: [
            'Conservation of momentum: m₁v₁ + m₂v₂ = m₁v₁\' + m₂v₂\'',
            '2(4) + 3(0) = 2v₁\' + 3v₂\' → 8 = 2v₁\' + 3v₂\' ... (1)',
            'Conservation of KE: ½m₁v₁² + ½m₂v₂² = ½m₁v₁\'² + ½m₂v₂\'²',
            '2(16) = 2v₁\'² + 3v₂\'² → 32 = 2v₁\'² + 3v₂\'² ... (2)',
            'Solve: v₁\' = -0.8 m/s (backward), v₂\' = 3.2 m/s (forward)'
        ],
        helper: 'Elastic: both momentum and KE conserved',
        realWorldContext: 'Billiard balls, atomic collisions'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Inelastic Collision',
        problem: '1000 kg car at 15 m/s collides with 1500 kg car at 10 m/s (same direction). They stick together. Find final velocity.',
        parameters: { mass1: 1000, velocity1: 15, mass2: 1500, velocity2: 10, inelasticCollision: true },
        type: 'momentum_collisions',
        subparts: [
            'Conservation of momentum (they stick): m₁v₁ + m₂v₂ = (m₁ + m₂)v_f',
            'Calculate: 1000(15) + 1500(10) = (1000 + 1500)v_f',
            '15,000 + 15,000 = 2500v_f',
            '30,000 = 2500v_f',
            'v_f = 12 m/s (same direction)'
        ],
        helper: 'Perfectly inelastic: objects stick, momentum conserved, KE not conserved',
        realWorldContext: 'Car crashes, clay balls colliding'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Explosion',
        problem: '10 kg object at rest explodes into 4 kg piece at 15 m/s east. Find velocity of 6 kg piece.',
        parameters: { totalMass: 10, mass1: 4, velocity1: 15, mass2: 6, explosion: true },
        type: 'momentum_collisions',
        subparts: [
            'Initial momentum: p₀ = 0 (at rest)',
            'Conservation: p₀ = p₁ + p₂',
            '0 = m₁v₁ + m₂v₂',
            '0 = 4(15) + 6v₂',
            '6v₂ = -60 → v₂ = -10 m/s',
            'The 6 kg piece moves at 10 m/s west'
        ],
        helper: 'Explosion: initial momentum = 0, pieces move in opposite directions',
        realWorldContext: 'Explosions, recoil, rocket propulsion'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: '2D Collision',
        problem: '5 kg ball at 8 m/s east collides with 3 kg ball at 6 m/s north. They stick. Find final velocity (magnitude and direction).',
        parameters: { mass1: 5, velocity1: 8, mass2: 3, velocity2: 6, twoDimensional: true },
        type: 'momentum_collisions',
        subparts: [
            'x-component: p_x = 5(8) + 3(0) = 40 kg·m/s',
            'y-component: p_y = 5(0) + 3(6) = 18 kg·m/s',
            'Total mass: M = 5 + 3 = 8 kg',
            'Final velocity components: v_x = 40/8 = 5 m/s, v_y = 18/8 = 2.25 m/s',
            'Magnitude: v = √(5² + 2.25²) = √30.06 ≈ 5.48 m/s',
            'Direction: θ = tan⁻¹(2.25/5) ≈ 24.2° north of east'
        ],
        helper: 'Conserve momentum in x and y directions separately',
        realWorldContext: 'Traffic accidents, pool/billiards'
    });

    return relatedProblems;
}

generateRelatedRotationalMotion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Angular Velocity',
        problem: 'Wheel rotates 50 radians in 10 seconds. Find angular velocity.',
        parameters: { angularDisplacement: 50, time: 10, findAngularVelocity: true },
        type: 'rotational_motion',
        subparts: [
            'Angular velocity formula: ω = θ/t',
            'Identify: θ = 50 rad, t = 10 s',
            'Calculate: ω = 50/10 = 5 rad/s',
            'Convert to rpm if needed: ω = 5 × (60/2π) ≈ 47.7 rpm'
        ],
        helper: 'formula: ω = θ/t (rad/s), 1 rev = 2π rad',
        realWorldContext: 'Rotating wheels, motors'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Relationship Linear-Angular',
        problem: 'Point on wheel radius 0.5 m rotating at 4 rad/s. Find linear speed of the point.',
        parameters: { radius: 0.5, angularVelocity: 4, findLinearSpeed: true },
        type: 'rotational_motion',
        subparts: [
            'Linear speed formula: v = rω',
            'Identify: r = 0.5 m, ω = 4 rad/s',
            'Calculate: v = 0.5 × 4 = 2 m/s',
            'Points farther from center move faster'
        ],
        helper: 'Relationship: v = rω, a = rα',
        realWorldContext: 'Points on rotating objects'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Torque Calculation',
        problem: '50 N force applied perpendicular to wrench 0.3 m from bolt. Find torque.',
        parameters: { force: 50, distance: 0.3, angle: 90, findTorque: true },
        type: 'rotational_motion',
        subparts: [
            'Torque formula: τ = rF sin(θ)',
            'Identify: r = 0.3 m, F = 50 N, θ = 90°',
            'Calculate: τ = 0.3 × 50 × sin(90°) = 0.3 × 50 × 1',
            'τ = 15 N·m',
            'Maximum torque when force perpendicular to radius'
        ],
        helper: 'formula: τ = rF sin(θ) (θ = angle between r and F)',
        realWorldContext: 'Using wrenches, opening doors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Moment of Inertia',
        problem: 'Solid disk mass 5 kg, radius 0.4 m rotates at 10 rad/s. Find rotational kinetic energy.',
        parameters: { mass: 5, radius: 0.4, angularVelocity: 10, shape: 'solid disk' },
        type: 'rotational_motion',
        subparts: [
            'Moment of inertia for solid disk: I = ½MR²',
            'Calculate: I = ½(5)(0.4²) = ½(5)(0.16) = 0.4 kg·m²',
            'Rotational KE formula: KE_rot = ½Iω²',
            'Calculate: KE_rot = ½(0.4)(10²) = 0.2(100) = 20 J'
        ],
        helper: 'Solid disk: I = ½MR², KE_rot = ½Iω²',
        realWorldContext: 'Rotating disks, flywheels'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Angular Acceleration',
        problem: 'Wheel angular velocity increases from 5 rad/s to 15 rad/s in 4 seconds. Find angular acceleration.',
        parameters: { initialOmega: 5, finalOmega: 15, time: 4, findAngularAcceleration: true },
        type: 'rotational_motion',
        subparts: [
            'Angular acceleration formula: α = Δω/Δt',
            'Identify: ω₀ = 5 rad/s, ω = 15 rad/s, t = 4 s',
            'Calculate: α = (15 - 5)/4 = 10/4 = 2.5 rad/s²',
            'Analogous to linear: a = Δv/Δt'
        ],
        helper: 'formula: α = Δω/Δt (analogous to a = Δv/Δt)',
        realWorldContext: 'Accelerating wheels, motors starting'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Conservation of Angular Momentum',
        problem: 'Ice skater spinning at 2 rev/s with arms extended (I = 3 kg·m²). Arms pulled in (I = 1 kg·m²). Find new rotation rate.',
        parameters: { I1: 3, omega1: 2, I2: 1, conservationAngularMomentum: true },
        type: 'rotational_motion',
        subparts: [
            'Convert to rad/s: ω₁ = 2 × 2π = 4π rad/s',
            'Conservation of angular momentum: L₁ = L₂',
            'I₁ω₁ = I₂ω₂',
            '3(4π) = 1(ω₂)',
            'ω₂ = 12π rad/s = 6 rev/s',
            'Spinning rate triples when moment of inertia reduced to 1/3'
        ],
        helper: 'L = Iω (conserved when no external torque)',
        realWorldContext: 'Figure skating, rotating platforms'
    });

    return relatedProblems;
}

generateRelatedGravitation(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Newton\'s Law of Gravitation',
        problem: 'Two 50 kg masses separated by 2 m. Find gravitational force. (G = 6.67×10⁻¹¹ N·m²/kg²)',
        parameters: { mass1: 50, mass2: 50, distance: 2, G: 6.67e-11, findForce: true },
        type: 'gravitation',
        subparts: [
            'Newton\'s law: F = Gm₁m₂/r²',
            'Identify: m₁ = 50 kg, m₂ = 50 kg, r = 2 m',
            'Calculate: F = (6.67×10⁻¹¹)(50)(50)/(2²)',
            'F = (6.67×10⁻¹¹)(2500)/4',
            'F = 4.17×10⁻⁸ N (very small!)'
        ],
        helper: 'formula: F = Gm₁m₂/r² (universal gravitation)',
        realWorldContext: 'Gravitational attraction between objects'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Weight on Different Planets',
        problem: '60 kg person. Weight on Earth (g=10 m/s²) vs Mars (g=3.7 m/s²).',
        parameters: { mass: 60, gEarth: 10, gMars: 3.7, compareWeight: true },
        type: 'gravitation',
        subparts: [
            'Weight formula: W = mg',
            'Earth: W_E = 60 × 10 = 600 N',
            'Mars: W_M = 60 × 3.7 = 222 N',
            'Weight on Mars is about 37% of Earth weight',
            'Mass remains 60 kg on both planets'
        ],
        helper: 'Weight varies with g, mass is constant',
        realWorldContext: 'Space exploration, planetary physics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Orbital Velocity',
        problem: 'Satellite orbits Earth at height 400 km. Find orbital velocity. (R_E = 6400 km, g = 10 m/s²)',
        parameters: { height: 400, earthRadius: 6400, g: 10, findOrbitalVelocity: true },
        type: 'gravitation',
        subparts: [
            'Orbital radius: r = R_E + h = 6400 + 400 = 6800 km = 6.8×10⁶ m',
            'For circular orbit: gravitational force = centripetal force',
            'GMm/r² = mv²/r → v² = GM/r',
            'Using g = GM/R_E²: v = √(gR_E²/r)',
            'v = √(10 × (6.4×10⁶)² / (6.8×10⁶)) ≈ 7670 m/s ≈ 7.67 km/s'
        ],
        helper: 'Orbital velocity: v = √(GM/r) = √(gR²/r)',
        realWorldContext: 'Satellites, ISS orbit'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Escape Velocity',
        problem: 'Find escape velocity from Earth\'s surface. (R = 6.4×10⁶ m, g = 10 m/s²)',
        parameters: { radius: 6.4e6, g: 10, findEscapeVelocity: true },
        type: 'gravitation',
        subparts: [
            'Escape velocity formula: v_esc = √(2GM/R)',
            'Using g = GM/R²: v_esc = √(2gR)',
            'Calculate: v_esc = √(2 × 10 × 6.4×10⁶)',
            'v_esc = √(1.28×10⁸) ≈ 11,314 m/s',
            'v_esc ≈ 11.3 km/s (about 25,000 mph)'
        ],
        helper: 'Escape velocity: v_esc = √(2GM/R) = √(2gR)',
        realWorldContext: 'Space launches, leaving Earth'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Gravitational Potential Energy',
        problem: 'Satellite mass 500 kg at height 2000 km above Earth. Find gravitational PE relative to infinity. (G = 6.67×10⁻¹¹, M_E = 6×10²⁴ kg, R_E = 6.4×10⁶ m)',
        parameters: { mass: 500, height: 2000e3, G: 6.67e-11, earthMass: 6e24, earthRadius: 6.4e6 },
        type: 'gravitation',
        subparts: [
            'Gravitational PE: U = -GMm/r',
            'Distance from center: r = R_E + h = 6.4×10⁶ + 2×10⁶ = 8.4×10⁶ m',
            'Calculate: U = -(6.67×10⁻¹¹)(6×10²⁴)(500) / (8.4×10⁶)',
            'U = -2.38×10¹⁰ J',
            'Negative because energy needed to reach infinity'
        ],
        helper: 'Gravitational PE: U = -GMm/r (reference at infinity)',
        realWorldContext: 'Satellite energy, space missions'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Kepler\'s Third Law',
        problem: 'Planet orbits star with period 8 Earth years. Earth orbits in 1 year. If Earth\'s orbit radius is 1 AU, find planet\'s orbit radius.',
        parameters: { period_planet: 8, period_earth: 1, radius_earth: 1, findRadius: true },
        type: 'gravitation',
        subparts: [
            'Kepler\'s Third Law: T² ∝ r³ or T₁²/T₂² = r₁³/r₂³',
            'Let subscript 1 = planet, 2 = Earth',
            '8²/1² = r₁³/1³',
            '64 = r₁³',
            'r₁ = ∛64 = 4 AU',
            'Planet orbits at 4 times Earth\'s distance'
        ],
        helper: 'Kepler\'s 3rd: T² = (4π²/GM)r³ or T₁²/T₂² = r₁³/r₂³',
        realWorldContext: 'Planetary orbits, exoplanets'
    });

    return relatedProblems;
}

// ==================== WAVES AND SOUND GENERATORS ====================

generateRelatedWaveProperties(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Wave Speed Calculation',
        problem: 'Wave has frequency 50 Hz and wavelength 4 m. Find wave speed.',
        parameters: { frequency: 50, wavelength: 4, findSpeed: true },
        type: 'wave_properties',
        subparts: [
            'Wave equation: v = fλ',
            'Identify: f = 50 Hz, λ = 4 m',
            'Calculate: v = 50 × 4 = 200 m/s',
            'Wave speed depends on medium properties'
        ],
        helper: 'formula: v = fλ (wave speed = frequency × wavelength)',
        realWorldContext: 'All wave motion'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Period and Frequency',
        problem: 'Wave completes 20 cycles in 4 seconds. Find frequency and period.',
        parameters: { cycles: 20, time: 4, findFrequencyAndPeriod: true },
        type: 'wave_properties',
        subparts: [
            'Frequency: f = cycles/time = 20/4 = 5 Hz',
            'Period: T = 1/f = 1/5 = 0.2 s',
            'Or directly: T = time/cycles = 4/20 = 0.2 s',
            'Period is time for one complete cycle'
        ],
        helper: 'f = 1/T, Period T = time per cycle',
        realWorldContext: 'Oscillations, vibrations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Wavelength Calculation',
        problem: 'Sound wave frequency 440 Hz travels at 343 m/s. Find wavelength.',
        parameters: { frequency: 440, speed: 343, findWavelength: true },
        type: 'wave_properties',
        subparts: [
            'Use wave equation: v = fλ',
            'Rearrange: λ = v/f',
            'Calculate: λ = 343/440',
            'λ ≈ 0.78 m = 78 cm',
            'This is wavelength of musical note A'
        ],
        helper: 'formula: λ = v/f',
        realWorldContext: 'Musical notes, sound wavelengths'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Wave Energy and Amplitude',
        problem: 'If wave amplitude doubles, how does energy change?',
        parameters: { amplitudeChange: 'doubles', findEnergyChange: true },
        type: 'wave_properties',
        subparts: [
            'Wave energy proportional to amplitude squared: E ∝ A²',
            'If amplitude doubles: A_new = 2A_old',
            'Energy ratio: E_new/E_old = (2A)²/A² = 4',
            'Energy increases by factor of 4',
            'Doubling amplitude quadruples energy'
        ],
        helper: 'Wave energy: E ∝ A² (energy proportional to amplitude squared)',
        realWorldContext: 'Wave intensity, loudness'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Transverse vs Longitudinal',
        problem: 'Compare oscillation direction for transverse wave on string vs longitudinal sound wave.',
        parameters: { compareWaveTypes: true },
        type: 'wave_properties',
        subparts: [
            'Transverse wave (string): particles oscillate perpendicular to wave direction',
            'Example: wave moving right, string moves up-down',
            'Longitudinal wave (sound): particles oscillate parallel to wave direction',
            'Example: compressions and rarefactions move along wave direction',
            'Light is transverse, sound is longitudinal'
        ],
        helper: 'Transverse: ⊥ to motion, Longitudinal: ∥ to motion',
        realWorldContext: 'Different types of waves'
    });

    return relatedProblems;
}

generateRelatedWaveInterference(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Constructive Interference',
        problem: 'Two waves with amplitude 3 cm meet in phase. Find resultant amplitude.',
        parameters: { amplitude1: 3, amplitude2: 3, phaseshift: 0, findResultant: true },
        type: 'wave_interference',
        subparts: [
            'Constructive interference: waves in phase',
            'Resultant amplitude: A = A₁ + A₂',
            'Calculate: A = 3 + 3 = 6 cm',
            'Amplitudes add when waves in phase (Δφ = 0, 2π, 4π...)'
        ],
        helper: 'Constructive: in phase, amplitudes add',
        realWorldContext: 'Wave superposition, standing waves'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Destructive Interference',
        problem: 'Two waves amplitude 5 cm and 3 cm meet completely out of phase. Find resultant amplitude.',
        parameters: { amplitude1: 5, amplitude2: 3, phaseshift: Math.PI, findResultant: true },
        type: 'wave_interference',
        subparts: [
            'Destructive interference: waves 180° out of phase',
            'Resultant amplitude: A = |A₁ - A₂|',
            'Calculate: A = |5 - 3| = 2 cm',
            'Partial cancellation when amplitudes different'
        ],
        helper: 'Destructive: out of phase (π, 3π...), amplitudes subtract',
        realWorldContext: 'Noise cancellation, wave interference'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Path Difference',
        problem: 'Two sources emit waves λ = 2 m. Point P is 10 m from source 1, 13 m from source 2. Constructive or destructive?',
        parameters: { wavelength: 2, distance1: 10, distance2: 13, determineInterference: true },
        type: 'wave_interference',
        subparts: [
            'Path difference: Δd = |d₂ - d₁| = |13 - 10| = 3 m',
            'Express in wavelengths: Δd/λ = 3/2 = 1.5',
            '1.5λ = (3/2)λ means path difference is odd multiple of λ/2',
            'Condition: Δd = (n + ½)λ for destructive interference',
            'Result: Destructive interference at point P'
        ],
        helper: 'Constructive: Δd = nλ, Destructive: Δd = (n + ½)λ',
        realWorldContext: 'Wave interference patterns'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Superposition Principle',
        problem: 'Wave 1:y₁ = 2sin(x), Wave 2: y₂ = 3sin(x). Find resultant wave at same point.',
        parameters: { wave1: '2sin(x)', wave2: '3sin(x)', findSuperposition: true },
        type: 'wave_interference',
        subparts: [
            'Superposition principle: y_total = y₁ + y₂',
            'Both waves have same frequency and phase',
            'Add amplitudes: y_total = 2sin(x) + 3sin(x)',
            'y_total = 5sin(x)',
            'Resultant amplitude = 5 units'
        ],
        helper: 'Superposition: y_total = Σy_i (algebraic sum)',
        realWorldContext: 'Multiple wave sources'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Phase Difference and Interference',
        problem: 'Two identical waves amplitude 4 cm with phase difference 90°. Find resultant amplitude.',
        parameters: { amplitude: 4, phaseDifference: 90, findResultant: true },
        type: 'wave_interference',
        subparts: [
            'For phase difference φ: A_resultant = √(A₁² + A₂² + 2A₁A₂cos(φ))',
            'Here: A₁ = A₂ = 4 cm, φ = 90° = π/2',
            'A = √(4² + 4² + 2(4)(4)cos(90°))',
            'A = √(16 + 16 + 0) = √32 = 4√2 ≈ 5.66 cm',
            'Partial interference (neither fully constructive nor destructive)'
        ],
        helper: 'General formula: A = √(A₁² + A₂² + 2A₁A₂cosφ)',
        realWorldContext: 'Complex interference patterns'
    });

    return relatedProblems;
}

generateRelatedSoundWaves(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Speed of Sound',
        problem: 'Sound travels 1715 m in 5 seconds. Find speed of sound in this medium.',
        parameters: { distance: 1715, time: 5, findSpeed: true },
        type: 'sound_waves',
        subparts: [
            'Speed formula: v = d/t',
            'Calculate: v = 1715/5 = 343 m/s',
            'This is speed of sound in air at 20°C',
            'Speed varies with medium and temperature'
        ],
        helper: 'Sound speed in air ≈ 343 m/s at 20°C',
        realWorldContext: 'Sound propagation'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Echo Calculation',
        problem: 'Person shouts toward cliff 170 m away. After how long does echo return? (v_sound = 340 m/s)',
        parameters: { distance: 170, soundSpeed: 340, findEchoTime: true },
        type: 'sound_waves',
        subparts: [
            'Sound travels to cliff and back: total distance = 2d',
            'Total distance = 2 × 170 = 340 m',
            'Time = distance/speed = 340/340 = 1 s',
            'Echo heard after 1 second'
        ],
        helper: 'Echo: sound travels twice the distance',
        realWorldContext: 'Sonar, echolocation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sound Intensity and Decibels',
        problem: 'Sound intensity increases from 1×10⁻⁶ W/m² to 1×10⁻⁴ W/m². Find change in decibel level. (I₀ = 1×10⁻¹² W/m²)',
        parameters: { I1: 1e-6, I2: 1e-4, I0: 1e-12, findDecibelChange: true },
        type: 'sound_waves',
        subparts: [
            'Decibel formula: β = 10 log(I/I₀)',
            'Initial: β₁ = 10 log(10⁻⁶/10⁻¹²) = 10 log(10⁶) = 60 dB',
            'Final: β₂ = 10 log(10⁻⁴/10⁻¹²) = 10 log(10⁸) = 80 dB',
            'Change: Δβ = 80 - 60 = 20 dB',
            'Intensity increased 100×, loudness increased 20 dB'
        ],
        helper: 'β (dB) = 10 log(I/I₀), I₀ = 10⁻¹² W/m²',
        realWorldContext: 'Sound loudness measurement'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Pitch and Frequency',
        problem: 'Musical note A has frequency 440 Hz. What is frequency of A one octave higher?',
        parameters: { frequency: 440, octaveChange: 1, findNewFrequency: true },
        type: 'sound_waves',
        subparts: [
            'One octave higher means frequency doubles',
            'New frequency: f_new = 2 × f_old',
            'Calculate: f_new = 2 × 440 = 880 Hz',
            'Each octave up doubles frequency, down halves it'
        ],
        helper: 'Octave: frequency ratio of 2:1',
        realWorldContext: 'Musical scales, instruments'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Sound in Different Media',
        problem: 'Sound travels 1500 m/s in water, 343 m/s in air. Frequency 500 Hz. Compare wavelengths.',
        parameters: { speedWater: 1500, speedAir: 343, frequency: 500, compareWavelengths: true },
        type: 'sound_waves',
        subparts: [
            'Wavelength formula: λ = v/f',
            'In water: λ_w = 1500/500 = 3 m',
            'In air: λ_a = 343/500 = 0.686 m',
            'Frequency same in both media (determined by source)',
            'Wavelength longer in water due to higher speed'
        ],
        helper: 'Frequency constant across media, wavelength varies with speed',
        realWorldContext: 'Underwater acoustics'
    });

    return relatedProblems;
}

generateRelatedDopplerEffect(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Moving Source Approaching',
        problem: 'Police siren 800 Hz moves toward stationary observer at 30 m/s. Find observed frequency. (v_sound = 340 m/s)',
        parameters: { sourceFrequency: 800, sourceVelocity: 30, observerVelocity: 0, soundSpeed: 340, approaching: true },
        type: 'doppler_effect',
        subparts: [
            'Doppler formula (source approaching): f\' = f(v/(v - v_s))',
            'Identify: f = 800 Hz, v = 340 m/s, v_s = 30 m/s',
            'Calculate: f\' = 800(340/(340 - 30))',
            'f\' = 800(340/310) = 800(1.097)',
            'f\' ≈ 877.4 Hz (higher pitch when approaching)'
        ],
        helper: 'Source approaching: f\' = f(v/(v - v_s))',
        realWorldContext: 'Sirens, trains approaching'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Moving Source Receding',
        problem: 'Car horn 500 Hz moves away at 20 m/s. Find observed frequency. (v_sound = 340 m/s)',
        parameters: { sourceFrequency: 500, sourceVelocity: 20, soundSpeed: 340, receding: true },
        type: 'doppler_effect',
        subparts: [
            'Doppler formula (source receding): f\' = f(v/(v + v_s))',
            'Identify: f = 500 Hz, v = 340 m/s, v_s = 20 m/s',
            'Calculate: f\' = 500(340/(340 + 20))',
            'f\' = 500(340/360) = 500(0.944)',
            'f\' ≈ 472.2 Hz (lower pitch when receding)'
        ],
        helper: 'Source receding: f\' = f(v/(v + v_s))',
        realWorldContext: 'Vehicles moving away'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Moving Observer',
        problem: 'Observer moves at 25 m/s toward stationary 600 Hz source. Find observed frequency. (v_sound = 340 m/s)',
        parameters: { sourceFrequency: 600, observerVelocity: 25, sourceVelocity: 0, soundSpeed: 340, observerApproaching: true },
        type: 'doppler_effect',
        subparts: [
            'Doppler formula (observer approaching): f\' = f((v + v_o)/v)',
            'Identify: f = 600 Hz, v = 340 m/s, v_o = 25 m/s',
            'Calculate: f\' = 600((340 + 25)/340)',
            'f\' = 600(365/340) = 600(1.074)',
            'f\' ≈ 644.1 Hz'
        ],
        helper: 'Observer approaching: f\' = f((v + v_o)/v)',
        realWorldContext: 'Person running toward sound source'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Both Moving',
        problem: 'Source (700 Hz) approaches at 20 m/s, observer approaches at 15 m/s. Find observed frequency. (v = 340 m/s)',
        parameters: { sourceFrequency: 700, sourceVelocity: 20, observerVelocity: 15, soundSpeed: 340, bothApproaching: true },
        type: 'doppler_effect',
        subparts: [
            'General Doppler formula: f\' = f((v + v_o)/(v - v_s))',
            'Both approaching: v_o positive, v_s positive in denominator',
            'Calculate: f\' = 700((340 + 15)/(340 - 20))',
            'f\' = 700(355/320) = 700(1.109)',
            'f\' ≈ 776.6 Hz'
        ],
        helper: 'Both moving: f\' = f((v ± v_o)/(v ∓ v_s))',
        realWorldContext: 'Complex relative motion scenarios'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Doppler Shift Application',
        problem: 'Radar gun measures car. Emitted frequency 10 GHz, received 10.0005 GHz. Find car speed. (c = 3×10⁸ m/s)',
        parameters: { emittedFreq: 1e10, receivedFreq: 1.00005e10, lightSpeed: 3e8, findSpeed: true },
        type: 'doppler_effect',
        subparts: [
            'For light/radar: Δf/f ≈ v/c (for v << c)',
            'Frequency shift: Δf = 10.0005 - 10 = 0.0005 GHz = 500 kHz',
            'Ratio: Δf/f = 500×10³/10×10⁹ = 5×10⁻⁵',
            'Speed: v = c(Δf/f) = 3×10⁸ × 5×10⁻⁵',
            'v = 15,000 m/s = 15 km/s (very fast!)'
        ],
        helper: 'Radar Doppler: Δf/f ≈ v/c',
        realWorldContext: 'Police radar, astronomy'
    });

    return relatedProblems;
}

generateRelatedStandingWaves(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'String Fixed Both Ends',
        problem: 'String length 2 m, fixed both ends, 3rd harmonic. Wave speed 100 m/s. Find frequency.',
        parameters: { length: 2, harmonic: 3, waveSpeed: 100, fixedBothEnds: true },
        type: 'standing_waves',
        subparts: [
            'For string fixed both ends: L = nλ/2 (n = 1, 2, 3...)',
            '3rd harmonic means n = 3',
            'Wavelength: 2 = 3λ/2 → λ = 4/3 m',
            'Frequency: f = v/λ = 100/(4/3) = 75 Hz',
            'Or directly: f_n = nv/(2L) = 3(100)/(2×2) = 75 Hz'
        ],
        helper: 'Fixed both ends: f_n = nv/(2L), n = 1, 2, 3...',
        realWorldContext: 'Guitar strings, violin strings'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Fundamental Frequency',
        problem: 'String 1.5 m long, wave speed 60 m/s. Find fundamental frequency (1st harmonic).',
        parameters: { length: 1.5, waveSpeed: 60, harmonic: 1, findFundamental: true },
        type: 'standing_waves',
        subparts: [
            'Fundamental frequency (n = 1): f₁ = v/(2L)',
            'Calculate: f₁ = 60/(2 × 1.5)',
            'f₁ = 60/3 = 20 Hz',
            'Fundamental has lowest frequency, longest wavelength'
        ],
        helper: 'Fundamental: f₁ = v/(2L) for fixed-fixed string',
        realWorldContext: 'Musical instrument lowest note'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Pipe Open Both Ends',
        problem: 'Pipe 0.5 m open both ends, 2nd harmonic. Speed of sound 340 m/s. Find frequency.',
        parameters: { length: 0.5, harmonic: 2, soundSpeed: 340, openBothEnds: true },
        type: 'standing_waves',
        subparts: [
            'Open both ends (like string): L = nλ/2',
            '2nd harmonic: n = 2',
            'L = 2λ/2 = λ → λ = L = 0.5 m',
            'Frequency: f = v/λ = 340/0.5 = 680 Hz',
            'Or: f_n = nv/(2L) = 2(340)/(2×0.5) = 680 Hz'
        ],
        helper: 'Open both ends: f_n = nv/(2L), n = 1, 2, 3...',
        realWorldContext: 'Flutes, organ pipes open both ends'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Pipe Closed One End',
        problem: 'Pipe 0.8 m closed one end, 3rd harmonic (n=3). Speed 340 m/s. Find frequency.',
        parameters: { length: 0.8, harmonic: 3, soundSpeed: 340, closedOneEnd: true },
        type: 'standing_waves',
        subparts: [
            'Closed one end: only odd harmonics, L = (2n-1)λ/4',
            '3rd harmonic means n = 3 (but 3rd odd harmonic)',
            'Actually 5th overall harmonic: L = 5λ/4',
            'λ = 4L/5 = 4(0.8)/5 = 0.64 m',
            'f = v/λ = 340/0.64 = 531.25 Hz',
            'Or: f_n = (2n-1)v/(4L) = 5(340)/(4×0.8) = 531.25 Hz'
        ],
        helper: 'Closed one end: f_n = (2n-1)v/(4L), n = 1, 3, 5... (odd only)',
        realWorldContext: 'Clarinet, bottles'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Nodes and Antinodes',
        problem: 'Standing wave on 4 m string has 5 nodes (including endpoints). What harmonic is this?',
        parameters: { length: 4, nodes: 5, findHarmonic: true },
        type: 'standing_waves',
        subparts: [
            'Number of nodes = n + 1 (where n = harmonic number)',
            '5 = n + 1 → n = 4',
            'This is the 4th harmonic',
            'Wavelength: L = nλ/2 → 4 = 4λ/2 → λ = 2 m',
            '4 complete half-wavelengths fit on string'
        ],
        helper: 'Nodes = n + 1, Antinodes = n (for fixed-fixed)',
        realWorldContext: 'Visualizing standing wave patterns'
    });

    return relatedProblems;
}

generateRelatedResonance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Resonance Frequency',
        problem: 'Tuning fork 512 Hz held over tube. First resonance at 16 cm. Find speed of sound.',
        parameters: { frequency: 512, firstResonance: 0.16, findSoundSpeed: true },
        type: 'resonance',
        subparts: [
            'For tube closed one end, first resonance: L₁ = λ/4',
            'Wavelength: λ = 4L₁ = 4 × 0.16 = 0.64 m',
            'Wave speed: v = fλ = 512 × 0.64',
            'v = 327.68 m/s ≈ 328 m/s',
            'Close to standard 343 m/s (temperature dependent)'
        ],
        helper: 'First resonance (closed tube): L = λ/4',
        realWorldContext: 'Resonance tube experiments'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Natural Frequency',
        problem: 'Pendulum length 1 m. Find natural frequency of oscillation. (g = 10 m/s²)',
        parameters: { length: 1, g: 10, findNaturalFrequency: true },
        type: 'resonance',
        subparts: [
            'Pendulum period: T = 2π√(L/g)',
            'Calculate: T = 2π√(1/10) = 2π√0.1',
            'T ≈ 2π(0.316) ≈ 1.99 s ≈ 2 s',
            'Frequency: f = 1/T = 1/2 = 0.5 Hz',
            'This is its natural (resonant) frequency'
        ],
        helper: 'Pendulum: f = (1/2π)√(g/L)',
        realWorldContext: 'Pendulum clocks, swings'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resonance Condition',
        problem: 'Mass-spring system: m = 2 kg, k = 200 N/m. Find resonant frequency.',
        parameters: { mass: 2, springConstant: 200, findResonantFrequency: true },
        type: 'resonance',
        subparts: [
            'Resonant angular frequency: ω₀ = √(k/m)',
            'Calculate: ω₀ = √(200/2) = √100 = 10 rad/s',
            'Convert to Hz: f = ω/(2π) = 10/(2π)',
            'f ≈ 1.59 Hz',
            'System oscillates naturally at this frequency'
        ],
        helper: 'Mass-spring resonance: ω₀ = √(k/m), f = ω/(2π)',
        realWorldContext: 'Mechanical oscillators, suspension systems'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resonance Amplification',
        problem: 'Driving frequency matches natural frequency 5 Hz. Amplitude increases from 2 cm to 20 cm. Explain.',
        parameters: { naturalFreq: 5, drivingFreq: 5, initialAmp: 2, resonanceAmp: 20 },
        type: 'resonance',
        subparts: [
            'When driving frequency = natural frequency: resonance occurs',
            'Energy transfers efficiently from driver to system',
            'Amplitude grows to maximum (limited by damping)',
            'Amplitude increased 10×: from 2 cm to 20 cm',
            'This demonstrates resonance amplification'
        ],
        helper: 'Resonance: maximum amplitude when f_drive = f_natural',
        realWorldContext: 'Bridge vibrations, breaking glass with sound'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Resonance in Real Systems',
        problem: 'Why do buildings have natural frequencies, and why is this important in earthquakes?',
        parameters: { realWorldResonance: true, buildings: true },
        type: 'resonance',
        subparts: [
            'Every structure has natural frequency based on size, mass, stiffness',
            'If earthquake frequency matches building frequency: resonance',
            'Resonance causes large amplitude oscillations',
            'Can lead to structural failure',
            'Engineers design to avoid resonance with common earthquake frequencies'
        ],
        helper: 'Resonance can be destructive in structures',
        realWorldContext: 'Earthquake engineering, building design'
    });

    return relatedProblems;
}

// ==================== THERMODYNAMICS AND HEAT GENERATORS ====================

generateRelatedTemperatureHeat(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Temperature Conversion',
        problem: 'Convert 77°F to Celsius and Kelvin.',
        parameters: { fahrenheit: 77, convertToCelsiusKelvin: true },
        type: 'temperature_heat',
        subparts: [
            'Fahrenheit to Celsius: C = (F - 32) × 5/9',
            'Calculate: C = (77 - 32) × 5/9 = 45 × 5/9 = 25°C',
            'Celsius to Kelvin: K = C + 273.15',
            'K = 25 + 273.15 = 298.15 K',
            'Room temperature is about 25°C or 298 K'
        ],
        helper: 'C = (F-32)×5/9, K = C + 273.15',
        realWorldContext: 'International temperature scales'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Heat Calculation',
        problem: '500 g water heated from 20°C to 80°C. Find heat required. (c_water = 4.18 J/g°C)',
        parameters: { mass: 500, initialTemp: 20, finalTemp: 80, specificHeat: 4.18 },
        type: 'temperature_heat',
        subparts: [
            'Heat formula: Q = mcΔT',
            'Temperature change: ΔT = 80 - 20 = 60°C',
            'Calculate: Q = 500 × 4.18 × 60',
            'Q = 125,400 J = 125.4 kJ',
            'Significant energy needed to heat water'
        ],
        helper: 'formula: Q = mcΔT',
        realWorldContext: 'Heating water, cooking'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Specific Heat Determination',
        problem: '200 g metal at 100°C dropped into 500 g water at 20°C. Final temperature 25°C. Find specific heat of metal. (c_water = 4.18 J/g°C)',
        parameters: { massMetal: 200, initialTempMetal: 100, massWater: 500, initialTempWater: 20, finalTemp: 25, cWater: 4.18 },
        type: 'temperature_heat',
        subparts: [
            'Heat lost by metal = Heat gained by water',
            'Q_metal = m_m c_m ΔT_m = 200 × c_m × (100-25) = 15000c_m',
            'Q_water = m_w c_w ΔT_w = 500 × 4.18 × (25-20) = 10,450 J',
            'Set equal: 15000c_m = 10,450',
            'c_m = 10,450/15,000 = 0.697 J/g°C (likely aluminum)'
        ],
        helper: 'Calorimetry: Q_lost = Q_gained',
        realWorldContext: 'Determining unknown specific heats'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heat Capacity',
        problem: 'Object requires 5000 J to increase temperature by 10°C. Find heat capacity.',
        parameters: { heat: 5000, tempChange: 10, findHeatCapacity: true },
        type: 'temperature_heat',
        subparts: [
            'Heat capacity: C = Q/ΔT',
            'Calculate: C = 5000/10 = 500 J/°C',
            'Heat capacity is total for the object',
            'Related to specific heat: C = mc',
            'Higher heat capacity means harder to change temperature'
        ],
        helper: 'Heat capacity C = Q/ΔT (J/°C or J/K)',
        realWorldContext: 'Thermal mass, temperature stability'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Equilibrium',
        problem: '300 g aluminum (c=0.9 J/g°C) at 120°C mixed with 400 g copper (c=0.39 J/g°C) at 20°C. Find final temperature.',
        parameters: { massAl: 300, cAl: 0.9, tempAl: 120, massCu: 400, cCu: 0.39, tempCu: 20 },
        type: 'temperature_heat',
        subparts: [
            'Heat lost = Heat gained',
            'm_Al c_Al (120 - T_f) = m_Cu c_Cu (T_f - 20)',
            '300(0.9)(120 - T_f) = 400(0.39)(T_f - 20)',
            '270(120 - T_f) = 156(T_f - 20)',
            '32,400 - 270T_f = 156T_f - 3,120',
            '35,520 = 426T_f → T_f ≈ 83.4°C'
        ],
        helper: 'Thermal equilibrium: ΣQ = 0',
        realWorldContext: 'Mixing different materials'
    });

    return relatedProblems;
}

generateRelatedThermalExpansion(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Linear Expansion',
        problem: 'Steel rod 10 m long at 20°C heated to 120°C. Find change in length. (α_steel = 12×10⁻⁶ /°C)',
        parameters: { initialLength: 10, initialTemp: 20, finalTemp: 120, alpha: 12e-6 },
        type: 'thermal_expansion',
        subparts: [
            'Linear expansion: ΔL = αL₀ΔT',
            'Temperature change: ΔT = 120 - 20 = 100°C',
            'Calculate: ΔL = 12×10⁻⁶ × 10 × 100',
            'ΔL = 0.012 m = 1.2 cm',
            'Rod expands by 1.2 cm'
        ],
        helper: 'formula: ΔL = αL₀ΔT',
        realWorldContext: 'Railway tracks, bridge expansion joints'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Why Expansion Joints',
        problem: 'Concrete bridge 100 m at 10°C, reaches 40°C in summer. Estimate expansion. (α = 10×10⁻⁶ /°C)',
        parameters: { length: 100, tempChange: 30, alpha: 10e-6 },
        type: 'thermal_expansion',
        subparts: [
            'Use ΔL = αL₀ΔT',
            'ΔT = 40 - 10 = 30°C',
            'ΔL = 10×10⁻⁶ × 100 × 30',
            'ΔL = 0.03 m = 3 cm',
            'Without expansion joints, would cause buckling/cracking'
        ],
        helper: 'Expansion joints accommodate thermal expansion',
        realWorldContext: 'Civil engineering, infrastructure'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Area Expansion',
        problem: 'Square aluminum plate side 0.5 m at 25°C heated to 225°C. Find change in area. (α = 24×10⁻⁶ /°C)',
        parameters: { side: 0.5, initialTemp: 25, finalTemp: 225, alpha: 24e-6 },
        type: 'thermal_expansion',
        subparts: [
            'Area expansion:ΔA = 2αA₀ΔT (or ΔA ≈ βA₀ΔT where β = 2α)',
            'Initial area: A₀ = 0.5² = 0.25 m²',
            'Temperature change: ΔT = 225 - 25 = 200°C',
            'Calculate: ΔA = 2 × 24×10⁻⁶ × 0.25 × 200',
            'ΔA = 48×10⁻⁶ × 50 = 0.0024 m² = 24 cm²'
        ],
        helper: 'Area expansion: ΔA = 2αA₀ΔT or ΔA = βA₀ΔT',
        realWorldContext: 'Metal sheets, glass panels'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Volume Expansion',
        problem: '1000 cm³ gasoline at 15°C heated to 35°C in tank. Find volume increase. (β = 950×10⁻⁶ /°C)',
        parameters: { initialVolume: 1000, initialTemp: 15, finalTemp: 35, beta: 950e-6 },
        type: 'thermal_expansion',
        subparts: [
            'Volume expansion: ΔV = βV₀ΔT (β = volume expansion coefficient)',
            'Temperature change: ΔT = 35 - 15 = 20°C',
            'Calculate: ΔV = 950×10⁻⁶ × 1000 × 20',
            'ΔV = 19 cm³',
            'Gasoline expands significantly (why tanks have overflow)'
        ],
        helper: 'Volume expansion: ΔV = βV₀ΔT, β = 3α for solids',
        realWorldContext: 'Fuel tanks, liquid storage'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Water Anomaly',
        problem: 'Explain why water contracts from 0°C to 4°C instead of expanding.',
        parameters: { waterAnomaly: true, explainBehavior: true },
        type: 'thermal_expansion',
        subparts: [
            'Most substances expand when heated at all temperatures',
            'Water is anomalous: contracts from 0°C to 4°C',
            'Maximum density at 4°C',
            'Above 4°C: normal expansion occurs',
            'Due to hydrogen bonding structure breaking down',
            'Ice floats because it\'s less dense than water at 0°C'
        ],
        helper: 'Water has maximum density at 4°C',
        realWorldContext: 'Why ice floats, why lakes freeze from top'
    });

    return relatedProblems;
}

generateRelatedCalorimetry(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Simple Calorimetry',
        problem: '100 g ice at -10°C heated to water at 20°C. Find total heat. (c_ice = 2.1 J/g°C, L_f = 334 J/g, c_water = 4.18 J/g°C)',
        parameters: { mass: 100, initialTemp: -10, finalTemp: 20, cIce: 2.1, Lf: 334, cWater: 4.18 },
        type: 'calorimetry',
        subparts: [
            'Step 1: Heat ice from -10°C to 0°C: Q₁ = mcΔT = 100(2.1)(10) = 2,100 J',
            'Step 2: Melt ice at 0°C: Q₂ = mL_f = 100(334) = 33,400 J',
            'Step 3: Heat water from 0°C to 20°C: Q₃ = mcΔT = 100(4.18)(20) = 8,360 J',
            'Total heat: Q_total = Q₁ + Q₂ + Q₃ = 2,100 + 33,400 + 8,360',
            'Q_total = 43,860 J ≈ 43.9 kJ'
        ],
        helper: 'Phase changes: Q = mL (no temperature change during phase change)',
        realWorldContext: 'Melting ice, cooking'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Heat of Fusion',
        problem: '50 g ice at 0°C completely melts. Find heat absorbed. (L_f = 334 J/g)',
        parameters: { mass: 50, Lf: 334, phaseChange: 'melting' },
        type: 'calorimetry',
        subparts: [
            'Heat for phase change: Q = mL',
            'Latent heat of fusion for ice: L_f = 334 J/g',
            'Calculate: Q = 50 × 334 = 16,700 J',
            'Q = 16.7 kJ',
            'Temperature stays 0°C during melting'
        ],
        helper: 'Melting/Freezing: Q = mL_f',
        realWorldContext: 'Ice melting, freezing water'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat of Vaporization',
        problem: '200 g water at 100°C completely vaporizes to steam at 100°C. Find heat. (L_v = 2260 J/g)',
        parameters: { mass: 200, Lv: 2260, phaseChange: 'vaporization' },
        type: 'calorimetry',
        subparts: [
            'Heat for vaporization: Q = mL_v',
            'Latent heat of vaporization: L_v = 2260 J/g',
            'Calculate: Q = 200 × 2260 = 452,000 J',
            'Q = 452 kJ',
            'Much more energy needed to vaporize than melt (L_v >> L_f)'
        ],
        helper: 'Vaporization/Condensation: Q = mL_v',
        realWorldContext: 'Boiling water, steam production'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Cooling Curve',
        problem: '100 g steam at 120°C cooled to ice at -20°C. Calculate total heat removed. (c_steam = 2.0, L_v = 2260, c_water = 4.18, L_f = 334, c_ice = 2.1 J/g°C)',
        parameters: { mass: 100, initialTemp: 120, finalTemp: -20, allPhaseChanges: true },
        type: 'calorimetry',
        subparts: [
            'Q₁: Cool steam 120°C→100°C: 100(2.0)(20) = 4,000 J',
            'Q₂: Condense at 100°C: 100(2260) = 226,000 J',
            'Q₃: Cool water 100°C→0°C: 100(4.18)(100) = 41,800 J',
            'Q₄: Freeze at 0°C: 100(334) = 33,400 J',
            'Q₅: Cool ice 0°C→-20°C: 100(2.1)(20) = 4,200 J',
            'Total: 4,000 + 226,000 + 41,800 + 33,400 + 4,200 = 309,400 J ≈ 309.4 kJ'
        ],
        helper: 'Multiple phase changes: sum all heating/cooling stages',
        realWorldContext: 'Complete cooling process'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Mixing with Phase Change',
        problem: '50 g ice at 0°C added to 200 g water at 40°C. Find final temperature. (L_f = 334 J/g, c_water = 4.18 J/g°C)',
        parameters: { massIce: 50, massWater: 200, tempWater: 40, Lf: 334, cWater: 4.18 },
        type: 'calorimetry',
        subparts: [
            'Check if enough heat to melt all ice: Q_melt = 50(334) = 16,700 J',
            'Heat available from water: Q_available = 200(4.18)(40-0) = 33,440 J',
            'Since 33,440 > 16,700, all ice melts with heat left over',
            'Heat balance: 200(4.18)(40-T) = 50(334) + 50(4.18)(T-0)',
            '836(40-T) = 16,700 + 209T → 33,440 - 836T = 16,700 + 209T',
            '16,740 = 1045T → T ≈ 16°C'
        ],
        helper: 'Check if phase change completes before solving',
        realWorldContext: 'Cooling drinks with ice'
    });

    return relatedProblems;
}

generateRelatedHeatTransfer(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Conduction Through Wall',
        problem: 'Brick wall 20 cm thick, area 10 m², inside 25°C, outside 5°C. Find heat flow rate. (k_brick = 0.6 W/m·K)',
        parameters: { thickness: 0.2, area: 10, tempInside: 25, tempOutside: 5, k: 0.6 },
        type: 'heat_transfer',
        subparts: [
            'Conduction formula: Q/t = kAΔT/d',
            'Temperature difference: ΔT = 25 - 5 = 20 K (or 20°C)',
            'Calculate: Q/t = 0.6 × 10 × 20 / 0.2',
            'Q/t = 120 / 0.2 = 600 W',
            '600 J of heat flows through wall every second'
        ],
        helper: 'Conduction: Q/t = kAΔT/d (k = thermal conductivity)',
        realWorldContext: 'Building insulation, heat loss'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Comparing Materials',
        problem: 'Which conducts heat better: copper (k=400 W/m·K) or wood (k=0.15 W/m·K)?',
        parameters: { kCopper: 400, kWood: 0.15, compareConductivity: true },
        type: 'heat_transfer',
        subparts: [
            'Thermal conductivity k indicates how well material conducts',
            'Copper: k = 400 W/m·K (high conductivity)',
            'Wood: k = 0.15 W/m·K (low conductivity)',
            'Copper conducts 400/0.15 ≈ 2667 times better',
            'Metals are good conductors, wood is good insulator'
        ],
        helper: 'High k = good conductor, Low k = good insulator',
        realWorldContext: 'Material selection for insulation/conduction'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Composite Wall',
        problem: 'Wall: 10cm brick (k=0.6) + 5cm insulation (k=0.04). Area 8 m², ΔT=20K. Find heat flow rate.',
        parameters: { d1: 0.1, k1: 0.6, d2: 0.05, k2: 0.04, area: 8, deltaT: 20 },
        type: 'heat_transfer',
        subparts: [
            'Series conduction: R_total = R₁ + R₂ (thermal resistance)',
            'R = d/(kA), so R₁ = 0.1/(0.6×8) = 0.0208 K/W',
            'R₂ = 0.05/(0.04×8) = 0.156 K/W',
            'R_total = 0.0208 + 0.156 = 0.177 K/W',
            'Q/t = ΔT/R_total = 20/0.177 ≈ 113 W'
        ],
        helper: 'Series: R_total = Σ(d_i/k_i A), Q/t = ΔT/R_total',
        realWorldContext: 'Multi-layer insulation'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Convection',
        problem: 'Hot plate 100°C in air at 20°C, area 0.5 m². Convection coefficient h = 25 W/m²·K. Find heat loss rate.',
        parameters: { tempSurface: 100, tempAir: 20, area: 0.5, h: 25, convection: true },
        type: 'heat_transfer',
        subparts: [
            'Convection formula: Q/t = hAΔT',
            'Temperature difference: ΔT = 100 - 20 = 80 K',
            'Calculate: Q/t = 25 × 0.5 × 80',
            'Q/t = 1000 W = 1 kW',
            'Convection involves fluid motion transferring heat'
        ],
        helper: 'Convection: Q/t = hAΔT (h = convection coefficient)',
        realWorldContext: 'Cooling by air, heating/cooling systems'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Radiation',
        problem: 'Black body at 500 K, surface area 0.2 m². Find radiated power. (σ = 5.67×10⁻⁸ W/m²·K⁴)',
        parameters: { temperature: 500, area: 0.2, sigma: 5.67e-8, emissivity: 1 },
        type: 'heat_transfer',
        subparts: [
            'Stefan-Boltzmann Law: P = εσAT⁴',
            'For black body: ε = 1 (perfect emitter)',
            'Calculate: P = 1 × 5.67×10⁻⁸ × 0.2 × 500⁴',
            'P = 1.134×10⁻⁸ × 6.25×10¹⁰',
            'P ≈ 709 W'
        ],
        helper: 'Stefan-Boltzmann: P = εσAT⁴ (ε = emissivity, 0 to 1)',
        realWorldContext: 'Thermal radiation, heat lamps'
    });

    return relatedProblems;
}

generateRelatedGasLawsPhysics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Ideal Gas Law',
        problem: '2 moles of gas at 300 K in container with pressure 1.5 atm. Find volume. (R = 0.0821 L·atm/mol·K)',
        parameters: { moles: 2, temperature: 300, pressure: 1.5, R: 0.0821, findVolume: true },
        type: 'gas_laws_physics',
        subparts: [
            'Ideal Gas Law: PV = nRT',
            'Rearrange for volume: V = nRT/P',
            'Calculate: V = 2 × 0.0821 × 300 / 1.5',
            'V = 49.26 / 1.5',
            'V ≈ 32.8 L'
        ],
        helper: 'Ideal Gas Law: PV = nRT',
        realWorldContext: 'Gas behavior under various conditions'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Boyle\'s Law',
        problem: 'Gas at 2 atm occupies 5 L. If pressure increases to 5 atm (constant T), find new volume.',
        parameters: { P1: 2, V1: 5, P2: 5, constantTemp: true, findV2: true },
        type: 'gas_laws_physics',
        subparts: [
            'Boyle\'s Law (constant T): P₁V₁ = P₂V₂',
            'Rearrange: V₂ = P₁V₁/P₂',
            'Calculate: V₂ = 2 × 5 / 5',
            'V₂ = 2 L',
            'Pressure increased, volume decreased (inverse relationship)'
        ],
        helper: 'Boyle\'s Law: P₁V₁ = P₂V₂ (constant T, n)',
        realWorldContext: 'Compressing gases, diving'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Charles\' Law',
        problem: 'Gas at 300 K occupies 10 L. Heated to 450 K at constant pressure. Find new volume.',
        parameters: { T1: 300, V1: 10, T2: 450, constantPressure: true, findV2: true },
        type: 'gas_laws_physics',
        subparts: [
            'Charles\' Law (constant P): V₁/T₁ = V₂/T₂',
            'Rearrange: V₂ = V₁T₂/T₁',
            'Calculate: V₂ = 10 × 450 / 300',
            'V₂ = 15 L',
            'Temperature increased 1.5×, volume increased 1.5× (direct proportion)'
        ],
        helper: 'Charles\' Law: V₁/T₁ = V₂/T₂ (constant P, n)',
        realWorldContext: 'Hot air balloons, thermal expansion of gases'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Combined Gas Law',
        problem: 'Gas: initially 2 atm, 3 L, 300 K. Final conditions: 4 atm, 400 K. Find final volume.',
        parameters: { P1: 2, V1: 3, T1: 300, P2: 4, T2: 400, findV2: true },
        type: 'gas_laws_physics',
        subparts: [
            'Combined Gas Law: P₁V₁/T₁ = P₂V₂/T₂',
            'Rearrange: V₂ = P₁V₁T₂/(T₁P₂)',
            'Calculate: V₂ = 2 × 3 × 400 / (300 × 4)',
            'V₂ = 2400 / 1200 = 2 L',
            'Pressure doubled and temp increased → net volume decreased'
        ],
        helper: 'Combined: P₁V₁/T₁ = P₂V₂/T₂ (constant n)',
        realWorldContext: 'Gas behavior with multiple changing variables'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Kinetic Molecular Theory',
        problem: 'Average KE of gas molecules at 300 K vs 600 K. How does it compare?',
        parameters: { T1: 300, T2: 600, compareKE: true },
        type: 'gas_laws_physics',
        subparts: [
            'Average KE of gas molecules: KE_avg = (3/2)kT',
            'KE proportional to absolute temperature',
            'At 600 K: KE₂/KE₁ = T₂/T₁ = 600/300 = 2',
            'Average KE doubles when temperature doubles',
            'This explains why gases expand when heated'
        ],
        helper: 'KE_avg ∝ T (absolute temperature)',
        realWorldContext: 'Molecular motion and temperature'
    });

    return relatedProblems;
}

generateRelatedThermodynamicProcesses(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Isothermal Process',
        problem: 'Gas at 2 atm, 5 L expands isothermally to 10 L. Find final pressure.',
        parameters: { P1: 2, V1: 5, V2: 10, isothermal: true, findP2: true },
        type: 'thermodynamic_processes',
        subparts: [
            'Isothermal means constant temperature',
            'For ideal gas: PV = constant',
            'P₁V₁ = P₂V₂',
            'P₂ = P₁V₁/V₂ = 2 × 5 / 10 = 1 atm',
            'In isothermal process: ΔU = 0, Q = W'
        ],
        helper: 'Isothermal: T constant, PV = constant, ΔU = 0',
        realWorldContext: 'Slow expansion/compression'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Isochoric Process',
        problem: 'Gas at 2 atm, 300 K heated at constant volume to 450 K. Find final pressure.',
        parameters: { P1: 2, T1: 300, T2: 450, isochoric: true, findP2: true },
        type: 'thermodynamic_processes',
        subparts: [
            'Isochoric means constant volume',
            'Gay-Lussac\'s Law: P₁/T₁ = P₂/T₂',
            'P₂ = P₁T₂/T₁ = 2 × 450 / 300',
            'P₂ = 3 atm',
            'In isochoric process: W = 0 (no volume change), Q = ΔU'
        ],
        helper: 'Isochoric: V constant, P/T = constant, W = 0',
        realWorldContext: 'Heating gas in rigid container'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Adiabatic Process',
        problem: 'Ideal gas (γ=1.4) at 300 K compressed adiabatically from 10 L to 5 L. Find final temperature.',
        parameters: { T1: 300, V1: 10, V2: 5, gamma: 1.4, adiabatic: true, findT2: true },
        type: 'thermodynamic_processes',
        subparts: [
            'Adiabatic means no heat transfer: Q = 0',
            'For adiabatic process: T₁V₁^(γ-1) = T₂V₂^(γ-1)',
            'T₂ = T₁(V₁/V₂)^(γ-1) = 300(10/5)^(1.4-1)',
            'T₂ = 300 × 2^0.4 = 300 × 1.32',
            'T₂ ≈ 396 K (temperature increases during compression)'
        ],
        helper: 'Adiabatic: Q = 0, TV^(γ-1) = constant, ΔU = -W',
        realWorldContext: 'Rapid compression, diesel engines'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Isobaric Expansion',
        problem: '2 moles gas at 1 atm expands from 20 L to 30 L at constant pressure. Find work done. (1 atm = 101,325 Pa)',
        parameters: { moles: 2, pressure: 1, V1: 20, V2: 30, isobaric: true },
        type: 'thermodynamic_processes',
        subparts: [
            'Isobaric means constant pressure',
            'Work done: W = PΔV = P(V₂ - V₁)',
            'Convert to SI: P = 1 atm = 101,325 Pa, V in m³',
            'ΔV = (30-20) L = 0.01 m³',
            'W = 101,325 × 0.01 = 1013.25 J ≈ 1.01 kJ'
        ],
        helper: 'Isobaric: P constant, W = PΔV',
        realWorldContext: 'Pistons, atmospheric pressure processes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'First Law of Thermodynamics',
        problem: 'System absorbs 500 J heat, does 200 J work. Find change in internal energy.',
        parameters: { heatAbsorbed: 500, workDone: 200, findDeltaU: true },
        type: 'thermodynamic_processes',
        subparts: [
            'First Law: ΔU = Q - W',
            'Q = +500 J (heat absorbed, positive)',
            'W = +200 J (work done by system, positive)',
            'ΔU = 500 - 200 = 300 J',
            'Internal energy increases by 300 J'
        ],
        helper: 'First Law: ΔU = Q - W (sign conventions important)',
        realWorldContext: 'Energy conservation in thermodynamics'
    });

    return relatedProblems;
}

generateRelatedHeatEngines(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Heat Engine Efficiency',
        problem: 'Heat engine absorbs 1000 J from hot reservoir, exhausts 700 J to cold reservoir. Find efficiency.',
        parameters: { Qh: 1000, Qc: 700, findEfficiency: true },
        type: 'heat_engines',
        subparts: [
            'Work done: W = Q_h - Q_c = 1000 - 700 = 300 J',
            'Efficiency: η = W/Q_h',
            'Calculate: η = 300/1000 = 0.30',
            'η = 30%',
            'Only 30% of input heat converted to work'
        ],
        helper: 'Efficiency: η = W/Q_h = (Q_h - Q_c)/Q_h = 1 - Q_c/Q_h',
        realWorldContext: 'Car engines, power plants'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Carnot Efficiency',
        problem: 'Carnot engine operates between 500 K (hot) and 300 K (cold). Find maximum efficiency.',
        parameters: { Th: 500, Tc: 300, carnotEngine: true },
        type: 'heat_engines',
        subparts: [
            'Carnot efficiency (maximum possible): η_C = 1 - T_c/T_h',
            'Must use absolute temperatures (Kelvin)',
            'Calculate: η_C = 1 - 300/500 = 1 - 0.6',
            'η_C = 0.4 = 40%',
            'No real engine can exceed this efficiency'
        ],
        helper: 'Carnot: η_max = 1 - T_c/T_h (Kelvin temperatures)',
        realWorldContext: 'Theoretical maximum efficiency'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Heat Engine Work Output',
        problem: 'Engine with 25% efficiency absorbs 2000 J per cycle. Find work output and heat exhausted.',
        parameters: { efficiency: 0.25, Qh: 2000, findWorkAndQc: true },
        type: 'heat_engines',
        subparts: [
            'Efficiency: η = W/Q_h',
            'Work: W = ηQ_h = 0.25 × 2000 = 500 J',
            'Energy conservation: Q_h = W + Q_c',
            'Heat exhausted: Q_c = Q_h - W = 2000 - 500',
            'Q_c = 1500 J'
        ],
        helper: 'η = W/Q_h, Energy conservation: Q_h = W + Q_c',
        realWorldContext: 'Practical engine calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Refrigerator/Heat Pump',
        problem: 'Refrigerator removes 600 J from cold reservoir, work input 150 J. Find heat exhausted and COP.',
        parameters: { Qc: 600, W: 150, refrigerator: true },
        type: 'heat_engines',
        subparts: [
            'Heat exhausted to hot reservoir: Q_h = Q_c + W',
            'Q_h = 600 + 150 = 750 J',
            'Coefficient of Performance (COP): COP = Q_c/W',
            'COP = 600/150 = 4',
            'For every 1 J of work, removes 4 J of heat'
        ],
        helper: 'Refrigerator COP = Q_c/W, Q_h = Q_c + W',
        realWorldContext: 'Refrigerators, air conditioners'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Second Law of Thermodynamics',
        problem: 'Can a heat engine with 100% efficiency exist? Explain using 2nd Law.',
        parameters: { perfectEngine: true, explain2ndLaw: true },
        type: 'heat_engines',
        subparts: [
            '100% efficiency means: η = 1, so Q_c = 0',
            'Would convert all heat to work with no exhaust',
            'Second Law: Some heat must be exhausted (entropy increases)',
            'Carnot efficiency: η = 1 - T_c/T_h < 1 (unless T_c = 0 K, impossible)',
            'Conclusion: 100% efficient engine violates 2nd Law, impossible'
        ],
        helper: '2nd Law: Heat cannot spontaneously flow from cold to hot',
        realWorldContext: 'Fundamental limits on energy conversion'
    });

    return relatedProblems;
}

// ==================== ELECTRICITY AND MAGNETISM GENERATORS ====================

generateRelatedElectrostatics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coulomb\'s Law',
        problem: 'Two charges +3 μC and -5 μC separated by 0.2 m. Find force between them. (k = 9×10⁹ N·m²/C²)',
        parameters: { q1: 3e-6, q2: -5e-6, distance: 0.2, k: 9e9, findForce: true },
        type: 'electrostatics',
        subparts: [
            'Coulomb\'s Law: F = k|q₁q₂|/r²',
            'Calculate: F = 9×10⁹ × |3×10⁻⁶ × (-5×10⁻⁶)| / (0.2)²',
            'F = 9×10⁹ × 15×10⁻¹² / 0.04',
            'F = 135×10⁻³ / 0.04 = 3.375 N',
            'Force is attractive (opposite charges)'
        ],
        helper: 'Coulomb\'s Law: F = k|q₁q₂|/r², k = 8.99×10⁹ N·m²/C²',
        realWorldContext: 'Electrostatic forces between charges'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electric Charge',
        problem: 'Object has 5×10¹⁵ excess electrons. Find net charge. (e = 1.6×10⁻¹⁹ C)',
        parameters: { electrons: 5e15, elementaryCharge: 1.6e-19, findCharge: true },
        type: 'electrostatics',
        subparts: [
            'Each electron has charge: -e = -1.6×10⁻¹⁹ C',
            'Total charge: Q = n × e',
            'Calculate: Q = 5×10¹⁵ × (-1.6×10⁻¹⁹)',
            'Q = -8×10⁻⁴ C = -0.8 mC',
            'Negative because excess electrons'
        ],
        helper: 'Charge: Q = ne, quantized in multiples of e',
        realWorldContext: 'Static electricity, charge transfer'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Multiple Charges',
        problem: 'Three charges at corners of equilateral triangle (side 0.1 m): +2 μC, +2 μC, -3 μC. Find net force on -3 μC charge.',
        parameters: { q1: 2e-6, q2: 2e-6, q3: -3e-6, side: 0.1, k: 9e9 },
        type: 'electrostatics',
        subparts: [
            'Find force from each +2 μC charge on -3 μC charge',
            'F₁ = F₂ = k|q₁q₃|/r² = 9×10⁹ × 2×10⁻⁶ × 3×10⁻⁶ / (0.1)²',
            'F₁ = F₂ = 54×10⁻¹ / 0.01 = 5.4 N (attractive, toward each +2 μC)',
            'Angle between forces = 60°',
            'Use vector addition: F_net = √(F₁² + F₂² + 2F₁F₂cos60°)',
            'F_net = √(5.4² + 5.4² + 2(5.4)(5.4)(0.5)) = √87.48 ≈ 9.35 N'
        ],
        helper: 'Use vector addition for multiple forces',
        realWorldContext: 'Complex charge configurations'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electric Field Definition',
        problem: 'Point charge +4 μC creates field at point 0.5 m away. Find electric field magnitude.',
        parameters: { charge: 4e-6, distance: 0.5, k: 9e9, findField: true },
        type: 'electrostatics',
        subparts: [
            'Electric field: E = kq/r²',
            'Calculate: E = 9×10⁹ × 4×10⁻⁶ / (0.5)²',
            'E = 36×10³ / 0.25',
            'E = 144,000 N/C = 1.44×10⁵ N/C',
            'Direction: radially outward from positive charge'
        ],
        helper: 'Electric field: E = kq/r² (for point charge)',
        realWorldContext: 'Electric field around charges'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electric Force on Charge in Field',
        problem: 'Charge -2 μC placed in uniform electric field 5×10⁴ N/C. Find force on charge.',
        parameters: { charge: -2e-6, field: 5e4, findForce: true },
        type: 'electrostatics',
        subparts: [
            'Force on charge in field: F = qE',
            'Calculate: F = (-2×10⁻⁶) × (5×10⁴)',
            'F = -0.1 N',
            'Magnitude: 0.1 N',
            'Direction: opposite to field (negative charge)'
        ],
        helper: 'Force in field: F = qE (parallel to E if q>0, opposite if q<0)',
        realWorldContext: 'Charged particles in electric fields'
    });

    return relatedProblems;
}

generateRelatedElectricFields(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Uniform Electric Field',
        problem: 'Parallel plates separated by 0.02 m with potential difference 100 V. Find electric field.',
        parameters: { separation: 0.02, voltage: 100, findField: true },
        type: 'electric_fields',
        subparts: [
            'Uniform field between plates: E = V/d',
            'Calculate: E = 100 / 0.02',
            'E = 5000 N/C = 5 kN/C',
            'Field points from positive to negative plate',
            'Uniform throughout the gap'
        ],
        helper: 'Uniform field: E = V/d (between parallel plates)',
        realWorldContext: 'Capacitors, particle accelerators'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Electric Field Lines',
        problem: 'Describe electric field line pattern around isolated positive charge.',
        parameters: { positiveCharge: true, describeFieldLines: true },
        type: 'electric_fields',
        subparts: [
            'Field lines radiate outward from positive charge',
            'Lines are straight and evenly spaced (spherical symmetry)',
            'Density of lines indicates field strength',
            'Lines never cross each other',
            'Direction: away from positive, toward negative'
        ],
        helper: 'Field lines: direction of force on positive test charge',
        realWorldContext: 'Visualizing electric fields'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electric Field of Dipole',
        problem: 'Electric dipole: +q and -q (each 2 μC) separated by 0.1 m. Find field at point on perpendicular bisector 0.2 m from center.',
        parameters: { charge: 2e-6, separation: 0.1, distance: 0.2, dipole: true },
        type: 'electric_fields',
        subparts: [
            'Distance from each charge to point: r = √(0.2² + 0.05²) = 0.206 m',
            'Field from each charge: E = kq/r² = 9×10⁹ × 2×10⁻⁶ / (0.206)²',
            'E ≈ 4.23×10⁵ N/C',
            'Horizontal components cancel, vertical components add',
            'E_net ≈ 2E × sin(θ) where θ = tan⁻¹(0.05/0.2)',
            'Complex calculation yields net field along bisector'
        ],
        helper: 'Dipole: use vector addition of fields from both charges',
        realWorldContext: 'Molecular dipoles, antennas'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electron in Electric Field',
        problem: 'Electron enters uniform field 1000 N/C. Find acceleration. (m_e = 9.11×10⁻³¹ kg, e = 1.6×10⁻¹⁹ C)',
        parameters: { field: 1000, mass: 9.11e-31, charge: 1.6e-19, findAcceleration: true },
        type: 'electric_fields',
        subparts: [
            'Force on electron: F = eE = 1.6×10⁻¹⁹ × 1000 = 1.6×10⁻¹⁶ N',
            'Newton\'s 2nd Law: F = ma',
            'Acceleration: a = F/m = 1.6×10⁻¹⁶ / 9.11×10⁻³¹',
            'a ≈ 1.76×10¹⁴ m/s²',
            'Enormous acceleration due to small mass'
        ],
        helper: 'F = qE = ma for charged particle in field',
        realWorldContext: 'Electron beams, cathode ray tubes'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Electric Flux',
        problem: 'Uniform field 500 N/C perpendicular to circular area radius 0.1 m. Find electric flux.',
        parameters: { field: 500, radius: 0.1, perpendicular: true, findFlux: true },
        type: 'electric_fields',
        subparts: [
            'Electric flux: Φ = EA cos(θ)',
            'Area: A = πr² = π(0.1)² = 0.0314 m²',
            'Angle θ = 0° (perpendicular), so cos(0°) = 1',
            'Calculate: Φ = 500 × 0.0314 × 1',
            'Φ = 15.7 N·m²/C'
        ],
        helper: 'Electric flux: Φ = EA cos(θ) (θ = angle between E and normal)',
        realWorldContext: 'Gauss\'s Law applications'
    });

    return relatedProblems;
}

generateRelatedElectricPotential(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Electric Potential from Point Charge',
        problem: 'Point charge +5 μC. Find electric potential at distance 0.3 m. (k = 9×10⁹ N·m²/C²)',
        parameters: { charge: 5e-6, distance: 0.3, k: 9e9, findPotential: true },
        type: 'electric_potential',
        subparts: [
            'Electric potential: V = kq/r',
            'Calculate: V = 9×10⁹ × 5×10⁻⁶ / 0.3',
            'V = 45×10³ / 0.3',
            'V = 150,000 V = 150 kV',
            'Potential is scalar (no direction)'
        ],
        helper: 'Electric potential: V = kq/r (for point charge)',
        realWorldContext: 'Voltage around charges'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Potential Difference',
        problem: 'Moving +2 μC charge from point A (V=100 V) to point B (V=300 V). Find work done by electric field.',
        parameters: { charge: 2e-6, VA: 100, VB: 300, findWork: true },
        type: 'electric_potential',
        subparts: [
            'Work by field: W = -qΔV = -q(V_B - V_A)',
            'Potential difference: ΔV = 300 - 100 = 200 V',
            'Calculate: W = -2×10⁻⁶ × 200',
            'W = -4×10⁻⁴ J = -0.4 mJ',
            'Negative: work done against field (potential increases)'
        ],
        helper: 'Work by field: W = -qΔV, Work by external: W_ext = qΔV',
        realWorldContext: 'Moving charges, batteries'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Potential Energy',
        problem: 'Two charges +3 μC and +4 μC separated by 0.5 m. Find electric potential energy of system.',
        parameters: { q1: 3e-6, q2: 4e-6, distance: 0.5, k: 9e9, findPE: true },
        type: 'electric_potential',
        subparts: [
            'Electric PE: U = kq₁q₂/r',
            'Calculate: U = 9×10⁹ × 3×10⁻⁶ × 4×10⁻⁶ / 0.5',
            'U = 108×10⁻³ / 0.5',
            'U = 0.216 J = 216 mJ',
            'Positive (repulsive, both positive charges)'
        ],
        helper: 'Electric PE: U = kq₁q₂/r (positive if same sign)',
        realWorldContext: 'Energy stored in charge configurations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Equipotential Surfaces',
        problem: 'Point charge Q creates equipotential surface V = 100 V at radius 0.2 m. Find charge Q.',
        parameters: { potential: 100, radius: 0.2, k: 9e9, findCharge: true },
        type: 'electric_potential',
        subparts: [
            'From V = kQ/r, rearrange: Q = Vr/k',
            'Calculate: Q = 100 × 0.2 / (9×10⁹)',
            'Q = 20 / (9×10⁹)',
            'Q ≈ 2.22×10⁻⁹ C = 2.22 nC',
            'Equipotential surfaces are spheres around point charge'
        ],
        helper: 'Equipotential surface: all points at same potential',
        realWorldContext: 'Visualizing potential fields'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Relationship E and V',
        problem: 'Uniform electric field 200 N/C points in +x direction. Find potential difference between x=0 and x=0.5 m.',
        parameters: { field: 200, distance: 0.5, uniformField: true, findPotentialDiff: true },
        type: 'electric_potential',
        subparts: [
            'For uniform field: ΔV = -Ed (along field direction)',
            'Calculate: ΔV = -200 × 0.5',
            'ΔV = -100 V',
            'Potential decreases in direction of field',
            'General relation: E = -dV/dx (field is negative potential gradient)'
        ],
        helper: 'Uniform field: ΔV = -Ed, E = -dV/dx',
        realWorldContext: 'Voltage and field relationship'
    });

    return relatedProblems;
}

generateRelatedCapacitance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Parallel Plate Capacitor',
        problem: 'Parallel plates area 0.01 m², separation 0.002 m, air dielectric. Find capacitance. (ε₀ = 8.85×10⁻¹² F/m)',
        parameters: { area: 0.01, separation: 0.002, epsilon0: 8.85e-12, findCapacitance: true },
        type: 'capacitance',
        subparts: [
            'Capacitance formula: C = ε₀A/d',
            'Calculate: C = 8.85×10⁻¹² × 0.01 / 0.002',
            'C = 8.85×10⁻¹⁴ / 0.002',
            'C = 4.425×10⁻¹¹ F = 44.25 pF',
            'Capacitance depends on geometry, not charge'
        ],
        helper: 'Parallel plate: C = ε₀A/d (ε₀ = permittivity of free space)',
        realWorldContext: 'Capacitors in circuits'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Charge and Voltage',
        problem: 'Capacitor 100 μF charged to 12 V. Find stored charge.',
        parameters: { capacitance: 100e-6, voltage: 12, findCharge: true },
        type: 'capacitance',
        subparts: [
            'Fundamental relation: Q = CV',
            'Calculate: Q = 100×10⁻⁶ × 12',
            'Q = 1.2×10⁻³ C = 1.2 mC',
            'Charge proportional to voltage for given capacitor'
        ],
        helper: 'Q = CV (fundamental capacitor equation)',
        realWorldContext: 'Charging capacitors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Energy Stored',
        problem: 'Capacitor 50 μF charged to 200 V. Find energy stored.',
        parameters: { capacitance: 50e-6, voltage: 200, findEnergy: true },
        type: 'capacitance',
        subparts: [
            'Energy stored: U = ½CV²',
            'Calculate: U = ½ × 50×10⁻⁶ × 200²',
            'U = ½ × 50×10⁻⁶ × 40,000',
            'U = 1 J',
            'Alternative formulas: U = ½QV = Q²/(2C)'
        ],
        helper: 'Energy: U = ½CV² = ½QV = Q²/(2C)',
        realWorldContext: 'Energy storage in capacitors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Capacitors in Series',
        problem: 'Three capacitors 2 μF, 3 μF, 6 μF connected in series. Find equivalent capacitance.',
        parameters: { C1: 2e-6, C2: 3e-6, C3: 6e-6, series: true },
        type: 'capacitance',
        subparts: [
            'Series: 1/C_eq = 1/C₁ + 1/C₂ + 1/C₃',
            'Calculate: 1/C_eq = 1/2 + 1/3 + 1/6',
            'Common denominator: 1/C_eq = 3/6 + 2/6 + 1/6 = 6/6 = 1',
            'C_eq = 1 μF',
            'Series: equivalent capacitance always less than smallest'
        ],
        helper: 'Series: 1/C_eq = Σ(1/C_i), same charge on all',
        realWorldContext: 'Capacitor networks'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Capacitors in Parallel',
        problem: 'Three capacitors 4 μF, 6 μF, 10 μF connected in parallel. Find equivalent capacitance.',
        parameters: { C1: 4e-6, C2: 6e-6, C3: 10e-6, parallel: true },
        type: 'capacitance',
        subparts: [
            'Parallel: C_eq = C₁ + C₂ + C₃',
            'Calculate: C_eq = 4 + 6 + 10 = 20 μF',
            'Parallel: simply add capacitances',
            'All have same voltage',
            'Total charge distributes among capacitors'
        ],
        helper: 'Parallel: C_eq = ΣC_i, same voltage across all',
        realWorldContext: 'Increasing capacitance'
    });

    return relatedProblems;
}

generateRelatedCurrentResistance(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Current Definition',
        problem: '120 C of charge passes through wire in 30 seconds. Find current.',
        parameters: { charge: 120, time: 30, findCurrent: true },
        type: 'current_resistance',
        subparts: [
            'Current definition: I = Q/t',
            'Calculate: I = 120 / 30',
            'I = 4 A',
            'Current is rate of charge flow',
            '1 Ampere = 1 Coulomb per second'
        ],
        helper: 'Current: I = Q/t (Amperes = Coulombs/second)',
        realWorldContext: 'Electric current in circuits'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Ohm\'s Law',
        problem: 'Resistor 50 Ω with current 2 A flowing through it. Find voltage across resistor.',
        parameters: { resistance: 50, current: 2, findVoltage: true },
        type: 'current_resistance',
        subparts: [
            'Ohm\'s Law: V = IR',
            'Calculate: V = 2 × 50',
            'V = 100 V',
            'Voltage proportional to current for fixed resistance'
        ],
        helper: 'Ohm\'s Law: V = IR',
        realWorldContext: 'Basic circuit calculations'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resistance and Resistivity',
        problem: 'Copper wire length 10 m, cross-sectional area 1 mm². Find resistance. (ρ_copper = 1.7×10⁻⁸ Ω·m)',
        parameters: { length: 10, area: 1e-6, resistivity: 1.7e-8, findResistance: true },
        type: 'current_resistance',
        subparts: [
            'Resistance formula: R = ρL/A',
            'Convert area: 1 mm² = 1×10⁻⁶ m²',
            'Calculate: R = 1.7×10⁻⁸ × 10 / (1×10⁻⁶)',
            'R = 1.7×10⁻⁷ / 1×10⁻⁶ = 0.17 Ω',
            'Resistance increases with length, decreases with area'
        ],
        helper: 'Resistance: R = ρL/A (ρ = resistivity)',
        realWorldContext: 'Wire resistance, conductor design'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Power Dissipation',
        problem: 'Resistor 20 Ω with 5 A current. Find power dissipated.',
        parameters: { resistance: 20, current: 5, findPower: true },
        type: 'current_resistance',
        subparts: [
            'Power formula: P = I²R',
            'Calculate: P = 5² × 20',
            'P = 25 × 20 = 500 W',
            'Alternative formulas: P = VI = V²/R',
            'Energy dissipated as heat'
        ],
        helper: 'Power: P = I²R = VI = V²/R',
        realWorldContext: 'Heat generation in resistors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Temperature Dependence',
        problem: 'Metal wire resistance 100 Ω at 20°C. Temperature coefficient α = 0.004/°C. Find resistance at 70°C.',
        parameters: { R0: 100, T0: 20, T: 70, alpha: 0.004, findResistance: true },
        type: 'current_resistance',
        subparts: [
            'Temperature dependence: R = R₀[1 + α(T - T₀)]',
            'Temperature change: ΔT = 70 - 20 = 50°C',
            'Calculate: R = 100[1 + 0.004 × 50]',
            'R = 100[1 + 0.2] = 100 × 1.2',
            'R = 120 Ω (resistance increases with temperature for metals)'
        ],
        helper: 'R = R₀[1 + α(T - T₀)] for metals',
        realWorldContext: 'Temperature effects on conductors'
    });

    return relatedProblems;
}

generateRelatedDCCircuits(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Series Resistors',
        problem: 'Three resistors 10 Ω, 20 Ω, 30 Ω connected in series with 12 V battery. Find total current.',
        parameters: { R1: 10, R2: 20, R3: 30, voltage: 12, series: true },
        type: 'dc_circuits',
        subparts: [
            'Series: R_total = R₁ + R₂ + R₃',
            'Calculate: R_total = 10 + 20 + 30 = 60 Ω',
            'Ohm\'s Law: I = V/R_total',
            'I = 12/60 = 0.2 A',
            'Same current flows through all resistors in series'
        ],
        helper: 'Series: R_total = ΣR_i, same current through all',
        realWorldContext: 'Series circuits, Christmas lights'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Parallel Resistors',
        problem: 'Two resistors 6 Ω and 12 Ω in parallel. Find equivalent resistance.',
        parameters: { R1: 6, R2: 12, parallel: true },
        type: 'dc_circuits',
        subparts: [
            'Parallel: 1/R_eq = 1/R₁ + 1/R₂',
            'Calculate: 1/R_eq = 1/6 + 1/12',
            'Common denominator: 1/R_eq = 2/12 + 1/12 = 3/12',
            'R_eq = 12/3 = 4 Ω',
            'Parallel: equivalent resistance less than smallest resistor'
        ],
        helper: 'Parallel: 1/R_eq = Σ(1/R_i), same voltage across all',
        realWorldContext: 'Parallel circuits, home wiring'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Kirchhoff\'s Voltage Law',
        problem: 'Loop with 12 V battery, 4 Ω resistor (voltage V₁), 8 Ω resistor (voltage V₂). Verify KVL.',
        parameters: { battery: 12, R1: 4, R2: 8, KVL: true },
        type: 'dc_circuits',
        subparts: [
            'Find current: R_total = 4 + 8 = 12 Ω, I = 12/12 = 1 A',
            'Voltage across R₁: V₁ = IR₁ = 1 × 4 = 4 V',
            'Voltage across R₂: V₂ = IR₂ = 1 × 8 = 8 V',
            'KVL: sum of voltages around loop = 0',
            '+12 - 4 - 8 = 0 ✓ (voltage rises + drops = 0)'
        ],
        helper: 'KVL: ΣV = 0 around any closed loop',
        realWorldContext: 'Circuit analysis technique'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Kirchhoff\'s Current Law',
        problem: 'Junction: current I₁ = 3 A enters, I₂ = 1.5 A and I₃ leave. Find I₃.',
        parameters: { I1: 3, I2: 1.5, junction: true, findI3: true },
        type: 'dc_circuits',
        subparts: [
            'KCL: sum of currents entering = sum leaving',
            'Entering: I₁ = 3 A',
            'Leaving: I₂ + I₃ = 1.5 + I₃',
            'Apply KCL: 3 = 1.5 + I₃',
            'I₃ = 3 - 1.5 = 1.5 A'
        ],
        helper: 'KCL: ΣI_in = ΣI_out at any junction',
        realWorldContext: 'Current distribution in circuits'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Voltage Divider',
        problem: '20 V across two series resistors 30 Ω and 70 Ω. Find voltage across 30 Ω resistor.',
        parameters: { totalVoltage: 20, R1: 30, R2: 70, voltageDivider: true },
        type: 'dc_circuits',
        subparts: [
            'Voltage divider: V₁ = V_total × R₁/(R₁ + R₂)',
            'Calculate: V₁ = 20 × 30/(30 +70)',
            'V₁ = 20 × 30/100',
            'V₁ = 600/100 = 6 V',
            'Voltage divides in proportion to resistance'
        ],
        helper: 'Voltage divider: V_i = V_total × R_i/R_total',
        realWorldContext: 'Sensor circuits, signal division'
    });

    return relatedProblems;
}

generateRelatedMagneticFields(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Magnetic Force on Moving Charge',
        problem: 'Electron (q = -1.6×10⁻¹⁹ C) moving at 2×10⁶ m/s perpendicular to 0.5 T magnetic field. Find force.',
        parameters: { charge: -1.6e-19, velocity: 2e6, field: 0.5, angle: 90, findForce: true },
        type: 'magnetic_fields',
        subparts: [
            'Magnetic force: F = qvB sin(θ)',
            'Perpendicular motion: θ = 90°, sin(90°) = 1',
            'Calculate: F = |1.6×10⁻¹⁹| × 2×10⁶ × 0.5 × 1',
            'F = 1.6×10⁻¹³ N',
            'Direction: use right-hand rule (perpendicular to both v and B)'
        ],
        helper: 'Magnetic force: F = qvB sin(θ), direction by right-hand rule',
        realWorldContext: 'Charged particles in magnetic fields'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Magnetic Force on Current',
        problem: 'Wire with 5 A current, length 0.3 m, perpendicular to 0.4 T field. Find force.',
        parameters: { current: 5, length: 0.3, field: 0.4, angle: 90, findForce: true },
        type: 'magnetic_fields',
        subparts: [
            'Force on current: F = BIL sin(θ)',
            'Perpendicular: θ = 90°, sin(90°) = 1',
            'Calculate: F = 0.4 × 5 × 0.3 × 1',
            'F = 0.6 N',
            'Direction: right-hand rule (thumb: current, fingers: field, palm: force)'
        ],
        helper: 'Force on current: F = BIL sin(θ)',
        realWorldContext: 'Electric motors, speakers'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Magnetic Field from Straight Wire',
        problem: 'Long straight wire carries 10 A current. Find magnetic field at distance 0.05 m. (μ₀ = 4π×10⁻⁷ T·m/A)',
        parameters: { current: 10, distance: 0.05, mu0: 4e-7 * Math.PI, straightWire: true },
        type: 'magnetic_fields',
        subparts: [
            'Magnetic field around wire: B = μ₀I/(2πr)',
            'Calculate: B = (4π×10⁻⁷ × 10) / (2π × 0.05)',
            'B = (4×10⁻⁶) / (0.314)',
            'B ≈ 4×10⁻⁵ T = 40 μT',
            'Direction: circular around wire (right-hand rule: thumb = current, fingers curl = field)'
        ],
        helper: 'Straight wire: B = μ₀I/(2πr), circular field lines',
        realWorldContext: 'Magnetic fields around conductors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Magnetic Field in Solenoid',
        problem: 'Solenoid 500 turns, length 0.25 m, current 2 A. Find field inside. (μ₀ = 4π×10⁻⁷ T·m/A)',
        parameters: { turns: 500, length: 0.25, current: 2, mu0: 4e-7 * Math.PI, solenoid: true },
        type: 'magnetic_fields',
        subparts: [
            'Solenoid field: B = μ₀nI (n = turns per unit length)',
            'Calculate n: n = N/L = 500/0.25 = 2000 turns/m',
            'Calculate: B = 4π×10⁻⁷ × 2000 × 2',
            'B = 4π×10⁻⁷ × 4000 = 5.03×10⁻³ T',
            'B ≈ 5 mT (uniform field inside solenoid)'
        ],
        helper: 'Solenoid: B = μ₀nI, n = N/L (uniform inside)',
        realWorldContext: 'Electromagnets, MRI machines'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Circular Motion in Magnetic Field',
        problem: 'Proton (m = 1.67×10⁻²⁷ kg, q = 1.6×10⁻¹⁹ C) at 3×10⁶ m/s enters 0.2 T field perpendicularly. Find radius of circular path.',
        parameters: { mass: 1.67e-27, charge: 1.6e-19, velocity: 3e6, field: 0.2, findRadius: true },
        type: 'magnetic_fields',
        subparts: [
            'Magnetic force provides centripetal force: qvB = mv²/r',
            'Rearrange: r = mv/(qB)',
            'Calculate: r = (1.67×10⁻²⁷ × 3×10⁶) / (1.6×10⁻¹⁹ × 0.2)',
            'r = 5.01×10⁻²¹ / 3.2×10⁻²⁰',
            'r ≈ 0.157 m = 15.7 cm'
        ],
        helper: 'Circular motion: r = mv/(qB)',
        realWorldContext: 'Particle accelerators, mass spectrometers'
    });

    return relatedProblems;
}

generateRelatedEMInduction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Faraday\'s Law',
        problem: 'Magnetic flux through coil changes from 0.05 Wb to 0.15 Wb in 0.2 s. Coil has 100 turns. Find induced EMF.',
        parameters: { initialFlux: 0.05, finalFlux: 0.15, time: 0.2, turns: 100, findEMF: true },
        type: 'electromagnetic_induction',
        subparts: [
            'Faraday\'s Law: ε = -N(ΔΦ/Δt)',
            'Change in flux: ΔΦ = 0.15 - 0.05 = 0.10 Wb',
            'Rate of change: ΔΦ/Δt = 0.10/0.2 = 0.5 Wb/s',
            'Calculate: ε = -100 × 0.5 = -50 V',
            'Magnitude: 50 V (negative sign from Lenz\'s Law)'
        ],
        helper: 'Faraday\'s Law: ε = -N(ΔΦ/Δt)',
        realWorldContext: 'Generators, transformers'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Magnetic Flux',
        problem: 'Circular coil radius 0.1 m in uniform field 0.5 T perpendicular to plane. Find magnetic flux.',
        parameters: { radius: 0.1, field: 0.5, angle: 0, findFlux: true },
        type: 'electromagnetic_induction',
        subparts: [
            'Magnetic flux: Φ = BA cos(θ)',
            'Area: A = πr² = π(0.1)² = 0.0314 m²',
            'Perpendicular: θ = 0°, cos(0°) = 1',
            'Calculate: Φ = 0.5 × 0.0314 × 1',
            'Φ = 0.0157 Wb = 15.7 mWb'
        ],
        helper: 'Magnetic flux: Φ = BA cos(θ) (Weber = T·m²)',
        realWorldContext: 'Flux through coils, circuits'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Motional EMF',
        problem: 'Rod length 0.5 m moves at 10 m/s perpendicular to 0.8 T field. Find induced EMF across rod.',
        parameters: { length: 0.5, velocity: 10, field: 0.8, motionalEMF: true },
        type: 'electromagnetic_induction',
        subparts: [
            'Motional EMF: ε = BLv (for rod perpendicular to B)',
            'Calculate: ε = 0.8 × 0.5 × 10',
            'ε = 4 V',
            'EMF induced due to changing flux as rod moves',
            'Direction: by Lenz\'s Law and right-hand rule'
        ],
        helper: 'Motional EMF: ε = BLv (perpendicular motion)',
        realWorldContext: 'Moving conductors in magnetic fields'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lenz\'s Law',
        problem: 'North pole of magnet moves toward coil. Describe induced current direction and explain.',
        parameters: { magnetApproaching: true, lenzLaw: true, explainDirection: true },
        type: 'electromagnetic_induction',
        subparts: [
            'Flux through coil increases (north pole approaching)',
            'By Lenz\'s Law: induced current opposes change',
            'Induced current creates field opposing incoming flux',
            'Induced field must point away from incoming magnet',
            'By right-hand rule: current flows counterclockwise (viewed from magnet)',
            'Result: coil acts like north pole to repel approaching magnet'
        ],
        helper: 'Lenz\'s Law: induced effects oppose the change causing them',
        realWorldContext: 'Direction of induced currents'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Self-Inductance',
        problem: 'Inductor 0.5 H with current changing at rate 4 A/s. Find induced EMF.',
        parameters: { inductance: 0.5, currentRate: 4, findEMF: true },
        type: 'electromagnetic_induction',
        subparts: [
            'Self-induced EMF: ε = -L(dI/dt)',
            'Calculate: ε = -0.5 × 4',
            'ε = -2 V',
            'Magnitude: 2 V',
            'Negative sign: opposes change in current (Lenz\'s Law)'
        ],
        helper: 'Self-inductance: ε = -L(dI/dt), L in Henrys',
        realWorldContext: 'Inductors in circuits'
    });

    return relatedProblems;
}

generateRelatedACCircuits(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'AC Voltage and Current',
        problem: 'AC voltage V = 170 sin(120πt). Find peak voltage, RMS voltage, and frequency.',
        parameters: { peakVoltage: 170, angularFreq: 120 * Math.PI, findParameters: true },
        type: 'ac_circuits',
        subparts: [
            'Peak voltage: V₀ = 170 V (amplitude)',
            'RMS voltage: V_rms = V₀/√2 = 170/1.414 ≈ 120 V',
            'Angular frequency: ω = 120π rad/s',
            'Frequency: f = ω/(2π) = 120π/(2π) = 60 Hz',
            'This is standard US household voltage'
        ],
        helper: 'AC: V = V₀sin(ωt), V_rms = V₀/√2, f = ω/(2π)',
        realWorldContext: 'AC power systems'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'RMS vs Peak',
        problem: 'AC current has RMS value 5 A. Find peak current.',
        parameters: { Irms: 5, findPeak: true },
        type: 'ac_circuits',
        subparts: [
            'Relationship: I_rms = I₀/√2',
            'Rearrange: I₀ = I_rms × √2',
            'Calculate: I₀ = 5 × 1.414',
            'I₀ ≈ 7.07 A',
            'Peak value is √2 times RMS value'
        ],
        helper: 'RMS = Peak/√2, Peak = RMS × √2',
        realWorldContext: 'AC measurements'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Capacitive Reactance',
        problem: 'Capacitor 100 μF in 60 Hz AC circuit. Find capacitive reactance.',
        parameters: { capacitance: 100e-6, frequency: 60, findReactance: true },
        type: 'ac_circuits',
        subparts: [
            'Capacitive reactance: X_C = 1/(2πfC)',
            'Calculate: X_C = 1/(2π × 60 × 100×10⁻⁶)',
            'X_C = 1/(0.0377)',
            'X_C ≈ 26.5 Ω',
            'Lower frequency → higher reactance (capacitor blocks DC)'
        ],
        helper: 'Capacitive reactance: X_C = 1/(2πfC), decreases with f',
        realWorldContext: 'AC capacitor behavior'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Inductive Reactance',
        problem: 'Inductor 0.2 H in 50 Hz AC circuit. Find inductive reactance.',
        parameters: { inductance: 0.2, frequency: 50, findReactance: true },
        type: 'ac_circuits',
        subparts: [
            'Inductive reactance: X_L = 2πfL',
            'Calculate: X_L = 2π × 50 × 0.2',
            'X_L = 2π × 10 = 62.8 Ω',
            'Higher frequency → higher reactance (inductor blocks high frequency)'
        ],
        helper: 'Inductive reactance: X_L = 2πfL, increases with f',
        realWorldContext: 'AC inductor behavior'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'RLC Series Circuit',
        problem: 'Series RLC: R = 30 Ω, X_L = 60 Ω, X_C = 20 Ω. Find impedance.',
        parameters: { resistance: 30, XL: 60, XC: 20, series: true, findImpedance: true },
        type: 'ac_circuits',
        subparts: [
            'Impedance: Z = √[R² + (X_L - X_C)²]',
            'Net reactance: X = X_L - X_C = 60 - 20 = 40 Ω (inductive)',
            'Calculate: Z = √[30² + 40²]',
            'Z = √[900 + 1600] = √2500',
            'Z = 50 Ω'
        ],
        helper: 'Series RLC: Z = √[R² + (X_L - X_C)²]',
        realWorldContext: 'AC circuit impedance'
    });

    return relatedProblems;
}

// ==================== OPTICS GENERATORS ====================

generateRelatedReflection(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Law of Reflection',
        problem: 'Light ray strikes mirror at 35° to normal. Find angle of reflection.',
        parameters: { incidentAngle: 35, findReflectionAngle: true },
        type: 'reflection',
        subparts: [
            'Law of Reflection: θ_reflected = θ_incident',
            'Both angles measured from normal',
            'Angle of incidence = 35°',
            'Angle of reflection = 35°',
            'Angles are equal, on opposite sides of normal'
        ],
        helper: 'Law of Reflection: θ_i = θ_r (from normal)',
        realWorldContext: 'Mirrors, reflection'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Plane Mirror Image',
        problem: 'Object placed 2 m in front of plane mirror. Find image distance and characteristics.',
        parameters: { objectDistance: 2, planeMirror: true, findImage: true },
        type: 'reflection',
        subparts: [
            'Plane mirror image distance = object distance',
            'Image distance: d_i = 2 m behind mirror',
            'Image characteristics: virtual, upright, same size',
            'Image appears to be behind mirror (cannot be projected)',
            'Left-right reversed'
        ],
        helper: 'Plane mirror: d_i = d_o, virtual, upright, same size',
        realWorldContext: 'Bathroom mirrors, reflections'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Concave Mirror',
        problem: 'Concave mirror focal length 15 cm, object at 30 cm. Find image distance and magnification.',
        parameters: { focalLength: 15, objectDistance: 30, concaveMirror: true },
        type: 'reflection',
        subparts: [
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            'Rearrange: 1/d_i = 1/f - 1/d_o = 1/15 - 1/30',
            'Common denominator: 1/d_i = 2/30 - 1/30 = 1/30',
            'd_i = 30 cm (real image, in front of mirror)',
            'Magnification: M = -d_i/d_o = -30/30 = -1 (inverted, same size)'
        ],
        helper: 'Mirror equation: 1/f = 1/d_o + 1/d_i, M = -d_i/d_o',
        realWorldContext: 'Makeup mirrors, telescopes'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Convex Mirror',
        problem: 'Convex mirror focal length -20 cm, object at 40 cm. Find image position and type.',
        parameters: { focalLength: -20, objectDistance: 40, convexMirror: true },
        type: 'reflection',
        subparts: [
            'Convex mirror: f is negative',
            'Mirror equation: 1/f = 1/d_o + 1/d_i',
            '1/d_i = 1/(-20) - 1/40 = -2/40 - 1/40 = -3/40',
            'd_i = -40/3 ≈ -13.3 cm (virtual, behind mirror)',
            'M = -(-13.3)/40 ≈ +0.33 (upright, smaller)'
        ],
        helper: 'Convex mirror: always virtual, upright, reduced',
        realWorldContext: 'Car side mirrors, security mirrors'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Spherical Mirror Radius',
        problem: 'Spherical mirror radius of curvature 40 cm. Find focal length and explain relationship.',
        parameters: { radiusCurvature: 40, findFocalLength: true },
        type: 'reflection',
        subparts: [
            'Relationship: f = R/2',
            'Focal length: f = 40/2 = 20 cm',
            'Focal point is halfway between center and mirror',
            'For concave: f and R positive',
            'For convex: f and R negative'
        ],
        helper: 'Focal length: f = R/2 (R = radius of curvature)',
        realWorldContext: 'Mirror manufacturing'
    });

    return relatedProblems;
}

generateRelatedRefraction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Snell\'s Law',
        problem: 'Light travels from air (n=1.0) to water (n=1.33) at 40° to normal. Find refraction angle.',
        parameters: { n1: 1.0, n2: 1.33, angle1: 40, findAngle2: true },
        type: 'refraction',
        subparts: [
            'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
            'Rearrange: sin(θ₂) = (n₁/n₂) sin(θ₁)',
            'Calculate: sin(θ₂) = (1.0/1.33) × sin(40°)',
            'sin(θ₂) = 0.752 × 0.643 = 0.483',
            'θ₂ = sin⁻¹(0.483) ≈ 28.9° (bends toward normal)'
        ],
        helper: 'Snell\'s Law: n₁ sin(θ₁) = n₂ sin(θ₂)',
        realWorldContext: 'Light bending in water, lenses'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Refractive Index',
        problem: 'Light speed in glass is 2×10⁸ m/s. Find refractive index. (c = 3×10⁸ m/s)',
        parameters: { speedInMedium: 2e8, speedLight: 3e8, findRefractiveIndex: true },
        type: 'refraction',
        subparts: [
            'Refractive index: n = c/v',
            'Calculate: n = 3×10⁸ / 2×10⁸',
            'n = 1.5',
            'Higher n means light travels slower in medium',
            'n = 1 for vacuum, n > 1 for all materials'
        ],
        helper: 'Refractive index: n = c/v (speed of light in vacuum / speed in medium)',
        realWorldContext: 'Material optical properties'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Total Internal Reflection',
        problem: 'Light travels from glass (n=1.5) to air (n=1.0). Find critical angle.',
        parameters: { n1: 1.5, n2: 1.0, findCriticalAngle: true },
        type: 'refraction',
        subparts: [
            'Critical angle when refracted ray is 90° (along interface)',
            'Snell\'s Law: n₁ sin(θ_c) = n₂ sin(90°) = n₂',
            'Rearrange: sin(θ_c) = n₂/n₁',
            'Calculate: sin(θ_c) = 1.0/1.5 = 0.667',
            'θ_c = sin⁻¹(0.667) ≈ 41.8°',
            'For θ > 41.8°: total internal reflection occurs'
        ],
        helper: 'Critical angle: sin(θ_c) = n₂/n₁ (n₁ > n₂)',
        realWorldContext: 'Fiber optics, diamonds'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Apparent Depth',
        problem: 'Pool appears 2 m deep when viewed from above. Find actual depth. (n_water = 1.33)',
        parameters: { apparentDepth: 2, nWater: 1.33, findActualDepth: true },
        type: 'refraction',
        subparts: [
            'Apparent depth relation: d_apparent = d_actual/n',
            'Rearrange: d_actual = n × d_apparent',
            'Calculate: d_actual = 1.33 × 2',
            'd_actual = 2.66 m',
            'Pool is deeper than it appears due to refraction'
        ],
        helper: 'Apparent depth: d_app = d_real/n',
        realWorldContext: 'Swimming pools, viewing underwater'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Dispersion',
        problem: 'White light enters prism. Red light (n=1.51) and violet light (n=1.53) refract at different angles. Explain.',
        parameters: { nRed: 1.51, nViolet: 1.53, dispersion: true },
        type: 'refraction',
        subparts: [
            'Different wavelengths have different refractive indices',
            'Violet has higher n, bends more than red',
            'This is dispersion: separation of colors',
            'Using Snell\'s Law: violet deviates more',
            'Result: white light splits into spectrum (rainbow)'
        ],
        helper: 'Dispersion: n varies with wavelength (violet > red)',
        realWorldContext: 'Prisms, rainbows'
    });

    return relatedProblems;
}

generateRelatedLenses(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Converging Lens',
        problem: 'Convex lens focal length 20 cm, object at 40 cm. Find image distance and characteristics.',
        parameters: { focalLength: 20, objectDistance: 40, convergingLens: true },
        type: 'lenses',
        subparts: [
            'Lens equation: 1/f = 1/d_o + 1/d_i',
            'Rearrange: 1/d_i = 1/f - 1/d_o = 1/20 - 1/40',
            'Calculate: 1/d_i = 2/40 - 1/40 = 1/40',
            'd_i = 40 cm (real image, opposite side)',
            'Magnification: M = -d_i/d_o = -40/40 = -1 (inverted, same size)'
        ],
        helper: 'Thin lens equation: 1/f = 1/d_o + 1/d_i, M = -d_i/d_o',
        realWorldContext: 'Cameras, projectors'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Diverging Lens',
        problem: 'Concave lens focal length -15 cm, object at 30 cm. Find image position.',
        parameters: { focalLength: -15, objectDistance: 30, divergingLens: true },
        type: 'lenses',
        subparts: [
            'Diverging lens: f is negative',
            'Lens equation: 1/d_i = 1/f - 1/d_o',
            '1/d_i = 1/(-15) - 1/30 = -2/30 - 1/30 = -3/30 = -1/10',
            'd_i = -10 cm (virtual, same side as object)',
            'M = -(-10)/30 = +0.33 (upright, smaller)'
        ],
        helper: 'Diverging lens: always virtual, upright, reduced',
        realWorldContext: 'Eyeglasses for nearsightedness'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Lens Power',
        problem: 'Lens has focal length 25 cm. Find power in diopters. Another lens has power -4 D. Find its focal length.',
        parameters: { focalLength1: 0.25, power2: -4, findPowerAndFocalLength: true },
        type: 'lenses',
        subparts: [
            'Power: P = 1/f (f in meters, P in diopters)',
            'First lens: P = 1/0.25 = +4 D (converging)',
            'Second lens: f = 1/P = 1/(-4) = -0.25 m = -25 cm',
            'Negative power means diverging lens',
            'Higher magnitude power means stronger lens (shorter f)'
        ],
        helper: 'Lens power: P = 1/f (m), measured in diopters (D)',
        realWorldContext: 'Prescription eyeglasses'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Magnifying Glass',
        problem: 'Object placed 5 cm from converging lens (f = 10 cm). Find magnification.',
        parameters: { objectDistance: 5, focalLength: 10, magnifyingGlass: true },
        type: 'lenses',
        subparts: [
            'Object inside focal length (d_o < f)',
            'Lens equation: 1/d_i = 1/10 - 1/5 = 1/10 - 2/10 = -1/10',
            'd_i = -10 cm (virtual image, same side)',
            'Magnification: M = -(-10)/5 = +2',
            'Image is upright, magnified 2× (magnifying glass effect)'
        ],
        helper: 'When d_o < f: virtual, upright, magnified image',
        realWorldContext: 'Magnifying glasses, loupes'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Two Lens System',
        problem: 'Two converging lenses f₁ = 10 cm, f₂ = 15 cm, separated by 30 cm. Object at 20 cm from first lens. Find final image position.',
        parameters: { f1: 10, f2: 15, separation: 30, objectDistance: 20, twoLensSystem: true },
        type: 'lenses',
        subparts: [
            'First lens: 1/d_i1 = 1/10 - 1/20 = 1/20, so d_i1 = 20 cm',
            'Image from first lens is 20 cm beyond it',
            'This becomes object for second lens: d_o2 = 30 - 20 = 10 cm',
            'Second lens: 1/d_i2 = 1/15 - 1/10 = -1/30',
            'd_i2 = -30 cm (virtual, 30 cm before second lens)',
            'Final image is 30 - 30 = 0 cm from second lens (at second lens position)'
        ],
        helper: 'Two lenses: image from first becomes object for second',
        realWorldContext: 'Compound microscopes, telescopes'
    });

    return relatedProblems;
}

generateRelatedMirrors(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Concave Mirror Magnification',
        problem: 'Concave mirror f = 12 cm, object at 18 cm. Find magnification and image height if object is 3 cm tall.',
        parameters: { focalLength: 12, objectDistance: 18, objectHeight: 3, concave: true },
        type: 'mirrors',
        subparts: [
            'Mirror equation: 1/d_i = 1/12 - 1/18 = 3/36 - 2/36 = 1/36',
            'd_i = 36 cm (real image)',
            'Magnification: M = -d_i/d_o = -36/18 = -2',
            'Image height: h_i = M × h_o = -2 × 3 = -6 cm',
            'Image is inverted (negative), magnified 2×, height 6 cm'
        ],
        helper: 'Magnification: M = h_i/h_o = -d_i/d_o',
        realWorldContext: 'Shaving mirrors, makeup mirrors'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Mirror Focal Point',
        problem: 'Object at focal point of concave mirror (f = 15 cm). Describe image.',
        parameters: { focalLength: 15, objectAtFocus: true },
        type: 'mirrors',
        subparts: [
            'When object at focal point: d_o = f',
            'Mirror equation: 1/d_i = 1/f - 1/f = 0',
            '1/d_i = 0 means d_i = ∞',
            'Image forms at infinity',
            'No real image formed (rays parallel after reflection)'
        ],
        helper: 'Object at focal point: image at infinity (parallel rays)',
        realWorldContext: 'Searchlights, flashlights'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Convex Mirror Field of View',
        problem: 'Convex car mirror f = -50 cm, object 10 m away. Find image distance and size comparison.',
        parameters: { focalLength: -50, objectDistance: 1000, convex: true },
        type: 'mirrors',
        subparts: [
            'Convex mirror: f negative',
            '1/d_i = 1/(-50) - 1/1000 = -1/50 - 1/1000',
            '1/d_i ≈ -0.021, so d_i ≈ -47.6 cm (virtual, behind mirror)',
            'Magnification: M = -(-47.6)/1000 = +0.048',
            'Image is upright, about 5% of object size',
            'Wide field of view but objects appear smaller'
        ],
        helper: 'Convex mirrors: wide FOV, objects appear smaller',
        realWorldContext: 'Side-view mirrors, security mirrors'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Real vs Virtual Images',
        problem: 'Explain difference between real and virtual images. Give examples with mirrors.',
        parameters: { realVsVirtual: true, explain: true },
        type: 'mirrors',
        subparts: [
            'Real image: light rays actually converge, can be projected on screen',
            'Real images: d_i positive, inverted (M negative)',
            'Examples: concave mirror when d_o > f',
            'Virtual image: light rays appear to diverge from point, cannot be projected',
            'Virtual images: d_i negative, upright (M positive)',
            'Examples: plane mirror, convex mirror, concave when d_o < f'
        ],
        helper: 'Real: rays converge (projectable), Virtual: rays diverge (not projectable)',
        realWorldContext: 'Image formation principles'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Parabolic Mirror',
        problem: 'Parabolic mirror used in telescope. Object at infinity. Where does image form?',
        parameters: { parabolic: true, objectAtInfinity: true },
        type: 'mirrors',
        subparts: [
            'Object at infinity: incoming rays parallel to principal axis',
            'Parallel rays converge at focal point',
            'Image forms at focal point: d_i = f',
            'This is why telescopes use parabolic mirrors',
            'All distant objects (stars) focus at focal plane'
        ],
        helper: 'Parallel rays (∞) converge at focal point',
        realWorldContext: 'Telescopes, satellite dishes'
    });

    return relatedProblems;
}

generateRelatedOpticalInstruments(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Simple Magnifier',
        problem: 'Magnifying glass focal length 5 cm used by person with near point 25 cm. Find angular magnification.',
        parameters: { focalLength: 5, nearPoint: 25, findAngularMagnification: true },
        type: 'optical_instruments',
        subparts: [
            'Angular magnification (relaxed eye): M = D/f',
            'D = near point distance = 25 cm',
            'Calculate: M = 25/5 = 5',
            'Object appears 5× larger angular size',
            'Maximum magnification when image at near point: M = 1 + D/f = 6'
        ],
        helper: 'Magnifier: M = D/f (relaxed), M = 1 + D/f (image at near point)',
        realWorldContext: 'Reading glasses, jeweler\'s loupe'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Compound Microscope',
        problem: 'Microscope: objective f_o = 2 cm, eyepiece f_e = 5 cm, tube length 20 cm. Find magnification.',
        parameters: { fo: 2, fe: 5, tubeLength: 20, microscope: true },
        type: 'optical_instruments',
        subparts: [
            'Compound microscope magnification: M = -(L/f_o)(D/f_e)',
            'L = tube length = 20 cm, D = near point = 25 cm',
            'Calculate: M = -(20/2)(25/5)',
            'M = -10 × 5 = -50',
            'Magnitude: 50× magnification, inverted image'
        ],
        helper: 'Microscope: M = -(L/f_o)(D/f_e), negative = inverted',
        realWorldContext: 'Biology labs, medical diagnostics'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Refracting Telescope',
        problem: 'Telescope: objective focal length 100 cm, eyepiece 5 cm. Find magnification and length.',
        parameters: { fo: 100, fe: 5, telescope: true },
        type: 'optical_instruments',
        subparts: [
            'Telescope magnification: M = -f_o/f_e',
            'Calculate: M = -100/5 = -20',
            'Magnitude: 20× magnification',
            'Telescope length: L = f_o + f_e = 100 + 5 = 105 cm',
            'Negative sign means inverted (acceptable for astronomy)'
        ],
        helper: 'Telescope: M = -f_o/f_e, Length = f_o + f_e',
        realWorldContext: 'Astronomy, terrestrial viewing'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Camera',
        problem: 'Camera lens f = 50 mm focused on object 3 m away. Find image distance.',
        parameters: { focalLength: 50, objectDistance: 3000, camera: true },
        type: 'optical_instruments',
        subparts: [
            'Use lens equation: 1/f = 1/d_o + 1/d_i',
            'Convert: f = 50 mm = 5 cm, d_o = 300 cm',
            '1/d_i = 1/5 - 1/300 = 60/300 - 1/300 = 59/300',
            'd_i = 300/59 ≈ 5.08 cm',
            'Image forms slightly beyond focal length on sensor/film'
        ],
        helper: 'Camera: real, inverted, reduced image on sensor',
        realWorldContext: 'Photography, digital cameras'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Human Eye',
        problem: 'Normal eye: lens-retina distance 2 cm. What focal length needed to focus on object at infinity?',
        parameters: { retinaDistance: 2, objectAtInfinity: true, eye: true },
        type: 'optical_instruments',
        subparts: [
            'Object at infinity: d_o = ∞, so 1/d_o = 0',
            'Image must form on retina: d_i = 2 cm',
            'Lens equation: 1/f = 1/d_o + 1/d_i = 0 + 1/2',
            'Focal length: f = 2 cm (relaxed eye)',
            'For near objects, ciliary muscles change f (accommodation)'
        ],
        helper: 'Eye: lens adjusts focal length to focus on retina',
        realWorldContext: 'Vision, eye anatomy'
    });

    return relatedProblems;
}

generateRelatedWaveOptics(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Double-Slit Interference',
        problem: 'Double slit: separation 0.5 mm, screen 2 m away, light λ = 600 nm. Find fringe separation.',
        parameters: { slitSeparation: 0.5e-3, screenDistance: 2, wavelength: 600e-9, findFringeSeparation: true },
        type: 'wave_optics',
        subparts: [
            'Fringe separation: Δy = λL/d',
            'λ = 600 nm = 600×10⁻⁹ m, L = 2 m, d = 0.5×10⁻³ m',
            'Calculate: Δy = (600×10⁻⁹ × 2) / (0.5×10⁻³)',
            'Δy = 1200×10⁻⁹ / 0.5×10⁻³ = 2.4×10⁻³ m',
            'Δy = 2.4 mm between adjacent bright fringes'
        ],
        helper: 'Fringe separation: Δy = λL/d',
        realWorldContext: 'Interference experiments, Young\'s double slit'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Path Difference',
        problem: 'Two slits create 3rd bright fringe. What is path difference from the two slits?',
        parameters: { fringeOrder: 3, brightFringe: true, findPathDifference: true },
        type: 'wave_optics',
        subparts: [
            'Bright fringe condition: path difference = mλ',
            'For 3rd bright fringe: m = 3',
            'Path difference = 3λ',
            'Waves arrive in phase (constructive interference)',
            'If λ = 500 nm, then path diff = 1500 nm'
        ],
        helper: 'Bright: Δr = mλ (m = 0,1,2...), Dark: Δr = (m+½)λ',
        realWorldContext: 'Wave interference patterns'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Thin Film Interference',
        problem: 'Soap film (n=1.33) in air, thickness 200 nm. What wavelength reflects most strongly (normal incidence)?',
        parameters: { filmIndex: 1.33, thickness: 200e-9, normalIncidence: true, constructive: true },
        type: 'wave_optics',
        subparts: [
            'For constructive interference in thin film: 2nt = (m + ½)λ',
            '(Extra ½ from phase change at first surface)',
            'For m = 0 (1st order): 2(1.33)(200×10⁻⁹) = ½λ',
            '532×10⁻⁹ = ½λ',
            'λ = 1064 nm (infrared)',
            'For visible: m = 1 gives λ = 355 nm (UV), m = 2 gives λ ≈ 532 nm (green)'
        ],
        helper: 'Thin film: 2nt = (m+½)λ or mλ depending on phase changes',
        realWorldContext: 'Soap bubbles, oil slicks, anti-reflection coatings'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Coherence',
        problem: 'Why must light sources be coherent for observable interference pattern?',
        parameters: { coherence: true, explain: true },
        type: 'wave_optics',
        subparts: [
            'Coherent sources: constant phase relationship',
            'Same frequency and wavelength required',
            'Incoherent sources: random phase changes',
            'Random phases cause interference pattern to wash out',
            'Laser light is highly coherent, sunlight is not',
            'Double slit uses single source split into two (automatically coherent)'
        ],
        helper: 'Coherence: constant phase relationship necessary for stable interference',
        realWorldContext: 'Laser applications, holography'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Single-Slit to Double-Slit',
        problem: 'Single slit width 0.1 mm creates diffraction. Double slits 0.5 mm apart. Which pattern dominates?',
        parameters: { singleSlitWidth: 0.1e-3, doubleSitSeparation: 0.5e-3, comparePatterns: true },
        type: 'wave_optics',
        subparts: [
            'Single slit creates broad diffraction envelope',
            'Double slit creates fine interference fringes',
            'Combined: interference fringes within diffraction envelope',
            'Diffraction spacing: proportional to λ/a (a = slit width)',
            'Interference spacing: proportional to λ/d (d = slit separation)',
            'Since d > a, interference fringes are narrower/closer together'
        ],
        helper: 'Combined pattern: double-slit fringes modulated by single-slit envelope',
        realWorldContext: 'Real diffraction gratings'
    });

    return relatedProblems;
}

generateRelatedDiffraction(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Single-Slit Diffraction',
        problem: 'Single slit width 0.2 mm, screen 3 m away, light λ = 500 nm. Find width of central maximum.',
        parameters: { slitWidth: 0.2e-3, screenDistance: 3, wavelength: 500e-9, findCentralMax: true },
        type: 'diffraction',
        subparts: [
            'First minimum at: sin(θ) = λ/a',
            'For small angles: θ ≈ λ/a',
            'θ = 500×10⁻⁹ / 0.2×10⁻³ = 2.5×10⁻³ rad',
            'Distance to first minimum: y = Lθ = 3 × 2.5×10⁻³ = 7.5×10⁻³ m',
            'Central maximum width: 2y = 15 mm'
        ],
        helper: 'Single slit 1st minimum: sin(θ) = λ/a, central width = 2λL/a',
        realWorldContext: 'Resolution limits, aperture effects'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Diffraction Condition',
        problem: 'When does diffraction become noticeable for waves passing through opening?',
        parameters: { diffractionCondition: true, explain: true },
        type: 'diffraction',
        subparts: [
            'Diffraction noticeable when wavelength ≈ opening size',
            'If λ << opening: diffraction negligible (geometrical optics)',
            'If λ ≈ opening: significant diffraction',
            'If λ >> opening: strong diffraction',
            'Example: Sound (λ ~ meters) diffracts around doors easily',
            'Light (λ ~ nanometers) needs very small openings to diffract noticeably'
        ],
        helper: 'Diffraction significant when λ ≈ aperture size',
        realWorldContext: 'Why sound bends around corners but light doesn\'t'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Diffraction Grating',
        problem: 'Grating 5000 lines/cm, light λ = 600 nm. Find angle of 2nd order maximum.',
        parameters: { linesPerCm: 5000, wavelength: 600e-9, order: 2, findAngle: true },
        type: 'diffraction',
        subparts: [
            'Grating spacing: d = 1/(5000 cm⁻¹) = 1/500000 m = 2×10⁻⁶ m',
            'Grating equation: d sin(θ) = mλ',
            'For m = 2: sin(θ) = 2λ/d',
            'sin(θ) = 2 × 600×10⁻⁹ / 2×10⁻⁶ = 0.6',
            'θ = sin⁻¹(0.6) ≈ 36.9°'
        ],
        helper: 'Diffraction grating: d sin(θ) = mλ (m = 0,±1,±2...)',
        realWorldContext: 'Spectrometers, wavelength measurement'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Resolving Power',
        problem: 'Telescope aperture 10 cm, λ = 550 nm. Find minimum resolvable angle (Rayleigh criterion).',
        parameters: { aperture: 0.1, wavelength: 550e-9, rayleighCriterion: true },
        type: 'diffraction',
        subparts: [
            'Rayleigh criterion: θ_min = 1.22λ/D',
            'D = aperture diameter = 0.1 m',
            'Calculate: θ_min = 1.22 × 550×10⁻⁹ / 0.1',
            'θ_min = 6.71×10⁻⁶ rad',
            'Convert: θ_min ≈ 1.38 arcseconds',
            'Smaller aperture → worse resolution'
        ],
        helper: 'Rayleigh criterion: θ_min = 1.22λ/D (circular aperture)',
        realWorldContext: 'Telescope resolution, microscope limits'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Circular Aperture',
        problem: 'Camera lens diameter 5 cm, f/2.8. How does aperture size affect diffraction and image quality?',
        parameters: { aperture: 0.05, fNumber: 2.8, explain: true },
        type: 'diffraction',
        subparts: [
            'Smaller aperture (higher f-number): more diffraction',
            'Larger aperture (lower f-number): less diffraction, sharper',
            'But: larger aperture reduces depth of field',
            'Trade-off: sharpness vs depth of field',
            'Diffraction limit: θ = 1.22λ/D',
            'Professional cameras balance these factors'
        ],
        helper: 'Larger aperture: less diffraction, shallower DOF',
        realWorldContext: 'Photography, optical design'
    });

    return relatedProblems;
}

// ==================== MODERN PHYSICS GENERATORS ====================

generateRelatedPhotoelectricEffect(originalProblem, originalSolution, options) {
    const relatedProblems = [];

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Photoelectric Equation',
        problem: 'Light frequency 8×10¹⁴ Hz strikes metal with work function 2.5 eV. Find max KE of ejected electrons. (h = 6.63×10⁻³⁴ J·s)',
        parameters: { frequency: 8e14, workFunction: 2.5, h: 6.63e-34, findKE: true },
        type: 'photoelectric_effect',
        subparts: [
            'Photoelectric equation: KE_max = hf - φ',
            'Calculate photon energy: E = hf = 6.63×10⁻³⁴ × 8×10¹⁴',
            'E = 5.304×10⁻¹⁹ J',
            'Convert to eV: E = 5.304×10⁻¹⁹ / 1.6×10⁻¹⁹ = 3.315 eV',
            'KE_max = 3.315 - 2.5 = 0.815 eV'
        ],
        helper: 'Einstein\'s equation: KE_max = hf - φ, 1 eV = 1.6×10⁻¹⁹ J',
        realWorldContext: 'Solar cells, photodetectors'
    });

    relatedProblems.push({
        difficulty: 'easier',
        scenario: 'Threshold Frequency',
        problem: 'Metal has work function 3 eV. Find threshold frequency. (h = 4.14×10⁻¹⁵ eV·s)',
        parameters: { workFunction: 3, h_eV: 4.14e-15, findThreshold: true },
        type: 'photoelectric_effect',
        subparts: [
            'At threshold: photon energy = work function',
            'hf₀ = φ',
            'f₀ = φ/h = 3 / 4.14×10⁻¹⁵',
            'f₀ ≈ 7.25×10¹⁴ Hz',
            'Below this frequency: no photoelectrons emitted'
        ],
        helper: 'Threshold: hf₀ = φ, no emission if f < f₀',
        realWorldContext: 'Why red light doesn\'t cause photoelectric effect in some metals'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Stopping Potential',
        problem: 'Light λ = 400 nm on potassium (φ = 2.3 eV). Find stopping potential. (hc = 1240 eV·nm)',
        parameters: { wavelength: 400, workFunction: 2.3, hc: 1240, findStoppingPotential: true },
        type: 'photoelectric_effect',
        subparts: [
            'Photon energy: E = hc/λ = 1240/400 = 3.1 eV',
            'Max KE: KE_max = E - φ = 3.1 - 2.3 = 0.8 eV',
            'Stopping potential: eV_s = KE_max',
            'V_s = 0.8 V',
            'This voltage stops all photoelectrons'
        ],
        helper: 'Stopping potential: eV_s = KE_max = hf - φ',
        realWorldContext: 'Measuring photoelectron energies'
    });

    relatedProblems.push({
        difficulty: 'similar',
        scenario: 'Intensity Independence',
        problem: 'Light intensity doubled but frequency same. How does max KE of photoelectrons change?',
        parameters: { intensityDoubled: true, frequencySame: true, explainKE: true },
        type: 'photoelectric_effect',
        subparts: [
            'KE_max = hf - φ depends only on frequency',
            'Intensity affects number of photons, not energy per photon',
            'Max KE remains unchanged',
            'More photoelectrons emitted (higher current)',
            'But each electron has same max KE',
            'This puzzled classical physics!'
        ],
        helper: 'KE depends on frequency (not intensity), number depends on intensity',
        realWorldContext: 'Quantum nature of light'
    });

    relatedProblems.push({
        difficulty: 'harder',
        scenario: 'Work Function Measurement',
        problem: 'Two wavelengths (λ₁=300 nm, λ₂=400 nm) produce stopping potentials (V₁=2.0 V, V₂=0.8 V). Find Planck constant and work function.',
        parameters: { lambda1: 300, lambda2: 400, V1: 2.0, V2: 0.8, findHandPhi: true },
        type: 'photoelectric_effect',
        subparts: [
            'For each wavelength: eV_s = hc/λ - φ',
            'Equation 1: e(2.0) = hc/300 - φ',
            'Equation 2: e(0.8) = hc/400 - φ',
            'Subtract: e(1.2) = hc(1/300 - 1/400) = hc(1/1200)',
            'hc = 1.2e × 1200 = 1440 eV·nm (close to 1240, experimental)',
            'Solve for φ using either equation'
        ],
        helper: 'Multiple measurements can determine h and φ',
        realWorldContext: 'Experimental determination of constants'
    });

    return relatedProblems;
}





// ==================== BIOLOGY PROBLEM GENERATORS ====================

// Cell Biology Generators




    // === MAIN RELATED PROBLEMS GENERATION METHOD ===

    generateRelatedProblems(originalProblem, originalSolution, options = {}) {
        const {
            count = 5,
            difficultyRange = ['easier', 'similar', 'harder'],
            includeRealWorld = true,
            includeConceptualVariations = true
        } = options;

        try {
            const problemType = originalProblem.type;
            const generator = this.relatedProblemGenerators[problemType];
            
            if (!generator) {
                throw new Error(`No related problem generator for type: ${problemType}`);
            }

            const relatedProblems = generator.call(this, originalProblem, originalSolution, {
                count,
                difficultyRange,
                includeRealWorld,
                includeConceptualVariations
            });

            return {
                originalProblem: originalProblem,
                relatedProblems: relatedProblems,
                totalProblems: relatedProblems.length,
                category: this.getCategoryFromType(problemType),
                generatedAt: new Date().toISOString()
            };

        } catch (error) {
            throw new Error(`Failed to generate related problems: ${error.message}`);
        }
    }






