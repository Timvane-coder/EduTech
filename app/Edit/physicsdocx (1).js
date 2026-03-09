// ============================================================
// PHYSICS SECTION CONFIGURATIONS
// ============================================================
// Covers physics handlers:
//   handleKinematics
//   handleDynamics
//   handleEnergyWorkPower
//   handleMomentumCollisions
//   handleCircularMotion
//   handleOscillations
//
// Each section maps one top-level key from handler.components.
// contentKey: 'components' drills into the filtered components
// object — matching the pattern of INDICES_SECTIONS.
//
// diagramId   → descriptive camelCase name of the visual needed
// experimentId → snake_case name of a concrete investigation
// ============================================================


// ────────────────────────────────────────────────────────────
// HANDLER: handleKinematics
// Top-level component keys (in order):
//   foundations | speed_and_velocity | acceleration |
//   equations_of_motion | free_fall_and_gravity |
//   projectile_motion | graphical_analysis |
//   relative_motion | motion_in_2D_3D | calculus_kinematics |
//   types_of_motion
// ────────────────────────────────────────────────────────────

const MECHANICS_SECTIONS = [


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'temperatureAndHeat',
        specificItems: ['foundations'],
        diagramId: 'thermalEnergyVsTemperatureVsHeatConceptMap',
        experimentId: 'bathtub_vs_cup_thermal_energy_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureScales',
        label: 'Temperature Scales and Conversions',
        sectionNumber: 2,
        subTopic: 'temperatureAndHeat',
        specificItems: ['temperatureScales'],
        diagramId: 'celsiusFahrenheitKelvinTripleScaleComparisonDiagram',
        experimentId: 'triple_scale_thermometer_calibration_ice_boiling_water_experiment',
        contentKey: 'components'
    },
    {
        id: 'heatTransferQuantitative',
        label: 'Specific Heat Capacity',
        sectionNumber: 3,
        subTopic: 'temperatureAndHeat',
        specificItems: ['heatTransferQuantitative'],
        diagramId: 'specificHeatCapacityMaterialsComparisonBarChart',
        experimentId: 'specific_heat_capacity_aluminium_copper_water_immersion_heater_experiment',
        contentKey: 'components'
    },
    {
        id: 'latentHeat',
        label: 'Latent Heat and Phase Changes',
        sectionNumber: 4,
        subTopic: 'temperatureAndHeat',
        specificItems: ['latentHeat'],
        diagramId: 'heatingCoolingCurveWaterAllPhasesAnnotatedDiagram',
        experimentId: 'latent_heat_fusion_ice_melting_temperature_plateau_experiment',
        contentKey: 'components'
    },
    {
        id: 'calorimetry',
        label: 'Calorimetry',
        sectionNumber: 5,
        subTopic: 'temperatureAndHeat',
        specificItems: ['calorimetry'],
        diagramId: 'coffeeCupCalorimeterSetupCrossSectionDiagram',
        experimentId: 'calorimetry_hot_metal_block_water_equilibrium_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'thermalExpansion',
        label: 'Thermal Expansion',
        sectionNumber: 6,
        subTopic: 'temperatureAndHeat',
        specificItems: ['thermalExpansion'],
        diagramId: 'linearAreaVolumeExpansionCoefficientsAnnotatedDiagram',
        experimentId: 'bimetallic_strip_thermostat_deflection_heating_cooling_experiment',
        contentKey: 'components'
    },
    {
        id: 'heatTransferMechanismsOverview',
        label: 'Heat Transfer Mechanisms Overview',
        sectionNumber: 7,
        subTopic: 'temperatureAndHeat',
        specificItems: ['heatTransferMechanismsOverview'],
        diagramId: 'threeModesHeatTransferConductionConvectionRadiationSideBySideDiagram',
        experimentId: 'conduction_convection_radiation_identification_three_station_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 8,
        subTopic: 'temperatureAndHeat',
        specificItems: ['realLifeApplications'],
        diagramId: 'thermalEnergyApplicationsCookingClimateEngineeringInfographic',
        experimentId: 'water_high_specific_heat_coastal_climate_moderation_model_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'gasLaws',
        specificItems: ['foundations'],
        diagramId: 'gasStateVariablesPVnTRelationshipConceptDiagram',
        experimentId: 'gas_state_variables_pressure_volume_temperature_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'boylesLaw',
        label: "Boyle's Law",
        sectionNumber: 2,
        subTopic: 'gasLaws',
        specificItems: ['boylesLaw'],
        diagramId: 'boylesLawPVHyperbolaAndLinearisedGraphs',
        experimentId: 'boyles_law_syringe_pressure_gauge_volume_constant_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'charlesLaw',
        label: "Charles's Law",
        sectionNumber: 3,
        subTopic: 'gasLaws',
        specificItems: ['charlesLaw'],
        diagramId: 'charlesLawVolumeTemperatureLinearGraphAbsoluteZeroExtrapolationDiagram',
        experimentId: 'charles_law_capillary_tube_gas_column_water_bath_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'gayLussacsLaw',
        label: "Gay-Lussac's Law",
        sectionNumber: 4,
        subTopic: 'gasLaws',
        specificItems: ['gayLussacsLaw'],
        diagramId: 'gayLussacsLawPressureTemperatureLinearGraphConstantVolumeDiagram',
        experimentId: 'gay_lussacs_law_sealed_flask_pressure_sensor_heating_cooling_experiment',
        contentKey: 'components'
    },
    {
        id: 'avogadrosLaw',
        label: "Avogadro's Law",
        sectionNumber: 5,
        subTopic: 'gasLaws',
        specificItems: ['avogadrosLaw'],
        diagramId: 'avogadrosLawVolumeVsMolesEqualVolumesEqualMoleculesDiagram',
        experimentId: 'avogadros_law_balloon_moles_volume_constant_pressure_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'combinedGasLaw',
        label: 'Combined Gas Law',
        sectionNumber: 6,
        subTopic: 'gasLaws',
        specificItems: ['combinedGasLaw'],
        diagramId: 'combinedGasLawThreeVariableVennDiagramSpecialCases',
        experimentId: 'combined_gas_law_sealed_syringe_simultaneous_pressure_volume_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'idealGasLaw',
        label: 'Ideal Gas Law',
        sectionNumber: 7,
        subTopic: 'gasLaws',
        specificItems: ['idealGasLaw'],
        diagramId: 'idealGasLawPVnRTVariableRelationshipAnnotatedDiagram',
        experimentId: 'ideal_gas_law_verification_known_moles_pressure_volume_temperature_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'daltonsLaw',
        label: "Dalton's Law of Partial Pressures",
        sectionNumber: 8,
        subTopic: 'gasLaws',
        specificItems: ['daltonsLaw'],
        diagramId: 'daltonsLawPartialPressureMoleFractionMixtureStackedBarDiagram',
        experimentId: 'daltons_law_gas_collection_over_water_vapour_pressure_correction_experiment',
        contentKey: 'components'
    },
    {
        id: 'realGases',
        label: 'Real Gases and Van der Waals Equation',
        sectionNumber: 9,
        subTopic: 'gasLaws',
        specificItems: ['realGases'],
        diagramId: 'compressibilityFactorZVsPressureRealVsIdealGasDeviationGraph',
        experimentId: 'real_gas_deviation_high_pressure_co2_pv_isotherm_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'gasLaws',
        specificItems: ['realLifeApplications'],
        diagramId: 'gasLawsApplicationsBreathingTyreHotAirBalloonIndustrialInfographic',
        experimentId: 'breathing_mechanics_lung_volume_pressure_model_bell_jar_diaphragm_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'kineticTheory',
        specificItems: ['foundations'],
        diagramId: 'kineticTheoryPostulatesGasMoleculeRandomMotionAnnotatedDiagram',
        experimentId: 'brownian_motion_smoke_cell_microscope_random_particle_movement_experiment',
        contentKey: 'components'
    },
    {
        id: 'pressureDerivation',
        label: 'Pressure from Kinetic Theory',
        sectionNumber: 2,
        subTopic: 'kineticTheory',
        specificItems: ['pressureDerivation'],
        diagramId: 'moleculeCollisionCubicBoxMomentumTransferPressureDerivationDiagram',
        experimentId: 'pressure_molecular_collision_frequency_model_ping_pong_ball_box_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureAndKineticEnergy',
        label: 'Temperature and Kinetic Energy',
        sectionNumber: 3,
        subTopic: 'kineticTheory',
        specificItems: ['temperatureAndKineticEnergy'],
        diagramId: 'averageKineticEnergyTemperatureProportionalityGraphWithBoltzmannAnnotation',
        experimentId: 'temperature_molecular_speed_gas_diffusion_rate_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'molecularSpeeds',
        label: 'Molecular Speeds',
        sectionNumber: 4,
        subTopic: 'kineticTheory',
        specificItems: ['molecularSpeeds'],
        diagramId: 'maxwellBoltzmannDistributionVmpVmeanVrmsAnnotatedCurveTemperatureEffect',
        experimentId: 'molecular_speed_distribution_diffusion_tube_bromine_ammonia_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'equipartitionOfEnergy',
        label: 'Equipartition of Energy',
        sectionNumber: 5,
        subTopic: 'kineticTheory',
        specificItems: ['equipartitionOfEnergy'],
        diagramId: 'degreesOfFreedomMonatomicDiatomicNonlinearMoleculeRotationalTranslationalVibrationalDiagram',
        experimentId: 'molar_heat_capacity_monatomic_vs_diatomic_gas_calorimetry_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'internalEnergy',
        label: 'Internal Energy of an Ideal Gas',
        sectionNumber: 6,
        subTopic: 'kineticTheory',
        specificItems: ['internalEnergy'],
        diagramId: 'internalEnergyTemperatureOnlyDependenceIdealGasJouleExpansionDiagram',
        experimentId: 'joule_free_expansion_temperature_unchanged_ideal_gas_vacuum_flask_experiment',
        contentKey: 'components'
    },
    {
        id: 'meanFreePathAndCollisions',
        label: 'Mean Free Path and Collision Frequency',
        sectionNumber: 7,
        subTopic: 'kineticTheory',
        specificItems: ['meanFreePathAndCollisions'],
        diagramId: 'meanFreePathCollisionCrossSectionMolecularDiameterZigzagPathDiagram',
        experimentId: 'mean_free_path_pressure_dependence_diffusion_rate_vacuum_pump_variation_experiment',
        contentKey: 'components'
    },
    {
        id: 'transportPhenomena',
        label: 'Transport Phenomena',
        sectionNumber: 8,
        subTopic: 'kineticTheory',
        specificItems: ['transportPhenomena'],
        diagramId: 'diffusionViscosityThermalConductivityMolecularTransportComparisonDiagram',
        experimentId: 'gaseous_diffusion_ammonia_hydrochloric_acid_white_ring_position_experiment',
        contentKey: 'components'
    },
    {
        id: 'kineticTheoryAndGasLaws',
        label: 'Kinetic Theory and Gas Laws',
        sectionNumber: 9,
        subTopic: 'kineticTheory',
        specificItems: ['kineticTheoryAndGasLaws'],
        diagramId: 'kineticTheoryDerivationGasLawsFamilyTreeFlowchartDiagram',
        experimentId: 'kinetic_theory_gas_law_verification_pressure_temperature_volume_simultaneous_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'kineticTheory',
        specificItems: ['realLifeApplications'],
        diagramId: 'grahamsLawEffusionAtmosphericEscapeSpeedOfSoundKineticTheoryApplicationsInfographic',
        experimentId: 'grahams_law_effusion_rate_hydrogen_vs_carbon_dioxide_pinhole_balloon_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['foundations'],
        diagramId: 'openClosedIsolatedSystemBoundaryHeatWorkMassFlowDiagram',
        experimentId: 'system_boundary_heat_work_identification_open_closed_isolated_container_experiment',
        contentKey: 'components'
    },
    {
        id: 'zerothLaw',
        label: 'Zeroth Law of Thermodynamics',
        sectionNumber: 2,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['zerothLaw'],
        diagramId: 'zerothLawThermalEquilibriumTransitivityABCThermometerDiagram',
        experimentId: 'zeroth_law_three_body_thermal_equilibrium_thermometer_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'firstLaw',
        label: 'First Law of Thermodynamics',
        sectionNumber: 3,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['firstLaw'],
        diagramId: 'firstLawDeltaUQMinusWEnergyFlowSystemSurroundingsDiagram',
        experimentId: 'first_law_electrical_heating_mechanical_stirring_internal_energy_change_experiment',
        contentKey: 'components'
    },
    {
        id: 'secondLaw',
        label: 'Second Law of Thermodynamics',
        sectionNumber: 4,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['secondLaw'],
        diagramId: 'entropyUniverseIncreaseIrreversibleProcessesArrowOfTimeDiagram',
        experimentId: 'entropy_ink_drop_water_diffusion_irreversibility_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'heatEngines',
        label: 'Heat Engines and Carnot Cycle',
        sectionNumber: 5,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['heatEngines'],
        diagramId: 'carnotCycleFourProcessPVDiagramWithEfficiencyAnnotation',
        experimentId: 'heat_engine_efficiency_hot_cold_reservoir_model_carnot_limit_investigation_experiment',
        contentKey: 'components'
    },
    {
        id: 'refrigeratorsAndHeatPumps',
        label: 'Refrigerators and Heat Pumps',
        sectionNumber: 6,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['refrigeratorsAndHeatPumps'],
        diagramId: 'refrigeratorHeatPumpEnergyFlowQcQhWorkCOPComparisonDiagram',
        experimentId: 'refrigerator_cop_measurement_energy_input_heat_extracted_temperature_experiment',
        contentKey: 'components'
    },
    {
        id: 'thirdLaw',
        label: 'Third Law of Thermodynamics',
        sectionNumber: 7,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['thirdLaw'],
        diagramId: 'thirdLawEntropyApproachingZeroAbsoluteZeroTemperatureCurveDiagram',
        experimentId: 'absolute_zero_extrapolation_gas_thermometer_charles_law_cooling_experiment',
        contentKey: 'components'
    },
    {
        id: 'thermodynamicPotentials',
        label: 'Thermodynamic Potentials',
        sectionNumber: 8,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['thermodynamicPotentials'],
        diagramId: 'thermodynamicPotentialsUFGHNaturalVariablesLegendreTransformationDiagram',
        experimentId: 'gibbs_free_energy_spontaneity_chemical_reaction_delta_g_sign_determination_experiment',
        contentKey: 'components'
    },
    {
        id: 'pvDiagramsAndCycles',
        label: 'PV Diagrams and Thermodynamic Cycles',
        sectionNumber: 9,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['pvDiagramsAndCycles'],
        diagramId: 'pvDiagramIsothermalIsobaricIsochoricAdiabaticProcessPathsAnnotatedDiagram',
        experimentId: 'pv_diagram_tracing_isochoric_isobaric_isothermal_process_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 10,
        subTopic: 'lawsOfThermodynamics',
        specificItems: ['realLifeApplications'],
        diagramId: 'thermodynamicsApplicationsPowerPlantRefrigerationBiologyInformationInfographic',
        experimentId: 'steam_engine_model_carnot_efficiency_hot_cold_reservoir_temperature_measurement_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'heatTransfer',
        specificItems: ['foundations'],
        diagramId: 'heatFluxThermalResistanceElectricalAnalogyDeltaTCurrentVoltageDiagram',
        experimentId: 'heat_flux_direction_temperature_gradient_measurement_thermocouple_rod_experiment',
        contentKey: 'components'
    },
    {
        id: 'conduction',
        label: 'Conduction',
        sectionNumber: 2,
        subTopic: 'heatTransfer',
        specificItems: ['conduction'],
        diagramId: 'fouriersLawTemperatureGradientSlabCrossSectionHeatFlowAnnotatedDiagram',
        experimentId: 'thermal_conductivity_comparison_metal_rods_wax_beads_conduction_rate_experiment',
        contentKey: 'components'
    },
    {
        id: 'convection',
        label: 'Convection',
        sectionNumber: 3,
        subTopic: 'heatTransfer',
        specificItems: ['convection'],
        diagramId: 'naturalForcedConvectionBoundaryLayerVelocityTemperatureProfileDiagram',
        experimentId: 'natural_vs_forced_convection_hot_plate_fan_cooling_rate_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'radiation',
        label: 'Radiation',
        sectionNumber: 4,
        subTopic: 'heatTransfer',
        specificItems: ['radiation'],
        diagramId: 'blackbodySpectralEmissivePowerPlancksLawWiensDisplacementAnnotatedCurveDiagram',
        experimentId: 'stefan_boltzmann_radiation_power_temperature_leslie_cube_surface_emissivity_experiment',
        contentKey: 'components'
    },
    {
        id: 'combinedHeatTransfer',
        label: 'Combined Heat Transfer',
        sectionNumber: 5,
        subTopic: 'heatTransfer',
        specificItems: ['combinedHeatTransfer'],
        diagramId: 'thermalResistanceNetworkSeriesParallelConvectionConductionRadiationWallDiagram',
        experimentId: 'composite_wall_thermal_resistance_network_overall_heat_transfer_coefficient_experiment',
        contentKey: 'components'
    },
    {
        id: 'transientConduction',
        label: 'Transient Heat Conduction',
        sectionNumber: 6,
        subTopic: 'heatTransfer',
        specificItems: ['transientConduction'],
        diagramId: 'lumpedCapacitanceExponentialCoolingCurveTimeConstantBiotNumberDiagram',
        experimentId: 'lumped_capacitance_metal_sphere_quenching_cooling_curve_time_constant_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics',
        sectionNumber: 7,
        subTopic: 'heatTransfer',
        specificItems: ['specialTopics'],
        diagramId: 'heatPipeEvaporatorCondensorWickCapillaryActionOperationCrossSectionDiagram',
        experimentId: 'heat_pipe_evaporator_condenser_wick_thermal_superconductor_performance_experiment',
        contentKey: 'components'
    },
    {
        id: 'realLifeApplications',
        label: 'Real-Life Applications',
        sectionNumber: 8,
        subTopic: 'heatTransfer',
        specificItems: ['realLifeApplications'],
        diagramId: 'heatTransferApplicationsBuildingElectronicsAerospaceClimateInfographic',
        experimentId: 'building_insulation_rsi_value_composite_wall_heat_loss_measurement_experiment',
        contentKey: 'components'
    },




   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'progressiveWaves',
        specificItems: ['foundations'],
        diagramId: 'progressiveWaveEnergyTransferNotMatterDiagram',
        experimentId: 'cork_on_water_ripple_tank_energy_transfer_observation',
        contentKey: 'components'
    },
    {
        id: 'waveAnatomy',
        label: 'Wave Anatomy & Properties',
        sectionNumber: 2,
        subTopic: 'progressiveWaves',
        specificItems: ['waveAnatomy'],
        diagramId: 'waveAnatomyAmplitudeWavelengthPeriodLabelledDiagram',
        experimentId: 'oscilloscope_waveform_frequency_amplitude_measurement',
        contentKey: 'components'
    },
    {
        id: 'typesOfWaves',
        label: 'Types of Waves',
        sectionNumber: 3,
        subTopic: 'progressiveWaves',
        specificItems: ['typesOfWaves'],
        diagramId: 'transverseVsLongitudinalParticleMotionDiagram',
        experimentId: 'slinky_spring_transverse_longitudinal_wave_comparison',
        contentKey: 'components'
    },
    {
        id: 'waveEquation',
        label: 'The Wave Equation',
        sectionNumber: 4,
        subTopic: 'progressiveWaves',
        specificItems: ['waveEquation'],
        diagramId: 'displacementTimeAndDisplacementPositionGraphComparison',
        experimentId: 'datalogger_microphone_displacement_time_graph_investigation',
        contentKey: 'components'
    },
    {
        id: 'waveSpeedInMedia',
        label: 'Wave Speed in Different Media',
        sectionNumber: 5,
        subTopic: 'progressiveWaves',
        specificItems: ['waveSpeedInMedia'],
        diagramId: 'waveSpeedTensionDensityStringDiagram',
        experimentId: 'string_tension_mass_per_unit_length_wave_speed_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyAndIntensity',
        label: 'Energy and Intensity',
        sectionNumber: 6,
        subTopic: 'progressiveWaves',
        specificItems: ['energyAndIntensity'],
        diagramId: 'inverseSquareLawPointSourceIntensityDiagram',
        experimentId: 'light_intensity_inverse_square_law_ldr_verification',
        contentKey: 'components'
    },
    {
        id: 'polarisation',
        label: 'Polarisation',
        sectionNumber: 7,
        subTopic: 'progressiveWaves',
        specificItems: ['polarisation'],
        diagramId: 'malussLawPolaroidAnalyserOrientationDiagram',
        experimentId: 'crossed_polaroid_filters_malus_law_intensity_verification',
        contentKey: 'components'
    },
    {
        id: 'waveBehaviourAtBoundaries',
        label: 'Wave Behaviour at Boundaries',
        sectionNumber: 8,
        subTopic: 'progressiveWaves',
        specificItems: ['waveBehaviourAtBoundaries'],
        diagramId: 'reflectionRefractionDiffractionBoundaryComparisonDiagram',
        experimentId: 'ripple_tank_reflection_refraction_diffraction_observation',
        contentKey: 'components'
    },
    {
        id: 'dopplerEffect',
        label: 'The Doppler Effect',
        sectionNumber: 9,
        subTopic: 'progressiveWaves',
        specificItems: ['dopplerEffect'],
        diagramId: 'dopplerWavefrontCompressionRecessionDiagram',
        experimentId: 'moving_buzzer_doppler_frequency_shift_measurement',
        contentKey: 'components'
    },
    {
        id: 'phaseAndPathDifference',
        label: 'Phase and Path Difference',
        sectionNumber: 10,
        subTopic: 'progressiveWaves',
        specificItems: ['phaseAndPathDifference'],
        diagramId: 'phaseDifferencePathDifferenceWavelengthFractionDiagram',
        experimentId: 'two_microphone_oscilloscope_phase_difference_measurement',
        contentKey: 'components'
    },
    {
        id: 'measurementAndExperimentalSkills',
        label: 'Measurement and Experimental Skills',
        sectionNumber: 11,
        subTopic: 'progressiveWaves',
        specificItems: ['measurementAndExperimentalSkills'],
        diagramId: 'diffractionGratingSetupAngleMeasurementDiagram',
        experimentId: 'diffraction_grating_wavelength_of_laser_light_measurement',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 12,
        subTopic: 'progressiveWaves',
        specificItems: ['realWorldApplications'],
        diagramId: 'ultrasoundEchoSonarDistanceCalculationDiagram',
        experimentId: 'sonar_pulse_echo_depth_measurement_simulation',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'stationaryWaves',
        specificItems: ['foundations'],
        diagramId: 'twoOppositeProgressiveWavesSuperposingToFormStationaryDiagram',
        experimentId: 'rope_reflection_superposition_stationary_wave_formation',
        contentKey: 'components'
    },
    {
        id: 'nodesAndAntinodes',
        label: 'Nodes and Antinodes',
        sectionNumber: 2,
        subTopic: 'stationaryWaves',
        specificItems: ['nodesAndAntinodes'],
        diagramId: 'nodeAntinodeLambdaHalfSpacingLabelledDiagram',
        experimentId: 'vibrating_string_node_antinode_position_identification',
        contentKey: 'components'
    },
    {
        id: 'harmonicsAndOvertones',
        label: 'Harmonics and Overtones',
        sectionNumber: 3,
        subTopic: 'stationaryWaves',
        specificItems: ['harmonicsAndOvertones'],
        diagramId: 'firstSecondThirdHarmonicStringPatternDiagram',
        experimentId: 'signal_generator_string_harmonic_frequency_series_investigation',
        contentKey: 'components'
    },
    {
        id: 'stationaryWavesOnStrings',
        label: 'Stationary Waves on Strings',
        sectionNumber: 4,
        subTopic: 'stationaryWaves',
        specificItems: ['stationaryWavesOnStrings'],
        diagramId: 'mersennesLawsTensionLengthFrequencyRelationshipDiagram',
        experimentId: 'melde_experiment_tension_frequency_wavelength_string_verification',
        contentKey: 'components'
    },
    {
        id: 'stationaryWavesInAirColumns',
        label: 'Stationary Waves in Air Columns',
        sectionNumber: 5,
        subTopic: 'stationaryWaves',
        specificItems: ['stationaryWavesInAirColumns'],
        diagramId: 'openClosedPipeHarmonicDisplacementPressureNodeDiagram',
        experimentId: 'resonance_tube_water_column_speed_of_sound_measurement',
        contentKey: 'components'
    },
    {
        id: 'resonance',
        label: 'Resonance',
        sectionNumber: 6,
        subTopic: 'stationaryWaves',
        specificItems: ['resonance'],
        diagramId: 'resonanceCurveDrivingFrequencyAmplitudeQFactorDiagram',
        experimentId: 'driven_oscillator_resonance_frequency_amplitude_peak_investigation',
        contentKey: 'components'
    },
    {
        id: 'energyInStationaryWaves',
        label: 'Energy in Stationary Waves',
        sectionNumber: 7,
        subTopic: 'stationaryWaves',
        specificItems: ['energyInStationaryWaves'],
        diagramId: 'stationaryWaveKineticPotentialEnergyDistributionDiagram',
        experimentId: 'standing_wave_no_net_energy_transfer_demonstration',
        contentKey: 'components'
    },
    {
        id: 'mathematicalDescription',
        label: 'Mathematical Description',
        sectionNumber: 8,
        subTopic: 'stationaryWaves',
        specificItems: ['mathematicalDescription'],
        diagramId: 'stationaryWaveEquationSpatialTemporalFactorDiagram',
        experimentId: 'oscilloscope_stationary_wave_amplitude_vs_position_mapping',
        contentKey: 'components'
    },
    {
        id: 'experimentalObservation',
        label: 'Experimental Observation',
        sectionNumber: 9,
        subTopic: 'stationaryWaves',
        specificItems: ['experimentalObservation'],
        diagramId: 'chladniPatternSandNodal2DPlatesDiagram',
        experimentId: 'microwave_standing_wave_detector_node_antinode_spacing_measurement',
        contentKey: 'components'
    },
    {
        id: 'musicalAcoustics',
        label: 'Musical Acoustics',
        sectionNumber: 10,
        subTopic: 'stationaryWaves',
        specificItems: ['musicalAcoustics'],
        diagramId: 'harmonicSpectrumTimbreComparisonFluteViolinDiagram',
        experimentId: 'oscilloscope_musical_instrument_waveform_harmonic_content_comparison',
        contentKey: 'components'
    },
    {
        id: 'standingWavesIn2Dand3D',
        label: 'Standing Waves in 2D and 3D',
        sectionNumber: 11,
        subTopic: 'stationaryWaves',
        specificItems: ['standingWavesIn2Dand3D'],
        diagramId: 'rectangularMembrane2DModePatternDiagram',
        experimentId: 'chladni_plate_sand_pattern_2d_resonant_mode_visualisation',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications',
        sectionNumber: 12,
        subTopic: 'stationaryWaves',
        specificItems: ['applications'],
        diagramId: 'laserCavityStandingEMWaveMirrorResonatorDiagram',
        experimentId: 'microwave_oven_standing_wave_hotspot_chocolate_mapping',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'superpositionInterference',
        specificItems: ['foundations'],
        diagramId: 'constructiveDestructiveInterferencePathDifferenceConditionDiagram',
        experimentId: 'two_rope_pulses_superposition_constructive_destructive_observation',
        contentKey: 'components'
    },
    {
        id: 'youngDoubleSlit',
        label: "Young's Double-Slit Experiment",
        sectionNumber: 2,
        subTopic: 'superpositionInterference',
        specificItems: ['youngDoubleSlit'],
        diagramId: 'youngDoubleSlitFringePatternGeometricDerivationDiagram',
        experimentId: 'young_double_slit_laser_fringe_spacing_wavelength_measurement',
        contentKey: 'components'
    },
    {
        id: 'singleSlitDiffraction',
        label: 'Single-Slit Diffraction',
        sectionNumber: 3,
        subTopic: 'superpositionInterference',
        specificItems: ['singleSlitDiffraction'],
        diagramId: 'singleSlitDiffractionIntensityProfileCentralMaximumDiagram',
        experimentId: 'single_slit_width_variation_central_maximum_width_investigation',
        contentKey: 'components'
    },
    {
        id: 'diffractionGrating',
        label: 'Diffraction Grating',
        sectionNumber: 4,
        subTopic: 'superpositionInterference',
        specificItems: ['diffractionGrating'],
        diagramId: 'diffractionGratingPrincipalMaximaOrderAngleDiagram',
        experimentId: 'diffraction_grating_sodium_doublet_resolution_spectrometer_experiment',
        contentKey: 'components'
    },
    {
        id: 'thinFilmInterference',
        label: 'Thin-Film Interference',
        sectionNumber: 5,
        subTopic: 'superpositionInterference',
        specificItems: ['thinFilmInterference'],
        diagramId: 'thinFilmPhaseChangeReflectionOpticalPathDifferenceDiagram',
        experimentId: 'soap_film_colour_thickness_phase_change_interference_observation',
        contentKey: 'components'
    },
    {
        id: 'interferenceInOtherWaveTypes',
        label: 'Interference in Other Wave Types',
        sectionNumber: 6,
        subTopic: 'superpositionInterference',
        specificItems: ['interferenceInOtherWaveTypes'],
        diagramId: 'twoSpeakerSoundInterferenceConstructiveDestructiveRegionDiagram',
        experimentId: 'two_speaker_microwave_interference_path_difference_loud_quiet_zones',
        contentKey: 'components'
    },
    {
        id: 'phasorsAndAmplitudeAddition',
        label: 'Phasors and Amplitude Addition',
        sectionNumber: 7,
        subTopic: 'superpositionInterference',
        specificItems: ['phasorsAndAmplitudeAddition'],
        diagramId: 'phasorPolygonNSlitsResultantAmplitudeDiagram',
        experimentId: 'phasor_addition_simulation_two_source_resultant_intensity_verification',
        contentKey: 'components'
    },
    {
        id: 'beats',
        label: 'Beats',
        sectionNumber: 8,
        subTopic: 'superpositionInterference',
        specificItems: ['beats'],
        diagramId: 'beatPatternAmplitudeModulationTwoFrequencyDiagram',
        experimentId: 'two_tuning_forks_close_frequency_beat_rate_counting_experiment',
        contentKey: 'components'
    },
    {
        id: 'michelsonInterferometer',
        label: 'Michelson Interferometer',
        sectionNumber: 9,
        subTopic: 'superpositionInterference',
        specificItems: ['michelsonInterferometer'],
        diagramId: 'michelsonInterferometerBeamSplitterMirrorPathDiagram',
        experimentId: 'michelson_interferometer_fringe_counting_mirror_displacement_measurement',
        contentKey: 'components'
    },
    {
        id: 'braggDiffraction',
        label: 'Bragg Diffraction',
        sectionNumber: 10,
        subTopic: 'superpositionInterference',
        specificItems: ['braggDiffraction'],
        diagramId: 'braggLawCrystalPlaneXRayReflectionPathDifferenceDiagram',
        experimentId: 'optical_analogue_bragg_diffraction_visible_light_crystal_model',
        contentKey: 'components'
    },
    {
        id: 'interferenceInTechnology',
        label: 'Interference in Technology',
        sectionNumber: 11,
        subTopic: 'superpositionInterference',
        specificItems: ['interferenceInTechnology'],
        diagramId: 'noiseCancellingHeadphoneAntiphaseDestructiveInterferenceDiagram',
        experimentId: 'anti_reflection_coating_reflectance_measurement_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'experimentalSkillsAndAnalysis',
        label: 'Experimental Skills and Analysis',
        sectionNumber: 12,
        subTopic: 'superpositionInterference',
        specificItems: ['experimentalSkillsAndAnalysis'],
        diagramId: 'youngExperimentMeasurementFringeWidthSlitSeparationSetupDiagram',
        experimentId: 'multi_fringe_width_measurement_percentage_error_reduction_investigation',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'soundWaves',
        specificItems: ['foundations'],
        diagramId: 'soundWaveCompressionRarefactionPressureDisplacementDiagram',
        experimentId: 'bell_jar_vacuum_pump_sound_medium_requirement_demonstration',
        contentKey: 'components'
    },
    {
        id: 'wavePropertiesOfSound',
        label: 'Wave Properties of Sound',
        sectionNumber: 2,
        subTopic: 'soundWaves',
        specificItems: ['wavePropertiesOfSound'],
        diagramId: 'soundFrequencyAmplitudePitchLoudnessRelationshipDiagram',
        experimentId: 'oscilloscope_microphone_frequency_amplitude_pitch_loudness_investigation',
        contentKey: 'components'
    },
    {
        id: 'speedOfSound',
        label: 'Speed of Sound',
        sectionNumber: 3,
        subTopic: 'soundWaves',
        specificItems: ['speedOfSound'],
        diagramId: 'speedOfSoundTemperatureDependenceAdiabaticCorrectionDiagram',
        experimentId: 'two_microphone_oscilloscope_speed_of_sound_in_air_measurement',
        contentKey: 'components'
    },
    {
        id: 'intensityAndLoudness',
        label: 'Intensity and Loudness',
        sectionNumber: 4,
        subTopic: 'soundWaves',
        specificItems: ['intensityAndLoudness'],
        diagramId: 'decibelScaleIntensityLevelCommonSourcesTableDiagram',
        experimentId: 'sound_level_meter_inverse_square_law_distance_intensity_verification',
        contentKey: 'components'
    },
    {
        id: 'humanEar',
        label: 'The Human Ear',
        sectionNumber: 5,
        subTopic: 'soundWaves',
        specificItems: ['humanEar'],
        diagramId: 'humanEarAnatomyCochleaOssiclesLabelledCrossSectionDiagram',
        experimentId: 'audiogram_hearing_threshold_frequency_range_personal_test',
        contentKey: 'components'
    },
    {
        id: 'resonanceInSound',
        label: 'Resonance in Sound',
        sectionNumber: 6,
        subTopic: 'soundWaves',
        specificItems: ['resonanceInSound'],
        diagramId: 'openClosedPipeFundamentalHarmonicNodeAntiNodeComparisonDiagram',
        experimentId: 'resonance_tube_tuning_fork_first_second_resonance_speed_of_sound',
        contentKey: 'components'
    },
    {
        id: 'dopplerEffectForSound',
        label: 'Doppler Effect for Sound',
        sectionNumber: 7,
        subTopic: 'soundWaves',
        specificItems: ['dopplerEffectForSound'],
        diagramId: 'dopplerSoundWavefrontCompressionApproachingRecedingDiagram',
        experimentId: 'moving_buzzer_doppler_frequency_shift_datalogger_recording',
        contentKey: 'components'
    },
    {
        id: 'ultrasound',
        label: 'Ultrasound',
        sectionNumber: 8,
        subTopic: 'soundWaves',
        specificItems: ['ultrasound'],
        diagramId: 'ultrasoundAScanBScanAcousticImpedancePiezoelectricDiagram',
        experimentId: 'ultrasound_transducer_gel_coupling_echo_timing_depth_calculation',
        contentKey: 'components'
    },
    {
        id: 'infrasound',
        label: 'Infrasound',
        sectionNumber: 9,
        subTopic: 'soundWaves',
        specificItems: ['infrasound'],
        diagramId: 'infrasoundFrequencyRangeLongWavelengthLowAttenuationDiagram',
        experimentId: 'infrasound_sensor_low_frequency_vibration_detection_investigation',
        contentKey: 'components'
    },
    {
        id: 'acousticsAndRoomDesign',
        label: 'Acoustics and Room Design',
        sectionNumber: 10,
        subTopic: 'soundWaves',
        specificItems: ['acousticsAndRoomDesign'],
        diagramId: 'reverberationTimeSabineFormulaRoomVolumeAbsorptionDiagram',
        experimentId: 'clap_echo_reverberation_time_measurement_different_room_surfaces',
        contentKey: 'components'
    },
    {
        id: 'soundAndMusic',
        label: 'Sound and Music',
        sectionNumber: 11,
        subTopic: 'soundWaves',
        specificItems: ['soundAndMusic'],
        diagramId: 'fourierHarmonicSeriesTimbreWaveformComparisonDiagram',
        experimentId: 'oscilloscope_guitar_flute_same_note_waveform_harmonic_spectrum_comparison',
        contentKey: 'components'
    },
    {
        id: 'experimentalSkills',
        label: 'Experimental Skills',
        sectionNumber: 12,
        subTopic: 'soundWaves',
        specificItems: ['experimentalSkills'],
        diagramId: 'resonanceTubeExperimentSetupEndCorrectionMeasurementDiagram',
        experimentId: 'resonance_tube_end_correction_two_resonance_lengths_elimination',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'emSpectrumOptics',
        specificItems: ['foundations'],
        diagramId: 'emWaveMutuallyPerpendicularEBFieldPropagationDiagram',
        experimentId: 'maxwell_em_wave_properties_transverse_polarisation_demonstration',
        contentKey: 'components'
    },
    {
        id: 'electromagneticSpectrum',
        label: 'The Electromagnetic Spectrum',
        sectionNumber: 2,
        subTopic: 'emSpectrumOptics',
        specificItems: ['electromagneticSpectrum'],
        diagramId: 'emSpectrumFrequencyWavelengthPhotonEnergyBandsDiagram',
        experimentId: 'infrared_ultraviolet_detection_prism_dispersed_sunlight_thermometer',
        contentKey: 'components'
    },
    {
        id: 'geometricOptics_Reflection',
        label: 'Geometric Optics — Reflection',
        sectionNumber: 3,
        subTopic: 'emSpectrumOptics',
        specificItems: ['geometricOptics_Reflection'],
        diagramId: 'concaveMirrorRayDiagramFocalPointImageFormationDiagram',
        experimentId: 'concave_mirror_object_distance_image_distance_focal_length_verification',
        contentKey: 'components'
    },
    {
        id: 'geometricOptics_Refraction',
        label: 'Geometric Optics — Refraction',
        sectionNumber: 4,
        subTopic: 'emSpectrumOptics',
        specificItems: ['geometricOptics_Refraction'],
        diagramId: 'snellsLawAngleIncidenceRefractionRefractiveIndexDiagram',
        experimentId: 'glass_block_snells_law_refractive_index_angle_measurement',
        contentKey: 'components'
    },
    {
        id: 'dispersion',
        label: 'Dispersion',
        sectionNumber: 5,
        subTopic: 'emSpectrumOptics',
        specificItems: ['dispersion'],
        diagramId: 'prismWhiteLightDispersionVioletRedDeviationAngleDiagram',
        experimentId: 'glass_prism_white_light_spectrum_wavelength_deviation_angle_measurement',
        contentKey: 'components'
    },
    {
        id: 'lenses',
        label: 'Lenses',
        sectionNumber: 6,
        subTopic: 'emSpectrumOptics',
        specificItems: ['lenses'],
        diagramId: 'thinLensRayDiagramConvergingDivergingImageTypesDiagram',
        experimentId: 'converging_lens_object_image_distance_thin_lens_equation_verification',
        contentKey: 'components'
    },
    {
        id: 'opticalInstruments',
        label: 'Optical Instruments',
        sectionNumber: 7,
        subTopic: 'emSpectrumOptics',
        specificItems: ['opticalInstruments'],
        diagramId: 'compoundMicroscopeObjectiveEyepieceIntermediateImageDiagram',
        experimentId: 'compound_microscope_magnification_objective_eyepiece_measurement',
        contentKey: 'components'
    },
    {
        id: 'physicalOptics',
        label: 'Physical Optics',
        sectionNumber: 8,
        subTopic: 'emSpectrumOptics',
        specificItems: ['physicalOptics'],
        diagramId: 'rayleighCriterionAiryDiskCircularApertureResolutionDiagram',
        experimentId: 'double_slit_single_slit_diffraction_envelope_fringe_pattern_comparison',
        contentKey: 'components'
    },
    {
        id: 'polarisationOfLight',
        label: 'Polarisation of Light',
        sectionNumber: 9,
        subTopic: 'emSpectrumOptics',
        specificItems: ['polarisationOfLight'],
        diagramId: 'brewstersAngleReflectedPolarisedLightOrientationDiagram',
        experimentId: 'polaroid_filter_rotation_malus_law_transmitted_intensity_verification',
        contentKey: 'components'
    },
    {
        id: 'lasers',
        label: 'Lasers',
        sectionNumber: 10,
        subTopic: 'emSpectrumOptics',
        specificItems: ['lasers'],
        diagramId: 'laserStimulatedEmissionPopulationInversionCavityDiagram',
        experimentId: 'laser_beam_divergence_coherence_monochromaticity_comparison_lamp',
        contentKey: 'components'
    },
    {
        id: 'fibreOptics',
        label: 'Fibre Optics',
        sectionNumber: 11,
        subTopic: 'emSpectrumOptics',
        specificItems: ['fibreOptics'],
        diagramId: 'opticalFibreCoreCladdingTotalInternalReflectionCriticalAngleDiagram',
        experimentId: 'optical_fibre_critical_angle_cladding_core_refractive_index_experiment',
        contentKey: 'components'
    },
    {
        id: 'photometryAndRadiometry',
        label: 'Photometry and Radiometry',
        sectionNumber: 12,
        subTopic: 'emSpectrumOptics',
        specificItems: ['photometryAndRadiometry'],
        diagramId: 'luminousFluxIlluminanceLuxInverseSquareLawDiagram',
        experimentId: 'lux_meter_inverse_square_law_illuminance_distance_verification',
        contentKey: 'components'
    },




    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'nuclearStructure',
        specificItems: ['foundations'],
        diagramId: 'atomicModelHistoricalProgressionDiagram',
        experimentId: 'rutherford_gold_foil_alpha_scattering_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'nucleonsAndIsotopes',
        label: 'Nucleons and Isotopes',
        sectionNumber: 2,
        subTopic: 'nuclearStructure',
        specificItems: ['nucleonsAndIsotopes'],
        diagramId: 'isotopesIsobarsIsotonesNuclideComparisonChart',
        experimentId: 'relative_atomic_mass_isotope_abundance_weighted_average_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearSizeAndDensity',
        label: 'Nuclear Size and Density',
        sectionNumber: 3,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearSizeAndDensity'],
        diagramId: 'nuclearRadiusMassNumberCubicRootScalingGraph',
        experimentId: 'nuclear_density_scale_model_comparison_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearForces',
        label: 'Nuclear Forces',
        sectionNumber: 4,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearForces'],
        diagramId: 'strongWeakElectromagneticGravityForceRangeStrengthComparisonChart',
        experimentId: 'nuclear_force_range_versus_coulomb_repulsion_graphical_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'bindingEnergy',
        label: 'Binding Energy',
        sectionNumber: 5,
        subTopic: 'nuclearStructure',
        specificItems: ['bindingEnergy'],
        diagramId: 'bindingEnergyPerNucleonVsMassNumberCurve',
        experimentId: 'mass_defect_binding_energy_calculation_from_nuclide_data_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearStability',
        label: 'Nuclear Stability',
        sectionNumber: 6,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearStability'],
        diagramId: 'chartOfNuclidesNeutronProtonStabilityValleyDiagram',
        experimentId: 'neutron_to_proton_ratio_stability_band_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearModels',
        label: 'Nuclear Models',
        sectionNumber: 7,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearModels'],
        diagramId: 'liquidDropModelVsShellModelComparisonDiagram',
        experimentId: 'magic_number_nuclear_shell_filling_analogy_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearEnergyLevels',
        label: 'Nuclear Energy Levels',
        sectionNumber: 8,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearEnergyLevels'],
        diagramId: 'nuclearGroundStateExcitedStateGammaTransitionLevelDiagram',
        experimentId: 'cobalt_60_gamma_decay_energy_level_sequence_tracing_experiment',
        contentKey: 'components'
    },
    {
        id: 'quarksAndNucleonStructure',
        label: 'Quarks and Nucleon Structure',
        sectionNumber: 9,
        subTopic: 'nuclearStructure',
        specificItems: ['quarksAndNucleonStructure'],
        diagramId: 'protonNeutronUudUddQuarkCompositionDiagram',
        experimentId: 'quark_charge_addition_proton_neutron_charge_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearMeasurementsAndUnits',
        label: 'Nuclear Measurements and Units',
        sectionNumber: 10,
        subTopic: 'nuclearStructure',
        specificItems: ['nuclearMeasurementsAndUnits'],
        diagramId: 'energyUnitConversionJoulesToMeVToAtomicMassUnitChart',
        experimentId: 'unit_conversion_nuclear_energy_scales_practice_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'radioactivity',
        specificItems: ['foundations'],
        diagramId: 'becquerелDiscoveryBackgroundRadiationSourcesInfographic',
        experimentId: 'background_radiation_count_rate_measurement_variation_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfRadiation',
        label: 'Types of Radiation',
        sectionNumber: 2,
        subTopic: 'radioactivity',
        specificItems: ['typesOfRadiation'],
        diagramId: 'alphaBetaGammaPenetrationAbsorbersComparisonDiagram',
        experimentId: 'alpha_beta_gamma_penetration_paper_aluminium_lead_absorption_experiment',
        contentKey: 'components'
    },
    {
        id: 'radioactiveDecayLaw',
        label: 'Radioactive Decay Law',
        sectionNumber: 3,
        subTopic: 'radioactivity',
        specificItems: ['radioactiveDecayLaw'],
        diagramId: 'exponentialDecayCurveNVsTimeWithHalfLifeMarkings',
        experimentId: 'dice_analogy_radioactive_decay_half_life_statistical_experiment',
        contentKey: 'components'
    },
    {
        id: 'decaySeries',
        label: 'Decay Series',
        sectionNumber: 4,
        subTopic: 'radioactivity',
        specificItems: ['decaySeries'],
        diagramId: 'uranium238DecaySeriesNZChartPathDiagram',
        experimentId: 'decay_chain_secular_equilibrium_activity_ratio_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'detectionOfRadiation',
        label: 'Detection of Radiation',
        sectionNumber: 5,
        subTopic: 'radioactivity',
        specificItems: ['detectionOfRadiation'],
        diagramId: 'geigerMullerTubeInternalStructureCrossSectionDiagram',
        experimentId: 'geiger_mueller_tube_count_rate_distance_inverse_square_law_experiment',
        contentKey: 'components'
    },
    {
        id: 'biologicalEffects',
        label: 'Biological Effects',
        sectionNumber: 6,
        subTopic: 'radioactivity',
        specificItems: ['biologicalEffects'],
        diagramId: 'deterministicVsStochasticRadiationDoseEffectCurvesDiagram',
        experimentId: 'radiation_dose_effective_dose_sievert_calculation_case_study_experiment',
        contentKey: 'components'
    },
    {
        id: 'radiocarbonDating',
        label: 'Radiocarbon Dating',
        sectionNumber: 7,
        subTopic: 'radioactivity',
        specificItems: ['radiocarbonDating'],
        diagramId: 'carbon14AtmosphericProductionDecayEquilibriumCycleDiagram',
        experimentId: 'carbon_14_decay_age_calculation_from_residual_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'medicalApplications',
        label: 'Medical Applications',
        sectionNumber: 8,
        subTopic: 'radioactivity',
        specificItems: ['medicalApplications'],
        diagramId: 'petScanTechnetiumSpectGammaCameraImagingDiagram',
        experimentId: 'ideal_medical_tracer_half_life_energy_selection_criteria_experiment',
        contentKey: 'components'
    },
    {
        id: 'industrialApplications',
        label: 'Industrial Applications',
        sectionNumber: 9,
        subTopic: 'radioactivity',
        specificItems: ['industrialApplications'],
        diagramId: 'betaThicknessGaugingSourceDetectorProductionLineDiagram',
        experimentId: 'americium_241_smoke_detector_ionisation_chamber_mechanism_experiment',
        contentKey: 'components'
    },
    {
        id: 'radioactiveWaste',
        label: 'Radioactive Waste',
        sectionNumber: 10,
        subTopic: 'radioactivity',
        specificItems: ['radioactiveWaste'],
        diagramId: 'lowIntermediateHighLevelWasteClassificationMultiBarrierDisposalDiagram',
        experimentId: 'radioactive_waste_classification_half_life_hazard_timeline_analysis_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'nuclearReactions',
        specificItems: ['foundations'],
        diagramId: 'nuclearReactionGeneralFormXAYBQValueConservationDiagram',
        experimentId: 'q_value_mass_difference_calculation_exothermic_endothermic_reaction_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfNuclearReactions',
        label: 'Types of Nuclear Reactions',
        sectionNumber: 2,
        subTopic: 'nuclearReactions',
        specificItems: ['typesOfNuclearReactions'],
        diagramId: 'elasticInelasticCaptureSpallationReactionTypeClassificationChart',
        experimentId: 'nuclear_reaction_type_identification_conservation_law_checking_experiment',
        contentKey: 'components'
    },
    {
        id: 'crossSectionAndProbability',
        label: 'Cross-Section and Probability',
        sectionNumber: 3,
        subTopic: 'nuclearReactions',
        specificItems: ['crossSectionAndProbability'],
        diagramId: 'reactionCrossSectionEnergyDependenceResonancePeaksDiagram',
        experimentId: 'geometric_cross_section_versus_reaction_cross_section_barn_scale_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'compoundNucleusModel',
        label: 'Compound Nucleus Model',
        sectionNumber: 4,
        subTopic: 'nuclearReactions',
        specificItems: ['compoundNucleusModel'],
        diagramId: 'bohrCompoundNucleusTwoStageFormationDecayDiagram',
        experimentId: 'compound_nucleus_independence_hypothesis_same_product_different_projectile_experiment',
        contentKey: 'components'
    },
    {
        id: 'directReactions',
        label: 'Direct Reactions',
        sectionNumber: 5,
        subTopic: 'nuclearReactions',
        specificItems: ['directReactions'],
        diagramId: 'strippingPickupReactionDeuteronProtonTransferAngularDistributionDiagram',
        experimentId: 'calcium_40_deuteron_proton_stripping_angular_distribution_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'neutronPhysics',
        label: 'Neutron Physics',
        sectionNumber: 6,
        subTopic: 'nuclearReactions',
        specificItems: ['neutronPhysics'],
        diagramId: 'neutronEnergyClassificationThermalEpithermalFastSpectrumDiagram',
        experimentId: 'neutron_moderation_elastic_collision_energy_loss_mass_dependence_experiment',
        contentKey: 'components'
    },
    {
        id: 'artificialTransmutation',
        label: 'Artificial Transmutation',
        sectionNumber: 7,
        subTopic: 'nuclearReactions',
        specificItems: ['artificialTransmutation'],
        diagramId: 'rutherfordFirstTransmutationNitrogenAlphaOxygenProtonReactionDiagram',
        experimentId: 'transuranium_element_production_neutron_capture_beta_decay_chain_tracing_experiment',
        contentKey: 'components'
    },
    {
        id: 'stellarNucleosynthesis',
        label: 'Stellar Nucleosynthesis',
        sectionNumber: 8,
        subTopic: 'nuclearReactions',
        specificItems: ['stellarNucleosynthesis'],
        diagramId: 'stellarNucleosynthesisProtonProtonChainCNOCycleTripleAlphaPathwayDiagram',
        experimentId: 'cosmic_elemental_abundance_binding_energy_curve_nucleosynthesis_pathway_experiment',
        contentKey: 'components'
    },
    {
        id: 'acceleratorsAndResearch',
        label: 'Accelerators and Research',
        sectionNumber: 9,
        subTopic: 'nuclearReactions',
        specificItems: ['acceleratorsAndResearch'],
        diagramId: 'cyclotronSynchrotronLinacAcceleratorTypesComparisonDiagram',
        experimentId: 'cyclotron_frequency_magnetic_field_particle_mass_charge_relationship_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyAndMomentum',
        label: 'Energy and Momentum',
        sectionNumber: 10,
        subTopic: 'nuclearReactions',
        specificItems: ['energyAndMomentum'],
        diagramId: 'labFrameVersusCentreOfMassFrameKinematicReactionDiagram',
        experimentId: 'threshold_energy_endothermic_reaction_lab_versus_cm_frame_calculation_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'fissionFusion',
        specificItems: ['foundations'],
        diagramId: 'bindingEnergyPerNucleonFissionFusionEnergyReleaseAnnotatedCurve',
        experimentId: 'mass_energy_equivalence_fission_fusion_energy_per_kilogram_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'fissionFundamentals',
        label: 'Fission Fundamentals',
        sectionNumber: 2,
        subTopic: 'fissionFusion',
        specificItems: ['fissionFundamentals'],
        diagramId: 'liquidDropFissionMechanismSaddlePointDeformationSequenceDiagram',
        experimentId: 'uranium_235_fission_product_mass_distribution_bimodal_histogram_experiment',
        contentKey: 'components'
    },
    {
        id: 'chainReactions',
        label: 'Chain Reactions',
        sectionNumber: 3,
        subTopic: 'fissionFusion',
        specificItems: ['chainReactions'],
        diagramId: 'subcriticalCriticalSupercriticalChainReactionNeutronMultiplicationDiagram',
        experimentId: 'neutron_multiplication_k_factor_delayed_neutron_reactor_control_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearReactors',
        label: 'Nuclear Reactors',
        sectionNumber: 4,
        subTopic: 'fissionFusion',
        specificItems: ['nuclearReactors'],
        diagramId: 'pressurizedWaterReactorCoreCoolantSteamGeneratorSchematicDiagram',
        experimentId: 'reactor_component_function_fuel_moderator_coolant_control_rod_identification_experiment',
        contentKey: 'components'
    },
    {
        id: 'nuclearWeaponsFission',
        label: 'Nuclear Weapons — Fission',
        sectionNumber: 5,
        subTopic: 'fissionFusion',
        specificItems: ['nuclearWeaponsFission'],
        diagramId: 'gunTypeVsImplosionFissionWeaponDesignSchematicDiagram',
        experimentId: 'critical_mass_geometry_reflector_density_factor_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'fusionFundamentals',
        label: 'Fusion Fundamentals',
        sectionNumber: 6,
        subTopic: 'fissionFusion',
        specificItems: ['fusionFundamentals'],
        diagramId: 'coulombBarrierQuantumTunnellingGamowPeakFusionCrossSectionDiagram',
        experimentId: 'deuterium_tritium_helium_neutron_q_value_fusion_energy_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'fusionReactorConcepts',
        label: 'Fusion Reactor Concepts',
        sectionNumber: 7,
        subTopic: 'fissionFusion',
        specificItems: ['fusionReactorConcepts'],
        diagramId: 'tokamakToroidalPoloidalMagneticFieldPlasmaConfinementCrossSectionDiagram',
        experimentId: 'lawson_criterion_density_confinement_time_temperature_triple_product_experiment',
        contentKey: 'components'
    },
    {
        id: 'thermonuclearWeapons',
        label: 'Thermonuclear Weapons',
        sectionNumber: 8,
        subTopic: 'fissionFusion',
        specificItems: ['thermonuclearWeapons'],
        diagramId: 'tellerUlamFissionPrimaryFusionSecondaryTwoStageThermonuclearDiagram',
        experimentId: 'yield_scaling_fission_fusion_fission_weapon_stage_energy_contribution_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'fissionVsFusionComparison',
        label: 'Fission vs Fusion Comparison',
        sectionNumber: 9,
        subTopic: 'fissionFusion',
        specificItems: ['fissionVsFusionComparison'],
        diagramId: 'fissionVsFusionFuelWasteProliferationRiskSafetyComparisonTable',
        experimentId: 'fission_versus_fusion_energy_per_kilogram_waste_lifetime_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'globalEnergyAndPolicy',
        label: 'Global Energy and Policy',
        sectionNumber: 10,
        subTopic: 'fissionFusion',
        specificItems: ['globalEnergyAndPolicy'],
        diagramId: 'nuclearElectricityCarbonFootprintLifecycleComparisonCoalGasWindDiagram',
        experimentId: 'nuclear_versus_renewable_carbon_intensity_levelised_cost_policy_analysis_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'particlePhysics',
        specificItems: ['foundations'],
        diagramId: 'particlePhysicsHistoricalTimelineDiscoveryMilestoneDiagram',
        experimentId: 'particle_discovery_timeline_chronological_ordering_significance_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'standardModel',
        label: 'The Standard Model',
        sectionNumber: 2,
        subTopic: 'particlePhysics',
        specificItems: ['standardModel'],
        diagramId: 'standardModelThreeGenerationsFermionBosonPeriodicTableDiagram',
        experimentId: 'standard_model_particle_classification_fermion_boson_generation_sorting_experiment',
        contentKey: 'components'
    },
    {
        id: 'quarks',
        label: 'Quarks',
        sectionNumber: 3,
        subTopic: 'particlePhysics',
        specificItems: ['quarks'],
        diagramId: 'quarkColourChargeConfinementFluxTubeBaryonMesonFormationDiagram',
        experimentId: 'quark_charge_combination_hadron_charge_verification_proton_neutron_pion_experiment',
        contentKey: 'components'
    },
    {
        id: 'leptons',
        label: 'Leptons',
        sectionNumber: 4,
        subTopic: 'particlePhysics',
        specificItems: ['leptons'],
        diagramId: 'leptonFamilyChargedLeptonNeutrinoMassChargeGenerationDiagram',
        experimentId: 'muon_cosmic_ray_time_dilation_relativistic_flux_sea_level_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'gaugeBoson',
        label: 'Force Carriers (Gauge Bosons)',
        sectionNumber: 5,
        subTopic: 'particlePhysics',
        specificItems: ['gaugeBoson'],
        diagramId: 'photonWZGluonHiggsGaugeBosonForceRangeMassSpinComparisonChart',
        experimentId: 'virtual_particle_exchange_force_range_mass_uncertainty_principle_analysis_experiment',
        contentKey: 'components'
    },
    {
        id: 'fundamentalForces',
        label: 'Fundamental Forces',
        sectionNumber: 6,
        subTopic: 'particlePhysics',
        specificItems: ['fundamentalForces'],
        diagramId: 'fourFundamentalForcesStrengthRangeMediatorUnificationEnergyScaleDiagram',
        experimentId: 'running_coupling_constant_energy_dependence_electroweak_unification_scale_experiment',
        contentKey: 'components'
    },
    {
        id: 'conservationLaws',
        label: 'Conservation Laws',
        sectionNumber: 7,
        subTopic: 'particlePhysics',
        specificItems: ['conservationLaws'],
        diagramId: 'absoluteVsPartialConservationLawForceApplicabilityComparisonTable',
        experimentId: 'particle_reaction_conservation_law_charge_baryon_lepton_strangeness_checking_experiment',
        contentKey: 'components'
    },
    {
        id: 'feynmanDiagrams',
        label: 'Feynman Diagrams',
        sectionNumber: 8,
        subTopic: 'particlePhysics',
        specificItems: ['feynmanDiagrams'],
        diagramId: 'feynmanDiagramBetaDecayElectronScatteringPairAnnihilationVertexDiagram',
        experimentId: 'feynman_diagram_drawing_beta_decay_electron_scattering_conservation_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'antimatter',
        label: 'Antimatter',
        sectionNumber: 9,
        subTopic: 'particlePhysics',
        specificItems: ['antimatter'],
        diagramId: 'particleAntimatterPairProductionAnnihilationTwoPhotonDiagram',
        experimentId: 'positron_annihilation_511_kev_gamma_pair_pet_scan_coincidence_detection_experiment',
        contentKey: 'components'
    },
    {
        id: 'beyondStandardModel',
        label: 'Beyond the Standard Model',
        sectionNumber: 10,
        subTopic: 'particlePhysics',
        specificItems: ['beyondStandardModel'],
        diagramId: 'supersymmetryDarkMatterCandidateGUTCouplingUnificationEnergyScaleDiagram',
        experimentId: 'standard_model_known_limitations_dark_matter_hierarchy_problem_case_study_experiment',
        contentKey: 'components'
    },






   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'chargeAndCurrent',
        specificItems: ['foundations'],
        diagramId: 'atomicStructureChargeOriginDiagram',
        experimentId: 'charging_by_friction_contact_induction_electroscope_experiment',
        contentKey: 'components'
    },
    {
        id: 'electricCurrent',
        label: 'Electric Current',
        sectionNumber: 2,
        subTopic: 'chargeAndCurrent',
        specificItems: ['electricCurrent'],
        diagramId: 'conventionalCurrentVsElectronFlowDiagram',
        experimentId: 'measuring_current_ammeter_series_connection_experiment',
        contentKey: 'components'
    },
    {
        id: 'driftVelocity',
        label: 'Drift Velocity',
        sectionNumber: 3,
        subTopic: 'chargeAndCurrent',
        specificItems: ['driftVelocity'],
        diagramId: 'driftVelocityCarrierSweptVolumeDiagram',
        experimentId: 'drift_velocity_calculation_copper_wire_different_gauges_experiment',
        contentKey: 'components'
    },
    {
        id: 'measurementOfCurrent',
        label: 'Measurement of Current',
        sectionNumber: 4,
        subTopic: 'chargeAndCurrent',
        specificItems: ['measurementOfCurrent'],
        diagramId: 'ammeterSeriesConnectionCircuitDiagram',
        experimentId: 'ammeter_placement_series_circuit_current_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'calculations',
        label: 'Charge and Current Calculations',
        sectionNumber: 5,
        subTopic: 'chargeAndCurrent',
        specificItems: ['calculations'],
        diagramId: 'chargeCurrentTimeTriangleFormulaDiagram',
        experimentId: 'charge_from_area_under_current_time_graph_experiment',
        contentKey: 'components'
    },
    {
        id: 'kirchhoffsCurrentLaw',
        label: "Kirchhoff's Current Law",
        sectionNumber: 6,
        subTopic: 'chargeAndCurrent',
        specificItems: ['kirchhoffsCurrentLaw'],
        diagramId: 'kclJunctionCurrentArrowsDiagram',
        experimentId: 'kcl_junction_currents_parallel_branches_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'currentTimeGraphs',
        label: 'Current–Time Graphs',
        sectionNumber: 7,
        subTopic: 'chargeAndCurrent',
        specificItems: ['currentTimeGraphs'],
        diagramId: 'currentTimeGraphAreaAsChargeDiagram',
        experimentId: 'current_time_graph_area_charge_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics',
        sectionNumber: 8,
        subTopic: 'chargeAndCurrent',
        specificItems: ['specialTopics'],
        diagramId: 'currentDensityVectorFieldCrossSectionDiagram',
        experimentId: 'current_density_comparison_different_conductor_cross_sections_experiment',
        contentKey: 'components'
    },
    {
        id: 'realWorldApplications',
        label: 'Real-World Applications',
        sectionNumber: 9,
        subTopic: 'chargeAndCurrent',
        specificItems: ['realWorldApplications'],
        diagramId: 'electroplatingElectrolysisCurrentMassDiagram',
        experimentId: 'copper_electroplating_mass_deposited_vs_charge_faradays_law_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['foundations'],
        diagramId: 'electricPotentialEnergyGravitationalAnalogyDiagram',
        experimentId: 'work_done_moving_charge_through_potential_difference_simulation_experiment',
        contentKey: 'components'
    },
    {
        id: 'potentialDifference',
        label: 'Potential Difference',
        sectionNumber: 2,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['potentialDifference'],
        diagramId: 'voltmeterParallelConnectionPotentialDividerDiagram',
        experimentId: 'voltmeter_parallel_connection_pd_across_components_experiment',
        contentKey: 'components'
    },
    {
        id: 'electromotiveForce',
        label: 'Electromotive Force (EMF)',
        sectionNumber: 3,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['electromotiveForce'],
        diagramId: 'emfVsTerminalVoltageBatteryCircuitDiagram',
        experimentId: 'open_circuit_vs_loaded_terminal_voltage_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'internalResistance',
        label: 'Internal Resistance',
        sectionNumber: 4,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['internalResistance'],
        diagramId: 'terminalVoltageVsCurrentVIGraphInternalResistanceDiagram',
        experimentId: 'emf_internal_resistance_vi_graph_battery_variable_load_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyAndPower',
        label: 'Energy and Power',
        sectionNumber: 5,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['energyAndPower'],
        diagramId: 'powerEnergyFormulaeSourceEfficiencyDiagram',
        experimentId: 'source_efficiency_internal_vs_external_power_dissipation_experiment',
        contentKey: 'components'
    },
    {
        id: 'kirchhoffsVoltageLaw',
        label: "Kirchhoff's Voltage Law",
        sectionNumber: 6,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['kirchhoffsVoltageLaw'],
        diagramId: 'kvlClosedLoopPotentialRisesDropsDiagram',
        experimentId: 'kvl_single_loop_sum_of_voltages_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialCases',
        label: 'Special Cases',
        sectionNumber: 7,
        subTopic: 'potentialDifferenceEMF',
        specificItems: ['specialCases'],
        diagramId: 'chargedParticleAccelerationThroughPotentialDifferenceDiagram',
        experimentId: 'electron_acceleration_voltage_speed_cathode_ray_tube_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'resistanceResistivity',
        specificItems: ['foundations'],
        diagramId: 'ohmsLawVIProportionalityGraphDiagram',
        experimentId: 'ohms_law_verification_fixed_resistor_varying_voltage_experiment',
        contentKey: 'components'
    },
    {
        id: 'IVCharacteristics',
        label: 'I–V Characteristics',
        sectionNumber: 2,
        subTopic: 'resistanceResistivity',
        specificItems: ['IVCharacteristics'],
        diagramId: 'ivCharacteristicsCurvesResistorLampDiodeDiagram',
        experimentId: 'iv_characteristics_resistor_lamp_diode_thermistor_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'factorsAffectingResistance',
        label: 'Factors Affecting Resistance',
        sectionNumber: 3,
        subTopic: 'resistanceResistivity',
        specificItems: ['factorsAffectingResistance'],
        diagramId: 'resistanceLengthAreaTemperatureMaterialFactorsDiagram',
        experimentId: 'resistance_vs_length_and_cross_section_nichrome_wire_experiment',
        contentKey: 'components'
    },
    {
        id: 'resistivity',
        label: 'Resistivity',
        sectionNumber: 4,
        subTopic: 'resistanceResistivity',
        specificItems: ['resistivity'],
        diagramId: 'resistivityGeometryDerivationCubeDiagram',
        experimentId: 'resistivity_measurement_micrometer_wire_length_ammeter_voltmeter_experiment',
        contentKey: 'components'
    },
    {
        id: 'temperatureDependence',
        label: 'Temperature Dependence of Resistance',
        sectionNumber: 5,
        subTopic: 'resistanceResistivity',
        specificItems: ['temperatureDependence'],
        diagramId: 'resistanceTemperatureGraphMetalSemiconductorSuperconductorDiagram',
        experimentId: 'resistance_vs_temperature_metal_wire_thermistor_ice_to_boiling_experiment',
        contentKey: 'components'
    },
    {
        id: 'combinationOfResistors',
        label: 'Combination of Resistors',
        sectionNumber: 6,
        subTopic: 'resistanceResistivity',
        specificItems: ['combinationOfResistors'],
        diagramId: 'seriesParallelResistorNetworkEquivalentDiagram',
        experimentId: 'series_parallel_resistor_combinations_equivalent_resistance_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'conductanceAndConductivity',
        label: 'Conductance and Conductivity',
        sectionNumber: 7,
        subTopic: 'resistanceResistivity',
        specificItems: ['conductanceAndConductivity'],
        diagramId: 'conductivityResistivityReciprocalRelationshipDiagram',
        experimentId: 'conductance_measurement_parallel_resistors_siemens_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'measuringResistance',
        label: 'Measuring Resistance',
        sectionNumber: 8,
        subTopic: 'resistanceResistivity',
        specificItems: ['measuringResistance'],
        diagramId: 'wheatstoneBalanceBridgeCircuitDiagram',
        experimentId: 'wheatstone_bridge_null_balance_unknown_resistance_experiment',
        contentKey: 'components'
    },



   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'dcCircuits',
        specificItems: ['foundations'],
        diagramId: 'circuitTopologyNodesBranchesLoopsDiagram',
        experimentId: 'circuit_element_identification_nodes_branches_loops_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'seriesCircuits',
        label: 'Series Circuits',
        sectionNumber: 2,
        subTopic: 'dcCircuits',
        specificItems: ['seriesCircuits'],
        diagramId: 'seriesCircuitCurrentVoltageSharingDiagram',
        experimentId: 'series_circuit_same_current_voltage_division_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'parallelCircuits',
        label: 'Parallel Circuits',
        sectionNumber: 3,
        subTopic: 'dcCircuits',
        specificItems: ['parallelCircuits'],
        diagramId: 'parallelCircuitCurrentDivisionBranchesDiagram',
        experimentId: 'parallel_circuit_same_voltage_current_sharing_branches_experiment',
        contentKey: 'components'
    },
    {
        id: 'kirchhoffsLaws',
        label: "Kirchhoff's Laws",
        sectionNumber: 4,
        subTopic: 'dcCircuits',
        specificItems: ['kirchhoffsLaws'],
        diagramId: 'kirchhoffKclKvlTwoLoopLabelledCircuitDiagram',
        experimentId: 'kcl_kvl_simultaneous_equations_multi_loop_circuit_experiment',
        contentKey: 'components'
    },
    {
        id: 'potentialDivider',
        label: 'Potential Divider Circuits',
        sectionNumber: 5,
        subTopic: 'dcCircuits',
        specificItems: ['potentialDivider'],
        diagramId: 'potentialDividerLoadedUnloadedOutputVoltageDiagram',
        experimentId: 'potential_divider_thermistor_ldr_sensor_output_voltage_experiment',
        contentKey: 'components'
    },
    {
        id: 'wheatstonebridge',
        label: 'Wheatstone Bridge',
        sectionNumber: 6,
        subTopic: 'dcCircuits',
        specificItems: ['wheatstonebridge'],
        diagramId: 'wheatstoneBridgeDiamondLayoutBalanceConditionDiagram',
        experimentId: 'wheatstone_bridge_balance_unknown_resistance_galvanometer_null_experiment',
        contentKey: 'components'
    },
    {
        id: 'meterEffects',
        label: 'Effects of Meter Resistance',
        sectionNumber: 7,
        subTopic: 'dcCircuits',
        specificItems: ['meterEffects'],
        diagramId: 'ammeterVoltmeterLoadingEffectCircuitDiagram',
        experimentId: 'meter_loading_effect_high_low_resistance_component_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'realBatteryCircuits',
        label: 'Circuits with Real Batteries',
        sectionNumber: 8,
        subTopic: 'dcCircuits',
        specificItems: ['realBatteryCircuits'],
        diagramId: 'maximumPowerTransferPvsRCurveDiagram',
        experimentId: 'maximum_power_transfer_varying_load_resistance_battery_internal_resistance_experiment',
        contentKey: 'components'
    },
    {
        id: 'circuitAnalysisMethods',
        label: 'Circuit Analysis Methods',
        sectionNumber: 9,
        subTopic: 'dcCircuits',
        specificItems: ['circuitAnalysisMethods'],
        diagramId: 'theveninNortonEquivalentCircuitTransformationDiagram',
        experimentId: 'thevenin_equivalent_circuit_open_circuit_voltage_short_circuit_current_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['foundations'],
        diagramId: 'workDoneByChargePotentialDifferenceEnergyDiagram',
        experimentId: 'work_done_by_charge_energy_transfer_circuit_joule_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'powerFormulae',
        label: 'Power Formulae',
        sectionNumber: 2,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['powerFormulae'],
        diagramId: 'powerFormulaTriangleIVRI2RV2RDiagram',
        experimentId: 'electrical_power_three_formulae_verification_resistor_circuit_experiment',
        contentKey: 'components'
    },
    {
        id: 'heatingEffect',
        label: 'Heating Effect of Current',
        sectionNumber: 3,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['heatingEffect'],
        diagramId: 'jouleHeatingElectronLatticeCollisionMechanismDiagram',
        experimentId: 'joule_heating_i2rt_temperature_rise_water_immersion_heater_experiment',
        contentKey: 'components'
    },
    {
        id: 'efficiency',
        label: 'Efficiency',
        sectionNumber: 4,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['efficiency'],
        diagramId: 'sankeyDiagramUsefulWastedEnergyFlowDiagram',
        experimentId: 'efficiency_comparison_led_vs_incandescent_lamp_light_heat_output_experiment',
        contentKey: 'components'
    },
    {
        id: 'domesticElectricalEnergy',
        label: 'Domestic Electrical Energy',
        sectionNumber: 5,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['domesticElectricalEnergy'],
        diagramId: 'kilowattHourElectricityMeterReadingCostDiagram',
        experimentId: 'household_appliance_power_rating_kWh_cost_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'powerTransmission',
        label: 'Power Transmission',
        sectionNumber: 6,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['powerTransmission'],
        diagramId: 'nationalGridStepUpStepDownTransformerVoltageDiagram',
        experimentId: 'transmission_line_loss_high_vs_low_voltage_model_transformer_experiment',
        contentKey: 'components'
    },
    {
        id: 'ACPower',
        label: 'AC Power',
        sectionNumber: 7,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['ACPower'],
        diagramId: 'acPeakRmsVoltageSinusoidalWaveformDiagram',
        experimentId: 'ac_rms_vs_peak_voltage_oscilloscope_equivalent_dc_heating_experiment',
        contentKey: 'components'
    },
    {
        id: 'energySourcesAndEnvironment',
        label: 'Energy Sources and Environment',
        sectionNumber: 8,
        subTopic: 'electricalPowerEnergy',
        specificItems: ['energySourcesAndEnvironment'],
        diagramId: 'renewableVsFossilFuelEfficiencyComparisonSankeyDiagram',
        experimentId: 'solar_cell_efficiency_light_intensity_vs_electrical_output_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'capacitance',
        specificItems: ['foundations'],
        diagramId: 'capacitorPlatesDielectricElectricFieldChargeSeparationDiagram',
        experimentId: 'capacitor_charging_mechanism_electroscope_plate_separation_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'capacitanceDefinition',
        label: 'Capacitance',
        sectionNumber: 2,
        subTopic: 'capacitance',
        specificItems: ['capacitanceDefinition'],
        diagramId: 'chargeVoltageQVGraphGradientAsCapacitanceDiagram',
        experimentId: 'capacitance_definition_charge_vs_voltage_coulombmeter_experiment',
        contentKey: 'components'
    },
    {
        id: 'parallelPlateCapacitor',
        label: 'Parallel-Plate Capacitor and Permittivity',
        sectionNumber: 3,
        subTopic: 'capacitance',
        specificItems: ['parallelPlateCapacitor'],
        diagramId: 'parallelPlateCapacitorPermittivityAreaSeparationDiagram',
        experimentId: 'capacitance_vs_plate_separation_and_area_parallel_plate_capacitor_experiment',
        contentKey: 'components'
    },
    {
        id: 'energyStored',
        label: 'Energy Stored in a Capacitor',
        sectionNumber: 4,
        subTopic: 'capacitance',
        specificItems: ['energyStored'],
        diagramId: 'capacitorEnergyTriangleAreaUnderQVGraphDiagram',
        experimentId: 'capacitor_energy_stored_flash_discharge_through_resistor_thermal_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'combinationsOfCapacitors',
        label: 'Combinations of Capacitors',
        sectionNumber: 5,
        subTopic: 'capacitance',
        specificItems: ['combinationsOfCapacitors'],
        diagramId: 'seriesParallelCapacitorCombinationEquivalentDiagram',
        experimentId: 'series_parallel_capacitor_combinations_equivalent_capacitance_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'chargingAndDischarging',
        label: 'Charging and Discharging (RC Circuits)',
        sectionNumber: 6,
        subTopic: 'capacitance',
        specificItems: ['chargingAndDischarging'],
        diagramId: 'rcCircuitChargingDischargingExponentialCurveTimeConstantDiagram',
        experimentId: 'rc_capacitor_charge_discharge_voltage_time_constant_datalogger_experiment',
        contentKey: 'components'
    },
    {
        id: 'graphsAndInterpretation',
        label: 'Graphs and Their Interpretation',
        sectionNumber: 7,
        subTopic: 'capacitance',
        specificItems: ['graphsAndInterpretation'],
        diagramId: 'lnVvsTimeLinearGraphGradientTimeConstantDiagram',
        experimentId: 'ln_voltage_vs_time_linearisation_rc_discharge_time_constant_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications of Capacitors',
        sectionNumber: 8,
        subTopic: 'capacitance',
        specificItems: ['applications'],
        diagramId: 'capacitorApplicationsFlashSmoothingTimingFilterDiagram',
        experimentId: 'capacitor_smoothing_rectified_ac_ripple_reduction_oscilloscope_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'reflection',
        specificItems: ['foundations'],
        diagramId: 'incidentReflectedRayNormalLabelledDiagram',
        experimentId: 'specular_vs_diffuse_reflection_surface_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'lawsOfReflection',
        label: 'Laws of Reflection',
        sectionNumber: 2,
        subTopic: 'reflection',
        specificItems: ['lawsOfReflection'],
        diagramId: 'angleOfIncidenceEqualsAngleOfReflectionProofDiagram',
        experimentId: 'laws_of_reflection_protractor_plane_mirror_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'planeMirrors',
        label: 'Plane Mirrors',
        sectionNumber: 3,
        subTopic: 'reflection',
        specificItems: ['planeMirrors'],
        diagramId: 'planeMirrorVirtualImageLocationRayDiagram',
        experimentId: 'plane_mirror_image_distance_object_distance_pins_experiment',
        contentKey: 'components'
    },
    {
        id: 'concaveMirrors',
        label: 'Concave Mirrors',
        sectionNumber: 4,
        subTopic: 'reflection',
        specificItems: ['concaveMirrors'],
        diagramId: 'concaveMirrorFocalPointCentreOfCurvatureRayDiagram',
        experimentId: 'concave_mirror_focal_length_image_position_object_distance_experiment',
        contentKey: 'components'
    },
    {
        id: 'convexMirrors',
        label: 'Convex Mirrors',
        sectionNumber: 5,
        subTopic: 'reflection',
        specificItems: ['convexMirrors'],
        diagramId: 'convexMirrorVirtualDiminishedImageFieldOfViewDiagram',
        experimentId: 'convex_mirror_virtual_image_location_diverging_rays_experiment',
        contentKey: 'components'
    },
    {
        id: 'totalInternalReflection',
        label: 'Total Internal Reflection',
        sectionNumber: 6,
        subTopic: 'reflection',
        specificItems: ['totalInternalReflection'],
        diagramId: 'criticalAngleTotalInternalReflectionGlassAirDiagram',
        experimentId: 'critical_angle_semicircular_glass_block_laser_experiment',
        contentKey: 'components'
    },
    {
        id: 'rayDiagrams',
        label: 'Ray Diagrams',
        sectionNumber: 7,
        subTopic: 'reflection',
        specificItems: ['rayDiagrams'],
        diagramId: 'threeStandardRaysMirrorConstructionStepDiagram',
        experimentId: 'ray_diagram_construction_scale_drawing_mirror_formula_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'aberrations',
        label: 'Aberrations in Mirrors',
        sectionNumber: 8,
        subTopic: 'reflection',
        specificItems: ['aberrations'],
        diagramId: 'sphericalAberrationParaxialMarginalRayFocusDiagram',
        experimentId: 'spherical_vs_parabolic_mirror_focus_quality_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'opticalInstruments',
        label: 'Optical Instruments Using Reflection',
        sectionNumber: 9,
        subTopic: 'reflection',
        specificItems: ['opticalInstruments'],
        diagramId: 'newtonianReflectingTelescopeMirrorLayoutDiagram',
        experimentId: 'periscope_construction_two_plane_mirrors_45_degree_experiment',
        contentKey: 'components'
    },
    {
        id: 'reflectionAndColour',
        label: 'Reflection and Colour',
        sectionNumber: 10,
        subTopic: 'reflection',
        specificItems: ['reflectionAndColour'],
        diagramId: 'selectiveReflectionObjectColourAbsorptionSpectrumDiagram',
        experimentId: 'coloured_filters_and_object_colour_selective_reflection_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'refraction',
        specificItems: ['foundations'],
        diagramId: 'refractionBendingTowardNormalAirGlassBoundaryDiagram',
        experimentId: 'coin_in_bowl_water_apparent_position_shift_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'refractiveIndex',
        label: 'Refractive Index',
        sectionNumber: 2,
        subTopic: 'refraction',
        specificItems: ['refractiveIndex'],
        diagramId: 'refractiveIndexSpeedOfLightMediumComparisonChart',
        experimentId: 'measuring_refractive_index_sin_theta_graph_glass_block_experiment',
        contentKey: 'components'
    },
    {
        id: 'snellsLaw',
        label: "Snell's Law",
        sectionNumber: 3,
        subTopic: 'refraction',
        specificItems: ['snellsLaw'],
        diagramId: 'snellsLawSinRatioAngleBoundaryProofDiagram',
        experimentId: 'snells_law_rectangular_glass_block_multiple_angles_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'totalInternalReflection',
        label: 'Total Internal Reflection',
        sectionNumber: 4,
        subTopic: 'refraction',
        specificItems: ['totalInternalReflection'],
        diagramId: 'opticalFibreCoreCladdingTotalInternalReflectionPathDiagram',
        experimentId: 'optical_fibre_light_guiding_water_stream_total_internal_reflection_experiment',
        contentKey: 'components'
    },
    {
        id: 'realAndApparentDepth',
        label: 'Real and Apparent Depth',
        sectionNumber: 5,
        subTopic: 'refraction',
        specificItems: ['realAndApparentDepth'],
        diagramId: 'realApparentDepthObserverRayTracingPoolDiagram',
        experimentId: 'real_apparent_depth_travelling_microscope_glass_block_experiment',
        contentKey: 'components'
    },
    {
        id: 'refractionThroughPrisms',
        label: 'Refraction Through Prisms',
        sectionNumber: 6,
        subTopic: 'refraction',
        specificItems: ['refractionThroughPrisms'],
        diagramId: 'prismMinimumDeviationSymmetricRayPathDiagram',
        experimentId: 'prism_minimum_deviation_spectrometer_refractive_index_experiment',
        contentKey: 'components'
    },
    {
        id: 'atmosphericRefraction',
        label: 'Atmospheric Refraction',
        sectionNumber: 7,
        subTopic: 'refraction',
        specificItems: ['atmosphericRefraction'],
        diagramId: 'atmosphericLayersGradualRayBendingSunrisePositionDiagram',
        experimentId: 'mirage_simulation_hot_surface_temperature_gradient_refraction_experiment',
        contentKey: 'components'
    },
    {
        id: 'refractionAndWavelength',
        label: 'Refraction and Wavelength',
        sectionNumber: 8,
        subTopic: 'refraction',
        specificItems: ['refractionAndWavelength'],
        diagramId: 'frequencyWavelengthSpeedChangeBoundaryComparisonDiagram',
        experimentId: 'wavelength_change_refraction_ripple_tank_shallow_deep_water_experiment',
        contentKey: 'components'
    },
    {
        id: 'eyeAndRefraction',
        label: 'The Eye and Refraction',
        sectionNumber: 9,
        subTopic: 'refraction',
        specificItems: ['eyeAndRefraction'],
        diagramId: 'myopiaHyperopiaCornetingLensRayDiagramCorrections',
        experimentId: 'modelling_eye_defects_convex_concave_lens_correction_experiment',
        contentKey: 'components'
    },
    {
        id: 'laboratoryTechniques',
        label: 'Laboratory Techniques',
        sectionNumber: 10,
        subTopic: 'refraction',
        specificItems: ['laboratoryTechniques'],
        diagramId: 'glassBlockExperimentTracingPinsNormalIncidentRefractedRaySetupDiagram',
        experimentId: 'refractive_index_glass_block_pins_tracing_method_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'lenses',
        specificItems: ['foundations'],
        diagramId: 'convexConcaveLensShapeFocalPointPrincipalAxisLabelledDiagram',
        experimentId: 'converging_diverging_lens_parallel_ray_focus_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'thinLensFormula',
        label: 'Thin Lens Formula',
        sectionNumber: 2,
        subTopic: 'lenses',
        specificItems: ['thinLensFormula'],
        diagramId: 'thinLensFormulaSignConventionObjectImageDistanceDiagram',
        experimentId: 'thin_lens_formula_verification_object_image_distance_screen_experiment',
        contentKey: 'components'
    },
    {
        id: 'magnification',
        label: 'Magnification',
        sectionNumber: 3,
        subTopic: 'lenses',
        specificItems: ['magnification'],
        diagramId: 'linearMagnificationImageHeightObjectHeightRatioDiagram',
        experimentId: 'measuring_linear_magnification_image_size_object_size_lens_experiment',
        contentKey: 'components'
    },
    {
        id: 'rayDiagramsForLenses',
        label: 'Ray Diagrams for Lenses',
        sectionNumber: 4,
        subTopic: 'lenses',
        specificItems: ['rayDiagramsForLenses'],
        diagramId: 'threeStandardRaysConvexLensAllObjectPositionsImageTableDiagram',
        experimentId: 'ray_diagram_construction_convex_lens_five_object_positions_experiment',
        contentKey: 'components'
    },
    {
        id: 'powerOfALens',
        label: 'Power of a Lens',
        sectionNumber: 5,
        subTopic: 'lenses',
        specificItems: ['powerOfALens'],
        diagramId: 'lensesInContactCombinedPowerDioptresAdditionDiagram',
        experimentId: 'measuring_lens_power_focal_length_dioptre_calculation_experiment',
        contentKey: 'components'
    },
    {
        id: 'aberrations',
        label: 'Aberrations in Lenses',
        sectionNumber: 6,
        subTopic: 'lenses',
        specificItems: ['aberrations'],
        diagramId: 'chromaticAberrationAchromaticDoubletCrownFlintGlassDiagram',
        experimentId: 'chromatic_aberration_white_light_convex_lens_coloured_fringe_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'opticalInstruments',
        label: 'Optical Instruments',
        sectionNumber: 7,
        subTopic: 'lenses',
        specificItems: ['opticalInstruments'],
        diagramId: 'compoundMicroscopeObjectiveEyepieceMagnificationRayPathDiagram',
        experimentId: 'compound_microscope_construction_objective_eyepiece_magnification_experiment',
        contentKey: 'components'
    },
    {
        id: 'lensSystems',
        label: 'Lens Systems',
        sectionNumber: 8,
        subTopic: 'lenses',
        specificItems: ['lensSystems'],
        diagramId: 'twoLensSeparatedSystemIntermediateImageRayTracingDiagram',
        experimentId: 'two_lens_system_intermediate_image_location_screen_experiment',
        contentKey: 'components'
    },
    {
        id: 'specialTopics',
        label: 'Special Topics',
        sectionNumber: 9,
        subTopic: 'lenses',
        specificItems: ['specialTopics'],
        diagramId: 'fresnelLensConcentriRingsEquivalentConvexLensComparisonDiagram',
        experimentId: 'fresnel_lens_focal_length_comparison_conventional_lens_experiment',
        contentKey: 'components'
    },
    {
        id: 'experimentalTechniques',
        label: 'Experimental Techniques',
        sectionNumber: 10,
        subTopic: 'lenses',
        specificItems: ['experimentalTechniques'],
        diagramId: 'besselMethodDisplacementTwoPositionsFocalLengthSetupDiagram',
        experimentId: 'bessel_displacement_method_focal_length_fixed_object_screen_distance_experiment',
        contentKey: 'components'
    },



    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'waveOptics',
        specificItems: ['foundations'],
        diagramId: 'huygensWaveletSecondarySourcesNewWavefrontConstructionDiagram',
        experimentId: 'ripple_tank_wavefront_diffraction_superposition_observation_experiment',
        contentKey: 'components'
    },
    {
        id: 'interference',
        label: 'Interference',
        sectionNumber: 2,
        subTopic: 'waveOptics',
        specificItems: ['interference'],
        diagramId: 'youngDoubleSlit PathDifferenceConstructiveDestructiveFringeDiagram',
        experimentId: 'youngs_double_slit_fringe_spacing_wavelength_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'diffraction',
        label: 'Diffraction',
        sectionNumber: 3,
        subTopic: 'waveOptics',
        specificItems: ['diffraction'],
        diagramId: 'singleSlitCentralMaximaSecondaryMaximaDarkFringesDiffractionPatternDiagram',
        experimentId: 'single_slit_width_central_maximum_breadth_relationship_laser_experiment',
        contentKey: 'components'
    },
    {
        id: 'polarisation',
        label: 'Polarisation',
        sectionNumber: 4,
        subTopic: 'waveOptics',
        specificItems: ['polarisation'],
        diagramId: 'malussLawPolariserAnalyserAngleIntensityCosineDiagram',
        experimentId: 'malus_law_polaroid_sheets_intensity_angle_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'coherenceAndLasers',
        label: 'Coherence and Lasers',
        sectionNumber: 5,
        subTopic: 'waveOptics',
        specificItems: ['coherenceAndLasers'],
        diagramId: 'laserCoherentVsIncoherentSourceWavefrontComparisonDiagram',
        experimentId: 'laser_vs_white_light_double_slit_fringe_visibility_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'resolution',
        label: 'Resolution',
        sectionNumber: 6,
        subTopic: 'waveOptics',
        specificItems: ['resolution'],
        diagramId: 'rayleighCriterionTwoPointSourcesDiffractionPatternOverlapDiagram',
        experimentId: 'resolving_power_aperture_size_wavelength_two_point_sources_experiment',
        contentKey: 'components'
    },
    {
        id: 'holography',
        label: 'Holography',
        sectionNumber: 7,
        subTopic: 'waveOptics',
        specificItems: ['holography'],
        diagramId: 'hologramRecordingReconstructionObjectReferenceBeamInterferenceDiagram',
        experimentId: 'hologram_viewing_angle_three_dimensional_image_parallax_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'electromagneticSpectrum',
        label: 'Electromagnetic Spectrum',
        sectionNumber: 8,
        subTopic: 'waveOptics',
        specificItems: ['electromagneticSpectrum'],
        diagramId: 'electromagneticSpectrumWavelengthFrequencyEnergyScaleDiagram',
        experimentId: 'em_spectrum_detection_methods_radio_ir_visible_uv_xray_survey_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: 'Applications of Wave Optics',
        sectionNumber: 9,
        subTopic: 'waveOptics',
        specificItems: ['applications'],
        diagramId: 'xrayDiffractionBraggPlanesCrystalLatticeSpacingDiagram',
        experimentId: 'diffraction_grating_spectroscopy_mercury_lamp_wavelength_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'limitsOfWaveOptics',
        label: 'Limits of Wave Optics',
        sectionNumber: 10,
        subTopic: 'waveOptics',
        specificItems: ['limitsOfWaveOptics'],
        diagramId: 'photoelectricEffectThresholdFrequencyMaxKineticEnergyGraphDiagram',
        experimentId: 'photoelectric_effect_threshold_frequency_stopping_voltage_measurement_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'dispersionSpectra',
        specificItems: ['foundations'],
        diagramId: 'cauchyEquationRefractiveIndexWavelengthNormalDispersionCurveDiagram',
        experimentId: 'refractive_index_wavelength_dependence_coloured_filters_glass_block_experiment',
        contentKey: 'components'
    },
    {
        id: 'prismDispersion',
        label: 'Prism Dispersion',
        sectionNumber: 2,
        subTopic: 'dispersionSpectra',
        specificItems: ['prismDispersion'],
        diagramId: 'prismWhiteLightDispersionAngularSpreadVioletRedDiagram',
        experimentId: 'prism_white_light_spectrum_angular_dispersion_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'rainbow',
        label: 'Rainbow',
        sectionNumber: 3,
        subTopic: 'dispersionSpectra',
        specificItems: ['rainbow'],
        diagramId: 'primaryRainbowRaindropRefractionInternalReflectionAngles42DegreeDiagram',
        experimentId: 'rainbow_simulation_spherical_water_flask_internal_reflection_dispersion_experiment',
        contentKey: 'components'
    },
    {
        id: 'typesOfSpectra',
        label: 'Types of Spectra',
        sectionNumber: 4,
        subTopic: 'dispersionSpectra',
        specificItems: ['typesOfSpectra'],
        diagramId: 'continuousEmissionAbsorptionBlackbodySpectraComparisonDiagram',
        experimentId: 'spectroscope_comparison_continuous_emission_absorption_spectra_experiment',
        contentKey: 'components'
    },
    {
        id: 'atomicEnergyLevels',
        label: 'Atomic Energy Levels and Spectra',
        sectionNumber: 5,
        subTopic: 'dispersionSpectra',
        specificItems: ['atomicEnergyLevels'],
        diagramId: 'hydrogenBohrModelEnergyLevelTransitionsBalmerSeriesDiagram',
        experimentId: 'hydrogen_discharge_tube_balmer_series_diffraction_grating_wavelength_experiment',
        contentKey: 'components'
    },
    {
        id: 'stellarSpectra',
        label: 'Stellar Spectra',
        sectionNumber: 6,
        subTopic: 'dispersionSpectra',
        specificItems: ['stellarSpectra'],
        diagramId: 'obafgkmSpectralClassTemperatureColourAbsorptionLineSummaryDiagram',
        experimentId: 'stellar_spectra_classification_fraunhofer_line_identification_activity_experiment',
        contentKey: 'components'
    },
    {
        id: 'diffractionGratingSpectra',
        label: 'Diffraction Grating Spectra',
        sectionNumber: 7,
        subTopic: 'dispersionSpectra',
        specificItems: ['diffractionGratingSpectra'],
        diagramId: 'diffractionGratingOrdersSpectrumAngularPositionWavelengthDiagram',
        experimentId: 'diffraction_grating_sodium_mercury_wavelength_resolving_power_experiment',
        contentKey: 'components'
    },
    {
        id: 'colour',
        label: 'Colour',
        sectionNumber: 8,
        subTopic: 'dispersionSpectra',
        specificItems: ['colour'],
        diagramId: 'additiveSubtractiveColourMixingRGBCMYPrimarysDiagram',
        experimentId: 'additive_colour_mixing_rgb_led_overlap_white_light_experiment',
        contentKey: 'components'
    },
    {
        id: 'applicationsOfSpectroscopy',
        label: 'Applications of Spectroscopy',
        sectionNumber: 9,
        subTopic: 'dispersionSpectra',
        specificItems: ['applicationsOfSpectroscopy'],
        diagramId: 'beerLambertLawAbsorbanceConcentrationPathLengthSetupDiagram',
        experimentId: 'beer_lambert_law_copper_sulfate_concentration_absorbance_colorimeter_experiment',
        contentKey: 'components'
    },
    {
        id: 'dopplerEffectForLight',
        label: 'Doppler Effect for Light',
        sectionNumber: 10,
        subTopic: 'dispersionSpectra',
        specificItems: ['dopplerEffectForLight'],
        diagramId: 'redshiftBlueshiftSpectralLineDisplacementRecessingApproachingSourceDiagram',
        experimentId: 'doppler_shift_stellar_spectra_radial_velocity_fraunhofer_line_measurement_experiment',
        contentKey: 'components'
    },




    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'kinematics',
        specificItems: ['foundations'],
        diagramId: 'displacementVsDistanceVectorScalarDiagram',
        experimentId: 'distance_displacement_walking_path_mapping_experiment',
        contentKey: 'components'
    },
    {
        id: 'speed_and_velocity',
        label: 'Speed and Velocity',
        sectionNumber: 2,
        subTopic: 'kinematics',
        specificItems: ['speed_and_velocity'],
        diagramId: 'averageVsInstantaneousVelocityTangentDiagram',
        experimentId: 'average_speed_ticker_tape_trolley_ramp_experiment',
        contentKey: 'components'
    },
    {
        id: 'acceleration',
        label: 'Acceleration',
        sectionNumber: 3,
        subTopic: 'kinematics',
        specificItems: ['acceleration'],
        diagramId: 'uniformNonUniformAccelerationVelocityTimeGraph',
        experimentId: 'constant_acceleration_light_gate_timing_experiment',
        contentKey: 'components'
    },
    {
        id: 'equations_of_motion',
        label: 'Equations of Motion (SUVAT)',
        sectionNumber: 4,
        subTopic: 'kinematics',
        specificItems: ['equations_of_motion'],
        diagramId: 'suvatEquationSelectionFlowchart',
        experimentId: 'suvat_ball_drop_timing_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'free_fall_and_gravity',
        label: 'Free Fall and Gravity',
        sectionNumber: 5,
        subTopic: 'kinematics',
        specificItems: ['free_fall_and_gravity'],
        diagramId: 'freeFallTerminalVelocityVelocityTimeGraph',
        experimentId: 'gravitational_acceleration_falling_object_photogate_experiment',
        contentKey: 'components'
    },
    {
        id: 'projectile_motion',
        label: 'Projectile Motion',
        sectionNumber: 6,
        subTopic: 'kinematics',
        specificItems: ['projectile_motion'],
        diagramId: 'projectileParabolicTrajectoryComponentsDiagram',
        experimentId: 'projectile_horizontal_launch_range_landing_point_experiment',
        contentKey: 'components'
    },
    {
        id: 'graphical_analysis',
        label: 'Graphical Analysis of Motion',
        sectionNumber: 7,
        subTopic: 'kinematics',
        specificItems: ['graphical_analysis'],
        diagramId: 'displacementVelocityAccelerationTimeGraphsTrioDiagram',
        experimentId: 'motion_sensor_logger_graph_interpretation_experiment',
        contentKey: 'components'
    },
    {
        id: 'relative_motion',
        label: 'Relative Motion',
        sectionNumber: 8,
        subTopic: 'kinematics',
        specificItems: ['relative_motion'],
        diagramId: 'relativeVelocityVectorSubtractionRiverCrossingDiagram',
        experimentId: 'river_crossing_angle_drift_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'motion_in_2D_3D',
        label: 'Motion in 2D and 3D',
        sectionNumber: 9,
        subTopic: 'kinematics',
        specificItems: ['motion_in_2D_3D'],
        diagramId: 'twoDimensionalVectorComponentsResolutionDiagram',
        experimentId: 'two_dimensional_motion_air_table_puck_experiment',
        contentKey: 'components'
    },
    {
        id: 'calculus_kinematics',
        label: 'Calculus-Based Kinematics',
        sectionNumber: 10,
        subTopic: 'kinematics',
        specificItems: ['calculus_kinematics'],
        diagramId: 'differentiationIntegrationKinematicLinksDiagram',
        experimentId: 'variable_acceleration_numerical_integration_datalogger_experiment',
        contentKey: 'components'
    },
    {
        id: 'types_of_motion',
        label: 'Uniform and Non-Uniform Motion',
        sectionNumber: 11,
        subTopic: 'kinematics',
        specificItems: ['types_of_motion'],
        diagramId: 'uniformUniformlyAcceleratedNonUniformGraphComparisonDiagram',
        experimentId: 'comparing_motion_types_battery_powered_buggy_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'dynamics',
        specificItems: ['foundations'],
        diagramId: 'freeBodyDiagramForceLabellingTemplate',
        experimentId: 'mass_weight_spring_balance_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'newtons_laws',
        label: "Newton's Three Laws",
        sectionNumber: 2,
        subTopic: 'dynamics',
        specificItems: ['newtons_laws'],
        diagramId: 'newtonThreeLawsActionReactionPairsDiagram',
        experimentId: 'newtons_second_law_trolley_hanging_mass_light_gate_experiment',
        contentKey: 'components'
    },
    {
        id: 'types_of_forces',
        label: 'Types of Forces',
        sectionNumber: 3,
        subTopic: 'dynamics',
        specificItems: ['types_of_forces'],
        diagramId: 'contactNonContactForcesClassificationDiagram',
        experimentId: 'friction_coefficient_wooden_block_surface_experiment',
        contentKey: 'components'
    },
    {
        id: 'applications',
        label: "Applications of Newton's Laws",
        sectionNumber: 4,
        subTopic: 'dynamics',
        specificItems: ['applications'],
        diagramId: 'atwoodMachineConnectedBodyFreeBodyDiagram',
        experimentId: 'atwood_machine_acceleration_mass_ratio_experiment',
        contentKey: 'components'
    },
    {
        id: 'universal_gravitation',
        label: "Newton's Law of Universal Gravitation",
        sectionNumber: 5,
        subTopic: 'dynamics',
        specificItems: ['universal_gravitation'],
        diagramId: 'inverseSquearedGravitationalFieldLinesDistanceDiagram',
        experimentId: 'gravitational_field_strength_pendulum_different_locations_experiment',
        contentKey: 'components'
    },
    {
        id: 'equilibrium',
        label: 'Equilibrium',
        sectionNumber: 6,
        subTopic: 'dynamics',
        specificItems: ['equilibrium'],
        diagramId: 'staticEquilibriumForceTriangleConcurrentForcesDiagram',
        experimentId: 'concurrent_forces_force_board_equilibrium_experiment',
        contentKey: 'components'
    },
    {
        id: 'friction_in_depth',
        label: 'Friction in Depth',
        sectionNumber: 7,
        subTopic: 'dynamics',
        specificItems: ['friction_in_depth'],
        diagramId: 'staticKineticFrictionForceAppliedForceComparisonGraph',
        experimentId: 'angle_of_friction_inclined_plane_sliding_threshold_experiment',
        contentKey: 'components'
    },
    {
        id: 'non_inertial_frames',
        label: 'Non-Inertial Frames and Pseudo-Forces',
        sectionNumber: 8,
        subTopic: 'dynamics',
        specificItems: ['non_inertial_frames'],
        diagramId: 'pseudoForceCentrifugalCoriolisRotatingFrameDiagram',
        experimentId: 'rotating_platform_marble_path_non_inertial_frame_experiment',
        contentKey: 'components'
    },
    {
        id: 'variable_force_dynamics',
        label: 'Dynamics with Variable Force',
        sectionNumber: 9,
        subTopic: 'dynamics',
        specificItems: ['variable_force_dynamics'],
        diagramId: 'forceTimeGraphImpulseAreaVariableForceDiagram',
        experimentId: 'variable_force_rubber_band_launcher_force_sensor_experiment',
        contentKey: 'components'
    },
    {
        id: 'tension_analysis',
        label: 'Tension in Ropes and Strings',
        sectionNumber: 10,
        subTopic: 'dynamics',
        specificItems: ['tension_analysis'],
        diagramId: 'tensionVariationAlongMassiveStringDiagram',
        experimentId: 'tension_massive_string_hanging_mass_dynamometer_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'energyWorkPower',
        specificItems: ['foundations'],
        diagramId: 'energyFormsTransformationFlowDiagram',
        experimentId: 'energy_forms_identification_everyday_devices_experiment',
        contentKey: 'components'
    },
    {
        id: 'work_in_depth',
        label: 'Work',
        sectionNumber: 2,
        subTopic: 'energyWorkPower',
        specificItems: ['work_in_depth'],
        diagramId: 'workDoneForceDisplacementAngleDiagram',
        experimentId: 'work_done_force_sensor_displacement_pulley_ramp_experiment',
        contentKey: 'components'
    },
    {
        id: 'kinetic_energy',
        label: 'Kinetic Energy',
        sectionNumber: 3,
        subTopic: 'energyWorkPower',
        specificItems: ['kinetic_energy'],
        diagramId: 'kineticEnergyVelocitySquaredProportionalityGraph',
        experimentId: 'kinetic_energy_mass_speed_light_gate_experiment',
        contentKey: 'components'
    },
    {
        id: 'work_energy_theorem',
        label: 'Work-Energy Theorem',
        sectionNumber: 4,
        subTopic: 'energyWorkPower',
        specificItems: ['work_energy_theorem'],
        diagramId: 'netWorkKineticEnergyChangeRelationshipDiagram',
        experimentId: 'work_energy_theorem_trolley_varying_force_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'potential_energy',
        label: 'Potential Energy',
        sectionNumber: 5,
        subTopic: 'energyWorkPower',
        specificItems: ['potential_energy'],
        diagramId: 'gravitationalElasticPotentialEnergyComparisonDiagram',
        experimentId: 'elastic_potential_energy_spring_compression_launch_height_experiment',
        contentKey: 'components'
    },
    {
        id: 'conservation_of_mechanical_energy',
        label: 'Conservation of Mechanical Energy',
        sectionNumber: 6,
        subTopic: 'energyWorkPower',
        specificItems: ['conservation_of_mechanical_energy'],
        diagramId: 'pendulumKineticPotentialEnergyExchangeDiagram',
        experimentId: 'mechanical_energy_conservation_pendulum_height_speed_experiment',
        contentKey: 'components'
    },
    {
        id: 'non_conservative_forces',
        label: 'Non-Conservative Forces and Energy Dissipation',
        sectionNumber: 7,
        subTopic: 'energyWorkPower',
        specificItems: ['non_conservative_forces'],
        diagramId: 'mechanicalEnergyLossFrictionThermalDissipationDiagram',
        experimentId: 'energy_dissipation_friction_ramp_temperature_rise_experiment',
        contentKey: 'components'
    },
    {
        id: 'power',
        label: 'Power',
        sectionNumber: 8,
        subTopic: 'energyWorkPower',
        specificItems: ['power'],
        diagramId: 'powerVelocityRelationshipEngineOutputDiagram',
        experimentId: 'human_power_output_stair_climbing_stopwatch_experiment',
        contentKey: 'components'
    },
    {
        id: 'spring_energy',
        label: 'Energy in Springs and Oscillations',
        sectionNumber: 9,
        subTopic: 'energyWorkPower',
        specificItems: ['spring_energy'],
        diagramId: 'springMassKineticElasticPotentialEnergyPositionGraph',
        experimentId: 'spring_elastic_potential_energy_mass_launch_height_experiment',
        contentKey: 'components'
    },
    {
        id: 'real_world_energy',
        label: 'Energy in Real-World Contexts',
        sectionNumber: 10,
        subTopic: 'energyWorkPower',
        specificItems: ['real_world_energy'],
        diagramId: 'renewableEnergyConversionChainHydroWindSolarDiagram',
        experimentId: 'hydroelectric_model_flow_rate_head_height_power_experiment',
        contentKey: 'components'
    },

    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'momentumCollisions',
        specificItems: ['foundations'],
        diagramId: 'linearMomentumMassVelocityVectorDiagram',
        experimentId: 'momentum_mass_velocity_trolley_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'impulse',
        label: 'Impulse',
        sectionNumber: 2,
        subTopic: 'momentumCollisions',
        specificItems: ['impulse'],
        diagramId: 'forceTimeGraphImpulseAreaAverageForceDiagram',
        experimentId: 'impulse_force_sensor_ball_impact_collision_time_experiment',
        contentKey: 'components'
    },
    {
        id: 'conservation_of_momentum',
        label: 'Conservation of Momentum',
        sectionNumber: 3,
        subTopic: 'momentumCollisions',
        specificItems: ['conservation_of_momentum'],
        diagramId: 'beforeAfterCollisionMomentumVectorsDiagram',
        experimentId: 'conservation_of_momentum_air_track_glider_collision_experiment',
        contentKey: 'components'
    },
    {
        id: 'types_of_collisions',
        label: 'Types of Collisions',
        sectionNumber: 4,
        subTopic: 'momentumCollisions',
        specificItems: ['types_of_collisions'],
        diagramId: 'elasticInelasticPerfectlyInelasticKineticEnergyComparisonDiagram',
        experimentId: 'elastic_vs_inelastic_collision_energy_loss_trolleys_experiment',
        contentKey: 'components'
    },
    {
        id: 'coefficient_of_restitution',
        label: 'Coefficient of Restitution',
        sectionNumber: 5,
        subTopic: 'momentumCollisions',
        specificItems: ['coefficient_of_restitution'],
        diagramId: 'bouncingBallDropHeightRestitutionCoefficientDiagram',
        experimentId: 'coefficient_of_restitution_ball_drop_bounce_height_experiment',
        contentKey: 'components'
    },
    {
        id: 'explosions_and_recoil',
        label: 'Explosions and Recoil',
        sectionNumber: 6,
        subTopic: 'momentumCollisions',
        specificItems: ['explosions_and_recoil'],
        diagramId: 'explosionRecoilMomentumConservationVectorDiagram',
        experimentId: 'recoil_spring_loaded_trolley_separation_velocity_experiment',
        contentKey: 'components'
    },
    {
        id: 'centre_of_mass',
        label: 'Centre of Mass',
        sectionNumber: 7,
        subTopic: 'momentumCollisions',
        specificItems: ['centre_of_mass'],
        diagramId: 'centreOfMassDiscreteAndContinuousSystemsDiagram',
        experimentId: 'centre_of_mass_irregular_lamina_plumb_line_experiment',
        contentKey: 'components'
    },
    {
        id: 'collisions_2D',
        label: '2D Collisions',
        sectionNumber: 8,
        subTopic: 'momentumCollisions',
        specificItems: ['collisions_2D'],
        diagramId: 'twoDimensionalGlancingCollisionComponentVectorsDiagram',
        experimentId: 'two_dimensional_collision_ball_bearings_carbon_paper_experiment',
        contentKey: 'components'
    },
    {
        id: 'angular_momentum',
        label: 'Angular Momentum',
        sectionNumber: 9,
        subTopic: 'momentumCollisions',
        specificItems: ['angular_momentum'],
        diagramId: 'angularMomentumConservationSpinnerArmExtensionDiagram',
        experimentId: 'angular_momentum_conservation_rotating_stool_mass_extension_experiment',
        contentKey: 'components'
    },
    {
        id: 'advanced_contexts',
        label: 'Momentum in Advanced Contexts',
        sectionNumber: 10,
        subTopic: 'momentumCollisions',
        specificItems: ['advanced_contexts'],
        diagramId: 'ballisticPendulumMomentumEnergyTwoStageDiagram',
        experimentId: 'ballistic_pendulum_bullet_speed_momentum_energy_experiment',
        contentKey: 'components'
    },


   {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'circularMotion',
        specificItems: ['foundations'],
        diagramId: 'angularDisplacementRadiansDegreesRevolutionsDiagram',
        experimentId: 'circular_motion_period_frequency_turntable_measurement_experiment',
        contentKey: 'components'
    },
    {
        id: 'angular_kinematics',
        label: 'Angular Kinematics',
        sectionNumber: 2,
        subTopic: 'circularMotion',
        specificItems: ['angular_kinematics'],
        diagramId: 'angularLinearVelocityRelationshipRotatingDiscDiagram',
        experimentId: 'angular_velocity_rotating_wheel_strobe_light_experiment',
        contentKey: 'components'
    },
    {
        id: 'centripetal_acceleration_and_force',
        label: 'Centripetal Acceleration and Force',
        sectionNumber: 3,
        subTopic: 'circularMotion',
        specificItems: ['centripetal_acceleration_and_force'],
        diagramId: 'centripetalAccelerationInwardVelocityTangentDiagram',
        experimentId: 'centripetal_force_bung_string_radius_speed_experiment',
        contentKey: 'components'
    },
    {
        id: 'uniform_circular_motion_applications',
        label: 'Uniform Circular Motion Applications',
        sectionNumber: 4,
        subTopic: 'circularMotion',
        specificItems: ['uniform_circular_motion_applications'],
        diagramId: 'conicalPendulumBankedRoadSatelliteOrbitForcesDiagram',
        experimentId: 'conical_pendulum_angle_speed_period_verification_experiment',
        contentKey: 'components'
    },
    {
        id: 'vertical_circular_motion',
        label: 'Vertical Circular Motion',
        sectionNumber: 5,
        subTopic: 'circularMotion',
        specificItems: ['vertical_circular_motion'],
        diagramId: 'verticalCircleTopBottomTensionWeightForcesDiagram',
        experimentId: 'minimum_speed_top_of_loop_bucket_water_demonstration_experiment',
        contentKey: 'components'
    },
    {
        id: 'torque',
        label: 'Torque',
        sectionNumber: 6,
        subTopic: 'circularMotion',
        specificItems: ['torque'],
        diagramId: 'torqueLeverArmPerpendicularForceDistanceDiagram',
        experimentId: 'torque_spanner_moment_arm_force_balance_experiment',
        contentKey: 'components'
    },
    {
        id: 'moment_of_inertia',
        label: 'Moment of Inertia',
        sectionNumber: 7,
        subTopic: 'circularMotion',
        specificItems: ['moment_of_inertia'],
        diagramId: 'momentOfInertiaMassDistributionAxisComparisonDiagram',
        experimentId: 'moment_of_inertia_rolling_objects_ramp_race_experiment',
        contentKey: 'components'
    },
    {
        id: 'rotational_kinetic_energy',
        label: 'Rotational Kinetic Energy',
        sectionNumber: 8,
        subTopic: 'circularMotion',
        specificItems: ['rotational_kinetic_energy'],
        diagramId: 'rollingObjectTranslationalRotationalKineticEnergySplitDiagram',
        experimentId: 'rolling_objects_ramp_speed_solid_hollow_cylinder_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'angular_momentum_circular',
        label: 'Angular Momentum in Circular Motion',
        sectionNumber: 9,
        subTopic: 'circularMotion',
        specificItems: ['angular_momentum_circular'],
        diagramId: 'angularMomentumConservationMomentOfInertiaOmegaProductDiagram',
        experimentId: 'angular_momentum_conservation_spinning_stool_arm_position_experiment',
        contentKey: 'components'
    },
    {
        id: 'special_topics',
        label: 'Special Topics in Rotation',
        sectionNumber: 10,
        subTopic: 'circularMotion',
        specificItems: ['special_topics'],
        diagramId: 'gyroscopePrecessionTorqueAngularMomentumVectorDiagram',
        experimentId: 'gyroscope_precession_rate_spin_speed_observation_experiment',
        contentKey: 'components'
    },


    {
        id: 'foundations',
        label: 'Foundations',
        sectionNumber: 1,
        subTopic: 'oscillations',
        specificItems: ['foundations'],
        diagramId: 'oscillationAmplitudePeriodFrequencyPhaseLabelledDiagram',
        experimentId: 'oscillation_amplitude_frequency_period_spring_ruler_experiment',
        contentKey: 'components'
    },
    {
        id: 'simple_harmonic_motion',
        label: 'Simple Harmonic Motion',
        sectionNumber: 2,
        subTopic: 'oscillations',
        specificItems: ['simple_harmonic_motion'],
        diagramId: 'shmDisplacementVelocityAccelerationPhaseRelationshipGraph',
        experimentId: 'shm_displacement_velocity_phase_relationship_motion_sensor_experiment',
        contentKey: 'components'
    },
    {
        id: 'energy_in_shm',
        label: 'Energy in SHM',
        sectionNumber: 3,
        subTopic: 'oscillations',
        specificItems: ['energy_in_shm'],
        diagramId: 'shmKineticPotentialTotalEnergyVsDisplacementGraph',
        experimentId: 'shm_energy_interchange_spring_mass_position_speed_logger_experiment',
        contentKey: 'components'
    },
    {
        id: 'spring_mass_system',
        label: 'Spring-Mass System',
        sectionNumber: 4,
        subTopic: 'oscillations',
        specificItems: ['spring_mass_system'],
        diagramId: 'springMassHorizontalVerticalEquilibriumOscillationDiagram',
        experimentId: 'spring_mass_period_vs_mass_stiffness_investigation_experiment',
        contentKey: 'components'
    },
    {
        id: 'simple_pendulum',
        label: 'Simple Pendulum',
        sectionNumber: 5,
        subTopic: 'oscillations',
        specificItems: ['simple_pendulum'],
        diagramId: 'simplePendulumLengthAngleRestoringForceDiagram',
        experimentId: 'pendulum_period_length_gravity_relationship_experiment',
        contentKey: 'components'
    },
    {
        id: 'other_shm_systems',
        label: 'Other SHM Systems',
        sectionNumber: 6,
        subTopic: 'oscillations',
        specificItems: ['other_shm_systems'],
        diagramId: 'compoundTorsionalPendulumLCCircuitSHMAnalogiesDiagram',
        experimentId: 'torsional_pendulum_period_inertia_twist_constant_experiment',
        contentKey: 'components'
    },
    {
        id: 'damped_oscillations',
        label: 'Damped Oscillations',
        sectionNumber: 7,
        subTopic: 'oscillations',
        specificItems: ['damped_oscillations'],
        diagramId: 'underdampedCriticallyDampedOverdampedDisplacementTimeComparison',
        experimentId: 'damped_oscillation_spring_water_air_card_damping_comparison_experiment',
        contentKey: 'components'
    },
    {
        id: 'forced_oscillations_resonance',
        label: 'Forced Oscillations and Resonance',
        sectionNumber: 8,
        subTopic: 'oscillations',
        specificItems: ['forced_oscillations_resonance'],
        diagramId: 'resonanceFrequencyResponseAmplitudeCurveQFactorDiagram',
        experimentId: 'resonance_bartons_pendulums_driving_frequency_sweep_experiment',
        contentKey: 'components'
    },
    {
        id: 'coupled_oscillators',
        label: 'Coupled Oscillators',
        sectionNumber: 9,
        subTopic: 'oscillations',
        specificItems: ['coupled_oscillators'],
        diagramId: 'coupledPendulumNormalModesSymmetricAntisymmetricDiagram',
        experimentId: 'coupled_pendulums_energy_transfer_beat_frequency_experiment',
        contentKey: 'components'
    },
    {
        id: 'shm_waves_connection',
        label: 'SHM and Waves Connection',
        sectionNumber: 10,
        subTopic: 'oscillations',
        specificItems: ['shm_waves_connection'],
        diagramId: 'standingWaveNodesAntinodesParticlesSHMDiagram',
        experimentId: 'standing_waves_string_frequency_harmonics_driven_oscillator_experiment',
        contentKey: 'components'
    }
];

